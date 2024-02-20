import { useEffect as w, useState as A } from "react";
import { WalletConnectModalSign as V } from "@walletconnect/modal-sign-html";
import x from "events";
import { create as H } from "zustand";
import { useQuery as Q, QueryClient as F, QueryClientProvider as G } from "@tanstack/react-query";
import { getWalletConnectModalSignClient as T, wc_aleo_methods as J, wc_aleo_chains as Z, wc_events as X, emitter as O, log_sdk as P, configureConnection as Y } from "@puzzlehq/sdk-core";
import { getSdkError as W } from "@walletconnect/utils";
import { aleoAddressRegex as b } from "@puzzlehq/types";
import { AssetType as Ze, EventStatus as Xe, EventType as Ye, Network as et, Visibility as tt, aleoAddressRegex as nt, aleoFieldRegex as ot, aleoPrivateKeyRegex as rt, aleoTransactionIdRegex as st, aleoU32 as ct, aleoU64 as at, aleoViewKeyRegex as it, zodAddress as dt, zodEventStatus as ut, zodEventType as lt, zodField as pt, zodNetwork as gt, zodPrivateKey as ht, zodTransactionId as mt, zodU32 as wt, zodU64 as vt, zodViewKey as ft, zodVisibility as St } from "@puzzlehq/types";
import ee from "debug";
import { jsxs as te, jsx as ne } from "react/jsx-runtime";
import { ReactQueryDevtools as oe } from "@tanstack/react-query-devtools";
import { persist as re } from "zustand/middleware";
const D = [
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
], j = ["aleo:1"], U = ["chainChanged", "accountSelected", "selectedAccountSynced", "sharedAccountSynced"], se = "f0aaeffe71b636da453fce042d79d723", ce = {
  standaloneChains: j,
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
}, ye = {
  requiredNamespaces: {
    aleo: {
      methods: D,
      chains: j,
      events: U
    }
  }
}, N = new x();
let I;
function Ee(e) {
  I = new V({
    projectId: se,
    metadata: {
      name: e.dAppName,
      description: e.dAppDescription,
      url: e.dAppUrl,
      icons: [e.dAppIconURL]
    },
    modalOptions: { ...ce }
  }), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
}
async function p() {
  return new Promise((e) => {
    if (I)
      e(I);
    else {
      const t = setInterval(() => {
        I && (clearInterval(t), e(I));
      }, 200);
    }
    window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
  });
}
function K(e) {
  w(() => (p().then((t) => {
    t.onSessionDelete(e);
  }), () => {
    p().then((t) => {
      t.offSessionDelete(e);
    });
  }), [e]);
}
function ae(e) {
  w(() => (p().then((t) => {
    t.onSessionExpire(e);
  }), () => {
    p().then((t) => {
      t.offSessionExpire(e);
    });
  }), [e]);
}
function $(e) {
  w(() => (p().then((t) => {
    t.onSessionUpdate(e);
  }), () => {
    p().then((t) => {
      t.offSessionUpdate(e);
    });
  }), [e]);
}
function m() {
  const [e, t] = A(void 0);
  return K((n) => {
    n.topic === (e == null ? void 0 : e.topic) && t(void 0);
  }), $((n) => {
    if (e && n.topic === (e == null ? void 0 : e.topic)) {
      const { namespaces: o } = n.params, r = { ...e, namespaces: o };
      t(r);
    }
  }), ae((n) => {
    e && n.topic === (e == null ? void 0 : e.topic) && t(void 0);
  }), w(() => {
    async function n() {
      const r = await (await p()).getSession();
      t(r);
    }
    return n(), N.on("session_change", n), () => {
      N.off("session_change", n);
    };
  }, []), e;
}
function _(e) {
  w(() => (p().then((t) => {
    t.onSessionEvent(e);
  }), () => {
    p().then((t) => {
      t.offSessionEvent(e);
    });
  }), [e]);
}
const S = H()(
  re((e, t) => ({
    account: void 0,
    chainId: "aleo:1",
    // todo - figure out how to populate this from useConnect
    setAccount: (n) => {
      e({ account: n });
    },
    setChainId: (n) => {
      e({ chainId: n });
    },
    onDisconnect: () => {
      e({
        account: void 0,
        chainId: void 0
      }), M.clear(), console.log("onDisconnect called!");
    }
  }), {
    name: "puzzle-wallet-store"
  })
);
function L() {
  const [e, t] = A(void 0), [n, o] = A(void 0), [r, s] = A(!1);
  return { data: e, error: n, loading: r, setData: t, setError: o, setLoading: s };
}
async function B(e, t) {
  const o = await (await p()).request(e);
  if (o === void 0 && t)
    throw console.error("Result is undefined, retrying..."), new Error("Result is undefined, retrying...");
  return o;
}
function q({ queryKey: e, wcParams: t, enabled: n, queryOptions: o }) {
  return Q(
    e,
    async () => B(t, e),
    o ?? {
      staleTime: e[0] === "getEvent" ? 7500 : 45e3,
      refetchInterval: e[0] === "getEvent" ? 5e3 : 3e4,
      refetchIntervalInBackground: !0,
      enabled: n,
      retry: !0
    }
  );
}
function C(e) {
  const { data: t, error: n, loading: o, setData: r, setError: s, setLoading: a } = L();
  async function c(u) {
    try {
      a(!0), s(void 0);
      const i = await B(e ?? u);
      return r(i), i;
    } catch (i) {
      throw s(i), i;
    } finally {
      a(!1);
    }
  }
  return { data: t, error: n, loading: o, request: c };
}
const R = (e, t = !0, n = 4, o = !0) => e ? e.length < n ? e : o ? `(...${e.slice(-n)})` : e.length < n * 2 ? e : `${e.slice(
  0,
  n + (t ? 5 : 0)
)}...${e.slice(e.length - n, e.length)}` : "", Ie = () => {
  const e = m(), [t, n, o] = S((i) => [i.account, i.setAccount, i.onDisconnect]), { refetch: r, data: s, error: a, isLoading: c } = q({
    queryKey: ["useAccount", e == null ? void 0 : e.topic],
    enabled: !!e,
    wcParams: {
      topic: e == null ? void 0 : e.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "getSelectedAccount"
      }
    }
  });
  _(({ params: i, topic: d }) => {
    if (i.event.name === "accountSelected" && e && e.topic === d) {
      const h = i.event.address ?? i.event.data.address, g = i.chainId.split(":")[0], v = i.chainId.split(":")[1];
      n({
        network: g,
        chainId: v,
        address: h,
        shortenedAddress: R(h)
      });
    }
  }), $(({ params: i, topic: d }) => {
    const l = i.event.address ?? i.event.data.address, h = i.chainId.split(":")[0], g = i.chainId.split(":")[1];
    n({
      network: h,
      chainId: g,
      address: l,
      shortenedAddress: R(l)
    });
  }), K(({ params: i, topic: d }) => {
    o();
  }), w(() => {
    e && !c && r();
  }, [e == null ? void 0 : e.topic]), w(() => {
    if (s) {
      const i = s, d = i == null ? void 0 : i.account;
      d && n(d);
    }
  }, [s]);
  const u = a ? a.message : s && s.error;
  return {
    account: t,
    error: u,
    loading: c
  };
}, _e = ({ address: e, multisig: t }) => {
  const n = m(), [o] = S((l) => [l.account]), { refetch: r, data: s, error: a, isLoading: c } = q({
    queryKey: ["useBalance", e, (o == null ? void 0 : o.address) ?? "", t, n == null ? void 0 : n.topic],
    enabled: !!n && !!o && (t ? !!e : !0),
    wcParams: {
      topic: n == null ? void 0 : n.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "getBalance",
        params: {
          assetId: void 0,
          address: e
        }
      }
    }
  });
  _(({ params: l, topic: h }) => {
    const g = l.event.name, v = l.event.address ?? l.event.data.address;
    (g === "selectedAccountSynced" && !t || g === "sharedAccountSynced" && t && v === e) && r();
  }), w(() => {
    n && !c && r();
  }, [n == null ? void 0 : n.topic]);
  const u = a ? a.message : s && s.error, i = s;
  return { balances: i == null ? void 0 : i.balances, error: u, loading: c };
};
function qe() {
  const t = !!m(), { data: n, error: o, loading: r, setData: s, setError: a, setLoading: c } = L(), [u] = S((d) => [d.setAccount]);
  async function i() {
    try {
      c(!0), a(void 0);
      const l = await (await T()).connect({
        requiredNamespaces: {
          aleo: {
            methods: J,
            chains: Z,
            events: X
          }
        }
      });
      s(l);
      const h = l.namespaces.aleo.accounts[0].split(":");
      return u({
        network: h[0],
        chainId: h[1],
        address: h[2],
        shortenedAddress: R(h[2])
      }), O.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), l;
    } catch (d) {
      throw a(d), d;
    } finally {
      c(!1);
    }
  }
  return { data: n, error: o, loading: r, isConnected: t, connect: i };
}
const Ce = () => {
  const e = m(), { request: t, data: n, error: o, loading: r } = C({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "createSharedState",
      params: {}
    }
  }), s = o ? o.message : n && n.error, a = n;
  return { createSharedState: () => {
    e && !r && t();
  }, data: a == null ? void 0 : a.data, loading: r, error: s };
}, Ae = (e) => {
  P("useDecrypt", e);
  const t = m(), { request: n, data: o, error: r, loading: s } = C({
    topic: (t == null ? void 0 : t.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "decrypt",
      params: {
        ciphertexts: e
      }
    }
  }), a = r ? r.message : o && o.error, c = o;
  return { decrypt: () => {
    e && t && !s && n();
  }, plaintexts: c == null ? void 0 : c.plaintexts, loading: s, error: a };
};
function Ne() {
  const e = m(), [t] = S((c) => [c.onDisconnect]), { error: n, loading: o, setError: r, setLoading: s } = L();
  async function a() {
    if (!e || o) {
      e || t();
      return;
    }
    try {
      s(!0), r(void 0);
      try {
        await (await T()).disconnect({
          topic: e.topic,
          reason: W("USER_DISCONNECTED")
        }), O.emit("session_change");
      } catch (c) {
        console.warn(c);
      }
      S.getState().onDisconnect();
    } catch (c) {
      throw r(c), c;
    } finally {
      s(!1);
    }
  }
  return { error: n, loading: o, disconnect: a };
}
const ze = ({ id: e, address: t, multisig: n = !1 }) => {
  const o = m(), [r] = S((f) => [f.account]), s = e !== void 0 && e !== "" && !!o && !!r && (n ? !!t : !0), { refetch: a, data: c, error: u, isLoading: i } = q({
    queryKey: ["useEvent", r == null ? void 0 : r.address, t, n, e, o == null ? void 0 : o.topic],
    enabled: s,
    wcParams: {
      topic: o == null ? void 0 : o.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "getEvent",
        params: {
          id: e ?? "",
          address: t
        }
      }
    }
  });
  _(({ params: f, topic: y }) => {
    const E = f.event.name, z = f.event.address ?? f.event.data.address;
    (e && E === "selectedAccountSynced" && !n || E === "sharedAccountSynced" && n && z === t) && a();
  });
  const d = !!o && !!r && !!e && (n ? !!t : !0);
  w(() => {
    d && !i && a();
  }, [d]);
  const l = () => {
    d && !i && a();
  }, h = u ? u.message : c && c.error, g = c, v = g == null ? void 0 : g.event;
  return { fetchEvent: l, event: v, error: h, loading: i };
}, Re = ({ filter: e, page: t }) => {
  const n = m(), [o] = S((v) => [v.account]);
  (e == null ? void 0 : e.programId) === "" && (e.programId = void 0);
  const { refetch: r, data: s, error: a, isLoading: c } = q({
    queryKey: ["useEvents", o == null ? void 0 : o.address, e, t, n == null ? void 0 : n.topic],
    enabled: !!n && !!o,
    wcParams: {
      topic: (n == null ? void 0 : n.topic) ?? "",
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "getEvents",
        params: {
          filter: e,
          page: t
        }
      }
    }
  });
  _(({ id: v, params: f, topic: y }) => {
    f.event.name === "selectedAccountSynced" && r();
  });
  const u = !!n && !!o;
  w(() => {
    u && !c && r();
  }, [u]);
  const i = () => {
    u && !c && r();
  }, d = a ? a.message : s && s.error, l = s, h = l == null ? void 0 : l.events, g = (l == null ? void 0 : l.pageCount) ?? 0;
  return { fetchPage: i, events: h, error: d, loading: c, page: t, pageCount: g };
}, Pe = (e) => {
  const t = m(), { request: n, data: o, error: r, loading: s } = C({
    topic: (t == null ? void 0 : t.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "importSharedState",
      params: {
        seed: e
      }
    }
  }), a = r ? r.message : o && o.error, c = o;
  return { importSharedState: () => {
    t && !s && n();
  }, data: c == null ? void 0 : c.data, loading: s, error: a };
}, je = (e) => {
  try {
    return JSON.stringify(e, null, 2).replaceAll('"', "") ?? "";
  } catch {
    return "";
  }
}, Le = ({ address: e, multisig: t = !1, filter: n, page: o }) => {
  const r = m(), [s] = S((y) => [
    y.account
  ]), { refetch: a, data: c, error: u, isLoading: i } = q({
    queryKey: ["useRecords", s == null ? void 0 : s.address, e, t, n, o, r == null ? void 0 : r.topic],
    enabled: (t ? !!e : !0) && !!r && !!s,
    wcParams: {
      topic: r == null ? void 0 : r.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "getRecords",
        params: {
          address: e,
          filter: n,
          page: o
        }
      }
    }
  }), d = !!r && !!s && (t ? !!e : !0);
  _(({ params: y }) => {
    const E = y.event.name, z = y.event.address ?? y.event.data.address;
    (E === "selectedAccountSynced" && !t || E === "sharedAccountSynced" && t && z === e) && a();
  });
  const l = () => {
    d && !i && (P("useRecords refetching...", [e, t, n, o]), a());
  }, h = u ? u.message : c && c.error, g = c, v = g == null ? void 0 : g.records, f = (g == null ? void 0 : g.pageCount) ?? 0;
  return { fetchPage: l, records: v, error: h, loading: i, page: o, pageCount: f };
}, xe = (e) => {
  const t = m(), n = e == null ? void 0 : e.inputs.map((d) => typeof d == "string" ? d : d.plaintext), { request: o, data: r, error: s, loading: a } = C({
    topic: (t == null ? void 0 : t.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "requestCreateEvent",
      params: {
        ...e,
        inputs: n
      }
    }
  }), c = s ? s.message : r && r.error, u = r;
  return { createEvent: () => {
    e && t && !a && (P("useCreateEvent requesting...", e), o());
  }, eventId: u == null ? void 0 : u.eventId, loading: a, error: c };
}, k = ee("wallet:sdk");
k.enabled = !0;
const Te = (e, t) => {
  const n = m(), { request: o, data: r, error: s, loading: a } = C({
    topic: (n == null ? void 0 : n.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "requestSignature",
      params: {
        message: e,
        address: b.test(t ?? "") ? t : void 0
      }
    }
  }), c = s ? s.message : r && r.error;
  return { requestSignature: () => {
    n && !a && (k("useRequestSignature requesting...", [e, t]), o());
  }, response: r, loading: a, error: c };
}, M = new F(), Oe = ({ dAppName: e, dAppDescription: t, dAppUrl: n, dAppIconURL: o, children: r, debugQuery: s = !1 }) => (w(() => {
  Y({
    dAppName: e,
    dAppDescription: t,
    dAppUrl: n,
    dAppIconURL: o
  }), x.defaultMaxListeners = 100;
}, []), /* @__PURE__ */ te(G, { client: M, children: [
  s && /* @__PURE__ */ ne(oe, { initialIsOpen: !1 }),
  r
] })), We = async () => {
  const e = await p(), t = await e.getSession();
  if (!t || !e)
    return { error: "no session or connection" };
  try {
    return await e.request({
      topic: t.topic,
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
}, be = async ({ address: e }) => {
  const t = await p(), n = await t.getSession();
  if (!n || !t)
    return { error: "no session or connection" };
  try {
    return await t.request({
      topic: n.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "getBalance",
        params: {
          assetId: void 0,
          address: e
        }
      }
    });
  } catch (o) {
    const r = o.message;
    return console.error("getBalance error", r), { error: r };
  }
}, De = async () => {
  const e = await p();
  if (!e)
    throw new Error("call setConnection() first!");
  const t = await e.getSession();
  if (t)
    return console.log("Already connected!", t), t;
  try {
    const n = await e.connect({
      requiredNamespaces: {
        aleo: {
          methods: D,
          chains: j,
          events: U
        }
      }
    });
    return N.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), n;
  } catch (n) {
    console.error("connect error", n.message);
  }
}, Ue = async (e) => {
  const t = await p(), n = await (t == null ? void 0 : t.getSession());
  if (!n || !t)
    return { error: "no session or connection" };
  const o = e == null ? void 0 : e.inputs.map((r) => typeof r == "string" ? r : r.plaintext);
  try {
    return await t.request({
      topic: n.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "requestCreateEvent",
        params: {
          ...e,
          inputs: o
        }
      }
    });
  } catch (r) {
    const s = r.message;
    return console.error("createEvent error", s), { error: s };
  }
}, Ke = async () => {
  const e = await p(), t = await (e == null ? void 0 : e.getSession());
  if (!t || !e)
    return { error: "no session or connection" };
  try {
    return await e.request({
      topic: t.topic,
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
}, $e = async (e) => {
  const t = await p(), n = await (t == null ? void 0 : t.getSession());
  if (!n || !t)
    return { error: "no session or connection" };
  try {
    return await t.request({
      topic: n.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "decrypt",
        params: {
          ciphertexts: e
        }
      }
    });
  } catch (o) {
    return console.error("decrypt error", o.message), { error: o.message };
  }
}, Be = async () => {
  const e = await p(), t = await (e == null ? void 0 : e.getSession());
  if (!t || !e)
    return { error: "no session or connection" };
  try {
    try {
      await e.disconnect({
        reason: W("USER_DISCONNECTED"),
        topic: t.topic
      }), N.emit("session_change");
    } catch (n) {
      console.warn(n);
    }
    return {};
  } catch (n) {
    const o = n.message;
    return console.error("error disconnecting", o), { error: o };
  }
}, ke = async ({
  id: e,
  address: t
}) => {
  const n = await p(), o = await (n == null ? void 0 : n.getSession());
  if (!o || !n)
    return { event: void 0, error: "no session or connection" };
  const r = async () => await n.request({
    topic: o.topic,
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "getEvent",
      params: {
        id: e,
        address: t
      }
    }
  });
  try {
    return await r();
  } catch (s) {
    const a = s.message;
    return console.error("getEvents error", a), { error: a };
  }
}, Me = async (e) => {
  const t = await p(), n = await (t == null ? void 0 : t.getSession());
  if (!n || !t)
    return { events: void 0, error: "no session or connection" };
  (e == null ? void 0 : e.programId) === "" && (e.programId = void 0);
  const o = async (r = 0) => await t.request({
    topic: n.topic,
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "getEvents",
      params: {
        filter: e,
        page: r
      }
    }
  });
  try {
    return await o();
  } catch (r) {
    const s = r.message;
    return console.error("getEvents error", s), { error: s };
  }
}, Ve = async (e) => {
  const t = await p(), n = await (t == null ? void 0 : t.getSession());
  if (!n || !t)
    return { error: "no session or connection" };
  try {
    return await t.request({
      topic: n.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "importSharedState",
        params: {
          seed: e
        }
      }
    });
  } catch (o) {
    const r = o.message;
    return console.error("importSharedState error", r), { error: r };
  }
}, He = async ({
  address: e,
  filter: t,
  page: n = 0
}) => {
  const o = await p(), r = await (o == null ? void 0 : o.getSession());
  if (!r || !o)
    return { error: "no session or connection" };
  const s = async (a = 0) => await o.request({
    topic: r.topic,
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "getRecords",
      params: {
        address: e,
        filter: t,
        page: a
      }
    }
  });
  try {
    return await s();
  } catch (a) {
    const c = a.message;
    return console.error("getRecords error", c), { error: c };
  }
}, Qe = async ({
  message: e,
  address: t
}) => {
  const n = await p(), o = await (n == null ? void 0 : n.getSession());
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
          message: e,
          address: b.test(t ?? "") ? t : void 0
        }
      }
    });
  } catch (r) {
    const s = r.message;
    return console.error("signature error", s), { error: s };
  }
}, Fe = 20;
export {
  Ze as AssetType,
  Xe as EventStatus,
  Ye as EventType,
  et as Network,
  Fe as PAGE_SIZE,
  Oe as PuzzleWalletProvider,
  tt as Visibility,
  nt as aleoAddressRegex,
  ot as aleoFieldRegex,
  rt as aleoPrivateKeyRegex,
  st as aleoTransactionIdRegex,
  ct as aleoU32,
  at as aleoU64,
  it as aleoViewKeyRegex,
  Ee as configureConnection,
  De as connect,
  Ke as createSharedState,
  $e as decrypt,
  Be as disconnect,
  N as emitter,
  We as getAccount,
  be as getBalance,
  ke as getEvent,
  Me as getEvents,
  je as getFormattedRecordPlaintext,
  He as getRecords,
  p as getWalletConnectModalSignClient,
  Ve as importSharedState,
  k as log_sdk,
  se as projectId,
  M as queryClient,
  Ue as requestCreateEvent,
  Qe as requestSignature,
  R as shortenAddress,
  ye as signClient_puzzleProps,
  Ie as useAccount,
  _e as useBalance,
  qe as useConnect,
  Ce as useCreateSharedState,
  Ae as useDecrypt,
  Ne as useDisconnect,
  ze as useEvent,
  Re as useEvents,
  Pe as useImportSharedState,
  K as useOnSessionDelete,
  _ as useOnSessionEvent,
  ae as useOnSessionExpire,
  $ as useOnSessionUpdate,
  Le as useRecords,
  xe as useRequestCreateEvent,
  Te as useRequestSignature,
  m as useSession,
  j as wc_aleo_chains,
  D as wc_aleo_methods,
  U as wc_events,
  ce as web3modal_puzzle_props,
  dt as zodAddress,
  ut as zodEventStatus,
  lt as zodEventType,
  pt as zodField,
  gt as zodNetwork,
  ht as zodPrivateKey,
  mt as zodTransactionId,
  wt as zodU32,
  vt as zodU64,
  ft as zodViewKey,
  St as zodVisibility
};
