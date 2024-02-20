import { W as _t, r as ce, O as L, D as ot, J as Wo, w as C, x as j, H as q, h as pt } from "./index-cN75SfrG.js";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const de = window, wr = de.ShadowRoot && (de.ShadyCSS === void 0 || de.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, vr = Symbol(), _r = /* @__PURE__ */ new WeakMap();
let no = class {
  constructor(t, e, r) {
    if (this._$cssResult$ = !0, r !== vr)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (wr && t === void 0) {
      const r = e !== void 0 && e.length === 1;
      r && (t = _r.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), r && _r.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const jo = (t) => new no(typeof t == "string" ? t : t + "", void 0, vr), M = (t, ...e) => {
  const r = t.length === 1 ? t[0] : e.reduce((n, o, i) => n + ((a) => {
    if (a._$cssResult$ === !0)
      return a.cssText;
    if (typeof a == "number")
      return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + t[i + 1], t[0]);
  return new no(r, t, vr);
}, Ho = (t, e) => {
  wr ? t.adoptedStyleSheets = e.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet) : e.forEach((r) => {
    const n = document.createElement("style"), o = de.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = r.cssText, t.appendChild(n);
  });
}, kr = wr ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let r = "";
  for (const n of e.cssRules)
    r += n.cssText;
  return jo(r);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Ce;
const he = window, Or = he.trustedTypes, zo = Or ? Or.emptyScript : "", Ir = he.reactiveElementPolyfillSupport, ar = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? zo : null;
      break;
    case Object:
    case Array:
      t = t == null ? t : JSON.stringify(t);
  }
  return t;
}, fromAttribute(t, e) {
  let r = t;
  switch (e) {
    case Boolean:
      r = t !== null;
      break;
    case Number:
      r = t === null ? null : Number(t);
      break;
    case Object:
    case Array:
      try {
        r = JSON.parse(t);
      } catch {
        r = null;
      }
  }
  return r;
} }, io = (t, e) => e !== t && (e == e || t == t), Ee = { attribute: !0, type: String, converter: ar, reflect: !1, hasChanged: io }, lr = "finalized";
let $t = class extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this._$Eu();
  }
  static addInitializer(t) {
    var e;
    this.finalize(), ((e = this.h) !== null && e !== void 0 ? e : this.h = []).push(t);
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return this.elementProperties.forEach((e, r) => {
      const n = this._$Ep(r, e);
      n !== void 0 && (this._$Ev.set(n, r), t.push(n));
    }), t;
  }
  static createProperty(t, e = Ee) {
    if (e.state && (e.attribute = !1), this.finalize(), this.elementProperties.set(t, e), !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
      const r = typeof t == "symbol" ? Symbol() : "__" + t, n = this.getPropertyDescriptor(t, r, e);
      n !== void 0 && Object.defineProperty(this.prototype, t, n);
    }
  }
  static getPropertyDescriptor(t, e, r) {
    return { get() {
      return this[e];
    }, set(n) {
      const o = this[t];
      this[e] = n, this.requestUpdate(t, o, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || Ee;
  }
  static finalize() {
    if (this.hasOwnProperty(lr))
      return !1;
    this[lr] = !0;
    const t = Object.getPrototypeOf(this);
    if (t.finalize(), t.h !== void 0 && (this.h = [...t.h]), this.elementProperties = new Map(t.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const e = this.properties, r = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
      for (const n of r)
        this.createProperty(n, e[n]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const r = new Set(t.flat(1 / 0).reverse());
      for (const n of r)
        e.unshift(kr(n));
    } else
      t !== void 0 && e.push(kr(t));
    return e;
  }
  static _$Ep(t, e) {
    const r = e.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  _$Eu() {
    var t;
    this._$E_ = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (t = this.constructor.h) === null || t === void 0 || t.forEach((e) => e(this));
  }
  addController(t) {
    var e, r;
    ((e = this._$ES) !== null && e !== void 0 ? e : this._$ES = []).push(t), this.renderRoot !== void 0 && this.isConnected && ((r = t.hostConnected) === null || r === void 0 || r.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$ES) === null || e === void 0 || e.splice(this._$ES.indexOf(t) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t, e) => {
      this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]), delete this[e]);
    });
  }
  createRenderRoot() {
    var t;
    const e = (t = this.shadowRoot) !== null && t !== void 0 ? t : this.attachShadow(this.constructor.shadowRootOptions);
    return Ho(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var t;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$ES) === null || t === void 0 || t.forEach((e) => {
      var r;
      return (r = e.hostConnected) === null || r === void 0 ? void 0 : r.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$ES) === null || t === void 0 || t.forEach((e) => {
      var r;
      return (r = e.hostDisconnected) === null || r === void 0 ? void 0 : r.call(e);
    });
  }
  attributeChangedCallback(t, e, r) {
    this._$AK(t, r);
  }
  _$EO(t, e, r = Ee) {
    var n;
    const o = this.constructor._$Ep(t, r);
    if (o !== void 0 && r.reflect === !0) {
      const i = (((n = r.converter) === null || n === void 0 ? void 0 : n.toAttribute) !== void 0 ? r.converter : ar).toAttribute(e, r.type);
      this._$El = t, i == null ? this.removeAttribute(o) : this.setAttribute(o, i), this._$El = null;
    }
  }
  _$AK(t, e) {
    var r;
    const n = this.constructor, o = n._$Ev.get(t);
    if (o !== void 0 && this._$El !== o) {
      const i = n.getPropertyOptions(o), a = typeof i.converter == "function" ? { fromAttribute: i.converter } : ((r = i.converter) === null || r === void 0 ? void 0 : r.fromAttribute) !== void 0 ? i.converter : ar;
      this._$El = o, this[o] = a.fromAttribute(e, i.type), this._$El = null;
    }
  }
  requestUpdate(t, e, r) {
    let n = !0;
    t !== void 0 && (((r = r || this.constructor.getPropertyOptions(t)).hasChanged || io)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e), r.reflect === !0 && this._$El !== t && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t, r))) : n = !1), !this.isUpdatePending && n && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((n, o) => this[o] = n), this._$Ei = void 0);
    let e = !1;
    const r = this._$AL;
    try {
      e = this.shouldUpdate(r), e ? (this.willUpdate(r), (t = this._$ES) === null || t === void 0 || t.forEach((n) => {
        var o;
        return (o = n.hostUpdate) === null || o === void 0 ? void 0 : o.call(n);
      }), this.update(r)) : this._$Ek();
    } catch (n) {
      throw e = !1, this._$Ek(), n;
    }
    e && this._$AE(r);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$ES) === null || e === void 0 || e.forEach((r) => {
      var n;
      return (n = r.hostUpdated) === null || n === void 0 ? void 0 : n.call(r);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$EC !== void 0 && (this._$EC.forEach((e, r) => this._$EO(r, this[r], e)), this._$EC = void 0), this._$Ek();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
$t[lr] = !0, $t.elementProperties = /* @__PURE__ */ new Map(), $t.elementStyles = [], $t.shadowRootOptions = { mode: "open" }, Ir == null || Ir({ ReactiveElement: $t }), ((Ce = he.reactiveElementVersions) !== null && Ce !== void 0 ? Ce : he.reactiveElementVersions = []).push("1.6.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Ae;
const ue = window, kt = ue.trustedTypes, Mr = kt ? kt.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, sr = "$lit$", rt = `lit$${(Math.random() + "").slice(9)}$`, ao = "?" + rt, Zo = `<${ao}>`, gt = document, Ft = () => gt.createComment(""), Vt = (t) => t === null || typeof t != "object" && typeof t != "function", lo = Array.isArray, Fo = (t) => lo(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", _e = `[ 	
\f\r]`, St = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Tr = /-->/g, Pr = />/g, st = RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Rr = /'/g, Sr = /"/g, so = /^(?:script|style|textarea|title)$/i, co = (t) => (e, ...r) => ({ _$litType$: t, strings: e, values: r }), u = co(1), N = co(2), ft = Symbol.for("lit-noChange"), D = Symbol.for("lit-nothing"), Nr = /* @__PURE__ */ new WeakMap(), ut = gt.createTreeWalker(gt, 129, null, !1);
function ho(t, e) {
  if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return Mr !== void 0 ? Mr.createHTML(e) : e;
}
const Vo = (t, e) => {
  const r = t.length - 1, n = [];
  let o, i = e === 2 ? "<svg>" : "", a = St;
  for (let l = 0; l < r; l++) {
    const s = t[l];
    let c, m, b = -1, d = 0;
    for (; d < s.length && (a.lastIndex = d, m = a.exec(s), m !== null); )
      d = a.lastIndex, a === St ? m[1] === "!--" ? a = Tr : m[1] !== void 0 ? a = Pr : m[2] !== void 0 ? (so.test(m[2]) && (o = RegExp("</" + m[2], "g")), a = st) : m[3] !== void 0 && (a = st) : a === st ? m[0] === ">" ? (a = o ?? St, b = -1) : m[1] === void 0 ? b = -2 : (b = a.lastIndex - m[2].length, c = m[1], a = m[3] === void 0 ? st : m[3] === '"' ? Sr : Rr) : a === Sr || a === Rr ? a = st : a === Tr || a === Pr ? a = St : (a = st, o = void 0);
    const v = a === st && t[l + 1].startsWith("/>") ? " " : "";
    i += a === St ? s + Zo : b >= 0 ? (n.push(c), s.slice(0, b) + sr + s.slice(b) + rt + v) : s + rt + (b === -2 ? (n.push(void 0), l) : v);
  }
  return [ho(t, i + (t[r] || "<?>") + (e === 2 ? "</svg>" : "")), n];
};
class qt {
  constructor({ strings: e, _$litType$: r }, n) {
    let o;
    this.parts = [];
    let i = 0, a = 0;
    const l = e.length - 1, s = this.parts, [c, m] = Vo(e, r);
    if (this.el = qt.createElement(c, n), ut.currentNode = this.el.content, r === 2) {
      const b = this.el.content, d = b.firstChild;
      d.remove(), b.append(...d.childNodes);
    }
    for (; (o = ut.nextNode()) !== null && s.length < l; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) {
          const b = [];
          for (const d of o.getAttributeNames())
            if (d.endsWith(sr) || d.startsWith(rt)) {
              const v = m[a++];
              if (b.push(d), v !== void 0) {
                const p = o.getAttribute(v.toLowerCase() + sr).split(rt), g = /([.?@])?(.*)/.exec(v);
                s.push({ type: 1, index: i, name: g[2], strings: p, ctor: g[1] === "." ? Yo : g[1] === "?" ? Jo : g[1] === "@" ? Qo : ve });
              } else
                s.push({ type: 6, index: i });
            }
          for (const d of b)
            o.removeAttribute(d);
        }
        if (so.test(o.tagName)) {
          const b = o.textContent.split(rt), d = b.length - 1;
          if (d > 0) {
            o.textContent = kt ? kt.emptyScript : "";
            for (let v = 0; v < d; v++)
              o.append(b[v], Ft()), ut.nextNode(), s.push({ type: 2, index: ++i });
            o.append(b[d], Ft());
          }
        }
      } else if (o.nodeType === 8)
        if (o.data === ao)
          s.push({ type: 2, index: i });
        else {
          let b = -1;
          for (; (b = o.data.indexOf(rt, b + 1)) !== -1; )
            s.push({ type: 7, index: i }), b += rt.length - 1;
        }
      i++;
    }
  }
  static createElement(e, r) {
    const n = gt.createElement("template");
    return n.innerHTML = e, n;
  }
}
function Ot(t, e, r = t, n) {
  var o, i, a, l;
  if (e === ft)
    return e;
  let s = n !== void 0 ? (o = r._$Co) === null || o === void 0 ? void 0 : o[n] : r._$Cl;
  const c = Vt(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== c && ((i = s == null ? void 0 : s._$AO) === null || i === void 0 || i.call(s, !1), c === void 0 ? s = void 0 : (s = new c(t), s._$AT(t, r, n)), n !== void 0 ? ((a = (l = r)._$Co) !== null && a !== void 0 ? a : l._$Co = [])[n] = s : r._$Cl = s), s !== void 0 && (e = Ot(t, s._$AS(t, e.values), s, n)), e;
}
class qo {
  constructor(e, r) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = r;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    var r;
    const { el: { content: n }, parts: o } = this._$AD, i = ((r = e == null ? void 0 : e.creationScope) !== null && r !== void 0 ? r : gt).importNode(n, !0);
    ut.currentNode = i;
    let a = ut.nextNode(), l = 0, s = 0, c = o[0];
    for (; c !== void 0; ) {
      if (l === c.index) {
        let m;
        c.type === 2 ? m = new Jt(a, a.nextSibling, this, e) : c.type === 1 ? m = new c.ctor(a, c.name, c.strings, this, e) : c.type === 6 && (m = new Go(a, this, e)), this._$AV.push(m), c = o[++s];
      }
      l !== (c == null ? void 0 : c.index) && (a = ut.nextNode(), l++);
    }
    return ut.currentNode = gt, i;
  }
  v(e) {
    let r = 0;
    for (const n of this._$AV)
      n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, r), r += n.strings.length - 2) : n._$AI(e[r])), r++;
  }
}
class Jt {
  constructor(e, r, n, o) {
    var i;
    this.type = 2, this._$AH = D, this._$AN = void 0, this._$AA = e, this._$AB = r, this._$AM = n, this.options = o, this._$Cp = (i = o == null ? void 0 : o.isConnected) === null || i === void 0 || i;
  }
  get _$AU() {
    var e, r;
    return (r = (e = this._$AM) === null || e === void 0 ? void 0 : e._$AU) !== null && r !== void 0 ? r : this._$Cp;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const r = this._$AM;
    return r !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = r.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, r = this) {
    e = Ot(this, e, r), Vt(e) ? e === D || e == null || e === "" ? (this._$AH !== D && this._$AR(), this._$AH = D) : e !== this._$AH && e !== ft && this._(e) : e._$litType$ !== void 0 ? this.g(e) : e.nodeType !== void 0 ? this.$(e) : Fo(e) ? this.T(e) : this._(e);
  }
  k(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  $(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.k(e));
  }
  _(e) {
    this._$AH !== D && Vt(this._$AH) ? this._$AA.nextSibling.data = e : this.$(gt.createTextNode(e)), this._$AH = e;
  }
  g(e) {
    var r;
    const { values: n, _$litType$: o } = e, i = typeof o == "number" ? this._$AC(e) : (o.el === void 0 && (o.el = qt.createElement(ho(o.h, o.h[0]), this.options)), o);
    if (((r = this._$AH) === null || r === void 0 ? void 0 : r._$AD) === i)
      this._$AH.v(n);
    else {
      const a = new qo(i, this), l = a.u(this.options);
      a.v(n), this.$(l), this._$AH = a;
    }
  }
  _$AC(e) {
    let r = Nr.get(e.strings);
    return r === void 0 && Nr.set(e.strings, r = new qt(e)), r;
  }
  T(e) {
    lo(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let n, o = 0;
    for (const i of e)
      o === r.length ? r.push(n = new Jt(this.k(Ft()), this.k(Ft()), this, this.options)) : n = r[o], n._$AI(i), o++;
    o < r.length && (this._$AR(n && n._$AB.nextSibling, o), r.length = o);
  }
  _$AR(e = this._$AA.nextSibling, r) {
    var n;
    for ((n = this._$AP) === null || n === void 0 || n.call(this, !1, !0, r); e && e !== this._$AB; ) {
      const o = e.nextSibling;
      e.remove(), e = o;
    }
  }
  setConnected(e) {
    var r;
    this._$AM === void 0 && (this._$Cp = e, (r = this._$AP) === null || r === void 0 || r.call(this, e));
  }
}
class ve {
  constructor(e, r, n, o, i) {
    this.type = 1, this._$AH = D, this._$AN = void 0, this.element = e, this.name = r, this._$AM = o, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = D;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e, r = this, n, o) {
    const i = this.strings;
    let a = !1;
    if (i === void 0)
      e = Ot(this, e, r, 0), a = !Vt(e) || e !== this._$AH && e !== ft, a && (this._$AH = e);
    else {
      const l = e;
      let s, c;
      for (e = i[0], s = 0; s < i.length - 1; s++)
        c = Ot(this, l[n + s], r, s), c === ft && (c = this._$AH[s]), a || (a = !Vt(c) || c !== this._$AH[s]), c === D ? e = D : e !== D && (e += (c ?? "") + i[s + 1]), this._$AH[s] = c;
    }
    a && !o && this.j(e);
  }
  j(e) {
    e === D ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Yo extends ve {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === D ? void 0 : e;
  }
}
const Ko = kt ? kt.emptyScript : "";
let Jo = class extends ve {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    t && t !== D ? this.element.setAttribute(this.name, Ko) : this.element.removeAttribute(this.name);
  }
};
class Qo extends ve {
  constructor(e, r, n, o, i) {
    super(e, r, n, o, i), this.type = 5;
  }
  _$AI(e, r = this) {
    var n;
    if ((e = (n = Ot(this, e, r, 0)) !== null && n !== void 0 ? n : D) === ft)
      return;
    const o = this._$AH, i = e === D && o !== D || e.capture !== o.capture || e.once !== o.once || e.passive !== o.passive, a = e !== D && (o === D || i);
    i && this.element.removeEventListener(this.name, this, o), a && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var r, n;
    typeof this._$AH == "function" ? this._$AH.call((n = (r = this.options) === null || r === void 0 ? void 0 : r.host) !== null && n !== void 0 ? n : this.element, e) : this._$AH.handleEvent(e);
  }
}
let Go = class {
  constructor(t, e, r) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    Ot(this, t);
  }
};
const Lr = ue.litHtmlPolyfillSupport;
Lr == null || Lr(qt, Jt), ((Ae = ue.litHtmlVersions) !== null && Ae !== void 0 ? Ae : ue.litHtmlVersions = []).push("2.8.0");
const Xo = (t, e, r) => {
  var n, o;
  const i = (n = r == null ? void 0 : r.renderBefore) !== null && n !== void 0 ? n : e;
  let a = i._$litPart$;
  if (a === void 0) {
    const l = (o = r == null ? void 0 : r.renderBefore) !== null && o !== void 0 ? o : null;
    i._$litPart$ = a = new Jt(e.insertBefore(Ft(), l), l, void 0, r ?? {});
  }
  return a._$AI(t), a;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ke, Oe;
class A extends $t {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e, r;
    const n = super.createRenderRoot();
    return (e = (r = this.renderOptions).renderBefore) !== null && e !== void 0 || (r.renderBefore = n.firstChild), n;
  }
  update(e) {
    const r = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Xo(r, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) === null || e === void 0 || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) === null || e === void 0 || e.setConnected(!1);
  }
  render() {
    return ft;
  }
}
A.finalized = !0, A._$litElement$ = !0, (ke = globalThis.litElementHydrateSupport) === null || ke === void 0 || ke.call(globalThis, { LitElement: A });
const Dr = globalThis.litElementPolyfillSupport;
Dr == null || Dr({ LitElement: A });
((Oe = globalThis.litElementVersions) !== null && Oe !== void 0 ? Oe : globalThis.litElementVersions = []).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const O = (t) => (e) => typeof e == "function" ? ((r, n) => (customElements.define(r, n), n))(t, e) : ((r, n) => {
  const { kind: o, elements: i } = n;
  return { kind: o, elements: i, finisher(a) {
    customElements.define(r, a);
  } };
})(t, e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const tn = (t, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? { ...e, finisher(r) {
  r.createProperty(e.key, t);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e.key, initializer() {
  typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this));
}, finisher(r) {
  r.createProperty(e.key, t);
} }, en = (t, e, r) => {
  e.constructor.createProperty(r, t);
};
function $(t) {
  return (e, r) => r !== void 0 ? en(t, e, r) : tn(t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function H(t) {
  return $({ ...t, state: !0 });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Ie;
((Ie = window.HTMLSlotElement) === null || Ie === void 0 ? void 0 : Ie.prototype.assignedElements) != null;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rn = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, on = (t) => (...e) => ({ _$litDirective$: t, values: e });
class nn {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, r, n) {
    this._$Ct = e, this._$AM = r, this._$Ci = n;
  }
  _$AS(e, r) {
    return this.update(e, r);
  }
  update(e, r) {
    return this.render(...r);
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Q = on(class extends nn {
  constructor(t) {
    var e;
    if (super(t), t.type !== rn.ATTRIBUTE || t.name !== "class" || ((e = t.strings) === null || e === void 0 ? void 0 : e.length) > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t) {
    return " " + Object.keys(t).filter((e) => t[e]).join(" ") + " ";
  }
  update(t, [e]) {
    var r, n;
    if (this.it === void 0) {
      this.it = /* @__PURE__ */ new Set(), t.strings !== void 0 && (this.nt = new Set(t.strings.join(" ").split(/\s/).filter((i) => i !== "")));
      for (const i in e)
        e[i] && !(!((r = this.nt) === null || r === void 0) && r.has(i)) && this.it.add(i);
      return this.render(e);
    }
    const o = t.element.classList;
    this.it.forEach((i) => {
      i in e || (o.remove(i), this.it.delete(i));
    });
    for (const i in e) {
      const a = !!e[i];
      a === this.it.has(i) || !((n = this.nt) === null || n === void 0) && n.has(i) || (a ? (o.add(i), this.it.add(i)) : (o.remove(i), this.it.delete(i)));
    }
    return ft;
  }
});
function an(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
const uo = (t, e, r) => Math.min(Math.max(r, t), e), F = {
  duration: 0.3,
  delay: 0,
  endDelay: 0,
  repeat: 0,
  easing: "ease"
}, me = (t) => typeof t == "number", Et = (t) => Array.isArray(t) && !me(t[0]), ln = (t, e, r) => {
  const n = e - t;
  return ((r - t) % n + n) % n + t;
};
function sn(t, e) {
  return Et(t) ? t[ln(0, t.length, e)] : t;
}
const mo = (t, e, r) => -r * t + r * e + t, po = () => {
}, it = (t) => t, br = (t, e, r) => e - t === 0 ? 1 : (r - t) / (e - t);
function go(t, e) {
  const r = t[t.length - 1];
  for (let n = 1; n <= e; n++) {
    const o = br(0, e, n);
    t.push(mo(r, 1, o));
  }
}
function cn(t) {
  const e = [0];
  return go(e, t - 1), e;
}
function dn(t, e = cn(t.length), r = it) {
  const n = t.length, o = n - e.length;
  return o > 0 && go(e, o), (i) => {
    let a = 0;
    for (; a < n - 2 && !(i < e[a + 1]); a++)
      ;
    let l = uo(0, 1, br(e[a], e[a + 1], i));
    return l = sn(r, a)(l), mo(t[a], t[a + 1], l);
  };
}
const fo = (t) => Array.isArray(t) && me(t[0]), cr = (t) => typeof t == "object" && !!t.createAnimation, It = (t) => typeof t == "function", hn = (t) => typeof t == "string", zt = {
  ms: (t) => t * 1e3,
  s: (t) => t / 1e3
}, wo = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t, un = 1e-7, mn = 12;
function pn(t, e, r, n, o) {
  let i, a, l = 0;
  do
    a = e + (r - e) / 2, i = wo(a, n, o) - t, i > 0 ? r = a : e = a;
  while (Math.abs(i) > un && ++l < mn);
  return a;
}
function Ht(t, e, r, n) {
  if (t === e && r === n)
    return it;
  const o = (i) => pn(i, 0, 1, t, r);
  return (i) => i === 0 || i === 1 ? i : wo(o(i), e, n);
}
const gn = (t, e = "end") => (r) => {
  r = e === "end" ? Math.min(r, 0.999) : Math.max(r, 1e-3);
  const n = r * t, o = e === "end" ? Math.floor(n) : Math.ceil(n);
  return uo(0, 1, o / t);
}, Br = {
  ease: Ht(0.25, 0.1, 0.25, 1),
  "ease-in": Ht(0.42, 0, 1, 1),
  "ease-in-out": Ht(0.42, 0, 0.58, 1),
  "ease-out": Ht(0, 0, 0.58, 1)
}, fn = /\((.*?)\)/;
function Ur(t) {
  if (It(t))
    return t;
  if (fo(t))
    return Ht(...t);
  if (Br[t])
    return Br[t];
  if (t.startsWith("steps")) {
    const e = fn.exec(t);
    if (e) {
      const r = e[1].split(",");
      return gn(parseFloat(r[0]), r[1].trim());
    }
  }
  return it;
}
class vo {
  constructor(e, r = [0, 1], { easing: n, duration: o = F.duration, delay: i = F.delay, endDelay: a = F.endDelay, repeat: l = F.repeat, offset: s, direction: c = "normal", autoplay: m = !0 } = {}) {
    if (this.startTime = null, this.rate = 1, this.t = 0, this.cancelTimestamp = null, this.easing = it, this.duration = 0, this.totalDuration = 0, this.repeat = 0, this.playState = "idle", this.finished = new Promise((d, v) => {
      this.resolve = d, this.reject = v;
    }), n = n || F.easing, cr(n)) {
      const d = n.createAnimation(r);
      n = d.easing, r = d.keyframes || r, o = d.duration || o;
    }
    this.repeat = l, this.easing = Et(n) ? it : Ur(n), this.updateDuration(o);
    const b = dn(r, s, Et(n) ? n.map(Ur) : it);
    this.tick = (d) => {
      var v;
      i = i;
      let p = 0;
      this.pauseTime !== void 0 ? p = this.pauseTime : p = (d - this.startTime) * this.rate, this.t = p, p /= 1e3, p = Math.max(p - i, 0), this.playState === "finished" && this.pauseTime === void 0 && (p = this.totalDuration);
      const g = p / this.duration;
      let k = Math.floor(g), h = g % 1;
      !h && g >= 1 && (h = 1), h === 1 && k--;
      const w = k % 2;
      (c === "reverse" || c === "alternate" && w || c === "alternate-reverse" && !w) && (h = 1 - h);
      const f = p >= this.totalDuration ? 1 : Math.min(h, 1), y = b(this.easing(f));
      e(y), this.pauseTime === void 0 && (this.playState === "finished" || p >= this.totalDuration + a) ? (this.playState = "finished", (v = this.resolve) === null || v === void 0 || v.call(this, y)) : this.playState !== "idle" && (this.frameRequestId = requestAnimationFrame(this.tick));
    }, m && this.play();
  }
  play() {
    const e = performance.now();
    this.playState = "running", this.pauseTime !== void 0 ? this.startTime = e - this.pauseTime : this.startTime || (this.startTime = e), this.cancelTimestamp = this.startTime, this.pauseTime = void 0, this.frameRequestId = requestAnimationFrame(this.tick);
  }
  pause() {
    this.playState = "paused", this.pauseTime = this.t;
  }
  finish() {
    this.playState = "finished", this.tick(0);
  }
  stop() {
    var e;
    this.playState = "idle", this.frameRequestId !== void 0 && cancelAnimationFrame(this.frameRequestId), (e = this.reject) === null || e === void 0 || e.call(this, !1);
  }
  cancel() {
    this.stop(), this.tick(this.cancelTimestamp);
  }
  reverse() {
    this.rate *= -1;
  }
  commitStyles() {
  }
  updateDuration(e) {
    this.duration = e, this.totalDuration = e * (this.repeat + 1);
  }
  get currentTime() {
    return this.t;
  }
  set currentTime(e) {
    this.pauseTime !== void 0 || this.rate === 0 ? this.pauseTime = e : this.startTime = performance.now() - e / this.rate;
  }
  get playbackRate() {
    return this.rate;
  }
  set playbackRate(e) {
    this.rate = e;
  }
}
var dr = function() {
};
process.env.NODE_ENV !== "production" && (dr = function(t, e) {
  if (!t)
    throw new Error(e);
});
class wn {
  setAnimation(e) {
    this.animation = e, e == null || e.finished.then(() => this.clearAnimation()).catch(() => {
    });
  }
  clearAnimation() {
    this.animation = this.generator = void 0;
  }
}
const Me = /* @__PURE__ */ new WeakMap();
function bo(t) {
  return Me.has(t) || Me.set(t, {
    transforms: [],
    values: /* @__PURE__ */ new Map()
  }), Me.get(t);
}
function vn(t, e) {
  return t.has(e) || t.set(e, new wn()), t.get(e);
}
const bn = ["", "X", "Y", "Z"], yn = ["translate", "scale", "rotate", "skew"], pe = {
  x: "translateX",
  y: "translateY",
  z: "translateZ"
}, Wr = {
  syntax: "<angle>",
  initialValue: "0deg",
  toDefaultUnit: (t) => t + "deg"
}, xn = {
  translate: {
    syntax: "<length-percentage>",
    initialValue: "0px",
    toDefaultUnit: (t) => t + "px"
  },
  rotate: Wr,
  scale: {
    syntax: "<number>",
    initialValue: 1,
    toDefaultUnit: it
  },
  skew: Wr
}, Yt = /* @__PURE__ */ new Map(), yr = (t) => `--motion-${t}`, ge = ["x", "y", "z"];
yn.forEach((t) => {
  bn.forEach((e) => {
    ge.push(t + e), Yt.set(yr(t + e), xn[t]);
  });
});
const $n = (t, e) => ge.indexOf(t) - ge.indexOf(e), Cn = new Set(ge), yo = (t) => Cn.has(t), En = (t, e) => {
  pe[e] && (e = pe[e]);
  const { transforms: r } = bo(t);
  an(r, e), t.style.transform = An(r);
}, An = (t) => t.sort($n).reduce(_n, "").trim(), _n = (t, e) => `${t} ${e}(var(${yr(e)}))`, hr = (t) => t.startsWith("--"), jr = /* @__PURE__ */ new Set();
function kn(t) {
  if (!jr.has(t)) {
    jr.add(t);
    try {
      const { syntax: e, initialValue: r } = Yt.has(t) ? Yt.get(t) : {};
      CSS.registerProperty({
        name: t,
        inherits: !1,
        syntax: e,
        initialValue: r
      });
    } catch {
    }
  }
}
const Te = (t, e) => document.createElement("div").animate(t, e), Hr = {
  cssRegisterProperty: () => typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
  partialKeyframes: () => {
    try {
      Te({ opacity: [1] });
    } catch {
      return !1;
    }
    return !0;
  },
  finished: () => !!Te({ opacity: [0, 1] }, { duration: 1e-3 }).finished,
  linearEasing: () => {
    try {
      Te({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }
}, Pe = {}, Ct = {};
for (const t in Hr)
  Ct[t] = () => (Pe[t] === void 0 && (Pe[t] = Hr[t]()), Pe[t]);
const On = 0.015, In = (t, e) => {
  let r = "";
  const n = Math.round(e / On);
  for (let o = 0; o < n; o++)
    r += t(br(0, n - 1, o)) + ", ";
  return r.substring(0, r.length - 2);
}, zr = (t, e) => It(t) ? Ct.linearEasing() ? `linear(${In(t, e)})` : F.easing : fo(t) ? Mn(t) : t, Mn = ([t, e, r, n]) => `cubic-bezier(${t}, ${e}, ${r}, ${n})`;
function Tn(t, e) {
  for (let r = 0; r < t.length; r++)
    t[r] === null && (t[r] = r ? t[r - 1] : e());
  return t;
}
const Pn = (t) => Array.isArray(t) ? t : [t];
function ur(t) {
  return pe[t] && (t = pe[t]), yo(t) ? yr(t) : t;
}
const Xt = {
  get: (t, e) => {
    e = ur(e);
    let r = hr(e) ? t.style.getPropertyValue(e) : getComputedStyle(t)[e];
    if (!r && r !== 0) {
      const n = Yt.get(e);
      n && (r = n.initialValue);
    }
    return r;
  },
  set: (t, e, r) => {
    e = ur(e), hr(e) ? t.style.setProperty(e, r) : t.style[e] = r;
  }
};
function xo(t, e = !0) {
  if (!(!t || t.playState === "finished"))
    try {
      t.stop ? t.stop() : (e && t.commitStyles(), t.cancel());
    } catch {
    }
}
function Rn(t, e) {
  var r;
  let n = (e == null ? void 0 : e.toDefaultUnit) || it;
  const o = t[t.length - 1];
  if (hn(o)) {
    const i = ((r = o.match(/(-?[\d.]+)([a-z%]*)/)) === null || r === void 0 ? void 0 : r[2]) || "";
    i && (n = (a) => a + i);
  }
  return n;
}
function Sn() {
  return window.__MOTION_DEV_TOOLS_RECORD;
}
function Nn(t, e, r, n = {}, o) {
  const i = Sn(), a = n.record !== !1 && i;
  let l, { duration: s = F.duration, delay: c = F.delay, endDelay: m = F.endDelay, repeat: b = F.repeat, easing: d = F.easing, persist: v = !1, direction: p, offset: g, allowWebkitAcceleration: k = !1, autoplay: h = !0 } = n;
  const w = bo(t), f = yo(e);
  let y = Ct.waapi();
  f && En(t, e);
  const E = ur(e), I = vn(w.values, E), S = Yt.get(E);
  return xo(I.animation, !(cr(d) && I.generator) && n.record !== !1), () => {
    const U = () => {
      var P, K;
      return (K = (P = Xt.get(t, E)) !== null && P !== void 0 ? P : S == null ? void 0 : S.initialValue) !== null && K !== void 0 ? K : 0;
    };
    let R = Tn(Pn(r), U);
    const z = Rn(R, S);
    if (cr(d)) {
      const P = d.createAnimation(R, e !== "opacity", U, E, I);
      d = P.easing, R = P.keyframes || R, s = P.duration || s;
    }
    if (hr(E) && (Ct.cssRegisterProperty() ? kn(E) : y = !1), f && !Ct.linearEasing() && (It(d) || Et(d) && d.some(It)) && (y = !1), y) {
      S && (R = R.map((B) => me(B) ? S.toDefaultUnit(B) : B)), R.length === 1 && (!Ct.partialKeyframes() || a) && R.unshift(U());
      const P = {
        delay: zt.ms(c),
        duration: zt.ms(s),
        endDelay: zt.ms(m),
        easing: Et(d) ? void 0 : zr(d, s),
        direction: p,
        iterations: b + 1,
        fill: "both"
      };
      l = t.animate({
        [E]: R,
        offset: g,
        easing: Et(d) ? d.map((B) => zr(B, s)) : void 0
      }, P), l.finished || (l.finished = new Promise((B, Uo) => {
        l.onfinish = B, l.oncancel = Uo;
      }));
      const K = R[R.length - 1];
      l.finished.then(() => {
        v || (Xt.set(t, E, K), l.cancel());
      }).catch(po), k || (l.playbackRate = 1.000001);
    } else if (o && f)
      R = R.map((P) => typeof P == "string" ? parseFloat(P) : P), R.length === 1 && R.unshift(parseFloat(U())), l = new o((P) => {
        Xt.set(t, E, z ? z(P) : P);
      }, R, Object.assign(Object.assign({}, n), {
        duration: s,
        easing: d
      }));
    else {
      const P = R[R.length - 1];
      Xt.set(t, E, S && me(P) ? S.toDefaultUnit(P) : P);
    }
    return a && i(t, e, R, {
      duration: s,
      delay: c,
      easing: d,
      repeat: b,
      offset: g
    }, "motion-one"), I.setAnimation(l), l && !h && l.pause(), l;
  };
}
const Ln = (t, e) => (
  /**
   * TODO: Make test for this
   * Always return a new object otherwise delay is overwritten by results of stagger
   * and this results in no stagger
   */
  t[e] ? Object.assign(Object.assign({}, t), t[e]) : Object.assign({}, t)
);
function Dn(t, e) {
  var r;
  return typeof t == "string" ? e ? ((r = e[t]) !== null && r !== void 0 || (e[t] = document.querySelectorAll(t)), t = e[t]) : t = document.querySelectorAll(t) : t instanceof Element && (t = [t]), Array.from(t || []);
}
const Bn = (t) => t(), $o = (t, e, r = F.duration) => new Proxy({
  animations: t.map(Bn).filter(Boolean),
  duration: r,
  options: e
}, Wn), Un = (t) => t.animations[0], Wn = {
  get: (t, e) => {
    const r = Un(t);
    switch (e) {
      case "duration":
        return t.duration;
      case "currentTime":
        return zt.s((r == null ? void 0 : r[e]) || 0);
      case "playbackRate":
      case "playState":
        return r == null ? void 0 : r[e];
      case "finished":
        return t.finished || (t.finished = Promise.all(t.animations.map(jn)).catch(po)), t.finished;
      case "stop":
        return () => {
          t.animations.forEach((n) => xo(n));
        };
      case "forEachNative":
        return (n) => {
          t.animations.forEach((o) => n(o, t));
        };
      default:
        return typeof (r == null ? void 0 : r[e]) > "u" ? void 0 : () => t.animations.forEach((n) => n[e]());
    }
  },
  set: (t, e, r) => {
    switch (e) {
      case "currentTime":
        r = zt.ms(r);
      case "playbackRate":
        for (let n = 0; n < t.animations.length; n++)
          t.animations[n][e] = r;
        return !0;
    }
    return !1;
  }
}, jn = (t) => t.finished;
function Hn(t, e, r) {
  return It(t) ? t(e, r) : t;
}
function zn(t) {
  return function(e, r, n = {}) {
    e = Dn(e);
    const o = e.length;
    dr(!!o, "No valid element provided."), dr(!!r, "No keyframes defined.");
    const i = [];
    for (let a = 0; a < o; a++) {
      const l = e[a];
      for (const s in r) {
        const c = Ln(n, s);
        c.delay = Hn(c.delay, a, o);
        const m = Nn(l, s, r[s], c, t);
        i.push(m);
      }
    }
    return $o(
      i,
      n,
      /**
       * TODO:
       * If easing is set to spring or glide, duration will be dynamically
       * generated. Ideally we would dynamically generate this from
       * animation.effect.getComputedTiming().duration but this isn't
       * supported in iOS13 or our number polyfill. Perhaps it's possible
       * to Proxy animations returned from animateStyle that has duration
       * as a getter.
       */
      n.duration
    );
  };
}
const Zn = zn(vo);
function Fn(t, e = {}) {
  return $o([
    () => {
      const r = new vo(t, [0, 1], e);
      return r.finished.catch(() => {
      }), r;
    }
  ], e, e.duration);
}
function mt(t, e, r) {
  return (It(t) ? Fn : Zn)(t, e, r);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const W = (t) => t ?? D;
var Qt = {}, Vn = function() {
  return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
}, Co = {}, Z = {};
let xr;
const qn = [
  0,
  // Not used
  26,
  44,
  70,
  100,
  134,
  172,
  196,
  242,
  292,
  346,
  404,
  466,
  532,
  581,
  655,
  733,
  815,
  901,
  991,
  1085,
  1156,
  1258,
  1364,
  1474,
  1588,
  1706,
  1828,
  1921,
  2051,
  2185,
  2323,
  2465,
  2611,
  2761,
  2876,
  3034,
  3196,
  3362,
  3532,
  3706
];
Z.getSymbolSize = function(t) {
  if (!t)
    throw new Error('"version" cannot be null or undefined');
  if (t < 1 || t > 40)
    throw new Error('"version" should be in range from 1 to 40');
  return t * 4 + 17;
};
Z.getSymbolTotalCodewords = function(t) {
  return qn[t];
};
Z.getBCHDigit = function(t) {
  let e = 0;
  for (; t !== 0; )
    e++, t >>>= 1;
  return e;
};
Z.setToSJISFunction = function(t) {
  if (typeof t != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  xr = t;
};
Z.isKanjiModeEnabled = function() {
  return typeof xr < "u";
};
Z.toSJIS = function(t) {
  return xr(t);
};
var be = {};
(function(t) {
  t.L = { bit: 1 }, t.M = { bit: 0 }, t.Q = { bit: 3 }, t.H = { bit: 2 };
  function e(r) {
    if (typeof r != "string")
      throw new Error("Param is not a string");
    switch (r.toLowerCase()) {
      case "l":
      case "low":
        return t.L;
      case "m":
      case "medium":
        return t.M;
      case "q":
      case "quartile":
        return t.Q;
      case "h":
      case "high":
        return t.H;
      default:
        throw new Error("Unknown EC Level: " + r);
    }
  }
  t.isValid = function(r) {
    return r && typeof r.bit < "u" && r.bit >= 0 && r.bit < 4;
  }, t.from = function(r, n) {
    if (t.isValid(r))
      return r;
    try {
      return e(r);
    } catch {
      return n;
    }
  };
})(be);
function Eo() {
  this.buffer = [], this.length = 0;
}
Eo.prototype = {
  get: function(t) {
    const e = Math.floor(t / 8);
    return (this.buffer[e] >>> 7 - t % 8 & 1) === 1;
  },
  put: function(t, e) {
    for (let r = 0; r < e; r++)
      this.putBit((t >>> e - r - 1 & 1) === 1);
  },
  getLengthInBits: function() {
    return this.length;
  },
  putBit: function(t) {
    const e = Math.floor(this.length / 8);
    this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
  }
};
var Yn = Eo;
function Gt(t) {
  if (!t || t < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = t, this.data = new Uint8Array(t * t), this.reservedBit = new Uint8Array(t * t);
}
Gt.prototype.set = function(t, e, r, n) {
  const o = t * this.size + e;
  this.data[o] = r, n && (this.reservedBit[o] = !0);
};
Gt.prototype.get = function(t, e) {
  return this.data[t * this.size + e];
};
Gt.prototype.xor = function(t, e, r) {
  this.data[t * this.size + e] ^= r;
};
Gt.prototype.isReserved = function(t, e) {
  return this.reservedBit[t * this.size + e];
};
var Kn = Gt, Ao = {};
(function(t) {
  const e = Z.getSymbolSize;
  t.getRowColCoords = function(r) {
    if (r === 1)
      return [];
    const n = Math.floor(r / 7) + 2, o = e(r), i = o === 145 ? 26 : Math.ceil((o - 13) / (2 * n - 2)) * 2, a = [o - 7];
    for (let l = 1; l < n - 1; l++)
      a[l] = a[l - 1] - i;
    return a.push(6), a.reverse();
  }, t.getPositions = function(r) {
    const n = [], o = t.getRowColCoords(r), i = o.length;
    for (let a = 0; a < i; a++)
      for (let l = 0; l < i; l++)
        a === 0 && l === 0 || // top-left
        a === 0 && l === i - 1 || // bottom-left
        a === i - 1 && l === 0 || n.push([o[a], o[l]]);
    return n;
  };
})(Ao);
var _o = {};
const Jn = Z.getSymbolSize, Zr = 7;
_o.getPositions = function(t) {
  const e = Jn(t);
  return [
    // top-left
    [0, 0],
    // top-right
    [e - Zr, 0],
    // bottom-left
    [0, e - Zr]
  ];
};
var ko = {};
(function(t) {
  t.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  const e = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  };
  t.isValid = function(n) {
    return n != null && n !== "" && !isNaN(n) && n >= 0 && n <= 7;
  }, t.from = function(n) {
    return t.isValid(n) ? parseInt(n, 10) : void 0;
  }, t.getPenaltyN1 = function(n) {
    const o = n.size;
    let i = 0, a = 0, l = 0, s = null, c = null;
    for (let m = 0; m < o; m++) {
      a = l = 0, s = c = null;
      for (let b = 0; b < o; b++) {
        let d = n.get(m, b);
        d === s ? a++ : (a >= 5 && (i += e.N1 + (a - 5)), s = d, a = 1), d = n.get(b, m), d === c ? l++ : (l >= 5 && (i += e.N1 + (l - 5)), c = d, l = 1);
      }
      a >= 5 && (i += e.N1 + (a - 5)), l >= 5 && (i += e.N1 + (l - 5));
    }
    return i;
  }, t.getPenaltyN2 = function(n) {
    const o = n.size;
    let i = 0;
    for (let a = 0; a < o - 1; a++)
      for (let l = 0; l < o - 1; l++) {
        const s = n.get(a, l) + n.get(a, l + 1) + n.get(a + 1, l) + n.get(a + 1, l + 1);
        (s === 4 || s === 0) && i++;
      }
    return i * e.N2;
  }, t.getPenaltyN3 = function(n) {
    const o = n.size;
    let i = 0, a = 0, l = 0;
    for (let s = 0; s < o; s++) {
      a = l = 0;
      for (let c = 0; c < o; c++)
        a = a << 1 & 2047 | n.get(s, c), c >= 10 && (a === 1488 || a === 93) && i++, l = l << 1 & 2047 | n.get(c, s), c >= 10 && (l === 1488 || l === 93) && i++;
    }
    return i * e.N3;
  }, t.getPenaltyN4 = function(n) {
    let o = 0;
    const i = n.data.length;
    for (let a = 0; a < i; a++)
      o += n.data[a];
    return Math.abs(Math.ceil(o * 100 / i / 5) - 10) * e.N4;
  };
  function r(n, o, i) {
    switch (n) {
      case t.Patterns.PATTERN000:
        return (o + i) % 2 === 0;
      case t.Patterns.PATTERN001:
        return o % 2 === 0;
      case t.Patterns.PATTERN010:
        return i % 3 === 0;
      case t.Patterns.PATTERN011:
        return (o + i) % 3 === 0;
      case t.Patterns.PATTERN100:
        return (Math.floor(o / 2) + Math.floor(i / 3)) % 2 === 0;
      case t.Patterns.PATTERN101:
        return o * i % 2 + o * i % 3 === 0;
      case t.Patterns.PATTERN110:
        return (o * i % 2 + o * i % 3) % 2 === 0;
      case t.Patterns.PATTERN111:
        return (o * i % 3 + (o + i) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + n);
    }
  }
  t.applyMask = function(n, o) {
    const i = o.size;
    for (let a = 0; a < i; a++)
      for (let l = 0; l < i; l++)
        o.isReserved(l, a) || o.xor(l, a, r(n, l, a));
  }, t.getBestMask = function(n, o) {
    const i = Object.keys(t.Patterns).length;
    let a = 0, l = 1 / 0;
    for (let s = 0; s < i; s++) {
      o(s), t.applyMask(s, n);
      const c = t.getPenaltyN1(n) + t.getPenaltyN2(n) + t.getPenaltyN3(n) + t.getPenaltyN4(n);
      t.applyMask(s, n), c < l && (l = c, a = s);
    }
    return a;
  };
})(ko);
var ye = {};
const nt = be, te = [
  // L  M  Q  H
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  1,
  2,
  2,
  4,
  1,
  2,
  4,
  4,
  2,
  4,
  4,
  4,
  2,
  4,
  6,
  5,
  2,
  4,
  6,
  6,
  2,
  5,
  8,
  8,
  4,
  5,
  8,
  8,
  4,
  5,
  8,
  11,
  4,
  8,
  10,
  11,
  4,
  9,
  12,
  16,
  4,
  9,
  16,
  16,
  6,
  10,
  12,
  18,
  6,
  10,
  17,
  16,
  6,
  11,
  16,
  19,
  6,
  13,
  18,
  21,
  7,
  14,
  21,
  25,
  8,
  16,
  20,
  25,
  8,
  17,
  23,
  25,
  9,
  17,
  23,
  34,
  9,
  18,
  25,
  30,
  10,
  20,
  27,
  32,
  12,
  21,
  29,
  35,
  12,
  23,
  34,
  37,
  12,
  25,
  34,
  40,
  13,
  26,
  35,
  42,
  14,
  28,
  38,
  45,
  15,
  29,
  40,
  48,
  16,
  31,
  43,
  51,
  17,
  33,
  45,
  54,
  18,
  35,
  48,
  57,
  19,
  37,
  51,
  60,
  19,
  38,
  53,
  63,
  20,
  40,
  56,
  66,
  21,
  43,
  59,
  70,
  22,
  45,
  62,
  74,
  24,
  47,
  65,
  77,
  25,
  49,
  68,
  81
], ee = [
  // L  M  Q  H
  7,
  10,
  13,
  17,
  10,
  16,
  22,
  28,
  15,
  26,
  36,
  44,
  20,
  36,
  52,
  64,
  26,
  48,
  72,
  88,
  36,
  64,
  96,
  112,
  40,
  72,
  108,
  130,
  48,
  88,
  132,
  156,
  60,
  110,
  160,
  192,
  72,
  130,
  192,
  224,
  80,
  150,
  224,
  264,
  96,
  176,
  260,
  308,
  104,
  198,
  288,
  352,
  120,
  216,
  320,
  384,
  132,
  240,
  360,
  432,
  144,
  280,
  408,
  480,
  168,
  308,
  448,
  532,
  180,
  338,
  504,
  588,
  196,
  364,
  546,
  650,
  224,
  416,
  600,
  700,
  224,
  442,
  644,
  750,
  252,
  476,
  690,
  816,
  270,
  504,
  750,
  900,
  300,
  560,
  810,
  960,
  312,
  588,
  870,
  1050,
  336,
  644,
  952,
  1110,
  360,
  700,
  1020,
  1200,
  390,
  728,
  1050,
  1260,
  420,
  784,
  1140,
  1350,
  450,
  812,
  1200,
  1440,
  480,
  868,
  1290,
  1530,
  510,
  924,
  1350,
  1620,
  540,
  980,
  1440,
  1710,
  570,
  1036,
  1530,
  1800,
  570,
  1064,
  1590,
  1890,
  600,
  1120,
  1680,
  1980,
  630,
  1204,
  1770,
  2100,
  660,
  1260,
  1860,
  2220,
  720,
  1316,
  1950,
  2310,
  750,
  1372,
  2040,
  2430
];
ye.getBlocksCount = function(t, e) {
  switch (e) {
    case nt.L:
      return te[(t - 1) * 4 + 0];
    case nt.M:
      return te[(t - 1) * 4 + 1];
    case nt.Q:
      return te[(t - 1) * 4 + 2];
    case nt.H:
      return te[(t - 1) * 4 + 3];
    default:
      return;
  }
};
ye.getTotalCodewordsCount = function(t, e) {
  switch (e) {
    case nt.L:
      return ee[(t - 1) * 4 + 0];
    case nt.M:
      return ee[(t - 1) * 4 + 1];
    case nt.Q:
      return ee[(t - 1) * 4 + 2];
    case nt.H:
      return ee[(t - 1) * 4 + 3];
    default:
      return;
  }
};
var Oo = {}, xe = {};
const Zt = new Uint8Array(512), fe = new Uint8Array(256);
(function() {
  let t = 1;
  for (let e = 0; e < 255; e++)
    Zt[e] = t, fe[t] = e, t <<= 1, t & 256 && (t ^= 285);
  for (let e = 255; e < 512; e++)
    Zt[e] = Zt[e - 255];
})();
xe.log = function(t) {
  if (t < 1)
    throw new Error("log(" + t + ")");
  return fe[t];
};
xe.exp = function(t) {
  return Zt[t];
};
xe.mul = function(t, e) {
  return t === 0 || e === 0 ? 0 : Zt[fe[t] + fe[e]];
};
(function(t) {
  const e = xe;
  t.mul = function(r, n) {
    const o = new Uint8Array(r.length + n.length - 1);
    for (let i = 0; i < r.length; i++)
      for (let a = 0; a < n.length; a++)
        o[i + a] ^= e.mul(r[i], n[a]);
    return o;
  }, t.mod = function(r, n) {
    let o = new Uint8Array(r);
    for (; o.length - n.length >= 0; ) {
      const i = o[0];
      for (let l = 0; l < n.length; l++)
        o[l] ^= e.mul(n[l], i);
      let a = 0;
      for (; a < o.length && o[a] === 0; )
        a++;
      o = o.slice(a);
    }
    return o;
  }, t.generateECPolynomial = function(r) {
    let n = new Uint8Array([1]);
    for (let o = 0; o < r; o++)
      n = t.mul(n, new Uint8Array([1, e.exp(o)]));
    return n;
  };
})(Oo);
const Io = Oo;
function $r(t) {
  this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree);
}
$r.prototype.initialize = function(t) {
  this.degree = t, this.genPoly = Io.generateECPolynomial(this.degree);
};
$r.prototype.encode = function(t) {
  if (!this.genPoly)
    throw new Error("Encoder not initialized");
  const e = new Uint8Array(t.length + this.degree);
  e.set(t);
  const r = Io.mod(e, this.genPoly), n = this.degree - r.length;
  if (n > 0) {
    const o = new Uint8Array(this.degree);
    return o.set(r, n), o;
  }
  return r;
};
var Qn = $r, Mo = {}, lt = {}, Cr = {};
Cr.isValid = function(t) {
  return !isNaN(t) && t >= 1 && t <= 40;
};
var Y = {};
const To = "[0-9]+", Gn = "[A-Z $%*+\\-./:]+";
let Kt = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
Kt = Kt.replace(/u/g, "\\u");
const Xn = "(?:(?![A-Z0-9 $%*+\\-./:]|" + Kt + `)(?:.|[\r
]))+`;
Y.KANJI = new RegExp(Kt, "g");
Y.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
Y.BYTE = new RegExp(Xn, "g");
Y.NUMERIC = new RegExp(To, "g");
Y.ALPHANUMERIC = new RegExp(Gn, "g");
const ti = new RegExp("^" + Kt + "$"), ei = new RegExp("^" + To + "$"), ri = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
Y.testKanji = function(t) {
  return ti.test(t);
};
Y.testNumeric = function(t) {
  return ei.test(t);
};
Y.testAlphanumeric = function(t) {
  return ri.test(t);
};
(function(t) {
  const e = Cr, r = Y;
  t.NUMERIC = {
    id: "Numeric",
    bit: 1,
    ccBits: [10, 12, 14]
  }, t.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 2,
    ccBits: [9, 11, 13]
  }, t.BYTE = {
    id: "Byte",
    bit: 4,
    ccBits: [8, 16, 16]
  }, t.KANJI = {
    id: "Kanji",
    bit: 8,
    ccBits: [8, 10, 12]
  }, t.MIXED = {
    bit: -1
  }, t.getCharCountIndicator = function(o, i) {
    if (!o.ccBits)
      throw new Error("Invalid mode: " + o);
    if (!e.isValid(i))
      throw new Error("Invalid version: " + i);
    return i >= 1 && i < 10 ? o.ccBits[0] : i < 27 ? o.ccBits[1] : o.ccBits[2];
  }, t.getBestModeForData = function(o) {
    return r.testNumeric(o) ? t.NUMERIC : r.testAlphanumeric(o) ? t.ALPHANUMERIC : r.testKanji(o) ? t.KANJI : t.BYTE;
  }, t.toString = function(o) {
    if (o && o.id)
      return o.id;
    throw new Error("Invalid mode");
  }, t.isValid = function(o) {
    return o && o.bit && o.ccBits;
  };
  function n(o) {
    if (typeof o != "string")
      throw new Error("Param is not a string");
    switch (o.toLowerCase()) {
      case "numeric":
        return t.NUMERIC;
      case "alphanumeric":
        return t.ALPHANUMERIC;
      case "kanji":
        return t.KANJI;
      case "byte":
        return t.BYTE;
      default:
        throw new Error("Unknown mode: " + o);
    }
  }
  t.from = function(o, i) {
    if (t.isValid(o))
      return o;
    try {
      return n(o);
    } catch {
      return i;
    }
  };
})(lt);
(function(t) {
  const e = Z, r = ye, n = be, o = lt, i = Cr, a = 7973, l = e.getBCHDigit(a);
  function s(d, v, p) {
    for (let g = 1; g <= 40; g++)
      if (v <= t.getCapacity(g, p, d))
        return g;
  }
  function c(d, v) {
    return o.getCharCountIndicator(d, v) + 4;
  }
  function m(d, v) {
    let p = 0;
    return d.forEach(function(g) {
      const k = c(g.mode, v);
      p += k + g.getBitsLength();
    }), p;
  }
  function b(d, v) {
    for (let p = 1; p <= 40; p++)
      if (m(d, p) <= t.getCapacity(p, v, o.MIXED))
        return p;
  }
  t.from = function(d, v) {
    return i.isValid(d) ? parseInt(d, 10) : v;
  }, t.getCapacity = function(d, v, p) {
    if (!i.isValid(d))
      throw new Error("Invalid QR Code version");
    typeof p > "u" && (p = o.BYTE);
    const g = e.getSymbolTotalCodewords(d), k = r.getTotalCodewordsCount(d, v), h = (g - k) * 8;
    if (p === o.MIXED)
      return h;
    const w = h - c(p, d);
    switch (p) {
      case o.NUMERIC:
        return Math.floor(w / 10 * 3);
      case o.ALPHANUMERIC:
        return Math.floor(w / 11 * 2);
      case o.KANJI:
        return Math.floor(w / 13);
      case o.BYTE:
      default:
        return Math.floor(w / 8);
    }
  }, t.getBestVersionForData = function(d, v) {
    let p;
    const g = n.from(v, n.M);
    if (Array.isArray(d)) {
      if (d.length > 1)
        return b(d, g);
      if (d.length === 0)
        return 1;
      p = d[0];
    } else
      p = d;
    return s(p.mode, p.getLength(), g);
  }, t.getEncodedBits = function(d) {
    if (!i.isValid(d) || d < 7)
      throw new Error("Invalid QR Code version");
    let v = d << 12;
    for (; e.getBCHDigit(v) - l >= 0; )
      v ^= a << e.getBCHDigit(v) - l;
    return d << 12 | v;
  };
})(Mo);
var Po = {};
const mr = Z, Ro = 1335, oi = 21522, Fr = mr.getBCHDigit(Ro);
Po.getEncodedBits = function(t, e) {
  const r = t.bit << 3 | e;
  let n = r << 10;
  for (; mr.getBCHDigit(n) - Fr >= 0; )
    n ^= Ro << mr.getBCHDigit(n) - Fr;
  return (r << 10 | n) ^ oi;
};
var So = {};
const ni = lt;
function Mt(t) {
  this.mode = ni.NUMERIC, this.data = t.toString();
}
Mt.getBitsLength = function(t) {
  return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0);
};
Mt.prototype.getLength = function() {
  return this.data.length;
};
Mt.prototype.getBitsLength = function() {
  return Mt.getBitsLength(this.data.length);
};
Mt.prototype.write = function(t) {
  let e, r, n;
  for (e = 0; e + 3 <= this.data.length; e += 3)
    r = this.data.substr(e, 3), n = parseInt(r, 10), t.put(n, 10);
  const o = this.data.length - e;
  o > 0 && (r = this.data.substr(e), n = parseInt(r, 10), t.put(n, o * 3 + 1));
};
var ii = Mt;
const ai = lt, Re = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  " ",
  "$",
  "%",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":"
];
function Tt(t) {
  this.mode = ai.ALPHANUMERIC, this.data = t;
}
Tt.getBitsLength = function(t) {
  return 11 * Math.floor(t / 2) + 6 * (t % 2);
};
Tt.prototype.getLength = function() {
  return this.data.length;
};
Tt.prototype.getBitsLength = function() {
  return Tt.getBitsLength(this.data.length);
};
Tt.prototype.write = function(t) {
  let e;
  for (e = 0; e + 2 <= this.data.length; e += 2) {
    let r = Re.indexOf(this.data[e]) * 45;
    r += Re.indexOf(this.data[e + 1]), t.put(r, 11);
  }
  this.data.length % 2 && t.put(Re.indexOf(this.data[e]), 6);
};
var li = Tt, si = function(t) {
  for (var e = [], r = t.length, n = 0; n < r; n++) {
    var o = t.charCodeAt(n);
    if (o >= 55296 && o <= 56319 && r > n + 1) {
      var i = t.charCodeAt(n + 1);
      i >= 56320 && i <= 57343 && (o = (o - 55296) * 1024 + i - 56320 + 65536, n += 1);
    }
    if (o < 128) {
      e.push(o);
      continue;
    }
    if (o < 2048) {
      e.push(o >> 6 | 192), e.push(o & 63 | 128);
      continue;
    }
    if (o < 55296 || o >= 57344 && o < 65536) {
      e.push(o >> 12 | 224), e.push(o >> 6 & 63 | 128), e.push(o & 63 | 128);
      continue;
    }
    if (o >= 65536 && o <= 1114111) {
      e.push(o >> 18 | 240), e.push(o >> 12 & 63 | 128), e.push(o >> 6 & 63 | 128), e.push(o & 63 | 128);
      continue;
    }
    e.push(239, 191, 189);
  }
  return new Uint8Array(e).buffer;
};
const ci = si, di = lt;
function Pt(t) {
  this.mode = di.BYTE, typeof t == "string" && (t = ci(t)), this.data = new Uint8Array(t);
}
Pt.getBitsLength = function(t) {
  return t * 8;
};
Pt.prototype.getLength = function() {
  return this.data.length;
};
Pt.prototype.getBitsLength = function() {
  return Pt.getBitsLength(this.data.length);
};
Pt.prototype.write = function(t) {
  for (let e = 0, r = this.data.length; e < r; e++)
    t.put(this.data[e], 8);
};
var hi = Pt;
const ui = lt, mi = Z;
function Rt(t) {
  this.mode = ui.KANJI, this.data = t;
}
Rt.getBitsLength = function(t) {
  return t * 13;
};
Rt.prototype.getLength = function() {
  return this.data.length;
};
Rt.prototype.getBitsLength = function() {
  return Rt.getBitsLength(this.data.length);
};
Rt.prototype.write = function(t) {
  let e;
  for (e = 0; e < this.data.length; e++) {
    let r = mi.toSJIS(this.data[e]);
    if (r >= 33088 && r <= 40956)
      r -= 33088;
    else if (r >= 57408 && r <= 60351)
      r -= 49472;
    else
      throw new Error(
        "Invalid SJIS character: " + this.data[e] + `
Make sure your charset is UTF-8`
      );
    r = (r >>> 8 & 255) * 192 + (r & 255), t.put(r, 13);
  }
};
var pi = Rt, No = { exports: {} };
(function(t) {
  var e = {
    single_source_shortest_paths: function(r, n, o) {
      var i = {}, a = {};
      a[n] = 0;
      var l = e.PriorityQueue.make();
      l.push(n, 0);
      for (var s, c, m, b, d, v, p, g, k; !l.empty(); ) {
        s = l.pop(), c = s.value, b = s.cost, d = r[c] || {};
        for (m in d)
          d.hasOwnProperty(m) && (v = d[m], p = b + v, g = a[m], k = typeof a[m] > "u", (k || g > p) && (a[m] = p, l.push(m, p), i[m] = c));
      }
      if (typeof o < "u" && typeof a[o] > "u") {
        var h = ["Could not find a path from ", n, " to ", o, "."].join("");
        throw new Error(h);
      }
      return i;
    },
    extract_shortest_path_from_predecessor_list: function(r, n) {
      for (var o = [], i = n; i; )
        o.push(i), r[i], i = r[i];
      return o.reverse(), o;
    },
    find_path: function(r, n, o) {
      var i = e.single_source_shortest_paths(r, n, o);
      return e.extract_shortest_path_from_predecessor_list(
        i,
        o
      );
    },
    /**
     * A very naive priority queue implementation.
     */
    PriorityQueue: {
      make: function(r) {
        var n = e.PriorityQueue, o = {}, i;
        r = r || {};
        for (i in n)
          n.hasOwnProperty(i) && (o[i] = n[i]);
        return o.queue = [], o.sorter = r.sorter || n.default_sorter, o;
      },
      default_sorter: function(r, n) {
        return r.cost - n.cost;
      },
      /**
       * Add a new item to the queue and ensure the highest priority element
       * is at the front of the queue.
       */
      push: function(r, n) {
        var o = { value: r, cost: n };
        this.queue.push(o), this.queue.sort(this.sorter);
      },
      /**
       * Return the highest priority element in the queue.
       */
      pop: function() {
        return this.queue.shift();
      },
      empty: function() {
        return this.queue.length === 0;
      }
    }
  };
  t.exports = e;
})(No);
var gi = No.exports;
(function(t) {
  const e = lt, r = ii, n = li, o = hi, i = pi, a = Y, l = Z, s = gi;
  function c(h) {
    return unescape(encodeURIComponent(h)).length;
  }
  function m(h, w, f) {
    const y = [];
    let E;
    for (; (E = h.exec(f)) !== null; )
      y.push({
        data: E[0],
        index: E.index,
        mode: w,
        length: E[0].length
      });
    return y;
  }
  function b(h) {
    const w = m(a.NUMERIC, e.NUMERIC, h), f = m(a.ALPHANUMERIC, e.ALPHANUMERIC, h);
    let y, E;
    return l.isKanjiModeEnabled() ? (y = m(a.BYTE, e.BYTE, h), E = m(a.KANJI, e.KANJI, h)) : (y = m(a.BYTE_KANJI, e.BYTE, h), E = []), w.concat(f, y, E).sort(function(I, S) {
      return I.index - S.index;
    }).map(function(I) {
      return {
        data: I.data,
        mode: I.mode,
        length: I.length
      };
    });
  }
  function d(h, w) {
    switch (w) {
      case e.NUMERIC:
        return r.getBitsLength(h);
      case e.ALPHANUMERIC:
        return n.getBitsLength(h);
      case e.KANJI:
        return i.getBitsLength(h);
      case e.BYTE:
        return o.getBitsLength(h);
    }
  }
  function v(h) {
    return h.reduce(function(w, f) {
      const y = w.length - 1 >= 0 ? w[w.length - 1] : null;
      return y && y.mode === f.mode ? (w[w.length - 1].data += f.data, w) : (w.push(f), w);
    }, []);
  }
  function p(h) {
    const w = [];
    for (let f = 0; f < h.length; f++) {
      const y = h[f];
      switch (y.mode) {
        case e.NUMERIC:
          w.push([
            y,
            { data: y.data, mode: e.ALPHANUMERIC, length: y.length },
            { data: y.data, mode: e.BYTE, length: y.length }
          ]);
          break;
        case e.ALPHANUMERIC:
          w.push([
            y,
            { data: y.data, mode: e.BYTE, length: y.length }
          ]);
          break;
        case e.KANJI:
          w.push([
            y,
            { data: y.data, mode: e.BYTE, length: c(y.data) }
          ]);
          break;
        case e.BYTE:
          w.push([
            { data: y.data, mode: e.BYTE, length: c(y.data) }
          ]);
      }
    }
    return w;
  }
  function g(h, w) {
    const f = {}, y = { start: {} };
    let E = ["start"];
    for (let I = 0; I < h.length; I++) {
      const S = h[I], U = [];
      for (let R = 0; R < S.length; R++) {
        const z = S[R], P = "" + I + R;
        U.push(P), f[P] = { node: z, lastCount: 0 }, y[P] = {};
        for (let K = 0; K < E.length; K++) {
          const B = E[K];
          f[B] && f[B].node.mode === z.mode ? (y[B][P] = d(f[B].lastCount + z.length, z.mode) - d(f[B].lastCount, z.mode), f[B].lastCount += z.length) : (f[B] && (f[B].lastCount = z.length), y[B][P] = d(z.length, z.mode) + 4 + e.getCharCountIndicator(z.mode, w));
        }
      }
      E = U;
    }
    for (let I = 0; I < E.length; I++)
      y[E[I]].end = 0;
    return { map: y, table: f };
  }
  function k(h, w) {
    let f;
    const y = e.getBestModeForData(h);
    if (f = e.from(w, y), f !== e.BYTE && f.bit < y.bit)
      throw new Error('"' + h + '" cannot be encoded with mode ' + e.toString(f) + `.
 Suggested mode is: ` + e.toString(y));
    switch (f === e.KANJI && !l.isKanjiModeEnabled() && (f = e.BYTE), f) {
      case e.NUMERIC:
        return new r(h);
      case e.ALPHANUMERIC:
        return new n(h);
      case e.KANJI:
        return new i(h);
      case e.BYTE:
        return new o(h);
    }
  }
  t.fromArray = function(h) {
    return h.reduce(function(w, f) {
      return typeof f == "string" ? w.push(k(f, null)) : f.data && w.push(k(f.data, f.mode)), w;
    }, []);
  }, t.fromString = function(h, w) {
    const f = b(h, l.isKanjiModeEnabled()), y = p(f), E = g(y, w), I = s.find_path(E.map, "start", "end"), S = [];
    for (let U = 1; U < I.length - 1; U++)
      S.push(E.table[I[U]].node);
    return t.fromArray(v(S));
  }, t.rawSplit = function(h) {
    return t.fromArray(
      b(h, l.isKanjiModeEnabled())
    );
  };
})(So);
const $e = Z, Se = be, fi = Yn, wi = Kn, vi = Ao, bi = _o, pr = ko, gr = ye, yi = Qn, we = Mo, xi = Po, $i = lt, Ne = So;
function Ci(t, e) {
  const r = t.size, n = bi.getPositions(e);
  for (let o = 0; o < n.length; o++) {
    const i = n[o][0], a = n[o][1];
    for (let l = -1; l <= 7; l++)
      if (!(i + l <= -1 || r <= i + l))
        for (let s = -1; s <= 7; s++)
          a + s <= -1 || r <= a + s || (l >= 0 && l <= 6 && (s === 0 || s === 6) || s >= 0 && s <= 6 && (l === 0 || l === 6) || l >= 2 && l <= 4 && s >= 2 && s <= 4 ? t.set(i + l, a + s, !0, !0) : t.set(i + l, a + s, !1, !0));
  }
}
function Ei(t) {
  const e = t.size;
  for (let r = 8; r < e - 8; r++) {
    const n = r % 2 === 0;
    t.set(r, 6, n, !0), t.set(6, r, n, !0);
  }
}
function Ai(t, e) {
  const r = vi.getPositions(e);
  for (let n = 0; n < r.length; n++) {
    const o = r[n][0], i = r[n][1];
    for (let a = -2; a <= 2; a++)
      for (let l = -2; l <= 2; l++)
        a === -2 || a === 2 || l === -2 || l === 2 || a === 0 && l === 0 ? t.set(o + a, i + l, !0, !0) : t.set(o + a, i + l, !1, !0);
  }
}
function _i(t, e) {
  const r = t.size, n = we.getEncodedBits(e);
  let o, i, a;
  for (let l = 0; l < 18; l++)
    o = Math.floor(l / 3), i = l % 3 + r - 8 - 3, a = (n >> l & 1) === 1, t.set(o, i, a, !0), t.set(i, o, a, !0);
}
function Le(t, e, r) {
  const n = t.size, o = xi.getEncodedBits(e, r);
  let i, a;
  for (i = 0; i < 15; i++)
    a = (o >> i & 1) === 1, i < 6 ? t.set(i, 8, a, !0) : i < 8 ? t.set(i + 1, 8, a, !0) : t.set(n - 15 + i, 8, a, !0), i < 8 ? t.set(8, n - i - 1, a, !0) : i < 9 ? t.set(8, 15 - i - 1 + 1, a, !0) : t.set(8, 15 - i - 1, a, !0);
  t.set(n - 8, 8, 1, !0);
}
function ki(t, e) {
  const r = t.size;
  let n = -1, o = r - 1, i = 7, a = 0;
  for (let l = r - 1; l > 0; l -= 2)
    for (l === 6 && l--; ; ) {
      for (let s = 0; s < 2; s++)
        if (!t.isReserved(o, l - s)) {
          let c = !1;
          a < e.length && (c = (e[a] >>> i & 1) === 1), t.set(o, l - s, c), i--, i === -1 && (a++, i = 7);
        }
      if (o += n, o < 0 || r <= o) {
        o -= n, n = -n;
        break;
      }
    }
}
function Oi(t, e, r) {
  const n = new fi();
  r.forEach(function(s) {
    n.put(s.mode.bit, 4), n.put(s.getLength(), $i.getCharCountIndicator(s.mode, t)), s.write(n);
  });
  const o = $e.getSymbolTotalCodewords(t), i = gr.getTotalCodewordsCount(t, e), a = (o - i) * 8;
  for (n.getLengthInBits() + 4 <= a && n.put(0, 4); n.getLengthInBits() % 8 !== 0; )
    n.putBit(0);
  const l = (a - n.getLengthInBits()) / 8;
  for (let s = 0; s < l; s++)
    n.put(s % 2 ? 17 : 236, 8);
  return Ii(n, t, e);
}
function Ii(t, e, r) {
  const n = $e.getSymbolTotalCodewords(e), o = gr.getTotalCodewordsCount(e, r), i = n - o, a = gr.getBlocksCount(e, r), l = n % a, s = a - l, c = Math.floor(n / a), m = Math.floor(i / a), b = m + 1, d = c - m, v = new yi(d);
  let p = 0;
  const g = new Array(a), k = new Array(a);
  let h = 0;
  const w = new Uint8Array(t.buffer);
  for (let S = 0; S < a; S++) {
    const U = S < s ? m : b;
    g[S] = w.slice(p, p + U), k[S] = v.encode(g[S]), p += U, h = Math.max(h, U);
  }
  const f = new Uint8Array(n);
  let y = 0, E, I;
  for (E = 0; E < h; E++)
    for (I = 0; I < a; I++)
      E < g[I].length && (f[y++] = g[I][E]);
  for (E = 0; E < d; E++)
    for (I = 0; I < a; I++)
      f[y++] = k[I][E];
  return f;
}
function Mi(t, e, r, n) {
  let o;
  if (Array.isArray(t))
    o = Ne.fromArray(t);
  else if (typeof t == "string") {
    let c = e;
    if (!c) {
      const m = Ne.rawSplit(t);
      c = we.getBestVersionForData(m, r);
    }
    o = Ne.fromString(t, c || 40);
  } else
    throw new Error("Invalid data");
  const i = we.getBestVersionForData(o, r);
  if (!i)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!e)
    e = i;
  else if (e < i)
    throw new Error(
      `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + i + `.
`
    );
  const a = Oi(e, r, o), l = $e.getSymbolSize(e), s = new wi(l);
  return Ci(s, e), Ei(s), Ai(s, e), Le(s, r, 0), e >= 7 && _i(s, e), ki(s, a), isNaN(n) && (n = pr.getBestMask(
    s,
    Le.bind(null, s, r)
  )), pr.applyMask(n, s), Le(s, r, n), {
    modules: s,
    version: e,
    errorCorrectionLevel: r,
    maskPattern: n,
    segments: o
  };
}
Co.create = function(t, e) {
  if (typeof t > "u" || t === "")
    throw new Error("No input text");
  let r = Se.M, n, o;
  return typeof e < "u" && (r = Se.from(e.errorCorrectionLevel, Se.M), n = we.from(e.version), o = pr.from(e.maskPattern), e.toSJISFunc && $e.setToSJISFunction(e.toSJISFunc)), Mi(t, n, r, o);
};
var Lo = {}, Er = {};
(function(t) {
  function e(r) {
    if (typeof r == "number" && (r = r.toString()), typeof r != "string")
      throw new Error("Color should be defined as hex string");
    let n = r.slice().replace("#", "").split("");
    if (n.length < 3 || n.length === 5 || n.length > 8)
      throw new Error("Invalid hex color: " + r);
    (n.length === 3 || n.length === 4) && (n = Array.prototype.concat.apply([], n.map(function(i) {
      return [i, i];
    }))), n.length === 6 && n.push("F", "F");
    const o = parseInt(n.join(""), 16);
    return {
      r: o >> 24 & 255,
      g: o >> 16 & 255,
      b: o >> 8 & 255,
      a: o & 255,
      hex: "#" + n.slice(0, 6).join("")
    };
  }
  t.getOptions = function(r) {
    r || (r = {}), r.color || (r.color = {});
    const n = typeof r.margin > "u" || r.margin === null || r.margin < 0 ? 4 : r.margin, o = r.width && r.width >= 21 ? r.width : void 0, i = r.scale || 4;
    return {
      width: o,
      scale: o ? 4 : i,
      margin: n,
      color: {
        dark: e(r.color.dark || "#000000ff"),
        light: e(r.color.light || "#ffffffff")
      },
      type: r.type,
      rendererOpts: r.rendererOpts || {}
    };
  }, t.getScale = function(r, n) {
    return n.width && n.width >= r + n.margin * 2 ? n.width / (r + n.margin * 2) : n.scale;
  }, t.getImageWidth = function(r, n) {
    const o = t.getScale(r, n);
    return Math.floor((r + n.margin * 2) * o);
  }, t.qrToImageData = function(r, n, o) {
    const i = n.modules.size, a = n.modules.data, l = t.getScale(i, o), s = Math.floor((i + o.margin * 2) * l), c = o.margin * l, m = [o.color.light, o.color.dark];
    for (let b = 0; b < s; b++)
      for (let d = 0; d < s; d++) {
        let v = (b * s + d) * 4, p = o.color.light;
        if (b >= c && d >= c && b < s - c && d < s - c) {
          const g = Math.floor((b - c) / l), k = Math.floor((d - c) / l);
          p = m[a[g * i + k] ? 1 : 0];
        }
        r[v++] = p.r, r[v++] = p.g, r[v++] = p.b, r[v] = p.a;
      }
  };
})(Er);
(function(t) {
  const e = Er;
  function r(o, i, a) {
    o.clearRect(0, 0, i.width, i.height), i.style || (i.style = {}), i.height = a, i.width = a, i.style.height = a + "px", i.style.width = a + "px";
  }
  function n() {
    try {
      return document.createElement("canvas");
    } catch {
      throw new Error("You need to specify a canvas element");
    }
  }
  t.render = function(o, i, a) {
    let l = a, s = i;
    typeof l > "u" && (!i || !i.getContext) && (l = i, i = void 0), i || (s = n()), l = e.getOptions(l);
    const c = e.getImageWidth(o.modules.size, l), m = s.getContext("2d"), b = m.createImageData(c, c);
    return e.qrToImageData(b.data, o, l), r(m, s, c), m.putImageData(b, 0, 0), s;
  }, t.renderToDataURL = function(o, i, a) {
    let l = a;
    typeof l > "u" && (!i || !i.getContext) && (l = i, i = void 0), l || (l = {});
    const s = t.render(o, i, l), c = l.type || "image/png", m = l.rendererOpts || {};
    return s.toDataURL(c, m.quality);
  };
})(Lo);
var Do = {};
const Ti = Er;
function Vr(t, e) {
  const r = t.a / 255, n = e + '="' + t.hex + '"';
  return r < 1 ? n + " " + e + '-opacity="' + r.toFixed(2).slice(1) + '"' : n;
}
function De(t, e, r) {
  let n = t + e;
  return typeof r < "u" && (n += " " + r), n;
}
function Pi(t, e, r) {
  let n = "", o = 0, i = !1, a = 0;
  for (let l = 0; l < t.length; l++) {
    const s = Math.floor(l % e), c = Math.floor(l / e);
    !s && !i && (i = !0), t[l] ? (a++, l > 0 && s > 0 && t[l - 1] || (n += i ? De("M", s + r, 0.5 + c + r) : De("m", o, 0), o = 0, i = !1), s + 1 < e && t[l + 1] || (n += De("h", a), a = 0)) : o++;
  }
  return n;
}
Do.render = function(t, e, r) {
  const n = Ti.getOptions(e), o = t.modules.size, i = t.modules.data, a = o + n.margin * 2, l = n.color.light.a ? "<path " + Vr(n.color.light, "fill") + ' d="M0 0h' + a + "v" + a + 'H0z"/>' : "", s = "<path " + Vr(n.color.dark, "stroke") + ' d="' + Pi(i, o, n.margin) + '"/>', c = 'viewBox="0 0 ' + a + " " + a + '"', m = '<svg xmlns="http://www.w3.org/2000/svg" ' + (n.width ? 'width="' + n.width + '" height="' + n.width + '" ' : "") + c + ' shape-rendering="crispEdges">' + l + s + `</svg>
`;
  return typeof r == "function" && r(null, m), m;
};
const Ri = Vn, fr = Co, Bo = Lo, Si = Do;
function Ar(t, e, r, n, o) {
  const i = [].slice.call(arguments, 1), a = i.length, l = typeof i[a - 1] == "function";
  if (!l && !Ri())
    throw new Error("Callback required as last argument");
  if (l) {
    if (a < 2)
      throw new Error("Too few arguments provided");
    a === 2 ? (o = r, r = e, e = n = void 0) : a === 3 && (e.getContext && typeof o > "u" ? (o = n, n = void 0) : (o = n, n = r, r = e, e = void 0));
  } else {
    if (a < 1)
      throw new Error("Too few arguments provided");
    return a === 1 ? (r = e, e = n = void 0) : a === 2 && !e.getContext && (n = r, r = e, e = void 0), new Promise(function(s, c) {
      try {
        const m = fr.create(r, n);
        s(t(m, e, n));
      } catch (m) {
        c(m);
      }
    });
  }
  try {
    const s = fr.create(r, n);
    o(null, t(s, e, n));
  } catch (s) {
    o(s);
  }
}
Qt.create = fr.create;
Qt.toCanvas = Ar.bind(null, Bo.render);
Qt.toDataURL = Ar.bind(null, Bo.renderToDataURL);
Qt.toString = Ar.bind(null, function(t, e, r) {
  return Si.render(t, r);
});
var Ni = Object.defineProperty, qr = Object.getOwnPropertySymbols, Li = Object.prototype.hasOwnProperty, Di = Object.prototype.propertyIsEnumerable, Yr = (t, e, r) => e in t ? Ni(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Be = (t, e) => {
  for (var r in e || (e = {}))
    Li.call(e, r) && Yr(t, r, e[r]);
  if (qr)
    for (var r of qr(e))
      Di.call(e, r) && Yr(t, r, e[r]);
  return t;
};
function Bi() {
  var t;
  const e = (t = _t.state.themeMode) != null ? t : "dark", r = { light: { foreground: { 1: "rgb(20,20,20)", 2: "rgb(121,134,134)", 3: "rgb(158,169,169)" }, background: { 1: "rgb(255,255,255)", 2: "rgb(241,243,243)", 3: "rgb(228,231,231)" }, overlay: "rgba(0,0,0,0.1)" }, dark: { foreground: { 1: "rgb(228,231,231)", 2: "rgb(148,158,158)", 3: "rgb(110,119,119)" }, background: { 1: "rgb(20,20,20)", 2: "rgb(39,42,42)", 3: "rgb(59,64,64)" }, overlay: "rgba(255,255,255,0.1)" } }[e];
  return { "--wcm-color-fg-1": r.foreground[1], "--wcm-color-fg-2": r.foreground[2], "--wcm-color-fg-3": r.foreground[3], "--wcm-color-bg-1": r.background[1], "--wcm-color-bg-2": r.background[2], "--wcm-color-bg-3": r.background[3], "--wcm-color-overlay": r.overlay };
}
function Kr() {
  return { "--wcm-accent-color": "#3396FF", "--wcm-accent-fill-color": "#FFFFFF", "--wcm-z-index": "89", "--wcm-background-color": "#3396FF", "--wcm-background-border-radius": "8px", "--wcm-container-border-radius": "30px", "--wcm-wallet-icon-border-radius": "15px", "--wcm-wallet-icon-large-border-radius": "30px", "--wcm-wallet-icon-small-border-radius": "7px", "--wcm-input-border-radius": "28px", "--wcm-button-border-radius": "10px", "--wcm-notification-border-radius": "36px", "--wcm-secondary-button-border-radius": "28px", "--wcm-icon-button-border-radius": "50%", "--wcm-button-hover-highlight-border-radius": "10px", "--wcm-text-big-bold-size": "20px", "--wcm-text-big-bold-weight": "600", "--wcm-text-big-bold-line-height": "24px", "--wcm-text-big-bold-letter-spacing": "-0.03em", "--wcm-text-big-bold-text-transform": "none", "--wcm-text-xsmall-bold-size": "10px", "--wcm-text-xsmall-bold-weight": "700", "--wcm-text-xsmall-bold-line-height": "12px", "--wcm-text-xsmall-bold-letter-spacing": "0.02em", "--wcm-text-xsmall-bold-text-transform": "uppercase", "--wcm-text-xsmall-regular-size": "12px", "--wcm-text-xsmall-regular-weight": "600", "--wcm-text-xsmall-regular-line-height": "14px", "--wcm-text-xsmall-regular-letter-spacing": "-0.03em", "--wcm-text-xsmall-regular-text-transform": "none", "--wcm-text-small-thin-size": "14px", "--wcm-text-small-thin-weight": "500", "--wcm-text-small-thin-line-height": "16px", "--wcm-text-small-thin-letter-spacing": "-0.03em", "--wcm-text-small-thin-text-transform": "none", "--wcm-text-small-regular-size": "14px", "--wcm-text-small-regular-weight": "600", "--wcm-text-small-regular-line-height": "16px", "--wcm-text-small-regular-letter-spacing": "-0.03em", "--wcm-text-small-regular-text-transform": "none", "--wcm-text-medium-regular-size": "16px", "--wcm-text-medium-regular-weight": "600", "--wcm-text-medium-regular-line-height": "20px", "--wcm-text-medium-regular-letter-spacing": "-0.03em", "--wcm-text-medium-regular-text-transform": "none", "--wcm-font-family": "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif", "--wcm-font-feature-settings": "'tnum' on, 'lnum' on, 'case' on", "--wcm-success-color": "rgb(38,181,98)", "--wcm-error-color": "rgb(242, 90, 103)", "--wcm-overlay-background-color": "rgba(0, 0, 0, 0.3)", "--wcm-overlay-backdrop-filter": "none" };
}
const _ = { getPreset(t) {
  return Kr()[t];
}, setTheme() {
  const t = document.querySelector(":root"), { themeVariables: e } = _t.state;
  if (t) {
    const r = Be(Be(Be({}, Bi()), Kr()), e);
    Object.entries(r).forEach(([n, o]) => t.style.setProperty(n, o));
  }
}, globalCss: M`*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button wcm-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--wcm-accent-fill-color);background:var(--wcm-accent-color)}` }, Ui = M`button{border-radius:var(--wcm-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--wcm-accent-color)}button path{fill:var(--wcm-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--wcm-color-overlay)}button:disabled::after{background-color:transparent}.wcm-icon-left svg{margin-right:5px}.wcm-icon-right svg{margin-left:5px}button:active::after{background-color:var(--wcm-color-overlay)}.wcm-ghost,.wcm-ghost:active::after,.wcm-outline{background-color:transparent}.wcm-ghost:active{opacity:.5}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}.wcm-ghost:hover::after{background-color:transparent}.wcm-ghost:hover{opacity:.5}}button:disabled{background-color:var(--wcm-color-bg-3);pointer-events:none}.wcm-ghost::after{border-color:transparent}.wcm-ghost path{fill:var(--wcm-color-fg-2)}.wcm-outline path{fill:var(--wcm-accent-color)}.wcm-outline:disabled{background-color:transparent;opacity:.5}`;
var Wi = Object.defineProperty, ji = Object.getOwnPropertyDescriptor, wt = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? ji(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && Wi(e, r, o), o;
};
let G = class extends A {
  constructor() {
    super(...arguments), this.disabled = !1, this.iconLeft = void 0, this.iconRight = void 0, this.onClick = () => null, this.variant = "default";
  }
  render() {
    const t = { "wcm-icon-left": this.iconLeft !== void 0, "wcm-icon-right": this.iconRight !== void 0, "wcm-ghost": this.variant === "ghost", "wcm-outline": this.variant === "outline" };
    let e = "inverse";
    return this.variant === "ghost" && (e = "secondary"), this.variant === "outline" && (e = "accent"), u`<button class="${Q(t)}" ?disabled="${this.disabled}" @click="${this.onClick}">${this.iconLeft}<wcm-text variant="small-regular" color="${e}"><slot></slot></wcm-text>${this.iconRight}</button>`;
  }
};
G.styles = [_.globalCss, Ui], wt([$({ type: Boolean })], G.prototype, "disabled", 2), wt([$()], G.prototype, "iconLeft", 2), wt([$()], G.prototype, "iconRight", 2), wt([$()], G.prototype, "onClick", 2), wt([$()], G.prototype, "variant", 2), G = wt([O("wcm-button")], G);
const Hi = M`:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--wcm-button-border-radius);color:var(--wcm-accent-fill-color);background-color:var(--wcm-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--wcm-color-overlay)}button:active::after{background-color:var(--wcm-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--wcm-color-bg-3);color:var(--wcm-color-fg-3)}.wcm-secondary{color:var(--wcm-accent-color);background-color:transparent}.wcm-secondary::after{display:none}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}}`;
var zi = Object.defineProperty, Zi = Object.getOwnPropertyDescriptor, Ue = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? Zi(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && zi(e, r, o), o;
};
let Nt = class extends A {
  constructor() {
    super(...arguments), this.disabled = !1, this.variant = "primary";
  }
  render() {
    const t = { "wcm-secondary": this.variant === "secondary" };
    return u`<button ?disabled="${this.disabled}" class="${Q(t)}"><slot></slot></button>`;
  }
};
Nt.styles = [_.globalCss, Hi], Ue([$({ type: Boolean })], Nt.prototype, "disabled", 2), Ue([$()], Nt.prototype, "variant", 2), Nt = Ue([O("wcm-button-big")], Nt);
const Fi = M`:host{background-color:var(--wcm-color-bg-2);border-top:1px solid var(--wcm-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}`;
var Vi = Object.defineProperty, qi = Object.getOwnPropertyDescriptor, Yi = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? qi(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && Vi(e, r, o), o;
};
let We = class extends A {
  render() {
    return u`<div><slot></slot></div>`;
  }
};
We.styles = [_.globalCss, Fi], We = Yi([O("wcm-info-footer")], We);
const T = { CROSS_ICON: N`<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`, WALLET_CONNECT_LOGO: N`<svg width="178" height="29" viewBox="0 0 178 29" id="wcm-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`, WALLET_CONNECT_ICON: N`<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`, WALLET_CONNECT_ICON_COLORED: N`<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`, BACK_ICON: N`<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`, COPY_ICON: N`<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`, RETRY_ICON: N`<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`, DESKTOP_ICON: N`<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`, MOBILE_ICON: N`<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`, ARROW_DOWN_ICON: N`<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`, ARROW_UP_RIGHT_ICON: N`<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`, ARROW_RIGHT_ICON: N`<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`, QRCODE_ICON: N`<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`, SCAN_ICON: N`<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`, CHECKMARK_ICON: N`<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`, SEARCH_ICON: N`<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`, WALLET_PLACEHOLDER: N`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`, GLOBE_ICON: N`<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>` }, Ki = M`.wcm-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--wcm-background-border-radius) * .9);background-color:var(--wcm-background-color);background-position:center;background-size:cover}.wcm-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.wcm-toolbar img,.wcm-toolbar svg{height:28px;object-position:left center;object-fit:contain}#wcm-wc-logo path{fill:var(--wcm-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--wcm-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--wcm-color-bg-1);box-shadow:0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--wcm-color-fg-1)}.wcm-toolbar div{display:flex}@media(hover:hover){button:hover{background-color:var(--wcm-color-bg-2)}}`;
var Ji = Object.defineProperty, Qi = Object.getOwnPropertyDescriptor, Gi = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? Qi(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && Ji(e, r, o), o;
};
let je = class extends A {
  render() {
    return u`<div class="wcm-toolbar-placeholder"></div><div class="wcm-toolbar">${T.WALLET_CONNECT_LOGO} <button @click="${ce.close}">${T.CROSS_ICON}</button></div>`;
  }
};
je.styles = [_.globalCss, Ki], je = Gi([O("wcm-modal-backcard")], je);
const Xi = M`main{padding:20px;padding-top:0;width:100%}`;
var ta = Object.defineProperty, ea = Object.getOwnPropertyDescriptor, ra = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? ea(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && ta(e, r, o), o;
};
let He = class extends A {
  render() {
    return u`<main><slot></slot></main>`;
  }
};
He.styles = [_.globalCss, Xi], He = ra([O("wcm-modal-content")], He);
const oa = M`footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--wcm-color-bg-2)}`;
var na = Object.defineProperty, ia = Object.getOwnPropertyDescriptor, aa = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? ia(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && na(e, r, o), o;
};
let ze = class extends A {
  render() {
    return u`<footer><slot></slot></footer>`;
  }
};
ze.styles = [_.globalCss, oa], ze = aa([O("wcm-modal-footer")], ze);
const la = M`header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.wcm-border{border-bottom:1px solid var(--wcm-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}header button:active{opacity:.5}@media(hover:hover){header button:hover{opacity:.5}}.wcm-back-btn{position:absolute;left:0}.wcm-action-btn{position:absolute;right:0}path{fill:var(--wcm-accent-color)}`;
var sa = Object.defineProperty, ca = Object.getOwnPropertyDescriptor, Lt = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? ca(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && sa(e, r, o), o;
};
let ct = class extends A {
  constructor() {
    super(...arguments), this.title = "", this.onAction = void 0, this.actionIcon = void 0, this.border = !1;
  }
  backBtnTemplate() {
    return u`<button class="wcm-back-btn" @click="${L.goBack}">${T.BACK_ICON}</button>`;
  }
  actionBtnTemplate() {
    return u`<button class="wcm-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`;
  }
  render() {
    const t = { "wcm-border": this.border }, e = L.state.history.length > 1, r = this.title ? u`<wcm-text variant="big-bold">${this.title}</wcm-text>` : u`<slot></slot>`;
    return u`<header class="${Q(t)}">${e ? this.backBtnTemplate() : null} ${r} ${this.onAction ? this.actionBtnTemplate() : null}</header>`;
  }
};
ct.styles = [_.globalCss, la], Lt([$()], ct.prototype, "title", 2), Lt([$()], ct.prototype, "onAction", 2), Lt([$()], ct.prototype, "actionIcon", 2), Lt([$({ type: Boolean })], ct.prototype, "border", 2), ct = Lt([O("wcm-modal-header")], ct);
const x = { MOBILE_BREAKPOINT: 600, WCM_RECENT_WALLET_DATA: "WCM_RECENT_WALLET_DATA", EXPLORER_WALLET_URL: "https://explorer.walletconnect.com/?type=wallet", getShadowRootElement(t, e) {
  const r = t.renderRoot.querySelector(e);
  if (!r)
    throw new Error(`${e} not found`);
  return r;
}, getWalletIcon({ id: t, image_id: e }) {
  const { walletImages: r } = pt.state;
  return r != null && r[t] ? r[t] : e ? j.getWalletImageUrl(e) : "";
}, getWalletName(t, e = !1) {
  return e && t.length > 8 ? `${t.substring(0, 8)}..` : t;
}, isMobileAnimation() {
  return window.innerWidth <= x.MOBILE_BREAKPOINT;
}, async preloadImage(t) {
  const e = new Promise((r, n) => {
    const o = new Image();
    o.onload = r, o.onerror = n, o.crossOrigin = "anonymous", o.src = t;
  });
  return Promise.race([e, C.wait(3e3)]);
}, getErrorMessage(t) {
  return t instanceof Error ? t.message : "Unknown Error";
}, debounce(t, e = 500) {
  let r;
  return (...n) => {
    function o() {
      t(...n);
    }
    r && clearTimeout(r), r = setTimeout(o, e);
  };
}, handleMobileLinking(t) {
  const { walletConnectUri: e } = q.state, { mobile: r, name: n } = t, o = r == null ? void 0 : r.native, i = r == null ? void 0 : r.universal;
  x.setRecentWallet(t);
  function a(l) {
    let s = "";
    o ? s = C.formatUniversalUrl(o, l, n) : i && (s = C.formatNativeUrl(i, l, n)), C.openHref(s, "_self");
  }
  e && a(e);
}, handleAndroidLinking() {
  const { walletConnectUri: t } = q.state;
  t && (C.setWalletConnectAndroidDeepLink(t), C.openHref(t, "_self"));
}, async handleUriCopy() {
  const { walletConnectUri: t } = q.state;
  if (t)
    try {
      await navigator.clipboard.writeText(t), ot.openToast("Link copied", "success");
    } catch {
      ot.openToast("Failed to copy", "error");
    }
}, getCustomImageUrls() {
  const { walletImages: t } = pt.state, e = Object.values(t ?? {});
  return Object.values(e);
}, truncate(t, e = 8) {
  return t.length <= e ? t : `${t.substring(0, 4)}...${t.substring(t.length - 4)}`;
}, setRecentWallet(t) {
  try {
    localStorage.setItem(x.WCM_RECENT_WALLET_DATA, JSON.stringify(t));
  } catch {
    console.info("Unable to set recent wallet");
  }
}, getRecentWallet() {
  try {
    const t = localStorage.getItem(x.WCM_RECENT_WALLET_DATA);
    return t ? JSON.parse(t) : void 0;
  } catch {
    console.info("Unable to get recent wallet");
  }
}, caseSafeIncludes(t, e) {
  return t.toUpperCase().includes(e.toUpperCase());
}, openWalletExplorerUrl() {
  C.openHref(x.EXPLORER_WALLET_URL, "_blank");
}, getCachedRouterWalletPlatforms() {
  const { desktop: t, mobile: e } = C.getWalletRouterData(), r = !!(t != null && t.native), n = !!(t != null && t.universal), o = !!(e != null && e.native) || !!(e != null && e.universal);
  return { isDesktop: r, isMobile: o, isWeb: n };
}, goToConnectingView(t) {
  L.setData({ Wallet: t });
  const e = C.isMobile(), { isDesktop: r, isWeb: n, isMobile: o } = x.getCachedRouterWalletPlatforms();
  e ? o ? L.push("MobileConnecting") : n ? L.push("WebConnecting") : L.push("InstallWallet") : r ? L.push("DesktopConnecting") : n ? L.push("WebConnecting") : o ? L.push("MobileQrcodeConnecting") : L.push("InstallWallet");
} }, da = M`.wcm-router{overflow:hidden;will-change:transform}.wcm-content{display:flex;flex-direction:column}`;
var ha = Object.defineProperty, ua = Object.getOwnPropertyDescriptor, Ze = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? ua(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && ha(e, r, o), o;
};
let Dt = class extends A {
  constructor() {
    super(), this.view = L.state.view, this.prevView = L.state.view, this.unsubscribe = void 0, this.oldHeight = "0px", this.resizeObserver = void 0, this.unsubscribe = L.subscribe((t) => {
      this.view !== t.view && this.onChangeRoute();
    });
  }
  firstUpdated() {
    this.resizeObserver = new ResizeObserver(([t]) => {
      const e = `${t.contentRect.height}px`;
      this.oldHeight !== "0px" && mt(this.routerEl, { height: [this.oldHeight, e] }, { duration: 0.2 }), this.oldHeight = e;
    }), this.resizeObserver.observe(this.contentEl);
  }
  disconnectedCallback() {
    var t, e;
    (t = this.unsubscribe) == null || t.call(this), (e = this.resizeObserver) == null || e.disconnect();
  }
  get routerEl() {
    return x.getShadowRootElement(this, ".wcm-router");
  }
  get contentEl() {
    return x.getShadowRootElement(this, ".wcm-content");
  }
  viewTemplate() {
    switch (this.view) {
      case "ConnectWallet":
        return u`<wcm-connect-wallet-view></wcm-connect-wallet-view>`;
      case "DesktopConnecting":
        return u`<wcm-desktop-connecting-view></wcm-desktop-connecting-view>`;
      case "MobileConnecting":
        return u`<wcm-mobile-connecting-view></wcm-mobile-connecting-view>`;
      case "WebConnecting":
        return u`<wcm-web-connecting-view></wcm-web-connecting-view>`;
      case "MobileQrcodeConnecting":
        return u`<wcm-mobile-qr-connecting-view></wcm-mobile-qr-connecting-view>`;
      case "WalletExplorer":
        return u`<wcm-wallet-explorer-view></wcm-wallet-explorer-view>`;
      case "Qrcode":
        return u`<wcm-qrcode-view></wcm-qrcode-view>`;
      case "InstallWallet":
        return u`<wcm-install-wallet-view></wcm-install-wallet-view>`;
      default:
        return u`<div>Not Found</div>`;
    }
  }
  async onChangeRoute() {
    await mt(this.routerEl, { opacity: [1, 0], scale: [1, 1.02] }, { duration: 0.15, delay: 0.1 }).finished, this.view = L.state.view, mt(this.routerEl, { opacity: [0, 1], scale: [0.99, 1] }, { duration: 0.37, delay: 0.05 });
  }
  render() {
    return u`<div class="wcm-router"><div class="wcm-content">${this.viewTemplate()}</div></div>`;
  }
};
Dt.styles = [_.globalCss, da], Ze([H()], Dt.prototype, "view", 2), Ze([H()], Dt.prototype, "prevView", 2), Dt = Ze([O("wcm-modal-router")], Dt);
const ma = M`div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--wcm-notification-border-radius);border:1px solid var(--wcm-color-overlay);background-color:var(--wcm-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--wcm-color-bg-3)}}.wcm-success path{fill:var(--wcm-accent-color)}.wcm-error path{fill:var(--wcm-error-color)}`;
var pa = Object.defineProperty, ga = Object.getOwnPropertyDescriptor, Jr = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? ga(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && pa(e, r, o), o;
};
let re = class extends A {
  constructor() {
    super(), this.open = !1, this.unsubscribe = void 0, this.timeout = void 0, this.unsubscribe = ot.subscribe((t) => {
      t.open ? (this.open = !0, this.timeout = setTimeout(() => ot.closeToast(), 2200)) : (this.open = !1, clearTimeout(this.timeout));
    });
  }
  disconnectedCallback() {
    var t;
    (t = this.unsubscribe) == null || t.call(this), clearTimeout(this.timeout), ot.closeToast();
  }
  render() {
    const { message: t, variant: e } = ot.state, r = { "wcm-success": e === "success", "wcm-error": e === "error" };
    return this.open ? u`<div class="${Q(r)}">${e === "success" ? T.CHECKMARK_ICON : null} ${e === "error" ? T.CROSS_ICON : null}<wcm-text variant="small-regular">${t}</wcm-text></div>` : null;
  }
};
re.styles = [_.globalCss, ma], Jr([H()], re.prototype, "open", 2), re = Jr([O("wcm-modal-toast")], re);
const fa = 0.1, Qr = 2.5, J = 7;
function Fe(t, e, r) {
  return t === e ? !1 : (t - e < 0 ? e - t : t - e) <= r + fa;
}
function wa(t, e) {
  const r = Array.prototype.slice.call(Qt.create(t, { errorCorrectionLevel: e }).modules.data, 0), n = Math.sqrt(r.length);
  return r.reduce((o, i, a) => (a % n === 0 ? o.push([i]) : o[o.length - 1].push(i)) && o, []);
}
const va = { generate(t, e, r) {
  const n = "#141414", o = "#ffffff", i = [], a = wa(t, "Q"), l = e / a.length, s = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }];
  s.forEach(({ x: p, y: g }) => {
    const k = (a.length - J) * l * p, h = (a.length - J) * l * g, w = 0.45;
    for (let f = 0; f < s.length; f += 1) {
      const y = l * (J - f * 2);
      i.push(N`<rect fill="${f % 2 === 0 ? n : o}" height="${y}" rx="${y * w}" ry="${y * w}" width="${y}" x="${k + l * f}" y="${h + l * f}">`);
    }
  });
  const c = Math.floor((r + 25) / l), m = a.length / 2 - c / 2, b = a.length / 2 + c / 2 - 1, d = [];
  a.forEach((p, g) => {
    p.forEach((k, h) => {
      if (a[g][h] && !(g < J && h < J || g > a.length - (J + 1) && h < J || g < J && h > a.length - (J + 1)) && !(g > m && g < b && h > m && h < b)) {
        const w = g * l + l / 2, f = h * l + l / 2;
        d.push([w, f]);
      }
    });
  });
  const v = {};
  return d.forEach(([p, g]) => {
    v[p] ? v[p].push(g) : v[p] = [g];
  }), Object.entries(v).map(([p, g]) => {
    const k = g.filter((h) => g.every((w) => !Fe(h, w, l)));
    return [Number(p), k];
  }).forEach(([p, g]) => {
    g.forEach((k) => {
      i.push(N`<circle cx="${p}" cy="${k}" fill="${n}" r="${l / Qr}">`);
    });
  }), Object.entries(v).filter(([p, g]) => g.length > 1).map(([p, g]) => {
    const k = g.filter((h) => g.some((w) => Fe(h, w, l)));
    return [Number(p), k];
  }).map(([p, g]) => {
    g.sort((h, w) => h < w ? -1 : 1);
    const k = [];
    for (const h of g) {
      const w = k.find((f) => f.some((y) => Fe(h, y, l)));
      w ? w.push(h) : k.push([h]);
    }
    return [p, k.map((h) => [h[0], h[h.length - 1]])];
  }).forEach(([p, g]) => {
    g.forEach(([k, h]) => {
      i.push(N`<line x1="${p}" x2="${p}" y1="${k}" y2="${h}" stroke="${n}" stroke-width="${l / (Qr / 2)}" stroke-linecap="round">`);
    });
  }), i;
} }, ba = M`@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;aspect-ratio:1/1;animation:fadeIn ease .2s}.wcm-dark{background-color:#fff;border-radius:var(--wcm-container-border-radius);padding:18px;box-shadow:0 2px 5px #000}svg:first-child,wcm-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{width:25%;height:25%;border-radius:var(--wcm-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--wcm-accent-color)}svg:first-child path:last-child{stroke:var(--wcm-color-overlay)}`;
var ya = Object.defineProperty, xa = Object.getOwnPropertyDescriptor, vt = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? xa(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && ya(e, r, o), o;
};
let X = class extends A {
  constructor() {
    super(...arguments), this.uri = "", this.size = 0, this.imageId = void 0, this.walletId = void 0, this.imageUrl = void 0;
  }
  svgTemplate() {
    const t = _t.state.themeMode === "light" ? this.size : this.size - 36;
    return N`<svg height="${t}" width="${t}">${va.generate(this.uri, t, t / 4)}</svg>`;
  }
  render() {
    const t = { "wcm-dark": _t.state.themeMode === "dark" };
    return u`<div style="${`width: ${this.size}px`}" class="${Q(t)}">${this.walletId || this.imageUrl ? u`<wcm-wallet-image walletId="${W(this.walletId)}" imageId="${W(this.imageId)}" imageUrl="${W(this.imageUrl)}"></wcm-wallet-image>` : T.WALLET_CONNECT_ICON_COLORED} ${this.svgTemplate()}</div>`;
  }
};
X.styles = [_.globalCss, ba], vt([$()], X.prototype, "uri", 2), vt([$({ type: Number })], X.prototype, "size", 2), vt([$()], X.prototype, "imageId", 2), vt([$()], X.prototype, "walletId", 2), vt([$()], X.prototype, "imageUrl", 2), X = vt([O("wcm-qrcode")], X);
const $a = M`:host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--wcm-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:var(--wcm-color-fg-1);background-color:var(--wcm-color-bg-3);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay);caret-color:var(--wcm-accent-color)}input::placeholder{color:var(--wcm-color-fg-2)}svg{left:10px;top:4px;pointer-events:none;position:absolute;width:20px;height:20px}input:focus-within{box-shadow:inset 0 0 0 1px var(--wcm-accent-color)}path{fill:var(--wcm-color-fg-2)}`;
var Ca = Object.defineProperty, Ea = Object.getOwnPropertyDescriptor, Gr = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? Ea(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && Ca(e, r, o), o;
};
let oe = class extends A {
  constructor() {
    super(...arguments), this.onChange = () => null;
  }
  render() {
    return u`<input type="text" @input="${this.onChange}" placeholder="Search wallets"> ${T.SEARCH_ICON}`;
  }
};
oe.styles = [_.globalCss, $a], Gr([$()], oe.prototype, "onChange", 2), oe = Gr([O("wcm-search-input")], oe);
const Aa = M`@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--wcm-accent-color)}`;
var _a = Object.defineProperty, ka = Object.getOwnPropertyDescriptor, Oa = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? ka(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && _a(e, r, o), o;
};
let Ve = class extends A {
  render() {
    return u`<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`;
  }
};
Ve.styles = [_.globalCss, Aa], Ve = Oa([O("wcm-spinner")], Ve);
const Ia = M`span{font-style:normal;font-family:var(--wcm-font-family);font-feature-settings:var(--wcm-font-feature-settings)}.wcm-xsmall-bold{font-family:var(--wcm-text-xsmall-bold-font-family);font-weight:var(--wcm-text-xsmall-bold-weight);font-size:var(--wcm-text-xsmall-bold-size);line-height:var(--wcm-text-xsmall-bold-line-height);letter-spacing:var(--wcm-text-xsmall-bold-letter-spacing);text-transform:var(--wcm-text-xsmall-bold-text-transform)}.wcm-xsmall-regular{font-family:var(--wcm-text-xsmall-regular-font-family);font-weight:var(--wcm-text-xsmall-regular-weight);font-size:var(--wcm-text-xsmall-regular-size);line-height:var(--wcm-text-xsmall-regular-line-height);letter-spacing:var(--wcm-text-xsmall-regular-letter-spacing);text-transform:var(--wcm-text-xsmall-regular-text-transform)}.wcm-small-thin{font-family:var(--wcm-text-small-thin-font-family);font-weight:var(--wcm-text-small-thin-weight);font-size:var(--wcm-text-small-thin-size);line-height:var(--wcm-text-small-thin-line-height);letter-spacing:var(--wcm-text-small-thin-letter-spacing);text-transform:var(--wcm-text-small-thin-text-transform)}.wcm-small-regular{font-family:var(--wcm-text-small-regular-font-family);font-weight:var(--wcm-text-small-regular-weight);font-size:var(--wcm-text-small-regular-size);line-height:var(--wcm-text-small-regular-line-height);letter-spacing:var(--wcm-text-small-regular-letter-spacing);text-transform:var(--wcm-text-small-regular-text-transform)}.wcm-medium-regular{font-family:var(--wcm-text-medium-regular-font-family);font-weight:var(--wcm-text-medium-regular-weight);font-size:var(--wcm-text-medium-regular-size);line-height:var(--wcm-text-medium-regular-line-height);letter-spacing:var(--wcm-text-medium-regular-letter-spacing);text-transform:var(--wcm-text-medium-regular-text-transform)}.wcm-big-bold{font-family:var(--wcm-text-big-bold-font-family);font-weight:var(--wcm-text-big-bold-weight);font-size:var(--wcm-text-big-bold-size);line-height:var(--wcm-text-big-bold-line-height);letter-spacing:var(--wcm-text-big-bold-letter-spacing);text-transform:var(--wcm-text-big-bold-text-transform)}:host(*){color:var(--wcm-color-fg-1)}.wcm-color-primary{color:var(--wcm-color-fg-1)}.wcm-color-secondary{color:var(--wcm-color-fg-2)}.wcm-color-tertiary{color:var(--wcm-color-fg-3)}.wcm-color-inverse{color:var(--wcm-accent-fill-color)}.wcm-color-accnt{color:var(--wcm-accent-color)}.wcm-color-error{color:var(--wcm-error-color)}`;
var Ma = Object.defineProperty, Ta = Object.getOwnPropertyDescriptor, qe = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? Ta(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && Ma(e, r, o), o;
};
let Bt = class extends A {
  constructor() {
    super(...arguments), this.variant = "medium-regular", this.color = "primary";
  }
  render() {
    const t = { "wcm-big-bold": this.variant === "big-bold", "wcm-medium-regular": this.variant === "medium-regular", "wcm-small-regular": this.variant === "small-regular", "wcm-small-thin": this.variant === "small-thin", "wcm-xsmall-regular": this.variant === "xsmall-regular", "wcm-xsmall-bold": this.variant === "xsmall-bold", "wcm-color-primary": this.color === "primary", "wcm-color-secondary": this.color === "secondary", "wcm-color-tertiary": this.color === "tertiary", "wcm-color-inverse": this.color === "inverse", "wcm-color-accnt": this.color === "accent", "wcm-color-error": this.color === "error" };
    return u`<span><slot class="${Q(t)}"></slot></span>`;
  }
};
Bt.styles = [_.globalCss, Ia], qe([$()], Bt.prototype, "variant", 2), qe([$()], Bt.prototype, "color", 2), Bt = qe([O("wcm-text")], Bt);
const Pa = M`button{width:100%;height:100%;border-radius:var(--wcm-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}wcm-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}wcm-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--wcm-wallet-icon-border-radius);margin-bottom:5px}.wcm-sublabel{margin-top:2px}`;
var Ra = Object.defineProperty, Sa = Object.getOwnPropertyDescriptor, tt = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? Sa(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && Ra(e, r, o), o;
};
let V = class extends A {
  constructor() {
    super(...arguments), this.onClick = () => null, this.name = "", this.walletId = "", this.label = void 0, this.imageId = void 0, this.installed = !1, this.recent = !1;
  }
  sublabelTemplate() {
    return this.recent ? u`<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">RECENT</wcm-text>` : this.installed ? u`<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</wcm-text>` : null;
  }
  handleClick() {
    Wo.click({ name: "WALLET_BUTTON", walletId: this.walletId }), this.onClick();
  }
  render() {
    var t;
    return u`<button @click="${this.handleClick.bind(this)}"><div><wcm-wallet-image walletId="${this.walletId}" imageId="${W(this.imageId)}"></wcm-wallet-image><wcm-text variant="xsmall-regular">${(t = this.label) != null ? t : x.getWalletName(this.name, !0)}</wcm-text>${this.sublabelTemplate()}</div></button>`;
  }
};
V.styles = [_.globalCss, Pa], tt([$()], V.prototype, "onClick", 2), tt([$()], V.prototype, "name", 2), tt([$()], V.prototype, "walletId", 2), tt([$()], V.prototype, "label", 2), tt([$()], V.prototype, "imageId", 2), tt([$({ type: Boolean })], V.prototype, "installed", 2), tt([$({ type: Boolean })], V.prototype, "recent", 2), V = tt([O("wcm-wallet-button")], V);
const Na = M`:host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--wcm-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--wcm-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
var La = Object.defineProperty, Da = Object.getOwnPropertyDescriptor, ne = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? Da(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && La(e, r, o), o;
};
let bt = class extends A {
  constructor() {
    super(...arguments), this.walletId = "", this.imageId = void 0, this.imageUrl = void 0;
  }
  render() {
    var t;
    const e = (t = this.imageUrl) != null && t.length ? this.imageUrl : x.getWalletIcon({ id: this.walletId, image_id: this.imageId });
    return u`${e.length ? u`<div><img crossorigin="anonymous" src="${e}" alt="${this.id}"></div>` : T.WALLET_PLACEHOLDER}`;
  }
};
bt.styles = [_.globalCss, Na], ne([$()], bt.prototype, "walletId", 2), ne([$()], bt.prototype, "imageId", 2), ne([$()], bt.prototype, "imageUrl", 2), bt = ne([O("wcm-wallet-image")], bt);
var Ba = Object.defineProperty, Ua = Object.getOwnPropertyDescriptor, Xr = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? Ua(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && Ba(e, r, o), o;
};
let Ye = class extends A {
  constructor() {
    super(), this.preload = !0, this.preloadData();
  }
  async loadImages(t) {
    try {
      t != null && t.length && await Promise.all(t.map(async (e) => x.preloadImage(e)));
    } catch {
      console.info("Unsuccessful attempt at preloading some images", t);
    }
  }
  async preloadListings() {
    if (pt.state.enableExplorer) {
      await j.getRecomendedWallets(), q.setIsDataLoaded(!0);
      const { recomendedWallets: t } = j.state, e = t.map((r) => x.getWalletIcon(r));
      await this.loadImages(e);
    } else
      q.setIsDataLoaded(!0);
  }
  async preloadCustomImages() {
    const t = x.getCustomImageUrls();
    await this.loadImages(t);
  }
  async preloadData() {
    try {
      this.preload && (this.preload = !1, await Promise.all([this.preloadListings(), this.preloadCustomImages()]));
    } catch (t) {
      console.error(t), ot.openToast("Failed preloading", "error");
    }
  }
};
Xr([H()], Ye.prototype, "preload", 2), Ye = Xr([O("wcm-explorer-context")], Ye);
var Wa = Object.defineProperty, ja = Object.getOwnPropertyDescriptor, Ha = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? ja(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && Wa(e, r, o), o;
};
let to = class extends A {
  constructor() {
    super(), this.unsubscribeTheme = void 0, _.setTheme(), this.unsubscribeTheme = _t.subscribe(_.setTheme);
  }
  disconnectedCallback() {
    var t;
    (t = this.unsubscribeTheme) == null || t.call(this);
  }
};
to = Ha([O("wcm-theme-context")], to);
const za = M`@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.wcm-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.wcm-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}.wcm-track svg{margin:0 5px}wcm-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--wcm-wallet-icon-border-radius)}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-title{display:flex;align-items:center;margin-bottom:10px}.wcm-title svg{margin-right:6px}.wcm-title path{fill:var(--wcm-accent-color)}wcm-modal-footer .wcm-title{padding:0 10px}wcm-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--wcm-color-bg-1))}wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-info-footer wcm-text{text-align:center;margin-bottom:15px}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
var Za = Object.defineProperty, Fa = Object.getOwnPropertyDescriptor, Va = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? Fa(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && Za(e, r, o), o;
};
let Ke = class extends A {
  onGoToQrcode() {
    L.push("Qrcode");
  }
  render() {
    const { recomendedWallets: t } = j.state, e = [...t, ...t], r = C.RECOMMENDED_WALLET_AMOUNT * 2;
    return u`<wcm-modal-header title="Connect your wallet" .onAction="${this.onGoToQrcode}" .actionIcon="${T.QRCODE_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-title">${T.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">WalletConnect</wcm-text></div><div class="wcm-slider"><div class="wcm-track">${[...Array(r)].map((n, o) => {
      const i = e[o % e.length];
      return i ? u`<wcm-wallet-image walletId="${i.id}" imageId="${i.image_id}"></wcm-wallet-image>` : T.WALLET_PLACEHOLDER;
    })}</div><wcm-button-big @click="${x.handleAndroidLinking}"><wcm-text variant="medium-regular" color="inverse">Select Wallet</wcm-text></wcm-button-big></div></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">Choose WalletConnect to see supported apps on your device</wcm-text></wcm-info-footer>`;
  }
};
Ke.styles = [_.globalCss, za], Ke = Va([O("wcm-android-wallet-selection")], Ke);
const qa = M`@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--wcm-accent-color);animation:loading 1s linear infinite}wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:90px;height:90px}wcm-text{margin-bottom:40px}.wcm-error svg{stroke:var(--wcm-error-color)}.wcm-error use{display:none}.wcm-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.wcm-stale svg,.wcm-stale use{display:none}`;
var Ya = Object.defineProperty, Ka = Object.getOwnPropertyDescriptor, yt = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? Ka(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && Ya(e, r, o), o;
};
let et = class extends A {
  constructor() {
    super(...arguments), this.walletId = void 0, this.imageId = void 0, this.isError = !1, this.isStale = !1, this.label = "";
  }
  svgLoaderTemplate() {
    var t, e;
    const r = (e = (t = _t.state.themeVariables) == null ? void 0 : t["--wcm-wallet-icon-large-border-radius"]) != null ? e : _.getPreset("--wcm-wallet-icon-large-border-radius");
    let n = 0;
    r.includes("%") ? n = 88 / 100 * parseInt(r, 10) : n = parseInt(r, 10), n *= 1.17;
    const o = 317 - n * 1.57, i = 425 - n * 1.8;
    return u`<svg viewBox="0 0 110 110" width="110" height="110"><rect id="wcm-loader" x="2" y="2" width="106" height="106" rx="${n}"/><use xlink:href="#wcm-loader" stroke-dasharray="106 ${o}" stroke-dashoffset="${i}"></use></svg>`;
  }
  render() {
    const t = { "wcm-error": this.isError, "wcm-stale": this.isStale };
    return u`<div class="${Q(t)}">${this.svgLoaderTemplate()}<wcm-wallet-image walletId="${W(this.walletId)}" imageId="${W(this.imageId)}"></wcm-wallet-image></div><wcm-text variant="medium-regular" color="${this.isError ? "error" : "primary"}">${this.isError ? "Connection declined" : this.label}</wcm-text>`;
  }
};
et.styles = [_.globalCss, qa], yt([$()], et.prototype, "walletId", 2), yt([$()], et.prototype, "imageId", 2), yt([$({ type: Boolean })], et.prototype, "isError", 2), yt([$({ type: Boolean })], et.prototype, "isStale", 2), yt([$()], et.prototype, "label", 2), et = yt([O("wcm-connector-waiting")], et);
const At = { manualWallets() {
  var t, e;
  const { mobileWallets: r, desktopWallets: n } = pt.state, o = (t = At.recentWallet()) == null ? void 0 : t.id, i = C.isMobile() ? r : n, a = i == null ? void 0 : i.filter((l) => o !== l.id);
  return (e = C.isMobile() ? a == null ? void 0 : a.map(({ id: l, name: s, links: c }) => ({ id: l, name: s, mobile: c, links: c })) : a == null ? void 0 : a.map(({ id: l, name: s, links: c }) => ({ id: l, name: s, desktop: c, links: c }))) != null ? e : [];
}, recentWallet() {
  return x.getRecentWallet();
}, recomendedWallets(t = !1) {
  var e;
  const r = t || (e = At.recentWallet()) == null ? void 0 : e.id, { recomendedWallets: n } = j.state;
  return n.filter((o) => r !== o.id);
} }, at = { onConnecting(t) {
  x.goToConnectingView(t);
}, manualWalletsTemplate() {
  return At.manualWallets().map((t) => u`<wcm-wallet-button walletId="${t.id}" name="${t.name}" .onClick="${() => this.onConnecting(t)}"></wcm-wallet-button>`);
}, recomendedWalletsTemplate(t = !1) {
  return At.recomendedWallets(t).map((e) => u`<wcm-wallet-button name="${e.name}" walletId="${e.id}" imageId="${e.image_id}" .onClick="${() => this.onConnecting(e)}"></wcm-wallet-button>`);
}, recentWalletTemplate() {
  const t = At.recentWallet();
  if (t)
    return u`<wcm-wallet-button name="${t.name}" walletId="${t.id}" imageId="${W(t.image_id)}" .recent="${!0}" .onClick="${() => this.onConnecting(t)}"></wcm-wallet-button>`;
} }, Ja = M`.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-desktop-title,.wcm-mobile-title{display:flex;align-items:center}.wcm-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.wcm-desktop-title{margin-bottom:10px;padding:0 10px}.wcm-subtitle{display:flex;align-items:center}.wcm-subtitle:last-child path{fill:var(--wcm-color-fg-3)}.wcm-desktop-title svg,.wcm-mobile-title svg{margin-right:6px}.wcm-desktop-title path,.wcm-mobile-title path{fill:var(--wcm-accent-color)}`;
var Qa = Object.defineProperty, Ga = Object.getOwnPropertyDescriptor, Xa = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? Ga(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && Qa(e, r, o), o;
};
let Je = class extends A {
  render() {
    const { explorerExcludedWalletIds: t, enableExplorer: e } = pt.state, r = t !== "ALL" && e, n = at.manualWalletsTemplate(), o = at.recomendedWalletsTemplate();
    let i = [at.recentWalletTemplate(), ...n, ...o];
    i = i.filter(Boolean);
    const a = i.length > 4 || r;
    let l = [];
    a ? l = i.slice(0, 3) : l = i;
    const s = !!l.length;
    return u`<wcm-modal-header .border="${!0}" title="Connect your wallet" .onAction="${x.handleUriCopy}" .actionIcon="${T.COPY_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-mobile-title"><div class="wcm-subtitle">${T.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">Mobile</wcm-text></div><div class="wcm-subtitle">${T.SCAN_ICON}<wcm-text variant="small-regular" color="secondary">Scan with your wallet</wcm-text></div></div><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>${s ? u`<wcm-modal-footer><div class="wcm-desktop-title">${T.DESKTOP_ICON}<wcm-text variant="small-regular" color="accent">Desktop</wcm-text></div><div class="wcm-grid">${l} ${a ? u`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>` : null}</div></wcm-modal-footer>` : null}`;
  }
};
Je.styles = [_.globalCss, Ja], Je = Xa([O("wcm-desktop-wallet-selection")], Je);
const tl = M`div{background-color:var(--wcm-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--wcm-color-bg-3);text-align:center}a{color:var(--wcm-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:active{opacity:.8}@media(hover:hover){a:hover{opacity:.8}}`;
var el = Object.defineProperty, rl = Object.getOwnPropertyDescriptor, ol = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? rl(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && el(e, r, o), o;
};
let Qe = class extends A {
  render() {
    const { termsOfServiceUrl: t, privacyPolicyUrl: e } = pt.state;
    return t ?? e ? u`<div><wcm-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app's ${t ? u`<a href="${t}" target="_blank" rel="noopener noreferrer">Terms of Service</a>` : null} ${t && e ? "and" : null} ${e ? u`<a href="${e}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>` : null}</wcm-text></div>` : null;
  }
};
Qe.styles = [_.globalCss, tl], Qe = ol([O("wcm-legal-notice")], Qe);
const nl = M`div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;
var il = Object.defineProperty, al = Object.getOwnPropertyDescriptor, ll = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? al(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && il(e, r, o), o;
};
let Ge = class extends A {
  onQrcode() {
    L.push("Qrcode");
  }
  render() {
    const { explorerExcludedWalletIds: t, enableExplorer: e } = pt.state, r = t !== "ALL" && e, n = at.manualWalletsTemplate(), o = at.recomendedWalletsTemplate();
    let i = [at.recentWalletTemplate(), ...n, ...o];
    i = i.filter(Boolean);
    const a = i.length > 8 || r;
    let l = [];
    a ? l = i.slice(0, 7) : l = i;
    const s = !!l.length;
    return u`<wcm-modal-header title="Connect your wallet" .onAction="${this.onQrcode}" .actionIcon="${T.QRCODE_ICON}"></wcm-modal-header>${s ? u`<wcm-modal-content><div>${l} ${a ? u`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>` : null}</div></wcm-modal-content>` : null}`;
  }
};
Ge.styles = [_.globalCss, nl], Ge = ll([O("wcm-mobile-wallet-selection")], Ge);
const sl = M`:host{all:initial}.wcm-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--wcm-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;opacity:0;pointer-events:none;background-color:var(--wcm-overlay-background-color);backdrop-filter:var(--wcm-overlay-backdrop-filter)}@media(max-height:720px) and (orientation:landscape){.wcm-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.wcm-active{pointer-events:auto}.wcm-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) var(--wcm-container-border-radius) var(--wcm-container-border-radius);border:1px solid var(--wcm-color-overlay);overflow:hidden}.wcm-card{width:100%;position:relative;border-radius:var(--wcm-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--wcm-color-overlay);background-color:var(--wcm-color-bg-1);color:var(--wcm-color-fg-1)}@media(max-width:600px){.wcm-container{max-width:440px;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) 0 0}.wcm-card{border-radius:var(--wcm-container-border-radius) var(--wcm-container-border-radius) 0 0}.wcm-overlay{align-items:flex-end}}@media(max-width:440px){.wcm-container{border:0}}`;
var cl = Object.defineProperty, dl = Object.getOwnPropertyDescriptor, Xe = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? dl(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && cl(e, r, o), o;
};
let Ut = class extends A {
  constructor() {
    super(), this.open = !1, this.active = !1, this.unsubscribeModal = void 0, this.abortController = void 0, this.unsubscribeModal = ce.subscribe((t) => {
      t.open ? this.onOpenModalEvent() : this.onCloseModalEvent();
    });
  }
  disconnectedCallback() {
    var t;
    (t = this.unsubscribeModal) == null || t.call(this);
  }
  get overlayEl() {
    return x.getShadowRootElement(this, ".wcm-overlay");
  }
  get containerEl() {
    return x.getShadowRootElement(this, ".wcm-container");
  }
  toggleBodyScroll(t) {
    if (document.querySelector("body"))
      if (t) {
        const e = document.getElementById("wcm-styles");
        e == null || e.remove();
      } else
        document.head.insertAdjacentHTML("beforeend", '<style id="wcm-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>');
  }
  onCloseModal(t) {
    t.target === t.currentTarget && ce.close();
  }
  onOpenModalEvent() {
    this.toggleBodyScroll(!1), this.addKeyboardEvents(), this.open = !0, setTimeout(async () => {
      const t = x.isMobileAnimation() ? { y: ["50vh", "0vh"] } : { scale: [0.98, 1] }, e = 0.1, r = 0.2;
      await Promise.all([mt(this.overlayEl, { opacity: [0, 1] }, { delay: e, duration: r }).finished, mt(this.containerEl, t, { delay: e, duration: r }).finished]), this.active = !0;
    }, 0);
  }
  async onCloseModalEvent() {
    this.toggleBodyScroll(!0), this.removeKeyboardEvents();
    const t = x.isMobileAnimation() ? { y: ["0vh", "50vh"] } : { scale: [1, 0.98] }, e = 0.2;
    await Promise.all([mt(this.overlayEl, { opacity: [1, 0] }, { duration: e }).finished, mt(this.containerEl, t, { duration: e }).finished]), this.containerEl.removeAttribute("style"), this.active = !1, this.open = !1;
  }
  addKeyboardEvents() {
    this.abortController = new AbortController(), window.addEventListener("keydown", (t) => {
      var e;
      t.key === "Escape" ? ce.close() : t.key === "Tab" && ((e = t.target) != null && e.tagName.includes("wcm-") || this.containerEl.focus());
    }, this.abortController), this.containerEl.focus();
  }
  removeKeyboardEvents() {
    var t;
    (t = this.abortController) == null || t.abort(), this.abortController = void 0;
  }
  render() {
    const t = { "wcm-overlay": !0, "wcm-active": this.active };
    return u`<wcm-explorer-context></wcm-explorer-context><wcm-theme-context></wcm-theme-context><div id="wcm-modal" class="${Q(t)}" @click="${this.onCloseModal}" role="alertdialog" aria-modal="true"><div class="wcm-container" tabindex="0">${this.open ? u`<wcm-modal-backcard></wcm-modal-backcard><div class="wcm-card"><wcm-modal-router></wcm-modal-router><wcm-modal-toast></wcm-modal-toast></div>` : null}</div></div>`;
  }
};
Ut.styles = [_.globalCss, sl], Xe([H()], Ut.prototype, "open", 2), Xe([H()], Ut.prototype, "active", 2), Ut = Xe([O("wcm-modal")], Ut);
const hl = M`div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}wcm-button{margin:0 5px}`;
var ul = Object.defineProperty, ml = Object.getOwnPropertyDescriptor, Wt = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? ml(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && ul(e, r, o), o;
};
let dt = class extends A {
  constructor() {
    super(...arguments), this.isMobile = !1, this.isDesktop = !1, this.isWeb = !1, this.isRetry = !1;
  }
  onMobile() {
    C.isMobile() ? L.replace("MobileConnecting") : L.replace("MobileQrcodeConnecting");
  }
  onDesktop() {
    L.replace("DesktopConnecting");
  }
  onWeb() {
    L.replace("WebConnecting");
  }
  render() {
    return u`<div>${this.isRetry ? u`<slot></slot>` : null} ${this.isMobile ? u`<wcm-button .onClick="${this.onMobile}" .iconLeft="${T.MOBILE_ICON}" variant="outline">Mobile</wcm-button>` : null} ${this.isDesktop ? u`<wcm-button .onClick="${this.onDesktop}" .iconLeft="${T.DESKTOP_ICON}" variant="outline">Desktop</wcm-button>` : null} ${this.isWeb ? u`<wcm-button .onClick="${this.onWeb}" .iconLeft="${T.GLOBE_ICON}" variant="outline">Web</wcm-button>` : null}</div>`;
  }
};
dt.styles = [_.globalCss, hl], Wt([$({ type: Boolean })], dt.prototype, "isMobile", 2), Wt([$({ type: Boolean })], dt.prototype, "isDesktop", 2), Wt([$({ type: Boolean })], dt.prototype, "isWeb", 2), Wt([$({ type: Boolean })], dt.prototype, "isRetry", 2), dt = Wt([O("wcm-platform-selection")], dt);
const pl = M`button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--wcm-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.wcm-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--wcm-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--wcm-color-bg-2);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}.wcm-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--wcm-wallet-icon-border-radius)/ 2);border:1px solid var(--wcm-color-overlay)}.wcm-icons svg{width:21px;height:21px}.wcm-icons img:nth-child(1),.wcm-icons img:nth-child(2),.wcm-icons svg:nth-child(1),.wcm-icons svg:nth-child(2){margin-bottom:4px}wcm-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
var gl = Object.defineProperty, fl = Object.getOwnPropertyDescriptor, wl = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? fl(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && gl(e, r, o), o;
};
let tr = class extends A {
  onClick() {
    L.push("WalletExplorer");
  }
  render() {
    const { recomendedWallets: t } = j.state, e = At.manualWallets(), r = [...t, ...e].reverse().slice(0, 4);
    return u`<button @click="${this.onClick}"><div class="wcm-icons">${r.map((n) => {
      const o = x.getWalletIcon(n);
      if (o)
        return u`<img crossorigin="anonymous" src="${o}">`;
      const i = x.getWalletIcon({ id: n.id });
      return i ? u`<img crossorigin="anonymous" src="${i}">` : T.WALLET_PLACEHOLDER;
    })} ${[...Array(4 - r.length)].map(() => T.WALLET_PLACEHOLDER)}</div><wcm-text variant="xsmall-regular">View All</wcm-text></button>`;
  }
};
tr.styles = [_.globalCss, pl], tr = wl([O("wcm-view-all-wallets-button")], tr);
const vl = M`.wcm-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;
var bl = Object.defineProperty, yl = Object.getOwnPropertyDescriptor, ie = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? yl(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && bl(e, r, o), o;
};
let xt = class extends A {
  constructor() {
    super(), this.walletId = "", this.imageId = "", this.uri = "", setTimeout(() => {
      const { walletConnectUri: t } = q.state;
      this.uri = t;
    }, 0);
  }
  get overlayEl() {
    return x.getShadowRootElement(this, ".wcm-qr-container");
  }
  render() {
    return u`<div class="wcm-qr-container">${this.uri ? u`<wcm-qrcode size="${this.overlayEl.offsetWidth}" uri="${this.uri}" walletId="${W(this.walletId)}" imageId="${W(this.imageId)}"></wcm-qrcode>` : u`<wcm-spinner></wcm-spinner>`}</div>`;
  }
};
xt.styles = [_.globalCss, vl], ie([$()], xt.prototype, "walletId", 2), ie([$()], xt.prototype, "imageId", 2), ie([H()], xt.prototype, "uri", 2), xt = ie([O("wcm-walletconnect-qr")], xt);
var xl = Object.defineProperty, $l = Object.getOwnPropertyDescriptor, Cl = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? $l(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && xl(e, r, o), o;
};
let er = class extends A {
  viewTemplate() {
    return C.isAndroid() ? u`<wcm-android-wallet-selection></wcm-android-wallet-selection>` : C.isMobile() ? u`<wcm-mobile-wallet-selection></wcm-mobile-wallet-selection>` : u`<wcm-desktop-wallet-selection></wcm-desktop-wallet-selection>`;
  }
  render() {
    return u`${this.viewTemplate()}<wcm-legal-notice></wcm-legal-notice>`;
  }
};
er.styles = [_.globalCss], er = Cl([O("wcm-connect-wallet-view")], er);
const El = M`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
var Al = Object.defineProperty, _l = Object.getOwnPropertyDescriptor, eo = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? _l(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && Al(e, r, o), o;
};
let ae = class extends A {
  constructor() {
    super(), this.isError = !1, this.openDesktopApp();
  }
  onFormatAndRedirect(t) {
    const { desktop: e, name: r } = C.getWalletRouterData(), n = e == null ? void 0 : e.native;
    if (n) {
      const o = C.formatNativeUrl(n, t, r);
      C.openHref(o, "_self");
    }
  }
  openDesktopApp() {
    const { walletConnectUri: t } = q.state, e = C.getWalletRouterData();
    x.setRecentWallet(e), t && this.onFormatAndRedirect(t);
  }
  render() {
    const { name: t, id: e, image_id: r } = C.getWalletRouterData(), { isMobile: n, isWeb: o } = x.getCachedRouterWalletPlatforms();
    return u`<wcm-modal-header title="${t}" .onAction="${x.handleUriCopy}" .actionIcon="${T.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${e}" imageId="${W(r)}" label="${`Continue in ${t}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Connection can continue loading if ${t} is not installed on your device`}</wcm-text><wcm-platform-selection .isMobile="${n}" .isWeb="${o}" .isRetry="${!0}"><wcm-button .onClick="${this.openDesktopApp.bind(this)}" .iconRight="${T.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`;
  }
};
ae.styles = [_.globalCss, El], eo([H()], ae.prototype, "isError", 2), ae = eo([O("wcm-desktop-connecting-view")], ae);
const kl = M`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}wcm-button{margin-top:15px}`;
var Ol = Object.defineProperty, Il = Object.getOwnPropertyDescriptor, Ml = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? Il(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && Ol(e, r, o), o;
};
let rr = class extends A {
  onInstall(t) {
    t && C.openHref(t, "_blank");
  }
  render() {
    const { name: t, id: e, image_id: r, homepage: n } = C.getWalletRouterData();
    return u`<wcm-modal-header title="${t}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${e}" imageId="${W(r)}" label="Not Detected" .isStale="${!0}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Download ${t} to continue. If multiple browser extensions are installed, disable non ${t} ones and try again`}</wcm-text><wcm-button .onClick="${() => this.onInstall(n)}" .iconLeft="${T.ARROW_DOWN_ICON}">Download</wcm-button></wcm-info-footer>`;
  }
};
rr.styles = [_.globalCss, kl], rr = Ml([O("wcm-install-wallet-view")], rr);
const Tl = M`wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}wcm-info-footer{display:flex;width:100%}.wcm-app-store{justify-content:space-between}.wcm-app-store wcm-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--wcm-wallet-icon-small-border-radius)}.wcm-app-store div{display:flex;align-items:center}.wcm-app-store wcm-button{margin-right:-10px}.wcm-note{flex-direction:column;align-items:center;padding:5px 0}.wcm-note wcm-text{text-align:center}wcm-platform-selection{margin-top:-15px}.wcm-note wcm-text{margin-top:15px}.wcm-note wcm-text span{color:var(--wcm-accent-color)}`;
var Pl = Object.defineProperty, Rl = Object.getOwnPropertyDescriptor, ro = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? Rl(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && Pl(e, r, o), o;
};
let le = class extends A {
  constructor() {
    super(), this.isError = !1, this.openMobileApp();
  }
  onFormatAndRedirect(t, e = !1) {
    const { mobile: r, name: n } = C.getWalletRouterData(), o = r == null ? void 0 : r.native, i = r == null ? void 0 : r.universal;
    if (o && !e) {
      const a = C.formatNativeUrl(o, t, n);
      C.openHref(a, "_self");
    } else if (i) {
      const a = C.formatUniversalUrl(i, t, n);
      C.openHref(a, "_self");
    }
  }
  openMobileApp(t = !1) {
    const { walletConnectUri: e } = q.state, r = C.getWalletRouterData();
    x.setRecentWallet(r), e && this.onFormatAndRedirect(e, t);
  }
  onGoToAppStore(t) {
    t && C.openHref(t, "_blank");
  }
  render() {
    const { name: t, id: e, image_id: r, app: n, mobile: o } = C.getWalletRouterData(), { isWeb: i } = x.getCachedRouterWalletPlatforms(), a = n == null ? void 0 : n.ios, l = o == null ? void 0 : o.universal;
    return u`<wcm-modal-header title="${t}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${e}" imageId="${W(r)}" label="Tap 'Open' to continue…" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer class="wcm-note"><wcm-platform-selection .isWeb="${i}" .isRetry="${!0}"><wcm-button .onClick="${() => this.openMobileApp(!1)}" .iconRight="${T.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection>${l ? u`<wcm-text color="secondary" variant="small-thin">Still doesn't work? <span tabindex="0" @click="${() => this.openMobileApp(!0)}">Try this alternate link</span></wcm-text>` : null}</wcm-info-footer><wcm-info-footer class="wcm-app-store"><div><wcm-wallet-image walletId="${e}" imageId="${W(r)}"></wcm-wallet-image><wcm-text>${`Get ${t}`}</wcm-text></div><wcm-button .iconRight="${T.ARROW_RIGHT_ICON}" .onClick="${() => this.onGoToAppStore(a)}" variant="ghost">App Store</wcm-button></wcm-info-footer>`;
  }
};
le.styles = [_.globalCss, Tl], ro([H()], le.prototype, "isError", 2), le = ro([O("wcm-mobile-connecting-view")], le);
const Sl = M`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
var Nl = Object.defineProperty, Ll = Object.getOwnPropertyDescriptor, Dl = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? Ll(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && Nl(e, r, o), o;
};
let or = class extends A {
  render() {
    const { name: t, id: e, image_id: r } = C.getWalletRouterData(), { isDesktop: n, isWeb: o } = x.getCachedRouterWalletPlatforms();
    return u`<wcm-modal-header title="${t}" .onAction="${x.handleUriCopy}" .actionIcon="${T.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr walletId="${e}" imageId="${W(r)}"></wcm-walletconnect-qr></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Scan this QR Code with your phone's camera or inside ${t} app`}</wcm-text><wcm-platform-selection .isDesktop="${n}" .isWeb="${o}"></wcm-platform-selection></wcm-info-footer>`;
  }
};
or.styles = [_.globalCss, Sl], or = Dl([O("wcm-mobile-qr-connecting-view")], or);
var Bl = Object.defineProperty, Ul = Object.getOwnPropertyDescriptor, Wl = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? Ul(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && Bl(e, r, o), o;
};
let nr = class extends A {
  render() {
    return u`<wcm-modal-header title="Scan the code" .onAction="${x.handleUriCopy}" .actionIcon="${T.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>`;
  }
};
nr.styles = [_.globalCss], nr = Wl([O("wcm-qrcode-view")], nr);
const jl = M`wcm-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}wcm-modal-content::after,wcm-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}wcm-modal-content::before{box-shadow:0 -1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(var(--wcm-color-bg-1),rgba(255,255,255,0))}wcm-modal-content::after{box-shadow:0 1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--wcm-color-bg-1));top:calc(100% - 20px)}wcm-modal-content::-webkit-scrollbar{display:none}.wcm-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.wcm-empty,.wcm-loading{display:flex}.wcm-loading .wcm-placeholder-block{height:100%}.wcm-end-reached .wcm-placeholder-block{height:0;opacity:0}.wcm-empty .wcm-placeholder-block{opacity:1;height:100%}wcm-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;
var Hl = Object.defineProperty, zl = Object.getOwnPropertyDescriptor, jt = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? zl(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && Hl(e, r, o), o;
};
const ir = 40;
let ht = class extends A {
  constructor() {
    super(...arguments), this.loading = !j.state.wallets.listings.length, this.firstFetch = !j.state.wallets.listings.length, this.search = "", this.endReached = !1, this.intersectionObserver = void 0, this.searchDebounce = x.debounce((t) => {
      t.length >= 1 ? (this.firstFetch = !0, this.endReached = !1, this.search = t, j.resetSearch(), this.fetchWallets()) : this.search && (this.search = "", this.endReached = this.isLastPage(), j.resetSearch());
    });
  }
  firstUpdated() {
    this.createPaginationObserver();
  }
  disconnectedCallback() {
    var t;
    (t = this.intersectionObserver) == null || t.disconnect();
  }
  get placeholderEl() {
    return x.getShadowRootElement(this, ".wcm-placeholder-block");
  }
  createPaginationObserver() {
    this.intersectionObserver = new IntersectionObserver(([t]) => {
      t.isIntersecting && !(this.search && this.firstFetch) && this.fetchWallets();
    }), this.intersectionObserver.observe(this.placeholderEl);
  }
  isLastPage() {
    const { wallets: t, search: e } = j.state, { listings: r, total: n } = this.search ? e : t;
    return n <= ir || r.length >= n;
  }
  async fetchWallets() {
    var t;
    const { wallets: e, search: r } = j.state, { listings: n, total: o, page: i } = this.search ? r : e;
    if (!this.endReached && (this.firstFetch || o > ir && n.length < o))
      try {
        this.loading = !0;
        const a = (t = q.state.chains) == null ? void 0 : t.join(","), { listings: l } = await j.getWallets({ page: this.firstFetch ? 1 : i + 1, entries: ir, search: this.search, version: 2, chains: a }), s = l.map((c) => x.getWalletIcon(c));
        await Promise.all([...s.map(async (c) => x.preloadImage(c)), C.wait(300)]), this.endReached = this.isLastPage();
      } catch (a) {
        console.error(a), ot.openToast(x.getErrorMessage(a), "error");
      } finally {
        this.loading = !1, this.firstFetch = !1;
      }
  }
  onConnect(t) {
    C.isAndroid() ? x.handleMobileLinking(t) : x.goToConnectingView(t);
  }
  onSearchChange(t) {
    const { value: e } = t.target;
    this.searchDebounce(e);
  }
  render() {
    const { wallets: t, search: e } = j.state, { listings: r } = this.search ? e : t, n = this.loading && !r.length, o = this.search.length >= 3;
    let i = at.manualWalletsTemplate(), a = at.recomendedWalletsTemplate(!0);
    o && (i = i.filter(({ values: c }) => x.caseSafeIncludes(c[0], this.search)), a = a.filter(({ values: c }) => x.caseSafeIncludes(c[0], this.search)));
    const l = !this.loading && !r.length && !a.length, s = { "wcm-loading": n, "wcm-end-reached": this.endReached || !this.loading, "wcm-empty": l };
    return u`<wcm-modal-header><wcm-search-input .onChange="${this.onSearchChange.bind(this)}"></wcm-search-input></wcm-modal-header><wcm-modal-content class="${Q(s)}"><div class="wcm-grid">${n ? null : i} ${n ? null : a} ${n ? null : r.map((c) => u`${c ? u`<wcm-wallet-button imageId="${c.image_id}" name="${c.name}" walletId="${c.id}" .onClick="${() => this.onConnect(c)}"></wcm-wallet-button>` : null}`)}</div><div class="wcm-placeholder-block">${l ? u`<wcm-text variant="big-bold" color="secondary">No results found</wcm-text>` : null} ${!l && this.loading ? u`<wcm-spinner></wcm-spinner>` : null}</div></wcm-modal-content>`;
  }
};
ht.styles = [_.globalCss, jl], jt([H()], ht.prototype, "loading", 2), jt([H()], ht.prototype, "firstFetch", 2), jt([H()], ht.prototype, "search", 2), jt([H()], ht.prototype, "endReached", 2), ht = jt([O("wcm-wallet-explorer-view")], ht);
const Zl = M`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
var Fl = Object.defineProperty, Vl = Object.getOwnPropertyDescriptor, oo = (t, e, r, n) => {
  for (var o = n > 1 ? void 0 : n ? Vl(e, r) : e, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (o = (n ? a(e, r, o) : a(o)) || o);
  return n && o && Fl(e, r, o), o;
};
let se = class extends A {
  constructor() {
    super(), this.isError = !1, this.openWebWallet();
  }
  onFormatAndRedirect(t) {
    const { desktop: e, name: r } = C.getWalletRouterData(), n = e == null ? void 0 : e.universal;
    if (n) {
      const o = C.formatUniversalUrl(n, t, r);
      C.openHref(o, "_blank");
    }
  }
  openWebWallet() {
    const { walletConnectUri: t } = q.state, e = C.getWalletRouterData();
    x.setRecentWallet(e), t && this.onFormatAndRedirect(t);
  }
  render() {
    const { name: t, id: e, image_id: r } = C.getWalletRouterData(), { isMobile: n, isDesktop: o } = x.getCachedRouterWalletPlatforms(), i = C.isMobile();
    return u`<wcm-modal-header title="${t}" .onAction="${x.handleUriCopy}" .actionIcon="${T.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${e}" imageId="${W(r)}" label="${`Continue in ${t}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`${t} web app has opened in a new tab. Go there, accept the connection, and come back`}</wcm-text><wcm-platform-selection .isMobile="${n}" .isDesktop="${i ? !1 : o}" .isRetry="${!0}"><wcm-button .onClick="${this.openWebWallet.bind(this)}" .iconRight="${T.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`;
  }
};
se.styles = [_.globalCss, Zl], oo([H()], se.prototype, "isError", 2), se = oo([O("wcm-web-connecting-view")], se);
export {
  Ut as WcmModal,
  X as WcmQrCode
};
