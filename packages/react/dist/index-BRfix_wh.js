var Wl = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
};
var Pt = (t, e, r) => (Wl(t, e, "read from private field"), r ? r.call(t) : e.get(t)), pr = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, ar = (t, e, r, n) => (Wl(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
import * as bn from "react";
import ah, { useEffect as Lr, useState as Co } from "react";
import { WalletConnectModalSign as cg } from "@walletconnect/modal-sign-html";
import ch from "events";
import { getSdkError as ol } from "@walletconnect/utils";
import { create as lg } from "zustand";
import { useQuery as ug, useQueryClient as dg, onlineManager as hg, QueryClient as fg, QueryClientProvider as pg } from "@tanstack/react-query";
import gg from "debug";
const lh = [
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
], ya = ["aleo:3"], uh = [
  "chainChanged",
  "accountSelected",
  "selectedAccountSynced",
  "sharedAccountSynced"
], dh = "f0aaeffe71b636da453fce042d79d723";
function yg() {
  return navigator ? /Android/i.test(navigator.userAgent) : !1;
}
const mg = {
  chains: ya,
  enableExplorer: !0,
  explorerRecommendedWalletIds: [dh]
}, vg = {
  chains: ya,
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
}, Fl = yg() ? mg : vg, $6 = {
  requiredNamespaces: {
    aleo: {
      methods: lh,
      chains: ya,
      events: uh
    }
  }
}, wg = "@puzzlehq/sdk-core", _g = "Puzzle SDK", bg = "0.2.32-beta.1", Eg = "Your portal to privacy", Sg = "./dist/puzzle.cjs.js", xg = "./dist/puzzle.es.js", Ig = "./dist/puzzle.umd.js", Og = "./dist/types/index.d.ts", Tg = {
  ".": {
    import: "./dist/puzzle.es.js",
    require: "./dist/puzzle.cjs.js",
    browser: "./dist/puzzle.umd.js",
    types: "./dist/types/src/index.d.ts"
  }
}, Cg = "module", kg = {
  "fetch-fix": "find dist -type f \\( -name '*.js' -o -name '*.cjs' \\) -exec sed -i '' 's/self.fetch[[:space:]]*||/fetch ||/g' {} \\;",
  "ws-fix": `find ./dist -type f -name 'index*' -exec sed -i '' -e 's/require(\\"ws\\")/(() => {try { return require(\\"ws\\") } catch (e) { } })()/g' {} +;`,
  build: "vite build && tsc --declaration --emitDeclarationOnly --outDir dist/types && pnpm fetch-fix && pnpm ws-fix",
  "type-check": "tsc --noEmit"
}, Pg = {
  type: "git",
  url: "git+https://github.com/puzzlehq/puzzle-sdk.git"
}, Ng = {
  "@puzzlehq/types": "1.0.11",
  "@walletconnect/modal-sign-html": "^2.6.2",
  "@walletconnect/types": "^2.11.2",
  "@walletconnect/utils": "^2.11.2",
  debug: "^4.3.4",
  events: "^3.3.0"
}, Rg = {
  buffer: "^6.0.3"
}, Ag = [
  "puzzle",
  "html",
  "aleo",
  "web3",
  "crypto"
], jg = "Puzzle", Lg = "ISC", Mg = {
  url: "https://github.com/puzzlehq/puzzle-sdk/issues"
}, Dg = "https://github.com/puzzlehq/puzzle-sdk#readme", Bl = {
  name: wg,
  displayName: _g,
  version: bg,
  description: Eg,
  main: Sg,
  module: xg,
  browser: Ig,
  types: Og,
  private: !1,
  exports: Tg,
  type: Cg,
  scripts: kg,
  repository: Pg,
  dependencies: Ng,
  peerDependencies: Rg,
  keywords: Ag,
  author: jg,
  license: Lg,
  bugs: Mg,
  homepage: Dg
}, Mo = new ch();
let On;
async function q6(t) {
  let e = !1;
  const r = Bl.version, n = localStorage.getItem("puzzle_sdk_version");
  if (r !== n && (console.log(
    `${Bl.name}: Updated from ` + n + " to " + r + "!"
  ), localStorage.setItem("puzzle_sdk_version", r), e = !0), console.log("web3modal_puzzle_props", Fl), On = new cg({
    projectId: t.projectId ?? dh,
    metadata: {
      name: t.dAppName,
      description: t.dAppDescription,
      url: t.dAppUrl,
      icons: [t.dAppIconURL]
    },
    modalOptions: { ...Fl }
  }), e) {
    localStorage.removeItem("puzzle-hasDesktopConnection");
    try {
      zg(On, t.onDisconnect);
    } catch (s) {
      console.error(s);
    }
  }
  On.onSessionDelete(() => {
    localStorage.removeItem("puzzle-hasDesktopConnection"), t.onDisconnect && t.onDisconnect();
  }), On.onSessionExpire(() => {
    localStorage.removeItem("puzzle-hasDesktopConnection"), t.onDisconnect && t.onDisconnect();
  }), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
}
async function zg(t, e) {
  const r = await (t == null ? void 0 : t.getSession());
  r && (console.log("Disconnecting session", r), e && e(), t.disconnect({
    topic: r.topic,
    reason: ol("USER_DISCONNECTED")
  }));
}
async function bt() {
  return new Promise((t) => {
    if (On)
      t(On);
    else {
      const e = setInterval(() => {
        On && (clearInterval(e), t(On));
      }, 200);
    }
    window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
  });
}
function hh(t) {
  Lr(() => (bt().then((e) => {
    e.onSessionDelete(t);
  }), () => {
    bt().then((e) => {
      e.offSessionDelete(t);
    });
  }), [t]);
}
function Ug(t) {
  Lr(() => (bt().then((e) => {
    e.onSessionExpire(t);
  }), () => {
    bt().then((e) => {
      e.offSessionExpire(t);
    });
  }), [t]);
}
function fh(t) {
  Lr(() => (bt().then((e) => {
    e.onSessionUpdate(t);
  }), () => {
    bt().then((e) => {
      e.offSessionUpdate(t);
    });
  }), [t]);
}
function Sr() {
  const [t, e] = Co(void 0);
  return hh((r) => {
    r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), fh((r) => {
    if (t && r.topic === (t == null ? void 0 : t.topic)) {
      const { namespaces: n } = r.params, s = { ...t, namespaces: n };
      e(s);
    }
  }), Ug((r) => {
    t && r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), Lr(() => {
    async function r() {
      const s = await (await bt()).getSession();
      e(s);
    }
    return r(), Mo.on("session_change", r), () => {
      Mo.off("session_change", r);
    };
  }, []), t;
}
function Gi(t) {
  Lr(() => (bt().then((e) => {
    e.onSessionEvent(t);
  }), () => {
    bt().then((e) => {
      e.offSessionEvent(t);
    });
  }), [t]);
}
var $g = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
function qg(t, e) {
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
const pi = (t) => (e) => {
  try {
    const r = t(e);
    return r instanceof Promise ? r : {
      then(n) {
        return pi(n)(r);
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
        return pi(n)(r);
      }
    };
  }
}, Vg = (t, e) => (r, n, s) => {
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
  let l;
  try {
    l = i.getStorage();
  } catch {
  }
  if (!l)
    return t(
      (...T) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        ), r(...T);
      },
      n,
      s
    );
  const u = pi(i.serialize), f = () => {
    const T = i.partialize({ ...n() });
    let M;
    const v = u({ state: T, version: i.version }).then(
      (O) => l.setItem(i.name, O)
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
    if (!l)
      return;
    a = !1, o.forEach((v) => v(n()));
    const M = ((T = i.onRehydrateStorage) == null ? void 0 : T.call(i, n())) || void 0;
    return pi(l.getItem.bind(l))(i.name).then((v) => {
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
      }, T.getStorage && (l = T.getStorage());
    },
    clearStorage: () => {
      l == null || l.removeItem(i.name);
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
}, Zg = (t, e) => (r, n, s) => {
  let i = {
    storage: qg(() => localStorage),
    partialize: (E) => E,
    version: 0,
    merge: (E, T) => ({
      ...T,
      ...E
    }),
    ...e
  }, a = !1;
  const o = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
  let l = i.storage;
  if (!l)
    return t(
      (...E) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        ), r(...E);
      },
      n,
      s
    );
  const u = () => {
    const E = i.partialize({ ...n() });
    return l.setItem(i.name, {
      state: E,
      version: i.version
    });
  }, f = s.setState;
  s.setState = (E, T) => {
    f(E, T), u();
  };
  const p = t(
    (...E) => {
      r(...E), u();
    },
    n,
    s
  );
  s.getInitialState = () => p;
  let m;
  const _ = () => {
    var E, T;
    if (!l)
      return;
    a = !1, o.forEach((v) => {
      var O;
      return v((O = n()) != null ? O : p);
    });
    const M = ((T = i.onRehydrateStorage) == null ? void 0 : T.call(i, (E = n()) != null ? E : p)) || void 0;
    return pi(l.getItem.bind(l))(i.name).then((v) => {
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
      ), r(m, !0), u();
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
      }, E.storage && (l = E.storage);
    },
    clearStorage: () => {
      l == null || l.removeItem(i.name);
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
}, Kg = (t, e) => "getStorage" in e || "serialize" in e || "deserialize" in e ? (($g ? "production" : void 0) !== "production" && console.warn(
  "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
), Vg(t, e)) : Zg(t, e), Wg = Kg, hn = lg()(
  Wg(
    (t, e) => ({
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
        }), Np.clear(), localStorage.removeItem("puzzle-hasDesktopConnection"), console.log("onDisconnect called!");
      }
    }),
    {
      name: "puzzle-wallet-store"
    }
  )
);
function al() {
  const [t, e] = Co(void 0), [r, n] = Co(void 0), [s, i] = Co(!1);
  return { data: t, error: r, loading: s, setData: e, setError: n, setLoading: i };
}
async function ph(t, e) {
  const n = await (await bt()).request(t);
  if (n === void 0 && e)
    throw console.error("Result is undefined, retrying..."), new Error("Result is undefined, retrying...");
  return n;
}
function Yi({
  queryKey: t,
  wcParams: e,
  enabled: r,
  queryOptions: n
}) {
  return ug(
    t,
    async () => ph(e, t),
    n ?? {
      staleTime: t[0] === "getEvent" ? 7500 : 45e3,
      refetchInterval: t[0] === "getEvent" ? 5e3 : 3e4,
      refetchIntervalInBackground: !0,
      enabled: r,
      retry: !0
    }
  );
}
function Ji(t) {
  const { data: e, error: r, loading: n, setData: s, setError: i, setLoading: a } = al();
  async function o(c) {
    try {
      a(!0), i(void 0);
      const l = await ph(t ?? c);
      return s(l), l;
    } catch (l) {
      throw i(l), l;
    } finally {
      a(!1);
    }
  }
  return { data: e, error: r, loading: n, request: o };
}
const nc = (t, e = !0, r = 4, n = !0) => t ? t.length < r ? t : n ? `(...${t.slice(-r)})` : t.length < r * 2 ? t : `${t.slice(
  0,
  r + (e ? 5 : 0)
)}...${t.slice(t.length - r, t.length)}` : "", V6 = () => {
  const t = Sr(), [e, r, n] = hn((l) => [
    l.account,
    l.setAccount,
    l.onDisconnect
  ]), {
    refetch: s,
    data: i,
    error: a,
    isLoading: o
  } = Yi({
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
  Gi(({ params: l, topic: u }) => {
    if (l.event.name === "accountSelected" && t && t.topic === u) {
      const p = l.event.address ?? l.event.data.address, m = l.chainId.split(":")[0], _ = l.chainId.split(":")[1];
      r({
        network: m,
        chainId: _,
        address: p,
        shortenedAddress: nc(p)
      });
    }
  }), fh(({ params: l, topic: u }) => {
    const f = l.event.address ?? l.event.data.address, p = l.chainId.split(":")[0], m = l.chainId.split(":")[1];
    r({
      network: p,
      chainId: m,
      address: f,
      shortenedAddress: nc(f)
    });
  }), hh(({ params: l, topic: u }) => {
    n();
  }), Lr(() => {
    t && !o && s();
  }, [t == null ? void 0 : t.topic]), Lr(() => {
    if (i) {
      const l = i, u = l == null ? void 0 : l.account;
      u && r(u);
    }
  }, [i]);
  const c = a ? a.message : i && i.error;
  return {
    account: e,
    error: c,
    loading: o
  };
}, Z6 = ({ address: t, multisig: e }) => {
  const r = Sr(), [n] = hn((f) => [f.account]), {
    refetch: s,
    data: i,
    error: a,
    isLoading: o
  } = Yi({
    queryKey: [
      "useBalance",
      t,
      (n == null ? void 0 : n.address) ?? "",
      e,
      r == null ? void 0 : r.topic
    ],
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
  Gi(({ params: f, topic: p }) => {
    const m = f.event.name, _ = f.event.address ?? f.event.data.address;
    (m === "selectedAccountSynced" && !e || m === "sharedAccountSynced" && e && _ === t) && s();
  }), Lr(() => {
    r && !o && s();
  }, [r == null ? void 0 : r.topic]);
  const c = a ? a.message : i && i.error, l = i;
  return { balances: l == null ? void 0 : l.balances, error: c, loading: o };
}, Fg = Symbol(), Hl = Object.getPrototypeOf, sc = /* @__PURE__ */ new WeakMap(), Bg = (t) => t && (sc.has(t) ? sc.get(t) : Hl(t) === Object.prototype || Hl(t) === Array.prototype), Hg = (t) => Bg(t) && t[Fg] || null, Gl = (t, e = !0) => {
  sc.set(t, e);
};
var Do = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const za = (t) => typeof t == "object" && t !== null, En = /* @__PURE__ */ new WeakMap(), yo = /* @__PURE__ */ new WeakSet(), Gg = (t = Object.is, e = (l, u) => new Proxy(l, u), r = (l) => za(l) && !yo.has(l) && (Array.isArray(l) || !(Symbol.iterator in l)) && !(l instanceof WeakMap) && !(l instanceof WeakSet) && !(l instanceof Error) && !(l instanceof Number) && !(l instanceof Date) && !(l instanceof String) && !(l instanceof RegExp) && !(l instanceof ArrayBuffer), n = (l) => {
  switch (l.status) {
    case "fulfilled":
      return l.value;
    case "rejected":
      throw l.reason;
    default:
      throw l;
  }
}, s = /* @__PURE__ */ new WeakMap(), i = (l, u, f = n) => {
  const p = s.get(l);
  if ((p == null ? void 0 : p[0]) === u)
    return p[1];
  const m = Array.isArray(l) ? [] : Object.create(Object.getPrototypeOf(l));
  return Gl(m, !0), s.set(l, [u, m]), Reflect.ownKeys(l).forEach((_) => {
    if (Object.getOwnPropertyDescriptor(m, _))
      return;
    const E = Reflect.get(l, _), T = {
      value: E,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (yo.has(E))
      Gl(E, !1);
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
}, a = /* @__PURE__ */ new WeakMap(), o = [1, 1], c = (l) => {
  if (!za(l))
    throw new Error("object required");
  const u = a.get(l);
  if (u)
    return u;
  let f = o[0];
  const p = /* @__PURE__ */ new Set(), m = (g, P = ++o[0]) => {
    f !== P && (f = P, p.forEach((N) => N(g, P)));
  };
  let _ = o[1];
  const E = (g = ++o[1]) => (_ !== g && !p.size && (_ = g, M.forEach(([P]) => {
    const N = P[1](g);
    N > f && (f = N);
  })), f), T = (g) => (P, N) => {
    const D = [...P];
    D[1] = [g, ...D[1]], m(D, N);
  }, M = /* @__PURE__ */ new Map(), v = (g, P) => {
    if ((Do ? "production" : void 0) !== "production" && M.has(g))
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
  }, b = (g) => (p.add(g), p.size === 1 && M.forEach(([P, N], D) => {
    if ((Do ? "production" : void 0) !== "production" && N)
      throw new Error("remove already exists");
    const G = P[3](T(D));
    M.set(D, [P, G]);
  }), () => {
    p.delete(g), p.size === 0 && M.forEach(([P, N], D) => {
      N && (N(), M.set(D, [P]));
    });
  }), x = Array.isArray(l) ? [] : Object.create(Object.getPrototypeOf(l)), y = e(x, {
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
      O(P), za(N) && (N = Hg(N) || N);
      let C = N;
      if (N instanceof Promise)
        N.then((A) => {
          N.status = "fulfilled", N.value = A, m(["resolve", [P], A]);
        }).catch((A) => {
          N.status = "rejected", N.reason = A, m(["reject", [P], A]);
        });
      else {
        !En.has(N) && r(N) && (C = c(N));
        const A = !yo.has(C) && En.get(C);
        A && v(P, A);
      }
      return Reflect.set(g, P, C, D), m(["set", [P], N, Y]), !0;
    }
  });
  a.set(l, y);
  const d = [
    x,
    E,
    i,
    b
  ];
  return En.set(y, d), Reflect.ownKeys(l).forEach((g) => {
    const P = Object.getOwnPropertyDescriptor(
      l,
      g
    );
    "value" in P && (y[g] = l[g], delete P.value, delete P.writable), Object.defineProperty(x, g, P);
  }), y;
}) => [
  // public functions
  c,
  // shared state
  En,
  yo,
  // internal things
  t,
  e,
  r,
  n,
  s,
  i,
  a,
  o
], [Yg] = Gg();
function zn(t = {}) {
  return Yg(t);
}
function as(t, e, r) {
  const n = En.get(t);
  (Do ? "production" : void 0) !== "production" && !n && console.warn("Please use proxy object");
  let s;
  const i = [], a = n[3];
  let o = !1;
  const c = a((l) => {
    if (i.push(l), r) {
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
function Jg(t, e) {
  const r = En.get(t);
  (Do ? "production" : void 0) !== "production" && !r && console.warn("Please use proxy object");
  const [n, s, i] = r;
  return i(n, s(), e);
}
const Rt = zn({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), gh = { state: Rt, subscribe(t) {
  return as(Rt, () => t(Rt));
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
  const e = (t = gh.state.data) == null ? void 0 : t.Wallet;
  if (!e)
    throw new Error('Missing "Wallet" view data');
  return e;
} }, Xg = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), Zt = zn({ enabled: Xg, userSessionId: "", events: [], connectedWalletId: void 0 }), Qg = { state: Zt, subscribe(t) {
  return as(Zt.events, () => t(Jg(Zt.events[Zt.events.length - 1])));
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
} }, Zr = zn({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }), Cr = { state: Zr, subscribe(t) {
  return as(Zr, () => t(Zr));
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
} }, mo = zn({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), Ds = { state: mo, subscribe(t) {
  return as(mo, () => t(mo));
}, setConfig(t) {
  var e, r;
  Qg.initialize(), Cr.setChains(t.chains), Cr.setIsAuth(!!t.enableAuthMode), Cr.setIsCustomMobile(!!((e = t.mobileWallets) != null && e.length)), Cr.setIsCustomDesktop(!!((r = t.desktopWallets) != null && r.length)), Bt.setModalVersionInStorage(), Object.assign(mo, t);
} };
var ey = Object.defineProperty, Yl = Object.getOwnPropertySymbols, ty = Object.prototype.hasOwnProperty, ry = Object.prototype.propertyIsEnumerable, Jl = (t, e, r) => e in t ? ey(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ny = (t, e) => {
  for (var r in e || (e = {}))
    ty.call(e, r) && Jl(t, r, e[r]);
  if (Yl)
    for (var r of Yl(e))
      ry.call(e, r) && Jl(t, r, e[r]);
  return t;
};
const ic = "https://explorer-api.walletconnect.com", oc = "wcm", ac = "js-2.6.2";
async function vo(t, e) {
  const r = ny({ sdkType: oc, sdkVersion: ac }, e), n = new URL(t, ic);
  return n.searchParams.append("projectId", Ds.state.projectId), Object.entries(r).forEach(([s, i]) => {
    i && n.searchParams.append(s, String(i));
  }), (await fetch(n)).json();
}
const Vn = { async getDesktopListings(t) {
  return vo("/w3m/v1/getDesktopListings", t);
}, async getMobileListings(t) {
  return vo("/w3m/v1/getMobileListings", t);
}, async getInjectedListings(t) {
  return vo("/w3m/v1/getInjectedListings", t);
}, async getAllListings(t) {
  return vo("/w3m/v1/getAllListings", t);
}, getWalletImageUrl(t) {
  return `${ic}/w3m/v1/getWalletImage/${t}?projectId=${Ds.state.projectId}&sdkType=${oc}&sdkVersion=${ac}`;
}, getAssetImageUrl(t) {
  return `${ic}/w3m/v1/getAssetImage/${t}?projectId=${Ds.state.projectId}&sdkType=${oc}&sdkVersion=${ac}`;
} };
var sy = Object.defineProperty, Xl = Object.getOwnPropertySymbols, iy = Object.prototype.hasOwnProperty, oy = Object.prototype.propertyIsEnumerable, Ql = (t, e, r) => e in t ? sy(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ay = (t, e) => {
  for (var r in e || (e = {}))
    iy.call(e, r) && Ql(t, r, e[r]);
  if (Xl)
    for (var r of Xl(e))
      oy.call(e, r) && Ql(t, r, e[r]);
  return t;
};
const eu = Bt.isMobile(), Kr = zn({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), K6 = { state: Kr, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: t, explorerExcludedWalletIds: e } = Ds.state;
  if (t === "NONE" || e === "ALL" && !t)
    return Kr.recomendedWallets;
  if (Bt.isArray(t)) {
    const r = { recommendedIds: t.join(",") }, { listings: n } = await Vn.getAllListings(r), s = Object.values(n);
    s.sort((i, a) => {
      const o = t.indexOf(i.id), c = t.indexOf(a.id);
      return o - c;
    }), Kr.recomendedWallets = s;
  } else {
    const { chains: r, isAuth: n } = Cr.state, s = r == null ? void 0 : r.join(","), i = Bt.isArray(e), a = { page: 1, sdks: n ? "auth_v1" : void 0, entries: Bt.RECOMMENDED_WALLET_AMOUNT, chains: s, version: 2, excludedIds: i ? e.join(",") : void 0 }, { listings: o } = eu ? await Vn.getMobileListings(a) : await Vn.getDesktopListings(a);
    Kr.recomendedWallets = Object.values(o);
  }
  return Kr.recomendedWallets;
}, async getWallets(t) {
  const e = ay({}, t), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: n } = Ds.state, { recomendedWallets: s } = Kr;
  if (n === "ALL")
    return Kr.wallets;
  s.length ? e.excludedIds = s.map((f) => f.id).join(",") : Bt.isArray(r) && (e.excludedIds = r.join(",")), Bt.isArray(n) && (e.excludedIds = [e.excludedIds, n].filter(Boolean).join(",")), Cr.state.isAuth && (e.sdks = "auth_v1");
  const { page: i, search: a } = t, { listings: o, total: c } = eu ? await Vn.getMobileListings(e) : await Vn.getDesktopListings(e), l = Object.values(o), u = a ? "search" : "wallets";
  return Kr[u] = { listings: [...Kr[u].listings, ...l], total: c, page: i ?? 1 }, { listings: l, total: c };
}, getWalletImageUrl(t) {
  return Vn.getWalletImageUrl(t);
}, getAssetImageUrl(t) {
  return Vn.getAssetImageUrl(t);
}, resetSearch() {
  Kr.search = { listings: [], total: 0, page: 1 };
} }, ps = zn({ open: !1 }), Ua = { state: ps, subscribe(t) {
  return as(ps, () => t(ps));
}, async open(t) {
  return new Promise((e) => {
    const { isUiLoaded: r, isDataLoaded: n } = Cr.state;
    if (Bt.removeWalletConnectDeepLink(), Cr.setWalletConnectUri(t == null ? void 0 : t.uri), Cr.setChains(t == null ? void 0 : t.chains), gh.reset("ConnectWallet"), r && n)
      ps.open = !0, e();
    else {
      const s = setInterval(() => {
        const i = Cr.state;
        i.isUiLoaded && i.isDataLoaded && (clearInterval(s), ps.open = !0, e());
      }, 200);
    }
  });
}, close() {
  ps.open = !1;
} };
var cy = Object.defineProperty, tu = Object.getOwnPropertySymbols, ly = Object.prototype.hasOwnProperty, uy = Object.prototype.propertyIsEnumerable, ru = (t, e, r) => e in t ? cy(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, dy = (t, e) => {
  for (var r in e || (e = {}))
    ly.call(e, r) && ru(t, r, e[r]);
  if (tu)
    for (var r of tu(e))
      uy.call(e, r) && ru(t, r, e[r]);
  return t;
};
function hy() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const Qs = zn({ themeMode: hy() ? "dark" : "light" }), nu = { state: Qs, subscribe(t) {
  return as(Qs, () => t(Qs));
}, setThemeConfig(t) {
  const { themeMode: e, themeVariables: r } = t;
  e && (Qs.themeMode = e), r && (Qs.themeVariables = dy({}, r));
} }, Zn = zn({ open: !1, message: "", variant: "success" }), W6 = { state: Zn, subscribe(t) {
  return as(Zn, () => t(Zn));
}, openToast(t, e) {
  Zn.open = !0, Zn.message = t, Zn.variant = e;
}, closeToast() {
  Zn.open = !1;
} };
let fy = class {
  constructor(t) {
    this.openModal = Ua.open, this.closeModal = Ua.close, this.subscribeModal = Ua.subscribe, this.setTheme = nu.setThemeConfig, nu.setThemeConfig(t), Ds.setConfig(t), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-DpyyKo78-CCbzwXjV.js");
      const t = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", t), Cr.setIsUiLoaded(!0);
    }
  }
};
var Tn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ma(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function va(t) {
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
var cl = { exports: {} }, Os = typeof Reflect == "object" ? Reflect : null, su = Os && typeof Os.apply == "function" ? Os.apply : function(t, e, r) {
  return Function.prototype.apply.call(t, e, r);
}, ko;
Os && typeof Os.ownKeys == "function" ? ko = Os.ownKeys : Object.getOwnPropertySymbols ? ko = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : ko = function(t) {
  return Object.getOwnPropertyNames(t);
};
function py(t) {
  console && console.warn && console.warn(t);
}
var yh = Number.isNaN || function(t) {
  return t !== t;
};
function et() {
  et.init.call(this);
}
cl.exports = et;
cl.exports.once = vy;
et.EventEmitter = et;
et.prototype._events = void 0;
et.prototype._eventsCount = 0;
et.prototype._maxListeners = void 0;
var iu = 10;
function wa(t) {
  if (typeof t != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
}
Object.defineProperty(et, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return iu;
  },
  set: function(t) {
    if (typeof t != "number" || t < 0 || yh(t))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
    iu = t;
  }
});
et.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
et.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || yh(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function mh(t) {
  return t._maxListeners === void 0 ? et.defaultMaxListeners : t._maxListeners;
}
et.prototype.getMaxListeners = function() {
  return mh(this);
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
    su(o, this, e);
  else
    for (var c = o.length, l = Eh(o, c), r = 0; r < c; ++r)
      su(l[r], this, e);
  return !0;
};
function vh(t, e, r, n) {
  var s, i, a;
  if (wa(r), i = t._events, i === void 0 ? (i = t._events = /* @__PURE__ */ Object.create(null), t._eventsCount = 0) : (i.newListener !== void 0 && (t.emit(
    "newListener",
    e,
    r.listener ? r.listener : r
  ), i = t._events), a = i[e]), a === void 0)
    a = i[e] = r, ++t._eventsCount;
  else if (typeof a == "function" ? a = i[e] = n ? [r, a] : [a, r] : n ? a.unshift(r) : a.push(r), s = mh(t), s > 0 && a.length > s && !a.warned) {
    a.warned = !0;
    var o = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    o.name = "MaxListenersExceededWarning", o.emitter = t, o.type = e, o.count = a.length, py(o);
  }
  return t;
}
et.prototype.addListener = function(t, e) {
  return vh(this, t, e, !1);
};
et.prototype.on = et.prototype.addListener;
et.prototype.prependListener = function(t, e) {
  return vh(this, t, e, !0);
};
function gy() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function wh(t, e, r) {
  var n = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r }, s = gy.bind(n);
  return s.listener = r, n.wrapFn = s, s;
}
et.prototype.once = function(t, e) {
  return wa(e), this.on(t, wh(this, t, e)), this;
};
et.prototype.prependOnceListener = function(t, e) {
  return wa(e), this.prependListener(t, wh(this, t, e)), this;
};
et.prototype.removeListener = function(t, e) {
  var r, n, s, i, a;
  if (wa(e), n = this._events, n === void 0)
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
    s === 0 ? r.shift() : yy(r, s), r.length === 1 && (n[t] = r[0]), n.removeListener !== void 0 && this.emit("removeListener", t, a || e);
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
function _h(t, e, r) {
  var n = t._events;
  if (n === void 0)
    return [];
  var s = n[e];
  return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? my(s) : Eh(s, s.length);
}
et.prototype.listeners = function(t) {
  return _h(this, t, !0);
};
et.prototype.rawListeners = function(t) {
  return _h(this, t, !1);
};
et.listenerCount = function(t, e) {
  return typeof t.listenerCount == "function" ? t.listenerCount(e) : bh.call(t, e);
};
et.prototype.listenerCount = bh;
function bh(t) {
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
function Eh(t, e) {
  for (var r = new Array(e), n = 0; n < e; ++n)
    r[n] = t[n];
  return r;
}
function yy(t, e) {
  for (; e + 1 < t.length; e++)
    t[e] = t[e + 1];
  t.pop();
}
function my(t) {
  for (var e = new Array(t.length), r = 0; r < e.length; ++r)
    e[r] = t[r].listener || t[r];
  return e;
}
function vy(t, e) {
  return new Promise(function(r, n) {
    function s(a) {
      t.removeListener(e, i), n(a);
    }
    function i() {
      typeof t.removeListener == "function" && t.removeListener("error", s), r([].slice.call(arguments));
    }
    Sh(t, e, i, { once: !0 }), e !== "error" && wy(t, s, { once: !0 });
  });
}
function wy(t, e, r) {
  typeof t.on == "function" && Sh(t, "error", e, r);
}
function Sh(t, e, r, n) {
  if (typeof t.on == "function")
    n.once ? t.once(e, r) : t.on(e, r);
  else if (typeof t.addEventListener == "function")
    t.addEventListener(e, function s(i) {
      n.once && t.removeEventListener(e, s), r(i);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
}
var zr = cl.exports;
const ll = /* @__PURE__ */ ma(zr), _y = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, by = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, Ey = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function Sy(t, e) {
  if (t === "__proto__" || t === "constructor" && e && typeof e == "object" && "prototype" in e) {
    xy(t);
    return;
  }
  return e;
}
function xy(t) {
  console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`);
}
function wo(t, e = {}) {
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
  if (!Ey.test(t)) {
    if (e.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return t;
  }
  try {
    if (_y.test(t) || by.test(t)) {
      if (e.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(t, Sy);
    }
    return JSON.parse(t);
  } catch (n) {
    if (e.strict)
      throw n;
    return t;
  }
}
function Iy(t) {
  return !t || typeof t.then != "function" ? Promise.resolve(t) : t;
}
function At(t, ...e) {
  try {
    return Iy(t(...e));
  } catch (r) {
    return Promise.reject(r);
  }
}
function Oy(t) {
  const e = typeof t;
  return t === null || e !== "object" && e !== "function";
}
function Ty(t) {
  const e = Object.getPrototypeOf(t);
  return !e || e.isPrototypeOf(Object);
}
function Po(t) {
  if (Oy(t))
    return String(t);
  if (Ty(t) || Array.isArray(t))
    return JSON.stringify(t);
  if (typeof t.toJSON == "function")
    return Po(t.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function xh() {
  if (typeof Buffer === void 0)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
const cc = "base64:";
function Cy(t) {
  if (typeof t == "string")
    return t;
  xh();
  const e = Buffer.from(t).toString("base64");
  return cc + e;
}
function ky(t) {
  return typeof t != "string" || !t.startsWith(cc) ? t : (xh(), Buffer.from(t.slice(cc.length), "base64"));
}
function cr(t) {
  return t ? t.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : "";
}
function Py(...t) {
  return cr(t.join(":"));
}
function _o(t) {
  return t = cr(t), t ? t + ":" : "";
}
const Ny = "memory", Ry = () => {
  const t = /* @__PURE__ */ new Map();
  return {
    name: Ny,
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
function Ay(t = {}) {
  const e = {
    mounts: { "": t.driver || Ry() },
    mountpoints: [""],
    watching: !1,
    watchListeners: [],
    unwatch: {}
  }, r = (l) => {
    for (const u of e.mountpoints)
      if (l.startsWith(u))
        return {
          base: u,
          relativeKey: l.slice(u.length),
          driver: e.mounts[u]
        };
    return {
      base: "",
      relativeKey: l,
      driver: e.mounts[""]
    };
  }, n = (l, u) => e.mountpoints.filter(
    (f) => f.startsWith(l) || u && l.startsWith(f)
  ).map((f) => ({
    relativeBase: l.length > f.length ? l.slice(f.length) : void 0,
    mountpoint: f,
    driver: e.mounts[f]
  })), s = (l, u) => {
    if (e.watching) {
      u = cr(u);
      for (const f of e.watchListeners)
        f(l, u);
    }
  }, i = async () => {
    if (!e.watching) {
      e.watching = !0;
      for (const l in e.mounts)
        e.unwatch[l] = await ou(
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
  }, o = (l, u, f) => {
    const p = /* @__PURE__ */ new Map(), m = (_) => {
      let E = p.get(_.base);
      return E || (E = {
        driver: _.driver,
        base: _.base,
        items: []
      }, p.set(_.base, E)), E;
    };
    for (const _ of l) {
      const E = typeof _ == "string", T = cr(E ? _ : _.key), M = E ? void 0 : _.value, v = E || !_.options ? u : { ...u, ..._.options }, O = r(T);
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
    hasItem(l, u = {}) {
      l = cr(l);
      const { relativeKey: f, driver: p } = r(l);
      return At(p.hasItem, f, u);
    },
    getItem(l, u = {}) {
      l = cr(l);
      const { relativeKey: f, driver: p } = r(l);
      return At(p.getItem, f, u).then(
        (m) => wo(m)
      );
    },
    getItems(l, u) {
      return o(l, u, (f) => f.driver.getItems ? At(
        f.driver.getItems,
        f.items.map((p) => ({
          key: p.relativeKey,
          options: p.options
        })),
        u
      ).then(
        (p) => p.map((m) => ({
          key: Py(f.base, m.key),
          value: wo(m.value)
        }))
      ) : Promise.all(
        f.items.map((p) => At(
          f.driver.getItem,
          p.relativeKey,
          p.options
        ).then((m) => ({
          key: p.key,
          value: wo(m)
        })))
      ));
    },
    getItemRaw(l, u = {}) {
      l = cr(l);
      const { relativeKey: f, driver: p } = r(l);
      return p.getItemRaw ? At(p.getItemRaw, f, u) : At(p.getItem, f, u).then(
        (m) => ky(m)
      );
    },
    async setItem(l, u, f = {}) {
      if (u === void 0)
        return c.removeItem(l);
      l = cr(l);
      const { relativeKey: p, driver: m } = r(l);
      m.setItem && (await At(m.setItem, p, Po(u), f), m.watch || s("update", l));
    },
    async setItems(l, u) {
      await o(l, u, async (f) => {
        f.driver.setItems && await At(
          f.driver.setItems,
          f.items.map((p) => ({
            key: p.relativeKey,
            value: Po(p.value),
            options: p.options
          })),
          u
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
    async setItemRaw(l, u, f = {}) {
      if (u === void 0)
        return c.removeItem(l, f);
      l = cr(l);
      const { relativeKey: p, driver: m } = r(l);
      if (m.setItemRaw)
        await At(m.setItemRaw, p, u, f);
      else if (m.setItem)
        await At(m.setItem, p, Cy(u), f);
      else
        return;
      m.watch || s("update", l);
    },
    async removeItem(l, u = {}) {
      typeof u == "boolean" && (u = { removeMeta: u }), l = cr(l);
      const { relativeKey: f, driver: p } = r(l);
      p.removeItem && (await At(p.removeItem, f, u), (u.removeMeta || u.removeMata) && await At(p.removeItem, f + "$", u), p.watch || s("remove", l));
    },
    // Meta
    async getMeta(l, u = {}) {
      typeof u == "boolean" && (u = { nativeOnly: u }), l = cr(l);
      const { relativeKey: f, driver: p } = r(l), m = /* @__PURE__ */ Object.create(null);
      if (p.getMeta && Object.assign(m, await At(p.getMeta, f, u)), !u.nativeOnly) {
        const _ = await At(
          p.getItem,
          f + "$",
          u
        ).then((E) => wo(E));
        _ && typeof _ == "object" && (typeof _.atime == "string" && (_.atime = new Date(_.atime)), typeof _.mtime == "string" && (_.mtime = new Date(_.mtime)), Object.assign(m, _));
      }
      return m;
    },
    setMeta(l, u, f = {}) {
      return this.setItem(l + "$", u, f);
    },
    removeMeta(l, u = {}) {
      return this.removeItem(l + "$", u);
    },
    // Keys
    async getKeys(l, u = {}) {
      l = _o(l);
      const f = n(l, !0);
      let p = [];
      const m = [];
      for (const _ of f) {
        const E = (await At(
          _.driver.getKeys,
          _.relativeBase,
          u
        )).map((T) => _.mountpoint + cr(T)).filter((T) => !p.some((M) => T.startsWith(M)));
        m.push(...E), p = [
          _.mountpoint,
          ...p.filter((T) => !T.startsWith(_.mountpoint))
        ];
      }
      return l ? m.filter((_) => _.startsWith(l) && !_.endsWith("$")) : m.filter((_) => !_.endsWith("$"));
    },
    // Utils
    async clear(l, u = {}) {
      l = _o(l), await Promise.all(
        n(l, !1).map(async (f) => {
          if (f.driver.clear)
            return At(f.driver.clear, f.relativeBase, u);
          if (f.driver.removeItem) {
            const p = await f.driver.getKeys(f.relativeBase || "", u);
            return Promise.all(
              p.map((m) => f.driver.removeItem(m, u))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(e.mounts).map((l) => au(l))
      );
    },
    async watch(l) {
      return await i(), e.watchListeners.push(l), async () => {
        e.watchListeners = e.watchListeners.filter(
          (u) => u !== l
        ), e.watchListeners.length === 0 && await a();
      };
    },
    async unwatch() {
      e.watchListeners = [], await a();
    },
    // Mount
    mount(l, u) {
      if (l = _o(l), l && e.mounts[l])
        throw new Error(`already mounted at ${l}`);
      return l && (e.mountpoints.push(l), e.mountpoints.sort((f, p) => p.length - f.length)), e.mounts[l] = u, e.watching && Promise.resolve(ou(u, s, l)).then((f) => {
        e.unwatch[l] = f;
      }).catch(console.error), c;
    },
    async unmount(l, u = !0) {
      l = _o(l), !(!l || !e.mounts[l]) && (e.watching && l in e.unwatch && (e.unwatch[l](), delete e.unwatch[l]), u && await au(e.mounts[l]), e.mountpoints = e.mountpoints.filter((f) => f !== l), delete e.mounts[l]);
    },
    getMount(l = "") {
      l = cr(l) + ":";
      const u = r(l);
      return {
        driver: u.driver,
        base: u.base
      };
    },
    getMounts(l = "", u = {}) {
      return l = cr(l), n(l, u.parents).map((f) => ({
        driver: f.driver,
        base: f.mountpoint
      }));
    }
  };
  return c;
}
function ou(t, e, r) {
  return t.watch ? t.watch((n, s) => e(n, r + s)) : () => {
  };
}
async function au(t) {
  typeof t.dispose == "function" && await At(t.dispose);
}
function cs(t) {
  return new Promise((e, r) => {
    t.oncomplete = t.onsuccess = () => e(t.result), t.onabort = t.onerror = () => r(t.error);
  });
}
function Ih(t, e) {
  const r = indexedDB.open(t);
  r.onupgradeneeded = () => r.result.createObjectStore(e);
  const n = cs(r);
  return (s, i) => n.then((a) => i(a.transaction(e, s).objectStore(e)));
}
let $a;
function Xi() {
  return $a || ($a = Ih("keyval-store", "keyval")), $a;
}
function cu(t, e = Xi()) {
  return e("readonly", (r) => cs(r.get(t)));
}
function jy(t, e, r = Xi()) {
  return r("readwrite", (n) => (n.put(e, t), cs(n.transaction)));
}
function Ly(t, e = Xi()) {
  return e("readwrite", (r) => (r.delete(t), cs(r.transaction)));
}
function My(t = Xi()) {
  return t("readwrite", (e) => (e.clear(), cs(e.transaction)));
}
function Dy(t, e) {
  return t.openCursor().onsuccess = function() {
    this.result && (e(this.result), this.result.continue());
  }, cs(t.transaction);
}
function zy(t = Xi()) {
  return t("readonly", (e) => {
    if (e.getAllKeys)
      return cs(e.getAllKeys());
    const r = [];
    return Dy(e, (n) => r.push(n.key)).then(() => r);
  });
}
const Uy = (t) => JSON.stringify(t, (e, r) => typeof r == "bigint" ? r.toString() + "n" : r), $y = (t) => {
  const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = t.replace(e, '$1"$2n"$3');
  return JSON.parse(r, (n, s) => typeof s == "string" && s.match(/^\d+n$/) ? BigInt(s.substring(0, s.length - 1)) : s);
};
function _a(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return $y(t);
  } catch {
    return t;
  }
}
function Qi(t) {
  return typeof t == "string" ? t : Uy(t) || "";
}
const qy = "idb-keyval";
var Vy = (t = {}) => {
  const e = t.base && t.base.length > 0 ? `${t.base}:` : "", r = (s) => e + s;
  let n;
  return t.dbName && t.storeName && (n = Ih(t.dbName, t.storeName)), { name: qy, options: t, async hasItem(s) {
    return !(typeof await cu(r(s), n) > "u");
  }, async getItem(s) {
    return await cu(r(s), n) ?? null;
  }, setItem(s, i) {
    return jy(r(s), i, n);
  }, removeItem(s) {
    return Ly(r(s), n);
  }, getKeys() {
    return zy(n);
  }, clear() {
    return My(n);
  } };
};
const Zy = "WALLET_CONNECT_V2_INDEXED_DB", Ky = "keyvaluestorage";
let Wy = class {
  constructor() {
    this.indexedDb = Ay({ driver: Vy({ dbName: Zy, storeName: Ky }) });
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
    await this.indexedDb.setItem(t, Qi(e));
  }
  async removeItem(t) {
    await this.indexedDb.removeItem(t);
  }
};
var qa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, No = { exports: {} };
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
  }), typeof qa < "u" && qa.localStorage ? No.exports = qa.localStorage : typeof window < "u" && window.localStorage ? No.exports = window.localStorage : No.exports = new e();
})();
function Fy(t) {
  var e;
  return [t[0], _a((e = t[1]) != null ? e : "")];
}
class By {
  constructor() {
    this.localStorage = No.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(Fy);
  }
  async getItem(e) {
    const r = this.localStorage.getItem(e);
    if (r !== null)
      return _a(r);
  }
  async setItem(e, r) {
    this.localStorage.setItem(e, Qi(r));
  }
  async removeItem(e) {
    this.localStorage.removeItem(e);
  }
}
const Hy = "wc_storage_version", lu = 1, Gy = async (t, e, r) => {
  const n = Hy, s = await e.getItem(n);
  if (s && s >= lu) {
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
      const l = await t.getItem(o);
      await e.setItem(o, l), a.push(o);
    }
  }
  await e.setItem(n, lu), r(e), Yy(t, a);
}, Yy = async (t, e) => {
  e.length && e.forEach(async (r) => {
    await t.removeItem(r);
  });
};
let Jy = class {
  constructor() {
    this.initialized = !1, this.setInitialized = (e) => {
      this.storage = e, this.initialized = !0;
    };
    const t = new By();
    this.storage = t;
    try {
      const e = new Wy();
      Gy(t, e, this.setInitialized);
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
var Ks = {};
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
var lc = function(t, e) {
  return lc = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var s in n)
      n.hasOwnProperty(s) && (r[s] = n[s]);
  }, lc(t, e);
};
function Xy(t, e) {
  lc(t, e);
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
function Qy(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++)
      e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (r[n[s]] = t[n[s]]);
  return r;
}
function em(t, e, r, n) {
  var s = arguments.length, i = s < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var o = t.length - 1; o >= 0; o--)
      (a = t[o]) && (i = (s < 3 ? a(i) : s > 3 ? a(e, r, i) : a(e, r)) || i);
  return s > 3 && i && Object.defineProperty(e, r, i), i;
}
function tm(t, e) {
  return function(r, n) {
    e(r, n, t);
  };
}
function rm(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function nm(t, e, r, n) {
  function s(i) {
    return i instanceof r ? i : new r(function(a) {
      a(i);
    });
  }
  return new (r || (r = Promise))(function(i, a) {
    function o(u) {
      try {
        l(n.next(u));
      } catch (f) {
        a(f);
      }
    }
    function c(u) {
      try {
        l(n.throw(u));
      } catch (f) {
        a(f);
      }
    }
    function l(u) {
      u.done ? i(u.value) : s(u.value).then(o, c);
    }
    l((n = n.apply(t, e || [])).next());
  });
}
function sm(t, e) {
  var r = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, s, i, a;
  return a = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function o(l) {
    return function(u) {
      return c([l, u]);
    };
  }
  function c(l) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, s && (i = l[0] & 2 ? s.return : l[0] ? s.throw || ((i = s.return) && i.call(s), 0) : s.next) && !(i = i.call(s, l[1])).done)
          return i;
        switch (s = 0, i && (l = [l[0] & 2, i.value]), l[0]) {
          case 0:
          case 1:
            i = l;
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
            if (i = r.trys, !(i = i.length > 0 && i[i.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              r = 0;
              continue;
            }
            if (l[0] === 3 && (!i || l[1] > i[0] && l[1] < i[3])) {
              r.label = l[1];
              break;
            }
            if (l[0] === 6 && r.label < i[1]) {
              r.label = i[1], i = l;
              break;
            }
            if (i && r.label < i[2]) {
              r.label = i[2], r.ops.push(l);
              break;
            }
            i[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        l = e.call(t, r);
      } catch (u) {
        l = [6, u], s = 0;
      } finally {
        n = i = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function im(t, e, r, n) {
  n === void 0 && (n = r), t[n] = e[r];
}
function om(t, e) {
  for (var r in t)
    r !== "default" && !e.hasOwnProperty(r) && (e[r] = t[r]);
}
function dc(t) {
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
function Oh(t, e) {
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
function am() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(Oh(arguments[e]));
  return t;
}
function cm() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var n = Array(t), s = 0, e = 0; e < r; e++)
    for (var i = arguments[e], a = 0, o = i.length; a < o; a++, s++)
      n[s] = i[a];
  return n;
}
function gi(t) {
  return this instanceof gi ? (this.v = t, this) : new gi(t);
}
function lm(t, e, r) {
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
    p.value instanceof gi ? Promise.resolve(p.value.v).then(l, u) : f(i[0][2], p);
  }
  function l(p) {
    o("next", p);
  }
  function u(p) {
    o("throw", p);
  }
  function f(p, m) {
    p(m), i.shift(), i.length && o(i[0][0], i[0][1]);
  }
}
function um(t) {
  var e, r;
  return e = {}, n("next"), n("throw", function(s) {
    throw s;
  }), n("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function n(s, i) {
    e[s] = t[s] ? function(a) {
      return (r = !r) ? { value: gi(t[s](a)), done: s === "return" } : i ? i(a) : a;
    } : i;
  }
}
function dm(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof dc == "function" ? dc(t) : t[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
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
    Promise.resolve(c).then(function(l) {
      i({ value: l, done: o });
    }, a);
  }
}
function hm(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
function fm(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var r in t)
      Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e.default = t, e;
}
function pm(t) {
  return t && t.__esModule ? t : { default: t };
}
function gm(t, e) {
  if (!e.has(t))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(t);
}
function ym(t, e, r) {
  if (!e.has(t))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(t, r), r;
}
const mm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return uc;
  },
  __asyncDelegator: um,
  __asyncGenerator: lm,
  __asyncValues: dm,
  __await: gi,
  __awaiter: nm,
  __classPrivateFieldGet: gm,
  __classPrivateFieldSet: ym,
  __createBinding: im,
  __decorate: em,
  __exportStar: om,
  __extends: Xy,
  __generator: sm,
  __importDefault: pm,
  __importStar: fm,
  __makeTemplateObject: hm,
  __metadata: rm,
  __param: tm,
  __read: Oh,
  __rest: Qy,
  __spread: am,
  __spreadArrays: cm,
  __values: dc
}, Symbol.toStringTag, { value: "Module" })), Qr = /* @__PURE__ */ va(mm);
var ei = {}, ae = {}, uu = {}, ti = {}, du;
function vm() {
  if (du)
    return ti;
  du = 1, Object.defineProperty(ti, "__esModule", { value: !0 }), ti.delay = void 0;
  function t(e) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, e);
    });
  }
  return ti.delay = t, ti;
}
var Kn = {}, hu = {}, gs = {}, fu;
function wm() {
  return fu || (fu = 1, Object.defineProperty(gs, "__esModule", { value: !0 }), gs.ONE_THOUSAND = gs.ONE_HUNDRED = void 0, gs.ONE_HUNDRED = 100, gs.ONE_THOUSAND = 1e3), gs;
}
var pu = {}, gu;
function _m() {
  return gu || (gu = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = t.ONE_MINUTE * 5, t.TEN_MINUTES = t.ONE_MINUTE * 10, t.THIRTY_MINUTES = t.ONE_MINUTE * 30, t.SIXTY_MINUTES = t.ONE_MINUTE * 60, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = t.ONE_HOUR * 3, t.SIX_HOURS = t.ONE_HOUR * 6, t.TWELVE_HOURS = t.ONE_HOUR * 12, t.TWENTY_FOUR_HOURS = t.ONE_HOUR * 24, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = t.ONE_DAY * 3, t.FIVE_DAYS = t.ONE_DAY * 5, t.SEVEN_DAYS = t.ONE_DAY * 7, t.THIRTY_DAYS = t.ONE_DAY * 30, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = t.ONE_WEEK * 2, t.THREE_WEEKS = t.ONE_WEEK * 3, t.FOUR_WEEKS = t.ONE_WEEK * 4, t.ONE_YEAR = t.ONE_DAY * 365;
  }(pu)), pu;
}
var yu;
function Th() {
  return yu || (yu = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = Qr;
    e.__exportStar(wm(), t), e.__exportStar(_m(), t);
  }(hu)), hu;
}
var mu;
function bm() {
  if (mu)
    return Kn;
  mu = 1, Object.defineProperty(Kn, "__esModule", { value: !0 }), Kn.fromMiliseconds = Kn.toMiliseconds = void 0;
  const t = Th();
  function e(n) {
    return n * t.ONE_THOUSAND;
  }
  Kn.toMiliseconds = e;
  function r(n) {
    return Math.floor(n / t.ONE_THOUSAND);
  }
  return Kn.fromMiliseconds = r, Kn;
}
var vu;
function Em() {
  return vu || (vu = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = Qr;
    e.__exportStar(vm(), t), e.__exportStar(bm(), t);
  }(uu)), uu;
}
var ys = {}, wu;
function Sm() {
  if (wu)
    return ys;
  wu = 1, Object.defineProperty(ys, "__esModule", { value: !0 }), ys.Watch = void 0;
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
  return ys.Watch = t, ys.default = t, ys;
}
var _u = {}, ri = {}, bu;
function xm() {
  if (bu)
    return ri;
  bu = 1, Object.defineProperty(ri, "__esModule", { value: !0 }), ri.IWatch = void 0;
  class t {
  }
  return ri.IWatch = t, ri;
}
var Eu;
function Im() {
  return Eu || (Eu = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Qr.__exportStar(xm(), t);
  }(_u)), _u;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = Qr;
  e.__exportStar(Em(), t), e.__exportStar(Sm(), t), e.__exportStar(Im(), t), e.__exportStar(Th(), t);
})(ae);
var Su = {}, ni = {};
let ls = class {
};
const Om = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: ls
}, Symbol.toStringTag, { value: "Module" })), Tm = /* @__PURE__ */ va(Om);
var xu;
function Cm() {
  if (xu)
    return ni;
  xu = 1, Object.defineProperty(ni, "__esModule", { value: !0 }), ni.IHeartBeat = void 0;
  const t = Tm;
  class e extends t.IEvents {
    constructor(n) {
      super();
    }
  }
  return ni.IHeartBeat = e, ni;
}
var Iu;
function Ch() {
  return Iu || (Iu = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Qr.__exportStar(Cm(), t);
  }(Su)), Su;
}
var Ou = {}, Wn = {}, Tu;
function km() {
  if (Tu)
    return Wn;
  Tu = 1, Object.defineProperty(Wn, "__esModule", { value: !0 }), Wn.HEARTBEAT_EVENTS = Wn.HEARTBEAT_INTERVAL = void 0;
  const t = ae;
  return Wn.HEARTBEAT_INTERVAL = t.FIVE_SECONDS, Wn.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, Wn;
}
var Cu;
function kh() {
  return Cu || (Cu = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), Qr.__exportStar(km(), t);
  }(Ou)), Ou;
}
var ku;
function Pm() {
  if (ku)
    return ei;
  ku = 1, Object.defineProperty(ei, "__esModule", { value: !0 }), ei.HeartBeat = void 0;
  const t = Qr, e = zr, r = ae, n = Ch(), s = kh();
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
  return ei.HeartBeat = i, ei;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = Qr;
  e.__exportStar(Pm(), t), e.__exportStar(Ch(), t), e.__exportStar(kh(), t);
})(Ks);
var We = {}, Va, Pu;
function Nm() {
  if (Pu)
    return Va;
  Pu = 1;
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
      for (var l = 1; l < o; l++)
        c[l] = i(n[l]);
      return c.join(" ");
    }
    if (typeof r != "string")
      return r;
    var u = n.length;
    if (u === 0)
      return r;
    for (var f = "", p = 1 - a, m = -1, _ = r && r.length || 0, E = 0; E < _; ) {
      if (r.charCodeAt(E) === 37 && E + 1 < _) {
        switch (m = m > -1 ? m : 0, r.charCodeAt(E + 1)) {
          case 100:
          case 102:
            if (p >= u || n[p] == null)
              break;
            m < E && (f += r.slice(m, E)), f += Number(n[p]), m = E + 2, E++;
            break;
          case 105:
            if (p >= u || n[p] == null)
              break;
            m < E && (f += r.slice(m, E)), f += Math.floor(Number(n[p])), m = E + 2, E++;
            break;
          case 79:
          case 111:
          case 106:
            if (p >= u || n[p] === void 0)
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
            if (p >= u)
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
  return Va;
}
var Za, Nu;
function Rm() {
  if (Nu)
    return Za;
  Nu = 1;
  const t = Nm();
  Za = s;
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
    const P = y.serializers || {}, N = n(y.browser.serialize, P);
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
    C.levels = s.levels, C.level = Y, C.setMaxListeners = C.getMaxListeners = C.emit = C.addListener = C.on = C.prependListener = C.once = C.prependOnceListener = C.removeListener = C.removeAllListeners = C.listeners = C.listenerCount = C.eventNames = C.write = C.flush = T, C.serializers = P, C._serialize = N, C._stdErrSerialize = D, C.child = V, d && (C._logEvent = f());
    function Q() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function Z() {
      return this._level;
    }
    function $(U) {
      if (U !== "silent" && !this.levels.values[U])
        throw Error("unknown level " + U);
      this._level = U, i(A, C, "error", "log"), i(A, C, "fatal", "error"), i(A, C, "warn", "error"), i(A, C, "info", "log"), i(A, C, "debug", "log"), i(A, C, "trace", "log");
    }
    function V(U, K) {
      if (!U)
        throw new Error("missing bindings for child Pino");
      K = K || {}, N && U.serializers && (K.serializers = U.serializers);
      const ye = K.serializers;
      if (N && ye) {
        var W = Object.assign({}, P, ye), de = y.browser.serialize === !0 ? Object.keys(W) : N;
        delete U.serializers, c([U], de, W, this._stdErrSerialize);
      }
      function ne(ue) {
        this._childLevel = (ue._childLevel | 0) + 1, this.error = l(ue, U, "error"), this.fatal = l(ue, U, "fatal"), this.warn = l(ue, U, "warn"), this.info = l(ue, U, "info"), this.debug = l(ue, U, "debug"), this.trace = l(ue, U, "trace"), W && (this.serializers = W, this._serialize = de), d && (this._logEvent = f(
          [].concat(ue._logEvent.bindings, U)
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
  }, s.stdSerializers = r, s.stdTimeFunctions = Object.assign({}, { nullTime: M, epochTime: v, unixTime: O, isoTime: b });
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
          const C = y.transmit.level || d.level, A = s.levels.values[C], Q = s.levels.values[g];
          if (Q < A)
            return;
          u(this, {
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
  function l(y, d, g) {
    return function() {
      const P = new Array(1 + arguments.length);
      P[0] = d;
      for (var N = 1; N < P.length; N++)
        P[N] = arguments[N - 1];
      return y[g].apply(this, P);
    };
  }
  function u(y, d, g) {
    const P = d.send, N = d.ts, D = d.methodLevel, G = d.methodValue, Y = d.val, C = y._logEvent.bindings;
    c(
      g,
      y._serialize || Object.keys(y.serializers),
      y.serializers,
      y._stdErrSerialize === void 0 ? !0 : y._stdErrSerialize
    ), y._logEvent.ts = N, y._logEvent.messages = g.filter(function(A) {
      return C.indexOf(A) === -1;
    }), y._logEvent.level.label = D, y._logEvent.level.value = G, P(D, y._logEvent, Y), y._logEvent = f(C);
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
  function b() {
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
  return Za;
}
var ms = {}, Ru;
function Ph() {
  return Ru || (Ru = 1, Object.defineProperty(ms, "__esModule", { value: !0 }), ms.PINO_CUSTOM_CONTEXT_KEY = ms.PINO_LOGGER_DEFAULTS = void 0, ms.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, ms.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), ms;
}
var Xt = {}, Au;
function Am() {
  if (Au)
    return Xt;
  Au = 1, Object.defineProperty(Xt, "__esModule", { value: !0 }), Xt.generateChildLogger = Xt.formatChildLoggerContext = Xt.getLoggerContext = Xt.setBrowserLoggerContext = Xt.getBrowserLoggerContext = Xt.getDefaultLoggerOptions = void 0;
  const t = Ph();
  function e(o) {
    return Object.assign(Object.assign({}, o), { level: (o == null ? void 0 : o.level) || t.PINO_LOGGER_DEFAULTS.level });
  }
  Xt.getDefaultLoggerOptions = e;
  function r(o, c = t.PINO_CUSTOM_CONTEXT_KEY) {
    return o[c] || "";
  }
  Xt.getBrowserLoggerContext = r;
  function n(o, c, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    return o[l] = c, o;
  }
  Xt.setBrowserLoggerContext = n;
  function s(o, c = t.PINO_CUSTOM_CONTEXT_KEY) {
    let l = "";
    return typeof o.bindings > "u" ? l = r(o, c) : l = o.bindings().context || "", l;
  }
  Xt.getLoggerContext = s;
  function i(o, c, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    const u = s(o, l);
    return u.trim() ? `${u}/${c}` : c;
  }
  Xt.formatChildLoggerContext = i;
  function a(o, c, l = t.PINO_CUSTOM_CONTEXT_KEY) {
    const u = i(o, c, l), f = o.child({ context: u });
    return n(f, u, l);
  }
  return Xt.generateChildLogger = a, Xt;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.pino = void 0;
  const e = Qr, r = e.__importDefault(Rm());
  Object.defineProperty(t, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), e.__exportStar(Ph(), t), e.__exportStar(Am(), t);
})(We);
let jm = class extends ls {
  constructor(t) {
    super(), this.opts = t, this.protocol = "wc", this.version = 2;
  }
}, Lm = class extends ls {
  constructor(t, e) {
    super(), this.core = t, this.logger = e, this.records = /* @__PURE__ */ new Map();
  }
}, Mm = class {
  constructor(t, e) {
    this.logger = t, this.core = e;
  }
}, Dm = class extends ls {
  constructor(t, e) {
    super(), this.relayer = t, this.logger = e;
  }
}, zm = class extends ls {
  constructor(t) {
    super();
  }
}, Um = class {
  constructor(t, e, r, n) {
    this.core = t, this.logger = e, this.name = r;
  }
};
class $m extends ls {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
class qm extends ls {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}
let Vm = class {
  constructor(t, e) {
    this.projectId = t, this.logger = e;
  }
}, Zm = class {
  constructor(t, e) {
    this.projectId = t, this.logger = e;
  }
}, Km = class {
  constructor(t) {
    this.opts = t, this.protocol = "wc", this.version = 2;
  }
}, Wm = class {
  constructor(t) {
    this.client = t;
  }
};
var ul = {}, Ws = {}, ba = {}, Ea = {};
Object.defineProperty(Ea, "__esModule", { value: !0 });
Ea.BrowserRandomSource = void 0;
const ju = 65536;
class Fm {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e && e.getRandomValues !== void 0 && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const r = new Uint8Array(e);
    for (let n = 0; n < r.length; n += ju)
      this._crypto.getRandomValues(r.subarray(n, n + Math.min(r.length - n, ju)));
    return r;
  }
}
Ea.BrowserRandomSource = Fm;
function Bm(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Sa = {}, mr = {};
Object.defineProperty(mr, "__esModule", { value: !0 });
function Hm(t) {
  for (var e = 0; e < t.length; e++)
    t[e] = 0;
  return t;
}
mr.wipe = Hm;
const Gm = {}, Ym = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gm
}, Symbol.toStringTag, { value: "Module" })), Jm = /* @__PURE__ */ va(Ym);
Object.defineProperty(Sa, "__esModule", { value: !0 });
Sa.NodeRandomSource = void 0;
const Xm = mr;
class Qm {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof Bm < "u") {
      const e = Jm;
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
    return (0, Xm.wipe)(r), n;
  }
}
Sa.NodeRandomSource = Qm;
Object.defineProperty(ba, "__esModule", { value: !0 });
ba.SystemRandomSource = void 0;
const ev = Ea, tv = Sa;
class rv {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new ev.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new tv.NodeRandomSource(), this._source.isAvailable) {
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
ba.SystemRandomSource = rv;
var Se = {}, Nh = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  function e(o, c) {
    var l = o >>> 16 & 65535, u = o & 65535, f = c >>> 16 & 65535, p = c & 65535;
    return u * p + (l * p + u * f << 16 >>> 0) | 0;
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
})(Nh);
Object.defineProperty(Se, "__esModule", { value: !0 });
var Rh = Nh;
function nv(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) << 16 >> 16;
}
Se.readInt16BE = nv;
function sv(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) >>> 0;
}
Se.readUint16BE = sv;
function iv(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) << 16 >> 16;
}
Se.readInt16LE = iv;
function ov(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) >>> 0;
}
Se.readUint16LE = ov;
function Ah(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 8, e[r + 1] = t >>> 0, e;
}
Se.writeUint16BE = Ah;
Se.writeInt16BE = Ah;
function jh(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e;
}
Se.writeUint16LE = jh;
Se.writeInt16LE = jh;
function hc(t, e) {
  return e === void 0 && (e = 0), t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
}
Se.readInt32BE = hc;
function fc(t, e) {
  return e === void 0 && (e = 0), (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
}
Se.readUint32BE = fc;
function pc(t, e) {
  return e === void 0 && (e = 0), t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e];
}
Se.readInt32LE = pc;
function gc(t, e) {
  return e === void 0 && (e = 0), (t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]) >>> 0;
}
Se.readUint32LE = gc;
function zo(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 24, e[r + 1] = t >>> 16, e[r + 2] = t >>> 8, e[r + 3] = t >>> 0, e;
}
Se.writeUint32BE = zo;
Se.writeInt32BE = zo;
function Uo(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e[r + 2] = t >>> 16, e[r + 3] = t >>> 24, e;
}
Se.writeUint32LE = Uo;
Se.writeInt32LE = Uo;
function av(t, e) {
  e === void 0 && (e = 0);
  var r = hc(t, e), n = hc(t, e + 4);
  return r * 4294967296 + n - (n >> 31) * 4294967296;
}
Se.readInt64BE = av;
function cv(t, e) {
  e === void 0 && (e = 0);
  var r = fc(t, e), n = fc(t, e + 4);
  return r * 4294967296 + n;
}
Se.readUint64BE = cv;
function lv(t, e) {
  e === void 0 && (e = 0);
  var r = pc(t, e), n = pc(t, e + 4);
  return n * 4294967296 + r - (r >> 31) * 4294967296;
}
Se.readInt64LE = lv;
function uv(t, e) {
  e === void 0 && (e = 0);
  var r = gc(t, e), n = gc(t, e + 4);
  return n * 4294967296 + r;
}
Se.readUint64LE = uv;
function Lh(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), zo(t / 4294967296 >>> 0, e, r), zo(t >>> 0, e, r + 4), e;
}
Se.writeUint64BE = Lh;
Se.writeInt64BE = Lh;
function Mh(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), Uo(t >>> 0, e, r), Uo(t / 4294967296 >>> 0, e, r + 4), e;
}
Se.writeUint64LE = Mh;
Se.writeInt64LE = Mh;
function dv(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var n = 0, s = 1, i = t / 8 + r - 1; i >= r; i--)
    n += e[i] * s, s *= 256;
  return n;
}
Se.readUintBE = dv;
function hv(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var n = 0, s = 1, i = r; i < r + t / 8; i++)
    n += e[i] * s, s *= 256;
  return n;
}
Se.readUintLE = hv;
function fv(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!Rh.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var s = 1, i = t / 8 + n - 1; i >= n; i--)
    r[i] = e / s & 255, s *= 256;
  return r;
}
Se.writeUintBE = fv;
function pv(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!Rh.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var s = 1, i = n; i < n + t / 8; i++)
    r[i] = e / s & 255, s *= 256;
  return r;
}
Se.writeUintLE = pv;
function gv(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e);
}
Se.readFloat32BE = gv;
function yv(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e, !0);
}
Se.readFloat32LE = yv;
function mv(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e);
}
Se.readFloat64BE = mv;
function vv(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e, !0);
}
Se.readFloat64LE = vv;
function wv(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t), e;
}
Se.writeFloat32BE = wv;
function _v(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t, !0), e;
}
Se.writeFloat32LE = _v;
function bv(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t), e;
}
Se.writeFloat64BE = bv;
function Ev(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t, !0), e;
}
Se.writeFloat64LE = Ev;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
  const e = ba, r = Se, n = mr;
  t.defaultRandomSource = new e.SystemRandomSource();
  function s(l, u = t.defaultRandomSource) {
    return u.randomBytes(l);
  }
  t.randomBytes = s;
  function i(l = t.defaultRandomSource) {
    const u = s(4, l), f = (0, r.readUint32LE)(u);
    return (0, n.wipe)(u), f;
  }
  t.randomUint32 = i;
  const a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function o(l, u = a, f = t.defaultRandomSource) {
    if (u.length < 2)
      throw new Error("randomString charset is too short");
    if (u.length > 256)
      throw new Error("randomString charset is too long");
    let p = "";
    const m = u.length, _ = 256 - 256 % m;
    for (; l > 0; ) {
      const E = s(Math.ceil(l * 256 / _), f);
      for (let T = 0; T < E.length && l > 0; T++) {
        const M = E[T];
        M < _ && (p += u.charAt(M % m), l--);
      }
      (0, n.wipe)(E);
    }
    return p;
  }
  t.randomString = o;
  function c(l, u = a, f = t.defaultRandomSource) {
    const p = Math.ceil(l / (Math.log(u.length) / Math.LN2));
    return o(p, u, f);
  }
  t.randomStringForEntropy = c;
})(Ws);
var Dh = {};
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
      }, o.prototype.update = function(c, l) {
        if (l === void 0 && (l = c.length), this._finished)
          throw new Error("SHA512: can't update because hash was finished.");
        var u = 0;
        if (this._bytesHashed += l, this._bufferLength > 0) {
          for (; this._bufferLength < t.BLOCK_SIZE && l > 0; )
            this._buffer[this._bufferLength++] = c[u++], l--;
          this._bufferLength === this.blockSize && (i(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (l >= this.blockSize && (u = i(this._tempHi, this._tempLo, this._stateHi, this._stateLo, c, u, l), l %= this.blockSize); l > 0; )
          this._buffer[this._bufferLength++] = c[u++], l--;
        return this;
      }, o.prototype.finish = function(c) {
        if (!this._finished) {
          var l = this._bytesHashed, u = this._bufferLength, f = l / 536870912 | 0, p = l << 3, m = l % 128 < 112 ? 128 : 256;
          this._buffer[u] = 128;
          for (var _ = u + 1; _ < m - 8; _++)
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
  function i(o, c, l, u, f, p, m) {
    for (var _ = l[0], E = l[1], T = l[2], M = l[3], v = l[4], O = l[5], b = l[6], x = l[7], y = u[0], d = u[1], g = u[2], P = u[3], N = u[4], D = u[5], G = u[6], Y = u[7], C, A, Q, Z, $, V, U, K; m >= 128; ) {
      for (var ye = 0; ye < 16; ye++) {
        var W = 8 * ye + p;
        o[ye] = e.readUint32BE(f, W), c[ye] = e.readUint32BE(f, W + 4);
      }
      for (var ye = 0; ye < 80; ye++) {
        var de = _, ne = E, ue = T, L = M, j = v, k = O, h = b, I = x, H = y, ee = d, je = g, Le = P, Oe = N, Ze = D, at = G, tt = Y;
        if (C = x, A = Y, $ = A & 65535, V = A >>> 16, U = C & 65535, K = C >>> 16, C = (v >>> 14 | N << 18) ^ (v >>> 18 | N << 14) ^ (N >>> 9 | v << 23), A = (N >>> 14 | v << 18) ^ (N >>> 18 | v << 14) ^ (v >>> 9 | N << 23), $ += A & 65535, V += A >>> 16, U += C & 65535, K += C >>> 16, C = v & O ^ ~v & b, A = N & D ^ ~N & G, $ += A & 65535, V += A >>> 16, U += C & 65535, K += C >>> 16, C = s[ye * 2], A = s[ye * 2 + 1], $ += A & 65535, V += A >>> 16, U += C & 65535, K += C >>> 16, C = o[ye % 16], A = c[ye % 16], $ += A & 65535, V += A >>> 16, U += C & 65535, K += C >>> 16, V += $ >>> 16, U += V >>> 16, K += U >>> 16, Q = U & 65535 | K << 16, Z = $ & 65535 | V << 16, C = Q, A = Z, $ = A & 65535, V = A >>> 16, U = C & 65535, K = C >>> 16, C = (_ >>> 28 | y << 4) ^ (y >>> 2 | _ << 30) ^ (y >>> 7 | _ << 25), A = (y >>> 28 | _ << 4) ^ (_ >>> 2 | y << 30) ^ (_ >>> 7 | y << 25), $ += A & 65535, V += A >>> 16, U += C & 65535, K += C >>> 16, C = _ & E ^ _ & T ^ E & T, A = y & d ^ y & g ^ d & g, $ += A & 65535, V += A >>> 16, U += C & 65535, K += C >>> 16, V += $ >>> 16, U += V >>> 16, K += U >>> 16, I = U & 65535 | K << 16, tt = $ & 65535 | V << 16, C = L, A = Le, $ = A & 65535, V = A >>> 16, U = C & 65535, K = C >>> 16, C = Q, A = Z, $ += A & 65535, V += A >>> 16, U += C & 65535, K += C >>> 16, V += $ >>> 16, U += V >>> 16, K += U >>> 16, L = U & 65535 | K << 16, Le = $ & 65535 | V << 16, E = de, T = ne, M = ue, v = L, O = j, b = k, x = h, _ = I, d = H, g = ee, P = je, N = Le, D = Oe, G = Ze, Y = at, y = tt, ye % 16 === 15)
          for (var W = 0; W < 16; W++)
            C = o[W], A = c[W], $ = A & 65535, V = A >>> 16, U = C & 65535, K = C >>> 16, C = o[(W + 9) % 16], A = c[(W + 9) % 16], $ += A & 65535, V += A >>> 16, U += C & 65535, K += C >>> 16, Q = o[(W + 1) % 16], Z = c[(W + 1) % 16], C = (Q >>> 1 | Z << 31) ^ (Q >>> 8 | Z << 24) ^ Q >>> 7, A = (Z >>> 1 | Q << 31) ^ (Z >>> 8 | Q << 24) ^ (Z >>> 7 | Q << 25), $ += A & 65535, V += A >>> 16, U += C & 65535, K += C >>> 16, Q = o[(W + 14) % 16], Z = c[(W + 14) % 16], C = (Q >>> 19 | Z << 13) ^ (Z >>> 29 | Q << 3) ^ Q >>> 6, A = (Z >>> 19 | Q << 13) ^ (Q >>> 29 | Z << 3) ^ (Z >>> 6 | Q << 26), $ += A & 65535, V += A >>> 16, U += C & 65535, K += C >>> 16, V += $ >>> 16, U += V >>> 16, K += U >>> 16, o[W] = U & 65535 | K << 16, c[W] = $ & 65535 | V << 16;
      }
      C = _, A = y, $ = A & 65535, V = A >>> 16, U = C & 65535, K = C >>> 16, C = l[0], A = u[0], $ += A & 65535, V += A >>> 16, U += C & 65535, K += C >>> 16, V += $ >>> 16, U += V >>> 16, K += U >>> 16, l[0] = _ = U & 65535 | K << 16, u[0] = y = $ & 65535 | V << 16, C = E, A = d, $ = A & 65535, V = A >>> 16, U = C & 65535, K = C >>> 16, C = l[1], A = u[1], $ += A & 65535, V += A >>> 16, U += C & 65535, K += C >>> 16, V += $ >>> 16, U += V >>> 16, K += U >>> 16, l[1] = E = U & 65535 | K << 16, u[1] = d = $ & 65535 | V << 16, C = T, A = g, $ = A & 65535, V = A >>> 16, U = C & 65535, K = C >>> 16, C = l[2], A = u[2], $ += A & 65535, V += A >>> 16, U += C & 65535, K += C >>> 16, V += $ >>> 16, U += V >>> 16, K += U >>> 16, l[2] = T = U & 65535 | K << 16, u[2] = g = $ & 65535 | V << 16, C = M, A = P, $ = A & 65535, V = A >>> 16, U = C & 65535, K = C >>> 16, C = l[3], A = u[3], $ += A & 65535, V += A >>> 16, U += C & 65535, K += C >>> 16, V += $ >>> 16, U += V >>> 16, K += U >>> 16, l[3] = M = U & 65535 | K << 16, u[3] = P = $ & 65535 | V << 16, C = v, A = N, $ = A & 65535, V = A >>> 16, U = C & 65535, K = C >>> 16, C = l[4], A = u[4], $ += A & 65535, V += A >>> 16, U += C & 65535, K += C >>> 16, V += $ >>> 16, U += V >>> 16, K += U >>> 16, l[4] = v = U & 65535 | K << 16, u[4] = N = $ & 65535 | V << 16, C = O, A = D, $ = A & 65535, V = A >>> 16, U = C & 65535, K = C >>> 16, C = l[5], A = u[5], $ += A & 65535, V += A >>> 16, U += C & 65535, K += C >>> 16, V += $ >>> 16, U += V >>> 16, K += U >>> 16, l[5] = O = U & 65535 | K << 16, u[5] = D = $ & 65535 | V << 16, C = b, A = G, $ = A & 65535, V = A >>> 16, U = C & 65535, K = C >>> 16, C = l[6], A = u[6], $ += A & 65535, V += A >>> 16, U += C & 65535, K += C >>> 16, V += $ >>> 16, U += V >>> 16, K += U >>> 16, l[6] = b = U & 65535 | K << 16, u[6] = G = $ & 65535 | V << 16, C = x, A = Y, $ = A & 65535, V = A >>> 16, U = C & 65535, K = C >>> 16, C = l[7], A = u[7], $ += A & 65535, V += A >>> 16, U += C & 65535, K += C >>> 16, V += $ >>> 16, U += V >>> 16, K += U >>> 16, l[7] = x = U & 65535 | K << 16, u[7] = Y = $ & 65535 | V << 16, p += 128, m -= 128;
    }
    return p;
  }
  function a(o) {
    var c = new n();
    c.update(o);
    var l = c.digest();
    return c.clean(), l;
  }
  t.hash = a;
})(Dh);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.convertSecretKeyToX25519 = t.convertPublicKeyToX25519 = t.verify = t.sign = t.extractPublicKeyFromSecretKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.SEED_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = t.SIGNATURE_LENGTH = void 0;
  const e = Ws, r = Dh, n = mr;
  t.SIGNATURE_LENGTH = 64, t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 64, t.SEED_LENGTH = 32;
  function s(L) {
    const j = new Float64Array(16);
    if (L)
      for (let k = 0; k < L.length; k++)
        j[k] = L[k];
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
  ]), u = s([
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
    for (let k = 0; k < 16; k++)
      L[k] = j[k] | 0;
  }
  function _(L) {
    let j = 1;
    for (let k = 0; k < 16; k++) {
      let h = L[k] + j + 65535;
      j = Math.floor(h / 65536), L[k] = h - j * 65536;
    }
    L[0] += j - 1 + 37 * (j - 1);
  }
  function E(L, j, k) {
    const h = ~(k - 1);
    for (let I = 0; I < 16; I++) {
      const H = h & (L[I] ^ j[I]);
      L[I] ^= H, j[I] ^= H;
    }
  }
  function T(L, j) {
    const k = s(), h = s();
    for (let I = 0; I < 16; I++)
      h[I] = j[I];
    _(h), _(h), _(h);
    for (let I = 0; I < 2; I++) {
      k[0] = h[0] - 65517;
      for (let ee = 1; ee < 15; ee++)
        k[ee] = h[ee] - 65535 - (k[ee - 1] >> 16 & 1), k[ee - 1] &= 65535;
      k[15] = h[15] - 32767 - (k[14] >> 16 & 1);
      const H = k[15] >> 16 & 1;
      k[14] &= 65535, E(h, k, 1 - H);
    }
    for (let I = 0; I < 16; I++)
      L[2 * I] = h[I] & 255, L[2 * I + 1] = h[I] >> 8;
  }
  function M(L, j) {
    let k = 0;
    for (let h = 0; h < 32; h++)
      k |= L[h] ^ j[h];
    return (1 & k - 1 >>> 8) - 1;
  }
  function v(L, j) {
    const k = new Uint8Array(32), h = new Uint8Array(32);
    return T(k, L), T(h, j), M(k, h);
  }
  function O(L) {
    const j = new Uint8Array(32);
    return T(j, L), j[0] & 1;
  }
  function b(L, j) {
    for (let k = 0; k < 16; k++)
      L[k] = j[2 * k] + (j[2 * k + 1] << 8);
    L[15] &= 32767;
  }
  function x(L, j, k) {
    for (let h = 0; h < 16; h++)
      L[h] = j[h] + k[h];
  }
  function y(L, j, k) {
    for (let h = 0; h < 16; h++)
      L[h] = j[h] - k[h];
  }
  function d(L, j, k) {
    let h, I, H = 0, ee = 0, je = 0, Le = 0, Oe = 0, Ze = 0, at = 0, tt = 0, qe = 0, ze = 0, Te = 0, Pe = 0, Ce = 0, be = 0, we = 0, he = 0, Ne = 0, Me = 0, me = 0, Ue = 0, Ke = 0, He = 0, Ge = 0, Fe = 0, hr = 0, vr = 0, qr = 0, Dt = 0, Vr = 0, wr = 0, yn = 0, ct = k[0], st = k[1], gt = k[2], ut = k[3], yt = k[4], it = k[5], Et = k[6], Ot = k[7], Tt = k[8], St = k[9], Ct = k[10], xt = k[11], mt = k[12], rt = k[13], S = k[14], z = k[15];
    h = j[0], H += h * ct, ee += h * st, je += h * gt, Le += h * ut, Oe += h * yt, Ze += h * it, at += h * Et, tt += h * Ot, qe += h * Tt, ze += h * St, Te += h * Ct, Pe += h * xt, Ce += h * mt, be += h * rt, we += h * S, he += h * z, h = j[1], ee += h * ct, je += h * st, Le += h * gt, Oe += h * ut, Ze += h * yt, at += h * it, tt += h * Et, qe += h * Ot, ze += h * Tt, Te += h * St, Pe += h * Ct, Ce += h * xt, be += h * mt, we += h * rt, he += h * S, Ne += h * z, h = j[2], je += h * ct, Le += h * st, Oe += h * gt, Ze += h * ut, at += h * yt, tt += h * it, qe += h * Et, ze += h * Ot, Te += h * Tt, Pe += h * St, Ce += h * Ct, be += h * xt, we += h * mt, he += h * rt, Ne += h * S, Me += h * z, h = j[3], Le += h * ct, Oe += h * st, Ze += h * gt, at += h * ut, tt += h * yt, qe += h * it, ze += h * Et, Te += h * Ot, Pe += h * Tt, Ce += h * St, be += h * Ct, we += h * xt, he += h * mt, Ne += h * rt, Me += h * S, me += h * z, h = j[4], Oe += h * ct, Ze += h * st, at += h * gt, tt += h * ut, qe += h * yt, ze += h * it, Te += h * Et, Pe += h * Ot, Ce += h * Tt, be += h * St, we += h * Ct, he += h * xt, Ne += h * mt, Me += h * rt, me += h * S, Ue += h * z, h = j[5], Ze += h * ct, at += h * st, tt += h * gt, qe += h * ut, ze += h * yt, Te += h * it, Pe += h * Et, Ce += h * Ot, be += h * Tt, we += h * St, he += h * Ct, Ne += h * xt, Me += h * mt, me += h * rt, Ue += h * S, Ke += h * z, h = j[6], at += h * ct, tt += h * st, qe += h * gt, ze += h * ut, Te += h * yt, Pe += h * it, Ce += h * Et, be += h * Ot, we += h * Tt, he += h * St, Ne += h * Ct, Me += h * xt, me += h * mt, Ue += h * rt, Ke += h * S, He += h * z, h = j[7], tt += h * ct, qe += h * st, ze += h * gt, Te += h * ut, Pe += h * yt, Ce += h * it, be += h * Et, we += h * Ot, he += h * Tt, Ne += h * St, Me += h * Ct, me += h * xt, Ue += h * mt, Ke += h * rt, He += h * S, Ge += h * z, h = j[8], qe += h * ct, ze += h * st, Te += h * gt, Pe += h * ut, Ce += h * yt, be += h * it, we += h * Et, he += h * Ot, Ne += h * Tt, Me += h * St, me += h * Ct, Ue += h * xt, Ke += h * mt, He += h * rt, Ge += h * S, Fe += h * z, h = j[9], ze += h * ct, Te += h * st, Pe += h * gt, Ce += h * ut, be += h * yt, we += h * it, he += h * Et, Ne += h * Ot, Me += h * Tt, me += h * St, Ue += h * Ct, Ke += h * xt, He += h * mt, Ge += h * rt, Fe += h * S, hr += h * z, h = j[10], Te += h * ct, Pe += h * st, Ce += h * gt, be += h * ut, we += h * yt, he += h * it, Ne += h * Et, Me += h * Ot, me += h * Tt, Ue += h * St, Ke += h * Ct, He += h * xt, Ge += h * mt, Fe += h * rt, hr += h * S, vr += h * z, h = j[11], Pe += h * ct, Ce += h * st, be += h * gt, we += h * ut, he += h * yt, Ne += h * it, Me += h * Et, me += h * Ot, Ue += h * Tt, Ke += h * St, He += h * Ct, Ge += h * xt, Fe += h * mt, hr += h * rt, vr += h * S, qr += h * z, h = j[12], Ce += h * ct, be += h * st, we += h * gt, he += h * ut, Ne += h * yt, Me += h * it, me += h * Et, Ue += h * Ot, Ke += h * Tt, He += h * St, Ge += h * Ct, Fe += h * xt, hr += h * mt, vr += h * rt, qr += h * S, Dt += h * z, h = j[13], be += h * ct, we += h * st, he += h * gt, Ne += h * ut, Me += h * yt, me += h * it, Ue += h * Et, Ke += h * Ot, He += h * Tt, Ge += h * St, Fe += h * Ct, hr += h * xt, vr += h * mt, qr += h * rt, Dt += h * S, Vr += h * z, h = j[14], we += h * ct, he += h * st, Ne += h * gt, Me += h * ut, me += h * yt, Ue += h * it, Ke += h * Et, He += h * Ot, Ge += h * Tt, Fe += h * St, hr += h * Ct, vr += h * xt, qr += h * mt, Dt += h * rt, Vr += h * S, wr += h * z, h = j[15], he += h * ct, Ne += h * st, Me += h * gt, me += h * ut, Ue += h * yt, Ke += h * it, He += h * Et, Ge += h * Ot, Fe += h * Tt, hr += h * St, vr += h * Ct, qr += h * xt, Dt += h * mt, Vr += h * rt, wr += h * S, yn += h * z, H += 38 * Ne, ee += 38 * Me, je += 38 * me, Le += 38 * Ue, Oe += 38 * Ke, Ze += 38 * He, at += 38 * Ge, tt += 38 * Fe, qe += 38 * hr, ze += 38 * vr, Te += 38 * qr, Pe += 38 * Dt, Ce += 38 * Vr, be += 38 * wr, we += 38 * yn, I = 1, h = H + I + 65535, I = Math.floor(h / 65536), H = h - I * 65536, h = ee + I + 65535, I = Math.floor(h / 65536), ee = h - I * 65536, h = je + I + 65535, I = Math.floor(h / 65536), je = h - I * 65536, h = Le + I + 65535, I = Math.floor(h / 65536), Le = h - I * 65536, h = Oe + I + 65535, I = Math.floor(h / 65536), Oe = h - I * 65536, h = Ze + I + 65535, I = Math.floor(h / 65536), Ze = h - I * 65536, h = at + I + 65535, I = Math.floor(h / 65536), at = h - I * 65536, h = tt + I + 65535, I = Math.floor(h / 65536), tt = h - I * 65536, h = qe + I + 65535, I = Math.floor(h / 65536), qe = h - I * 65536, h = ze + I + 65535, I = Math.floor(h / 65536), ze = h - I * 65536, h = Te + I + 65535, I = Math.floor(h / 65536), Te = h - I * 65536, h = Pe + I + 65535, I = Math.floor(h / 65536), Pe = h - I * 65536, h = Ce + I + 65535, I = Math.floor(h / 65536), Ce = h - I * 65536, h = be + I + 65535, I = Math.floor(h / 65536), be = h - I * 65536, h = we + I + 65535, I = Math.floor(h / 65536), we = h - I * 65536, h = he + I + 65535, I = Math.floor(h / 65536), he = h - I * 65536, H += I - 1 + 37 * (I - 1), I = 1, h = H + I + 65535, I = Math.floor(h / 65536), H = h - I * 65536, h = ee + I + 65535, I = Math.floor(h / 65536), ee = h - I * 65536, h = je + I + 65535, I = Math.floor(h / 65536), je = h - I * 65536, h = Le + I + 65535, I = Math.floor(h / 65536), Le = h - I * 65536, h = Oe + I + 65535, I = Math.floor(h / 65536), Oe = h - I * 65536, h = Ze + I + 65535, I = Math.floor(h / 65536), Ze = h - I * 65536, h = at + I + 65535, I = Math.floor(h / 65536), at = h - I * 65536, h = tt + I + 65535, I = Math.floor(h / 65536), tt = h - I * 65536, h = qe + I + 65535, I = Math.floor(h / 65536), qe = h - I * 65536, h = ze + I + 65535, I = Math.floor(h / 65536), ze = h - I * 65536, h = Te + I + 65535, I = Math.floor(h / 65536), Te = h - I * 65536, h = Pe + I + 65535, I = Math.floor(h / 65536), Pe = h - I * 65536, h = Ce + I + 65535, I = Math.floor(h / 65536), Ce = h - I * 65536, h = be + I + 65535, I = Math.floor(h / 65536), be = h - I * 65536, h = we + I + 65535, I = Math.floor(h / 65536), we = h - I * 65536, h = he + I + 65535, I = Math.floor(h / 65536), he = h - I * 65536, H += I - 1 + 37 * (I - 1), L[0] = H, L[1] = ee, L[2] = je, L[3] = Le, L[4] = Oe, L[5] = Ze, L[6] = at, L[7] = tt, L[8] = qe, L[9] = ze, L[10] = Te, L[11] = Pe, L[12] = Ce, L[13] = be, L[14] = we, L[15] = he;
  }
  function g(L, j) {
    d(L, j, j);
  }
  function P(L, j) {
    const k = s();
    let h;
    for (h = 0; h < 16; h++)
      k[h] = j[h];
    for (h = 253; h >= 0; h--)
      g(k, k), h !== 2 && h !== 4 && d(k, k, j);
    for (h = 0; h < 16; h++)
      L[h] = k[h];
  }
  function N(L, j) {
    const k = s();
    let h;
    for (h = 0; h < 16; h++)
      k[h] = j[h];
    for (h = 250; h >= 0; h--)
      g(k, k), h !== 1 && d(k, k, j);
    for (h = 0; h < 16; h++)
      L[h] = k[h];
  }
  function D(L, j) {
    const k = s(), h = s(), I = s(), H = s(), ee = s(), je = s(), Le = s(), Oe = s(), Ze = s();
    y(k, L[1], L[0]), y(Ze, j[1], j[0]), d(k, k, Ze), x(h, L[0], L[1]), x(Ze, j[0], j[1]), d(h, h, Ze), d(I, L[3], j[3]), d(I, I, l), d(H, L[2], j[2]), x(H, H, H), y(ee, h, k), y(je, H, I), x(Le, H, I), x(Oe, h, k), d(L[0], ee, je), d(L[1], Oe, Le), d(L[2], Le, je), d(L[3], ee, Oe);
  }
  function G(L, j, k) {
    for (let h = 0; h < 4; h++)
      E(L[h], j[h], k);
  }
  function Y(L, j) {
    const k = s(), h = s(), I = s();
    P(I, j[2]), d(k, j[0], I), d(h, j[1], I), T(L, h), L[31] ^= O(k) << 7;
  }
  function C(L, j, k) {
    m(L[0], a), m(L[1], o), m(L[2], o), m(L[3], a);
    for (let h = 255; h >= 0; --h) {
      const I = k[h / 8 | 0] >> (h & 7) & 1;
      G(L, j, I), D(j, L), D(L, L), G(L, j, I);
    }
  }
  function A(L, j) {
    const k = [s(), s(), s(), s()];
    m(k[0], u), m(k[1], f), m(k[2], o), d(k[3], u, f), C(L, k, j);
  }
  function Q(L) {
    if (L.length !== t.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${t.SEED_LENGTH} bytes`);
    const j = (0, r.hash)(L);
    j[0] &= 248, j[31] &= 127, j[31] |= 64;
    const k = new Uint8Array(32), h = [s(), s(), s(), s()];
    A(h, j), Y(k, h);
    const I = new Uint8Array(64);
    return I.set(L), I.set(k, 32), {
      publicKey: k,
      secretKey: I
    };
  }
  t.generateKeyPairFromSeed = Q;
  function Z(L) {
    const j = (0, e.randomBytes)(32, L), k = Q(j);
    return (0, n.wipe)(j), k;
  }
  t.generateKeyPair = Z;
  function $(L) {
    if (L.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${t.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(L.subarray(32));
  }
  t.extractPublicKeyFromSecretKey = $;
  const V = new Float64Array([
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
  function U(L, j) {
    let k, h, I, H;
    for (h = 63; h >= 32; --h) {
      for (k = 0, I = h - 32, H = h - 12; I < H; ++I)
        j[I] += k - 16 * j[h] * V[I - (h - 32)], k = Math.floor((j[I] + 128) / 256), j[I] -= k * 256;
      j[I] += k, j[h] = 0;
    }
    for (k = 0, I = 0; I < 32; I++)
      j[I] += k - (j[31] >> 4) * V[I], k = j[I] >> 8, j[I] &= 255;
    for (I = 0; I < 32; I++)
      j[I] -= k * V[I];
    for (h = 0; h < 32; h++)
      j[h + 1] += j[h] >> 8, L[h] = j[h] & 255;
  }
  function K(L) {
    const j = new Float64Array(64);
    for (let k = 0; k < 64; k++)
      j[k] = L[k];
    for (let k = 0; k < 64; k++)
      L[k] = 0;
    U(L, j);
  }
  function ye(L, j) {
    const k = new Float64Array(64), h = [s(), s(), s(), s()], I = (0, r.hash)(L.subarray(0, 32));
    I[0] &= 248, I[31] &= 127, I[31] |= 64;
    const H = new Uint8Array(64);
    H.set(I.subarray(32), 32);
    const ee = new r.SHA512();
    ee.update(H.subarray(32)), ee.update(j);
    const je = ee.digest();
    ee.clean(), K(je), A(h, je), Y(H, h), ee.reset(), ee.update(H.subarray(0, 32)), ee.update(L.subarray(32)), ee.update(j);
    const Le = ee.digest();
    K(Le);
    for (let Oe = 0; Oe < 32; Oe++)
      k[Oe] = je[Oe];
    for (let Oe = 0; Oe < 32; Oe++)
      for (let Ze = 0; Ze < 32; Ze++)
        k[Oe + Ze] += Le[Oe] * I[Ze];
    return U(H.subarray(32), k), H;
  }
  t.sign = ye;
  function W(L, j) {
    const k = s(), h = s(), I = s(), H = s(), ee = s(), je = s(), Le = s();
    return m(L[2], o), b(L[1], j), g(I, L[1]), d(H, I, c), y(I, I, L[2]), x(H, L[2], H), g(ee, H), g(je, ee), d(Le, je, ee), d(k, Le, I), d(k, k, H), N(k, k), d(k, k, I), d(k, k, H), d(k, k, H), d(L[0], k, H), g(h, L[0]), d(h, h, H), v(h, I) && d(L[0], L[0], p), g(h, L[0]), d(h, h, H), v(h, I) ? -1 : (O(L[0]) === j[31] >> 7 && y(L[0], a, L[0]), d(L[3], L[0], L[1]), 0);
  }
  function de(L, j, k) {
    const h = new Uint8Array(32), I = [s(), s(), s(), s()], H = [s(), s(), s(), s()];
    if (k.length !== t.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${t.SIGNATURE_LENGTH} bytes`);
    if (W(H, L))
      return !1;
    const ee = new r.SHA512();
    ee.update(k.subarray(0, 32)), ee.update(L), ee.update(j);
    const je = ee.digest();
    return K(je), C(I, H, je), A(H, k.subarray(32)), D(I, H), Y(h, I), !M(k, h);
  }
  t.verify = de;
  function ne(L) {
    let j = [s(), s(), s(), s()];
    if (W(j, L))
      throw new Error("Ed25519: invalid public key");
    let k = s(), h = s(), I = j[1];
    x(k, o, I), y(h, o, I), P(h, h), d(k, k, h);
    let H = new Uint8Array(32);
    return T(H, k), H;
  }
  t.convertPublicKeyToX25519 = ne;
  function ue(L) {
    const j = (0, r.hash)(L.subarray(0, 32));
    j[0] &= 248, j[31] &= 127, j[31] |= 64;
    const k = new Uint8Array(j.subarray(0, 32));
    return (0, n.wipe)(j), k;
  }
  t.convertSecretKeyToX25519 = ue;
})(ul);
const Sv = "EdDSA", xv = "JWT", zh = ".", Uh = "base64url", Iv = "utf8", Ov = "utf8", Tv = ":", Cv = "did", kv = "key", Lu = "base58btc", Pv = "z", Nv = "K36", Rv = 32;
function dl(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function $h(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? dl(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function yc(t, e) {
  e || (e = t.reduce((s, i) => s + i.length, 0));
  const r = $h(e);
  let n = 0;
  for (const s of t)
    r.set(s, n), n += s.length;
  return dl(r);
}
function Av(t, e) {
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
  var o = t.length, c = t.charAt(0), l = Math.log(o) / Math.log(256), u = Math.log(256) / Math.log(o);
  function f(_) {
    if (_ instanceof Uint8Array || (ArrayBuffer.isView(_) ? _ = new Uint8Array(_.buffer, _.byteOffset, _.byteLength) : Array.isArray(_) && (_ = Uint8Array.from(_))), !(_ instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (_.length === 0)
      return "";
    for (var E = 0, T = 0, M = 0, v = _.length; M !== v && _[M] === 0; )
      M++, E++;
    for (var O = (v - M) * u + 1 >>> 0, b = new Uint8Array(O); M !== v; ) {
      for (var x = _[M], y = 0, d = O - 1; (x !== 0 || y < T) && d !== -1; d--, y++)
        x += 256 * b[d] >>> 0, b[d] = x % o >>> 0, x = x / o >>> 0;
      if (x !== 0)
        throw new Error("Non-zero carry");
      T = y, M++;
    }
    for (var g = O - T; g !== O && b[g] === 0; )
      g++;
    for (var P = c.repeat(E); g < O; ++g)
      P += t.charAt(b[g]);
    return P;
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
      for (var v = (_.length - E) * l + 1 >>> 0, O = new Uint8Array(v); _[E]; ) {
        var b = r[_.charCodeAt(E)];
        if (b === 255)
          return;
        for (var x = 0, y = v - 1; (b !== 0 || x < M) && y !== -1; y--, x++)
          b += o * O[y] >>> 0, O[y] = b % 256 >>> 0, b = b / 256 >>> 0;
        if (b !== 0)
          throw new Error("Non-zero carry");
        M = x, E++;
      }
      if (_[E] !== " ") {
        for (var d = v - M; d !== v && O[d] === 0; )
          d++;
        for (var g = new Uint8Array(T + (v - d)), P = T; d !== v; )
          g[P++] = O[d++];
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
var jv = Av, Lv = jv;
const Mv = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Dv = (t) => new TextEncoder().encode(t), zv = (t) => new TextDecoder().decode(t);
class Uv {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class $v {
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
    return qh(this, e);
  }
}
class qv {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return qh(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const qh = (t, e) => new qv({
  ...t.decoders || { [t.prefix]: t },
  ...e.decoders || { [e.prefix]: e }
});
class Vv {
  constructor(e, r, n, s) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = s, this.encoder = new Uv(e, r, n), this.decoder = new $v(e, r, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const xa = ({ name: t, prefix: e, encode: r, decode: n }) => new Vv(t, e, r, n), eo = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: s } = Lv(r, e);
  return xa({
    prefix: t,
    name: e,
    encode: n,
    decode: (i) => Mv(s(i))
  });
}, Zv = (t, e, r, n) => {
  const s = {};
  for (let u = 0; u < e.length; ++u)
    s[e[u]] = u;
  let i = t.length;
  for (; t[i - 1] === "="; )
    --i;
  const a = new Uint8Array(i * r / 8 | 0);
  let o = 0, c = 0, l = 0;
  for (let u = 0; u < i; ++u) {
    const f = s[t[u]];
    if (f === void 0)
      throw new SyntaxError(`Non-${n} character`);
    c = c << r | f, o += r, o >= 8 && (o -= 8, a[l++] = 255 & c >> o);
  }
  if (o >= r || 255 & c << 8 - o)
    throw new SyntaxError("Unexpected end of data");
  return a;
}, Kv = (t, e, r) => {
  const n = e[e.length - 1] === "=", s = (1 << r) - 1;
  let i = "", a = 0, o = 0;
  for (let c = 0; c < t.length; ++c)
    for (o = o << 8 | t[c], a += 8; a > r; )
      a -= r, i += e[s & o >> a];
  if (a && (i += e[s & o << r - a]), n)
    for (; i.length * r & 7; )
      i += "=";
  return i;
}, $t = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => xa({
  prefix: e,
  name: t,
  encode(s) {
    return Kv(s, n, r);
  },
  decode(s) {
    return Zv(s, n, r, t);
  }
}), Wv = xa({
  prefix: "\0",
  name: "identity",
  encode: (t) => zv(t),
  decode: (t) => Dv(t)
}), Fv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: Wv
}, Symbol.toStringTag, { value: "Module" })), Bv = $t({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), Hv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: Bv
}, Symbol.toStringTag, { value: "Module" })), Gv = $t({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), Yv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: Gv
}, Symbol.toStringTag, { value: "Module" })), Jv = eo({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), Xv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: Jv
}, Symbol.toStringTag, { value: "Module" })), Qv = $t({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), ew = $t({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), tw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: Qv,
  base16upper: ew
}, Symbol.toStringTag, { value: "Module" })), rw = $t({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), nw = $t({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), sw = $t({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), iw = $t({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), ow = $t({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), aw = $t({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), cw = $t({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), lw = $t({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), uw = $t({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), dw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: rw,
  base32hex: ow,
  base32hexpad: cw,
  base32hexpadupper: lw,
  base32hexupper: aw,
  base32pad: sw,
  base32padupper: iw,
  base32upper: nw,
  base32z: uw
}, Symbol.toStringTag, { value: "Module" })), hw = eo({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), fw = eo({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), pw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: hw,
  base36upper: fw
}, Symbol.toStringTag, { value: "Module" })), gw = eo({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), yw = eo({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), mw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: gw,
  base58flickr: yw
}, Symbol.toStringTag, { value: "Module" })), vw = $t({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), ww = $t({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), _w = $t({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), bw = $t({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), Ew = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: vw,
  base64pad: ww,
  base64url: _w,
  base64urlpad: bw
}, Symbol.toStringTag, { value: "Module" })), Vh = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Sw = Vh.reduce((t, e, r) => (t[r] = e, t), []), xw = Vh.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function Iw(t) {
  return t.reduce((e, r) => (e += Sw[r], e), "");
}
function Ow(t) {
  const e = [];
  for (const r of t) {
    const n = xw[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const Tw = xa({
  prefix: "🚀",
  name: "base256emoji",
  encode: Iw,
  decode: Ow
}), Cw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: Tw
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const Mu = {
  ...Fv,
  ...Hv,
  ...Yv,
  ...Xv,
  ...tw,
  ...dw,
  ...pw,
  ...mw,
  ...Ew,
  ...Cw
};
function Zh(t, e, r, n) {
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
const Du = Zh("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), Ka = Zh("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = $h(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), Kh = {
  utf8: Du,
  "utf-8": Du,
  hex: Mu.base16,
  latin1: Ka,
  ascii: Ka,
  binary: Ka,
  ...Mu
};
function sr(t, e = "utf8") {
  const r = Kh[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : r.encoder.encode(t).substring(1);
}
function ur(t, e = "utf8") {
  const r = Kh[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? dl(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
function $o(t) {
  return sr(ur(Qi(t), Iv), Uh);
}
function Wh(t) {
  const e = ur(Nv, Lu), r = Pv + sr(yc([e, t]), Lu);
  return [Cv, kv, r].join(Tv);
}
function kw(t) {
  return sr(t, Uh);
}
function Pw(t) {
  return ur([$o(t.header), $o(t.payload)].join(zh), Ov);
}
function Nw(t) {
  return [
    $o(t.header),
    $o(t.payload),
    kw(t.signature)
  ].join(zh);
}
function zu(t = Ws.randomBytes(Rv)) {
  return ul.generateKeyPairFromSeed(t);
}
async function Rw(t, e, r, n, s = ae.fromMiliseconds(Date.now())) {
  const i = { alg: Sv, typ: xv }, a = Wh(n.publicKey), o = s + r, c = { iss: a, sub: t, aud: e, iat: s, exp: o }, l = Pw({ header: i, payload: c }), u = ul.sign(n.secretKey, l);
  return Nw({ header: i, payload: c, signature: u });
}
var hl = {}, Ia = {};
Object.defineProperty(Ia, "__esModule", { value: !0 });
var Kt = Se, mc = mr, Aw = 20;
function jw(t, e, r) {
  for (var n = 1634760805, s = 857760878, i = 2036477234, a = 1797285236, o = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], c = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], l = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], u = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], f = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], p = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], m = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], _ = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], E = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], T = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], M = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], v = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], O = n, b = s, x = i, y = a, d = o, g = c, P = l, N = u, D = f, G = p, Y = m, C = _, A = E, Q = T, Z = M, $ = v, V = 0; V < Aw; V += 2)
    O = O + d | 0, A ^= O, A = A >>> 16 | A << 16, D = D + A | 0, d ^= D, d = d >>> 20 | d << 12, b = b + g | 0, Q ^= b, Q = Q >>> 16 | Q << 16, G = G + Q | 0, g ^= G, g = g >>> 20 | g << 12, x = x + P | 0, Z ^= x, Z = Z >>> 16 | Z << 16, Y = Y + Z | 0, P ^= Y, P = P >>> 20 | P << 12, y = y + N | 0, $ ^= y, $ = $ >>> 16 | $ << 16, C = C + $ | 0, N ^= C, N = N >>> 20 | N << 12, x = x + P | 0, Z ^= x, Z = Z >>> 24 | Z << 8, Y = Y + Z | 0, P ^= Y, P = P >>> 25 | P << 7, y = y + N | 0, $ ^= y, $ = $ >>> 24 | $ << 8, C = C + $ | 0, N ^= C, N = N >>> 25 | N << 7, b = b + g | 0, Q ^= b, Q = Q >>> 24 | Q << 8, G = G + Q | 0, g ^= G, g = g >>> 25 | g << 7, O = O + d | 0, A ^= O, A = A >>> 24 | A << 8, D = D + A | 0, d ^= D, d = d >>> 25 | d << 7, O = O + g | 0, $ ^= O, $ = $ >>> 16 | $ << 16, Y = Y + $ | 0, g ^= Y, g = g >>> 20 | g << 12, b = b + P | 0, A ^= b, A = A >>> 16 | A << 16, C = C + A | 0, P ^= C, P = P >>> 20 | P << 12, x = x + N | 0, Q ^= x, Q = Q >>> 16 | Q << 16, D = D + Q | 0, N ^= D, N = N >>> 20 | N << 12, y = y + d | 0, Z ^= y, Z = Z >>> 16 | Z << 16, G = G + Z | 0, d ^= G, d = d >>> 20 | d << 12, x = x + N | 0, Q ^= x, Q = Q >>> 24 | Q << 8, D = D + Q | 0, N ^= D, N = N >>> 25 | N << 7, y = y + d | 0, Z ^= y, Z = Z >>> 24 | Z << 8, G = G + Z | 0, d ^= G, d = d >>> 25 | d << 7, b = b + P | 0, A ^= b, A = A >>> 24 | A << 8, C = C + A | 0, P ^= C, P = P >>> 25 | P << 7, O = O + g | 0, $ ^= O, $ = $ >>> 24 | $ << 8, Y = Y + $ | 0, g ^= Y, g = g >>> 25 | g << 7;
  Kt.writeUint32LE(O + n | 0, t, 0), Kt.writeUint32LE(b + s | 0, t, 4), Kt.writeUint32LE(x + i | 0, t, 8), Kt.writeUint32LE(y + a | 0, t, 12), Kt.writeUint32LE(d + o | 0, t, 16), Kt.writeUint32LE(g + c | 0, t, 20), Kt.writeUint32LE(P + l | 0, t, 24), Kt.writeUint32LE(N + u | 0, t, 28), Kt.writeUint32LE(D + f | 0, t, 32), Kt.writeUint32LE(G + p | 0, t, 36), Kt.writeUint32LE(Y + m | 0, t, 40), Kt.writeUint32LE(C + _ | 0, t, 44), Kt.writeUint32LE(A + E | 0, t, 48), Kt.writeUint32LE(Q + T | 0, t, 52), Kt.writeUint32LE(Z + M | 0, t, 56), Kt.writeUint32LE($ + v | 0, t, 60);
}
function Fh(t, e, r, n, s) {
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
    jw(o, i, t);
    for (var l = c; l < c + 64 && l < r.length; l++)
      n[l] = r[l] ^ o[l - c];
    Mw(i, 0, a);
  }
  return mc.wipe(o), s === 0 && mc.wipe(i), n;
}
Ia.streamXOR = Fh;
function Lw(t, e, r, n) {
  return n === void 0 && (n = 0), mc.wipe(r), Fh(t, e, r, r, n);
}
Ia.stream = Lw;
function Mw(t, e, r) {
  for (var n = 1; r--; )
    n = n + (t[e] & 255) | 0, t[e] = n & 255, n >>>= 8, e++;
  if (n > 0)
    throw new Error("ChaCha: counter overflow");
}
var Bh = {}, Un = {};
Object.defineProperty(Un, "__esModule", { value: !0 });
function Dw(t, e, r) {
  return ~(t - 1) & e | t - 1 & r;
}
Un.select = Dw;
function zw(t, e) {
  return (t | 0) - (e | 0) - 1 >>> 31 & 1;
}
Un.lessOrEqual = zw;
function Hh(t, e) {
  if (t.length !== e.length)
    return 0;
  for (var r = 0, n = 0; n < t.length; n++)
    r |= t[n] ^ e[n];
  return 1 & r - 1 >>> 8;
}
Un.compare = Hh;
function Uw(t, e) {
  return t.length === 0 || e.length === 0 ? !1 : Hh(t, e) !== 0;
}
Un.equal = Uw;
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
        var l = o[2] | o[3] << 8;
        this._r[1] = (c >>> 13 | l << 3) & 8191;
        var u = o[4] | o[5] << 8;
        this._r[2] = (l >>> 10 | u << 6) & 7939;
        var f = o[6] | o[7] << 8;
        this._r[3] = (u >>> 7 | f << 9) & 8191;
        var p = o[8] | o[9] << 8;
        this._r[4] = (f >>> 4 | p << 12) & 255, this._r[5] = p >>> 1 & 8190;
        var m = o[10] | o[11] << 8;
        this._r[6] = (p >>> 14 | m << 2) & 8191;
        var _ = o[12] | o[13] << 8;
        this._r[7] = (m >>> 11 | _ << 5) & 8065;
        var E = o[14] | o[15] << 8;
        this._r[8] = (_ >>> 8 | E << 8) & 8191, this._r[9] = E >>> 5 & 127, this._pad[0] = o[16] | o[17] << 8, this._pad[1] = o[18] | o[19] << 8, this._pad[2] = o[20] | o[21] << 8, this._pad[3] = o[22] | o[23] << 8, this._pad[4] = o[24] | o[25] << 8, this._pad[5] = o[26] | o[27] << 8, this._pad[6] = o[28] | o[29] << 8, this._pad[7] = o[30] | o[31] << 8;
      }
      return a.prototype._blocks = function(o, c, l) {
        for (var u = this._fin ? 0 : 2048, f = this._h[0], p = this._h[1], m = this._h[2], _ = this._h[3], E = this._h[4], T = this._h[5], M = this._h[6], v = this._h[7], O = this._h[8], b = this._h[9], x = this._r[0], y = this._r[1], d = this._r[2], g = this._r[3], P = this._r[4], N = this._r[5], D = this._r[6], G = this._r[7], Y = this._r[8], C = this._r[9]; l >= 16; ) {
          var A = o[c + 0] | o[c + 1] << 8;
          f += A & 8191;
          var Q = o[c + 2] | o[c + 3] << 8;
          p += (A >>> 13 | Q << 3) & 8191;
          var Z = o[c + 4] | o[c + 5] << 8;
          m += (Q >>> 10 | Z << 6) & 8191;
          var $ = o[c + 6] | o[c + 7] << 8;
          _ += (Z >>> 7 | $ << 9) & 8191;
          var V = o[c + 8] | o[c + 9] << 8;
          E += ($ >>> 4 | V << 12) & 8191, T += V >>> 1 & 8191;
          var U = o[c + 10] | o[c + 11] << 8;
          M += (V >>> 14 | U << 2) & 8191;
          var K = o[c + 12] | o[c + 13] << 8;
          v += (U >>> 11 | K << 5) & 8191;
          var ye = o[c + 14] | o[c + 15] << 8;
          O += (K >>> 8 | ye << 8) & 8191, b += ye >>> 5 | u;
          var W = 0, de = W;
          de += f * x, de += p * (5 * C), de += m * (5 * Y), de += _ * (5 * G), de += E * (5 * D), W = de >>> 13, de &= 8191, de += T * (5 * N), de += M * (5 * P), de += v * (5 * g), de += O * (5 * d), de += b * (5 * y), W += de >>> 13, de &= 8191;
          var ne = W;
          ne += f * y, ne += p * x, ne += m * (5 * C), ne += _ * (5 * Y), ne += E * (5 * G), W = ne >>> 13, ne &= 8191, ne += T * (5 * D), ne += M * (5 * N), ne += v * (5 * P), ne += O * (5 * g), ne += b * (5 * d), W += ne >>> 13, ne &= 8191;
          var ue = W;
          ue += f * d, ue += p * y, ue += m * x, ue += _ * (5 * C), ue += E * (5 * Y), W = ue >>> 13, ue &= 8191, ue += T * (5 * G), ue += M * (5 * D), ue += v * (5 * N), ue += O * (5 * P), ue += b * (5 * g), W += ue >>> 13, ue &= 8191;
          var L = W;
          L += f * g, L += p * d, L += m * y, L += _ * x, L += E * (5 * C), W = L >>> 13, L &= 8191, L += T * (5 * Y), L += M * (5 * G), L += v * (5 * D), L += O * (5 * N), L += b * (5 * P), W += L >>> 13, L &= 8191;
          var j = W;
          j += f * P, j += p * g, j += m * d, j += _ * y, j += E * x, W = j >>> 13, j &= 8191, j += T * (5 * C), j += M * (5 * Y), j += v * (5 * G), j += O * (5 * D), j += b * (5 * N), W += j >>> 13, j &= 8191;
          var k = W;
          k += f * N, k += p * P, k += m * g, k += _ * d, k += E * y, W = k >>> 13, k &= 8191, k += T * x, k += M * (5 * C), k += v * (5 * Y), k += O * (5 * G), k += b * (5 * D), W += k >>> 13, k &= 8191;
          var h = W;
          h += f * D, h += p * N, h += m * P, h += _ * g, h += E * d, W = h >>> 13, h &= 8191, h += T * y, h += M * x, h += v * (5 * C), h += O * (5 * Y), h += b * (5 * G), W += h >>> 13, h &= 8191;
          var I = W;
          I += f * G, I += p * D, I += m * N, I += _ * P, I += E * g, W = I >>> 13, I &= 8191, I += T * d, I += M * y, I += v * x, I += O * (5 * C), I += b * (5 * Y), W += I >>> 13, I &= 8191;
          var H = W;
          H += f * Y, H += p * G, H += m * D, H += _ * N, H += E * P, W = H >>> 13, H &= 8191, H += T * g, H += M * d, H += v * y, H += O * x, H += b * (5 * C), W += H >>> 13, H &= 8191;
          var ee = W;
          ee += f * C, ee += p * Y, ee += m * G, ee += _ * D, ee += E * N, W = ee >>> 13, ee &= 8191, ee += T * P, ee += M * g, ee += v * d, ee += O * y, ee += b * x, W += ee >>> 13, ee &= 8191, W = (W << 2) + W | 0, W = W + de | 0, de = W & 8191, W = W >>> 13, ne += W, f = de, p = ne, m = ue, _ = L, E = j, T = k, M = h, v = I, O = H, b = ee, c += 16, l -= 16;
        }
        this._h[0] = f, this._h[1] = p, this._h[2] = m, this._h[3] = _, this._h[4] = E, this._h[5] = T, this._h[6] = M, this._h[7] = v, this._h[8] = O, this._h[9] = b;
      }, a.prototype.finish = function(o, c) {
        c === void 0 && (c = 0);
        var l = new Uint16Array(10), u, f, p, m;
        if (this._leftover) {
          for (m = this._leftover, this._buffer[m++] = 1; m < 16; m++)
            this._buffer[m] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (u = this._h[1] >>> 13, this._h[1] &= 8191, m = 2; m < 10; m++)
          this._h[m] += u, u = this._h[m] >>> 13, this._h[m] &= 8191;
        for (this._h[0] += u * 5, u = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += u, u = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += u, l[0] = this._h[0] + 5, u = l[0] >>> 13, l[0] &= 8191, m = 1; m < 10; m++)
          l[m] = this._h[m] + u, u = l[m] >>> 13, l[m] &= 8191;
        for (l[9] -= 8192, f = (u ^ 1) - 1, m = 0; m < 10; m++)
          l[m] &= f;
        for (f = ~f, m = 0; m < 10; m++)
          this._h[m] = this._h[m] & f | l[m];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, p = this._h[0] + this._pad[0], this._h[0] = p & 65535, m = 1; m < 8; m++)
          p = (this._h[m] + this._pad[m] | 0) + (p >>> 16) | 0, this._h[m] = p & 65535;
        return o[c + 0] = this._h[0] >>> 0, o[c + 1] = this._h[0] >>> 8, o[c + 2] = this._h[1] >>> 0, o[c + 3] = this._h[1] >>> 8, o[c + 4] = this._h[2] >>> 0, o[c + 5] = this._h[2] >>> 8, o[c + 6] = this._h[3] >>> 0, o[c + 7] = this._h[3] >>> 8, o[c + 8] = this._h[4] >>> 0, o[c + 9] = this._h[4] >>> 8, o[c + 10] = this._h[5] >>> 0, o[c + 11] = this._h[5] >>> 8, o[c + 12] = this._h[6] >>> 0, o[c + 13] = this._h[6] >>> 8, o[c + 14] = this._h[7] >>> 0, o[c + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, a.prototype.update = function(o) {
        var c = 0, l = o.length, u;
        if (this._leftover) {
          u = 16 - this._leftover, u > l && (u = l);
          for (var f = 0; f < u; f++)
            this._buffer[this._leftover + f] = o[c + f];
          if (l -= u, c += u, this._leftover += u, this._leftover < 16)
            return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (l >= 16 && (u = l - l % 16, this._blocks(o, c, u), c += u, l -= u), l) {
          for (var f = 0; f < l; f++)
            this._buffer[this._leftover + f] = o[c + f];
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
  t.Poly1305 = n;
  function s(a, o) {
    var c = new n(a);
    c.update(o);
    var l = c.digest();
    return c.clean(), l;
  }
  t.oneTimeAuth = s;
  function i(a, o) {
    return a.length !== t.DIGEST_LENGTH || o.length !== t.DIGEST_LENGTH ? !1 : e.equal(a, o);
  }
  t.equal = i;
})(Bh);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Ia, r = Bh, n = mr, s = Se, i = Un;
  t.KEY_LENGTH = 32, t.NONCE_LENGTH = 12, t.TAG_LENGTH = 16;
  var a = new Uint8Array(16), o = (
    /** @class */
    function() {
      function c(l) {
        if (this.nonceLength = t.NONCE_LENGTH, this.tagLength = t.TAG_LENGTH, l.length !== t.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(l);
      }
      return c.prototype.seal = function(l, u, f, p) {
        if (l.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var m = new Uint8Array(16);
        m.set(l, m.length - l.length);
        var _ = new Uint8Array(32);
        e.stream(this._key, m, _, 4);
        var E = u.length + this.tagLength, T;
        if (p) {
          if (p.length !== E)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          T = p;
        } else
          T = new Uint8Array(E);
        return e.streamXOR(this._key, m, u, T, 4), this._authenticate(T.subarray(T.length - this.tagLength, T.length), _, T.subarray(0, T.length - this.tagLength), f), n.wipe(m), T;
      }, c.prototype.open = function(l, u, f, p) {
        if (l.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (u.length < this.tagLength)
          return null;
        var m = new Uint8Array(16);
        m.set(l, m.length - l.length);
        var _ = new Uint8Array(32);
        e.stream(this._key, m, _, 4);
        var E = new Uint8Array(this.tagLength);
        if (this._authenticate(E, _, u.subarray(0, u.length - this.tagLength), f), !i.equal(E, u.subarray(u.length - this.tagLength, u.length)))
          return null;
        var T = u.length - this.tagLength, M;
        if (p) {
          if (p.length !== T)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          M = p;
        } else
          M = new Uint8Array(T);
        return e.streamXOR(this._key, m, u.subarray(0, u.length - this.tagLength), M, 4), n.wipe(m), M;
      }, c.prototype.clean = function() {
        return n.wipe(this._key), this;
      }, c.prototype._authenticate = function(l, u, f, p) {
        var m = new r.Poly1305(u);
        p && (m.update(p), p.length % 16 > 0 && m.update(a.subarray(p.length % 16))), m.update(f), f.length % 16 > 0 && m.update(a.subarray(f.length % 16));
        var _ = new Uint8Array(8);
        p && s.writeUint64LE(p.length, _), m.update(_), s.writeUint64LE(f.length, _), m.update(_);
        for (var E = m.digest(), T = 0; T < E.length; T++)
          l[T] = E[T];
        m.clean(), n.wipe(E), n.wipe(_);
      }, c;
    }()
  );
  t.ChaCha20Poly1305 = o;
})(hl);
var Gh = {}, to = {}, fl = {};
Object.defineProperty(fl, "__esModule", { value: !0 });
function $w(t) {
  return typeof t.saveState < "u" && typeof t.restoreState < "u" && typeof t.cleanSavedState < "u";
}
fl.isSerializableHash = $w;
Object.defineProperty(to, "__esModule", { value: !0 });
var Wr = fl, qw = Un, Vw = mr, Yh = (
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
      this._outer.update(n), Wr.isSerializableHash(this._inner) && Wr.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), Vw.wipe(n);
    }
    return t.prototype.reset = function() {
      if (!Wr.isSerializableHash(this._inner) || !Wr.isSerializableHash(this._outer))
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.clean = function() {
      Wr.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), Wr.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
    }, t.prototype.update = function(e) {
      return this._inner.update(e), this;
    }, t.prototype.finish = function(e) {
      return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0, this);
    }, t.prototype.digest = function() {
      var e = new Uint8Array(this.digestLength);
      return this.finish(e), e;
    }, t.prototype.saveState = function() {
      if (!Wr.isSerializableHash(this._inner))
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      return this._inner.saveState();
    }, t.prototype.restoreState = function(e) {
      if (!Wr.isSerializableHash(this._inner) || !Wr.isSerializableHash(this._outer))
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.cleanSavedState = function(e) {
      if (!Wr.isSerializableHash(this._inner))
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      this._inner.cleanSavedState(e);
    }, t;
  }()
);
to.HMAC = Yh;
function Zw(t, e, r) {
  var n = new Yh(t, e);
  n.update(r);
  var s = n.digest();
  return n.clean(), s;
}
to.hmac = Zw;
to.equal = qw.equal;
Object.defineProperty(Gh, "__esModule", { value: !0 });
var Uu = to, $u = mr, Kw = (
  /** @class */
  function() {
    function t(e, r, n, s) {
      n === void 0 && (n = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = s;
      var i = Uu.hmac(this._hash, n, r);
      this._hmac = new Uu.HMAC(e, i), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
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
      this._hmac.clean(), $u.wipe(this._buffer), $u.wipe(this._counter), this._bufpos = 0;
    }, t;
  }()
), Ww = Gh.HKDF = Kw, Oa = {};
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
      }, o.prototype.update = function(c, l) {
        if (l === void 0 && (l = c.length), this._finished)
          throw new Error("SHA256: can't update because hash was finished.");
        var u = 0;
        if (this._bytesHashed += l, this._bufferLength > 0) {
          for (; this._bufferLength < this.blockSize && l > 0; )
            this._buffer[this._bufferLength++] = c[u++], l--;
          this._bufferLength === this.blockSize && (i(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (l >= this.blockSize && (u = i(this._temp, this._state, c, u, l), l %= this.blockSize); l > 0; )
          this._buffer[this._bufferLength++] = c[u++], l--;
        return this;
      }, o.prototype.finish = function(c) {
        if (!this._finished) {
          var l = this._bytesHashed, u = this._bufferLength, f = l / 536870912 | 0, p = l << 3, m = l % 64 < 56 ? 64 : 128;
          this._buffer[u] = 128;
          for (var _ = u + 1; _ < m - 8; _++)
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
  function i(o, c, l, u, f) {
    for (; f >= 64; ) {
      for (var p = c[0], m = c[1], _ = c[2], E = c[3], T = c[4], M = c[5], v = c[6], O = c[7], b = 0; b < 16; b++) {
        var x = u + b * 4;
        o[b] = e.readUint32BE(l, x);
      }
      for (var b = 16; b < 64; b++) {
        var y = o[b - 2], d = (y >>> 17 | y << 15) ^ (y >>> 19 | y << 13) ^ y >>> 10;
        y = o[b - 15];
        var g = (y >>> 7 | y << 25) ^ (y >>> 18 | y << 14) ^ y >>> 3;
        o[b] = (d + o[b - 7] | 0) + (g + o[b - 16] | 0);
      }
      for (var b = 0; b < 64; b++) {
        var d = (((T >>> 6 | T << 26) ^ (T >>> 11 | T << 21) ^ (T >>> 25 | T << 7)) + (T & M ^ ~T & v) | 0) + (O + (s[b] + o[b] | 0) | 0) | 0, g = ((p >>> 2 | p << 30) ^ (p >>> 13 | p << 19) ^ (p >>> 22 | p << 10)) + (p & m ^ p & _ ^ m & _) | 0;
        O = v, v = M, M = T, T = E + d | 0, E = _, _ = m, m = p, p = d + g | 0;
      }
      c[0] += p, c[1] += m, c[2] += _, c[3] += E, c[4] += T, c[5] += M, c[6] += v, c[7] += O, u += 64, f -= 64;
    }
    return u;
  }
  function a(o) {
    var c = new n();
    c.update(o);
    var l = c.digest();
    return c.clean(), l;
  }
  t.hash = a;
})(Oa);
var pl = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.sharedKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.scalarMultBase = t.scalarMult = t.SHARED_KEY_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = void 0;
  const e = Ws, r = mr;
  t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 32, t.SHARED_KEY_LENGTH = 32;
  function n(b) {
    const x = new Float64Array(16);
    if (b)
      for (let y = 0; y < b.length; y++)
        x[y] = b[y];
    return x;
  }
  const s = new Uint8Array(32);
  s[0] = 9;
  const i = n([56129, 1]);
  function a(b) {
    let x = 1;
    for (let y = 0; y < 16; y++) {
      let d = b[y] + x + 65535;
      x = Math.floor(d / 65536), b[y] = d - x * 65536;
    }
    b[0] += x - 1 + 37 * (x - 1);
  }
  function o(b, x, y) {
    const d = ~(y - 1);
    for (let g = 0; g < 16; g++) {
      const P = d & (b[g] ^ x[g]);
      b[g] ^= P, x[g] ^= P;
    }
  }
  function c(b, x) {
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
      b[2 * g] = d[g] & 255, b[2 * g + 1] = d[g] >> 8;
  }
  function l(b, x) {
    for (let y = 0; y < 16; y++)
      b[y] = x[2 * y] + (x[2 * y + 1] << 8);
    b[15] &= 32767;
  }
  function u(b, x, y) {
    for (let d = 0; d < 16; d++)
      b[d] = x[d] + y[d];
  }
  function f(b, x, y) {
    for (let d = 0; d < 16; d++)
      b[d] = x[d] - y[d];
  }
  function p(b, x, y) {
    let d, g, P = 0, N = 0, D = 0, G = 0, Y = 0, C = 0, A = 0, Q = 0, Z = 0, $ = 0, V = 0, U = 0, K = 0, ye = 0, W = 0, de = 0, ne = 0, ue = 0, L = 0, j = 0, k = 0, h = 0, I = 0, H = 0, ee = 0, je = 0, Le = 0, Oe = 0, Ze = 0, at = 0, tt = 0, qe = y[0], ze = y[1], Te = y[2], Pe = y[3], Ce = y[4], be = y[5], we = y[6], he = y[7], Ne = y[8], Me = y[9], me = y[10], Ue = y[11], Ke = y[12], He = y[13], Ge = y[14], Fe = y[15];
    d = x[0], P += d * qe, N += d * ze, D += d * Te, G += d * Pe, Y += d * Ce, C += d * be, A += d * we, Q += d * he, Z += d * Ne, $ += d * Me, V += d * me, U += d * Ue, K += d * Ke, ye += d * He, W += d * Ge, de += d * Fe, d = x[1], N += d * qe, D += d * ze, G += d * Te, Y += d * Pe, C += d * Ce, A += d * be, Q += d * we, Z += d * he, $ += d * Ne, V += d * Me, U += d * me, K += d * Ue, ye += d * Ke, W += d * He, de += d * Ge, ne += d * Fe, d = x[2], D += d * qe, G += d * ze, Y += d * Te, C += d * Pe, A += d * Ce, Q += d * be, Z += d * we, $ += d * he, V += d * Ne, U += d * Me, K += d * me, ye += d * Ue, W += d * Ke, de += d * He, ne += d * Ge, ue += d * Fe, d = x[3], G += d * qe, Y += d * ze, C += d * Te, A += d * Pe, Q += d * Ce, Z += d * be, $ += d * we, V += d * he, U += d * Ne, K += d * Me, ye += d * me, W += d * Ue, de += d * Ke, ne += d * He, ue += d * Ge, L += d * Fe, d = x[4], Y += d * qe, C += d * ze, A += d * Te, Q += d * Pe, Z += d * Ce, $ += d * be, V += d * we, U += d * he, K += d * Ne, ye += d * Me, W += d * me, de += d * Ue, ne += d * Ke, ue += d * He, L += d * Ge, j += d * Fe, d = x[5], C += d * qe, A += d * ze, Q += d * Te, Z += d * Pe, $ += d * Ce, V += d * be, U += d * we, K += d * he, ye += d * Ne, W += d * Me, de += d * me, ne += d * Ue, ue += d * Ke, L += d * He, j += d * Ge, k += d * Fe, d = x[6], A += d * qe, Q += d * ze, Z += d * Te, $ += d * Pe, V += d * Ce, U += d * be, K += d * we, ye += d * he, W += d * Ne, de += d * Me, ne += d * me, ue += d * Ue, L += d * Ke, j += d * He, k += d * Ge, h += d * Fe, d = x[7], Q += d * qe, Z += d * ze, $ += d * Te, V += d * Pe, U += d * Ce, K += d * be, ye += d * we, W += d * he, de += d * Ne, ne += d * Me, ue += d * me, L += d * Ue, j += d * Ke, k += d * He, h += d * Ge, I += d * Fe, d = x[8], Z += d * qe, $ += d * ze, V += d * Te, U += d * Pe, K += d * Ce, ye += d * be, W += d * we, de += d * he, ne += d * Ne, ue += d * Me, L += d * me, j += d * Ue, k += d * Ke, h += d * He, I += d * Ge, H += d * Fe, d = x[9], $ += d * qe, V += d * ze, U += d * Te, K += d * Pe, ye += d * Ce, W += d * be, de += d * we, ne += d * he, ue += d * Ne, L += d * Me, j += d * me, k += d * Ue, h += d * Ke, I += d * He, H += d * Ge, ee += d * Fe, d = x[10], V += d * qe, U += d * ze, K += d * Te, ye += d * Pe, W += d * Ce, de += d * be, ne += d * we, ue += d * he, L += d * Ne, j += d * Me, k += d * me, h += d * Ue, I += d * Ke, H += d * He, ee += d * Ge, je += d * Fe, d = x[11], U += d * qe, K += d * ze, ye += d * Te, W += d * Pe, de += d * Ce, ne += d * be, ue += d * we, L += d * he, j += d * Ne, k += d * Me, h += d * me, I += d * Ue, H += d * Ke, ee += d * He, je += d * Ge, Le += d * Fe, d = x[12], K += d * qe, ye += d * ze, W += d * Te, de += d * Pe, ne += d * Ce, ue += d * be, L += d * we, j += d * he, k += d * Ne, h += d * Me, I += d * me, H += d * Ue, ee += d * Ke, je += d * He, Le += d * Ge, Oe += d * Fe, d = x[13], ye += d * qe, W += d * ze, de += d * Te, ne += d * Pe, ue += d * Ce, L += d * be, j += d * we, k += d * he, h += d * Ne, I += d * Me, H += d * me, ee += d * Ue, je += d * Ke, Le += d * He, Oe += d * Ge, Ze += d * Fe, d = x[14], W += d * qe, de += d * ze, ne += d * Te, ue += d * Pe, L += d * Ce, j += d * be, k += d * we, h += d * he, I += d * Ne, H += d * Me, ee += d * me, je += d * Ue, Le += d * Ke, Oe += d * He, Ze += d * Ge, at += d * Fe, d = x[15], de += d * qe, ne += d * ze, ue += d * Te, L += d * Pe, j += d * Ce, k += d * be, h += d * we, I += d * he, H += d * Ne, ee += d * Me, je += d * me, Le += d * Ue, Oe += d * Ke, Ze += d * He, at += d * Ge, tt += d * Fe, P += 38 * ne, N += 38 * ue, D += 38 * L, G += 38 * j, Y += 38 * k, C += 38 * h, A += 38 * I, Q += 38 * H, Z += 38 * ee, $ += 38 * je, V += 38 * Le, U += 38 * Oe, K += 38 * Ze, ye += 38 * at, W += 38 * tt, g = 1, d = P + g + 65535, g = Math.floor(d / 65536), P = d - g * 65536, d = N + g + 65535, g = Math.floor(d / 65536), N = d - g * 65536, d = D + g + 65535, g = Math.floor(d / 65536), D = d - g * 65536, d = G + g + 65535, g = Math.floor(d / 65536), G = d - g * 65536, d = Y + g + 65535, g = Math.floor(d / 65536), Y = d - g * 65536, d = C + g + 65535, g = Math.floor(d / 65536), C = d - g * 65536, d = A + g + 65535, g = Math.floor(d / 65536), A = d - g * 65536, d = Q + g + 65535, g = Math.floor(d / 65536), Q = d - g * 65536, d = Z + g + 65535, g = Math.floor(d / 65536), Z = d - g * 65536, d = $ + g + 65535, g = Math.floor(d / 65536), $ = d - g * 65536, d = V + g + 65535, g = Math.floor(d / 65536), V = d - g * 65536, d = U + g + 65535, g = Math.floor(d / 65536), U = d - g * 65536, d = K + g + 65535, g = Math.floor(d / 65536), K = d - g * 65536, d = ye + g + 65535, g = Math.floor(d / 65536), ye = d - g * 65536, d = W + g + 65535, g = Math.floor(d / 65536), W = d - g * 65536, d = de + g + 65535, g = Math.floor(d / 65536), de = d - g * 65536, P += g - 1 + 37 * (g - 1), g = 1, d = P + g + 65535, g = Math.floor(d / 65536), P = d - g * 65536, d = N + g + 65535, g = Math.floor(d / 65536), N = d - g * 65536, d = D + g + 65535, g = Math.floor(d / 65536), D = d - g * 65536, d = G + g + 65535, g = Math.floor(d / 65536), G = d - g * 65536, d = Y + g + 65535, g = Math.floor(d / 65536), Y = d - g * 65536, d = C + g + 65535, g = Math.floor(d / 65536), C = d - g * 65536, d = A + g + 65535, g = Math.floor(d / 65536), A = d - g * 65536, d = Q + g + 65535, g = Math.floor(d / 65536), Q = d - g * 65536, d = Z + g + 65535, g = Math.floor(d / 65536), Z = d - g * 65536, d = $ + g + 65535, g = Math.floor(d / 65536), $ = d - g * 65536, d = V + g + 65535, g = Math.floor(d / 65536), V = d - g * 65536, d = U + g + 65535, g = Math.floor(d / 65536), U = d - g * 65536, d = K + g + 65535, g = Math.floor(d / 65536), K = d - g * 65536, d = ye + g + 65535, g = Math.floor(d / 65536), ye = d - g * 65536, d = W + g + 65535, g = Math.floor(d / 65536), W = d - g * 65536, d = de + g + 65535, g = Math.floor(d / 65536), de = d - g * 65536, P += g - 1 + 37 * (g - 1), b[0] = P, b[1] = N, b[2] = D, b[3] = G, b[4] = Y, b[5] = C, b[6] = A, b[7] = Q, b[8] = Z, b[9] = $, b[10] = V, b[11] = U, b[12] = K, b[13] = ye, b[14] = W, b[15] = de;
  }
  function m(b, x) {
    p(b, x, x);
  }
  function _(b, x) {
    const y = n();
    for (let d = 0; d < 16; d++)
      y[d] = x[d];
    for (let d = 253; d >= 0; d--)
      m(y, y), d !== 2 && d !== 4 && p(y, y, x);
    for (let d = 0; d < 16; d++)
      b[d] = y[d];
  }
  function E(b, x) {
    const y = new Uint8Array(32), d = new Float64Array(80), g = n(), P = n(), N = n(), D = n(), G = n(), Y = n();
    for (let Z = 0; Z < 31; Z++)
      y[Z] = b[Z];
    y[31] = b[31] & 127 | 64, y[0] &= 248, l(d, x);
    for (let Z = 0; Z < 16; Z++)
      P[Z] = d[Z];
    g[0] = D[0] = 1;
    for (let Z = 254; Z >= 0; --Z) {
      const $ = y[Z >>> 3] >>> (Z & 7) & 1;
      o(g, P, $), o(N, D, $), u(G, g, N), f(g, g, N), u(N, P, D), f(P, P, D), m(D, G), m(Y, g), p(g, N, g), p(N, P, G), u(G, g, N), f(g, g, N), m(P, g), f(N, D, Y), p(g, N, i), u(g, g, D), p(N, N, g), p(g, D, Y), p(D, P, d), m(P, G), o(g, P, $), o(N, D, $);
    }
    for (let Z = 0; Z < 16; Z++)
      d[Z + 16] = g[Z], d[Z + 32] = N[Z], d[Z + 48] = P[Z], d[Z + 64] = D[Z];
    const C = d.subarray(32), A = d.subarray(16);
    _(C, C), p(A, A, C);
    const Q = new Uint8Array(32);
    return c(Q, A), Q;
  }
  t.scalarMult = E;
  function T(b) {
    return E(b, s);
  }
  t.scalarMultBase = T;
  function M(b) {
    if (b.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);
    const x = new Uint8Array(b);
    return {
      publicKey: T(x),
      secretKey: x
    };
  }
  t.generateKeyPairFromSeed = M;
  function v(b) {
    const x = (0, e.randomBytes)(32, b), y = M(x);
    return (0, r.wipe)(x), y;
  }
  t.generateKeyPair = v;
  function O(b, x, y = !1) {
    if (b.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (x.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const d = E(b, x);
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
})(pl);
var qu = function(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, s = e.length, i; n < s; n++)
      (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return t.concat(i || Array.prototype.slice.call(e));
}, Fw = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, n) {
      this.name = e, this.version = r, this.os = n, this.type = "browser";
    }
    return t;
  }()
), Bw = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return t;
  }()
), Hw = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, n, s) {
      this.name = e, this.version = r, this.os = n, this.bot = s, this.type = "bot-device";
    }
    return t;
  }()
), Gw = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return t;
  }()
), Yw = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return t;
  }()
), Jw = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, Xw = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, Vu = 3, Qw = [
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
  ["searchbot", Jw]
], Zu = [
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
function e_(t) {
  return t ? Ku(t) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new Yw() : typeof navigator < "u" ? Ku(navigator.userAgent) : n_();
}
function t_(t) {
  return t !== "" && Qw.reduce(function(e, r) {
    var n = r[0], s = r[1];
    if (e)
      return e;
    var i = s.exec(t);
    return !!i && [n, i];
  }, !1);
}
function Ku(t) {
  var e = t_(t);
  if (!e)
    return null;
  var r = e[0], n = e[1];
  if (r === "searchbot")
    return new Gw();
  var s = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
  s ? s.length < Vu && (s = qu(qu([], s, !0), s_(Vu - s.length), !0)) : s = [];
  var i = s.join("."), a = r_(t), o = Xw.exec(t);
  return o && o[1] ? new Hw(r, i, a, o[1]) : new Fw(r, i, a);
}
function r_(t) {
  for (var e = 0, r = Zu.length; e < r; e++) {
    var n = Zu[e], s = n[0], i = n[1], a = i.exec(t);
    if (a)
      return s;
  }
  return null;
}
function n_() {
  var t = typeof process < "u" && process.version;
  return t ? new Bw(process.version.slice(1)) : null;
}
function s_(t) {
  for (var e = [], r = 0; r < t; r++)
    e.push("0");
  return e;
}
var nt = {};
Object.defineProperty(nt, "__esModule", { value: !0 });
nt.getLocalStorage = nt.getLocalStorageOrThrow = nt.getCrypto = nt.getCryptoOrThrow = Jh = nt.getLocation = nt.getLocationOrThrow = yl = nt.getNavigator = nt.getNavigatorOrThrow = gl = nt.getDocument = nt.getDocumentOrThrow = nt.getFromWindowOrThrow = nt.getFromWindow = void 0;
function us(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
nt.getFromWindow = us;
function Fs(t) {
  const e = us(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
nt.getFromWindowOrThrow = Fs;
function i_() {
  return Fs("document");
}
nt.getDocumentOrThrow = i_;
function o_() {
  return us("document");
}
var gl = nt.getDocument = o_;
function a_() {
  return Fs("navigator");
}
nt.getNavigatorOrThrow = a_;
function c_() {
  return us("navigator");
}
var yl = nt.getNavigator = c_;
function l_() {
  return Fs("location");
}
nt.getLocationOrThrow = l_;
function u_() {
  return us("location");
}
var Jh = nt.getLocation = u_;
function d_() {
  return Fs("crypto");
}
nt.getCryptoOrThrow = d_;
function h_() {
  return us("crypto");
}
nt.getCrypto = h_;
function f_() {
  return Fs("localStorage");
}
nt.getLocalStorageOrThrow = f_;
function p_() {
  return us("localStorage");
}
nt.getLocalStorage = p_;
var ml = {};
Object.defineProperty(ml, "__esModule", { value: !0 });
var Xh = ml.getWindowMetadata = void 0;
const Wu = nt;
function g_() {
  let t, e;
  try {
    t = Wu.getDocumentOrThrow(), e = Wu.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const u = t.getElementsByTagName("link"), f = [];
    for (let p = 0; p < u.length; p++) {
      const m = u[p], _ = m.getAttribute("rel");
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
  function n(...u) {
    const f = t.getElementsByTagName("meta");
    for (let p = 0; p < f.length; p++) {
      const m = f[p], _ = ["itemprop", "property", "name"].map((E) => m.getAttribute(E)).filter((E) => E ? u.includes(E) : !1);
      if (_.length && _) {
        const E = m.getAttribute("content");
        if (E)
          return E;
      }
    }
    return "";
  }
  function s() {
    let u = n("name", "og:site_name", "og:title", "twitter:title");
    return u || (u = t.title), u;
  }
  function i() {
    return n("description", "og:description", "twitter:description", "keywords");
  }
  const a = s(), o = i(), c = e.origin, l = r();
  return {
    description: o,
    url: c,
    icons: l,
    name: a
  };
}
Xh = ml.getWindowMetadata = g_;
var yi = {}, y_ = (t) => encodeURIComponent(t).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), Qh = "%[a-f0-9]{2}", Fu = new RegExp("(" + Qh + ")|([^%]+?)", "gi"), Bu = new RegExp("(" + Qh + ")+", "gi");
function vc(t, e) {
  try {
    return [decodeURIComponent(t.join(""))];
  } catch {
  }
  if (t.length === 1)
    return t;
  e = e || 1;
  var r = t.slice(0, e), n = t.slice(e);
  return Array.prototype.concat.call([], vc(r), vc(n));
}
function m_(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    for (var e = t.match(Fu) || [], r = 1; r < e.length; r++)
      t = vc(e, r).join(""), e = t.match(Fu) || [];
    return t;
  }
}
function v_(t) {
  for (var e = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = Bu.exec(t); r; ) {
    try {
      e[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var n = m_(r[0]);
      n !== r[0] && (e[r[0]] = n);
    }
    r = Bu.exec(t);
  }
  e["%C2"] = "�";
  for (var s = Object.keys(e), i = 0; i < s.length; i++) {
    var a = s[i];
    t = t.replace(new RegExp(a, "g"), e[a]);
  }
  return t;
}
var w_ = function(t) {
  if (typeof t != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
  try {
    return t = t.replace(/\+/g, " "), decodeURIComponent(t);
  } catch {
    return v_(t);
  }
}, __ = (t, e) => {
  if (!(typeof t == "string" && typeof e == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "")
    return [t];
  const r = t.indexOf(e);
  return r === -1 ? [t] : [
    t.slice(0, r),
    t.slice(r + e.length)
  ];
}, b_ = function(t, e) {
  for (var r = {}, n = Object.keys(t), s = Array.isArray(e), i = 0; i < n.length; i++) {
    var a = n[i], o = t[a];
    (s ? e.indexOf(a) !== -1 : e(a, o, t)) && (r[a] = o);
  }
  return r;
};
(function(t) {
  const e = y_, r = w_, n = __, s = b_, i = (v) => v == null, a = Symbol("encodeFragmentIdentifier");
  function o(v) {
    switch (v.arrayFormat) {
      case "index":
        return (O) => (b, x) => {
          const y = b.length;
          return x === void 0 || v.skipNull && x === null || v.skipEmptyString && x === "" ? b : x === null ? [...b, [u(O, v), "[", y, "]"].join("")] : [
            ...b,
            [u(O, v), "[", u(y, v), "]=", u(x, v)].join("")
          ];
        };
      case "bracket":
        return (O) => (b, x) => x === void 0 || v.skipNull && x === null || v.skipEmptyString && x === "" ? b : x === null ? [...b, [u(O, v), "[]"].join("")] : [...b, [u(O, v), "[]=", u(x, v)].join("")];
      case "colon-list-separator":
        return (O) => (b, x) => x === void 0 || v.skipNull && x === null || v.skipEmptyString && x === "" ? b : x === null ? [...b, [u(O, v), ":list="].join("")] : [...b, [u(O, v), ":list=", u(x, v)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const O = v.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (b) => (x, y) => y === void 0 || v.skipNull && y === null || v.skipEmptyString && y === "" ? x : (y = y === null ? "" : y, x.length === 0 ? [[u(b, v), O, u(y, v)].join("")] : [[x, u(y, v)].join(v.arrayFormatSeparator)]);
      }
      default:
        return (O) => (b, x) => x === void 0 || v.skipNull && x === null || v.skipEmptyString && x === "" ? b : x === null ? [...b, u(O, v)] : [...b, [u(O, v), "=", u(x, v)].join("")];
    }
  }
  function c(v) {
    let O;
    switch (v.arrayFormat) {
      case "index":
        return (b, x, y) => {
          if (O = /\[(\d*)\]$/.exec(b), b = b.replace(/\[\d*\]$/, ""), !O) {
            y[b] = x;
            return;
          }
          y[b] === void 0 && (y[b] = {}), y[b][O[1]] = x;
        };
      case "bracket":
        return (b, x, y) => {
          if (O = /(\[\])$/.exec(b), b = b.replace(/\[\]$/, ""), !O) {
            y[b] = x;
            return;
          }
          if (y[b] === void 0) {
            y[b] = [x];
            return;
          }
          y[b] = [].concat(y[b], x);
        };
      case "colon-list-separator":
        return (b, x, y) => {
          if (O = /(:list)$/.exec(b), b = b.replace(/:list$/, ""), !O) {
            y[b] = x;
            return;
          }
          if (y[b] === void 0) {
            y[b] = [x];
            return;
          }
          y[b] = [].concat(y[b], x);
        };
      case "comma":
      case "separator":
        return (b, x, y) => {
          const d = typeof x == "string" && x.includes(v.arrayFormatSeparator), g = typeof x == "string" && !d && f(x, v).includes(v.arrayFormatSeparator);
          x = g ? f(x, v) : x;
          const P = d || g ? x.split(v.arrayFormatSeparator).map((N) => f(N, v)) : x === null ? x : f(x, v);
          y[b] = P;
        };
      case "bracket-separator":
        return (b, x, y) => {
          const d = /(\[\])$/.test(b);
          if (b = b.replace(/\[\]$/, ""), !d) {
            y[b] = x && f(x, v);
            return;
          }
          const g = x === null ? [] : x.split(v.arrayFormatSeparator).map((P) => f(P, v));
          if (y[b] === void 0) {
            y[b] = g;
            return;
          }
          y[b] = [].concat(y[b], g);
        };
      default:
        return (b, x, y) => {
          if (y[b] === void 0) {
            y[b] = x;
            return;
          }
          y[b] = [].concat(y[b], x);
        };
    }
  }
  function l(v) {
    if (typeof v != "string" || v.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function u(v, O) {
    return O.encode ? O.strict ? e(v) : encodeURIComponent(v) : v;
  }
  function f(v, O) {
    return O.decode ? r(v) : v;
  }
  function p(v) {
    return Array.isArray(v) ? v.sort() : typeof v == "object" ? p(Object.keys(v)).sort((O, b) => Number(O) - Number(b)).map((O) => v[O]) : v;
  }
  function m(v) {
    const O = v.indexOf("#");
    return O !== -1 && (v = v.slice(0, O)), v;
  }
  function _(v) {
    let O = "";
    const b = v.indexOf("#");
    return b !== -1 && (O = v.slice(b)), O;
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
    }, O), l(O.arrayFormatSeparator);
    const b = c(O), x = /* @__PURE__ */ Object.create(null);
    if (typeof v != "string" || (v = v.trim().replace(/^[?#&]/, ""), !v))
      return x;
    for (const y of v.split("&")) {
      if (y === "")
        continue;
      let [d, g] = n(O.decode ? y.replace(/\+/g, " ") : y, "=");
      g = g === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(O.arrayFormat) ? g : f(g, O), b(f(d, O), g, x);
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
    }, O), l(O.arrayFormatSeparator);
    const b = (g) => O.skipNull && i(v[g]) || O.skipEmptyString && v[g] === "", x = o(O), y = {};
    for (const g of Object.keys(v))
      b(g) || (y[g] = v[g]);
    const d = Object.keys(y);
    return O.sort !== !1 && d.sort(O.sort), d.map((g) => {
      const P = v[g];
      return P === void 0 ? "" : P === null ? u(g, O) : Array.isArray(P) ? P.length === 0 && O.arrayFormat === "bracket-separator" ? u(g, O) + "[]" : P.reduce(x(g), []).join("&") : u(g, O) + "=" + u(P, O);
    }).filter((g) => g.length > 0).join("&");
  }, t.parseUrl = (v, O) => {
    O = Object.assign({
      decode: !0
    }, O);
    const [b, x] = n(v, "#");
    return Object.assign(
      {
        url: b.split("?")[0] || "",
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
    const b = m(v.url).split("?")[0] || "", x = t.extract(v.url), y = t.parse(x, { sort: !1 }), d = Object.assign(y, v.query);
    let g = t.stringify(d, O);
    g && (g = `?${g}`);
    let P = _(v.url);
    return v.fragmentIdentifier && (P = `#${O[a] ? u(v.fragmentIdentifier, O) : v.fragmentIdentifier}`), `${b}${g}${P}`;
  }, t.pick = (v, O, b) => {
    b = Object.assign({
      parseFragmentIdentifier: !0,
      [a]: !1
    }, b);
    const { url: x, query: y, fragmentIdentifier: d } = t.parseUrl(v, b);
    return t.stringifyUrl({
      url: x,
      query: s(y, O),
      fragmentIdentifier: d
    }, b);
  }, t.exclude = (v, O, b) => {
    const x = Array.isArray(O) ? (y) => !O.includes(y) : (y, d) => !O(y, d);
    return t.pick(v, x, b);
  };
})(yi);
const E_ = {
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
function ef(t, e) {
  return t.includes(":") ? [t] : e.chains || [];
}
const tf = "base10", nr = "base16", wc = "base64pad", vl = "utf8", rf = 0, ds = 1, S_ = 0, Hu = 1, _c = 12, wl = 32;
function x_() {
  const t = pl.generateKeyPair();
  return { privateKey: sr(t.secretKey, nr), publicKey: sr(t.publicKey, nr) };
}
function bc() {
  const t = Ws.randomBytes(wl);
  return sr(t, nr);
}
function I_(t, e) {
  const r = pl.sharedKey(ur(t, nr), ur(e, nr), !0), n = new Ww(Oa.SHA256, r).expand(wl);
  return sr(n, nr);
}
function O_(t) {
  const e = Oa.hash(ur(t, nr));
  return sr(e, nr);
}
function Ts(t) {
  const e = Oa.hash(ur(t, vl));
  return sr(e, nr);
}
function T_(t) {
  return ur(`${t}`, tf);
}
function ro(t) {
  return Number(sr(t, tf));
}
function C_(t) {
  const e = T_(typeof t.type < "u" ? t.type : rf);
  if (ro(e) === ds && typeof t.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof t.senderPublicKey < "u" ? ur(t.senderPublicKey, nr) : void 0, n = typeof t.iv < "u" ? ur(t.iv, nr) : Ws.randomBytes(_c), s = new hl.ChaCha20Poly1305(ur(t.symKey, nr)).seal(n, ur(t.message, vl));
  return P_({ type: e, sealed: s, iv: n, senderPublicKey: r });
}
function k_(t) {
  const e = new hl.ChaCha20Poly1305(ur(t.symKey, nr)), { sealed: r, iv: n } = qo(t.encoded), s = e.open(n, r);
  if (s === null)
    throw new Error("Failed to decrypt");
  return sr(s, vl);
}
function P_(t) {
  if (ro(t.type) === ds) {
    if (typeof t.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return sr(yc([t.type, t.senderPublicKey, t.iv, t.sealed]), wc);
  }
  return sr(yc([t.type, t.iv, t.sealed]), wc);
}
function qo(t) {
  const e = ur(t, wc), r = e.slice(S_, Hu), n = Hu;
  if (ro(r) === ds) {
    const o = n + wl, c = o + _c, l = e.slice(n, o), u = e.slice(o, c), f = e.slice(c);
    return { type: r, sealed: f, iv: u, senderPublicKey: l };
  }
  const s = n + _c, i = e.slice(n, s), a = e.slice(s);
  return { type: r, sealed: a, iv: i };
}
function N_(t, e) {
  const r = qo(t);
  return nf({ type: ro(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? sr(r.senderPublicKey, nr) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function nf(t) {
  const e = (t == null ? void 0 : t.type) || rf;
  if (e === ds) {
    if (typeof (t == null ? void 0 : t.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: t == null ? void 0 : t.senderPublicKey, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey };
}
function Gu(t) {
  return t.type === ds && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
var R_ = Object.defineProperty, Yu = Object.getOwnPropertySymbols, A_ = Object.prototype.hasOwnProperty, j_ = Object.prototype.propertyIsEnumerable, Ju = (t, e, r) => e in t ? R_(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Xu = (t, e) => {
  for (var r in e || (e = {}))
    A_.call(e, r) && Ju(t, r, e[r]);
  if (Yu)
    for (var r of Yu(e))
      j_.call(e, r) && Ju(t, r, e[r]);
  return t;
};
const L_ = "ReactNative", yr = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, M_ = "js";
function _l() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function Bs() {
  return !gl() && !!yl() && navigator.product === L_;
}
function Hs() {
  return !_l() && !!yl() && !!gl();
}
function no() {
  return Bs() ? yr.reactNative : _l() ? yr.node : Hs() ? yr.browser : yr.unknown;
}
function D_() {
  var t;
  try {
    return Bs() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (t = global.Application) == null ? void 0 : t.applicationId : void 0;
  } catch {
    return;
  }
}
function z_(t, e) {
  let r = yi.parse(t);
  return r = Xu(Xu({}, r), e), t = yi.stringify(r), t;
}
function U_() {
  return Xh() || { name: "", description: "", url: "", icons: [""] };
}
function $_() {
  if (no() === yr.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: n } = global.Platform;
    return [r, n].join("-");
  }
  const t = e_();
  if (t === null)
    return "unknown";
  const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-");
}
function q_() {
  var t;
  const e = no();
  return e === yr.browser ? [e, ((t = Jh()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function V_(t, e, r) {
  const n = $_(), s = q_();
  return [[t, e].join("-"), [M_, r].join("-"), n, s].join("/");
}
function Z_({ protocol: t, version: e, relayUrl: r, sdkVersion: n, auth: s, projectId: i, useOnCloseEvent: a, bundleId: o }) {
  const c = r.split("?"), l = V_(t, e, n), u = { auth: s, ua: l, projectId: i, useOnCloseEvent: a || void 0, origin: o || void 0 }, f = z_(c[1] || "", u);
  return c[0] + "?" + f;
}
function Gn(t, e) {
  return t.filter((r) => e.includes(r)).length === t.length;
}
function sf(t) {
  return Object.fromEntries(t.entries());
}
function of(t) {
  return new Map(Object.entries(t));
}
function _s(t = ae.FIVE_MINUTES, e) {
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
function mi(t, e, r) {
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
function af(t, e) {
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
function K_(t) {
  return af("topic", t);
}
function W_(t) {
  return af("id", t);
}
function cf(t) {
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
async function F_({ id: t, topic: e, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const n = typeof r == "string" ? JSON.parse(r) : r;
    let s = n == null ? void 0 : n.href;
    if (typeof s != "string")
      return;
    s.endsWith("/") && (s = s.slice(0, -1));
    const i = `${s}/wc?requestId=${t}&sessionTopic=${e}`, a = no();
    a === yr.browser ? i.startsWith("https://") ? window.open(i, "_blank", "noreferrer noopener") : window.open(i, "_self", "noreferrer noopener") : a === yr.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(i);
  } catch (n) {
    console.error(n);
  }
}
async function B_(t, e) {
  try {
    return await t.getItem(e) || (Hs() ? localStorage.getItem(e) : void 0);
  } catch (r) {
    console.error(r);
  }
}
const H_ = "irn";
function Ec(t) {
  return (t == null ? void 0 : t.relay) || { protocol: H_ };
}
function Ro(t) {
  const e = E_[t];
  if (typeof e > "u")
    throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
var G_ = Object.defineProperty, Y_ = Object.defineProperties, J_ = Object.getOwnPropertyDescriptors, Qu = Object.getOwnPropertySymbols, X_ = Object.prototype.hasOwnProperty, Q_ = Object.prototype.propertyIsEnumerable, ed = (t, e, r) => e in t ? G_(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, e0 = (t, e) => {
  for (var r in e || (e = {}))
    X_.call(e, r) && ed(t, r, e[r]);
  if (Qu)
    for (var r of Qu(e))
      Q_.call(e, r) && ed(t, r, e[r]);
  return t;
}, t0 = (t, e) => Y_(t, J_(e));
function r0(t, e = "-") {
  const r = {}, n = "relay" + e;
  return Object.keys(t).forEach((s) => {
    if (s.startsWith(n)) {
      const i = s.replace(n, ""), a = t[s];
      r[i] = a;
    }
  }), r;
}
function td(t) {
  t = t.includes("wc://") ? t.replace("wc://", "") : t, t = t.includes("wc:") ? t.replace("wc:", "") : t;
  const e = t.indexOf(":"), r = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, n = t.substring(0, e), s = t.substring(e + 1, r).split("@"), i = typeof r < "u" ? t.substring(r) : "", a = yi.parse(i);
  return { protocol: n, topic: n0(s[0]), version: parseInt(s[1], 10), symKey: a.symKey, relay: r0(a), expiryTimestamp: a.expiryTimestamp ? parseInt(a.expiryTimestamp, 10) : void 0 };
}
function n0(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function s0(t, e = "-") {
  const r = "relay", n = {};
  return Object.keys(t).forEach((s) => {
    const i = r + e + s;
    t[s] && (n[i] = t[s]);
  }), n;
}
function i0(t) {
  return `${t.protocol}:${t.topic}@${t.version}?` + yi.stringify(t0(e0({ symKey: t.symKey }, s0(t.relay)), { expiryTimestamp: t.expiryTimestamp }));
}
function Gs(t) {
  const e = [];
  return t.forEach((r) => {
    const [n, s] = r.split(":");
    e.push(`${n}:${s}`);
  }), e;
}
function o0(t) {
  const e = [];
  return Object.values(t).forEach((r) => {
    e.push(...Gs(r.accounts));
  }), e;
}
function a0(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    Gs(n.accounts).includes(e) && r.push(...n.methods);
  }), r;
}
function c0(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    Gs(n.accounts).includes(e) && r.push(...n.events);
  }), r;
}
const l0 = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, u0 = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function J(t, e) {
  const { message: r, code: n } = u0[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function _t(t, e) {
  const { message: r, code: n } = l0[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function so(t, e) {
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
function bl(t, e) {
  return e && tr(t) ? !0 : typeof t == "number" && !isNaN(t);
}
function d0(t, e) {
  const { requiredNamespaces: r } = e, n = Object.keys(t.namespaces), s = Object.keys(r);
  let i = !0;
  return Gn(s, n) ? (n.forEach((a) => {
    const { accounts: o, methods: c, events: l } = t.namespaces[a], u = Gs(o), f = r[a];
    (!Gn(ef(a, f), u) || !Gn(f.methods, c) || !Gn(f.events, l)) && (i = !1);
  }), i) : !1;
}
function Zo(t) {
  return Lt(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function h0(t) {
  if (Lt(t, !1) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const r = e[0] + ":" + e[1];
      return !!e[2] && Zo(r);
    }
  }
  return !1;
}
function f0(t) {
  if (Lt(t, !1))
    try {
      return typeof new URL(t) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function p0(t) {
  var e;
  return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
}
function g0(t) {
  return t == null ? void 0 : t.topic;
}
function y0(t, e) {
  let r = null;
  return Lt(t == null ? void 0 : t.publicKey, !1) || (r = J("MISSING_OR_INVALID", `${e} controller public key should be a string`)), r;
}
function rd(t) {
  let e = !0;
  return so(t) ? t.length && (e = t.every((r) => Lt(r, !1))) : e = !1, e;
}
function m0(t, e, r) {
  let n = null;
  return so(e) && e.length ? e.forEach((s) => {
    n || Zo(s) || (n = _t("UNSUPPORTED_CHAINS", `${r}, chain ${s} should be a string and conform to "namespace:chainId" format`));
  }) : Zo(t) || (n = _t("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), n;
}
function v0(t, e, r) {
  let n = null;
  return Object.entries(t).forEach(([s, i]) => {
    if (n)
      return;
    const a = m0(s, ef(s, i), `${e} ${r}`);
    a && (n = a);
  }), n;
}
function w0(t, e) {
  let r = null;
  return so(t) ? t.forEach((n) => {
    r || h0(n) || (r = _t("UNSUPPORTED_ACCOUNTS", `${e}, account ${n} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = _t("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function _0(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const s = w0(n == null ? void 0 : n.accounts, `${e} namespace`);
    s && (r = s);
  }), r;
}
function b0(t, e) {
  let r = null;
  return rd(t == null ? void 0 : t.methods) ? rd(t == null ? void 0 : t.events) || (r = _t("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : r = _t("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), r;
}
function lf(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const s = b0(n, `${e}, namespace`);
    s && (r = s);
  }), r;
}
function E0(t, e, r) {
  let n = null;
  if (t && Vo(t)) {
    const s = lf(t, e);
    s && (n = s);
    const i = v0(t, e, r);
    i && (n = i);
  } else
    n = J("MISSING_OR_INVALID", `${e}, ${r} should be an object with data`);
  return n;
}
function Wa(t, e) {
  let r = null;
  if (t && Vo(t)) {
    const n = lf(t, e);
    n && (r = n);
    const s = _0(t, e);
    s && (r = s);
  } else
    r = J("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return r;
}
function uf(t) {
  return Lt(t.protocol, !0);
}
function S0(t, e) {
  let r = !1;
  return e && !t ? r = !0 : t && so(t) && t.length && t.forEach((n) => {
    r = uf(n);
  }), r;
}
function x0(t) {
  return typeof t == "number";
}
function lr(t) {
  return typeof t < "u" && typeof t !== null;
}
function I0(t) {
  return !(!t || typeof t != "object" || !t.code || !bl(t.code, !1) || !t.message || !Lt(t.message, !1));
}
function O0(t) {
  return !(tr(t) || !Lt(t.method, !1));
}
function T0(t) {
  return !(tr(t) || tr(t.result) && tr(t.error) || !bl(t.id, !1) || !Lt(t.jsonrpc, !1));
}
function C0(t) {
  return !(tr(t) || !Lt(t.name, !1));
}
function nd(t, e) {
  return !(!Zo(e) || !o0(t).includes(e));
}
function k0(t, e, r) {
  return Lt(r, !1) ? a0(t, e).includes(r) : !1;
}
function P0(t, e, r) {
  return Lt(r, !1) ? c0(t, e).includes(r) : !1;
}
function sd(t, e, r) {
  let n = null;
  const s = N0(t), i = R0(e), a = Object.keys(s), o = Object.keys(i), c = id(Object.keys(t)), l = id(Object.keys(e)), u = c.filter((f) => !l.includes(f));
  return u.length && (n = J("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${u.toString()}
      Received: ${Object.keys(e).toString()}`)), Gn(a, o) || (n = J("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${a.toString()}
      Approved: ${o.toString()}`)), Object.keys(e).forEach((f) => {
    if (!f.includes(":") || n)
      return;
    const p = Gs(e[f].accounts);
    p.includes(f) || (n = J("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${f}
        Required: ${f}
        Approved: ${p.toString()}`));
  }), a.forEach((f) => {
    n || (Gn(s[f].methods, i[f].methods) ? Gn(s[f].events, i[f].events) || (n = J("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${f}`)) : n = J("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${f}`));
  }), n;
}
function N0(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    var n;
    r.includes(":") ? e[r] = t[r] : (n = t[r].chains) == null || n.forEach((s) => {
      e[s] = { methods: t[r].methods, events: t[r].events };
    });
  }), e;
}
function id(t) {
  return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function R0(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    if (r.includes(":"))
      e[r] = t[r];
    else {
      const n = Gs(t[r].accounts);
      n == null || n.forEach((s) => {
        e[s] = { accounts: t[r].accounts.filter((i) => i.includes(`${s}:`)), methods: t[r].methods, events: t[r].events };
      });
    }
  }), e;
}
function A0(t, e) {
  return bl(t, !1) && t <= e.max && t >= e.min;
}
function od() {
  const t = no();
  return new Promise((e) => {
    switch (t) {
      case yr.browser:
        e(j0());
        break;
      case yr.reactNative:
        e(L0());
        break;
      case yr.node:
        e(M0());
        break;
      default:
        e(!0);
    }
  });
}
function j0() {
  return Hs() && (navigator == null ? void 0 : navigator.onLine);
}
async function L0() {
  if (Bs() && typeof global < "u" && global != null && global.NetInfo) {
    const t = await (global == null ? void 0 : global.NetInfo.fetch());
    return t == null ? void 0 : t.isConnected;
  }
  return !0;
}
function M0() {
  return !0;
}
function D0(t) {
  switch (no()) {
    case yr.browser:
      z0(t);
      break;
    case yr.reactNative:
      U0(t);
      break;
  }
}
function z0(t) {
  !Bs() && Hs() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function U0(t) {
  Bs() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
}
const Fa = {};
let bo = class {
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
const $0 = "PARSE_ERROR", q0 = "INVALID_REQUEST", V0 = "METHOD_NOT_FOUND", Z0 = "INVALID_PARAMS", df = "INTERNAL_ERROR", El = "SERVER_ERROR", K0 = [-32700, -32600, -32601, -32602, -32603], di = {
  [$0]: { code: -32700, message: "Parse error" },
  [q0]: { code: -32600, message: "Invalid Request" },
  [V0]: { code: -32601, message: "Method not found" },
  [Z0]: { code: -32602, message: "Invalid params" },
  [df]: { code: -32603, message: "Internal error" },
  [El]: { code: -32e3, message: "Server error" }
}, hf = El;
function W0(t) {
  return K0.includes(t);
}
function ad(t) {
  return Object.keys(di).includes(t) ? di[t] : di[hf];
}
function F0(t) {
  return Object.values(di).find((r) => r.code === t) || di[hf];
}
function B0(t, e, r) {
  return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${e}`) : t;
}
var ff = {}, tn = {}, cd;
function H0() {
  if (cd)
    return tn;
  cd = 1, Object.defineProperty(tn, "__esModule", { value: !0 }), tn.isBrowserCryptoAvailable = tn.getSubtleCrypto = tn.getBrowerCrypto = void 0;
  function t() {
    return (Tn == null ? void 0 : Tn.crypto) || (Tn == null ? void 0 : Tn.msCrypto) || {};
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
var rn = {}, ld;
function G0() {
  if (ld)
    return rn;
  ld = 1, Object.defineProperty(rn, "__esModule", { value: !0 }), rn.isBrowser = rn.isNode = rn.isReactNative = void 0;
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
  e.__exportStar(H0(), t), e.__exportStar(G0(), t);
})(ff);
function Sl(t = 3) {
  const e = Date.now() * Math.pow(10, t), r = Math.floor(Math.random() * Math.pow(10, t));
  return e + r;
}
function pf(t = 6) {
  return BigInt(Sl(t));
}
function Cs(t, e, r) {
  return {
    id: r || Sl(),
    jsonrpc: "2.0",
    method: t,
    params: e
  };
}
function xl(t, e) {
  return {
    id: t,
    jsonrpc: "2.0",
    result: e
  };
}
function Il(t, e, r) {
  return {
    id: t,
    jsonrpc: "2.0",
    error: Y0(e, r)
  };
}
function Y0(t, e) {
  return typeof t > "u" ? ad(df) : (typeof t == "string" && (t = Object.assign(Object.assign({}, ad(El)), { message: t })), typeof e < "u" && (t.data = e), W0(t.code) && (t = F0(t.code)), t);
}
class J0 {
}
class X0 extends J0 {
  constructor() {
    super();
  }
}
class Q0 extends X0 {
  constructor(e) {
    super();
  }
}
const eb = "^wss?:";
function tb(t) {
  const e = t.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length))
    return e[0];
}
function rb(t, e) {
  const r = tb(t);
  return typeof r > "u" ? !1 : new RegExp(e).test(r);
}
function ud(t) {
  return rb(t, eb);
}
function nb(t) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(t);
}
function gf(t) {
  return typeof t == "object" && "id" in t && "jsonrpc" in t && t.jsonrpc === "2.0";
}
function Ol(t) {
  return gf(t) && "method" in t;
}
function Ta(t) {
  return gf(t) && (an(t) || Tr(t));
}
function an(t) {
  return "result" in t;
}
function Tr(t) {
  return "error" in t;
}
class sb extends Q0 {
  constructor(e) {
    super(e), this.events = new zr.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners();
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
    return this.requestStrict(Cs(e.method, e.params || [], e.id || pf().toString()), r);
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
    this.events.emit("payload", e), Ta(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
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
const ib = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : (() => {
  try {
    return (() => {try { return require("ws") } catch (e) { } })();
  } catch {
  }
})(), ob = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", dd = (t) => t.split("?")[0], hd = 10, ab = ib();
class cb {
  constructor(e) {
    if (this.url = e, this.events = new zr.EventEmitter(), this.registering = !1, !ud(e))
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
      this.socket.send(Qi(e));
    } catch (r) {
      this.onError(e.id, r);
    }
  }
  register(e = this.url) {
    if (!ud(e))
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
      const s = new URLSearchParams(e).get("origin"), i = ff.isReactNative() ? { headers: { origin: s } } : { rejectUnauthorized: !nb(e) }, a = new ab(e, [], i);
      ob() ? a.onerror = (o) => {
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
    const r = typeof e.data == "string" ? _a(e.data) : e.data;
    this.events.emit("payload", r);
  }
  onError(e, r) {
    const n = this.parseError(r), s = n.message || n.toString(), i = Il(e, s);
    this.events.emit("payload", i);
  }
  parseError(e, r = this.url) {
    return B0(e, dd(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > hd && this.events.setMaxListeners(hd);
  }
  emitError(e) {
    const r = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${dd(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var Ko = { exports: {} };
Ko.exports;
(function(t, e) {
  var r = 200, n = "__lodash_hash_undefined__", s = 1, i = 2, a = 9007199254740991, o = "[object Arguments]", c = "[object Array]", l = "[object AsyncFunction]", u = "[object Boolean]", f = "[object Date]", p = "[object Error]", m = "[object Function]", _ = "[object GeneratorFunction]", E = "[object Map]", T = "[object Number]", M = "[object Null]", v = "[object Object]", O = "[object Promise]", b = "[object Proxy]", x = "[object RegExp]", y = "[object Set]", d = "[object String]", g = "[object Symbol]", P = "[object Undefined]", N = "[object WeakMap]", D = "[object ArrayBuffer]", G = "[object DataView]", Y = "[object Float32Array]", C = "[object Float64Array]", A = "[object Int8Array]", Q = "[object Int16Array]", Z = "[object Int32Array]", $ = "[object Uint8Array]", V = "[object Uint8ClampedArray]", U = "[object Uint16Array]", K = "[object Uint32Array]", ye = /[\\^$.*+?()[\]{}|]/g, W = /^\[object .+?Constructor\]$/, de = /^(?:0|[1-9]\d*)$/, ne = {};
  ne[Y] = ne[C] = ne[A] = ne[Q] = ne[Z] = ne[$] = ne[V] = ne[U] = ne[K] = !0, ne[o] = ne[c] = ne[D] = ne[u] = ne[G] = ne[f] = ne[p] = ne[m] = ne[E] = ne[T] = ne[v] = ne[x] = ne[y] = ne[d] = ne[N] = !1;
  var ue = typeof Tn == "object" && Tn && Tn.Object === Object && Tn, L = typeof self == "object" && self && self.Object === Object && self, j = ue || L || Function("return this")(), k = e && !e.nodeType && e, h = k && !0 && t && !t.nodeType && t, I = h && h.exports === k, H = I && ue.process, ee = function() {
    try {
      return H && H.binding && H.binding("util");
    } catch {
    }
  }(), je = ee && ee.isTypedArray;
  function Le(w, R) {
    for (var q = -1, oe = w == null ? 0 : w.length, ot = 0, ke = []; ++q < oe; ) {
      var wt = w[q];
      R(wt, q, w) && (ke[ot++] = wt);
    }
    return ke;
  }
  function Oe(w, R) {
    for (var q = -1, oe = R.length, ot = w.length; ++q < oe; )
      w[ot + q] = R[q];
    return w;
  }
  function Ze(w, R) {
    for (var q = -1, oe = w == null ? 0 : w.length; ++q < oe; )
      if (R(w[q], q, w))
        return !0;
    return !1;
  }
  function at(w, R) {
    for (var q = -1, oe = Array(w); ++q < w; )
      oe[q] = R(q);
    return oe;
  }
  function tt(w) {
    return function(R) {
      return w(R);
    };
  }
  function qe(w, R) {
    return w.has(R);
  }
  function ze(w, R) {
    return w == null ? void 0 : w[R];
  }
  function Te(w) {
    var R = -1, q = Array(w.size);
    return w.forEach(function(oe, ot) {
      q[++R] = [ot, oe];
    }), q;
  }
  function Pe(w, R) {
    return function(q) {
      return w(R(q));
    };
  }
  function Ce(w) {
    var R = -1, q = Array(w.size);
    return w.forEach(function(oe) {
      q[++R] = oe;
    }), q;
  }
  var be = Array.prototype, we = Function.prototype, he = Object.prototype, Ne = j["__core-js_shared__"], Me = we.toString, me = he.hasOwnProperty, Ue = function() {
    var w = /[^.]+$/.exec(Ne && Ne.keys && Ne.keys.IE_PROTO || "");
    return w ? "Symbol(src)_1." + w : "";
  }(), Ke = he.toString, He = RegExp(
    "^" + Me.call(me).replace(ye, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Ge = I ? j.Buffer : void 0, Fe = j.Symbol, hr = j.Uint8Array, vr = he.propertyIsEnumerable, qr = be.splice, Dt = Fe ? Fe.toStringTag : void 0, Vr = Object.getOwnPropertySymbols, wr = Ge ? Ge.isBuffer : void 0, yn = Pe(Object.keys, Object), ct = fs(j, "DataView"), st = fs(j, "Map"), gt = fs(j, "Promise"), ut = fs(j, "Set"), yt = fs(j, "WeakMap"), it = fs(Object, "create"), Et = $n(ct), Ot = $n(st), Tt = $n(gt), St = $n(ut), Ct = $n(yt), xt = Fe ? Fe.prototype : void 0, mt = xt ? xt.valueOf : void 0;
  function rt(w) {
    var R = -1, q = w == null ? 0 : w.length;
    for (this.clear(); ++R < q; ) {
      var oe = w[R];
      this.set(oe[0], oe[1]);
    }
  }
  function S() {
    this.__data__ = it ? it(null) : {}, this.size = 0;
  }
  function z(w) {
    var R = this.has(w) && delete this.__data__[w];
    return this.size -= R ? 1 : 0, R;
  }
  function X(w) {
    var R = this.__data__;
    if (it) {
      var q = R[w];
      return q === n ? void 0 : q;
    }
    return me.call(R, w) ? R[w] : void 0;
  }
  function fe(w) {
    var R = this.__data__;
    return it ? R[w] !== void 0 : me.call(R, w);
  }
  function Be(w, R) {
    var q = this.__data__;
    return this.size += this.has(w) ? 0 : 1, q[w] = it && R === void 0 ? n : R, this;
  }
  rt.prototype.clear = S, rt.prototype.delete = z, rt.prototype.get = X, rt.prototype.has = fe, rt.prototype.set = Be;
  function $e(w) {
    var R = -1, q = w == null ? 0 : w.length;
    for (this.clear(); ++R < q; ) {
      var oe = w[R];
      this.set(oe[0], oe[1]);
    }
  }
  function Ve() {
    this.__data__ = [], this.size = 0;
  }
  function De(w) {
    var R = this.__data__, q = uo(R, w);
    if (q < 0)
      return !1;
    var oe = R.length - 1;
    return q == oe ? R.pop() : qr.call(R, q, 1), --this.size, !0;
  }
  function zt(w) {
    var R = this.__data__, q = uo(R, w);
    return q < 0 ? void 0 : R[q][1];
  }
  function dt(w) {
    return uo(this.__data__, w) > -1;
  }
  function vt(w, R) {
    var q = this.__data__, oe = uo(q, w);
    return oe < 0 ? (++this.size, q.push([w, R])) : q[oe][1] = R, this;
  }
  $e.prototype.clear = Ve, $e.prototype.delete = De, $e.prototype.get = zt, $e.prototype.has = dt, $e.prototype.set = vt;
  function kt(w) {
    var R = -1, q = w == null ? 0 : w.length;
    for (this.clear(); ++R < q; ) {
      var oe = w[R];
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
  function co(w) {
    var R = ho(this, w).delete(w);
    return this.size -= R ? 1 : 0, R;
  }
  function xr(w) {
    return ho(this, w).get(w);
  }
  function Rp(w) {
    return ho(this, w).has(w);
  }
  function Ap(w, R) {
    var q = ho(this, w), oe = q.size;
    return q.set(w, R), this.size += q.size == oe ? 0 : 1, this;
  }
  kt.prototype.clear = mn, kt.prototype.delete = co, kt.prototype.get = xr, kt.prototype.has = Rp, kt.prototype.set = Ap;
  function lo(w) {
    var R = -1, q = w == null ? 0 : w.length;
    for (this.__data__ = new kt(); ++R < q; )
      this.add(w[R]);
  }
  function jp(w) {
    return this.__data__.set(w, n), this;
  }
  function Lp(w) {
    return this.__data__.has(w);
  }
  lo.prototype.add = lo.prototype.push = jp, lo.prototype.has = Lp;
  function vn(w) {
    var R = this.__data__ = new $e(w);
    this.size = R.size;
  }
  function Mp() {
    this.__data__ = new $e(), this.size = 0;
  }
  function Dp(w) {
    var R = this.__data__, q = R.delete(w);
    return this.size = R.size, q;
  }
  function zp(w) {
    return this.__data__.get(w);
  }
  function Up(w) {
    return this.__data__.has(w);
  }
  function $p(w, R) {
    var q = this.__data__;
    if (q instanceof $e) {
      var oe = q.__data__;
      if (!st || oe.length < r - 1)
        return oe.push([w, R]), this.size = ++q.size, this;
      q = this.__data__ = new kt(oe);
    }
    return q.set(w, R), this.size = q.size, this;
  }
  vn.prototype.clear = Mp, vn.prototype.delete = Dp, vn.prototype.get = zp, vn.prototype.has = Up, vn.prototype.set = $p;
  function qp(w, R) {
    var q = fo(w), oe = !q && rg(w), ot = !q && !oe && Da(w), ke = !q && !oe && !ot && Zl(w), wt = q || oe || ot || ke, Nt = wt ? at(w.length, String) : [], Ut = Nt.length;
    for (var ht in w)
      (R || me.call(w, ht)) && !(wt && // Safari 9 has enumerable `arguments.length` in strict mode.
      (ht == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      ot && (ht == "offset" || ht == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      ke && (ht == "buffer" || ht == "byteLength" || ht == "byteOffset") || // Skip index properties.
      Jp(ht, Ut))) && Nt.push(ht);
    return Nt;
  }
  function uo(w, R) {
    for (var q = w.length; q--; )
      if (Ul(w[q][0], R))
        return q;
    return -1;
  }
  function Vp(w, R, q) {
    var oe = R(w);
    return fo(w) ? oe : Oe(oe, q(w));
  }
  function Js(w) {
    return w == null ? w === void 0 ? P : M : Dt && Dt in Object(w) ? Gp(w) : tg(w);
  }
  function Ll(w) {
    return Xs(w) && Js(w) == o;
  }
  function Ml(w, R, q, oe, ot) {
    return w === R ? !0 : w == null || R == null || !Xs(w) && !Xs(R) ? w !== w && R !== R : Zp(w, R, q, oe, Ml, ot);
  }
  function Zp(w, R, q, oe, ot, ke) {
    var wt = fo(w), Nt = fo(R), Ut = wt ? c : wn(w), ht = Nt ? c : wn(R);
    Ut = Ut == o ? v : Ut, ht = ht == o ? v : ht;
    var fr = Ut == v, Ir = ht == v, Vt = Ut == ht;
    if (Vt && Da(w)) {
      if (!Da(R))
        return !1;
      wt = !0, fr = !1;
    }
    if (Vt && !fr)
      return ke || (ke = new vn()), wt || Zl(w) ? Dl(w, R, q, oe, ot, ke) : Bp(w, R, Ut, q, oe, ot, ke);
    if (!(q & s)) {
      var _r = fr && me.call(w, "__wrapped__"), br = Ir && me.call(R, "__wrapped__");
      if (_r || br) {
        var _n = _r ? w.value() : w, en = br ? R.value() : R;
        return ke || (ke = new vn()), ot(_n, en, q, oe, ke);
      }
    }
    return Vt ? (ke || (ke = new vn()), Hp(w, R, q, oe, ot, ke)) : !1;
  }
  function Kp(w) {
    if (!Vl(w) || Qp(w))
      return !1;
    var R = $l(w) ? He : W;
    return R.test($n(w));
  }
  function Wp(w) {
    return Xs(w) && ql(w.length) && !!ne[Js(w)];
  }
  function Fp(w) {
    if (!eg(w))
      return yn(w);
    var R = [];
    for (var q in Object(w))
      me.call(w, q) && q != "constructor" && R.push(q);
    return R;
  }
  function Dl(w, R, q, oe, ot, ke) {
    var wt = q & s, Nt = w.length, Ut = R.length;
    if (Nt != Ut && !(wt && Ut > Nt))
      return !1;
    var ht = ke.get(w);
    if (ht && ke.get(R))
      return ht == R;
    var fr = -1, Ir = !0, Vt = q & i ? new lo() : void 0;
    for (ke.set(w, R), ke.set(R, w); ++fr < Nt; ) {
      var _r = w[fr], br = R[fr];
      if (oe)
        var _n = wt ? oe(br, _r, fr, R, w, ke) : oe(_r, br, fr, w, R, ke);
      if (_n !== void 0) {
        if (_n)
          continue;
        Ir = !1;
        break;
      }
      if (Vt) {
        if (!Ze(R, function(en, qn) {
          if (!qe(Vt, qn) && (_r === en || ot(_r, en, q, oe, ke)))
            return Vt.push(qn);
        })) {
          Ir = !1;
          break;
        }
      } else if (!(_r === br || ot(_r, br, q, oe, ke))) {
        Ir = !1;
        break;
      }
    }
    return ke.delete(w), ke.delete(R), Ir;
  }
  function Bp(w, R, q, oe, ot, ke, wt) {
    switch (q) {
      case G:
        if (w.byteLength != R.byteLength || w.byteOffset != R.byteOffset)
          return !1;
        w = w.buffer, R = R.buffer;
      case D:
        return !(w.byteLength != R.byteLength || !ke(new hr(w), new hr(R)));
      case u:
      case f:
      case T:
        return Ul(+w, +R);
      case p:
        return w.name == R.name && w.message == R.message;
      case x:
      case d:
        return w == R + "";
      case E:
        var Nt = Te;
      case y:
        var Ut = oe & s;
        if (Nt || (Nt = Ce), w.size != R.size && !Ut)
          return !1;
        var ht = wt.get(w);
        if (ht)
          return ht == R;
        oe |= i, wt.set(w, R);
        var fr = Dl(Nt(w), Nt(R), oe, ot, ke, wt);
        return wt.delete(w), fr;
      case g:
        if (mt)
          return mt.call(w) == mt.call(R);
    }
    return !1;
  }
  function Hp(w, R, q, oe, ot, ke) {
    var wt = q & s, Nt = zl(w), Ut = Nt.length, ht = zl(R), fr = ht.length;
    if (Ut != fr && !wt)
      return !1;
    for (var Ir = Ut; Ir--; ) {
      var Vt = Nt[Ir];
      if (!(wt ? Vt in R : me.call(R, Vt)))
        return !1;
    }
    var _r = ke.get(w);
    if (_r && ke.get(R))
      return _r == R;
    var br = !0;
    ke.set(w, R), ke.set(R, w);
    for (var _n = wt; ++Ir < Ut; ) {
      Vt = Nt[Ir];
      var en = w[Vt], qn = R[Vt];
      if (oe)
        var Kl = wt ? oe(qn, en, Vt, R, w, ke) : oe(en, qn, Vt, w, R, ke);
      if (!(Kl === void 0 ? en === qn || ot(en, qn, q, oe, ke) : Kl)) {
        br = !1;
        break;
      }
      _n || (_n = Vt == "constructor");
    }
    if (br && !_n) {
      var po = w.constructor, go = R.constructor;
      po != go && "constructor" in w && "constructor" in R && !(typeof po == "function" && po instanceof po && typeof go == "function" && go instanceof go) && (br = !1);
    }
    return ke.delete(w), ke.delete(R), br;
  }
  function zl(w) {
    return Vp(w, ig, Yp);
  }
  function ho(w, R) {
    var q = w.__data__;
    return Xp(R) ? q[typeof R == "string" ? "string" : "hash"] : q.map;
  }
  function fs(w, R) {
    var q = ze(w, R);
    return Kp(q) ? q : void 0;
  }
  function Gp(w) {
    var R = me.call(w, Dt), q = w[Dt];
    try {
      w[Dt] = void 0;
      var oe = !0;
    } catch {
    }
    var ot = Ke.call(w);
    return oe && (R ? w[Dt] = q : delete w[Dt]), ot;
  }
  var Yp = Vr ? function(w) {
    return w == null ? [] : (w = Object(w), Le(Vr(w), function(R) {
      return vr.call(w, R);
    }));
  } : og, wn = Js;
  (ct && wn(new ct(new ArrayBuffer(1))) != G || st && wn(new st()) != E || gt && wn(gt.resolve()) != O || ut && wn(new ut()) != y || yt && wn(new yt()) != N) && (wn = function(w) {
    var R = Js(w), q = R == v ? w.constructor : void 0, oe = q ? $n(q) : "";
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
  function Jp(w, R) {
    return R = R ?? a, !!R && (typeof w == "number" || de.test(w)) && w > -1 && w % 1 == 0 && w < R;
  }
  function Xp(w) {
    var R = typeof w;
    return R == "string" || R == "number" || R == "symbol" || R == "boolean" ? w !== "__proto__" : w === null;
  }
  function Qp(w) {
    return !!Ue && Ue in w;
  }
  function eg(w) {
    var R = w && w.constructor, q = typeof R == "function" && R.prototype || he;
    return w === q;
  }
  function tg(w) {
    return Ke.call(w);
  }
  function $n(w) {
    if (w != null) {
      try {
        return Me.call(w);
      } catch {
      }
      try {
        return w + "";
      } catch {
      }
    }
    return "";
  }
  function Ul(w, R) {
    return w === R || w !== w && R !== R;
  }
  var rg = Ll(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Ll : function(w) {
    return Xs(w) && me.call(w, "callee") && !vr.call(w, "callee");
  }, fo = Array.isArray;
  function ng(w) {
    return w != null && ql(w.length) && !$l(w);
  }
  var Da = wr || ag;
  function sg(w, R) {
    return Ml(w, R);
  }
  function $l(w) {
    if (!Vl(w))
      return !1;
    var R = Js(w);
    return R == m || R == _ || R == l || R == b;
  }
  function ql(w) {
    return typeof w == "number" && w > -1 && w % 1 == 0 && w <= a;
  }
  function Vl(w) {
    var R = typeof w;
    return w != null && (R == "object" || R == "function");
  }
  function Xs(w) {
    return w != null && typeof w == "object";
  }
  var Zl = je ? tt(je) : Wp;
  function ig(w) {
    return ng(w) ? qp(w) : Fp(w);
  }
  function og() {
    return [];
  }
  function ag() {
    return !1;
  }
  t.exports = sg;
})(Ko, Ko.exports);
var lb = Ko.exports;
const ub = /* @__PURE__ */ ma(lb);
function db(t, e) {
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
      }, get: function(u) {
        return o[u.toLowerCase()];
      }, has: function(u) {
        return u.toLowerCase() in o;
      } } };
    };
    for (var l in s.open(e.method || "get", t, !0), s.onload = function() {
      s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(u, f, p) {
        i.push(f = f.toLowerCase()), a.push([f, p]), o[f] = o[f] ? o[f] + "," + p : p;
      }), r(c());
    }, s.onerror = n, s.withCredentials = e.credentials == "include", e.headers)
      s.setRequestHeader(l, e.headers[l]);
    s.send(e.body || null);
  });
}
const hb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: db
}, Symbol.toStringTag, { value: "Module" })), fd = /* @__PURE__ */ va(hb);
var fb = fetch || (self.fetch = fd.default || fd);
const pb = /* @__PURE__ */ ma(fb);
function gb(t, e) {
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
  var o = t.length, c = t.charAt(0), l = Math.log(o) / Math.log(256), u = Math.log(256) / Math.log(o);
  function f(_) {
    if (_ instanceof Uint8Array || (ArrayBuffer.isView(_) ? _ = new Uint8Array(_.buffer, _.byteOffset, _.byteLength) : Array.isArray(_) && (_ = Uint8Array.from(_))), !(_ instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (_.length === 0)
      return "";
    for (var E = 0, T = 0, M = 0, v = _.length; M !== v && _[M] === 0; )
      M++, E++;
    for (var O = (v - M) * u + 1 >>> 0, b = new Uint8Array(O); M !== v; ) {
      for (var x = _[M], y = 0, d = O - 1; (x !== 0 || y < T) && d !== -1; d--, y++)
        x += 256 * b[d] >>> 0, b[d] = x % o >>> 0, x = x / o >>> 0;
      if (x !== 0)
        throw new Error("Non-zero carry");
      T = y, M++;
    }
    for (var g = O - T; g !== O && b[g] === 0; )
      g++;
    for (var P = c.repeat(E); g < O; ++g)
      P += t.charAt(b[g]);
    return P;
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
      for (var v = (_.length - E) * l + 1 >>> 0, O = new Uint8Array(v); _[E]; ) {
        var b = r[_.charCodeAt(E)];
        if (b === 255)
          return;
        for (var x = 0, y = v - 1; (b !== 0 || x < M) && y !== -1; y--, x++)
          b += o * O[y] >>> 0, O[y] = b % 256 >>> 0, b = b / 256 >>> 0;
        if (b !== 0)
          throw new Error("Non-zero carry");
        M = x, E++;
      }
      if (_[E] !== " ") {
        for (var d = v - M; d !== v && O[d] === 0; )
          d++;
        for (var g = new Uint8Array(T + (v - d)), P = T; d !== v; )
          g[P++] = O[d++];
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
var yb = gb, mb = yb;
const yf = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, vb = (t) => new TextEncoder().encode(t), wb = (t) => new TextDecoder().decode(t);
class _b {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class bb {
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
    return mf(this, e);
  }
}
class Eb {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return mf(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const mf = (t, e) => new Eb({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
class Sb {
  constructor(e, r, n, s) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = s, this.encoder = new _b(e, r, n), this.decoder = new bb(e, r, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Ca = ({ name: t, prefix: e, encode: r, decode: n }) => new Sb(t, e, r, n), io = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: s } = mb(r, e);
  return Ca({ prefix: t, name: e, encode: n, decode: (i) => yf(s(i)) });
}, xb = (t, e, r, n) => {
  const s = {};
  for (let u = 0; u < e.length; ++u)
    s[e[u]] = u;
  let i = t.length;
  for (; t[i - 1] === "="; )
    --i;
  const a = new Uint8Array(i * r / 8 | 0);
  let o = 0, c = 0, l = 0;
  for (let u = 0; u < i; ++u) {
    const f = s[t[u]];
    if (f === void 0)
      throw new SyntaxError(`Non-${n} character`);
    c = c << r | f, o += r, o >= 8 && (o -= 8, a[l++] = 255 & c >> o);
  }
  if (o >= r || 255 & c << 8 - o)
    throw new SyntaxError("Unexpected end of data");
  return a;
}, Ib = (t, e, r) => {
  const n = e[e.length - 1] === "=", s = (1 << r) - 1;
  let i = "", a = 0, o = 0;
  for (let c = 0; c < t.length; ++c)
    for (o = o << 8 | t[c], a += 8; a > r; )
      a -= r, i += e[s & o >> a];
  if (a && (i += e[s & o << r - a]), n)
    for (; i.length * r & 7; )
      i += "=";
  return i;
}, qt = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => Ca({ prefix: e, name: t, encode(s) {
  return Ib(s, n, r);
}, decode(s) {
  return xb(s, n, r, t);
} }), Ob = Ca({ prefix: "\0", name: "identity", encode: (t) => wb(t), decode: (t) => vb(t) });
var Tb = Object.freeze({ __proto__: null, identity: Ob });
const Cb = qt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var kb = Object.freeze({ __proto__: null, base2: Cb });
const Pb = qt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Nb = Object.freeze({ __proto__: null, base8: Pb });
const Rb = io({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Ab = Object.freeze({ __proto__: null, base10: Rb });
const jb = qt({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), Lb = qt({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Mb = Object.freeze({ __proto__: null, base16: jb, base16upper: Lb });
const Db = qt({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), zb = qt({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), Ub = qt({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), $b = qt({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), qb = qt({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), Vb = qt({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), Zb = qt({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Kb = qt({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), Wb = qt({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Fb = Object.freeze({ __proto__: null, base32: Db, base32upper: zb, base32pad: Ub, base32padupper: $b, base32hex: qb, base32hexupper: Vb, base32hexpad: Zb, base32hexpadupper: Kb, base32z: Wb });
const Bb = io({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), Hb = io({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Gb = Object.freeze({ __proto__: null, base36: Bb, base36upper: Hb });
const Yb = io({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), Jb = io({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Xb = Object.freeze({ __proto__: null, base58btc: Yb, base58flickr: Jb });
const Qb = qt({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), e1 = qt({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), t1 = qt({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), r1 = qt({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var n1 = Object.freeze({ __proto__: null, base64: Qb, base64pad: e1, base64url: t1, base64urlpad: r1 });
const vf = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), s1 = vf.reduce((t, e, r) => (t[r] = e, t), []), i1 = vf.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function o1(t) {
  return t.reduce((e, r) => (e += s1[r], e), "");
}
function a1(t) {
  const e = [];
  for (const r of t) {
    const n = i1[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const c1 = Ca({ prefix: "🚀", name: "base256emoji", encode: o1, decode: a1 });
var l1 = Object.freeze({ __proto__: null, base256emoji: c1 }), u1 = wf, pd = 128, d1 = 127, h1 = ~d1, f1 = Math.pow(2, 31);
function wf(t, e, r) {
  e = e || [], r = r || 0;
  for (var n = r; t >= f1; )
    e[r++] = t & 255 | pd, t /= 128;
  for (; t & h1; )
    e[r++] = t & 255 | pd, t >>>= 7;
  return e[r] = t | 0, wf.bytes = r - n + 1, e;
}
var p1 = Sc, g1 = 128, gd = 127;
function Sc(t, n) {
  var r = 0, n = n || 0, s = 0, i = n, a, o = t.length;
  do {
    if (i >= o)
      throw Sc.bytes = 0, new RangeError("Could not decode varint");
    a = t[i++], r += s < 28 ? (a & gd) << s : (a & gd) * Math.pow(2, s), s += 7;
  } while (a >= g1);
  return Sc.bytes = i - n, r;
}
var y1 = Math.pow(2, 7), m1 = Math.pow(2, 14), v1 = Math.pow(2, 21), w1 = Math.pow(2, 28), _1 = Math.pow(2, 35), b1 = Math.pow(2, 42), E1 = Math.pow(2, 49), S1 = Math.pow(2, 56), x1 = Math.pow(2, 63), I1 = function(t) {
  return t < y1 ? 1 : t < m1 ? 2 : t < v1 ? 3 : t < w1 ? 4 : t < _1 ? 5 : t < b1 ? 6 : t < E1 ? 7 : t < S1 ? 8 : t < x1 ? 9 : 10;
}, O1 = { encode: u1, decode: p1, encodingLength: I1 }, _f = O1;
const yd = (t, e, r = 0) => (_f.encode(t, e, r), e), md = (t) => _f.encodingLength(t), xc = (t, e) => {
  const r = e.byteLength, n = md(t), s = n + md(r), i = new Uint8Array(s + r);
  return yd(t, i, 0), yd(r, i, n), i.set(e, s), new T1(t, r, e, i);
};
class T1 {
  constructor(e, r, n, s) {
    this.code = e, this.size = r, this.digest = n, this.bytes = s;
  }
}
const bf = ({ name: t, code: e, encode: r }) => new C1(t, e, r);
class C1 {
  constructor(e, r, n) {
    this.name = e, this.code = r, this.encode = n;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const r = this.encode(e);
      return r instanceof Uint8Array ? xc(this.code, r) : r.then((n) => xc(this.code, n));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const Ef = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), k1 = bf({ name: "sha2-256", code: 18, encode: Ef("SHA-256") }), P1 = bf({ name: "sha2-512", code: 19, encode: Ef("SHA-512") });
var N1 = Object.freeze({ __proto__: null, sha256: k1, sha512: P1 });
const Sf = 0, R1 = "identity", xf = yf, A1 = (t) => xc(Sf, xf(t)), j1 = { code: Sf, name: R1, encode: xf, digest: A1 };
var L1 = Object.freeze({ __proto__: null, identity: j1 });
new TextEncoder(), new TextDecoder();
const vd = { ...Tb, ...kb, ...Nb, ...Ab, ...Mb, ...Fb, ...Gb, ...Xb, ...n1, ...l1 };
({ ...N1, ...L1 });
function If(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function M1(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? If(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Of(t, e, r, n) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: r }, decoder: { decode: n } };
}
const wd = Of("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), Ba = Of("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = M1(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), D1 = { utf8: wd, "utf-8": wd, hex: vd.base16, latin1: Ba, ascii: Ba, binary: Ba, ...vd };
function z1(t, e = "utf8") {
  const r = D1[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? If(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
const Tf = "wc", U1 = 2, Tl = "core", Pn = `${Tf}@2:${Tl}:`, $1 = { name: Tl, logger: "error" }, q1 = { database: ":memory:" }, V1 = "crypto", _d = "client_ed25519_seed", Z1 = ae.ONE_DAY, K1 = "keychain", W1 = "0.3", F1 = "messages", B1 = "0.3", H1 = ae.SIX_HOURS, G1 = "publisher", Cf = "irn", Y1 = "error", kf = "wss://relay.walletconnect.com", bd = "wss://relay.walletconnect.org", J1 = "relayer", Ht = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, X1 = "_subscription", nn = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, Q1 = ae.ONE_SECOND, eE = "2.11.2", tE = 1e4, rE = "0.3", nE = "WALLETCONNECT_CLIENT_ID", Or = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, sE = "subscription", iE = "0.3", oE = ae.FIVE_SECONDS * 1e3, aE = "pairing", cE = "0.3", si = { wc_pairingDelete: { req: { ttl: ae.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: ae.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: ae.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: ae.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: ae.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: ae.ONE_DAY, prompt: !1, tag: 0 } } }, ci = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, Fr = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, lE = "history", uE = "0.3", dE = "expirer", Er = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, hE = "0.3", Ha = "verify-api", xs = "https://verify.walletconnect.com", Ic = "https://verify.walletconnect.org", fE = [xs, Ic], pE = "echo", gE = "https://echo.walletconnect.com";
class yE {
  constructor(e, r) {
    this.core = e, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = K1, this.version = W1, this.initialized = !1, this.storagePrefix = Pn, this.init = async () => {
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
    }, this.core = e, this.logger = We.generateChildLogger(r, this.name);
  }
  get context() {
    return We.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, sf(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? of(e) : void 0;
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
class mE {
  constructor(e, r, n) {
    this.core = e, this.logger = r, this.name = V1, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (s) => (this.isInitialized(), this.keychain.has(s)), this.getClientId = async () => {
      this.isInitialized();
      const s = await this.getClientSeed(), i = zu(s);
      return Wh(i.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const s = x_();
      return this.setPrivateKey(s.publicKey, s.privateKey);
    }, this.signJWT = async (s) => {
      this.isInitialized();
      const i = await this.getClientSeed(), a = zu(i), o = bc();
      return await Rw(o, s, Z1, a);
    }, this.generateSharedKey = (s, i, a) => {
      this.isInitialized();
      const o = this.getPrivateKey(s), c = I_(o, i);
      return this.setSymKey(c, a);
    }, this.setSymKey = async (s, i) => {
      this.isInitialized();
      const a = i || O_(s);
      return await this.keychain.set(a, s), a;
    }, this.deleteKeyPair = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.deleteSymKey = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.encode = async (s, i, a) => {
      this.isInitialized();
      const o = nf(a), c = Qi(i);
      if (Gu(o)) {
        const p = o.senderPublicKey, m = o.receiverPublicKey;
        s = await this.generateSharedKey(p, m);
      }
      const l = this.getSymKey(s), { type: u, senderPublicKey: f } = o;
      return C_({ type: u, symKey: l, message: c, senderPublicKey: f });
    }, this.decode = async (s, i, a) => {
      this.isInitialized();
      const o = N_(i, a);
      if (Gu(o)) {
        const c = o.receiverPublicKey, l = o.senderPublicKey;
        s = await this.generateSharedKey(c, l);
      }
      try {
        const c = this.getSymKey(s), l = k_({ symKey: c, encoded: i });
        return _a(l);
      } catch (c) {
        this.logger.error(`Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`), this.logger.error(c);
      }
    }, this.getPayloadType = (s) => {
      const i = qo(s);
      return ro(i.type);
    }, this.getPayloadSenderPublicKey = (s) => {
      const i = qo(s);
      return i.senderPublicKey ? sr(i.senderPublicKey, nr) : void 0;
    }, this.core = e, this.logger = We.generateChildLogger(r, this.name), this.keychain = n || new yE(this.core, this.logger);
  }
  get context() {
    return We.getLoggerContext(this.logger);
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
      e = this.keychain.get(_d);
    } catch {
      e = bc(), await this.keychain.set(_d, e);
    }
    return z1(e, "base16");
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
class vE extends Mm {
  constructor(e, r) {
    super(e, r), this.logger = e, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = F1, this.version = B1, this.initialized = !1, this.storagePrefix = Pn, this.init = async () => {
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
      const i = Ts(s);
      let a = this.messages.get(n);
      return typeof a > "u" && (a = {}), typeof a[i] < "u" || (a[i] = s, this.messages.set(n, a), await this.persist()), i;
    }, this.get = (n) => {
      this.isInitialized();
      let s = this.messages.get(n);
      return typeof s > "u" && (s = {}), s;
    }, this.has = (n, s) => {
      this.isInitialized();
      const i = this.get(n), a = Ts(s);
      return typeof i[a] < "u";
    }, this.del = async (n) => {
      this.isInitialized(), this.messages.delete(n), await this.persist();
    }, this.logger = We.generateChildLogger(e, this.name), this.core = r;
  }
  get context() {
    return We.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, sf(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? of(e) : void 0;
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
class wE extends Dm {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.events = new zr.EventEmitter(), this.name = G1, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = ae.toMiliseconds(ae.TEN_SECONDS * 2), this.needsTransportRestart = !1, this.publish = async (n, s, i) => {
      var a;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: s, opts: i } });
      try {
        const o = (i == null ? void 0 : i.ttl) || H1, c = Ec(i), l = (i == null ? void 0 : i.prompt) || !1, u = (i == null ? void 0 : i.tag) || 0, f = (i == null ? void 0 : i.id) || pf().toString(), p = { topic: n, message: s, opts: { ttl: o, relay: c, prompt: l, tag: u, id: f } }, m = setTimeout(() => this.queue.set(f, p), this.publishTimeout);
        try {
          await await mi(this.rpcPublish(n, s, o, c, l, u, f), this.publishTimeout, `Failed to publish payload, please try again. id:${f} tag:${u}`), this.removeRequestFromQueue(f), this.relayer.events.emit(Ht.publish, p);
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
    }, this.relayer = e, this.logger = We.generateChildLogger(r, this.name), this.registerEventListeners();
  }
  get context() {
    return We.getLoggerContext(this.logger);
  }
  rpcPublish(e, r, n, s, i, a, o) {
    var c, l, u, f;
    const p = { method: Ro(s.protocol).publish, params: { topic: e, message: r, ttl: n, prompt: i, tag: a }, id: o };
    return tr((c = p.params) == null ? void 0 : c.prompt) && ((l = p.params) == null || delete l.prompt), tr((u = p.params) == null ? void 0 : u.tag) && ((f = p.params) == null || delete f.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: p }), this.relayer.request(p);
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
    this.relayer.core.heartbeat.on(Ks.HEARTBEAT_EVENTS.pulse, () => {
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
class _E {
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
var bE = Object.defineProperty, EE = Object.defineProperties, SE = Object.getOwnPropertyDescriptors, Ed = Object.getOwnPropertySymbols, xE = Object.prototype.hasOwnProperty, IE = Object.prototype.propertyIsEnumerable, Sd = (t, e, r) => e in t ? bE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ii = (t, e) => {
  for (var r in e || (e = {}))
    xE.call(e, r) && Sd(t, r, e[r]);
  if (Ed)
    for (var r of Ed(e))
      IE.call(e, r) && Sd(t, r, e[r]);
  return t;
}, Ga = (t, e) => EE(t, SE(e));
class OE extends $m {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new _E(), this.events = new zr.EventEmitter(), this.name = sE, this.version = iE, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Pn, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (n, s) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: s } });
      try {
        const i = Ec(s), a = { topic: n, relay: i };
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
          !this.pending.has(n) && this.topics.includes(n) && (clearInterval(c), o.stop(s), i(!0)), o.elapsed(s) >= oE && (clearInterval(c), o.stop(s), a(new Error("Subscription resolution timeout")));
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
    }, this.relayer = e, this.logger = We.generateChildLogger(r, this.name), this.clientId = "";
  }
  get context() {
    return We.getLoggerContext(this.logger);
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
      const s = Ec(n);
      await this.rpcUnsubscribe(e, r, s);
      const i = _t("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, r, i), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: n } });
    } catch (s) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s), s;
    }
  }
  async rpcSubscribe(e, r) {
    const n = { method: Ro(r.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      await await mi(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(Ht.connection_stalled);
    }
    return Ts(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const r = e[0].relay, n = { method: Ro(r.protocol).batchSubscribe, params: { topics: e.map((s) => s.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      return await await mi(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(Ht.connection_stalled);
    }
  }
  rpcUnsubscribe(e, r, n) {
    const s = { method: Ro(n.protocol).unsubscribe, params: { topic: e, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s }), this.relayer.request(s);
  }
  onSubscribe(e, r) {
    this.setSubscription(e, Ga(ii({}, r), { id: e })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((r) => {
      this.setSubscription(r.id, ii({}, r)), this.pending.delete(r.topic);
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
    this.subscriptions.set(e, ii({}, r)), this.topicMap.set(r.topic, e), this.events.emit(Or.created, r);
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
    this.subscriptions.delete(e), this.topicMap.delete(n.topic, e), this.events.emit(Or.deleted, Ga(ii({}, n), { reason: r }));
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
    so(r) && this.onBatchSubscribe(r.map((n, s) => Ga(ii({}, e[s]), { id: n })));
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
    this.relayer.core.heartbeat.on(Ks.HEARTBEAT_EVENTS.pulse, async () => {
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
var TE = Object.defineProperty, xd = Object.getOwnPropertySymbols, CE = Object.prototype.hasOwnProperty, kE = Object.prototype.propertyIsEnumerable, Id = (t, e, r) => e in t ? TE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, PE = (t, e) => {
  for (var r in e || (e = {}))
    CE.call(e, r) && Id(t, r, e[r]);
  if (xd)
    for (var r of xd(e))
      kE.call(e, r) && Id(t, r, e[r]);
  return t;
};
class NE extends zm {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new zr.EventEmitter(), this.name = J1, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.requestsInFlight = /* @__PURE__ */ new Map(), this.request = async (r) => {
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
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? We.generateChildLogger(e.logger, this.name) : We.pino(We.getDefaultLoggerOptions({ level: e.logger || Y1 })), this.messages = new vE(this.logger, e.core), this.subscriber = new OE(this, this.logger), this.publisher = new wE(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || kf, this.projectId = e.projectId, this.bundleId = D_(), this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${bd}...`), await this.restartTransport(bd);
    }
    this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, tE);
  }
  get context() {
    return We.getLoggerContext(this.logger);
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
    })), this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await mi(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
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
            await mi(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
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
    if (!await od())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((r) => e.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new sb(new cb(Z_({ sdkVersion: eE, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0, bundleId: this.bundleId }))), this.registerProviderListeners();
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
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), Ol(e)) {
      if (!e.method.endsWith(X1))
        return;
      const r = e.params, { topic: n, message: s, publishedAt: i } = r.data, a = { topic: n, message: s, publishedAt: i };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(PE({ type: "event", event: r.id }, a)), this.events.emit(r.id, a), await this.acknowledgePayload(e), await this.onMessageEvent(a);
    } else
      Ta(e) && this.events.emit(Ht.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(Ht.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const r = xl(e.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(nn.payload, this.onPayloadHandler), this.provider.off(nn.connect, this.onConnectHandler), this.provider.off(nn.disconnect, this.onDisconnectHandler), this.provider.off(nn.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(Ht.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let e = await od();
    D0(async (r) => {
      this.initialized && e !== r && (e = r, r ? await this.restartTransport().catch((n) => this.logger.error(n)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((n) => this.logger.error(n))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(Ht.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((e) => this.logger.error(e));
    }, ae.toMiliseconds(Q1)));
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
var RE = Object.defineProperty, Od = Object.getOwnPropertySymbols, AE = Object.prototype.hasOwnProperty, jE = Object.prototype.propertyIsEnumerable, Td = (t, e, r) => e in t ? RE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Cd = (t, e) => {
  for (var r in e || (e = {}))
    AE.call(e, r) && Td(t, r, e[r]);
  if (Od)
    for (var r of Od(e))
      jE.call(e, r) && Td(t, r, e[r]);
  return t;
};
class ka extends Um {
  constructor(e, r, n, s = Pn, i = void 0) {
    super(e, r, n, s), this.core = e, this.logger = r, this.name = n, this.map = /* @__PURE__ */ new Map(), this.version = rE, this.cached = [], this.initialized = !1, this.storagePrefix = Pn, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((a) => {
        this.getKey && a !== null && !tr(a) ? this.map.set(this.getKey(a), a) : p0(a) ? this.map.set(a.id, a) : g0(a) && this.map.set(a.topic, a);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (a, o) => {
      this.isInitialized(), this.map.has(a) ? await this.update(a, o) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: a, value: o }), this.map.set(a, o), await this.persist());
    }, this.get = (a) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: a }), this.getData(a)), this.getAll = (a) => (this.isInitialized(), a ? this.values.filter((o) => Object.keys(a).every((c) => ub(o[c], a[c]))) : this.values), this.update = async (a, o) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: a, update: o });
      const c = Cd(Cd({}, this.getData(a)), o);
      this.map.set(a, c), await this.persist();
    }, this.delete = async (a, o) => {
      this.isInitialized(), this.map.has(a) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: a, reason: o }), this.map.delete(a), await this.persist());
    }, this.logger = We.generateChildLogger(r, this.name), this.storagePrefix = s, this.getKey = i;
  }
  get context() {
    return We.getLoggerContext(this.logger);
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
class LE {
  constructor(e, r) {
    this.core = e, this.logger = r, this.name = aE, this.version = cE, this.events = new ll(), this.initialized = !1, this.storagePrefix = Pn, this.ignoredPayloadTypes = [ds], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: n }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...n])];
    }, this.create = async () => {
      this.isInitialized();
      const n = bc(), s = await this.core.crypto.setSymKey(n), i = gr(ae.FIVE_MINUTES), a = { protocol: Cf }, o = { topic: s, expiry: i, relay: a, active: !1 }, c = i0({ protocol: this.core.protocol, version: this.core.version, topic: s, symKey: n, relay: a, expiryTimestamp: i });
      return await this.pairings.set(s, o), await this.core.relayer.subscribe(s), this.core.expirer.set(s, i), { topic: s, uri: c };
    }, this.pair = async (n) => {
      this.isInitialized(), this.isValidPair(n);
      const { topic: s, symKey: i, relay: a, expiryTimestamp: o } = td(n.uri);
      let c;
      if (this.pairings.keys.includes(s) && (c = this.pairings.get(s), c.active))
        throw new Error(`Pairing already exists: ${s}. Please try again with a new connection URI.`);
      const l = o || gr(ae.FIVE_MINUTES), u = { topic: s, relay: a, expiry: l, active: !1 };
      return await this.pairings.set(s, u), this.core.expirer.set(s, l), n.activatePairing && await this.activate({ topic: s }), this.events.emit(ci.create, u), this.core.crypto.keychain.has(s) || (await this.core.crypto.setSymKey(i, s), await this.core.relayer.subscribe(s, { relay: a })), u;
    }, this.activate = async ({ topic: n }) => {
      this.isInitialized();
      const s = gr(ae.THIRTY_DAYS);
      await this.pairings.update(n, { active: !0, expiry: s }), this.core.expirer.set(n, s);
    }, this.ping = async (n) => {
      this.isInitialized(), await this.isValidPing(n);
      const { topic: s } = n;
      if (this.pairings.keys.includes(s)) {
        const i = await this.sendRequest(s, "wc_pairingPing", {}), { done: a, resolve: o, reject: c } = _s();
        this.events.once(It("pairing_ping", i), ({ error: l }) => {
          l ? c(l) : o();
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
      const a = Cs(s, i), o = await this.core.crypto.encode(n, a), c = si[s].req;
      return this.core.history.set(n, a), this.core.relayer.publish(n, o, c), a.id;
    }, this.sendResult = async (n, s, i) => {
      const a = xl(n, i), o = await this.core.crypto.encode(s, a), c = await this.core.history.get(s, n), l = si[c.request.method].res;
      await this.core.relayer.publish(s, o, l), await this.core.history.resolve(a);
    }, this.sendError = async (n, s, i) => {
      const a = Il(n, i), o = await this.core.crypto.encode(s, a), c = await this.core.history.get(s, n), l = si[c.request.method] ? si[c.request.method].res : si.unregistered_method.res;
      await this.core.relayer.publish(s, o, l), await this.core.history.resolve(a);
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
        this.isValidPing({ topic: n }), await this.sendResult(i, n, !0), this.events.emit(ci.ping, { id: i, topic: n });
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
        this.isValidDisconnect({ topic: n }), await this.deletePairing(n), this.events.emit(ci.delete, { id: i, topic: n });
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
      if (!lr(n)) {
        const { message: a } = J("MISSING_OR_INVALID", `pair() params: ${n}`);
        throw new Error(a);
      }
      if (!f0(n.uri)) {
        const { message: a } = J("MISSING_OR_INVALID", `pair() uri: ${n.uri}`);
        throw new Error(a);
      }
      const i = td(n.uri);
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
      if (!lr(n)) {
        const { message: i } = J("MISSING_OR_INVALID", `ping() params: ${n}`);
        throw new Error(i);
      }
      const { topic: s } = n;
      await this.isValidPairingTopic(s);
    }, this.isValidDisconnect = async (n) => {
      if (!lr(n)) {
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
    }, this.core = e, this.logger = We.generateChildLogger(r, this.name), this.pairings = new ka(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return We.getLoggerContext(this.logger);
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
        Ol(s) ? (this.core.history.set(r, s), this.onRelayEventRequest({ topic: r, payload: s })) : Ta(s) && (await this.core.history.resolve(s), await this.onRelayEventResponse({ topic: r, payload: s }), this.core.history.delete(r, s.id));
      } catch (i) {
        this.logger.error(i);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(Er.expired, async (e) => {
      const { topic: r } = cf(e.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit(ci.expire, { topic: r }));
    });
  }
}
class ME extends Lm {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new zr.EventEmitter(), this.name = lE, this.version = uE, this.cached = [], this.initialized = !1, this.storagePrefix = Pn, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.records.set(n.id, n)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (n, s, i) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: n, request: s, chainId: i }), this.records.has(s.id))
        return;
      const a = { id: s.id, topic: n, request: { method: s.method, params: s.params || null }, chainId: i, expiry: gr(ae.THIRTY_DAYS) };
      this.records.set(a.id, a), this.events.emit(Fr.created, a);
    }, this.resolve = async (n) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: n }), !this.records.has(n.id))
        return;
      const s = await this.getRecord(n.id);
      typeof s.response > "u" && (s.response = Tr(n) ? { error: n.error } : { result: n.result }, this.records.set(s.id, s), this.events.emit(Fr.updated, s));
    }, this.get = async (n, s) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: n, id: s }), await this.getRecord(s)), this.delete = (n, s) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: s }), this.values.forEach((i) => {
        if (i.topic === n) {
          if (typeof s < "u" && i.id !== s)
            return;
          this.records.delete(i.id), this.events.emit(Fr.deleted, i);
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
    }, this.logger = We.generateChildLogger(r, this.name);
  }
  get context() {
    return We.getLoggerContext(this.logger);
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
      const n = { topic: r.topic, request: Cs(r.request.method, r.request.params, r.id), chainId: r.chainId };
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
    await this.setJsonRpcRecords(this.values), this.events.emit(Fr.sync);
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
    this.events.on(Fr.created, (e) => {
      const r = Fr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(Fr.updated, (e) => {
      const r = Fr.updated;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(Fr.deleted, (e) => {
      const r = Fr.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.core.heartbeat.on(Ks.HEARTBEAT_EVENTS.pulse, () => {
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
class DE extends qm {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new zr.EventEmitter(), this.name = dE, this.version = hE, this.cached = [], this.initialized = !1, this.storagePrefix = Pn, this.init = async () => {
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
    }, this.logger = We.generateChildLogger(r, this.name);
  }
  get context() {
    return We.getLoggerContext(this.logger);
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
      return K_(e);
    if (typeof e == "number")
      return W_(e);
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
    this.core.heartbeat.on(Ks.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(Er.created, (e) => {
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
class zE extends Vm {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.name = Ha, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (n) => {
      if (this.verifyDisabled || Bs() || !Hs())
        return;
      const s = this.getVerifyUrl(n == null ? void 0 : n.verifyUrl);
      this.verifyUrl !== s && this.removeIframe(), this.verifyUrl = s;
      try {
        await this.createIframe();
      } catch (i) {
        this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(i);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = Ic;
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
        this.logger.info(`failed to resolve attestation: ${n.attestationId} from url: ${s}`), this.logger.info(a), i = await this.fetchAttestation(n.attestationId, Ic);
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
        if (document.getElementById(Ha))
          return i();
        window.addEventListener("message", s);
        const a = document.createElement("iframe");
        a.id = Ha, a.src = `${this.verifyUrl}/${this.projectId}`, a.style.display = "none", document.body.append(a), this.iframe = a, n = i;
      }), new Promise((i, a) => setTimeout(() => {
        window.removeEventListener("message", s), a("verify iframe load timeout");
      }, ae.toMiliseconds(ae.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
    }, this.getVerifyUrl = (n) => {
      let s = n || xs;
      return fE.includes(s) || (this.logger.info(`verify url: ${s}, not included in trusted list, assigning default: ${xs}`), s = xs), s;
    }, this.logger = We.generateChildLogger(r, this.name), this.verifyUrl = xs, this.abortController = new AbortController(), this.isDevEnv = _l() && process.env.IS_VITEST;
  }
  get context() {
    return We.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), ae.toMiliseconds(e));
  }
}
class UE extends Zm {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.context = pE, this.registerDeviceToken = async (n) => {
      const { clientId: s, token: i, notificationType: a, enableEncrypted: o = !1 } = n, c = `${gE}/${this.projectId}/clients`;
      await pb(c, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: s, type: a, token: i, always_raw: o }) });
    }, this.logger = We.generateChildLogger(r, this.context);
  }
}
var $E = Object.defineProperty, kd = Object.getOwnPropertySymbols, qE = Object.prototype.hasOwnProperty, VE = Object.prototype.propertyIsEnumerable, Pd = (t, e, r) => e in t ? $E(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Nd = (t, e) => {
  for (var r in e || (e = {}))
    qE.call(e, r) && Pd(t, r, e[r]);
  if (kd)
    for (var r of kd(e))
      VE.call(e, r) && Pd(t, r, e[r]);
  return t;
};
class Cl extends jm {
  constructor(e) {
    super(e), this.protocol = Tf, this.version = U1, this.name = Tl, this.events = new zr.EventEmitter(), this.initialized = !1, this.on = (n, s) => this.events.on(n, s), this.once = (n, s) => this.events.once(n, s), this.off = (n, s) => this.events.off(n, s), this.removeListener = (n, s) => this.events.removeListener(n, s), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || kf, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : We.pino(We.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || $1.logger }));
    this.logger = We.generateChildLogger(r, this.name), this.heartbeat = new Ks.HeartBeat(), this.crypto = new mE(this, this.logger, e == null ? void 0 : e.keychain), this.history = new ME(this, this.logger), this.expirer = new DE(this, this.logger), this.storage = e != null && e.storage ? e.storage : new Jy(Nd(Nd({}, q1), e == null ? void 0 : e.storageOptions)), this.relayer = new NE({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new LE(this, this.logger), this.verify = new zE(this.projectId || "", this.logger), this.echoClient = new UE(this.projectId || "", this.logger);
  }
  static async init(e) {
    const r = new Cl(e);
    await r.initialize();
    const n = await r.crypto.getClientId();
    return await r.storage.setItem(nE, n), r;
  }
  get context() {
    return We.getLoggerContext(this.logger);
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
const ZE = Cl, Pf = "wc", Nf = 2, Rf = "client", kl = `${Pf}@${Nf}:${Rf}:`, Ya = { name: Rf, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, Rd = "WALLETCONNECT_DEEPLINK_CHOICE", KE = "proposal", WE = "Proposal expired", FE = "session", Eo = ae.SEVEN_DAYS, BE = "engine", sn = { wc_sessionPropose: { req: { ttl: ae.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: ae.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: ae.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: ae.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: ae.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: ae.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: ae.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: ae.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: ae.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: ae.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: ae.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: ae.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: ae.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: ae.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: ae.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: ae.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, Ja = { min: ae.FIVE_MINUTES, max: ae.SEVEN_DAYS }, on = { idle: "IDLE", active: "ACTIVE" }, HE = "request", GE = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var YE = Object.defineProperty, JE = Object.defineProperties, XE = Object.getOwnPropertyDescriptors, Ad = Object.getOwnPropertySymbols, QE = Object.prototype.hasOwnProperty, eS = Object.prototype.propertyIsEnumerable, jd = (t, e, r) => e in t ? YE(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Qt = (t, e) => {
  for (var r in e || (e = {}))
    QE.call(e, r) && jd(t, r, e[r]);
  if (Ad)
    for (var r of Ad(e))
      eS.call(e, r) && jd(t, r, e[r]);
  return t;
}, vs = (t, e) => JE(t, XE(e));
class tS extends Wm {
  constructor(e) {
    super(e), this.name = BE, this.events = new ll(), this.initialized = !1, this.ignoredPayloadTypes = [ds], this.requestQueue = { state: on.idle, queue: [] }, this.sessionRequestQueue = { state: on.idle, queue: [] }, this.requestQueueDelay = ae.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({ methods: Object.keys(sn) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, ae.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      await this.isInitialized();
      const n = vs(Qt({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(n);
      const { pairingTopic: s, requiredNamespaces: i, optionalNamespaces: a, sessionProperties: o, relays: c } = n;
      let l = s, u, f = !1;
      if (l && (f = this.client.core.pairing.pairings.get(l).active), !l || !f) {
        const { topic: b, uri: x } = await this.client.core.pairing.create();
        l = b, u = x;
      }
      const p = await this.client.core.crypto.generateKeyPair(), m = sn.wc_sessionPropose.req.ttl || ae.FIVE_MINUTES, _ = gr(m), E = Qt({ requiredNamespaces: i, optionalNamespaces: a, relays: c ?? [{ protocol: Cf }], proposer: { publicKey: p, metadata: this.client.metadata }, expiryTimestamp: _ }, o && { sessionProperties: o }), { reject: T, resolve: M, done: v } = _s(m, WE);
      if (this.events.once(It("session_connect"), async ({ error: b, session: x }) => {
        if (b)
          T(b);
        else if (x) {
          x.self.publicKey = p;
          const y = vs(Qt({}, x), { requiredNamespaces: E.requiredNamespaces, optionalNamespaces: E.optionalNamespaces });
          await this.client.session.set(x.topic, y), await this.setExpiry(x.topic, x.expiry), l && await this.client.core.pairing.updateMetadata({ topic: l, metadata: x.peer.metadata }), M(y);
        }
      }), !l) {
        const { message: b } = J("NO_MATCHING_KEY", `connect() pairing topic: ${l}`);
        throw new Error(b);
      }
      const O = await this.sendRequest({ topic: l, method: "wc_sessionPropose", params: E, throwOnFailedPublish: !0 });
      return await this.setProposal(O, Qt({ id: O }, E)), { uri: u, approval: v };
    }, this.pair = async (r) => (await this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      await this.isInitialized(), await this.isValidApprove(r);
      const { id: n, relayProtocol: s, namespaces: i, sessionProperties: a } = r, o = this.client.proposal.get(n);
      let { pairingTopic: c, proposer: l, requiredNamespaces: u, optionalNamespaces: f } = o;
      c = c || "";
      const p = await this.client.core.crypto.generateKeyPair(), m = l.publicKey, _ = await this.client.core.crypto.generateSharedKey(p, m);
      c && n && (await this.client.core.pairing.updateMetadata({ topic: c, metadata: l.metadata }), await this.sendResult({ id: n, topic: c, result: { relay: { protocol: s ?? "irn" }, responderPublicKey: p } }), await this.client.proposal.delete(n, _t("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: c }));
      const E = Qt({ relay: { protocol: s ?? "irn" }, namespaces: i, pairingTopic: c, controller: { publicKey: p, metadata: this.client.metadata }, expiry: gr(Eo) }, a && { sessionProperties: a });
      await this.client.core.relayer.subscribe(_);
      const T = vs(Qt({}, E), { topic: _, requiredNamespaces: u, optionalNamespaces: f, pairingTopic: c, acknowledged: !1, self: E.controller, peer: { publicKey: l.publicKey, metadata: l.metadata }, controller: p });
      await this.client.session.set(_, T);
      try {
        await this.sendRequest({ topic: _, method: "wc_sessionSettle", params: E, throwOnFailedPublish: !0 });
      } catch (M) {
        throw this.client.logger.error(M), this.client.session.delete(_, _t("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(_), M;
      }
      return await this.setExpiry(_, gr(Eo)), { topic: _, acknowledged: () => new Promise((M) => setTimeout(() => M(this.client.session.get(_)), 500)) };
    }, this.reject = async (r) => {
      await this.isInitialized(), await this.isValidReject(r);
      const { id: n, reason: s } = r, { pairingTopic: i } = this.client.proposal.get(n);
      i && (await this.sendError(n, i, s), await this.client.proposal.delete(n, _t("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      await this.isInitialized(), await this.isValidUpdate(r);
      const { topic: n, namespaces: s } = r, i = await this.sendRequest({ topic: n, method: "wc_sessionUpdate", params: { namespaces: s } }), { done: a, resolve: o, reject: c } = _s();
      return this.events.once(It("session_update", i), ({ error: l }) => {
        l ? c(l) : o();
      }), await this.client.session.update(n, { namespaces: s }), { acknowledged: a };
    }, this.extend = async (r) => {
      await this.isInitialized(), await this.isValidExtend(r);
      const { topic: n } = r, s = await this.sendRequest({ topic: n, method: "wc_sessionExtend", params: {} }), { done: i, resolve: a, reject: o } = _s();
      return this.events.once(It("session_extend", s), ({ error: c }) => {
        c ? o(c) : a();
      }), await this.setExpiry(n, gr(Eo)), { acknowledged: i };
    }, this.request = async (r) => {
      await this.isInitialized(), await this.isValidRequest(r);
      const { chainId: n, request: s, topic: i, expiry: a = sn.wc_sessionRequest.req.ttl } = r, o = Sl(), { done: c, resolve: l, reject: u } = _s(a, "Request expired. Please try again.");
      return this.events.once(It("session_request", o), ({ error: f, result: p }) => {
        f ? u(f) : l(p);
      }), await Promise.all([new Promise(async (f) => {
        await this.sendRequest({ clientRpcId: o, topic: i, method: "wc_sessionRequest", params: { request: vs(Qt({}, s), { expiryTimestamp: gr(a) }), chainId: n }, expiry: a, throwOnFailedPublish: !0 }).catch((p) => u(p)), this.client.events.emit("session_request_sent", { topic: i, request: s, chainId: n, id: o }), f();
      }), new Promise(async (f) => {
        const p = await B_(this.client.core.storage, Rd);
        F_({ id: o, topic: i, wcDeepLink: p }), f();
      }), c()]).then((f) => f[2]);
    }, this.respond = async (r) => {
      await this.isInitialized(), await this.isValidRespond(r);
      const { topic: n, response: s } = r, { id: i } = s;
      an(s) ? await this.sendResult({ id: i, topic: n, result: s.result, throwOnFailedPublish: !0 }) : Tr(s) && await this.sendError(i, n, s.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      await this.isInitialized(), await this.isValidPing(r);
      const { topic: n } = r;
      if (this.client.session.keys.includes(n)) {
        const s = await this.sendRequest({ topic: n, method: "wc_sessionPing", params: {} }), { done: i, resolve: a, reject: o } = _s();
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
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((n) => d0(n, r))), this.getPendingSessionRequests = () => this.client.pendingRequest.getAll(), this.cleanupDuplicatePairings = async (r) => {
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
      await this.client.core.relayer.unsubscribe(n), await this.client.session.delete(n, _t("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(o.publicKey) && await this.client.core.crypto.deleteKeyPair(o.publicKey), this.client.core.crypto.keychain.has(n) && await this.client.core.crypto.deleteSymKey(n), s || this.client.core.expirer.del(n), this.client.core.storage.removeItem(Rd).catch((c) => this.client.logger.warn(c)), this.getPendingSessionRequests().forEach((c) => {
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
      const { topic: n, method: s, params: i, expiry: a, relayRpcId: o, clientRpcId: c, throwOnFailedPublish: l } = r, u = Cs(s, i, c);
      if (Hs() && GE.includes(s)) {
        const m = Ts(JSON.stringify(u));
        this.client.core.verify.register({ attestationId: m });
      }
      const f = await this.client.core.crypto.encode(n, u), p = sn[s].req;
      return a && (p.ttl = a), o && (p.id = o), this.client.core.history.set(n, u), l ? (p.internal = vs(Qt({}, p.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(n, f, p)) : this.client.core.relayer.publish(n, f, p).catch((m) => this.client.logger.error(m)), u.id;
    }, this.sendResult = async (r) => {
      const { id: n, topic: s, result: i, throwOnFailedPublish: a } = r, o = xl(n, i), c = await this.client.core.crypto.encode(s, o), l = await this.client.core.history.get(s, n), u = sn[l.request.method].res;
      a ? (u.internal = vs(Qt({}, u.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(s, c, u)) : this.client.core.relayer.publish(s, c, u).catch((f) => this.client.logger.error(f)), await this.client.core.history.resolve(o);
    }, this.sendError = async (r, n, s) => {
      const i = Il(r, s), a = await this.client.core.crypto.encode(n, i), o = await this.client.core.history.get(n, r), c = sn[o.request.method].res;
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
        const c = Ts(JSON.stringify(n)), l = await this.getVerifyContext(c, o.proposer.metadata);
        this.client.events.emit("session_proposal", { id: i, params: o, verifyContext: l });
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
        const l = await this.client.core.crypto.generateSharedKey(o, c);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: l });
        const u = await this.client.core.relayer.subscribe(l);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: u }), await this.client.core.pairing.activate({ topic: r });
      } else
        Tr(n) && (await this.client.proposal.delete(s, _t("USER_DISCONNECTED")), this.events.emit(It("session_connect"), { error: n.error }));
    }, this.onSessionSettleRequest = async (r, n) => {
      const { id: s, params: i } = n;
      try {
        this.isValidSessionSettleRequest(i);
        const { relay: a, controller: o, expiry: c, namespaces: l, sessionProperties: u, pairingTopic: f } = n.params, p = Qt({ topic: r, relay: a, expiry: c, namespaces: l, acknowledged: !0, pairingTopic: f, requiredNamespaces: {}, optionalNamespaces: {}, controller: o.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: o.publicKey, metadata: o.metadata } }, u && { sessionProperties: u });
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
        const a = `${r}_session_update`, o = bo.get(a);
        if (o && this.isRequestOutOfSync(o, i)) {
          this.client.logger.info(`Discarding out of sync request - ${i}`);
          return;
        }
        this.isValidUpdate(Qt({ topic: r }, s)), await this.client.session.update(r, { namespaces: s.namespaces }), await this.sendResult({ id: i, topic: r, result: !0 }), this.client.events.emit("session_update", { id: i, topic: r, params: s }), bo.set(a, i);
      } catch (a) {
        await this.sendError(i, r, a), this.client.logger.error(a);
      }
    }, this.isRequestOutOfSync = (r, n) => parseInt(n.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, n) => {
      const { id: s } = n;
      an(n) ? this.events.emit(It("session_update", s), {}) : Tr(n) && this.events.emit(It("session_update", s), { error: n.error });
    }, this.onSessionExtendRequest = async (r, n) => {
      const { id: s } = n;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, gr(Eo)), await this.sendResult({ id: s, topic: r, result: !0 }), this.client.events.emit("session_extend", { id: s, topic: r });
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
        const a = Ts(JSON.stringify(Cs("wc_sessionRequest", i, s))), o = this.client.session.get(r), c = await this.getVerifyContext(a, o.peer.metadata), l = { id: s, topic: r, params: i, verifyContext: c };
        await this.setPendingSessionRequest(l), this.addSessionRequestToSessionRequestQueue(l), this.processSessionRequestQueue();
      } catch (a) {
        await this.sendError(s, r, a), this.client.logger.error(a);
      }
    }, this.onSessionRequestResponse = (r, n) => {
      const { id: s } = n;
      an(n) ? this.events.emit(It("session_request", s), { result: n.result }) : Tr(n) && this.events.emit(It("session_request", s), { error: n.error });
    }, this.onSessionEventRequest = async (r, n) => {
      const { id: s, params: i } = n;
      try {
        const a = `${r}_session_event_${i.event.name}`, o = bo.get(a);
        if (o && this.isRequestOutOfSync(o, s)) {
          this.client.logger.info(`Discarding out of sync request - ${s}`);
          return;
        }
        this.isValidEmit(Qt({ topic: r }, i)), this.client.events.emit("session_event", { id: s, topic: r, params: i }), bo.set(a, s);
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
      n && this.onSessionProposeRequest(r.topic, Cs("wc_sessionPropose", { requiredNamespaces: n.requiredNamespaces, optionalNamespaces: n.optionalNamespaces, relays: n.relays, proposer: n.proposer, sessionProperties: n.sessionProperties }, n.id));
    }, this.isValidConnect = async (r) => {
      if (!lr(r)) {
        const { message: c } = J("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(c);
      }
      const { pairingTopic: n, requiredNamespaces: s, optionalNamespaces: i, sessionProperties: a, relays: o } = r;
      if (tr(n) || await this.isValidPairingTopic(n), !S0(o, !0)) {
        const { message: c } = J("MISSING_OR_INVALID", `connect() relays: ${o}`);
        throw new Error(c);
      }
      !tr(s) && Vo(s) !== 0 && this.validateNamespaces(s, "requiredNamespaces"), !tr(i) && Vo(i) !== 0 && this.validateNamespaces(i, "optionalNamespaces"), tr(a) || this.validateSessionProps(a, "sessionProperties");
    }, this.validateNamespaces = (r, n) => {
      const s = E0(r, "connect()", n);
      if (s)
        throw new Error(s.message);
    }, this.isValidApprove = async (r) => {
      if (!lr(r))
        throw new Error(J("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: n, namespaces: s, relayProtocol: i, sessionProperties: a } = r;
      await this.isValidProposalId(n);
      const o = this.client.proposal.get(n), c = Wa(s, "approve()");
      if (c)
        throw new Error(c.message);
      const l = sd(o.requiredNamespaces, s, "approve()");
      if (l)
        throw new Error(l.message);
      if (!Lt(i, !0)) {
        const { message: u } = J("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
        throw new Error(u);
      }
      tr(a) || this.validateSessionProps(a, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!lr(r)) {
        const { message: i } = J("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(i);
      }
      const { id: n, reason: s } = r;
      if (await this.isValidProposalId(n), !I0(s)) {
        const { message: i } = J("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s)}`);
        throw new Error(i);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!lr(r)) {
        const { message: l } = J("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(l);
      }
      const { relay: n, controller: s, namespaces: i, expiry: a } = r;
      if (!uf(n)) {
        const { message: l } = J("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(l);
      }
      const o = y0(s, "onSessionSettleRequest()");
      if (o)
        throw new Error(o.message);
      const c = Wa(i, "onSessionSettleRequest()");
      if (c)
        throw new Error(c.message);
      if (Sn(a)) {
        const { message: l } = J("EXPIRED", "onSessionSettleRequest()");
        throw new Error(l);
      }
    }, this.isValidUpdate = async (r) => {
      if (!lr(r)) {
        const { message: c } = J("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(c);
      }
      const { topic: n, namespaces: s } = r;
      await this.isValidSessionTopic(n);
      const i = this.client.session.get(n), a = Wa(s, "update()");
      if (a)
        throw new Error(a.message);
      const o = sd(i.requiredNamespaces, s, "update()");
      if (o)
        throw new Error(o.message);
    }, this.isValidExtend = async (r) => {
      if (!lr(r)) {
        const { message: s } = J("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(s);
      }
      const { topic: n } = r;
      await this.isValidSessionTopic(n);
    }, this.isValidRequest = async (r) => {
      if (!lr(r)) {
        const { message: c } = J("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(c);
      }
      const { topic: n, request: s, chainId: i, expiry: a } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: o } = this.client.session.get(n);
      if (!nd(o, i)) {
        const { message: c } = J("MISSING_OR_INVALID", `request() chainId: ${i}`);
        throw new Error(c);
      }
      if (!O0(s)) {
        const { message: c } = J("MISSING_OR_INVALID", `request() ${JSON.stringify(s)}`);
        throw new Error(c);
      }
      if (!k0(o, i, s.method)) {
        const { message: c } = J("MISSING_OR_INVALID", `request() method: ${s.method}`);
        throw new Error(c);
      }
      if (a && !A0(a, Ja)) {
        const { message: c } = J("MISSING_OR_INVALID", `request() expiry: ${a}. Expiry must be a number (in seconds) between ${Ja.min} and ${Ja.max}`);
        throw new Error(c);
      }
    }, this.isValidRespond = async (r) => {
      var n;
      if (!lr(r)) {
        const { message: a } = J("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(a);
      }
      const { topic: s, response: i } = r;
      try {
        await this.isValidSessionTopic(s);
      } catch (a) {
        throw (n = r == null ? void 0 : r.response) != null && n.id && this.cleanupAfterResponse(r), a;
      }
      if (!T0(i)) {
        const { message: a } = J("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
        throw new Error(a);
      }
    }, this.isValidPing = async (r) => {
      if (!lr(r)) {
        const { message: s } = J("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(s);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.isValidEmit = async (r) => {
      if (!lr(r)) {
        const { message: o } = J("MISSING_OR_INVALID", `emit() params: ${r}`);
        throw new Error(o);
      }
      const { topic: n, event: s, chainId: i } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: a } = this.client.session.get(n);
      if (!nd(a, i)) {
        const { message: o } = J("MISSING_OR_INVALID", `emit() chainId: ${i}`);
        throw new Error(o);
      }
      if (!C0(s)) {
        const { message: o } = J("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(o);
      }
      if (!P0(a, i, s.name)) {
        const { message: o } = J("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(o);
      }
    }, this.isValidDisconnect = async (r) => {
      if (!lr(r)) {
        const { message: s } = J("MISSING_OR_INVALID", `disconnect() params: ${r}`);
        throw new Error(s);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.getVerifyContext = async (r, n) => {
      const s = { verified: { verifyUrl: n.verifyUrl || xs, validation: "UNKNOWN", origin: n.url || "" } };
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
        Ol(s) ? (this.client.core.history.set(r, s), this.onRelayEventRequest({ topic: r, payload: s })) : Ta(s) ? (await this.client.core.history.resolve(s), await this.onRelayEventResponse({ topic: r, payload: s }), this.client.core.history.delete(r, s.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: s });
      } catch (i) {
        this.client.logger.error(i);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(Er.expired, async (e) => {
      const { topic: r, id: n } = cf(e.target);
      if (n && this.client.pendingRequest.keys.includes(n))
        return await this.deletePendingSessionRequest(n, J("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession({ topic: r, expirerHasDeleted: !0 }), this.client.events.emit("session_expire", { topic: r })) : n && (await this.deleteProposal(n, !0), this.client.events.emit("proposal_expire", { id: n }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(ci.create, (e) => this.onPairingCreated(e));
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
    if (!x0(e)) {
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
class rS extends ka {
  constructor(e, r) {
    super(e, r, KE, kl), this.core = e, this.logger = r;
  }
}
class nS extends ka {
  constructor(e, r) {
    super(e, r, FE, kl), this.core = e, this.logger = r;
  }
}
class sS extends ka {
  constructor(e, r) {
    super(e, r, HE, kl, (n) => n.id), this.core = e, this.logger = r;
  }
}
class Pl extends Km {
  constructor(e) {
    super(e), this.protocol = Pf, this.version = Nf, this.name = Ya.name, this.events = new zr.EventEmitter(), this.on = (n, s) => this.events.on(n, s), this.once = (n, s) => this.events.once(n, s), this.off = (n, s) => this.events.off(n, s), this.removeListener = (n, s) => this.events.removeListener(n, s), this.removeAllListeners = (n) => this.events.removeAllListeners(n), this.connect = async (n) => {
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
    }, this.name = (e == null ? void 0 : e.name) || Ya.name, this.metadata = (e == null ? void 0 : e.metadata) || U_();
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : We.pino(We.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || Ya.logger }));
    this.core = (e == null ? void 0 : e.core) || new ZE(e), this.logger = We.generateChildLogger(r, this.name), this.session = new nS(this.core, this.logger), this.proposal = new rS(this.core, this.logger), this.pendingRequest = new sS(this.core, this.logger), this.engine = new tS(this);
  }
  static async init(e) {
    const r = new Pl(e);
    return await r.initialize(), r;
  }
  get context() {
    return We.getLoggerContext(this.logger);
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
var iS = Object.defineProperty, oS = Object.defineProperties, aS = Object.getOwnPropertyDescriptors, Ld = Object.getOwnPropertySymbols, cS = Object.prototype.hasOwnProperty, lS = Object.prototype.propertyIsEnumerable, Md = (t, e, r) => e in t ? iS(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, uS = (t, e) => {
  for (var r in e || (e = {}))
    cS.call(e, r) && Md(t, r, e[r]);
  if (Ld)
    for (var r of Ld(e))
      lS.call(e, r) && Md(t, r, e[r]);
  return t;
}, dS = (t, e) => oS(t, aS(e)), Nl = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, lt = (t, e, r) => (Nl(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Fn = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, Wo = (t, e, r, n) => (Nl(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), Wt = (t, e, r) => (Nl(t, e, "access private method"), r), Bn, bs, li, jt, Oc, Af, Ft, er, Tc, Dd;
let hS = class {
  constructor(t) {
    Fn(this, Oc), Fn(this, Ft), Fn(this, Tc), Fn(this, Bn, void 0), Fn(this, bs, void 0), Fn(this, li, void 0), Fn(this, jt, void 0), Wo(this, Bn, t), Wo(this, bs, Wt(this, Oc, Af).call(this)), Wt(this, Ft, er).call(this);
  }
  async connect(t) {
    const { requiredNamespaces: e, optionalNamespaces: r } = t;
    return new Promise(async (n, s) => {
      await Wt(this, Ft, er).call(this);
      const i = lt(this, bs).subscribeModal((c) => {
        c.open || (i(), s(new Error("Modal closed")));
      }), { uri: a, approval: o } = await lt(this, jt).connect(t);
      if (a) {
        const c = /* @__PURE__ */ new Set();
        e && Object.values(e).forEach(({ chains: l }) => {
          l && l.forEach((u) => c.add(u));
        }), r && Object.values(r).forEach(({ chains: l }) => {
          l && l.forEach((u) => c.add(u));
        }), await lt(this, bs).openModal({ uri: a, chains: Array.from(c) });
      }
      try {
        const c = await o();
        n(c);
      } catch (c) {
        s(c);
      } finally {
        i(), lt(this, bs).closeModal();
      }
    });
  }
  async disconnect(t) {
    await Wt(this, Ft, er).call(this), await lt(this, jt).disconnect(t);
  }
  async request(t) {
    return await Wt(this, Ft, er).call(this), await lt(this, jt).request(t);
  }
  async getSessions() {
    return await Wt(this, Ft, er).call(this), lt(this, jt).session.getAll();
  }
  async getSession() {
    return await Wt(this, Ft, er).call(this), lt(this, jt).session.getAll().at(-1);
  }
  async onSessionEvent(t) {
    await Wt(this, Ft, er).call(this), lt(this, jt).on("session_event", t);
  }
  async offSessionEvent(t) {
    await Wt(this, Ft, er).call(this), lt(this, jt).off("session_event", t);
  }
  async onSessionUpdate(t) {
    await Wt(this, Ft, er).call(this), lt(this, jt).on("session_update", t);
  }
  async offSessionUpdate(t) {
    await Wt(this, Ft, er).call(this), lt(this, jt).off("session_update", t);
  }
  async onSessionDelete(t) {
    await Wt(this, Ft, er).call(this), lt(this, jt).on("session_delete", t);
  }
  async offSessionDelete(t) {
    await Wt(this, Ft, er).call(this), lt(this, jt).off("session_delete", t);
  }
  async onSessionExpire(t) {
    await Wt(this, Ft, er).call(this), lt(this, jt).on("session_expire", t);
  }
  async offSessionExpire(t) {
    await Wt(this, Ft, er).call(this), lt(this, jt).off("session_expire", t);
  }
};
Bn = /* @__PURE__ */ new WeakMap(), bs = /* @__PURE__ */ new WeakMap(), li = /* @__PURE__ */ new WeakMap(), jt = /* @__PURE__ */ new WeakMap(), Oc = /* @__PURE__ */ new WeakSet(), Af = function() {
  const { modalOptions: t, projectId: e } = lt(this, Bn);
  return new fy(dS(uS({}, t), { projectId: e }));
}, Ft = /* @__PURE__ */ new WeakSet(), er = async function() {
  return lt(this, jt) ? !0 : (!lt(this, li) && typeof window < "u" && Wo(this, li, Wt(this, Tc, Dd).call(this)), lt(this, li));
}, Tc = /* @__PURE__ */ new WeakSet(), Dd = async function() {
  Wo(this, jt, await Pl.init({ metadata: lt(this, Bn).metadata, projectId: lt(this, Bn).projectId, relayUrl: lt(this, Bn).relayUrl }));
  const t = await lt(this, jt).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", t);
  } catch {
    console.info("Unable to set client id");
  }
};
const fS = [
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
], Rl = ["aleo:3"], pS = [
  "chainChanged",
  "accountSelected",
  "selectedAccountSynced",
  "sharedAccountSynced"
], jf = "f0aaeffe71b636da453fce042d79d723";
function gS() {
  return navigator ? /Android/i.test(navigator.userAgent) : !1;
}
const yS = {
  chains: Rl,
  enableExplorer: !0,
  explorerRecommendedWalletIds: [jf]
}, mS = {
  chains: Rl,
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
}, zd = gS() ? yS : mS, vS = "@puzzlehq/sdk-core", wS = "Puzzle SDK", _S = "0.2.32-beta.1", bS = "Your portal to privacy", ES = "./dist/puzzle.cjs.js", SS = "./dist/puzzle.es.js", xS = "./dist/puzzle.umd.js", IS = "./dist/types/index.d.ts", OS = {
  ".": {
    import: "./dist/puzzle.es.js",
    require: "./dist/puzzle.cjs.js",
    browser: "./dist/puzzle.umd.js",
    types: "./dist/types/src/index.d.ts"
  }
}, TS = "module", CS = {
  "fetch-fix": "find dist -type f \\( -name '*.js' -o -name '*.cjs' \\) -exec sed -i '' 's/self.fetch[[:space:]]*||/fetch ||/g' {} \\;",
  "ws-fix": `find ./dist -type f -name 'index*' -exec sed -i '' -e 's/require(\\"ws\\")/(() => {try { return require(\\"ws\\") } catch (e) { } })()/g' {} +;`,
  build: "vite build && tsc --declaration --emitDeclarationOnly --outDir dist/types && pnpm fetch-fix && pnpm ws-fix",
  "type-check": "tsc --noEmit"
}, kS = {
  type: "git",
  url: "git+https://github.com/puzzlehq/puzzle-sdk.git"
}, PS = {
  "@puzzlehq/types": "1.0.11",
  "@walletconnect/modal-sign-html": "^2.6.2",
  "@walletconnect/types": "^2.11.2",
  "@walletconnect/utils": "^2.11.2",
  debug: "^4.3.4",
  events: "^3.3.0"
}, NS = {
  buffer: "^6.0.3"
}, RS = [
  "puzzle",
  "html",
  "aleo",
  "web3",
  "crypto"
], AS = "Puzzle", jS = "ISC", LS = {
  url: "https://github.com/puzzlehq/puzzle-sdk/issues"
}, MS = "https://github.com/puzzlehq/puzzle-sdk#readme", Ud = {
  name: vS,
  displayName: wS,
  version: _S,
  description: bS,
  main: ES,
  module: SS,
  browser: xS,
  types: IS,
  private: !1,
  exports: OS,
  type: TS,
  scripts: CS,
  repository: kS,
  dependencies: PS,
  peerDependencies: NS,
  keywords: RS,
  author: AS,
  license: jS,
  bugs: LS,
  homepage: MS
}, Lf = new ll();
let Cn;
async function DS(t) {
  let e = !1;
  const r = Ud.version, n = localStorage.getItem("puzzle_sdk_version");
  if (r !== n && (console.log(
    `${Ud.name}: Updated from ` + n + " to " + r + "!"
  ), localStorage.setItem("puzzle_sdk_version", r), e = !0), console.log("web3modal_puzzle_props", zd), Cn = new hS({
    projectId: t.projectId ?? jf,
    metadata: {
      name: t.dAppName,
      description: t.dAppDescription,
      url: t.dAppUrl,
      icons: [t.dAppIconURL]
    },
    modalOptions: { ...zd }
  }), e) {
    localStorage.removeItem("puzzle-hasDesktopConnection");
    try {
      zS(Cn, t.onDisconnect);
    } catch (s) {
      console.error(s);
    }
  }
  Cn.onSessionDelete(() => {
    localStorage.removeItem("puzzle-hasDesktopConnection"), t.onDisconnect && t.onDisconnect();
  }), Cn.onSessionExpire(() => {
    localStorage.removeItem("puzzle-hasDesktopConnection"), t.onDisconnect && t.onDisconnect();
  }), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
}
async function zS(t, e) {
  const r = await (t == null ? void 0 : t.getSession());
  r && (console.log("Disconnecting session", r), e && e(), t.disconnect({
    topic: r.topic,
    reason: _t("USER_DISCONNECTED")
  }));
}
async function Mf() {
  return new Promise((t) => {
    if (Cn)
      t(Cn);
    else {
      const e = setInterval(() => {
        Cn && (clearInterval(e), t(Cn));
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
var Cc;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(Cc || (Cc = {}));
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
}, F = Je.arrayToEnum([
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
]), US = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
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
            const l = a.path[c];
            c === a.path.length - 1 ? (o[l] = o[l] || { _errors: [] }, o[l]._errors.push(r(a))) : o[l] = o[l] || { _errors: [] }, o = o[l], c++;
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
const vi = (t, e) => {
  let r;
  switch (t.code) {
    case F.invalid_type:
      t.received === te.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
      break;
    case F.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(t.expected, Je.jsonStringifyReplacer)}`;
      break;
    case F.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${Je.joinValues(t.keys, ", ")}`;
      break;
    case F.invalid_union:
      r = "Invalid input";
      break;
    case F.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${Je.joinValues(t.options)}`;
      break;
    case F.invalid_enum_value:
      r = `Invalid enum value. Expected ${Je.joinValues(t.options)}, received '${t.received}'`;
      break;
    case F.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case F.invalid_return_type:
      r = "Invalid function return type";
      break;
    case F.invalid_date:
      r = "Invalid date";
      break;
    case F.invalid_string:
      typeof t.validation == "object" ? "includes" in t.validation ? (r = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : Je.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
      break;
    case F.too_small:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : r = "Invalid input";
      break;
    case F.too_big:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? r = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : r = "Invalid input";
      break;
    case F.custom:
      r = "Invalid input";
      break;
    case F.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case F.not_multiple_of:
      r = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case F.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = e.defaultError, Je.assertNever(t);
  }
  return { message: r };
};
let Df = vi;
function $S(t) {
  Df = t;
}
function Fo() {
  return Df;
}
const Bo = (t) => {
  const { data: e, path: r, errorMaps: n, issueData: s } = t, i = [...r, ...s.path || []], a = {
    ...s,
    path: i
  };
  let o = "";
  const c = n.filter((l) => !!l).slice().reverse();
  for (const l of c)
    o = l(a, { data: e, defaultError: o }).message;
  return {
    ...s,
    path: i,
    message: s.message || o
  };
}, qS = [];
function se(t, e) {
  const r = Bo({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      Fo(),
      vi
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
}), zf = (t) => ({ status: "dirty", value: t }), ir = (t) => ({ status: "valid", value: t }), kc = (t) => t.status === "aborted", Pc = (t) => t.status === "dirty", Ho = (t) => t.status === "valid", Go = (t) => typeof Promise < "u" && t instanceof Promise;
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
const $d = (t, e) => {
  if (Ho(e))
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
    if (Go(r))
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
    return $d(s, i);
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
    }, s = this._parse({ data: e, path: n.path, parent: n }), i = await (Go(s) ? s : Promise.resolve(s));
    return $d(n, i);
  }
  refine(e, r) {
    const n = (s) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(s) : r;
    return this._refinement((s, i) => {
      const a = e(s), o = () => i.addIssue({
        code: F.custom,
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
    return ns.create(this, this._def);
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
    return Ei.create([this, e], this._def);
  }
  and(e) {
    return Si.create(this, e, this._def);
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
    return new Ci({
      ...xe(this._def),
      innerType: this,
      defaultValue: r,
      typeName: pe.ZodDefault
    });
  }
  brand() {
    return new $f({
      typeName: pe.ZodBranded,
      type: this,
      ...xe(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new Qo({
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
    return oo.create(this, e);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const VS = /^c[^\s-]{8,}$/i, ZS = /^[a-z][a-z0-9]*$/, KS = /[0-9A-HJKMNP-TV-Z]{26}/, WS = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, FS = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, BS = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u"), HS = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, GS = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, YS = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function JS(t, e) {
  return !!((e === "v4" || !e) && HS.test(t) || (e === "v6" || !e) && GS.test(t));
}
class kr extends Re {
  constructor() {
    super(...arguments), this._regex = (e, r, n) => this.refinement((s) => e.test(s), {
      validation: r,
      code: F.invalid_string,
      ...ce.errToObj(n)
    }), this.nonempty = (e) => this.min(1, ce.errToObj(e)), this.trim = () => new kr({
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
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== te.string) {
      const s = this._getOrReturnCtx(e);
      return se(
        s,
        {
          code: F.invalid_type,
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
          code: F.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), r.dirty());
      else if (s.kind === "max")
        e.data.length > s.value && (n = this._getOrReturnCtx(e, n), se(n, {
          code: F.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), r.dirty());
      else if (s.kind === "length") {
        const i = e.data.length > s.value, a = e.data.length < s.value;
        (i || a) && (n = this._getOrReturnCtx(e, n), i ? se(n, {
          code: F.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : a && se(n, {
          code: F.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), r.dirty());
      } else if (s.kind === "email")
        FS.test(e.data) || (n = this._getOrReturnCtx(e, n), se(n, {
          validation: "email",
          code: F.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "emoji")
        BS.test(e.data) || (n = this._getOrReturnCtx(e, n), se(n, {
          validation: "emoji",
          code: F.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "uuid")
        WS.test(e.data) || (n = this._getOrReturnCtx(e, n), se(n, {
          validation: "uuid",
          code: F.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "cuid")
        VS.test(e.data) || (n = this._getOrReturnCtx(e, n), se(n, {
          validation: "cuid",
          code: F.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "cuid2")
        ZS.test(e.data) || (n = this._getOrReturnCtx(e, n), se(n, {
          validation: "cuid2",
          code: F.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "ulid")
        KS.test(e.data) || (n = this._getOrReturnCtx(e, n), se(n, {
          validation: "ulid",
          code: F.invalid_string,
          message: s.message
        }), r.dirty());
      else if (s.kind === "url")
        try {
          new URL(e.data);
        } catch {
          n = this._getOrReturnCtx(e, n), se(n, {
            validation: "url",
            code: F.invalid_string,
            message: s.message
          }), r.dirty();
        }
      else
        s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(e.data) || (n = this._getOrReturnCtx(e, n), se(n, {
          validation: "regex",
          code: F.invalid_string,
          message: s.message
        }), r.dirty())) : s.kind === "trim" ? e.data = e.data.trim() : s.kind === "includes" ? e.data.includes(s.value, s.position) || (n = this._getOrReturnCtx(e, n), se(n, {
          code: F.invalid_string,
          validation: { includes: s.value, position: s.position },
          message: s.message
        }), r.dirty()) : s.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : s.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : s.kind === "startsWith" ? e.data.startsWith(s.value) || (n = this._getOrReturnCtx(e, n), se(n, {
          code: F.invalid_string,
          validation: { startsWith: s.value },
          message: s.message
        }), r.dirty()) : s.kind === "endsWith" ? e.data.endsWith(s.value) || (n = this._getOrReturnCtx(e, n), se(n, {
          code: F.invalid_string,
          validation: { endsWith: s.value },
          message: s.message
        }), r.dirty()) : s.kind === "datetime" ? YS(s).test(e.data) || (n = this._getOrReturnCtx(e, n), se(n, {
          code: F.invalid_string,
          validation: "datetime",
          message: s.message
        }), r.dirty()) : s.kind === "ip" ? JS(e.data, s.version) || (n = this._getOrReturnCtx(e, n), se(n, {
          validation: "ip",
          code: F.invalid_string,
          message: s.message
        }), r.dirty()) : Je.assertNever(s);
    return { status: r.value, value: e.data };
  }
  _addCheck(e) {
    return new kr({
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
kr.create = (t) => {
  var e;
  return new kr({
    checks: [],
    typeName: pe.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...xe(t)
  });
};
function XS(t, e) {
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
        code: F.invalid_type,
        expected: te.number,
        received: s.parsedType
      }), _e;
    }
    let r;
    const n = new Yt();
    for (const s of this._def.checks)
      s.kind === "int" ? Je.isInteger(e.data) || (r = this._getOrReturnCtx(e, r), se(r, {
        code: F.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), n.dirty()) : s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (r = this._getOrReturnCtx(e, r), se(r, {
        code: F.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), n.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (r = this._getOrReturnCtx(e, r), se(r, {
        code: F.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), n.dirty()) : s.kind === "multipleOf" ? XS(e.data, s.value) !== 0 && (r = this._getOrReturnCtx(e, r), se(r, {
        code: F.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), n.dirty()) : s.kind === "finite" ? Number.isFinite(e.data) || (r = this._getOrReturnCtx(e, r), se(r, {
        code: F.not_finite,
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
Nn.create = (t) => new Nn({
  checks: [],
  typeName: pe.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...xe(t)
});
class Rn extends Re {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== te.bigint) {
      const s = this._getOrReturnCtx(e);
      return se(s, {
        code: F.invalid_type,
        expected: te.bigint,
        received: s.parsedType
      }), _e;
    }
    let r;
    const n = new Yt();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (r = this._getOrReturnCtx(e, r), se(r, {
        code: F.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), n.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (r = this._getOrReturnCtx(e, r), se(r, {
        code: F.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), n.dirty()) : s.kind === "multipleOf" ? e.data % s.value !== BigInt(0) && (r = this._getOrReturnCtx(e, r), se(r, {
        code: F.not_multiple_of,
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
    return new Rn({
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
    return new Rn({
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
Rn.create = (t) => {
  var e;
  return new Rn({
    checks: [],
    typeName: pe.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...xe(t)
  });
};
class wi extends Re {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== te.boolean) {
      const r = this._getOrReturnCtx(e);
      return se(r, {
        code: F.invalid_type,
        expected: te.boolean,
        received: r.parsedType
      }), _e;
    }
    return ir(e.data);
  }
}
wi.create = (t) => new wi({
  typeName: pe.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...xe(t)
});
class ts extends Re {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== te.date) {
      const s = this._getOrReturnCtx(e);
      return se(s, {
        code: F.invalid_type,
        expected: te.date,
        received: s.parsedType
      }), _e;
    }
    if (isNaN(e.data.getTime())) {
      const s = this._getOrReturnCtx(e);
      return se(s, {
        code: F.invalid_date
      }), _e;
    }
    const r = new Yt();
    let n;
    for (const s of this._def.checks)
      s.kind === "min" ? e.data.getTime() < s.value && (n = this._getOrReturnCtx(e, n), se(n, {
        code: F.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), r.dirty()) : s.kind === "max" ? e.data.getTime() > s.value && (n = this._getOrReturnCtx(e, n), se(n, {
        code: F.too_big,
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
    return new ts({
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
ts.create = (t) => new ts({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: pe.ZodDate,
  ...xe(t)
});
class Yo extends Re {
  _parse(e) {
    if (this._getType(e) !== te.symbol) {
      const r = this._getOrReturnCtx(e);
      return se(r, {
        code: F.invalid_type,
        expected: te.symbol,
        received: r.parsedType
      }), _e;
    }
    return ir(e.data);
  }
}
Yo.create = (t) => new Yo({
  typeName: pe.ZodSymbol,
  ...xe(t)
});
class _i extends Re {
  _parse(e) {
    if (this._getType(e) !== te.undefined) {
      const r = this._getOrReturnCtx(e);
      return se(r, {
        code: F.invalid_type,
        expected: te.undefined,
        received: r.parsedType
      }), _e;
    }
    return ir(e.data);
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
        code: F.invalid_type,
        expected: te.null,
        received: r.parsedType
      }), _e;
    }
    return ir(e.data);
  }
}
bi.create = (t) => new bi({
  typeName: pe.ZodNull,
  ...xe(t)
});
class zs extends Re {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return ir(e.data);
  }
}
zs.create = (t) => new zs({
  typeName: pe.ZodAny,
  ...xe(t)
});
class Jn extends Re {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return ir(e.data);
  }
}
Jn.create = (t) => new Jn({
  typeName: pe.ZodUnknown,
  ...xe(t)
});
class fn extends Re {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return se(r, {
      code: F.invalid_type,
      expected: te.never,
      received: r.parsedType
    }), _e;
  }
}
fn.create = (t) => new fn({
  typeName: pe.ZodNever,
  ...xe(t)
});
class Jo extends Re {
  _parse(e) {
    if (this._getType(e) !== te.undefined) {
      const r = this._getOrReturnCtx(e);
      return se(r, {
        code: F.invalid_type,
        expected: te.void,
        received: r.parsedType
      }), _e;
    }
    return ir(e.data);
  }
}
Jo.create = (t) => new Jo({
  typeName: pe.ZodVoid,
  ...xe(t)
});
class Rr extends Re {
  _parse(e) {
    const { ctx: r, status: n } = this._processInputParams(e), s = this._def;
    if (r.parsedType !== te.array)
      return se(r, {
        code: F.invalid_type,
        expected: te.array,
        received: r.parsedType
      }), _e;
    if (s.exactLength !== null) {
      const a = r.data.length > s.exactLength.value, o = r.data.length < s.exactLength.value;
      (a || o) && (se(r, {
        code: a ? F.too_big : F.too_small,
        minimum: o ? s.exactLength.value : void 0,
        maximum: a ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), n.dirty());
    }
    if (s.minLength !== null && r.data.length < s.minLength.value && (se(r, {
      code: F.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), n.dirty()), s.maxLength !== null && r.data.length > s.maxLength.value && (se(r, {
      code: F.too_big,
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
function Es(t) {
  if (t instanceof ft) {
    const e = {};
    for (const r in t.shape) {
      const n = t.shape[r];
      e[r] = ln.create(Es(n));
    }
    return new ft({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof Rr ? new Rr({
      ...t._def,
      type: Es(t.element)
    }) : t instanceof ln ? ln.create(Es(t.unwrap())) : t instanceof ns ? ns.create(Es(t.unwrap())) : t instanceof Gr ? Gr.create(t.items.map((e) => Es(e))) : t;
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
        code: F.invalid_type,
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
      const l = s[c], u = n.data[c];
      o.push({
        key: { status: "valid", value: c },
        value: l._parse(new Hr(n, u, n.path, c)),
        alwaysSet: c in n.data
      });
    }
    if (this._def.catchall instanceof fn) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const l of a)
          o.push({
            key: { status: "valid", value: l },
            value: { status: "valid", value: n.data[l] }
          });
      else if (c === "strict")
        a.length > 0 && (se(n, {
          code: F.unrecognized_keys,
          keys: a
        }), r.dirty());
      else if (c !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const l of a) {
        const u = n.data[l];
        o.push({
          key: { status: "valid", value: l },
          value: c._parse(
            new Hr(n, u, n.path, l)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: l in n.data
        });
      }
    }
    return n.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const l of o) {
        const u = await l.key;
        c.push({
          key: u,
          value: await l.value,
          alwaysSet: l.alwaysSet
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
    return Es(this);
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
        for (; s instanceof ln; )
          s = s._def.innerType;
        r[n] = s;
      }
    }), new ft({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return Uf(Je.objectKeys(this.shape));
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
class Ei extends Re {
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
        code: F.invalid_union,
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
        const l = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, u = c._parseSync({
          data: r.data,
          path: r.path,
          parent: l
        });
        if (u.status === "valid")
          return u;
        u.status === "dirty" && !i && (i = { result: u, ctx: l }), l.common.issues.length && a.push(l.common.issues);
      }
      if (i)
        return r.common.issues.push(...i.ctx.common.issues), i.result;
      const o = a.map((c) => new Nr(c));
      return se(r, {
        code: F.invalid_union,
        unionErrors: o
      }), _e;
    }
  }
  get options() {
    return this._def.options;
  }
}
Ei.create = (t, e) => new Ei({
  options: t,
  typeName: pe.ZodUnion,
  ...xe(e)
});
const Ao = (t) => t instanceof Ii ? Ao(t.schema) : t instanceof Mr ? Ao(t.innerType()) : t instanceof Oi ? [t.value] : t instanceof An ? t.options : t instanceof Ti ? Object.keys(t.enum) : t instanceof Ci ? Ao(t._def.innerType) : t instanceof _i ? [void 0] : t instanceof bi ? [null] : null;
class Pa extends Re {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== te.object)
      return se(r, {
        code: F.invalid_type,
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
      code: F.invalid_union_discriminator,
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
      const a = Ao(i.shape[e]);
      if (!a)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const o of a) {
        if (s.has(o))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        s.set(o, i);
      }
    }
    return new Pa({
      typeName: pe.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: s,
      ...xe(n)
    });
  }
}
function Nc(t, e) {
  const r = xn(t), n = xn(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === te.object && n === te.object) {
    const s = Je.objectKeys(e), i = Je.objectKeys(t).filter((o) => s.indexOf(o) !== -1), a = { ...t, ...e };
    for (const o of i) {
      const c = Nc(t[o], e[o]);
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
      const a = t[i], o = e[i], c = Nc(a, o);
      if (!c.valid)
        return { valid: !1 };
      s.push(c.data);
    }
    return { valid: !0, data: s };
  } else
    return r === te.date && n === te.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class Si extends Re {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), s = (i, a) => {
      if (kc(i) || kc(a))
        return _e;
      const o = Nc(i.value, a.value);
      return o.valid ? ((Pc(i) || Pc(a)) && r.dirty(), { status: r.value, value: o.data }) : (se(n, {
        code: F.invalid_intersection_types
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
Si.create = (t, e, r) => new Si({
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
        code: F.invalid_type,
        expected: te.array,
        received: n.parsedType
      }), _e;
    if (n.data.length < this._def.items.length)
      return se(n, {
        code: F.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), _e;
    !this._def.rest && n.data.length > this._def.items.length && (se(n, {
      code: F.too_big,
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
class xi extends Re {
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
        code: F.invalid_type,
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
    return r instanceof Re ? new xi({
      keyType: e,
      valueType: r,
      typeName: pe.ZodRecord,
      ...xe(n)
    }) : new xi({
      keyType: kr.create(),
      valueType: e,
      typeName: pe.ZodRecord,
      ...xe(r)
    });
  }
}
class Xo extends Re {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== te.map)
      return se(n, {
        code: F.invalid_type,
        expected: te.map,
        received: n.parsedType
      }), _e;
    const s = this._def.keyType, i = this._def.valueType, a = [...n.data.entries()].map(([o, c], l) => ({
      key: s._parse(new Hr(n, o, n.path, [l, "key"])),
      value: i._parse(new Hr(n, c, n.path, [l, "value"]))
    }));
    if (n.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of a) {
          const l = await c.key, u = await c.value;
          if (l.status === "aborted" || u.status === "aborted")
            return _e;
          (l.status === "dirty" || u.status === "dirty") && r.dirty(), o.set(l.value, u.value);
        }
        return { status: r.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const c of a) {
        const l = c.key, u = c.value;
        if (l.status === "aborted" || u.status === "aborted")
          return _e;
        (l.status === "dirty" || u.status === "dirty") && r.dirty(), o.set(l.value, u.value);
      }
      return { status: r.value, value: o };
    }
  }
}
Xo.create = (t, e, r) => new Xo({
  valueType: e,
  keyType: t,
  typeName: pe.ZodMap,
  ...xe(r)
});
class rs extends Re {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== te.set)
      return se(n, {
        code: F.invalid_type,
        expected: te.set,
        received: n.parsedType
      }), _e;
    const s = this._def;
    s.minSize !== null && n.data.size < s.minSize.value && (se(n, {
      code: F.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), r.dirty()), s.maxSize !== null && n.data.size > s.maxSize.value && (se(n, {
      code: F.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), r.dirty());
    const i = this._def.valueType;
    function a(c) {
      const l = /* @__PURE__ */ new Set();
      for (const u of c) {
        if (u.status === "aborted")
          return _e;
        u.status === "dirty" && r.dirty(), l.add(u.value);
      }
      return { status: r.value, value: l };
    }
    const o = [...n.data.values()].map((c, l) => i._parse(new Hr(n, c, n.path, l)));
    return n.common.async ? Promise.all(o).then((c) => a(c)) : a(o);
  }
  min(e, r) {
    return new rs({
      ...this._def,
      minSize: { value: e, message: ce.toString(r) }
    });
  }
  max(e, r) {
    return new rs({
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
rs.create = (t, e) => new rs({
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
        code: F.invalid_type,
        expected: te.function,
        received: r.parsedType
      }), _e;
    function n(o, c) {
      return Bo({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Fo(),
          vi
        ].filter((l) => !!l),
        issueData: {
          code: F.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function s(o, c) {
      return Bo({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Fo(),
          vi
        ].filter((l) => !!l),
        issueData: {
          code: F.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const i = { errorMap: r.common.contextualErrorMap }, a = r.data;
    return this._def.returns instanceof Us ? ir(async (...o) => {
      const c = new Nr([]), l = await this._def.args.parseAsync(o, i).catch((f) => {
        throw c.addIssue(n(o, f)), c;
      }), u = await a(...l);
      return await this._def.returns._def.type.parseAsync(u, i).catch((f) => {
        throw c.addIssue(s(u, f)), c;
      });
    }) : ir((...o) => {
      const c = this._def.args.safeParse(o, i);
      if (!c.success)
        throw new Nr([n(o, c.error)]);
      const l = a(...c.data), u = this._def.returns.safeParse(l, i);
      if (!u.success)
        throw new Nr([s(l, u.error)]);
      return u.data;
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
      args: Gr.create(e).rest(Jn.create())
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
      args: e || Gr.create([]).rest(Jn.create()),
      returns: r || Jn.create(),
      typeName: pe.ZodFunction,
      ...xe(n)
    });
  }
}
class Ii extends Re {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Ii.create = (t, e) => new Ii({
  getter: t,
  typeName: pe.ZodLazy,
  ...xe(e)
});
class Oi extends Re {
  _parse(e) {
    if (e.data !== this._def.value) {
      const r = this._getOrReturnCtx(e);
      return se(r, {
        received: r.data,
        code: F.invalid_literal,
        expected: this._def.value
      }), _e;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Oi.create = (t, e) => new Oi({
  value: t,
  typeName: pe.ZodLiteral,
  ...xe(e)
});
function Uf(t, e) {
  return new An({
    values: t,
    typeName: pe.ZodEnum,
    ...xe(e)
  });
}
class An extends Re {
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return se(r, {
        expected: Je.joinValues(n),
        received: r.parsedType,
        code: F.invalid_type
      }), _e;
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return se(r, {
        received: r.data,
        code: F.invalid_enum_value,
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
    return An.create(e);
  }
  exclude(e) {
    return An.create(this.options.filter((r) => !e.includes(r)));
  }
}
An.create = Uf;
class Ti extends Re {
  _parse(e) {
    const r = Je.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== te.string && n.parsedType !== te.number) {
      const s = Je.objectValues(r);
      return se(n, {
        expected: Je.joinValues(s),
        received: n.parsedType,
        code: F.invalid_type
      }), _e;
    }
    if (r.indexOf(e.data) === -1) {
      const s = Je.objectValues(r);
      return se(n, {
        received: n.data,
        code: F.invalid_enum_value,
        options: s
      }), _e;
    }
    return ir(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
Ti.create = (t, e) => new Ti({
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
        code: F.invalid_type,
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
        if (!Ho(a))
          return a;
        const o = s.transform(a.value, i);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => Ho(a) ? Promise.resolve(s.transform(a.value, i)).then((o) => ({ status: r.value, value: o })) : a);
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
    return this._getType(e) === te.undefined ? ir(void 0) : this._def.innerType._parse(e);
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
class ns extends Re {
  _parse(e) {
    return this._getType(e) === te.null ? ir(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ns.create = (t, e) => new ns({
  innerType: t,
  typeName: pe.ZodNullable,
  ...xe(e)
});
class Ci extends Re {
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
Ci.create = (t, e) => new Ci({
  innerType: t,
  typeName: pe.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...xe(e)
});
class Qo extends Re {
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
    return Go(s) ? s.then((i) => ({
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
Qo.create = (t, e) => new Qo({
  innerType: t,
  typeName: pe.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...xe(e)
});
class ea extends Re {
  _parse(e) {
    if (this._getType(e) !== te.nan) {
      const r = this._getOrReturnCtx(e);
      return se(r, {
        code: F.invalid_type,
        expected: te.nan,
        received: r.parsedType
      }), _e;
    }
    return { status: "valid", value: e.data };
  }
}
ea.create = (t) => new ea({
  typeName: pe.ZodNaN,
  ...xe(t)
});
const QS = Symbol("zod_brand");
class $f extends Re {
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
class oo extends Re {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return s.status === "aborted" ? _e : s.status === "dirty" ? (r.dirty(), zf(s.value)) : this._def.out._parseAsync({
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
    return new oo({
      in: e,
      out: r,
      typeName: pe.ZodPipeline
    });
  }
}
const qf = (t, e = {}, r) => t ? zs.create().superRefine((n, s) => {
  var i, a;
  if (!t(n)) {
    const o = typeof e == "function" ? e(n) : e, c = (a = (i = o.fatal) !== null && i !== void 0 ? i : r) !== null && a !== void 0 ? a : !0, l = typeof o == "string" ? { message: o } : o;
    s.addIssue({ code: "custom", ...l, fatal: c });
  }
}) : zs.create(), e5 = {
  object: ft.lazycreate
};
var pe;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline";
})(pe || (pe = {}));
const t5 = (t, e = {
  message: `Input not instance of ${t.name}`
}) => qf((r) => r instanceof t, e), Vf = kr.create, Zf = Nn.create, r5 = ea.create, n5 = Rn.create, Kf = wi.create, s5 = ts.create, i5 = Yo.create, o5 = _i.create, a5 = bi.create, c5 = zs.create, l5 = Jn.create, u5 = fn.create, d5 = Jo.create, h5 = Rr.create, f5 = ft.create, p5 = ft.strictCreate, g5 = Ei.create, y5 = Pa.create, m5 = Si.create, v5 = Gr.create, w5 = xi.create, _5 = Xo.create, b5 = rs.create, E5 = ks.create, S5 = Ii.create, x5 = Oi.create, I5 = An.create, O5 = Ti.create, T5 = Us.create, qd = Mr.create, C5 = ln.create, k5 = ns.create, P5 = Mr.createWithPreprocess, N5 = oo.create, R5 = () => Vf().optional(), A5 = () => Zf().optional(), j5 = () => Kf().optional(), L5 = {
  string: (t) => kr.create({ ...t, coerce: !0 }),
  number: (t) => Nn.create({ ...t, coerce: !0 }),
  boolean: (t) => wi.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => Rn.create({ ...t, coerce: !0 }),
  date: (t) => ts.create({ ...t, coerce: !0 })
}, M5 = _e;
var Ur = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: vi,
  setErrorMap: $S,
  getErrorMap: Fo,
  makeIssue: Bo,
  EMPTY_PATH: qS,
  addIssueToContext: se,
  ParseStatus: Yt,
  INVALID: _e,
  DIRTY: zf,
  OK: ir,
  isAborted: kc,
  isDirty: Pc,
  isValid: Ho,
  isAsync: Go,
  get util() {
    return Je;
  },
  get objectUtil() {
    return Cc;
  },
  ZodParsedType: te,
  getParsedType: xn,
  ZodType: Re,
  ZodString: kr,
  ZodNumber: Nn,
  ZodBigInt: Rn,
  ZodBoolean: wi,
  ZodDate: ts,
  ZodSymbol: Yo,
  ZodUndefined: _i,
  ZodNull: bi,
  ZodAny: zs,
  ZodUnknown: Jn,
  ZodNever: fn,
  ZodVoid: Jo,
  ZodArray: Rr,
  ZodObject: ft,
  ZodUnion: Ei,
  ZodDiscriminatedUnion: Pa,
  ZodIntersection: Si,
  ZodTuple: Gr,
  ZodRecord: xi,
  ZodMap: Xo,
  ZodSet: rs,
  ZodFunction: ks,
  ZodLazy: Ii,
  ZodLiteral: Oi,
  ZodEnum: An,
  ZodNativeEnum: Ti,
  ZodPromise: Us,
  ZodEffects: Mr,
  ZodTransformer: Mr,
  ZodOptional: ln,
  ZodNullable: ns,
  ZodDefault: Ci,
  ZodCatch: Qo,
  ZodNaN: ea,
  BRAND: QS,
  ZodBranded: $f,
  ZodPipeline: oo,
  custom: qf,
  Schema: Re,
  ZodSchema: Re,
  late: e5,
  get ZodFirstPartyTypeKind() {
    return pe;
  },
  coerce: L5,
  any: c5,
  array: h5,
  bigint: n5,
  boolean: Kf,
  date: s5,
  discriminatedUnion: y5,
  effect: qd,
  enum: I5,
  function: E5,
  instanceof: t5,
  intersection: m5,
  lazy: S5,
  literal: x5,
  map: _5,
  nan: r5,
  nativeEnum: O5,
  never: u5,
  null: a5,
  nullable: k5,
  number: Zf,
  object: f5,
  oboolean: j5,
  onumber: A5,
  optional: C5,
  ostring: R5,
  pipeline: N5,
  preprocess: P5,
  promise: T5,
  record: w5,
  set: b5,
  strictObject: p5,
  string: Vf,
  symbol: i5,
  transformer: qd,
  tuple: v5,
  undefined: o5,
  union: g5,
  unknown: l5,
  void: d5,
  NEVER: M5,
  ZodIssueCode: F,
  quotelessJson: US,
  ZodError: Nr
});
const D5 = /^aleo1[a-z0-9]{58}$/i, z5 = /^AViewKey1[a-z0-9]{44}$/i, U5 = /^APrivateKey1[a-z0-9]{47}$/i, $5 = /^at1[a-z0-9]{58}$/i, q5 = /^\d+field$/, V5 = /^\d+u32$/, Z5 = /^\d+u64$/;
Ur.string().regex(D5);
Ur.string().regex(z5);
Ur.string().regex(U5);
Ur.string().regex($5);
Ur.string().regex(q5);
Ur.string().regex(V5);
Ur.string().regex(Z5);
var Vd;
(function(t) {
  t.Record = "record", t.OutputRecord = "outputRecord", t.Public = "public", t.Private = "private", t.Constant = "constant", t.Future = "future", t.ExternalRecord = "external_record";
})(Vd || (Vd = {}));
var Rc;
(function(t) {
  t.Deploy = "Deploy", t.Execute = "Execute", t.Send = "Send", t.Receive = "Receive", t.Join = "Join", t.Split = "Split", t.Shield = "Shield", t.Unshield = "Unshield";
})(Rc || (Rc = {}));
var Ac;
(function(t) {
  t.Creating = "Creating", t.Pending = "Pending", t.Settled = "Settled", t.Failed = "Failed";
})(Ac || (Ac = {}));
var jc;
(function(t) {
  t.Private = "Private", t.Public = "Public";
})(jc || (jc = {}));
var Lc;
(function(t) {
  t.AleoTestnet = "AleoTestnet", t.AleoMainnet = "AleoMainnet";
})(Lc || (Lc = {}));
var Zd;
(function(t) {
  t[t.ALEO = 0] = "ALEO";
})(Zd || (Zd = {}));
Ur.nativeEnum(Rc);
Ur.nativeEnum(Ac);
Ur.nativeEnum(Lc);
Ur.nativeEnum(jc);
var Mc = { exports: {} }, Xa, Kd;
function K5() {
  if (Kd)
    return Xa;
  Kd = 1;
  var t = 1e3, e = t * 60, r = e * 60, n = r * 24, s = n * 7, i = n * 365.25;
  Xa = function(u, f) {
    f = f || {};
    var p = typeof u;
    if (p === "string" && u.length > 0)
      return a(u);
    if (p === "number" && isFinite(u))
      return f.long ? c(u) : o(u);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(u)
    );
  };
  function a(u) {
    if (u = String(u), !(u.length > 100)) {
      var f = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        u
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
  function o(u) {
    var f = Math.abs(u);
    return f >= n ? Math.round(u / n) + "d" : f >= r ? Math.round(u / r) + "h" : f >= e ? Math.round(u / e) + "m" : f >= t ? Math.round(u / t) + "s" : u + "ms";
  }
  function c(u) {
    var f = Math.abs(u);
    return f >= n ? l(u, f, n, "day") : f >= r ? l(u, f, r, "hour") : f >= e ? l(u, f, e, "minute") : f >= t ? l(u, f, t, "second") : u + " ms";
  }
  function l(u, f, p, m) {
    var _ = f >= p * 1.5;
    return Math.round(u / p) + " " + m + (_ ? "s" : "");
  }
  return Xa;
}
function W5(t) {
  r.debug = r, r.default = r, r.coerce = c, r.disable = i, r.enable = s, r.enabled = a, r.humanize = K5(), r.destroy = l, Object.keys(t).forEach((u) => {
    r[u] = t[u];
  }), r.names = [], r.skips = [], r.formatters = {};
  function e(u) {
    let f = 0;
    for (let p = 0; p < u.length; p++)
      f = (f << 5) - f + u.charCodeAt(p), f |= 0;
    return r.colors[Math.abs(f) % r.colors.length];
  }
  r.selectColor = e;
  function r(u) {
    let f, p = null, m, _;
    function E(...T) {
      if (!E.enabled)
        return;
      const M = E, v = Number(/* @__PURE__ */ new Date()), O = v - (f || v);
      M.diff = O, M.prev = f, M.curr = v, f = v, T[0] = r.coerce(T[0]), typeof T[0] != "string" && T.unshift("%O");
      let b = 0;
      T[0] = T[0].replace(/%([a-zA-Z%])/g, (x, y) => {
        if (x === "%%")
          return "%";
        b++;
        const d = r.formatters[y];
        if (typeof d == "function") {
          const g = T[b];
          x = d.call(M, g), T.splice(b, 1), b--;
        }
        return x;
      }), r.formatArgs.call(M, T), (M.log || r.log).apply(M, T);
    }
    return E.namespace = u, E.useColors = r.useColors(), E.color = r.selectColor(u), E.extend = n, E.destroy = r.destroy, Object.defineProperty(E, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => p !== null ? p : (m !== r.namespaces && (m = r.namespaces, _ = r.enabled(u)), _),
      set: (T) => {
        p = T;
      }
    }), typeof r.init == "function" && r.init(E), E;
  }
  function n(u, f) {
    const p = r(this.namespace + (typeof f > "u" ? ":" : f) + u);
    return p.log = this.log, p;
  }
  function s(u) {
    r.save(u), r.namespaces = u, r.names = [], r.skips = [];
    let f;
    const p = (typeof u == "string" ? u : "").split(/[\s,]+/), m = p.length;
    for (f = 0; f < m; f++)
      p[f] && (u = p[f].replace(/\*/g, ".*?"), u[0] === "-" ? r.skips.push(new RegExp("^" + u.slice(1) + "$")) : r.names.push(new RegExp("^" + u + "$")));
  }
  function i() {
    const u = [
      ...r.names.map(o),
      ...r.skips.map(o).map((f) => "-" + f)
    ].join(",");
    return r.enable(""), u;
  }
  function a(u) {
    if (u[u.length - 1] === "*")
      return !0;
    let f, p;
    for (f = 0, p = r.skips.length; f < p; f++)
      if (r.skips[f].test(u))
        return !1;
    for (f = 0, p = r.names.length; f < p; f++)
      if (r.names[f].test(u))
        return !0;
    return !1;
  }
  function o(u) {
    return u.toString().substring(2, u.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function c(u) {
    return u instanceof Error ? u.stack || u.message : u;
  }
  function l() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return r.enable(r.load()), r;
}
var F5 = W5;
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
    const l = "color: " + this.color;
    c.splice(1, 0, l, "color: inherit");
    let u = 0, f = 0;
    c[0].replace(/%[a-zA-Z%]/g, (p) => {
      p !== "%%" && (u++, p === "%c" && (f = u));
    }), c.splice(f, 0, l);
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
  t.exports = F5(e);
  const { formatters: o } = t.exports;
  o.j = function(c) {
    try {
      return JSON.stringify(c);
    } catch (l) {
      return "[UnexpectedJSONParseError]: " + l.message;
    }
  };
})(Mc, Mc.exports);
var B5 = Mc.exports;
const H5 = /* @__PURE__ */ ma(B5), Na = H5("wallet:sdk");
Na.enabled = !0;
const Wf = async (t) => {
  if (!!!(window != null && window.aleo.puzzleWalletClient))
    return localStorage.setItem("puzzle-hasDesktopConnection", "false"), !1;
  try {
    return await window.aleo.puzzleWalletClient.isConnected.query(
      { sessionTopic: t }
    ) ? (localStorage.setItem("puzzle-hasDesktopConnection", "true"), !0) : (localStorage.setItem("puzzle-hasDesktopConnection", "false"), !1);
  } catch (r) {
    return console.warn(r), localStorage.setItem("puzzle-hasDesktopConnection", "false"), !1;
  }
}, hs = () => !(window != null && window.aleo.puzzleWalletClient) ? !1 : localStorage.getItem(
  "puzzle-hasDesktopConnection"
) === "true";
function F6() {
  const e = !!Sr(), { data: r, error: n, loading: s, setData: i, setError: a, setLoading: o } = al(), [c] = hn((u) => [u.setAccount]);
  async function l() {
    try {
      o(!0), a(void 0);
      const f = await (await Mf()).connect({
        requiredNamespaces: {
          aleo: {
            methods: fS,
            chains: Rl,
            events: pS
          }
        }
      });
      i(f), await Wf(f.topic);
      const p = f.namespaces.aleo.accounts[0].split(":");
      return c({
        network: p[0],
        chainId: p[1],
        address: p[2],
        shortenedAddress: nc(p[2])
      }), Lf.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), f;
    } catch (u) {
      throw a(u), localStorage.removeItem("puzzle-hasDesktopConnection"), u;
    } finally {
      o(!1);
    }
  }
  return { data: r, error: n, loading: s, isConnected: e, connect: l };
}
const B6 = () => {
  const t = Sr(), {
    request: e,
    data: r,
    error: n,
    loading: s
  } = Ji({
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
}, H6 = (t) => {
  Na("useDecrypt", t);
  const e = Sr(), {
    request: r,
    data: n,
    error: s,
    loading: i
  } = Ji({
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
function G6() {
  const t = Sr(), [e] = hn((o) => [o.onDisconnect]), { error: r, loading: n, setError: s, setLoading: i } = al();
  async function a() {
    if (!t || n) {
      t || e();
      return;
    }
    try {
      i(!0), s(void 0);
      try {
        await (await Mf()).disconnect({
          topic: t.topic,
          reason: ol("USER_DISCONNECTED")
        }), Lf.emit("session_change");
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
const Y6 = ({ id: t, address: e, multisig: r = !1 }) => {
  const n = Sr(), [s] = hn((E) => [E.account]), i = t !== void 0 && t !== "" && !!n && !!s && (r ? !!e : !0), {
    refetch: a,
    data: o,
    error: c,
    isLoading: l
  } = Yi({
    queryKey: [
      "useEvent",
      s == null ? void 0 : s.address,
      e,
      r,
      t,
      n == null ? void 0 : n.topic
    ],
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
  Gi(({ params: E, topic: T }) => {
    const M = E.event.name, v = E.event.address ?? E.event.data.address;
    (t && M === "selectedAccountSynced" && !r || M === "sharedAccountSynced" && r && v === e) && a();
  });
  const u = !!n && !!s && !!t && (r ? !!e : !0);
  Lr(() => {
    u && !l && a();
  }, [u]);
  const f = () => {
    u && !l && a();
  }, p = c ? c.message : o && o.error, m = o, _ = m == null ? void 0 : m.event;
  return { fetchEvent: f, event: _, error: p, loading: l };
}, J6 = ({ filter: t, page: e }) => {
  const r = Sr(), [n] = hn((_) => [_.account]);
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const {
    refetch: s,
    data: i,
    error: a,
    isLoading: o
  } = Yi({
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
  Gi(({ id: _, params: E, topic: T }) => {
    E.event.name === "selectedAccountSynced" && s();
  });
  const c = !!r && !!n;
  Lr(() => {
    c && !o && s();
  }, [c]);
  const l = () => {
    c && !o && s();
  }, u = a ? a.message : i && i.error, f = i, p = f == null ? void 0 : f.events, m = (f == null ? void 0 : f.pageCount) ?? 0;
  return { fetchPage: l, events: p, error: u, loading: o, page: e, pageCount: m };
}, X6 = (t) => {
  const e = Sr(), {
    request: r,
    data: n,
    error: s,
    loading: i
  } = Ji({
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
}, Q6 = (t) => {
  try {
    return JSON.stringify(t, null, 2).replaceAll('"', "") ?? "";
  } catch {
    return "";
  }
}, e3 = ({
  address: t,
  multisig: e = !1,
  filter: r,
  page: n
}) => {
  const s = Sr(), [i] = hn((T) => [T.account]), {
    refetch: a,
    data: o,
    error: c,
    isLoading: l
  } = Yi({
    queryKey: [
      "useRecords",
      i == null ? void 0 : i.address,
      t,
      e,
      r,
      n,
      s == null ? void 0 : s.topic
    ],
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
  }), u = !!s && !!i && (e ? !!t : !0);
  Gi(({ params: T }) => {
    const M = T.event.name, v = T.event.address ?? T.event.data.address;
    (M === "selectedAccountSynced" && !e || M === "sharedAccountSynced" && e && v === t) && a();
  });
  const f = () => {
    u && !l && (Na("useRecords refetching...", [t, e, r, n]), a());
  }, p = c ? c.message : o && o.error, m = o, _ = m == null ? void 0 : m.records, E = (m == null ? void 0 : m.pageCount) ?? 0;
  return { fetchPage: f, records: _, error: p, loading: l, page: n, pageCount: E };
}, t3 = (t) => {
  const e = Sr(), r = t == null ? void 0 : t.inputs.map((u) => typeof u == "string" ? u : u.plaintext), {
    request: n,
    data: s,
    error: i,
    loading: a
  } = Ji({
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
    t && e && !a && (Na("useCreateEvent requesting...", t), n());
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
var Dc;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(Dc || (Dc = {}));
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
]), G5 = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
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
            const l = a.path[c];
            c === a.path.length - 1 ? (o[l] = o[l] || { _errors: [] }, o[l]._errors.push(r(a))) : o[l] = o[l] || { _errors: [] }, o = o[l], c++;
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
let Ff = ki;
function Y5(t) {
  Ff = t;
}
function ta() {
  return Ff;
}
const ra = (t) => {
  const { data: e, path: r, errorMaps: n, issueData: s } = t, i = [...r, ...s.path || []], a = {
    ...s,
    path: i
  };
  let o = "";
  const c = n.filter((l) => !!l).slice().reverse();
  for (const l of c)
    o = l(a, { data: e, defaultError: o }).message;
  return {
    ...s,
    path: i,
    message: s.message || o
  };
}, J5 = [];
function ie(t, e) {
  const r = ra({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      ta(),
      ki
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
}), Bf = (t) => ({ status: "dirty", value: t }), or = (t) => ({ status: "valid", value: t }), zc = (t) => t.status === "aborted", Uc = (t) => t.status === "dirty", na = (t) => t.status === "valid", sa = (t) => typeof Promise < "u" && t instanceof Promise;
var le;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(le || (le = {}));
class Yr {
  constructor(e, r, n, s) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = n, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Wd = (t, e) => {
  if (na(e))
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
    if (sa(r))
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
    return Wd(s, i);
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
    }, s = this._parse({ data: e, path: n.path, parent: n }), i = await (sa(s) ? s : Promise.resolve(s));
    return Wd(n, i);
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
    return un.create(this, this._def);
  }
  nullable() {
    return os.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return jr.create(this, this._def);
  }
  promise() {
    return qs.create(this, this._def);
  }
  or(e) {
    return Ai.create([this, e], this._def);
  }
  and(e) {
    return ji.create(this, e, this._def);
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
    return new Gf({
      typeName: ge.ZodBranded,
      type: this,
      ...Ie(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new ca({
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
    return ao.create(this, e);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const X5 = /^c[^\s-]{8,}$/i, Q5 = /^[a-z][a-z0-9]*$/, ex = /[0-9A-HJKMNP-TV-Z]{26}/, tx = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, rx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, nx = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u"), sx = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, ix = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, ox = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function ax(t, e) {
  return !!((e === "v4" || !e) && sx.test(t) || (e === "v6" || !e) && ix.test(t));
}
class Pr extends Ae {
  constructor() {
    super(...arguments), this._regex = (e, r, n) => this.refinement((s) => e.test(s), {
      validation: r,
      code: B.invalid_string,
      ...le.errToObj(n)
    }), this.nonempty = (e) => this.min(1, le.errToObj(e)), this.trim = () => new Pr({
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
        rx.test(e.data) || (s = this._getOrReturnCtx(e, s), ie(s, {
          validation: "email",
          code: B.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "emoji")
        nx.test(e.data) || (s = this._getOrReturnCtx(e, s), ie(s, {
          validation: "emoji",
          code: B.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "uuid")
        tx.test(e.data) || (s = this._getOrReturnCtx(e, s), ie(s, {
          validation: "uuid",
          code: B.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "cuid")
        X5.test(e.data) || (s = this._getOrReturnCtx(e, s), ie(s, {
          validation: "cuid",
          code: B.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "cuid2")
        Q5.test(e.data) || (s = this._getOrReturnCtx(e, s), ie(s, {
          validation: "cuid2",
          code: B.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "ulid")
        ex.test(e.data) || (s = this._getOrReturnCtx(e, s), ie(s, {
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
        }), n.dirty()) : i.kind === "datetime" ? ox(i).test(e.data) || (s = this._getOrReturnCtx(e, s), ie(s, {
          code: B.invalid_string,
          validation: "datetime",
          message: i.message
        }), n.dirty()) : i.kind === "ip" ? ax(e.data, i.version) || (s = this._getOrReturnCtx(e, s), ie(s, {
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
    return this._addCheck({ kind: "email", ...le.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...le.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...le.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...le.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...le.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...le.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...le.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...le.errToObj(e) });
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
      ...le.errToObj(e == null ? void 0 : e.message)
    });
  }
  regex(e, r) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...le.errToObj(r)
    });
  }
  includes(e, r) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: r == null ? void 0 : r.position,
      ...le.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(e, r) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...le.errToObj(r)
    });
  }
  endsWith(e, r) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...le.errToObj(r)
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...le.errToObj(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...le.errToObj(r)
    });
  }
  length(e, r) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...le.errToObj(r)
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
function cx(t, e) {
  const r = (t.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, s = r > n ? r : n, i = parseInt(t.toFixed(s).replace(".", "")), a = parseInt(e.toFixed(s).replace(".", ""));
  return i % a / Math.pow(10, s);
}
class jn extends Ae {
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
      }), s.dirty()) : i.kind === "multipleOf" ? cx(e.data, i.value) !== 0 && (n = this._getOrReturnCtx(e, n), ie(n, {
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
    return this.setLimit("min", e, !0, le.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, le.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, le.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, le.toString(r));
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
          message: le.toString(s)
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
  int(e) {
    return this._addCheck({
      kind: "int",
      message: le.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: le.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: le.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: le.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: le.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: le.toString(r)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: le.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: le.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: le.toString(e)
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
jn.create = (t) => new jn({
  checks: [],
  typeName: ge.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...Ie(t)
});
class Ln extends Ae {
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
    return this.setLimit("min", e, !0, le.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, le.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, le.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, le.toString(r));
  }
  setLimit(e, r, n, s) {
    return new Ln({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: le.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Ln({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: le.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: le.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: le.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: le.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: le.toString(r)
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
Ln.create = (t) => {
  var e;
  return new Ln({
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
class ss extends Ae {
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
    return new ss({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: le.toString(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: le.toString(r)
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
ss.create = (t) => new ss({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: ge.ZodDate,
  ...Ie(t)
});
class ia extends Ae {
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
ia.create = (t) => new ia({
  typeName: ge.ZodSymbol,
  ...Ie(t)
});
class Ni extends Ae {
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
Ni.create = (t) => new Ni({
  typeName: ge.ZodUndefined,
  ...Ie(t)
});
class Ri extends Ae {
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
Ri.create = (t) => new Ri({
  typeName: ge.ZodNull,
  ...Ie(t)
});
class $s extends Ae {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return or(e.data);
  }
}
$s.create = (t) => new $s({
  typeName: ge.ZodAny,
  ...Ie(t)
});
class Xn extends Ae {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return or(e.data);
  }
}
Xn.create = (t) => new Xn({
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
class oa extends Ae {
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
oa.create = (t) => new oa({
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
      minLength: { value: e, message: le.toString(r) }
    });
  }
  max(e, r) {
    return new jr({
      ...this._def,
      maxLength: { value: e, message: le.toString(r) }
    });
  }
  length(e, r) {
    return new jr({
      ...this._def,
      exactLength: { value: e, message: le.toString(r) }
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
function Ss(t) {
  if (t instanceof pt) {
    const e = {};
    for (const r in t.shape) {
      const n = t.shape[r];
      e[r] = un.create(Ss(n));
    }
    return new pt({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof jr ? new jr({
      ...t._def,
      type: Ss(t.element)
    }) : t instanceof un ? un.create(Ss(t.unwrap())) : t instanceof os ? os.create(Ss(t.unwrap())) : t instanceof Jr ? Jr.create(t.items.map((e) => Ss(e))) : t;
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
      const l = this._getOrReturnCtx(e);
      return ie(l, {
        code: B.invalid_type,
        expected: re.object,
        received: l.parsedType
      }), ve;
    }
    const { status: n, ctx: s } = this._processInputParams(e), { shape: i, keys: a } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof pn && this._def.unknownKeys === "strip"))
      for (const l in s.data)
        a.includes(l) || o.push(l);
    const c = [];
    for (const l of a) {
      const u = i[l], f = s.data[l];
      c.push({
        key: { status: "valid", value: l },
        value: u._parse(new Yr(s, f, s.path, l)),
        alwaysSet: l in s.data
      });
    }
    if (this._def.catchall instanceof pn) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const u of o)
          c.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: s.data[u] }
          });
      else if (l === "strict")
        o.length > 0 && (ie(s, {
          code: B.unrecognized_keys,
          keys: o
        }), n.dirty());
      else if (l !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const u of o) {
        const f = s.data[u];
        c.push({
          key: { status: "valid", value: u },
          value: l._parse(
            new Yr(s, f, s.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in s.data
        });
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const l = [];
      for (const u of c) {
        const f = await u.key;
        l.push({
          key: f,
          value: await u.value,
          alwaysSet: u.alwaysSet
        });
      }
      return l;
    }).then((l) => Jt.mergeObjectSync(n, l)) : Jt.mergeObjectSync(n, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return le.errToObj, new pt({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (r, n) => {
          var s, i, a, o;
          const c = (a = (i = (s = this._def).errorMap) === null || i === void 0 ? void 0 : i.call(s, r, n).message) !== null && a !== void 0 ? a : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (o = le.errToObj(e).message) !== null && o !== void 0 ? o : c
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
    return Ss(this);
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
        for (; i instanceof un; )
          i = i._def.innerType;
        r[n] = i;
      }
    }), new pt({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return Hf(Xe.objectKeys(this.shape));
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
class Ai extends Ae {
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
        const l = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, u = c._parseSync({
          data: r.data,
          path: r.path,
          parent: l
        });
        if (u.status === "valid")
          return u;
        u.status === "dirty" && !i && (i = { result: u, ctx: l }), l.common.issues.length && a.push(l.common.issues);
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
Ai.create = (t, e) => new Ai({
  options: t,
  typeName: ge.ZodUnion,
  ...Ie(e)
});
const jo = (t) => t instanceof Mi ? jo(t.schema) : t instanceof Dr ? jo(t.innerType()) : t instanceof Di ? [t.value] : t instanceof Mn ? t.options : t instanceof zi ? Object.keys(t.enum) : t instanceof Ui ? jo(t._def.innerType) : t instanceof Ni ? [void 0] : t instanceof Ri ? [null] : null;
class Ra extends Ae {
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
      const a = jo(i.shape[e]);
      if (!a)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const o of a) {
        if (s.has(o))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        s.set(o, i);
      }
    }
    return new Ra({
      typeName: ge.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: s,
      ...Ie(n)
    });
  }
}
function $c(t, e) {
  const r = In(t), n = In(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === re.object && n === re.object) {
    const s = Xe.objectKeys(e), i = Xe.objectKeys(t).filter((o) => s.indexOf(o) !== -1), a = { ...t, ...e };
    for (const o of i) {
      const c = $c(t[o], e[o]);
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
      const a = t[i], o = e[i], c = $c(a, o);
      if (!c.valid)
        return { valid: !1 };
      s.push(c.data);
    }
    return { valid: !0, data: s };
  } else
    return r === re.date && n === re.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class ji extends Ae {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), s = (i, a) => {
      if (zc(i) || zc(a))
        return ve;
      const o = $c(i.value, a.value);
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
ji.create = (t, e, r) => new ji({
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
class Li extends Ae {
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
    return r instanceof Ae ? new Li({
      keyType: e,
      valueType: r,
      typeName: ge.ZodRecord,
      ...Ie(n)
    }) : new Li({
      keyType: Pr.create(),
      valueType: e,
      typeName: ge.ZodRecord,
      ...Ie(r)
    });
  }
}
class aa extends Ae {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== re.map)
      return ie(n, {
        code: B.invalid_type,
        expected: re.map,
        received: n.parsedType
      }), ve;
    const s = this._def.keyType, i = this._def.valueType, a = [...n.data.entries()].map(([o, c], l) => ({
      key: s._parse(new Yr(n, o, n.path, [l, "key"])),
      value: i._parse(new Yr(n, c, n.path, [l, "value"]))
    }));
    if (n.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of a) {
          const l = await c.key, u = await c.value;
          if (l.status === "aborted" || u.status === "aborted")
            return ve;
          (l.status === "dirty" || u.status === "dirty") && r.dirty(), o.set(l.value, u.value);
        }
        return { status: r.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const c of a) {
        const l = c.key, u = c.value;
        if (l.status === "aborted" || u.status === "aborted")
          return ve;
        (l.status === "dirty" || u.status === "dirty") && r.dirty(), o.set(l.value, u.value);
      }
      return { status: r.value, value: o };
    }
  }
}
aa.create = (t, e, r) => new aa({
  valueType: e,
  keyType: t,
  typeName: ge.ZodMap,
  ...Ie(r)
});
class is extends Ae {
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
      const l = /* @__PURE__ */ new Set();
      for (const u of c) {
        if (u.status === "aborted")
          return ve;
        u.status === "dirty" && r.dirty(), l.add(u.value);
      }
      return { status: r.value, value: l };
    }
    const o = [...n.data.values()].map((c, l) => i._parse(new Yr(n, c, n.path, l)));
    return n.common.async ? Promise.all(o).then((c) => a(c)) : a(o);
  }
  min(e, r) {
    return new is({
      ...this._def,
      minSize: { value: e, message: le.toString(r) }
    });
  }
  max(e, r) {
    return new is({
      ...this._def,
      maxSize: { value: e, message: le.toString(r) }
    });
  }
  size(e, r) {
    return this.min(e, r).max(e, r);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
is.create = (t, e) => new is({
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
      return ra({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          ta(),
          ki
        ].filter((l) => !!l),
        issueData: {
          code: B.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function s(o, c) {
      return ra({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          ta(),
          ki
        ].filter((l) => !!l),
        issueData: {
          code: B.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const i = { errorMap: r.common.contextualErrorMap }, a = r.data;
    return this._def.returns instanceof qs ? or(async (...o) => {
      const c = new Ar([]), l = await this._def.args.parseAsync(o, i).catch((p) => {
        throw c.addIssue(n(o, p)), c;
      }), u = await a(...l);
      return await this._def.returns._def.type.parseAsync(u, i).catch((p) => {
        throw c.addIssue(s(u, p)), c;
      });
    }) : or((...o) => {
      const c = this._def.args.safeParse(o, i);
      if (!c.success)
        throw new Ar([n(o, c.error)]);
      const l = a(...c.data), u = this._def.returns.safeParse(l, i);
      if (!u.success)
        throw new Ar([s(l, u.error)]);
      return u.data;
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
      args: Jr.create(e).rest(Xn.create())
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
      args: e || Jr.create([]).rest(Xn.create()),
      returns: r || Xn.create(),
      typeName: ge.ZodFunction,
      ...Ie(n)
    });
  }
}
class Mi extends Ae {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Mi.create = (t, e) => new Mi({
  getter: t,
  typeName: ge.ZodLazy,
  ...Ie(e)
});
class Di extends Ae {
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
Di.create = (t, e) => new Di({
  value: t,
  typeName: ge.ZodLiteral,
  ...Ie(e)
});
function Hf(t, e) {
  return new Mn({
    values: t,
    typeName: ge.ZodEnum,
    ...Ie(e)
  });
}
class Mn extends Ae {
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
    return Mn.create(e);
  }
  exclude(e) {
    return Mn.create(this.options.filter((r) => !e.includes(r)));
  }
}
Mn.create = Hf;
class zi extends Ae {
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
zi.create = (t, e) => new zi({
  values: t,
  typeName: ge.ZodNativeEnum,
  ...Ie(e)
});
class qs extends Ae {
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
qs.create = (t, e) => new qs({
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
        if (!na(a))
          return a;
        const o = s.transform(a.value, i);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => na(a) ? Promise.resolve(s.transform(a.value, i)).then((o) => ({ status: r.value, value: o })) : a);
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
class un extends Ae {
  _parse(e) {
    return this._getType(e) === re.undefined ? or(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
un.create = (t, e) => new un({
  innerType: t,
  typeName: ge.ZodOptional,
  ...Ie(e)
});
class os extends Ae {
  _parse(e) {
    return this._getType(e) === re.null ? or(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
os.create = (t, e) => new os({
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
class ca extends Ae {
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
    return sa(s) ? s.then((i) => ({
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
ca.create = (t, e) => new ca({
  innerType: t,
  typeName: ge.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...Ie(e)
});
class la extends Ae {
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
la.create = (t) => new la({
  typeName: ge.ZodNaN,
  ...Ie(t)
});
const lx = Symbol("zod_brand");
class Gf extends Ae {
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
class ao extends Ae {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return i.status === "aborted" ? ve : i.status === "dirty" ? (r.dirty(), Bf(i.value)) : this._def.out._parseAsync({
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
    return new ao({
      in: e,
      out: r,
      typeName: ge.ZodPipeline
    });
  }
}
const Yf = (t, e = {}, r) => t ? $s.create().superRefine((n, s) => {
  var i, a;
  if (!t(n)) {
    const o = typeof e == "function" ? e(n) : e, c = (a = (i = o.fatal) !== null && i !== void 0 ? i : r) !== null && a !== void 0 ? a : !0, l = typeof o == "string" ? { message: o } : o;
    s.addIssue({ code: "custom", ...l, fatal: c });
  }
}) : $s.create(), ux = {
  object: pt.lazycreate
};
var ge;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline";
})(ge || (ge = {}));
const dx = (t, e = {
  message: `Input not instance of ${t.name}`
}) => Yf((r) => r instanceof t, e), Jf = Pr.create, Xf = jn.create, hx = la.create, fx = Ln.create, Qf = Pi.create, px = ss.create, gx = ia.create, yx = Ni.create, mx = Ri.create, vx = $s.create, wx = Xn.create, _x = pn.create, bx = oa.create, Ex = jr.create, Sx = pt.create, xx = pt.strictCreate, Ix = Ai.create, Ox = Ra.create, Tx = ji.create, Cx = Jr.create, kx = Li.create, Px = aa.create, Nx = is.create, Rx = Ps.create, Ax = Mi.create, jx = Di.create, Lx = Mn.create, Mx = zi.create, Dx = qs.create, Fd = Dr.create, zx = un.create, Ux = os.create, $x = Dr.createWithPreprocess, qx = ao.create, Vx = () => Jf().optional(), Zx = () => Xf().optional(), Kx = () => Qf().optional(), Wx = {
  string: (t) => Pr.create({ ...t, coerce: !0 }),
  number: (t) => jn.create({ ...t, coerce: !0 }),
  boolean: (t) => Pi.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => Ln.create({ ...t, coerce: !0 }),
  date: (t) => ss.create({ ...t, coerce: !0 })
}, Fx = ve;
var $r = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: ki,
  setErrorMap: Y5,
  getErrorMap: ta,
  makeIssue: ra,
  EMPTY_PATH: J5,
  addIssueToContext: ie,
  ParseStatus: Jt,
  INVALID: ve,
  DIRTY: Bf,
  OK: or,
  isAborted: zc,
  isDirty: Uc,
  isValid: na,
  isAsync: sa,
  get util() {
    return Xe;
  },
  get objectUtil() {
    return Dc;
  },
  ZodParsedType: re,
  getParsedType: In,
  ZodType: Ae,
  ZodString: Pr,
  ZodNumber: jn,
  ZodBigInt: Ln,
  ZodBoolean: Pi,
  ZodDate: ss,
  ZodSymbol: ia,
  ZodUndefined: Ni,
  ZodNull: Ri,
  ZodAny: $s,
  ZodUnknown: Xn,
  ZodNever: pn,
  ZodVoid: oa,
  ZodArray: jr,
  ZodObject: pt,
  ZodUnion: Ai,
  ZodDiscriminatedUnion: Ra,
  ZodIntersection: ji,
  ZodTuple: Jr,
  ZodRecord: Li,
  ZodMap: aa,
  ZodSet: is,
  ZodFunction: Ps,
  ZodLazy: Mi,
  ZodLiteral: Di,
  ZodEnum: Mn,
  ZodNativeEnum: zi,
  ZodPromise: qs,
  ZodEffects: Dr,
  ZodTransformer: Dr,
  ZodOptional: un,
  ZodNullable: os,
  ZodDefault: Ui,
  ZodCatch: ca,
  ZodNaN: la,
  BRAND: lx,
  ZodBranded: Gf,
  ZodPipeline: ao,
  custom: Yf,
  Schema: Ae,
  ZodSchema: Ae,
  late: ux,
  get ZodFirstPartyTypeKind() {
    return ge;
  },
  coerce: Wx,
  any: vx,
  array: Ex,
  bigint: fx,
  boolean: Qf,
  date: px,
  discriminatedUnion: Ox,
  effect: Fd,
  enum: Lx,
  function: Rx,
  instanceof: dx,
  intersection: Tx,
  lazy: Ax,
  literal: jx,
  map: Px,
  nan: hx,
  nativeEnum: Mx,
  never: _x,
  null: mx,
  nullable: Ux,
  number: Xf,
  object: Sx,
  oboolean: Kx,
  onumber: Zx,
  optional: zx,
  ostring: Vx,
  pipeline: qx,
  preprocess: $x,
  promise: Dx,
  record: kx,
  set: Nx,
  strictObject: xx,
  string: Jf,
  symbol: gx,
  transformer: Fd,
  tuple: Cx,
  undefined: yx,
  union: Ix,
  unknown: wx,
  void: bx,
  NEVER: Fx,
  ZodIssueCode: B,
  quotelessJson: G5,
  ZodError: Ar
});
const Al = /^aleo1[a-z0-9]{58}$/i, Bx = /^AViewKey1[a-z0-9]{44}$/i, Hx = /^APrivateKey1[a-z0-9]{47}$/i, Gx = /^at1[a-z0-9]{58}$/i, Yx = /^\d+field$/, Jx = /^\d+u32$/, Xx = /^\d+u64$/, r3 = $r.string().regex(Al), n3 = $r.string().regex(Bx), s3 = $r.string().regex(Hx), i3 = $r.string().regex(Gx), o3 = $r.string().regex(Yx), a3 = $r.string().regex(Jx), c3 = $r.string().regex(Xx);
var Bd;
(function(t) {
  t.Record = "record", t.OutputRecord = "outputRecord", t.Public = "public", t.Private = "private", t.Constant = "constant", t.Future = "future", t.ExternalRecord = "external_record";
})(Bd || (Bd = {}));
var qc;
(function(t) {
  t.Deploy = "Deploy", t.Execute = "Execute", t.Send = "Send", t.Receive = "Receive", t.Join = "Join", t.Split = "Split", t.Shield = "Shield", t.Unshield = "Unshield";
})(qc || (qc = {}));
var Vc;
(function(t) {
  t.Creating = "Creating", t.Pending = "Pending", t.Settled = "Settled", t.Failed = "Failed";
})(Vc || (Vc = {}));
var Zc;
(function(t) {
  t.Private = "Private", t.Public = "Public";
})(Zc || (Zc = {}));
var Kc;
(function(t) {
  t.AleoTestnet = "AleoTestnet", t.AleoMainnet = "AleoMainnet";
})(Kc || (Kc = {}));
var Hd;
(function(t) {
  t[t.ALEO = 0] = "ALEO";
})(Hd || (Hd = {}));
const l3 = $r.nativeEnum(qc), u3 = $r.nativeEnum(Vc), d3 = $r.nativeEnum(Kc), h3 = $r.nativeEnum(Zc), ep = gg("wallet:sdk");
ep.enabled = !0;
const f3 = (t, e) => {
  const r = Sr(), {
    request: n,
    data: s,
    error: i,
    loading: a
  } = Ji({
    topic: (r == null ? void 0 : r.topic) ?? "",
    chainId: "aleo:3",
    request: {
      jsonrpc: "2.0",
      method: "requestSignature",
      params: {
        message: t,
        address: Al.test(e ?? "") ? e : void 0
      }
    }
  }), o = i ? i.message : s && s.error;
  return { requestSignature: () => {
    r && !a && (ep("useRequestSignature requesting...", [t, e]), n());
  }, response: s, loading: a, error: o };
};
var Wc = { exports: {} }, oi = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gd;
function Qx() {
  if (Gd)
    return oi;
  Gd = 1;
  var t = ah, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(o, c, l) {
    var u, f = {}, p = null, m = null;
    l !== void 0 && (p = "" + l), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (m = c.ref);
    for (u in c)
      n.call(c, u) && !i.hasOwnProperty(u) && (f[u] = c[u]);
    if (o && o.defaultProps)
      for (u in c = o.defaultProps, c)
        f[u] === void 0 && (f[u] = c[u]);
    return { $$typeof: e, type: o, key: p, ref: m, props: f, _owner: s.current };
  }
  return oi.Fragment = r, oi.jsx = a, oi.jsxs = a, oi;
}
var ai = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yd;
function eI() {
  return Yd || (Yd = 1, process.env.NODE_ENV !== "production" && function() {
    var t = ah, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), _ = Symbol.iterator, E = "@@iterator";
    function T(S) {
      if (S === null || typeof S != "object")
        return null;
      var z = _ && S[_] || S[E];
      return typeof z == "function" ? z : null;
    }
    var M = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(S) {
      {
        for (var z = arguments.length, X = new Array(z > 1 ? z - 1 : 0), fe = 1; fe < z; fe++)
          X[fe - 1] = arguments[fe];
        O("error", S, X);
      }
    }
    function O(S, z, X) {
      {
        var fe = M.ReactDebugCurrentFrame, Be = fe.getStackAddendum();
        Be !== "" && (z += "%s", X = X.concat([Be]));
        var $e = X.map(function(Ve) {
          return String(Ve);
        });
        $e.unshift("Warning: " + z), Function.prototype.apply.call(console[S], console, $e);
      }
    }
    var b = !1, x = !1, y = !1, d = !1, g = !1, P;
    P = Symbol.for("react.module.reference");
    function N(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === n || S === i || g || S === s || S === l || S === u || d || S === m || b || x || y || typeof S == "object" && S !== null && (S.$$typeof === p || S.$$typeof === f || S.$$typeof === a || S.$$typeof === o || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === P || S.getModuleId !== void 0));
    }
    function D(S, z, X) {
      var fe = S.displayName;
      if (fe)
        return fe;
      var Be = z.displayName || z.name || "";
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
        case l:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case o:
            var z = S;
            return G(z) + ".Consumer";
          case a:
            var X = S;
            return G(X._context) + ".Provider";
          case c:
            return D(S, S.render, "ForwardRef");
          case f:
            var fe = S.displayName || null;
            return fe !== null ? fe : Y(S.type) || "Memo";
          case p: {
            var Be = S, $e = Be._payload, Ve = Be._init;
            try {
              return Y(Ve($e));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, A = 0, Q, Z, $, V, U, K, ye;
    function W() {
    }
    W.__reactDisabledLog = !0;
    function de() {
      {
        if (A === 0) {
          Q = console.log, Z = console.info, $ = console.warn, V = console.error, U = console.group, K = console.groupCollapsed, ye = console.groupEnd;
          var S = {
            configurable: !0,
            enumerable: !0,
            value: W,
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
              value: V
            }),
            group: C({}, S, {
              value: U
            }),
            groupCollapsed: C({}, S, {
              value: K
            }),
            groupEnd: C({}, S, {
              value: ye
            })
          });
        }
        A < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ue = M.ReactCurrentDispatcher, L;
    function j(S, z, X) {
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
    var k = !1, h;
    {
      var I = typeof WeakMap == "function" ? WeakMap : Map;
      h = new I();
    }
    function H(S, z) {
      if (!S || k)
        return "";
      {
        var X = h.get(S);
        if (X !== void 0)
          return X;
      }
      var fe;
      k = !0;
      var Be = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $e;
      $e = ue.current, ue.current = null, de();
      try {
        if (z) {
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
            } catch (xr) {
              fe = xr;
            }
            Reflect.construct(S, [], Ve);
          } else {
            try {
              Ve.call();
            } catch (xr) {
              fe = xr;
            }
            S.call(Ve.prototype);
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
`), zt = fe.stack.split(`
`), dt = De.length - 1, vt = zt.length - 1; dt >= 1 && vt >= 0 && De[dt] !== zt[vt]; )
            vt--;
          for (; dt >= 1 && vt >= 0; dt--, vt--)
            if (De[dt] !== zt[vt]) {
              if (dt !== 1 || vt !== 1)
                do
                  if (dt--, vt--, vt < 0 || De[dt] !== zt[vt]) {
                    var kt = `
` + De[dt].replace(" at new ", " at ");
                    return S.displayName && kt.includes("<anonymous>") && (kt = kt.replace("<anonymous>", S.displayName)), typeof S == "function" && h.set(S, kt), kt;
                  }
                while (dt >= 1 && vt >= 0);
              break;
            }
        }
      } finally {
        k = !1, ue.current = $e, ne(), Error.prepareStackTrace = Be;
      }
      var mn = S ? S.displayName || S.name : "", co = mn ? j(mn) : "";
      return typeof S == "function" && h.set(S, co), co;
    }
    function ee(S, z, X) {
      return H(S, !1);
    }
    function je(S) {
      var z = S.prototype;
      return !!(z && z.isReactComponent);
    }
    function Le(S, z, X) {
      if (S == null)
        return "";
      if (typeof S == "function")
        return H(S, je(S));
      if (typeof S == "string")
        return j(S);
      switch (S) {
        case l:
          return j("Suspense");
        case u:
          return j("SuspenseList");
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case c:
            return ee(S.render);
          case f:
            return Le(S.type, z, X);
          case p: {
            var fe = S, Be = fe._payload, $e = fe._init;
            try {
              return Le($e(Be), z, X);
            } catch {
            }
          }
        }
      return "";
    }
    var Oe = Object.prototype.hasOwnProperty, Ze = {}, at = M.ReactDebugCurrentFrame;
    function tt(S) {
      if (S) {
        var z = S._owner, X = Le(S.type, S._source, z ? z.type : null);
        at.setExtraStackFrame(X);
      } else
        at.setExtraStackFrame(null);
    }
    function qe(S, z, X, fe, Be) {
      {
        var $e = Function.call.bind(Oe);
        for (var Ve in S)
          if ($e(S, Ve)) {
            var De = void 0;
            try {
              if (typeof S[Ve] != "function") {
                var zt = Error((fe || "React class") + ": " + X + " type `" + Ve + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[Ve] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw zt.name = "Invariant Violation", zt;
              }
              De = S[Ve](z, Ve, fe, X, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (dt) {
              De = dt;
            }
            De && !(De instanceof Error) && (tt(Be), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", fe || "React class", X, Ve, typeof De), tt(null)), De instanceof Error && !(De.message in Ze) && (Ze[De.message] = !0, tt(Be), v("Failed %s type: %s", X, De.message), tt(null));
          }
      }
    }
    var ze = Array.isArray;
    function Te(S) {
      return ze(S);
    }
    function Pe(S) {
      {
        var z = typeof Symbol == "function" && Symbol.toStringTag, X = z && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return X;
      }
    }
    function Ce(S) {
      try {
        return be(S), !1;
      } catch {
        return !0;
      }
    }
    function be(S) {
      return "" + S;
    }
    function we(S) {
      if (Ce(S))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Pe(S)), be(S);
    }
    var he = M.ReactCurrentOwner, Ne = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Me, me, Ue;
    Ue = {};
    function Ke(S) {
      if (Oe.call(S, "ref")) {
        var z = Object.getOwnPropertyDescriptor(S, "ref").get;
        if (z && z.isReactWarning)
          return !1;
      }
      return S.ref !== void 0;
    }
    function He(S) {
      if (Oe.call(S, "key")) {
        var z = Object.getOwnPropertyDescriptor(S, "key").get;
        if (z && z.isReactWarning)
          return !1;
      }
      return S.key !== void 0;
    }
    function Ge(S, z) {
      if (typeof S.ref == "string" && he.current && z && he.current.stateNode !== z) {
        var X = Y(he.current.type);
        Ue[X] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Y(he.current.type), S.ref), Ue[X] = !0);
      }
    }
    function Fe(S, z) {
      {
        var X = function() {
          Me || (Me = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", z));
        };
        X.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: X,
          configurable: !0
        });
      }
    }
    function hr(S, z) {
      {
        var X = function() {
          me || (me = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", z));
        };
        X.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: X,
          configurable: !0
        });
      }
    }
    var vr = function(S, z, X, fe, Be, $e, Ve) {
      var De = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: S,
        key: z,
        ref: X,
        props: Ve,
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
    function qr(S, z, X, fe, Be) {
      {
        var $e, Ve = {}, De = null, zt = null;
        X !== void 0 && (we(X), De = "" + X), He(z) && (we(z.key), De = "" + z.key), Ke(z) && (zt = z.ref, Ge(z, Be));
        for ($e in z)
          Oe.call(z, $e) && !Ne.hasOwnProperty($e) && (Ve[$e] = z[$e]);
        if (S && S.defaultProps) {
          var dt = S.defaultProps;
          for ($e in dt)
            Ve[$e] === void 0 && (Ve[$e] = dt[$e]);
        }
        if (De || zt) {
          var vt = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          De && Fe(Ve, vt), zt && hr(Ve, vt);
        }
        return vr(S, De, zt, Be, fe, he.current, Ve);
      }
    }
    var Dt = M.ReactCurrentOwner, Vr = M.ReactDebugCurrentFrame;
    function wr(S) {
      if (S) {
        var z = S._owner, X = Le(S.type, S._source, z ? z.type : null);
        Vr.setExtraStackFrame(X);
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
          var z = S.fileName.replace(/^.*[\\\/]/, ""), X = S.lineNumber;
          return `

Check your code at ` + z + ":" + X + ".";
        }
        return "";
      }
    }
    var ut = {};
    function yt(S) {
      {
        var z = st();
        if (!z) {
          var X = typeof S == "string" ? S : S.displayName || S.name;
          X && (z = `

Check the top-level render call using <` + X + ">.");
        }
        return z;
      }
    }
    function it(S, z) {
      {
        if (!S._store || S._store.validated || S.key != null)
          return;
        S._store.validated = !0;
        var X = yt(z);
        if (ut[X])
          return;
        ut[X] = !0;
        var fe = "";
        S && S._owner && S._owner !== Dt.current && (fe = " It was passed a child from " + Y(S._owner.type) + "."), wr(S), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', X, fe), wr(null);
      }
    }
    function Et(S, z) {
      {
        if (typeof S != "object")
          return;
        if (Te(S))
          for (var X = 0; X < S.length; X++) {
            var fe = S[X];
            ct(fe) && it(fe, z);
          }
        else if (ct(S))
          S._store && (S._store.validated = !0);
        else if (S) {
          var Be = T(S);
          if (typeof Be == "function" && Be !== S.entries)
            for (var $e = Be.call(S), Ve; !(Ve = $e.next()).done; )
              ct(Ve.value) && it(Ve.value, z);
        }
      }
    }
    function Ot(S) {
      {
        var z = S.type;
        if (z == null || typeof z == "string")
          return;
        var X;
        if (typeof z == "function")
          X = z.propTypes;
        else if (typeof z == "object" && (z.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        z.$$typeof === f))
          X = z.propTypes;
        else
          return;
        if (X) {
          var fe = Y(z);
          qe(X, S.props, "prop", fe, S);
        } else if (z.PropTypes !== void 0 && !yn) {
          yn = !0;
          var Be = Y(z);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Be || "Unknown");
        }
        typeof z.getDefaultProps == "function" && !z.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tt(S) {
      {
        for (var z = Object.keys(S.props), X = 0; X < z.length; X++) {
          var fe = z[X];
          if (fe !== "children" && fe !== "key") {
            wr(S), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", fe), wr(null);
            break;
          }
        }
        S.ref !== null && (wr(S), v("Invalid attribute `ref` supplied to `React.Fragment`."), wr(null));
      }
    }
    function St(S, z, X, fe, Be, $e) {
      {
        var Ve = N(S);
        if (!Ve) {
          var De = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (De += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var zt = gt(Be);
          zt ? De += zt : De += st();
          var dt;
          S === null ? dt = "null" : Te(S) ? dt = "array" : S !== void 0 && S.$$typeof === e ? (dt = "<" + (Y(S.type) || "Unknown") + " />", De = " Did you accidentally export a JSX literal instead of a component?") : dt = typeof S, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", dt, De);
        }
        var vt = qr(S, z, X, Be, $e);
        if (vt == null)
          return vt;
        if (Ve) {
          var kt = z.children;
          if (kt !== void 0)
            if (fe)
              if (Te(kt)) {
                for (var mn = 0; mn < kt.length; mn++)
                  Et(kt[mn], S);
                Object.freeze && Object.freeze(kt);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Et(kt, S);
        }
        return S === n ? Tt(vt) : Ot(vt), vt;
      }
    }
    function Ct(S, z, X) {
      return St(S, z, X, !0);
    }
    function xt(S, z, X) {
      return St(S, z, X, !1);
    }
    var mt = xt, rt = Ct;
    ai.Fragment = n, ai.jsx = mt, ai.jsxs = rt;
  }()), ai;
}
process.env.NODE_ENV === "production" ? Wc.exports = Qx() : Wc.exports = eI();
var Fc = Wc.exports, Ee = {
  context: void 0,
  registry: void 0
};
function ui(t) {
  Ee.context = t;
}
var tI = (t, e) => t === e, ua = Symbol("solid-proxy"), tp = Symbol("solid-track"), da = {
  equals: tI
}, rp = cp, gn = 1, ha = 2, np = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
}, Qa = {}, Ye = null, ec = null, rI = null, Qe = null, Gt = null, dn = null, Aa = 0;
function Qn(t, e) {
  const r = Qe, n = Ye, s = t.length === 0, i = e === void 0 ? n : e, a = s ? np : {
    owned: null,
    cleanups: null,
    context: i ? i.context : null,
    owner: i
  }, o = s ? t : () => t(() => Mt(() => La(a)));
  Ye = a, Qe = null;
  try {
    return Xr(o, !0);
  } finally {
    Qe = r, Ye = n;
  }
}
function rr(t, e) {
  e = e ? Object.assign({}, da, e) : da;
  const r = {
    value: t,
    observers: null,
    observerSlots: null,
    comparator: e.equals || void 0
  }, n = (s) => (typeof s == "function" && (s = s(r.value)), ap(r, s));
  return [op.bind(r), n];
}
function Jd(t, e, r) {
  const n = ja(t, e, !0, gn);
  Ys(n);
}
function es(t, e, r) {
  const n = ja(t, e, !1, gn);
  Ys(n);
}
function sp(t, e, r) {
  rp = hI;
  const n = ja(t, e, !1, gn);
  (!r || !r.render) && (n.user = !0), dn ? dn.push(n) : Ys(n);
}
function dr(t, e, r) {
  r = r ? Object.assign({}, da, r) : da;
  const n = ja(t, e, !0, 0);
  return n.observers = null, n.observerSlots = null, n.comparator = r.equals || void 0, Ys(n), op.bind(n);
}
function nI(t) {
  return t && typeof t == "object" && "then" in t;
}
function sI(t, e, r) {
  let n, s, i;
  arguments.length === 2 && typeof e == "object" || arguments.length === 1 ? (n = !0, s = t, i = e || {}) : (n = t, s = e, i = r || {});
  let a = null, o = Qa, c = null, l = !1, u = "initialValue" in i, f = typeof n == "function" && dr(n);
  const p = /* @__PURE__ */ new Set(), [m, _] = (i.storage || rr)(i.initialValue), [E, T] = rr(void 0), [M, v] = rr(void 0, {
    equals: !1
  }), [O, b] = rr(u ? "ready" : "unresolved");
  if (Ee.context) {
    c = `${Ee.context.id}${Ee.context.count++}`;
    let P;
    i.ssrLoadFrom === "initial" ? o = i.initialValue : Ee.load && (P = Ee.load(c)) && (o = P);
  }
  function x(P, N, D, G) {
    return a === P && (a = null, G !== void 0 && (u = !0), (P === o || N === o) && i.onHydrated && queueMicrotask(() => i.onHydrated(G, {
      value: N
    })), o = Qa, y(N, D)), N;
  }
  function y(P, N) {
    Xr(() => {
      N === void 0 && _(() => P), b(N !== void 0 ? "errored" : u ? "ready" : "unresolved"), T(N);
      for (const D of p.keys())
        D.decrement();
      p.clear();
    }, !1);
  }
  function d() {
    const P = lI, N = m(), D = E();
    if (D !== void 0 && !a)
      throw D;
    return Qe && !Qe.user && P && Jd(() => {
      M(), a && (P.resolved || p.has(P) || (P.increment(), p.add(P)));
    }), N;
  }
  function g(P = !0) {
    if (P !== !1 && l)
      return;
    l = !1;
    const N = f ? f() : n;
    if (N == null || N === !1) {
      x(a, Mt(m));
      return;
    }
    const D = o !== Qa ? o : Mt(() => s(N, {
      value: m(),
      refetching: P
    }));
    return nI(D) ? (a = D, "value" in D ? (D.status === "success" ? x(a, D.value, void 0, N) : x(a, void 0, void 0, N), D) : (l = !0, queueMicrotask(() => l = !1), Xr(() => {
      b(u ? "refreshing" : "pending"), v();
    }, !1), D.then((G) => x(D, G, void 0, N), (G) => x(D, void 0, up(G), N)))) : (x(a, D, void 0, N), D);
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
        if (!u)
          return d();
        const P = E();
        if (P && !a)
          throw P;
        return m();
      }
    }
  }), f ? Jd(() => g(!1)) : g(!1), [d, {
    refetch: g,
    mutate: _
  }];
}
function p3(t) {
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
function g3(t, e, r) {
  const n = Array.isArray(t);
  let s, i = r && r.defer;
  return (a) => {
    let o;
    if (n) {
      o = Array(t.length);
      for (let l = 0; l < t.length; l++)
        o[l] = t[l]();
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
function iI(t) {
  sp(() => Mt(t));
}
function $i(t) {
  return Ye === null || (Ye.cleanups === null ? Ye.cleanups = [t] : Ye.cleanups.push(t)), t;
}
function y3() {
  return Qe;
}
function Xd() {
  return Ye;
}
function oI(t, e) {
  const r = Ye, n = Qe;
  Ye = t, Qe = null;
  try {
    return Xr(e, !0);
  } catch (s) {
    jl(s);
  } finally {
    Ye = r, Qe = n;
  }
}
function aI(t) {
  const e = Qe, r = Ye;
  return Promise.resolve().then(() => {
    Qe = e, Ye = r;
    let n;
    return Xr(t, !1), Qe = Ye = null, n ? n.done : void 0;
  });
}
var [cI, m3] = /* @__PURE__ */ rr(!1);
function v3() {
  return [cI, aI];
}
function w3(t, e) {
  const r = Symbol("context");
  return {
    id: r,
    Provider: fI(r),
    defaultValue: t
  };
}
function _3(t) {
  return Ye && Ye.context && Ye.context[t.id] !== void 0 ? Ye.context[t.id] : t.defaultValue;
}
function ip(t) {
  const e = dr(t), r = dr(() => Bc(e()));
  return r.toArray = () => {
    const n = r();
    return Array.isArray(n) ? n : n != null ? [n] : [];
  }, r;
}
var lI;
function op() {
  if (this.sources && this.state)
    if (this.state === gn)
      Ys(this);
    else {
      const t = Gt;
      Gt = null, Xr(() => pa(this), !1), Gt = t;
    }
  if (Qe) {
    const t = this.observers ? this.observers.length : 0;
    Qe.sources ? (Qe.sources.push(this), Qe.sourceSlots.push(t)) : (Qe.sources = [this], Qe.sourceSlots = [t]), this.observers ? (this.observers.push(Qe), this.observerSlots.push(Qe.sources.length - 1)) : (this.observers = [Qe], this.observerSlots = [Qe.sources.length - 1]);
  }
  return this.value;
}
function ap(t, e, r) {
  let n = t.value;
  return (!t.comparator || !t.comparator(n, e)) && (t.value = e, t.observers && t.observers.length && Xr(() => {
    for (let s = 0; s < t.observers.length; s += 1) {
      const i = t.observers[s], a = ec && ec.running;
      a && ec.disposed.has(i), (a ? !i.tState : !i.state) && (i.pure ? Gt.push(i) : dn.push(i), i.observers && lp(i)), a || (i.state = gn);
    }
    if (Gt.length > 1e6)
      throw Gt = [], new Error();
  }, !1)), e;
}
function Ys(t) {
  if (!t.fn)
    return;
  La(t);
  const e = Aa;
  uI(t, t.value, e);
}
function uI(t, e, r) {
  let n;
  const s = Ye, i = Qe;
  Qe = Ye = t;
  try {
    n = t.fn(e);
  } catch (a) {
    return t.pure && (t.state = gn, t.owned && t.owned.forEach(La), t.owned = null), t.updatedAt = r + 1, jl(a);
  } finally {
    Qe = i, Ye = s;
  }
  (!t.updatedAt || t.updatedAt <= r) && (t.updatedAt != null && "observers" in t ? ap(t, n) : t.value = n, t.updatedAt = r);
}
function ja(t, e, r, n = gn, s) {
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
  return Ye === null || Ye !== np && (Ye.owned ? Ye.owned.push(i) : Ye.owned = [i]), i;
}
function fa(t) {
  if (t.state === 0)
    return;
  if (t.state === ha)
    return pa(t);
  if (t.suspense && Mt(t.suspense.inFallback))
    return t.suspense.effects.push(t);
  const e = [t];
  for (; (t = t.owner) && (!t.updatedAt || t.updatedAt < Aa); )
    t.state && e.push(t);
  for (let r = e.length - 1; r >= 0; r--)
    if (t = e[r], t.state === gn)
      Ys(t);
    else if (t.state === ha) {
      const n = Gt;
      Gt = null, Xr(() => pa(t, e[0]), !1), Gt = n;
    }
}
function Xr(t, e) {
  if (Gt)
    return t();
  let r = !1;
  e || (Gt = []), dn ? r = !0 : dn = [], Aa++;
  try {
    const n = t();
    return dI(r), n;
  } catch (n) {
    r || (dn = null), Gt = null, jl(n);
  }
}
function dI(t) {
  if (Gt && (cp(Gt), Gt = null), t)
    return;
  const e = dn;
  dn = null, e.length && Xr(() => rp(e), !1);
}
function cp(t) {
  for (let e = 0; e < t.length; e++)
    fa(t[e]);
}
function hI(t) {
  let e, r = 0;
  for (e = 0; e < t.length; e++) {
    const n = t[e];
    n.user ? t[r++] = n : fa(n);
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
    fa(t[e]);
}
function pa(t, e) {
  t.state = 0;
  for (let r = 0; r < t.sources.length; r += 1) {
    const n = t.sources[r];
    if (n.sources) {
      const s = n.state;
      s === gn ? n !== e && (!n.updatedAt || n.updatedAt < Aa) && fa(n) : s === ha && pa(n, e);
    }
  }
}
function lp(t) {
  for (let e = 0; e < t.observers.length; e += 1) {
    const r = t.observers[e];
    r.state || (r.state = ha, r.pure ? Gt.push(r) : dn.push(r), r.observers && lp(r));
  }
}
function La(t) {
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
      La(t.owned[e]);
    t.owned = null;
  }
  if (t.cleanups) {
    for (e = t.cleanups.length - 1; e >= 0; e--)
      t.cleanups[e]();
    t.cleanups = null;
  }
  t.state = 0;
}
function up(t) {
  return t instanceof Error ? t : new Error(typeof t == "string" ? t : "Unknown error", {
    cause: t
  });
}
function jl(t, e = Ye) {
  throw up(t);
}
function Bc(t) {
  if (typeof t == "function" && !t.length)
    return Bc(t());
  if (Array.isArray(t)) {
    const e = [];
    for (let r = 0; r < t.length; r++) {
      const n = Bc(t[r]);
      Array.isArray(n) ? e.push.apply(e, n) : e.push(n);
    }
    return e;
  }
  return t;
}
function fI(t, e) {
  return function(n) {
    let s;
    return es(() => s = Mt(() => (Ye.context = {
      ...Ye.context,
      [t]: n.value
    }, ip(() => n.children))), void 0), s;
  };
}
var Hc = Symbol("fallback");
function ga(t) {
  for (let e = 0; e < t.length; e++)
    t[e]();
}
function pI(t, e, r = {}) {
  let n = [], s = [], i = [], a = 0, o = e.length > 1 ? [] : null;
  return $i(() => ga(i)), () => {
    let c = t() || [], l, u;
    return c[tp], Mt(() => {
      let p = c.length, m, _, E, T, M, v, O, b, x;
      if (p === 0)
        a !== 0 && (ga(i), i = [], n = [], s = [], a = 0, o && (o = [])), r.fallback && (n = [Hc], s[0] = Qn((y) => (i[0] = y, r.fallback())), a = 1);
      else if (a === 0) {
        for (s = new Array(p), u = 0; u < p; u++)
          n[u] = c[u], s[u] = Qn(f);
        a = p;
      } else {
        for (E = new Array(p), T = new Array(p), o && (M = new Array(p)), v = 0, O = Math.min(a, p); v < O && n[v] === c[v]; v++)
          ;
        for (O = a - 1, b = p - 1; O >= v && b >= v && n[O] === c[b]; O--, b--)
          E[b] = s[O], T[b] = i[O], o && (M[b] = o[O]);
        for (m = /* @__PURE__ */ new Map(), _ = new Array(b + 1), u = b; u >= v; u--)
          x = c[u], l = m.get(x), _[u] = l === void 0 ? -1 : l, m.set(x, u);
        for (l = v; l <= O; l++)
          x = n[l], u = m.get(x), u !== void 0 && u !== -1 ? (E[u] = s[l], T[u] = i[l], o && (M[u] = o[l]), u = _[u], m.set(x, u)) : i[l]();
        for (u = v; u < p; u++)
          u in E ? (s[u] = E[u], i[u] = T[u], o && (o[u] = M[u], o[u](u))) : s[u] = Qn(f);
        s = s.slice(0, a = p), n = c.slice(0);
      }
      return s;
    });
    function f(p) {
      if (i[u] = p, o) {
        const [m, _] = rr(u);
        return o[u] = _, e(c[u], m);
      }
      return e(c[u]);
    }
  };
}
function gI(t, e, r = {}) {
  let n = [], s = [], i = [], a = [], o = 0, c;
  return $i(() => ga(i)), () => {
    const l = t() || [];
    return l[tp], Mt(() => {
      if (l.length === 0)
        return o !== 0 && (ga(i), i = [], n = [], s = [], o = 0, a = []), r.fallback && (n = [Hc], s[0] = Qn((f) => (i[0] = f, r.fallback())), o = 1), s;
      for (n[0] === Hc && (i[0](), i = [], n = [], s = [], o = 0), c = 0; c < l.length; c++)
        c < n.length && n[c] !== l[c] ? a[c](() => l[c]) : c >= n.length && (s[c] = Qn(u));
      for (; c < n.length; c++)
        i[c]();
      return o = a.length = i.length = l.length, n = l.slice(0), s = s.slice(0, o);
    });
    function u(f) {
      i[c] = f;
      const [p, m] = rr(l[c]);
      return a[c] = m, e(p, c);
    }
  };
}
function yI(t, e) {
  return Mt(() => t(e || {}));
}
function So() {
  return !0;
}
var Gc = {
  get(t, e, r) {
    return e === ua ? r : t.get(e);
  },
  has(t, e) {
    return e === ua ? !0 : t.has(e);
  },
  set: So,
  deleteProperty: So,
  getOwnPropertyDescriptor(t, e) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return t.get(e);
      },
      set: So,
      deleteProperty: So
    };
  },
  ownKeys(t) {
    return t.keys();
  }
};
function tc(t) {
  return (t = typeof t == "function" ? t() : t) ? t : {};
}
function mI() {
  for (let t = 0, e = this.length; t < e; ++t) {
    const r = this[t]();
    if (r !== void 0)
      return r;
  }
}
function vI(...t) {
  let e = !1;
  for (let a = 0; a < t.length; a++) {
    const o = t[a];
    e = e || !!o && ua in o, t[a] = typeof o == "function" ? (e = !0, dr(o)) : o;
  }
  if (e)
    return new Proxy({
      get(a) {
        for (let o = t.length - 1; o >= 0; o--) {
          const c = tc(t[o])[a];
          if (c !== void 0)
            return c;
        }
      },
      has(a) {
        for (let o = t.length - 1; o >= 0; o--)
          if (a in tc(t[o]))
            return !0;
        return !1;
      },
      keys() {
        const a = [];
        for (let o = 0; o < t.length; o++)
          a.push(...Object.keys(tc(t[o])));
        return [...new Set(a)];
      }
    }, Gc);
  const r = {}, n = /* @__PURE__ */ Object.create(null);
  for (let a = t.length - 1; a >= 0; a--) {
    const o = t[a];
    if (!o)
      continue;
    const c = Object.getOwnPropertyNames(o);
    for (let l = c.length - 1; l >= 0; l--) {
      const u = c[l];
      if (u === "__proto__" || u === "constructor")
        continue;
      const f = Object.getOwnPropertyDescriptor(o, u);
      if (!n[u])
        n[u] = f.get ? {
          enumerable: !0,
          configurable: !0,
          get: mI.bind(r[u] = [f.get.bind(o)])
        } : f.value !== void 0 ? f : void 0;
      else {
        const p = r[u];
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
function wI(t, ...e) {
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
    }, Gc));
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
    }, Gc)), i;
  }
  const r = {}, n = e.map(() => ({}));
  for (const s of Object.getOwnPropertyNames(t)) {
    const i = Object.getOwnPropertyDescriptor(t, s), a = !i.get && !i.set && i.enumerable && i.writable && i.configurable;
    let o = !1, c = 0;
    for (const l of e)
      l.includes(s) && (o = !0, a ? n[c][s] = i.value : Object.defineProperty(n[c], s, i)), ++c;
    o || (a ? r[s] = i.value : Object.defineProperty(r, s, i));
  }
  return [...n, r];
}
function _I(t) {
  let e, r;
  const n = (s) => {
    const i = Ee.context;
    if (i) {
      const [o, c] = rr();
      Ee.count || (Ee.count = 0), Ee.count++, (r || (r = t())).then((l) => {
        ui(i), Ee.count--, c(() => l.default), ui();
      }), e = o;
    } else if (!e) {
      const [o] = sI(() => (r || (r = t())).then((c) => c.default));
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
var bI = 0;
function b3() {
  const t = Ee.context;
  return t ? `${t.id}${t.count++}` : `cl-${bI++}`;
}
var dp = (t) => `Stale read from <${t}>.`;
function E3(t) {
  const e = "fallback" in t && {
    fallback: () => t.fallback
  };
  return dr(pI(() => t.each, t.children, e || void 0));
}
function S3(t) {
  const e = "fallback" in t && {
    fallback: () => t.fallback
  };
  return dr(gI(() => t.each, t.children, e || void 0));
}
function x3(t) {
  const e = t.keyed, r = dr(() => t.when, void 0, {
    equals: (n, s) => e ? n === s : !n == !s
  });
  return dr(() => {
    const n = r();
    if (n) {
      const s = t.children;
      return typeof s == "function" && s.length > 0 ? Mt(() => s(e ? n : () => {
        if (!Mt(r))
          throw dp("Show");
        return t.when;
      })) : s;
    }
    return t.fallback;
  }, void 0, void 0);
}
function I3(t) {
  let e = !1;
  const r = (i, a) => (e ? i[1] === a[1] : !i[1] == !a[1]) && i[2] === a[2], n = ip(() => t.children), s = dr(() => {
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
        throw dp("Match");
      return o.when;
    })) : c;
  }, void 0, void 0);
}
function O3(t) {
  return t;
}
var EI = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"], SI = /* @__PURE__ */ new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...EI]), xI = /* @__PURE__ */ new Set(["innerHTML", "textContent", "innerText", "children"]), II = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  className: "class",
  htmlFor: "for"
}), OI = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
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
function TI(t, e) {
  const r = OI[t];
  return typeof r == "object" ? r[e] ? r.$ : void 0 : r;
}
var CI = /* @__PURE__ */ new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]), kI = /* @__PURE__ */ new Set([
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
]), PI = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
function NI(t, e, r) {
  let n = r.length, s = e.length, i = n, a = 0, o = 0, c = e[s - 1].nextSibling, l = null;
  for (; a < s || o < i; ) {
    if (e[a] === r[o]) {
      a++, o++;
      continue;
    }
    for (; e[s - 1] === r[i - 1]; )
      s--, i--;
    if (s === a) {
      const u = i < n ? o ? r[o - 1].nextSibling : r[i - o] : c;
      for (; o < i; )
        t.insertBefore(r[o++], u);
    } else if (i === o)
      for (; a < s; )
        (!l || !l.has(e[a])) && e[a].remove(), a++;
    else if (e[a] === r[i - 1] && r[o] === e[s - 1]) {
      const u = e[--s].nextSibling;
      t.insertBefore(r[o++], e[a++].nextSibling), t.insertBefore(r[--i], u), e[s] = r[i];
    } else {
      if (!l) {
        l = /* @__PURE__ */ new Map();
        let f = o;
        for (; f < i; )
          l.set(r[f], f++);
      }
      const u = l.get(e[a]);
      if (u != null)
        if (o < u && u < i) {
          let f = a, p = 1, m;
          for (; ++f < s && f < i && !((m = l.get(e[f])) == null || m !== u + p); )
            p++;
          if (p > u - o) {
            const _ = e[a];
            for (; o < u; )
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
var hi = "_$DX_DELEGATE";
function RI(t, e, r, n = {}) {
  let s;
  return Qn((i) => {
    s = i, e === document ? t() : Jc(e, t(), e.firstChild ? null : void 0, r);
  }, n.owner), () => {
    s(), e.textContent = "";
  };
}
function T3(t, e, r) {
  let n;
  const s = () => {
    const a = document.createElement("template");
    return a.innerHTML = t, r ? a.content.firstChild.firstChild : a.content.firstChild;
  }, i = e ? () => Mt(() => document.importNode(n || (n = s()), !0)) : () => (n || (n = s())).cloneNode(!0);
  return i.cloneNode = i, i;
}
function AI(t, e = window.document) {
  const r = e[hi] || (e[hi] = /* @__PURE__ */ new Set());
  for (let n = 0, s = t.length; n < s; n++) {
    const i = t[n];
    r.has(i) || (r.add(i), e.addEventListener(i, hp));
  }
}
function C3(t = window.document) {
  if (t[hi]) {
    for (let e of t[hi].keys())
      t.removeEventListener(e, hp);
    delete t[hi];
  }
}
function Yc(t, e, r) {
  Ee.context || (r == null ? t.removeAttribute(e) : t.setAttribute(e, r));
}
function jI(t, e, r, n) {
  Ee.context || (n == null ? t.removeAttributeNS(e, r) : t.setAttributeNS(e, r, n));
}
function LI(t, e) {
  Ee.context || (e == null ? t.removeAttribute("class") : t.className = e);
}
function MI(t, e, r, n) {
  if (n)
    Array.isArray(r) ? (t[`$$${e}`] = r[0], t[`$$${e}Data`] = r[1]) : t[`$$${e}`] = r;
  else if (Array.isArray(r)) {
    const s = r[0];
    t.addEventListener(e, r[0] = (i) => s.call(t, r[1], i));
  } else
    t.addEventListener(e, r);
}
function DI(t, e, r = {}) {
  const n = Object.keys(e || {}), s = Object.keys(r);
  let i, a;
  for (i = 0, a = s.length; i < a; i++) {
    const o = s[i];
    !o || o === "undefined" || e[o] || (Qd(t, o, !1), delete r[o]);
  }
  for (i = 0, a = n.length; i < a; i++) {
    const o = n[i], c = !!e[o];
    !o || o === "undefined" || r[o] === c || !c || (Qd(t, o, !0), r[o] = c);
  }
  return r;
}
function zI(t, e, r) {
  if (!e)
    return r ? Yc(t, "style") : e;
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
function UI(t, e = {}, r, n) {
  const s = {};
  return n || es(() => s.children = Vs(t, e.children, s.children)), es(() => e.ref && e.ref(t)), es(() => $I(t, e, r, !0, s, !0)), s;
}
function k3(t, e, r) {
  return Mt(() => t(e, r));
}
function Jc(t, e, r, n) {
  if (r !== void 0 && !n && (n = []), typeof e != "function")
    return Vs(t, e, n, r);
  es((s) => Vs(t, e(), s, r), n);
}
function $I(t, e, r, n, s = {}, i = !1) {
  e || (e = {});
  for (const a in s)
    if (!(a in e)) {
      if (a === "children")
        continue;
      s[a] = eh(t, a, null, s[a], r, i);
    }
  for (const a in e) {
    if (a === "children") {
      n || Vs(t, e.children);
      continue;
    }
    const o = e[a];
    s[a] = eh(t, a, o, s[a], r, i);
  }
}
function qI(t) {
  let e, r;
  return !Ee.context || !(e = Ee.registry.get(r = ZI())) ? t() : (Ee.completed && Ee.completed.add(e), Ee.registry.delete(r), e);
}
function VI(t) {
  return t.toLowerCase().replace(/-([a-z])/g, (e, r) => r.toUpperCase());
}
function Qd(t, e, r) {
  const n = e.trim().split(/\s+/);
  for (let s = 0, i = n.length; s < i; s++)
    t.classList.toggle(n[s], r);
}
function eh(t, e, r, n, s, i) {
  let a, o, c, l, u;
  if (e === "style")
    return zI(t, r, n);
  if (e === "classList")
    return DI(t, r, n);
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
    const f = e.slice(2).toLowerCase(), p = CI.has(f);
    if (!p && n) {
      const m = Array.isArray(n) ? n[0] : n;
      t.removeEventListener(f, m);
    }
    (p || r) && (MI(t, f, r, p), p && AI([f]));
  } else if (e.slice(0, 5) === "attr:")
    Yc(t, e.slice(5), r);
  else if ((u = e.slice(0, 5) === "prop:") || (c = xI.has(e)) || !s && ((l = TI(e, t.tagName)) || (o = SI.has(e))) || (a = t.nodeName.includes("-"))) {
    if (u)
      e = e.slice(5), o = !0;
    else if (Ee.context)
      return r;
    e === "class" || e === "className" ? LI(t, r) : a && !o && !c ? t[VI(e)] = r : t[l || e] = r;
  } else {
    const f = s && e.indexOf(":") > -1 && PI[e.split(":")[0]];
    f ? jI(t, f, e, r) : Yc(t, II[e] || e, r);
  }
  return r;
}
function hp(t) {
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
      const l = r[c];
      l.nodeType === 8 && l.data.slice(0, 2) === "!$" ? l.remove() : o.push(l);
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
      o && o.nodeType === 3 ? o.data !== e && (o.data = e) : o = document.createTextNode(e), r = ws(t, r, n, o);
    } else
      r !== "" && typeof r == "string" ? r = t.firstChild.data = e : r = t.textContent = e;
  } else if (e == null || i === "boolean") {
    if (Ee.context)
      return r;
    r = ws(t, r, n);
  } else {
    if (i === "function")
      return es(() => {
        let o = e();
        for (; typeof o == "function"; )
          o = o();
        r = Vs(t, o, r, n);
      }), () => r;
    if (Array.isArray(e)) {
      const o = [], c = r && Array.isArray(r);
      if (Xc(o, e, r, s))
        return es(() => r = Vs(t, o, r, n, !0)), () => r;
      if (Ee.context) {
        if (!o.length)
          return r;
        if (n === void 0)
          return [...t.childNodes];
        let l = o[0], u = [l];
        for (; (l = l.nextSibling) !== n; )
          u.push(l);
        return r = u;
      }
      if (o.length === 0) {
        if (r = ws(t, r, n), a)
          return r;
      } else
        c ? r.length === 0 ? th(t, o, n) : NI(t, r, o) : (r && ws(t), th(t, o));
      r = o;
    } else if (e.nodeType) {
      if (Ee.context && e.parentNode)
        return r = a ? [e] : e;
      if (Array.isArray(r)) {
        if (a)
          return r = ws(t, r, n, e);
        ws(t, r, null, e);
      } else
        r == null || r === "" || !t.firstChild ? t.appendChild(e) : t.replaceChild(e, t.firstChild);
      r = e;
    }
  }
  return r;
}
function Xc(t, e, r, n) {
  let s = !1;
  for (let i = 0, a = e.length; i < a; i++) {
    let o = e[i], c = r && r[i], l;
    if (!(o == null || o === !0 || o === !1))
      if ((l = typeof o) == "object" && o.nodeType)
        t.push(o);
      else if (Array.isArray(o))
        s = Xc(t, o, c) || s;
      else if (l === "function")
        if (n) {
          for (; typeof o == "function"; )
            o = o();
          s = Xc(t, Array.isArray(o) ? o : [o], Array.isArray(c) ? c : [c]) || s;
        } else
          t.push(o), s = !0;
      else {
        const u = String(o);
        c && c.nodeType === 3 && c.data === u ? t.push(c) : t.push(document.createTextNode(u));
      }
  }
  return s;
}
function th(t, e, r = null) {
  for (let n = 0, s = e.length; n < s; n++)
    t.insertBefore(e[n], r);
}
function ws(t, e, r, n) {
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
function ZI() {
  const t = Ee.context;
  return `${t.id}${t.count++}`;
}
var KI = "http://www.w3.org/2000/svg";
function fp(t, e = !1) {
  return e ? document.createElementNS(KI, t) : document.createElement(t);
}
function P3(t) {
  const {
    useShadow: e
  } = t, r = document.createTextNode(""), n = () => t.mount || document.body, s = Xd();
  let i, a = !!Ee.context;
  return sp(() => {
    a && (Xd().user = a = !1), i || (i = oI(s, () => dr(() => t.children)));
    const o = n();
    if (o instanceof HTMLHeadElement) {
      const [c, l] = rr(!1), u = () => l(!0);
      Qn((f) => Jc(o, () => c() ? f() : i(), null)), $i(u);
    } else {
      const c = fp(t.isSVG ? "g" : "div", t.isSVG), l = e && c.attachShadow ? c.attachShadow({
        mode: "open"
      }) : c;
      Object.defineProperty(c, "_$host", {
        get() {
          return r.parentNode;
        },
        configurable: !0
      }), Jc(l, i), o.appendChild(c), t.ref && t.ref(c), $i(() => o.removeChild(c));
    }
  }, void 0, {
    render: !a
  }), r;
}
function N3(t) {
  const [e, r] = wI(t, ["component"]), n = dr(() => e.component);
  return dr(() => {
    const s = n();
    switch (typeof s) {
      case "function":
        return Mt(() => s(r));
      case "string":
        const i = kI.has(s), a = Ee.context ? qI() : fp(s, i);
        return UI(a, r, i), a;
    }
  });
}
var WI = (
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
), pp = (
  /** @class */
  function() {
    function t(e) {
      this.generateIdentifier = e, this.kv = new WI();
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
), FI = /* @__PURE__ */ function() {
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
}(), BI = (
  /** @class */
  function(t) {
    FI(e, t);
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
  }(pp)
), HI = function(t, e) {
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
function GI(t) {
  if ("values" in Object)
    return Object.values(t);
  var e = [];
  for (var r in t)
    t.hasOwnProperty(r) && e.push(t[r]);
  return e;
}
function YI(t, e) {
  var r = GI(t);
  if ("find" in r)
    return r.find(e);
  for (var n = r, s = 0; s < n.length; s++) {
    var i = n[s];
    if (e(i))
      return i;
  }
}
function Zs(t, e) {
  Object.entries(t).forEach(function(r) {
    var n = HI(r, 2), s = n[0], i = n[1];
    return e(i, s);
  });
}
function Lo(t, e) {
  return t.indexOf(e) !== -1;
}
function rh(t, e) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    if (e(n))
      return n;
  }
}
var JI = (
  /** @class */
  function() {
    function t() {
      this.transfomers = {};
    }
    return t.prototype.register = function(e) {
      this.transfomers[e.name] = e;
    }, t.prototype.findApplicable = function(e) {
      return YI(this.transfomers, function(r) {
        return r.isApplicable(e);
      });
    }, t.prototype.findByName = function(e) {
      return this.transfomers[e];
    }, t;
  }()
), XI = function(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}, gp = function(t) {
  return typeof t > "u";
}, QI = function(t) {
  return t === null;
}, qi = function(t) {
  return typeof t != "object" || t === null || t === Object.prototype ? !1 : Object.getPrototypeOf(t) === null ? !0 : Object.getPrototypeOf(t) === Object.prototype;
}, Qc = function(t) {
  return qi(t) && Object.keys(t).length === 0;
}, Dn = function(t) {
  return Array.isArray(t);
}, e6 = function(t) {
  return typeof t == "string";
}, t6 = function(t) {
  return typeof t == "number" && !isNaN(t);
}, r6 = function(t) {
  return typeof t == "boolean";
}, n6 = function(t) {
  return t instanceof RegExp;
}, Vi = function(t) {
  return t instanceof Map;
}, Zi = function(t) {
  return t instanceof Set;
}, yp = function(t) {
  return XI(t) === "Symbol";
}, s6 = function(t) {
  return t instanceof Date && !isNaN(t.valueOf());
}, i6 = function(t) {
  return t instanceof Error;
}, nh = function(t) {
  return typeof t == "number" && isNaN(t);
}, o6 = function(t) {
  return r6(t) || QI(t) || gp(t) || t6(t) || e6(t) || yp(t);
}, a6 = function(t) {
  return typeof t == "bigint";
}, c6 = function(t) {
  return t === 1 / 0 || t === -1 / 0;
}, l6 = function(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}, u6 = function(t) {
  return t instanceof URL;
}, mp = function(t) {
  return t.replace(/\./g, "\\.");
}, rc = function(t) {
  return t.map(String).map(mp).join(".");
}, fi = function(t) {
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
}, el = function() {
  return el = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, el.apply(this, arguments);
}, tl = function(t, e) {
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
}, rl = function(t, e) {
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
var vp = [
  Br(gp, "undefined", function() {
    return null;
  }, function() {
  }),
  Br(a6, "bigint", function(t) {
    return t.toString();
  }, function(t) {
    return typeof BigInt < "u" ? BigInt(t) : t;
  }),
  Br(s6, "Date", function(t) {
    return t.toISOString();
  }, function(t) {
    return new Date(t);
  }),
  Br(i6, "Error", function(t, e) {
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
  Br(n6, "regexp", function(t) {
    return "" + t;
  }, function(t) {
    var e = t.slice(1, t.lastIndexOf("/")), r = t.slice(t.lastIndexOf("/") + 1);
    return new RegExp(e, r);
  }),
  Br(
    Zi,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    function(t) {
      return rl([], tl(t.values()));
    },
    function(t) {
      return new Set(t);
    }
  ),
  Br(Vi, "map", function(t) {
    return rl([], tl(t.entries()));
  }, function(t) {
    return new Map(t);
  }),
  Br(function(t) {
    return nh(t) || c6(t);
  }, "number", function(t) {
    return nh(t) ? "NaN" : t > 0 ? "Infinity" : "-Infinity";
  }, Number),
  Br(function(t) {
    return t === 0 && 1 / t === -1 / 0;
  }, "number", function() {
    return "-0";
  }, Number),
  Br(u6, "URL", function(t) {
    return t.toString();
  }, function(t) {
    return new URL(t);
  })
];
function Ma(t, e, r, n) {
  return {
    isApplicable: t,
    annotation: e,
    transform: r,
    untransform: n
  };
}
var wp = Ma(function(t, e) {
  if (yp(t)) {
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
}), d6 = [
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
}, {}), _p = Ma(l6, function(t) {
  return ["typed-array", t.constructor.name];
}, function(t) {
  return rl([], tl(t));
}, function(t, e) {
  var r = d6[e[1]];
  if (!r)
    throw new Error("Trying to deserialize unknown typed array");
  return new r(t);
});
function bp(t, e) {
  if (t != null && t.constructor) {
    var r = !!e.classRegistry.getIdentifier(t.constructor);
    return r;
  }
  return !1;
}
var Ep = Ma(bp, function(t, e) {
  var r = e.classRegistry.getIdentifier(t.constructor);
  return ["class", r];
}, function(t, e) {
  var r = e.classRegistry.getAllowedProps(t.constructor);
  if (!r)
    return el({}, t);
  var n = {};
  return r.forEach(function(s) {
    n[s] = t[s];
  }), n;
}, function(t, e, r) {
  var n = r.classRegistry.getValue(e[1]);
  if (!n)
    throw new Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");
  return Object.assign(Object.create(n.prototype), t);
}), Sp = Ma(function(t, e) {
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
}), h6 = [Ep, wp, Sp, _p], sh = function(t, e) {
  var r = rh(h6, function(s) {
    return s.isApplicable(t, e);
  });
  if (r)
    return {
      value: r.transform(t, e),
      type: r.annotation(t, e)
    };
  var n = rh(vp, function(s) {
    return s.isApplicable(t, e);
  });
  if (n)
    return {
      value: n.transform(t, e),
      type: n.annotation
    };
}, xp = {};
vp.forEach(function(t) {
  xp[t.annotation] = t;
});
var f6 = function(t, e, r) {
  if (Dn(e))
    switch (e[0]) {
      case "symbol":
        return wp.untransform(t, e, r);
      case "class":
        return Ep.untransform(t, e, r);
      case "custom":
        return Sp.untransform(t, e, r);
      case "typed-array":
        return _p.untransform(t, e, r);
      default:
        throw new Error("Unknown transformation: " + e);
    }
  else {
    var n = xp[e];
    if (!n)
      throw new Error("Unknown transformation: " + e);
    return n.untransform(t, r);
  }
}, Is = function(t, e) {
  for (var r = t.keys(); e > 0; )
    r.next(), e--;
  return r.next().value;
};
function Ip(t) {
  if (Lo(t, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (Lo(t, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (Lo(t, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var p6 = function(t, e) {
  Ip(e);
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    if (Zi(t))
      t = Is(t, +n);
    else if (Vi(t)) {
      var s = +n, i = +e[++r] == 0 ? "key" : "value", a = Is(t, s);
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
}, nl = function(t, e, r) {
  if (Ip(e), e.length === 0)
    return r(t);
  for (var n = t, s = 0; s < e.length - 1; s++) {
    var i = e[s];
    if (Dn(n)) {
      var a = +i;
      n = n[a];
    } else if (qi(n))
      n = n[i];
    else if (Zi(n)) {
      var o = +i;
      n = Is(n, o);
    } else if (Vi(n)) {
      var c = s === e.length - 2;
      if (c)
        break;
      var o = +i, l = +e[++s] == 0 ? "key" : "value", u = Is(n, o);
      switch (l) {
        case "key":
          n = u;
          break;
        case "value":
          n = n.get(u);
          break;
      }
    }
  }
  var f = e[e.length - 1];
  if (Dn(n) ? n[+f] = r(n[+f]) : qi(n) && (n[f] = r(n[f])), Zi(n)) {
    var p = Is(n, +f), m = r(p);
    p !== m && (n.delete(p), n.add(m));
  }
  if (Vi(n)) {
    var o = +e[e.length - 2], _ = Is(n, o), l = +f == 0 ? "key" : "value";
    switch (l) {
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
}, kn = function(t, e) {
  for (var r = 0, n = e.length, s = t.length; r < n; r++, s++)
    t[s] = e[r];
  return t;
};
function sl(t, e, r) {
  if (r === void 0 && (r = []), !!t) {
    if (!Dn(t)) {
      Zs(t, function(a, o) {
        return sl(a, e, kn(kn([], cn(r)), cn(fi(o))));
      });
      return;
    }
    var n = cn(t, 2), s = n[0], i = n[1];
    i && Zs(i, function(a, o) {
      sl(a, e, kn(kn([], cn(r)), cn(fi(o))));
    }), e(s, r);
  }
}
function g6(t, e, r) {
  return sl(e, function(n, s) {
    t = nl(t, s, function(i) {
      return f6(i, n, r);
    });
  }), t;
}
function y6(t, e) {
  function r(a, o) {
    var c = p6(t, fi(o));
    a.map(fi).forEach(function(l) {
      t = nl(t, l, function() {
        return c;
      });
    });
  }
  if (Dn(e)) {
    var n = cn(e, 2), s = n[0], i = n[1];
    s.forEach(function(a) {
      t = nl(t, fi(a), function() {
        return t;
      });
    }), i && Zs(i, r);
  } else
    Zs(e, r);
  return t;
}
var m6 = function(t, e) {
  return qi(t) || Dn(t) || Vi(t) || Zi(t) || bp(t, e);
};
function v6(t, e, r) {
  var n = r.get(t);
  n ? n.push(e) : r.set(t, [e]);
}
function w6(t, e) {
  var r = {}, n = void 0;
  return t.forEach(function(s) {
    if (!(s.length <= 1)) {
      e || (s = s.map(function(c) {
        return c.map(String);
      }).sort(function(c, l) {
        return c.length - l.length;
      }));
      var i = cn(s), a = i[0], o = i.slice(1);
      a.length === 0 ? n = o.map(rc) : r[rc(a)] = o.map(rc);
    }
  }), n ? Qc(r) ? [n] : [n, r] : Qc(r) ? void 0 : r;
}
var Op = function(t, e, r, n, s, i, a) {
  var o;
  s === void 0 && (s = []), i === void 0 && (i = []), a === void 0 && (a = /* @__PURE__ */ new Map());
  var c = o6(t);
  if (!c) {
    v6(t, s, e);
    var l = a.get(t);
    if (l)
      return n ? {
        transformedValue: null
      } : l;
  }
  if (!m6(t, r)) {
    var u = sh(t, r), f = u ? {
      transformedValue: u.value,
      annotations: [u.type]
    } : {
      transformedValue: t
    };
    return c || a.set(t, f), f;
  }
  if (Lo(i, t))
    return {
      transformedValue: null
    };
  var p = sh(t, r), m = (o = p == null ? void 0 : p.value) !== null && o !== void 0 ? o : t, _ = Dn(m) ? [] : {}, E = {};
  Zs(m, function(M, v) {
    var O = Op(M, e, r, n, kn(kn([], cn(s)), [v]), kn(kn([], cn(i)), [t]), a);
    _[v] = O.transformedValue, Dn(O.annotations) ? E[v] = O.annotations : qi(O.annotations) && Zs(O.annotations, function(b, x) {
      E[mp(v) + "." + x] = b;
    });
  });
  var T = Qc(E) ? {
    transformedValue: _,
    annotations: p ? [p.type] : void 0
  } : {
    transformedValue: _,
    annotations: p ? [p.type, E] : E
  };
  return c || a.set(t, T), T;
};
function Tp(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function _6(t) {
  if (Tp(t) !== "Object")
    return !1;
  const e = Object.getPrototypeOf(t);
  return !!e && e.constructor === Object && e === Object.prototype;
}
function ih(t) {
  return Tp(t) === "Array";
}
function b6(t, e, r, n, s) {
  const i = {}.propertyIsEnumerable.call(n, e) ? "enumerable" : "nonenumerable";
  i === "enumerable" && (t[e] = r), s && i === "nonenumerable" && Object.defineProperty(t, e, {
    value: r,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function il(t, e = {}) {
  if (ih(t))
    return t.map((s) => il(s, e));
  if (!_6(t))
    return t;
  const r = Object.getOwnPropertyNames(t), n = Object.getOwnPropertySymbols(t);
  return [...r, ...n].reduce((s, i) => {
    if (ih(e.props) && !e.props.includes(i))
      return s;
    const a = t[i], o = il(a, e);
    return b6(s, i, o, t, e.nonenumerable), s;
  }, {});
}
var Hn = function() {
  return Hn = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, Hn.apply(this, arguments);
}, E6 = function(t, e) {
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
}, S6 = function(t, e) {
  for (var r = 0, n = e.length, s = t.length; r < n; r++, s++)
    t[s] = e[r];
  return t;
}, Cp = (
  /** @class */
  function() {
    function t(e) {
      var r = e === void 0 ? {} : e, n = r.dedupe, s = n === void 0 ? !1 : n;
      this.classRegistry = new BI(), this.symbolRegistry = new pp(function(i) {
        var a;
        return (a = i.description) !== null && a !== void 0 ? a : "";
      }), this.customTransformerRegistry = new JI(), this.allowedErrorProps = [], this.dedupe = s;
    }
    return t.prototype.serialize = function(e) {
      var r = /* @__PURE__ */ new Map(), n = Op(e, r, this, this.dedupe), s = {
        json: n.transformedValue
      };
      n.annotations && (s.meta = Hn(Hn({}, s.meta), { values: n.annotations }));
      var i = w6(r, this.dedupe);
      return i && (s.meta = Hn(Hn({}, s.meta), { referentialEqualities: i })), s;
    }, t.prototype.deserialize = function(e) {
      var r = e.json, n = e.meta, s = il(r);
      return n != null && n.values && (s = g6(s, n.values, this)), n != null && n.referentialEqualities && (s = y6(s, n.referentialEqualities)), s;
    }, t.prototype.stringify = function(e) {
      return JSON.stringify(this.serialize(e));
    }, t.prototype.parse = function(e) {
      return this.deserialize(JSON.parse(e));
    }, t.prototype.registerClass = function(e, r) {
      this.classRegistry.register(e, r);
    }, t.prototype.registerSymbol = function(e, r) {
      this.symbolRegistry.register(e, r);
    }, t.prototype.registerCustom = function(e, r) {
      this.customTransformerRegistry.register(Hn({ name: r }, e));
    }, t.prototype.allowErrorProps = function() {
      for (var e, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      (e = this.allowedErrorProps).push.apply(e, S6([], E6(r)));
    }, t.defaultInstance = new t(), t.serialize = t.defaultInstance.serialize.bind(t.defaultInstance), t.deserialize = t.defaultInstance.deserialize.bind(t.defaultInstance), t.stringify = t.defaultInstance.stringify.bind(t.defaultInstance), t.parse = t.defaultInstance.parse.bind(t.defaultInstance), t.registerClass = t.defaultInstance.registerClass.bind(t.defaultInstance), t.registerSymbol = t.defaultInstance.registerSymbol.bind(t.defaultInstance), t.registerCustom = t.defaultInstance.registerCustom.bind(t.defaultInstance), t.allowErrorProps = t.defaultInstance.allowErrorProps.bind(t.defaultInstance), t;
  }()
), x6 = Cp.serialize, R3 = Cp.stringify;
function A3(t) {
  return t.state.fetchStatus === "fetching" ? "fetching" : t.getObserversCount() ? t.state.fetchStatus === "paused" ? "paused" : t.isStale() ? "stale" : "fresh" : "inactive";
}
function j3(t, e) {
  return `${t}${e.charAt(0).toUpperCase() + e.slice(1)}`;
}
function L3({
  queryState: t,
  observerCount: e,
  isStale: r
}) {
  return t.fetchStatus === "fetching" ? "blue" : e ? t.fetchStatus === "paused" ? "purple" : r ? "yellow" : "green" : "gray";
}
function M3({
  status: t,
  isPaused: e
}) {
  return e ? "purple" : t === "error" ? "red" : t === "pending" ? "yellow" : t === "success" ? "green" : "gray";
}
function D3(t) {
  return t === "fresh" ? "green" : t === "stale" ? "yellow" : t === "paused" ? "purple" : t === "inactive" ? "gray" : "blue";
}
var z3 = (t, e = !1) => {
  const {
    json: r
  } = x6(t);
  return JSON.stringify(r, null, e ? 2 : void 0);
}, xo = (t) => t.state.fetchStatus !== "idle" ? 0 : t.getObserversCount() ? t.isStale() ? 2 : 1 : 3, I6 = (t, e) => t.queryHash.localeCompare(e.queryHash), kp = (t, e) => t.state.dataUpdatedAt < e.state.dataUpdatedAt ? 1 : -1, O6 = (t, e) => xo(t) === xo(e) ? kp(t, e) : xo(t) > xo(e) ? 1 : -1, U3 = {
  status: O6,
  "query hash": I6,
  "last updated": kp
}, Io = (t) => t.state.isPaused ? 0 : t.state.status === "error" ? 2 : t.state.status === "pending" ? 1 : 3, Pp = (t, e) => t.state.submittedAt < e.state.submittedAt ? 1 : -1, T6 = (t, e) => Io(t) === Io(e) ? Pp(t, e) : Io(t) > Io(e) ? 1 : -1, $3 = {
  status: T6,
  "last updated": Pp
}, q3 = (t) => t * parseFloat(getComputedStyle(document.documentElement).fontSize), V3 = () => {
  const [t, e] = rr("dark");
  return iI(() => {
    const r = window.matchMedia("(prefers-color-scheme: dark)");
    e(r.matches ? "dark" : "light");
    const n = (s) => {
      e(s.matches ? "dark" : "light");
    };
    r.addEventListener("change", n), $i(() => r.removeEventListener("change", n));
  }), t;
}, Oo = (t, e, r) => {
  if (e.length === 0)
    return r;
  if (t instanceof Map) {
    const n = new Map(t);
    if (e.length === 1)
      return n.set(e[0], r), n;
    const [s, ...i] = e;
    return n.set(s, Oo(n.get(s), i, r)), n;
  }
  if (t instanceof Set) {
    const n = Oo(Array.from(t), e, r);
    return new Set(n);
  }
  if (Array.isArray(t)) {
    const n = [...t];
    if (e.length === 1)
      return n[e[0]] = r, n;
    const [s, ...i] = e;
    return n[s] = Oo(n[s], i, r), n;
  }
  if (t instanceof Object) {
    const n = {
      ...t
    };
    if (e.length === 1)
      return n[e[0]] = r, n;
    const [s, ...i] = e;
    return n[s] = Oo(n[s], i, r), n;
  }
  return t;
}, To = (t, e) => {
  if (t instanceof Map) {
    const r = new Map(t);
    if (e.length === 1)
      return r.delete(e[0]), r;
    const [n, ...s] = e;
    return r.set(n, To(r.get(n), s)), r;
  }
  if (t instanceof Set) {
    const r = To(Array.from(t), e);
    return new Set(r);
  }
  if (Array.isArray(t)) {
    const r = [...t];
    if (e.length === 1)
      return r.filter((i, a) => a.toString() !== e[0]);
    const [n, ...s] = e;
    return r[n] = To(r[n], s), r;
  }
  if (t instanceof Object) {
    const r = {
      ...t
    };
    if (e.length === 1)
      return delete r[e[0]], r;
    const [n, ...s] = e;
    return r[n] = To(r[n], s), r;
  }
  return t;
}, C6 = (t) => {
  if (!t || document.querySelector("#_goober"))
    return;
  const r = document.createElement("style"), n = document.createTextNode("");
  r.appendChild(n), r.id = "_goober", r.setAttribute("nonce", t), document.head.appendChild(r);
}, Ns, Ki, Wi, Fi, Yn, Bi, Rs, As, js, Ls, Ms, Hi, oh, k6 = (oh = class {
  constructor(t) {
    pr(this, Ns, void 0);
    pr(this, Ki, void 0);
    pr(this, Wi, void 0);
    pr(this, Fi, void 0);
    pr(this, Yn, !1);
    pr(this, Bi, void 0);
    pr(this, Rs, void 0);
    pr(this, As, void 0);
    pr(this, js, void 0);
    pr(this, Ls, void 0);
    pr(this, Ms, void 0);
    pr(this, Hi, void 0);
    const {
      client: e,
      queryFlavor: r,
      version: n,
      onlineManager: s,
      buttonPosition: i,
      position: a,
      initialIsOpen: o,
      errorTypes: c,
      styleNonce: l
    } = t;
    ar(this, Ns, rr(e)), ar(this, Wi, r), ar(this, Fi, n), ar(this, Ki, s), ar(this, Bi, l), ar(this, Rs, rr(i)), ar(this, As, rr(a)), ar(this, js, rr(o)), ar(this, Ls, rr(c));
  }
  setButtonPosition(t) {
    Pt(this, Rs)[1](t);
  }
  setPosition(t) {
    Pt(this, As)[1](t);
  }
  setInitialIsOpen(t) {
    Pt(this, js)[1](t);
  }
  setErrorTypes(t) {
    Pt(this, Ls)[1](t);
  }
  setClient(t) {
    Pt(this, Ns)[1](t);
  }
  mount(t) {
    if (Pt(this, Yn))
      throw new Error("Devtools is already mounted");
    const e = RI(() => {
      const r = this, [n] = Pt(this, Rs), [s] = Pt(this, As), [i] = Pt(this, js), [a] = Pt(this, Ls), [o] = Pt(this, Ns);
      let c;
      return Pt(this, Ms) ? c = Pt(this, Ms) : (c = _I(() => import("./335X72D7-fLnkTr0A.js")), ar(this, Ms, c)), C6(Pt(this, Bi)), yI(c, vI({
        get queryFlavor() {
          return Pt(r, Wi);
        },
        get version() {
          return Pt(r, Fi);
        },
        get onlineManager() {
          return Pt(r, Ki);
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
    ar(this, Yn, !0), ar(this, Hi, e);
  }
  unmount() {
    var t;
    if (!Pt(this, Yn))
      throw new Error("Devtools is not mounted");
    (t = Pt(this, Hi)) == null || t.call(this), ar(this, Yn, !1);
  }
}, Ns = new WeakMap(), Ki = new WeakMap(), Wi = new WeakMap(), Fi = new WeakMap(), Yn = new WeakMap(), Bi = new WeakMap(), Rs = new WeakMap(), As = new WeakMap(), js = new WeakMap(), Ls = new WeakMap(), Ms = new WeakMap(), Hi = new WeakMap(), oh);
function P6(t) {
  const e = dg(t.client), r = bn.useRef(null), { buttonPosition: n, position: s, initialIsOpen: i, errorTypes: a, styleNonce: o } = t, [c] = bn.useState(
    new k6({
      client: e,
      queryFlavor: "React Query",
      version: "5",
      onlineManager: hg,
      buttonPosition: n,
      position: s,
      initialIsOpen: i,
      errorTypes: a,
      styleNonce: o
    })
  );
  return bn.useEffect(() => {
    c.setClient(e);
  }, [e, c]), bn.useEffect(() => {
    n && c.setButtonPosition(n);
  }, [n, c]), bn.useEffect(() => {
    s && c.setPosition(s);
  }, [s, c]), bn.useEffect(() => {
    c.setInitialIsOpen(i || !1);
  }, [i, c]), bn.useEffect(() => {
    c.setErrorTypes(a || []);
  }, [a, c]), bn.useEffect(() => (r.current && c.mount(r.current), () => {
    c.unmount();
  }), [c]), /* @__PURE__ */ Fc.jsx("div", { className: "tsqd-parent-container", ref: r });
}
var N6 = process.env.NODE_ENV !== "development" ? function() {
  return null;
} : P6;
const Np = new fg(), Z3 = ({
  dAppName: t,
  dAppDescription: e,
  dAppUrl: r,
  dAppIconURL: n,
  children: s,
  debugQuery: i = !1
}) => (Lr(() => {
  DS({
    dAppName: t,
    dAppDescription: e,
    dAppUrl: r,
    dAppIconURL: n,
    onDisconnect: hn.getState().onDisconnect
  }), ch.defaultMaxListeners = 100;
}, []), /* @__PURE__ */ Fc.jsxs(pg, { client: Np, children: [
  i && /* @__PURE__ */ Fc.jsx(N6, { initialIsOpen: !1 }),
  s
] })), K3 = async () => {
  const t = await bt(), e = await t.getSession();
  if (!e || !t)
    return { error: "no session or connection" };
  const r = {
    topic: e.topic,
    chainId: "aleo:3",
    request: {
      jsonrpc: "2.0",
      method: "getSelectedAccount"
    }
  };
  if (hs()) {
    console.log("getSelectedAccount: test 1"), console.log(e);
    try {
      const n = await window.aleo.puzzleWalletClient.getSelectedAccount.query(r);
      return console.log("getSelectedAccount: test 2", n), n;
    } catch (n) {
      return console.error("getAccount error", n), { error: n.message };
    }
  }
  try {
    return await t.request(r);
  } catch (n) {
    const s = n.message;
    return console.error("getAccount error", s), { error: s };
  }
}, W3 = async ({
  address: t
}) => {
  const e = await bt(), r = await e.getSession();
  if (!r || !e)
    return { error: "no session or connection" };
  const n = {
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
  };
  if (hs()) {
    console.log("getBalance: test 1");
    try {
      const s = await window.aleo.puzzleWalletClient.getBalance.query(n);
      return console.log("getBalance: test 2 response", s), s;
    } catch (s) {
      const i = s.message;
      return console.error("getBalance error", i), { error: i };
    }
  }
  try {
    return await e.request(n);
  } catch (s) {
    const i = s.message;
    return console.error("getBalance error", i), { error: i };
  }
}, F3 = async () => {
  const t = await bt();
  if (!t)
    throw new Error("call setConnection() first!");
  const e = await t.getSession();
  if (e)
    return console.log("Already connected!", e), e;
  try {
    const r = await t.connect({
      requiredNamespaces: {
        aleo: {
          methods: lh,
          chains: ya,
          events: uh
        }
      }
    });
    return Mo.emit("session_change"), r && await Wf(r.topic), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), r;
  } catch (r) {
    console.error("connect error", r.message);
  }
}, B3 = async (t) => {
  const e = await bt(), r = await (e == null ? void 0 : e.getSession());
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
}, H3 = async () => {
  const t = await bt(), e = await (t == null ? void 0 : t.getSession());
  if (!e || !t)
    return { error: "no session or connection" };
  const r = {
    topic: e.topic,
    chainId: "aleo:3",
    request: {
      jsonrpc: "2.0",
      method: "createSharedState",
      params: {}
    }
  };
  if (hs()) {
    console.log("createSharedState: test 1");
    try {
      const n = await window.aleo.puzzleWalletClient.createSharedState.mutation(
        r
      );
      return console.log("createSharedState: test 2", n), n;
    } catch (n) {
      const s = n.message;
      return console.error("createSharedState error", s), { error: s };
    }
  }
  try {
    return await t.request(r);
  } catch (n) {
    const s = n.message;
    return console.error("createSharedState error", s), { error: s };
  }
}, G3 = async (t) => {
  const e = await bt(), r = await (e == null ? void 0 : e.getSession());
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
}, Y3 = async () => {
  const t = await bt(), e = await (t == null ? void 0 : t.getSession());
  if (!e || !t)
    return { error: "no session or connection" };
  try {
    try {
      await t.disconnect({
        reason: ol("USER_DISCONNECTED"),
        topic: e.topic
      }), localStorage.removeItem("puzzle-hasDesktopConnection"), Mo.emit("session_change");
    } catch (r) {
      console.warn(r);
    }
    return {};
  } catch (r) {
    const n = r.message;
    return console.error("error disconnecting", n), { error: n };
  }
}, J3 = async ({
  id: t,
  address: e
}) => {
  const r = await bt(), n = await (r == null ? void 0 : r.getSession());
  if (!n || !r)
    return { event: void 0, error: "no session or connection" };
  const s = {
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
  };
  if (hs()) {
    console.log("getEvent: test 1");
    try {
      const a = await window.aleo.puzzleWalletClient.getEvent.query(s);
      return console.log("getEvent: test 2", a), a;
    } catch (a) {
      const o = a.message;
      return console.error("getEvents error", o), { error: o };
    }
  }
  const i = async () => await r.request(s);
  try {
    return await i();
  } catch (a) {
    const o = a.message;
    return console.error("getEvents error", o), { error: o };
  }
}, X3 = async (t) => {
  const e = await bt(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { events: void 0, error: "no session or connection" };
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const n = {
    topic: r.topic,
    chainId: "aleo:3",
    request: {
      jsonrpc: "2.0",
      method: "getEvents",
      params: {
        filter: t,
        page: 0
      }
    }
  };
  if (hs()) {
    console.log("getEvents: test 1");
    try {
      const i = await window.aleo.puzzleWalletClient.getEvents.query(n);
      return console.log("getEvents: test 2", i), i;
    } catch (i) {
      const a = i.message;
      return console.error("getEvents error", a), { error: a };
    }
  }
  const s = async (i = 0) => await e.request(n);
  try {
    return await s();
  } catch (i) {
    const a = i.message;
    return console.error("getEvents error", a), { error: a };
  }
}, Q3 = async (t) => {
  const e = await bt(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { error: "no session or connection" };
  const n = {
    topic: r.topic,
    chainId: "aleo:3",
    request: {
      jsonrpc: "2.0",
      method: "importSharedState",
      params: {
        seed: t
      }
    }
  };
  if (hs()) {
    console.log("importSharedState: test 1");
    try {
      const s = await window.aleo.puzzleWalletClient.importSharedState.mutation(
        n
      );
      return console.log("importSharedState: test 2", s), s;
    } catch (s) {
      const i = s.message;
      return console.error("importSharedState error", i), { error: i };
    }
  }
  try {
    return await e.request(n);
  } catch (s) {
    const i = s.message;
    return console.error("importSharedState error", i), { error: i };
  }
}, e2 = async ({
  address: t,
  filter: e,
  page: r = 0
}) => {
  const n = await bt(), s = await (n == null ? void 0 : n.getSession());
  if (!s || !n)
    return { error: "no session or connection" };
  const i = {
    topic: s.topic,
    chainId: "aleo:3",
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
  if (hs()) {
    console.log("getRecords: test 1");
    try {
      const o = await window.aleo.puzzleWalletClient.getRecords.query(i);
      return console.log("getRecords: test 2", o), o;
    } catch (o) {
      const c = o.message;
      return console.error("getRecords error", c), { error: c };
    }
  }
  const a = async (o = 0) => await n.request(i);
  try {
    return await a();
  } catch (o) {
    const c = o.message;
    return console.error("getRecords error", c), { error: c };
  }
}, t2 = async ({
  message: t,
  address: e
}) => {
  const r = await bt(), n = await (r == null ? void 0 : r.getSession());
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
          address: Al.test(e ?? "") ? e : void 0
        }
      }
    });
  } catch (s) {
    const i = s.message;
    return console.error("signature error", i), { error: i };
  }
}, r2 = 20;
export {
  ua as $,
  tp as A,
  y3 as B,
  b3 as C,
  w3 as D,
  _3 as E,
  E3 as F,
  Oo as G,
  T3 as H,
  S3 as I,
  W6 as J,
  k3 as K,
  q3 as L,
  j3 as M,
  gh as N,
  A3 as O,
  P3 as P,
  Mt as Q,
  Qn as R,
  x3 as S,
  wI as T,
  MI as U,
  R3 as V,
  Cr as W,
  O3 as X,
  K6 as Y,
  nu as Z,
  I3 as _,
  dr as a,
  t2 as a$,
  To as a0,
  C3 as a1,
  v3 as a2,
  N3 as a3,
  ip as a4,
  Jd as a5,
  nc as a6,
  V6 as a7,
  Z6 as a8,
  F6 as a9,
  Gx as aA,
  Jx as aB,
  Xx as aC,
  Bx as aD,
  r3 as aE,
  u3 as aF,
  l3 as aG,
  o3 as aH,
  d3 as aI,
  s3 as aJ,
  i3 as aK,
  a3 as aL,
  c3 as aM,
  n3 as aN,
  h3 as aO,
  r2 as aP,
  K3 as aQ,
  W3 as aR,
  F3 as aS,
  B3 as aT,
  H3 as aU,
  G3 as aV,
  Y3 as aW,
  J3 as aX,
  X3 as aY,
  Q3 as aZ,
  e2 as a_,
  B6 as aa,
  H6 as ab,
  G6 as ac,
  Y6 as ad,
  J6 as ae,
  X6 as af,
  Q6 as ag,
  e3 as ah,
  t3 as ai,
  f3 as aj,
  hh as ak,
  Gi as al,
  Ug as am,
  fh as an,
  Sr as ao,
  Np as ap,
  Z3 as aq,
  hn as ar,
  Hd as as,
  Vc as at,
  qc as au,
  Kc as av,
  Zc as aw,
  Al as ax,
  Yx as ay,
  Hx as az,
  Bt as b,
  lh as b0,
  ya as b1,
  uh as b2,
  dh as b3,
  mg as b4,
  vg as b5,
  Fl as b6,
  $6 as b7,
  ep as b8,
  Wf as b9,
  hs as ba,
  Mo as bb,
  q6 as bc,
  bt as bd,
  rr as c,
  AI as d,
  yI as e,
  Ds as f,
  V3 as g,
  sp as h,
  Jc as i,
  es as j,
  LI as k,
  g3 as l,
  $3 as m,
  Ua as n,
  iI as o,
  Yc as p,
  L3 as q,
  M3 as r,
  U3 as s,
  Qg as t,
  UI as u,
  vI as v,
  D3 as w,
  z3 as x,
  p3 as y,
  $i as z
};
