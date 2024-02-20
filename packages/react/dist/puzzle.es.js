import Me, { useEffect as k, useState as te } from "react";
import { WalletConnectModalSign as kt } from "@walletconnect/modal-sign-html";
import Ye from "events";
import { create as Dt } from "zustand";
import { useQuery as Nt, QueryClient as Lt, QueryClientProvider as Ft } from "@tanstack/react-query";
import { getWalletConnectModalSignClient as Be, wc_aleo_methods as zt, wc_aleo_chains as Wt, wc_events as $t, emitter as He, log_sdk as ve, configureConnection as Ut } from "@puzzlehq/sdk-core";
import { getSdkError as Ke } from "@walletconnect/utils";
import { aleoAddressRegex as Je } from "@puzzlehq/types";
import { AssetType as Mr, EventStatus as Yr, EventType as Br, Network as Hr, Visibility as Kr, aleoAddressRegex as Jr, aleoFieldRegex as Vr, aleoPrivateKeyRegex as Gr, aleoTransactionIdRegex as Qr, aleoU32 as Xr, aleoU64 as Zr, aleoViewKeyRegex as en, zodAddress as tn, zodEventStatus as rn, zodEventType as nn, zodField as on, zodNetwork as an, zodPrivateKey as sn, zodTransactionId as cn, zodU32 as un, zodU64 as ln, zodViewKey as dn, zodVisibility as fn } from "@puzzlehq/types";
import Mt from "debug";
import { ReactQueryDevtools as Yt } from "@tanstack/react-query-devtools";
const Ve = [
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
], pe = ["aleo:1"], Ge = ["chainChanged", "accountSelected", "selectedAccountSynced", "sharedAccountSynced"], Bt = "f0aaeffe71b636da453fce042d79d723", Ht = {
  standaloneChains: pe,
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
}, fr = {
  requiredNamespaces: {
    aleo: {
      methods: Ve,
      chains: pe,
      events: Ge
    }
  }
}, re = new Ye();
let B;
function vr(t) {
  B = new kt({
    projectId: Bt,
    metadata: {
      name: t.dAppName,
      description: t.dAppDescription,
      url: t.dAppUrl,
      icons: [t.dAppIconURL]
    },
    modalOptions: { ...Ht }
  }), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
}
async function T() {
  return new Promise((t) => {
    if (B)
      t(B);
    else {
      const r = setInterval(() => {
        B && (clearInterval(r), t(B));
      }, 200);
    }
    window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
  });
}
function Qe(t) {
  k(() => (T().then((r) => {
    r.onSessionDelete(t);
  }), () => {
    T().then((r) => {
      r.offSessionDelete(t);
    });
  }), [t]);
}
function Kt(t) {
  k(() => (T().then((r) => {
    r.onSessionExpire(t);
  }), () => {
    T().then((r) => {
      r.offSessionExpire(t);
    });
  }), [t]);
}
function Xe(t) {
  k(() => (T().then((r) => {
    r.onSessionUpdate(t);
  }), () => {
    T().then((r) => {
      r.offSessionUpdate(t);
    });
  }), [t]);
}
function q() {
  const [t, r] = te(void 0);
  return Qe((n) => {
    n.topic === (t == null ? void 0 : t.topic) && r(void 0);
  }), Xe((n) => {
    if (t && n.topic === (t == null ? void 0 : t.topic)) {
      const { namespaces: o } = n.params, s = { ...t, namespaces: o };
      r(s);
    }
  }), Kt((n) => {
    t && n.topic === (t == null ? void 0 : t.topic) && r(void 0);
  }), k(() => {
    async function n() {
      const s = await (await T()).getSession();
      r(s);
    }
    return n(), re.on("session_change", n), () => {
      re.off("session_change", n);
    };
  }, []), t;
}
function K(t) {
  k(() => (T().then((r) => {
    r.onSessionEvent(t);
  }), () => {
    T().then((r) => {
      r.offSessionEvent(t);
    });
  }), [t]);
}
var Jt = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
function Vt(t, r) {
  let n;
  try {
    n = t();
  } catch {
    return;
  }
  return {
    getItem: (s) => {
      var a;
      const d = (v) => v === null ? null : JSON.parse(v, r == null ? void 0 : r.reviver), l = (a = n.getItem(s)) != null ? a : null;
      return l instanceof Promise ? l.then(d) : d(l);
    },
    setItem: (s, a) => n.setItem(
      s,
      JSON.stringify(a, r == null ? void 0 : r.replacer)
    ),
    removeItem: (s) => n.removeItem(s)
  };
}
const H = (t) => (r) => {
  try {
    const n = t(r);
    return n instanceof Promise ? n : {
      then(o) {
        return H(o)(n);
      },
      catch(o) {
        return this;
      }
    };
  } catch (n) {
    return {
      then(o) {
        return this;
      },
      catch(o) {
        return H(o)(n);
      }
    };
  }
}, Gt = (t, r) => (n, o, s) => {
  let a = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (g) => g,
    version: 0,
    merge: (g, R) => ({
      ...R,
      ...g
    }),
    ...r
  }, d = !1;
  const l = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set();
  let u;
  try {
    u = a.getStorage();
  } catch {
  }
  if (!u)
    return t(
      (...g) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
        ), n(...g);
      },
      o,
      s
    );
  const h = H(a.serialize), m = () => {
    const g = a.partialize({ ...o() });
    let R;
    const f = h({ state: g, version: a.version }).then(
      (j) => u.setItem(a.name, j)
    ).catch((j) => {
      R = j;
    });
    if (R)
      throw R;
    return f;
  }, _ = s.setState;
  s.setState = (g, R) => {
    _(g, R), m();
  };
  const E = t(
    (...g) => {
      n(...g), m();
    },
    o,
    s
  );
  let I;
  const y = () => {
    var g;
    if (!u)
      return;
    d = !1, l.forEach((f) => f(o()));
    const R = ((g = a.onRehydrateStorage) == null ? void 0 : g.call(a, o())) || void 0;
    return H(u.getItem.bind(u))(a.name).then((f) => {
      if (f)
        return a.deserialize(f);
    }).then((f) => {
      if (f)
        if (typeof f.version == "number" && f.version !== a.version) {
          if (a.migrate)
            return a.migrate(
              f.state,
              f.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return f.state;
    }).then((f) => {
      var j;
      return I = a.merge(
        f,
        (j = o()) != null ? j : E
      ), n(I, !0), m();
    }).then(() => {
      R == null || R(I, void 0), d = !0, v.forEach((f) => f(I));
    }).catch((f) => {
      R == null || R(void 0, f);
    });
  };
  return s.persist = {
    setOptions: (g) => {
      a = {
        ...a,
        ...g
      }, g.getStorage && (u = g.getStorage());
    },
    clearStorage: () => {
      u == null || u.removeItem(a.name);
    },
    getOptions: () => a,
    rehydrate: () => y(),
    hasHydrated: () => d,
    onHydrate: (g) => (l.add(g), () => {
      l.delete(g);
    }),
    onFinishHydration: (g) => (v.add(g), () => {
      v.delete(g);
    })
  }, y(), I || E;
}, Qt = (t, r) => (n, o, s) => {
  let a = {
    storage: Vt(() => localStorage),
    partialize: (y) => y,
    version: 0,
    merge: (y, g) => ({
      ...g,
      ...y
    }),
    ...r
  }, d = !1;
  const l = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set();
  let u = a.storage;
  if (!u)
    return t(
      (...y) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
        ), n(...y);
      },
      o,
      s
    );
  const h = () => {
    const y = a.partialize({ ...o() });
    return u.setItem(a.name, {
      state: y,
      version: a.version
    });
  }, m = s.setState;
  s.setState = (y, g) => {
    m(y, g), h();
  };
  const _ = t(
    (...y) => {
      n(...y), h();
    },
    o,
    s
  );
  let E;
  const I = () => {
    var y, g;
    if (!u)
      return;
    d = !1, l.forEach((f) => {
      var j;
      return f((j = o()) != null ? j : _);
    });
    const R = ((g = a.onRehydrateStorage) == null ? void 0 : g.call(a, (y = o()) != null ? y : _)) || void 0;
    return H(u.getItem.bind(u))(a.name).then((f) => {
      if (f)
        if (typeof f.version == "number" && f.version !== a.version) {
          if (a.migrate)
            return a.migrate(
              f.state,
              f.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return f.state;
    }).then((f) => {
      var j;
      return E = a.merge(
        f,
        (j = o()) != null ? j : _
      ), n(E, !0), h();
    }).then(() => {
      R == null || R(E, void 0), E = o(), d = !0, v.forEach((f) => f(E));
    }).catch((f) => {
      R == null || R(void 0, f);
    });
  };
  return s.persist = {
    setOptions: (y) => {
      a = {
        ...a,
        ...y
      }, y.storage && (u = y.storage);
    },
    clearStorage: () => {
      u == null || u.removeItem(a.name);
    },
    getOptions: () => a,
    rehydrate: () => I(),
    hasHydrated: () => d,
    onHydrate: (y) => (l.add(y), () => {
      l.delete(y);
    }),
    onFinishHydration: (y) => (v.add(y), () => {
      v.delete(y);
    })
  }, a.skipHydration || I(), E || _;
}, Xt = (t, r) => "getStorage" in r || "serialize" in r || "deserialize" in r ? ((Jt ? "production" : void 0) !== "production" && console.warn(
  "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
), Gt(t, r)) : Qt(t, r), Zt = Xt, L = Dt()(
  Zt((t, r) => ({
    account: void 0,
    chainId: "aleo:1",
    // todo - figure out how to populate this from useConnect
    setAccount: (n) => {
      t({ account: n });
    },
    setChainId: (n) => {
      t({ chainId: n });
    },
    onDisconnect: () => {
      t({
        account: void 0,
        chainId: void 0
      }), tt.clear(), console.log("onDisconnect called!");
    }
  }), {
    name: "puzzle-wallet-store"
  })
);
function he() {
  const [t, r] = te(void 0), [n, o] = te(void 0), [s, a] = te(!1);
  return { data: t, error: n, loading: s, setData: r, setError: o, setLoading: a };
}
async function Ze(t, r) {
  const o = await (await T()).request(t);
  if (o === void 0 && r)
    throw console.error("Result is undefined, retrying..."), new Error("Result is undefined, retrying...");
  return o;
}
function J({ queryKey: t, wcParams: r, enabled: n, queryOptions: o }) {
  return Nt(
    t,
    async () => Ze(r, t),
    o ?? {
      staleTime: t[0] === "getEvent" ? 7500 : 45e3,
      refetchInterval: t[0] === "getEvent" ? 5e3 : 3e4,
      refetchIntervalInBackground: !0,
      enabled: n,
      retry: !0
    }
  );
}
function V(t) {
  const { data: r, error: n, loading: o, setData: s, setError: a, setLoading: d } = he();
  async function l(v) {
    try {
      d(!0), a(void 0);
      const u = await Ze(t ?? v);
      return s(u), u;
    } catch (u) {
      throw a(u), u;
    } finally {
      d(!1);
    }
  }
  return { data: r, error: n, loading: o, request: l };
}
const de = (t, r = !0, n = 4, o = !0) => t ? t.length < n ? t : o ? `(...${t.slice(-n)})` : t.length < n * 2 ? t : `${t.slice(
  0,
  n + (r ? 5 : 0)
)}...${t.slice(t.length - n, t.length)}` : "", pr = () => {
  const t = q(), [r, n, o] = L((u) => [u.account, u.setAccount, u.onDisconnect]), { refetch: s, data: a, error: d, isLoading: l } = J({
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
  K(({ params: u, topic: h }) => {
    if (u.event.name === "accountSelected" && t && t.topic === h) {
      const _ = u.event.address ?? u.event.data.address, E = u.chainId.split(":")[0], I = u.chainId.split(":")[1];
      n({
        network: E,
        chainId: I,
        address: _,
        shortenedAddress: de(_)
      });
    }
  }), Xe(({ params: u, topic: h }) => {
    const m = u.event.address ?? u.event.data.address, _ = u.chainId.split(":")[0], E = u.chainId.split(":")[1];
    n({
      network: _,
      chainId: E,
      address: m,
      shortenedAddress: de(m)
    });
  }), Qe(({ params: u, topic: h }) => {
    o();
  }), k(() => {
    t && !l && s();
  }, [t == null ? void 0 : t.topic]), k(() => {
    if (a) {
      const u = a, h = u == null ? void 0 : u.account;
      h && n(h);
    }
  }, [a]);
  const v = d ? d.message : a && a.error;
  return {
    account: r,
    error: v,
    loading: l
  };
}, hr = ({ address: t, multisig: r }) => {
  const n = q(), [o] = L((m) => [m.account]), { refetch: s, data: a, error: d, isLoading: l } = J({
    queryKey: ["useBalance", t, (o == null ? void 0 : o.address) ?? "", r, n == null ? void 0 : n.topic],
    enabled: !!n && !!o && (r ? !!t : !0),
    wcParams: {
      topic: n == null ? void 0 : n.topic,
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
  K(({ params: m, topic: _ }) => {
    const E = m.event.name, I = m.event.address ?? m.event.data.address;
    (E === "selectedAccountSynced" && !r || E === "sharedAccountSynced" && r && I === t) && s();
  }), k(() => {
    n && !l && s();
  }, [n == null ? void 0 : n.topic]);
  const v = d ? d.message : a && a.error, u = a;
  return { balances: u == null ? void 0 : u.balances, error: v, loading: l };
};
function gr() {
  const r = !!q(), { data: n, error: o, loading: s, setData: a, setError: d, setLoading: l } = he(), [v] = L((h) => [h.setAccount]);
  async function u() {
    try {
      l(!0), d(void 0);
      const m = await (await Be()).connect({
        requiredNamespaces: {
          aleo: {
            methods: zt,
            chains: Wt,
            events: $t
          }
        }
      });
      a(m);
      const _ = m.namespaces.aleo.accounts[0].split(":");
      return v({
        network: _[0],
        chainId: _[1],
        address: _[2],
        shortenedAddress: de(_[2])
      }), He.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), m;
    } catch (h) {
      throw d(h), h;
    } finally {
      l(!1);
    }
  }
  return { data: n, error: o, loading: s, isConnected: r, connect: u };
}
const mr = () => {
  const t = q(), { request: r, data: n, error: o, loading: s } = V({
    topic: (t == null ? void 0 : t.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "createSharedState",
      params: {}
    }
  }), a = o ? o.message : n && n.error, d = n;
  return { createSharedState: () => {
    t && !s && r();
  }, data: d == null ? void 0 : d.data, loading: s, error: a };
}, yr = (t) => {
  ve("useDecrypt", t);
  const r = q(), { request: n, data: o, error: s, loading: a } = V({
    topic: (r == null ? void 0 : r.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "decrypt",
      params: {
        ciphertexts: t
      }
    }
  }), d = s ? s.message : o && o.error, l = o;
  return { decrypt: () => {
    t && r && !a && n();
  }, plaintexts: l == null ? void 0 : l.plaintexts, loading: a, error: d };
};
function Sr() {
  const t = q(), [r] = L((l) => [l.onDisconnect]), { error: n, loading: o, setError: s, setLoading: a } = he();
  async function d() {
    if (!t || o) {
      t || r();
      return;
    }
    try {
      a(!0), s(void 0);
      try {
        await (await Be()).disconnect({
          topic: t.topic,
          reason: Ke("USER_DISCONNECTED")
        }), He.emit("session_change");
      } catch (l) {
        console.warn(l);
      }
      L.getState().onDisconnect();
    } catch (l) {
      throw s(l), l;
    } finally {
      a(!1);
    }
  }
  return { error: n, loading: o, disconnect: d };
}
const Er = ({ id: t, address: r, multisig: n = !1 }) => {
  const o = q(), [s] = L((y) => [y.account]), a = t !== void 0 && t !== "" && !!o && !!s && (n ? !!r : !0), { refetch: d, data: l, error: v, isLoading: u } = J({
    queryKey: ["useEvent", s == null ? void 0 : s.address, r, n, t, o == null ? void 0 : o.topic],
    enabled: a,
    wcParams: {
      topic: o == null ? void 0 : o.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "getEvent",
        params: {
          id: t ?? "",
          address: r
        }
      }
    }
  });
  K(({ params: y, topic: g }) => {
    const R = y.event.name, f = y.event.address ?? y.event.data.address;
    (t && R === "selectedAccountSynced" && !n || R === "sharedAccountSynced" && n && f === r) && d();
  });
  const h = !!o && !!s && !!t && (n ? !!r : !0);
  k(() => {
    h && !u && d();
  }, [h]);
  const m = () => {
    h && !u && d();
  }, _ = v ? v.message : l && l.error, E = l, I = E == null ? void 0 : E.event;
  return { fetchEvent: m, event: I, error: _, loading: u };
}, wr = ({ filter: t, page: r }) => {
  const n = q(), [o] = L((I) => [I.account]);
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const { refetch: s, data: a, error: d, isLoading: l } = J({
    queryKey: ["useEvents", o == null ? void 0 : o.address, t, r, n == null ? void 0 : n.topic],
    enabled: !!n && !!o,
    wcParams: {
      topic: (n == null ? void 0 : n.topic) ?? "",
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "getEvents",
        params: {
          filter: t,
          page: r
        }
      }
    }
  });
  K(({ id: I, params: y, topic: g }) => {
    y.event.name === "selectedAccountSynced" && s();
  });
  const v = !!n && !!o;
  k(() => {
    v && !l && s();
  }, [v]);
  const u = () => {
    v && !l && s();
  }, h = d ? d.message : a && a.error, m = a, _ = m == null ? void 0 : m.events, E = (m == null ? void 0 : m.pageCount) ?? 0;
  return { fetchPage: u, events: _, error: h, loading: l, page: r, pageCount: E };
}, _r = (t) => {
  const r = q(), { request: n, data: o, error: s, loading: a } = V({
    topic: (r == null ? void 0 : r.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "importSharedState",
      params: {
        seed: t
      }
    }
  }), d = s ? s.message : o && o.error, l = o;
  return { importSharedState: () => {
    r && !a && n();
  }, data: l == null ? void 0 : l.data, loading: a, error: d };
}, Rr = (t) => {
  try {
    return JSON.stringify(t, null, 2).replaceAll('"', "") ?? "";
  } catch {
    return "";
  }
}, br = ({ address: t, multisig: r = !1, filter: n, page: o }) => {
  const s = q(), [a] = L((g) => [
    g.account
  ]), { refetch: d, data: l, error: v, isLoading: u } = J({
    queryKey: ["useRecords", a == null ? void 0 : a.address, t, r, n, o, s == null ? void 0 : s.topic],
    enabled: (r ? !!t : !0) && !!s && !!a,
    wcParams: {
      topic: s == null ? void 0 : s.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "getRecords",
        params: {
          address: t,
          filter: n,
          page: o
        }
      }
    }
  }), h = !!s && !!a && (r ? !!t : !0);
  K(({ params: g }) => {
    const R = g.event.name, f = g.event.address ?? g.event.data.address;
    (R === "selectedAccountSynced" && !r || R === "sharedAccountSynced" && r && f === t) && d();
  });
  const m = () => {
    h && !u && (ve("useRecords refetching...", [t, r, n, o]), d());
  }, _ = v ? v.message : l && l.error, E = l, I = E == null ? void 0 : E.records, y = (E == null ? void 0 : E.pageCount) ?? 0;
  return { fetchPage: m, records: I, error: _, loading: u, page: o, pageCount: y };
}, Cr = (t) => {
  const r = q(), n = t == null ? void 0 : t.inputs.map((h) => typeof h == "string" ? h : h.plaintext), { request: o, data: s, error: a, loading: d } = V({
    topic: (r == null ? void 0 : r.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "requestCreateEvent",
      params: {
        ...t,
        inputs: n
      }
    }
  }), l = a ? a.message : s && s.error, v = s;
  return { createEvent: () => {
    t && r && !d && (ve("useCreateEvent requesting...", t), o());
  }, eventId: v == null ? void 0 : v.eventId, loading: d, error: l };
}, et = Mt("wallet:sdk");
et.enabled = !0;
const Ir = (t, r) => {
  const n = q(), { request: o, data: s, error: a, loading: d } = V({
    topic: (n == null ? void 0 : n.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "requestSignature",
      params: {
        message: t,
        address: Je.test(r ?? "") ? r : void 0
      }
    }
  }), l = a ? a.message : s && s.error;
  return { requestSignature: () => {
    n && !d && (et("useRequestSignature requesting...", [t, r]), o());
  }, response: s, loading: d, error: l };
};
var fe = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function er() {
  return We || (We = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Me, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), l = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), I = Symbol.iterator, y = "@@iterator";
    function g(e) {
      if (e === null || typeof e != "object")
        return null;
      var c = I && e[I] || e[y];
      return typeof c == "function" ? c : null;
    }
    var R = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(e) {
      {
        for (var c = arguments.length, i = new Array(c > 1 ? c - 1 : 0), p = 1; p < c; p++)
          i[p - 1] = arguments[p];
        j("error", e, i);
      }
    }
    function j(e, c, i) {
      {
        var p = R.ReactDebugCurrentFrame, b = p.getStackAddendum();
        b !== "" && (c += "%s", i = i.concat([b]));
        var C = i.map(function(w) {
          return String(w);
        });
        C.unshift("Warning: " + c), Function.prototype.apply.call(console[e], console, C);
      }
    }
    var rt = !1, nt = !1, ot = !1, at = !1, st = !1, ge;
    ge = Symbol.for("react.module.reference");
    function ct(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === a || st || e === s || e === u || e === h || at || e === E || rt || nt || ot || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === m || e.$$typeof === d || e.$$typeof === l || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ge || e.getModuleId !== void 0));
    }
    function it(e, c, i) {
      var p = e.displayName;
      if (p)
        return p;
      var b = c.displayName || c.name || "";
      return b !== "" ? i + "(" + b + ")" : i;
    }
    function me(e) {
      return e.displayName || "Context";
    }
    function D(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case s:
          return "StrictMode";
        case u:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            var c = e;
            return me(c) + ".Consumer";
          case d:
            var i = e;
            return me(i._context) + ".Provider";
          case v:
            return it(e, e.render, "ForwardRef");
          case m:
            var p = e.displayName || null;
            return p !== null ? p : D(e.type) || "Memo";
          case _: {
            var b = e, C = b._payload, w = b._init;
            try {
              return D(w(C));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, $ = 0, ye, Se, Ee, we, _e, Re, be;
    function Ce() {
    }
    Ce.__reactDisabledLog = !0;
    function ut() {
      {
        if ($ === 0) {
          ye = console.log, Se = console.info, Ee = console.warn, we = console.error, _e = console.group, Re = console.groupCollapsed, be = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        $++;
      }
    }
    function lt() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, e, {
              value: ye
            }),
            info: F({}, e, {
              value: Se
            }),
            warn: F({}, e, {
              value: Ee
            }),
            error: F({}, e, {
              value: we
            }),
            group: F({}, e, {
              value: _e
            }),
            groupCollapsed: F({}, e, {
              value: Re
            }),
            groupEnd: F({}, e, {
              value: be
            })
          });
        }
        $ < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = R.ReactCurrentDispatcher, oe;
    function G(e, c, i) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (b) {
            var p = b.stack.trim().match(/\n( *(at )?)/);
            oe = p && p[1] || "";
          }
        return `
` + oe + e;
      }
    }
    var ae = !1, Q;
    {
      var dt = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new dt();
    }
    function Ie(e, c) {
      if (!e || ae)
        return "";
      {
        var i = Q.get(e);
        if (i !== void 0)
          return i;
      }
      var p;
      ae = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var C;
      C = ne.current, ne.current = null, ut();
      try {
        if (c) {
          var w = function() {
            throw Error();
          };
          if (Object.defineProperty(w.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(w, []);
            } catch (N) {
              p = N;
            }
            Reflect.construct(e, [], w);
          } else {
            try {
              w.call();
            } catch (N) {
              p = N;
            }
            e.call(w.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (N) {
            p = N;
          }
          e();
        }
      } catch (N) {
        if (N && p && typeof N.stack == "string") {
          for (var S = N.stack.split(`
`), A = p.stack.split(`
`), P = S.length - 1, O = A.length - 1; P >= 1 && O >= 0 && S[P] !== A[O]; )
            O--;
          for (; P >= 1 && O >= 0; P--, O--)
            if (S[P] !== A[O]) {
              if (P !== 1 || O !== 1)
                do
                  if (P--, O--, O < 0 || S[P] !== A[O]) {
                    var x = `
` + S[P].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && Q.set(e, x), x;
                  }
                while (P >= 1 && O >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ne.current = C, lt(), Error.prepareStackTrace = b;
      }
      var W = e ? e.displayName || e.name : "", ze = W ? G(W) : "";
      return typeof e == "function" && Q.set(e, ze), ze;
    }
    function ft(e, c, i) {
      return Ie(e, !1);
    }
    function vt(e) {
      var c = e.prototype;
      return !!(c && c.isReactComponent);
    }
    function X(e, c, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ie(e, vt(e));
      if (typeof e == "string")
        return G(e);
      switch (e) {
        case u:
          return G("Suspense");
        case h:
          return G("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return ft(e.render);
          case m:
            return X(e.type, c, i);
          case _: {
            var p = e, b = p._payload, C = p._init;
            try {
              return X(C(b), c, i);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, Te = {}, Pe = R.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var c = e._owner, i = X(e.type, e._source, c ? c.type : null);
        Pe.setExtraStackFrame(i);
      } else
        Pe.setExtraStackFrame(null);
    }
    function pt(e, c, i, p, b) {
      {
        var C = Function.call.bind(Z);
        for (var w in e)
          if (C(e, w)) {
            var S = void 0;
            try {
              if (typeof e[w] != "function") {
                var A = Error((p || "React class") + ": " + i + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw A.name = "Invariant Violation", A;
              }
              S = e[w](c, w, p, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (P) {
              S = P;
            }
            S && !(S instanceof Error) && (ee(b), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", i, w, typeof S), ee(null)), S instanceof Error && !(S.message in Te) && (Te[S.message] = !0, ee(b), f("Failed %s type: %s", i, S.message), ee(null));
          }
      }
    }
    var ht = Array.isArray;
    function se(e) {
      return ht(e);
    }
    function gt(e) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, i = c && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function mt(e) {
      try {
        return Oe(e), !1;
      } catch {
        return !0;
      }
    }
    function Oe(e) {
      return "" + e;
    }
    function Ae(e) {
      if (mt(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gt(e)), Oe(e);
    }
    var U = R.ReactCurrentOwner, yt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, je, xe, ce;
    ce = {};
    function St(e) {
      if (Z.call(e, "ref")) {
        var c = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Et(e) {
      if (Z.call(e, "key")) {
        var c = Object.getOwnPropertyDescriptor(e, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function wt(e, c) {
      if (typeof e.ref == "string" && U.current && c && U.current.stateNode !== c) {
        var i = D(U.current.type);
        ce[i] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(U.current.type), e.ref), ce[i] = !0);
      }
    }
    function _t(e, c) {
      {
        var i = function() {
          je || (je = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function Rt(e, c) {
      {
        var i = function() {
          xe || (xe = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var bt = function(e, c, i, p, b, C, w) {
      var S = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: e,
        key: c,
        ref: i,
        props: w,
        // Record the component responsible for creating this element.
        _owner: C
      };
      return S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(S, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.defineProperty(S, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    };
    function Ct(e, c, i, p, b) {
      {
        var C, w = {}, S = null, A = null;
        i !== void 0 && (Ae(i), S = "" + i), Et(c) && (Ae(c.key), S = "" + c.key), St(c) && (A = c.ref, wt(c, b));
        for (C in c)
          Z.call(c, C) && !yt.hasOwnProperty(C) && (w[C] = c[C]);
        if (e && e.defaultProps) {
          var P = e.defaultProps;
          for (C in P)
            w[C] === void 0 && (w[C] = P[C]);
        }
        if (S || A) {
          var O = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          S && _t(w, O), A && Rt(w, O);
        }
        return bt(e, S, A, b, p, U.current, w);
      }
    }
    var ie = R.ReactCurrentOwner, qe = R.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var c = e._owner, i = X(e.type, e._source, c ? c.type : null);
        qe.setExtraStackFrame(i);
      } else
        qe.setExtraStackFrame(null);
    }
    var ue;
    ue = !1;
    function le(e) {
      return typeof e == "object" && e !== null && e.$$typeof === r;
    }
    function ke() {
      {
        if (ie.current) {
          var e = D(ie.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function It(e) {
      {
        if (e !== void 0) {
          var c = e.fileName.replace(/^.*[\\\/]/, ""), i = e.lineNumber;
          return `

Check your code at ` + c + ":" + i + ".";
        }
        return "";
      }
    }
    var De = {};
    function Tt(e) {
      {
        var c = ke();
        if (!c) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (c = `

Check the top-level render call using <` + i + ">.");
        }
        return c;
      }
    }
    function Ne(e, c) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = Tt(c);
        if (De[i])
          return;
        De[i] = !0;
        var p = "";
        e && e._owner && e._owner !== ie.current && (p = " It was passed a child from " + D(e._owner.type) + "."), z(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, p), z(null);
      }
    }
    function Le(e, c) {
      {
        if (typeof e != "object")
          return;
        if (se(e))
          for (var i = 0; i < e.length; i++) {
            var p = e[i];
            le(p) && Ne(p, c);
          }
        else if (le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var b = g(e);
          if (typeof b == "function" && b !== e.entries)
            for (var C = b.call(e), w; !(w = C.next()).done; )
              le(w.value) && Ne(w.value, c);
        }
      }
    }
    function Pt(e) {
      {
        var c = e.type;
        if (c == null || typeof c == "string")
          return;
        var i;
        if (typeof c == "function")
          i = c.propTypes;
        else if (typeof c == "object" && (c.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        c.$$typeof === m))
          i = c.propTypes;
        else
          return;
        if (i) {
          var p = D(c);
          pt(i, e.props, "prop", p, e);
        } else if (c.PropTypes !== void 0 && !ue) {
          ue = !0;
          var b = D(c);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ot(e) {
      {
        for (var c = Object.keys(e.props), i = 0; i < c.length; i++) {
          var p = c[i];
          if (p !== "children" && p !== "key") {
            z(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), z(null);
            break;
          }
        }
        e.ref !== null && (z(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), z(null));
      }
    }
    function Fe(e, c, i, p, b, C) {
      {
        var w = ct(e);
        if (!w) {
          var S = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var A = It(b);
          A ? S += A : S += ke();
          var P;
          e === null ? P = "null" : se(e) ? P = "array" : e !== void 0 && e.$$typeof === r ? (P = "<" + (D(e.type) || "Unknown") + " />", S = " Did you accidentally export a JSX literal instead of a component?") : P = typeof e, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", P, S);
        }
        var O = Ct(e, c, i, b, C);
        if (O == null)
          return O;
        if (w) {
          var x = c.children;
          if (x !== void 0)
            if (p)
              if (se(x)) {
                for (var W = 0; W < x.length; W++)
                  Le(x[W], e);
                Object.freeze && Object.freeze(x);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Le(x, e);
        }
        return e === o ? Ot(O) : Pt(O), O;
      }
    }
    function At(e, c, i) {
      return Fe(e, c, i, !0);
    }
    function jt(e, c, i) {
      return Fe(e, c, i, !1);
    }
    var xt = jt, qt = At;
    M.Fragment = o, M.jsx = xt, M.jsxs = qt;
  }()), M;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function tr() {
  if ($e)
    return Y;
  $e = 1;
  var t = Me, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(l, v, u) {
    var h, m = {}, _ = null, E = null;
    u !== void 0 && (_ = "" + u), v.key !== void 0 && (_ = "" + v.key), v.ref !== void 0 && (E = v.ref);
    for (h in v)
      o.call(v, h) && !a.hasOwnProperty(h) && (m[h] = v[h]);
    if (l && l.defaultProps)
      for (h in v = l.defaultProps, v)
        m[h] === void 0 && (m[h] = v[h]);
    return { $$typeof: r, type: l, key: _, ref: E, props: m, _owner: s.current };
  }
  return Y.Fragment = n, Y.jsx = d, Y.jsxs = d, Y;
}
process.env.NODE_ENV === "production" ? fe.exports = tr() : fe.exports = er();
var Ue = fe.exports;
const tt = new Lt(), Tr = ({ dAppName: t, dAppDescription: r, dAppUrl: n, dAppIconURL: o, children: s, debugQuery: a = !1 }) => (k(() => {
  Ut({
    dAppName: t,
    dAppDescription: r,
    dAppUrl: n,
    dAppIconURL: o
  }), Ye.defaultMaxListeners = 100;
}, []), /* @__PURE__ */ Ue.jsxs(Ft, { client: tt, children: [
  a && /* @__PURE__ */ Ue.jsx(Yt, { initialIsOpen: !1 }),
  s
] })), Pr = async () => {
  const t = await T(), r = await t.getSession();
  if (!r || !t)
    return { error: "no session or connection" };
  try {
    return await t.request({
      topic: r.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "getSelectedAccount"
      }
    });
  } catch (n) {
    const o = n.message;
    return console.error("getAccount error", o), { error: o };
  }
}, Or = async ({ address: t }) => {
  const r = await T(), n = await r.getSession();
  if (!n || !r)
    return { error: "no session or connection" };
  try {
    return await r.request({
      topic: n.topic,
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
  } catch (o) {
    const s = o.message;
    return console.error("getBalance error", s), { error: s };
  }
}, Ar = async () => {
  const t = await T();
  if (!t)
    throw new Error("call setConnection() first!");
  const r = await t.getSession();
  if (r)
    return console.log("Already connected!", r), r;
  try {
    const n = await t.connect({
      requiredNamespaces: {
        aleo: {
          methods: Ve,
          chains: pe,
          events: Ge
        }
      }
    });
    return re.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), n;
  } catch (n) {
    console.error("connect error", n.message);
  }
}, jr = async (t) => {
  const r = await T(), n = await (r == null ? void 0 : r.getSession());
  if (!n || !r)
    return { error: "no session or connection" };
  const o = t == null ? void 0 : t.inputs.map((s) => typeof s == "string" ? s : s.plaintext);
  try {
    return await r.request({
      topic: n.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "requestCreateEvent",
        params: {
          ...t,
          inputs: o
        }
      }
    });
  } catch (s) {
    const a = s.message;
    return console.error("createEvent error", a), { error: a };
  }
}, xr = async () => {
  const t = await T(), r = await (t == null ? void 0 : t.getSession());
  if (!r || !t)
    return { error: "no session or connection" };
  try {
    return await t.request({
      topic: r.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "createSharedState",
        params: {}
      }
    });
  } catch (n) {
    const o = n.message;
    return console.error("createSharedState error", o), { error: o };
  }
}, qr = async (t) => {
  const r = await T(), n = await (r == null ? void 0 : r.getSession());
  if (!n || !r)
    return { error: "no session or connection" };
  try {
    return await r.request({
      topic: n.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "decrypt",
        params: {
          ciphertexts: t
        }
      }
    });
  } catch (o) {
    return console.error("decrypt error", o.message), { error: o.message };
  }
}, kr = async () => {
  const t = await T(), r = await (t == null ? void 0 : t.getSession());
  if (!r || !t)
    return { error: "no session or connection" };
  try {
    try {
      await t.disconnect({
        reason: Ke("USER_DISCONNECTED"),
        topic: r.topic
      }), re.emit("session_change");
    } catch (n) {
      console.warn(n);
    }
    return {};
  } catch (n) {
    const o = n.message;
    return console.error("error disconnecting", o), { error: o };
  }
}, Dr = async ({
  id: t,
  address: r
}) => {
  const n = await T(), o = await (n == null ? void 0 : n.getSession());
  if (!o || !n)
    return { event: void 0, error: "no session or connection" };
  const s = async () => await n.request({
    topic: o.topic,
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "getEvent",
      params: {
        id: t,
        address: r
      }
    }
  });
  try {
    return await s();
  } catch (a) {
    const d = a.message;
    return console.error("getEvents error", d), { error: d };
  }
}, Nr = async (t) => {
  const r = await T(), n = await (r == null ? void 0 : r.getSession());
  if (!n || !r)
    return { events: void 0, error: "no session or connection" };
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const o = async (s = 0) => await r.request({
    topic: n.topic,
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
    return await o();
  } catch (s) {
    const a = s.message;
    return console.error("getEvents error", a), { error: a };
  }
}, Lr = async (t) => {
  const r = await T(), n = await (r == null ? void 0 : r.getSession());
  if (!n || !r)
    return { error: "no session or connection" };
  try {
    return await r.request({
      topic: n.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "importSharedState",
        params: {
          seed: t
        }
      }
    });
  } catch (o) {
    const s = o.message;
    return console.error("importSharedState error", s), { error: s };
  }
}, Fr = async ({
  address: t,
  filter: r,
  page: n = 0
}) => {
  const o = await T(), s = await (o == null ? void 0 : o.getSession());
  if (!s || !o)
    return { error: "no session or connection" };
  const a = async (d = 0) => await o.request({
    topic: s.topic,
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "getRecords",
      params: {
        address: t,
        filter: r,
        page: d
      }
    }
  });
  try {
    return await a();
  } catch (d) {
    const l = d.message;
    return console.error("getRecords error", l), { error: l };
  }
}, zr = async ({
  message: t,
  address: r
}) => {
  const n = await T(), o = await (n == null ? void 0 : n.getSession());
  if (!o || !n)
    return { error: "no session or connection" };
  try {
    return await n.request({
      topic: o.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "requestSignature",
        params: {
          message: t,
          address: Je.test(r ?? "") ? r : void 0
        }
      }
    });
  } catch (s) {
    const a = s.message;
    return console.error("signature error", a), { error: a };
  }
}, Wr = 20;
export {
  Mr as AssetType,
  Yr as EventStatus,
  Br as EventType,
  Hr as Network,
  Wr as PAGE_SIZE,
  Tr as PuzzleWalletProvider,
  Kr as Visibility,
  Jr as aleoAddressRegex,
  Vr as aleoFieldRegex,
  Gr as aleoPrivateKeyRegex,
  Qr as aleoTransactionIdRegex,
  Xr as aleoU32,
  Zr as aleoU64,
  en as aleoViewKeyRegex,
  vr as configureConnection,
  Ar as connect,
  xr as createSharedState,
  qr as decrypt,
  kr as disconnect,
  re as emitter,
  Pr as getAccount,
  Or as getBalance,
  Dr as getEvent,
  Nr as getEvents,
  Rr as getFormattedRecordPlaintext,
  Fr as getRecords,
  T as getWalletConnectModalSignClient,
  Lr as importSharedState,
  et as log_sdk,
  Bt as projectId,
  tt as queryClient,
  jr as requestCreateEvent,
  zr as requestSignature,
  de as shortenAddress,
  fr as signClient_puzzleProps,
  pr as useAccount,
  hr as useBalance,
  gr as useConnect,
  mr as useCreateSharedState,
  yr as useDecrypt,
  Sr as useDisconnect,
  Er as useEvent,
  wr as useEvents,
  _r as useImportSharedState,
  Qe as useOnSessionDelete,
  K as useOnSessionEvent,
  Kt as useOnSessionExpire,
  Xe as useOnSessionUpdate,
  br as useRecords,
  Cr as useRequestCreateEvent,
  Ir as useRequestSignature,
  q as useSession,
  pe as wc_aleo_chains,
  Ve as wc_aleo_methods,
  Ge as wc_events,
  Ht as web3modal_puzzle_props,
  tn as zodAddress,
  rn as zodEventStatus,
  nn as zodEventType,
  on as zodField,
  an as zodNetwork,
  sn as zodPrivateKey,
  cn as zodTransactionId,
  un as zodU32,
  ln as zodU64,
  dn as zodViewKey,
  fn as zodVisibility
};
