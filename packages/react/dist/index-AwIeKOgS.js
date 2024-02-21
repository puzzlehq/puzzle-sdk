var Zu = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
};
var Ct = (t, e, r) => (Zu(t, e, "read from private field"), r ? r.call(t) : e.get(t)), pr = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, or = (t, e, r, n) => (Zu(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
import * as En from "react";
import sh, { useEffect as Lr, useState as To } from "react";
import "@walletconnect/modal-sign-html";
import ih from "events";
import { getSdkError as eg } from "@walletconnect/utils";
import { create as tg } from "zustand";
import { useQuery as rg, useQueryClient as ng, onlineManager as sg, QueryClient as ig, QueryClientProvider as og } from "@tanstack/react-query";
import ag from "debug";
const Fu = new ih();
async function Hr() {
  return new Promise((t) => {
    setInterval(() => {
    }, 200), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
  });
}
function oh(t) {
  Lr(() => (Hr().then((e) => {
    e.onSessionDelete(t);
  }), () => {
    Hr().then((e) => {
      e.offSessionDelete(t);
    });
  }), [t]);
}
function cg(t) {
  Lr(() => (Hr().then((e) => {
    e.onSessionExpire(t);
  }), () => {
    Hr().then((e) => {
      e.offSessionExpire(t);
    });
  }), [t]);
}
function ah(t) {
  Lr(() => (Hr().then((e) => {
    e.onSessionUpdate(t);
  }), () => {
    Hr().then((e) => {
      e.offSessionUpdate(t);
    });
  }), [t]);
}
function Sr() {
  const [t, e] = To(void 0);
  return oh((r) => {
    r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), ah((r) => {
    if (t && r.topic === (t == null ? void 0 : t.topic)) {
      const { namespaces: n } = r.params, s = { ...t, namespaces: n };
      e(s);
    }
  }), cg((r) => {
    t && r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), Lr(() => {
    async function r() {
      const s = await (await Hr()).getSession();
      e(s);
    }
    return r(), Fu.on("session_change", r), () => {
      Fu.off("session_change", r);
    };
  }, []), t;
}
function Hi(t) {
  Lr(() => (Hr().then((e) => {
    e.onSessionEvent(t);
  }), () => {
    Hr().then((e) => {
      e.offSessionEvent(t);
    });
  }), [t]);
}
var ug = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
function lg(t, e) {
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
}, dg = (t, e) => (r, n, s) => {
  let i = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (T) => T,
    version: 0,
    merge: (T, M) => ({
      ...M,
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
  const l = fi(i.serialize), f = () => {
    const T = i.partialize({ ...n() });
    let M;
    const v = l({ state: T, version: i.version }).then(
      (O) => u.setItem(i.name, O)
    ).catch((O) => {
      M = O;
    });
    if (M)
      throw M;
    return v;
  }, p = s.setState;
  s.setState = (T, M) => {
    p(T, M), f();
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
    const M = ((T = i.onRehydrateStorage) == null ? void 0 : T.call(i, n())) || void 0;
    return fi(u.getItem.bind(u))(i.name).then((v) => {
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
      M == null || M(b, void 0), a = !0, c.forEach((v) => v(b));
    }).catch((v) => {
      M == null || M(void 0, v);
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
}, hg = (t, e) => (r, n, s) => {
  let i = {
    storage: lg(() => localStorage),
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
  const l = () => {
    const E = i.partialize({ ...n() });
    return u.setItem(i.name, {
      state: E,
      version: i.version
    });
  }, f = s.setState;
  s.setState = (E, T) => {
    f(E, T), l();
  };
  const p = t(
    (...E) => {
      r(...E), l();
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
    const M = ((T = i.onRehydrateStorage) == null ? void 0 : T.call(i, (E = n()) != null ? E : p)) || void 0;
    return fi(u.getItem.bind(u))(i.name).then((v) => {
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
      ), r(m, !0), l();
    }).then(() => {
      M == null || M(m, void 0), m = n(), a = !0, c.forEach((v) => v(m));
    }).catch((v) => {
      M == null || M(void 0, v);
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
}, fg = (t, e) => "getStorage" in e || "serialize" in e || "deserialize" in e ? ((ug ? "production" : void 0) !== "production" && console.warn(
  "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
), dg(t, e)) : hg(t, e), pg = fg, fn = tg()(
  pg((t, e) => ({
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
      }), Sp.clear(), console.log("onDisconnect called!");
    }
  }), {
    name: "puzzle-wallet-store"
  })
);
function iu() {
  const [t, e] = To(void 0), [r, n] = To(void 0), [s, i] = To(!1);
  return { data: t, error: r, loading: s, setData: e, setError: n, setLoading: i };
}
async function ch(t, e) {
  const n = await (await Hr()).request(t);
  if (n === void 0 && e)
    throw console.error("Result is undefined, retrying..."), new Error("Result is undefined, retrying...");
  return n;
}
function Gi({ queryKey: t, wcParams: e, enabled: r, queryOptions: n }) {
  return rg(
    t,
    async () => ch(e, t),
    n ?? {
      staleTime: t[0] === "getEvent" ? 7500 : 45e3,
      refetchInterval: t[0] === "getEvent" ? 5e3 : 3e4,
      refetchIntervalInBackground: !0,
      enabled: r,
      retry: !0
    }
  );
}
function Yi(t) {
  const { data: e, error: r, loading: n, setData: s, setError: i, setLoading: a } = iu();
  async function o(c) {
    try {
      a(!0), i(void 0);
      const u = await ch(t ?? c);
      return s(u), u;
    } catch (u) {
      throw i(u), u;
    } finally {
      a(!1);
    }
  }
  return { data: e, error: r, loading: n, request: o };
}
const rc = (t, e = !0, r = 4, n = !0) => t ? t.length < r ? t : n ? `(...${t.slice(-r)})` : t.length < r * 2 ? t : `${t.slice(
  0,
  r + (e ? 5 : 0)
)}...${t.slice(t.length - r, t.length)}` : "", S6 = () => {
  const t = Sr(), [e, r, n] = fn((u) => [u.account, u.setAccount, u.onDisconnect]), { refetch: s, data: i, error: a, isLoading: o } = Gi({
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
  Hi(({ params: u, topic: l }) => {
    if (u.event.name === "accountSelected" && t && t.topic === l) {
      const p = u.event.address ?? u.event.data.address, m = u.chainId.split(":")[0], b = u.chainId.split(":")[1];
      r({
        network: m,
        chainId: b,
        address: p,
        shortenedAddress: rc(p)
      });
    }
  }), ah(({ params: u, topic: l }) => {
    const f = u.event.address ?? u.event.data.address, p = u.chainId.split(":")[0], m = u.chainId.split(":")[1];
    r({
      network: p,
      chainId: m,
      address: f,
      shortenedAddress: rc(f)
    });
  }), oh(({ params: u, topic: l }) => {
    n();
  }), Lr(() => {
    t && !o && s();
  }, [t == null ? void 0 : t.topic]), Lr(() => {
    if (i) {
      const u = i, l = u == null ? void 0 : u.account;
      l && r(l);
    }
  }, [i]);
  const c = a ? a.message : i && i.error;
  return {
    account: e,
    error: c,
    loading: o
  };
}, x6 = ({ address: t, multisig: e }) => {
  const r = Sr(), [n] = fn((f) => [f.account]), { refetch: s, data: i, error: a, isLoading: o } = Gi({
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
  Hi(({ params: f, topic: p }) => {
    const m = f.event.name, b = f.event.address ?? f.event.data.address;
    (m === "selectedAccountSynced" && !e || m === "sharedAccountSynced" && e && b === t) && s();
  }), Lr(() => {
    r && !o && s();
  }, [r == null ? void 0 : r.topic]);
  const c = a ? a.message : i && i.error, u = i;
  return { balances: u == null ? void 0 : u.balances, error: c, loading: o };
}, gg = Symbol(), Ku = Object.getPrototypeOf, nc = /* @__PURE__ */ new WeakMap(), yg = (t) => t && (nc.has(t) ? nc.get(t) : Ku(t) === Object.prototype || Ku(t) === Array.prototype), mg = (t) => yg(t) && t[gg] || null, Wu = (t, e = !0) => {
  nc.set(t, e);
};
var Lo = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const Da = (t) => typeof t == "object" && t !== null, Sn = /* @__PURE__ */ new WeakMap(), go = /* @__PURE__ */ new WeakSet(), vg = (t = Object.is, e = (u, l) => new Proxy(u, l), r = (u) => Da(u) && !go.has(u) && (Array.isArray(u) || !(Symbol.iterator in u)) && !(u instanceof WeakMap) && !(u instanceof WeakSet) && !(u instanceof Error) && !(u instanceof Number) && !(u instanceof Date) && !(u instanceof String) && !(u instanceof RegExp) && !(u instanceof ArrayBuffer), n = (u) => {
  switch (u.status) {
    case "fulfilled":
      return u.value;
    case "rejected":
      throw u.reason;
    default:
      throw u;
  }
}, s = /* @__PURE__ */ new WeakMap(), i = (u, l, f = n) => {
  const p = s.get(u);
  if ((p == null ? void 0 : p[0]) === l)
    return p[1];
  const m = Array.isArray(u) ? [] : Object.create(Object.getPrototypeOf(u));
  return Wu(m, !0), s.set(u, [l, m]), Reflect.ownKeys(u).forEach((b) => {
    if (Object.getOwnPropertyDescriptor(m, b))
      return;
    const E = Reflect.get(u, b), T = {
      value: E,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (go.has(E))
      Wu(E, !1);
    else if (E instanceof Promise)
      delete T.value, T.get = () => f(E);
    else if (Sn.has(E)) {
      const [M, v] = Sn.get(
        E
      );
      T.value = i(
        M,
        v(),
        f
      );
    }
    Object.defineProperty(m, b, T);
  }), Object.preventExtensions(m);
}, a = /* @__PURE__ */ new WeakMap(), o = [1, 1], c = (u) => {
  if (!Da(u))
    throw new Error("object required");
  const l = a.get(u);
  if (l)
    return l;
  let f = o[0];
  const p = /* @__PURE__ */ new Set(), m = (g, P = ++o[0]) => {
    f !== P && (f = P, p.forEach((N) => N(g, P)));
  };
  let b = o[1];
  const E = (g = ++o[1]) => (b !== g && !p.size && (b = g, M.forEach(([P]) => {
    const N = P[1](g);
    N > f && (f = N);
  })), f), T = (g) => (P, N) => {
    const D = [...P];
    D[1] = [g, ...D[1]], m(D, N);
  }, M = /* @__PURE__ */ new Map(), v = (g, P) => {
    if ((Lo ? "production" : void 0) !== "production" && M.has(g))
      throw new Error("prop listener already exists");
    if (p.size) {
      const N = P[3](T(g));
      M.set(g, [P, N]);
    } else
      M.set(g, [P]);
  }, O = (g) => {
    var P;
    const N = M.get(g);
    N && (M.delete(g), (P = N[1]) == null || P.call(N));
  }, w = (g) => (p.add(g), p.size === 1 && M.forEach(([P, N], D) => {
    if ((Lo ? "production" : void 0) !== "production" && N)
      throw new Error("remove already exists");
    const G = P[3](T(D));
    M.set(D, [P, G]);
  }), () => {
    p.delete(g), p.size === 0 && M.forEach(([P, N], D) => {
      N && (N(), M.set(D, [P]));
    });
  }), x = Array.isArray(u) ? [] : Object.create(Object.getPrototypeOf(u)), y = e(x, {
    deleteProperty(g, P) {
      const N = Reflect.get(g, P);
      O(P);
      const D = Reflect.deleteProperty(g, P);
      return D && m(["delete", [P], N]), D;
    },
    set(g, P, N, D) {
      const G = Reflect.has(g, P), Y = Reflect.get(g, P, D);
      if (G && (t(Y, N) || a.has(N) && t(Y, a.get(N))))
        return !0;
      O(P), Da(N) && (N = mg(N) || N);
      let k = N;
      if (N instanceof Promise)
        N.then((A) => {
          N.status = "fulfilled", N.value = A, m(["resolve", [P], A]);
        }).catch((A) => {
          N.status = "rejected", N.reason = A, m(["reject", [P], A]);
        });
      else {
        !Sn.has(N) && r(N) && (k = c(N));
        const A = !go.has(k) && Sn.get(k);
        A && v(P, A);
      }
      return Reflect.set(g, P, k, D), m(["set", [P], N, Y]), !0;
    }
  });
  a.set(u, y);
  const d = [
    x,
    E,
    i,
    w
  ];
  return Sn.set(y, d), Reflect.ownKeys(u).forEach((g) => {
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
  Sn,
  go,
  // internal things
  t,
  e,
  r,
  n,
  s,
  i,
  a,
  o
], [_g] = vg();
function Dn(t = {}) {
  return _g(t);
}
function os(t, e, r) {
  const n = Sn.get(t);
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
function bg(t, e) {
  const r = Sn.get(t);
  (Lo ? "production" : void 0) !== "production" && !r && console.warn("Please use proxy object");
  const [n, s, i] = r;
  return i(n, s(), e);
}
const Nt = Dn({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), uh = { state: Nt, subscribe(t) {
  return os(Nt, () => t(Nt));
}, push(t, e) {
  t !== Nt.view && (Nt.view = t, e && (Nt.data = e), Nt.history.push(t));
}, reset(t) {
  Nt.view = t, Nt.history = [t];
}, replace(t) {
  Nt.history.length > 1 && (Nt.history[Nt.history.length - 1] = t, Nt.view = t);
}, goBack() {
  if (Nt.history.length > 1) {
    Nt.history.pop();
    const [t] = Nt.history.slice(-1);
    Nt.view = t;
  }
}, setData(t) {
  Nt.data = t;
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
  const e = (t = uh.state.data) == null ? void 0 : t.Wallet;
  if (!e)
    throw new Error('Missing "Wallet" view data');
  return e;
} }, wg = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), qt = Dn({ enabled: wg, userSessionId: "", events: [], connectedWalletId: void 0 }), Eg = { state: qt, subscribe(t) {
  return os(qt.events, () => t(bg(qt.events[qt.events.length - 1])));
}, initialize() {
  qt.enabled && typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" && (qt.userSessionId = crypto.randomUUID());
}, setConnectedWalletId(t) {
  qt.connectedWalletId = t;
}, click(t) {
  if (qt.enabled) {
    const e = { type: "CLICK", name: t.name, userSessionId: qt.userSessionId, timestamp: Date.now(), data: t };
    qt.events.push(e);
  }
}, track(t) {
  if (qt.enabled) {
    const e = { type: "TRACK", name: t.name, userSessionId: qt.userSessionId, timestamp: Date.now(), data: t };
    qt.events.push(e);
  }
}, view(t) {
  if (qt.enabled) {
    const e = { type: "VIEW", name: t.name, userSessionId: qt.userSessionId, timestamp: Date.now(), data: t };
    qt.events.push(e);
  }
} }, Zr = Dn({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }), kr = { state: Zr, subscribe(t) {
  return os(Zr, () => t(Zr));
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
} }, yo = Dn({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), Ms = { state: yo, subscribe(t) {
  return os(yo, () => t(yo));
}, setConfig(t) {
  var e, r;
  Eg.initialize(), kr.setChains(t.chains), kr.setIsAuth(!!t.enableAuthMode), kr.setIsCustomMobile(!!((e = t.mobileWallets) != null && e.length)), kr.setIsCustomDesktop(!!((r = t.desktopWallets) != null && r.length)), Wt.setModalVersionInStorage(), Object.assign(yo, t);
} };
var Sg = Object.defineProperty, Bu = Object.getOwnPropertySymbols, xg = Object.prototype.hasOwnProperty, Ig = Object.prototype.propertyIsEnumerable, Hu = (t, e, r) => e in t ? Sg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Og = (t, e) => {
  for (var r in e || (e = {}))
    xg.call(e, r) && Hu(t, r, e[r]);
  if (Bu)
    for (var r of Bu(e))
      Ig.call(e, r) && Hu(t, r, e[r]);
  return t;
};
const sc = "https://explorer-api.walletconnect.com", ic = "wcm", oc = "js-2.6.2";
async function mo(t, e) {
  const r = Og({ sdkType: ic, sdkVersion: oc }, e), n = new URL(t, sc);
  return n.searchParams.append("projectId", Ms.state.projectId), Object.entries(r).forEach(([s, i]) => {
    i && n.searchParams.append(s, String(i));
  }), (await fetch(n)).json();
}
const Vn = { async getDesktopListings(t) {
  return mo("/w3m/v1/getDesktopListings", t);
}, async getMobileListings(t) {
  return mo("/w3m/v1/getMobileListings", t);
}, async getInjectedListings(t) {
  return mo("/w3m/v1/getInjectedListings", t);
}, async getAllListings(t) {
  return mo("/w3m/v1/getAllListings", t);
}, getWalletImageUrl(t) {
  return `${sc}/w3m/v1/getWalletImage/${t}?projectId=${Ms.state.projectId}&sdkType=${ic}&sdkVersion=${oc}`;
}, getAssetImageUrl(t) {
  return `${sc}/w3m/v1/getAssetImage/${t}?projectId=${Ms.state.projectId}&sdkType=${ic}&sdkVersion=${oc}`;
} };
var Tg = Object.defineProperty, Gu = Object.getOwnPropertySymbols, kg = Object.prototype.hasOwnProperty, Cg = Object.prototype.propertyIsEnumerable, Yu = (t, e, r) => e in t ? Tg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Pg = (t, e) => {
  for (var r in e || (e = {}))
    kg.call(e, r) && Yu(t, r, e[r]);
  if (Gu)
    for (var r of Gu(e))
      Cg.call(e, r) && Yu(t, r, e[r]);
  return t;
};
const Ju = Wt.isMobile(), Fr = Dn({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), I6 = { state: Fr, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: t, explorerExcludedWalletIds: e } = Ms.state;
  if (t === "NONE" || e === "ALL" && !t)
    return Fr.recomendedWallets;
  if (Wt.isArray(t)) {
    const r = { recommendedIds: t.join(",") }, { listings: n } = await Vn.getAllListings(r), s = Object.values(n);
    s.sort((i, a) => {
      const o = t.indexOf(i.id), c = t.indexOf(a.id);
      return o - c;
    }), Fr.recomendedWallets = s;
  } else {
    const { chains: r, isAuth: n } = kr.state, s = r == null ? void 0 : r.join(","), i = Wt.isArray(e), a = { page: 1, sdks: n ? "auth_v1" : void 0, entries: Wt.RECOMMENDED_WALLET_AMOUNT, chains: s, version: 2, excludedIds: i ? e.join(",") : void 0 }, { listings: o } = Ju ? await Vn.getMobileListings(a) : await Vn.getDesktopListings(a);
    Fr.recomendedWallets = Object.values(o);
  }
  return Fr.recomendedWallets;
}, async getWallets(t) {
  const e = Pg({}, t), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: n } = Ms.state, { recomendedWallets: s } = Fr;
  if (n === "ALL")
    return Fr.wallets;
  s.length ? e.excludedIds = s.map((f) => f.id).join(",") : Wt.isArray(r) && (e.excludedIds = r.join(",")), Wt.isArray(n) && (e.excludedIds = [e.excludedIds, n].filter(Boolean).join(",")), kr.state.isAuth && (e.sdks = "auth_v1");
  const { page: i, search: a } = t, { listings: o, total: c } = Ju ? await Vn.getMobileListings(e) : await Vn.getDesktopListings(e), u = Object.values(o), l = a ? "search" : "wallets";
  return Fr[l] = { listings: [...Fr[l].listings, ...u], total: c, page: i ?? 1 }, { listings: u, total: c };
}, getWalletImageUrl(t) {
  return Vn.getWalletImageUrl(t);
}, getAssetImageUrl(t) {
  return Vn.getAssetImageUrl(t);
}, resetSearch() {
  Fr.search = { listings: [], total: 0, page: 1 };
} }, hs = Dn({ open: !1 }), Ua = { state: hs, subscribe(t) {
  return os(hs, () => t(hs));
}, async open(t) {
  return new Promise((e) => {
    const { isUiLoaded: r, isDataLoaded: n } = kr.state;
    if (Wt.removeWalletConnectDeepLink(), kr.setWalletConnectUri(t == null ? void 0 : t.uri), kr.setChains(t == null ? void 0 : t.chains), uh.reset("ConnectWallet"), r && n)
      hs.open = !0, e();
    else {
      const s = setInterval(() => {
        const i = kr.state;
        i.isUiLoaded && i.isDataLoaded && (clearInterval(s), hs.open = !0, e());
      }, 200);
    }
  });
}, close() {
  hs.open = !1;
} };
var Ng = Object.defineProperty, Xu = Object.getOwnPropertySymbols, Rg = Object.prototype.hasOwnProperty, Ag = Object.prototype.propertyIsEnumerable, Qu = (t, e, r) => e in t ? Ng(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, jg = (t, e) => {
  for (var r in e || (e = {}))
    Rg.call(e, r) && Qu(t, r, e[r]);
  if (Xu)
    for (var r of Xu(e))
      Ag.call(e, r) && Qu(t, r, e[r]);
  return t;
};
function Lg() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const Xs = Dn({ themeMode: Lg() ? "dark" : "light" }), el = { state: Xs, subscribe(t) {
  return os(Xs, () => t(Xs));
}, setThemeConfig(t) {
  const { themeMode: e, themeVariables: r } = t;
  e && (Xs.themeMode = e), r && (Xs.themeVariables = jg({}, r));
} }, qn = Dn({ open: !1, message: "", variant: "success" }), O6 = { state: qn, subscribe(t) {
  return os(qn, () => t(qn));
}, openToast(t, e) {
  qn.open = !0, qn.message = t, qn.variant = e;
}, closeToast() {
  qn.open = !1;
} };
let Mg = class {
  constructor(t) {
    this.openModal = Ua.open, this.closeModal = Ua.close, this.subscribeModal = Ua.subscribe, this.setTheme = el.setThemeConfig, el.setThemeConfig(t), Ms.setConfig(t), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-CfTdc73_-CS9OQc1J.js");
      const t = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", t), kr.setIsUiLoaded(!0);
    }
  }
};
var Tn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function pa(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function ga(t) {
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
var ou = { exports: {} }, Is = typeof Reflect == "object" ? Reflect : null, tl = Is && typeof Is.apply == "function" ? Is.apply : function(t, e, r) {
  return Function.prototype.apply.call(t, e, r);
}, ko;
Is && typeof Is.ownKeys == "function" ? ko = Is.ownKeys : Object.getOwnPropertySymbols ? ko = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : ko = function(t) {
  return Object.getOwnPropertyNames(t);
};
function Dg(t) {
  console && console.warn && console.warn(t);
}
var lh = Number.isNaN || function(t) {
  return t !== t;
};
function et() {
  et.init.call(this);
}
ou.exports = et;
ou.exports.once = Vg;
et.EventEmitter = et;
et.prototype._events = void 0;
et.prototype._eventsCount = 0;
et.prototype._maxListeners = void 0;
var rl = 10;
function ya(t) {
  if (typeof t != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
}
Object.defineProperty(et, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return rl;
  },
  set: function(t) {
    if (typeof t != "number" || t < 0 || lh(t))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
    rl = t;
  }
});
et.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
et.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || lh(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function dh(t) {
  return t._maxListeners === void 0 ? et.defaultMaxListeners : t._maxListeners;
}
et.prototype.getMaxListeners = function() {
  return dh(this);
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
    tl(o, this, e);
  else
    for (var c = o.length, u = yh(o, c), r = 0; r < c; ++r)
      tl(u[r], this, e);
  return !0;
};
function hh(t, e, r, n) {
  var s, i, a;
  if (ya(r), i = t._events, i === void 0 ? (i = t._events = /* @__PURE__ */ Object.create(null), t._eventsCount = 0) : (i.newListener !== void 0 && (t.emit(
    "newListener",
    e,
    r.listener ? r.listener : r
  ), i = t._events), a = i[e]), a === void 0)
    a = i[e] = r, ++t._eventsCount;
  else if (typeof a == "function" ? a = i[e] = n ? [r, a] : [a, r] : n ? a.unshift(r) : a.push(r), s = dh(t), s > 0 && a.length > s && !a.warned) {
    a.warned = !0;
    var o = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    o.name = "MaxListenersExceededWarning", o.emitter = t, o.type = e, o.count = a.length, Dg(o);
  }
  return t;
}
et.prototype.addListener = function(t, e) {
  return hh(this, t, e, !1);
};
et.prototype.on = et.prototype.addListener;
et.prototype.prependListener = function(t, e) {
  return hh(this, t, e, !0);
};
function Ug() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function fh(t, e, r) {
  var n = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r }, s = Ug.bind(n);
  return s.listener = r, n.wrapFn = s, s;
}
et.prototype.once = function(t, e) {
  return ya(e), this.on(t, fh(this, t, e)), this;
};
et.prototype.prependOnceListener = function(t, e) {
  return ya(e), this.prependListener(t, fh(this, t, e)), this;
};
et.prototype.removeListener = function(t, e) {
  var r, n, s, i, a;
  if (ya(e), n = this._events, n === void 0)
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
    s === 0 ? r.shift() : zg(r, s), r.length === 1 && (n[t] = r[0]), n.removeListener !== void 0 && this.emit("removeListener", t, a || e);
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
function ph(t, e, r) {
  var n = t._events;
  if (n === void 0)
    return [];
  var s = n[e];
  return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? $g(s) : yh(s, s.length);
}
et.prototype.listeners = function(t) {
  return ph(this, t, !0);
};
et.prototype.rawListeners = function(t) {
  return ph(this, t, !1);
};
et.listenerCount = function(t, e) {
  return typeof t.listenerCount == "function" ? t.listenerCount(e) : gh.call(t, e);
};
et.prototype.listenerCount = gh;
function gh(t) {
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
  return this._eventsCount > 0 ? ko(this._events) : [];
};
function yh(t, e) {
  for (var r = new Array(e), n = 0; n < e; ++n)
    r[n] = t[n];
  return r;
}
function zg(t, e) {
  for (; e + 1 < t.length; e++)
    t[e] = t[e + 1];
  t.pop();
}
function $g(t) {
  for (var e = new Array(t.length), r = 0; r < e.length; ++r)
    e[r] = t[r].listener || t[r];
  return e;
}
function Vg(t, e) {
  return new Promise(function(r, n) {
    function s(a) {
      t.removeListener(e, i), n(a);
    }
    function i() {
      typeof t.removeListener == "function" && t.removeListener("error", s), r([].slice.call(arguments));
    }
    mh(t, e, i, { once: !0 }), e !== "error" && qg(t, s, { once: !0 });
  });
}
function qg(t, e, r) {
  typeof t.on == "function" && mh(t, "error", e, r);
}
function mh(t, e, r, n) {
  if (typeof t.on == "function")
    n.once ? t.once(e, r) : t.on(e, r);
  else if (typeof t.addEventListener == "function")
    t.addEventListener(e, function s(i) {
      n.once && t.removeEventListener(e, s), r(i);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
}
var Ur = ou.exports;
const au = /* @__PURE__ */ pa(Ur), Zg = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, Fg = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, Kg = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function Wg(t, e) {
  if (t === "__proto__" || t === "constructor" && e && typeof e == "object" && "prototype" in e) {
    Bg(t);
    return;
  }
  return e;
}
function Bg(t) {
  console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`);
}
function vo(t, e = {}) {
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
  if (!Kg.test(t)) {
    if (e.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return t;
  }
  try {
    if (Zg.test(t) || Fg.test(t)) {
      if (e.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(t, Wg);
    }
    return JSON.parse(t);
  } catch (n) {
    if (e.strict)
      throw n;
    return t;
  }
}
function Hg(t) {
  return !t || typeof t.then != "function" ? Promise.resolve(t) : t;
}
function Rt(t, ...e) {
  try {
    return Hg(t(...e));
  } catch (r) {
    return Promise.reject(r);
  }
}
function Gg(t) {
  const e = typeof t;
  return t === null || e !== "object" && e !== "function";
}
function Yg(t) {
  const e = Object.getPrototypeOf(t);
  return !e || e.isPrototypeOf(Object);
}
function Co(t) {
  if (Gg(t))
    return String(t);
  if (Yg(t) || Array.isArray(t))
    return JSON.stringify(t);
  if (typeof t.toJSON == "function")
    return Co(t.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function vh() {
  if (typeof Buffer === void 0)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
const ac = "base64:";
function Jg(t) {
  if (typeof t == "string")
    return t;
  vh();
  const e = Buffer.from(t).toString("base64");
  return ac + e;
}
function Xg(t) {
  return typeof t != "string" || !t.startsWith(ac) ? t : (vh(), Buffer.from(t.slice(ac.length), "base64"));
}
function ar(t) {
  return t ? t.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : "";
}
function Qg(...t) {
  return ar(t.join(":"));
}
function _o(t) {
  return t = ar(t), t ? t + ":" : "";
}
const ey = "memory", ty = () => {
  const t = /* @__PURE__ */ new Map();
  return {
    name: ey,
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
function ry(t = {}) {
  const e = {
    mounts: { "": t.driver || ty() },
    mountpoints: [""],
    watching: !1,
    watchListeners: [],
    unwatch: {}
  }, r = (u) => {
    for (const l of e.mountpoints)
      if (u.startsWith(l))
        return {
          base: l,
          relativeKey: u.slice(l.length),
          driver: e.mounts[l]
        };
    return {
      base: "",
      relativeKey: u,
      driver: e.mounts[""]
    };
  }, n = (u, l) => e.mountpoints.filter(
    (f) => f.startsWith(u) || l && u.startsWith(f)
  ).map((f) => ({
    relativeBase: u.length > f.length ? u.slice(f.length) : void 0,
    mountpoint: f,
    driver: e.mounts[f]
  })), s = (u, l) => {
    if (e.watching) {
      l = ar(l);
      for (const f of e.watchListeners)
        f(u, l);
    }
  }, i = async () => {
    if (!e.watching) {
      e.watching = !0;
      for (const u in e.mounts)
        e.unwatch[u] = await nl(
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
  }, o = (u, l, f) => {
    const p = /* @__PURE__ */ new Map(), m = (b) => {
      let E = p.get(b.base);
      return E || (E = {
        driver: b.driver,
        base: b.base,
        items: []
      }, p.set(b.base, E)), E;
    };
    for (const b of u) {
      const E = typeof b == "string", T = ar(E ? b : b.key), M = E ? void 0 : b.value, v = E || !b.options ? l : { ...l, ...b.options }, O = r(T);
      m(O).items.push({
        key: T,
        value: M,
        relativeKey: O.relativeKey,
        options: v
      });
    }
    return Promise.all([...p.values()].map((b) => f(b))).then(
      (b) => b.flat()
    );
  }, c = {
    // Item
    hasItem(u, l = {}) {
      u = ar(u);
      const { relativeKey: f, driver: p } = r(u);
      return Rt(p.hasItem, f, l);
    },
    getItem(u, l = {}) {
      u = ar(u);
      const { relativeKey: f, driver: p } = r(u);
      return Rt(p.getItem, f, l).then(
        (m) => vo(m)
      );
    },
    getItems(u, l) {
      return o(u, l, (f) => f.driver.getItems ? Rt(
        f.driver.getItems,
        f.items.map((p) => ({
          key: p.relativeKey,
          options: p.options
        })),
        l
      ).then(
        (p) => p.map((m) => ({
          key: Qg(f.base, m.key),
          value: vo(m.value)
        }))
      ) : Promise.all(
        f.items.map((p) => Rt(
          f.driver.getItem,
          p.relativeKey,
          p.options
        ).then((m) => ({
          key: p.key,
          value: vo(m)
        })))
      ));
    },
    getItemRaw(u, l = {}) {
      u = ar(u);
      const { relativeKey: f, driver: p } = r(u);
      return p.getItemRaw ? Rt(p.getItemRaw, f, l) : Rt(p.getItem, f, l).then(
        (m) => Xg(m)
      );
    },
    async setItem(u, l, f = {}) {
      if (l === void 0)
        return c.removeItem(u);
      u = ar(u);
      const { relativeKey: p, driver: m } = r(u);
      m.setItem && (await Rt(m.setItem, p, Co(l), f), m.watch || s("update", u));
    },
    async setItems(u, l) {
      await o(u, l, async (f) => {
        f.driver.setItems && await Rt(
          f.driver.setItems,
          f.items.map((p) => ({
            key: p.relativeKey,
            value: Co(p.value),
            options: p.options
          })),
          l
        ), f.driver.setItem && await Promise.all(
          f.items.map((p) => Rt(
            f.driver.setItem,
            p.relativeKey,
            Co(p.value),
            p.options
          ))
        );
      });
    },
    async setItemRaw(u, l, f = {}) {
      if (l === void 0)
        return c.removeItem(u, f);
      u = ar(u);
      const { relativeKey: p, driver: m } = r(u);
      if (m.setItemRaw)
        await Rt(m.setItemRaw, p, l, f);
      else if (m.setItem)
        await Rt(m.setItem, p, Jg(l), f);
      else
        return;
      m.watch || s("update", u);
    },
    async removeItem(u, l = {}) {
      typeof l == "boolean" && (l = { removeMeta: l }), u = ar(u);
      const { relativeKey: f, driver: p } = r(u);
      p.removeItem && (await Rt(p.removeItem, f, l), (l.removeMeta || l.removeMata) && await Rt(p.removeItem, f + "$", l), p.watch || s("remove", u));
    },
    // Meta
    async getMeta(u, l = {}) {
      typeof l == "boolean" && (l = { nativeOnly: l }), u = ar(u);
      const { relativeKey: f, driver: p } = r(u), m = /* @__PURE__ */ Object.create(null);
      if (p.getMeta && Object.assign(m, await Rt(p.getMeta, f, l)), !l.nativeOnly) {
        const b = await Rt(
          p.getItem,
          f + "$",
          l
        ).then((E) => vo(E));
        b && typeof b == "object" && (typeof b.atime == "string" && (b.atime = new Date(b.atime)), typeof b.mtime == "string" && (b.mtime = new Date(b.mtime)), Object.assign(m, b));
      }
      return m;
    },
    setMeta(u, l, f = {}) {
      return this.setItem(u + "$", l, f);
    },
    removeMeta(u, l = {}) {
      return this.removeItem(u + "$", l);
    },
    // Keys
    async getKeys(u, l = {}) {
      u = _o(u);
      const f = n(u, !0);
      let p = [];
      const m = [];
      for (const b of f) {
        const E = (await Rt(
          b.driver.getKeys,
          b.relativeBase,
          l
        )).map((T) => b.mountpoint + ar(T)).filter((T) => !p.some((M) => T.startsWith(M)));
        m.push(...E), p = [
          b.mountpoint,
          ...p.filter((T) => !T.startsWith(b.mountpoint))
        ];
      }
      return u ? m.filter((b) => b.startsWith(u) && !b.endsWith("$")) : m.filter((b) => !b.endsWith("$"));
    },
    // Utils
    async clear(u, l = {}) {
      u = _o(u), await Promise.all(
        n(u, !1).map(async (f) => {
          if (f.driver.clear)
            return Rt(f.driver.clear, f.relativeBase, l);
          if (f.driver.removeItem) {
            const p = await f.driver.getKeys(f.relativeBase || "", l);
            return Promise.all(
              p.map((m) => f.driver.removeItem(m, l))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(e.mounts).map((u) => sl(u))
      );
    },
    async watch(u) {
      return await i(), e.watchListeners.push(u), async () => {
        e.watchListeners = e.watchListeners.filter(
          (l) => l !== u
        ), e.watchListeners.length === 0 && await a();
      };
    },
    async unwatch() {
      e.watchListeners = [], await a();
    },
    // Mount
    mount(u, l) {
      if (u = _o(u), u && e.mounts[u])
        throw new Error(`already mounted at ${u}`);
      return u && (e.mountpoints.push(u), e.mountpoints.sort((f, p) => p.length - f.length)), e.mounts[u] = l, e.watching && Promise.resolve(nl(l, s, u)).then((f) => {
        e.unwatch[u] = f;
      }).catch(console.error), c;
    },
    async unmount(u, l = !0) {
      u = _o(u), !(!u || !e.mounts[u]) && (e.watching && u in e.unwatch && (e.unwatch[u](), delete e.unwatch[u]), l && await sl(e.mounts[u]), e.mountpoints = e.mountpoints.filter((f) => f !== u), delete e.mounts[u]);
    },
    getMount(u = "") {
      u = ar(u) + ":";
      const l = r(u);
      return {
        driver: l.driver,
        base: l.base
      };
    },
    getMounts(u = "", l = {}) {
      return u = ar(u), n(u, l.parents).map((f) => ({
        driver: f.driver,
        base: f.mountpoint
      }));
    }
  };
  return c;
}
function nl(t, e, r) {
  return t.watch ? t.watch((n, s) => e(n, r + s)) : () => {
  };
}
async function sl(t) {
  typeof t.dispose == "function" && await Rt(t.dispose);
}
function as(t) {
  return new Promise((e, r) => {
    t.oncomplete = t.onsuccess = () => e(t.result), t.onabort = t.onerror = () => r(t.error);
  });
}
function _h(t, e) {
  const r = indexedDB.open(t);
  r.onupgradeneeded = () => r.result.createObjectStore(e);
  const n = as(r);
  return (s, i) => n.then((a) => i(a.transaction(e, s).objectStore(e)));
}
let za;
function Ji() {
  return za || (za = _h("keyval-store", "keyval")), za;
}
function il(t, e = Ji()) {
  return e("readonly", (r) => as(r.get(t)));
}
function ny(t, e, r = Ji()) {
  return r("readwrite", (n) => (n.put(e, t), as(n.transaction)));
}
function sy(t, e = Ji()) {
  return e("readwrite", (r) => (r.delete(t), as(r.transaction)));
}
function iy(t = Ji()) {
  return t("readwrite", (e) => (e.clear(), as(e.transaction)));
}
function oy(t, e) {
  return t.openCursor().onsuccess = function() {
    this.result && (e(this.result), this.result.continue());
  }, as(t.transaction);
}
function ay(t = Ji()) {
  return t("readonly", (e) => {
    if (e.getAllKeys)
      return as(e.getAllKeys());
    const r = [];
    return oy(e, (n) => r.push(n.key)).then(() => r);
  });
}
const cy = (t) => JSON.stringify(t, (e, r) => typeof r == "bigint" ? r.toString() + "n" : r), uy = (t) => {
  const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = t.replace(e, '$1"$2n"$3');
  return JSON.parse(r, (n, s) => typeof s == "string" && s.match(/^\d+n$/) ? BigInt(s.substring(0, s.length - 1)) : s);
};
function ma(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return uy(t);
  } catch {
    return t;
  }
}
function Xi(t) {
  return typeof t == "string" ? t : cy(t) || "";
}
const ly = "idb-keyval";
var dy = (t = {}) => {
  const e = t.base && t.base.length > 0 ? `${t.base}:` : "", r = (s) => e + s;
  let n;
  return t.dbName && t.storeName && (n = _h(t.dbName, t.storeName)), { name: ly, options: t, async hasItem(s) {
    return !(typeof await il(r(s), n) > "u");
  }, async getItem(s) {
    return await il(r(s), n) ?? null;
  }, setItem(s, i) {
    return ny(r(s), i, n);
  }, removeItem(s) {
    return sy(r(s), n);
  }, getKeys() {
    return ay(n);
  }, clear() {
    return iy(n);
  } };
};
const hy = "WALLET_CONNECT_V2_INDEXED_DB", fy = "keyvaluestorage";
let py = class {
  constructor() {
    this.indexedDb = ry({ driver: dy({ dbName: hy, storeName: fy }) });
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
    await this.indexedDb.setItem(t, Xi(e));
  }
  async removeItem(t) {
    await this.indexedDb.removeItem(t);
  }
};
var $a = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Po = { exports: {} };
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
  }), typeof $a < "u" && $a.localStorage ? Po.exports = $a.localStorage : typeof window < "u" && window.localStorage ? Po.exports = window.localStorage : Po.exports = new e();
})();
function gy(t) {
  var e;
  return [t[0], ma((e = t[1]) != null ? e : "")];
}
class yy {
  constructor() {
    this.localStorage = Po.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(gy);
  }
  async getItem(e) {
    const r = this.localStorage.getItem(e);
    if (r !== null)
      return ma(r);
  }
  async setItem(e, r) {
    this.localStorage.setItem(e, Xi(r));
  }
  async removeItem(e) {
    this.localStorage.removeItem(e);
  }
}
const my = "wc_storage_version", ol = 1, vy = async (t, e, r) => {
  const n = my, s = await e.getItem(n);
  if (s && s >= ol) {
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
  await e.setItem(n, ol), r(e), _y(t, a);
}, _y = async (t, e) => {
  e.length && e.forEach(async (r) => {
    await t.removeItem(r);
  });
};
let by = class {
  constructor() {
    this.initialized = !1, this.setInitialized = (e) => {
      this.storage = e, this.initialized = !0;
    };
    const t = new yy();
    this.storage = t;
    try {
      const e = new py();
      vy(t, e, this.setInitialized);
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
var Zs = {};
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
var cc = function(t, e) {
  return cc = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var s in n)
      n.hasOwnProperty(s) && (r[s] = n[s]);
  }, cc(t, e);
};
function wy(t, e) {
  cc(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var uc = function() {
  return uc = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, uc.apply(this, arguments);
};
function Ey(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++)
      e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (r[n[s]] = t[n[s]]);
  return r;
}
function Sy(t, e, r, n) {
  var s = arguments.length, i = s < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var o = t.length - 1; o >= 0; o--)
      (a = t[o]) && (i = (s < 3 ? a(i) : s > 3 ? a(e, r, i) : a(e, r)) || i);
  return s > 3 && i && Object.defineProperty(e, r, i), i;
}
function xy(t, e) {
  return function(r, n) {
    e(r, n, t);
  };
}
function Iy(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function Oy(t, e, r, n) {
  function s(i) {
    return i instanceof r ? i : new r(function(a) {
      a(i);
    });
  }
  return new (r || (r = Promise))(function(i, a) {
    function o(l) {
      try {
        u(n.next(l));
      } catch (f) {
        a(f);
      }
    }
    function c(l) {
      try {
        u(n.throw(l));
      } catch (f) {
        a(f);
      }
    }
    function u(l) {
      l.done ? i(l.value) : s(l.value).then(o, c);
    }
    u((n = n.apply(t, e || [])).next());
  });
}
function Ty(t, e) {
  var r = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, s, i, a;
  return a = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function o(u) {
    return function(l) {
      return c([u, l]);
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
      } catch (l) {
        u = [6, l], s = 0;
      } finally {
        n = i = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function ky(t, e, r, n) {
  n === void 0 && (n = r), t[n] = e[r];
}
function Cy(t, e) {
  for (var r in t)
    r !== "default" && !e.hasOwnProperty(r) && (e[r] = t[r]);
}
function lc(t) {
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
function bh(t, e) {
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
function Py() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(bh(arguments[e]));
  return t;
}
function Ny() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var n = Array(t), s = 0, e = 0; e < r; e++)
    for (var i = arguments[e], a = 0, o = i.length; a < o; a++, s++)
      n[s] = i[a];
  return n;
}
function pi(t) {
  return this instanceof pi ? (this.v = t, this) : new pi(t);
}
function Ry(t, e, r) {
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
    p.value instanceof pi ? Promise.resolve(p.value.v).then(u, l) : f(i[0][2], p);
  }
  function u(p) {
    o("next", p);
  }
  function l(p) {
    o("throw", p);
  }
  function f(p, m) {
    p(m), i.shift(), i.length && o(i[0][0], i[0][1]);
  }
}
function Ay(t) {
  var e, r;
  return e = {}, n("next"), n("throw", function(s) {
    throw s;
  }), n("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function n(s, i) {
    e[s] = t[s] ? function(a) {
      return (r = !r) ? { value: pi(t[s](a)), done: s === "return" } : i ? i(a) : a;
    } : i;
  }
}
function jy(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof lc == "function" ? lc(t) : t[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
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
function Ly(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
function My(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var r in t)
      Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e.default = t, e;
}
function Dy(t) {
  return t && t.__esModule ? t : { default: t };
}
function Uy(t, e) {
  if (!e.has(t))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(t);
}
function zy(t, e, r) {
  if (!e.has(t))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(t, r), r;
}
const $y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return uc;
  },
  __asyncDelegator: Ay,
  __asyncGenerator: Ry,
  __asyncValues: jy,
  __await: pi,
  __awaiter: Oy,
  __classPrivateFieldGet: Uy,
  __classPrivateFieldSet: zy,
  __createBinding: ky,
  __decorate: Sy,
  __exportStar: Cy,
  __extends: wy,
  __generator: Ty,
  __importDefault: Dy,
  __importStar: My,
  __makeTemplateObject: Ly,
  __metadata: Iy,
  __param: xy,
  __read: bh,
  __rest: Ey,
  __spread: Py,
  __spreadArrays: Ny,
  __values: lc
}, Symbol.toStringTag, { value: "Module" })), en = /* @__PURE__ */ ga($y);
var Qs = {}, ae = {}, al = {}, ei = {}, cl;
function Vy() {
  if (cl)
    return ei;
  cl = 1, Object.defineProperty(ei, "__esModule", { value: !0 }), ei.delay = void 0;
  function t(e) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, e);
    });
  }
  return ei.delay = t, ei;
}
var Zn = {}, ul = {}, fs = {}, ll;
function qy() {
  return ll || (ll = 1, Object.defineProperty(fs, "__esModule", { value: !0 }), fs.ONE_THOUSAND = fs.ONE_HUNDRED = void 0, fs.ONE_HUNDRED = 100, fs.ONE_THOUSAND = 1e3), fs;
}
var dl = {}, hl;
function Zy() {
  return hl || (hl = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = t.ONE_MINUTE * 5, t.TEN_MINUTES = t.ONE_MINUTE * 10, t.THIRTY_MINUTES = t.ONE_MINUTE * 30, t.SIXTY_MINUTES = t.ONE_MINUTE * 60, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = t.ONE_HOUR * 3, t.SIX_HOURS = t.ONE_HOUR * 6, t.TWELVE_HOURS = t.ONE_HOUR * 12, t.TWENTY_FOUR_HOURS = t.ONE_HOUR * 24, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = t.ONE_DAY * 3, t.FIVE_DAYS = t.ONE_DAY * 5, t.SEVEN_DAYS = t.ONE_DAY * 7, t.THIRTY_DAYS = t.ONE_DAY * 30, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = t.ONE_WEEK * 2, t.THREE_WEEKS = t.ONE_WEEK * 3, t.FOUR_WEEKS = t.ONE_WEEK * 4, t.ONE_YEAR = t.ONE_DAY * 365;
  }(dl)), dl;
}
var fl;
function wh() {
  return fl || (fl = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = en;
    e.__exportStar(qy(), t), e.__exportStar(Zy(), t);
  }(ul)), ul;
}
var pl;
function Fy() {
  if (pl)
    return Zn;
  pl = 1, Object.defineProperty(Zn, "__esModule", { value: !0 }), Zn.fromMiliseconds = Zn.toMiliseconds = void 0;
  const t = wh();
  function e(n) {
    return n * t.ONE_THOUSAND;
  }
  Zn.toMiliseconds = e;
  function r(n) {
    return Math.floor(n / t.ONE_THOUSAND);
  }
  return Zn.fromMiliseconds = r, Zn;
}
var gl;
function Ky() {
  return gl || (gl = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = en;
    e.__exportStar(Vy(), t), e.__exportStar(Fy(), t);
  }(al)), al;
}
var ps = {}, yl;
function Wy() {
  if (yl)
    return ps;
  yl = 1, Object.defineProperty(ps, "__esModule", { value: !0 }), ps.Watch = void 0;
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
  return ps.Watch = t, ps.default = t, ps;
}
var ml = {}, ti = {}, vl;
function By() {
  if (vl)
    return ti;
  vl = 1, Object.defineProperty(ti, "__esModule", { value: !0 }), ti.IWatch = void 0;
  class t {
  }
  return ti.IWatch = t, ti;
}
var _l;
function Hy() {
  return _l || (_l = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), en.__exportStar(By(), t);
  }(ml)), ml;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = en;
  e.__exportStar(Ky(), t), e.__exportStar(Wy(), t), e.__exportStar(Hy(), t), e.__exportStar(wh(), t);
})(ae);
var bl = {}, ri = {};
let cs = class {
};
const Gy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: cs
}, Symbol.toStringTag, { value: "Module" })), Yy = /* @__PURE__ */ ga(Gy);
var wl;
function Jy() {
  if (wl)
    return ri;
  wl = 1, Object.defineProperty(ri, "__esModule", { value: !0 }), ri.IHeartBeat = void 0;
  const t = Yy;
  class e extends t.IEvents {
    constructor(n) {
      super();
    }
  }
  return ri.IHeartBeat = e, ri;
}
var El;
function Eh() {
  return El || (El = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), en.__exportStar(Jy(), t);
  }(bl)), bl;
}
var Sl = {}, Fn = {}, xl;
function Xy() {
  if (xl)
    return Fn;
  xl = 1, Object.defineProperty(Fn, "__esModule", { value: !0 }), Fn.HEARTBEAT_EVENTS = Fn.HEARTBEAT_INTERVAL = void 0;
  const t = ae;
  return Fn.HEARTBEAT_INTERVAL = t.FIVE_SECONDS, Fn.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, Fn;
}
var Il;
function Sh() {
  return Il || (Il = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), en.__exportStar(Xy(), t);
  }(Sl)), Sl;
}
var Ol;
function Qy() {
  if (Ol)
    return Qs;
  Ol = 1, Object.defineProperty(Qs, "__esModule", { value: !0 }), Qs.HeartBeat = void 0;
  const t = en, e = Ur, r = ae, n = Eh(), s = Sh();
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
  return Qs.HeartBeat = i, Qs;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = en;
  e.__exportStar(Qy(), t), e.__exportStar(Eh(), t), e.__exportStar(Sh(), t);
})(Zs);
var Ke = {}, Va, Tl;
function em() {
  if (Tl)
    return Va;
  Tl = 1;
  function t(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  Va = e;
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
    var l = n.length;
    if (l === 0)
      return r;
    for (var f = "", p = 1 - a, m = -1, b = r && r.length || 0, E = 0; E < b; ) {
      if (r.charCodeAt(E) === 37 && E + 1 < b) {
        switch (m = m > -1 ? m : 0, r.charCodeAt(E + 1)) {
          case 100:
          case 102:
            if (p >= l || n[p] == null)
              break;
            m < E && (f += r.slice(m, E)), f += Number(n[p]), m = E + 2, E++;
            break;
          case 105:
            if (p >= l || n[p] == null)
              break;
            m < E && (f += r.slice(m, E)), f += Math.floor(Number(n[p])), m = E + 2, E++;
            break;
          case 79:
          case 111:
          case 106:
            if (p >= l || n[p] === void 0)
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
            if (p >= l)
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
  return Va;
}
var qa, kl;
function tm() {
  if (kl)
    return qa;
  kl = 1;
  const t = em();
  qa = s;
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
  function n(y, d) {
    return Array.isArray(y) ? y.filter(function(g) {
      return g !== "!stdSerializers.err";
    }) : y === !0 ? Object.keys(d) : !1;
  }
  function s(y) {
    y = y || {}, y.browser = y.browser || {};
    const d = y.browser.transmit;
    if (d && typeof d.send != "function")
      throw Error("pino: transmit option must have a send function");
    const g = y.browser.write || e;
    y.browser.write && (y.browser.asObject = !0);
    const P = y.serializers || {}, N = n(y.browser.serialize, P);
    let D = y.browser.serialize;
    Array.isArray(y.browser.serialize) && y.browser.serialize.indexOf("!stdSerializers.err") > -1 && (D = !1);
    const G = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof g == "function" && (g.error = g.fatal = g.warn = g.info = g.debug = g.trace = g), y.enabled === !1 && (y.level = "silent");
    const Y = y.level || "info", k = Object.create(g);
    k.log || (k.log = T), Object.defineProperty(k, "levelVal", {
      get: Q
    }), Object.defineProperty(k, "level", {
      get: Z,
      set: $
    });
    const A = {
      transmit: d,
      serialize: N,
      asObject: y.browser.asObject,
      levels: G,
      timestamp: m(y)
    };
    k.levels = s.levels, k.level = Y, k.setMaxListeners = k.getMaxListeners = k.emit = k.addListener = k.on = k.prependListener = k.once = k.prependOnceListener = k.removeListener = k.removeAllListeners = k.listeners = k.listenerCount = k.eventNames = k.write = k.flush = T, k.serializers = P, k._serialize = N, k._stdErrSerialize = D, k.child = q, d && (k._logEvent = f());
    function Q() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function Z() {
      return this._level;
    }
    function $(z) {
      if (z !== "silent" && !this.levels.values[z])
        throw Error("unknown level " + z);
      this._level = z, i(A, k, "error", "log"), i(A, k, "fatal", "error"), i(A, k, "warn", "error"), i(A, k, "info", "log"), i(A, k, "debug", "log"), i(A, k, "trace", "log");
    }
    function q(z, F) {
      if (!z)
        throw new Error("missing bindings for child Pino");
      F = F || {}, N && z.serializers && (F.serializers = z.serializers);
      const ye = F.serializers;
      if (N && ye) {
        var K = Object.assign({}, P, ye), de = y.browser.serialize === !0 ? Object.keys(K) : N;
        delete z.serializers, c([z], de, K, this._stdErrSerialize);
      }
      function ne(le) {
        this._childLevel = (le._childLevel | 0) + 1, this.error = u(le, z, "error"), this.fatal = u(le, z, "fatal"), this.warn = u(le, z, "warn"), this.info = u(le, z, "info"), this.debug = u(le, z, "debug"), this.trace = u(le, z, "trace"), K && (this.serializers = K, this._serialize = de), d && (this._logEvent = f(
          [].concat(le._logEvent.bindings, z)
        ));
      }
      return ne.prototype = this, new ne(this);
    }
    return k;
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
  }, s.stdSerializers = r, s.stdTimeFunctions = Object.assign({}, { nullTime: M, epochTime: v, unixTime: O, isoTime: w });
  function i(y, d, g, P) {
    const N = Object.getPrototypeOf(d);
    d[g] = d.levelVal > d.levels.values[g] ? T : N[g] ? N[g] : e[g] || e[P] || T, a(y, d, g);
  }
  function a(y, d, g) {
    !y.transmit && d[g] === T || (d[g] = /* @__PURE__ */ function(P) {
      return function() {
        const N = y.timestamp(), D = new Array(arguments.length), G = Object.getPrototypeOf && Object.getPrototypeOf(this) === e ? e : this;
        for (var Y = 0; Y < D.length; Y++)
          D[Y] = arguments[Y];
        if (y.serialize && !y.asObject && c(D, this._serialize, this.serializers, this._stdErrSerialize), y.asObject ? P.call(G, o(this, g, D, N)) : P.apply(G, D), y.transmit) {
          const k = y.transmit.level || d.level, A = s.levels.values[k], Q = s.levels.values[g];
          if (Q < A)
            return;
          l(this, {
            ts: N,
            methodLevel: g,
            methodValue: Q,
            transmitLevel: k,
            transmitValue: s.levels.values[y.transmit.level || d.level],
            send: y.transmit.send,
            val: d.levelVal
          }, D);
        }
      };
    }(d[g]));
  }
  function o(y, d, g, P) {
    y._serialize && c(g, y._serialize, y.serializers, y._stdErrSerialize);
    const N = g.slice();
    let D = N[0];
    const G = {};
    P && (G.time = P), G.level = s.levels.values[d];
    let Y = (y._childLevel | 0) + 1;
    if (Y < 1 && (Y = 1), D !== null && typeof D == "object") {
      for (; Y-- && typeof N[0] == "object"; )
        Object.assign(G, N.shift());
      D = N.length ? t(N.shift(), N) : void 0;
    } else
      typeof D == "string" && (D = t(N.shift(), N));
    return D !== void 0 && (G.msg = D), G;
  }
  function c(y, d, g, P) {
    for (const N in y)
      if (P && y[N] instanceof Error)
        y[N] = s.stdSerializers.err(y[N]);
      else if (typeof y[N] == "object" && !Array.isArray(y[N]))
        for (const D in y[N])
          d && d.indexOf(D) > -1 && D in g && (y[N][D] = g[D](y[N][D]));
  }
  function u(y, d, g) {
    return function() {
      const P = new Array(1 + arguments.length);
      P[0] = d;
      for (var N = 1; N < P.length; N++)
        P[N] = arguments[N - 1];
      return y[g].apply(this, P);
    };
  }
  function l(y, d, g) {
    const P = d.send, N = d.ts, D = d.methodLevel, G = d.methodValue, Y = d.val, k = y._logEvent.bindings;
    c(
      g,
      y._serialize || Object.keys(y.serializers),
      y.serializers,
      y._stdErrSerialize === void 0 ? !0 : y._stdErrSerialize
    ), y._logEvent.ts = N, y._logEvent.messages = g.filter(function(A) {
      return k.indexOf(A) === -1;
    }), y._logEvent.level.label = D, y._logEvent.level.value = G, P(D, y._logEvent, Y), y._logEvent = f(k);
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
    const d = {
      type: y.constructor.name,
      msg: y.message,
      stack: y.stack
    };
    for (const g in y)
      d[g] === void 0 && (d[g] = y[g]);
    return d;
  }
  function m(y) {
    return typeof y.timestamp == "function" ? y.timestamp : y.timestamp === !1 ? M : v;
  }
  function b() {
    return {};
  }
  function E(y) {
    return y;
  }
  function T() {
  }
  function M() {
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
    function y(d) {
      return typeof d < "u" && d;
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
  return qa;
}
var gs = {}, Cl;
function xh() {
  return Cl || (Cl = 1, Object.defineProperty(gs, "__esModule", { value: !0 }), gs.PINO_CUSTOM_CONTEXT_KEY = gs.PINO_LOGGER_DEFAULTS = void 0, gs.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, gs.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), gs;
}
var Jt = {}, Pl;
function rm() {
  if (Pl)
    return Jt;
  Pl = 1, Object.defineProperty(Jt, "__esModule", { value: !0 }), Jt.generateChildLogger = Jt.formatChildLoggerContext = Jt.getLoggerContext = Jt.setBrowserLoggerContext = Jt.getBrowserLoggerContext = Jt.getDefaultLoggerOptions = void 0;
  const t = xh();
  function e(o) {
    return Object.assign(Object.assign({}, o), { level: (o == null ? void 0 : o.level) || t.PINO_LOGGER_DEFAULTS.level });
  }
  Jt.getDefaultLoggerOptions = e;
  function r(o, c = t.PINO_CUSTOM_CONTEXT_KEY) {
    return o[c] || "";
  }
  Jt.getBrowserLoggerContext = r;
  function n(o, c, u = t.PINO_CUSTOM_CONTEXT_KEY) {
    return o[u] = c, o;
  }
  Jt.setBrowserLoggerContext = n;
  function s(o, c = t.PINO_CUSTOM_CONTEXT_KEY) {
    let u = "";
    return typeof o.bindings > "u" ? u = r(o, c) : u = o.bindings().context || "", u;
  }
  Jt.getLoggerContext = s;
  function i(o, c, u = t.PINO_CUSTOM_CONTEXT_KEY) {
    const l = s(o, u);
    return l.trim() ? `${l}/${c}` : c;
  }
  Jt.formatChildLoggerContext = i;
  function a(o, c, u = t.PINO_CUSTOM_CONTEXT_KEY) {
    const l = i(o, c, u), f = o.child({ context: l });
    return n(f, l, u);
  }
  return Jt.generateChildLogger = a, Jt;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.pino = void 0;
  const e = en, r = e.__importDefault(tm());
  Object.defineProperty(t, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), e.__exportStar(xh(), t), e.__exportStar(rm(), t);
})(Ke);
let nm = class extends cs {
  constructor(t) {
    super(), this.opts = t, this.protocol = "wc", this.version = 2;
  }
}, sm = class extends cs {
  constructor(t, e) {
    super(), this.core = t, this.logger = e, this.records = /* @__PURE__ */ new Map();
  }
}, im = class {
  constructor(t, e) {
    this.logger = t, this.core = e;
  }
}, om = class extends cs {
  constructor(t, e) {
    super(), this.relayer = t, this.logger = e;
  }
}, am = class extends cs {
  constructor(t) {
    super();
  }
}, cm = class {
  constructor(t, e, r, n) {
    this.core = t, this.logger = e, this.name = r;
  }
};
class um extends cs {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
class lm extends cs {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}
let dm = class {
  constructor(t, e) {
    this.projectId = t, this.logger = e;
  }
}, hm = class {
  constructor(t, e) {
    this.projectId = t, this.logger = e;
  }
}, fm = class {
  constructor(t) {
    this.opts = t, this.protocol = "wc", this.version = 2;
  }
}, pm = class {
  constructor(t) {
    this.client = t;
  }
};
var cu = {}, Fs = {}, va = {}, _a = {};
Object.defineProperty(_a, "__esModule", { value: !0 });
_a.BrowserRandomSource = void 0;
const Nl = 65536;
class gm {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e && e.getRandomValues !== void 0 && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const r = new Uint8Array(e);
    for (let n = 0; n < r.length; n += Nl)
      this._crypto.getRandomValues(r.subarray(n, n + Math.min(r.length - n, Nl)));
    return r;
  }
}
_a.BrowserRandomSource = gm;
function ym(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var ba = {}, mr = {};
Object.defineProperty(mr, "__esModule", { value: !0 });
function mm(t) {
  for (var e = 0; e < t.length; e++)
    t[e] = 0;
  return t;
}
mr.wipe = mm;
const vm = {}, _m = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vm
}, Symbol.toStringTag, { value: "Module" })), bm = /* @__PURE__ */ ga(_m);
Object.defineProperty(ba, "__esModule", { value: !0 });
ba.NodeRandomSource = void 0;
const wm = mr;
class Em {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof ym < "u") {
      const e = bm;
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
    return (0, wm.wipe)(r), n;
  }
}
ba.NodeRandomSource = Em;
Object.defineProperty(va, "__esModule", { value: !0 });
va.SystemRandomSource = void 0;
const Sm = _a, xm = ba;
class Im {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new Sm.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new xm.NodeRandomSource(), this._source.isAvailable) {
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
va.SystemRandomSource = Im;
var Se = {}, Ih = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  function e(o, c) {
    var u = o >>> 16 & 65535, l = o & 65535, f = c >>> 16 & 65535, p = c & 65535;
    return l * p + (u * p + l * f << 16 >>> 0) | 0;
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
})(Ih);
Object.defineProperty(Se, "__esModule", { value: !0 });
var Oh = Ih;
function Om(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) << 16 >> 16;
}
Se.readInt16BE = Om;
function Tm(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) >>> 0;
}
Se.readUint16BE = Tm;
function km(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) << 16 >> 16;
}
Se.readInt16LE = km;
function Cm(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) >>> 0;
}
Se.readUint16LE = Cm;
function Th(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 8, e[r + 1] = t >>> 0, e;
}
Se.writeUint16BE = Th;
Se.writeInt16BE = Th;
function kh(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e;
}
Se.writeUint16LE = kh;
Se.writeInt16LE = kh;
function dc(t, e) {
  return e === void 0 && (e = 0), t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
}
Se.readInt32BE = dc;
function hc(t, e) {
  return e === void 0 && (e = 0), (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
}
Se.readUint32BE = hc;
function fc(t, e) {
  return e === void 0 && (e = 0), t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e];
}
Se.readInt32LE = fc;
function pc(t, e) {
  return e === void 0 && (e = 0), (t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]) >>> 0;
}
Se.readUint32LE = pc;
function Mo(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 24, e[r + 1] = t >>> 16, e[r + 2] = t >>> 8, e[r + 3] = t >>> 0, e;
}
Se.writeUint32BE = Mo;
Se.writeInt32BE = Mo;
function Do(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e[r + 2] = t >>> 16, e[r + 3] = t >>> 24, e;
}
Se.writeUint32LE = Do;
Se.writeInt32LE = Do;
function Pm(t, e) {
  e === void 0 && (e = 0);
  var r = dc(t, e), n = dc(t, e + 4);
  return r * 4294967296 + n - (n >> 31) * 4294967296;
}
Se.readInt64BE = Pm;
function Nm(t, e) {
  e === void 0 && (e = 0);
  var r = hc(t, e), n = hc(t, e + 4);
  return r * 4294967296 + n;
}
Se.readUint64BE = Nm;
function Rm(t, e) {
  e === void 0 && (e = 0);
  var r = fc(t, e), n = fc(t, e + 4);
  return n * 4294967296 + r - (r >> 31) * 4294967296;
}
Se.readInt64LE = Rm;
function Am(t, e) {
  e === void 0 && (e = 0);
  var r = pc(t, e), n = pc(t, e + 4);
  return n * 4294967296 + r;
}
Se.readUint64LE = Am;
function Ch(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), Mo(t / 4294967296 >>> 0, e, r), Mo(t >>> 0, e, r + 4), e;
}
Se.writeUint64BE = Ch;
Se.writeInt64BE = Ch;
function Ph(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), Do(t >>> 0, e, r), Do(t / 4294967296 >>> 0, e, r + 4), e;
}
Se.writeUint64LE = Ph;
Se.writeInt64LE = Ph;
function jm(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var n = 0, s = 1, i = t / 8 + r - 1; i >= r; i--)
    n += e[i] * s, s *= 256;
  return n;
}
Se.readUintBE = jm;
function Lm(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var n = 0, s = 1, i = r; i < r + t / 8; i++)
    n += e[i] * s, s *= 256;
  return n;
}
Se.readUintLE = Lm;
function Mm(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!Oh.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var s = 1, i = t / 8 + n - 1; i >= n; i--)
    r[i] = e / s & 255, s *= 256;
  return r;
}
Se.writeUintBE = Mm;
function Dm(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!Oh.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var s = 1, i = n; i < n + t / 8; i++)
    r[i] = e / s & 255, s *= 256;
  return r;
}
Se.writeUintLE = Dm;
function Um(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e);
}
Se.readFloat32BE = Um;
function zm(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e, !0);
}
Se.readFloat32LE = zm;
function $m(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e);
}
Se.readFloat64BE = $m;
function Vm(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e, !0);
}
Se.readFloat64LE = Vm;
function qm(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t), e;
}
Se.writeFloat32BE = qm;
function Zm(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t, !0), e;
}
Se.writeFloat32LE = Zm;
function Fm(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t), e;
}
Se.writeFloat64BE = Fm;
function Km(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t, !0), e;
}
Se.writeFloat64LE = Km;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
  const e = va, r = Se, n = mr;
  t.defaultRandomSource = new e.SystemRandomSource();
  function s(u, l = t.defaultRandomSource) {
    return l.randomBytes(u);
  }
  t.randomBytes = s;
  function i(u = t.defaultRandomSource) {
    const l = s(4, u), f = (0, r.readUint32LE)(l);
    return (0, n.wipe)(l), f;
  }
  t.randomUint32 = i;
  const a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function o(u, l = a, f = t.defaultRandomSource) {
    if (l.length < 2)
      throw new Error("randomString charset is too short");
    if (l.length > 256)
      throw new Error("randomString charset is too long");
    let p = "";
    const m = l.length, b = 256 - 256 % m;
    for (; u > 0; ) {
      const E = s(Math.ceil(u * 256 / b), f);
      for (let T = 0; T < E.length && u > 0; T++) {
        const M = E[T];
        M < b && (p += l.charAt(M % m), u--);
      }
      (0, n.wipe)(E);
    }
    return p;
  }
  t.randomString = o;
  function c(u, l = a, f = t.defaultRandomSource) {
    const p = Math.ceil(u / (Math.log(l.length) / Math.LN2));
    return o(p, l, f);
  }
  t.randomStringForEntropy = c;
})(Fs);
var Nh = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Se, r = mr;
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
        var l = 0;
        if (this._bytesHashed += u, this._bufferLength > 0) {
          for (; this._bufferLength < t.BLOCK_SIZE && u > 0; )
            this._buffer[this._bufferLength++] = c[l++], u--;
          this._bufferLength === this.blockSize && (i(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (u >= this.blockSize && (l = i(this._tempHi, this._tempLo, this._stateHi, this._stateLo, c, l, u), u %= this.blockSize); u > 0; )
          this._buffer[this._bufferLength++] = c[l++], u--;
        return this;
      }, o.prototype.finish = function(c) {
        if (!this._finished) {
          var u = this._bytesHashed, l = this._bufferLength, f = u / 536870912 | 0, p = u << 3, m = u % 128 < 112 ? 128 : 256;
          this._buffer[l] = 128;
          for (var b = l + 1; b < m - 8; b++)
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
  function i(o, c, u, l, f, p, m) {
    for (var b = u[0], E = u[1], T = u[2], M = u[3], v = u[4], O = u[5], w = u[6], x = u[7], y = l[0], d = l[1], g = l[2], P = l[3], N = l[4], D = l[5], G = l[6], Y = l[7], k, A, Q, Z, $, q, z, F; m >= 128; ) {
      for (var ye = 0; ye < 16; ye++) {
        var K = 8 * ye + p;
        o[ye] = e.readUint32BE(f, K), c[ye] = e.readUint32BE(f, K + 4);
      }
      for (var ye = 0; ye < 80; ye++) {
        var de = b, ne = E, le = T, L = M, j = v, C = O, h = w, I = x, H = y, ee = d, je = g, Le = P, Oe = N, Ze = D, at = G, tt = Y;
        if (k = x, A = Y, $ = A & 65535, q = A >>> 16, z = k & 65535, F = k >>> 16, k = (v >>> 14 | N << 18) ^ (v >>> 18 | N << 14) ^ (N >>> 9 | v << 23), A = (N >>> 14 | v << 18) ^ (N >>> 18 | v << 14) ^ (v >>> 9 | N << 23), $ += A & 65535, q += A >>> 16, z += k & 65535, F += k >>> 16, k = v & O ^ ~v & w, A = N & D ^ ~N & G, $ += A & 65535, q += A >>> 16, z += k & 65535, F += k >>> 16, k = s[ye * 2], A = s[ye * 2 + 1], $ += A & 65535, q += A >>> 16, z += k & 65535, F += k >>> 16, k = o[ye % 16], A = c[ye % 16], $ += A & 65535, q += A >>> 16, z += k & 65535, F += k >>> 16, q += $ >>> 16, z += q >>> 16, F += z >>> 16, Q = z & 65535 | F << 16, Z = $ & 65535 | q << 16, k = Q, A = Z, $ = A & 65535, q = A >>> 16, z = k & 65535, F = k >>> 16, k = (b >>> 28 | y << 4) ^ (y >>> 2 | b << 30) ^ (y >>> 7 | b << 25), A = (y >>> 28 | b << 4) ^ (b >>> 2 | y << 30) ^ (b >>> 7 | y << 25), $ += A & 65535, q += A >>> 16, z += k & 65535, F += k >>> 16, k = b & E ^ b & T ^ E & T, A = y & d ^ y & g ^ d & g, $ += A & 65535, q += A >>> 16, z += k & 65535, F += k >>> 16, q += $ >>> 16, z += q >>> 16, F += z >>> 16, I = z & 65535 | F << 16, tt = $ & 65535 | q << 16, k = L, A = Le, $ = A & 65535, q = A >>> 16, z = k & 65535, F = k >>> 16, k = Q, A = Z, $ += A & 65535, q += A >>> 16, z += k & 65535, F += k >>> 16, q += $ >>> 16, z += q >>> 16, F += z >>> 16, L = z & 65535 | F << 16, Le = $ & 65535 | q << 16, E = de, T = ne, M = le, v = L, O = j, w = C, x = h, b = I, d = H, g = ee, P = je, N = Le, D = Oe, G = Ze, Y = at, y = tt, ye % 16 === 15)
          for (var K = 0; K < 16; K++)
            k = o[K], A = c[K], $ = A & 65535, q = A >>> 16, z = k & 65535, F = k >>> 16, k = o[(K + 9) % 16], A = c[(K + 9) % 16], $ += A & 65535, q += A >>> 16, z += k & 65535, F += k >>> 16, Q = o[(K + 1) % 16], Z = c[(K + 1) % 16], k = (Q >>> 1 | Z << 31) ^ (Q >>> 8 | Z << 24) ^ Q >>> 7, A = (Z >>> 1 | Q << 31) ^ (Z >>> 8 | Q << 24) ^ (Z >>> 7 | Q << 25), $ += A & 65535, q += A >>> 16, z += k & 65535, F += k >>> 16, Q = o[(K + 14) % 16], Z = c[(K + 14) % 16], k = (Q >>> 19 | Z << 13) ^ (Z >>> 29 | Q << 3) ^ Q >>> 6, A = (Z >>> 19 | Q << 13) ^ (Q >>> 29 | Z << 3) ^ (Z >>> 6 | Q << 26), $ += A & 65535, q += A >>> 16, z += k & 65535, F += k >>> 16, q += $ >>> 16, z += q >>> 16, F += z >>> 16, o[K] = z & 65535 | F << 16, c[K] = $ & 65535 | q << 16;
      }
      k = b, A = y, $ = A & 65535, q = A >>> 16, z = k & 65535, F = k >>> 16, k = u[0], A = l[0], $ += A & 65535, q += A >>> 16, z += k & 65535, F += k >>> 16, q += $ >>> 16, z += q >>> 16, F += z >>> 16, u[0] = b = z & 65535 | F << 16, l[0] = y = $ & 65535 | q << 16, k = E, A = d, $ = A & 65535, q = A >>> 16, z = k & 65535, F = k >>> 16, k = u[1], A = l[1], $ += A & 65535, q += A >>> 16, z += k & 65535, F += k >>> 16, q += $ >>> 16, z += q >>> 16, F += z >>> 16, u[1] = E = z & 65535 | F << 16, l[1] = d = $ & 65535 | q << 16, k = T, A = g, $ = A & 65535, q = A >>> 16, z = k & 65535, F = k >>> 16, k = u[2], A = l[2], $ += A & 65535, q += A >>> 16, z += k & 65535, F += k >>> 16, q += $ >>> 16, z += q >>> 16, F += z >>> 16, u[2] = T = z & 65535 | F << 16, l[2] = g = $ & 65535 | q << 16, k = M, A = P, $ = A & 65535, q = A >>> 16, z = k & 65535, F = k >>> 16, k = u[3], A = l[3], $ += A & 65535, q += A >>> 16, z += k & 65535, F += k >>> 16, q += $ >>> 16, z += q >>> 16, F += z >>> 16, u[3] = M = z & 65535 | F << 16, l[3] = P = $ & 65535 | q << 16, k = v, A = N, $ = A & 65535, q = A >>> 16, z = k & 65535, F = k >>> 16, k = u[4], A = l[4], $ += A & 65535, q += A >>> 16, z += k & 65535, F += k >>> 16, q += $ >>> 16, z += q >>> 16, F += z >>> 16, u[4] = v = z & 65535 | F << 16, l[4] = N = $ & 65535 | q << 16, k = O, A = D, $ = A & 65535, q = A >>> 16, z = k & 65535, F = k >>> 16, k = u[5], A = l[5], $ += A & 65535, q += A >>> 16, z += k & 65535, F += k >>> 16, q += $ >>> 16, z += q >>> 16, F += z >>> 16, u[5] = O = z & 65535 | F << 16, l[5] = D = $ & 65535 | q << 16, k = w, A = G, $ = A & 65535, q = A >>> 16, z = k & 65535, F = k >>> 16, k = u[6], A = l[6], $ += A & 65535, q += A >>> 16, z += k & 65535, F += k >>> 16, q += $ >>> 16, z += q >>> 16, F += z >>> 16, u[6] = w = z & 65535 | F << 16, l[6] = G = $ & 65535 | q << 16, k = x, A = Y, $ = A & 65535, q = A >>> 16, z = k & 65535, F = k >>> 16, k = u[7], A = l[7], $ += A & 65535, q += A >>> 16, z += k & 65535, F += k >>> 16, q += $ >>> 16, z += q >>> 16, F += z >>> 16, u[7] = x = z & 65535 | F << 16, l[7] = Y = $ & 65535 | q << 16, p += 128, m -= 128;
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
})(Nh);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.convertSecretKeyToX25519 = t.convertPublicKeyToX25519 = t.verify = t.sign = t.extractPublicKeyFromSecretKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.SEED_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = t.SIGNATURE_LENGTH = void 0;
  const e = Fs, r = Nh, n = mr;
  t.SIGNATURE_LENGTH = 64, t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 64, t.SEED_LENGTH = 32;
  function s(L) {
    const j = new Float64Array(16);
    if (L)
      for (let C = 0; C < L.length; C++)
        j[C] = L[C];
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
  ]), l = s([
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
    for (let C = 0; C < 16; C++)
      L[C] = j[C] | 0;
  }
  function b(L) {
    let j = 1;
    for (let C = 0; C < 16; C++) {
      let h = L[C] + j + 65535;
      j = Math.floor(h / 65536), L[C] = h - j * 65536;
    }
    L[0] += j - 1 + 37 * (j - 1);
  }
  function E(L, j, C) {
    const h = ~(C - 1);
    for (let I = 0; I < 16; I++) {
      const H = h & (L[I] ^ j[I]);
      L[I] ^= H, j[I] ^= H;
    }
  }
  function T(L, j) {
    const C = s(), h = s();
    for (let I = 0; I < 16; I++)
      h[I] = j[I];
    b(h), b(h), b(h);
    for (let I = 0; I < 2; I++) {
      C[0] = h[0] - 65517;
      for (let ee = 1; ee < 15; ee++)
        C[ee] = h[ee] - 65535 - (C[ee - 1] >> 16 & 1), C[ee - 1] &= 65535;
      C[15] = h[15] - 32767 - (C[14] >> 16 & 1);
      const H = C[15] >> 16 & 1;
      C[14] &= 65535, E(h, C, 1 - H);
    }
    for (let I = 0; I < 16; I++)
      L[2 * I] = h[I] & 255, L[2 * I + 1] = h[I] >> 8;
  }
  function M(L, j) {
    let C = 0;
    for (let h = 0; h < 32; h++)
      C |= L[h] ^ j[h];
    return (1 & C - 1 >>> 8) - 1;
  }
  function v(L, j) {
    const C = new Uint8Array(32), h = new Uint8Array(32);
    return T(C, L), T(h, j), M(C, h);
  }
  function O(L) {
    const j = new Uint8Array(32);
    return T(j, L), j[0] & 1;
  }
  function w(L, j) {
    for (let C = 0; C < 16; C++)
      L[C] = j[2 * C] + (j[2 * C + 1] << 8);
    L[15] &= 32767;
  }
  function x(L, j, C) {
    for (let h = 0; h < 16; h++)
      L[h] = j[h] + C[h];
  }
  function y(L, j, C) {
    for (let h = 0; h < 16; h++)
      L[h] = j[h] - C[h];
  }
  function d(L, j, C) {
    let h, I, H = 0, ee = 0, je = 0, Le = 0, Oe = 0, Ze = 0, at = 0, tt = 0, Ve = 0, Ue = 0, Te = 0, Pe = 0, ke = 0, we = 0, _e = 0, he = 0, Ne = 0, Me = 0, me = 0, ze = 0, Fe = 0, He = 0, Ge = 0, We = 0, hr = 0, vr = 0, Vr = 0, Mt = 0, qr = 0, _r = 0, mn = 0, ct = C[0], st = C[1], yt = C[2], lt = C[3], mt = C[4], it = C[5], wt = C[6], It = C[7], Ot = C[8], Et = C[9], Tt = C[10], St = C[11], vt = C[12], rt = C[13], S = C[14], U = C[15];
    h = j[0], H += h * ct, ee += h * st, je += h * yt, Le += h * lt, Oe += h * mt, Ze += h * it, at += h * wt, tt += h * It, Ve += h * Ot, Ue += h * Et, Te += h * Tt, Pe += h * St, ke += h * vt, we += h * rt, _e += h * S, he += h * U, h = j[1], ee += h * ct, je += h * st, Le += h * yt, Oe += h * lt, Ze += h * mt, at += h * it, tt += h * wt, Ve += h * It, Ue += h * Ot, Te += h * Et, Pe += h * Tt, ke += h * St, we += h * vt, _e += h * rt, he += h * S, Ne += h * U, h = j[2], je += h * ct, Le += h * st, Oe += h * yt, Ze += h * lt, at += h * mt, tt += h * it, Ve += h * wt, Ue += h * It, Te += h * Ot, Pe += h * Et, ke += h * Tt, we += h * St, _e += h * vt, he += h * rt, Ne += h * S, Me += h * U, h = j[3], Le += h * ct, Oe += h * st, Ze += h * yt, at += h * lt, tt += h * mt, Ve += h * it, Ue += h * wt, Te += h * It, Pe += h * Ot, ke += h * Et, we += h * Tt, _e += h * St, he += h * vt, Ne += h * rt, Me += h * S, me += h * U, h = j[4], Oe += h * ct, Ze += h * st, at += h * yt, tt += h * lt, Ve += h * mt, Ue += h * it, Te += h * wt, Pe += h * It, ke += h * Ot, we += h * Et, _e += h * Tt, he += h * St, Ne += h * vt, Me += h * rt, me += h * S, ze += h * U, h = j[5], Ze += h * ct, at += h * st, tt += h * yt, Ve += h * lt, Ue += h * mt, Te += h * it, Pe += h * wt, ke += h * It, we += h * Ot, _e += h * Et, he += h * Tt, Ne += h * St, Me += h * vt, me += h * rt, ze += h * S, Fe += h * U, h = j[6], at += h * ct, tt += h * st, Ve += h * yt, Ue += h * lt, Te += h * mt, Pe += h * it, ke += h * wt, we += h * It, _e += h * Ot, he += h * Et, Ne += h * Tt, Me += h * St, me += h * vt, ze += h * rt, Fe += h * S, He += h * U, h = j[7], tt += h * ct, Ve += h * st, Ue += h * yt, Te += h * lt, Pe += h * mt, ke += h * it, we += h * wt, _e += h * It, he += h * Ot, Ne += h * Et, Me += h * Tt, me += h * St, ze += h * vt, Fe += h * rt, He += h * S, Ge += h * U, h = j[8], Ve += h * ct, Ue += h * st, Te += h * yt, Pe += h * lt, ke += h * mt, we += h * it, _e += h * wt, he += h * It, Ne += h * Ot, Me += h * Et, me += h * Tt, ze += h * St, Fe += h * vt, He += h * rt, Ge += h * S, We += h * U, h = j[9], Ue += h * ct, Te += h * st, Pe += h * yt, ke += h * lt, we += h * mt, _e += h * it, he += h * wt, Ne += h * It, Me += h * Ot, me += h * Et, ze += h * Tt, Fe += h * St, He += h * vt, Ge += h * rt, We += h * S, hr += h * U, h = j[10], Te += h * ct, Pe += h * st, ke += h * yt, we += h * lt, _e += h * mt, he += h * it, Ne += h * wt, Me += h * It, me += h * Ot, ze += h * Et, Fe += h * Tt, He += h * St, Ge += h * vt, We += h * rt, hr += h * S, vr += h * U, h = j[11], Pe += h * ct, ke += h * st, we += h * yt, _e += h * lt, he += h * mt, Ne += h * it, Me += h * wt, me += h * It, ze += h * Ot, Fe += h * Et, He += h * Tt, Ge += h * St, We += h * vt, hr += h * rt, vr += h * S, Vr += h * U, h = j[12], ke += h * ct, we += h * st, _e += h * yt, he += h * lt, Ne += h * mt, Me += h * it, me += h * wt, ze += h * It, Fe += h * Ot, He += h * Et, Ge += h * Tt, We += h * St, hr += h * vt, vr += h * rt, Vr += h * S, Mt += h * U, h = j[13], we += h * ct, _e += h * st, he += h * yt, Ne += h * lt, Me += h * mt, me += h * it, ze += h * wt, Fe += h * It, He += h * Ot, Ge += h * Et, We += h * Tt, hr += h * St, vr += h * vt, Vr += h * rt, Mt += h * S, qr += h * U, h = j[14], _e += h * ct, he += h * st, Ne += h * yt, Me += h * lt, me += h * mt, ze += h * it, Fe += h * wt, He += h * It, Ge += h * Ot, We += h * Et, hr += h * Tt, vr += h * St, Vr += h * vt, Mt += h * rt, qr += h * S, _r += h * U, h = j[15], he += h * ct, Ne += h * st, Me += h * yt, me += h * lt, ze += h * mt, Fe += h * it, He += h * wt, Ge += h * It, We += h * Ot, hr += h * Et, vr += h * Tt, Vr += h * St, Mt += h * vt, qr += h * rt, _r += h * S, mn += h * U, H += 38 * Ne, ee += 38 * Me, je += 38 * me, Le += 38 * ze, Oe += 38 * Fe, Ze += 38 * He, at += 38 * Ge, tt += 38 * We, Ve += 38 * hr, Ue += 38 * vr, Te += 38 * Vr, Pe += 38 * Mt, ke += 38 * qr, we += 38 * _r, _e += 38 * mn, I = 1, h = H + I + 65535, I = Math.floor(h / 65536), H = h - I * 65536, h = ee + I + 65535, I = Math.floor(h / 65536), ee = h - I * 65536, h = je + I + 65535, I = Math.floor(h / 65536), je = h - I * 65536, h = Le + I + 65535, I = Math.floor(h / 65536), Le = h - I * 65536, h = Oe + I + 65535, I = Math.floor(h / 65536), Oe = h - I * 65536, h = Ze + I + 65535, I = Math.floor(h / 65536), Ze = h - I * 65536, h = at + I + 65535, I = Math.floor(h / 65536), at = h - I * 65536, h = tt + I + 65535, I = Math.floor(h / 65536), tt = h - I * 65536, h = Ve + I + 65535, I = Math.floor(h / 65536), Ve = h - I * 65536, h = Ue + I + 65535, I = Math.floor(h / 65536), Ue = h - I * 65536, h = Te + I + 65535, I = Math.floor(h / 65536), Te = h - I * 65536, h = Pe + I + 65535, I = Math.floor(h / 65536), Pe = h - I * 65536, h = ke + I + 65535, I = Math.floor(h / 65536), ke = h - I * 65536, h = we + I + 65535, I = Math.floor(h / 65536), we = h - I * 65536, h = _e + I + 65535, I = Math.floor(h / 65536), _e = h - I * 65536, h = he + I + 65535, I = Math.floor(h / 65536), he = h - I * 65536, H += I - 1 + 37 * (I - 1), I = 1, h = H + I + 65535, I = Math.floor(h / 65536), H = h - I * 65536, h = ee + I + 65535, I = Math.floor(h / 65536), ee = h - I * 65536, h = je + I + 65535, I = Math.floor(h / 65536), je = h - I * 65536, h = Le + I + 65535, I = Math.floor(h / 65536), Le = h - I * 65536, h = Oe + I + 65535, I = Math.floor(h / 65536), Oe = h - I * 65536, h = Ze + I + 65535, I = Math.floor(h / 65536), Ze = h - I * 65536, h = at + I + 65535, I = Math.floor(h / 65536), at = h - I * 65536, h = tt + I + 65535, I = Math.floor(h / 65536), tt = h - I * 65536, h = Ve + I + 65535, I = Math.floor(h / 65536), Ve = h - I * 65536, h = Ue + I + 65535, I = Math.floor(h / 65536), Ue = h - I * 65536, h = Te + I + 65535, I = Math.floor(h / 65536), Te = h - I * 65536, h = Pe + I + 65535, I = Math.floor(h / 65536), Pe = h - I * 65536, h = ke + I + 65535, I = Math.floor(h / 65536), ke = h - I * 65536, h = we + I + 65535, I = Math.floor(h / 65536), we = h - I * 65536, h = _e + I + 65535, I = Math.floor(h / 65536), _e = h - I * 65536, h = he + I + 65535, I = Math.floor(h / 65536), he = h - I * 65536, H += I - 1 + 37 * (I - 1), L[0] = H, L[1] = ee, L[2] = je, L[3] = Le, L[4] = Oe, L[5] = Ze, L[6] = at, L[7] = tt, L[8] = Ve, L[9] = Ue, L[10] = Te, L[11] = Pe, L[12] = ke, L[13] = we, L[14] = _e, L[15] = he;
  }
  function g(L, j) {
    d(L, j, j);
  }
  function P(L, j) {
    const C = s();
    let h;
    for (h = 0; h < 16; h++)
      C[h] = j[h];
    for (h = 253; h >= 0; h--)
      g(C, C), h !== 2 && h !== 4 && d(C, C, j);
    for (h = 0; h < 16; h++)
      L[h] = C[h];
  }
  function N(L, j) {
    const C = s();
    let h;
    for (h = 0; h < 16; h++)
      C[h] = j[h];
    for (h = 250; h >= 0; h--)
      g(C, C), h !== 1 && d(C, C, j);
    for (h = 0; h < 16; h++)
      L[h] = C[h];
  }
  function D(L, j) {
    const C = s(), h = s(), I = s(), H = s(), ee = s(), je = s(), Le = s(), Oe = s(), Ze = s();
    y(C, L[1], L[0]), y(Ze, j[1], j[0]), d(C, C, Ze), x(h, L[0], L[1]), x(Ze, j[0], j[1]), d(h, h, Ze), d(I, L[3], j[3]), d(I, I, u), d(H, L[2], j[2]), x(H, H, H), y(ee, h, C), y(je, H, I), x(Le, H, I), x(Oe, h, C), d(L[0], ee, je), d(L[1], Oe, Le), d(L[2], Le, je), d(L[3], ee, Oe);
  }
  function G(L, j, C) {
    for (let h = 0; h < 4; h++)
      E(L[h], j[h], C);
  }
  function Y(L, j) {
    const C = s(), h = s(), I = s();
    P(I, j[2]), d(C, j[0], I), d(h, j[1], I), T(L, h), L[31] ^= O(C) << 7;
  }
  function k(L, j, C) {
    m(L[0], a), m(L[1], o), m(L[2], o), m(L[3], a);
    for (let h = 255; h >= 0; --h) {
      const I = C[h / 8 | 0] >> (h & 7) & 1;
      G(L, j, I), D(j, L), D(L, L), G(L, j, I);
    }
  }
  function A(L, j) {
    const C = [s(), s(), s(), s()];
    m(C[0], l), m(C[1], f), m(C[2], o), d(C[3], l, f), k(L, C, j);
  }
  function Q(L) {
    if (L.length !== t.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${t.SEED_LENGTH} bytes`);
    const j = (0, r.hash)(L);
    j[0] &= 248, j[31] &= 127, j[31] |= 64;
    const C = new Uint8Array(32), h = [s(), s(), s(), s()];
    A(h, j), Y(C, h);
    const I = new Uint8Array(64);
    return I.set(L), I.set(C, 32), {
      publicKey: C,
      secretKey: I
    };
  }
  t.generateKeyPairFromSeed = Q;
  function Z(L) {
    const j = (0, e.randomBytes)(32, L), C = Q(j);
    return (0, n.wipe)(j), C;
  }
  t.generateKeyPair = Z;
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
  function z(L, j) {
    let C, h, I, H;
    for (h = 63; h >= 32; --h) {
      for (C = 0, I = h - 32, H = h - 12; I < H; ++I)
        j[I] += C - 16 * j[h] * q[I - (h - 32)], C = Math.floor((j[I] + 128) / 256), j[I] -= C * 256;
      j[I] += C, j[h] = 0;
    }
    for (C = 0, I = 0; I < 32; I++)
      j[I] += C - (j[31] >> 4) * q[I], C = j[I] >> 8, j[I] &= 255;
    for (I = 0; I < 32; I++)
      j[I] -= C * q[I];
    for (h = 0; h < 32; h++)
      j[h + 1] += j[h] >> 8, L[h] = j[h] & 255;
  }
  function F(L) {
    const j = new Float64Array(64);
    for (let C = 0; C < 64; C++)
      j[C] = L[C];
    for (let C = 0; C < 64; C++)
      L[C] = 0;
    z(L, j);
  }
  function ye(L, j) {
    const C = new Float64Array(64), h = [s(), s(), s(), s()], I = (0, r.hash)(L.subarray(0, 32));
    I[0] &= 248, I[31] &= 127, I[31] |= 64;
    const H = new Uint8Array(64);
    H.set(I.subarray(32), 32);
    const ee = new r.SHA512();
    ee.update(H.subarray(32)), ee.update(j);
    const je = ee.digest();
    ee.clean(), F(je), A(h, je), Y(H, h), ee.reset(), ee.update(H.subarray(0, 32)), ee.update(L.subarray(32)), ee.update(j);
    const Le = ee.digest();
    F(Le);
    for (let Oe = 0; Oe < 32; Oe++)
      C[Oe] = je[Oe];
    for (let Oe = 0; Oe < 32; Oe++)
      for (let Ze = 0; Ze < 32; Ze++)
        C[Oe + Ze] += Le[Oe] * I[Ze];
    return z(H.subarray(32), C), H;
  }
  t.sign = ye;
  function K(L, j) {
    const C = s(), h = s(), I = s(), H = s(), ee = s(), je = s(), Le = s();
    return m(L[2], o), w(L[1], j), g(I, L[1]), d(H, I, c), y(I, I, L[2]), x(H, L[2], H), g(ee, H), g(je, ee), d(Le, je, ee), d(C, Le, I), d(C, C, H), N(C, C), d(C, C, I), d(C, C, H), d(C, C, H), d(L[0], C, H), g(h, L[0]), d(h, h, H), v(h, I) && d(L[0], L[0], p), g(h, L[0]), d(h, h, H), v(h, I) ? -1 : (O(L[0]) === j[31] >> 7 && y(L[0], a, L[0]), d(L[3], L[0], L[1]), 0);
  }
  function de(L, j, C) {
    const h = new Uint8Array(32), I = [s(), s(), s(), s()], H = [s(), s(), s(), s()];
    if (C.length !== t.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${t.SIGNATURE_LENGTH} bytes`);
    if (K(H, L))
      return !1;
    const ee = new r.SHA512();
    ee.update(C.subarray(0, 32)), ee.update(L), ee.update(j);
    const je = ee.digest();
    return F(je), k(I, H, je), A(H, C.subarray(32)), D(I, H), Y(h, I), !M(C, h);
  }
  t.verify = de;
  function ne(L) {
    let j = [s(), s(), s(), s()];
    if (K(j, L))
      throw new Error("Ed25519: invalid public key");
    let C = s(), h = s(), I = j[1];
    x(C, o, I), y(h, o, I), P(h, h), d(C, C, h);
    let H = new Uint8Array(32);
    return T(H, C), H;
  }
  t.convertPublicKeyToX25519 = ne;
  function le(L) {
    const j = (0, r.hash)(L.subarray(0, 32));
    j[0] &= 248, j[31] &= 127, j[31] |= 64;
    const C = new Uint8Array(j.subarray(0, 32));
    return (0, n.wipe)(j), C;
  }
  t.convertSecretKeyToX25519 = le;
})(cu);
const Wm = "EdDSA", Bm = "JWT", Rh = ".", Ah = "base64url", Hm = "utf8", Gm = "utf8", Ym = ":", Jm = "did", Xm = "key", Rl = "base58btc", Qm = "z", ev = "K36", tv = 32;
function uu(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function jh(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? uu(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function gc(t, e) {
  e || (e = t.reduce((s, i) => s + i.length, 0));
  const r = jh(e);
  let n = 0;
  for (const s of t)
    r.set(s, n), n += s.length;
  return uu(r);
}
function rv(t, e) {
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
  var o = t.length, c = t.charAt(0), u = Math.log(o) / Math.log(256), l = Math.log(256) / Math.log(o);
  function f(b) {
    if (b instanceof Uint8Array || (ArrayBuffer.isView(b) ? b = new Uint8Array(b.buffer, b.byteOffset, b.byteLength) : Array.isArray(b) && (b = Uint8Array.from(b))), !(b instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (b.length === 0)
      return "";
    for (var E = 0, T = 0, M = 0, v = b.length; M !== v && b[M] === 0; )
      M++, E++;
    for (var O = (v - M) * l + 1 >>> 0, w = new Uint8Array(O); M !== v; ) {
      for (var x = b[M], y = 0, d = O - 1; (x !== 0 || y < T) && d !== -1; d--, y++)
        x += 256 * w[d] >>> 0, w[d] = x % o >>> 0, x = x / o >>> 0;
      if (x !== 0)
        throw new Error("Non-zero carry");
      T = y, M++;
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
      for (var T = 0, M = 0; b[E] === c; )
        T++, E++;
      for (var v = (b.length - E) * u + 1 >>> 0, O = new Uint8Array(v); b[E]; ) {
        var w = r[b.charCodeAt(E)];
        if (w === 255)
          return;
        for (var x = 0, y = v - 1; (w !== 0 || x < M) && y !== -1; y--, x++)
          w += o * O[y] >>> 0, O[y] = w % 256 >>> 0, w = w / 256 >>> 0;
        if (w !== 0)
          throw new Error("Non-zero carry");
        M = x, E++;
      }
      if (b[E] !== " ") {
        for (var d = v - M; d !== v && O[d] === 0; )
          d++;
        for (var g = new Uint8Array(T + (v - d)), P = T; d !== v; )
          g[P++] = O[d++];
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
var nv = rv, sv = nv;
const iv = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, ov = (t) => new TextEncoder().encode(t), av = (t) => new TextDecoder().decode(t);
class cv {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class uv {
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
    return Lh(this, e);
  }
}
class lv {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Lh(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Lh = (t, e) => new lv({
  ...t.decoders || { [t.prefix]: t },
  ...e.decoders || { [e.prefix]: e }
});
class dv {
  constructor(e, r, n, s) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = s, this.encoder = new cv(e, r, n), this.decoder = new uv(e, r, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const wa = ({ name: t, prefix: e, encode: r, decode: n }) => new dv(t, e, r, n), Qi = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: s } = sv(r, e);
  return wa({
    prefix: t,
    name: e,
    encode: n,
    decode: (i) => iv(s(i))
  });
}, hv = (t, e, r, n) => {
  const s = {};
  for (let l = 0; l < e.length; ++l)
    s[e[l]] = l;
  let i = t.length;
  for (; t[i - 1] === "="; )
    --i;
  const a = new Uint8Array(i * r / 8 | 0);
  let o = 0, c = 0, u = 0;
  for (let l = 0; l < i; ++l) {
    const f = s[t[l]];
    if (f === void 0)
      throw new SyntaxError(`Non-${n} character`);
    c = c << r | f, o += r, o >= 8 && (o -= 8, a[u++] = 255 & c >> o);
  }
  if (o >= r || 255 & c << 8 - o)
    throw new SyntaxError("Unexpected end of data");
  return a;
}, fv = (t, e, r) => {
  const n = e[e.length - 1] === "=", s = (1 << r) - 1;
  let i = "", a = 0, o = 0;
  for (let c = 0; c < t.length; ++c)
    for (o = o << 8 | t[c], a += 8; a > r; )
      a -= r, i += e[s & o >> a];
  if (a && (i += e[s & o << r - a]), n)
    for (; i.length * r & 7; )
      i += "=";
  return i;
}, zt = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => wa({
  prefix: e,
  name: t,
  encode(s) {
    return fv(s, n, r);
  },
  decode(s) {
    return hv(s, n, r, t);
  }
}), pv = wa({
  prefix: "\0",
  name: "identity",
  encode: (t) => av(t),
  decode: (t) => ov(t)
}), gv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: pv
}, Symbol.toStringTag, { value: "Module" })), yv = zt({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), mv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: yv
}, Symbol.toStringTag, { value: "Module" })), vv = zt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), _v = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: vv
}, Symbol.toStringTag, { value: "Module" })), bv = Qi({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), wv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: bv
}, Symbol.toStringTag, { value: "Module" })), Ev = zt({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), Sv = zt({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), xv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: Ev,
  base16upper: Sv
}, Symbol.toStringTag, { value: "Module" })), Iv = zt({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), Ov = zt({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), Tv = zt({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), kv = zt({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), Cv = zt({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), Pv = zt({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), Nv = zt({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), Rv = zt({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), Av = zt({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), jv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: Iv,
  base32hex: Cv,
  base32hexpad: Nv,
  base32hexpadupper: Rv,
  base32hexupper: Pv,
  base32pad: Tv,
  base32padupper: kv,
  base32upper: Ov,
  base32z: Av
}, Symbol.toStringTag, { value: "Module" })), Lv = Qi({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), Mv = Qi({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), Dv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: Lv,
  base36upper: Mv
}, Symbol.toStringTag, { value: "Module" })), Uv = Qi({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), zv = Qi({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), $v = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: Uv,
  base58flickr: zv
}, Symbol.toStringTag, { value: "Module" })), Vv = zt({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), qv = zt({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), Zv = zt({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), Fv = zt({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), Kv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: Vv,
  base64pad: qv,
  base64url: Zv,
  base64urlpad: Fv
}, Symbol.toStringTag, { value: "Module" })), Mh = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Wv = Mh.reduce((t, e, r) => (t[r] = e, t), []), Bv = Mh.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function Hv(t) {
  return t.reduce((e, r) => (e += Wv[r], e), "");
}
function Gv(t) {
  const e = [];
  for (const r of t) {
    const n = Bv[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const Yv = wa({
  prefix: "🚀",
  name: "base256emoji",
  encode: Hv,
  decode: Gv
}), Jv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: Yv
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const Al = {
  ...gv,
  ...mv,
  ..._v,
  ...wv,
  ...xv,
  ...jv,
  ...Dv,
  ...$v,
  ...Kv,
  ...Jv
};
function Dh(t, e, r, n) {
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
const jl = Dh("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), Za = Dh("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = jh(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), Uh = {
  utf8: jl,
  "utf-8": jl,
  hex: Al.base16,
  latin1: Za,
  ascii: Za,
  binary: Za,
  ...Al
};
function nr(t, e = "utf8") {
  const r = Uh[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : r.encoder.encode(t).substring(1);
}
function ur(t, e = "utf8") {
  const r = Uh[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? uu(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
function Uo(t) {
  return nr(ur(Xi(t), Hm), Ah);
}
function zh(t) {
  const e = ur(ev, Rl), r = Qm + nr(gc([e, t]), Rl);
  return [Jm, Xm, r].join(Ym);
}
function Xv(t) {
  return nr(t, Ah);
}
function Qv(t) {
  return ur([Uo(t.header), Uo(t.payload)].join(Rh), Gm);
}
function e_(t) {
  return [
    Uo(t.header),
    Uo(t.payload),
    Xv(t.signature)
  ].join(Rh);
}
function Ll(t = Fs.randomBytes(tv)) {
  return cu.generateKeyPairFromSeed(t);
}
async function t_(t, e, r, n, s = ae.fromMiliseconds(Date.now())) {
  const i = { alg: Wm, typ: Bm }, a = zh(n.publicKey), o = s + r, c = { iss: a, sub: t, aud: e, iat: s, exp: o }, u = Qv({ header: i, payload: c }), l = cu.sign(n.secretKey, u);
  return e_({ header: i, payload: c, signature: l });
}
var lu = {}, Ea = {};
Object.defineProperty(Ea, "__esModule", { value: !0 });
var Zt = Se, yc = mr, r_ = 20;
function n_(t, e, r) {
  for (var n = 1634760805, s = 857760878, i = 2036477234, a = 1797285236, o = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], c = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], u = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], l = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], f = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], p = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], m = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], b = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], E = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], T = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], M = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], v = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], O = n, w = s, x = i, y = a, d = o, g = c, P = u, N = l, D = f, G = p, Y = m, k = b, A = E, Q = T, Z = M, $ = v, q = 0; q < r_; q += 2)
    O = O + d | 0, A ^= O, A = A >>> 16 | A << 16, D = D + A | 0, d ^= D, d = d >>> 20 | d << 12, w = w + g | 0, Q ^= w, Q = Q >>> 16 | Q << 16, G = G + Q | 0, g ^= G, g = g >>> 20 | g << 12, x = x + P | 0, Z ^= x, Z = Z >>> 16 | Z << 16, Y = Y + Z | 0, P ^= Y, P = P >>> 20 | P << 12, y = y + N | 0, $ ^= y, $ = $ >>> 16 | $ << 16, k = k + $ | 0, N ^= k, N = N >>> 20 | N << 12, x = x + P | 0, Z ^= x, Z = Z >>> 24 | Z << 8, Y = Y + Z | 0, P ^= Y, P = P >>> 25 | P << 7, y = y + N | 0, $ ^= y, $ = $ >>> 24 | $ << 8, k = k + $ | 0, N ^= k, N = N >>> 25 | N << 7, w = w + g | 0, Q ^= w, Q = Q >>> 24 | Q << 8, G = G + Q | 0, g ^= G, g = g >>> 25 | g << 7, O = O + d | 0, A ^= O, A = A >>> 24 | A << 8, D = D + A | 0, d ^= D, d = d >>> 25 | d << 7, O = O + g | 0, $ ^= O, $ = $ >>> 16 | $ << 16, Y = Y + $ | 0, g ^= Y, g = g >>> 20 | g << 12, w = w + P | 0, A ^= w, A = A >>> 16 | A << 16, k = k + A | 0, P ^= k, P = P >>> 20 | P << 12, x = x + N | 0, Q ^= x, Q = Q >>> 16 | Q << 16, D = D + Q | 0, N ^= D, N = N >>> 20 | N << 12, y = y + d | 0, Z ^= y, Z = Z >>> 16 | Z << 16, G = G + Z | 0, d ^= G, d = d >>> 20 | d << 12, x = x + N | 0, Q ^= x, Q = Q >>> 24 | Q << 8, D = D + Q | 0, N ^= D, N = N >>> 25 | N << 7, y = y + d | 0, Z ^= y, Z = Z >>> 24 | Z << 8, G = G + Z | 0, d ^= G, d = d >>> 25 | d << 7, w = w + P | 0, A ^= w, A = A >>> 24 | A << 8, k = k + A | 0, P ^= k, P = P >>> 25 | P << 7, O = O + g | 0, $ ^= O, $ = $ >>> 24 | $ << 8, Y = Y + $ | 0, g ^= Y, g = g >>> 25 | g << 7;
  Zt.writeUint32LE(O + n | 0, t, 0), Zt.writeUint32LE(w + s | 0, t, 4), Zt.writeUint32LE(x + i | 0, t, 8), Zt.writeUint32LE(y + a | 0, t, 12), Zt.writeUint32LE(d + o | 0, t, 16), Zt.writeUint32LE(g + c | 0, t, 20), Zt.writeUint32LE(P + u | 0, t, 24), Zt.writeUint32LE(N + l | 0, t, 28), Zt.writeUint32LE(D + f | 0, t, 32), Zt.writeUint32LE(G + p | 0, t, 36), Zt.writeUint32LE(Y + m | 0, t, 40), Zt.writeUint32LE(k + b | 0, t, 44), Zt.writeUint32LE(A + E | 0, t, 48), Zt.writeUint32LE(Q + T | 0, t, 52), Zt.writeUint32LE(Z + M | 0, t, 56), Zt.writeUint32LE($ + v | 0, t, 60);
}
function $h(t, e, r, n, s) {
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
    n_(o, i, t);
    for (var u = c; u < c + 64 && u < r.length; u++)
      n[u] = r[u] ^ o[u - c];
    i_(i, 0, a);
  }
  return yc.wipe(o), s === 0 && yc.wipe(i), n;
}
Ea.streamXOR = $h;
function s_(t, e, r, n) {
  return n === void 0 && (n = 0), yc.wipe(r), $h(t, e, r, r, n);
}
Ea.stream = s_;
function i_(t, e, r) {
  for (var n = 1; r--; )
    n = n + (t[e] & 255) | 0, t[e] = n & 255, n >>>= 8, e++;
  if (n > 0)
    throw new Error("ChaCha: counter overflow");
}
var Vh = {}, Un = {};
Object.defineProperty(Un, "__esModule", { value: !0 });
function o_(t, e, r) {
  return ~(t - 1) & e | t - 1 & r;
}
Un.select = o_;
function a_(t, e) {
  return (t | 0) - (e | 0) - 1 >>> 31 & 1;
}
Un.lessOrEqual = a_;
function qh(t, e) {
  if (t.length !== e.length)
    return 0;
  for (var r = 0, n = 0; n < t.length; n++)
    r |= t[n] ^ e[n];
  return 1 & r - 1 >>> 8;
}
Un.compare = qh;
function c_(t, e) {
  return t.length === 0 || e.length === 0 ? !1 : qh(t, e) !== 0;
}
Un.equal = c_;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Un, r = mr;
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
        var l = o[4] | o[5] << 8;
        this._r[2] = (u >>> 10 | l << 6) & 7939;
        var f = o[6] | o[7] << 8;
        this._r[3] = (l >>> 7 | f << 9) & 8191;
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
        for (var l = this._fin ? 0 : 2048, f = this._h[0], p = this._h[1], m = this._h[2], b = this._h[3], E = this._h[4], T = this._h[5], M = this._h[6], v = this._h[7], O = this._h[8], w = this._h[9], x = this._r[0], y = this._r[1], d = this._r[2], g = this._r[3], P = this._r[4], N = this._r[5], D = this._r[6], G = this._r[7], Y = this._r[8], k = this._r[9]; u >= 16; ) {
          var A = o[c + 0] | o[c + 1] << 8;
          f += A & 8191;
          var Q = o[c + 2] | o[c + 3] << 8;
          p += (A >>> 13 | Q << 3) & 8191;
          var Z = o[c + 4] | o[c + 5] << 8;
          m += (Q >>> 10 | Z << 6) & 8191;
          var $ = o[c + 6] | o[c + 7] << 8;
          b += (Z >>> 7 | $ << 9) & 8191;
          var q = o[c + 8] | o[c + 9] << 8;
          E += ($ >>> 4 | q << 12) & 8191, T += q >>> 1 & 8191;
          var z = o[c + 10] | o[c + 11] << 8;
          M += (q >>> 14 | z << 2) & 8191;
          var F = o[c + 12] | o[c + 13] << 8;
          v += (z >>> 11 | F << 5) & 8191;
          var ye = o[c + 14] | o[c + 15] << 8;
          O += (F >>> 8 | ye << 8) & 8191, w += ye >>> 5 | l;
          var K = 0, de = K;
          de += f * x, de += p * (5 * k), de += m * (5 * Y), de += b * (5 * G), de += E * (5 * D), K = de >>> 13, de &= 8191, de += T * (5 * N), de += M * (5 * P), de += v * (5 * g), de += O * (5 * d), de += w * (5 * y), K += de >>> 13, de &= 8191;
          var ne = K;
          ne += f * y, ne += p * x, ne += m * (5 * k), ne += b * (5 * Y), ne += E * (5 * G), K = ne >>> 13, ne &= 8191, ne += T * (5 * D), ne += M * (5 * N), ne += v * (5 * P), ne += O * (5 * g), ne += w * (5 * d), K += ne >>> 13, ne &= 8191;
          var le = K;
          le += f * d, le += p * y, le += m * x, le += b * (5 * k), le += E * (5 * Y), K = le >>> 13, le &= 8191, le += T * (5 * G), le += M * (5 * D), le += v * (5 * N), le += O * (5 * P), le += w * (5 * g), K += le >>> 13, le &= 8191;
          var L = K;
          L += f * g, L += p * d, L += m * y, L += b * x, L += E * (5 * k), K = L >>> 13, L &= 8191, L += T * (5 * Y), L += M * (5 * G), L += v * (5 * D), L += O * (5 * N), L += w * (5 * P), K += L >>> 13, L &= 8191;
          var j = K;
          j += f * P, j += p * g, j += m * d, j += b * y, j += E * x, K = j >>> 13, j &= 8191, j += T * (5 * k), j += M * (5 * Y), j += v * (5 * G), j += O * (5 * D), j += w * (5 * N), K += j >>> 13, j &= 8191;
          var C = K;
          C += f * N, C += p * P, C += m * g, C += b * d, C += E * y, K = C >>> 13, C &= 8191, C += T * x, C += M * (5 * k), C += v * (5 * Y), C += O * (5 * G), C += w * (5 * D), K += C >>> 13, C &= 8191;
          var h = K;
          h += f * D, h += p * N, h += m * P, h += b * g, h += E * d, K = h >>> 13, h &= 8191, h += T * y, h += M * x, h += v * (5 * k), h += O * (5 * Y), h += w * (5 * G), K += h >>> 13, h &= 8191;
          var I = K;
          I += f * G, I += p * D, I += m * N, I += b * P, I += E * g, K = I >>> 13, I &= 8191, I += T * d, I += M * y, I += v * x, I += O * (5 * k), I += w * (5 * Y), K += I >>> 13, I &= 8191;
          var H = K;
          H += f * Y, H += p * G, H += m * D, H += b * N, H += E * P, K = H >>> 13, H &= 8191, H += T * g, H += M * d, H += v * y, H += O * x, H += w * (5 * k), K += H >>> 13, H &= 8191;
          var ee = K;
          ee += f * k, ee += p * Y, ee += m * G, ee += b * D, ee += E * N, K = ee >>> 13, ee &= 8191, ee += T * P, ee += M * g, ee += v * d, ee += O * y, ee += w * x, K += ee >>> 13, ee &= 8191, K = (K << 2) + K | 0, K = K + de | 0, de = K & 8191, K = K >>> 13, ne += K, f = de, p = ne, m = le, b = L, E = j, T = C, M = h, v = I, O = H, w = ee, c += 16, u -= 16;
        }
        this._h[0] = f, this._h[1] = p, this._h[2] = m, this._h[3] = b, this._h[4] = E, this._h[5] = T, this._h[6] = M, this._h[7] = v, this._h[8] = O, this._h[9] = w;
      }, a.prototype.finish = function(o, c) {
        c === void 0 && (c = 0);
        var u = new Uint16Array(10), l, f, p, m;
        if (this._leftover) {
          for (m = this._leftover, this._buffer[m++] = 1; m < 16; m++)
            this._buffer[m] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (l = this._h[1] >>> 13, this._h[1] &= 8191, m = 2; m < 10; m++)
          this._h[m] += l, l = this._h[m] >>> 13, this._h[m] &= 8191;
        for (this._h[0] += l * 5, l = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += l, l = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += l, u[0] = this._h[0] + 5, l = u[0] >>> 13, u[0] &= 8191, m = 1; m < 10; m++)
          u[m] = this._h[m] + l, l = u[m] >>> 13, u[m] &= 8191;
        for (u[9] -= 8192, f = (l ^ 1) - 1, m = 0; m < 10; m++)
          u[m] &= f;
        for (f = ~f, m = 0; m < 10; m++)
          this._h[m] = this._h[m] & f | u[m];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, p = this._h[0] + this._pad[0], this._h[0] = p & 65535, m = 1; m < 8; m++)
          p = (this._h[m] + this._pad[m] | 0) + (p >>> 16) | 0, this._h[m] = p & 65535;
        return o[c + 0] = this._h[0] >>> 0, o[c + 1] = this._h[0] >>> 8, o[c + 2] = this._h[1] >>> 0, o[c + 3] = this._h[1] >>> 8, o[c + 4] = this._h[2] >>> 0, o[c + 5] = this._h[2] >>> 8, o[c + 6] = this._h[3] >>> 0, o[c + 7] = this._h[3] >>> 8, o[c + 8] = this._h[4] >>> 0, o[c + 9] = this._h[4] >>> 8, o[c + 10] = this._h[5] >>> 0, o[c + 11] = this._h[5] >>> 8, o[c + 12] = this._h[6] >>> 0, o[c + 13] = this._h[6] >>> 8, o[c + 14] = this._h[7] >>> 0, o[c + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, a.prototype.update = function(o) {
        var c = 0, u = o.length, l;
        if (this._leftover) {
          l = 16 - this._leftover, l > u && (l = u);
          for (var f = 0; f < l; f++)
            this._buffer[this._leftover + f] = o[c + f];
          if (u -= l, c += l, this._leftover += l, this._leftover < 16)
            return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (u >= 16 && (l = u - u % 16, this._blocks(o, c, l), c += l, u -= l), u) {
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
})(Vh);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Ea, r = Vh, n = mr, s = Se, i = Un;
  t.KEY_LENGTH = 32, t.NONCE_LENGTH = 12, t.TAG_LENGTH = 16;
  var a = new Uint8Array(16), o = (
    /** @class */
    function() {
      function c(u) {
        if (this.nonceLength = t.NONCE_LENGTH, this.tagLength = t.TAG_LENGTH, u.length !== t.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(u);
      }
      return c.prototype.seal = function(u, l, f, p) {
        if (u.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var m = new Uint8Array(16);
        m.set(u, m.length - u.length);
        var b = new Uint8Array(32);
        e.stream(this._key, m, b, 4);
        var E = l.length + this.tagLength, T;
        if (p) {
          if (p.length !== E)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          T = p;
        } else
          T = new Uint8Array(E);
        return e.streamXOR(this._key, m, l, T, 4), this._authenticate(T.subarray(T.length - this.tagLength, T.length), b, T.subarray(0, T.length - this.tagLength), f), n.wipe(m), T;
      }, c.prototype.open = function(u, l, f, p) {
        if (u.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (l.length < this.tagLength)
          return null;
        var m = new Uint8Array(16);
        m.set(u, m.length - u.length);
        var b = new Uint8Array(32);
        e.stream(this._key, m, b, 4);
        var E = new Uint8Array(this.tagLength);
        if (this._authenticate(E, b, l.subarray(0, l.length - this.tagLength), f), !i.equal(E, l.subarray(l.length - this.tagLength, l.length)))
          return null;
        var T = l.length - this.tagLength, M;
        if (p) {
          if (p.length !== T)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          M = p;
        } else
          M = new Uint8Array(T);
        return e.streamXOR(this._key, m, l.subarray(0, l.length - this.tagLength), M, 4), n.wipe(m), M;
      }, c.prototype.clean = function() {
        return n.wipe(this._key), this;
      }, c.prototype._authenticate = function(u, l, f, p) {
        var m = new r.Poly1305(l);
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
})(lu);
var Zh = {}, eo = {}, du = {};
Object.defineProperty(du, "__esModule", { value: !0 });
function u_(t) {
  return typeof t.saveState < "u" && typeof t.restoreState < "u" && typeof t.cleanSavedState < "u";
}
du.isSerializableHash = u_;
Object.defineProperty(eo, "__esModule", { value: !0 });
var Kr = du, l_ = Un, d_ = mr, Fh = (
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
      this._outer.update(n), Kr.isSerializableHash(this._inner) && Kr.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), d_.wipe(n);
    }
    return t.prototype.reset = function() {
      if (!Kr.isSerializableHash(this._inner) || !Kr.isSerializableHash(this._outer))
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.clean = function() {
      Kr.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), Kr.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
    }, t.prototype.update = function(e) {
      return this._inner.update(e), this;
    }, t.prototype.finish = function(e) {
      return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0, this);
    }, t.prototype.digest = function() {
      var e = new Uint8Array(this.digestLength);
      return this.finish(e), e;
    }, t.prototype.saveState = function() {
      if (!Kr.isSerializableHash(this._inner))
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      return this._inner.saveState();
    }, t.prototype.restoreState = function(e) {
      if (!Kr.isSerializableHash(this._inner) || !Kr.isSerializableHash(this._outer))
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.cleanSavedState = function(e) {
      if (!Kr.isSerializableHash(this._inner))
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      this._inner.cleanSavedState(e);
    }, t;
  }()
);
eo.HMAC = Fh;
function h_(t, e, r) {
  var n = new Fh(t, e);
  n.update(r);
  var s = n.digest();
  return n.clean(), s;
}
eo.hmac = h_;
eo.equal = l_.equal;
Object.defineProperty(Zh, "__esModule", { value: !0 });
var Ml = eo, Dl = mr, f_ = (
  /** @class */
  function() {
    function t(e, r, n, s) {
      n === void 0 && (n = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = s;
      var i = Ml.hmac(this._hash, n, r);
      this._hmac = new Ml.HMAC(e, i), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
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
      this._hmac.clean(), Dl.wipe(this._buffer), Dl.wipe(this._counter), this._bufpos = 0;
    }, t;
  }()
), p_ = Zh.HKDF = f_, Sa = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Se, r = mr;
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
        var l = 0;
        if (this._bytesHashed += u, this._bufferLength > 0) {
          for (; this._bufferLength < this.blockSize && u > 0; )
            this._buffer[this._bufferLength++] = c[l++], u--;
          this._bufferLength === this.blockSize && (i(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (u >= this.blockSize && (l = i(this._temp, this._state, c, l, u), u %= this.blockSize); u > 0; )
          this._buffer[this._bufferLength++] = c[l++], u--;
        return this;
      }, o.prototype.finish = function(c) {
        if (!this._finished) {
          var u = this._bytesHashed, l = this._bufferLength, f = u / 536870912 | 0, p = u << 3, m = u % 64 < 56 ? 64 : 128;
          this._buffer[l] = 128;
          for (var b = l + 1; b < m - 8; b++)
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
  function i(o, c, u, l, f) {
    for (; f >= 64; ) {
      for (var p = c[0], m = c[1], b = c[2], E = c[3], T = c[4], M = c[5], v = c[6], O = c[7], w = 0; w < 16; w++) {
        var x = l + w * 4;
        o[w] = e.readUint32BE(u, x);
      }
      for (var w = 16; w < 64; w++) {
        var y = o[w - 2], d = (y >>> 17 | y << 15) ^ (y >>> 19 | y << 13) ^ y >>> 10;
        y = o[w - 15];
        var g = (y >>> 7 | y << 25) ^ (y >>> 18 | y << 14) ^ y >>> 3;
        o[w] = (d + o[w - 7] | 0) + (g + o[w - 16] | 0);
      }
      for (var w = 0; w < 64; w++) {
        var d = (((T >>> 6 | T << 26) ^ (T >>> 11 | T << 21) ^ (T >>> 25 | T << 7)) + (T & M ^ ~T & v) | 0) + (O + (s[w] + o[w] | 0) | 0) | 0, g = ((p >>> 2 | p << 30) ^ (p >>> 13 | p << 19) ^ (p >>> 22 | p << 10)) + (p & m ^ p & b ^ m & b) | 0;
        O = v, v = M, M = T, T = E + d | 0, E = b, b = m, m = p, p = d + g | 0;
      }
      c[0] += p, c[1] += m, c[2] += b, c[3] += E, c[4] += T, c[5] += M, c[6] += v, c[7] += O, l += 64, f -= 64;
    }
    return l;
  }
  function a(o) {
    var c = new n();
    c.update(o);
    var u = c.digest();
    return c.clean(), u;
  }
  t.hash = a;
})(Sa);
var hu = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.sharedKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.scalarMultBase = t.scalarMult = t.SHARED_KEY_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = void 0;
  const e = Fs, r = mr;
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
      let d = w[y] + x + 65535;
      x = Math.floor(d / 65536), w[y] = d - x * 65536;
    }
    w[0] += x - 1 + 37 * (x - 1);
  }
  function o(w, x, y) {
    const d = ~(y - 1);
    for (let g = 0; g < 16; g++) {
      const P = d & (w[g] ^ x[g]);
      w[g] ^= P, x[g] ^= P;
    }
  }
  function c(w, x) {
    const y = n(), d = n();
    for (let g = 0; g < 16; g++)
      d[g] = x[g];
    a(d), a(d), a(d);
    for (let g = 0; g < 2; g++) {
      y[0] = d[0] - 65517;
      for (let N = 1; N < 15; N++)
        y[N] = d[N] - 65535 - (y[N - 1] >> 16 & 1), y[N - 1] &= 65535;
      y[15] = d[15] - 32767 - (y[14] >> 16 & 1);
      const P = y[15] >> 16 & 1;
      y[14] &= 65535, o(d, y, 1 - P);
    }
    for (let g = 0; g < 16; g++)
      w[2 * g] = d[g] & 255, w[2 * g + 1] = d[g] >> 8;
  }
  function u(w, x) {
    for (let y = 0; y < 16; y++)
      w[y] = x[2 * y] + (x[2 * y + 1] << 8);
    w[15] &= 32767;
  }
  function l(w, x, y) {
    for (let d = 0; d < 16; d++)
      w[d] = x[d] + y[d];
  }
  function f(w, x, y) {
    for (let d = 0; d < 16; d++)
      w[d] = x[d] - y[d];
  }
  function p(w, x, y) {
    let d, g, P = 0, N = 0, D = 0, G = 0, Y = 0, k = 0, A = 0, Q = 0, Z = 0, $ = 0, q = 0, z = 0, F = 0, ye = 0, K = 0, de = 0, ne = 0, le = 0, L = 0, j = 0, C = 0, h = 0, I = 0, H = 0, ee = 0, je = 0, Le = 0, Oe = 0, Ze = 0, at = 0, tt = 0, Ve = y[0], Ue = y[1], Te = y[2], Pe = y[3], ke = y[4], we = y[5], _e = y[6], he = y[7], Ne = y[8], Me = y[9], me = y[10], ze = y[11], Fe = y[12], He = y[13], Ge = y[14], We = y[15];
    d = x[0], P += d * Ve, N += d * Ue, D += d * Te, G += d * Pe, Y += d * ke, k += d * we, A += d * _e, Q += d * he, Z += d * Ne, $ += d * Me, q += d * me, z += d * ze, F += d * Fe, ye += d * He, K += d * Ge, de += d * We, d = x[1], N += d * Ve, D += d * Ue, G += d * Te, Y += d * Pe, k += d * ke, A += d * we, Q += d * _e, Z += d * he, $ += d * Ne, q += d * Me, z += d * me, F += d * ze, ye += d * Fe, K += d * He, de += d * Ge, ne += d * We, d = x[2], D += d * Ve, G += d * Ue, Y += d * Te, k += d * Pe, A += d * ke, Q += d * we, Z += d * _e, $ += d * he, q += d * Ne, z += d * Me, F += d * me, ye += d * ze, K += d * Fe, de += d * He, ne += d * Ge, le += d * We, d = x[3], G += d * Ve, Y += d * Ue, k += d * Te, A += d * Pe, Q += d * ke, Z += d * we, $ += d * _e, q += d * he, z += d * Ne, F += d * Me, ye += d * me, K += d * ze, de += d * Fe, ne += d * He, le += d * Ge, L += d * We, d = x[4], Y += d * Ve, k += d * Ue, A += d * Te, Q += d * Pe, Z += d * ke, $ += d * we, q += d * _e, z += d * he, F += d * Ne, ye += d * Me, K += d * me, de += d * ze, ne += d * Fe, le += d * He, L += d * Ge, j += d * We, d = x[5], k += d * Ve, A += d * Ue, Q += d * Te, Z += d * Pe, $ += d * ke, q += d * we, z += d * _e, F += d * he, ye += d * Ne, K += d * Me, de += d * me, ne += d * ze, le += d * Fe, L += d * He, j += d * Ge, C += d * We, d = x[6], A += d * Ve, Q += d * Ue, Z += d * Te, $ += d * Pe, q += d * ke, z += d * we, F += d * _e, ye += d * he, K += d * Ne, de += d * Me, ne += d * me, le += d * ze, L += d * Fe, j += d * He, C += d * Ge, h += d * We, d = x[7], Q += d * Ve, Z += d * Ue, $ += d * Te, q += d * Pe, z += d * ke, F += d * we, ye += d * _e, K += d * he, de += d * Ne, ne += d * Me, le += d * me, L += d * ze, j += d * Fe, C += d * He, h += d * Ge, I += d * We, d = x[8], Z += d * Ve, $ += d * Ue, q += d * Te, z += d * Pe, F += d * ke, ye += d * we, K += d * _e, de += d * he, ne += d * Ne, le += d * Me, L += d * me, j += d * ze, C += d * Fe, h += d * He, I += d * Ge, H += d * We, d = x[9], $ += d * Ve, q += d * Ue, z += d * Te, F += d * Pe, ye += d * ke, K += d * we, de += d * _e, ne += d * he, le += d * Ne, L += d * Me, j += d * me, C += d * ze, h += d * Fe, I += d * He, H += d * Ge, ee += d * We, d = x[10], q += d * Ve, z += d * Ue, F += d * Te, ye += d * Pe, K += d * ke, de += d * we, ne += d * _e, le += d * he, L += d * Ne, j += d * Me, C += d * me, h += d * ze, I += d * Fe, H += d * He, ee += d * Ge, je += d * We, d = x[11], z += d * Ve, F += d * Ue, ye += d * Te, K += d * Pe, de += d * ke, ne += d * we, le += d * _e, L += d * he, j += d * Ne, C += d * Me, h += d * me, I += d * ze, H += d * Fe, ee += d * He, je += d * Ge, Le += d * We, d = x[12], F += d * Ve, ye += d * Ue, K += d * Te, de += d * Pe, ne += d * ke, le += d * we, L += d * _e, j += d * he, C += d * Ne, h += d * Me, I += d * me, H += d * ze, ee += d * Fe, je += d * He, Le += d * Ge, Oe += d * We, d = x[13], ye += d * Ve, K += d * Ue, de += d * Te, ne += d * Pe, le += d * ke, L += d * we, j += d * _e, C += d * he, h += d * Ne, I += d * Me, H += d * me, ee += d * ze, je += d * Fe, Le += d * He, Oe += d * Ge, Ze += d * We, d = x[14], K += d * Ve, de += d * Ue, ne += d * Te, le += d * Pe, L += d * ke, j += d * we, C += d * _e, h += d * he, I += d * Ne, H += d * Me, ee += d * me, je += d * ze, Le += d * Fe, Oe += d * He, Ze += d * Ge, at += d * We, d = x[15], de += d * Ve, ne += d * Ue, le += d * Te, L += d * Pe, j += d * ke, C += d * we, h += d * _e, I += d * he, H += d * Ne, ee += d * Me, je += d * me, Le += d * ze, Oe += d * Fe, Ze += d * He, at += d * Ge, tt += d * We, P += 38 * ne, N += 38 * le, D += 38 * L, G += 38 * j, Y += 38 * C, k += 38 * h, A += 38 * I, Q += 38 * H, Z += 38 * ee, $ += 38 * je, q += 38 * Le, z += 38 * Oe, F += 38 * Ze, ye += 38 * at, K += 38 * tt, g = 1, d = P + g + 65535, g = Math.floor(d / 65536), P = d - g * 65536, d = N + g + 65535, g = Math.floor(d / 65536), N = d - g * 65536, d = D + g + 65535, g = Math.floor(d / 65536), D = d - g * 65536, d = G + g + 65535, g = Math.floor(d / 65536), G = d - g * 65536, d = Y + g + 65535, g = Math.floor(d / 65536), Y = d - g * 65536, d = k + g + 65535, g = Math.floor(d / 65536), k = d - g * 65536, d = A + g + 65535, g = Math.floor(d / 65536), A = d - g * 65536, d = Q + g + 65535, g = Math.floor(d / 65536), Q = d - g * 65536, d = Z + g + 65535, g = Math.floor(d / 65536), Z = d - g * 65536, d = $ + g + 65535, g = Math.floor(d / 65536), $ = d - g * 65536, d = q + g + 65535, g = Math.floor(d / 65536), q = d - g * 65536, d = z + g + 65535, g = Math.floor(d / 65536), z = d - g * 65536, d = F + g + 65535, g = Math.floor(d / 65536), F = d - g * 65536, d = ye + g + 65535, g = Math.floor(d / 65536), ye = d - g * 65536, d = K + g + 65535, g = Math.floor(d / 65536), K = d - g * 65536, d = de + g + 65535, g = Math.floor(d / 65536), de = d - g * 65536, P += g - 1 + 37 * (g - 1), g = 1, d = P + g + 65535, g = Math.floor(d / 65536), P = d - g * 65536, d = N + g + 65535, g = Math.floor(d / 65536), N = d - g * 65536, d = D + g + 65535, g = Math.floor(d / 65536), D = d - g * 65536, d = G + g + 65535, g = Math.floor(d / 65536), G = d - g * 65536, d = Y + g + 65535, g = Math.floor(d / 65536), Y = d - g * 65536, d = k + g + 65535, g = Math.floor(d / 65536), k = d - g * 65536, d = A + g + 65535, g = Math.floor(d / 65536), A = d - g * 65536, d = Q + g + 65535, g = Math.floor(d / 65536), Q = d - g * 65536, d = Z + g + 65535, g = Math.floor(d / 65536), Z = d - g * 65536, d = $ + g + 65535, g = Math.floor(d / 65536), $ = d - g * 65536, d = q + g + 65535, g = Math.floor(d / 65536), q = d - g * 65536, d = z + g + 65535, g = Math.floor(d / 65536), z = d - g * 65536, d = F + g + 65535, g = Math.floor(d / 65536), F = d - g * 65536, d = ye + g + 65535, g = Math.floor(d / 65536), ye = d - g * 65536, d = K + g + 65535, g = Math.floor(d / 65536), K = d - g * 65536, d = de + g + 65535, g = Math.floor(d / 65536), de = d - g * 65536, P += g - 1 + 37 * (g - 1), w[0] = P, w[1] = N, w[2] = D, w[3] = G, w[4] = Y, w[5] = k, w[6] = A, w[7] = Q, w[8] = Z, w[9] = $, w[10] = q, w[11] = z, w[12] = F, w[13] = ye, w[14] = K, w[15] = de;
  }
  function m(w, x) {
    p(w, x, x);
  }
  function b(w, x) {
    const y = n();
    for (let d = 0; d < 16; d++)
      y[d] = x[d];
    for (let d = 253; d >= 0; d--)
      m(y, y), d !== 2 && d !== 4 && p(y, y, x);
    for (let d = 0; d < 16; d++)
      w[d] = y[d];
  }
  function E(w, x) {
    const y = new Uint8Array(32), d = new Float64Array(80), g = n(), P = n(), N = n(), D = n(), G = n(), Y = n();
    for (let Z = 0; Z < 31; Z++)
      y[Z] = w[Z];
    y[31] = w[31] & 127 | 64, y[0] &= 248, u(d, x);
    for (let Z = 0; Z < 16; Z++)
      P[Z] = d[Z];
    g[0] = D[0] = 1;
    for (let Z = 254; Z >= 0; --Z) {
      const $ = y[Z >>> 3] >>> (Z & 7) & 1;
      o(g, P, $), o(N, D, $), l(G, g, N), f(g, g, N), l(N, P, D), f(P, P, D), m(D, G), m(Y, g), p(g, N, g), p(N, P, G), l(G, g, N), f(g, g, N), m(P, g), f(N, D, Y), p(g, N, i), l(g, g, D), p(N, N, g), p(g, D, Y), p(D, P, d), m(P, G), o(g, P, $), o(N, D, $);
    }
    for (let Z = 0; Z < 16; Z++)
      d[Z + 16] = g[Z], d[Z + 32] = N[Z], d[Z + 48] = P[Z], d[Z + 64] = D[Z];
    const k = d.subarray(32), A = d.subarray(16);
    b(k, k), p(A, A, k);
    const Q = new Uint8Array(32);
    return c(Q, A), Q;
  }
  t.scalarMult = E;
  function T(w) {
    return E(w, s);
  }
  t.scalarMultBase = T;
  function M(w) {
    if (w.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);
    const x = new Uint8Array(w);
    return {
      publicKey: T(x),
      secretKey: x
    };
  }
  t.generateKeyPairFromSeed = M;
  function v(w) {
    const x = (0, e.randomBytes)(32, w), y = M(x);
    return (0, r.wipe)(x), y;
  }
  t.generateKeyPair = v;
  function O(w, x, y = !1) {
    if (w.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (x.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const d = E(w, x);
    if (y) {
      let g = 0;
      for (let P = 0; P < d.length; P++)
        g |= d[P];
      if (g === 0)
        throw new Error("X25519: invalid shared key");
    }
    return d;
  }
  t.sharedKey = O;
})(hu);
var Ul = function(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, s = e.length, i; n < s; n++)
      (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return t.concat(i || Array.prototype.slice.call(e));
}, g_ = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, n) {
      this.name = e, this.version = r, this.os = n, this.type = "browser";
    }
    return t;
  }()
), y_ = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return t;
  }()
), m_ = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, n, s) {
      this.name = e, this.version = r, this.os = n, this.bot = s, this.type = "bot-device";
    }
    return t;
  }()
), v_ = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return t;
  }()
), __ = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return t;
  }()
), b_ = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, w_ = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, zl = 3, E_ = [
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
  ["searchbot", b_]
], $l = [
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
function S_(t) {
  return t ? Vl(t) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new __() : typeof navigator < "u" ? Vl(navigator.userAgent) : O_();
}
function x_(t) {
  return t !== "" && E_.reduce(function(e, r) {
    var n = r[0], s = r[1];
    if (e)
      return e;
    var i = s.exec(t);
    return !!i && [n, i];
  }, !1);
}
function Vl(t) {
  var e = x_(t);
  if (!e)
    return null;
  var r = e[0], n = e[1];
  if (r === "searchbot")
    return new v_();
  var s = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
  s ? s.length < zl && (s = Ul(Ul([], s, !0), T_(zl - s.length), !0)) : s = [];
  var i = s.join("."), a = I_(t), o = w_.exec(t);
  return o && o[1] ? new m_(r, i, a, o[1]) : new g_(r, i, a);
}
function I_(t) {
  for (var e = 0, r = $l.length; e < r; e++) {
    var n = $l[e], s = n[0], i = n[1], a = i.exec(t);
    if (a)
      return s;
  }
  return null;
}
function O_() {
  var t = typeof process < "u" && process.version;
  return t ? new y_(process.version.slice(1)) : null;
}
function T_(t) {
  for (var e = [], r = 0; r < t; r++)
    e.push("0");
  return e;
}
var nt = {};
Object.defineProperty(nt, "__esModule", { value: !0 });
nt.getLocalStorage = nt.getLocalStorageOrThrow = nt.getCrypto = nt.getCryptoOrThrow = Kh = nt.getLocation = nt.getLocationOrThrow = pu = nt.getNavigator = nt.getNavigatorOrThrow = fu = nt.getDocument = nt.getDocumentOrThrow = nt.getFromWindowOrThrow = nt.getFromWindow = void 0;
function us(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
nt.getFromWindow = us;
function Ks(t) {
  const e = us(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
nt.getFromWindowOrThrow = Ks;
function k_() {
  return Ks("document");
}
nt.getDocumentOrThrow = k_;
function C_() {
  return us("document");
}
var fu = nt.getDocument = C_;
function P_() {
  return Ks("navigator");
}
nt.getNavigatorOrThrow = P_;
function N_() {
  return us("navigator");
}
var pu = nt.getNavigator = N_;
function R_() {
  return Ks("location");
}
nt.getLocationOrThrow = R_;
function A_() {
  return us("location");
}
var Kh = nt.getLocation = A_;
function j_() {
  return Ks("crypto");
}
nt.getCryptoOrThrow = j_;
function L_() {
  return us("crypto");
}
nt.getCrypto = L_;
function M_() {
  return Ks("localStorage");
}
nt.getLocalStorageOrThrow = M_;
function D_() {
  return us("localStorage");
}
nt.getLocalStorage = D_;
var gu = {};
Object.defineProperty(gu, "__esModule", { value: !0 });
var Wh = gu.getWindowMetadata = void 0;
const ql = nt;
function U_() {
  let t, e;
  try {
    t = ql.getDocumentOrThrow(), e = ql.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const l = t.getElementsByTagName("link"), f = [];
    for (let p = 0; p < l.length; p++) {
      const m = l[p], b = m.getAttribute("rel");
      if (b && b.toLowerCase().indexOf("icon") > -1) {
        const E = m.getAttribute("href");
        if (E)
          if (E.toLowerCase().indexOf("https:") === -1 && E.toLowerCase().indexOf("http:") === -1 && E.indexOf("//") !== 0) {
            let T = e.protocol + "//" + e.host;
            if (E.indexOf("/") === 0)
              T += E;
            else {
              const M = e.pathname.split("/");
              M.pop();
              const v = M.join("/");
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
  function n(...l) {
    const f = t.getElementsByTagName("meta");
    for (let p = 0; p < f.length; p++) {
      const m = f[p], b = ["itemprop", "property", "name"].map((E) => m.getAttribute(E)).filter((E) => E ? l.includes(E) : !1);
      if (b.length && b) {
        const E = m.getAttribute("content");
        if (E)
          return E;
      }
    }
    return "";
  }
  function s() {
    let l = n("name", "og:site_name", "og:title", "twitter:title");
    return l || (l = t.title), l;
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
Wh = gu.getWindowMetadata = U_;
var gi = {}, z_ = (t) => encodeURIComponent(t).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), Bh = "%[a-f0-9]{2}", Zl = new RegExp("(" + Bh + ")|([^%]+?)", "gi"), Fl = new RegExp("(" + Bh + ")+", "gi");
function mc(t, e) {
  try {
    return [decodeURIComponent(t.join(""))];
  } catch {
  }
  if (t.length === 1)
    return t;
  e = e || 1;
  var r = t.slice(0, e), n = t.slice(e);
  return Array.prototype.concat.call([], mc(r), mc(n));
}
function $_(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    for (var e = t.match(Zl) || [], r = 1; r < e.length; r++)
      t = mc(e, r).join(""), e = t.match(Zl) || [];
    return t;
  }
}
function V_(t) {
  for (var e = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = Fl.exec(t); r; ) {
    try {
      e[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var n = $_(r[0]);
      n !== r[0] && (e[r[0]] = n);
    }
    r = Fl.exec(t);
  }
  e["%C2"] = "�";
  for (var s = Object.keys(e), i = 0; i < s.length; i++) {
    var a = s[i];
    t = t.replace(new RegExp(a, "g"), e[a]);
  }
  return t;
}
var q_ = function(t) {
  if (typeof t != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
  try {
    return t = t.replace(/\+/g, " "), decodeURIComponent(t);
  } catch {
    return V_(t);
  }
}, Z_ = (t, e) => {
  if (!(typeof t == "string" && typeof e == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "")
    return [t];
  const r = t.indexOf(e);
  return r === -1 ? [t] : [
    t.slice(0, r),
    t.slice(r + e.length)
  ];
}, F_ = function(t, e) {
  for (var r = {}, n = Object.keys(t), s = Array.isArray(e), i = 0; i < n.length; i++) {
    var a = n[i], o = t[a];
    (s ? e.indexOf(a) !== -1 : e(a, o, t)) && (r[a] = o);
  }
  return r;
};
(function(t) {
  const e = z_, r = q_, n = Z_, s = F_, i = (v) => v == null, a = Symbol("encodeFragmentIdentifier");
  function o(v) {
    switch (v.arrayFormat) {
      case "index":
        return (O) => (w, x) => {
          const y = w.length;
          return x === void 0 || v.skipNull && x === null || v.skipEmptyString && x === "" ? w : x === null ? [...w, [l(O, v), "[", y, "]"].join("")] : [
            ...w,
            [l(O, v), "[", l(y, v), "]=", l(x, v)].join("")
          ];
        };
      case "bracket":
        return (O) => (w, x) => x === void 0 || v.skipNull && x === null || v.skipEmptyString && x === "" ? w : x === null ? [...w, [l(O, v), "[]"].join("")] : [...w, [l(O, v), "[]=", l(x, v)].join("")];
      case "colon-list-separator":
        return (O) => (w, x) => x === void 0 || v.skipNull && x === null || v.skipEmptyString && x === "" ? w : x === null ? [...w, [l(O, v), ":list="].join("")] : [...w, [l(O, v), ":list=", l(x, v)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const O = v.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (w) => (x, y) => y === void 0 || v.skipNull && y === null || v.skipEmptyString && y === "" ? x : (y = y === null ? "" : y, x.length === 0 ? [[l(w, v), O, l(y, v)].join("")] : [[x, l(y, v)].join(v.arrayFormatSeparator)]);
      }
      default:
        return (O) => (w, x) => x === void 0 || v.skipNull && x === null || v.skipEmptyString && x === "" ? w : x === null ? [...w, l(O, v)] : [...w, [l(O, v), "=", l(x, v)].join("")];
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
          const d = typeof x == "string" && x.includes(v.arrayFormatSeparator), g = typeof x == "string" && !d && f(x, v).includes(v.arrayFormatSeparator);
          x = g ? f(x, v) : x;
          const P = d || g ? x.split(v.arrayFormatSeparator).map((N) => f(N, v)) : x === null ? x : f(x, v);
          y[w] = P;
        };
      case "bracket-separator":
        return (w, x, y) => {
          const d = /(\[\])$/.test(w);
          if (w = w.replace(/\[\]$/, ""), !d) {
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
  function l(v, O) {
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
  function M(v, O) {
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
      let [d, g] = n(O.decode ? y.replace(/\+/g, " ") : y, "=");
      g = g === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(O.arrayFormat) ? g : f(g, O), w(f(d, O), g, x);
    }
    for (const y of Object.keys(x)) {
      const d = x[y];
      if (typeof d == "object" && d !== null)
        for (const g of Object.keys(d))
          d[g] = T(d[g], O);
      else
        x[y] = T(d, O);
    }
    return O.sort === !1 ? x : (O.sort === !0 ? Object.keys(x).sort() : Object.keys(x).sort(O.sort)).reduce((y, d) => {
      const g = x[d];
      return g && typeof g == "object" && !Array.isArray(g) ? y[d] = p(g) : y[d] = g, y;
    }, /* @__PURE__ */ Object.create(null));
  }
  t.extract = E, t.parse = M, t.stringify = (v, O) => {
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
    const d = Object.keys(y);
    return O.sort !== !1 && d.sort(O.sort), d.map((g) => {
      const P = v[g];
      return P === void 0 ? "" : P === null ? l(g, O) : Array.isArray(P) ? P.length === 0 && O.arrayFormat === "bracket-separator" ? l(g, O) + "[]" : P.reduce(x(g), []).join("&") : l(g, O) + "=" + l(P, O);
    }).filter((g) => g.length > 0).join("&");
  }, t.parseUrl = (v, O) => {
    O = Object.assign({
      decode: !0
    }, O);
    const [w, x] = n(v, "#");
    return Object.assign(
      {
        url: w.split("?")[0] || "",
        query: M(E(v), O)
      },
      O && O.parseFragmentIdentifier && x ? { fragmentIdentifier: f(x, O) } : {}
    );
  }, t.stringifyUrl = (v, O) => {
    O = Object.assign({
      encode: !0,
      strict: !0,
      [a]: !0
    }, O);
    const w = m(v.url).split("?")[0] || "", x = t.extract(v.url), y = t.parse(x, { sort: !1 }), d = Object.assign(y, v.query);
    let g = t.stringify(d, O);
    g && (g = `?${g}`);
    let P = b(v.url);
    return v.fragmentIdentifier && (P = `#${O[a] ? l(v.fragmentIdentifier, O) : v.fragmentIdentifier}`), `${w}${g}${P}`;
  }, t.pick = (v, O, w) => {
    w = Object.assign({
      parseFragmentIdentifier: !0,
      [a]: !1
    }, w);
    const { url: x, query: y, fragmentIdentifier: d } = t.parseUrl(v, w);
    return t.stringifyUrl({
      url: x,
      query: s(y, O),
      fragmentIdentifier: d
    }, w);
  }, t.exclude = (v, O, w) => {
    const x = Array.isArray(O) ? (y) => !O.includes(y) : (y, d) => !O(y, d);
    return t.pick(v, x, w);
  };
})(gi);
const K_ = {
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
function Hh(t, e) {
  return t.includes(":") ? [t] : e.chains || [];
}
const Gh = "base10", rr = "base16", vc = "base64pad", yu = "utf8", Yh = 0, ls = 1, W_ = 0, Kl = 1, _c = 12, mu = 32;
function B_() {
  const t = hu.generateKeyPair();
  return { privateKey: nr(t.secretKey, rr), publicKey: nr(t.publicKey, rr) };
}
function bc() {
  const t = Fs.randomBytes(mu);
  return nr(t, rr);
}
function H_(t, e) {
  const r = hu.sharedKey(ur(t, rr), ur(e, rr), !0), n = new p_(Sa.SHA256, r).expand(mu);
  return nr(n, rr);
}
function G_(t) {
  const e = Sa.hash(ur(t, rr));
  return nr(e, rr);
}
function Os(t) {
  const e = Sa.hash(ur(t, yu));
  return nr(e, rr);
}
function Y_(t) {
  return ur(`${t}`, Gh);
}
function to(t) {
  return Number(nr(t, Gh));
}
function J_(t) {
  const e = Y_(typeof t.type < "u" ? t.type : Yh);
  if (to(e) === ls && typeof t.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof t.senderPublicKey < "u" ? ur(t.senderPublicKey, rr) : void 0, n = typeof t.iv < "u" ? ur(t.iv, rr) : Fs.randomBytes(_c), s = new lu.ChaCha20Poly1305(ur(t.symKey, rr)).seal(n, ur(t.message, yu));
  return Q_({ type: e, sealed: s, iv: n, senderPublicKey: r });
}
function X_(t) {
  const e = new lu.ChaCha20Poly1305(ur(t.symKey, rr)), { sealed: r, iv: n } = zo(t.encoded), s = e.open(n, r);
  if (s === null)
    throw new Error("Failed to decrypt");
  return nr(s, yu);
}
function Q_(t) {
  if (to(t.type) === ls) {
    if (typeof t.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return nr(gc([t.type, t.senderPublicKey, t.iv, t.sealed]), vc);
  }
  return nr(gc([t.type, t.iv, t.sealed]), vc);
}
function zo(t) {
  const e = ur(t, vc), r = e.slice(W_, Kl), n = Kl;
  if (to(r) === ls) {
    const o = n + mu, c = o + _c, u = e.slice(n, o), l = e.slice(o, c), f = e.slice(c);
    return { type: r, sealed: f, iv: l, senderPublicKey: u };
  }
  const s = n + _c, i = e.slice(n, s), a = e.slice(s);
  return { type: r, sealed: a, iv: i };
}
function e0(t, e) {
  const r = zo(t);
  return Jh({ type: to(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? nr(r.senderPublicKey, rr) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function Jh(t) {
  const e = (t == null ? void 0 : t.type) || Yh;
  if (e === ls) {
    if (typeof (t == null ? void 0 : t.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: t == null ? void 0 : t.senderPublicKey, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey };
}
function Wl(t) {
  return t.type === ls && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
var t0 = Object.defineProperty, Bl = Object.getOwnPropertySymbols, r0 = Object.prototype.hasOwnProperty, n0 = Object.prototype.propertyIsEnumerable, Hl = (t, e, r) => e in t ? t0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Gl = (t, e) => {
  for (var r in e || (e = {}))
    r0.call(e, r) && Hl(t, r, e[r]);
  if (Bl)
    for (var r of Bl(e))
      n0.call(e, r) && Hl(t, r, e[r]);
  return t;
};
const s0 = "ReactNative", yr = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, i0 = "js";
function vu() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function Ws() {
  return !fu() && !!pu() && navigator.product === s0;
}
function Bs() {
  return !vu() && !!pu() && !!fu();
}
function ro() {
  return Ws() ? yr.reactNative : vu() ? yr.node : Bs() ? yr.browser : yr.unknown;
}
function o0() {
  var t;
  try {
    return Ws() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (t = global.Application) == null ? void 0 : t.applicationId : void 0;
  } catch {
    return;
  }
}
function a0(t, e) {
  let r = gi.parse(t);
  return r = Gl(Gl({}, r), e), t = gi.stringify(r), t;
}
function c0() {
  return Wh() || { name: "", description: "", url: "", icons: [""] };
}
function u0() {
  if (ro() === yr.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: n } = global.Platform;
    return [r, n].join("-");
  }
  const t = S_();
  if (t === null)
    return "unknown";
  const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-");
}
function l0() {
  var t;
  const e = ro();
  return e === yr.browser ? [e, ((t = Kh()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function d0(t, e, r) {
  const n = u0(), s = l0();
  return [[t, e].join("-"), [i0, r].join("-"), n, s].join("/");
}
function h0({ protocol: t, version: e, relayUrl: r, sdkVersion: n, auth: s, projectId: i, useOnCloseEvent: a, bundleId: o }) {
  const c = r.split("?"), u = d0(t, e, n), l = { auth: s, ua: u, projectId: i, useOnCloseEvent: a || void 0, origin: o || void 0 }, f = a0(c[1] || "", l);
  return c[0] + "?" + f;
}
function Hn(t, e) {
  return t.filter((r) => e.includes(r)).length === t.length;
}
function Xh(t) {
  return Object.fromEntries(t.entries());
}
function Qh(t) {
  return new Map(Object.entries(t));
}
function vs(t = ae.FIVE_MINUTES, e) {
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
function yi(t, e, r) {
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
function ef(t, e) {
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
function f0(t) {
  return ef("topic", t);
}
function p0(t) {
  return ef("id", t);
}
function tf(t) {
  const [e, r] = t.split(":"), n = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof r == "string")
    n.topic = r;
  else if (e === "id" && Number.isInteger(Number(r)))
    n.id = Number(r);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${r}`);
  return n;
}
function gr(t, e) {
  return ae.fromMiliseconds((e || Date.now()) + ae.toMiliseconds(t));
}
function xn(t) {
  return Date.now() >= ae.toMiliseconds(t);
}
function xt(t, e) {
  return `${t}${e ? `:${e}` : ""}`;
}
async function g0({ id: t, topic: e, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const n = typeof r == "string" ? JSON.parse(r) : r;
    let s = n == null ? void 0 : n.href;
    if (typeof s != "string")
      return;
    s.endsWith("/") && (s = s.slice(0, -1));
    const i = `${s}/wc?requestId=${t}&sessionTopic=${e}`, a = ro();
    a === yr.browser ? i.startsWith("https://") ? window.open(i, "_blank", "noreferrer noopener") : window.open(i, "_self", "noreferrer noopener") : a === yr.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(i);
  } catch (n) {
    console.error(n);
  }
}
async function y0(t, e) {
  try {
    return await t.getItem(e) || (Bs() ? localStorage.getItem(e) : void 0);
  } catch (r) {
    console.error(r);
  }
}
const m0 = "irn";
function wc(t) {
  return (t == null ? void 0 : t.relay) || { protocol: m0 };
}
function No(t) {
  const e = K_[t];
  if (typeof e > "u")
    throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
var v0 = Object.defineProperty, _0 = Object.defineProperties, b0 = Object.getOwnPropertyDescriptors, Yl = Object.getOwnPropertySymbols, w0 = Object.prototype.hasOwnProperty, E0 = Object.prototype.propertyIsEnumerable, Jl = (t, e, r) => e in t ? v0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, S0 = (t, e) => {
  for (var r in e || (e = {}))
    w0.call(e, r) && Jl(t, r, e[r]);
  if (Yl)
    for (var r of Yl(e))
      E0.call(e, r) && Jl(t, r, e[r]);
  return t;
}, x0 = (t, e) => _0(t, b0(e));
function I0(t, e = "-") {
  const r = {}, n = "relay" + e;
  return Object.keys(t).forEach((s) => {
    if (s.startsWith(n)) {
      const i = s.replace(n, ""), a = t[s];
      r[i] = a;
    }
  }), r;
}
function Xl(t) {
  t = t.includes("wc://") ? t.replace("wc://", "") : t, t = t.includes("wc:") ? t.replace("wc:", "") : t;
  const e = t.indexOf(":"), r = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, n = t.substring(0, e), s = t.substring(e + 1, r).split("@"), i = typeof r < "u" ? t.substring(r) : "", a = gi.parse(i);
  return { protocol: n, topic: O0(s[0]), version: parseInt(s[1], 10), symKey: a.symKey, relay: I0(a), expiryTimestamp: a.expiryTimestamp ? parseInt(a.expiryTimestamp, 10) : void 0 };
}
function O0(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function T0(t, e = "-") {
  const r = "relay", n = {};
  return Object.keys(t).forEach((s) => {
    const i = r + e + s;
    t[s] && (n[i] = t[s]);
  }), n;
}
function k0(t) {
  return `${t.protocol}:${t.topic}@${t.version}?` + gi.stringify(x0(S0({ symKey: t.symKey }, T0(t.relay)), { expiryTimestamp: t.expiryTimestamp }));
}
function Hs(t) {
  const e = [];
  return t.forEach((r) => {
    const [n, s] = r.split(":");
    e.push(`${n}:${s}`);
  }), e;
}
function C0(t) {
  const e = [];
  return Object.values(t).forEach((r) => {
    e.push(...Hs(r.accounts));
  }), e;
}
function P0(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    Hs(n.accounts).includes(e) && r.push(...n.methods);
  }), r;
}
function N0(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    Hs(n.accounts).includes(e) && r.push(...n.events);
  }), r;
}
const R0 = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, A0 = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function J(t, e) {
  const { message: r, code: n } = A0[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function ft(t, e) {
  const { message: r, code: n } = R0[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function no(t, e) {
  return Array.isArray(t) ? typeof e < "u" && t.length ? t.every(e) : !0 : !1;
}
function $o(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function er(t) {
  return typeof t > "u";
}
function jt(t, e) {
  return e && er(t) ? !0 : typeof t == "string" && !!t.trim().length;
}
function _u(t, e) {
  return e && er(t) ? !0 : typeof t == "number" && !isNaN(t);
}
function j0(t, e) {
  const { requiredNamespaces: r } = e, n = Object.keys(t.namespaces), s = Object.keys(r);
  let i = !0;
  return Hn(s, n) ? (n.forEach((a) => {
    const { accounts: o, methods: c, events: u } = t.namespaces[a], l = Hs(o), f = r[a];
    (!Hn(Hh(a, f), l) || !Hn(f.methods, c) || !Hn(f.events, u)) && (i = !1);
  }), i) : !1;
}
function Vo(t) {
  return jt(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function L0(t) {
  if (jt(t, !1) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const r = e[0] + ":" + e[1];
      return !!e[2] && Vo(r);
    }
  }
  return !1;
}
function M0(t) {
  if (jt(t, !1))
    try {
      return typeof new URL(t) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function D0(t) {
  var e;
  return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
}
function U0(t) {
  return t == null ? void 0 : t.topic;
}
function z0(t, e) {
  let r = null;
  return jt(t == null ? void 0 : t.publicKey, !1) || (r = J("MISSING_OR_INVALID", `${e} controller public key should be a string`)), r;
}
function Ql(t) {
  let e = !0;
  return no(t) ? t.length && (e = t.every((r) => jt(r, !1))) : e = !1, e;
}
function $0(t, e, r) {
  let n = null;
  return no(e) && e.length ? e.forEach((s) => {
    n || Vo(s) || (n = ft("UNSUPPORTED_CHAINS", `${r}, chain ${s} should be a string and conform to "namespace:chainId" format`));
  }) : Vo(t) || (n = ft("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), n;
}
function V0(t, e, r) {
  let n = null;
  return Object.entries(t).forEach(([s, i]) => {
    if (n)
      return;
    const a = $0(s, Hh(s, i), `${e} ${r}`);
    a && (n = a);
  }), n;
}
function q0(t, e) {
  let r = null;
  return no(t) ? t.forEach((n) => {
    r || L0(n) || (r = ft("UNSUPPORTED_ACCOUNTS", `${e}, account ${n} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = ft("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function Z0(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const s = q0(n == null ? void 0 : n.accounts, `${e} namespace`);
    s && (r = s);
  }), r;
}
function F0(t, e) {
  let r = null;
  return Ql(t == null ? void 0 : t.methods) ? Ql(t == null ? void 0 : t.events) || (r = ft("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : r = ft("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), r;
}
function rf(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const s = F0(n, `${e}, namespace`);
    s && (r = s);
  }), r;
}
function K0(t, e, r) {
  let n = null;
  if (t && $o(t)) {
    const s = rf(t, e);
    s && (n = s);
    const i = V0(t, e, r);
    i && (n = i);
  } else
    n = J("MISSING_OR_INVALID", `${e}, ${r} should be an object with data`);
  return n;
}
function Fa(t, e) {
  let r = null;
  if (t && $o(t)) {
    const n = rf(t, e);
    n && (r = n);
    const s = Z0(t, e);
    s && (r = s);
  } else
    r = J("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return r;
}
function nf(t) {
  return jt(t.protocol, !0);
}
function W0(t, e) {
  let r = !1;
  return e && !t ? r = !0 : t && no(t) && t.length && t.forEach((n) => {
    r = nf(n);
  }), r;
}
function B0(t) {
  return typeof t == "number";
}
function cr(t) {
  return typeof t < "u" && typeof t !== null;
}
function H0(t) {
  return !(!t || typeof t != "object" || !t.code || !_u(t.code, !1) || !t.message || !jt(t.message, !1));
}
function G0(t) {
  return !(er(t) || !jt(t.method, !1));
}
function Y0(t) {
  return !(er(t) || er(t.result) && er(t.error) || !_u(t.id, !1) || !jt(t.jsonrpc, !1));
}
function J0(t) {
  return !(er(t) || !jt(t.name, !1));
}
function ed(t, e) {
  return !(!Vo(e) || !C0(t).includes(e));
}
function X0(t, e, r) {
  return jt(r, !1) ? P0(t, e).includes(r) : !1;
}
function Q0(t, e, r) {
  return jt(r, !1) ? N0(t, e).includes(r) : !1;
}
function td(t, e, r) {
  let n = null;
  const s = eb(t), i = tb(e), a = Object.keys(s), o = Object.keys(i), c = rd(Object.keys(t)), u = rd(Object.keys(e)), l = c.filter((f) => !u.includes(f));
  return l.length && (n = J("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${l.toString()}
      Received: ${Object.keys(e).toString()}`)), Hn(a, o) || (n = J("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${a.toString()}
      Approved: ${o.toString()}`)), Object.keys(e).forEach((f) => {
    if (!f.includes(":") || n)
      return;
    const p = Hs(e[f].accounts);
    p.includes(f) || (n = J("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${f}
        Required: ${f}
        Approved: ${p.toString()}`));
  }), a.forEach((f) => {
    n || (Hn(s[f].methods, i[f].methods) ? Hn(s[f].events, i[f].events) || (n = J("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${f}`)) : n = J("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${f}`));
  }), n;
}
function eb(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    var n;
    r.includes(":") ? e[r] = t[r] : (n = t[r].chains) == null || n.forEach((s) => {
      e[s] = { methods: t[r].methods, events: t[r].events };
    });
  }), e;
}
function rd(t) {
  return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function tb(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    if (r.includes(":"))
      e[r] = t[r];
    else {
      const n = Hs(t[r].accounts);
      n == null || n.forEach((s) => {
        e[s] = { accounts: t[r].accounts.filter((i) => i.includes(`${s}:`)), methods: t[r].methods, events: t[r].events };
      });
    }
  }), e;
}
function rb(t, e) {
  return _u(t, !1) && t <= e.max && t >= e.min;
}
function nd() {
  const t = ro();
  return new Promise((e) => {
    switch (t) {
      case yr.browser:
        e(nb());
        break;
      case yr.reactNative:
        e(sb());
        break;
      case yr.node:
        e(ib());
        break;
      default:
        e(!0);
    }
  });
}
function nb() {
  return Bs() && (navigator == null ? void 0 : navigator.onLine);
}
async function sb() {
  if (Ws() && typeof global < "u" && global != null && global.NetInfo) {
    const t = await (global == null ? void 0 : global.NetInfo.fetch());
    return t == null ? void 0 : t.isConnected;
  }
  return !0;
}
function ib() {
  return !0;
}
function ob(t) {
  switch (ro()) {
    case yr.browser:
      ab(t);
      break;
    case yr.reactNative:
      cb(t);
      break;
  }
}
function ab(t) {
  !Ws() && Bs() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function cb(t) {
  Ws() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
}
const Ka = {};
let bo = class {
  static get(t) {
    return Ka[t];
  }
  static set(t, e) {
    Ka[t] = e;
  }
  static delete(t) {
    delete Ka[t];
  }
};
const ub = "PARSE_ERROR", lb = "INVALID_REQUEST", db = "METHOD_NOT_FOUND", hb = "INVALID_PARAMS", sf = "INTERNAL_ERROR", bu = "SERVER_ERROR", fb = [-32700, -32600, -32601, -32602, -32603], li = {
  [ub]: { code: -32700, message: "Parse error" },
  [lb]: { code: -32600, message: "Invalid Request" },
  [db]: { code: -32601, message: "Method not found" },
  [hb]: { code: -32602, message: "Invalid params" },
  [sf]: { code: -32603, message: "Internal error" },
  [bu]: { code: -32e3, message: "Server error" }
}, of = bu;
function pb(t) {
  return fb.includes(t);
}
function sd(t) {
  return Object.keys(li).includes(t) ? li[t] : li[of];
}
function gb(t) {
  return Object.values(li).find((r) => r.code === t) || li[of];
}
function yb(t, e, r) {
  return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${e}`) : t;
}
var af = {}, rn = {}, id;
function mb() {
  if (id)
    return rn;
  id = 1, Object.defineProperty(rn, "__esModule", { value: !0 }), rn.isBrowserCryptoAvailable = rn.getSubtleCrypto = rn.getBrowerCrypto = void 0;
  function t() {
    return (Tn == null ? void 0 : Tn.crypto) || (Tn == null ? void 0 : Tn.msCrypto) || {};
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
var nn = {}, od;
function vb() {
  if (od)
    return nn;
  od = 1, Object.defineProperty(nn, "__esModule", { value: !0 }), nn.isBrowser = nn.isNode = nn.isReactNative = void 0;
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
  e.__exportStar(mb(), t), e.__exportStar(vb(), t);
})(af);
function wu(t = 3) {
  const e = Date.now() * Math.pow(10, t), r = Math.floor(Math.random() * Math.pow(10, t));
  return e + r;
}
function cf(t = 6) {
  return BigInt(wu(t));
}
function Ts(t, e, r) {
  return {
    id: r || wu(),
    jsonrpc: "2.0",
    method: t,
    params: e
  };
}
function Eu(t, e) {
  return {
    id: t,
    jsonrpc: "2.0",
    result: e
  };
}
function Su(t, e, r) {
  return {
    id: t,
    jsonrpc: "2.0",
    error: _b(e, r)
  };
}
function _b(t, e) {
  return typeof t > "u" ? sd(sf) : (typeof t == "string" && (t = Object.assign(Object.assign({}, sd(bu)), { message: t })), typeof e < "u" && (t.data = e), pb(t.code) && (t = gb(t.code)), t);
}
class bb {
}
class wb extends bb {
  constructor() {
    super();
  }
}
class Eb extends wb {
  constructor(e) {
    super();
  }
}
const Sb = "^wss?:";
function xb(t) {
  const e = t.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length))
    return e[0];
}
function Ib(t, e) {
  const r = xb(t);
  return typeof r > "u" ? !1 : new RegExp(e).test(r);
}
function ad(t) {
  return Ib(t, Sb);
}
function Ob(t) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(t);
}
function uf(t) {
  return typeof t == "object" && "id" in t && "jsonrpc" in t && t.jsonrpc === "2.0";
}
function xu(t) {
  return uf(t) && "method" in t;
}
function xa(t) {
  return uf(t) && (cn(t) || Tr(t));
}
function cn(t) {
  return "result" in t;
}
function Tr(t) {
  return "error" in t;
}
class Tb extends Eb {
  constructor(e) {
    super(e), this.events = new Ur.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners();
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
    return this.requestStrict(Ts(e.method, e.params || [], e.id || cf().toString()), r);
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
        Tr(i) ? s(i.error) : n(i.result);
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
    this.events.emit("payload", e), xa(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
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
const kb = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : (() => {
  try {
    return (() => {try { return require("ws") } catch (e) { } })();
  } catch {
  }
})(), Cb = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", cd = (t) => t.split("?")[0], ud = 10, Pb = kb();
class Nb {
  constructor(e) {
    if (this.url = e, this.events = new Ur.EventEmitter(), this.registering = !1, !ad(e))
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
      this.socket.send(Xi(e));
    } catch (r) {
      this.onError(e.id, r);
    }
  }
  register(e = this.url) {
    if (!ad(e))
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
      const s = new URLSearchParams(e).get("origin"), i = af.isReactNative() ? { headers: { origin: s } } : { rejectUnauthorized: !Ob(e) }, a = new Pb(e, [], i);
      Cb() ? a.onerror = (o) => {
        const c = o;
        n(this.emitError(c.error));
      } : a.on("error", (o) => {
        n(this.emitError(o));
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
    const r = typeof e.data == "string" ? ma(e.data) : e.data;
    this.events.emit("payload", r);
  }
  onError(e, r) {
    const n = this.parseError(r), s = n.message || n.toString(), i = Su(e, s);
    this.events.emit("payload", i);
  }
  parseError(e, r = this.url) {
    return yb(e, cd(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > ud && this.events.setMaxListeners(ud);
  }
  emitError(e) {
    const r = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${cd(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var qo = { exports: {} };
qo.exports;
(function(t, e) {
  var r = 200, n = "__lodash_hash_undefined__", s = 1, i = 2, a = 9007199254740991, o = "[object Arguments]", c = "[object Array]", u = "[object AsyncFunction]", l = "[object Boolean]", f = "[object Date]", p = "[object Error]", m = "[object Function]", b = "[object GeneratorFunction]", E = "[object Map]", T = "[object Number]", M = "[object Null]", v = "[object Object]", O = "[object Promise]", w = "[object Proxy]", x = "[object RegExp]", y = "[object Set]", d = "[object String]", g = "[object Symbol]", P = "[object Undefined]", N = "[object WeakMap]", D = "[object ArrayBuffer]", G = "[object DataView]", Y = "[object Float32Array]", k = "[object Float64Array]", A = "[object Int8Array]", Q = "[object Int16Array]", Z = "[object Int32Array]", $ = "[object Uint8Array]", q = "[object Uint8ClampedArray]", z = "[object Uint16Array]", F = "[object Uint32Array]", ye = /[\\^$.*+?()[\]{}|]/g, K = /^\[object .+?Constructor\]$/, de = /^(?:0|[1-9]\d*)$/, ne = {};
  ne[Y] = ne[k] = ne[A] = ne[Q] = ne[Z] = ne[$] = ne[q] = ne[z] = ne[F] = !0, ne[o] = ne[c] = ne[D] = ne[l] = ne[G] = ne[f] = ne[p] = ne[m] = ne[E] = ne[T] = ne[v] = ne[x] = ne[y] = ne[d] = ne[N] = !1;
  var le = typeof Tn == "object" && Tn && Tn.Object === Object && Tn, L = typeof self == "object" && self && self.Object === Object && self, j = le || L || Function("return this")(), C = e && !e.nodeType && e, h = C && !0 && t && !t.nodeType && t, I = h && h.exports === C, H = I && le.process, ee = function() {
    try {
      return H && H.binding && H.binding("util");
    } catch {
    }
  }(), je = ee && ee.isTypedArray;
  function Le(_, R) {
    for (var V = -1, oe = _ == null ? 0 : _.length, ot = 0, Ce = []; ++V < oe; ) {
      var bt = _[V];
      R(bt, V, _) && (Ce[ot++] = bt);
    }
    return Ce;
  }
  function Oe(_, R) {
    for (var V = -1, oe = R.length, ot = _.length; ++V < oe; )
      _[ot + V] = R[V];
    return _;
  }
  function Ze(_, R) {
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
  function Ue(_, R) {
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
  function ke(_) {
    var R = -1, V = Array(_.size);
    return _.forEach(function(oe) {
      V[++R] = oe;
    }), V;
  }
  var we = Array.prototype, _e = Function.prototype, he = Object.prototype, Ne = j["__core-js_shared__"], Me = _e.toString, me = he.hasOwnProperty, ze = function() {
    var _ = /[^.]+$/.exec(Ne && Ne.keys && Ne.keys.IE_PROTO || "");
    return _ ? "Symbol(src)_1." + _ : "";
  }(), Fe = he.toString, He = RegExp(
    "^" + Me.call(me).replace(ye, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Ge = I ? j.Buffer : void 0, We = j.Symbol, hr = j.Uint8Array, vr = he.propertyIsEnumerable, Vr = we.splice, Mt = We ? We.toStringTag : void 0, qr = Object.getOwnPropertySymbols, _r = Ge ? Ge.isBuffer : void 0, mn = Pe(Object.keys, Object), ct = ds(j, "DataView"), st = ds(j, "Map"), yt = ds(j, "Promise"), lt = ds(j, "Set"), mt = ds(j, "WeakMap"), it = ds(Object, "create"), wt = zn(ct), It = zn(st), Ot = zn(yt), Et = zn(lt), Tt = zn(mt), St = We ? We.prototype : void 0, vt = St ? St.valueOf : void 0;
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
  function U(_) {
    var R = this.has(_) && delete this.__data__[_];
    return this.size -= R ? 1 : 0, R;
  }
  function X(_) {
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
  rt.prototype.clear = S, rt.prototype.delete = U, rt.prototype.get = X, rt.prototype.has = fe, rt.prototype.set = Be;
  function $e(_) {
    var R = -1, V = _ == null ? 0 : _.length;
    for (this.clear(); ++R < V; ) {
      var oe = _[R];
      this.set(oe[0], oe[1]);
    }
  }
  function qe() {
    this.__data__ = [], this.size = 0;
  }
  function De(_) {
    var R = this.__data__, V = uo(R, _);
    if (V < 0)
      return !1;
    var oe = R.length - 1;
    return V == oe ? R.pop() : Vr.call(R, V, 1), --this.size, !0;
  }
  function Dt(_) {
    var R = this.__data__, V = uo(R, _);
    return V < 0 ? void 0 : R[V][1];
  }
  function dt(_) {
    return uo(this.__data__, _) > -1;
  }
  function _t(_, R) {
    var V = this.__data__, oe = uo(V, _);
    return oe < 0 ? (++this.size, V.push([_, R])) : V[oe][1] = R, this;
  }
  $e.prototype.clear = qe, $e.prototype.delete = De, $e.prototype.get = Dt, $e.prototype.has = dt, $e.prototype.set = _t;
  function kt(_) {
    var R = -1, V = _ == null ? 0 : _.length;
    for (this.clear(); ++R < V; ) {
      var oe = _[R];
      this.set(oe[0], oe[1]);
    }
  }
  function vn() {
    this.size = 0, this.__data__ = {
      hash: new rt(),
      map: new (st || $e)(),
      string: new rt()
    };
  }
  function ao(_) {
    var R = lo(this, _).delete(_);
    return this.size -= R ? 1 : 0, R;
  }
  function xr(_) {
    return lo(this, _).get(_);
  }
  function xp(_) {
    return lo(this, _).has(_);
  }
  function Ip(_, R) {
    var V = lo(this, _), oe = V.size;
    return V.set(_, R), this.size += V.size == oe ? 0 : 1, this;
  }
  kt.prototype.clear = vn, kt.prototype.delete = ao, kt.prototype.get = xr, kt.prototype.has = xp, kt.prototype.set = Ip;
  function co(_) {
    var R = -1, V = _ == null ? 0 : _.length;
    for (this.__data__ = new kt(); ++R < V; )
      this.add(_[R]);
  }
  function Op(_) {
    return this.__data__.set(_, n), this;
  }
  function Tp(_) {
    return this.__data__.has(_);
  }
  co.prototype.add = co.prototype.push = Op, co.prototype.has = Tp;
  function _n(_) {
    var R = this.__data__ = new $e(_);
    this.size = R.size;
  }
  function kp() {
    this.__data__ = new $e(), this.size = 0;
  }
  function Cp(_) {
    var R = this.__data__, V = R.delete(_);
    return this.size = R.size, V;
  }
  function Pp(_) {
    return this.__data__.get(_);
  }
  function Np(_) {
    return this.__data__.has(_);
  }
  function Rp(_, R) {
    var V = this.__data__;
    if (V instanceof $e) {
      var oe = V.__data__;
      if (!st || oe.length < r - 1)
        return oe.push([_, R]), this.size = ++V.size, this;
      V = this.__data__ = new kt(oe);
    }
    return V.set(_, R), this.size = V.size, this;
  }
  _n.prototype.clear = kp, _n.prototype.delete = Cp, _n.prototype.get = Pp, _n.prototype.has = Np, _n.prototype.set = Rp;
  function Ap(_, R) {
    var V = ho(_), oe = !V && Hp(_), ot = !V && !oe && Ma(_), Ce = !V && !oe && !ot && Vu(_), bt = V || oe || ot || Ce, Pt = bt ? at(_.length, String) : [], Ut = Pt.length;
    for (var ht in _)
      (R || me.call(_, ht)) && !(bt && // Safari 9 has enumerable `arguments.length` in strict mode.
      (ht == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      ot && (ht == "offset" || ht == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      Ce && (ht == "buffer" || ht == "byteLength" || ht == "byteOffset") || // Skip index properties.
      Zp(ht, Ut))) && Pt.push(ht);
    return Pt;
  }
  function uo(_, R) {
    for (var V = _.length; V--; )
      if (Du(_[V][0], R))
        return V;
    return -1;
  }
  function jp(_, R, V) {
    var oe = R(_);
    return ho(_) ? oe : Oe(oe, V(_));
  }
  function Ys(_) {
    return _ == null ? _ === void 0 ? P : M : Mt && Mt in Object(_) ? Vp(_) : Bp(_);
  }
  function Au(_) {
    return Js(_) && Ys(_) == o;
  }
  function ju(_, R, V, oe, ot) {
    return _ === R ? !0 : _ == null || R == null || !Js(_) && !Js(R) ? _ !== _ && R !== R : Lp(_, R, V, oe, ju, ot);
  }
  function Lp(_, R, V, oe, ot, Ce) {
    var bt = ho(_), Pt = ho(R), Ut = bt ? c : bn(_), ht = Pt ? c : bn(R);
    Ut = Ut == o ? v : Ut, ht = ht == o ? v : ht;
    var fr = Ut == v, Ir = ht == v, Vt = Ut == ht;
    if (Vt && Ma(_)) {
      if (!Ma(R))
        return !1;
      bt = !0, fr = !1;
    }
    if (Vt && !fr)
      return Ce || (Ce = new _n()), bt || Vu(_) ? Lu(_, R, V, oe, ot, Ce) : zp(_, R, Ut, V, oe, ot, Ce);
    if (!(V & s)) {
      var br = fr && me.call(_, "__wrapped__"), wr = Ir && me.call(R, "__wrapped__");
      if (br || wr) {
        var wn = br ? _.value() : _, tn = wr ? R.value() : R;
        return Ce || (Ce = new _n()), ot(wn, tn, V, oe, Ce);
      }
    }
    return Vt ? (Ce || (Ce = new _n()), $p(_, R, V, oe, ot, Ce)) : !1;
  }
  function Mp(_) {
    if (!$u(_) || Kp(_))
      return !1;
    var R = Uu(_) ? He : K;
    return R.test(zn(_));
  }
  function Dp(_) {
    return Js(_) && zu(_.length) && !!ne[Ys(_)];
  }
  function Up(_) {
    if (!Wp(_))
      return mn(_);
    var R = [];
    for (var V in Object(_))
      me.call(_, V) && V != "constructor" && R.push(V);
    return R;
  }
  function Lu(_, R, V, oe, ot, Ce) {
    var bt = V & s, Pt = _.length, Ut = R.length;
    if (Pt != Ut && !(bt && Ut > Pt))
      return !1;
    var ht = Ce.get(_);
    if (ht && Ce.get(R))
      return ht == R;
    var fr = -1, Ir = !0, Vt = V & i ? new co() : void 0;
    for (Ce.set(_, R), Ce.set(R, _); ++fr < Pt; ) {
      var br = _[fr], wr = R[fr];
      if (oe)
        var wn = bt ? oe(wr, br, fr, R, _, Ce) : oe(br, wr, fr, _, R, Ce);
      if (wn !== void 0) {
        if (wn)
          continue;
        Ir = !1;
        break;
      }
      if (Vt) {
        if (!Ze(R, function(tn, $n) {
          if (!Ve(Vt, $n) && (br === tn || ot(br, tn, V, oe, Ce)))
            return Vt.push($n);
        })) {
          Ir = !1;
          break;
        }
      } else if (!(br === wr || ot(br, wr, V, oe, Ce))) {
        Ir = !1;
        break;
      }
    }
    return Ce.delete(_), Ce.delete(R), Ir;
  }
  function zp(_, R, V, oe, ot, Ce, bt) {
    switch (V) {
      case G:
        if (_.byteLength != R.byteLength || _.byteOffset != R.byteOffset)
          return !1;
        _ = _.buffer, R = R.buffer;
      case D:
        return !(_.byteLength != R.byteLength || !Ce(new hr(_), new hr(R)));
      case l:
      case f:
      case T:
        return Du(+_, +R);
      case p:
        return _.name == R.name && _.message == R.message;
      case x:
      case d:
        return _ == R + "";
      case E:
        var Pt = Te;
      case y:
        var Ut = oe & s;
        if (Pt || (Pt = ke), _.size != R.size && !Ut)
          return !1;
        var ht = bt.get(_);
        if (ht)
          return ht == R;
        oe |= i, bt.set(_, R);
        var fr = Lu(Pt(_), Pt(R), oe, ot, Ce, bt);
        return bt.delete(_), fr;
      case g:
        if (vt)
          return vt.call(_) == vt.call(R);
    }
    return !1;
  }
  function $p(_, R, V, oe, ot, Ce) {
    var bt = V & s, Pt = Mu(_), Ut = Pt.length, ht = Mu(R), fr = ht.length;
    if (Ut != fr && !bt)
      return !1;
    for (var Ir = Ut; Ir--; ) {
      var Vt = Pt[Ir];
      if (!(bt ? Vt in R : me.call(R, Vt)))
        return !1;
    }
    var br = Ce.get(_);
    if (br && Ce.get(R))
      return br == R;
    var wr = !0;
    Ce.set(_, R), Ce.set(R, _);
    for (var wn = bt; ++Ir < Ut; ) {
      Vt = Pt[Ir];
      var tn = _[Vt], $n = R[Vt];
      if (oe)
        var qu = bt ? oe($n, tn, Vt, R, _, Ce) : oe(tn, $n, Vt, _, R, Ce);
      if (!(qu === void 0 ? tn === $n || ot(tn, $n, V, oe, Ce) : qu)) {
        wr = !1;
        break;
      }
      wn || (wn = Vt == "constructor");
    }
    if (wr && !wn) {
      var fo = _.constructor, po = R.constructor;
      fo != po && "constructor" in _ && "constructor" in R && !(typeof fo == "function" && fo instanceof fo && typeof po == "function" && po instanceof po) && (wr = !1);
    }
    return Ce.delete(_), Ce.delete(R), wr;
  }
  function Mu(_) {
    return jp(_, Jp, qp);
  }
  function lo(_, R) {
    var V = _.__data__;
    return Fp(R) ? V[typeof R == "string" ? "string" : "hash"] : V.map;
  }
  function ds(_, R) {
    var V = Ue(_, R);
    return Mp(V) ? V : void 0;
  }
  function Vp(_) {
    var R = me.call(_, Mt), V = _[Mt];
    try {
      _[Mt] = void 0;
      var oe = !0;
    } catch {
    }
    var ot = Fe.call(_);
    return oe && (R ? _[Mt] = V : delete _[Mt]), ot;
  }
  var qp = qr ? function(_) {
    return _ == null ? [] : (_ = Object(_), Le(qr(_), function(R) {
      return vr.call(_, R);
    }));
  } : Xp, bn = Ys;
  (ct && bn(new ct(new ArrayBuffer(1))) != G || st && bn(new st()) != E || yt && bn(yt.resolve()) != O || lt && bn(new lt()) != y || mt && bn(new mt()) != N) && (bn = function(_) {
    var R = Ys(_), V = R == v ? _.constructor : void 0, oe = V ? zn(V) : "";
    if (oe)
      switch (oe) {
        case wt:
          return G;
        case It:
          return E;
        case Ot:
          return O;
        case Et:
          return y;
        case Tt:
          return N;
      }
    return R;
  });
  function Zp(_, R) {
    return R = R ?? a, !!R && (typeof _ == "number" || de.test(_)) && _ > -1 && _ % 1 == 0 && _ < R;
  }
  function Fp(_) {
    var R = typeof _;
    return R == "string" || R == "number" || R == "symbol" || R == "boolean" ? _ !== "__proto__" : _ === null;
  }
  function Kp(_) {
    return !!ze && ze in _;
  }
  function Wp(_) {
    var R = _ && _.constructor, V = typeof R == "function" && R.prototype || he;
    return _ === V;
  }
  function Bp(_) {
    return Fe.call(_);
  }
  function zn(_) {
    if (_ != null) {
      try {
        return Me.call(_);
      } catch {
      }
      try {
        return _ + "";
      } catch {
      }
    }
    return "";
  }
  function Du(_, R) {
    return _ === R || _ !== _ && R !== R;
  }
  var Hp = Au(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Au : function(_) {
    return Js(_) && me.call(_, "callee") && !vr.call(_, "callee");
  }, ho = Array.isArray;
  function Gp(_) {
    return _ != null && zu(_.length) && !Uu(_);
  }
  var Ma = _r || Qp;
  function Yp(_, R) {
    return ju(_, R);
  }
  function Uu(_) {
    if (!$u(_))
      return !1;
    var R = Ys(_);
    return R == m || R == b || R == u || R == w;
  }
  function zu(_) {
    return typeof _ == "number" && _ > -1 && _ % 1 == 0 && _ <= a;
  }
  function $u(_) {
    var R = typeof _;
    return _ != null && (R == "object" || R == "function");
  }
  function Js(_) {
    return _ != null && typeof _ == "object";
  }
  var Vu = je ? tt(je) : Dp;
  function Jp(_) {
    return Gp(_) ? Ap(_) : Up(_);
  }
  function Xp() {
    return [];
  }
  function Qp() {
    return !1;
  }
  t.exports = Yp;
})(qo, qo.exports);
var Rb = qo.exports;
const Ab = /* @__PURE__ */ pa(Rb);
function jb(t, e) {
  return e = e || {}, new Promise(function(r, n) {
    var s = new XMLHttpRequest(), i = [], a = [], o = {}, c = function() {
      return { ok: (s.status / 100 | 0) == 2, statusText: s.statusText, status: s.status, url: s.responseURL, text: function() {
        return Promise.resolve(s.responseText);
      }, json: function() {
        return Promise.resolve(s.responseText).then(JSON.parse);
      }, blob: function() {
        return Promise.resolve(new Blob([s.response]));
      }, clone: c, headers: { keys: function() {
        return i;
      }, entries: function() {
        return a;
      }, get: function(l) {
        return o[l.toLowerCase()];
      }, has: function(l) {
        return l.toLowerCase() in o;
      } } };
    };
    for (var u in s.open(e.method || "get", t, !0), s.onload = function() {
      s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(l, f, p) {
        i.push(f = f.toLowerCase()), a.push([f, p]), o[f] = o[f] ? o[f] + "," + p : p;
      }), r(c());
    }, s.onerror = n, s.withCredentials = e.credentials == "include", e.headers)
      s.setRequestHeader(u, e.headers[u]);
    s.send(e.body || null);
  });
}
const Lb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jb
}, Symbol.toStringTag, { value: "Module" })), ld = /* @__PURE__ */ ga(Lb);
var Mb = fetch || (self.fetch = ld.default || ld);
const Db = /* @__PURE__ */ pa(Mb);
function Ub(t, e) {
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
  var o = t.length, c = t.charAt(0), u = Math.log(o) / Math.log(256), l = Math.log(256) / Math.log(o);
  function f(b) {
    if (b instanceof Uint8Array || (ArrayBuffer.isView(b) ? b = new Uint8Array(b.buffer, b.byteOffset, b.byteLength) : Array.isArray(b) && (b = Uint8Array.from(b))), !(b instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (b.length === 0)
      return "";
    for (var E = 0, T = 0, M = 0, v = b.length; M !== v && b[M] === 0; )
      M++, E++;
    for (var O = (v - M) * l + 1 >>> 0, w = new Uint8Array(O); M !== v; ) {
      for (var x = b[M], y = 0, d = O - 1; (x !== 0 || y < T) && d !== -1; d--, y++)
        x += 256 * w[d] >>> 0, w[d] = x % o >>> 0, x = x / o >>> 0;
      if (x !== 0)
        throw new Error("Non-zero carry");
      T = y, M++;
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
      for (var T = 0, M = 0; b[E] === c; )
        T++, E++;
      for (var v = (b.length - E) * u + 1 >>> 0, O = new Uint8Array(v); b[E]; ) {
        var w = r[b.charCodeAt(E)];
        if (w === 255)
          return;
        for (var x = 0, y = v - 1; (w !== 0 || x < M) && y !== -1; y--, x++)
          w += o * O[y] >>> 0, O[y] = w % 256 >>> 0, w = w / 256 >>> 0;
        if (w !== 0)
          throw new Error("Non-zero carry");
        M = x, E++;
      }
      if (b[E] !== " ") {
        for (var d = v - M; d !== v && O[d] === 0; )
          d++;
        for (var g = new Uint8Array(T + (v - d)), P = T; d !== v; )
          g[P++] = O[d++];
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
var zb = Ub, $b = zb;
const lf = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Vb = (t) => new TextEncoder().encode(t), qb = (t) => new TextDecoder().decode(t);
class Zb {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Fb {
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
    return df(this, e);
  }
}
class Kb {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return df(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const df = (t, e) => new Kb({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
class Wb {
  constructor(e, r, n, s) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = s, this.encoder = new Zb(e, r, n), this.decoder = new Fb(e, r, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Ia = ({ name: t, prefix: e, encode: r, decode: n }) => new Wb(t, e, r, n), so = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: s } = $b(r, e);
  return Ia({ prefix: t, name: e, encode: n, decode: (i) => lf(s(i)) });
}, Bb = (t, e, r, n) => {
  const s = {};
  for (let l = 0; l < e.length; ++l)
    s[e[l]] = l;
  let i = t.length;
  for (; t[i - 1] === "="; )
    --i;
  const a = new Uint8Array(i * r / 8 | 0);
  let o = 0, c = 0, u = 0;
  for (let l = 0; l < i; ++l) {
    const f = s[t[l]];
    if (f === void 0)
      throw new SyntaxError(`Non-${n} character`);
    c = c << r | f, o += r, o >= 8 && (o -= 8, a[u++] = 255 & c >> o);
  }
  if (o >= r || 255 & c << 8 - o)
    throw new SyntaxError("Unexpected end of data");
  return a;
}, Hb = (t, e, r) => {
  const n = e[e.length - 1] === "=", s = (1 << r) - 1;
  let i = "", a = 0, o = 0;
  for (let c = 0; c < t.length; ++c)
    for (o = o << 8 | t[c], a += 8; a > r; )
      a -= r, i += e[s & o >> a];
  if (a && (i += e[s & o << r - a]), n)
    for (; i.length * r & 7; )
      i += "=";
  return i;
}, $t = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => Ia({ prefix: e, name: t, encode(s) {
  return Hb(s, n, r);
}, decode(s) {
  return Bb(s, n, r, t);
} }), Gb = Ia({ prefix: "\0", name: "identity", encode: (t) => qb(t), decode: (t) => Vb(t) });
var Yb = Object.freeze({ __proto__: null, identity: Gb });
const Jb = $t({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var Xb = Object.freeze({ __proto__: null, base2: Jb });
const Qb = $t({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var ew = Object.freeze({ __proto__: null, base8: Qb });
const tw = so({ prefix: "9", name: "base10", alphabet: "0123456789" });
var rw = Object.freeze({ __proto__: null, base10: tw });
const nw = $t({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), sw = $t({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var iw = Object.freeze({ __proto__: null, base16: nw, base16upper: sw });
const ow = $t({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), aw = $t({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), cw = $t({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), uw = $t({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), lw = $t({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), dw = $t({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), hw = $t({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), fw = $t({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), pw = $t({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var gw = Object.freeze({ __proto__: null, base32: ow, base32upper: aw, base32pad: cw, base32padupper: uw, base32hex: lw, base32hexupper: dw, base32hexpad: hw, base32hexpadupper: fw, base32z: pw });
const yw = so({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), mw = so({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var vw = Object.freeze({ __proto__: null, base36: yw, base36upper: mw });
const _w = so({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), bw = so({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var ww = Object.freeze({ __proto__: null, base58btc: _w, base58flickr: bw });
const Ew = $t({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), Sw = $t({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), xw = $t({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), Iw = $t({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Ow = Object.freeze({ __proto__: null, base64: Ew, base64pad: Sw, base64url: xw, base64urlpad: Iw });
const hf = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Tw = hf.reduce((t, e, r) => (t[r] = e, t), []), kw = hf.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function Cw(t) {
  return t.reduce((e, r) => (e += Tw[r], e), "");
}
function Pw(t) {
  const e = [];
  for (const r of t) {
    const n = kw[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const Nw = Ia({ prefix: "🚀", name: "base256emoji", encode: Cw, decode: Pw });
var Rw = Object.freeze({ __proto__: null, base256emoji: Nw }), Aw = ff, dd = 128, jw = 127, Lw = ~jw, Mw = Math.pow(2, 31);
function ff(t, e, r) {
  e = e || [], r = r || 0;
  for (var n = r; t >= Mw; )
    e[r++] = t & 255 | dd, t /= 128;
  for (; t & Lw; )
    e[r++] = t & 255 | dd, t >>>= 7;
  return e[r] = t | 0, ff.bytes = r - n + 1, e;
}
var Dw = Ec, Uw = 128, hd = 127;
function Ec(t, n) {
  var r = 0, n = n || 0, s = 0, i = n, a, o = t.length;
  do {
    if (i >= o)
      throw Ec.bytes = 0, new RangeError("Could not decode varint");
    a = t[i++], r += s < 28 ? (a & hd) << s : (a & hd) * Math.pow(2, s), s += 7;
  } while (a >= Uw);
  return Ec.bytes = i - n, r;
}
var zw = Math.pow(2, 7), $w = Math.pow(2, 14), Vw = Math.pow(2, 21), qw = Math.pow(2, 28), Zw = Math.pow(2, 35), Fw = Math.pow(2, 42), Kw = Math.pow(2, 49), Ww = Math.pow(2, 56), Bw = Math.pow(2, 63), Hw = function(t) {
  return t < zw ? 1 : t < $w ? 2 : t < Vw ? 3 : t < qw ? 4 : t < Zw ? 5 : t < Fw ? 6 : t < Kw ? 7 : t < Ww ? 8 : t < Bw ? 9 : 10;
}, Gw = { encode: Aw, decode: Dw, encodingLength: Hw }, pf = Gw;
const fd = (t, e, r = 0) => (pf.encode(t, e, r), e), pd = (t) => pf.encodingLength(t), Sc = (t, e) => {
  const r = e.byteLength, n = pd(t), s = n + pd(r), i = new Uint8Array(s + r);
  return fd(t, i, 0), fd(r, i, n), i.set(e, s), new Yw(t, r, e, i);
};
class Yw {
  constructor(e, r, n, s) {
    this.code = e, this.size = r, this.digest = n, this.bytes = s;
  }
}
const gf = ({ name: t, code: e, encode: r }) => new Jw(t, e, r);
class Jw {
  constructor(e, r, n) {
    this.name = e, this.code = r, this.encode = n;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const r = this.encode(e);
      return r instanceof Uint8Array ? Sc(this.code, r) : r.then((n) => Sc(this.code, n));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const yf = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), Xw = gf({ name: "sha2-256", code: 18, encode: yf("SHA-256") }), Qw = gf({ name: "sha2-512", code: 19, encode: yf("SHA-512") });
var e1 = Object.freeze({ __proto__: null, sha256: Xw, sha512: Qw });
const mf = 0, t1 = "identity", vf = lf, r1 = (t) => Sc(mf, vf(t)), n1 = { code: mf, name: t1, encode: vf, digest: r1 };
var s1 = Object.freeze({ __proto__: null, identity: n1 });
new TextEncoder(), new TextDecoder();
const gd = { ...Yb, ...Xb, ...ew, ...rw, ...iw, ...gw, ...vw, ...ww, ...Ow, ...Rw };
({ ...e1, ...s1 });
function _f(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function i1(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? _f(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function bf(t, e, r, n) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: r }, decoder: { decode: n } };
}
const yd = bf("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), Wa = bf("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = i1(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), o1 = { utf8: yd, "utf-8": yd, hex: gd.base16, latin1: Wa, ascii: Wa, binary: Wa, ...gd };
function a1(t, e = "utf8") {
  const r = o1[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? _f(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
const wf = "wc", c1 = 2, Iu = "core", Cn = `${wf}@2:${Iu}:`, u1 = { name: Iu, logger: "error" }, l1 = { database: ":memory:" }, d1 = "crypto", md = "client_ed25519_seed", h1 = ae.ONE_DAY, f1 = "keychain", p1 = "0.3", g1 = "messages", y1 = "0.3", m1 = ae.SIX_HOURS, v1 = "publisher", Ef = "irn", _1 = "error", Sf = "wss://relay.walletconnect.com", vd = "wss://relay.walletconnect.org", b1 = "relayer", Bt = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, w1 = "_subscription", sn = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, E1 = ae.ONE_SECOND, S1 = "2.11.1", x1 = 1e4, I1 = "0.3", O1 = "WALLETCONNECT_CLIENT_ID", Or = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, T1 = "subscription", k1 = "0.3", C1 = ae.FIVE_SECONDS * 1e3, P1 = "pairing", N1 = "0.3", ni = { wc_pairingDelete: { req: { ttl: ae.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: ae.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: ae.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: ae.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: ae.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: ae.ONE_DAY, prompt: !1, tag: 0 } } }, ai = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, Wr = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, R1 = "history", A1 = "0.3", j1 = "expirer", Er = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, L1 = "0.3", Ba = "verify-api", Es = "https://verify.walletconnect.com", xc = "https://verify.walletconnect.org", M1 = [Es, xc], D1 = "echo", U1 = "https://echo.walletconnect.com";
class z1 {
  constructor(e, r) {
    this.core = e, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = f1, this.version = p1, this.initialized = !1, this.storagePrefix = Cn, this.init = async () => {
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
    }, this.core = e, this.logger = Ke.generateChildLogger(r, this.name);
  }
  get context() {
    return Ke.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, Xh(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Qh(e) : void 0;
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
class $1 {
  constructor(e, r, n) {
    this.core = e, this.logger = r, this.name = d1, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (s) => (this.isInitialized(), this.keychain.has(s)), this.getClientId = async () => {
      this.isInitialized();
      const s = await this.getClientSeed(), i = Ll(s);
      return zh(i.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const s = B_();
      return this.setPrivateKey(s.publicKey, s.privateKey);
    }, this.signJWT = async (s) => {
      this.isInitialized();
      const i = await this.getClientSeed(), a = Ll(i), o = bc();
      return await t_(o, s, h1, a);
    }, this.generateSharedKey = (s, i, a) => {
      this.isInitialized();
      const o = this.getPrivateKey(s), c = H_(o, i);
      return this.setSymKey(c, a);
    }, this.setSymKey = async (s, i) => {
      this.isInitialized();
      const a = i || G_(s);
      return await this.keychain.set(a, s), a;
    }, this.deleteKeyPair = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.deleteSymKey = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.encode = async (s, i, a) => {
      this.isInitialized();
      const o = Jh(a), c = Xi(i);
      if (Wl(o)) {
        const p = o.senderPublicKey, m = o.receiverPublicKey;
        s = await this.generateSharedKey(p, m);
      }
      const u = this.getSymKey(s), { type: l, senderPublicKey: f } = o;
      return J_({ type: l, symKey: u, message: c, senderPublicKey: f });
    }, this.decode = async (s, i, a) => {
      this.isInitialized();
      const o = e0(i, a);
      if (Wl(o)) {
        const c = o.receiverPublicKey, u = o.senderPublicKey;
        s = await this.generateSharedKey(c, u);
      }
      try {
        const c = this.getSymKey(s), u = X_({ symKey: c, encoded: i });
        return ma(u);
      } catch (c) {
        this.logger.error(`Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`), this.logger.error(c);
      }
    }, this.getPayloadType = (s) => {
      const i = zo(s);
      return to(i.type);
    }, this.getPayloadSenderPublicKey = (s) => {
      const i = zo(s);
      return i.senderPublicKey ? nr(i.senderPublicKey, rr) : void 0;
    }, this.core = e, this.logger = Ke.generateChildLogger(r, this.name), this.keychain = n || new z1(this.core, this.logger);
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
      e = this.keychain.get(md);
    } catch {
      e = bc(), await this.keychain.set(md, e);
    }
    return a1(e, "base16");
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
class V1 extends im {
  constructor(e, r) {
    super(e, r), this.logger = e, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = g1, this.version = y1, this.initialized = !1, this.storagePrefix = Cn, this.init = async () => {
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
      const i = Os(s);
      let a = this.messages.get(n);
      return typeof a > "u" && (a = {}), typeof a[i] < "u" || (a[i] = s, this.messages.set(n, a), await this.persist()), i;
    }, this.get = (n) => {
      this.isInitialized();
      let s = this.messages.get(n);
      return typeof s > "u" && (s = {}), s;
    }, this.has = (n, s) => {
      this.isInitialized();
      const i = this.get(n), a = Os(s);
      return typeof i[a] < "u";
    }, this.del = async (n) => {
      this.isInitialized(), this.messages.delete(n), await this.persist();
    }, this.logger = Ke.generateChildLogger(e, this.name), this.core = r;
  }
  get context() {
    return Ke.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, Xh(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Qh(e) : void 0;
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
class q1 extends om {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.events = new Ur.EventEmitter(), this.name = v1, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = ae.toMiliseconds(ae.TEN_SECONDS * 2), this.needsTransportRestart = !1, this.publish = async (n, s, i) => {
      var a;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: s, opts: i } });
      try {
        const o = (i == null ? void 0 : i.ttl) || m1, c = wc(i), u = (i == null ? void 0 : i.prompt) || !1, l = (i == null ? void 0 : i.tag) || 0, f = (i == null ? void 0 : i.id) || cf().toString(), p = { topic: n, message: s, opts: { ttl: o, relay: c, prompt: u, tag: l, id: f } }, m = setTimeout(() => this.queue.set(f, p), this.publishTimeout);
        try {
          await await yi(this.rpcPublish(n, s, o, c, u, l, f), this.publishTimeout, `Failed to publish payload, please try again. id:${f} tag:${l}`), this.removeRequestFromQueue(f), this.relayer.events.emit(Bt.publish, p);
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
    }, this.relayer = e, this.logger = Ke.generateChildLogger(r, this.name), this.registerEventListeners();
  }
  get context() {
    return Ke.getLoggerContext(this.logger);
  }
  rpcPublish(e, r, n, s, i, a, o) {
    var c, u, l, f;
    const p = { method: No(s.protocol).publish, params: { topic: e, message: r, ttl: n, prompt: i, tag: a }, id: o };
    return er((c = p.params) == null ? void 0 : c.prompt) && ((u = p.params) == null || delete u.prompt), er((l = p.params) == null ? void 0 : l.tag) && ((f = p.params) == null || delete f.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: p }), this.relayer.request(p);
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
    this.relayer.core.heartbeat.on(Zs.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(Bt.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(Bt.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
}
class Z1 {
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
var F1 = Object.defineProperty, K1 = Object.defineProperties, W1 = Object.getOwnPropertyDescriptors, _d = Object.getOwnPropertySymbols, B1 = Object.prototype.hasOwnProperty, H1 = Object.prototype.propertyIsEnumerable, bd = (t, e, r) => e in t ? F1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, si = (t, e) => {
  for (var r in e || (e = {}))
    B1.call(e, r) && bd(t, r, e[r]);
  if (_d)
    for (var r of _d(e))
      H1.call(e, r) && bd(t, r, e[r]);
  return t;
}, Ha = (t, e) => K1(t, W1(e));
class G1 extends um {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new Z1(), this.events = new Ur.EventEmitter(), this.name = T1, this.version = k1, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Cn, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (n, s) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: s } });
      try {
        const i = wc(s), a = { topic: n, relay: i };
        this.pending.set(n, a);
        const o = await this.rpcSubscribe(n, i);
        return this.onSubscribe(o, a), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: s } }), o;
      } catch (i) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(i), i;
      }
    }, this.unsubscribe = async (n, s) => {
      await this.restartToComplete(), this.isInitialized(), typeof (s == null ? void 0 : s.id) < "u" ? await this.unsubscribeById(n, s.id, s) : await this.unsubscribeByTopic(n, s);
    }, this.isSubscribed = async (n) => {
      if (this.topics.includes(n))
        return !0;
      const s = `${this.pendingSubscriptionWatchLabel}_${n}`;
      return await new Promise((i, a) => {
        const o = new ae.Watch();
        o.start(s);
        const c = setInterval(() => {
          !this.pending.has(n) && this.topics.includes(n) && (clearInterval(c), o.stop(s), i(!0)), o.elapsed(s) >= C1 && (clearInterval(c), o.stop(s), a(new Error("Subscription resolution timeout")));
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
    }, this.relayer = e, this.logger = Ke.generateChildLogger(r, this.name), this.clientId = "";
  }
  get context() {
    return Ke.getLoggerContext(this.logger);
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
      const s = wc(n);
      await this.rpcUnsubscribe(e, r, s);
      const i = ft("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, r, i), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: n } });
    } catch (s) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s), s;
    }
  }
  async rpcSubscribe(e, r) {
    const n = { method: No(r.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      await await yi(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(Bt.connection_stalled);
    }
    return Os(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const r = e[0].relay, n = { method: No(r.protocol).batchSubscribe, params: { topics: e.map((s) => s.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      return await await yi(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(Bt.connection_stalled);
    }
  }
  rpcUnsubscribe(e, r, n) {
    const s = { method: No(n.protocol).unsubscribe, params: { topic: e, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s }), this.relayer.request(s);
  }
  onSubscribe(e, r) {
    this.setSubscription(e, Ha(si({}, r), { id: e })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((r) => {
      this.setSubscription(r.id, si({}, r)), this.pending.delete(r.topic);
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
    this.subscriptions.set(e, si({}, r)), this.topicMap.set(r.topic, e), this.events.emit(Or.created, r);
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
    this.subscriptions.delete(e), this.topicMap.delete(n.topic, e), this.events.emit(Or.deleted, Ha(si({}, n), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(Or.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < e; r++) {
        const n = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(n);
      }
    }
    this.events.emit(Or.resubscribed);
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
    no(r) && this.onBatchSubscribe(r.map((n, s) => Ha(si({}, e[s]), { id: n })));
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
    this.relayer.core.heartbeat.on(Zs.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(Bt.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(Bt.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(Or.created, async (e) => {
      const r = Or.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    }), this.events.on(Or.deleted, async (e) => {
      const r = Or.deleted;
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
var Y1 = Object.defineProperty, wd = Object.getOwnPropertySymbols, J1 = Object.prototype.hasOwnProperty, X1 = Object.prototype.propertyIsEnumerable, Ed = (t, e, r) => e in t ? Y1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Q1 = (t, e) => {
  for (var r in e || (e = {}))
    J1.call(e, r) && Ed(t, r, e[r]);
  if (wd)
    for (var r of wd(e))
      X1.call(e, r) && Ed(t, r, e[r]);
  return t;
};
class eE extends am {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new Ur.EventEmitter(), this.name = b1, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.requestsInFlight = /* @__PURE__ */ new Map(), this.request = async (r) => {
      this.logger.debug("Publishing Request Payload");
      const n = r.id, s = this.provider.request(r);
      this.requestsInFlight.set(n, { promise: s, request: r });
      try {
        return await this.toEstablishConnection(), await s;
      } catch (i) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(i), i;
      } finally {
        this.requestsInFlight.delete(n);
      }
    }, this.onPayloadHandler = (r) => {
      this.onProviderPayload(r);
    }, this.onConnectHandler = () => {
      this.events.emit(Bt.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (r) => {
      this.logger.error(r), this.events.emit(Bt.error, r), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
    }, this.registerProviderListeners = () => {
      this.provider.on(sn.payload, this.onPayloadHandler), this.provider.on(sn.connect, this.onConnectHandler), this.provider.on(sn.disconnect, this.onDisconnectHandler), this.provider.on(sn.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? Ke.generateChildLogger(e.logger, this.name) : Ke.pino(Ke.getDefaultLoggerOptions({ level: e.logger || _1 })), this.messages = new V1(this.logger, e.core), this.subscriber = new G1(this, this.logger), this.publisher = new q1(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || Sf, this.projectId = e.projectId, this.bundleId = o0(), this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${vd}...`), await this.restartTransport(vd);
    }
    this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, x1);
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
    let s = ((n = this.subscriber.topicMap.get(e)) == null ? void 0 : n[0]) || "";
    if (s)
      return s;
    let i;
    const a = (o) => {
      o.topic === e && (this.subscriber.off(Or.created, a), i());
    };
    return await Promise.all([new Promise((o) => {
      i = o, this.subscriber.on(Or.created, a);
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
    })), this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await yi(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
  }
  async transportOpen(e) {
    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
      e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
      try {
        await Promise.all([new Promise((r) => {
          if (!this.initialized)
            return r();
          this.subscriber.once(Or.resubscribed, () => {
            r();
          });
        }), new Promise(async (r, n) => {
          try {
            await yi(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
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
    if (!await nd())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((r) => e.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new Tb(new Nb(h0({ sdkVersion: S1, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0, bundleId: this.bundleId }))), this.registerProviderListeners();
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
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), xu(e)) {
      if (!e.method.endsWith(w1))
        return;
      const r = e.params, { topic: n, message: s, publishedAt: i } = r.data, a = { topic: n, message: s, publishedAt: i };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Q1({ type: "event", event: r.id }, a)), this.events.emit(r.id, a), await this.acknowledgePayload(e), await this.onMessageEvent(a);
    } else
      xa(e) && this.events.emit(Bt.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(Bt.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const r = Eu(e.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(sn.payload, this.onPayloadHandler), this.provider.off(sn.connect, this.onConnectHandler), this.provider.off(sn.disconnect, this.onDisconnectHandler), this.provider.off(sn.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(Bt.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let e = await nd();
    ob(async (r) => {
      this.initialized && e !== r && (e = r, r ? await this.restartTransport().catch((n) => this.logger.error(n)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((n) => this.logger.error(n))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(Bt.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((e) => this.logger.error(e));
    }, ae.toMiliseconds(E1)));
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
var tE = Object.defineProperty, Sd = Object.getOwnPropertySymbols, rE = Object.prototype.hasOwnProperty, nE = Object.prototype.propertyIsEnumerable, xd = (t, e, r) => e in t ? tE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Id = (t, e) => {
  for (var r in e || (e = {}))
    rE.call(e, r) && xd(t, r, e[r]);
  if (Sd)
    for (var r of Sd(e))
      nE.call(e, r) && xd(t, r, e[r]);
  return t;
};
class Oa extends cm {
  constructor(e, r, n, s = Cn, i = void 0) {
    super(e, r, n, s), this.core = e, this.logger = r, this.name = n, this.map = /* @__PURE__ */ new Map(), this.version = I1, this.cached = [], this.initialized = !1, this.storagePrefix = Cn, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((a) => {
        this.getKey && a !== null && !er(a) ? this.map.set(this.getKey(a), a) : D0(a) ? this.map.set(a.id, a) : U0(a) && this.map.set(a.topic, a);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (a, o) => {
      this.isInitialized(), this.map.has(a) ? await this.update(a, o) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: a, value: o }), this.map.set(a, o), await this.persist());
    }, this.get = (a) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: a }), this.getData(a)), this.getAll = (a) => (this.isInitialized(), a ? this.values.filter((o) => Object.keys(a).every((c) => Ab(o[c], a[c]))) : this.values), this.update = async (a, o) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: a, update: o });
      const c = Id(Id({}, this.getData(a)), o);
      this.map.set(a, c), await this.persist();
    }, this.delete = async (a, o) => {
      this.isInitialized(), this.map.has(a) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: a, reason: o }), this.map.delete(a), await this.persist());
    }, this.logger = Ke.generateChildLogger(r, this.name), this.storagePrefix = s, this.getKey = i;
  }
  get context() {
    return Ke.getLoggerContext(this.logger);
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
class sE {
  constructor(e, r) {
    this.core = e, this.logger = r, this.name = P1, this.version = N1, this.events = new au(), this.initialized = !1, this.storagePrefix = Cn, this.ignoredPayloadTypes = [ls], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: n }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...n])];
    }, this.create = async () => {
      this.isInitialized();
      const n = bc(), s = await this.core.crypto.setSymKey(n), i = gr(ae.FIVE_MINUTES), a = { protocol: Ef }, o = { topic: s, expiry: i, relay: a, active: !1 }, c = k0({ protocol: this.core.protocol, version: this.core.version, topic: s, symKey: n, relay: a, expiryTimestamp: i });
      return await this.pairings.set(s, o), await this.core.relayer.subscribe(s), this.core.expirer.set(s, i), { topic: s, uri: c };
    }, this.pair = async (n) => {
      this.isInitialized(), this.isValidPair(n);
      const { topic: s, symKey: i, relay: a, expiryTimestamp: o } = Xl(n.uri);
      let c;
      if (this.pairings.keys.includes(s) && (c = this.pairings.get(s), c.active))
        throw new Error(`Pairing already exists: ${s}. Please try again with a new connection URI.`);
      const u = o || gr(ae.FIVE_MINUTES), l = { topic: s, relay: a, expiry: u, active: !1 };
      return await this.pairings.set(s, l), this.core.expirer.set(s, u), n.activatePairing && await this.activate({ topic: s }), this.events.emit(ai.create, l), this.core.crypto.keychain.has(s) || (await this.core.crypto.setSymKey(i, s), await this.core.relayer.subscribe(s, { relay: a })), l;
    }, this.activate = async ({ topic: n }) => {
      this.isInitialized();
      const s = gr(ae.THIRTY_DAYS);
      await this.pairings.update(n, { active: !0, expiry: s }), this.core.expirer.set(n, s);
    }, this.ping = async (n) => {
      this.isInitialized(), await this.isValidPing(n);
      const { topic: s } = n;
      if (this.pairings.keys.includes(s)) {
        const i = await this.sendRequest(s, "wc_pairingPing", {}), { done: a, resolve: o, reject: c } = vs();
        this.events.once(xt("pairing_ping", i), ({ error: u }) => {
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
      this.pairings.keys.includes(s) && (await this.sendRequest(s, "wc_pairingDelete", ft("USER_DISCONNECTED")), await this.deletePairing(s));
    }, this.sendRequest = async (n, s, i) => {
      const a = Ts(s, i), o = await this.core.crypto.encode(n, a), c = ni[s].req;
      return this.core.history.set(n, a), this.core.relayer.publish(n, o, c), a.id;
    }, this.sendResult = async (n, s, i) => {
      const a = Eu(n, i), o = await this.core.crypto.encode(s, a), c = await this.core.history.get(s, n), u = ni[c.request.method].res;
      await this.core.relayer.publish(s, o, u), await this.core.history.resolve(a);
    }, this.sendError = async (n, s, i) => {
      const a = Su(n, i), o = await this.core.crypto.encode(s, a), c = await this.core.history.get(s, n), u = ni[c.request.method] ? ni[c.request.method].res : ni.unregistered_method.res;
      await this.core.relayer.publish(s, o, u), await this.core.history.resolve(a);
    }, this.deletePairing = async (n, s) => {
      await this.core.relayer.unsubscribe(n), await Promise.all([this.pairings.delete(n, ft("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(n), s ? Promise.resolve() : this.core.expirer.del(n)]);
    }, this.cleanup = async () => {
      const n = this.pairings.getAll().filter((s) => xn(s.expiry));
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
        this.isValidPing({ topic: n }), await this.sendResult(i, n, !0), this.events.emit(ai.ping, { id: i, topic: n });
      } catch (a) {
        await this.sendError(i, n, a), this.logger.error(a);
      }
    }, this.onPairingPingResponse = (n, s) => {
      const { id: i } = s;
      setTimeout(() => {
        cn(s) ? this.events.emit(xt("pairing_ping", i), {}) : Tr(s) && this.events.emit(xt("pairing_ping", i), { error: s.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (n, s) => {
      const { id: i } = s;
      try {
        this.isValidDisconnect({ topic: n }), await this.deletePairing(n), this.events.emit(ai.delete, { id: i, topic: n });
      } catch (a) {
        await this.sendError(i, n, a), this.logger.error(a);
      }
    }, this.onUnknownRpcMethodRequest = async (n, s) => {
      const { id: i, method: a } = s;
      try {
        if (this.registeredMethods.includes(a))
          return;
        const o = ft("WC_METHOD_UNSUPPORTED", a);
        await this.sendError(i, n, o), this.logger.error(o);
      } catch (o) {
        await this.sendError(i, n, o), this.logger.error(o);
      }
    }, this.onUnknownRpcMethodResponse = (n) => {
      this.registeredMethods.includes(n) || this.logger.error(ft("WC_METHOD_UNSUPPORTED", n));
    }, this.isValidPair = (n) => {
      var s;
      if (!cr(n)) {
        const { message: a } = J("MISSING_OR_INVALID", `pair() params: ${n}`);
        throw new Error(a);
      }
      if (!M0(n.uri)) {
        const { message: a } = J("MISSING_OR_INVALID", `pair() uri: ${n.uri}`);
        throw new Error(a);
      }
      const i = Xl(n.uri);
      if (!((s = i == null ? void 0 : i.relay) != null && s.protocol)) {
        const { message: a } = J("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw new Error(a);
      }
      if (!(i != null && i.symKey)) {
        const { message: a } = J("MISSING_OR_INVALID", "pair() uri#symKey");
        throw new Error(a);
      }
      if (i != null && i.expiryTimestamp && ae.toMiliseconds(i == null ? void 0 : i.expiryTimestamp) < Date.now()) {
        const { message: a } = J("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
        throw new Error(a);
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
      if (xn(this.pairings.get(n).expiry)) {
        await this.deletePairing(n);
        const { message: s } = J("EXPIRED", `pairing topic: ${n}`);
        throw new Error(s);
      }
    }, this.core = e, this.logger = Ke.generateChildLogger(r, this.name), this.pairings = new Oa(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return Ke.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = J("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(Bt.message, async (e) => {
      const { topic: r, message: n } = e;
      if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n)))
        return;
      const s = await this.core.crypto.decode(r, n);
      try {
        xu(s) ? (this.core.history.set(r, s), this.onRelayEventRequest({ topic: r, payload: s })) : xa(s) && (await this.core.history.resolve(s), await this.onRelayEventResponse({ topic: r, payload: s }), this.core.history.delete(r, s.id));
      } catch (i) {
        this.logger.error(i);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(Er.expired, async (e) => {
      const { topic: r } = tf(e.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit(ai.expire, { topic: r }));
    });
  }
}
class iE extends sm {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new Ur.EventEmitter(), this.name = R1, this.version = A1, this.cached = [], this.initialized = !1, this.storagePrefix = Cn, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.records.set(n.id, n)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (n, s, i) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: n, request: s, chainId: i }), this.records.has(s.id))
        return;
      const a = { id: s.id, topic: n, request: { method: s.method, params: s.params || null }, chainId: i, expiry: gr(ae.THIRTY_DAYS) };
      this.records.set(a.id, a), this.events.emit(Wr.created, a);
    }, this.resolve = async (n) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: n }), !this.records.has(n.id))
        return;
      const s = await this.getRecord(n.id);
      typeof s.response > "u" && (s.response = Tr(n) ? { error: n.error } : { result: n.result }, this.records.set(s.id, s), this.events.emit(Wr.updated, s));
    }, this.get = async (n, s) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: n, id: s }), await this.getRecord(s)), this.delete = (n, s) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: s }), this.values.forEach((i) => {
        if (i.topic === n) {
          if (typeof s < "u" && i.id !== s)
            return;
          this.records.delete(i.id), this.events.emit(Wr.deleted, i);
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
    }, this.logger = Ke.generateChildLogger(r, this.name);
  }
  get context() {
    return Ke.getLoggerContext(this.logger);
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
      const n = { topic: r.topic, request: Ts(r.request.method, r.request.params, r.id), chainId: r.chainId };
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
    await this.setJsonRpcRecords(this.values), this.events.emit(Wr.sync);
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
    this.events.on(Wr.created, (e) => {
      const r = Wr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(Wr.updated, (e) => {
      const r = Wr.updated;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(Wr.deleted, (e) => {
      const r = Wr.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.core.heartbeat.on(Zs.HEARTBEAT_EVENTS.pulse, () => {
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
class oE extends lm {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new Ur.EventEmitter(), this.name = j1, this.version = L1, this.cached = [], this.initialized = !1, this.storagePrefix = Cn, this.init = async () => {
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
      this.expirations.set(i, a), this.checkExpiry(i, a), this.events.emit(Er.created, { target: i, expiration: a });
    }, this.get = (n) => {
      this.isInitialized();
      const s = this.formatTarget(n);
      return this.getExpiration(s);
    }, this.del = (n) => {
      if (this.isInitialized(), this.has(n)) {
        const s = this.formatTarget(n), i = this.getExpiration(s);
        this.expirations.delete(s), this.events.emit(Er.deleted, { target: s, expiration: i });
      }
    }, this.on = (n, s) => {
      this.events.on(n, s);
    }, this.once = (n, s) => {
      this.events.once(n, s);
    }, this.off = (n, s) => {
      this.events.off(n, s);
    }, this.removeListener = (n, s) => {
      this.events.removeListener(n, s);
    }, this.logger = Ke.generateChildLogger(r, this.name);
  }
  get context() {
    return Ke.getLoggerContext(this.logger);
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
      return f0(e);
    if (typeof e == "number")
      return p0(e);
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
    await this.setExpirations(this.values), this.events.emit(Er.sync);
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
    this.expirations.delete(e), this.events.emit(Er.expired, { target: e, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, r) => this.checkExpiry(r, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(Zs.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(Er.created, (e) => {
      const r = Er.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(Er.expired, (e) => {
      const r = Er.expired;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(Er.deleted, (e) => {
      const r = Er.deleted;
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
class aE extends dm {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.name = Ba, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (n) => {
      if (this.verifyDisabled || Ws() || !Bs())
        return;
      const s = this.getVerifyUrl(n == null ? void 0 : n.verifyUrl);
      this.verifyUrl !== s && this.removeIframe(), this.verifyUrl = s;
      try {
        await this.createIframe();
      } catch (i) {
        this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(i);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = xc;
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
      } catch (a) {
        this.logger.info(`failed to resolve attestation: ${n.attestationId} from url: ${s}`), this.logger.info(a), i = await this.fetchAttestation(n.attestationId, xc);
      }
      return i;
    }, this.fetchAttestation = async (n, s) => {
      this.logger.info(`resolving attestation: ${n} from url: ${s}`);
      const i = this.startAbortTimer(ae.ONE_SECOND * 2), a = await fetch(`${s}/attestation/${n}`, { signal: this.abortController.signal });
      return clearTimeout(i), a.status === 200 ? await a.json() : void 0;
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
        if (document.getElementById(Ba))
          return i();
        window.addEventListener("message", s);
        const a = document.createElement("iframe");
        a.id = Ba, a.src = `${this.verifyUrl}/${this.projectId}`, a.style.display = "none", document.body.append(a), this.iframe = a, n = i;
      }), new Promise((i, a) => setTimeout(() => {
        window.removeEventListener("message", s), a("verify iframe load timeout");
      }, ae.toMiliseconds(ae.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
    }, this.getVerifyUrl = (n) => {
      let s = n || Es;
      return M1.includes(s) || (this.logger.info(`verify url: ${s}, not included in trusted list, assigning default: ${Es}`), s = Es), s;
    }, this.logger = Ke.generateChildLogger(r, this.name), this.verifyUrl = Es, this.abortController = new AbortController(), this.isDevEnv = vu() && process.env.IS_VITEST;
  }
  get context() {
    return Ke.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), ae.toMiliseconds(e));
  }
}
class cE extends hm {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.context = D1, this.registerDeviceToken = async (n) => {
      const { clientId: s, token: i, notificationType: a, enableEncrypted: o = !1 } = n, c = `${U1}/${this.projectId}/clients`;
      await Db(c, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: s, type: a, token: i, always_raw: o }) });
    }, this.logger = Ke.generateChildLogger(r, this.context);
  }
}
var uE = Object.defineProperty, Od = Object.getOwnPropertySymbols, lE = Object.prototype.hasOwnProperty, dE = Object.prototype.propertyIsEnumerable, Td = (t, e, r) => e in t ? uE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, kd = (t, e) => {
  for (var r in e || (e = {}))
    lE.call(e, r) && Td(t, r, e[r]);
  if (Od)
    for (var r of Od(e))
      dE.call(e, r) && Td(t, r, e[r]);
  return t;
};
class Ou extends nm {
  constructor(e) {
    super(e), this.protocol = wf, this.version = c1, this.name = Iu, this.events = new Ur.EventEmitter(), this.initialized = !1, this.on = (n, s) => this.events.on(n, s), this.once = (n, s) => this.events.once(n, s), this.off = (n, s) => this.events.off(n, s), this.removeListener = (n, s) => this.events.removeListener(n, s), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || Sf, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Ke.pino(Ke.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || u1.logger }));
    this.logger = Ke.generateChildLogger(r, this.name), this.heartbeat = new Zs.HeartBeat(), this.crypto = new $1(this, this.logger, e == null ? void 0 : e.keychain), this.history = new iE(this, this.logger), this.expirer = new oE(this, this.logger), this.storage = e != null && e.storage ? e.storage : new by(kd(kd({}, l1), e == null ? void 0 : e.storageOptions)), this.relayer = new eE({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new sE(this, this.logger), this.verify = new aE(this.projectId || "", this.logger), this.echoClient = new cE(this.projectId || "", this.logger);
  }
  static async init(e) {
    const r = new Ou(e);
    await r.initialize();
    const n = await r.crypto.getClientId();
    return await r.storage.setItem(O1, n), r;
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
const hE = Ou, xf = "wc", If = 2, Of = "client", Tu = `${xf}@${If}:${Of}:`, Ga = { name: Of, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, Cd = "WALLETCONNECT_DEEPLINK_CHOICE", fE = "proposal", pE = "Proposal expired", gE = "session", wo = ae.SEVEN_DAYS, yE = "engine", on = { wc_sessionPropose: { req: { ttl: ae.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: ae.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: ae.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: ae.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: ae.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: ae.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: ae.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: ae.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: ae.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: ae.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: ae.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: ae.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: ae.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: ae.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: ae.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: ae.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, Ya = { min: ae.FIVE_MINUTES, max: ae.SEVEN_DAYS }, an = { idle: "IDLE", active: "ACTIVE" }, mE = "request", vE = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var _E = Object.defineProperty, bE = Object.defineProperties, wE = Object.getOwnPropertyDescriptors, Pd = Object.getOwnPropertySymbols, EE = Object.prototype.hasOwnProperty, SE = Object.prototype.propertyIsEnumerable, Nd = (t, e, r) => e in t ? _E(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Xt = (t, e) => {
  for (var r in e || (e = {}))
    EE.call(e, r) && Nd(t, r, e[r]);
  if (Pd)
    for (var r of Pd(e))
      SE.call(e, r) && Nd(t, r, e[r]);
  return t;
}, ys = (t, e) => bE(t, wE(e));
class xE extends pm {
  constructor(e) {
    super(e), this.name = yE, this.events = new au(), this.initialized = !1, this.ignoredPayloadTypes = [ls], this.requestQueue = { state: an.idle, queue: [] }, this.sessionRequestQueue = { state: an.idle, queue: [] }, this.requestQueueDelay = ae.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({ methods: Object.keys(on) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, ae.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      await this.isInitialized();
      const n = ys(Xt({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(n);
      const { pairingTopic: s, requiredNamespaces: i, optionalNamespaces: a, sessionProperties: o, relays: c } = n;
      let u = s, l, f = !1;
      if (u && (f = this.client.core.pairing.pairings.get(u).active), !u || !f) {
        const { topic: w, uri: x } = await this.client.core.pairing.create();
        u = w, l = x;
      }
      const p = await this.client.core.crypto.generateKeyPair(), m = on.wc_sessionPropose.req.ttl || ae.FIVE_MINUTES, b = gr(m), E = Xt({ requiredNamespaces: i, optionalNamespaces: a, relays: c ?? [{ protocol: Ef }], proposer: { publicKey: p, metadata: this.client.metadata }, expiryTimestamp: b }, o && { sessionProperties: o }), { reject: T, resolve: M, done: v } = vs(m, pE);
      if (this.events.once(xt("session_connect"), async ({ error: w, session: x }) => {
        if (w)
          T(w);
        else if (x) {
          x.self.publicKey = p;
          const y = ys(Xt({}, x), { requiredNamespaces: E.requiredNamespaces, optionalNamespaces: E.optionalNamespaces });
          await this.client.session.set(x.topic, y), await this.setExpiry(x.topic, x.expiry), u && await this.client.core.pairing.updateMetadata({ topic: u, metadata: x.peer.metadata }), M(y);
        }
      }), !u) {
        const { message: w } = J("NO_MATCHING_KEY", `connect() pairing topic: ${u}`);
        throw new Error(w);
      }
      const O = await this.sendRequest({ topic: u, method: "wc_sessionPropose", params: E, throwOnFailedPublish: !0 });
      return await this.setProposal(O, Xt({ id: O }, E)), { uri: l, approval: v };
    }, this.pair = async (r) => (await this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      await this.isInitialized(), await this.isValidApprove(r);
      const { id: n, relayProtocol: s, namespaces: i, sessionProperties: a } = r, o = this.client.proposal.get(n);
      let { pairingTopic: c, proposer: u, requiredNamespaces: l, optionalNamespaces: f } = o;
      c = c || "";
      const p = await this.client.core.crypto.generateKeyPair(), m = u.publicKey, b = await this.client.core.crypto.generateSharedKey(p, m);
      c && n && (await this.client.core.pairing.updateMetadata({ topic: c, metadata: u.metadata }), await this.sendResult({ id: n, topic: c, result: { relay: { protocol: s ?? "irn" }, responderPublicKey: p } }), await this.client.proposal.delete(n, ft("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: c }));
      const E = Xt({ relay: { protocol: s ?? "irn" }, namespaces: i, pairingTopic: c, controller: { publicKey: p, metadata: this.client.metadata }, expiry: gr(wo) }, a && { sessionProperties: a });
      await this.client.core.relayer.subscribe(b);
      const T = ys(Xt({}, E), { topic: b, requiredNamespaces: l, optionalNamespaces: f, pairingTopic: c, acknowledged: !1, self: E.controller, peer: { publicKey: u.publicKey, metadata: u.metadata }, controller: p });
      await this.client.session.set(b, T);
      try {
        await this.sendRequest({ topic: b, method: "wc_sessionSettle", params: E, throwOnFailedPublish: !0 });
      } catch (M) {
        throw this.client.logger.error(M), this.client.session.delete(b, ft("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(b), M;
      }
      return await this.setExpiry(b, gr(wo)), { topic: b, acknowledged: () => new Promise((M) => setTimeout(() => M(this.client.session.get(b)), 500)) };
    }, this.reject = async (r) => {
      await this.isInitialized(), await this.isValidReject(r);
      const { id: n, reason: s } = r, { pairingTopic: i } = this.client.proposal.get(n);
      i && (await this.sendError(n, i, s), await this.client.proposal.delete(n, ft("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      await this.isInitialized(), await this.isValidUpdate(r);
      const { topic: n, namespaces: s } = r, i = await this.sendRequest({ topic: n, method: "wc_sessionUpdate", params: { namespaces: s } }), { done: a, resolve: o, reject: c } = vs();
      return this.events.once(xt("session_update", i), ({ error: u }) => {
        u ? c(u) : o();
      }), await this.client.session.update(n, { namespaces: s }), { acknowledged: a };
    }, this.extend = async (r) => {
      await this.isInitialized(), await this.isValidExtend(r);
      const { topic: n } = r, s = await this.sendRequest({ topic: n, method: "wc_sessionExtend", params: {} }), { done: i, resolve: a, reject: o } = vs();
      return this.events.once(xt("session_extend", s), ({ error: c }) => {
        c ? o(c) : a();
      }), await this.setExpiry(n, gr(wo)), { acknowledged: i };
    }, this.request = async (r) => {
      await this.isInitialized(), await this.isValidRequest(r);
      const { chainId: n, request: s, topic: i, expiry: a = on.wc_sessionRequest.req.ttl } = r, o = wu(), { done: c, resolve: u, reject: l } = vs(a, "Request expired. Please try again.");
      return this.events.once(xt("session_request", o), ({ error: f, result: p }) => {
        f ? l(f) : u(p);
      }), await Promise.all([new Promise(async (f) => {
        await this.sendRequest({ clientRpcId: o, topic: i, method: "wc_sessionRequest", params: { request: ys(Xt({}, s), { expiryTimestamp: gr(a) }), chainId: n }, expiry: a, throwOnFailedPublish: !0 }).catch((p) => l(p)), this.client.events.emit("session_request_sent", { topic: i, request: s, chainId: n, id: o }), f();
      }), new Promise(async (f) => {
        const p = await y0(this.client.core.storage, Cd);
        g0({ id: o, topic: i, wcDeepLink: p }), f();
      }), c()]).then((f) => f[2]);
    }, this.respond = async (r) => {
      await this.isInitialized(), await this.isValidRespond(r);
      const { topic: n, response: s } = r, { id: i } = s;
      cn(s) ? await this.sendResult({ id: i, topic: n, result: s.result, throwOnFailedPublish: !0 }) : Tr(s) && await this.sendError(i, n, s.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      await this.isInitialized(), await this.isValidPing(r);
      const { topic: n } = r;
      if (this.client.session.keys.includes(n)) {
        const s = await this.sendRequest({ topic: n, method: "wc_sessionPing", params: {} }), { done: i, resolve: a, reject: o } = vs();
        this.events.once(xt("session_ping", s), ({ error: c }) => {
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
      if (this.client.session.keys.includes(n))
        await this.sendRequest({ topic: n, method: "wc_sessionDelete", params: ft("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession({ topic: n, emitEvent: !1 });
      else if (this.client.core.pairing.pairings.keys.includes(n))
        await this.client.core.pairing.disconnect({ topic: n });
      else {
        const { message: s } = J("MISMATCHED_TOPIC", `Session or pairing topic not found: ${n}`);
        throw new Error(s);
      }
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((n) => j0(n, r))), this.getPendingSessionRequests = () => this.client.pendingRequest.getAll(), this.cleanupDuplicatePairings = async (r) => {
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
    }, this.deleteSession = async (r) => {
      const { topic: n, expirerHasDeleted: s = !1, emitEvent: i = !0, id: a = 0 } = r, { self: o } = this.client.session.get(n);
      await this.client.core.relayer.unsubscribe(n), await this.client.session.delete(n, ft("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(o.publicKey) && await this.client.core.crypto.deleteKeyPair(o.publicKey), this.client.core.crypto.keychain.has(n) && await this.client.core.crypto.deleteSymKey(n), s || this.client.core.expirer.del(n), this.client.core.storage.removeItem(Cd).catch((c) => this.client.logger.warn(c)), this.getPendingSessionRequests().forEach((c) => {
        c.topic === n && this.deletePendingSessionRequest(c.id, ft("USER_DISCONNECTED"));
      }), i && this.client.events.emit("session_delete", { id: a, topic: n });
    }, this.deleteProposal = async (r, n) => {
      await Promise.all([this.client.proposal.delete(r, ft("USER_DISCONNECTED")), n ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, n, s = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, n), s ? Promise.resolve() : this.client.core.expirer.del(r)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i) => i.id !== r), s && (this.sessionRequestQueue.state = an.idle, this.client.events.emit("session_request_expire", { id: r }));
    }, this.setExpiry = async (r, n) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: n }), this.client.core.expirer.set(r, n);
    }, this.setProposal = async (r, n) => {
      await this.client.proposal.set(r, n), this.client.core.expirer.set(r, gr(on.wc_sessionPropose.req.ttl));
    }, this.setPendingSessionRequest = async (r) => {
      const { id: n, topic: s, params: i, verifyContext: a } = r, o = i.request.expiryTimestamp || gr(on.wc_sessionRequest.req.ttl);
      await this.client.pendingRequest.set(n, { id: n, topic: s, params: i, verifyContext: a }), o && this.client.core.expirer.set(n, o);
    }, this.sendRequest = async (r) => {
      const { topic: n, method: s, params: i, expiry: a, relayRpcId: o, clientRpcId: c, throwOnFailedPublish: u } = r, l = Ts(s, i, c);
      if (Bs() && vE.includes(s)) {
        const m = Os(JSON.stringify(l));
        this.client.core.verify.register({ attestationId: m });
      }
      const f = await this.client.core.crypto.encode(n, l), p = on[s].req;
      return a && (p.ttl = a), o && (p.id = o), this.client.core.history.set(n, l), u ? (p.internal = ys(Xt({}, p.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(n, f, p)) : this.client.core.relayer.publish(n, f, p).catch((m) => this.client.logger.error(m)), l.id;
    }, this.sendResult = async (r) => {
      const { id: n, topic: s, result: i, throwOnFailedPublish: a } = r, o = Eu(n, i), c = await this.client.core.crypto.encode(s, o), u = await this.client.core.history.get(s, n), l = on[u.request.method].res;
      a ? (l.internal = ys(Xt({}, l.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(s, c, l)) : this.client.core.relayer.publish(s, c, l).catch((f) => this.client.logger.error(f)), await this.client.core.history.resolve(o);
    }, this.sendError = async (r, n, s) => {
      const i = Su(r, s), a = await this.client.core.crypto.encode(n, i), o = await this.client.core.history.get(n, r), c = on[o.request.method].res;
      this.client.core.relayer.publish(n, a, c), await this.client.core.history.resolve(i);
    }, this.cleanup = async () => {
      const r = [], n = [];
      this.client.session.getAll().forEach((s) => {
        let i = !1;
        xn(s.expiry) && (i = !0), this.client.core.crypto.keychain.has(s.topic) || (i = !0), i && r.push(s.topic);
      }), this.client.proposal.getAll().forEach((s) => {
        xn(s.expiryTimestamp) && n.push(s.id);
      }), await Promise.all([...r.map((s) => this.deleteSession({ topic: s })), ...n.map((s) => this.deleteProposal(s))]);
    }, this.onRelayEventRequest = async (r) => {
      this.requestQueue.queue.push(r), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === an.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = an.active;
        const r = this.requestQueue.queue.shift();
        if (r)
          try {
            this.processRequest(r), await new Promise((n) => setTimeout(n, 300));
          } catch (n) {
            this.client.logger.warn(n);
          }
      }
      this.requestQueue.state = an.idle;
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
        this.isValidConnect(Xt({}, n.params));
        const a = s.expiryTimestamp || gr(on.wc_sessionPropose.req.ttl), o = Xt({ id: i, pairingTopic: r, expiryTimestamp: a }, s);
        await this.setProposal(i, o);
        const c = Os(JSON.stringify(n)), u = await this.getVerifyContext(c, o.proposer.metadata);
        this.client.events.emit("session_proposal", { id: i, params: o, verifyContext: u });
      } catch (a) {
        await this.sendError(i, r, a), this.client.logger.error(a);
      }
    }, this.onSessionProposeResponse = async (r, n) => {
      const { id: s } = n;
      if (cn(n)) {
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
        const l = await this.client.core.relayer.subscribe(u);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: l }), await this.client.core.pairing.activate({ topic: r });
      } else
        Tr(n) && (await this.client.proposal.delete(s, ft("USER_DISCONNECTED")), this.events.emit(xt("session_connect"), { error: n.error }));
    }, this.onSessionSettleRequest = async (r, n) => {
      const { id: s, params: i } = n;
      try {
        this.isValidSessionSettleRequest(i);
        const { relay: a, controller: o, expiry: c, namespaces: u, sessionProperties: l, pairingTopic: f } = n.params, p = Xt({ topic: r, relay: a, expiry: c, namespaces: u, acknowledged: !0, pairingTopic: f, requiredNamespaces: {}, optionalNamespaces: {}, controller: o.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: o.publicKey, metadata: o.metadata } }, l && { sessionProperties: l });
        await this.sendResult({ id: n.id, topic: r, result: !0 }), this.events.emit(xt("session_connect"), { session: p }), this.cleanupDuplicatePairings(p);
      } catch (a) {
        await this.sendError(s, r, a), this.client.logger.error(a);
      }
    }, this.onSessionSettleResponse = async (r, n) => {
      const { id: s } = n;
      cn(n) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(xt("session_approve", s), {})) : Tr(n) && (await this.client.session.delete(r, ft("USER_DISCONNECTED")), this.events.emit(xt("session_approve", s), { error: n.error }));
    }, this.onSessionUpdateRequest = async (r, n) => {
      const { params: s, id: i } = n;
      try {
        const a = `${r}_session_update`, o = bo.get(a);
        if (o && this.isRequestOutOfSync(o, i)) {
          this.client.logger.info(`Discarding out of sync request - ${i}`);
          return;
        }
        this.isValidUpdate(Xt({ topic: r }, s)), await this.client.session.update(r, { namespaces: s.namespaces }), await this.sendResult({ id: i, topic: r, result: !0 }), this.client.events.emit("session_update", { id: i, topic: r, params: s }), bo.set(a, i);
      } catch (a) {
        await this.sendError(i, r, a), this.client.logger.error(a);
      }
    }, this.isRequestOutOfSync = (r, n) => parseInt(n.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, n) => {
      const { id: s } = n;
      cn(n) ? this.events.emit(xt("session_update", s), {}) : Tr(n) && this.events.emit(xt("session_update", s), { error: n.error });
    }, this.onSessionExtendRequest = async (r, n) => {
      const { id: s } = n;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, gr(wo)), await this.sendResult({ id: s, topic: r, result: !0 }), this.client.events.emit("session_extend", { id: s, topic: r });
      } catch (i) {
        await this.sendError(s, r, i), this.client.logger.error(i);
      }
    }, this.onSessionExtendResponse = (r, n) => {
      const { id: s } = n;
      cn(n) ? this.events.emit(xt("session_extend", s), {}) : Tr(n) && this.events.emit(xt("session_extend", s), { error: n.error });
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
        cn(n) ? this.events.emit(xt("session_ping", s), {}) : Tr(n) && this.events.emit(xt("session_ping", s), { error: n.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (r, n) => {
      const { id: s } = n;
      try {
        this.isValidDisconnect({ topic: r, reason: n.params }), await Promise.all([new Promise((i) => {
          this.client.core.relayer.once(Bt.publish, async () => {
            i(await this.deleteSession({ topic: r, id: s }));
          });
        }), this.sendResult({ id: s, topic: r, result: !0 }), this.cleanupPendingSentRequestsForTopic({ topic: r, error: ft("USER_DISCONNECTED") })]);
      } catch (i) {
        this.client.logger.error(i);
      }
    }, this.onSessionRequest = async (r, n) => {
      const { id: s, params: i } = n;
      try {
        this.isValidRequest(Xt({ topic: r }, i));
        const a = Os(JSON.stringify(Ts("wc_sessionRequest", i, s))), o = this.client.session.get(r), c = await this.getVerifyContext(a, o.peer.metadata), u = { id: s, topic: r, params: i, verifyContext: c };
        await this.setPendingSessionRequest(u), this.addSessionRequestToSessionRequestQueue(u), this.processSessionRequestQueue();
      } catch (a) {
        await this.sendError(s, r, a), this.client.logger.error(a);
      }
    }, this.onSessionRequestResponse = (r, n) => {
      const { id: s } = n;
      cn(n) ? this.events.emit(xt("session_request", s), { result: n.result }) : Tr(n) && this.events.emit(xt("session_request", s), { error: n.error });
    }, this.onSessionEventRequest = async (r, n) => {
      const { id: s, params: i } = n;
      try {
        const a = `${r}_session_event_${i.event.name}`, o = bo.get(a);
        if (o && this.isRequestOutOfSync(o, s)) {
          this.client.logger.info(`Discarding out of sync request - ${s}`);
          return;
        }
        this.isValidEmit(Xt({ topic: r }, i)), this.client.events.emit("session_event", { id: s, topic: r, params: i }), bo.set(a, s);
      } catch (a) {
        await this.sendError(s, r, a), this.client.logger.error(a);
      }
    }, this.addSessionRequestToSessionRequestQueue = (r) => {
      this.sessionRequestQueue.queue.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = an.idle, this.processSessionRequestQueue();
      }, ae.toMiliseconds(this.requestQueueDelay));
    }, this.cleanupPendingSentRequestsForTopic = ({ topic: r, error: n }) => {
      const s = this.client.core.history.pending;
      s.length > 0 && s.filter((i) => i.topic === r && i.request.method === "wc_sessionRequest").forEach((i) => {
        this.events.emit(xt("session_request", i.request.id), { error: n });
      });
    }, this.processSessionRequestQueue = () => {
      if (this.sessionRequestQueue.state === an.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const r = this.sessionRequestQueue.queue[0];
      if (!r) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = an.active, this.client.events.emit("session_request", r);
      } catch (n) {
        this.client.logger.error(n);
      }
    }, this.onPairingCreated = (r) => {
      if (r.active)
        return;
      const n = this.client.proposal.getAll().find((s) => s.pairingTopic === r.topic);
      n && this.onSessionProposeRequest(r.topic, Ts("wc_sessionPropose", { requiredNamespaces: n.requiredNamespaces, optionalNamespaces: n.optionalNamespaces, relays: n.relays, proposer: n.proposer, sessionProperties: n.sessionProperties }, n.id));
    }, this.isValidConnect = async (r) => {
      if (!cr(r)) {
        const { message: c } = J("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(c);
      }
      const { pairingTopic: n, requiredNamespaces: s, optionalNamespaces: i, sessionProperties: a, relays: o } = r;
      if (er(n) || await this.isValidPairingTopic(n), !W0(o, !0)) {
        const { message: c } = J("MISSING_OR_INVALID", `connect() relays: ${o}`);
        throw new Error(c);
      }
      !er(s) && $o(s) !== 0 && this.validateNamespaces(s, "requiredNamespaces"), !er(i) && $o(i) !== 0 && this.validateNamespaces(i, "optionalNamespaces"), er(a) || this.validateSessionProps(a, "sessionProperties");
    }, this.validateNamespaces = (r, n) => {
      const s = K0(r, "connect()", n);
      if (s)
        throw new Error(s.message);
    }, this.isValidApprove = async (r) => {
      if (!cr(r))
        throw new Error(J("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: n, namespaces: s, relayProtocol: i, sessionProperties: a } = r;
      await this.isValidProposalId(n);
      const o = this.client.proposal.get(n), c = Fa(s, "approve()");
      if (c)
        throw new Error(c.message);
      const u = td(o.requiredNamespaces, s, "approve()");
      if (u)
        throw new Error(u.message);
      if (!jt(i, !0)) {
        const { message: l } = J("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
        throw new Error(l);
      }
      er(a) || this.validateSessionProps(a, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!cr(r)) {
        const { message: i } = J("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(i);
      }
      const { id: n, reason: s } = r;
      if (await this.isValidProposalId(n), !H0(s)) {
        const { message: i } = J("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s)}`);
        throw new Error(i);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!cr(r)) {
        const { message: u } = J("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(u);
      }
      const { relay: n, controller: s, namespaces: i, expiry: a } = r;
      if (!nf(n)) {
        const { message: u } = J("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(u);
      }
      const o = z0(s, "onSessionSettleRequest()");
      if (o)
        throw new Error(o.message);
      const c = Fa(i, "onSessionSettleRequest()");
      if (c)
        throw new Error(c.message);
      if (xn(a)) {
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
      const i = this.client.session.get(n), a = Fa(s, "update()");
      if (a)
        throw new Error(a.message);
      const o = td(i.requiredNamespaces, s, "update()");
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
      if (!ed(o, i)) {
        const { message: c } = J("MISSING_OR_INVALID", `request() chainId: ${i}`);
        throw new Error(c);
      }
      if (!G0(s)) {
        const { message: c } = J("MISSING_OR_INVALID", `request() ${JSON.stringify(s)}`);
        throw new Error(c);
      }
      if (!X0(o, i, s.method)) {
        const { message: c } = J("MISSING_OR_INVALID", `request() method: ${s.method}`);
        throw new Error(c);
      }
      if (a && !rb(a, Ya)) {
        const { message: c } = J("MISSING_OR_INVALID", `request() expiry: ${a}. Expiry must be a number (in seconds) between ${Ya.min} and ${Ya.max}`);
        throw new Error(c);
      }
    }, this.isValidRespond = async (r) => {
      var n;
      if (!cr(r)) {
        const { message: a } = J("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(a);
      }
      const { topic: s, response: i } = r;
      try {
        await this.isValidSessionTopic(s);
      } catch (a) {
        throw (n = r == null ? void 0 : r.response) != null && n.id && this.cleanupAfterResponse(r), a;
      }
      if (!Y0(i)) {
        const { message: a } = J("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
        throw new Error(a);
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
      if (!ed(a, i)) {
        const { message: o } = J("MISSING_OR_INVALID", `emit() chainId: ${i}`);
        throw new Error(o);
      }
      if (!J0(s)) {
        const { message: o } = J("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(o);
      }
      if (!Q0(a, i, s.name)) {
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
      const s = { verified: { verifyUrl: n.verifyUrl || Es, validation: "UNKNOWN", origin: n.url || "" } };
      try {
        const i = await this.client.core.verify.resolve({ attestationId: r, verifyUrl: n.verifyUrl });
        i && (s.verified.origin = i.origin, s.verified.isScam = i.isScam, s.verified.validation = i.origin === new URL(n.url).origin ? "VALID" : "INVALID");
      } catch (i) {
        this.client.logger.info(i);
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
    this.client.core.relayer.on(Bt.message, async (e) => {
      const { topic: r, message: n } = e;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(n)))
        return;
      const s = await this.client.core.crypto.decode(r, n);
      try {
        xu(s) ? (this.client.core.history.set(r, s), this.onRelayEventRequest({ topic: r, payload: s })) : xa(s) ? (await this.client.core.history.resolve(s), await this.onRelayEventResponse({ topic: r, payload: s }), this.client.core.history.delete(r, s.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: s });
      } catch (i) {
        this.client.logger.error(i);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(Er.expired, async (e) => {
      const { topic: r, id: n } = tf(e.target);
      if (n && this.client.pendingRequest.keys.includes(n))
        return await this.deletePendingSessionRequest(n, J("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession({ topic: r, expirerHasDeleted: !0 }), this.client.events.emit("session_expire", { topic: r })) : n && (await this.deleteProposal(n, !0), this.client.events.emit("proposal_expire", { id: n }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(ai.create, (e) => this.onPairingCreated(e));
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
    if (xn(this.client.core.pairing.pairings.get(e).expiry)) {
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
    if (xn(this.client.session.get(e).expiry)) {
      await this.deleteSession({ topic: e });
      const { message: r } = J("EXPIRED", `session topic: ${e}`);
      throw new Error(r);
    }
    if (!this.client.core.crypto.keychain.has(e)) {
      const { message: r } = J("MISSING_OR_INVALID", `session topic does not exist in keychain: ${e}`);
      throw await this.deleteSession({ topic: e }), new Error(r);
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
    if (!B0(e)) {
      const { message: r } = J("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: r } = J("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (xn(this.client.proposal.get(e).expiryTimestamp)) {
      await this.deleteProposal(e);
      const { message: r } = J("EXPIRED", `proposal id: ${e}`);
      throw new Error(r);
    }
  }
}
class IE extends Oa {
  constructor(e, r) {
    super(e, r, fE, Tu), this.core = e, this.logger = r;
  }
}
class OE extends Oa {
  constructor(e, r) {
    super(e, r, gE, Tu), this.core = e, this.logger = r;
  }
}
class TE extends Oa {
  constructor(e, r) {
    super(e, r, mE, Tu, (n) => n.id), this.core = e, this.logger = r;
  }
}
class ku extends fm {
  constructor(e) {
    super(e), this.protocol = xf, this.version = If, this.name = Ga.name, this.events = new Ur.EventEmitter(), this.on = (n, s) => this.events.on(n, s), this.once = (n, s) => this.events.once(n, s), this.off = (n, s) => this.events.off(n, s), this.removeListener = (n, s) => this.events.removeListener(n, s), this.removeAllListeners = (n) => this.events.removeAllListeners(n), this.connect = async (n) => {
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
    }, this.name = (e == null ? void 0 : e.name) || Ga.name, this.metadata = (e == null ? void 0 : e.metadata) || c0();
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Ke.pino(Ke.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || Ga.logger }));
    this.core = (e == null ? void 0 : e.core) || new hE(e), this.logger = Ke.generateChildLogger(r, this.name), this.session = new OE(this.core, this.logger), this.proposal = new IE(this.core, this.logger), this.pendingRequest = new TE(this.core, this.logger), this.engine = new xE(this);
  }
  static async init(e) {
    const r = new ku(e);
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
var kE = Object.defineProperty, CE = Object.defineProperties, PE = Object.getOwnPropertyDescriptors, Rd = Object.getOwnPropertySymbols, NE = Object.prototype.hasOwnProperty, RE = Object.prototype.propertyIsEnumerable, Ad = (t, e, r) => e in t ? kE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, AE = (t, e) => {
  for (var r in e || (e = {}))
    NE.call(e, r) && Ad(t, r, e[r]);
  if (Rd)
    for (var r of Rd(e))
      RE.call(e, r) && Ad(t, r, e[r]);
  return t;
}, jE = (t, e) => CE(t, PE(e)), Cu = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, ut = (t, e, r) => (Cu(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Kn = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, Zo = (t, e, r, n) => (Cu(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), Ft = (t, e, r) => (Cu(t, e, "access private method"), r), Wn, _s, ci, At, Ic, Tf, Kt, Qt, Oc, jd;
let LE = class {
  constructor(t) {
    Kn(this, Ic), Kn(this, Kt), Kn(this, Oc), Kn(this, Wn, void 0), Kn(this, _s, void 0), Kn(this, ci, void 0), Kn(this, At, void 0), Zo(this, Wn, t), Zo(this, _s, Ft(this, Ic, Tf).call(this)), Ft(this, Kt, Qt).call(this);
  }
  async connect(t) {
    const { requiredNamespaces: e, optionalNamespaces: r } = t;
    return new Promise(async (n, s) => {
      await Ft(this, Kt, Qt).call(this);
      const i = ut(this, _s).subscribeModal((c) => {
        c.open || (i(), s(new Error("Modal closed")));
      }), { uri: a, approval: o } = await ut(this, At).connect(t);
      if (a) {
        const c = /* @__PURE__ */ new Set();
        e && Object.values(e).forEach(({ chains: u }) => {
          u && u.forEach((l) => c.add(l));
        }), r && Object.values(r).forEach(({ chains: u }) => {
          u && u.forEach((l) => c.add(l));
        }), await ut(this, _s).openModal({ uri: a, chains: Array.from(c) });
      }
      try {
        const c = await o();
        n(c);
      } catch (c) {
        s(c);
      } finally {
        i(), ut(this, _s).closeModal();
      }
    });
  }
  async disconnect(t) {
    await Ft(this, Kt, Qt).call(this), await ut(this, At).disconnect(t);
  }
  async request(t) {
    return await Ft(this, Kt, Qt).call(this), await ut(this, At).request(t);
  }
  async getSessions() {
    return await Ft(this, Kt, Qt).call(this), ut(this, At).session.getAll();
  }
  async getSession() {
    return await Ft(this, Kt, Qt).call(this), ut(this, At).session.getAll().at(-1);
  }
  async onSessionEvent(t) {
    await Ft(this, Kt, Qt).call(this), ut(this, At).on("session_event", t);
  }
  async offSessionEvent(t) {
    await Ft(this, Kt, Qt).call(this), ut(this, At).off("session_event", t);
  }
  async onSessionUpdate(t) {
    await Ft(this, Kt, Qt).call(this), ut(this, At).on("session_update", t);
  }
  async offSessionUpdate(t) {
    await Ft(this, Kt, Qt).call(this), ut(this, At).off("session_update", t);
  }
  async onSessionDelete(t) {
    await Ft(this, Kt, Qt).call(this), ut(this, At).on("session_delete", t);
  }
  async offSessionDelete(t) {
    await Ft(this, Kt, Qt).call(this), ut(this, At).off("session_delete", t);
  }
  async onSessionExpire(t) {
    await Ft(this, Kt, Qt).call(this), ut(this, At).on("session_expire", t);
  }
  async offSessionExpire(t) {
    await Ft(this, Kt, Qt).call(this), ut(this, At).off("session_expire", t);
  }
};
Wn = /* @__PURE__ */ new WeakMap(), _s = /* @__PURE__ */ new WeakMap(), ci = /* @__PURE__ */ new WeakMap(), At = /* @__PURE__ */ new WeakMap(), Ic = /* @__PURE__ */ new WeakSet(), Tf = function() {
  const { modalOptions: t, projectId: e } = ut(this, Wn);
  return new Mg(jE(AE({}, t), { projectId: e }));
}, Kt = /* @__PURE__ */ new WeakSet(), Qt = async function() {
  return ut(this, At) ? !0 : (!ut(this, ci) && typeof window < "u" && Zo(this, ci, Ft(this, Oc, jd).call(this)), ut(this, ci));
}, Oc = /* @__PURE__ */ new WeakSet(), jd = async function() {
  Zo(this, At, await ku.init({ metadata: ut(this, Wn).metadata, projectId: ut(this, Wn).projectId, relayUrl: ut(this, Wn).relayUrl }));
  const t = await ut(this, At).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", t);
  } catch {
    console.info("Unable to set client id");
  }
};
const Pu = [
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
], Ta = ["aleo:1"], Nu = ["chainChanged", "accountSelected", "selectedAccountSynced", "sharedAccountSynced"], ME = "f0aaeffe71b636da453fce042d79d723", DE = {
  standaloneChains: Ta,
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
}, T6 = {
  requiredNamespaces: {
    aleo: {
      methods: Pu,
      chains: Ta,
      events: Nu
    }
  }
}, UE = "@puzzlehq/sdk-core", zE = "Puzzle SDK", $E = "0.2.18", VE = "Your portal to privacy", qE = "./dist/puzzle.cjs.js", ZE = "./dist/puzzle.es.js", FE = "./dist/puzzle.umd.js", KE = "./dist/types/index.d.ts", WE = {
  ".": {
    import: "./dist/puzzle.es.js",
    require: "./dist/puzzle.cjs.js",
    browser: "./dist/puzzle.umd.js",
    types: "./dist/types/index.d.ts"
  }
}, BE = "module", HE = {
  "fetch-fix": "find dist -type f \\( -name '*.js' -o -name '*.cjs' \\) -exec sed -i '' 's/self.fetch[[:space:]]*||/fetch ||/g' {} \\;",
  "ws-fix": `find ./dist -type f -name 'index*' -exec sed -i '' -e 's/require(\\"ws\\")/(() => {try { return require(\\"ws\\") } catch (e) { } })()/g' {} +;`,
  build: "vite build && tsc --declaration --emitDeclarationOnly --outDir dist/types && pnpm fetch-fix && pnpm ws-fix",
  "type-check": "tsc --noEmit"
}, GE = {
  type: "git",
  url: "git+https://github.com/puzzlehq/puzzle-sdk.git"
}, YE = [
  "puzzle",
  "html",
  "aleo",
  "web3",
  "crypto"
], JE = "Puzzle", XE = "ISC", QE = {
  url: "https://github.com/puzzlehq/puzzle-sdk/issues"
}, e5 = "https://github.com/puzzlehq/puzzle-sdk#readme", Ld = {
  name: UE,
  displayName: zE,
  version: $E,
  description: VE,
  main: qE,
  module: ZE,
  browser: FE,
  types: KE,
  private: !1,
  exports: WE,
  type: BE,
  scripts: HE,
  repository: GE,
  keywords: YE,
  author: JE,
  license: XE,
  bugs: QE,
  homepage: e5
}, ka = new au();
let Ss;
async function t5(t) {
  let e = !1;
  const r = Ld.version, n = localStorage.getItem("puzzle_sdk_version");
  if (r !== n && (console.log(`${Ld.name}: Updated from ` + n + " to " + r + "!"), localStorage.setItem("puzzle_sdk_version", r), e = !0), Ss = new LE({
    projectId: ME,
    metadata: {
      name: t.dAppName,
      description: t.dAppDescription,
      url: t.dAppUrl,
      icons: [t.dAppIconURL]
    },
    modalOptions: { ...DE }
  }), e)
    try {
      r5(Ss, t.onDisconnect);
    } catch (s) {
      console.error(s);
    }
  window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
}
async function r5(t, e) {
  const r = await (t == null ? void 0 : t.getSession());
  r && (console.log("Disconnecting session", r), e && e(), t.disconnect({
    topic: r.topic,
    reason: ft("USER_DISCONNECTED")
  }));
}
async function dr() {
  return new Promise((t) => {
    if (Ss)
      t(Ss);
    else {
      const e = setInterval(() => {
        Ss && (clearInterval(e), t(Ss));
      }, 200);
    }
    window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
  });
}
const k6 = async () => {
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
}, C6 = async ({ address: t }) => {
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
}, P6 = async () => {
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
          methods: Pu,
          chains: Ta,
          events: Nu
        }
      }
    });
    return ka.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), r;
  } catch (r) {
    console.error("connect error", r.message);
  }
}, N6 = async (t) => {
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
}, R6 = async () => {
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
}, A6 = async (t) => {
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
}, j6 = async () => {
  const t = await dr(), e = await (t == null ? void 0 : t.getSession());
  if (!e || !t)
    return { error: "no session or connection" };
  try {
    try {
      await t.disconnect({
        reason: ft("USER_DISCONNECTED"),
        topic: e.topic
      }), ka.emit("session_change");
    } catch (r) {
      console.warn(r);
    }
    return {};
  } catch (r) {
    const n = r.message;
    return console.error("error disconnecting", n), { error: n };
  }
}, L6 = async ({
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
}, M6 = async (t) => {
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
}, D6 = async (t) => {
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
}, U6 = async ({
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
var Tc;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(Tc || (Tc = {}));
const te = Je.arrayToEnum([
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
}, W = Je.arrayToEnum([
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
]), n5 = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class Nr extends Error {
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
Nr.create = (t) => new Nr(t);
const mi = (t, e) => {
  let r;
  switch (t.code) {
    case W.invalid_type:
      t.received === te.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
      break;
    case W.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(t.expected, Je.jsonStringifyReplacer)}`;
      break;
    case W.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${Je.joinValues(t.keys, ", ")}`;
      break;
    case W.invalid_union:
      r = "Invalid input";
      break;
    case W.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${Je.joinValues(t.options)}`;
      break;
    case W.invalid_enum_value:
      r = `Invalid enum value. Expected ${Je.joinValues(t.options)}, received '${t.received}'`;
      break;
    case W.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case W.invalid_return_type:
      r = "Invalid function return type";
      break;
    case W.invalid_date:
      r = "Invalid date";
      break;
    case W.invalid_string:
      typeof t.validation == "object" ? "includes" in t.validation ? (r = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : Je.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
      break;
    case W.too_small:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : r = "Invalid input";
      break;
    case W.too_big:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? r = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : r = "Invalid input";
      break;
    case W.custom:
      r = "Invalid input";
      break;
    case W.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case W.not_multiple_of:
      r = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case W.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = e.defaultError, Je.assertNever(t);
  }
  return { message: r };
};
let kf = mi;
function s5(t) {
  kf = t;
}
function Fo() {
  return kf;
}
const Ko = (t) => {
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
}, i5 = [];
function se(t, e) {
  const r = Ko({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      Fo(),
      mi
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
}), Cf = (t) => ({ status: "dirty", value: t }), sr = (t) => ({ status: "valid", value: t }), kc = (t) => t.status === "aborted", Cc = (t) => t.status === "dirty", Wo = (t) => t.status === "valid", Bo = (t) => typeof Promise < "u" && t instanceof Promise;
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
const Md = (t, e) => {
  if (Wo(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new Nr(t.common.issues);
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
      status: new Gt(),
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
    }, s = this._parse({ data: e, path: n.path, parent: n }), i = await (Bo(s) ? s : Promise.resolve(s));
    return Md(n, i);
  }
  refine(e, r) {
    const n = (s) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(s) : r;
    return this._refinement((s, i) => {
      const a = e(s), o = () => i.addIssue({
        code: W.custom,
        ...n(s)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((c) => c ? !0 : (o(), !1)) : a ? !0 : (o(), !1);
    });
  }
  refinement(e, r) {
    return this._refinement((n, s) => e(n) ? !0 : (s.addIssue(typeof r == "function" ? r(n, s) : r), !1));
  }
  _refinement(e) {
    return new Mr({
      schema: this,
      typeName: pe.ZodEffects,
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
    return rs.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Rr.create(this, this._def);
  }
  promise() {
    return Us.create(this, this._def);
  }
  or(e) {
    return wi.create([this, e], this._def);
  }
  and(e) {
    return Ei.create(this, e, this._def);
  }
  transform(e) {
    return new Mr({
      ...xe(this._def),
      schema: this,
      typeName: pe.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Ti({
      ...xe(this._def),
      innerType: this,
      defaultValue: r,
      typeName: pe.ZodDefault
    });
  }
  brand() {
    return new Nf({
      typeName: pe.ZodBranded,
      type: this,
      ...xe(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Jo({
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
    return io.create(this, e);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const o5 = /^c[^\s-]{8,}$/i, a5 = /^[a-z][a-z0-9]*$/, c5 = /[0-9A-HJKMNP-TV-Z]{26}/, u5 = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, l5 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, d5 = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u"), h5 = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, f5 = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, p5 = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function g5(t, e) {
  return !!((e === "v4" || !e) && h5.test(t) || (e === "v6" || !e) && f5.test(t));
}
class Cr extends Re {
  constructor() {
    super(...arguments), this._regex = (e, r, n) => this.refinement((s) => e.test(s), {
      validation: r,
      code: W.invalid_string,
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
          code: W.invalid_type,
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
          code: W.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), r.dirty());
      else if (s.kind === "max")
        e.data.length > s.value && (n = this._getOrReturnCtx(e, n), se(n, {
          code: W.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), r.dirty());
      else if (s.kind === "length") {
        const i = e.data.length > s.value, a = e.data.length < s.value;
        (i || a) && (n = this._getOrReturnCtx(e, n), i ? se(n, {
          code: W.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : a && se(n, {
          code: W.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), r.dirty());
      } else if (s.kind === "email")
        l5.test(e.data) || (n = this._getOrReturnCtx(e, n), se(n, {
          validation: "email",
          code: W.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "emoji")
        d5.test(e.data) || (n = this._getOrReturnCtx(e, n), se(n, {
          validation: "emoji",
          code: W.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "uuid")
        u5.test(e.data) || (n = this._getOrReturnCtx(e, n), se(n, {
          validation: "uuid",
          code: W.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "cuid")
        o5.test(e.data) || (n = this._getOrReturnCtx(e, n), se(n, {
          validation: "cuid",
          code: W.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "cuid2")
        a5.test(e.data) || (n = this._getOrReturnCtx(e, n), se(n, {
          validation: "cuid2",
          code: W.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "ulid")
        c5.test(e.data) || (n = this._getOrReturnCtx(e, n), se(n, {
          validation: "ulid",
          code: W.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "url")
        try {
          new URL(e.data);
        } catch {
          n = this._getOrReturnCtx(e, n), se(n, {
            validation: "url",
            code: W.invalid_string,
            message: s.message
          }), r.dirty();
        }
      else
        s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(e.data) || (n = this._getOrReturnCtx(e, n), se(n, {
          validation: "regex",
          code: W.invalid_string,
          message: s.message
        }), r.dirty())) : s.kind === "trim" ? e.data = e.data.trim() : s.kind === "includes" ? e.data.includes(s.value, s.position) || (n = this._getOrReturnCtx(e, n), se(n, {
          code: W.invalid_string,
          validation: { includes: s.value, position: s.position },
          message: s.message
        }), r.dirty()) : s.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : s.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : s.kind === "startsWith" ? e.data.startsWith(s.value) || (n = this._getOrReturnCtx(e, n), se(n, {
          code: W.invalid_string,
          validation: { startsWith: s.value },
          message: s.message
        }), r.dirty()) : s.kind === "endsWith" ? e.data.endsWith(s.value) || (n = this._getOrReturnCtx(e, n), se(n, {
          code: W.invalid_string,
          validation: { endsWith: s.value },
          message: s.message
        }), r.dirty()) : s.kind === "datetime" ? p5(s).test(e.data) || (n = this._getOrReturnCtx(e, n), se(n, {
          code: W.invalid_string,
          validation: "datetime",
          message: s.message
        }), r.dirty()) : s.kind === "ip" ? g5(e.data, s.version) || (n = this._getOrReturnCtx(e, n), se(n, {
          validation: "ip",
          code: W.invalid_string,
          message: s.message
        }), r.dirty()) : Je.assertNever(s);
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
function y5(t, e) {
  const r = (t.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, s = r > n ? r : n, i = parseInt(t.toFixed(s).replace(".", "")), a = parseInt(e.toFixed(s).replace(".", ""));
  return i % a / Math.pow(10, s);
}
class Pn extends Re {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== te.number) {
      const s = this._getOrReturnCtx(e);
      return se(s, {
        code: W.invalid_type,
        expected: te.number,
        received: s.parsedType
      }), be;
    }
    let r;
    const n = new Gt();
    for (const s of this._def.checks)
      s.kind === "int" ? Je.isInteger(e.data) || (r = this._getOrReturnCtx(e, r), se(r, {
        code: W.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), n.dirty()) : s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (r = this._getOrReturnCtx(e, r), se(r, {
        code: W.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), n.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (r = this._getOrReturnCtx(e, r), se(r, {
        code: W.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), n.dirty()) : s.kind === "multipleOf" ? y5(e.data, s.value) !== 0 && (r = this._getOrReturnCtx(e, r), se(r, {
        code: W.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), n.dirty()) : s.kind === "finite" ? Number.isFinite(e.data) || (r = this._getOrReturnCtx(e, r), se(r, {
        code: W.not_finite,
        message: s.message
      }), n.dirty()) : Je.assertNever(s);
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
  typeName: pe.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...xe(t)
});
class Nn extends Re {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== te.bigint) {
      const s = this._getOrReturnCtx(e);
      return se(s, {
        code: W.invalid_type,
        expected: te.bigint,
        received: s.parsedType
      }), be;
    }
    let r;
    const n = new Gt();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (r = this._getOrReturnCtx(e, r), se(r, {
        code: W.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), n.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (r = this._getOrReturnCtx(e, r), se(r, {
        code: W.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), n.dirty()) : s.kind === "multipleOf" ? e.data % s.value !== BigInt(0) && (r = this._getOrReturnCtx(e, r), se(r, {
        code: W.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), n.dirty()) : Je.assertNever(s);
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
Nn.create = (t) => {
  var e;
  return new Nn({
    checks: [],
    typeName: pe.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...xe(t)
  });
};
class vi extends Re {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== te.boolean) {
      const r = this._getOrReturnCtx(e);
      return se(r, {
        code: W.invalid_type,
        expected: te.boolean,
        received: r.parsedType
      }), be;
    }
    return sr(e.data);
  }
}
vi.create = (t) => new vi({
  typeName: pe.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...xe(t)
});
class es extends Re {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== te.date) {
      const s = this._getOrReturnCtx(e);
      return se(s, {
        code: W.invalid_type,
        expected: te.date,
        received: s.parsedType
      }), be;
    }
    if (isNaN(e.data.getTime())) {
      const s = this._getOrReturnCtx(e);
      return se(s, {
        code: W.invalid_date
      }), be;
    }
    const r = new Gt();
    let n;
    for (const s of this._def.checks)
      s.kind === "min" ? e.data.getTime() < s.value && (n = this._getOrReturnCtx(e, n), se(n, {
        code: W.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), r.dirty()) : s.kind === "max" ? e.data.getTime() > s.value && (n = this._getOrReturnCtx(e, n), se(n, {
        code: W.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), r.dirty()) : Je.assertNever(s);
    return {
      status: r.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new es({
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
es.create = (t) => new es({
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
        code: W.invalid_type,
        expected: te.symbol,
        received: r.parsedType
      }), be;
    }
    return sr(e.data);
  }
}
Ho.create = (t) => new Ho({
  typeName: pe.ZodSymbol,
  ...xe(t)
});
class _i extends Re {
  _parse(e) {
    if (this._getType(e) !== te.undefined) {
      const r = this._getOrReturnCtx(e);
      return se(r, {
        code: W.invalid_type,
        expected: te.undefined,
        received: r.parsedType
      }), be;
    }
    return sr(e.data);
  }
}
_i.create = (t) => new _i({
  typeName: pe.ZodUndefined,
  ...xe(t)
});
class bi extends Re {
  _parse(e) {
    if (this._getType(e) !== te.null) {
      const r = this._getOrReturnCtx(e);
      return se(r, {
        code: W.invalid_type,
        expected: te.null,
        received: r.parsedType
      }), be;
    }
    return sr(e.data);
  }
}
bi.create = (t) => new bi({
  typeName: pe.ZodNull,
  ...xe(t)
});
class Ds extends Re {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return sr(e.data);
  }
}
Ds.create = (t) => new Ds({
  typeName: pe.ZodAny,
  ...xe(t)
});
class Yn extends Re {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return sr(e.data);
  }
}
Yn.create = (t) => new Yn({
  typeName: pe.ZodUnknown,
  ...xe(t)
});
class pn extends Re {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return se(r, {
      code: W.invalid_type,
      expected: te.never,
      received: r.parsedType
    }), be;
  }
}
pn.create = (t) => new pn({
  typeName: pe.ZodNever,
  ...xe(t)
});
class Go extends Re {
  _parse(e) {
    if (this._getType(e) !== te.undefined) {
      const r = this._getOrReturnCtx(e);
      return se(r, {
        code: W.invalid_type,
        expected: te.void,
        received: r.parsedType
      }), be;
    }
    return sr(e.data);
  }
}
Go.create = (t) => new Go({
  typeName: pe.ZodVoid,
  ...xe(t)
});
class Rr extends Re {
  _parse(e) {
    const { ctx: r, status: n } = this._processInputParams(e), s = this._def;
    if (r.parsedType !== te.array)
      return se(r, {
        code: W.invalid_type,
        expected: te.array,
        received: r.parsedType
      }), be;
    if (s.exactLength !== null) {
      const a = r.data.length > s.exactLength.value, o = r.data.length < s.exactLength.value;
      (a || o) && (se(r, {
        code: a ? W.too_big : W.too_small,
        minimum: o ? s.exactLength.value : void 0,
        maximum: a ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), n.dirty());
    }
    if (s.minLength !== null && r.data.length < s.minLength.value && (se(r, {
      code: W.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), n.dirty()), s.maxLength !== null && r.data.length > s.maxLength.value && (se(r, {
      code: W.too_big,
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
    return new Rr({
      ...this._def,
      minLength: { value: e, message: ce.toString(r) }
    });
  }
  max(e, r) {
    return new Rr({
      ...this._def,
      maxLength: { value: e, message: ce.toString(r) }
    });
  }
  length(e, r) {
    return new Rr({
      ...this._def,
      exactLength: { value: e, message: ce.toString(r) }
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
  typeName: pe.ZodArray,
  ...xe(e)
});
function bs(t) {
  if (t instanceof pt) {
    const e = {};
    for (const r in t.shape) {
      const n = t.shape[r];
      e[r] = ln.create(bs(n));
    }
    return new pt({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof Rr ? new Rr({
      ...t._def,
      type: bs(t.element)
    }) : t instanceof ln ? ln.create(bs(t.unwrap())) : t instanceof rs ? rs.create(bs(t.unwrap())) : t instanceof Yr ? Yr.create(t.items.map((e) => bs(e))) : t;
}
class pt extends Re {
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
    if (this._getType(e) !== te.object) {
      const c = this._getOrReturnCtx(e);
      return se(c, {
        code: W.invalid_type,
        expected: te.object,
        received: c.parsedType
      }), be;
    }
    const { status: r, ctx: n } = this._processInputParams(e), { shape: s, keys: i } = this._getCached(), a = [];
    if (!(this._def.catchall instanceof pn && this._def.unknownKeys === "strip"))
      for (const c in n.data)
        i.includes(c) || a.push(c);
    const o = [];
    for (const c of i) {
      const u = s[c], l = n.data[c];
      o.push({
        key: { status: "valid", value: c },
        value: u._parse(new Gr(n, l, n.path, c)),
        alwaysSet: c in n.data
      });
    }
    if (this._def.catchall instanceof pn) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const u of a)
          o.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: n.data[u] }
          });
      else if (c === "strict")
        a.length > 0 && (se(n, {
          code: W.unrecognized_keys,
          keys: a
        }), r.dirty());
      else if (c !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const u of a) {
        const l = n.data[u];
        o.push({
          key: { status: "valid", value: u },
          value: c._parse(
            new Gr(n, l, n.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in n.data
        });
      }
    }
    return n.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const u of o) {
        const l = await u.key;
        c.push({
          key: l,
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
    return ce.errToObj, new pt({
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
    return bs(this);
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
        let s = this.shape[n];
        for (; s instanceof ln; )
          s = s._def.innerType;
        r[n] = s;
      }
    }), new pt({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return Pf(Je.objectKeys(this.shape));
  }
}
pt.create = (t, e) => new pt({
  shape: () => t,
  unknownKeys: "strip",
  catchall: pn.create(),
  typeName: pe.ZodObject,
  ...xe(e)
});
pt.strictCreate = (t, e) => new pt({
  shape: () => t,
  unknownKeys: "strict",
  catchall: pn.create(),
  typeName: pe.ZodObject,
  ...xe(e)
});
pt.lazycreate = (t, e) => new pt({
  shape: t,
  unknownKeys: "strip",
  catchall: pn.create(),
  typeName: pe.ZodObject,
  ...xe(e)
});
class wi extends Re {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = this._def.options;
    function s(i) {
      for (const o of i)
        if (o.result.status === "valid")
          return o.result;
      for (const o of i)
        if (o.result.status === "dirty")
          return r.common.issues.push(...o.ctx.common.issues), o.result;
      const a = i.map((o) => new Nr(o.ctx.common.issues));
      return se(r, {
        code: W.invalid_union,
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
        }, l = c._parseSync({
          data: r.data,
          path: r.path,
          parent: u
        });
        if (l.status === "valid")
          return l;
        l.status === "dirty" && !i && (i = { result: l, ctx: u }), u.common.issues.length && a.push(u.common.issues);
      }
      if (i)
        return r.common.issues.push(...i.ctx.common.issues), i.result;
      const o = a.map((c) => new Nr(c));
      return se(r, {
        code: W.invalid_union,
        unionErrors: o
      }), be;
    }
  }
  get options() {
    return this._def.options;
  }
}
wi.create = (t, e) => new wi({
  options: t,
  typeName: pe.ZodUnion,
  ...xe(e)
});
const Ro = (t) => t instanceof xi ? Ro(t.schema) : t instanceof Mr ? Ro(t.innerType()) : t instanceof Ii ? [t.value] : t instanceof Rn ? t.options : t instanceof Oi ? Object.keys(t.enum) : t instanceof Ti ? Ro(t._def.innerType) : t instanceof _i ? [void 0] : t instanceof bi ? [null] : null;
class Ca extends Re {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== te.object)
      return se(r, {
        code: W.invalid_type,
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
      code: W.invalid_union_discriminator,
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
    return new Ca({
      typeName: pe.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: s,
      ...xe(n)
    });
  }
}
function Pc(t, e) {
  const r = In(t), n = In(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === te.object && n === te.object) {
    const s = Je.objectKeys(e), i = Je.objectKeys(t).filter((o) => s.indexOf(o) !== -1), a = { ...t, ...e };
    for (const o of i) {
      const c = Pc(t[o], e[o]);
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
      const a = t[i], o = e[i], c = Pc(a, o);
      if (!c.valid)
        return { valid: !1 };
      s.push(c.data);
    }
    return { valid: !0, data: s };
  } else
    return r === te.date && n === te.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class Ei extends Re {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), s = (i, a) => {
      if (kc(i) || kc(a))
        return be;
      const o = Pc(i.value, a.value);
      return o.valid ? ((Cc(i) || Cc(a)) && r.dirty(), { status: r.value, value: o.data }) : (se(n, {
        code: W.invalid_intersection_types
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
Ei.create = (t, e, r) => new Ei({
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
        code: W.invalid_type,
        expected: te.array,
        received: n.parsedType
      }), be;
    if (n.data.length < this._def.items.length)
      return se(n, {
        code: W.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), be;
    !this._def.rest && n.data.length > this._def.items.length && (se(n, {
      code: W.too_big,
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
class Si extends Re {
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
        code: W.invalid_type,
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
    return r instanceof Re ? new Si({
      keyType: e,
      valueType: r,
      typeName: pe.ZodRecord,
      ...xe(n)
    }) : new Si({
      keyType: Cr.create(),
      valueType: e,
      typeName: pe.ZodRecord,
      ...xe(r)
    });
  }
}
class Yo extends Re {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== te.map)
      return se(n, {
        code: W.invalid_type,
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
          const u = await c.key, l = await c.value;
          if (u.status === "aborted" || l.status === "aborted")
            return be;
          (u.status === "dirty" || l.status === "dirty") && r.dirty(), o.set(u.value, l.value);
        }
        return { status: r.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const c of a) {
        const u = c.key, l = c.value;
        if (u.status === "aborted" || l.status === "aborted")
          return be;
        (u.status === "dirty" || l.status === "dirty") && r.dirty(), o.set(u.value, l.value);
      }
      return { status: r.value, value: o };
    }
  }
}
Yo.create = (t, e, r) => new Yo({
  valueType: e,
  keyType: t,
  typeName: pe.ZodMap,
  ...xe(r)
});
class ts extends Re {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== te.set)
      return se(n, {
        code: W.invalid_type,
        expected: te.set,
        received: n.parsedType
      }), be;
    const s = this._def;
    s.minSize !== null && n.data.size < s.minSize.value && (se(n, {
      code: W.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), r.dirty()), s.maxSize !== null && n.data.size > s.maxSize.value && (se(n, {
      code: W.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), r.dirty());
    const i = this._def.valueType;
    function a(c) {
      const u = /* @__PURE__ */ new Set();
      for (const l of c) {
        if (l.status === "aborted")
          return be;
        l.status === "dirty" && r.dirty(), u.add(l.value);
      }
      return { status: r.value, value: u };
    }
    const o = [...n.data.values()].map((c, u) => i._parse(new Gr(n, c, n.path, u)));
    return n.common.async ? Promise.all(o).then((c) => a(c)) : a(o);
  }
  min(e, r) {
    return new ts({
      ...this._def,
      minSize: { value: e, message: ce.toString(r) }
    });
  }
  max(e, r) {
    return new ts({
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
ts.create = (t, e) => new ts({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: pe.ZodSet,
  ...xe(e)
});
class ks extends Re {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== te.function)
      return se(r, {
        code: W.invalid_type,
        expected: te.function,
        received: r.parsedType
      }), be;
    function n(o, c) {
      return Ko({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Fo(),
          mi
        ].filter((u) => !!u),
        issueData: {
          code: W.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function s(o, c) {
      return Ko({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Fo(),
          mi
        ].filter((u) => !!u),
        issueData: {
          code: W.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const i = { errorMap: r.common.contextualErrorMap }, a = r.data;
    return this._def.returns instanceof Us ? sr(async (...o) => {
      const c = new Nr([]), u = await this._def.args.parseAsync(o, i).catch((f) => {
        throw c.addIssue(n(o, f)), c;
      }), l = await a(...u);
      return await this._def.returns._def.type.parseAsync(l, i).catch((f) => {
        throw c.addIssue(s(l, f)), c;
      });
    }) : sr((...o) => {
      const c = this._def.args.safeParse(o, i);
      if (!c.success)
        throw new Nr([n(o, c.error)]);
      const u = a(...c.data), l = this._def.returns.safeParse(u, i);
      if (!l.success)
        throw new Nr([s(u, l.error)]);
      return l.data;
    });
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new ks({
      ...this._def,
      args: Yr.create(e).rest(Yn.create())
    });
  }
  returns(e) {
    return new ks({
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
    return new ks({
      args: e || Yr.create([]).rest(Yn.create()),
      returns: r || Yn.create(),
      typeName: pe.ZodFunction,
      ...xe(n)
    });
  }
}
class xi extends Re {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
xi.create = (t, e) => new xi({
  getter: t,
  typeName: pe.ZodLazy,
  ...xe(e)
});
class Ii extends Re {
  _parse(e) {
    if (e.data !== this._def.value) {
      const r = this._getOrReturnCtx(e);
      return se(r, {
        received: r.data,
        code: W.invalid_literal,
        expected: this._def.value
      }), be;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Ii.create = (t, e) => new Ii({
  value: t,
  typeName: pe.ZodLiteral,
  ...xe(e)
});
function Pf(t, e) {
  return new Rn({
    values: t,
    typeName: pe.ZodEnum,
    ...xe(e)
  });
}
class Rn extends Re {
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return se(r, {
        expected: Je.joinValues(n),
        received: r.parsedType,
        code: W.invalid_type
      }), be;
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return se(r, {
        received: r.data,
        code: W.invalid_enum_value,
        options: n
      }), be;
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
    return Rn.create(e);
  }
  exclude(e) {
    return Rn.create(this.options.filter((r) => !e.includes(r)));
  }
}
Rn.create = Pf;
class Oi extends Re {
  _parse(e) {
    const r = Je.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== te.string && n.parsedType !== te.number) {
      const s = Je.objectValues(r);
      return se(n, {
        expected: Je.joinValues(s),
        received: n.parsedType,
        code: W.invalid_type
      }), be;
    }
    if (r.indexOf(e.data) === -1) {
      const s = Je.objectValues(r);
      return se(n, {
        received: n.data,
        code: W.invalid_enum_value,
        options: s
      }), be;
    }
    return sr(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
Oi.create = (t, e) => new Oi({
  values: t,
  typeName: pe.ZodNativeEnum,
  ...xe(e)
});
class Us extends Re {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== te.promise && r.common.async === !1)
      return se(r, {
        code: W.invalid_type,
        expected: te.promise,
        received: r.parsedType
      }), be;
    const n = r.parsedType === te.promise ? r.data : Promise.resolve(r.data);
    return sr(n.then((s) => this._def.type.parseAsync(s, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
Us.create = (t, e) => new Us({
  type: t,
  typeName: pe.ZodPromise,
  ...xe(e)
});
class Mr extends Re {
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
        if (!Wo(a))
          return a;
        const o = s.transform(a.value, i);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => Wo(a) ? Promise.resolve(s.transform(a.value, i)).then((o) => ({ status: r.value, value: o })) : a);
    Je.assertNever(s);
  }
}
Mr.create = (t, e, r) => new Mr({
  schema: t,
  typeName: pe.ZodEffects,
  effect: e,
  ...xe(r)
});
Mr.createWithPreprocess = (t, e, r) => new Mr({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: pe.ZodEffects,
  ...xe(r)
});
class ln extends Re {
  _parse(e) {
    return this._getType(e) === te.undefined ? sr(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ln.create = (t, e) => new ln({
  innerType: t,
  typeName: pe.ZodOptional,
  ...xe(e)
});
class rs extends Re {
  _parse(e) {
    return this._getType(e) === te.null ? sr(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
rs.create = (t, e) => new rs({
  innerType: t,
  typeName: pe.ZodNullable,
  ...xe(e)
});
class Ti extends Re {
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
Ti.create = (t, e) => new Ti({
  innerType: t,
  typeName: pe.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...xe(e)
});
class Jo extends Re {
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
          return new Nr(n.common.issues);
        }
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Nr(n.common.issues);
        }
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Jo.create = (t, e) => new Jo({
  innerType: t,
  typeName: pe.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...xe(e)
});
class Xo extends Re {
  _parse(e) {
    if (this._getType(e) !== te.nan) {
      const r = this._getOrReturnCtx(e);
      return se(r, {
        code: W.invalid_type,
        expected: te.nan,
        received: r.parsedType
      }), be;
    }
    return { status: "valid", value: e.data };
  }
}
Xo.create = (t) => new Xo({
  typeName: pe.ZodNaN,
  ...xe(t)
});
const m5 = Symbol("zod_brand");
class Nf extends Re {
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
class io extends Re {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return s.status === "aborted" ? be : s.status === "dirty" ? (r.dirty(), Cf(s.value)) : this._def.out._parseAsync({
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
    return new io({
      in: e,
      out: r,
      typeName: pe.ZodPipeline
    });
  }
}
const Rf = (t, e = {}, r) => t ? Ds.create().superRefine((n, s) => {
  var i, a;
  if (!t(n)) {
    const o = typeof e == "function" ? e(n) : e, c = (a = (i = o.fatal) !== null && i !== void 0 ? i : r) !== null && a !== void 0 ? a : !0, u = typeof o == "string" ? { message: o } : o;
    s.addIssue({ code: "custom", ...u, fatal: c });
  }
}) : Ds.create(), v5 = {
  object: pt.lazycreate
};
var pe;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline";
})(pe || (pe = {}));
const _5 = (t, e = {
  message: `Input not instance of ${t.name}`
}) => Rf((r) => r instanceof t, e), Af = Cr.create, jf = Pn.create, b5 = Xo.create, w5 = Nn.create, Lf = vi.create, E5 = es.create, S5 = Ho.create, x5 = _i.create, I5 = bi.create, O5 = Ds.create, T5 = Yn.create, k5 = pn.create, C5 = Go.create, P5 = Rr.create, N5 = pt.create, R5 = pt.strictCreate, A5 = wi.create, j5 = Ca.create, L5 = Ei.create, M5 = Yr.create, D5 = Si.create, U5 = Yo.create, z5 = ts.create, $5 = ks.create, V5 = xi.create, q5 = Ii.create, Z5 = Rn.create, F5 = Oi.create, K5 = Us.create, Dd = Mr.create, W5 = ln.create, B5 = rs.create, H5 = Mr.createWithPreprocess, G5 = io.create, Y5 = () => Af().optional(), J5 = () => jf().optional(), X5 = () => Lf().optional(), Q5 = {
  string: (t) => Cr.create({ ...t, coerce: !0 }),
  number: (t) => Pn.create({ ...t, coerce: !0 }),
  boolean: (t) => vi.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => Nn.create({ ...t, coerce: !0 }),
  date: (t) => es.create({ ...t, coerce: !0 })
}, eS = be;
var zr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: mi,
  setErrorMap: s5,
  getErrorMap: Fo,
  makeIssue: Ko,
  EMPTY_PATH: i5,
  addIssueToContext: se,
  ParseStatus: Gt,
  INVALID: be,
  DIRTY: Cf,
  OK: sr,
  isAborted: kc,
  isDirty: Cc,
  isValid: Wo,
  isAsync: Bo,
  get util() {
    return Je;
  },
  get objectUtil() {
    return Tc;
  },
  ZodParsedType: te,
  getParsedType: In,
  ZodType: Re,
  ZodString: Cr,
  ZodNumber: Pn,
  ZodBigInt: Nn,
  ZodBoolean: vi,
  ZodDate: es,
  ZodSymbol: Ho,
  ZodUndefined: _i,
  ZodNull: bi,
  ZodAny: Ds,
  ZodUnknown: Yn,
  ZodNever: pn,
  ZodVoid: Go,
  ZodArray: Rr,
  ZodObject: pt,
  ZodUnion: wi,
  ZodDiscriminatedUnion: Ca,
  ZodIntersection: Ei,
  ZodTuple: Yr,
  ZodRecord: Si,
  ZodMap: Yo,
  ZodSet: ts,
  ZodFunction: ks,
  ZodLazy: xi,
  ZodLiteral: Ii,
  ZodEnum: Rn,
  ZodNativeEnum: Oi,
  ZodPromise: Us,
  ZodEffects: Mr,
  ZodTransformer: Mr,
  ZodOptional: ln,
  ZodNullable: rs,
  ZodDefault: Ti,
  ZodCatch: Jo,
  ZodNaN: Xo,
  BRAND: m5,
  ZodBranded: Nf,
  ZodPipeline: io,
  custom: Rf,
  Schema: Re,
  ZodSchema: Re,
  late: v5,
  get ZodFirstPartyTypeKind() {
    return pe;
  },
  coerce: Q5,
  any: O5,
  array: P5,
  bigint: w5,
  boolean: Lf,
  date: E5,
  discriminatedUnion: j5,
  effect: Dd,
  enum: Z5,
  function: $5,
  instanceof: _5,
  intersection: L5,
  lazy: V5,
  literal: q5,
  map: U5,
  nan: b5,
  nativeEnum: F5,
  never: k5,
  null: I5,
  nullable: B5,
  number: jf,
  object: N5,
  oboolean: X5,
  onumber: J5,
  optional: W5,
  ostring: Y5,
  pipeline: G5,
  preprocess: H5,
  promise: K5,
  record: D5,
  set: z5,
  strictObject: R5,
  string: Af,
  symbol: S5,
  transformer: Dd,
  tuple: M5,
  undefined: x5,
  union: A5,
  unknown: T5,
  void: C5,
  NEVER: eS,
  ZodIssueCode: W,
  quotelessJson: n5,
  ZodError: Nr
});
const Mf = /^aleo1[a-z0-9]{58}$/i, tS = /^AViewKey1[a-z0-9]{44}$/i, rS = /^APrivateKey1[a-z0-9]{47}$/i, nS = /^at1[a-z0-9]{58}$/i, sS = /^\d+field$/, iS = /^\d+u32$/, oS = /^\d+u64$/, z6 = zr.string().regex(Mf), $6 = zr.string().regex(tS), V6 = zr.string().regex(rS), q6 = zr.string().regex(nS), Z6 = zr.string().regex(sS), F6 = zr.string().regex(iS), K6 = zr.string().regex(oS);
var Ud;
(function(t) {
  t.Record = "record", t.OutputRecord = "outputRecord", t.Public = "public", t.Private = "private", t.Constant = "constant", t.Future = "future", t.ExternalRecord = "external_record";
})(Ud || (Ud = {}));
var Nc;
(function(t) {
  t.Deploy = "Deploy", t.Execute = "Execute", t.Send = "Send", t.Receive = "Receive", t.Join = "Join", t.Split = "Split", t.Shield = "Shield", t.Unshield = "Unshield";
})(Nc || (Nc = {}));
var Rc;
(function(t) {
  t.Creating = "Creating", t.Pending = "Pending", t.Settled = "Settled", t.Failed = "Failed";
})(Rc || (Rc = {}));
var Ac;
(function(t) {
  t.Private = "Private", t.Public = "Public";
})(Ac || (Ac = {}));
var jc;
(function(t) {
  t.AleoTestnet = "AleoTestnet", t.AleoMainnet = "AleoMainnet";
})(jc || (jc = {}));
var zd;
(function(t) {
  t[t.ALEO = 0] = "ALEO";
})(zd || (zd = {}));
const W6 = zr.nativeEnum(Nc), B6 = zr.nativeEnum(Rc), H6 = zr.nativeEnum(jc), G6 = zr.nativeEnum(Ac), Y6 = async ({
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
          address: Mf.test(e ?? "") ? e : void 0
        }
      }
    });
  } catch (s) {
    const i = s.message;
    return console.error("signature error", i), { error: i };
  }
}, J6 = 20;
var Lc = { exports: {} }, Ja, $d;
function aS() {
  if ($d)
    return Ja;
  $d = 1;
  var t = 1e3, e = t * 60, r = e * 60, n = r * 24, s = n * 7, i = n * 365.25;
  Ja = function(l, f) {
    f = f || {};
    var p = typeof l;
    if (p === "string" && l.length > 0)
      return a(l);
    if (p === "number" && isFinite(l))
      return f.long ? c(l) : o(l);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(l)
    );
  };
  function a(l) {
    if (l = String(l), !(l.length > 100)) {
      var f = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        l
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
  function o(l) {
    var f = Math.abs(l);
    return f >= n ? Math.round(l / n) + "d" : f >= r ? Math.round(l / r) + "h" : f >= e ? Math.round(l / e) + "m" : f >= t ? Math.round(l / t) + "s" : l + "ms";
  }
  function c(l) {
    var f = Math.abs(l);
    return f >= n ? u(l, f, n, "day") : f >= r ? u(l, f, r, "hour") : f >= e ? u(l, f, e, "minute") : f >= t ? u(l, f, t, "second") : l + " ms";
  }
  function u(l, f, p, m) {
    var b = f >= p * 1.5;
    return Math.round(l / p) + " " + m + (b ? "s" : "");
  }
  return Ja;
}
function cS(t) {
  r.debug = r, r.default = r, r.coerce = c, r.disable = i, r.enable = s, r.enabled = a, r.humanize = aS(), r.destroy = u, Object.keys(t).forEach((l) => {
    r[l] = t[l];
  }), r.names = [], r.skips = [], r.formatters = {};
  function e(l) {
    let f = 0;
    for (let p = 0; p < l.length; p++)
      f = (f << 5) - f + l.charCodeAt(p), f |= 0;
    return r.colors[Math.abs(f) % r.colors.length];
  }
  r.selectColor = e;
  function r(l) {
    let f, p = null, m, b;
    function E(...T) {
      if (!E.enabled)
        return;
      const M = E, v = Number(/* @__PURE__ */ new Date()), O = v - (f || v);
      M.diff = O, M.prev = f, M.curr = v, f = v, T[0] = r.coerce(T[0]), typeof T[0] != "string" && T.unshift("%O");
      let w = 0;
      T[0] = T[0].replace(/%([a-zA-Z%])/g, (x, y) => {
        if (x === "%%")
          return "%";
        w++;
        const d = r.formatters[y];
        if (typeof d == "function") {
          const g = T[w];
          x = d.call(M, g), T.splice(w, 1), w--;
        }
        return x;
      }), r.formatArgs.call(M, T), (M.log || r.log).apply(M, T);
    }
    return E.namespace = l, E.useColors = r.useColors(), E.color = r.selectColor(l), E.extend = n, E.destroy = r.destroy, Object.defineProperty(E, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => p !== null ? p : (m !== r.namespaces && (m = r.namespaces, b = r.enabled(l)), b),
      set: (T) => {
        p = T;
      }
    }), typeof r.init == "function" && r.init(E), E;
  }
  function n(l, f) {
    const p = r(this.namespace + (typeof f > "u" ? ":" : f) + l);
    return p.log = this.log, p;
  }
  function s(l) {
    r.save(l), r.namespaces = l, r.names = [], r.skips = [];
    let f;
    const p = (typeof l == "string" ? l : "").split(/[\s,]+/), m = p.length;
    for (f = 0; f < m; f++)
      p[f] && (l = p[f].replace(/\*/g, ".*?"), l[0] === "-" ? r.skips.push(new RegExp("^" + l.slice(1) + "$")) : r.names.push(new RegExp("^" + l + "$")));
  }
  function i() {
    const l = [
      ...r.names.map(o),
      ...r.skips.map(o).map((f) => "-" + f)
    ].join(",");
    return r.enable(""), l;
  }
  function a(l) {
    if (l[l.length - 1] === "*")
      return !0;
    let f, p;
    for (f = 0, p = r.skips.length; f < p; f++)
      if (r.skips[f].test(l))
        return !1;
    for (f = 0, p = r.names.length; f < p; f++)
      if (r.names[f].test(l))
        return !0;
    return !1;
  }
  function o(l) {
    return l.toString().substring(2, l.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function c(l) {
    return l instanceof Error ? l.stack || l.message : l;
  }
  function u() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return r.enable(r.load()), r;
}
var uS = cS;
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
    let l = 0, f = 0;
    c[0].replace(/%[a-zA-Z%]/g, (p) => {
      p !== "%%" && (l++, p === "%c" && (f = l));
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
  t.exports = uS(e);
  const { formatters: o } = t.exports;
  o.j = function(c) {
    try {
      return JSON.stringify(c);
    } catch (u) {
      return "[UnexpectedJSONParseError]: " + u.message;
    }
  };
})(Lc, Lc.exports);
var lS = Lc.exports;
const dS = /* @__PURE__ */ pa(lS), Pa = dS("wallet:sdk");
Pa.enabled = !0;
function X6() {
  const e = !!Sr(), { data: r, error: n, loading: s, setData: i, setError: a, setLoading: o } = iu(), [c] = fn((l) => [l.setAccount]);
  async function u() {
    try {
      o(!0), a(void 0);
      const f = await (await dr()).connect({
        requiredNamespaces: {
          aleo: {
            methods: Pu,
            chains: Ta,
            events: Nu
          }
        }
      });
      i(f);
      const p = f.namespaces.aleo.accounts[0].split(":");
      return c({
        network: p[0],
        chainId: p[1],
        address: p[2],
        shortenedAddress: rc(p[2])
      }), ka.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), f;
    } catch (l) {
      throw a(l), l;
    } finally {
      o(!1);
    }
  }
  return { data: r, error: n, loading: s, isConnected: e, connect: u };
}
const Q6 = () => {
  const t = Sr(), { request: e, data: r, error: n, loading: s } = Yi({
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
}, e2 = (t) => {
  Pa("useDecrypt", t);
  const e = Sr(), { request: r, data: n, error: s, loading: i } = Yi({
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
function t2() {
  const t = Sr(), [e] = fn((o) => [o.onDisconnect]), { error: r, loading: n, setError: s, setLoading: i } = iu();
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
          reason: eg("USER_DISCONNECTED")
        }), ka.emit("session_change");
      } catch (o) {
        console.warn(o);
      }
      fn.getState().onDisconnect();
    } catch (o) {
      throw s(o), o;
    } finally {
      i(!1);
    }
  }
  return { error: r, loading: n, disconnect: a };
}
const r2 = ({ id: t, address: e, multisig: r = !1 }) => {
  const n = Sr(), [s] = fn((E) => [E.account]), i = t !== void 0 && t !== "" && !!n && !!s && (r ? !!e : !0), { refetch: a, data: o, error: c, isLoading: u } = Gi({
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
  Hi(({ params: E, topic: T }) => {
    const M = E.event.name, v = E.event.address ?? E.event.data.address;
    (t && M === "selectedAccountSynced" && !r || M === "sharedAccountSynced" && r && v === e) && a();
  });
  const l = !!n && !!s && !!t && (r ? !!e : !0);
  Lr(() => {
    l && !u && a();
  }, [l]);
  const f = () => {
    l && !u && a();
  }, p = c ? c.message : o && o.error, m = o, b = m == null ? void 0 : m.event;
  return { fetchEvent: f, event: b, error: p, loading: u };
}, n2 = ({ filter: t, page: e }) => {
  const r = Sr(), [n] = fn((b) => [b.account]);
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const { refetch: s, data: i, error: a, isLoading: o } = Gi({
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
  Hi(({ id: b, params: E, topic: T }) => {
    E.event.name === "selectedAccountSynced" && s();
  });
  const c = !!r && !!n;
  Lr(() => {
    c && !o && s();
  }, [c]);
  const u = () => {
    c && !o && s();
  }, l = a ? a.message : i && i.error, f = i, p = f == null ? void 0 : f.events, m = (f == null ? void 0 : f.pageCount) ?? 0;
  return { fetchPage: u, events: p, error: l, loading: o, page: e, pageCount: m };
}, s2 = (t) => {
  const e = Sr(), { request: r, data: n, error: s, loading: i } = Yi({
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
}, i2 = (t) => {
  try {
    return JSON.stringify(t, null, 2).replaceAll('"', "") ?? "";
  } catch {
    return "";
  }
}, o2 = ({ address: t, multisig: e = !1, filter: r, page: n }) => {
  const s = Sr(), [i] = fn((T) => [
    T.account
  ]), { refetch: a, data: o, error: c, isLoading: u } = Gi({
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
  }), l = !!s && !!i && (e ? !!t : !0);
  Hi(({ params: T }) => {
    const M = T.event.name, v = T.event.address ?? T.event.data.address;
    (M === "selectedAccountSynced" && !e || M === "sharedAccountSynced" && e && v === t) && a();
  });
  const f = () => {
    l && !u && (Pa("useRecords refetching...", [t, e, r, n]), a());
  }, p = c ? c.message : o && o.error, m = o, b = m == null ? void 0 : m.records, E = (m == null ? void 0 : m.pageCount) ?? 0;
  return { fetchPage: f, records: b, error: p, loading: u, page: n, pageCount: E };
}, a2 = (t) => {
  const e = Sr(), r = t == null ? void 0 : t.inputs.map((l) => typeof l == "string" ? l : l.plaintext), { request: n, data: s, error: i, loading: a } = Yi({
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
    t && e && !a && (Pa("useCreateEvent requesting...", t), n());
  }, eventId: c == null ? void 0 : c.eventId, loading: a, error: o };
};
var Xe;
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
})(Xe || (Xe = {}));
var Mc;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(Mc || (Mc = {}));
const re = Xe.arrayToEnum([
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
]), On = (t) => {
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
}, B = Xe.arrayToEnum([
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
]), hS = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class Ar extends Error {
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
    return JSON.stringify(this.issues, Xe.jsonStringifyReplacer, 2);
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
Ar.create = (t) => new Ar(t);
const ki = (t, e) => {
  let r;
  switch (t.code) {
    case B.invalid_type:
      t.received === re.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
      break;
    case B.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(t.expected, Xe.jsonStringifyReplacer)}`;
      break;
    case B.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${Xe.joinValues(t.keys, ", ")}`;
      break;
    case B.invalid_union:
      r = "Invalid input";
      break;
    case B.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${Xe.joinValues(t.options)}`;
      break;
    case B.invalid_enum_value:
      r = `Invalid enum value. Expected ${Xe.joinValues(t.options)}, received '${t.received}'`;
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
      typeof t.validation == "object" ? "includes" in t.validation ? (r = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : Xe.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
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
      r = e.defaultError, Xe.assertNever(t);
  }
  return { message: r };
};
let Df = ki;
function fS(t) {
  Df = t;
}
function Qo() {
  return Df;
}
const ea = (t) => {
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
}, pS = [];
function ie(t, e) {
  const r = ea({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      Qo(),
      ki
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
}), Uf = (t) => ({ status: "dirty", value: t }), ir = (t) => ({ status: "valid", value: t }), Dc = (t) => t.status === "aborted", Uc = (t) => t.status === "dirty", ta = (t) => t.status === "valid", ra = (t) => typeof Promise < "u" && t instanceof Promise;
var ue;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(ue || (ue = {}));
class Jr {
  constructor(e, r, n, s) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = n, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Vd = (t, e) => {
  if (ta(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new Ar(t.common.issues);
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
    return On(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || {
      common: e.parent.common,
      data: e.data,
      parsedType: On(e.data),
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
        parsedType: On(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const r = this._parse(e);
    if (ra(r))
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
      parsedType: On(e)
    }, i = this._parseSync({ data: e, path: s.path, parent: s });
    return Vd(s, i);
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
      parsedType: On(e)
    }, s = this._parse({ data: e, path: n.path, parent: n }), i = await (ra(s) ? s : Promise.resolve(s));
    return Vd(n, i);
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
    return new Dr({
      schema: this,
      typeName: ge.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return dn.create(this, this._def);
  }
  nullable() {
    return is.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return jr.create(this, this._def);
  }
  promise() {
    return $s.create(this, this._def);
  }
  or(e) {
    return Ri.create([this, e], this._def);
  }
  and(e) {
    return Ai.create(this, e, this._def);
  }
  transform(e) {
    return new Dr({
      ...Ie(this._def),
      schema: this,
      typeName: ge.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Ui({
      ...Ie(this._def),
      innerType: this,
      defaultValue: r,
      typeName: ge.ZodDefault
    });
  }
  brand() {
    return new $f({
      typeName: ge.ZodBranded,
      type: this,
      ...Ie(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new oa({
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
    return oo.create(this, e);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const gS = /^c[^\s-]{8,}$/i, yS = /^[a-z][a-z0-9]*$/, mS = /[0-9A-HJKMNP-TV-Z]{26}/, vS = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, _S = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, bS = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u"), wS = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, ES = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, SS = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function xS(t, e) {
  return !!((e === "v4" || !e) && wS.test(t) || (e === "v6" || !e) && ES.test(t));
}
class Pr extends Ae {
  constructor() {
    super(...arguments), this._regex = (e, r, n) => this.refinement((s) => e.test(s), {
      validation: r,
      code: B.invalid_string,
      ...ue.errToObj(n)
    }), this.nonempty = (e) => this.min(1, ue.errToObj(e)), this.trim = () => new Pr({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new Pr({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new Pr({
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
          code: B.invalid_type,
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
          code: B.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), n.dirty());
      else if (i.kind === "max")
        e.data.length > i.value && (s = this._getOrReturnCtx(e, s), ie(s, {
          code: B.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), n.dirty());
      else if (i.kind === "length") {
        const a = e.data.length > i.value, o = e.data.length < i.value;
        (a || o) && (s = this._getOrReturnCtx(e, s), a ? ie(s, {
          code: B.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }) : o && ie(s, {
          code: B.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }), n.dirty());
      } else if (i.kind === "email")
        _S.test(e.data) || (s = this._getOrReturnCtx(e, s), ie(s, {
          validation: "email",
          code: B.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "emoji")
        bS.test(e.data) || (s = this._getOrReturnCtx(e, s), ie(s, {
          validation: "emoji",
          code: B.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "uuid")
        vS.test(e.data) || (s = this._getOrReturnCtx(e, s), ie(s, {
          validation: "uuid",
          code: B.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "cuid")
        gS.test(e.data) || (s = this._getOrReturnCtx(e, s), ie(s, {
          validation: "cuid",
          code: B.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "cuid2")
        yS.test(e.data) || (s = this._getOrReturnCtx(e, s), ie(s, {
          validation: "cuid2",
          code: B.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "ulid")
        mS.test(e.data) || (s = this._getOrReturnCtx(e, s), ie(s, {
          validation: "ulid",
          code: B.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "url")
        try {
          new URL(e.data);
        } catch {
          s = this._getOrReturnCtx(e, s), ie(s, {
            validation: "url",
            code: B.invalid_string,
            message: i.message
          }), n.dirty();
        }
      else
        i.kind === "regex" ? (i.regex.lastIndex = 0, i.regex.test(e.data) || (s = this._getOrReturnCtx(e, s), ie(s, {
          validation: "regex",
          code: B.invalid_string,
          message: i.message
        }), n.dirty())) : i.kind === "trim" ? e.data = e.data.trim() : i.kind === "includes" ? e.data.includes(i.value, i.position) || (s = this._getOrReturnCtx(e, s), ie(s, {
          code: B.invalid_string,
          validation: { includes: i.value, position: i.position },
          message: i.message
        }), n.dirty()) : i.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : i.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : i.kind === "startsWith" ? e.data.startsWith(i.value) || (s = this._getOrReturnCtx(e, s), ie(s, {
          code: B.invalid_string,
          validation: { startsWith: i.value },
          message: i.message
        }), n.dirty()) : i.kind === "endsWith" ? e.data.endsWith(i.value) || (s = this._getOrReturnCtx(e, s), ie(s, {
          code: B.invalid_string,
          validation: { endsWith: i.value },
          message: i.message
        }), n.dirty()) : i.kind === "datetime" ? SS(i).test(e.data) || (s = this._getOrReturnCtx(e, s), ie(s, {
          code: B.invalid_string,
          validation: "datetime",
          message: i.message
        }), n.dirty()) : i.kind === "ip" ? xS(e.data, i.version) || (s = this._getOrReturnCtx(e, s), ie(s, {
          validation: "ip",
          code: B.invalid_string,
          message: i.message
        }), n.dirty()) : Xe.assertNever(i);
    return { status: n.value, value: e.data };
  }
  _addCheck(e) {
    return new Pr({
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
Pr.create = (t) => {
  var e;
  return new Pr({
    checks: [],
    typeName: ge.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...Ie(t)
  });
};
function IS(t, e) {
  const r = (t.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, s = r > n ? r : n, i = parseInt(t.toFixed(s).replace(".", "")), a = parseInt(e.toFixed(s).replace(".", ""));
  return i % a / Math.pow(10, s);
}
class An extends Ae {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== re.number) {
      const i = this._getOrReturnCtx(e);
      return ie(i, {
        code: B.invalid_type,
        expected: re.number,
        received: i.parsedType
      }), ve;
    }
    let n;
    const s = new Yt();
    for (const i of this._def.checks)
      i.kind === "int" ? Xe.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), ie(n, {
        code: B.invalid_type,
        expected: "integer",
        received: "float",
        message: i.message
      }), s.dirty()) : i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (n = this._getOrReturnCtx(e, n), ie(n, {
        code: B.too_small,
        minimum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), s.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (n = this._getOrReturnCtx(e, n), ie(n, {
        code: B.too_big,
        maximum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), s.dirty()) : i.kind === "multipleOf" ? IS(e.data, i.value) !== 0 && (n = this._getOrReturnCtx(e, n), ie(n, {
        code: B.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), s.dirty()) : i.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), ie(n, {
        code: B.not_finite,
        message: i.message
      }), s.dirty()) : Xe.assertNever(i);
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
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && Xe.isInteger(e.value));
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
An.create = (t) => new An({
  checks: [],
  typeName: ge.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...Ie(t)
});
class jn extends Ae {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== re.bigint) {
      const i = this._getOrReturnCtx(e);
      return ie(i, {
        code: B.invalid_type,
        expected: re.bigint,
        received: i.parsedType
      }), ve;
    }
    let n;
    const s = new Yt();
    for (const i of this._def.checks)
      i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (n = this._getOrReturnCtx(e, n), ie(n, {
        code: B.too_small,
        type: "bigint",
        minimum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), s.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (n = this._getOrReturnCtx(e, n), ie(n, {
        code: B.too_big,
        type: "bigint",
        maximum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), s.dirty()) : i.kind === "multipleOf" ? e.data % i.value !== BigInt(0) && (n = this._getOrReturnCtx(e, n), ie(n, {
        code: B.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), s.dirty()) : Xe.assertNever(i);
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
    return new jn({
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
    return new jn({
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
jn.create = (t) => {
  var e;
  return new jn({
    checks: [],
    typeName: ge.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...Ie(t)
  });
};
class Ci extends Ae {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== re.boolean) {
      const n = this._getOrReturnCtx(e);
      return ie(n, {
        code: B.invalid_type,
        expected: re.boolean,
        received: n.parsedType
      }), ve;
    }
    return ir(e.data);
  }
}
Ci.create = (t) => new Ci({
  typeName: ge.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...Ie(t)
});
class ns extends Ae {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== re.date) {
      const i = this._getOrReturnCtx(e);
      return ie(i, {
        code: B.invalid_type,
        expected: re.date,
        received: i.parsedType
      }), ve;
    }
    if (isNaN(e.data.getTime())) {
      const i = this._getOrReturnCtx(e);
      return ie(i, {
        code: B.invalid_date
      }), ve;
    }
    const n = new Yt();
    let s;
    for (const i of this._def.checks)
      i.kind === "min" ? e.data.getTime() < i.value && (s = this._getOrReturnCtx(e, s), ie(s, {
        code: B.too_small,
        message: i.message,
        inclusive: !0,
        exact: !1,
        minimum: i.value,
        type: "date"
      }), n.dirty()) : i.kind === "max" ? e.data.getTime() > i.value && (s = this._getOrReturnCtx(e, s), ie(s, {
        code: B.too_big,
        message: i.message,
        inclusive: !0,
        exact: !1,
        maximum: i.value,
        type: "date"
      }), n.dirty()) : Xe.assertNever(i);
    return {
      status: n.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new ns({
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
ns.create = (t) => new ns({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: ge.ZodDate,
  ...Ie(t)
});
class na extends Ae {
  _parse(e) {
    if (this._getType(e) !== re.symbol) {
      const n = this._getOrReturnCtx(e);
      return ie(n, {
        code: B.invalid_type,
        expected: re.symbol,
        received: n.parsedType
      }), ve;
    }
    return ir(e.data);
  }
}
na.create = (t) => new na({
  typeName: ge.ZodSymbol,
  ...Ie(t)
});
class Pi extends Ae {
  _parse(e) {
    if (this._getType(e) !== re.undefined) {
      const n = this._getOrReturnCtx(e);
      return ie(n, {
        code: B.invalid_type,
        expected: re.undefined,
        received: n.parsedType
      }), ve;
    }
    return ir(e.data);
  }
}
Pi.create = (t) => new Pi({
  typeName: ge.ZodUndefined,
  ...Ie(t)
});
class Ni extends Ae {
  _parse(e) {
    if (this._getType(e) !== re.null) {
      const n = this._getOrReturnCtx(e);
      return ie(n, {
        code: B.invalid_type,
        expected: re.null,
        received: n.parsedType
      }), ve;
    }
    return ir(e.data);
  }
}
Ni.create = (t) => new Ni({
  typeName: ge.ZodNull,
  ...Ie(t)
});
class zs extends Ae {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return ir(e.data);
  }
}
zs.create = (t) => new zs({
  typeName: ge.ZodAny,
  ...Ie(t)
});
class Jn extends Ae {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return ir(e.data);
  }
}
Jn.create = (t) => new Jn({
  typeName: ge.ZodUnknown,
  ...Ie(t)
});
class gn extends Ae {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return ie(r, {
      code: B.invalid_type,
      expected: re.never,
      received: r.parsedType
    }), ve;
  }
}
gn.create = (t) => new gn({
  typeName: ge.ZodNever,
  ...Ie(t)
});
class sa extends Ae {
  _parse(e) {
    if (this._getType(e) !== re.undefined) {
      const n = this._getOrReturnCtx(e);
      return ie(n, {
        code: B.invalid_type,
        expected: re.void,
        received: n.parsedType
      }), ve;
    }
    return ir(e.data);
  }
}
sa.create = (t) => new sa({
  typeName: ge.ZodVoid,
  ...Ie(t)
});
class jr extends Ae {
  _parse(e) {
    const { ctx: r, status: n } = this._processInputParams(e), s = this._def;
    if (r.parsedType !== re.array)
      return ie(r, {
        code: B.invalid_type,
        expected: re.array,
        received: r.parsedType
      }), ve;
    if (s.exactLength !== null) {
      const a = r.data.length > s.exactLength.value, o = r.data.length < s.exactLength.value;
      (a || o) && (ie(r, {
        code: a ? B.too_big : B.too_small,
        minimum: o ? s.exactLength.value : void 0,
        maximum: a ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), n.dirty());
    }
    if (s.minLength !== null && r.data.length < s.minLength.value && (ie(r, {
      code: B.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), n.dirty()), s.maxLength !== null && r.data.length > s.maxLength.value && (ie(r, {
      code: B.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((a, o) => s.type._parseAsync(new Jr(r, a, r.path, o)))).then((a) => Yt.mergeArray(n, a));
    const i = [...r.data].map((a, o) => s.type._parseSync(new Jr(r, a, r.path, o)));
    return Yt.mergeArray(n, i);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new jr({
      ...this._def,
      minLength: { value: e, message: ue.toString(r) }
    });
  }
  max(e, r) {
    return new jr({
      ...this._def,
      maxLength: { value: e, message: ue.toString(r) }
    });
  }
  length(e, r) {
    return new jr({
      ...this._def,
      exactLength: { value: e, message: ue.toString(r) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
jr.create = (t, e) => new jr({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: ge.ZodArray,
  ...Ie(e)
});
function ws(t) {
  if (t instanceof gt) {
    const e = {};
    for (const r in t.shape) {
      const n = t.shape[r];
      e[r] = dn.create(ws(n));
    }
    return new gt({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof jr ? new jr({
      ...t._def,
      type: ws(t.element)
    }) : t instanceof dn ? dn.create(ws(t.unwrap())) : t instanceof is ? is.create(ws(t.unwrap())) : t instanceof Xr ? Xr.create(t.items.map((e) => ws(e))) : t;
}
class gt extends Ae {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), r = Xe.objectKeys(e);
    return this._cached = { shape: e, keys: r };
  }
  _parse(e) {
    if (this._getType(e) !== re.object) {
      const u = this._getOrReturnCtx(e);
      return ie(u, {
        code: B.invalid_type,
        expected: re.object,
        received: u.parsedType
      }), ve;
    }
    const { status: n, ctx: s } = this._processInputParams(e), { shape: i, keys: a } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof gn && this._def.unknownKeys === "strip"))
      for (const u in s.data)
        a.includes(u) || o.push(u);
    const c = [];
    for (const u of a) {
      const l = i[u], f = s.data[u];
      c.push({
        key: { status: "valid", value: u },
        value: l._parse(new Jr(s, f, s.path, u)),
        alwaysSet: u in s.data
      });
    }
    if (this._def.catchall instanceof gn) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const l of o)
          c.push({
            key: { status: "valid", value: l },
            value: { status: "valid", value: s.data[l] }
          });
      else if (u === "strict")
        o.length > 0 && (ie(s, {
          code: B.unrecognized_keys,
          keys: o
        }), n.dirty());
      else if (u !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const u = this._def.catchall;
      for (const l of o) {
        const f = s.data[l];
        c.push({
          key: { status: "valid", value: l },
          value: u._parse(
            new Jr(s, f, s.path, l)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: l in s.data
        });
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const u = [];
      for (const l of c) {
        const f = await l.key;
        u.push({
          key: f,
          value: await l.value,
          alwaysSet: l.alwaysSet
        });
      }
      return u;
    }).then((u) => Yt.mergeObjectSync(n, u)) : Yt.mergeObjectSync(n, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return ue.errToObj, new gt({
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
    return new gt({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new gt({
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
    return new gt({
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
    return new gt({
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
    return new gt({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const r = {};
    return Xe.objectKeys(e).forEach((n) => {
      e[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new gt({
      ...this._def,
      shape: () => r
    });
  }
  omit(e) {
    const r = {};
    return Xe.objectKeys(this.shape).forEach((n) => {
      e[n] || (r[n] = this.shape[n]);
    }), new gt({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return ws(this);
  }
  partial(e) {
    const r = {};
    return Xe.objectKeys(this.shape).forEach((n) => {
      const s = this.shape[n];
      e && !e[n] ? r[n] = s : r[n] = s.optional();
    }), new gt({
      ...this._def,
      shape: () => r
    });
  }
  required(e) {
    const r = {};
    return Xe.objectKeys(this.shape).forEach((n) => {
      if (e && !e[n])
        r[n] = this.shape[n];
      else {
        let i = this.shape[n];
        for (; i instanceof dn; )
          i = i._def.innerType;
        r[n] = i;
      }
    }), new gt({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return zf(Xe.objectKeys(this.shape));
  }
}
gt.create = (t, e) => new gt({
  shape: () => t,
  unknownKeys: "strip",
  catchall: gn.create(),
  typeName: ge.ZodObject,
  ...Ie(e)
});
gt.strictCreate = (t, e) => new gt({
  shape: () => t,
  unknownKeys: "strict",
  catchall: gn.create(),
  typeName: ge.ZodObject,
  ...Ie(e)
});
gt.lazycreate = (t, e) => new gt({
  shape: t,
  unknownKeys: "strip",
  catchall: gn.create(),
  typeName: ge.ZodObject,
  ...Ie(e)
});
class Ri extends Ae {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = this._def.options;
    function s(i) {
      for (const o of i)
        if (o.result.status === "valid")
          return o.result;
      for (const o of i)
        if (o.result.status === "dirty")
          return r.common.issues.push(...o.ctx.common.issues), o.result;
      const a = i.map((o) => new Ar(o.ctx.common.issues));
      return ie(r, {
        code: B.invalid_union,
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
        }, l = c._parseSync({
          data: r.data,
          path: r.path,
          parent: u
        });
        if (l.status === "valid")
          return l;
        l.status === "dirty" && !i && (i = { result: l, ctx: u }), u.common.issues.length && a.push(u.common.issues);
      }
      if (i)
        return r.common.issues.push(...i.ctx.common.issues), i.result;
      const o = a.map((c) => new Ar(c));
      return ie(r, {
        code: B.invalid_union,
        unionErrors: o
      }), ve;
    }
  }
  get options() {
    return this._def.options;
  }
}
Ri.create = (t, e) => new Ri({
  options: t,
  typeName: ge.ZodUnion,
  ...Ie(e)
});
const Ao = (t) => t instanceof Li ? Ao(t.schema) : t instanceof Dr ? Ao(t.innerType()) : t instanceof Mi ? [t.value] : t instanceof Ln ? t.options : t instanceof Di ? Object.keys(t.enum) : t instanceof Ui ? Ao(t._def.innerType) : t instanceof Pi ? [void 0] : t instanceof Ni ? [null] : null;
class Na extends Ae {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== re.object)
      return ie(r, {
        code: B.invalid_type,
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
      code: B.invalid_union_discriminator,
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
function zc(t, e) {
  const r = On(t), n = On(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === re.object && n === re.object) {
    const s = Xe.objectKeys(e), i = Xe.objectKeys(t).filter((o) => s.indexOf(o) !== -1), a = { ...t, ...e };
    for (const o of i) {
      const c = zc(t[o], e[o]);
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
      const a = t[i], o = e[i], c = zc(a, o);
      if (!c.valid)
        return { valid: !1 };
      s.push(c.data);
    }
    return { valid: !0, data: s };
  } else
    return r === re.date && n === re.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class Ai extends Ae {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), s = (i, a) => {
      if (Dc(i) || Dc(a))
        return ve;
      const o = zc(i.value, a.value);
      return o.valid ? ((Uc(i) || Uc(a)) && r.dirty(), { status: r.value, value: o.data }) : (ie(n, {
        code: B.invalid_intersection_types
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
Ai.create = (t, e, r) => new Ai({
  left: t,
  right: e,
  typeName: ge.ZodIntersection,
  ...Ie(r)
});
class Xr extends Ae {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== re.array)
      return ie(n, {
        code: B.invalid_type,
        expected: re.array,
        received: n.parsedType
      }), ve;
    if (n.data.length < this._def.items.length)
      return ie(n, {
        code: B.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), ve;
    !this._def.rest && n.data.length > this._def.items.length && (ie(n, {
      code: B.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const i = [...n.data].map((a, o) => {
      const c = this._def.items[o] || this._def.rest;
      return c ? c._parse(new Jr(n, a, n.path, o)) : null;
    }).filter((a) => !!a);
    return n.common.async ? Promise.all(i).then((a) => Yt.mergeArray(r, a)) : Yt.mergeArray(r, i);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new Xr({
      ...this._def,
      rest: e
    });
  }
}
Xr.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Xr({
    items: t,
    typeName: ge.ZodTuple,
    rest: null,
    ...Ie(e)
  });
};
class ji extends Ae {
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
        code: B.invalid_type,
        expected: re.object,
        received: n.parsedType
      }), ve;
    const s = [], i = this._def.keyType, a = this._def.valueType;
    for (const o in n.data)
      s.push({
        key: i._parse(new Jr(n, o, n.path, o)),
        value: a._parse(new Jr(n, n.data[o], n.path, o))
      });
    return n.common.async ? Yt.mergeObjectAsync(r, s) : Yt.mergeObjectSync(r, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, n) {
    return r instanceof Ae ? new ji({
      keyType: e,
      valueType: r,
      typeName: ge.ZodRecord,
      ...Ie(n)
    }) : new ji({
      keyType: Pr.create(),
      valueType: e,
      typeName: ge.ZodRecord,
      ...Ie(r)
    });
  }
}
class ia extends Ae {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== re.map)
      return ie(n, {
        code: B.invalid_type,
        expected: re.map,
        received: n.parsedType
      }), ve;
    const s = this._def.keyType, i = this._def.valueType, a = [...n.data.entries()].map(([o, c], u) => ({
      key: s._parse(new Jr(n, o, n.path, [u, "key"])),
      value: i._parse(new Jr(n, c, n.path, [u, "value"]))
    }));
    if (n.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of a) {
          const u = await c.key, l = await c.value;
          if (u.status === "aborted" || l.status === "aborted")
            return ve;
          (u.status === "dirty" || l.status === "dirty") && r.dirty(), o.set(u.value, l.value);
        }
        return { status: r.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const c of a) {
        const u = c.key, l = c.value;
        if (u.status === "aborted" || l.status === "aborted")
          return ve;
        (u.status === "dirty" || l.status === "dirty") && r.dirty(), o.set(u.value, l.value);
      }
      return { status: r.value, value: o };
    }
  }
}
ia.create = (t, e, r) => new ia({
  valueType: e,
  keyType: t,
  typeName: ge.ZodMap,
  ...Ie(r)
});
class ss extends Ae {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== re.set)
      return ie(n, {
        code: B.invalid_type,
        expected: re.set,
        received: n.parsedType
      }), ve;
    const s = this._def;
    s.minSize !== null && n.data.size < s.minSize.value && (ie(n, {
      code: B.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), r.dirty()), s.maxSize !== null && n.data.size > s.maxSize.value && (ie(n, {
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
      for (const l of c) {
        if (l.status === "aborted")
          return ve;
        l.status === "dirty" && r.dirty(), u.add(l.value);
      }
      return { status: r.value, value: u };
    }
    const o = [...n.data.values()].map((c, u) => i._parse(new Jr(n, c, n.path, u)));
    return n.common.async ? Promise.all(o).then((c) => a(c)) : a(o);
  }
  min(e, r) {
    return new ss({
      ...this._def,
      minSize: { value: e, message: ue.toString(r) }
    });
  }
  max(e, r) {
    return new ss({
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
ss.create = (t, e) => new ss({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: ge.ZodSet,
  ...Ie(e)
});
class Cs extends Ae {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== re.function)
      return ie(r, {
        code: B.invalid_type,
        expected: re.function,
        received: r.parsedType
      }), ve;
    function n(o, c) {
      return ea({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Qo(),
          ki
        ].filter((u) => !!u),
        issueData: {
          code: B.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function s(o, c) {
      return ea({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Qo(),
          ki
        ].filter((u) => !!u),
        issueData: {
          code: B.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const i = { errorMap: r.common.contextualErrorMap }, a = r.data;
    return this._def.returns instanceof $s ? ir(async (...o) => {
      const c = new Ar([]), u = await this._def.args.parseAsync(o, i).catch((p) => {
        throw c.addIssue(n(o, p)), c;
      }), l = await a(...u);
      return await this._def.returns._def.type.parseAsync(l, i).catch((p) => {
        throw c.addIssue(s(l, p)), c;
      });
    }) : ir((...o) => {
      const c = this._def.args.safeParse(o, i);
      if (!c.success)
        throw new Ar([n(o, c.error)]);
      const u = a(...c.data), l = this._def.returns.safeParse(u, i);
      if (!l.success)
        throw new Ar([s(u, l.error)]);
      return l.data;
    });
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new Cs({
      ...this._def,
      args: Xr.create(e).rest(Jn.create())
    });
  }
  returns(e) {
    return new Cs({
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
    return new Cs({
      args: e || Xr.create([]).rest(Jn.create()),
      returns: r || Jn.create(),
      typeName: ge.ZodFunction,
      ...Ie(n)
    });
  }
}
class Li extends Ae {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Li.create = (t, e) => new Li({
  getter: t,
  typeName: ge.ZodLazy,
  ...Ie(e)
});
class Mi extends Ae {
  _parse(e) {
    if (e.data !== this._def.value) {
      const r = this._getOrReturnCtx(e);
      return ie(r, {
        received: r.data,
        code: B.invalid_literal,
        expected: this._def.value
      }), ve;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Mi.create = (t, e) => new Mi({
  value: t,
  typeName: ge.ZodLiteral,
  ...Ie(e)
});
function zf(t, e) {
  return new Ln({
    values: t,
    typeName: ge.ZodEnum,
    ...Ie(e)
  });
}
class Ln extends Ae {
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return ie(r, {
        expected: Xe.joinValues(n),
        received: r.parsedType,
        code: B.invalid_type
      }), ve;
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return ie(r, {
        received: r.data,
        code: B.invalid_enum_value,
        options: n
      }), ve;
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
    return Ln.create(e);
  }
  exclude(e) {
    return Ln.create(this.options.filter((r) => !e.includes(r)));
  }
}
Ln.create = zf;
class Di extends Ae {
  _parse(e) {
    const r = Xe.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== re.string && n.parsedType !== re.number) {
      const s = Xe.objectValues(r);
      return ie(n, {
        expected: Xe.joinValues(s),
        received: n.parsedType,
        code: B.invalid_type
      }), ve;
    }
    if (r.indexOf(e.data) === -1) {
      const s = Xe.objectValues(r);
      return ie(n, {
        received: n.data,
        code: B.invalid_enum_value,
        options: s
      }), ve;
    }
    return ir(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
Di.create = (t, e) => new Di({
  values: t,
  typeName: ge.ZodNativeEnum,
  ...Ie(e)
});
class $s extends Ae {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== re.promise && r.common.async === !1)
      return ie(r, {
        code: B.invalid_type,
        expected: re.promise,
        received: r.parsedType
      }), ve;
    const n = r.parsedType === re.promise ? r.data : Promise.resolve(r.data);
    return ir(n.then((s) => this._def.type.parseAsync(s, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
$s.create = (t, e) => new $s({
  type: t,
  typeName: ge.ZodPromise,
  ...Ie(e)
});
class Dr extends Ae {
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
        if (!ta(a))
          return a;
        const o = s.transform(a.value, i);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => ta(a) ? Promise.resolve(s.transform(a.value, i)).then((o) => ({ status: r.value, value: o })) : a);
    Xe.assertNever(s);
  }
}
Dr.create = (t, e, r) => new Dr({
  schema: t,
  typeName: ge.ZodEffects,
  effect: e,
  ...Ie(r)
});
Dr.createWithPreprocess = (t, e, r) => new Dr({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: ge.ZodEffects,
  ...Ie(r)
});
class dn extends Ae {
  _parse(e) {
    return this._getType(e) === re.undefined ? ir(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
dn.create = (t, e) => new dn({
  innerType: t,
  typeName: ge.ZodOptional,
  ...Ie(e)
});
class is extends Ae {
  _parse(e) {
    return this._getType(e) === re.null ? ir(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
is.create = (t, e) => new is({
  innerType: t,
  typeName: ge.ZodNullable,
  ...Ie(e)
});
class Ui extends Ae {
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
Ui.create = (t, e) => new Ui({
  innerType: t,
  typeName: ge.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...Ie(e)
});
class oa extends Ae {
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
    return ra(s) ? s.then((i) => ({
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new Ar(n.common.issues);
        }
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Ar(n.common.issues);
        }
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
oa.create = (t, e) => new oa({
  innerType: t,
  typeName: ge.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...Ie(e)
});
class aa extends Ae {
  _parse(e) {
    if (this._getType(e) !== re.nan) {
      const n = this._getOrReturnCtx(e);
      return ie(n, {
        code: B.invalid_type,
        expected: re.nan,
        received: n.parsedType
      }), ve;
    }
    return { status: "valid", value: e.data };
  }
}
aa.create = (t) => new aa({
  typeName: ge.ZodNaN,
  ...Ie(t)
});
const OS = Symbol("zod_brand");
class $f extends Ae {
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
class oo extends Ae {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return i.status === "aborted" ? ve : i.status === "dirty" ? (r.dirty(), Uf(i.value)) : this._def.out._parseAsync({
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
    return new oo({
      in: e,
      out: r,
      typeName: ge.ZodPipeline
    });
  }
}
const Vf = (t, e = {}, r) => t ? zs.create().superRefine((n, s) => {
  var i, a;
  if (!t(n)) {
    const o = typeof e == "function" ? e(n) : e, c = (a = (i = o.fatal) !== null && i !== void 0 ? i : r) !== null && a !== void 0 ? a : !0, u = typeof o == "string" ? { message: o } : o;
    s.addIssue({ code: "custom", ...u, fatal: c });
  }
}) : zs.create(), TS = {
  object: gt.lazycreate
};
var ge;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline";
})(ge || (ge = {}));
const kS = (t, e = {
  message: `Input not instance of ${t.name}`
}) => Vf((r) => r instanceof t, e), qf = Pr.create, Zf = An.create, CS = aa.create, PS = jn.create, Ff = Ci.create, NS = ns.create, RS = na.create, AS = Pi.create, jS = Ni.create, LS = zs.create, MS = Jn.create, DS = gn.create, US = sa.create, zS = jr.create, $S = gt.create, VS = gt.strictCreate, qS = Ri.create, ZS = Na.create, FS = Ai.create, KS = Xr.create, WS = ji.create, BS = ia.create, HS = ss.create, GS = Cs.create, YS = Li.create, JS = Mi.create, XS = Ln.create, QS = Di.create, ex = $s.create, qd = Dr.create, tx = dn.create, rx = is.create, nx = Dr.createWithPreprocess, sx = oo.create, ix = () => qf().optional(), ox = () => Zf().optional(), ax = () => Ff().optional(), cx = {
  string: (t) => Pr.create({ ...t, coerce: !0 }),
  number: (t) => An.create({ ...t, coerce: !0 }),
  boolean: (t) => Ci.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => jn.create({ ...t, coerce: !0 }),
  date: (t) => ns.create({ ...t, coerce: !0 })
}, ux = ve;
var $r = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: ki,
  setErrorMap: fS,
  getErrorMap: Qo,
  makeIssue: ea,
  EMPTY_PATH: pS,
  addIssueToContext: ie,
  ParseStatus: Yt,
  INVALID: ve,
  DIRTY: Uf,
  OK: ir,
  isAborted: Dc,
  isDirty: Uc,
  isValid: ta,
  isAsync: ra,
  get util() {
    return Xe;
  },
  get objectUtil() {
    return Mc;
  },
  ZodParsedType: re,
  getParsedType: On,
  ZodType: Ae,
  ZodString: Pr,
  ZodNumber: An,
  ZodBigInt: jn,
  ZodBoolean: Ci,
  ZodDate: ns,
  ZodSymbol: na,
  ZodUndefined: Pi,
  ZodNull: Ni,
  ZodAny: zs,
  ZodUnknown: Jn,
  ZodNever: gn,
  ZodVoid: sa,
  ZodArray: jr,
  ZodObject: gt,
  ZodUnion: Ri,
  ZodDiscriminatedUnion: Na,
  ZodIntersection: Ai,
  ZodTuple: Xr,
  ZodRecord: ji,
  ZodMap: ia,
  ZodSet: ss,
  ZodFunction: Cs,
  ZodLazy: Li,
  ZodLiteral: Mi,
  ZodEnum: Ln,
  ZodNativeEnum: Di,
  ZodPromise: $s,
  ZodEffects: Dr,
  ZodTransformer: Dr,
  ZodOptional: dn,
  ZodNullable: is,
  ZodDefault: Ui,
  ZodCatch: oa,
  ZodNaN: aa,
  BRAND: OS,
  ZodBranded: $f,
  ZodPipeline: oo,
  custom: Vf,
  Schema: Ae,
  ZodSchema: Ae,
  late: TS,
  get ZodFirstPartyTypeKind() {
    return ge;
  },
  coerce: cx,
  any: LS,
  array: zS,
  bigint: PS,
  boolean: Ff,
  date: NS,
  discriminatedUnion: ZS,
  effect: qd,
  enum: XS,
  function: GS,
  instanceof: kS,
  intersection: FS,
  lazy: YS,
  literal: JS,
  map: BS,
  nan: CS,
  nativeEnum: QS,
  never: DS,
  null: jS,
  nullable: rx,
  number: Zf,
  object: $S,
  oboolean: ax,
  onumber: ox,
  optional: tx,
  ostring: ix,
  pipeline: sx,
  preprocess: nx,
  promise: ex,
  record: WS,
  set: HS,
  strictObject: VS,
  string: qf,
  symbol: RS,
  transformer: qd,
  tuple: KS,
  undefined: AS,
  union: qS,
  unknown: MS,
  void: US,
  NEVER: ux,
  ZodIssueCode: B,
  quotelessJson: hS,
  ZodError: Ar
});
const Kf = /^aleo1[a-z0-9]{58}$/i, lx = /^AViewKey1[a-z0-9]{44}$/i, dx = /^APrivateKey1[a-z0-9]{47}$/i, hx = /^at1[a-z0-9]{58}$/i, fx = /^\d+field$/, px = /^\d+u32$/, gx = /^\d+u64$/;
$r.string().regex(Kf);
$r.string().regex(lx);
$r.string().regex(dx);
$r.string().regex(hx);
$r.string().regex(fx);
$r.string().regex(px);
$r.string().regex(gx);
var Zd;
(function(t) {
  t.Record = "record", t.OutputRecord = "outputRecord", t.Public = "public", t.Private = "private", t.Constant = "constant", t.Future = "future", t.ExternalRecord = "external_record";
})(Zd || (Zd = {}));
var $c;
(function(t) {
  t.Deploy = "Deploy", t.Execute = "Execute", t.Send = "Send", t.Receive = "Receive", t.Join = "Join", t.Split = "Split", t.Shield = "Shield", t.Unshield = "Unshield";
})($c || ($c = {}));
var Vc;
(function(t) {
  t.Creating = "Creating", t.Pending = "Pending", t.Settled = "Settled", t.Failed = "Failed";
})(Vc || (Vc = {}));
var qc;
(function(t) {
  t.Private = "Private", t.Public = "Public";
})(qc || (qc = {}));
var Zc;
(function(t) {
  t.AleoTestnet = "AleoTestnet", t.AleoMainnet = "AleoMainnet";
})(Zc || (Zc = {}));
var Fd;
(function(t) {
  t[t.ALEO = 0] = "ALEO";
})(Fd || (Fd = {}));
$r.nativeEnum($c);
$r.nativeEnum(Vc);
$r.nativeEnum(Zc);
$r.nativeEnum(qc);
const Wf = ag("wallet:sdk");
Wf.enabled = !0;
const c2 = (t, e) => {
  const r = Sr(), { request: n, data: s, error: i, loading: a } = Yi({
    topic: (r == null ? void 0 : r.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "requestSignature",
      params: {
        message: t,
        address: Kf.test(e ?? "") ? e : void 0
      }
    }
  }), o = i ? i.message : s && s.error;
  return { requestSignature: () => {
    r && !a && (Wf("useRequestSignature requesting...", [t, e]), n());
  }, response: s, loading: a, error: o };
};
var Fc = { exports: {} }, ii = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kd;
function yx() {
  if (Kd)
    return ii;
  Kd = 1;
  var t = sh, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(o, c, u) {
    var l, f = {}, p = null, m = null;
    u !== void 0 && (p = "" + u), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (m = c.ref);
    for (l in c)
      n.call(c, l) && !i.hasOwnProperty(l) && (f[l] = c[l]);
    if (o && o.defaultProps)
      for (l in c = o.defaultProps, c)
        f[l] === void 0 && (f[l] = c[l]);
    return { $$typeof: e, type: o, key: p, ref: m, props: f, _owner: s.current };
  }
  return ii.Fragment = r, ii.jsx = a, ii.jsxs = a, ii;
}
var oi = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wd;
function mx() {
  return Wd || (Wd = 1, process.env.NODE_ENV !== "production" && function() {
    var t = sh, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), b = Symbol.iterator, E = "@@iterator";
    function T(S) {
      if (S === null || typeof S != "object")
        return null;
      var U = b && S[b] || S[E];
      return typeof U == "function" ? U : null;
    }
    var M = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(S) {
      {
        for (var U = arguments.length, X = new Array(U > 1 ? U - 1 : 0), fe = 1; fe < U; fe++)
          X[fe - 1] = arguments[fe];
        O("error", S, X);
      }
    }
    function O(S, U, X) {
      {
        var fe = M.ReactDebugCurrentFrame, Be = fe.getStackAddendum();
        Be !== "" && (U += "%s", X = X.concat([Be]));
        var $e = X.map(function(qe) {
          return String(qe);
        });
        $e.unshift("Warning: " + U), Function.prototype.apply.call(console[S], console, $e);
      }
    }
    var w = !1, x = !1, y = !1, d = !1, g = !1, P;
    P = Symbol.for("react.module.reference");
    function N(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === n || S === i || g || S === s || S === u || S === l || d || S === m || w || x || y || typeof S == "object" && S !== null && (S.$$typeof === p || S.$$typeof === f || S.$$typeof === a || S.$$typeof === o || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === P || S.getModuleId !== void 0));
    }
    function D(S, U, X) {
      var fe = S.displayName;
      if (fe)
        return fe;
      var Be = U.displayName || U.name || "";
      return Be !== "" ? X + "(" + Be + ")" : X;
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
        case l:
          return "SuspenseList";
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case o:
            var U = S;
            return G(U) + ".Consumer";
          case a:
            var X = S;
            return G(X._context) + ".Provider";
          case c:
            return D(S, S.render, "ForwardRef");
          case f:
            var fe = S.displayName || null;
            return fe !== null ? fe : Y(S.type) || "Memo";
          case p: {
            var Be = S, $e = Be._payload, qe = Be._init;
            try {
              return Y(qe($e));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, A = 0, Q, Z, $, q, z, F, ye;
    function K() {
    }
    K.__reactDisabledLog = !0;
    function de() {
      {
        if (A === 0) {
          Q = console.log, Z = console.info, $ = console.warn, q = console.error, z = console.group, F = console.groupCollapsed, ye = console.groupEnd;
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
            log: k({}, S, {
              value: Q
            }),
            info: k({}, S, {
              value: Z
            }),
            warn: k({}, S, {
              value: $
            }),
            error: k({}, S, {
              value: q
            }),
            group: k({}, S, {
              value: z
            }),
            groupCollapsed: k({}, S, {
              value: F
            }),
            groupEnd: k({}, S, {
              value: ye
            })
          });
        }
        A < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = M.ReactCurrentDispatcher, L;
    function j(S, U, X) {
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
    var C = !1, h;
    {
      var I = typeof WeakMap == "function" ? WeakMap : Map;
      h = new I();
    }
    function H(S, U) {
      if (!S || C)
        return "";
      {
        var X = h.get(S);
        if (X !== void 0)
          return X;
      }
      var fe;
      C = !0;
      var Be = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $e;
      $e = le.current, le.current = null, de();
      try {
        if (U) {
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
            } catch (xr) {
              fe = xr;
            }
            Reflect.construct(S, [], qe);
          } else {
            try {
              qe.call();
            } catch (xr) {
              fe = xr;
            }
            S.call(qe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (xr) {
            fe = xr;
          }
          S();
        }
      } catch (xr) {
        if (xr && fe && typeof xr.stack == "string") {
          for (var De = xr.stack.split(`
`), Dt = fe.stack.split(`
`), dt = De.length - 1, _t = Dt.length - 1; dt >= 1 && _t >= 0 && De[dt] !== Dt[_t]; )
            _t--;
          for (; dt >= 1 && _t >= 0; dt--, _t--)
            if (De[dt] !== Dt[_t]) {
              if (dt !== 1 || _t !== 1)
                do
                  if (dt--, _t--, _t < 0 || De[dt] !== Dt[_t]) {
                    var kt = `
` + De[dt].replace(" at new ", " at ");
                    return S.displayName && kt.includes("<anonymous>") && (kt = kt.replace("<anonymous>", S.displayName)), typeof S == "function" && h.set(S, kt), kt;
                  }
                while (dt >= 1 && _t >= 0);
              break;
            }
        }
      } finally {
        C = !1, le.current = $e, ne(), Error.prepareStackTrace = Be;
      }
      var vn = S ? S.displayName || S.name : "", ao = vn ? j(vn) : "";
      return typeof S == "function" && h.set(S, ao), ao;
    }
    function ee(S, U, X) {
      return H(S, !1);
    }
    function je(S) {
      var U = S.prototype;
      return !!(U && U.isReactComponent);
    }
    function Le(S, U, X) {
      if (S == null)
        return "";
      if (typeof S == "function")
        return H(S, je(S));
      if (typeof S == "string")
        return j(S);
      switch (S) {
        case u:
          return j("Suspense");
        case l:
          return j("SuspenseList");
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case c:
            return ee(S.render);
          case f:
            return Le(S.type, U, X);
          case p: {
            var fe = S, Be = fe._payload, $e = fe._init;
            try {
              return Le($e(Be), U, X);
            } catch {
            }
          }
        }
      return "";
    }
    var Oe = Object.prototype.hasOwnProperty, Ze = {}, at = M.ReactDebugCurrentFrame;
    function tt(S) {
      if (S) {
        var U = S._owner, X = Le(S.type, S._source, U ? U.type : null);
        at.setExtraStackFrame(X);
      } else
        at.setExtraStackFrame(null);
    }
    function Ve(S, U, X, fe, Be) {
      {
        var $e = Function.call.bind(Oe);
        for (var qe in S)
          if ($e(S, qe)) {
            var De = void 0;
            try {
              if (typeof S[qe] != "function") {
                var Dt = Error((fe || "React class") + ": " + X + " type `" + qe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[qe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Dt.name = "Invariant Violation", Dt;
              }
              De = S[qe](U, qe, fe, X, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (dt) {
              De = dt;
            }
            De && !(De instanceof Error) && (tt(Be), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", fe || "React class", X, qe, typeof De), tt(null)), De instanceof Error && !(De.message in Ze) && (Ze[De.message] = !0, tt(Be), v("Failed %s type: %s", X, De.message), tt(null));
          }
      }
    }
    var Ue = Array.isArray;
    function Te(S) {
      return Ue(S);
    }
    function Pe(S) {
      {
        var U = typeof Symbol == "function" && Symbol.toStringTag, X = U && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return X;
      }
    }
    function ke(S) {
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
      if (ke(S))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Pe(S)), we(S);
    }
    var he = M.ReactCurrentOwner, Ne = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Me, me, ze;
    ze = {};
    function Fe(S) {
      if (Oe.call(S, "ref")) {
        var U = Object.getOwnPropertyDescriptor(S, "ref").get;
        if (U && U.isReactWarning)
          return !1;
      }
      return S.ref !== void 0;
    }
    function He(S) {
      if (Oe.call(S, "key")) {
        var U = Object.getOwnPropertyDescriptor(S, "key").get;
        if (U && U.isReactWarning)
          return !1;
      }
      return S.key !== void 0;
    }
    function Ge(S, U) {
      if (typeof S.ref == "string" && he.current && U && he.current.stateNode !== U) {
        var X = Y(he.current.type);
        ze[X] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Y(he.current.type), S.ref), ze[X] = !0);
      }
    }
    function We(S, U) {
      {
        var X = function() {
          Me || (Me = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", U));
        };
        X.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: X,
          configurable: !0
        });
      }
    }
    function hr(S, U) {
      {
        var X = function() {
          me || (me = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", U));
        };
        X.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: X,
          configurable: !0
        });
      }
    }
    var vr = function(S, U, X, fe, Be, $e, qe) {
      var De = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: S,
        key: U,
        ref: X,
        props: qe,
        // Record the component responsible for creating this element.
        _owner: $e
      };
      return De._store = {}, Object.defineProperty(De._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(De, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: fe
      }), Object.defineProperty(De, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Be
      }), Object.freeze && (Object.freeze(De.props), Object.freeze(De)), De;
    };
    function Vr(S, U, X, fe, Be) {
      {
        var $e, qe = {}, De = null, Dt = null;
        X !== void 0 && (_e(X), De = "" + X), He(U) && (_e(U.key), De = "" + U.key), Fe(U) && (Dt = U.ref, Ge(U, Be));
        for ($e in U)
          Oe.call(U, $e) && !Ne.hasOwnProperty($e) && (qe[$e] = U[$e]);
        if (S && S.defaultProps) {
          var dt = S.defaultProps;
          for ($e in dt)
            qe[$e] === void 0 && (qe[$e] = dt[$e]);
        }
        if (De || Dt) {
          var _t = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          De && We(qe, _t), Dt && hr(qe, _t);
        }
        return vr(S, De, Dt, Be, fe, he.current, qe);
      }
    }
    var Mt = M.ReactCurrentOwner, qr = M.ReactDebugCurrentFrame;
    function _r(S) {
      if (S) {
        var U = S._owner, X = Le(S.type, S._source, U ? U.type : null);
        qr.setExtraStackFrame(X);
      } else
        qr.setExtraStackFrame(null);
    }
    var mn;
    mn = !1;
    function ct(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function st() {
      {
        if (Mt.current) {
          var S = Y(Mt.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
    }
    function yt(S) {
      {
        if (S !== void 0) {
          var U = S.fileName.replace(/^.*[\\\/]/, ""), X = S.lineNumber;
          return `

Check your code at ` + U + ":" + X + ".";
        }
        return "";
      }
    }
    var lt = {};
    function mt(S) {
      {
        var U = st();
        if (!U) {
          var X = typeof S == "string" ? S : S.displayName || S.name;
          X && (U = `

Check the top-level render call using <` + X + ">.");
        }
        return U;
      }
    }
    function it(S, U) {
      {
        if (!S._store || S._store.validated || S.key != null)
          return;
        S._store.validated = !0;
        var X = mt(U);
        if (lt[X])
          return;
        lt[X] = !0;
        var fe = "";
        S && S._owner && S._owner !== Mt.current && (fe = " It was passed a child from " + Y(S._owner.type) + "."), _r(S), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', X, fe), _r(null);
      }
    }
    function wt(S, U) {
      {
        if (typeof S != "object")
          return;
        if (Te(S))
          for (var X = 0; X < S.length; X++) {
            var fe = S[X];
            ct(fe) && it(fe, U);
          }
        else if (ct(S))
          S._store && (S._store.validated = !0);
        else if (S) {
          var Be = T(S);
          if (typeof Be == "function" && Be !== S.entries)
            for (var $e = Be.call(S), qe; !(qe = $e.next()).done; )
              ct(qe.value) && it(qe.value, U);
        }
      }
    }
    function It(S) {
      {
        var U = S.type;
        if (U == null || typeof U == "string")
          return;
        var X;
        if (typeof U == "function")
          X = U.propTypes;
        else if (typeof U == "object" && (U.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        U.$$typeof === f))
          X = U.propTypes;
        else
          return;
        if (X) {
          var fe = Y(U);
          Ve(X, S.props, "prop", fe, S);
        } else if (U.PropTypes !== void 0 && !mn) {
          mn = !0;
          var Be = Y(U);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Be || "Unknown");
        }
        typeof U.getDefaultProps == "function" && !U.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ot(S) {
      {
        for (var U = Object.keys(S.props), X = 0; X < U.length; X++) {
          var fe = U[X];
          if (fe !== "children" && fe !== "key") {
            _r(S), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", fe), _r(null);
            break;
          }
        }
        S.ref !== null && (_r(S), v("Invalid attribute `ref` supplied to `React.Fragment`."), _r(null));
      }
    }
    function Et(S, U, X, fe, Be, $e) {
      {
        var qe = N(S);
        if (!qe) {
          var De = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (De += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Dt = yt(Be);
          Dt ? De += Dt : De += st();
          var dt;
          S === null ? dt = "null" : Te(S) ? dt = "array" : S !== void 0 && S.$$typeof === e ? (dt = "<" + (Y(S.type) || "Unknown") + " />", De = " Did you accidentally export a JSX literal instead of a component?") : dt = typeof S, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", dt, De);
        }
        var _t = Vr(S, U, X, Be, $e);
        if (_t == null)
          return _t;
        if (qe) {
          var kt = U.children;
          if (kt !== void 0)
            if (fe)
              if (Te(kt)) {
                for (var vn = 0; vn < kt.length; vn++)
                  wt(kt[vn], S);
                Object.freeze && Object.freeze(kt);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              wt(kt, S);
        }
        return S === n ? Ot(_t) : It(_t), _t;
      }
    }
    function Tt(S, U, X) {
      return Et(S, U, X, !0);
    }
    function St(S, U, X) {
      return Et(S, U, X, !1);
    }
    var vt = St, rt = Tt;
    oi.Fragment = n, oi.jsx = vt, oi.jsxs = rt;
  }()), oi;
}
process.env.NODE_ENV === "production" ? Fc.exports = yx() : Fc.exports = mx();
var Kc = Fc.exports, Ee = {
  context: void 0,
  registry: void 0
};
function ui(t) {
  Ee.context = t;
}
var vx = (t, e) => t === e, ca = Symbol("solid-proxy"), Bf = Symbol("solid-track"), ua = {
  equals: vx
}, Hf = ep, yn = 1, la = 2, Gf = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
}, Xa = {}, Ye = null, Qa = null, _x = null, Qe = null, Ht = null, hn = null, Ra = 0;
function Xn(t, e) {
  const r = Qe, n = Ye, s = t.length === 0, i = e === void 0 ? n : e, a = s ? Gf : {
    owned: null,
    cleanups: null,
    context: i ? i.context : null,
    owner: i
  }, o = s ? t : () => t(() => Lt(() => ja(a)));
  Ye = a, Qe = null;
  try {
    return Qr(o, !0);
  } finally {
    Qe = r, Ye = n;
  }
}
function tr(t, e) {
  e = e ? Object.assign({}, ua, e) : ua;
  const r = {
    value: t,
    observers: null,
    observerSlots: null,
    comparator: e.equals || void 0
  }, n = (s) => (typeof s == "function" && (s = s(r.value)), Qf(r, s));
  return [Xf.bind(r), n];
}
function Bd(t, e, r) {
  const n = Aa(t, e, !0, yn);
  Gs(n);
}
function Qn(t, e, r) {
  const n = Aa(t, e, !1, yn);
  Gs(n);
}
function Yf(t, e, r) {
  Hf = Cx;
  const n = Aa(t, e, !1, yn);
  (!r || !r.render) && (n.user = !0), hn ? hn.push(n) : Gs(n);
}
function lr(t, e, r) {
  r = r ? Object.assign({}, ua, r) : ua;
  const n = Aa(t, e, !0, 0);
  return n.observers = null, n.observerSlots = null, n.comparator = r.equals || void 0, Gs(n), Xf.bind(n);
}
function bx(t) {
  return t && typeof t == "object" && "then" in t;
}
function wx(t, e, r) {
  let n, s, i;
  arguments.length === 2 && typeof e == "object" || arguments.length === 1 ? (n = !0, s = t, i = e || {}) : (n = t, s = e, i = r || {});
  let a = null, o = Xa, c = null, u = !1, l = "initialValue" in i, f = typeof n == "function" && lr(n);
  const p = /* @__PURE__ */ new Set(), [m, b] = (i.storage || tr)(i.initialValue), [E, T] = tr(void 0), [M, v] = tr(void 0, {
    equals: !1
  }), [O, w] = tr(l ? "ready" : "unresolved");
  if (Ee.context) {
    c = `${Ee.context.id}${Ee.context.count++}`;
    let P;
    i.ssrLoadFrom === "initial" ? o = i.initialValue : Ee.load && (P = Ee.load(c)) && (o = P);
  }
  function x(P, N, D, G) {
    return a === P && (a = null, G !== void 0 && (l = !0), (P === o || N === o) && i.onHydrated && queueMicrotask(() => i.onHydrated(G, {
      value: N
    })), o = Xa, y(N, D)), N;
  }
  function y(P, N) {
    Qr(() => {
      N === void 0 && b(() => P), w(N !== void 0 ? "errored" : l ? "ready" : "unresolved"), T(N);
      for (const D of p.keys())
        D.decrement();
      p.clear();
    }, !1);
  }
  function d() {
    const P = Ox, N = m(), D = E();
    if (D !== void 0 && !a)
      throw D;
    return Qe && !Qe.user && P && Bd(() => {
      M(), a && (P.resolved || p.has(P) || (P.increment(), p.add(P)));
    }), N;
  }
  function g(P = !0) {
    if (P !== !1 && u)
      return;
    u = !1;
    const N = f ? f() : n;
    if (N == null || N === !1) {
      x(a, Lt(m));
      return;
    }
    const D = o !== Xa ? o : Lt(() => s(N, {
      value: m(),
      refetching: P
    }));
    return bx(D) ? (a = D, "value" in D ? (D.status === "success" ? x(a, D.value, void 0, N) : x(a, void 0, void 0, N), D) : (u = !0, queueMicrotask(() => u = !1), Qr(() => {
      w(l ? "refreshing" : "pending"), v();
    }, !1), D.then((G) => x(D, G, void 0, N), (G) => x(D, void 0, rp(G), N)))) : (x(a, D, void 0, N), D);
  }
  return Object.defineProperties(d, {
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
        if (!l)
          return d();
        const P = E();
        if (P && !a)
          throw P;
        return m();
      }
    }
  }), f ? Bd(() => g(!1)) : g(!1), [d, {
    refetch: g,
    mutate: b
  }];
}
function u2(t) {
  return Qr(t, !1);
}
function Lt(t) {
  if (Qe === null)
    return t();
  const e = Qe;
  Qe = null;
  try {
    return t();
  } finally {
    Qe = e;
  }
}
function l2(t, e, r) {
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
function Ex(t) {
  Yf(() => Lt(t));
}
function zi(t) {
  return Ye === null || (Ye.cleanups === null ? Ye.cleanups = [t] : Ye.cleanups.push(t)), t;
}
function d2() {
  return Qe;
}
function Hd() {
  return Ye;
}
function Sx(t, e) {
  const r = Ye, n = Qe;
  Ye = t, Qe = null;
  try {
    return Qr(e, !0);
  } catch (s) {
    Ru(s);
  } finally {
    Ye = r, Qe = n;
  }
}
function xx(t) {
  const e = Qe, r = Ye;
  return Promise.resolve().then(() => {
    Qe = e, Ye = r;
    let n;
    return Qr(t, !1), Qe = Ye = null, n ? n.done : void 0;
  });
}
var [Ix, h2] = /* @__PURE__ */ tr(!1);
function f2() {
  return [Ix, xx];
}
function p2(t, e) {
  const r = Symbol("context");
  return {
    id: r,
    Provider: Px(r),
    defaultValue: t
  };
}
function g2(t) {
  return Ye && Ye.context && Ye.context[t.id] !== void 0 ? Ye.context[t.id] : t.defaultValue;
}
function Jf(t) {
  const e = lr(t), r = lr(() => Wc(e()));
  return r.toArray = () => {
    const n = r();
    return Array.isArray(n) ? n : n != null ? [n] : [];
  }, r;
}
var Ox;
function Xf() {
  if (this.sources && this.state)
    if (this.state === yn)
      Gs(this);
    else {
      const t = Ht;
      Ht = null, Qr(() => ha(this), !1), Ht = t;
    }
  if (Qe) {
    const t = this.observers ? this.observers.length : 0;
    Qe.sources ? (Qe.sources.push(this), Qe.sourceSlots.push(t)) : (Qe.sources = [this], Qe.sourceSlots = [t]), this.observers ? (this.observers.push(Qe), this.observerSlots.push(Qe.sources.length - 1)) : (this.observers = [Qe], this.observerSlots = [Qe.sources.length - 1]);
  }
  return this.value;
}
function Qf(t, e, r) {
  let n = t.value;
  return (!t.comparator || !t.comparator(n, e)) && (t.value = e, t.observers && t.observers.length && Qr(() => {
    for (let s = 0; s < t.observers.length; s += 1) {
      const i = t.observers[s], a = Qa && Qa.running;
      a && Qa.disposed.has(i), (a ? !i.tState : !i.state) && (i.pure ? Ht.push(i) : hn.push(i), i.observers && tp(i)), a || (i.state = yn);
    }
    if (Ht.length > 1e6)
      throw Ht = [], new Error();
  }, !1)), e;
}
function Gs(t) {
  if (!t.fn)
    return;
  ja(t);
  const e = Ra;
  Tx(t, t.value, e);
}
function Tx(t, e, r) {
  let n;
  const s = Ye, i = Qe;
  Qe = Ye = t;
  try {
    n = t.fn(e);
  } catch (a) {
    return t.pure && (t.state = yn, t.owned && t.owned.forEach(ja), t.owned = null), t.updatedAt = r + 1, Ru(a);
  } finally {
    Qe = i, Ye = s;
  }
  (!t.updatedAt || t.updatedAt <= r) && (t.updatedAt != null && "observers" in t ? Qf(t, n) : t.value = n, t.updatedAt = r);
}
function Aa(t, e, r, n = yn, s) {
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
  return Ye === null || Ye !== Gf && (Ye.owned ? Ye.owned.push(i) : Ye.owned = [i]), i;
}
function da(t) {
  if (t.state === 0)
    return;
  if (t.state === la)
    return ha(t);
  if (t.suspense && Lt(t.suspense.inFallback))
    return t.suspense.effects.push(t);
  const e = [t];
  for (; (t = t.owner) && (!t.updatedAt || t.updatedAt < Ra); )
    t.state && e.push(t);
  for (let r = e.length - 1; r >= 0; r--)
    if (t = e[r], t.state === yn)
      Gs(t);
    else if (t.state === la) {
      const n = Ht;
      Ht = null, Qr(() => ha(t, e[0]), !1), Ht = n;
    }
}
function Qr(t, e) {
  if (Ht)
    return t();
  let r = !1;
  e || (Ht = []), hn ? r = !0 : hn = [], Ra++;
  try {
    const n = t();
    return kx(r), n;
  } catch (n) {
    r || (hn = null), Ht = null, Ru(n);
  }
}
function kx(t) {
  if (Ht && (ep(Ht), Ht = null), t)
    return;
  const e = hn;
  hn = null, e.length && Qr(() => Hf(e), !1);
}
function ep(t) {
  for (let e = 0; e < t.length; e++)
    da(t[e]);
}
function Cx(t) {
  let e, r = 0;
  for (e = 0; e < t.length; e++) {
    const n = t[e];
    n.user ? t[r++] = n : da(n);
  }
  if (Ee.context) {
    if (Ee.count) {
      Ee.effects || (Ee.effects = []), Ee.effects.push(...t.slice(0, r));
      return;
    } else
      Ee.effects && (t = [...Ee.effects, ...t], r += Ee.effects.length, delete Ee.effects);
    ui();
  }
  for (e = 0; e < r; e++)
    da(t[e]);
}
function ha(t, e) {
  t.state = 0;
  for (let r = 0; r < t.sources.length; r += 1) {
    const n = t.sources[r];
    if (n.sources) {
      const s = n.state;
      s === yn ? n !== e && (!n.updatedAt || n.updatedAt < Ra) && da(n) : s === la && ha(n, e);
    }
  }
}
function tp(t) {
  for (let e = 0; e < t.observers.length; e += 1) {
    const r = t.observers[e];
    r.state || (r.state = la, r.pure ? Ht.push(r) : hn.push(r), r.observers && tp(r));
  }
}
function ja(t) {
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
      ja(t.owned[e]);
    t.owned = null;
  }
  if (t.cleanups) {
    for (e = t.cleanups.length - 1; e >= 0; e--)
      t.cleanups[e]();
    t.cleanups = null;
  }
  t.state = 0;
}
function rp(t) {
  return t instanceof Error ? t : new Error(typeof t == "string" ? t : "Unknown error", {
    cause: t
  });
}
function Ru(t, e = Ye) {
  throw rp(t);
}
function Wc(t) {
  if (typeof t == "function" && !t.length)
    return Wc(t());
  if (Array.isArray(t)) {
    const e = [];
    for (let r = 0; r < t.length; r++) {
      const n = Wc(t[r]);
      Array.isArray(n) ? e.push.apply(e, n) : e.push(n);
    }
    return e;
  }
  return t;
}
function Px(t, e) {
  return function(n) {
    let s;
    return Qn(() => s = Lt(() => (Ye.context = {
      ...Ye.context,
      [t]: n.value
    }, Jf(() => n.children))), void 0), s;
  };
}
var Bc = Symbol("fallback");
function fa(t) {
  for (let e = 0; e < t.length; e++)
    t[e]();
}
function Nx(t, e, r = {}) {
  let n = [], s = [], i = [], a = 0, o = e.length > 1 ? [] : null;
  return zi(() => fa(i)), () => {
    let c = t() || [], u, l;
    return c[Bf], Lt(() => {
      let p = c.length, m, b, E, T, M, v, O, w, x;
      if (p === 0)
        a !== 0 && (fa(i), i = [], n = [], s = [], a = 0, o && (o = [])), r.fallback && (n = [Bc], s[0] = Xn((y) => (i[0] = y, r.fallback())), a = 1);
      else if (a === 0) {
        for (s = new Array(p), l = 0; l < p; l++)
          n[l] = c[l], s[l] = Xn(f);
        a = p;
      } else {
        for (E = new Array(p), T = new Array(p), o && (M = new Array(p)), v = 0, O = Math.min(a, p); v < O && n[v] === c[v]; v++)
          ;
        for (O = a - 1, w = p - 1; O >= v && w >= v && n[O] === c[w]; O--, w--)
          E[w] = s[O], T[w] = i[O], o && (M[w] = o[O]);
        for (m = /* @__PURE__ */ new Map(), b = new Array(w + 1), l = w; l >= v; l--)
          x = c[l], u = m.get(x), b[l] = u === void 0 ? -1 : u, m.set(x, l);
        for (u = v; u <= O; u++)
          x = n[u], l = m.get(x), l !== void 0 && l !== -1 ? (E[l] = s[u], T[l] = i[u], o && (M[l] = o[u]), l = b[l], m.set(x, l)) : i[u]();
        for (l = v; l < p; l++)
          l in E ? (s[l] = E[l], i[l] = T[l], o && (o[l] = M[l], o[l](l))) : s[l] = Xn(f);
        s = s.slice(0, a = p), n = c.slice(0);
      }
      return s;
    });
    function f(p) {
      if (i[l] = p, o) {
        const [m, b] = tr(l);
        return o[l] = b, e(c[l], m);
      }
      return e(c[l]);
    }
  };
}
function Rx(t, e, r = {}) {
  let n = [], s = [], i = [], a = [], o = 0, c;
  return zi(() => fa(i)), () => {
    const u = t() || [];
    return u[Bf], Lt(() => {
      if (u.length === 0)
        return o !== 0 && (fa(i), i = [], n = [], s = [], o = 0, a = []), r.fallback && (n = [Bc], s[0] = Xn((f) => (i[0] = f, r.fallback())), o = 1), s;
      for (n[0] === Bc && (i[0](), i = [], n = [], s = [], o = 0), c = 0; c < u.length; c++)
        c < n.length && n[c] !== u[c] ? a[c](() => u[c]) : c >= n.length && (s[c] = Xn(l));
      for (; c < n.length; c++)
        i[c]();
      return o = a.length = i.length = u.length, n = u.slice(0), s = s.slice(0, o);
    });
    function l(f) {
      i[c] = f;
      const [p, m] = tr(u[c]);
      return a[c] = m, e(p, c);
    }
  };
}
function Ax(t, e) {
  return Lt(() => t(e || {}));
}
function Eo() {
  return !0;
}
var Hc = {
  get(t, e, r) {
    return e === ca ? r : t.get(e);
  },
  has(t, e) {
    return e === ca ? !0 : t.has(e);
  },
  set: Eo,
  deleteProperty: Eo,
  getOwnPropertyDescriptor(t, e) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return t.get(e);
      },
      set: Eo,
      deleteProperty: Eo
    };
  },
  ownKeys(t) {
    return t.keys();
  }
};
function ec(t) {
  return (t = typeof t == "function" ? t() : t) ? t : {};
}
function jx() {
  for (let t = 0, e = this.length; t < e; ++t) {
    const r = this[t]();
    if (r !== void 0)
      return r;
  }
}
function Lx(...t) {
  let e = !1;
  for (let a = 0; a < t.length; a++) {
    const o = t[a];
    e = e || !!o && ca in o, t[a] = typeof o == "function" ? (e = !0, lr(o)) : o;
  }
  if (e)
    return new Proxy({
      get(a) {
        for (let o = t.length - 1; o >= 0; o--) {
          const c = ec(t[o])[a];
          if (c !== void 0)
            return c;
        }
      },
      has(a) {
        for (let o = t.length - 1; o >= 0; o--)
          if (a in ec(t[o]))
            return !0;
        return !1;
      },
      keys() {
        const a = [];
        for (let o = 0; o < t.length; o++)
          a.push(...Object.keys(ec(t[o])));
        return [...new Set(a)];
      }
    }, Hc);
  const r = {}, n = /* @__PURE__ */ Object.create(null);
  for (let a = t.length - 1; a >= 0; a--) {
    const o = t[a];
    if (!o)
      continue;
    const c = Object.getOwnPropertyNames(o);
    for (let u = c.length - 1; u >= 0; u--) {
      const l = c[u];
      if (l === "__proto__" || l === "constructor")
        continue;
      const f = Object.getOwnPropertyDescriptor(o, l);
      if (!n[l])
        n[l] = f.get ? {
          enumerable: !0,
          configurable: !0,
          get: jx.bind(r[l] = [f.get.bind(o)])
        } : f.value !== void 0 ? f : void 0;
      else {
        const p = r[l];
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
function Mx(t, ...e) {
  if (ca in t) {
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
    }, Hc));
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
    }, Hc)), i;
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
function Dx(t) {
  let e, r;
  const n = (s) => {
    const i = Ee.context;
    if (i) {
      const [o, c] = tr();
      Ee.count || (Ee.count = 0), Ee.count++, (r || (r = t())).then((u) => {
        ui(i), Ee.count--, c(() => u.default), ui();
      }), e = o;
    } else if (!e) {
      const [o] = wx(() => (r || (r = t())).then((c) => c.default));
      e = o;
    }
    let a;
    return lr(() => (a = e()) && Lt(() => {
      if (!i)
        return a(s);
      const o = Ee.context;
      ui(i);
      const c = a(s);
      return ui(o), c;
    }));
  };
  return n.preload = () => r || ((r = t()).then((s) => e = () => s.default), r), n;
}
var Ux = 0;
function y2() {
  const t = Ee.context;
  return t ? `${t.id}${t.count++}` : `cl-${Ux++}`;
}
var np = (t) => `Stale read from <${t}>.`;
function m2(t) {
  const e = "fallback" in t && {
    fallback: () => t.fallback
  };
  return lr(Nx(() => t.each, t.children, e || void 0));
}
function v2(t) {
  const e = "fallback" in t && {
    fallback: () => t.fallback
  };
  return lr(Rx(() => t.each, t.children, e || void 0));
}
function _2(t) {
  const e = t.keyed, r = lr(() => t.when, void 0, {
    equals: (n, s) => e ? n === s : !n == !s
  });
  return lr(() => {
    const n = r();
    if (n) {
      const s = t.children;
      return typeof s == "function" && s.length > 0 ? Lt(() => s(e ? n : () => {
        if (!Lt(r))
          throw np("Show");
        return t.when;
      })) : s;
    }
    return t.fallback;
  }, void 0, void 0);
}
function b2(t) {
  let e = !1;
  const r = (i, a) => (e ? i[1] === a[1] : !i[1] == !a[1]) && i[2] === a[2], n = Jf(() => t.children), s = lr(() => {
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
        throw np("Match");
      return o.when;
    })) : c;
  }, void 0, void 0);
}
function w2(t) {
  return t;
}
var zx = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"], $x = /* @__PURE__ */ new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...zx]), Vx = /* @__PURE__ */ new Set(["innerHTML", "textContent", "innerText", "children"]), qx = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  className: "class",
  htmlFor: "for"
}), Zx = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
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
function Fx(t, e) {
  const r = Zx[t];
  return typeof r == "object" ? r[e] ? r.$ : void 0 : r;
}
var Kx = /* @__PURE__ */ new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]), Wx = /* @__PURE__ */ new Set([
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
]), Bx = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
function Hx(t, e, r) {
  let n = r.length, s = e.length, i = n, a = 0, o = 0, c = e[s - 1].nextSibling, u = null;
  for (; a < s || o < i; ) {
    if (e[a] === r[o]) {
      a++, o++;
      continue;
    }
    for (; e[s - 1] === r[i - 1]; )
      s--, i--;
    if (s === a) {
      const l = i < n ? o ? r[o - 1].nextSibling : r[i - o] : c;
      for (; o < i; )
        t.insertBefore(r[o++], l);
    } else if (i === o)
      for (; a < s; )
        (!u || !u.has(e[a])) && e[a].remove(), a++;
    else if (e[a] === r[i - 1] && r[o] === e[s - 1]) {
      const l = e[--s].nextSibling;
      t.insertBefore(r[o++], e[a++].nextSibling), t.insertBefore(r[--i], l), e[s] = r[i];
    } else {
      if (!u) {
        u = /* @__PURE__ */ new Map();
        let f = o;
        for (; f < i; )
          u.set(r[f], f++);
      }
      const l = u.get(e[a]);
      if (l != null)
        if (o < l && l < i) {
          let f = a, p = 1, m;
          for (; ++f < s && f < i && !((m = u.get(e[f])) == null || m !== l + p); )
            p++;
          if (p > l - o) {
            const b = e[a];
            for (; o < l; )
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
var di = "_$DX_DELEGATE";
function Gx(t, e, r, n = {}) {
  let s;
  return Xn((i) => {
    s = i, e === document ? t() : Yc(e, t(), e.firstChild ? null : void 0, r);
  }, n.owner), () => {
    s(), e.textContent = "";
  };
}
function E2(t, e, r) {
  let n;
  const s = () => {
    const a = document.createElement("template");
    return a.innerHTML = t, r ? a.content.firstChild.firstChild : a.content.firstChild;
  }, i = e ? () => Lt(() => document.importNode(n || (n = s()), !0)) : () => (n || (n = s())).cloneNode(!0);
  return i.cloneNode = i, i;
}
function Yx(t, e = window.document) {
  const r = e[di] || (e[di] = /* @__PURE__ */ new Set());
  for (let n = 0, s = t.length; n < s; n++) {
    const i = t[n];
    r.has(i) || (r.add(i), e.addEventListener(i, sp));
  }
}
function S2(t = window.document) {
  if (t[di]) {
    for (let e of t[di].keys())
      t.removeEventListener(e, sp);
    delete t[di];
  }
}
function Gc(t, e, r) {
  Ee.context || (r == null ? t.removeAttribute(e) : t.setAttribute(e, r));
}
function Jx(t, e, r, n) {
  Ee.context || (n == null ? t.removeAttributeNS(e, r) : t.setAttributeNS(e, r, n));
}
function Xx(t, e) {
  Ee.context || (e == null ? t.removeAttribute("class") : t.className = e);
}
function Qx(t, e, r, n) {
  if (n)
    Array.isArray(r) ? (t[`$$${e}`] = r[0], t[`$$${e}Data`] = r[1]) : t[`$$${e}`] = r;
  else if (Array.isArray(r)) {
    const s = r[0];
    t.addEventListener(e, r[0] = (i) => s.call(t, r[1], i));
  } else
    t.addEventListener(e, r);
}
function eI(t, e, r = {}) {
  const n = Object.keys(e || {}), s = Object.keys(r);
  let i, a;
  for (i = 0, a = s.length; i < a; i++) {
    const o = s[i];
    !o || o === "undefined" || e[o] || (Gd(t, o, !1), delete r[o]);
  }
  for (i = 0, a = n.length; i < a; i++) {
    const o = n[i], c = !!e[o];
    !o || o === "undefined" || r[o] === c || !c || (Gd(t, o, !0), r[o] = c);
  }
  return r;
}
function tI(t, e, r) {
  if (!e)
    return r ? Gc(t, "style") : e;
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
function rI(t, e = {}, r, n) {
  const s = {};
  return n || Qn(() => s.children = Vs(t, e.children, s.children)), Qn(() => e.ref && e.ref(t)), Qn(() => nI(t, e, r, !0, s, !0)), s;
}
function x2(t, e, r) {
  return Lt(() => t(e, r));
}
function Yc(t, e, r, n) {
  if (r !== void 0 && !n && (n = []), typeof e != "function")
    return Vs(t, e, n, r);
  Qn((s) => Vs(t, e(), s, r), n);
}
function nI(t, e, r, n, s = {}, i = !1) {
  e || (e = {});
  for (const a in s)
    if (!(a in e)) {
      if (a === "children")
        continue;
      s[a] = Yd(t, a, null, s[a], r, i);
    }
  for (const a in e) {
    if (a === "children") {
      n || Vs(t, e.children);
      continue;
    }
    const o = e[a];
    s[a] = Yd(t, a, o, s[a], r, i);
  }
}
function sI(t) {
  let e, r;
  return !Ee.context || !(e = Ee.registry.get(r = oI())) ? t() : (Ee.completed && Ee.completed.add(e), Ee.registry.delete(r), e);
}
function iI(t) {
  return t.toLowerCase().replace(/-([a-z])/g, (e, r) => r.toUpperCase());
}
function Gd(t, e, r) {
  const n = e.trim().split(/\s+/);
  for (let s = 0, i = n.length; s < i; s++)
    t.classList.toggle(n[s], r);
}
function Yd(t, e, r, n, s, i) {
  let a, o, c, u, l;
  if (e === "style")
    return tI(t, r, n);
  if (e === "classList")
    return eI(t, r, n);
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
    const f = e.slice(2).toLowerCase(), p = Kx.has(f);
    if (!p && n) {
      const m = Array.isArray(n) ? n[0] : n;
      t.removeEventListener(f, m);
    }
    (p || r) && (Qx(t, f, r, p), p && Yx([f]));
  } else if (e.slice(0, 5) === "attr:")
    Gc(t, e.slice(5), r);
  else if ((l = e.slice(0, 5) === "prop:") || (c = Vx.has(e)) || !s && ((u = Fx(e, t.tagName)) || (o = $x.has(e))) || (a = t.nodeName.includes("-"))) {
    if (l)
      e = e.slice(5), o = !0;
    else if (Ee.context)
      return r;
    e === "class" || e === "className" ? Xx(t, r) : a && !o && !c ? t[iI(e)] = r : t[u || e] = r;
  } else {
    const f = s && e.indexOf(":") > -1 && Bx[e.split(":")[0]];
    f ? Jx(t, f, e, r) : Gc(t, qx[e] || e, r);
  }
  return r;
}
function sp(t) {
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
function Vs(t, e, r, n, s) {
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
      o && o.nodeType === 3 ? o.data !== e && (o.data = e) : o = document.createTextNode(e), r = ms(t, r, n, o);
    } else
      r !== "" && typeof r == "string" ? r = t.firstChild.data = e : r = t.textContent = e;
  } else if (e == null || i === "boolean") {
    if (Ee.context)
      return r;
    r = ms(t, r, n);
  } else {
    if (i === "function")
      return Qn(() => {
        let o = e();
        for (; typeof o == "function"; )
          o = o();
        r = Vs(t, o, r, n);
      }), () => r;
    if (Array.isArray(e)) {
      const o = [], c = r && Array.isArray(r);
      if (Jc(o, e, r, s))
        return Qn(() => r = Vs(t, o, r, n, !0)), () => r;
      if (Ee.context) {
        if (!o.length)
          return r;
        if (n === void 0)
          return [...t.childNodes];
        let u = o[0], l = [u];
        for (; (u = u.nextSibling) !== n; )
          l.push(u);
        return r = l;
      }
      if (o.length === 0) {
        if (r = ms(t, r, n), a)
          return r;
      } else
        c ? r.length === 0 ? Jd(t, o, n) : Hx(t, r, o) : (r && ms(t), Jd(t, o));
      r = o;
    } else if (e.nodeType) {
      if (Ee.context && e.parentNode)
        return r = a ? [e] : e;
      if (Array.isArray(r)) {
        if (a)
          return r = ms(t, r, n, e);
        ms(t, r, null, e);
      } else
        r == null || r === "" || !t.firstChild ? t.appendChild(e) : t.replaceChild(e, t.firstChild);
      r = e;
    }
  }
  return r;
}
function Jc(t, e, r, n) {
  let s = !1;
  for (let i = 0, a = e.length; i < a; i++) {
    let o = e[i], c = r && r[i], u;
    if (!(o == null || o === !0 || o === !1))
      if ((u = typeof o) == "object" && o.nodeType)
        t.push(o);
      else if (Array.isArray(o))
        s = Jc(t, o, c) || s;
      else if (u === "function")
        if (n) {
          for (; typeof o == "function"; )
            o = o();
          s = Jc(t, Array.isArray(o) ? o : [o], Array.isArray(c) ? c : [c]) || s;
        } else
          t.push(o), s = !0;
      else {
        const l = String(o);
        c && c.nodeType === 3 && c.data === l ? t.push(c) : t.push(document.createTextNode(l));
      }
  }
  return s;
}
function Jd(t, e, r = null) {
  for (let n = 0, s = e.length; n < s; n++)
    t.insertBefore(e[n], r);
}
function ms(t, e, r, n) {
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
function oI() {
  const t = Ee.context;
  return `${t.id}${t.count++}`;
}
var aI = "http://www.w3.org/2000/svg";
function ip(t, e = !1) {
  return e ? document.createElementNS(aI, t) : document.createElement(t);
}
function I2(t) {
  const {
    useShadow: e
  } = t, r = document.createTextNode(""), n = () => t.mount || document.body, s = Hd();
  let i, a = !!Ee.context;
  return Yf(() => {
    a && (Hd().user = a = !1), i || (i = Sx(s, () => lr(() => t.children)));
    const o = n();
    if (o instanceof HTMLHeadElement) {
      const [c, u] = tr(!1), l = () => u(!0);
      Xn((f) => Yc(o, () => c() ? f() : i(), null)), zi(l);
    } else {
      const c = ip(t.isSVG ? "g" : "div", t.isSVG), u = e && c.attachShadow ? c.attachShadow({
        mode: "open"
      }) : c;
      Object.defineProperty(c, "_$host", {
        get() {
          return r.parentNode;
        },
        configurable: !0
      }), Yc(u, i), o.appendChild(c), t.ref && t.ref(c), zi(() => o.removeChild(c));
    }
  }, void 0, {
    render: !a
  }), r;
}
function O2(t) {
  const [e, r] = Mx(t, ["component"]), n = lr(() => e.component);
  return lr(() => {
    const s = n();
    switch (typeof s) {
      case "function":
        return Lt(() => s(r));
      case "string":
        const i = Wx.has(s), a = Ee.context ? sI() : ip(s, i);
        return rI(a, r, i), a;
    }
  });
}
var cI = (
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
), op = (
  /** @class */
  function() {
    function t(e) {
      this.generateIdentifier = e, this.kv = new cI();
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
), uI = /* @__PURE__ */ function() {
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
}(), lI = (
  /** @class */
  function(t) {
    uI(e, t);
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
  }(op)
), dI = function(t, e) {
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
function hI(t) {
  if ("values" in Object)
    return Object.values(t);
  var e = [];
  for (var r in t)
    t.hasOwnProperty(r) && e.push(t[r]);
  return e;
}
function fI(t, e) {
  var r = hI(t);
  if ("find" in r)
    return r.find(e);
  for (var n = r, s = 0; s < n.length; s++) {
    var i = n[s];
    if (e(i))
      return i;
  }
}
function qs(t, e) {
  Object.entries(t).forEach(function(r) {
    var n = dI(r, 2), s = n[0], i = n[1];
    return e(i, s);
  });
}
function jo(t, e) {
  return t.indexOf(e) !== -1;
}
function Xd(t, e) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    if (e(n))
      return n;
  }
}
var pI = (
  /** @class */
  function() {
    function t() {
      this.transfomers = {};
    }
    return t.prototype.register = function(e) {
      this.transfomers[e.name] = e;
    }, t.prototype.findApplicable = function(e) {
      return fI(this.transfomers, function(r) {
        return r.isApplicable(e);
      });
    }, t.prototype.findByName = function(e) {
      return this.transfomers[e];
    }, t;
  }()
), gI = function(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}, ap = function(t) {
  return typeof t > "u";
}, yI = function(t) {
  return t === null;
}, $i = function(t) {
  return typeof t != "object" || t === null || t === Object.prototype ? !1 : Object.getPrototypeOf(t) === null ? !0 : Object.getPrototypeOf(t) === Object.prototype;
}, Xc = function(t) {
  return $i(t) && Object.keys(t).length === 0;
}, Mn = function(t) {
  return Array.isArray(t);
}, mI = function(t) {
  return typeof t == "string";
}, vI = function(t) {
  return typeof t == "number" && !isNaN(t);
}, _I = function(t) {
  return typeof t == "boolean";
}, bI = function(t) {
  return t instanceof RegExp;
}, Vi = function(t) {
  return t instanceof Map;
}, qi = function(t) {
  return t instanceof Set;
}, cp = function(t) {
  return gI(t) === "Symbol";
}, wI = function(t) {
  return t instanceof Date && !isNaN(t.valueOf());
}, EI = function(t) {
  return t instanceof Error;
}, Qd = function(t) {
  return typeof t == "number" && isNaN(t);
}, SI = function(t) {
  return _I(t) || yI(t) || ap(t) || vI(t) || mI(t) || cp(t);
}, xI = function(t) {
  return typeof t == "bigint";
}, II = function(t) {
  return t === 1 / 0 || t === -1 / 0;
}, OI = function(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}, TI = function(t) {
  return t instanceof URL;
}, up = function(t) {
  return t.replace(/\./g, "\\.");
}, tc = function(t) {
  return t.map(String).map(up).join(".");
}, hi = function(t) {
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
}, Qc = function() {
  return Qc = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, Qc.apply(this, arguments);
}, eu = function(t, e) {
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
}, tu = function(t, e) {
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
var lp = [
  Br(ap, "undefined", function() {
    return null;
  }, function() {
  }),
  Br(xI, "bigint", function(t) {
    return t.toString();
  }, function(t) {
    return typeof BigInt < "u" ? BigInt(t) : t;
  }),
  Br(wI, "Date", function(t) {
    return t.toISOString();
  }, function(t) {
    return new Date(t);
  }),
  Br(EI, "Error", function(t, e) {
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
  Br(bI, "regexp", function(t) {
    return "" + t;
  }, function(t) {
    var e = t.slice(1, t.lastIndexOf("/")), r = t.slice(t.lastIndexOf("/") + 1);
    return new RegExp(e, r);
  }),
  Br(
    qi,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    function(t) {
      return tu([], eu(t.values()));
    },
    function(t) {
      return new Set(t);
    }
  ),
  Br(Vi, "map", function(t) {
    return tu([], eu(t.entries()));
  }, function(t) {
    return new Map(t);
  }),
  Br(function(t) {
    return Qd(t) || II(t);
  }, "number", function(t) {
    return Qd(t) ? "NaN" : t > 0 ? "Infinity" : "-Infinity";
  }, Number),
  Br(function(t) {
    return t === 0 && 1 / t === -1 / 0;
  }, "number", function() {
    return "-0";
  }, Number),
  Br(TI, "URL", function(t) {
    return t.toString();
  }, function(t) {
    return new URL(t);
  })
];
function La(t, e, r, n) {
  return {
    isApplicable: t,
    annotation: e,
    transform: r,
    untransform: n
  };
}
var dp = La(function(t, e) {
  if (cp(t)) {
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
}), kI = [
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
}, {}), hp = La(OI, function(t) {
  return ["typed-array", t.constructor.name];
}, function(t) {
  return tu([], eu(t));
}, function(t, e) {
  var r = kI[e[1]];
  if (!r)
    throw new Error("Trying to deserialize unknown typed array");
  return new r(t);
});
function fp(t, e) {
  if (t != null && t.constructor) {
    var r = !!e.classRegistry.getIdentifier(t.constructor);
    return r;
  }
  return !1;
}
var pp = La(fp, function(t, e) {
  var r = e.classRegistry.getIdentifier(t.constructor);
  return ["class", r];
}, function(t, e) {
  var r = e.classRegistry.getAllowedProps(t.constructor);
  if (!r)
    return Qc({}, t);
  var n = {};
  return r.forEach(function(s) {
    n[s] = t[s];
  }), n;
}, function(t, e, r) {
  var n = r.classRegistry.getValue(e[1]);
  if (!n)
    throw new Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");
  return Object.assign(Object.create(n.prototype), t);
}), gp = La(function(t, e) {
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
}), CI = [pp, dp, gp, hp], eh = function(t, e) {
  var r = Xd(CI, function(s) {
    return s.isApplicable(t, e);
  });
  if (r)
    return {
      value: r.transform(t, e),
      type: r.annotation(t, e)
    };
  var n = Xd(lp, function(s) {
    return s.isApplicable(t, e);
  });
  if (n)
    return {
      value: n.transform(t, e),
      type: n.annotation
    };
}, yp = {};
lp.forEach(function(t) {
  yp[t.annotation] = t;
});
var PI = function(t, e, r) {
  if (Mn(e))
    switch (e[0]) {
      case "symbol":
        return dp.untransform(t, e, r);
      case "class":
        return pp.untransform(t, e, r);
      case "custom":
        return gp.untransform(t, e, r);
      case "typed-array":
        return hp.untransform(t, e, r);
      default:
        throw new Error("Unknown transformation: " + e);
    }
  else {
    var n = yp[e];
    if (!n)
      throw new Error("Unknown transformation: " + e);
    return n.untransform(t, r);
  }
}, xs = function(t, e) {
  for (var r = t.keys(); e > 0; )
    r.next(), e--;
  return r.next().value;
};
function mp(t) {
  if (jo(t, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (jo(t, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (jo(t, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var NI = function(t, e) {
  mp(e);
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    if (qi(t))
      t = xs(t, +n);
    else if (Vi(t)) {
      var s = +n, i = +e[++r] == 0 ? "key" : "value", a = xs(t, s);
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
}, ru = function(t, e, r) {
  if (mp(e), e.length === 0)
    return r(t);
  for (var n = t, s = 0; s < e.length - 1; s++) {
    var i = e[s];
    if (Mn(n)) {
      var a = +i;
      n = n[a];
    } else if ($i(n))
      n = n[i];
    else if (qi(n)) {
      var o = +i;
      n = xs(n, o);
    } else if (Vi(n)) {
      var c = s === e.length - 2;
      if (c)
        break;
      var o = +i, u = +e[++s] == 0 ? "key" : "value", l = xs(n, o);
      switch (u) {
        case "key":
          n = l;
          break;
        case "value":
          n = n.get(l);
          break;
      }
    }
  }
  var f = e[e.length - 1];
  if (Mn(n) ? n[+f] = r(n[+f]) : $i(n) && (n[f] = r(n[f])), qi(n)) {
    var p = xs(n, +f), m = r(p);
    p !== m && (n.delete(p), n.add(m));
  }
  if (Vi(n)) {
    var o = +e[e.length - 2], b = xs(n, o), u = +f == 0 ? "key" : "value";
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
}, un = function(t, e) {
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
}, kn = function(t, e) {
  for (var r = 0, n = e.length, s = t.length; r < n; r++, s++)
    t[s] = e[r];
  return t;
};
function nu(t, e, r) {
  if (r === void 0 && (r = []), !!t) {
    if (!Mn(t)) {
      qs(t, function(a, o) {
        return nu(a, e, kn(kn([], un(r)), un(hi(o))));
      });
      return;
    }
    var n = un(t, 2), s = n[0], i = n[1];
    i && qs(i, function(a, o) {
      nu(a, e, kn(kn([], un(r)), un(hi(o))));
    }), e(s, r);
  }
}
function RI(t, e, r) {
  return nu(e, function(n, s) {
    t = ru(t, s, function(i) {
      return PI(i, n, r);
    });
  }), t;
}
function AI(t, e) {
  function r(a, o) {
    var c = NI(t, hi(o));
    a.map(hi).forEach(function(u) {
      t = ru(t, u, function() {
        return c;
      });
    });
  }
  if (Mn(e)) {
    var n = un(e, 2), s = n[0], i = n[1];
    s.forEach(function(a) {
      t = ru(t, hi(a), function() {
        return t;
      });
    }), i && qs(i, r);
  } else
    qs(e, r);
  return t;
}
var jI = function(t, e) {
  return $i(t) || Mn(t) || Vi(t) || qi(t) || fp(t, e);
};
function LI(t, e, r) {
  var n = r.get(t);
  n ? n.push(e) : r.set(t, [e]);
}
function MI(t, e) {
  var r = {}, n = void 0;
  return t.forEach(function(s) {
    if (!(s.length <= 1)) {
      e || (s = s.map(function(c) {
        return c.map(String);
      }).sort(function(c, u) {
        return c.length - u.length;
      }));
      var i = un(s), a = i[0], o = i.slice(1);
      a.length === 0 ? n = o.map(tc) : r[tc(a)] = o.map(tc);
    }
  }), n ? Xc(r) ? [n] : [n, r] : Xc(r) ? void 0 : r;
}
var vp = function(t, e, r, n, s, i, a) {
  var o;
  s === void 0 && (s = []), i === void 0 && (i = []), a === void 0 && (a = /* @__PURE__ */ new Map());
  var c = SI(t);
  if (!c) {
    LI(t, s, e);
    var u = a.get(t);
    if (u)
      return n ? {
        transformedValue: null
      } : u;
  }
  if (!jI(t, r)) {
    var l = eh(t, r), f = l ? {
      transformedValue: l.value,
      annotations: [l.type]
    } : {
      transformedValue: t
    };
    return c || a.set(t, f), f;
  }
  if (jo(i, t))
    return {
      transformedValue: null
    };
  var p = eh(t, r), m = (o = p == null ? void 0 : p.value) !== null && o !== void 0 ? o : t, b = Mn(m) ? [] : {}, E = {};
  qs(m, function(M, v) {
    var O = vp(M, e, r, n, kn(kn([], un(s)), [v]), kn(kn([], un(i)), [t]), a);
    b[v] = O.transformedValue, Mn(O.annotations) ? E[v] = O.annotations : $i(O.annotations) && qs(O.annotations, function(w, x) {
      E[up(v) + "." + x] = w;
    });
  });
  var T = Xc(E) ? {
    transformedValue: b,
    annotations: p ? [p.type] : void 0
  } : {
    transformedValue: b,
    annotations: p ? [p.type, E] : E
  };
  return c || a.set(t, T), T;
};
function _p(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function DI(t) {
  if (_p(t) !== "Object")
    return !1;
  const e = Object.getPrototypeOf(t);
  return !!e && e.constructor === Object && e === Object.prototype;
}
function th(t) {
  return _p(t) === "Array";
}
function UI(t, e, r, n, s) {
  const i = {}.propertyIsEnumerable.call(n, e) ? "enumerable" : "nonenumerable";
  i === "enumerable" && (t[e] = r), s && i === "nonenumerable" && Object.defineProperty(t, e, {
    value: r,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function su(t, e = {}) {
  if (th(t))
    return t.map((s) => su(s, e));
  if (!DI(t))
    return t;
  const r = Object.getOwnPropertyNames(t), n = Object.getOwnPropertySymbols(t);
  return [...r, ...n].reduce((s, i) => {
    if (th(e.props) && !e.props.includes(i))
      return s;
    const a = t[i], o = su(a, e);
    return UI(s, i, o, t, e.nonenumerable), s;
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
}, zI = function(t, e) {
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
}, $I = function(t, e) {
  for (var r = 0, n = e.length, s = t.length; r < n; r++, s++)
    t[s] = e[r];
  return t;
}, bp = (
  /** @class */
  function() {
    function t(e) {
      var r = e === void 0 ? {} : e, n = r.dedupe, s = n === void 0 ? !1 : n;
      this.classRegistry = new lI(), this.symbolRegistry = new op(function(i) {
        var a;
        return (a = i.description) !== null && a !== void 0 ? a : "";
      }), this.customTransformerRegistry = new pI(), this.allowedErrorProps = [], this.dedupe = s;
    }
    return t.prototype.serialize = function(e) {
      var r = /* @__PURE__ */ new Map(), n = vp(e, r, this, this.dedupe), s = {
        json: n.transformedValue
      };
      n.annotations && (s.meta = Bn(Bn({}, s.meta), { values: n.annotations }));
      var i = MI(r, this.dedupe);
      return i && (s.meta = Bn(Bn({}, s.meta), { referentialEqualities: i })), s;
    }, t.prototype.deserialize = function(e) {
      var r = e.json, n = e.meta, s = su(r);
      return n != null && n.values && (s = RI(s, n.values, this)), n != null && n.referentialEqualities && (s = AI(s, n.referentialEqualities)), s;
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
      (e = this.allowedErrorProps).push.apply(e, $I([], zI(r)));
    }, t.defaultInstance = new t(), t.serialize = t.defaultInstance.serialize.bind(t.defaultInstance), t.deserialize = t.defaultInstance.deserialize.bind(t.defaultInstance), t.stringify = t.defaultInstance.stringify.bind(t.defaultInstance), t.parse = t.defaultInstance.parse.bind(t.defaultInstance), t.registerClass = t.defaultInstance.registerClass.bind(t.defaultInstance), t.registerSymbol = t.defaultInstance.registerSymbol.bind(t.defaultInstance), t.registerCustom = t.defaultInstance.registerCustom.bind(t.defaultInstance), t.allowErrorProps = t.defaultInstance.allowErrorProps.bind(t.defaultInstance), t;
  }()
), VI = bp.serialize, T2 = bp.stringify;
function k2(t) {
  return t.state.fetchStatus === "fetching" ? "fetching" : t.getObserversCount() ? t.state.fetchStatus === "paused" ? "paused" : t.isStale() ? "stale" : "fresh" : "inactive";
}
function C2(t, e) {
  return `${t}${e.charAt(0).toUpperCase() + e.slice(1)}`;
}
function P2({
  queryState: t,
  observerCount: e,
  isStale: r
}) {
  return t.fetchStatus === "fetching" ? "blue" : e ? t.fetchStatus === "paused" ? "purple" : r ? "yellow" : "green" : "gray";
}
function N2({
  status: t,
  isPaused: e
}) {
  return e ? "purple" : t === "error" ? "red" : t === "pending" ? "yellow" : t === "success" ? "green" : "gray";
}
function R2(t) {
  return t === "fresh" ? "green" : t === "stale" ? "yellow" : t === "paused" ? "purple" : t === "inactive" ? "gray" : "blue";
}
var A2 = (t, e = !1) => {
  const {
    json: r
  } = VI(t);
  return JSON.stringify(r, null, e ? 2 : void 0);
}, So = (t) => t.state.fetchStatus !== "idle" ? 0 : t.getObserversCount() ? t.isStale() ? 2 : 1 : 3, qI = (t, e) => t.queryHash.localeCompare(e.queryHash), wp = (t, e) => t.state.dataUpdatedAt < e.state.dataUpdatedAt ? 1 : -1, ZI = (t, e) => So(t) === So(e) ? wp(t, e) : So(t) > So(e) ? 1 : -1, j2 = {
  status: ZI,
  "query hash": qI,
  "last updated": wp
}, xo = (t) => t.state.isPaused ? 0 : t.state.status === "error" ? 2 : t.state.status === "pending" ? 1 : 3, Ep = (t, e) => t.state.submittedAt < e.state.submittedAt ? 1 : -1, FI = (t, e) => xo(t) === xo(e) ? Ep(t, e) : xo(t) > xo(e) ? 1 : -1, L2 = {
  status: FI,
  "last updated": Ep
}, M2 = (t) => t * parseFloat(getComputedStyle(document.documentElement).fontSize), D2 = () => {
  const [t, e] = tr("dark");
  return Ex(() => {
    const r = window.matchMedia("(prefers-color-scheme: dark)");
    e(r.matches ? "dark" : "light");
    const n = (s) => {
      e(s.matches ? "dark" : "light");
    };
    r.addEventListener("change", n), zi(() => r.removeEventListener("change", n));
  }), t;
}, Io = (t, e, r) => {
  if (e.length === 0)
    return r;
  if (t instanceof Map) {
    const n = new Map(t);
    if (e.length === 1)
      return n.set(e[0], r), n;
    const [s, ...i] = e;
    return n.set(s, Io(n.get(s), i, r)), n;
  }
  if (t instanceof Set) {
    const n = Io(Array.from(t), e, r);
    return new Set(n);
  }
  if (Array.isArray(t)) {
    const n = [...t];
    if (e.length === 1)
      return n[e[0]] = r, n;
    const [s, ...i] = e;
    return n[s] = Io(n[s], i, r), n;
  }
  if (t instanceof Object) {
    const n = {
      ...t
    };
    if (e.length === 1)
      return n[e[0]] = r, n;
    const [s, ...i] = e;
    return n[s] = Io(n[s], i, r), n;
  }
  return t;
}, Oo = (t, e) => {
  if (t instanceof Map) {
    const r = new Map(t);
    if (e.length === 1)
      return r.delete(e[0]), r;
    const [n, ...s] = e;
    return r.set(n, Oo(r.get(n), s)), r;
  }
  if (t instanceof Set) {
    const r = Oo(Array.from(t), e);
    return new Set(r);
  }
  if (Array.isArray(t)) {
    const r = [...t];
    if (e.length === 1)
      return r.filter((i, a) => a.toString() !== e[0]);
    const [n, ...s] = e;
    return r[n] = Oo(r[n], s), r;
  }
  if (t instanceof Object) {
    const r = {
      ...t
    };
    if (e.length === 1)
      return delete r[e[0]], r;
    const [n, ...s] = e;
    return r[n] = Oo(r[n], s), r;
  }
  return t;
}, KI = (t) => {
  if (!t || document.querySelector("#_goober"))
    return;
  const r = document.createElement("style"), n = document.createTextNode("");
  r.appendChild(n), r.id = "_goober", r.setAttribute("nonce", t), document.head.appendChild(r);
}, Ps, Zi, Fi, Ki, Gn, Wi, Ns, Rs, As, js, Ls, Bi, nh, WI = (nh = class {
  constructor(t) {
    pr(this, Ps, void 0);
    pr(this, Zi, void 0);
    pr(this, Fi, void 0);
    pr(this, Ki, void 0);
    pr(this, Gn, !1);
    pr(this, Wi, void 0);
    pr(this, Ns, void 0);
    pr(this, Rs, void 0);
    pr(this, As, void 0);
    pr(this, js, void 0);
    pr(this, Ls, void 0);
    pr(this, Bi, void 0);
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
    or(this, Ps, tr(e)), or(this, Fi, r), or(this, Ki, n), or(this, Zi, s), or(this, Wi, u), or(this, Ns, tr(i)), or(this, Rs, tr(a)), or(this, As, tr(o)), or(this, js, tr(c));
  }
  setButtonPosition(t) {
    Ct(this, Ns)[1](t);
  }
  setPosition(t) {
    Ct(this, Rs)[1](t);
  }
  setInitialIsOpen(t) {
    Ct(this, As)[1](t);
  }
  setErrorTypes(t) {
    Ct(this, js)[1](t);
  }
  setClient(t) {
    Ct(this, Ps)[1](t);
  }
  mount(t) {
    if (Ct(this, Gn))
      throw new Error("Devtools is already mounted");
    const e = Gx(() => {
      const r = this, [n] = Ct(this, Ns), [s] = Ct(this, Rs), [i] = Ct(this, As), [a] = Ct(this, js), [o] = Ct(this, Ps);
      let c;
      return Ct(this, Ls) ? c = Ct(this, Ls) : (c = Dx(() => import("./335X72D7-Dpt6dUdV.js")), or(this, Ls, c)), KI(Ct(this, Wi)), Ax(c, Lx({
        get queryFlavor() {
          return Ct(r, Fi);
        },
        get version() {
          return Ct(r, Ki);
        },
        get onlineManager() {
          return Ct(r, Zi);
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
    or(this, Gn, !0), or(this, Bi, e);
  }
  unmount() {
    var t;
    if (!Ct(this, Gn))
      throw new Error("Devtools is not mounted");
    (t = Ct(this, Bi)) == null || t.call(this), or(this, Gn, !1);
  }
}, Ps = new WeakMap(), Zi = new WeakMap(), Fi = new WeakMap(), Ki = new WeakMap(), Gn = new WeakMap(), Wi = new WeakMap(), Ns = new WeakMap(), Rs = new WeakMap(), As = new WeakMap(), js = new WeakMap(), Ls = new WeakMap(), Bi = new WeakMap(), nh);
function BI(t) {
  const e = ng(t.client), r = En.useRef(null), { buttonPosition: n, position: s, initialIsOpen: i, errorTypes: a, styleNonce: o } = t, [c] = En.useState(
    new WI({
      client: e,
      queryFlavor: "React Query",
      version: "5",
      onlineManager: sg,
      buttonPosition: n,
      position: s,
      initialIsOpen: i,
      errorTypes: a,
      styleNonce: o
    })
  );
  return En.useEffect(() => {
    c.setClient(e);
  }, [e, c]), En.useEffect(() => {
    n && c.setButtonPosition(n);
  }, [n, c]), En.useEffect(() => {
    s && c.setPosition(s);
  }, [s, c]), En.useEffect(() => {
    c.setInitialIsOpen(i || !1);
  }, [i, c]), En.useEffect(() => {
    c.setErrorTypes(a || []);
  }, [a, c]), En.useEffect(() => (r.current && c.mount(r.current), () => {
    c.unmount();
  }), [c]), /* @__PURE__ */ Kc.jsx("div", { className: "tsqd-parent-container", ref: r });
}
var HI = process.env.NODE_ENV !== "development" ? function() {
  return null;
} : BI;
const GI = "@puzzlehq/sdk-react", YI = "Puzzle React SDK", JI = "0.2.18", XI = "Your portal to privacy", QI = "./dist/puzzle.cjs.js", e6 = "./dist/puzzle.es.js", t6 = "./dist/puzzle.umd.js", r6 = "./dist/types/index.d.ts", n6 = {
  ".": {
    import: "./dist/puzzle.es.js",
    require: "./dist/puzzle.cjs.js",
    browser: "./dist/puzzle.umd.js",
    types: "./dist/types/index.d.ts"
  }
}, s6 = "module", i6 = {
  "fetch-fix": "find dist -type f \\( -name '*.js' -o -name '*.cjs' \\) -exec sed -i '' 's/self.fetch[[:space:]]*||/fetch ||/g' {} \\;",
  "ws-fix": `find ./dist -type f -name 'index*' -exec sed -i '' -e 's/require(\\"ws\\")/(() => {try { return require(\\"ws\\") } catch (e) { } })()/g' {} +;`,
  build: "vite build && tsc --declaration --emitDeclarationOnly --outDir dist/types && pnpm fetch-fix && pnpm ws-fix && node generate-types-index.cjs",
  "type-check": "tsc --noEmit"
}, o6 = {
  "@puzzlehq/sdk-core": "../core",
  "@tanstack/react-query": "^4.29.5",
  immer: "^9.0.19",
  zustand: "^4.3.9"
}, a6 = {
  "@types/react": "^18.0.27",
  "@types/react-dom": "^18.0.10",
  "@tanstack/react-query-devtools": "^5.13.5"
}, c6 = {
  react: "^18.2.0"
}, u6 = {
  type: "git",
  url: "git+https://github.com/puzzlehq/puzzle-sdk.git"
}, l6 = [
  "puzzle",
  "aleo",
  "web3",
  "crypto"
], d6 = "Puzzle", h6 = "ISC", f6 = {
  url: "https://github.com/puzzlehq/puzzle-sdk/issues"
}, p6 = "https://github.com/puzzlehq/puzzle-sdk#readme", rh = {
  name: GI,
  displayName: YI,
  version: JI,
  description: XI,
  main: QI,
  module: e6,
  browser: t6,
  types: r6,
  exports: n6,
  type: s6,
  scripts: i6,
  dependencies: o6,
  devDependencies: a6,
  peerDependencies: c6,
  repository: u6,
  keywords: l6,
  author: d6,
  license: h6,
  bugs: f6,
  homepage: p6
}, Sp = new ig(), U2 = ({ dAppName: t, dAppDescription: e, dAppUrl: r, dAppIconURL: n, children: s, debugQuery: i = !1 }) => (Lr(() => {
  t5({
    dAppName: t,
    dAppDescription: e,
    dAppUrl: r,
    dAppIconURL: n,
    onDisconnect: fn.getState().onDisconnect()
  });
  const a = rh.version, o = localStorage.getItem("puzzle_sdk_version");
  a !== o && (console.log(`${rh.name}: Updated from ` + o + " to " + a + "!"), localStorage.setItem("puzzle_sdk_version", a)), ih.defaultMaxListeners = 100;
}, []), /* @__PURE__ */ Kc.jsxs(og, { client: Sp, children: [
  i && /* @__PURE__ */ Kc.jsx(HI, { initialIsOpen: !1 }),
  s
] }));
export {
  ca as $,
  d2 as A,
  I6 as B,
  uh as C,
  y2 as D,
  p2 as E,
  m2 as F,
  g2 as G,
  kr as H,
  v2 as I,
  Io as J,
  O6 as K,
  E2 as L,
  x2 as M,
  M2 as N,
  C2 as O,
  I2 as P,
  k2 as Q,
  Lt as R,
  _2 as S,
  Xn as T,
  Mx as U,
  Qx as V,
  el as W,
  Eg as X,
  T2 as Y,
  w2 as Z,
  b2 as _,
  Yx as a,
  B6 as a$,
  Oo as a0,
  S2 as a1,
  f2 as a2,
  O2 as a3,
  Jf as a4,
  Bd as a5,
  rc as a6,
  S6 as a7,
  x6 as a8,
  X6 as a9,
  nS as aA,
  iS as aB,
  oS as aC,
  tS as aD,
  t5 as aE,
  P6 as aF,
  R6 as aG,
  A6 as aH,
  j6 as aI,
  ka as aJ,
  k6 as aK,
  C6 as aL,
  L6 as aM,
  M6 as aN,
  U6 as aO,
  dr as aP,
  D6 as aQ,
  Pa as aR,
  ME as aS,
  N6 as aT,
  Y6 as aU,
  T6 as aV,
  Ta as aW,
  Pu as aX,
  Nu as aY,
  DE as aZ,
  z6 as a_,
  Q6 as aa,
  e2 as ab,
  t2 as ac,
  r2 as ad,
  n2 as ae,
  s2 as af,
  i2 as ag,
  o2 as ah,
  a2 as ai,
  c2 as aj,
  oh as ak,
  Hi as al,
  cg as am,
  ah as an,
  Sr as ao,
  Sp as ap,
  U2 as aq,
  zd as ar,
  Rc as as,
  Nc as at,
  jc as au,
  J6 as av,
  Ac as aw,
  Mf as ax,
  sS as ay,
  rS as az,
  lr as b,
  W6 as b0,
  Z6 as b1,
  H6 as b2,
  V6 as b3,
  q6 as b4,
  F6 as b5,
  K6 as b6,
  $6 as b7,
  G6 as b8,
  tr as c,
  Ms as d,
  Ax as e,
  Yf as f,
  D2 as g,
  Qn as h,
  Yc as i,
  Xx as j,
  l2 as k,
  Gc as l,
  L2 as m,
  P2 as n,
  Ex as o,
  N2 as p,
  rI as q,
  Ua as r,
  j2 as s,
  Lx as t,
  R2 as u,
  A2 as v,
  Wt as w,
  u2 as x,
  zi as y,
  Bf as z
};
