var $u = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
};
var Tt = (t, e, r) => ($u(t, e, "read from private field"), r ? r.call(t) : e.get(t)), pr = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, ir = (t, e, r, n) => ($u(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
import * as wn from "react";
import Xd, { useEffect as jr, useState as Io } from "react";
import "@walletconnect/modal-sign-html";
import eh from "events";
import { getSdkError as Qp } from "@walletconnect/utils";
import { create as Jp } from "zustand";
import { useQuery as Xp, useQueryClient as eg, onlineManager as tg, QueryClient as rg, QueryClientProvider as ng } from "@tanstack/react-query";
import sg from "debug";
const Vu = new eh();
async function Wr() {
  return new Promise((t) => {
    setInterval(() => {
    }, 200), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
  });
}
function th(t) {
  jr(() => (Wr().then((e) => {
    e.onSessionDelete(t);
  }), () => {
    Wr().then((e) => {
      e.offSessionDelete(t);
    });
  }), [t]);
}
function ig(t) {
  jr(() => (Wr().then((e) => {
    e.onSessionExpire(t);
  }), () => {
    Wr().then((e) => {
      e.offSessionExpire(t);
    });
  }), [t]);
}
function rh(t) {
  jr(() => (Wr().then((e) => {
    e.onSessionUpdate(t);
  }), () => {
    Wr().then((e) => {
      e.offSessionUpdate(t);
    });
  }), [t]);
}
function Er() {
  const [t, e] = Io(void 0);
  return th((r) => {
    r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), rh((r) => {
    if (t && r.topic === (t == null ? void 0 : t.topic)) {
      const { namespaces: n } = r.params, s = { ...t, namespaces: n };
      e(s);
    }
  }), ig((r) => {
    t && r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), jr(() => {
    async function r() {
      const s = await (await Wr()).getSession();
      e(s);
    }
    return r(), Vu.on("session_change", r), () => {
      Vu.off("session_change", r);
    };
  }, []), t;
}
function Ki(t) {
  jr(() => (Wr().then((e) => {
    e.onSessionEvent(t);
  }), () => {
    Wr().then((e) => {
      e.offSessionEvent(t);
    });
  }), [t]);
}
var og = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
function ag(t, e) {
  let r;
  try {
    r = t();
  } catch {
    return;
  }
  return {
    getItem: (s) => {
      var i;
      const a = (c) => c === null ? null : JSON.parse(c, e == null ? void 0 : e.reviver), o = (i = r.getItem(s)) != null ? i : null;
      return o instanceof Promise ? o.then(a) : a(o);
    },
    setItem: (s, i) => r.setItem(
      s,
      JSON.stringify(i, e == null ? void 0 : e.replacer)
    ),
    removeItem: (s) => r.removeItem(s)
  };
}
const ui = (t) => (e) => {
  try {
    const r = t(e);
    return r instanceof Promise ? r : {
      then(n) {
        return ui(n)(r);
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
        return ui(n)(r);
      }
    };
  }
}, cg = (t, e) => (r, n, s) => {
  let i = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (T) => T,
    version: 0,
    merge: (T, U) => ({
      ...U,
      ...T
    }),
    ...e
  }, a = !1;
  const o = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  let u;
  try {
    u = i.getStorage();
  } catch {
  }
  if (!u)
    return t(
      (...T) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        ), r(...T);
      },
      n,
      s
    );
  const d = ui(i.serialize), f = () => {
    const T = i.partialize({ ...n() });
    let U;
    const v = d({ state: T, version: i.version }).then(
      (O) => u.setItem(i.name, O)
    ).catch((O) => {
      U = O;
    });
    if (U)
      throw U;
    return v;
  }, p = s.setState;
  s.setState = (T, U) => {
    p(T, U), f();
  };
  const m = t(
    (...T) => {
      r(...T), f();
    },
    n,
    s
  );
  let b;
  const E = () => {
    var T;
    if (!u)
      return;
    a = !1, o.forEach((v) => v(n()));
    const U = ((T = i.onRehydrateStorage) == null ? void 0 : T.call(i, n())) || void 0;
    return ui(u.getItem.bind(u))(i.name).then((v) => {
      if (v)
        return i.deserialize(v);
    }).then((v) => {
      if (v)
        if (typeof v.version == "number" && v.version !== i.version) {
          if (i.migrate)
            return i.migrate(
              v.state,
              v.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return v.state;
    }).then((v) => {
      var O;
      return b = i.merge(
        v,
        (O = n()) != null ? O : m
      ), r(b, !0), f();
    }).then(() => {
      U == null || U(b, void 0), a = !0, c.forEach((v) => v(b));
    }).catch((v) => {
      U == null || U(void 0, v);
    });
  };
  return s.persist = {
    setOptions: (T) => {
      i = {
        ...i,
        ...T
      }, T.getStorage && (u = T.getStorage());
    },
    clearStorage: () => {
      u == null || u.removeItem(i.name);
    },
    getOptions: () => i,
    rehydrate: () => E(),
    hasHydrated: () => a,
    onHydrate: (T) => (o.add(T), () => {
      o.delete(T);
    }),
    onFinishHydration: (T) => (c.add(T), () => {
      c.delete(T);
    })
  }, E(), b || m;
}, ug = (t, e) => (r, n, s) => {
  let i = {
    storage: ag(() => localStorage),
    partialize: (E) => E,
    version: 0,
    merge: (E, T) => ({
      ...T,
      ...E
    }),
    ...e
  }, a = !1;
  const o = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  let u = i.storage;
  if (!u)
    return t(
      (...E) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        ), r(...E);
      },
      n,
      s
    );
  const d = () => {
    const E = i.partialize({ ...n() });
    return u.setItem(i.name, {
      state: E,
      version: i.version
    });
  }, f = s.setState;
  s.setState = (E, T) => {
    f(E, T), d();
  };
  const p = t(
    (...E) => {
      r(...E), d();
    },
    n,
    s
  );
  s.getInitialState = () => p;
  let m;
  const b = () => {
    var E, T;
    if (!u)
      return;
    a = !1, o.forEach((v) => {
      var O;
      return v((O = n()) != null ? O : p);
    });
    const U = ((T = i.onRehydrateStorage) == null ? void 0 : T.call(i, (E = n()) != null ? E : p)) || void 0;
    return ui(u.getItem.bind(u))(i.name).then((v) => {
      if (v)
        if (typeof v.version == "number" && v.version !== i.version) {
          if (i.migrate)
            return i.migrate(
              v.state,
              v.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return v.state;
    }).then((v) => {
      var O;
      return m = i.merge(
        v,
        (O = n()) != null ? O : p
      ), r(m, !0), d();
    }).then(() => {
      U == null || U(m, void 0), m = n(), a = !0, c.forEach((v) => v(m));
    }).catch((v) => {
      U == null || U(void 0, v);
    });
  };
  return s.persist = {
    setOptions: (E) => {
      i = {
        ...i,
        ...E
      }, E.storage && (u = E.storage);
    },
    clearStorage: () => {
      u == null || u.removeItem(i.name);
    },
    getOptions: () => i,
    rehydrate: () => b(),
    hasHydrated: () => a,
    onHydrate: (E) => (o.add(E), () => {
      o.delete(E);
    }),
    onFinishHydration: (E) => (c.add(E), () => {
      c.delete(E);
    })
  }, i.skipHydration || b(), m || p;
}, lg = (t, e) => "getStorage" in e || "serialize" in e || "deserialize" in e ? ((og ? "production" : void 0) !== "production" && console.warn(
  "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
), cg(t, e)) : ug(t, e), dg = lg, hn = Jp()(
  dg((t, e) => ({
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
      }), bp.clear(), console.log("onDisconnect called!");
    }
  }), {
    name: "puzzle-wallet-store"
  })
);
function tu() {
  const [t, e] = Io(void 0), [r, n] = Io(void 0), [s, i] = Io(!1);
  return { data: t, error: r, loading: s, setData: e, setError: n, setLoading: i };
}
async function nh(t, e) {
  const n = await (await Wr()).request(t);
  if (n === void 0 && e)
    throw console.error("Result is undefined, retrying..."), new Error("Result is undefined, retrying...");
  return n;
}
function Bi({ queryKey: t, wcParams: e, enabled: r, queryOptions: n }) {
  return Xp(
    t,
    async () => nh(e, t),
    n ?? {
      staleTime: t[0] === "getEvent" ? 7500 : 45e3,
      refetchInterval: t[0] === "getEvent" ? 5e3 : 3e4,
      refetchIntervalInBackground: !0,
      enabled: r,
      retry: !0
    }
  );
}
function Hi(t) {
  const { data: e, error: r, loading: n, setData: s, setError: i, setLoading: a } = tu();
  async function o(c) {
    try {
      a(!0), i(void 0);
      const u = await nh(t ?? c);
      return s(u), u;
    } catch (u) {
      throw i(u), u;
    } finally {
      a(!1);
    }
  }
  return { data: e, error: r, loading: n, request: o };
}
const Xa = (t, e = !0, r = 4, n = !0) => t ? t.length < r ? t : n ? `(...${t.slice(-r)})` : t.length < r * 2 ? t : `${t.slice(
  0,
  r + (e ? 5 : 0)
)}...${t.slice(t.length - r, t.length)}` : "", K6 = () => {
  const t = Er(), [e, r, n] = hn((u) => [u.account, u.setAccount, u.onDisconnect]), { refetch: s, data: i, error: a, isLoading: o } = Bi({
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
  Ki(({ params: u, topic: d }) => {
    if (u.event.name === "accountSelected" && t && t.topic === d) {
      const p = u.event.address ?? u.event.data.address, m = u.chainId.split(":")[0], b = u.chainId.split(":")[1];
      r({
        network: m,
        chainId: b,
        address: p,
        shortenedAddress: Xa(p)
      });
    }
  }), rh(({ params: u, topic: d }) => {
    const f = u.event.address ?? u.event.data.address, p = u.chainId.split(":")[0], m = u.chainId.split(":")[1];
    r({
      network: p,
      chainId: m,
      address: f,
      shortenedAddress: Xa(f)
    });
  }), th(({ params: u, topic: d }) => {
    n();
  }), jr(() => {
    t && !o && s();
  }, [t == null ? void 0 : t.topic]), jr(() => {
    if (i) {
      const u = i, d = u == null ? void 0 : u.account;
      d && r(d);
    }
  }, [i]);
  const c = a ? a.message : i && i.error;
  return {
    account: e,
    error: c,
    loading: o
  };
}, B6 = ({ address: t, multisig: e }) => {
  const r = Er(), [n] = hn((f) => [f.account]), { refetch: s, data: i, error: a, isLoading: o } = Bi({
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
  Ki(({ params: f, topic: p }) => {
    const m = f.event.name, b = f.event.address ?? f.event.data.address;
    (m === "selectedAccountSynced" && !e || m === "sharedAccountSynced" && e && b === t) && s();
  }), jr(() => {
    r && !o && s();
  }, [r == null ? void 0 : r.topic]);
  const c = a ? a.message : i && i.error, u = i;
  return { balances: u == null ? void 0 : u.balances, error: c, loading: o };
}, hg = Symbol(), Zu = Object.getPrototypeOf, ec = /* @__PURE__ */ new WeakMap(), fg = (t) => t && (ec.has(t) ? ec.get(t) : Zu(t) === Object.prototype || Zu(t) === Array.prototype), pg = (t) => fg(t) && t[hg] || null, qu = (t, e = !0) => {
  ec.set(t, e);
};
var Lo = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const La = (t) => typeof t == "object" && t !== null, En = /* @__PURE__ */ new WeakMap(), fo = /* @__PURE__ */ new WeakSet(), gg = (t = Object.is, e = (u, d) => new Proxy(u, d), r = (u) => La(u) && !fo.has(u) && (Array.isArray(u) || !(Symbol.iterator in u)) && !(u instanceof WeakMap) && !(u instanceof WeakSet) && !(u instanceof Error) && !(u instanceof Number) && !(u instanceof Date) && !(u instanceof String) && !(u instanceof RegExp) && !(u instanceof ArrayBuffer), n = (u) => {
  switch (u.status) {
    case "fulfilled":
      return u.value;
    case "rejected":
      throw u.reason;
    default:
      throw u;
  }
}, s = /* @__PURE__ */ new WeakMap(), i = (u, d, f = n) => {
  const p = s.get(u);
  if ((p == null ? void 0 : p[0]) === d)
    return p[1];
  const m = Array.isArray(u) ? [] : Object.create(Object.getPrototypeOf(u));
  return qu(m, !0), s.set(u, [d, m]), Reflect.ownKeys(u).forEach((b) => {
    if (Object.getOwnPropertyDescriptor(m, b))
      return;
    const E = Reflect.get(u, b), T = {
      value: E,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (fo.has(E))
      qu(E, !1);
    else if (E instanceof Promise)
      delete T.value, T.get = () => f(E);
    else if (En.has(E)) {
      const [U, v] = En.get(
        E
      );
      T.value = i(
        U,
        v(),
        f
      );
    }
    Object.defineProperty(m, b, T);
  }), Object.preventExtensions(m);
}, a = /* @__PURE__ */ new WeakMap(), o = [1, 1], c = (u) => {
  if (!La(u))
    throw new Error("object required");
  const d = a.get(u);
  if (d)
    return d;
  let f = o[0];
  const p = /* @__PURE__ */ new Set(), m = (g, P = ++o[0]) => {
    f !== P && (f = P, p.forEach((k) => k(g, P)));
  };
  let b = o[1];
  const E = (g = ++o[1]) => (b !== g && !p.size && (b = g, U.forEach(([P]) => {
    const k = P[1](g);
    k > f && (f = k);
  })), f), T = (g) => (P, k) => {
    const M = [...P];
    M[1] = [g, ...M[1]], m(M, k);
  }, U = /* @__PURE__ */ new Map(), v = (g, P) => {
    if ((Lo ? "production" : void 0) !== "production" && U.has(g))
      throw new Error("prop listener already exists");
    if (p.size) {
      const k = P[3](T(g));
      U.set(g, [P, k]);
    } else
      U.set(g, [P]);
  }, O = (g) => {
    var P;
    const k = U.get(g);
    k && (U.delete(g), (P = k[1]) == null || P.call(k));
  }, w = (g) => (p.add(g), p.size === 1 && U.forEach(([P, k], M) => {
    if ((Lo ? "production" : void 0) !== "production" && k)
      throw new Error("remove already exists");
    const G = P[3](T(M));
    U.set(M, [P, G]);
  }), () => {
    p.delete(g), p.size === 0 && U.forEach(([P, k], M) => {
      k && (k(), U.set(M, [P]));
    });
  }), x = Array.isArray(u) ? [] : Object.create(Object.getPrototypeOf(u)), y = e(x, {
    deleteProperty(g, P) {
      const k = Reflect.get(g, P);
      O(P);
      const M = Reflect.deleteProperty(g, P);
      return M && m(["delete", [P], k]), M;
    },
    set(g, P, k, M) {
      const G = Reflect.has(g, P), Y = Reflect.get(g, P, M);
      if (G && (t(Y, k) || a.has(k) && t(Y, a.get(k))))
        return !0;
      O(P), La(k) && (k = pg(k) || k);
      let C = k;
      if (k instanceof Promise)
        k.then((A) => {
          k.status = "fulfilled", k.value = A, m(["resolve", [P], A]);
        }).catch((A) => {
          k.status = "rejected", k.reason = A, m(["reject", [P], A]);
        });
      else {
        !En.has(k) && r(k) && (C = c(k));
        const A = !fo.has(C) && En.get(C);
        A && v(P, A);
      }
      return Reflect.set(g, P, C, M), m(["set", [P], k, Y]), !0;
    }
  });
  a.set(u, y);
  const l = [
    x,
    E,
    i,
    w
  ];
  return En.set(y, l), Reflect.ownKeys(u).forEach((g) => {
    const P = Object.getOwnPropertyDescriptor(
      u,
      g
    );
    "value" in P && (y[g] = u[g], delete P.value, delete P.writable), Object.defineProperty(x, g, P);
  }), y;
}) => [
  // public functions
  c,
  // shared state
  En,
  fo,
  // internal things
  t,
  e,
  r,
  n,
  s,
  i,
  a,
  o
], [yg] = gg();
function Un(t = {}) {
  return yg(t);
}
function is(t, e, r) {
  const n = En.get(t);
  (Lo ? "production" : void 0) !== "production" && !n && console.warn("Please use proxy object");
  let s;
  const i = [], a = n[3];
  let o = !1;
  const c = a((u) => {
    if (i.push(u), r) {
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
function mg(t, e) {
  const r = En.get(t);
  (Lo ? "production" : void 0) !== "production" && !r && console.warn("Please use proxy object");
  const [n, s, i] = r;
  return i(n, s(), e);
}
const Pt = Un({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), sh = { state: Pt, subscribe(t) {
  return is(Pt, () => t(Pt));
}, push(t, e) {
  t !== Pt.view && (Pt.view = t, e && (Pt.data = e), Pt.history.push(t));
}, reset(t) {
  Pt.view = t, Pt.history = [t];
}, replace(t) {
  Pt.history.length > 1 && (Pt.history[Pt.history.length - 1] = t, Pt.view = t);
}, goBack() {
  if (Pt.history.length > 1) {
    Pt.history.pop();
    const [t] = Pt.history.slice(-1);
    Pt.view = t;
  }
}, setData(t) {
  Pt.data = t;
} }, Bt = { WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE", WCM_VERSION: "WCM_VERSION", RECOMMENDED_WALLET_AMOUNT: 9, isMobile() {
  return typeof window < "u" ? !!(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
}, isAndroid() {
  return Bt.isMobile() && navigator.userAgent.toLowerCase().includes("android");
}, isIos() {
  const t = navigator.userAgent.toLowerCase();
  return Bt.isMobile() && (t.includes("iphone") || t.includes("ipad"));
}, isHttpUrl(t) {
  return t.startsWith("http://") || t.startsWith("https://");
}, isArray(t) {
  return Array.isArray(t) && t.length > 0;
}, formatNativeUrl(t, e, r) {
  if (Bt.isHttpUrl(t))
    return this.formatUniversalUrl(t, e, r);
  let n = t;
  n.includes("://") || (n = t.replaceAll("/", "").replaceAll(":", ""), n = `${n}://`), n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, r);
  const s = encodeURIComponent(e);
  return `${n}wc?uri=${s}`;
}, formatUniversalUrl(t, e, r) {
  if (!Bt.isHttpUrl(t))
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
    localStorage.setItem(Bt.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: t, name: e }));
  } catch {
    console.info("Unable to set WalletConnect deep link");
  }
}, setWalletConnectAndroidDeepLink(t) {
  try {
    const [e] = t.split("?");
    localStorage.setItem(Bt.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: e, name: "Android" }));
  } catch {
    console.info("Unable to set WalletConnect android deep link");
  }
}, removeWalletConnectDeepLink() {
  try {
    localStorage.removeItem(Bt.WALLETCONNECT_DEEPLINK_CHOICE);
  } catch {
    console.info("Unable to remove WalletConnect deep link");
  }
}, setModalVersionInStorage() {
  try {
    typeof localStorage < "u" && localStorage.setItem(Bt.WCM_VERSION, "2.6.2");
  } catch {
    console.info("Unable to set Web3Modal version in storage");
  }
}, getWalletRouterData() {
  var t;
  const e = (t = sh.state.data) == null ? void 0 : t.Wallet;
  if (!e)
    throw new Error('Missing "Wallet" view data');
  return e;
} }, vg = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), Zt = Un({ enabled: vg, userSessionId: "", events: [], connectedWalletId: void 0 }), _g = { state: Zt, subscribe(t) {
  return is(Zt.events, () => t(mg(Zt.events[Zt.events.length - 1])));
}, initialize() {
  Zt.enabled && typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" && (Zt.userSessionId = crypto.randomUUID());
}, setConnectedWalletId(t) {
  Zt.connectedWalletId = t;
}, click(t) {
  if (Zt.enabled) {
    const e = { type: "CLICK", name: t.name, userSessionId: Zt.userSessionId, timestamp: Date.now(), data: t };
    Zt.events.push(e);
  }
}, track(t) {
  if (Zt.enabled) {
    const e = { type: "TRACK", name: t.name, userSessionId: Zt.userSessionId, timestamp: Date.now(), data: t };
    Zt.events.push(e);
  }
}, view(t) {
  if (Zt.enabled) {
    const e = { type: "VIEW", name: t.name, userSessionId: Zt.userSessionId, timestamp: Date.now(), data: t };
    Zt.events.push(e);
  }
} }, Zr = Un({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }), Tr = { state: Zr, subscribe(t) {
  return is(Zr, () => t(Zr));
}, setChains(t) {
  Zr.chains = t;
}, setWalletConnectUri(t) {
  Zr.walletConnectUri = t;
}, setIsCustomDesktop(t) {
  Zr.isCustomDesktop = t;
}, setIsCustomMobile(t) {
  Zr.isCustomMobile = t;
}, setIsDataLoaded(t) {
  Zr.isDataLoaded = t;
}, setIsUiLoaded(t) {
  Zr.isUiLoaded = t;
}, setIsAuth(t) {
  Zr.isAuth = t;
} }, po = Un({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), Rs = { state: po, subscribe(t) {
  return is(po, () => t(po));
}, setConfig(t) {
  var e, r;
  _g.initialize(), Tr.setChains(t.chains), Tr.setIsAuth(!!t.enableAuthMode), Tr.setIsCustomMobile(!!((e = t.mobileWallets) != null && e.length)), Tr.setIsCustomDesktop(!!((r = t.desktopWallets) != null && r.length)), Bt.setModalVersionInStorage(), Object.assign(po, t);
} };
var bg = Object.defineProperty, Fu = Object.getOwnPropertySymbols, wg = Object.prototype.hasOwnProperty, Eg = Object.prototype.propertyIsEnumerable, Ku = (t, e, r) => e in t ? bg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Sg = (t, e) => {
  for (var r in e || (e = {}))
    wg.call(e, r) && Ku(t, r, e[r]);
  if (Fu)
    for (var r of Fu(e))
      Eg.call(e, r) && Ku(t, r, e[r]);
  return t;
};
const tc = "https://explorer-api.walletconnect.com", rc = "wcm", nc = "js-2.6.2";
async function go(t, e) {
  const r = Sg({ sdkType: rc, sdkVersion: nc }, e), n = new URL(t, tc);
  return n.searchParams.append("projectId", Rs.state.projectId), Object.entries(r).forEach(([s, i]) => {
    i && n.searchParams.append(s, String(i));
  }), (await fetch(n)).json();
}
const $n = { async getDesktopListings(t) {
  return go("/w3m/v1/getDesktopListings", t);
}, async getMobileListings(t) {
  return go("/w3m/v1/getMobileListings", t);
}, async getInjectedListings(t) {
  return go("/w3m/v1/getInjectedListings", t);
}, async getAllListings(t) {
  return go("/w3m/v1/getAllListings", t);
}, getWalletImageUrl(t) {
  return `${tc}/w3m/v1/getWalletImage/${t}?projectId=${Rs.state.projectId}&sdkType=${rc}&sdkVersion=${nc}`;
}, getAssetImageUrl(t) {
  return `${tc}/w3m/v1/getAssetImage/${t}?projectId=${Rs.state.projectId}&sdkType=${rc}&sdkVersion=${nc}`;
} };
var xg = Object.defineProperty, Bu = Object.getOwnPropertySymbols, Ig = Object.prototype.hasOwnProperty, Og = Object.prototype.propertyIsEnumerable, Hu = (t, e, r) => e in t ? xg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Tg = (t, e) => {
  for (var r in e || (e = {}))
    Ig.call(e, r) && Hu(t, r, e[r]);
  if (Bu)
    for (var r of Bu(e))
      Og.call(e, r) && Hu(t, r, e[r]);
  return t;
};
const Wu = Bt.isMobile(), qr = Un({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), H6 = { state: qr, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: t, explorerExcludedWalletIds: e } = Rs.state;
  if (t === "NONE" || e === "ALL" && !t)
    return qr.recomendedWallets;
  if (Bt.isArray(t)) {
    const r = { recommendedIds: t.join(",") }, { listings: n } = await $n.getAllListings(r), s = Object.values(n);
    s.sort((i, a) => {
      const o = t.indexOf(i.id), c = t.indexOf(a.id);
      return o - c;
    }), qr.recomendedWallets = s;
  } else {
    const { chains: r, isAuth: n } = Tr.state, s = r == null ? void 0 : r.join(","), i = Bt.isArray(e), a = { page: 1, sdks: n ? "auth_v1" : void 0, entries: Bt.RECOMMENDED_WALLET_AMOUNT, chains: s, version: 2, excludedIds: i ? e.join(",") : void 0 }, { listings: o } = Wu ? await $n.getMobileListings(a) : await $n.getDesktopListings(a);
    qr.recomendedWallets = Object.values(o);
  }
  return qr.recomendedWallets;
}, async getWallets(t) {
  const e = Tg({}, t), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: n } = Rs.state, { recomendedWallets: s } = qr;
  if (n === "ALL")
    return qr.wallets;
  s.length ? e.excludedIds = s.map((f) => f.id).join(",") : Bt.isArray(r) && (e.excludedIds = r.join(",")), Bt.isArray(n) && (e.excludedIds = [e.excludedIds, n].filter(Boolean).join(",")), Tr.state.isAuth && (e.sdks = "auth_v1");
  const { page: i, search: a } = t, { listings: o, total: c } = Wu ? await $n.getMobileListings(e) : await $n.getDesktopListings(e), u = Object.values(o), d = a ? "search" : "wallets";
  return qr[d] = { listings: [...qr[d].listings, ...u], total: c, page: i ?? 1 }, { listings: u, total: c };
}, getWalletImageUrl(t) {
  return $n.getWalletImageUrl(t);
}, getAssetImageUrl(t) {
  return $n.getAssetImageUrl(t);
}, resetSearch() {
  qr.search = { listings: [], total: 0, page: 1 };
} }, ds = Un({ open: !1 }), Ua = { state: ds, subscribe(t) {
  return is(ds, () => t(ds));
}, async open(t) {
  return new Promise((e) => {
    const { isUiLoaded: r, isDataLoaded: n } = Tr.state;
    if (Bt.removeWalletConnectDeepLink(), Tr.setWalletConnectUri(t == null ? void 0 : t.uri), Tr.setChains(t == null ? void 0 : t.chains), sh.reset("ConnectWallet"), r && n)
      ds.open = !0, e();
    else {
      const s = setInterval(() => {
        const i = Tr.state;
        i.isUiLoaded && i.isDataLoaded && (clearInterval(s), ds.open = !0, e());
      }, 200);
    }
  });
}, close() {
  ds.open = !1;
} };
var Cg = Object.defineProperty, Gu = Object.getOwnPropertySymbols, Ng = Object.prototype.hasOwnProperty, Pg = Object.prototype.propertyIsEnumerable, Yu = (t, e, r) => e in t ? Cg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, kg = (t, e) => {
  for (var r in e || (e = {}))
    Ng.call(e, r) && Yu(t, r, e[r]);
  if (Gu)
    for (var r of Gu(e))
      Pg.call(e, r) && Yu(t, r, e[r]);
  return t;
};
function Rg() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const Bs = Un({ themeMode: Rg() ? "dark" : "light" }), Qu = { state: Bs, subscribe(t) {
  return is(Bs, () => t(Bs));
}, setThemeConfig(t) {
  const { themeMode: e, themeVariables: r } = t;
  e && (Bs.themeMode = e), r && (Bs.themeVariables = kg({}, r));
} }, Vn = Un({ open: !1, message: "", variant: "success" }), W6 = { state: Vn, subscribe(t) {
  return is(Vn, () => t(Vn));
}, openToast(t, e) {
  Vn.open = !0, Vn.message = t, Vn.variant = e;
}, closeToast() {
  Vn.open = !1;
} };
let Ag = class {
  constructor(t) {
    this.openModal = Ua.open, this.closeModal = Ua.close, this.subscribeModal = Ua.subscribe, this.setTheme = Qu.setThemeConfig, Qu.setThemeConfig(t), Rs.setConfig(t), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-CHpClWja-DnWzxCOa.js");
      const t = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", t), Tr.setIsUiLoaded(!0);
    }
  }
};
var On = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ru(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function nu(t) {
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
var su = { exports: {} }, Es = typeof Reflect == "object" ? Reflect : null, Ju = Es && typeof Es.apply == "function" ? Es.apply : function(t, e, r) {
  return Function.prototype.apply.call(t, e, r);
}, Oo;
Es && typeof Es.ownKeys == "function" ? Oo = Es.ownKeys : Object.getOwnPropertySymbols ? Oo = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : Oo = function(t) {
  return Object.getOwnPropertyNames(t);
};
function jg(t) {
  console && console.warn && console.warn(t);
}
var ih = Number.isNaN || function(t) {
  return t !== t;
};
function et() {
  et.init.call(this);
}
su.exports = et;
su.exports.once = Dg;
et.EventEmitter = et;
et.prototype._events = void 0;
et.prototype._eventsCount = 0;
et.prototype._maxListeners = void 0;
var Xu = 10;
function fa(t) {
  if (typeof t != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
}
Object.defineProperty(et, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Xu;
  },
  set: function(t) {
    if (typeof t != "number" || t < 0 || ih(t))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
    Xu = t;
  }
});
et.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
et.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || ih(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function oh(t) {
  return t._maxListeners === void 0 ? et.defaultMaxListeners : t._maxListeners;
}
et.prototype.getMaxListeners = function() {
  return oh(this);
};
et.prototype.emit = function(t) {
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
    var a = new Error("Unhandled error." + (i ? " (" + i.message + ")" : ""));
    throw a.context = i, a;
  }
  var o = s[t];
  if (o === void 0)
    return !1;
  if (typeof o == "function")
    Ju(o, this, e);
  else
    for (var c = o.length, u = dh(o, c), r = 0; r < c; ++r)
      Ju(u[r], this, e);
  return !0;
};
function ah(t, e, r, n) {
  var s, i, a;
  if (fa(r), i = t._events, i === void 0 ? (i = t._events = /* @__PURE__ */ Object.create(null), t._eventsCount = 0) : (i.newListener !== void 0 && (t.emit(
    "newListener",
    e,
    r.listener ? r.listener : r
  ), i = t._events), a = i[e]), a === void 0)
    a = i[e] = r, ++t._eventsCount;
  else if (typeof a == "function" ? a = i[e] = n ? [r, a] : [a, r] : n ? a.unshift(r) : a.push(r), s = oh(t), s > 0 && a.length > s && !a.warned) {
    a.warned = !0;
    var o = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    o.name = "MaxListenersExceededWarning", o.emitter = t, o.type = e, o.count = a.length, jg(o);
  }
  return t;
}
et.prototype.addListener = function(t, e) {
  return ah(this, t, e, !1);
};
et.prototype.on = et.prototype.addListener;
et.prototype.prependListener = function(t, e) {
  return ah(this, t, e, !0);
};
function Lg() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function ch(t, e, r) {
  var n = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r }, s = Lg.bind(n);
  return s.listener = r, n.wrapFn = s, s;
}
et.prototype.once = function(t, e) {
  return fa(e), this.on(t, ch(this, t, e)), this;
};
et.prototype.prependOnceListener = function(t, e) {
  return fa(e), this.prependListener(t, ch(this, t, e)), this;
};
et.prototype.removeListener = function(t, e) {
  var r, n, s, i, a;
  if (fa(e), n = this._events, n === void 0)
    return this;
  if (r = n[t], r === void 0)
    return this;
  if (r === e || r.listener === e)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete n[t], n.removeListener && this.emit("removeListener", t, r.listener || e));
  else if (typeof r != "function") {
    for (s = -1, i = r.length - 1; i >= 0; i--)
      if (r[i] === e || r[i].listener === e) {
        a = r[i].listener, s = i;
        break;
      }
    if (s < 0)
      return this;
    s === 0 ? r.shift() : Ug(r, s), r.length === 1 && (n[t] = r[0]), n.removeListener !== void 0 && this.emit("removeListener", t, a || e);
  }
  return this;
};
et.prototype.off = et.prototype.removeListener;
et.prototype.removeAllListeners = function(t) {
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
function uh(t, e, r) {
  var n = t._events;
  if (n === void 0)
    return [];
  var s = n[e];
  return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? Mg(s) : dh(s, s.length);
}
et.prototype.listeners = function(t) {
  return uh(this, t, !0);
};
et.prototype.rawListeners = function(t) {
  return uh(this, t, !1);
};
et.listenerCount = function(t, e) {
  return typeof t.listenerCount == "function" ? t.listenerCount(e) : lh.call(t, e);
};
et.prototype.listenerCount = lh;
function lh(t) {
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
et.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Oo(this._events) : [];
};
function dh(t, e) {
  for (var r = new Array(e), n = 0; n < e; ++n)
    r[n] = t[n];
  return r;
}
function Ug(t, e) {
  for (; e + 1 < t.length; e++)
    t[e] = t[e + 1];
  t.pop();
}
function Mg(t) {
  for (var e = new Array(t.length), r = 0; r < e.length; ++r)
    e[r] = t[r].listener || t[r];
  return e;
}
function Dg(t, e) {
  return new Promise(function(r, n) {
    function s(a) {
      t.removeListener(e, i), n(a);
    }
    function i() {
      typeof t.removeListener == "function" && t.removeListener("error", s), r([].slice.call(arguments));
    }
    hh(t, e, i, { once: !0 }), e !== "error" && zg(t, s, { once: !0 });
  });
}
function zg(t, e, r) {
  typeof t.on == "function" && hh(t, "error", e, r);
}
function hh(t, e, r, n) {
  if (typeof t.on == "function")
    n.once ? t.once(e, r) : t.on(e, r);
  else if (typeof t.addEventListener == "function")
    t.addEventListener(e, function s(i) {
      n.once && t.removeEventListener(e, s), r(i);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
}
var Mr = su.exports;
const iu = /* @__PURE__ */ ru(Mr), $g = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, Vg = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, Zg = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function qg(t, e) {
  if (t === "__proto__" || t === "constructor" && e && typeof e == "object" && "prototype" in e) {
    Fg(t);
    return;
  }
  return e;
}
function Fg(t) {
  console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`);
}
function yo(t, e = {}) {
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
  if (!Zg.test(t)) {
    if (e.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return t;
  }
  try {
    if ($g.test(t) || Vg.test(t)) {
      if (e.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(t, qg);
    }
    return JSON.parse(t);
  } catch (n) {
    if (e.strict)
      throw n;
    return t;
  }
}
function Kg(t) {
  return !t || typeof t.then != "function" ? Promise.resolve(t) : t;
}
function kt(t, ...e) {
  try {
    return Kg(t(...e));
  } catch (r) {
    return Promise.reject(r);
  }
}
function Bg(t) {
  const e = typeof t;
  return t === null || e !== "object" && e !== "function";
}
function Hg(t) {
  const e = Object.getPrototypeOf(t);
  return !e || e.isPrototypeOf(Object);
}
function To(t) {
  if (Bg(t))
    return String(t);
  if (Hg(t) || Array.isArray(t))
    return JSON.stringify(t);
  if (typeof t.toJSON == "function")
    return To(t.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function fh() {
  if (typeof Buffer === void 0)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
const sc = "base64:";
function Wg(t) {
  if (typeof t == "string")
    return t;
  fh();
  const e = Buffer.from(t).toString("base64");
  return sc + e;
}
function Gg(t) {
  return typeof t != "string" || !t.startsWith(sc) ? t : (fh(), Buffer.from(t.slice(sc.length), "base64"));
}
function ar(t) {
  return t ? t.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : "";
}
function Yg(...t) {
  return ar(t.join(":"));
}
function mo(t) {
  return t = ar(t), t ? t + ":" : "";
}
const Qg = "memory", Jg = () => {
  const t = /* @__PURE__ */ new Map();
  return {
    name: Qg,
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
function Xg(t = {}) {
  const e = {
    mounts: { "": t.driver || Jg() },
    mountpoints: [""],
    watching: !1,
    watchListeners: [],
    unwatch: {}
  }, r = (u) => {
    for (const d of e.mountpoints)
      if (u.startsWith(d))
        return {
          base: d,
          relativeKey: u.slice(d.length),
          driver: e.mounts[d]
        };
    return {
      base: "",
      relativeKey: u,
      driver: e.mounts[""]
    };
  }, n = (u, d) => e.mountpoints.filter(
    (f) => f.startsWith(u) || d && u.startsWith(f)
  ).map((f) => ({
    relativeBase: u.length > f.length ? u.slice(f.length) : void 0,
    mountpoint: f,
    driver: e.mounts[f]
  })), s = (u, d) => {
    if (e.watching) {
      d = ar(d);
      for (const f of e.watchListeners)
        f(u, d);
    }
  }, i = async () => {
    if (!e.watching) {
      e.watching = !0;
      for (const u in e.mounts)
        e.unwatch[u] = await el(
          e.mounts[u],
          s,
          u
        );
    }
  }, a = async () => {
    if (e.watching) {
      for (const u in e.unwatch)
        await e.unwatch[u]();
      e.unwatch = {}, e.watching = !1;
    }
  }, o = (u, d, f) => {
    const p = /* @__PURE__ */ new Map(), m = (b) => {
      let E = p.get(b.base);
      return E || (E = {
        driver: b.driver,
        base: b.base,
        items: []
      }, p.set(b.base, E)), E;
    };
    for (const b of u) {
      const E = typeof b == "string", T = ar(E ? b : b.key), U = E ? void 0 : b.value, v = E || !b.options ? d : { ...d, ...b.options }, O = r(T);
      m(O).items.push({
        key: T,
        value: U,
        relativeKey: O.relativeKey,
        options: v
      });
    }
    return Promise.all([...p.values()].map((b) => f(b))).then(
      (b) => b.flat()
    );
  }, c = {
    // Item
    hasItem(u, d = {}) {
      u = ar(u);
      const { relativeKey: f, driver: p } = r(u);
      return kt(p.hasItem, f, d);
    },
    getItem(u, d = {}) {
      u = ar(u);
      const { relativeKey: f, driver: p } = r(u);
      return kt(p.getItem, f, d).then(
        (m) => yo(m)
      );
    },
    getItems(u, d) {
      return o(u, d, (f) => f.driver.getItems ? kt(
        f.driver.getItems,
        f.items.map((p) => ({
          key: p.relativeKey,
          options: p.options
        })),
        d
      ).then(
        (p) => p.map((m) => ({
          key: Yg(f.base, m.key),
          value: yo(m.value)
        }))
      ) : Promise.all(
        f.items.map((p) => kt(
          f.driver.getItem,
          p.relativeKey,
          p.options
        ).then((m) => ({
          key: p.key,
          value: yo(m)
        })))
      ));
    },
    getItemRaw(u, d = {}) {
      u = ar(u);
      const { relativeKey: f, driver: p } = r(u);
      return p.getItemRaw ? kt(p.getItemRaw, f, d) : kt(p.getItem, f, d).then(
        (m) => Gg(m)
      );
    },
    async setItem(u, d, f = {}) {
      if (d === void 0)
        return c.removeItem(u);
      u = ar(u);
      const { relativeKey: p, driver: m } = r(u);
      m.setItem && (await kt(m.setItem, p, To(d), f), m.watch || s("update", u));
    },
    async setItems(u, d) {
      await o(u, d, async (f) => {
        f.driver.setItems && await kt(
          f.driver.setItems,
          f.items.map((p) => ({
            key: p.relativeKey,
            value: To(p.value),
            options: p.options
          })),
          d
        ), f.driver.setItem && await Promise.all(
          f.items.map((p) => kt(
            f.driver.setItem,
            p.relativeKey,
            To(p.value),
            p.options
          ))
        );
      });
    },
    async setItemRaw(u, d, f = {}) {
      if (d === void 0)
        return c.removeItem(u, f);
      u = ar(u);
      const { relativeKey: p, driver: m } = r(u);
      if (m.setItemRaw)
        await kt(m.setItemRaw, p, d, f);
      else if (m.setItem)
        await kt(m.setItem, p, Wg(d), f);
      else
        return;
      m.watch || s("update", u);
    },
    async removeItem(u, d = {}) {
      typeof d == "boolean" && (d = { removeMeta: d }), u = ar(u);
      const { relativeKey: f, driver: p } = r(u);
      p.removeItem && (await kt(p.removeItem, f, d), (d.removeMeta || d.removeMata) && await kt(p.removeItem, f + "$", d), p.watch || s("remove", u));
    },
    // Meta
    async getMeta(u, d = {}) {
      typeof d == "boolean" && (d = { nativeOnly: d }), u = ar(u);
      const { relativeKey: f, driver: p } = r(u), m = /* @__PURE__ */ Object.create(null);
      if (p.getMeta && Object.assign(m, await kt(p.getMeta, f, d)), !d.nativeOnly) {
        const b = await kt(
          p.getItem,
          f + "$",
          d
        ).then((E) => yo(E));
        b && typeof b == "object" && (typeof b.atime == "string" && (b.atime = new Date(b.atime)), typeof b.mtime == "string" && (b.mtime = new Date(b.mtime)), Object.assign(m, b));
      }
      return m;
    },
    setMeta(u, d, f = {}) {
      return this.setItem(u + "$", d, f);
    },
    removeMeta(u, d = {}) {
      return this.removeItem(u + "$", d);
    },
    // Keys
    async getKeys(u, d = {}) {
      u = mo(u);
      const f = n(u, !0);
      let p = [];
      const m = [];
      for (const b of f) {
        const E = (await kt(
          b.driver.getKeys,
          b.relativeBase,
          d
        )).map((T) => b.mountpoint + ar(T)).filter((T) => !p.some((U) => T.startsWith(U)));
        m.push(...E), p = [
          b.mountpoint,
          ...p.filter((T) => !T.startsWith(b.mountpoint))
        ];
      }
      return u ? m.filter((b) => b.startsWith(u) && !b.endsWith("$")) : m.filter((b) => !b.endsWith("$"));
    },
    // Utils
    async clear(u, d = {}) {
      u = mo(u), await Promise.all(
        n(u, !1).map(async (f) => {
          if (f.driver.clear)
            return kt(f.driver.clear, f.relativeBase, d);
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
        Object.values(e.mounts).map((u) => tl(u))
      );
    },
    async watch(u) {
      return await i(), e.watchListeners.push(u), async () => {
        e.watchListeners = e.watchListeners.filter(
          (d) => d !== u
        ), e.watchListeners.length === 0 && await a();
      };
    },
    async unwatch() {
      e.watchListeners = [], await a();
    },
    // Mount
    mount(u, d) {
      if (u = mo(u), u && e.mounts[u])
        throw new Error(`already mounted at ${u}`);
      return u && (e.mountpoints.push(u), e.mountpoints.sort((f, p) => p.length - f.length)), e.mounts[u] = d, e.watching && Promise.resolve(el(d, s, u)).then((f) => {
        e.unwatch[u] = f;
      }).catch(console.error), c;
    },
    async unmount(u, d = !0) {
      u = mo(u), !(!u || !e.mounts[u]) && (e.watching && u in e.unwatch && (e.unwatch[u](), delete e.unwatch[u]), d && await tl(e.mounts[u]), e.mountpoints = e.mountpoints.filter((f) => f !== u), delete e.mounts[u]);
    },
    getMount(u = "") {
      u = ar(u) + ":";
      const d = r(u);
      return {
        driver: d.driver,
        base: d.base
      };
    },
    getMounts(u = "", d = {}) {
      return u = ar(u), n(u, d.parents).map((f) => ({
        driver: f.driver,
        base: f.mountpoint
      }));
    }
  };
  return c;
}
function el(t, e, r) {
  return t.watch ? t.watch((n, s) => e(n, r + s)) : () => {
  };
}
async function tl(t) {
  typeof t.dispose == "function" && await kt(t.dispose);
}
function os(t) {
  return new Promise((e, r) => {
    t.oncomplete = t.onsuccess = () => e(t.result), t.onabort = t.onerror = () => r(t.error);
  });
}
function ph(t, e) {
  const r = indexedDB.open(t);
  r.onupgradeneeded = () => r.result.createObjectStore(e);
  const n = os(r);
  return (s, i) => n.then((a) => i(a.transaction(e, s).objectStore(e)));
}
let Ma;
function Wi() {
  return Ma || (Ma = ph("keyval-store", "keyval")), Ma;
}
function rl(t, e = Wi()) {
  return e("readonly", (r) => os(r.get(t)));
}
function ey(t, e, r = Wi()) {
  return r("readwrite", (n) => (n.put(e, t), os(n.transaction)));
}
function ty(t, e = Wi()) {
  return e("readwrite", (r) => (r.delete(t), os(r.transaction)));
}
function ry(t = Wi()) {
  return t("readwrite", (e) => (e.clear(), os(e.transaction)));
}
function ny(t, e) {
  return t.openCursor().onsuccess = function() {
    this.result && (e(this.result), this.result.continue());
  }, os(t.transaction);
}
function sy(t = Wi()) {
  return t("readonly", (e) => {
    if (e.getAllKeys)
      return os(e.getAllKeys());
    const r = [];
    return ny(e, (n) => r.push(n.key)).then(() => r);
  });
}
const iy = (t) => JSON.stringify(t, (e, r) => typeof r == "bigint" ? r.toString() + "n" : r), oy = (t) => {
  const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = t.replace(e, '$1"$2n"$3');
  return JSON.parse(r, (n, s) => typeof s == "string" && s.match(/^\d+n$/) ? BigInt(s.substring(0, s.length - 1)) : s);
};
function pa(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return oy(t);
  } catch {
    return t;
  }
}
function Gi(t) {
  return typeof t == "string" ? t : iy(t) || "";
}
const ay = "idb-keyval";
var cy = (t = {}) => {
  const e = t.base && t.base.length > 0 ? `${t.base}:` : "", r = (s) => e + s;
  let n;
  return t.dbName && t.storeName && (n = ph(t.dbName, t.storeName)), { name: ay, options: t, async hasItem(s) {
    return !(typeof await rl(r(s), n) > "u");
  }, async getItem(s) {
    return await rl(r(s), n) ?? null;
  }, setItem(s, i) {
    return ey(r(s), i, n);
  }, removeItem(s) {
    return ty(r(s), n);
  }, getKeys() {
    return sy(n);
  }, clear() {
    return ry(n);
  } };
};
const uy = "WALLET_CONNECT_V2_INDEXED_DB", ly = "keyvaluestorage";
let dy = class {
  constructor() {
    this.indexedDb = Xg({ driver: cy({ dbName: uy, storeName: ly }) });
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
    await this.indexedDb.setItem(t, Gi(e));
  }
  async removeItem(t) {
    await this.indexedDb.removeItem(t);
  }
};
var Da = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Co = { exports: {} };
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
  }), typeof Da < "u" && Da.localStorage ? Co.exports = Da.localStorage : typeof window < "u" && window.localStorage ? Co.exports = window.localStorage : Co.exports = new e();
})();
function hy(t) {
  var e;
  return [t[0], pa((e = t[1]) != null ? e : "")];
}
let fy = class {
  constructor() {
    this.localStorage = Co.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(hy);
  }
  async getItem(t) {
    const e = this.localStorage.getItem(t);
    if (e !== null)
      return pa(e);
  }
  async setItem(t, e) {
    this.localStorage.setItem(t, Gi(e));
  }
  async removeItem(t) {
    this.localStorage.removeItem(t);
  }
};
const py = "wc_storage_version", nl = 1, gy = async (t, e, r) => {
  const n = py, s = await e.getItem(n);
  if (s && s >= nl) {
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
    const c = o.toLowerCase();
    if (c.includes("wc@") || c.includes("walletconnect") || c.includes("wc_") || c.includes("wallet_connect")) {
      const u = await t.getItem(o);
      await e.setItem(o, u), a.push(o);
    }
  }
  await e.setItem(n, nl), r(e), yy(t, a);
}, yy = async (t, e) => {
  e.length && e.forEach(async (r) => {
    await t.removeItem(r);
  });
};
let my = class {
  constructor() {
    this.initialized = !1, this.setInitialized = (e) => {
      this.storage = e, this.initialized = !0;
    };
    const t = new fy();
    this.storage = t;
    try {
      const e = new dy();
      gy(t, e, this.setInitialized);
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
var zs = {};
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
var ic = function(t, e) {
  return ic = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var s in n)
      n.hasOwnProperty(s) && (r[s] = n[s]);
  }, ic(t, e);
};
function vy(t, e) {
  ic(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var oc = function() {
  return oc = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, oc.apply(this, arguments);
};
function _y(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++)
      e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (r[n[s]] = t[n[s]]);
  return r;
}
function by(t, e, r, n) {
  var s = arguments.length, i = s < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var o = t.length - 1; o >= 0; o--)
      (a = t[o]) && (i = (s < 3 ? a(i) : s > 3 ? a(e, r, i) : a(e, r)) || i);
  return s > 3 && i && Object.defineProperty(e, r, i), i;
}
function wy(t, e) {
  return function(r, n) {
    e(r, n, t);
  };
}
function Ey(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function Sy(t, e, r, n) {
  function s(i) {
    return i instanceof r ? i : new r(function(a) {
      a(i);
    });
  }
  return new (r || (r = Promise))(function(i, a) {
    function o(d) {
      try {
        u(n.next(d));
      } catch (f) {
        a(f);
      }
    }
    function c(d) {
      try {
        u(n.throw(d));
      } catch (f) {
        a(f);
      }
    }
    function u(d) {
      d.done ? i(d.value) : s(d.value).then(o, c);
    }
    u((n = n.apply(t, e || [])).next());
  });
}
function xy(t, e) {
  var r = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, s, i, a;
  return a = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function o(u) {
    return function(d) {
      return c([u, d]);
    };
  }
  function c(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, s && (i = u[0] & 2 ? s.return : u[0] ? s.throw || ((i = s.return) && i.call(s), 0) : s.next) && !(i = i.call(s, u[1])).done)
          return i;
        switch (s = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, s = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (i = r.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < i[1]) {
              r.label = i[1], i = u;
              break;
            }
            if (i && r.label < i[2]) {
              r.label = i[2], r.ops.push(u);
              break;
            }
            i[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = e.call(t, r);
      } catch (d) {
        u = [6, d], s = 0;
      } finally {
        n = i = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function Iy(t, e, r, n) {
  n === void 0 && (n = r), t[n] = e[r];
}
function Oy(t, e) {
  for (var r in t)
    r !== "default" && !e.hasOwnProperty(r) && (e[r] = t[r]);
}
function ac(t) {
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
function gh(t, e) {
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
function Ty() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(gh(arguments[e]));
  return t;
}
function Cy() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var n = Array(t), s = 0, e = 0; e < r; e++)
    for (var i = arguments[e], a = 0, o = i.length; a < o; a++, s++)
      n[s] = i[a];
  return n;
}
function li(t) {
  return this instanceof li ? (this.v = t, this) : new li(t);
}
function Ny(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(t, e || []), s, i = [];
  return s = {}, a("next"), a("throw"), a("return"), s[Symbol.asyncIterator] = function() {
    return this;
  }, s;
  function a(p) {
    n[p] && (s[p] = function(m) {
      return new Promise(function(b, E) {
        i.push([p, m, b, E]) > 1 || o(p, m);
      });
    });
  }
  function o(p, m) {
    try {
      c(n[p](m));
    } catch (b) {
      f(i[0][3], b);
    }
  }
  function c(p) {
    p.value instanceof li ? Promise.resolve(p.value.v).then(u, d) : f(i[0][2], p);
  }
  function u(p) {
    o("next", p);
  }
  function d(p) {
    o("throw", p);
  }
  function f(p, m) {
    p(m), i.shift(), i.length && o(i[0][0], i[0][1]);
  }
}
function Py(t) {
  var e, r;
  return e = {}, n("next"), n("throw", function(s) {
    throw s;
  }), n("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function n(s, i) {
    e[s] = t[s] ? function(a) {
      return (r = !r) ? { value: li(t[s](a)), done: s === "return" } : i ? i(a) : a;
    } : i;
  }
}
function ky(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof ac == "function" ? ac(t) : t[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(i) {
    r[i] = t[i] && function(a) {
      return new Promise(function(o, c) {
        a = t[i](a), s(o, c, a.done, a.value);
      });
    };
  }
  function s(i, a, o, c) {
    Promise.resolve(c).then(function(u) {
      i({ value: u, done: o });
    }, a);
  }
}
function Ry(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
function Ay(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var r in t)
      Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e.default = t, e;
}
function jy(t) {
  return t && t.__esModule ? t : { default: t };
}
function Ly(t, e) {
  if (!e.has(t))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(t);
}
function Uy(t, e, r) {
  if (!e.has(t))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(t, r), r;
}
const My = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return oc;
  },
  __asyncDelegator: Py,
  __asyncGenerator: Ny,
  __asyncValues: ky,
  __await: li,
  __awaiter: Sy,
  __classPrivateFieldGet: Ly,
  __classPrivateFieldSet: Uy,
  __createBinding: Iy,
  __decorate: by,
  __exportStar: Oy,
  __extends: vy,
  __generator: xy,
  __importDefault: jy,
  __importStar: Ay,
  __makeTemplateObject: Ry,
  __metadata: Ey,
  __param: wy,
  __read: gh,
  __rest: _y,
  __spread: Ty,
  __spreadArrays: Cy,
  __values: ac
}, Symbol.toStringTag, { value: "Module" })), en = /* @__PURE__ */ nu(My);
var Hs = {}, ae = {}, sl = {}, Ws = {}, il;
function Dy() {
  if (il)
    return Ws;
  il = 1, Object.defineProperty(Ws, "__esModule", { value: !0 }), Ws.delay = void 0;
  function t(e) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, e);
    });
  }
  return Ws.delay = t, Ws;
}
var Zn = {}, ol = {}, hs = {}, al;
function zy() {
  return al || (al = 1, Object.defineProperty(hs, "__esModule", { value: !0 }), hs.ONE_THOUSAND = hs.ONE_HUNDRED = void 0, hs.ONE_HUNDRED = 100, hs.ONE_THOUSAND = 1e3), hs;
}
var cl = {}, ul;
function $y() {
  return ul || (ul = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = t.ONE_MINUTE * 5, t.TEN_MINUTES = t.ONE_MINUTE * 10, t.THIRTY_MINUTES = t.ONE_MINUTE * 30, t.SIXTY_MINUTES = t.ONE_MINUTE * 60, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = t.ONE_HOUR * 3, t.SIX_HOURS = t.ONE_HOUR * 6, t.TWELVE_HOURS = t.ONE_HOUR * 12, t.TWENTY_FOUR_HOURS = t.ONE_HOUR * 24, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = t.ONE_DAY * 3, t.FIVE_DAYS = t.ONE_DAY * 5, t.SEVEN_DAYS = t.ONE_DAY * 7, t.THIRTY_DAYS = t.ONE_DAY * 30, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = t.ONE_WEEK * 2, t.THREE_WEEKS = t.ONE_WEEK * 3, t.FOUR_WEEKS = t.ONE_WEEK * 4, t.ONE_YEAR = t.ONE_DAY * 365;
  }(cl)), cl;
}
var ll;
function yh() {
  return ll || (ll = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = en;
    e.__exportStar(zy(), t), e.__exportStar($y(), t);
  }(ol)), ol;
}
var dl;
function Vy() {
  if (dl)
    return Zn;
  dl = 1, Object.defineProperty(Zn, "__esModule", { value: !0 }), Zn.fromMiliseconds = Zn.toMiliseconds = void 0;
  const t = yh();
  function e(n) {
    return n * t.ONE_THOUSAND;
  }
  Zn.toMiliseconds = e;
  function r(n) {
    return Math.floor(n / t.ONE_THOUSAND);
  }
  return Zn.fromMiliseconds = r, Zn;
}
var hl;
function Zy() {
  return hl || (hl = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = en;
    e.__exportStar(Dy(), t), e.__exportStar(Vy(), t);
  }(sl)), sl;
}
var fs = {}, fl;
function qy() {
  if (fl)
    return fs;
  fl = 1, Object.defineProperty(fs, "__esModule", { value: !0 }), fs.Watch = void 0;
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
  return fs.Watch = t, fs.default = t, fs;
}
var pl = {}, Gs = {}, gl;
function Fy() {
  if (gl)
    return Gs;
  gl = 1, Object.defineProperty(Gs, "__esModule", { value: !0 }), Gs.IWatch = void 0;
  class t {
  }
  return Gs.IWatch = t, Gs;
}
var yl;
function Ky() {
  return yl || (yl = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), en.__exportStar(Fy(), t);
  }(pl)), pl;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = en;
  e.__exportStar(Zy(), t), e.__exportStar(qy(), t), e.__exportStar(Ky(), t), e.__exportStar(yh(), t);
})(ae);
var ml = {}, Ys = {};
let as = class {
};
const By = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: as
}, Symbol.toStringTag, { value: "Module" })), Hy = /* @__PURE__ */ nu(By);
var vl;
function Wy() {
  if (vl)
    return Ys;
  vl = 1, Object.defineProperty(Ys, "__esModule", { value: !0 }), Ys.IHeartBeat = void 0;
  const t = Hy;
  class e extends t.IEvents {
    constructor(n) {
      super();
    }
  }
  return Ys.IHeartBeat = e, Ys;
}
var _l;
function mh() {
  return _l || (_l = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), en.__exportStar(Wy(), t);
  }(ml)), ml;
}
var bl = {}, qn = {}, wl;
function Gy() {
  if (wl)
    return qn;
  wl = 1, Object.defineProperty(qn, "__esModule", { value: !0 }), qn.HEARTBEAT_EVENTS = qn.HEARTBEAT_INTERVAL = void 0;
  const t = ae;
  return qn.HEARTBEAT_INTERVAL = t.FIVE_SECONDS, qn.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, qn;
}
var El;
function vh() {
  return El || (El = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), en.__exportStar(Gy(), t);
  }(bl)), bl;
}
var Sl;
function Yy() {
  if (Sl)
    return Hs;
  Sl = 1, Object.defineProperty(Hs, "__esModule", { value: !0 }), Hs.HeartBeat = void 0;
  const t = en, e = Mr, r = ae, n = mh(), s = vh();
  class i extends n.IHeartBeat {
    constructor(o) {
      super(o), this.events = new e.EventEmitter(), this.interval = s.HEARTBEAT_INTERVAL, this.interval = (o == null ? void 0 : o.interval) || s.HEARTBEAT_INTERVAL;
    }
    static init(o) {
      return t.__awaiter(this, void 0, void 0, function* () {
        const c = new i(o);
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
    on(o, c) {
      this.events.on(o, c);
    }
    once(o, c) {
      this.events.once(o, c);
    }
    off(o, c) {
      this.events.off(o, c);
    }
    removeListener(o, c) {
      this.events.removeListener(o, c);
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
  return Hs.HeartBeat = i, Hs;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = en;
  e.__exportStar(Yy(), t), e.__exportStar(mh(), t), e.__exportStar(vh(), t);
})(zs);
var He = {}, za, xl;
function Qy() {
  if (xl)
    return za;
  xl = 1;
  function t(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  za = e;
  function e(r, n, s) {
    var i = s && s.stringify || t, a = 1;
    if (typeof r == "object" && r !== null) {
      var o = n.length + a;
      if (o === 1)
        return r;
      var c = new Array(o);
      c[0] = i(r);
      for (var u = 1; u < o; u++)
        c[u] = i(n[u]);
      return c.join(" ");
    }
    if (typeof r != "string")
      return r;
    var d = n.length;
    if (d === 0)
      return r;
    for (var f = "", p = 1 - a, m = -1, b = r && r.length || 0, E = 0; E < b; ) {
      if (r.charCodeAt(E) === 37 && E + 1 < b) {
        switch (m = m > -1 ? m : 0, r.charCodeAt(E + 1)) {
          case 100:
          case 102:
            if (p >= d || n[p] == null)
              break;
            m < E && (f += r.slice(m, E)), f += Number(n[p]), m = E + 2, E++;
            break;
          case 105:
            if (p >= d || n[p] == null)
              break;
            m < E && (f += r.slice(m, E)), f += Math.floor(Number(n[p])), m = E + 2, E++;
            break;
          case 79:
          case 111:
          case 106:
            if (p >= d || n[p] === void 0)
              break;
            m < E && (f += r.slice(m, E));
            var T = typeof n[p];
            if (T === "string") {
              f += "'" + n[p] + "'", m = E + 2, E++;
              break;
            }
            if (T === "function") {
              f += n[p].name || "<anonymous>", m = E + 2, E++;
              break;
            }
            f += i(n[p]), m = E + 2, E++;
            break;
          case 115:
            if (p >= d)
              break;
            m < E && (f += r.slice(m, E)), f += String(n[p]), m = E + 2, E++;
            break;
          case 37:
            m < E && (f += r.slice(m, E)), f += "%", m = E + 2, E++, p--;
            break;
        }
        ++p;
      }
      ++E;
    }
    return m === -1 ? r : (m < b && (f += r.slice(m)), f);
  }
  return za;
}
var $a, Il;
function Jy() {
  if (Il)
    return $a;
  Il = 1;
  const t = Qy();
  $a = s;
  const e = x().console || {}, r = {
    mapHttpRequest: b,
    mapHttpResponse: b,
    wrapRequestSerializer: E,
    wrapResponseSerializer: E,
    wrapErrorSerializer: E,
    req: b,
    res: b,
    err: p
  };
  function n(y, l) {
    return Array.isArray(y) ? y.filter(function(g) {
      return g !== "!stdSerializers.err";
    }) : y === !0 ? Object.keys(l) : !1;
  }
  function s(y) {
    y = y || {}, y.browser = y.browser || {};
    const l = y.browser.transmit;
    if (l && typeof l.send != "function")
      throw Error("pino: transmit option must have a send function");
    const g = y.browser.write || e;
    y.browser.write && (y.browser.asObject = !0);
    const P = y.serializers || {}, k = n(y.browser.serialize, P);
    let M = y.browser.serialize;
    Array.isArray(y.browser.serialize) && y.browser.serialize.indexOf("!stdSerializers.err") > -1 && (M = !1);
    const G = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof g == "function" && (g.error = g.fatal = g.warn = g.info = g.debug = g.trace = g), y.enabled === !1 && (y.level = "silent");
    const Y = y.level || "info", C = Object.create(g);
    C.log || (C.log = T), Object.defineProperty(C, "levelVal", {
      get: X
    }), Object.defineProperty(C, "level", {
      get: q,
      set: $
    });
    const A = {
      transmit: l,
      serialize: k,
      asObject: y.browser.asObject,
      levels: G,
      timestamp: m(y)
    };
    C.levels = s.levels, C.level = Y, C.setMaxListeners = C.getMaxListeners = C.emit = C.addListener = C.on = C.prependListener = C.once = C.prependOnceListener = C.removeListener = C.removeAllListeners = C.listeners = C.listenerCount = C.eventNames = C.write = C.flush = T, C.serializers = P, C._serialize = k, C._stdErrSerialize = M, C.child = Z, l && (C._logEvent = f());
    function X() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function q() {
      return this._level;
    }
    function $(z) {
      if (z !== "silent" && !this.levels.values[z])
        throw Error("unknown level " + z);
      this._level = z, i(A, C, "error", "log"), i(A, C, "fatal", "error"), i(A, C, "warn", "error"), i(A, C, "info", "log"), i(A, C, "debug", "log"), i(A, C, "trace", "log");
    }
    function Z(z, F) {
      if (!z)
        throw new Error("missing bindings for child Pino");
      F = F || {}, k && z.serializers && (F.serializers = z.serializers);
      const ye = F.serializers;
      if (k && ye) {
        var K = Object.assign({}, P, ye), de = y.browser.serialize === !0 ? Object.keys(K) : k;
        delete z.serializers, c([z], de, K, this._stdErrSerialize);
      }
      function ne(le) {
        this._childLevel = (le._childLevel | 0) + 1, this.error = u(le, z, "error"), this.fatal = u(le, z, "fatal"), this.warn = u(le, z, "warn"), this.info = u(le, z, "info"), this.debug = u(le, z, "debug"), this.trace = u(le, z, "trace"), K && (this.serializers = K, this._serialize = de), l && (this._logEvent = f(
          [].concat(le._logEvent.bindings, z)
        ));
      }
      return ne.prototype = this, new ne(this);
    }
    return C;
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
  }, s.stdSerializers = r, s.stdTimeFunctions = Object.assign({}, { nullTime: U, epochTime: v, unixTime: O, isoTime: w });
  function i(y, l, g, P) {
    const k = Object.getPrototypeOf(l);
    l[g] = l.levelVal > l.levels.values[g] ? T : k[g] ? k[g] : e[g] || e[P] || T, a(y, l, g);
  }
  function a(y, l, g) {
    !y.transmit && l[g] === T || (l[g] = /* @__PURE__ */ function(P) {
      return function() {
        const k = y.timestamp(), M = new Array(arguments.length), G = Object.getPrototypeOf && Object.getPrototypeOf(this) === e ? e : this;
        for (var Y = 0; Y < M.length; Y++)
          M[Y] = arguments[Y];
        if (y.serialize && !y.asObject && c(M, this._serialize, this.serializers, this._stdErrSerialize), y.asObject ? P.call(G, o(this, g, M, k)) : P.apply(G, M), y.transmit) {
          const C = y.transmit.level || l.level, A = s.levels.values[C], X = s.levels.values[g];
          if (X < A)
            return;
          d(this, {
            ts: k,
            methodLevel: g,
            methodValue: X,
            transmitLevel: C,
            transmitValue: s.levels.values[y.transmit.level || l.level],
            send: y.transmit.send,
            val: l.levelVal
          }, M);
        }
      };
    }(l[g]));
  }
  function o(y, l, g, P) {
    y._serialize && c(g, y._serialize, y.serializers, y._stdErrSerialize);
    const k = g.slice();
    let M = k[0];
    const G = {};
    P && (G.time = P), G.level = s.levels.values[l];
    let Y = (y._childLevel | 0) + 1;
    if (Y < 1 && (Y = 1), M !== null && typeof M == "object") {
      for (; Y-- && typeof k[0] == "object"; )
        Object.assign(G, k.shift());
      M = k.length ? t(k.shift(), k) : void 0;
    } else
      typeof M == "string" && (M = t(k.shift(), k));
    return M !== void 0 && (G.msg = M), G;
  }
  function c(y, l, g, P) {
    for (const k in y)
      if (P && y[k] instanceof Error)
        y[k] = s.stdSerializers.err(y[k]);
      else if (typeof y[k] == "object" && !Array.isArray(y[k]))
        for (const M in y[k])
          l && l.indexOf(M) > -1 && M in g && (y[k][M] = g[M](y[k][M]));
  }
  function u(y, l, g) {
    return function() {
      const P = new Array(1 + arguments.length);
      P[0] = l;
      for (var k = 1; k < P.length; k++)
        P[k] = arguments[k - 1];
      return y[g].apply(this, P);
    };
  }
  function d(y, l, g) {
    const P = l.send, k = l.ts, M = l.methodLevel, G = l.methodValue, Y = l.val, C = y._logEvent.bindings;
    c(
      g,
      y._serialize || Object.keys(y.serializers),
      y.serializers,
      y._stdErrSerialize === void 0 ? !0 : y._stdErrSerialize
    ), y._logEvent.ts = k, y._logEvent.messages = g.filter(function(A) {
      return C.indexOf(A) === -1;
    }), y._logEvent.level.label = M, y._logEvent.level.value = G, P(M, y._logEvent, Y), y._logEvent = f(C);
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
    const l = {
      type: y.constructor.name,
      msg: y.message,
      stack: y.stack
    };
    for (const g in y)
      l[g] === void 0 && (l[g] = y[g]);
    return l;
  }
  function m(y) {
    return typeof y.timestamp == "function" ? y.timestamp : y.timestamp === !1 ? U : v;
  }
  function b() {
    return {};
  }
  function E(y) {
    return y;
  }
  function T() {
  }
  function U() {
    return !1;
  }
  function v() {
    return Date.now();
  }
  function O() {
    return Math.round(Date.now() / 1e3);
  }
  function w() {
    return new Date(Date.now()).toISOString();
  }
  function x() {
    function y(l) {
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
      return y(self) || y(window) || y(this) || {};
    }
  }
  return $a;
}
var ps = {}, Ol;
function _h() {
  return Ol || (Ol = 1, Object.defineProperty(ps, "__esModule", { value: !0 }), ps.PINO_CUSTOM_CONTEXT_KEY = ps.PINO_LOGGER_DEFAULTS = void 0, ps.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, ps.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), ps;
}
var Qt = {}, Tl;
function Xy() {
  if (Tl)
    return Qt;
  Tl = 1, Object.defineProperty(Qt, "__esModule", { value: !0 }), Qt.generateChildLogger = Qt.formatChildLoggerContext = Qt.getLoggerContext = Qt.setBrowserLoggerContext = Qt.getBrowserLoggerContext = Qt.getDefaultLoggerOptions = void 0;
  const t = _h();
  function e(o) {
    return Object.assign(Object.assign({}, o), { level: (o == null ? void 0 : o.level) || t.PINO_LOGGER_DEFAULTS.level });
  }
  Qt.getDefaultLoggerOptions = e;
  function r(o, c = t.PINO_CUSTOM_CONTEXT_KEY) {
    return o[c] || "";
  }
  Qt.getBrowserLoggerContext = r;
  function n(o, c, u = t.PINO_CUSTOM_CONTEXT_KEY) {
    return o[u] = c, o;
  }
  Qt.setBrowserLoggerContext = n;
  function s(o, c = t.PINO_CUSTOM_CONTEXT_KEY) {
    let u = "";
    return typeof o.bindings > "u" ? u = r(o, c) : u = o.bindings().context || "", u;
  }
  Qt.getLoggerContext = s;
  function i(o, c, u = t.PINO_CUSTOM_CONTEXT_KEY) {
    const d = s(o, u);
    return d.trim() ? `${d}/${c}` : c;
  }
  Qt.formatChildLoggerContext = i;
  function a(o, c, u = t.PINO_CUSTOM_CONTEXT_KEY) {
    const d = i(o, c, u), f = o.child({ context: d });
    return n(f, d, u);
  }
  return Qt.generateChildLogger = a, Qt;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.pino = void 0;
  const e = en, r = e.__importDefault(Jy());
  Object.defineProperty(t, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), e.__exportStar(_h(), t), e.__exportStar(Xy(), t);
})(He);
let em = class extends as {
  constructor(t) {
    super(), this.opts = t, this.protocol = "wc", this.version = 2;
  }
}, tm = class extends as {
  constructor(t, e) {
    super(), this.core = t, this.logger = e, this.records = /* @__PURE__ */ new Map();
  }
}, rm = class {
  constructor(t, e) {
    this.logger = t, this.core = e;
  }
}, nm = class extends as {
  constructor(t, e) {
    super(), this.relayer = t, this.logger = e;
  }
}, sm = class extends as {
  constructor(t) {
    super();
  }
}, im = class {
  constructor(t, e, r, n) {
    this.core = t, this.logger = e, this.name = r;
  }
};
class om extends as {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
let am = class extends as {
  constructor(t, e) {
    super(), this.core = t, this.logger = e;
  }
}, cm = class {
  constructor(t, e) {
    this.projectId = t, this.logger = e;
  }
}, um = class {
  constructor(t) {
    this.opts = t, this.protocol = "wc", this.version = 2;
  }
}, lm = class {
  constructor(t) {
    this.client = t;
  }
};
var ou = {}, $s = {}, ga = {}, ya = {};
Object.defineProperty(ya, "__esModule", { value: !0 });
ya.BrowserRandomSource = void 0;
const Cl = 65536;
class dm {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e && e.getRandomValues !== void 0 && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const r = new Uint8Array(e);
    for (let n = 0; n < r.length; n += Cl)
      this._crypto.getRandomValues(r.subarray(n, n + Math.min(r.length - n, Cl)));
    return r;
  }
}
ya.BrowserRandomSource = dm;
function hm(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var ma = {}, yr = {};
Object.defineProperty(yr, "__esModule", { value: !0 });
function fm(t) {
  for (var e = 0; e < t.length; e++)
    t[e] = 0;
  return t;
}
yr.wipe = fm;
const pm = {}, gm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pm
}, Symbol.toStringTag, { value: "Module" })), ym = /* @__PURE__ */ nu(gm);
Object.defineProperty(ma, "__esModule", { value: !0 });
ma.NodeRandomSource = void 0;
const mm = yr;
class vm {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof hm < "u") {
      const e = ym;
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
    return (0, mm.wipe)(r), n;
  }
}
ma.NodeRandomSource = vm;
Object.defineProperty(ga, "__esModule", { value: !0 });
ga.SystemRandomSource = void 0;
const _m = ya, bm = ma;
class wm {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new _m.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new bm.NodeRandomSource(), this._source.isAvailable) {
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
ga.SystemRandomSource = wm;
var Se = {}, bh = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  function e(o, c) {
    var u = o >>> 16 & 65535, d = o & 65535, f = c >>> 16 & 65535, p = c & 65535;
    return d * p + (u * p + d * f << 16 >>> 0) | 0;
  }
  t.mul = Math.imul || e;
  function r(o, c) {
    return o + c | 0;
  }
  t.add = r;
  function n(o, c) {
    return o - c | 0;
  }
  t.sub = n;
  function s(o, c) {
    return o << c | o >>> 32 - c;
  }
  t.rotl = s;
  function i(o, c) {
    return o << 32 - c | o >>> c;
  }
  t.rotr = i;
  function a(o) {
    return typeof o == "number" && isFinite(o) && Math.floor(o) === o;
  }
  t.isInteger = Number.isInteger || a, t.MAX_SAFE_INTEGER = 9007199254740991, t.isSafeInteger = function(o) {
    return t.isInteger(o) && o >= -t.MAX_SAFE_INTEGER && o <= t.MAX_SAFE_INTEGER;
  };
})(bh);
Object.defineProperty(Se, "__esModule", { value: !0 });
var wh = bh;
function Em(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) << 16 >> 16;
}
Se.readInt16BE = Em;
function Sm(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) >>> 0;
}
Se.readUint16BE = Sm;
function xm(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) << 16 >> 16;
}
Se.readInt16LE = xm;
function Im(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) >>> 0;
}
Se.readUint16LE = Im;
function Eh(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 8, e[r + 1] = t >>> 0, e;
}
Se.writeUint16BE = Eh;
Se.writeInt16BE = Eh;
function Sh(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e;
}
Se.writeUint16LE = Sh;
Se.writeInt16LE = Sh;
function cc(t, e) {
  return e === void 0 && (e = 0), t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
}
Se.readInt32BE = cc;
function uc(t, e) {
  return e === void 0 && (e = 0), (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
}
Se.readUint32BE = uc;
function lc(t, e) {
  return e === void 0 && (e = 0), t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e];
}
Se.readInt32LE = lc;
function dc(t, e) {
  return e === void 0 && (e = 0), (t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]) >>> 0;
}
Se.readUint32LE = dc;
function Uo(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 24, e[r + 1] = t >>> 16, e[r + 2] = t >>> 8, e[r + 3] = t >>> 0, e;
}
Se.writeUint32BE = Uo;
Se.writeInt32BE = Uo;
function Mo(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e[r + 2] = t >>> 16, e[r + 3] = t >>> 24, e;
}
Se.writeUint32LE = Mo;
Se.writeInt32LE = Mo;
function Om(t, e) {
  e === void 0 && (e = 0);
  var r = cc(t, e), n = cc(t, e + 4);
  return r * 4294967296 + n - (n >> 31) * 4294967296;
}
Se.readInt64BE = Om;
function Tm(t, e) {
  e === void 0 && (e = 0);
  var r = uc(t, e), n = uc(t, e + 4);
  return r * 4294967296 + n;
}
Se.readUint64BE = Tm;
function Cm(t, e) {
  e === void 0 && (e = 0);
  var r = lc(t, e), n = lc(t, e + 4);
  return n * 4294967296 + r - (r >> 31) * 4294967296;
}
Se.readInt64LE = Cm;
function Nm(t, e) {
  e === void 0 && (e = 0);
  var r = dc(t, e), n = dc(t, e + 4);
  return n * 4294967296 + r;
}
Se.readUint64LE = Nm;
function xh(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), Uo(t / 4294967296 >>> 0, e, r), Uo(t >>> 0, e, r + 4), e;
}
Se.writeUint64BE = xh;
Se.writeInt64BE = xh;
function Ih(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), Mo(t >>> 0, e, r), Mo(t / 4294967296 >>> 0, e, r + 4), e;
}
Se.writeUint64LE = Ih;
Se.writeInt64LE = Ih;
function Pm(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var n = 0, s = 1, i = t / 8 + r - 1; i >= r; i--)
    n += e[i] * s, s *= 256;
  return n;
}
Se.readUintBE = Pm;
function km(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var n = 0, s = 1, i = r; i < r + t / 8; i++)
    n += e[i] * s, s *= 256;
  return n;
}
Se.readUintLE = km;
function Rm(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!wh.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var s = 1, i = t / 8 + n - 1; i >= n; i--)
    r[i] = e / s & 255, s *= 256;
  return r;
}
Se.writeUintBE = Rm;
function Am(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!wh.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var s = 1, i = n; i < n + t / 8; i++)
    r[i] = e / s & 255, s *= 256;
  return r;
}
Se.writeUintLE = Am;
function jm(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e);
}
Se.readFloat32BE = jm;
function Lm(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e, !0);
}
Se.readFloat32LE = Lm;
function Um(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e);
}
Se.readFloat64BE = Um;
function Mm(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e, !0);
}
Se.readFloat64LE = Mm;
function Dm(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t), e;
}
Se.writeFloat32BE = Dm;
function zm(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t, !0), e;
}
Se.writeFloat32LE = zm;
function $m(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t), e;
}
Se.writeFloat64BE = $m;
function Vm(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t, !0), e;
}
Se.writeFloat64LE = Vm;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
  const e = ga, r = Se, n = yr;
  t.defaultRandomSource = new e.SystemRandomSource();
  function s(u, d = t.defaultRandomSource) {
    return d.randomBytes(u);
  }
  t.randomBytes = s;
  function i(u = t.defaultRandomSource) {
    const d = s(4, u), f = (0, r.readUint32LE)(d);
    return (0, n.wipe)(d), f;
  }
  t.randomUint32 = i;
  const a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function o(u, d = a, f = t.defaultRandomSource) {
    if (d.length < 2)
      throw new Error("randomString charset is too short");
    if (d.length > 256)
      throw new Error("randomString charset is too long");
    let p = "";
    const m = d.length, b = 256 - 256 % m;
    for (; u > 0; ) {
      const E = s(Math.ceil(u * 256 / b), f);
      for (let T = 0; T < E.length && u > 0; T++) {
        const U = E[T];
        U < b && (p += d.charAt(U % m), u--);
      }
      (0, n.wipe)(E);
    }
    return p;
  }
  t.randomString = o;
  function c(u, d = a, f = t.defaultRandomSource) {
    const p = Math.ceil(u / (Math.log(d.length) / Math.LN2));
    return o(p, d, f);
  }
  t.randomStringForEntropy = c;
})($s);
var Oh = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Se, r = yr;
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
      }, o.prototype.update = function(c, u) {
        if (u === void 0 && (u = c.length), this._finished)
          throw new Error("SHA512: can't update because hash was finished.");
        var d = 0;
        if (this._bytesHashed += u, this._bufferLength > 0) {
          for (; this._bufferLength < t.BLOCK_SIZE && u > 0; )
            this._buffer[this._bufferLength++] = c[d++], u--;
          this._bufferLength === this.blockSize && (i(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (u >= this.blockSize && (d = i(this._tempHi, this._tempLo, this._stateHi, this._stateLo, c, d, u), u %= this.blockSize); u > 0; )
          this._buffer[this._bufferLength++] = c[d++], u--;
        return this;
      }, o.prototype.finish = function(c) {
        if (!this._finished) {
          var u = this._bytesHashed, d = this._bufferLength, f = u / 536870912 | 0, p = u << 3, m = u % 128 < 112 ? 128 : 256;
          this._buffer[d] = 128;
          for (var b = d + 1; b < m - 8; b++)
            this._buffer[b] = 0;
          e.writeUint32BE(f, this._buffer, m - 8), e.writeUint32BE(p, this._buffer, m - 4), i(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, m), this._finished = !0;
        }
        for (var b = 0; b < this.digestLength / 8; b++)
          e.writeUint32BE(this._stateHi[b], c, b * 8), e.writeUint32BE(this._stateLo[b], c, b * 8 + 4);
        return this;
      }, o.prototype.digest = function() {
        var c = new Uint8Array(this.digestLength);
        return this.finish(c), c;
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
      }, o.prototype.restoreState = function(c) {
        return this._stateHi.set(c.stateHi), this._stateLo.set(c.stateLo), this._bufferLength = c.bufferLength, c.buffer && this._buffer.set(c.buffer), this._bytesHashed = c.bytesHashed, this._finished = !1, this;
      }, o.prototype.cleanSavedState = function(c) {
        r.wipe(c.stateHi), r.wipe(c.stateLo), c.buffer && r.wipe(c.buffer), c.bufferLength = 0, c.bytesHashed = 0;
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
  function i(o, c, u, d, f, p, m) {
    for (var b = u[0], E = u[1], T = u[2], U = u[3], v = u[4], O = u[5], w = u[6], x = u[7], y = d[0], l = d[1], g = d[2], P = d[3], k = d[4], M = d[5], G = d[6], Y = d[7], C, A, X, q, $, Z, z, F; m >= 128; ) {
      for (var ye = 0; ye < 16; ye++) {
        var K = 8 * ye + p;
        o[ye] = e.readUint32BE(f, K), c[ye] = e.readUint32BE(f, K + 4);
      }
      for (var ye = 0; ye < 80; ye++) {
        var de = b, ne = E, le = T, L = U, j = v, N = O, h = w, I = x, W = y, ee = l, je = g, Le = P, Oe = k, qe = M, at = G, tt = Y;
        if (C = x, A = Y, $ = A & 65535, Z = A >>> 16, z = C & 65535, F = C >>> 16, C = (v >>> 14 | k << 18) ^ (v >>> 18 | k << 14) ^ (k >>> 9 | v << 23), A = (k >>> 14 | v << 18) ^ (k >>> 18 | v << 14) ^ (v >>> 9 | k << 23), $ += A & 65535, Z += A >>> 16, z += C & 65535, F += C >>> 16, C = v & O ^ ~v & w, A = k & M ^ ~k & G, $ += A & 65535, Z += A >>> 16, z += C & 65535, F += C >>> 16, C = s[ye * 2], A = s[ye * 2 + 1], $ += A & 65535, Z += A >>> 16, z += C & 65535, F += C >>> 16, C = o[ye % 16], A = c[ye % 16], $ += A & 65535, Z += A >>> 16, z += C & 65535, F += C >>> 16, Z += $ >>> 16, z += Z >>> 16, F += z >>> 16, X = z & 65535 | F << 16, q = $ & 65535 | Z << 16, C = X, A = q, $ = A & 65535, Z = A >>> 16, z = C & 65535, F = C >>> 16, C = (b >>> 28 | y << 4) ^ (y >>> 2 | b << 30) ^ (y >>> 7 | b << 25), A = (y >>> 28 | b << 4) ^ (b >>> 2 | y << 30) ^ (b >>> 7 | y << 25), $ += A & 65535, Z += A >>> 16, z += C & 65535, F += C >>> 16, C = b & E ^ b & T ^ E & T, A = y & l ^ y & g ^ l & g, $ += A & 65535, Z += A >>> 16, z += C & 65535, F += C >>> 16, Z += $ >>> 16, z += Z >>> 16, F += z >>> 16, I = z & 65535 | F << 16, tt = $ & 65535 | Z << 16, C = L, A = Le, $ = A & 65535, Z = A >>> 16, z = C & 65535, F = C >>> 16, C = X, A = q, $ += A & 65535, Z += A >>> 16, z += C & 65535, F += C >>> 16, Z += $ >>> 16, z += Z >>> 16, F += z >>> 16, L = z & 65535 | F << 16, Le = $ & 65535 | Z << 16, E = de, T = ne, U = le, v = L, O = j, w = N, x = h, b = I, l = W, g = ee, P = je, k = Le, M = Oe, G = qe, Y = at, y = tt, ye % 16 === 15)
          for (var K = 0; K < 16; K++)
            C = o[K], A = c[K], $ = A & 65535, Z = A >>> 16, z = C & 65535, F = C >>> 16, C = o[(K + 9) % 16], A = c[(K + 9) % 16], $ += A & 65535, Z += A >>> 16, z += C & 65535, F += C >>> 16, X = o[(K + 1) % 16], q = c[(K + 1) % 16], C = (X >>> 1 | q << 31) ^ (X >>> 8 | q << 24) ^ X >>> 7, A = (q >>> 1 | X << 31) ^ (q >>> 8 | X << 24) ^ (q >>> 7 | X << 25), $ += A & 65535, Z += A >>> 16, z += C & 65535, F += C >>> 16, X = o[(K + 14) % 16], q = c[(K + 14) % 16], C = (X >>> 19 | q << 13) ^ (q >>> 29 | X << 3) ^ X >>> 6, A = (q >>> 19 | X << 13) ^ (X >>> 29 | q << 3) ^ (q >>> 6 | X << 26), $ += A & 65535, Z += A >>> 16, z += C & 65535, F += C >>> 16, Z += $ >>> 16, z += Z >>> 16, F += z >>> 16, o[K] = z & 65535 | F << 16, c[K] = $ & 65535 | Z << 16;
      }
      C = b, A = y, $ = A & 65535, Z = A >>> 16, z = C & 65535, F = C >>> 16, C = u[0], A = d[0], $ += A & 65535, Z += A >>> 16, z += C & 65535, F += C >>> 16, Z += $ >>> 16, z += Z >>> 16, F += z >>> 16, u[0] = b = z & 65535 | F << 16, d[0] = y = $ & 65535 | Z << 16, C = E, A = l, $ = A & 65535, Z = A >>> 16, z = C & 65535, F = C >>> 16, C = u[1], A = d[1], $ += A & 65535, Z += A >>> 16, z += C & 65535, F += C >>> 16, Z += $ >>> 16, z += Z >>> 16, F += z >>> 16, u[1] = E = z & 65535 | F << 16, d[1] = l = $ & 65535 | Z << 16, C = T, A = g, $ = A & 65535, Z = A >>> 16, z = C & 65535, F = C >>> 16, C = u[2], A = d[2], $ += A & 65535, Z += A >>> 16, z += C & 65535, F += C >>> 16, Z += $ >>> 16, z += Z >>> 16, F += z >>> 16, u[2] = T = z & 65535 | F << 16, d[2] = g = $ & 65535 | Z << 16, C = U, A = P, $ = A & 65535, Z = A >>> 16, z = C & 65535, F = C >>> 16, C = u[3], A = d[3], $ += A & 65535, Z += A >>> 16, z += C & 65535, F += C >>> 16, Z += $ >>> 16, z += Z >>> 16, F += z >>> 16, u[3] = U = z & 65535 | F << 16, d[3] = P = $ & 65535 | Z << 16, C = v, A = k, $ = A & 65535, Z = A >>> 16, z = C & 65535, F = C >>> 16, C = u[4], A = d[4], $ += A & 65535, Z += A >>> 16, z += C & 65535, F += C >>> 16, Z += $ >>> 16, z += Z >>> 16, F += z >>> 16, u[4] = v = z & 65535 | F << 16, d[4] = k = $ & 65535 | Z << 16, C = O, A = M, $ = A & 65535, Z = A >>> 16, z = C & 65535, F = C >>> 16, C = u[5], A = d[5], $ += A & 65535, Z += A >>> 16, z += C & 65535, F += C >>> 16, Z += $ >>> 16, z += Z >>> 16, F += z >>> 16, u[5] = O = z & 65535 | F << 16, d[5] = M = $ & 65535 | Z << 16, C = w, A = G, $ = A & 65535, Z = A >>> 16, z = C & 65535, F = C >>> 16, C = u[6], A = d[6], $ += A & 65535, Z += A >>> 16, z += C & 65535, F += C >>> 16, Z += $ >>> 16, z += Z >>> 16, F += z >>> 16, u[6] = w = z & 65535 | F << 16, d[6] = G = $ & 65535 | Z << 16, C = x, A = Y, $ = A & 65535, Z = A >>> 16, z = C & 65535, F = C >>> 16, C = u[7], A = d[7], $ += A & 65535, Z += A >>> 16, z += C & 65535, F += C >>> 16, Z += $ >>> 16, z += Z >>> 16, F += z >>> 16, u[7] = x = z & 65535 | F << 16, d[7] = Y = $ & 65535 | Z << 16, p += 128, m -= 128;
    }
    return p;
  }
  function a(o) {
    var c = new n();
    c.update(o);
    var u = c.digest();
    return c.clean(), u;
  }
  t.hash = a;
})(Oh);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.convertSecretKeyToX25519 = t.convertPublicKeyToX25519 = t.verify = t.sign = t.extractPublicKeyFromSecretKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.SEED_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = t.SIGNATURE_LENGTH = void 0;
  const e = $s, r = Oh, n = yr;
  t.SIGNATURE_LENGTH = 64, t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 64, t.SEED_LENGTH = 32;
  function s(L) {
    const j = new Float64Array(16);
    if (L)
      for (let N = 0; N < L.length; N++)
        j[N] = L[N];
    return j;
  }
  const i = new Uint8Array(32);
  i[0] = 9;
  const a = s(), o = s([1]), c = s([
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
  ]), u = s([
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
  function m(L, j) {
    for (let N = 0; N < 16; N++)
      L[N] = j[N] | 0;
  }
  function b(L) {
    let j = 1;
    for (let N = 0; N < 16; N++) {
      let h = L[N] + j + 65535;
      j = Math.floor(h / 65536), L[N] = h - j * 65536;
    }
    L[0] += j - 1 + 37 * (j - 1);
  }
  function E(L, j, N) {
    const h = ~(N - 1);
    for (let I = 0; I < 16; I++) {
      const W = h & (L[I] ^ j[I]);
      L[I] ^= W, j[I] ^= W;
    }
  }
  function T(L, j) {
    const N = s(), h = s();
    for (let I = 0; I < 16; I++)
      h[I] = j[I];
    b(h), b(h), b(h);
    for (let I = 0; I < 2; I++) {
      N[0] = h[0] - 65517;
      for (let ee = 1; ee < 15; ee++)
        N[ee] = h[ee] - 65535 - (N[ee - 1] >> 16 & 1), N[ee - 1] &= 65535;
      N[15] = h[15] - 32767 - (N[14] >> 16 & 1);
      const W = N[15] >> 16 & 1;
      N[14] &= 65535, E(h, N, 1 - W);
    }
    for (let I = 0; I < 16; I++)
      L[2 * I] = h[I] & 255, L[2 * I + 1] = h[I] >> 8;
  }
  function U(L, j) {
    let N = 0;
    for (let h = 0; h < 32; h++)
      N |= L[h] ^ j[h];
    return (1 & N - 1 >>> 8) - 1;
  }
  function v(L, j) {
    const N = new Uint8Array(32), h = new Uint8Array(32);
    return T(N, L), T(h, j), U(N, h);
  }
  function O(L) {
    const j = new Uint8Array(32);
    return T(j, L), j[0] & 1;
  }
  function w(L, j) {
    for (let N = 0; N < 16; N++)
      L[N] = j[2 * N] + (j[2 * N + 1] << 8);
    L[15] &= 32767;
  }
  function x(L, j, N) {
    for (let h = 0; h < 16; h++)
      L[h] = j[h] + N[h];
  }
  function y(L, j, N) {
    for (let h = 0; h < 16; h++)
      L[h] = j[h] - N[h];
  }
  function l(L, j, N) {
    let h, I, W = 0, ee = 0, je = 0, Le = 0, Oe = 0, qe = 0, at = 0, tt = 0, Ve = 0, De = 0, Te = 0, Pe = 0, Ce = 0, we = 0, _e = 0, he = 0, ke = 0, Ue = 0, me = 0, ze = 0, Fe = 0, We = 0, Ge = 0, Ke = 0, hr = 0, mr = 0, $r = 0, Ut = 0, Vr = 0, vr = 0, yn = 0, ct = N[0], st = N[1], gt = N[2], lt = N[3], yt = N[4], it = N[5], bt = N[6], St = N[7], xt = N[8], wt = N[9], It = N[10], Et = N[11], mt = N[12], rt = N[13], S = N[14], D = N[15];
    h = j[0], W += h * ct, ee += h * st, je += h * gt, Le += h * lt, Oe += h * yt, qe += h * it, at += h * bt, tt += h * St, Ve += h * xt, De += h * wt, Te += h * It, Pe += h * Et, Ce += h * mt, we += h * rt, _e += h * S, he += h * D, h = j[1], ee += h * ct, je += h * st, Le += h * gt, Oe += h * lt, qe += h * yt, at += h * it, tt += h * bt, Ve += h * St, De += h * xt, Te += h * wt, Pe += h * It, Ce += h * Et, we += h * mt, _e += h * rt, he += h * S, ke += h * D, h = j[2], je += h * ct, Le += h * st, Oe += h * gt, qe += h * lt, at += h * yt, tt += h * it, Ve += h * bt, De += h * St, Te += h * xt, Pe += h * wt, Ce += h * It, we += h * Et, _e += h * mt, he += h * rt, ke += h * S, Ue += h * D, h = j[3], Le += h * ct, Oe += h * st, qe += h * gt, at += h * lt, tt += h * yt, Ve += h * it, De += h * bt, Te += h * St, Pe += h * xt, Ce += h * wt, we += h * It, _e += h * Et, he += h * mt, ke += h * rt, Ue += h * S, me += h * D, h = j[4], Oe += h * ct, qe += h * st, at += h * gt, tt += h * lt, Ve += h * yt, De += h * it, Te += h * bt, Pe += h * St, Ce += h * xt, we += h * wt, _e += h * It, he += h * Et, ke += h * mt, Ue += h * rt, me += h * S, ze += h * D, h = j[5], qe += h * ct, at += h * st, tt += h * gt, Ve += h * lt, De += h * yt, Te += h * it, Pe += h * bt, Ce += h * St, we += h * xt, _e += h * wt, he += h * It, ke += h * Et, Ue += h * mt, me += h * rt, ze += h * S, Fe += h * D, h = j[6], at += h * ct, tt += h * st, Ve += h * gt, De += h * lt, Te += h * yt, Pe += h * it, Ce += h * bt, we += h * St, _e += h * xt, he += h * wt, ke += h * It, Ue += h * Et, me += h * mt, ze += h * rt, Fe += h * S, We += h * D, h = j[7], tt += h * ct, Ve += h * st, De += h * gt, Te += h * lt, Pe += h * yt, Ce += h * it, we += h * bt, _e += h * St, he += h * xt, ke += h * wt, Ue += h * It, me += h * Et, ze += h * mt, Fe += h * rt, We += h * S, Ge += h * D, h = j[8], Ve += h * ct, De += h * st, Te += h * gt, Pe += h * lt, Ce += h * yt, we += h * it, _e += h * bt, he += h * St, ke += h * xt, Ue += h * wt, me += h * It, ze += h * Et, Fe += h * mt, We += h * rt, Ge += h * S, Ke += h * D, h = j[9], De += h * ct, Te += h * st, Pe += h * gt, Ce += h * lt, we += h * yt, _e += h * it, he += h * bt, ke += h * St, Ue += h * xt, me += h * wt, ze += h * It, Fe += h * Et, We += h * mt, Ge += h * rt, Ke += h * S, hr += h * D, h = j[10], Te += h * ct, Pe += h * st, Ce += h * gt, we += h * lt, _e += h * yt, he += h * it, ke += h * bt, Ue += h * St, me += h * xt, ze += h * wt, Fe += h * It, We += h * Et, Ge += h * mt, Ke += h * rt, hr += h * S, mr += h * D, h = j[11], Pe += h * ct, Ce += h * st, we += h * gt, _e += h * lt, he += h * yt, ke += h * it, Ue += h * bt, me += h * St, ze += h * xt, Fe += h * wt, We += h * It, Ge += h * Et, Ke += h * mt, hr += h * rt, mr += h * S, $r += h * D, h = j[12], Ce += h * ct, we += h * st, _e += h * gt, he += h * lt, ke += h * yt, Ue += h * it, me += h * bt, ze += h * St, Fe += h * xt, We += h * wt, Ge += h * It, Ke += h * Et, hr += h * mt, mr += h * rt, $r += h * S, Ut += h * D, h = j[13], we += h * ct, _e += h * st, he += h * gt, ke += h * lt, Ue += h * yt, me += h * it, ze += h * bt, Fe += h * St, We += h * xt, Ge += h * wt, Ke += h * It, hr += h * Et, mr += h * mt, $r += h * rt, Ut += h * S, Vr += h * D, h = j[14], _e += h * ct, he += h * st, ke += h * gt, Ue += h * lt, me += h * yt, ze += h * it, Fe += h * bt, We += h * St, Ge += h * xt, Ke += h * wt, hr += h * It, mr += h * Et, $r += h * mt, Ut += h * rt, Vr += h * S, vr += h * D, h = j[15], he += h * ct, ke += h * st, Ue += h * gt, me += h * lt, ze += h * yt, Fe += h * it, We += h * bt, Ge += h * St, Ke += h * xt, hr += h * wt, mr += h * It, $r += h * Et, Ut += h * mt, Vr += h * rt, vr += h * S, yn += h * D, W += 38 * ke, ee += 38 * Ue, je += 38 * me, Le += 38 * ze, Oe += 38 * Fe, qe += 38 * We, at += 38 * Ge, tt += 38 * Ke, Ve += 38 * hr, De += 38 * mr, Te += 38 * $r, Pe += 38 * Ut, Ce += 38 * Vr, we += 38 * vr, _e += 38 * yn, I = 1, h = W + I + 65535, I = Math.floor(h / 65536), W = h - I * 65536, h = ee + I + 65535, I = Math.floor(h / 65536), ee = h - I * 65536, h = je + I + 65535, I = Math.floor(h / 65536), je = h - I * 65536, h = Le + I + 65535, I = Math.floor(h / 65536), Le = h - I * 65536, h = Oe + I + 65535, I = Math.floor(h / 65536), Oe = h - I * 65536, h = qe + I + 65535, I = Math.floor(h / 65536), qe = h - I * 65536, h = at + I + 65535, I = Math.floor(h / 65536), at = h - I * 65536, h = tt + I + 65535, I = Math.floor(h / 65536), tt = h - I * 65536, h = Ve + I + 65535, I = Math.floor(h / 65536), Ve = h - I * 65536, h = De + I + 65535, I = Math.floor(h / 65536), De = h - I * 65536, h = Te + I + 65535, I = Math.floor(h / 65536), Te = h - I * 65536, h = Pe + I + 65535, I = Math.floor(h / 65536), Pe = h - I * 65536, h = Ce + I + 65535, I = Math.floor(h / 65536), Ce = h - I * 65536, h = we + I + 65535, I = Math.floor(h / 65536), we = h - I * 65536, h = _e + I + 65535, I = Math.floor(h / 65536), _e = h - I * 65536, h = he + I + 65535, I = Math.floor(h / 65536), he = h - I * 65536, W += I - 1 + 37 * (I - 1), I = 1, h = W + I + 65535, I = Math.floor(h / 65536), W = h - I * 65536, h = ee + I + 65535, I = Math.floor(h / 65536), ee = h - I * 65536, h = je + I + 65535, I = Math.floor(h / 65536), je = h - I * 65536, h = Le + I + 65535, I = Math.floor(h / 65536), Le = h - I * 65536, h = Oe + I + 65535, I = Math.floor(h / 65536), Oe = h - I * 65536, h = qe + I + 65535, I = Math.floor(h / 65536), qe = h - I * 65536, h = at + I + 65535, I = Math.floor(h / 65536), at = h - I * 65536, h = tt + I + 65535, I = Math.floor(h / 65536), tt = h - I * 65536, h = Ve + I + 65535, I = Math.floor(h / 65536), Ve = h - I * 65536, h = De + I + 65535, I = Math.floor(h / 65536), De = h - I * 65536, h = Te + I + 65535, I = Math.floor(h / 65536), Te = h - I * 65536, h = Pe + I + 65535, I = Math.floor(h / 65536), Pe = h - I * 65536, h = Ce + I + 65535, I = Math.floor(h / 65536), Ce = h - I * 65536, h = we + I + 65535, I = Math.floor(h / 65536), we = h - I * 65536, h = _e + I + 65535, I = Math.floor(h / 65536), _e = h - I * 65536, h = he + I + 65535, I = Math.floor(h / 65536), he = h - I * 65536, W += I - 1 + 37 * (I - 1), L[0] = W, L[1] = ee, L[2] = je, L[3] = Le, L[4] = Oe, L[5] = qe, L[6] = at, L[7] = tt, L[8] = Ve, L[9] = De, L[10] = Te, L[11] = Pe, L[12] = Ce, L[13] = we, L[14] = _e, L[15] = he;
  }
  function g(L, j) {
    l(L, j, j);
  }
  function P(L, j) {
    const N = s();
    let h;
    for (h = 0; h < 16; h++)
      N[h] = j[h];
    for (h = 253; h >= 0; h--)
      g(N, N), h !== 2 && h !== 4 && l(N, N, j);
    for (h = 0; h < 16; h++)
      L[h] = N[h];
  }
  function k(L, j) {
    const N = s();
    let h;
    for (h = 0; h < 16; h++)
      N[h] = j[h];
    for (h = 250; h >= 0; h--)
      g(N, N), h !== 1 && l(N, N, j);
    for (h = 0; h < 16; h++)
      L[h] = N[h];
  }
  function M(L, j) {
    const N = s(), h = s(), I = s(), W = s(), ee = s(), je = s(), Le = s(), Oe = s(), qe = s();
    y(N, L[1], L[0]), y(qe, j[1], j[0]), l(N, N, qe), x(h, L[0], L[1]), x(qe, j[0], j[1]), l(h, h, qe), l(I, L[3], j[3]), l(I, I, u), l(W, L[2], j[2]), x(W, W, W), y(ee, h, N), y(je, W, I), x(Le, W, I), x(Oe, h, N), l(L[0], ee, je), l(L[1], Oe, Le), l(L[2], Le, je), l(L[3], ee, Oe);
  }
  function G(L, j, N) {
    for (let h = 0; h < 4; h++)
      E(L[h], j[h], N);
  }
  function Y(L, j) {
    const N = s(), h = s(), I = s();
    P(I, j[2]), l(N, j[0], I), l(h, j[1], I), T(L, h), L[31] ^= O(N) << 7;
  }
  function C(L, j, N) {
    m(L[0], a), m(L[1], o), m(L[2], o), m(L[3], a);
    for (let h = 255; h >= 0; --h) {
      const I = N[h / 8 | 0] >> (h & 7) & 1;
      G(L, j, I), M(j, L), M(L, L), G(L, j, I);
    }
  }
  function A(L, j) {
    const N = [s(), s(), s(), s()];
    m(N[0], d), m(N[1], f), m(N[2], o), l(N[3], d, f), C(L, N, j);
  }
  function X(L) {
    if (L.length !== t.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${t.SEED_LENGTH} bytes`);
    const j = (0, r.hash)(L);
    j[0] &= 248, j[31] &= 127, j[31] |= 64;
    const N = new Uint8Array(32), h = [s(), s(), s(), s()];
    A(h, j), Y(N, h);
    const I = new Uint8Array(64);
    return I.set(L), I.set(N, 32), {
      publicKey: N,
      secretKey: I
    };
  }
  t.generateKeyPairFromSeed = X;
  function q(L) {
    const j = (0, e.randomBytes)(32, L), N = X(j);
    return (0, n.wipe)(j), N;
  }
  t.generateKeyPair = q;
  function $(L) {
    if (L.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${t.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(L.subarray(32));
  }
  t.extractPublicKeyFromSecretKey = $;
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
  function z(L, j) {
    let N, h, I, W;
    for (h = 63; h >= 32; --h) {
      for (N = 0, I = h - 32, W = h - 12; I < W; ++I)
        j[I] += N - 16 * j[h] * Z[I - (h - 32)], N = Math.floor((j[I] + 128) / 256), j[I] -= N * 256;
      j[I] += N, j[h] = 0;
    }
    for (N = 0, I = 0; I < 32; I++)
      j[I] += N - (j[31] >> 4) * Z[I], N = j[I] >> 8, j[I] &= 255;
    for (I = 0; I < 32; I++)
      j[I] -= N * Z[I];
    for (h = 0; h < 32; h++)
      j[h + 1] += j[h] >> 8, L[h] = j[h] & 255;
  }
  function F(L) {
    const j = new Float64Array(64);
    for (let N = 0; N < 64; N++)
      j[N] = L[N];
    for (let N = 0; N < 64; N++)
      L[N] = 0;
    z(L, j);
  }
  function ye(L, j) {
    const N = new Float64Array(64), h = [s(), s(), s(), s()], I = (0, r.hash)(L.subarray(0, 32));
    I[0] &= 248, I[31] &= 127, I[31] |= 64;
    const W = new Uint8Array(64);
    W.set(I.subarray(32), 32);
    const ee = new r.SHA512();
    ee.update(W.subarray(32)), ee.update(j);
    const je = ee.digest();
    ee.clean(), F(je), A(h, je), Y(W, h), ee.reset(), ee.update(W.subarray(0, 32)), ee.update(L.subarray(32)), ee.update(j);
    const Le = ee.digest();
    F(Le);
    for (let Oe = 0; Oe < 32; Oe++)
      N[Oe] = je[Oe];
    for (let Oe = 0; Oe < 32; Oe++)
      for (let qe = 0; qe < 32; qe++)
        N[Oe + qe] += Le[Oe] * I[qe];
    return z(W.subarray(32), N), W;
  }
  t.sign = ye;
  function K(L, j) {
    const N = s(), h = s(), I = s(), W = s(), ee = s(), je = s(), Le = s();
    return m(L[2], o), w(L[1], j), g(I, L[1]), l(W, I, c), y(I, I, L[2]), x(W, L[2], W), g(ee, W), g(je, ee), l(Le, je, ee), l(N, Le, I), l(N, N, W), k(N, N), l(N, N, I), l(N, N, W), l(N, N, W), l(L[0], N, W), g(h, L[0]), l(h, h, W), v(h, I) && l(L[0], L[0], p), g(h, L[0]), l(h, h, W), v(h, I) ? -1 : (O(L[0]) === j[31] >> 7 && y(L[0], a, L[0]), l(L[3], L[0], L[1]), 0);
  }
  function de(L, j, N) {
    const h = new Uint8Array(32), I = [s(), s(), s(), s()], W = [s(), s(), s(), s()];
    if (N.length !== t.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${t.SIGNATURE_LENGTH} bytes`);
    if (K(W, L))
      return !1;
    const ee = new r.SHA512();
    ee.update(N.subarray(0, 32)), ee.update(L), ee.update(j);
    const je = ee.digest();
    return F(je), C(I, W, je), A(W, N.subarray(32)), M(I, W), Y(h, I), !U(N, h);
  }
  t.verify = de;
  function ne(L) {
    let j = [s(), s(), s(), s()];
    if (K(j, L))
      throw new Error("Ed25519: invalid public key");
    let N = s(), h = s(), I = j[1];
    x(N, o, I), y(h, o, I), P(h, h), l(N, N, h);
    let W = new Uint8Array(32);
    return T(W, N), W;
  }
  t.convertPublicKeyToX25519 = ne;
  function le(L) {
    const j = (0, r.hash)(L.subarray(0, 32));
    j[0] &= 248, j[31] &= 127, j[31] |= 64;
    const N = new Uint8Array(j.subarray(0, 32));
    return (0, n.wipe)(j), N;
  }
  t.convertSecretKeyToX25519 = le;
})(ou);
const Zm = "EdDSA", qm = "JWT", Th = ".", Ch = "base64url", Fm = "utf8", Km = "utf8", Bm = ":", Hm = "did", Wm = "key", Nl = "base58btc", Gm = "z", Ym = "K36", Qm = 32;
function au(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function Nh(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? au(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function hc(t, e) {
  e || (e = t.reduce((s, i) => s + i.length, 0));
  const r = Nh(e);
  let n = 0;
  for (const s of t)
    r.set(s, n), n += s.length;
  return au(r);
}
function Jm(t, e) {
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
  var o = t.length, c = t.charAt(0), u = Math.log(o) / Math.log(256), d = Math.log(256) / Math.log(o);
  function f(b) {
    if (b instanceof Uint8Array || (ArrayBuffer.isView(b) ? b = new Uint8Array(b.buffer, b.byteOffset, b.byteLength) : Array.isArray(b) && (b = Uint8Array.from(b))), !(b instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (b.length === 0)
      return "";
    for (var E = 0, T = 0, U = 0, v = b.length; U !== v && b[U] === 0; )
      U++, E++;
    for (var O = (v - U) * d + 1 >>> 0, w = new Uint8Array(O); U !== v; ) {
      for (var x = b[U], y = 0, l = O - 1; (x !== 0 || y < T) && l !== -1; l--, y++)
        x += 256 * w[l] >>> 0, w[l] = x % o >>> 0, x = x / o >>> 0;
      if (x !== 0)
        throw new Error("Non-zero carry");
      T = y, U++;
    }
    for (var g = O - T; g !== O && w[g] === 0; )
      g++;
    for (var P = c.repeat(E); g < O; ++g)
      P += t.charAt(w[g]);
    return P;
  }
  function p(b) {
    if (typeof b != "string")
      throw new TypeError("Expected String");
    if (b.length === 0)
      return new Uint8Array();
    var E = 0;
    if (b[E] !== " ") {
      for (var T = 0, U = 0; b[E] === c; )
        T++, E++;
      for (var v = (b.length - E) * u + 1 >>> 0, O = new Uint8Array(v); b[E]; ) {
        var w = r[b.charCodeAt(E)];
        if (w === 255)
          return;
        for (var x = 0, y = v - 1; (w !== 0 || x < U) && y !== -1; y--, x++)
          w += o * O[y] >>> 0, O[y] = w % 256 >>> 0, w = w / 256 >>> 0;
        if (w !== 0)
          throw new Error("Non-zero carry");
        U = x, E++;
      }
      if (b[E] !== " ") {
        for (var l = v - U; l !== v && O[l] === 0; )
          l++;
        for (var g = new Uint8Array(T + (v - l)), P = T; l !== v; )
          g[P++] = O[l++];
        return g;
      }
    }
  }
  function m(b) {
    var E = p(b);
    if (E)
      return E;
    throw new Error(`Non-${e} character`);
  }
  return {
    encode: f,
    decodeUnsafe: p,
    decode: m
  };
}
var Xm = Jm, ev = Xm;
const tv = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, rv = (t) => new TextEncoder().encode(t), nv = (t) => new TextDecoder().decode(t);
class sv {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class iv {
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
    return Ph(this, e);
  }
}
class ov {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Ph(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Ph = (t, e) => new ov({
  ...t.decoders || { [t.prefix]: t },
  ...e.decoders || { [e.prefix]: e }
});
class av {
  constructor(e, r, n, s) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = s, this.encoder = new sv(e, r, n), this.decoder = new iv(e, r, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const va = ({ name: t, prefix: e, encode: r, decode: n }) => new av(t, e, r, n), Yi = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: s } = ev(r, e);
  return va({
    prefix: t,
    name: e,
    encode: n,
    decode: (i) => tv(s(i))
  });
}, cv = (t, e, r, n) => {
  const s = {};
  for (let d = 0; d < e.length; ++d)
    s[e[d]] = d;
  let i = t.length;
  for (; t[i - 1] === "="; )
    --i;
  const a = new Uint8Array(i * r / 8 | 0);
  let o = 0, c = 0, u = 0;
  for (let d = 0; d < i; ++d) {
    const f = s[t[d]];
    if (f === void 0)
      throw new SyntaxError(`Non-${n} character`);
    c = c << r | f, o += r, o >= 8 && (o -= 8, a[u++] = 255 & c >> o);
  }
  if (o >= r || 255 & c << 8 - o)
    throw new SyntaxError("Unexpected end of data");
  return a;
}, uv = (t, e, r) => {
  const n = e[e.length - 1] === "=", s = (1 << r) - 1;
  let i = "", a = 0, o = 0;
  for (let c = 0; c < t.length; ++c)
    for (o = o << 8 | t[c], a += 8; a > r; )
      a -= r, i += e[s & o >> a];
  if (a && (i += e[s & o << r - a]), n)
    for (; i.length * r & 7; )
      i += "=";
  return i;
}, zt = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => va({
  prefix: e,
  name: t,
  encode(s) {
    return uv(s, n, r);
  },
  decode(s) {
    return cv(s, n, r, t);
  }
}), lv = va({
  prefix: "\0",
  name: "identity",
  encode: (t) => nv(t),
  decode: (t) => rv(t)
}), dv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: lv
}, Symbol.toStringTag, { value: "Module" })), hv = zt({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), fv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: hv
}, Symbol.toStringTag, { value: "Module" })), pv = zt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), gv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: pv
}, Symbol.toStringTag, { value: "Module" })), yv = Yi({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), mv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: yv
}, Symbol.toStringTag, { value: "Module" })), vv = zt({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), _v = zt({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), bv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: vv,
  base16upper: _v
}, Symbol.toStringTag, { value: "Module" })), wv = zt({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), Ev = zt({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), Sv = zt({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), xv = zt({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), Iv = zt({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), Ov = zt({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), Tv = zt({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), Cv = zt({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), Nv = zt({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), Pv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: wv,
  base32hex: Iv,
  base32hexpad: Tv,
  base32hexpadupper: Cv,
  base32hexupper: Ov,
  base32pad: Sv,
  base32padupper: xv,
  base32upper: Ev,
  base32z: Nv
}, Symbol.toStringTag, { value: "Module" })), kv = Yi({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), Rv = Yi({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), Av = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: kv,
  base36upper: Rv
}, Symbol.toStringTag, { value: "Module" })), jv = Yi({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), Lv = Yi({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), Uv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: jv,
  base58flickr: Lv
}, Symbol.toStringTag, { value: "Module" })), Mv = zt({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), Dv = zt({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), zv = zt({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), $v = zt({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), Vv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: Mv,
  base64pad: Dv,
  base64url: zv,
  base64urlpad: $v
}, Symbol.toStringTag, { value: "Module" })), kh = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Zv = kh.reduce((t, e, r) => (t[r] = e, t), []), qv = kh.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function Fv(t) {
  return t.reduce((e, r) => (e += Zv[r], e), "");
}
function Kv(t) {
  const e = [];
  for (const r of t) {
    const n = qv[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const Bv = va({
  prefix: "🚀",
  name: "base256emoji",
  encode: Fv,
  decode: Kv
}), Hv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: Bv
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const Pl = {
  ...dv,
  ...fv,
  ...gv,
  ...mv,
  ...bv,
  ...Pv,
  ...Av,
  ...Uv,
  ...Vv,
  ...Hv
};
function Rh(t, e, r, n) {
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
const kl = Rh("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), Va = Rh("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = Nh(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), Ah = {
  utf8: kl,
  "utf-8": kl,
  hex: Pl.base16,
  latin1: Va,
  ascii: Va,
  binary: Va,
  ...Pl
};
function rr(t, e = "utf8") {
  const r = Ah[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : r.encoder.encode(t).substring(1);
}
function ur(t, e = "utf8") {
  const r = Ah[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? au(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
function Do(t) {
  return rr(ur(Gi(t), Fm), Ch);
}
function jh(t) {
  const e = ur(Ym, Nl), r = Gm + rr(hc([e, t]), Nl);
  return [Hm, Wm, r].join(Bm);
}
function Wv(t) {
  return rr(t, Ch);
}
function Gv(t) {
  return ur([Do(t.header), Do(t.payload)].join(Th), Km);
}
function Yv(t) {
  return [
    Do(t.header),
    Do(t.payload),
    Wv(t.signature)
  ].join(Th);
}
function Rl(t = $s.randomBytes(Qm)) {
  return ou.generateKeyPairFromSeed(t);
}
async function Qv(t, e, r, n, s = ae.fromMiliseconds(Date.now())) {
  const i = { alg: Zm, typ: qm }, a = jh(n.publicKey), o = s + r, c = { iss: a, sub: t, aud: e, iat: s, exp: o }, u = Gv({ header: i, payload: c }), d = ou.sign(n.secretKey, u);
  return Yv({ header: i, payload: c, signature: d });
}
var cu = {}, _a = {};
Object.defineProperty(_a, "__esModule", { value: !0 });
var qt = Se, fc = yr, Jv = 20;
function Xv(t, e, r) {
  for (var n = 1634760805, s = 857760878, i = 2036477234, a = 1797285236, o = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], c = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], u = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], d = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], f = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], p = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], m = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], b = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], E = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], T = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], U = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], v = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], O = n, w = s, x = i, y = a, l = o, g = c, P = u, k = d, M = f, G = p, Y = m, C = b, A = E, X = T, q = U, $ = v, Z = 0; Z < Jv; Z += 2)
    O = O + l | 0, A ^= O, A = A >>> 16 | A << 16, M = M + A | 0, l ^= M, l = l >>> 20 | l << 12, w = w + g | 0, X ^= w, X = X >>> 16 | X << 16, G = G + X | 0, g ^= G, g = g >>> 20 | g << 12, x = x + P | 0, q ^= x, q = q >>> 16 | q << 16, Y = Y + q | 0, P ^= Y, P = P >>> 20 | P << 12, y = y + k | 0, $ ^= y, $ = $ >>> 16 | $ << 16, C = C + $ | 0, k ^= C, k = k >>> 20 | k << 12, x = x + P | 0, q ^= x, q = q >>> 24 | q << 8, Y = Y + q | 0, P ^= Y, P = P >>> 25 | P << 7, y = y + k | 0, $ ^= y, $ = $ >>> 24 | $ << 8, C = C + $ | 0, k ^= C, k = k >>> 25 | k << 7, w = w + g | 0, X ^= w, X = X >>> 24 | X << 8, G = G + X | 0, g ^= G, g = g >>> 25 | g << 7, O = O + l | 0, A ^= O, A = A >>> 24 | A << 8, M = M + A | 0, l ^= M, l = l >>> 25 | l << 7, O = O + g | 0, $ ^= O, $ = $ >>> 16 | $ << 16, Y = Y + $ | 0, g ^= Y, g = g >>> 20 | g << 12, w = w + P | 0, A ^= w, A = A >>> 16 | A << 16, C = C + A | 0, P ^= C, P = P >>> 20 | P << 12, x = x + k | 0, X ^= x, X = X >>> 16 | X << 16, M = M + X | 0, k ^= M, k = k >>> 20 | k << 12, y = y + l | 0, q ^= y, q = q >>> 16 | q << 16, G = G + q | 0, l ^= G, l = l >>> 20 | l << 12, x = x + k | 0, X ^= x, X = X >>> 24 | X << 8, M = M + X | 0, k ^= M, k = k >>> 25 | k << 7, y = y + l | 0, q ^= y, q = q >>> 24 | q << 8, G = G + q | 0, l ^= G, l = l >>> 25 | l << 7, w = w + P | 0, A ^= w, A = A >>> 24 | A << 8, C = C + A | 0, P ^= C, P = P >>> 25 | P << 7, O = O + g | 0, $ ^= O, $ = $ >>> 24 | $ << 8, Y = Y + $ | 0, g ^= Y, g = g >>> 25 | g << 7;
  qt.writeUint32LE(O + n | 0, t, 0), qt.writeUint32LE(w + s | 0, t, 4), qt.writeUint32LE(x + i | 0, t, 8), qt.writeUint32LE(y + a | 0, t, 12), qt.writeUint32LE(l + o | 0, t, 16), qt.writeUint32LE(g + c | 0, t, 20), qt.writeUint32LE(P + u | 0, t, 24), qt.writeUint32LE(k + d | 0, t, 28), qt.writeUint32LE(M + f | 0, t, 32), qt.writeUint32LE(G + p | 0, t, 36), qt.writeUint32LE(Y + m | 0, t, 40), qt.writeUint32LE(C + b | 0, t, 44), qt.writeUint32LE(A + E | 0, t, 48), qt.writeUint32LE(X + T | 0, t, 52), qt.writeUint32LE(q + U | 0, t, 56), qt.writeUint32LE($ + v | 0, t, 60);
}
function Lh(t, e, r, n, s) {
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
  for (var o = new Uint8Array(64), c = 0; c < r.length; c += 64) {
    Xv(o, i, t);
    for (var u = c; u < c + 64 && u < r.length; u++)
      n[u] = r[u] ^ o[u - c];
    t_(i, 0, a);
  }
  return fc.wipe(o), s === 0 && fc.wipe(i), n;
}
_a.streamXOR = Lh;
function e_(t, e, r, n) {
  return n === void 0 && (n = 0), fc.wipe(r), Lh(t, e, r, r, n);
}
_a.stream = e_;
function t_(t, e, r) {
  for (var n = 1; r--; )
    n = n + (t[e] & 255) | 0, t[e] = n & 255, n >>>= 8, e++;
  if (n > 0)
    throw new Error("ChaCha: counter overflow");
}
var Uh = {}, Mn = {};
Object.defineProperty(Mn, "__esModule", { value: !0 });
function r_(t, e, r) {
  return ~(t - 1) & e | t - 1 & r;
}
Mn.select = r_;
function n_(t, e) {
  return (t | 0) - (e | 0) - 1 >>> 31 & 1;
}
Mn.lessOrEqual = n_;
function Mh(t, e) {
  if (t.length !== e.length)
    return 0;
  for (var r = 0, n = 0; n < t.length; n++)
    r |= t[n] ^ e[n];
  return 1 & r - 1 >>> 8;
}
Mn.compare = Mh;
function s_(t, e) {
  return t.length === 0 || e.length === 0 ? !1 : Mh(t, e) !== 0;
}
Mn.equal = s_;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Mn, r = yr;
  t.DIGEST_LENGTH = 16;
  var n = (
    /** @class */
    function() {
      function a(o) {
        this.digestLength = t.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
        var c = o[0] | o[1] << 8;
        this._r[0] = c & 8191;
        var u = o[2] | o[3] << 8;
        this._r[1] = (c >>> 13 | u << 3) & 8191;
        var d = o[4] | o[5] << 8;
        this._r[2] = (u >>> 10 | d << 6) & 7939;
        var f = o[6] | o[7] << 8;
        this._r[3] = (d >>> 7 | f << 9) & 8191;
        var p = o[8] | o[9] << 8;
        this._r[4] = (f >>> 4 | p << 12) & 255, this._r[5] = p >>> 1 & 8190;
        var m = o[10] | o[11] << 8;
        this._r[6] = (p >>> 14 | m << 2) & 8191;
        var b = o[12] | o[13] << 8;
        this._r[7] = (m >>> 11 | b << 5) & 8065;
        var E = o[14] | o[15] << 8;
        this._r[8] = (b >>> 8 | E << 8) & 8191, this._r[9] = E >>> 5 & 127, this._pad[0] = o[16] | o[17] << 8, this._pad[1] = o[18] | o[19] << 8, this._pad[2] = o[20] | o[21] << 8, this._pad[3] = o[22] | o[23] << 8, this._pad[4] = o[24] | o[25] << 8, this._pad[5] = o[26] | o[27] << 8, this._pad[6] = o[28] | o[29] << 8, this._pad[7] = o[30] | o[31] << 8;
      }
      return a.prototype._blocks = function(o, c, u) {
        for (var d = this._fin ? 0 : 2048, f = this._h[0], p = this._h[1], m = this._h[2], b = this._h[3], E = this._h[4], T = this._h[5], U = this._h[6], v = this._h[7], O = this._h[8], w = this._h[9], x = this._r[0], y = this._r[1], l = this._r[2], g = this._r[3], P = this._r[4], k = this._r[5], M = this._r[6], G = this._r[7], Y = this._r[8], C = this._r[9]; u >= 16; ) {
          var A = o[c + 0] | o[c + 1] << 8;
          f += A & 8191;
          var X = o[c + 2] | o[c + 3] << 8;
          p += (A >>> 13 | X << 3) & 8191;
          var q = o[c + 4] | o[c + 5] << 8;
          m += (X >>> 10 | q << 6) & 8191;
          var $ = o[c + 6] | o[c + 7] << 8;
          b += (q >>> 7 | $ << 9) & 8191;
          var Z = o[c + 8] | o[c + 9] << 8;
          E += ($ >>> 4 | Z << 12) & 8191, T += Z >>> 1 & 8191;
          var z = o[c + 10] | o[c + 11] << 8;
          U += (Z >>> 14 | z << 2) & 8191;
          var F = o[c + 12] | o[c + 13] << 8;
          v += (z >>> 11 | F << 5) & 8191;
          var ye = o[c + 14] | o[c + 15] << 8;
          O += (F >>> 8 | ye << 8) & 8191, w += ye >>> 5 | d;
          var K = 0, de = K;
          de += f * x, de += p * (5 * C), de += m * (5 * Y), de += b * (5 * G), de += E * (5 * M), K = de >>> 13, de &= 8191, de += T * (5 * k), de += U * (5 * P), de += v * (5 * g), de += O * (5 * l), de += w * (5 * y), K += de >>> 13, de &= 8191;
          var ne = K;
          ne += f * y, ne += p * x, ne += m * (5 * C), ne += b * (5 * Y), ne += E * (5 * G), K = ne >>> 13, ne &= 8191, ne += T * (5 * M), ne += U * (5 * k), ne += v * (5 * P), ne += O * (5 * g), ne += w * (5 * l), K += ne >>> 13, ne &= 8191;
          var le = K;
          le += f * l, le += p * y, le += m * x, le += b * (5 * C), le += E * (5 * Y), K = le >>> 13, le &= 8191, le += T * (5 * G), le += U * (5 * M), le += v * (5 * k), le += O * (5 * P), le += w * (5 * g), K += le >>> 13, le &= 8191;
          var L = K;
          L += f * g, L += p * l, L += m * y, L += b * x, L += E * (5 * C), K = L >>> 13, L &= 8191, L += T * (5 * Y), L += U * (5 * G), L += v * (5 * M), L += O * (5 * k), L += w * (5 * P), K += L >>> 13, L &= 8191;
          var j = K;
          j += f * P, j += p * g, j += m * l, j += b * y, j += E * x, K = j >>> 13, j &= 8191, j += T * (5 * C), j += U * (5 * Y), j += v * (5 * G), j += O * (5 * M), j += w * (5 * k), K += j >>> 13, j &= 8191;
          var N = K;
          N += f * k, N += p * P, N += m * g, N += b * l, N += E * y, K = N >>> 13, N &= 8191, N += T * x, N += U * (5 * C), N += v * (5 * Y), N += O * (5 * G), N += w * (5 * M), K += N >>> 13, N &= 8191;
          var h = K;
          h += f * M, h += p * k, h += m * P, h += b * g, h += E * l, K = h >>> 13, h &= 8191, h += T * y, h += U * x, h += v * (5 * C), h += O * (5 * Y), h += w * (5 * G), K += h >>> 13, h &= 8191;
          var I = K;
          I += f * G, I += p * M, I += m * k, I += b * P, I += E * g, K = I >>> 13, I &= 8191, I += T * l, I += U * y, I += v * x, I += O * (5 * C), I += w * (5 * Y), K += I >>> 13, I &= 8191;
          var W = K;
          W += f * Y, W += p * G, W += m * M, W += b * k, W += E * P, K = W >>> 13, W &= 8191, W += T * g, W += U * l, W += v * y, W += O * x, W += w * (5 * C), K += W >>> 13, W &= 8191;
          var ee = K;
          ee += f * C, ee += p * Y, ee += m * G, ee += b * M, ee += E * k, K = ee >>> 13, ee &= 8191, ee += T * P, ee += U * g, ee += v * l, ee += O * y, ee += w * x, K += ee >>> 13, ee &= 8191, K = (K << 2) + K | 0, K = K + de | 0, de = K & 8191, K = K >>> 13, ne += K, f = de, p = ne, m = le, b = L, E = j, T = N, U = h, v = I, O = W, w = ee, c += 16, u -= 16;
        }
        this._h[0] = f, this._h[1] = p, this._h[2] = m, this._h[3] = b, this._h[4] = E, this._h[5] = T, this._h[6] = U, this._h[7] = v, this._h[8] = O, this._h[9] = w;
      }, a.prototype.finish = function(o, c) {
        c === void 0 && (c = 0);
        var u = new Uint16Array(10), d, f, p, m;
        if (this._leftover) {
          for (m = this._leftover, this._buffer[m++] = 1; m < 16; m++)
            this._buffer[m] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (d = this._h[1] >>> 13, this._h[1] &= 8191, m = 2; m < 10; m++)
          this._h[m] += d, d = this._h[m] >>> 13, this._h[m] &= 8191;
        for (this._h[0] += d * 5, d = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += d, d = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += d, u[0] = this._h[0] + 5, d = u[0] >>> 13, u[0] &= 8191, m = 1; m < 10; m++)
          u[m] = this._h[m] + d, d = u[m] >>> 13, u[m] &= 8191;
        for (u[9] -= 8192, f = (d ^ 1) - 1, m = 0; m < 10; m++)
          u[m] &= f;
        for (f = ~f, m = 0; m < 10; m++)
          this._h[m] = this._h[m] & f | u[m];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, p = this._h[0] + this._pad[0], this._h[0] = p & 65535, m = 1; m < 8; m++)
          p = (this._h[m] + this._pad[m] | 0) + (p >>> 16) | 0, this._h[m] = p & 65535;
        return o[c + 0] = this._h[0] >>> 0, o[c + 1] = this._h[0] >>> 8, o[c + 2] = this._h[1] >>> 0, o[c + 3] = this._h[1] >>> 8, o[c + 4] = this._h[2] >>> 0, o[c + 5] = this._h[2] >>> 8, o[c + 6] = this._h[3] >>> 0, o[c + 7] = this._h[3] >>> 8, o[c + 8] = this._h[4] >>> 0, o[c + 9] = this._h[4] >>> 8, o[c + 10] = this._h[5] >>> 0, o[c + 11] = this._h[5] >>> 8, o[c + 12] = this._h[6] >>> 0, o[c + 13] = this._h[6] >>> 8, o[c + 14] = this._h[7] >>> 0, o[c + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, a.prototype.update = function(o) {
        var c = 0, u = o.length, d;
        if (this._leftover) {
          d = 16 - this._leftover, d > u && (d = u);
          for (var f = 0; f < d; f++)
            this._buffer[this._leftover + f] = o[c + f];
          if (u -= d, c += d, this._leftover += d, this._leftover < 16)
            return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (u >= 16 && (d = u - u % 16, this._blocks(o, c, d), c += d, u -= d), u) {
          for (var f = 0; f < u; f++)
            this._buffer[this._leftover + f] = o[c + f];
          this._leftover += u;
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
    var c = new n(a);
    c.update(o);
    var u = c.digest();
    return c.clean(), u;
  }
  t.oneTimeAuth = s;
  function i(a, o) {
    return a.length !== t.DIGEST_LENGTH || o.length !== t.DIGEST_LENGTH ? !1 : e.equal(a, o);
  }
  t.equal = i;
})(Uh);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = _a, r = Uh, n = yr, s = Se, i = Mn;
  t.KEY_LENGTH = 32, t.NONCE_LENGTH = 12, t.TAG_LENGTH = 16;
  var a = new Uint8Array(16), o = (
    /** @class */
    function() {
      function c(u) {
        if (this.nonceLength = t.NONCE_LENGTH, this.tagLength = t.TAG_LENGTH, u.length !== t.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(u);
      }
      return c.prototype.seal = function(u, d, f, p) {
        if (u.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var m = new Uint8Array(16);
        m.set(u, m.length - u.length);
        var b = new Uint8Array(32);
        e.stream(this._key, m, b, 4);
        var E = d.length + this.tagLength, T;
        if (p) {
          if (p.length !== E)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          T = p;
        } else
          T = new Uint8Array(E);
        return e.streamXOR(this._key, m, d, T, 4), this._authenticate(T.subarray(T.length - this.tagLength, T.length), b, T.subarray(0, T.length - this.tagLength), f), n.wipe(m), T;
      }, c.prototype.open = function(u, d, f, p) {
        if (u.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (d.length < this.tagLength)
          return null;
        var m = new Uint8Array(16);
        m.set(u, m.length - u.length);
        var b = new Uint8Array(32);
        e.stream(this._key, m, b, 4);
        var E = new Uint8Array(this.tagLength);
        if (this._authenticate(E, b, d.subarray(0, d.length - this.tagLength), f), !i.equal(E, d.subarray(d.length - this.tagLength, d.length)))
          return null;
        var T = d.length - this.tagLength, U;
        if (p) {
          if (p.length !== T)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          U = p;
        } else
          U = new Uint8Array(T);
        return e.streamXOR(this._key, m, d.subarray(0, d.length - this.tagLength), U, 4), n.wipe(m), U;
      }, c.prototype.clean = function() {
        return n.wipe(this._key), this;
      }, c.prototype._authenticate = function(u, d, f, p) {
        var m = new r.Poly1305(d);
        p && (m.update(p), p.length % 16 > 0 && m.update(a.subarray(p.length % 16))), m.update(f), f.length % 16 > 0 && m.update(a.subarray(f.length % 16));
        var b = new Uint8Array(8);
        p && s.writeUint64LE(p.length, b), m.update(b), s.writeUint64LE(f.length, b), m.update(b);
        for (var E = m.digest(), T = 0; T < E.length; T++)
          u[T] = E[T];
        m.clean(), n.wipe(E), n.wipe(b);
      }, c;
    }()
  );
  t.ChaCha20Poly1305 = o;
})(cu);
var Dh = {}, Qi = {}, uu = {};
Object.defineProperty(uu, "__esModule", { value: !0 });
function i_(t) {
  return typeof t.saveState < "u" && typeof t.restoreState < "u" && typeof t.cleanSavedState < "u";
}
uu.isSerializableHash = i_;
Object.defineProperty(Qi, "__esModule", { value: !0 });
var Fr = uu, o_ = Mn, a_ = yr, zh = (
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
      this._outer.update(n), Fr.isSerializableHash(this._inner) && Fr.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), a_.wipe(n);
    }
    return t.prototype.reset = function() {
      if (!Fr.isSerializableHash(this._inner) || !Fr.isSerializableHash(this._outer))
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.clean = function() {
      Fr.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), Fr.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
    }, t.prototype.update = function(e) {
      return this._inner.update(e), this;
    }, t.prototype.finish = function(e) {
      return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0, this);
    }, t.prototype.digest = function() {
      var e = new Uint8Array(this.digestLength);
      return this.finish(e), e;
    }, t.prototype.saveState = function() {
      if (!Fr.isSerializableHash(this._inner))
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      return this._inner.saveState();
    }, t.prototype.restoreState = function(e) {
      if (!Fr.isSerializableHash(this._inner) || !Fr.isSerializableHash(this._outer))
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.cleanSavedState = function(e) {
      if (!Fr.isSerializableHash(this._inner))
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      this._inner.cleanSavedState(e);
    }, t;
  }()
);
Qi.HMAC = zh;
function c_(t, e, r) {
  var n = new zh(t, e);
  n.update(r);
  var s = n.digest();
  return n.clean(), s;
}
Qi.hmac = c_;
Qi.equal = o_.equal;
Object.defineProperty(Dh, "__esModule", { value: !0 });
var Al = Qi, jl = yr, u_ = (
  /** @class */
  function() {
    function t(e, r, n, s) {
      n === void 0 && (n = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = s;
      var i = Al.hmac(this._hash, n, r);
      this._hmac = new Al.HMAC(e, i), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
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
      this._hmac.clean(), jl.wipe(this._buffer), jl.wipe(this._counter), this._bufpos = 0;
    }, t;
  }()
), l_ = Dh.HKDF = u_, ba = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Se, r = yr;
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
      }, o.prototype.update = function(c, u) {
        if (u === void 0 && (u = c.length), this._finished)
          throw new Error("SHA256: can't update because hash was finished.");
        var d = 0;
        if (this._bytesHashed += u, this._bufferLength > 0) {
          for (; this._bufferLength < this.blockSize && u > 0; )
            this._buffer[this._bufferLength++] = c[d++], u--;
          this._bufferLength === this.blockSize && (i(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (u >= this.blockSize && (d = i(this._temp, this._state, c, d, u), u %= this.blockSize); u > 0; )
          this._buffer[this._bufferLength++] = c[d++], u--;
        return this;
      }, o.prototype.finish = function(c) {
        if (!this._finished) {
          var u = this._bytesHashed, d = this._bufferLength, f = u / 536870912 | 0, p = u << 3, m = u % 64 < 56 ? 64 : 128;
          this._buffer[d] = 128;
          for (var b = d + 1; b < m - 8; b++)
            this._buffer[b] = 0;
          e.writeUint32BE(f, this._buffer, m - 8), e.writeUint32BE(p, this._buffer, m - 4), i(this._temp, this._state, this._buffer, 0, m), this._finished = !0;
        }
        for (var b = 0; b < this.digestLength / 4; b++)
          e.writeUint32BE(this._state[b], c, b * 4);
        return this;
      }, o.prototype.digest = function() {
        var c = new Uint8Array(this.digestLength);
        return this.finish(c), c;
      }, o.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          state: new Int32Array(this._state),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, o.prototype.restoreState = function(c) {
        return this._state.set(c.state), this._bufferLength = c.bufferLength, c.buffer && this._buffer.set(c.buffer), this._bytesHashed = c.bytesHashed, this._finished = !1, this;
      }, o.prototype.cleanSavedState = function(c) {
        r.wipe(c.state), c.buffer && r.wipe(c.buffer), c.bufferLength = 0, c.bytesHashed = 0;
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
  function i(o, c, u, d, f) {
    for (; f >= 64; ) {
      for (var p = c[0], m = c[1], b = c[2], E = c[3], T = c[4], U = c[5], v = c[6], O = c[7], w = 0; w < 16; w++) {
        var x = d + w * 4;
        o[w] = e.readUint32BE(u, x);
      }
      for (var w = 16; w < 64; w++) {
        var y = o[w - 2], l = (y >>> 17 | y << 15) ^ (y >>> 19 | y << 13) ^ y >>> 10;
        y = o[w - 15];
        var g = (y >>> 7 | y << 25) ^ (y >>> 18 | y << 14) ^ y >>> 3;
        o[w] = (l + o[w - 7] | 0) + (g + o[w - 16] | 0);
      }
      for (var w = 0; w < 64; w++) {
        var l = (((T >>> 6 | T << 26) ^ (T >>> 11 | T << 21) ^ (T >>> 25 | T << 7)) + (T & U ^ ~T & v) | 0) + (O + (s[w] + o[w] | 0) | 0) | 0, g = ((p >>> 2 | p << 30) ^ (p >>> 13 | p << 19) ^ (p >>> 22 | p << 10)) + (p & m ^ p & b ^ m & b) | 0;
        O = v, v = U, U = T, T = E + l | 0, E = b, b = m, m = p, p = l + g | 0;
      }
      c[0] += p, c[1] += m, c[2] += b, c[3] += E, c[4] += T, c[5] += U, c[6] += v, c[7] += O, d += 64, f -= 64;
    }
    return d;
  }
  function a(o) {
    var c = new n();
    c.update(o);
    var u = c.digest();
    return c.clean(), u;
  }
  t.hash = a;
})(ba);
var lu = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.sharedKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.scalarMultBase = t.scalarMult = t.SHARED_KEY_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = void 0;
  const e = $s, r = yr;
  t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 32, t.SHARED_KEY_LENGTH = 32;
  function n(w) {
    const x = new Float64Array(16);
    if (w)
      for (let y = 0; y < w.length; y++)
        x[y] = w[y];
    return x;
  }
  const s = new Uint8Array(32);
  s[0] = 9;
  const i = n([56129, 1]);
  function a(w) {
    let x = 1;
    for (let y = 0; y < 16; y++) {
      let l = w[y] + x + 65535;
      x = Math.floor(l / 65536), w[y] = l - x * 65536;
    }
    w[0] += x - 1 + 37 * (x - 1);
  }
  function o(w, x, y) {
    const l = ~(y - 1);
    for (let g = 0; g < 16; g++) {
      const P = l & (w[g] ^ x[g]);
      w[g] ^= P, x[g] ^= P;
    }
  }
  function c(w, x) {
    const y = n(), l = n();
    for (let g = 0; g < 16; g++)
      l[g] = x[g];
    a(l), a(l), a(l);
    for (let g = 0; g < 2; g++) {
      y[0] = l[0] - 65517;
      for (let k = 1; k < 15; k++)
        y[k] = l[k] - 65535 - (y[k - 1] >> 16 & 1), y[k - 1] &= 65535;
      y[15] = l[15] - 32767 - (y[14] >> 16 & 1);
      const P = y[15] >> 16 & 1;
      y[14] &= 65535, o(l, y, 1 - P);
    }
    for (let g = 0; g < 16; g++)
      w[2 * g] = l[g] & 255, w[2 * g + 1] = l[g] >> 8;
  }
  function u(w, x) {
    for (let y = 0; y < 16; y++)
      w[y] = x[2 * y] + (x[2 * y + 1] << 8);
    w[15] &= 32767;
  }
  function d(w, x, y) {
    for (let l = 0; l < 16; l++)
      w[l] = x[l] + y[l];
  }
  function f(w, x, y) {
    for (let l = 0; l < 16; l++)
      w[l] = x[l] - y[l];
  }
  function p(w, x, y) {
    let l, g, P = 0, k = 0, M = 0, G = 0, Y = 0, C = 0, A = 0, X = 0, q = 0, $ = 0, Z = 0, z = 0, F = 0, ye = 0, K = 0, de = 0, ne = 0, le = 0, L = 0, j = 0, N = 0, h = 0, I = 0, W = 0, ee = 0, je = 0, Le = 0, Oe = 0, qe = 0, at = 0, tt = 0, Ve = y[0], De = y[1], Te = y[2], Pe = y[3], Ce = y[4], we = y[5], _e = y[6], he = y[7], ke = y[8], Ue = y[9], me = y[10], ze = y[11], Fe = y[12], We = y[13], Ge = y[14], Ke = y[15];
    l = x[0], P += l * Ve, k += l * De, M += l * Te, G += l * Pe, Y += l * Ce, C += l * we, A += l * _e, X += l * he, q += l * ke, $ += l * Ue, Z += l * me, z += l * ze, F += l * Fe, ye += l * We, K += l * Ge, de += l * Ke, l = x[1], k += l * Ve, M += l * De, G += l * Te, Y += l * Pe, C += l * Ce, A += l * we, X += l * _e, q += l * he, $ += l * ke, Z += l * Ue, z += l * me, F += l * ze, ye += l * Fe, K += l * We, de += l * Ge, ne += l * Ke, l = x[2], M += l * Ve, G += l * De, Y += l * Te, C += l * Pe, A += l * Ce, X += l * we, q += l * _e, $ += l * he, Z += l * ke, z += l * Ue, F += l * me, ye += l * ze, K += l * Fe, de += l * We, ne += l * Ge, le += l * Ke, l = x[3], G += l * Ve, Y += l * De, C += l * Te, A += l * Pe, X += l * Ce, q += l * we, $ += l * _e, Z += l * he, z += l * ke, F += l * Ue, ye += l * me, K += l * ze, de += l * Fe, ne += l * We, le += l * Ge, L += l * Ke, l = x[4], Y += l * Ve, C += l * De, A += l * Te, X += l * Pe, q += l * Ce, $ += l * we, Z += l * _e, z += l * he, F += l * ke, ye += l * Ue, K += l * me, de += l * ze, ne += l * Fe, le += l * We, L += l * Ge, j += l * Ke, l = x[5], C += l * Ve, A += l * De, X += l * Te, q += l * Pe, $ += l * Ce, Z += l * we, z += l * _e, F += l * he, ye += l * ke, K += l * Ue, de += l * me, ne += l * ze, le += l * Fe, L += l * We, j += l * Ge, N += l * Ke, l = x[6], A += l * Ve, X += l * De, q += l * Te, $ += l * Pe, Z += l * Ce, z += l * we, F += l * _e, ye += l * he, K += l * ke, de += l * Ue, ne += l * me, le += l * ze, L += l * Fe, j += l * We, N += l * Ge, h += l * Ke, l = x[7], X += l * Ve, q += l * De, $ += l * Te, Z += l * Pe, z += l * Ce, F += l * we, ye += l * _e, K += l * he, de += l * ke, ne += l * Ue, le += l * me, L += l * ze, j += l * Fe, N += l * We, h += l * Ge, I += l * Ke, l = x[8], q += l * Ve, $ += l * De, Z += l * Te, z += l * Pe, F += l * Ce, ye += l * we, K += l * _e, de += l * he, ne += l * ke, le += l * Ue, L += l * me, j += l * ze, N += l * Fe, h += l * We, I += l * Ge, W += l * Ke, l = x[9], $ += l * Ve, Z += l * De, z += l * Te, F += l * Pe, ye += l * Ce, K += l * we, de += l * _e, ne += l * he, le += l * ke, L += l * Ue, j += l * me, N += l * ze, h += l * Fe, I += l * We, W += l * Ge, ee += l * Ke, l = x[10], Z += l * Ve, z += l * De, F += l * Te, ye += l * Pe, K += l * Ce, de += l * we, ne += l * _e, le += l * he, L += l * ke, j += l * Ue, N += l * me, h += l * ze, I += l * Fe, W += l * We, ee += l * Ge, je += l * Ke, l = x[11], z += l * Ve, F += l * De, ye += l * Te, K += l * Pe, de += l * Ce, ne += l * we, le += l * _e, L += l * he, j += l * ke, N += l * Ue, h += l * me, I += l * ze, W += l * Fe, ee += l * We, je += l * Ge, Le += l * Ke, l = x[12], F += l * Ve, ye += l * De, K += l * Te, de += l * Pe, ne += l * Ce, le += l * we, L += l * _e, j += l * he, N += l * ke, h += l * Ue, I += l * me, W += l * ze, ee += l * Fe, je += l * We, Le += l * Ge, Oe += l * Ke, l = x[13], ye += l * Ve, K += l * De, de += l * Te, ne += l * Pe, le += l * Ce, L += l * we, j += l * _e, N += l * he, h += l * ke, I += l * Ue, W += l * me, ee += l * ze, je += l * Fe, Le += l * We, Oe += l * Ge, qe += l * Ke, l = x[14], K += l * Ve, de += l * De, ne += l * Te, le += l * Pe, L += l * Ce, j += l * we, N += l * _e, h += l * he, I += l * ke, W += l * Ue, ee += l * me, je += l * ze, Le += l * Fe, Oe += l * We, qe += l * Ge, at += l * Ke, l = x[15], de += l * Ve, ne += l * De, le += l * Te, L += l * Pe, j += l * Ce, N += l * we, h += l * _e, I += l * he, W += l * ke, ee += l * Ue, je += l * me, Le += l * ze, Oe += l * Fe, qe += l * We, at += l * Ge, tt += l * Ke, P += 38 * ne, k += 38 * le, M += 38 * L, G += 38 * j, Y += 38 * N, C += 38 * h, A += 38 * I, X += 38 * W, q += 38 * ee, $ += 38 * je, Z += 38 * Le, z += 38 * Oe, F += 38 * qe, ye += 38 * at, K += 38 * tt, g = 1, l = P + g + 65535, g = Math.floor(l / 65536), P = l - g * 65536, l = k + g + 65535, g = Math.floor(l / 65536), k = l - g * 65536, l = M + g + 65535, g = Math.floor(l / 65536), M = l - g * 65536, l = G + g + 65535, g = Math.floor(l / 65536), G = l - g * 65536, l = Y + g + 65535, g = Math.floor(l / 65536), Y = l - g * 65536, l = C + g + 65535, g = Math.floor(l / 65536), C = l - g * 65536, l = A + g + 65535, g = Math.floor(l / 65536), A = l - g * 65536, l = X + g + 65535, g = Math.floor(l / 65536), X = l - g * 65536, l = q + g + 65535, g = Math.floor(l / 65536), q = l - g * 65536, l = $ + g + 65535, g = Math.floor(l / 65536), $ = l - g * 65536, l = Z + g + 65535, g = Math.floor(l / 65536), Z = l - g * 65536, l = z + g + 65535, g = Math.floor(l / 65536), z = l - g * 65536, l = F + g + 65535, g = Math.floor(l / 65536), F = l - g * 65536, l = ye + g + 65535, g = Math.floor(l / 65536), ye = l - g * 65536, l = K + g + 65535, g = Math.floor(l / 65536), K = l - g * 65536, l = de + g + 65535, g = Math.floor(l / 65536), de = l - g * 65536, P += g - 1 + 37 * (g - 1), g = 1, l = P + g + 65535, g = Math.floor(l / 65536), P = l - g * 65536, l = k + g + 65535, g = Math.floor(l / 65536), k = l - g * 65536, l = M + g + 65535, g = Math.floor(l / 65536), M = l - g * 65536, l = G + g + 65535, g = Math.floor(l / 65536), G = l - g * 65536, l = Y + g + 65535, g = Math.floor(l / 65536), Y = l - g * 65536, l = C + g + 65535, g = Math.floor(l / 65536), C = l - g * 65536, l = A + g + 65535, g = Math.floor(l / 65536), A = l - g * 65536, l = X + g + 65535, g = Math.floor(l / 65536), X = l - g * 65536, l = q + g + 65535, g = Math.floor(l / 65536), q = l - g * 65536, l = $ + g + 65535, g = Math.floor(l / 65536), $ = l - g * 65536, l = Z + g + 65535, g = Math.floor(l / 65536), Z = l - g * 65536, l = z + g + 65535, g = Math.floor(l / 65536), z = l - g * 65536, l = F + g + 65535, g = Math.floor(l / 65536), F = l - g * 65536, l = ye + g + 65535, g = Math.floor(l / 65536), ye = l - g * 65536, l = K + g + 65535, g = Math.floor(l / 65536), K = l - g * 65536, l = de + g + 65535, g = Math.floor(l / 65536), de = l - g * 65536, P += g - 1 + 37 * (g - 1), w[0] = P, w[1] = k, w[2] = M, w[3] = G, w[4] = Y, w[5] = C, w[6] = A, w[7] = X, w[8] = q, w[9] = $, w[10] = Z, w[11] = z, w[12] = F, w[13] = ye, w[14] = K, w[15] = de;
  }
  function m(w, x) {
    p(w, x, x);
  }
  function b(w, x) {
    const y = n();
    for (let l = 0; l < 16; l++)
      y[l] = x[l];
    for (let l = 253; l >= 0; l--)
      m(y, y), l !== 2 && l !== 4 && p(y, y, x);
    for (let l = 0; l < 16; l++)
      w[l] = y[l];
  }
  function E(w, x) {
    const y = new Uint8Array(32), l = new Float64Array(80), g = n(), P = n(), k = n(), M = n(), G = n(), Y = n();
    for (let q = 0; q < 31; q++)
      y[q] = w[q];
    y[31] = w[31] & 127 | 64, y[0] &= 248, u(l, x);
    for (let q = 0; q < 16; q++)
      P[q] = l[q];
    g[0] = M[0] = 1;
    for (let q = 254; q >= 0; --q) {
      const $ = y[q >>> 3] >>> (q & 7) & 1;
      o(g, P, $), o(k, M, $), d(G, g, k), f(g, g, k), d(k, P, M), f(P, P, M), m(M, G), m(Y, g), p(g, k, g), p(k, P, G), d(G, g, k), f(g, g, k), m(P, g), f(k, M, Y), p(g, k, i), d(g, g, M), p(k, k, g), p(g, M, Y), p(M, P, l), m(P, G), o(g, P, $), o(k, M, $);
    }
    for (let q = 0; q < 16; q++)
      l[q + 16] = g[q], l[q + 32] = k[q], l[q + 48] = P[q], l[q + 64] = M[q];
    const C = l.subarray(32), A = l.subarray(16);
    b(C, C), p(A, A, C);
    const X = new Uint8Array(32);
    return c(X, A), X;
  }
  t.scalarMult = E;
  function T(w) {
    return E(w, s);
  }
  t.scalarMultBase = T;
  function U(w) {
    if (w.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);
    const x = new Uint8Array(w);
    return {
      publicKey: T(x),
      secretKey: x
    };
  }
  t.generateKeyPairFromSeed = U;
  function v(w) {
    const x = (0, e.randomBytes)(32, w), y = U(x);
    return (0, r.wipe)(x), y;
  }
  t.generateKeyPair = v;
  function O(w, x, y = !1) {
    if (w.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (x.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const l = E(w, x);
    if (y) {
      let g = 0;
      for (let P = 0; P < l.length; P++)
        g |= l[P];
      if (g === 0)
        throw new Error("X25519: invalid shared key");
    }
    return l;
  }
  t.sharedKey = O;
})(lu);
var Ll = function(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, s = e.length, i; n < s; n++)
      (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return t.concat(i || Array.prototype.slice.call(e));
}, d_ = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, n) {
      this.name = e, this.version = r, this.os = n, this.type = "browser";
    }
    return t;
  }()
), h_ = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return t;
  }()
), f_ = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, n, s) {
      this.name = e, this.version = r, this.os = n, this.bot = s, this.type = "bot-device";
    }
    return t;
  }()
), p_ = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return t;
  }()
), g_ = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return t;
  }()
), y_ = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, m_ = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, Ul = 3, v_ = [
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
  ["searchbot", y_]
], Ml = [
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
function __(t) {
  return t ? Dl(t) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new g_() : typeof navigator < "u" ? Dl(navigator.userAgent) : E_();
}
function b_(t) {
  return t !== "" && v_.reduce(function(e, r) {
    var n = r[0], s = r[1];
    if (e)
      return e;
    var i = s.exec(t);
    return !!i && [n, i];
  }, !1);
}
function Dl(t) {
  var e = b_(t);
  if (!e)
    return null;
  var r = e[0], n = e[1];
  if (r === "searchbot")
    return new p_();
  var s = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
  s ? s.length < Ul && (s = Ll(Ll([], s, !0), S_(Ul - s.length), !0)) : s = [];
  var i = s.join("."), a = w_(t), o = m_.exec(t);
  return o && o[1] ? new f_(r, i, a, o[1]) : new d_(r, i, a);
}
function w_(t) {
  for (var e = 0, r = Ml.length; e < r; e++) {
    var n = Ml[e], s = n[0], i = n[1], a = i.exec(t);
    if (a)
      return s;
  }
  return null;
}
function E_() {
  var t = typeof process < "u" && process.version;
  return t ? new h_(process.version.slice(1)) : null;
}
function S_(t) {
  for (var e = [], r = 0; r < t; r++)
    e.push("0");
  return e;
}
var nt = {};
Object.defineProperty(nt, "__esModule", { value: !0 });
nt.getLocalStorage = nt.getLocalStorageOrThrow = nt.getCrypto = nt.getCryptoOrThrow = Vh = nt.getLocation = nt.getLocationOrThrow = du = nt.getNavigator = nt.getNavigatorOrThrow = $h = nt.getDocument = nt.getDocumentOrThrow = nt.getFromWindowOrThrow = nt.getFromWindow = void 0;
function cs(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
nt.getFromWindow = cs;
function Vs(t) {
  const e = cs(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
nt.getFromWindowOrThrow = Vs;
function x_() {
  return Vs("document");
}
nt.getDocumentOrThrow = x_;
function I_() {
  return cs("document");
}
var $h = nt.getDocument = I_;
function O_() {
  return Vs("navigator");
}
nt.getNavigatorOrThrow = O_;
function T_() {
  return cs("navigator");
}
var du = nt.getNavigator = T_;
function C_() {
  return Vs("location");
}
nt.getLocationOrThrow = C_;
function N_() {
  return cs("location");
}
var Vh = nt.getLocation = N_;
function P_() {
  return Vs("crypto");
}
nt.getCryptoOrThrow = P_;
function k_() {
  return cs("crypto");
}
nt.getCrypto = k_;
function R_() {
  return Vs("localStorage");
}
nt.getLocalStorageOrThrow = R_;
function A_() {
  return cs("localStorage");
}
nt.getLocalStorage = A_;
var hu = {};
Object.defineProperty(hu, "__esModule", { value: !0 });
var Zh = hu.getWindowMetadata = void 0;
const zl = nt;
function j_() {
  let t, e;
  try {
    t = zl.getDocumentOrThrow(), e = zl.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const d = t.getElementsByTagName("link"), f = [];
    for (let p = 0; p < d.length; p++) {
      const m = d[p], b = m.getAttribute("rel");
      if (b && b.toLowerCase().indexOf("icon") > -1) {
        const E = m.getAttribute("href");
        if (E)
          if (E.toLowerCase().indexOf("https:") === -1 && E.toLowerCase().indexOf("http:") === -1 && E.indexOf("//") !== 0) {
            let T = e.protocol + "//" + e.host;
            if (E.indexOf("/") === 0)
              T += E;
            else {
              const U = e.pathname.split("/");
              U.pop();
              const v = U.join("/");
              T += v + "/" + E;
            }
            f.push(T);
          } else if (E.indexOf("//") === 0) {
            const T = e.protocol + E;
            f.push(T);
          } else
            f.push(E);
      }
    }
    return f;
  }
  function n(...d) {
    const f = t.getElementsByTagName("meta");
    for (let p = 0; p < f.length; p++) {
      const m = f[p], b = ["itemprop", "property", "name"].map((E) => m.getAttribute(E)).filter((E) => E ? d.includes(E) : !1);
      if (b.length && b) {
        const E = m.getAttribute("content");
        if (E)
          return E;
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
  const a = s(), o = i(), c = e.origin, u = r();
  return {
    description: o,
    url: c,
    icons: u,
    name: a
  };
}
Zh = hu.getWindowMetadata = j_;
var di = {}, L_ = (t) => encodeURIComponent(t).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), qh = "%[a-f0-9]{2}", $l = new RegExp("(" + qh + ")|([^%]+?)", "gi"), Vl = new RegExp("(" + qh + ")+", "gi");
function pc(t, e) {
  try {
    return [decodeURIComponent(t.join(""))];
  } catch {
  }
  if (t.length === 1)
    return t;
  e = e || 1;
  var r = t.slice(0, e), n = t.slice(e);
  return Array.prototype.concat.call([], pc(r), pc(n));
}
function U_(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    for (var e = t.match($l) || [], r = 1; r < e.length; r++)
      t = pc(e, r).join(""), e = t.match($l) || [];
    return t;
  }
}
function M_(t) {
  for (var e = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = Vl.exec(t); r; ) {
    try {
      e[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var n = U_(r[0]);
      n !== r[0] && (e[r[0]] = n);
    }
    r = Vl.exec(t);
  }
  e["%C2"] = "�";
  for (var s = Object.keys(e), i = 0; i < s.length; i++) {
    var a = s[i];
    t = t.replace(new RegExp(a, "g"), e[a]);
  }
  return t;
}
var D_ = function(t) {
  if (typeof t != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
  try {
    return t = t.replace(/\+/g, " "), decodeURIComponent(t);
  } catch {
    return M_(t);
  }
}, z_ = (t, e) => {
  if (!(typeof t == "string" && typeof e == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "")
    return [t];
  const r = t.indexOf(e);
  return r === -1 ? [t] : [
    t.slice(0, r),
    t.slice(r + e.length)
  ];
}, $_ = function(t, e) {
  for (var r = {}, n = Object.keys(t), s = Array.isArray(e), i = 0; i < n.length; i++) {
    var a = n[i], o = t[a];
    (s ? e.indexOf(a) !== -1 : e(a, o, t)) && (r[a] = o);
  }
  return r;
};
(function(t) {
  const e = L_, r = D_, n = z_, s = $_, i = (v) => v == null, a = Symbol("encodeFragmentIdentifier");
  function o(v) {
    switch (v.arrayFormat) {
      case "index":
        return (O) => (w, x) => {
          const y = w.length;
          return x === void 0 || v.skipNull && x === null || v.skipEmptyString && x === "" ? w : x === null ? [...w, [d(O, v), "[", y, "]"].join("")] : [
            ...w,
            [d(O, v), "[", d(y, v), "]=", d(x, v)].join("")
          ];
        };
      case "bracket":
        return (O) => (w, x) => x === void 0 || v.skipNull && x === null || v.skipEmptyString && x === "" ? w : x === null ? [...w, [d(O, v), "[]"].join("")] : [...w, [d(O, v), "[]=", d(x, v)].join("")];
      case "colon-list-separator":
        return (O) => (w, x) => x === void 0 || v.skipNull && x === null || v.skipEmptyString && x === "" ? w : x === null ? [...w, [d(O, v), ":list="].join("")] : [...w, [d(O, v), ":list=", d(x, v)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const O = v.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (w) => (x, y) => y === void 0 || v.skipNull && y === null || v.skipEmptyString && y === "" ? x : (y = y === null ? "" : y, x.length === 0 ? [[d(w, v), O, d(y, v)].join("")] : [[x, d(y, v)].join(v.arrayFormatSeparator)]);
      }
      default:
        return (O) => (w, x) => x === void 0 || v.skipNull && x === null || v.skipEmptyString && x === "" ? w : x === null ? [...w, d(O, v)] : [...w, [d(O, v), "=", d(x, v)].join("")];
    }
  }
  function c(v) {
    let O;
    switch (v.arrayFormat) {
      case "index":
        return (w, x, y) => {
          if (O = /\[(\d*)\]$/.exec(w), w = w.replace(/\[\d*\]$/, ""), !O) {
            y[w] = x;
            return;
          }
          y[w] === void 0 && (y[w] = {}), y[w][O[1]] = x;
        };
      case "bracket":
        return (w, x, y) => {
          if (O = /(\[\])$/.exec(w), w = w.replace(/\[\]$/, ""), !O) {
            y[w] = x;
            return;
          }
          if (y[w] === void 0) {
            y[w] = [x];
            return;
          }
          y[w] = [].concat(y[w], x);
        };
      case "colon-list-separator":
        return (w, x, y) => {
          if (O = /(:list)$/.exec(w), w = w.replace(/:list$/, ""), !O) {
            y[w] = x;
            return;
          }
          if (y[w] === void 0) {
            y[w] = [x];
            return;
          }
          y[w] = [].concat(y[w], x);
        };
      case "comma":
      case "separator":
        return (w, x, y) => {
          const l = typeof x == "string" && x.includes(v.arrayFormatSeparator), g = typeof x == "string" && !l && f(x, v).includes(v.arrayFormatSeparator);
          x = g ? f(x, v) : x;
          const P = l || g ? x.split(v.arrayFormatSeparator).map((k) => f(k, v)) : x === null ? x : f(x, v);
          y[w] = P;
        };
      case "bracket-separator":
        return (w, x, y) => {
          const l = /(\[\])$/.test(w);
          if (w = w.replace(/\[\]$/, ""), !l) {
            y[w] = x && f(x, v);
            return;
          }
          const g = x === null ? [] : x.split(v.arrayFormatSeparator).map((P) => f(P, v));
          if (y[w] === void 0) {
            y[w] = g;
            return;
          }
          y[w] = [].concat(y[w], g);
        };
      default:
        return (w, x, y) => {
          if (y[w] === void 0) {
            y[w] = x;
            return;
          }
          y[w] = [].concat(y[w], x);
        };
    }
  }
  function u(v) {
    if (typeof v != "string" || v.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function d(v, O) {
    return O.encode ? O.strict ? e(v) : encodeURIComponent(v) : v;
  }
  function f(v, O) {
    return O.decode ? r(v) : v;
  }
  function p(v) {
    return Array.isArray(v) ? v.sort() : typeof v == "object" ? p(Object.keys(v)).sort((O, w) => Number(O) - Number(w)).map((O) => v[O]) : v;
  }
  function m(v) {
    const O = v.indexOf("#");
    return O !== -1 && (v = v.slice(0, O)), v;
  }
  function b(v) {
    let O = "";
    const w = v.indexOf("#");
    return w !== -1 && (O = v.slice(w)), O;
  }
  function E(v) {
    v = m(v);
    const O = v.indexOf("?");
    return O === -1 ? "" : v.slice(O + 1);
  }
  function T(v, O) {
    return O.parseNumbers && !Number.isNaN(Number(v)) && typeof v == "string" && v.trim() !== "" ? v = Number(v) : O.parseBooleans && v !== null && (v.toLowerCase() === "true" || v.toLowerCase() === "false") && (v = v.toLowerCase() === "true"), v;
  }
  function U(v, O) {
    O = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, O), u(O.arrayFormatSeparator);
    const w = c(O), x = /* @__PURE__ */ Object.create(null);
    if (typeof v != "string" || (v = v.trim().replace(/^[?#&]/, ""), !v))
      return x;
    for (const y of v.split("&")) {
      if (y === "")
        continue;
      let [l, g] = n(O.decode ? y.replace(/\+/g, " ") : y, "=");
      g = g === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(O.arrayFormat) ? g : f(g, O), w(f(l, O), g, x);
    }
    for (const y of Object.keys(x)) {
      const l = x[y];
      if (typeof l == "object" && l !== null)
        for (const g of Object.keys(l))
          l[g] = T(l[g], O);
      else
        x[y] = T(l, O);
    }
    return O.sort === !1 ? x : (O.sort === !0 ? Object.keys(x).sort() : Object.keys(x).sort(O.sort)).reduce((y, l) => {
      const g = x[l];
      return g && typeof g == "object" && !Array.isArray(g) ? y[l] = p(g) : y[l] = g, y;
    }, /* @__PURE__ */ Object.create(null));
  }
  t.extract = E, t.parse = U, t.stringify = (v, O) => {
    if (!v)
      return "";
    O = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, O), u(O.arrayFormatSeparator);
    const w = (g) => O.skipNull && i(v[g]) || O.skipEmptyString && v[g] === "", x = o(O), y = {};
    for (const g of Object.keys(v))
      w(g) || (y[g] = v[g]);
    const l = Object.keys(y);
    return O.sort !== !1 && l.sort(O.sort), l.map((g) => {
      const P = v[g];
      return P === void 0 ? "" : P === null ? d(g, O) : Array.isArray(P) ? P.length === 0 && O.arrayFormat === "bracket-separator" ? d(g, O) + "[]" : P.reduce(x(g), []).join("&") : d(g, O) + "=" + d(P, O);
    }).filter((g) => g.length > 0).join("&");
  }, t.parseUrl = (v, O) => {
    O = Object.assign({
      decode: !0
    }, O);
    const [w, x] = n(v, "#");
    return Object.assign(
      {
        url: w.split("?")[0] || "",
        query: U(E(v), O)
      },
      O && O.parseFragmentIdentifier && x ? { fragmentIdentifier: f(x, O) } : {}
    );
  }, t.stringifyUrl = (v, O) => {
    O = Object.assign({
      encode: !0,
      strict: !0,
      [a]: !0
    }, O);
    const w = m(v.url).split("?")[0] || "", x = t.extract(v.url), y = t.parse(x, { sort: !1 }), l = Object.assign(y, v.query);
    let g = t.stringify(l, O);
    g && (g = `?${g}`);
    let P = b(v.url);
    return v.fragmentIdentifier && (P = `#${O[a] ? d(v.fragmentIdentifier, O) : v.fragmentIdentifier}`), `${w}${g}${P}`;
  }, t.pick = (v, O, w) => {
    w = Object.assign({
      parseFragmentIdentifier: !0,
      [a]: !1
    }, w);
    const { url: x, query: y, fragmentIdentifier: l } = t.parseUrl(v, w);
    return t.stringifyUrl({
      url: x,
      query: s(y, O),
      fragmentIdentifier: l
    }, w);
  }, t.exclude = (v, O, w) => {
    const x = Array.isArray(O) ? (y) => !O.includes(y) : (y, l) => !O(y, l);
    return t.pick(v, x, w);
  };
})(di);
const V_ = {
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
function Fh(t, e) {
  return t.includes(":") ? [t] : e.chains || [];
}
const Kh = "base10", tr = "base16", gc = "base64pad", fu = "utf8", Bh = 0, us = 1, Z_ = 0, Zl = 1, yc = 12, pu = 32;
function q_() {
  const t = lu.generateKeyPair();
  return { privateKey: rr(t.secretKey, tr), publicKey: rr(t.publicKey, tr) };
}
function mc() {
  const t = $s.randomBytes(pu);
  return rr(t, tr);
}
function F_(t, e) {
  const r = lu.sharedKey(ur(t, tr), ur(e, tr)), n = new l_(ba.SHA256, r).expand(pu);
  return rr(n, tr);
}
function K_(t) {
  const e = ba.hash(ur(t, tr));
  return rr(e, tr);
}
function Ss(t) {
  const e = ba.hash(ur(t, fu));
  return rr(e, tr);
}
function B_(t) {
  return ur(`${t}`, Kh);
}
function Ji(t) {
  return Number(rr(t, Kh));
}
function H_(t) {
  const e = B_(typeof t.type < "u" ? t.type : Bh);
  if (Ji(e) === us && typeof t.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof t.senderPublicKey < "u" ? ur(t.senderPublicKey, tr) : void 0, n = typeof t.iv < "u" ? ur(t.iv, tr) : $s.randomBytes(yc), s = new cu.ChaCha20Poly1305(ur(t.symKey, tr)).seal(n, ur(t.message, fu));
  return G_({ type: e, sealed: s, iv: n, senderPublicKey: r });
}
function W_(t) {
  const e = new cu.ChaCha20Poly1305(ur(t.symKey, tr)), { sealed: r, iv: n } = zo(t.encoded), s = e.open(n, r);
  if (s === null)
    throw new Error("Failed to decrypt");
  return rr(s, fu);
}
function G_(t) {
  if (Ji(t.type) === us) {
    if (typeof t.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return rr(hc([t.type, t.senderPublicKey, t.iv, t.sealed]), gc);
  }
  return rr(hc([t.type, t.iv, t.sealed]), gc);
}
function zo(t) {
  const e = ur(t, gc), r = e.slice(Z_, Zl), n = Zl;
  if (Ji(r) === us) {
    const o = n + pu, c = o + yc, u = e.slice(n, o), d = e.slice(o, c), f = e.slice(c);
    return { type: r, sealed: f, iv: d, senderPublicKey: u };
  }
  const s = n + yc, i = e.slice(n, s), a = e.slice(s);
  return { type: r, sealed: a, iv: i };
}
function Y_(t, e) {
  const r = zo(t);
  return Hh({ type: Ji(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? rr(r.senderPublicKey, tr) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function Hh(t) {
  const e = (t == null ? void 0 : t.type) || Bh;
  if (e === us) {
    if (typeof (t == null ? void 0 : t.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: t == null ? void 0 : t.senderPublicKey, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey };
}
function ql(t) {
  return t.type === us && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
var Q_ = Object.defineProperty, Fl = Object.getOwnPropertySymbols, J_ = Object.prototype.hasOwnProperty, X_ = Object.prototype.propertyIsEnumerable, Kl = (t, e, r) => e in t ? Q_(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Bl = (t, e) => {
  for (var r in e || (e = {}))
    J_.call(e, r) && Kl(t, r, e[r]);
  if (Fl)
    for (var r of Fl(e))
      X_.call(e, r) && Kl(t, r, e[r]);
  return t;
};
const e0 = "ReactNative", gr = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, t0 = "js";
function gu() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function wa() {
  return !$h() && !!du() && navigator.product === e0;
}
function Xi() {
  return !gu() && !!du();
}
function eo() {
  return wa() ? gr.reactNative : gu() ? gr.node : Xi() ? gr.browser : gr.unknown;
}
function r0(t, e) {
  let r = di.parse(t);
  return r = Bl(Bl({}, r), e), t = di.stringify(r), t;
}
function n0() {
  return Zh() || { name: "", description: "", url: "", icons: [""] };
}
function s0() {
  if (eo() === gr.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: n } = global.Platform;
    return [r, n].join("-");
  }
  const t = __();
  if (t === null)
    return "unknown";
  const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-");
}
function i0() {
  var t;
  const e = eo();
  return e === gr.browser ? [e, ((t = Vh()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function o0(t, e, r) {
  const n = s0(), s = i0();
  return [[t, e].join("-"), [t0, r].join("-"), n, s].join("/");
}
function a0({ protocol: t, version: e, relayUrl: r, sdkVersion: n, auth: s, projectId: i, useOnCloseEvent: a }) {
  const o = r.split("?"), c = o0(t, e, n), u = { auth: s, ua: c, projectId: i, useOnCloseEvent: a || void 0 }, d = r0(o[1] || "", u);
  return o[0] + "?" + d;
}
function Hn(t, e) {
  return t.filter((r) => e.includes(r)).length === t.length;
}
function Wh(t) {
  return Object.fromEntries(t.entries());
}
function Gh(t) {
  return new Map(Object.entries(t));
}
function ys(t = ae.FIVE_MINUTES, e) {
  const r = ae.toMiliseconds(t || ae.FIVE_MINUTES);
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
function hi(t, e, r) {
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
function Yh(t, e) {
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
function c0(t) {
  return Yh("topic", t);
}
function u0(t) {
  return Yh("id", t);
}
function Qh(t) {
  const [e, r] = t.split(":"), n = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof r == "string")
    n.topic = r;
  else if (e === "id" && Number.isInteger(Number(r)))
    n.id = Number(r);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${r}`);
  return n;
}
function Ir(t, e) {
  return ae.fromMiliseconds((e || Date.now()) + ae.toMiliseconds(t));
}
function Sn(t) {
  return Date.now() >= ae.toMiliseconds(t);
}
function Ct(t, e) {
  return `${t}${e ? `:${e}` : ""}`;
}
async function l0({ id: t, topic: e, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const n = typeof r == "string" ? JSON.parse(r) : r;
    let s = n == null ? void 0 : n.href;
    if (typeof s != "string")
      return;
    s.endsWith("/") && (s = s.slice(0, -1));
    const i = `${s}/wc?requestId=${t}&sessionTopic=${e}`, a = eo();
    a === gr.browser ? i.startsWith("https://") ? window.open(i, "_blank", "noreferrer noopener") : window.open(i, "_self", "noreferrer noopener") : a === gr.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(i);
  } catch (n) {
    console.error(n);
  }
}
const d0 = "irn";
function vc(t) {
  return (t == null ? void 0 : t.relay) || { protocol: d0 };
}
function No(t) {
  const e = V_[t];
  if (typeof e > "u")
    throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
var h0 = Object.defineProperty, Hl = Object.getOwnPropertySymbols, f0 = Object.prototype.hasOwnProperty, p0 = Object.prototype.propertyIsEnumerable, Wl = (t, e, r) => e in t ? h0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, g0 = (t, e) => {
  for (var r in e || (e = {}))
    f0.call(e, r) && Wl(t, r, e[r]);
  if (Hl)
    for (var r of Hl(e))
      p0.call(e, r) && Wl(t, r, e[r]);
  return t;
};
function y0(t, e = "-") {
  const r = {}, n = "relay" + e;
  return Object.keys(t).forEach((s) => {
    if (s.startsWith(n)) {
      const i = s.replace(n, ""), a = t[s];
      r[i] = a;
    }
  }), r;
}
function m0(t) {
  const e = t.indexOf(":"), r = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, n = t.substring(0, e), s = t.substring(e + 1, r).split("@"), i = typeof r < "u" ? t.substring(r) : "", a = di.parse(i);
  return { protocol: n, topic: v0(s[0]), version: parseInt(s[1], 10), symKey: a.symKey, relay: y0(a) };
}
function v0(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function _0(t, e = "-") {
  const r = "relay", n = {};
  return Object.keys(t).forEach((s) => {
    const i = r + e + s;
    t[s] && (n[i] = t[s]);
  }), n;
}
function b0(t) {
  return `${t.protocol}:${t.topic}@${t.version}?` + di.stringify(g0({ symKey: t.symKey }, _0(t.relay)));
}
function Zs(t) {
  const e = [];
  return t.forEach((r) => {
    const [n, s] = r.split(":");
    e.push(`${n}:${s}`);
  }), e;
}
function w0(t) {
  const e = [];
  return Object.values(t).forEach((r) => {
    e.push(...Zs(r.accounts));
  }), e;
}
function E0(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    Zs(n.accounts).includes(e) && r.push(...n.methods);
  }), r;
}
function S0(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    Zs(n.accounts).includes(e) && r.push(...n.events);
  }), r;
}
function x0(t, e) {
  const r = Po(t, e);
  if (r)
    throw new Error(r.message);
  const n = {};
  for (const [s, i] of Object.entries(t))
    n[s] = { methods: i.methods, events: i.events, chains: i.accounts.map((a) => `${a.split(":")[0]}:${a.split(":")[1]}`) };
  return n;
}
const I0 = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, O0 = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function J(t, e) {
  const { message: r, code: n } = O0[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function At(t, e) {
  const { message: r, code: n } = I0[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function to(t, e) {
  return Array.isArray(t) ? typeof e < "u" && t.length ? t.every(e) : !0 : !1;
}
function ii(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function Xt(t) {
  return typeof t > "u";
}
function jt(t, e) {
  return e && Xt(t) ? !0 : typeof t == "string" && !!t.trim().length;
}
function yu(t, e) {
  return e && Xt(t) ? !0 : typeof t == "number" && !isNaN(t);
}
function T0(t, e) {
  const { requiredNamespaces: r } = e, n = Object.keys(t.namespaces), s = Object.keys(r);
  let i = !0;
  return Hn(s, n) ? (n.forEach((a) => {
    const { accounts: o, methods: c, events: u } = t.namespaces[a], d = Zs(o), f = r[a];
    (!Hn(Fh(a, f), d) || !Hn(f.methods, c) || !Hn(f.events, u)) && (i = !1);
  }), i) : !1;
}
function $o(t) {
  return jt(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function C0(t) {
  if (jt(t, !1) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const r = e[0] + ":" + e[1];
      return !!e[2] && $o(r);
    }
  }
  return !1;
}
function N0(t) {
  if (jt(t, !1))
    try {
      return typeof new URL(t) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function P0(t) {
  var e;
  return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
}
function k0(t) {
  return t == null ? void 0 : t.topic;
}
function R0(t, e) {
  let r = null;
  return jt(t == null ? void 0 : t.publicKey, !1) || (r = J("MISSING_OR_INVALID", `${e} controller public key should be a string`)), r;
}
function Gl(t) {
  let e = !0;
  return to(t) ? t.length && (e = t.every((r) => jt(r, !1))) : e = !1, e;
}
function A0(t, e, r) {
  let n = null;
  return to(e) && e.length ? e.forEach((s) => {
    n || $o(s) || (n = At("UNSUPPORTED_CHAINS", `${r}, chain ${s} should be a string and conform to "namespace:chainId" format`));
  }) : $o(t) || (n = At("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), n;
}
function j0(t, e, r) {
  let n = null;
  return Object.entries(t).forEach(([s, i]) => {
    if (n)
      return;
    const a = A0(s, Fh(s, i), `${e} ${r}`);
    a && (n = a);
  }), n;
}
function L0(t, e) {
  let r = null;
  return to(t) ? t.forEach((n) => {
    r || C0(n) || (r = At("UNSUPPORTED_ACCOUNTS", `${e}, account ${n} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = At("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function U0(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const s = L0(n == null ? void 0 : n.accounts, `${e} namespace`);
    s && (r = s);
  }), r;
}
function M0(t, e) {
  let r = null;
  return Gl(t == null ? void 0 : t.methods) ? Gl(t == null ? void 0 : t.events) || (r = At("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : r = At("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), r;
}
function Jh(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const s = M0(n, `${e}, namespace`);
    s && (r = s);
  }), r;
}
function D0(t, e, r) {
  let n = null;
  if (t && ii(t)) {
    const s = Jh(t, e);
    s && (n = s);
    const i = j0(t, e, r);
    i && (n = i);
  } else
    n = J("MISSING_OR_INVALID", `${e}, ${r} should be an object with data`);
  return n;
}
function Po(t, e) {
  let r = null;
  if (t && ii(t)) {
    const n = Jh(t, e);
    n && (r = n);
    const s = U0(t, e);
    s && (r = s);
  } else
    r = J("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return r;
}
function Xh(t) {
  return jt(t.protocol, !0);
}
function z0(t, e) {
  let r = !1;
  return e && !t ? r = !0 : t && to(t) && t.length && t.forEach((n) => {
    r = Xh(n);
  }), r;
}
function $0(t) {
  return typeof t == "number";
}
function cr(t) {
  return typeof t < "u" && typeof t !== null;
}
function V0(t) {
  return !(!t || typeof t != "object" || !t.code || !yu(t.code, !1) || !t.message || !jt(t.message, !1));
}
function Z0(t) {
  return !(Xt(t) || !jt(t.method, !1));
}
function q0(t) {
  return !(Xt(t) || Xt(t.result) && Xt(t.error) || !yu(t.id, !1) || !jt(t.jsonrpc, !1));
}
function F0(t) {
  return !(Xt(t) || !jt(t.name, !1));
}
function Yl(t, e) {
  return !(!$o(e) || !w0(t).includes(e));
}
function K0(t, e, r) {
  return jt(r, !1) ? E0(t, e).includes(r) : !1;
}
function B0(t, e, r) {
  return jt(r, !1) ? S0(t, e).includes(r) : !1;
}
function Ql(t, e, r) {
  let n = null;
  const s = H0(t), i = W0(e), a = Object.keys(s), o = Object.keys(i), c = Jl(Object.keys(t)), u = Jl(Object.keys(e)), d = c.filter((f) => !u.includes(f));
  return d.length && (n = J("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${d.toString()}
      Received: ${Object.keys(e).toString()}`)), Hn(a, o) || (n = J("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${a.toString()}
      Approved: ${o.toString()}`)), Object.keys(e).forEach((f) => {
    if (!f.includes(":") || n)
      return;
    const p = Zs(e[f].accounts);
    p.includes(f) || (n = J("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${f}
        Required: ${f}
        Approved: ${p.toString()}`));
  }), a.forEach((f) => {
    n || (Hn(s[f].methods, i[f].methods) ? Hn(s[f].events, i[f].events) || (n = J("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${f}`)) : n = J("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${f}`));
  }), n;
}
function H0(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    var n;
    r.includes(":") ? e[r] = t[r] : (n = t[r].chains) == null || n.forEach((s) => {
      e[s] = { methods: t[r].methods, events: t[r].events };
    });
  }), e;
}
function Jl(t) {
  return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function W0(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    if (r.includes(":"))
      e[r] = t[r];
    else {
      const n = Zs(t[r].accounts);
      n == null || n.forEach((s) => {
        e[s] = { accounts: t[r].accounts.filter((i) => i.includes(`${s}:`)), methods: t[r].methods, events: t[r].events };
      });
    }
  }), e;
}
function G0(t, e) {
  return yu(t, !1) && t <= e.max && t >= e.min;
}
function Xl() {
  const t = eo();
  return new Promise((e) => {
    switch (t) {
      case gr.browser:
        e(Y0());
        break;
      case gr.reactNative:
        e(Q0());
        break;
      case gr.node:
        e(J0());
        break;
      default:
        e(!0);
    }
  });
}
function Y0() {
  return Xi() && (navigator == null ? void 0 : navigator.onLine);
}
async function Q0() {
  if (wa() && typeof global < "u" && global != null && global.NetInfo) {
    const t = await (global == null ? void 0 : global.NetInfo.fetch());
    return t == null ? void 0 : t.isConnected;
  }
  return !0;
}
function J0() {
  return !0;
}
function X0(t) {
  switch (eo()) {
    case gr.browser:
      eb(t);
      break;
    case gr.reactNative:
      tb(t);
      break;
  }
}
function eb(t) {
  Xi() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function tb(t) {
  wa() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
}
const Za = {};
let vo = class {
  static get(t) {
    return Za[t];
  }
  static set(t, e) {
    Za[t] = e;
  }
  static delete(t) {
    delete Za[t];
  }
};
const rb = "PARSE_ERROR", nb = "INVALID_REQUEST", sb = "METHOD_NOT_FOUND", ib = "INVALID_PARAMS", ef = "INTERNAL_ERROR", mu = "SERVER_ERROR", ob = [-32700, -32600, -32601, -32602, -32603], oi = {
  [rb]: { code: -32700, message: "Parse error" },
  [nb]: { code: -32600, message: "Invalid Request" },
  [sb]: { code: -32601, message: "Method not found" },
  [ib]: { code: -32602, message: "Invalid params" },
  [ef]: { code: -32603, message: "Internal error" },
  [mu]: { code: -32e3, message: "Server error" }
}, tf = mu;
function ab(t) {
  return ob.includes(t);
}
function ed(t) {
  return Object.keys(oi).includes(t) ? oi[t] : oi[tf];
}
function cb(t) {
  return Object.values(oi).find((r) => r.code === t) || oi[tf];
}
function ub(t, e, r) {
  return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${e}`) : t;
}
var rf = {}, rn = {}, td;
function lb() {
  if (td)
    return rn;
  td = 1, Object.defineProperty(rn, "__esModule", { value: !0 }), rn.isBrowserCryptoAvailable = rn.getSubtleCrypto = rn.getBrowerCrypto = void 0;
  function t() {
    return (On == null ? void 0 : On.crypto) || (On == null ? void 0 : On.msCrypto) || {};
  }
  rn.getBrowerCrypto = t;
  function e() {
    const n = t();
    return n.subtle || n.webkitSubtle;
  }
  rn.getSubtleCrypto = e;
  function r() {
    return !!t() && !!e();
  }
  return rn.isBrowserCryptoAvailable = r, rn;
}
var nn = {}, rd;
function db() {
  if (rd)
    return nn;
  rd = 1, Object.defineProperty(nn, "__esModule", { value: !0 }), nn.isBrowser = nn.isNode = nn.isReactNative = void 0;
  function t() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  nn.isReactNative = t;
  function e() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  nn.isNode = e;
  function r() {
    return !t() && !e();
  }
  return nn.isBrowser = r, nn;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = en;
  e.__exportStar(lb(), t), e.__exportStar(db(), t);
})(rf);
function vu(t = 3) {
  const e = Date.now() * Math.pow(10, t), r = Math.floor(Math.random() * Math.pow(10, t));
  return e + r;
}
function nf(t = 6) {
  return BigInt(vu(t));
}
function fi(t, e, r) {
  return {
    id: r || vu(),
    jsonrpc: "2.0",
    method: t,
    params: e
  };
}
function _u(t, e) {
  return {
    id: t,
    jsonrpc: "2.0",
    result: e
  };
}
function bu(t, e, r) {
  return {
    id: t,
    jsonrpc: "2.0",
    error: hb(e, r)
  };
}
function hb(t, e) {
  return typeof t > "u" ? ed(ef) : (typeof t == "string" && (t = Object.assign(Object.assign({}, ed(mu)), { message: t })), typeof e < "u" && (t.data = e), ab(t.code) && (t = cb(t.code)), t);
}
class fb {
}
class pb extends fb {
  constructor() {
    super();
  }
}
class gb extends pb {
  constructor(e) {
    super();
  }
}
const yb = "^wss?:";
function mb(t) {
  const e = t.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length))
    return e[0];
}
function vb(t, e) {
  const r = mb(t);
  return typeof r > "u" ? !1 : new RegExp(e).test(r);
}
function nd(t) {
  return vb(t, yb);
}
function _b(t) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(t);
}
function sf(t) {
  return typeof t == "object" && "id" in t && "jsonrpc" in t && t.jsonrpc === "2.0";
}
function wu(t) {
  return sf(t) && "method" in t;
}
function Ea(t) {
  return sf(t) && (an(t) || Or(t));
}
function an(t) {
  return "result" in t;
}
function Or(t) {
  return "error" in t;
}
class bb extends gb {
  constructor(e) {
    super(e), this.events = new Mr.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners();
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
    return this.requestStrict(fi(e.method, e.params || [], e.id || nf().toString()), r);
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
        Or(i) ? s(i.error) : n(i.result);
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
    this.events.emit("payload", e), Ea(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
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
const wb = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : (() => {
  try {
    return (() => {try { return require("ws") } catch (e) { } })();
  } catch {
  }
})(), Eb = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", sd = (t) => t.split("?")[0], id = 10, Sb = wb();
class xb {
  constructor(e) {
    if (this.url = e, this.events = new Mr.EventEmitter(), this.registering = !1, !nd(e))
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
      this.socket.send(Gi(e));
    } catch (n) {
      this.onError(e.id, n);
    }
  }
  register(e = this.url) {
    if (!nd(e))
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
      const s = rf.isReactNative() ? void 0 : { rejectUnauthorized: !_b(e) }, i = new Sb(e, [], s);
      Eb() ? i.onerror = (a) => {
        const o = a;
        n(this.emitError(o.error));
      } : i.on("error", (a) => {
        n(this.emitError(a));
      }), i.onopen = () => {
        this.onOpen(i), r(i);
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
    const r = typeof e.data == "string" ? pa(e.data) : e.data;
    this.events.emit("payload", r);
  }
  onError(e, r) {
    const n = this.parseError(r), s = n.message || n.toString(), i = bu(e, s);
    this.events.emit("payload", i);
  }
  parseError(e, r = this.url) {
    return ub(e, sd(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > id && this.events.setMaxListeners(id);
  }
  emitError(e) {
    const r = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${sd(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var Vo = { exports: {} };
Vo.exports;
(function(t, e) {
  var r = 200, n = "__lodash_hash_undefined__", s = 1, i = 2, a = 9007199254740991, o = "[object Arguments]", c = "[object Array]", u = "[object AsyncFunction]", d = "[object Boolean]", f = "[object Date]", p = "[object Error]", m = "[object Function]", b = "[object GeneratorFunction]", E = "[object Map]", T = "[object Number]", U = "[object Null]", v = "[object Object]", O = "[object Promise]", w = "[object Proxy]", x = "[object RegExp]", y = "[object Set]", l = "[object String]", g = "[object Symbol]", P = "[object Undefined]", k = "[object WeakMap]", M = "[object ArrayBuffer]", G = "[object DataView]", Y = "[object Float32Array]", C = "[object Float64Array]", A = "[object Int8Array]", X = "[object Int16Array]", q = "[object Int32Array]", $ = "[object Uint8Array]", Z = "[object Uint8ClampedArray]", z = "[object Uint16Array]", F = "[object Uint32Array]", ye = /[\\^$.*+?()[\]{}|]/g, K = /^\[object .+?Constructor\]$/, de = /^(?:0|[1-9]\d*)$/, ne = {};
  ne[Y] = ne[C] = ne[A] = ne[X] = ne[q] = ne[$] = ne[Z] = ne[z] = ne[F] = !0, ne[o] = ne[c] = ne[M] = ne[d] = ne[G] = ne[f] = ne[p] = ne[m] = ne[E] = ne[T] = ne[v] = ne[x] = ne[y] = ne[l] = ne[k] = !1;
  var le = typeof On == "object" && On && On.Object === Object && On, L = typeof self == "object" && self && self.Object === Object && self, j = le || L || Function("return this")(), N = e && !e.nodeType && e, h = N && !0 && t && !t.nodeType && t, I = h && h.exports === N, W = I && le.process, ee = function() {
    try {
      return W && W.binding && W.binding("util");
    } catch {
    }
  }(), je = ee && ee.isTypedArray;
  function Le(_, R) {
    for (var V = -1, oe = _ == null ? 0 : _.length, ot = 0, Ne = []; ++V < oe; ) {
      var _t = _[V];
      R(_t, V, _) && (Ne[ot++] = _t);
    }
    return Ne;
  }
  function Oe(_, R) {
    for (var V = -1, oe = R.length, ot = _.length; ++V < oe; )
      _[ot + V] = R[V];
    return _;
  }
  function qe(_, R) {
    for (var V = -1, oe = _ == null ? 0 : _.length; ++V < oe; )
      if (R(_[V], V, _))
        return !0;
    return !1;
  }
  function at(_, R) {
    for (var V = -1, oe = Array(_); ++V < _; )
      oe[V] = R(V);
    return oe;
  }
  function tt(_) {
    return function(R) {
      return _(R);
    };
  }
  function Ve(_, R) {
    return _.has(R);
  }
  function De(_, R) {
    return _ == null ? void 0 : _[R];
  }
  function Te(_) {
    var R = -1, V = Array(_.size);
    return _.forEach(function(oe, ot) {
      V[++R] = [ot, oe];
    }), V;
  }
  function Pe(_, R) {
    return function(V) {
      return _(R(V));
    };
  }
  function Ce(_) {
    var R = -1, V = Array(_.size);
    return _.forEach(function(oe) {
      V[++R] = oe;
    }), V;
  }
  var we = Array.prototype, _e = Function.prototype, he = Object.prototype, ke = j["__core-js_shared__"], Ue = _e.toString, me = he.hasOwnProperty, ze = function() {
    var _ = /[^.]+$/.exec(ke && ke.keys && ke.keys.IE_PROTO || "");
    return _ ? "Symbol(src)_1." + _ : "";
  }(), Fe = he.toString, We = RegExp(
    "^" + Ue.call(me).replace(ye, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Ge = I ? j.Buffer : void 0, Ke = j.Symbol, hr = j.Uint8Array, mr = he.propertyIsEnumerable, $r = we.splice, Ut = Ke ? Ke.toStringTag : void 0, Vr = Object.getOwnPropertySymbols, vr = Ge ? Ge.isBuffer : void 0, yn = Pe(Object.keys, Object), ct = ls(j, "DataView"), st = ls(j, "Map"), gt = ls(j, "Promise"), lt = ls(j, "Set"), yt = ls(j, "WeakMap"), it = ls(Object, "create"), bt = Dn(ct), St = Dn(st), xt = Dn(gt), wt = Dn(lt), It = Dn(yt), Et = Ke ? Ke.prototype : void 0, mt = Et ? Et.valueOf : void 0;
  function rt(_) {
    var R = -1, V = _ == null ? 0 : _.length;
    for (this.clear(); ++R < V; ) {
      var oe = _[R];
      this.set(oe[0], oe[1]);
    }
  }
  function S() {
    this.__data__ = it ? it(null) : {}, this.size = 0;
  }
  function D(_) {
    var R = this.has(_) && delete this.__data__[_];
    return this.size -= R ? 1 : 0, R;
  }
  function Q(_) {
    var R = this.__data__;
    if (it) {
      var V = R[_];
      return V === n ? void 0 : V;
    }
    return me.call(R, _) ? R[_] : void 0;
  }
  function fe(_) {
    var R = this.__data__;
    return it ? R[_] !== void 0 : me.call(R, _);
  }
  function Be(_, R) {
    var V = this.__data__;
    return this.size += this.has(_) ? 0 : 1, V[_] = it && R === void 0 ? n : R, this;
  }
  rt.prototype.clear = S, rt.prototype.delete = D, rt.prototype.get = Q, rt.prototype.has = fe, rt.prototype.set = Be;
  function $e(_) {
    var R = -1, V = _ == null ? 0 : _.length;
    for (this.clear(); ++R < V; ) {
      var oe = _[R];
      this.set(oe[0], oe[1]);
    }
  }
  function Ze() {
    this.__data__ = [], this.size = 0;
  }
  function Me(_) {
    var R = this.__data__, V = ao(R, _);
    if (V < 0)
      return !1;
    var oe = R.length - 1;
    return V == oe ? R.pop() : $r.call(R, V, 1), --this.size, !0;
  }
  function Mt(_) {
    var R = this.__data__, V = ao(R, _);
    return V < 0 ? void 0 : R[V][1];
  }
  function dt(_) {
    return ao(this.__data__, _) > -1;
  }
  function vt(_, R) {
    var V = this.__data__, oe = ao(V, _);
    return oe < 0 ? (++this.size, V.push([_, R])) : V[oe][1] = R, this;
  }
  $e.prototype.clear = Ze, $e.prototype.delete = Me, $e.prototype.get = Mt, $e.prototype.has = dt, $e.prototype.set = vt;
  function Ot(_) {
    var R = -1, V = _ == null ? 0 : _.length;
    for (this.clear(); ++R < V; ) {
      var oe = _[R];
      this.set(oe[0], oe[1]);
    }
  }
  function mn() {
    this.size = 0, this.__data__ = {
      hash: new rt(),
      map: new (st || $e)(),
      string: new rt()
    };
  }
  function io(_) {
    var R = co(this, _).delete(_);
    return this.size -= R ? 1 : 0, R;
  }
  function Sr(_) {
    return co(this, _).get(_);
  }
  function wp(_) {
    return co(this, _).has(_);
  }
  function Ep(_, R) {
    var V = co(this, _), oe = V.size;
    return V.set(_, R), this.size += V.size == oe ? 0 : 1, this;
  }
  Ot.prototype.clear = mn, Ot.prototype.delete = io, Ot.prototype.get = Sr, Ot.prototype.has = wp, Ot.prototype.set = Ep;
  function oo(_) {
    var R = -1, V = _ == null ? 0 : _.length;
    for (this.__data__ = new Ot(); ++R < V; )
      this.add(_[R]);
  }
  function Sp(_) {
    return this.__data__.set(_, n), this;
  }
  function xp(_) {
    return this.__data__.has(_);
  }
  oo.prototype.add = oo.prototype.push = Sp, oo.prototype.has = xp;
  function vn(_) {
    var R = this.__data__ = new $e(_);
    this.size = R.size;
  }
  function Ip() {
    this.__data__ = new $e(), this.size = 0;
  }
  function Op(_) {
    var R = this.__data__, V = R.delete(_);
    return this.size = R.size, V;
  }
  function Tp(_) {
    return this.__data__.get(_);
  }
  function Cp(_) {
    return this.__data__.has(_);
  }
  function Np(_, R) {
    var V = this.__data__;
    if (V instanceof $e) {
      var oe = V.__data__;
      if (!st || oe.length < r - 1)
        return oe.push([_, R]), this.size = ++V.size, this;
      V = this.__data__ = new Ot(oe);
    }
    return V.set(_, R), this.size = V.size, this;
  }
  vn.prototype.clear = Ip, vn.prototype.delete = Op, vn.prototype.get = Tp, vn.prototype.has = Cp, vn.prototype.set = Np;
  function Pp(_, R) {
    var V = uo(_), oe = !V && Kp(_), ot = !V && !oe && ja(_), Ne = !V && !oe && !ot && Du(_), _t = V || oe || ot || Ne, Nt = _t ? at(_.length, String) : [], Dt = Nt.length;
    for (var ht in _)
      (R || me.call(_, ht)) && !(_t && // Safari 9 has enumerable `arguments.length` in strict mode.
      (ht == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      ot && (ht == "offset" || ht == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      Ne && (ht == "buffer" || ht == "byteLength" || ht == "byteOffset") || // Skip index properties.
      $p(ht, Dt))) && Nt.push(ht);
    return Nt;
  }
  function ao(_, R) {
    for (var V = _.length; V--; )
      if (ju(_[V][0], R))
        return V;
    return -1;
  }
  function kp(_, R, V) {
    var oe = R(_);
    return uo(_) ? oe : Oe(oe, V(_));
  }
  function Fs(_) {
    return _ == null ? _ === void 0 ? P : U : Ut && Ut in Object(_) ? Dp(_) : Fp(_);
  }
  function Pu(_) {
    return Ks(_) && Fs(_) == o;
  }
  function ku(_, R, V, oe, ot) {
    return _ === R ? !0 : _ == null || R == null || !Ks(_) && !Ks(R) ? _ !== _ && R !== R : Rp(_, R, V, oe, ku, ot);
  }
  function Rp(_, R, V, oe, ot, Ne) {
    var _t = uo(_), Nt = uo(R), Dt = _t ? c : _n(_), ht = Nt ? c : _n(R);
    Dt = Dt == o ? v : Dt, ht = ht == o ? v : ht;
    var fr = Dt == v, xr = ht == v, Vt = Dt == ht;
    if (Vt && ja(_)) {
      if (!ja(R))
        return !1;
      _t = !0, fr = !1;
    }
    if (Vt && !fr)
      return Ne || (Ne = new vn()), _t || Du(_) ? Ru(_, R, V, oe, ot, Ne) : Up(_, R, Dt, V, oe, ot, Ne);
    if (!(V & s)) {
      var _r = fr && me.call(_, "__wrapped__"), br = xr && me.call(R, "__wrapped__");
      if (_r || br) {
        var bn = _r ? _.value() : _, tn = br ? R.value() : R;
        return Ne || (Ne = new vn()), ot(bn, tn, V, oe, Ne);
      }
    }
    return Vt ? (Ne || (Ne = new vn()), Mp(_, R, V, oe, ot, Ne)) : !1;
  }
  function Ap(_) {
    if (!Mu(_) || Zp(_))
      return !1;
    var R = Lu(_) ? We : K;
    return R.test(Dn(_));
  }
  function jp(_) {
    return Ks(_) && Uu(_.length) && !!ne[Fs(_)];
  }
  function Lp(_) {
    if (!qp(_))
      return yn(_);
    var R = [];
    for (var V in Object(_))
      me.call(_, V) && V != "constructor" && R.push(V);
    return R;
  }
  function Ru(_, R, V, oe, ot, Ne) {
    var _t = V & s, Nt = _.length, Dt = R.length;
    if (Nt != Dt && !(_t && Dt > Nt))
      return !1;
    var ht = Ne.get(_);
    if (ht && Ne.get(R))
      return ht == R;
    var fr = -1, xr = !0, Vt = V & i ? new oo() : void 0;
    for (Ne.set(_, R), Ne.set(R, _); ++fr < Nt; ) {
      var _r = _[fr], br = R[fr];
      if (oe)
        var bn = _t ? oe(br, _r, fr, R, _, Ne) : oe(_r, br, fr, _, R, Ne);
      if (bn !== void 0) {
        if (bn)
          continue;
        xr = !1;
        break;
      }
      if (Vt) {
        if (!qe(R, function(tn, zn) {
          if (!Ve(Vt, zn) && (_r === tn || ot(_r, tn, V, oe, Ne)))
            return Vt.push(zn);
        })) {
          xr = !1;
          break;
        }
      } else if (!(_r === br || ot(_r, br, V, oe, Ne))) {
        xr = !1;
        break;
      }
    }
    return Ne.delete(_), Ne.delete(R), xr;
  }
  function Up(_, R, V, oe, ot, Ne, _t) {
    switch (V) {
      case G:
        if (_.byteLength != R.byteLength || _.byteOffset != R.byteOffset)
          return !1;
        _ = _.buffer, R = R.buffer;
      case M:
        return !(_.byteLength != R.byteLength || !Ne(new hr(_), new hr(R)));
      case d:
      case f:
      case T:
        return ju(+_, +R);
      case p:
        return _.name == R.name && _.message == R.message;
      case x:
      case l:
        return _ == R + "";
      case E:
        var Nt = Te;
      case y:
        var Dt = oe & s;
        if (Nt || (Nt = Ce), _.size != R.size && !Dt)
          return !1;
        var ht = _t.get(_);
        if (ht)
          return ht == R;
        oe |= i, _t.set(_, R);
        var fr = Ru(Nt(_), Nt(R), oe, ot, Ne, _t);
        return _t.delete(_), fr;
      case g:
        if (mt)
          return mt.call(_) == mt.call(R);
    }
    return !1;
  }
  function Mp(_, R, V, oe, ot, Ne) {
    var _t = V & s, Nt = Au(_), Dt = Nt.length, ht = Au(R), fr = ht.length;
    if (Dt != fr && !_t)
      return !1;
    for (var xr = Dt; xr--; ) {
      var Vt = Nt[xr];
      if (!(_t ? Vt in R : me.call(R, Vt)))
        return !1;
    }
    var _r = Ne.get(_);
    if (_r && Ne.get(R))
      return _r == R;
    var br = !0;
    Ne.set(_, R), Ne.set(R, _);
    for (var bn = _t; ++xr < Dt; ) {
      Vt = Nt[xr];
      var tn = _[Vt], zn = R[Vt];
      if (oe)
        var zu = _t ? oe(zn, tn, Vt, R, _, Ne) : oe(tn, zn, Vt, _, R, Ne);
      if (!(zu === void 0 ? tn === zn || ot(tn, zn, V, oe, Ne) : zu)) {
        br = !1;
        break;
      }
      bn || (bn = Vt == "constructor");
    }
    if (br && !bn) {
      var lo = _.constructor, ho = R.constructor;
      lo != ho && "constructor" in _ && "constructor" in R && !(typeof lo == "function" && lo instanceof lo && typeof ho == "function" && ho instanceof ho) && (br = !1);
    }
    return Ne.delete(_), Ne.delete(R), br;
  }
  function Au(_) {
    return kp(_, Wp, zp);
  }
  function co(_, R) {
    var V = _.__data__;
    return Vp(R) ? V[typeof R == "string" ? "string" : "hash"] : V.map;
  }
  function ls(_, R) {
    var V = De(_, R);
    return Ap(V) ? V : void 0;
  }
  function Dp(_) {
    var R = me.call(_, Ut), V = _[Ut];
    try {
      _[Ut] = void 0;
      var oe = !0;
    } catch {
    }
    var ot = Fe.call(_);
    return oe && (R ? _[Ut] = V : delete _[Ut]), ot;
  }
  var zp = Vr ? function(_) {
    return _ == null ? [] : (_ = Object(_), Le(Vr(_), function(R) {
      return mr.call(_, R);
    }));
  } : Gp, _n = Fs;
  (ct && _n(new ct(new ArrayBuffer(1))) != G || st && _n(new st()) != E || gt && _n(gt.resolve()) != O || lt && _n(new lt()) != y || yt && _n(new yt()) != k) && (_n = function(_) {
    var R = Fs(_), V = R == v ? _.constructor : void 0, oe = V ? Dn(V) : "";
    if (oe)
      switch (oe) {
        case bt:
          return G;
        case St:
          return E;
        case xt:
          return O;
        case wt:
          return y;
        case It:
          return k;
      }
    return R;
  });
  function $p(_, R) {
    return R = R ?? a, !!R && (typeof _ == "number" || de.test(_)) && _ > -1 && _ % 1 == 0 && _ < R;
  }
  function Vp(_) {
    var R = typeof _;
    return R == "string" || R == "number" || R == "symbol" || R == "boolean" ? _ !== "__proto__" : _ === null;
  }
  function Zp(_) {
    return !!ze && ze in _;
  }
  function qp(_) {
    var R = _ && _.constructor, V = typeof R == "function" && R.prototype || he;
    return _ === V;
  }
  function Fp(_) {
    return Fe.call(_);
  }
  function Dn(_) {
    if (_ != null) {
      try {
        return Ue.call(_);
      } catch {
      }
      try {
        return _ + "";
      } catch {
      }
    }
    return "";
  }
  function ju(_, R) {
    return _ === R || _ !== _ && R !== R;
  }
  var Kp = Pu(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Pu : function(_) {
    return Ks(_) && me.call(_, "callee") && !mr.call(_, "callee");
  }, uo = Array.isArray;
  function Bp(_) {
    return _ != null && Uu(_.length) && !Lu(_);
  }
  var ja = vr || Yp;
  function Hp(_, R) {
    return ku(_, R);
  }
  function Lu(_) {
    if (!Mu(_))
      return !1;
    var R = Fs(_);
    return R == m || R == b || R == u || R == w;
  }
  function Uu(_) {
    return typeof _ == "number" && _ > -1 && _ % 1 == 0 && _ <= a;
  }
  function Mu(_) {
    var R = typeof _;
    return _ != null && (R == "object" || R == "function");
  }
  function Ks(_) {
    return _ != null && typeof _ == "object";
  }
  var Du = je ? tt(je) : jp;
  function Wp(_) {
    return Bp(_) ? Pp(_) : Lp(_);
  }
  function Gp() {
    return [];
  }
  function Yp() {
    return !1;
  }
  t.exports = Hp;
})(Vo, Vo.exports);
var Ib = Vo.exports;
const Ob = /* @__PURE__ */ ru(Ib);
function Tb(t, e) {
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
  var o = t.length, c = t.charAt(0), u = Math.log(o) / Math.log(256), d = Math.log(256) / Math.log(o);
  function f(b) {
    if (b instanceof Uint8Array || (ArrayBuffer.isView(b) ? b = new Uint8Array(b.buffer, b.byteOffset, b.byteLength) : Array.isArray(b) && (b = Uint8Array.from(b))), !(b instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (b.length === 0)
      return "";
    for (var E = 0, T = 0, U = 0, v = b.length; U !== v && b[U] === 0; )
      U++, E++;
    for (var O = (v - U) * d + 1 >>> 0, w = new Uint8Array(O); U !== v; ) {
      for (var x = b[U], y = 0, l = O - 1; (x !== 0 || y < T) && l !== -1; l--, y++)
        x += 256 * w[l] >>> 0, w[l] = x % o >>> 0, x = x / o >>> 0;
      if (x !== 0)
        throw new Error("Non-zero carry");
      T = y, U++;
    }
    for (var g = O - T; g !== O && w[g] === 0; )
      g++;
    for (var P = c.repeat(E); g < O; ++g)
      P += t.charAt(w[g]);
    return P;
  }
  function p(b) {
    if (typeof b != "string")
      throw new TypeError("Expected String");
    if (b.length === 0)
      return new Uint8Array();
    var E = 0;
    if (b[E] !== " ") {
      for (var T = 0, U = 0; b[E] === c; )
        T++, E++;
      for (var v = (b.length - E) * u + 1 >>> 0, O = new Uint8Array(v); b[E]; ) {
        var w = r[b.charCodeAt(E)];
        if (w === 255)
          return;
        for (var x = 0, y = v - 1; (w !== 0 || x < U) && y !== -1; y--, x++)
          w += o * O[y] >>> 0, O[y] = w % 256 >>> 0, w = w / 256 >>> 0;
        if (w !== 0)
          throw new Error("Non-zero carry");
        U = x, E++;
      }
      if (b[E] !== " ") {
        for (var l = v - U; l !== v && O[l] === 0; )
          l++;
        for (var g = new Uint8Array(T + (v - l)), P = T; l !== v; )
          g[P++] = O[l++];
        return g;
      }
    }
  }
  function m(b) {
    var E = p(b);
    if (E)
      return E;
    throw new Error(`Non-${e} character`);
  }
  return { encode: f, decodeUnsafe: p, decode: m };
}
var Cb = Tb, Nb = Cb;
const of = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Pb = (t) => new TextEncoder().encode(t), kb = (t) => new TextDecoder().decode(t);
class Rb {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Ab {
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
    return af(this, e);
  }
}
class jb {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return af(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const af = (t, e) => new jb({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
class Lb {
  constructor(e, r, n, s) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = s, this.encoder = new Rb(e, r, n), this.decoder = new Ab(e, r, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Sa = ({ name: t, prefix: e, encode: r, decode: n }) => new Lb(t, e, r, n), ro = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: s } = Nb(r, e);
  return Sa({ prefix: t, name: e, encode: n, decode: (i) => of(s(i)) });
}, Ub = (t, e, r, n) => {
  const s = {};
  for (let d = 0; d < e.length; ++d)
    s[e[d]] = d;
  let i = t.length;
  for (; t[i - 1] === "="; )
    --i;
  const a = new Uint8Array(i * r / 8 | 0);
  let o = 0, c = 0, u = 0;
  for (let d = 0; d < i; ++d) {
    const f = s[t[d]];
    if (f === void 0)
      throw new SyntaxError(`Non-${n} character`);
    c = c << r | f, o += r, o >= 8 && (o -= 8, a[u++] = 255 & c >> o);
  }
  if (o >= r || 255 & c << 8 - o)
    throw new SyntaxError("Unexpected end of data");
  return a;
}, Mb = (t, e, r) => {
  const n = e[e.length - 1] === "=", s = (1 << r) - 1;
  let i = "", a = 0, o = 0;
  for (let c = 0; c < t.length; ++c)
    for (o = o << 8 | t[c], a += 8; a > r; )
      a -= r, i += e[s & o >> a];
  if (a && (i += e[s & o << r - a]), n)
    for (; i.length * r & 7; )
      i += "=";
  return i;
}, $t = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => Sa({ prefix: e, name: t, encode(s) {
  return Mb(s, n, r);
}, decode(s) {
  return Ub(s, n, r, t);
} }), Db = Sa({ prefix: "\0", name: "identity", encode: (t) => kb(t), decode: (t) => Pb(t) });
var zb = Object.freeze({ __proto__: null, identity: Db });
const $b = $t({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var Vb = Object.freeze({ __proto__: null, base2: $b });
const Zb = $t({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var qb = Object.freeze({ __proto__: null, base8: Zb });
const Fb = ro({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Kb = Object.freeze({ __proto__: null, base10: Fb });
const Bb = $t({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), Hb = $t({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Wb = Object.freeze({ __proto__: null, base16: Bb, base16upper: Hb });
const Gb = $t({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), Yb = $t({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), Qb = $t({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), Jb = $t({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), Xb = $t({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), ew = $t({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), tw = $t({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), rw = $t({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), nw = $t({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var sw = Object.freeze({ __proto__: null, base32: Gb, base32upper: Yb, base32pad: Qb, base32padupper: Jb, base32hex: Xb, base32hexupper: ew, base32hexpad: tw, base32hexpadupper: rw, base32z: nw });
const iw = ro({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), ow = ro({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var aw = Object.freeze({ __proto__: null, base36: iw, base36upper: ow });
const cw = ro({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), uw = ro({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var lw = Object.freeze({ __proto__: null, base58btc: cw, base58flickr: uw });
const dw = $t({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), hw = $t({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), fw = $t({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), pw = $t({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var gw = Object.freeze({ __proto__: null, base64: dw, base64pad: hw, base64url: fw, base64urlpad: pw });
const cf = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), yw = cf.reduce((t, e, r) => (t[r] = e, t), []), mw = cf.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function vw(t) {
  return t.reduce((e, r) => (e += yw[r], e), "");
}
function _w(t) {
  const e = [];
  for (const r of t) {
    const n = mw[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const bw = Sa({ prefix: "🚀", name: "base256emoji", encode: vw, decode: _w });
var ww = Object.freeze({ __proto__: null, base256emoji: bw }), Ew = uf, od = 128, Sw = 127, xw = ~Sw, Iw = Math.pow(2, 31);
function uf(t, e, r) {
  e = e || [], r = r || 0;
  for (var n = r; t >= Iw; )
    e[r++] = t & 255 | od, t /= 128;
  for (; t & xw; )
    e[r++] = t & 255 | od, t >>>= 7;
  return e[r] = t | 0, uf.bytes = r - n + 1, e;
}
var Ow = _c, Tw = 128, ad = 127;
function _c(t, n) {
  var r = 0, n = n || 0, s = 0, i = n, a, o = t.length;
  do {
    if (i >= o)
      throw _c.bytes = 0, new RangeError("Could not decode varint");
    a = t[i++], r += s < 28 ? (a & ad) << s : (a & ad) * Math.pow(2, s), s += 7;
  } while (a >= Tw);
  return _c.bytes = i - n, r;
}
var Cw = Math.pow(2, 7), Nw = Math.pow(2, 14), Pw = Math.pow(2, 21), kw = Math.pow(2, 28), Rw = Math.pow(2, 35), Aw = Math.pow(2, 42), jw = Math.pow(2, 49), Lw = Math.pow(2, 56), Uw = Math.pow(2, 63), Mw = function(t) {
  return t < Cw ? 1 : t < Nw ? 2 : t < Pw ? 3 : t < kw ? 4 : t < Rw ? 5 : t < Aw ? 6 : t < jw ? 7 : t < Lw ? 8 : t < Uw ? 9 : 10;
}, Dw = { encode: Ew, decode: Ow, encodingLength: Mw }, lf = Dw;
const cd = (t, e, r = 0) => (lf.encode(t, e, r), e), ud = (t) => lf.encodingLength(t), bc = (t, e) => {
  const r = e.byteLength, n = ud(t), s = n + ud(r), i = new Uint8Array(s + r);
  return cd(t, i, 0), cd(r, i, n), i.set(e, s), new zw(t, r, e, i);
};
class zw {
  constructor(e, r, n, s) {
    this.code = e, this.size = r, this.digest = n, this.bytes = s;
  }
}
const df = ({ name: t, code: e, encode: r }) => new $w(t, e, r);
class $w {
  constructor(e, r, n) {
    this.name = e, this.code = r, this.encode = n;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const r = this.encode(e);
      return r instanceof Uint8Array ? bc(this.code, r) : r.then((n) => bc(this.code, n));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const hf = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), Vw = df({ name: "sha2-256", code: 18, encode: hf("SHA-256") }), Zw = df({ name: "sha2-512", code: 19, encode: hf("SHA-512") });
var qw = Object.freeze({ __proto__: null, sha256: Vw, sha512: Zw });
const ff = 0, Fw = "identity", pf = of, Kw = (t) => bc(ff, pf(t)), Bw = { code: ff, name: Fw, encode: pf, digest: Kw };
var Hw = Object.freeze({ __proto__: null, identity: Bw });
new TextEncoder(), new TextDecoder();
const ld = { ...zb, ...Vb, ...qb, ...Kb, ...Wb, ...sw, ...aw, ...lw, ...gw, ...ww };
({ ...qw, ...Hw });
function gf(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function Ww(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? gf(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function yf(t, e, r, n) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: r }, decoder: { decode: n } };
}
const dd = yf("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), qa = yf("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = Ww(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), Gw = { utf8: dd, "utf-8": dd, hex: ld.base16, latin1: qa, ascii: qa, binary: qa, ...ld };
function Yw(t, e = "utf8") {
  const r = Gw[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? gf(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
const mf = "wc", Qw = 2, Eu = "core", Cn = `${mf}@2:${Eu}:`, Jw = { name: Eu, logger: "error" }, Xw = { database: ":memory:" }, e1 = "crypto", hd = "client_ed25519_seed", t1 = ae.ONE_DAY, r1 = "keychain", n1 = "0.3", s1 = "messages", i1 = "0.3", o1 = ae.SIX_HOURS, a1 = "publisher", vf = "irn", c1 = "error", _f = "wss://relay.walletconnect.com", fd = "wss://relay.walletconnect.org", u1 = "relayer", Ht = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, l1 = "_subscription", sn = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, d1 = ae.ONE_SECOND, h1 = "2.10.0", f1 = 1e4, p1 = "0.3", g1 = "WALLETCONNECT_CLIENT_ID", Hr = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, y1 = "subscription", m1 = "0.3", v1 = ae.FIVE_SECONDS * 1e3, _1 = "pairing", b1 = "0.3", Qs = { wc_pairingDelete: { req: { ttl: ae.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: ae.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: ae.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: ae.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: ae.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: ae.ONE_DAY, prompt: !1, tag: 0 } } }, Kr = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, w1 = "history", E1 = "0.3", S1 = "expirer", wr = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, x1 = "0.3", Fa = "verify-api", ko = "https://verify.walletconnect.com", pd = "https://verify.walletconnect.org";
class I1 {
  constructor(e, r) {
    this.core = e, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = r1, this.version = n1, this.initialized = !1, this.storagePrefix = Cn, this.init = async () => {
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
        const { message: i } = J("NO_MATCHING_KEY", `${this.name}: ${n}`);
        throw new Error(i);
      }
      return s;
    }, this.del = async (n) => {
      this.isInitialized(), this.keychain.delete(n), await this.persist();
    }, this.core = e, this.logger = He.generateChildLogger(r, this.name);
  }
  get context() {
    return He.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, Wh(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Gh(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = J("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class O1 {
  constructor(e, r, n) {
    this.core = e, this.logger = r, this.name = e1, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (s) => (this.isInitialized(), this.keychain.has(s)), this.getClientId = async () => {
      this.isInitialized();
      const s = await this.getClientSeed(), i = Rl(s);
      return jh(i.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const s = q_();
      return this.setPrivateKey(s.publicKey, s.privateKey);
    }, this.signJWT = async (s) => {
      this.isInitialized();
      const i = await this.getClientSeed(), a = Rl(i), o = mc();
      return await Qv(o, s, t1, a);
    }, this.generateSharedKey = (s, i, a) => {
      this.isInitialized();
      const o = this.getPrivateKey(s), c = F_(o, i);
      return this.setSymKey(c, a);
    }, this.setSymKey = async (s, i) => {
      this.isInitialized();
      const a = i || K_(s);
      return await this.keychain.set(a, s), a;
    }, this.deleteKeyPair = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.deleteSymKey = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.encode = async (s, i, a) => {
      this.isInitialized();
      const o = Hh(a), c = Gi(i);
      if (ql(o)) {
        const p = o.senderPublicKey, m = o.receiverPublicKey;
        s = await this.generateSharedKey(p, m);
      }
      const u = this.getSymKey(s), { type: d, senderPublicKey: f } = o;
      return H_({ type: d, symKey: u, message: c, senderPublicKey: f });
    }, this.decode = async (s, i, a) => {
      this.isInitialized();
      const o = Y_(i, a);
      if (ql(o)) {
        const c = o.receiverPublicKey, u = o.senderPublicKey;
        s = await this.generateSharedKey(c, u);
      }
      try {
        const c = this.getSymKey(s), u = W_({ symKey: c, encoded: i });
        return pa(u);
      } catch (c) {
        this.logger.error(`Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`), this.logger.error(c);
      }
    }, this.getPayloadType = (s) => {
      const i = zo(s);
      return Ji(i.type);
    }, this.getPayloadSenderPublicKey = (s) => {
      const i = zo(s);
      return i.senderPublicKey ? rr(i.senderPublicKey, tr) : void 0;
    }, this.core = e, this.logger = He.generateChildLogger(r, this.name), this.keychain = n || new I1(this.core, this.logger);
  }
  get context() {
    return He.getLoggerContext(this.logger);
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
      e = this.keychain.get(hd);
    } catch {
      e = mc(), await this.keychain.set(hd, e);
    }
    return Yw(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = J("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class T1 extends rm {
  constructor(e, r) {
    super(e, r), this.logger = e, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = s1, this.version = i1, this.initialized = !1, this.storagePrefix = Cn, this.init = async () => {
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
      const i = Ss(s);
      let a = this.messages.get(n);
      return typeof a > "u" && (a = {}), typeof a[i] < "u" || (a[i] = s, this.messages.set(n, a), await this.persist()), i;
    }, this.get = (n) => {
      this.isInitialized();
      let s = this.messages.get(n);
      return typeof s > "u" && (s = {}), s;
    }, this.has = (n, s) => {
      this.isInitialized();
      const i = this.get(n), a = Ss(s);
      return typeof i[a] < "u";
    }, this.del = async (n) => {
      this.isInitialized(), this.messages.delete(n), await this.persist();
    }, this.logger = He.generateChildLogger(e, this.name), this.core = r;
  }
  get context() {
    return He.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, Wh(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Gh(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = J("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class C1 extends nm {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.events = new Mr.EventEmitter(), this.name = a1, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = ae.toMiliseconds(ae.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (n, s, i) => {
      var a;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: s, opts: i } });
      try {
        const o = (i == null ? void 0 : i.ttl) || o1, c = vc(i), u = (i == null ? void 0 : i.prompt) || !1, d = (i == null ? void 0 : i.tag) || 0, f = (i == null ? void 0 : i.id) || nf().toString(), p = { topic: n, message: s, opts: { ttl: o, relay: c, prompt: u, tag: d, id: f } }, m = setTimeout(() => this.queue.set(f, p), this.publishTimeout);
        try {
          await await hi(this.rpcPublish(n, s, o, c, u, d, f), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(f), this.relayer.events.emit(Ht.publish, p);
        } catch (b) {
          if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, (a = i == null ? void 0 : i.internal) != null && a.throwOnFailedPublish)
            throw this.removeRequestFromQueue(f), b;
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
    }, this.relayer = e, this.logger = He.generateChildLogger(r, this.name), this.registerEventListeners();
  }
  get context() {
    return He.getLoggerContext(this.logger);
  }
  rpcPublish(e, r, n, s, i, a, o) {
    var c, u, d, f;
    const p = { method: No(s.protocol).publish, params: { topic: e, message: r, ttl: n, prompt: i, tag: a }, id: o };
    return Xt((c = p.params) == null ? void 0 : c.prompt) && ((u = p.params) == null || delete u.prompt), Xt((d = p.params) == null ? void 0 : d.tag) && ((f = p.params) == null || delete f.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: p }), this.relayer.request(p);
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
    this.relayer.core.heartbeat.on(zs.HEARTBEAT_EVENTS.pulse, () => {
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
class N1 {
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
var P1 = Object.defineProperty, k1 = Object.defineProperties, R1 = Object.getOwnPropertyDescriptors, gd = Object.getOwnPropertySymbols, A1 = Object.prototype.hasOwnProperty, j1 = Object.prototype.propertyIsEnumerable, yd = (t, e, r) => e in t ? P1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Js = (t, e) => {
  for (var r in e || (e = {}))
    A1.call(e, r) && yd(t, r, e[r]);
  if (gd)
    for (var r of gd(e))
      j1.call(e, r) && yd(t, r, e[r]);
  return t;
}, Ka = (t, e) => k1(t, R1(e));
class L1 extends om {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new N1(), this.events = new Mr.EventEmitter(), this.name = y1, this.version = m1, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Cn, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (n, s) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: s } });
      try {
        const i = vc(s), a = { topic: n, relay: i };
        this.pending.set(n, a);
        const o = await this.rpcSubscribe(n, i);
        return this.onSubscribe(o, a), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: s } }), o;
      } catch (i) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(i), i;
      }
    }, this.unsubscribe = async (n, s) => {
      await this.restartToComplete(), this.isInitialized(), typeof (s == null ? void 0 : s.id) < "u" ? await this.unsubscribeById(n, s.id, s) : await this.unsubscribeByTopic(n, s);
    }, this.isSubscribed = async (n) => this.topics.includes(n) ? !0 : await new Promise((s, i) => {
      const a = new ae.Watch();
      a.start(this.pendingSubscriptionWatchLabel);
      const o = setInterval(() => {
        !this.pending.has(n) && this.topics.includes(n) && (clearInterval(o), a.stop(this.pendingSubscriptionWatchLabel), s(!0)), a.elapsed(this.pendingSubscriptionWatchLabel) >= v1 && (clearInterval(o), a.stop(this.pendingSubscriptionWatchLabel), i(new Error("Subscription resolution timeout")));
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
    }, this.relayer = e, this.logger = He.generateChildLogger(r, this.name), this.clientId = "";
  }
  get context() {
    return He.getLoggerContext(this.logger);
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
    await Promise.all(n.map(async (s) => await this.unsubscribeById(e, s, r)));
  }
  async unsubscribeById(e, r, n) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: n } });
    try {
      const s = vc(n);
      await this.rpcUnsubscribe(e, r, s);
      const i = At("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, r, i), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: n } });
    } catch (s) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s), s;
    }
  }
  async rpcSubscribe(e, r) {
    const n = { method: No(r.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      await await hi(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(Ht.connection_stalled);
    }
    return Ss(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const r = e[0].relay, n = { method: No(r.protocol).batchSubscribe, params: { topics: e.map((s) => s.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      return await await hi(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(Ht.connection_stalled);
    }
  }
  rpcUnsubscribe(e, r, n) {
    const s = { method: No(n.protocol).unsubscribe, params: { topic: e, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s }), this.relayer.request(s);
  }
  onSubscribe(e, r) {
    this.setSubscription(e, Ka(Js({}, r), { id: e })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((r) => {
      this.setSubscription(r.id, Js({}, r)), this.pending.delete(r.topic);
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
    this.subscriptions.set(e, Js({}, r)), this.topicMap.set(r.topic, e), this.events.emit(Hr.created, r);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const r = this.subscriptions.get(e);
    if (!r) {
      const { message: n } = J("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(n);
    }
    return r;
  }
  deleteSubscription(e, r) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: r });
    const n = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(n.topic, e), this.events.emit(Hr.deleted, Ka(Js({}, n), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(Hr.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < e; r++) {
        const n = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(n);
      }
    }
    this.events.emit(Hr.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length)
        return;
      if (this.subscriptions.size) {
        const { message: r } = J("RESTORE_WILL_OVERRIDE", this.name);
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
    to(r) && this.onBatchSubscribe(r.map((n, s) => Ka(Js({}, e[s]), { id: n })));
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
    this.relayer.core.heartbeat.on(zs.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(Ht.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(Ht.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(Hr.created, async (e) => {
      const r = Hr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    }), this.events.on(Hr.deleted, async (e) => {
      const r = Hr.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = J("NOT_INITIALIZED", this.name);
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
var U1 = Object.defineProperty, md = Object.getOwnPropertySymbols, M1 = Object.prototype.hasOwnProperty, D1 = Object.prototype.propertyIsEnumerable, vd = (t, e, r) => e in t ? U1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, z1 = (t, e) => {
  for (var r in e || (e = {}))
    M1.call(e, r) && vd(t, r, e[r]);
  if (md)
    for (var r of md(e))
      D1.call(e, r) && vd(t, r, e[r]);
  return t;
};
class $1 extends sm {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new Mr.EventEmitter(), this.name = u1, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async (r) => {
      this.logger.debug("Publishing Request Payload");
      try {
        return await this.toEstablishConnection(), await this.provider.request(r);
      } catch (n) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(n), n;
      }
    }, this.onPayloadHandler = (r) => {
      this.onProviderPayload(r);
    }, this.onConnectHandler = () => {
      this.events.emit(Ht.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (r) => {
      this.logger.error(r), this.events.emit(Ht.error, r);
    }, this.registerProviderListeners = () => {
      this.provider.on(sn.payload, this.onPayloadHandler), this.provider.on(sn.connect, this.onConnectHandler), this.provider.on(sn.disconnect, this.onDisconnectHandler), this.provider.on(sn.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? He.generateChildLogger(e.logger, this.name) : He.pino(He.getDefaultLoggerOptions({ level: e.logger || c1 })), this.messages = new T1(this.logger, e.core), this.subscriber = new L1(this, this.logger), this.publisher = new C1(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || _f, this.projectId = e.projectId, this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${fd}...`), await this.restartTransport(fd);
    }
    this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, f1);
  }
  get context() {
    return He.getLoggerContext(this.logger);
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
    return s || (await Promise.all([new Promise((i) => {
      this.subscriber.once(Hr.created, (a) => {
        a.topic === e && i();
      });
    }), new Promise(async (i) => {
      s = await this.subscriber.subscribe(e, r), i();
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
    this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await hi(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
  }
  async transportOpen(e) {
    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
      e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
      try {
        await Promise.all([new Promise((r) => {
          if (!this.initialized)
            return r();
          this.subscriber.once(Hr.resubscribed, () => {
            r();
          });
        }), new Promise(async (r, n) => {
          try {
            await hi(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
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
        this.provider.events.emit(sn.disconnect);
      } finally {
        this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1;
      }
    }
  }
  async restartTransport(e) {
    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await Xl())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((r) => e.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new bb(new xb(a0({ sdkVersion: h1, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0 }))), this.registerProviderListeners();
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
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), wu(e)) {
      if (!e.method.endsWith(l1))
        return;
      const r = e.params, { topic: n, message: s, publishedAt: i } = r.data, a = { topic: n, message: s, publishedAt: i };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(z1({ type: "event", event: r.id }, a)), this.events.emit(r.id, a), await this.acknowledgePayload(e), await this.onMessageEvent(a);
    } else
      Ea(e) && this.events.emit(Ht.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(Ht.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const r = _u(e.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(sn.payload, this.onPayloadHandler), this.provider.off(sn.connect, this.onConnectHandler), this.provider.off(sn.disconnect, this.onDisconnectHandler), this.provider.off(sn.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(Ht.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let e = await Xl();
    X0(async (r) => {
      this.initialized && e !== r && (e = r, r ? await this.restartTransport().catch((n) => this.logger.error(n)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((n) => this.logger.error(n))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(Ht.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((e) => this.logger.error(e));
    }, ae.toMiliseconds(d1)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = J("NOT_INITIALIZED", this.name);
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
var V1 = Object.defineProperty, _d = Object.getOwnPropertySymbols, Z1 = Object.prototype.hasOwnProperty, q1 = Object.prototype.propertyIsEnumerable, bd = (t, e, r) => e in t ? V1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, wd = (t, e) => {
  for (var r in e || (e = {}))
    Z1.call(e, r) && bd(t, r, e[r]);
  if (_d)
    for (var r of _d(e))
      q1.call(e, r) && bd(t, r, e[r]);
  return t;
};
class xa extends im {
  constructor(e, r, n, s = Cn, i = void 0) {
    super(e, r, n, s), this.core = e, this.logger = r, this.name = n, this.map = /* @__PURE__ */ new Map(), this.version = p1, this.cached = [], this.initialized = !1, this.storagePrefix = Cn, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((a) => {
        this.getKey && a !== null && !Xt(a) ? this.map.set(this.getKey(a), a) : P0(a) ? this.map.set(a.id, a) : k0(a) && this.map.set(a.topic, a);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (a, o) => {
      this.isInitialized(), this.map.has(a) ? await this.update(a, o) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: a, value: o }), this.map.set(a, o), await this.persist());
    }, this.get = (a) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: a }), this.getData(a)), this.getAll = (a) => (this.isInitialized(), a ? this.values.filter((o) => Object.keys(a).every((c) => Ob(o[c], a[c]))) : this.values), this.update = async (a, o) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: a, update: o });
      const c = wd(wd({}, this.getData(a)), o);
      this.map.set(a, c), await this.persist();
    }, this.delete = async (a, o) => {
      this.isInitialized(), this.map.has(a) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: a, reason: o }), this.map.delete(a), await this.persist());
    }, this.logger = He.generateChildLogger(r, this.name), this.storagePrefix = s, this.getKey = i;
  }
  get context() {
    return He.getLoggerContext(this.logger);
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
      const { message: n } = J("NO_MATCHING_KEY", `${this.name}: ${e}`);
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
        const { message: r } = J("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = J("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class F1 {
  constructor(e, r) {
    this.core = e, this.logger = r, this.name = _1, this.version = b1, this.events = new iu(), this.initialized = !1, this.storagePrefix = Cn, this.ignoredPayloadTypes = [us], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: n }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...n])];
    }, this.create = async () => {
      this.isInitialized();
      const n = mc(), s = await this.core.crypto.setSymKey(n), i = Ir(ae.FIVE_MINUTES), a = { protocol: vf }, o = { topic: s, expiry: i, relay: a, active: !1 }, c = b0({ protocol: this.core.protocol, version: this.core.version, topic: s, symKey: n, relay: a });
      return await this.pairings.set(s, o), await this.core.relayer.subscribe(s), this.core.expirer.set(s, i), { topic: s, uri: c };
    }, this.pair = async (n) => {
      this.isInitialized(), this.isValidPair(n);
      const { topic: s, symKey: i, relay: a } = m0(n.uri);
      if (this.pairings.keys.includes(s))
        throw new Error(`Pairing already exists: ${s}`);
      if (this.core.crypto.hasKeys(s))
        throw new Error(`Keychain already exists: ${s}`);
      const o = Ir(ae.FIVE_MINUTES), c = { topic: s, relay: a, expiry: o, active: !1 };
      return await this.pairings.set(s, c), await this.core.crypto.setSymKey(i, s), await this.core.relayer.subscribe(s, { relay: a }), this.core.expirer.set(s, o), n.activatePairing && await this.activate({ topic: s }), c;
    }, this.activate = async ({ topic: n }) => {
      this.isInitialized();
      const s = Ir(ae.THIRTY_DAYS);
      await this.pairings.update(n, { active: !0, expiry: s }), this.core.expirer.set(n, s);
    }, this.ping = async (n) => {
      this.isInitialized(), await this.isValidPing(n);
      const { topic: s } = n;
      if (this.pairings.keys.includes(s)) {
        const i = await this.sendRequest(s, "wc_pairingPing", {}), { done: a, resolve: o, reject: c } = ys();
        this.events.once(Ct("pairing_ping", i), ({ error: u }) => {
          u ? c(u) : o();
        }), await a();
      }
    }, this.updateExpiry = async ({ topic: n, expiry: s }) => {
      this.isInitialized(), await this.pairings.update(n, { expiry: s });
    }, this.updateMetadata = async ({ topic: n, metadata: s }) => {
      this.isInitialized(), await this.pairings.update(n, { peerMetadata: s });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (n) => {
      this.isInitialized(), await this.isValidDisconnect(n);
      const { topic: s } = n;
      this.pairings.keys.includes(s) && (await this.sendRequest(s, "wc_pairingDelete", At("USER_DISCONNECTED")), await this.deletePairing(s));
    }, this.sendRequest = async (n, s, i) => {
      const a = fi(s, i), o = await this.core.crypto.encode(n, a), c = Qs[s].req;
      return this.core.history.set(n, a), this.core.relayer.publish(n, o, c), a.id;
    }, this.sendResult = async (n, s, i) => {
      const a = _u(n, i), o = await this.core.crypto.encode(s, a), c = await this.core.history.get(s, n), u = Qs[c.request.method].res;
      await this.core.relayer.publish(s, o, u), await this.core.history.resolve(a);
    }, this.sendError = async (n, s, i) => {
      const a = bu(n, i), o = await this.core.crypto.encode(s, a), c = await this.core.history.get(s, n), u = Qs[c.request.method] ? Qs[c.request.method].res : Qs.unregistered_method.res;
      await this.core.relayer.publish(s, o, u), await this.core.history.resolve(a);
    }, this.deletePairing = async (n, s) => {
      await this.core.relayer.unsubscribe(n), await Promise.all([this.pairings.delete(n, At("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(n), s ? Promise.resolve() : this.core.expirer.del(n)]);
    }, this.cleanup = async () => {
      const n = this.pairings.getAll().filter((s) => Sn(s.expiry));
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
        this.isValidPing({ topic: n }), await this.sendResult(i, n, !0), this.events.emit("pairing_ping", { id: i, topic: n });
      } catch (a) {
        await this.sendError(i, n, a), this.logger.error(a);
      }
    }, this.onPairingPingResponse = (n, s) => {
      const { id: i } = s;
      setTimeout(() => {
        an(s) ? this.events.emit(Ct("pairing_ping", i), {}) : Or(s) && this.events.emit(Ct("pairing_ping", i), { error: s.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (n, s) => {
      const { id: i } = s;
      try {
        this.isValidDisconnect({ topic: n }), await this.deletePairing(n), this.events.emit("pairing_delete", { id: i, topic: n });
      } catch (a) {
        await this.sendError(i, n, a), this.logger.error(a);
      }
    }, this.onUnknownRpcMethodRequest = async (n, s) => {
      const { id: i, method: a } = s;
      try {
        if (this.registeredMethods.includes(a))
          return;
        const o = At("WC_METHOD_UNSUPPORTED", a);
        await this.sendError(i, n, o), this.logger.error(o);
      } catch (o) {
        await this.sendError(i, n, o), this.logger.error(o);
      }
    }, this.onUnknownRpcMethodResponse = (n) => {
      this.registeredMethods.includes(n) || this.logger.error(At("WC_METHOD_UNSUPPORTED", n));
    }, this.isValidPair = (n) => {
      if (!cr(n)) {
        const { message: s } = J("MISSING_OR_INVALID", `pair() params: ${n}`);
        throw new Error(s);
      }
      if (!N0(n.uri)) {
        const { message: s } = J("MISSING_OR_INVALID", `pair() uri: ${n.uri}`);
        throw new Error(s);
      }
    }, this.isValidPing = async (n) => {
      if (!cr(n)) {
        const { message: i } = J("MISSING_OR_INVALID", `ping() params: ${n}`);
        throw new Error(i);
      }
      const { topic: s } = n;
      await this.isValidPairingTopic(s);
    }, this.isValidDisconnect = async (n) => {
      if (!cr(n)) {
        const { message: i } = J("MISSING_OR_INVALID", `disconnect() params: ${n}`);
        throw new Error(i);
      }
      const { topic: s } = n;
      await this.isValidPairingTopic(s);
    }, this.isValidPairingTopic = async (n) => {
      if (!jt(n, !1)) {
        const { message: s } = J("MISSING_OR_INVALID", `pairing topic should be a string: ${n}`);
        throw new Error(s);
      }
      if (!this.pairings.keys.includes(n)) {
        const { message: s } = J("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n}`);
        throw new Error(s);
      }
      if (Sn(this.pairings.get(n).expiry)) {
        await this.deletePairing(n);
        const { message: s } = J("EXPIRED", `pairing topic: ${n}`);
        throw new Error(s);
      }
    }, this.core = e, this.logger = He.generateChildLogger(r, this.name), this.pairings = new xa(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return He.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = J("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(Ht.message, async (e) => {
      const { topic: r, message: n } = e;
      if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n)))
        return;
      const s = await this.core.crypto.decode(r, n);
      try {
        wu(s) ? (this.core.history.set(r, s), this.onRelayEventRequest({ topic: r, payload: s })) : Ea(s) && (await this.core.history.resolve(s), await this.onRelayEventResponse({ topic: r, payload: s }), this.core.history.delete(r, s.id));
      } catch (i) {
        this.logger.error(i);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(wr.expired, async (e) => {
      const { topic: r } = Qh(e.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit("pairing_expire", { topic: r }));
    });
  }
}
class K1 extends tm {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new Mr.EventEmitter(), this.name = w1, this.version = E1, this.cached = [], this.initialized = !1, this.storagePrefix = Cn, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.records.set(n.id, n)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (n, s, i) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: n, request: s, chainId: i }), this.records.has(s.id))
        return;
      const a = { id: s.id, topic: n, request: { method: s.method, params: s.params || null }, chainId: i, expiry: Ir(ae.THIRTY_DAYS) };
      this.records.set(a.id, a), this.events.emit(Kr.created, a);
    }, this.resolve = async (n) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: n }), !this.records.has(n.id))
        return;
      const s = await this.getRecord(n.id);
      typeof s.response > "u" && (s.response = Or(n) ? { error: n.error } : { result: n.result }, this.records.set(s.id, s), this.events.emit(Kr.updated, s));
    }, this.get = async (n, s) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: n, id: s }), await this.getRecord(s)), this.delete = (n, s) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: s }), this.values.forEach((i) => {
        if (i.topic === n) {
          if (typeof s < "u" && i.id !== s)
            return;
          this.records.delete(i.id), this.events.emit(Kr.deleted, i);
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
    }, this.logger = He.generateChildLogger(r, this.name);
  }
  get context() {
    return He.getLoggerContext(this.logger);
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
      const n = { topic: r.topic, request: fi(r.request.method, r.request.params, r.id), chainId: r.chainId };
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
      const { message: n } = J("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(n);
    }
    return r;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(Kr.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length)
        return;
      if (this.records.size) {
        const { message: r } = J("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(Kr.created, (e) => {
      const r = Kr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(Kr.updated, (e) => {
      const r = Kr.updated;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(Kr.deleted, (e) => {
      const r = Kr.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.core.heartbeat.on(zs.HEARTBEAT_EVENTS.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.records.forEach((e) => {
        ae.toMiliseconds(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id));
      });
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = J("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class B1 extends am {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new Mr.EventEmitter(), this.name = S1, this.version = x1, this.cached = [], this.initialized = !1, this.storagePrefix = Cn, this.init = async () => {
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
      this.expirations.set(i, a), this.checkExpiry(i, a), this.events.emit(wr.created, { target: i, expiration: a });
    }, this.get = (n) => {
      this.isInitialized();
      const s = this.formatTarget(n);
      return this.getExpiration(s);
    }, this.del = (n) => {
      if (this.isInitialized(), this.has(n)) {
        const s = this.formatTarget(n), i = this.getExpiration(s);
        this.expirations.delete(s), this.events.emit(wr.deleted, { target: s, expiration: i });
      }
    }, this.on = (n, s) => {
      this.events.on(n, s);
    }, this.once = (n, s) => {
      this.events.once(n, s);
    }, this.off = (n, s) => {
      this.events.off(n, s);
    }, this.removeListener = (n, s) => {
      this.events.removeListener(n, s);
    }, this.logger = He.generateChildLogger(r, this.name);
  }
  get context() {
    return He.getLoggerContext(this.logger);
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
      return c0(e);
    if (typeof e == "number")
      return u0(e);
    const { message: r } = J("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(r);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(wr.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length)
        return;
      if (this.expirations.size) {
        const { message: r } = J("RESTORE_WILL_OVERRIDE", this.name);
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
      const { message: n } = J("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(n), new Error(n);
    }
    return r;
  }
  checkExpiry(e, r) {
    const { expiry: n } = r;
    ae.toMiliseconds(n) - Date.now() <= 0 && this.expire(e, r);
  }
  expire(e, r) {
    this.expirations.delete(e), this.events.emit(wr.expired, { target: e, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, r) => this.checkExpiry(r, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(zs.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(wr.created, (e) => {
      const r = wr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(wr.expired, (e) => {
      const r = wr.expired;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(wr.deleted, (e) => {
      const r = wr.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = J("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class H1 extends cm {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.name = Fa, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (n) => {
      if (this.verifyDisabled || wa() || !Xi())
        return;
      const s = (n == null ? void 0 : n.verifyUrl) || ko;
      this.verifyUrl !== s && this.removeIframe(), this.verifyUrl = s;
      try {
        await this.createIframe();
      } catch (i) {
        this.logger.warn(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.warn(i);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = pd;
        try {
          await this.createIframe();
        } catch (i) {
          this.logger.error(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.error(i), this.verifyDisabled = !0;
        }
      }
    }, this.register = async (n) => {
      this.initialized ? this.sendPost(n.attestationId) : (this.addToQueue(n.attestationId), await this.init());
    }, this.resolve = async (n) => {
      if (this.isDevEnv)
        return "";
      const s = (n == null ? void 0 : n.verifyUrl) || ko;
      let i = "";
      try {
        i = await this.fetchAttestation(n.attestationId, s);
      } catch (a) {
        this.logger.warn(`failed to resolve attestation: ${n.attestationId} from url: ${s}`), this.logger.warn(a), i = await this.fetchAttestation(n.attestationId, pd);
      }
      return i;
    }, this.fetchAttestation = async (n, s) => {
      var i;
      this.logger.info(`resolving attestation: ${n} from url: ${s}`);
      const a = this.startAbortTimer(ae.ONE_SECOND * 2), o = await fetch(`${s}/attestation/${n}`, { signal: this.abortController.signal });
      return clearTimeout(a), o.status === 200 ? (i = await o.json()) == null ? void 0 : i.origin : "";
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
        if (document.getElementById(Fa))
          return i();
        window.addEventListener("message", s);
        const a = document.createElement("iframe");
        a.id = Fa, a.src = `${this.verifyUrl}/${this.projectId}`, a.style.display = "none", document.body.append(a), this.iframe = a, n = i;
      }), new Promise((i, a) => setTimeout(() => {
        window.removeEventListener("message", s), a("verify iframe load timeout");
      }, ae.toMiliseconds(ae.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
    }, this.logger = He.generateChildLogger(r, this.name), this.verifyUrl = ko, this.abortController = new AbortController(), this.isDevEnv = gu() && process.env.IS_VITEST;
  }
  get context() {
    return He.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), ae.toMiliseconds(e));
  }
}
var W1 = Object.defineProperty, Ed = Object.getOwnPropertySymbols, G1 = Object.prototype.hasOwnProperty, Y1 = Object.prototype.propertyIsEnumerable, Sd = (t, e, r) => e in t ? W1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, xd = (t, e) => {
  for (var r in e || (e = {}))
    G1.call(e, r) && Sd(t, r, e[r]);
  if (Ed)
    for (var r of Ed(e))
      Y1.call(e, r) && Sd(t, r, e[r]);
  return t;
};
class Su extends em {
  constructor(e) {
    super(e), this.protocol = mf, this.version = Qw, this.name = Eu, this.events = new Mr.EventEmitter(), this.initialized = !1, this.on = (n, s) => this.events.on(n, s), this.once = (n, s) => this.events.once(n, s), this.off = (n, s) => this.events.off(n, s), this.removeListener = (n, s) => this.events.removeListener(n, s), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || _f;
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : He.pino(He.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || Jw.logger }));
    this.logger = He.generateChildLogger(r, this.name), this.heartbeat = new zs.HeartBeat(), this.crypto = new O1(this, this.logger, e == null ? void 0 : e.keychain), this.history = new K1(this, this.logger), this.expirer = new B1(this, this.logger), this.storage = e != null && e.storage ? e.storage : new my(xd(xd({}, Xw), e == null ? void 0 : e.storageOptions)), this.relayer = new $1({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new F1(this, this.logger), this.verify = new H1(this.projectId || "", this.logger);
  }
  static async init(e) {
    const r = new Su(e);
    await r.initialize();
    const n = await r.crypto.getClientId();
    return await r.storage.setItem(g1, n), r;
  }
  get context() {
    return He.getLoggerContext(this.logger);
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
const Q1 = Su, bf = "wc", wf = 2, Ef = "client", xu = `${bf}@${wf}:${Ef}:`, Ba = { name: Ef, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, Id = "WALLETCONNECT_DEEPLINK_CHOICE", J1 = "proposal", X1 = "Proposal expired", eE = "session", _o = ae.SEVEN_DAYS, tE = "engine", Xs = { wc_sessionPropose: { req: { ttl: ae.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: ae.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: ae.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: ae.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: ae.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: ae.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: ae.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: ae.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: ae.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: ae.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: ae.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: ae.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: ae.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: ae.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: ae.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: ae.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, Ha = { min: ae.FIVE_MINUTES, max: ae.SEVEN_DAYS }, on = { idle: "IDLE", active: "ACTIVE" }, rE = "request", nE = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var sE = Object.defineProperty, iE = Object.defineProperties, oE = Object.getOwnPropertyDescriptors, Od = Object.getOwnPropertySymbols, aE = Object.prototype.hasOwnProperty, cE = Object.prototype.propertyIsEnumerable, Td = (t, e, r) => e in t ? sE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, or = (t, e) => {
  for (var r in e || (e = {}))
    aE.call(e, r) && Td(t, r, e[r]);
  if (Od)
    for (var r of Od(e))
      cE.call(e, r) && Td(t, r, e[r]);
  return t;
}, ei = (t, e) => iE(t, oE(e));
class uE extends lm {
  constructor(e) {
    super(e), this.name = tE, this.events = new iu(), this.initialized = !1, this.ignoredPayloadTypes = [us], this.requestQueue = { state: on.idle, queue: [] }, this.sessionRequestQueue = { state: on.idle, queue: [] }, this.requestQueueDelay = ae.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({ methods: Object.keys(Xs) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, ae.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      await this.isInitialized();
      const n = ei(or({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(n);
      const { pairingTopic: s, requiredNamespaces: i, optionalNamespaces: a, sessionProperties: o, relays: c } = n;
      let u = s, d, f = !1;
      if (u && (f = this.client.core.pairing.pairings.get(u).active), !u || !f) {
        const { topic: O, uri: w } = await this.client.core.pairing.create();
        u = O, d = w;
      }
      const p = await this.client.core.crypto.generateKeyPair(), m = or({ requiredNamespaces: i, optionalNamespaces: a, relays: c ?? [{ protocol: vf }], proposer: { publicKey: p, metadata: this.client.metadata } }, o && { sessionProperties: o }), { reject: b, resolve: E, done: T } = ys(ae.FIVE_MINUTES, X1);
      if (this.events.once(Ct("session_connect"), async ({ error: O, session: w }) => {
        if (O)
          b(O);
        else if (w) {
          w.self.publicKey = p;
          const x = ei(or({}, w), { requiredNamespaces: w.requiredNamespaces, optionalNamespaces: w.optionalNamespaces });
          await this.client.session.set(w.topic, x), await this.setExpiry(w.topic, w.expiry), u && await this.client.core.pairing.updateMetadata({ topic: u, metadata: w.peer.metadata }), E(x);
        }
      }), !u) {
        const { message: O } = J("NO_MATCHING_KEY", `connect() pairing topic: ${u}`);
        throw new Error(O);
      }
      const U = await this.sendRequest({ topic: u, method: "wc_sessionPropose", params: m }), v = Ir(ae.FIVE_MINUTES);
      return await this.setProposal(U, or({ id: U, expiry: v }, m)), { uri: d, approval: T };
    }, this.pair = async (r) => (await this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      await this.isInitialized(), await this.isValidApprove(r);
      const { id: n, relayProtocol: s, namespaces: i, sessionProperties: a } = r, o = this.client.proposal.get(n);
      let { pairingTopic: c, proposer: u, requiredNamespaces: d, optionalNamespaces: f } = o;
      c = c || "", ii(d) || (d = x0(i, "approve()"));
      const p = await this.client.core.crypto.generateKeyPair(), m = u.publicKey, b = await this.client.core.crypto.generateSharedKey(p, m);
      c && n && (await this.client.core.pairing.updateMetadata({ topic: c, metadata: u.metadata }), await this.sendResult({ id: n, topic: c, result: { relay: { protocol: s ?? "irn" }, responderPublicKey: p } }), await this.client.proposal.delete(n, At("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: c }));
      const E = or({ relay: { protocol: s ?? "irn" }, namespaces: i, requiredNamespaces: d, optionalNamespaces: f, pairingTopic: c, controller: { publicKey: p, metadata: this.client.metadata }, expiry: Ir(_o) }, a && { sessionProperties: a });
      await this.client.core.relayer.subscribe(b), await this.sendRequest({ topic: b, method: "wc_sessionSettle", params: E, throwOnFailedPublish: !0 });
      const T = ei(or({}, E), { topic: b, pairingTopic: c, acknowledged: !1, self: E.controller, peer: { publicKey: u.publicKey, metadata: u.metadata }, controller: p });
      return await this.client.session.set(b, T), await this.setExpiry(b, Ir(_o)), { topic: b, acknowledged: () => new Promise((U) => setTimeout(() => U(this.client.session.get(b)), 500)) };
    }, this.reject = async (r) => {
      await this.isInitialized(), await this.isValidReject(r);
      const { id: n, reason: s } = r, { pairingTopic: i } = this.client.proposal.get(n);
      i && (await this.sendError(n, i, s), await this.client.proposal.delete(n, At("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      await this.isInitialized(), await this.isValidUpdate(r);
      const { topic: n, namespaces: s } = r, i = await this.sendRequest({ topic: n, method: "wc_sessionUpdate", params: { namespaces: s } }), { done: a, resolve: o, reject: c } = ys();
      return this.events.once(Ct("session_update", i), ({ error: u }) => {
        u ? c(u) : o();
      }), await this.client.session.update(n, { namespaces: s }), { acknowledged: a };
    }, this.extend = async (r) => {
      await this.isInitialized(), await this.isValidExtend(r);
      const { topic: n } = r, s = await this.sendRequest({ topic: n, method: "wc_sessionExtend", params: {} }), { done: i, resolve: a, reject: o } = ys();
      return this.events.once(Ct("session_extend", s), ({ error: c }) => {
        c ? o(c) : a();
      }), await this.setExpiry(n, Ir(_o)), { acknowledged: i };
    }, this.request = async (r) => {
      await this.isInitialized(), await this.isValidRequest(r);
      const { chainId: n, request: s, topic: i, expiry: a } = r, o = vu(), { done: c, resolve: u, reject: d } = ys(a);
      return this.events.once(Ct("session_request", o), ({ error: f, result: p }) => {
        f ? d(f) : u(p);
      }), await Promise.all([new Promise(async (f) => {
        await this.sendRequest({ clientRpcId: o, topic: i, method: "wc_sessionRequest", params: { request: s, chainId: n }, expiry: a, throwOnFailedPublish: !0 }).catch((p) => d(p)), this.client.events.emit("session_request_sent", { topic: i, request: s, chainId: n, id: o }), f();
      }), new Promise(async (f) => {
        const p = await this.client.core.storage.getItem(Id);
        l0({ id: o, topic: i, wcDeepLink: p }), f();
      }), c()]).then((f) => f[2]);
    }, this.respond = async (r) => {
      await this.isInitialized(), await this.isValidRespond(r);
      const { topic: n, response: s } = r, { id: i } = s;
      an(s) ? await this.sendResult({ id: i, topic: n, result: s.result, throwOnFailedPublish: !0 }) : Or(s) && await this.sendError(i, n, s.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      await this.isInitialized(), await this.isValidPing(r);
      const { topic: n } = r;
      if (this.client.session.keys.includes(n)) {
        const s = await this.sendRequest({ topic: n, method: "wc_sessionPing", params: {} }), { done: i, resolve: a, reject: o } = ys();
        this.events.once(Ct("session_ping", s), ({ error: c }) => {
          c ? o(c) : a();
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
      this.client.session.keys.includes(n) ? (await this.sendRequest({ topic: n, method: "wc_sessionDelete", params: At("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession(n)) : await this.client.core.pairing.disconnect({ topic: n });
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((n) => T0(n, r))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (r) => {
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
      await this.client.core.relayer.unsubscribe(r), this.client.session.delete(r, At("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(s.publicKey) && await this.client.core.crypto.deleteKeyPair(s.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), n || this.client.core.expirer.del(r), this.client.core.storage.removeItem(Id).catch((i) => this.client.logger.warn(i));
    }, this.deleteProposal = async (r, n) => {
      await Promise.all([this.client.proposal.delete(r, At("USER_DISCONNECTED")), n ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, n, s = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, n), s ? Promise.resolve() : this.client.core.expirer.del(r)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i) => i.id !== r), s && (this.sessionRequestQueue.state = on.idle);
    }, this.setExpiry = async (r, n) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: n }), this.client.core.expirer.set(r, n);
    }, this.setProposal = async (r, n) => {
      await this.client.proposal.set(r, n), this.client.core.expirer.set(r, n.expiry);
    }, this.setPendingSessionRequest = async (r) => {
      const n = Xs.wc_sessionRequest.req.ttl, { id: s, topic: i, params: a } = r;
      await this.client.pendingRequest.set(s, { id: s, topic: i, params: a }), n && this.client.core.expirer.set(s, Ir(n));
    }, this.sendRequest = async (r) => {
      const { topic: n, method: s, params: i, expiry: a, relayRpcId: o, clientRpcId: c, throwOnFailedPublish: u } = r, d = fi(s, i, c);
      if (Xi() && nE.includes(s)) {
        const m = Ss(JSON.stringify(d));
        this.client.core.verify.register({ attestationId: m });
      }
      const f = await this.client.core.crypto.encode(n, d), p = Xs[s].req;
      return a && (p.ttl = a), o && (p.id = o), this.client.core.history.set(n, d), u ? (p.internal = ei(or({}, p.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(n, f, p)) : this.client.core.relayer.publish(n, f, p).catch((m) => this.client.logger.error(m)), d.id;
    }, this.sendResult = async (r) => {
      const { id: n, topic: s, result: i, throwOnFailedPublish: a } = r, o = _u(n, i), c = await this.client.core.crypto.encode(s, o), u = await this.client.core.history.get(s, n), d = Xs[u.request.method].res;
      a ? (d.internal = ei(or({}, d.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(s, c, d)) : this.client.core.relayer.publish(s, c, d).catch((f) => this.client.logger.error(f)), await this.client.core.history.resolve(o);
    }, this.sendError = async (r, n, s) => {
      const i = bu(r, s), a = await this.client.core.crypto.encode(n, i), o = await this.client.core.history.get(n, r), c = Xs[o.request.method].res;
      this.client.core.relayer.publish(n, a, c), await this.client.core.history.resolve(i);
    }, this.cleanup = async () => {
      const r = [], n = [];
      this.client.session.getAll().forEach((s) => {
        Sn(s.expiry) && r.push(s.topic);
      }), this.client.proposal.getAll().forEach((s) => {
        Sn(s.expiry) && n.push(s.id);
      }), await Promise.all([...r.map((s) => this.deleteSession(s)), ...n.map((s) => this.deleteProposal(s))]);
    }, this.onRelayEventRequest = async (r) => {
      this.requestQueue.queue.push(r), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === on.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = on.active;
        const r = this.requestQueue.queue.shift();
        if (r)
          try {
            this.processRequest(r), await new Promise((n) => setTimeout(n, 300));
          } catch (n) {
            this.client.logger.warn(n);
          }
      }
      this.requestQueue.state = on.idle;
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
      const { topic: n } = r, { message: s } = J("MISSING_OR_INVALID", `Decoded payload on topic ${n} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(s);
    }, this.onSessionProposeRequest = async (r, n) => {
      const { params: s, id: i } = n;
      try {
        this.isValidConnect(or({}, n.params));
        const a = Ir(ae.FIVE_MINUTES), o = or({ id: i, pairingTopic: r, expiry: a }, s);
        await this.setProposal(i, o);
        const c = Ss(JSON.stringify(n)), u = await this.getVerifyContext(c, o.proposer.metadata);
        this.client.events.emit("session_proposal", { id: i, params: o, verifyContext: u });
      } catch (a) {
        await this.sendError(i, r, a), this.client.logger.error(a);
      }
    }, this.onSessionProposeResponse = async (r, n) => {
      const { id: s } = n;
      if (an(n)) {
        const { result: i } = n;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: i });
        const a = this.client.proposal.get(s);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: a });
        const o = a.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: o });
        const c = i.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: c });
        const u = await this.client.core.crypto.generateSharedKey(o, c);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: u });
        const d = await this.client.core.relayer.subscribe(u);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: d }), await this.client.core.pairing.activate({ topic: r });
      } else
        Or(n) && (await this.client.proposal.delete(s, At("USER_DISCONNECTED")), this.events.emit(Ct("session_connect"), { error: n.error }));
    }, this.onSessionSettleRequest = async (r, n) => {
      const { id: s, params: i } = n;
      try {
        this.isValidSessionSettleRequest(i);
        const { relay: a, controller: o, expiry: c, namespaces: u, requiredNamespaces: d, optionalNamespaces: f, sessionProperties: p, pairingTopic: m } = n.params, b = or({ topic: r, relay: a, expiry: c, namespaces: u, acknowledged: !0, pairingTopic: m, requiredNamespaces: d, optionalNamespaces: f, controller: o.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: o.publicKey, metadata: o.metadata } }, p && { sessionProperties: p });
        await this.sendResult({ id: n.id, topic: r, result: !0 }), this.events.emit(Ct("session_connect"), { session: b }), this.cleanupDuplicatePairings(b);
      } catch (a) {
        await this.sendError(s, r, a), this.client.logger.error(a);
      }
    }, this.onSessionSettleResponse = async (r, n) => {
      const { id: s } = n;
      an(n) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(Ct("session_approve", s), {})) : Or(n) && (await this.client.session.delete(r, At("USER_DISCONNECTED")), this.events.emit(Ct("session_approve", s), { error: n.error }));
    }, this.onSessionUpdateRequest = async (r, n) => {
      const { params: s, id: i } = n;
      try {
        const a = `${r}_session_update`, o = vo.get(a);
        if (o && this.isRequestOutOfSync(o, i)) {
          this.client.logger.info(`Discarding out of sync request - ${i}`);
          return;
        }
        this.isValidUpdate(or({ topic: r }, s)), await this.client.session.update(r, { namespaces: s.namespaces }), await this.sendResult({ id: i, topic: r, result: !0 }), this.client.events.emit("session_update", { id: i, topic: r, params: s }), vo.set(a, i);
      } catch (a) {
        await this.sendError(i, r, a), this.client.logger.error(a);
      }
    }, this.isRequestOutOfSync = (r, n) => parseInt(n.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, n) => {
      const { id: s } = n;
      an(n) ? this.events.emit(Ct("session_update", s), {}) : Or(n) && this.events.emit(Ct("session_update", s), { error: n.error });
    }, this.onSessionExtendRequest = async (r, n) => {
      const { id: s } = n;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, Ir(_o)), await this.sendResult({ id: s, topic: r, result: !0 }), this.client.events.emit("session_extend", { id: s, topic: r });
      } catch (i) {
        await this.sendError(s, r, i), this.client.logger.error(i);
      }
    }, this.onSessionExtendResponse = (r, n) => {
      const { id: s } = n;
      an(n) ? this.events.emit(Ct("session_extend", s), {}) : Or(n) && this.events.emit(Ct("session_extend", s), { error: n.error });
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
        an(n) ? this.events.emit(Ct("session_ping", s), {}) : Or(n) && this.events.emit(Ct("session_ping", s), { error: n.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (r, n) => {
      const { id: s } = n;
      try {
        this.isValidDisconnect({ topic: r, reason: n.params }), await Promise.all([new Promise((i) => {
          this.client.core.relayer.once(Ht.publish, async () => {
            i(await this.deleteSession(r));
          });
        }), this.sendResult({ id: s, topic: r, result: !0 })]), this.client.events.emit("session_delete", { id: s, topic: r });
      } catch (i) {
        this.client.logger.error(i);
      }
    }, this.onSessionRequest = async (r, n) => {
      const { id: s, params: i } = n;
      try {
        this.isValidRequest(or({ topic: r }, i)), await this.setPendingSessionRequest({ id: s, topic: r, params: i }), this.addSessionRequestToSessionRequestQueue({ id: s, topic: r, params: i }), await this.processSessionRequestQueue();
      } catch (a) {
        await this.sendError(s, r, a), this.client.logger.error(a);
      }
    }, this.onSessionRequestResponse = (r, n) => {
      const { id: s } = n;
      an(n) ? this.events.emit(Ct("session_request", s), { result: n.result }) : Or(n) && this.events.emit(Ct("session_request", s), { error: n.error });
    }, this.onSessionEventRequest = async (r, n) => {
      const { id: s, params: i } = n;
      try {
        const a = `${r}_session_event_${i.event.name}`, o = vo.get(a);
        if (o && this.isRequestOutOfSync(o, s)) {
          this.client.logger.info(`Discarding out of sync request - ${s}`);
          return;
        }
        this.isValidEmit(or({ topic: r }, i)), this.client.events.emit("session_event", { id: s, topic: r, params: i }), vo.set(a, s);
      } catch (a) {
        await this.sendError(s, r, a), this.client.logger.error(a);
      }
    }, this.addSessionRequestToSessionRequestQueue = (r) => {
      this.sessionRequestQueue.queue.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = on.idle, this.processSessionRequestQueue();
      }, ae.toMiliseconds(this.requestQueueDelay));
    }, this.processSessionRequestQueue = async () => {
      if (this.sessionRequestQueue.state === on.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const r = this.sessionRequestQueue.queue[0];
      if (!r) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        const { id: n, topic: s, params: i } = r, a = Ss(JSON.stringify(fi("wc_sessionRequest", i, n))), o = this.client.session.get(s), c = await this.getVerifyContext(a, o.peer.metadata);
        this.sessionRequestQueue.state = on.active, this.client.events.emit("session_request", { id: n, topic: s, params: i, verifyContext: c });
      } catch (n) {
        this.client.logger.error(n);
      }
    }, this.isValidConnect = async (r) => {
      if (!cr(r)) {
        const { message: c } = J("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(c);
      }
      const { pairingTopic: n, requiredNamespaces: s, optionalNamespaces: i, sessionProperties: a, relays: o } = r;
      if (Xt(n) || await this.isValidPairingTopic(n), !z0(o, !0)) {
        const { message: c } = J("MISSING_OR_INVALID", `connect() relays: ${o}`);
        throw new Error(c);
      }
      !Xt(s) && ii(s) !== 0 && this.validateNamespaces(s, "requiredNamespaces"), !Xt(i) && ii(i) !== 0 && this.validateNamespaces(i, "optionalNamespaces"), Xt(a) || this.validateSessionProps(a, "sessionProperties");
    }, this.validateNamespaces = (r, n) => {
      const s = D0(r, "connect()", n);
      if (s)
        throw new Error(s.message);
    }, this.isValidApprove = async (r) => {
      if (!cr(r))
        throw new Error(J("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: n, namespaces: s, relayProtocol: i, sessionProperties: a } = r;
      await this.isValidProposalId(n);
      const o = this.client.proposal.get(n), c = Po(s, "approve()");
      if (c)
        throw new Error(c.message);
      const u = Ql(o.requiredNamespaces, s, "approve()");
      if (u)
        throw new Error(u.message);
      if (!jt(i, !0)) {
        const { message: d } = J("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
        throw new Error(d);
      }
      Xt(a) || this.validateSessionProps(a, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!cr(r)) {
        const { message: i } = J("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(i);
      }
      const { id: n, reason: s } = r;
      if (await this.isValidProposalId(n), !V0(s)) {
        const { message: i } = J("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s)}`);
        throw new Error(i);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!cr(r)) {
        const { message: u } = J("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(u);
      }
      const { relay: n, controller: s, namespaces: i, expiry: a } = r;
      if (!Xh(n)) {
        const { message: u } = J("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(u);
      }
      const o = R0(s, "onSessionSettleRequest()");
      if (o)
        throw new Error(o.message);
      const c = Po(i, "onSessionSettleRequest()");
      if (c)
        throw new Error(c.message);
      if (Sn(a)) {
        const { message: u } = J("EXPIRED", "onSessionSettleRequest()");
        throw new Error(u);
      }
    }, this.isValidUpdate = async (r) => {
      if (!cr(r)) {
        const { message: c } = J("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(c);
      }
      const { topic: n, namespaces: s } = r;
      await this.isValidSessionTopic(n);
      const i = this.client.session.get(n), a = Po(s, "update()");
      if (a)
        throw new Error(a.message);
      const o = Ql(i.requiredNamespaces, s, "update()");
      if (o)
        throw new Error(o.message);
    }, this.isValidExtend = async (r) => {
      if (!cr(r)) {
        const { message: s } = J("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(s);
      }
      const { topic: n } = r;
      await this.isValidSessionTopic(n);
    }, this.isValidRequest = async (r) => {
      if (!cr(r)) {
        const { message: c } = J("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(c);
      }
      const { topic: n, request: s, chainId: i, expiry: a } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: o } = this.client.session.get(n);
      if (!Yl(o, i)) {
        const { message: c } = J("MISSING_OR_INVALID", `request() chainId: ${i}`);
        throw new Error(c);
      }
      if (!Z0(s)) {
        const { message: c } = J("MISSING_OR_INVALID", `request() ${JSON.stringify(s)}`);
        throw new Error(c);
      }
      if (!K0(o, i, s.method)) {
        const { message: c } = J("MISSING_OR_INVALID", `request() method: ${s.method}`);
        throw new Error(c);
      }
      if (a && !G0(a, Ha)) {
        const { message: c } = J("MISSING_OR_INVALID", `request() expiry: ${a}. Expiry must be a number (in seconds) between ${Ha.min} and ${Ha.max}`);
        throw new Error(c);
      }
    }, this.isValidRespond = async (r) => {
      if (!cr(r)) {
        const { message: i } = J("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(i);
      }
      const { topic: n, response: s } = r;
      if (await this.isValidSessionTopic(n), !q0(s)) {
        const { message: i } = J("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(s)}`);
        throw new Error(i);
      }
    }, this.isValidPing = async (r) => {
      if (!cr(r)) {
        const { message: s } = J("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(s);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.isValidEmit = async (r) => {
      if (!cr(r)) {
        const { message: o } = J("MISSING_OR_INVALID", `emit() params: ${r}`);
        throw new Error(o);
      }
      const { topic: n, event: s, chainId: i } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: a } = this.client.session.get(n);
      if (!Yl(a, i)) {
        const { message: o } = J("MISSING_OR_INVALID", `emit() chainId: ${i}`);
        throw new Error(o);
      }
      if (!F0(s)) {
        const { message: o } = J("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(o);
      }
      if (!B0(a, i, s.name)) {
        const { message: o } = J("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(o);
      }
    }, this.isValidDisconnect = async (r) => {
      if (!cr(r)) {
        const { message: s } = J("MISSING_OR_INVALID", `disconnect() params: ${r}`);
        throw new Error(s);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.getVerifyContext = async (r, n) => {
      const s = { verified: { verifyUrl: n.verifyUrl || ko, validation: "UNKNOWN", origin: n.url || "" } };
      try {
        const i = await this.client.core.verify.resolve({ attestationId: r, verifyUrl: n.verifyUrl });
        i && (s.verified.origin = i, s.verified.validation = i === new URL(n.url).origin ? "VALID" : "INVALID");
      } catch (i) {
        this.client.logger.error(i);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(s)}`), s;
    }, this.validateSessionProps = (r, n) => {
      Object.values(r).forEach((s) => {
        if (!jt(s, !1)) {
          const { message: i } = J("MISSING_OR_INVALID", `${n} must be in Record<string, string> format. Received: ${JSON.stringify(s)}`);
          throw new Error(i);
        }
      });
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: e } = J("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(Ht.message, async (e) => {
      const { topic: r, message: n } = e;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(n)))
        return;
      const s = await this.client.core.crypto.decode(r, n);
      try {
        wu(s) ? (this.client.core.history.set(r, s), this.onRelayEventRequest({ topic: r, payload: s })) : Ea(s) ? (await this.client.core.history.resolve(s), await this.onRelayEventResponse({ topic: r, payload: s }), this.client.core.history.delete(r, s.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: s });
      } catch (i) {
        this.client.logger.error(i);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(wr.expired, async (e) => {
      const { topic: r, id: n } = Qh(e.target);
      if (n && this.client.pendingRequest.keys.includes(n))
        return await this.deletePendingSessionRequest(n, J("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession(r, !0), this.client.events.emit("session_expire", { topic: r })) : n && (await this.deleteProposal(n, !0), this.client.events.emit("proposal_expire", { id: n }));
    });
  }
  isValidPairingTopic(e) {
    if (!jt(e, !1)) {
      const { message: r } = J("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: r } = J("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (Sn(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: r } = J("EXPIRED", `pairing topic: ${e}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(e) {
    if (!jt(e, !1)) {
      const { message: r } = J("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(e)) {
      const { message: r } = J("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (Sn(this.client.session.get(e).expiry)) {
      await this.deleteSession(e);
      const { message: r } = J("EXPIRED", `session topic: ${e}`);
      throw new Error(r);
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if (this.client.session.keys.includes(e))
      await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e))
      this.isValidPairingTopic(e);
    else if (jt(e, !1)) {
      const { message: r } = J("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    } else {
      const { message: r } = J("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
  }
  async isValidProposalId(e) {
    if (!$0(e)) {
      const { message: r } = J("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: r } = J("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (Sn(this.client.proposal.get(e).expiry)) {
      await this.deleteProposal(e);
      const { message: r } = J("EXPIRED", `proposal id: ${e}`);
      throw new Error(r);
    }
  }
}
class lE extends xa {
  constructor(e, r) {
    super(e, r, J1, xu), this.core = e, this.logger = r;
  }
}
class dE extends xa {
  constructor(e, r) {
    super(e, r, eE, xu), this.core = e, this.logger = r;
  }
}
class hE extends xa {
  constructor(e, r) {
    super(e, r, rE, xu, (n) => n.id), this.core = e, this.logger = r;
  }
}
class Iu extends um {
  constructor(e) {
    super(e), this.protocol = bf, this.version = wf, this.name = Ba.name, this.events = new Mr.EventEmitter(), this.on = (n, s) => this.events.on(n, s), this.once = (n, s) => this.events.once(n, s), this.off = (n, s) => this.events.off(n, s), this.removeListener = (n, s) => this.events.removeListener(n, s), this.removeAllListeners = (n) => this.events.removeAllListeners(n), this.connect = async (n) => {
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
    }, this.name = (e == null ? void 0 : e.name) || Ba.name, this.metadata = (e == null ? void 0 : e.metadata) || n0();
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : He.pino(He.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || Ba.logger }));
    this.core = (e == null ? void 0 : e.core) || new Q1(e), this.logger = He.generateChildLogger(r, this.name), this.session = new dE(this.core, this.logger), this.proposal = new lE(this.core, this.logger), this.pendingRequest = new hE(this.core, this.logger), this.engine = new uE(this);
  }
  static async init(e) {
    const r = new Iu(e);
    return await r.initialize(), r;
  }
  get context() {
    return He.getLoggerContext(this.logger);
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
var fE = Object.defineProperty, pE = Object.defineProperties, gE = Object.getOwnPropertyDescriptors, Cd = Object.getOwnPropertySymbols, yE = Object.prototype.hasOwnProperty, mE = Object.prototype.propertyIsEnumerable, Nd = (t, e, r) => e in t ? fE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, vE = (t, e) => {
  for (var r in e || (e = {}))
    yE.call(e, r) && Nd(t, r, e[r]);
  if (Cd)
    for (var r of Cd(e))
      mE.call(e, r) && Nd(t, r, e[r]);
  return t;
}, _E = (t, e) => pE(t, gE(e)), Ou = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, ut = (t, e, r) => (Ou(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Fn = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, Zo = (t, e, r, n) => (Ou(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), Ft = (t, e, r) => (Ou(t, e, "access private method"), r), Kn, ms, ni, Rt, wc, Sf, Kt, Jt, Ec, Pd;
let bE = class {
  constructor(t) {
    Fn(this, wc), Fn(this, Kt), Fn(this, Ec), Fn(this, Kn, void 0), Fn(this, ms, void 0), Fn(this, ni, void 0), Fn(this, Rt, void 0), Zo(this, Kn, t), Zo(this, ms, Ft(this, wc, Sf).call(this)), Ft(this, Kt, Jt).call(this);
  }
  async connect(t) {
    const { requiredNamespaces: e, optionalNamespaces: r } = t;
    return new Promise(async (n, s) => {
      await Ft(this, Kt, Jt).call(this);
      const i = ut(this, ms).subscribeModal((c) => {
        c.open || (i(), s(new Error("Modal closed")));
      }), { uri: a, approval: o } = await ut(this, Rt).connect(t);
      if (a) {
        const c = /* @__PURE__ */ new Set();
        e && Object.values(e).forEach(({ chains: u }) => {
          u && u.forEach((d) => c.add(d));
        }), r && Object.values(r).forEach(({ chains: u }) => {
          u && u.forEach((d) => c.add(d));
        }), await ut(this, ms).openModal({ uri: a, chains: Array.from(c) });
      }
      try {
        const c = await o();
        n(c);
      } catch (c) {
        s(c);
      } finally {
        i(), ut(this, ms).closeModal();
      }
    });
  }
  async disconnect(t) {
    await Ft(this, Kt, Jt).call(this), await ut(this, Rt).disconnect(t);
  }
  async request(t) {
    return await Ft(this, Kt, Jt).call(this), await ut(this, Rt).request(t);
  }
  async getSessions() {
    return await Ft(this, Kt, Jt).call(this), ut(this, Rt).session.getAll();
  }
  async getSession() {
    return await Ft(this, Kt, Jt).call(this), ut(this, Rt).session.getAll().at(-1);
  }
  async onSessionEvent(t) {
    await Ft(this, Kt, Jt).call(this), ut(this, Rt).on("session_event", t);
  }
  async offSessionEvent(t) {
    await Ft(this, Kt, Jt).call(this), ut(this, Rt).off("session_event", t);
  }
  async onSessionUpdate(t) {
    await Ft(this, Kt, Jt).call(this), ut(this, Rt).on("session_update", t);
  }
  async offSessionUpdate(t) {
    await Ft(this, Kt, Jt).call(this), ut(this, Rt).off("session_update", t);
  }
  async onSessionDelete(t) {
    await Ft(this, Kt, Jt).call(this), ut(this, Rt).on("session_delete", t);
  }
  async offSessionDelete(t) {
    await Ft(this, Kt, Jt).call(this), ut(this, Rt).off("session_delete", t);
  }
  async onSessionExpire(t) {
    await Ft(this, Kt, Jt).call(this), ut(this, Rt).on("session_expire", t);
  }
  async offSessionExpire(t) {
    await Ft(this, Kt, Jt).call(this), ut(this, Rt).off("session_expire", t);
  }
};
Kn = /* @__PURE__ */ new WeakMap(), ms = /* @__PURE__ */ new WeakMap(), ni = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), wc = /* @__PURE__ */ new WeakSet(), Sf = function() {
  const { modalOptions: t, projectId: e } = ut(this, Kn);
  return new Ag(_E(vE({}, t), { projectId: e }));
}, Kt = /* @__PURE__ */ new WeakSet(), Jt = async function() {
  return ut(this, Rt) ? !0 : (!ut(this, ni) && typeof window < "u" && Zo(this, ni, Ft(this, Ec, Pd).call(this)), ut(this, ni));
}, Ec = /* @__PURE__ */ new WeakSet(), Pd = async function() {
  Zo(this, Rt, await Iu.init({ metadata: ut(this, Kn).metadata, projectId: ut(this, Kn).projectId, relayUrl: ut(this, Kn).relayUrl }));
  const t = await ut(this, Rt).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", t);
  } catch {
    console.info("Unable to set client id");
  }
};
const Tu = [
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
], Ia = ["aleo:1"], Cu = ["chainChanged", "accountSelected", "selectedAccountSynced", "sharedAccountSynced"], wE = "f0aaeffe71b636da453fce042d79d723", EE = {
  standaloneChains: Ia,
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
}, G6 = {
  requiredNamespaces: {
    aleo: {
      methods: Tu,
      chains: Ia,
      events: Cu
    }
  }
}, SE = "@puzzlehq/sdk-core", xE = "Puzzle SDK", IE = "0.2.18", OE = "Your portal to privacy", TE = "./dist/puzzle.cjs.js", CE = "./dist/puzzle.es.js", NE = "./dist/puzzle.umd.js", PE = "./dist/types/index.d.ts", kE = {
  ".": {
    import: "./dist/puzzle.es.js",
    require: "./dist/puzzle.cjs.js",
    browser: "./dist/puzzle.umd.js",
    types: "./dist/types/index.d.ts"
  }
}, RE = "module", AE = {
  "fetch-fix": "find dist -type f \\( -name '*.js' -o -name '*.cjs' \\) -exec sed -i '' 's/self.fetch[[:space:]]*||/fetch ||/g' {} \\;",
  "ws-fix": `find ./dist -type f -name 'index*' -exec sed -i '' -e 's/require(\\"ws\\")/(() => {try { return require(\\"ws\\") } catch (e) { } })()/g' {} +;`,
  build: "vite build && tsc --declaration --emitDeclarationOnly --outDir dist/types && pnpm fetch-fix && pnpm ws-fix",
  "type-check": "tsc --noEmit"
}, jE = {
  type: "git",
  url: "git+https://github.com/puzzlehq/puzzle-sdk.git"
}, LE = {
  "@puzzlehq/types": "1.0.11",
  "@walletconnect/modal-sign-html": "^2.6.2",
  "@walletconnect/types": "^2.11.2",
  "@walletconnect/utils": "^2.11.2",
  debug: "^4.3.4",
  events: "^3.3.0"
}, UE = {
  buffer: "^6.0.3"
}, ME = [
  "puzzle",
  "html",
  "aleo",
  "web3",
  "crypto"
], DE = "Puzzle", zE = "ISC", $E = {
  url: "https://github.com/puzzlehq/puzzle-sdk/issues"
}, VE = "https://github.com/puzzlehq/puzzle-sdk#readme", kd = {
  name: SE,
  displayName: xE,
  version: IE,
  description: OE,
  main: TE,
  module: CE,
  browser: NE,
  types: PE,
  private: !1,
  exports: kE,
  type: RE,
  scripts: AE,
  repository: jE,
  dependencies: LE,
  peerDependencies: UE,
  keywords: ME,
  author: DE,
  license: zE,
  bugs: $E,
  homepage: VE
}, ZE = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } };
function xf(t, e) {
  const { message: r, code: n } = ZE[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
const Oa = new iu();
let bs;
async function qE(t) {
  let e = !1;
  const r = kd.version, n = localStorage.getItem("puzzle_sdk_version");
  if (r !== n && (console.log(`${kd.name}: Updated from ` + n + " to " + r + "!"), localStorage.setItem("puzzle_sdk_version", r), e = !0), bs = new bE({
    projectId: wE,
    metadata: {
      name: t.dAppName,
      description: t.dAppDescription,
      url: t.dAppUrl,
      icons: [t.dAppIconURL]
    },
    modalOptions: { ...EE }
  }), e)
    try {
      FE(bs, t.onDisconnect);
    } catch (s) {
      console.error(s);
    }
  window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
}
async function FE(t, e) {
  const r = await (t == null ? void 0 : t.getSession());
  r && (console.log("Disconnecting session", r), e && e(), t.disconnect({
    topic: r.topic,
    reason: xf("USER_DISCONNECTED")
  }));
}
async function dr() {
  return new Promise((t) => {
    if (bs)
      t(bs);
    else {
      const e = setInterval(() => {
        bs && (clearInterval(e), t(bs));
      }, 200);
    }
    window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
  });
}
const Y6 = async () => {
  const t = await dr(), e = await t.getSession();
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
    const n = r.message;
    return console.error("getAccount error", n), { error: n };
  }
}, Q6 = async ({ address: t }) => {
  const e = await dr(), r = await e.getSession();
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
}, J6 = async () => {
  const t = await dr();
  if (!t)
    throw new Error("call setConnection() first!");
  const e = await t.getSession();
  if (e)
    return console.log("Already connected!", e), e;
  try {
    const r = await t.connect({
      requiredNamespaces: {
        aleo: {
          methods: Tu,
          chains: Ia,
          events: Cu
        }
      }
    });
    return Oa.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), r;
  } catch (r) {
    console.error("connect error", r.message);
  }
}, X6 = async (t) => {
  const e = await dr(), r = await (e == null ? void 0 : e.getSession());
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
}, eI = async () => {
  const t = await dr(), e = await (t == null ? void 0 : t.getSession());
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
}, tI = async (t) => {
  const e = await dr(), r = await (e == null ? void 0 : e.getSession());
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
}, rI = async () => {
  const t = await dr(), e = await (t == null ? void 0 : t.getSession());
  if (!e || !t)
    return { error: "no session or connection" };
  try {
    try {
      await t.disconnect({
        reason: xf("USER_DISCONNECTED"),
        topic: e.topic
      }), Oa.emit("session_change");
    } catch (r) {
      console.warn(r);
    }
    return {};
  } catch (r) {
    const n = r.message;
    return console.error("error disconnecting", n), { error: n };
  }
}, nI = async ({
  id: t,
  address: e
}) => {
  const r = await dr(), n = await (r == null ? void 0 : r.getSession());
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
}, sI = async (t) => {
  const e = await dr(), r = await (e == null ? void 0 : e.getSession());
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
}, iI = async (t) => {
  const e = await dr(), r = await (e == null ? void 0 : e.getSession());
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
}, oI = async ({
  address: t,
  filter: e,
  page: r = 0
}) => {
  const n = await dr(), s = await (n == null ? void 0 : n.getSession());
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
})(Qe || (Qe = {}));
var Sc;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(Sc || (Sc = {}));
const te = Qe.arrayToEnum([
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
]), xn = (t) => {
  switch (typeof t) {
    case "undefined":
      return te.undefined;
    case "string":
      return te.string;
    case "number":
      return isNaN(t) ? te.nan : te.number;
    case "boolean":
      return te.boolean;
    case "function":
      return te.function;
    case "bigint":
      return te.bigint;
    case "symbol":
      return te.symbol;
    case "object":
      return Array.isArray(t) ? te.array : t === null ? te.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? te.promise : typeof Map < "u" && t instanceof Map ? te.map : typeof Set < "u" && t instanceof Set ? te.set : typeof Date < "u" && t instanceof Date ? te.date : te.object;
    default:
      return te.unknown;
  }
}, B = Qe.arrayToEnum([
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
]), KE = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class Pr extends Error {
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
          let o = n, c = 0;
          for (; c < a.path.length; ) {
            const u = a.path[c];
            c === a.path.length - 1 ? (o[u] = o[u] || { _errors: [] }, o[u]._errors.push(r(a))) : o[u] = o[u] || { _errors: [] }, o = o[u], c++;
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
Pr.create = (t) => new Pr(t);
const pi = (t, e) => {
  let r;
  switch (t.code) {
    case B.invalid_type:
      t.received === te.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
      break;
    case B.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(t.expected, Qe.jsonStringifyReplacer)}`;
      break;
    case B.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${Qe.joinValues(t.keys, ", ")}`;
      break;
    case B.invalid_union:
      r = "Invalid input";
      break;
    case B.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${Qe.joinValues(t.options)}`;
      break;
    case B.invalid_enum_value:
      r = `Invalid enum value. Expected ${Qe.joinValues(t.options)}, received '${t.received}'`;
      break;
    case B.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case B.invalid_return_type:
      r = "Invalid function return type";
      break;
    case B.invalid_date:
      r = "Invalid date";
      break;
    case B.invalid_string:
      typeof t.validation == "object" ? "includes" in t.validation ? (r = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : Qe.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
      break;
    case B.too_small:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : r = "Invalid input";
      break;
    case B.too_big:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? r = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : r = "Invalid input";
      break;
    case B.custom:
      r = "Invalid input";
      break;
    case B.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case B.not_multiple_of:
      r = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case B.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = e.defaultError, Qe.assertNever(t);
  }
  return { message: r };
};
let If = pi;
function BE(t) {
  If = t;
}
function qo() {
  return If;
}
const Fo = (t) => {
  const { data: e, path: r, errorMaps: n, issueData: s } = t, i = [...r, ...s.path || []], a = {
    ...s,
    path: i
  };
  let o = "";
  const c = n.filter((u) => !!u).slice().reverse();
  for (const u of c)
    o = u(a, { data: e, defaultError: o }).message;
  return {
    ...s,
    path: i,
    message: s.message || o
  };
}, HE = [];
function se(t, e) {
  const r = Fo({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      qo(),
      pi
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
    for (const s of r) {
      if (s.status === "aborted")
        return be;
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
    return Gt.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, r) {
    const n = {};
    for (const s of r) {
      const { key: i, value: a } = s;
      if (i.status === "aborted" || a.status === "aborted")
        return be;
      i.status === "dirty" && e.dirty(), a.status === "dirty" && e.dirty(), (typeof a.value < "u" || s.alwaysSet) && (n[i.value] = a.value);
    }
    return { status: e.value, value: n };
  }
}
const be = Object.freeze({
  status: "aborted"
}), Of = (t) => ({ status: "dirty", value: t }), nr = (t) => ({ status: "valid", value: t }), xc = (t) => t.status === "aborted", Ic = (t) => t.status === "dirty", Ko = (t) => t.status === "valid", Bo = (t) => typeof Promise < "u" && t instanceof Promise;
var ce;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(ce || (ce = {}));
class Gr {
  constructor(e, r, n, s) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = n, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Rd = (t, e) => {
  if (Ko(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new Pr(t.common.issues);
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
  return e ? { errorMap: e, description: s } : { errorMap: (i, a) => i.code !== "invalid_type" ? { message: a.defaultError } : typeof a.data > "u" ? { message: n ?? a.defaultError } : { message: r ?? a.defaultError }, description: s };
}
class Re {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return xn(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || {
      common: e.parent.common,
      data: e.data,
      parsedType: xn(e.data),
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
        parsedType: xn(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const r = this._parse(e);
    if (Bo(r))
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
      parsedType: xn(e)
    }, i = this._parseSync({ data: e, path: s.path, parent: s });
    return Rd(s, i);
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
      parsedType: xn(e)
    }, s = this._parse({ data: e, path: n.path, parent: n }), i = await (Bo(s) ? s : Promise.resolve(s));
    return Rd(n, i);
  }
  refine(e, r) {
    const n = (s) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(s) : r;
    return this._refinement((s, i) => {
      const a = e(s), o = () => i.addIssue({
        code: B.custom,
        ...n(s)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((c) => c ? !0 : (o(), !1)) : a ? !0 : (o(), !1);
    });
  }
  refinement(e, r) {
    return this._refinement((n, s) => e(n) ? !0 : (s.addIssue(typeof r == "function" ? r(n, s) : r), !1));
  }
  _refinement(e) {
    return new Lr({
      schema: this,
      typeName: pe.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return un.create(this, this._def);
  }
  nullable() {
    return ts.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return kr.create(this, this._def);
  }
  promise() {
    return js.create(this, this._def);
  }
  or(e) {
    return vi.create([this, e], this._def);
  }
  and(e) {
    return _i.create(this, e, this._def);
  }
  transform(e) {
    return new Lr({
      ...xe(this._def),
      schema: this,
      typeName: pe.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new xi({
      ...xe(this._def),
      innerType: this,
      defaultValue: r,
      typeName: pe.ZodDefault
    });
  }
  brand() {
    return new Cf({
      typeName: pe.ZodBranded,
      type: this,
      ...xe(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Yo({
      ...xe(this._def),
      innerType: this,
      catchValue: r,
      typeName: pe.ZodCatch
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
    return no.create(this, e);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const WE = /^c[^\s-]{8,}$/i, GE = /^[a-z][a-z0-9]*$/, YE = /[0-9A-HJKMNP-TV-Z]{26}/, QE = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, JE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, XE = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u"), e5 = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, t5 = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, r5 = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function n5(t, e) {
  return !!((e === "v4" || !e) && e5.test(t) || (e === "v6" || !e) && t5.test(t));
}
class Cr extends Re {
  constructor() {
    super(...arguments), this._regex = (e, r, n) => this.refinement((s) => e.test(s), {
      validation: r,
      code: B.invalid_string,
      ...ce.errToObj(n)
    }), this.nonempty = (e) => this.min(1, ce.errToObj(e)), this.trim = () => new Cr({
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
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== te.string) {
      const s = this._getOrReturnCtx(e);
      return se(
        s,
        {
          code: B.invalid_type,
          expected: te.string,
          received: s.parsedType
        }
        //
      ), be;
    }
    const r = new Gt();
    let n;
    for (const s of this._def.checks)
      if (s.kind === "min")
        e.data.length < s.value && (n = this._getOrReturnCtx(e, n), se(n, {
          code: B.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), r.dirty());
      else if (s.kind === "max")
        e.data.length > s.value && (n = this._getOrReturnCtx(e, n), se(n, {
          code: B.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), r.dirty());
      else if (s.kind === "length") {
        const i = e.data.length > s.value, a = e.data.length < s.value;
        (i || a) && (n = this._getOrReturnCtx(e, n), i ? se(n, {
          code: B.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : a && se(n, {
          code: B.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), r.dirty());
      } else if (s.kind === "email")
        JE.test(e.data) || (n = this._getOrReturnCtx(e, n), se(n, {
          validation: "email",
          code: B.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "emoji")
        XE.test(e.data) || (n = this._getOrReturnCtx(e, n), se(n, {
          validation: "emoji",
          code: B.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "uuid")
        QE.test(e.data) || (n = this._getOrReturnCtx(e, n), se(n, {
          validation: "uuid",
          code: B.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "cuid")
        WE.test(e.data) || (n = this._getOrReturnCtx(e, n), se(n, {
          validation: "cuid",
          code: B.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "cuid2")
        GE.test(e.data) || (n = this._getOrReturnCtx(e, n), se(n, {
          validation: "cuid2",
          code: B.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "ulid")
        YE.test(e.data) || (n = this._getOrReturnCtx(e, n), se(n, {
          validation: "ulid",
          code: B.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "url")
        try {
          new URL(e.data);
        } catch {
          n = this._getOrReturnCtx(e, n), se(n, {
            validation: "url",
            code: B.invalid_string,
            message: s.message
          }), r.dirty();
        }
      else
        s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(e.data) || (n = this._getOrReturnCtx(e, n), se(n, {
          validation: "regex",
          code: B.invalid_string,
          message: s.message
        }), r.dirty())) : s.kind === "trim" ? e.data = e.data.trim() : s.kind === "includes" ? e.data.includes(s.value, s.position) || (n = this._getOrReturnCtx(e, n), se(n, {
          code: B.invalid_string,
          validation: { includes: s.value, position: s.position },
          message: s.message
        }), r.dirty()) : s.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : s.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : s.kind === "startsWith" ? e.data.startsWith(s.value) || (n = this._getOrReturnCtx(e, n), se(n, {
          code: B.invalid_string,
          validation: { startsWith: s.value },
          message: s.message
        }), r.dirty()) : s.kind === "endsWith" ? e.data.endsWith(s.value) || (n = this._getOrReturnCtx(e, n), se(n, {
          code: B.invalid_string,
          validation: { endsWith: s.value },
          message: s.message
        }), r.dirty()) : s.kind === "datetime" ? r5(s).test(e.data) || (n = this._getOrReturnCtx(e, n), se(n, {
          code: B.invalid_string,
          validation: "datetime",
          message: s.message
        }), r.dirty()) : s.kind === "ip" ? n5(e.data, s.version) || (n = this._getOrReturnCtx(e, n), se(n, {
          validation: "ip",
          code: B.invalid_string,
          message: s.message
        }), r.dirty()) : Qe.assertNever(s);
    return { status: r.value, value: e.data };
  }
  _addCheck(e) {
    return new Cr({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...ce.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...ce.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...ce.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...ce.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...ce.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...ce.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...ce.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...ce.errToObj(e) });
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
      ...ce.errToObj(e == null ? void 0 : e.message)
    });
  }
  regex(e, r) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...ce.errToObj(r)
    });
  }
  includes(e, r) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: r == null ? void 0 : r.position,
      ...ce.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(e, r) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...ce.errToObj(r)
    });
  }
  endsWith(e, r) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...ce.errToObj(r)
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...ce.errToObj(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...ce.errToObj(r)
    });
  }
  length(e, r) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...ce.errToObj(r)
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
    typeName: pe.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...xe(t)
  });
};
function s5(t, e) {
  const r = (t.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, s = r > n ? r : n, i = parseInt(t.toFixed(s).replace(".", "")), a = parseInt(e.toFixed(s).replace(".", ""));
  return i % a / Math.pow(10, s);
}
class Nn extends Re {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== te.number) {
      const s = this._getOrReturnCtx(e);
      return se(s, {
        code: B.invalid_type,
        expected: te.number,
        received: s.parsedType
      }), be;
    }
    let r;
    const n = new Gt();
    for (const s of this._def.checks)
      s.kind === "int" ? Qe.isInteger(e.data) || (r = this._getOrReturnCtx(e, r), se(r, {
        code: B.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), n.dirty()) : s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (r = this._getOrReturnCtx(e, r), se(r, {
        code: B.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), n.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (r = this._getOrReturnCtx(e, r), se(r, {
        code: B.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), n.dirty()) : s.kind === "multipleOf" ? s5(e.data, s.value) !== 0 && (r = this._getOrReturnCtx(e, r), se(r, {
        code: B.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), n.dirty()) : s.kind === "finite" ? Number.isFinite(e.data) || (r = this._getOrReturnCtx(e, r), se(r, {
        code: B.not_finite,
        message: s.message
      }), n.dirty()) : Qe.assertNever(s);
    return { status: n.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, ce.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, ce.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, ce.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, ce.toString(r));
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
          message: ce.toString(s)
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
  int(e) {
    return this._addCheck({
      kind: "int",
      message: ce.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: ce.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: ce.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: ce.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: ce.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: ce.toString(r)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: ce.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: ce.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: ce.toString(e)
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
Nn.create = (t) => new Nn({
  checks: [],
  typeName: pe.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...xe(t)
});
class Pn extends Re {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== te.bigint) {
      const s = this._getOrReturnCtx(e);
      return se(s, {
        code: B.invalid_type,
        expected: te.bigint,
        received: s.parsedType
      }), be;
    }
    let r;
    const n = new Gt();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (r = this._getOrReturnCtx(e, r), se(r, {
        code: B.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), n.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (r = this._getOrReturnCtx(e, r), se(r, {
        code: B.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), n.dirty()) : s.kind === "multipleOf" ? e.data % s.value !== BigInt(0) && (r = this._getOrReturnCtx(e, r), se(r, {
        code: B.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), n.dirty()) : Qe.assertNever(s);
    return { status: n.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, ce.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, ce.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, ce.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, ce.toString(r));
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
          message: ce.toString(s)
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
      message: ce.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: ce.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: ce.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: ce.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: ce.toString(r)
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
    typeName: pe.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...xe(t)
  });
};
class gi extends Re {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== te.boolean) {
      const r = this._getOrReturnCtx(e);
      return se(r, {
        code: B.invalid_type,
        expected: te.boolean,
        received: r.parsedType
      }), be;
    }
    return nr(e.data);
  }
}
gi.create = (t) => new gi({
  typeName: pe.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...xe(t)
});
class Xn extends Re {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== te.date) {
      const s = this._getOrReturnCtx(e);
      return se(s, {
        code: B.invalid_type,
        expected: te.date,
        received: s.parsedType
      }), be;
    }
    if (isNaN(e.data.getTime())) {
      const s = this._getOrReturnCtx(e);
      return se(s, {
        code: B.invalid_date
      }), be;
    }
    const r = new Gt();
    let n;
    for (const s of this._def.checks)
      s.kind === "min" ? e.data.getTime() < s.value && (n = this._getOrReturnCtx(e, n), se(n, {
        code: B.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), r.dirty()) : s.kind === "max" ? e.data.getTime() > s.value && (n = this._getOrReturnCtx(e, n), se(n, {
        code: B.too_big,
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
    return new Xn({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: ce.toString(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: ce.toString(r)
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
  typeName: pe.ZodDate,
  ...xe(t)
});
class Ho extends Re {
  _parse(e) {
    if (this._getType(e) !== te.symbol) {
      const r = this._getOrReturnCtx(e);
      return se(r, {
        code: B.invalid_type,
        expected: te.symbol,
        received: r.parsedType
      }), be;
    }
    return nr(e.data);
  }
}
Ho.create = (t) => new Ho({
  typeName: pe.ZodSymbol,
  ...xe(t)
});
class yi extends Re {
  _parse(e) {
    if (this._getType(e) !== te.undefined) {
      const r = this._getOrReturnCtx(e);
      return se(r, {
        code: B.invalid_type,
        expected: te.undefined,
        received: r.parsedType
      }), be;
    }
    return nr(e.data);
  }
}
yi.create = (t) => new yi({
  typeName: pe.ZodUndefined,
  ...xe(t)
});
class mi extends Re {
  _parse(e) {
    if (this._getType(e) !== te.null) {
      const r = this._getOrReturnCtx(e);
      return se(r, {
        code: B.invalid_type,
        expected: te.null,
        received: r.parsedType
      }), be;
    }
    return nr(e.data);
  }
}
mi.create = (t) => new mi({
  typeName: pe.ZodNull,
  ...xe(t)
});
class As extends Re {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return nr(e.data);
  }
}
As.create = (t) => new As({
  typeName: pe.ZodAny,
  ...xe(t)
});
class Gn extends Re {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return nr(e.data);
  }
}
Gn.create = (t) => new Gn({
  typeName: pe.ZodUnknown,
  ...xe(t)
});
class fn extends Re {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return se(r, {
      code: B.invalid_type,
      expected: te.never,
      received: r.parsedType
    }), be;
  }
}
fn.create = (t) => new fn({
  typeName: pe.ZodNever,
  ...xe(t)
});
class Wo extends Re {
  _parse(e) {
    if (this._getType(e) !== te.undefined) {
      const r = this._getOrReturnCtx(e);
      return se(r, {
        code: B.invalid_type,
        expected: te.void,
        received: r.parsedType
      }), be;
    }
    return nr(e.data);
  }
}
Wo.create = (t) => new Wo({
  typeName: pe.ZodVoid,
  ...xe(t)
});
class kr extends Re {
  _parse(e) {
    const { ctx: r, status: n } = this._processInputParams(e), s = this._def;
    if (r.parsedType !== te.array)
      return se(r, {
        code: B.invalid_type,
        expected: te.array,
        received: r.parsedType
      }), be;
    if (s.exactLength !== null) {
      const a = r.data.length > s.exactLength.value, o = r.data.length < s.exactLength.value;
      (a || o) && (se(r, {
        code: a ? B.too_big : B.too_small,
        minimum: o ? s.exactLength.value : void 0,
        maximum: a ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), n.dirty());
    }
    if (s.minLength !== null && r.data.length < s.minLength.value && (se(r, {
      code: B.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), n.dirty()), s.maxLength !== null && r.data.length > s.maxLength.value && (se(r, {
      code: B.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((a, o) => s.type._parseAsync(new Gr(r, a, r.path, o)))).then((a) => Gt.mergeArray(n, a));
    const i = [...r.data].map((a, o) => s.type._parseSync(new Gr(r, a, r.path, o)));
    return Gt.mergeArray(n, i);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new kr({
      ...this._def,
      minLength: { value: e, message: ce.toString(r) }
    });
  }
  max(e, r) {
    return new kr({
      ...this._def,
      maxLength: { value: e, message: ce.toString(r) }
    });
  }
  length(e, r) {
    return new kr({
      ...this._def,
      exactLength: { value: e, message: ce.toString(r) }
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
  typeName: pe.ZodArray,
  ...xe(e)
});
function vs(t) {
  if (t instanceof ft) {
    const e = {};
    for (const r in t.shape) {
      const n = t.shape[r];
      e[r] = un.create(vs(n));
    }
    return new ft({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof kr ? new kr({
      ...t._def,
      type: vs(t.element)
    }) : t instanceof un ? un.create(vs(t.unwrap())) : t instanceof ts ? ts.create(vs(t.unwrap())) : t instanceof Yr ? Yr.create(t.items.map((e) => vs(e))) : t;
}
class ft extends Re {
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
    if (this._getType(e) !== te.object) {
      const c = this._getOrReturnCtx(e);
      return se(c, {
        code: B.invalid_type,
        expected: te.object,
        received: c.parsedType
      }), be;
    }
    const { status: r, ctx: n } = this._processInputParams(e), { shape: s, keys: i } = this._getCached(), a = [];
    if (!(this._def.catchall instanceof fn && this._def.unknownKeys === "strip"))
      for (const c in n.data)
        i.includes(c) || a.push(c);
    const o = [];
    for (const c of i) {
      const u = s[c], d = n.data[c];
      o.push({
        key: { status: "valid", value: c },
        value: u._parse(new Gr(n, d, n.path, c)),
        alwaysSet: c in n.data
      });
    }
    if (this._def.catchall instanceof fn) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const u of a)
          o.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: n.data[u] }
          });
      else if (c === "strict")
        a.length > 0 && (se(n, {
          code: B.unrecognized_keys,
          keys: a
        }), r.dirty());
      else if (c !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const u of a) {
        const d = n.data[u];
        o.push({
          key: { status: "valid", value: u },
          value: c._parse(
            new Gr(n, d, n.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in n.data
        });
      }
    }
    return n.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const u of o) {
        const d = await u.key;
        c.push({
          key: d,
          value: await u.value,
          alwaysSet: u.alwaysSet
        });
      }
      return c;
    }).then((c) => Gt.mergeObjectSync(r, c)) : Gt.mergeObjectSync(r, o);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return ce.errToObj, new ft({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (r, n) => {
          var s, i, a, o;
          const c = (a = (i = (s = this._def).errorMap) === null || i === void 0 ? void 0 : i.call(s, r, n).message) !== null && a !== void 0 ? a : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (o = ce.errToObj(e).message) !== null && o !== void 0 ? o : c
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
      typeName: pe.ZodObject
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
    return Qe.objectKeys(e).forEach((n) => {
      e[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new ft({
      ...this._def,
      shape: () => r
    });
  }
  omit(e) {
    const r = {};
    return Qe.objectKeys(this.shape).forEach((n) => {
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
    return vs(this);
  }
  partial(e) {
    const r = {};
    return Qe.objectKeys(this.shape).forEach((n) => {
      const s = this.shape[n];
      e && !e[n] ? r[n] = s : r[n] = s.optional();
    }), new ft({
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
        for (; s instanceof un; )
          s = s._def.innerType;
        r[n] = s;
      }
    }), new ft({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return Tf(Qe.objectKeys(this.shape));
  }
}
ft.create = (t, e) => new ft({
  shape: () => t,
  unknownKeys: "strip",
  catchall: fn.create(),
  typeName: pe.ZodObject,
  ...xe(e)
});
ft.strictCreate = (t, e) => new ft({
  shape: () => t,
  unknownKeys: "strict",
  catchall: fn.create(),
  typeName: pe.ZodObject,
  ...xe(e)
});
ft.lazycreate = (t, e) => new ft({
  shape: t,
  unknownKeys: "strip",
  catchall: fn.create(),
  typeName: pe.ZodObject,
  ...xe(e)
});
class vi extends Re {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = this._def.options;
    function s(i) {
      for (const o of i)
        if (o.result.status === "valid")
          return o.result;
      for (const o of i)
        if (o.result.status === "dirty")
          return r.common.issues.push(...o.ctx.common.issues), o.result;
      const a = i.map((o) => new Pr(o.ctx.common.issues));
      return se(r, {
        code: B.invalid_union,
        unionErrors: a
      }), be;
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
      for (const c of n) {
        const u = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, d = c._parseSync({
          data: r.data,
          path: r.path,
          parent: u
        });
        if (d.status === "valid")
          return d;
        d.status === "dirty" && !i && (i = { result: d, ctx: u }), u.common.issues.length && a.push(u.common.issues);
      }
      if (i)
        return r.common.issues.push(...i.ctx.common.issues), i.result;
      const o = a.map((c) => new Pr(c));
      return se(r, {
        code: B.invalid_union,
        unionErrors: o
      }), be;
    }
  }
  get options() {
    return this._def.options;
  }
}
vi.create = (t, e) => new vi({
  options: t,
  typeName: pe.ZodUnion,
  ...xe(e)
});
const Ro = (t) => t instanceof wi ? Ro(t.schema) : t instanceof Lr ? Ro(t.innerType()) : t instanceof Ei ? [t.value] : t instanceof kn ? t.options : t instanceof Si ? Object.keys(t.enum) : t instanceof xi ? Ro(t._def.innerType) : t instanceof yi ? [void 0] : t instanceof mi ? [null] : null;
class Ta extends Re {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== te.object)
      return se(r, {
        code: B.invalid_type,
        expected: te.object,
        received: r.parsedType
      }), be;
    const n = this.discriminator, s = r.data[n], i = this.optionsMap.get(s);
    return i ? r.common.async ? i._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : i._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (se(r, {
      code: B.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), be);
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
      const a = Ro(i.shape[e]);
      if (!a)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const o of a) {
        if (s.has(o))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        s.set(o, i);
      }
    }
    return new Ta({
      typeName: pe.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: s,
      ...xe(n)
    });
  }
}
function Oc(t, e) {
  const r = xn(t), n = xn(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === te.object && n === te.object) {
    const s = Qe.objectKeys(e), i = Qe.objectKeys(t).filter((o) => s.indexOf(o) !== -1), a = { ...t, ...e };
    for (const o of i) {
      const c = Oc(t[o], e[o]);
      if (!c.valid)
        return { valid: !1 };
      a[o] = c.data;
    }
    return { valid: !0, data: a };
  } else if (r === te.array && n === te.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const s = [];
    for (let i = 0; i < t.length; i++) {
      const a = t[i], o = e[i], c = Oc(a, o);
      if (!c.valid)
        return { valid: !1 };
      s.push(c.data);
    }
    return { valid: !0, data: s };
  } else
    return r === te.date && n === te.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class _i extends Re {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), s = (i, a) => {
      if (xc(i) || xc(a))
        return be;
      const o = Oc(i.value, a.value);
      return o.valid ? ((Ic(i) || Ic(a)) && r.dirty(), { status: r.value, value: o.data }) : (se(n, {
        code: B.invalid_intersection_types
      }), be);
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
_i.create = (t, e, r) => new _i({
  left: t,
  right: e,
  typeName: pe.ZodIntersection,
  ...xe(r)
});
class Yr extends Re {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== te.array)
      return se(n, {
        code: B.invalid_type,
        expected: te.array,
        received: n.parsedType
      }), be;
    if (n.data.length < this._def.items.length)
      return se(n, {
        code: B.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), be;
    !this._def.rest && n.data.length > this._def.items.length && (se(n, {
      code: B.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const s = [...n.data].map((i, a) => {
      const o = this._def.items[a] || this._def.rest;
      return o ? o._parse(new Gr(n, i, n.path, a)) : null;
    }).filter((i) => !!i);
    return n.common.async ? Promise.all(s).then((i) => Gt.mergeArray(r, i)) : Gt.mergeArray(r, s);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new Yr({
      ...this._def,
      rest: e
    });
  }
}
Yr.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Yr({
    items: t,
    typeName: pe.ZodTuple,
    rest: null,
    ...xe(e)
  });
};
class bi extends Re {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== te.object)
      return se(n, {
        code: B.invalid_type,
        expected: te.object,
        received: n.parsedType
      }), be;
    const s = [], i = this._def.keyType, a = this._def.valueType;
    for (const o in n.data)
      s.push({
        key: i._parse(new Gr(n, o, n.path, o)),
        value: a._parse(new Gr(n, n.data[o], n.path, o))
      });
    return n.common.async ? Gt.mergeObjectAsync(r, s) : Gt.mergeObjectSync(r, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, n) {
    return r instanceof Re ? new bi({
      keyType: e,
      valueType: r,
      typeName: pe.ZodRecord,
      ...xe(n)
    }) : new bi({
      keyType: Cr.create(),
      valueType: e,
      typeName: pe.ZodRecord,
      ...xe(r)
    });
  }
}
class Go extends Re {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== te.map)
      return se(n, {
        code: B.invalid_type,
        expected: te.map,
        received: n.parsedType
      }), be;
    const s = this._def.keyType, i = this._def.valueType, a = [...n.data.entries()].map(([o, c], u) => ({
      key: s._parse(new Gr(n, o, n.path, [u, "key"])),
      value: i._parse(new Gr(n, c, n.path, [u, "value"]))
    }));
    if (n.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of a) {
          const u = await c.key, d = await c.value;
          if (u.status === "aborted" || d.status === "aborted")
            return be;
          (u.status === "dirty" || d.status === "dirty") && r.dirty(), o.set(u.value, d.value);
        }
        return { status: r.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const c of a) {
        const u = c.key, d = c.value;
        if (u.status === "aborted" || d.status === "aborted")
          return be;
        (u.status === "dirty" || d.status === "dirty") && r.dirty(), o.set(u.value, d.value);
      }
      return { status: r.value, value: o };
    }
  }
}
Go.create = (t, e, r) => new Go({
  valueType: e,
  keyType: t,
  typeName: pe.ZodMap,
  ...xe(r)
});
class es extends Re {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== te.set)
      return se(n, {
        code: B.invalid_type,
        expected: te.set,
        received: n.parsedType
      }), be;
    const s = this._def;
    s.minSize !== null && n.data.size < s.minSize.value && (se(n, {
      code: B.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), r.dirty()), s.maxSize !== null && n.data.size > s.maxSize.value && (se(n, {
      code: B.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), r.dirty());
    const i = this._def.valueType;
    function a(c) {
      const u = /* @__PURE__ */ new Set();
      for (const d of c) {
        if (d.status === "aborted")
          return be;
        d.status === "dirty" && r.dirty(), u.add(d.value);
      }
      return { status: r.value, value: u };
    }
    const o = [...n.data.values()].map((c, u) => i._parse(new Gr(n, c, n.path, u)));
    return n.common.async ? Promise.all(o).then((c) => a(c)) : a(o);
  }
  min(e, r) {
    return new es({
      ...this._def,
      minSize: { value: e, message: ce.toString(r) }
    });
  }
  max(e, r) {
    return new es({
      ...this._def,
      maxSize: { value: e, message: ce.toString(r) }
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
  typeName: pe.ZodSet,
  ...xe(e)
});
class xs extends Re {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== te.function)
      return se(r, {
        code: B.invalid_type,
        expected: te.function,
        received: r.parsedType
      }), be;
    function n(o, c) {
      return Fo({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          qo(),
          pi
        ].filter((u) => !!u),
        issueData: {
          code: B.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function s(o, c) {
      return Fo({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          qo(),
          pi
        ].filter((u) => !!u),
        issueData: {
          code: B.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const i = { errorMap: r.common.contextualErrorMap }, a = r.data;
    return this._def.returns instanceof js ? nr(async (...o) => {
      const c = new Pr([]), u = await this._def.args.parseAsync(o, i).catch((f) => {
        throw c.addIssue(n(o, f)), c;
      }), d = await a(...u);
      return await this._def.returns._def.type.parseAsync(d, i).catch((f) => {
        throw c.addIssue(s(d, f)), c;
      });
    }) : nr((...o) => {
      const c = this._def.args.safeParse(o, i);
      if (!c.success)
        throw new Pr([n(o, c.error)]);
      const u = a(...c.data), d = this._def.returns.safeParse(u, i);
      if (!d.success)
        throw new Pr([s(u, d.error)]);
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
    return new xs({
      ...this._def,
      args: Yr.create(e).rest(Gn.create())
    });
  }
  returns(e) {
    return new xs({
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
    return new xs({
      args: e || Yr.create([]).rest(Gn.create()),
      returns: r || Gn.create(),
      typeName: pe.ZodFunction,
      ...xe(n)
    });
  }
}
class wi extends Re {
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
  typeName: pe.ZodLazy,
  ...xe(e)
});
class Ei extends Re {
  _parse(e) {
    if (e.data !== this._def.value) {
      const r = this._getOrReturnCtx(e);
      return se(r, {
        received: r.data,
        code: B.invalid_literal,
        expected: this._def.value
      }), be;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Ei.create = (t, e) => new Ei({
  value: t,
  typeName: pe.ZodLiteral,
  ...xe(e)
});
function Tf(t, e) {
  return new kn({
    values: t,
    typeName: pe.ZodEnum,
    ...xe(e)
  });
}
class kn extends Re {
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return se(r, {
        expected: Qe.joinValues(n),
        received: r.parsedType,
        code: B.invalid_type
      }), be;
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return se(r, {
        received: r.data,
        code: B.invalid_enum_value,
        options: n
      }), be;
    }
    return nr(e.data);
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
kn.create = Tf;
class Si extends Re {
  _parse(e) {
    const r = Qe.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== te.string && n.parsedType !== te.number) {
      const s = Qe.objectValues(r);
      return se(n, {
        expected: Qe.joinValues(s),
        received: n.parsedType,
        code: B.invalid_type
      }), be;
    }
    if (r.indexOf(e.data) === -1) {
      const s = Qe.objectValues(r);
      return se(n, {
        received: n.data,
        code: B.invalid_enum_value,
        options: s
      }), be;
    }
    return nr(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
Si.create = (t, e) => new Si({
  values: t,
  typeName: pe.ZodNativeEnum,
  ...xe(e)
});
class js extends Re {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== te.promise && r.common.async === !1)
      return se(r, {
        code: B.invalid_type,
        expected: te.promise,
        received: r.parsedType
      }), be;
    const n = r.parsedType === te.promise ? r.data : Promise.resolve(r.data);
    return nr(n.then((s) => this._def.type.parseAsync(s, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
js.create = (t, e) => new js({
  type: t,
  typeName: pe.ZodPromise,
  ...xe(e)
});
class Lr extends Re {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === pe.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
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
        se(n, a), a.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (i.addIssue = i.addIssue.bind(i), s.type === "refinement") {
      const a = (o) => {
        const c = s.refinement(o, i);
        if (n.common.async)
          return Promise.resolve(c);
        if (c instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return o.status === "aborted" ? be : (o.status === "dirty" && r.dirty(), a(o.value), { status: r.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => o.status === "aborted" ? be : (o.status === "dirty" && r.dirty(), a(o.value).then(() => ({ status: r.value, value: o.value }))));
    }
    if (s.type === "transform")
      if (n.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!Ko(a))
          return a;
        const o = s.transform(a.value, i);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => Ko(a) ? Promise.resolve(s.transform(a.value, i)).then((o) => ({ status: r.value, value: o })) : a);
    Qe.assertNever(s);
  }
}
Lr.create = (t, e, r) => new Lr({
  schema: t,
  typeName: pe.ZodEffects,
  effect: e,
  ...xe(r)
});
Lr.createWithPreprocess = (t, e, r) => new Lr({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: pe.ZodEffects,
  ...xe(r)
});
class un extends Re {
  _parse(e) {
    return this._getType(e) === te.undefined ? nr(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
un.create = (t, e) => new un({
  innerType: t,
  typeName: pe.ZodOptional,
  ...xe(e)
});
class ts extends Re {
  _parse(e) {
    return this._getType(e) === te.null ? nr(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ts.create = (t, e) => new ts({
  innerType: t,
  typeName: pe.ZodNullable,
  ...xe(e)
});
class xi extends Re {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    let n = r.data;
    return r.parsedType === te.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
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
  typeName: pe.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...xe(e)
});
class Yo extends Re {
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
    return Bo(s) ? s.then((i) => ({
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new Pr(n.common.issues);
        }
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Pr(n.common.issues);
        }
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Yo.create = (t, e) => new Yo({
  innerType: t,
  typeName: pe.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...xe(e)
});
class Qo extends Re {
  _parse(e) {
    if (this._getType(e) !== te.nan) {
      const r = this._getOrReturnCtx(e);
      return se(r, {
        code: B.invalid_type,
        expected: te.nan,
        received: r.parsedType
      }), be;
    }
    return { status: "valid", value: e.data };
  }
}
Qo.create = (t) => new Qo({
  typeName: pe.ZodNaN,
  ...xe(t)
});
const i5 = Symbol("zod_brand");
class Cf extends Re {
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
class no extends Re {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return s.status === "aborted" ? be : s.status === "dirty" ? (r.dirty(), Of(s.value)) : this._def.out._parseAsync({
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
      return s.status === "aborted" ? be : s.status === "dirty" ? (r.dirty(), {
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
    return new no({
      in: e,
      out: r,
      typeName: pe.ZodPipeline
    });
  }
}
const Nf = (t, e = {}, r) => t ? As.create().superRefine((n, s) => {
  var i, a;
  if (!t(n)) {
    const o = typeof e == "function" ? e(n) : e, c = (a = (i = o.fatal) !== null && i !== void 0 ? i : r) !== null && a !== void 0 ? a : !0, u = typeof o == "string" ? { message: o } : o;
    s.addIssue({ code: "custom", ...u, fatal: c });
  }
}) : As.create(), o5 = {
  object: ft.lazycreate
};
var pe;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline";
})(pe || (pe = {}));
const a5 = (t, e = {
  message: `Input not instance of ${t.name}`
}) => Nf((r) => r instanceof t, e), Pf = Cr.create, kf = Nn.create, c5 = Qo.create, u5 = Pn.create, Rf = gi.create, l5 = Xn.create, d5 = Ho.create, h5 = yi.create, f5 = mi.create, p5 = As.create, g5 = Gn.create, y5 = fn.create, m5 = Wo.create, v5 = kr.create, _5 = ft.create, b5 = ft.strictCreate, w5 = vi.create, E5 = Ta.create, S5 = _i.create, x5 = Yr.create, I5 = bi.create, O5 = Go.create, T5 = es.create, C5 = xs.create, N5 = wi.create, P5 = Ei.create, k5 = kn.create, R5 = Si.create, A5 = js.create, Ad = Lr.create, j5 = un.create, L5 = ts.create, U5 = Lr.createWithPreprocess, M5 = no.create, D5 = () => Pf().optional(), z5 = () => kf().optional(), $5 = () => Rf().optional(), V5 = {
  string: (t) => Cr.create({ ...t, coerce: !0 }),
  number: (t) => Nn.create({ ...t, coerce: !0 }),
  boolean: (t) => gi.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => Pn.create({ ...t, coerce: !0 }),
  date: (t) => Xn.create({ ...t, coerce: !0 })
}, Z5 = be;
var Dr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: pi,
  setErrorMap: BE,
  getErrorMap: qo,
  makeIssue: Fo,
  EMPTY_PATH: HE,
  addIssueToContext: se,
  ParseStatus: Gt,
  INVALID: be,
  DIRTY: Of,
  OK: nr,
  isAborted: xc,
  isDirty: Ic,
  isValid: Ko,
  isAsync: Bo,
  get util() {
    return Qe;
  },
  get objectUtil() {
    return Sc;
  },
  ZodParsedType: te,
  getParsedType: xn,
  ZodType: Re,
  ZodString: Cr,
  ZodNumber: Nn,
  ZodBigInt: Pn,
  ZodBoolean: gi,
  ZodDate: Xn,
  ZodSymbol: Ho,
  ZodUndefined: yi,
  ZodNull: mi,
  ZodAny: As,
  ZodUnknown: Gn,
  ZodNever: fn,
  ZodVoid: Wo,
  ZodArray: kr,
  ZodObject: ft,
  ZodUnion: vi,
  ZodDiscriminatedUnion: Ta,
  ZodIntersection: _i,
  ZodTuple: Yr,
  ZodRecord: bi,
  ZodMap: Go,
  ZodSet: es,
  ZodFunction: xs,
  ZodLazy: wi,
  ZodLiteral: Ei,
  ZodEnum: kn,
  ZodNativeEnum: Si,
  ZodPromise: js,
  ZodEffects: Lr,
  ZodTransformer: Lr,
  ZodOptional: un,
  ZodNullable: ts,
  ZodDefault: xi,
  ZodCatch: Yo,
  ZodNaN: Qo,
  BRAND: i5,
  ZodBranded: Cf,
  ZodPipeline: no,
  custom: Nf,
  Schema: Re,
  ZodSchema: Re,
  late: o5,
  get ZodFirstPartyTypeKind() {
    return pe;
  },
  coerce: V5,
  any: p5,
  array: v5,
  bigint: u5,
  boolean: Rf,
  date: l5,
  discriminatedUnion: E5,
  effect: Ad,
  enum: k5,
  function: C5,
  instanceof: a5,
  intersection: S5,
  lazy: N5,
  literal: P5,
  map: O5,
  nan: c5,
  nativeEnum: R5,
  never: y5,
  null: f5,
  nullable: L5,
  number: kf,
  object: _5,
  oboolean: $5,
  onumber: z5,
  optional: j5,
  ostring: D5,
  pipeline: M5,
  preprocess: U5,
  promise: A5,
  record: I5,
  set: T5,
  strictObject: b5,
  string: Pf,
  symbol: d5,
  transformer: Ad,
  tuple: x5,
  undefined: h5,
  union: w5,
  unknown: g5,
  void: m5,
  NEVER: Z5,
  ZodIssueCode: B,
  quotelessJson: KE,
  ZodError: Pr
});
const Af = /^aleo1[a-z0-9]{58}$/i, q5 = /^AViewKey1[a-z0-9]{44}$/i, F5 = /^APrivateKey1[a-z0-9]{47}$/i, K5 = /^at1[a-z0-9]{58}$/i, B5 = /^\d+field$/, H5 = /^\d+u32$/, W5 = /^\d+u64$/, aI = Dr.string().regex(Af), cI = Dr.string().regex(q5), uI = Dr.string().regex(F5), lI = Dr.string().regex(K5), dI = Dr.string().regex(B5), hI = Dr.string().regex(H5), fI = Dr.string().regex(W5);
var jd;
(function(t) {
  t.Record = "record", t.OutputRecord = "outputRecord", t.Public = "public", t.Private = "private", t.Constant = "constant", t.Future = "future", t.ExternalRecord = "external_record";
})(jd || (jd = {}));
var Tc;
(function(t) {
  t.Deploy = "Deploy", t.Execute = "Execute", t.Send = "Send", t.Receive = "Receive", t.Join = "Join", t.Split = "Split", t.Shield = "Shield", t.Unshield = "Unshield";
})(Tc || (Tc = {}));
var Cc;
(function(t) {
  t.Creating = "Creating", t.Pending = "Pending", t.Settled = "Settled", t.Failed = "Failed";
})(Cc || (Cc = {}));
var Nc;
(function(t) {
  t.Private = "Private", t.Public = "Public";
})(Nc || (Nc = {}));
var Pc;
(function(t) {
  t.AleoTestnet = "AleoTestnet", t.AleoMainnet = "AleoMainnet";
})(Pc || (Pc = {}));
var Ld;
(function(t) {
  t[t.ALEO = 0] = "ALEO";
})(Ld || (Ld = {}));
const pI = Dr.nativeEnum(Tc), gI = Dr.nativeEnum(Cc), yI = Dr.nativeEnum(Pc), mI = Dr.nativeEnum(Nc), vI = async ({
  message: t,
  address: e
}) => {
  const r = await dr(), n = await (r == null ? void 0 : r.getSession());
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
          address: Af.test(e ?? "") ? e : void 0
        }
      }
    });
  } catch (s) {
    const i = s.message;
    return console.error("signature error", i), { error: i };
  }
}, _I = 20;
var kc = { exports: {} }, Wa, Ud;
function G5() {
  if (Ud)
    return Wa;
  Ud = 1;
  var t = 1e3, e = t * 60, r = e * 60, n = r * 24, s = n * 7, i = n * 365.25;
  Wa = function(d, f) {
    f = f || {};
    var p = typeof d;
    if (p === "string" && d.length > 0)
      return a(d);
    if (p === "number" && isFinite(d))
      return f.long ? c(d) : o(d);
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
  function o(d) {
    var f = Math.abs(d);
    return f >= n ? Math.round(d / n) + "d" : f >= r ? Math.round(d / r) + "h" : f >= e ? Math.round(d / e) + "m" : f >= t ? Math.round(d / t) + "s" : d + "ms";
  }
  function c(d) {
    var f = Math.abs(d);
    return f >= n ? u(d, f, n, "day") : f >= r ? u(d, f, r, "hour") : f >= e ? u(d, f, e, "minute") : f >= t ? u(d, f, t, "second") : d + " ms";
  }
  function u(d, f, p, m) {
    var b = f >= p * 1.5;
    return Math.round(d / p) + " " + m + (b ? "s" : "");
  }
  return Wa;
}
function Y5(t) {
  r.debug = r, r.default = r, r.coerce = c, r.disable = i, r.enable = s, r.enabled = a, r.humanize = G5(), r.destroy = u, Object.keys(t).forEach((d) => {
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
    let f, p = null, m, b;
    function E(...T) {
      if (!E.enabled)
        return;
      const U = E, v = Number(/* @__PURE__ */ new Date()), O = v - (f || v);
      U.diff = O, U.prev = f, U.curr = v, f = v, T[0] = r.coerce(T[0]), typeof T[0] != "string" && T.unshift("%O");
      let w = 0;
      T[0] = T[0].replace(/%([a-zA-Z%])/g, (x, y) => {
        if (x === "%%")
          return "%";
        w++;
        const l = r.formatters[y];
        if (typeof l == "function") {
          const g = T[w];
          x = l.call(U, g), T.splice(w, 1), w--;
        }
        return x;
      }), r.formatArgs.call(U, T), (U.log || r.log).apply(U, T);
    }
    return E.namespace = d, E.useColors = r.useColors(), E.color = r.selectColor(d), E.extend = n, E.destroy = r.destroy, Object.defineProperty(E, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => p !== null ? p : (m !== r.namespaces && (m = r.namespaces, b = r.enabled(d)), b),
      set: (T) => {
        p = T;
      }
    }), typeof r.init == "function" && r.init(E), E;
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
      ...r.names.map(o),
      ...r.skips.map(o).map((f) => "-" + f)
    ].join(",");
    return r.enable(""), d;
  }
  function a(d) {
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
  function o(d) {
    return d.toString().substring(2, d.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function c(d) {
    return d instanceof Error ? d.stack || d.message : d;
  }
  function u() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return r.enable(r.load()), r;
}
var Q5 = Y5;
(function(t, e) {
  e.formatArgs = n, e.save = s, e.load = i, e.useColors = r, e.storage = a(), e.destroy = /* @__PURE__ */ (() => {
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
    const u = "color: " + this.color;
    c.splice(1, 0, u, "color: inherit");
    let d = 0, f = 0;
    c[0].replace(/%[a-zA-Z%]/g, (p) => {
      p !== "%%" && (d++, p === "%c" && (f = d));
    }), c.splice(f, 0, u);
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
  function a() {
    try {
      return localStorage;
    } catch {
    }
  }
  t.exports = Q5(e);
  const { formatters: o } = t.exports;
  o.j = function(c) {
    try {
      return JSON.stringify(c);
    } catch (u) {
      return "[UnexpectedJSONParseError]: " + u.message;
    }
  };
})(kc, kc.exports);
var J5 = kc.exports;
const X5 = /* @__PURE__ */ ru(J5), Ca = X5("wallet:sdk");
Ca.enabled = !0;
function bI() {
  const e = !!Er(), { data: r, error: n, loading: s, setData: i, setError: a, setLoading: o } = tu(), [c] = hn((d) => [d.setAccount]);
  async function u() {
    try {
      o(!0), a(void 0);
      const f = await (await dr()).connect({
        requiredNamespaces: {
          aleo: {
            methods: Tu,
            chains: Ia,
            events: Cu
          }
        }
      });
      i(f);
      const p = f.namespaces.aleo.accounts[0].split(":");
      return c({
        network: p[0],
        chainId: p[1],
        address: p[2],
        shortenedAddress: Xa(p[2])
      }), Oa.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), f;
    } catch (d) {
      throw a(d), d;
    } finally {
      o(!1);
    }
  }
  return { data: r, error: n, loading: s, isConnected: e, connect: u };
}
const wI = () => {
  const t = Er(), { request: e, data: r, error: n, loading: s } = Hi({
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
}, EI = (t) => {
  Ca("useDecrypt", t);
  const e = Er(), { request: r, data: n, error: s, loading: i } = Hi({
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
function SI() {
  const t = Er(), [e] = hn((o) => [o.onDisconnect]), { error: r, loading: n, setError: s, setLoading: i } = tu();
  async function a() {
    if (!t || n) {
      t || e();
      return;
    }
    try {
      i(!0), s(void 0);
      try {
        await (await dr()).disconnect({
          topic: t.topic,
          reason: Qp("USER_DISCONNECTED")
        }), Oa.emit("session_change");
      } catch (o) {
        console.warn(o);
      }
      hn.getState().onDisconnect();
    } catch (o) {
      throw s(o), o;
    } finally {
      i(!1);
    }
  }
  return { error: r, loading: n, disconnect: a };
}
const xI = ({ id: t, address: e, multisig: r = !1 }) => {
  const n = Er(), [s] = hn((E) => [E.account]), i = t !== void 0 && t !== "" && !!n && !!s && (r ? !!e : !0), { refetch: a, data: o, error: c, isLoading: u } = Bi({
    queryKey: ["useEvent", s == null ? void 0 : s.address, e, r, t, n == null ? void 0 : n.topic],
    enabled: i,
    wcParams: {
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
    }
  });
  Ki(({ params: E, topic: T }) => {
    const U = E.event.name, v = E.event.address ?? E.event.data.address;
    (t && U === "selectedAccountSynced" && !r || U === "sharedAccountSynced" && r && v === e) && a();
  });
  const d = !!n && !!s && !!t && (r ? !!e : !0);
  jr(() => {
    d && !u && a();
  }, [d]);
  const f = () => {
    d && !u && a();
  }, p = c ? c.message : o && o.error, m = o, b = m == null ? void 0 : m.event;
  return { fetchEvent: f, event: b, error: p, loading: u };
}, II = ({ filter: t, page: e }) => {
  const r = Er(), [n] = hn((b) => [b.account]);
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const { refetch: s, data: i, error: a, isLoading: o } = Bi({
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
  Ki(({ id: b, params: E, topic: T }) => {
    E.event.name === "selectedAccountSynced" && s();
  });
  const c = !!r && !!n;
  jr(() => {
    c && !o && s();
  }, [c]);
  const u = () => {
    c && !o && s();
  }, d = a ? a.message : i && i.error, f = i, p = f == null ? void 0 : f.events, m = (f == null ? void 0 : f.pageCount) ?? 0;
  return { fetchPage: u, events: p, error: d, loading: o, page: e, pageCount: m };
}, OI = (t) => {
  const e = Er(), { request: r, data: n, error: s, loading: i } = Hi({
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
}, TI = (t) => {
  try {
    return JSON.stringify(t, null, 2).replaceAll('"', "") ?? "";
  } catch {
    return "";
  }
}, CI = ({ address: t, multisig: e = !1, filter: r, page: n }) => {
  const s = Er(), [i] = hn((T) => [
    T.account
  ]), { refetch: a, data: o, error: c, isLoading: u } = Bi({
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
  }), d = !!s && !!i && (e ? !!t : !0);
  Ki(({ params: T }) => {
    const U = T.event.name, v = T.event.address ?? T.event.data.address;
    (U === "selectedAccountSynced" && !e || U === "sharedAccountSynced" && e && v === t) && a();
  });
  const f = () => {
    d && !u && (Ca("useRecords refetching...", [t, e, r, n]), a());
  }, p = c ? c.message : o && o.error, m = o, b = m == null ? void 0 : m.records, E = (m == null ? void 0 : m.pageCount) ?? 0;
  return { fetchPage: f, records: b, error: p, loading: u, page: n, pageCount: E };
}, NI = (t) => {
  const e = Er(), r = t == null ? void 0 : t.inputs.map((d) => typeof d == "string" ? d : d.plaintext), { request: n, data: s, error: i, loading: a } = Hi({
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
  }), o = i ? i.message : s && s.error, c = s;
  return { createEvent: () => {
    t && e && !a && (Ca("useCreateEvent requesting...", t), n());
  }, eventId: c == null ? void 0 : c.eventId, loading: a, error: o };
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
})(Je || (Je = {}));
var Rc;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(Rc || (Rc = {}));
const re = Je.arrayToEnum([
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
]), In = (t) => {
  switch (typeof t) {
    case "undefined":
      return re.undefined;
    case "string":
      return re.string;
    case "number":
      return isNaN(t) ? re.nan : re.number;
    case "boolean":
      return re.boolean;
    case "function":
      return re.function;
    case "bigint":
      return re.bigint;
    case "symbol":
      return re.symbol;
    case "object":
      return Array.isArray(t) ? re.array : t === null ? re.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? re.promise : typeof Map < "u" && t instanceof Map ? re.map : typeof Set < "u" && t instanceof Set ? re.set : typeof Date < "u" && t instanceof Date ? re.date : re.object;
    default:
      return re.unknown;
  }
}, H = Je.arrayToEnum([
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
]), eS = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
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
          let o = n, c = 0;
          for (; c < a.path.length; ) {
            const u = a.path[c];
            c === a.path.length - 1 ? (o[u] = o[u] || { _errors: [] }, o[u]._errors.push(r(a))) : o[u] = o[u] || { _errors: [] }, o = o[u], c++;
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
const Ii = (t, e) => {
  let r;
  switch (t.code) {
    case H.invalid_type:
      t.received === re.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
      break;
    case H.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(t.expected, Je.jsonStringifyReplacer)}`;
      break;
    case H.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${Je.joinValues(t.keys, ", ")}`;
      break;
    case H.invalid_union:
      r = "Invalid input";
      break;
    case H.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${Je.joinValues(t.options)}`;
      break;
    case H.invalid_enum_value:
      r = `Invalid enum value. Expected ${Je.joinValues(t.options)}, received '${t.received}'`;
      break;
    case H.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case H.invalid_return_type:
      r = "Invalid function return type";
      break;
    case H.invalid_date:
      r = "Invalid date";
      break;
    case H.invalid_string:
      typeof t.validation == "object" ? "includes" in t.validation ? (r = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : Je.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
      break;
    case H.too_small:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : r = "Invalid input";
      break;
    case H.too_big:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? r = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : r = "Invalid input";
      break;
    case H.custom:
      r = "Invalid input";
      break;
    case H.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case H.not_multiple_of:
      r = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case H.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = e.defaultError, Je.assertNever(t);
  }
  return { message: r };
};
let jf = Ii;
function tS(t) {
  jf = t;
}
function Jo() {
  return jf;
}
const Xo = (t) => {
  const { data: e, path: r, errorMaps: n, issueData: s } = t, i = [...r, ...s.path || []], a = {
    ...s,
    path: i
  };
  let o = "";
  const c = n.filter((u) => !!u).slice().reverse();
  for (const u of c)
    o = u(a, { data: e, defaultError: o }).message;
  return {
    ...s,
    path: i,
    message: s.message || o
  };
}, rS = [];
function ie(t, e) {
  const r = Xo({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      Jo(),
      Ii
      // then global default map
    ].filter((n) => !!n)
  });
  t.common.issues.push(r);
}
class Yt {
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
        return ve;
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
    return Yt.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, r) {
    const n = {};
    for (const s of r) {
      const { key: i, value: a } = s;
      if (i.status === "aborted" || a.status === "aborted")
        return ve;
      i.status === "dirty" && e.dirty(), a.status === "dirty" && e.dirty(), (typeof a.value < "u" || s.alwaysSet) && (n[i.value] = a.value);
    }
    return { status: e.value, value: n };
  }
}
const ve = Object.freeze({
  status: "aborted"
}), Lf = (t) => ({ status: "dirty", value: t }), sr = (t) => ({ status: "valid", value: t }), Ac = (t) => t.status === "aborted", jc = (t) => t.status === "dirty", ea = (t) => t.status === "valid", ta = (t) => typeof Promise < "u" && t instanceof Promise;
var ue;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(ue || (ue = {}));
class Qr {
  constructor(e, r, n, s) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = n, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Md = (t, e) => {
  if (ea(e))
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
function Ie(t) {
  if (!t)
    return {};
  const { errorMap: e, invalid_type_error: r, required_error: n, description: s } = t;
  if (e && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: s } : { errorMap: (a, o) => a.code !== "invalid_type" ? { message: o.defaultError } : typeof o.data > "u" ? { message: n ?? o.defaultError } : { message: r ?? o.defaultError }, description: s };
}
class Ae {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return In(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || {
      common: e.parent.common,
      data: e.data,
      parsedType: In(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new Yt(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: In(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const r = this._parse(e);
    if (ta(r))
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
      parsedType: In(e)
    }, i = this._parseSync({ data: e, path: s.path, parent: s });
    return Md(s, i);
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
      parsedType: In(e)
    }, s = this._parse({ data: e, path: n.path, parent: n }), i = await (ta(s) ? s : Promise.resolve(s));
    return Md(n, i);
  }
  refine(e, r) {
    const n = (s) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(s) : r;
    return this._refinement((s, i) => {
      const a = e(s), o = () => i.addIssue({
        code: H.custom,
        ...n(s)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((c) => c ? !0 : (o(), !1)) : a ? !0 : (o(), !1);
    });
  }
  refinement(e, r) {
    return this._refinement((n, s) => e(n) ? !0 : (s.addIssue(typeof r == "function" ? r(n, s) : r), !1));
  }
  _refinement(e) {
    return new Ur({
      schema: this,
      typeName: ge.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return ln.create(this, this._def);
  }
  nullable() {
    return ss.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Ar.create(this, this._def);
  }
  promise() {
    return Us.create(this, this._def);
  }
  or(e) {
    return Ni.create([this, e], this._def);
  }
  and(e) {
    return Pi.create(this, e, this._def);
  }
  transform(e) {
    return new Ur({
      ...Ie(this._def),
      schema: this,
      typeName: ge.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Li({
      ...Ie(this._def),
      innerType: this,
      defaultValue: r,
      typeName: ge.ZodDefault
    });
  }
  brand() {
    return new Mf({
      typeName: ge.ZodBranded,
      type: this,
      ...Ie(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new ia({
      ...Ie(this._def),
      innerType: this,
      catchValue: r,
      typeName: ge.ZodCatch
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
    return so.create(this, e);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const nS = /^c[^\s-]{8,}$/i, sS = /^[a-z][a-z0-9]*$/, iS = /[0-9A-HJKMNP-TV-Z]{26}/, oS = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, aS = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, cS = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u"), uS = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, lS = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, dS = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function hS(t, e) {
  return !!((e === "v4" || !e) && uS.test(t) || (e === "v6" || !e) && lS.test(t));
}
class Nr extends Ae {
  constructor() {
    super(...arguments), this._regex = (e, r, n) => this.refinement((s) => e.test(s), {
      validation: r,
      code: H.invalid_string,
      ...ue.errToObj(n)
    }), this.nonempty = (e) => this.min(1, ue.errToObj(e)), this.trim = () => new Nr({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new Nr({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new Nr({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== re.string) {
      const i = this._getOrReturnCtx(e);
      return ie(
        i,
        {
          code: H.invalid_type,
          expected: re.string,
          received: i.parsedType
        }
        //
      ), ve;
    }
    const n = new Yt();
    let s;
    for (const i of this._def.checks)
      if (i.kind === "min")
        e.data.length < i.value && (s = this._getOrReturnCtx(e, s), ie(s, {
          code: H.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), n.dirty());
      else if (i.kind === "max")
        e.data.length > i.value && (s = this._getOrReturnCtx(e, s), ie(s, {
          code: H.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), n.dirty());
      else if (i.kind === "length") {
        const a = e.data.length > i.value, o = e.data.length < i.value;
        (a || o) && (s = this._getOrReturnCtx(e, s), a ? ie(s, {
          code: H.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }) : o && ie(s, {
          code: H.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }), n.dirty());
      } else if (i.kind === "email")
        aS.test(e.data) || (s = this._getOrReturnCtx(e, s), ie(s, {
          validation: "email",
          code: H.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "emoji")
        cS.test(e.data) || (s = this._getOrReturnCtx(e, s), ie(s, {
          validation: "emoji",
          code: H.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "uuid")
        oS.test(e.data) || (s = this._getOrReturnCtx(e, s), ie(s, {
          validation: "uuid",
          code: H.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "cuid")
        nS.test(e.data) || (s = this._getOrReturnCtx(e, s), ie(s, {
          validation: "cuid",
          code: H.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "cuid2")
        sS.test(e.data) || (s = this._getOrReturnCtx(e, s), ie(s, {
          validation: "cuid2",
          code: H.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "ulid")
        iS.test(e.data) || (s = this._getOrReturnCtx(e, s), ie(s, {
          validation: "ulid",
          code: H.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "url")
        try {
          new URL(e.data);
        } catch {
          s = this._getOrReturnCtx(e, s), ie(s, {
            validation: "url",
            code: H.invalid_string,
            message: i.message
          }), n.dirty();
        }
      else
        i.kind === "regex" ? (i.regex.lastIndex = 0, i.regex.test(e.data) || (s = this._getOrReturnCtx(e, s), ie(s, {
          validation: "regex",
          code: H.invalid_string,
          message: i.message
        }), n.dirty())) : i.kind === "trim" ? e.data = e.data.trim() : i.kind === "includes" ? e.data.includes(i.value, i.position) || (s = this._getOrReturnCtx(e, s), ie(s, {
          code: H.invalid_string,
          validation: { includes: i.value, position: i.position },
          message: i.message
        }), n.dirty()) : i.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : i.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : i.kind === "startsWith" ? e.data.startsWith(i.value) || (s = this._getOrReturnCtx(e, s), ie(s, {
          code: H.invalid_string,
          validation: { startsWith: i.value },
          message: i.message
        }), n.dirty()) : i.kind === "endsWith" ? e.data.endsWith(i.value) || (s = this._getOrReturnCtx(e, s), ie(s, {
          code: H.invalid_string,
          validation: { endsWith: i.value },
          message: i.message
        }), n.dirty()) : i.kind === "datetime" ? dS(i).test(e.data) || (s = this._getOrReturnCtx(e, s), ie(s, {
          code: H.invalid_string,
          validation: "datetime",
          message: i.message
        }), n.dirty()) : i.kind === "ip" ? hS(e.data, i.version) || (s = this._getOrReturnCtx(e, s), ie(s, {
          validation: "ip",
          code: H.invalid_string,
          message: i.message
        }), n.dirty()) : Je.assertNever(i);
    return { status: n.value, value: e.data };
  }
  _addCheck(e) {
    return new Nr({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...ue.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...ue.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...ue.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...ue.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...ue.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...ue.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...ue.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...ue.errToObj(e) });
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
      ...ue.errToObj(e == null ? void 0 : e.message)
    });
  }
  regex(e, r) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...ue.errToObj(r)
    });
  }
  includes(e, r) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: r == null ? void 0 : r.position,
      ...ue.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(e, r) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...ue.errToObj(r)
    });
  }
  endsWith(e, r) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...ue.errToObj(r)
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...ue.errToObj(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...ue.errToObj(r)
    });
  }
  length(e, r) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...ue.errToObj(r)
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
Nr.create = (t) => {
  var e;
  return new Nr({
    checks: [],
    typeName: ge.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...Ie(t)
  });
};
function fS(t, e) {
  const r = (t.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, s = r > n ? r : n, i = parseInt(t.toFixed(s).replace(".", "")), a = parseInt(e.toFixed(s).replace(".", ""));
  return i % a / Math.pow(10, s);
}
class Rn extends Ae {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== re.number) {
      const i = this._getOrReturnCtx(e);
      return ie(i, {
        code: H.invalid_type,
        expected: re.number,
        received: i.parsedType
      }), ve;
    }
    let n;
    const s = new Yt();
    for (const i of this._def.checks)
      i.kind === "int" ? Je.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), ie(n, {
        code: H.invalid_type,
        expected: "integer",
        received: "float",
        message: i.message
      }), s.dirty()) : i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (n = this._getOrReturnCtx(e, n), ie(n, {
        code: H.too_small,
        minimum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), s.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (n = this._getOrReturnCtx(e, n), ie(n, {
        code: H.too_big,
        maximum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), s.dirty()) : i.kind === "multipleOf" ? fS(e.data, i.value) !== 0 && (n = this._getOrReturnCtx(e, n), ie(n, {
        code: H.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), s.dirty()) : i.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), ie(n, {
        code: H.not_finite,
        message: i.message
      }), s.dirty()) : Je.assertNever(i);
    return { status: s.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, ue.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, ue.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, ue.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, ue.toString(r));
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
          message: ue.toString(s)
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
      message: ue.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: ue.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: ue.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: ue.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: ue.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: ue.toString(r)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: ue.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: ue.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: ue.toString(e)
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
  typeName: ge.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...Ie(t)
});
class An extends Ae {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== re.bigint) {
      const i = this._getOrReturnCtx(e);
      return ie(i, {
        code: H.invalid_type,
        expected: re.bigint,
        received: i.parsedType
      }), ve;
    }
    let n;
    const s = new Yt();
    for (const i of this._def.checks)
      i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (n = this._getOrReturnCtx(e, n), ie(n, {
        code: H.too_small,
        type: "bigint",
        minimum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), s.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (n = this._getOrReturnCtx(e, n), ie(n, {
        code: H.too_big,
        type: "bigint",
        maximum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), s.dirty()) : i.kind === "multipleOf" ? e.data % i.value !== BigInt(0) && (n = this._getOrReturnCtx(e, n), ie(n, {
        code: H.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), s.dirty()) : Je.assertNever(i);
    return { status: s.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, ue.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, ue.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, ue.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, ue.toString(r));
  }
  setLimit(e, r, n, s) {
    return new An({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: ue.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new An({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: ue.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: ue.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: ue.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: ue.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: ue.toString(r)
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
An.create = (t) => {
  var e;
  return new An({
    checks: [],
    typeName: ge.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...Ie(t)
  });
};
class Oi extends Ae {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== re.boolean) {
      const n = this._getOrReturnCtx(e);
      return ie(n, {
        code: H.invalid_type,
        expected: re.boolean,
        received: n.parsedType
      }), ve;
    }
    return sr(e.data);
  }
}
Oi.create = (t) => new Oi({
  typeName: ge.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...Ie(t)
});
class rs extends Ae {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== re.date) {
      const i = this._getOrReturnCtx(e);
      return ie(i, {
        code: H.invalid_type,
        expected: re.date,
        received: i.parsedType
      }), ve;
    }
    if (isNaN(e.data.getTime())) {
      const i = this._getOrReturnCtx(e);
      return ie(i, {
        code: H.invalid_date
      }), ve;
    }
    const n = new Yt();
    let s;
    for (const i of this._def.checks)
      i.kind === "min" ? e.data.getTime() < i.value && (s = this._getOrReturnCtx(e, s), ie(s, {
        code: H.too_small,
        message: i.message,
        inclusive: !0,
        exact: !1,
        minimum: i.value,
        type: "date"
      }), n.dirty()) : i.kind === "max" ? e.data.getTime() > i.value && (s = this._getOrReturnCtx(e, s), ie(s, {
        code: H.too_big,
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
    return new rs({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: ue.toString(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: ue.toString(r)
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
rs.create = (t) => new rs({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: ge.ZodDate,
  ...Ie(t)
});
class ra extends Ae {
  _parse(e) {
    if (this._getType(e) !== re.symbol) {
      const n = this._getOrReturnCtx(e);
      return ie(n, {
        code: H.invalid_type,
        expected: re.symbol,
        received: n.parsedType
      }), ve;
    }
    return sr(e.data);
  }
}
ra.create = (t) => new ra({
  typeName: ge.ZodSymbol,
  ...Ie(t)
});
class Ti extends Ae {
  _parse(e) {
    if (this._getType(e) !== re.undefined) {
      const n = this._getOrReturnCtx(e);
      return ie(n, {
        code: H.invalid_type,
        expected: re.undefined,
        received: n.parsedType
      }), ve;
    }
    return sr(e.data);
  }
}
Ti.create = (t) => new Ti({
  typeName: ge.ZodUndefined,
  ...Ie(t)
});
class Ci extends Ae {
  _parse(e) {
    if (this._getType(e) !== re.null) {
      const n = this._getOrReturnCtx(e);
      return ie(n, {
        code: H.invalid_type,
        expected: re.null,
        received: n.parsedType
      }), ve;
    }
    return sr(e.data);
  }
}
Ci.create = (t) => new Ci({
  typeName: ge.ZodNull,
  ...Ie(t)
});
class Ls extends Ae {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return sr(e.data);
  }
}
Ls.create = (t) => new Ls({
  typeName: ge.ZodAny,
  ...Ie(t)
});
class Yn extends Ae {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return sr(e.data);
  }
}
Yn.create = (t) => new Yn({
  typeName: ge.ZodUnknown,
  ...Ie(t)
});
class pn extends Ae {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return ie(r, {
      code: H.invalid_type,
      expected: re.never,
      received: r.parsedType
    }), ve;
  }
}
pn.create = (t) => new pn({
  typeName: ge.ZodNever,
  ...Ie(t)
});
class na extends Ae {
  _parse(e) {
    if (this._getType(e) !== re.undefined) {
      const n = this._getOrReturnCtx(e);
      return ie(n, {
        code: H.invalid_type,
        expected: re.void,
        received: n.parsedType
      }), ve;
    }
    return sr(e.data);
  }
}
na.create = (t) => new na({
  typeName: ge.ZodVoid,
  ...Ie(t)
});
class Ar extends Ae {
  _parse(e) {
    const { ctx: r, status: n } = this._processInputParams(e), s = this._def;
    if (r.parsedType !== re.array)
      return ie(r, {
        code: H.invalid_type,
        expected: re.array,
        received: r.parsedType
      }), ve;
    if (s.exactLength !== null) {
      const a = r.data.length > s.exactLength.value, o = r.data.length < s.exactLength.value;
      (a || o) && (ie(r, {
        code: a ? H.too_big : H.too_small,
        minimum: o ? s.exactLength.value : void 0,
        maximum: a ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), n.dirty());
    }
    if (s.minLength !== null && r.data.length < s.minLength.value && (ie(r, {
      code: H.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), n.dirty()), s.maxLength !== null && r.data.length > s.maxLength.value && (ie(r, {
      code: H.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((a, o) => s.type._parseAsync(new Qr(r, a, r.path, o)))).then((a) => Yt.mergeArray(n, a));
    const i = [...r.data].map((a, o) => s.type._parseSync(new Qr(r, a, r.path, o)));
    return Yt.mergeArray(n, i);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new Ar({
      ...this._def,
      minLength: { value: e, message: ue.toString(r) }
    });
  }
  max(e, r) {
    return new Ar({
      ...this._def,
      maxLength: { value: e, message: ue.toString(r) }
    });
  }
  length(e, r) {
    return new Ar({
      ...this._def,
      exactLength: { value: e, message: ue.toString(r) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Ar.create = (t, e) => new Ar({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: ge.ZodArray,
  ...Ie(e)
});
function _s(t) {
  if (t instanceof pt) {
    const e = {};
    for (const r in t.shape) {
      const n = t.shape[r];
      e[r] = ln.create(_s(n));
    }
    return new pt({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof Ar ? new Ar({
      ...t._def,
      type: _s(t.element)
    }) : t instanceof ln ? ln.create(_s(t.unwrap())) : t instanceof ss ? ss.create(_s(t.unwrap())) : t instanceof Jr ? Jr.create(t.items.map((e) => _s(e))) : t;
}
class pt extends Ae {
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
    if (this._getType(e) !== re.object) {
      const u = this._getOrReturnCtx(e);
      return ie(u, {
        code: H.invalid_type,
        expected: re.object,
        received: u.parsedType
      }), ve;
    }
    const { status: n, ctx: s } = this._processInputParams(e), { shape: i, keys: a } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof pn && this._def.unknownKeys === "strip"))
      for (const u in s.data)
        a.includes(u) || o.push(u);
    const c = [];
    for (const u of a) {
      const d = i[u], f = s.data[u];
      c.push({
        key: { status: "valid", value: u },
        value: d._parse(new Qr(s, f, s.path, u)),
        alwaysSet: u in s.data
      });
    }
    if (this._def.catchall instanceof pn) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const d of o)
          c.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: s.data[d] }
          });
      else if (u === "strict")
        o.length > 0 && (ie(s, {
          code: H.unrecognized_keys,
          keys: o
        }), n.dirty());
      else if (u !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const u = this._def.catchall;
      for (const d of o) {
        const f = s.data[d];
        c.push({
          key: { status: "valid", value: d },
          value: u._parse(
            new Qr(s, f, s.path, d)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: d in s.data
        });
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const u = [];
      for (const d of c) {
        const f = await d.key;
        u.push({
          key: f,
          value: await d.value,
          alwaysSet: d.alwaysSet
        });
      }
      return u;
    }).then((u) => Yt.mergeObjectSync(n, u)) : Yt.mergeObjectSync(n, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return ue.errToObj, new pt({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (r, n) => {
          var s, i, a, o;
          const c = (a = (i = (s = this._def).errorMap) === null || i === void 0 ? void 0 : i.call(s, r, n).message) !== null && a !== void 0 ? a : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (o = ue.errToObj(e).message) !== null && o !== void 0 ? o : c
          } : {
            message: c
          };
        }
      } : {}
    });
  }
  strip() {
    return new pt({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new pt({
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
    return new pt({
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
    return new pt({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: ge.ZodObject
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
    return new pt({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const r = {};
    return Je.objectKeys(e).forEach((n) => {
      e[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new pt({
      ...this._def,
      shape: () => r
    });
  }
  omit(e) {
    const r = {};
    return Je.objectKeys(this.shape).forEach((n) => {
      e[n] || (r[n] = this.shape[n]);
    }), new pt({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return _s(this);
  }
  partial(e) {
    const r = {};
    return Je.objectKeys(this.shape).forEach((n) => {
      const s = this.shape[n];
      e && !e[n] ? r[n] = s : r[n] = s.optional();
    }), new pt({
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
        for (; i instanceof ln; )
          i = i._def.innerType;
        r[n] = i;
      }
    }), new pt({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return Uf(Je.objectKeys(this.shape));
  }
}
pt.create = (t, e) => new pt({
  shape: () => t,
  unknownKeys: "strip",
  catchall: pn.create(),
  typeName: ge.ZodObject,
  ...Ie(e)
});
pt.strictCreate = (t, e) => new pt({
  shape: () => t,
  unknownKeys: "strict",
  catchall: pn.create(),
  typeName: ge.ZodObject,
  ...Ie(e)
});
pt.lazycreate = (t, e) => new pt({
  shape: t,
  unknownKeys: "strip",
  catchall: pn.create(),
  typeName: ge.ZodObject,
  ...Ie(e)
});
class Ni extends Ae {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = this._def.options;
    function s(i) {
      for (const o of i)
        if (o.result.status === "valid")
          return o.result;
      for (const o of i)
        if (o.result.status === "dirty")
          return r.common.issues.push(...o.ctx.common.issues), o.result;
      const a = i.map((o) => new Rr(o.ctx.common.issues));
      return ie(r, {
        code: H.invalid_union,
        unionErrors: a
      }), ve;
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
      for (const c of n) {
        const u = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, d = c._parseSync({
          data: r.data,
          path: r.path,
          parent: u
        });
        if (d.status === "valid")
          return d;
        d.status === "dirty" && !i && (i = { result: d, ctx: u }), u.common.issues.length && a.push(u.common.issues);
      }
      if (i)
        return r.common.issues.push(...i.ctx.common.issues), i.result;
      const o = a.map((c) => new Rr(c));
      return ie(r, {
        code: H.invalid_union,
        unionErrors: o
      }), ve;
    }
  }
  get options() {
    return this._def.options;
  }
}
Ni.create = (t, e) => new Ni({
  options: t,
  typeName: ge.ZodUnion,
  ...Ie(e)
});
const Ao = (t) => t instanceof Ri ? Ao(t.schema) : t instanceof Ur ? Ao(t.innerType()) : t instanceof Ai ? [t.value] : t instanceof jn ? t.options : t instanceof ji ? Object.keys(t.enum) : t instanceof Li ? Ao(t._def.innerType) : t instanceof Ti ? [void 0] : t instanceof Ci ? [null] : null;
class Na extends Ae {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== re.object)
      return ie(r, {
        code: H.invalid_type,
        expected: re.object,
        received: r.parsedType
      }), ve;
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
      code: H.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), ve);
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
      const a = Ao(i.shape[e]);
      if (!a)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const o of a) {
        if (s.has(o))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        s.set(o, i);
      }
    }
    return new Na({
      typeName: ge.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: s,
      ...Ie(n)
    });
  }
}
function Lc(t, e) {
  const r = In(t), n = In(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === re.object && n === re.object) {
    const s = Je.objectKeys(e), i = Je.objectKeys(t).filter((o) => s.indexOf(o) !== -1), a = { ...t, ...e };
    for (const o of i) {
      const c = Lc(t[o], e[o]);
      if (!c.valid)
        return { valid: !1 };
      a[o] = c.data;
    }
    return { valid: !0, data: a };
  } else if (r === re.array && n === re.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const s = [];
    for (let i = 0; i < t.length; i++) {
      const a = t[i], o = e[i], c = Lc(a, o);
      if (!c.valid)
        return { valid: !1 };
      s.push(c.data);
    }
    return { valid: !0, data: s };
  } else
    return r === re.date && n === re.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class Pi extends Ae {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), s = (i, a) => {
      if (Ac(i) || Ac(a))
        return ve;
      const o = Lc(i.value, a.value);
      return o.valid ? ((jc(i) || jc(a)) && r.dirty(), { status: r.value, value: o.data }) : (ie(n, {
        code: H.invalid_intersection_types
      }), ve);
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
Pi.create = (t, e, r) => new Pi({
  left: t,
  right: e,
  typeName: ge.ZodIntersection,
  ...Ie(r)
});
class Jr extends Ae {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== re.array)
      return ie(n, {
        code: H.invalid_type,
        expected: re.array,
        received: n.parsedType
      }), ve;
    if (n.data.length < this._def.items.length)
      return ie(n, {
        code: H.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), ve;
    !this._def.rest && n.data.length > this._def.items.length && (ie(n, {
      code: H.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const i = [...n.data].map((a, o) => {
      const c = this._def.items[o] || this._def.rest;
      return c ? c._parse(new Qr(n, a, n.path, o)) : null;
    }).filter((a) => !!a);
    return n.common.async ? Promise.all(i).then((a) => Yt.mergeArray(r, a)) : Yt.mergeArray(r, i);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new Jr({
      ...this._def,
      rest: e
    });
  }
}
Jr.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Jr({
    items: t,
    typeName: ge.ZodTuple,
    rest: null,
    ...Ie(e)
  });
};
class ki extends Ae {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== re.object)
      return ie(n, {
        code: H.invalid_type,
        expected: re.object,
        received: n.parsedType
      }), ve;
    const s = [], i = this._def.keyType, a = this._def.valueType;
    for (const o in n.data)
      s.push({
        key: i._parse(new Qr(n, o, n.path, o)),
        value: a._parse(new Qr(n, n.data[o], n.path, o))
      });
    return n.common.async ? Yt.mergeObjectAsync(r, s) : Yt.mergeObjectSync(r, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, n) {
    return r instanceof Ae ? new ki({
      keyType: e,
      valueType: r,
      typeName: ge.ZodRecord,
      ...Ie(n)
    }) : new ki({
      keyType: Nr.create(),
      valueType: e,
      typeName: ge.ZodRecord,
      ...Ie(r)
    });
  }
}
class sa extends Ae {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== re.map)
      return ie(n, {
        code: H.invalid_type,
        expected: re.map,
        received: n.parsedType
      }), ve;
    const s = this._def.keyType, i = this._def.valueType, a = [...n.data.entries()].map(([o, c], u) => ({
      key: s._parse(new Qr(n, o, n.path, [u, "key"])),
      value: i._parse(new Qr(n, c, n.path, [u, "value"]))
    }));
    if (n.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of a) {
          const u = await c.key, d = await c.value;
          if (u.status === "aborted" || d.status === "aborted")
            return ve;
          (u.status === "dirty" || d.status === "dirty") && r.dirty(), o.set(u.value, d.value);
        }
        return { status: r.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const c of a) {
        const u = c.key, d = c.value;
        if (u.status === "aborted" || d.status === "aborted")
          return ve;
        (u.status === "dirty" || d.status === "dirty") && r.dirty(), o.set(u.value, d.value);
      }
      return { status: r.value, value: o };
    }
  }
}
sa.create = (t, e, r) => new sa({
  valueType: e,
  keyType: t,
  typeName: ge.ZodMap,
  ...Ie(r)
});
class ns extends Ae {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== re.set)
      return ie(n, {
        code: H.invalid_type,
        expected: re.set,
        received: n.parsedType
      }), ve;
    const s = this._def;
    s.minSize !== null && n.data.size < s.minSize.value && (ie(n, {
      code: H.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), r.dirty()), s.maxSize !== null && n.data.size > s.maxSize.value && (ie(n, {
      code: H.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), r.dirty());
    const i = this._def.valueType;
    function a(c) {
      const u = /* @__PURE__ */ new Set();
      for (const d of c) {
        if (d.status === "aborted")
          return ve;
        d.status === "dirty" && r.dirty(), u.add(d.value);
      }
      return { status: r.value, value: u };
    }
    const o = [...n.data.values()].map((c, u) => i._parse(new Qr(n, c, n.path, u)));
    return n.common.async ? Promise.all(o).then((c) => a(c)) : a(o);
  }
  min(e, r) {
    return new ns({
      ...this._def,
      minSize: { value: e, message: ue.toString(r) }
    });
  }
  max(e, r) {
    return new ns({
      ...this._def,
      maxSize: { value: e, message: ue.toString(r) }
    });
  }
  size(e, r) {
    return this.min(e, r).max(e, r);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
ns.create = (t, e) => new ns({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: ge.ZodSet,
  ...Ie(e)
});
class Is extends Ae {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== re.function)
      return ie(r, {
        code: H.invalid_type,
        expected: re.function,
        received: r.parsedType
      }), ve;
    function n(o, c) {
      return Xo({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Jo(),
          Ii
        ].filter((u) => !!u),
        issueData: {
          code: H.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function s(o, c) {
      return Xo({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Jo(),
          Ii
        ].filter((u) => !!u),
        issueData: {
          code: H.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const i = { errorMap: r.common.contextualErrorMap }, a = r.data;
    return this._def.returns instanceof Us ? sr(async (...o) => {
      const c = new Rr([]), u = await this._def.args.parseAsync(o, i).catch((p) => {
        throw c.addIssue(n(o, p)), c;
      }), d = await a(...u);
      return await this._def.returns._def.type.parseAsync(d, i).catch((p) => {
        throw c.addIssue(s(d, p)), c;
      });
    }) : sr((...o) => {
      const c = this._def.args.safeParse(o, i);
      if (!c.success)
        throw new Rr([n(o, c.error)]);
      const u = a(...c.data), d = this._def.returns.safeParse(u, i);
      if (!d.success)
        throw new Rr([s(u, d.error)]);
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
      args: Jr.create(e).rest(Yn.create())
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
      args: e || Jr.create([]).rest(Yn.create()),
      returns: r || Yn.create(),
      typeName: ge.ZodFunction,
      ...Ie(n)
    });
  }
}
class Ri extends Ae {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Ri.create = (t, e) => new Ri({
  getter: t,
  typeName: ge.ZodLazy,
  ...Ie(e)
});
class Ai extends Ae {
  _parse(e) {
    if (e.data !== this._def.value) {
      const r = this._getOrReturnCtx(e);
      return ie(r, {
        received: r.data,
        code: H.invalid_literal,
        expected: this._def.value
      }), ve;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Ai.create = (t, e) => new Ai({
  value: t,
  typeName: ge.ZodLiteral,
  ...Ie(e)
});
function Uf(t, e) {
  return new jn({
    values: t,
    typeName: ge.ZodEnum,
    ...Ie(e)
  });
}
class jn extends Ae {
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return ie(r, {
        expected: Je.joinValues(n),
        received: r.parsedType,
        code: H.invalid_type
      }), ve;
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return ie(r, {
        received: r.data,
        code: H.invalid_enum_value,
        options: n
      }), ve;
    }
    return sr(e.data);
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
    return jn.create(e);
  }
  exclude(e) {
    return jn.create(this.options.filter((r) => !e.includes(r)));
  }
}
jn.create = Uf;
class ji extends Ae {
  _parse(e) {
    const r = Je.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== re.string && n.parsedType !== re.number) {
      const s = Je.objectValues(r);
      return ie(n, {
        expected: Je.joinValues(s),
        received: n.parsedType,
        code: H.invalid_type
      }), ve;
    }
    if (r.indexOf(e.data) === -1) {
      const s = Je.objectValues(r);
      return ie(n, {
        received: n.data,
        code: H.invalid_enum_value,
        options: s
      }), ve;
    }
    return sr(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
ji.create = (t, e) => new ji({
  values: t,
  typeName: ge.ZodNativeEnum,
  ...Ie(e)
});
class Us extends Ae {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== re.promise && r.common.async === !1)
      return ie(r, {
        code: H.invalid_type,
        expected: re.promise,
        received: r.parsedType
      }), ve;
    const n = r.parsedType === re.promise ? r.data : Promise.resolve(r.data);
    return sr(n.then((s) => this._def.type.parseAsync(s, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
Us.create = (t, e) => new Us({
  type: t,
  typeName: ge.ZodPromise,
  ...Ie(e)
});
class Ur extends Ae {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ge.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
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
        ie(n, a), a.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (i.addIssue = i.addIssue.bind(i), s.type === "refinement") {
      const a = (o) => {
        const c = s.refinement(o, i);
        if (n.common.async)
          return Promise.resolve(c);
        if (c instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return o.status === "aborted" ? ve : (o.status === "dirty" && r.dirty(), a(o.value), { status: r.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => o.status === "aborted" ? ve : (o.status === "dirty" && r.dirty(), a(o.value).then(() => ({ status: r.value, value: o.value }))));
    }
    if (s.type === "transform")
      if (n.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!ea(a))
          return a;
        const o = s.transform(a.value, i);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => ea(a) ? Promise.resolve(s.transform(a.value, i)).then((o) => ({ status: r.value, value: o })) : a);
    Je.assertNever(s);
  }
}
Ur.create = (t, e, r) => new Ur({
  schema: t,
  typeName: ge.ZodEffects,
  effect: e,
  ...Ie(r)
});
Ur.createWithPreprocess = (t, e, r) => new Ur({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: ge.ZodEffects,
  ...Ie(r)
});
class ln extends Ae {
  _parse(e) {
    return this._getType(e) === re.undefined ? sr(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ln.create = (t, e) => new ln({
  innerType: t,
  typeName: ge.ZodOptional,
  ...Ie(e)
});
class ss extends Ae {
  _parse(e) {
    return this._getType(e) === re.null ? sr(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ss.create = (t, e) => new ss({
  innerType: t,
  typeName: ge.ZodNullable,
  ...Ie(e)
});
class Li extends Ae {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    let n = r.data;
    return r.parsedType === re.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Li.create = (t, e) => new Li({
  innerType: t,
  typeName: ge.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...Ie(e)
});
class ia extends Ae {
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
    return ta(s) ? s.then((i) => ({
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
ia.create = (t, e) => new ia({
  innerType: t,
  typeName: ge.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...Ie(e)
});
class oa extends Ae {
  _parse(e) {
    if (this._getType(e) !== re.nan) {
      const n = this._getOrReturnCtx(e);
      return ie(n, {
        code: H.invalid_type,
        expected: re.nan,
        received: n.parsedType
      }), ve;
    }
    return { status: "valid", value: e.data };
  }
}
oa.create = (t) => new oa({
  typeName: ge.ZodNaN,
  ...Ie(t)
});
const pS = Symbol("zod_brand");
class Mf extends Ae {
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
class so extends Ae {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return i.status === "aborted" ? ve : i.status === "dirty" ? (r.dirty(), Lf(i.value)) : this._def.out._parseAsync({
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
      return s.status === "aborted" ? ve : s.status === "dirty" ? (r.dirty(), {
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
    return new so({
      in: e,
      out: r,
      typeName: ge.ZodPipeline
    });
  }
}
const Df = (t, e = {}, r) => t ? Ls.create().superRefine((n, s) => {
  var i, a;
  if (!t(n)) {
    const o = typeof e == "function" ? e(n) : e, c = (a = (i = o.fatal) !== null && i !== void 0 ? i : r) !== null && a !== void 0 ? a : !0, u = typeof o == "string" ? { message: o } : o;
    s.addIssue({ code: "custom", ...u, fatal: c });
  }
}) : Ls.create(), gS = {
  object: pt.lazycreate
};
var ge;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline";
})(ge || (ge = {}));
const yS = (t, e = {
  message: `Input not instance of ${t.name}`
}) => Df((r) => r instanceof t, e), zf = Nr.create, $f = Rn.create, mS = oa.create, vS = An.create, Vf = Oi.create, _S = rs.create, bS = ra.create, wS = Ti.create, ES = Ci.create, SS = Ls.create, xS = Yn.create, IS = pn.create, OS = na.create, TS = Ar.create, CS = pt.create, NS = pt.strictCreate, PS = Ni.create, kS = Na.create, RS = Pi.create, AS = Jr.create, jS = ki.create, LS = sa.create, US = ns.create, MS = Is.create, DS = Ri.create, zS = Ai.create, $S = jn.create, VS = ji.create, ZS = Us.create, Dd = Ur.create, qS = ln.create, FS = ss.create, KS = Ur.createWithPreprocess, BS = so.create, HS = () => zf().optional(), WS = () => $f().optional(), GS = () => Vf().optional(), YS = {
  string: (t) => Nr.create({ ...t, coerce: !0 }),
  number: (t) => Rn.create({ ...t, coerce: !0 }),
  boolean: (t) => Oi.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => An.create({ ...t, coerce: !0 }),
  date: (t) => rs.create({ ...t, coerce: !0 })
}, QS = ve;
var zr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Ii,
  setErrorMap: tS,
  getErrorMap: Jo,
  makeIssue: Xo,
  EMPTY_PATH: rS,
  addIssueToContext: ie,
  ParseStatus: Yt,
  INVALID: ve,
  DIRTY: Lf,
  OK: sr,
  isAborted: Ac,
  isDirty: jc,
  isValid: ea,
  isAsync: ta,
  get util() {
    return Je;
  },
  get objectUtil() {
    return Rc;
  },
  ZodParsedType: re,
  getParsedType: In,
  ZodType: Ae,
  ZodString: Nr,
  ZodNumber: Rn,
  ZodBigInt: An,
  ZodBoolean: Oi,
  ZodDate: rs,
  ZodSymbol: ra,
  ZodUndefined: Ti,
  ZodNull: Ci,
  ZodAny: Ls,
  ZodUnknown: Yn,
  ZodNever: pn,
  ZodVoid: na,
  ZodArray: Ar,
  ZodObject: pt,
  ZodUnion: Ni,
  ZodDiscriminatedUnion: Na,
  ZodIntersection: Pi,
  ZodTuple: Jr,
  ZodRecord: ki,
  ZodMap: sa,
  ZodSet: ns,
  ZodFunction: Is,
  ZodLazy: Ri,
  ZodLiteral: Ai,
  ZodEnum: jn,
  ZodNativeEnum: ji,
  ZodPromise: Us,
  ZodEffects: Ur,
  ZodTransformer: Ur,
  ZodOptional: ln,
  ZodNullable: ss,
  ZodDefault: Li,
  ZodCatch: ia,
  ZodNaN: oa,
  BRAND: pS,
  ZodBranded: Mf,
  ZodPipeline: so,
  custom: Df,
  Schema: Ae,
  ZodSchema: Ae,
  late: gS,
  get ZodFirstPartyTypeKind() {
    return ge;
  },
  coerce: YS,
  any: SS,
  array: TS,
  bigint: vS,
  boolean: Vf,
  date: _S,
  discriminatedUnion: kS,
  effect: Dd,
  enum: $S,
  function: MS,
  instanceof: yS,
  intersection: RS,
  lazy: DS,
  literal: zS,
  map: LS,
  nan: mS,
  nativeEnum: VS,
  never: IS,
  null: ES,
  nullable: FS,
  number: $f,
  object: CS,
  oboolean: GS,
  onumber: WS,
  optional: qS,
  ostring: HS,
  pipeline: BS,
  preprocess: KS,
  promise: ZS,
  record: jS,
  set: US,
  strictObject: NS,
  string: zf,
  symbol: bS,
  transformer: Dd,
  tuple: AS,
  undefined: wS,
  union: PS,
  unknown: xS,
  void: OS,
  NEVER: QS,
  ZodIssueCode: H,
  quotelessJson: eS,
  ZodError: Rr
});
const Zf = /^aleo1[a-z0-9]{58}$/i, JS = /^AViewKey1[a-z0-9]{44}$/i, XS = /^APrivateKey1[a-z0-9]{47}$/i, ex = /^at1[a-z0-9]{58}$/i, tx = /^\d+field$/, rx = /^\d+u32$/, nx = /^\d+u64$/;
zr.string().regex(Zf);
zr.string().regex(JS);
zr.string().regex(XS);
zr.string().regex(ex);
zr.string().regex(tx);
zr.string().regex(rx);
zr.string().regex(nx);
var zd;
(function(t) {
  t.Record = "record", t.OutputRecord = "outputRecord", t.Public = "public", t.Private = "private", t.Constant = "constant", t.Future = "future", t.ExternalRecord = "external_record";
})(zd || (zd = {}));
var Uc;
(function(t) {
  t.Deploy = "Deploy", t.Execute = "Execute", t.Send = "Send", t.Receive = "Receive", t.Join = "Join", t.Split = "Split", t.Shield = "Shield", t.Unshield = "Unshield";
})(Uc || (Uc = {}));
var Mc;
(function(t) {
  t.Creating = "Creating", t.Pending = "Pending", t.Settled = "Settled", t.Failed = "Failed";
})(Mc || (Mc = {}));
var Dc;
(function(t) {
  t.Private = "Private", t.Public = "Public";
})(Dc || (Dc = {}));
var zc;
(function(t) {
  t.AleoTestnet = "AleoTestnet", t.AleoMainnet = "AleoMainnet";
})(zc || (zc = {}));
var $d;
(function(t) {
  t[t.ALEO = 0] = "ALEO";
})($d || ($d = {}));
zr.nativeEnum(Uc);
zr.nativeEnum(Mc);
zr.nativeEnum(zc);
zr.nativeEnum(Dc);
const qf = sg("wallet:sdk");
qf.enabled = !0;
const PI = (t, e) => {
  const r = Er(), { request: n, data: s, error: i, loading: a } = Hi({
    topic: (r == null ? void 0 : r.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "requestSignature",
      params: {
        message: t,
        address: Zf.test(e ?? "") ? e : void 0
      }
    }
  }), o = i ? i.message : s && s.error;
  return { requestSignature: () => {
    r && !a && (qf("useRequestSignature requesting...", [t, e]), n());
  }, response: s, loading: a, error: o };
};
var $c = { exports: {} }, ti = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vd;
function sx() {
  if (Vd)
    return ti;
  Vd = 1;
  var t = Xd, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(o, c, u) {
    var d, f = {}, p = null, m = null;
    u !== void 0 && (p = "" + u), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (m = c.ref);
    for (d in c)
      n.call(c, d) && !i.hasOwnProperty(d) && (f[d] = c[d]);
    if (o && o.defaultProps)
      for (d in c = o.defaultProps, c)
        f[d] === void 0 && (f[d] = c[d]);
    return { $$typeof: e, type: o, key: p, ref: m, props: f, _owner: s.current };
  }
  return ti.Fragment = r, ti.jsx = a, ti.jsxs = a, ti;
}
var ri = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zd;
function ix() {
  return Zd || (Zd = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Xd, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), b = Symbol.iterator, E = "@@iterator";
    function T(S) {
      if (S === null || typeof S != "object")
        return null;
      var D = b && S[b] || S[E];
      return typeof D == "function" ? D : null;
    }
    var U = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(S) {
      {
        for (var D = arguments.length, Q = new Array(D > 1 ? D - 1 : 0), fe = 1; fe < D; fe++)
          Q[fe - 1] = arguments[fe];
        O("error", S, Q);
      }
    }
    function O(S, D, Q) {
      {
        var fe = U.ReactDebugCurrentFrame, Be = fe.getStackAddendum();
        Be !== "" && (D += "%s", Q = Q.concat([Be]));
        var $e = Q.map(function(Ze) {
          return String(Ze);
        });
        $e.unshift("Warning: " + D), Function.prototype.apply.call(console[S], console, $e);
      }
    }
    var w = !1, x = !1, y = !1, l = !1, g = !1, P;
    P = Symbol.for("react.module.reference");
    function k(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === n || S === i || g || S === s || S === u || S === d || l || S === m || w || x || y || typeof S == "object" && S !== null && (S.$$typeof === p || S.$$typeof === f || S.$$typeof === a || S.$$typeof === o || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === P || S.getModuleId !== void 0));
    }
    function M(S, D, Q) {
      var fe = S.displayName;
      if (fe)
        return fe;
      var Be = D.displayName || D.name || "";
      return Be !== "" ? Q + "(" + Be + ")" : Q;
    }
    function G(S) {
      return S.displayName || "Context";
    }
    function Y(S) {
      if (S == null)
        return null;
      if (typeof S.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
        return S.displayName || S.name || null;
      if (typeof S == "string")
        return S;
      switch (S) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case s:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case o:
            var D = S;
            return G(D) + ".Consumer";
          case a:
            var Q = S;
            return G(Q._context) + ".Provider";
          case c:
            return M(S, S.render, "ForwardRef");
          case f:
            var fe = S.displayName || null;
            return fe !== null ? fe : Y(S.type) || "Memo";
          case p: {
            var Be = S, $e = Be._payload, Ze = Be._init;
            try {
              return Y(Ze($e));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, A = 0, X, q, $, Z, z, F, ye;
    function K() {
    }
    K.__reactDisabledLog = !0;
    function de() {
      {
        if (A === 0) {
          X = console.log, q = console.info, $ = console.warn, Z = console.error, z = console.group, F = console.groupCollapsed, ye = console.groupEnd;
          var S = {
            configurable: !0,
            enumerable: !0,
            value: K,
            writable: !0
          };
          Object.defineProperties(console, {
            info: S,
            log: S,
            warn: S,
            error: S,
            group: S,
            groupCollapsed: S,
            groupEnd: S
          });
        }
        A++;
      }
    }
    function ne() {
      {
        if (A--, A === 0) {
          var S = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, S, {
              value: X
            }),
            info: C({}, S, {
              value: q
            }),
            warn: C({}, S, {
              value: $
            }),
            error: C({}, S, {
              value: Z
            }),
            group: C({}, S, {
              value: z
            }),
            groupCollapsed: C({}, S, {
              value: F
            }),
            groupEnd: C({}, S, {
              value: ye
            })
          });
        }
        A < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = U.ReactCurrentDispatcher, L;
    function j(S, D, Q) {
      {
        if (L === void 0)
          try {
            throw Error();
          } catch (Be) {
            var fe = Be.stack.trim().match(/\n( *(at )?)/);
            L = fe && fe[1] || "";
          }
        return `
` + L + S;
      }
    }
    var N = !1, h;
    {
      var I = typeof WeakMap == "function" ? WeakMap : Map;
      h = new I();
    }
    function W(S, D) {
      if (!S || N)
        return "";
      {
        var Q = h.get(S);
        if (Q !== void 0)
          return Q;
      }
      var fe;
      N = !0;
      var Be = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $e;
      $e = le.current, le.current = null, de();
      try {
        if (D) {
          var Ze = function() {
            throw Error();
          };
          if (Object.defineProperty(Ze.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ze, []);
            } catch (Sr) {
              fe = Sr;
            }
            Reflect.construct(S, [], Ze);
          } else {
            try {
              Ze.call();
            } catch (Sr) {
              fe = Sr;
            }
            S.call(Ze.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Sr) {
            fe = Sr;
          }
          S();
        }
      } catch (Sr) {
        if (Sr && fe && typeof Sr.stack == "string") {
          for (var Me = Sr.stack.split(`
`), Mt = fe.stack.split(`
`), dt = Me.length - 1, vt = Mt.length - 1; dt >= 1 && vt >= 0 && Me[dt] !== Mt[vt]; )
            vt--;
          for (; dt >= 1 && vt >= 0; dt--, vt--)
            if (Me[dt] !== Mt[vt]) {
              if (dt !== 1 || vt !== 1)
                do
                  if (dt--, vt--, vt < 0 || Me[dt] !== Mt[vt]) {
                    var Ot = `
` + Me[dt].replace(" at new ", " at ");
                    return S.displayName && Ot.includes("<anonymous>") && (Ot = Ot.replace("<anonymous>", S.displayName)), typeof S == "function" && h.set(S, Ot), Ot;
                  }
                while (dt >= 1 && vt >= 0);
              break;
            }
        }
      } finally {
        N = !1, le.current = $e, ne(), Error.prepareStackTrace = Be;
      }
      var mn = S ? S.displayName || S.name : "", io = mn ? j(mn) : "";
      return typeof S == "function" && h.set(S, io), io;
    }
    function ee(S, D, Q) {
      return W(S, !1);
    }
    function je(S) {
      var D = S.prototype;
      return !!(D && D.isReactComponent);
    }
    function Le(S, D, Q) {
      if (S == null)
        return "";
      if (typeof S == "function")
        return W(S, je(S));
      if (typeof S == "string")
        return j(S);
      switch (S) {
        case u:
          return j("Suspense");
        case d:
          return j("SuspenseList");
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case c:
            return ee(S.render);
          case f:
            return Le(S.type, D, Q);
          case p: {
            var fe = S, Be = fe._payload, $e = fe._init;
            try {
              return Le($e(Be), D, Q);
            } catch {
            }
          }
        }
      return "";
    }
    var Oe = Object.prototype.hasOwnProperty, qe = {}, at = U.ReactDebugCurrentFrame;
    function tt(S) {
      if (S) {
        var D = S._owner, Q = Le(S.type, S._source, D ? D.type : null);
        at.setExtraStackFrame(Q);
      } else
        at.setExtraStackFrame(null);
    }
    function Ve(S, D, Q, fe, Be) {
      {
        var $e = Function.call.bind(Oe);
        for (var Ze in S)
          if ($e(S, Ze)) {
            var Me = void 0;
            try {
              if (typeof S[Ze] != "function") {
                var Mt = Error((fe || "React class") + ": " + Q + " type `" + Ze + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[Ze] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Mt.name = "Invariant Violation", Mt;
              }
              Me = S[Ze](D, Ze, fe, Q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (dt) {
              Me = dt;
            }
            Me && !(Me instanceof Error) && (tt(Be), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", fe || "React class", Q, Ze, typeof Me), tt(null)), Me instanceof Error && !(Me.message in qe) && (qe[Me.message] = !0, tt(Be), v("Failed %s type: %s", Q, Me.message), tt(null));
          }
      }
    }
    var De = Array.isArray;
    function Te(S) {
      return De(S);
    }
    function Pe(S) {
      {
        var D = typeof Symbol == "function" && Symbol.toStringTag, Q = D && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return Q;
      }
    }
    function Ce(S) {
      try {
        return we(S), !1;
      } catch {
        return !0;
      }
    }
    function we(S) {
      return "" + S;
    }
    function _e(S) {
      if (Ce(S))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Pe(S)), we(S);
    }
    var he = U.ReactCurrentOwner, ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ue, me, ze;
    ze = {};
    function Fe(S) {
      if (Oe.call(S, "ref")) {
        var D = Object.getOwnPropertyDescriptor(S, "ref").get;
        if (D && D.isReactWarning)
          return !1;
      }
      return S.ref !== void 0;
    }
    function We(S) {
      if (Oe.call(S, "key")) {
        var D = Object.getOwnPropertyDescriptor(S, "key").get;
        if (D && D.isReactWarning)
          return !1;
      }
      return S.key !== void 0;
    }
    function Ge(S, D) {
      if (typeof S.ref == "string" && he.current && D && he.current.stateNode !== D) {
        var Q = Y(he.current.type);
        ze[Q] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Y(he.current.type), S.ref), ze[Q] = !0);
      }
    }
    function Ke(S, D) {
      {
        var Q = function() {
          Ue || (Ue = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        Q.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: Q,
          configurable: !0
        });
      }
    }
    function hr(S, D) {
      {
        var Q = function() {
          me || (me = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        Q.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: Q,
          configurable: !0
        });
      }
    }
    var mr = function(S, D, Q, fe, Be, $e, Ze) {
      var Me = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: S,
        key: D,
        ref: Q,
        props: Ze,
        // Record the component responsible for creating this element.
        _owner: $e
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
        value: fe
      }), Object.defineProperty(Me, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Be
      }), Object.freeze && (Object.freeze(Me.props), Object.freeze(Me)), Me;
    };
    function $r(S, D, Q, fe, Be) {
      {
        var $e, Ze = {}, Me = null, Mt = null;
        Q !== void 0 && (_e(Q), Me = "" + Q), We(D) && (_e(D.key), Me = "" + D.key), Fe(D) && (Mt = D.ref, Ge(D, Be));
        for ($e in D)
          Oe.call(D, $e) && !ke.hasOwnProperty($e) && (Ze[$e] = D[$e]);
        if (S && S.defaultProps) {
          var dt = S.defaultProps;
          for ($e in dt)
            Ze[$e] === void 0 && (Ze[$e] = dt[$e]);
        }
        if (Me || Mt) {
          var vt = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          Me && Ke(Ze, vt), Mt && hr(Ze, vt);
        }
        return mr(S, Me, Mt, Be, fe, he.current, Ze);
      }
    }
    var Ut = U.ReactCurrentOwner, Vr = U.ReactDebugCurrentFrame;
    function vr(S) {
      if (S) {
        var D = S._owner, Q = Le(S.type, S._source, D ? D.type : null);
        Vr.setExtraStackFrame(Q);
      } else
        Vr.setExtraStackFrame(null);
    }
    var yn;
    yn = !1;
    function ct(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function st() {
      {
        if (Ut.current) {
          var S = Y(Ut.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
    }
    function gt(S) {
      {
        if (S !== void 0) {
          var D = S.fileName.replace(/^.*[\\\/]/, ""), Q = S.lineNumber;
          return `

Check your code at ` + D + ":" + Q + ".";
        }
        return "";
      }
    }
    var lt = {};
    function yt(S) {
      {
        var D = st();
        if (!D) {
          var Q = typeof S == "string" ? S : S.displayName || S.name;
          Q && (D = `

Check the top-level render call using <` + Q + ">.");
        }
        return D;
      }
    }
    function it(S, D) {
      {
        if (!S._store || S._store.validated || S.key != null)
          return;
        S._store.validated = !0;
        var Q = yt(D);
        if (lt[Q])
          return;
        lt[Q] = !0;
        var fe = "";
        S && S._owner && S._owner !== Ut.current && (fe = " It was passed a child from " + Y(S._owner.type) + "."), vr(S), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Q, fe), vr(null);
      }
    }
    function bt(S, D) {
      {
        if (typeof S != "object")
          return;
        if (Te(S))
          for (var Q = 0; Q < S.length; Q++) {
            var fe = S[Q];
            ct(fe) && it(fe, D);
          }
        else if (ct(S))
          S._store && (S._store.validated = !0);
        else if (S) {
          var Be = T(S);
          if (typeof Be == "function" && Be !== S.entries)
            for (var $e = Be.call(S), Ze; !(Ze = $e.next()).done; )
              ct(Ze.value) && it(Ze.value, D);
        }
      }
    }
    function St(S) {
      {
        var D = S.type;
        if (D == null || typeof D == "string")
          return;
        var Q;
        if (typeof D == "function")
          Q = D.propTypes;
        else if (typeof D == "object" && (D.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        D.$$typeof === f))
          Q = D.propTypes;
        else
          return;
        if (Q) {
          var fe = Y(D);
          Ve(Q, S.props, "prop", fe, S);
        } else if (D.PropTypes !== void 0 && !yn) {
          yn = !0;
          var Be = Y(D);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Be || "Unknown");
        }
        typeof D.getDefaultProps == "function" && !D.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xt(S) {
      {
        for (var D = Object.keys(S.props), Q = 0; Q < D.length; Q++) {
          var fe = D[Q];
          if (fe !== "children" && fe !== "key") {
            vr(S), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", fe), vr(null);
            break;
          }
        }
        S.ref !== null && (vr(S), v("Invalid attribute `ref` supplied to `React.Fragment`."), vr(null));
      }
    }
    function wt(S, D, Q, fe, Be, $e) {
      {
        var Ze = k(S);
        if (!Ze) {
          var Me = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (Me += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Mt = gt(Be);
          Mt ? Me += Mt : Me += st();
          var dt;
          S === null ? dt = "null" : Te(S) ? dt = "array" : S !== void 0 && S.$$typeof === e ? (dt = "<" + (Y(S.type) || "Unknown") + " />", Me = " Did you accidentally export a JSX literal instead of a component?") : dt = typeof S, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", dt, Me);
        }
        var vt = $r(S, D, Q, Be, $e);
        if (vt == null)
          return vt;
        if (Ze) {
          var Ot = D.children;
          if (Ot !== void 0)
            if (fe)
              if (Te(Ot)) {
                for (var mn = 0; mn < Ot.length; mn++)
                  bt(Ot[mn], S);
                Object.freeze && Object.freeze(Ot);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              bt(Ot, S);
        }
        return S === n ? xt(vt) : St(vt), vt;
      }
    }
    function It(S, D, Q) {
      return wt(S, D, Q, !0);
    }
    function Et(S, D, Q) {
      return wt(S, D, Q, !1);
    }
    var mt = Et, rt = It;
    ri.Fragment = n, ri.jsx = mt, ri.jsxs = rt;
  }()), ri;
}
process.env.NODE_ENV === "production" ? $c.exports = sx() : $c.exports = ix();
var Vc = $c.exports, Ee = {
  context: void 0,
  registry: void 0
};
function si(t) {
  Ee.context = t;
}
var ox = (t, e) => t === e, aa = Symbol("solid-proxy"), Ff = Symbol("solid-track"), ca = {
  equals: ox
}, Kf = Qf, gn = 1, ua = 2, Bf = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
}, Ga = {}, Ye = null, Ya = null, ax = null, Xe = null, Wt = null, dn = null, Pa = 0;
function Qn(t, e) {
  const r = Xe, n = Ye, s = t.length === 0, i = e === void 0 ? n : e, a = s ? Bf : {
    owned: null,
    cleanups: null,
    context: i ? i.context : null,
    owner: i
  }, o = s ? t : () => t(() => Lt(() => Ra(a)));
  Ye = a, Xe = null;
  try {
    return Xr(o, !0);
  } finally {
    Xe = r, Ye = n;
  }
}
function er(t, e) {
  e = e ? Object.assign({}, ca, e) : ca;
  const r = {
    value: t,
    observers: null,
    observerSlots: null,
    comparator: e.equals || void 0
  }, n = (s) => (typeof s == "function" && (s = s(r.value)), Yf(r, s));
  return [Gf.bind(r), n];
}
function qd(t, e, r) {
  const n = ka(t, e, !0, gn);
  qs(n);
}
function Jn(t, e, r) {
  const n = ka(t, e, !1, gn);
  qs(n);
}
function Hf(t, e, r) {
  Kf = mx;
  const n = ka(t, e, !1, gn);
  (!r || !r.render) && (n.user = !0), dn ? dn.push(n) : qs(n);
}
function lr(t, e, r) {
  r = r ? Object.assign({}, ca, r) : ca;
  const n = ka(t, e, !0, 0);
  return n.observers = null, n.observerSlots = null, n.comparator = r.equals || void 0, qs(n), Gf.bind(n);
}
function cx(t) {
  return t && typeof t == "object" && "then" in t;
}
function ux(t, e, r) {
  let n, s, i;
  arguments.length === 2 && typeof e == "object" || arguments.length === 1 ? (n = !0, s = t, i = e || {}) : (n = t, s = e, i = r || {});
  let a = null, o = Ga, c = null, u = !1, d = "initialValue" in i, f = typeof n == "function" && lr(n);
  const p = /* @__PURE__ */ new Set(), [m, b] = (i.storage || er)(i.initialValue), [E, T] = er(void 0), [U, v] = er(void 0, {
    equals: !1
  }), [O, w] = er(d ? "ready" : "unresolved");
  if (Ee.context) {
    c = `${Ee.context.id}${Ee.context.count++}`;
    let P;
    i.ssrLoadFrom === "initial" ? o = i.initialValue : Ee.load && (P = Ee.load(c)) && (o = P);
  }
  function x(P, k, M, G) {
    return a === P && (a = null, G !== void 0 && (d = !0), (P === o || k === o) && i.onHydrated && queueMicrotask(() => i.onHydrated(G, {
      value: k
    })), o = Ga, y(k, M)), k;
  }
  function y(P, k) {
    Xr(() => {
      k === void 0 && b(() => P), w(k !== void 0 ? "errored" : d ? "ready" : "unresolved"), T(k);
      for (const M of p.keys())
        M.decrement();
      p.clear();
    }, !1);
  }
  function l() {
    const P = px, k = m(), M = E();
    if (M !== void 0 && !a)
      throw M;
    return Xe && !Xe.user && P && qd(() => {
      U(), a && (P.resolved || p.has(P) || (P.increment(), p.add(P)));
    }), k;
  }
  function g(P = !0) {
    if (P !== !1 && u)
      return;
    u = !1;
    const k = f ? f() : n;
    if (k == null || k === !1) {
      x(a, Lt(m));
      return;
    }
    const M = o !== Ga ? o : Lt(() => s(k, {
      value: m(),
      refetching: P
    }));
    return cx(M) ? (a = M, "value" in M ? (M.status === "success" ? x(a, M.value, void 0, k) : x(a, void 0, void 0, k), M) : (u = !0, queueMicrotask(() => u = !1), Xr(() => {
      w(d ? "refreshing" : "pending"), v();
    }, !1), M.then((G) => x(M, G, void 0, k), (G) => x(M, void 0, Xf(G), k)))) : (x(a, M, void 0, k), M);
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
        const P = O();
        return P === "pending" || P === "refreshing";
      }
    },
    latest: {
      get() {
        if (!d)
          return l();
        const P = E();
        if (P && !a)
          throw P;
        return m();
      }
    }
  }), f ? qd(() => g(!1)) : g(!1), [l, {
    refetch: g,
    mutate: b
  }];
}
function kI(t) {
  return Xr(t, !1);
}
function Lt(t) {
  if (Xe === null)
    return t();
  const e = Xe;
  Xe = null;
  try {
    return t();
  } finally {
    Xe = e;
  }
}
function RI(t, e, r) {
  const n = Array.isArray(t);
  let s, i = r && r.defer;
  return (a) => {
    let o;
    if (n) {
      o = Array(t.length);
      for (let u = 0; u < t.length; u++)
        o[u] = t[u]();
    } else
      o = t();
    if (i) {
      i = !1;
      return;
    }
    const c = Lt(() => e(o, s, a));
    return s = o, c;
  };
}
function lx(t) {
  Hf(() => Lt(t));
}
function Ui(t) {
  return Ye === null || (Ye.cleanups === null ? Ye.cleanups = [t] : Ye.cleanups.push(t)), t;
}
function AI() {
  return Xe;
}
function Fd() {
  return Ye;
}
function dx(t, e) {
  const r = Ye, n = Xe;
  Ye = t, Xe = null;
  try {
    return Xr(e, !0);
  } catch (s) {
    Nu(s);
  } finally {
    Ye = r, Xe = n;
  }
}
function hx(t) {
  const e = Xe, r = Ye;
  return Promise.resolve().then(() => {
    Xe = e, Ye = r;
    let n;
    return Xr(t, !1), Xe = Ye = null, n ? n.done : void 0;
  });
}
var [fx, jI] = /* @__PURE__ */ er(!1);
function LI() {
  return [fx, hx];
}
function UI(t, e) {
  const r = Symbol("context");
  return {
    id: r,
    Provider: vx(r),
    defaultValue: t
  };
}
function MI(t) {
  return Ye && Ye.context && Ye.context[t.id] !== void 0 ? Ye.context[t.id] : t.defaultValue;
}
function Wf(t) {
  const e = lr(t), r = lr(() => Zc(e()));
  return r.toArray = () => {
    const n = r();
    return Array.isArray(n) ? n : n != null ? [n] : [];
  }, r;
}
var px;
function Gf() {
  if (this.sources && this.state)
    if (this.state === gn)
      qs(this);
    else {
      const t = Wt;
      Wt = null, Xr(() => da(this), !1), Wt = t;
    }
  if (Xe) {
    const t = this.observers ? this.observers.length : 0;
    Xe.sources ? (Xe.sources.push(this), Xe.sourceSlots.push(t)) : (Xe.sources = [this], Xe.sourceSlots = [t]), this.observers ? (this.observers.push(Xe), this.observerSlots.push(Xe.sources.length - 1)) : (this.observers = [Xe], this.observerSlots = [Xe.sources.length - 1]);
  }
  return this.value;
}
function Yf(t, e, r) {
  let n = t.value;
  return (!t.comparator || !t.comparator(n, e)) && (t.value = e, t.observers && t.observers.length && Xr(() => {
    for (let s = 0; s < t.observers.length; s += 1) {
      const i = t.observers[s], a = Ya && Ya.running;
      a && Ya.disposed.has(i), (a ? !i.tState : !i.state) && (i.pure ? Wt.push(i) : dn.push(i), i.observers && Jf(i)), a || (i.state = gn);
    }
    if (Wt.length > 1e6)
      throw Wt = [], new Error();
  }, !1)), e;
}
function qs(t) {
  if (!t.fn)
    return;
  Ra(t);
  const e = Pa;
  gx(t, t.value, e);
}
function gx(t, e, r) {
  let n;
  const s = Ye, i = Xe;
  Xe = Ye = t;
  try {
    n = t.fn(e);
  } catch (a) {
    return t.pure && (t.state = gn, t.owned && t.owned.forEach(Ra), t.owned = null), t.updatedAt = r + 1, Nu(a);
  } finally {
    Xe = i, Ye = s;
  }
  (!t.updatedAt || t.updatedAt <= r) && (t.updatedAt != null && "observers" in t ? Yf(t, n) : t.value = n, t.updatedAt = r);
}
function ka(t, e, r, n = gn, s) {
  const i = {
    fn: t,
    state: n,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: e,
    owner: Ye,
    context: Ye ? Ye.context : null,
    pure: r
  };
  return Ye === null || Ye !== Bf && (Ye.owned ? Ye.owned.push(i) : Ye.owned = [i]), i;
}
function la(t) {
  if (t.state === 0)
    return;
  if (t.state === ua)
    return da(t);
  if (t.suspense && Lt(t.suspense.inFallback))
    return t.suspense.effects.push(t);
  const e = [t];
  for (; (t = t.owner) && (!t.updatedAt || t.updatedAt < Pa); )
    t.state && e.push(t);
  for (let r = e.length - 1; r >= 0; r--)
    if (t = e[r], t.state === gn)
      qs(t);
    else if (t.state === ua) {
      const n = Wt;
      Wt = null, Xr(() => da(t, e[0]), !1), Wt = n;
    }
}
function Xr(t, e) {
  if (Wt)
    return t();
  let r = !1;
  e || (Wt = []), dn ? r = !0 : dn = [], Pa++;
  try {
    const n = t();
    return yx(r), n;
  } catch (n) {
    r || (dn = null), Wt = null, Nu(n);
  }
}
function yx(t) {
  if (Wt && (Qf(Wt), Wt = null), t)
    return;
  const e = dn;
  dn = null, e.length && Xr(() => Kf(e), !1);
}
function Qf(t) {
  for (let e = 0; e < t.length; e++)
    la(t[e]);
}
function mx(t) {
  let e, r = 0;
  for (e = 0; e < t.length; e++) {
    const n = t[e];
    n.user ? t[r++] = n : la(n);
  }
  if (Ee.context) {
    if (Ee.count) {
      Ee.effects || (Ee.effects = []), Ee.effects.push(...t.slice(0, r));
      return;
    } else
      Ee.effects && (t = [...Ee.effects, ...t], r += Ee.effects.length, delete Ee.effects);
    si();
  }
  for (e = 0; e < r; e++)
    la(t[e]);
}
function da(t, e) {
  t.state = 0;
  for (let r = 0; r < t.sources.length; r += 1) {
    const n = t.sources[r];
    if (n.sources) {
      const s = n.state;
      s === gn ? n !== e && (!n.updatedAt || n.updatedAt < Pa) && la(n) : s === ua && da(n, e);
    }
  }
}
function Jf(t) {
  for (let e = 0; e < t.observers.length; e += 1) {
    const r = t.observers[e];
    r.state || (r.state = ua, r.pure ? Wt.push(r) : dn.push(r), r.observers && Jf(r));
  }
}
function Ra(t) {
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
      Ra(t.owned[e]);
    t.owned = null;
  }
  if (t.cleanups) {
    for (e = t.cleanups.length - 1; e >= 0; e--)
      t.cleanups[e]();
    t.cleanups = null;
  }
  t.state = 0;
}
function Xf(t) {
  return t instanceof Error ? t : new Error(typeof t == "string" ? t : "Unknown error", {
    cause: t
  });
}
function Nu(t, e = Ye) {
  throw Xf(t);
}
function Zc(t) {
  if (typeof t == "function" && !t.length)
    return Zc(t());
  if (Array.isArray(t)) {
    const e = [];
    for (let r = 0; r < t.length; r++) {
      const n = Zc(t[r]);
      Array.isArray(n) ? e.push.apply(e, n) : e.push(n);
    }
    return e;
  }
  return t;
}
function vx(t, e) {
  return function(n) {
    let s;
    return Jn(() => s = Lt(() => (Ye.context = {
      ...Ye.context,
      [t]: n.value
    }, Wf(() => n.children))), void 0), s;
  };
}
var qc = Symbol("fallback");
function ha(t) {
  for (let e = 0; e < t.length; e++)
    t[e]();
}
function _x(t, e, r = {}) {
  let n = [], s = [], i = [], a = 0, o = e.length > 1 ? [] : null;
  return Ui(() => ha(i)), () => {
    let c = t() || [], u, d;
    return c[Ff], Lt(() => {
      let p = c.length, m, b, E, T, U, v, O, w, x;
      if (p === 0)
        a !== 0 && (ha(i), i = [], n = [], s = [], a = 0, o && (o = [])), r.fallback && (n = [qc], s[0] = Qn((y) => (i[0] = y, r.fallback())), a = 1);
      else if (a === 0) {
        for (s = new Array(p), d = 0; d < p; d++)
          n[d] = c[d], s[d] = Qn(f);
        a = p;
      } else {
        for (E = new Array(p), T = new Array(p), o && (U = new Array(p)), v = 0, O = Math.min(a, p); v < O && n[v] === c[v]; v++)
          ;
        for (O = a - 1, w = p - 1; O >= v && w >= v && n[O] === c[w]; O--, w--)
          E[w] = s[O], T[w] = i[O], o && (U[w] = o[O]);
        for (m = /* @__PURE__ */ new Map(), b = new Array(w + 1), d = w; d >= v; d--)
          x = c[d], u = m.get(x), b[d] = u === void 0 ? -1 : u, m.set(x, d);
        for (u = v; u <= O; u++)
          x = n[u], d = m.get(x), d !== void 0 && d !== -1 ? (E[d] = s[u], T[d] = i[u], o && (U[d] = o[u]), d = b[d], m.set(x, d)) : i[u]();
        for (d = v; d < p; d++)
          d in E ? (s[d] = E[d], i[d] = T[d], o && (o[d] = U[d], o[d](d))) : s[d] = Qn(f);
        s = s.slice(0, a = p), n = c.slice(0);
      }
      return s;
    });
    function f(p) {
      if (i[d] = p, o) {
        const [m, b] = er(d);
        return o[d] = b, e(c[d], m);
      }
      return e(c[d]);
    }
  };
}
function bx(t, e, r = {}) {
  let n = [], s = [], i = [], a = [], o = 0, c;
  return Ui(() => ha(i)), () => {
    const u = t() || [];
    return u[Ff], Lt(() => {
      if (u.length === 0)
        return o !== 0 && (ha(i), i = [], n = [], s = [], o = 0, a = []), r.fallback && (n = [qc], s[0] = Qn((f) => (i[0] = f, r.fallback())), o = 1), s;
      for (n[0] === qc && (i[0](), i = [], n = [], s = [], o = 0), c = 0; c < u.length; c++)
        c < n.length && n[c] !== u[c] ? a[c](() => u[c]) : c >= n.length && (s[c] = Qn(d));
      for (; c < n.length; c++)
        i[c]();
      return o = a.length = i.length = u.length, n = u.slice(0), s = s.slice(0, o);
    });
    function d(f) {
      i[c] = f;
      const [p, m] = er(u[c]);
      return a[c] = m, e(p, c);
    }
  };
}
function wx(t, e) {
  return Lt(() => t(e || {}));
}
function bo() {
  return !0;
}
var Fc = {
  get(t, e, r) {
    return e === aa ? r : t.get(e);
  },
  has(t, e) {
    return e === aa ? !0 : t.has(e);
  },
  set: bo,
  deleteProperty: bo,
  getOwnPropertyDescriptor(t, e) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return t.get(e);
      },
      set: bo,
      deleteProperty: bo
    };
  },
  ownKeys(t) {
    return t.keys();
  }
};
function Qa(t) {
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
  for (let a = 0; a < t.length; a++) {
    const o = t[a];
    e = e || !!o && aa in o, t[a] = typeof o == "function" ? (e = !0, lr(o)) : o;
  }
  if (e)
    return new Proxy({
      get(a) {
        for (let o = t.length - 1; o >= 0; o--) {
          const c = Qa(t[o])[a];
          if (c !== void 0)
            return c;
        }
      },
      has(a) {
        for (let o = t.length - 1; o >= 0; o--)
          if (a in Qa(t[o]))
            return !0;
        return !1;
      },
      keys() {
        const a = [];
        for (let o = 0; o < t.length; o++)
          a.push(...Object.keys(Qa(t[o])));
        return [...new Set(a)];
      }
    }, Fc);
  const r = {}, n = /* @__PURE__ */ Object.create(null);
  for (let a = t.length - 1; a >= 0; a--) {
    const o = t[a];
    if (!o)
      continue;
    const c = Object.getOwnPropertyNames(o);
    for (let u = c.length - 1; u >= 0; u--) {
      const d = c[u];
      if (d === "__proto__" || d === "constructor")
        continue;
      const f = Object.getOwnPropertyDescriptor(o, d);
      if (!n[d])
        n[d] = f.get ? {
          enumerable: !0,
          configurable: !0,
          get: Ex.bind(r[d] = [f.get.bind(o)])
        } : f.value !== void 0 ? f : void 0;
      else {
        const p = r[d];
        p && (f.get ? p.push(f.get.bind(o)) : f.value !== void 0 && p.push(() => f.value));
      }
    }
  }
  const s = {}, i = Object.keys(n);
  for (let a = i.length - 1; a >= 0; a--) {
    const o = i[a], c = n[o];
    c && c.get ? Object.defineProperty(s, o, c) : s[o] = c ? c.value : void 0;
  }
  return s;
}
function xx(t, ...e) {
  if (aa in t) {
    const s = new Set(e.length > 1 ? e.flat() : e[0]), i = e.map((a) => new Proxy({
      get(o) {
        return a.includes(o) ? t[o] : void 0;
      },
      has(o) {
        return a.includes(o) && o in t;
      },
      keys() {
        return a.filter((o) => o in t);
      }
    }, Fc));
    return i.push(new Proxy({
      get(a) {
        return s.has(a) ? void 0 : t[a];
      },
      has(a) {
        return s.has(a) ? !1 : a in t;
      },
      keys() {
        return Object.keys(t).filter((a) => !s.has(a));
      }
    }, Fc)), i;
  }
  const r = {}, n = e.map(() => ({}));
  for (const s of Object.getOwnPropertyNames(t)) {
    const i = Object.getOwnPropertyDescriptor(t, s), a = !i.get && !i.set && i.enumerable && i.writable && i.configurable;
    let o = !1, c = 0;
    for (const u of e)
      u.includes(s) && (o = !0, a ? n[c][s] = i.value : Object.defineProperty(n[c], s, i)), ++c;
    o || (a ? r[s] = i.value : Object.defineProperty(r, s, i));
  }
  return [...n, r];
}
function Ix(t) {
  let e, r;
  const n = (s) => {
    const i = Ee.context;
    if (i) {
      const [o, c] = er();
      Ee.count || (Ee.count = 0), Ee.count++, (r || (r = t())).then((u) => {
        si(i), Ee.count--, c(() => u.default), si();
      }), e = o;
    } else if (!e) {
      const [o] = ux(() => (r || (r = t())).then((c) => c.default));
      e = o;
    }
    let a;
    return lr(() => (a = e()) && Lt(() => {
      if (!i)
        return a(s);
      const o = Ee.context;
      si(i);
      const c = a(s);
      return si(o), c;
    }));
  };
  return n.preload = () => r || ((r = t()).then((s) => e = () => s.default), r), n;
}
var Ox = 0;
function DI() {
  const t = Ee.context;
  return t ? `${t.id}${t.count++}` : `cl-${Ox++}`;
}
var ep = (t) => `Stale read from <${t}>.`;
function zI(t) {
  const e = "fallback" in t && {
    fallback: () => t.fallback
  };
  return lr(_x(() => t.each, t.children, e || void 0));
}
function $I(t) {
  const e = "fallback" in t && {
    fallback: () => t.fallback
  };
  return lr(bx(() => t.each, t.children, e || void 0));
}
function VI(t) {
  const e = t.keyed, r = lr(() => t.when, void 0, {
    equals: (n, s) => e ? n === s : !n == !s
  });
  return lr(() => {
    const n = r();
    if (n) {
      const s = t.children;
      return typeof s == "function" && s.length > 0 ? Lt(() => s(e ? n : () => {
        if (!Lt(r))
          throw ep("Show");
        return t.when;
      })) : s;
    }
    return t.fallback;
  }, void 0, void 0);
}
function ZI(t) {
  let e = !1;
  const r = (i, a) => (e ? i[1] === a[1] : !i[1] == !a[1]) && i[2] === a[2], n = Wf(() => t.children), s = lr(() => {
    let i = n();
    Array.isArray(i) || (i = [i]);
    for (let a = 0; a < i.length; a++) {
      const o = i[a].when;
      if (o)
        return e = !!i[a].keyed, [a, o, i[a]];
    }
    return [-1];
  }, void 0, {
    equals: r
  });
  return lr(() => {
    const [i, a, o] = s();
    if (i < 0)
      return t.fallback;
    const c = o.children;
    return typeof c == "function" && c.length > 0 ? Lt(() => c(e ? a : () => {
      if (Lt(s)[0] !== i)
        throw ep("Match");
      return o.when;
    })) : c;
  }, void 0, void 0);
}
function qI(t) {
  return t;
}
var Tx = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"], Cx = /* @__PURE__ */ new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...Tx]), Nx = /* @__PURE__ */ new Set(["innerHTML", "textContent", "innerText", "children"]), Px = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  className: "class",
  htmlFor: "for"
}), kx = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
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
function Rx(t, e) {
  const r = kx[t];
  return typeof r == "object" ? r[e] ? r.$ : void 0 : r;
}
var Ax = /* @__PURE__ */ new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]), jx = /* @__PURE__ */ new Set([
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
]), Lx = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
function Ux(t, e, r) {
  let n = r.length, s = e.length, i = n, a = 0, o = 0, c = e[s - 1].nextSibling, u = null;
  for (; a < s || o < i; ) {
    if (e[a] === r[o]) {
      a++, o++;
      continue;
    }
    for (; e[s - 1] === r[i - 1]; )
      s--, i--;
    if (s === a) {
      const d = i < n ? o ? r[o - 1].nextSibling : r[i - o] : c;
      for (; o < i; )
        t.insertBefore(r[o++], d);
    } else if (i === o)
      for (; a < s; )
        (!u || !u.has(e[a])) && e[a].remove(), a++;
    else if (e[a] === r[i - 1] && r[o] === e[s - 1]) {
      const d = e[--s].nextSibling;
      t.insertBefore(r[o++], e[a++].nextSibling), t.insertBefore(r[--i], d), e[s] = r[i];
    } else {
      if (!u) {
        u = /* @__PURE__ */ new Map();
        let f = o;
        for (; f < i; )
          u.set(r[f], f++);
      }
      const d = u.get(e[a]);
      if (d != null)
        if (o < d && d < i) {
          let f = a, p = 1, m;
          for (; ++f < s && f < i && !((m = u.get(e[f])) == null || m !== d + p); )
            p++;
          if (p > d - o) {
            const b = e[a];
            for (; o < d; )
              t.insertBefore(r[o++], b);
          } else
            t.replaceChild(r[o++], e[a++]);
        } else
          a++;
      else
        e[a++].remove();
    }
  }
}
var ai = "_$DX_DELEGATE";
function Mx(t, e, r, n = {}) {
  let s;
  return Qn((i) => {
    s = i, e === document ? t() : Bc(e, t(), e.firstChild ? null : void 0, r);
  }, n.owner), () => {
    s(), e.textContent = "";
  };
}
function FI(t, e, r) {
  let n;
  const s = () => {
    const a = document.createElement("template");
    return a.innerHTML = t, r ? a.content.firstChild.firstChild : a.content.firstChild;
  }, i = e ? () => Lt(() => document.importNode(n || (n = s()), !0)) : () => (n || (n = s())).cloneNode(!0);
  return i.cloneNode = i, i;
}
function Dx(t, e = window.document) {
  const r = e[ai] || (e[ai] = /* @__PURE__ */ new Set());
  for (let n = 0, s = t.length; n < s; n++) {
    const i = t[n];
    r.has(i) || (r.add(i), e.addEventListener(i, tp));
  }
}
function KI(t = window.document) {
  if (t[ai]) {
    for (let e of t[ai].keys())
      t.removeEventListener(e, tp);
    delete t[ai];
  }
}
function Kc(t, e, r) {
  Ee.context || (r == null ? t.removeAttribute(e) : t.setAttribute(e, r));
}
function zx(t, e, r, n) {
  Ee.context || (n == null ? t.removeAttributeNS(e, r) : t.setAttributeNS(e, r, n));
}
function $x(t, e) {
  Ee.context || (e == null ? t.removeAttribute("class") : t.className = e);
}
function Vx(t, e, r, n) {
  if (n)
    Array.isArray(r) ? (t[`$$${e}`] = r[0], t[`$$${e}Data`] = r[1]) : t[`$$${e}`] = r;
  else if (Array.isArray(r)) {
    const s = r[0];
    t.addEventListener(e, r[0] = (i) => s.call(t, r[1], i));
  } else
    t.addEventListener(e, r);
}
function Zx(t, e, r = {}) {
  const n = Object.keys(e || {}), s = Object.keys(r);
  let i, a;
  for (i = 0, a = s.length; i < a; i++) {
    const o = s[i];
    !o || o === "undefined" || e[o] || (Kd(t, o, !1), delete r[o]);
  }
  for (i = 0, a = n.length; i < a; i++) {
    const o = n[i], c = !!e[o];
    !o || o === "undefined" || r[o] === c || !c || (Kd(t, o, !0), r[o] = c);
  }
  return r;
}
function qx(t, e, r) {
  if (!e)
    return r ? Kc(t, "style") : e;
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
function Fx(t, e = {}, r, n) {
  const s = {};
  return n || Jn(() => s.children = Ms(t, e.children, s.children)), Jn(() => e.ref && e.ref(t)), Jn(() => Kx(t, e, r, !0, s, !0)), s;
}
function BI(t, e, r) {
  return Lt(() => t(e, r));
}
function Bc(t, e, r, n) {
  if (r !== void 0 && !n && (n = []), typeof e != "function")
    return Ms(t, e, n, r);
  Jn((s) => Ms(t, e(), s, r), n);
}
function Kx(t, e, r, n, s = {}, i = !1) {
  e || (e = {});
  for (const a in s)
    if (!(a in e)) {
      if (a === "children")
        continue;
      s[a] = Bd(t, a, null, s[a], r, i);
    }
  for (const a in e) {
    if (a === "children") {
      n || Ms(t, e.children);
      continue;
    }
    const o = e[a];
    s[a] = Bd(t, a, o, s[a], r, i);
  }
}
function Bx(t) {
  let e, r;
  return !Ee.context || !(e = Ee.registry.get(r = Wx())) ? t() : (Ee.completed && Ee.completed.add(e), Ee.registry.delete(r), e);
}
function Hx(t) {
  return t.toLowerCase().replace(/-([a-z])/g, (e, r) => r.toUpperCase());
}
function Kd(t, e, r) {
  const n = e.trim().split(/\s+/);
  for (let s = 0, i = n.length; s < i; s++)
    t.classList.toggle(n[s], r);
}
function Bd(t, e, r, n, s, i) {
  let a, o, c, u, d;
  if (e === "style")
    return qx(t, r, n);
  if (e === "classList")
    return Zx(t, r, n);
  if (r === n)
    return n;
  if (e === "ref")
    i || r(t);
  else if (e.slice(0, 3) === "on:") {
    const f = e.slice(3);
    n && t.removeEventListener(f, n), r && t.addEventListener(f, r);
  } else if (e.slice(0, 10) === "oncapture:") {
    const f = e.slice(10);
    n && t.removeEventListener(f, n, !0), r && t.addEventListener(f, r, !0);
  } else if (e.slice(0, 2) === "on") {
    const f = e.slice(2).toLowerCase(), p = Ax.has(f);
    if (!p && n) {
      const m = Array.isArray(n) ? n[0] : n;
      t.removeEventListener(f, m);
    }
    (p || r) && (Vx(t, f, r, p), p && Dx([f]));
  } else if (e.slice(0, 5) === "attr:")
    Kc(t, e.slice(5), r);
  else if ((d = e.slice(0, 5) === "prop:") || (c = Nx.has(e)) || !s && ((u = Rx(e, t.tagName)) || (o = Cx.has(e))) || (a = t.nodeName.includes("-"))) {
    if (d)
      e = e.slice(5), o = !0;
    else if (Ee.context)
      return r;
    e === "class" || e === "className" ? $x(t, r) : a && !o && !c ? t[Hx(e)] = r : t[u || e] = r;
  } else {
    const f = s && e.indexOf(":") > -1 && Lx[e.split(":")[0]];
    f ? zx(t, f, e, r) : Kc(t, Px[e] || e, r);
  }
  return r;
}
function tp(t) {
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
  }), Ee.registry && !Ee.done && (Ee.done = _$HY.done = !0); r; ) {
    const n = r[e];
    if (n && !r.disabled) {
      const s = r[`${e}Data`];
      if (s !== void 0 ? n.call(r, s, t) : n.call(r, t), t.cancelBubble)
        return;
    }
    r = r._$host || r.parentNode || r.host;
  }
}
function Ms(t, e, r, n, s) {
  if (Ee.context) {
    !r && (r = [...t.childNodes]);
    let o = [];
    for (let c = 0; c < r.length; c++) {
      const u = r[c];
      u.nodeType === 8 && u.data.slice(0, 2) === "!$" ? u.remove() : o.push(u);
    }
    r = o;
  }
  for (; typeof r == "function"; )
    r = r();
  if (e === r)
    return r;
  const i = typeof e, a = n !== void 0;
  if (t = a && r[0] && r[0].parentNode || t, i === "string" || i === "number") {
    if (Ee.context)
      return r;
    if (i === "number" && (e = e.toString()), a) {
      let o = r[0];
      o && o.nodeType === 3 ? o.data !== e && (o.data = e) : o = document.createTextNode(e), r = gs(t, r, n, o);
    } else
      r !== "" && typeof r == "string" ? r = t.firstChild.data = e : r = t.textContent = e;
  } else if (e == null || i === "boolean") {
    if (Ee.context)
      return r;
    r = gs(t, r, n);
  } else {
    if (i === "function")
      return Jn(() => {
        let o = e();
        for (; typeof o == "function"; )
          o = o();
        r = Ms(t, o, r, n);
      }), () => r;
    if (Array.isArray(e)) {
      const o = [], c = r && Array.isArray(r);
      if (Hc(o, e, r, s))
        return Jn(() => r = Ms(t, o, r, n, !0)), () => r;
      if (Ee.context) {
        if (!o.length)
          return r;
        if (n === void 0)
          return [...t.childNodes];
        let u = o[0], d = [u];
        for (; (u = u.nextSibling) !== n; )
          d.push(u);
        return r = d;
      }
      if (o.length === 0) {
        if (r = gs(t, r, n), a)
          return r;
      } else
        c ? r.length === 0 ? Hd(t, o, n) : Ux(t, r, o) : (r && gs(t), Hd(t, o));
      r = o;
    } else if (e.nodeType) {
      if (Ee.context && e.parentNode)
        return r = a ? [e] : e;
      if (Array.isArray(r)) {
        if (a)
          return r = gs(t, r, n, e);
        gs(t, r, null, e);
      } else
        r == null || r === "" || !t.firstChild ? t.appendChild(e) : t.replaceChild(e, t.firstChild);
      r = e;
    }
  }
  return r;
}
function Hc(t, e, r, n) {
  let s = !1;
  for (let i = 0, a = e.length; i < a; i++) {
    let o = e[i], c = r && r[i], u;
    if (!(o == null || o === !0 || o === !1))
      if ((u = typeof o) == "object" && o.nodeType)
        t.push(o);
      else if (Array.isArray(o))
        s = Hc(t, o, c) || s;
      else if (u === "function")
        if (n) {
          for (; typeof o == "function"; )
            o = o();
          s = Hc(t, Array.isArray(o) ? o : [o], Array.isArray(c) ? c : [c]) || s;
        } else
          t.push(o), s = !0;
      else {
        const d = String(o);
        c && c.nodeType === 3 && c.data === d ? t.push(c) : t.push(document.createTextNode(d));
      }
  }
  return s;
}
function Hd(t, e, r = null) {
  for (let n = 0, s = e.length; n < s; n++)
    t.insertBefore(e[n], r);
}
function gs(t, e, r, n) {
  if (r === void 0)
    return t.textContent = "";
  const s = n || document.createTextNode("");
  if (e.length) {
    let i = !1;
    for (let a = e.length - 1; a >= 0; a--) {
      const o = e[a];
      if (s !== o) {
        const c = o.parentNode === t;
        !i && !a ? c ? t.replaceChild(s, o) : t.insertBefore(s, r) : c && o.remove();
      } else
        i = !0;
    }
  } else
    t.insertBefore(s, r);
  return [s];
}
function Wx() {
  const t = Ee.context;
  return `${t.id}${t.count++}`;
}
var Gx = "http://www.w3.org/2000/svg";
function rp(t, e = !1) {
  return e ? document.createElementNS(Gx, t) : document.createElement(t);
}
function HI(t) {
  const {
    useShadow: e
  } = t, r = document.createTextNode(""), n = () => t.mount || document.body, s = Fd();
  let i, a = !!Ee.context;
  return Hf(() => {
    a && (Fd().user = a = !1), i || (i = dx(s, () => lr(() => t.children)));
    const o = n();
    if (o instanceof HTMLHeadElement) {
      const [c, u] = er(!1), d = () => u(!0);
      Qn((f) => Bc(o, () => c() ? f() : i(), null)), Ui(d);
    } else {
      const c = rp(t.isSVG ? "g" : "div", t.isSVG), u = e && c.attachShadow ? c.attachShadow({
        mode: "open"
      }) : c;
      Object.defineProperty(c, "_$host", {
        get() {
          return r.parentNode;
        },
        configurable: !0
      }), Bc(u, i), o.appendChild(c), t.ref && t.ref(c), Ui(() => o.removeChild(c));
    }
  }, void 0, {
    render: !a
  }), r;
}
function WI(t) {
  const [e, r] = xx(t, ["component"]), n = lr(() => e.component);
  return lr(() => {
    const s = n();
    switch (typeof s) {
      case "function":
        return Lt(() => s(r));
      case "string":
        const i = jx.has(s), a = Ee.context ? Bx() : rp(s, i);
        return Fx(a, r, i), a;
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
), np = (
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
), Qx = /* @__PURE__ */ function() {
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
}(), Jx = (
  /** @class */
  function(t) {
    Qx(e, t);
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
  }(np)
), Xx = function(t, e) {
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
function e6(t) {
  if ("values" in Object)
    return Object.values(t);
  var e = [];
  for (var r in t)
    t.hasOwnProperty(r) && e.push(t[r]);
  return e;
}
function t6(t, e) {
  var r = e6(t);
  if ("find" in r)
    return r.find(e);
  for (var n = r, s = 0; s < n.length; s++) {
    var i = n[s];
    if (e(i))
      return i;
  }
}
function Ds(t, e) {
  Object.entries(t).forEach(function(r) {
    var n = Xx(r, 2), s = n[0], i = n[1];
    return e(i, s);
  });
}
function jo(t, e) {
  return t.indexOf(e) !== -1;
}
function Wd(t, e) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    if (e(n))
      return n;
  }
}
var r6 = (
  /** @class */
  function() {
    function t() {
      this.transfomers = {};
    }
    return t.prototype.register = function(e) {
      this.transfomers[e.name] = e;
    }, t.prototype.findApplicable = function(e) {
      return t6(this.transfomers, function(r) {
        return r.isApplicable(e);
      });
    }, t.prototype.findByName = function(e) {
      return this.transfomers[e];
    }, t;
  }()
), n6 = function(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}, sp = function(t) {
  return typeof t > "u";
}, s6 = function(t) {
  return t === null;
}, Mi = function(t) {
  return typeof t != "object" || t === null || t === Object.prototype ? !1 : Object.getPrototypeOf(t) === null ? !0 : Object.getPrototypeOf(t) === Object.prototype;
}, Wc = function(t) {
  return Mi(t) && Object.keys(t).length === 0;
}, Ln = function(t) {
  return Array.isArray(t);
}, i6 = function(t) {
  return typeof t == "string";
}, o6 = function(t) {
  return typeof t == "number" && !isNaN(t);
}, a6 = function(t) {
  return typeof t == "boolean";
}, c6 = function(t) {
  return t instanceof RegExp;
}, Di = function(t) {
  return t instanceof Map;
}, zi = function(t) {
  return t instanceof Set;
}, ip = function(t) {
  return n6(t) === "Symbol";
}, u6 = function(t) {
  return t instanceof Date && !isNaN(t.valueOf());
}, l6 = function(t) {
  return t instanceof Error;
}, Gd = function(t) {
  return typeof t == "number" && isNaN(t);
}, d6 = function(t) {
  return a6(t) || s6(t) || sp(t) || o6(t) || i6(t) || ip(t);
}, h6 = function(t) {
  return typeof t == "bigint";
}, f6 = function(t) {
  return t === 1 / 0 || t === -1 / 0;
}, p6 = function(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}, g6 = function(t) {
  return t instanceof URL;
}, op = function(t) {
  return t.replace(/\./g, "\\.");
}, Ja = function(t) {
  return t.map(String).map(op).join(".");
}, ci = function(t) {
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
}, Gc = function() {
  return Gc = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, Gc.apply(this, arguments);
}, Yc = function(t, e) {
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
}, Qc = function(t, e) {
  for (var r = 0, n = e.length, s = t.length; r < n; r++, s++)
    t[s] = e[r];
  return t;
};
function Br(t, e, r, n) {
  return {
    isApplicable: t,
    annotation: e,
    transform: r,
    untransform: n
  };
}
var ap = [
  Br(sp, "undefined", function() {
    return null;
  }, function() {
  }),
  Br(h6, "bigint", function(t) {
    return t.toString();
  }, function(t) {
    return typeof BigInt < "u" ? BigInt(t) : t;
  }),
  Br(u6, "Date", function(t) {
    return t.toISOString();
  }, function(t) {
    return new Date(t);
  }),
  Br(l6, "Error", function(t, e) {
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
  Br(c6, "regexp", function(t) {
    return "" + t;
  }, function(t) {
    var e = t.slice(1, t.lastIndexOf("/")), r = t.slice(t.lastIndexOf("/") + 1);
    return new RegExp(e, r);
  }),
  Br(
    zi,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    function(t) {
      return Qc([], Yc(t.values()));
    },
    function(t) {
      return new Set(t);
    }
  ),
  Br(Di, "map", function(t) {
    return Qc([], Yc(t.entries()));
  }, function(t) {
    return new Map(t);
  }),
  Br(function(t) {
    return Gd(t) || f6(t);
  }, "number", function(t) {
    return Gd(t) ? "NaN" : t > 0 ? "Infinity" : "-Infinity";
  }, Number),
  Br(function(t) {
    return t === 0 && 1 / t === -1 / 0;
  }, "number", function() {
    return "-0";
  }, Number),
  Br(g6, "URL", function(t) {
    return t.toString();
  }, function(t) {
    return new URL(t);
  })
];
function Aa(t, e, r, n) {
  return {
    isApplicable: t,
    annotation: e,
    transform: r,
    untransform: n
  };
}
var cp = Aa(function(t, e) {
  if (ip(t)) {
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
}), y6 = [
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
}, {}), up = Aa(p6, function(t) {
  return ["typed-array", t.constructor.name];
}, function(t) {
  return Qc([], Yc(t));
}, function(t, e) {
  var r = y6[e[1]];
  if (!r)
    throw new Error("Trying to deserialize unknown typed array");
  return new r(t);
});
function lp(t, e) {
  if (t != null && t.constructor) {
    var r = !!e.classRegistry.getIdentifier(t.constructor);
    return r;
  }
  return !1;
}
var dp = Aa(lp, function(t, e) {
  var r = e.classRegistry.getIdentifier(t.constructor);
  return ["class", r];
}, function(t, e) {
  var r = e.classRegistry.getAllowedProps(t.constructor);
  if (!r)
    return Gc({}, t);
  var n = {};
  return r.forEach(function(s) {
    n[s] = t[s];
  }), n;
}, function(t, e, r) {
  var n = r.classRegistry.getValue(e[1]);
  if (!n)
    throw new Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");
  return Object.assign(Object.create(n.prototype), t);
}), hp = Aa(function(t, e) {
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
}), m6 = [dp, cp, hp, up], Yd = function(t, e) {
  var r = Wd(m6, function(s) {
    return s.isApplicable(t, e);
  });
  if (r)
    return {
      value: r.transform(t, e),
      type: r.annotation(t, e)
    };
  var n = Wd(ap, function(s) {
    return s.isApplicable(t, e);
  });
  if (n)
    return {
      value: n.transform(t, e),
      type: n.annotation
    };
}, fp = {};
ap.forEach(function(t) {
  fp[t.annotation] = t;
});
var v6 = function(t, e, r) {
  if (Ln(e))
    switch (e[0]) {
      case "symbol":
        return cp.untransform(t, e, r);
      case "class":
        return dp.untransform(t, e, r);
      case "custom":
        return hp.untransform(t, e, r);
      case "typed-array":
        return up.untransform(t, e, r);
      default:
        throw new Error("Unknown transformation: " + e);
    }
  else {
    var n = fp[e];
    if (!n)
      throw new Error("Unknown transformation: " + e);
    return n.untransform(t, r);
  }
}, ws = function(t, e) {
  for (var r = t.keys(); e > 0; )
    r.next(), e--;
  return r.next().value;
};
function pp(t) {
  if (jo(t, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (jo(t, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (jo(t, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var _6 = function(t, e) {
  pp(e);
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    if (zi(t))
      t = ws(t, +n);
    else if (Di(t)) {
      var s = +n, i = +e[++r] == 0 ? "key" : "value", a = ws(t, s);
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
}, Jc = function(t, e, r) {
  if (pp(e), e.length === 0)
    return r(t);
  for (var n = t, s = 0; s < e.length - 1; s++) {
    var i = e[s];
    if (Ln(n)) {
      var a = +i;
      n = n[a];
    } else if (Mi(n))
      n = n[i];
    else if (zi(n)) {
      var o = +i;
      n = ws(n, o);
    } else if (Di(n)) {
      var c = s === e.length - 2;
      if (c)
        break;
      var o = +i, u = +e[++s] == 0 ? "key" : "value", d = ws(n, o);
      switch (u) {
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
  if (Ln(n) ? n[+f] = r(n[+f]) : Mi(n) && (n[f] = r(n[f])), zi(n)) {
    var p = ws(n, +f), m = r(p);
    p !== m && (n.delete(p), n.add(m));
  }
  if (Di(n)) {
    var o = +e[e.length - 2], b = ws(n, o), u = +f == 0 ? "key" : "value";
    switch (u) {
      case "key": {
        var E = r(b);
        n.set(E, n.get(b)), E !== b && n.delete(b);
        break;
      }
      case "value": {
        n.set(b, r(n.get(b)));
        break;
      }
    }
  }
  return t;
}, cn = function(t, e) {
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
}, Tn = function(t, e) {
  for (var r = 0, n = e.length, s = t.length; r < n; r++, s++)
    t[s] = e[r];
  return t;
};
function Xc(t, e, r) {
  if (r === void 0 && (r = []), !!t) {
    if (!Ln(t)) {
      Ds(t, function(a, o) {
        return Xc(a, e, Tn(Tn([], cn(r)), cn(ci(o))));
      });
      return;
    }
    var n = cn(t, 2), s = n[0], i = n[1];
    i && Ds(i, function(a, o) {
      Xc(a, e, Tn(Tn([], cn(r)), cn(ci(o))));
    }), e(s, r);
  }
}
function b6(t, e, r) {
  return Xc(e, function(n, s) {
    t = Jc(t, s, function(i) {
      return v6(i, n, r);
    });
  }), t;
}
function w6(t, e) {
  function r(a, o) {
    var c = _6(t, ci(o));
    a.map(ci).forEach(function(u) {
      t = Jc(t, u, function() {
        return c;
      });
    });
  }
  if (Ln(e)) {
    var n = cn(e, 2), s = n[0], i = n[1];
    s.forEach(function(a) {
      t = Jc(t, ci(a), function() {
        return t;
      });
    }), i && Ds(i, r);
  } else
    Ds(e, r);
  return t;
}
var E6 = function(t, e) {
  return Mi(t) || Ln(t) || Di(t) || zi(t) || lp(t, e);
};
function S6(t, e, r) {
  var n = r.get(t);
  n ? n.push(e) : r.set(t, [e]);
}
function x6(t, e) {
  var r = {}, n = void 0;
  return t.forEach(function(s) {
    if (!(s.length <= 1)) {
      e || (s = s.map(function(c) {
        return c.map(String);
      }).sort(function(c, u) {
        return c.length - u.length;
      }));
      var i = cn(s), a = i[0], o = i.slice(1);
      a.length === 0 ? n = o.map(Ja) : r[Ja(a)] = o.map(Ja);
    }
  }), n ? Wc(r) ? [n] : [n, r] : Wc(r) ? void 0 : r;
}
var gp = function(t, e, r, n, s, i, a) {
  var o;
  s === void 0 && (s = []), i === void 0 && (i = []), a === void 0 && (a = /* @__PURE__ */ new Map());
  var c = d6(t);
  if (!c) {
    S6(t, s, e);
    var u = a.get(t);
    if (u)
      return n ? {
        transformedValue: null
      } : u;
  }
  if (!E6(t, r)) {
    var d = Yd(t, r), f = d ? {
      transformedValue: d.value,
      annotations: [d.type]
    } : {
      transformedValue: t
    };
    return c || a.set(t, f), f;
  }
  if (jo(i, t))
    return {
      transformedValue: null
    };
  var p = Yd(t, r), m = (o = p == null ? void 0 : p.value) !== null && o !== void 0 ? o : t, b = Ln(m) ? [] : {}, E = {};
  Ds(m, function(U, v) {
    var O = gp(U, e, r, n, Tn(Tn([], cn(s)), [v]), Tn(Tn([], cn(i)), [t]), a);
    b[v] = O.transformedValue, Ln(O.annotations) ? E[v] = O.annotations : Mi(O.annotations) && Ds(O.annotations, function(w, x) {
      E[op(v) + "." + x] = w;
    });
  });
  var T = Wc(E) ? {
    transformedValue: b,
    annotations: p ? [p.type] : void 0
  } : {
    transformedValue: b,
    annotations: p ? [p.type, E] : E
  };
  return c || a.set(t, T), T;
};
function yp(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function I6(t) {
  if (yp(t) !== "Object")
    return !1;
  const e = Object.getPrototypeOf(t);
  return !!e && e.constructor === Object && e === Object.prototype;
}
function Qd(t) {
  return yp(t) === "Array";
}
function O6(t, e, r, n, s) {
  const i = {}.propertyIsEnumerable.call(n, e) ? "enumerable" : "nonenumerable";
  i === "enumerable" && (t[e] = r), s && i === "nonenumerable" && Object.defineProperty(t, e, {
    value: r,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function eu(t, e = {}) {
  if (Qd(t))
    return t.map((s) => eu(s, e));
  if (!I6(t))
    return t;
  const r = Object.getOwnPropertyNames(t), n = Object.getOwnPropertySymbols(t);
  return [...r, ...n].reduce((s, i) => {
    if (Qd(e.props) && !e.props.includes(i))
      return s;
    const a = t[i], o = eu(a, e);
    return O6(s, i, o, t, e.nonenumerable), s;
  }, {});
}
var Bn = function() {
  return Bn = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, Bn.apply(this, arguments);
}, T6 = function(t, e) {
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
}, C6 = function(t, e) {
  for (var r = 0, n = e.length, s = t.length; r < n; r++, s++)
    t[s] = e[r];
  return t;
}, mp = (
  /** @class */
  function() {
    function t(e) {
      var r = e === void 0 ? {} : e, n = r.dedupe, s = n === void 0 ? !1 : n;
      this.classRegistry = new Jx(), this.symbolRegistry = new np(function(i) {
        var a;
        return (a = i.description) !== null && a !== void 0 ? a : "";
      }), this.customTransformerRegistry = new r6(), this.allowedErrorProps = [], this.dedupe = s;
    }
    return t.prototype.serialize = function(e) {
      var r = /* @__PURE__ */ new Map(), n = gp(e, r, this, this.dedupe), s = {
        json: n.transformedValue
      };
      n.annotations && (s.meta = Bn(Bn({}, s.meta), { values: n.annotations }));
      var i = x6(r, this.dedupe);
      return i && (s.meta = Bn(Bn({}, s.meta), { referentialEqualities: i })), s;
    }, t.prototype.deserialize = function(e) {
      var r = e.json, n = e.meta, s = eu(r);
      return n != null && n.values && (s = b6(s, n.values, this)), n != null && n.referentialEqualities && (s = w6(s, n.referentialEqualities)), s;
    }, t.prototype.stringify = function(e) {
      return JSON.stringify(this.serialize(e));
    }, t.prototype.parse = function(e) {
      return this.deserialize(JSON.parse(e));
    }, t.prototype.registerClass = function(e, r) {
      this.classRegistry.register(e, r);
    }, t.prototype.registerSymbol = function(e, r) {
      this.symbolRegistry.register(e, r);
    }, t.prototype.registerCustom = function(e, r) {
      this.customTransformerRegistry.register(Bn({ name: r }, e));
    }, t.prototype.allowErrorProps = function() {
      for (var e, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      (e = this.allowedErrorProps).push.apply(e, C6([], T6(r)));
    }, t.defaultInstance = new t(), t.serialize = t.defaultInstance.serialize.bind(t.defaultInstance), t.deserialize = t.defaultInstance.deserialize.bind(t.defaultInstance), t.stringify = t.defaultInstance.stringify.bind(t.defaultInstance), t.parse = t.defaultInstance.parse.bind(t.defaultInstance), t.registerClass = t.defaultInstance.registerClass.bind(t.defaultInstance), t.registerSymbol = t.defaultInstance.registerSymbol.bind(t.defaultInstance), t.registerCustom = t.defaultInstance.registerCustom.bind(t.defaultInstance), t.allowErrorProps = t.defaultInstance.allowErrorProps.bind(t.defaultInstance), t;
  }()
), N6 = mp.serialize, GI = mp.stringify;
function YI(t) {
  return t.state.fetchStatus === "fetching" ? "fetching" : t.getObserversCount() ? t.state.fetchStatus === "paused" ? "paused" : t.isStale() ? "stale" : "fresh" : "inactive";
}
function QI(t, e) {
  return `${t}${e.charAt(0).toUpperCase() + e.slice(1)}`;
}
function JI({
  queryState: t,
  observerCount: e,
  isStale: r
}) {
  return t.fetchStatus === "fetching" ? "blue" : e ? t.fetchStatus === "paused" ? "purple" : r ? "yellow" : "green" : "gray";
}
function XI({
  status: t,
  isPaused: e
}) {
  return e ? "purple" : t === "error" ? "red" : t === "pending" ? "yellow" : t === "success" ? "green" : "gray";
}
function e2(t) {
  return t === "fresh" ? "green" : t === "stale" ? "yellow" : t === "paused" ? "purple" : t === "inactive" ? "gray" : "blue";
}
var t2 = (t, e = !1) => {
  const {
    json: r
  } = N6(t);
  return JSON.stringify(r, null, e ? 2 : void 0);
}, wo = (t) => t.state.fetchStatus !== "idle" ? 0 : t.getObserversCount() ? t.isStale() ? 2 : 1 : 3, P6 = (t, e) => t.queryHash.localeCompare(e.queryHash), vp = (t, e) => t.state.dataUpdatedAt < e.state.dataUpdatedAt ? 1 : -1, k6 = (t, e) => wo(t) === wo(e) ? vp(t, e) : wo(t) > wo(e) ? 1 : -1, r2 = {
  status: k6,
  "query hash": P6,
  "last updated": vp
}, Eo = (t) => t.state.isPaused ? 0 : t.state.status === "error" ? 2 : t.state.status === "pending" ? 1 : 3, _p = (t, e) => t.state.submittedAt < e.state.submittedAt ? 1 : -1, R6 = (t, e) => Eo(t) === Eo(e) ? _p(t, e) : Eo(t) > Eo(e) ? 1 : -1, n2 = {
  status: R6,
  "last updated": _p
}, s2 = (t) => t * parseFloat(getComputedStyle(document.documentElement).fontSize), i2 = () => {
  const [t, e] = er("dark");
  return lx(() => {
    const r = window.matchMedia("(prefers-color-scheme: dark)");
    e(r.matches ? "dark" : "light");
    const n = (s) => {
      e(s.matches ? "dark" : "light");
    };
    r.addEventListener("change", n), Ui(() => r.removeEventListener("change", n));
  }), t;
}, So = (t, e, r) => {
  if (e.length === 0)
    return r;
  if (t instanceof Map) {
    const n = new Map(t);
    if (e.length === 1)
      return n.set(e[0], r), n;
    const [s, ...i] = e;
    return n.set(s, So(n.get(s), i, r)), n;
  }
  if (t instanceof Set) {
    const n = So(Array.from(t), e, r);
    return new Set(n);
  }
  if (Array.isArray(t)) {
    const n = [...t];
    if (e.length === 1)
      return n[e[0]] = r, n;
    const [s, ...i] = e;
    return n[s] = So(n[s], i, r), n;
  }
  if (t instanceof Object) {
    const n = {
      ...t
    };
    if (e.length === 1)
      return n[e[0]] = r, n;
    const [s, ...i] = e;
    return n[s] = So(n[s], i, r), n;
  }
  return t;
}, xo = (t, e) => {
  if (t instanceof Map) {
    const r = new Map(t);
    if (e.length === 1)
      return r.delete(e[0]), r;
    const [n, ...s] = e;
    return r.set(n, xo(r.get(n), s)), r;
  }
  if (t instanceof Set) {
    const r = xo(Array.from(t), e);
    return new Set(r);
  }
  if (Array.isArray(t)) {
    const r = [...t];
    if (e.length === 1)
      return r.filter((i, a) => a.toString() !== e[0]);
    const [n, ...s] = e;
    return r[n] = xo(r[n], s), r;
  }
  if (t instanceof Object) {
    const r = {
      ...t
    };
    if (e.length === 1)
      return delete r[e[0]], r;
    const [n, ...s] = e;
    return r[n] = xo(r[n], s), r;
  }
  return t;
}, A6 = (t) => {
  if (!t || document.querySelector("#_goober"))
    return;
  const r = document.createElement("style"), n = document.createTextNode("");
  r.appendChild(n), r.id = "_goober", r.setAttribute("nonce", t), document.head.appendChild(r);
}, Os, $i, Vi, Zi, Wn, qi, Ts, Cs, Ns, Ps, ks, Fi, Jd, j6 = (Jd = class {
  constructor(t) {
    pr(this, Os, void 0);
    pr(this, $i, void 0);
    pr(this, Vi, void 0);
    pr(this, Zi, void 0);
    pr(this, Wn, !1);
    pr(this, qi, void 0);
    pr(this, Ts, void 0);
    pr(this, Cs, void 0);
    pr(this, Ns, void 0);
    pr(this, Ps, void 0);
    pr(this, ks, void 0);
    pr(this, Fi, void 0);
    const {
      client: e,
      queryFlavor: r,
      version: n,
      onlineManager: s,
      buttonPosition: i,
      position: a,
      initialIsOpen: o,
      errorTypes: c,
      styleNonce: u
    } = t;
    ir(this, Os, er(e)), ir(this, Vi, r), ir(this, Zi, n), ir(this, $i, s), ir(this, qi, u), ir(this, Ts, er(i)), ir(this, Cs, er(a)), ir(this, Ns, er(o)), ir(this, Ps, er(c));
  }
  setButtonPosition(t) {
    Tt(this, Ts)[1](t);
  }
  setPosition(t) {
    Tt(this, Cs)[1](t);
  }
  setInitialIsOpen(t) {
    Tt(this, Ns)[1](t);
  }
  setErrorTypes(t) {
    Tt(this, Ps)[1](t);
  }
  setClient(t) {
    Tt(this, Os)[1](t);
  }
  mount(t) {
    if (Tt(this, Wn))
      throw new Error("Devtools is already mounted");
    const e = Mx(() => {
      const r = this, [n] = Tt(this, Ts), [s] = Tt(this, Cs), [i] = Tt(this, Ns), [a] = Tt(this, Ps), [o] = Tt(this, Os);
      let c;
      return Tt(this, ks) ? c = Tt(this, ks) : (c = Ix(() => import("./335X72D7-DKVm3hTo.js")), ir(this, ks, c)), A6(Tt(this, qi)), wx(c, Sx({
        get queryFlavor() {
          return Tt(r, Vi);
        },
        get version() {
          return Tt(r, Zi);
        },
        get onlineManager() {
          return Tt(r, $i);
        }
      }, {
        get client() {
          return o();
        },
        get buttonPosition() {
          return n();
        },
        get position() {
          return s();
        },
        get initialIsOpen() {
          return i();
        },
        get errorTypes() {
          return a();
        }
      }));
    }, t);
    ir(this, Wn, !0), ir(this, Fi, e);
  }
  unmount() {
    var t;
    if (!Tt(this, Wn))
      throw new Error("Devtools is not mounted");
    (t = Tt(this, Fi)) == null || t.call(this), ir(this, Wn, !1);
  }
}, Os = new WeakMap(), $i = new WeakMap(), Vi = new WeakMap(), Zi = new WeakMap(), Wn = new WeakMap(), qi = new WeakMap(), Ts = new WeakMap(), Cs = new WeakMap(), Ns = new WeakMap(), Ps = new WeakMap(), ks = new WeakMap(), Fi = new WeakMap(), Jd);
function L6(t) {
  const e = eg(t.client), r = wn.useRef(null), { buttonPosition: n, position: s, initialIsOpen: i, errorTypes: a, styleNonce: o } = t, [c] = wn.useState(
    new j6({
      client: e,
      queryFlavor: "React Query",
      version: "5",
      onlineManager: tg,
      buttonPosition: n,
      position: s,
      initialIsOpen: i,
      errorTypes: a,
      styleNonce: o
    })
  );
  return wn.useEffect(() => {
    c.setClient(e);
  }, [e, c]), wn.useEffect(() => {
    n && c.setButtonPosition(n);
  }, [n, c]), wn.useEffect(() => {
    s && c.setPosition(s);
  }, [s, c]), wn.useEffect(() => {
    c.setInitialIsOpen(i || !1);
  }, [i, c]), wn.useEffect(() => {
    c.setErrorTypes(a || []);
  }, [a, c]), wn.useEffect(() => (r.current && c.mount(r.current), () => {
    c.unmount();
  }), [c]), /* @__PURE__ */ Vc.jsx("div", { className: "tsqd-parent-container", ref: r });
}
var U6 = process.env.NODE_ENV !== "development" ? function() {
  return null;
} : L6;
const bp = new rg(), o2 = ({ dAppName: t, dAppDescription: e, dAppUrl: r, dAppIconURL: n, children: s, debugQuery: i = !1 }) => (jr(() => {
  qE({
    dAppName: t,
    dAppDescription: e,
    dAppUrl: r,
    dAppIconURL: n,
    onDisconnect: hn.getState().onDisconnect()
  }), eh.defaultMaxListeners = 100;
}, []), /* @__PURE__ */ Vc.jsxs(ng, { client: bp, children: [
  i && /* @__PURE__ */ Vc.jsx(U6, { initialIsOpen: !1 }),
  s
] }));
export {
  aa as $,
  AI as A,
  DI as B,
  UI as C,
  sh as D,
  MI as E,
  zI as F,
  So as G,
  FI as H,
  $I as I,
  BI as J,
  Qu as K,
  s2 as L,
  QI as M,
  YI as N,
  Lt as O,
  W6 as P,
  Qn as Q,
  H6 as R,
  VI as S,
  xx as T,
  Vx as U,
  Tr as V,
  GI as W,
  qI as X,
  _g as Y,
  ZI as Z,
  Bt as _,
  er as a,
  gI as a$,
  xo as a0,
  KI as a1,
  LI as a2,
  WI as a3,
  Wf as a4,
  qd as a5,
  Xa as a6,
  K6 as a7,
  B6 as a8,
  bI as a9,
  K5 as aA,
  H5 as aB,
  W5 as aC,
  q5 as aD,
  qE as aE,
  J6 as aF,
  eI as aG,
  tI as aH,
  rI as aI,
  Oa as aJ,
  Y6 as aK,
  Q6 as aL,
  nI as aM,
  sI as aN,
  oI as aO,
  dr as aP,
  iI as aQ,
  Ca as aR,
  wE as aS,
  X6 as aT,
  vI as aU,
  G6 as aV,
  Ia as aW,
  Tu as aX,
  Cu as aY,
  EE as aZ,
  aI as a_,
  wI as aa,
  EI as ab,
  SI as ac,
  xI as ad,
  II as ae,
  OI as af,
  TI as ag,
  CI as ah,
  NI as ai,
  PI as aj,
  th as ak,
  Ki as al,
  ig as am,
  rh as an,
  Er as ao,
  bp as ap,
  o2 as aq,
  Ld as ar,
  Cc as as,
  Tc as at,
  Pc as au,
  _I as av,
  Nc as aw,
  Af as ax,
  B5 as ay,
  F5 as az,
  lr as b,
  pI as b0,
  dI as b1,
  yI as b2,
  uI as b3,
  lI as b4,
  hI as b5,
  fI as b6,
  cI as b7,
  mI as b8,
  Rs as c,
  Dx as d,
  Ua as e,
  wx as f,
  i2 as g,
  Hf as h,
  HI as i,
  Bc as j,
  Jn as k,
  $x as l,
  n2 as m,
  RI as n,
  lx as o,
  Kc as p,
  JI as q,
  XI as r,
  r2 as s,
  Fx as t,
  Sx as u,
  e2 as v,
  t2 as w,
  kI as x,
  Ui as y,
  Ff as z
};
