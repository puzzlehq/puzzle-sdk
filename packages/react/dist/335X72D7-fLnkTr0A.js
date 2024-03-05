var es = Object.defineProperty;
var ts = (e, t, n) => t in e ? es(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Nr = (e, t, n) => (ts(e, typeof t != "symbol" ? t + "" : t, n), n);
import { d as tn, s as Gn, m as Hn, c as P, g as ns, a as F, e as v, h as N, o as It, P as Po, S as K, i as E, j as U, k as L, l as Be, p as D, q as rs, r as At, u as ir, v as H, w as os, x as $n, F as zo, y as Bo, z as V, $ as ft, A as pn, B as jn, C as Re, D as Ce, E as Se, I as is, G as sr, H as O, K as nn, L as Ur, M as ss, O as kt, Q as jt, R as Vr, T as Z, U as ls, V as as, X as Pn, _ as cs, a0 as us, a1 as ds, a2 as fs, a3 as zn, a4 as gs, a5 as hs } from "./index-BRfix_wh.js";
var Ko = {
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  Ấ: "A",
  Ắ: "A",
  Ẳ: "A",
  Ẵ: "A",
  Ặ: "A",
  Æ: "AE",
  Ầ: "A",
  Ằ: "A",
  Ȃ: "A",
  Ç: "C",
  Ḉ: "C",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  Ế: "E",
  Ḗ: "E",
  Ề: "E",
  Ḕ: "E",
  Ḝ: "E",
  Ȇ: "E",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  Ḯ: "I",
  Ȋ: "I",
  Ð: "D",
  Ñ: "N",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  Ố: "O",
  Ṍ: "O",
  Ṓ: "O",
  Ȏ: "O",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  Ý: "Y",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  ấ: "a",
  ắ: "a",
  ẳ: "a",
  ẵ: "a",
  ặ: "a",
  æ: "ae",
  ầ: "a",
  ằ: "a",
  ȃ: "a",
  ç: "c",
  ḉ: "c",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  ế: "e",
  ḗ: "e",
  ề: "e",
  ḕ: "e",
  ḝ: "e",
  ȇ: "e",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  ḯ: "i",
  ȋ: "i",
  ð: "d",
  ñ: "n",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  ố: "o",
  ṍ: "o",
  ṓ: "o",
  ȏ: "o",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  ý: "y",
  ÿ: "y",
  Ā: "A",
  ā: "a",
  Ă: "A",
  ă: "a",
  Ą: "A",
  ą: "a",
  Ć: "C",
  ć: "c",
  Ĉ: "C",
  ĉ: "c",
  Ċ: "C",
  ċ: "c",
  Č: "C",
  č: "c",
  C̆: "C",
  c̆: "c",
  Ď: "D",
  ď: "d",
  Đ: "D",
  đ: "d",
  Ē: "E",
  ē: "e",
  Ĕ: "E",
  ĕ: "e",
  Ė: "E",
  ė: "e",
  Ę: "E",
  ę: "e",
  Ě: "E",
  ě: "e",
  Ĝ: "G",
  Ǵ: "G",
  ĝ: "g",
  ǵ: "g",
  Ğ: "G",
  ğ: "g",
  Ġ: "G",
  ġ: "g",
  Ģ: "G",
  ģ: "g",
  Ĥ: "H",
  ĥ: "h",
  Ħ: "H",
  ħ: "h",
  Ḫ: "H",
  ḫ: "h",
  Ĩ: "I",
  ĩ: "i",
  Ī: "I",
  ī: "i",
  Ĭ: "I",
  ĭ: "i",
  Į: "I",
  į: "i",
  İ: "I",
  ı: "i",
  Ĳ: "IJ",
  ĳ: "ij",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  Ḱ: "K",
  ḱ: "k",
  K̆: "K",
  k̆: "k",
  Ĺ: "L",
  ĺ: "l",
  Ļ: "L",
  ļ: "l",
  Ľ: "L",
  ľ: "l",
  Ŀ: "L",
  ŀ: "l",
  Ł: "l",
  ł: "l",
  Ḿ: "M",
  ḿ: "m",
  M̆: "M",
  m̆: "m",
  Ń: "N",
  ń: "n",
  Ņ: "N",
  ņ: "n",
  Ň: "N",
  ň: "n",
  ŉ: "n",
  N̆: "N",
  n̆: "n",
  Ō: "O",
  ō: "o",
  Ŏ: "O",
  ŏ: "o",
  Ő: "O",
  ő: "o",
  Œ: "OE",
  œ: "oe",
  P̆: "P",
  p̆: "p",
  Ŕ: "R",
  ŕ: "r",
  Ŗ: "R",
  ŗ: "r",
  Ř: "R",
  ř: "r",
  R̆: "R",
  r̆: "r",
  Ȓ: "R",
  ȓ: "r",
  Ś: "S",
  ś: "s",
  Ŝ: "S",
  ŝ: "s",
  Ş: "S",
  Ș: "S",
  ș: "s",
  ş: "s",
  Š: "S",
  š: "s",
  Ţ: "T",
  ţ: "t",
  ț: "t",
  Ț: "T",
  Ť: "T",
  ť: "t",
  Ŧ: "T",
  ŧ: "t",
  T̆: "T",
  t̆: "t",
  Ũ: "U",
  ũ: "u",
  Ū: "U",
  ū: "u",
  Ŭ: "U",
  ŭ: "u",
  Ů: "U",
  ů: "u",
  Ű: "U",
  ű: "u",
  Ų: "U",
  ų: "u",
  Ȗ: "U",
  ȗ: "u",
  V̆: "V",
  v̆: "v",
  Ŵ: "W",
  ŵ: "w",
  Ẃ: "W",
  ẃ: "w",
  X̆: "X",
  x̆: "x",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Y̆: "Y",
  y̆: "y",
  Ź: "Z",
  ź: "z",
  Ż: "Z",
  ż: "z",
  Ž: "Z",
  ž: "z",
  ſ: "s",
  ƒ: "f",
  Ơ: "O",
  ơ: "o",
  Ư: "U",
  ư: "u",
  Ǎ: "A",
  ǎ: "a",
  Ǐ: "I",
  ǐ: "i",
  Ǒ: "O",
  ǒ: "o",
  Ǔ: "U",
  ǔ: "u",
  Ǖ: "U",
  ǖ: "u",
  Ǘ: "U",
  ǘ: "u",
  Ǚ: "U",
  ǚ: "u",
  Ǜ: "U",
  ǜ: "u",
  Ứ: "U",
  ứ: "u",
  Ṹ: "U",
  ṹ: "u",
  Ǻ: "A",
  ǻ: "a",
  Ǽ: "AE",
  ǽ: "ae",
  Ǿ: "O",
  ǿ: "o",
  Þ: "TH",
  þ: "th",
  Ṕ: "P",
  ṕ: "p",
  Ṥ: "S",
  ṥ: "s",
  X́: "X",
  x́: "x",
  Ѓ: "Г",
  ѓ: "г",
  Ќ: "К",
  ќ: "к",
  A̋: "A",
  a̋: "a",
  E̋: "E",
  e̋: "e",
  I̋: "I",
  i̋: "i",
  Ǹ: "N",
  ǹ: "n",
  Ồ: "O",
  ồ: "o",
  Ṑ: "O",
  ṑ: "o",
  Ừ: "U",
  ừ: "u",
  Ẁ: "W",
  ẁ: "w",
  Ỳ: "Y",
  ỳ: "y",
  Ȁ: "A",
  ȁ: "a",
  Ȅ: "E",
  ȅ: "e",
  Ȉ: "I",
  ȉ: "i",
  Ȍ: "O",
  ȍ: "o",
  Ȑ: "R",
  ȑ: "r",
  Ȕ: "U",
  ȕ: "u",
  B̌: "B",
  b̌: "b",
  Č̣: "C",
  č̣: "c",
  Ê̌: "E",
  ê̌: "e",
  F̌: "F",
  f̌: "f",
  Ǧ: "G",
  ǧ: "g",
  Ȟ: "H",
  ȟ: "h",
  J̌: "J",
  ǰ: "j",
  Ǩ: "K",
  ǩ: "k",
  M̌: "M",
  m̌: "m",
  P̌: "P",
  p̌: "p",
  Q̌: "Q",
  q̌: "q",
  Ř̩: "R",
  ř̩: "r",
  Ṧ: "S",
  ṧ: "s",
  V̌: "V",
  v̌: "v",
  W̌: "W",
  w̌: "w",
  X̌: "X",
  x̌: "x",
  Y̌: "Y",
  y̌: "y",
  A̧: "A",
  a̧: "a",
  B̧: "B",
  b̧: "b",
  Ḑ: "D",
  ḑ: "d",
  Ȩ: "E",
  ȩ: "e",
  Ɛ̧: "E",
  ɛ̧: "e",
  Ḩ: "H",
  ḩ: "h",
  I̧: "I",
  i̧: "i",
  Ɨ̧: "I",
  ɨ̧: "i",
  M̧: "M",
  m̧: "m",
  O̧: "O",
  o̧: "o",
  Q̧: "Q",
  q̧: "q",
  U̧: "U",
  u̧: "u",
  X̧: "X",
  x̧: "x",
  Z̧: "Z",
  z̧: "z"
}, ys = Object.keys(Ko).join("|"), vs = new RegExp(ys, "g");
function ms(e) {
  return e.replace(vs, (t) => Ko[t]);
}
var Ee = {
  CASE_SENSITIVE_EQUAL: 7,
  EQUAL: 6,
  STARTS_WITH: 5,
  WORD_STARTS_WITH: 4,
  CONTAINS: 3,
  ACRONYM: 2,
  MATCHES: 1,
  NO_MATCH: 0
};
function Gr(e, t, n) {
  var r;
  if (n = n || {}, n.threshold = (r = n.threshold) != null ? r : Ee.MATCHES, !n.accessors) {
    const l = Hr(e, t, n);
    return {
      // ends up being duplicate of 'item' in matches but consistent
      rankedValue: e,
      rank: l,
      accessorIndex: -1,
      accessorThreshold: n.threshold,
      passed: l >= n.threshold
    };
  }
  const o = ps(e, n.accessors), i = {
    rankedValue: e,
    rank: Ee.NO_MATCH,
    accessorIndex: -1,
    accessorThreshold: n.threshold,
    passed: !1
  };
  for (let l = 0; l < o.length; l++) {
    const s = o[l];
    let a = Hr(s.itemValue, t, n);
    const {
      minRanking: c,
      maxRanking: h,
      threshold: f = n.threshold
    } = s.attributes;
    a < c && a >= Ee.MATCHES ? a = c : a > h && (a = h), a = Math.min(a, h), a >= f && a > i.rank && (i.rank = a, i.passed = !0, i.accessorIndex = l, i.accessorThreshold = f, i.rankedValue = s.itemValue);
  }
  return i;
}
function Hr(e, t, n) {
  return e = jr(e, n), t = jr(t, n), t.length > e.length ? Ee.NO_MATCH : e === t ? Ee.CASE_SENSITIVE_EQUAL : (e = e.toLowerCase(), t = t.toLowerCase(), e === t ? Ee.EQUAL : e.startsWith(t) ? Ee.STARTS_WITH : e.includes(` ${t}`) ? Ee.WORD_STARTS_WITH : e.includes(t) ? Ee.CONTAINS : t.length === 1 ? Ee.NO_MATCH : bs(e).includes(t) ? Ee.ACRONYM : xs(e, t));
}
function bs(e) {
  let t = "";
  return e.split(" ").forEach((r) => {
    r.split("-").forEach((i) => {
      t += i.substr(0, 1);
    });
  }), t;
}
function xs(e, t) {
  let n = 0, r = 0;
  function o(a, c, h) {
    for (let f = h, u = c.length; f < u; f++)
      if (c[f] === a)
        return n += 1, f + 1;
    return -1;
  }
  function i(a) {
    const c = 1 / a, h = n / t.length;
    return Ee.MATCHES + h * c;
  }
  const l = o(t[0], e, 0);
  if (l < 0)
    return Ee.NO_MATCH;
  r = l;
  for (let a = 1, c = t.length; a < c; a++) {
    const h = t[a];
    if (r = o(h, e, r), !(r > -1))
      return Ee.NO_MATCH;
  }
  const s = r - l;
  return i(s);
}
function jr(e, t) {
  let {
    keepDiacritics: n
  } = t;
  return e = `${e}`, n || (e = ms(e)), e;
}
function $s(e, t) {
  let n = t;
  typeof t == "object" && (n = t.accessor);
  const r = n(e);
  return r == null ? [] : Array.isArray(r) ? r : [String(r)];
}
function ps(e, t) {
  const n = [];
  for (let r = 0, o = t.length; r < o; r++) {
    const i = t[r], l = ws(i), s = $s(e, i);
    for (let a = 0, c = s.length; a < c; a++)
      n.push({
        itemValue: s[a],
        attributes: l
      });
  }
  return n;
}
var Wr = {
  maxRanking: 1 / 0,
  minRanking: -1 / 0
};
function ws(e) {
  return typeof e == "function" ? Wr : {
    ...Wr,
    ...e
  };
}
var Cs = { data: "" }, Ss = (e) => typeof window == "object" ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : e || Cs, ks = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, Es = /\/\*[^]*?\*\/|  +/g, Qr = /\n+/g, bt = (e, t) => {
  let n = "", r = "", o = "";
  for (let i in e) {
    let l = e[i];
    i[0] == "@" ? i[1] == "i" ? n = i + " " + l + ";" : r += i[1] == "f" ? bt(l, i) : i + "{" + bt(l, i[1] == "k" ? "" : t) + "}" : typeof l == "object" ? r += bt(l, t ? t.replace(/([^,])+/g, (s) => i.replace(/(^:.*)|([^,])+/g, (a) => /&/.test(a) ? a.replace(/&/g, s) : s ? s + " " + a : a)) : i) : l != null && (i = /^--/.test(i) ? i : i.replace(/[A-Z]/g, "-$&").toLowerCase(), o += bt.p ? bt.p(i, l) : i + ":" + l + ";");
  }
  return n + (t && o ? t + "{" + o + "}" : o) + r;
}, Qe = {}, Ro = (e) => {
  if (typeof e == "object") {
    let t = "";
    for (let n in e)
      t += n + Ro(e[n]);
    return t;
  }
  return e;
}, _s = (e, t, n, r, o) => {
  let i = Ro(e), l = Qe[i] || (Qe[i] = ((a) => {
    let c = 0, h = 11;
    for (; c < a.length; )
      h = 101 * h + a.charCodeAt(c++) >>> 0;
    return "go" + h;
  })(i));
  if (!Qe[l]) {
    let a = i !== e ? e : ((c) => {
      let h, f, u = [{}];
      for (; h = ks.exec(c.replace(Es, "")); )
        h[4] ? u.shift() : h[3] ? (f = h[3].replace(Qr, " ").trim(), u.unshift(u[0][f] = u[0][f] || {})) : u[0][h[1]] = h[2].replace(Qr, " ").trim();
      return u[0];
    })(e);
    Qe[l] = bt(o ? { ["@keyframes " + l]: a } : a, n ? "" : "." + l);
  }
  let s = n && Qe.g ? Qe.g : null;
  return n && (Qe.g = Qe[l]), ((a, c, h, f) => {
    f ? c.data = c.data.replace(f, a) : c.data.indexOf(a) === -1 && (c.data = h ? a + c.data : c.data + a);
  })(Qe[l], t, r, s), l;
}, As = (e, t, n) => e.reduce((r, o, i) => {
  let l = t[i];
  if (l && l.call) {
    let s = l(n), a = s && s.props && s.props.className || /^go/.test(s) && s;
    l = a ? "." + a : s && typeof s == "object" ? s.props ? "" : bt(s, "") : s === !1 ? "" : s;
  }
  return r + o + (l ?? "");
}, "");
function k(e) {
  let t = this || {}, n = e.call ? e(t.p) : e;
  return _s(n.unshift ? n.raw ? As(n, [].slice.call(arguments, 1), t.p) : n.reduce((r, o) => Object.assign(r, o && o.call ? o(t.p) : o), {}) : n, Ss(t.target), t.g, t.o, t.k);
}
k.bind({ g: 1 });
k.bind({ k: 1 });
function No(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = No(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function I() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = No(e)) && (r && (r += " "), r += t);
  return r;
}
var Yr = () => {
};
function Ds(e, t) {
  const n = jt(e), { onChange: r } = t;
  let o = new Set(t.appear ? void 0 : n);
  const i = /* @__PURE__ */ new WeakSet(), [l, s] = P([], { equals: !1 }), [a] = fs(), c = t.exitMethod === "remove" ? Yr : (f) => {
    s((u) => (u.push.apply(u, f), u));
    for (const u of f)
      i.delete(u);
  }, h = t.exitMethod === "remove" ? Yr : t.exitMethod === "keep-index" ? (f, u, g) => f.splice(g, 0, u) : (f, u) => f.push(u);
  return F(
    (f) => {
      const u = l(), g = e();
      if (g[pn], jt(a))
        return a(), f;
      if (u.length) {
        const d = f.filter((y) => !u.includes(y));
        return u.length = 0, r({ list: d, added: [], removed: [], unchanged: d, finishRemoved: c }), d;
      }
      return jt(() => {
        const d = new Set(g), y = g.slice(), m = [], $ = [], x = [];
        for (const w of g)
          (o.has(w) ? x : m).push(w);
        let b = !m.length;
        for (let w = 0; w < f.length; w++) {
          const p = f[w];
          d.has(p) || (i.has(p) || ($.push(p), i.add(p)), h(y, p, w)), b && p !== y[w] && (b = !1);
        }
        return !$.length && b ? f : (r({ list: y, added: m, removed: $, unchanged: x, finishRemoved: c }), o = d, y);
      });
    },
    t.appear ? [] : n.slice()
  );
}
var Fs = (e) => e != null, Ls = (e) => e.filter(Fs);
function lr(e) {
  return (...t) => {
    for (const n of e)
      n && n(...t);
  };
}
function Is(e) {
  return (...t) => {
    for (let n = e.length - 1; n >= 0; n--) {
      const r = e[n];
      r && r(...t);
    }
  };
}
var C = (e) => typeof e == "function" && !e.length ? e() : e, Wn = (e) => Array.isArray(e) ? e : e ? [e] : [];
function Ms(e, ...t) {
  return typeof e == "function" ? e(...t) : e;
}
var qs = V;
function Os(e, t, n, r) {
  const o = e.length, i = t.length;
  let l = 0;
  if (!i) {
    for (; l < o; l++)
      n(e[l]);
    return;
  }
  if (!o) {
    for (; l < i; l++)
      r(t[l]);
    return;
  }
  for (; l < i && t[l] === e[l]; l++)
    ;
  let s, a;
  t = t.slice(l), e = e.slice(l);
  for (s of t)
    e.includes(s) || r(s);
  for (a of e)
    t.includes(a) || n(a);
}
function ke(...e) {
  return lr(e);
}
var Xr = (e) => e instanceof Element;
function Qn(e, t) {
  if (t(e))
    return e;
  if (typeof e == "function" && !e.length)
    return Qn(e(), t);
  if (Array.isArray(e)) {
    const n = [];
    for (const r of e) {
      const o = Qn(r, t);
      o && (Array.isArray(o) ? n.push.apply(n, o) : n.push(o));
    }
    return n.length ? n : null;
  }
  return null;
}
function Ts(e, t = Xr, n = Xr) {
  const r = F(e), o = F(
    () => Qn(r(), t)
  );
  return o.toArray = () => {
    const i = o();
    return Array.isArray(i) ? i : i ? [i] : [];
  }, o;
}
function Ps(e) {
  return F(() => {
    const t = e.name || "s";
    return {
      enterActive: (e.enterActiveClass || t + "-enter-active").split(" "),
      enter: (e.enterClass || t + "-enter").split(" "),
      enterTo: (e.enterToClass || t + "-enter-to").split(" "),
      exitActive: (e.exitActiveClass || t + "-exit-active").split(" "),
      exit: (e.exitClass || t + "-exit").split(" "),
      exitTo: (e.exitToClass || t + "-exit-to").split(" "),
      move: (e.moveClass || t + "-move").split(" ")
    };
  });
}
function Uo(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
function zs(e, t, n, r) {
  const { onBeforeEnter: o, onEnter: i, onAfterEnter: l } = t;
  o == null || o(n), n.classList.add(...e.enter), n.classList.add(...e.enterActive), queueMicrotask(() => {
    if (!n.parentNode)
      return r == null ? void 0 : r();
    i == null || i(n, () => s());
  }), Uo(() => {
    n.classList.remove(...e.enter), n.classList.add(...e.enterTo), (!i || i.length < 2) && (n.addEventListener("transitionend", s), n.addEventListener("animationend", s));
  });
  function s(a) {
    (!a || a.target === n) && (r == null || r(), n.removeEventListener("transitionend", s), n.removeEventListener("animationend", s), n.classList.remove(...e.enterActive), n.classList.remove(...e.enterTo), l == null || l(n));
  }
}
function Bs(e, t, n, r) {
  const { onBeforeExit: o, onExit: i, onAfterExit: l } = t;
  if (!n.parentNode)
    return r == null ? void 0 : r();
  o == null || o(n), n.classList.add(...e.exit), n.classList.add(...e.exitActive), i == null || i(n, () => s()), Uo(() => {
    n.classList.remove(...e.exit), n.classList.add(...e.exitTo), (!i || i.length < 2) && (n.addEventListener("transitionend", s), n.addEventListener("animationend", s));
  });
  function s(a) {
    (!a || a.target === n) && (r == null || r(), n.removeEventListener("transitionend", s), n.removeEventListener("animationend", s), n.classList.remove(...e.exitActive), n.classList.remove(...e.exitTo), l == null || l(n));
  }
}
var Zr = (e) => {
  const t = Ps(e);
  return Ds(Ts(() => e.children).toArray, {
    appear: e.appear,
    exitMethod: "keep-index",
    onChange({ added: n, removed: r, finishRemoved: o, list: i }) {
      const l = t();
      for (const a of n)
        zs(l, e, a);
      const s = [];
      for (const a of i)
        a.isConnected && (a instanceof HTMLElement || a instanceof SVGElement) && s.push({ el: a, rect: a.getBoundingClientRect() });
      queueMicrotask(() => {
        const a = [];
        for (const { el: c, rect: h } of s)
          if (c.isConnected) {
            const f = c.getBoundingClientRect(), u = h.left - f.left, g = h.top - f.top;
            (u || g) && (c.style.transform = `translate(${u}px, ${g}px)`, c.style.transitionDuration = "0s", a.push(c));
          }
        document.body.offsetHeight;
        for (const c of a) {
          let h = function(f) {
            (f.target === c || /transform$/.test(f.propertyName)) && (c.removeEventListener("transitionend", h), c.classList.remove(...l.move));
          };
          c.classList.add(...l.move), c.style.transform = c.style.transitionDuration = "", c.addEventListener("transitionend", h);
        }
      });
      for (const a of r)
        Bs(l, e, a, () => o([a]));
    }
  });
}, Bn = Symbol("fallback");
function Jr(e) {
  for (const t of e)
    t.dispose();
}
function Ks(e, t, n, r = {}) {
  const o = /* @__PURE__ */ new Map();
  return V(() => Jr(o.values())), () => {
    const l = e() || [];
    return l[pn], jt(() => {
      var h, f;
      if (!l.length)
        return Jr(o.values()), o.clear(), r.fallback ? [Vr((g) => (o.set(Bn, { dispose: g }), r.fallback()))] : [];
      const s = new Array(l.length), a = o.get(Bn);
      if (!o.size || a) {
        a == null || a.dispose(), o.delete(Bn);
        for (let u = 0; u < l.length; u++) {
          const g = l[u], d = t(g, u);
          i(s, g, u, d);
        }
        return s;
      }
      const c = new Set(o.keys());
      for (let u = 0; u < l.length; u++) {
        const g = l[u], d = t(g, u);
        c.delete(d);
        const y = o.get(d);
        y ? (s[u] = y.mapped, (h = y.setIndex) == null || h.call(y, u), y.setItem(() => g)) : i(s, g, u, d);
      }
      for (const u of c)
        (f = o.get(u)) == null || f.dispose(), o.delete(u);
      return s;
    });
  };
  function i(l, s, a, c) {
    Vr((h) => {
      const [f, u] = P(s), g = { setItem: u, dispose: h };
      if (n.length > 1) {
        const [d, y] = P(a);
        g.setIndex = y, g.mapped = n(f, d);
      } else
        g.mapped = n(f);
      o.set(c, g), l[a] = g.mapped;
    });
  }
}
function wn(e) {
  const { by: t } = e;
  return F(
    Ks(
      () => e.each,
      typeof t == "function" ? t : (n) => n[t],
      e.children,
      "fallback" in e ? { fallback: () => e.fallback } : void 0
    )
  );
}
function Rs(e) {
  const [t, n] = P(), r = e != null && e.throw ? (u, g) => {
    throw n(u instanceof Error ? u : new Error(g)), u;
  } : (u, g) => {
    n(u instanceof Error ? u : new Error(g));
  }, o = e != null && e.api ? Array.isArray(e.api) ? e.api : [e.api] : [globalThis.localStorage].filter(Boolean), i = e != null && e.prefix ? `${e.prefix}.` : "", l = /* @__PURE__ */ new Map(), s = new Proxy(
    {},
    {
      get(u, g) {
        let d = l.get(g);
        d || (d = P(void 0, { equals: !1 }), l.set(g, d)), d[0]();
        const y = o.reduce(
          (m, $) => {
            if (m !== null || !$)
              return m;
            try {
              return $.getItem(`${i}${g}`);
            } catch (x) {
              return r(x, `Error reading ${i}${g} from ${$.name}`), null;
            }
          },
          null
        );
        return y !== null && (e != null && e.deserializer) ? e.deserializer(y, g, e.options) : y;
      }
    }
  ), a = (u, g, d) => {
    const y = e != null && e.serializer ? e.serializer(g, u, d ?? e.options) : g, m = `${i}${u}`;
    o.forEach((x) => {
      try {
        x.getItem(m) !== y && x.setItem(m, y);
      } catch (b) {
        r(b, `Error setting ${i}${u} to ${y} in ${x.name}`);
      }
    });
    const $ = l.get(u);
    $ && $[1]();
  }, c = (u) => o.forEach((g) => {
    try {
      g.removeItem(`${i}${u}`);
    } catch (d) {
      r(d, `Error removing ${i}${u} from ${g.name}`);
    }
  }), h = () => o.forEach((u) => {
    try {
      u.clear();
    } catch (g) {
      r(g, `Error clearing ${u.name}`);
    }
  }), f = () => {
    const u = {}, g = (d, y) => {
      if (!u.hasOwnProperty(d)) {
        const m = y && (e != null && e.deserializer) ? e.deserializer(y, d, e.options) : y;
        m && (u[d] = m);
      }
    };
    return o.forEach((d) => {
      if (typeof d.getAll == "function") {
        let y;
        try {
          y = d.getAll();
        } catch (m) {
          r(m, `Error getting all values from in ${d.name}`);
        }
        for (const m of y)
          g(m, y[m]);
      } else {
        let y = 0, m;
        try {
          for (; m = d.key(y++); )
            u.hasOwnProperty(m) || g(m, d.getItem(m));
        } catch ($) {
          r($, `Error getting all values from ${d.name}`);
        }
      }
    }), u;
  };
  return (e == null ? void 0 : e.sync) !== !1 && It(() => {
    const u = (g) => {
      var y;
      let d = !1;
      o.forEach((m) => {
        try {
          m !== g.storageArea && g.key && g.newValue !== m.getItem(g.key) && (g.newValue ? m.setItem(g.key, g.newValue) : m.removeItem(g.key), d = !0);
        } catch ($) {
          r(
            $,
            `Error synching api ${m.name} from storage event (${g.key}=${g.newValue})`
          );
        }
      }), d && g.key && ((y = l.get(g.key)) == null || y[1]());
    };
    "addEventListener" in globalThis ? (globalThis.addEventListener("storage", u), V(() => globalThis.removeEventListener("storage", u))) : (o.forEach((g) => {
      var d;
      return (d = g.addEventListener) == null ? void 0 : d.call(g, "storage", u);
    }), V(() => o.forEach((g) => {
      var d;
      return (d = g.removeEventListener) == null ? void 0 : d.call(g, "storage", u);
    })));
  }), [
    s,
    a,
    {
      clear: h,
      error: t,
      remove: c,
      toJSON: f
    }
  ];
}
var Ns = Rs, Us = (e) => (typeof e.clear == "function" || (e.clear = () => {
  let t;
  for (; t = e.key(0); )
    e.removeItem(t);
}), e), eo = (e) => {
  if (!e)
    return "";
  let t = "";
  for (const n in e) {
    if (!e.hasOwnProperty(n))
      continue;
    const r = e[n];
    t += r instanceof Date ? `; ${n}=${r.toUTCString()}` : typeof r == "boolean" ? `; ${n}` : `; ${n}=${r}`;
  }
  return t;
}, Le = Us({
  _cookies: [globalThis.document, "cookie"],
  getItem: (e) => {
    var t;
    return ((t = Le._cookies[0][Le._cookies[1]].match("(^|;)\\s*" + e + "\\s*=\\s*([^;]+)")) == null ? void 0 : t.pop()) ?? null;
  },
  setItem: (e, t, n) => {
    const r = Le.getItem(e);
    Le._cookies[0][Le._cookies[1]] = `${e}=${t}${eo(
      n
    )}`;
    const o = Object.assign(new Event("storage"), {
      key: e,
      oldValue: r,
      newValue: t,
      url: globalThis.document.URL,
      storageArea: Le
    });
    window.dispatchEvent(o);
  },
  removeItem: (e) => {
    Le._cookies[0][Le._cookies[1]] = `${e}=deleted${eo({
      expires: /* @__PURE__ */ new Date(0)
    })}`;
  },
  key: (e) => {
    let t = null, n = 0;
    return Le._cookies[0][Le._cookies[1]].replace(
      /(?:^|;)\s*(.+?)\s*=\s*[^;]+/g,
      (r, o) => (!t && o && n++ === e && (t = o), "")
    ), t;
  },
  get length() {
    let e = 0;
    return Le._cookies[0][Le._cookies[1]].replace(
      /(?:^|;)\s*.+?\s*=\s*[^;]+/g,
      (t) => (e += t ? 1 : 0, "")
    ), e;
  }
});
function Vs(e, t, n, r) {
  return e.addEventListener(t, n, r), qs(e.removeEventListener.bind(e, t, n, r));
}
function Gs(e, t, n, r) {
  const o = () => {
    Wn(C(e)).forEach((i) => {
      i && Wn(C(t)).forEach((l) => Vs(i, l, n, r));
    });
  };
  typeof e == "function" ? N(o) : U(o);
}
function Hs(e, t) {
  const n = new ResizeObserver(e);
  return V(n.disconnect.bind(n)), {
    observe: (r) => n.observe(r, t),
    unobserve: n.unobserve.bind(n)
  };
}
function js(e, t, n) {
  const r = /* @__PURE__ */ new WeakMap(), { observe: o, unobserve: i } = Hs((l) => {
    for (const s of l) {
      const { contentRect: a, target: c } = s, h = Math.round(a.width), f = Math.round(a.height), u = r.get(c);
      (!u || u.width !== h || u.height !== f) && (t(a, c, s), r.set(c, { width: h, height: f }));
    }
  }, n);
  N((l) => {
    const s = Ls(Wn(C(e)));
    return Os(s, l, o, i), s;
  }, []);
}
function vn() {
  return !0;
}
var Ws = {
  get(e, t, n) {
    return t === ft ? n : e.get(t);
  },
  has(e, t) {
    return e.has(t);
  },
  set: vn,
  deleteProperty: vn,
  getOwnPropertyDescriptor(e, t) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return e.get(t);
      },
      set: vn,
      deleteProperty: vn
    };
  },
  ownKeys(e) {
    return e.keys();
  }
}, Qs = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;
function to(e) {
  const t = {};
  let n;
  for (; n = Qs.exec(e); )
    t[n[1]] = n[2];
  return t;
}
function Ys(e, t) {
  if (typeof e == "string") {
    if (typeof t == "string")
      return `${e};${t}`;
    e = to(e);
  } else
    typeof t == "string" && (t = to(t));
  return { ...e, ...t };
}
var Kn = (e, t, n) => {
  let r;
  for (const o of e) {
    const i = C(o)[t];
    r ? i && (r = n(r, i)) : r = i;
  }
  return r;
};
function Xs(...e) {
  var l;
  const t = Array.isArray(e[0]), n = t ? e[0] : e;
  if (n.length === 1)
    return n[0];
  const r = t && ((l = e[1]) != null && l.reverseEventHandlers) ? Is : lr, o = {};
  for (const s of n) {
    const a = C(s);
    for (const c in a)
      if (c[0] === "o" && c[1] === "n" && c[2]) {
        const h = a[c], f = c.toLowerCase(), u = typeof h == "function" ? h : (
          // jsx event handlers can be tuples of [callback, arg]
          Array.isArray(h) ? h.length === 1 ? h[0] : h[0].bind(void 0, h[1]) : void 0
        );
        u ? o[f] ? o[f].push(u) : o[f] = [u] : delete o[f];
      }
  }
  const i = H(...n);
  return new Proxy(
    {
      get(s) {
        if (typeof s != "string")
          return Reflect.get(i, s);
        if (s === "style")
          return Kn(n, "style", Ys);
        if (s === "ref") {
          const a = [];
          for (const c of n) {
            const h = C(c)[s];
            typeof h == "function" && a.push(h);
          }
          return r(a);
        }
        if (s[0] === "o" && s[1] === "n" && s[2]) {
          const a = o[s.toLowerCase()];
          return a ? r(a) : Reflect.get(i, s);
        }
        return s === "class" || s === "className" ? Kn(n, s, (a, c) => `${a} ${c}`) : s === "classList" ? Kn(n, s, (a, c) => ({ ...a, ...c })) : Reflect.get(i, s);
      },
      has(s) {
        return Reflect.has(i, s);
      },
      keys() {
        return Object.keys(i);
      }
    },
    Ws
  );
}
function Zs(e, t, n = -1) {
  return n in e ? [...e.slice(0, n), t, ...e.slice(n)] : [...e, t];
}
function Yn(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Js(e) {
  return typeof e == "number";
}
function el(e) {
  return Array.isArray(e);
}
function Et(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
function tl(e) {
  return typeof e == "function";
}
function rn(e) {
  return (t) => `${e()}-${t}`;
}
function Me(e, t) {
  return e ? e === t || e.contains(t) : !1;
}
function Vt(e, t = !1) {
  const { activeElement: n } = Ke(e);
  if (!(n != null && n.nodeName))
    return null;
  if (Go(n) && n.contentDocument)
    return Vt(n.contentDocument.body, t);
  if (t) {
    const r = n.getAttribute("aria-activedescendant");
    if (r) {
      const o = Ke(n).getElementById(r);
      if (o)
        return o;
    }
  }
  return n;
}
function Vo(e) {
  return Ke(e).defaultView || window;
}
function Ke(e) {
  return e ? e.ownerDocument || e : document;
}
function Go(e) {
  return e.tagName === "IFRAME";
}
var ar = /* @__PURE__ */ ((e) => (e.Escape = "Escape", e.Enter = "Enter", e.Tab = "Tab", e.Space = " ", e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.ArrowUp = "ArrowUp", e.End = "End", e.Home = "Home", e.PageDown = "PageDown", e.PageUp = "PageUp", e))(ar || {});
function cr(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? (
    // @ts-ignore
    e.test(((t = window.navigator.userAgentData) == null ? void 0 : t.platform) || window.navigator.platform)
  ) : !1;
}
function In() {
  return cr(/^Mac/i);
}
function nl() {
  return cr(/^iPhone/i);
}
function rl() {
  return cr(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  In() && navigator.maxTouchPoints > 1;
}
function Ho() {
  return nl() || rl();
}
function ol() {
  return In() || Ho();
}
function ie(e, t) {
  return t && (tl(t) ? t(e) : t[0](t[1], e)), e == null ? void 0 : e.defaultPrevented;
}
function ye(e) {
  return (t) => {
    for (const n of e)
      ie(t, n);
  };
}
function il(e) {
  return In() ? e.metaKey && !e.ctrlKey : e.ctrlKey && !e.metaKey;
}
function $e(e) {
  if (e)
    if (sl())
      e.focus({ preventScroll: !0 });
    else {
      const t = ll(e);
      e.focus(), al(t);
    }
}
var mn = null;
function sl() {
  if (mn == null) {
    mn = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return mn = !0, !0;
        }
      });
    } catch {
    }
  }
  return mn;
}
function ll(e) {
  let t = e.parentNode;
  const n = [], r = document.scrollingElement || document.documentElement;
  for (; t instanceof HTMLElement && t !== r; )
    (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
      element: t,
      scrollTop: t.scrollTop,
      scrollLeft: t.scrollLeft
    }), t = t.parentNode;
  return r instanceof HTMLElement && n.push({
    element: r,
    scrollTop: r.scrollTop,
    scrollLeft: r.scrollLeft
  }), n;
}
function al(e) {
  for (const { element: t, scrollTop: n, scrollLeft: r } of e)
    t.scrollTop = n, t.scrollLeft = r;
}
var jo = [
  "input:not([type='hidden']):not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "[tabindex]",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[contenteditable]:not([contenteditable='false'])"
], cl = [...jo, '[tabindex]:not([tabindex="-1"]):not([disabled])'], ur = jo.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])", ul = cl.join(
  ':not([hidden]):not([tabindex="-1"]),'
);
function Wo(e, t) {
  const r = Array.from(e.querySelectorAll(ur)).filter(no);
  return t && no(e) && r.unshift(e), r.forEach((o, i) => {
    if (Go(o) && o.contentDocument) {
      const l = o.contentDocument.body, s = Wo(l, !1);
      r.splice(i, 1, ...s);
    }
  }), r;
}
function no(e) {
  return Qo(e) && !dl(e);
}
function Qo(e) {
  return e.matches(ur) && dr(e);
}
function dl(e) {
  return parseInt(e.getAttribute("tabindex") || "0", 10) < 0;
}
function dr(e, t) {
  return e.nodeName !== "#comment" && fl(e) && gl(e, t) && (!e.parentElement || dr(e.parentElement, e));
}
function fl(e) {
  if (!(e instanceof HTMLElement) && !(e instanceof SVGElement))
    return !1;
  const { display: t, visibility: n } = e.style;
  let r = t !== "none" && n !== "hidden" && n !== "collapse";
  if (r) {
    if (!e.ownerDocument.defaultView)
      return r;
    const { getComputedStyle: o } = e.ownerDocument.defaultView, { display: i, visibility: l } = o(e);
    r = i !== "none" && l !== "hidden" && l !== "collapse";
  }
  return r;
}
function gl(e, t) {
  return !e.hasAttribute("hidden") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function hl(e, t) {
  return t.some((n) => n.contains(e));
}
function yl(e, t, n) {
  const r = t != null && t.tabbable ? ul : ur, o = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode(i) {
      var l;
      return (l = t == null ? void 0 : t.from) != null && l.contains(i) ? NodeFilter.FILTER_REJECT : i.matches(r) && dr(i) && (!n || hl(i, n)) && (!(t != null && t.accept) || t.accept(i)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  return t != null && t.from && (o.currentNode = t.from), o;
}
function vl() {
}
function ml(e, t) {
  const [n, r] = e;
  let o = !1;
  const i = t.length;
  for (let l = i, s = 0, a = l - 1; s < l; a = s++) {
    const [c, h] = t[s], [f, u] = t[a], [, g] = t[a === 0 ? l - 1 : a - 1] || [0, 0], d = (h - u) * (n - c) - (c - f) * (r - h);
    if (u < h) {
      if (r >= u && r < h) {
        if (d === 0)
          return !0;
        d > 0 && (r === u ? r > g && (o = !o) : o = !o);
      }
    } else if (h < u) {
      if (r > h && r <= u) {
        if (d === 0)
          return !0;
        d < 0 && (r === u ? r < g && (o = !o) : o = !o);
      }
    } else if (r == h && (n >= f && n <= c || n >= c && n <= f))
      return !0;
  }
  return o;
}
function Y(e, t) {
  return H(e, t);
}
var Rt = /* @__PURE__ */ new Map(), ro = /* @__PURE__ */ new Set();
function oo() {
  if (typeof window > "u")
    return;
  const e = (n) => {
    if (!n.target)
      return;
    let r = Rt.get(n.target);
    r || (r = /* @__PURE__ */ new Set(), Rt.set(n.target, r), n.target.addEventListener("transitioncancel", t)), r.add(n.propertyName);
  }, t = (n) => {
    if (!n.target)
      return;
    const r = Rt.get(n.target);
    if (r && (r.delete(n.propertyName), r.size === 0 && (n.target.removeEventListener("transitioncancel", t), Rt.delete(n.target)), Rt.size === 0)) {
      for (const o of ro)
        o();
      ro.clear();
    }
  };
  document.body.addEventListener("transitionrun", e), document.body.addEventListener("transitionend", t);
}
typeof document < "u" && (document.readyState !== "loading" ? oo() : document.addEventListener("DOMContentLoaded", oo));
function io(e, t) {
  const n = so(e, t, "left"), r = so(e, t, "top"), o = t.offsetWidth, i = t.offsetHeight;
  let l = e.scrollLeft, s = e.scrollTop;
  const a = l + e.offsetWidth, c = s + e.offsetHeight;
  n <= l ? l = n : n + o > a && (l += n + o - a), r <= s ? s = r : r + i > c && (s += r + i - c), e.scrollLeft = l, e.scrollTop = s;
}
function so(e, t, n) {
  const r = n === "left" ? "offsetLeft" : "offsetTop";
  let o = 0;
  for (; t.offsetParent && (o += t[r], t.offsetParent !== e); ) {
    if (t.offsetParent.contains(e)) {
      o -= e[r];
      break;
    }
    t = t.offsetParent;
  }
  return o;
}
var Yo = {
  border: "0",
  clip: "rect(0 0 0 0)",
  "clip-path": "inset(50%)",
  height: "1px",
  margin: "0 -1px -1px 0",
  overflow: "hidden",
  padding: "0",
  position: "absolute",
  width: "1px",
  "white-space": "nowrap"
}, Xn = Symbol("store-raw"), Dt = Symbol("store-node"), Ye = Symbol("store-has"), Xo = Symbol("store-self");
function Zo(e) {
  let t = e[ft];
  if (!t && (Object.defineProperty(e, ft, {
    value: t = new Proxy(e, $l)
  }), !Array.isArray(e))) {
    const n = Object.keys(e), r = Object.getOwnPropertyDescriptors(e);
    for (let o = 0, i = n.length; o < i; o++) {
      const l = n[o];
      r[l].get && Object.defineProperty(e, l, {
        enumerable: r[l].enumerable,
        get: r[l].get.bind(t)
      });
    }
  }
  return t;
}
function Cn(e) {
  let t;
  return e != null && typeof e == "object" && (e[ft] || !(t = Object.getPrototypeOf(e)) || t === Object.prototype || Array.isArray(e));
}
function Qt(e, t = /* @__PURE__ */ new Set()) {
  let n, r, o, i;
  if (n = e != null && e[Xn])
    return n;
  if (!Cn(e) || t.has(e))
    return e;
  if (Array.isArray(e)) {
    Object.isFrozen(e) ? e = e.slice(0) : t.add(e);
    for (let l = 0, s = e.length; l < s; l++)
      o = e[l], (r = Qt(o, t)) !== o && (e[l] = r);
  } else {
    Object.isFrozen(e) ? e = Object.assign({}, e) : t.add(e);
    const l = Object.keys(e), s = Object.getOwnPropertyDescriptors(e);
    for (let a = 0, c = l.length; a < c; a++)
      i = l[a], !s[i].get && (o = e[i], (r = Qt(o, t)) !== o && (e[i] = r));
  }
  return e;
}
function Sn(e, t) {
  let n = e[t];
  return n || Object.defineProperty(e, t, {
    value: n = /* @__PURE__ */ Object.create(null)
  }), n;
}
function Yt(e, t, n) {
  if (e[t])
    return e[t];
  const [r, o] = P(n, {
    equals: !1,
    internal: !0
  });
  return r.$ = o, e[t] = r;
}
function bl(e, t) {
  const n = Reflect.getOwnPropertyDescriptor(e, t);
  return !n || n.get || !n.configurable || t === ft || t === Dt || (delete n.value, delete n.writable, n.get = () => e[ft][t]), n;
}
function Jo(e) {
  jn() && Yt(Sn(e, Dt), Xo)();
}
function xl(e) {
  return Jo(e), Reflect.ownKeys(e);
}
var $l = {
  get(e, t, n) {
    if (t === Xn)
      return e;
    if (t === ft)
      return n;
    if (t === pn)
      return Jo(e), n;
    const r = Sn(e, Dt), o = r[t];
    let i = o ? o() : e[t];
    if (t === Dt || t === Ye || t === "__proto__")
      return i;
    if (!o) {
      const l = Object.getOwnPropertyDescriptor(e, t);
      jn() && (typeof i != "function" || e.hasOwnProperty(t)) && !(l && l.get) && (i = Yt(r, t, i)());
    }
    return Cn(i) ? Zo(i) : i;
  },
  has(e, t) {
    return t === Xn || t === ft || t === pn || t === Dt || t === Ye || t === "__proto__" ? !0 : (jn() && Yt(Sn(e, Ye), t)(), t in e);
  },
  set() {
    return !0;
  },
  deleteProperty() {
    return !0;
  },
  ownKeys: xl,
  getOwnPropertyDescriptor: bl
};
function kn(e, t, n, r = !1) {
  if (!r && e[t] === n)
    return;
  const o = e[t], i = e.length;
  n === void 0 ? (delete e[t], e[Ye] && e[Ye][t] && o !== void 0 && e[Ye][t].$()) : (e[t] = n, e[Ye] && e[Ye][t] && o === void 0 && e[Ye][t].$());
  let l = Sn(e, Dt), s;
  if ((s = Yt(l, t, o)) && s.$(() => n), Array.isArray(e) && e.length !== i) {
    for (let a = e.length; a < i; a++)
      (s = l[a]) && s.$();
    (s = Yt(l, "length", i)) && s.$(e.length);
  }
  (s = l[Xo]) && s.$();
}
function ei(e, t) {
  const n = Object.keys(t);
  for (let r = 0; r < n.length; r += 1) {
    const o = n[r];
    kn(e, o, t[o]);
  }
}
function pl(e, t) {
  if (typeof t == "function" && (t = t(e)), t = Qt(t), Array.isArray(t)) {
    if (e === t)
      return;
    let n = 0, r = t.length;
    for (; n < r; n++) {
      const o = t[n];
      e[n] !== o && kn(e, n, o);
    }
    kn(e, "length", r);
  } else
    ei(e, t);
}
function Gt(e, t, n = []) {
  let r, o = e;
  if (t.length > 1) {
    r = t.shift();
    const l = typeof r, s = Array.isArray(e);
    if (Array.isArray(r)) {
      for (let a = 0; a < r.length; a++)
        Gt(e, [r[a]].concat(t), n);
      return;
    } else if (s && l === "function") {
      for (let a = 0; a < e.length; a++)
        r(e[a], a) && Gt(e, [a].concat(t), n);
      return;
    } else if (s && l === "object") {
      const {
        from: a = 0,
        to: c = e.length - 1,
        by: h = 1
      } = r;
      for (let f = a; f <= c; f += h)
        Gt(e, [f].concat(t), n);
      return;
    } else if (t.length > 1) {
      Gt(e[r], t, [r].concat(n));
      return;
    }
    o = e[r], n = [r].concat(n);
  }
  let i = t[0];
  typeof i == "function" && (i = i(o, n), i === o) || r === void 0 && i == null || (i = Qt(i), r === void 0 || Cn(o) && Cn(i) && !Array.isArray(i) ? ei(o, i) : kn(e, r, i));
}
function wl(...[e, t]) {
  const n = Qt(e || {}), r = Array.isArray(n), o = Zo(n);
  function i(...l) {
    Bo(() => {
      r && l.length === 1 ? pl(n, l[0]) : Gt(n, l);
    });
  }
  return [o, i];
}
var Cl = class {
  getStringForLocale(e, t) {
    let n = this.messages[t];
    n || (n = Sl(t, this.messages, this.defaultLocale), this.messages[t] = n);
    let r = n[e];
    if (!r)
      throw new Error(`Could not find intl message ${e} in ${t} locale`);
    return r;
  }
  constructor(e, t = "en-US") {
    this.messages = {
      ...e
    }, this.defaultLocale = t;
  }
};
function Sl(e, t, n = "en-US") {
  if (t[e])
    return t[e];
  let r = kl(e);
  if (t[r])
    return t[r];
  for (let o in t)
    if (o.startsWith(r + "-"))
      return t[o];
  return t[n];
}
function kl(e) {
  return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0];
}
var El = ["top", "right", "bottom", "left"], gt = Math.min, De = Math.max, En = Math.round, bn = Math.floor, ht = (e) => ({
  x: e,
  y: e
}), _l = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Al = {
  start: "end",
  end: "start"
};
function Zn(e, t, n) {
  return De(e, gt(t, n));
}
function $t(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function yt(e) {
  return e.split("-")[0];
}
function Mt(e) {
  return e.split("-")[1];
}
function ti(e) {
  return e === "x" ? "y" : "x";
}
function fr(e) {
  return e === "y" ? "height" : "width";
}
function on(e) {
  return ["top", "bottom"].includes(yt(e)) ? "y" : "x";
}
function gr(e) {
  return ti(on(e));
}
function Dl(e, t, n) {
  n === void 0 && (n = !1);
  const r = Mt(e), o = gr(e), i = fr(o);
  let l = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (l = _n(l)), [l, _n(l)];
}
function Fl(e) {
  const t = _n(e);
  return [Jn(e), t, Jn(t)];
}
function Jn(e) {
  return e.replace(/start|end/g, (t) => Al[t]);
}
function Ll(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : l;
    default:
      return [];
  }
}
function Il(e, t, n, r) {
  const o = Mt(e);
  let i = Ll(yt(e), n === "start", r);
  return o && (i = i.map((l) => l + "-" + o), t && (i = i.concat(i.map(Jn)))), i;
}
function _n(e) {
  return e.replace(/left|right|bottom|top/g, (t) => _l[t]);
}
function Ml(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ni(e) {
  return typeof e != "number" ? Ml(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function An(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function lo(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = on(t), l = gr(t), s = fr(l), a = yt(t), c = i === "y", h = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, u = r[s] / 2 - o[s] / 2;
  let g;
  switch (a) {
    case "top":
      g = {
        x: h,
        y: r.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: h,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (Mt(t)) {
    case "start":
      g[l] -= u * (n && c ? -1 : 1);
      break;
    case "end":
      g[l] += u * (n && c ? -1 : 1);
      break;
  }
  return g;
}
var ql = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: l
  } = n, s = i.filter(Boolean), a = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let c = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: h,
    y: f
  } = lo(c, r, a), u = r, g = {}, d = 0;
  for (let y = 0; y < s.length; y++) {
    const {
      name: m,
      fn: $
    } = s[y], {
      x,
      y: b,
      data: w,
      reset: p
    } = await $({
      x: h,
      y: f,
      initialPlacement: r,
      placement: u,
      strategy: o,
      middlewareData: g,
      rects: c,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (h = x ?? h, f = b ?? f, g = {
      ...g,
      [m]: {
        ...g[m],
        ...w
      }
    }, p && d <= 50) {
      d++, typeof p == "object" && (p.placement && (u = p.placement), p.rects && (c = p.rects === !0 ? await l.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : p.rects), {
        x: h,
        y: f
      } = lo(c, u, a)), y = -1;
      continue;
    }
  }
  return {
    x: h,
    y: f,
    placement: u,
    strategy: o,
    middlewareData: g
  };
};
async function Xt(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: l,
    elements: s,
    strategy: a
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: h = "viewport",
    elementContext: f = "floating",
    altBoundary: u = !1,
    padding: g = 0
  } = $t(t, e), d = ni(g), m = s[u ? f === "floating" ? "reference" : "floating" : f], $ = An(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(m))) == null || n ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: c,
    rootBoundary: h,
    strategy: a
  })), x = f === "floating" ? {
    ...l.floating,
    x: r,
    y: o
  } : l.reference, b = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), w = await (i.isElement == null ? void 0 : i.isElement(b)) ? await (i.getScale == null ? void 0 : i.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, p = An(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: x,
    offsetParent: b,
    strategy: a
  }) : x);
  return {
    top: ($.top - p.top + d.top) / w.y,
    bottom: (p.bottom - $.bottom + d.bottom) / w.y,
    left: ($.left - p.left + d.left) / w.x,
    right: (p.right - $.right + d.right) / w.x
  };
}
var Ol = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: l,
      elements: s,
      middlewareData: a
    } = t, {
      element: c,
      padding: h = 0
    } = $t(e, t) || {};
    if (c == null)
      return {};
    const f = ni(h), u = {
      x: n,
      y: r
    }, g = gr(o), d = fr(g), y = await l.getDimensions(c), m = g === "y", $ = m ? "top" : "left", x = m ? "bottom" : "right", b = m ? "clientHeight" : "clientWidth", w = i.reference[d] + i.reference[g] - u[g] - i.floating[d], p = u[g] - i.reference[g], M = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(c));
    let B = M ? M[b] : 0;
    (!B || !await (l.isElement == null ? void 0 : l.isElement(M))) && (B = s.floating[b] || i.floating[d]);
    const _ = w / 2 - p / 2, R = B / 2 - y[d] / 2 - 1, G = gt(f[$], R), z = gt(f[x], R), Q = G, re = B - y[d] - z, T = B / 2 - y[d] / 2 + _, W = Zn(Q, T, re), X = !a.arrow && Mt(o) != null && T != W && i.reference[d] / 2 - (T < Q ? G : z) - y[d] / 2 < 0, ee = X ? T < Q ? T - Q : T - re : 0;
    return {
      [g]: u[g] + ee,
      data: {
        [g]: W,
        centerOffset: T - W - ee,
        ...X && {
          alignmentOffset: ee
        }
      },
      reset: X
    };
  }
}), Tl = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: l,
        initialPlacement: s,
        platform: a,
        elements: c
      } = t, {
        mainAxis: h = !0,
        crossAxis: f = !0,
        fallbackPlacements: u,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: d = "none",
        flipAlignment: y = !0,
        ...m
      } = $t(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const $ = yt(o), x = yt(s) === s, b = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), w = u || (x || !y ? [_n(s)] : Fl(s));
      !u && d !== "none" && w.push(...Il(s, y, d, b));
      const p = [s, ...w], M = await Xt(t, m), B = [];
      let _ = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (h && B.push(M[$]), f) {
        const Q = Dl(o, l, b);
        B.push(M[Q[0]], M[Q[1]]);
      }
      if (_ = [..._, {
        placement: o,
        overflows: B
      }], !B.every((Q) => Q <= 0)) {
        var R, G;
        const Q = (((R = i.flip) == null ? void 0 : R.index) || 0) + 1, re = p[Q];
        if (re)
          return {
            data: {
              index: Q,
              overflows: _
            },
            reset: {
              placement: re
            }
          };
        let T = (G = _.filter((W) => W.overflows[0] <= 0).sort((W, X) => W.overflows[1] - X.overflows[1])[0]) == null ? void 0 : G.placement;
        if (!T)
          switch (g) {
            case "bestFit": {
              var z;
              const W = (z = _.map((X) => [X.placement, X.overflows.filter((ee) => ee > 0).reduce((ee, oe) => ee + oe, 0)]).sort((X, ee) => X[1] - ee[1])[0]) == null ? void 0 : z[0];
              W && (T = W);
              break;
            }
            case "initialPlacement":
              T = s;
              break;
          }
        if (o !== T)
          return {
            reset: {
              placement: T
            }
          };
      }
      return {};
    }
  };
};
function ao(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function co(e) {
  return El.some((t) => e[t] >= 0);
}
var Pl = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = $t(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await Xt(t, {
            ...o,
            elementContext: "reference"
          }), l = ao(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: co(l)
            }
          };
        }
        case "escaped": {
          const i = await Xt(t, {
            ...o,
            altBoundary: !0
          }), l = ao(i, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: co(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function zl(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), l = yt(n), s = Mt(n), a = on(n) === "y", c = ["left", "top"].includes(l) ? -1 : 1, h = i && a ? -1 : 1, f = $t(t, e);
  let {
    mainAxis: u,
    crossAxis: g,
    alignmentAxis: d
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...f
  };
  return s && typeof d == "number" && (g = s === "end" ? d * -1 : d), a ? {
    x: g * h,
    y: u * c
  } : {
    x: u * c,
    y: g * h
  };
}
var Bl = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await zl(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
}, Kl = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: l = !1,
        limiter: s = {
          fn: (m) => {
            let {
              x: $,
              y: x
            } = m;
            return {
              x: $,
              y: x
            };
          }
        },
        ...a
      } = $t(e, t), c = {
        x: n,
        y: r
      }, h = await Xt(t, a), f = on(yt(o)), u = ti(f);
      let g = c[u], d = c[f];
      if (i) {
        const m = u === "y" ? "top" : "left", $ = u === "y" ? "bottom" : "right", x = g + h[m], b = g - h[$];
        g = Zn(x, g, b);
      }
      if (l) {
        const m = f === "y" ? "top" : "left", $ = f === "y" ? "bottom" : "right", x = d + h[m], b = d - h[$];
        d = Zn(x, d, b);
      }
      const y = s.fn({
        ...t,
        [u]: g,
        [f]: d
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - r
        }
      };
    }
  };
}, Rl = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: r,
        platform: o,
        elements: i
      } = t, {
        apply: l = () => {
        },
        ...s
      } = $t(e, t), a = await Xt(t, s), c = yt(n), h = Mt(n), f = on(n) === "y", {
        width: u,
        height: g
      } = r.floating;
      let d, y;
      c === "top" || c === "bottom" ? (d = c, y = h === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (y = c, d = h === "end" ? "top" : "bottom");
      const m = g - a[d], $ = u - a[y], x = !t.middlewareData.shift;
      let b = m, w = $;
      if (f) {
        const M = u - a.left - a.right;
        w = h || x ? gt($, M) : M;
      } else {
        const M = g - a.top - a.bottom;
        b = h || x ? gt(m, M) : M;
      }
      if (x && !h) {
        const M = De(a.left, 0), B = De(a.right, 0), _ = De(a.top, 0), R = De(a.bottom, 0);
        f ? w = u - 2 * (M !== 0 || B !== 0 ? M + B : De(a.left, a.right)) : b = g - 2 * (_ !== 0 || R !== 0 ? _ + R : De(a.top, a.bottom));
      }
      await l({
        ...t,
        availableWidth: w,
        availableHeight: b
      });
      const p = await o.getDimensions(i.floating);
      return u !== p.width || g !== p.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function vt(e) {
  return ri(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Fe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function nt(e) {
  var t;
  return (t = (ri(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ri(e) {
  return e instanceof Node || e instanceof Fe(e).Node;
}
function et(e) {
  return e instanceof Element || e instanceof Fe(e).Element;
}
function Ve(e) {
  return e instanceof HTMLElement || e instanceof Fe(e).HTMLElement;
}
function uo(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Fe(e).ShadowRoot;
}
function sn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Oe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Nl(e) {
  return ["table", "td", "th"].includes(vt(e));
}
function hr(e) {
  const t = yr(), n = Oe(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Ul(e) {
  let t = Lt(e);
  for (; Ve(t) && !Mn(t); ) {
    if (hr(t))
      return t;
    t = Lt(t);
  }
  return null;
}
function yr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Mn(e) {
  return ["html", "body", "#document"].includes(vt(e));
}
function Oe(e) {
  return Fe(e).getComputedStyle(e);
}
function qn(e) {
  return et(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Lt(e) {
  if (vt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    uo(e) && e.host || // Fallback.
    nt(e)
  );
  return uo(t) ? t.host : t;
}
function oi(e) {
  const t = Lt(e);
  return Mn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ve(t) && sn(t) ? t : oi(t);
}
function Zt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = oi(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), l = Fe(o);
  return i ? t.concat(l, l.visualViewport || [], sn(o) ? o : [], l.frameElement && n ? Zt(l.frameElement) : []) : t.concat(o, Zt(o, [], n));
}
function ii(e) {
  const t = Oe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Ve(e), i = o ? e.offsetWidth : n, l = o ? e.offsetHeight : r, s = En(n) !== i || En(r) !== l;
  return s && (n = i, r = l), {
    width: n,
    height: r,
    $: s
  };
}
function vr(e) {
  return et(e) ? e : e.contextElement;
}
function Ft(e) {
  const t = vr(e);
  if (!Ve(t))
    return ht(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = ii(t);
  let l = (i ? En(n.width) : n.width) / r, s = (i ? En(n.height) : n.height) / o;
  return (!l || !Number.isFinite(l)) && (l = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: l,
    y: s
  };
}
var Vl = /* @__PURE__ */ ht(0);
function si(e) {
  const t = Fe(e);
  return !yr() || !t.visualViewport ? Vl : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Gl(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Fe(e) ? !1 : t;
}
function xt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = vr(e);
  let l = ht(1);
  t && (r ? et(r) && (l = Ft(r)) : l = Ft(e));
  const s = Gl(i, n, r) ? si(i) : ht(0);
  let a = (o.left + s.x) / l.x, c = (o.top + s.y) / l.y, h = o.width / l.x, f = o.height / l.y;
  if (i) {
    const u = Fe(i), g = r && et(r) ? Fe(r) : r;
    let d = u.frameElement;
    for (; d && r && g !== u; ) {
      const y = Ft(d), m = d.getBoundingClientRect(), $ = Oe(d), x = m.left + (d.clientLeft + parseFloat($.paddingLeft)) * y.x, b = m.top + (d.clientTop + parseFloat($.paddingTop)) * y.y;
      a *= y.x, c *= y.y, h *= y.x, f *= y.y, a += x, c += b, d = Fe(d).frameElement;
    }
  }
  return An({
    width: h,
    height: f,
    x: a,
    y: c
  });
}
function Hl(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = Ve(n), i = nt(n);
  if (n === i)
    return t;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = ht(1);
  const a = ht(0);
  if ((o || !o && r !== "fixed") && ((vt(n) !== "body" || sn(i)) && (l = qn(n)), Ve(n))) {
    const c = xt(n);
    s = Ft(n), a.x = c.x + n.clientLeft, a.y = c.y + n.clientTop;
  }
  return {
    width: t.width * s.x,
    height: t.height * s.y,
    x: t.x * s.x - l.scrollLeft * s.x + a.x,
    y: t.y * s.y - l.scrollTop * s.y + a.y
  };
}
function jl(e) {
  return Array.from(e.getClientRects());
}
function li(e) {
  return xt(nt(e)).left + qn(e).scrollLeft;
}
function Wl(e) {
  const t = nt(e), n = qn(e), r = e.ownerDocument.body, o = De(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = De(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -n.scrollLeft + li(e);
  const s = -n.scrollTop;
  return Oe(r).direction === "rtl" && (l += De(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: l,
    y: s
  };
}
function Ql(e, t) {
  const n = Fe(e), r = nt(e), o = n.visualViewport;
  let i = r.clientWidth, l = r.clientHeight, s = 0, a = 0;
  if (o) {
    i = o.width, l = o.height;
    const c = yr();
    (!c || c && t === "fixed") && (s = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: s,
    y: a
  };
}
function Yl(e, t) {
  const n = xt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Ve(e) ? Ft(e) : ht(1), l = e.clientWidth * i.x, s = e.clientHeight * i.y, a = o * i.x, c = r * i.y;
  return {
    width: l,
    height: s,
    x: a,
    y: c
  };
}
function fo(e, t, n) {
  let r;
  if (t === "viewport")
    r = Ql(e, n);
  else if (t === "document")
    r = Wl(nt(e));
  else if (et(t))
    r = Yl(t, n);
  else {
    const o = si(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return An(r);
}
function ai(e, t) {
  const n = Lt(e);
  return n === t || !et(n) || Mn(n) ? !1 : Oe(n).position === "fixed" || ai(n, t);
}
function Xl(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Zt(e, [], !1).filter((s) => et(s) && vt(s) !== "body"), o = null;
  const i = Oe(e).position === "fixed";
  let l = i ? Lt(e) : e;
  for (; et(l) && !Mn(l); ) {
    const s = Oe(l), a = hr(l);
    !a && s.position === "fixed" && (o = null), (i ? !a && !o : !a && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || sn(l) && !a && ai(e, l)) ? r = r.filter((h) => h !== l) : o = s, l = Lt(l);
  }
  return t.set(e, r), r;
}
function Zl(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const l = [...n === "clippingAncestors" ? Xl(t, this._c) : [].concat(n), r], s = l[0], a = l.reduce((c, h) => {
    const f = fo(t, h, o);
    return c.top = De(f.top, c.top), c.right = gt(f.right, c.right), c.bottom = gt(f.bottom, c.bottom), c.left = De(f.left, c.left), c;
  }, fo(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Jl(e) {
  return ii(e);
}
function ea(e, t, n) {
  const r = Ve(t), o = nt(t), i = n === "fixed", l = xt(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = ht(0);
  if (r || !r && !i)
    if ((vt(t) !== "body" || sn(o)) && (s = qn(t)), r) {
      const c = xt(t, !0, i, t);
      a.x = c.x + t.clientLeft, a.y = c.y + t.clientTop;
    } else
      o && (a.x = li(o));
  return {
    x: l.left + s.scrollLeft - a.x,
    y: l.top + s.scrollTop - a.y,
    width: l.width,
    height: l.height
  };
}
function go(e, t) {
  return !Ve(e) || Oe(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function ci(e, t) {
  const n = Fe(e);
  if (!Ve(e))
    return n;
  let r = go(e, t);
  for (; r && Nl(r) && Oe(r).position === "static"; )
    r = go(r, t);
  return r && (vt(r) === "html" || vt(r) === "body" && Oe(r).position === "static" && !hr(r)) ? n : r || Ul(e) || n;
}
var ta = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || ci, i = this.getDimensions;
  return {
    reference: ea(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await i(n)
    }
  };
};
function na(e) {
  return Oe(e).direction === "rtl";
}
var ui = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Hl,
  getDocumentElement: nt,
  getClippingRect: Zl,
  getOffsetParent: ci,
  getElementRects: ta,
  getClientRects: jl,
  getDimensions: Jl,
  getScale: Ft,
  isElement: et,
  isRTL: na
};
function ra(e, t) {
  let n = null, r;
  const o = nt(e);
  function i() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function l(s, a) {
    s === void 0 && (s = !1), a === void 0 && (a = 1), i();
    const {
      left: c,
      top: h,
      width: f,
      height: u
    } = e.getBoundingClientRect();
    if (s || t(), !f || !u)
      return;
    const g = bn(h), d = bn(o.clientWidth - (c + f)), y = bn(o.clientHeight - (h + u)), m = bn(c), x = {
      rootMargin: -g + "px " + -d + "px " + -y + "px " + -m + "px",
      threshold: De(0, gt(1, a)) || 1
    };
    let b = !0;
    function w(p) {
      const M = p[0].intersectionRatio;
      if (M !== a) {
        if (!b)
          return l();
        M ? l(!1, M) : r = setTimeout(() => {
          l(!1, 1e-7);
        }, 100);
      }
      b = !1;
    }
    try {
      n = new IntersectionObserver(w, {
        ...x,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(w, x);
    }
    n.observe(e);
  }
  return l(!0), i;
}
function oa(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = r, c = vr(e), h = o || i ? [...c ? Zt(c) : [], ...Zt(t)] : [];
  h.forEach(($) => {
    o && $.addEventListener("scroll", n, {
      passive: !0
    }), i && $.addEventListener("resize", n);
  });
  const f = c && s ? ra(c, n) : null;
  let u = -1, g = null;
  l && (g = new ResizeObserver(($) => {
    let [x] = $;
    x && x.target === c && g && (g.unobserve(t), cancelAnimationFrame(u), u = requestAnimationFrame(() => {
      g && g.observe(t);
    })), n();
  }), c && !a && g.observe(c), g.observe(t));
  let d, y = a ? xt(e) : null;
  a && m();
  function m() {
    const $ = xt(e);
    y && ($.x !== y.x || $.y !== y.y || $.width !== y.width || $.height !== y.height) && n(), y = $, d = requestAnimationFrame(m);
  }
  return n(), () => {
    h.forEach(($) => {
      o && $.removeEventListener("scroll", n), i && $.removeEventListener("resize", n);
    }), f && f(), g && g.disconnect(), g = null, a && cancelAnimationFrame(d);
  };
}
var ia = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: ui,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return ql(e, t, {
    ...o,
    platform: i
  });
};
function er(e) {
  let t = e.startIndex ?? 0;
  const n = e.startLevel ?? 0, r = [], o = (a) => {
    if (a == null)
      return "";
    const c = e.getKey ?? "key", h = Et(c) ? a[c] : c(a);
    return h != null ? String(h) : "";
  }, i = (a) => {
    if (a == null)
      return "";
    const c = e.getTextValue ?? "textValue", h = Et(c) ? a[c] : c(a);
    return h != null ? String(h) : "";
  }, l = (a) => {
    if (a == null)
      return !1;
    const c = e.getDisabled ?? "disabled";
    return (Et(c) ? a[c] : c(a)) ?? !1;
  }, s = (a) => {
    var c;
    if (a != null)
      return Et(e.getSectionChildren) ? a[e.getSectionChildren] : (c = e.getSectionChildren) == null ? void 0 : c.call(e, a);
  };
  for (const a of e.dataSource) {
    if (Et(a) || Js(a)) {
      r.push({
        type: "item",
        rawValue: a,
        key: String(a),
        textValue: String(a),
        disabled: l(a),
        level: n,
        index: t
      }), t++;
      continue;
    }
    if (s(a) != null) {
      r.push({
        type: "section",
        rawValue: a,
        key: "",
        // not applicable here
        textValue: "",
        // not applicable here
        disabled: !1,
        // not applicable here
        level: n,
        index: t
      }), t++;
      const c = s(a) ?? [];
      if (c.length > 0) {
        const h = er({
          dataSource: c,
          getKey: e.getKey,
          getTextValue: e.getTextValue,
          getDisabled: e.getDisabled,
          getSectionChildren: e.getSectionChildren,
          startIndex: t,
          startLevel: n + 1
        });
        r.push(...h), t += h.length;
      }
    } else
      r.push({
        type: "item",
        rawValue: a,
        key: o(a),
        textValue: i(a),
        disabled: l(a),
        level: n,
        index: t
      }), t++;
  }
  return r;
}
function sa(e, t = []) {
  const n = er({
    dataSource: C(e.dataSource),
    getKey: C(e.getKey),
    getTextValue: C(e.getTextValue),
    getDisabled: C(e.getDisabled),
    getSectionChildren: C(e.getSectionChildren)
  }), [r, o] = P(e.factory(n));
  return N(Be([() => C(e.dataSource), () => C(e.getKey), () => C(e.getTextValue), () => C(e.getDisabled), () => C(e.getSectionChildren), () => e.factory, ...t], ([i, l, s, a, c, h]) => {
    const f = er({
      dataSource: i,
      getKey: l,
      getTextValue: s,
      getDisabled: a,
      getSectionChildren: c
    });
    o(() => h(f));
  }, {
    defer: !0
  })), r;
}
function ln(e) {
  var l;
  const [t, n] = P((l = e.defaultValue) == null ? void 0 : l.call(e)), r = F(() => {
    var s;
    return ((s = e.value) == null ? void 0 : s.call(e)) !== void 0;
  }), o = F(() => {
    var s;
    return r() ? (s = e.value) == null ? void 0 : s.call(e) : t();
  });
  return [o, (s) => {
    jt(() => {
      var c;
      const a = Ms(s, o());
      return Object.is(a, o()) || (r() || n(a), (c = e.onChange) == null || c.call(e, a)), a;
    });
  }];
}
function di(e) {
  const [t, n] = ln(e);
  return [() => t() ?? !1, n];
}
function la(e) {
  const [t, n] = ln(e);
  return [() => t() ?? [], n];
}
function fi(e = {}) {
  const [t, n] = di({
    value: () => C(e.open),
    defaultValue: () => !!C(e.defaultOpen),
    onChange: (l) => {
      var s;
      return (s = e.onOpenChange) == null ? void 0 : s.call(e, l);
    }
  }), r = () => {
    n(!0);
  }, o = () => {
    n(!1);
  };
  return {
    isOpen: t,
    setIsOpen: n,
    open: r,
    close: o,
    toggle: () => {
      t() ? o() : r();
    }
  };
}
function aa(e) {
  const t = (n) => {
    var r;
    n.key === ar.Escape && ((r = e.onEscapeKeyDown) == null || r.call(e, n));
  };
  N(() => {
    var r;
    if (C(e.isDisabled))
      return;
    const n = ((r = e.ownerDocument) == null ? void 0 : r.call(e)) ?? Ke();
    n.addEventListener("keydown", t), V(() => {
      n.removeEventListener("keydown", t);
    });
  });
}
var Dn = "data-kb-top-layer", gi, tr = !1, tt = [];
function Jt(e) {
  return tt.findIndex((t) => t.node === e);
}
function ca(e) {
  return tt[Jt(e)];
}
function ua(e) {
  return tt[tt.length - 1].node === e;
}
function hi() {
  return tt.filter((e) => e.isPointerBlocking);
}
function da() {
  return [...hi()].slice(-1)[0];
}
function mr() {
  return hi().length > 0;
}
function yi(e) {
  var n;
  const t = Jt((n = da()) == null ? void 0 : n.node);
  return Jt(e) < t;
}
function fa(e) {
  tt.push(e);
}
function ga(e) {
  const t = Jt(e);
  t < 0 || tt.splice(t, 1);
}
function ha() {
  tt.forEach(({
    node: e
  }) => {
    e.style.pointerEvents = yi(e) ? "none" : "auto";
  });
}
function ya(e) {
  if (mr() && !tr) {
    const t = Ke(e);
    gi = document.body.style.pointerEvents, t.body.style.pointerEvents = "none", tr = !0;
  }
}
function va(e) {
  if (mr())
    return;
  const t = Ke(e);
  t.body.style.pointerEvents = gi, t.body.style.length === 0 && t.body.removeAttribute("style"), tr = !1;
}
var _e = {
  layers: tt,
  isTopMostLayer: ua,
  hasPointerBlockingLayer: mr,
  isBelowPointerBlockingLayer: yi,
  addLayer: fa,
  removeLayer: ga,
  indexOf: Jt,
  find: ca,
  assignPointerEventToLayers: ha,
  disableBodyPointerEvents: ya,
  restoreBodyPointerEvents: va
}, Rn = "focusScope.autoFocusOnMount", Nn = "focusScope.autoFocusOnUnmount", ho = {
  bubbles: !1,
  cancelable: !0
}, yo = {
  /** A stack of focus scopes, with the active one at the top */
  stack: [],
  active() {
    return this.stack[0];
  },
  add(e) {
    var t;
    e !== this.active() && ((t = this.active()) == null || t.pause()), this.stack = Yn(this.stack, e), this.stack.unshift(e);
  },
  remove(e) {
    var t;
    this.stack = Yn(this.stack, e), (t = this.active()) == null || t.resume();
  }
};
function ma(e, t) {
  const [n, r] = P(!1), o = {
    pause() {
      r(!0);
    },
    resume() {
      r(!1);
    }
  };
  let i = null;
  const l = (d) => {
    var y;
    return (y = e.onMountAutoFocus) == null ? void 0 : y.call(e, d);
  }, s = (d) => {
    var y;
    return (y = e.onUnmountAutoFocus) == null ? void 0 : y.call(e, d);
  }, a = () => Ke(t()), c = () => {
    const d = a().createElement("span");
    return d.setAttribute("data-focus-trap", ""), d.tabIndex = 0, Object.assign(d.style, Yo), d;
  }, h = () => {
    const d = t();
    return d ? Wo(d, !0).filter((y) => !y.hasAttribute("data-focus-trap")) : [];
  }, f = () => {
    const d = h();
    return d.length > 0 ? d[0] : null;
  }, u = () => {
    const d = h();
    return d.length > 0 ? d[d.length - 1] : null;
  }, g = () => {
    const d = t();
    if (!d)
      return !1;
    const y = Vt(d);
    return !y || Me(d, y) ? !1 : Qo(y);
  };
  N(() => {
    const d = t();
    if (!d)
      return;
    yo.add(o);
    const y = Vt(d);
    if (!Me(d, y)) {
      const $ = new CustomEvent(Rn, ho);
      d.addEventListener(Rn, l), d.dispatchEvent($), $.defaultPrevented || setTimeout(() => {
        $e(f()), Vt(d) === y && $e(d);
      }, 0);
    }
    V(() => {
      d.removeEventListener(Rn, l), setTimeout(() => {
        const $ = new CustomEvent(Nn, ho);
        g() && $.preventDefault(), d.addEventListener(Nn, s), d.dispatchEvent($), $.defaultPrevented || $e(y ?? a().body), d.removeEventListener(Nn, s), yo.remove(o);
      }, 0);
    });
  }), N(() => {
    const d = t();
    if (!d || !C(e.trapFocus) || n())
      return;
    const y = ($) => {
      const x = $.target;
      x != null && x.closest(`[${Dn}]`) || (Me(d, x) ? i = x : $e(i));
    }, m = ($) => {
      const b = $.relatedTarget ?? Vt(d);
      b != null && b.closest(`[${Dn}]`) || Me(d, b) || $e(i);
    };
    a().addEventListener("focusin", y), a().addEventListener("focusout", m), V(() => {
      a().removeEventListener("focusin", y), a().removeEventListener("focusout", m);
    });
  }), N(() => {
    const d = t();
    if (!d || !C(e.trapFocus) || n())
      return;
    const y = c();
    d.insertAdjacentElement("afterbegin", y);
    const m = c();
    d.insertAdjacentElement("beforeend", m);
    function $(b) {
      const w = f(), p = u();
      b.relatedTarget === w ? $e(p) : $e(w);
    }
    y.addEventListener("focusin", $), m.addEventListener("focusin", $);
    const x = new MutationObserver((b) => {
      for (const w of b)
        w.previousSibling === m && (m.remove(), d.insertAdjacentElement("beforeend", m)), w.nextSibling === y && (y.remove(), d.insertAdjacentElement("afterbegin", y));
    });
    x.observe(d, {
      childList: !0,
      subtree: !1
    }), V(() => {
      y.removeEventListener("focusin", $), m.removeEventListener("focusin", $), y.remove(), m.remove(), x.disconnect();
    });
  });
}
function ba(e, t) {
  N(Be(e, (n) => {
    if (n == null)
      return;
    const r = xa(n);
    r != null && (r.addEventListener("reset", t, {
      passive: !0
    }), V(() => {
      r.removeEventListener("reset", t);
    }));
  }));
}
function xa(e) {
  return $a(e) ? e.form : e.closest("form");
}
function $a(e) {
  return e.matches("textarea, input, select, button");
}
var pa = "data-live-announcer";
function wa(e) {
  N(() => {
    C(e.isDisabled) || V(Ca(C(e.targets), C(e.root)));
  });
}
var Nt = /* @__PURE__ */ new WeakMap(), Ie = [];
function Ca(e, t = document.body) {
  const n = new Set(e), r = /* @__PURE__ */ new Set(), o = (a) => {
    for (const u of a.querySelectorAll(`[${pa}], [${Dn}]`))
      n.add(u);
    const c = (u) => {
      if (n.has(u) || u.parentElement && r.has(u.parentElement) && u.parentElement.getAttribute("role") !== "row")
        return NodeFilter.FILTER_REJECT;
      for (const g of n)
        if (u.contains(g))
          return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    }, h = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
      acceptNode: c
    }), f = c(a);
    if (f === NodeFilter.FILTER_ACCEPT && i(a), f !== NodeFilter.FILTER_REJECT) {
      let u = h.nextNode();
      for (; u != null; )
        i(u), u = h.nextNode();
    }
  }, i = (a) => {
    const c = Nt.get(a) ?? 0;
    a.getAttribute("aria-hidden") === "true" && c === 0 || (c === 0 && a.setAttribute("aria-hidden", "true"), r.add(a), Nt.set(a, c + 1));
  };
  Ie.length && Ie[Ie.length - 1].disconnect(), o(t);
  const l = new MutationObserver((a) => {
    for (const c of a)
      if (!(c.type !== "childList" || c.addedNodes.length === 0) && ![...n, ...r].some((h) => h.contains(c.target))) {
        for (const h of c.removedNodes)
          h instanceof Element && (n.delete(h), r.delete(h));
        for (const h of c.addedNodes)
          (h instanceof HTMLElement || h instanceof SVGElement) && (h.dataset.liveAnnouncer === "true" || h.dataset.reactAriaTopLayer === "true") ? n.add(h) : h instanceof Element && o(h);
      }
  });
  l.observe(t, {
    childList: !0,
    subtree: !0
  });
  const s = {
    observe() {
      l.observe(t, {
        childList: !0,
        subtree: !0
      });
    },
    disconnect() {
      l.disconnect();
    }
  };
  return Ie.push(s), () => {
    l.disconnect();
    for (const a of r) {
      const c = Nt.get(a);
      if (c == null)
        return;
      c === 1 ? (a.removeAttribute("aria-hidden"), Nt.delete(a)) : Nt.set(a, c - 1);
    }
    s === Ie[Ie.length - 1] ? (Ie.pop(), Ie.length && Ie[Ie.length - 1].observe()) : Ie.splice(Ie.indexOf(s), 1);
  };
}
var vo = "interactOutside.pointerDownOutside", mo = "interactOutside.focusOutside";
function Sa(e, t) {
  let n, r = vl;
  const o = () => Ke(t()), i = (f) => {
    var u;
    return (u = e.onPointerDownOutside) == null ? void 0 : u.call(e, f);
  }, l = (f) => {
    var u;
    return (u = e.onFocusOutside) == null ? void 0 : u.call(e, f);
  }, s = (f) => {
    var u;
    return (u = e.onInteractOutside) == null ? void 0 : u.call(e, f);
  }, a = (f) => {
    var g;
    const u = f.target;
    return !(u instanceof HTMLElement) || u.closest(`[${Dn}]`) || !Me(o(), u) || Me(t(), u) ? !1 : !((g = e.shouldExcludeElement) != null && g.call(e, u));
  }, c = (f) => {
    function u() {
      const g = t(), d = f.target;
      if (!g || !d || !a(f))
        return;
      const y = ye([i, s]);
      d.addEventListener(vo, y, {
        once: !0
      });
      const m = new CustomEvent(vo, {
        bubbles: !1,
        cancelable: !0,
        detail: {
          originalEvent: f,
          isContextMenu: f.button === 2 || il(f) && f.button === 0
        }
      });
      d.dispatchEvent(m);
    }
    f.pointerType === "touch" ? (o().removeEventListener("click", u), r = u, o().addEventListener("click", u, {
      once: !0
    })) : u();
  }, h = (f) => {
    const u = t(), g = f.target;
    if (!u || !g || !a(f))
      return;
    const d = ye([l, s]);
    g.addEventListener(mo, d, {
      once: !0
    });
    const y = new CustomEvent(mo, {
      bubbles: !1,
      cancelable: !0,
      detail: {
        originalEvent: f,
        isContextMenu: !1
      }
    });
    g.dispatchEvent(y);
  };
  N(() => {
    C(e.isDisabled) || (n = window.setTimeout(() => {
      o().addEventListener("pointerdown", c, !0);
    }, 0), o().addEventListener("focusin", h, !0), V(() => {
      window.clearTimeout(n), o().removeEventListener("click", r), o().removeEventListener("pointerdown", c, !0), o().removeEventListener("focusin", h, !0);
    }));
  });
}
function vi(e) {
  const [t, n] = P();
  let r = {}, o = e(), i = "none";
  const [l, s] = ka(e() ? "mounted" : "unmounted", {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return N(Be(l, (a) => {
    const c = xn(r);
    i = a === "mounted" ? c : "none";
  })), N(Be(e, (a) => {
    if (o === a)
      return;
    const c = xn(r);
    a ? s("MOUNT") : (r == null ? void 0 : r.display) === "none" ? s("UNMOUNT") : s(o && i !== c ? "ANIMATION_OUT" : "UNMOUNT"), o = a;
  })), N(Be(t, (a) => {
    if (a) {
      const c = (f) => {
        const g = xn(r).includes(f.animationName);
        f.target === a && g && s("ANIMATION_END");
      }, h = (f) => {
        f.target === a && (i = xn(r));
      };
      a.addEventListener("animationstart", h), a.addEventListener("animationcancel", c), a.addEventListener("animationend", c), V(() => {
        a.removeEventListener("animationstart", h), a.removeEventListener("animationcancel", c), a.removeEventListener("animationend", c);
      });
    } else
      s("ANIMATION_END");
  })), {
    isPresent: () => ["mounted", "unmountSuspended"].includes(l()),
    setRef: (a) => {
      a && (r = getComputedStyle(a)), n(a);
    }
  };
}
function xn(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function ka(e, t) {
  const n = (l, s) => t[l][s] ?? l, [r, o] = P(e);
  return [r, (l) => {
    o((s) => n(s, l));
  }];
}
var Un = "data-kb-scroll-lock";
function bo(e, t) {
  if (!e)
    return () => {
    };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function Ea(e, t, n) {
  if (!e)
    return () => {
    };
  const r = e.style.getPropertyValue(t);
  return e.style.setProperty(t, n), () => {
    r ? e.style.setProperty(t, r) : e.style.removeProperty(t);
  };
}
function _a(e) {
  const t = e.getBoundingClientRect().left;
  return Math.round(t) + e.scrollLeft ? "paddingLeft" : "paddingRight";
}
function Aa(e) {
  N(() => {
    if (!C(e.ownerRef) || C(e.isDisabled))
      return;
    const t = Ke(C(e.ownerRef)), n = Vo(C(e.ownerRef)), {
      documentElement: r,
      body: o
    } = t;
    if (o.hasAttribute(Un))
      return;
    o.setAttribute(Un, "");
    const l = n.innerWidth - r.clientWidth, s = () => Ea(r, "--scrollbar-width", `${l}px`), a = _a(r), c = () => bo(o, {
      overflow: "hidden",
      [a]: `${l}px`
    }), h = () => {
      const {
        scrollX: u,
        scrollY: g,
        visualViewport: d
      } = n, y = (d == null ? void 0 : d.offsetLeft) ?? 0, m = (d == null ? void 0 : d.offsetTop) ?? 0, $ = bo(o, {
        position: "fixed",
        overflow: "hidden",
        top: `${-(g - Math.floor(m))}px`,
        left: `${-(u - Math.floor(y))}px`,
        right: "0",
        [a]: `${l}px`
      });
      return () => {
        $(), n.scrollTo(u, g);
      };
    }, f = lr([s(), Ho() ? h() : c()]);
    V(() => {
      f(), o.removeAttribute(Un);
    });
  });
}
function qe(e) {
  return (t) => (e(t), () => e(void 0));
}
function br(e, t) {
  const [n, r] = P(xo(t == null ? void 0 : t()));
  return N(() => {
    var o;
    r(((o = e()) == null ? void 0 : o.tagName.toLowerCase()) || xo(t == null ? void 0 : t()));
  }), n;
}
function xo(e) {
  return Et(e) ? e : void 0;
}
function Da(e = {}) {
  const [t, n] = di({
    value: () => C(e.isSelected),
    defaultValue: () => !!C(e.defaultIsSelected),
    onChange: (i) => {
      var l;
      return (l = e.onSelectedChange) == null ? void 0 : l.call(e, i);
    }
  });
  return {
    isSelected: t,
    setIsSelected: (i) => {
      !C(e.isReadOnly) && !C(e.isDisabled) && n(i);
    },
    toggle: () => {
      !C(e.isReadOnly) && !C(e.isDisabled) && n(!t());
    }
  };
}
var Fa = ["id", "name", "validationState", "required", "disabled", "readOnly"];
function La(e) {
  const t = `form-control-${Re()}`;
  e = Y({
    id: t
  }, e);
  const [n, r] = P(), [o, i] = P(), [l, s] = P(), [a, c] = P(), h = (d, y, m) => {
    const $ = m != null || n() != null;
    return [
      m,
      n(),
      // If there is both an aria-label and aria-labelledby, add the field itself has an aria-labelledby
      $ && y != null ? d : void 0
    ].filter(Boolean).join(" ") || void 0;
  }, f = (d) => [
    l(),
    // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA.
    // See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
    a(),
    d
  ].filter(Boolean).join(" ") || void 0, u = F(() => ({
    "data-valid": C(e.validationState) === "valid" ? "" : void 0,
    "data-invalid": C(e.validationState) === "invalid" ? "" : void 0,
    "data-required": C(e.required) ? "" : void 0,
    "data-disabled": C(e.disabled) ? "" : void 0,
    "data-readonly": C(e.readOnly) ? "" : void 0
  }));
  return {
    formControlContext: {
      name: () => C(e.name) ?? C(e.id),
      dataset: u,
      validationState: () => C(e.validationState),
      isRequired: () => C(e.required),
      isDisabled: () => C(e.disabled),
      isReadOnly: () => C(e.readOnly),
      labelId: n,
      fieldId: o,
      descriptionId: l,
      errorMessageId: a,
      getAriaLabelledBy: h,
      getAriaDescribedBy: f,
      generateId: rn(() => C(e.id)),
      registerLabel: qe(r),
      registerField: qe(i),
      registerDescription: qe(s),
      registerErrorMessage: qe(c)
    }
  };
}
var mi = Ce();
function an() {
  const e = Se(mi);
  if (e === void 0)
    throw new Error("[kobalte]: `useFormControlContext` must be used within a `FormControlContext.Provider` component");
  return e;
}
function le(e) {
  var o;
  const [t, n] = Z(e, ["asChild", "as", "children"]);
  if (!t.asChild)
    return v(zn, H({
      get component() {
        return t.as;
      }
    }, n, {
      get children() {
        return t.children;
      }
    }));
  const r = gs(() => t.children);
  if ($o(r())) {
    const i = po(n, ((o = r()) == null ? void 0 : o.props) ?? {});
    return v(zn, i);
  }
  if (el(r())) {
    const i = r().find($o);
    if (i) {
      const l = () => v(zo, {
        get each() {
          return r();
        },
        children: (a) => v(K, {
          when: a === i,
          fallback: a,
          get children() {
            return i.props.children;
          }
        })
      }), s = po(n, (i == null ? void 0 : i.props) ?? {});
      return v(zn, H(s, {
        children: l
      }));
    }
  }
  throw new Error("[kobalte]: Component is expected to render `asChild` but no children `As` component was found.");
}
var Ia = Symbol("$$KobalteAsComponent");
function $o(e) {
  return (e == null ? void 0 : e[Ia]) === !0;
}
function po(e, t) {
  return Xs([e, t], {
    reverseEventHandlers: !0
  });
}
function Ma(e) {
  const t = an();
  return e = Y({
    id: t.generateId("description")
  }, e), N(() => V(t.registerDescription(e.id))), v(le, H({
    as: "div"
  }, () => t.dataset(), e));
}
function qa(e) {
  const t = an();
  e = Y({
    id: t.generateId("error-message")
  }, e);
  const [n, r] = Z(e, ["forceMount"]), o = () => t.validationState() === "invalid";
  return N(() => {
    o() && V(t.registerErrorMessage(r.id));
  }), v(K, {
    get when() {
      return n.forceMount || o();
    },
    get children() {
      return v(le, H({
        as: "div"
      }, () => t.dataset(), r));
    }
  });
}
function Oa(e) {
  let t;
  const n = an();
  e = Y({
    id: n.generateId("label")
  }, e);
  const [r, o] = Z(e, ["ref"]), i = br(() => t, () => "label");
  return N(() => V(n.registerLabel(o.id))), v(le, H({
    as: "label",
    ref(l) {
      const s = ke((a) => t = a, r.ref);
      typeof s == "function" && s(l);
    },
    get for() {
      return F(() => i() === "label")() ? n.fieldId() : void 0;
    }
  }, () => n.dataset(), o));
}
var Ta = /* @__PURE__ */ new Set(["Avst", "Arab", "Armi", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]), Pa = /* @__PURE__ */ new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);
function za(e) {
  if (Intl.Locale) {
    const n = new Intl.Locale(e).maximize().script ?? "";
    return Ta.has(n);
  }
  const t = e.split("-")[0];
  return Pa.has(t);
}
function Ba(e) {
  return za(e) ? "rtl" : "ltr";
}
function bi() {
  let e = (
    // @ts-ignore
    typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US"
  );
  try {
    Intl.DateTimeFormat.supportedLocalesOf([e]);
  } catch {
    e = "en-US";
  }
  return {
    locale: e,
    direction: Ba(e)
  };
}
var nr = bi(), Ht = /* @__PURE__ */ new Set();
function wo() {
  nr = bi();
  for (const e of Ht)
    e(nr);
}
function Ka() {
  const [e, t] = P(nr), n = F(() => e());
  return It(() => {
    Ht.size === 0 && window.addEventListener("languagechange", wo), Ht.add(t), V(() => {
      Ht.delete(t), Ht.size === 0 && window.removeEventListener("languagechange", wo);
    });
  }), {
    locale: () => n().locale,
    direction: () => n().direction
  };
}
var Ra = Ce();
function qt() {
  const e = Ka();
  return Se(Ra) || e;
}
var Vn = /* @__PURE__ */ new Map();
function Na(e) {
  const {
    locale: t
  } = qt(), n = F(() => t() + (e ? Object.entries(e).sort((r, o) => r[0] < o[0] ? -1 : 1).join() : ""));
  return F(() => {
    const r = n();
    let o;
    return Vn.has(r) && (o = Vn.get(r)), o || (o = new Intl.Collator(t(), e), Vn.set(r, o)), o;
  });
}
var Xe = class xi extends Set {
  constructor(t, n, r) {
    super(t), t instanceof xi ? (this.anchorKey = n || t.anchorKey, this.currentKey = r || t.currentKey) : (this.anchorKey = n, this.currentKey = r);
  }
};
function Ua(e) {
  const [t, n] = ln(e);
  return [() => t() ?? new Xe(), n];
}
function $i(e) {
  return ol() ? e.altKey : e.ctrlKey;
}
function _t(e) {
  return In() ? e.metaKey : e.ctrlKey;
}
function Co(e) {
  return new Xe(e);
}
function Va(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function Ga(e) {
  e = Y({
    selectionMode: "none",
    selectionBehavior: "toggle"
  }, e);
  const [t, n] = P(!1), [r, o] = P(), i = F(() => {
    const d = C(e.selectedKeys);
    return d != null ? Co(d) : d;
  }), l = F(() => {
    const d = C(e.defaultSelectedKeys);
    return d != null ? Co(d) : new Xe();
  }), [s, a] = Ua({
    value: i,
    defaultValue: l,
    onChange: (d) => {
      var y;
      return (y = e.onSelectionChange) == null ? void 0 : y.call(e, d);
    }
  }), [c, h] = P(C(e.selectionBehavior)), f = () => C(e.selectionMode), u = () => C(e.disallowEmptySelection) ?? !1, g = (d) => {
    (C(e.allowDuplicateSelectionEvents) || !Va(d, s())) && a(d);
  };
  return N(() => {
    const d = s();
    C(e.selectionBehavior) === "replace" && c() === "toggle" && typeof d == "object" && d.size === 0 && h("replace");
  }), N(() => {
    h(C(e.selectionBehavior) ?? "toggle");
  }), {
    selectionMode: f,
    disallowEmptySelection: u,
    selectionBehavior: c,
    setSelectionBehavior: h,
    isFocused: t,
    setFocused: n,
    focusedKey: r,
    setFocusedKey: o,
    selectedKeys: s,
    setSelectedKeys: g
  };
}
function Ha(e) {
  const [t, n] = P(""), [r, o] = P(-1);
  return {
    typeSelectHandlers: {
      onKeyDown: (l) => {
        var u;
        if (C(e.isDisabled))
          return;
        const s = C(e.keyboardDelegate), a = C(e.selectionManager);
        if (!s.getKeyForSearch)
          return;
        const c = ja(l.key);
        if (!c || l.ctrlKey || l.metaKey)
          return;
        c === " " && t().trim().length > 0 && (l.preventDefault(), l.stopPropagation());
        let h = n((g) => g += c), f = s.getKeyForSearch(h, a.focusedKey()) ?? s.getKeyForSearch(h);
        f == null && Wa(h) && (h = h[0], f = s.getKeyForSearch(h, a.focusedKey()) ?? s.getKeyForSearch(h)), f != null && (a.setFocusedKey(f), (u = e.onTypeSelect) == null || u.call(e, f)), clearTimeout(r()), o(window.setTimeout(() => n(""), 500));
      }
    }
  };
}
function ja(e) {
  return e.length === 1 || !/^[A-Z]/i.test(e) ? e : "";
}
function Wa(e) {
  return e.split("").every((t) => t === e[0]);
}
function Qa(e, t, n) {
  e = H({
    selectOnFocus: () => C(e.selectionManager).selectionBehavior() === "replace"
  }, e);
  const o = () => (n == null ? void 0 : n()) ?? t(), {
    direction: i
  } = qt();
  let l = {
    top: 0,
    left: 0
  };
  Gs(() => C(e.isVirtualized) ? void 0 : o(), "scroll", () => {
    const d = o();
    d && (l = {
      top: d.scrollTop,
      left: d.scrollLeft
    });
  });
  const {
    typeSelectHandlers: s
  } = Ha({
    isDisabled: () => C(e.disallowTypeAhead),
    keyboardDelegate: () => C(e.keyboardDelegate),
    selectionManager: () => C(e.selectionManager)
  }), a = (d) => {
    var M, B, _, R, G, z, Q, re;
    ie(d, s.onKeyDown), d.altKey && d.key === "Tab" && d.preventDefault();
    const y = t();
    if (!(y != null && y.contains(d.target)))
      return;
    const m = C(e.selectionManager), $ = C(e.selectOnFocus), x = (T) => {
      T != null && (m.setFocusedKey(T), d.shiftKey && m.selectionMode() === "multiple" ? m.extendSelection(T) : $ && !$i(d) && m.replaceSelection(T));
    }, b = C(e.keyboardDelegate), w = C(e.shouldFocusWrap), p = m.focusedKey();
    switch (d.key) {
      case "ArrowDown": {
        if (b.getKeyBelow) {
          d.preventDefault();
          let T;
          p != null ? T = b.getKeyBelow(p) : T = (M = b.getFirstKey) == null ? void 0 : M.call(b), T == null && w && (T = (B = b.getFirstKey) == null ? void 0 : B.call(b, p)), x(T);
        }
        break;
      }
      case "ArrowUp": {
        if (b.getKeyAbove) {
          d.preventDefault();
          let T;
          p != null ? T = b.getKeyAbove(p) : T = (_ = b.getLastKey) == null ? void 0 : _.call(b), T == null && w && (T = (R = b.getLastKey) == null ? void 0 : R.call(b, p)), x(T);
        }
        break;
      }
      case "ArrowLeft": {
        if (b.getKeyLeftOf) {
          d.preventDefault();
          const T = i() === "rtl";
          let W;
          p != null ? W = b.getKeyLeftOf(p) : W = T ? (G = b.getFirstKey) == null ? void 0 : G.call(b) : (z = b.getLastKey) == null ? void 0 : z.call(b), x(W);
        }
        break;
      }
      case "ArrowRight": {
        if (b.getKeyRightOf) {
          d.preventDefault();
          const T = i() === "rtl";
          let W;
          p != null ? W = b.getKeyRightOf(p) : W = T ? (Q = b.getLastKey) == null ? void 0 : Q.call(b) : (re = b.getFirstKey) == null ? void 0 : re.call(b), x(W);
        }
        break;
      }
      case "Home":
        if (b.getFirstKey) {
          d.preventDefault();
          const T = b.getFirstKey(p, _t(d));
          T != null && (m.setFocusedKey(T), _t(d) && d.shiftKey && m.selectionMode() === "multiple" ? m.extendSelection(T) : $ && m.replaceSelection(T));
        }
        break;
      case "End":
        if (b.getLastKey) {
          d.preventDefault();
          const T = b.getLastKey(p, _t(d));
          T != null && (m.setFocusedKey(T), _t(d) && d.shiftKey && m.selectionMode() === "multiple" ? m.extendSelection(T) : $ && m.replaceSelection(T));
        }
        break;
      case "PageDown":
        if (b.getKeyPageBelow && p != null) {
          d.preventDefault();
          const T = b.getKeyPageBelow(p);
          x(T);
        }
        break;
      case "PageUp":
        if (b.getKeyPageAbove && p != null) {
          d.preventDefault();
          const T = b.getKeyPageAbove(p);
          x(T);
        }
        break;
      case "a":
        _t(d) && m.selectionMode() === "multiple" && C(e.disallowSelectAll) !== !0 && (d.preventDefault(), m.selectAll());
        break;
      case "Escape":
        d.defaultPrevented || (d.preventDefault(), C(e.disallowEmptySelection) || m.clearSelection());
        break;
      case "Tab":
        if (!C(e.allowsTabNavigation)) {
          if (d.shiftKey)
            y.focus();
          else {
            const T = yl(y, {
              tabbable: !0
            });
            let W, X;
            do
              X = T.lastChild(), X && (W = X);
            while (X);
            W && !W.contains(document.activeElement) && $e(W);
          }
          break;
        }
    }
  }, c = (d) => {
    var x, b;
    const y = C(e.selectionManager), m = C(e.keyboardDelegate), $ = C(e.selectOnFocus);
    if (y.isFocused()) {
      d.currentTarget.contains(d.target) || y.setFocused(!1);
      return;
    }
    if (d.currentTarget.contains(d.target)) {
      if (y.setFocused(!0), y.focusedKey() == null) {
        const w = (M) => {
          M != null && (y.setFocusedKey(M), $ && y.replaceSelection(M));
        }, p = d.relatedTarget;
        p && d.currentTarget.compareDocumentPosition(p) & Node.DOCUMENT_POSITION_FOLLOWING ? w(y.lastSelectedKey() ?? ((x = m.getLastKey) == null ? void 0 : x.call(m))) : w(y.firstSelectedKey() ?? ((b = m.getFirstKey) == null ? void 0 : b.call(m)));
      } else if (!C(e.isVirtualized)) {
        const w = o();
        if (w) {
          w.scrollTop = l.top, w.scrollLeft = l.left;
          const p = w.querySelector(`[data-key="${y.focusedKey()}"]`);
          p && ($e(p), io(w, p));
        }
      }
    }
  }, h = (d) => {
    const y = C(e.selectionManager);
    d.currentTarget.contains(d.relatedTarget) || y.setFocused(!1);
  }, f = (d) => {
    o() === d.target && d.preventDefault();
  }, u = () => {
    var w, p;
    const d = C(e.autoFocus);
    if (!d)
      return;
    const y = C(e.selectionManager), m = C(e.keyboardDelegate);
    let $;
    d === "first" && ($ = (w = m.getFirstKey) == null ? void 0 : w.call(m)), d === "last" && ($ = (p = m.getLastKey) == null ? void 0 : p.call(m));
    const x = y.selectedKeys();
    x.size && ($ = x.values().next().value), y.setFocused(!0), y.setFocusedKey($);
    const b = t();
    b && $ == null && !C(e.shouldUseVirtualFocus) && $e(b);
  };
  return It(() => {
    e.deferAutoFocus ? setTimeout(u, 0) : u();
  }), N(Be([o, () => C(e.isVirtualized), () => C(e.selectionManager).focusedKey()], (d) => {
    var x;
    const [y, m, $] = d;
    if (m)
      $ && ((x = e.scrollToKey) == null || x.call(e, $));
    else if ($ && y) {
      const b = y.querySelector(`[data-key="${$}"]`);
      b && io(y, b);
    }
  })), {
    tabIndex: F(() => {
      if (!C(e.shouldUseVirtualFocus))
        return C(e.selectionManager).focusedKey() == null ? 0 : -1;
    }),
    onKeyDown: a,
    onMouseDown: f,
    onFocusIn: c,
    onFocusOut: h
  };
}
function pi(e, t) {
  const n = () => C(e.selectionManager), r = () => C(e.key), o = () => C(e.shouldUseVirtualFocus), i = (x) => {
    n().selectionMode() !== "none" && (n().selectionMode() === "single" ? n().isSelected(r()) && !n().disallowEmptySelection() ? n().toggleSelection(r()) : n().replaceSelection(r()) : x && x.shiftKey ? n().extendSelection(r()) : n().selectionBehavior() === "toggle" || _t(x) || "pointerType" in x && x.pointerType === "touch" ? n().toggleSelection(r()) : n().replaceSelection(r()));
  }, l = () => n().isSelected(r()), s = () => C(e.disabled) || n().isDisabled(r()), a = () => !s() && n().canSelectItem(r());
  let c = null;
  const h = (x) => {
    a() && (c = x.pointerType, x.pointerType === "mouse" && x.button === 0 && !C(e.shouldSelectOnPressUp) && i(x));
  }, f = (x) => {
    a() && x.pointerType === "mouse" && x.button === 0 && C(e.shouldSelectOnPressUp) && C(e.allowsDifferentPressOrigin) && i(x);
  }, u = (x) => {
    a() && (C(e.shouldSelectOnPressUp) && !C(e.allowsDifferentPressOrigin) || c !== "mouse") && i(x);
  }, g = (x) => {
    !a() || !["Enter", " "].includes(x.key) || ($i(x) ? n().toggleSelection(r()) : i(x));
  }, d = (x) => {
    s() && x.preventDefault();
  }, y = (x) => {
    const b = t();
    o() || s() || !b || x.target === b && n().setFocusedKey(r());
  }, m = F(() => {
    if (!(o() || s()))
      return r() === n().focusedKey() ? 0 : -1;
  }), $ = F(() => C(e.virtualized) ? void 0 : r());
  return N(Be([t, r, o, () => n().focusedKey(), () => n().isFocused()], ([x, b, w, p, M]) => {
    x && b === p && M && !w && document.activeElement !== x && (e.focus ? e.focus() : $e(x));
  })), {
    isSelected: l,
    isDisabled: s,
    allowsSelection: a,
    tabIndex: m,
    dataKey: $,
    onPointerDown: h,
    onPointerUp: f,
    onClick: u,
    onKeyDown: g,
    onMouseDown: d,
    onFocus: y
  };
}
var Ya = class {
  constructor(e, t) {
    this.collection = e, this.state = t;
  }
  /** The type of selection that is allowed in the collection. */
  selectionMode() {
    return this.state.selectionMode();
  }
  /** Whether the collection allows empty selection. */
  disallowEmptySelection() {
    return this.state.disallowEmptySelection();
  }
  /** The selection behavior for the collection. */
  selectionBehavior() {
    return this.state.selectionBehavior();
  }
  /** Sets the selection behavior for the collection. */
  setSelectionBehavior(e) {
    this.state.setSelectionBehavior(e);
  }
  /** Whether the collection is currently focused. */
  isFocused() {
    return this.state.isFocused();
  }
  /** Sets whether the collection is focused. */
  setFocused(e) {
    this.state.setFocused(e);
  }
  /** The current focused key in the collection. */
  focusedKey() {
    return this.state.focusedKey();
  }
  /** Sets the focused key. */
  setFocusedKey(e) {
    (e == null || this.collection().getItem(e)) && this.state.setFocusedKey(e);
  }
  /** The currently selected keys in the collection. */
  selectedKeys() {
    return this.state.selectedKeys();
  }
  /** Returns whether a key is selected. */
  isSelected(e) {
    if (this.state.selectionMode() === "none")
      return !1;
    const t = this.getKey(e);
    return t == null ? !1 : this.state.selectedKeys().has(t);
  }
  /** Whether the selection is empty. */
  isEmpty() {
    return this.state.selectedKeys().size === 0;
  }
  /** Whether all items in the collection are selected. */
  isSelectAll() {
    if (this.isEmpty())
      return !1;
    const e = this.state.selectedKeys();
    return this.getAllSelectableKeys().every((t) => e.has(t));
  }
  firstSelectedKey() {
    let e;
    for (const t of this.state.selectedKeys()) {
      const n = this.collection().getItem(t), r = (n == null ? void 0 : n.index) != null && (e == null ? void 0 : e.index) != null && n.index < e.index;
      (!e || r) && (e = n);
    }
    return e == null ? void 0 : e.key;
  }
  lastSelectedKey() {
    let e;
    for (const t of this.state.selectedKeys()) {
      const n = this.collection().getItem(t), r = (n == null ? void 0 : n.index) != null && (e == null ? void 0 : e.index) != null && n.index > e.index;
      (!e || r) && (e = n);
    }
    return e == null ? void 0 : e.key;
  }
  /** Extends the selection to the given key. */
  extendSelection(e) {
    if (this.selectionMode() === "none")
      return;
    if (this.selectionMode() === "single") {
      this.replaceSelection(e);
      return;
    }
    const t = this.getKey(e);
    if (t == null)
      return;
    const n = this.state.selectedKeys(), r = n.anchorKey || t, o = new Xe(n, r, t);
    for (const i of this.getKeyRange(r, n.currentKey || t))
      o.delete(i);
    for (const i of this.getKeyRange(t, r))
      this.canSelectItem(i) && o.add(i);
    this.state.setSelectedKeys(o);
  }
  getKeyRange(e, t) {
    const n = this.collection().getItem(e), r = this.collection().getItem(t);
    return n && r ? n.index != null && r.index != null && n.index <= r.index ? this.getKeyRangeInternal(e, t) : this.getKeyRangeInternal(t, e) : [];
  }
  getKeyRangeInternal(e, t) {
    const n = [];
    let r = e;
    for (; r != null; ) {
      const o = this.collection().getItem(r);
      if (o && o.type === "item" && n.push(r), r === t)
        return n;
      r = this.collection().getKeyAfter(r);
    }
    return [];
  }
  getKey(e) {
    const t = this.collection().getItem(e);
    return t ? !t || t.type !== "item" ? null : t.key : e;
  }
  /** Toggles whether the given key is selected. */
  toggleSelection(e) {
    if (this.selectionMode() === "none")
      return;
    if (this.selectionMode() === "single" && !this.isSelected(e)) {
      this.replaceSelection(e);
      return;
    }
    const t = this.getKey(e);
    if (t == null)
      return;
    const n = new Xe(this.state.selectedKeys());
    n.has(t) ? n.delete(t) : this.canSelectItem(t) && (n.add(t), n.anchorKey = t, n.currentKey = t), !(this.disallowEmptySelection() && n.size === 0) && this.state.setSelectedKeys(n);
  }
  /** Replaces the selection with only the given key. */
  replaceSelection(e) {
    if (this.selectionMode() === "none")
      return;
    const t = this.getKey(e);
    if (t == null)
      return;
    const n = this.canSelectItem(t) ? new Xe([t], t, t) : new Xe();
    this.state.setSelectedKeys(n);
  }
  /** Replaces the selection with the given keys. */
  setSelectedKeys(e) {
    if (this.selectionMode() === "none")
      return;
    const t = new Xe();
    for (const n of e) {
      const r = this.getKey(n);
      if (r != null && (t.add(r), this.selectionMode() === "single"))
        break;
    }
    this.state.setSelectedKeys(t);
  }
  /** Selects all items in the collection. */
  selectAll() {
    this.selectionMode() === "multiple" && this.state.setSelectedKeys(new Set(this.getAllSelectableKeys()));
  }
  /**
   * Removes all keys from the selection.
   */
  clearSelection() {
    const e = this.state.selectedKeys();
    !this.disallowEmptySelection() && e.size > 0 && this.state.setSelectedKeys(new Xe());
  }
  /**
   * Toggles between select all and an empty selection.
   */
  toggleSelectAll() {
    this.isSelectAll() ? this.clearSelection() : this.selectAll();
  }
  select(e, t) {
    this.selectionMode() !== "none" && (this.selectionMode() === "single" ? this.isSelected(e) && !this.disallowEmptySelection() ? this.toggleSelection(e) : this.replaceSelection(e) : this.selectionBehavior() === "toggle" || t && t.pointerType === "touch" ? this.toggleSelection(e) : this.replaceSelection(e));
  }
  /** Returns whether the current selection is equal to the given selection. */
  isSelectionEqual(e) {
    if (e === this.state.selectedKeys())
      return !0;
    const t = this.selectedKeys();
    if (e.size !== t.size)
      return !1;
    for (const n of e)
      if (!t.has(n))
        return !1;
    for (const n of t)
      if (!e.has(n))
        return !1;
    return !0;
  }
  canSelectItem(e) {
    if (this.state.selectionMode() === "none")
      return !1;
    const t = this.collection().getItem(e);
    return t != null && !t.disabled;
  }
  isDisabled(e) {
    const t = this.collection().getItem(e);
    return !t || t.disabled;
  }
  getAllSelectableKeys() {
    const e = [];
    return ((n) => {
      for (; n != null; ) {
        if (this.canSelectItem(n)) {
          const r = this.collection().getItem(n);
          if (!r)
            continue;
          r.type === "item" && e.push(n);
        }
        n = this.collection().getKeyAfter(n);
      }
    })(this.collection().getFirstKey()), e;
  }
}, So = class {
  constructor(e) {
    Nr(this, "keyMap", /* @__PURE__ */ new Map());
    this.iterable = e;
    for (const r of e)
      this.keyMap.set(r.key, r);
    if (this.keyMap.size === 0)
      return;
    let t, n = 0;
    for (const [r, o] of this.keyMap)
      t ? (t.nextKey = r, o.prevKey = t.key) : (this.firstKey = r, o.prevKey = void 0), o.type === "item" && (o.index = n++), t = o, t.nextKey = void 0;
    this.lastKey = t.key;
  }
  *[Symbol.iterator]() {
    yield* this.iterable;
  }
  getSize() {
    return this.keyMap.size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(e) {
    var t;
    return (t = this.keyMap.get(e)) == null ? void 0 : t.prevKey;
  }
  getKeyAfter(e) {
    var t;
    return (t = this.keyMap.get(e)) == null ? void 0 : t.nextKey;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    return this.lastKey;
  }
  getItem(e) {
    return this.keyMap.get(e);
  }
  at(e) {
    const t = [...this.getKeys()];
    return this.getItem(t[e]);
  }
};
function Xa(e) {
  const t = Ga(e), r = sa({
    dataSource: () => C(e.dataSource),
    getKey: () => C(e.getKey),
    getTextValue: () => C(e.getTextValue),
    getDisabled: () => C(e.getDisabled),
    getSectionChildren: () => C(e.getSectionChildren),
    factory: (i) => e.filter ? new So(e.filter(i)) : new So(i)
  }, [() => e.filter]), o = new Ya(r, t);
  return hs(() => {
    const i = t.focusedKey();
    i != null && !r().getItem(i) && t.setFocusedKey(void 0);
  }), {
    collection: r,
    selectionManager: () => o
  };
}
var Za = class {
  constructor(e, t, n) {
    this.collection = e, this.ref = t, this.collator = n;
  }
  getKeyBelow(e) {
    let t = this.collection().getKeyAfter(e);
    for (; t != null; ) {
      const n = this.collection().getItem(t);
      if (n && n.type === "item" && !n.disabled)
        return t;
      t = this.collection().getKeyAfter(t);
    }
  }
  getKeyAbove(e) {
    let t = this.collection().getKeyBefore(e);
    for (; t != null; ) {
      const n = this.collection().getItem(t);
      if (n && n.type === "item" && !n.disabled)
        return t;
      t = this.collection().getKeyBefore(t);
    }
  }
  getFirstKey() {
    let e = this.collection().getFirstKey();
    for (; e != null; ) {
      const t = this.collection().getItem(e);
      if (t && t.type === "item" && !t.disabled)
        return e;
      e = this.collection().getKeyAfter(e);
    }
  }
  getLastKey() {
    let e = this.collection().getLastKey();
    for (; e != null; ) {
      const t = this.collection().getItem(e);
      if (t && t.type === "item" && !t.disabled)
        return e;
      e = this.collection().getKeyBefore(e);
    }
  }
  getItem(e) {
    var t, n;
    return ((n = (t = this.ref) == null ? void 0 : t.call(this)) == null ? void 0 : n.querySelector(`[data-key="${e}"]`)) ?? null;
  }
  // TODO: not working correctly
  getKeyPageAbove(e) {
    var i;
    const t = (i = this.ref) == null ? void 0 : i.call(this);
    let n = this.getItem(e);
    if (!t || !n)
      return;
    const r = Math.max(0, n.offsetTop + n.offsetHeight - t.offsetHeight);
    let o = e;
    for (; o && n && n.offsetTop > r; )
      o = this.getKeyAbove(o), n = o != null ? this.getItem(o) : null;
    return o;
  }
  // TODO: not working correctly
  getKeyPageBelow(e) {
    var i;
    const t = (i = this.ref) == null ? void 0 : i.call(this);
    let n = this.getItem(e);
    if (!t || !n)
      return;
    const r = Math.min(t.scrollHeight, n.offsetTop - n.offsetHeight + t.offsetHeight);
    let o = e;
    for (; o && n && n.offsetTop < r; )
      o = this.getKeyBelow(o), n = o != null ? this.getItem(o) : null;
    return o;
  }
  getKeyForSearch(e, t) {
    var o;
    const n = (o = this.collator) == null ? void 0 : o.call(this);
    if (!n)
      return;
    let r = t != null ? this.getKeyBelow(t) : this.getFirstKey();
    for (; r != null; ) {
      const i = this.collection().getItem(r);
      if (i) {
        const l = i.textValue.slice(0, e.length);
        if (i.textValue && n.compare(l, e) === 0)
          return r;
      }
      r = this.getKeyBelow(r);
    }
  }
};
function Ja(e, t, n) {
  const r = Na({
    usage: "search",
    sensitivity: "base"
  }), o = F(() => {
    const i = C(e.keyboardDelegate);
    return i || new Za(e.collection, t, r);
  });
  return Qa({
    selectionManager: () => C(e.selectionManager),
    keyboardDelegate: o,
    autoFocus: () => C(e.autoFocus),
    deferAutoFocus: () => C(e.deferAutoFocus),
    shouldFocusWrap: () => C(e.shouldFocusWrap),
    disallowEmptySelection: () => C(e.disallowEmptySelection),
    selectOnFocus: () => C(e.selectOnFocus),
    disallowTypeAhead: () => C(e.disallowTypeAhead),
    shouldUseVirtualFocus: () => C(e.shouldUseVirtualFocus),
    allowsTabNavigation: () => C(e.allowsTabNavigation),
    isVirtualized: () => C(e.isVirtualized),
    scrollToKey: (i) => {
      var l;
      return (l = C(e.scrollToKey)) == null ? void 0 : l(i);
    }
  }, t, n);
}
wl({
  toasts: []
});
var ec = ["button", "color", "file", "image", "reset", "submit"];
function tc(e) {
  const t = e.tagName.toLowerCase();
  return t === "button" ? !0 : t === "input" && e.type ? ec.indexOf(e.type) !== -1 : !1;
}
function nc(e) {
  let t;
  e = Y({
    type: "button"
  }, e);
  const [n, r] = Z(e, ["ref", "type", "disabled"]), o = br(() => t, () => "button"), i = F(() => {
    const a = o();
    return a == null ? !1 : tc({
      tagName: a,
      type: n.type
    });
  }), l = F(() => o() === "input"), s = F(() => o() === "a" && (t == null ? void 0 : t.getAttribute("href")) != null);
  return v(le, H({
    as: "button",
    ref(a) {
      const c = ke((h) => t = h, n.ref);
      typeof c == "function" && c(a);
    },
    get type() {
      return i() || l() ? n.type : void 0;
    },
    get role() {
      return !i() && !s() ? "button" : void 0;
    },
    get tabIndex() {
      return !i() && !s() && !n.disabled ? 0 : void 0;
    },
    get disabled() {
      return i() || l() ? n.disabled : void 0;
    },
    get "aria-disabled"() {
      return !i() && !l() && n.disabled ? !0 : void 0;
    },
    get "data-disabled"() {
      return n.disabled ? "" : void 0;
    }
  }, r));
}
var wi = Ce();
function Ci() {
  return Se(wi);
}
function rc() {
  const e = Ci();
  if (e === void 0)
    throw new Error("[kobalte]: `useDomCollectionContext` must be used within a `DomCollectionProvider` component");
  return e;
}
function Si(e, t) {
  return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
function oc(e, t) {
  var o;
  const n = t.ref();
  if (!n)
    return -1;
  let r = e.length;
  if (!r)
    return -1;
  for (; r--; ) {
    const i = (o = e[r]) == null ? void 0 : o.ref();
    if (i && Si(i, n))
      return r + 1;
  }
  return 0;
}
function ic(e) {
  const t = e.map((r, o) => [o, r]);
  let n = !1;
  return t.sort(([r, o], [i, l]) => {
    const s = o.ref(), a = l.ref();
    return s === a || !s || !a ? 0 : Si(s, a) ? (r > i && (n = !0), -1) : (r < i && (n = !0), 1);
  }), n ? t.map(([r, o]) => o) : e;
}
function ki(e, t) {
  const n = ic(e);
  e !== n && t(n);
}
function sc(e) {
  var o, i;
  const t = e[0], n = (o = e[e.length - 1]) == null ? void 0 : o.ref();
  let r = (i = t == null ? void 0 : t.ref()) == null ? void 0 : i.parentElement;
  for (; r; ) {
    if (n && r.contains(n))
      return r;
    r = r.parentElement;
  }
  return Ke(r).body;
}
function lc(e, t) {
  N(() => {
    const n = setTimeout(() => {
      ki(e(), t);
    });
    V(() => clearTimeout(n));
  });
}
function ac(e, t) {
  if (typeof IntersectionObserver != "function") {
    lc(e, t);
    return;
  }
  let n = [];
  N(() => {
    const r = () => {
      const l = !!n.length;
      n = e(), l && ki(e(), t);
    }, o = sc(e()), i = new IntersectionObserver(r, {
      root: o
    });
    e().forEach((l) => {
      const s = l.ref();
      s && i.observe(s);
    }), V(() => i.disconnect());
  });
}
function cc(e = {}) {
  const [t, n] = la({
    value: () => C(e.items),
    onChange: (i) => {
      var l;
      return (l = e.onItemsChange) == null ? void 0 : l.call(e, i);
    }
  });
  ac(t, n);
  const r = (i) => (n((l) => {
    const s = oc(l, i);
    return Zs(l, i, s);
  }), () => {
    n((l) => {
      const s = l.filter((a) => a.ref() !== i.ref());
      return l.length === s.length ? l : s;
    });
  });
  return {
    DomCollectionProvider: (i) => v(wi.Provider, {
      value: {
        registerItem: r
      },
      get children() {
        return i.children;
      }
    })
  };
}
function uc(e) {
  const t = rc();
  e = Y({
    shouldRegisterItem: !0
  }, e), N(() => {
    if (!e.shouldRegisterItem)
      return;
    const n = t.registerItem(e.getItem());
    V(n);
  });
}
var Ei = Ce();
function dc() {
  return Se(Ei);
}
function fc(e) {
  let t;
  const n = dc(), [r, o] = Z(e, ["ref", "disableOutsidePointerEvents", "excludedElements", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside", "onDismiss", "bypassTopMostLayerCheck"]), i = /* @__PURE__ */ new Set([]), l = (f) => {
    i.add(f);
    const u = n == null ? void 0 : n.registerNestedLayer(f);
    return () => {
      i.delete(f), u == null || u();
    };
  };
  Sa({
    shouldExcludeElement: (f) => {
      var u;
      return t ? ((u = r.excludedElements) == null ? void 0 : u.some((g) => Me(g(), f))) || [...i].some((g) => Me(g, f)) : !1;
    },
    onPointerDownOutside: (f) => {
      var u, g, d;
      !t || _e.isBelowPointerBlockingLayer(t) || !r.bypassTopMostLayerCheck && !_e.isTopMostLayer(t) || ((u = r.onPointerDownOutside) == null || u.call(r, f), (g = r.onInteractOutside) == null || g.call(r, f), f.defaultPrevented || (d = r.onDismiss) == null || d.call(r));
    },
    onFocusOutside: (f) => {
      var u, g, d;
      (u = r.onFocusOutside) == null || u.call(r, f), (g = r.onInteractOutside) == null || g.call(r, f), f.defaultPrevented || (d = r.onDismiss) == null || d.call(r);
    }
  }, () => t), aa({
    ownerDocument: () => Ke(t),
    onEscapeKeyDown: (f) => {
      var u;
      !t || !_e.isTopMostLayer(t) || ((u = r.onEscapeKeyDown) == null || u.call(r, f), !f.defaultPrevented && r.onDismiss && (f.preventDefault(), r.onDismiss()));
    }
  }), It(() => {
    if (!t)
      return;
    _e.addLayer({
      node: t,
      isPointerBlocking: r.disableOutsidePointerEvents,
      dismiss: r.onDismiss
    });
    const f = n == null ? void 0 : n.registerNestedLayer(t);
    _e.assignPointerEventToLayers(), _e.disableBodyPointerEvents(t), V(() => {
      t && (_e.removeLayer(t), f == null || f(), _e.assignPointerEventToLayers(), _e.restoreBodyPointerEvents(t));
    });
  }), N(Be([() => t, () => r.disableOutsidePointerEvents], ([f, u]) => {
    if (!f)
      return;
    const g = _e.find(f);
    g && g.isPointerBlocking !== u && (g.isPointerBlocking = u, _e.assignPointerEventToLayers()), u && _e.disableBodyPointerEvents(f), V(() => {
      _e.restoreBodyPointerEvents(f);
    });
  }, {
    defer: !0
  }));
  const h = {
    registerNestedLayer: l
  };
  return v(Ei.Provider, {
    value: h,
    get children() {
      return v(le, H({
        as: "div",
        ref(f) {
          const u = ke((g) => t = g, r.ref);
          typeof u == "function" && u(f);
        }
      }, o));
    }
  });
}
var _i = Ce();
function Ai() {
  const e = Se(_i);
  if (e === void 0)
    throw new Error("[kobalte]: `usePopperContext` must be used within a `Popper` component");
  return e;
}
var gc = /* @__PURE__ */ O('<svg display="block" viewBox="0 0 30 30"><g><path fill="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path><path stroke="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z">'), rr = 30, ko = rr / 2, hc = {
  top: 180,
  right: -90,
  bottom: 0,
  left: 90
};
function yc(e) {
  const t = Ai();
  e = Y({
    size: rr
  }, e);
  const [n, r] = Z(e, ["ref", "style", "children", "size"]), o = () => t.currentPlacement().split("-")[0], i = vc(t.contentRef), l = () => {
    var f;
    return ((f = i()) == null ? void 0 : f.getPropertyValue("background-color")) || "none";
  }, s = () => {
    var f;
    return ((f = i()) == null ? void 0 : f.getPropertyValue(`border-${o()}-color`)) || "none";
  }, a = () => {
    var f;
    return ((f = i()) == null ? void 0 : f.getPropertyValue(`border-${o()}-width`)) || "0px";
  }, c = () => parseInt(a()) * 2 * (rr / n.size), h = () => `rotate(${hc[o()]} ${ko} ${ko})`;
  return v(le, H({
    as: "div",
    ref(f) {
      const u = ke(t.setArrowRef, n.ref);
      typeof u == "function" && u(f);
    },
    "aria-hidden": "true",
    get style() {
      return {
        // server side rendering
        position: "absolute",
        "font-size": `${n.size}px`,
        width: "1em",
        height: "1em",
        "pointer-events": "none",
        fill: l(),
        stroke: s(),
        "stroke-width": c(),
        ...n.style
      };
    }
  }, r, {
    get children() {
      const f = gc(), u = f.firstChild;
      return u.firstChild.nextSibling, U(() => D(u, "transform", h())), f;
    }
  }));
}
function vc(e) {
  const [t, n] = P();
  return N(() => {
    const r = e();
    r && n(Vo(r).getComputedStyle(r));
  }), t;
}
function mc(e) {
  const t = Ai(), [n, r] = Z(e, ["ref", "style"]);
  return v(le, H({
    as: "div",
    ref(o) {
      const i = ke(t.setPositionerRef, n.ref);
      typeof i == "function" && i(o);
    },
    "data-popper-positioner": "",
    get style() {
      return {
        position: "absolute",
        top: 0,
        left: 0,
        "min-width": "max-content",
        ...n.style
      };
    }
  }, r));
}
function Eo(e) {
  const {
    x: t = 0,
    y: n = 0,
    width: r = 0,
    height: o = 0
  } = e ?? {};
  if (typeof DOMRect == "function")
    return new DOMRect(t, n, r, o);
  const i = {
    x: t,
    y: n,
    width: r,
    height: o,
    top: n,
    right: t + r,
    bottom: n + o,
    left: t
  };
  return {
    ...i,
    toJSON: () => i
  };
}
function bc(e, t) {
  return {
    contextElement: e,
    getBoundingClientRect: () => {
      const r = t(e);
      return r ? Eo(r) : e ? e.getBoundingClientRect() : Eo();
    }
  };
}
function xc(e) {
  return /^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(e);
}
var $c = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
function pc(e, t) {
  const [n, r] = e.split("-"), o = $c[n];
  return r ? n === "left" || n === "right" ? `${o} ${r === "start" ? "top" : "bottom"}` : r === "start" ? `${o} ${t === "rtl" ? "right" : "left"}` : `${o} ${t === "rtl" ? "left" : "right"}` : `${o} center`;
}
function wc(e) {
  e = Y({
    getAnchorRect: (f) => f == null ? void 0 : f.getBoundingClientRect(),
    placement: "bottom",
    gutter: 0,
    shift: 0,
    flip: !0,
    slide: !0,
    overlap: !1,
    sameWidth: !1,
    fitViewport: !1,
    hideWhenDetached: !1,
    detachedPadding: 0,
    arrowPadding: 4,
    overflowPadding: 8
  }, e);
  const [t, n] = P(), [r, o] = P(), [i, l] = P(e.placement), s = () => bc(e.anchorRef(), e.getAnchorRect), {
    direction: a
  } = qt();
  async function c() {
    var p, M;
    const f = s(), u = t(), g = r();
    if (!f || !u)
      return;
    const d = ((g == null ? void 0 : g.clientHeight) || 0) / 2, y = typeof e.gutter == "number" ? e.gutter + d : e.gutter ?? d;
    u.style.setProperty("--kb-popper-content-overflow-padding", `${e.overflowPadding}px`), f.getBoundingClientRect();
    const m = [
      // https://floating-ui.com/docs/offset
      Bl(({
        placement: B
      }) => {
        const _ = !!B.split("-")[1];
        return {
          mainAxis: y,
          crossAxis: _ ? void 0 : e.shift,
          alignmentAxis: e.shift
        };
      })
    ];
    if (e.flip !== !1) {
      const B = typeof e.flip == "string" ? e.flip.split(" ") : void 0;
      if (B !== void 0 && !B.every(xc))
        throw new Error("`flip` expects a spaced-delimited list of placements");
      m.push(Tl({
        padding: e.overflowPadding,
        fallbackPlacements: B
      }));
    }
    (e.slide || e.overlap) && m.push(Kl({
      mainAxis: e.slide,
      crossAxis: e.overlap,
      padding: e.overflowPadding
    })), m.push(Rl({
      padding: e.overflowPadding,
      apply({
        availableWidth: B,
        availableHeight: _,
        rects: R
      }) {
        const G = Math.round(R.reference.width);
        B = Math.floor(B), _ = Math.floor(_), u.style.setProperty("--kb-popper-anchor-width", `${G}px`), u.style.setProperty("--kb-popper-content-available-width", `${B}px`), u.style.setProperty("--kb-popper-content-available-height", `${_}px`), e.sameWidth && (u.style.width = `${G}px`), e.fitViewport && (u.style.maxWidth = `${B}px`, u.style.maxHeight = `${_}px`);
      }
    })), e.hideWhenDetached && m.push(Pl({
      padding: e.detachedPadding
    })), g && m.push(Ol({
      element: g,
      padding: e.arrowPadding
    }));
    const $ = await ia(f, u, {
      placement: e.placement,
      strategy: "absolute",
      middleware: m,
      platform: {
        ...ui,
        isRTL: () => a() === "rtl"
      }
    });
    if (l($.placement), (p = e.onCurrentPlacementChange) == null || p.call(e, $.placement), !u)
      return;
    u.style.setProperty("--kb-popper-content-transform-origin", pc($.placement, a()));
    const x = Math.round($.x), b = Math.round($.y);
    let w;
    if (e.hideWhenDetached && (w = (M = $.middlewareData.hide) != null && M.referenceHidden ? "hidden" : "visible"), Object.assign(u.style, {
      top: "0",
      left: "0",
      transform: `translate3d(${x}px, ${b}px, 0)`,
      visibility: w
    }), g && $.middlewareData.arrow) {
      const {
        x: B,
        y: _
      } = $.middlewareData.arrow, R = $.placement.split("-")[0];
      Object.assign(g.style, {
        left: B != null ? `${B}px` : "",
        top: _ != null ? `${_}px` : "",
        [R]: "100%"
      });
    }
  }
  N(() => {
    const f = s(), u = t();
    if (!f || !u)
      return;
    const g = oa(f, u, c, {
      // JSDOM doesn't support ResizeObserver
      elementResize: typeof ResizeObserver == "function"
    });
    V(g);
  }), N(() => {
    const f = t(), u = e.contentRef();
    !f || !u || queueMicrotask(() => {
      f.style.zIndex = getComputedStyle(u).zIndex;
    });
  });
  const h = {
    currentPlacement: i,
    contentRef: () => e.contentRef(),
    setPositionerRef: n,
    setArrowRef: o
  };
  return v(_i.Provider, {
    value: h,
    get children() {
      return e.children;
    }
  });
}
var Di = Ce();
function Fi() {
  return Se(Di);
}
function rt() {
  const e = Fi();
  if (e === void 0)
    throw new Error("[kobalte]: `useMenuContext` must be used within a `Menu` component");
  return e;
}
var Li = Ce();
function ot() {
  const e = Se(Li);
  if (e === void 0)
    throw new Error("[kobalte]: `useMenuRootContext` must be used within a `MenuRoot` component");
  return e;
}
function Cc(e, t, n) {
  const r = e.split("-")[0], o = n.getBoundingClientRect(), i = [], l = t.clientX, s = t.clientY;
  switch (r) {
    case "top":
      i.push([l, s + 5]), i.push([o.left, o.bottom]), i.push([o.left, o.top]), i.push([o.right, o.top]), i.push([o.right, o.bottom]);
      break;
    case "right":
      i.push([l - 5, s]), i.push([o.left, o.top]), i.push([o.right, o.top]), i.push([o.right, o.bottom]), i.push([o.left, o.bottom]);
      break;
    case "bottom":
      i.push([l, s - 5]), i.push([o.right, o.top]), i.push([o.right, o.bottom]), i.push([o.left, o.bottom]), i.push([o.left, o.top]);
      break;
    case "left":
      i.push([l + 5, s]), i.push([o.right, o.bottom]), i.push([o.left, o.bottom]), i.push([o.left, o.top]), i.push([o.right, o.top]);
      break;
  }
  return i;
}
function Sc(e, t) {
  return t ? ml([e.clientX, e.clientY], t) : !1;
}
function Ii(e) {
  const t = ot(), n = Ci(), r = Fi();
  e = Y({
    placement: "bottom-start"
  }, e);
  const [o, i] = Z(e, ["open", "defaultOpen", "onOpenChange"]);
  let l = 0, s = null, a = "right";
  const [c, h] = P(), [f, u] = P(), [g, d] = P(), [y, m] = P(), [$, x] = P(!0), [b, w] = P(i.placement), [p, M] = P([]), [B, _] = P([]), {
    DomCollectionProvider: R
  } = cc({
    items: B,
    onItemsChange: _
  }), G = fi({
    open: () => o.open,
    defaultOpen: () => o.defaultOpen,
    onOpenChange: (j) => {
      var A;
      return (A = o.onOpenChange) == null ? void 0 : A.call(o, j);
    }
  }), z = vi(() => t.forceMount() || G.isOpen()), Q = Xa({
    selectionMode: "none",
    dataSource: B
  }), re = (j) => {
    x(j), G.open();
  }, T = (j = !1) => {
    G.close(), j && r && r.close(!0);
  }, W = (j) => {
    x(j), G.toggle();
  }, X = () => {
    const j = y();
    j && ($e(j), Q.selectionManager().setFocused(!0), Q.selectionManager().setFocusedKey(void 0));
  }, ee = (j) => {
    M((te) => [...te, j]);
    const A = r == null ? void 0 : r.registerNestedMenu(j);
    return () => {
      M((te) => Yn(te, j)), A == null || A();
    };
  }, oe = (j) => a === (s == null ? void 0 : s.side) && Sc(j, s == null ? void 0 : s.area), ue = (j) => {
    oe(j) && j.preventDefault();
  }, be = (j) => {
    oe(j) || X();
  }, he = (j) => {
    oe(j) && j.preventDefault();
  };
  wa({
    isDisabled: () => !(r == null && G.isOpen() && t.isModal()),
    targets: () => [y(), ...p()].filter(Boolean)
  }), N(() => {
    const j = y();
    if (!j || !r)
      return;
    const A = r.registerNestedMenu(j);
    V(() => {
      A();
    });
  });
  const ae = {
    dataset: F(() => ({
      "data-expanded": G.isOpen() ? "" : void 0,
      "data-closed": G.isOpen() ? void 0 : ""
    })),
    isOpen: G.isOpen,
    contentPresence: z,
    currentPlacement: b,
    pointerGraceTimeoutId: () => l,
    autoFocus: $,
    listState: () => Q,
    parentMenuContext: () => r,
    triggerRef: g,
    contentRef: y,
    triggerId: c,
    contentId: f,
    setTriggerRef: d,
    setContentRef: m,
    open: re,
    close: T,
    toggle: W,
    focusContent: X,
    onItemEnter: ue,
    onItemLeave: be,
    onTriggerLeave: he,
    setPointerDir: (j) => a = j,
    setPointerGraceTimeoutId: (j) => l = j,
    setPointerGraceIntent: (j) => s = j,
    registerNestedMenu: ee,
    registerItemToParentDomCollection: n == null ? void 0 : n.registerItem,
    registerTriggerId: qe(h),
    registerContentId: qe(u)
  };
  return v(R, {
    get children() {
      return v(Di.Provider, {
        value: ae,
        get children() {
          return v(wc, H({
            anchorRef: g,
            contentRef: y,
            onCurrentPlacementChange: w
          }, i));
        }
      });
    }
  });
}
var Mi = Ce();
function xr() {
  const e = Se(Mi);
  if (e === void 0)
    throw new Error("[kobalte]: `useMenuItemContext` must be used within a `Menu.Item` component");
  return e;
}
function $r(e) {
  let t;
  const n = ot(), r = rt();
  e = Y({
    id: n.generateId(`item-${Re()}`)
  }, e);
  const [o, i] = Z(e, ["ref", "textValue", "disabled", "closeOnSelect", "checked", "indeterminate", "onSelect", "onPointerMove", "onPointerLeave", "onPointerDown", "onPointerUp", "onClick", "onKeyDown", "onMouseDown", "onFocus"]), [l, s] = P(), [a, c] = P(), [h, f] = P(), u = () => r.listState().selectionManager(), g = () => i.id, d = () => u().focusedKey() === g(), y = () => {
    var _;
    (_ = o.onSelect) == null || _.call(o), o.closeOnSelect && r.close(!0);
  };
  uc({
    getItem: () => {
      var _;
      return {
        ref: () => t,
        type: "item",
        key: g(),
        textValue: o.textValue ?? ((_ = h()) == null ? void 0 : _.textContent) ?? (t == null ? void 0 : t.textContent) ?? "",
        disabled: o.disabled ?? !1
      };
    }
  });
  const m = pi({
    key: g,
    selectionManager: u,
    shouldSelectOnPressUp: !0,
    allowsDifferentPressOrigin: !0,
    disabled: () => o.disabled
  }, () => t), $ = (_) => {
    ie(_, o.onPointerMove), _.pointerType === "mouse" && (o.disabled ? r.onItemLeave(_) : (r.onItemEnter(_), _.defaultPrevented || ($e(_.currentTarget), r.listState().selectionManager().setFocused(!0), r.listState().selectionManager().setFocusedKey(g()))));
  }, x = (_) => {
    ie(_, o.onPointerLeave), _.pointerType === "mouse" && r.onItemLeave(_);
  }, b = (_) => {
    ie(_, o.onPointerUp), !o.disabled && _.button === 0 && y();
  }, w = (_) => {
    if (ie(_, o.onKeyDown), !_.repeat && !o.disabled)
      switch (_.key) {
        case "Enter":
        case " ":
          y();
          break;
      }
  }, p = F(() => {
    if (o.indeterminate)
      return "mixed";
    if (o.checked != null)
      return o.checked;
  }), M = F(() => ({
    "data-indeterminate": o.indeterminate ? "" : void 0,
    "data-checked": o.checked && !o.indeterminate ? "" : void 0,
    "data-disabled": o.disabled ? "" : void 0,
    "data-highlighted": d() ? "" : void 0
  })), B = {
    isChecked: () => o.checked,
    dataset: M,
    setLabelRef: f,
    generateId: rn(() => i.id),
    registerLabel: qe(s),
    registerDescription: qe(c)
  };
  return v(Mi.Provider, {
    value: B,
    get children() {
      return v(le, H({
        as: "div",
        ref(_) {
          const R = ke((G) => t = G, o.ref);
          typeof R == "function" && R(_);
        },
        get tabIndex() {
          return m.tabIndex();
        },
        get "aria-checked"() {
          return p();
        },
        get "aria-disabled"() {
          return o.disabled;
        },
        get "aria-labelledby"() {
          return l();
        },
        get "aria-describedby"() {
          return a();
        },
        get "data-key"() {
          return m.dataKey();
        },
        get onPointerDown() {
          return ye([o.onPointerDown, m.onPointerDown]);
        },
        get onPointerUp() {
          return ye([b, m.onPointerUp]);
        },
        get onClick() {
          return ye([o.onClick, m.onClick]);
        },
        get onKeyDown() {
          return ye([w, m.onKeyDown]);
        },
        get onMouseDown() {
          return ye([o.onMouseDown, m.onMouseDown]);
        },
        get onFocus() {
          return ye([o.onFocus, m.onFocus]);
        },
        onPointerMove: $,
        onPointerLeave: x
      }, M, i));
    }
  });
}
function kc(e) {
  e = Y({
    closeOnSelect: !1
  }, e);
  const [t, n] = Z(e, ["checked", "defaultChecked", "onChange", "onSelect"]), r = Da({
    isSelected: () => t.checked,
    defaultIsSelected: () => t.defaultChecked,
    onSelectedChange: (i) => {
      var l;
      return (l = t.onChange) == null ? void 0 : l.call(t, i);
    },
    isDisabled: () => n.disabled
  });
  return v($r, H({
    role: "menuitemcheckbox",
    get checked() {
      return r.isSelected();
    },
    onSelect: () => {
      var i;
      (i = t.onSelect) == null || i.call(t), r.toggle();
    }
  }, n));
}
function qi(e) {
  let t;
  const n = ot(), r = rt();
  e = Y({
    id: n.generateId(`content-${Re()}`)
  }, e);
  const [o, i] = Z(e, ["ref", "id", "style", "onOpenAutoFocus", "onCloseAutoFocus", "onEscapeKeyDown", "onFocusOutside", "onPointerEnter", "onPointerMove", "onKeyDown", "onMouseDown", "onFocusIn", "onFocusOut"]);
  let l = 0;
  const s = () => r.parentMenuContext() == null && n.isModal(), a = Ja({
    selectionManager: r.listState().selectionManager,
    collection: r.listState().collection,
    autoFocus: r.autoFocus,
    deferAutoFocus: !0,
    // ensure all menu items are mounted and collection is not empty before trying to autofocus.
    shouldFocusWrap: !0,
    disallowTypeAhead: () => !r.listState().selectionManager().isFocused()
  }, () => t);
  ma({
    trapFocus: () => s() && r.isOpen(),
    onMountAutoFocus: o.onOpenAutoFocus,
    onUnmountAutoFocus: o.onCloseAutoFocus
  }, () => t);
  const c = (d) => {
    Me(d.currentTarget, d.target) && d.key === "Tab" && r.isOpen() && d.preventDefault();
  }, h = (d) => {
    var y;
    (y = o.onEscapeKeyDown) == null || y.call(o, d), r.close(!0);
  }, f = (d) => {
    var y;
    (y = o.onFocusOutside) == null || y.call(o, d), n.isModal() && d.preventDefault();
  }, u = (d) => {
    var y, m;
    ie(d, o.onPointerEnter), r.isOpen() && ((y = r.parentMenuContext()) == null || y.listState().selectionManager().setFocused(!1), (m = r.parentMenuContext()) == null || m.listState().selectionManager().setFocusedKey(void 0));
  }, g = (d) => {
    if (ie(d, o.onPointerMove), d.pointerType !== "mouse")
      return;
    const y = d.target, m = l !== d.clientX;
    Me(d.currentTarget, y) && m && (r.setPointerDir(d.clientX > l ? "right" : "left"), l = d.clientX);
  };
  return N(() => V(r.registerContentId(o.id))), v(K, {
    get when() {
      return r.contentPresence.isPresent();
    },
    get children() {
      return v(mc, {
        get children() {
          return v(fc, H({
            ref(d) {
              const y = ke((m) => {
                r.setContentRef(m), r.contentPresence.setRef(m), t = m;
              }, o.ref);
              typeof y == "function" && y(d);
            },
            role: "menu",
            get id() {
              return o.id;
            },
            get tabIndex() {
              return a.tabIndex();
            },
            get disableOutsidePointerEvents() {
              return F(() => !!s())() && r.isOpen();
            },
            get excludedElements() {
              return [r.triggerRef];
            },
            bypassTopMostLayerCheck: !0,
            get style() {
              return {
                "--kb-menu-content-transform-origin": "var(--kb-popper-content-transform-origin)",
                position: "relative",
                ...o.style
              };
            },
            get "aria-labelledby"() {
              return r.triggerId();
            },
            onEscapeKeyDown: h,
            onFocusOutside: f,
            get onDismiss() {
              return r.close;
            },
            get onKeyDown() {
              return ye([o.onKeyDown, a.onKeyDown, c]);
            },
            get onMouseDown() {
              return ye([o.onMouseDown, a.onMouseDown]);
            },
            get onFocusIn() {
              return ye([o.onFocusIn, a.onFocusIn]);
            },
            get onFocusOut() {
              return ye([o.onFocusOut, a.onFocusOut]);
            },
            onPointerEnter: u,
            onPointerMove: g
          }, () => r.dataset(), i));
        }
      });
    }
  });
}
function Ec(e) {
  let t;
  const n = ot(), r = rt(), [o, i] = Z(e, ["ref"]);
  return Aa({
    ownerRef: () => t,
    isDisabled: () => !(r.isOpen() && (n.isModal() || n.preventScroll()))
  }), v(qi, H({
    ref(l) {
      const s = ke((a) => t = a, o.ref);
      typeof s == "function" && s(l);
    }
  }, i));
}
var Oi = Ce();
function _c() {
  const e = Se(Oi);
  if (e === void 0)
    throw new Error("[kobalte]: `useMenuGroupContext` must be used within a `Menu.Group` component");
  return e;
}
function Ti(e) {
  const t = ot();
  e = Y({
    id: t.generateId(`group-${Re()}`)
  }, e);
  const [n, r] = P(), o = {
    generateId: rn(() => e.id),
    registerLabelId: qe(r)
  };
  return v(Oi.Provider, {
    value: o,
    get children() {
      return v(le, H({
        as: "div",
        role: "group",
        get "aria-labelledby"() {
          return n();
        }
      }, e));
    }
  });
}
function Ac(e) {
  const t = _c();
  e = Y({
    id: t.generateId("label")
  }, e);
  const [n, r] = Z(e, ["id"]);
  return N(() => V(t.registerLabelId(n.id))), v(le, H({
    as: "span",
    get id() {
      return n.id;
    },
    "aria-hidden": "true"
  }, r));
}
function Dc(e) {
  const t = rt();
  return e = Y({
    children: "▼"
  }, e), v(le, H({
    as: "span",
    "aria-hidden": "true"
  }, () => t.dataset(), e));
}
function Fc(e) {
  return v($r, H({
    role: "menuitem",
    closeOnSelect: !0
  }, e));
}
function Lc(e) {
  const t = xr();
  e = Y({
    id: t.generateId("description")
  }, e);
  const [n, r] = Z(e, ["id"]);
  return N(() => V(t.registerDescription(n.id))), v(le, H({
    as: "div",
    get id() {
      return n.id;
    }
  }, () => t.dataset(), r));
}
function Ic(e) {
  const t = xr();
  e = Y({
    id: t.generateId("indicator")
  }, e);
  const [n, r] = Z(e, ["forceMount"]);
  return v(K, {
    get when() {
      return n.forceMount || t.isChecked();
    },
    get children() {
      return v(le, H({
        as: "div"
      }, () => t.dataset(), r));
    }
  });
}
function Mc(e) {
  const t = xr();
  e = Y({
    id: t.generateId("label")
  }, e);
  const [n, r] = Z(e, ["ref", "id"]);
  return N(() => V(t.registerLabel(n.id))), v(le, H({
    as: "div",
    ref(o) {
      const i = ke(t.setLabelRef, n.ref);
      typeof i == "function" && i(o);
    },
    get id() {
      return n.id;
    }
  }, () => t.dataset(), r));
}
function qc(e) {
  const t = rt();
  return v(K, {
    get when() {
      return t.contentPresence.isPresent();
    },
    get children() {
      return v(Po, e);
    }
  });
}
var Pi = Ce();
function Oc() {
  const e = Se(Pi);
  if (e === void 0)
    throw new Error("[kobalte]: `useMenuRadioGroupContext` must be used within a `Menu.RadioGroup` component");
  return e;
}
function Tc(e) {
  const n = ot().generateId(`radiogroup-${Re()}`);
  e = Y({
    id: n
  }, e);
  const [r, o] = Z(e, ["value", "defaultValue", "onChange", "disabled"]), [i, l] = ln({
    value: () => r.value,
    defaultValue: () => r.defaultValue,
    onChange: (a) => {
      var c;
      return (c = r.onChange) == null ? void 0 : c.call(r, a);
    }
  }), s = {
    isDisabled: () => r.disabled,
    isSelectedValue: (a) => a === i(),
    setSelectedValue: l
  };
  return v(Pi.Provider, {
    value: s,
    get children() {
      return v(Ti, o);
    }
  });
}
function Pc(e) {
  const t = Oc();
  e = Y({
    closeOnSelect: !1
  }, e);
  const [n, r] = Z(e, ["value", "onSelect"]);
  return v($r, H({
    role: "menuitemradio",
    get checked() {
      return t.isSelectedValue(n.value);
    },
    onSelect: () => {
      var i;
      (i = n.onSelect) == null || i.call(n), t.setSelectedValue(n.value);
    }
  }, r));
}
function zc(e) {
  const t = `menu-${Re()}`;
  e = Y({
    id: t,
    modal: !0,
    preventScroll: !1
  }, e);
  const [n, r] = Z(e, ["id", "modal", "preventScroll", "forceMount", "open", "defaultOpen", "onOpenChange"]), o = fi({
    open: () => n.open,
    defaultOpen: () => n.defaultOpen,
    onOpenChange: (l) => {
      var s;
      return (s = n.onOpenChange) == null ? void 0 : s.call(n, l);
    }
  }), i = {
    isModal: () => n.modal ?? !0,
    preventScroll: () => n.preventScroll ?? !1,
    forceMount: () => n.forceMount ?? !1,
    generateId: rn(() => n.id)
  };
  return v(Li.Provider, {
    value: i,
    get children() {
      return v(Ii, H({
        get open() {
          return o.isOpen();
        },
        get onOpenChange() {
          return o.setIsOpen;
        }
      }, r));
    }
  });
}
function Bc(e) {
  const {
    direction: t
  } = qt();
  return v(Ii, H({
    get placement() {
      return t() === "rtl" ? "left-start" : "right-start";
    },
    flip: !0
  }, e));
}
var Kc = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function Rc(e) {
  const t = rt(), [n, r] = Z(e, ["onFocusOutside", "onKeyDown", "onFocusOut"]), {
    direction: o
  } = qt();
  return v(qi, H({
    onOpenAutoFocus: (c) => {
      c.preventDefault();
    },
    onCloseAutoFocus: (c) => {
      c.preventDefault();
    },
    onFocusOutside: (c) => {
      var f;
      (f = n.onFocusOutside) == null || f.call(n, c);
      const h = c.target;
      Me(t.triggerRef(), h) || t.close();
    },
    onKeyDown: (c) => {
      ie(c, n.onKeyDown);
      const h = Me(c.currentTarget, c.target), f = Kc[o()].includes(c.key), u = t.parentMenuContext() != null;
      h && f && u && (t.close(), $e(t.triggerRef()));
    }
  }, r));
}
var _o = ["Enter", " "], Nc = {
  ltr: [..._o, "ArrowRight"],
  rtl: [..._o, "ArrowLeft"]
};
function Uc(e) {
  let t;
  const n = ot(), r = rt();
  e = Y({
    id: n.generateId(`sub-trigger-${Re()}`)
  }, e);
  const [o, i] = Z(e, ["ref", "id", "textValue", "disabled", "onPointerMove", "onPointerLeave", "onPointerDown", "onPointerUp", "onClick", "onKeyDown", "onMouseDown", "onFocus"]);
  let l = null;
  const s = () => {
    l && window.clearTimeout(l), l = null;
  }, {
    direction: a
  } = qt(), c = () => o.id, h = () => {
    const x = r.parentMenuContext();
    if (x == null)
      throw new Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");
    return x.listState().selectionManager();
  }, f = () => r.listState().collection(), u = () => h().focusedKey() === c(), g = pi({
    key: c,
    selectionManager: h,
    shouldSelectOnPressUp: !0,
    allowsDifferentPressOrigin: !0,
    disabled: () => o.disabled
  }, () => t), d = (x) => {
    ie(x, o.onClick), !r.isOpen() && !o.disabled && r.open(!0);
  }, y = (x) => {
    var w;
    if (ie(x, o.onPointerMove), x.pointerType !== "mouse")
      return;
    const b = r.parentMenuContext();
    if (b == null || b.onItemEnter(x), !x.defaultPrevented) {
      if (o.disabled) {
        b == null || b.onItemLeave(x);
        return;
      }
      !r.isOpen() && !l && ((w = r.parentMenuContext()) == null || w.setPointerGraceIntent(null), l = window.setTimeout(() => {
        r.open(!1), s();
      }, 100)), b == null || b.onItemEnter(x), x.defaultPrevented || (r.listState().selectionManager().isFocused() && (r.listState().selectionManager().setFocused(!1), r.listState().selectionManager().setFocusedKey(void 0)), $e(x.currentTarget), b == null || b.listState().selectionManager().setFocused(!0), b == null || b.listState().selectionManager().setFocusedKey(c()));
    }
  }, m = (x) => {
    if (ie(x, o.onPointerLeave), x.pointerType !== "mouse")
      return;
    s();
    const b = r.parentMenuContext(), w = r.contentRef();
    if (w) {
      b == null || b.setPointerGraceIntent({
        area: Cc(r.currentPlacement(), x, w),
        // Safe because sub menu always open "left" or "right".
        side: r.currentPlacement().split("-")[0]
      }), window.clearTimeout(b == null ? void 0 : b.pointerGraceTimeoutId());
      const p = window.setTimeout(() => {
        b == null || b.setPointerGraceIntent(null);
      }, 300);
      b == null || b.setPointerGraceTimeoutId(p);
    } else {
      if (b == null || b.onTriggerLeave(x), x.defaultPrevented)
        return;
      b == null || b.setPointerGraceIntent(null);
    }
    b == null || b.onItemLeave(x);
  }, $ = (x) => {
    ie(x, o.onKeyDown), !x.repeat && (o.disabled || Nc[a()].includes(x.key) && (x.stopPropagation(), x.preventDefault(), h().setFocused(!1), h().setFocusedKey(void 0), r.isOpen() || r.open("first"), r.focusContent(), r.listState().selectionManager().setFocused(!0), r.listState().selectionManager().setFocusedKey(f().getFirstKey())));
  };
  return N(() => {
    if (r.registerItemToParentDomCollection == null)
      throw new Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");
    const x = r.registerItemToParentDomCollection({
      ref: () => t,
      type: "item",
      key: c(),
      textValue: o.textValue ?? (t == null ? void 0 : t.textContent) ?? "",
      disabled: o.disabled ?? !1
    });
    V(x);
  }), N(Be(() => {
    var x;
    return (x = r.parentMenuContext()) == null ? void 0 : x.pointerGraceTimeoutId();
  }, (x) => {
    V(() => {
      var b;
      window.clearTimeout(x), (b = r.parentMenuContext()) == null || b.setPointerGraceIntent(null);
    });
  })), N(() => V(r.registerTriggerId(o.id))), V(() => {
    s();
  }), v(le, H({
    as: "div",
    ref(x) {
      const b = ke((w) => {
        r.setTriggerRef(w), t = w;
      }, o.ref);
      typeof b == "function" && b(x);
    },
    get id() {
      return o.id;
    },
    role: "menuitem",
    get tabIndex() {
      return g.tabIndex();
    },
    "aria-haspopup": "true",
    get "aria-expanded"() {
      return r.isOpen();
    },
    get "aria-controls"() {
      return F(() => !!r.isOpen())() ? r.contentId() : void 0;
    },
    get "aria-disabled"() {
      return o.disabled;
    },
    get "data-key"() {
      return g.dataKey();
    },
    get "data-highlighted"() {
      return u() ? "" : void 0;
    },
    get "data-disabled"() {
      return o.disabled ? "" : void 0;
    },
    get onPointerDown() {
      return ye([o.onPointerDown, g.onPointerDown]);
    },
    get onPointerUp() {
      return ye([o.onPointerUp, g.onPointerUp]);
    },
    get onClick() {
      return ye([d, g.onClick]);
    },
    get onKeyDown() {
      return ye([$, g.onKeyDown]);
    },
    get onMouseDown() {
      return ye([o.onMouseDown, g.onMouseDown]);
    },
    get onFocus() {
      return ye([o.onFocus, g.onFocus]);
    },
    onPointerMove: y,
    onPointerLeave: m
  }, () => r.dataset(), i));
}
function Vc(e) {
  const t = ot(), n = rt();
  e = Y({
    id: t.generateId("trigger")
  }, e);
  const [r, o] = Z(e, ["ref", "id", "disabled", "onPointerDown", "onClick", "onKeyDown"]), i = (a) => {
    ie(a, r.onPointerDown), a.currentTarget.dataset.pointerType = a.pointerType, !r.disabled && a.pointerType !== "touch" && a.button === 0 && n.toggle(!0);
  }, l = (a) => {
    ie(a, r.onClick), !r.disabled && a.currentTarget.dataset.pointerType === "touch" && n.toggle(!0);
  }, s = (a) => {
    if (ie(a, r.onKeyDown), !r.disabled)
      switch (a.key) {
        case "Enter":
        case " ":
        case "ArrowDown":
          a.stopPropagation(), a.preventDefault(), n.toggle("first");
          break;
        case "ArrowUp":
          a.stopPropagation(), a.preventDefault(), n.toggle("last");
          break;
      }
  };
  return N(() => V(n.registerTriggerId(r.id))), v(nc, H({
    ref(a) {
      const c = ke(n.setTriggerRef, r.ref);
      typeof c == "function" && c(a);
    },
    get id() {
      return r.id;
    },
    get disabled() {
      return r.disabled;
    },
    "aria-haspopup": "true",
    get "aria-expanded"() {
      return n.isOpen();
    },
    get "aria-controls"() {
      return F(() => !!n.isOpen())() ? n.contentId() : void 0;
    },
    onPointerDown: i,
    onClick: l,
    onKeyDown: s
  }, () => n.dataset(), o));
}
function Gc(e) {
  let t;
  e = Y({
    orientation: "horizontal"
  }, e);
  const [n, r] = Z(e, ["ref", "orientation"]), o = br(() => t, () => "hr");
  return v(le, H({
    as: "hr",
    ref(i) {
      const l = ke((s) => t = s, n.ref);
      typeof l == "function" && l(i);
    },
    get role() {
      return o() !== "hr" ? "separator" : void 0;
    },
    get "aria-orientation"() {
      return n.orientation === "vertical" ? "vertical" : void 0;
    },
    get "data-orientation"() {
      return n.orientation;
    }
  }, r));
}
new Cl({
  ach: {
    year: "mwaka",
    month: "dwe",
    day: "nino"
  },
  af: {
    year: "jjjj",
    month: "mm",
    day: "dd"
  },
  am: {
    year: "ዓዓዓዓ",
    month: "ሚሜ",
    day: "ቀቀ"
  },
  an: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  ar: {
    year: "سنة",
    month: "شهر",
    day: "يوم"
  },
  ast: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  az: {
    year: "iiii",
    month: "aa",
    day: "gg"
  },
  be: {
    year: "гггг",
    month: "мм",
    day: "дд"
  },
  bg: {
    year: "гггг",
    month: "мм",
    day: "дд"
  },
  bn: {
    year: "yyyy",
    month: "মিমি",
    day: "dd"
  },
  br: {
    year: "bbbb",
    month: "mm",
    day: "dd"
  },
  bs: {
    year: "gggg",
    month: "mm",
    day: "dd"
  },
  ca: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  cak: {
    year: "jjjj",
    month: "ii",
    day: "q'q'"
  },
  ckb: {
    year: "ساڵ",
    month: "مانگ",
    day: "ڕۆژ"
  },
  cs: {
    year: "rrrr",
    month: "mm",
    day: "dd"
  },
  cy: {
    year: "bbbb",
    month: "mm",
    day: "dd"
  },
  da: {
    year: "åååå",
    month: "mm",
    day: "dd"
  },
  de: {
    year: "jjjj",
    month: "mm",
    day: "tt"
  },
  dsb: {
    year: "llll",
    month: "mm",
    day: "źź"
  },
  el: {
    year: "εεεε",
    month: "μμ",
    day: "ηη"
  },
  en: {
    year: "yyyy",
    month: "mm",
    day: "dd"
  },
  eo: {
    year: "jjjj",
    month: "mm",
    day: "tt"
  },
  es: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  et: {
    year: "aaaa",
    month: "kk",
    day: "pp"
  },
  eu: {
    year: "uuuu",
    month: "hh",
    day: "ee"
  },
  fa: {
    year: "سال",
    month: "ماه",
    day: "روز"
  },
  ff: {
    year: "hhhh",
    month: "ll",
    day: "ññ"
  },
  fi: {
    year: "vvvv",
    month: "kk",
    day: "pp"
  },
  fr: {
    year: "aaaa",
    month: "mm",
    day: "jj"
  },
  fy: {
    year: "jjjj",
    month: "mm",
    day: "dd"
  },
  ga: {
    year: "bbbb",
    month: "mm",
    day: "ll"
  },
  gd: {
    year: "bbbb",
    month: "mm",
    day: "ll"
  },
  gl: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  he: {
    year: "שנה",
    month: "חודש",
    day: "יום"
  },
  hr: {
    year: "gggg",
    month: "mm",
    day: "dd"
  },
  hsb: {
    year: "llll",
    month: "mm",
    day: "dd"
  },
  hu: {
    year: "éééé",
    month: "hh",
    day: "nn"
  },
  ia: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  id: {
    year: "tttt",
    month: "bb",
    day: "hh"
  },
  it: {
    year: "aaaa",
    month: "mm",
    day: "gg"
  },
  ja: {
    year: " 年 ",
    month: "月",
    day: "日"
  },
  ka: {
    year: "წწწწ",
    month: "თთ",
    day: "რრ"
  },
  kk: {
    year: "жжжж",
    month: "аа",
    day: "кк"
  },
  kn: {
    year: "ವವವವ",
    month: "ಮಿಮೀ",
    day: "ದಿದಿ"
  },
  ko: {
    year: "연도",
    month: "월",
    day: "일"
  },
  lb: {
    year: "jjjj",
    month: "mm",
    day: "dd"
  },
  lo: {
    year: "ປປປປ",
    month: "ດດ",
    day: "ວວ"
  },
  lt: {
    year: "mmmm",
    month: "mm",
    day: "dd"
  },
  lv: {
    year: "gggg",
    month: "mm",
    day: "dd"
  },
  meh: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  ml: {
    year: "വർഷം",
    month: "മാസം",
    day: "തീയതി"
  },
  ms: {
    year: "tttt",
    month: "mm",
    day: "hh"
  },
  nl: {
    year: "jjjj",
    month: "mm",
    day: "dd"
  },
  nn: {
    year: "åååå",
    month: "mm",
    day: "dd"
  },
  no: {
    year: "åååå",
    month: "mm",
    day: "dd"
  },
  oc: {
    year: "aaaa",
    month: "mm",
    day: "jj"
  },
  pl: {
    year: "rrrr",
    month: "mm",
    day: "dd"
  },
  pt: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  rm: {
    year: "oooo",
    month: "mm",
    day: "dd"
  },
  ro: {
    year: "aaaa",
    month: "ll",
    day: "zz"
  },
  ru: {
    year: "гггг",
    month: "мм",
    day: "дд"
  },
  sc: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  scn: {
    year: "aaaa",
    month: "mm",
    day: "jj"
  },
  sk: {
    year: "rrrr",
    month: "mm",
    day: "dd"
  },
  sl: {
    year: "llll",
    month: "mm",
    day: "dd"
  },
  sr: {
    year: "гггг",
    month: "мм",
    day: "дд"
  },
  sv: {
    year: "åååå",
    month: "mm",
    day: "dd"
  },
  szl: {
    year: "rrrr",
    month: "mm",
    day: "dd"
  },
  tg: {
    year: "сссс",
    month: "мм",
    day: "рр"
  },
  th: {
    year: "ปปปป",
    month: "ดด",
    day: "วว"
  },
  tr: {
    year: "yyyy",
    month: "aa",
    day: "gg"
  },
  uk: {
    year: "рррр",
    month: "мм",
    day: "дд"
  },
  "zh-CN": {
    year: "年",
    month: "月",
    day: "日"
  },
  "zh-TW": {
    year: "年",
    month: "月",
    day: "日"
  }
}, "en");
function Hc(e) {
  const t = ot(), n = rt(), [r, o] = Z(e, ["onCloseAutoFocus", "onInteractOutside"]);
  let i = !1;
  return v(Ec, H({
    onCloseAutoFocus: (a) => {
      var c;
      (c = r.onCloseAutoFocus) == null || c.call(r, a), i || $e(n.triggerRef()), i = !1, a.preventDefault();
    },
    onInteractOutside: (a) => {
      var c;
      (c = r.onInteractOutside) == null || c.call(r, a), (!t.isModal() || a.detail.isContextMenu) && (i = !0);
    }
  }, o));
}
function jc(e) {
  const t = `dropdownmenu-${Re()}`;
  return e = Y({
    id: t
  }, e), v(zc, e);
}
var fe = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Arrow: yc,
  CheckboxItem: kc,
  Content: Hc,
  Group: Ti,
  GroupLabel: Ac,
  Icon: Dc,
  Item: Fc,
  ItemDescription: Lc,
  ItemIndicator: Ic,
  ItemLabel: Mc,
  Portal: qc,
  RadioGroup: Tc,
  RadioItem: Pc,
  Root: jc,
  Separator: Gc,
  Sub: Bc,
  SubContent: Rc,
  SubTrigger: Uc,
  Trigger: Vc
}), zi = Ce();
function Bi() {
  const e = Se(zi);
  if (e === void 0)
    throw new Error("[kobalte]: `useRadioGroupContext` must be used within a `RadioGroup` component");
  return e;
}
var Ki = Ce();
function cn() {
  const e = Se(Ki);
  if (e === void 0)
    throw new Error("[kobalte]: `useRadioGroupItemContext` must be used within a `RadioGroup.Item` component");
  return e;
}
function Wc(e) {
  const t = an(), n = Bi(), r = `${t.generateId("item")}-${Re()}`;
  e = Y({
    id: r
  }, e);
  const [o, i] = Z(e, ["value", "disabled", "onPointerDown"]), [l, s] = P(), [a, c] = P(), [h, f] = P(), [u, g] = P(), [d, y] = P(!1), m = F(() => n.isSelectedValue(o.value)), $ = F(() => o.disabled || t.isDisabled() || !1), x = (p) => {
    ie(p, o.onPointerDown), d() && p.preventDefault();
  }, b = F(() => ({
    ...t.dataset(),
    "data-disabled": $() ? "" : void 0,
    "data-checked": m() ? "" : void 0
  })), w = {
    value: () => o.value,
    dataset: b,
    isSelected: m,
    isDisabled: $,
    inputId: l,
    labelId: a,
    descriptionId: h,
    inputRef: u,
    select: () => n.setSelectedValue(o.value),
    generateId: rn(() => i.id),
    registerInput: qe(s),
    registerLabel: qe(c),
    registerDescription: qe(f),
    setIsFocused: y,
    setInputRef: g
  };
  return v(Ki.Provider, {
    value: w,
    get children() {
      return v(le, H({
        as: "div",
        role: "group",
        onPointerDown: x
      }, b, i));
    }
  });
}
function Qc(e) {
  const t = cn();
  e = Y({
    id: t.generateId("control")
  }, e);
  const [n, r] = Z(e, ["onClick", "onKeyDown"]);
  return v(le, H({
    as: "div",
    onClick: (l) => {
      var s;
      ie(l, n.onClick), t.select(), (s = t.inputRef()) == null || s.focus();
    },
    onKeyDown: (l) => {
      var s;
      ie(l, n.onKeyDown), l.key === ar.Space && (t.select(), (s = t.inputRef()) == null || s.focus());
    }
  }, () => t.dataset(), r));
}
function Yc(e) {
  const t = cn();
  return e = Y({
    id: t.generateId("description")
  }, e), N(() => V(t.registerDescription(e.id))), v(le, H({
    as: "div"
  }, () => t.dataset(), e));
}
function Xc(e) {
  const t = cn();
  e = Y({
    id: t.generateId("indicator")
  }, e);
  const [n, r] = Z(e, ["ref", "forceMount"]), o = vi(() => n.forceMount || t.isSelected());
  return v(K, {
    get when() {
      return o.isPresent();
    },
    get children() {
      return v(le, H({
        as: "div",
        ref(i) {
          const l = ke(o.setRef, n.ref);
          typeof l == "function" && l(i);
        }
      }, () => t.dataset(), r));
    }
  });
}
var Zc = /* @__PURE__ */ O('<input type="radio">');
function Jc(e) {
  const t = an(), n = Bi(), r = cn();
  e = Y({
    id: r.generateId("input")
  }, e);
  const [o, i] = Z(e, ["ref", "style", "aria-labelledby", "aria-describedby", "onChange", "onFocus", "onBlur"]), l = () => [
    o["aria-labelledby"],
    r.labelId(),
    // If there is both an aria-label and aria-labelledby, add the input itself has an aria-labelledby
    o["aria-labelledby"] != null && i["aria-label"] != null ? i.id : void 0
  ].filter(Boolean).join(" ") || void 0, s = () => [o["aria-describedby"], r.descriptionId(), n.ariaDescribedBy()].filter(Boolean).join(" ") || void 0, a = (f) => {
    ie(f, o.onChange), f.stopPropagation(), n.setSelectedValue(r.value());
    const u = f.target;
    u.checked = r.isSelected();
  }, c = (f) => {
    ie(f, o.onFocus), r.setIsFocused(!0);
  }, h = (f) => {
    ie(f, o.onBlur), r.setIsFocused(!1);
  };
  return N(() => V(r.registerInput(i.id))), (() => {
    const f = Zc();
    f.addEventListener("blur", h), f.addEventListener("focus", c), f.addEventListener("change", a);
    const u = ke(r.setInputRef, o.ref);
    return typeof u == "function" && nn(u, f), ir(f, H({
      get name() {
        return t.name();
      },
      get value() {
        return r.value();
      },
      get checked() {
        return r.isSelected();
      },
      get required() {
        return t.isRequired();
      },
      get disabled() {
        return r.isDisabled();
      },
      get readonly() {
        return t.isReadOnly();
      },
      get style() {
        return {
          ...Yo,
          ...o.style
        };
      },
      get "aria-labelledby"() {
        return l();
      },
      get "aria-describedby"() {
        return s();
      }
    }, () => r.dataset(), i), !1, !1), f;
  })();
}
var eu = /* @__PURE__ */ O("<label>");
function tu(e) {
  const t = cn();
  return e = Y({
    id: t.generateId("label")
  }, e), N(() => V(t.registerLabel(e.id))), (() => {
    const n = eu();
    return ir(n, H({
      get for() {
        return t.inputId();
      }
    }, () => t.dataset(), e), !1, !1), n;
  })();
}
function nu(e) {
  return v(Oa, H({
    as: "span"
  }, e));
}
function ru(e) {
  let t;
  const n = `radiogroup-${Re()}`;
  e = Y({
    id: n,
    orientation: "vertical"
  }, e);
  const [r, o, i] = Z(e, ["ref", "value", "defaultValue", "onChange", "orientation", "aria-labelledby", "aria-describedby"], Fa), [l, s] = ln({
    value: () => r.value,
    defaultValue: () => r.defaultValue,
    onChange: (g) => {
      var d;
      return (d = r.onChange) == null ? void 0 : d.call(r, g);
    }
  }), {
    formControlContext: a
  } = La(o);
  ba(() => t, () => s(r.defaultValue ?? ""));
  const c = () => a.getAriaLabelledBy(C(o.id), i["aria-label"], r["aria-labelledby"]), h = () => a.getAriaDescribedBy(r["aria-describedby"]), f = (g) => g === l(), u = {
    ariaDescribedBy: h,
    isSelectedValue: f,
    setSelectedValue: (g) => {
      a.isReadOnly() || a.isDisabled() || (s(g), t == null || t.querySelectorAll("[type='radio']").forEach((d) => {
        const y = d;
        y.checked = f(y.value);
      }));
    }
  };
  return v(mi.Provider, {
    value: a,
    get children() {
      return v(zi.Provider, {
        value: u,
        get children() {
          return v(le, H({
            as: "div",
            ref(g) {
              const d = ke((y) => t = y, r.ref);
              typeof d == "function" && d(g);
            },
            role: "radiogroup",
            get id() {
              return C(o.id);
            },
            get "aria-invalid"() {
              return a.validationState() === "invalid" || void 0;
            },
            get "aria-required"() {
              return a.isRequired() || void 0;
            },
            get "aria-disabled"() {
              return a.isDisabled() || void 0;
            },
            get "aria-readonly"() {
              return a.isReadOnly() || void 0;
            },
            get "aria-orientation"() {
              return r.orientation;
            },
            get "aria-labelledby"() {
              return c();
            },
            get "aria-describedby"() {
              return h();
            }
          }, () => a.dataset(), i));
        }
      });
    }
  });
}
var Pe = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Description: Ma,
  ErrorMessage: qa,
  Item: Wc,
  ItemControl: Qc,
  ItemDescription: Yc,
  ItemIndicator: Xc,
  ItemInput: Jc,
  ItemLabel: tu,
  Label: nu,
  Root: ru
});
tn(["focusin", "focusout", "pointermove"]);
tn(["keydown", "pointerdown", "pointermove", "pointerup"]);
var S = {
  colors: {
    inherit: "inherit",
    current: "currentColor",
    transparent: "transparent",
    black: "#000000",
    white: "#ffffff",
    neutral: {
      50: "#f9fafb",
      100: "#f2f4f7",
      200: "#eaecf0",
      300: "#d0d5dd",
      400: "#98a2b3",
      500: "#667085",
      600: "#475467",
      700: "#344054",
      800: "#1d2939",
      900: "#101828"
    },
    darkGray: {
      50: "#525c7a",
      100: "#49536e",
      200: "#414962",
      300: "#394056",
      400: "#313749",
      500: "#292e3d",
      600: "#212530",
      700: "#191c24",
      800: "#111318",
      900: "#0b0d10"
    },
    gray: {
      50: "#f9fafb",
      100: "#f2f4f7",
      200: "#eaecf0",
      300: "#d0d5dd",
      400: "#98a2b3",
      500: "#667085",
      600: "#475467",
      700: "#344054",
      800: "#1d2939",
      900: "#101828"
    },
    blue: {
      25: "#F5FAFF",
      50: "#EFF8FF",
      100: "#D1E9FF",
      200: "#B2DDFF",
      300: "#84CAFF",
      400: "#53B1FD",
      500: "#2E90FA",
      600: "#1570EF",
      700: "#175CD3",
      800: "#1849A9",
      900: "#194185"
    },
    green: {
      25: "#F6FEF9",
      50: "#ECFDF3",
      100: "#D1FADF",
      200: "#A6F4C5",
      300: "#6CE9A6",
      400: "#32D583",
      500: "#12B76A",
      600: "#039855",
      700: "#027A48",
      800: "#05603A",
      900: "#054F31"
    },
    red: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
      950: "#450a0a"
    },
    yellow: {
      25: "#FFFCF5",
      50: "#FFFAEB",
      100: "#FEF0C7",
      200: "#FEDF89",
      300: "#FEC84B",
      400: "#FDB022",
      500: "#F79009",
      600: "#DC6803",
      700: "#B54708",
      800: "#93370D",
      900: "#7A2E0E"
    },
    purple: {
      25: "#FAFAFF",
      50: "#F4F3FF",
      100: "#EBE9FE",
      200: "#D9D6FE",
      300: "#BDB4FE",
      400: "#9B8AFB",
      500: "#7A5AF8",
      600: "#6938EF",
      700: "#5925DC",
      800: "#4A1FB8",
      900: "#3E1C96"
    },
    teal: {
      25: "#F6FEFC",
      50: "#F0FDF9",
      100: "#CCFBEF",
      200: "#99F6E0",
      300: "#5FE9D0",
      400: "#2ED3B7",
      500: "#15B79E",
      600: "#0E9384",
      700: "#107569",
      800: "#125D56",
      900: "#134E48"
    },
    pink: {
      25: "#fdf2f8",
      50: "#fce7f3",
      100: "#fbcfe8",
      200: "#f9a8d4",
      300: "#f472b6",
      400: "#ec4899",
      500: "#db2777",
      600: "#be185d",
      700: "#9d174d",
      800: "#831843",
      900: "#500724"
    },
    cyan: {
      25: "#ecfeff",
      50: "#cffafe",
      100: "#a5f3fc",
      200: "#67e8f9",
      300: "#22d3ee",
      400: "#06b6d4",
      500: "#0891b2",
      600: "#0e7490",
      700: "#155e75",
      800: "#164e63",
      900: "#083344"
    }
  },
  alpha: {
    100: "ff",
    90: "e5",
    80: "cc",
    70: "b3",
    60: "99",
    50: "80",
    40: "66",
    30: "4d",
    20: "33",
    10: "1a",
    0: "00"
  },
  font: {
    size: {
      "2xs": "calc(var(--tsqd-font-size) * 0.625)",
      xs: "calc(var(--tsqd-font-size) * 0.75)",
      sm: "calc(var(--tsqd-font-size) * 0.875)",
      md: "var(--tsqd-font-size)",
      lg: "calc(var(--tsqd-font-size) * 1.125)",
      xl: "calc(var(--tsqd-font-size) * 1.25)",
      "2xl": "calc(var(--tsqd-font-size) * 1.5)",
      "3xl": "calc(var(--tsqd-font-size) * 1.875)",
      "4xl": "calc(var(--tsqd-font-size) * 2.25)",
      "5xl": "calc(var(--tsqd-font-size) * 3)",
      "6xl": "calc(var(--tsqd-font-size) * 3.75)",
      "7xl": "calc(var(--tsqd-font-size) * 4.5)",
      "8xl": "calc(var(--tsqd-font-size) * 6)",
      "9xl": "calc(var(--tsqd-font-size) * 8)"
    },
    lineHeight: {
      xs: "calc(var(--tsqd-font-size) * 1)",
      sm: "calc(var(--tsqd-font-size) * 1.25)",
      md: "calc(var(--tsqd-font-size) * 1.5)",
      lg: "calc(var(--tsqd-font-size) * 1.75)",
      xl: "calc(var(--tsqd-font-size) * 2)",
      "2xl": "calc(var(--tsqd-font-size) * 2.25)",
      "3xl": "calc(var(--tsqd-font-size) * 2.5)",
      "4xl": "calc(var(--tsqd-font-size) * 2.75)",
      "5xl": "calc(var(--tsqd-font-size) * 3)",
      "6xl": "calc(var(--tsqd-font-size) * 3.25)",
      "7xl": "calc(var(--tsqd-font-size) * 3.5)",
      "8xl": "calc(var(--tsqd-font-size) * 3.75)",
      "9xl": "calc(var(--tsqd-font-size) * 4)"
    },
    weight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900"
    }
  },
  breakpoints: {
    xs: "320px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  },
  border: {
    radius: {
      none: "0px",
      xs: "calc(var(--tsqd-font-size) * 0.125)",
      sm: "calc(var(--tsqd-font-size) * 0.25)",
      md: "calc(var(--tsqd-font-size) * 0.375)",
      lg: "calc(var(--tsqd-font-size) * 0.5)",
      xl: "calc(var(--tsqd-font-size) * 0.75)",
      "2xl": "calc(var(--tsqd-font-size) * 1)",
      "3xl": "calc(var(--tsqd-font-size) * 1.5)",
      full: "9999px"
    }
  },
  size: {
    0: "0px",
    0.25: "calc(var(--tsqd-font-size) * 0.0625)",
    0.5: "calc(var(--tsqd-font-size) * 0.125)",
    1: "calc(var(--tsqd-font-size) * 0.25)",
    1.5: "calc(var(--tsqd-font-size) * 0.375)",
    2: "calc(var(--tsqd-font-size) * 0.5)",
    2.5: "calc(var(--tsqd-font-size) * 0.625)",
    3: "calc(var(--tsqd-font-size) * 0.75)",
    3.5: "calc(var(--tsqd-font-size) * 0.875)",
    4: "calc(var(--tsqd-font-size) * 1)",
    4.5: "calc(var(--tsqd-font-size) * 1.125)",
    5: "calc(var(--tsqd-font-size) * 1.25)",
    5.5: "calc(var(--tsqd-font-size) * 1.375)",
    6: "calc(var(--tsqd-font-size) * 1.5)",
    6.5: "calc(var(--tsqd-font-size) * 1.625)",
    7: "calc(var(--tsqd-font-size) * 1.75)",
    8: "calc(var(--tsqd-font-size) * 2)",
    9: "calc(var(--tsqd-font-size) * 2.25)",
    10: "calc(var(--tsqd-font-size) * 2.5)",
    11: "calc(var(--tsqd-font-size) * 2.75)",
    12: "calc(var(--tsqd-font-size) * 3)",
    14: "calc(var(--tsqd-font-size) * 3.5)",
    16: "calc(var(--tsqd-font-size) * 4)",
    20: "calc(var(--tsqd-font-size) * 5)",
    24: "calc(var(--tsqd-font-size) * 6)",
    28: "calc(var(--tsqd-font-size) * 7)",
    32: "calc(var(--tsqd-font-size) * 8)",
    36: "calc(var(--tsqd-font-size) * 9)",
    40: "calc(var(--tsqd-font-size) * 10)",
    44: "calc(var(--tsqd-font-size) * 11)",
    48: "calc(var(--tsqd-font-size) * 12)",
    52: "calc(var(--tsqd-font-size) * 13)",
    56: "calc(var(--tsqd-font-size) * 14)",
    60: "calc(var(--tsqd-font-size) * 15)",
    64: "calc(var(--tsqd-font-size) * 16)",
    72: "calc(var(--tsqd-font-size) * 18)",
    80: "calc(var(--tsqd-font-size) * 20)",
    96: "calc(var(--tsqd-font-size) * 24)"
  },
  shadow: {
    xs: (e = "rgb(0 0 0 / 0.1)") => "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    sm: (e = "rgb(0 0 0 / 0.1)") => `0 1px 3px 0 ${e}, 0 1px 2px -1px ${e}`,
    md: (e = "rgb(0 0 0 / 0.1)") => `0 4px 6px -1px ${e}, 0 2px 4px -2px ${e}`,
    lg: (e = "rgb(0 0 0 / 0.1)") => `0 10px 15px -3px ${e}, 0 4px 6px -4px ${e}`,
    xl: (e = "rgb(0 0 0 / 0.1)") => `0 20px 25px -5px ${e}, 0 8px 10px -6px ${e}`,
    "2xl": (e = "rgb(0 0 0 / 0.25)") => `0 25px 50px -12px ${e}`,
    inner: (e = "rgb(0 0 0 / 0.05)") => `inset 0 2px 4px 0 ${e}`,
    none: () => "none"
  },
  zIndices: {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1e3,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800
  }
}, ou = /* @__PURE__ */ O('<svg width=14 height=14 viewBox="0 0 14 14"fill=none xmlns=http://www.w3.org/2000/svg><path d="M13 13L9.00007 9M10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667Z"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'), iu = /* @__PURE__ */ O('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'), su = /* @__PURE__ */ O('<svg width=10 height=6 viewBox="0 0 10 6"fill=none xmlns=http://www.w3.org/2000/svg><path d="M1 1L5 5L9 1"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'), lu = /* @__PURE__ */ O('<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 13.3333V2.66667M8 2.66667L4 6.66667M8 2.66667L12 6.66667"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'), pr = /* @__PURE__ */ O('<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 2.66667V13.3333M8 13.3333L4 9.33333M8 13.3333L12 9.33333"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'), au = /* @__PURE__ */ O('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2v2m0 16v2M4 12H2m4.314-5.686L4.9 4.9m12.786 1.414L19.1 4.9M6.314 17.69 4.9 19.104m12.786-1.414 1.414 1.414M22 12h-2m-3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'), cu = /* @__PURE__ */ O('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M22 15.844a10.424 10.424 0 0 1-4.306.925c-5.779 0-10.463-4.684-10.463-10.462 0-1.536.33-2.994.925-4.307A10.464 10.464 0 0 0 2 11.538C2 17.316 6.684 22 12.462 22c4.243 0 7.896-2.526 9.538-6.156Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'), uu = /* @__PURE__ */ O('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 21h8m-4-4v4m-5.2-4h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 14.72 22 13.88 22 12.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 3 18.88 3 17.2 3H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 5.28 2 6.12 2 7.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 17 5.12 17 6.8 17Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'), du = /* @__PURE__ */ O('<svg stroke=currentColor fill=currentColor stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M0 0h24v24H0z"></path><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z">'), fu = /* @__PURE__ */ O('<svg stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M24 .01c0-.01 0-.01 0 0L0 0v24h24V.01zM0 0h24v24H0V0zm0 0h24v24H0V0z"></path><path d="M22.99 9C19.15 5.16 13.8 3.76 8.84 4.78l2.52 2.52c3.47-.17 6.99 1.05 9.63 3.7l2-2zm-4 4a9.793 9.793 0 00-4.49-2.56l3.53 3.53.96-.97zM2 3.05L5.07 6.1C3.6 6.82 2.22 7.78 1 9l1.99 2c1.24-1.24 2.67-2.16 4.2-2.77l2.24 2.24A9.684 9.684 0 005 13v.01L6.99 15a7.042 7.042 0 014.92-2.06L18.98 20l1.27-1.26L3.29 1.79 2 3.05zM9 17l3 3 3-3a4.237 4.237 0 00-6 0z">'), gu = /* @__PURE__ */ O('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.3951 19.3711L9.97955 20.6856C10.1533 21.0768 10.4368 21.4093 10.7958 21.6426C11.1547 21.8759 11.5737 22.0001 12.0018 22C12.4299 22.0001 12.8488 21.8759 13.2078 21.6426C13.5667 21.4093 13.8503 21.0768 14.024 20.6856L14.6084 19.3711C14.8165 18.9047 15.1664 18.5159 15.6084 18.26C16.0532 18.0034 16.5678 17.8941 17.0784 17.9478L18.5084 18.1C18.9341 18.145 19.3637 18.0656 19.7451 17.8713C20.1265 17.6771 20.4434 17.3763 20.6573 17.0056C20.8715 16.635 20.9735 16.2103 20.9511 15.7829C20.9286 15.3555 20.7825 14.9438 20.5307 14.5978L19.684 13.4344C19.3825 13.0171 19.2214 12.5148 19.224 12C19.2239 11.4866 19.3865 10.9864 19.6884 10.5711L20.5351 9.40778C20.787 9.06175 20.933 8.65007 20.9555 8.22267C20.978 7.79528 20.8759 7.37054 20.6618 7C20.4479 6.62923 20.131 6.32849 19.7496 6.13423C19.3681 5.93997 18.9386 5.86053 18.5129 5.90556L17.0829 6.05778C16.5722 6.11141 16.0577 6.00212 15.6129 5.74556C15.17 5.48825 14.82 5.09736 14.6129 4.62889L14.024 3.31444C13.8503 2.92317 13.5667 2.59072 13.2078 2.3574C12.8488 2.12408 12.4299 1.99993 12.0018 2C11.5737 1.99993 11.1547 2.12408 10.7958 2.3574C10.4368 2.59072 10.1533 2.92317 9.97955 3.31444L9.3951 4.62889C9.18803 5.09736 8.83798 5.48825 8.3951 5.74556C7.95032 6.00212 7.43577 6.11141 6.9251 6.05778L5.49066 5.90556C5.06499 5.86053 4.6354 5.93997 4.25397 6.13423C3.87255 6.32849 3.55567 6.62923 3.34177 7C3.12759 7.37054 3.02555 7.79528 3.04804 8.22267C3.07052 8.65007 3.21656 9.06175 3.46844 9.40778L4.3151 10.5711C4.61704 10.9864 4.77964 11.4866 4.77955 12C4.77964 12.5134 4.61704 13.0137 4.3151 13.4289L3.46844 14.5922C3.21656 14.9382 3.07052 15.3499 3.04804 15.7773C3.02555 16.2047 3.12759 16.6295 3.34177 17C3.55589 17.3706 3.8728 17.6712 4.25417 17.8654C4.63554 18.0596 5.06502 18.1392 5.49066 18.0944L6.92066 17.9422C7.43133 17.8886 7.94587 17.9979 8.39066 18.2544C8.83519 18.511 9.18687 18.902 9.3951 19.3711Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><path d="M12 15C13.6568 15 15 13.6569 15 12C15 10.3431 13.6568 9 12 9C10.3431 9 8.99998 10.3431 8.99998 12C8.99998 13.6569 10.3431 15 12 15Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'), hu = /* @__PURE__ */ O('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M16 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V8M11.5 12.5L17 7M17 7H12M17 7V12M6.2 21H8.8C9.9201 21 10.4802 21 10.908 20.782C11.2843 20.5903 11.5903 20.2843 11.782 19.908C12 19.4802 12 18.9201 12 17.8V15.2C12 14.0799 12 13.5198 11.782 13.092C11.5903 12.7157 11.2843 12.4097 10.908 12.218C10.4802 12 9.92011 12 8.8 12H6.2C5.0799 12 4.51984 12 4.09202 12.218C3.71569 12.4097 3.40973 12.7157 3.21799 13.092C3 13.5198 3 14.0799 3 15.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'), yu = /* @__PURE__ */ O('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path class=copier d="M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round stroke=currentColor>'), Ri = /* @__PURE__ */ O('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'), vu = /* @__PURE__ */ O('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 9L15 15M15 9L9 15M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke=#F04438 stroke-width=2 stroke-linecap=round stroke-linejoin=round>'), mu = /* @__PURE__ */ O('<svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 xmlns=http://www.w3.org/2000/svg><rect class=list width=20 height=20 y=2 x=2 rx=2></rect><line class=list-item y1=7 y2=7 x1=6 x2=18></line><line class=list-item y2=12 y1=12 x1=6 x2=18></line><line class=list-item y1=17 y2=17 x1=6 x2=18>'), bu = /* @__PURE__ */ O('<svg viewBox="0 0 24 24"height=20 width=20 fill=none xmlns=http://www.w3.org/2000/svg><path d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'), xu = /* @__PURE__ */ O('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'), $u = /* @__PURE__ */ O('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 19.0784L16.25 16.25M19.0784 4.99994L16.25 7.82837M4.92157 19.0784L7.75 16.25M4.92157 4.99994L7.75 7.82837"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><animateTransform attributeName=transform attributeType=XML type=rotate from=0 to=360 dur=2s repeatCount=indefinite>'), pu = /* @__PURE__ */ O('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'), wu = /* @__PURE__ */ O('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.5 15V9M14.5 15V9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'), Cu = /* @__PURE__ */ O('<svg version=1.0 viewBox="0 0 633 633"><linearGradient x1=-666.45 x2=-666.45 y1=163.28 y2=163.99 gradientTransform="matrix(633 0 0 633 422177 -103358)"gradientUnits=userSpaceOnUse><stop stop-color=#6BDAFF offset=0></stop><stop stop-color=#F9FFB5 offset=.32></stop><stop stop-color=#FFA770 offset=.71></stop><stop stop-color=#FF7373 offset=1></stop></linearGradient><circle cx=316.5 cy=316.5 r=316.5></circle><defs><filter x=-137.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=316.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=316.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=316.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=272.2 y=308 width=176.9 height=129.3 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=272.2 y=308 width=176.9 height=129.3 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><line x1=436 x2=431 y1=403.2 y2=431.8 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=291 x2=280 y1=341.5 y2=403.5 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=332.9 x2=328.6 y1=384.1 y2=411.2 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><linearGradient x1=-670.75 x2=-671.59 y1=164.4 y2=164.49 gradientTransform="matrix(-184.16 -32.472 -11.461 64.997 -121359 -32126)"gradientUnits=userSpaceOnUse><stop stop-color=#EE2700 offset=0></stop><stop stop-color=#FF008E offset=1></stop></linearGradient><path d="m344.1 363 97.7 17.2c5.8 2.1 8.2 6.1 7.1 12.1s-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1 0.8-12.8s8.3-4.4 13.7-2.1l55.2 53.6z"clip-rule=evenodd fill-rule=evenodd></path><line x1=428.2 x2=429.1 y1=384.5 y2=378 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=395.2 x2=396.1 y1=379.5 y2=373 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=362.2 x2=363.1 y1=373.5 y2=367.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=324.2 x2=328.4 y1=351.3 y2=347.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=303.2 x2=307.4 y1=331.3 y2=327.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line></g><defs><filter x=73.2 y=113.8 width=280.6 height=317.4 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=73.2 y=113.8 width=280.6 height=317.4 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-672.16 x2=-672.16 y1=165.03 y2=166.03 gradientTransform="matrix(-100.18 48.861 97.976 200.88 -83342 -93.059)"gradientUnits=userSpaceOnUse><stop stop-color=#A17500 offset=0></stop><stop stop-color=#5D2100 offset=1></stop></linearGradient><path d="m192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.1-3 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6s-10.8-51.9-22.1-99.6l-25.3 4.6"clip-rule=evenodd fill-rule=evenodd></path><g stroke=#2F8A00><linearGradient x1=-660.23 x2=-660.23 y1=166.72 y2=167.72 gradientTransform="matrix(92.683 4.8573 -2.0259 38.657 61680 -3088.6)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-661.36 x2=-661.36 y1=164.18 y2=165.18 gradientTransform="matrix(110 5.7648 -6.3599 121.35 73933 -15933)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.4 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20.2 49.6-53.2 49.6-53.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.79 x2=-656.79 y1=165.15 y2=166.15 gradientTransform="matrix(62.954 3.2993 -3.5023 66.828 42156 -8754.1)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9c-0.8-21.9 6-38 20.6-48.2s29.8-15.4 45.5-15.3c-6.1 21.4-14.5 35.8-25.2 43.4s-24.4 14.2-40.9 20.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-663.07 x2=-663.07 y1=165.44 y2=166.44 gradientTransform="matrix(152.47 7.9907 -3.0936 59.029 101884 -4318.7)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c31.9-30 64.1-39.7 96.7-29s50.8 30.4 54.6 59.1c-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-662.57 x2=-662.57 y1=164.44 y2=165.44 gradientTransform="matrix(136.46 7.1517 -5.2163 99.533 91536 -11442)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c35.8-7.6 65.6-0.2 89.2 22s37.7 49 42.3 80.3c-39.8-9.7-68.3-23.8-85.5-42.4s-32.5-38.5-46-59.9z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.43 x2=-656.43 y1=163.86 y2=164.86 gradientTransform="matrix(60.866 3.1899 -8.7773 167.48 41560 -25168)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6s-3.6 63.1 8.7 99.6c27.4-40.3 43.2-69.6 47.4-88s5.6-44.1 4-77.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><path d="m196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4s-9.5 33-11.1 45.1"fill=none stroke-linecap=round stroke-width=8></path><path d="m194.9 185.7c-24.4 1.7-43.8 9-58.1 21.8s-24.7 25.4-31.3 37.8"fill=none stroke-linecap=round stroke-width=8></path><path d="m204.5 176.4c29.7-6.7 52-8.4 67-5.1s26.9 8.6 35.8 15.9"fill=none stroke-linecap=round stroke-width=8></path><path d="m196.5 181.4c20.3 9.9 38.2 20.5 53.9 31.9s27.4 22.1 35.1 32"fill=none stroke-linecap=round stroke-width=8></path></g></g><defs><filter x=50.5 y=399 width=532 height=633 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=50.5 y=399 width=532 height=633 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-666.06 x2=-666.23 y1=163.36 y2=163.75 gradientTransform="matrix(532 0 0 633 354760 -102959)"gradientUnits=userSpaceOnUse><stop stop-color=#FFF400 offset=0></stop><stop stop-color=#3C8700 offset=1></stop></linearGradient><ellipse cx=316.5 cy=715.5 rx=266 ry=316.5></ellipse></g><defs><filter x=391 y=-24 width=288 height=283 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=391 y=-24 width=288 height=283 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-664.56 x2=-664.56 y1=163.79 y2=164.79 gradientTransform="matrix(227 0 0 227 151421 -37204)"gradientUnits=userSpaceOnUse><stop stop-color=#FFDF00 offset=0></stop><stop stop-color=#FF9D00 offset=1></stop></linearGradient><circle cx=565.5 cy=89.5 r=113.5></circle><linearGradient x1=-644.5 x2=-645.77 y1=342 y2=342 gradientTransform="matrix(30 0 0 1 19770 -253)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=427 x2=397 y1=89 y2=89 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-641.56 x2=-642.83 y1=196.02 y2=196.07 gradientTransform="matrix(26.5 0 0 5.5 17439 -1025.5)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=430.5 x2=404 y1=55.5 y2=50 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-643.73 x2=-645 y1=185.83 y2=185.9 gradientTransform="matrix(29 0 0 8 19107 -1361)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=431 x2=402 y1=122 y2=130 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-638.94 x2=-640.22 y1=177.09 y2=177.39 gradientTransform="matrix(24 0 0 13 15783 -2145)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=442 x2=418 y1=153 y2=166 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-633.42 x2=-634.7 y1=172.41 y2=173.31 gradientTransform="matrix(20 0 0 19 13137 -3096)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=464 x2=444 y1=180 y2=199 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-619.05 x2=-619.52 y1=170.82 y2=171.82 gradientTransform="matrix(13.83 0 0 22.85 9050 -3703.4)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=491.4 x2=477.5 y1=203 y2=225.9 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-578.5 x2=-578.63 y1=170.31 y2=171.31 gradientTransform="matrix(7.5 0 0 24.5 4860 -3953)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=524.5 x2=517 y1=219.5 y2=244 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=666.5 x2=666.5 y1=170.31 y2=171.31 gradientTransform="matrix(.5 0 0 24.5 231.5 -3944)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=564.5 x2=565 y1=228.5 y2=253 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12>');
function Su() {
  return ou();
}
function Ni() {
  return iu();
}
function Wt() {
  return su();
}
function Ao() {
  return lu();
}
function Do() {
  return pr();
}
function ku() {
  return (() => {
    const e = pr();
    return e.style.setProperty("transform", "rotate(90deg)"), e;
  })();
}
function Eu() {
  return (() => {
    const e = pr();
    return e.style.setProperty("transform", "rotate(-90deg)"), e;
  })();
}
function _u() {
  return au();
}
function Au() {
  return cu();
}
function Du() {
  return uu();
}
function Fu() {
  return du();
}
function Lu() {
  return fu();
}
function Iu() {
  return gu();
}
function Mu() {
  return hu();
}
function qu() {
  return yu();
}
function Ou(e) {
  return (() => {
    const t = Ri(), n = t.firstChild;
    return U(() => D(n, "stroke", e.theme === "dark" ? "#12B76A" : "#027A48")), t;
  })();
}
function Tu() {
  return vu();
}
function Pu() {
  return mu();
}
function zu(e) {
  return [v(K, {
    get when() {
      return e.checked;
    },
    get children() {
      const t = Ri(), n = t.firstChild;
      return U(() => D(n, "stroke", e.theme === "dark" ? "#9B8AFB" : "#6938EF")), t;
    }
  }), v(K, {
    get when() {
      return !e.checked;
    },
    get children() {
      const t = bu(), n = t.firstChild;
      return U(() => D(n, "stroke", e.theme === "dark" ? "#9B8AFB" : "#6938EF")), t;
    }
  })];
}
function Bu() {
  return xu();
}
function Ku() {
  return $u();
}
function Ru() {
  return pu();
}
function Nu() {
  return wu();
}
function Fo() {
  const e = Re();
  return (() => {
    const t = Cu(), n = t.firstChild, r = n.nextSibling, o = r.nextSibling, i = o.firstChild, l = o.nextSibling, s = l.firstChild, a = l.nextSibling, c = a.nextSibling, h = c.firstChild, f = c.nextSibling, u = f.firstChild, g = f.nextSibling, d = g.nextSibling, y = d.firstChild, m = d.nextSibling, $ = m.firstChild, x = m.nextSibling, b = x.nextSibling, w = b.firstChild, p = b.nextSibling, M = p.firstChild, B = p.nextSibling, _ = B.nextSibling, R = _.firstChild, G = _.nextSibling, z = G.firstChild, Q = G.nextSibling, re = Q.nextSibling, T = re.firstChild, W = re.nextSibling, X = W.firstChild, ee = W.nextSibling, oe = ee.nextSibling, ue = oe.firstChild, be = oe.nextSibling, he = be.firstChild, pe = be.nextSibling, ae = pe.firstChild, j = ae.nextSibling, A = j.nextSibling, te = A.nextSibling, J = te.nextSibling, it = pe.nextSibling, pt = it.firstChild, Ge = it.nextSibling, He = Ge.firstChild, je = Ge.nextSibling, We = je.firstChild, q = We.nextSibling, de = q.nextSibling, we = de.firstChild, se = we.nextSibling, ne = se.nextSibling, ce = ne.nextSibling, xe = ce.nextSibling, Te = xe.nextSibling, st = Te.nextSibling, lt = st.nextSibling, at = lt.nextSibling, ct = at.nextSibling, Pt = ct.nextSibling, un = Pt.nextSibling, zt = je.nextSibling, dn = zt.firstChild, wt = zt.nextSibling, fn = wt.firstChild, Ct = wt.nextSibling, Bt = Ct.firstChild, gn = Bt.nextSibling, Kt = Ct.nextSibling, hn = Kt.firstChild, mt = Kt.nextSibling, yn = mt.firstChild, St = mt.nextSibling, kr = St.firstChild, Er = kr.nextSibling, _r = Er.nextSibling, Ar = _r.nextSibling, Dr = Ar.nextSibling, Fr = Dr.nextSibling, Lr = Fr.nextSibling, Ir = Lr.nextSibling, Mr = Ir.nextSibling, qr = Mr.nextSibling, Or = qr.nextSibling, Tr = Or.nextSibling, Pr = Tr.nextSibling, zr = Pr.nextSibling, Br = zr.nextSibling, Kr = Br.nextSibling, Rr = Kr.nextSibling, Ji = Rr.nextSibling;
    return D(n, "id", `a-${e}`), D(r, "fill", `url(#a-${e})`), D(i, "id", `am-${e}`), D(l, "id", `b-${e}`), D(s, "filter", `url(#am-${e})`), D(a, "mask", `url(#b-${e})`), D(h, "id", `ah-${e}`), D(f, "id", `k-${e}`), D(u, "filter", `url(#ah-${e})`), D(g, "mask", `url(#k-${e})`), D(y, "id", `ae-${e}`), D(m, "id", `j-${e}`), D($, "filter", `url(#ae-${e})`), D(x, "mask", `url(#j-${e})`), D(w, "id", `ai-${e}`), D(p, "id", `i-${e}`), D(M, "filter", `url(#ai-${e})`), D(B, "mask", `url(#i-${e})`), D(R, "id", `aj-${e}`), D(G, "id", `h-${e}`), D(z, "filter", `url(#aj-${e})`), D(Q, "mask", `url(#h-${e})`), D(T, "id", `ag-${e}`), D(W, "id", `g-${e}`), D(X, "filter", `url(#ag-${e})`), D(ee, "mask", `url(#g-${e})`), D(ue, "id", `af-${e}`), D(be, "id", `f-${e}`), D(he, "filter", `url(#af-${e})`), D(pe, "mask", `url(#f-${e})`), D(te, "id", `m-${e}`), D(J, "fill", `url(#m-${e})`), D(pt, "id", `ak-${e}`), D(Ge, "id", `e-${e}`), D(He, "filter", `url(#ak-${e})`), D(je, "mask", `url(#e-${e})`), D(We, "id", `n-${e}`), D(q, "fill", `url(#n-${e})`), D(we, "id", `r-${e}`), D(se, "fill", `url(#r-${e})`), D(ne, "id", `s-${e}`), D(ce, "fill", `url(#s-${e})`), D(xe, "id", `q-${e}`), D(Te, "fill", `url(#q-${e})`), D(st, "id", `p-${e}`), D(lt, "fill", `url(#p-${e})`), D(at, "id", `o-${e}`), D(ct, "fill", `url(#o-${e})`), D(Pt, "id", `l-${e}`), D(un, "fill", `url(#l-${e})`), D(dn, "id", `al-${e}`), D(wt, "id", `d-${e}`), D(fn, "filter", `url(#al-${e})`), D(Ct, "mask", `url(#d-${e})`), D(Bt, "id", `u-${e}`), D(gn, "fill", `url(#u-${e})`), D(hn, "id", `ad-${e}`), D(mt, "id", `c-${e}`), D(yn, "filter", `url(#ad-${e})`), D(St, "mask", `url(#c-${e})`), D(kr, "id", `t-${e}`), D(Er, "fill", `url(#t-${e})`), D(_r, "id", `v-${e}`), D(Ar, "stroke", `url(#v-${e})`), D(Dr, "id", `aa-${e}`), D(Fr, "stroke", `url(#aa-${e})`), D(Lr, "id", `w-${e}`), D(Ir, "stroke", `url(#w-${e})`), D(Mr, "id", `ac-${e}`), D(qr, "stroke", `url(#ac-${e})`), D(Or, "id", `ab-${e}`), D(Tr, "stroke", `url(#ab-${e})`), D(Pr, "id", `y-${e}`), D(zr, "stroke", `url(#y-${e})`), D(Br, "id", `x-${e}`), D(Kr, "stroke", `url(#x-${e})`), D(Rr, "id", `z-${e}`), D(Ji, "stroke", `url(#z-${e})`), t;
  })();
}
var Ui = Ce({
  client: void 0,
  onlineManager: void 0,
  queryFlavor: "",
  version: ""
});
function ge() {
  return Se(Ui);
}
var Vi = Ce(
  () => "dark"
);
function me() {
  return Se(Vi);
}
var Uu = /* @__PURE__ */ O('<span><svg width=16 height=16 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M6 12L10 8L6 4"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'), Vu = /* @__PURE__ */ O('<button title="Copy object to clipboard">'), Gu = /* @__PURE__ */ O('<button title="Remove all items"aria-label="Remove all items">'), Hu = /* @__PURE__ */ O('<button title="Delete item"aria-label="Delete item">'), ju = /* @__PURE__ */ O('<button title="Toggle value"aria-label="Toggle value">'), Ut = /* @__PURE__ */ O("<div>"), Wu = /* @__PURE__ */ O("<div><button> <span></span> <span> "), Qu = /* @__PURE__ */ O("<input>"), Lo = /* @__PURE__ */ O("<span>"), Yu = /* @__PURE__ */ O("<div><span>:"), Xu = /* @__PURE__ */ O("<div><div><button> [<!>...<!>]");
function Zu(e, t) {
  if (t < 1)
    return [];
  let n = 0;
  const r = [];
  for (; n < e.length; )
    r.push(e.slice(n, n + t)), n = n + t;
  return r;
}
var Io = (e) => {
  const t = me(), n = F(() => t() === "dark" ? Tt : Ot);
  return (() => {
    const r = Uu();
    return U(() => L(r, I(n().expander, k`
          transform: rotate(${e.expanded ? 90 : 0}deg);
        `, e.expanded && k`
            & svg {
              top: -1px;
            }
          `))), r;
  })();
}, Ju = (e) => {
  const t = me(), n = F(() => t() === "dark" ? Tt : Ot), [r, o] = P("NoCopy");
  return (() => {
    const i = Vu();
    return ls(i, "click", r() === "NoCopy" ? () => {
      navigator.clipboard.writeText(as(e.value)).then(() => {
        o("SuccessCopy"), setTimeout(() => {
          o("NoCopy");
        }, 1500);
      }, (l) => {
        o("ErrorCopy"), setTimeout(() => {
          o("NoCopy");
        }, 1500);
      });
    } : void 0, !0), E(i, v(cs, {
      get children() {
        return [v(Pn, {
          get when() {
            return r() === "NoCopy";
          },
          get children() {
            return v(qu, {});
          }
        }), v(Pn, {
          get when() {
            return r() === "SuccessCopy";
          },
          get children() {
            return v(Ou, {
              get theme() {
                return t();
              }
            });
          }
        }), v(Pn, {
          get when() {
            return r() === "ErrorCopy";
          },
          get children() {
            return v(Tu, {});
          }
        })];
      }
    })), U((l) => {
      const s = n().actionButton, a = `${r() === "NoCopy" ? "Copy object to clipboard" : r() === "SuccessCopy" ? "Object copied to clipboard" : "Error copying object to clipboard"}`;
      return s !== l._v$ && L(i, l._v$ = s), a !== l._v$2 && D(i, "aria-label", l._v$2 = a), l;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), i;
  })();
}, ed = (e) => {
  const t = me(), n = F(() => t() === "dark" ? Tt : Ot), r = ge().client;
  return (() => {
    const o = Gu();
    return o.$$click = () => {
      const i = e.activeQuery.state.data, l = sr(i, e.dataPath, []);
      r.setQueryData(e.activeQuery.queryKey, l);
    }, E(o, v(Pu, {})), U(() => L(o, n().actionButton)), o;
  })();
}, Mo = (e) => {
  const t = me(), n = F(() => t() === "dark" ? Tt : Ot), r = ge().client;
  return (() => {
    const o = Hu();
    return o.$$click = () => {
      const i = e.activeQuery.state.data, l = us(i, e.dataPath);
      r.setQueryData(e.activeQuery.queryKey, l);
    }, E(o, v(Ni, {})), U(() => L(o, I(n().actionButton))), o;
  })();
}, td = (e) => {
  const t = me(), n = F(() => t() === "dark" ? Tt : Ot), r = ge().client;
  return (() => {
    const o = ju();
    return o.$$click = () => {
      const i = e.activeQuery.state.data, l = sr(i, e.dataPath, !e.value);
      r.setQueryData(e.activeQuery.queryKey, l);
    }, E(o, v(zu, {
      get theme() {
        return t();
      },
      get checked() {
        return e.value;
      }
    })), U(() => L(o, I(n().actionButton, k`
          width: ${S.size[3.5]};
          height: ${S.size[3.5]};
        `))), o;
  })();
};
function qo(e) {
  return Symbol.iterator in e;
}
function ut(e) {
  const t = me(), n = F(() => t() === "dark" ? Tt : Ot), r = ge().client, [o, i] = P((e.defaultExpanded || []).includes(e.label)), l = () => i((g) => !g), [s, a] = P([]), c = F(() => Array.isArray(e.value) ? e.value.map((g, d) => ({
    label: d.toString(),
    value: g
  })) : e.value !== null && typeof e.value == "object" && qo(e.value) && typeof e.value[Symbol.iterator] == "function" ? e.value instanceof Map ? Array.from(e.value, ([g, d]) => ({
    label: g,
    value: d
  })) : Array.from(e.value, (g, d) => ({
    label: d.toString(),
    value: g
  })) : typeof e.value == "object" && e.value !== null ? Object.entries(e.value).map(([g, d]) => ({
    label: g,
    value: d
  })) : []), h = F(() => Array.isArray(e.value) ? "array" : e.value !== null && typeof e.value == "object" && qo(e.value) && typeof e.value[Symbol.iterator] == "function" ? "Iterable" : typeof e.value == "object" && e.value !== null ? "object" : typeof e.value), f = F(() => Zu(c(), 100)), u = e.dataPath ?? [];
  return (() => {
    const g = Ut();
    return E(g, v(K, {
      get when() {
        return f().length;
      },
      get children() {
        return [(() => {
          const d = Wu(), y = d.firstChild, m = y.firstChild, $ = m.nextSibling, x = $.nextSibling, b = x.nextSibling, w = b.firstChild;
          return y.$$click = () => l(), E(y, v(Io, {
            get expanded() {
              return o();
            }
          }), m), E($, () => e.label), E(b, () => String(h()).toLowerCase() === "iterable" ? "(Iterable) " : "", w), E(b, () => c().length, w), E(b, () => c().length > 1 ? "items" : "item", null), E(d, v(K, {
            get when() {
              return e.editable;
            },
            get children() {
              const p = Ut();
              return E(p, v(Ju, {
                get value() {
                  return e.value;
                }
              }), null), E(p, v(K, {
                get when() {
                  return e.itemsDeletable && e.activeQuery !== void 0;
                },
                get children() {
                  return v(Mo, {
                    get activeQuery() {
                      return e.activeQuery;
                    },
                    dataPath: u
                  });
                }
              }), null), E(p, v(K, {
                get when() {
                  return h() === "array" && e.activeQuery !== void 0;
                },
                get children() {
                  return v(ed, {
                    get activeQuery() {
                      return e.activeQuery;
                    },
                    dataPath: u
                  });
                }
              }), null), U(() => L(p, n().actions)), p;
            }
          }), null), U((p) => {
            const M = n().expanderButtonContainer, B = n().expanderButton, _ = n().info;
            return M !== p._v$3 && L(d, p._v$3 = M), B !== p._v$4 && L(y, p._v$4 = B), _ !== p._v$5 && L(b, p._v$5 = _), p;
          }, {
            _v$3: void 0,
            _v$4: void 0,
            _v$5: void 0
          }), d;
        })(), v(K, {
          get when() {
            return o();
          },
          get children() {
            return [v(K, {
              get when() {
                return f().length === 1;
              },
              get children() {
                const d = Ut();
                return E(d, v(wn, {
                  get each() {
                    return c();
                  },
                  by: (y) => y.label,
                  children: (y) => v(ut, {
                    get defaultExpanded() {
                      return e.defaultExpanded;
                    },
                    get label() {
                      return y().label;
                    },
                    get value() {
                      return y().value;
                    },
                    get editable() {
                      return e.editable;
                    },
                    get dataPath() {
                      return [...u, y().label];
                    },
                    get activeQuery() {
                      return e.activeQuery;
                    },
                    get itemsDeletable() {
                      return h() === "array" || h() === "Iterable" || h() === "object";
                    }
                  })
                })), U(() => L(d, n().subEntry)), d;
              }
            }), v(K, {
              get when() {
                return f().length > 1;
              },
              get children() {
                const d = Ut();
                return E(d, v(is, {
                  get each() {
                    return f();
                  },
                  children: (y, m) => (() => {
                    const $ = Xu(), x = $.firstChild, b = x.firstChild, w = b.firstChild, p = w.nextSibling, M = p.nextSibling, B = M.nextSibling;
                    return B.nextSibling, b.$$click = () => a((_) => _.includes(m) ? _.filter((R) => R !== m) : [..._, m]), E(b, v(Io, {
                      get expanded() {
                        return s().includes(m);
                      }
                    }), w), E(b, m * 100, p), E(b, m * 100 + 100 - 1, B), E(x, v(K, {
                      get when() {
                        return s().includes(m);
                      },
                      get children() {
                        const _ = Ut();
                        return E(_, v(wn, {
                          get each() {
                            return y();
                          },
                          by: (R) => R.label,
                          children: (R) => v(ut, {
                            get defaultExpanded() {
                              return e.defaultExpanded;
                            },
                            get label() {
                              return R().label;
                            },
                            get value() {
                              return R().value;
                            },
                            get editable() {
                              return e.editable;
                            },
                            get dataPath() {
                              return [...u, R().label];
                            },
                            get activeQuery() {
                              return e.activeQuery;
                            }
                          })
                        })), U(() => L(_, n().subEntry)), _;
                      }
                    }), null), U((_) => {
                      const R = n().entry, G = n().expanderButton;
                      return R !== _._v$10 && L(x, _._v$10 = R), G !== _._v$11 && L(b, _._v$11 = G), _;
                    }, {
                      _v$10: void 0,
                      _v$11: void 0
                    }), $;
                  })()
                })), U(() => L(d, n().subEntry)), d;
              }
            })];
          }
        })];
      }
    }), null), E(g, v(K, {
      get when() {
        return f().length === 0;
      },
      get children() {
        const d = Yu(), y = d.firstChild, m = y.firstChild;
        return E(y, () => e.label, m), E(d, v(K, {
          get when() {
            return F(() => !!(e.editable && e.activeQuery !== void 0))() && (h() === "string" || h() === "number" || h() === "boolean");
          },
          get fallback() {
            return (() => {
              const $ = Lo();
              return E($, () => $n(e.value)), U(() => L($, n().value)), $;
            })();
          },
          get children() {
            return [v(K, {
              get when() {
                return F(() => !!(e.editable && e.activeQuery !== void 0))() && (h() === "string" || h() === "number");
              },
              get children() {
                const $ = Qu();
                return $.addEventListener("change", (x) => {
                  const b = e.activeQuery.state.data, w = sr(b, u, h() === "number" ? x.target.valueAsNumber : x.target.value);
                  r.setQueryData(e.activeQuery.queryKey, w);
                }), U((x) => {
                  const b = h() === "number" ? "number" : "text", w = I(n().value, n().editableInput);
                  return b !== x._v$6 && D($, "type", x._v$6 = b), w !== x._v$7 && L($, x._v$7 = w), x;
                }, {
                  _v$6: void 0,
                  _v$7: void 0
                }), U(() => $.value = e.value), $;
              }
            }), v(K, {
              get when() {
                return h() === "boolean";
              },
              get children() {
                const $ = Lo();
                return E($, v(td, {
                  get activeQuery() {
                    return e.activeQuery;
                  },
                  dataPath: u,
                  get value() {
                    return e.value;
                  }
                }), null), E($, () => $n(e.value), null), U(() => L($, I(n().value, n().actions, n().editableInput))), $;
              }
            })];
          }
        }), null), E(d, v(K, {
          get when() {
            return e.editable && e.itemsDeletable && e.activeQuery !== void 0;
          },
          get children() {
            return v(Mo, {
              get activeQuery() {
                return e.activeQuery;
              },
              dataPath: u
            });
          }
        }), null), U(($) => {
          const x = n().row, b = n().label;
          return x !== $._v$8 && L(d, $._v$8 = x), b !== $._v$9 && L(y, $._v$9 = b), $;
        }, {
          _v$8: void 0,
          _v$9: void 0
        }), d;
      }
    }), null), U(() => L(g, n().entry)), g;
  })();
}
var Gi = (e) => {
  const {
    colors: t,
    font: n,
    size: r,
    border: o
  } = S, i = (l, s) => e === "light" ? l : s;
  return {
    entry: k`
      & * {
        font-size: ${n.size.xs};
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
      }
      position: relative;
      outline: none;
      word-break: break-word;
    `,
    subEntry: k`
      margin: 0 0 0 0.5em;
      padding-left: 0.75em;
      border-left: 2px solid ${i(t.gray[300], t.darkGray[400])};
      /* outline: 1px solid ${t.teal[400]}; */
    `,
    expander: k`
      & path {
        stroke: ${t.gray[400]};
      }
      & svg {
        width: ${r[3]};
        height: ${r[3]};
      }
      display: inline-flex;
      align-items: center;
      transition: all 0.1s ease;
      /* outline: 1px solid ${t.blue[400]}; */
    `,
    expanderButtonContainer: k`
      display: flex;
      align-items: center;
      line-height: ${r[4]};
      min-height: ${r[4]};
      gap: ${r[2]};
    `,
    expanderButton: k`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      height: ${r[5]};
      background: transparent;
      border: none;
      padding: 0;
      display: inline-flex;
      align-items: center;
      gap: ${r[1]};
      position: relative;
      /* outline: 1px solid ${t.green[400]}; */

      &:focus-visible {
        border-radius: ${o.radius.xs};
        outline: 2px solid ${t.blue[800]};
      }

      & svg {
        position: relative;
        left: 1px;
      }
    `,
    info: k`
      color: ${i(t.gray[500], t.gray[500])};
      font-size: ${n.size.xs};
      margin-left: ${r[1]};
      /* outline: 1px solid ${t.yellow[400]}; */
    `,
    label: k`
      color: ${i(t.gray[700], t.gray[300])};
      white-space: nowrap;
    `,
    value: k`
      color: ${i(t.purple[600], t.purple[400])};
      flex-grow: 1;
    `,
    actions: k`
      display: inline-flex;
      gap: ${r[2]};
      align-items: center;
    `,
    row: k`
      display: inline-flex;
      gap: ${r[2]};
      width: 100%;
      margin: ${r[0.25]} 0px;
      line-height: ${r[4.5]};
      align-items: center;
    `,
    editableInput: k`
      border: none;
      padding: ${r[0.5]} ${r[1]} ${r[0.5]} ${r[1.5]};
      flex-grow: 1;
      border-radius: ${o.radius.xs};
      background-color: ${i(t.gray[200], t.darkGray[500])};

      &:hover {
        background-color: ${i(t.gray[300], t.darkGray[600])};
      }
    `,
    actionButton: k`
      background-color: transparent;
      color: ${i(t.gray[500], t.gray[500])};
      border: none;
      display: inline-flex;
      padding: 0px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: ${r[3]};
      height: ${r[3]};
      position: relative;
      z-index: 1;

      &:hover svg {
        color: ${i(t.gray[600], t.gray[400])};
      }

      &:focus-visible {
        border-radius: ${o.radius.xs};
        outline: 2px solid ${t.blue[800]};
        outline-offset: 2px;
      }
    `
  };
}, Ot = Gi("light"), Tt = Gi("dark");
tn(["click"]);
var nd = /* @__PURE__ */ O('<div><div aria-hidden=true></div><button aria-label="Open Tanstack query devtools"class=tsqd-open-btn>'), On = /* @__PURE__ */ O("<div>"), rd = /* @__PURE__ */ O('<aside aria-label="Tanstack query devtools"><div></div><button aria-label="Close tanstack query devtools">'), od = /* @__PURE__ */ O("<select name=tsqd-queries-filter-sort>"), id = /* @__PURE__ */ O("<select name=tsqd-mutations-filter-sort>"), sd = /* @__PURE__ */ O("<span>Asc"), ld = /* @__PURE__ */ O("<span>Desc"), ad = /* @__PURE__ */ O('<button aria-label="Open in picture-in-picture mode"title="Open in picture-in-picture mode">'), cd = /* @__PURE__ */ O("<div>Settings"), ud = /* @__PURE__ */ O("<span>Position"), dd = /* @__PURE__ */ O("<span>Top"), fd = /* @__PURE__ */ O("<span>Bottom"), gd = /* @__PURE__ */ O("<span>Left"), hd = /* @__PURE__ */ O("<span>Right"), yd = /* @__PURE__ */ O("<span>Theme"), vd = /* @__PURE__ */ O("<span>Light"), md = /* @__PURE__ */ O("<span>Dark"), bd = /* @__PURE__ */ O("<span>System"), xd = /* @__PURE__ */ O("<div><div class=tsqd-queries-container>"), $d = /* @__PURE__ */ O("<div><div class=tsqd-mutations-container>"), pd = /* @__PURE__ */ O('<div><div><div><button aria-label="Close Tanstack query devtools"><span>TANSTACK</span><span> v</span></button></div></div><div><div><div><input aria-label="Filter queries by query key"type=text placeholder=Filter name=tsqd-query-filter-input></div><div></div><button class=tsqd-query-filter-sort-order-btn></button></div><div><button aria-label="Clear query cache"></button><button>'), Oo = /* @__PURE__ */ O("<option>Sort by "), wd = /* @__PURE__ */ O("<div class=tsqd-query-disabled-indicator>disabled"), Hi = /* @__PURE__ */ O("<button><div></div><code class=tsqd-query-hash>"), Cd = /* @__PURE__ */ O("<div role=tooltip id=tsqd-status-tooltip>"), Sd = /* @__PURE__ */ O("<span>"), kd = /* @__PURE__ */ O("<button><span></span><span>"), Ed = /* @__PURE__ */ O("<button><span></span> Error"), _d = /* @__PURE__ */ O('<div><span></span>Trigger Error<select><option value=""disabled selected>'), Ad = /* @__PURE__ */ O('<div><div>Query Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span></span></div><div class=tsqd-query-details-observers-count><span>Observers:</span><span></span></div><div class=tsqd-query-details-last-updated><span>Last Updated:</span><span></span></div></div><div>Actions</div><div><button><span></span>Refetch</button><button><span></span>Invalidate</button><button><span></span>Reset</button><button><span></span>Remove</button><button><span></span> Loading</button></div><div>Data Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-data-explorer"></div><div>Query Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">'), Dd = /* @__PURE__ */ O("<option>"), Fd = /* @__PURE__ */ O('<div><div>Mutation Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span></span></div><div class=tsqd-query-details-last-updated><span>Submitted At:</span><span></span></div></div><div>Variables Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Context Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Data Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Mutations Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">'), Ld = 1024, en = 796, wr = 700, Id = "bottom-right", or = "bottom", Md = "system", qd = !1, Cr = 500, ji = 500, Od = Object.keys(Gn)[0], To = 1, Td = Object.keys(Hn)[0], [Ae, Tn] = P(null), [dt, Wi] = P(null), [Je, Qi] = P(0), Yi = Ce(void 0), Pd = (e) => {
  const [t, n] = P(null), r = () => {
    const l = t();
    l != null && (l.close(), n(null));
  }, o = async (l, s) => {
    if (t() != null)
      return;
    const a = window.open("", "TSQD-Devtools-Panel", `width=${l},height=${s},popup`);
    if (!a)
      throw new Error("Failed to open popup. Please allow popups for this site to view the devtools in picture-in-picture mode.");
    a.document.head.innerHTML = "", a.document.body.innerHTML = "", ds(a.document), a.document.title = "TanStack Query Devtools", a.document.body.style.margin = "0", a.addEventListener("pagehide", () => {
      e.setLocalStore("pip_open", "false"), n(null);
    }), [...document.styleSheets].forEach((c) => {
      try {
        const h = [...c.cssRules].map((d) => d.cssText).join(""), f = document.createElement("style"), u = c.ownerNode;
        let g = "";
        u && "id" in u && (g = u.id), g && f.setAttribute("id", g), f.textContent = h, a.document.head.appendChild(f);
      } catch {
        const f = document.createElement("link");
        if (c.href == null)
          return;
        f.rel = "stylesheet", f.type = c.type, f.media = c.media.toString(), f.href = c.href, a.document.head.appendChild(f);
      }
    }), tn(["focusin", "focusout", "pointermove", "keydown", "pointerdown", "pointerup", "click", "mousedown", "input"], a.document), e.setLocalStore("pip_open", "true"), n(a);
  };
  N(() => {
    (e.localStore.pip_open ?? "false") === "true" && o(Number(window.innerWidth), Number(e.localStore.height || Cr));
  }), N(() => {
    const l = document.getElementById("_goober"), s = t();
    if (l && s) {
      const a = new MutationObserver(() => {
        const c = s.document.getElementById("_goober");
        c && (c.textContent = l.textContent);
      });
      a.observe(l, {
        childList: !0,
        // observe direct children
        subtree: !0,
        // and lower descendants too
        characterDataOldValue: !0
        // pass old data to callback
      }), V(() => {
        a.disconnect();
      });
    }
  });
  const i = F(() => ({
    pipWindow: t(),
    requestPipWindow: o,
    closePipWindow: r
  }));
  return v(Yi.Provider, {
    value: i,
    get children() {
      return e.children;
    }
  });
}, Sr = () => F(() => {
  const t = Se(Yi);
  if (!t)
    throw new Error("usePiPWindow must be used within a PiPProvider");
  return t();
}), zd = (e) => {
  const [t, n] = Ns({
    prefix: "TanstackQueryDevtools"
  }), r = ns(), o = F(() => {
    const i = t.theme_preference || Md;
    return i !== "system" ? i : r();
  });
  return v(Ui.Provider, {
    value: e,
    get children() {
      return v(Pd, {
        localStore: t,
        setLocalStore: n,
        get children() {
          return v(Vi.Provider, {
            value: o,
            get children() {
              return v(Bd, {
                localStore: t,
                setLocalStore: n
              });
            }
          });
        }
      });
    }
  });
}, Zd = zd, Bd = (e) => {
  const t = me(), n = F(() => t() === "dark" ? Ue : Ne), r = Sr(), o = F(() => ge().buttonPosition || Id), i = F(() => e.localStore.open === "true" ? !0 : e.localStore.open === "false" ? !1 : ge().initialIsOpen || qd), l = F(() => e.localStore.position || ge().position || or);
  let s;
  N(() => {
    const c = s.parentElement, h = e.localStore.height || Cr, f = e.localStore.width || ji, u = l();
    c.style.setProperty("--tsqd-panel-height", `${u === "top" ? "-" : ""}${h}px`), c.style.setProperty("--tsqd-panel-width", `${u === "left" ? "-" : ""}${f}px`);
  }), It(() => {
    const c = () => {
      const h = s.parentElement, f = getComputedStyle(h).fontSize;
      h.style.setProperty("--tsqd-font-size", f);
    };
    c(), window.addEventListener("focus", c), V(() => {
      window.removeEventListener("focus", c);
    });
  });
  const a = F(() => e.localStore.pip_open ?? "false");
  return [v(K, {
    get when() {
      return F(() => !!r().pipWindow)() && a() == "true";
    },
    get children() {
      return v(Po, {
        get mount() {
          var c;
          return (c = r().pipWindow) == null ? void 0 : c.document.body;
        },
        get children() {
          return v(Kd, {
            get children() {
              return v(Xi, {
                get localStore() {
                  return e.localStore;
                },
                get setLocalStore() {
                  return e.setLocalStore;
                }
              });
            }
          });
        }
      });
    }
  }), (() => {
    const c = On(), h = s;
    return typeof h == "function" ? nn(h, c) : s = c, E(c, v(Zr, {
      name: "tsqd-panel-transition",
      get children() {
        return v(K, {
          get when() {
            return F(() => !!(i() && !r().pipWindow))() && a() == "false";
          },
          get children() {
            return v(Rd, {
              get localStore() {
                return e.localStore;
              },
              get setLocalStore() {
                return e.setLocalStore;
              }
            });
          }
        });
      }
    }), null), E(c, v(Zr, {
      name: "tsqd-button-transition",
      get children() {
        return v(K, {
          get when() {
            return !i();
          },
          get children() {
            const f = nd(), u = f.firstChild, g = u.nextSibling;
            return E(u, v(Fo, {})), g.$$click = () => e.setLocalStore("open", "true"), E(g, v(Fo, {})), U(() => L(f, I(n().devtoolsBtn, n()[`devtoolsBtn-position-${o()}`], "tsqd-open-btn-container"))), f;
          }
        });
      }
    }), null), U(() => L(c, I(k`
            & .tsqd-panel-transition-exit-active,
            & .tsqd-panel-transition-enter-active {
              transition:
                opacity 0.3s,
                transform 0.3s;
            }

            & .tsqd-panel-transition-exit-to,
            & .tsqd-panel-transition-enter {
              ${l() === "top" || l() === "bottom" ? "transform: translateY(var(--tsqd-panel-height));" : "transform: translateX(var(--tsqd-panel-width));"}
            }

            & .tsqd-button-transition-exit-active,
            & .tsqd-button-transition-enter-active {
              transition:
                opacity 0.3s,
                transform 0.3s;
              opacity: 1;
            }

            & .tsqd-button-transition-exit-to,
            & .tsqd-button-transition-enter {
              transform: ${o() === "relative" ? "none;" : o() === "top-left" ? "translateX(-72px);" : o() === "top-right" ? "translateX(72px);" : "translateY(72px);"};
              opacity: 0;
            }
          `, "tsqd-transitions-container"))), c;
  })()];
}, Kd = (e) => {
  const t = Sr(), n = me(), r = F(() => n() === "dark" ? Ue : Ne), o = () => {
    const {
      colors: i
    } = S, l = (s, a) => n() === "dark" ? a : s;
    return Je() < en ? k`
        flex-direction: column;
        background-color: ${l(i.gray[300], i.gray[600])};
      ` : k`
      flex-direction: row;
      background-color: ${l(i.gray[200], i.darkGray[900])};
    `;
  };
  return N(() => {
    const i = t().pipWindow, l = () => {
      i && Qi(i.innerWidth);
    };
    i && (i.addEventListener("resize", l), l()), V(() => {
      i && i.removeEventListener("resize", l);
    });
  }), (() => {
    const i = On();
    return i.style.setProperty("--tsqd-font-size", "16px"), i.style.setProperty("max-height", "100vh"), i.style.setProperty("height", "100vh"), i.style.setProperty("width", "100vw"), E(i, () => e.children), U(() => L(i, I(r().panel, o(), {
      [k`
            min-width: min-content;
          `]: Je() < wr
    }, "tsqd-main-panel"))), i;
  })();
}, Rd = (e) => {
  const t = me(), n = F(() => t() === "dark" ? Ue : Ne), [r, o] = P(!1), i = F(() => e.localStore.position || ge().position || or), l = (c) => {
    const h = c.currentTarget.parentElement;
    if (!h)
      return;
    o(!0);
    const {
      height: f,
      width: u
    } = h.getBoundingClientRect(), g = c.clientX, d = c.clientY;
    let y = 0;
    const m = Ur(3.5), $ = Ur(12), x = (w) => {
      if (w.preventDefault(), i() === "left" || i() === "right") {
        const p = i() === "right" ? g - w.clientX : w.clientX - g;
        y = Math.round(u + p), y < $ && (y = $), e.setLocalStore("width", String(Math.round(y)));
        const M = h.getBoundingClientRect().width;
        Number(e.localStore.width) < M && e.setLocalStore("width", String(M));
      } else {
        const p = i() === "bottom" ? d - w.clientY : w.clientY - d;
        y = Math.round(f + p), y < m && (y = m, Tn(null)), e.setLocalStore("height", String(Math.round(y)));
      }
    }, b = () => {
      r() && o(!1), document.removeEventListener("mousemove", x, !1), document.removeEventListener("mouseUp", b, !1);
    };
    document.addEventListener("mousemove", x, !1), document.addEventListener("mouseup", b, !1);
  };
  let s;
  It(() => {
    js(s, ({
      width: c
    }, h) => {
      h === s && Qi(c);
    });
  }), N(() => {
    var d, y;
    const c = (y = (d = s.parentElement) == null ? void 0 : d.parentElement) == null ? void 0 : y.parentElement;
    if (!c)
      return;
    const h = e.localStore.position || or, f = ss("padding", h), u = e.localStore.position === "left" || e.localStore.position === "right", g = (({
      padding: m,
      paddingTop: $,
      paddingBottom: x,
      paddingLeft: b,
      paddingRight: w
    }) => ({
      padding: m,
      paddingTop: $,
      paddingBottom: x,
      paddingLeft: b,
      paddingRight: w
    }))(c.style);
    c.style[f] = `${u ? e.localStore.width : e.localStore.height}px`, V(() => {
      Object.entries(g).forEach(([m, $]) => {
        c.style[m] = $;
      });
    });
  });
  const a = () => {
    const {
      colors: c
    } = S, h = (f, u) => t() === "dark" ? u : f;
    return Je() < en ? k`
        flex-direction: column;
        background-color: ${h(c.gray[300], c.gray[600])};
      ` : k`
      flex-direction: row;
      background-color: ${h(c.gray[200], c.darkGray[900])};
    `;
  };
  return (() => {
    const c = rd(), h = c.firstChild, f = h.nextSibling, u = s;
    return typeof u == "function" ? nn(u, c) : s = c, h.$$mousedown = l, f.$$click = () => e.setLocalStore("open", "false"), E(f, v(Wt, {})), E(c, v(Xi, {
      get localStore() {
        return e.localStore;
      },
      get setLocalStore() {
        return e.setLocalStore;
      }
    }), null), U((g) => {
      const d = I(n().panel, n()[`panel-position-${i()}`], a(), {
        [k`
            min-width: min-content;
          `]: Je() < wr && (i() === "right" || i() === "left")
      }, "tsqd-main-panel"), y = i() === "bottom" || i() === "top" ? `${e.localStore.height || Cr}px` : "auto", m = i() === "right" || i() === "left" ? `${e.localStore.width || ji}px` : "auto", $ = I(n().dragHandle, n()[`dragHandle-position-${i()}`], "tsqd-drag-handle"), x = I(n().closeBtn, n()[`closeBtn-position-${i()}`], "tsqd-minimize-btn");
      return d !== g._v$ && L(c, g._v$ = d), y !== g._v$2 && ((g._v$2 = y) != null ? c.style.setProperty("height", y) : c.style.removeProperty("height")), m !== g._v$3 && ((g._v$3 = m) != null ? c.style.setProperty("width", m) : c.style.removeProperty("width")), $ !== g._v$4 && L(h, g._v$4 = $), x !== g._v$5 && L(f, g._v$5 = x), g;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0,
      _v$4: void 0,
      _v$5: void 0
    }), c;
  })();
}, Xi = (e) => {
  Wd(), Qd();
  let t;
  const n = me(), r = F(() => n() === "dark" ? Ue : Ne), o = Sr(), [i, l] = P("queries"), s = F(() => e.localStore.sort || Od), a = F(() => Number(e.localStore.sortOrder) || To), c = F(() => e.localStore.mutationSort || Td), h = F(() => Number(e.localStore.mutationSortOrder) || To), [f, u] = P(!1), g = F(() => Gn[s()]), d = F(() => Hn[c()]), y = F(() => ge().onlineManager), m = F(() => ge().client.getQueryCache()), $ = F(() => ge().client.getMutationCache()), x = ve((_) => _().getAll().length, !1), b = F(Be(() => [x(), e.localStore.filter, s(), a()], () => {
    const _ = m().getAll(), R = e.localStore.filter ? _.filter((z) => Gr(z.queryHash, e.localStore.filter || "").passed) : [..._];
    return g() ? R.sort((z, Q) => g()(z, Q) * a()) : R;
  })), w = ze((_) => _().getAll().length, !1), p = F(Be(() => [w(), e.localStore.mutationFilter, c(), h()], () => {
    const _ = $().getAll(), R = e.localStore.mutationFilter ? _.filter((z) => {
      const Q = `${z.options.mutationKey ? JSON.stringify(z.options.mutationKey) + " - " : ""}${new Date(z.state.submittedAt).toLocaleString()}`;
      return Gr(Q, e.localStore.mutationFilter || "").passed;
    }) : [..._];
    return d() ? R.sort((z, Q) => d()(z, Q) * h()) : R;
  })), M = (_) => {
    e.setLocalStore("position", _);
  }, B = (_) => {
    const G = getComputedStyle(t).getPropertyValue("--tsqd-font-size");
    _.style.setProperty("--tsqd-font-size", G);
  };
  return [(() => {
    const _ = pd(), R = _.firstChild, G = R.firstChild, z = G.firstChild, Q = z.firstChild, re = Q.nextSibling, T = re.firstChild, W = R.nextSibling, X = W.firstChild, ee = X.firstChild, oe = ee.firstChild, ue = ee.nextSibling, be = ue.nextSibling, he = X.nextSibling, pe = he.firstChild, ae = pe.nextSibling, j = t;
    return typeof j == "function" ? nn(j, _) : t = _, z.$$click = () => {
      o().pipWindow || e.setLocalStore("open", "false");
    }, E(re, () => ge().queryFlavor, T), E(re, () => ge().version, null), E(G, v(Pe.Root, {
      get class() {
        return I(r().viewToggle);
      },
      get value() {
        return i();
      },
      onChange: (A) => {
        l(A), Tn(null), Wi(null);
      },
      get children() {
        return [v(Pe.Item, {
          value: "queries",
          class: "tsqd-radio-toggle",
          get children() {
            return [v(Pe.ItemInput, {}), v(Pe.ItemControl, {
              get children() {
                return v(Pe.ItemIndicator, {});
              }
            }), v(Pe.ItemLabel, {
              title: "Toggle Queries View",
              children: "Queries"
            })];
          }
        }), v(Pe.Item, {
          value: "mutations",
          class: "tsqd-radio-toggle",
          get children() {
            return [v(Pe.ItemInput, {}), v(Pe.ItemControl, {
              get children() {
                return v(Pe.ItemIndicator, {});
              }
            }), v(Pe.ItemLabel, {
              title: "Toggle Mutations View",
              children: "Mutations"
            })];
          }
        })];
      }
    }), null), E(R, v(K, {
      get when() {
        return i() === "queries";
      },
      get children() {
        return v(Vd, {});
      }
    }), null), E(R, v(K, {
      get when() {
        return i() === "mutations";
      },
      get children() {
        return v(Gd, {});
      }
    }), null), E(ee, v(Su, {}), oe), oe.$$input = (A) => {
      i() === "queries" ? e.setLocalStore("filter", A.currentTarget.value) : e.setLocalStore("mutationFilter", A.currentTarget.value);
    }, E(ue, v(K, {
      get when() {
        return i() === "queries";
      },
      get children() {
        const A = od();
        return A.addEventListener("change", (te) => {
          e.setLocalStore("sort", te.currentTarget.value);
        }), E(A, () => Object.keys(Gn).map((te) => (() => {
          const J = Oo();
          return J.firstChild, J.value = te, E(J, te, null), J;
        })())), U(() => A.value = s()), A;
      }
    }), null), E(ue, v(K, {
      get when() {
        return i() === "mutations";
      },
      get children() {
        const A = id();
        return A.addEventListener("change", (te) => {
          e.setLocalStore("mutationSort", te.currentTarget.value);
        }), E(A, () => Object.keys(Hn).map((te) => (() => {
          const J = Oo();
          return J.firstChild, J.value = te, E(J, te, null), J;
        })())), U(() => A.value = c()), A;
      }
    }), null), E(ue, v(Wt, {}), null), be.$$click = () => {
      i() === "queries" ? e.setLocalStore("sortOrder", String(a() * -1)) : e.setLocalStore("mutationSortOrder", String(h() * -1));
    }, E(be, v(K, {
      get when() {
        return (i() === "queries" ? a() : h()) === 1;
      },
      get children() {
        return [sd(), v(Ao, {})];
      }
    }), null), E(be, v(K, {
      get when() {
        return (i() === "queries" ? a() : h()) === -1;
      },
      get children() {
        return [ld(), v(Do, {})];
      }
    }), null), pe.$$click = () => {
      i() === "queries" ? m().clear() : $().clear();
    }, E(pe, v(Ni, {})), ae.$$click = () => {
      f() ? (y().setOnline(!0), u(!1)) : (y().setOnline(!1), u(!0));
    }, E(ae, (() => {
      const A = F(() => !!f());
      return () => A() ? v(Lu, {}) : v(Fu, {});
    })()), E(he, v(K, {
      get when() {
        return !o().pipWindow;
      },
      get children() {
        const A = ad();
        return A.$$click = () => {
          o().requestPipWindow(Number(window.innerWidth), Number(e.localStore.height ?? 500));
        }, E(A, v(Mu, {})), U(() => L(A, I(r().actionsBtn, "tsqd-actions-btn", "tsqd-action-open-pip"))), A;
      }
    }), null), E(he, v(fe.Root, {
      gutter: 4,
      get children() {
        return [v(fe.Trigger, {
          get class() {
            return I(r().actionsBtn, "tsqd-actions-btn", "tsqd-action-settings");
          },
          get children() {
            return v(Iu, {});
          }
        }), v(fe.Portal, {
          ref: (A) => B(A),
          get mount() {
            return F(() => !!o().pipWindow)() ? o().pipWindow.document.body : document.body;
          },
          get children() {
            return v(fe.Content, {
              get class() {
                return I(r().settingsMenu, "tsqd-settings-menu");
              },
              get children() {
                return [(() => {
                  const A = cd();
                  return U(() => L(A, I(r().settingsMenuHeader, "tsqd-settings-menu-header"))), A;
                })(), v(fe.Sub, {
                  overlap: !0,
                  gutter: 8,
                  shift: -4,
                  get children() {
                    return [v(fe.SubTrigger, {
                      get class() {
                        return I(r().settingsSubTrigger, "tsqd-settings-menu-sub-trigger", "tsqd-settings-menu-sub-trigger-position");
                      },
                      get children() {
                        return [ud(), v(Wt, {})];
                      }
                    }), v(fe.Portal, {
                      ref: (A) => B(A),
                      get mount() {
                        return F(() => !!o().pipWindow)() ? o().pipWindow.document.body : document.body;
                      },
                      get children() {
                        return v(fe.SubContent, {
                          get class() {
                            return I(r().settingsMenu, "tsqd-settings-submenu");
                          },
                          get children() {
                            return [v(fe.Item, {
                              onSelect: () => {
                                M("top");
                              },
                              as: "button",
                              get class() {
                                return I(r().settingsSubButton, "tsqd-settings-menu-position-btn", "tsqd-settings-menu-position-btn-top");
                              },
                              get children() {
                                return [dd(), v(Ao, {})];
                              }
                            }), v(fe.Item, {
                              onSelect: () => {
                                M("bottom");
                              },
                              as: "button",
                              get class() {
                                return I(r().settingsSubButton, "tsqd-settings-menu-position-btn", "tsqd-settings-menu-position-btn-bottom");
                              },
                              get children() {
                                return [fd(), v(Do, {})];
                              }
                            }), v(fe.Item, {
                              onSelect: () => {
                                M("left");
                              },
                              as: "button",
                              get class() {
                                return I(r().settingsSubButton, "tsqd-settings-menu-position-btn", "tsqd-settings-menu-position-btn-left");
                              },
                              get children() {
                                return [gd(), v(ku, {})];
                              }
                            }), v(fe.Item, {
                              onSelect: () => {
                                M("right");
                              },
                              as: "button",
                              get class() {
                                return I(r().settingsSubButton, "tsqd-settings-menu-position-btn", "tsqd-settings-menu-position-btn-right");
                              },
                              get children() {
                                return [hd(), v(Eu, {})];
                              }
                            })];
                          }
                        });
                      }
                    })];
                  }
                }), v(fe.Sub, {
                  overlap: !0,
                  gutter: 8,
                  shift: -4,
                  get children() {
                    return [v(fe.SubTrigger, {
                      get class() {
                        return I(r().settingsSubTrigger, "tsqd-settings-menu-sub-trigger", "tsqd-settings-menu-sub-trigger-position");
                      },
                      get children() {
                        return [yd(), v(Wt, {})];
                      }
                    }), v(fe.Portal, {
                      ref: (A) => B(A),
                      get mount() {
                        return F(() => !!o().pipWindow)() ? o().pipWindow.document.body : document.body;
                      },
                      get children() {
                        return v(fe.SubContent, {
                          get class() {
                            return I(r().settingsMenu, "tsqd-settings-submenu");
                          },
                          get children() {
                            return [v(fe.Item, {
                              onSelect: () => {
                                e.setLocalStore("theme_preference", "light");
                              },
                              as: "button",
                              get class() {
                                return I(r().settingsSubButton, e.localStore.theme_preference === "light" && r().themeSelectedButton, "tsqd-settings-menu-position-btn", "tsqd-settings-menu-position-btn-top");
                              },
                              get children() {
                                return [vd(), v(_u, {})];
                              }
                            }), v(fe.Item, {
                              onSelect: () => {
                                e.setLocalStore("theme_preference", "dark");
                              },
                              as: "button",
                              get class() {
                                return I(r().settingsSubButton, e.localStore.theme_preference === "dark" && r().themeSelectedButton, "tsqd-settings-menu-position-btn", "tsqd-settings-menu-position-btn-bottom");
                              },
                              get children() {
                                return [md(), v(Au, {})];
                              }
                            }), v(fe.Item, {
                              onSelect: () => {
                                e.setLocalStore("theme_preference", "system");
                              },
                              as: "button",
                              get class() {
                                return I(r().settingsSubButton, e.localStore.theme_preference === "system" && r().themeSelectedButton, "tsqd-settings-menu-position-btn", "tsqd-settings-menu-position-btn-left");
                              },
                              get children() {
                                return [bd(), v(Du, {})];
                              }
                            })];
                          }
                        });
                      }
                    })];
                  }
                })];
              }
            });
          }
        })];
      }
    }), null), E(_, v(K, {
      get when() {
        return i() === "queries";
      },
      get children() {
        const A = xd(), te = A.firstChild;
        return E(te, v(wn, {
          by: (J) => J.queryHash,
          get each() {
            return b();
          },
          children: (J) => v(Nd, {
            get query() {
              return J();
            }
          })
        })), U(() => L(A, I(r().overflowQueryContainer, "tsqd-queries-overflow-container"))), A;
      }
    }), null), E(_, v(K, {
      get when() {
        return i() === "mutations";
      },
      get children() {
        const A = $d(), te = A.firstChild;
        return E(te, v(wn, {
          by: (J) => J.mutationId,
          get each() {
            return p();
          },
          children: (J) => v(Ud, {
            get mutation() {
              return J();
            }
          })
        })), U(() => L(A, I(r().overflowQueryContainer, "tsqd-mutations-overflow-container"))), A;
      }
    }), null), U((A) => {
      const te = I(r().queriesContainer, Je() < en && (Ae() || dt()) && k`
              height: 50%;
              max-height: 50%;
            `, Je() < en && !(Ae() || dt()) && k`
              height: 100%;
              max-height: 100%;
            `, "tsqd-queries-container"), J = I(r().row, "tsqd-header"), it = r().logoAndToggleContainer, pt = I(r().logo, "tsqd-text-logo-container"), Ge = I(r().tanstackLogo, "tsqd-text-logo-tanstack"), He = I(r().queryFlavorLogo, "tsqd-text-logo-query-flavor"), je = I(r().row, "tsqd-filters-actions-container"), We = I(r().filtersContainer, "tsqd-filters-container"), q = I(r().filterInput, "tsqd-query-filter-textfield-container"), de = I("tsqd-query-filter-textfield"), we = I(r().filterSelect, "tsqd-query-filter-sort-container"), se = `Sort order ${(i() === "queries" ? a() : h()) === -1 ? "descending" : "ascending"}`, ne = (i() === "queries" ? a() : h()) === -1, ce = I(r().actionsContainer, "tsqd-actions-container"), xe = I(r().actionsBtn, "tsqd-actions-btn", "tsqd-action-clear-cache"), Te = `Clear ${i()} cache`, st = I(r().actionsBtn, f() && r().actionsBtnOffline, "tsqd-actions-btn", "tsqd-action-mock-offline-behavior"), lt = `${f() ? "Unset offline mocking behavior" : "Mock offline behavior"}`, at = f(), ct = `${f() ? "Unset offline mocking behavior" : "Mock offline behavior"}`;
      return te !== A._v$6 && L(_, A._v$6 = te), J !== A._v$7 && L(R, A._v$7 = J), it !== A._v$8 && L(G, A._v$8 = it), pt !== A._v$9 && L(z, A._v$9 = pt), Ge !== A._v$10 && L(Q, A._v$10 = Ge), He !== A._v$11 && L(re, A._v$11 = He), je !== A._v$12 && L(W, A._v$12 = je), We !== A._v$13 && L(X, A._v$13 = We), q !== A._v$14 && L(ee, A._v$14 = q), de !== A._v$15 && L(oe, A._v$15 = de), we !== A._v$16 && L(ue, A._v$16 = we), se !== A._v$17 && D(be, "aria-label", A._v$17 = se), ne !== A._v$18 && D(be, "aria-pressed", A._v$18 = ne), ce !== A._v$19 && L(he, A._v$19 = ce), xe !== A._v$20 && L(pe, A._v$20 = xe), Te !== A._v$21 && D(pe, "title", A._v$21 = Te), st !== A._v$22 && L(ae, A._v$22 = st), lt !== A._v$23 && D(ae, "aria-label", A._v$23 = lt), at !== A._v$24 && D(ae, "aria-pressed", A._v$24 = at), ct !== A._v$25 && D(ae, "title", A._v$25 = ct), A;
    }, {
      _v$6: void 0,
      _v$7: void 0,
      _v$8: void 0,
      _v$9: void 0,
      _v$10: void 0,
      _v$11: void 0,
      _v$12: void 0,
      _v$13: void 0,
      _v$14: void 0,
      _v$15: void 0,
      _v$16: void 0,
      _v$17: void 0,
      _v$18: void 0,
      _v$19: void 0,
      _v$20: void 0,
      _v$21: void 0,
      _v$22: void 0,
      _v$23: void 0,
      _v$24: void 0,
      _v$25: void 0
    }), U(() => oe.value = i() === "queries" ? e.localStore.filter || "" : e.localStore.mutationFilter || ""), _;
  })(), v(K, {
    get when() {
      return F(() => i() === "queries")() && Ae();
    },
    get children() {
      return v(Hd, {});
    }
  }), v(K, {
    get when() {
      return F(() => i() === "mutations")() && dt();
    },
    get children() {
      return v(jd, {});
    }
  })];
}, Nd = (e) => {
  const t = me(), n = F(() => t() === "dark" ? Ue : Ne), {
    colors: r,
    alpha: o
  } = S, i = (u, g) => t() === "dark" ? g : u, l = ve((u) => {
    var g;
    return (g = u().find({
      queryKey: e.query.queryKey
    })) == null ? void 0 : g.state;
  }, !0, (u) => u.query.queryHash === e.query.queryHash), s = ve((u) => {
    var g;
    return ((g = u().find({
      queryKey: e.query.queryKey
    })) == null ? void 0 : g.isDisabled()) ?? !1;
  }, !0, (u) => u.query.queryHash === e.query.queryHash), a = ve((u) => {
    var g;
    return ((g = u().find({
      queryKey: e.query.queryKey
    })) == null ? void 0 : g.isStale()) ?? !1;
  }, !0, (u) => u.query.queryHash === e.query.queryHash), c = ve((u) => {
    var g;
    return ((g = u().find({
      queryKey: e.query.queryKey
    })) == null ? void 0 : g.getObserversCount()) ?? 0;
  }, !0, (u) => u.query.queryHash === e.query.queryHash), h = F(() => rs({
    queryState: l(),
    observerCount: c(),
    isStale: a()
  })), f = () => h() === "gray" ? k`
        background-color: ${i(r[h()][200], r[h()][700])};
        color: ${i(r[h()][700], r[h()][300])};
      ` : k`
      background-color: ${i(r[h()][200] + o[80], r[h()][900])};
      color: ${i(r[h()][800], r[h()][300])};
    `;
  return v(K, {
    get when() {
      return l();
    },
    get children() {
      const u = Hi(), g = u.firstChild, d = g.nextSibling;
      return u.$$click = () => Tn(e.query.queryHash === Ae() ? null : e.query.queryHash), E(g, c), E(d, () => e.query.queryHash), E(u, v(K, {
        get when() {
          return s();
        },
        get children() {
          return wd();
        }
      }), null), U((y) => {
        const m = I(n().queryRow, Ae() === e.query.queryHash && n().selectedQueryRow, "tsqd-query-row"), $ = `Query key ${e.query.queryHash}`, x = I(f(), "tsqd-query-observer-count");
        return m !== y._v$26 && L(u, y._v$26 = m), $ !== y._v$27 && D(u, "aria-label", y._v$27 = $), x !== y._v$28 && L(g, y._v$28 = x), y;
      }, {
        _v$26: void 0,
        _v$27: void 0,
        _v$28: void 0
      }), u;
    }
  });
}, Ud = (e) => {
  const t = me(), n = F(() => t() === "dark" ? Ue : Ne), {
    colors: r,
    alpha: o
  } = S, i = (f, u) => t() === "dark" ? u : f, l = ze((f) => {
    const g = f().getAll().find((d) => d.mutationId === e.mutation.mutationId);
    return g == null ? void 0 : g.state;
  }), s = ze((f) => {
    const g = f().getAll().find((d) => d.mutationId === e.mutation.mutationId);
    return g ? g.state.isPaused : !1;
  }), a = ze((f) => {
    const g = f().getAll().find((d) => d.mutationId === e.mutation.mutationId);
    return g ? g.state.status : "idle";
  }), c = F(() => At({
    isPaused: s(),
    status: a()
  })), h = () => c() === "gray" ? k`
        background-color: ${i(r[c()][200], r[c()][700])};
        color: ${i(r[c()][700], r[c()][300])};
      ` : k`
      background-color: ${i(r[c()][200] + o[80], r[c()][900])};
      color: ${i(r[c()][800], r[c()][300])};
    `;
  return v(K, {
    get when() {
      return l();
    },
    get children() {
      const f = Hi(), u = f.firstChild, g = u.nextSibling;
      return f.$$click = () => {
        Wi(e.mutation.mutationId === dt() ? null : e.mutation.mutationId);
      }, E(u, v(K, {
        get when() {
          return c() === "purple";
        },
        get children() {
          return v(Nu, {});
        }
      }), null), E(u, v(K, {
        get when() {
          return c() === "green";
        },
        get children() {
          return v(Bu, {});
        }
      }), null), E(u, v(K, {
        get when() {
          return c() === "red";
        },
        get children() {
          return v(Ru, {});
        }
      }), null), E(u, v(K, {
        get when() {
          return c() === "yellow";
        },
        get children() {
          return v(Ku, {});
        }
      }), null), E(g, v(K, {
        get when() {
          return e.mutation.options.mutationKey;
        },
        get children() {
          return [F(() => JSON.stringify(e.mutation.options.mutationKey)), " -", " "];
        }
      }), null), E(g, () => new Date(e.mutation.state.submittedAt).toLocaleString(), null), U((d) => {
        const y = I(n().queryRow, dt() === e.mutation.mutationId && n().selectedQueryRow, "tsqd-query-row"), m = `Mutation submitted at ${new Date(e.mutation.state.submittedAt).toLocaleString()}`, $ = I(h(), "tsqd-query-observer-count");
        return y !== d._v$29 && L(f, d._v$29 = y), m !== d._v$30 && D(f, "aria-label", d._v$30 = m), $ !== d._v$31 && L(u, d._v$31 = $), d;
      }, {
        _v$29: void 0,
        _v$30: void 0,
        _v$31: void 0
      }), f;
    }
  });
}, Vd = () => {
  const e = ve((s) => s().getAll().filter((a) => kt(a) === "stale").length), t = ve((s) => s().getAll().filter((a) => kt(a) === "fresh").length), n = ve((s) => s().getAll().filter((a) => kt(a) === "fetching").length), r = ve((s) => s().getAll().filter((a) => kt(a) === "paused").length), o = ve((s) => s().getAll().filter((a) => kt(a) === "inactive").length), i = me(), l = F(() => i() === "dark" ? Ue : Ne);
  return (() => {
    const s = On();
    return E(s, v(Ze, {
      label: "Fresh",
      color: "green",
      get count() {
        return t();
      }
    }), null), E(s, v(Ze, {
      label: "Fetching",
      color: "blue",
      get count() {
        return n();
      }
    }), null), E(s, v(Ze, {
      label: "Paused",
      color: "purple",
      get count() {
        return r();
      }
    }), null), E(s, v(Ze, {
      label: "Stale",
      color: "yellow",
      get count() {
        return e();
      }
    }), null), E(s, v(Ze, {
      label: "Inactive",
      color: "gray",
      get count() {
        return o();
      }
    }), null), U(() => L(s, I(l().queryStatusContainer, "tsqd-query-status-container"))), s;
  })();
}, Gd = () => {
  const e = ze((l) => l().getAll().filter((s) => At({
    isPaused: s.state.isPaused,
    status: s.state.status
  }) === "green").length), t = ze((l) => l().getAll().filter((s) => At({
    isPaused: s.state.isPaused,
    status: s.state.status
  }) === "yellow").length), n = ze((l) => l().getAll().filter((s) => At({
    isPaused: s.state.isPaused,
    status: s.state.status
  }) === "purple").length), r = ze((l) => l().getAll().filter((s) => At({
    isPaused: s.state.isPaused,
    status: s.state.status
  }) === "red").length), o = me(), i = F(() => o() === "dark" ? Ue : Ne);
  return (() => {
    const l = On();
    return E(l, v(Ze, {
      label: "Paused",
      color: "purple",
      get count() {
        return n();
      }
    }), null), E(l, v(Ze, {
      label: "Pending",
      color: "yellow",
      get count() {
        return t();
      }
    }), null), E(l, v(Ze, {
      label: "Success",
      color: "green",
      get count() {
        return e();
      }
    }), null), E(l, v(Ze, {
      label: "Error",
      color: "red",
      get count() {
        return r();
      }
    }), null), U(() => L(l, I(i().queryStatusContainer, "tsqd-query-status-container"))), l;
  })();
}, Ze = (e) => {
  const t = me(), n = F(() => t() === "dark" ? Ue : Ne), {
    colors: r,
    alpha: o
  } = S, i = (u, g) => t() === "dark" ? g : u;
  let l;
  const [s, a] = P(!1), [c, h] = P(!1), f = F(() => !(Ae() && Je() < Ld && Je() > en || Je() < wr));
  return (() => {
    const u = kd(), g = u.firstChild, d = g.nextSibling, y = l;
    return typeof y == "function" ? nn(y, u) : l = u, u.addEventListener("mouseleave", () => {
      a(!1), h(!1);
    }), u.addEventListener("mouseenter", () => a(!0)), u.addEventListener("blur", () => h(!1)), u.addEventListener("focus", () => h(!0)), ir(u, H({
      get disabled() {
        return f();
      },
      get class() {
        return I(n().queryStatusTag, !f() && k`
            cursor: pointer;
            &:hover {
              background: ${i(r.gray[200], r.darkGray[400])}${o[80]};
            }
          `, "tsqd-query-status-tag", `tsqd-query-status-tag-${e.label.toLowerCase()}`);
      }
    }, () => s() || c() ? {
      "aria-describedby": "tsqd-status-tooltip"
    } : {}), !1, !0), E(u, v(K, {
      get when() {
        return F(() => !f())() && (s() || c());
      },
      get children() {
        const m = Cd();
        return E(m, () => e.label), U(() => L(m, I(n().statusTooltip, "tsqd-query-status-tooltip"))), m;
      }
    }), g), E(u, v(K, {
      get when() {
        return f();
      },
      get children() {
        const m = Sd();
        return E(m, () => e.label), U(() => L(m, I(n().queryStatusTagLabel, "tsqd-query-status-tag-label"))), m;
      }
    }), d), E(d, () => e.count), U((m) => {
      const $ = I(k`
            width: ${S.size[1.5]};
            height: ${S.size[1.5]};
            border-radius: ${S.border.radius.full};
            background-color: ${S.colors[e.color][500]};
          `, "tsqd-query-status-tag-dot"), x = I(n().queryStatusCount, e.count > 0 && e.color !== "gray" && k`
              background-color: ${i(r[e.color][100], r[e.color][900])};
              color: ${i(r[e.color][700], r[e.color][300])};
            `, "tsqd-query-status-tag-count");
      return $ !== m._v$32 && L(g, m._v$32 = $), x !== m._v$33 && L(d, m._v$33 = x), m;
    }, {
      _v$32: void 0,
      _v$33: void 0
    }), u;
  })();
}, Hd = () => {
  const e = me(), t = F(() => e() === "dark" ? Ue : Ne), {
    colors: n
  } = S, r = (w, p) => e() === "dark" ? p : w, o = ge().client, [i, l] = P(!1), s = F(() => ge().errorTypes || []), a = ve((w) => w().getAll().find((p) => p.queryHash === Ae()), !1), c = ve((w) => w().getAll().find((p) => p.queryHash === Ae()), !1), h = ve((w) => {
    var p;
    return (p = w().getAll().find((M) => M.queryHash === Ae())) == null ? void 0 : p.state;
  }, !1), f = ve((w) => {
    var p;
    return (p = w().getAll().find((M) => M.queryHash === Ae())) == null ? void 0 : p.state.data;
  }, !1), u = ve((w) => {
    const p = w().getAll().find((M) => M.queryHash === Ae());
    return p ? kt(p) : "inactive";
  }), g = ve((w) => {
    const p = w().getAll().find((M) => M.queryHash === Ae());
    return p ? p.state.status : "pending";
  }), d = ve((w) => {
    var p;
    return ((p = w().getAll().find((M) => M.queryHash === Ae())) == null ? void 0 : p.getObserversCount()) ?? 0;
  }), y = F(() => os(u())), m = () => {
    var p;
    const w = (p = a()) == null ? void 0 : p.fetch();
    w == null || w.catch(() => {
    });
  }, $ = (w) => {
    const p = (w == null ? void 0 : w.initializer(a())) ?? new Error("Unknown error from devtools"), M = a().options;
    a().setState({
      status: "error",
      error: p,
      fetchMeta: {
        ...a().state.fetchMeta,
        __previousQueryOptions: M
      }
    });
  }, x = () => {
    var w, p;
    (p = a()) == null || p.fetch(((w = a()) == null ? void 0 : w.state.fetchMeta).__previousQueryOptions, {
      // Make sure this fetch will cancel the previous one
      cancelRefetch: !0
    });
  };
  N(() => {
    u() !== "fetching" && l(!1);
  });
  const b = () => y() === "gray" ? k`
        background-color: ${r(n[y()][200], n[y()][700])};
        color: ${r(n[y()][700], n[y()][300])};
        border-color: ${r(n[y()][400], n[y()][600])};
      ` : k`
      background-color: ${r(n[y()][100], n[y()][900])};
      color: ${r(n[y()][700], n[y()][300])};
      border-color: ${r(n[y()][400], n[y()][600])};
    `;
  return v(K, {
    get when() {
      return F(() => !!a())() && h();
    },
    get children() {
      const w = Ad(), p = w.firstChild, M = p.nextSibling, B = M.firstChild, _ = B.firstChild, R = _.firstChild, G = _.nextSibling, z = B.nextSibling, Q = z.firstChild, re = Q.nextSibling, T = z.nextSibling, W = T.firstChild, X = W.nextSibling, ee = M.nextSibling, oe = ee.nextSibling, ue = oe.firstChild, be = ue.firstChild, he = ue.nextSibling, pe = he.firstChild, ae = he.nextSibling, j = ae.firstChild, A = ae.nextSibling, te = A.firstChild, J = A.nextSibling, it = J.firstChild, pt = it.nextSibling, Ge = oe.nextSibling, He = Ge.nextSibling, je = He.nextSibling, We = je.nextSibling;
      return E(R, () => $n(a().queryKey, !0)), E(G, u), E(re, d), E(X, () => new Date(h().dataUpdatedAt).toLocaleTimeString()), ue.$$click = m, he.$$click = () => o.invalidateQueries(a()), ae.$$click = () => o.resetQueries(a()), A.$$click = () => {
        o.removeQueries(a()), Tn(null);
      }, J.$$click = () => {
        var q;
        if (((q = a()) == null ? void 0 : q.state.data) === void 0)
          l(!0), x();
        else {
          const de = a();
          if (!de)
            return;
          const we = de.options;
          de.fetch({
            ...we,
            queryFn: () => new Promise(() => {
            }),
            gcTime: -1
          }), de.setState({
            data: void 0,
            status: "pending",
            fetchMeta: {
              ...de.state.fetchMeta,
              __previousQueryOptions: we
            }
          });
        }
      }, E(J, () => g() === "pending" ? "Restore" : "Trigger", pt), E(oe, v(K, {
        get when() {
          return s().length === 0 || g() === "error";
        },
        get children() {
          const q = Ed(), de = q.firstChild, we = de.nextSibling;
          return q.$$click = () => {
            a().state.error ? o.resetQueries(a()) : $();
          }, E(q, () => g() === "error" ? "Restore" : "Trigger", we), U((se) => {
            const ne = I(k`
                  color: ${r(n.red[500], n.red[400])};
                `, "tsqd-query-details-actions-btn", "tsqd-query-details-action-error"), ce = g() === "pending", xe = k`
                  background-color: ${r(n.red[500], n.red[400])};
                `;
            return ne !== se._v$34 && L(q, se._v$34 = ne), ce !== se._v$35 && (q.disabled = se._v$35 = ce), xe !== se._v$36 && L(de, se._v$36 = xe), se;
          }, {
            _v$34: void 0,
            _v$35: void 0,
            _v$36: void 0
          }), q;
        }
      }), null), E(oe, v(K, {
        get when() {
          return !(s().length === 0 || g() === "error");
        },
        get children() {
          const q = _d(), de = q.firstChild, we = de.nextSibling, se = we.nextSibling;
          return se.firstChild, se.addEventListener("change", (ne) => {
            const ce = s().find((xe) => xe.name === ne.currentTarget.value);
            $(ce);
          }), E(se, v(zo, {
            get each() {
              return s();
            },
            children: (ne) => (() => {
              const ce = Dd();
              return E(ce, () => ne.name), U(() => ce.value = ne.name), ce;
            })()
          }), null), E(q, v(Wt, {}), null), U((ne) => {
            const ce = I(t().actionsSelect, "tsqd-query-details-actions-btn", "tsqd-query-details-action-error-multiple"), xe = k`
                  background-color: ${S.colors.red[400]};
                `, Te = g() === "pending";
            return ce !== ne._v$37 && L(q, ne._v$37 = ce), xe !== ne._v$38 && L(de, ne._v$38 = xe), Te !== ne._v$39 && (se.disabled = ne._v$39 = Te), ne;
          }, {
            _v$37: void 0,
            _v$38: void 0,
            _v$39: void 0
          }), q;
        }
      }), null), E(He, v(ut, {
        label: "Data",
        defaultExpanded: ["Data"],
        get value() {
          return f();
        },
        editable: !0,
        get activeQuery() {
          return a();
        }
      })), E(We, v(ut, {
        label: "Query",
        defaultExpanded: ["Query", "queryKey"],
        get value() {
          return c();
        }
      })), U((q) => {
        const de = I(t().detailsContainer, "tsqd-query-details-container"), we = I(t().detailsHeader, "tsqd-query-details-header"), se = I(t().detailsBody, "tsqd-query-details-summary-container"), ne = I(t().queryDetailsStatus, b()), ce = I(t().detailsHeader, "tsqd-query-details-header"), xe = I(t().actionsBody, "tsqd-query-details-actions-container"), Te = I(k`
                color: ${r(n.blue[600], n.blue[400])};
              `, "tsqd-query-details-actions-btn", "tsqd-query-details-action-refetch"), st = u() === "fetching", lt = k`
                background-color: ${r(n.blue[600], n.blue[400])};
              `, at = I(k`
                color: ${r(n.yellow[600], n.yellow[400])};
              `, "tsqd-query-details-actions-btn", "tsqd-query-details-action-invalidate"), ct = g() === "pending", Pt = k`
                background-color: ${r(n.yellow[600], n.yellow[400])};
              `, un = I(k`
                color: ${r(n.gray[600], n.gray[300])};
              `, "tsqd-query-details-actions-btn", "tsqd-query-details-action-reset"), zt = g() === "pending", dn = k`
                background-color: ${r(n.gray[600], n.gray[400])};
              `, wt = I(k`
                color: ${r(n.pink[500], n.pink[400])};
              `, "tsqd-query-details-actions-btn", "tsqd-query-details-action-remove"), fn = u() === "fetching", Ct = k`
                background-color: ${r(n.pink[500], n.pink[400])};
              `, Bt = I(k`
                color: ${r(n.cyan[500], n.cyan[400])};
              `, "tsqd-query-details-actions-btn", "tsqd-query-details-action-loading"), gn = i(), Kt = k`
                background-color: ${r(n.cyan[500], n.cyan[400])};
              `, hn = I(t().detailsHeader, "tsqd-query-details-header"), mt = S.size[2], yn = I(t().detailsHeader, "tsqd-query-details-header"), St = S.size[2];
        return de !== q._v$40 && L(w, q._v$40 = de), we !== q._v$41 && L(p, q._v$41 = we), se !== q._v$42 && L(M, q._v$42 = se), ne !== q._v$43 && L(G, q._v$43 = ne), ce !== q._v$44 && L(ee, q._v$44 = ce), xe !== q._v$45 && L(oe, q._v$45 = xe), Te !== q._v$46 && L(ue, q._v$46 = Te), st !== q._v$47 && (ue.disabled = q._v$47 = st), lt !== q._v$48 && L(be, q._v$48 = lt), at !== q._v$49 && L(he, q._v$49 = at), ct !== q._v$50 && (he.disabled = q._v$50 = ct), Pt !== q._v$51 && L(pe, q._v$51 = Pt), un !== q._v$52 && L(ae, q._v$52 = un), zt !== q._v$53 && (ae.disabled = q._v$53 = zt), dn !== q._v$54 && L(j, q._v$54 = dn), wt !== q._v$55 && L(A, q._v$55 = wt), fn !== q._v$56 && (A.disabled = q._v$56 = fn), Ct !== q._v$57 && L(te, q._v$57 = Ct), Bt !== q._v$58 && L(J, q._v$58 = Bt), gn !== q._v$59 && (J.disabled = q._v$59 = gn), Kt !== q._v$60 && L(it, q._v$60 = Kt), hn !== q._v$61 && L(Ge, q._v$61 = hn), mt !== q._v$62 && ((q._v$62 = mt) != null ? He.style.setProperty("padding", mt) : He.style.removeProperty("padding")), yn !== q._v$63 && L(je, q._v$63 = yn), St !== q._v$64 && ((q._v$64 = St) != null ? We.style.setProperty("padding", St) : We.style.removeProperty("padding")), q;
      }, {
        _v$40: void 0,
        _v$41: void 0,
        _v$42: void 0,
        _v$43: void 0,
        _v$44: void 0,
        _v$45: void 0,
        _v$46: void 0,
        _v$47: void 0,
        _v$48: void 0,
        _v$49: void 0,
        _v$50: void 0,
        _v$51: void 0,
        _v$52: void 0,
        _v$53: void 0,
        _v$54: void 0,
        _v$55: void 0,
        _v$56: void 0,
        _v$57: void 0,
        _v$58: void 0,
        _v$59: void 0,
        _v$60: void 0,
        _v$61: void 0,
        _v$62: void 0,
        _v$63: void 0,
        _v$64: void 0
      }), w;
    }
  });
}, jd = () => {
  const e = me(), t = F(() => e() === "dark" ? Ue : Ne), {
    colors: n
  } = S, r = (c, h) => e() === "dark" ? h : c, o = ze((c) => {
    const f = c().getAll().find((u) => u.mutationId === dt());
    return f ? f.state.isPaused : !1;
  }), i = ze((c) => {
    const f = c().getAll().find((u) => u.mutationId === dt());
    return f ? f.state.status : "idle";
  }), l = F(() => At({
    isPaused: o(),
    status: i()
  })), s = ze((c) => c().getAll().find((h) => h.mutationId === dt()), !1), a = () => l() === "gray" ? k`
        background-color: ${r(n[l()][200], n[l()][700])};
        color: ${r(n[l()][700], n[l()][300])};
        border-color: ${r(n[l()][400], n[l()][600])};
      ` : k`
      background-color: ${r(n[l()][100], n[l()][900])};
      color: ${r(n[l()][700], n[l()][300])};
      border-color: ${r(n[l()][400], n[l()][600])};
    `;
  return v(K, {
    get when() {
      return s();
    },
    get children() {
      const c = Fd(), h = c.firstChild, f = h.nextSibling, u = f.firstChild, g = u.firstChild, d = g.firstChild, y = g.nextSibling, m = u.nextSibling, $ = m.firstChild, x = $.nextSibling, b = f.nextSibling, w = b.nextSibling, p = w.nextSibling, M = p.nextSibling, B = M.nextSibling, _ = B.nextSibling, R = _.nextSibling, G = R.nextSibling;
      return E(d, v(K, {
        get when() {
          return s().options.mutationKey;
        },
        fallback: "No mutationKey found",
        get children() {
          return $n(s().options.mutationKey, !0);
        }
      })), E(y, v(K, {
        get when() {
          return l() === "purple";
        },
        children: "pending"
      }), null), E(y, v(K, {
        get when() {
          return l() !== "purple";
        },
        get children() {
          return i();
        }
      }), null), E(x, () => new Date(s().state.submittedAt).toLocaleTimeString()), E(w, v(ut, {
        label: "Variables",
        defaultExpanded: ["Variables"],
        get value() {
          return s().state.variables;
        }
      })), E(M, v(ut, {
        label: "Context",
        defaultExpanded: ["Context"],
        get value() {
          return s().state.context;
        }
      })), E(_, v(ut, {
        label: "Data",
        defaultExpanded: ["Data"],
        get value() {
          return s().state.data;
        }
      })), E(G, v(ut, {
        label: "Mutation",
        defaultExpanded: ["Mutation"],
        get value() {
          return s();
        }
      })), U((z) => {
        const Q = I(t().detailsContainer, "tsqd-query-details-container"), re = I(t().detailsHeader, "tsqd-query-details-header"), T = I(t().detailsBody, "tsqd-query-details-summary-container"), W = I(t().queryDetailsStatus, a()), X = I(t().detailsHeader, "tsqd-query-details-header"), ee = S.size[2], oe = I(t().detailsHeader, "tsqd-query-details-header"), ue = S.size[2], be = I(t().detailsHeader, "tsqd-query-details-header"), he = S.size[2], pe = I(t().detailsHeader, "tsqd-query-details-header"), ae = S.size[2];
        return Q !== z._v$65 && L(c, z._v$65 = Q), re !== z._v$66 && L(h, z._v$66 = re), T !== z._v$67 && L(f, z._v$67 = T), W !== z._v$68 && L(y, z._v$68 = W), X !== z._v$69 && L(b, z._v$69 = X), ee !== z._v$70 && ((z._v$70 = ee) != null ? w.style.setProperty("padding", ee) : w.style.removeProperty("padding")), oe !== z._v$71 && L(p, z._v$71 = oe), ue !== z._v$72 && ((z._v$72 = ue) != null ? M.style.setProperty("padding", ue) : M.style.removeProperty("padding")), be !== z._v$73 && L(B, z._v$73 = be), he !== z._v$74 && ((z._v$74 = he) != null ? _.style.setProperty("padding", he) : _.style.removeProperty("padding")), pe !== z._v$75 && L(R, z._v$75 = pe), ae !== z._v$76 && ((z._v$76 = ae) != null ? G.style.setProperty("padding", ae) : G.style.removeProperty("padding")), z;
      }, {
        _v$65: void 0,
        _v$66: void 0,
        _v$67: void 0,
        _v$68: void 0,
        _v$69: void 0,
        _v$70: void 0,
        _v$71: void 0,
        _v$72: void 0,
        _v$73: void 0,
        _v$74: void 0,
        _v$75: void 0,
        _v$76: void 0
      }), c;
    }
  });
}, Fn = /* @__PURE__ */ new Map(), Wd = () => {
  const e = F(() => ge().client.getQueryCache()), t = e().subscribe((n) => {
    Bo(() => {
      for (const [r, o] of Fn.entries())
        o.shouldUpdate(n) && o.setter(r(e));
    });
  });
  return V(() => {
    Fn.clear(), t();
  }), t;
}, ve = (e, t = !0, n = () => !0) => {
  const r = F(() => ge().client.getQueryCache()), [o, i] = P(e(r), t ? void 0 : {
    equals: !1
  });
  return N(() => {
    i(e(r));
  }), Fn.set(e, {
    setter: i,
    shouldUpdate: n
  }), V(() => {
    Fn.delete(e);
  }), o;
}, Ln = /* @__PURE__ */ new Map(), Qd = () => {
  const e = F(() => ge().client.getMutationCache()), t = e().subscribe(() => {
    for (const [n, r] of Ln.entries())
      queueMicrotask(() => {
        r(n(e));
      });
  });
  return V(() => {
    Ln.clear(), t();
  }), t;
}, ze = (e, t = !0) => {
  const n = F(() => ge().client.getMutationCache()), [r, o] = P(e(n), t ? void 0 : {
    equals: !1
  });
  return N(() => {
    o(e(n));
  }), Ln.set(e, o), V(() => {
    Ln.delete(e);
  }), r;
}, Zi = (e) => {
  const {
    colors: t,
    font: n,
    size: r,
    alpha: o,
    shadow: i,
    border: l
  } = S, s = (a, c) => e === "light" ? a : c;
  return {
    devtoolsBtn: k`
      z-index: 100000;
      position: fixed;
      padding: 4px;
      text-align: left;

      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      box-shadow: ${i.md()};
      overflow: hidden;

      & div {
        position: absolute;
        top: -8px;
        left: -8px;
        right: -8px;
        bottom: -8px;
        border-radius: 9999px;

        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        filter: blur(6px) saturate(1.2) contrast(1.1);
      }

      &:focus-within {
        outline-offset: 2px;
        outline: 3px solid ${t.green[600]};
      }

      & button {
        position: relative;
        z-index: 1;
        padding: 0;
        border-radius: 9999px;
        background-color: transparent;
        border: none;
        height: 40px;
        display: flex;
        width: 40px;
        overflow: hidden;
        cursor: pointer;
        outline: none;
        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
    `,
    panel: k`
      position: fixed;
      z-index: 9999;
      display: flex;
      gap: ${S.size[0.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${s(t.gray[300], t.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${s(t.gray[400], t.darkGray[300])};
      }
    `,
    "devtoolsBtn-position-bottom-right": k`
      bottom: 12px;
      right: 12px;
    `,
    "devtoolsBtn-position-bottom-left": k`
      bottom: 12px;
      left: 12px;
    `,
    "devtoolsBtn-position-top-left": k`
      top: 12px;
      left: 12px;
    `,
    "devtoolsBtn-position-top-right": k`
      top: 12px;
      right: 12px;
    `,
    "devtoolsBtn-position-relative": k`
      position: relative;
    `,
    "panel-position-top": k`
      top: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${r[14]};
      border-bottom: ${s(t.gray[400], t.darkGray[300])} 1px solid;
    `,
    "panel-position-bottom": k`
      bottom: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${r[14]};
      border-top: ${s(t.gray[400], t.darkGray[300])} 1px solid;
    `,
    "panel-position-right": k`
      bottom: 0;
      right: 0;
      top: 0;
      border-left: ${s(t.gray[400], t.darkGray[300])} 1px solid;
      max-width: 90%;
    `,
    "panel-position-left": k`
      bottom: 0;
      left: 0;
      top: 0;
      border-right: ${s(t.gray[400], t.darkGray[300])} 1px solid;
      max-width: 90%;
    `,
    closeBtn: k`
      position: absolute;
      cursor: pointer;
      z-index: 5;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${s(t.gray[50], t.darkGray[700])};
      &:hover {
        background-color: ${s(t.gray[200], t.darkGray[500])};
      }
      &:focus-visible {
        outline: 2px solid ${t.blue[600]};
      }
      & svg {
        color: ${s(t.gray[600], t.gray[400])};
        width: ${r[2]};
        height: ${r[2]};
      }
    `,
    "closeBtn-position-top": k`
      bottom: 0;
      right: ${r[2]};
      transform: translate(0, 100%);
      border-right: ${s(t.gray[400], t.darkGray[300])} 1px solid;
      border-left: ${s(t.gray[400], t.darkGray[300])} 1px solid;
      border-top: none;
      border-bottom: ${s(t.gray[400], t.darkGray[300])} 1px solid;
      border-radius: 0px 0px ${l.radius.sm} ${l.radius.sm};
      padding: ${r[0.5]} ${r[1.5]} ${r[1]} ${r[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        bottom: 100%;
        left: -${r[2.5]};
        height: ${r[1.5]};
        width: calc(100% + ${r[5]});
      }

      & svg {
        transform: rotate(180deg);
      }
    `,
    "closeBtn-position-bottom": k`
      top: 0;
      right: ${r[2]};
      transform: translate(0, -100%);
      border-right: ${s(t.gray[400], t.darkGray[300])} 1px solid;
      border-left: ${s(t.gray[400], t.darkGray[300])} 1px solid;
      border-top: ${s(t.gray[400], t.darkGray[300])} 1px solid;
      border-bottom: none;
      border-radius: ${l.radius.sm} ${l.radius.sm} 0px 0px;
      padding: ${r[1]} ${r[1.5]} ${r[0.5]} ${r[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${r[2.5]};
        height: ${r[1.5]};
        width: calc(100% + ${r[5]});
      }
    `,
    "closeBtn-position-right": k`
      bottom: ${r[2]};
      left: 0;
      transform: translate(-100%, 0);
      border-right: none;
      border-left: ${s(t.gray[400], t.darkGray[300])} 1px solid;
      border-top: ${s(t.gray[400], t.darkGray[300])} 1px solid;
      border-bottom: ${s(t.gray[400], t.darkGray[300])} 1px solid;
      border-radius: ${l.radius.sm} 0px 0px ${l.radius.sm};
      padding: ${r[1.5]} ${r[0.5]} ${r[1.5]} ${r[1]};

      &::after {
        content: ' ';
        position: absolute;
        left: 100%;
        height: calc(100% + ${r[5]});
        width: ${r[1.5]};
      }

      & svg {
        transform: rotate(-90deg);
      }
    `,
    "closeBtn-position-left": k`
      bottom: ${r[2]};
      right: 0;
      transform: translate(100%, 0);
      border-left: none;
      border-right: ${s(t.gray[400], t.darkGray[300])} 1px solid;
      border-top: ${s(t.gray[400], t.darkGray[300])} 1px solid;
      border-bottom: ${s(t.gray[400], t.darkGray[300])} 1px solid;
      border-radius: 0px ${l.radius.sm} ${l.radius.sm} 0px;
      padding: ${r[1.5]} ${r[1]} ${r[1.5]} ${r[0.5]};

      &::after {
        content: ' ';
        position: absolute;
        right: 100%;
        height: calc(100% + ${r[5]});
        width: ${r[1.5]};
      }

      & svg {
        transform: rotate(90deg);
      }
    `,
    queriesContainer: k`
      flex: 1 1 700px;
      background-color: ${s(t.gray[50], t.darkGray[700])};
      display: flex;
      flex-direction: column;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
    `,
    dragHandle: k`
      position: absolute;
      transition: background-color 0.125s ease;
      &:hover {
        background-color: ${t.purple[400]}${s("", o[90])};
      }
      z-index: 4;
    `,
    "dragHandle-position-top": k`
      bottom: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,
    "dragHandle-position-bottom": k`
      top: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,
    "dragHandle-position-right": k`
      left: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,
    "dragHandle-position-left": k`
      right: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,
    row: k`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${S.size[2]} ${S.size[2.5]};
      gap: ${S.size[2.5]};
      border-bottom: ${s(t.gray[300], t.darkGray[500])} 1px solid;
      align-items: center;
      & > button {
        padding: 0;
        background: transparent;
        border: none;
        display: flex;
        gap: ${r[0.5]};
        flex-direction: column;
      }
    `,
    logoAndToggleContainer: k`
      display: flex;
      gap: ${S.size[3]};
      align-items: center;
    `,
    logo: k`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      gap: ${S.size[0.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${t.blue[800]};
      }
    `,
    tanstackLogo: k`
      font-size: ${n.size.md};
      font-weight: ${n.weight.bold};
      line-height: ${n.lineHeight.xs};
      white-space: nowrap;
      color: ${s(t.gray[600], t.gray[300])};
    `,
    queryFlavorLogo: k`
      font-weight: ${n.weight.semibold};
      font-size: ${n.size.xs};
      background: linear-gradient(
        to right,
        ${s("#ea4037, #ff9b11", "#dd524b, #e9a03b")}
      );
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,
    queryStatusContainer: k`
      display: flex;
      gap: ${S.size[2]};
      height: min-content;
    `,
    queryStatusTag: k`
      display: flex;
      gap: ${S.size[1.5]};
      box-sizing: border-box;
      height: ${S.size[6.5]};
      background: ${s(t.gray[50], t.darkGray[500])};
      color: ${s(t.gray[700], t.gray[300])};
      border-radius: ${S.border.radius.sm};
      font-size: ${n.size.sm};
      padding: ${S.size[1]};
      padding-left: ${S.size[1.5]};
      align-items: center;
      font-weight: ${n.weight.medium};
      border: ${s("1px solid " + t.gray[300], "1px solid transparent")};
      user-select: none;
      position: relative;
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${t.blue[800]};
      }
    `,
    queryStatusTagLabel: k`
      font-size: ${n.size.xs};
    `,
    queryStatusCount: k`
      font-size: ${n.size.xs};
      padding: 0 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${s(t.gray[500], t.gray[400])};
      background-color: ${s(t.gray[200], t.darkGray[300])};
      border-radius: 2px;
      font-variant-numeric: tabular-nums;
      height: ${S.size[4.5]};
    `,
    statusTooltip: k`
      position: absolute;
      z-index: 1;
      background-color: ${s(t.gray[50], t.darkGray[500])};
      top: 100%;
      left: 50%;
      transform: translate(-50%, calc(${S.size[2]}));
      padding: ${S.size[0.5]} ${S.size[2]};
      border-radius: ${S.border.radius.sm};
      font-size: ${n.size.xs};
      border: 1px solid ${s(t.gray[400], t.gray[600])};
      color: ${s(t.gray[600], t.gray[300])};

      &::before {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, -100%);
        position: absolute;
        border-color: transparent transparent
          ${s(t.gray[400], t.gray[600])} transparent;
        border-style: solid;
        border-width: 7px;
        /* transform: rotate(180deg); */
      }

      &::after {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, calc(-100% + 2px));
        position: absolute;
        border-color: transparent transparent
          ${s(t.gray[100], t.darkGray[500])} transparent;
        border-style: solid;
        border-width: 7px;
      }
    `,
    filtersContainer: k`
      display: flex;
      gap: ${S.size[2]};
      & > button {
        cursor: pointer;
        padding: ${S.size[0.5]} ${S.size[1.5]} ${S.size[0.5]}
          ${S.size[2]};
        border-radius: ${S.border.radius.sm};
        background-color: ${s(t.gray[100], t.darkGray[400])};
        border: 1px solid ${s(t.gray[300], t.darkGray[200])};
        color: ${s(t.gray[700], t.gray[300])};
        font-size: ${n.size.xs};
        display: flex;
        align-items: center;
        line-height: ${n.lineHeight.sm};
        gap: ${S.size[1.5]};
        max-width: 160px;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${l.radius.xs};
          outline: 2px solid ${t.blue[800]};
        }
        & svg {
          width: ${S.size[3]};
          height: ${S.size[3]};
          color: ${s(t.gray[500], t.gray[400])};
        }
      }
    `,
    filterInput: k`
      padding: ${r[0.5]} ${r[2]};
      border-radius: ${S.border.radius.sm};
      background-color: ${s(t.gray[100], t.darkGray[400])};
      display: flex;
      box-sizing: content-box;
      align-items: center;
      gap: ${S.size[1.5]};
      max-width: 160px;
      min-width: 100px;
      border: 1px solid ${s(t.gray[300], t.darkGray[200])};
      height: min-content;
      color: ${s(t.gray[600], t.gray[400])};
      & > svg {
        width: ${r[3]};
        height: ${r[3]};
      }
      & input {
        font-size: ${n.size.xs};
        width: 100%;
        background-color: ${s(t.gray[100], t.darkGray[400])};
        border: none;
        padding: 0;
        line-height: ${n.lineHeight.sm};
        color: ${s(t.gray[700], t.gray[300])};
        &::placeholder {
          color: ${s(t.gray[700], t.gray[300])};
        }
        &:focus {
          outline: none;
        }
      }

      &:focus-within {
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${t.blue[800]};
      }
    `,
    filterSelect: k`
      padding: ${S.size[0.5]} ${S.size[2]};
      border-radius: ${S.border.radius.sm};
      background-color: ${s(t.gray[100], t.darkGray[400])};
      display: flex;
      align-items: center;
      gap: ${S.size[1.5]};
      box-sizing: content-box;
      max-width: 160px;
      border: 1px solid ${s(t.gray[300], t.darkGray[200])};
      height: min-content;
      & > svg {
        color: ${s(t.gray[600], t.gray[400])};
        width: ${S.size[2]};
        height: ${S.size[2]};
      }
      & > select {
        appearance: none;
        color: ${s(t.gray[700], t.gray[300])};
        min-width: 100px;
        line-height: ${n.lineHeight.sm};
        font-size: ${n.size.xs};
        background-color: ${s(t.gray[100], t.darkGray[400])};
        border: none;
        &:focus {
          outline: none;
        }
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${t.blue[800]};
      }
    `,
    actionsContainer: k`
      display: flex;
      gap: ${S.size[2]};
    `,
    actionsBtn: k`
      border-radius: ${S.border.radius.sm};
      background-color: ${s(t.gray[100], t.darkGray[400])};
      border: 1px solid ${s(t.gray[300], t.darkGray[200])};
      width: ${S.size[6.5]};
      height: ${S.size[6.5]};
      justify-content: center;
      display: flex;
      align-items: center;
      gap: ${S.size[1.5]};
      max-width: 160px;
      cursor: pointer;
      padding: 0;
      &:hover {
        background-color: ${s(t.gray[200], t.darkGray[500])};
      }
      & svg {
        color: ${s(t.gray[700], t.gray[300])};
        width: ${S.size[3]};
        height: ${S.size[3]};
      }
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${t.blue[800]};
      }
    `,
    actionsBtnOffline: k`
      & svg {
        stroke: ${s(t.yellow[700], t.yellow[500])};
        fill: ${s(t.yellow[700], t.yellow[500])};
      }
    `,
    overflowQueryContainer: k`
      flex: 1;
      overflow-y: auto;
      & > div {
        display: flex;
        flex-direction: column;
      }
    `,
    queryRow: k`
      display: flex;
      align-items: center;
      padding: 0;
      border: none;
      cursor: pointer;
      color: ${s(t.gray[700], t.gray[300])};
      background-color: ${s(t.gray[50], t.darkGray[700])};
      line-height: 1;
      &:focus {
        outline: none;
      }
      &:focus-visible {
        outline-offset: -2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${t.blue[800]};
      }
      &:hover .tsqd-query-hash {
        background-color: ${s(t.gray[200], t.darkGray[600])};
      }

      & .tsqd-query-observer-count {
        padding: 0 ${S.size[1]};
        user-select: none;
        min-width: ${S.size[6.5]};
        align-self: stretch;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${n.size.xs};
        font-weight: ${n.weight.medium};
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom: 1px solid ${s(t.gray[300], t.darkGray[700])};
      }
      & .tsqd-query-hash {
        user-select: text;
        font-size: ${n.size.xs};
        display: flex;
        align-items: center;
        min-height: ${S.size[6]};
        flex: 1;
        padding: ${S.size[1]} ${S.size[2]};
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        border-bottom: 1px solid ${s(t.gray[300], t.darkGray[400])};
        text-align: left;
        text-overflow: clip;
        word-break: break-word;
      }

      & .tsqd-query-disabled-indicator {
        align-self: stretch;
        display: flex;
        align-items: center;
        padding: 0 ${S.size[2]};
        color: ${s(t.gray[800], t.gray[300])};
        background-color: ${s(t.gray[300], t.darkGray[600])};
        border-bottom: 1px solid ${s(t.gray[300], t.darkGray[400])};
        font-size: ${n.size.xs};
      }
    `,
    selectedQueryRow: k`
      background-color: ${s(t.gray[200], t.darkGray[500])};
    `,
    detailsContainer: k`
      flex: 1 1 700px;
      background-color: ${s(t.gray[50], t.darkGray[700])};
      color: ${s(t.gray[700], t.gray[300])};
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      display: flex;
      text-align: left;
    `,
    detailsHeader: k`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${s(t.gray[200], t.darkGray[600])};
      padding: ${S.size[1.5]} ${S.size[2]};
      font-weight: ${n.weight.medium};
      font-size: ${n.size.xs};
      line-height: ${n.lineHeight.xs};
      text-align: left;
    `,
    detailsBody: k`
      margin: ${S.size[1.5]} 0px ${S.size[2]} 0px;
      & > div {
        display: flex;
        align-items: stretch;
        padding: 0 ${S.size[2]};
        line-height: ${n.lineHeight.sm};
        justify-content: space-between;
        & > span {
          font-size: ${n.size.xs};
        }
        & > span:nth-child(2) {
          font-variant-numeric: tabular-nums;
        }
      }

      & > div:first-child {
        margin-bottom: ${S.size[1.5]};
      }

      & code {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        margin: 0;
        font-size: ${n.size.xs};
        line-height: ${n.lineHeight.xs};
      }

      & pre {
        margin: 0;
        display: flex;
        align-items: center;
      }
    `,
    queryDetailsStatus: k`
      border: 1px solid ${t.darkGray[200]};
      border-radius: ${S.border.radius.sm};
      font-weight: ${n.weight.medium};
      padding: ${S.size[1]} ${S.size[2.5]};
    `,
    actionsBody: k`
      flex-wrap: wrap;
      margin: ${S.size[2]} 0px ${S.size[2]} 0px;
      display: flex;
      gap: ${S.size[2]};
      padding: 0px ${S.size[2]};
      & > button {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
        font-size: ${n.size.xs};
        padding: ${S.size[1]} ${S.size[2]};
        display: flex;
        border-radius: ${S.border.radius.sm};
        background-color: ${s(t.gray[100], t.darkGray[600])};
        border: 1px solid ${s(t.gray[300], t.darkGray[400])};
        align-items: center;
        gap: ${S.size[2]};
        font-weight: ${n.weight.medium};
        line-height: ${n.lineHeight.xs};
        cursor: pointer;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${l.radius.xs};
          outline: 2px solid ${t.blue[800]};
        }
        &:hover {
          background-color: ${s(t.gray[200], t.darkGray[500])};
        }

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        & > span {
          width: ${r[1.5]};
          height: ${r[1.5]};
          border-radius: ${S.border.radius.full};
        }
      }
    `,
    actionsSelect: k`
      font-size: ${n.size.xs};
      padding: ${S.size[0.5]} ${S.size[2]};
      display: flex;
      border-radius: ${S.border.radius.sm};
      overflow: hidden;
      background-color: ${s(t.gray[100], t.darkGray[600])};
      border: 1px solid ${s(t.gray[300], t.darkGray[400])};
      align-items: center;
      gap: ${S.size[2]};
      font-weight: ${n.weight.medium};
      line-height: ${n.lineHeight.sm};
      color: ${s(t.red[500], t.red[400])};
      cursor: pointer;
      position: relative;
      &:hover {
        background-color: ${s(t.gray[200], t.darkGray[500])};
      }
      & > span {
        width: ${r[1.5]};
        height: ${r[1.5]};
        border-radius: ${S.border.radius.full};
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${t.blue[800]};
      }
      & select {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        appearance: none;
        background-color: transparent;
        border: none;
        color: transparent;
        outline: none;
      }

      & svg path {
        stroke: ${S.colors.red[400]};
      }
      & svg {
        width: ${S.size[2]};
        height: ${S.size[2]};
      }
    `,
    settingsMenu: k`
      display: flex;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
      flex-direction: column;
      gap: ${r[0.5]};
      border-radius: ${S.border.radius.sm};
      border: 1px solid ${s(t.gray[300], t.gray[700])};
      background-color: ${s(t.gray[50], t.darkGray[600])};
      font-size: ${n.size.xs};
      color: ${s(t.gray[700], t.gray[300])};
      z-index: 99999;
      min-width: 120px;
      padding: ${r[0.5]};
    `,
    settingsSubTrigger: k`
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: ${S.border.radius.xs};
      padding: ${S.size[1]} ${S.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      color: ${s(t.gray[700], t.gray[300])};
      & svg {
        color: ${s(t.gray[600], t.gray[400])};
        transform: rotate(-90deg);
        width: ${S.size[2]};
        height: ${S.size[2]};
      }
      &:hover {
        background-color: ${s(t.gray[200], t.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${t.blue[800]};
      }
      &.data-disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `,
    settingsMenuHeader: k`
      padding: ${S.size[1]} ${S.size[1]};
      font-weight: ${n.weight.medium};
      border-bottom: 1px solid ${s(t.gray[300], t.darkGray[400])};
      color: ${s(t.gray[500], t.gray[400])};
      font-size: ${n.size.xs};
    `,
    settingsSubButton: k`
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${s(t.gray[700], t.gray[300])};
      font-size: ${n.size.xs};
      border-radius: ${S.border.radius.xs};
      padding: ${S.size[1]} ${S.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      & svg {
        color: ${s(t.gray[600], t.gray[400])};
      }
      &:hover {
        background-color: ${s(t.gray[200], t.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${t.blue[800]};
      }
    `,
    themeSelectedButton: k`
      background-color: ${s(t.purple[100], t.purple[900])};
      color: ${s(t.purple[700], t.purple[300])};
      & svg {
        color: ${s(t.purple[700], t.purple[300])};
      }
      &:hover {
        background-color: ${s(t.purple[100], t.purple[900])};
      }
    `,
    viewToggle: k`
      border-radius: ${S.border.radius.sm};
      background-color: ${s(t.gray[200], t.darkGray[600])};
      border: 1px solid ${s(t.gray[300], t.darkGray[200])};
      display: flex;
      padding: 0;
      font-size: ${n.size.xs};
      color: ${s(t.gray[700], t.gray[300])};
      overflow: hidden;

      &:has(:focus-visible) {
        outline: 2px solid ${t.blue[800]};
      }

      & .tsqd-radio-toggle {
        opacity: 0.5;
        display: flex;
        & label {
          display: flex;
          align-items: center;
          cursor: pointer;
          line-height: ${n.lineHeight.md};
        }

        & label:hover {
          background-color: ${s(t.gray[100], t.darkGray[500])};
        }
      }

      & > [data-checked] {
        opacity: 1;
        background-color: ${s(t.gray[100], t.darkGray[400])};
        & label:hover {
          background-color: ${s(t.gray[100], t.darkGray[400])};
        }
      }

      & .tsqd-radio-toggle:first-child {
        & label {
          padding: 0 ${S.size[1.5]} 0 ${S.size[2]};
        }
        border-right: 1px solid ${s(t.gray[300], t.darkGray[200])};
      }

      & .tsqd-radio-toggle:nth-child(2) {
        & label {
          padding: 0 ${S.size[2]} 0 ${S.size[1.5]};
        }
      }
    `
  };
}, Ne = Zi("light"), Ue = Zi("dark");
tn(["click", "mousedown", "input"]);
export {
  Zd as default
};
