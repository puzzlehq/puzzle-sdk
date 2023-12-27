var Xi = Object.defineProperty;
var Zi = (e, t, n) => t in e ? Xi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Br = (e, t, n) => (Zi(e, typeof t != "symbol" ? t + "" : t, n), n);
import { d as Ln, b as Vn, m as jn, c as z, g as Ji, e as D, f as v, h as U, i as It, j as E, S as R, k as G, l as I, q as ze, r as F, u as es, v as _t, w as ir, x as j, z as ts, A as xn, F as To, B as Po, C as V, $ as ut, D as $n, E as Hn, G as Be, H as Se, I as ke, J as ns, K as sr, L as T, M as tn, N as Rr, O as rs, P as St, Q as Qt, U as Nr, V as J, W as os, X as is, Y as ss, Z as Pn, _ as ls, a0 as as, a1 as cs, a2 as zn, a3 as us, a4 as ds } from "./index-0KNTnqbH.js";
import "react";
var zo = {
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
}, fs = Object.keys(zo).join("|"), gs = new RegExp(fs, "g");
function hs(e) {
  return e.replace(gs, (t) => zo[t]);
}
var Ce = {
  CASE_SENSITIVE_EQUAL: 7,
  EQUAL: 6,
  STARTS_WITH: 5,
  WORD_STARTS_WITH: 4,
  CONTAINS: 3,
  ACRONYM: 2,
  MATCHES: 1,
  NO_MATCH: 0
};
function Ur(e, t, n) {
  var r;
  if (n = n || {}, n.threshold = (r = n.threshold) != null ? r : Ce.MATCHES, !n.accessors) {
    const l = Gr(e, t, n);
    return {
      // ends up being duplicate of 'item' in matches but consistent
      rankedValue: e,
      rank: l,
      accessorIndex: -1,
      accessorThreshold: n.threshold,
      passed: l >= n.threshold
    };
  }
  const o = bs(e, n.accessors), s = {
    rankedValue: e,
    rank: Ce.NO_MATCH,
    accessorIndex: -1,
    accessorThreshold: n.threshold,
    passed: !1
  };
  for (let l = 0; l < o.length; l++) {
    const i = o[l];
    let a = Gr(i.itemValue, t, n);
    const {
      minRanking: c,
      maxRanking: h,
      threshold: f = n.threshold
    } = i.attributes;
    a < c && a >= Ce.MATCHES ? a = c : a > h && (a = h), a = Math.min(a, h), a >= f && a > s.rank && (s.rank = a, s.passed = !0, s.accessorIndex = l, s.accessorThreshold = f, s.rankedValue = i.itemValue);
  }
  return s;
}
function Gr(e, t, n) {
  return e = Vr(e, n), t = Vr(t, n), t.length > e.length ? Ce.NO_MATCH : e === t ? Ce.CASE_SENSITIVE_EQUAL : (e = e.toLowerCase(), t = t.toLowerCase(), e === t ? Ce.EQUAL : e.startsWith(t) ? Ce.STARTS_WITH : e.includes(` ${t}`) ? Ce.WORD_STARTS_WITH : e.includes(t) ? Ce.CONTAINS : t.length === 1 ? Ce.NO_MATCH : ys(e).includes(t) ? Ce.ACRONYM : vs(e, t));
}
function ys(e) {
  let t = "";
  return e.split(" ").forEach((r) => {
    r.split("-").forEach((s) => {
      t += s.substr(0, 1);
    });
  }), t;
}
function vs(e, t) {
  let n = 0, r = 0;
  function o(a, c, h) {
    for (let f = h, d = c.length; f < d; f++)
      if (c[f] === a)
        return n += 1, f + 1;
    return -1;
  }
  function s(a) {
    const c = 1 / a, h = n / t.length;
    return Ce.MATCHES + h * c;
  }
  const l = o(t[0], e, 0);
  if (l < 0)
    return Ce.NO_MATCH;
  r = l;
  for (let a = 1, c = t.length; a < c; a++) {
    const h = t[a];
    if (r = o(h, e, r), !(r > -1))
      return Ce.NO_MATCH;
  }
  const i = r - l;
  return s(i);
}
function Vr(e, t) {
  let {
    keepDiacritics: n
  } = t;
  return e = `${e}`, n || (e = hs(e)), e;
}
function ms(e, t) {
  let n = t;
  typeof t == "object" && (n = t.accessor);
  const r = n(e);
  return r == null ? [] : Array.isArray(r) ? r : [String(r)];
}
function bs(e, t) {
  const n = [];
  for (let r = 0, o = t.length; r < o; r++) {
    const s = t[r], l = xs(s), i = ms(e, s);
    for (let a = 0, c = i.length; a < c; a++)
      n.push({
        itemValue: i[a],
        attributes: l
      });
  }
  return n;
}
var jr = {
  maxRanking: 1 / 0,
  minRanking: -1 / 0
};
function xs(e) {
  return typeof e == "function" ? jr : {
    ...jr,
    ...e
  };
}
var $s = { data: "" }, ps = (e) => typeof window == "object" ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : e || $s, ws = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, Cs = /\/\*[^]*?\*\/|  +/g, Hr = /\n+/g, vt = (e, t) => {
  let n = "", r = "", o = "";
  for (let s in e) {
    let l = e[s];
    s[0] == "@" ? s[1] == "i" ? n = s + " " + l + ";" : r += s[1] == "f" ? vt(l, s) : s + "{" + vt(l, s[1] == "k" ? "" : t) + "}" : typeof l == "object" ? r += vt(l, t ? t.replace(/([^,])+/g, (i) => s.replace(/(^:.*)|([^,])+/g, (a) => /&/.test(a) ? a.replace(/&/g, i) : i ? i + " " + a : a)) : s) : l != null && (s = /^--/.test(s) ? s : s.replace(/[A-Z]/g, "-$&").toLowerCase(), o += vt.p ? vt.p(s, l) : s + ":" + l + ";");
  }
  return n + (t && o ? t + "{" + o + "}" : o) + r;
}, We = {}, Ko = (e) => {
  if (typeof e == "object") {
    let t = "";
    for (let n in e)
      t += n + Ko(e[n]);
    return t;
  }
  return e;
}, Ss = (e, t, n, r, o) => {
  let s = Ko(e), l = We[s] || (We[s] = ((a) => {
    let c = 0, h = 11;
    for (; c < a.length; )
      h = 101 * h + a.charCodeAt(c++) >>> 0;
    return "go" + h;
  })(s));
  if (!We[l]) {
    let a = s !== e ? e : ((c) => {
      let h, f, d = [{}];
      for (; h = ws.exec(c.replace(Cs, "")); )
        h[4] ? d.shift() : h[3] ? (f = h[3].replace(Hr, " ").trim(), d.unshift(d[0][f] = d[0][f] || {})) : d[0][h[1]] = h[2].replace(Hr, " ").trim();
      return d[0];
    })(e);
    We[l] = vt(o ? { ["@keyframes " + l]: a } : a, n ? "" : "." + l);
  }
  let i = n && We.g ? We.g : null;
  return n && (We.g = We[l]), ((a, c, h, f) => {
    f ? c.data = c.data.replace(f, a) : c.data.indexOf(a) === -1 && (c.data = h ? a + c.data : c.data + a);
  })(We[l], t, r, i), l;
}, ks = (e, t, n) => e.reduce((r, o, s) => {
  let l = t[s];
  if (l && l.call) {
    let i = l(n), a = i && i.props && i.props.className || /^go/.test(i) && i;
    l = a ? "." + a : i && typeof i == "object" ? i.props ? "" : vt(i, "") : i === !1 ? "" : i;
  }
  return r + o + (l ?? "");
}, "");
function _(e) {
  let t = this || {}, n = e.call ? e(t.p) : e;
  return Ss(n.unshift ? n.raw ? ks(n, [].slice.call(arguments, 1), t.p) : n.reduce((r, o) => Object.assign(r, o && o.call ? o(t.p) : o), {}) : n, ps(t.target), t.g, t.o, t.k);
}
_.bind({ g: 1 });
_.bind({ k: 1 });
function Bo(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Bo(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function O() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Bo(e)) && (r && (r += " "), r += t);
  return r;
}
var Qr = () => {
};
function Es(e, t) {
  const n = Qt(e), { onChange: r } = t;
  let o = new Set(t.appear ? void 0 : n);
  const s = /* @__PURE__ */ new WeakSet(), [l, i] = z([], { equals: !1 }), [a] = cs(), c = t.exitMethod === "remove" ? Qr : (f) => {
    i((d) => (d.push.apply(d, f), d));
    for (const d of f)
      s.delete(d);
  }, h = t.exitMethod === "remove" ? Qr : t.exitMethod === "keep-index" ? (f, d, g) => f.splice(g, 0, d) : (f, d) => f.push(d);
  return D(
    (f) => {
      const d = l(), g = e();
      if (g[$n], Qt(a))
        return a(), f;
      if (d.length) {
        const u = f.filter((y) => !d.includes(y));
        return d.length = 0, r({ list: u, added: [], removed: [], unchanged: u, finishRemoved: c }), u;
      }
      return Qt(() => {
        const u = new Set(g), y = g.slice(), m = [], $ = [], x = [];
        for (const w of g)
          (o.has(w) ? x : m).push(w);
        let b = !m.length;
        for (let w = 0; w < f.length; w++) {
          const p = f[w];
          u.has(p) || (s.has(p) || ($.push(p), s.add(p)), h(y, p, w)), b && p !== y[w] && (b = !1);
        }
        return !$.length && b ? f : (r({ list: y, added: m, removed: $, unchanged: x, finishRemoved: c }), o = u, y);
      });
    },
    t.appear ? [] : n.slice()
  );
}
var _s = (e) => e != null, As = (e) => e.filter(_s);
function lr(e) {
  return (...t) => {
    for (const n of e)
      n && n(...t);
  };
}
function Fs(e) {
  return (...t) => {
    for (let n = e.length - 1; n >= 0; n--) {
      const r = e[n];
      r && r(...t);
    }
  };
}
var C = (e) => typeof e == "function" && !e.length ? e() : e, Qn = (e) => Array.isArray(e) ? e : e ? [e] : [];
function Ds(e, ...t) {
  return typeof e == "function" ? e(...t) : e;
}
var Is = V;
function Ls(e, t, n, r) {
  const o = e.length, s = t.length;
  let l = 0;
  if (!s) {
    for (; l < o; l++)
      n(e[l]);
    return;
  }
  if (!o) {
    for (; l < s; l++)
      r(t[l]);
    return;
  }
  for (; l < s && t[l] === e[l]; l++)
    ;
  let i, a;
  t = t.slice(l), e = e.slice(l);
  for (i of t)
    e.includes(i) || r(i);
  for (a of e)
    t.includes(a) || n(a);
}
function pe(...e) {
  return lr(e);
}
var Wr = (e) => e instanceof Element;
function Wn(e, t) {
  if (t(e))
    return e;
  if (typeof e == "function" && !e.length)
    return Wn(e(), t);
  if (Array.isArray(e)) {
    const n = [];
    for (const r of e) {
      const o = Wn(r, t);
      o && (Array.isArray(o) ? n.push.apply(n, o) : n.push(o));
    }
    return n.length ? n : null;
  }
  return null;
}
function Os(e, t = Wr, n = Wr) {
  const r = D(e), o = D(
    () => Wn(r(), t)
  );
  return o.toArray = () => {
    const s = o();
    return Array.isArray(s) ? s : s ? [s] : [];
  }, o;
}
function qs(e) {
  return D(() => {
    const t = e.name || "s";
    return {
      enterActiveClasses: (e.enterActiveClass || t + "-enter-active").split(" "),
      enterClasses: (e.enterClass || t + "-enter").split(" "),
      enterToClasses: (e.enterToClass || t + "-enter-to").split(" "),
      exitActiveClasses: (e.exitActiveClass || t + "-exit-active").split(" "),
      exitClasses: (e.exitClass || t + "-exit").split(" "),
      exitToClasses: (e.exitToClass || t + "-exit-to").split(" "),
      moveClasses: (e.moveClass || t + "-move").split(" ")
    };
  });
}
function Ro(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
function Ms(e, t, n, r) {
  const { enterClasses: o, enterActiveClasses: s, enterToClasses: l } = e, { onBeforeEnter: i, onEnter: a, onAfterEnter: c } = t;
  i == null || i(n), n.classList.add(...o), n.classList.add(...s), queueMicrotask(() => {
    if (!n.parentNode)
      return r == null ? void 0 : r();
    a == null || a(n, () => h());
  }), Ro(() => {
    n.classList.remove(...o), n.classList.add(...l), (!a || a.length < 2) && (n.addEventListener("transitionend", h), n.addEventListener("animationend", h));
  });
  function h(f) {
    (!f || f.target === n) && (r == null || r(), n.removeEventListener("transitionend", h), n.removeEventListener("animationend", h), n.classList.remove(...s), n.classList.remove(...l), c == null || c(n));
  }
}
function Ts(e, t, n, r) {
  const { exitClasses: o, exitActiveClasses: s, exitToClasses: l } = e, { onBeforeExit: i, onExit: a, onAfterExit: c } = t;
  if (!n.parentNode)
    return r == null ? void 0 : r();
  i == null || i(n), n.classList.add(...o), n.classList.add(...s), a == null || a(n, () => h()), Ro(() => {
    n.classList.remove(...o), n.classList.add(...l), (!a || a.length < 2) && (n.addEventListener("transitionend", h), n.addEventListener("animationend", h));
  });
  function h(f) {
    (!f || f.target === n) && (r == null || r(), n.removeEventListener("transitionend", h), n.removeEventListener("animationend", h), n.classList.remove(...s), n.classList.remove(...l), c == null || c(n));
  }
}
var Yr = (e) => {
  const t = qs(e);
  return Es(Os(() => e.children).toArray, {
    appear: e.appear,
    exitMethod: "keep-index",
    onChange({ added: n, removed: r, finishRemoved: o, list: s }) {
      const l = t();
      for (const a of n)
        Ms(l, e, a);
      const i = [];
      for (const a of s)
        a.isConnected && (a instanceof HTMLElement || a instanceof SVGElement) && i.push({ el: a, rect: a.getBoundingClientRect() });
      queueMicrotask(() => {
        const a = [];
        for (const { el: c, rect: h } of i)
          if (c.isConnected) {
            const f = c.getBoundingClientRect(), d = h.left - f.left, g = h.top - f.top;
            (d || g) && (c.style.transform = `translate(${d}px, ${g}px)`, c.style.transitionDuration = "0s", a.push(c));
          }
        document.body.offsetHeight;
        for (const c of a) {
          let h = function(f) {
            (f.target === c || /transform$/.test(f.propertyName)) && (c.removeEventListener("transitionend", h), c.classList.remove(...l.moveClasses));
          };
          c.classList.add(...l.moveClasses), c.style.transform = c.style.transitionDuration = "", c.addEventListener("transitionend", h);
        }
      });
      for (const a of r)
        Ts(l, e, a, () => o([a]));
    }
  });
}, Kn = Symbol("fallback");
function Xr(e) {
  for (const t of e)
    t.dispose();
}
function Ps(e, t, n, r = {}) {
  const o = /* @__PURE__ */ new Map();
  return V(() => Xr(o.values())), () => {
    const l = e() || [];
    return l[$n], Qt(() => {
      var h, f;
      if (!l.length)
        return Xr(o.values()), o.clear(), r.fallback ? [Nr((g) => (o.set(Kn, { dispose: g }), r.fallback()))] : [];
      const i = new Array(l.length), a = o.get(Kn);
      if (!o.size || a) {
        a == null || a.dispose(), o.delete(Kn);
        for (let d = 0; d < l.length; d++) {
          const g = l[d], u = t(g, d);
          s(i, g, d, u);
        }
        return i;
      }
      const c = new Set(o.keys());
      for (let d = 0; d < l.length; d++) {
        const g = l[d], u = t(g, d);
        c.delete(u);
        const y = o.get(u);
        y ? (i[d] = y.mapped, (h = y.setIndex) == null || h.call(y, d), y.setItem(() => g)) : s(i, g, d, u);
      }
      for (const d of c)
        (f = o.get(d)) == null || f.dispose(), o.delete(d);
      return i;
    });
  };
  function s(l, i, a, c) {
    Nr((h) => {
      const [f, d] = z(i), g = { setItem: d, dispose: h };
      if (n.length > 1) {
        const [u, y] = z(a);
        g.setIndex = y, g.mapped = n(f, u);
      } else
        g.mapped = n(f);
      o.set(c, g), l[a] = g.mapped;
    });
  }
}
function pn(e) {
  const { by: t } = e;
  return D(
    Ps(
      () => e.each,
      typeof t == "function" ? t : (n) => n[t],
      e.children,
      "fallback" in e ? { fallback: () => e.fallback } : void 0
    )
  );
}
function zs(e) {
  const [t, n] = z(), r = e != null && e.throw ? (d, g) => {
    throw n(d instanceof Error ? d : new Error(g)), d;
  } : (d, g) => {
    n(d instanceof Error ? d : new Error(g));
  }, o = e != null && e.api ? Array.isArray(e.api) ? e.api : [e.api] : [globalThis.localStorage].filter(Boolean), s = e != null && e.prefix ? `${e.prefix}.` : "", l = /* @__PURE__ */ new Map(), i = new Proxy(
    {},
    {
      get(d, g) {
        let u = l.get(g);
        u || (u = z(void 0, { equals: !1 }), l.set(g, u)), u[0]();
        const y = o.reduce(
          (m, $) => {
            if (m !== null || !$)
              return m;
            try {
              return $.getItem(`${s}${g}`);
            } catch (x) {
              return r(x, `Error reading ${s}${g} from ${$.name}`), null;
            }
          },
          null
        );
        return y !== null && (e != null && e.deserializer) ? e.deserializer(y, g, e.options) : y;
      }
    }
  ), a = (d, g, u) => {
    const y = e != null && e.serializer ? e.serializer(g, d, u ?? e.options) : g, m = `${s}${d}`;
    o.forEach((x) => {
      try {
        x.getItem(m) !== y && x.setItem(m, y);
      } catch (b) {
        r(b, `Error setting ${s}${d} to ${y} in ${x.name}`);
      }
    });
    const $ = l.get(d);
    $ && $[1]();
  }, c = (d) => o.forEach((g) => {
    try {
      g.removeItem(`${s}${d}`);
    } catch (u) {
      r(u, `Error removing ${s}${d} from ${g.name}`);
    }
  }), h = () => o.forEach((d) => {
    try {
      d.clear();
    } catch (g) {
      r(g, `Error clearing ${d.name}`);
    }
  }), f = () => {
    const d = {}, g = (u, y) => {
      if (!d.hasOwnProperty(u)) {
        const m = y && (e != null && e.deserializer) ? e.deserializer(y, u, e.options) : y;
        m && (d[u] = m);
      }
    };
    return o.forEach((u) => {
      if (typeof u.getAll == "function") {
        let y;
        try {
          y = u.getAll();
        } catch (m) {
          r(m, `Error getting all values from in ${u.name}`);
        }
        for (const m of y)
          g(m, y[m]);
      } else {
        let y = 0, m;
        try {
          for (; m = u.key(y++); )
            d.hasOwnProperty(m) || g(m, u.getItem(m));
        } catch ($) {
          r($, `Error getting all values from ${u.name}`);
        }
      }
    }), d;
  };
  return (e == null ? void 0 : e.sync) !== !1 && It(() => {
    const d = (g) => {
      var y;
      let u = !1;
      o.forEach((m) => {
        try {
          m !== g.storageArea && g.key && g.newValue !== m.getItem(g.key) && (g.newValue ? m.setItem(g.key, g.newValue) : m.removeItem(g.key), u = !0);
        } catch ($) {
          r(
            $,
            `Error synching api ${m.name} from storage event (${g.key}=${g.newValue})`
          );
        }
      }), u && g.key && ((y = l.get(g.key)) == null || y[1]());
    };
    "addEventListener" in globalThis ? (globalThis.addEventListener("storage", d), V(() => globalThis.removeEventListener("storage", d))) : (o.forEach((g) => {
      var u;
      return (u = g.addEventListener) == null ? void 0 : u.call(g, "storage", d);
    }), V(() => o.forEach((g) => {
      var u;
      return (u = g.removeEventListener) == null ? void 0 : u.call(g, "storage", d);
    })));
  }), [
    i,
    a,
    {
      clear: h,
      error: t,
      remove: c,
      toJSON: f
    }
  ];
}
var Ks = zs, Bs = (e) => (typeof e.clear == "function" || (e.clear = () => {
  let t;
  for (; t = e.key(0); )
    e.removeItem(t);
}), e), Zr = (e) => {
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
}, De = Bs({
  _cookies: [globalThis.document, "cookie"],
  getItem: (e) => {
    var t;
    return ((t = De._cookies[0][De._cookies[1]].match("(^|;)\\s*" + e + "\\s*=\\s*([^;]+)")) == null ? void 0 : t.pop()) ?? null;
  },
  setItem: (e, t, n) => {
    const r = De.getItem(e);
    De._cookies[0][De._cookies[1]] = `${e}=${t}${Zr(
      n
    )}`;
    const o = Object.assign(new Event("storage"), {
      key: e,
      oldValue: r,
      newValue: t,
      url: globalThis.document.URL,
      storageArea: De
    });
    window.dispatchEvent(o);
  },
  removeItem: (e) => {
    De._cookies[0][De._cookies[1]] = `${e}=deleted${Zr({
      expires: /* @__PURE__ */ new Date(0)
    })}`;
  },
  key: (e) => {
    let t = null, n = 0;
    return De._cookies[0][De._cookies[1]].replace(
      /(?:^|;)\s*(.+?)\s*=\s*[^;]+/g,
      (r, o) => (!t && o && n++ === e && (t = o), "")
    ), t;
  },
  get length() {
    let e = 0;
    return De._cookies[0][De._cookies[1]].replace(
      /(?:^|;)\s*.+?\s*=\s*[^;]+/g,
      (t) => (e += t ? 1 : 0, "")
    ), e;
  }
});
function Rs(e, t, n, r) {
  return e.addEventListener(t, n, r), Is(e.removeEventListener.bind(e, t, n, r));
}
function Ns(e, t, n, r) {
  const o = () => {
    Qn(C(e)).forEach((s) => {
      s && Qn(C(t)).forEach((l) => Rs(s, l, n, r));
    });
  };
  typeof e == "function" ? U(o) : G(o);
}
function Us(e, t) {
  const n = new ResizeObserver(e);
  return V(n.disconnect.bind(n)), {
    observe: (r) => n.observe(r, t),
    unobserve: n.unobserve.bind(n)
  };
}
function Gs(e, t, n) {
  const r = /* @__PURE__ */ new WeakMap(), { observe: o, unobserve: s } = Us((l) => {
    for (const i of l) {
      const { contentRect: a, target: c } = i, h = Math.round(a.width), f = Math.round(a.height), d = r.get(c);
      (!d || d.width !== h || d.height !== f) && (t(a, c, i), r.set(c, { width: h, height: f }));
    }
  }, n);
  U((l) => {
    const i = As(Qn(C(e)));
    return Ls(i, l, o, s), i;
  }, []);
}
function yn() {
  return !0;
}
var Vs = {
  get(e, t, n) {
    return t === ut ? n : e.get(t);
  },
  has(e, t) {
    return e.has(t);
  },
  set: yn,
  deleteProperty: yn,
  getOwnPropertyDescriptor(e, t) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return e.get(t);
      },
      set: yn,
      deleteProperty: yn
    };
  },
  ownKeys(e) {
    return e.keys();
  }
}, js = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;
function Jr(e) {
  const t = {};
  let n;
  for (; n = js.exec(e); )
    t[n[1]] = n[2];
  return t;
}
function Hs(e, t) {
  if (typeof e == "string") {
    if (typeof t == "string")
      return `${e};${t}`;
    e = Jr(e);
  } else
    typeof t == "string" && (t = Jr(t));
  return { ...e, ...t };
}
var Bn = (e, t, n) => {
  let r;
  for (const o of e) {
    const s = C(o)[t];
    r ? s && (r = n(r, s)) : r = s;
  }
  return r;
};
function Qs(...e) {
  var l;
  const t = Array.isArray(e[0]), n = t ? e[0] : e;
  if (n.length === 1)
    return n[0];
  const r = t && ((l = e[1]) != null && l.reverseEventHandlers) ? Fs : lr, o = {};
  for (const i of n) {
    const a = C(i);
    for (const c in a)
      if (c[0] === "o" && c[1] === "n" && c[2]) {
        const h = a[c], f = c.toLowerCase(), d = typeof h == "function" ? h : (
          // jsx event handlers can be tuples of [callback, arg]
          Array.isArray(h) ? h.length === 1 ? h[0] : h[0].bind(void 0, h[1]) : void 0
        );
        d ? o[f] ? o[f].push(d) : o[f] = [d] : delete o[f];
      }
  }
  const s = j(...n);
  return new Proxy(
    {
      get(i) {
        if (typeof i != "string")
          return Reflect.get(s, i);
        if (i === "style")
          return Bn(n, "style", Hs);
        if (i === "ref") {
          const a = [];
          for (const c of n) {
            const h = C(c)[i];
            typeof h == "function" && a.push(h);
          }
          return r(a);
        }
        if (i[0] === "o" && i[1] === "n" && i[2]) {
          const a = o[i.toLowerCase()];
          return a ? r(a) : Reflect.get(s, i);
        }
        return i === "class" || i === "className" ? Bn(n, i, (a, c) => `${a} ${c}`) : i === "classList" ? Bn(n, i, (a, c) => ({ ...a, ...c })) : Reflect.get(s, i);
      },
      has(i) {
        return Reflect.has(s, i);
      },
      keys() {
        return Object.keys(s);
      }
    },
    Vs
  );
}
function Ws(e, t, n = -1) {
  return n in e ? [...e.slice(0, n), t, ...e.slice(n)] : [...e, t];
}
function Yn(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Ys(e) {
  return typeof e == "number";
}
function Xs(e) {
  return Array.isArray(e);
}
function kt(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
function Zs(e) {
  return typeof e == "function";
}
function nn(e) {
  return (t) => `${e()}-${t}`;
}
function Le(e, t) {
  return e ? e === t || e.contains(t) : !1;
}
function Vt(e, t = !1) {
  const { activeElement: n } = Ke(e);
  if (!(n != null && n.nodeName))
    return null;
  if (Uo(n) && n.contentDocument)
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
function No(e) {
  return Ke(e).defaultView || window;
}
function Ke(e) {
  return e ? e.ownerDocument || e : document;
}
function Uo(e) {
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
function On() {
  return cr(/^Mac/i);
}
function Js() {
  return cr(/^iPhone/i);
}
function el() {
  return cr(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  On() && navigator.maxTouchPoints > 1;
}
function Go() {
  return Js() || el();
}
function tl() {
  return On() || Go();
}
function re(e, t) {
  return t && (Zs(t) ? t(e) : t[0](t[1], e)), e == null ? void 0 : e.defaultPrevented;
}
function ge(e) {
  return (t) => {
    for (const n of e)
      re(t, n);
  };
}
function nl(e) {
  return On() ? e.metaKey && !e.ctrlKey : e.ctrlKey && !e.metaKey;
}
function be(e) {
  if (e)
    if (rl())
      e.focus({ preventScroll: !0 });
    else {
      const t = ol(e);
      e.focus(), il(t);
    }
}
var vn = null;
function rl() {
  if (vn == null) {
    vn = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return vn = !0, !0;
        }
      });
    } catch {
    }
  }
  return vn;
}
function ol(e) {
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
function il(e) {
  for (const { element: t, scrollTop: n, scrollLeft: r } of e)
    t.scrollTop = n, t.scrollLeft = r;
}
var Vo = [
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
], sl = [...Vo, '[tabindex]:not([tabindex="-1"]):not([disabled])'], ur = Vo.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])", ll = sl.join(
  ':not([hidden]):not([tabindex="-1"]),'
);
function jo(e, t) {
  const r = Array.from(e.querySelectorAll(ur)).filter(eo);
  return t && eo(e) && r.unshift(e), r.forEach((o, s) => {
    if (Uo(o) && o.contentDocument) {
      const l = o.contentDocument.body, i = jo(l, !1);
      r.splice(s, 1, ...i);
    }
  }), r;
}
function eo(e) {
  return Ho(e) && !al(e);
}
function Ho(e) {
  return e.matches(ur) && dr(e);
}
function al(e) {
  return parseInt(e.getAttribute("tabindex") || "0", 10) < 0;
}
function dr(e, t) {
  return e.nodeName !== "#comment" && cl(e) && ul(e, t) && (!e.parentElement || dr(e.parentElement, e));
}
function cl(e) {
  if (!(e instanceof HTMLElement) && !(e instanceof SVGElement))
    return !1;
  const { display: t, visibility: n } = e.style;
  let r = t !== "none" && n !== "hidden" && n !== "collapse";
  if (r) {
    if (!e.ownerDocument.defaultView)
      return r;
    const { getComputedStyle: o } = e.ownerDocument.defaultView, { display: s, visibility: l } = o(e);
    r = s !== "none" && l !== "hidden" && l !== "collapse";
  }
  return r;
}
function ul(e, t) {
  return !e.hasAttribute("hidden") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function dl(e, t) {
  return t.some((n) => n.contains(e));
}
function fl(e, t, n) {
  const r = t != null && t.tabbable ? ll : ur, o = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode(s) {
      var l;
      return (l = t == null ? void 0 : t.from) != null && l.contains(s) ? NodeFilter.FILTER_REJECT : s.matches(r) && dr(s) && (!n || dl(s, n)) && (!(t != null && t.accept) || t.accept(s)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  return t != null && t.from && (o.currentNode = t.from), o;
}
function gl() {
}
function hl(e, t) {
  const [n, r] = e;
  let o = !1;
  const s = t.length;
  for (let l = s, i = 0, a = l - 1; i < l; a = i++) {
    const [c, h] = t[i], [f, d] = t[a], [, g] = t[a === 0 ? l - 1 : a - 1] || [0, 0], u = (h - d) * (n - c) - (c - f) * (r - h);
    if (d < h) {
      if (r >= d && r < h) {
        if (u === 0)
          return !0;
        u > 0 && (r === d ? r > g && (o = !o) : o = !o);
      }
    } else if (h < d) {
      if (r > h && r <= d) {
        if (u === 0)
          return !0;
        u < 0 && (r === d ? r < g && (o = !o) : o = !o);
      }
    } else if (r == h && (n >= f && n <= c || n >= c && n <= f))
      return !0;
  }
  return o;
}
function W(e, t) {
  return j(e, t);
}
var Nt = /* @__PURE__ */ new Map(), to = /* @__PURE__ */ new Set();
function no() {
  if (typeof window > "u")
    return;
  const e = (n) => {
    if (!n.target)
      return;
    let r = Nt.get(n.target);
    r || (r = /* @__PURE__ */ new Set(), Nt.set(n.target, r), n.target.addEventListener("transitioncancel", t)), r.add(n.propertyName);
  }, t = (n) => {
    if (!n.target)
      return;
    const r = Nt.get(n.target);
    if (r && (r.delete(n.propertyName), r.size === 0 && (n.target.removeEventListener("transitioncancel", t), Nt.delete(n.target)), Nt.size === 0)) {
      for (const o of to)
        o();
      to.clear();
    }
  };
  document.body.addEventListener("transitionrun", e), document.body.addEventListener("transitionend", t);
}
typeof document < "u" && (document.readyState !== "loading" ? no() : document.addEventListener("DOMContentLoaded", no));
function ro(e, t) {
  const n = oo(e, t, "left"), r = oo(e, t, "top"), o = t.offsetWidth, s = t.offsetHeight;
  let l = e.scrollLeft, i = e.scrollTop;
  const a = l + e.offsetWidth, c = i + e.offsetHeight;
  n <= l ? l = n : n + o > a && (l += n + o - a), r <= i ? i = r : r + s > c && (i += r + s - c), e.scrollLeft = l, e.scrollTop = i;
}
function oo(e, t, n) {
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
var Qo = {
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
}, Xn = Symbol("store-raw"), At = Symbol("store-node"), Ye = Symbol("store-has"), Wo = Symbol("store-self");
function Yo(e) {
  let t = e[ut];
  if (!t && (Object.defineProperty(e, ut, {
    value: t = new Proxy(e, ml)
  }), !Array.isArray(e))) {
    const n = Object.keys(e), r = Object.getOwnPropertyDescriptors(e);
    for (let o = 0, s = n.length; o < s; o++) {
      const l = n[o];
      r[l].get && Object.defineProperty(e, l, {
        enumerable: r[l].enumerable,
        get: r[l].get.bind(t)
      });
    }
  }
  return t;
}
function wn(e) {
  let t;
  return e != null && typeof e == "object" && (e[ut] || !(t = Object.getPrototypeOf(e)) || t === Object.prototype || Array.isArray(e));
}
function Yt(e, t = /* @__PURE__ */ new Set()) {
  let n, r, o, s;
  if (n = e != null && e[Xn])
    return n;
  if (!wn(e) || t.has(e))
    return e;
  if (Array.isArray(e)) {
    Object.isFrozen(e) ? e = e.slice(0) : t.add(e);
    for (let l = 0, i = e.length; l < i; l++)
      o = e[l], (r = Yt(o, t)) !== o && (e[l] = r);
  } else {
    Object.isFrozen(e) ? e = Object.assign({}, e) : t.add(e);
    const l = Object.keys(e), i = Object.getOwnPropertyDescriptors(e);
    for (let a = 0, c = l.length; a < c; a++)
      s = l[a], !i[s].get && (o = e[s], (r = Yt(o, t)) !== o && (e[s] = r));
  }
  return e;
}
function Cn(e, t) {
  let n = e[t];
  return n || Object.defineProperty(e, t, {
    value: n = /* @__PURE__ */ Object.create(null)
  }), n;
}
function Xt(e, t, n) {
  if (e[t])
    return e[t];
  const [r, o] = z(n, {
    equals: !1,
    internal: !0
  });
  return r.$ = o, e[t] = r;
}
function yl(e, t) {
  const n = Reflect.getOwnPropertyDescriptor(e, t);
  return !n || n.get || !n.configurable || t === ut || t === At || (delete n.value, delete n.writable, n.get = () => e[ut][t]), n;
}
function Xo(e) {
  Hn() && Xt(Cn(e, At), Wo)();
}
function vl(e) {
  return Xo(e), Reflect.ownKeys(e);
}
var ml = {
  get(e, t, n) {
    if (t === Xn)
      return e;
    if (t === ut)
      return n;
    if (t === $n)
      return Xo(e), n;
    const r = Cn(e, At), o = r[t];
    let s = o ? o() : e[t];
    if (t === At || t === Ye || t === "__proto__")
      return s;
    if (!o) {
      const l = Object.getOwnPropertyDescriptor(e, t);
      Hn() && (typeof s != "function" || e.hasOwnProperty(t)) && !(l && l.get) && (s = Xt(r, t, s)());
    }
    return wn(s) ? Yo(s) : s;
  },
  has(e, t) {
    return t === Xn || t === ut || t === $n || t === At || t === Ye || t === "__proto__" ? !0 : (Hn() && Xt(Cn(e, Ye), t)(), t in e);
  },
  set() {
    return !0;
  },
  deleteProperty() {
    return !0;
  },
  ownKeys: vl,
  getOwnPropertyDescriptor: yl
};
function Sn(e, t, n, r = !1) {
  if (!r && e[t] === n)
    return;
  const o = e[t], s = e.length;
  n === void 0 ? (delete e[t], e[Ye] && e[Ye][t] && o !== void 0 && e[Ye][t].$()) : (e[t] = n, e[Ye] && e[Ye][t] && o === void 0 && e[Ye][t].$());
  let l = Cn(e, At), i;
  if ((i = Xt(l, t, o)) && i.$(() => n), Array.isArray(e) && e.length !== s) {
    for (let a = e.length; a < s; a++)
      (i = l[a]) && i.$();
    (i = Xt(l, "length", s)) && i.$(e.length);
  }
  (i = l[Wo]) && i.$();
}
function Zo(e, t) {
  const n = Object.keys(t);
  for (let r = 0; r < n.length; r += 1) {
    const o = n[r];
    Sn(e, o, t[o]);
  }
}
function bl(e, t) {
  if (typeof t == "function" && (t = t(e)), t = Yt(t), Array.isArray(t)) {
    if (e === t)
      return;
    let n = 0, r = t.length;
    for (; n < r; n++) {
      const o = t[n];
      e[n] !== o && Sn(e, n, o);
    }
    Sn(e, "length", r);
  } else
    Zo(e, t);
}
function jt(e, t, n = []) {
  let r, o = e;
  if (t.length > 1) {
    r = t.shift();
    const l = typeof r, i = Array.isArray(e);
    if (Array.isArray(r)) {
      for (let a = 0; a < r.length; a++)
        jt(e, [r[a]].concat(t), n);
      return;
    } else if (i && l === "function") {
      for (let a = 0; a < e.length; a++)
        r(e[a], a) && jt(e, [a].concat(t), n);
      return;
    } else if (i && l === "object") {
      const { from: a = 0, to: c = e.length - 1, by: h = 1 } = r;
      for (let f = a; f <= c; f += h)
        jt(e, [f].concat(t), n);
      return;
    } else if (t.length > 1) {
      jt(e[r], t, [r].concat(n));
      return;
    }
    o = e[r], n = [r].concat(n);
  }
  let s = t[0];
  typeof s == "function" && (s = s(o, n), s === o) || r === void 0 && s == null || (s = Yt(s), r === void 0 || wn(o) && wn(s) && !Array.isArray(s) ? Zo(o, s) : Sn(e, r, s));
}
function xl(...[e, t]) {
  const n = Yt(e || {}), r = Array.isArray(n), o = Yo(n);
  function s(...l) {
    Po(() => {
      r && l.length === 1 ? bl(n, l[0]) : jt(n, l);
    });
  }
  return [o, s];
}
var $l = class {
  getStringForLocale(e, t) {
    let n = this.messages[t];
    n || (n = pl(t, this.messages, this.defaultLocale), this.messages[t] = n);
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
function pl(e, t, n = "en-US") {
  if (t[e])
    return t[e];
  let r = wl(e);
  if (t[r])
    return t[r];
  for (let o in t)
    if (o.startsWith(r + "-"))
      return t[o];
  return t[n];
}
function wl(e) {
  return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0];
}
var Cl = ["top", "right", "bottom", "left"], dt = Math.min, Ae = Math.max, kn = Math.round, mn = Math.floor, ft = (e) => ({
  x: e,
  y: e
}), Sl = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, kl = {
  start: "end",
  end: "start"
};
function Zn(e, t, n) {
  return Ae(e, dt(t, n));
}
function xt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function gt(e) {
  return e.split("-")[0];
}
function Lt(e) {
  return e.split("-")[1];
}
function Jo(e) {
  return e === "x" ? "y" : "x";
}
function fr(e) {
  return e === "y" ? "height" : "width";
}
function rn(e) {
  return ["top", "bottom"].includes(gt(e)) ? "y" : "x";
}
function gr(e) {
  return Jo(rn(e));
}
function El(e, t, n) {
  n === void 0 && (n = !1);
  const r = Lt(e), o = gr(e), s = fr(o);
  let l = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (l = En(l)), [l, En(l)];
}
function _l(e) {
  const t = En(e);
  return [Jn(e), t, Jn(t)];
}
function Jn(e) {
  return e.replace(/start|end/g, (t) => kl[t]);
}
function Al(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], s = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? s : l;
    default:
      return [];
  }
}
function Fl(e, t, n, r) {
  const o = Lt(e);
  let s = Al(gt(e), n === "start", r);
  return o && (s = s.map((l) => l + "-" + o), t && (s = s.concat(s.map(Jn)))), s;
}
function En(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Sl[t]);
}
function Dl(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ei(e) {
  return typeof e != "number" ? Dl(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function _n(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function io(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = rn(t), l = gr(t), i = fr(l), a = gt(t), c = s === "y", h = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, d = r[i] / 2 - o[i] / 2;
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
  switch (Lt(t)) {
    case "start":
      g[l] -= d * (n && c ? -1 : 1);
      break;
    case "end":
      g[l] += d * (n && c ? -1 : 1);
      break;
  }
  return g;
}
var Il = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: l
  } = n, i = s.filter(Boolean), a = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let c = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: h,
    y: f
  } = io(c, r, a), d = r, g = {}, u = 0;
  for (let y = 0; y < i.length; y++) {
    const {
      name: m,
      fn: $
    } = i[y], {
      x,
      y: b,
      data: w,
      reset: p
    } = await $({
      x: h,
      y: f,
      initialPlacement: r,
      placement: d,
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
    }, p && u <= 50) {
      u++, typeof p == "object" && (p.placement && (d = p.placement), p.rects && (c = p.rects === !0 ? await l.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : p.rects), {
        x: h,
        y: f
      } = io(c, d, a)), y = -1;
      continue;
    }
  }
  return {
    x: h,
    y: f,
    placement: d,
    strategy: o,
    middlewareData: g
  };
};
async function Zt(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: l,
    elements: i,
    strategy: a
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: h = "viewport",
    elementContext: f = "floating",
    altBoundary: d = !1,
    padding: g = 0
  } = xt(t, e), u = ei(g), m = i[d ? f === "floating" ? "reference" : "floating" : f], $ = _n(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(m))) == null || n ? m : m.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: c,
    rootBoundary: h,
    strategy: a
  })), x = f === "floating" ? {
    ...l.floating,
    x: r,
    y: o
  } : l.reference, b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), w = await (s.isElement == null ? void 0 : s.isElement(b)) ? await (s.getScale == null ? void 0 : s.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, p = _n(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: x,
    offsetParent: b,
    strategy: a
  }) : x);
  return {
    top: ($.top - p.top + u.top) / w.y,
    bottom: (p.bottom - $.bottom + u.bottom) / w.y,
    left: ($.left - p.left + u.left) / w.x,
    right: (p.right - $.right + u.right) / w.x
  };
}
var Ll = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: s,
      platform: l,
      elements: i,
      middlewareData: a
    } = t, {
      element: c,
      padding: h = 0
    } = xt(e, t) || {};
    if (c == null)
      return {};
    const f = ei(h), d = {
      x: n,
      y: r
    }, g = gr(o), u = fr(g), y = await l.getDimensions(c), m = g === "y", $ = m ? "top" : "left", x = m ? "bottom" : "right", b = m ? "clientHeight" : "clientWidth", w = s.reference[u] + s.reference[g] - d[g] - s.floating[u], p = d[g] - s.reference[g], L = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(c));
    let q = L ? L[b] : 0;
    (!q || !await (l.isElement == null ? void 0 : l.isElement(L))) && (q = i.floating[b] || s.floating[u]);
    const A = w / 2 - p / 2, N = q / 2 - y[u] / 2 - 1, K = dt(f[$], N), B = dt(f[x], N), Y = K, se = q - y[u] - B, P = q / 2 - y[u] / 2 + A, H = Zn(Y, P, se), X = !a.arrow && Lt(o) != null && P != H && s.reference[u] / 2 - (P < Y ? K : B) - y[u] / 2 < 0, ee = X ? P < Y ? P - Y : P - se : 0;
    return {
      [g]: d[g] + ee,
      data: {
        [g]: H,
        centerOffset: P - H - ee,
        ...X && {
          alignmentOffset: ee
        }
      },
      reset: X
    };
  }
}), Ol = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: l,
        initialPlacement: i,
        platform: a,
        elements: c
      } = t, {
        mainAxis: h = !0,
        crossAxis: f = !0,
        fallbackPlacements: d,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: u = "none",
        flipAlignment: y = !0,
        ...m
      } = xt(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const $ = gt(o), x = gt(i) === i, b = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), w = d || (x || !y ? [En(i)] : _l(i));
      !d && u !== "none" && w.push(...Fl(i, y, u, b));
      const p = [i, ...w], L = await Zt(t, m), q = [];
      let A = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (h && q.push(L[$]), f) {
        const Y = El(o, l, b);
        q.push(L[Y[0]], L[Y[1]]);
      }
      if (A = [...A, {
        placement: o,
        overflows: q
      }], !q.every((Y) => Y <= 0)) {
        var N, K;
        const Y = (((N = s.flip) == null ? void 0 : N.index) || 0) + 1, se = p[Y];
        if (se)
          return {
            data: {
              index: Y,
              overflows: A
            },
            reset: {
              placement: se
            }
          };
        let P = (K = A.filter((H) => H.overflows[0] <= 0).sort((H, X) => H.overflows[1] - X.overflows[1])[0]) == null ? void 0 : K.placement;
        if (!P)
          switch (g) {
            case "bestFit": {
              var B;
              const H = (B = A.map((X) => [X.placement, X.overflows.filter((ee) => ee > 0).reduce((ee, ne) => ee + ne, 0)]).sort((X, ee) => X[1] - ee[1])[0]) == null ? void 0 : B[0];
              H && (P = H);
              break;
            }
            case "initialPlacement":
              P = i;
              break;
          }
        if (o !== P)
          return {
            reset: {
              placement: P
            }
          };
      }
      return {};
    }
  };
};
function so(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function lo(e) {
  return Cl.some((t) => e[t] >= 0);
}
var ql = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = xt(e, t);
      switch (r) {
        case "referenceHidden": {
          const s = await Zt(t, {
            ...o,
            elementContext: "reference"
          }), l = so(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: lo(l)
            }
          };
        }
        case "escaped": {
          const s = await Zt(t, {
            ...o,
            altBoundary: !0
          }), l = so(s, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: lo(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Ml(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), l = gt(n), i = Lt(n), a = rn(n) === "y", c = ["left", "top"].includes(l) ? -1 : 1, h = s && a ? -1 : 1, f = xt(t, e);
  let {
    mainAxis: d,
    crossAxis: g,
    alignmentAxis: u
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
  return i && typeof u == "number" && (g = i === "end" ? u * -1 : u), a ? {
    x: g * h,
    y: d * c
  } : {
    x: d * c,
    y: g * h
  };
}
var Tl = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await Ml(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
}, Pl = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: s = !0,
        crossAxis: l = !1,
        limiter: i = {
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
      } = xt(e, t), c = {
        x: n,
        y: r
      }, h = await Zt(t, a), f = rn(gt(o)), d = Jo(f);
      let g = c[d], u = c[f];
      if (s) {
        const m = d === "y" ? "top" : "left", $ = d === "y" ? "bottom" : "right", x = g + h[m], b = g - h[$];
        g = Zn(x, g, b);
      }
      if (l) {
        const m = f === "y" ? "top" : "left", $ = f === "y" ? "bottom" : "right", x = u + h[m], b = u - h[$];
        u = Zn(x, u, b);
      }
      const y = i.fn({
        ...t,
        [d]: g,
        [f]: u
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
}, zl = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: r,
        platform: o,
        elements: s
      } = t, {
        apply: l = () => {
        },
        ...i
      } = xt(e, t), a = await Zt(t, i), c = gt(n), h = Lt(n), f = rn(n) === "y", {
        width: d,
        height: g
      } = r.floating;
      let u, y;
      c === "top" || c === "bottom" ? (u = c, y = h === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (y = c, u = h === "end" ? "top" : "bottom");
      const m = g - a[u], $ = d - a[y], x = !t.middlewareData.shift;
      let b = m, w = $;
      if (f) {
        const L = d - a.left - a.right;
        w = h || x ? dt($, L) : L;
      } else {
        const L = g - a.top - a.bottom;
        b = h || x ? dt(m, L) : L;
      }
      if (x && !h) {
        const L = Ae(a.left, 0), q = Ae(a.right, 0), A = Ae(a.top, 0), N = Ae(a.bottom, 0);
        f ? w = d - 2 * (L !== 0 || q !== 0 ? L + q : Ae(a.left, a.right)) : b = g - 2 * (A !== 0 || N !== 0 ? A + N : Ae(a.top, a.bottom));
      }
      await l({
        ...t,
        availableWidth: w,
        availableHeight: b
      });
      const p = await o.getDimensions(s.floating);
      return d !== p.width || g !== p.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ht(e) {
  return ti(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Fe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function tt(e) {
  var t;
  return (t = (ti(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ti(e) {
  return e instanceof Node || e instanceof Fe(e).Node;
}
function Je(e) {
  return e instanceof Element || e instanceof Fe(e).Element;
}
function Ne(e) {
  return e instanceof HTMLElement || e instanceof Fe(e).HTMLElement;
}
function ao(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Fe(e).ShadowRoot;
}
function on(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = qe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Kl(e) {
  return ["table", "td", "th"].includes(ht(e));
}
function hr(e) {
  const t = yr(), n = qe(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Bl(e) {
  let t = Dt(e);
  for (; Ne(t) && !qn(t); ) {
    if (hr(t))
      return t;
    t = Dt(t);
  }
  return null;
}
function yr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function qn(e) {
  return ["html", "body", "#document"].includes(ht(e));
}
function qe(e) {
  return Fe(e).getComputedStyle(e);
}
function Mn(e) {
  return Je(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Dt(e) {
  if (ht(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ao(e) && e.host || // Fallback.
    tt(e)
  );
  return ao(t) ? t.host : t;
}
function ni(e) {
  const t = Dt(e);
  return qn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ne(t) && on(t) ? t : ni(t);
}
function Jt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = ni(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), l = Fe(o);
  return s ? t.concat(l, l.visualViewport || [], on(o) ? o : [], l.frameElement && n ? Jt(l.frameElement) : []) : t.concat(o, Jt(o, [], n));
}
function ri(e) {
  const t = qe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Ne(e), s = o ? e.offsetWidth : n, l = o ? e.offsetHeight : r, i = kn(n) !== s || kn(r) !== l;
  return i && (n = s, r = l), {
    width: n,
    height: r,
    $: i
  };
}
function vr(e) {
  return Je(e) ? e : e.contextElement;
}
function Ft(e) {
  const t = vr(e);
  if (!Ne(t))
    return ft(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = ri(t);
  let l = (s ? kn(n.width) : n.width) / r, i = (s ? kn(n.height) : n.height) / o;
  return (!l || !Number.isFinite(l)) && (l = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: l,
    y: i
  };
}
var Rl = /* @__PURE__ */ ft(0);
function oi(e) {
  const t = Fe(e);
  return !yr() || !t.visualViewport ? Rl : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Nl(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Fe(e) ? !1 : t;
}
function bt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = vr(e);
  let l = ft(1);
  t && (r ? Je(r) && (l = Ft(r)) : l = Ft(e));
  const i = Nl(s, n, r) ? oi(s) : ft(0);
  let a = (o.left + i.x) / l.x, c = (o.top + i.y) / l.y, h = o.width / l.x, f = o.height / l.y;
  if (s) {
    const d = Fe(s), g = r && Je(r) ? Fe(r) : r;
    let u = d.frameElement;
    for (; u && r && g !== d; ) {
      const y = Ft(u), m = u.getBoundingClientRect(), $ = qe(u), x = m.left + (u.clientLeft + parseFloat($.paddingLeft)) * y.x, b = m.top + (u.clientTop + parseFloat($.paddingTop)) * y.y;
      a *= y.x, c *= y.y, h *= y.x, f *= y.y, a += x, c += b, u = Fe(u).frameElement;
    }
  }
  return _n({
    width: h,
    height: f,
    x: a,
    y: c
  });
}
function Ul(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = Ne(n), s = tt(n);
  if (n === s)
    return t;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, i = ft(1);
  const a = ft(0);
  if ((o || !o && r !== "fixed") && ((ht(n) !== "body" || on(s)) && (l = Mn(n)), Ne(n))) {
    const c = bt(n);
    i = Ft(n), a.x = c.x + n.clientLeft, a.y = c.y + n.clientTop;
  }
  return {
    width: t.width * i.x,
    height: t.height * i.y,
    x: t.x * i.x - l.scrollLeft * i.x + a.x,
    y: t.y * i.y - l.scrollTop * i.y + a.y
  };
}
function Gl(e) {
  return Array.from(e.getClientRects());
}
function ii(e) {
  return bt(tt(e)).left + Mn(e).scrollLeft;
}
function Vl(e) {
  const t = tt(e), n = Mn(e), r = e.ownerDocument.body, o = Ae(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = Ae(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -n.scrollLeft + ii(e);
  const i = -n.scrollTop;
  return qe(r).direction === "rtl" && (l += Ae(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: l,
    y: i
  };
}
function jl(e, t) {
  const n = Fe(e), r = tt(e), o = n.visualViewport;
  let s = r.clientWidth, l = r.clientHeight, i = 0, a = 0;
  if (o) {
    s = o.width, l = o.height;
    const c = yr();
    (!c || c && t === "fixed") && (i = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: s,
    height: l,
    x: i,
    y: a
  };
}
function Hl(e, t) {
  const n = bt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = Ne(e) ? Ft(e) : ft(1), l = e.clientWidth * s.x, i = e.clientHeight * s.y, a = o * s.x, c = r * s.y;
  return {
    width: l,
    height: i,
    x: a,
    y: c
  };
}
function co(e, t, n) {
  let r;
  if (t === "viewport")
    r = jl(e, n);
  else if (t === "document")
    r = Vl(tt(e));
  else if (Je(t))
    r = Hl(t, n);
  else {
    const o = oi(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return _n(r);
}
function si(e, t) {
  const n = Dt(e);
  return n === t || !Je(n) || qn(n) ? !1 : qe(n).position === "fixed" || si(n, t);
}
function Ql(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Jt(e, [], !1).filter((i) => Je(i) && ht(i) !== "body"), o = null;
  const s = qe(e).position === "fixed";
  let l = s ? Dt(e) : e;
  for (; Je(l) && !qn(l); ) {
    const i = qe(l), a = hr(l);
    !a && i.position === "fixed" && (o = null), (s ? !a && !o : !a && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || on(l) && !a && si(e, l)) ? r = r.filter((h) => h !== l) : o = i, l = Dt(l);
  }
  return t.set(e, r), r;
}
function Wl(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const l = [...n === "clippingAncestors" ? Ql(t, this._c) : [].concat(n), r], i = l[0], a = l.reduce((c, h) => {
    const f = co(t, h, o);
    return c.top = Ae(f.top, c.top), c.right = dt(f.right, c.right), c.bottom = dt(f.bottom, c.bottom), c.left = Ae(f.left, c.left), c;
  }, co(t, i, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Yl(e) {
  return ri(e);
}
function Xl(e, t, n) {
  const r = Ne(t), o = tt(t), s = n === "fixed", l = bt(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = ft(0);
  if (r || !r && !s)
    if ((ht(t) !== "body" || on(o)) && (i = Mn(t)), r) {
      const c = bt(t, !0, s, t);
      a.x = c.x + t.clientLeft, a.y = c.y + t.clientTop;
    } else
      o && (a.x = ii(o));
  return {
    x: l.left + i.scrollLeft - a.x,
    y: l.top + i.scrollTop - a.y,
    width: l.width,
    height: l.height
  };
}
function uo(e, t) {
  return !Ne(e) || qe(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function li(e, t) {
  const n = Fe(e);
  if (!Ne(e))
    return n;
  let r = uo(e, t);
  for (; r && Kl(r) && qe(r).position === "static"; )
    r = uo(r, t);
  return r && (ht(r) === "html" || ht(r) === "body" && qe(r).position === "static" && !hr(r)) ? n : r || Bl(e) || n;
}
var Zl = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || li, s = this.getDimensions;
  return {
    reference: Xl(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await s(n)
    }
  };
};
function Jl(e) {
  return qe(e).direction === "rtl";
}
var ai = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ul,
  getDocumentElement: tt,
  getClippingRect: Wl,
  getOffsetParent: li,
  getElementRects: Zl,
  getClientRects: Gl,
  getDimensions: Yl,
  getScale: Ft,
  isElement: Je,
  isRTL: Jl
};
function ea(e, t) {
  let n = null, r;
  const o = tt(e);
  function s() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function l(i, a) {
    i === void 0 && (i = !1), a === void 0 && (a = 1), s();
    const {
      left: c,
      top: h,
      width: f,
      height: d
    } = e.getBoundingClientRect();
    if (i || t(), !f || !d)
      return;
    const g = mn(h), u = mn(o.clientWidth - (c + f)), y = mn(o.clientHeight - (h + d)), m = mn(c), x = {
      rootMargin: -g + "px " + -u + "px " + -y + "px " + -m + "px",
      threshold: Ae(0, dt(1, a)) || 1
    };
    let b = !0;
    function w(p) {
      const L = p[0].intersectionRatio;
      if (L !== a) {
        if (!b)
          return l();
        L ? l(!1, L) : r = setTimeout(() => {
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
  return l(!0), s;
}
function ta(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = r, c = vr(e), h = o || s ? [...c ? Jt(c) : [], ...Jt(t)] : [];
  h.forEach(($) => {
    o && $.addEventListener("scroll", n, {
      passive: !0
    }), s && $.addEventListener("resize", n);
  });
  const f = c && i ? ea(c, n) : null;
  let d = -1, g = null;
  l && (g = new ResizeObserver(($) => {
    let [x] = $;
    x && x.target === c && g && (g.unobserve(t), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      g && g.observe(t);
    })), n();
  }), c && !a && g.observe(c), g.observe(t));
  let u, y = a ? bt(e) : null;
  a && m();
  function m() {
    const $ = bt(e);
    y && ($.x !== y.x || $.y !== y.y || $.width !== y.width || $.height !== y.height) && n(), y = $, u = requestAnimationFrame(m);
  }
  return n(), () => {
    h.forEach(($) => {
      o && $.removeEventListener("scroll", n), s && $.removeEventListener("resize", n);
    }), f && f(), g && g.disconnect(), g = null, a && cancelAnimationFrame(u);
  };
}
var na = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: ai,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return Il(e, t, {
    ...o,
    platform: s
  });
};
function er(e) {
  let t = e.startIndex ?? 0;
  const n = e.startLevel ?? 0, r = [], o = (a) => {
    if (a == null)
      return "";
    const c = e.getKey ?? "key", h = kt(c) ? a[c] : c(a);
    return h != null ? String(h) : "";
  }, s = (a) => {
    if (a == null)
      return "";
    const c = e.getTextValue ?? "textValue", h = kt(c) ? a[c] : c(a);
    return h != null ? String(h) : "";
  }, l = (a) => {
    if (a == null)
      return !1;
    const c = e.getDisabled ?? "disabled";
    return (kt(c) ? a[c] : c(a)) ?? !1;
  }, i = (a) => {
    var c;
    if (a != null)
      return kt(e.getSectionChildren) ? a[e.getSectionChildren] : (c = e.getSectionChildren) == null ? void 0 : c.call(e, a);
  };
  for (const a of e.dataSource) {
    if (kt(a) || Ys(a)) {
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
    if (i(a) != null) {
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
      const c = i(a) ?? [];
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
        textValue: s(a),
        disabled: l(a),
        level: n,
        index: t
      }), t++;
  }
  return r;
}
function ra(e, t = []) {
  const n = er({
    dataSource: C(e.dataSource),
    getKey: C(e.getKey),
    getTextValue: C(e.getTextValue),
    getDisabled: C(e.getDisabled),
    getSectionChildren: C(e.getSectionChildren)
  }), [r, o] = z(e.factory(n));
  return U(ze([() => C(e.dataSource), () => C(e.getKey), () => C(e.getTextValue), () => C(e.getDisabled), () => C(e.getSectionChildren), () => e.factory, ...t], ([s, l, i, a, c, h]) => {
    const f = er({
      dataSource: s,
      getKey: l,
      getTextValue: i,
      getDisabled: a,
      getSectionChildren: c
    });
    o(() => h(f));
  }, {
    defer: !0
  })), r;
}
function sn(e) {
  var l;
  const [t, n] = z((l = e.defaultValue) == null ? void 0 : l.call(e)), r = D(() => {
    var i;
    return ((i = e.value) == null ? void 0 : i.call(e)) !== void 0;
  }), o = D(() => {
    var i;
    return r() ? (i = e.value) == null ? void 0 : i.call(e) : t();
  });
  return [o, (i) => {
    Qt(() => {
      var c;
      const a = Ds(i, o());
      return Object.is(a, o()) || (r() || n(a), (c = e.onChange) == null || c.call(e, a)), a;
    });
  }];
}
function ci(e) {
  const [t, n] = sn(e);
  return [() => t() ?? !1, n];
}
function oa(e) {
  const [t, n] = sn(e);
  return [() => t() ?? [], n];
}
function ui(e = {}) {
  const [t, n] = ci({
    value: () => C(e.open),
    defaultValue: () => !!C(e.defaultOpen),
    onChange: (l) => {
      var i;
      return (i = e.onOpenChange) == null ? void 0 : i.call(e, l);
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
function ia(e) {
  const t = (n) => {
    var r;
    n.key === ar.Escape && ((r = e.onEscapeKeyDown) == null || r.call(e, n));
  };
  U(() => {
    var r;
    if (C(e.isDisabled))
      return;
    const n = ((r = e.ownerDocument) == null ? void 0 : r.call(e)) ?? Ke();
    n.addEventListener("keydown", t), V(() => {
      n.removeEventListener("keydown", t);
    });
  });
}
var An = "data-kb-top-layer", di, tr = !1, et = [];
function en(e) {
  return et.findIndex((t) => t.node === e);
}
function sa(e) {
  return et[en(e)];
}
function la(e) {
  return et[et.length - 1].node === e;
}
function fi() {
  return et.filter((e) => e.isPointerBlocking);
}
function aa() {
  return [...fi()].slice(-1)[0];
}
function mr() {
  return fi().length > 0;
}
function gi(e) {
  var n;
  const t = en((n = aa()) == null ? void 0 : n.node);
  return en(e) < t;
}
function ca(e) {
  et.push(e);
}
function ua(e) {
  const t = en(e);
  t < 0 || et.splice(t, 1);
}
function da() {
  et.forEach(({
    node: e
  }) => {
    e.style.pointerEvents = gi(e) ? "none" : "auto";
  });
}
function fa(e) {
  if (mr() && !tr) {
    const t = Ke(e);
    di = document.body.style.pointerEvents, t.body.style.pointerEvents = "none", tr = !0;
  }
}
function ga(e) {
  if (mr())
    return;
  const t = Ke(e);
  t.body.style.pointerEvents = di, t.body.style.length === 0 && t.body.removeAttribute("style"), tr = !1;
}
var Ee = {
  layers: et,
  isTopMostLayer: la,
  hasPointerBlockingLayer: mr,
  isBelowPointerBlockingLayer: gi,
  addLayer: ca,
  removeLayer: ua,
  indexOf: en,
  find: sa,
  assignPointerEventToLayers: da,
  disableBodyPointerEvents: fa,
  restoreBodyPointerEvents: ga
}, Rn = "focusScope.autoFocusOnMount", Nn = "focusScope.autoFocusOnUnmount", fo = {
  bubbles: !1,
  cancelable: !0
}, go = {
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
function ha(e, t) {
  const [n, r] = z(!1), o = {
    pause() {
      r(!0);
    },
    resume() {
      r(!1);
    }
  };
  let s = null;
  const l = (u) => {
    var y;
    return (y = e.onMountAutoFocus) == null ? void 0 : y.call(e, u);
  }, i = (u) => {
    var y;
    return (y = e.onUnmountAutoFocus) == null ? void 0 : y.call(e, u);
  }, a = () => Ke(t()), c = () => {
    const u = a().createElement("span");
    return u.setAttribute("data-focus-trap", ""), u.tabIndex = 0, Object.assign(u.style, Qo), u;
  }, h = () => {
    const u = t();
    return u ? jo(u, !0).filter((y) => !y.hasAttribute("data-focus-trap")) : [];
  }, f = () => {
    const u = h();
    return u.length > 0 ? u[0] : null;
  }, d = () => {
    const u = h();
    return u.length > 0 ? u[u.length - 1] : null;
  }, g = () => {
    const u = t();
    if (!u)
      return !1;
    const y = Vt(u);
    return !y || Le(u, y) ? !1 : Ho(y);
  };
  U(() => {
    const u = t();
    if (!u)
      return;
    go.add(o);
    const y = Vt(u);
    if (!Le(u, y)) {
      const $ = new CustomEvent(Rn, fo);
      u.addEventListener(Rn, l), u.dispatchEvent($), $.defaultPrevented || setTimeout(() => {
        be(f()), Vt(u) === y && be(u);
      }, 0);
    }
    V(() => {
      u.removeEventListener(Rn, l), setTimeout(() => {
        const $ = new CustomEvent(Nn, fo);
        g() && $.preventDefault(), u.addEventListener(Nn, i), u.dispatchEvent($), $.defaultPrevented || be(y ?? a().body), u.removeEventListener(Nn, i), go.remove(o);
      }, 0);
    });
  }), U(() => {
    const u = t();
    if (!u || !C(e.trapFocus) || n())
      return;
    const y = ($) => {
      const x = $.target;
      x != null && x.closest(`[${An}]`) || (Le(u, x) ? s = x : be(s));
    }, m = ($) => {
      const b = $.relatedTarget ?? Vt(u);
      b != null && b.closest(`[${An}]`) || Le(u, b) || be(s);
    };
    a().addEventListener("focusin", y), a().addEventListener("focusout", m), V(() => {
      a().removeEventListener("focusin", y), a().removeEventListener("focusout", m);
    });
  }), U(() => {
    const u = t();
    if (!u || !C(e.trapFocus) || n())
      return;
    const y = c();
    u.insertAdjacentElement("afterbegin", y);
    const m = c();
    u.insertAdjacentElement("beforeend", m);
    function $(b) {
      const w = f(), p = d();
      b.relatedTarget === w ? be(p) : be(w);
    }
    y.addEventListener("focusin", $), m.addEventListener("focusin", $);
    const x = new MutationObserver((b) => {
      for (const w of b)
        w.previousSibling === m && (m.remove(), u.insertAdjacentElement("beforeend", m)), w.nextSibling === y && (y.remove(), u.insertAdjacentElement("afterbegin", y));
    });
    x.observe(u, {
      childList: !0,
      subtree: !1
    }), V(() => {
      y.removeEventListener("focusin", $), m.removeEventListener("focusin", $), y.remove(), m.remove(), x.disconnect();
    });
  });
}
function ya(e, t) {
  U(ze(e, (n) => {
    if (n == null)
      return;
    const r = va(n);
    r != null && (r.addEventListener("reset", t, {
      passive: !0
    }), V(() => {
      r.removeEventListener("reset", t);
    }));
  }));
}
function va(e) {
  return ma(e) ? e.form : e.closest("form");
}
function ma(e) {
  return e.matches("textarea, input, select, button");
}
var ba = "data-live-announcer";
function xa(e) {
  U(() => {
    C(e.isDisabled) || V($a(C(e.targets), C(e.root)));
  });
}
var Ut = /* @__PURE__ */ new WeakMap(), Ie = [];
function $a(e, t = document.body) {
  const n = new Set(e), r = /* @__PURE__ */ new Set(), o = (a) => {
    for (const d of a.querySelectorAll(`[${ba}], [${An}]`))
      n.add(d);
    const c = (d) => {
      if (n.has(d) || d.parentElement && r.has(d.parentElement) && d.parentElement.getAttribute("role") !== "row")
        return NodeFilter.FILTER_REJECT;
      for (const g of n)
        if (d.contains(g))
          return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    }, h = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
      acceptNode: c
    }), f = c(a);
    if (f === NodeFilter.FILTER_ACCEPT && s(a), f !== NodeFilter.FILTER_REJECT) {
      let d = h.nextNode();
      for (; d != null; )
        s(d), d = h.nextNode();
    }
  }, s = (a) => {
    const c = Ut.get(a) ?? 0;
    a.getAttribute("aria-hidden") === "true" && c === 0 || (c === 0 && a.setAttribute("aria-hidden", "true"), r.add(a), Ut.set(a, c + 1));
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
  const i = {
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
  return Ie.push(i), () => {
    l.disconnect();
    for (const a of r) {
      const c = Ut.get(a);
      if (c == null)
        return;
      c === 1 ? (a.removeAttribute("aria-hidden"), Ut.delete(a)) : Ut.set(a, c - 1);
    }
    i === Ie[Ie.length - 1] ? (Ie.pop(), Ie.length && Ie[Ie.length - 1].observe()) : Ie.splice(Ie.indexOf(i), 1);
  };
}
var ho = "interactOutside.pointerDownOutside", yo = "interactOutside.focusOutside";
function pa(e, t) {
  let n, r = gl;
  const o = () => Ke(t()), s = (f) => {
    var d;
    return (d = e.onPointerDownOutside) == null ? void 0 : d.call(e, f);
  }, l = (f) => {
    var d;
    return (d = e.onFocusOutside) == null ? void 0 : d.call(e, f);
  }, i = (f) => {
    var d;
    return (d = e.onInteractOutside) == null ? void 0 : d.call(e, f);
  }, a = (f) => {
    var g;
    const d = f.target;
    return !(d instanceof HTMLElement) || d.closest(`[${An}]`) || !Le(o(), d) || Le(t(), d) ? !1 : !((g = e.shouldExcludeElement) != null && g.call(e, d));
  }, c = (f) => {
    function d() {
      const g = t(), u = f.target;
      if (!g || !u || !a(f))
        return;
      const y = ge([s, i]);
      u.addEventListener(ho, y, {
        once: !0
      });
      const m = new CustomEvent(ho, {
        bubbles: !1,
        cancelable: !0,
        detail: {
          originalEvent: f,
          isContextMenu: f.button === 2 || nl(f) && f.button === 0
        }
      });
      u.dispatchEvent(m);
    }
    f.pointerType === "touch" ? (o().removeEventListener("click", d), r = d, o().addEventListener("click", d, {
      once: !0
    })) : d();
  }, h = (f) => {
    const d = t(), g = f.target;
    if (!d || !g || !a(f))
      return;
    const u = ge([l, i]);
    g.addEventListener(yo, u, {
      once: !0
    });
    const y = new CustomEvent(yo, {
      bubbles: !1,
      cancelable: !0,
      detail: {
        originalEvent: f,
        isContextMenu: !1
      }
    });
    g.dispatchEvent(y);
  };
  U(() => {
    C(e.isDisabled) || (n = window.setTimeout(() => {
      o().addEventListener("pointerdown", c, !0);
    }, 0), o().addEventListener("focusin", h, !0), V(() => {
      window.clearTimeout(n), o().removeEventListener("click", r), o().removeEventListener("pointerdown", c, !0), o().removeEventListener("focusin", h, !0);
    }));
  });
}
function hi(e) {
  const [t, n] = z();
  let r = {}, o = e(), s = "none";
  const [l, i] = wa(e() ? "mounted" : "unmounted", {
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
  return U(ze(l, (a) => {
    const c = bn(r);
    s = a === "mounted" ? c : "none";
  })), U(ze(e, (a) => {
    if (o === a)
      return;
    const c = bn(r);
    a ? i("MOUNT") : (r == null ? void 0 : r.display) === "none" ? i("UNMOUNT") : i(o && s !== c ? "ANIMATION_OUT" : "UNMOUNT"), o = a;
  })), U(ze(t, (a) => {
    if (a) {
      const c = (f) => {
        const g = bn(r).includes(f.animationName);
        f.target === a && g && i("ANIMATION_END");
      }, h = (f) => {
        f.target === a && (s = bn(r));
      };
      a.addEventListener("animationstart", h), a.addEventListener("animationcancel", c), a.addEventListener("animationend", c), V(() => {
        a.removeEventListener("animationstart", h), a.removeEventListener("animationcancel", c), a.removeEventListener("animationend", c);
      });
    } else
      i("ANIMATION_END");
  })), {
    isPresent: () => ["mounted", "unmountSuspended"].includes(l()),
    setRef: (a) => {
      a && (r = getComputedStyle(a)), n(a);
    }
  };
}
function bn(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function wa(e, t) {
  const n = (l, i) => t[l][i] ?? l, [r, o] = z(e);
  return [r, (l) => {
    o((i) => n(i, l));
  }];
}
var Un = "data-kb-scroll-lock";
function vo(e, t) {
  if (!e)
    return () => {
    };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function Ca(e, t, n) {
  if (!e)
    return () => {
    };
  const r = e.style.getPropertyValue(t);
  return e.style.setProperty(t, n), () => {
    r ? e.style.setProperty(t, r) : e.style.removeProperty(t);
  };
}
function Sa(e) {
  const t = e.getBoundingClientRect().left;
  return Math.round(t) + e.scrollLeft ? "paddingLeft" : "paddingRight";
}
function ka(e) {
  U(() => {
    if (!C(e.ownerRef) || C(e.isDisabled))
      return;
    const t = Ke(C(e.ownerRef)), n = No(C(e.ownerRef)), {
      documentElement: r,
      body: o
    } = t;
    if (o.hasAttribute(Un))
      return;
    o.setAttribute(Un, "");
    const l = n.innerWidth - r.clientWidth, i = () => Ca(r, "--scrollbar-width", `${l}px`), a = Sa(r), c = () => vo(o, {
      overflow: "hidden",
      [a]: `${l}px`
    }), h = () => {
      const {
        scrollX: d,
        scrollY: g,
        visualViewport: u
      } = n, y = (u == null ? void 0 : u.offsetLeft) ?? 0, m = (u == null ? void 0 : u.offsetTop) ?? 0, $ = vo(o, {
        position: "fixed",
        overflow: "hidden",
        top: `${-(g - Math.floor(m))}px`,
        left: `${-(d - Math.floor(y))}px`,
        right: "0",
        [a]: `${l}px`
      });
      return () => {
        $(), n.scrollTo(d, g);
      };
    }, f = lr([i(), Go() ? h() : c()]);
    V(() => {
      f(), o.removeAttribute(Un);
    });
  });
}
function Oe(e) {
  return (t) => (e(t), () => e(void 0));
}
function br(e, t) {
  const [n, r] = z(mo(t == null ? void 0 : t()));
  return U(() => {
    var o;
    r(((o = e()) == null ? void 0 : o.tagName.toLowerCase()) || mo(t == null ? void 0 : t()));
  }), n;
}
function mo(e) {
  return kt(e) ? e : void 0;
}
function Ea(e = {}) {
  const [t, n] = ci({
    value: () => C(e.isSelected),
    defaultValue: () => !!C(e.defaultIsSelected),
    onChange: (s) => {
      var l;
      return (l = e.onSelectedChange) == null ? void 0 : l.call(e, s);
    }
  });
  return {
    isSelected: t,
    setIsSelected: (s) => {
      !C(e.isReadOnly) && !C(e.isDisabled) && n(s);
    },
    toggle: () => {
      !C(e.isReadOnly) && !C(e.isDisabled) && n(!t());
    }
  };
}
var _a = ["id", "name", "validationState", "required", "disabled", "readOnly"];
function Aa(e) {
  const t = `form-control-${Be()}`;
  e = W({
    id: t
  }, e);
  const [n, r] = z(), [o, s] = z(), [l, i] = z(), [a, c] = z(), h = (u, y, m) => {
    const $ = m != null || n() != null;
    return [
      m,
      n(),
      // If there is both an aria-label and aria-labelledby, add the field itself has an aria-labelledby
      $ && y != null ? u : void 0
    ].filter(Boolean).join(" ") || void 0;
  }, f = (u) => [
    l(),
    // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA.
    // See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
    a(),
    u
  ].filter(Boolean).join(" ") || void 0, d = D(() => ({
    "data-valid": C(e.validationState) === "valid" ? "" : void 0,
    "data-invalid": C(e.validationState) === "invalid" ? "" : void 0,
    "data-required": C(e.required) ? "" : void 0,
    "data-disabled": C(e.disabled) ? "" : void 0,
    "data-readonly": C(e.readOnly) ? "" : void 0
  }));
  return {
    formControlContext: {
      name: () => C(e.name) ?? C(e.id),
      dataset: d,
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
      generateId: nn(() => C(e.id)),
      registerLabel: Oe(r),
      registerField: Oe(s),
      registerDescription: Oe(i),
      registerErrorMessage: Oe(c)
    }
  };
}
var yi = Se();
function ln() {
  const e = ke(yi);
  if (e === void 0)
    throw new Error("[kobalte]: `useFormControlContext` must be used within a `FormControlContext.Provider` component");
  return e;
}
function ie(e) {
  var o;
  const [t, n] = J(e, ["asChild", "as", "children"]);
  if (!t.asChild)
    return v(zn, j({
      get component() {
        return t.as;
      }
    }, n, {
      get children() {
        return t.children;
      }
    }));
  const r = us(() => t.children);
  if (bo(r())) {
    const s = xo(n, ((o = r()) == null ? void 0 : o.props) ?? {});
    return v(zn, s);
  }
  if (Xs(r())) {
    const s = r().find(bo);
    if (s) {
      const l = () => v(To, {
        get each() {
          return r();
        },
        children: (a) => v(R, {
          when: a === s,
          fallback: a,
          get children() {
            return s.props.children;
          }
        })
      }), i = xo(n, (s == null ? void 0 : s.props) ?? {});
      return v(zn, j(i, {
        children: l
      }));
    }
  }
  throw new Error("[kobalte]: Component is expected to render `asChild` but no children `As` component was found.");
}
var Fa = Symbol("$$KobalteAsComponent");
function bo(e) {
  return (e == null ? void 0 : e[Fa]) === !0;
}
function xo(e, t) {
  return Qs([e, t], {
    reverseEventHandlers: !0
  });
}
function Da(e) {
  const t = ln();
  return e = W({
    id: t.generateId("description")
  }, e), U(() => V(t.registerDescription(e.id))), v(ie, j({
    as: "div"
  }, () => t.dataset(), e));
}
function Ia(e) {
  const t = ln();
  e = W({
    id: t.generateId("error-message")
  }, e);
  const [n, r] = J(e, ["forceMount"]), o = () => t.validationState() === "invalid";
  return U(() => {
    o() && V(t.registerErrorMessage(r.id));
  }), v(R, {
    get when() {
      return n.forceMount || o();
    },
    get children() {
      return v(ie, j({
        as: "div"
      }, () => t.dataset(), r));
    }
  });
}
function La(e) {
  let t;
  const n = ln();
  e = W({
    id: n.generateId("label")
  }, e);
  const [r, o] = J(e, ["ref"]), s = br(() => t, () => "label");
  return U(() => V(n.registerLabel(o.id))), v(ie, j({
    as: "label",
    ref(l) {
      const i = pe((a) => t = a, r.ref);
      typeof i == "function" && i(l);
    },
    get for() {
      return D(() => s() === "label")() ? n.fieldId() : void 0;
    }
  }, () => n.dataset(), o));
}
var Oa = /* @__PURE__ */ new Set(["Avst", "Arab", "Armi", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]), qa = /* @__PURE__ */ new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);
function Ma(e) {
  if (Intl.Locale) {
    const n = new Intl.Locale(e).maximize().script ?? "";
    return Oa.has(n);
  }
  const t = e.split("-")[0];
  return qa.has(t);
}
function Ta(e) {
  return Ma(e) ? "rtl" : "ltr";
}
function vi() {
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
    direction: Ta(e)
  };
}
var nr = vi(), Ht = /* @__PURE__ */ new Set();
function $o() {
  nr = vi();
  for (const e of Ht)
    e(nr);
}
function Pa() {
  const [e, t] = z(nr), n = D(() => e());
  return It(() => {
    Ht.size === 0 && window.addEventListener("languagechange", $o), Ht.add(t), V(() => {
      Ht.delete(t), Ht.size === 0 && window.removeEventListener("languagechange", $o);
    });
  }), {
    locale: () => n().locale,
    direction: () => n().direction
  };
}
var za = Se();
function Ot() {
  const e = Pa();
  return ke(za) || e;
}
var Gn = /* @__PURE__ */ new Map();
function Ka(e) {
  const {
    locale: t
  } = Ot(), n = D(() => t() + (e ? Object.entries(e).sort((r, o) => r[0] < o[0] ? -1 : 1).join() : ""));
  return D(() => {
    const r = n();
    let o;
    return Gn.has(r) && (o = Gn.get(r)), o || (o = new Intl.Collator(t(), e), Gn.set(r, o)), o;
  });
}
var Xe = class mi extends Set {
  constructor(t, n, r) {
    super(t), t instanceof mi ? (this.anchorKey = n || t.anchorKey, this.currentKey = r || t.currentKey) : (this.anchorKey = n, this.currentKey = r);
  }
};
function Ba(e) {
  const [t, n] = sn(e);
  return [() => t() ?? new Xe(), n];
}
function bi(e) {
  return tl() ? e.altKey : e.ctrlKey;
}
function Et(e) {
  return On() ? e.metaKey : e.ctrlKey;
}
function po(e) {
  return new Xe(e);
}
function Ra(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function Na(e) {
  e = W({
    selectionMode: "none",
    selectionBehavior: "toggle"
  }, e);
  const [t, n] = z(!1), [r, o] = z(), s = D(() => {
    const u = C(e.selectedKeys);
    return u != null ? po(u) : u;
  }), l = D(() => {
    const u = C(e.defaultSelectedKeys);
    return u != null ? po(u) : new Xe();
  }), [i, a] = Ba({
    value: s,
    defaultValue: l,
    onChange: (u) => {
      var y;
      return (y = e.onSelectionChange) == null ? void 0 : y.call(e, u);
    }
  }), [c, h] = z(C(e.selectionBehavior)), f = () => C(e.selectionMode), d = () => C(e.disallowEmptySelection) ?? !1, g = (u) => {
    (C(e.allowDuplicateSelectionEvents) || !Ra(u, i())) && a(u);
  };
  return U(() => {
    const u = i();
    C(e.selectionBehavior) === "replace" && c() === "toggle" && typeof u == "object" && u.size === 0 && h("replace");
  }), U(() => {
    h(C(e.selectionBehavior) ?? "toggle");
  }), {
    selectionMode: f,
    disallowEmptySelection: d,
    selectionBehavior: c,
    setSelectionBehavior: h,
    isFocused: t,
    setFocused: n,
    focusedKey: r,
    setFocusedKey: o,
    selectedKeys: i,
    setSelectedKeys: g
  };
}
function Ua(e) {
  const [t, n] = z(""), [r, o] = z(-1);
  return {
    typeSelectHandlers: {
      onKeyDown: (l) => {
        var d;
        if (C(e.isDisabled))
          return;
        const i = C(e.keyboardDelegate), a = C(e.selectionManager);
        if (!i.getKeyForSearch)
          return;
        const c = Ga(l.key);
        if (!c || l.ctrlKey || l.metaKey)
          return;
        c === " " && t().trim().length > 0 && (l.preventDefault(), l.stopPropagation());
        let h = n((g) => g += c), f = i.getKeyForSearch(h, a.focusedKey()) ?? i.getKeyForSearch(h);
        f == null && Va(h) && (h = h[0], f = i.getKeyForSearch(h, a.focusedKey()) ?? i.getKeyForSearch(h)), f != null && (a.setFocusedKey(f), (d = e.onTypeSelect) == null || d.call(e, f)), clearTimeout(r()), o(window.setTimeout(() => n(""), 500));
      }
    }
  };
}
function Ga(e) {
  return e.length === 1 || !/^[A-Z]/i.test(e) ? e : "";
}
function Va(e) {
  return e.split("").every((t) => t === e[0]);
}
function ja(e, t, n) {
  e = j({
    selectOnFocus: () => C(e.selectionManager).selectionBehavior() === "replace"
  }, e);
  const o = () => (n == null ? void 0 : n()) ?? t(), {
    direction: s
  } = Ot();
  let l = {
    top: 0,
    left: 0
  };
  Ns(() => C(e.isVirtualized) ? void 0 : o(), "scroll", () => {
    const u = o();
    u && (l = {
      top: u.scrollTop,
      left: u.scrollLeft
    });
  });
  const {
    typeSelectHandlers: i
  } = Ua({
    isDisabled: () => C(e.disallowTypeAhead),
    keyboardDelegate: () => C(e.keyboardDelegate),
    selectionManager: () => C(e.selectionManager)
  }), a = (u) => {
    var L, q, A, N, K, B, Y, se;
    re(u, i.onKeyDown), u.altKey && u.key === "Tab" && u.preventDefault();
    const y = t();
    if (!(y != null && y.contains(u.target)))
      return;
    const m = C(e.selectionManager), $ = C(e.selectOnFocus), x = (P) => {
      P != null && (m.setFocusedKey(P), u.shiftKey && m.selectionMode() === "multiple" ? m.extendSelection(P) : $ && !bi(u) && m.replaceSelection(P));
    }, b = C(e.keyboardDelegate), w = C(e.shouldFocusWrap), p = m.focusedKey();
    switch (u.key) {
      case "ArrowDown": {
        if (b.getKeyBelow) {
          u.preventDefault();
          let P;
          p != null ? P = b.getKeyBelow(p) : P = (L = b.getFirstKey) == null ? void 0 : L.call(b), P == null && w && (P = (q = b.getFirstKey) == null ? void 0 : q.call(b, p)), x(P);
        }
        break;
      }
      case "ArrowUp": {
        if (b.getKeyAbove) {
          u.preventDefault();
          let P;
          p != null ? P = b.getKeyAbove(p) : P = (A = b.getLastKey) == null ? void 0 : A.call(b), P == null && w && (P = (N = b.getLastKey) == null ? void 0 : N.call(b, p)), x(P);
        }
        break;
      }
      case "ArrowLeft": {
        if (b.getKeyLeftOf) {
          u.preventDefault();
          const P = s() === "rtl";
          let H;
          p != null ? H = b.getKeyLeftOf(p) : H = P ? (K = b.getFirstKey) == null ? void 0 : K.call(b) : (B = b.getLastKey) == null ? void 0 : B.call(b), x(H);
        }
        break;
      }
      case "ArrowRight": {
        if (b.getKeyRightOf) {
          u.preventDefault();
          const P = s() === "rtl";
          let H;
          p != null ? H = b.getKeyRightOf(p) : H = P ? (Y = b.getLastKey) == null ? void 0 : Y.call(b) : (se = b.getFirstKey) == null ? void 0 : se.call(b), x(H);
        }
        break;
      }
      case "Home":
        if (b.getFirstKey) {
          u.preventDefault();
          const P = b.getFirstKey(p, Et(u));
          P != null && (m.setFocusedKey(P), Et(u) && u.shiftKey && m.selectionMode() === "multiple" ? m.extendSelection(P) : $ && m.replaceSelection(P));
        }
        break;
      case "End":
        if (b.getLastKey) {
          u.preventDefault();
          const P = b.getLastKey(p, Et(u));
          P != null && (m.setFocusedKey(P), Et(u) && u.shiftKey && m.selectionMode() === "multiple" ? m.extendSelection(P) : $ && m.replaceSelection(P));
        }
        break;
      case "PageDown":
        if (b.getKeyPageBelow && p != null) {
          u.preventDefault();
          const P = b.getKeyPageBelow(p);
          x(P);
        }
        break;
      case "PageUp":
        if (b.getKeyPageAbove && p != null) {
          u.preventDefault();
          const P = b.getKeyPageAbove(p);
          x(P);
        }
        break;
      case "a":
        Et(u) && m.selectionMode() === "multiple" && C(e.disallowSelectAll) !== !0 && (u.preventDefault(), m.selectAll());
        break;
      case "Escape":
        u.defaultPrevented || (u.preventDefault(), C(e.disallowEmptySelection) || m.clearSelection());
        break;
      case "Tab":
        if (!C(e.allowsTabNavigation)) {
          if (u.shiftKey)
            y.focus();
          else {
            const P = fl(y, {
              tabbable: !0
            });
            let H, X;
            do
              X = P.lastChild(), X && (H = X);
            while (X);
            H && !H.contains(document.activeElement) && be(H);
          }
          break;
        }
    }
  }, c = (u) => {
    var x, b;
    const y = C(e.selectionManager), m = C(e.keyboardDelegate), $ = C(e.selectOnFocus);
    if (y.isFocused()) {
      u.currentTarget.contains(u.target) || y.setFocused(!1);
      return;
    }
    if (u.currentTarget.contains(u.target)) {
      if (y.setFocused(!0), y.focusedKey() == null) {
        const w = (L) => {
          L != null && (y.setFocusedKey(L), $ && y.replaceSelection(L));
        }, p = u.relatedTarget;
        p && u.currentTarget.compareDocumentPosition(p) & Node.DOCUMENT_POSITION_FOLLOWING ? w(y.lastSelectedKey() ?? ((x = m.getLastKey) == null ? void 0 : x.call(m))) : w(y.firstSelectedKey() ?? ((b = m.getFirstKey) == null ? void 0 : b.call(m)));
      } else if (!C(e.isVirtualized)) {
        const w = o();
        if (w) {
          w.scrollTop = l.top, w.scrollLeft = l.left;
          const p = w.querySelector(`[data-key="${y.focusedKey()}"]`);
          p && (be(p), ro(w, p));
        }
      }
    }
  }, h = (u) => {
    const y = C(e.selectionManager);
    u.currentTarget.contains(u.relatedTarget) || y.setFocused(!1);
  }, f = (u) => {
    o() === u.target && u.preventDefault();
  }, d = () => {
    var w, p;
    const u = C(e.autoFocus);
    if (!u)
      return;
    const y = C(e.selectionManager), m = C(e.keyboardDelegate);
    let $;
    u === "first" && ($ = (w = m.getFirstKey) == null ? void 0 : w.call(m)), u === "last" && ($ = (p = m.getLastKey) == null ? void 0 : p.call(m));
    const x = y.selectedKeys();
    x.size && ($ = x.values().next().value), y.setFocused(!0), y.setFocusedKey($);
    const b = t();
    b && $ == null && !C(e.shouldUseVirtualFocus) && be(b);
  };
  return It(() => {
    e.deferAutoFocus ? setTimeout(d, 0) : d();
  }), U(ze([o, () => C(e.isVirtualized), () => C(e.selectionManager).focusedKey()], (u) => {
    var x;
    const [y, m, $] = u;
    if (m)
      $ && ((x = e.scrollToKey) == null || x.call(e, $));
    else if ($ && y) {
      const b = y.querySelector(`[data-key="${$}"]`);
      b && ro(y, b);
    }
  })), {
    tabIndex: D(() => {
      if (!C(e.shouldUseVirtualFocus))
        return C(e.selectionManager).focusedKey() == null ? 0 : -1;
    }),
    onKeyDown: a,
    onMouseDown: f,
    onFocusIn: c,
    onFocusOut: h
  };
}
function xi(e, t) {
  const n = () => C(e.selectionManager), r = () => C(e.key), o = () => C(e.shouldUseVirtualFocus), s = (x) => {
    n().selectionMode() !== "none" && (n().selectionMode() === "single" ? n().isSelected(r()) && !n().disallowEmptySelection() ? n().toggleSelection(r()) : n().replaceSelection(r()) : x && x.shiftKey ? n().extendSelection(r()) : n().selectionBehavior() === "toggle" || Et(x) || "pointerType" in x && x.pointerType === "touch" ? n().toggleSelection(r()) : n().replaceSelection(r()));
  }, l = () => n().isSelected(r()), i = () => C(e.disabled) || n().isDisabled(r()), a = () => !i() && n().canSelectItem(r());
  let c = null;
  const h = (x) => {
    a() && (c = x.pointerType, x.pointerType === "mouse" && x.button === 0 && !C(e.shouldSelectOnPressUp) && s(x));
  }, f = (x) => {
    a() && x.pointerType === "mouse" && x.button === 0 && C(e.shouldSelectOnPressUp) && C(e.allowsDifferentPressOrigin) && s(x);
  }, d = (x) => {
    a() && (C(e.shouldSelectOnPressUp) && !C(e.allowsDifferentPressOrigin) || c !== "mouse") && s(x);
  }, g = (x) => {
    !a() || !["Enter", " "].includes(x.key) || (bi(x) ? n().toggleSelection(r()) : s(x));
  }, u = (x) => {
    i() && x.preventDefault();
  }, y = (x) => {
    const b = t();
    o() || i() || !b || x.target === b && n().setFocusedKey(r());
  }, m = D(() => {
    if (!(o() || i()))
      return r() === n().focusedKey() ? 0 : -1;
  }), $ = D(() => C(e.virtualized) ? void 0 : r());
  return U(ze([t, r, o, () => n().focusedKey(), () => n().isFocused()], ([x, b, w, p, L]) => {
    x && b === p && L && !w && document.activeElement !== x && (e.focus ? e.focus() : be(x));
  })), {
    isSelected: l,
    isDisabled: i,
    allowsSelection: a,
    tabIndex: m,
    dataKey: $,
    onPointerDown: h,
    onPointerUp: f,
    onClick: d,
    onKeyDown: g,
    onMouseDown: u,
    onFocus: y
  };
}
var Ha = class {
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
    for (const s of this.getKeyRange(r, n.currentKey || t))
      o.delete(s);
    for (const s of this.getKeyRange(t, r))
      this.canSelectItem(s) && o.add(s);
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
}, wo = class {
  constructor(e) {
    Br(this, "keyMap", /* @__PURE__ */ new Map());
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
function Qa(e) {
  const t = Na(e), r = ra({
    dataSource: () => C(e.dataSource),
    getKey: () => C(e.getKey),
    getTextValue: () => C(e.getTextValue),
    getDisabled: () => C(e.getDisabled),
    getSectionChildren: () => C(e.getSectionChildren),
    factory: (s) => e.filter ? new wo(e.filter(s)) : new wo(s)
  }, [() => e.filter]), o = new Ha(r, t);
  return ds(() => {
    const s = t.focusedKey();
    s != null && !r().getItem(s) && t.setFocusedKey(void 0);
  }), {
    collection: r,
    selectionManager: () => o
  };
}
var Wa = class {
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
    var s;
    const t = (s = this.ref) == null ? void 0 : s.call(this);
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
    var s;
    const t = (s = this.ref) == null ? void 0 : s.call(this);
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
      const s = this.collection().getItem(r);
      if (s) {
        const l = s.textValue.slice(0, e.length);
        if (s.textValue && n.compare(l, e) === 0)
          return r;
      }
      r = this.getKeyBelow(r);
    }
  }
};
function Ya(e, t, n) {
  const r = Ka({
    usage: "search",
    sensitivity: "base"
  }), o = D(() => {
    const s = C(e.keyboardDelegate);
    return s || new Wa(e.collection, t, r);
  });
  return ja({
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
    scrollToKey: (s) => {
      var l;
      return (l = C(e.scrollToKey)) == null ? void 0 : l(s);
    }
  }, t, n);
}
xl({
  toasts: []
});
var Xa = ["button", "color", "file", "image", "reset", "submit"];
function Za(e) {
  const t = e.tagName.toLowerCase();
  return t === "button" ? !0 : t === "input" && e.type ? Xa.indexOf(e.type) !== -1 : !1;
}
function Ja(e) {
  let t;
  e = W({
    type: "button"
  }, e);
  const [n, r] = J(e, ["ref", "type", "disabled"]), o = br(() => t, () => "button"), s = D(() => {
    const a = o();
    return a == null ? !1 : Za({
      tagName: a,
      type: n.type
    });
  }), l = D(() => o() === "input"), i = D(() => o() === "a" && (t == null ? void 0 : t.getAttribute("href")) != null);
  return v(ie, j({
    as: "button",
    ref(a) {
      const c = pe((h) => t = h, n.ref);
      typeof c == "function" && c(a);
    },
    get type() {
      return s() || l() ? n.type : void 0;
    },
    get role() {
      return !s() && !i() ? "button" : void 0;
    },
    get tabIndex() {
      return !s() && !i() && !n.disabled ? 0 : void 0;
    },
    get disabled() {
      return s() || l() ? n.disabled : void 0;
    },
    get "aria-disabled"() {
      return !s() && !l() && n.disabled ? !0 : void 0;
    },
    get "data-disabled"() {
      return n.disabled ? "" : void 0;
    }
  }, r));
}
var $i = Se();
function pi() {
  return ke($i);
}
function ec() {
  const e = pi();
  if (e === void 0)
    throw new Error("[kobalte]: `useDomCollectionContext` must be used within a `DomCollectionProvider` component");
  return e;
}
function wi(e, t) {
  return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
function tc(e, t) {
  var o;
  const n = t.ref();
  if (!n)
    return -1;
  let r = e.length;
  if (!r)
    return -1;
  for (; r--; ) {
    const s = (o = e[r]) == null ? void 0 : o.ref();
    if (s && wi(s, n))
      return r + 1;
  }
  return 0;
}
function nc(e) {
  const t = e.map((r, o) => [o, r]);
  let n = !1;
  return t.sort(([r, o], [s, l]) => {
    const i = o.ref(), a = l.ref();
    return i === a || !i || !a ? 0 : wi(i, a) ? (r > s && (n = !0), -1) : (r < s && (n = !0), 1);
  }), n ? t.map(([r, o]) => o) : e;
}
function Ci(e, t) {
  const n = nc(e);
  e !== n && t(n);
}
function rc(e) {
  var o, s;
  const t = e[0], n = (o = e[e.length - 1]) == null ? void 0 : o.ref();
  let r = (s = t == null ? void 0 : t.ref()) == null ? void 0 : s.parentElement;
  for (; r; ) {
    if (n && r.contains(n))
      return r;
    r = r.parentElement;
  }
  return Ke(r).body;
}
function oc(e, t) {
  U(() => {
    const n = setTimeout(() => {
      Ci(e(), t);
    });
    V(() => clearTimeout(n));
  });
}
function ic(e, t) {
  if (typeof IntersectionObserver != "function") {
    oc(e, t);
    return;
  }
  let n = [];
  U(() => {
    const r = () => {
      const l = !!n.length;
      n = e(), l && Ci(e(), t);
    }, o = rc(e()), s = new IntersectionObserver(r, {
      root: o
    });
    e().forEach((l) => {
      const i = l.ref();
      i && s.observe(i);
    }), V(() => s.disconnect());
  });
}
function sc(e = {}) {
  const [t, n] = oa({
    value: () => C(e.items),
    onChange: (s) => {
      var l;
      return (l = e.onItemsChange) == null ? void 0 : l.call(e, s);
    }
  });
  ic(t, n);
  const r = (s) => (n((l) => {
    const i = tc(l, s);
    return Ws(l, s, i);
  }), () => {
    n((l) => {
      const i = l.filter((a) => a.ref() !== s.ref());
      return l.length === i.length ? l : i;
    });
  });
  return {
    DomCollectionProvider: (s) => v($i.Provider, {
      value: {
        registerItem: r
      },
      get children() {
        return s.children;
      }
    })
  };
}
function lc(e) {
  const t = ec();
  e = W({
    shouldRegisterItem: !0
  }, e), U(() => {
    if (!e.shouldRegisterItem)
      return;
    const n = t.registerItem(e.getItem());
    V(n);
  });
}
var Si = Se();
function ac() {
  return ke(Si);
}
function cc(e) {
  let t;
  const n = ac(), [r, o] = J(e, ["ref", "disableOutsidePointerEvents", "excludedElements", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside", "onDismiss", "bypassTopMostLayerCheck"]), s = /* @__PURE__ */ new Set([]), l = (f) => {
    s.add(f);
    const d = n == null ? void 0 : n.registerNestedLayer(f);
    return () => {
      s.delete(f), d == null || d();
    };
  };
  pa({
    shouldExcludeElement: (f) => {
      var d;
      return t ? ((d = r.excludedElements) == null ? void 0 : d.some((g) => Le(g(), f))) || [...s].some((g) => Le(g, f)) : !1;
    },
    onPointerDownOutside: (f) => {
      var d, g, u;
      !t || Ee.isBelowPointerBlockingLayer(t) || !r.bypassTopMostLayerCheck && !Ee.isTopMostLayer(t) || ((d = r.onPointerDownOutside) == null || d.call(r, f), (g = r.onInteractOutside) == null || g.call(r, f), f.defaultPrevented || (u = r.onDismiss) == null || u.call(r));
    },
    onFocusOutside: (f) => {
      var d, g, u;
      (d = r.onFocusOutside) == null || d.call(r, f), (g = r.onInteractOutside) == null || g.call(r, f), f.defaultPrevented || (u = r.onDismiss) == null || u.call(r);
    }
  }, () => t), ia({
    ownerDocument: () => Ke(t),
    onEscapeKeyDown: (f) => {
      var d;
      !t || !Ee.isTopMostLayer(t) || ((d = r.onEscapeKeyDown) == null || d.call(r, f), !f.defaultPrevented && r.onDismiss && (f.preventDefault(), r.onDismiss()));
    }
  }), It(() => {
    if (!t)
      return;
    Ee.addLayer({
      node: t,
      isPointerBlocking: r.disableOutsidePointerEvents,
      dismiss: r.onDismiss
    });
    const f = n == null ? void 0 : n.registerNestedLayer(t);
    Ee.assignPointerEventToLayers(), Ee.disableBodyPointerEvents(t), V(() => {
      t && (Ee.removeLayer(t), f == null || f(), Ee.assignPointerEventToLayers(), Ee.restoreBodyPointerEvents(t));
    });
  }), U(ze([() => t, () => r.disableOutsidePointerEvents], ([f, d]) => {
    if (!f)
      return;
    const g = Ee.find(f);
    g && g.isPointerBlocking !== d && (g.isPointerBlocking = d, Ee.assignPointerEventToLayers()), d && Ee.disableBodyPointerEvents(f), V(() => {
      Ee.restoreBodyPointerEvents(f);
    });
  }, {
    defer: !0
  }));
  const h = {
    registerNestedLayer: l
  };
  return v(Si.Provider, {
    value: h,
    get children() {
      return v(ie, j({
        as: "div",
        ref(f) {
          const d = pe((g) => t = g, r.ref);
          typeof d == "function" && d(f);
        }
      }, o));
    }
  });
}
var ki = Se();
function Ei() {
  const e = ke(ki);
  if (e === void 0)
    throw new Error("[kobalte]: `usePopperContext` must be used within a `Popper` component");
  return e;
}
var uc = /* @__PURE__ */ T('<svg display="block" viewBox="0 0 30 30"><g><path fill="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path><path stroke="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z">'), rr = 30, Co = rr / 2, dc = {
  top: 180,
  right: -90,
  bottom: 0,
  left: 90
};
function fc(e) {
  const t = Ei();
  e = W({
    size: rr
  }, e);
  const [n, r] = J(e, ["ref", "style", "children", "size"]), o = () => t.currentPlacement().split("-")[0], s = gc(t.contentRef), l = () => {
    var f;
    return ((f = s()) == null ? void 0 : f.getPropertyValue("background-color")) || "none";
  }, i = () => {
    var f;
    return ((f = s()) == null ? void 0 : f.getPropertyValue(`border-${o()}-color`)) || "none";
  }, a = () => {
    var f;
    return ((f = s()) == null ? void 0 : f.getPropertyValue(`border-${o()}-width`)) || "0px";
  }, c = () => parseInt(a()) * 2 * (rr / n.size), h = () => `rotate(${dc[o()]} ${Co} ${Co})`;
  return v(ie, j({
    as: "div",
    ref(f) {
      const d = pe(t.setArrowRef, n.ref);
      typeof d == "function" && d(f);
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
        stroke: i(),
        "stroke-width": c(),
        ...n.style
      };
    }
  }, r, {
    get children() {
      const f = uc(), d = f.firstChild;
      return d.firstChild.nextSibling, G(() => F(d, "transform", h())), f;
    }
  }));
}
function gc(e) {
  const [t, n] = z();
  return U(() => {
    const r = e();
    r && n(No(r).getComputedStyle(r));
  }), t;
}
function hc(e) {
  const t = Ei(), [n, r] = J(e, ["ref", "style"]);
  return v(ie, j({
    as: "div",
    ref(o) {
      const s = pe(t.setPositionerRef, n.ref);
      typeof s == "function" && s(o);
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
function So(e) {
  const {
    x: t = 0,
    y: n = 0,
    width: r = 0,
    height: o = 0
  } = e ?? {};
  if (typeof DOMRect == "function")
    return new DOMRect(t, n, r, o);
  const s = {
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
    ...s,
    toJSON: () => s
  };
}
function yc(e, t) {
  return {
    contextElement: e,
    getBoundingClientRect: () => {
      const r = t(e);
      return r ? So(r) : e ? e.getBoundingClientRect() : So();
    }
  };
}
function vc(e) {
  return /^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(e);
}
var mc = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
function bc(e, t) {
  const [n, r] = e.split("-"), o = mc[n];
  return r ? n === "left" || n === "right" ? `${o} ${r === "start" ? "top" : "bottom"}` : r === "start" ? `${o} ${t === "rtl" ? "right" : "left"}` : `${o} ${t === "rtl" ? "left" : "right"}` : `${o} center`;
}
function xc(e) {
  e = W({
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
  const [t, n] = z(), [r, o] = z(), [s, l] = z(e.placement), i = () => yc(e.anchorRef(), e.getAnchorRect), {
    direction: a
  } = Ot();
  async function c() {
    var p, L;
    const f = i(), d = t(), g = r();
    if (!f || !d)
      return;
    const u = ((g == null ? void 0 : g.clientHeight) || 0) / 2, y = typeof e.gutter == "number" ? e.gutter + u : e.gutter ?? u;
    d.style.setProperty("--kb-popper-content-overflow-padding", `${e.overflowPadding}px`), f.getBoundingClientRect();
    const m = [
      // https://floating-ui.com/docs/offset
      Tl(({
        placement: q
      }) => {
        const A = !!q.split("-")[1];
        return {
          mainAxis: y,
          crossAxis: A ? void 0 : e.shift,
          alignmentAxis: e.shift
        };
      })
    ];
    if (e.flip !== !1) {
      const q = typeof e.flip == "string" ? e.flip.split(" ") : void 0;
      if (q !== void 0 && !q.every(vc))
        throw new Error("`flip` expects a spaced-delimited list of placements");
      m.push(Ol({
        padding: e.overflowPadding,
        fallbackPlacements: q
      }));
    }
    (e.slide || e.overlap) && m.push(Pl({
      mainAxis: e.slide,
      crossAxis: e.overlap,
      padding: e.overflowPadding
    })), m.push(zl({
      padding: e.overflowPadding,
      apply({
        availableWidth: q,
        availableHeight: A,
        rects: N
      }) {
        const K = Math.round(N.reference.width);
        q = Math.floor(q), A = Math.floor(A), d.style.setProperty("--kb-popper-anchor-width", `${K}px`), d.style.setProperty("--kb-popper-content-available-width", `${q}px`), d.style.setProperty("--kb-popper-content-available-height", `${A}px`), e.sameWidth && (d.style.width = `${K}px`), e.fitViewport && (d.style.maxWidth = `${q}px`, d.style.maxHeight = `${A}px`);
      }
    })), e.hideWhenDetached && m.push(ql({
      padding: e.detachedPadding
    })), g && m.push(Ll({
      element: g,
      padding: e.arrowPadding
    }));
    const $ = await na(f, d, {
      placement: e.placement,
      strategy: "absolute",
      middleware: m,
      platform: {
        ...ai,
        isRTL: () => a() === "rtl"
      }
    });
    if (l($.placement), (p = e.onCurrentPlacementChange) == null || p.call(e, $.placement), !d)
      return;
    d.style.setProperty("--kb-popper-content-transform-origin", bc($.placement, a()));
    const x = Math.round($.x), b = Math.round($.y);
    let w;
    if (e.hideWhenDetached && (w = (L = $.middlewareData.hide) != null && L.referenceHidden ? "hidden" : "visible"), Object.assign(d.style, {
      top: "0",
      left: "0",
      transform: `translate3d(${x}px, ${b}px, 0)`,
      visibility: w
    }), g && $.middlewareData.arrow) {
      const {
        x: q,
        y: A
      } = $.middlewareData.arrow, N = $.placement.split("-")[0];
      Object.assign(g.style, {
        left: q != null ? `${q}px` : "",
        top: A != null ? `${A}px` : "",
        [N]: "100%"
      });
    }
  }
  U(() => {
    const f = i(), d = t();
    if (!f || !d)
      return;
    const g = ta(f, d, c, {
      // JSDOM doesn't support ResizeObserver
      elementResize: typeof ResizeObserver == "function"
    });
    V(g);
  }), U(() => {
    const f = t(), d = e.contentRef();
    !f || !d || queueMicrotask(() => {
      f.style.zIndex = getComputedStyle(d).zIndex;
    });
  });
  const h = {
    currentPlacement: s,
    contentRef: () => e.contentRef(),
    setPositionerRef: n,
    setArrowRef: o
  };
  return v(ki.Provider, {
    value: h,
    get children() {
      return e.children;
    }
  });
}
var _i = Se();
function Ai() {
  return ke(_i);
}
function nt() {
  const e = Ai();
  if (e === void 0)
    throw new Error("[kobalte]: `useMenuContext` must be used within a `Menu` component");
  return e;
}
var Fi = Se();
function rt() {
  const e = ke(Fi);
  if (e === void 0)
    throw new Error("[kobalte]: `useMenuRootContext` must be used within a `MenuRoot` component");
  return e;
}
function $c(e, t, n) {
  const r = e.split("-")[0], o = n.getBoundingClientRect(), s = [], l = t.clientX, i = t.clientY;
  switch (r) {
    case "top":
      s.push([l, i + 5]), s.push([o.left, o.bottom]), s.push([o.left, o.top]), s.push([o.right, o.top]), s.push([o.right, o.bottom]);
      break;
    case "right":
      s.push([l - 5, i]), s.push([o.left, o.top]), s.push([o.right, o.top]), s.push([o.right, o.bottom]), s.push([o.left, o.bottom]);
      break;
    case "bottom":
      s.push([l, i - 5]), s.push([o.right, o.top]), s.push([o.right, o.bottom]), s.push([o.left, o.bottom]), s.push([o.left, o.top]);
      break;
    case "left":
      s.push([l + 5, i]), s.push([o.right, o.bottom]), s.push([o.left, o.bottom]), s.push([o.left, o.top]), s.push([o.right, o.top]);
      break;
  }
  return s;
}
function pc(e, t) {
  return t ? hl([e.clientX, e.clientY], t) : !1;
}
function Di(e) {
  const t = rt(), n = pi(), r = Ai();
  e = W({
    placement: "bottom-start"
  }, e);
  const [o, s] = J(e, ["open", "defaultOpen", "onOpenChange"]);
  let l = 0, i = null, a = "right";
  const [c, h] = z(), [f, d] = z(), [g, u] = z(), [y, m] = z(), [$, x] = z(!0), [b, w] = z(s.placement), [p, L] = z([]), [q, A] = z([]), {
    DomCollectionProvider: N
  } = sc({
    items: q,
    onItemsChange: A
  }), K = ui({
    open: () => o.open,
    defaultOpen: () => o.defaultOpen,
    onOpenChange: (S) => {
      var Q;
      return (Q = o.onOpenChange) == null ? void 0 : Q.call(o, S);
    }
  }), B = hi(() => t.forceMount() || K.isOpen()), Y = Qa({
    selectionMode: "none",
    dataSource: q
  }), se = (S) => {
    x(S), K.open();
  }, P = (S = !1) => {
    K.close(), S && r && r.close(!0);
  }, H = (S) => {
    x(S), K.toggle();
  }, X = () => {
    const S = y();
    S && (be(S), Y.selectionManager().setFocused(!0), Y.selectionManager().setFocusedKey(void 0));
  }, ee = (S) => {
    L((Z) => [...Z, S]);
    const Q = r == null ? void 0 : r.registerNestedMenu(S);
    return () => {
      L((Z) => Yn(Z, S)), Q == null || Q();
    };
  }, ne = (S) => a === (i == null ? void 0 : i.side) && pc(S, i == null ? void 0 : i.area), ae = (S) => {
    ne(S) && S.preventDefault();
  }, we = (S) => {
    ne(S) || X();
  }, ce = (S) => {
    ne(S) && S.preventDefault();
  };
  xa({
    isDisabled: () => !(r == null && K.isOpen() && t.isModal()),
    targets: () => [y(), ...p()].filter(Boolean)
  }), U(() => {
    const S = y();
    if (!S || !r)
      return;
    const Q = r.registerNestedMenu(S);
    V(() => {
      Q();
    });
  });
  const ve = {
    dataset: D(() => ({
      "data-expanded": K.isOpen() ? "" : void 0,
      "data-closed": K.isOpen() ? void 0 : ""
    })),
    isOpen: K.isOpen,
    contentPresence: B,
    currentPlacement: b,
    pointerGraceTimeoutId: () => l,
    autoFocus: $,
    listState: () => Y,
    parentMenuContext: () => r,
    triggerRef: g,
    contentRef: y,
    triggerId: c,
    contentId: f,
    setTriggerRef: u,
    setContentRef: m,
    open: se,
    close: P,
    toggle: H,
    focusContent: X,
    onItemEnter: ae,
    onItemLeave: we,
    onTriggerLeave: ce,
    setPointerDir: (S) => a = S,
    setPointerGraceTimeoutId: (S) => l = S,
    setPointerGraceIntent: (S) => i = S,
    registerNestedMenu: ee,
    registerItemToParentDomCollection: n == null ? void 0 : n.registerItem,
    registerTriggerId: Oe(h),
    registerContentId: Oe(d)
  };
  return v(N, {
    get children() {
      return v(_i.Provider, {
        value: ve,
        get children() {
          return v(xc, j({
            anchorRef: g,
            contentRef: y,
            onCurrentPlacementChange: w
          }, s));
        }
      });
    }
  });
}
var Ii = Se();
function xr() {
  const e = ke(Ii);
  if (e === void 0)
    throw new Error("[kobalte]: `useMenuItemContext` must be used within a `Menu.Item` component");
  return e;
}
function $r(e) {
  let t;
  const n = rt(), r = nt();
  e = W({
    id: n.generateId(`item-${Be()}`)
  }, e);
  const [o, s] = J(e, ["ref", "textValue", "disabled", "closeOnSelect", "checked", "indeterminate", "onSelect", "onPointerMove", "onPointerLeave", "onPointerDown", "onPointerUp", "onClick", "onKeyDown", "onMouseDown", "onFocus"]), [l, i] = z(), [a, c] = z(), [h, f] = z(), d = () => r.listState().selectionManager(), g = () => s.id, u = () => d().focusedKey() === g(), y = () => {
    var A;
    (A = o.onSelect) == null || A.call(o), o.closeOnSelect && r.close(!0);
  };
  lc({
    getItem: () => {
      var A;
      return {
        ref: () => t,
        type: "item",
        key: g(),
        textValue: o.textValue ?? ((A = h()) == null ? void 0 : A.textContent) ?? (t == null ? void 0 : t.textContent) ?? "",
        disabled: o.disabled ?? !1
      };
    }
  });
  const m = xi({
    key: g,
    selectionManager: d,
    shouldSelectOnPressUp: !0,
    allowsDifferentPressOrigin: !0,
    disabled: () => o.disabled
  }, () => t), $ = (A) => {
    re(A, o.onPointerMove), A.pointerType === "mouse" && (o.disabled ? r.onItemLeave(A) : (r.onItemEnter(A), A.defaultPrevented || (be(A.currentTarget), r.listState().selectionManager().setFocused(!0), r.listState().selectionManager().setFocusedKey(g()))));
  }, x = (A) => {
    re(A, o.onPointerLeave), A.pointerType === "mouse" && r.onItemLeave(A);
  }, b = (A) => {
    re(A, o.onPointerUp), !o.disabled && A.button === 0 && y();
  }, w = (A) => {
    if (re(A, o.onKeyDown), !A.repeat && !o.disabled)
      switch (A.key) {
        case "Enter":
        case " ":
          y();
          break;
      }
  }, p = D(() => {
    if (o.indeterminate)
      return "mixed";
    if (o.checked != null)
      return o.checked;
  }), L = D(() => ({
    "data-indeterminate": o.indeterminate ? "" : void 0,
    "data-checked": o.checked && !o.indeterminate ? "" : void 0,
    "data-disabled": o.disabled ? "" : void 0,
    "data-highlighted": u() ? "" : void 0
  })), q = {
    isChecked: () => o.checked,
    dataset: L,
    setLabelRef: f,
    generateId: nn(() => s.id),
    registerLabel: Oe(i),
    registerDescription: Oe(c)
  };
  return v(Ii.Provider, {
    value: q,
    get children() {
      return v(ie, j({
        as: "div",
        ref(A) {
          const N = pe((K) => t = K, o.ref);
          typeof N == "function" && N(A);
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
          return ge([o.onPointerDown, m.onPointerDown]);
        },
        get onPointerUp() {
          return ge([b, m.onPointerUp]);
        },
        get onClick() {
          return ge([o.onClick, m.onClick]);
        },
        get onKeyDown() {
          return ge([w, m.onKeyDown]);
        },
        get onMouseDown() {
          return ge([o.onMouseDown, m.onMouseDown]);
        },
        get onFocus() {
          return ge([o.onFocus, m.onFocus]);
        },
        onPointerMove: $,
        onPointerLeave: x
      }, L, s));
    }
  });
}
function wc(e) {
  e = W({
    closeOnSelect: !1
  }, e);
  const [t, n] = J(e, ["checked", "defaultChecked", "onChange", "onSelect"]), r = Ea({
    isSelected: () => t.checked,
    defaultIsSelected: () => t.defaultChecked,
    onSelectedChange: (s) => {
      var l;
      return (l = t.onChange) == null ? void 0 : l.call(t, s);
    },
    isDisabled: () => n.disabled
  });
  return v($r, j({
    role: "menuitemcheckbox",
    get checked() {
      return r.isSelected();
    },
    onSelect: () => {
      var s;
      (s = t.onSelect) == null || s.call(t), r.toggle();
    }
  }, n));
}
function Li(e) {
  let t;
  const n = rt(), r = nt();
  e = W({
    id: n.generateId(`content-${Be()}`)
  }, e);
  const [o, s] = J(e, ["ref", "id", "style", "onOpenAutoFocus", "onCloseAutoFocus", "onEscapeKeyDown", "onFocusOutside", "onPointerEnter", "onPointerMove", "onKeyDown", "onMouseDown", "onFocusIn", "onFocusOut"]);
  let l = 0;
  const i = () => r.parentMenuContext() == null && n.isModal(), a = Ya({
    selectionManager: r.listState().selectionManager,
    collection: r.listState().collection,
    autoFocus: r.autoFocus,
    deferAutoFocus: !0,
    // ensure all menu items are mounted and collection is not empty before trying to autofocus.
    shouldFocusWrap: !0,
    disallowTypeAhead: () => !r.listState().selectionManager().isFocused()
  }, () => t);
  ha({
    trapFocus: () => i() && r.isOpen(),
    onMountAutoFocus: o.onOpenAutoFocus,
    onUnmountAutoFocus: o.onCloseAutoFocus
  }, () => t);
  const c = (u) => {
    Le(u.currentTarget, u.target) && u.key === "Tab" && r.isOpen() && u.preventDefault();
  }, h = (u) => {
    var y;
    (y = o.onEscapeKeyDown) == null || y.call(o, u), r.close(!0);
  }, f = (u) => {
    var y;
    (y = o.onFocusOutside) == null || y.call(o, u), n.isModal() && u.preventDefault();
  }, d = (u) => {
    var y, m;
    re(u, o.onPointerEnter), r.isOpen() && ((y = r.parentMenuContext()) == null || y.listState().selectionManager().setFocused(!1), (m = r.parentMenuContext()) == null || m.listState().selectionManager().setFocusedKey(void 0));
  }, g = (u) => {
    if (re(u, o.onPointerMove), u.pointerType !== "mouse")
      return;
    const y = u.target, m = l !== u.clientX;
    Le(u.currentTarget, y) && m && (r.setPointerDir(u.clientX > l ? "right" : "left"), l = u.clientX);
  };
  return U(() => V(r.registerContentId(o.id))), v(R, {
    get when() {
      return r.contentPresence.isPresent();
    },
    get children() {
      return v(hc, {
        get children() {
          return v(cc, j({
            ref(u) {
              const y = pe((m) => {
                r.setContentRef(m), r.contentPresence.setRef(m), t = m;
              }, o.ref);
              typeof y == "function" && y(u);
            },
            role: "menu",
            get id() {
              return o.id;
            },
            get tabIndex() {
              return a.tabIndex();
            },
            get disableOutsidePointerEvents() {
              return D(() => !!i())() && r.isOpen();
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
              return ge([o.onKeyDown, a.onKeyDown, c]);
            },
            get onMouseDown() {
              return ge([o.onMouseDown, a.onMouseDown]);
            },
            get onFocusIn() {
              return ge([o.onFocusIn, a.onFocusIn]);
            },
            get onFocusOut() {
              return ge([o.onFocusOut, a.onFocusOut]);
            },
            onPointerEnter: d,
            onPointerMove: g
          }, () => r.dataset(), s));
        }
      });
    }
  });
}
function Cc(e) {
  let t;
  const n = rt(), r = nt(), [o, s] = J(e, ["ref"]);
  return ka({
    ownerRef: () => t,
    isDisabled: () => !(r.isOpen() && (n.isModal() || n.preventScroll()))
  }), v(Li, j({
    ref(l) {
      const i = pe((a) => t = a, o.ref);
      typeof i == "function" && i(l);
    }
  }, s));
}
var Oi = Se();
function Sc() {
  const e = ke(Oi);
  if (e === void 0)
    throw new Error("[kobalte]: `useMenuGroupContext` must be used within a `Menu.Group` component");
  return e;
}
function qi(e) {
  const t = rt();
  e = W({
    id: t.generateId(`group-${Be()}`)
  }, e);
  const [n, r] = z(), o = {
    generateId: nn(() => e.id),
    registerLabelId: Oe(r)
  };
  return v(Oi.Provider, {
    value: o,
    get children() {
      return v(ie, j({
        as: "div",
        role: "group",
        get "aria-labelledby"() {
          return n();
        }
      }, e));
    }
  });
}
function kc(e) {
  const t = Sc();
  e = W({
    id: t.generateId("label")
  }, e);
  const [n, r] = J(e, ["id"]);
  return U(() => V(t.registerLabelId(n.id))), v(ie, j({
    as: "span",
    get id() {
      return n.id;
    },
    "aria-hidden": "true"
  }, r));
}
function Ec(e) {
  const t = nt();
  return e = W({
    children: "▼"
  }, e), v(ie, j({
    as: "span",
    "aria-hidden": "true"
  }, () => t.dataset(), e));
}
function _c(e) {
  return v($r, j({
    role: "menuitem",
    closeOnSelect: !0
  }, e));
}
function Ac(e) {
  const t = xr();
  e = W({
    id: t.generateId("description")
  }, e);
  const [n, r] = J(e, ["id"]);
  return U(() => V(t.registerDescription(n.id))), v(ie, j({
    as: "div",
    get id() {
      return n.id;
    }
  }, () => t.dataset(), r));
}
function Fc(e) {
  const t = xr();
  e = W({
    id: t.generateId("indicator")
  }, e);
  const [n, r] = J(e, ["forceMount"]);
  return v(R, {
    get when() {
      return n.forceMount || t.isChecked();
    },
    get children() {
      return v(ie, j({
        as: "div"
      }, () => t.dataset(), r));
    }
  });
}
function Dc(e) {
  const t = xr();
  e = W({
    id: t.generateId("label")
  }, e);
  const [n, r] = J(e, ["ref", "id"]);
  return U(() => V(t.registerLabel(n.id))), v(ie, j({
    as: "div",
    ref(o) {
      const s = pe(t.setLabelRef, n.ref);
      typeof s == "function" && s(o);
    },
    get id() {
      return n.id;
    }
  }, () => t.dataset(), r));
}
function Ic(e) {
  const t = nt();
  return v(R, {
    get when() {
      return t.contentPresence.isPresent();
    },
    get children() {
      return v(os, e);
    }
  });
}
var Mi = Se();
function Lc() {
  const e = ke(Mi);
  if (e === void 0)
    throw new Error("[kobalte]: `useMenuRadioGroupContext` must be used within a `Menu.RadioGroup` component");
  return e;
}
function Oc(e) {
  const n = rt().generateId(`radiogroup-${Be()}`);
  e = W({
    id: n
  }, e);
  const [r, o] = J(e, ["value", "defaultValue", "onChange", "disabled"]), [s, l] = sn({
    value: () => r.value,
    defaultValue: () => r.defaultValue,
    onChange: (a) => {
      var c;
      return (c = r.onChange) == null ? void 0 : c.call(r, a);
    }
  }), i = {
    isDisabled: () => r.disabled,
    isSelectedValue: (a) => a === s(),
    setSelectedValue: l
  };
  return v(Mi.Provider, {
    value: i,
    get children() {
      return v(qi, o);
    }
  });
}
function qc(e) {
  const t = Lc();
  e = W({
    closeOnSelect: !1
  }, e);
  const [n, r] = J(e, ["value", "onSelect"]);
  return v($r, j({
    role: "menuitemradio",
    get checked() {
      return t.isSelectedValue(n.value);
    },
    onSelect: () => {
      var s;
      (s = n.onSelect) == null || s.call(n), t.setSelectedValue(n.value);
    }
  }, r));
}
function Mc(e) {
  const t = `menu-${Be()}`;
  e = W({
    id: t,
    modal: !0,
    preventScroll: !1
  }, e);
  const [n, r] = J(e, ["id", "modal", "preventScroll", "forceMount", "open", "defaultOpen", "onOpenChange"]), o = ui({
    open: () => n.open,
    defaultOpen: () => n.defaultOpen,
    onOpenChange: (l) => {
      var i;
      return (i = n.onOpenChange) == null ? void 0 : i.call(n, l);
    }
  }), s = {
    isModal: () => n.modal ?? !0,
    preventScroll: () => n.preventScroll ?? !1,
    forceMount: () => n.forceMount ?? !1,
    generateId: nn(() => n.id)
  };
  return v(Fi.Provider, {
    value: s,
    get children() {
      return v(Di, j({
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
function Tc(e) {
  const {
    direction: t
  } = Ot();
  return v(Di, j({
    get placement() {
      return t() === "rtl" ? "left-start" : "right-start";
    },
    flip: !0
  }, e));
}
var Pc = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function zc(e) {
  const t = nt(), [n, r] = J(e, ["onFocusOutside", "onKeyDown", "onFocusOut"]), {
    direction: o
  } = Ot();
  return v(Li, j({
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
      Le(t.triggerRef(), h) || t.close();
    },
    onKeyDown: (c) => {
      re(c, n.onKeyDown);
      const h = Le(c.currentTarget, c.target), f = Pc[o()].includes(c.key), d = t.parentMenuContext() != null;
      h && f && d && (t.close(), be(t.triggerRef()));
    }
  }, r));
}
var ko = ["Enter", " "], Kc = {
  ltr: [...ko, "ArrowRight"],
  rtl: [...ko, "ArrowLeft"]
};
function Bc(e) {
  let t;
  const n = rt(), r = nt();
  e = W({
    id: n.generateId(`sub-trigger-${Be()}`)
  }, e);
  const [o, s] = J(e, ["ref", "id", "textValue", "disabled", "onPointerMove", "onPointerLeave", "onPointerDown", "onPointerUp", "onClick", "onKeyDown", "onMouseDown", "onFocus"]);
  let l = null;
  const i = () => {
    l && window.clearTimeout(l), l = null;
  }, {
    direction: a
  } = Ot(), c = () => o.id, h = () => {
    const x = r.parentMenuContext();
    if (x == null)
      throw new Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");
    return x.listState().selectionManager();
  }, f = () => r.listState().collection(), d = () => h().focusedKey() === c(), g = xi({
    key: c,
    selectionManager: h,
    shouldSelectOnPressUp: !0,
    allowsDifferentPressOrigin: !0,
    disabled: () => o.disabled
  }, () => t), u = (x) => {
    re(x, o.onClick), !r.isOpen() && !o.disabled && r.open(!0);
  }, y = (x) => {
    var w;
    if (re(x, o.onPointerMove), x.pointerType !== "mouse")
      return;
    const b = r.parentMenuContext();
    if (b == null || b.onItemEnter(x), !x.defaultPrevented) {
      if (o.disabled) {
        b == null || b.onItemLeave(x);
        return;
      }
      !r.isOpen() && !l && ((w = r.parentMenuContext()) == null || w.setPointerGraceIntent(null), l = window.setTimeout(() => {
        r.open(!1), i();
      }, 100)), b == null || b.onItemEnter(x), x.defaultPrevented || (r.listState().selectionManager().isFocused() && (r.listState().selectionManager().setFocused(!1), r.listState().selectionManager().setFocusedKey(void 0)), be(x.currentTarget), b == null || b.listState().selectionManager().setFocused(!0), b == null || b.listState().selectionManager().setFocusedKey(c()));
    }
  }, m = (x) => {
    if (re(x, o.onPointerLeave), x.pointerType !== "mouse")
      return;
    i();
    const b = r.parentMenuContext(), w = r.contentRef();
    if (w) {
      b == null || b.setPointerGraceIntent({
        area: $c(r.currentPlacement(), x, w),
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
    re(x, o.onKeyDown), !x.repeat && (o.disabled || Kc[a()].includes(x.key) && (x.stopPropagation(), x.preventDefault(), h().setFocused(!1), h().setFocusedKey(void 0), r.isOpen() || r.open("first"), r.focusContent(), r.listState().selectionManager().setFocused(!0), r.listState().selectionManager().setFocusedKey(f().getFirstKey())));
  };
  return U(() => {
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
  }), U(ze(() => {
    var x;
    return (x = r.parentMenuContext()) == null ? void 0 : x.pointerGraceTimeoutId();
  }, (x) => {
    V(() => {
      var b;
      window.clearTimeout(x), (b = r.parentMenuContext()) == null || b.setPointerGraceIntent(null);
    });
  })), U(() => V(r.registerTriggerId(o.id))), V(() => {
    i();
  }), v(ie, j({
    as: "div",
    ref(x) {
      const b = pe((w) => {
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
      return D(() => !!r.isOpen())() ? r.contentId() : void 0;
    },
    get "aria-disabled"() {
      return o.disabled;
    },
    get "data-key"() {
      return g.dataKey();
    },
    get "data-highlighted"() {
      return d() ? "" : void 0;
    },
    get "data-disabled"() {
      return o.disabled ? "" : void 0;
    },
    get onPointerDown() {
      return ge([o.onPointerDown, g.onPointerDown]);
    },
    get onPointerUp() {
      return ge([o.onPointerUp, g.onPointerUp]);
    },
    get onClick() {
      return ge([u, g.onClick]);
    },
    get onKeyDown() {
      return ge([$, g.onKeyDown]);
    },
    get onMouseDown() {
      return ge([o.onMouseDown, g.onMouseDown]);
    },
    get onFocus() {
      return ge([o.onFocus, g.onFocus]);
    },
    onPointerMove: y,
    onPointerLeave: m
  }, () => r.dataset(), s));
}
function Rc(e) {
  const t = rt(), n = nt();
  e = W({
    id: t.generateId("trigger")
  }, e);
  const [r, o] = J(e, ["ref", "id", "disabled", "onPointerDown", "onClick", "onKeyDown"]), s = (a) => {
    re(a, r.onPointerDown), a.currentTarget.dataset.pointerType = a.pointerType, !r.disabled && a.pointerType !== "touch" && a.button === 0 && n.toggle(!0);
  }, l = (a) => {
    re(a, r.onClick), !r.disabled && a.currentTarget.dataset.pointerType === "touch" && n.toggle(!0);
  }, i = (a) => {
    if (re(a, r.onKeyDown), !r.disabled)
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
  return U(() => V(n.registerTriggerId(r.id))), v(Ja, j({
    ref(a) {
      const c = pe(n.setTriggerRef, r.ref);
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
      return D(() => !!n.isOpen())() ? n.contentId() : void 0;
    },
    onPointerDown: s,
    onClick: l,
    onKeyDown: i
  }, () => n.dataset(), o));
}
function Nc(e) {
  let t;
  e = W({
    orientation: "horizontal"
  }, e);
  const [n, r] = J(e, ["ref", "orientation"]), o = br(() => t, () => "hr");
  return v(ie, j({
    as: "hr",
    ref(s) {
      const l = pe((i) => t = i, n.ref);
      typeof l == "function" && l(s);
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
new $l({
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
function Uc(e) {
  const t = rt(), n = nt(), [r, o] = J(e, ["onCloseAutoFocus", "onInteractOutside"]);
  let s = !1;
  return v(Cc, j({
    onCloseAutoFocus: (a) => {
      var c;
      (c = r.onCloseAutoFocus) == null || c.call(r, a), s || be(n.triggerRef()), s = !1, a.preventDefault();
    },
    onInteractOutside: (a) => {
      var c;
      (c = r.onInteractOutside) == null || c.call(r, a), (!t.isModal() || a.detail.isContextMenu) && (s = !0);
    }
  }, o));
}
function Gc(e) {
  const t = `dropdownmenu-${Be()}`;
  return e = W({
    id: t
  }, e), v(Mc, e);
}
var de = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Arrow: fc,
  CheckboxItem: wc,
  Content: Uc,
  Group: qi,
  GroupLabel: kc,
  Icon: Ec,
  Item: _c,
  ItemDescription: Ac,
  ItemIndicator: Fc,
  ItemLabel: Dc,
  Portal: Ic,
  RadioGroup: Oc,
  RadioItem: qc,
  Root: Gc,
  Separator: Nc,
  Sub: Tc,
  SubContent: zc,
  SubTrigger: Bc,
  Trigger: Rc
}), Ti = Se();
function Pi() {
  const e = ke(Ti);
  if (e === void 0)
    throw new Error("[kobalte]: `useRadioGroupContext` must be used within a `RadioGroup` component");
  return e;
}
var zi = Se();
function an() {
  const e = ke(zi);
  if (e === void 0)
    throw new Error("[kobalte]: `useRadioGroupItemContext` must be used within a `RadioGroup.Item` component");
  return e;
}
function Vc(e) {
  const t = ln(), n = Pi(), r = `${t.generateId("item")}-${Be()}`;
  e = W({
    id: r
  }, e);
  const [o, s] = J(e, ["value", "disabled", "onPointerDown"]), [l, i] = z(), [a, c] = z(), [h, f] = z(), [d, g] = z(), [u, y] = z(!1), m = D(() => n.isSelectedValue(o.value)), $ = D(() => o.disabled || t.isDisabled() || !1), x = (p) => {
    re(p, o.onPointerDown), u() && p.preventDefault();
  }, b = D(() => ({
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
    inputRef: d,
    select: () => n.setSelectedValue(o.value),
    generateId: nn(() => s.id),
    registerInput: Oe(i),
    registerLabel: Oe(c),
    registerDescription: Oe(f),
    setIsFocused: y,
    setInputRef: g
  };
  return v(zi.Provider, {
    value: w,
    get children() {
      return v(ie, j({
        as: "div",
        role: "group",
        onPointerDown: x
      }, b, s));
    }
  });
}
function jc(e) {
  const t = an();
  e = W({
    id: t.generateId("control")
  }, e);
  const [n, r] = J(e, ["onClick", "onKeyDown"]);
  return v(ie, j({
    as: "div",
    onClick: (l) => {
      var i;
      re(l, n.onClick), t.select(), (i = t.inputRef()) == null || i.focus();
    },
    onKeyDown: (l) => {
      var i;
      re(l, n.onKeyDown), l.key === ar.Space && (t.select(), (i = t.inputRef()) == null || i.focus());
    }
  }, () => t.dataset(), r));
}
function Hc(e) {
  const t = an();
  return e = W({
    id: t.generateId("description")
  }, e), U(() => V(t.registerDescription(e.id))), v(ie, j({
    as: "div"
  }, () => t.dataset(), e));
}
function Qc(e) {
  const t = an();
  e = W({
    id: t.generateId("indicator")
  }, e);
  const [n, r] = J(e, ["ref", "forceMount"]), o = hi(() => n.forceMount || t.isSelected());
  return v(R, {
    get when() {
      return o.isPresent();
    },
    get children() {
      return v(ie, j({
        as: "div",
        ref(s) {
          const l = pe(o.setRef, n.ref);
          typeof l == "function" && l(s);
        }
      }, () => t.dataset(), r));
    }
  });
}
var Wc = /* @__PURE__ */ T('<input type="radio">');
function Yc(e) {
  const t = ln(), n = Pi(), r = an();
  e = W({
    id: r.generateId("input")
  }, e);
  const [o, s] = J(e, ["ref", "style", "aria-labelledby", "aria-describedby", "onChange", "onFocus", "onBlur"]), l = () => [
    o["aria-labelledby"],
    r.labelId(),
    // If there is both an aria-label and aria-labelledby, add the input itself has an aria-labelledby
    o["aria-labelledby"] != null && s["aria-label"] != null ? s.id : void 0
  ].filter(Boolean).join(" ") || void 0, i = () => [o["aria-describedby"], r.descriptionId(), n.ariaDescribedBy()].filter(Boolean).join(" ") || void 0, a = (f) => {
    re(f, o.onChange), f.stopPropagation(), n.setSelectedValue(r.value());
    const d = f.target;
    d.checked = r.isSelected();
  }, c = (f) => {
    re(f, o.onFocus), r.setIsFocused(!0);
  }, h = (f) => {
    re(f, o.onBlur), r.setIsFocused(!1);
  };
  return U(() => V(r.registerInput(s.id))), (() => {
    const f = Wc();
    f.addEventListener("blur", h), f.addEventListener("focus", c), f.addEventListener("change", a);
    const d = pe(r.setInputRef, o.ref);
    return typeof d == "function" && tn(d, f), ir(f, j({
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
          ...Qo,
          ...o.style
        };
      },
      get "aria-labelledby"() {
        return l();
      },
      get "aria-describedby"() {
        return i();
      }
    }, () => r.dataset(), s), !1, !1), f;
  })();
}
var Xc = /* @__PURE__ */ T("<label>");
function Zc(e) {
  const t = an();
  return e = W({
    id: t.generateId("label")
  }, e), U(() => V(t.registerLabel(e.id))), (() => {
    const n = Xc();
    return ir(n, j({
      get for() {
        return t.inputId();
      }
    }, () => t.dataset(), e), !1, !1), n;
  })();
}
function Jc(e) {
  return v(La, j({
    as: "span"
  }, e));
}
function eu(e) {
  let t;
  const n = `radiogroup-${Be()}`;
  e = W({
    id: n,
    orientation: "vertical"
  }, e);
  const [r, o, s] = J(e, ["ref", "value", "defaultValue", "onChange", "orientation", "aria-labelledby", "aria-describedby"], _a), [l, i] = sn({
    value: () => r.value,
    defaultValue: () => r.defaultValue,
    onChange: (g) => {
      var u;
      return (u = r.onChange) == null ? void 0 : u.call(r, g);
    }
  }), {
    formControlContext: a
  } = Aa(o);
  ya(() => t, () => i(r.defaultValue ?? ""));
  const c = () => a.getAriaLabelledBy(C(o.id), s["aria-label"], r["aria-labelledby"]), h = () => a.getAriaDescribedBy(r["aria-describedby"]), f = (g) => g === l(), d = {
    ariaDescribedBy: h,
    isSelectedValue: f,
    setSelectedValue: (g) => {
      a.isReadOnly() || a.isDisabled() || (i(g), t == null || t.querySelectorAll("[type='radio']").forEach((u) => {
        const y = u;
        y.checked = f(y.value);
      }));
    }
  };
  return v(yi.Provider, {
    value: a,
    get children() {
      return v(Ti.Provider, {
        value: d,
        get children() {
          return v(ie, j({
            as: "div",
            ref(g) {
              const u = pe((y) => t = y, r.ref);
              typeof u == "function" && u(g);
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
          }, () => a.dataset(), s));
        }
      });
    }
  });
}
var Te = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Description: Da,
  ErrorMessage: Ia,
  Item: Vc,
  ItemControl: jc,
  ItemDescription: Hc,
  ItemIndicator: Qc,
  ItemInput: Yc,
  ItemLabel: Zc,
  Label: Jc,
  Root: eu
});
Ln(["focusin", "focusout", "pointermove"]);
Ln(["keydown", "pointerdown", "pointermove", "pointerup"]);
var tu = {
  xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  sm: "0 1px 3px 0 color, 0 1px 2px -1px color",
  md: "0 4px 6px -1px color, 0 2px 4px -2px color",
  lg: "0 10px 15px -3px color, 0 4px 6px -4px color",
  xl: "0 20px 25px -5px color, 0 8px 10px -6px color",
  "2xl": "0 25px 50px -12px color",
  inner: "inset 0 2px 4px 0 color",
  none: "none"
}, lt = (e, t = "") => tu[e].replace(/color/g, t), nu = {
  xs: (e = "rgb(0 0 0 / 0.1)") => lt("xs", e),
  sm: (e = "rgb(0 0 0 / 0.1)") => lt("sm", e),
  md: (e = "rgb(0 0 0 / 0.1)") => lt("md", e),
  lg: (e = "rgb(0 0 0 / 0.1)") => lt("lg", e),
  xl: (e = "rgb(0 0 0 / 0.1)") => lt("xl", e),
  "2xl": (e = "rgb(0 0 0 / 0.25)") => lt("2xl", e),
  inner: (e = "rgb(0 0 0 / 0.05)") => lt("inner", e),
  none: () => lt("none")
}, k = {
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
  shadow: nu,
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
}, ru = /* @__PURE__ */ T('<svg width=14 height=14 viewBox="0 0 14 14"fill=none xmlns=http://www.w3.org/2000/svg><path d="M13 13L9.00007 9M10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667Z"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'), ou = /* @__PURE__ */ T('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'), iu = /* @__PURE__ */ T('<svg width=10 height=6 viewBox="0 0 10 6"fill=none xmlns=http://www.w3.org/2000/svg><path d="M1 1L5 5L9 1"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'), su = /* @__PURE__ */ T('<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 13.3333V2.66667M8 2.66667L4 6.66667M8 2.66667L12 6.66667"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'), pr = /* @__PURE__ */ T('<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 2.66667V13.3333M8 13.3333L4 9.33333M8 13.3333L12 9.33333"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'), lu = /* @__PURE__ */ T('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2v2m0 16v2M4 12H2m4.314-5.686L4.9 4.9m12.786 1.414L19.1 4.9M6.314 17.69 4.9 19.104m12.786-1.414 1.414 1.414M22 12h-2m-3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'), au = /* @__PURE__ */ T('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M22 15.844a10.424 10.424 0 0 1-4.306.925c-5.779 0-10.463-4.684-10.463-10.462 0-1.536.33-2.994.925-4.307A10.464 10.464 0 0 0 2 11.538C2 17.316 6.684 22 12.462 22c4.243 0 7.896-2.526 9.538-6.156Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'), cu = /* @__PURE__ */ T('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 21h8m-4-4v4m-5.2-4h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 14.72 22 13.88 22 12.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 3 18.88 3 17.2 3H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 5.28 2 6.12 2 7.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 17 5.12 17 6.8 17Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'), uu = /* @__PURE__ */ T('<svg stroke=currentColor fill=currentColor stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M0 0h24v24H0z"></path><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z">'), du = /* @__PURE__ */ T('<svg stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M24 .01c0-.01 0-.01 0 0L0 0v24h24V.01zM0 0h24v24H0V0zm0 0h24v24H0V0z"></path><path d="M22.99 9C19.15 5.16 13.8 3.76 8.84 4.78l2.52 2.52c3.47-.17 6.99 1.05 9.63 3.7l2-2zm-4 4a9.793 9.793 0 00-4.49-2.56l3.53 3.53.96-.97zM2 3.05L5.07 6.1C3.6 6.82 2.22 7.78 1 9l1.99 2c1.24-1.24 2.67-2.16 4.2-2.77l2.24 2.24A9.684 9.684 0 005 13v.01L6.99 15a7.042 7.042 0 014.92-2.06L18.98 20l1.27-1.26L3.29 1.79 2 3.05zM9 17l3 3 3-3a4.237 4.237 0 00-6 0z">'), fu = /* @__PURE__ */ T('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.3951 19.3711L9.97955 20.6856C10.1533 21.0768 10.4368 21.4093 10.7958 21.6426C11.1547 21.8759 11.5737 22.0001 12.0018 22C12.4299 22.0001 12.8488 21.8759 13.2078 21.6426C13.5667 21.4093 13.8503 21.0768 14.024 20.6856L14.6084 19.3711C14.8165 18.9047 15.1664 18.5159 15.6084 18.26C16.0532 18.0034 16.5678 17.8941 17.0784 17.9478L18.5084 18.1C18.9341 18.145 19.3637 18.0656 19.7451 17.8713C20.1265 17.6771 20.4434 17.3763 20.6573 17.0056C20.8715 16.635 20.9735 16.2103 20.9511 15.7829C20.9286 15.3555 20.7825 14.9438 20.5307 14.5978L19.684 13.4344C19.3825 13.0171 19.2214 12.5148 19.224 12C19.2239 11.4866 19.3865 10.9864 19.6884 10.5711L20.5351 9.40778C20.787 9.06175 20.933 8.65007 20.9555 8.22267C20.978 7.79528 20.8759 7.37054 20.6618 7C20.4479 6.62923 20.131 6.32849 19.7496 6.13423C19.3681 5.93997 18.9386 5.86053 18.5129 5.90556L17.0829 6.05778C16.5722 6.11141 16.0577 6.00212 15.6129 5.74556C15.17 5.48825 14.82 5.09736 14.6129 4.62889L14.024 3.31444C13.8503 2.92317 13.5667 2.59072 13.2078 2.3574C12.8488 2.12408 12.4299 1.99993 12.0018 2C11.5737 1.99993 11.1547 2.12408 10.7958 2.3574C10.4368 2.59072 10.1533 2.92317 9.97955 3.31444L9.3951 4.62889C9.18803 5.09736 8.83798 5.48825 8.3951 5.74556C7.95032 6.00212 7.43577 6.11141 6.9251 6.05778L5.49066 5.90556C5.06499 5.86053 4.6354 5.93997 4.25397 6.13423C3.87255 6.32849 3.55567 6.62923 3.34177 7C3.12759 7.37054 3.02555 7.79528 3.04804 8.22267C3.07052 8.65007 3.21656 9.06175 3.46844 9.40778L4.3151 10.5711C4.61704 10.9864 4.77964 11.4866 4.77955 12C4.77964 12.5134 4.61704 13.0137 4.3151 13.4289L3.46844 14.5922C3.21656 14.9382 3.07052 15.3499 3.04804 15.7773C3.02555 16.2047 3.12759 16.6295 3.34177 17C3.55589 17.3706 3.8728 17.6712 4.25417 17.8654C4.63554 18.0596 5.06502 18.1392 5.49066 18.0944L6.92066 17.9422C7.43133 17.8886 7.94587 17.9979 8.39066 18.2544C8.83519 18.511 9.18687 18.902 9.3951 19.3711Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><path d="M12 15C13.6568 15 15 13.6569 15 12C15 10.3431 13.6568 9 12 9C10.3431 9 8.99998 10.3431 8.99998 12C8.99998 13.6569 10.3431 15 12 15Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'), gu = /* @__PURE__ */ T('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path class=copier d="M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round stroke=currentColor>'), Ki = /* @__PURE__ */ T('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'), hu = /* @__PURE__ */ T('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 9L15 15M15 9L9 15M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke=#F04438 stroke-width=2 stroke-linecap=round stroke-linejoin=round>'), yu = /* @__PURE__ */ T('<svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 xmlns=http://www.w3.org/2000/svg><rect class=list width=20 height=20 y=2 x=2 rx=2></rect><line class=list-item y1=7 y2=7 x1=6 x2=18></line><line class=list-item y2=12 y1=12 x1=6 x2=18></line><line class=list-item y1=17 y2=17 x1=6 x2=18>'), vu = /* @__PURE__ */ T('<svg viewBox="0 0 24 24"height=20 width=20 fill=none xmlns=http://www.w3.org/2000/svg><path d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'), mu = /* @__PURE__ */ T('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'), bu = /* @__PURE__ */ T('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 19.0784L16.25 16.25M19.0784 4.99994L16.25 7.82837M4.92157 19.0784L7.75 16.25M4.92157 4.99994L7.75 7.82837"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><animateTransform attributeName=transform attributeType=XML type=rotate from=0 to=360 dur=2s repeatCount=indefinite>'), xu = /* @__PURE__ */ T('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'), $u = /* @__PURE__ */ T('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.5 15V9M14.5 15V9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'), pu = /* @__PURE__ */ T('<svg version=1.0 viewBox="0 0 633 633"><linearGradient x1=-666.45 x2=-666.45 y1=163.28 y2=163.99 gradientTransform="matrix(633 0 0 633 422177 -103358)"gradientUnits=userSpaceOnUse><stop stop-color=#6BDAFF offset=0></stop><stop stop-color=#F9FFB5 offset=.32></stop><stop stop-color=#FFA770 offset=.71></stop><stop stop-color=#FF7373 offset=1></stop></linearGradient><circle cx=316.5 cy=316.5 r=316.5></circle><defs><filter x=-137.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=316.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=316.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=316.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=272.2 y=308 width=176.9 height=129.3 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=272.2 y=308 width=176.9 height=129.3 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><line x1=436 x2=431 y1=403.2 y2=431.8 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=291 x2=280 y1=341.5 y2=403.5 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=332.9 x2=328.6 y1=384.1 y2=411.2 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><linearGradient x1=-670.75 x2=-671.59 y1=164.4 y2=164.49 gradientTransform="matrix(-184.16 -32.472 -11.461 64.997 -121359 -32126)"gradientUnits=userSpaceOnUse><stop stop-color=#EE2700 offset=0></stop><stop stop-color=#FF008E offset=1></stop></linearGradient><path d="m344.1 363 97.7 17.2c5.8 2.1 8.2 6.1 7.1 12.1s-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1 0.8-12.8s8.3-4.4 13.7-2.1l55.2 53.6z"clip-rule=evenodd fill-rule=evenodd></path><line x1=428.2 x2=429.1 y1=384.5 y2=378 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=395.2 x2=396.1 y1=379.5 y2=373 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=362.2 x2=363.1 y1=373.5 y2=367.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=324.2 x2=328.4 y1=351.3 y2=347.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=303.2 x2=307.4 y1=331.3 y2=327.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line></g><defs><filter x=73.2 y=113.8 width=280.6 height=317.4 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=73.2 y=113.8 width=280.6 height=317.4 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-672.16 x2=-672.16 y1=165.03 y2=166.03 gradientTransform="matrix(-100.18 48.861 97.976 200.88 -83342 -93.059)"gradientUnits=userSpaceOnUse><stop stop-color=#A17500 offset=0></stop><stop stop-color=#5D2100 offset=1></stop></linearGradient><path d="m192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.1-3 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6s-10.8-51.9-22.1-99.6l-25.3 4.6"clip-rule=evenodd fill-rule=evenodd></path><g stroke=#2F8A00><linearGradient x1=-660.23 x2=-660.23 y1=166.72 y2=167.72 gradientTransform="matrix(92.683 4.8573 -2.0259 38.657 61680 -3088.6)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-661.36 x2=-661.36 y1=164.18 y2=165.18 gradientTransform="matrix(110 5.7648 -6.3599 121.35 73933 -15933)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.4 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20.2 49.6-53.2 49.6-53.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.79 x2=-656.79 y1=165.15 y2=166.15 gradientTransform="matrix(62.954 3.2993 -3.5023 66.828 42156 -8754.1)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9c-0.8-21.9 6-38 20.6-48.2s29.8-15.4 45.5-15.3c-6.1 21.4-14.5 35.8-25.2 43.4s-24.4 14.2-40.9 20.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-663.07 x2=-663.07 y1=165.44 y2=166.44 gradientTransform="matrix(152.47 7.9907 -3.0936 59.029 101884 -4318.7)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c31.9-30 64.1-39.7 96.7-29s50.8 30.4 54.6 59.1c-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-662.57 x2=-662.57 y1=164.44 y2=165.44 gradientTransform="matrix(136.46 7.1517 -5.2163 99.533 91536 -11442)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c35.8-7.6 65.6-0.2 89.2 22s37.7 49 42.3 80.3c-39.8-9.7-68.3-23.8-85.5-42.4s-32.5-38.5-46-59.9z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.43 x2=-656.43 y1=163.86 y2=164.86 gradientTransform="matrix(60.866 3.1899 -8.7773 167.48 41560 -25168)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6s-3.6 63.1 8.7 99.6c27.4-40.3 43.2-69.6 47.4-88s5.6-44.1 4-77.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><path d="m196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4s-9.5 33-11.1 45.1"fill=none stroke-linecap=round stroke-width=8></path><path d="m194.9 185.7c-24.4 1.7-43.8 9-58.1 21.8s-24.7 25.4-31.3 37.8"fill=none stroke-linecap=round stroke-width=8></path><path d="m204.5 176.4c29.7-6.7 52-8.4 67-5.1s26.9 8.6 35.8 15.9"fill=none stroke-linecap=round stroke-width=8></path><path d="m196.5 181.4c20.3 9.9 38.2 20.5 53.9 31.9s27.4 22.1 35.1 32"fill=none stroke-linecap=round stroke-width=8></path></g></g><defs><filter x=50.5 y=399 width=532 height=633 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=50.5 y=399 width=532 height=633 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-666.06 x2=-666.23 y1=163.36 y2=163.75 gradientTransform="matrix(532 0 0 633 354760 -102959)"gradientUnits=userSpaceOnUse><stop stop-color=#FFF400 offset=0></stop><stop stop-color=#3C8700 offset=1></stop></linearGradient><ellipse cx=316.5 cy=715.5 rx=266 ry=316.5></ellipse></g><defs><filter x=391 y=-24 width=288 height=283 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=391 y=-24 width=288 height=283 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-664.56 x2=-664.56 y1=163.79 y2=164.79 gradientTransform="matrix(227 0 0 227 151421 -37204)"gradientUnits=userSpaceOnUse><stop stop-color=#FFDF00 offset=0></stop><stop stop-color=#FF9D00 offset=1></stop></linearGradient><circle cx=565.5 cy=89.5 r=113.5></circle><linearGradient x1=-644.5 x2=-645.77 y1=342 y2=342 gradientTransform="matrix(30 0 0 1 19770 -253)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=427 x2=397 y1=89 y2=89 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-641.56 x2=-642.83 y1=196.02 y2=196.07 gradientTransform="matrix(26.5 0 0 5.5 17439 -1025.5)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=430.5 x2=404 y1=55.5 y2=50 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-643.73 x2=-645 y1=185.83 y2=185.9 gradientTransform="matrix(29 0 0 8 19107 -1361)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=431 x2=402 y1=122 y2=130 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-638.94 x2=-640.22 y1=177.09 y2=177.39 gradientTransform="matrix(24 0 0 13 15783 -2145)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=442 x2=418 y1=153 y2=166 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-633.42 x2=-634.7 y1=172.41 y2=173.31 gradientTransform="matrix(20 0 0 19 13137 -3096)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=464 x2=444 y1=180 y2=199 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-619.05 x2=-619.52 y1=170.82 y2=171.82 gradientTransform="matrix(13.83 0 0 22.85 9050 -3703.4)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=491.4 x2=477.5 y1=203 y2=225.9 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-578.5 x2=-578.63 y1=170.31 y2=171.31 gradientTransform="matrix(7.5 0 0 24.5 4860 -3953)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=524.5 x2=517 y1=219.5 y2=244 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=666.5 x2=666.5 y1=170.31 y2=171.31 gradientTransform="matrix(.5 0 0 24.5 231.5 -3944)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=564.5 x2=565 y1=228.5 y2=253 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12>');
function wu() {
  return ru();
}
function Bi() {
  return ou();
}
function Wt() {
  return iu();
}
function Eo() {
  return su();
}
function _o() {
  return pr();
}
function Cu() {
  return (() => {
    const e = pr();
    return e.style.setProperty("transform", "rotate(90deg)"), e;
  })();
}
function Su() {
  return (() => {
    const e = pr();
    return e.style.setProperty("transform", "rotate(-90deg)"), e;
  })();
}
function ku() {
  return lu();
}
function Eu() {
  return au();
}
function _u() {
  return cu();
}
function Au() {
  return uu();
}
function Fu() {
  return du();
}
function Du() {
  return fu();
}
function Iu() {
  return gu();
}
function Lu(e) {
  return (() => {
    const t = Ki(), n = t.firstChild;
    return G(() => F(n, "stroke", e.theme === "dark" ? "#12B76A" : "#027A48")), t;
  })();
}
function Ou() {
  return hu();
}
function qu() {
  return yu();
}
function Mu(e) {
  return [v(R, {
    get when() {
      return e.checked;
    },
    get children() {
      const t = Ki(), n = t.firstChild;
      return G(() => F(n, "stroke", e.theme === "dark" ? "#9B8AFB" : "#6938EF")), t;
    }
  }), v(R, {
    get when() {
      return !e.checked;
    },
    get children() {
      const t = vu(), n = t.firstChild;
      return G(() => F(n, "stroke", e.theme === "dark" ? "#9B8AFB" : "#6938EF")), t;
    }
  })];
}
function Tu() {
  return mu();
}
function Pu() {
  return bu();
}
function zu() {
  return xu();
}
function Ku() {
  return $u();
}
function Ao() {
  const e = Be();
  return (() => {
    const t = pu(), n = t.firstChild, r = n.nextSibling, o = r.nextSibling, s = o.firstChild, l = o.nextSibling, i = l.firstChild, a = l.nextSibling, c = a.nextSibling, h = c.firstChild, f = c.nextSibling, d = f.firstChild, g = f.nextSibling, u = g.nextSibling, y = u.firstChild, m = u.nextSibling, $ = m.firstChild, x = m.nextSibling, b = x.nextSibling, w = b.firstChild, p = b.nextSibling, L = p.firstChild, q = p.nextSibling, A = q.nextSibling, N = A.firstChild, K = A.nextSibling, B = K.firstChild, Y = K.nextSibling, se = Y.nextSibling, P = se.firstChild, H = se.nextSibling, X = H.firstChild, ee = H.nextSibling, ne = ee.nextSibling, ae = ne.firstChild, we = ne.nextSibling, ce = we.firstChild, ye = we.nextSibling, ve = ye.firstChild, S = ve.nextSibling, Q = S.nextSibling, Z = Q.nextSibling, Re = Z.nextSibling, ot = ye.nextSibling, $t = ot.firstChild, Ve = ot.nextSibling, je = Ve.firstChild, He = Ve.nextSibling, Qe = He.firstChild, M = Qe.nextSibling, ue = M.nextSibling, $e = ue.firstChild, oe = $e.nextSibling, te = oe.nextSibling, le = te.nextSibling, me = le.nextSibling, Me = me.nextSibling, it = Me.nextSibling, st = it.nextSibling, Tt = st.nextSibling, Pt = Tt.nextSibling, zt = Pt.nextSibling, cn = zt.nextSibling, Kt = He.nextSibling, un = Kt.firstChild, pt = Kt.nextSibling, dn = pt.firstChild, wt = pt.nextSibling, Bt = wt.firstChild, fn = Bt.nextSibling, Rt = wt.nextSibling, gn = Rt.firstChild, yt = Rt.nextSibling, hn = yt.firstChild, Ct = yt.nextSibling, Cr = Ct.firstChild, Sr = Cr.nextSibling, kr = Sr.nextSibling, Er = kr.nextSibling, _r = Er.nextSibling, Ar = _r.nextSibling, Fr = Ar.nextSibling, Dr = Fr.nextSibling, Ir = Dr.nextSibling, Lr = Ir.nextSibling, Or = Lr.nextSibling, qr = Or.nextSibling, Mr = qr.nextSibling, Tr = Mr.nextSibling, Pr = Tr.nextSibling, zr = Pr.nextSibling, Kr = zr.nextSibling, Yi = Kr.nextSibling;
    return F(n, "id", `a-${e}`), F(r, "fill", `url(#a-${e})`), F(s, "id", `am-${e}`), F(l, "id", `b-${e}`), F(i, "filter", `url(#am-${e})`), F(a, "mask", `url(#b-${e})`), F(h, "id", `ah-${e}`), F(f, "id", `k-${e}`), F(d, "filter", `url(#ah-${e})`), F(g, "mask", `url(#k-${e})`), F(y, "id", `ae-${e}`), F(m, "id", `j-${e}`), F($, "filter", `url(#ae-${e})`), F(x, "mask", `url(#j-${e})`), F(w, "id", `ai-${e}`), F(p, "id", `i-${e}`), F(L, "filter", `url(#ai-${e})`), F(q, "mask", `url(#i-${e})`), F(N, "id", `aj-${e}`), F(K, "id", `h-${e}`), F(B, "filter", `url(#aj-${e})`), F(Y, "mask", `url(#h-${e})`), F(P, "id", `ag-${e}`), F(H, "id", `g-${e}`), F(X, "filter", `url(#ag-${e})`), F(ee, "mask", `url(#g-${e})`), F(ae, "id", `af-${e}`), F(we, "id", `f-${e}`), F(ce, "filter", `url(#af-${e})`), F(ye, "mask", `url(#f-${e})`), F(Z, "id", `m-${e}`), F(Re, "fill", `url(#m-${e})`), F($t, "id", `ak-${e}`), F(Ve, "id", `e-${e}`), F(je, "filter", `url(#ak-${e})`), F(He, "mask", `url(#e-${e})`), F(Qe, "id", `n-${e}`), F(M, "fill", `url(#n-${e})`), F($e, "id", `r-${e}`), F(oe, "fill", `url(#r-${e})`), F(te, "id", `s-${e}`), F(le, "fill", `url(#s-${e})`), F(me, "id", `q-${e}`), F(Me, "fill", `url(#q-${e})`), F(it, "id", `p-${e}`), F(st, "fill", `url(#p-${e})`), F(Tt, "id", `o-${e}`), F(Pt, "fill", `url(#o-${e})`), F(zt, "id", `l-${e}`), F(cn, "fill", `url(#l-${e})`), F(un, "id", `al-${e}`), F(pt, "id", `d-${e}`), F(dn, "filter", `url(#al-${e})`), F(wt, "mask", `url(#d-${e})`), F(Bt, "id", `u-${e}`), F(fn, "fill", `url(#u-${e})`), F(gn, "id", `ad-${e}`), F(yt, "id", `c-${e}`), F(hn, "filter", `url(#ad-${e})`), F(Ct, "mask", `url(#c-${e})`), F(Cr, "id", `t-${e}`), F(Sr, "fill", `url(#t-${e})`), F(kr, "id", `v-${e}`), F(Er, "stroke", `url(#v-${e})`), F(_r, "id", `aa-${e}`), F(Ar, "stroke", `url(#aa-${e})`), F(Fr, "id", `w-${e}`), F(Dr, "stroke", `url(#w-${e})`), F(Ir, "id", `ac-${e}`), F(Lr, "stroke", `url(#ac-${e})`), F(Or, "id", `ab-${e}`), F(qr, "stroke", `url(#ab-${e})`), F(Mr, "id", `y-${e}`), F(Tr, "stroke", `url(#y-${e})`), F(Pr, "id", `x-${e}`), F(zr, "stroke", `url(#x-${e})`), F(Kr, "id", `z-${e}`), F(Yi, "stroke", `url(#z-${e})`), t;
  })();
}
var Ri = Se({
  client: void 0,
  onlineManager: void 0,
  queryFlavor: "",
  version: ""
});
function fe() {
  return ke(Ri);
}
var Ni = Se(
  () => "dark"
);
function xe() {
  return ke(Ni);
}
var Bu = /* @__PURE__ */ T('<span><svg width=16 height=16 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M6 12L10 8L6 4"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'), Ru = /* @__PURE__ */ T('<button title="Copy object to clipboard">'), Nu = /* @__PURE__ */ T('<button title="Remove all items"aria-label="Remove all items">'), Uu = /* @__PURE__ */ T('<button title="Delete item"aria-label="Delete item">'), Gu = /* @__PURE__ */ T('<button title="Toggle value"aria-label="Toggle value">'), Gt = /* @__PURE__ */ T("<div>"), Vu = /* @__PURE__ */ T("<div><button> <span></span> <span> "), ju = /* @__PURE__ */ T("<input>"), Fo = /* @__PURE__ */ T("<span>"), Hu = /* @__PURE__ */ T("<div><span>:"), Qu = /* @__PURE__ */ T("<div><div><button> [<!>...<!>]");
function Wu(e, t) {
  if (t < 1)
    return [];
  let n = 0;
  const r = [];
  for (; n < e.length; )
    r.push(e.slice(n, n + t)), n = n + t;
  return r;
}
var Do = (e) => {
  const t = xe(), n = D(() => t() === "dark" ? Mt : qt);
  return (() => {
    const r = Bu();
    return G(() => I(r, O(n().expander, _`
          transform: rotate(${e.expanded ? 90 : 0}deg);
        `, e.expanded && _`
            & svg {
              top: -1px;
            }
          `))), r;
  })();
}, Yu = (e) => {
  const t = xe(), n = D(() => t() === "dark" ? Mt : qt), [r, o] = z("NoCopy");
  return (() => {
    const s = Ru();
    return is(s, "click", r() === "NoCopy" ? () => {
      navigator.clipboard.writeText(ss(e.value)).then(() => {
        o("SuccessCopy"), setTimeout(() => {
          o("NoCopy");
        }, 1500);
      }, (l) => {
        o("ErrorCopy"), setTimeout(() => {
          o("NoCopy");
        }, 1500);
      });
    } : void 0, !0), E(s, v(ls, {
      get children() {
        return [v(Pn, {
          get when() {
            return r() === "NoCopy";
          },
          get children() {
            return v(Iu, {});
          }
        }), v(Pn, {
          get when() {
            return r() === "SuccessCopy";
          },
          get children() {
            return v(Lu, {
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
            return v(Ou, {});
          }
        })];
      }
    })), G((l) => {
      const i = n().actionButton, a = `${r() === "NoCopy" ? "Copy object to clipboard" : r() === "SuccessCopy" ? "Object copied to clipboard" : "Error copying object to clipboard"}`;
      return i !== l._v$ && I(s, l._v$ = i), a !== l._v$2 && F(s, "aria-label", l._v$2 = a), l;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), s;
  })();
}, Xu = (e) => {
  const t = xe(), n = D(() => t() === "dark" ? Mt : qt), r = fe().client;
  return (() => {
    const o = Nu();
    return o.$$click = () => {
      const s = e.activeQuery.state.data, l = sr(s, e.dataPath, []);
      r.setQueryData(e.activeQuery.queryKey, l);
    }, E(o, v(qu, {})), G(() => I(o, n().actionButton)), o;
  })();
}, Io = (e) => {
  const t = xe(), n = D(() => t() === "dark" ? Mt : qt), r = fe().client;
  return (() => {
    const o = Uu();
    return o.$$click = () => {
      const s = e.activeQuery.state.data, l = as(s, e.dataPath);
      r.setQueryData(e.activeQuery.queryKey, l);
    }, E(o, v(Bi, {})), G(() => I(o, O(n().actionButton))), o;
  })();
}, Zu = (e) => {
  const t = xe(), n = D(() => t() === "dark" ? Mt : qt), r = fe().client;
  return (() => {
    const o = Gu();
    return o.$$click = () => {
      const s = e.activeQuery.state.data, l = sr(s, e.dataPath, !e.value);
      r.setQueryData(e.activeQuery.queryKey, l);
    }, E(o, v(Mu, {
      get theme() {
        return t();
      },
      get checked() {
        return e.value;
      }
    })), G(() => I(o, O(n().actionButton, _`
          width: ${k.size[3.5]};
          height: ${k.size[3.5]};
        `))), o;
  })();
};
function Lo(e) {
  return Symbol.iterator in e;
}
function at(e) {
  const t = xe(), n = D(() => t() === "dark" ? Mt : qt), r = fe().client, [o, s] = z((e.defaultExpanded || []).includes(e.label)), l = () => s((g) => !g), [i, a] = z([]), c = D(() => Array.isArray(e.value) ? e.value.map((g, u) => ({
    label: u.toString(),
    value: g
  })) : e.value !== null && typeof e.value == "object" && Lo(e.value) && typeof e.value[Symbol.iterator] == "function" ? e.value instanceof Map ? Array.from(e.value, ([g, u]) => ({
    label: g,
    value: u
  })) : Array.from(e.value, (g, u) => ({
    label: u.toString(),
    value: g
  })) : typeof e.value == "object" && e.value !== null ? Object.entries(e.value).map(([g, u]) => ({
    label: g,
    value: u
  })) : []), h = D(() => Array.isArray(e.value) ? "array" : e.value !== null && typeof e.value == "object" && Lo(e.value) && typeof e.value[Symbol.iterator] == "function" ? "Iterable" : typeof e.value == "object" && e.value !== null ? "object" : typeof e.value), f = D(() => Wu(c(), 100)), d = e.dataPath ?? [];
  return (() => {
    const g = Gt();
    return E(g, v(R, {
      get when() {
        return f().length;
      },
      get children() {
        return [(() => {
          const u = Vu(), y = u.firstChild, m = y.firstChild, $ = m.nextSibling, x = $.nextSibling, b = x.nextSibling, w = b.firstChild;
          return y.$$click = () => l(), E(y, v(Do, {
            get expanded() {
              return o();
            }
          }), m), E($, () => e.label), E(b, () => String(h()).toLowerCase() === "iterable" ? "(Iterable) " : "", w), E(b, () => c().length, w), E(b, () => c().length > 1 ? "items" : "item", null), E(u, v(R, {
            get when() {
              return e.editable;
            },
            get children() {
              const p = Gt();
              return E(p, v(Yu, {
                get value() {
                  return e.value;
                }
              }), null), E(p, v(R, {
                get when() {
                  return e.itemsDeletable && e.activeQuery !== void 0;
                },
                get children() {
                  return v(Io, {
                    get activeQuery() {
                      return e.activeQuery;
                    },
                    dataPath: d
                  });
                }
              }), null), E(p, v(R, {
                get when() {
                  return h() === "array" && e.activeQuery !== void 0;
                },
                get children() {
                  return v(Xu, {
                    get activeQuery() {
                      return e.activeQuery;
                    },
                    dataPath: d
                  });
                }
              }), null), G(() => I(p, n().actions)), p;
            }
          }), null), G((p) => {
            const L = n().expanderButtonContainer, q = n().expanderButton, A = n().info;
            return L !== p._v$3 && I(u, p._v$3 = L), q !== p._v$4 && I(y, p._v$4 = q), A !== p._v$5 && I(b, p._v$5 = A), p;
          }, {
            _v$3: void 0,
            _v$4: void 0,
            _v$5: void 0
          }), u;
        })(), v(R, {
          get when() {
            return o();
          },
          get children() {
            return [v(R, {
              get when() {
                return f().length === 1;
              },
              get children() {
                const u = Gt();
                return E(u, v(pn, {
                  get each() {
                    return c();
                  },
                  by: (y) => y.label,
                  children: (y) => v(at, {
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
                      return [...d, y().label];
                    },
                    get activeQuery() {
                      return e.activeQuery;
                    },
                    get itemsDeletable() {
                      return h() === "array" || h() === "Iterable" || h() === "object";
                    }
                  })
                })), G(() => I(u, n().subEntry)), u;
              }
            }), v(R, {
              get when() {
                return f().length > 1;
              },
              get children() {
                const u = Gt();
                return E(u, v(ns, {
                  get each() {
                    return f();
                  },
                  children: (y, m) => (() => {
                    const $ = Qu(), x = $.firstChild, b = x.firstChild, w = b.firstChild, p = w.nextSibling, L = p.nextSibling, q = L.nextSibling;
                    return q.nextSibling, b.$$click = () => a((A) => A.includes(m) ? A.filter((N) => N !== m) : [...A, m]), E(b, v(Do, {
                      get expanded() {
                        return i().includes(m);
                      }
                    }), w), E(b, m * 100, p), E(b, m * 100 + 100 - 1, q), E(x, v(R, {
                      get when() {
                        return i().includes(m);
                      },
                      get children() {
                        const A = Gt();
                        return E(A, v(pn, {
                          get each() {
                            return y();
                          },
                          by: (N) => N.label,
                          children: (N) => v(at, {
                            get defaultExpanded() {
                              return e.defaultExpanded;
                            },
                            get label() {
                              return N().label;
                            },
                            get value() {
                              return N().value;
                            },
                            get editable() {
                              return e.editable;
                            },
                            get dataPath() {
                              return [...d, N().label];
                            },
                            get activeQuery() {
                              return e.activeQuery;
                            }
                          })
                        })), G(() => I(A, n().subEntry)), A;
                      }
                    }), null), G((A) => {
                      const N = n().entry, K = n().expanderButton;
                      return N !== A._v$10 && I(x, A._v$10 = N), K !== A._v$11 && I(b, A._v$11 = K), A;
                    }, {
                      _v$10: void 0,
                      _v$11: void 0
                    }), $;
                  })()
                })), G(() => I(u, n().subEntry)), u;
              }
            })];
          }
        })];
      }
    }), null), E(g, v(R, {
      get when() {
        return f().length === 0;
      },
      get children() {
        const u = Hu(), y = u.firstChild, m = y.firstChild;
        return E(y, () => e.label, m), E(u, v(R, {
          get when() {
            return D(() => !!(e.editable && e.activeQuery !== void 0))() && (h() === "string" || h() === "number" || h() === "boolean");
          },
          get fallback() {
            return (() => {
              const $ = Fo();
              return E($, () => xn(e.value)), G(() => I($, n().value)), $;
            })();
          },
          get children() {
            return [v(R, {
              get when() {
                return D(() => !!(e.editable && e.activeQuery !== void 0))() && (h() === "string" || h() === "number");
              },
              get children() {
                const $ = ju();
                return $.addEventListener("change", (x) => {
                  const b = e.activeQuery.state.data, w = sr(b, d, h() === "number" ? x.target.valueAsNumber : x.target.value);
                  r.setQueryData(e.activeQuery.queryKey, w);
                }), G((x) => {
                  const b = h() === "number" ? "number" : "text", w = O(n().value, n().editableInput);
                  return b !== x._v$6 && F($, "type", x._v$6 = b), w !== x._v$7 && I($, x._v$7 = w), x;
                }, {
                  _v$6: void 0,
                  _v$7: void 0
                }), G(() => $.value = e.value), $;
              }
            }), v(R, {
              get when() {
                return h() === "boolean";
              },
              get children() {
                const $ = Fo();
                return E($, v(Zu, {
                  get activeQuery() {
                    return e.activeQuery;
                  },
                  dataPath: d,
                  get value() {
                    return e.value;
                  }
                }), null), E($, () => xn(e.value), null), G(() => I($, O(n().value, n().actions, n().editableInput))), $;
              }
            })];
          }
        }), null), E(u, v(R, {
          get when() {
            return e.editable && e.itemsDeletable && e.activeQuery !== void 0;
          },
          get children() {
            return v(Io, {
              get activeQuery() {
                return e.activeQuery;
              },
              dataPath: d
            });
          }
        }), null), G(($) => {
          const x = n().row, b = n().label;
          return x !== $._v$8 && I(u, $._v$8 = x), b !== $._v$9 && I(y, $._v$9 = b), $;
        }, {
          _v$8: void 0,
          _v$9: void 0
        }), u;
      }
    }), null), G(() => I(g, n().entry)), g;
  })();
}
var Ui = (e) => {
  const {
    colors: t,
    font: n,
    size: r,
    border: o
  } = k, s = (l, i) => e === "light" ? l : i;
  return {
    entry: _`
      & * {
        font-size: ${n.size.xs};
        font-family: 'Menlo', 'Fira Code', monospace;
      }
      position: relative;
      outline: none;
      word-break: break-word;
    `,
    subEntry: _`
      margin: 0 0 0 0.5em;
      padding-left: 0.75em;
      border-left: 2px solid ${s(t.gray[300], t.darkGray[400])};
      /* outline: 1px solid ${t.teal[400]}; */
    `,
    expander: _`
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
    expanderButtonContainer: _`
      display: flex;
      align-items: center;
      line-height: ${r[4]};
      min-height: ${r[4]};
      gap: ${r[2]};
    `,
    expanderButton: _`
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
    info: _`
      color: ${s(t.gray[500], t.gray[500])};
      font-size: ${n.size.xs};
      margin-left: ${r[1]};
      /* outline: 1px solid ${t.yellow[400]}; */
    `,
    label: _`
      color: ${s(t.gray[700], t.gray[300])};
      white-space: nowrap;
    `,
    value: _`
      color: ${s(t.purple[600], t.purple[400])};
      flex-grow: 1;
    `,
    actions: _`
      display: inline-flex;
      gap: ${r[2]};
      align-items: center;
    `,
    row: _`
      display: inline-flex;
      gap: ${r[2]};
      width: 100%;
      margin: ${r[0.25]} 0px;
      line-height: ${r[4.5]};
      align-items: center;
    `,
    editableInput: _`
      border: none;
      padding: ${r[0.5]} ${r[1]} ${r[0.5]} ${r[1.5]};
      flex-grow: 1;
      border-radius: ${o.radius.xs};
      background-color: ${s(t.gray[200], t.darkGray[500])};

      &:hover {
        background-color: ${s(t.gray[300], t.darkGray[600])};
      }
    `,
    actionButton: _`
      background-color: transparent;
      color: ${s(t.gray[500], t.gray[500])};
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
        color: ${s(t.gray[600], t.gray[400])};
      }

      &:focus-visible {
        border-radius: ${o.radius.xs};
        outline: 2px solid ${t.blue[800]};
        outline-offset: 2px;
      }
    `
  };
}, qt = Ui("light"), Mt = Ui("dark");
Ln(["click"]);
var Ju = () => {
  const e = document.createElement("link");
  e.href = "https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap", e.rel = "stylesheet", document.head.appendChild(e);
}, ed = /* @__PURE__ */ T('<div><div aria-hidden=true></div><button aria-label="Open Tanstack query devtools">'), wr = /* @__PURE__ */ T("<div>"), td = /* @__PURE__ */ T('<aside aria-label="Tanstack query devtools"><div></div><button aria-label="Close tanstack query devtools">'), Oo = /* @__PURE__ */ T("<select>"), nd = /* @__PURE__ */ T("<span>Asc"), rd = /* @__PURE__ */ T("<span>Desc"), od = /* @__PURE__ */ T("<div>Settings"), id = /* @__PURE__ */ T("<span>Position"), sd = /* @__PURE__ */ T("<span>Top"), ld = /* @__PURE__ */ T("<span>Bottom"), ad = /* @__PURE__ */ T("<span>Left"), cd = /* @__PURE__ */ T("<span>Right"), ud = /* @__PURE__ */ T("<span>Theme"), dd = /* @__PURE__ */ T("<span>Light"), fd = /* @__PURE__ */ T("<span>Dark"), gd = /* @__PURE__ */ T("<span>System"), hd = /* @__PURE__ */ T("<div><div class=tsqd-queries-container>"), yd = /* @__PURE__ */ T("<div><div class=tsqd-mutations-container>"), vd = /* @__PURE__ */ T('<div><div><div><button aria-label="Close Tanstack query devtools"><span>TANSTACK</span><span> v</span></button></div></div><div><div><div><input aria-label="Filter queries by query key"type=text placeholder=Filter class=tsqd-query-filter-textfield></div><div></div><button class=tsqd-query-filter-sort-order-btn></button></div><div><button aria-label="Clear query cache"></button><button>'), qo = /* @__PURE__ */ T("<option>Sort by "), md = /* @__PURE__ */ T("<div class=tsqd-query-disabled-indicator>disabled"), Gi = /* @__PURE__ */ T("<button><div></div><code class=tsqd-query-hash>"), bd = /* @__PURE__ */ T("<div role=tooltip id=tsqd-status-tooltip>"), xd = /* @__PURE__ */ T("<span>"), $d = /* @__PURE__ */ T("<button><span></span><span>"), pd = /* @__PURE__ */ T("<button><span></span> Error"), wd = /* @__PURE__ */ T('<div><span></span>Trigger Error<select><option value=""disabled selected>'), Cd = /* @__PURE__ */ T('<div><div>Query Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span></span></div><div class=tsqd-query-details-observers-count><span>Observers:</span><span></span></div><div class=tsqd-query-details-last-updated><span>Last Updated:</span><span></span></div></div><div>Actions</div><div><button><span></span>Refetch</button><button><span></span>Invalidate</button><button><span></span>Reset</button><button><span></span>Remove</button><button><span></span> Loading</button></div><div>Data Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-data-explorer"></div><div>Query Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">'), Sd = /* @__PURE__ */ T("<option>"), kd = /* @__PURE__ */ T('<div><div>Mutation Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span></span></div><div class=tsqd-query-details-last-updated><span>Submitted At:</span><span></span></div></div><div>Variables Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Context Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Data Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Mutations Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">'), Ed = 1024, Fn = 796, Vi = 700, _d = "bottom-right", or = "bottom", Ad = "system", Fd = !1, ji = 500, Hi = 500, Dd = Object.keys(Vn)[0], Mo = 1, Id = Object.keys(jn)[0], [_e, Tn] = z(null), [ct, Qi] = z(null), [mt, Ld] = z(0), Od = (e) => {
  const [t, n] = Ks({
    prefix: "TanstackQueryDevtools"
  }), r = Ji(), o = D(() => {
    const s = t.theme_preference || Ad;
    return s !== "system" ? s : r();
  });
  return v(Ri.Provider, {
    value: e,
    get children() {
      return v(Ni.Provider, {
        value: o,
        get children() {
          return v(qd, {
            localStore: t,
            setLocalStore: n
          });
        }
      });
    }
  });
}, Qd = Od, qd = (e) => {
  Ju();
  const t = xe(), n = D(() => t() === "dark" ? Ge : Ue), r = D(() => fe().buttonPosition || _d), o = D(() => e.localStore.open === "true" ? !0 : e.localStore.open === "false" ? !1 : fe().initialIsOpen || Fd), s = D(() => e.localStore.position || fe().position || or);
  let l;
  return U(() => {
    const i = l.parentElement, a = e.localStore.height || ji, c = e.localStore.width || Hi, h = s();
    i.style.setProperty("--tsqd-panel-height", `${h === "top" ? "-" : ""}${a}px`), i.style.setProperty("--tsqd-panel-width", `${h === "left" ? "-" : ""}${c}px`);
  }), It(() => {
    const i = () => {
      const a = l.parentElement, c = getComputedStyle(a).fontSize;
      a.style.setProperty("--tsqd-font-size", c);
    };
    i(), window.addEventListener("focus", i), V(() => {
      window.removeEventListener("focus", i);
    });
  }), (() => {
    const i = wr(), a = l;
    return typeof a == "function" ? tn(a, i) : l = i, E(i, v(Yr, {
      name: "tsqd-panel-transition",
      get children() {
        return v(R, {
          get when() {
            return o();
          },
          get children() {
            return v(Md, {
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
    }), null), E(i, v(Yr, {
      name: "tsqd-button-transition",
      get children() {
        return v(R, {
          get when() {
            return !o();
          },
          get children() {
            const c = ed(), h = c.firstChild, f = h.nextSibling;
            return E(h, v(Ao, {})), f.$$click = () => e.setLocalStore("open", "true"), E(f, v(Ao, {})), G(() => I(c, O(n().devtoolsBtn, n()[`devtoolsBtn-position-${r()}`]))), c;
          }
        });
      }
    }), null), G(() => I(i, O(_`
          & .tsqd-panel-transition-exit-active,
          & .tsqd-panel-transition-enter-active {
            transition:
              opacity 0.3s,
              transform 0.3s;
          }

          & .tsqd-panel-transition-exit-to,
          & .tsqd-panel-transition-enter {
            ${s() === "top" || s() === "bottom" ? "transform: translateY(var(--tsqd-panel-height));" : "transform: translateX(var(--tsqd-panel-width));"}
          }

          & .tsqd-button-transition-exit-active,
          & .tsqd-button-transition-enter-active {
            transition:
              opacity 0.3s,
              transform 0.3s;
          }

          & .tsqd-button-transition-exit-to,
          & .tsqd-button-transition-enter {
            transform: ${r() === "top-left" ? "translateX(-72px);" : r() === "top-right" ? "translateX(72px);" : "translateY(72px);"};
          }
        `, "tsqd-transitions-container"))), i;
  })();
}, Md = (e) => {
  const t = xe(), n = D(() => t() === "dark" ? Ge : Ue), [r, o] = z(!1), s = D(() => e.localStore.position || fe().position || or), l = (c) => {
    const h = c.currentTarget.parentElement;
    if (!h)
      return;
    o(!0);
    const {
      height: f,
      width: d
    } = h.getBoundingClientRect(), g = c.clientX, u = c.clientY;
    let y = 0;
    const m = Rr(3.5), $ = Rr(12), x = (w) => {
      if (w.preventDefault(), s() === "left" || s() === "right") {
        const p = s() === "right" ? g - w.clientX : w.clientX - g;
        y = Math.round(d + p), y < $ && (y = $), e.setLocalStore("width", String(Math.round(y)));
        const L = h.getBoundingClientRect().width;
        Number(e.localStore.width) < L && e.setLocalStore("width", String(L));
      } else {
        const p = s() === "bottom" ? u - w.clientY : w.clientY - u;
        y = Math.round(f + p), y < m && (y = m, Tn(null)), e.setLocalStore("height", String(Math.round(y)));
      }
    }, b = () => {
      r() && o(!1), document.removeEventListener("mousemove", x, !1), document.removeEventListener("mouseUp", b, !1);
    };
    document.addEventListener("mousemove", x, !1), document.addEventListener("mouseup", b, !1);
  };
  let i;
  It(() => {
    Gs(i, ({
      width: c
    }, h) => {
      h === i && Ld(c);
    });
  }), U(() => {
    var u, y;
    const c = (y = (u = i.parentElement) == null ? void 0 : u.parentElement) == null ? void 0 : y.parentElement;
    if (!c)
      return;
    const h = e.localStore.position || or, f = rs("padding", h), d = e.localStore.position === "left" || e.localStore.position === "right", g = (({
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
    c.style[f] = `${d ? e.localStore.width : e.localStore.height}px`, V(() => {
      Object.entries(g).forEach(([m, $]) => {
        c.style[m] = $;
      });
    });
  });
  const a = () => {
    const {
      colors: c
    } = k, h = (f, d) => t() === "dark" ? d : f;
    return mt() < Fn ? _`
        flex-direction: column;
        background-color: ${h(c.gray[300], c.gray[600])};
      ` : _`
      flex-direction: row;
      background-color: ${h(c.gray[200], c.darkGray[900])};
    `;
  };
  return (() => {
    const c = td(), h = c.firstChild, f = h.nextSibling, d = i;
    return typeof d == "function" ? tn(d, c) : i = c, h.$$mousedown = l, f.$$click = () => e.setLocalStore("open", "false"), E(f, v(Wt, {})), E(c, v(Td, {
      get localStore() {
        return e.localStore;
      },
      get setLocalStore() {
        return e.setLocalStore;
      }
    }), null), G((g) => {
      const u = O(n().panel, n()[`panel-position-${s()}`], a(), {
        [_`
            min-width: min-content;
          `]: mt() < Vi && (s() === "right" || s() === "left")
      }, "tsqd-main-panel"), y = s() === "bottom" || s() === "top" ? `${e.localStore.height || ji}px` : "auto", m = s() === "right" || s() === "left" ? `${e.localStore.width || Hi}px` : "auto", $ = O(n().dragHandle, n()[`dragHandle-position-${s()}`], "tsqd-drag-handle"), x = O(n().closeBtn, n()[`closeBtn-position-${s()}`], "tsqd-minimize-btn");
      return u !== g._v$ && I(c, g._v$ = u), y !== g._v$2 && ((g._v$2 = y) != null ? c.style.setProperty("height", y) : c.style.removeProperty("height")), m !== g._v$3 && ((g._v$3 = m) != null ? c.style.setProperty("width", m) : c.style.removeProperty("width")), $ !== g._v$4 && I(h, g._v$4 = $), x !== g._v$5 && I(f, g._v$5 = x), g;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0,
      _v$4: void 0,
      _v$5: void 0
    }), c;
  })();
}, Td = (e) => {
  Ud(), Gd();
  let t;
  const n = xe(), r = D(() => n() === "dark" ? Ge : Ue), [o, s] = z("queries"), l = D(() => e.localStore.sort || Dd), i = D(() => Number(e.localStore.sortOrder) || Mo), a = D(() => e.localStore.mutationSort || Id), c = D(() => Number(e.localStore.mutationSortOrder) || Mo), [h, f] = z(!1), d = D(() => Vn[l()]), g = D(() => jn[a()]), u = D(() => fe().onlineManager), y = D(() => fe().client.getQueryCache()), m = D(() => fe().client.getMutationCache()), $ = he((q) => q().getAll().length, !1), x = D(ze(() => [$(), e.localStore.filter, l(), i()], () => {
    const q = y().getAll(), A = e.localStore.filter ? q.filter((K) => Ur(K.queryHash, e.localStore.filter || "").passed) : [...q];
    return d() ? A.sort((K, B) => d()(K, B) * i()) : A;
  })), b = Pe((q) => q().getAll().length, !1), w = D(ze(() => [b(), e.localStore.mutationFilter, a(), c()], () => {
    const q = m().getAll(), A = e.localStore.mutationFilter ? q.filter((K) => {
      const B = `${K.options.mutationKey ? JSON.stringify(K.options.mutationKey) + " - " : ""}${new Date(K.state.submittedAt).toLocaleString()}`;
      return Ur(B, e.localStore.mutationFilter || "").passed;
    }) : [...q];
    return g() ? A.sort((K, B) => g()(K, B) * c()) : A;
  })), p = (q) => {
    e.setLocalStore("position", q);
  }, L = (q) => {
    const N = getComputedStyle(t).getPropertyValue("--tsqd-font-size");
    q.style.setProperty("--tsqd-font-size", N);
  };
  return [(() => {
    const q = vd(), A = q.firstChild, N = A.firstChild, K = N.firstChild, B = K.firstChild, Y = B.nextSibling, se = Y.firstChild, P = A.nextSibling, H = P.firstChild, X = H.firstChild, ee = X.firstChild, ne = X.nextSibling, ae = ne.nextSibling, we = H.nextSibling, ce = we.firstChild, ye = ce.nextSibling, ve = t;
    return typeof ve == "function" ? tn(ve, q) : t = q, K.$$click = () => e.setLocalStore("open", "false"), E(Y, () => fe().queryFlavor, se), E(Y, () => fe().version, null), E(N, v(Te.Root, {
      get class() {
        return O(r().viewToggle);
      },
      get value() {
        return o();
      },
      onChange: (S) => {
        s(S), Tn(null), Qi(null);
      },
      get children() {
        return [v(Te.Item, {
          value: "queries",
          class: "tsqd-radio-toggle",
          get children() {
            return [v(Te.ItemInput, {}), v(Te.ItemControl, {
              get children() {
                return v(Te.ItemIndicator, {});
              }
            }), v(Te.ItemLabel, {
              title: "Toggle Queries View",
              children: "Queries"
            })];
          }
        }), v(Te.Item, {
          value: "mutations",
          class: "tsqd-radio-toggle",
          get children() {
            return [v(Te.ItemInput, {}), v(Te.ItemControl, {
              get children() {
                return v(Te.ItemIndicator, {});
              }
            }), v(Te.ItemLabel, {
              title: "Toggle Mutations View",
              children: "Mutations"
            })];
          }
        })];
      }
    }), null), E(A, v(R, {
      get when() {
        return o() === "queries";
      },
      get children() {
        return v(Kd, {});
      }
    }), null), E(A, v(R, {
      get when() {
        return o() === "mutations";
      },
      get children() {
        return v(Bd, {});
      }
    }), null), E(X, v(wu, {}), ee), ee.$$input = (S) => {
      o() === "queries" ? e.setLocalStore("filter", S.currentTarget.value) : e.setLocalStore("mutationFilter", S.currentTarget.value);
    }, E(ne, v(R, {
      get when() {
        return o() === "queries";
      },
      get children() {
        const S = Oo();
        return S.addEventListener("change", (Q) => {
          e.setLocalStore("sort", Q.currentTarget.value);
        }), E(S, () => Object.keys(Vn).map((Q) => (() => {
          const Z = qo();
          return Z.firstChild, Z.value = Q, E(Z, Q, null), Z;
        })())), G(() => S.value = l()), S;
      }
    }), null), E(ne, v(R, {
      get when() {
        return o() === "mutations";
      },
      get children() {
        const S = Oo();
        return S.addEventListener("change", (Q) => {
          e.setLocalStore("mutationSort", Q.currentTarget.value);
        }), E(S, () => Object.keys(jn).map((Q) => (() => {
          const Z = qo();
          return Z.firstChild, Z.value = Q, E(Z, Q, null), Z;
        })())), G(() => S.value = a()), S;
      }
    }), null), E(ne, v(Wt, {}), null), ae.$$click = () => {
      o() === "queries" ? e.setLocalStore("sortOrder", String(i() * -1)) : e.setLocalStore("mutationSortOrder", String(c() * -1));
    }, E(ae, v(R, {
      get when() {
        return (o() === "queries" ? i() : c()) === 1;
      },
      get children() {
        return [nd(), v(Eo, {})];
      }
    }), null), E(ae, v(R, {
      get when() {
        return (o() === "queries" ? i() : c()) === -1;
      },
      get children() {
        return [rd(), v(_o, {})];
      }
    }), null), ce.$$click = () => {
      o() === "queries" ? y().clear() : m().clear();
    }, E(ce, v(Bi, {})), ye.$$click = () => {
      h() ? (u().setOnline(!0), f(!1)) : (u().setOnline(!1), f(!0));
    }, E(ye, (() => {
      const S = D(() => !!h());
      return () => S() ? v(Fu, {}) : v(Au, {});
    })()), E(we, v(de.Root, {
      gutter: 4,
      get children() {
        return [v(de.Trigger, {
          get class() {
            return O(r().actionsBtn, "tsqd-actions-btn", "tsqd-action-settings");
          },
          get children() {
            return v(Du, {});
          }
        }), v(de.Portal, {
          ref: (S) => L(S),
          get children() {
            return v(de.Content, {
              get class() {
                return O(r().settingsMenu, "tsqd-settings-menu");
              },
              get children() {
                return [(() => {
                  const S = od();
                  return G(() => I(S, O(r().settingsMenuHeader, "tsqd-settings-menu-header"))), S;
                })(), v(de.Sub, {
                  overlap: !0,
                  gutter: 8,
                  shift: -4,
                  get children() {
                    return [v(de.SubTrigger, {
                      get class() {
                        return O(r().settingsSubTrigger, "tsqd-settings-menu-sub-trigger", "tsqd-settings-menu-sub-trigger-position");
                      },
                      get children() {
                        return [id(), v(Wt, {})];
                      }
                    }), v(de.Portal, {
                      ref: (S) => L(S),
                      get children() {
                        return v(de.SubContent, {
                          get class() {
                            return O(r().settingsMenu, "tsqd-settings-submenu");
                          },
                          get children() {
                            return [v(de.Item, {
                              onSelect: () => {
                                p("top");
                              },
                              as: "button",
                              get class() {
                                return O(r().settingsSubButton, "tsqd-settings-menu-position-btn", "tsqd-settings-menu-position-btn-top");
                              },
                              get children() {
                                return [sd(), v(Eo, {})];
                              }
                            }), v(de.Item, {
                              onSelect: () => {
                                p("bottom");
                              },
                              as: "button",
                              get class() {
                                return O(r().settingsSubButton, "tsqd-settings-menu-position-btn", "tsqd-settings-menu-position-btn-bottom");
                              },
                              get children() {
                                return [ld(), v(_o, {})];
                              }
                            }), v(de.Item, {
                              onSelect: () => {
                                p("left");
                              },
                              as: "button",
                              get class() {
                                return O(r().settingsSubButton, "tsqd-settings-menu-position-btn", "tsqd-settings-menu-position-btn-left");
                              },
                              get children() {
                                return [ad(), v(Cu, {})];
                              }
                            }), v(de.Item, {
                              onSelect: () => {
                                p("right");
                              },
                              as: "button",
                              get class() {
                                return O(r().settingsSubButton, "tsqd-settings-menu-position-btn", "tsqd-settings-menu-position-btn-right");
                              },
                              get children() {
                                return [cd(), v(Su, {})];
                              }
                            })];
                          }
                        });
                      }
                    })];
                  }
                }), v(de.Sub, {
                  overlap: !0,
                  gutter: 8,
                  shift: -4,
                  get children() {
                    return [v(de.SubTrigger, {
                      get class() {
                        return O(r().settingsSubTrigger, "tsqd-settings-menu-sub-trigger", "tsqd-settings-menu-sub-trigger-position");
                      },
                      get children() {
                        return [ud(), v(Wt, {})];
                      }
                    }), v(de.Portal, {
                      ref: (S) => L(S),
                      get children() {
                        return v(de.SubContent, {
                          get class() {
                            return O(r().settingsMenu, "tsqd-settings-submenu");
                          },
                          get children() {
                            return [v(de.Item, {
                              onSelect: () => {
                                e.setLocalStore("theme_preference", "light");
                              },
                              as: "button",
                              get class() {
                                return O(r().settingsSubButton, e.localStore.theme_preference === "light" && r().themeSelectedButton, "tsqd-settings-menu-position-btn", "tsqd-settings-menu-position-btn-top");
                              },
                              get children() {
                                return [dd(), v(ku, {})];
                              }
                            }), v(de.Item, {
                              onSelect: () => {
                                e.setLocalStore("theme_preference", "dark");
                              },
                              as: "button",
                              get class() {
                                return O(r().settingsSubButton, e.localStore.theme_preference === "dark" && r().themeSelectedButton, "tsqd-settings-menu-position-btn", "tsqd-settings-menu-position-btn-bottom");
                              },
                              get children() {
                                return [fd(), v(Eu, {})];
                              }
                            }), v(de.Item, {
                              onSelect: () => {
                                e.setLocalStore("theme_preference", "system");
                              },
                              as: "button",
                              get class() {
                                return O(r().settingsSubButton, e.localStore.theme_preference === "system" && r().themeSelectedButton, "tsqd-settings-menu-position-btn", "tsqd-settings-menu-position-btn-left");
                              },
                              get children() {
                                return [gd(), v(_u, {})];
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
    }), null), E(q, v(R, {
      get when() {
        return o() === "queries";
      },
      get children() {
        const S = hd(), Q = S.firstChild;
        return E(Q, v(pn, {
          by: (Z) => Z.queryHash,
          get each() {
            return x();
          },
          children: (Z) => v(Pd, {
            get query() {
              return Z();
            }
          })
        })), G(() => I(S, O(r().overflowQueryContainer, "tsqd-queries-overflow-container"))), S;
      }
    }), null), E(q, v(R, {
      get when() {
        return o() === "mutations";
      },
      get children() {
        const S = yd(), Q = S.firstChild;
        return E(Q, v(pn, {
          by: (Z) => Z.mutationId,
          get each() {
            return w();
          },
          children: (Z) => v(zd, {
            get mutation() {
              return Z();
            }
          })
        })), G(() => I(S, O(r().overflowQueryContainer, "tsqd-mutations-overflow-container"))), S;
      }
    }), null), G((S) => {
      const Q = O(r().queriesContainer, mt() < Fn && (_e() || ct()) && _`
              height: 50%;
              max-height: 50%;
            `, mt() < Fn && !(_e() || ct()) && _`
              height: 100%;
              max-height: 100%;
            `, "tsqd-queries-container"), Z = O(r().row, "tsqd-header"), Re = r().logoAndToggleContainer, ot = O(r().logo, "tsqd-text-logo-container"), $t = O(r().tanstackLogo, "tsqd-text-logo-tanstack"), Ve = O(r().queryFlavorLogo, "tsqd-text-logo-query-flavor"), je = O(r().row, "tsqd-filters-actions-container"), He = O(r().filtersContainer, "tsqd-filters-container"), Qe = O(r().filterInput, "tsqd-query-filter-textfield-container"), M = O(r().filterSelect, "tsqd-query-filter-sort-container"), ue = `Sort order ${(o() === "queries" ? i() : c()) === -1 ? "descending" : "ascending"}`, $e = (o() === "queries" ? i() : c()) === -1, oe = O(r().actionsContainer, "tsqd-actions-container"), te = O(r().actionsBtn, "tsqd-actions-btn", "tsqd-action-clear-cache"), le = `Clear ${o()} cache`, me = O(r().actionsBtn, h() && r().actionsBtnOffline, "tsqd-actions-btn", "tsqd-action-mock-offline-behavior"), Me = `${h() ? "Unset offline mocking behavior" : "Mock offline behavior"}`, it = h(), st = `${h() ? "Unset offline mocking behavior" : "Mock offline behavior"}`;
      return Q !== S._v$6 && I(q, S._v$6 = Q), Z !== S._v$7 && I(A, S._v$7 = Z), Re !== S._v$8 && I(N, S._v$8 = Re), ot !== S._v$9 && I(K, S._v$9 = ot), $t !== S._v$10 && I(B, S._v$10 = $t), Ve !== S._v$11 && I(Y, S._v$11 = Ve), je !== S._v$12 && I(P, S._v$12 = je), He !== S._v$13 && I(H, S._v$13 = He), Qe !== S._v$14 && I(X, S._v$14 = Qe), M !== S._v$15 && I(ne, S._v$15 = M), ue !== S._v$16 && F(ae, "aria-label", S._v$16 = ue), $e !== S._v$17 && F(ae, "aria-pressed", S._v$17 = $e), oe !== S._v$18 && I(we, S._v$18 = oe), te !== S._v$19 && I(ce, S._v$19 = te), le !== S._v$20 && F(ce, "title", S._v$20 = le), me !== S._v$21 && I(ye, S._v$21 = me), Me !== S._v$22 && F(ye, "aria-label", S._v$22 = Me), it !== S._v$23 && F(ye, "aria-pressed", S._v$23 = it), st !== S._v$24 && F(ye, "title", S._v$24 = st), S;
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
      _v$24: void 0
    }), G(() => ee.value = o() === "queries" ? e.localStore.filter || "" : e.localStore.mutationFilter || ""), q;
  })(), v(R, {
    get when() {
      return D(() => o() === "queries")() && _e();
    },
    get children() {
      return v(Rd, {});
    }
  }), v(R, {
    get when() {
      return D(() => o() === "mutations")() && ct();
    },
    get children() {
      return v(Nd, {});
    }
  })];
}, Pd = (e) => {
  const t = xe(), n = D(() => t() === "dark" ? Ge : Ue), {
    colors: r,
    alpha: o
  } = k, s = (d, g) => t() === "dark" ? g : d, l = he((d) => {
    var g;
    return (g = d().find({
      queryKey: e.query.queryKey
    })) == null ? void 0 : g.state;
  }, !0, (d) => d.query.queryHash === e.query.queryHash), i = he((d) => {
    var g;
    return ((g = d().find({
      queryKey: e.query.queryKey
    })) == null ? void 0 : g.isDisabled()) ?? !1;
  }, !0, (d) => d.query.queryHash === e.query.queryHash), a = he((d) => {
    var g;
    return ((g = d().find({
      queryKey: e.query.queryKey
    })) == null ? void 0 : g.isStale()) ?? !1;
  }, !0, (d) => d.query.queryHash === e.query.queryHash), c = he((d) => {
    var g;
    return ((g = d().find({
      queryKey: e.query.queryKey
    })) == null ? void 0 : g.getObserversCount()) ?? 0;
  }, !0, (d) => d.query.queryHash === e.query.queryHash), h = D(() => es({
    queryState: l(),
    observerCount: c(),
    isStale: a()
  })), f = () => h() === "gray" ? _`
        background-color: ${s(r[h()][200], r[h()][700])};
        color: ${s(r[h()][700], r[h()][300])};
      ` : _`
      background-color: ${s(r[h()][200] + o[80], r[h()][900])};
      color: ${s(r[h()][800], r[h()][300])};
    `;
  return v(R, {
    get when() {
      return l();
    },
    get children() {
      const d = Gi(), g = d.firstChild, u = g.nextSibling;
      return d.$$click = () => Tn(e.query.queryHash === _e() ? null : e.query.queryHash), E(g, c), E(u, () => e.query.queryHash), E(d, v(R, {
        get when() {
          return i();
        },
        get children() {
          return md();
        }
      }), null), G((y) => {
        const m = O(n().queryRow, _e() === e.query.queryHash && n().selectedQueryRow, "tsqd-query-row"), $ = `Query key ${e.query.queryHash}`, x = O(f(), "tsqd-query-observer-count");
        return m !== y._v$25 && I(d, y._v$25 = m), $ !== y._v$26 && F(d, "aria-label", y._v$26 = $), x !== y._v$27 && I(g, y._v$27 = x), y;
      }, {
        _v$25: void 0,
        _v$26: void 0,
        _v$27: void 0
      }), d;
    }
  });
}, zd = (e) => {
  const t = xe(), n = D(() => t() === "dark" ? Ge : Ue), {
    colors: r,
    alpha: o
  } = k, s = (f, d) => t() === "dark" ? d : f, l = Pe((f) => {
    const g = f().getAll().find((u) => u.mutationId === e.mutation.mutationId);
    return g == null ? void 0 : g.state;
  }), i = Pe((f) => {
    const g = f().getAll().find((u) => u.mutationId === e.mutation.mutationId);
    return g ? g.state.isPaused : !1;
  }), a = Pe((f) => {
    const g = f().getAll().find((u) => u.mutationId === e.mutation.mutationId);
    return g ? g.state.status : "idle";
  }), c = D(() => _t({
    isPaused: i(),
    status: a()
  })), h = () => c() === "gray" ? _`
        background-color: ${s(r[c()][200], r[c()][700])};
        color: ${s(r[c()][700], r[c()][300])};
      ` : _`
      background-color: ${s(r[c()][200] + o[80], r[c()][900])};
      color: ${s(r[c()][800], r[c()][300])};
    `;
  return v(R, {
    get when() {
      return l();
    },
    get children() {
      const f = Gi(), d = f.firstChild, g = d.nextSibling;
      return f.$$click = () => {
        Qi(e.mutation.mutationId === ct() ? null : e.mutation.mutationId);
      }, E(d, v(R, {
        get when() {
          return c() === "purple";
        },
        get children() {
          return v(Ku, {});
        }
      }), null), E(d, v(R, {
        get when() {
          return c() === "green";
        },
        get children() {
          return v(Tu, {});
        }
      }), null), E(d, v(R, {
        get when() {
          return c() === "red";
        },
        get children() {
          return v(zu, {});
        }
      }), null), E(d, v(R, {
        get when() {
          return c() === "yellow";
        },
        get children() {
          return v(Pu, {});
        }
      }), null), E(g, v(R, {
        get when() {
          return e.mutation.options.mutationKey;
        },
        get children() {
          return [D(() => JSON.stringify(e.mutation.options.mutationKey)), " -", " "];
        }
      }), null), E(g, () => new Date(e.mutation.state.submittedAt).toLocaleString(), null), G((u) => {
        const y = O(n().queryRow, ct() === e.mutation.mutationId && n().selectedQueryRow, "tsqd-query-row"), m = `Mutation submitted at ${new Date(e.mutation.state.submittedAt).toLocaleString()}`, $ = O(h(), "tsqd-query-observer-count");
        return y !== u._v$28 && I(f, u._v$28 = y), m !== u._v$29 && F(f, "aria-label", u._v$29 = m), $ !== u._v$30 && I(d, u._v$30 = $), u;
      }, {
        _v$28: void 0,
        _v$29: void 0,
        _v$30: void 0
      }), f;
    }
  });
}, Kd = () => {
  const e = he((i) => i().getAll().filter((a) => St(a) === "stale").length), t = he((i) => i().getAll().filter((a) => St(a) === "fresh").length), n = he((i) => i().getAll().filter((a) => St(a) === "fetching").length), r = he((i) => i().getAll().filter((a) => St(a) === "paused").length), o = he((i) => i().getAll().filter((a) => St(a) === "inactive").length), s = xe(), l = D(() => s() === "dark" ? Ge : Ue);
  return (() => {
    const i = wr();
    return E(i, v(Ze, {
      label: "Fresh",
      color: "green",
      get count() {
        return t();
      }
    }), null), E(i, v(Ze, {
      label: "Fetching",
      color: "blue",
      get count() {
        return n();
      }
    }), null), E(i, v(Ze, {
      label: "Paused",
      color: "purple",
      get count() {
        return r();
      }
    }), null), E(i, v(Ze, {
      label: "Stale",
      color: "yellow",
      get count() {
        return e();
      }
    }), null), E(i, v(Ze, {
      label: "Inactive",
      color: "gray",
      get count() {
        return o();
      }
    }), null), G(() => I(i, O(l().queryStatusContainer, "tsqd-query-status-container"))), i;
  })();
}, Bd = () => {
  const e = Pe((l) => l().getAll().filter((i) => _t({
    isPaused: i.state.isPaused,
    status: i.state.status
  }) === "green").length), t = Pe((l) => l().getAll().filter((i) => _t({
    isPaused: i.state.isPaused,
    status: i.state.status
  }) === "yellow").length), n = Pe((l) => l().getAll().filter((i) => _t({
    isPaused: i.state.isPaused,
    status: i.state.status
  }) === "purple").length), r = Pe((l) => l().getAll().filter((i) => _t({
    isPaused: i.state.isPaused,
    status: i.state.status
  }) === "red").length), o = xe(), s = D(() => o() === "dark" ? Ge : Ue);
  return (() => {
    const l = wr();
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
    }), null), G(() => I(l, O(s().queryStatusContainer, "tsqd-query-status-container"))), l;
  })();
}, Ze = (e) => {
  const t = xe(), n = D(() => t() === "dark" ? Ge : Ue), {
    colors: r,
    alpha: o
  } = k, s = (d, g) => t() === "dark" ? g : d;
  let l;
  const [i, a] = z(!1), [c, h] = z(!1), f = D(() => !(_e() && mt() < Ed && mt() > Fn || mt() < Vi));
  return (() => {
    const d = $d(), g = d.firstChild, u = g.nextSibling, y = l;
    return typeof y == "function" ? tn(y, d) : l = d, d.addEventListener("mouseleave", () => {
      a(!1), h(!1);
    }), d.addEventListener("mouseenter", () => a(!0)), d.addEventListener("blur", () => h(!1)), d.addEventListener("focus", () => h(!0)), ir(d, j({
      get disabled() {
        return f();
      },
      get class() {
        return O(n().queryStatusTag, !f() && _`
            cursor: pointer;
            &:hover {
              background: ${s(r.gray[200], r.darkGray[400])}${o[80]};
            }
          `, "tsqd-query-status-tag", `tsqd-query-status-tag-${e.label.toLowerCase()}`);
      }
    }, () => i() || c() ? {
      "aria-describedby": "tsqd-status-tooltip"
    } : {}), !1, !0), E(d, v(R, {
      get when() {
        return D(() => !f())() && (i() || c());
      },
      get children() {
        const m = bd();
        return E(m, () => e.label), G(() => I(m, O(n().statusTooltip, "tsqd-query-status-tooltip"))), m;
      }
    }), g), E(d, v(R, {
      get when() {
        return f();
      },
      get children() {
        const m = xd();
        return E(m, () => e.label), G(() => I(m, O(n().queryStatusTagLabel, "tsqd-query-status-tag-label"))), m;
      }
    }), u), E(u, () => e.count), G((m) => {
      const $ = O(_`
            width: ${k.size[1.5]};
            height: ${k.size[1.5]};
            border-radius: ${k.border.radius.full};
            background-color: ${k.colors[e.color][500]};
          `, "tsqd-query-status-tag-dot"), x = O(n().queryStatusCount, e.count > 0 && e.color !== "gray" && _`
              background-color: ${s(r[e.color][100], r[e.color][900])};
              color: ${s(r[e.color][700], r[e.color][300])};
            `, "tsqd-query-status-tag-count");
      return $ !== m._v$31 && I(g, m._v$31 = $), x !== m._v$32 && I(u, m._v$32 = x), m;
    }, {
      _v$31: void 0,
      _v$32: void 0
    }), d;
  })();
}, Rd = () => {
  const e = xe(), t = D(() => e() === "dark" ? Ge : Ue), {
    colors: n
  } = k, r = (w, p) => e() === "dark" ? p : w, o = fe().client, [s, l] = z(!1), i = D(() => fe().errorTypes || []), a = he((w) => w().getAll().find((p) => p.queryHash === _e()), !1), c = he((w) => w().getAll().find((p) => p.queryHash === _e()), !1), h = he((w) => {
    var p;
    return (p = w().getAll().find((L) => L.queryHash === _e())) == null ? void 0 : p.state;
  }, !1), f = he((w) => {
    var p;
    return (p = w().getAll().find((L) => L.queryHash === _e())) == null ? void 0 : p.state.data;
  }, !1), d = he((w) => {
    const p = w().getAll().find((L) => L.queryHash === _e());
    return p ? St(p) : "inactive";
  }), g = he((w) => {
    const p = w().getAll().find((L) => L.queryHash === _e());
    return p ? p.state.status : "pending";
  }), u = he((w) => {
    var p;
    return ((p = w().getAll().find((L) => L.queryHash === _e())) == null ? void 0 : p.getObserversCount()) ?? 0;
  }), y = D(() => ts(d())), m = () => {
    var p;
    const w = (p = a()) == null ? void 0 : p.fetch();
    w == null || w.catch(() => {
    });
  }, $ = (w) => {
    const p = (w == null ? void 0 : w.initializer(a())) ?? new Error("Unknown error from devtools"), L = a().options;
    a().setState({
      status: "error",
      error: p,
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      fetchMeta: {
        ...a().state.fetchMeta,
        __previousQueryOptions: L
      }
    });
  }, x = () => {
    var w, p;
    (p = a()) == null || p.fetch(((w = a()) == null ? void 0 : w.state.fetchMeta).__previousQueryOptions, {
      // Make sure this fetch will cancel the previous one
      cancelRefetch: !0
    });
  };
  U(() => {
    d() !== "fetching" && l(!1);
  });
  const b = () => y() === "gray" ? _`
        background-color: ${r(n[y()][200], n[y()][700])};
        color: ${r(n[y()][700], n[y()][300])};
        border-color: ${r(n[y()][400], n[y()][600])};
      ` : _`
      background-color: ${r(n[y()][100], n[y()][900])};
      color: ${r(n[y()][700], n[y()][300])};
      border-color: ${r(n[y()][400], n[y()][600])};
    `;
  return v(R, {
    get when() {
      return D(() => !!a())() && h();
    },
    get children() {
      const w = Cd(), p = w.firstChild, L = p.nextSibling, q = L.firstChild, A = q.firstChild, N = A.firstChild, K = A.nextSibling, B = q.nextSibling, Y = B.firstChild, se = Y.nextSibling, P = B.nextSibling, H = P.firstChild, X = H.nextSibling, ee = L.nextSibling, ne = ee.nextSibling, ae = ne.firstChild, we = ae.firstChild, ce = ae.nextSibling, ye = ce.firstChild, ve = ce.nextSibling, S = ve.firstChild, Q = ve.nextSibling, Z = Q.firstChild, Re = Q.nextSibling, ot = Re.firstChild, $t = ot.nextSibling, Ve = ne.nextSibling, je = Ve.nextSibling, He = je.nextSibling, Qe = He.nextSibling;
      return E(N, () => xn(a().queryKey, !0)), E(K, d), E(se, u), E(X, () => new Date(h().dataUpdatedAt).toLocaleTimeString()), ae.$$click = m, ce.$$click = () => o.invalidateQueries(a()), ve.$$click = () => o.resetQueries(a()), Q.$$click = () => {
        o.removeQueries(a()), Tn(null);
      }, Re.$$click = () => {
        var M;
        if (((M = a()) == null ? void 0 : M.state.data) === void 0)
          l(!0), x();
        else {
          const ue = a();
          if (!ue)
            return;
          const $e = ue.options;
          ue.fetch({
            ...$e,
            queryFn: () => new Promise(() => {
            }),
            gcTime: -1
          }), ue.setState({
            data: void 0,
            status: "pending",
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
            fetchMeta: {
              ...ue.state.fetchMeta,
              __previousQueryOptions: $e
            }
          });
        }
      }, E(Re, () => g() === "pending" ? "Restore" : "Trigger", $t), E(ne, v(R, {
        get when() {
          return i().length === 0 || g() === "error";
        },
        get children() {
          const M = pd(), ue = M.firstChild, $e = ue.nextSibling;
          return M.$$click = () => {
            a().state.error ? o.resetQueries(a()) : $();
          }, E(M, () => g() === "error" ? "Restore" : "Trigger", $e), G((oe) => {
            const te = O(_`
                  color: ${r(n.red[500], n.red[400])};
                `, "tsqd-query-details-actions-btn", "tsqd-query-details-action-error"), le = g() === "pending", me = _`
                  background-color: ${r(n.red[500], n.red[400])};
                `;
            return te !== oe._v$33 && I(M, oe._v$33 = te), le !== oe._v$34 && (M.disabled = oe._v$34 = le), me !== oe._v$35 && I(ue, oe._v$35 = me), oe;
          }, {
            _v$33: void 0,
            _v$34: void 0,
            _v$35: void 0
          }), M;
        }
      }), null), E(ne, v(R, {
        get when() {
          return !(i().length === 0 || g() === "error");
        },
        get children() {
          const M = wd(), ue = M.firstChild, $e = ue.nextSibling, oe = $e.nextSibling;
          return oe.firstChild, oe.addEventListener("change", (te) => {
            const le = i().find((me) => me.name === te.currentTarget.value);
            $(le);
          }), E(oe, v(To, {
            get each() {
              return i();
            },
            children: (te) => (() => {
              const le = Sd();
              return E(le, () => te.name), G(() => le.value = te.name), le;
            })()
          }), null), E(M, v(Wt, {}), null), G((te) => {
            const le = O(t().actionsSelect, "tsqd-query-details-actions-btn", "tsqd-query-details-action-error-multiple"), me = _`
                  background-color: ${k.colors.red[400]};
                `, Me = g() === "pending";
            return le !== te._v$36 && I(M, te._v$36 = le), me !== te._v$37 && I(ue, te._v$37 = me), Me !== te._v$38 && (oe.disabled = te._v$38 = Me), te;
          }, {
            _v$36: void 0,
            _v$37: void 0,
            _v$38: void 0
          }), M;
        }
      }), null), E(je, v(at, {
        label: "Data",
        defaultExpanded: ["Data"],
        get value() {
          return f();
        },
        editable: !0,
        get activeQuery() {
          return a();
        }
      })), E(Qe, v(at, {
        label: "Query",
        defaultExpanded: ["Query", "queryKey"],
        get value() {
          return c();
        }
      })), G((M) => {
        const ue = O(t().detailsContainer, "tsqd-query-details-container"), $e = O(t().detailsHeader, "tsqd-query-details-header"), oe = O(t().detailsBody, "tsqd-query-details-summary-container"), te = O(t().queryDetailsStatus, b()), le = O(t().detailsHeader, "tsqd-query-details-header"), me = O(t().actionsBody, "tsqd-query-details-actions-container"), Me = O(_`
                color: ${r(n.blue[600], n.blue[400])};
              `, "tsqd-query-details-actions-btn", "tsqd-query-details-action-refetch"), it = d() === "fetching", st = _`
                background-color: ${r(n.blue[600], n.blue[400])};
              `, Tt = O(_`
                color: ${r(n.yellow[600], n.yellow[400])};
              `, "tsqd-query-details-actions-btn", "tsqd-query-details-action-invalidate"), Pt = g() === "pending", zt = _`
                background-color: ${r(n.yellow[600], n.yellow[400])};
              `, cn = O(_`
                color: ${r(n.gray[600], n.gray[300])};
              `, "tsqd-query-details-actions-btn", "tsqd-query-details-action-reset"), Kt = g() === "pending", un = _`
                background-color: ${r(n.gray[600], n.gray[400])};
              `, pt = O(_`
                color: ${r(n.pink[500], n.pink[400])};
              `, "tsqd-query-details-actions-btn", "tsqd-query-details-action-remove"), dn = d() === "fetching", wt = _`
                background-color: ${r(n.pink[500], n.pink[400])};
              `, Bt = O(_`
                color: ${r(n.cyan[500], n.cyan[400])};
              `, "tsqd-query-details-actions-btn", "tsqd-query-details-action-loading"), fn = s(), Rt = _`
                background-color: ${r(n.cyan[500], n.cyan[400])};
              `, gn = O(t().detailsHeader, "tsqd-query-details-header"), yt = k.size[2], hn = O(t().detailsHeader, "tsqd-query-details-header"), Ct = k.size[2];
        return ue !== M._v$39 && I(w, M._v$39 = ue), $e !== M._v$40 && I(p, M._v$40 = $e), oe !== M._v$41 && I(L, M._v$41 = oe), te !== M._v$42 && I(K, M._v$42 = te), le !== M._v$43 && I(ee, M._v$43 = le), me !== M._v$44 && I(ne, M._v$44 = me), Me !== M._v$45 && I(ae, M._v$45 = Me), it !== M._v$46 && (ae.disabled = M._v$46 = it), st !== M._v$47 && I(we, M._v$47 = st), Tt !== M._v$48 && I(ce, M._v$48 = Tt), Pt !== M._v$49 && (ce.disabled = M._v$49 = Pt), zt !== M._v$50 && I(ye, M._v$50 = zt), cn !== M._v$51 && I(ve, M._v$51 = cn), Kt !== M._v$52 && (ve.disabled = M._v$52 = Kt), un !== M._v$53 && I(S, M._v$53 = un), pt !== M._v$54 && I(Q, M._v$54 = pt), dn !== M._v$55 && (Q.disabled = M._v$55 = dn), wt !== M._v$56 && I(Z, M._v$56 = wt), Bt !== M._v$57 && I(Re, M._v$57 = Bt), fn !== M._v$58 && (Re.disabled = M._v$58 = fn), Rt !== M._v$59 && I(ot, M._v$59 = Rt), gn !== M._v$60 && I(Ve, M._v$60 = gn), yt !== M._v$61 && ((M._v$61 = yt) != null ? je.style.setProperty("padding", yt) : je.style.removeProperty("padding")), hn !== M._v$62 && I(He, M._v$62 = hn), Ct !== M._v$63 && ((M._v$63 = Ct) != null ? Qe.style.setProperty("padding", Ct) : Qe.style.removeProperty("padding")), M;
      }, {
        _v$39: void 0,
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
        _v$63: void 0
      }), w;
    }
  });
}, Nd = () => {
  const e = xe(), t = D(() => e() === "dark" ? Ge : Ue), {
    colors: n
  } = k, r = (c, h) => e() === "dark" ? h : c, o = Pe((c) => {
    const f = c().getAll().find((d) => d.mutationId === ct());
    return f ? f.state.isPaused : !1;
  }), s = Pe((c) => {
    const f = c().getAll().find((d) => d.mutationId === ct());
    return f ? f.state.status : "idle";
  }), l = D(() => _t({
    isPaused: o(),
    status: s()
  })), i = Pe((c) => c().getAll().find((h) => h.mutationId === ct()), !1), a = () => l() === "gray" ? _`
        background-color: ${r(n[l()][200], n[l()][700])};
        color: ${r(n[l()][700], n[l()][300])};
        border-color: ${r(n[l()][400], n[l()][600])};
      ` : _`
      background-color: ${r(n[l()][100], n[l()][900])};
      color: ${r(n[l()][700], n[l()][300])};
      border-color: ${r(n[l()][400], n[l()][600])};
    `;
  return v(R, {
    get when() {
      return i();
    },
    get children() {
      const c = kd(), h = c.firstChild, f = h.nextSibling, d = f.firstChild, g = d.firstChild, u = g.firstChild, y = g.nextSibling, m = d.nextSibling, $ = m.firstChild, x = $.nextSibling, b = f.nextSibling, w = b.nextSibling, p = w.nextSibling, L = p.nextSibling, q = L.nextSibling, A = q.nextSibling, N = A.nextSibling, K = N.nextSibling;
      return E(u, v(R, {
        get when() {
          return i().options.mutationKey;
        },
        fallback: "No mutationKey found",
        get children() {
          return xn(i().options.mutationKey, !0);
        }
      })), E(y, v(R, {
        get when() {
          return l() === "purple";
        },
        children: "pending"
      }), null), E(y, v(R, {
        get when() {
          return l() !== "purple";
        },
        get children() {
          return s();
        }
      }), null), E(x, () => new Date(i().state.submittedAt).toLocaleTimeString()), E(w, v(at, {
        label: "Variables",
        defaultExpanded: ["Variables"],
        get value() {
          return i().state.variables;
        }
      })), E(L, v(at, {
        label: "Context",
        defaultExpanded: ["Context"],
        get value() {
          return i().state.context;
        }
      })), E(A, v(at, {
        label: "Data",
        defaultExpanded: ["Data"],
        get value() {
          return i().state.data;
        }
      })), E(K, v(at, {
        label: "Mutation",
        defaultExpanded: ["Mutation"],
        get value() {
          return i();
        }
      })), G((B) => {
        const Y = O(t().detailsContainer, "tsqd-query-details-container"), se = O(t().detailsHeader, "tsqd-query-details-header"), P = O(t().detailsBody, "tsqd-query-details-summary-container"), H = O(t().queryDetailsStatus, a()), X = O(t().detailsHeader, "tsqd-query-details-header"), ee = k.size[2], ne = O(t().detailsHeader, "tsqd-query-details-header"), ae = k.size[2], we = O(t().detailsHeader, "tsqd-query-details-header"), ce = k.size[2], ye = O(t().detailsHeader, "tsqd-query-details-header"), ve = k.size[2];
        return Y !== B._v$64 && I(c, B._v$64 = Y), se !== B._v$65 && I(h, B._v$65 = se), P !== B._v$66 && I(f, B._v$66 = P), H !== B._v$67 && I(y, B._v$67 = H), X !== B._v$68 && I(b, B._v$68 = X), ee !== B._v$69 && ((B._v$69 = ee) != null ? w.style.setProperty("padding", ee) : w.style.removeProperty("padding")), ne !== B._v$70 && I(p, B._v$70 = ne), ae !== B._v$71 && ((B._v$71 = ae) != null ? L.style.setProperty("padding", ae) : L.style.removeProperty("padding")), we !== B._v$72 && I(q, B._v$72 = we), ce !== B._v$73 && ((B._v$73 = ce) != null ? A.style.setProperty("padding", ce) : A.style.removeProperty("padding")), ye !== B._v$74 && I(N, B._v$74 = ye), ve !== B._v$75 && ((B._v$75 = ve) != null ? K.style.setProperty("padding", ve) : K.style.removeProperty("padding")), B;
      }, {
        _v$64: void 0,
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
        _v$75: void 0
      }), c;
    }
  });
}, Dn = /* @__PURE__ */ new Map(), Ud = () => {
  const e = D(() => fe().client.getQueryCache()), t = e().subscribe((n) => {
    Po(() => {
      for (const [r, o] of Dn.entries())
        o.shouldUpdate(n) && o.setter(r(e));
    });
  });
  return V(() => {
    Dn.clear(), t();
  }), t;
}, he = (e, t = !0, n = () => !0) => {
  const r = D(() => fe().client.getQueryCache()), [o, s] = z(e(r), t ? void 0 : {
    equals: !1
  });
  return U(() => {
    s(e(r));
  }), Dn.set(e, {
    setter: s,
    shouldUpdate: n
  }), V(() => {
    Dn.delete(e);
  }), o;
}, In = /* @__PURE__ */ new Map(), Gd = () => {
  const e = D(() => fe().client.getMutationCache()), t = e().subscribe(() => {
    for (const [n, r] of In.entries())
      queueMicrotask(() => {
        r(n(e));
      });
  });
  return V(() => {
    In.clear(), t();
  }), t;
}, Pe = (e, t = !0) => {
  const n = D(() => fe().client.getMutationCache()), [r, o] = z(e(n), t ? void 0 : {
    equals: !1
  });
  return U(() => {
    o(e(n));
  }), In.set(e, o), V(() => {
    In.delete(e);
  }), r;
}, Wi = (e) => {
  const {
    colors: t,
    font: n,
    size: r,
    alpha: o,
    shadow: s,
    border: l
  } = k, i = (a, c) => e === "light" ? a : c;
  return {
    devtoolsBtn: _`
      z-index: 100000;
      position: fixed;
      padding: 4px;
      text-align: left;

      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      box-shadow: ${s.md()};
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
    panel: _`
      position: fixed;
      z-index: 9999;
      display: flex;
      gap: ${k.size[0.5]};
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
        background: ${i(t.gray[300], t.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${i(t.gray[400], t.darkGray[300])};
      }
    `,
    "devtoolsBtn-position-bottom-right": _`
      bottom: 12px;
      right: 12px;
    `,
    "devtoolsBtn-position-bottom-left": _`
      bottom: 12px;
      left: 12px;
    `,
    "devtoolsBtn-position-top-left": _`
      top: 12px;
      left: 12px;
    `,
    "devtoolsBtn-position-top-right": _`
      top: 12px;
      right: 12px;
    `,
    "panel-position-top": _`
      top: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${r[14]};
      border-bottom: ${i(t.gray[400], t.darkGray[300])} 1px solid;
    `,
    "panel-position-bottom": _`
      bottom: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${r[14]};
      border-top: ${i(t.gray[400], t.darkGray[300])} 1px solid;
    `,
    "panel-position-right": _`
      bottom: 0;
      right: 0;
      top: 0;
      border-left: ${i(t.gray[400], t.darkGray[300])} 1px solid;
      max-width: 90%;
    `,
    "panel-position-left": _`
      bottom: 0;
      left: 0;
      top: 0;
      border-right: ${i(t.gray[400], t.darkGray[300])} 1px solid;
      max-width: 90%;
    `,
    closeBtn: _`
      position: absolute;
      cursor: pointer;
      z-index: 5;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${i(t.gray[50], t.darkGray[700])};
      &:hover {
        background-color: ${i(t.gray[200], t.darkGray[500])};
      }
      &:focus-visible {
        outline: 2px solid ${t.blue[600]};
      }
      & svg {
        color: ${i(t.gray[600], t.gray[400])};
        width: ${r[2]};
        height: ${r[2]};
      }
    `,
    "closeBtn-position-top": _`
      bottom: 0;
      right: ${r[2]};
      transform: translate(0, 100%);
      border-right: ${i(t.gray[400], t.darkGray[300])} 1px solid;
      border-left: ${i(t.gray[400], t.darkGray[300])} 1px solid;
      border-top: none;
      border-bottom: ${i(t.gray[400], t.darkGray[300])} 1px solid;
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
    "closeBtn-position-bottom": _`
      top: 0;
      right: ${r[2]};
      transform: translate(0, -100%);
      border-right: ${i(t.gray[400], t.darkGray[300])} 1px solid;
      border-left: ${i(t.gray[400], t.darkGray[300])} 1px solid;
      border-top: ${i(t.gray[400], t.darkGray[300])} 1px solid;
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
    "closeBtn-position-right": _`
      bottom: ${r[2]};
      left: 0;
      transform: translate(-100%, 0);
      border-right: none;
      border-left: ${i(t.gray[400], t.darkGray[300])} 1px solid;
      border-top: ${i(t.gray[400], t.darkGray[300])} 1px solid;
      border-bottom: ${i(t.gray[400], t.darkGray[300])} 1px solid;
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
    "closeBtn-position-left": _`
      bottom: ${r[2]};
      right: 0;
      transform: translate(100%, 0);
      border-left: none;
      border-right: ${i(t.gray[400], t.darkGray[300])} 1px solid;
      border-top: ${i(t.gray[400], t.darkGray[300])} 1px solid;
      border-bottom: ${i(t.gray[400], t.darkGray[300])} 1px solid;
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
    queriesContainer: _`
      flex: 1 1 700px;
      background-color: ${i(t.gray[50], t.darkGray[700])};
      display: flex;
      flex-direction: column;
      & * {
        font-family: 'Inter', sans-serif;
      }
    `,
    dragHandle: _`
      position: absolute;
      transition: background-color 0.125s ease;
      &:hover {
        background-color: ${t.purple[400]}${i("", o[90])};
      }
      z-index: 4;
    `,
    "dragHandle-position-top": _`
      bottom: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,
    "dragHandle-position-bottom": _`
      top: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,
    "dragHandle-position-right": _`
      left: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,
    "dragHandle-position-left": _`
      right: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,
    row: _`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${k.size[2]} ${k.size[2.5]};
      gap: ${k.size[2.5]};
      border-bottom: ${i(t.gray[300], t.darkGray[500])} 1px solid;
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
    logoAndToggleContainer: _`
      display: flex;
      gap: ${k.size[3]};
      align-items: center;
    `,
    logo: _`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      gap: ${k.size[0.5]};
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
    tanstackLogo: _`
      font-size: ${n.size.md};
      font-weight: ${n.weight.bold};
      line-height: ${n.lineHeight.xs};
      white-space: nowrap;
      color: ${i(t.gray[600], t.gray[300])};
    `,
    queryFlavorLogo: _`
      font-weight: ${n.weight.semibold};
      font-size: ${n.size.xs};
      background: linear-gradient(
        to right,
        ${i("#ea4037, #ff9b11", "#dd524b, #e9a03b")}
      );
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,
    queryStatusContainer: _`
      display: flex;
      gap: ${k.size[2]};
      height: min-content;
    `,
    queryStatusTag: _`
      display: flex;
      gap: ${k.size[1.5]};
      box-sizing: border-box;
      height: ${k.size[6.5]};
      background: ${i(t.gray[50], t.darkGray[500])};
      color: ${i(t.gray[700], t.gray[300])};
      border-radius: ${k.border.radius.sm};
      font-size: ${n.size.sm};
      padding: ${k.size[1]};
      padding-left: ${k.size[1.5]};
      align-items: center;
      font-weight: ${n.weight.medium};
      border: ${i("1px solid " + t.gray[300], "1px solid transparent")};
      user-select: none;
      position: relative;
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${t.blue[800]};
      }
    `,
    queryStatusTagLabel: _`
      font-size: ${n.size.xs};
    `,
    queryStatusCount: _`
      font-size: ${n.size.xs};
      padding: 0 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${i(t.gray[500], t.gray[400])};
      background-color: ${i(t.gray[200], t.darkGray[300])};
      border-radius: 2px;
      font-variant-numeric: tabular-nums;
      height: ${k.size[4.5]};
    `,
    statusTooltip: _`
      position: absolute;
      z-index: 1;
      background-color: ${i(t.gray[50], t.darkGray[500])};
      top: 100%;
      left: 50%;
      transform: translate(-50%, calc(${k.size[2]}));
      padding: ${k.size[0.5]} ${k.size[2]};
      border-radius: ${k.border.radius.sm};
      font-size: ${n.size.xs};
      border: 1px solid ${i(t.gray[400], t.gray[600])};
      color: ${i(t.gray[600], t.gray[300])};

      &::before {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, -100%);
        position: absolute;
        border-color: transparent transparent
          ${i(t.gray[400], t.gray[600])} transparent;
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
          ${i(t.gray[100], t.darkGray[500])} transparent;
        border-style: solid;
        border-width: 7px;
      }
    `,
    filtersContainer: _`
      display: flex;
      gap: ${k.size[2]};
      & > button {
        cursor: pointer;
        padding: ${k.size[0.5]} ${k.size[2]};
        padding-right: ${k.size[1.5]};
        border-radius: ${k.border.radius.sm};
        background-color: ${i(t.gray[100], t.darkGray[400])};
        border: 1px solid ${i(t.gray[300], t.darkGray[200])};
        color: ${i(t.gray[700], t.gray[300])};
        font-size: ${n.size.xs};
        display: flex;
        align-items: center;
        line-height: ${n.lineHeight.sm};
        gap: ${k.size[1.5]};
        max-width: 160px;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${l.radius.xs};
          outline: 2px solid ${t.blue[800]};
        }
        & svg {
          width: ${k.size[3]};
          height: ${k.size[3]};
          color: ${i(t.gray[500], t.gray[400])};
        }
      }
    `,
    filterInput: _`
      padding: ${r[0.5]} ${r[2]};
      border-radius: ${k.border.radius.sm};
      background-color: ${i(t.gray[100], t.darkGray[400])};
      display: flex;
      box-sizing: content-box;
      align-items: center;
      gap: ${k.size[1.5]};
      max-width: 160px;
      min-width: 100px;
      border: 1px solid ${i(t.gray[300], t.darkGray[200])};
      height: min-content;
      color: ${i(t.gray[600], t.gray[400])};
      & > svg {
        width: ${r[3]};
        height: ${r[3]};
      }
      & input {
        font-size: ${n.size.xs};
        width: 100%;
        background-color: ${i(t.gray[100], t.darkGray[400])};
        border: none;
        padding: 0;
        line-height: ${n.lineHeight.sm};
        color: ${i(t.gray[700], t.gray[300])};
        &::placeholder {
          color: ${i(t.gray[700], t.gray[300])};
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
    filterSelect: _`
      padding: ${k.size[0.5]} ${k.size[2]};
      border-radius: ${k.border.radius.sm};
      background-color: ${i(t.gray[100], t.darkGray[400])};
      display: flex;
      align-items: center;
      gap: ${k.size[1.5]};
      box-sizing: content-box;
      max-width: 160px;
      border: 1px solid ${i(t.gray[300], t.darkGray[200])};
      height: min-content;
      & > svg {
        color: ${i(t.gray[600], t.gray[400])};
        width: ${k.size[2]};
        height: ${k.size[2]};
      }
      & > select {
        appearance: none;
        color: ${i(t.gray[700], t.gray[300])};
        min-width: 100px;
        line-height: ${n.lineHeight.sm};
        font-size: ${n.size.xs};
        background-color: ${i(t.gray[100], t.darkGray[400])};
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
    actionsContainer: _`
      display: flex;
      gap: ${k.size[2]};
    `,
    actionsBtn: _`
      border-radius: ${k.border.radius.sm};
      background-color: ${i(t.gray[100], t.darkGray[400])};
      border: 1px solid ${i(t.gray[300], t.darkGray[200])};
      width: ${k.size[6.5]};
      height: ${k.size[6.5]};
      justify-content: center;
      display: flex;
      align-items: center;
      gap: ${k.size[1.5]};
      max-width: 160px;
      cursor: pointer;
      padding: 0;
      &:hover {
        background-color: ${i(t.gray[200], t.darkGray[500])};
      }
      & svg {
        color: ${i(t.gray[700], t.gray[300])};
        width: ${k.size[3]};
        height: ${k.size[3]};
      }
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${t.blue[800]};
      }
    `,
    actionsBtnOffline: _`
      & svg {
        stroke: ${i(t.yellow[700], t.yellow[500])};
        fill: ${i(t.yellow[700], t.yellow[500])};
      }
    `,
    overflowQueryContainer: _`
      flex: 1;
      overflow-y: auto;
      & > div {
        display: flex;
        flex-direction: column;
      }
    `,
    queryRow: _`
      display: flex;
      align-items: center;
      padding: 0;
      border: none;
      cursor: pointer;
      color: ${i(t.gray[700], t.gray[300])};
      background-color: ${i(t.gray[50], t.darkGray[700])};
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
        background-color: ${i(t.gray[200], t.darkGray[600])};
      }

      & .tsqd-query-observer-count {
        padding: 0 ${k.size[1]};
        user-select: none;
        min-width: ${k.size[6.5]};
        align-self: stretch;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${n.size.xs};
        font-weight: ${n.weight.medium};
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom: 1px solid ${i(t.gray[300], t.darkGray[700])};
      }
      & .tsqd-query-hash {
        user-select: text;
        font-size: ${n.size.xs};
        display: flex;
        align-items: center;
        min-height: ${k.size[6]};
        flex: 1;
        padding: ${k.size[1]} ${k.size[2]};
        font-family: 'Menlo', 'Fira Code', monospace;
        border-bottom: 1px solid ${i(t.gray[300], t.darkGray[400])};
        text-align: left;
        text-overflow: clip;
        word-break: break-word;
      }

      & .tsqd-query-disabled-indicator {
        align-self: stretch;
        display: flex;
        align-items: center;
        padding: 0 ${k.size[2]};
        color: ${i(t.gray[800], t.gray[300])};
        background-color: ${i(t.gray[300], t.darkGray[600])};
        border-bottom: 1px solid ${i(t.gray[300], t.darkGray[400])};
        font-size: ${n.size.xs};
      }
    `,
    selectedQueryRow: _`
      background-color: ${i(t.gray[200], t.darkGray[500])};
    `,
    detailsContainer: _`
      flex: 1 1 700px;
      background-color: ${i(t.gray[50], t.darkGray[700])};
      color: ${i(t.gray[700], t.gray[300])};
      font-family: 'Inter', sans-serif;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      display: flex;
      text-align: left;
    `,
    detailsHeader: _`
      font-family: 'Inter', sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${i(t.gray[200], t.darkGray[600])};
      padding: ${k.size[1.5]} ${k.size[2]};
      font-weight: ${n.weight.medium};
      font-size: ${n.size.xs};
      line-height: ${n.lineHeight.xs};
      text-align: left;
    `,
    detailsBody: _`
      margin: ${k.size[1.5]} 0px ${k.size[2]} 0px;
      & > div {
        display: flex;
        align-items: stretch;
        padding: 0 ${k.size[2]};
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
        margin-bottom: ${k.size[1.5]};
      }

      & code {
        font-family: 'Menlo', 'Fira Code', monospace;
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
    queryDetailsStatus: _`
      border: 1px solid ${t.darkGray[200]};
      border-radius: ${k.border.radius.sm};
      font-weight: ${n.weight.medium};
      padding: ${k.size[1]} ${k.size[2.5]};
    `,
    actionsBody: _`
      flex-wrap: wrap;
      margin: ${k.size[2]} 0px ${k.size[2]} 0px;
      display: flex;
      gap: ${k.size[2]};
      padding: 0px ${k.size[2]};
      & > button {
        font-family: 'Inter', sans-serif;
        font-size: ${n.size.xs};
        padding: ${k.size[1]} ${k.size[2]};
        display: flex;
        border-radius: ${k.border.radius.sm};
        background-color: ${i(t.gray[100], t.darkGray[600])};
        border: 1px solid ${i(t.gray[300], t.darkGray[400])};
        align-items: center;
        gap: ${k.size[2]};
        font-weight: ${n.weight.medium};
        line-height: ${n.lineHeight.xs};
        cursor: pointer;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${l.radius.xs};
          outline: 2px solid ${t.blue[800]};
        }
        &:hover {
          background-color: ${i(t.gray[200], t.darkGray[500])};
        }

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        & > span {
          width: ${r[1.5]};
          height: ${r[1.5]};
          border-radius: ${k.border.radius.full};
        }
      }
    `,
    actionsSelect: _`
      font-size: ${n.size.xs};
      padding: ${k.size[0.5]} ${k.size[2]};
      display: flex;
      border-radius: ${k.border.radius.sm};
      overflow: hidden;
      background-color: ${i(t.gray[100], t.darkGray[600])};
      border: 1px solid ${i(t.gray[300], t.darkGray[400])};
      align-items: center;
      gap: ${k.size[2]};
      font-weight: ${n.weight.medium};
      line-height: ${n.lineHeight.sm};
      color: ${i(t.red[500], t.red[400])};
      cursor: pointer;
      position: relative;
      &:hover {
        background-color: ${i(t.gray[200], t.darkGray[500])};
      }
      & > span {
        width: ${r[1.5]};
        height: ${r[1.5]};
        border-radius: ${k.border.radius.full};
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
        stroke: ${k.colors.red[400]};
      }
      & svg {
        width: ${k.size[2]};
        height: ${k.size[2]};
      }
    `,
    settingsMenu: _`
      display: flex;
      & * {
        font-family: 'Inter', sans-serif;
      }
      flex-direction: column;
      gap: ${r[0.5]};
      border-radius: ${k.border.radius.sm};
      border: 1px solid ${i(t.gray[300], t.gray[700])};
      background-color: ${i(t.gray[50], t.darkGray[600])};
      font-size: ${n.size.xs};
      color: ${i(t.gray[700], t.gray[300])};
      z-index: 99999;
      min-width: 120px;
      padding: ${r[0.5]};
    `,
    settingsSubTrigger: _`
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: ${k.border.radius.xs};
      padding: ${k.size[1]} ${k.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      color: ${i(t.gray[700], t.gray[300])};
      & svg {
        color: ${i(t.gray[600], t.gray[400])};
        transform: rotate(-90deg);
        width: ${k.size[2]};
        height: ${k.size[2]};
      }
      &:hover {
        background-color: ${i(t.gray[200], t.darkGray[500])};
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
    settingsMenuHeader: _`
      padding: ${k.size[1]} ${k.size[1]};
      font-weight: ${n.weight.medium};
      border-bottom: 1px solid ${i(t.gray[300], t.darkGray[400])};
      color: ${i(t.gray[500], t.gray[400])};
      font-size: ${n.size.xs};
    `,
    settingsSubButton: _`
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${i(t.gray[700], t.gray[300])};
      font-size: ${n.size.xs};
      border-radius: ${k.border.radius.xs};
      padding: ${k.size[1]} ${k.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      & svg {
        color: ${i(t.gray[600], t.gray[400])};
      }
      &:hover {
        background-color: ${i(t.gray[200], t.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${t.blue[800]};
      }
    `,
    themeSelectedButton: _`
      background-color: ${i(t.purple[100], t.purple[900])};
      color: ${i(t.purple[700], t.purple[300])};
      & svg {
        color: ${i(t.purple[700], t.purple[300])};
      }
      &:hover {
        background-color: ${i(t.purple[100], t.purple[900])};
      }
    `,
    viewToggle: _`
      border-radius: ${k.border.radius.sm};
      background-color: ${i(t.gray[200], t.darkGray[600])};
      border: 1px solid ${i(t.gray[300], t.darkGray[200])};
      display: flex;
      padding: 0;
      font-size: ${n.size.xs};
      color: ${i(t.gray[700], t.gray[300])};
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
          background-color: ${i(t.gray[100], t.darkGray[500])};
        }
      }

      & > [data-checked] {
        opacity: 1;
        background-color: ${i(t.gray[100], t.darkGray[400])};
        & label:hover {
          background-color: ${i(t.gray[100], t.darkGray[400])};
        }
      }

      & .tsqd-radio-toggle:first-child {
        & label {
          padding: 0 ${k.size[1.5]} 0 ${k.size[2]};
        }
        border-right: 1px solid ${i(t.gray[300], t.darkGray[200])};
      }

      & .tsqd-radio-toggle:nth-child(2) {
        & label {
          padding: 0 ${k.size[2]} 0 ${k.size[1.5]};
        }
      }
    `
  };
}, Ue = Wi("light"), Ge = Wi("dark");
Ln(["click", "mousedown", "input"]);
export {
  Qd as default
};
