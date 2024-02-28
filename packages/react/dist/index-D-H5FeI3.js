var Zu = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
};
var kt = (t, e, r) => (Zu(t, e, "read from private field"), r ? r.call(t) : e.get(t)), pr = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, ar = (t, e, r, n) => (Zu(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
import * as wn from "react";
import nh, { useEffect as Lr, useState as To } from "react";
import { WalletConnectModalSign as rg } from "@walletconnect/modal-sign-html";
import sh from "events";
import { getSdkError as su } from "@walletconnect/utils";
import { create as ng } from "zustand";
import { useQuery as sg, useQueryClient as ig, onlineManager as og, QueryClient as ag, QueryClientProvider as cg } from "@tanstack/react-query";
import ug from "debug";
const ih = [
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
], iu = ["aleo:3"], oh = ["chainChanged", "accountSelected", "selectedAccountSynced", "sharedAccountSynced"], lg = "f0aaeffe71b636da453fce042d79d723", dg = {
  standaloneChains: iu,
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
}, R6 = {
  requiredNamespaces: {
    aleo: {
      methods: ih,
      chains: iu,
      events: oh
    }
  }
}, hg = "@puzzlehq/sdk-core", fg = "Puzzle SDK", pg = "0.2.21", gg = "Your portal to privacy", yg = "./dist/puzzle.cjs.js", mg = "./dist/puzzle.es.js", vg = "./dist/puzzle.umd.js", bg = "./dist/types/index.d.ts", _g = {
  ".": {
    import: "./dist/puzzle.es.js",
    require: "./dist/puzzle.cjs.js",
    browser: "./dist/puzzle.umd.js",
    types: "./dist/types/index.d.ts"
  }
}, wg = "module", Eg = {
  "fetch-fix": "find dist -type f \\( -name '*.js' -o -name '*.cjs' \\) -exec sed -i '' 's/self.fetch[[:space:]]*||/fetch ||/g' {} \\;",
  "ws-fix": `find ./dist -type f -name 'index*' -exec sed -i '' -e 's/require(\\"ws\\")/(() => {try { return require(\\"ws\\") } catch (e) { } })()/g' {} +;`,
  build: "vite build && tsc --declaration --emitDeclarationOnly --outDir dist/types && pnpm fetch-fix && pnpm ws-fix",
  "type-check": "tsc --noEmit"
}, Sg = {
  type: "git",
  url: "git+https://github.com/puzzlehq/puzzle-sdk.git"
}, xg = {
  "@puzzlehq/types": "1.0.11",
  "@walletconnect/modal-sign-html": "^2.6.2",
  "@walletconnect/types": "^2.11.2",
  "@walletconnect/utils": "^2.11.2",
  debug: "^4.3.4",
  events: "^3.3.0"
}, Ig = {
  buffer: "^6.0.3"
}, Og = [
  "puzzle",
  "html",
  "aleo",
  "web3",
  "crypto"
], Tg = "Puzzle", Cg = "ISC", Pg = {
  url: "https://github.com/puzzlehq/puzzle-sdk/issues"
}, kg = "https://github.com/puzzlehq/puzzle-sdk#readme", Fu = {
  name: hg,
  displayName: fg,
  version: pg,
  description: gg,
  main: yg,
  module: mg,
  browser: vg,
  types: bg,
  private: !1,
  exports: _g,
  type: wg,
  scripts: Eg,
  repository: Sg,
  dependencies: xg,
  peerDependencies: Ig,
  keywords: Og,
  author: Tg,
  license: Cg,
  bugs: Pg,
  homepage: kg
}, Lo = new sh();
let ws;
async function A6(t) {
  let e = !1;
  const r = Fu.version, n = localStorage.getItem("puzzle_sdk_version");
  if (r !== n && (console.log(`${Fu.name}: Updated from ` + n + " to " + r + "!"), localStorage.setItem("puzzle_sdk_version", r), e = !0), ws = new rg({
    projectId: lg,
    metadata: {
      name: t.dAppName,
      description: t.dAppDescription,
      url: t.dAppUrl,
      icons: [t.dAppIconURL]
    },
    modalOptions: { ...dg }
  }), e)
    try {
      Ng(ws, t.onDisconnect);
    } catch (s) {
      console.error(s);
    }
  window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
}
async function Ng(t, e) {
  const r = await (t == null ? void 0 : t.getSession());
  r && (console.log("Disconnecting session", r), e && e(), t.disconnect({
    topic: r.topic,
    reason: su("USER_DISCONNECTED")
  }));
}
async function wt() {
  return new Promise((t) => {
    if (ws)
      t(ws);
    else {
      const e = setInterval(() => {
        ws && (clearInterval(e), t(ws));
      }, 200);
    }
    window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
  });
}
function ah(t) {
  Lr(() => (wt().then((e) => {
    e.onSessionDelete(t);
  }), () => {
    wt().then((e) => {
      e.offSessionDelete(t);
    });
  }), [t]);
}
function Rg(t) {
  Lr(() => (wt().then((e) => {
    e.onSessionExpire(t);
  }), () => {
    wt().then((e) => {
      e.offSessionExpire(t);
    });
  }), [t]);
}
function ch(t) {
  Lr(() => (wt().then((e) => {
    e.onSessionUpdate(t);
  }), () => {
    wt().then((e) => {
      e.offSessionUpdate(t);
    });
  }), [t]);
}
function Sr() {
  const [t, e] = To(void 0);
  return ah((r) => {
    r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), ch((r) => {
    if (t && r.topic === (t == null ? void 0 : t.topic)) {
      const { namespaces: n } = r.params, s = { ...t, namespaces: n };
      e(s);
    }
  }), Rg((r) => {
    t && r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), Lr(() => {
    async function r() {
      const s = await (await wt()).getSession();
      e(s);
    }
    return r(), Lo.on("session_change", r), () => {
      Lo.off("session_change", r);
    };
  }, []), t;
}
function Hi(t) {
  Lr(() => (wt().then((e) => {
    e.onSessionEvent(t);
  }), () => {
    wt().then((e) => {
      e.offSessionEvent(t);
    });
  }), [t]);
}
var Ag = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
function jg(t, e) {
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
}, Lg = (t, e) => (r, n, s) => {
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
  let _;
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
      return _ = i.merge(
        v,
        (O = n()) != null ? O : m
      ), r(_, !0), f();
    }).then(() => {
      M == null || M(_, void 0), a = !0, c.forEach((v) => v(_));
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
  }, E(), _ || m;
}, Mg = (t, e) => (r, n, s) => {
  let i = {
    storage: jg(() => localStorage),
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
  const _ = () => {
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
    rehydrate: () => _(),
    hasHydrated: () => a,
    onHydrate: (E) => (o.add(E), () => {
      o.delete(E);
    }),
    onFinishHydration: (E) => (c.add(E), () => {
      c.delete(E);
    })
  }, i.skipHydration || _(), m || p;
}, Dg = (t, e) => "getStorage" in e || "serialize" in e || "deserialize" in e ? ((Ag ? "production" : void 0) !== "production" && console.warn(
  "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
), Lg(t, e)) : Mg(t, e), Ug = Dg, hn = ng()(
  Ug((t, e) => ({
    account: void 0,
    chainId: "aleo:3",
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
      }), Ip.clear(), console.log("onDisconnect called!");
    }
  }), {
    name: "puzzle-wallet-store"
  })
);
function ou() {
  const [t, e] = To(void 0), [r, n] = To(void 0), [s, i] = To(!1);
  return { data: t, error: r, loading: s, setData: e, setError: n, setLoading: i };
}
async function uh(t, e) {
  const n = await (await wt()).request(t);
  if (n === void 0 && e)
    throw console.error("Result is undefined, retrying..."), new Error("Result is undefined, retrying...");
  return n;
}
function Gi({ queryKey: t, wcParams: e, enabled: r, queryOptions: n }) {
  return sg(
    t,
    async () => uh(e, t),
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
  const { data: e, error: r, loading: n, setData: s, setError: i, setLoading: a } = ou();
  async function o(c) {
    try {
      a(!0), i(void 0);
      const u = await uh(t ?? c);
      return s(u), u;
    } catch (u) {
      throw i(u), u;
    } finally {
      a(!1);
    }
  }
  return { data: e, error: r, loading: n, request: o };
}
const tc = (t, e = !0, r = 4, n = !0) => t ? t.length < r ? t : n ? `(...${t.slice(-r)})` : t.length < r * 2 ? t : `${t.slice(
  0,
  r + (e ? 5 : 0)
)}...${t.slice(t.length - r, t.length)}` : "", j6 = () => {
  const t = Sr(), [e, r, n] = hn((u) => [u.account, u.setAccount, u.onDisconnect]), { refetch: s, data: i, error: a, isLoading: o } = Gi({
    queryKey: ["useAccount", t == null ? void 0 : t.topic],
    enabled: !!t,
    wcParams: {
      topic: t == null ? void 0 : t.topic,
      chainId: "aleo:3",
      request: {
        jsonrpc: "2.0",
        method: "getSelectedAccount"
      }
    }
  });
  Hi(({ params: u, topic: l }) => {
    if (u.event.name === "accountSelected" && t && t.topic === l) {
      const p = u.event.address ?? u.event.data.address, m = u.chainId.split(":")[0], _ = u.chainId.split(":")[1];
      r({
        network: m,
        chainId: _,
        address: p,
        shortenedAddress: tc(p)
      });
    }
  }), ch(({ params: u, topic: l }) => {
    const f = u.event.address ?? u.event.data.address, p = u.chainId.split(":")[0], m = u.chainId.split(":")[1];
    r({
      network: p,
      chainId: m,
      address: f,
      shortenedAddress: tc(f)
    });
  }), ah(({ params: u, topic: l }) => {
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
}, L6 = ({ address: t, multisig: e }) => {
  const r = Sr(), [n] = hn((f) => [f.account]), { refetch: s, data: i, error: a, isLoading: o } = Gi({
    queryKey: ["useBalance", t, (n == null ? void 0 : n.address) ?? "", e, r == null ? void 0 : r.topic],
    enabled: !!r && !!n && (e ? !!t : !0),
    wcParams: {
      topic: r == null ? void 0 : r.topic,
      chainId: "aleo:3",
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
    const m = f.event.name, _ = f.event.address ?? f.event.data.address;
    (m === "selectedAccountSynced" && !e || m === "sharedAccountSynced" && e && _ === t) && s();
  }), Lr(() => {
    r && !o && s();
  }, [r == null ? void 0 : r.topic]);
  const c = a ? a.message : i && i.error, u = i;
  return { balances: u == null ? void 0 : u.balances, error: c, loading: o };
}, zg = Symbol(), Ku = Object.getPrototypeOf, rc = /* @__PURE__ */ new WeakMap(), $g = (t) => t && (rc.has(t) ? rc.get(t) : Ku(t) === Object.prototype || Ku(t) === Array.prototype), Vg = (t) => $g(t) && t[zg] || null, Wu = (t, e = !0) => {
  rc.set(t, e);
};
var Mo = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const Ma = (t) => typeof t == "object" && t !== null, En = /* @__PURE__ */ new WeakMap(), go = /* @__PURE__ */ new WeakSet(), qg = (t = Object.is, e = (u, l) => new Proxy(u, l), r = (u) => Ma(u) && !go.has(u) && (Array.isArray(u) || !(Symbol.iterator in u)) && !(u instanceof WeakMap) && !(u instanceof WeakSet) && !(u instanceof Error) && !(u instanceof Number) && !(u instanceof Date) && !(u instanceof String) && !(u instanceof RegExp) && !(u instanceof ArrayBuffer), n = (u) => {
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
  return Wu(m, !0), s.set(u, [l, m]), Reflect.ownKeys(u).forEach((_) => {
    if (Object.getOwnPropertyDescriptor(m, _))
      return;
    const E = Reflect.get(u, _), T = {
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
    else if (En.has(E)) {
      const [M, v] = En.get(
        E
      );
      T.value = i(
        M,
        v(),
        f
      );
    }
    Object.defineProperty(m, _, T);
  }), Object.preventExtensions(m);
}, a = /* @__PURE__ */ new WeakMap(), o = [1, 1], c = (u) => {
  if (!Ma(u))
    throw new Error("object required");
  const l = a.get(u);
  if (l)
    return l;
  let f = o[0];
  const p = /* @__PURE__ */ new Set(), m = (g, k = ++o[0]) => {
    f !== k && (f = k, p.forEach((N) => N(g, k)));
  };
  let _ = o[1];
  const E = (g = ++o[1]) => (_ !== g && !p.size && (_ = g, M.forEach(([k]) => {
    const N = k[1](g);
    N > f && (f = N);
  })), f), T = (g) => (k, N) => {
    const D = [...k];
    D[1] = [g, ...D[1]], m(D, N);
  }, M = /* @__PURE__ */ new Map(), v = (g, k) => {
    if ((Mo ? "production" : void 0) !== "production" && M.has(g))
      throw new Error("prop listener already exists");
    if (p.size) {
      const N = k[3](T(g));
      M.set(g, [k, N]);
    } else
      M.set(g, [k]);
  }, O = (g) => {
    var k;
    const N = M.get(g);
    N && (M.delete(g), (k = N[1]) == null || k.call(N));
  }, w = (g) => (p.add(g), p.size === 1 && M.forEach(([k, N], D) => {
    if ((Mo ? "production" : void 0) !== "production" && N)
      throw new Error("remove already exists");
    const G = k[3](T(D));
    M.set(D, [k, G]);
  }), () => {
    p.delete(g), p.size === 0 && M.forEach(([k, N], D) => {
      N && (N(), M.set(D, [k]));
    });
  }), x = Array.isArray(u) ? [] : Object.create(Object.getPrototypeOf(u)), y = e(x, {
    deleteProperty(g, k) {
      const N = Reflect.get(g, k);
      O(k);
      const D = Reflect.deleteProperty(g, k);
      return D && m(["delete", [k], N]), D;
    },
    set(g, k, N, D) {
      const G = Reflect.has(g, k), Y = Reflect.get(g, k, D);
      if (G && (t(Y, N) || a.has(N) && t(Y, a.get(N))))
        return !0;
      O(k), Ma(N) && (N = Vg(N) || N);
      let C = N;
      if (N instanceof Promise)
        N.then((A) => {
          N.status = "fulfilled", N.value = A, m(["resolve", [k], A]);
        }).catch((A) => {
          N.status = "rejected", N.reason = A, m(["reject", [k], A]);
        });
      else {
        !En.has(N) && r(N) && (C = c(N));
        const A = !go.has(C) && En.get(C);
        A && v(k, A);
      }
      return Reflect.set(g, k, C, D), m(["set", [k], N, Y]), !0;
    }
  });
  a.set(u, y);
  const d = [
    x,
    E,
    i,
    w
  ];
  return En.set(y, d), Reflect.ownKeys(u).forEach((g) => {
    const k = Object.getOwnPropertyDescriptor(
      u,
      g
    );
    "value" in k && (y[g] = u[g], delete k.value, delete k.writable), Object.defineProperty(x, g, k);
  }), y;
}) => [
  // public functions
  c,
  // shared state
  En,
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
], [Zg] = qg();
function Mn(t = {}) {
  return Zg(t);
}
function is(t, e, r) {
  const n = En.get(t);
  (Mo ? "production" : void 0) !== "production" && !n && console.warn("Please use proxy object");
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
function Fg(t, e) {
  const r = En.get(t);
  (Mo ? "production" : void 0) !== "production" && !r && console.warn("Please use proxy object");
  const [n, s, i] = r;
  return i(n, s(), e);
}
const Rt = Mn({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), lh = { state: Rt, subscribe(t) {
  return is(Rt, () => t(Rt));
}, push(t, e) {
  t !== Rt.view && (Rt.view = t, e && (Rt.data = e), Rt.history.push(t));
}, reset(t) {
  Rt.view = t, Rt.history = [t];
}, replace(t) {
  Rt.history.length > 1 && (Rt.history[Rt.history.length - 1] = t, Rt.view = t);
}, goBack() {
  if (Rt.history.length > 1) {
    Rt.history.pop();
    const [t] = Rt.history.slice(-1);
    Rt.view = t;
  }
}, setData(t) {
  Rt.data = t;
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
  const e = (t = lh.state.data) == null ? void 0 : t.Wallet;
  if (!e)
    throw new Error('Missing "Wallet" view data');
  return e;
} }, Kg = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), Zt = Mn({ enabled: Kg, userSessionId: "", events: [], connectedWalletId: void 0 }), Wg = { state: Zt, subscribe(t) {
  return is(Zt.events, () => t(Fg(Zt.events[Zt.events.length - 1])));
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
} }, Zr = Mn({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }), Cr = { state: Zr, subscribe(t) {
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
} }, yo = Mn({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), Ms = { state: yo, subscribe(t) {
  return is(yo, () => t(yo));
}, setConfig(t) {
  var e, r;
  Wg.initialize(), Cr.setChains(t.chains), Cr.setIsAuth(!!t.enableAuthMode), Cr.setIsCustomMobile(!!((e = t.mobileWallets) != null && e.length)), Cr.setIsCustomDesktop(!!((r = t.desktopWallets) != null && r.length)), Bt.setModalVersionInStorage(), Object.assign(yo, t);
} };
var Bg = Object.defineProperty, Bu = Object.getOwnPropertySymbols, Hg = Object.prototype.hasOwnProperty, Gg = Object.prototype.propertyIsEnumerable, Hu = (t, e, r) => e in t ? Bg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Yg = (t, e) => {
  for (var r in e || (e = {}))
    Hg.call(e, r) && Hu(t, r, e[r]);
  if (Bu)
    for (var r of Bu(e))
      Gg.call(e, r) && Hu(t, r, e[r]);
  return t;
};
const nc = "https://explorer-api.walletconnect.com", sc = "wcm", ic = "js-2.6.2";
async function mo(t, e) {
  const r = Yg({ sdkType: sc, sdkVersion: ic }, e), n = new URL(t, nc);
  return n.searchParams.append("projectId", Ms.state.projectId), Object.entries(r).forEach(([s, i]) => {
    i && n.searchParams.append(s, String(i));
  }), (await fetch(n)).json();
}
const $n = { async getDesktopListings(t) {
  return mo("/w3m/v1/getDesktopListings", t);
}, async getMobileListings(t) {
  return mo("/w3m/v1/getMobileListings", t);
}, async getInjectedListings(t) {
  return mo("/w3m/v1/getInjectedListings", t);
}, async getAllListings(t) {
  return mo("/w3m/v1/getAllListings", t);
}, getWalletImageUrl(t) {
  return `${nc}/w3m/v1/getWalletImage/${t}?projectId=${Ms.state.projectId}&sdkType=${sc}&sdkVersion=${ic}`;
}, getAssetImageUrl(t) {
  return `${nc}/w3m/v1/getAssetImage/${t}?projectId=${Ms.state.projectId}&sdkType=${sc}&sdkVersion=${ic}`;
} };
var Jg = Object.defineProperty, Gu = Object.getOwnPropertySymbols, Xg = Object.prototype.hasOwnProperty, Qg = Object.prototype.propertyIsEnumerable, Yu = (t, e, r) => e in t ? Jg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ey = (t, e) => {
  for (var r in e || (e = {}))
    Xg.call(e, r) && Yu(t, r, e[r]);
  if (Gu)
    for (var r of Gu(e))
      Qg.call(e, r) && Yu(t, r, e[r]);
  return t;
};
const Ju = Bt.isMobile(), Fr = Mn({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), M6 = { state: Fr, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: t, explorerExcludedWalletIds: e } = Ms.state;
  if (t === "NONE" || e === "ALL" && !t)
    return Fr.recomendedWallets;
  if (Bt.isArray(t)) {
    const r = { recommendedIds: t.join(",") }, { listings: n } = await $n.getAllListings(r), s = Object.values(n);
    s.sort((i, a) => {
      const o = t.indexOf(i.id), c = t.indexOf(a.id);
      return o - c;
    }), Fr.recomendedWallets = s;
  } else {
    const { chains: r, isAuth: n } = Cr.state, s = r == null ? void 0 : r.join(","), i = Bt.isArray(e), a = { page: 1, sdks: n ? "auth_v1" : void 0, entries: Bt.RECOMMENDED_WALLET_AMOUNT, chains: s, version: 2, excludedIds: i ? e.join(",") : void 0 }, { listings: o } = Ju ? await $n.getMobileListings(a) : await $n.getDesktopListings(a);
    Fr.recomendedWallets = Object.values(o);
  }
  return Fr.recomendedWallets;
}, async getWallets(t) {
  const e = ey({}, t), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: n } = Ms.state, { recomendedWallets: s } = Fr;
  if (n === "ALL")
    return Fr.wallets;
  s.length ? e.excludedIds = s.map((f) => f.id).join(",") : Bt.isArray(r) && (e.excludedIds = r.join(",")), Bt.isArray(n) && (e.excludedIds = [e.excludedIds, n].filter(Boolean).join(",")), Cr.state.isAuth && (e.sdks = "auth_v1");
  const { page: i, search: a } = t, { listings: o, total: c } = Ju ? await $n.getMobileListings(e) : await $n.getDesktopListings(e), u = Object.values(o), l = a ? "search" : "wallets";
  return Fr[l] = { listings: [...Fr[l].listings, ...u], total: c, page: i ?? 1 }, { listings: u, total: c };
}, getWalletImageUrl(t) {
  return $n.getWalletImageUrl(t);
}, getAssetImageUrl(t) {
  return $n.getAssetImageUrl(t);
}, resetSearch() {
  Fr.search = { listings: [], total: 0, page: 1 };
} }, ds = Mn({ open: !1 }), Da = { state: ds, subscribe(t) {
  return is(ds, () => t(ds));
}, async open(t) {
  return new Promise((e) => {
    const { isUiLoaded: r, isDataLoaded: n } = Cr.state;
    if (Bt.removeWalletConnectDeepLink(), Cr.setWalletConnectUri(t == null ? void 0 : t.uri), Cr.setChains(t == null ? void 0 : t.chains), lh.reset("ConnectWallet"), r && n)
      ds.open = !0, e();
    else {
      const s = setInterval(() => {
        const i = Cr.state;
        i.isUiLoaded && i.isDataLoaded && (clearInterval(s), ds.open = !0, e());
      }, 200);
    }
  });
}, close() {
  ds.open = !1;
} };
var ty = Object.defineProperty, Xu = Object.getOwnPropertySymbols, ry = Object.prototype.hasOwnProperty, ny = Object.prototype.propertyIsEnumerable, Qu = (t, e, r) => e in t ? ty(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, sy = (t, e) => {
  for (var r in e || (e = {}))
    ry.call(e, r) && Qu(t, r, e[r]);
  if (Xu)
    for (var r of Xu(e))
      ny.call(e, r) && Qu(t, r, e[r]);
  return t;
};
function iy() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const Xs = Mn({ themeMode: iy() ? "dark" : "light" }), el = { state: Xs, subscribe(t) {
  return is(Xs, () => t(Xs));
}, setThemeConfig(t) {
  const { themeMode: e, themeVariables: r } = t;
  e && (Xs.themeMode = e), r && (Xs.themeVariables = sy({}, r));
} }, Vn = Mn({ open: !1, message: "", variant: "success" }), D6 = { state: Vn, subscribe(t) {
  return is(Vn, () => t(Vn));
}, openToast(t, e) {
  Vn.open = !0, Vn.message = t, Vn.variant = e;
}, closeToast() {
  Vn.open = !1;
} };
let oy = class {
  constructor(t) {
    this.openModal = Da.open, this.closeModal = Da.close, this.subscribeModal = Da.subscribe, this.setTheme = el.setThemeConfig, el.setThemeConfig(t), Ms.setConfig(t), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-Blqt_wNo-BkY7asA7.js");
      const t = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", t), Cr.setIsUiLoaded(!0);
    }
  }
};
var On = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ga(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function ya(t) {
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
var au = { exports: {} }, Is = typeof Reflect == "object" ? Reflect : null, tl = Is && typeof Is.apply == "function" ? Is.apply : function(t, e, r) {
  return Function.prototype.apply.call(t, e, r);
}, Co;
Is && typeof Is.ownKeys == "function" ? Co = Is.ownKeys : Object.getOwnPropertySymbols ? Co = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : Co = function(t) {
  return Object.getOwnPropertyNames(t);
};
function ay(t) {
  console && console.warn && console.warn(t);
}
var dh = Number.isNaN || function(t) {
  return t !== t;
};
function et() {
  et.init.call(this);
}
au.exports = et;
au.exports.once = dy;
et.EventEmitter = et;
et.prototype._events = void 0;
et.prototype._eventsCount = 0;
et.prototype._maxListeners = void 0;
var rl = 10;
function ma(t) {
  if (typeof t != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
}
Object.defineProperty(et, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return rl;
  },
  set: function(t) {
    if (typeof t != "number" || t < 0 || dh(t))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
    rl = t;
  }
});
et.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
et.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || dh(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function hh(t) {
  return t._maxListeners === void 0 ? et.defaultMaxListeners : t._maxListeners;
}
et.prototype.getMaxListeners = function() {
  return hh(this);
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
    for (var c = o.length, u = mh(o, c), r = 0; r < c; ++r)
      tl(u[r], this, e);
  return !0;
};
function fh(t, e, r, n) {
  var s, i, a;
  if (ma(r), i = t._events, i === void 0 ? (i = t._events = /* @__PURE__ */ Object.create(null), t._eventsCount = 0) : (i.newListener !== void 0 && (t.emit(
    "newListener",
    e,
    r.listener ? r.listener : r
  ), i = t._events), a = i[e]), a === void 0)
    a = i[e] = r, ++t._eventsCount;
  else if (typeof a == "function" ? a = i[e] = n ? [r, a] : [a, r] : n ? a.unshift(r) : a.push(r), s = hh(t), s > 0 && a.length > s && !a.warned) {
    a.warned = !0;
    var o = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    o.name = "MaxListenersExceededWarning", o.emitter = t, o.type = e, o.count = a.length, ay(o);
  }
  return t;
}
et.prototype.addListener = function(t, e) {
  return fh(this, t, e, !1);
};
et.prototype.on = et.prototype.addListener;
et.prototype.prependListener = function(t, e) {
  return fh(this, t, e, !0);
};
function cy() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function ph(t, e, r) {
  var n = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r }, s = cy.bind(n);
  return s.listener = r, n.wrapFn = s, s;
}
et.prototype.once = function(t, e) {
  return ma(e), this.on(t, ph(this, t, e)), this;
};
et.prototype.prependOnceListener = function(t, e) {
  return ma(e), this.prependListener(t, ph(this, t, e)), this;
};
et.prototype.removeListener = function(t, e) {
  var r, n, s, i, a;
  if (ma(e), n = this._events, n === void 0)
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
    s === 0 ? r.shift() : uy(r, s), r.length === 1 && (n[t] = r[0]), n.removeListener !== void 0 && this.emit("removeListener", t, a || e);
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
function gh(t, e, r) {
  var n = t._events;
  if (n === void 0)
    return [];
  var s = n[e];
  return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? ly(s) : mh(s, s.length);
}
et.prototype.listeners = function(t) {
  return gh(this, t, !0);
};
et.prototype.rawListeners = function(t) {
  return gh(this, t, !1);
};
et.listenerCount = function(t, e) {
  return typeof t.listenerCount == "function" ? t.listenerCount(e) : yh.call(t, e);
};
et.prototype.listenerCount = yh;
function yh(t) {
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
  return this._eventsCount > 0 ? Co(this._events) : [];
};
function mh(t, e) {
  for (var r = new Array(e), n = 0; n < e; ++n)
    r[n] = t[n];
  return r;
}
function uy(t, e) {
  for (; e + 1 < t.length; e++)
    t[e] = t[e + 1];
  t.pop();
}
function ly(t) {
  for (var e = new Array(t.length), r = 0; r < e.length; ++r)
    e[r] = t[r].listener || t[r];
  return e;
}
function dy(t, e) {
  return new Promise(function(r, n) {
    function s(a) {
      t.removeListener(e, i), n(a);
    }
    function i() {
      typeof t.removeListener == "function" && t.removeListener("error", s), r([].slice.call(arguments));
    }
    vh(t, e, i, { once: !0 }), e !== "error" && hy(t, s, { once: !0 });
  });
}
function hy(t, e, r) {
  typeof t.on == "function" && vh(t, "error", e, r);
}
function vh(t, e, r, n) {
  if (typeof t.on == "function")
    n.once ? t.once(e, r) : t.on(e, r);
  else if (typeof t.addEventListener == "function")
    t.addEventListener(e, function s(i) {
      n.once && t.removeEventListener(e, s), r(i);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
}
var Ur = au.exports;
const cu = /* @__PURE__ */ ga(Ur), fy = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, py = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, gy = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function yy(t, e) {
  if (t === "__proto__" || t === "constructor" && e && typeof e == "object" && "prototype" in e) {
    my(t);
    return;
  }
  return e;
}
function my(t) {
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
  if (!gy.test(t)) {
    if (e.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return t;
  }
  try {
    if (fy.test(t) || py.test(t)) {
      if (e.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(t, yy);
    }
    return JSON.parse(t);
  } catch (n) {
    if (e.strict)
      throw n;
    return t;
  }
}
function vy(t) {
  return !t || typeof t.then != "function" ? Promise.resolve(t) : t;
}
function At(t, ...e) {
  try {
    return vy(t(...e));
  } catch (r) {
    return Promise.reject(r);
  }
}
function by(t) {
  const e = typeof t;
  return t === null || e !== "object" && e !== "function";
}
function _y(t) {
  const e = Object.getPrototypeOf(t);
  return !e || e.isPrototypeOf(Object);
}
function Po(t) {
  if (by(t))
    return String(t);
  if (_y(t) || Array.isArray(t))
    return JSON.stringify(t);
  if (typeof t.toJSON == "function")
    return Po(t.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function bh() {
  if (typeof Buffer === void 0)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
const oc = "base64:";
function wy(t) {
  if (typeof t == "string")
    return t;
  bh();
  const e = Buffer.from(t).toString("base64");
  return oc + e;
}
function Ey(t) {
  return typeof t != "string" || !t.startsWith(oc) ? t : (bh(), Buffer.from(t.slice(oc.length), "base64"));
}
function cr(t) {
  return t ? t.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : "";
}
function Sy(...t) {
  return cr(t.join(":"));
}
function bo(t) {
  return t = cr(t), t ? t + ":" : "";
}
const xy = "memory", Iy = () => {
  const t = /* @__PURE__ */ new Map();
  return {
    name: xy,
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
function Oy(t = {}) {
  const e = {
    mounts: { "": t.driver || Iy() },
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
      l = cr(l);
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
    const p = /* @__PURE__ */ new Map(), m = (_) => {
      let E = p.get(_.base);
      return E || (E = {
        driver: _.driver,
        base: _.base,
        items: []
      }, p.set(_.base, E)), E;
    };
    for (const _ of u) {
      const E = typeof _ == "string", T = cr(E ? _ : _.key), M = E ? void 0 : _.value, v = E || !_.options ? l : { ...l, ..._.options }, O = r(T);
      m(O).items.push({
        key: T,
        value: M,
        relativeKey: O.relativeKey,
        options: v
      });
    }
    return Promise.all([...p.values()].map((_) => f(_))).then(
      (_) => _.flat()
    );
  }, c = {
    // Item
    hasItem(u, l = {}) {
      u = cr(u);
      const { relativeKey: f, driver: p } = r(u);
      return At(p.hasItem, f, l);
    },
    getItem(u, l = {}) {
      u = cr(u);
      const { relativeKey: f, driver: p } = r(u);
      return At(p.getItem, f, l).then(
        (m) => vo(m)
      );
    },
    getItems(u, l) {
      return o(u, l, (f) => f.driver.getItems ? At(
        f.driver.getItems,
        f.items.map((p) => ({
          key: p.relativeKey,
          options: p.options
        })),
        l
      ).then(
        (p) => p.map((m) => ({
          key: Sy(f.base, m.key),
          value: vo(m.value)
        }))
      ) : Promise.all(
        f.items.map((p) => At(
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
      u = cr(u);
      const { relativeKey: f, driver: p } = r(u);
      return p.getItemRaw ? At(p.getItemRaw, f, l) : At(p.getItem, f, l).then(
        (m) => Ey(m)
      );
    },
    async setItem(u, l, f = {}) {
      if (l === void 0)
        return c.removeItem(u);
      u = cr(u);
      const { relativeKey: p, driver: m } = r(u);
      m.setItem && (await At(m.setItem, p, Po(l), f), m.watch || s("update", u));
    },
    async setItems(u, l) {
      await o(u, l, async (f) => {
        f.driver.setItems && await At(
          f.driver.setItems,
          f.items.map((p) => ({
            key: p.relativeKey,
            value: Po(p.value),
            options: p.options
          })),
          l
        ), f.driver.setItem && await Promise.all(
          f.items.map((p) => At(
            f.driver.setItem,
            p.relativeKey,
            Po(p.value),
            p.options
          ))
        );
      });
    },
    async setItemRaw(u, l, f = {}) {
      if (l === void 0)
        return c.removeItem(u, f);
      u = cr(u);
      const { relativeKey: p, driver: m } = r(u);
      if (m.setItemRaw)
        await At(m.setItemRaw, p, l, f);
      else if (m.setItem)
        await At(m.setItem, p, wy(l), f);
      else
        return;
      m.watch || s("update", u);
    },
    async removeItem(u, l = {}) {
      typeof l == "boolean" && (l = { removeMeta: l }), u = cr(u);
      const { relativeKey: f, driver: p } = r(u);
      p.removeItem && (await At(p.removeItem, f, l), (l.removeMeta || l.removeMata) && await At(p.removeItem, f + "$", l), p.watch || s("remove", u));
    },
    // Meta
    async getMeta(u, l = {}) {
      typeof l == "boolean" && (l = { nativeOnly: l }), u = cr(u);
      const { relativeKey: f, driver: p } = r(u), m = /* @__PURE__ */ Object.create(null);
      if (p.getMeta && Object.assign(m, await At(p.getMeta, f, l)), !l.nativeOnly) {
        const _ = await At(
          p.getItem,
          f + "$",
          l
        ).then((E) => vo(E));
        _ && typeof _ == "object" && (typeof _.atime == "string" && (_.atime = new Date(_.atime)), typeof _.mtime == "string" && (_.mtime = new Date(_.mtime)), Object.assign(m, _));
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
      u = bo(u);
      const f = n(u, !0);
      let p = [];
      const m = [];
      for (const _ of f) {
        const E = (await At(
          _.driver.getKeys,
          _.relativeBase,
          l
        )).map((T) => _.mountpoint + cr(T)).filter((T) => !p.some((M) => T.startsWith(M)));
        m.push(...E), p = [
          _.mountpoint,
          ...p.filter((T) => !T.startsWith(_.mountpoint))
        ];
      }
      return u ? m.filter((_) => _.startsWith(u) && !_.endsWith("$")) : m.filter((_) => !_.endsWith("$"));
    },
    // Utils
    async clear(u, l = {}) {
      u = bo(u), await Promise.all(
        n(u, !1).map(async (f) => {
          if (f.driver.clear)
            return At(f.driver.clear, f.relativeBase, l);
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
      if (u = bo(u), u && e.mounts[u])
        throw new Error(`already mounted at ${u}`);
      return u && (e.mountpoints.push(u), e.mountpoints.sort((f, p) => p.length - f.length)), e.mounts[u] = l, e.watching && Promise.resolve(nl(l, s, u)).then((f) => {
        e.unwatch[u] = f;
      }).catch(console.error), c;
    },
    async unmount(u, l = !0) {
      u = bo(u), !(!u || !e.mounts[u]) && (e.watching && u in e.unwatch && (e.unwatch[u](), delete e.unwatch[u]), l && await sl(e.mounts[u]), e.mountpoints = e.mountpoints.filter((f) => f !== u), delete e.mounts[u]);
    },
    getMount(u = "") {
      u = cr(u) + ":";
      const l = r(u);
      return {
        driver: l.driver,
        base: l.base
      };
    },
    getMounts(u = "", l = {}) {
      return u = cr(u), n(u, l.parents).map((f) => ({
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
  typeof t.dispose == "function" && await At(t.dispose);
}
function os(t) {
  return new Promise((e, r) => {
    t.oncomplete = t.onsuccess = () => e(t.result), t.onabort = t.onerror = () => r(t.error);
  });
}
function _h(t, e) {
  const r = indexedDB.open(t);
  r.onupgradeneeded = () => r.result.createObjectStore(e);
  const n = os(r);
  return (s, i) => n.then((a) => i(a.transaction(e, s).objectStore(e)));
}
let Ua;
function Ji() {
  return Ua || (Ua = _h("keyval-store", "keyval")), Ua;
}
function il(t, e = Ji()) {
  return e("readonly", (r) => os(r.get(t)));
}
function Ty(t, e, r = Ji()) {
  return r("readwrite", (n) => (n.put(e, t), os(n.transaction)));
}
function Cy(t, e = Ji()) {
  return e("readwrite", (r) => (r.delete(t), os(r.transaction)));
}
function Py(t = Ji()) {
  return t("readwrite", (e) => (e.clear(), os(e.transaction)));
}
function ky(t, e) {
  return t.openCursor().onsuccess = function() {
    this.result && (e(this.result), this.result.continue());
  }, os(t.transaction);
}
function Ny(t = Ji()) {
  return t("readonly", (e) => {
    if (e.getAllKeys)
      return os(e.getAllKeys());
    const r = [];
    return ky(e, (n) => r.push(n.key)).then(() => r);
  });
}
const Ry = (t) => JSON.stringify(t, (e, r) => typeof r == "bigint" ? r.toString() + "n" : r), Ay = (t) => {
  const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = t.replace(e, '$1"$2n"$3');
  return JSON.parse(r, (n, s) => typeof s == "string" && s.match(/^\d+n$/) ? BigInt(s.substring(0, s.length - 1)) : s);
};
function va(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return Ay(t);
  } catch {
    return t;
  }
}
function Xi(t) {
  return typeof t == "string" ? t : Ry(t) || "";
}
const jy = "idb-keyval";
var Ly = (t = {}) => {
  const e = t.base && t.base.length > 0 ? `${t.base}:` : "", r = (s) => e + s;
  let n;
  return t.dbName && t.storeName && (n = _h(t.dbName, t.storeName)), { name: jy, options: t, async hasItem(s) {
    return !(typeof await il(r(s), n) > "u");
  }, async getItem(s) {
    return await il(r(s), n) ?? null;
  }, setItem(s, i) {
    return Ty(r(s), i, n);
  }, removeItem(s) {
    return Cy(r(s), n);
  }, getKeys() {
    return Ny(n);
  }, clear() {
    return Py(n);
  } };
};
const My = "WALLET_CONNECT_V2_INDEXED_DB", Dy = "keyvaluestorage";
let Uy = class {
  constructor() {
    this.indexedDb = Oy({ driver: Ly({ dbName: My, storeName: Dy }) });
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
var za = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ko = { exports: {} };
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
  }), typeof za < "u" && za.localStorage ? ko.exports = za.localStorage : typeof window < "u" && window.localStorage ? ko.exports = window.localStorage : ko.exports = new e();
})();
function zy(t) {
  var e;
  return [t[0], va((e = t[1]) != null ? e : "")];
}
class $y {
  constructor() {
    this.localStorage = ko.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(zy);
  }
  async getItem(e) {
    const r = this.localStorage.getItem(e);
    if (r !== null)
      return va(r);
  }
  async setItem(e, r) {
    this.localStorage.setItem(e, Xi(r));
  }
  async removeItem(e) {
    this.localStorage.removeItem(e);
  }
}
const Vy = "wc_storage_version", ol = 1, qy = async (t, e, r) => {
  const n = Vy, s = await e.getItem(n);
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
  await e.setItem(n, ol), r(e), Zy(t, a);
}, Zy = async (t, e) => {
  e.length && e.forEach(async (r) => {
    await t.removeItem(r);
  });
};
let Fy = class {
  constructor() {
    this.initialized = !1, this.setInitialized = (e) => {
      this.storage = e, this.initialized = !0;
    };
    const t = new $y();
    this.storage = t;
    try {
      const e = new Uy();
      qy(t, e, this.setInitialized);
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
var ac = function(t, e) {
  return ac = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var s in n)
      n.hasOwnProperty(s) && (r[s] = n[s]);
  }, ac(t, e);
};
function Ky(t, e) {
  ac(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var cc = function() {
  return cc = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, cc.apply(this, arguments);
};
function Wy(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++)
      e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (r[n[s]] = t[n[s]]);
  return r;
}
function By(t, e, r, n) {
  var s = arguments.length, i = s < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var o = t.length - 1; o >= 0; o--)
      (a = t[o]) && (i = (s < 3 ? a(i) : s > 3 ? a(e, r, i) : a(e, r)) || i);
  return s > 3 && i && Object.defineProperty(e, r, i), i;
}
function Hy(t, e) {
  return function(r, n) {
    e(r, n, t);
  };
}
function Gy(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function Yy(t, e, r, n) {
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
function Jy(t, e) {
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
function Xy(t, e, r, n) {
  n === void 0 && (n = r), t[n] = e[r];
}
function Qy(t, e) {
  for (var r in t)
    r !== "default" && !e.hasOwnProperty(r) && (e[r] = t[r]);
}
function uc(t) {
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
function wh(t, e) {
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
function em() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(wh(arguments[e]));
  return t;
}
function tm() {
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
function rm(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(t, e || []), s, i = [];
  return s = {}, a("next"), a("throw"), a("return"), s[Symbol.asyncIterator] = function() {
    return this;
  }, s;
  function a(p) {
    n[p] && (s[p] = function(m) {
      return new Promise(function(_, E) {
        i.push([p, m, _, E]) > 1 || o(p, m);
      });
    });
  }
  function o(p, m) {
    try {
      c(n[p](m));
    } catch (_) {
      f(i[0][3], _);
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
function nm(t) {
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
function sm(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof uc == "function" ? uc(t) : t[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
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
function im(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
function om(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var r in t)
      Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e.default = t, e;
}
function am(t) {
  return t && t.__esModule ? t : { default: t };
}
function cm(t, e) {
  if (!e.has(t))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(t);
}
function um(t, e, r) {
  if (!e.has(t))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(t, r), r;
}
const lm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return cc;
  },
  __asyncDelegator: nm,
  __asyncGenerator: rm,
  __asyncValues: sm,
  __await: pi,
  __awaiter: Yy,
  __classPrivateFieldGet: cm,
  __classPrivateFieldSet: um,
  __createBinding: Xy,
  __decorate: By,
  __exportStar: Qy,
  __extends: Ky,
  __generator: Jy,
  __importDefault: am,
  __importStar: om,
  __makeTemplateObject: im,
  __metadata: Gy,
  __param: Hy,
  __read: wh,
  __rest: Wy,
  __spread: em,
  __spreadArrays: tm,
  __values: uc
}, Symbol.toStringTag, { value: "Module" })), Qr = /* @__PURE__ */ ya(lm);
var Qs = {}, ae = {}, al = {}, ei = {}, cl;
function dm() {
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
var qn = {}, ul = {}, hs = {}, ll;
function hm() {
  return ll || (ll = 1, Object.defineProperty(hs, "__esModule", { value: !0 }), hs.ONE_THOUSAND = hs.ONE_HUNDRED = void 0, hs.ONE_HUNDRED = 100, hs.ONE_THOUSAND = 1e3), hs;
}
var dl = {}, hl;
function fm() {
  return hl || (hl = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = t.ONE_MINUTE * 5, t.TEN_MINUTES = t.ONE_MINUTE * 10, t.THIRTY_MINUTES = t.ONE_MINUTE * 30, t.SIXTY_MINUTES = t.ONE_MINUTE * 60, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = t.ONE_HOUR * 3, t.SIX_HOURS = t.ONE_HOUR * 6, t.TWELVE_HOURS = t.ONE_HOUR * 12, t.TWENTY_FOUR_HOURS = t.ONE_HOUR * 24, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = t.ONE_DAY * 3, t.FIVE_DAYS = t.ONE_DAY * 5, t.SEVEN_DAYS = t.ONE_DAY * 7, t.THIRTY_DAYS = t.ONE_DAY * 30, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = t.ONE_WEEK * 2, t.THREE_WEEKS = t.ONE_WEEK * 3, t.FOUR_WEEKS = t.ONE_WEEK * 4, t.ONE_YEAR = t.ONE_DAY * 365;
  }(dl)), dl;
}
var fl;
function Eh() {
  return fl || (fl = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = Qr;
    e.__exportStar(hm(), t), e.__exportStar(fm(), t);
  }(ul)), ul;
}
var pl;
function pm() {
  if (pl)
    return qn;
  pl = 1, Object.defineProperty(qn, "__esModule", { value: !0 }), qn.fromMiliseconds = qn.toMiliseconds = void 0;
  const t = Eh();
  function e(n) {
    return n * t.ONE_THOUSAND;
  }
  qn.toMiliseconds = e;
  function r(n) {
    return Math.floor(n / t.ONE_THOUSAND);
  }
  return qn.fromMiliseconds = r, qn;
}
var gl;
function gm() {
  return gl || (gl = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = Qr;
    e.__exportStar(dm(), t), e.__exportStar(pm(), t);
  }(al)), al;
}
var fs = {}, yl;
function ym() {
  if (yl)
    return fs;
  yl = 1, Object.defineProperty(fs, "__esModule", { value: !0 }), fs.Watch = void 0;
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
var ml = {}, ti = {}, vl;
function mm() {
  if (vl)
    return ti;
  vl = 1, Object.defineProperty(ti, "__esModule", { value: !0 }), ti.IWatch = void 0;
  class t {
  }
  return ti.IWatch = t, ti;
}
var bl;
function vm() {
  return bl || (bl = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Qr.__exportStar(mm(), t);
  }(ml)), ml;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = Qr;
  e.__exportStar(gm(), t), e.__exportStar(ym(), t), e.__exportStar(vm(), t), e.__exportStar(Eh(), t);
})(ae);
var _l = {}, ri = {};
let as = class {
};
const bm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: as
}, Symbol.toStringTag, { value: "Module" })), _m = /* @__PURE__ */ ya(bm);
var wl;
function wm() {
  if (wl)
    return ri;
  wl = 1, Object.defineProperty(ri, "__esModule", { value: !0 }), ri.IHeartBeat = void 0;
  const t = _m;
  class e extends t.IEvents {
    constructor(n) {
      super();
    }
  }
  return ri.IHeartBeat = e, ri;
}
var El;
function Sh() {
  return El || (El = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Qr.__exportStar(wm(), t);
  }(_l)), _l;
}
var Sl = {}, Zn = {}, xl;
function Em() {
  if (xl)
    return Zn;
  xl = 1, Object.defineProperty(Zn, "__esModule", { value: !0 }), Zn.HEARTBEAT_EVENTS = Zn.HEARTBEAT_INTERVAL = void 0;
  const t = ae;
  return Zn.HEARTBEAT_INTERVAL = t.FIVE_SECONDS, Zn.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, Zn;
}
var Il;
function xh() {
  return Il || (Il = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Qr.__exportStar(Em(), t);
  }(Sl)), Sl;
}
var Ol;
function Sm() {
  if (Ol)
    return Qs;
  Ol = 1, Object.defineProperty(Qs, "__esModule", { value: !0 }), Qs.HeartBeat = void 0;
  const t = Qr, e = Ur, r = ae, n = Sh(), s = xh();
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
  const e = Qr;
  e.__exportStar(Sm(), t), e.__exportStar(Sh(), t), e.__exportStar(xh(), t);
})(Zs);
var Ke = {}, $a, Tl;
function xm() {
  if (Tl)
    return $a;
  Tl = 1;
  function t(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  $a = e;
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
    for (var f = "", p = 1 - a, m = -1, _ = r && r.length || 0, E = 0; E < _; ) {
      if (r.charCodeAt(E) === 37 && E + 1 < _) {
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
    return m === -1 ? r : (m < _ && (f += r.slice(m)), f);
  }
  return $a;
}
var Va, Cl;
function Im() {
  if (Cl)
    return Va;
  Cl = 1;
  const t = xm();
  Va = s;
  const e = x().console || {}, r = {
    mapHttpRequest: _,
    mapHttpResponse: _,
    wrapRequestSerializer: E,
    wrapResponseSerializer: E,
    wrapErrorSerializer: E,
    req: _,
    res: _,
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
    const k = y.serializers || {}, N = n(y.browser.serialize, k);
    let D = y.browser.serialize;
    Array.isArray(y.browser.serialize) && y.browser.serialize.indexOf("!stdSerializers.err") > -1 && (D = !1);
    const G = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof g == "function" && (g.error = g.fatal = g.warn = g.info = g.debug = g.trace = g), y.enabled === !1 && (y.level = "silent");
    const Y = y.level || "info", C = Object.create(g);
    C.log || (C.log = T), Object.defineProperty(C, "levelVal", {
      get: Q
    }), Object.defineProperty(C, "level", {
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
    C.levels = s.levels, C.level = Y, C.setMaxListeners = C.getMaxListeners = C.emit = C.addListener = C.on = C.prependListener = C.once = C.prependOnceListener = C.removeListener = C.removeAllListeners = C.listeners = C.listenerCount = C.eventNames = C.write = C.flush = T, C.serializers = k, C._serialize = N, C._stdErrSerialize = D, C.child = q, d && (C._logEvent = f());
    function Q() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function Z() {
      return this._level;
    }
    function $(z) {
      if (z !== "silent" && !this.levels.values[z])
        throw Error("unknown level " + z);
      this._level = z, i(A, C, "error", "log"), i(A, C, "fatal", "error"), i(A, C, "warn", "error"), i(A, C, "info", "log"), i(A, C, "debug", "log"), i(A, C, "trace", "log");
    }
    function q(z, F) {
      if (!z)
        throw new Error("missing bindings for child Pino");
      F = F || {}, N && z.serializers && (F.serializers = z.serializers);
      const ye = F.serializers;
      if (N && ye) {
        var K = Object.assign({}, k, ye), de = y.browser.serialize === !0 ? Object.keys(K) : N;
        delete z.serializers, c([z], de, K, this._stdErrSerialize);
      }
      function ne(le) {
        this._childLevel = (le._childLevel | 0) + 1, this.error = u(le, z, "error"), this.fatal = u(le, z, "fatal"), this.warn = u(le, z, "warn"), this.info = u(le, z, "info"), this.debug = u(le, z, "debug"), this.trace = u(le, z, "trace"), K && (this.serializers = K, this._serialize = de), d && (this._logEvent = f(
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
  }, s.stdSerializers = r, s.stdTimeFunctions = Object.assign({}, { nullTime: M, epochTime: v, unixTime: O, isoTime: w });
  function i(y, d, g, k) {
    const N = Object.getPrototypeOf(d);
    d[g] = d.levelVal > d.levels.values[g] ? T : N[g] ? N[g] : e[g] || e[k] || T, a(y, d, g);
  }
  function a(y, d, g) {
    !y.transmit && d[g] === T || (d[g] = /* @__PURE__ */ function(k) {
      return function() {
        const N = y.timestamp(), D = new Array(arguments.length), G = Object.getPrototypeOf && Object.getPrototypeOf(this) === e ? e : this;
        for (var Y = 0; Y < D.length; Y++)
          D[Y] = arguments[Y];
        if (y.serialize && !y.asObject && c(D, this._serialize, this.serializers, this._stdErrSerialize), y.asObject ? k.call(G, o(this, g, D, N)) : k.apply(G, D), y.transmit) {
          const C = y.transmit.level || d.level, A = s.levels.values[C], Q = s.levels.values[g];
          if (Q < A)
            return;
          l(this, {
            ts: N,
            methodLevel: g,
            methodValue: Q,
            transmitLevel: C,
            transmitValue: s.levels.values[y.transmit.level || d.level],
            send: y.transmit.send,
            val: d.levelVal
          }, D);
        }
      };
    }(d[g]));
  }
  function o(y, d, g, k) {
    y._serialize && c(g, y._serialize, y.serializers, y._stdErrSerialize);
    const N = g.slice();
    let D = N[0];
    const G = {};
    k && (G.time = k), G.level = s.levels.values[d];
    let Y = (y._childLevel | 0) + 1;
    if (Y < 1 && (Y = 1), D !== null && typeof D == "object") {
      for (; Y-- && typeof N[0] == "object"; )
        Object.assign(G, N.shift());
      D = N.length ? t(N.shift(), N) : void 0;
    } else
      typeof D == "string" && (D = t(N.shift(), N));
    return D !== void 0 && (G.msg = D), G;
  }
  function c(y, d, g, k) {
    for (const N in y)
      if (k && y[N] instanceof Error)
        y[N] = s.stdSerializers.err(y[N]);
      else if (typeof y[N] == "object" && !Array.isArray(y[N]))
        for (const D in y[N])
          d && d.indexOf(D) > -1 && D in g && (y[N][D] = g[D](y[N][D]));
  }
  function u(y, d, g) {
    return function() {
      const k = new Array(1 + arguments.length);
      k[0] = d;
      for (var N = 1; N < k.length; N++)
        k[N] = arguments[N - 1];
      return y[g].apply(this, k);
    };
  }
  function l(y, d, g) {
    const k = d.send, N = d.ts, D = d.methodLevel, G = d.methodValue, Y = d.val, C = y._logEvent.bindings;
    c(
      g,
      y._serialize || Object.keys(y.serializers),
      y.serializers,
      y._stdErrSerialize === void 0 ? !0 : y._stdErrSerialize
    ), y._logEvent.ts = N, y._logEvent.messages = g.filter(function(A) {
      return C.indexOf(A) === -1;
    }), y._logEvent.level.label = D, y._logEvent.level.value = G, k(D, y._logEvent, Y), y._logEvent = f(C);
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
  function _() {
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
  return Va;
}
var ps = {}, Pl;
function Ih() {
  return Pl || (Pl = 1, Object.defineProperty(ps, "__esModule", { value: !0 }), ps.PINO_CUSTOM_CONTEXT_KEY = ps.PINO_LOGGER_DEFAULTS = void 0, ps.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, ps.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), ps;
}
var Xt = {}, kl;
function Om() {
  if (kl)
    return Xt;
  kl = 1, Object.defineProperty(Xt, "__esModule", { value: !0 }), Xt.generateChildLogger = Xt.formatChildLoggerContext = Xt.getLoggerContext = Xt.setBrowserLoggerContext = Xt.getBrowserLoggerContext = Xt.getDefaultLoggerOptions = void 0;
  const t = Ih();
  function e(o) {
    return Object.assign(Object.assign({}, o), { level: (o == null ? void 0 : o.level) || t.PINO_LOGGER_DEFAULTS.level });
  }
  Xt.getDefaultLoggerOptions = e;
  function r(o, c = t.PINO_CUSTOM_CONTEXT_KEY) {
    return o[c] || "";
  }
  Xt.getBrowserLoggerContext = r;
  function n(o, c, u = t.PINO_CUSTOM_CONTEXT_KEY) {
    return o[u] = c, o;
  }
  Xt.setBrowserLoggerContext = n;
  function s(o, c = t.PINO_CUSTOM_CONTEXT_KEY) {
    let u = "";
    return typeof o.bindings > "u" ? u = r(o, c) : u = o.bindings().context || "", u;
  }
  Xt.getLoggerContext = s;
  function i(o, c, u = t.PINO_CUSTOM_CONTEXT_KEY) {
    const l = s(o, u);
    return l.trim() ? `${l}/${c}` : c;
  }
  Xt.formatChildLoggerContext = i;
  function a(o, c, u = t.PINO_CUSTOM_CONTEXT_KEY) {
    const l = i(o, c, u), f = o.child({ context: l });
    return n(f, l, u);
  }
  return Xt.generateChildLogger = a, Xt;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.pino = void 0;
  const e = Qr, r = e.__importDefault(Im());
  Object.defineProperty(t, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), e.__exportStar(Ih(), t), e.__exportStar(Om(), t);
})(Ke);
let Tm = class extends as {
  constructor(t) {
    super(), this.opts = t, this.protocol = "wc", this.version = 2;
  }
}, Cm = class extends as {
  constructor(t, e) {
    super(), this.core = t, this.logger = e, this.records = /* @__PURE__ */ new Map();
  }
}, Pm = class {
  constructor(t, e) {
    this.logger = t, this.core = e;
  }
}, km = class extends as {
  constructor(t, e) {
    super(), this.relayer = t, this.logger = e;
  }
}, Nm = class extends as {
  constructor(t) {
    super();
  }
}, Rm = class {
  constructor(t, e, r, n) {
    this.core = t, this.logger = e, this.name = r;
  }
};
class Am extends as {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
class jm extends as {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}
let Lm = class {
  constructor(t, e) {
    this.projectId = t, this.logger = e;
  }
}, Mm = class {
  constructor(t, e) {
    this.projectId = t, this.logger = e;
  }
}, Dm = class {
  constructor(t) {
    this.opts = t, this.protocol = "wc", this.version = 2;
  }
}, Um = class {
  constructor(t) {
    this.client = t;
  }
};
var uu = {}, Fs = {}, ba = {}, _a = {};
Object.defineProperty(_a, "__esModule", { value: !0 });
_a.BrowserRandomSource = void 0;
const Nl = 65536;
class zm {
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
_a.BrowserRandomSource = zm;
function $m(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var wa = {}, mr = {};
Object.defineProperty(mr, "__esModule", { value: !0 });
function Vm(t) {
  for (var e = 0; e < t.length; e++)
    t[e] = 0;
  return t;
}
mr.wipe = Vm;
const qm = {}, Zm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qm
}, Symbol.toStringTag, { value: "Module" })), Fm = /* @__PURE__ */ ya(Zm);
Object.defineProperty(wa, "__esModule", { value: !0 });
wa.NodeRandomSource = void 0;
const Km = mr;
class Wm {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof $m < "u") {
      const e = Fm;
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
    return (0, Km.wipe)(r), n;
  }
}
wa.NodeRandomSource = Wm;
Object.defineProperty(ba, "__esModule", { value: !0 });
ba.SystemRandomSource = void 0;
const Bm = _a, Hm = wa;
class Gm {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new Bm.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new Hm.NodeRandomSource(), this._source.isAvailable) {
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
ba.SystemRandomSource = Gm;
var Se = {}, Oh = {};
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
})(Oh);
Object.defineProperty(Se, "__esModule", { value: !0 });
var Th = Oh;
function Ym(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) << 16 >> 16;
}
Se.readInt16BE = Ym;
function Jm(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) >>> 0;
}
Se.readUint16BE = Jm;
function Xm(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) << 16 >> 16;
}
Se.readInt16LE = Xm;
function Qm(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) >>> 0;
}
Se.readUint16LE = Qm;
function Ch(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 8, e[r + 1] = t >>> 0, e;
}
Se.writeUint16BE = Ch;
Se.writeInt16BE = Ch;
function Ph(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e;
}
Se.writeUint16LE = Ph;
Se.writeInt16LE = Ph;
function lc(t, e) {
  return e === void 0 && (e = 0), t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
}
Se.readInt32BE = lc;
function dc(t, e) {
  return e === void 0 && (e = 0), (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
}
Se.readUint32BE = dc;
function hc(t, e) {
  return e === void 0 && (e = 0), t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e];
}
Se.readInt32LE = hc;
function fc(t, e) {
  return e === void 0 && (e = 0), (t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]) >>> 0;
}
Se.readUint32LE = fc;
function Do(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 24, e[r + 1] = t >>> 16, e[r + 2] = t >>> 8, e[r + 3] = t >>> 0, e;
}
Se.writeUint32BE = Do;
Se.writeInt32BE = Do;
function Uo(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e[r + 2] = t >>> 16, e[r + 3] = t >>> 24, e;
}
Se.writeUint32LE = Uo;
Se.writeInt32LE = Uo;
function ev(t, e) {
  e === void 0 && (e = 0);
  var r = lc(t, e), n = lc(t, e + 4);
  return r * 4294967296 + n - (n >> 31) * 4294967296;
}
Se.readInt64BE = ev;
function tv(t, e) {
  e === void 0 && (e = 0);
  var r = dc(t, e), n = dc(t, e + 4);
  return r * 4294967296 + n;
}
Se.readUint64BE = tv;
function rv(t, e) {
  e === void 0 && (e = 0);
  var r = hc(t, e), n = hc(t, e + 4);
  return n * 4294967296 + r - (r >> 31) * 4294967296;
}
Se.readInt64LE = rv;
function nv(t, e) {
  e === void 0 && (e = 0);
  var r = fc(t, e), n = fc(t, e + 4);
  return n * 4294967296 + r;
}
Se.readUint64LE = nv;
function kh(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), Do(t / 4294967296 >>> 0, e, r), Do(t >>> 0, e, r + 4), e;
}
Se.writeUint64BE = kh;
Se.writeInt64BE = kh;
function Nh(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), Uo(t >>> 0, e, r), Uo(t / 4294967296 >>> 0, e, r + 4), e;
}
Se.writeUint64LE = Nh;
Se.writeInt64LE = Nh;
function sv(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var n = 0, s = 1, i = t / 8 + r - 1; i >= r; i--)
    n += e[i] * s, s *= 256;
  return n;
}
Se.readUintBE = sv;
function iv(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var n = 0, s = 1, i = r; i < r + t / 8; i++)
    n += e[i] * s, s *= 256;
  return n;
}
Se.readUintLE = iv;
function ov(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!Th.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var s = 1, i = t / 8 + n - 1; i >= n; i--)
    r[i] = e / s & 255, s *= 256;
  return r;
}
Se.writeUintBE = ov;
function av(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!Th.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var s = 1, i = n; i < n + t / 8; i++)
    r[i] = e / s & 255, s *= 256;
  return r;
}
Se.writeUintLE = av;
function cv(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e);
}
Se.readFloat32BE = cv;
function uv(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e, !0);
}
Se.readFloat32LE = uv;
function lv(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e);
}
Se.readFloat64BE = lv;
function dv(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e, !0);
}
Se.readFloat64LE = dv;
function hv(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t), e;
}
Se.writeFloat32BE = hv;
function fv(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t, !0), e;
}
Se.writeFloat32LE = fv;
function pv(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t), e;
}
Se.writeFloat64BE = pv;
function gv(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t, !0), e;
}
Se.writeFloat64LE = gv;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
  const e = ba, r = Se, n = mr;
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
    const m = l.length, _ = 256 - 256 % m;
    for (; u > 0; ) {
      const E = s(Math.ceil(u * 256 / _), f);
      for (let T = 0; T < E.length && u > 0; T++) {
        const M = E[T];
        M < _ && (p += l.charAt(M % m), u--);
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
var Rh = {};
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
          for (var _ = l + 1; _ < m - 8; _++)
            this._buffer[_] = 0;
          e.writeUint32BE(f, this._buffer, m - 8), e.writeUint32BE(p, this._buffer, m - 4), i(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, m), this._finished = !0;
        }
        for (var _ = 0; _ < this.digestLength / 8; _++)
          e.writeUint32BE(this._stateHi[_], c, _ * 8), e.writeUint32BE(this._stateLo[_], c, _ * 8 + 4);
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
    for (var _ = u[0], E = u[1], T = u[2], M = u[3], v = u[4], O = u[5], w = u[6], x = u[7], y = l[0], d = l[1], g = l[2], k = l[3], N = l[4], D = l[5], G = l[6], Y = l[7], C, A, Q, Z, $, q, z, F; m >= 128; ) {
      for (var ye = 0; ye < 16; ye++) {
        var K = 8 * ye + p;
        o[ye] = e.readUint32BE(f, K), c[ye] = e.readUint32BE(f, K + 4);
      }
      for (var ye = 0; ye < 80; ye++) {
        var de = _, ne = E, le = T, L = M, j = v, P = O, h = w, I = x, H = y, ee = d, je = g, Le = k, Oe = N, Ze = D, at = G, tt = Y;
        if (C = x, A = Y, $ = A & 65535, q = A >>> 16, z = C & 65535, F = C >>> 16, C = (v >>> 14 | N << 18) ^ (v >>> 18 | N << 14) ^ (N >>> 9 | v << 23), A = (N >>> 14 | v << 18) ^ (N >>> 18 | v << 14) ^ (v >>> 9 | N << 23), $ += A & 65535, q += A >>> 16, z += C & 65535, F += C >>> 16, C = v & O ^ ~v & w, A = N & D ^ ~N & G, $ += A & 65535, q += A >>> 16, z += C & 65535, F += C >>> 16, C = s[ye * 2], A = s[ye * 2 + 1], $ += A & 65535, q += A >>> 16, z += C & 65535, F += C >>> 16, C = o[ye % 16], A = c[ye % 16], $ += A & 65535, q += A >>> 16, z += C & 65535, F += C >>> 16, q += $ >>> 16, z += q >>> 16, F += z >>> 16, Q = z & 65535 | F << 16, Z = $ & 65535 | q << 16, C = Q, A = Z, $ = A & 65535, q = A >>> 16, z = C & 65535, F = C >>> 16, C = (_ >>> 28 | y << 4) ^ (y >>> 2 | _ << 30) ^ (y >>> 7 | _ << 25), A = (y >>> 28 | _ << 4) ^ (_ >>> 2 | y << 30) ^ (_ >>> 7 | y << 25), $ += A & 65535, q += A >>> 16, z += C & 65535, F += C >>> 16, C = _ & E ^ _ & T ^ E & T, A = y & d ^ y & g ^ d & g, $ += A & 65535, q += A >>> 16, z += C & 65535, F += C >>> 16, q += $ >>> 16, z += q >>> 16, F += z >>> 16, I = z & 65535 | F << 16, tt = $ & 65535 | q << 16, C = L, A = Le, $ = A & 65535, q = A >>> 16, z = C & 65535, F = C >>> 16, C = Q, A = Z, $ += A & 65535, q += A >>> 16, z += C & 65535, F += C >>> 16, q += $ >>> 16, z += q >>> 16, F += z >>> 16, L = z & 65535 | F << 16, Le = $ & 65535 | q << 16, E = de, T = ne, M = le, v = L, O = j, w = P, x = h, _ = I, d = H, g = ee, k = je, N = Le, D = Oe, G = Ze, Y = at, y = tt, ye % 16 === 15)
          for (var K = 0; K < 16; K++)
            C = o[K], A = c[K], $ = A & 65535, q = A >>> 16, z = C & 65535, F = C >>> 16, C = o[(K + 9) % 16], A = c[(K + 9) % 16], $ += A & 65535, q += A >>> 16, z += C & 65535, F += C >>> 16, Q = o[(K + 1) % 16], Z = c[(K + 1) % 16], C = (Q >>> 1 | Z << 31) ^ (Q >>> 8 | Z << 24) ^ Q >>> 7, A = (Z >>> 1 | Q << 31) ^ (Z >>> 8 | Q << 24) ^ (Z >>> 7 | Q << 25), $ += A & 65535, q += A >>> 16, z += C & 65535, F += C >>> 16, Q = o[(K + 14) % 16], Z = c[(K + 14) % 16], C = (Q >>> 19 | Z << 13) ^ (Z >>> 29 | Q << 3) ^ Q >>> 6, A = (Z >>> 19 | Q << 13) ^ (Q >>> 29 | Z << 3) ^ (Z >>> 6 | Q << 26), $ += A & 65535, q += A >>> 16, z += C & 65535, F += C >>> 16, q += $ >>> 16, z += q >>> 16, F += z >>> 16, o[K] = z & 65535 | F << 16, c[K] = $ & 65535 | q << 16;
      }
      C = _, A = y, $ = A & 65535, q = A >>> 16, z = C & 65535, F = C >>> 16, C = u[0], A = l[0], $ += A & 65535, q += A >>> 16, z += C & 65535, F += C >>> 16, q += $ >>> 16, z += q >>> 16, F += z >>> 16, u[0] = _ = z & 65535 | F << 16, l[0] = y = $ & 65535 | q << 16, C = E, A = d, $ = A & 65535, q = A >>> 16, z = C & 65535, F = C >>> 16, C = u[1], A = l[1], $ += A & 65535, q += A >>> 16, z += C & 65535, F += C >>> 16, q += $ >>> 16, z += q >>> 16, F += z >>> 16, u[1] = E = z & 65535 | F << 16, l[1] = d = $ & 65535 | q << 16, C = T, A = g, $ = A & 65535, q = A >>> 16, z = C & 65535, F = C >>> 16, C = u[2], A = l[2], $ += A & 65535, q += A >>> 16, z += C & 65535, F += C >>> 16, q += $ >>> 16, z += q >>> 16, F += z >>> 16, u[2] = T = z & 65535 | F << 16, l[2] = g = $ & 65535 | q << 16, C = M, A = k, $ = A & 65535, q = A >>> 16, z = C & 65535, F = C >>> 16, C = u[3], A = l[3], $ += A & 65535, q += A >>> 16, z += C & 65535, F += C >>> 16, q += $ >>> 16, z += q >>> 16, F += z >>> 16, u[3] = M = z & 65535 | F << 16, l[3] = k = $ & 65535 | q << 16, C = v, A = N, $ = A & 65535, q = A >>> 16, z = C & 65535, F = C >>> 16, C = u[4], A = l[4], $ += A & 65535, q += A >>> 16, z += C & 65535, F += C >>> 16, q += $ >>> 16, z += q >>> 16, F += z >>> 16, u[4] = v = z & 65535 | F << 16, l[4] = N = $ & 65535 | q << 16, C = O, A = D, $ = A & 65535, q = A >>> 16, z = C & 65535, F = C >>> 16, C = u[5], A = l[5], $ += A & 65535, q += A >>> 16, z += C & 65535, F += C >>> 16, q += $ >>> 16, z += q >>> 16, F += z >>> 16, u[5] = O = z & 65535 | F << 16, l[5] = D = $ & 65535 | q << 16, C = w, A = G, $ = A & 65535, q = A >>> 16, z = C & 65535, F = C >>> 16, C = u[6], A = l[6], $ += A & 65535, q += A >>> 16, z += C & 65535, F += C >>> 16, q += $ >>> 16, z += q >>> 16, F += z >>> 16, u[6] = w = z & 65535 | F << 16, l[6] = G = $ & 65535 | q << 16, C = x, A = Y, $ = A & 65535, q = A >>> 16, z = C & 65535, F = C >>> 16, C = u[7], A = l[7], $ += A & 65535, q += A >>> 16, z += C & 65535, F += C >>> 16, q += $ >>> 16, z += q >>> 16, F += z >>> 16, u[7] = x = z & 65535 | F << 16, l[7] = Y = $ & 65535 | q << 16, p += 128, m -= 128;
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
})(Rh);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.convertSecretKeyToX25519 = t.convertPublicKeyToX25519 = t.verify = t.sign = t.extractPublicKeyFromSecretKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.SEED_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = t.SIGNATURE_LENGTH = void 0;
  const e = Fs, r = Rh, n = mr;
  t.SIGNATURE_LENGTH = 64, t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 64, t.SEED_LENGTH = 32;
  function s(L) {
    const j = new Float64Array(16);
    if (L)
      for (let P = 0; P < L.length; P++)
        j[P] = L[P];
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
    for (let P = 0; P < 16; P++)
      L[P] = j[P] | 0;
  }
  function _(L) {
    let j = 1;
    for (let P = 0; P < 16; P++) {
      let h = L[P] + j + 65535;
      j = Math.floor(h / 65536), L[P] = h - j * 65536;
    }
    L[0] += j - 1 + 37 * (j - 1);
  }
  function E(L, j, P) {
    const h = ~(P - 1);
    for (let I = 0; I < 16; I++) {
      const H = h & (L[I] ^ j[I]);
      L[I] ^= H, j[I] ^= H;
    }
  }
  function T(L, j) {
    const P = s(), h = s();
    for (let I = 0; I < 16; I++)
      h[I] = j[I];
    _(h), _(h), _(h);
    for (let I = 0; I < 2; I++) {
      P[0] = h[0] - 65517;
      for (let ee = 1; ee < 15; ee++)
        P[ee] = h[ee] - 65535 - (P[ee - 1] >> 16 & 1), P[ee - 1] &= 65535;
      P[15] = h[15] - 32767 - (P[14] >> 16 & 1);
      const H = P[15] >> 16 & 1;
      P[14] &= 65535, E(h, P, 1 - H);
    }
    for (let I = 0; I < 16; I++)
      L[2 * I] = h[I] & 255, L[2 * I + 1] = h[I] >> 8;
  }
  function M(L, j) {
    let P = 0;
    for (let h = 0; h < 32; h++)
      P |= L[h] ^ j[h];
    return (1 & P - 1 >>> 8) - 1;
  }
  function v(L, j) {
    const P = new Uint8Array(32), h = new Uint8Array(32);
    return T(P, L), T(h, j), M(P, h);
  }
  function O(L) {
    const j = new Uint8Array(32);
    return T(j, L), j[0] & 1;
  }
  function w(L, j) {
    for (let P = 0; P < 16; P++)
      L[P] = j[2 * P] + (j[2 * P + 1] << 8);
    L[15] &= 32767;
  }
  function x(L, j, P) {
    for (let h = 0; h < 16; h++)
      L[h] = j[h] + P[h];
  }
  function y(L, j, P) {
    for (let h = 0; h < 16; h++)
      L[h] = j[h] - P[h];
  }
  function d(L, j, P) {
    let h, I, H = 0, ee = 0, je = 0, Le = 0, Oe = 0, Ze = 0, at = 0, tt = 0, Ve = 0, Ue = 0, Te = 0, ke = 0, Ce = 0, we = 0, be = 0, he = 0, Ne = 0, Me = 0, me = 0, ze = 0, Fe = 0, He = 0, Ge = 0, We = 0, hr = 0, vr = 0, Vr = 0, Dt = 0, qr = 0, br = 0, yn = 0, ct = P[0], st = P[1], gt = P[2], lt = P[3], yt = P[4], it = P[5], Et = P[6], Ot = P[7], Tt = P[8], St = P[9], Ct = P[10], xt = P[11], mt = P[12], rt = P[13], S = P[14], U = P[15];
    h = j[0], H += h * ct, ee += h * st, je += h * gt, Le += h * lt, Oe += h * yt, Ze += h * it, at += h * Et, tt += h * Ot, Ve += h * Tt, Ue += h * St, Te += h * Ct, ke += h * xt, Ce += h * mt, we += h * rt, be += h * S, he += h * U, h = j[1], ee += h * ct, je += h * st, Le += h * gt, Oe += h * lt, Ze += h * yt, at += h * it, tt += h * Et, Ve += h * Ot, Ue += h * Tt, Te += h * St, ke += h * Ct, Ce += h * xt, we += h * mt, be += h * rt, he += h * S, Ne += h * U, h = j[2], je += h * ct, Le += h * st, Oe += h * gt, Ze += h * lt, at += h * yt, tt += h * it, Ve += h * Et, Ue += h * Ot, Te += h * Tt, ke += h * St, Ce += h * Ct, we += h * xt, be += h * mt, he += h * rt, Ne += h * S, Me += h * U, h = j[3], Le += h * ct, Oe += h * st, Ze += h * gt, at += h * lt, tt += h * yt, Ve += h * it, Ue += h * Et, Te += h * Ot, ke += h * Tt, Ce += h * St, we += h * Ct, be += h * xt, he += h * mt, Ne += h * rt, Me += h * S, me += h * U, h = j[4], Oe += h * ct, Ze += h * st, at += h * gt, tt += h * lt, Ve += h * yt, Ue += h * it, Te += h * Et, ke += h * Ot, Ce += h * Tt, we += h * St, be += h * Ct, he += h * xt, Ne += h * mt, Me += h * rt, me += h * S, ze += h * U, h = j[5], Ze += h * ct, at += h * st, tt += h * gt, Ve += h * lt, Ue += h * yt, Te += h * it, ke += h * Et, Ce += h * Ot, we += h * Tt, be += h * St, he += h * Ct, Ne += h * xt, Me += h * mt, me += h * rt, ze += h * S, Fe += h * U, h = j[6], at += h * ct, tt += h * st, Ve += h * gt, Ue += h * lt, Te += h * yt, ke += h * it, Ce += h * Et, we += h * Ot, be += h * Tt, he += h * St, Ne += h * Ct, Me += h * xt, me += h * mt, ze += h * rt, Fe += h * S, He += h * U, h = j[7], tt += h * ct, Ve += h * st, Ue += h * gt, Te += h * lt, ke += h * yt, Ce += h * it, we += h * Et, be += h * Ot, he += h * Tt, Ne += h * St, Me += h * Ct, me += h * xt, ze += h * mt, Fe += h * rt, He += h * S, Ge += h * U, h = j[8], Ve += h * ct, Ue += h * st, Te += h * gt, ke += h * lt, Ce += h * yt, we += h * it, be += h * Et, he += h * Ot, Ne += h * Tt, Me += h * St, me += h * Ct, ze += h * xt, Fe += h * mt, He += h * rt, Ge += h * S, We += h * U, h = j[9], Ue += h * ct, Te += h * st, ke += h * gt, Ce += h * lt, we += h * yt, be += h * it, he += h * Et, Ne += h * Ot, Me += h * Tt, me += h * St, ze += h * Ct, Fe += h * xt, He += h * mt, Ge += h * rt, We += h * S, hr += h * U, h = j[10], Te += h * ct, ke += h * st, Ce += h * gt, we += h * lt, be += h * yt, he += h * it, Ne += h * Et, Me += h * Ot, me += h * Tt, ze += h * St, Fe += h * Ct, He += h * xt, Ge += h * mt, We += h * rt, hr += h * S, vr += h * U, h = j[11], ke += h * ct, Ce += h * st, we += h * gt, be += h * lt, he += h * yt, Ne += h * it, Me += h * Et, me += h * Ot, ze += h * Tt, Fe += h * St, He += h * Ct, Ge += h * xt, We += h * mt, hr += h * rt, vr += h * S, Vr += h * U, h = j[12], Ce += h * ct, we += h * st, be += h * gt, he += h * lt, Ne += h * yt, Me += h * it, me += h * Et, ze += h * Ot, Fe += h * Tt, He += h * St, Ge += h * Ct, We += h * xt, hr += h * mt, vr += h * rt, Vr += h * S, Dt += h * U, h = j[13], we += h * ct, be += h * st, he += h * gt, Ne += h * lt, Me += h * yt, me += h * it, ze += h * Et, Fe += h * Ot, He += h * Tt, Ge += h * St, We += h * Ct, hr += h * xt, vr += h * mt, Vr += h * rt, Dt += h * S, qr += h * U, h = j[14], be += h * ct, he += h * st, Ne += h * gt, Me += h * lt, me += h * yt, ze += h * it, Fe += h * Et, He += h * Ot, Ge += h * Tt, We += h * St, hr += h * Ct, vr += h * xt, Vr += h * mt, Dt += h * rt, qr += h * S, br += h * U, h = j[15], he += h * ct, Ne += h * st, Me += h * gt, me += h * lt, ze += h * yt, Fe += h * it, He += h * Et, Ge += h * Ot, We += h * Tt, hr += h * St, vr += h * Ct, Vr += h * xt, Dt += h * mt, qr += h * rt, br += h * S, yn += h * U, H += 38 * Ne, ee += 38 * Me, je += 38 * me, Le += 38 * ze, Oe += 38 * Fe, Ze += 38 * He, at += 38 * Ge, tt += 38 * We, Ve += 38 * hr, Ue += 38 * vr, Te += 38 * Vr, ke += 38 * Dt, Ce += 38 * qr, we += 38 * br, be += 38 * yn, I = 1, h = H + I + 65535, I = Math.floor(h / 65536), H = h - I * 65536, h = ee + I + 65535, I = Math.floor(h / 65536), ee = h - I * 65536, h = je + I + 65535, I = Math.floor(h / 65536), je = h - I * 65536, h = Le + I + 65535, I = Math.floor(h / 65536), Le = h - I * 65536, h = Oe + I + 65535, I = Math.floor(h / 65536), Oe = h - I * 65536, h = Ze + I + 65535, I = Math.floor(h / 65536), Ze = h - I * 65536, h = at + I + 65535, I = Math.floor(h / 65536), at = h - I * 65536, h = tt + I + 65535, I = Math.floor(h / 65536), tt = h - I * 65536, h = Ve + I + 65535, I = Math.floor(h / 65536), Ve = h - I * 65536, h = Ue + I + 65535, I = Math.floor(h / 65536), Ue = h - I * 65536, h = Te + I + 65535, I = Math.floor(h / 65536), Te = h - I * 65536, h = ke + I + 65535, I = Math.floor(h / 65536), ke = h - I * 65536, h = Ce + I + 65535, I = Math.floor(h / 65536), Ce = h - I * 65536, h = we + I + 65535, I = Math.floor(h / 65536), we = h - I * 65536, h = be + I + 65535, I = Math.floor(h / 65536), be = h - I * 65536, h = he + I + 65535, I = Math.floor(h / 65536), he = h - I * 65536, H += I - 1 + 37 * (I - 1), I = 1, h = H + I + 65535, I = Math.floor(h / 65536), H = h - I * 65536, h = ee + I + 65535, I = Math.floor(h / 65536), ee = h - I * 65536, h = je + I + 65535, I = Math.floor(h / 65536), je = h - I * 65536, h = Le + I + 65535, I = Math.floor(h / 65536), Le = h - I * 65536, h = Oe + I + 65535, I = Math.floor(h / 65536), Oe = h - I * 65536, h = Ze + I + 65535, I = Math.floor(h / 65536), Ze = h - I * 65536, h = at + I + 65535, I = Math.floor(h / 65536), at = h - I * 65536, h = tt + I + 65535, I = Math.floor(h / 65536), tt = h - I * 65536, h = Ve + I + 65535, I = Math.floor(h / 65536), Ve = h - I * 65536, h = Ue + I + 65535, I = Math.floor(h / 65536), Ue = h - I * 65536, h = Te + I + 65535, I = Math.floor(h / 65536), Te = h - I * 65536, h = ke + I + 65535, I = Math.floor(h / 65536), ke = h - I * 65536, h = Ce + I + 65535, I = Math.floor(h / 65536), Ce = h - I * 65536, h = we + I + 65535, I = Math.floor(h / 65536), we = h - I * 65536, h = be + I + 65535, I = Math.floor(h / 65536), be = h - I * 65536, h = he + I + 65535, I = Math.floor(h / 65536), he = h - I * 65536, H += I - 1 + 37 * (I - 1), L[0] = H, L[1] = ee, L[2] = je, L[3] = Le, L[4] = Oe, L[5] = Ze, L[6] = at, L[7] = tt, L[8] = Ve, L[9] = Ue, L[10] = Te, L[11] = ke, L[12] = Ce, L[13] = we, L[14] = be, L[15] = he;
  }
  function g(L, j) {
    d(L, j, j);
  }
  function k(L, j) {
    const P = s();
    let h;
    for (h = 0; h < 16; h++)
      P[h] = j[h];
    for (h = 253; h >= 0; h--)
      g(P, P), h !== 2 && h !== 4 && d(P, P, j);
    for (h = 0; h < 16; h++)
      L[h] = P[h];
  }
  function N(L, j) {
    const P = s();
    let h;
    for (h = 0; h < 16; h++)
      P[h] = j[h];
    for (h = 250; h >= 0; h--)
      g(P, P), h !== 1 && d(P, P, j);
    for (h = 0; h < 16; h++)
      L[h] = P[h];
  }
  function D(L, j) {
    const P = s(), h = s(), I = s(), H = s(), ee = s(), je = s(), Le = s(), Oe = s(), Ze = s();
    y(P, L[1], L[0]), y(Ze, j[1], j[0]), d(P, P, Ze), x(h, L[0], L[1]), x(Ze, j[0], j[1]), d(h, h, Ze), d(I, L[3], j[3]), d(I, I, u), d(H, L[2], j[2]), x(H, H, H), y(ee, h, P), y(je, H, I), x(Le, H, I), x(Oe, h, P), d(L[0], ee, je), d(L[1], Oe, Le), d(L[2], Le, je), d(L[3], ee, Oe);
  }
  function G(L, j, P) {
    for (let h = 0; h < 4; h++)
      E(L[h], j[h], P);
  }
  function Y(L, j) {
    const P = s(), h = s(), I = s();
    k(I, j[2]), d(P, j[0], I), d(h, j[1], I), T(L, h), L[31] ^= O(P) << 7;
  }
  function C(L, j, P) {
    m(L[0], a), m(L[1], o), m(L[2], o), m(L[3], a);
    for (let h = 255; h >= 0; --h) {
      const I = P[h / 8 | 0] >> (h & 7) & 1;
      G(L, j, I), D(j, L), D(L, L), G(L, j, I);
    }
  }
  function A(L, j) {
    const P = [s(), s(), s(), s()];
    m(P[0], l), m(P[1], f), m(P[2], o), d(P[3], l, f), C(L, P, j);
  }
  function Q(L) {
    if (L.length !== t.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${t.SEED_LENGTH} bytes`);
    const j = (0, r.hash)(L);
    j[0] &= 248, j[31] &= 127, j[31] |= 64;
    const P = new Uint8Array(32), h = [s(), s(), s(), s()];
    A(h, j), Y(P, h);
    const I = new Uint8Array(64);
    return I.set(L), I.set(P, 32), {
      publicKey: P,
      secretKey: I
    };
  }
  t.generateKeyPairFromSeed = Q;
  function Z(L) {
    const j = (0, e.randomBytes)(32, L), P = Q(j);
    return (0, n.wipe)(j), P;
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
    let P, h, I, H;
    for (h = 63; h >= 32; --h) {
      for (P = 0, I = h - 32, H = h - 12; I < H; ++I)
        j[I] += P - 16 * j[h] * q[I - (h - 32)], P = Math.floor((j[I] + 128) / 256), j[I] -= P * 256;
      j[I] += P, j[h] = 0;
    }
    for (P = 0, I = 0; I < 32; I++)
      j[I] += P - (j[31] >> 4) * q[I], P = j[I] >> 8, j[I] &= 255;
    for (I = 0; I < 32; I++)
      j[I] -= P * q[I];
    for (h = 0; h < 32; h++)
      j[h + 1] += j[h] >> 8, L[h] = j[h] & 255;
  }
  function F(L) {
    const j = new Float64Array(64);
    for (let P = 0; P < 64; P++)
      j[P] = L[P];
    for (let P = 0; P < 64; P++)
      L[P] = 0;
    z(L, j);
  }
  function ye(L, j) {
    const P = new Float64Array(64), h = [s(), s(), s(), s()], I = (0, r.hash)(L.subarray(0, 32));
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
      P[Oe] = je[Oe];
    for (let Oe = 0; Oe < 32; Oe++)
      for (let Ze = 0; Ze < 32; Ze++)
        P[Oe + Ze] += Le[Oe] * I[Ze];
    return z(H.subarray(32), P), H;
  }
  t.sign = ye;
  function K(L, j) {
    const P = s(), h = s(), I = s(), H = s(), ee = s(), je = s(), Le = s();
    return m(L[2], o), w(L[1], j), g(I, L[1]), d(H, I, c), y(I, I, L[2]), x(H, L[2], H), g(ee, H), g(je, ee), d(Le, je, ee), d(P, Le, I), d(P, P, H), N(P, P), d(P, P, I), d(P, P, H), d(P, P, H), d(L[0], P, H), g(h, L[0]), d(h, h, H), v(h, I) && d(L[0], L[0], p), g(h, L[0]), d(h, h, H), v(h, I) ? -1 : (O(L[0]) === j[31] >> 7 && y(L[0], a, L[0]), d(L[3], L[0], L[1]), 0);
  }
  function de(L, j, P) {
    const h = new Uint8Array(32), I = [s(), s(), s(), s()], H = [s(), s(), s(), s()];
    if (P.length !== t.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${t.SIGNATURE_LENGTH} bytes`);
    if (K(H, L))
      return !1;
    const ee = new r.SHA512();
    ee.update(P.subarray(0, 32)), ee.update(L), ee.update(j);
    const je = ee.digest();
    return F(je), C(I, H, je), A(H, P.subarray(32)), D(I, H), Y(h, I), !M(P, h);
  }
  t.verify = de;
  function ne(L) {
    let j = [s(), s(), s(), s()];
    if (K(j, L))
      throw new Error("Ed25519: invalid public key");
    let P = s(), h = s(), I = j[1];
    x(P, o, I), y(h, o, I), k(h, h), d(P, P, h);
    let H = new Uint8Array(32);
    return T(H, P), H;
  }
  t.convertPublicKeyToX25519 = ne;
  function le(L) {
    const j = (0, r.hash)(L.subarray(0, 32));
    j[0] &= 248, j[31] &= 127, j[31] |= 64;
    const P = new Uint8Array(j.subarray(0, 32));
    return (0, n.wipe)(j), P;
  }
  t.convertSecretKeyToX25519 = le;
})(uu);
const yv = "EdDSA", mv = "JWT", Ah = ".", jh = "base64url", vv = "utf8", bv = "utf8", _v = ":", wv = "did", Ev = "key", Rl = "base58btc", Sv = "z", xv = "K36", Iv = 32;
function lu(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function Lh(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? lu(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function pc(t, e) {
  e || (e = t.reduce((s, i) => s + i.length, 0));
  const r = Lh(e);
  let n = 0;
  for (const s of t)
    r.set(s, n), n += s.length;
  return lu(r);
}
function Ov(t, e) {
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
  function f(_) {
    if (_ instanceof Uint8Array || (ArrayBuffer.isView(_) ? _ = new Uint8Array(_.buffer, _.byteOffset, _.byteLength) : Array.isArray(_) && (_ = Uint8Array.from(_))), !(_ instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (_.length === 0)
      return "";
    for (var E = 0, T = 0, M = 0, v = _.length; M !== v && _[M] === 0; )
      M++, E++;
    for (var O = (v - M) * l + 1 >>> 0, w = new Uint8Array(O); M !== v; ) {
      for (var x = _[M], y = 0, d = O - 1; (x !== 0 || y < T) && d !== -1; d--, y++)
        x += 256 * w[d] >>> 0, w[d] = x % o >>> 0, x = x / o >>> 0;
      if (x !== 0)
        throw new Error("Non-zero carry");
      T = y, M++;
    }
    for (var g = O - T; g !== O && w[g] === 0; )
      g++;
    for (var k = c.repeat(E); g < O; ++g)
      k += t.charAt(w[g]);
    return k;
  }
  function p(_) {
    if (typeof _ != "string")
      throw new TypeError("Expected String");
    if (_.length === 0)
      return new Uint8Array();
    var E = 0;
    if (_[E] !== " ") {
      for (var T = 0, M = 0; _[E] === c; )
        T++, E++;
      for (var v = (_.length - E) * u + 1 >>> 0, O = new Uint8Array(v); _[E]; ) {
        var w = r[_.charCodeAt(E)];
        if (w === 255)
          return;
        for (var x = 0, y = v - 1; (w !== 0 || x < M) && y !== -1; y--, x++)
          w += o * O[y] >>> 0, O[y] = w % 256 >>> 0, w = w / 256 >>> 0;
        if (w !== 0)
          throw new Error("Non-zero carry");
        M = x, E++;
      }
      if (_[E] !== " ") {
        for (var d = v - M; d !== v && O[d] === 0; )
          d++;
        for (var g = new Uint8Array(T + (v - d)), k = T; d !== v; )
          g[k++] = O[d++];
        return g;
      }
    }
  }
  function m(_) {
    var E = p(_);
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
var Tv = Ov, Cv = Tv;
const Pv = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, kv = (t) => new TextEncoder().encode(t), Nv = (t) => new TextDecoder().decode(t);
class Rv {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Av {
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
    return Mh(this, e);
  }
}
class jv {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Mh(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Mh = (t, e) => new jv({
  ...t.decoders || { [t.prefix]: t },
  ...e.decoders || { [e.prefix]: e }
});
class Lv {
  constructor(e, r, n, s) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = s, this.encoder = new Rv(e, r, n), this.decoder = new Av(e, r, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Ea = ({ name: t, prefix: e, encode: r, decode: n }) => new Lv(t, e, r, n), Qi = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: s } = Cv(r, e);
  return Ea({
    prefix: t,
    name: e,
    encode: n,
    decode: (i) => Pv(s(i))
  });
}, Mv = (t, e, r, n) => {
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
}, Dv = (t, e, r) => {
  const n = e[e.length - 1] === "=", s = (1 << r) - 1;
  let i = "", a = 0, o = 0;
  for (let c = 0; c < t.length; ++c)
    for (o = o << 8 | t[c], a += 8; a > r; )
      a -= r, i += e[s & o >> a];
  if (a && (i += e[s & o << r - a]), n)
    for (; i.length * r & 7; )
      i += "=";
  return i;
}, $t = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => Ea({
  prefix: e,
  name: t,
  encode(s) {
    return Dv(s, n, r);
  },
  decode(s) {
    return Mv(s, n, r, t);
  }
}), Uv = Ea({
  prefix: "\0",
  name: "identity",
  encode: (t) => Nv(t),
  decode: (t) => kv(t)
}), zv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: Uv
}, Symbol.toStringTag, { value: "Module" })), $v = $t({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), Vv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: $v
}, Symbol.toStringTag, { value: "Module" })), qv = $t({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), Zv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: qv
}, Symbol.toStringTag, { value: "Module" })), Fv = Qi({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), Kv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: Fv
}, Symbol.toStringTag, { value: "Module" })), Wv = $t({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), Bv = $t({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), Hv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: Wv,
  base16upper: Bv
}, Symbol.toStringTag, { value: "Module" })), Gv = $t({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), Yv = $t({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), Jv = $t({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), Xv = $t({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), Qv = $t({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), eb = $t({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), tb = $t({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), rb = $t({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), nb = $t({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), sb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: Gv,
  base32hex: Qv,
  base32hexpad: tb,
  base32hexpadupper: rb,
  base32hexupper: eb,
  base32pad: Jv,
  base32padupper: Xv,
  base32upper: Yv,
  base32z: nb
}, Symbol.toStringTag, { value: "Module" })), ib = Qi({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), ob = Qi({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), ab = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: ib,
  base36upper: ob
}, Symbol.toStringTag, { value: "Module" })), cb = Qi({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), ub = Qi({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), lb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: cb,
  base58flickr: ub
}, Symbol.toStringTag, { value: "Module" })), db = $t({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), hb = $t({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), fb = $t({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), pb = $t({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), gb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: db,
  base64pad: hb,
  base64url: fb,
  base64urlpad: pb
}, Symbol.toStringTag, { value: "Module" })), Dh = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), yb = Dh.reduce((t, e, r) => (t[r] = e, t), []), mb = Dh.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function vb(t) {
  return t.reduce((e, r) => (e += yb[r], e), "");
}
function bb(t) {
  const e = [];
  for (const r of t) {
    const n = mb[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const _b = Ea({
  prefix: "🚀",
  name: "base256emoji",
  encode: vb,
  decode: bb
}), wb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: _b
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const Al = {
  ...zv,
  ...Vv,
  ...Zv,
  ...Kv,
  ...Hv,
  ...sb,
  ...ab,
  ...lb,
  ...gb,
  ...wb
};
function Uh(t, e, r, n) {
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
const jl = Uh("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), qa = Uh("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = Lh(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), zh = {
  utf8: jl,
  "utf-8": jl,
  hex: Al.base16,
  latin1: qa,
  ascii: qa,
  binary: qa,
  ...Al
};
function sr(t, e = "utf8") {
  const r = zh[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : r.encoder.encode(t).substring(1);
}
function lr(t, e = "utf8") {
  const r = zh[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? lu(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
function zo(t) {
  return sr(lr(Xi(t), vv), jh);
}
function $h(t) {
  const e = lr(xv, Rl), r = Sv + sr(pc([e, t]), Rl);
  return [wv, Ev, r].join(_v);
}
function Eb(t) {
  return sr(t, jh);
}
function Sb(t) {
  return lr([zo(t.header), zo(t.payload)].join(Ah), bv);
}
function xb(t) {
  return [
    zo(t.header),
    zo(t.payload),
    Eb(t.signature)
  ].join(Ah);
}
function Ll(t = Fs.randomBytes(Iv)) {
  return uu.generateKeyPairFromSeed(t);
}
async function Ib(t, e, r, n, s = ae.fromMiliseconds(Date.now())) {
  const i = { alg: yv, typ: mv }, a = $h(n.publicKey), o = s + r, c = { iss: a, sub: t, aud: e, iat: s, exp: o }, u = Sb({ header: i, payload: c }), l = uu.sign(n.secretKey, u);
  return xb({ header: i, payload: c, signature: l });
}
var du = {}, Sa = {};
Object.defineProperty(Sa, "__esModule", { value: !0 });
var Ft = Se, gc = mr, Ob = 20;
function Tb(t, e, r) {
  for (var n = 1634760805, s = 857760878, i = 2036477234, a = 1797285236, o = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], c = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], u = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], l = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], f = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], p = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], m = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], _ = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], E = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], T = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], M = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], v = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], O = n, w = s, x = i, y = a, d = o, g = c, k = u, N = l, D = f, G = p, Y = m, C = _, A = E, Q = T, Z = M, $ = v, q = 0; q < Ob; q += 2)
    O = O + d | 0, A ^= O, A = A >>> 16 | A << 16, D = D + A | 0, d ^= D, d = d >>> 20 | d << 12, w = w + g | 0, Q ^= w, Q = Q >>> 16 | Q << 16, G = G + Q | 0, g ^= G, g = g >>> 20 | g << 12, x = x + k | 0, Z ^= x, Z = Z >>> 16 | Z << 16, Y = Y + Z | 0, k ^= Y, k = k >>> 20 | k << 12, y = y + N | 0, $ ^= y, $ = $ >>> 16 | $ << 16, C = C + $ | 0, N ^= C, N = N >>> 20 | N << 12, x = x + k | 0, Z ^= x, Z = Z >>> 24 | Z << 8, Y = Y + Z | 0, k ^= Y, k = k >>> 25 | k << 7, y = y + N | 0, $ ^= y, $ = $ >>> 24 | $ << 8, C = C + $ | 0, N ^= C, N = N >>> 25 | N << 7, w = w + g | 0, Q ^= w, Q = Q >>> 24 | Q << 8, G = G + Q | 0, g ^= G, g = g >>> 25 | g << 7, O = O + d | 0, A ^= O, A = A >>> 24 | A << 8, D = D + A | 0, d ^= D, d = d >>> 25 | d << 7, O = O + g | 0, $ ^= O, $ = $ >>> 16 | $ << 16, Y = Y + $ | 0, g ^= Y, g = g >>> 20 | g << 12, w = w + k | 0, A ^= w, A = A >>> 16 | A << 16, C = C + A | 0, k ^= C, k = k >>> 20 | k << 12, x = x + N | 0, Q ^= x, Q = Q >>> 16 | Q << 16, D = D + Q | 0, N ^= D, N = N >>> 20 | N << 12, y = y + d | 0, Z ^= y, Z = Z >>> 16 | Z << 16, G = G + Z | 0, d ^= G, d = d >>> 20 | d << 12, x = x + N | 0, Q ^= x, Q = Q >>> 24 | Q << 8, D = D + Q | 0, N ^= D, N = N >>> 25 | N << 7, y = y + d | 0, Z ^= y, Z = Z >>> 24 | Z << 8, G = G + Z | 0, d ^= G, d = d >>> 25 | d << 7, w = w + k | 0, A ^= w, A = A >>> 24 | A << 8, C = C + A | 0, k ^= C, k = k >>> 25 | k << 7, O = O + g | 0, $ ^= O, $ = $ >>> 24 | $ << 8, Y = Y + $ | 0, g ^= Y, g = g >>> 25 | g << 7;
  Ft.writeUint32LE(O + n | 0, t, 0), Ft.writeUint32LE(w + s | 0, t, 4), Ft.writeUint32LE(x + i | 0, t, 8), Ft.writeUint32LE(y + a | 0, t, 12), Ft.writeUint32LE(d + o | 0, t, 16), Ft.writeUint32LE(g + c | 0, t, 20), Ft.writeUint32LE(k + u | 0, t, 24), Ft.writeUint32LE(N + l | 0, t, 28), Ft.writeUint32LE(D + f | 0, t, 32), Ft.writeUint32LE(G + p | 0, t, 36), Ft.writeUint32LE(Y + m | 0, t, 40), Ft.writeUint32LE(C + _ | 0, t, 44), Ft.writeUint32LE(A + E | 0, t, 48), Ft.writeUint32LE(Q + T | 0, t, 52), Ft.writeUint32LE(Z + M | 0, t, 56), Ft.writeUint32LE($ + v | 0, t, 60);
}
function Vh(t, e, r, n, s) {
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
    Tb(o, i, t);
    for (var u = c; u < c + 64 && u < r.length; u++)
      n[u] = r[u] ^ o[u - c];
    Pb(i, 0, a);
  }
  return gc.wipe(o), s === 0 && gc.wipe(i), n;
}
Sa.streamXOR = Vh;
function Cb(t, e, r, n) {
  return n === void 0 && (n = 0), gc.wipe(r), Vh(t, e, r, r, n);
}
Sa.stream = Cb;
function Pb(t, e, r) {
  for (var n = 1; r--; )
    n = n + (t[e] & 255) | 0, t[e] = n & 255, n >>>= 8, e++;
  if (n > 0)
    throw new Error("ChaCha: counter overflow");
}
var qh = {}, Dn = {};
Object.defineProperty(Dn, "__esModule", { value: !0 });
function kb(t, e, r) {
  return ~(t - 1) & e | t - 1 & r;
}
Dn.select = kb;
function Nb(t, e) {
  return (t | 0) - (e | 0) - 1 >>> 31 & 1;
}
Dn.lessOrEqual = Nb;
function Zh(t, e) {
  if (t.length !== e.length)
    return 0;
  for (var r = 0, n = 0; n < t.length; n++)
    r |= t[n] ^ e[n];
  return 1 & r - 1 >>> 8;
}
Dn.compare = Zh;
function Rb(t, e) {
  return t.length === 0 || e.length === 0 ? !1 : Zh(t, e) !== 0;
}
Dn.equal = Rb;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Dn, r = mr;
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
        var _ = o[12] | o[13] << 8;
        this._r[7] = (m >>> 11 | _ << 5) & 8065;
        var E = o[14] | o[15] << 8;
        this._r[8] = (_ >>> 8 | E << 8) & 8191, this._r[9] = E >>> 5 & 127, this._pad[0] = o[16] | o[17] << 8, this._pad[1] = o[18] | o[19] << 8, this._pad[2] = o[20] | o[21] << 8, this._pad[3] = o[22] | o[23] << 8, this._pad[4] = o[24] | o[25] << 8, this._pad[5] = o[26] | o[27] << 8, this._pad[6] = o[28] | o[29] << 8, this._pad[7] = o[30] | o[31] << 8;
      }
      return a.prototype._blocks = function(o, c, u) {
        for (var l = this._fin ? 0 : 2048, f = this._h[0], p = this._h[1], m = this._h[2], _ = this._h[3], E = this._h[4], T = this._h[5], M = this._h[6], v = this._h[7], O = this._h[8], w = this._h[9], x = this._r[0], y = this._r[1], d = this._r[2], g = this._r[3], k = this._r[4], N = this._r[5], D = this._r[6], G = this._r[7], Y = this._r[8], C = this._r[9]; u >= 16; ) {
          var A = o[c + 0] | o[c + 1] << 8;
          f += A & 8191;
          var Q = o[c + 2] | o[c + 3] << 8;
          p += (A >>> 13 | Q << 3) & 8191;
          var Z = o[c + 4] | o[c + 5] << 8;
          m += (Q >>> 10 | Z << 6) & 8191;
          var $ = o[c + 6] | o[c + 7] << 8;
          _ += (Z >>> 7 | $ << 9) & 8191;
          var q = o[c + 8] | o[c + 9] << 8;
          E += ($ >>> 4 | q << 12) & 8191, T += q >>> 1 & 8191;
          var z = o[c + 10] | o[c + 11] << 8;
          M += (q >>> 14 | z << 2) & 8191;
          var F = o[c + 12] | o[c + 13] << 8;
          v += (z >>> 11 | F << 5) & 8191;
          var ye = o[c + 14] | o[c + 15] << 8;
          O += (F >>> 8 | ye << 8) & 8191, w += ye >>> 5 | l;
          var K = 0, de = K;
          de += f * x, de += p * (5 * C), de += m * (5 * Y), de += _ * (5 * G), de += E * (5 * D), K = de >>> 13, de &= 8191, de += T * (5 * N), de += M * (5 * k), de += v * (5 * g), de += O * (5 * d), de += w * (5 * y), K += de >>> 13, de &= 8191;
          var ne = K;
          ne += f * y, ne += p * x, ne += m * (5 * C), ne += _ * (5 * Y), ne += E * (5 * G), K = ne >>> 13, ne &= 8191, ne += T * (5 * D), ne += M * (5 * N), ne += v * (5 * k), ne += O * (5 * g), ne += w * (5 * d), K += ne >>> 13, ne &= 8191;
          var le = K;
          le += f * d, le += p * y, le += m * x, le += _ * (5 * C), le += E * (5 * Y), K = le >>> 13, le &= 8191, le += T * (5 * G), le += M * (5 * D), le += v * (5 * N), le += O * (5 * k), le += w * (5 * g), K += le >>> 13, le &= 8191;
          var L = K;
          L += f * g, L += p * d, L += m * y, L += _ * x, L += E * (5 * C), K = L >>> 13, L &= 8191, L += T * (5 * Y), L += M * (5 * G), L += v * (5 * D), L += O * (5 * N), L += w * (5 * k), K += L >>> 13, L &= 8191;
          var j = K;
          j += f * k, j += p * g, j += m * d, j += _ * y, j += E * x, K = j >>> 13, j &= 8191, j += T * (5 * C), j += M * (5 * Y), j += v * (5 * G), j += O * (5 * D), j += w * (5 * N), K += j >>> 13, j &= 8191;
          var P = K;
          P += f * N, P += p * k, P += m * g, P += _ * d, P += E * y, K = P >>> 13, P &= 8191, P += T * x, P += M * (5 * C), P += v * (5 * Y), P += O * (5 * G), P += w * (5 * D), K += P >>> 13, P &= 8191;
          var h = K;
          h += f * D, h += p * N, h += m * k, h += _ * g, h += E * d, K = h >>> 13, h &= 8191, h += T * y, h += M * x, h += v * (5 * C), h += O * (5 * Y), h += w * (5 * G), K += h >>> 13, h &= 8191;
          var I = K;
          I += f * G, I += p * D, I += m * N, I += _ * k, I += E * g, K = I >>> 13, I &= 8191, I += T * d, I += M * y, I += v * x, I += O * (5 * C), I += w * (5 * Y), K += I >>> 13, I &= 8191;
          var H = K;
          H += f * Y, H += p * G, H += m * D, H += _ * N, H += E * k, K = H >>> 13, H &= 8191, H += T * g, H += M * d, H += v * y, H += O * x, H += w * (5 * C), K += H >>> 13, H &= 8191;
          var ee = K;
          ee += f * C, ee += p * Y, ee += m * G, ee += _ * D, ee += E * N, K = ee >>> 13, ee &= 8191, ee += T * k, ee += M * g, ee += v * d, ee += O * y, ee += w * x, K += ee >>> 13, ee &= 8191, K = (K << 2) + K | 0, K = K + de | 0, de = K & 8191, K = K >>> 13, ne += K, f = de, p = ne, m = le, _ = L, E = j, T = P, M = h, v = I, O = H, w = ee, c += 16, u -= 16;
        }
        this._h[0] = f, this._h[1] = p, this._h[2] = m, this._h[3] = _, this._h[4] = E, this._h[5] = T, this._h[6] = M, this._h[7] = v, this._h[8] = O, this._h[9] = w;
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
})(qh);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Sa, r = qh, n = mr, s = Se, i = Dn;
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
        var _ = new Uint8Array(32);
        e.stream(this._key, m, _, 4);
        var E = l.length + this.tagLength, T;
        if (p) {
          if (p.length !== E)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          T = p;
        } else
          T = new Uint8Array(E);
        return e.streamXOR(this._key, m, l, T, 4), this._authenticate(T.subarray(T.length - this.tagLength, T.length), _, T.subarray(0, T.length - this.tagLength), f), n.wipe(m), T;
      }, c.prototype.open = function(u, l, f, p) {
        if (u.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (l.length < this.tagLength)
          return null;
        var m = new Uint8Array(16);
        m.set(u, m.length - u.length);
        var _ = new Uint8Array(32);
        e.stream(this._key, m, _, 4);
        var E = new Uint8Array(this.tagLength);
        if (this._authenticate(E, _, l.subarray(0, l.length - this.tagLength), f), !i.equal(E, l.subarray(l.length - this.tagLength, l.length)))
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
        var _ = new Uint8Array(8);
        p && s.writeUint64LE(p.length, _), m.update(_), s.writeUint64LE(f.length, _), m.update(_);
        for (var E = m.digest(), T = 0; T < E.length; T++)
          u[T] = E[T];
        m.clean(), n.wipe(E), n.wipe(_);
      }, c;
    }()
  );
  t.ChaCha20Poly1305 = o;
})(du);
var Fh = {}, eo = {}, hu = {};
Object.defineProperty(hu, "__esModule", { value: !0 });
function Ab(t) {
  return typeof t.saveState < "u" && typeof t.restoreState < "u" && typeof t.cleanSavedState < "u";
}
hu.isSerializableHash = Ab;
Object.defineProperty(eo, "__esModule", { value: !0 });
var Kr = hu, jb = Dn, Lb = mr, Kh = (
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
      this._outer.update(n), Kr.isSerializableHash(this._inner) && Kr.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), Lb.wipe(n);
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
eo.HMAC = Kh;
function Mb(t, e, r) {
  var n = new Kh(t, e);
  n.update(r);
  var s = n.digest();
  return n.clean(), s;
}
eo.hmac = Mb;
eo.equal = jb.equal;
Object.defineProperty(Fh, "__esModule", { value: !0 });
var Ml = eo, Dl = mr, Db = (
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
), Ub = Fh.HKDF = Db, xa = {};
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
          for (var _ = l + 1; _ < m - 8; _++)
            this._buffer[_] = 0;
          e.writeUint32BE(f, this._buffer, m - 8), e.writeUint32BE(p, this._buffer, m - 4), i(this._temp, this._state, this._buffer, 0, m), this._finished = !0;
        }
        for (var _ = 0; _ < this.digestLength / 4; _++)
          e.writeUint32BE(this._state[_], c, _ * 4);
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
      for (var p = c[0], m = c[1], _ = c[2], E = c[3], T = c[4], M = c[5], v = c[6], O = c[7], w = 0; w < 16; w++) {
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
        var d = (((T >>> 6 | T << 26) ^ (T >>> 11 | T << 21) ^ (T >>> 25 | T << 7)) + (T & M ^ ~T & v) | 0) + (O + (s[w] + o[w] | 0) | 0) | 0, g = ((p >>> 2 | p << 30) ^ (p >>> 13 | p << 19) ^ (p >>> 22 | p << 10)) + (p & m ^ p & _ ^ m & _) | 0;
        O = v, v = M, M = T, T = E + d | 0, E = _, _ = m, m = p, p = d + g | 0;
      }
      c[0] += p, c[1] += m, c[2] += _, c[3] += E, c[4] += T, c[5] += M, c[6] += v, c[7] += O, l += 64, f -= 64;
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
})(xa);
var fu = {};
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
      const k = d & (w[g] ^ x[g]);
      w[g] ^= k, x[g] ^= k;
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
      const k = y[15] >> 16 & 1;
      y[14] &= 65535, o(d, y, 1 - k);
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
    let d, g, k = 0, N = 0, D = 0, G = 0, Y = 0, C = 0, A = 0, Q = 0, Z = 0, $ = 0, q = 0, z = 0, F = 0, ye = 0, K = 0, de = 0, ne = 0, le = 0, L = 0, j = 0, P = 0, h = 0, I = 0, H = 0, ee = 0, je = 0, Le = 0, Oe = 0, Ze = 0, at = 0, tt = 0, Ve = y[0], Ue = y[1], Te = y[2], ke = y[3], Ce = y[4], we = y[5], be = y[6], he = y[7], Ne = y[8], Me = y[9], me = y[10], ze = y[11], Fe = y[12], He = y[13], Ge = y[14], We = y[15];
    d = x[0], k += d * Ve, N += d * Ue, D += d * Te, G += d * ke, Y += d * Ce, C += d * we, A += d * be, Q += d * he, Z += d * Ne, $ += d * Me, q += d * me, z += d * ze, F += d * Fe, ye += d * He, K += d * Ge, de += d * We, d = x[1], N += d * Ve, D += d * Ue, G += d * Te, Y += d * ke, C += d * Ce, A += d * we, Q += d * be, Z += d * he, $ += d * Ne, q += d * Me, z += d * me, F += d * ze, ye += d * Fe, K += d * He, de += d * Ge, ne += d * We, d = x[2], D += d * Ve, G += d * Ue, Y += d * Te, C += d * ke, A += d * Ce, Q += d * we, Z += d * be, $ += d * he, q += d * Ne, z += d * Me, F += d * me, ye += d * ze, K += d * Fe, de += d * He, ne += d * Ge, le += d * We, d = x[3], G += d * Ve, Y += d * Ue, C += d * Te, A += d * ke, Q += d * Ce, Z += d * we, $ += d * be, q += d * he, z += d * Ne, F += d * Me, ye += d * me, K += d * ze, de += d * Fe, ne += d * He, le += d * Ge, L += d * We, d = x[4], Y += d * Ve, C += d * Ue, A += d * Te, Q += d * ke, Z += d * Ce, $ += d * we, q += d * be, z += d * he, F += d * Ne, ye += d * Me, K += d * me, de += d * ze, ne += d * Fe, le += d * He, L += d * Ge, j += d * We, d = x[5], C += d * Ve, A += d * Ue, Q += d * Te, Z += d * ke, $ += d * Ce, q += d * we, z += d * be, F += d * he, ye += d * Ne, K += d * Me, de += d * me, ne += d * ze, le += d * Fe, L += d * He, j += d * Ge, P += d * We, d = x[6], A += d * Ve, Q += d * Ue, Z += d * Te, $ += d * ke, q += d * Ce, z += d * we, F += d * be, ye += d * he, K += d * Ne, de += d * Me, ne += d * me, le += d * ze, L += d * Fe, j += d * He, P += d * Ge, h += d * We, d = x[7], Q += d * Ve, Z += d * Ue, $ += d * Te, q += d * ke, z += d * Ce, F += d * we, ye += d * be, K += d * he, de += d * Ne, ne += d * Me, le += d * me, L += d * ze, j += d * Fe, P += d * He, h += d * Ge, I += d * We, d = x[8], Z += d * Ve, $ += d * Ue, q += d * Te, z += d * ke, F += d * Ce, ye += d * we, K += d * be, de += d * he, ne += d * Ne, le += d * Me, L += d * me, j += d * ze, P += d * Fe, h += d * He, I += d * Ge, H += d * We, d = x[9], $ += d * Ve, q += d * Ue, z += d * Te, F += d * ke, ye += d * Ce, K += d * we, de += d * be, ne += d * he, le += d * Ne, L += d * Me, j += d * me, P += d * ze, h += d * Fe, I += d * He, H += d * Ge, ee += d * We, d = x[10], q += d * Ve, z += d * Ue, F += d * Te, ye += d * ke, K += d * Ce, de += d * we, ne += d * be, le += d * he, L += d * Ne, j += d * Me, P += d * me, h += d * ze, I += d * Fe, H += d * He, ee += d * Ge, je += d * We, d = x[11], z += d * Ve, F += d * Ue, ye += d * Te, K += d * ke, de += d * Ce, ne += d * we, le += d * be, L += d * he, j += d * Ne, P += d * Me, h += d * me, I += d * ze, H += d * Fe, ee += d * He, je += d * Ge, Le += d * We, d = x[12], F += d * Ve, ye += d * Ue, K += d * Te, de += d * ke, ne += d * Ce, le += d * we, L += d * be, j += d * he, P += d * Ne, h += d * Me, I += d * me, H += d * ze, ee += d * Fe, je += d * He, Le += d * Ge, Oe += d * We, d = x[13], ye += d * Ve, K += d * Ue, de += d * Te, ne += d * ke, le += d * Ce, L += d * we, j += d * be, P += d * he, h += d * Ne, I += d * Me, H += d * me, ee += d * ze, je += d * Fe, Le += d * He, Oe += d * Ge, Ze += d * We, d = x[14], K += d * Ve, de += d * Ue, ne += d * Te, le += d * ke, L += d * Ce, j += d * we, P += d * be, h += d * he, I += d * Ne, H += d * Me, ee += d * me, je += d * ze, Le += d * Fe, Oe += d * He, Ze += d * Ge, at += d * We, d = x[15], de += d * Ve, ne += d * Ue, le += d * Te, L += d * ke, j += d * Ce, P += d * we, h += d * be, I += d * he, H += d * Ne, ee += d * Me, je += d * me, Le += d * ze, Oe += d * Fe, Ze += d * He, at += d * Ge, tt += d * We, k += 38 * ne, N += 38 * le, D += 38 * L, G += 38 * j, Y += 38 * P, C += 38 * h, A += 38 * I, Q += 38 * H, Z += 38 * ee, $ += 38 * je, q += 38 * Le, z += 38 * Oe, F += 38 * Ze, ye += 38 * at, K += 38 * tt, g = 1, d = k + g + 65535, g = Math.floor(d / 65536), k = d - g * 65536, d = N + g + 65535, g = Math.floor(d / 65536), N = d - g * 65536, d = D + g + 65535, g = Math.floor(d / 65536), D = d - g * 65536, d = G + g + 65535, g = Math.floor(d / 65536), G = d - g * 65536, d = Y + g + 65535, g = Math.floor(d / 65536), Y = d - g * 65536, d = C + g + 65535, g = Math.floor(d / 65536), C = d - g * 65536, d = A + g + 65535, g = Math.floor(d / 65536), A = d - g * 65536, d = Q + g + 65535, g = Math.floor(d / 65536), Q = d - g * 65536, d = Z + g + 65535, g = Math.floor(d / 65536), Z = d - g * 65536, d = $ + g + 65535, g = Math.floor(d / 65536), $ = d - g * 65536, d = q + g + 65535, g = Math.floor(d / 65536), q = d - g * 65536, d = z + g + 65535, g = Math.floor(d / 65536), z = d - g * 65536, d = F + g + 65535, g = Math.floor(d / 65536), F = d - g * 65536, d = ye + g + 65535, g = Math.floor(d / 65536), ye = d - g * 65536, d = K + g + 65535, g = Math.floor(d / 65536), K = d - g * 65536, d = de + g + 65535, g = Math.floor(d / 65536), de = d - g * 65536, k += g - 1 + 37 * (g - 1), g = 1, d = k + g + 65535, g = Math.floor(d / 65536), k = d - g * 65536, d = N + g + 65535, g = Math.floor(d / 65536), N = d - g * 65536, d = D + g + 65535, g = Math.floor(d / 65536), D = d - g * 65536, d = G + g + 65535, g = Math.floor(d / 65536), G = d - g * 65536, d = Y + g + 65535, g = Math.floor(d / 65536), Y = d - g * 65536, d = C + g + 65535, g = Math.floor(d / 65536), C = d - g * 65536, d = A + g + 65535, g = Math.floor(d / 65536), A = d - g * 65536, d = Q + g + 65535, g = Math.floor(d / 65536), Q = d - g * 65536, d = Z + g + 65535, g = Math.floor(d / 65536), Z = d - g * 65536, d = $ + g + 65535, g = Math.floor(d / 65536), $ = d - g * 65536, d = q + g + 65535, g = Math.floor(d / 65536), q = d - g * 65536, d = z + g + 65535, g = Math.floor(d / 65536), z = d - g * 65536, d = F + g + 65535, g = Math.floor(d / 65536), F = d - g * 65536, d = ye + g + 65535, g = Math.floor(d / 65536), ye = d - g * 65536, d = K + g + 65535, g = Math.floor(d / 65536), K = d - g * 65536, d = de + g + 65535, g = Math.floor(d / 65536), de = d - g * 65536, k += g - 1 + 37 * (g - 1), w[0] = k, w[1] = N, w[2] = D, w[3] = G, w[4] = Y, w[5] = C, w[6] = A, w[7] = Q, w[8] = Z, w[9] = $, w[10] = q, w[11] = z, w[12] = F, w[13] = ye, w[14] = K, w[15] = de;
  }
  function m(w, x) {
    p(w, x, x);
  }
  function _(w, x) {
    const y = n();
    for (let d = 0; d < 16; d++)
      y[d] = x[d];
    for (let d = 253; d >= 0; d--)
      m(y, y), d !== 2 && d !== 4 && p(y, y, x);
    for (let d = 0; d < 16; d++)
      w[d] = y[d];
  }
  function E(w, x) {
    const y = new Uint8Array(32), d = new Float64Array(80), g = n(), k = n(), N = n(), D = n(), G = n(), Y = n();
    for (let Z = 0; Z < 31; Z++)
      y[Z] = w[Z];
    y[31] = w[31] & 127 | 64, y[0] &= 248, u(d, x);
    for (let Z = 0; Z < 16; Z++)
      k[Z] = d[Z];
    g[0] = D[0] = 1;
    for (let Z = 254; Z >= 0; --Z) {
      const $ = y[Z >>> 3] >>> (Z & 7) & 1;
      o(g, k, $), o(N, D, $), l(G, g, N), f(g, g, N), l(N, k, D), f(k, k, D), m(D, G), m(Y, g), p(g, N, g), p(N, k, G), l(G, g, N), f(g, g, N), m(k, g), f(N, D, Y), p(g, N, i), l(g, g, D), p(N, N, g), p(g, D, Y), p(D, k, d), m(k, G), o(g, k, $), o(N, D, $);
    }
    for (let Z = 0; Z < 16; Z++)
      d[Z + 16] = g[Z], d[Z + 32] = N[Z], d[Z + 48] = k[Z], d[Z + 64] = D[Z];
    const C = d.subarray(32), A = d.subarray(16);
    _(C, C), p(A, A, C);
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
      for (let k = 0; k < d.length; k++)
        g |= d[k];
      if (g === 0)
        throw new Error("X25519: invalid shared key");
    }
    return d;
  }
  t.sharedKey = O;
})(fu);
var Ul = function(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, s = e.length, i; n < s; n++)
      (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return t.concat(i || Array.prototype.slice.call(e));
}, zb = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, n) {
      this.name = e, this.version = r, this.os = n, this.type = "browser";
    }
    return t;
  }()
), $b = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return t;
  }()
), Vb = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, n, s) {
      this.name = e, this.version = r, this.os = n, this.bot = s, this.type = "bot-device";
    }
    return t;
  }()
), qb = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return t;
  }()
), Zb = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return t;
  }()
), Fb = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, Kb = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, zl = 3, Wb = [
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
  ["searchbot", Fb]
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
function Bb(t) {
  return t ? Vl(t) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new Zb() : typeof navigator < "u" ? Vl(navigator.userAgent) : Yb();
}
function Hb(t) {
  return t !== "" && Wb.reduce(function(e, r) {
    var n = r[0], s = r[1];
    if (e)
      return e;
    var i = s.exec(t);
    return !!i && [n, i];
  }, !1);
}
function Vl(t) {
  var e = Hb(t);
  if (!e)
    return null;
  var r = e[0], n = e[1];
  if (r === "searchbot")
    return new qb();
  var s = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
  s ? s.length < zl && (s = Ul(Ul([], s, !0), Jb(zl - s.length), !0)) : s = [];
  var i = s.join("."), a = Gb(t), o = Kb.exec(t);
  return o && o[1] ? new Vb(r, i, a, o[1]) : new zb(r, i, a);
}
function Gb(t) {
  for (var e = 0, r = $l.length; e < r; e++) {
    var n = $l[e], s = n[0], i = n[1], a = i.exec(t);
    if (a)
      return s;
  }
  return null;
}
function Yb() {
  var t = typeof process < "u" && process.version;
  return t ? new $b(process.version.slice(1)) : null;
}
function Jb(t) {
  for (var e = [], r = 0; r < t; r++)
    e.push("0");
  return e;
}
var nt = {};
Object.defineProperty(nt, "__esModule", { value: !0 });
nt.getLocalStorage = nt.getLocalStorageOrThrow = nt.getCrypto = nt.getCryptoOrThrow = Wh = nt.getLocation = nt.getLocationOrThrow = gu = nt.getNavigator = nt.getNavigatorOrThrow = pu = nt.getDocument = nt.getDocumentOrThrow = nt.getFromWindowOrThrow = nt.getFromWindow = void 0;
function cs(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
nt.getFromWindow = cs;
function Ks(t) {
  const e = cs(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
nt.getFromWindowOrThrow = Ks;
function Xb() {
  return Ks("document");
}
nt.getDocumentOrThrow = Xb;
function Qb() {
  return cs("document");
}
var pu = nt.getDocument = Qb;
function e0() {
  return Ks("navigator");
}
nt.getNavigatorOrThrow = e0;
function t0() {
  return cs("navigator");
}
var gu = nt.getNavigator = t0;
function r0() {
  return Ks("location");
}
nt.getLocationOrThrow = r0;
function n0() {
  return cs("location");
}
var Wh = nt.getLocation = n0;
function s0() {
  return Ks("crypto");
}
nt.getCryptoOrThrow = s0;
function i0() {
  return cs("crypto");
}
nt.getCrypto = i0;
function o0() {
  return Ks("localStorage");
}
nt.getLocalStorageOrThrow = o0;
function a0() {
  return cs("localStorage");
}
nt.getLocalStorage = a0;
var yu = {};
Object.defineProperty(yu, "__esModule", { value: !0 });
var Bh = yu.getWindowMetadata = void 0;
const ql = nt;
function c0() {
  let t, e;
  try {
    t = ql.getDocumentOrThrow(), e = ql.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const l = t.getElementsByTagName("link"), f = [];
    for (let p = 0; p < l.length; p++) {
      const m = l[p], _ = m.getAttribute("rel");
      if (_ && _.toLowerCase().indexOf("icon") > -1) {
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
      const m = f[p], _ = ["itemprop", "property", "name"].map((E) => m.getAttribute(E)).filter((E) => E ? l.includes(E) : !1);
      if (_.length && _) {
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
Bh = yu.getWindowMetadata = c0;
var gi = {}, u0 = (t) => encodeURIComponent(t).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), Hh = "%[a-f0-9]{2}", Zl = new RegExp("(" + Hh + ")|([^%]+?)", "gi"), Fl = new RegExp("(" + Hh + ")+", "gi");
function yc(t, e) {
  try {
    return [decodeURIComponent(t.join(""))];
  } catch {
  }
  if (t.length === 1)
    return t;
  e = e || 1;
  var r = t.slice(0, e), n = t.slice(e);
  return Array.prototype.concat.call([], yc(r), yc(n));
}
function l0(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    for (var e = t.match(Zl) || [], r = 1; r < e.length; r++)
      t = yc(e, r).join(""), e = t.match(Zl) || [];
    return t;
  }
}
function d0(t) {
  for (var e = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = Fl.exec(t); r; ) {
    try {
      e[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var n = l0(r[0]);
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
var h0 = function(t) {
  if (typeof t != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
  try {
    return t = t.replace(/\+/g, " "), decodeURIComponent(t);
  } catch {
    return d0(t);
  }
}, f0 = (t, e) => {
  if (!(typeof t == "string" && typeof e == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "")
    return [t];
  const r = t.indexOf(e);
  return r === -1 ? [t] : [
    t.slice(0, r),
    t.slice(r + e.length)
  ];
}, p0 = function(t, e) {
  for (var r = {}, n = Object.keys(t), s = Array.isArray(e), i = 0; i < n.length; i++) {
    var a = n[i], o = t[a];
    (s ? e.indexOf(a) !== -1 : e(a, o, t)) && (r[a] = o);
  }
  return r;
};
(function(t) {
  const e = u0, r = h0, n = f0, s = p0, i = (v) => v == null, a = Symbol("encodeFragmentIdentifier");
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
          const k = d || g ? x.split(v.arrayFormatSeparator).map((N) => f(N, v)) : x === null ? x : f(x, v);
          y[w] = k;
        };
      case "bracket-separator":
        return (w, x, y) => {
          const d = /(\[\])$/.test(w);
          if (w = w.replace(/\[\]$/, ""), !d) {
            y[w] = x && f(x, v);
            return;
          }
          const g = x === null ? [] : x.split(v.arrayFormatSeparator).map((k) => f(k, v));
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
  function _(v) {
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
      const k = v[g];
      return k === void 0 ? "" : k === null ? l(g, O) : Array.isArray(k) ? k.length === 0 && O.arrayFormat === "bracket-separator" ? l(g, O) + "[]" : k.reduce(x(g), []).join("&") : l(g, O) + "=" + l(k, O);
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
    let k = _(v.url);
    return v.fragmentIdentifier && (k = `#${O[a] ? l(v.fragmentIdentifier, O) : v.fragmentIdentifier}`), `${w}${g}${k}`;
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
const g0 = {
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
function Gh(t, e) {
  return t.includes(":") ? [t] : e.chains || [];
}
const Yh = "base10", nr = "base16", mc = "base64pad", mu = "utf8", Jh = 0, us = 1, y0 = 0, Kl = 1, vc = 12, vu = 32;
function m0() {
  const t = fu.generateKeyPair();
  return { privateKey: sr(t.secretKey, nr), publicKey: sr(t.publicKey, nr) };
}
function bc() {
  const t = Fs.randomBytes(vu);
  return sr(t, nr);
}
function v0(t, e) {
  const r = fu.sharedKey(lr(t, nr), lr(e, nr), !0), n = new Ub(xa.SHA256, r).expand(vu);
  return sr(n, nr);
}
function b0(t) {
  const e = xa.hash(lr(t, nr));
  return sr(e, nr);
}
function Os(t) {
  const e = xa.hash(lr(t, mu));
  return sr(e, nr);
}
function _0(t) {
  return lr(`${t}`, Yh);
}
function to(t) {
  return Number(sr(t, Yh));
}
function w0(t) {
  const e = _0(typeof t.type < "u" ? t.type : Jh);
  if (to(e) === us && typeof t.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof t.senderPublicKey < "u" ? lr(t.senderPublicKey, nr) : void 0, n = typeof t.iv < "u" ? lr(t.iv, nr) : Fs.randomBytes(vc), s = new du.ChaCha20Poly1305(lr(t.symKey, nr)).seal(n, lr(t.message, mu));
  return S0({ type: e, sealed: s, iv: n, senderPublicKey: r });
}
function E0(t) {
  const e = new du.ChaCha20Poly1305(lr(t.symKey, nr)), { sealed: r, iv: n } = $o(t.encoded), s = e.open(n, r);
  if (s === null)
    throw new Error("Failed to decrypt");
  return sr(s, mu);
}
function S0(t) {
  if (to(t.type) === us) {
    if (typeof t.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return sr(pc([t.type, t.senderPublicKey, t.iv, t.sealed]), mc);
  }
  return sr(pc([t.type, t.iv, t.sealed]), mc);
}
function $o(t) {
  const e = lr(t, mc), r = e.slice(y0, Kl), n = Kl;
  if (to(r) === us) {
    const o = n + vu, c = o + vc, u = e.slice(n, o), l = e.slice(o, c), f = e.slice(c);
    return { type: r, sealed: f, iv: l, senderPublicKey: u };
  }
  const s = n + vc, i = e.slice(n, s), a = e.slice(s);
  return { type: r, sealed: a, iv: i };
}
function x0(t, e) {
  const r = $o(t);
  return Xh({ type: to(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? sr(r.senderPublicKey, nr) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function Xh(t) {
  const e = (t == null ? void 0 : t.type) || Jh;
  if (e === us) {
    if (typeof (t == null ? void 0 : t.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: t == null ? void 0 : t.senderPublicKey, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey };
}
function Wl(t) {
  return t.type === us && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
var I0 = Object.defineProperty, Bl = Object.getOwnPropertySymbols, O0 = Object.prototype.hasOwnProperty, T0 = Object.prototype.propertyIsEnumerable, Hl = (t, e, r) => e in t ? I0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Gl = (t, e) => {
  for (var r in e || (e = {}))
    O0.call(e, r) && Hl(t, r, e[r]);
  if (Bl)
    for (var r of Bl(e))
      T0.call(e, r) && Hl(t, r, e[r]);
  return t;
};
const C0 = "ReactNative", yr = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, P0 = "js";
function bu() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function Ws() {
  return !pu() && !!gu() && navigator.product === C0;
}
function Bs() {
  return !bu() && !!gu() && !!pu();
}
function ro() {
  return Ws() ? yr.reactNative : bu() ? yr.node : Bs() ? yr.browser : yr.unknown;
}
function k0() {
  var t;
  try {
    return Ws() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (t = global.Application) == null ? void 0 : t.applicationId : void 0;
  } catch {
    return;
  }
}
function N0(t, e) {
  let r = gi.parse(t);
  return r = Gl(Gl({}, r), e), t = gi.stringify(r), t;
}
function R0() {
  return Bh() || { name: "", description: "", url: "", icons: [""] };
}
function A0() {
  if (ro() === yr.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: n } = global.Platform;
    return [r, n].join("-");
  }
  const t = Bb();
  if (t === null)
    return "unknown";
  const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-");
}
function j0() {
  var t;
  const e = ro();
  return e === yr.browser ? [e, ((t = Wh()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function L0(t, e, r) {
  const n = A0(), s = j0();
  return [[t, e].join("-"), [P0, r].join("-"), n, s].join("/");
}
function M0({ protocol: t, version: e, relayUrl: r, sdkVersion: n, auth: s, projectId: i, useOnCloseEvent: a, bundleId: o }) {
  const c = r.split("?"), u = L0(t, e, n), l = { auth: s, ua: u, projectId: i, useOnCloseEvent: a || void 0, origin: o || void 0 }, f = N0(c[1] || "", l);
  return c[0] + "?" + f;
}
function Bn(t, e) {
  return t.filter((r) => e.includes(r)).length === t.length;
}
function Qh(t) {
  return Object.fromEntries(t.entries());
}
function ef(t) {
  return new Map(Object.entries(t));
}
function ms(t = ae.FIVE_MINUTES, e) {
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
function tf(t, e) {
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
function D0(t) {
  return tf("topic", t);
}
function U0(t) {
  return tf("id", t);
}
function rf(t) {
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
function Sn(t) {
  return Date.now() >= ae.toMiliseconds(t);
}
function It(t, e) {
  return `${t}${e ? `:${e}` : ""}`;
}
async function z0({ id: t, topic: e, wcDeepLink: r }) {
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
async function $0(t, e) {
  try {
    return await t.getItem(e) || (Bs() ? localStorage.getItem(e) : void 0);
  } catch (r) {
    console.error(r);
  }
}
const V0 = "irn";
function _c(t) {
  return (t == null ? void 0 : t.relay) || { protocol: V0 };
}
function No(t) {
  const e = g0[t];
  if (typeof e > "u")
    throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
var q0 = Object.defineProperty, Z0 = Object.defineProperties, F0 = Object.getOwnPropertyDescriptors, Yl = Object.getOwnPropertySymbols, K0 = Object.prototype.hasOwnProperty, W0 = Object.prototype.propertyIsEnumerable, Jl = (t, e, r) => e in t ? q0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, B0 = (t, e) => {
  for (var r in e || (e = {}))
    K0.call(e, r) && Jl(t, r, e[r]);
  if (Yl)
    for (var r of Yl(e))
      W0.call(e, r) && Jl(t, r, e[r]);
  return t;
}, H0 = (t, e) => Z0(t, F0(e));
function G0(t, e = "-") {
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
  return { protocol: n, topic: Y0(s[0]), version: parseInt(s[1], 10), symKey: a.symKey, relay: G0(a), expiryTimestamp: a.expiryTimestamp ? parseInt(a.expiryTimestamp, 10) : void 0 };
}
function Y0(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function J0(t, e = "-") {
  const r = "relay", n = {};
  return Object.keys(t).forEach((s) => {
    const i = r + e + s;
    t[s] && (n[i] = t[s]);
  }), n;
}
function X0(t) {
  return `${t.protocol}:${t.topic}@${t.version}?` + gi.stringify(H0(B0({ symKey: t.symKey }, J0(t.relay)), { expiryTimestamp: t.expiryTimestamp }));
}
function Hs(t) {
  const e = [];
  return t.forEach((r) => {
    const [n, s] = r.split(":");
    e.push(`${n}:${s}`);
  }), e;
}
function Q0(t) {
  const e = [];
  return Object.values(t).forEach((r) => {
    e.push(...Hs(r.accounts));
  }), e;
}
function e_(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    Hs(n.accounts).includes(e) && r.push(...n.methods);
  }), r;
}
function t_(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    Hs(n.accounts).includes(e) && r.push(...n.events);
  }), r;
}
const r_ = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, n_ = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function J(t, e) {
  const { message: r, code: n } = n_[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function _t(t, e) {
  const { message: r, code: n } = r_[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function no(t, e) {
  return Array.isArray(t) ? typeof e < "u" && t.length ? t.every(e) : !0 : !1;
}
function Vo(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function tr(t) {
  return typeof t > "u";
}
function Lt(t, e) {
  return e && tr(t) ? !0 : typeof t == "string" && !!t.trim().length;
}
function _u(t, e) {
  return e && tr(t) ? !0 : typeof t == "number" && !isNaN(t);
}
function s_(t, e) {
  const { requiredNamespaces: r } = e, n = Object.keys(t.namespaces), s = Object.keys(r);
  let i = !0;
  return Bn(s, n) ? (n.forEach((a) => {
    const { accounts: o, methods: c, events: u } = t.namespaces[a], l = Hs(o), f = r[a];
    (!Bn(Gh(a, f), l) || !Bn(f.methods, c) || !Bn(f.events, u)) && (i = !1);
  }), i) : !1;
}
function qo(t) {
  return Lt(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function i_(t) {
  if (Lt(t, !1) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const r = e[0] + ":" + e[1];
      return !!e[2] && qo(r);
    }
  }
  return !1;
}
function o_(t) {
  if (Lt(t, !1))
    try {
      return typeof new URL(t) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function a_(t) {
  var e;
  return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
}
function c_(t) {
  return t == null ? void 0 : t.topic;
}
function u_(t, e) {
  let r = null;
  return Lt(t == null ? void 0 : t.publicKey, !1) || (r = J("MISSING_OR_INVALID", `${e} controller public key should be a string`)), r;
}
function Ql(t) {
  let e = !0;
  return no(t) ? t.length && (e = t.every((r) => Lt(r, !1))) : e = !1, e;
}
function l_(t, e, r) {
  let n = null;
  return no(e) && e.length ? e.forEach((s) => {
    n || qo(s) || (n = _t("UNSUPPORTED_CHAINS", `${r}, chain ${s} should be a string and conform to "namespace:chainId" format`));
  }) : qo(t) || (n = _t("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), n;
}
function d_(t, e, r) {
  let n = null;
  return Object.entries(t).forEach(([s, i]) => {
    if (n)
      return;
    const a = l_(s, Gh(s, i), `${e} ${r}`);
    a && (n = a);
  }), n;
}
function h_(t, e) {
  let r = null;
  return no(t) ? t.forEach((n) => {
    r || i_(n) || (r = _t("UNSUPPORTED_ACCOUNTS", `${e}, account ${n} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = _t("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function f_(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const s = h_(n == null ? void 0 : n.accounts, `${e} namespace`);
    s && (r = s);
  }), r;
}
function p_(t, e) {
  let r = null;
  return Ql(t == null ? void 0 : t.methods) ? Ql(t == null ? void 0 : t.events) || (r = _t("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : r = _t("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), r;
}
function nf(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const s = p_(n, `${e}, namespace`);
    s && (r = s);
  }), r;
}
function g_(t, e, r) {
  let n = null;
  if (t && Vo(t)) {
    const s = nf(t, e);
    s && (n = s);
    const i = d_(t, e, r);
    i && (n = i);
  } else
    n = J("MISSING_OR_INVALID", `${e}, ${r} should be an object with data`);
  return n;
}
function Za(t, e) {
  let r = null;
  if (t && Vo(t)) {
    const n = nf(t, e);
    n && (r = n);
    const s = f_(t, e);
    s && (r = s);
  } else
    r = J("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return r;
}
function sf(t) {
  return Lt(t.protocol, !0);
}
function y_(t, e) {
  let r = !1;
  return e && !t ? r = !0 : t && no(t) && t.length && t.forEach((n) => {
    r = sf(n);
  }), r;
}
function m_(t) {
  return typeof t == "number";
}
function ur(t) {
  return typeof t < "u" && typeof t !== null;
}
function v_(t) {
  return !(!t || typeof t != "object" || !t.code || !_u(t.code, !1) || !t.message || !Lt(t.message, !1));
}
function b_(t) {
  return !(tr(t) || !Lt(t.method, !1));
}
function __(t) {
  return !(tr(t) || tr(t.result) && tr(t.error) || !_u(t.id, !1) || !Lt(t.jsonrpc, !1));
}
function w_(t) {
  return !(tr(t) || !Lt(t.name, !1));
}
function ed(t, e) {
  return !(!qo(e) || !Q0(t).includes(e));
}
function E_(t, e, r) {
  return Lt(r, !1) ? e_(t, e).includes(r) : !1;
}
function S_(t, e, r) {
  return Lt(r, !1) ? t_(t, e).includes(r) : !1;
}
function td(t, e, r) {
  let n = null;
  const s = x_(t), i = I_(e), a = Object.keys(s), o = Object.keys(i), c = rd(Object.keys(t)), u = rd(Object.keys(e)), l = c.filter((f) => !u.includes(f));
  return l.length && (n = J("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${l.toString()}
      Received: ${Object.keys(e).toString()}`)), Bn(a, o) || (n = J("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${a.toString()}
      Approved: ${o.toString()}`)), Object.keys(e).forEach((f) => {
    if (!f.includes(":") || n)
      return;
    const p = Hs(e[f].accounts);
    p.includes(f) || (n = J("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${f}
        Required: ${f}
        Approved: ${p.toString()}`));
  }), a.forEach((f) => {
    n || (Bn(s[f].methods, i[f].methods) ? Bn(s[f].events, i[f].events) || (n = J("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${f}`)) : n = J("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${f}`));
  }), n;
}
function x_(t) {
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
function I_(t) {
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
function O_(t, e) {
  return _u(t, !1) && t <= e.max && t >= e.min;
}
function nd() {
  const t = ro();
  return new Promise((e) => {
    switch (t) {
      case yr.browser:
        e(T_());
        break;
      case yr.reactNative:
        e(C_());
        break;
      case yr.node:
        e(P_());
        break;
      default:
        e(!0);
    }
  });
}
function T_() {
  return Bs() && (navigator == null ? void 0 : navigator.onLine);
}
async function C_() {
  if (Ws() && typeof global < "u" && global != null && global.NetInfo) {
    const t = await (global == null ? void 0 : global.NetInfo.fetch());
    return t == null ? void 0 : t.isConnected;
  }
  return !0;
}
function P_() {
  return !0;
}
function k_(t) {
  switch (ro()) {
    case yr.browser:
      N_(t);
      break;
    case yr.reactNative:
      R_(t);
      break;
  }
}
function N_(t) {
  !Ws() && Bs() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function R_(t) {
  Ws() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
}
const Fa = {};
let _o = class {
  static get(t) {
    return Fa[t];
  }
  static set(t, e) {
    Fa[t] = e;
  }
  static delete(t) {
    delete Fa[t];
  }
};
const A_ = "PARSE_ERROR", j_ = "INVALID_REQUEST", L_ = "METHOD_NOT_FOUND", M_ = "INVALID_PARAMS", of = "INTERNAL_ERROR", wu = "SERVER_ERROR", D_ = [-32700, -32600, -32601, -32602, -32603], li = {
  [A_]: { code: -32700, message: "Parse error" },
  [j_]: { code: -32600, message: "Invalid Request" },
  [L_]: { code: -32601, message: "Method not found" },
  [M_]: { code: -32602, message: "Invalid params" },
  [of]: { code: -32603, message: "Internal error" },
  [wu]: { code: -32e3, message: "Server error" }
}, af = wu;
function U_(t) {
  return D_.includes(t);
}
function sd(t) {
  return Object.keys(li).includes(t) ? li[t] : li[af];
}
function z_(t) {
  return Object.values(li).find((r) => r.code === t) || li[af];
}
function $_(t, e, r) {
  return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${e}`) : t;
}
var cf = {}, tn = {}, id;
function V_() {
  if (id)
    return tn;
  id = 1, Object.defineProperty(tn, "__esModule", { value: !0 }), tn.isBrowserCryptoAvailable = tn.getSubtleCrypto = tn.getBrowerCrypto = void 0;
  function t() {
    return (On == null ? void 0 : On.crypto) || (On == null ? void 0 : On.msCrypto) || {};
  }
  tn.getBrowerCrypto = t;
  function e() {
    const n = t();
    return n.subtle || n.webkitSubtle;
  }
  tn.getSubtleCrypto = e;
  function r() {
    return !!t() && !!e();
  }
  return tn.isBrowserCryptoAvailable = r, tn;
}
var rn = {}, od;
function q_() {
  if (od)
    return rn;
  od = 1, Object.defineProperty(rn, "__esModule", { value: !0 }), rn.isBrowser = rn.isNode = rn.isReactNative = void 0;
  function t() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  rn.isReactNative = t;
  function e() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  rn.isNode = e;
  function r() {
    return !t() && !e();
  }
  return rn.isBrowser = r, rn;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = Qr;
  e.__exportStar(V_(), t), e.__exportStar(q_(), t);
})(cf);
function Eu(t = 3) {
  const e = Date.now() * Math.pow(10, t), r = Math.floor(Math.random() * Math.pow(10, t));
  return e + r;
}
function uf(t = 6) {
  return BigInt(Eu(t));
}
function Ts(t, e, r) {
  return {
    id: r || Eu(),
    jsonrpc: "2.0",
    method: t,
    params: e
  };
}
function Su(t, e) {
  return {
    id: t,
    jsonrpc: "2.0",
    result: e
  };
}
function xu(t, e, r) {
  return {
    id: t,
    jsonrpc: "2.0",
    error: Z_(e, r)
  };
}
function Z_(t, e) {
  return typeof t > "u" ? sd(of) : (typeof t == "string" && (t = Object.assign(Object.assign({}, sd(wu)), { message: t })), typeof e < "u" && (t.data = e), U_(t.code) && (t = z_(t.code)), t);
}
class F_ {
}
class K_ extends F_ {
  constructor() {
    super();
  }
}
class W_ extends K_ {
  constructor(e) {
    super();
  }
}
const B_ = "^wss?:";
function H_(t) {
  const e = t.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length))
    return e[0];
}
function G_(t, e) {
  const r = H_(t);
  return typeof r > "u" ? !1 : new RegExp(e).test(r);
}
function ad(t) {
  return G_(t, B_);
}
function Y_(t) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(t);
}
function lf(t) {
  return typeof t == "object" && "id" in t && "jsonrpc" in t && t.jsonrpc === "2.0";
}
function Iu(t) {
  return lf(t) && "method" in t;
}
function Ia(t) {
  return lf(t) && (an(t) || Tr(t));
}
function an(t) {
  return "result" in t;
}
function Tr(t) {
  return "error" in t;
}
class J_ extends W_ {
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
    return this.requestStrict(Ts(e.method, e.params || [], e.id || uf().toString()), r);
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
    this.events.emit("payload", e), Ia(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
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
const X_ = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : (() => {
  try {
    return (() => {try { return require("ws") } catch (e) { } })();
  } catch {
  }
})(), Q_ = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", cd = (t) => t.split("?")[0], ud = 10, ew = X_();
class tw {
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
      const s = new URLSearchParams(e).get("origin"), i = cf.isReactNative() ? { headers: { origin: s } } : { rejectUnauthorized: !Y_(e) }, a = new ew(e, [], i);
      Q_() ? a.onerror = (o) => {
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
    const r = typeof e.data == "string" ? va(e.data) : e.data;
    this.events.emit("payload", r);
  }
  onError(e, r) {
    const n = this.parseError(r), s = n.message || n.toString(), i = xu(e, s);
    this.events.emit("payload", i);
  }
  parseError(e, r = this.url) {
    return $_(e, cd(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > ud && this.events.setMaxListeners(ud);
  }
  emitError(e) {
    const r = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${cd(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var Zo = { exports: {} };
Zo.exports;
(function(t, e) {
  var r = 200, n = "__lodash_hash_undefined__", s = 1, i = 2, a = 9007199254740991, o = "[object Arguments]", c = "[object Array]", u = "[object AsyncFunction]", l = "[object Boolean]", f = "[object Date]", p = "[object Error]", m = "[object Function]", _ = "[object GeneratorFunction]", E = "[object Map]", T = "[object Number]", M = "[object Null]", v = "[object Object]", O = "[object Promise]", w = "[object Proxy]", x = "[object RegExp]", y = "[object Set]", d = "[object String]", g = "[object Symbol]", k = "[object Undefined]", N = "[object WeakMap]", D = "[object ArrayBuffer]", G = "[object DataView]", Y = "[object Float32Array]", C = "[object Float64Array]", A = "[object Int8Array]", Q = "[object Int16Array]", Z = "[object Int32Array]", $ = "[object Uint8Array]", q = "[object Uint8ClampedArray]", z = "[object Uint16Array]", F = "[object Uint32Array]", ye = /[\\^$.*+?()[\]{}|]/g, K = /^\[object .+?Constructor\]$/, de = /^(?:0|[1-9]\d*)$/, ne = {};
  ne[Y] = ne[C] = ne[A] = ne[Q] = ne[Z] = ne[$] = ne[q] = ne[z] = ne[F] = !0, ne[o] = ne[c] = ne[D] = ne[l] = ne[G] = ne[f] = ne[p] = ne[m] = ne[E] = ne[T] = ne[v] = ne[x] = ne[y] = ne[d] = ne[N] = !1;
  var le = typeof On == "object" && On && On.Object === Object && On, L = typeof self == "object" && self && self.Object === Object && self, j = le || L || Function("return this")(), P = e && !e.nodeType && e, h = P && !0 && t && !t.nodeType && t, I = h && h.exports === P, H = I && le.process, ee = function() {
    try {
      return H && H.binding && H.binding("util");
    } catch {
    }
  }(), je = ee && ee.isTypedArray;
  function Le(b, R) {
    for (var V = -1, oe = b == null ? 0 : b.length, ot = 0, Pe = []; ++V < oe; ) {
      var bt = b[V];
      R(bt, V, b) && (Pe[ot++] = bt);
    }
    return Pe;
  }
  function Oe(b, R) {
    for (var V = -1, oe = R.length, ot = b.length; ++V < oe; )
      b[ot + V] = R[V];
    return b;
  }
  function Ze(b, R) {
    for (var V = -1, oe = b == null ? 0 : b.length; ++V < oe; )
      if (R(b[V], V, b))
        return !0;
    return !1;
  }
  function at(b, R) {
    for (var V = -1, oe = Array(b); ++V < b; )
      oe[V] = R(V);
    return oe;
  }
  function tt(b) {
    return function(R) {
      return b(R);
    };
  }
  function Ve(b, R) {
    return b.has(R);
  }
  function Ue(b, R) {
    return b == null ? void 0 : b[R];
  }
  function Te(b) {
    var R = -1, V = Array(b.size);
    return b.forEach(function(oe, ot) {
      V[++R] = [ot, oe];
    }), V;
  }
  function ke(b, R) {
    return function(V) {
      return b(R(V));
    };
  }
  function Ce(b) {
    var R = -1, V = Array(b.size);
    return b.forEach(function(oe) {
      V[++R] = oe;
    }), V;
  }
  var we = Array.prototype, be = Function.prototype, he = Object.prototype, Ne = j["__core-js_shared__"], Me = be.toString, me = he.hasOwnProperty, ze = function() {
    var b = /[^.]+$/.exec(Ne && Ne.keys && Ne.keys.IE_PROTO || "");
    return b ? "Symbol(src)_1." + b : "";
  }(), Fe = he.toString, He = RegExp(
    "^" + Me.call(me).replace(ye, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Ge = I ? j.Buffer : void 0, We = j.Symbol, hr = j.Uint8Array, vr = he.propertyIsEnumerable, Vr = we.splice, Dt = We ? We.toStringTag : void 0, qr = Object.getOwnPropertySymbols, br = Ge ? Ge.isBuffer : void 0, yn = ke(Object.keys, Object), ct = ls(j, "DataView"), st = ls(j, "Map"), gt = ls(j, "Promise"), lt = ls(j, "Set"), yt = ls(j, "WeakMap"), it = ls(Object, "create"), Et = Un(ct), Ot = Un(st), Tt = Un(gt), St = Un(lt), Ct = Un(yt), xt = We ? We.prototype : void 0, mt = xt ? xt.valueOf : void 0;
  function rt(b) {
    var R = -1, V = b == null ? 0 : b.length;
    for (this.clear(); ++R < V; ) {
      var oe = b[R];
      this.set(oe[0], oe[1]);
    }
  }
  function S() {
    this.__data__ = it ? it(null) : {}, this.size = 0;
  }
  function U(b) {
    var R = this.has(b) && delete this.__data__[b];
    return this.size -= R ? 1 : 0, R;
  }
  function X(b) {
    var R = this.__data__;
    if (it) {
      var V = R[b];
      return V === n ? void 0 : V;
    }
    return me.call(R, b) ? R[b] : void 0;
  }
  function fe(b) {
    var R = this.__data__;
    return it ? R[b] !== void 0 : me.call(R, b);
  }
  function Be(b, R) {
    var V = this.__data__;
    return this.size += this.has(b) ? 0 : 1, V[b] = it && R === void 0 ? n : R, this;
  }
  rt.prototype.clear = S, rt.prototype.delete = U, rt.prototype.get = X, rt.prototype.has = fe, rt.prototype.set = Be;
  function $e(b) {
    var R = -1, V = b == null ? 0 : b.length;
    for (this.clear(); ++R < V; ) {
      var oe = b[R];
      this.set(oe[0], oe[1]);
    }
  }
  function qe() {
    this.__data__ = [], this.size = 0;
  }
  function De(b) {
    var R = this.__data__, V = uo(R, b);
    if (V < 0)
      return !1;
    var oe = R.length - 1;
    return V == oe ? R.pop() : Vr.call(R, V, 1), --this.size, !0;
  }
  function Ut(b) {
    var R = this.__data__, V = uo(R, b);
    return V < 0 ? void 0 : R[V][1];
  }
  function dt(b) {
    return uo(this.__data__, b) > -1;
  }
  function vt(b, R) {
    var V = this.__data__, oe = uo(V, b);
    return oe < 0 ? (++this.size, V.push([b, R])) : V[oe][1] = R, this;
  }
  $e.prototype.clear = qe, $e.prototype.delete = De, $e.prototype.get = Ut, $e.prototype.has = dt, $e.prototype.set = vt;
  function Pt(b) {
    var R = -1, V = b == null ? 0 : b.length;
    for (this.clear(); ++R < V; ) {
      var oe = b[R];
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
  function ao(b) {
    var R = lo(this, b).delete(b);
    return this.size -= R ? 1 : 0, R;
  }
  function xr(b) {
    return lo(this, b).get(b);
  }
  function Op(b) {
    return lo(this, b).has(b);
  }
  function Tp(b, R) {
    var V = lo(this, b), oe = V.size;
    return V.set(b, R), this.size += V.size == oe ? 0 : 1, this;
  }
  Pt.prototype.clear = mn, Pt.prototype.delete = ao, Pt.prototype.get = xr, Pt.prototype.has = Op, Pt.prototype.set = Tp;
  function co(b) {
    var R = -1, V = b == null ? 0 : b.length;
    for (this.__data__ = new Pt(); ++R < V; )
      this.add(b[R]);
  }
  function Cp(b) {
    return this.__data__.set(b, n), this;
  }
  function Pp(b) {
    return this.__data__.has(b);
  }
  co.prototype.add = co.prototype.push = Cp, co.prototype.has = Pp;
  function vn(b) {
    var R = this.__data__ = new $e(b);
    this.size = R.size;
  }
  function kp() {
    this.__data__ = new $e(), this.size = 0;
  }
  function Np(b) {
    var R = this.__data__, V = R.delete(b);
    return this.size = R.size, V;
  }
  function Rp(b) {
    return this.__data__.get(b);
  }
  function Ap(b) {
    return this.__data__.has(b);
  }
  function jp(b, R) {
    var V = this.__data__;
    if (V instanceof $e) {
      var oe = V.__data__;
      if (!st || oe.length < r - 1)
        return oe.push([b, R]), this.size = ++V.size, this;
      V = this.__data__ = new Pt(oe);
    }
    return V.set(b, R), this.size = V.size, this;
  }
  vn.prototype.clear = kp, vn.prototype.delete = Np, vn.prototype.get = Rp, vn.prototype.has = Ap, vn.prototype.set = jp;
  function Lp(b, R) {
    var V = ho(b), oe = !V && Yp(b), ot = !V && !oe && La(b), Pe = !V && !oe && !ot && Vu(b), bt = V || oe || ot || Pe, Nt = bt ? at(b.length, String) : [], zt = Nt.length;
    for (var ht in b)
      (R || me.call(b, ht)) && !(bt && // Safari 9 has enumerable `arguments.length` in strict mode.
      (ht == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      ot && (ht == "offset" || ht == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      Pe && (ht == "buffer" || ht == "byteLength" || ht == "byteOffset") || // Skip index properties.
      Kp(ht, zt))) && Nt.push(ht);
    return Nt;
  }
  function uo(b, R) {
    for (var V = b.length; V--; )
      if (Du(b[V][0], R))
        return V;
    return -1;
  }
  function Mp(b, R, V) {
    var oe = R(b);
    return ho(b) ? oe : Oe(oe, V(b));
  }
  function Ys(b) {
    return b == null ? b === void 0 ? k : M : Dt && Dt in Object(b) ? Zp(b) : Gp(b);
  }
  function Au(b) {
    return Js(b) && Ys(b) == o;
  }
  function ju(b, R, V, oe, ot) {
    return b === R ? !0 : b == null || R == null || !Js(b) && !Js(R) ? b !== b && R !== R : Dp(b, R, V, oe, ju, ot);
  }
  function Dp(b, R, V, oe, ot, Pe) {
    var bt = ho(b), Nt = ho(R), zt = bt ? c : bn(b), ht = Nt ? c : bn(R);
    zt = zt == o ? v : zt, ht = ht == o ? v : ht;
    var fr = zt == v, Ir = ht == v, qt = zt == ht;
    if (qt && La(b)) {
      if (!La(R))
        return !1;
      bt = !0, fr = !1;
    }
    if (qt && !fr)
      return Pe || (Pe = new vn()), bt || Vu(b) ? Lu(b, R, V, oe, ot, Pe) : Vp(b, R, zt, V, oe, ot, Pe);
    if (!(V & s)) {
      var _r = fr && me.call(b, "__wrapped__"), wr = Ir && me.call(R, "__wrapped__");
      if (_r || wr) {
        var _n = _r ? b.value() : b, en = wr ? R.value() : R;
        return Pe || (Pe = new vn()), ot(_n, en, V, oe, Pe);
      }
    }
    return qt ? (Pe || (Pe = new vn()), qp(b, R, V, oe, ot, Pe)) : !1;
  }
  function Up(b) {
    if (!$u(b) || Bp(b))
      return !1;
    var R = Uu(b) ? He : K;
    return R.test(Un(b));
  }
  function zp(b) {
    return Js(b) && zu(b.length) && !!ne[Ys(b)];
  }
  function $p(b) {
    if (!Hp(b))
      return yn(b);
    var R = [];
    for (var V in Object(b))
      me.call(b, V) && V != "constructor" && R.push(V);
    return R;
  }
  function Lu(b, R, V, oe, ot, Pe) {
    var bt = V & s, Nt = b.length, zt = R.length;
    if (Nt != zt && !(bt && zt > Nt))
      return !1;
    var ht = Pe.get(b);
    if (ht && Pe.get(R))
      return ht == R;
    var fr = -1, Ir = !0, qt = V & i ? new co() : void 0;
    for (Pe.set(b, R), Pe.set(R, b); ++fr < Nt; ) {
      var _r = b[fr], wr = R[fr];
      if (oe)
        var _n = bt ? oe(wr, _r, fr, R, b, Pe) : oe(_r, wr, fr, b, R, Pe);
      if (_n !== void 0) {
        if (_n)
          continue;
        Ir = !1;
        break;
      }
      if (qt) {
        if (!Ze(R, function(en, zn) {
          if (!Ve(qt, zn) && (_r === en || ot(_r, en, V, oe, Pe)))
            return qt.push(zn);
        })) {
          Ir = !1;
          break;
        }
      } else if (!(_r === wr || ot(_r, wr, V, oe, Pe))) {
        Ir = !1;
        break;
      }
    }
    return Pe.delete(b), Pe.delete(R), Ir;
  }
  function Vp(b, R, V, oe, ot, Pe, bt) {
    switch (V) {
      case G:
        if (b.byteLength != R.byteLength || b.byteOffset != R.byteOffset)
          return !1;
        b = b.buffer, R = R.buffer;
      case D:
        return !(b.byteLength != R.byteLength || !Pe(new hr(b), new hr(R)));
      case l:
      case f:
      case T:
        return Du(+b, +R);
      case p:
        return b.name == R.name && b.message == R.message;
      case x:
      case d:
        return b == R + "";
      case E:
        var Nt = Te;
      case y:
        var zt = oe & s;
        if (Nt || (Nt = Ce), b.size != R.size && !zt)
          return !1;
        var ht = bt.get(b);
        if (ht)
          return ht == R;
        oe |= i, bt.set(b, R);
        var fr = Lu(Nt(b), Nt(R), oe, ot, Pe, bt);
        return bt.delete(b), fr;
      case g:
        if (mt)
          return mt.call(b) == mt.call(R);
    }
    return !1;
  }
  function qp(b, R, V, oe, ot, Pe) {
    var bt = V & s, Nt = Mu(b), zt = Nt.length, ht = Mu(R), fr = ht.length;
    if (zt != fr && !bt)
      return !1;
    for (var Ir = zt; Ir--; ) {
      var qt = Nt[Ir];
      if (!(bt ? qt in R : me.call(R, qt)))
        return !1;
    }
    var _r = Pe.get(b);
    if (_r && Pe.get(R))
      return _r == R;
    var wr = !0;
    Pe.set(b, R), Pe.set(R, b);
    for (var _n = bt; ++Ir < zt; ) {
      qt = Nt[Ir];
      var en = b[qt], zn = R[qt];
      if (oe)
        var qu = bt ? oe(zn, en, qt, R, b, Pe) : oe(en, zn, qt, b, R, Pe);
      if (!(qu === void 0 ? en === zn || ot(en, zn, V, oe, Pe) : qu)) {
        wr = !1;
        break;
      }
      _n || (_n = qt == "constructor");
    }
    if (wr && !_n) {
      var fo = b.constructor, po = R.constructor;
      fo != po && "constructor" in b && "constructor" in R && !(typeof fo == "function" && fo instanceof fo && typeof po == "function" && po instanceof po) && (wr = !1);
    }
    return Pe.delete(b), Pe.delete(R), wr;
  }
  function Mu(b) {
    return Mp(b, Qp, Fp);
  }
  function lo(b, R) {
    var V = b.__data__;
    return Wp(R) ? V[typeof R == "string" ? "string" : "hash"] : V.map;
  }
  function ls(b, R) {
    var V = Ue(b, R);
    return Up(V) ? V : void 0;
  }
  function Zp(b) {
    var R = me.call(b, Dt), V = b[Dt];
    try {
      b[Dt] = void 0;
      var oe = !0;
    } catch {
    }
    var ot = Fe.call(b);
    return oe && (R ? b[Dt] = V : delete b[Dt]), ot;
  }
  var Fp = qr ? function(b) {
    return b == null ? [] : (b = Object(b), Le(qr(b), function(R) {
      return vr.call(b, R);
    }));
  } : eg, bn = Ys;
  (ct && bn(new ct(new ArrayBuffer(1))) != G || st && bn(new st()) != E || gt && bn(gt.resolve()) != O || lt && bn(new lt()) != y || yt && bn(new yt()) != N) && (bn = function(b) {
    var R = Ys(b), V = R == v ? b.constructor : void 0, oe = V ? Un(V) : "";
    if (oe)
      switch (oe) {
        case Et:
          return G;
        case Ot:
          return E;
        case Tt:
          return O;
        case St:
          return y;
        case Ct:
          return N;
      }
    return R;
  });
  function Kp(b, R) {
    return R = R ?? a, !!R && (typeof b == "number" || de.test(b)) && b > -1 && b % 1 == 0 && b < R;
  }
  function Wp(b) {
    var R = typeof b;
    return R == "string" || R == "number" || R == "symbol" || R == "boolean" ? b !== "__proto__" : b === null;
  }
  function Bp(b) {
    return !!ze && ze in b;
  }
  function Hp(b) {
    var R = b && b.constructor, V = typeof R == "function" && R.prototype || he;
    return b === V;
  }
  function Gp(b) {
    return Fe.call(b);
  }
  function Un(b) {
    if (b != null) {
      try {
        return Me.call(b);
      } catch {
      }
      try {
        return b + "";
      } catch {
      }
    }
    return "";
  }
  function Du(b, R) {
    return b === R || b !== b && R !== R;
  }
  var Yp = Au(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Au : function(b) {
    return Js(b) && me.call(b, "callee") && !vr.call(b, "callee");
  }, ho = Array.isArray;
  function Jp(b) {
    return b != null && zu(b.length) && !Uu(b);
  }
  var La = br || tg;
  function Xp(b, R) {
    return ju(b, R);
  }
  function Uu(b) {
    if (!$u(b))
      return !1;
    var R = Ys(b);
    return R == m || R == _ || R == u || R == w;
  }
  function zu(b) {
    return typeof b == "number" && b > -1 && b % 1 == 0 && b <= a;
  }
  function $u(b) {
    var R = typeof b;
    return b != null && (R == "object" || R == "function");
  }
  function Js(b) {
    return b != null && typeof b == "object";
  }
  var Vu = je ? tt(je) : zp;
  function Qp(b) {
    return Jp(b) ? Lp(b) : $p(b);
  }
  function eg() {
    return [];
  }
  function tg() {
    return !1;
  }
  t.exports = Xp;
})(Zo, Zo.exports);
var rw = Zo.exports;
const nw = /* @__PURE__ */ ga(rw);
function sw(t, e) {
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
const iw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sw
}, Symbol.toStringTag, { value: "Module" })), ld = /* @__PURE__ */ ya(iw);
var ow = fetch || (self.fetch = ld.default || ld);
const aw = /* @__PURE__ */ ga(ow);
function cw(t, e) {
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
  function f(_) {
    if (_ instanceof Uint8Array || (ArrayBuffer.isView(_) ? _ = new Uint8Array(_.buffer, _.byteOffset, _.byteLength) : Array.isArray(_) && (_ = Uint8Array.from(_))), !(_ instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (_.length === 0)
      return "";
    for (var E = 0, T = 0, M = 0, v = _.length; M !== v && _[M] === 0; )
      M++, E++;
    for (var O = (v - M) * l + 1 >>> 0, w = new Uint8Array(O); M !== v; ) {
      for (var x = _[M], y = 0, d = O - 1; (x !== 0 || y < T) && d !== -1; d--, y++)
        x += 256 * w[d] >>> 0, w[d] = x % o >>> 0, x = x / o >>> 0;
      if (x !== 0)
        throw new Error("Non-zero carry");
      T = y, M++;
    }
    for (var g = O - T; g !== O && w[g] === 0; )
      g++;
    for (var k = c.repeat(E); g < O; ++g)
      k += t.charAt(w[g]);
    return k;
  }
  function p(_) {
    if (typeof _ != "string")
      throw new TypeError("Expected String");
    if (_.length === 0)
      return new Uint8Array();
    var E = 0;
    if (_[E] !== " ") {
      for (var T = 0, M = 0; _[E] === c; )
        T++, E++;
      for (var v = (_.length - E) * u + 1 >>> 0, O = new Uint8Array(v); _[E]; ) {
        var w = r[_.charCodeAt(E)];
        if (w === 255)
          return;
        for (var x = 0, y = v - 1; (w !== 0 || x < M) && y !== -1; y--, x++)
          w += o * O[y] >>> 0, O[y] = w % 256 >>> 0, w = w / 256 >>> 0;
        if (w !== 0)
          throw new Error("Non-zero carry");
        M = x, E++;
      }
      if (_[E] !== " ") {
        for (var d = v - M; d !== v && O[d] === 0; )
          d++;
        for (var g = new Uint8Array(T + (v - d)), k = T; d !== v; )
          g[k++] = O[d++];
        return g;
      }
    }
  }
  function m(_) {
    var E = p(_);
    if (E)
      return E;
    throw new Error(`Non-${e} character`);
  }
  return { encode: f, decodeUnsafe: p, decode: m };
}
var uw = cw, lw = uw;
const df = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, dw = (t) => new TextEncoder().encode(t), hw = (t) => new TextDecoder().decode(t);
class fw {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class pw {
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
    return hf(this, e);
  }
}
class gw {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return hf(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const hf = (t, e) => new gw({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
class yw {
  constructor(e, r, n, s) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = s, this.encoder = new fw(e, r, n), this.decoder = new pw(e, r, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Oa = ({ name: t, prefix: e, encode: r, decode: n }) => new yw(t, e, r, n), so = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: s } = lw(r, e);
  return Oa({ prefix: t, name: e, encode: n, decode: (i) => df(s(i)) });
}, mw = (t, e, r, n) => {
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
}, vw = (t, e, r) => {
  const n = e[e.length - 1] === "=", s = (1 << r) - 1;
  let i = "", a = 0, o = 0;
  for (let c = 0; c < t.length; ++c)
    for (o = o << 8 | t[c], a += 8; a > r; )
      a -= r, i += e[s & o >> a];
  if (a && (i += e[s & o << r - a]), n)
    for (; i.length * r & 7; )
      i += "=";
  return i;
}, Vt = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => Oa({ prefix: e, name: t, encode(s) {
  return vw(s, n, r);
}, decode(s) {
  return mw(s, n, r, t);
} }), bw = Oa({ prefix: "\0", name: "identity", encode: (t) => hw(t), decode: (t) => dw(t) });
var _w = Object.freeze({ __proto__: null, identity: bw });
const ww = Vt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var Ew = Object.freeze({ __proto__: null, base2: ww });
const Sw = Vt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var xw = Object.freeze({ __proto__: null, base8: Sw });
const Iw = so({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Ow = Object.freeze({ __proto__: null, base10: Iw });
const Tw = Vt({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), Cw = Vt({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Pw = Object.freeze({ __proto__: null, base16: Tw, base16upper: Cw });
const kw = Vt({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), Nw = Vt({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), Rw = Vt({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), Aw = Vt({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), jw = Vt({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), Lw = Vt({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), Mw = Vt({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Dw = Vt({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), Uw = Vt({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var zw = Object.freeze({ __proto__: null, base32: kw, base32upper: Nw, base32pad: Rw, base32padupper: Aw, base32hex: jw, base32hexupper: Lw, base32hexpad: Mw, base32hexpadupper: Dw, base32z: Uw });
const $w = so({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), Vw = so({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var qw = Object.freeze({ __proto__: null, base36: $w, base36upper: Vw });
const Zw = so({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), Fw = so({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Kw = Object.freeze({ __proto__: null, base58btc: Zw, base58flickr: Fw });
const Ww = Vt({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), Bw = Vt({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), Hw = Vt({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), Gw = Vt({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Yw = Object.freeze({ __proto__: null, base64: Ww, base64pad: Bw, base64url: Hw, base64urlpad: Gw });
const ff = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Jw = ff.reduce((t, e, r) => (t[r] = e, t), []), Xw = ff.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function Qw(t) {
  return t.reduce((e, r) => (e += Jw[r], e), "");
}
function e1(t) {
  const e = [];
  for (const r of t) {
    const n = Xw[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const t1 = Oa({ prefix: "🚀", name: "base256emoji", encode: Qw, decode: e1 });
var r1 = Object.freeze({ __proto__: null, base256emoji: t1 }), n1 = pf, dd = 128, s1 = 127, i1 = ~s1, o1 = Math.pow(2, 31);
function pf(t, e, r) {
  e = e || [], r = r || 0;
  for (var n = r; t >= o1; )
    e[r++] = t & 255 | dd, t /= 128;
  for (; t & i1; )
    e[r++] = t & 255 | dd, t >>>= 7;
  return e[r] = t | 0, pf.bytes = r - n + 1, e;
}
var a1 = wc, c1 = 128, hd = 127;
function wc(t, n) {
  var r = 0, n = n || 0, s = 0, i = n, a, o = t.length;
  do {
    if (i >= o)
      throw wc.bytes = 0, new RangeError("Could not decode varint");
    a = t[i++], r += s < 28 ? (a & hd) << s : (a & hd) * Math.pow(2, s), s += 7;
  } while (a >= c1);
  return wc.bytes = i - n, r;
}
var u1 = Math.pow(2, 7), l1 = Math.pow(2, 14), d1 = Math.pow(2, 21), h1 = Math.pow(2, 28), f1 = Math.pow(2, 35), p1 = Math.pow(2, 42), g1 = Math.pow(2, 49), y1 = Math.pow(2, 56), m1 = Math.pow(2, 63), v1 = function(t) {
  return t < u1 ? 1 : t < l1 ? 2 : t < d1 ? 3 : t < h1 ? 4 : t < f1 ? 5 : t < p1 ? 6 : t < g1 ? 7 : t < y1 ? 8 : t < m1 ? 9 : 10;
}, b1 = { encode: n1, decode: a1, encodingLength: v1 }, gf = b1;
const fd = (t, e, r = 0) => (gf.encode(t, e, r), e), pd = (t) => gf.encodingLength(t), Ec = (t, e) => {
  const r = e.byteLength, n = pd(t), s = n + pd(r), i = new Uint8Array(s + r);
  return fd(t, i, 0), fd(r, i, n), i.set(e, s), new _1(t, r, e, i);
};
class _1 {
  constructor(e, r, n, s) {
    this.code = e, this.size = r, this.digest = n, this.bytes = s;
  }
}
const yf = ({ name: t, code: e, encode: r }) => new w1(t, e, r);
class w1 {
  constructor(e, r, n) {
    this.name = e, this.code = r, this.encode = n;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const r = this.encode(e);
      return r instanceof Uint8Array ? Ec(this.code, r) : r.then((n) => Ec(this.code, n));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const mf = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), E1 = yf({ name: "sha2-256", code: 18, encode: mf("SHA-256") }), S1 = yf({ name: "sha2-512", code: 19, encode: mf("SHA-512") });
var x1 = Object.freeze({ __proto__: null, sha256: E1, sha512: S1 });
const vf = 0, I1 = "identity", bf = df, O1 = (t) => Ec(vf, bf(t)), T1 = { code: vf, name: I1, encode: bf, digest: O1 };
var C1 = Object.freeze({ __proto__: null, identity: T1 });
new TextEncoder(), new TextDecoder();
const gd = { ..._w, ...Ew, ...xw, ...Ow, ...Pw, ...zw, ...qw, ...Kw, ...Yw, ...r1 };
({ ...x1, ...C1 });
function _f(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function P1(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? _f(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function wf(t, e, r, n) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: r }, decoder: { decode: n } };
}
const yd = wf("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), Ka = wf("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = P1(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), k1 = { utf8: yd, "utf-8": yd, hex: gd.base16, latin1: Ka, ascii: Ka, binary: Ka, ...gd };
function N1(t, e = "utf8") {
  const r = k1[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? _f(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
const Ef = "wc", R1 = 2, Ou = "core", Cn = `${Ef}@2:${Ou}:`, A1 = { name: Ou, logger: "error" }, j1 = { database: ":memory:" }, L1 = "crypto", md = "client_ed25519_seed", M1 = ae.ONE_DAY, D1 = "keychain", U1 = "0.3", z1 = "messages", $1 = "0.3", V1 = ae.SIX_HOURS, q1 = "publisher", Sf = "irn", Z1 = "error", xf = "wss://relay.walletconnect.com", vd = "wss://relay.walletconnect.org", F1 = "relayer", Ht = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, K1 = "_subscription", nn = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, W1 = ae.ONE_SECOND, B1 = "2.11.2", H1 = 1e4, G1 = "0.3", Y1 = "WALLETCONNECT_CLIENT_ID", Or = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, J1 = "subscription", X1 = "0.3", Q1 = ae.FIVE_SECONDS * 1e3, eE = "pairing", tE = "0.3", ni = { wc_pairingDelete: { req: { ttl: ae.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: ae.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: ae.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: ae.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: ae.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: ae.ONE_DAY, prompt: !1, tag: 0 } } }, ai = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, Wr = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, rE = "history", nE = "0.3", sE = "expirer", Er = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, iE = "0.3", Wa = "verify-api", Es = "https://verify.walletconnect.com", Sc = "https://verify.walletconnect.org", oE = [Es, Sc], aE = "echo", cE = "https://echo.walletconnect.com";
class uE {
  constructor(e, r) {
    this.core = e, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = D1, this.version = U1, this.initialized = !1, this.storagePrefix = Cn, this.init = async () => {
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
    await this.core.storage.setItem(this.storageKey, Qh(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? ef(e) : void 0;
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
class lE {
  constructor(e, r, n) {
    this.core = e, this.logger = r, this.name = L1, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (s) => (this.isInitialized(), this.keychain.has(s)), this.getClientId = async () => {
      this.isInitialized();
      const s = await this.getClientSeed(), i = Ll(s);
      return $h(i.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const s = m0();
      return this.setPrivateKey(s.publicKey, s.privateKey);
    }, this.signJWT = async (s) => {
      this.isInitialized();
      const i = await this.getClientSeed(), a = Ll(i), o = bc();
      return await Ib(o, s, M1, a);
    }, this.generateSharedKey = (s, i, a) => {
      this.isInitialized();
      const o = this.getPrivateKey(s), c = v0(o, i);
      return this.setSymKey(c, a);
    }, this.setSymKey = async (s, i) => {
      this.isInitialized();
      const a = i || b0(s);
      return await this.keychain.set(a, s), a;
    }, this.deleteKeyPair = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.deleteSymKey = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.encode = async (s, i, a) => {
      this.isInitialized();
      const o = Xh(a), c = Xi(i);
      if (Wl(o)) {
        const p = o.senderPublicKey, m = o.receiverPublicKey;
        s = await this.generateSharedKey(p, m);
      }
      const u = this.getSymKey(s), { type: l, senderPublicKey: f } = o;
      return w0({ type: l, symKey: u, message: c, senderPublicKey: f });
    }, this.decode = async (s, i, a) => {
      this.isInitialized();
      const o = x0(i, a);
      if (Wl(o)) {
        const c = o.receiverPublicKey, u = o.senderPublicKey;
        s = await this.generateSharedKey(c, u);
      }
      try {
        const c = this.getSymKey(s), u = E0({ symKey: c, encoded: i });
        return va(u);
      } catch (c) {
        this.logger.error(`Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`), this.logger.error(c);
      }
    }, this.getPayloadType = (s) => {
      const i = $o(s);
      return to(i.type);
    }, this.getPayloadSenderPublicKey = (s) => {
      const i = $o(s);
      return i.senderPublicKey ? sr(i.senderPublicKey, nr) : void 0;
    }, this.core = e, this.logger = Ke.generateChildLogger(r, this.name), this.keychain = n || new uE(this.core, this.logger);
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
    return N1(e, "base16");
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
class dE extends Pm {
  constructor(e, r) {
    super(e, r), this.logger = e, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = z1, this.version = $1, this.initialized = !1, this.storagePrefix = Cn, this.init = async () => {
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
    await this.core.storage.setItem(this.storageKey, Qh(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? ef(e) : void 0;
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
class hE extends km {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.events = new Ur.EventEmitter(), this.name = q1, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = ae.toMiliseconds(ae.TEN_SECONDS * 2), this.needsTransportRestart = !1, this.publish = async (n, s, i) => {
      var a;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: s, opts: i } });
      try {
        const o = (i == null ? void 0 : i.ttl) || V1, c = _c(i), u = (i == null ? void 0 : i.prompt) || !1, l = (i == null ? void 0 : i.tag) || 0, f = (i == null ? void 0 : i.id) || uf().toString(), p = { topic: n, message: s, opts: { ttl: o, relay: c, prompt: u, tag: l, id: f } }, m = setTimeout(() => this.queue.set(f, p), this.publishTimeout);
        try {
          await await yi(this.rpcPublish(n, s, o, c, u, l, f), this.publishTimeout, `Failed to publish payload, please try again. id:${f} tag:${l}`), this.removeRequestFromQueue(f), this.relayer.events.emit(Ht.publish, p);
        } catch (_) {
          if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, (a = i == null ? void 0 : i.internal) != null && a.throwOnFailedPublish)
            throw this.removeRequestFromQueue(f), _;
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
    return tr((c = p.params) == null ? void 0 : c.prompt) && ((u = p.params) == null || delete u.prompt), tr((l = p.params) == null ? void 0 : l.tag) && ((f = p.params) == null || delete f.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: p }), this.relayer.request(p);
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
        this.needsTransportRestart = !1, this.relayer.events.emit(Ht.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(Ht.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
}
class fE {
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
var pE = Object.defineProperty, gE = Object.defineProperties, yE = Object.getOwnPropertyDescriptors, bd = Object.getOwnPropertySymbols, mE = Object.prototype.hasOwnProperty, vE = Object.prototype.propertyIsEnumerable, _d = (t, e, r) => e in t ? pE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, si = (t, e) => {
  for (var r in e || (e = {}))
    mE.call(e, r) && _d(t, r, e[r]);
  if (bd)
    for (var r of bd(e))
      vE.call(e, r) && _d(t, r, e[r]);
  return t;
}, Ba = (t, e) => gE(t, yE(e));
class bE extends Am {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new fE(), this.events = new Ur.EventEmitter(), this.name = J1, this.version = X1, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Cn, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (n, s) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: s } });
      try {
        const i = _c(s), a = { topic: n, relay: i };
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
          !this.pending.has(n) && this.topics.includes(n) && (clearInterval(c), o.stop(s), i(!0)), o.elapsed(s) >= Q1 && (clearInterval(c), o.stop(s), a(new Error("Subscription resolution timeout")));
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
      const s = _c(n);
      await this.rpcUnsubscribe(e, r, s);
      const i = _t("USER_DISCONNECTED", `${this.name}, ${e}`);
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
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(Ht.connection_stalled);
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
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(Ht.connection_stalled);
    }
  }
  rpcUnsubscribe(e, r, n) {
    const s = { method: No(n.protocol).unsubscribe, params: { topic: e, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s }), this.relayer.request(s);
  }
  onSubscribe(e, r) {
    this.setSubscription(e, Ba(si({}, r), { id: e })), this.pending.delete(r.topic);
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
    this.subscriptions.delete(e), this.topicMap.delete(n.topic, e), this.events.emit(Or.deleted, Ba(si({}, n), { reason: r }));
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
    no(r) && this.onBatchSubscribe(r.map((n, s) => Ba(si({}, e[s]), { id: n })));
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
    }), this.relayer.on(Ht.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(Ht.disconnect, () => {
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
var _E = Object.defineProperty, wd = Object.getOwnPropertySymbols, wE = Object.prototype.hasOwnProperty, EE = Object.prototype.propertyIsEnumerable, Ed = (t, e, r) => e in t ? _E(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, SE = (t, e) => {
  for (var r in e || (e = {}))
    wE.call(e, r) && Ed(t, r, e[r]);
  if (wd)
    for (var r of wd(e))
      EE.call(e, r) && Ed(t, r, e[r]);
  return t;
};
class xE extends Nm {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new Ur.EventEmitter(), this.name = F1, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.requestsInFlight = /* @__PURE__ */ new Map(), this.request = async (r) => {
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
      this.events.emit(Ht.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (r) => {
      this.logger.error(r), this.events.emit(Ht.error, r), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
    }, this.registerProviderListeners = () => {
      this.provider.on(nn.payload, this.onPayloadHandler), this.provider.on(nn.connect, this.onConnectHandler), this.provider.on(nn.disconnect, this.onDisconnectHandler), this.provider.on(nn.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? Ke.generateChildLogger(e.logger, this.name) : Ke.pino(Ke.getDefaultLoggerOptions({ level: e.logger || Z1 })), this.messages = new dE(this.logger, e.core), this.subscriber = new bE(this, this.logger), this.publisher = new hE(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || xf, this.projectId = e.projectId, this.bundleId = k0(), this.provider = {};
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
    }, H1);
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
        this.provider.events.emit(nn.disconnect);
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
    this.provider = new J_(new tw(M0({ sdkVersion: B1, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0, bundleId: this.bundleId }))), this.registerProviderListeners();
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
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), Iu(e)) {
      if (!e.method.endsWith(K1))
        return;
      const r = e.params, { topic: n, message: s, publishedAt: i } = r.data, a = { topic: n, message: s, publishedAt: i };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(SE({ type: "event", event: r.id }, a)), this.events.emit(r.id, a), await this.acknowledgePayload(e), await this.onMessageEvent(a);
    } else
      Ia(e) && this.events.emit(Ht.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(Ht.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const r = Su(e.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(nn.payload, this.onPayloadHandler), this.provider.off(nn.connect, this.onConnectHandler), this.provider.off(nn.disconnect, this.onDisconnectHandler), this.provider.off(nn.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(Ht.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let e = await nd();
    k_(async (r) => {
      this.initialized && e !== r && (e = r, r ? await this.restartTransport().catch((n) => this.logger.error(n)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((n) => this.logger.error(n))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(Ht.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((e) => this.logger.error(e));
    }, ae.toMiliseconds(W1)));
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
var IE = Object.defineProperty, Sd = Object.getOwnPropertySymbols, OE = Object.prototype.hasOwnProperty, TE = Object.prototype.propertyIsEnumerable, xd = (t, e, r) => e in t ? IE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Id = (t, e) => {
  for (var r in e || (e = {}))
    OE.call(e, r) && xd(t, r, e[r]);
  if (Sd)
    for (var r of Sd(e))
      TE.call(e, r) && xd(t, r, e[r]);
  return t;
};
class Ta extends Rm {
  constructor(e, r, n, s = Cn, i = void 0) {
    super(e, r, n, s), this.core = e, this.logger = r, this.name = n, this.map = /* @__PURE__ */ new Map(), this.version = G1, this.cached = [], this.initialized = !1, this.storagePrefix = Cn, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((a) => {
        this.getKey && a !== null && !tr(a) ? this.map.set(this.getKey(a), a) : a_(a) ? this.map.set(a.id, a) : c_(a) && this.map.set(a.topic, a);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (a, o) => {
      this.isInitialized(), this.map.has(a) ? await this.update(a, o) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: a, value: o }), this.map.set(a, o), await this.persist());
    }, this.get = (a) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: a }), this.getData(a)), this.getAll = (a) => (this.isInitialized(), a ? this.values.filter((o) => Object.keys(a).every((c) => nw(o[c], a[c]))) : this.values), this.update = async (a, o) => {
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
class CE {
  constructor(e, r) {
    this.core = e, this.logger = r, this.name = eE, this.version = tE, this.events = new cu(), this.initialized = !1, this.storagePrefix = Cn, this.ignoredPayloadTypes = [us], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: n }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...n])];
    }, this.create = async () => {
      this.isInitialized();
      const n = bc(), s = await this.core.crypto.setSymKey(n), i = gr(ae.FIVE_MINUTES), a = { protocol: Sf }, o = { topic: s, expiry: i, relay: a, active: !1 }, c = X0({ protocol: this.core.protocol, version: this.core.version, topic: s, symKey: n, relay: a, expiryTimestamp: i });
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
        const i = await this.sendRequest(s, "wc_pairingPing", {}), { done: a, resolve: o, reject: c } = ms();
        this.events.once(It("pairing_ping", i), ({ error: u }) => {
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
      this.pairings.keys.includes(s) && (await this.sendRequest(s, "wc_pairingDelete", _t("USER_DISCONNECTED")), await this.deletePairing(s));
    }, this.sendRequest = async (n, s, i) => {
      const a = Ts(s, i), o = await this.core.crypto.encode(n, a), c = ni[s].req;
      return this.core.history.set(n, a), this.core.relayer.publish(n, o, c), a.id;
    }, this.sendResult = async (n, s, i) => {
      const a = Su(n, i), o = await this.core.crypto.encode(s, a), c = await this.core.history.get(s, n), u = ni[c.request.method].res;
      await this.core.relayer.publish(s, o, u), await this.core.history.resolve(a);
    }, this.sendError = async (n, s, i) => {
      const a = xu(n, i), o = await this.core.crypto.encode(s, a), c = await this.core.history.get(s, n), u = ni[c.request.method] ? ni[c.request.method].res : ni.unregistered_method.res;
      await this.core.relayer.publish(s, o, u), await this.core.history.resolve(a);
    }, this.deletePairing = async (n, s) => {
      await this.core.relayer.unsubscribe(n), await Promise.all([this.pairings.delete(n, _t("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(n), s ? Promise.resolve() : this.core.expirer.del(n)]);
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
        this.isValidPing({ topic: n }), await this.sendResult(i, n, !0), this.events.emit(ai.ping, { id: i, topic: n });
      } catch (a) {
        await this.sendError(i, n, a), this.logger.error(a);
      }
    }, this.onPairingPingResponse = (n, s) => {
      const { id: i } = s;
      setTimeout(() => {
        an(s) ? this.events.emit(It("pairing_ping", i), {}) : Tr(s) && this.events.emit(It("pairing_ping", i), { error: s.error });
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
        const o = _t("WC_METHOD_UNSUPPORTED", a);
        await this.sendError(i, n, o), this.logger.error(o);
      } catch (o) {
        await this.sendError(i, n, o), this.logger.error(o);
      }
    }, this.onUnknownRpcMethodResponse = (n) => {
      this.registeredMethods.includes(n) || this.logger.error(_t("WC_METHOD_UNSUPPORTED", n));
    }, this.isValidPair = (n) => {
      var s;
      if (!ur(n)) {
        const { message: a } = J("MISSING_OR_INVALID", `pair() params: ${n}`);
        throw new Error(a);
      }
      if (!o_(n.uri)) {
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
      if (!ur(n)) {
        const { message: i } = J("MISSING_OR_INVALID", `ping() params: ${n}`);
        throw new Error(i);
      }
      const { topic: s } = n;
      await this.isValidPairingTopic(s);
    }, this.isValidDisconnect = async (n) => {
      if (!ur(n)) {
        const { message: i } = J("MISSING_OR_INVALID", `disconnect() params: ${n}`);
        throw new Error(i);
      }
      const { topic: s } = n;
      await this.isValidPairingTopic(s);
    }, this.isValidPairingTopic = async (n) => {
      if (!Lt(n, !1)) {
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
    }, this.core = e, this.logger = Ke.generateChildLogger(r, this.name), this.pairings = new Ta(this.core, this.logger, this.name, this.storagePrefix);
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
    this.core.relayer.on(Ht.message, async (e) => {
      const { topic: r, message: n } = e;
      if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n)))
        return;
      const s = await this.core.crypto.decode(r, n);
      try {
        Iu(s) ? (this.core.history.set(r, s), this.onRelayEventRequest({ topic: r, payload: s })) : Ia(s) && (await this.core.history.resolve(s), await this.onRelayEventResponse({ topic: r, payload: s }), this.core.history.delete(r, s.id));
      } catch (i) {
        this.logger.error(i);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(Er.expired, async (e) => {
      const { topic: r } = rf(e.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit(ai.expire, { topic: r }));
    });
  }
}
class PE extends Cm {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new Ur.EventEmitter(), this.name = rE, this.version = nE, this.cached = [], this.initialized = !1, this.storagePrefix = Cn, this.init = async () => {
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
class kE extends jm {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new Ur.EventEmitter(), this.name = sE, this.version = iE, this.cached = [], this.initialized = !1, this.storagePrefix = Cn, this.init = async () => {
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
      return D0(e);
    if (typeof e == "number")
      return U0(e);
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
class NE extends Lm {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.name = Wa, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (n) => {
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
        this.removeIframe(), this.verifyUrl = Sc;
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
        this.logger.info(`failed to resolve attestation: ${n.attestationId} from url: ${s}`), this.logger.info(a), i = await this.fetchAttestation(n.attestationId, Sc);
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
        if (document.getElementById(Wa))
          return i();
        window.addEventListener("message", s);
        const a = document.createElement("iframe");
        a.id = Wa, a.src = `${this.verifyUrl}/${this.projectId}`, a.style.display = "none", document.body.append(a), this.iframe = a, n = i;
      }), new Promise((i, a) => setTimeout(() => {
        window.removeEventListener("message", s), a("verify iframe load timeout");
      }, ae.toMiliseconds(ae.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
    }, this.getVerifyUrl = (n) => {
      let s = n || Es;
      return oE.includes(s) || (this.logger.info(`verify url: ${s}, not included in trusted list, assigning default: ${Es}`), s = Es), s;
    }, this.logger = Ke.generateChildLogger(r, this.name), this.verifyUrl = Es, this.abortController = new AbortController(), this.isDevEnv = bu() && process.env.IS_VITEST;
  }
  get context() {
    return Ke.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), ae.toMiliseconds(e));
  }
}
class RE extends Mm {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.context = aE, this.registerDeviceToken = async (n) => {
      const { clientId: s, token: i, notificationType: a, enableEncrypted: o = !1 } = n, c = `${cE}/${this.projectId}/clients`;
      await aw(c, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: s, type: a, token: i, always_raw: o }) });
    }, this.logger = Ke.generateChildLogger(r, this.context);
  }
}
var AE = Object.defineProperty, Od = Object.getOwnPropertySymbols, jE = Object.prototype.hasOwnProperty, LE = Object.prototype.propertyIsEnumerable, Td = (t, e, r) => e in t ? AE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Cd = (t, e) => {
  for (var r in e || (e = {}))
    jE.call(e, r) && Td(t, r, e[r]);
  if (Od)
    for (var r of Od(e))
      LE.call(e, r) && Td(t, r, e[r]);
  return t;
};
class Tu extends Tm {
  constructor(e) {
    super(e), this.protocol = Ef, this.version = R1, this.name = Ou, this.events = new Ur.EventEmitter(), this.initialized = !1, this.on = (n, s) => this.events.on(n, s), this.once = (n, s) => this.events.once(n, s), this.off = (n, s) => this.events.off(n, s), this.removeListener = (n, s) => this.events.removeListener(n, s), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || xf, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Ke.pino(Ke.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || A1.logger }));
    this.logger = Ke.generateChildLogger(r, this.name), this.heartbeat = new Zs.HeartBeat(), this.crypto = new lE(this, this.logger, e == null ? void 0 : e.keychain), this.history = new PE(this, this.logger), this.expirer = new kE(this, this.logger), this.storage = e != null && e.storage ? e.storage : new Fy(Cd(Cd({}, j1), e == null ? void 0 : e.storageOptions)), this.relayer = new xE({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new CE(this, this.logger), this.verify = new NE(this.projectId || "", this.logger), this.echoClient = new RE(this.projectId || "", this.logger);
  }
  static async init(e) {
    const r = new Tu(e);
    await r.initialize();
    const n = await r.crypto.getClientId();
    return await r.storage.setItem(Y1, n), r;
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
const ME = Tu, If = "wc", Of = 2, Tf = "client", Cu = `${If}@${Of}:${Tf}:`, Ha = { name: Tf, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, Pd = "WALLETCONNECT_DEEPLINK_CHOICE", DE = "proposal", UE = "Proposal expired", zE = "session", wo = ae.SEVEN_DAYS, $E = "engine", sn = { wc_sessionPropose: { req: { ttl: ae.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: ae.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: ae.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: ae.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: ae.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: ae.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: ae.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: ae.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: ae.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: ae.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: ae.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: ae.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: ae.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: ae.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: ae.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: ae.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, Ga = { min: ae.FIVE_MINUTES, max: ae.SEVEN_DAYS }, on = { idle: "IDLE", active: "ACTIVE" }, VE = "request", qE = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var ZE = Object.defineProperty, FE = Object.defineProperties, KE = Object.getOwnPropertyDescriptors, kd = Object.getOwnPropertySymbols, WE = Object.prototype.hasOwnProperty, BE = Object.prototype.propertyIsEnumerable, Nd = (t, e, r) => e in t ? ZE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Qt = (t, e) => {
  for (var r in e || (e = {}))
    WE.call(e, r) && Nd(t, r, e[r]);
  if (kd)
    for (var r of kd(e))
      BE.call(e, r) && Nd(t, r, e[r]);
  return t;
}, gs = (t, e) => FE(t, KE(e));
class HE extends Um {
  constructor(e) {
    super(e), this.name = $E, this.events = new cu(), this.initialized = !1, this.ignoredPayloadTypes = [us], this.requestQueue = { state: on.idle, queue: [] }, this.sessionRequestQueue = { state: on.idle, queue: [] }, this.requestQueueDelay = ae.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({ methods: Object.keys(sn) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, ae.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      await this.isInitialized();
      const n = gs(Qt({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(n);
      const { pairingTopic: s, requiredNamespaces: i, optionalNamespaces: a, sessionProperties: o, relays: c } = n;
      let u = s, l, f = !1;
      if (u && (f = this.client.core.pairing.pairings.get(u).active), !u || !f) {
        const { topic: w, uri: x } = await this.client.core.pairing.create();
        u = w, l = x;
      }
      const p = await this.client.core.crypto.generateKeyPair(), m = sn.wc_sessionPropose.req.ttl || ae.FIVE_MINUTES, _ = gr(m), E = Qt({ requiredNamespaces: i, optionalNamespaces: a, relays: c ?? [{ protocol: Sf }], proposer: { publicKey: p, metadata: this.client.metadata }, expiryTimestamp: _ }, o && { sessionProperties: o }), { reject: T, resolve: M, done: v } = ms(m, UE);
      if (this.events.once(It("session_connect"), async ({ error: w, session: x }) => {
        if (w)
          T(w);
        else if (x) {
          x.self.publicKey = p;
          const y = gs(Qt({}, x), { requiredNamespaces: E.requiredNamespaces, optionalNamespaces: E.optionalNamespaces });
          await this.client.session.set(x.topic, y), await this.setExpiry(x.topic, x.expiry), u && await this.client.core.pairing.updateMetadata({ topic: u, metadata: x.peer.metadata }), M(y);
        }
      }), !u) {
        const { message: w } = J("NO_MATCHING_KEY", `connect() pairing topic: ${u}`);
        throw new Error(w);
      }
      const O = await this.sendRequest({ topic: u, method: "wc_sessionPropose", params: E, throwOnFailedPublish: !0 });
      return await this.setProposal(O, Qt({ id: O }, E)), { uri: l, approval: v };
    }, this.pair = async (r) => (await this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      await this.isInitialized(), await this.isValidApprove(r);
      const { id: n, relayProtocol: s, namespaces: i, sessionProperties: a } = r, o = this.client.proposal.get(n);
      let { pairingTopic: c, proposer: u, requiredNamespaces: l, optionalNamespaces: f } = o;
      c = c || "";
      const p = await this.client.core.crypto.generateKeyPair(), m = u.publicKey, _ = await this.client.core.crypto.generateSharedKey(p, m);
      c && n && (await this.client.core.pairing.updateMetadata({ topic: c, metadata: u.metadata }), await this.sendResult({ id: n, topic: c, result: { relay: { protocol: s ?? "irn" }, responderPublicKey: p } }), await this.client.proposal.delete(n, _t("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: c }));
      const E = Qt({ relay: { protocol: s ?? "irn" }, namespaces: i, pairingTopic: c, controller: { publicKey: p, metadata: this.client.metadata }, expiry: gr(wo) }, a && { sessionProperties: a });
      await this.client.core.relayer.subscribe(_);
      const T = gs(Qt({}, E), { topic: _, requiredNamespaces: l, optionalNamespaces: f, pairingTopic: c, acknowledged: !1, self: E.controller, peer: { publicKey: u.publicKey, metadata: u.metadata }, controller: p });
      await this.client.session.set(_, T);
      try {
        await this.sendRequest({ topic: _, method: "wc_sessionSettle", params: E, throwOnFailedPublish: !0 });
      } catch (M) {
        throw this.client.logger.error(M), this.client.session.delete(_, _t("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(_), M;
      }
      return await this.setExpiry(_, gr(wo)), { topic: _, acknowledged: () => new Promise((M) => setTimeout(() => M(this.client.session.get(_)), 500)) };
    }, this.reject = async (r) => {
      await this.isInitialized(), await this.isValidReject(r);
      const { id: n, reason: s } = r, { pairingTopic: i } = this.client.proposal.get(n);
      i && (await this.sendError(n, i, s), await this.client.proposal.delete(n, _t("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      await this.isInitialized(), await this.isValidUpdate(r);
      const { topic: n, namespaces: s } = r, i = await this.sendRequest({ topic: n, method: "wc_sessionUpdate", params: { namespaces: s } }), { done: a, resolve: o, reject: c } = ms();
      return this.events.once(It("session_update", i), ({ error: u }) => {
        u ? c(u) : o();
      }), await this.client.session.update(n, { namespaces: s }), { acknowledged: a };
    }, this.extend = async (r) => {
      await this.isInitialized(), await this.isValidExtend(r);
      const { topic: n } = r, s = await this.sendRequest({ topic: n, method: "wc_sessionExtend", params: {} }), { done: i, resolve: a, reject: o } = ms();
      return this.events.once(It("session_extend", s), ({ error: c }) => {
        c ? o(c) : a();
      }), await this.setExpiry(n, gr(wo)), { acknowledged: i };
    }, this.request = async (r) => {
      await this.isInitialized(), await this.isValidRequest(r);
      const { chainId: n, request: s, topic: i, expiry: a = sn.wc_sessionRequest.req.ttl } = r, o = Eu(), { done: c, resolve: u, reject: l } = ms(a, "Request expired. Please try again.");
      return this.events.once(It("session_request", o), ({ error: f, result: p }) => {
        f ? l(f) : u(p);
      }), await Promise.all([new Promise(async (f) => {
        await this.sendRequest({ clientRpcId: o, topic: i, method: "wc_sessionRequest", params: { request: gs(Qt({}, s), { expiryTimestamp: gr(a) }), chainId: n }, expiry: a, throwOnFailedPublish: !0 }).catch((p) => l(p)), this.client.events.emit("session_request_sent", { topic: i, request: s, chainId: n, id: o }), f();
      }), new Promise(async (f) => {
        const p = await $0(this.client.core.storage, Pd);
        z0({ id: o, topic: i, wcDeepLink: p }), f();
      }), c()]).then((f) => f[2]);
    }, this.respond = async (r) => {
      await this.isInitialized(), await this.isValidRespond(r);
      const { topic: n, response: s } = r, { id: i } = s;
      an(s) ? await this.sendResult({ id: i, topic: n, result: s.result, throwOnFailedPublish: !0 }) : Tr(s) && await this.sendError(i, n, s.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      await this.isInitialized(), await this.isValidPing(r);
      const { topic: n } = r;
      if (this.client.session.keys.includes(n)) {
        const s = await this.sendRequest({ topic: n, method: "wc_sessionPing", params: {} }), { done: i, resolve: a, reject: o } = ms();
        this.events.once(It("session_ping", s), ({ error: c }) => {
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
        await this.sendRequest({ topic: n, method: "wc_sessionDelete", params: _t("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession({ topic: n, emitEvent: !1 });
      else if (this.client.core.pairing.pairings.keys.includes(n))
        await this.client.core.pairing.disconnect({ topic: n });
      else {
        const { message: s } = J("MISMATCHED_TOPIC", `Session or pairing topic not found: ${n}`);
        throw new Error(s);
      }
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((n) => s_(n, r))), this.getPendingSessionRequests = () => this.client.pendingRequest.getAll(), this.cleanupDuplicatePairings = async (r) => {
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
      await this.client.core.relayer.unsubscribe(n), await this.client.session.delete(n, _t("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(o.publicKey) && await this.client.core.crypto.deleteKeyPair(o.publicKey), this.client.core.crypto.keychain.has(n) && await this.client.core.crypto.deleteSymKey(n), s || this.client.core.expirer.del(n), this.client.core.storage.removeItem(Pd).catch((c) => this.client.logger.warn(c)), this.getPendingSessionRequests().forEach((c) => {
        c.topic === n && this.deletePendingSessionRequest(c.id, _t("USER_DISCONNECTED"));
      }), i && this.client.events.emit("session_delete", { id: a, topic: n });
    }, this.deleteProposal = async (r, n) => {
      await Promise.all([this.client.proposal.delete(r, _t("USER_DISCONNECTED")), n ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, n, s = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, n), s ? Promise.resolve() : this.client.core.expirer.del(r)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i) => i.id !== r), s && (this.sessionRequestQueue.state = on.idle, this.client.events.emit("session_request_expire", { id: r }));
    }, this.setExpiry = async (r, n) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: n }), this.client.core.expirer.set(r, n);
    }, this.setProposal = async (r, n) => {
      await this.client.proposal.set(r, n), this.client.core.expirer.set(r, gr(sn.wc_sessionPropose.req.ttl));
    }, this.setPendingSessionRequest = async (r) => {
      const { id: n, topic: s, params: i, verifyContext: a } = r, o = i.request.expiryTimestamp || gr(sn.wc_sessionRequest.req.ttl);
      await this.client.pendingRequest.set(n, { id: n, topic: s, params: i, verifyContext: a }), o && this.client.core.expirer.set(n, o);
    }, this.sendRequest = async (r) => {
      const { topic: n, method: s, params: i, expiry: a, relayRpcId: o, clientRpcId: c, throwOnFailedPublish: u } = r, l = Ts(s, i, c);
      if (Bs() && qE.includes(s)) {
        const m = Os(JSON.stringify(l));
        this.client.core.verify.register({ attestationId: m });
      }
      const f = await this.client.core.crypto.encode(n, l), p = sn[s].req;
      return a && (p.ttl = a), o && (p.id = o), this.client.core.history.set(n, l), u ? (p.internal = gs(Qt({}, p.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(n, f, p)) : this.client.core.relayer.publish(n, f, p).catch((m) => this.client.logger.error(m)), l.id;
    }, this.sendResult = async (r) => {
      const { id: n, topic: s, result: i, throwOnFailedPublish: a } = r, o = Su(n, i), c = await this.client.core.crypto.encode(s, o), u = await this.client.core.history.get(s, n), l = sn[u.request.method].res;
      a ? (l.internal = gs(Qt({}, l.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(s, c, l)) : this.client.core.relayer.publish(s, c, l).catch((f) => this.client.logger.error(f)), await this.client.core.history.resolve(o);
    }, this.sendError = async (r, n, s) => {
      const i = xu(r, s), a = await this.client.core.crypto.encode(n, i), o = await this.client.core.history.get(n, r), c = sn[o.request.method].res;
      this.client.core.relayer.publish(n, a, c), await this.client.core.history.resolve(i);
    }, this.cleanup = async () => {
      const r = [], n = [];
      this.client.session.getAll().forEach((s) => {
        let i = !1;
        Sn(s.expiry) && (i = !0), this.client.core.crypto.keychain.has(s.topic) || (i = !0), i && r.push(s.topic);
      }), this.client.proposal.getAll().forEach((s) => {
        Sn(s.expiryTimestamp) && n.push(s.id);
      }), await Promise.all([...r.map((s) => this.deleteSession({ topic: s })), ...n.map((s) => this.deleteProposal(s))]);
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
        this.isValidConnect(Qt({}, n.params));
        const a = s.expiryTimestamp || gr(sn.wc_sessionPropose.req.ttl), o = Qt({ id: i, pairingTopic: r, expiryTimestamp: a }, s);
        await this.setProposal(i, o);
        const c = Os(JSON.stringify(n)), u = await this.getVerifyContext(c, o.proposer.metadata);
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
        const l = await this.client.core.relayer.subscribe(u);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: l }), await this.client.core.pairing.activate({ topic: r });
      } else
        Tr(n) && (await this.client.proposal.delete(s, _t("USER_DISCONNECTED")), this.events.emit(It("session_connect"), { error: n.error }));
    }, this.onSessionSettleRequest = async (r, n) => {
      const { id: s, params: i } = n;
      try {
        this.isValidSessionSettleRequest(i);
        const { relay: a, controller: o, expiry: c, namespaces: u, sessionProperties: l, pairingTopic: f } = n.params, p = Qt({ topic: r, relay: a, expiry: c, namespaces: u, acknowledged: !0, pairingTopic: f, requiredNamespaces: {}, optionalNamespaces: {}, controller: o.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: o.publicKey, metadata: o.metadata } }, l && { sessionProperties: l });
        await this.sendResult({ id: n.id, topic: r, result: !0 }), this.events.emit(It("session_connect"), { session: p }), this.cleanupDuplicatePairings(p);
      } catch (a) {
        await this.sendError(s, r, a), this.client.logger.error(a);
      }
    }, this.onSessionSettleResponse = async (r, n) => {
      const { id: s } = n;
      an(n) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(It("session_approve", s), {})) : Tr(n) && (await this.client.session.delete(r, _t("USER_DISCONNECTED")), this.events.emit(It("session_approve", s), { error: n.error }));
    }, this.onSessionUpdateRequest = async (r, n) => {
      const { params: s, id: i } = n;
      try {
        const a = `${r}_session_update`, o = _o.get(a);
        if (o && this.isRequestOutOfSync(o, i)) {
          this.client.logger.info(`Discarding out of sync request - ${i}`);
          return;
        }
        this.isValidUpdate(Qt({ topic: r }, s)), await this.client.session.update(r, { namespaces: s.namespaces }), await this.sendResult({ id: i, topic: r, result: !0 }), this.client.events.emit("session_update", { id: i, topic: r, params: s }), _o.set(a, i);
      } catch (a) {
        await this.sendError(i, r, a), this.client.logger.error(a);
      }
    }, this.isRequestOutOfSync = (r, n) => parseInt(n.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, n) => {
      const { id: s } = n;
      an(n) ? this.events.emit(It("session_update", s), {}) : Tr(n) && this.events.emit(It("session_update", s), { error: n.error });
    }, this.onSessionExtendRequest = async (r, n) => {
      const { id: s } = n;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, gr(wo)), await this.sendResult({ id: s, topic: r, result: !0 }), this.client.events.emit("session_extend", { id: s, topic: r });
      } catch (i) {
        await this.sendError(s, r, i), this.client.logger.error(i);
      }
    }, this.onSessionExtendResponse = (r, n) => {
      const { id: s } = n;
      an(n) ? this.events.emit(It("session_extend", s), {}) : Tr(n) && this.events.emit(It("session_extend", s), { error: n.error });
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
        an(n) ? this.events.emit(It("session_ping", s), {}) : Tr(n) && this.events.emit(It("session_ping", s), { error: n.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (r, n) => {
      const { id: s } = n;
      try {
        this.isValidDisconnect({ topic: r, reason: n.params }), await Promise.all([new Promise((i) => {
          this.client.core.relayer.once(Ht.publish, async () => {
            i(await this.deleteSession({ topic: r, id: s }));
          });
        }), this.sendResult({ id: s, topic: r, result: !0 }), this.cleanupPendingSentRequestsForTopic({ topic: r, error: _t("USER_DISCONNECTED") })]);
      } catch (i) {
        this.client.logger.error(i);
      }
    }, this.onSessionRequest = async (r, n) => {
      const { id: s, params: i } = n;
      try {
        this.isValidRequest(Qt({ topic: r }, i));
        const a = Os(JSON.stringify(Ts("wc_sessionRequest", i, s))), o = this.client.session.get(r), c = await this.getVerifyContext(a, o.peer.metadata), u = { id: s, topic: r, params: i, verifyContext: c };
        await this.setPendingSessionRequest(u), this.addSessionRequestToSessionRequestQueue(u), this.processSessionRequestQueue();
      } catch (a) {
        await this.sendError(s, r, a), this.client.logger.error(a);
      }
    }, this.onSessionRequestResponse = (r, n) => {
      const { id: s } = n;
      an(n) ? this.events.emit(It("session_request", s), { result: n.result }) : Tr(n) && this.events.emit(It("session_request", s), { error: n.error });
    }, this.onSessionEventRequest = async (r, n) => {
      const { id: s, params: i } = n;
      try {
        const a = `${r}_session_event_${i.event.name}`, o = _o.get(a);
        if (o && this.isRequestOutOfSync(o, s)) {
          this.client.logger.info(`Discarding out of sync request - ${s}`);
          return;
        }
        this.isValidEmit(Qt({ topic: r }, i)), this.client.events.emit("session_event", { id: s, topic: r, params: i }), _o.set(a, s);
      } catch (a) {
        await this.sendError(s, r, a), this.client.logger.error(a);
      }
    }, this.addSessionRequestToSessionRequestQueue = (r) => {
      this.sessionRequestQueue.queue.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = on.idle, this.processSessionRequestQueue();
      }, ae.toMiliseconds(this.requestQueueDelay));
    }, this.cleanupPendingSentRequestsForTopic = ({ topic: r, error: n }) => {
      const s = this.client.core.history.pending;
      s.length > 0 && s.filter((i) => i.topic === r && i.request.method === "wc_sessionRequest").forEach((i) => {
        this.events.emit(It("session_request", i.request.id), { error: n });
      });
    }, this.processSessionRequestQueue = () => {
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
        this.sessionRequestQueue.state = on.active, this.client.events.emit("session_request", r);
      } catch (n) {
        this.client.logger.error(n);
      }
    }, this.onPairingCreated = (r) => {
      if (r.active)
        return;
      const n = this.client.proposal.getAll().find((s) => s.pairingTopic === r.topic);
      n && this.onSessionProposeRequest(r.topic, Ts("wc_sessionPropose", { requiredNamespaces: n.requiredNamespaces, optionalNamespaces: n.optionalNamespaces, relays: n.relays, proposer: n.proposer, sessionProperties: n.sessionProperties }, n.id));
    }, this.isValidConnect = async (r) => {
      if (!ur(r)) {
        const { message: c } = J("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(c);
      }
      const { pairingTopic: n, requiredNamespaces: s, optionalNamespaces: i, sessionProperties: a, relays: o } = r;
      if (tr(n) || await this.isValidPairingTopic(n), !y_(o, !0)) {
        const { message: c } = J("MISSING_OR_INVALID", `connect() relays: ${o}`);
        throw new Error(c);
      }
      !tr(s) && Vo(s) !== 0 && this.validateNamespaces(s, "requiredNamespaces"), !tr(i) && Vo(i) !== 0 && this.validateNamespaces(i, "optionalNamespaces"), tr(a) || this.validateSessionProps(a, "sessionProperties");
    }, this.validateNamespaces = (r, n) => {
      const s = g_(r, "connect()", n);
      if (s)
        throw new Error(s.message);
    }, this.isValidApprove = async (r) => {
      if (!ur(r))
        throw new Error(J("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: n, namespaces: s, relayProtocol: i, sessionProperties: a } = r;
      await this.isValidProposalId(n);
      const o = this.client.proposal.get(n), c = Za(s, "approve()");
      if (c)
        throw new Error(c.message);
      const u = td(o.requiredNamespaces, s, "approve()");
      if (u)
        throw new Error(u.message);
      if (!Lt(i, !0)) {
        const { message: l } = J("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
        throw new Error(l);
      }
      tr(a) || this.validateSessionProps(a, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!ur(r)) {
        const { message: i } = J("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(i);
      }
      const { id: n, reason: s } = r;
      if (await this.isValidProposalId(n), !v_(s)) {
        const { message: i } = J("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s)}`);
        throw new Error(i);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!ur(r)) {
        const { message: u } = J("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(u);
      }
      const { relay: n, controller: s, namespaces: i, expiry: a } = r;
      if (!sf(n)) {
        const { message: u } = J("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(u);
      }
      const o = u_(s, "onSessionSettleRequest()");
      if (o)
        throw new Error(o.message);
      const c = Za(i, "onSessionSettleRequest()");
      if (c)
        throw new Error(c.message);
      if (Sn(a)) {
        const { message: u } = J("EXPIRED", "onSessionSettleRequest()");
        throw new Error(u);
      }
    }, this.isValidUpdate = async (r) => {
      if (!ur(r)) {
        const { message: c } = J("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(c);
      }
      const { topic: n, namespaces: s } = r;
      await this.isValidSessionTopic(n);
      const i = this.client.session.get(n), a = Za(s, "update()");
      if (a)
        throw new Error(a.message);
      const o = td(i.requiredNamespaces, s, "update()");
      if (o)
        throw new Error(o.message);
    }, this.isValidExtend = async (r) => {
      if (!ur(r)) {
        const { message: s } = J("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(s);
      }
      const { topic: n } = r;
      await this.isValidSessionTopic(n);
    }, this.isValidRequest = async (r) => {
      if (!ur(r)) {
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
      if (!b_(s)) {
        const { message: c } = J("MISSING_OR_INVALID", `request() ${JSON.stringify(s)}`);
        throw new Error(c);
      }
      if (!E_(o, i, s.method)) {
        const { message: c } = J("MISSING_OR_INVALID", `request() method: ${s.method}`);
        throw new Error(c);
      }
      if (a && !O_(a, Ga)) {
        const { message: c } = J("MISSING_OR_INVALID", `request() expiry: ${a}. Expiry must be a number (in seconds) between ${Ga.min} and ${Ga.max}`);
        throw new Error(c);
      }
    }, this.isValidRespond = async (r) => {
      var n;
      if (!ur(r)) {
        const { message: a } = J("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(a);
      }
      const { topic: s, response: i } = r;
      try {
        await this.isValidSessionTopic(s);
      } catch (a) {
        throw (n = r == null ? void 0 : r.response) != null && n.id && this.cleanupAfterResponse(r), a;
      }
      if (!__(i)) {
        const { message: a } = J("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
        throw new Error(a);
      }
    }, this.isValidPing = async (r) => {
      if (!ur(r)) {
        const { message: s } = J("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(s);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.isValidEmit = async (r) => {
      if (!ur(r)) {
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
      if (!w_(s)) {
        const { message: o } = J("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(o);
      }
      if (!S_(a, i, s.name)) {
        const { message: o } = J("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(o);
      }
    }, this.isValidDisconnect = async (r) => {
      if (!ur(r)) {
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
        if (!Lt(s, !1)) {
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
        Iu(s) ? (this.client.core.history.set(r, s), this.onRelayEventRequest({ topic: r, payload: s })) : Ia(s) ? (await this.client.core.history.resolve(s), await this.onRelayEventResponse({ topic: r, payload: s }), this.client.core.history.delete(r, s.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: s });
      } catch (i) {
        this.client.logger.error(i);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(Er.expired, async (e) => {
      const { topic: r, id: n } = rf(e.target);
      if (n && this.client.pendingRequest.keys.includes(n))
        return await this.deletePendingSessionRequest(n, J("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession({ topic: r, expirerHasDeleted: !0 }), this.client.events.emit("session_expire", { topic: r })) : n && (await this.deleteProposal(n, !0), this.client.events.emit("proposal_expire", { id: n }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(ai.create, (e) => this.onPairingCreated(e));
  }
  isValidPairingTopic(e) {
    if (!Lt(e, !1)) {
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
    if (!Lt(e, !1)) {
      const { message: r } = J("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(e)) {
      const { message: r } = J("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (Sn(this.client.session.get(e).expiry)) {
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
    else if (Lt(e, !1)) {
      const { message: r } = J("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    } else {
      const { message: r } = J("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
  }
  async isValidProposalId(e) {
    if (!m_(e)) {
      const { message: r } = J("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: r } = J("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (Sn(this.client.proposal.get(e).expiryTimestamp)) {
      await this.deleteProposal(e);
      const { message: r } = J("EXPIRED", `proposal id: ${e}`);
      throw new Error(r);
    }
  }
}
class GE extends Ta {
  constructor(e, r) {
    super(e, r, DE, Cu), this.core = e, this.logger = r;
  }
}
class YE extends Ta {
  constructor(e, r) {
    super(e, r, zE, Cu), this.core = e, this.logger = r;
  }
}
class JE extends Ta {
  constructor(e, r) {
    super(e, r, VE, Cu, (n) => n.id), this.core = e, this.logger = r;
  }
}
class Pu extends Dm {
  constructor(e) {
    super(e), this.protocol = If, this.version = Of, this.name = Ha.name, this.events = new Ur.EventEmitter(), this.on = (n, s) => this.events.on(n, s), this.once = (n, s) => this.events.once(n, s), this.off = (n, s) => this.events.off(n, s), this.removeListener = (n, s) => this.events.removeListener(n, s), this.removeAllListeners = (n) => this.events.removeAllListeners(n), this.connect = async (n) => {
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
    }, this.name = (e == null ? void 0 : e.name) || Ha.name, this.metadata = (e == null ? void 0 : e.metadata) || R0();
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Ke.pino(Ke.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || Ha.logger }));
    this.core = (e == null ? void 0 : e.core) || new ME(e), this.logger = Ke.generateChildLogger(r, this.name), this.session = new YE(this.core, this.logger), this.proposal = new GE(this.core, this.logger), this.pendingRequest = new JE(this.core, this.logger), this.engine = new HE(this);
  }
  static async init(e) {
    const r = new Pu(e);
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
var XE = Object.defineProperty, QE = Object.defineProperties, eS = Object.getOwnPropertyDescriptors, Rd = Object.getOwnPropertySymbols, tS = Object.prototype.hasOwnProperty, rS = Object.prototype.propertyIsEnumerable, Ad = (t, e, r) => e in t ? XE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, nS = (t, e) => {
  for (var r in e || (e = {}))
    tS.call(e, r) && Ad(t, r, e[r]);
  if (Rd)
    for (var r of Rd(e))
      rS.call(e, r) && Ad(t, r, e[r]);
  return t;
}, sS = (t, e) => QE(t, eS(e)), ku = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, ut = (t, e, r) => (ku(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Fn = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, Fo = (t, e, r, n) => (ku(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), Kt = (t, e, r) => (ku(t, e, "access private method"), r), Kn, vs, ci, jt, xc, Cf, Wt, er, Ic, jd;
let iS = class {
  constructor(t) {
    Fn(this, xc), Fn(this, Wt), Fn(this, Ic), Fn(this, Kn, void 0), Fn(this, vs, void 0), Fn(this, ci, void 0), Fn(this, jt, void 0), Fo(this, Kn, t), Fo(this, vs, Kt(this, xc, Cf).call(this)), Kt(this, Wt, er).call(this);
  }
  async connect(t) {
    const { requiredNamespaces: e, optionalNamespaces: r } = t;
    return new Promise(async (n, s) => {
      await Kt(this, Wt, er).call(this);
      const i = ut(this, vs).subscribeModal((c) => {
        c.open || (i(), s(new Error("Modal closed")));
      }), { uri: a, approval: o } = await ut(this, jt).connect(t);
      if (a) {
        const c = /* @__PURE__ */ new Set();
        e && Object.values(e).forEach(({ chains: u }) => {
          u && u.forEach((l) => c.add(l));
        }), r && Object.values(r).forEach(({ chains: u }) => {
          u && u.forEach((l) => c.add(l));
        }), await ut(this, vs).openModal({ uri: a, chains: Array.from(c) });
      }
      try {
        const c = await o();
        n(c);
      } catch (c) {
        s(c);
      } finally {
        i(), ut(this, vs).closeModal();
      }
    });
  }
  async disconnect(t) {
    await Kt(this, Wt, er).call(this), await ut(this, jt).disconnect(t);
  }
  async request(t) {
    return await Kt(this, Wt, er).call(this), await ut(this, jt).request(t);
  }
  async getSessions() {
    return await Kt(this, Wt, er).call(this), ut(this, jt).session.getAll();
  }
  async getSession() {
    return await Kt(this, Wt, er).call(this), ut(this, jt).session.getAll().at(-1);
  }
  async onSessionEvent(t) {
    await Kt(this, Wt, er).call(this), ut(this, jt).on("session_event", t);
  }
  async offSessionEvent(t) {
    await Kt(this, Wt, er).call(this), ut(this, jt).off("session_event", t);
  }
  async onSessionUpdate(t) {
    await Kt(this, Wt, er).call(this), ut(this, jt).on("session_update", t);
  }
  async offSessionUpdate(t) {
    await Kt(this, Wt, er).call(this), ut(this, jt).off("session_update", t);
  }
  async onSessionDelete(t) {
    await Kt(this, Wt, er).call(this), ut(this, jt).on("session_delete", t);
  }
  async offSessionDelete(t) {
    await Kt(this, Wt, er).call(this), ut(this, jt).off("session_delete", t);
  }
  async onSessionExpire(t) {
    await Kt(this, Wt, er).call(this), ut(this, jt).on("session_expire", t);
  }
  async offSessionExpire(t) {
    await Kt(this, Wt, er).call(this), ut(this, jt).off("session_expire", t);
  }
};
Kn = /* @__PURE__ */ new WeakMap(), vs = /* @__PURE__ */ new WeakMap(), ci = /* @__PURE__ */ new WeakMap(), jt = /* @__PURE__ */ new WeakMap(), xc = /* @__PURE__ */ new WeakSet(), Cf = function() {
  const { modalOptions: t, projectId: e } = ut(this, Kn);
  return new oy(sS(nS({}, t), { projectId: e }));
}, Wt = /* @__PURE__ */ new WeakSet(), er = async function() {
  return ut(this, jt) ? !0 : (!ut(this, ci) && typeof window < "u" && Fo(this, ci, Kt(this, Ic, jd).call(this)), ut(this, ci));
}, Ic = /* @__PURE__ */ new WeakSet(), jd = async function() {
  Fo(this, jt, await Pu.init({ metadata: ut(this, Kn).metadata, projectId: ut(this, Kn).projectId, relayUrl: ut(this, Kn).relayUrl }));
  const t = await ut(this, jt).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", t);
  } catch {
    console.info("Unable to set client id");
  }
};
const oS = [
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
], Pf = ["aleo:3"], aS = ["chainChanged", "accountSelected", "selectedAccountSynced", "sharedAccountSynced"], cS = "f0aaeffe71b636da453fce042d79d723", uS = {
  standaloneChains: Pf,
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
}, lS = "@puzzlehq/sdk-core", dS = "Puzzle SDK", hS = "0.2.21", fS = "Your portal to privacy", pS = "./dist/puzzle.cjs.js", gS = "./dist/puzzle.es.js", yS = "./dist/puzzle.umd.js", mS = "./dist/types/index.d.ts", vS = {
  ".": {
    import: "./dist/puzzle.es.js",
    require: "./dist/puzzle.cjs.js",
    browser: "./dist/puzzle.umd.js",
    types: "./dist/types/index.d.ts"
  }
}, bS = "module", _S = {
  "fetch-fix": "find dist -type f \\( -name '*.js' -o -name '*.cjs' \\) -exec sed -i '' 's/self.fetch[[:space:]]*||/fetch ||/g' {} \\;",
  "ws-fix": `find ./dist -type f -name 'index*' -exec sed -i '' -e 's/require(\\"ws\\")/(() => {try { return require(\\"ws\\") } catch (e) { } })()/g' {} +;`,
  build: "vite build && tsc --declaration --emitDeclarationOnly --outDir dist/types && pnpm fetch-fix && pnpm ws-fix",
  "type-check": "tsc --noEmit"
}, wS = {
  type: "git",
  url: "git+https://github.com/puzzlehq/puzzle-sdk.git"
}, ES = {
  "@puzzlehq/types": "1.0.11",
  "@walletconnect/modal-sign-html": "^2.6.2",
  "@walletconnect/types": "^2.11.2",
  "@walletconnect/utils": "^2.11.2",
  debug: "^4.3.4",
  events: "^3.3.0"
}, SS = {
  buffer: "^6.0.3"
}, xS = [
  "puzzle",
  "html",
  "aleo",
  "web3",
  "crypto"
], IS = "Puzzle", OS = "ISC", TS = {
  url: "https://github.com/puzzlehq/puzzle-sdk/issues"
}, CS = "https://github.com/puzzlehq/puzzle-sdk#readme", Ld = {
  name: lS,
  displayName: dS,
  version: hS,
  description: fS,
  main: pS,
  module: gS,
  browser: yS,
  types: mS,
  private: !1,
  exports: vS,
  type: bS,
  scripts: _S,
  repository: wS,
  dependencies: ES,
  peerDependencies: SS,
  keywords: xS,
  author: IS,
  license: OS,
  bugs: TS,
  homepage: CS
}, kf = new cu();
let Ss;
async function PS(t) {
  let e = !1;
  const r = Ld.version, n = localStorage.getItem("puzzle_sdk_version");
  if (r !== n && (console.log(`${Ld.name}: Updated from ` + n + " to " + r + "!"), localStorage.setItem("puzzle_sdk_version", r), e = !0), Ss = new iS({
    projectId: cS,
    metadata: {
      name: t.dAppName,
      description: t.dAppDescription,
      url: t.dAppUrl,
      icons: [t.dAppIconURL]
    },
    modalOptions: { ...uS }
  }), e)
    try {
      kS(Ss, t.onDisconnect);
    } catch (s) {
      console.error(s);
    }
  window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
}
async function kS(t, e) {
  const r = await (t == null ? void 0 : t.getSession());
  r && (console.log("Disconnecting session", r), e && e(), t.disconnect({
    topic: r.topic,
    reason: _t("USER_DISCONNECTED")
  }));
}
async function Nf() {
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
var Oc;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(Oc || (Oc = {}));
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
]), NS = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
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
let Rf = mi;
function RS(t) {
  Rf = t;
}
function Ko() {
  return Rf;
}
const Wo = (t) => {
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
}, AS = [];
function se(t, e) {
  const r = Wo({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      Ko(),
      mi
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
    return Yt.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, r) {
    const n = {};
    for (const s of r) {
      const { key: i, value: a } = s;
      if (i.status === "aborted" || a.status === "aborted")
        return _e;
      i.status === "dirty" && e.dirty(), a.status === "dirty" && e.dirty(), (typeof a.value < "u" || s.alwaysSet) && (n[i.value] = a.value);
    }
    return { status: e.value, value: n };
  }
}
const _e = Object.freeze({
  status: "aborted"
}), Af = (t) => ({ status: "dirty", value: t }), ir = (t) => ({ status: "valid", value: t }), Tc = (t) => t.status === "aborted", Cc = (t) => t.status === "dirty", Bo = (t) => t.status === "valid", Ho = (t) => typeof Promise < "u" && t instanceof Promise;
var ce;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(ce || (ce = {}));
class Hr {
  constructor(e, r, n, s) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = n, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Md = (t, e) => {
  if (Bo(e))
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
      status: new Yt(),
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
    if (Ho(r))
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
      parsedType: xn(e)
    }, s = this._parse({ data: e, path: n.path, parent: n }), i = await (Ho(s) ? s : Promise.resolve(s));
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
    return un.create(this, this._def);
  }
  nullable() {
    return ts.create(this, this._def);
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
    return new Lf({
      typeName: pe.ZodBranded,
      type: this,
      ...xe(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Xo({
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
const jS = /^c[^\s-]{8,}$/i, LS = /^[a-z][a-z0-9]*$/, MS = /[0-9A-HJKMNP-TV-Z]{26}/, DS = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, US = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, zS = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u"), $S = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, VS = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, qS = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function ZS(t, e) {
  return !!((e === "v4" || !e) && $S.test(t) || (e === "v6" || !e) && VS.test(t));
}
class Pr extends Re {
  constructor() {
    super(...arguments), this._regex = (e, r, n) => this.refinement((s) => e.test(s), {
      validation: r,
      code: W.invalid_string,
      ...ce.errToObj(n)
    }), this.nonempty = (e) => this.min(1, ce.errToObj(e)), this.trim = () => new Pr({
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
      ), _e;
    }
    const r = new Yt();
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
        US.test(e.data) || (n = this._getOrReturnCtx(e, n), se(n, {
          validation: "email",
          code: W.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "emoji")
        zS.test(e.data) || (n = this._getOrReturnCtx(e, n), se(n, {
          validation: "emoji",
          code: W.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "uuid")
        DS.test(e.data) || (n = this._getOrReturnCtx(e, n), se(n, {
          validation: "uuid",
          code: W.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "cuid")
        jS.test(e.data) || (n = this._getOrReturnCtx(e, n), se(n, {
          validation: "cuid",
          code: W.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "cuid2")
        LS.test(e.data) || (n = this._getOrReturnCtx(e, n), se(n, {
          validation: "cuid2",
          code: W.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "ulid")
        MS.test(e.data) || (n = this._getOrReturnCtx(e, n), se(n, {
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
        }), r.dirty()) : s.kind === "datetime" ? qS(s).test(e.data) || (n = this._getOrReturnCtx(e, n), se(n, {
          code: W.invalid_string,
          validation: "datetime",
          message: s.message
        }), r.dirty()) : s.kind === "ip" ? ZS(e.data, s.version) || (n = this._getOrReturnCtx(e, n), se(n, {
          validation: "ip",
          code: W.invalid_string,
          message: s.message
        }), r.dirty()) : Je.assertNever(s);
    return { status: r.value, value: e.data };
  }
  _addCheck(e) {
    return new Pr({
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
Pr.create = (t) => {
  var e;
  return new Pr({
    checks: [],
    typeName: pe.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...xe(t)
  });
};
function FS(t, e) {
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
      }), _e;
    }
    let r;
    const n = new Yt();
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
      }), n.dirty()) : s.kind === "multipleOf" ? FS(e.data, s.value) !== 0 && (r = this._getOrReturnCtx(e, r), se(r, {
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
class kn extends Re {
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
      }), _e;
    }
    let r;
    const n = new Yt();
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
    return new kn({
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
kn.create = (t) => {
  var e;
  return new kn({
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
      }), _e;
    }
    return ir(e.data);
  }
}
vi.create = (t) => new vi({
  typeName: pe.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...xe(t)
});
class Qn extends Re {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== te.date) {
      const s = this._getOrReturnCtx(e);
      return se(s, {
        code: W.invalid_type,
        expected: te.date,
        received: s.parsedType
      }), _e;
    }
    if (isNaN(e.data.getTime())) {
      const s = this._getOrReturnCtx(e);
      return se(s, {
        code: W.invalid_date
      }), _e;
    }
    const r = new Yt();
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
    return new Qn({
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
Qn.create = (t) => new Qn({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: pe.ZodDate,
  ...xe(t)
});
class Go extends Re {
  _parse(e) {
    if (this._getType(e) !== te.symbol) {
      const r = this._getOrReturnCtx(e);
      return se(r, {
        code: W.invalid_type,
        expected: te.symbol,
        received: r.parsedType
      }), _e;
    }
    return ir(e.data);
  }
}
Go.create = (t) => new Go({
  typeName: pe.ZodSymbol,
  ...xe(t)
});
class bi extends Re {
  _parse(e) {
    if (this._getType(e) !== te.undefined) {
      const r = this._getOrReturnCtx(e);
      return se(r, {
        code: W.invalid_type,
        expected: te.undefined,
        received: r.parsedType
      }), _e;
    }
    return ir(e.data);
  }
}
bi.create = (t) => new bi({
  typeName: pe.ZodUndefined,
  ...xe(t)
});
class _i extends Re {
  _parse(e) {
    if (this._getType(e) !== te.null) {
      const r = this._getOrReturnCtx(e);
      return se(r, {
        code: W.invalid_type,
        expected: te.null,
        received: r.parsedType
      }), _e;
    }
    return ir(e.data);
  }
}
_i.create = (t) => new _i({
  typeName: pe.ZodNull,
  ...xe(t)
});
class Ds extends Re {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return ir(e.data);
  }
}
Ds.create = (t) => new Ds({
  typeName: pe.ZodAny,
  ...xe(t)
});
class Gn extends Re {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return ir(e.data);
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
      code: W.invalid_type,
      expected: te.never,
      received: r.parsedType
    }), _e;
  }
}
fn.create = (t) => new fn({
  typeName: pe.ZodNever,
  ...xe(t)
});
class Yo extends Re {
  _parse(e) {
    if (this._getType(e) !== te.undefined) {
      const r = this._getOrReturnCtx(e);
      return se(r, {
        code: W.invalid_type,
        expected: te.void,
        received: r.parsedType
      }), _e;
    }
    return ir(e.data);
  }
}
Yo.create = (t) => new Yo({
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
      }), _e;
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
      return Promise.all([...r.data].map((a, o) => s.type._parseAsync(new Hr(r, a, r.path, o)))).then((a) => Yt.mergeArray(n, a));
    const i = [...r.data].map((a, o) => s.type._parseSync(new Hr(r, a, r.path, o)));
    return Yt.mergeArray(n, i);
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
  if (t instanceof ft) {
    const e = {};
    for (const r in t.shape) {
      const n = t.shape[r];
      e[r] = un.create(bs(n));
    }
    return new ft({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof Rr ? new Rr({
      ...t._def,
      type: bs(t.element)
    }) : t instanceof un ? un.create(bs(t.unwrap())) : t instanceof ts ? ts.create(bs(t.unwrap())) : t instanceof Gr ? Gr.create(t.items.map((e) => bs(e))) : t;
}
class ft extends Re {
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
      }), _e;
    }
    const { status: r, ctx: n } = this._processInputParams(e), { shape: s, keys: i } = this._getCached(), a = [];
    if (!(this._def.catchall instanceof fn && this._def.unknownKeys === "strip"))
      for (const c in n.data)
        i.includes(c) || a.push(c);
    const o = [];
    for (const c of i) {
      const u = s[c], l = n.data[c];
      o.push({
        key: { status: "valid", value: c },
        value: u._parse(new Hr(n, l, n.path, c)),
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
            new Hr(n, l, n.path, u)
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
    }).then((c) => Yt.mergeObjectSync(r, c)) : Yt.mergeObjectSync(r, o);
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
    return bs(this);
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
    return jf(Je.objectKeys(this.shape));
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
      }), _e;
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
      }), _e;
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
const Ro = (t) => t instanceof xi ? Ro(t.schema) : t instanceof Mr ? Ro(t.innerType()) : t instanceof Ii ? [t.value] : t instanceof Nn ? t.options : t instanceof Oi ? Object.keys(t.enum) : t instanceof Ti ? Ro(t._def.innerType) : t instanceof bi ? [void 0] : t instanceof _i ? [null] : null;
class Ca extends Re {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== te.object)
      return se(r, {
        code: W.invalid_type,
        expected: te.object,
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
    }) : (se(r, {
      code: W.invalid_union_discriminator,
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
  const r = xn(t), n = xn(e);
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
      if (Tc(i) || Tc(a))
        return _e;
      const o = Pc(i.value, a.value);
      return o.valid ? ((Cc(i) || Cc(a)) && r.dirty(), { status: r.value, value: o.data }) : (se(n, {
        code: W.invalid_intersection_types
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
class Gr extends Re {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== te.array)
      return se(n, {
        code: W.invalid_type,
        expected: te.array,
        received: n.parsedType
      }), _e;
    if (n.data.length < this._def.items.length)
      return se(n, {
        code: W.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), _e;
    !this._def.rest && n.data.length > this._def.items.length && (se(n, {
      code: W.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const s = [...n.data].map((i, a) => {
      const o = this._def.items[a] || this._def.rest;
      return o ? o._parse(new Hr(n, i, n.path, a)) : null;
    }).filter((i) => !!i);
    return n.common.async ? Promise.all(s).then((i) => Yt.mergeArray(r, i)) : Yt.mergeArray(r, s);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new Gr({
      ...this._def,
      rest: e
    });
  }
}
Gr.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Gr({
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
      }), _e;
    const s = [], i = this._def.keyType, a = this._def.valueType;
    for (const o in n.data)
      s.push({
        key: i._parse(new Hr(n, o, n.path, o)),
        value: a._parse(new Hr(n, n.data[o], n.path, o))
      });
    return n.common.async ? Yt.mergeObjectAsync(r, s) : Yt.mergeObjectSync(r, s);
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
      keyType: Pr.create(),
      valueType: e,
      typeName: pe.ZodRecord,
      ...xe(r)
    });
  }
}
class Jo extends Re {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== te.map)
      return se(n, {
        code: W.invalid_type,
        expected: te.map,
        received: n.parsedType
      }), _e;
    const s = this._def.keyType, i = this._def.valueType, a = [...n.data.entries()].map(([o, c], u) => ({
      key: s._parse(new Hr(n, o, n.path, [u, "key"])),
      value: i._parse(new Hr(n, c, n.path, [u, "value"]))
    }));
    if (n.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of a) {
          const u = await c.key, l = await c.value;
          if (u.status === "aborted" || l.status === "aborted")
            return _e;
          (u.status === "dirty" || l.status === "dirty") && r.dirty(), o.set(u.value, l.value);
        }
        return { status: r.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const c of a) {
        const u = c.key, l = c.value;
        if (u.status === "aborted" || l.status === "aborted")
          return _e;
        (u.status === "dirty" || l.status === "dirty") && r.dirty(), o.set(u.value, l.value);
      }
      return { status: r.value, value: o };
    }
  }
}
Jo.create = (t, e, r) => new Jo({
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
        code: W.invalid_type,
        expected: te.set,
        received: n.parsedType
      }), _e;
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
          return _e;
        l.status === "dirty" && r.dirty(), u.add(l.value);
      }
      return { status: r.value, value: u };
    }
    const o = [...n.data.values()].map((c, u) => i._parse(new Hr(n, c, n.path, u)));
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
class Cs extends Re {
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
      }), _e;
    function n(o, c) {
      return Wo({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Ko(),
          mi
        ].filter((u) => !!u),
        issueData: {
          code: W.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function s(o, c) {
      return Wo({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Ko(),
          mi
        ].filter((u) => !!u),
        issueData: {
          code: W.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const i = { errorMap: r.common.contextualErrorMap }, a = r.data;
    return this._def.returns instanceof Us ? ir(async (...o) => {
      const c = new Nr([]), u = await this._def.args.parseAsync(o, i).catch((f) => {
        throw c.addIssue(n(o, f)), c;
      }), l = await a(...u);
      return await this._def.returns._def.type.parseAsync(l, i).catch((f) => {
        throw c.addIssue(s(l, f)), c;
      });
    }) : ir((...o) => {
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
    return new Cs({
      ...this._def,
      args: Gr.create(e).rest(Gn.create())
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
      args: e || Gr.create([]).rest(Gn.create()),
      returns: r || Gn.create(),
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
  typeName: pe.ZodLiteral,
  ...xe(e)
});
function jf(t, e) {
  return new Nn({
    values: t,
    typeName: pe.ZodEnum,
    ...xe(e)
  });
}
class Nn extends Re {
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return se(r, {
        expected: Je.joinValues(n),
        received: r.parsedType,
        code: W.invalid_type
      }), _e;
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return se(r, {
        received: r.data,
        code: W.invalid_enum_value,
        options: n
      }), _e;
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
    return Nn.create(e);
  }
  exclude(e) {
    return Nn.create(this.options.filter((r) => !e.includes(r)));
  }
}
Nn.create = jf;
class Oi extends Re {
  _parse(e) {
    const r = Je.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== te.string && n.parsedType !== te.number) {
      const s = Je.objectValues(r);
      return se(n, {
        expected: Je.joinValues(s),
        received: n.parsedType,
        code: W.invalid_type
      }), _e;
    }
    if (r.indexOf(e.data) === -1) {
      const s = Je.objectValues(r);
      return se(n, {
        received: n.data,
        code: W.invalid_enum_value,
        options: s
      }), _e;
    }
    return ir(e.data);
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
      }), _e;
    const n = r.parsedType === te.promise ? r.data : Promise.resolve(r.data);
    return ir(n.then((s) => this._def.type.parseAsync(s, {
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
        return o.status === "aborted" ? _e : (o.status === "dirty" && r.dirty(), a(o.value), { status: r.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => o.status === "aborted" ? _e : (o.status === "dirty" && r.dirty(), a(o.value).then(() => ({ status: r.value, value: o.value }))));
    }
    if (s.type === "transform")
      if (n.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!Bo(a))
          return a;
        const o = s.transform(a.value, i);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => Bo(a) ? Promise.resolve(s.transform(a.value, i)).then((o) => ({ status: r.value, value: o })) : a);
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
class un extends Re {
  _parse(e) {
    return this._getType(e) === te.undefined ? ir(void 0) : this._def.innerType._parse(e);
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
    return this._getType(e) === te.null ? ir(null) : this._def.innerType._parse(e);
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
class Xo extends Re {
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
    return Ho(s) ? s.then((i) => ({
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
Xo.create = (t, e) => new Xo({
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
        code: W.invalid_type,
        expected: te.nan,
        received: r.parsedType
      }), _e;
    }
    return { status: "valid", value: e.data };
  }
}
Qo.create = (t) => new Qo({
  typeName: pe.ZodNaN,
  ...xe(t)
});
const KS = Symbol("zod_brand");
class Lf extends Re {
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
        return s.status === "aborted" ? _e : s.status === "dirty" ? (r.dirty(), Af(s.value)) : this._def.out._parseAsync({
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
    return new io({
      in: e,
      out: r,
      typeName: pe.ZodPipeline
    });
  }
}
const Mf = (t, e = {}, r) => t ? Ds.create().superRefine((n, s) => {
  var i, a;
  if (!t(n)) {
    const o = typeof e == "function" ? e(n) : e, c = (a = (i = o.fatal) !== null && i !== void 0 ? i : r) !== null && a !== void 0 ? a : !0, u = typeof o == "string" ? { message: o } : o;
    s.addIssue({ code: "custom", ...u, fatal: c });
  }
}) : Ds.create(), WS = {
  object: ft.lazycreate
};
var pe;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline";
})(pe || (pe = {}));
const BS = (t, e = {
  message: `Input not instance of ${t.name}`
}) => Mf((r) => r instanceof t, e), Df = Pr.create, Uf = Pn.create, HS = Qo.create, GS = kn.create, zf = vi.create, YS = Qn.create, JS = Go.create, XS = bi.create, QS = _i.create, e5 = Ds.create, t5 = Gn.create, r5 = fn.create, n5 = Yo.create, s5 = Rr.create, i5 = ft.create, o5 = ft.strictCreate, a5 = wi.create, c5 = Ca.create, u5 = Ei.create, l5 = Gr.create, d5 = Si.create, h5 = Jo.create, f5 = es.create, p5 = Cs.create, g5 = xi.create, y5 = Ii.create, m5 = Nn.create, v5 = Oi.create, b5 = Us.create, Dd = Mr.create, _5 = un.create, w5 = ts.create, E5 = Mr.createWithPreprocess, S5 = io.create, x5 = () => Df().optional(), I5 = () => Uf().optional(), O5 = () => zf().optional(), T5 = {
  string: (t) => Pr.create({ ...t, coerce: !0 }),
  number: (t) => Pn.create({ ...t, coerce: !0 }),
  boolean: (t) => vi.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => kn.create({ ...t, coerce: !0 }),
  date: (t) => Qn.create({ ...t, coerce: !0 })
}, C5 = _e;
var zr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: mi,
  setErrorMap: RS,
  getErrorMap: Ko,
  makeIssue: Wo,
  EMPTY_PATH: AS,
  addIssueToContext: se,
  ParseStatus: Yt,
  INVALID: _e,
  DIRTY: Af,
  OK: ir,
  isAborted: Tc,
  isDirty: Cc,
  isValid: Bo,
  isAsync: Ho,
  get util() {
    return Je;
  },
  get objectUtil() {
    return Oc;
  },
  ZodParsedType: te,
  getParsedType: xn,
  ZodType: Re,
  ZodString: Pr,
  ZodNumber: Pn,
  ZodBigInt: kn,
  ZodBoolean: vi,
  ZodDate: Qn,
  ZodSymbol: Go,
  ZodUndefined: bi,
  ZodNull: _i,
  ZodAny: Ds,
  ZodUnknown: Gn,
  ZodNever: fn,
  ZodVoid: Yo,
  ZodArray: Rr,
  ZodObject: ft,
  ZodUnion: wi,
  ZodDiscriminatedUnion: Ca,
  ZodIntersection: Ei,
  ZodTuple: Gr,
  ZodRecord: Si,
  ZodMap: Jo,
  ZodSet: es,
  ZodFunction: Cs,
  ZodLazy: xi,
  ZodLiteral: Ii,
  ZodEnum: Nn,
  ZodNativeEnum: Oi,
  ZodPromise: Us,
  ZodEffects: Mr,
  ZodTransformer: Mr,
  ZodOptional: un,
  ZodNullable: ts,
  ZodDefault: Ti,
  ZodCatch: Xo,
  ZodNaN: Qo,
  BRAND: KS,
  ZodBranded: Lf,
  ZodPipeline: io,
  custom: Mf,
  Schema: Re,
  ZodSchema: Re,
  late: WS,
  get ZodFirstPartyTypeKind() {
    return pe;
  },
  coerce: T5,
  any: e5,
  array: s5,
  bigint: GS,
  boolean: zf,
  date: YS,
  discriminatedUnion: c5,
  effect: Dd,
  enum: m5,
  function: p5,
  instanceof: BS,
  intersection: u5,
  lazy: g5,
  literal: y5,
  map: h5,
  nan: HS,
  nativeEnum: v5,
  never: r5,
  null: QS,
  nullable: w5,
  number: Uf,
  object: i5,
  oboolean: O5,
  onumber: I5,
  optional: _5,
  ostring: x5,
  pipeline: S5,
  preprocess: E5,
  promise: b5,
  record: d5,
  set: f5,
  strictObject: o5,
  string: Df,
  symbol: JS,
  transformer: Dd,
  tuple: l5,
  undefined: XS,
  union: a5,
  unknown: t5,
  void: n5,
  NEVER: C5,
  ZodIssueCode: W,
  quotelessJson: NS,
  ZodError: Nr
});
const P5 = /^aleo1[a-z0-9]{58}$/i, k5 = /^AViewKey1[a-z0-9]{44}$/i, N5 = /^APrivateKey1[a-z0-9]{47}$/i, R5 = /^at1[a-z0-9]{58}$/i, A5 = /^\d+field$/, j5 = /^\d+u32$/, L5 = /^\d+u64$/;
zr.string().regex(P5);
zr.string().regex(k5);
zr.string().regex(N5);
zr.string().regex(R5);
zr.string().regex(A5);
zr.string().regex(j5);
zr.string().regex(L5);
var Ud;
(function(t) {
  t.Record = "record", t.OutputRecord = "outputRecord", t.Public = "public", t.Private = "private", t.Constant = "constant", t.Future = "future", t.ExternalRecord = "external_record";
})(Ud || (Ud = {}));
var kc;
(function(t) {
  t.Deploy = "Deploy", t.Execute = "Execute", t.Send = "Send", t.Receive = "Receive", t.Join = "Join", t.Split = "Split", t.Shield = "Shield", t.Unshield = "Unshield";
})(kc || (kc = {}));
var Nc;
(function(t) {
  t.Creating = "Creating", t.Pending = "Pending", t.Settled = "Settled", t.Failed = "Failed";
})(Nc || (Nc = {}));
var Rc;
(function(t) {
  t.Private = "Private", t.Public = "Public";
})(Rc || (Rc = {}));
var Ac;
(function(t) {
  t.AleoTestnet = "AleoTestnet", t.AleoMainnet = "AleoMainnet";
})(Ac || (Ac = {}));
var zd;
(function(t) {
  t[t.ALEO = 0] = "ALEO";
})(zd || (zd = {}));
zr.nativeEnum(kc);
zr.nativeEnum(Nc);
zr.nativeEnum(Ac);
zr.nativeEnum(Rc);
var jc = { exports: {} }, Ya, $d;
function M5() {
  if ($d)
    return Ya;
  $d = 1;
  var t = 1e3, e = t * 60, r = e * 60, n = r * 24, s = n * 7, i = n * 365.25;
  Ya = function(l, f) {
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
    var _ = f >= p * 1.5;
    return Math.round(l / p) + " " + m + (_ ? "s" : "");
  }
  return Ya;
}
function D5(t) {
  r.debug = r, r.default = r, r.coerce = c, r.disable = i, r.enable = s, r.enabled = a, r.humanize = M5(), r.destroy = u, Object.keys(t).forEach((l) => {
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
    let f, p = null, m, _;
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
      get: () => p !== null ? p : (m !== r.namespaces && (m = r.namespaces, _ = r.enabled(l)), _),
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
var U5 = D5;
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
  t.exports = U5(e);
  const { formatters: o } = t.exports;
  o.j = function(c) {
    try {
      return JSON.stringify(c);
    } catch (u) {
      return "[UnexpectedJSONParseError]: " + u.message;
    }
  };
})(jc, jc.exports);
var z5 = jc.exports;
const $5 = /* @__PURE__ */ ga(z5), Pa = $5("wallet:sdk");
Pa.enabled = !0;
function U6() {
  const e = !!Sr(), { data: r, error: n, loading: s, setData: i, setError: a, setLoading: o } = ou(), [c] = hn((l) => [l.setAccount]);
  async function u() {
    try {
      o(!0), a(void 0);
      const f = await (await Nf()).connect({
        requiredNamespaces: {
          aleo: {
            methods: oS,
            chains: Pf,
            events: aS
          }
        }
      });
      i(f);
      const p = f.namespaces.aleo.accounts[0].split(":");
      return c({
        network: p[0],
        chainId: p[1],
        address: p[2],
        shortenedAddress: tc(p[2])
      }), kf.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), f;
    } catch (l) {
      throw a(l), l;
    } finally {
      o(!1);
    }
  }
  return { data: r, error: n, loading: s, isConnected: e, connect: u };
}
const z6 = () => {
  const t = Sr(), { request: e, data: r, error: n, loading: s } = Yi({
    topic: (t == null ? void 0 : t.topic) ?? "",
    chainId: "aleo:3",
    request: {
      jsonrpc: "2.0",
      method: "createSharedState",
      params: {}
    }
  }), i = n ? n.message : r && r.error, a = r;
  return { createSharedState: () => {
    t && !s && e();
  }, data: a == null ? void 0 : a.data, loading: s, error: i };
}, $6 = (t) => {
  Pa("useDecrypt", t);
  const e = Sr(), { request: r, data: n, error: s, loading: i } = Yi({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:3",
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
function V6() {
  const t = Sr(), [e] = hn((o) => [o.onDisconnect]), { error: r, loading: n, setError: s, setLoading: i } = ou();
  async function a() {
    if (!t || n) {
      t || e();
      return;
    }
    try {
      i(!0), s(void 0);
      try {
        await (await Nf()).disconnect({
          topic: t.topic,
          reason: su("USER_DISCONNECTED")
        }), kf.emit("session_change");
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
const q6 = ({ id: t, address: e, multisig: r = !1 }) => {
  const n = Sr(), [s] = hn((E) => [E.account]), i = t !== void 0 && t !== "" && !!n && !!s && (r ? !!e : !0), { refetch: a, data: o, error: c, isLoading: u } = Gi({
    queryKey: ["useEvent", s == null ? void 0 : s.address, e, r, t, n == null ? void 0 : n.topic],
    enabled: i,
    wcParams: {
      topic: n == null ? void 0 : n.topic,
      chainId: "aleo:3",
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
  }, p = c ? c.message : o && o.error, m = o, _ = m == null ? void 0 : m.event;
  return { fetchEvent: f, event: _, error: p, loading: u };
}, Z6 = ({ filter: t, page: e }) => {
  const r = Sr(), [n] = hn((_) => [_.account]);
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const { refetch: s, data: i, error: a, isLoading: o } = Gi({
    queryKey: ["useEvents", n == null ? void 0 : n.address, t, e, r == null ? void 0 : r.topic],
    enabled: !!r && !!n,
    wcParams: {
      topic: (r == null ? void 0 : r.topic) ?? "",
      chainId: "aleo:3",
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
  Hi(({ id: _, params: E, topic: T }) => {
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
}, F6 = (t) => {
  const e = Sr(), { request: r, data: n, error: s, loading: i } = Yi({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:3",
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
}, K6 = (t) => {
  try {
    return JSON.stringify(t, null, 2).replaceAll('"', "") ?? "";
  } catch {
    return "";
  }
}, W6 = ({ address: t, multisig: e = !1, filter: r, page: n }) => {
  const s = Sr(), [i] = hn((T) => [
    T.account
  ]), { refetch: a, data: o, error: c, isLoading: u } = Gi({
    queryKey: ["useRecords", i == null ? void 0 : i.address, t, e, r, n, s == null ? void 0 : s.topic],
    enabled: (e ? !!t : !0) && !!s && !!i,
    wcParams: {
      topic: s == null ? void 0 : s.topic,
      chainId: "aleo:3",
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
  }, p = c ? c.message : o && o.error, m = o, _ = m == null ? void 0 : m.records, E = (m == null ? void 0 : m.pageCount) ?? 0;
  return { fetchPage: f, records: _, error: p, loading: u, page: n, pageCount: E };
}, B6 = (t) => {
  const e = Sr(), r = t == null ? void 0 : t.inputs.map((l) => typeof l == "string" ? l : l.plaintext), { request: n, data: s, error: i, loading: a } = Yi({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:3",
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
var Lc;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(Lc || (Lc = {}));
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
]), V5 = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
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
const Ci = (t, e) => {
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
let $f = Ci;
function q5(t) {
  $f = t;
}
function ea() {
  return $f;
}
const ta = (t) => {
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
}, Z5 = [];
function ie(t, e) {
  const r = ta({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      ea(),
      Ci
      // then global default map
    ].filter((n) => !!n)
  });
  t.common.issues.push(r);
}
class Jt {
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
    return Jt.mergeObjectSync(e, n);
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
}), Vf = (t) => ({ status: "dirty", value: t }), or = (t) => ({ status: "valid", value: t }), Mc = (t) => t.status === "aborted", Dc = (t) => t.status === "dirty", ra = (t) => t.status === "valid", na = (t) => typeof Promise < "u" && t instanceof Promise;
var ue;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(ue || (ue = {}));
class Yr {
  constructor(e, r, n, s) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = n, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Vd = (t, e) => {
  if (ra(e))
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
      status: new Jt(),
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
    if (na(r))
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
      parsedType: In(e)
    }, s = this._parse({ data: e, path: n.path, parent: n }), i = await (na(s) ? s : Promise.resolve(s));
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
    return ln.create(this, this._def);
  }
  nullable() {
    return ss.create(this, this._def);
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
    return new Zf({
      typeName: ge.ZodBranded,
      type: this,
      ...Ie(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new aa({
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
const F5 = /^c[^\s-]{8,}$/i, K5 = /^[a-z][a-z0-9]*$/, W5 = /[0-9A-HJKMNP-TV-Z]{26}/, B5 = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, H5 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, G5 = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u"), Y5 = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, J5 = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, X5 = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function Q5(t, e) {
  return !!((e === "v4" || !e) && Y5.test(t) || (e === "v6" || !e) && J5.test(t));
}
class kr extends Ae {
  constructor() {
    super(...arguments), this._regex = (e, r, n) => this.refinement((s) => e.test(s), {
      validation: r,
      code: B.invalid_string,
      ...ue.errToObj(n)
    }), this.nonempty = (e) => this.min(1, ue.errToObj(e)), this.trim = () => new kr({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new kr({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new kr({
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
    const n = new Jt();
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
        H5.test(e.data) || (s = this._getOrReturnCtx(e, s), ie(s, {
          validation: "email",
          code: B.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "emoji")
        G5.test(e.data) || (s = this._getOrReturnCtx(e, s), ie(s, {
          validation: "emoji",
          code: B.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "uuid")
        B5.test(e.data) || (s = this._getOrReturnCtx(e, s), ie(s, {
          validation: "uuid",
          code: B.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "cuid")
        F5.test(e.data) || (s = this._getOrReturnCtx(e, s), ie(s, {
          validation: "cuid",
          code: B.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "cuid2")
        K5.test(e.data) || (s = this._getOrReturnCtx(e, s), ie(s, {
          validation: "cuid2",
          code: B.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "ulid")
        W5.test(e.data) || (s = this._getOrReturnCtx(e, s), ie(s, {
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
        }), n.dirty()) : i.kind === "datetime" ? X5(i).test(e.data) || (s = this._getOrReturnCtx(e, s), ie(s, {
          code: B.invalid_string,
          validation: "datetime",
          message: i.message
        }), n.dirty()) : i.kind === "ip" ? Q5(e.data, i.version) || (s = this._getOrReturnCtx(e, s), ie(s, {
          validation: "ip",
          code: B.invalid_string,
          message: i.message
        }), n.dirty()) : Xe.assertNever(i);
    return { status: n.value, value: e.data };
  }
  _addCheck(e) {
    return new kr({
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
kr.create = (t) => {
  var e;
  return new kr({
    checks: [],
    typeName: ge.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...Ie(t)
  });
};
function ex(t, e) {
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
        code: B.invalid_type,
        expected: re.number,
        received: i.parsedType
      }), ve;
    }
    let n;
    const s = new Jt();
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
      }), s.dirty()) : i.kind === "multipleOf" ? ex(e.data, i.value) !== 0 && (n = this._getOrReturnCtx(e, n), ie(n, {
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
        code: B.invalid_type,
        expected: re.bigint,
        received: i.parsedType
      }), ve;
    }
    let n;
    const s = new Jt();
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
class Pi extends Ae {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== re.boolean) {
      const n = this._getOrReturnCtx(e);
      return ie(n, {
        code: B.invalid_type,
        expected: re.boolean,
        received: n.parsedType
      }), ve;
    }
    return or(e.data);
  }
}
Pi.create = (t) => new Pi({
  typeName: ge.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...Ie(t)
});
class rs extends Ae {
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
    const n = new Jt();
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
class sa extends Ae {
  _parse(e) {
    if (this._getType(e) !== re.symbol) {
      const n = this._getOrReturnCtx(e);
      return ie(n, {
        code: B.invalid_type,
        expected: re.symbol,
        received: n.parsedType
      }), ve;
    }
    return or(e.data);
  }
}
sa.create = (t) => new sa({
  typeName: ge.ZodSymbol,
  ...Ie(t)
});
class ki extends Ae {
  _parse(e) {
    if (this._getType(e) !== re.undefined) {
      const n = this._getOrReturnCtx(e);
      return ie(n, {
        code: B.invalid_type,
        expected: re.undefined,
        received: n.parsedType
      }), ve;
    }
    return or(e.data);
  }
}
ki.create = (t) => new ki({
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
    return or(e.data);
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
    return or(e.data);
  }
}
zs.create = (t) => new zs({
  typeName: ge.ZodAny,
  ...Ie(t)
});
class Yn extends Ae {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return or(e.data);
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
      code: B.invalid_type,
      expected: re.never,
      received: r.parsedType
    }), ve;
  }
}
pn.create = (t) => new pn({
  typeName: ge.ZodNever,
  ...Ie(t)
});
class ia extends Ae {
  _parse(e) {
    if (this._getType(e) !== re.undefined) {
      const n = this._getOrReturnCtx(e);
      return ie(n, {
        code: B.invalid_type,
        expected: re.void,
        received: n.parsedType
      }), ve;
    }
    return or(e.data);
  }
}
ia.create = (t) => new ia({
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
      return Promise.all([...r.data].map((a, o) => s.type._parseAsync(new Yr(r, a, r.path, o)))).then((a) => Jt.mergeArray(n, a));
    const i = [...r.data].map((a, o) => s.type._parseSync(new Yr(r, a, r.path, o)));
    return Jt.mergeArray(n, i);
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
    return t instanceof jr ? new jr({
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
    if (!(this._def.catchall instanceof pn && this._def.unknownKeys === "strip"))
      for (const u in s.data)
        a.includes(u) || o.push(u);
    const c = [];
    for (const u of a) {
      const l = i[u], f = s.data[u];
      c.push({
        key: { status: "valid", value: u },
        value: l._parse(new Yr(s, f, s.path, u)),
        alwaysSet: u in s.data
      });
    }
    if (this._def.catchall instanceof pn) {
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
            new Yr(s, f, s.path, l)
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
    }).then((u) => Jt.mergeObjectSync(n, u)) : Jt.mergeObjectSync(n, c);
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
    return Xe.objectKeys(e).forEach((n) => {
      e[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new pt({
      ...this._def,
      shape: () => r
    });
  }
  omit(e) {
    const r = {};
    return Xe.objectKeys(this.shape).forEach((n) => {
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
    return Xe.objectKeys(this.shape).forEach((n) => {
      const s = this.shape[n];
      e && !e[n] ? r[n] = s : r[n] = s.optional();
    }), new pt({
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
    return qf(Xe.objectKeys(this.shape));
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
const Ao = (t) => t instanceof Li ? Ao(t.schema) : t instanceof Dr ? Ao(t.innerType()) : t instanceof Mi ? [t.value] : t instanceof jn ? t.options : t instanceof Di ? Object.keys(t.enum) : t instanceof Ui ? Ao(t._def.innerType) : t instanceof ki ? [void 0] : t instanceof Ni ? [null] : null;
class ka extends Ae {
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
    return new ka({
      typeName: ge.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: s,
      ...Ie(n)
    });
  }
}
function Uc(t, e) {
  const r = In(t), n = In(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === re.object && n === re.object) {
    const s = Xe.objectKeys(e), i = Xe.objectKeys(t).filter((o) => s.indexOf(o) !== -1), a = { ...t, ...e };
    for (const o of i) {
      const c = Uc(t[o], e[o]);
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
      const a = t[i], o = e[i], c = Uc(a, o);
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
      if (Mc(i) || Mc(a))
        return ve;
      const o = Uc(i.value, a.value);
      return o.valid ? ((Dc(i) || Dc(a)) && r.dirty(), { status: r.value, value: o.data }) : (ie(n, {
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
class Jr extends Ae {
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
      return c ? c._parse(new Yr(n, a, n.path, o)) : null;
    }).filter((a) => !!a);
    return n.common.async ? Promise.all(i).then((a) => Jt.mergeArray(r, a)) : Jt.mergeArray(r, i);
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
        key: i._parse(new Yr(n, o, n.path, o)),
        value: a._parse(new Yr(n, n.data[o], n.path, o))
      });
    return n.common.async ? Jt.mergeObjectAsync(r, s) : Jt.mergeObjectSync(r, s);
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
      keyType: kr.create(),
      valueType: e,
      typeName: ge.ZodRecord,
      ...Ie(r)
    });
  }
}
class oa extends Ae {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== re.map)
      return ie(n, {
        code: B.invalid_type,
        expected: re.map,
        received: n.parsedType
      }), ve;
    const s = this._def.keyType, i = this._def.valueType, a = [...n.data.entries()].map(([o, c], u) => ({
      key: s._parse(new Yr(n, o, n.path, [u, "key"])),
      value: i._parse(new Yr(n, c, n.path, [u, "value"]))
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
oa.create = (t, e, r) => new oa({
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
    const o = [...n.data.values()].map((c, u) => i._parse(new Yr(n, c, n.path, u)));
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
class Ps extends Ae {
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
      return ta({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          ea(),
          Ci
        ].filter((u) => !!u),
        issueData: {
          code: B.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function s(o, c) {
      return ta({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          ea(),
          Ci
        ].filter((u) => !!u),
        issueData: {
          code: B.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const i = { errorMap: r.common.contextualErrorMap }, a = r.data;
    return this._def.returns instanceof $s ? or(async (...o) => {
      const c = new Ar([]), u = await this._def.args.parseAsync(o, i).catch((p) => {
        throw c.addIssue(n(o, p)), c;
      }), l = await a(...u);
      return await this._def.returns._def.type.parseAsync(l, i).catch((p) => {
        throw c.addIssue(s(l, p)), c;
      });
    }) : or((...o) => {
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
    return new Ps({
      ...this._def,
      args: Jr.create(e).rest(Yn.create())
    });
  }
  returns(e) {
    return new Ps({
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
    return new Ps({
      args: e || Jr.create([]).rest(Yn.create()),
      returns: r || Yn.create(),
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
function qf(t, e) {
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
    return or(e.data);
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
jn.create = qf;
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
    return or(e.data);
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
    return or(n.then((s) => this._def.type.parseAsync(s, {
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
        if (!ra(a))
          return a;
        const o = s.transform(a.value, i);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => ra(a) ? Promise.resolve(s.transform(a.value, i)).then((o) => ({ status: r.value, value: o })) : a);
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
class ln extends Ae {
  _parse(e) {
    return this._getType(e) === re.undefined ? or(void 0) : this._def.innerType._parse(e);
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
    return this._getType(e) === re.null ? or(null) : this._def.innerType._parse(e);
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
class aa extends Ae {
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
    return na(s) ? s.then((i) => ({
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
aa.create = (t, e) => new aa({
  innerType: t,
  typeName: ge.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...Ie(e)
});
class ca extends Ae {
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
ca.create = (t) => new ca({
  typeName: ge.ZodNaN,
  ...Ie(t)
});
const tx = Symbol("zod_brand");
class Zf extends Ae {
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
        return i.status === "aborted" ? ve : i.status === "dirty" ? (r.dirty(), Vf(i.value)) : this._def.out._parseAsync({
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
const Ff = (t, e = {}, r) => t ? zs.create().superRefine((n, s) => {
  var i, a;
  if (!t(n)) {
    const o = typeof e == "function" ? e(n) : e, c = (a = (i = o.fatal) !== null && i !== void 0 ? i : r) !== null && a !== void 0 ? a : !0, u = typeof o == "string" ? { message: o } : o;
    s.addIssue({ code: "custom", ...u, fatal: c });
  }
}) : zs.create(), rx = {
  object: pt.lazycreate
};
var ge;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline";
})(ge || (ge = {}));
const nx = (t, e = {
  message: `Input not instance of ${t.name}`
}) => Ff((r) => r instanceof t, e), Kf = kr.create, Wf = Rn.create, sx = ca.create, ix = An.create, Bf = Pi.create, ox = rs.create, ax = sa.create, cx = ki.create, ux = Ni.create, lx = zs.create, dx = Yn.create, hx = pn.create, fx = ia.create, px = jr.create, gx = pt.create, yx = pt.strictCreate, mx = Ri.create, vx = ka.create, bx = Ai.create, _x = Jr.create, wx = ji.create, Ex = oa.create, Sx = ns.create, xx = Ps.create, Ix = Li.create, Ox = Mi.create, Tx = jn.create, Cx = Di.create, Px = $s.create, qd = Dr.create, kx = ln.create, Nx = ss.create, Rx = Dr.createWithPreprocess, Ax = oo.create, jx = () => Kf().optional(), Lx = () => Wf().optional(), Mx = () => Bf().optional(), Dx = {
  string: (t) => kr.create({ ...t, coerce: !0 }),
  number: (t) => Rn.create({ ...t, coerce: !0 }),
  boolean: (t) => Pi.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => An.create({ ...t, coerce: !0 }),
  date: (t) => rs.create({ ...t, coerce: !0 })
}, Ux = ve;
var $r = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Ci,
  setErrorMap: q5,
  getErrorMap: ea,
  makeIssue: ta,
  EMPTY_PATH: Z5,
  addIssueToContext: ie,
  ParseStatus: Jt,
  INVALID: ve,
  DIRTY: Vf,
  OK: or,
  isAborted: Mc,
  isDirty: Dc,
  isValid: ra,
  isAsync: na,
  get util() {
    return Xe;
  },
  get objectUtil() {
    return Lc;
  },
  ZodParsedType: re,
  getParsedType: In,
  ZodType: Ae,
  ZodString: kr,
  ZodNumber: Rn,
  ZodBigInt: An,
  ZodBoolean: Pi,
  ZodDate: rs,
  ZodSymbol: sa,
  ZodUndefined: ki,
  ZodNull: Ni,
  ZodAny: zs,
  ZodUnknown: Yn,
  ZodNever: pn,
  ZodVoid: ia,
  ZodArray: jr,
  ZodObject: pt,
  ZodUnion: Ri,
  ZodDiscriminatedUnion: ka,
  ZodIntersection: Ai,
  ZodTuple: Jr,
  ZodRecord: ji,
  ZodMap: oa,
  ZodSet: ns,
  ZodFunction: Ps,
  ZodLazy: Li,
  ZodLiteral: Mi,
  ZodEnum: jn,
  ZodNativeEnum: Di,
  ZodPromise: $s,
  ZodEffects: Dr,
  ZodTransformer: Dr,
  ZodOptional: ln,
  ZodNullable: ss,
  ZodDefault: Ui,
  ZodCatch: aa,
  ZodNaN: ca,
  BRAND: tx,
  ZodBranded: Zf,
  ZodPipeline: oo,
  custom: Ff,
  Schema: Ae,
  ZodSchema: Ae,
  late: rx,
  get ZodFirstPartyTypeKind() {
    return ge;
  },
  coerce: Dx,
  any: lx,
  array: px,
  bigint: ix,
  boolean: Bf,
  date: ox,
  discriminatedUnion: vx,
  effect: qd,
  enum: Tx,
  function: xx,
  instanceof: nx,
  intersection: bx,
  lazy: Ix,
  literal: Ox,
  map: Ex,
  nan: sx,
  nativeEnum: Cx,
  never: hx,
  null: ux,
  nullable: Nx,
  number: Wf,
  object: gx,
  oboolean: Mx,
  onumber: Lx,
  optional: kx,
  ostring: jx,
  pipeline: Ax,
  preprocess: Rx,
  promise: Px,
  record: wx,
  set: Sx,
  strictObject: yx,
  string: Kf,
  symbol: ax,
  transformer: qd,
  tuple: _x,
  undefined: cx,
  union: mx,
  unknown: dx,
  void: fx,
  NEVER: Ux,
  ZodIssueCode: B,
  quotelessJson: V5,
  ZodError: Ar
});
const Nu = /^aleo1[a-z0-9]{58}$/i, zx = /^AViewKey1[a-z0-9]{44}$/i, $x = /^APrivateKey1[a-z0-9]{47}$/i, Vx = /^at1[a-z0-9]{58}$/i, qx = /^\d+field$/, Zx = /^\d+u32$/, Fx = /^\d+u64$/, H6 = $r.string().regex(Nu), G6 = $r.string().regex(zx), Y6 = $r.string().regex($x), J6 = $r.string().regex(Vx), X6 = $r.string().regex(qx), Q6 = $r.string().regex(Zx), e3 = $r.string().regex(Fx);
var Zd;
(function(t) {
  t.Record = "record", t.OutputRecord = "outputRecord", t.Public = "public", t.Private = "private", t.Constant = "constant", t.Future = "future", t.ExternalRecord = "external_record";
})(Zd || (Zd = {}));
var zc;
(function(t) {
  t.Deploy = "Deploy", t.Execute = "Execute", t.Send = "Send", t.Receive = "Receive", t.Join = "Join", t.Split = "Split", t.Shield = "Shield", t.Unshield = "Unshield";
})(zc || (zc = {}));
var $c;
(function(t) {
  t.Creating = "Creating", t.Pending = "Pending", t.Settled = "Settled", t.Failed = "Failed";
})($c || ($c = {}));
var Vc;
(function(t) {
  t.Private = "Private", t.Public = "Public";
})(Vc || (Vc = {}));
var qc;
(function(t) {
  t.AleoTestnet = "AleoTestnet", t.AleoMainnet = "AleoMainnet";
})(qc || (qc = {}));
var Fd;
(function(t) {
  t[t.ALEO = 0] = "ALEO";
})(Fd || (Fd = {}));
const t3 = $r.nativeEnum(zc), r3 = $r.nativeEnum($c), n3 = $r.nativeEnum(qc), s3 = $r.nativeEnum(Vc), Hf = ug("wallet:sdk");
Hf.enabled = !0;
const i3 = (t, e) => {
  const r = Sr(), { request: n, data: s, error: i, loading: a } = Yi({
    topic: (r == null ? void 0 : r.topic) ?? "",
    chainId: "aleo:3",
    request: {
      jsonrpc: "2.0",
      method: "requestSignature",
      params: {
        message: t,
        address: Nu.test(e ?? "") ? e : void 0
      }
    }
  }), o = i ? i.message : s && s.error;
  return { requestSignature: () => {
    r && !a && (Hf("useRequestSignature requesting...", [t, e]), n());
  }, response: s, loading: a, error: o };
};
var Zc = { exports: {} }, ii = {};
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
function Kx() {
  if (Kd)
    return ii;
  Kd = 1;
  var t = nh, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
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
function Wx() {
  return Wd || (Wd = 1, process.env.NODE_ENV !== "production" && function() {
    var t = nh, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), _ = Symbol.iterator, E = "@@iterator";
    function T(S) {
      if (S === null || typeof S != "object")
        return null;
      var U = _ && S[_] || S[E];
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
    var w = !1, x = !1, y = !1, d = !1, g = !1, k;
    k = Symbol.for("react.module.reference");
    function N(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === n || S === i || g || S === s || S === u || S === l || d || S === m || w || x || y || typeof S == "object" && S !== null && (S.$$typeof === p || S.$$typeof === f || S.$$typeof === a || S.$$typeof === o || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === k || S.getModuleId !== void 0));
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
    var C = Object.assign, A = 0, Q, Z, $, q, z, F, ye;
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
            log: C({}, S, {
              value: Q
            }),
            info: C({}, S, {
              value: Z
            }),
            warn: C({}, S, {
              value: $
            }),
            error: C({}, S, {
              value: q
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
    var P = !1, h;
    {
      var I = typeof WeakMap == "function" ? WeakMap : Map;
      h = new I();
    }
    function H(S, U) {
      if (!S || P)
        return "";
      {
        var X = h.get(S);
        if (X !== void 0)
          return X;
      }
      var fe;
      P = !0;
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
`), Ut = fe.stack.split(`
`), dt = De.length - 1, vt = Ut.length - 1; dt >= 1 && vt >= 0 && De[dt] !== Ut[vt]; )
            vt--;
          for (; dt >= 1 && vt >= 0; dt--, vt--)
            if (De[dt] !== Ut[vt]) {
              if (dt !== 1 || vt !== 1)
                do
                  if (dt--, vt--, vt < 0 || De[dt] !== Ut[vt]) {
                    var Pt = `
` + De[dt].replace(" at new ", " at ");
                    return S.displayName && Pt.includes("<anonymous>") && (Pt = Pt.replace("<anonymous>", S.displayName)), typeof S == "function" && h.set(S, Pt), Pt;
                  }
                while (dt >= 1 && vt >= 0);
              break;
            }
        }
      } finally {
        P = !1, le.current = $e, ne(), Error.prepareStackTrace = Be;
      }
      var mn = S ? S.displayName || S.name : "", ao = mn ? j(mn) : "";
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
                var Ut = Error((fe || "React class") + ": " + X + " type `" + qe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[qe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ut.name = "Invariant Violation", Ut;
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
    function ke(S) {
      {
        var U = typeof Symbol == "function" && Symbol.toStringTag, X = U && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return X;
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
    function be(S) {
      if (Ce(S))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ke(S)), we(S);
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
        var $e, qe = {}, De = null, Ut = null;
        X !== void 0 && (be(X), De = "" + X), He(U) && (be(U.key), De = "" + U.key), Fe(U) && (Ut = U.ref, Ge(U, Be));
        for ($e in U)
          Oe.call(U, $e) && !Ne.hasOwnProperty($e) && (qe[$e] = U[$e]);
        if (S && S.defaultProps) {
          var dt = S.defaultProps;
          for ($e in dt)
            qe[$e] === void 0 && (qe[$e] = dt[$e]);
        }
        if (De || Ut) {
          var vt = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          De && We(qe, vt), Ut && hr(qe, vt);
        }
        return vr(S, De, Ut, Be, fe, he.current, qe);
      }
    }
    var Dt = M.ReactCurrentOwner, qr = M.ReactDebugCurrentFrame;
    function br(S) {
      if (S) {
        var U = S._owner, X = Le(S.type, S._source, U ? U.type : null);
        qr.setExtraStackFrame(X);
      } else
        qr.setExtraStackFrame(null);
    }
    var yn;
    yn = !1;
    function ct(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function st() {
      {
        if (Dt.current) {
          var S = Y(Dt.current.type);
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
          var U = S.fileName.replace(/^.*[\\\/]/, ""), X = S.lineNumber;
          return `

Check your code at ` + U + ":" + X + ".";
        }
        return "";
      }
    }
    var lt = {};
    function yt(S) {
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
        var X = yt(U);
        if (lt[X])
          return;
        lt[X] = !0;
        var fe = "";
        S && S._owner && S._owner !== Dt.current && (fe = " It was passed a child from " + Y(S._owner.type) + "."), br(S), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', X, fe), br(null);
      }
    }
    function Et(S, U) {
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
    function Ot(S) {
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
        } else if (U.PropTypes !== void 0 && !yn) {
          yn = !0;
          var Be = Y(U);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Be || "Unknown");
        }
        typeof U.getDefaultProps == "function" && !U.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tt(S) {
      {
        for (var U = Object.keys(S.props), X = 0; X < U.length; X++) {
          var fe = U[X];
          if (fe !== "children" && fe !== "key") {
            br(S), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", fe), br(null);
            break;
          }
        }
        S.ref !== null && (br(S), v("Invalid attribute `ref` supplied to `React.Fragment`."), br(null));
      }
    }
    function St(S, U, X, fe, Be, $e) {
      {
        var qe = N(S);
        if (!qe) {
          var De = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (De += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ut = gt(Be);
          Ut ? De += Ut : De += st();
          var dt;
          S === null ? dt = "null" : Te(S) ? dt = "array" : S !== void 0 && S.$$typeof === e ? (dt = "<" + (Y(S.type) || "Unknown") + " />", De = " Did you accidentally export a JSX literal instead of a component?") : dt = typeof S, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", dt, De);
        }
        var vt = Vr(S, U, X, Be, $e);
        if (vt == null)
          return vt;
        if (qe) {
          var Pt = U.children;
          if (Pt !== void 0)
            if (fe)
              if (Te(Pt)) {
                for (var mn = 0; mn < Pt.length; mn++)
                  Et(Pt[mn], S);
                Object.freeze && Object.freeze(Pt);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Et(Pt, S);
        }
        return S === n ? Tt(vt) : Ot(vt), vt;
      }
    }
    function Ct(S, U, X) {
      return St(S, U, X, !0);
    }
    function xt(S, U, X) {
      return St(S, U, X, !1);
    }
    var mt = xt, rt = Ct;
    oi.Fragment = n, oi.jsx = mt, oi.jsxs = rt;
  }()), oi;
}
process.env.NODE_ENV === "production" ? Zc.exports = Kx() : Zc.exports = Wx();
var Fc = Zc.exports, Ee = {
  context: void 0,
  registry: void 0
};
function ui(t) {
  Ee.context = t;
}
var Bx = (t, e) => t === e, ua = Symbol("solid-proxy"), Gf = Symbol("solid-track"), la = {
  equals: Bx
}, Yf = rp, gn = 1, da = 2, Jf = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
}, Ja = {}, Ye = null, Xa = null, Hx = null, Qe = null, Gt = null, dn = null, Na = 0;
function Jn(t, e) {
  const r = Qe, n = Ye, s = t.length === 0, i = e === void 0 ? n : e, a = s ? Jf : {
    owned: null,
    cleanups: null,
    context: i ? i.context : null,
    owner: i
  }, o = s ? t : () => t(() => Mt(() => Aa(a)));
  Ye = a, Qe = null;
  try {
    return Xr(o, !0);
  } finally {
    Qe = r, Ye = n;
  }
}
function rr(t, e) {
  e = e ? Object.assign({}, la, e) : la;
  const r = {
    value: t,
    observers: null,
    observerSlots: null,
    comparator: e.equals || void 0
  }, n = (s) => (typeof s == "function" && (s = s(r.value)), tp(r, s));
  return [ep.bind(r), n];
}
function Bd(t, e, r) {
  const n = Ra(t, e, !0, gn);
  Gs(n);
}
function Xn(t, e, r) {
  const n = Ra(t, e, !1, gn);
  Gs(n);
}
function Xf(t, e, r) {
  Yf = sI;
  const n = Ra(t, e, !1, gn);
  (!r || !r.render) && (n.user = !0), dn ? dn.push(n) : Gs(n);
}
function dr(t, e, r) {
  r = r ? Object.assign({}, la, r) : la;
  const n = Ra(t, e, !0, 0);
  return n.observers = null, n.observerSlots = null, n.comparator = r.equals || void 0, Gs(n), ep.bind(n);
}
function Gx(t) {
  return t && typeof t == "object" && "then" in t;
}
function Yx(t, e, r) {
  let n, s, i;
  arguments.length === 2 && typeof e == "object" || arguments.length === 1 ? (n = !0, s = t, i = e || {}) : (n = t, s = e, i = r || {});
  let a = null, o = Ja, c = null, u = !1, l = "initialValue" in i, f = typeof n == "function" && dr(n);
  const p = /* @__PURE__ */ new Set(), [m, _] = (i.storage || rr)(i.initialValue), [E, T] = rr(void 0), [M, v] = rr(void 0, {
    equals: !1
  }), [O, w] = rr(l ? "ready" : "unresolved");
  if (Ee.context) {
    c = `${Ee.context.id}${Ee.context.count++}`;
    let k;
    i.ssrLoadFrom === "initial" ? o = i.initialValue : Ee.load && (k = Ee.load(c)) && (o = k);
  }
  function x(k, N, D, G) {
    return a === k && (a = null, G !== void 0 && (l = !0), (k === o || N === o) && i.onHydrated && queueMicrotask(() => i.onHydrated(G, {
      value: N
    })), o = Ja, y(N, D)), N;
  }
  function y(k, N) {
    Xr(() => {
      N === void 0 && _(() => k), w(N !== void 0 ? "errored" : l ? "ready" : "unresolved"), T(N);
      for (const D of p.keys())
        D.decrement();
      p.clear();
    }, !1);
  }
  function d() {
    const k = tI, N = m(), D = E();
    if (D !== void 0 && !a)
      throw D;
    return Qe && !Qe.user && k && Bd(() => {
      M(), a && (k.resolved || p.has(k) || (k.increment(), p.add(k)));
    }), N;
  }
  function g(k = !0) {
    if (k !== !1 && u)
      return;
    u = !1;
    const N = f ? f() : n;
    if (N == null || N === !1) {
      x(a, Mt(m));
      return;
    }
    const D = o !== Ja ? o : Mt(() => s(N, {
      value: m(),
      refetching: k
    }));
    return Gx(D) ? (a = D, "value" in D ? (D.status === "success" ? x(a, D.value, void 0, N) : x(a, void 0, void 0, N), D) : (u = !0, queueMicrotask(() => u = !1), Xr(() => {
      w(l ? "refreshing" : "pending"), v();
    }, !1), D.then((G) => x(D, G, void 0, N), (G) => x(D, void 0, sp(G), N)))) : (x(a, D, void 0, N), D);
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
        const k = O();
        return k === "pending" || k === "refreshing";
      }
    },
    latest: {
      get() {
        if (!l)
          return d();
        const k = E();
        if (k && !a)
          throw k;
        return m();
      }
    }
  }), f ? Bd(() => g(!1)) : g(!1), [d, {
    refetch: g,
    mutate: _
  }];
}
function o3(t) {
  return Xr(t, !1);
}
function Mt(t) {
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
function a3(t, e, r) {
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
    const c = Mt(() => e(o, s, a));
    return s = o, c;
  };
}
function Jx(t) {
  Xf(() => Mt(t));
}
function zi(t) {
  return Ye === null || (Ye.cleanups === null ? Ye.cleanups = [t] : Ye.cleanups.push(t)), t;
}
function c3() {
  return Qe;
}
function Hd() {
  return Ye;
}
function Xx(t, e) {
  const r = Ye, n = Qe;
  Ye = t, Qe = null;
  try {
    return Xr(e, !0);
  } catch (s) {
    Ru(s);
  } finally {
    Ye = r, Qe = n;
  }
}
function Qx(t) {
  const e = Qe, r = Ye;
  return Promise.resolve().then(() => {
    Qe = e, Ye = r;
    let n;
    return Xr(t, !1), Qe = Ye = null, n ? n.done : void 0;
  });
}
var [eI, u3] = /* @__PURE__ */ rr(!1);
function l3() {
  return [eI, Qx];
}
function d3(t, e) {
  const r = Symbol("context");
  return {
    id: r,
    Provider: iI(r),
    defaultValue: t
  };
}
function h3(t) {
  return Ye && Ye.context && Ye.context[t.id] !== void 0 ? Ye.context[t.id] : t.defaultValue;
}
function Qf(t) {
  const e = dr(t), r = dr(() => Kc(e()));
  return r.toArray = () => {
    const n = r();
    return Array.isArray(n) ? n : n != null ? [n] : [];
  }, r;
}
var tI;
function ep() {
  if (this.sources && this.state)
    if (this.state === gn)
      Gs(this);
    else {
      const t = Gt;
      Gt = null, Xr(() => fa(this), !1), Gt = t;
    }
  if (Qe) {
    const t = this.observers ? this.observers.length : 0;
    Qe.sources ? (Qe.sources.push(this), Qe.sourceSlots.push(t)) : (Qe.sources = [this], Qe.sourceSlots = [t]), this.observers ? (this.observers.push(Qe), this.observerSlots.push(Qe.sources.length - 1)) : (this.observers = [Qe], this.observerSlots = [Qe.sources.length - 1]);
  }
  return this.value;
}
function tp(t, e, r) {
  let n = t.value;
  return (!t.comparator || !t.comparator(n, e)) && (t.value = e, t.observers && t.observers.length && Xr(() => {
    for (let s = 0; s < t.observers.length; s += 1) {
      const i = t.observers[s], a = Xa && Xa.running;
      a && Xa.disposed.has(i), (a ? !i.tState : !i.state) && (i.pure ? Gt.push(i) : dn.push(i), i.observers && np(i)), a || (i.state = gn);
    }
    if (Gt.length > 1e6)
      throw Gt = [], new Error();
  }, !1)), e;
}
function Gs(t) {
  if (!t.fn)
    return;
  Aa(t);
  const e = Na;
  rI(t, t.value, e);
}
function rI(t, e, r) {
  let n;
  const s = Ye, i = Qe;
  Qe = Ye = t;
  try {
    n = t.fn(e);
  } catch (a) {
    return t.pure && (t.state = gn, t.owned && t.owned.forEach(Aa), t.owned = null), t.updatedAt = r + 1, Ru(a);
  } finally {
    Qe = i, Ye = s;
  }
  (!t.updatedAt || t.updatedAt <= r) && (t.updatedAt != null && "observers" in t ? tp(t, n) : t.value = n, t.updatedAt = r);
}
function Ra(t, e, r, n = gn, s) {
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
  return Ye === null || Ye !== Jf && (Ye.owned ? Ye.owned.push(i) : Ye.owned = [i]), i;
}
function ha(t) {
  if (t.state === 0)
    return;
  if (t.state === da)
    return fa(t);
  if (t.suspense && Mt(t.suspense.inFallback))
    return t.suspense.effects.push(t);
  const e = [t];
  for (; (t = t.owner) && (!t.updatedAt || t.updatedAt < Na); )
    t.state && e.push(t);
  for (let r = e.length - 1; r >= 0; r--)
    if (t = e[r], t.state === gn)
      Gs(t);
    else if (t.state === da) {
      const n = Gt;
      Gt = null, Xr(() => fa(t, e[0]), !1), Gt = n;
    }
}
function Xr(t, e) {
  if (Gt)
    return t();
  let r = !1;
  e || (Gt = []), dn ? r = !0 : dn = [], Na++;
  try {
    const n = t();
    return nI(r), n;
  } catch (n) {
    r || (dn = null), Gt = null, Ru(n);
  }
}
function nI(t) {
  if (Gt && (rp(Gt), Gt = null), t)
    return;
  const e = dn;
  dn = null, e.length && Xr(() => Yf(e), !1);
}
function rp(t) {
  for (let e = 0; e < t.length; e++)
    ha(t[e]);
}
function sI(t) {
  let e, r = 0;
  for (e = 0; e < t.length; e++) {
    const n = t[e];
    n.user ? t[r++] = n : ha(n);
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
    ha(t[e]);
}
function fa(t, e) {
  t.state = 0;
  for (let r = 0; r < t.sources.length; r += 1) {
    const n = t.sources[r];
    if (n.sources) {
      const s = n.state;
      s === gn ? n !== e && (!n.updatedAt || n.updatedAt < Na) && ha(n) : s === da && fa(n, e);
    }
  }
}
function np(t) {
  for (let e = 0; e < t.observers.length; e += 1) {
    const r = t.observers[e];
    r.state || (r.state = da, r.pure ? Gt.push(r) : dn.push(r), r.observers && np(r));
  }
}
function Aa(t) {
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
      Aa(t.owned[e]);
    t.owned = null;
  }
  if (t.cleanups) {
    for (e = t.cleanups.length - 1; e >= 0; e--)
      t.cleanups[e]();
    t.cleanups = null;
  }
  t.state = 0;
}
function sp(t) {
  return t instanceof Error ? t : new Error(typeof t == "string" ? t : "Unknown error", {
    cause: t
  });
}
function Ru(t, e = Ye) {
  throw sp(t);
}
function Kc(t) {
  if (typeof t == "function" && !t.length)
    return Kc(t());
  if (Array.isArray(t)) {
    const e = [];
    for (let r = 0; r < t.length; r++) {
      const n = Kc(t[r]);
      Array.isArray(n) ? e.push.apply(e, n) : e.push(n);
    }
    return e;
  }
  return t;
}
function iI(t, e) {
  return function(n) {
    let s;
    return Xn(() => s = Mt(() => (Ye.context = {
      ...Ye.context,
      [t]: n.value
    }, Qf(() => n.children))), void 0), s;
  };
}
var Wc = Symbol("fallback");
function pa(t) {
  for (let e = 0; e < t.length; e++)
    t[e]();
}
function oI(t, e, r = {}) {
  let n = [], s = [], i = [], a = 0, o = e.length > 1 ? [] : null;
  return zi(() => pa(i)), () => {
    let c = t() || [], u, l;
    return c[Gf], Mt(() => {
      let p = c.length, m, _, E, T, M, v, O, w, x;
      if (p === 0)
        a !== 0 && (pa(i), i = [], n = [], s = [], a = 0, o && (o = [])), r.fallback && (n = [Wc], s[0] = Jn((y) => (i[0] = y, r.fallback())), a = 1);
      else if (a === 0) {
        for (s = new Array(p), l = 0; l < p; l++)
          n[l] = c[l], s[l] = Jn(f);
        a = p;
      } else {
        for (E = new Array(p), T = new Array(p), o && (M = new Array(p)), v = 0, O = Math.min(a, p); v < O && n[v] === c[v]; v++)
          ;
        for (O = a - 1, w = p - 1; O >= v && w >= v && n[O] === c[w]; O--, w--)
          E[w] = s[O], T[w] = i[O], o && (M[w] = o[O]);
        for (m = /* @__PURE__ */ new Map(), _ = new Array(w + 1), l = w; l >= v; l--)
          x = c[l], u = m.get(x), _[l] = u === void 0 ? -1 : u, m.set(x, l);
        for (u = v; u <= O; u++)
          x = n[u], l = m.get(x), l !== void 0 && l !== -1 ? (E[l] = s[u], T[l] = i[u], o && (M[l] = o[u]), l = _[l], m.set(x, l)) : i[u]();
        for (l = v; l < p; l++)
          l in E ? (s[l] = E[l], i[l] = T[l], o && (o[l] = M[l], o[l](l))) : s[l] = Jn(f);
        s = s.slice(0, a = p), n = c.slice(0);
      }
      return s;
    });
    function f(p) {
      if (i[l] = p, o) {
        const [m, _] = rr(l);
        return o[l] = _, e(c[l], m);
      }
      return e(c[l]);
    }
  };
}
function aI(t, e, r = {}) {
  let n = [], s = [], i = [], a = [], o = 0, c;
  return zi(() => pa(i)), () => {
    const u = t() || [];
    return u[Gf], Mt(() => {
      if (u.length === 0)
        return o !== 0 && (pa(i), i = [], n = [], s = [], o = 0, a = []), r.fallback && (n = [Wc], s[0] = Jn((f) => (i[0] = f, r.fallback())), o = 1), s;
      for (n[0] === Wc && (i[0](), i = [], n = [], s = [], o = 0), c = 0; c < u.length; c++)
        c < n.length && n[c] !== u[c] ? a[c](() => u[c]) : c >= n.length && (s[c] = Jn(l));
      for (; c < n.length; c++)
        i[c]();
      return o = a.length = i.length = u.length, n = u.slice(0), s = s.slice(0, o);
    });
    function l(f) {
      i[c] = f;
      const [p, m] = rr(u[c]);
      return a[c] = m, e(p, c);
    }
  };
}
function cI(t, e) {
  return Mt(() => t(e || {}));
}
function Eo() {
  return !0;
}
var Bc = {
  get(t, e, r) {
    return e === ua ? r : t.get(e);
  },
  has(t, e) {
    return e === ua ? !0 : t.has(e);
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
function Qa(t) {
  return (t = typeof t == "function" ? t() : t) ? t : {};
}
function uI() {
  for (let t = 0, e = this.length; t < e; ++t) {
    const r = this[t]();
    if (r !== void 0)
      return r;
  }
}
function lI(...t) {
  let e = !1;
  for (let a = 0; a < t.length; a++) {
    const o = t[a];
    e = e || !!o && ua in o, t[a] = typeof o == "function" ? (e = !0, dr(o)) : o;
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
    }, Bc);
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
          get: uI.bind(r[l] = [f.get.bind(o)])
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
function dI(t, ...e) {
  if (ua in t) {
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
    }, Bc));
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
    }, Bc)), i;
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
function hI(t) {
  let e, r;
  const n = (s) => {
    const i = Ee.context;
    if (i) {
      const [o, c] = rr();
      Ee.count || (Ee.count = 0), Ee.count++, (r || (r = t())).then((u) => {
        ui(i), Ee.count--, c(() => u.default), ui();
      }), e = o;
    } else if (!e) {
      const [o] = Yx(() => (r || (r = t())).then((c) => c.default));
      e = o;
    }
    let a;
    return dr(() => (a = e()) && Mt(() => {
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
var fI = 0;
function f3() {
  const t = Ee.context;
  return t ? `${t.id}${t.count++}` : `cl-${fI++}`;
}
var ip = (t) => `Stale read from <${t}>.`;
function p3(t) {
  const e = "fallback" in t && {
    fallback: () => t.fallback
  };
  return dr(oI(() => t.each, t.children, e || void 0));
}
function g3(t) {
  const e = "fallback" in t && {
    fallback: () => t.fallback
  };
  return dr(aI(() => t.each, t.children, e || void 0));
}
function y3(t) {
  const e = t.keyed, r = dr(() => t.when, void 0, {
    equals: (n, s) => e ? n === s : !n == !s
  });
  return dr(() => {
    const n = r();
    if (n) {
      const s = t.children;
      return typeof s == "function" && s.length > 0 ? Mt(() => s(e ? n : () => {
        if (!Mt(r))
          throw ip("Show");
        return t.when;
      })) : s;
    }
    return t.fallback;
  }, void 0, void 0);
}
function m3(t) {
  let e = !1;
  const r = (i, a) => (e ? i[1] === a[1] : !i[1] == !a[1]) && i[2] === a[2], n = Qf(() => t.children), s = dr(() => {
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
  return dr(() => {
    const [i, a, o] = s();
    if (i < 0)
      return t.fallback;
    const c = o.children;
    return typeof c == "function" && c.length > 0 ? Mt(() => c(e ? a : () => {
      if (Mt(s)[0] !== i)
        throw ip("Match");
      return o.when;
    })) : c;
  }, void 0, void 0);
}
function v3(t) {
  return t;
}
var pI = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"], gI = /* @__PURE__ */ new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...pI]), yI = /* @__PURE__ */ new Set(["innerHTML", "textContent", "innerText", "children"]), mI = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  className: "class",
  htmlFor: "for"
}), vI = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
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
function bI(t, e) {
  const r = vI[t];
  return typeof r == "object" ? r[e] ? r.$ : void 0 : r;
}
var _I = /* @__PURE__ */ new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]), wI = /* @__PURE__ */ new Set([
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
]), EI = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
function SI(t, e, r) {
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
            const _ = e[a];
            for (; o < l; )
              t.insertBefore(r[o++], _);
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
function xI(t, e, r, n = {}) {
  let s;
  return Jn((i) => {
    s = i, e === document ? t() : Gc(e, t(), e.firstChild ? null : void 0, r);
  }, n.owner), () => {
    s(), e.textContent = "";
  };
}
function b3(t, e, r) {
  let n;
  const s = () => {
    const a = document.createElement("template");
    return a.innerHTML = t, r ? a.content.firstChild.firstChild : a.content.firstChild;
  }, i = e ? () => Mt(() => document.importNode(n || (n = s()), !0)) : () => (n || (n = s())).cloneNode(!0);
  return i.cloneNode = i, i;
}
function II(t, e = window.document) {
  const r = e[di] || (e[di] = /* @__PURE__ */ new Set());
  for (let n = 0, s = t.length; n < s; n++) {
    const i = t[n];
    r.has(i) || (r.add(i), e.addEventListener(i, op));
  }
}
function _3(t = window.document) {
  if (t[di]) {
    for (let e of t[di].keys())
      t.removeEventListener(e, op);
    delete t[di];
  }
}
function Hc(t, e, r) {
  Ee.context || (r == null ? t.removeAttribute(e) : t.setAttribute(e, r));
}
function OI(t, e, r, n) {
  Ee.context || (n == null ? t.removeAttributeNS(e, r) : t.setAttributeNS(e, r, n));
}
function TI(t, e) {
  Ee.context || (e == null ? t.removeAttribute("class") : t.className = e);
}
function CI(t, e, r, n) {
  if (n)
    Array.isArray(r) ? (t[`$$${e}`] = r[0], t[`$$${e}Data`] = r[1]) : t[`$$${e}`] = r;
  else if (Array.isArray(r)) {
    const s = r[0];
    t.addEventListener(e, r[0] = (i) => s.call(t, r[1], i));
  } else
    t.addEventListener(e, r);
}
function PI(t, e, r = {}) {
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
function kI(t, e, r) {
  if (!e)
    return r ? Hc(t, "style") : e;
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
function NI(t, e = {}, r, n) {
  const s = {};
  return n || Xn(() => s.children = Vs(t, e.children, s.children)), Xn(() => e.ref && e.ref(t)), Xn(() => RI(t, e, r, !0, s, !0)), s;
}
function w3(t, e, r) {
  return Mt(() => t(e, r));
}
function Gc(t, e, r, n) {
  if (r !== void 0 && !n && (n = []), typeof e != "function")
    return Vs(t, e, n, r);
  Xn((s) => Vs(t, e(), s, r), n);
}
function RI(t, e, r, n, s = {}, i = !1) {
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
function AI(t) {
  let e, r;
  return !Ee.context || !(e = Ee.registry.get(r = LI())) ? t() : (Ee.completed && Ee.completed.add(e), Ee.registry.delete(r), e);
}
function jI(t) {
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
    return kI(t, r, n);
  if (e === "classList")
    return PI(t, r, n);
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
    const f = e.slice(2).toLowerCase(), p = _I.has(f);
    if (!p && n) {
      const m = Array.isArray(n) ? n[0] : n;
      t.removeEventListener(f, m);
    }
    (p || r) && (CI(t, f, r, p), p && II([f]));
  } else if (e.slice(0, 5) === "attr:")
    Hc(t, e.slice(5), r);
  else if ((l = e.slice(0, 5) === "prop:") || (c = yI.has(e)) || !s && ((u = bI(e, t.tagName)) || (o = gI.has(e))) || (a = t.nodeName.includes("-"))) {
    if (l)
      e = e.slice(5), o = !0;
    else if (Ee.context)
      return r;
    e === "class" || e === "className" ? TI(t, r) : a && !o && !c ? t[jI(e)] = r : t[u || e] = r;
  } else {
    const f = s && e.indexOf(":") > -1 && EI[e.split(":")[0]];
    f ? OI(t, f, e, r) : Hc(t, mI[e] || e, r);
  }
  return r;
}
function op(t) {
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
      o && o.nodeType === 3 ? o.data !== e && (o.data = e) : o = document.createTextNode(e), r = ys(t, r, n, o);
    } else
      r !== "" && typeof r == "string" ? r = t.firstChild.data = e : r = t.textContent = e;
  } else if (e == null || i === "boolean") {
    if (Ee.context)
      return r;
    r = ys(t, r, n);
  } else {
    if (i === "function")
      return Xn(() => {
        let o = e();
        for (; typeof o == "function"; )
          o = o();
        r = Vs(t, o, r, n);
      }), () => r;
    if (Array.isArray(e)) {
      const o = [], c = r && Array.isArray(r);
      if (Yc(o, e, r, s))
        return Xn(() => r = Vs(t, o, r, n, !0)), () => r;
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
        if (r = ys(t, r, n), a)
          return r;
      } else
        c ? r.length === 0 ? Jd(t, o, n) : SI(t, r, o) : (r && ys(t), Jd(t, o));
      r = o;
    } else if (e.nodeType) {
      if (Ee.context && e.parentNode)
        return r = a ? [e] : e;
      if (Array.isArray(r)) {
        if (a)
          return r = ys(t, r, n, e);
        ys(t, r, null, e);
      } else
        r == null || r === "" || !t.firstChild ? t.appendChild(e) : t.replaceChild(e, t.firstChild);
      r = e;
    }
  }
  return r;
}
function Yc(t, e, r, n) {
  let s = !1;
  for (let i = 0, a = e.length; i < a; i++) {
    let o = e[i], c = r && r[i], u;
    if (!(o == null || o === !0 || o === !1))
      if ((u = typeof o) == "object" && o.nodeType)
        t.push(o);
      else if (Array.isArray(o))
        s = Yc(t, o, c) || s;
      else if (u === "function")
        if (n) {
          for (; typeof o == "function"; )
            o = o();
          s = Yc(t, Array.isArray(o) ? o : [o], Array.isArray(c) ? c : [c]) || s;
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
function ys(t, e, r, n) {
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
function LI() {
  const t = Ee.context;
  return `${t.id}${t.count++}`;
}
var MI = "http://www.w3.org/2000/svg";
function ap(t, e = !1) {
  return e ? document.createElementNS(MI, t) : document.createElement(t);
}
function E3(t) {
  const {
    useShadow: e
  } = t, r = document.createTextNode(""), n = () => t.mount || document.body, s = Hd();
  let i, a = !!Ee.context;
  return Xf(() => {
    a && (Hd().user = a = !1), i || (i = Xx(s, () => dr(() => t.children)));
    const o = n();
    if (o instanceof HTMLHeadElement) {
      const [c, u] = rr(!1), l = () => u(!0);
      Jn((f) => Gc(o, () => c() ? f() : i(), null)), zi(l);
    } else {
      const c = ap(t.isSVG ? "g" : "div", t.isSVG), u = e && c.attachShadow ? c.attachShadow({
        mode: "open"
      }) : c;
      Object.defineProperty(c, "_$host", {
        get() {
          return r.parentNode;
        },
        configurable: !0
      }), Gc(u, i), o.appendChild(c), t.ref && t.ref(c), zi(() => o.removeChild(c));
    }
  }, void 0, {
    render: !a
  }), r;
}
function S3(t) {
  const [e, r] = dI(t, ["component"]), n = dr(() => e.component);
  return dr(() => {
    const s = n();
    switch (typeof s) {
      case "function":
        return Mt(() => s(r));
      case "string":
        const i = wI.has(s), a = Ee.context ? AI() : ap(s, i);
        return NI(a, r, i), a;
    }
  });
}
var DI = (
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
), cp = (
  /** @class */
  function() {
    function t(e) {
      this.generateIdentifier = e, this.kv = new DI();
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
), UI = /* @__PURE__ */ function() {
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
}(), zI = (
  /** @class */
  function(t) {
    UI(e, t);
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
  }(cp)
), $I = function(t, e) {
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
function VI(t) {
  if ("values" in Object)
    return Object.values(t);
  var e = [];
  for (var r in t)
    t.hasOwnProperty(r) && e.push(t[r]);
  return e;
}
function qI(t, e) {
  var r = VI(t);
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
    var n = $I(r, 2), s = n[0], i = n[1];
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
var ZI = (
  /** @class */
  function() {
    function t() {
      this.transfomers = {};
    }
    return t.prototype.register = function(e) {
      this.transfomers[e.name] = e;
    }, t.prototype.findApplicable = function(e) {
      return qI(this.transfomers, function(r) {
        return r.isApplicable(e);
      });
    }, t.prototype.findByName = function(e) {
      return this.transfomers[e];
    }, t;
  }()
), FI = function(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}, up = function(t) {
  return typeof t > "u";
}, KI = function(t) {
  return t === null;
}, $i = function(t) {
  return typeof t != "object" || t === null || t === Object.prototype ? !1 : Object.getPrototypeOf(t) === null ? !0 : Object.getPrototypeOf(t) === Object.prototype;
}, Jc = function(t) {
  return $i(t) && Object.keys(t).length === 0;
}, Ln = function(t) {
  return Array.isArray(t);
}, WI = function(t) {
  return typeof t == "string";
}, BI = function(t) {
  return typeof t == "number" && !isNaN(t);
}, HI = function(t) {
  return typeof t == "boolean";
}, GI = function(t) {
  return t instanceof RegExp;
}, Vi = function(t) {
  return t instanceof Map;
}, qi = function(t) {
  return t instanceof Set;
}, lp = function(t) {
  return FI(t) === "Symbol";
}, YI = function(t) {
  return t instanceof Date && !isNaN(t.valueOf());
}, JI = function(t) {
  return t instanceof Error;
}, Qd = function(t) {
  return typeof t == "number" && isNaN(t);
}, XI = function(t) {
  return HI(t) || KI(t) || up(t) || BI(t) || WI(t) || lp(t);
}, QI = function(t) {
  return typeof t == "bigint";
}, e6 = function(t) {
  return t === 1 / 0 || t === -1 / 0;
}, t6 = function(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}, r6 = function(t) {
  return t instanceof URL;
}, dp = function(t) {
  return t.replace(/\./g, "\\.");
}, ec = function(t) {
  return t.map(String).map(dp).join(".");
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
}, Xc = function() {
  return Xc = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, Xc.apply(this, arguments);
}, Qc = function(t, e) {
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
}, eu = function(t, e) {
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
var hp = [
  Br(up, "undefined", function() {
    return null;
  }, function() {
  }),
  Br(QI, "bigint", function(t) {
    return t.toString();
  }, function(t) {
    return typeof BigInt < "u" ? BigInt(t) : t;
  }),
  Br(YI, "Date", function(t) {
    return t.toISOString();
  }, function(t) {
    return new Date(t);
  }),
  Br(JI, "Error", function(t, e) {
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
  Br(GI, "regexp", function(t) {
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
      return eu([], Qc(t.values()));
    },
    function(t) {
      return new Set(t);
    }
  ),
  Br(Vi, "map", function(t) {
    return eu([], Qc(t.entries()));
  }, function(t) {
    return new Map(t);
  }),
  Br(function(t) {
    return Qd(t) || e6(t);
  }, "number", function(t) {
    return Qd(t) ? "NaN" : t > 0 ? "Infinity" : "-Infinity";
  }, Number),
  Br(function(t) {
    return t === 0 && 1 / t === -1 / 0;
  }, "number", function() {
    return "-0";
  }, Number),
  Br(r6, "URL", function(t) {
    return t.toString();
  }, function(t) {
    return new URL(t);
  })
];
function ja(t, e, r, n) {
  return {
    isApplicable: t,
    annotation: e,
    transform: r,
    untransform: n
  };
}
var fp = ja(function(t, e) {
  if (lp(t)) {
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
}), n6 = [
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
}, {}), pp = ja(t6, function(t) {
  return ["typed-array", t.constructor.name];
}, function(t) {
  return eu([], Qc(t));
}, function(t, e) {
  var r = n6[e[1]];
  if (!r)
    throw new Error("Trying to deserialize unknown typed array");
  return new r(t);
});
function gp(t, e) {
  if (t != null && t.constructor) {
    var r = !!e.classRegistry.getIdentifier(t.constructor);
    return r;
  }
  return !1;
}
var yp = ja(gp, function(t, e) {
  var r = e.classRegistry.getIdentifier(t.constructor);
  return ["class", r];
}, function(t, e) {
  var r = e.classRegistry.getAllowedProps(t.constructor);
  if (!r)
    return Xc({}, t);
  var n = {};
  return r.forEach(function(s) {
    n[s] = t[s];
  }), n;
}, function(t, e, r) {
  var n = r.classRegistry.getValue(e[1]);
  if (!n)
    throw new Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");
  return Object.assign(Object.create(n.prototype), t);
}), mp = ja(function(t, e) {
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
}), s6 = [yp, fp, mp, pp], eh = function(t, e) {
  var r = Xd(s6, function(s) {
    return s.isApplicable(t, e);
  });
  if (r)
    return {
      value: r.transform(t, e),
      type: r.annotation(t, e)
    };
  var n = Xd(hp, function(s) {
    return s.isApplicable(t, e);
  });
  if (n)
    return {
      value: n.transform(t, e),
      type: n.annotation
    };
}, vp = {};
hp.forEach(function(t) {
  vp[t.annotation] = t;
});
var i6 = function(t, e, r) {
  if (Ln(e))
    switch (e[0]) {
      case "symbol":
        return fp.untransform(t, e, r);
      case "class":
        return yp.untransform(t, e, r);
      case "custom":
        return mp.untransform(t, e, r);
      case "typed-array":
        return pp.untransform(t, e, r);
      default:
        throw new Error("Unknown transformation: " + e);
    }
  else {
    var n = vp[e];
    if (!n)
      throw new Error("Unknown transformation: " + e);
    return n.untransform(t, r);
  }
}, xs = function(t, e) {
  for (var r = t.keys(); e > 0; )
    r.next(), e--;
  return r.next().value;
};
function bp(t) {
  if (jo(t, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (jo(t, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (jo(t, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var o6 = function(t, e) {
  bp(e);
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
}, tu = function(t, e, r) {
  if (bp(e), e.length === 0)
    return r(t);
  for (var n = t, s = 0; s < e.length - 1; s++) {
    var i = e[s];
    if (Ln(n)) {
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
  if (Ln(n) ? n[+f] = r(n[+f]) : $i(n) && (n[f] = r(n[f])), qi(n)) {
    var p = xs(n, +f), m = r(p);
    p !== m && (n.delete(p), n.add(m));
  }
  if (Vi(n)) {
    var o = +e[e.length - 2], _ = xs(n, o), u = +f == 0 ? "key" : "value";
    switch (u) {
      case "key": {
        var E = r(_);
        n.set(E, n.get(_)), E !== _ && n.delete(_);
        break;
      }
      case "value": {
        n.set(_, r(n.get(_)));
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
function ru(t, e, r) {
  if (r === void 0 && (r = []), !!t) {
    if (!Ln(t)) {
      qs(t, function(a, o) {
        return ru(a, e, Tn(Tn([], cn(r)), cn(hi(o))));
      });
      return;
    }
    var n = cn(t, 2), s = n[0], i = n[1];
    i && qs(i, function(a, o) {
      ru(a, e, Tn(Tn([], cn(r)), cn(hi(o))));
    }), e(s, r);
  }
}
function a6(t, e, r) {
  return ru(e, function(n, s) {
    t = tu(t, s, function(i) {
      return i6(i, n, r);
    });
  }), t;
}
function c6(t, e) {
  function r(a, o) {
    var c = o6(t, hi(o));
    a.map(hi).forEach(function(u) {
      t = tu(t, u, function() {
        return c;
      });
    });
  }
  if (Ln(e)) {
    var n = cn(e, 2), s = n[0], i = n[1];
    s.forEach(function(a) {
      t = tu(t, hi(a), function() {
        return t;
      });
    }), i && qs(i, r);
  } else
    qs(e, r);
  return t;
}
var u6 = function(t, e) {
  return $i(t) || Ln(t) || Vi(t) || qi(t) || gp(t, e);
};
function l6(t, e, r) {
  var n = r.get(t);
  n ? n.push(e) : r.set(t, [e]);
}
function d6(t, e) {
  var r = {}, n = void 0;
  return t.forEach(function(s) {
    if (!(s.length <= 1)) {
      e || (s = s.map(function(c) {
        return c.map(String);
      }).sort(function(c, u) {
        return c.length - u.length;
      }));
      var i = cn(s), a = i[0], o = i.slice(1);
      a.length === 0 ? n = o.map(ec) : r[ec(a)] = o.map(ec);
    }
  }), n ? Jc(r) ? [n] : [n, r] : Jc(r) ? void 0 : r;
}
var _p = function(t, e, r, n, s, i, a) {
  var o;
  s === void 0 && (s = []), i === void 0 && (i = []), a === void 0 && (a = /* @__PURE__ */ new Map());
  var c = XI(t);
  if (!c) {
    l6(t, s, e);
    var u = a.get(t);
    if (u)
      return n ? {
        transformedValue: null
      } : u;
  }
  if (!u6(t, r)) {
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
  var p = eh(t, r), m = (o = p == null ? void 0 : p.value) !== null && o !== void 0 ? o : t, _ = Ln(m) ? [] : {}, E = {};
  qs(m, function(M, v) {
    var O = _p(M, e, r, n, Tn(Tn([], cn(s)), [v]), Tn(Tn([], cn(i)), [t]), a);
    _[v] = O.transformedValue, Ln(O.annotations) ? E[v] = O.annotations : $i(O.annotations) && qs(O.annotations, function(w, x) {
      E[dp(v) + "." + x] = w;
    });
  });
  var T = Jc(E) ? {
    transformedValue: _,
    annotations: p ? [p.type] : void 0
  } : {
    transformedValue: _,
    annotations: p ? [p.type, E] : E
  };
  return c || a.set(t, T), T;
};
function wp(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function h6(t) {
  if (wp(t) !== "Object")
    return !1;
  const e = Object.getPrototypeOf(t);
  return !!e && e.constructor === Object && e === Object.prototype;
}
function th(t) {
  return wp(t) === "Array";
}
function f6(t, e, r, n, s) {
  const i = {}.propertyIsEnumerable.call(n, e) ? "enumerable" : "nonenumerable";
  i === "enumerable" && (t[e] = r), s && i === "nonenumerable" && Object.defineProperty(t, e, {
    value: r,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function nu(t, e = {}) {
  if (th(t))
    return t.map((s) => nu(s, e));
  if (!h6(t))
    return t;
  const r = Object.getOwnPropertyNames(t), n = Object.getOwnPropertySymbols(t);
  return [...r, ...n].reduce((s, i) => {
    if (th(e.props) && !e.props.includes(i))
      return s;
    const a = t[i], o = nu(a, e);
    return f6(s, i, o, t, e.nonenumerable), s;
  }, {});
}
var Wn = function() {
  return Wn = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, Wn.apply(this, arguments);
}, p6 = function(t, e) {
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
}, g6 = function(t, e) {
  for (var r = 0, n = e.length, s = t.length; r < n; r++, s++)
    t[s] = e[r];
  return t;
}, Ep = (
  /** @class */
  function() {
    function t(e) {
      var r = e === void 0 ? {} : e, n = r.dedupe, s = n === void 0 ? !1 : n;
      this.classRegistry = new zI(), this.symbolRegistry = new cp(function(i) {
        var a;
        return (a = i.description) !== null && a !== void 0 ? a : "";
      }), this.customTransformerRegistry = new ZI(), this.allowedErrorProps = [], this.dedupe = s;
    }
    return t.prototype.serialize = function(e) {
      var r = /* @__PURE__ */ new Map(), n = _p(e, r, this, this.dedupe), s = {
        json: n.transformedValue
      };
      n.annotations && (s.meta = Wn(Wn({}, s.meta), { values: n.annotations }));
      var i = d6(r, this.dedupe);
      return i && (s.meta = Wn(Wn({}, s.meta), { referentialEqualities: i })), s;
    }, t.prototype.deserialize = function(e) {
      var r = e.json, n = e.meta, s = nu(r);
      return n != null && n.values && (s = a6(s, n.values, this)), n != null && n.referentialEqualities && (s = c6(s, n.referentialEqualities)), s;
    }, t.prototype.stringify = function(e) {
      return JSON.stringify(this.serialize(e));
    }, t.prototype.parse = function(e) {
      return this.deserialize(JSON.parse(e));
    }, t.prototype.registerClass = function(e, r) {
      this.classRegistry.register(e, r);
    }, t.prototype.registerSymbol = function(e, r) {
      this.symbolRegistry.register(e, r);
    }, t.prototype.registerCustom = function(e, r) {
      this.customTransformerRegistry.register(Wn({ name: r }, e));
    }, t.prototype.allowErrorProps = function() {
      for (var e, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      (e = this.allowedErrorProps).push.apply(e, g6([], p6(r)));
    }, t.defaultInstance = new t(), t.serialize = t.defaultInstance.serialize.bind(t.defaultInstance), t.deserialize = t.defaultInstance.deserialize.bind(t.defaultInstance), t.stringify = t.defaultInstance.stringify.bind(t.defaultInstance), t.parse = t.defaultInstance.parse.bind(t.defaultInstance), t.registerClass = t.defaultInstance.registerClass.bind(t.defaultInstance), t.registerSymbol = t.defaultInstance.registerSymbol.bind(t.defaultInstance), t.registerCustom = t.defaultInstance.registerCustom.bind(t.defaultInstance), t.allowErrorProps = t.defaultInstance.allowErrorProps.bind(t.defaultInstance), t;
  }()
), y6 = Ep.serialize, x3 = Ep.stringify;
function I3(t) {
  return t.state.fetchStatus === "fetching" ? "fetching" : t.getObserversCount() ? t.state.fetchStatus === "paused" ? "paused" : t.isStale() ? "stale" : "fresh" : "inactive";
}
function O3(t, e) {
  return `${t}${e.charAt(0).toUpperCase() + e.slice(1)}`;
}
function T3({
  queryState: t,
  observerCount: e,
  isStale: r
}) {
  return t.fetchStatus === "fetching" ? "blue" : e ? t.fetchStatus === "paused" ? "purple" : r ? "yellow" : "green" : "gray";
}
function C3({
  status: t,
  isPaused: e
}) {
  return e ? "purple" : t === "error" ? "red" : t === "pending" ? "yellow" : t === "success" ? "green" : "gray";
}
function P3(t) {
  return t === "fresh" ? "green" : t === "stale" ? "yellow" : t === "paused" ? "purple" : t === "inactive" ? "gray" : "blue";
}
var k3 = (t, e = !1) => {
  const {
    json: r
  } = y6(t);
  return JSON.stringify(r, null, e ? 2 : void 0);
}, So = (t) => t.state.fetchStatus !== "idle" ? 0 : t.getObserversCount() ? t.isStale() ? 2 : 1 : 3, m6 = (t, e) => t.queryHash.localeCompare(e.queryHash), Sp = (t, e) => t.state.dataUpdatedAt < e.state.dataUpdatedAt ? 1 : -1, v6 = (t, e) => So(t) === So(e) ? Sp(t, e) : So(t) > So(e) ? 1 : -1, N3 = {
  status: v6,
  "query hash": m6,
  "last updated": Sp
}, xo = (t) => t.state.isPaused ? 0 : t.state.status === "error" ? 2 : t.state.status === "pending" ? 1 : 3, xp = (t, e) => t.state.submittedAt < e.state.submittedAt ? 1 : -1, b6 = (t, e) => xo(t) === xo(e) ? xp(t, e) : xo(t) > xo(e) ? 1 : -1, R3 = {
  status: b6,
  "last updated": xp
}, A3 = (t) => t * parseFloat(getComputedStyle(document.documentElement).fontSize), j3 = () => {
  const [t, e] = rr("dark");
  return Jx(() => {
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
}, _6 = (t) => {
  if (!t || document.querySelector("#_goober"))
    return;
  const r = document.createElement("style"), n = document.createTextNode("");
  r.appendChild(n), r.id = "_goober", r.setAttribute("nonce", t), document.head.appendChild(r);
}, ks, Zi, Fi, Ki, Hn, Wi, Ns, Rs, As, js, Ls, Bi, rh, w6 = (rh = class {
  constructor(t) {
    pr(this, ks, void 0);
    pr(this, Zi, void 0);
    pr(this, Fi, void 0);
    pr(this, Ki, void 0);
    pr(this, Hn, !1);
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
    ar(this, ks, rr(e)), ar(this, Fi, r), ar(this, Ki, n), ar(this, Zi, s), ar(this, Wi, u), ar(this, Ns, rr(i)), ar(this, Rs, rr(a)), ar(this, As, rr(o)), ar(this, js, rr(c));
  }
  setButtonPosition(t) {
    kt(this, Ns)[1](t);
  }
  setPosition(t) {
    kt(this, Rs)[1](t);
  }
  setInitialIsOpen(t) {
    kt(this, As)[1](t);
  }
  setErrorTypes(t) {
    kt(this, js)[1](t);
  }
  setClient(t) {
    kt(this, ks)[1](t);
  }
  mount(t) {
    if (kt(this, Hn))
      throw new Error("Devtools is already mounted");
    const e = xI(() => {
      const r = this, [n] = kt(this, Ns), [s] = kt(this, Rs), [i] = kt(this, As), [a] = kt(this, js), [o] = kt(this, ks);
      let c;
      return kt(this, Ls) ? c = kt(this, Ls) : (c = hI(() => import("./335X72D7-mJMpc5r6.js")), ar(this, Ls, c)), _6(kt(this, Wi)), cI(c, lI({
        get queryFlavor() {
          return kt(r, Fi);
        },
        get version() {
          return kt(r, Ki);
        },
        get onlineManager() {
          return kt(r, Zi);
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
    ar(this, Hn, !0), ar(this, Bi, e);
  }
  unmount() {
    var t;
    if (!kt(this, Hn))
      throw new Error("Devtools is not mounted");
    (t = kt(this, Bi)) == null || t.call(this), ar(this, Hn, !1);
  }
}, ks = new WeakMap(), Zi = new WeakMap(), Fi = new WeakMap(), Ki = new WeakMap(), Hn = new WeakMap(), Wi = new WeakMap(), Ns = new WeakMap(), Rs = new WeakMap(), As = new WeakMap(), js = new WeakMap(), Ls = new WeakMap(), Bi = new WeakMap(), rh);
function E6(t) {
  const e = ig(t.client), r = wn.useRef(null), { buttonPosition: n, position: s, initialIsOpen: i, errorTypes: a, styleNonce: o } = t, [c] = wn.useState(
    new w6({
      client: e,
      queryFlavor: "React Query",
      version: "5",
      onlineManager: og,
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
  }), [c]), /* @__PURE__ */ Fc.jsx("div", { className: "tsqd-parent-container", ref: r });
}
var S6 = process.env.NODE_ENV !== "development" ? function() {
  return null;
} : E6;
const Ip = new ag(), L3 = ({ dAppName: t, dAppDescription: e, dAppUrl: r, dAppIconURL: n, children: s, debugQuery: i = !1 }) => (Lr(() => {
  PS({
    dAppName: t,
    dAppDescription: e,
    dAppUrl: r,
    dAppIconURL: n,
    onDisconnect: hn.getState().onDisconnect()
  }), sh.defaultMaxListeners = 100;
}, []), /* @__PURE__ */ Fc.jsxs(cg, { client: Ip, children: [
  i && /* @__PURE__ */ Fc.jsx(S6, { initialIsOpen: !1 }),
  s
] })), M3 = async () => {
  const t = await wt(), e = await t.getSession();
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
    const n = r.message;
    return console.error("getAccount error", n), { error: n };
  }
}, D3 = async ({ address: t }) => {
  const e = await wt(), r = await e.getSession();
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
  } catch (n) {
    const s = n.message;
    return console.error("getBalance error", s), { error: s };
  }
}, U3 = async () => {
  const t = await wt();
  if (!t)
    throw new Error("call setConnection() first!");
  const e = await t.getSession();
  if (e)
    return console.log("Already connected!", e), e;
  try {
    const r = await t.connect({
      requiredNamespaces: {
        aleo: {
          methods: ih,
          chains: iu,
          events: oh
        }
      }
    });
    return Lo.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), r;
  } catch (r) {
    console.error("connect error", r.message);
  }
}, z3 = async (t) => {
  const e = await wt(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { error: "no session or connection" };
  const n = t == null ? void 0 : t.inputs.map((s) => typeof s == "string" ? s : s.plaintext);
  try {
    return await e.request({
      topic: r.topic,
      chainId: "aleo:3",
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
}, $3 = async () => {
  const t = await wt(), e = await (t == null ? void 0 : t.getSession());
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
    const n = r.message;
    return console.error("createSharedState error", n), { error: n };
  }
}, V3 = async (t) => {
  const e = await wt(), r = await (e == null ? void 0 : e.getSession());
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
  } catch (n) {
    return console.error("decrypt error", n.message), { error: n.message };
  }
}, q3 = async () => {
  const t = await wt(), e = await (t == null ? void 0 : t.getSession());
  if (!e || !t)
    return { error: "no session or connection" };
  try {
    try {
      await t.disconnect({
        reason: su("USER_DISCONNECTED"),
        topic: e.topic
      }), Lo.emit("session_change");
    } catch (r) {
      console.warn(r);
    }
    return {};
  } catch (r) {
    const n = r.message;
    return console.error("error disconnecting", n), { error: n };
  }
}, Z3 = async ({
  id: t,
  address: e
}) => {
  const r = await wt(), n = await (r == null ? void 0 : r.getSession());
  if (!n || !r)
    return { event: void 0, error: "no session or connection" };
  const s = async () => await r.request({
    topic: n.topic,
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
  } catch (i) {
    const a = i.message;
    return console.error("getEvents error", a), { error: a };
  }
}, F3 = async (t) => {
  const e = await wt(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { events: void 0, error: "no session or connection" };
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const n = async (s = 0) => await e.request({
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
    return await n();
  } catch (s) {
    const i = s.message;
    return console.error("getEvents error", i), { error: i };
  }
}, K3 = async (t) => {
  const e = await wt(), r = await (e == null ? void 0 : e.getSession());
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
  } catch (n) {
    const s = n.message;
    return console.error("importSharedState error", s), { error: s };
  }
}, W3 = async ({
  address: t,
  filter: e,
  page: r = 0
}) => {
  const n = await wt(), s = await (n == null ? void 0 : n.getSession());
  if (!s || !n)
    return { error: "no session or connection" };
  const i = async (a = 0) => await n.request({
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
    return await i();
  } catch (a) {
    const o = a.message;
    return console.error("getRecords error", o), { error: o };
  }
}, B3 = async ({
  message: t,
  address: e
}) => {
  const r = await wt(), n = await (r == null ? void 0 : r.getSession());
  if (!n || !r)
    return { error: "no session or connection" };
  try {
    return await r.request({
      topic: n.topic,
      chainId: "aleo:3",
      request: {
        jsonrpc: "2.0",
        method: "requestSignature",
        params: {
          message: t,
          address: Nu.test(e ?? "") ? e : void 0
        }
      }
    });
  } catch (s) {
    const i = s.message;
    return console.error("signature error", i), { error: i };
  }
}, H3 = 20;
export {
  ua as $,
  Gf as A,
  c3 as B,
  lh as C,
  f3 as D,
  d3 as E,
  p3 as F,
  h3 as G,
  D6 as H,
  g3 as I,
  Io as J,
  b3 as K,
  w3 as L,
  A3 as M,
  O3 as N,
  I3 as O,
  E3 as P,
  Mt as Q,
  Jn as R,
  y3 as S,
  dI as T,
  CI as U,
  M6 as V,
  el as W,
  Wg as X,
  x3 as Y,
  v3 as Z,
  m3 as _,
  Cr as a,
  B3 as a$,
  Oo as a0,
  _3 as a1,
  l3 as a2,
  S3 as a3,
  Qf as a4,
  Bd as a5,
  tc as a6,
  j6 as a7,
  L6 as a8,
  U6 as a9,
  Vx as aA,
  Zx as aB,
  Fx as aC,
  zx as aD,
  H6 as aE,
  r3 as aF,
  t3 as aG,
  X6 as aH,
  n3 as aI,
  Y6 as aJ,
  J6 as aK,
  Q6 as aL,
  e3 as aM,
  G6 as aN,
  s3 as aO,
  H3 as aP,
  M3 as aQ,
  D3 as aR,
  U3 as aS,
  z3 as aT,
  $3 as aU,
  V3 as aV,
  q3 as aW,
  Z3 as aX,
  F3 as aY,
  K3 as aZ,
  W3 as a_,
  z6 as aa,
  $6 as ab,
  V6 as ac,
  q6 as ad,
  Z6 as ae,
  F6 as af,
  K6 as ag,
  W6 as ah,
  B6 as ai,
  i3 as aj,
  ah as ak,
  Hi as al,
  Rg as am,
  ch as an,
  Sr as ao,
  Ip as ap,
  L3 as aq,
  hn as ar,
  Fd as as,
  $c as at,
  zc as au,
  qc as av,
  Vc as aw,
  Nu as ax,
  qx as ay,
  $x as az,
  II as b,
  ih as b0,
  iu as b1,
  oh as b2,
  lg as b3,
  dg as b4,
  R6 as b5,
  Hf as b6,
  Lo as b7,
  A6 as b8,
  wt as b9,
  rr as c,
  Ms as d,
  dr as e,
  cI as f,
  j3 as g,
  Xf as h,
  Gc as i,
  Xn as j,
  TI as k,
  a3 as l,
  R3 as m,
  Hc as n,
  Jx as o,
  T3 as p,
  C3 as q,
  Da as r,
  N3 as s,
  NI as t,
  lI as u,
  P3 as v,
  Bt as w,
  k3 as x,
  o3 as y,
  zi as z
};
