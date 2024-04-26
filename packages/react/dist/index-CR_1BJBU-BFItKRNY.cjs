"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const index = require("./index-4C1Bar2Z.cjs");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3 = window, e$5 = t$3.ShadowRoot && (void 0 === t$3.ShadyCSS || t$3.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$3 = Symbol(), n$5 = /* @__PURE__ */ new WeakMap();
let o$4 = class o {
  constructor(t2, e2, n2) {
    if (this._$cssResult$ = true, n2 !== s$3)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t2, this.t = e2;
  }
  get styleSheet() {
    let t2 = this.o;
    const s2 = this.t;
    if (e$5 && void 0 === t2) {
      const e2 = void 0 !== s2 && 1 === s2.length;
      e2 && (t2 = n$5.get(s2)), void 0 === t2 && ((this.o = t2 = new CSSStyleSheet()).replaceSync(this.cssText), e2 && n$5.set(s2, t2));
    }
    return t2;
  }
  toString() {
    return this.cssText;
  }
};
const r$2 = (t2) => new o$4("string" == typeof t2 ? t2 : t2 + "", void 0, s$3), i$3 = (t2, ...e2) => {
  const n2 = 1 === t2.length ? t2[0] : e2.reduce((e3, s2, n3) => e3 + ((t3) => {
    if (true === t3._$cssResult$)
      return t3.cssText;
    if ("number" == typeof t3)
      return t3;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s2) + t2[n3 + 1], t2[0]);
  return new o$4(n2, t2, s$3);
}, S$2 = (s2, n2) => {
  e$5 ? s2.adoptedStyleSheets = n2.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet) : n2.forEach((e2) => {
    const n3 = document.createElement("style"), o3 = t$3.litNonce;
    void 0 !== o3 && n3.setAttribute("nonce", o3), n3.textContent = e2.cssText, s2.appendChild(n3);
  });
}, c$2 = e$5 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
  let e2 = "";
  for (const s2 of t3.cssRules)
    e2 += s2.cssText;
  return r$2(e2);
})(t2) : t2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var s$2;
const e$4 = window, r$1 = e$4.trustedTypes, h$2 = r$1 ? r$1.emptyScript : "", o$3 = e$4.reactiveElementPolyfillSupport, n$4 = { toAttribute(t2, i2) {
  switch (i2) {
    case Boolean:
      t2 = t2 ? h$2 : null;
      break;
    case Object:
    case Array:
      t2 = null == t2 ? t2 : JSON.stringify(t2);
  }
  return t2;
}, fromAttribute(t2, i2) {
  let s2 = t2;
  switch (i2) {
    case Boolean:
      s2 = null !== t2;
      break;
    case Number:
      s2 = null === t2 ? null : Number(t2);
      break;
    case Object:
    case Array:
      try {
        s2 = JSON.parse(t2);
      } catch (t3) {
        s2 = null;
      }
  }
  return s2;
} }, a$1 = (t2, i2) => i2 !== t2 && (i2 == i2 || t2 == t2), l$3 = { attribute: true, type: String, converter: n$4, reflect: false, hasChanged: a$1 }, d$1 = "finalized";
let u$1 = class u extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this._$Eu();
  }
  static addInitializer(t2) {
    var i2;
    this.finalize(), (null !== (i2 = this.h) && void 0 !== i2 ? i2 : this.h = []).push(t2);
  }
  static get observedAttributes() {
    this.finalize();
    const t2 = [];
    return this.elementProperties.forEach((i2, s2) => {
      const e2 = this._$Ep(s2, i2);
      void 0 !== e2 && (this._$Ev.set(e2, s2), t2.push(e2));
    }), t2;
  }
  static createProperty(t2, i2 = l$3) {
    if (i2.state && (i2.attribute = false), this.finalize(), this.elementProperties.set(t2, i2), !i2.noAccessor && !this.prototype.hasOwnProperty(t2)) {
      const s2 = "symbol" == typeof t2 ? Symbol() : "__" + t2, e2 = this.getPropertyDescriptor(t2, s2, i2);
      void 0 !== e2 && Object.defineProperty(this.prototype, t2, e2);
    }
  }
  static getPropertyDescriptor(t2, i2, s2) {
    return { get() {
      return this[i2];
    }, set(e2) {
      const r2 = this[t2];
      this[i2] = e2, this.requestUpdate(t2, r2, s2);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) || l$3;
  }
  static finalize() {
    if (this.hasOwnProperty(d$1))
      return false;
    this[d$1] = true;
    const t2 = Object.getPrototypeOf(this);
    if (t2.finalize(), void 0 !== t2.h && (this.h = [...t2.h]), this.elementProperties = new Map(t2.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const t3 = this.properties, i2 = [...Object.getOwnPropertyNames(t3), ...Object.getOwnPropertySymbols(t3)];
      for (const s2 of i2)
        this.createProperty(s2, t3[s2]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(i2) {
    const s2 = [];
    if (Array.isArray(i2)) {
      const e2 = new Set(i2.flat(1 / 0).reverse());
      for (const i3 of e2)
        s2.unshift(c$2(i3));
    } else
      void 0 !== i2 && s2.push(c$2(i2));
    return s2;
  }
  static _$Ep(t2, i2) {
    const s2 = i2.attribute;
    return false === s2 ? void 0 : "string" == typeof s2 ? s2 : "string" == typeof t2 ? t2.toLowerCase() : void 0;
  }
  _$Eu() {
    var t2;
    this._$E_ = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t2 = this.constructor.h) || void 0 === t2 || t2.forEach((t3) => t3(this));
  }
  addController(t2) {
    var i2, s2;
    (null !== (i2 = this._$ES) && void 0 !== i2 ? i2 : this._$ES = []).push(t2), void 0 !== this.renderRoot && this.isConnected && (null === (s2 = t2.hostConnected) || void 0 === s2 || s2.call(t2));
  }
  removeController(t2) {
    var i2;
    null === (i2 = this._$ES) || void 0 === i2 || i2.splice(this._$ES.indexOf(t2) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t2, i2) => {
      this.hasOwnProperty(i2) && (this._$Ei.set(i2, this[i2]), delete this[i2]);
    });
  }
  createRenderRoot() {
    var t2;
    const s2 = null !== (t2 = this.shadowRoot) && void 0 !== t2 ? t2 : this.attachShadow(this.constructor.shadowRootOptions);
    return S$2(s2, this.constructor.elementStyles), s2;
  }
  connectedCallback() {
    var t2;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t2 = this._$ES) || void 0 === t2 || t2.forEach((t3) => {
      var i2;
      return null === (i2 = t3.hostConnected) || void 0 === i2 ? void 0 : i2.call(t3);
    });
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    var t2;
    null === (t2 = this._$ES) || void 0 === t2 || t2.forEach((t3) => {
      var i2;
      return null === (i2 = t3.hostDisconnected) || void 0 === i2 ? void 0 : i2.call(t3);
    });
  }
  attributeChangedCallback(t2, i2, s2) {
    this._$AK(t2, s2);
  }
  _$EO(t2, i2, s2 = l$3) {
    var e2;
    const r2 = this.constructor._$Ep(t2, s2);
    if (void 0 !== r2 && true === s2.reflect) {
      const h2 = (void 0 !== (null === (e2 = s2.converter) || void 0 === e2 ? void 0 : e2.toAttribute) ? s2.converter : n$4).toAttribute(i2, s2.type);
      this._$El = t2, null == h2 ? this.removeAttribute(r2) : this.setAttribute(r2, h2), this._$El = null;
    }
  }
  _$AK(t2, i2) {
    var s2;
    const e2 = this.constructor, r2 = e2._$Ev.get(t2);
    if (void 0 !== r2 && this._$El !== r2) {
      const t3 = e2.getPropertyOptions(r2), h2 = "function" == typeof t3.converter ? { fromAttribute: t3.converter } : void 0 !== (null === (s2 = t3.converter) || void 0 === s2 ? void 0 : s2.fromAttribute) ? t3.converter : n$4;
      this._$El = r2, this[r2] = h2.fromAttribute(i2, t3.type), this._$El = null;
    }
  }
  requestUpdate(t2, i2, s2) {
    let e2 = true;
    void 0 !== t2 && (((s2 = s2 || this.constructor.getPropertyOptions(t2)).hasChanged || a$1)(this[t2], i2) ? (this._$AL.has(t2) || this._$AL.set(t2, i2), true === s2.reflect && this._$El !== t2 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t2, s2))) : e2 = false), !this.isUpdatePending && e2 && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = true;
    try {
      await this._$E_;
    } catch (t3) {
      Promise.reject(t3);
    }
    const t2 = this.scheduleUpdate();
    return null != t2 && await t2, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t2;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((t3, i3) => this[i3] = t3), this._$Ei = void 0);
    let i2 = false;
    const s2 = this._$AL;
    try {
      i2 = this.shouldUpdate(s2), i2 ? (this.willUpdate(s2), null === (t2 = this._$ES) || void 0 === t2 || t2.forEach((t3) => {
        var i3;
        return null === (i3 = t3.hostUpdate) || void 0 === i3 ? void 0 : i3.call(t3);
      }), this.update(s2)) : this._$Ek();
    } catch (t3) {
      throw i2 = false, this._$Ek(), t3;
    }
    i2 && this._$AE(s2);
  }
  willUpdate(t2) {
  }
  _$AE(t2) {
    var i2;
    null === (i2 = this._$ES) || void 0 === i2 || i2.forEach((t3) => {
      var i3;
      return null === (i3 = t3.hostUpdated) || void 0 === i3 ? void 0 : i3.call(t3);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    void 0 !== this._$EC && (this._$EC.forEach((t3, i2) => this._$EO(i2, this[i2], t3)), this._$EC = void 0), this._$Ek();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
};
u$1[d$1] = true, u$1.elementProperties = /* @__PURE__ */ new Map(), u$1.elementStyles = [], u$1.shadowRootOptions = { mode: "open" }, null == o$3 || o$3({ ReactiveElement: u$1 }), (null !== (s$2 = e$4.reactiveElementVersions) && void 0 !== s$2 ? s$2 : e$4.reactiveElementVersions = []).push("1.6.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$2;
const i$2 = window, s$1 = i$2.trustedTypes, e$3 = s$1 ? s$1.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, o$2 = "$lit$", n$3 = `lit$${(Math.random() + "").slice(9)}$`, l$2 = "?" + n$3, h$1 = `<${l$2}>`, r = document, u2 = () => r.createComment(""), d = (t2) => null === t2 || "object" != typeof t2 && "function" != typeof t2, c$1 = Array.isArray, v$1 = (t2) => c$1(t2) || "function" == typeof (null == t2 ? void 0 : t2[Symbol.iterator]), a = "[ 	\n\f\r]", f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _$1 = /-->/g, m = />/g, p = RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), g = /'/g, $ = /"/g, y = /^(?:script|style|textarea|title)$/i, w = (t2) => (i2, ...s2) => ({ _$litType$: t2, strings: i2, values: s2 }), x = w(1), b = w(2), T$1 = Symbol.for("lit-noChange"), A$1 = Symbol.for("lit-nothing"), E = /* @__PURE__ */ new WeakMap(), C = r.createTreeWalker(r, 129, null, false);
function P(t2, i2) {
  if (!Array.isArray(t2) || !t2.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return void 0 !== e$3 ? e$3.createHTML(i2) : i2;
}
const V = (t2, i2) => {
  const s2 = t2.length - 1, e2 = [];
  let l2, r2 = 2 === i2 ? "<svg>" : "", u3 = f;
  for (let i3 = 0; i3 < s2; i3++) {
    const s3 = t2[i3];
    let d2, c2, v2 = -1, a2 = 0;
    for (; a2 < s3.length && (u3.lastIndex = a2, c2 = u3.exec(s3), null !== c2); )
      a2 = u3.lastIndex, u3 === f ? "!--" === c2[1] ? u3 = _$1 : void 0 !== c2[1] ? u3 = m : void 0 !== c2[2] ? (y.test(c2[2]) && (l2 = RegExp("</" + c2[2], "g")), u3 = p) : void 0 !== c2[3] && (u3 = p) : u3 === p ? ">" === c2[0] ? (u3 = null != l2 ? l2 : f, v2 = -1) : void 0 === c2[1] ? v2 = -2 : (v2 = u3.lastIndex - c2[2].length, d2 = c2[1], u3 = void 0 === c2[3] ? p : '"' === c2[3] ? $ : g) : u3 === $ || u3 === g ? u3 = p : u3 === _$1 || u3 === m ? u3 = f : (u3 = p, l2 = void 0);
    const w2 = u3 === p && t2[i3 + 1].startsWith("/>") ? " " : "";
    r2 += u3 === f ? s3 + h$1 : v2 >= 0 ? (e2.push(d2), s3.slice(0, v2) + o$2 + s3.slice(v2) + n$3 + w2) : s3 + n$3 + (-2 === v2 ? (e2.push(void 0), i3) : w2);
  }
  return [P(t2, r2 + (t2[s2] || "<?>") + (2 === i2 ? "</svg>" : "")), e2];
};
class N {
  constructor({ strings: t2, _$litType$: i2 }, e2) {
    let h2;
    this.parts = [];
    let r2 = 0, d2 = 0;
    const c2 = t2.length - 1, v2 = this.parts, [a2, f2] = V(t2, i2);
    if (this.el = N.createElement(a2, e2), C.currentNode = this.el.content, 2 === i2) {
      const t3 = this.el.content, i3 = t3.firstChild;
      i3.remove(), t3.append(...i3.childNodes);
    }
    for (; null !== (h2 = C.nextNode()) && v2.length < c2; ) {
      if (1 === h2.nodeType) {
        if (h2.hasAttributes()) {
          const t3 = [];
          for (const i3 of h2.getAttributeNames())
            if (i3.endsWith(o$2) || i3.startsWith(n$3)) {
              const s2 = f2[d2++];
              if (t3.push(i3), void 0 !== s2) {
                const t4 = h2.getAttribute(s2.toLowerCase() + o$2).split(n$3), i4 = /([.?@])?(.*)/.exec(s2);
                v2.push({ type: 1, index: r2, name: i4[2], strings: t4, ctor: "." === i4[1] ? H : "?" === i4[1] ? L$1 : "@" === i4[1] ? z : k });
              } else
                v2.push({ type: 6, index: r2 });
            }
          for (const i3 of t3)
            h2.removeAttribute(i3);
        }
        if (y.test(h2.tagName)) {
          const t3 = h2.textContent.split(n$3), i3 = t3.length - 1;
          if (i3 > 0) {
            h2.textContent = s$1 ? s$1.emptyScript : "";
            for (let s2 = 0; s2 < i3; s2++)
              h2.append(t3[s2], u2()), C.nextNode(), v2.push({ type: 2, index: ++r2 });
            h2.append(t3[i3], u2());
          }
        }
      } else if (8 === h2.nodeType)
        if (h2.data === l$2)
          v2.push({ type: 2, index: r2 });
        else {
          let t3 = -1;
          for (; -1 !== (t3 = h2.data.indexOf(n$3, t3 + 1)); )
            v2.push({ type: 7, index: r2 }), t3 += n$3.length - 1;
        }
      r2++;
    }
  }
  static createElement(t2, i2) {
    const s2 = r.createElement("template");
    return s2.innerHTML = t2, s2;
  }
}
function S$1(t2, i2, s2 = t2, e2) {
  var o3, n2, l2, h2;
  if (i2 === T$1)
    return i2;
  let r2 = void 0 !== e2 ? null === (o3 = s2._$Co) || void 0 === o3 ? void 0 : o3[e2] : s2._$Cl;
  const u3 = d(i2) ? void 0 : i2._$litDirective$;
  return (null == r2 ? void 0 : r2.constructor) !== u3 && (null === (n2 = null == r2 ? void 0 : r2._$AO) || void 0 === n2 || n2.call(r2, false), void 0 === u3 ? r2 = void 0 : (r2 = new u3(t2), r2._$AT(t2, s2, e2)), void 0 !== e2 ? (null !== (l2 = (h2 = s2)._$Co) && void 0 !== l2 ? l2 : h2._$Co = [])[e2] = r2 : s2._$Cl = r2), void 0 !== r2 && (i2 = S$1(t2, r2._$AS(t2, i2.values), r2, e2)), i2;
}
class M {
  constructor(t2, i2) {
    this._$AV = [], this._$AN = void 0, this._$AD = t2, this._$AM = i2;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t2) {
    var i2;
    const { el: { content: s2 }, parts: e2 } = this._$AD, o3 = (null !== (i2 = null == t2 ? void 0 : t2.creationScope) && void 0 !== i2 ? i2 : r).importNode(s2, true);
    C.currentNode = o3;
    let n2 = C.nextNode(), l2 = 0, h2 = 0, u3 = e2[0];
    for (; void 0 !== u3; ) {
      if (l2 === u3.index) {
        let i3;
        2 === u3.type ? i3 = new R(n2, n2.nextSibling, this, t2) : 1 === u3.type ? i3 = new u3.ctor(n2, u3.name, u3.strings, this, t2) : 6 === u3.type && (i3 = new Z$1(n2, this, t2)), this._$AV.push(i3), u3 = e2[++h2];
      }
      l2 !== (null == u3 ? void 0 : u3.index) && (n2 = C.nextNode(), l2++);
    }
    return C.currentNode = r, o3;
  }
  v(t2) {
    let i2 = 0;
    for (const s2 of this._$AV)
      void 0 !== s2 && (void 0 !== s2.strings ? (s2._$AI(t2, s2, i2), i2 += s2.strings.length - 2) : s2._$AI(t2[i2])), i2++;
  }
}
class R {
  constructor(t2, i2, s2, e2) {
    var o3;
    this.type = 2, this._$AH = A$1, this._$AN = void 0, this._$AA = t2, this._$AB = i2, this._$AM = s2, this.options = e2, this._$Cp = null === (o3 = null == e2 ? void 0 : e2.isConnected) || void 0 === o3 || o3;
  }
  get _$AU() {
    var t2, i2;
    return null !== (i2 = null === (t2 = this._$AM) || void 0 === t2 ? void 0 : t2._$AU) && void 0 !== i2 ? i2 : this._$Cp;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i2 = this._$AM;
    return void 0 !== i2 && 11 === (null == t2 ? void 0 : t2.nodeType) && (t2 = i2.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i2 = this) {
    t2 = S$1(this, t2, i2), d(t2) ? t2 === A$1 || null == t2 || "" === t2 ? (this._$AH !== A$1 && this._$AR(), this._$AH = A$1) : t2 !== this._$AH && t2 !== T$1 && this._(t2) : void 0 !== t2._$litType$ ? this.g(t2) : void 0 !== t2.nodeType ? this.$(t2) : v$1(t2) ? this.T(t2) : this._(t2);
  }
  k(t2) {
    return this._$AA.parentNode.insertBefore(t2, this._$AB);
  }
  $(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.k(t2));
  }
  _(t2) {
    this._$AH !== A$1 && d(this._$AH) ? this._$AA.nextSibling.data = t2 : this.$(r.createTextNode(t2)), this._$AH = t2;
  }
  g(t2) {
    var i2;
    const { values: s2, _$litType$: e2 } = t2, o3 = "number" == typeof e2 ? this._$AC(t2) : (void 0 === e2.el && (e2.el = N.createElement(P(e2.h, e2.h[0]), this.options)), e2);
    if ((null === (i2 = this._$AH) || void 0 === i2 ? void 0 : i2._$AD) === o3)
      this._$AH.v(s2);
    else {
      const t3 = new M(o3, this), i3 = t3.u(this.options);
      t3.v(s2), this.$(i3), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let i2 = E.get(t2.strings);
    return void 0 === i2 && E.set(t2.strings, i2 = new N(t2)), i2;
  }
  T(t2) {
    c$1(this._$AH) || (this._$AH = [], this._$AR());
    const i2 = this._$AH;
    let s2, e2 = 0;
    for (const o3 of t2)
      e2 === i2.length ? i2.push(s2 = new R(this.k(u2()), this.k(u2()), this, this.options)) : s2 = i2[e2], s2._$AI(o3), e2++;
    e2 < i2.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i2.length = e2);
  }
  _$AR(t2 = this._$AA.nextSibling, i2) {
    var s2;
    for (null === (s2 = this._$AP) || void 0 === s2 || s2.call(this, false, true, i2); t2 && t2 !== this._$AB; ) {
      const i3 = t2.nextSibling;
      t2.remove(), t2 = i3;
    }
  }
  setConnected(t2) {
    var i2;
    void 0 === this._$AM && (this._$Cp = t2, null === (i2 = this._$AP) || void 0 === i2 || i2.call(this, t2));
  }
}
class k {
  constructor(t2, i2, s2, e2, o3) {
    this.type = 1, this._$AH = A$1, this._$AN = void 0, this.element = t2, this.name = i2, this._$AM = e2, this.options = o3, s2.length > 2 || "" !== s2[0] || "" !== s2[1] ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = A$1;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2, i2 = this, s2, e2) {
    const o3 = this.strings;
    let n2 = false;
    if (void 0 === o3)
      t2 = S$1(this, t2, i2, 0), n2 = !d(t2) || t2 !== this._$AH && t2 !== T$1, n2 && (this._$AH = t2);
    else {
      const e3 = t2;
      let l2, h2;
      for (t2 = o3[0], l2 = 0; l2 < o3.length - 1; l2++)
        h2 = S$1(this, e3[s2 + l2], i2, l2), h2 === T$1 && (h2 = this._$AH[l2]), n2 || (n2 = !d(h2) || h2 !== this._$AH[l2]), h2 === A$1 ? t2 = A$1 : t2 !== A$1 && (t2 += (null != h2 ? h2 : "") + o3[l2 + 1]), this._$AH[l2] = h2;
    }
    n2 && !e2 && this.j(t2);
  }
  j(t2) {
    t2 === A$1 ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t2 ? t2 : "");
  }
}
class H extends k {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t2) {
    this.element[this.name] = t2 === A$1 ? void 0 : t2;
  }
}
const I = s$1 ? s$1.emptyScript : "";
let L$1 = class L extends k {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t2) {
    t2 && t2 !== A$1 ? this.element.setAttribute(this.name, I) : this.element.removeAttribute(this.name);
  }
};
class z extends k {
  constructor(t2, i2, s2, e2, o3) {
    super(t2, i2, s2, e2, o3), this.type = 5;
  }
  _$AI(t2, i2 = this) {
    var s2;
    if ((t2 = null !== (s2 = S$1(this, t2, i2, 0)) && void 0 !== s2 ? s2 : A$1) === T$1)
      return;
    const e2 = this._$AH, o3 = t2 === A$1 && e2 !== A$1 || t2.capture !== e2.capture || t2.once !== e2.once || t2.passive !== e2.passive, n2 = t2 !== A$1 && (e2 === A$1 || o3);
    o3 && this.element.removeEventListener(this.name, this, e2), n2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    var i2, s2;
    "function" == typeof this._$AH ? this._$AH.call(null !== (s2 = null === (i2 = this.options) || void 0 === i2 ? void 0 : i2.host) && void 0 !== s2 ? s2 : this.element, t2) : this._$AH.handleEvent(t2);
  }
}
let Z$1 = class Z {
  constructor(t2, i2, s2) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i2, this.options = s2;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    S$1(this, t2);
  }
};
const B$1 = i$2.litHtmlPolyfillSupport;
null == B$1 || B$1(N, R), (null !== (t$2 = i$2.litHtmlVersions) && void 0 !== t$2 ? t$2 : i$2.litHtmlVersions = []).push("2.8.0");
const D$1 = (t2, i2, s2) => {
  var e2, o3;
  const n2 = null !== (e2 = null == s2 ? void 0 : s2.renderBefore) && void 0 !== e2 ? e2 : i2;
  let l2 = n2._$litPart$;
  if (void 0 === l2) {
    const t3 = null !== (o3 = null == s2 ? void 0 : s2.renderBefore) && void 0 !== o3 ? o3 : null;
    n2._$litPart$ = l2 = new R(i2.insertBefore(u2(), t3), t3, void 0, null != s2 ? s2 : {});
  }
  return l2._$AI(t2), l2;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var l$1, o$1;
class s extends u$1 {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t2, e2;
    const i2 = super.createRenderRoot();
    return null !== (t2 = (e2 = this.renderOptions).renderBefore) && void 0 !== t2 || (e2.renderBefore = i2.firstChild), i2;
  }
  update(t2) {
    const i2 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Do = D$1(i2, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t2;
    super.connectedCallback(), null === (t2 = this._$Do) || void 0 === t2 || t2.setConnected(true);
  }
  disconnectedCallback() {
    var t2;
    super.disconnectedCallback(), null === (t2 = this._$Do) || void 0 === t2 || t2.setConnected(false);
  }
  render() {
    return T$1;
  }
}
s.finalized = true, s._$litElement$ = true, null === (l$1 = globalThis.litElementHydrateSupport) || void 0 === l$1 || l$1.call(globalThis, { LitElement: s });
const n$2 = globalThis.litElementPolyfillSupport;
null == n$2 || n$2({ LitElement: s });
(null !== (o$1 = globalThis.litElementVersions) && void 0 !== o$1 ? o$1 : globalThis.litElementVersions = []).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$2 = (e2) => (n2) => "function" == typeof n2 ? ((e3, n3) => (customElements.define(e3, n3), n3))(e2, n2) : ((e3, n3) => {
  const { kind: t2, elements: s2 } = n3;
  return { kind: t2, elements: s2, finisher(n4) {
    customElements.define(e3, n4);
  } };
})(e2, n2);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$1 = (i2, e2) => "method" === e2.kind && e2.descriptor && !("value" in e2.descriptor) ? { ...e2, finisher(n2) {
  n2.createProperty(e2.key, i2);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e2.key, initializer() {
  "function" == typeof e2.initializer && (this[e2.key] = e2.initializer.call(this));
}, finisher(n2) {
  n2.createProperty(e2.key, i2);
} }, e$1 = (i2, e2, n2) => {
  e2.constructor.createProperty(n2, i2);
};
function n$1(n2) {
  return (t2, o3) => void 0 !== o3 ? e$1(n2, t2, o3) : i$1(n2, t2);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function t$1(t2) {
  return n$1({ ...t2, state: true });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var n;
null != (null === (n = window.HTMLSlotElement) || void 0 === n ? void 0 : n.prototype.assignedElements) ? (o3, n2) => o3.assignedElements(n2) : (o3, n2) => o3.assignedNodes(n2).filter((o4) => o4.nodeType === Node.ELEMENT_NODE);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, e = (t2) => (...e2) => ({ _$litDirective$: t2, values: e2 });
class i {
  constructor(t2) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t2, e2, i2) {
    this._$Ct = t2, this._$AM = e2, this._$Ci = i2;
  }
  _$AS(t2, e2) {
    return this.update(t2, e2);
  }
  update(t2, e2) {
    return this.render(...e2);
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o2 = e(class extends i {
  constructor(t$12) {
    var i2;
    if (super(t$12), t$12.type !== t.ATTRIBUTE || "class" !== t$12.name || (null === (i2 = t$12.strings) || void 0 === i2 ? void 0 : i2.length) > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t2) {
    return " " + Object.keys(t2).filter((i2) => t2[i2]).join(" ") + " ";
  }
  update(i2, [s2]) {
    var r2, o3;
    if (void 0 === this.it) {
      this.it = /* @__PURE__ */ new Set(), void 0 !== i2.strings && (this.nt = new Set(i2.strings.join(" ").split(/\s/).filter((t2) => "" !== t2)));
      for (const t2 in s2)
        s2[t2] && !(null === (r2 = this.nt) || void 0 === r2 ? void 0 : r2.has(t2)) && this.it.add(t2);
      return this.render(s2);
    }
    const e2 = i2.element.classList;
    this.it.forEach((t2) => {
      t2 in s2 || (e2.remove(t2), this.it.delete(t2));
    });
    for (const t2 in s2) {
      const i3 = !!s2[t2];
      i3 === this.it.has(t2) || (null === (o3 = this.nt) || void 0 === o3 ? void 0 : o3.has(t2)) || (i3 ? (e2.add(t2), this.it.add(t2)) : (e2.remove(t2), this.it.delete(t2)));
    }
    return T$1;
  }
});
function addUniqueItem(array, item) {
  array.indexOf(item) === -1 && array.push(item);
}
const clamp = (min, max, v2) => Math.min(Math.max(v2, min), max);
const defaults = {
  duration: 0.3,
  delay: 0,
  endDelay: 0,
  repeat: 0,
  easing: "ease"
};
const isNumber = (value) => typeof value === "number";
const isEasingList = (easing) => Array.isArray(easing) && !isNumber(easing[0]);
const wrap = (min, max, v2) => {
  const rangeSize = max - min;
  return ((v2 - min) % rangeSize + rangeSize) % rangeSize + min;
};
function getEasingForSegment(easing, i2) {
  return isEasingList(easing) ? easing[wrap(0, easing.length, i2)] : easing;
}
const mix = (min, max, progress2) => -progress2 * min + progress2 * max + min;
const noop = () => {
};
const noopReturn = (v2) => v2;
const progress = (min, max, value) => max - min === 0 ? 1 : (value - min) / (max - min);
function fillOffset(offset, remaining) {
  const min = offset[offset.length - 1];
  for (let i2 = 1; i2 <= remaining; i2++) {
    const offsetProgress = progress(0, remaining, i2);
    offset.push(mix(min, 1, offsetProgress));
  }
}
function defaultOffset(length) {
  const offset = [0];
  fillOffset(offset, length - 1);
  return offset;
}
function interpolate(output, input = defaultOffset(output.length), easing = noopReturn) {
  const length = output.length;
  const remainder = length - input.length;
  remainder > 0 && fillOffset(input, remainder);
  return (t2) => {
    let i2 = 0;
    for (; i2 < length - 2; i2++) {
      if (t2 < input[i2 + 1])
        break;
    }
    let progressInRange = clamp(0, 1, progress(input[i2], input[i2 + 1], t2));
    const segmentEasing = getEasingForSegment(easing, i2);
    progressInRange = segmentEasing(progressInRange);
    return mix(output[i2], output[i2 + 1], progressInRange);
  };
}
const isCubicBezier = (easing) => Array.isArray(easing) && isNumber(easing[0]);
const isEasingGenerator = (easing) => typeof easing === "object" && Boolean(easing.createAnimation);
const isFunction = (value) => typeof value === "function";
const isString = (value) => typeof value === "string";
const time = {
  ms: (seconds) => seconds * 1e3,
  s: (milliseconds) => milliseconds / 1e3
};
const calcBezier = (t2, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t2 + (3 * a2 - 6 * a1)) * t2 + 3 * a1) * t2;
const subdivisionPrecision = 1e-7;
const subdivisionMaxIterations = 12;
function binarySubdivide(x2, lowerBound, upperBound, mX1, mX2) {
  let currentX;
  let currentT;
  let i2 = 0;
  do {
    currentT = lowerBound + (upperBound - lowerBound) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - x2;
    if (currentX > 0) {
      upperBound = currentT;
    } else {
      lowerBound = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i2 < subdivisionMaxIterations);
  return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2)
    return noopReturn;
  const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
  return (t2) => t2 === 0 || t2 === 1 ? t2 : calcBezier(getTForX(t2), mY1, mY2);
}
const steps = (steps2, direction = "end") => (progress2) => {
  progress2 = direction === "end" ? Math.min(progress2, 0.999) : Math.max(progress2, 1e-3);
  const expanded = progress2 * steps2;
  const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
  return clamp(0, 1, rounded / steps2);
};
const namedEasings = {
  ease: cubicBezier(0.25, 0.1, 0.25, 1),
  "ease-in": cubicBezier(0.42, 0, 1, 1),
  "ease-in-out": cubicBezier(0.42, 0, 0.58, 1),
  "ease-out": cubicBezier(0, 0, 0.58, 1)
};
const functionArgsRegex = /\((.*?)\)/;
function getEasingFunction(definition) {
  if (isFunction(definition))
    return definition;
  if (isCubicBezier(definition))
    return cubicBezier(...definition);
  if (namedEasings[definition])
    return namedEasings[definition];
  if (definition.startsWith("steps")) {
    const args = functionArgsRegex.exec(definition);
    if (args) {
      const argsArray = args[1].split(",");
      return steps(parseFloat(argsArray[0]), argsArray[1].trim());
    }
  }
  return noopReturn;
}
class Animation {
  constructor(output, keyframes = [0, 1], { easing, duration: initialDuration = defaults.duration, delay = defaults.delay, endDelay = defaults.endDelay, repeat = defaults.repeat, offset, direction = "normal", autoplay = true } = {}) {
    this.startTime = null;
    this.rate = 1;
    this.t = 0;
    this.cancelTimestamp = null;
    this.easing = noopReturn;
    this.duration = 0;
    this.totalDuration = 0;
    this.repeat = 0;
    this.playState = "idle";
    this.finished = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
    easing = easing || defaults.easing;
    if (isEasingGenerator(easing)) {
      const custom = easing.createAnimation(keyframes);
      easing = custom.easing;
      keyframes = custom.keyframes || keyframes;
      initialDuration = custom.duration || initialDuration;
    }
    this.repeat = repeat;
    this.easing = isEasingList(easing) ? noopReturn : getEasingFunction(easing);
    this.updateDuration(initialDuration);
    const interpolate$1 = interpolate(keyframes, offset, isEasingList(easing) ? easing.map(getEasingFunction) : noopReturn);
    this.tick = (timestamp) => {
      var _a;
      delay = delay;
      let t2 = 0;
      if (this.pauseTime !== void 0) {
        t2 = this.pauseTime;
      } else {
        t2 = (timestamp - this.startTime) * this.rate;
      }
      this.t = t2;
      t2 /= 1e3;
      t2 = Math.max(t2 - delay, 0);
      if (this.playState === "finished" && this.pauseTime === void 0) {
        t2 = this.totalDuration;
      }
      const progress2 = t2 / this.duration;
      let currentIteration = Math.floor(progress2);
      let iterationProgress = progress2 % 1;
      if (!iterationProgress && progress2 >= 1) {
        iterationProgress = 1;
      }
      iterationProgress === 1 && currentIteration--;
      const iterationIsOdd = currentIteration % 2;
      if (direction === "reverse" || direction === "alternate" && iterationIsOdd || direction === "alternate-reverse" && !iterationIsOdd) {
        iterationProgress = 1 - iterationProgress;
      }
      const p2 = t2 >= this.totalDuration ? 1 : Math.min(iterationProgress, 1);
      const latest = interpolate$1(this.easing(p2));
      output(latest);
      const isAnimationFinished = this.pauseTime === void 0 && (this.playState === "finished" || t2 >= this.totalDuration + endDelay);
      if (isAnimationFinished) {
        this.playState = "finished";
        (_a = this.resolve) === null || _a === void 0 ? void 0 : _a.call(this, latest);
      } else if (this.playState !== "idle") {
        this.frameRequestId = requestAnimationFrame(this.tick);
      }
    };
    if (autoplay)
      this.play();
  }
  play() {
    const now = performance.now();
    this.playState = "running";
    if (this.pauseTime !== void 0) {
      this.startTime = now - this.pauseTime;
    } else if (!this.startTime) {
      this.startTime = now;
    }
    this.cancelTimestamp = this.startTime;
    this.pauseTime = void 0;
    this.frameRequestId = requestAnimationFrame(this.tick);
  }
  pause() {
    this.playState = "paused";
    this.pauseTime = this.t;
  }
  finish() {
    this.playState = "finished";
    this.tick(0);
  }
  stop() {
    var _a;
    this.playState = "idle";
    if (this.frameRequestId !== void 0) {
      cancelAnimationFrame(this.frameRequestId);
    }
    (_a = this.reject) === null || _a === void 0 ? void 0 : _a.call(this, false);
  }
  cancel() {
    this.stop();
    this.tick(this.cancelTimestamp);
  }
  reverse() {
    this.rate *= -1;
  }
  commitStyles() {
  }
  updateDuration(duration) {
    this.duration = duration;
    this.totalDuration = duration * (this.repeat + 1);
  }
  get currentTime() {
    return this.t;
  }
  set currentTime(t2) {
    if (this.pauseTime !== void 0 || this.rate === 0) {
      this.pauseTime = t2;
    } else {
      this.startTime = performance.now() - t2 / this.rate;
    }
  }
  get playbackRate() {
    return this.rate;
  }
  set playbackRate(rate) {
    this.rate = rate;
  }
}
var invariant = function() {
};
if (process.env.NODE_ENV !== "production") {
  invariant = function(check, message) {
    if (!check) {
      throw new Error(message);
    }
  };
}
class MotionValue {
  setAnimation(animation) {
    this.animation = animation;
    animation === null || animation === void 0 ? void 0 : animation.finished.then(() => this.clearAnimation()).catch(() => {
    });
  }
  clearAnimation() {
    this.animation = this.generator = void 0;
  }
}
const data = /* @__PURE__ */ new WeakMap();
function getAnimationData(element) {
  if (!data.has(element)) {
    data.set(element, {
      transforms: [],
      values: /* @__PURE__ */ new Map()
    });
  }
  return data.get(element);
}
function getMotionValue(motionValues, name) {
  if (!motionValues.has(name)) {
    motionValues.set(name, new MotionValue());
  }
  return motionValues.get(name);
}
const axes = ["", "X", "Y", "Z"];
const order = ["translate", "scale", "rotate", "skew"];
const transformAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ"
};
const rotation = {
  syntax: "<angle>",
  initialValue: "0deg",
  toDefaultUnit: (v2) => v2 + "deg"
};
const baseTransformProperties = {
  translate: {
    syntax: "<length-percentage>",
    initialValue: "0px",
    toDefaultUnit: (v2) => v2 + "px"
  },
  rotate: rotation,
  scale: {
    syntax: "<number>",
    initialValue: 1,
    toDefaultUnit: noopReturn
  },
  skew: rotation
};
const transformDefinitions = /* @__PURE__ */ new Map();
const asTransformCssVar = (name) => `--motion-${name}`;
const transforms = ["x", "y", "z"];
order.forEach((name) => {
  axes.forEach((axis) => {
    transforms.push(name + axis);
    transformDefinitions.set(asTransformCssVar(name + axis), baseTransformProperties[name]);
  });
});
const compareTransformOrder = (a2, b2) => transforms.indexOf(a2) - transforms.indexOf(b2);
const transformLookup = new Set(transforms);
const isTransform = (name) => transformLookup.has(name);
const addTransformToElement = (element, name) => {
  if (transformAlias[name])
    name = transformAlias[name];
  const { transforms: transforms2 } = getAnimationData(element);
  addUniqueItem(transforms2, name);
  element.style.transform = buildTransformTemplate(transforms2);
};
const buildTransformTemplate = (transforms2) => transforms2.sort(compareTransformOrder).reduce(transformListToString, "").trim();
const transformListToString = (template, name) => `${template} ${name}(var(${asTransformCssVar(name)}))`;
const isCssVar = (name) => name.startsWith("--");
const registeredProperties = /* @__PURE__ */ new Set();
function registerCssVariable(name) {
  if (registeredProperties.has(name))
    return;
  registeredProperties.add(name);
  try {
    const { syntax, initialValue } = transformDefinitions.has(name) ? transformDefinitions.get(name) : {};
    CSS.registerProperty({
      name,
      inherits: false,
      syntax,
      initialValue
    });
  } catch (e2) {
  }
}
const testAnimation = (keyframes, options) => document.createElement("div").animate(keyframes, options);
const featureTests = {
  cssRegisterProperty: () => typeof CSS !== "undefined" && Object.hasOwnProperty.call(CSS, "registerProperty"),
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
  partialKeyframes: () => {
    try {
      testAnimation({ opacity: [1] });
    } catch (e2) {
      return false;
    }
    return true;
  },
  finished: () => Boolean(testAnimation({ opacity: [0, 1] }, { duration: 1e-3 }).finished),
  linearEasing: () => {
    try {
      testAnimation({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch (e2) {
      return false;
    }
    return true;
  }
};
const results = {};
const supports = {};
for (const key in featureTests) {
  supports[key] = () => {
    if (results[key] === void 0)
      results[key] = featureTests[key]();
    return results[key];
  };
}
const resolution = 0.015;
const generateLinearEasingPoints = (easing, duration) => {
  let points = "";
  const numPoints = Math.round(duration / resolution);
  for (let i2 = 0; i2 < numPoints; i2++) {
    points += easing(progress(0, numPoints - 1, i2)) + ", ";
  }
  return points.substring(0, points.length - 2);
};
const convertEasing = (easing, duration) => {
  if (isFunction(easing)) {
    return supports.linearEasing() ? `linear(${generateLinearEasingPoints(easing, duration)})` : defaults.easing;
  } else {
    return isCubicBezier(easing) ? cubicBezierAsString(easing) : easing;
  }
};
const cubicBezierAsString = ([a2, b2, c2, d2]) => `cubic-bezier(${a2}, ${b2}, ${c2}, ${d2})`;
function hydrateKeyframes(keyframes, readInitialValue) {
  for (let i2 = 0; i2 < keyframes.length; i2++) {
    if (keyframes[i2] === null) {
      keyframes[i2] = i2 ? keyframes[i2 - 1] : readInitialValue();
    }
  }
  return keyframes;
}
const keyframesList = (keyframes) => Array.isArray(keyframes) ? keyframes : [keyframes];
function getStyleName(key) {
  if (transformAlias[key])
    key = transformAlias[key];
  return isTransform(key) ? asTransformCssVar(key) : key;
}
const style = {
  get: (element, name) => {
    name = getStyleName(name);
    let value = isCssVar(name) ? element.style.getPropertyValue(name) : getComputedStyle(element)[name];
    if (!value && value !== 0) {
      const definition = transformDefinitions.get(name);
      if (definition)
        value = definition.initialValue;
    }
    return value;
  },
  set: (element, name, value) => {
    name = getStyleName(name);
    if (isCssVar(name)) {
      element.style.setProperty(name, value);
    } else {
      element.style[name] = value;
    }
  }
};
function stopAnimation(animation, needsCommit = true) {
  if (!animation || animation.playState === "finished")
    return;
  try {
    if (animation.stop) {
      animation.stop();
    } else {
      needsCommit && animation.commitStyles();
      animation.cancel();
    }
  } catch (e2) {
  }
}
function getUnitConverter(keyframes, definition) {
  var _a;
  let toUnit = (definition === null || definition === void 0 ? void 0 : definition.toDefaultUnit) || noopReturn;
  const finalKeyframe = keyframes[keyframes.length - 1];
  if (isString(finalKeyframe)) {
    const unit = ((_a = finalKeyframe.match(/(-?[\d.]+)([a-z%]*)/)) === null || _a === void 0 ? void 0 : _a[2]) || "";
    if (unit)
      toUnit = (value) => value + unit;
  }
  return toUnit;
}
function getDevToolsRecord() {
  return window.__MOTION_DEV_TOOLS_RECORD;
}
function animateStyle(element, key, keyframesDefinition, options = {}, AnimationPolyfill) {
  const record = getDevToolsRecord();
  const isRecording = options.record !== false && record;
  let animation;
  let { duration = defaults.duration, delay = defaults.delay, endDelay = defaults.endDelay, repeat = defaults.repeat, easing = defaults.easing, persist = false, direction, offset, allowWebkitAcceleration = false, autoplay = true } = options;
  const data2 = getAnimationData(element);
  const valueIsTransform = isTransform(key);
  let canAnimateNatively = supports.waapi();
  valueIsTransform && addTransformToElement(element, key);
  const name = getStyleName(key);
  const motionValue = getMotionValue(data2.values, name);
  const definition = transformDefinitions.get(name);
  stopAnimation(motionValue.animation, !(isEasingGenerator(easing) && motionValue.generator) && options.record !== false);
  return () => {
    const readInitialValue = () => {
      var _a, _b;
      return (_b = (_a = style.get(element, name)) !== null && _a !== void 0 ? _a : definition === null || definition === void 0 ? void 0 : definition.initialValue) !== null && _b !== void 0 ? _b : 0;
    };
    let keyframes = hydrateKeyframes(keyframesList(keyframesDefinition), readInitialValue);
    const toUnit = getUnitConverter(keyframes, definition);
    if (isEasingGenerator(easing)) {
      const custom = easing.createAnimation(keyframes, key !== "opacity", readInitialValue, name, motionValue);
      easing = custom.easing;
      keyframes = custom.keyframes || keyframes;
      duration = custom.duration || duration;
    }
    if (isCssVar(name)) {
      if (supports.cssRegisterProperty()) {
        registerCssVariable(name);
      } else {
        canAnimateNatively = false;
      }
    }
    if (valueIsTransform && !supports.linearEasing() && (isFunction(easing) || isEasingList(easing) && easing.some(isFunction))) {
      canAnimateNatively = false;
    }
    if (canAnimateNatively) {
      if (definition) {
        keyframes = keyframes.map((value) => isNumber(value) ? definition.toDefaultUnit(value) : value);
      }
      if (keyframes.length === 1 && (!supports.partialKeyframes() || isRecording)) {
        keyframes.unshift(readInitialValue());
      }
      const animationOptions = {
        delay: time.ms(delay),
        duration: time.ms(duration),
        endDelay: time.ms(endDelay),
        easing: !isEasingList(easing) ? convertEasing(easing, duration) : void 0,
        direction,
        iterations: repeat + 1,
        fill: "both"
      };
      animation = element.animate({
        [name]: keyframes,
        offset,
        easing: isEasingList(easing) ? easing.map((thisEasing) => convertEasing(thisEasing, duration)) : void 0
      }, animationOptions);
      if (!animation.finished) {
        animation.finished = new Promise((resolve, reject) => {
          animation.onfinish = resolve;
          animation.oncancel = reject;
        });
      }
      const target = keyframes[keyframes.length - 1];
      animation.finished.then(() => {
        if (persist)
          return;
        style.set(element, name, target);
        animation.cancel();
      }).catch(noop);
      if (!allowWebkitAcceleration)
        animation.playbackRate = 1.000001;
    } else if (AnimationPolyfill && valueIsTransform) {
      keyframes = keyframes.map((value) => typeof value === "string" ? parseFloat(value) : value);
      if (keyframes.length === 1) {
        keyframes.unshift(parseFloat(readInitialValue()));
      }
      animation = new AnimationPolyfill((latest) => {
        style.set(element, name, toUnit ? toUnit(latest) : latest);
      }, keyframes, Object.assign(Object.assign({}, options), {
        duration,
        easing
      }));
    } else {
      const target = keyframes[keyframes.length - 1];
      style.set(element, name, definition && isNumber(target) ? definition.toDefaultUnit(target) : target);
    }
    if (isRecording) {
      record(element, key, keyframes, {
        duration,
        delay,
        easing,
        repeat,
        offset
      }, "motion-one");
    }
    motionValue.setAnimation(animation);
    if (animation && !autoplay)
      animation.pause();
    return animation;
  };
}
const getOptions = (options, key) => (
  /**
   * TODO: Make test for this
   * Always return a new object otherwise delay is overwritten by results of stagger
   * and this results in no stagger
   */
  options[key] ? Object.assign(Object.assign({}, options), options[key]) : Object.assign({}, options)
);
function resolveElements(elements, selectorCache) {
  var _a;
  if (typeof elements === "string") {
    if (selectorCache) {
      (_a = selectorCache[elements]) !== null && _a !== void 0 ? _a : selectorCache[elements] = document.querySelectorAll(elements);
      elements = selectorCache[elements];
    } else {
      elements = document.querySelectorAll(elements);
    }
  } else if (elements instanceof Element) {
    elements = [elements];
  }
  return Array.from(elements || []);
}
const createAnimation = (factory) => factory();
const withControls = (animationFactory, options, duration = defaults.duration) => {
  return new Proxy({
    animations: animationFactory.map(createAnimation).filter(Boolean),
    duration,
    options
  }, controls);
};
const getActiveAnimation = (state) => state.animations[0];
const controls = {
  get: (target, key) => {
    const activeAnimation = getActiveAnimation(target);
    switch (key) {
      case "duration":
        return target.duration;
      case "currentTime":
        return time.s((activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) || 0);
      case "playbackRate":
      case "playState":
        return activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key];
      case "finished":
        if (!target.finished) {
          target.finished = Promise.all(target.animations.map(selectFinished)).catch(noop);
        }
        return target.finished;
      case "stop":
        return () => {
          target.animations.forEach((animation) => stopAnimation(animation));
        };
      case "forEachNative":
        return (callback) => {
          target.animations.forEach((animation) => callback(animation, target));
        };
      default:
        return typeof (activeAnimation === null || activeAnimation === void 0 ? void 0 : activeAnimation[key]) === "undefined" ? void 0 : () => target.animations.forEach((animation) => animation[key]());
    }
  },
  set: (target, key, value) => {
    switch (key) {
      case "currentTime":
        value = time.ms(value);
      case "playbackRate":
        for (let i2 = 0; i2 < target.animations.length; i2++) {
          target.animations[i2][key] = value;
        }
        return true;
    }
    return false;
  }
};
const selectFinished = (animation) => animation.finished;
function resolveOption(option, i2, total) {
  return isFunction(option) ? option(i2, total) : option;
}
function createAnimate(AnimatePolyfill) {
  return function animate2(elements, keyframes, options = {}) {
    elements = resolveElements(elements);
    const numElements = elements.length;
    invariant(Boolean(numElements), "No valid element provided.");
    invariant(Boolean(keyframes), "No keyframes defined.");
    const animationFactories = [];
    for (let i2 = 0; i2 < numElements; i2++) {
      const element = elements[i2];
      for (const key in keyframes) {
        const valueOptions = getOptions(options, key);
        valueOptions.delay = resolveOption(valueOptions.delay, i2, numElements);
        const animation = animateStyle(element, key, keyframes[key], valueOptions, AnimatePolyfill);
        animationFactories.push(animation);
      }
    }
    return withControls(
      animationFactories,
      options,
      /**
       * TODO:
       * If easing is set to spring or glide, duration will be dynamically
       * generated. Ideally we would dynamically generate this from
       * animation.effect.getComputedTiming().duration but this isn't
       * supported in iOS13 or our number polyfill. Perhaps it's possible
       * to Proxy animations returned from animateStyle that has duration
       * as a getter.
       */
      options.duration
    );
  };
}
const animate$1 = createAnimate(Animation);
function animateProgress(target, options = {}) {
  return withControls([
    () => {
      const animation = new Animation(target, [0, 1], options);
      animation.finished.catch(() => {
      });
      return animation;
    }
  ], options, options.duration);
}
function animate(target, keyframesOrOptions, options) {
  const factory = isFunction(target) ? animateProgress : animate$1;
  return factory(target, keyframesOrOptions, options);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const l = (l2) => null != l2 ? l2 : A$1;
var browser = {};
var canPromise$1 = function() {
  return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
};
var qrcode = {};
var utils$1 = {};
let toSJISFunction;
const CODEWORDS_COUNT = [
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
utils$1.getSymbolSize = function getSymbolSize(version2) {
  if (!version2)
    throw new Error('"version" cannot be null or undefined');
  if (version2 < 1 || version2 > 40)
    throw new Error('"version" should be in range from 1 to 40');
  return version2 * 4 + 17;
};
utils$1.getSymbolTotalCodewords = function getSymbolTotalCodewords(version2) {
  return CODEWORDS_COUNT[version2];
};
utils$1.getBCHDigit = function(data2) {
  let digit = 0;
  while (data2 !== 0) {
    digit++;
    data2 >>>= 1;
  }
  return digit;
};
utils$1.setToSJISFunction = function setToSJISFunction(f2) {
  if (typeof f2 !== "function") {
    throw new Error('"toSJISFunc" is not a valid function.');
  }
  toSJISFunction = f2;
};
utils$1.isKanjiModeEnabled = function() {
  return typeof toSJISFunction !== "undefined";
};
utils$1.toSJIS = function toSJIS(kanji2) {
  return toSJISFunction(kanji2);
};
var errorCorrectionLevel = {};
(function(exports2) {
  exports2.L = { bit: 1 };
  exports2.M = { bit: 0 };
  exports2.Q = { bit: 3 };
  exports2.H = { bit: 2 };
  function fromString(string) {
    if (typeof string !== "string") {
      throw new Error("Param is not a string");
    }
    const lcStr = string.toLowerCase();
    switch (lcStr) {
      case "l":
      case "low":
        return exports2.L;
      case "m":
      case "medium":
        return exports2.M;
      case "q":
      case "quartile":
        return exports2.Q;
      case "h":
      case "high":
        return exports2.H;
      default:
        throw new Error("Unknown EC Level: " + string);
    }
  }
  exports2.isValid = function isValid2(level) {
    return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
  };
  exports2.from = function from(value, defaultValue) {
    if (exports2.isValid(value)) {
      return value;
    }
    try {
      return fromString(value);
    } catch (e2) {
      return defaultValue;
    }
  };
})(errorCorrectionLevel);
function BitBuffer$1() {
  this.buffer = [];
  this.length = 0;
}
BitBuffer$1.prototype = {
  get: function(index2) {
    const bufIndex = Math.floor(index2 / 8);
    return (this.buffer[bufIndex] >>> 7 - index2 % 8 & 1) === 1;
  },
  put: function(num, length) {
    for (let i2 = 0; i2 < length; i2++) {
      this.putBit((num >>> length - i2 - 1 & 1) === 1);
    }
  },
  getLengthInBits: function() {
    return this.length;
  },
  putBit: function(bit) {
    const bufIndex = Math.floor(this.length / 8);
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0);
    }
    if (bit) {
      this.buffer[bufIndex] |= 128 >>> this.length % 8;
    }
    this.length++;
  }
};
var bitBuffer = BitBuffer$1;
function BitMatrix$1(size) {
  if (!size || size < 1) {
    throw new Error("BitMatrix size must be defined and greater than 0");
  }
  this.size = size;
  this.data = new Uint8Array(size * size);
  this.reservedBit = new Uint8Array(size * size);
}
BitMatrix$1.prototype.set = function(row, col, value, reserved) {
  const index2 = row * this.size + col;
  this.data[index2] = value;
  if (reserved)
    this.reservedBit[index2] = true;
};
BitMatrix$1.prototype.get = function(row, col) {
  return this.data[row * this.size + col];
};
BitMatrix$1.prototype.xor = function(row, col, value) {
  this.data[row * this.size + col] ^= value;
};
BitMatrix$1.prototype.isReserved = function(row, col) {
  return this.reservedBit[row * this.size + col];
};
var bitMatrix = BitMatrix$1;
var alignmentPattern = {};
(function(exports2) {
  const getSymbolSize3 = utils$1.getSymbolSize;
  exports2.getRowColCoords = function getRowColCoords(version2) {
    if (version2 === 1)
      return [];
    const posCount = Math.floor(version2 / 7) + 2;
    const size = getSymbolSize3(version2);
    const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
    const positions = [size - 7];
    for (let i2 = 1; i2 < posCount - 1; i2++) {
      positions[i2] = positions[i2 - 1] - intervals;
    }
    positions.push(6);
    return positions.reverse();
  };
  exports2.getPositions = function getPositions2(version2) {
    const coords = [];
    const pos = exports2.getRowColCoords(version2);
    const posLength = pos.length;
    for (let i2 = 0; i2 < posLength; i2++) {
      for (let j2 = 0; j2 < posLength; j2++) {
        if (i2 === 0 && j2 === 0 || // top-left
        i2 === 0 && j2 === posLength - 1 || // bottom-left
        i2 === posLength - 1 && j2 === 0) {
          continue;
        }
        coords.push([pos[i2], pos[j2]]);
      }
    }
    return coords;
  };
})(alignmentPattern);
var finderPattern = {};
const getSymbolSize2 = utils$1.getSymbolSize;
const FINDER_PATTERN_SIZE = 7;
finderPattern.getPositions = function getPositions(version2) {
  const size = getSymbolSize2(version2);
  return [
    // top-left
    [0, 0],
    // top-right
    [size - FINDER_PATTERN_SIZE, 0],
    // bottom-left
    [0, size - FINDER_PATTERN_SIZE]
  ];
};
var maskPattern = {};
(function(exports2) {
  exports2.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  const PenaltyScores = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  };
  exports2.isValid = function isValid2(mask) {
    return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
  };
  exports2.from = function from(value) {
    return exports2.isValid(value) ? parseInt(value, 10) : void 0;
  };
  exports2.getPenaltyN1 = function getPenaltyN1(data2) {
    const size = data2.size;
    let points = 0;
    let sameCountCol = 0;
    let sameCountRow = 0;
    let lastCol = null;
    let lastRow = null;
    for (let row = 0; row < size; row++) {
      sameCountCol = sameCountRow = 0;
      lastCol = lastRow = null;
      for (let col = 0; col < size; col++) {
        let module2 = data2.get(row, col);
        if (module2 === lastCol) {
          sameCountCol++;
        } else {
          if (sameCountCol >= 5)
            points += PenaltyScores.N1 + (sameCountCol - 5);
          lastCol = module2;
          sameCountCol = 1;
        }
        module2 = data2.get(col, row);
        if (module2 === lastRow) {
          sameCountRow++;
        } else {
          if (sameCountRow >= 5)
            points += PenaltyScores.N1 + (sameCountRow - 5);
          lastRow = module2;
          sameCountRow = 1;
        }
      }
      if (sameCountCol >= 5)
        points += PenaltyScores.N1 + (sameCountCol - 5);
      if (sameCountRow >= 5)
        points += PenaltyScores.N1 + (sameCountRow - 5);
    }
    return points;
  };
  exports2.getPenaltyN2 = function getPenaltyN2(data2) {
    const size = data2.size;
    let points = 0;
    for (let row = 0; row < size - 1; row++) {
      for (let col = 0; col < size - 1; col++) {
        const last = data2.get(row, col) + data2.get(row, col + 1) + data2.get(row + 1, col) + data2.get(row + 1, col + 1);
        if (last === 4 || last === 0)
          points++;
      }
    }
    return points * PenaltyScores.N2;
  };
  exports2.getPenaltyN3 = function getPenaltyN3(data2) {
    const size = data2.size;
    let points = 0;
    let bitsCol = 0;
    let bitsRow = 0;
    for (let row = 0; row < size; row++) {
      bitsCol = bitsRow = 0;
      for (let col = 0; col < size; col++) {
        bitsCol = bitsCol << 1 & 2047 | data2.get(row, col);
        if (col >= 10 && (bitsCol === 1488 || bitsCol === 93))
          points++;
        bitsRow = bitsRow << 1 & 2047 | data2.get(col, row);
        if (col >= 10 && (bitsRow === 1488 || bitsRow === 93))
          points++;
      }
    }
    return points * PenaltyScores.N3;
  };
  exports2.getPenaltyN4 = function getPenaltyN4(data2) {
    let darkCount = 0;
    const modulesCount = data2.data.length;
    for (let i2 = 0; i2 < modulesCount; i2++)
      darkCount += data2.data[i2];
    const k2 = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
    return k2 * PenaltyScores.N4;
  };
  function getMaskAt(maskPattern2, i2, j2) {
    switch (maskPattern2) {
      case exports2.Patterns.PATTERN000:
        return (i2 + j2) % 2 === 0;
      case exports2.Patterns.PATTERN001:
        return i2 % 2 === 0;
      case exports2.Patterns.PATTERN010:
        return j2 % 3 === 0;
      case exports2.Patterns.PATTERN011:
        return (i2 + j2) % 3 === 0;
      case exports2.Patterns.PATTERN100:
        return (Math.floor(i2 / 2) + Math.floor(j2 / 3)) % 2 === 0;
      case exports2.Patterns.PATTERN101:
        return i2 * j2 % 2 + i2 * j2 % 3 === 0;
      case exports2.Patterns.PATTERN110:
        return (i2 * j2 % 2 + i2 * j2 % 3) % 2 === 0;
      case exports2.Patterns.PATTERN111:
        return (i2 * j2 % 3 + (i2 + j2) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + maskPattern2);
    }
  }
  exports2.applyMask = function applyMask(pattern, data2) {
    const size = data2.size;
    for (let col = 0; col < size; col++) {
      for (let row = 0; row < size; row++) {
        if (data2.isReserved(row, col))
          continue;
        data2.xor(row, col, getMaskAt(pattern, row, col));
      }
    }
  };
  exports2.getBestMask = function getBestMask(data2, setupFormatFunc) {
    const numPatterns = Object.keys(exports2.Patterns).length;
    let bestPattern = 0;
    let lowerPenalty = Infinity;
    for (let p2 = 0; p2 < numPatterns; p2++) {
      setupFormatFunc(p2);
      exports2.applyMask(p2, data2);
      const penalty = exports2.getPenaltyN1(data2) + exports2.getPenaltyN2(data2) + exports2.getPenaltyN3(data2) + exports2.getPenaltyN4(data2);
      exports2.applyMask(p2, data2);
      if (penalty < lowerPenalty) {
        lowerPenalty = penalty;
        bestPattern = p2;
      }
    }
    return bestPattern;
  };
})(maskPattern);
var errorCorrectionCode = {};
const ECLevel$1 = errorCorrectionLevel;
const EC_BLOCKS_TABLE = [
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
];
const EC_CODEWORDS_TABLE = [
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
errorCorrectionCode.getBlocksCount = function getBlocksCount(version2, errorCorrectionLevel2) {
  switch (errorCorrectionLevel2) {
    case ECLevel$1.L:
      return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 0];
    case ECLevel$1.M:
      return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 1];
    case ECLevel$1.Q:
      return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 2];
    case ECLevel$1.H:
      return EC_BLOCKS_TABLE[(version2 - 1) * 4 + 3];
    default:
      return void 0;
  }
};
errorCorrectionCode.getTotalCodewordsCount = function getTotalCodewordsCount(version2, errorCorrectionLevel2) {
  switch (errorCorrectionLevel2) {
    case ECLevel$1.L:
      return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 0];
    case ECLevel$1.M:
      return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 1];
    case ECLevel$1.Q:
      return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 2];
    case ECLevel$1.H:
      return EC_CODEWORDS_TABLE[(version2 - 1) * 4 + 3];
    default:
      return void 0;
  }
};
var polynomial = {};
var galoisField = {};
const EXP_TABLE = new Uint8Array(512);
const LOG_TABLE = new Uint8Array(256);
(function initTables() {
  let x2 = 1;
  for (let i2 = 0; i2 < 255; i2++) {
    EXP_TABLE[i2] = x2;
    LOG_TABLE[x2] = i2;
    x2 <<= 1;
    if (x2 & 256) {
      x2 ^= 285;
    }
  }
  for (let i2 = 255; i2 < 512; i2++) {
    EXP_TABLE[i2] = EXP_TABLE[i2 - 255];
  }
})();
galoisField.log = function log(n2) {
  if (n2 < 1)
    throw new Error("log(" + n2 + ")");
  return LOG_TABLE[n2];
};
galoisField.exp = function exp(n2) {
  return EXP_TABLE[n2];
};
galoisField.mul = function mul(x2, y2) {
  if (x2 === 0 || y2 === 0)
    return 0;
  return EXP_TABLE[LOG_TABLE[x2] + LOG_TABLE[y2]];
};
(function(exports2) {
  const GF = galoisField;
  exports2.mul = function mul2(p1, p2) {
    const coeff = new Uint8Array(p1.length + p2.length - 1);
    for (let i2 = 0; i2 < p1.length; i2++) {
      for (let j2 = 0; j2 < p2.length; j2++) {
        coeff[i2 + j2] ^= GF.mul(p1[i2], p2[j2]);
      }
    }
    return coeff;
  };
  exports2.mod = function mod(divident, divisor) {
    let result = new Uint8Array(divident);
    while (result.length - divisor.length >= 0) {
      const coeff = result[0];
      for (let i2 = 0; i2 < divisor.length; i2++) {
        result[i2] ^= GF.mul(divisor[i2], coeff);
      }
      let offset = 0;
      while (offset < result.length && result[offset] === 0)
        offset++;
      result = result.slice(offset);
    }
    return result;
  };
  exports2.generateECPolynomial = function generateECPolynomial(degree) {
    let poly = new Uint8Array([1]);
    for (let i2 = 0; i2 < degree; i2++) {
      poly = exports2.mul(poly, new Uint8Array([1, GF.exp(i2)]));
    }
    return poly;
  };
})(polynomial);
const Polynomial = polynomial;
function ReedSolomonEncoder$1(degree) {
  this.genPoly = void 0;
  this.degree = degree;
  if (this.degree)
    this.initialize(this.degree);
}
ReedSolomonEncoder$1.prototype.initialize = function initialize(degree) {
  this.degree = degree;
  this.genPoly = Polynomial.generateECPolynomial(this.degree);
};
ReedSolomonEncoder$1.prototype.encode = function encode(data2) {
  if (!this.genPoly) {
    throw new Error("Encoder not initialized");
  }
  const paddedData = new Uint8Array(data2.length + this.degree);
  paddedData.set(data2);
  const remainder = Polynomial.mod(paddedData, this.genPoly);
  const start = this.degree - remainder.length;
  if (start > 0) {
    const buff = new Uint8Array(this.degree);
    buff.set(remainder, start);
    return buff;
  }
  return remainder;
};
var reedSolomonEncoder = ReedSolomonEncoder$1;
var version = {};
var mode = {};
var versionCheck = {};
versionCheck.isValid = function isValid(version2) {
  return !isNaN(version2) && version2 >= 1 && version2 <= 40;
};
var regex = {};
const numeric = "[0-9]+";
const alphanumeric = "[A-Z $%*+\\-./:]+";
let kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
kanji = kanji.replace(/u/g, "\\u");
const byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
regex.KANJI = new RegExp(kanji, "g");
regex.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
regex.BYTE = new RegExp(byte, "g");
regex.NUMERIC = new RegExp(numeric, "g");
regex.ALPHANUMERIC = new RegExp(alphanumeric, "g");
const TEST_KANJI = new RegExp("^" + kanji + "$");
const TEST_NUMERIC = new RegExp("^" + numeric + "$");
const TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
regex.testKanji = function testKanji(str) {
  return TEST_KANJI.test(str);
};
regex.testNumeric = function testNumeric(str) {
  return TEST_NUMERIC.test(str);
};
regex.testAlphanumeric = function testAlphanumeric(str) {
  return TEST_ALPHANUMERIC.test(str);
};
(function(exports2) {
  const VersionCheck = versionCheck;
  const Regex = regex;
  exports2.NUMERIC = {
    id: "Numeric",
    bit: 1 << 0,
    ccBits: [10, 12, 14]
  };
  exports2.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 1 << 1,
    ccBits: [9, 11, 13]
  };
  exports2.BYTE = {
    id: "Byte",
    bit: 1 << 2,
    ccBits: [8, 16, 16]
  };
  exports2.KANJI = {
    id: "Kanji",
    bit: 1 << 3,
    ccBits: [8, 10, 12]
  };
  exports2.MIXED = {
    bit: -1
  };
  exports2.getCharCountIndicator = function getCharCountIndicator(mode2, version2) {
    if (!mode2.ccBits)
      throw new Error("Invalid mode: " + mode2);
    if (!VersionCheck.isValid(version2)) {
      throw new Error("Invalid version: " + version2);
    }
    if (version2 >= 1 && version2 < 10)
      return mode2.ccBits[0];
    else if (version2 < 27)
      return mode2.ccBits[1];
    return mode2.ccBits[2];
  };
  exports2.getBestModeForData = function getBestModeForData(dataStr) {
    if (Regex.testNumeric(dataStr))
      return exports2.NUMERIC;
    else if (Regex.testAlphanumeric(dataStr))
      return exports2.ALPHANUMERIC;
    else if (Regex.testKanji(dataStr))
      return exports2.KANJI;
    else
      return exports2.BYTE;
  };
  exports2.toString = function toString(mode2) {
    if (mode2 && mode2.id)
      return mode2.id;
    throw new Error("Invalid mode");
  };
  exports2.isValid = function isValid2(mode2) {
    return mode2 && mode2.bit && mode2.ccBits;
  };
  function fromString(string) {
    if (typeof string !== "string") {
      throw new Error("Param is not a string");
    }
    const lcStr = string.toLowerCase();
    switch (lcStr) {
      case "numeric":
        return exports2.NUMERIC;
      case "alphanumeric":
        return exports2.ALPHANUMERIC;
      case "kanji":
        return exports2.KANJI;
      case "byte":
        return exports2.BYTE;
      default:
        throw new Error("Unknown mode: " + string);
    }
  }
  exports2.from = function from(value, defaultValue) {
    if (exports2.isValid(value)) {
      return value;
    }
    try {
      return fromString(value);
    } catch (e2) {
      return defaultValue;
    }
  };
})(mode);
(function(exports2) {
  const Utils2 = utils$1;
  const ECCode2 = errorCorrectionCode;
  const ECLevel2 = errorCorrectionLevel;
  const Mode2 = mode;
  const VersionCheck = versionCheck;
  const G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
  const G18_BCH = Utils2.getBCHDigit(G18);
  function getBestVersionForDataLength(mode2, length, errorCorrectionLevel2) {
    for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
      if (length <= exports2.getCapacity(currentVersion, errorCorrectionLevel2, mode2)) {
        return currentVersion;
      }
    }
    return void 0;
  }
  function getReservedBitsCount(mode2, version2) {
    return Mode2.getCharCountIndicator(mode2, version2) + 4;
  }
  function getTotalBitsFromDataArray(segments2, version2) {
    let totalBits = 0;
    segments2.forEach(function(data2) {
      const reservedBits = getReservedBitsCount(data2.mode, version2);
      totalBits += reservedBits + data2.getBitsLength();
    });
    return totalBits;
  }
  function getBestVersionForMixedData(segments2, errorCorrectionLevel2) {
    for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
      const length = getTotalBitsFromDataArray(segments2, currentVersion);
      if (length <= exports2.getCapacity(currentVersion, errorCorrectionLevel2, Mode2.MIXED)) {
        return currentVersion;
      }
    }
    return void 0;
  }
  exports2.from = function from(value, defaultValue) {
    if (VersionCheck.isValid(value)) {
      return parseInt(value, 10);
    }
    return defaultValue;
  };
  exports2.getCapacity = function getCapacity(version2, errorCorrectionLevel2, mode2) {
    if (!VersionCheck.isValid(version2)) {
      throw new Error("Invalid QR Code version");
    }
    if (typeof mode2 === "undefined")
      mode2 = Mode2.BYTE;
    const totalCodewords = Utils2.getSymbolTotalCodewords(version2);
    const ecTotalCodewords = ECCode2.getTotalCodewordsCount(version2, errorCorrectionLevel2);
    const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
    if (mode2 === Mode2.MIXED)
      return dataTotalCodewordsBits;
    const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode2, version2);
    switch (mode2) {
      case Mode2.NUMERIC:
        return Math.floor(usableBits / 10 * 3);
      case Mode2.ALPHANUMERIC:
        return Math.floor(usableBits / 11 * 2);
      case Mode2.KANJI:
        return Math.floor(usableBits / 13);
      case Mode2.BYTE:
      default:
        return Math.floor(usableBits / 8);
    }
  };
  exports2.getBestVersionForData = function getBestVersionForData(data2, errorCorrectionLevel2) {
    let seg;
    const ecl = ECLevel2.from(errorCorrectionLevel2, ECLevel2.M);
    if (Array.isArray(data2)) {
      if (data2.length > 1) {
        return getBestVersionForMixedData(data2, ecl);
      }
      if (data2.length === 0) {
        return 1;
      }
      seg = data2[0];
    } else {
      seg = data2;
    }
    return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
  };
  exports2.getEncodedBits = function getEncodedBits2(version2) {
    if (!VersionCheck.isValid(version2) || version2 < 7) {
      throw new Error("Invalid QR Code version");
    }
    let d2 = version2 << 12;
    while (Utils2.getBCHDigit(d2) - G18_BCH >= 0) {
      d2 ^= G18 << Utils2.getBCHDigit(d2) - G18_BCH;
    }
    return version2 << 12 | d2;
  };
})(version);
var formatInfo = {};
const Utils$3 = utils$1;
const G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
const G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
const G15_BCH = Utils$3.getBCHDigit(G15);
formatInfo.getEncodedBits = function getEncodedBits(errorCorrectionLevel2, mask) {
  const data2 = errorCorrectionLevel2.bit << 3 | mask;
  let d2 = data2 << 10;
  while (Utils$3.getBCHDigit(d2) - G15_BCH >= 0) {
    d2 ^= G15 << Utils$3.getBCHDigit(d2) - G15_BCH;
  }
  return (data2 << 10 | d2) ^ G15_MASK;
};
var segments = {};
const Mode$4 = mode;
function NumericData(data2) {
  this.mode = Mode$4.NUMERIC;
  this.data = data2.toString();
}
NumericData.getBitsLength = function getBitsLength(length) {
  return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
};
NumericData.prototype.getLength = function getLength() {
  return this.data.length;
};
NumericData.prototype.getBitsLength = function getBitsLength2() {
  return NumericData.getBitsLength(this.data.length);
};
NumericData.prototype.write = function write(bitBuffer2) {
  let i2, group, value;
  for (i2 = 0; i2 + 3 <= this.data.length; i2 += 3) {
    group = this.data.substr(i2, 3);
    value = parseInt(group, 10);
    bitBuffer2.put(value, 10);
  }
  const remainingNum = this.data.length - i2;
  if (remainingNum > 0) {
    group = this.data.substr(i2);
    value = parseInt(group, 10);
    bitBuffer2.put(value, remainingNum * 3 + 1);
  }
};
var numericData = NumericData;
const Mode$3 = mode;
const ALPHA_NUM_CHARS = [
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
function AlphanumericData(data2) {
  this.mode = Mode$3.ALPHANUMERIC;
  this.data = data2;
}
AlphanumericData.getBitsLength = function getBitsLength3(length) {
  return 11 * Math.floor(length / 2) + 6 * (length % 2);
};
AlphanumericData.prototype.getLength = function getLength2() {
  return this.data.length;
};
AlphanumericData.prototype.getBitsLength = function getBitsLength4() {
  return AlphanumericData.getBitsLength(this.data.length);
};
AlphanumericData.prototype.write = function write2(bitBuffer2) {
  let i2;
  for (i2 = 0; i2 + 2 <= this.data.length; i2 += 2) {
    let value = ALPHA_NUM_CHARS.indexOf(this.data[i2]) * 45;
    value += ALPHA_NUM_CHARS.indexOf(this.data[i2 + 1]);
    bitBuffer2.put(value, 11);
  }
  if (this.data.length % 2) {
    bitBuffer2.put(ALPHA_NUM_CHARS.indexOf(this.data[i2]), 6);
  }
};
var alphanumericData = AlphanumericData;
var encodeUtf8$1 = function encodeUtf8(input) {
  var result = [];
  var size = input.length;
  for (var index2 = 0; index2 < size; index2++) {
    var point = input.charCodeAt(index2);
    if (point >= 55296 && point <= 56319 && size > index2 + 1) {
      var second = input.charCodeAt(index2 + 1);
      if (second >= 56320 && second <= 57343) {
        point = (point - 55296) * 1024 + second - 56320 + 65536;
        index2 += 1;
      }
    }
    if (point < 128) {
      result.push(point);
      continue;
    }
    if (point < 2048) {
      result.push(point >> 6 | 192);
      result.push(point & 63 | 128);
      continue;
    }
    if (point < 55296 || point >= 57344 && point < 65536) {
      result.push(point >> 12 | 224);
      result.push(point >> 6 & 63 | 128);
      result.push(point & 63 | 128);
      continue;
    }
    if (point >= 65536 && point <= 1114111) {
      result.push(point >> 18 | 240);
      result.push(point >> 12 & 63 | 128);
      result.push(point >> 6 & 63 | 128);
      result.push(point & 63 | 128);
      continue;
    }
    result.push(239, 191, 189);
  }
  return new Uint8Array(result).buffer;
};
const encodeUtf82 = encodeUtf8$1;
const Mode$2 = mode;
function ByteData(data2) {
  this.mode = Mode$2.BYTE;
  if (typeof data2 === "string") {
    data2 = encodeUtf82(data2);
  }
  this.data = new Uint8Array(data2);
}
ByteData.getBitsLength = function getBitsLength5(length) {
  return length * 8;
};
ByteData.prototype.getLength = function getLength3() {
  return this.data.length;
};
ByteData.prototype.getBitsLength = function getBitsLength6() {
  return ByteData.getBitsLength(this.data.length);
};
ByteData.prototype.write = function(bitBuffer2) {
  for (let i2 = 0, l2 = this.data.length; i2 < l2; i2++) {
    bitBuffer2.put(this.data[i2], 8);
  }
};
var byteData = ByteData;
const Mode$1 = mode;
const Utils$2 = utils$1;
function KanjiData(data2) {
  this.mode = Mode$1.KANJI;
  this.data = data2;
}
KanjiData.getBitsLength = function getBitsLength7(length) {
  return length * 13;
};
KanjiData.prototype.getLength = function getLength4() {
  return this.data.length;
};
KanjiData.prototype.getBitsLength = function getBitsLength8() {
  return KanjiData.getBitsLength(this.data.length);
};
KanjiData.prototype.write = function(bitBuffer2) {
  let i2;
  for (i2 = 0; i2 < this.data.length; i2++) {
    let value = Utils$2.toSJIS(this.data[i2]);
    if (value >= 33088 && value <= 40956) {
      value -= 33088;
    } else if (value >= 57408 && value <= 60351) {
      value -= 49472;
    } else {
      throw new Error(
        "Invalid SJIS character: " + this.data[i2] + "\nMake sure your charset is UTF-8"
      );
    }
    value = (value >>> 8 & 255) * 192 + (value & 255);
    bitBuffer2.put(value, 13);
  }
};
var kanjiData = KanjiData;
var dijkstra = { exports: {} };
(function(module2) {
  var dijkstra2 = {
    single_source_shortest_paths: function(graph, s2, d2) {
      var predecessors = {};
      var costs = {};
      costs[s2] = 0;
      var open = dijkstra2.PriorityQueue.make();
      open.push(s2, 0);
      var closest, u3, v2, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
      while (!open.empty()) {
        closest = open.pop();
        u3 = closest.value;
        cost_of_s_to_u = closest.cost;
        adjacent_nodes = graph[u3] || {};
        for (v2 in adjacent_nodes) {
          if (adjacent_nodes.hasOwnProperty(v2)) {
            cost_of_e = adjacent_nodes[v2];
            cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
            cost_of_s_to_v = costs[v2];
            first_visit = typeof costs[v2] === "undefined";
            if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
              costs[v2] = cost_of_s_to_u_plus_cost_of_e;
              open.push(v2, cost_of_s_to_u_plus_cost_of_e);
              predecessors[v2] = u3;
            }
          }
        }
      }
      if (typeof d2 !== "undefined" && typeof costs[d2] === "undefined") {
        var msg = ["Could not find a path from ", s2, " to ", d2, "."].join("");
        throw new Error(msg);
      }
      return predecessors;
    },
    extract_shortest_path_from_predecessor_list: function(predecessors, d2) {
      var nodes = [];
      var u3 = d2;
      while (u3) {
        nodes.push(u3);
        predecessors[u3];
        u3 = predecessors[u3];
      }
      nodes.reverse();
      return nodes;
    },
    find_path: function(graph, s2, d2) {
      var predecessors = dijkstra2.single_source_shortest_paths(graph, s2, d2);
      return dijkstra2.extract_shortest_path_from_predecessor_list(
        predecessors,
        d2
      );
    },
    /**
     * A very naive priority queue implementation.
     */
    PriorityQueue: {
      make: function(opts) {
        var T2 = dijkstra2.PriorityQueue, t2 = {}, key;
        opts = opts || {};
        for (key in T2) {
          if (T2.hasOwnProperty(key)) {
            t2[key] = T2[key];
          }
        }
        t2.queue = [];
        t2.sorter = opts.sorter || T2.default_sorter;
        return t2;
      },
      default_sorter: function(a2, b2) {
        return a2.cost - b2.cost;
      },
      /**
       * Add a new item to the queue and ensure the highest priority element
       * is at the front of the queue.
       */
      push: function(value, cost) {
        var item = { value, cost };
        this.queue.push(item);
        this.queue.sort(this.sorter);
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
  {
    module2.exports = dijkstra2;
  }
})(dijkstra);
var dijkstraExports = dijkstra.exports;
(function(exports2) {
  const Mode2 = mode;
  const NumericData2 = numericData;
  const AlphanumericData2 = alphanumericData;
  const ByteData2 = byteData;
  const KanjiData2 = kanjiData;
  const Regex = regex;
  const Utils2 = utils$1;
  const dijkstra2 = dijkstraExports;
  function getStringByteLength(str) {
    return unescape(encodeURIComponent(str)).length;
  }
  function getSegments(regex2, mode2, str) {
    const segments2 = [];
    let result;
    while ((result = regex2.exec(str)) !== null) {
      segments2.push({
        data: result[0],
        index: result.index,
        mode: mode2,
        length: result[0].length
      });
    }
    return segments2;
  }
  function getSegmentsFromString(dataStr) {
    const numSegs = getSegments(Regex.NUMERIC, Mode2.NUMERIC, dataStr);
    const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode2.ALPHANUMERIC, dataStr);
    let byteSegs;
    let kanjiSegs;
    if (Utils2.isKanjiModeEnabled()) {
      byteSegs = getSegments(Regex.BYTE, Mode2.BYTE, dataStr);
      kanjiSegs = getSegments(Regex.KANJI, Mode2.KANJI, dataStr);
    } else {
      byteSegs = getSegments(Regex.BYTE_KANJI, Mode2.BYTE, dataStr);
      kanjiSegs = [];
    }
    const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
    return segs.sort(function(s1, s2) {
      return s1.index - s2.index;
    }).map(function(obj) {
      return {
        data: obj.data,
        mode: obj.mode,
        length: obj.length
      };
    });
  }
  function getSegmentBitsLength(length, mode2) {
    switch (mode2) {
      case Mode2.NUMERIC:
        return NumericData2.getBitsLength(length);
      case Mode2.ALPHANUMERIC:
        return AlphanumericData2.getBitsLength(length);
      case Mode2.KANJI:
        return KanjiData2.getBitsLength(length);
      case Mode2.BYTE:
        return ByteData2.getBitsLength(length);
    }
  }
  function mergeSegments(segs) {
    return segs.reduce(function(acc, curr) {
      const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
      if (prevSeg && prevSeg.mode === curr.mode) {
        acc[acc.length - 1].data += curr.data;
        return acc;
      }
      acc.push(curr);
      return acc;
    }, []);
  }
  function buildNodes(segs) {
    const nodes = [];
    for (let i2 = 0; i2 < segs.length; i2++) {
      const seg = segs[i2];
      switch (seg.mode) {
        case Mode2.NUMERIC:
          nodes.push([
            seg,
            { data: seg.data, mode: Mode2.ALPHANUMERIC, length: seg.length },
            { data: seg.data, mode: Mode2.BYTE, length: seg.length }
          ]);
          break;
        case Mode2.ALPHANUMERIC:
          nodes.push([
            seg,
            { data: seg.data, mode: Mode2.BYTE, length: seg.length }
          ]);
          break;
        case Mode2.KANJI:
          nodes.push([
            seg,
            { data: seg.data, mode: Mode2.BYTE, length: getStringByteLength(seg.data) }
          ]);
          break;
        case Mode2.BYTE:
          nodes.push([
            { data: seg.data, mode: Mode2.BYTE, length: getStringByteLength(seg.data) }
          ]);
      }
    }
    return nodes;
  }
  function buildGraph(nodes, version2) {
    const table = {};
    const graph = { start: {} };
    let prevNodeIds = ["start"];
    for (let i2 = 0; i2 < nodes.length; i2++) {
      const nodeGroup = nodes[i2];
      const currentNodeIds = [];
      for (let j2 = 0; j2 < nodeGroup.length; j2++) {
        const node = nodeGroup[j2];
        const key = "" + i2 + j2;
        currentNodeIds.push(key);
        table[key] = { node, lastCount: 0 };
        graph[key] = {};
        for (let n2 = 0; n2 < prevNodeIds.length; n2++) {
          const prevNodeId = prevNodeIds[n2];
          if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
            graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
            table[prevNodeId].lastCount += node.length;
          } else {
            if (table[prevNodeId])
              table[prevNodeId].lastCount = node.length;
            graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode2.getCharCountIndicator(node.mode, version2);
          }
        }
      }
      prevNodeIds = currentNodeIds;
    }
    for (let n2 = 0; n2 < prevNodeIds.length; n2++) {
      graph[prevNodeIds[n2]].end = 0;
    }
    return { map: graph, table };
  }
  function buildSingleSegment(data2, modesHint) {
    let mode2;
    const bestMode = Mode2.getBestModeForData(data2);
    mode2 = Mode2.from(modesHint, bestMode);
    if (mode2 !== Mode2.BYTE && mode2.bit < bestMode.bit) {
      throw new Error('"' + data2 + '" cannot be encoded with mode ' + Mode2.toString(mode2) + ".\n Suggested mode is: " + Mode2.toString(bestMode));
    }
    if (mode2 === Mode2.KANJI && !Utils2.isKanjiModeEnabled()) {
      mode2 = Mode2.BYTE;
    }
    switch (mode2) {
      case Mode2.NUMERIC:
        return new NumericData2(data2);
      case Mode2.ALPHANUMERIC:
        return new AlphanumericData2(data2);
      case Mode2.KANJI:
        return new KanjiData2(data2);
      case Mode2.BYTE:
        return new ByteData2(data2);
    }
  }
  exports2.fromArray = function fromArray(array) {
    return array.reduce(function(acc, seg) {
      if (typeof seg === "string") {
        acc.push(buildSingleSegment(seg, null));
      } else if (seg.data) {
        acc.push(buildSingleSegment(seg.data, seg.mode));
      }
      return acc;
    }, []);
  };
  exports2.fromString = function fromString(data2, version2) {
    const segs = getSegmentsFromString(data2, Utils2.isKanjiModeEnabled());
    const nodes = buildNodes(segs);
    const graph = buildGraph(nodes, version2);
    const path = dijkstra2.find_path(graph.map, "start", "end");
    const optimizedSegs = [];
    for (let i2 = 1; i2 < path.length - 1; i2++) {
      optimizedSegs.push(graph.table[path[i2]].node);
    }
    return exports2.fromArray(mergeSegments(optimizedSegs));
  };
  exports2.rawSplit = function rawSplit(data2) {
    return exports2.fromArray(
      getSegmentsFromString(data2, Utils2.isKanjiModeEnabled())
    );
  };
})(segments);
const Utils$1 = utils$1;
const ECLevel = errorCorrectionLevel;
const BitBuffer = bitBuffer;
const BitMatrix = bitMatrix;
const AlignmentPattern = alignmentPattern;
const FinderPattern = finderPattern;
const MaskPattern = maskPattern;
const ECCode = errorCorrectionCode;
const ReedSolomonEncoder = reedSolomonEncoder;
const Version = version;
const FormatInfo = formatInfo;
const Mode = mode;
const Segments = segments;
function setupFinderPattern(matrix, version2) {
  const size = matrix.size;
  const pos = FinderPattern.getPositions(version2);
  for (let i2 = 0; i2 < pos.length; i2++) {
    const row = pos[i2][0];
    const col = pos[i2][1];
    for (let r2 = -1; r2 <= 7; r2++) {
      if (row + r2 <= -1 || size <= row + r2)
        continue;
      for (let c2 = -1; c2 <= 7; c2++) {
        if (col + c2 <= -1 || size <= col + c2)
          continue;
        if (r2 >= 0 && r2 <= 6 && (c2 === 0 || c2 === 6) || c2 >= 0 && c2 <= 6 && (r2 === 0 || r2 === 6) || r2 >= 2 && r2 <= 4 && c2 >= 2 && c2 <= 4) {
          matrix.set(row + r2, col + c2, true, true);
        } else {
          matrix.set(row + r2, col + c2, false, true);
        }
      }
    }
  }
}
function setupTimingPattern(matrix) {
  const size = matrix.size;
  for (let r2 = 8; r2 < size - 8; r2++) {
    const value = r2 % 2 === 0;
    matrix.set(r2, 6, value, true);
    matrix.set(6, r2, value, true);
  }
}
function setupAlignmentPattern(matrix, version2) {
  const pos = AlignmentPattern.getPositions(version2);
  for (let i2 = 0; i2 < pos.length; i2++) {
    const row = pos[i2][0];
    const col = pos[i2][1];
    for (let r2 = -2; r2 <= 2; r2++) {
      for (let c2 = -2; c2 <= 2; c2++) {
        if (r2 === -2 || r2 === 2 || c2 === -2 || c2 === 2 || r2 === 0 && c2 === 0) {
          matrix.set(row + r2, col + c2, true, true);
        } else {
          matrix.set(row + r2, col + c2, false, true);
        }
      }
    }
  }
}
function setupVersionInfo(matrix, version2) {
  const size = matrix.size;
  const bits = Version.getEncodedBits(version2);
  let row, col, mod;
  for (let i2 = 0; i2 < 18; i2++) {
    row = Math.floor(i2 / 3);
    col = i2 % 3 + size - 8 - 3;
    mod = (bits >> i2 & 1) === 1;
    matrix.set(row, col, mod, true);
    matrix.set(col, row, mod, true);
  }
}
function setupFormatInfo(matrix, errorCorrectionLevel2, maskPattern2) {
  const size = matrix.size;
  const bits = FormatInfo.getEncodedBits(errorCorrectionLevel2, maskPattern2);
  let i2, mod;
  for (i2 = 0; i2 < 15; i2++) {
    mod = (bits >> i2 & 1) === 1;
    if (i2 < 6) {
      matrix.set(i2, 8, mod, true);
    } else if (i2 < 8) {
      matrix.set(i2 + 1, 8, mod, true);
    } else {
      matrix.set(size - 15 + i2, 8, mod, true);
    }
    if (i2 < 8) {
      matrix.set(8, size - i2 - 1, mod, true);
    } else if (i2 < 9) {
      matrix.set(8, 15 - i2 - 1 + 1, mod, true);
    } else {
      matrix.set(8, 15 - i2 - 1, mod, true);
    }
  }
  matrix.set(size - 8, 8, 1, true);
}
function setupData(matrix, data2) {
  const size = matrix.size;
  let inc = -1;
  let row = size - 1;
  let bitIndex = 7;
  let byteIndex = 0;
  for (let col = size - 1; col > 0; col -= 2) {
    if (col === 6)
      col--;
    while (true) {
      for (let c2 = 0; c2 < 2; c2++) {
        if (!matrix.isReserved(row, col - c2)) {
          let dark = false;
          if (byteIndex < data2.length) {
            dark = (data2[byteIndex] >>> bitIndex & 1) === 1;
          }
          matrix.set(row, col - c2, dark);
          bitIndex--;
          if (bitIndex === -1) {
            byteIndex++;
            bitIndex = 7;
          }
        }
      }
      row += inc;
      if (row < 0 || size <= row) {
        row -= inc;
        inc = -inc;
        break;
      }
    }
  }
}
function createData(version2, errorCorrectionLevel2, segments2) {
  const buffer = new BitBuffer();
  segments2.forEach(function(data2) {
    buffer.put(data2.mode.bit, 4);
    buffer.put(data2.getLength(), Mode.getCharCountIndicator(data2.mode, version2));
    data2.write(buffer);
  });
  const totalCodewords = Utils$1.getSymbolTotalCodewords(version2);
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version2, errorCorrectionLevel2);
  const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
  if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
    buffer.put(0, 4);
  }
  while (buffer.getLengthInBits() % 8 !== 0) {
    buffer.putBit(0);
  }
  const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
  for (let i2 = 0; i2 < remainingByte; i2++) {
    buffer.put(i2 % 2 ? 17 : 236, 8);
  }
  return createCodewords(buffer, version2, errorCorrectionLevel2);
}
function createCodewords(bitBuffer2, version2, errorCorrectionLevel2) {
  const totalCodewords = Utils$1.getSymbolTotalCodewords(version2);
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version2, errorCorrectionLevel2);
  const dataTotalCodewords = totalCodewords - ecTotalCodewords;
  const ecTotalBlocks = ECCode.getBlocksCount(version2, errorCorrectionLevel2);
  const blocksInGroup2 = totalCodewords % ecTotalBlocks;
  const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
  const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
  const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
  const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
  const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
  const rs = new ReedSolomonEncoder(ecCount);
  let offset = 0;
  const dcData = new Array(ecTotalBlocks);
  const ecData = new Array(ecTotalBlocks);
  let maxDataSize = 0;
  const buffer = new Uint8Array(bitBuffer2.buffer);
  for (let b2 = 0; b2 < ecTotalBlocks; b2++) {
    const dataSize = b2 < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
    dcData[b2] = buffer.slice(offset, offset + dataSize);
    ecData[b2] = rs.encode(dcData[b2]);
    offset += dataSize;
    maxDataSize = Math.max(maxDataSize, dataSize);
  }
  const data2 = new Uint8Array(totalCodewords);
  let index2 = 0;
  let i2, r2;
  for (i2 = 0; i2 < maxDataSize; i2++) {
    for (r2 = 0; r2 < ecTotalBlocks; r2++) {
      if (i2 < dcData[r2].length) {
        data2[index2++] = dcData[r2][i2];
      }
    }
  }
  for (i2 = 0; i2 < ecCount; i2++) {
    for (r2 = 0; r2 < ecTotalBlocks; r2++) {
      data2[index2++] = ecData[r2][i2];
    }
  }
  return data2;
}
function createSymbol(data2, version2, errorCorrectionLevel2, maskPattern2) {
  let segments2;
  if (Array.isArray(data2)) {
    segments2 = Segments.fromArray(data2);
  } else if (typeof data2 === "string") {
    let estimatedVersion = version2;
    if (!estimatedVersion) {
      const rawSegments = Segments.rawSplit(data2);
      estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel2);
    }
    segments2 = Segments.fromString(data2, estimatedVersion || 40);
  } else {
    throw new Error("Invalid data");
  }
  const bestVersion = Version.getBestVersionForData(segments2, errorCorrectionLevel2);
  if (!bestVersion) {
    throw new Error("The amount of data is too big to be stored in a QR Code");
  }
  if (!version2) {
    version2 = bestVersion;
  } else if (version2 < bestVersion) {
    throw new Error(
      "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n"
    );
  }
  const dataBits = createData(version2, errorCorrectionLevel2, segments2);
  const moduleCount = Utils$1.getSymbolSize(version2);
  const modules = new BitMatrix(moduleCount);
  setupFinderPattern(modules, version2);
  setupTimingPattern(modules);
  setupAlignmentPattern(modules, version2);
  setupFormatInfo(modules, errorCorrectionLevel2, 0);
  if (version2 >= 7) {
    setupVersionInfo(modules, version2);
  }
  setupData(modules, dataBits);
  if (isNaN(maskPattern2)) {
    maskPattern2 = MaskPattern.getBestMask(
      modules,
      setupFormatInfo.bind(null, modules, errorCorrectionLevel2)
    );
  }
  MaskPattern.applyMask(maskPattern2, modules);
  setupFormatInfo(modules, errorCorrectionLevel2, maskPattern2);
  return {
    modules,
    version: version2,
    errorCorrectionLevel: errorCorrectionLevel2,
    maskPattern: maskPattern2,
    segments: segments2
  };
}
qrcode.create = function create(data2, options) {
  if (typeof data2 === "undefined" || data2 === "") {
    throw new Error("No input text");
  }
  let errorCorrectionLevel2 = ECLevel.M;
  let version2;
  let mask;
  if (typeof options !== "undefined") {
    errorCorrectionLevel2 = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
    version2 = Version.from(options.version);
    mask = MaskPattern.from(options.maskPattern);
    if (options.toSJISFunc) {
      Utils$1.setToSJISFunction(options.toSJISFunc);
    }
  }
  return createSymbol(data2, version2, errorCorrectionLevel2, mask);
};
var canvas = {};
var utils = {};
(function(exports2) {
  function hex2rgba(hex) {
    if (typeof hex === "number") {
      hex = hex.toString();
    }
    if (typeof hex !== "string") {
      throw new Error("Color should be defined as hex string");
    }
    let hexCode = hex.slice().replace("#", "").split("");
    if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
      throw new Error("Invalid hex color: " + hex);
    }
    if (hexCode.length === 3 || hexCode.length === 4) {
      hexCode = Array.prototype.concat.apply([], hexCode.map(function(c2) {
        return [c2, c2];
      }));
    }
    if (hexCode.length === 6)
      hexCode.push("F", "F");
    const hexValue = parseInt(hexCode.join(""), 16);
    return {
      r: hexValue >> 24 & 255,
      g: hexValue >> 16 & 255,
      b: hexValue >> 8 & 255,
      a: hexValue & 255,
      hex: "#" + hexCode.slice(0, 6).join("")
    };
  }
  exports2.getOptions = function getOptions2(options) {
    if (!options)
      options = {};
    if (!options.color)
      options.color = {};
    const margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
    const width = options.width && options.width >= 21 ? options.width : void 0;
    const scale = options.scale || 4;
    return {
      width,
      scale: width ? 4 : scale,
      margin,
      color: {
        dark: hex2rgba(options.color.dark || "#000000ff"),
        light: hex2rgba(options.color.light || "#ffffffff")
      },
      type: options.type,
      rendererOpts: options.rendererOpts || {}
    };
  };
  exports2.getScale = function getScale(qrSize, opts) {
    return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
  };
  exports2.getImageWidth = function getImageWidth(qrSize, opts) {
    const scale = exports2.getScale(qrSize, opts);
    return Math.floor((qrSize + opts.margin * 2) * scale);
  };
  exports2.qrToImageData = function qrToImageData(imgData, qr, opts) {
    const size = qr.modules.size;
    const data2 = qr.modules.data;
    const scale = exports2.getScale(size, opts);
    const symbolSize = Math.floor((size + opts.margin * 2) * scale);
    const scaledMargin = opts.margin * scale;
    const palette = [opts.color.light, opts.color.dark];
    for (let i2 = 0; i2 < symbolSize; i2++) {
      for (let j2 = 0; j2 < symbolSize; j2++) {
        let posDst = (i2 * symbolSize + j2) * 4;
        let pxColor = opts.color.light;
        if (i2 >= scaledMargin && j2 >= scaledMargin && i2 < symbolSize - scaledMargin && j2 < symbolSize - scaledMargin) {
          const iSrc = Math.floor((i2 - scaledMargin) / scale);
          const jSrc = Math.floor((j2 - scaledMargin) / scale);
          pxColor = palette[data2[iSrc * size + jSrc] ? 1 : 0];
        }
        imgData[posDst++] = pxColor.r;
        imgData[posDst++] = pxColor.g;
        imgData[posDst++] = pxColor.b;
        imgData[posDst] = pxColor.a;
      }
    }
  };
})(utils);
(function(exports2) {
  const Utils2 = utils;
  function clearCanvas(ctx, canvas2, size) {
    ctx.clearRect(0, 0, canvas2.width, canvas2.height);
    if (!canvas2.style)
      canvas2.style = {};
    canvas2.height = size;
    canvas2.width = size;
    canvas2.style.height = size + "px";
    canvas2.style.width = size + "px";
  }
  function getCanvasElement() {
    try {
      return document.createElement("canvas");
    } catch (e2) {
      throw new Error("You need to specify a canvas element");
    }
  }
  exports2.render = function render2(qrData, canvas2, options) {
    let opts = options;
    let canvasEl = canvas2;
    if (typeof opts === "undefined" && (!canvas2 || !canvas2.getContext)) {
      opts = canvas2;
      canvas2 = void 0;
    }
    if (!canvas2) {
      canvasEl = getCanvasElement();
    }
    opts = Utils2.getOptions(opts);
    const size = Utils2.getImageWidth(qrData.modules.size, opts);
    const ctx = canvasEl.getContext("2d");
    const image = ctx.createImageData(size, size);
    Utils2.qrToImageData(image.data, qrData, opts);
    clearCanvas(ctx, canvasEl, size);
    ctx.putImageData(image, 0, 0);
    return canvasEl;
  };
  exports2.renderToDataURL = function renderToDataURL(qrData, canvas2, options) {
    let opts = options;
    if (typeof opts === "undefined" && (!canvas2 || !canvas2.getContext)) {
      opts = canvas2;
      canvas2 = void 0;
    }
    if (!opts)
      opts = {};
    const canvasEl = exports2.render(qrData, canvas2, opts);
    const type = opts.type || "image/png";
    const rendererOpts = opts.rendererOpts || {};
    return canvasEl.toDataURL(type, rendererOpts.quality);
  };
})(canvas);
var svgTag = {};
const Utils = utils;
function getColorAttrib(color, attrib) {
  const alpha = color.a / 255;
  const str = attrib + '="' + color.hex + '"';
  return alpha < 1 ? str + " " + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
}
function svgCmd(cmd, x2, y2) {
  let str = cmd + x2;
  if (typeof y2 !== "undefined")
    str += " " + y2;
  return str;
}
function qrToPath(data2, size, margin) {
  let path = "";
  let moveBy = 0;
  let newRow = false;
  let lineLength = 0;
  for (let i2 = 0; i2 < data2.length; i2++) {
    const col = Math.floor(i2 % size);
    const row = Math.floor(i2 / size);
    if (!col && !newRow)
      newRow = true;
    if (data2[i2]) {
      lineLength++;
      if (!(i2 > 0 && col > 0 && data2[i2 - 1])) {
        path += newRow ? svgCmd("M", col + margin, 0.5 + row + margin) : svgCmd("m", moveBy, 0);
        moveBy = 0;
        newRow = false;
      }
      if (!(col + 1 < size && data2[i2 + 1])) {
        path += svgCmd("h", lineLength);
        lineLength = 0;
      }
    } else {
      moveBy++;
    }
  }
  return path;
}
svgTag.render = function render(qrData, options, cb) {
  const opts = Utils.getOptions(options);
  const size = qrData.modules.size;
  const data2 = qrData.modules.data;
  const qrcodesize = size + opts.margin * 2;
  const bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + ' d="M0 0h' + qrcodesize + "v" + qrcodesize + 'H0z"/>';
  const path = "<path " + getColorAttrib(opts.color.dark, "stroke") + ' d="' + qrToPath(data2, size, opts.margin) + '"/>';
  const viewBox = 'viewBox="0 0 ' + qrcodesize + " " + qrcodesize + '"';
  const width = !opts.width ? "" : 'width="' + opts.width + '" height="' + opts.width + '" ';
  const svgTag2 = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + "</svg>\n";
  if (typeof cb === "function") {
    cb(null, svgTag2);
  }
  return svgTag2;
};
const canPromise = canPromise$1;
const QRCode = qrcode;
const CanvasRenderer = canvas;
const SvgRenderer = svgTag;
function renderCanvas(renderFunc, canvas2, text, opts, cb) {
  const args = [].slice.call(arguments, 1);
  const argsNum = args.length;
  const isLastArgCb = typeof args[argsNum - 1] === "function";
  if (!isLastArgCb && !canPromise()) {
    throw new Error("Callback required as last argument");
  }
  if (isLastArgCb) {
    if (argsNum < 2) {
      throw new Error("Too few arguments provided");
    }
    if (argsNum === 2) {
      cb = text;
      text = canvas2;
      canvas2 = opts = void 0;
    } else if (argsNum === 3) {
      if (canvas2.getContext && typeof cb === "undefined") {
        cb = opts;
        opts = void 0;
      } else {
        cb = opts;
        opts = text;
        text = canvas2;
        canvas2 = void 0;
      }
    }
  } else {
    if (argsNum < 1) {
      throw new Error("Too few arguments provided");
    }
    if (argsNum === 1) {
      text = canvas2;
      canvas2 = opts = void 0;
    } else if (argsNum === 2 && !canvas2.getContext) {
      opts = text;
      text = canvas2;
      canvas2 = void 0;
    }
    return new Promise(function(resolve, reject) {
      try {
        const data2 = QRCode.create(text, opts);
        resolve(renderFunc(data2, canvas2, opts));
      } catch (e2) {
        reject(e2);
      }
    });
  }
  try {
    const data2 = QRCode.create(text, opts);
    cb(null, renderFunc(data2, canvas2, opts));
  } catch (e2) {
    cb(e2);
  }
}
browser.create = QRCode.create;
browser.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
browser.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
browser.toString = renderCanvas.bind(null, function(data2, _2, opts) {
  return SvgRenderer.render(data2, opts);
});
var et = Object.defineProperty, Be = Object.getOwnPropertySymbols, tt = Object.prototype.hasOwnProperty, ot = Object.prototype.propertyIsEnumerable, Ue = (e2, o3, r2) => o3 in e2 ? et(e2, o3, { enumerable: true, configurable: true, writable: true, value: r2 }) : e2[o3] = r2, ve = (e2, o3) => {
  for (var r2 in o3 || (o3 = {}))
    tt.call(o3, r2) && Ue(e2, r2, o3[r2]);
  if (Be)
    for (var r2 of Be(o3))
      ot.call(o3, r2) && Ue(e2, r2, o3[r2]);
  return e2;
};
function rt() {
  var e2;
  const o3 = (e2 = index.ne.state.themeMode) != null ? e2 : "dark", r2 = {
    light: {
      foreground: {
        1: "rgb(20,20,20)",
        2: "rgb(121,134,134)",
        3: "rgb(158,169,169)"
      },
      background: {
        1: "rgb(255,255,255)",
        2: "rgb(241,243,243)",
        3: "rgb(228,231,231)"
      },
      overlay: "rgba(0,0,0,0.1)"
    },
    dark: {
      foreground: {
        1: "rgb(228,231,231)",
        2: "rgb(148,158,158)",
        3: "rgb(110,119,119)"
      },
      background: {
        1: "rgb(20,20,20)",
        2: "rgb(39,42,42)",
        3: "rgb(59,64,64)"
      },
      overlay: "rgba(255,255,255,0.1)"
    }
  }[o3];
  return {
    "--wcm-color-fg-1": r2.foreground[1],
    "--wcm-color-fg-2": r2.foreground[2],
    "--wcm-color-fg-3": r2.foreground[3],
    "--wcm-color-bg-1": r2.background[1],
    "--wcm-color-bg-2": r2.background[2],
    "--wcm-color-bg-3": r2.background[3],
    "--wcm-color-overlay": r2.overlay
  };
}
function He() {
  return {
    "--wcm-accent-color": "#3396FF",
    "--wcm-accent-fill-color": "#FFFFFF",
    "--wcm-z-index": "89",
    "--wcm-background-color": "#3396FF",
    "--wcm-background-border-radius": "8px",
    "--wcm-container-border-radius": "30px",
    "--wcm-wallet-icon-border-radius": "15px",
    "--wcm-wallet-icon-large-border-radius": "30px",
    "--wcm-wallet-icon-small-border-radius": "7px",
    "--wcm-input-border-radius": "28px",
    "--wcm-button-border-radius": "10px",
    "--wcm-notification-border-radius": "36px",
    "--wcm-secondary-button-border-radius": "28px",
    "--wcm-icon-button-border-radius": "50%",
    "--wcm-button-hover-highlight-border-radius": "10px",
    "--wcm-text-big-bold-size": "20px",
    "--wcm-text-big-bold-weight": "600",
    "--wcm-text-big-bold-line-height": "24px",
    "--wcm-text-big-bold-letter-spacing": "-0.03em",
    "--wcm-text-big-bold-text-transform": "none",
    "--wcm-text-xsmall-bold-size": "10px",
    "--wcm-text-xsmall-bold-weight": "700",
    "--wcm-text-xsmall-bold-line-height": "12px",
    "--wcm-text-xsmall-bold-letter-spacing": "0.02em",
    "--wcm-text-xsmall-bold-text-transform": "uppercase",
    "--wcm-text-xsmall-regular-size": "12px",
    "--wcm-text-xsmall-regular-weight": "600",
    "--wcm-text-xsmall-regular-line-height": "14px",
    "--wcm-text-xsmall-regular-letter-spacing": "-0.03em",
    "--wcm-text-xsmall-regular-text-transform": "none",
    "--wcm-text-small-thin-size": "14px",
    "--wcm-text-small-thin-weight": "500",
    "--wcm-text-small-thin-line-height": "16px",
    "--wcm-text-small-thin-letter-spacing": "-0.03em",
    "--wcm-text-small-thin-text-transform": "none",
    "--wcm-text-small-regular-size": "14px",
    "--wcm-text-small-regular-weight": "600",
    "--wcm-text-small-regular-line-height": "16px",
    "--wcm-text-small-regular-letter-spacing": "-0.03em",
    "--wcm-text-small-regular-text-transform": "none",
    "--wcm-text-medium-regular-size": "16px",
    "--wcm-text-medium-regular-weight": "600",
    "--wcm-text-medium-regular-line-height": "20px",
    "--wcm-text-medium-regular-letter-spacing": "-0.03em",
    "--wcm-text-medium-regular-text-transform": "none",
    "--wcm-font-family": "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
    "--wcm-font-feature-settings": "'tnum' on, 'lnum' on, 'case' on",
    "--wcm-success-color": "rgb(38,181,98)",
    "--wcm-error-color": "rgb(242, 90, 103)",
    "--wcm-overlay-background-color": "rgba(0, 0, 0, 0.3)",
    "--wcm-overlay-backdrop-filter": "none"
  };
}
const h = {
  getPreset(e2) {
    return He()[e2];
  },
  setTheme() {
    const e2 = document.querySelector(":root"), { themeVariables: o3 } = index.ne.state;
    if (e2) {
      const r2 = ve(ve(ve({}, rt()), He()), o3);
      Object.entries(r2).forEach(([a2, t2]) => e2.style.setProperty(a2, t2));
    }
  },
  globalCss: i$3`*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button wcm-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--wcm-accent-fill-color);background:var(--wcm-accent-color)}`
}, at = i$3`button{border-radius:var(--wcm-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--wcm-accent-color)}button path{fill:var(--wcm-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--wcm-color-overlay)}button:disabled::after{background-color:transparent}.wcm-icon-left svg{margin-right:5px}.wcm-icon-right svg{margin-left:5px}button:active::after{background-color:var(--wcm-color-overlay)}.wcm-ghost,.wcm-ghost:active::after,.wcm-outline{background-color:transparent}.wcm-ghost:active{opacity:.5}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}.wcm-ghost:hover::after{background-color:transparent}.wcm-ghost:hover{opacity:.5}}button:disabled{background-color:var(--wcm-color-bg-3);pointer-events:none}.wcm-ghost::after{border-color:transparent}.wcm-ghost path{fill:var(--wcm-color-fg-2)}.wcm-outline path{fill:var(--wcm-accent-color)}.wcm-outline:disabled{background-color:transparent;opacity:.5}`;
var lt = Object.defineProperty, it = Object.getOwnPropertyDescriptor, F = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? it(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && lt(o3, r2, t2), t2;
};
let T = class extends s {
  constructor() {
    super(...arguments), this.disabled = false, this.iconLeft = void 0, this.iconRight = void 0, this.onClick = () => null, this.variant = "default";
  }
  render() {
    const e2 = {
      "wcm-icon-left": this.iconLeft !== void 0,
      "wcm-icon-right": this.iconRight !== void 0,
      "wcm-ghost": this.variant === "ghost",
      "wcm-outline": this.variant === "outline"
    };
    let o$12 = "inverse";
    return this.variant === "ghost" && (o$12 = "secondary"), this.variant === "outline" && (o$12 = "accent"), x`<button class="${o2(e2)}" ?disabled="${this.disabled}" @click="${this.onClick}">${this.iconLeft}<wcm-text variant="small-regular" color="${o$12}"><slot></slot></wcm-text>${this.iconRight}</button>`;
  }
};
T.styles = [h.globalCss, at], F([n$1({ type: Boolean })], T.prototype, "disabled", 2), F([n$1()], T.prototype, "iconLeft", 2), F([n$1()], T.prototype, "iconRight", 2), F([n$1()], T.prototype, "onClick", 2), F([n$1()], T.prototype, "variant", 2), T = F([e$2("wcm-button")], T);
const nt = i$3`:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--wcm-button-border-radius);color:var(--wcm-accent-fill-color);background-color:var(--wcm-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--wcm-color-overlay)}button:active::after{background-color:var(--wcm-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--wcm-color-bg-3);color:var(--wcm-color-fg-3)}.wcm-secondary{color:var(--wcm-accent-color);background-color:transparent}.wcm-secondary::after{display:none}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}}`;
var ct = Object.defineProperty, st = Object.getOwnPropertyDescriptor, ue = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? st(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && ct(o3, r2, t2), t2;
};
let ee = class extends s {
  constructor() {
    super(...arguments), this.disabled = false, this.variant = "primary";
  }
  render() {
    const e2 = { "wcm-secondary": this.variant === "secondary" };
    return x`<button ?disabled="${this.disabled}" class="${o2(e2)}"><slot></slot></button>`;
  }
};
ee.styles = [h.globalCss, nt], ue([n$1({ type: Boolean })], ee.prototype, "disabled", 2), ue([n$1()], ee.prototype, "variant", 2), ee = ue([e$2("wcm-button-big")], ee);
const dt = i$3`:host{background-color:var(--wcm-color-bg-2);border-top:1px solid var(--wcm-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}`;
var mt = Object.defineProperty, ht = Object.getOwnPropertyDescriptor, wt = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? ht(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && mt(o3, r2, t2), t2;
};
let be = class extends s {
  render() {
    return x`<div><slot></slot></div>`;
  }
};
be.styles = [h.globalCss, dt], be = wt([e$2("wcm-info-footer")], be);
const v = {
  CROSS_ICON: b`<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`,
  WALLET_CONNECT_LOGO: b`<svg width="178" height="29" viewBox="0 0 178 29" id="wcm-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`,
  WALLET_CONNECT_ICON: b`<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`,
  WALLET_CONNECT_ICON_COLORED: b`<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`,
  BACK_ICON: b`<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`,
  COPY_ICON: b`<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`,
  RETRY_ICON: b`<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`,
  DESKTOP_ICON: b`<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
  MOBILE_ICON: b`<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`,
  ARROW_DOWN_ICON: b`<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`,
  ARROW_UP_RIGHT_ICON: b`<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
  ARROW_RIGHT_ICON: b`<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`,
  QRCODE_ICON: b`<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`,
  SCAN_ICON: b`<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`,
  CHECKMARK_ICON: b`<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`,
  SEARCH_ICON: b`<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`,
  WALLET_PLACEHOLDER: b`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
  GLOBE_ICON: b`<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>`
}, pt = i$3`.wcm-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--wcm-background-border-radius) * .9);background-color:var(--wcm-background-color);background-position:center;background-size:cover}.wcm-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.wcm-toolbar img,.wcm-toolbar svg{height:28px;object-position:left center;object-fit:contain}#wcm-wc-logo path{fill:var(--wcm-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--wcm-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--wcm-color-bg-1);box-shadow:0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--wcm-color-fg-1)}.wcm-toolbar div{display:flex}@media(hover:hover){button:hover{background-color:var(--wcm-color-bg-2)}}`;
var gt = Object.defineProperty, vt = Object.getOwnPropertyDescriptor, ut = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? vt(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && gt(o3, r2, t2), t2;
};
let fe = class extends s {
  render() {
    return x`<div class="wcm-toolbar-placeholder"></div><div class="wcm-toolbar">${v.WALLET_CONNECT_LOGO} <button @click="${index.se.close}">${v.CROSS_ICON}</button></div>`;
  }
};
fe.styles = [h.globalCss, pt], fe = ut([e$2("wcm-modal-backcard")], fe);
const bt = i$3`main{padding:20px;padding-top:0;width:100%}`;
var ft = Object.defineProperty, xt = Object.getOwnPropertyDescriptor, yt = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? xt(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && ft(o3, r2, t2), t2;
};
let xe = class extends s {
  render() {
    return x`<main><slot></slot></main>`;
  }
};
xe.styles = [h.globalCss, bt], xe = yt([e$2("wcm-modal-content")], xe);
const $t = i$3`footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--wcm-color-bg-2)}`;
var Ct = Object.defineProperty, kt = Object.getOwnPropertyDescriptor, Ot = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? kt(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && Ct(o3, r2, t2), t2;
};
let ye = class extends s {
  render() {
    return x`<footer><slot></slot></footer>`;
  }
};
ye.styles = [h.globalCss, $t], ye = Ot([e$2("wcm-modal-footer")], ye);
const Wt = i$3`header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.wcm-border{border-bottom:1px solid var(--wcm-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}header button:active{opacity:.5}@media(hover:hover){header button:hover{opacity:.5}}.wcm-back-btn{position:absolute;left:0}.wcm-action-btn{position:absolute;right:0}path{fill:var(--wcm-accent-color)}`;
var It = Object.defineProperty, Et = Object.getOwnPropertyDescriptor, te = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? Et(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && It(o3, r2, t2), t2;
};
let S = class extends s {
  constructor() {
    super(...arguments), this.title = "", this.onAction = void 0, this.actionIcon = void 0, this.border = false;
  }
  backBtnTemplate() {
    return x`<button class="wcm-back-btn" @click="${index.T$1.goBack}">${v.BACK_ICON}</button>`;
  }
  actionBtnTemplate() {
    return x`<button class="wcm-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`;
  }
  render() {
    const e2 = { "wcm-border": this.border }, o$12 = index.T$1.state.history.length > 1, r2 = this.title ? x`<wcm-text variant="big-bold">${this.title}</wcm-text>` : x`<slot></slot>`;
    return x`<header class="${o2(e2)}">${o$12 ? this.backBtnTemplate() : null} ${r2} ${this.onAction ? this.actionBtnTemplate() : null}</header>`;
  }
};
S.styles = [h.globalCss, Wt], te([n$1()], S.prototype, "title", 2), te([n$1()], S.prototype, "onAction", 2), te([n$1()], S.prototype, "actionIcon", 2), te([n$1({ type: Boolean })], S.prototype, "border", 2), S = te([e$2("wcm-modal-header")], S);
const c = {
  MOBILE_BREAKPOINT: 600,
  WCM_RECENT_WALLET_DATA: "WCM_RECENT_WALLET_DATA",
  EXPLORER_WALLET_URL: "https://explorer.walletconnect.com/?type=wallet",
  getShadowRootElement(e2, o3) {
    const r2 = e2.renderRoot.querySelector(o3);
    if (!r2)
      throw new Error(`${o3} not found`);
    return r2;
  },
  getWalletIcon({ id: e2, image_id: o3 }) {
    const { walletImages: r2 } = index.y$3.state;
    return r2 != null && r2[e2] ? r2[e2] : o3 ? index.te$2.getWalletImageUrl(o3) : "";
  },
  getWalletName(e2, o3 = false) {
    return o3 && e2.length > 8 ? `${e2.substring(0, 8)}..` : e2;
  },
  isMobileAnimation() {
    return window.innerWidth <= c.MOBILE_BREAKPOINT;
  },
  async preloadImage(e2) {
    const o3 = new Promise((r2, a2) => {
      const t2 = new Image();
      t2.onload = r2, t2.onerror = a2, t2.crossOrigin = "anonymous", t2.src = e2;
    });
    return Promise.race([o3, index.a$3.wait(3e3)]);
  },
  getErrorMessage(e2) {
    return e2 instanceof Error ? e2.message : "Unknown Error";
  },
  debounce(e2, o3 = 500) {
    let r2;
    return (...a2) => {
      function t2() {
        e2(...a2);
      }
      r2 && clearTimeout(r2), r2 = setTimeout(t2, o3);
    };
  },
  handleMobileLinking(e2) {
    const { walletConnectUri: o3 } = index.p$3.state, { mobile: r2, name: a2 } = e2, t2 = r2 == null ? void 0 : r2.native, l2 = r2 == null ? void 0 : r2.universal;
    c.setRecentWallet(e2);
    function i2(s2) {
      let $2 = "";
      t2 ? $2 = index.a$3.formatUniversalUrl(t2, s2, a2) : l2 && ($2 = index.a$3.formatNativeUrl(l2, s2, a2)), index.a$3.openHref($2, "_self");
    }
    o3 && i2(o3);
  },
  async handleUriCopy() {
    const { walletConnectUri: e2 } = index.p$3.state;
    if (e2)
      try {
        await navigator.clipboard.writeText(e2), index.oe$1.openToast("Link copied", "success");
      } catch {
        index.oe$1.openToast("Failed to copy", "error");
      }
  },
  getCustomImageUrls() {
    const { walletImages: e2 } = index.y$3.state, o3 = Object.values(e2 ?? {});
    return Object.values(o3);
  },
  truncate(e2, o3 = 8) {
    return e2.length <= o3 ? e2 : `${e2.substring(0, 4)}...${e2.substring(e2.length - 4)}`;
  },
  setRecentWallet(e2) {
    try {
      localStorage.setItem(c.WCM_RECENT_WALLET_DATA, JSON.stringify(e2));
    } catch {
      console.info("Unable to set recent wallet");
    }
  },
  getRecentWallet() {
    try {
      const e2 = localStorage.getItem(c.WCM_RECENT_WALLET_DATA);
      return e2 ? JSON.parse(e2) : void 0;
    } catch {
      console.info("Unable to get recent wallet");
    }
  },
  caseSafeIncludes(e2, o3) {
    return e2.toUpperCase().includes(o3.toUpperCase());
  },
  openWalletExplorerUrl() {
    index.a$3.openHref(c.EXPLORER_WALLET_URL, "_blank");
  },
  getCachedRouterWalletPlatforms() {
    const { desktop: e2, mobile: o3 } = index.a$3.getWalletRouterData(), r2 = Boolean(e2 == null ? void 0 : e2.native), a2 = Boolean(e2 == null ? void 0 : e2.universal), t2 = Boolean(o3 == null ? void 0 : o3.native) || Boolean(o3 == null ? void 0 : o3.universal);
    return { isDesktop: r2, isMobile: t2, isWeb: a2 };
  },
  goToConnectingView(e2) {
    index.T$1.setData({ Wallet: e2 });
    const o3 = index.a$3.isMobile(), {
      isDesktop: r2,
      isWeb: a2,
      isMobile: t2
    } = c.getCachedRouterWalletPlatforms();
    o3 ? t2 ? index.T$1.push("MobileConnecting") : a2 ? index.T$1.push("WebConnecting") : index.T$1.push("InstallWallet") : r2 ? index.T$1.push("DesktopConnecting") : a2 ? index.T$1.push("WebConnecting") : t2 ? index.T$1.push("MobileQrcodeConnecting") : index.T$1.push("InstallWallet");
  }
}, Mt = i$3`.wcm-router{overflow:hidden;will-change:transform}.wcm-content{display:flex;flex-direction:column}`;
var Lt = Object.defineProperty, Rt = Object.getOwnPropertyDescriptor, $e = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? Rt(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && Lt(o3, r2, t2), t2;
};
let oe = class extends s {
  constructor() {
    super(), this.view = index.T$1.state.view, this.prevView = index.T$1.state.view, this.unsubscribe = void 0, this.oldHeight = "0px", this.resizeObserver = void 0, this.unsubscribe = index.T$1.subscribe((e2) => {
      this.view !== e2.view && this.onChangeRoute();
    });
  }
  firstUpdated() {
    this.resizeObserver = new ResizeObserver(([e2]) => {
      const o3 = `${e2.contentRect.height}px`;
      this.oldHeight !== "0px" && animate(this.routerEl, { height: [this.oldHeight, o3] }, { duration: 0.2 }), this.oldHeight = o3;
    }), this.resizeObserver.observe(this.contentEl);
  }
  disconnectedCallback() {
    var e2, o3;
    (e2 = this.unsubscribe) == null || e2.call(this), (o3 = this.resizeObserver) == null || o3.disconnect();
  }
  get routerEl() {
    return c.getShadowRootElement(this, ".wcm-router");
  }
  get contentEl() {
    return c.getShadowRootElement(this, ".wcm-content");
  }
  viewTemplate() {
    switch (this.view) {
      case "ConnectWallet":
        return x`<wcm-connect-wallet-view></wcm-connect-wallet-view>`;
      case "DesktopConnecting":
        return x`<wcm-desktop-connecting-view></wcm-desktop-connecting-view>`;
      case "MobileConnecting":
        return x`<wcm-mobile-connecting-view></wcm-mobile-connecting-view>`;
      case "WebConnecting":
        return x`<wcm-web-connecting-view></wcm-web-connecting-view>`;
      case "MobileQrcodeConnecting":
        return x`<wcm-mobile-qr-connecting-view></wcm-mobile-qr-connecting-view>`;
      case "WalletExplorer":
        return x`<wcm-wallet-explorer-view></wcm-wallet-explorer-view>`;
      case "Qrcode":
        return x`<wcm-qrcode-view></wcm-qrcode-view>`;
      case "InstallWallet":
        return x`<wcm-install-wallet-view></wcm-install-wallet-view>`;
      default:
        return x`<div>Not Found</div>`;
    }
  }
  async onChangeRoute() {
    await animate(
      this.routerEl,
      { opacity: [1, 0], scale: [1, 1.02] },
      { duration: 0.15, delay: 0.1 }
    ).finished, this.view = index.T$1.state.view, animate(
      this.routerEl,
      { opacity: [0, 1], scale: [0.99, 1] },
      { duration: 0.37, delay: 0.05 }
    );
  }
  render() {
    return x`<div class="wcm-router"><div class="wcm-content">${this.viewTemplate()}</div></div>`;
  }
};
oe.styles = [h.globalCss, Mt], $e([t$1()], oe.prototype, "view", 2), $e([t$1()], oe.prototype, "prevView", 2), oe = $e([e$2("wcm-modal-router")], oe);
const At = i$3`div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--wcm-notification-border-radius);border:1px solid var(--wcm-color-overlay);background-color:var(--wcm-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--wcm-color-bg-3)}}.wcm-success path{fill:var(--wcm-accent-color)}.wcm-error path{fill:var(--wcm-error-color)}`;
var Pt = Object.defineProperty, Tt = Object.getOwnPropertyDescriptor, ze = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? Tt(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && Pt(o3, r2, t2), t2;
};
let ne = class extends s {
  constructor() {
    super(), this.open = false, this.unsubscribe = void 0, this.timeout = void 0, this.unsubscribe = index.oe$1.subscribe((e2) => {
      e2.open ? (this.open = true, this.timeout = setTimeout(() => index.oe$1.closeToast(), 2200)) : (this.open = false, clearTimeout(this.timeout));
    });
  }
  disconnectedCallback() {
    var e2;
    (e2 = this.unsubscribe) == null || e2.call(this), clearTimeout(this.timeout), index.oe$1.closeToast();
  }
  render() {
    const { message: e2, variant: o$12 } = index.oe$1.state, r2 = { "wcm-success": o$12 === "success", "wcm-error": o$12 === "error" };
    return this.open ? x`<div class="${o2(r2)}">${o$12 === "success" ? v.CHECKMARK_ICON : null} ${o$12 === "error" ? v.CROSS_ICON : null}<wcm-text variant="small-regular">${e2}</wcm-text></div>` : null;
  }
};
ne.styles = [h.globalCss, At], ze([t$1()], ne.prototype, "open", 2), ne = ze([e$2("wcm-modal-toast")], ne);
const jt = 0.1, Ve = 2.5, A = 7;
function Ce(e2, o3, r2) {
  return e2 === o3 ? false : (e2 - o3 < 0 ? o3 - e2 : e2 - o3) <= r2 + jt;
}
function _t(e2, o3) {
  const r2 = Array.prototype.slice.call(
    browser.create(e2, { errorCorrectionLevel: o3 }).modules.data,
    0
  ), a2 = Math.sqrt(r2.length);
  return r2.reduce(
    (t2, l2, i2) => (i2 % a2 === 0 ? t2.push([l2]) : t2[t2.length - 1].push(l2)) && t2,
    []
  );
}
const Dt = {
  generate(e2, o3, r2) {
    const a2 = "#141414", t2 = "#ffffff", l2 = [], i2 = _t(e2, "Q"), s2 = o3 / i2.length, $2 = [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 }
    ];
    $2.forEach(({ x: y2, y: u3 }) => {
      const O = (i2.length - A) * s2 * y2, b$1 = (i2.length - A) * s2 * u3, E2 = 0.45;
      for (let M2 = 0; M2 < $2.length; M2 += 1) {
        const V2 = s2 * (A - M2 * 2);
        l2.push(
          b`<rect fill="${M2 % 2 === 0 ? a2 : t2}" height="${V2}" rx="${V2 * E2}" ry="${V2 * E2}" width="${V2}" x="${O + s2 * M2}" y="${b$1 + s2 * M2}">`
        );
      }
    });
    const f2 = Math.floor((r2 + 25) / s2), Ne = i2.length / 2 - f2 / 2, Ze = i2.length / 2 + f2 / 2 - 1, Se = [];
    i2.forEach((y2, u3) => {
      y2.forEach((O, b2) => {
        if (i2[u3][b2] && !(u3 < A && b2 < A || u3 > i2.length - (A + 1) && b2 < A || u3 < A && b2 > i2.length - (A + 1)) && !(u3 > Ne && u3 < Ze && b2 > Ne && b2 < Ze)) {
          const E2 = u3 * s2 + s2 / 2, M2 = b2 * s2 + s2 / 2;
          Se.push([E2, M2]);
        }
      });
    });
    const J = {};
    return Se.forEach(([y2, u3]) => {
      J[y2] ? J[y2].push(u3) : J[y2] = [u3];
    }), Object.entries(J).map(([y2, u3]) => {
      const O = u3.filter((b2) => u3.every((E2) => !Ce(b2, E2, s2)));
      return [Number(y2), O];
    }).forEach(([y2, u3]) => {
      u3.forEach((O) => {
        l2.push(
          b`<circle cx="${y2}" cy="${O}" fill="${a2}" r="${s2 / Ve}">`
        );
      });
    }), Object.entries(J).filter(([y2, u3]) => u3.length > 1).map(([y2, u3]) => {
      const O = u3.filter((b2) => u3.some((E2) => Ce(b2, E2, s2)));
      return [Number(y2), O];
    }).map(([y2, u3]) => {
      u3.sort((b2, E2) => b2 < E2 ? -1 : 1);
      const O = [];
      for (const b2 of u3) {
        const E2 = O.find((M2) => M2.some((V2) => Ce(b2, V2, s2)));
        E2 ? E2.push(b2) : O.push([b2]);
      }
      return [y2, O.map((b2) => [b2[0], b2[b2.length - 1]])];
    }).forEach(([y2, u3]) => {
      u3.forEach(([O, b$1]) => {
        l2.push(
          b`<line x1="${y2}" x2="${y2}" y1="${O}" y2="${b$1}" stroke="${a2}" stroke-width="${s2 / (Ve / 2)}" stroke-linecap="round">`
        );
      });
    }), l2;
  }
}, Nt = i$3`@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;aspect-ratio:1/1;animation:fadeIn ease .2s}.wcm-dark{background-color:#fff;border-radius:var(--wcm-container-border-radius);padding:18px;box-shadow:0 2px 5px #000}svg:first-child,wcm-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{width:25%;height:25%;border-radius:var(--wcm-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--wcm-accent-color)}svg:first-child path:last-child{stroke:var(--wcm-color-overlay)}`;
var Zt = Object.defineProperty, St = Object.getOwnPropertyDescriptor, q = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? St(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && Zt(o3, r2, t2), t2;
};
exports.WcmQrCode = class j extends s {
  constructor() {
    super(...arguments), this.uri = "", this.size = 0, this.imageId = void 0, this.walletId = void 0, this.imageUrl = void 0;
  }
  svgTemplate() {
    const e2 = index.ne.state.themeMode === "light" ? this.size : this.size - 36;
    return b`<svg height="${e2}" width="${e2}">${Dt.generate(this.uri, e2, e2 / 4)}</svg>`;
  }
  render() {
    const e2 = { "wcm-dark": index.ne.state.themeMode === "dark" };
    return x`<div style="${`width: ${this.size}px`}" class="${o2(e2)}">${this.walletId || this.imageUrl ? x`<wcm-wallet-image walletId="${l(this.walletId)}" imageId="${l(this.imageId)}" imageUrl="${l(this.imageUrl)}"></wcm-wallet-image>` : v.WALLET_CONNECT_ICON_COLORED} ${this.svgTemplate()}</div>`;
  }
};
exports.WcmQrCode.styles = [h.globalCss, Nt], q([n$1()], exports.WcmQrCode.prototype, "uri", 2), q([n$1({ type: Number })], exports.WcmQrCode.prototype, "size", 2), q([n$1()], exports.WcmQrCode.prototype, "imageId", 2), q([n$1()], exports.WcmQrCode.prototype, "walletId", 2), q([n$1()], exports.WcmQrCode.prototype, "imageUrl", 2), exports.WcmQrCode = q([e$2("wcm-qrcode")], exports.WcmQrCode);
const Bt = i$3`:host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--wcm-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:var(--wcm-color-fg-1);background-color:var(--wcm-color-bg-3);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay);caret-color:var(--wcm-accent-color)}input::placeholder{color:var(--wcm-color-fg-2)}svg{left:10px;top:4px;pointer-events:none;position:absolute;width:20px;height:20px}input:focus-within{box-shadow:inset 0 0 0 1px var(--wcm-accent-color)}path{fill:var(--wcm-color-fg-2)}`;
var Ut = Object.defineProperty, Ht = Object.getOwnPropertyDescriptor, Fe = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? Ht(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && Ut(o3, r2, t2), t2;
};
let ce = class extends s {
  constructor() {
    super(...arguments), this.onChange = () => null;
  }
  render() {
    return x`<input type="text" @input="${this.onChange}" placeholder="Search wallets"> ${v.SEARCH_ICON}`;
  }
};
ce.styles = [h.globalCss, Bt], Fe([n$1()], ce.prototype, "onChange", 2), ce = Fe([e$2("wcm-search-input")], ce);
const zt = i$3`@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--wcm-accent-color)}`;
var Vt = Object.defineProperty, Ft = Object.getOwnPropertyDescriptor, qt = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? Ft(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && Vt(o3, r2, t2), t2;
};
let ke = class extends s {
  render() {
    return x`<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`;
  }
};
ke.styles = [h.globalCss, zt], ke = qt([e$2("wcm-spinner")], ke);
const Qt = i$3`span{font-style:normal;font-family:var(--wcm-font-family);font-feature-settings:var(--wcm-font-feature-settings)}.wcm-xsmall-bold{font-family:var(--wcm-text-xsmall-bold-font-family);font-weight:var(--wcm-text-xsmall-bold-weight);font-size:var(--wcm-text-xsmall-bold-size);line-height:var(--wcm-text-xsmall-bold-line-height);letter-spacing:var(--wcm-text-xsmall-bold-letter-spacing);text-transform:var(--wcm-text-xsmall-bold-text-transform)}.wcm-xsmall-regular{font-family:var(--wcm-text-xsmall-regular-font-family);font-weight:var(--wcm-text-xsmall-regular-weight);font-size:var(--wcm-text-xsmall-regular-size);line-height:var(--wcm-text-xsmall-regular-line-height);letter-spacing:var(--wcm-text-xsmall-regular-letter-spacing);text-transform:var(--wcm-text-xsmall-regular-text-transform)}.wcm-small-thin{font-family:var(--wcm-text-small-thin-font-family);font-weight:var(--wcm-text-small-thin-weight);font-size:var(--wcm-text-small-thin-size);line-height:var(--wcm-text-small-thin-line-height);letter-spacing:var(--wcm-text-small-thin-letter-spacing);text-transform:var(--wcm-text-small-thin-text-transform)}.wcm-small-regular{font-family:var(--wcm-text-small-regular-font-family);font-weight:var(--wcm-text-small-regular-weight);font-size:var(--wcm-text-small-regular-size);line-height:var(--wcm-text-small-regular-line-height);letter-spacing:var(--wcm-text-small-regular-letter-spacing);text-transform:var(--wcm-text-small-regular-text-transform)}.wcm-medium-regular{font-family:var(--wcm-text-medium-regular-font-family);font-weight:var(--wcm-text-medium-regular-weight);font-size:var(--wcm-text-medium-regular-size);line-height:var(--wcm-text-medium-regular-line-height);letter-spacing:var(--wcm-text-medium-regular-letter-spacing);text-transform:var(--wcm-text-medium-regular-text-transform)}.wcm-big-bold{font-family:var(--wcm-text-big-bold-font-family);font-weight:var(--wcm-text-big-bold-weight);font-size:var(--wcm-text-big-bold-size);line-height:var(--wcm-text-big-bold-line-height);letter-spacing:var(--wcm-text-big-bold-letter-spacing);text-transform:var(--wcm-text-big-bold-text-transform)}:host(*){color:var(--wcm-color-fg-1)}.wcm-color-primary{color:var(--wcm-color-fg-1)}.wcm-color-secondary{color:var(--wcm-color-fg-2)}.wcm-color-tertiary{color:var(--wcm-color-fg-3)}.wcm-color-inverse{color:var(--wcm-accent-fill-color)}.wcm-color-accnt{color:var(--wcm-accent-color)}.wcm-color-error{color:var(--wcm-error-color)}`;
var Kt = Object.defineProperty, Yt = Object.getOwnPropertyDescriptor, Oe = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? Yt(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && Kt(o3, r2, t2), t2;
};
let re = class extends s {
  constructor() {
    super(...arguments), this.variant = "medium-regular", this.color = "primary";
  }
  render() {
    const e2 = {
      "wcm-big-bold": this.variant === "big-bold",
      "wcm-medium-regular": this.variant === "medium-regular",
      "wcm-small-regular": this.variant === "small-regular",
      "wcm-small-thin": this.variant === "small-thin",
      "wcm-xsmall-regular": this.variant === "xsmall-regular",
      "wcm-xsmall-bold": this.variant === "xsmall-bold",
      "wcm-color-primary": this.color === "primary",
      "wcm-color-secondary": this.color === "secondary",
      "wcm-color-tertiary": this.color === "tertiary",
      "wcm-color-inverse": this.color === "inverse",
      "wcm-color-accnt": this.color === "accent",
      "wcm-color-error": this.color === "error"
    };
    return x`<span><slot class="${o2(e2)}"></slot></span>`;
  }
};
re.styles = [h.globalCss, Qt], Oe([n$1()], re.prototype, "variant", 2), Oe([n$1()], re.prototype, "color", 2), re = Oe([e$2("wcm-text")], re);
const Gt = i$3`button{width:100%;height:100%;border-radius:var(--wcm-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}wcm-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}wcm-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--wcm-wallet-icon-border-radius);margin-bottom:5px}.wcm-sublabel{margin-top:2px}`;
var Xt = Object.defineProperty, Jt = Object.getOwnPropertyDescriptor, _ = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? Jt(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && Xt(o3, r2, t2), t2;
};
let L2 = class extends s {
  constructor() {
    super(...arguments), this.onClick = () => null, this.name = "", this.walletId = "", this.label = void 0, this.imageId = void 0, this.installed = false, this.recent = false;
  }
  sublabelTemplate() {
    return this.recent ? x`<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">RECENT</wcm-text>` : this.installed ? x`<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</wcm-text>` : null;
  }
  handleClick() {
    index.R$4.click({ name: "WALLET_BUTTON", walletId: this.walletId }), this.onClick();
  }
  render() {
    var e2;
    return x`<button @click="${this.handleClick.bind(this)}"><div><wcm-wallet-image walletId="${this.walletId}" imageId="${l(this.imageId)}"></wcm-wallet-image><wcm-text variant="xsmall-regular">${(e2 = this.label) != null ? e2 : c.getWalletName(this.name, true)}</wcm-text>${this.sublabelTemplate()}</div></button>`;
  }
};
L2.styles = [h.globalCss, Gt], _([n$1()], L2.prototype, "onClick", 2), _([n$1()], L2.prototype, "name", 2), _([n$1()], L2.prototype, "walletId", 2), _([n$1()], L2.prototype, "label", 2), _([n$1()], L2.prototype, "imageId", 2), _([n$1({ type: Boolean })], L2.prototype, "installed", 2), _([n$1({ type: Boolean })], L2.prototype, "recent", 2), L2 = _([e$2("wcm-wallet-button")], L2);
const eo = i$3`:host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--wcm-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--wcm-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
var to = Object.defineProperty, oo = Object.getOwnPropertyDescriptor, se = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? oo(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && to(o3, r2, t2), t2;
};
let Q = class extends s {
  constructor() {
    super(...arguments), this.walletId = "", this.imageId = void 0, this.imageUrl = void 0;
  }
  render() {
    var e2;
    const o3 = (e2 = this.imageUrl) != null && e2.length ? this.imageUrl : c.getWalletIcon({ id: this.walletId, image_id: this.imageId });
    return x`${o3.length ? x`<div><img crossorigin="anonymous" src="${o3}" alt="${this.id}"></div>` : v.WALLET_PLACEHOLDER}`;
  }
};
Q.styles = [h.globalCss, eo], se([n$1()], Q.prototype, "walletId", 2), se([n$1()], Q.prototype, "imageId", 2), se([n$1()], Q.prototype, "imageUrl", 2), Q = se([e$2("wcm-wallet-image")], Q);
var ro = Object.defineProperty, ao = Object.getOwnPropertyDescriptor, qe = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? ao(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && ro(o3, r2, t2), t2;
};
let We = class extends s {
  constructor() {
    super(), this.preload = true, this.preloadData();
  }
  async loadImages(e2) {
    try {
      e2 != null && e2.length && await Promise.all(e2.map(async (o3) => c.preloadImage(o3)));
    } catch {
      console.info("Unsuccessful attempt at preloading some images", e2);
    }
  }
  async preloadListings() {
    if (index.y$3.state.enableExplorer) {
      await index.te$2.getRecomendedWallets(), index.p$3.setIsDataLoaded(true);
      const { recomendedWallets: e2 } = index.te$2.state, o3 = e2.map((r2) => c.getWalletIcon(r2));
      await this.loadImages(o3);
    } else
      index.p$3.setIsDataLoaded(true);
  }
  async preloadCustomImages() {
    const e2 = c.getCustomImageUrls();
    await this.loadImages(e2);
  }
  async preloadData() {
    try {
      this.preload && (this.preload = false, await Promise.all([
        this.preloadListings(),
        this.preloadCustomImages()
      ]));
    } catch (e2) {
      console.error(e2), index.oe$1.openToast("Failed preloading", "error");
    }
  }
};
qe([t$1()], We.prototype, "preload", 2), We = qe([e$2("wcm-explorer-context")], We);
var lo = Object.defineProperty, io = Object.getOwnPropertyDescriptor, no = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? io(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && lo(o3, r2, t2), t2;
};
let Qe = class extends s {
  constructor() {
    super(), this.unsubscribeTheme = void 0, h.setTheme(), this.unsubscribeTheme = index.ne.subscribe(h.setTheme);
  }
  disconnectedCallback() {
    var e2;
    (e2 = this.unsubscribeTheme) == null || e2.call(this);
  }
};
Qe = no([e$2("wcm-theme-context")], Qe);
const co = i$3`@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.wcm-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.wcm-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}.wcm-track svg{margin:0 5px}wcm-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--wcm-wallet-icon-border-radius)}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-title{display:flex;align-items:center;margin-bottom:10px}.wcm-title svg{margin-right:6px}.wcm-title path{fill:var(--wcm-accent-color)}wcm-modal-footer .wcm-title{padding:0 10px}wcm-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--wcm-color-bg-1))}wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-info-footer wcm-text{text-align:center;margin-bottom:15px}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
var so = Object.defineProperty, mo = Object.getOwnPropertyDescriptor, ho = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? mo(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && so(o3, r2, t2), t2;
};
let Ie = class extends s {
  onConnect(e2) {
    index.a$3.isAndroid() ? c.handleMobileLinking(e2) : c.goToConnectingView(e2);
  }
  onGoToQrcode() {
    index.T$1.push("Qrcode");
  }
  render() {
    const { recomendedWallets: e2 } = index.te$2.state, o3 = [...e2, ...e2], r2 = index.a$3.RECOMMENDED_WALLET_AMOUNT * 2;
    return x`<wcm-modal-header title="Connect your wallet" .onAction="${this.onGoToQrcode}" .actionIcon="${v.QRCODE_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-title">${v.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">WalletConnect</wcm-text></div><div class="wcm-slider"><div class="wcm-track">${[
      ...Array(r2)
    ].map((a2, t2) => {
      const l2 = o3[t2 % o3.length];
      return l2 ? x`<wcm-wallet-image walletId="${l2.id}" imageId="${l2.image_id}"></wcm-wallet-image>` : v.WALLET_PLACEHOLDER;
    })}</div><wcm-button-big @click="${() => this.onConnect(e2[0])}"><wcm-text variant="medium-regular" color="inverse">Select Wallet</wcm-text></wcm-button-big></div></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">Choose WalletConnect to see supported apps on your device</wcm-text></wcm-info-footer>`;
  }
};
Ie.styles = [h.globalCss, co], Ie = ho([e$2("wcm-android-wallet-selection")], Ie);
const wo = i$3`@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--wcm-accent-color);animation:loading 1s linear infinite}wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:90px;height:90px}wcm-text{margin-bottom:40px}.wcm-error svg{stroke:var(--wcm-error-color)}.wcm-error use{display:none}.wcm-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.wcm-stale svg,.wcm-stale use{display:none}`;
var po = Object.defineProperty, go = Object.getOwnPropertyDescriptor, K = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? go(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && po(o3, r2, t2), t2;
};
let D = class extends s {
  constructor() {
    super(...arguments), this.walletId = void 0, this.imageId = void 0, this.isError = false, this.isStale = false, this.label = "";
  }
  svgLoaderTemplate() {
    var e2, o3;
    const r2 = (o3 = (e2 = index.ne.state.themeVariables) == null ? void 0 : e2["--wcm-wallet-icon-large-border-radius"]) != null ? o3 : h.getPreset("--wcm-wallet-icon-large-border-radius");
    let a2 = 0;
    r2.includes("%") ? a2 = 88 / 100 * parseInt(r2, 10) : a2 = parseInt(r2, 10), a2 *= 1.17;
    const t2 = 317 - a2 * 1.57, l2 = 425 - a2 * 1.8;
    return x`<svg viewBox="0 0 110 110" width="110" height="110"><rect id="wcm-loader" x="2" y="2" width="106" height="106" rx="${a2}"/><use xlink:href="#wcm-loader" stroke-dasharray="106 ${t2}" stroke-dashoffset="${l2}"></use></svg>`;
  }
  render() {
    const e2 = { "wcm-error": this.isError, "wcm-stale": this.isStale };
    return x`<div class="${o2(e2)}">${this.svgLoaderTemplate()}<wcm-wallet-image walletId="${l(this.walletId)}" imageId="${l(this.imageId)}"></wcm-wallet-image></div><wcm-text variant="medium-regular" color="${this.isError ? "error" : "primary"}">${this.isError ? "Connection declined" : this.label}</wcm-text>`;
  }
};
D.styles = [h.globalCss, wo], K([n$1()], D.prototype, "walletId", 2), K([n$1()], D.prototype, "imageId", 2), K([n$1({ type: Boolean })], D.prototype, "isError", 2), K([n$1({ type: Boolean })], D.prototype, "isStale", 2), K([n$1()], D.prototype, "label", 2), D = K([e$2("wcm-connector-waiting")], D);
const G = {
  manualWallets() {
    var e2, o3;
    const { mobileWallets: r2, desktopWallets: a2 } = index.y$3.state, t2 = (e2 = G.recentWallet()) == null ? void 0 : e2.id, l2 = index.a$3.isMobile() ? r2 : a2, i2 = l2 == null ? void 0 : l2.filter((s2) => t2 !== s2.id);
    return (o3 = index.a$3.isMobile() ? i2 == null ? void 0 : i2.map(({ id: s2, name: $2, links: f2 }) => ({
      id: s2,
      name: $2,
      mobile: f2,
      links: f2
    })) : i2 == null ? void 0 : i2.map(({ id: s2, name: $2, links: f2 }) => ({
      id: s2,
      name: $2,
      desktop: f2,
      links: f2
    }))) != null ? o3 : [];
  },
  recentWallet() {
    return c.getRecentWallet();
  },
  recomendedWallets(e2 = false) {
    var o3;
    const r2 = e2 || (o3 = G.recentWallet()) == null ? void 0 : o3.id, { recomendedWallets: a2 } = index.te$2.state;
    return a2.filter((t2) => r2 !== t2.id);
  }
}, Z2 = {
  onConnecting(e2) {
    c.goToConnectingView(e2);
  },
  manualWalletsTemplate() {
    return G.manualWallets().map(
      (e2) => x`<wcm-wallet-button walletId="${e2.id}" name="${e2.name}" .onClick="${() => this.onConnecting(e2)}"></wcm-wallet-button>`
    );
  },
  recomendedWalletsTemplate(e2 = false) {
    return G.recomendedWallets(e2).map(
      (o3) => x`<wcm-wallet-button name="${o3.name}" walletId="${o3.id}" imageId="${o3.image_id}" .onClick="${() => this.onConnecting(o3)}"></wcm-wallet-button>`
    );
  },
  recentWalletTemplate() {
    const e2 = G.recentWallet();
    if (e2)
      return x`<wcm-wallet-button name="${e2.name}" walletId="${e2.id}" imageId="${l(e2.image_id)}" .recent="${true}" .onClick="${() => this.onConnecting(e2)}"></wcm-wallet-button>`;
  }
}, vo = i$3`.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-desktop-title,.wcm-mobile-title{display:flex;align-items:center}.wcm-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.wcm-desktop-title{margin-bottom:10px;padding:0 10px}.wcm-subtitle{display:flex;align-items:center}.wcm-subtitle:last-child path{fill:var(--wcm-color-fg-3)}.wcm-desktop-title svg,.wcm-mobile-title svg{margin-right:6px}.wcm-desktop-title path,.wcm-mobile-title path{fill:var(--wcm-accent-color)}`;
var uo = Object.defineProperty, bo = Object.getOwnPropertyDescriptor, fo = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? bo(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && uo(o3, r2, t2), t2;
};
let Ee = class extends s {
  render() {
    const { explorerExcludedWalletIds: e2, enableExplorer: o3 } = index.y$3.state, r2 = e2 !== "ALL" && o3, a2 = Z2.manualWalletsTemplate(), t2 = Z2.recomendedWalletsTemplate();
    let l2 = [Z2.recentWalletTemplate(), ...a2, ...t2];
    l2 = l2.filter(Boolean);
    const i2 = l2.length > 4 || r2;
    let s2 = [];
    i2 ? s2 = l2.slice(0, 3) : s2 = l2;
    const $2 = Boolean(s2.length);
    return x`<wcm-modal-header .border="${true}" title="Connect your wallet" .onAction="${c.handleUriCopy}" .actionIcon="${v.COPY_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-mobile-title"><div class="wcm-subtitle">${v.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">Mobile</wcm-text></div><div class="wcm-subtitle">${v.SCAN_ICON}<wcm-text variant="small-regular" color="secondary">Scan with your wallet</wcm-text></div></div><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>${$2 ? x`<wcm-modal-footer><div class="wcm-desktop-title">${v.DESKTOP_ICON}<wcm-text variant="small-regular" color="accent">Desktop</wcm-text></div><div class="wcm-grid">${s2} ${i2 ? x`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>` : null}</div></wcm-modal-footer>` : null}`;
  }
};
Ee.styles = [h.globalCss, vo], Ee = fo([e$2("wcm-desktop-wallet-selection")], Ee);
const xo = i$3`div{background-color:var(--wcm-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--wcm-color-bg-3);text-align:center}a{color:var(--wcm-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:active{opacity:.8}@media(hover:hover){a:hover{opacity:.8}}`;
var yo = Object.defineProperty, $o = Object.getOwnPropertyDescriptor, Co = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? $o(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && yo(o3, r2, t2), t2;
};
let Me = class extends s {
  render() {
    const { termsOfServiceUrl: e2, privacyPolicyUrl: o3 } = index.y$3.state;
    return e2 ?? o3 ? x`<div><wcm-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app's ${e2 ? x`<a href="${e2}" target="_blank" rel="noopener noreferrer">Terms of Service</a>` : null} ${e2 && o3 ? "and" : null} ${o3 ? x`<a href="${o3}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>` : null}</wcm-text></div>` : null;
  }
};
Me.styles = [h.globalCss, xo], Me = Co([e$2("wcm-legal-notice")], Me);
const ko = i$3`div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;
var Oo = Object.defineProperty, Wo = Object.getOwnPropertyDescriptor, Io = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? Wo(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && Oo(o3, r2, t2), t2;
};
let Le = class extends s {
  onQrcode() {
    index.T$1.push("Qrcode");
  }
  render() {
    const { explorerExcludedWalletIds: e2, enableExplorer: o3 } = index.y$3.state, r2 = e2 !== "ALL" && o3, a2 = Z2.manualWalletsTemplate(), t2 = Z2.recomendedWalletsTemplate();
    let l2 = [Z2.recentWalletTemplate(), ...a2, ...t2];
    l2 = l2.filter(Boolean);
    const i2 = l2.length > 8 || r2;
    let s2 = [];
    i2 ? s2 = l2.slice(0, 7) : s2 = l2;
    const $2 = Boolean(s2.length);
    return x`<wcm-modal-header title="Connect your wallet" .onAction="${this.onQrcode}" .actionIcon="${v.QRCODE_ICON}"></wcm-modal-header>${$2 ? x`<wcm-modal-content><div>${s2} ${i2 ? x`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>` : null}</div></wcm-modal-content>` : null}`;
  }
};
Le.styles = [h.globalCss, ko], Le = Io([e$2("wcm-mobile-wallet-selection")], Le);
const Eo = i$3`:host{all:initial}.wcm-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--wcm-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;opacity:0;pointer-events:none;background-color:var(--wcm-overlay-background-color);backdrop-filter:var(--wcm-overlay-backdrop-filter)}@media(max-height:720px) and (orientation:landscape){.wcm-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.wcm-active{pointer-events:auto}.wcm-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) var(--wcm-container-border-radius) var(--wcm-container-border-radius);border:1px solid var(--wcm-color-overlay);overflow:hidden}.wcm-card{width:100%;position:relative;border-radius:var(--wcm-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--wcm-color-overlay);background-color:var(--wcm-color-bg-1);color:var(--wcm-color-fg-1)}@media(max-width:600px){.wcm-container{max-width:440px;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) 0 0}.wcm-card{border-radius:var(--wcm-container-border-radius) var(--wcm-container-border-radius) 0 0}.wcm-overlay{align-items:flex-end}}@media(max-width:440px){.wcm-container{border:0}}`;
var Mo = Object.defineProperty, Lo = Object.getOwnPropertyDescriptor, Re = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? Lo(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && Mo(o3, r2, t2), t2;
};
exports.WcmModal = class ae extends s {
  constructor() {
    super(), this.open = false, this.active = false, this.unsubscribeModal = void 0, this.abortController = void 0, this.unsubscribeModal = index.se.subscribe((e2) => {
      e2.open ? this.onOpenModalEvent() : this.onCloseModalEvent();
    });
  }
  disconnectedCallback() {
    var e2;
    (e2 = this.unsubscribeModal) == null || e2.call(this);
  }
  get overlayEl() {
    return c.getShadowRootElement(this, ".wcm-overlay");
  }
  get containerEl() {
    return c.getShadowRootElement(this, ".wcm-container");
  }
  toggleBodyScroll(e2) {
    if (document.querySelector("body"))
      if (e2) {
        const o3 = document.getElementById("wcm-styles");
        o3 == null ? void 0 : o3.remove();
      } else
        document.head.insertAdjacentHTML(
          "beforeend",
          '<style id="wcm-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>'
        );
  }
  onCloseModal(e2) {
    e2.target === e2.currentTarget && index.se.close();
  }
  onOpenModalEvent() {
    this.toggleBodyScroll(false), this.addKeyboardEvents(), this.open = true, setTimeout(async () => {
      const e2 = c.isMobileAnimation() ? { y: ["50vh", "0vh"] } : { scale: [0.98, 1] }, o3 = 0.1, r2 = 0.2;
      await Promise.all([
        animate(this.overlayEl, { opacity: [0, 1] }, { delay: o3, duration: r2 }).finished,
        animate(this.containerEl, e2, { delay: o3, duration: r2 }).finished
      ]), this.active = true;
    }, 0);
  }
  async onCloseModalEvent() {
    this.toggleBodyScroll(true), this.removeKeyboardEvents();
    const e2 = c.isMobileAnimation() ? { y: ["0vh", "50vh"] } : { scale: [1, 0.98] }, o3 = 0.2;
    await Promise.all([
      animate(this.overlayEl, { opacity: [1, 0] }, { duration: o3 }).finished,
      animate(this.containerEl, e2, { duration: o3 }).finished
    ]), this.containerEl.removeAttribute("style"), this.active = false, this.open = false;
  }
  addKeyboardEvents() {
    this.abortController = new AbortController(), window.addEventListener(
      "keydown",
      (e2) => {
        var o3;
        e2.key === "Escape" ? index.se.close() : e2.key === "Tab" && ((o3 = e2.target) != null && o3.tagName.includes("wcm-") || this.containerEl.focus());
      },
      this.abortController
    ), this.containerEl.focus();
  }
  removeKeyboardEvents() {
    var e2;
    (e2 = this.abortController) == null || e2.abort(), this.abortController = void 0;
  }
  render() {
    const e2 = { "wcm-overlay": true, "wcm-active": this.active };
    return x`<wcm-explorer-context></wcm-explorer-context><wcm-theme-context></wcm-theme-context><div id="wcm-modal" class="${o2(e2)}" @click="${this.onCloseModal}" role="alertdialog" aria-modal="true"><div class="wcm-container" tabindex="0">${this.open ? x`<wcm-modal-backcard></wcm-modal-backcard><div class="wcm-card"><wcm-modal-router></wcm-modal-router><wcm-modal-toast></wcm-modal-toast></div>` : null}</div></div>`;
  }
};
exports.WcmModal.styles = [h.globalCss, Eo], Re([t$1()], exports.WcmModal.prototype, "open", 2), Re([t$1()], exports.WcmModal.prototype, "active", 2), exports.WcmModal = Re([e$2("wcm-modal")], exports.WcmModal);
const Ro = i$3`div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}wcm-button{margin:0 5px}`;
var Ao = Object.defineProperty, Po = Object.getOwnPropertyDescriptor, le = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? Po(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && Ao(o3, r2, t2), t2;
};
let B = class extends s {
  constructor() {
    super(...arguments), this.isMobile = false, this.isDesktop = false, this.isWeb = false, this.isRetry = false;
  }
  onMobile() {
    index.a$3.isMobile() ? index.T$1.replace("MobileConnecting") : index.T$1.replace("MobileQrcodeConnecting");
  }
  onDesktop() {
    index.T$1.replace("DesktopConnecting");
  }
  onWeb() {
    index.T$1.replace("WebConnecting");
  }
  render() {
    return x`<div>${this.isRetry ? x`<slot></slot>` : null} ${this.isMobile ? x`<wcm-button .onClick="${this.onMobile}" .iconLeft="${v.MOBILE_ICON}" variant="outline">Mobile</wcm-button>` : null} ${this.isDesktop ? x`<wcm-button .onClick="${this.onDesktop}" .iconLeft="${v.DESKTOP_ICON}" variant="outline">Desktop</wcm-button>` : null} ${this.isWeb ? x`<wcm-button .onClick="${this.onWeb}" .iconLeft="${v.GLOBE_ICON}" variant="outline">Web</wcm-button>` : null}</div>`;
  }
};
B.styles = [h.globalCss, Ro], le([n$1({ type: Boolean })], B.prototype, "isMobile", 2), le([n$1({ type: Boolean })], B.prototype, "isDesktop", 2), le([n$1({ type: Boolean })], B.prototype, "isWeb", 2), le([n$1({ type: Boolean })], B.prototype, "isRetry", 2), B = le([e$2("wcm-platform-selection")], B);
const To = i$3`button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--wcm-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.wcm-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--wcm-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--wcm-color-bg-2);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}.wcm-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--wcm-wallet-icon-border-radius)/ 2);border:1px solid var(--wcm-color-overlay)}.wcm-icons svg{width:21px;height:21px}.wcm-icons img:nth-child(1),.wcm-icons img:nth-child(2),.wcm-icons svg:nth-child(1),.wcm-icons svg:nth-child(2){margin-bottom:4px}wcm-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
var jo = Object.defineProperty, _o = Object.getOwnPropertyDescriptor, Do = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? _o(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && jo(o3, r2, t2), t2;
};
let Ae = class extends s {
  onClick() {
    index.T$1.push("WalletExplorer");
  }
  render() {
    const { recomendedWallets: e2 } = index.te$2.state, o3 = G.manualWallets(), r2 = [...e2, ...o3].reverse().slice(0, 4);
    return x`<button @click="${this.onClick}"><div class="wcm-icons">${r2.map(
      (a2) => {
        const t2 = c.getWalletIcon(a2);
        if (t2)
          return x`<img crossorigin="anonymous" src="${t2}">`;
        const l2 = c.getWalletIcon({ id: a2.id });
        return l2 ? x`<img crossorigin="anonymous" src="${l2}">` : v.WALLET_PLACEHOLDER;
      }
    )} ${[...Array(4 - r2.length)].map(() => v.WALLET_PLACEHOLDER)}</div><wcm-text variant="xsmall-regular">View All</wcm-text></button>`;
  }
};
Ae.styles = [h.globalCss, To], Ae = Do([e$2("wcm-view-all-wallets-button")], Ae);
const No = i$3`.wcm-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;
var Zo = Object.defineProperty, So = Object.getOwnPropertyDescriptor, de = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? So(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && Zo(o3, r2, t2), t2;
};
let Y = class extends s {
  constructor() {
    super(), this.walletId = "", this.imageId = "", this.uri = "", setTimeout(() => {
      const { walletConnectUri: e2 } = index.p$3.state;
      this.uri = e2;
    }, 0);
  }
  get overlayEl() {
    return c.getShadowRootElement(this, ".wcm-qr-container");
  }
  render() {
    return x`<div class="wcm-qr-container">${this.uri ? x`<wcm-qrcode size="${this.overlayEl.offsetWidth}" uri="${this.uri}" walletId="${l(this.walletId)}" imageId="${l(this.imageId)}"></wcm-qrcode>` : x`<wcm-spinner></wcm-spinner>`}</div>`;
  }
};
Y.styles = [h.globalCss, No], de([n$1()], Y.prototype, "walletId", 2), de([n$1()], Y.prototype, "imageId", 2), de([t$1()], Y.prototype, "uri", 2), Y = de([e$2("wcm-walletconnect-qr")], Y);
var Bo = Object.defineProperty, Uo = Object.getOwnPropertyDescriptor, Ho = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? Uo(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && Bo(o3, r2, t2), t2;
};
let Pe = class extends s {
  viewTemplate() {
    return index.a$3.isAndroid() ? x`<wcm-android-wallet-selection></wcm-android-wallet-selection>` : index.a$3.isMobile() ? x`<wcm-mobile-wallet-selection></wcm-mobile-wallet-selection>` : x`<wcm-desktop-wallet-selection></wcm-desktop-wallet-selection>`;
  }
  render() {
    return x`${this.viewTemplate()}<wcm-legal-notice></wcm-legal-notice>`;
  }
};
Pe.styles = [h.globalCss], Pe = Ho([e$2("wcm-connect-wallet-view")], Pe);
const zo = i$3`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
var Vo = Object.defineProperty, Fo = Object.getOwnPropertyDescriptor, Ke = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? Fo(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && Vo(o3, r2, t2), t2;
};
let me = class extends s {
  constructor() {
    super(), this.isError = false, this.openDesktopApp();
  }
  // onFormatAndRedirect(e) {
  //   const { desktop: o, name: r } = m.getWalletRouterData(),
  //     a = o?.native;
  //   if (a) {
  //     const t = m.formatNativeUrl(a, e, r);
  //     m.openHref(t, "_self");
  //   }
  // }
  onFormatAndRedirect(e2) {
    var _a;
    const { desktop: o3, name: r2 } = index.a$3.getWalletRouterData(), a2 = o3 == null ? void 0 : o3.native;
    if (a2) {
      const t2 = index.a$3.formatNativeUrl(a2, e2, r2);
      if (r2 === "Puzzle Wallet" && window && ((_a = window.aleo) == null ? void 0 : _a.puzzleWalletClient)) {
        const url = new URL(t2);
        const params = url.searchParams;
        const wcUri = params.get("uri");
        const requestId = params.get("requestId");
        const sessionTopic = params.get("sessionTopic");
        void window.aleo.connectPuzzle({
          wc: {
            uri: wcUri,
            requestId: requestId ?? void 0,
            sessionTopic: sessionTopic ?? void 0
          }
        });
      } else {
        index.a$3.openHref(t2, "_self");
      }
    }
  }
  openDesktopApp() {
    const { walletConnectUri: e2 } = index.p$3.state, o3 = index.a$3.getWalletRouterData();
    c.setRecentWallet(o3), e2 && this.onFormatAndRedirect(e2);
  }
  render() {
    const { name: e2, id: o3, image_id: r2 } = index.a$3.getWalletRouterData(), { isMobile: a2, isWeb: t2 } = c.getCachedRouterWalletPlatforms();
    return x`<wcm-modal-header title="${e2}" .onAction="${c.handleUriCopy}" .actionIcon="${v.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${o3}" imageId="${l(r2)}" label="${`Continue in ${e2}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Connection can continue loading if ${e2} is not installed on your device`}</wcm-text><wcm-platform-selection .isMobile="${a2}" .isWeb="${t2}" .isRetry="${true}"><wcm-button .onClick="${this.openDesktopApp.bind(this)}" .iconRight="${v.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`;
  }
};
me.styles = [h.globalCss, zo], Ke([t$1()], me.prototype, "isError", 2), me = Ke([e$2("wcm-desktop-connecting-view")], me);
const qo = i$3`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}wcm-button{margin-top:15px}`;
var Qo = Object.defineProperty, Ko = Object.getOwnPropertyDescriptor, Yo = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? Ko(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && Qo(o3, r2, t2), t2;
};
let Te = class extends s {
  onInstall(e2) {
    e2 && index.a$3.openHref(e2, "_blank");
  }
  render() {
    const {
      name: e2,
      id: o3,
      image_id: r2,
      homepage: a2
    } = index.a$3.getWalletRouterData();
    return x`<wcm-modal-header title="${e2}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${o3}" imageId="${l(r2)}" label="Not Detected" .isStale="${true}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Download ${e2} to continue. If multiple browser extensions are installed, disable non ${e2} ones and try again`}</wcm-text><wcm-button .onClick="${() => this.onInstall(a2)}" .iconLeft="${v.ARROW_DOWN_ICON}">Download</wcm-button></wcm-info-footer>`;
  }
};
Te.styles = [h.globalCss, qo], Te = Yo([e$2("wcm-install-wallet-view")], Te);
const Go = i$3`wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}wcm-info-footer{display:flex;width:100%}.wcm-app-store{justify-content:space-between}.wcm-app-store wcm-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--wcm-wallet-icon-small-border-radius)}.wcm-app-store div{display:flex;align-items:center}.wcm-app-store wcm-button{margin-right:-10px}.wcm-note{flex-direction:column;align-items:center;padding:5px 0}.wcm-note wcm-text{text-align:center}wcm-platform-selection{margin-top:-15px}.wcm-note wcm-text{margin-top:15px}.wcm-note wcm-text span{color:var(--wcm-accent-color)}`;
var Xo = Object.defineProperty, Jo = Object.getOwnPropertyDescriptor, Ye = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? Jo(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && Xo(o3, r2, t2), t2;
};
let he = class extends s {
  constructor() {
    super(), this.isError = false, this.openMobileApp();
  }
  // onFormatAndRedirect(e, o = !1) {
  //   const { mobile: r, name: a } = m.getWalletRouterData(),
  //     t = r?.native,
  //     l = r?.universal;
  //   if (t && !o) {
  //     const i = m.formatNativeUrl(t, e, a);
  //     m.openHref(i, "_self");
  //   } else if (l) {
  //     const i = m.formatUniversalUrl(l, e, a);
  //     m.openHref(i, "_self");
  //   }
  // }
  onFormatAndRedirect(e2, o3 = false) {
    var _a, _b;
    const { mobile: r2, name: a2 } = index.a$3.getWalletRouterData(), t2 = r2 == null ? void 0 : r2.native, l2 = r2 == null ? void 0 : r2.universal;
    if (t2 && !o3) {
      const i2 = index.a$3.formatNativeUrl(t2, e2, a2);
      if (a2 === "Puzzle Wallet" && window && ((_a = window.aleo) == null ? void 0 : _a.puzzleWalletClient)) {
        const url = new URL(i2);
        const params = url.searchParams;
        const wcUri = params.get("uri");
        const requestId = params.get("requestId");
        const sessionTopic = params.get("sessionTopic");
        void window.aleo.connectPuzzle({
          wc: {
            uri: wcUri,
            requestId: requestId ?? void 0,
            sessionTopic: sessionTopic ?? void 0
          }
        });
      } else {
        index.a$3.openHref(i2, "_self");
      }
    } else if (l2) {
      const i2 = index.a$3.formatUniversalUrl(l2, e2, a2);
      if (a2 === "Puzzle Wallet" && window && ((_b = window.aleo) == null ? void 0 : _b.puzzleWalletClient)) {
        const url = new URL(i2);
        const params = url.searchParams;
        const wcUri = params.get("uri");
        const requestId = params.get("requestId");
        const sessionTopic = params.get("sessionTopic");
        void window.aleo.connectPuzzle({
          wc: {
            uri: wcUri,
            requestId: requestId ?? void 0,
            sessionTopic: sessionTopic ?? void 0
          }
        });
      } else {
        index.a$3.openHref(i2, "_self");
      }
    }
  }
  openMobileApp(e2 = false) {
    const { walletConnectUri: o3 } = index.p$3.state, r2 = index.a$3.getWalletRouterData();
    c.setRecentWallet(r2), o3 && this.onFormatAndRedirect(o3, e2);
  }
  onGoToAppStore(e2) {
    e2 && index.a$3.openHref(e2, "_blank");
  }
  render() {
    const {
      name: e2,
      id: o3,
      image_id: r2,
      app: a2,
      mobile: t2
    } = index.a$3.getWalletRouterData(), { isWeb: l$12 } = c.getCachedRouterWalletPlatforms(), i2 = a2 == null ? void 0 : a2.ios, s2 = t2 == null ? void 0 : t2.universal;
    return x`<wcm-modal-header title="${e2}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${o3}" imageId="${l(r2)}" label="Tap 'Open' to continue…" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer class="wcm-note"><wcm-platform-selection .isWeb="${l$12}" .isRetry="${true}"><wcm-button .onClick="${() => this.openMobileApp(false)}" .iconRight="${v.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection>${s2 ? x`<wcm-text color="secondary" variant="small-thin">Still doesn't work? <span tabindex="0" @click="${() => this.openMobileApp(true)}">Try this alternate link</span></wcm-text>` : null}</wcm-info-footer><wcm-info-footer class="wcm-app-store"><div><wcm-wallet-image walletId="${o3}" imageId="${l(r2)}"></wcm-wallet-image><wcm-text>${`Get ${e2}`}</wcm-text></div><wcm-button .iconRight="${v.ARROW_RIGHT_ICON}" .onClick="${() => this.onGoToAppStore(i2)}" variant="ghost">App Store</wcm-button></wcm-info-footer>`;
  }
};
he.styles = [h.globalCss, Go], Ye([t$1()], he.prototype, "isError", 2), he = Ye([e$2("wcm-mobile-connecting-view")], he);
const er = i$3`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
var tr = Object.defineProperty, or = Object.getOwnPropertyDescriptor, rr = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? or(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && tr(o3, r2, t2), t2;
};
let je = class extends s {
  render() {
    const { name: e2, id: o3, image_id: r2 } = index.a$3.getWalletRouterData(), { isDesktop: a2, isWeb: t2 } = c.getCachedRouterWalletPlatforms();
    return x`<wcm-modal-header title="${e2}" .onAction="${c.handleUriCopy}" .actionIcon="${v.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr walletId="${o3}" imageId="${l(r2)}"></wcm-walletconnect-qr></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Scan this QR Code with your phone's camera or inside ${e2} app`}</wcm-text><wcm-platform-selection .isDesktop="${a2}" .isWeb="${t2}"></wcm-platform-selection></wcm-info-footer>`;
  }
};
je.styles = [h.globalCss, er], je = rr([e$2("wcm-mobile-qr-connecting-view")], je);
var ar = Object.defineProperty, lr = Object.getOwnPropertyDescriptor, ir = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? lr(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && ar(o3, r2, t2), t2;
};
let _e = class extends s {
  render() {
    return x`<wcm-modal-header title="Scan the code" .onAction="${c.handleUriCopy}" .actionIcon="${v.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>`;
  }
};
_e.styles = [h.globalCss], _e = ir([e$2("wcm-qrcode-view")], _e);
const nr = i$3`wcm-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}wcm-modal-content::after,wcm-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}wcm-modal-content::before{box-shadow:0 -1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(var(--wcm-color-bg-1),rgba(255,255,255,0))}wcm-modal-content::after{box-shadow:0 1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--wcm-color-bg-1));top:calc(100% - 20px)}wcm-modal-content::-webkit-scrollbar{display:none}.wcm-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.wcm-empty,.wcm-loading{display:flex}.wcm-loading .wcm-placeholder-block{height:100%}.wcm-end-reached .wcm-placeholder-block{height:0;opacity:0}.wcm-empty .wcm-placeholder-block{opacity:1;height:100%}wcm-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;
var cr = Object.defineProperty, sr = Object.getOwnPropertyDescriptor, ie = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? sr(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && cr(o3, r2, t2), t2;
};
const De = 40;
let U = class extends s {
  constructor() {
    super(...arguments), this.loading = !index.te$2.state.wallets.listings.length, this.firstFetch = !index.te$2.state.wallets.listings.length, this.search = "", this.endReached = false, this.intersectionObserver = void 0, this.searchDebounce = c.debounce((e2) => {
      e2.length >= 1 ? (this.firstFetch = true, this.endReached = false, this.search = e2, index.te$2.resetSearch(), this.fetchWallets()) : this.search && (this.search = "", this.endReached = this.isLastPage(), index.te$2.resetSearch());
    });
  }
  firstUpdated() {
    this.createPaginationObserver();
  }
  disconnectedCallback() {
    var e2;
    (e2 = this.intersectionObserver) == null || e2.disconnect();
  }
  get placeholderEl() {
    return c.getShadowRootElement(this, ".wcm-placeholder-block");
  }
  createPaginationObserver() {
    this.intersectionObserver = new IntersectionObserver(([e2]) => {
      e2.isIntersecting && !(this.search && this.firstFetch) && this.fetchWallets();
    }), this.intersectionObserver.observe(this.placeholderEl);
  }
  isLastPage() {
    const { wallets: e2, search: o3 } = index.te$2.state, { listings: r2, total: a2 } = this.search ? o3 : e2;
    return a2 <= De || r2.length >= a2;
  }
  async fetchWallets() {
    var e2;
    const { wallets: o3, search: r2 } = index.te$2.state, { listings: a2, total: t2, page: l2 } = this.search ? r2 : o3;
    if (!this.endReached && (this.firstFetch || t2 > De && a2.length < t2))
      try {
        this.loading = true;
        const i2 = (e2 = index.p$3.state.chains) == null ? void 0 : e2.join(","), { listings: s2 } = await index.te$2.getWallets({
          page: this.firstFetch ? 1 : l2 + 1,
          entries: De,
          search: this.search,
          version: 2,
          chains: i2
        }), $2 = s2.map((f2) => c.getWalletIcon(f2));
        await Promise.all([
          ...$2.map(async (f2) => c.preloadImage(f2)),
          index.a$3.wait(300)
        ]), this.endReached = this.isLastPage();
      } catch (i2) {
        console.error(i2), index.oe$1.openToast(c.getErrorMessage(i2), "error");
      } finally {
        this.loading = false, this.firstFetch = false;
      }
  }
  onConnect(e2) {
    index.a$3.isAndroid() ? c.handleMobileLinking(e2) : c.goToConnectingView(e2);
  }
  onSearchChange(e2) {
    const { value: o3 } = e2.target;
    this.searchDebounce(o3);
  }
  render() {
    const { wallets: e2, search: o$12 } = index.te$2.state, { listings: r2 } = this.search ? o$12 : e2, a2 = this.loading && !r2.length, t2 = this.search.length >= 3;
    let l2 = Z2.manualWalletsTemplate(), i2 = Z2.recomendedWalletsTemplate(true);
    t2 && (l2 = l2.filter(({ values: f2 }) => c.caseSafeIncludes(f2[0], this.search)), i2 = i2.filter(({ values: f2 }) => c.caseSafeIncludes(f2[0], this.search)));
    const s2 = !this.loading && !r2.length && !i2.length, $2 = {
      "wcm-loading": a2,
      "wcm-end-reached": this.endReached || !this.loading,
      "wcm-empty": s2
    };
    return x`<wcm-modal-header><wcm-search-input .onChange="${this.onSearchChange.bind(this)}"></wcm-search-input></wcm-modal-header><wcm-modal-content class="${o2($2)}"><div class="wcm-grid">${a2 ? null : l2} ${a2 ? null : i2} ${a2 ? null : r2.map((f2) => x`${f2 ? x`<wcm-wallet-button imageId="${f2.image_id}" name="${f2.name}" walletId="${f2.id}" .onClick="${() => this.onConnect(f2)}"></wcm-wallet-button>` : null}`)}</div><div class="wcm-placeholder-block">${s2 ? x`<wcm-text variant="big-bold" color="secondary">No results found</wcm-text>` : null} ${!s2 && this.loading ? x`<wcm-spinner></wcm-spinner>` : null}</div></wcm-modal-content>`;
  }
};
U.styles = [h.globalCss, nr], ie([t$1()], U.prototype, "loading", 2), ie([t$1()], U.prototype, "firstFetch", 2), ie([t$1()], U.prototype, "search", 2), ie([t$1()], U.prototype, "endReached", 2), U = ie([e$2("wcm-wallet-explorer-view")], U);
const dr = i$3`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
var mr = Object.defineProperty, hr = Object.getOwnPropertyDescriptor, Ge = (e2, o3, r2, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? hr(o3, r2) : o3, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o3, r2, t2) : i2(t2)) || t2);
  return a2 && t2 && mr(o3, r2, t2), t2;
};
let we = class extends s {
  constructor() {
    super(), this.isError = false, this.openWebWallet();
  }
  // onFormatAndRedirect(e) {
  //   const { desktop: o, name: r } = m.getWalletRouterData(),
  //     a = o?.universal;
  //   if (a) {
  //     const t = m.formatUniversalUrl(a, e, r);
  //     m.openHref(t, "_blank");
  //   }
  // }
  onFormatAndRedirect(e2) {
    var _a;
    const { desktop: o3, name: r2 } = index.a$3.getWalletRouterData(), a2 = o3 == null ? void 0 : o3.universal;
    if (a2) {
      const t2 = index.a$3.formatUniversalUrl(a2, e2, r2);
      if (r2 === "Puzzle Wallet" && window && ((_a = window.aleo) == null ? void 0 : _a.puzzleWalletClient)) {
        const url = new URL(t2);
        const params = url.searchParams;
        const wcUri = params.get("uri");
        const requestId = params.get("requestId");
        const sessionTopic = params.get("sessionTopic");
        void window.aleo.connectPuzzle({
          wc: {
            uri: wcUri,
            requestId: requestId ?? void 0,
            sessionTopic: sessionTopic ?? void 0
          }
        });
      } else {
        index.a$3.openHref(t2, "_blank");
      }
    }
  }
  openWebWallet() {
    const { walletConnectUri: e2 } = index.p$3.state, o3 = index.a$3.getWalletRouterData();
    c.setRecentWallet(o3), e2 && this.onFormatAndRedirect(e2);
  }
  render() {
    const { name: e2, id: o3, image_id: r2 } = index.a$3.getWalletRouterData(), { isMobile: a2, isDesktop: t2 } = c.getCachedRouterWalletPlatforms(), l$12 = index.a$3.isMobile();
    return x`<wcm-modal-header title="${e2}" .onAction="${c.handleUriCopy}" .actionIcon="${v.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${o3}" imageId="${l(r2)}" label="${`Continue in ${e2}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`${e2} web app has opened in a new tab. Go there, accept the connection, and come back`}</wcm-text><wcm-platform-selection .isMobile="${a2}" .isDesktop="${l$12 ? false : t2}" .isRetry="${true}"><wcm-button .onClick="${this.openWebWallet.bind(this)}" .iconRight="${v.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`;
  }
};
we.styles = [h.globalCss, dr], Ge([t$1()], we.prototype, "isError", 2), we = Ge([e$2("wcm-web-connecting-view")], we);
