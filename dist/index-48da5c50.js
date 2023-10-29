var Fl = Object.defineProperty;
var $l = (e, t, r) => t in e ? Fl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ir = (e, t, r) => ($l(e, typeof t != "symbol" ? t + "" : t, r), r);
import ei, { memo as Ul, useEffect as kt, useState as Oi, useDebugValue as Ml } from "react";
var Nt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function yn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Fs(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function i() {
      return this instanceof i ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(i) {
    var n = Object.getOwnPropertyDescriptor(e, i);
    Object.defineProperty(r, i, n.get ? n : {
      enumerable: !0,
      get: function() {
        return e[i];
      }
    });
  }), r;
}
var is = { exports: {} }, ci = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oo;
function jl() {
  if (Oo)
    return ci;
  Oo = 1;
  var e = ei, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(a, l, f) {
    var h, p = {}, y = null, m = null;
    f !== void 0 && (y = "" + f), l.key !== void 0 && (y = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (h in l)
      i.call(l, h) && !s.hasOwnProperty(h) && (p[h] = l[h]);
    if (a && a.defaultProps)
      for (h in l = a.defaultProps, l)
        p[h] === void 0 && (p[h] = l[h]);
    return { $$typeof: t, type: a, key: y, ref: m, props: p, _owner: n.current };
  }
  return ci.Fragment = r, ci.jsx = u, ci.jsxs = u, ci;
}
var ui = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Io;
function ql() {
  return Io || (Io = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ei, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), D = Symbol.iterator, I = "@@iterator";
    function P(w) {
      if (w === null || typeof w != "object")
        return null;
      var M = D && w[D] || w[I];
      return typeof M == "function" ? M : null;
    }
    var U = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(w) {
      {
        for (var M = arguments.length, J = new Array(M > 1 ? M - 1 : 0), se = 1; se < M; se++)
          J[se - 1] = arguments[se];
        O("error", w, J);
      }
    }
    function O(w, M, J) {
      {
        var se = U.ReactDebugCurrentFrame, Re = se.getStackAddendum();
        Re !== "" && (M += "%s", J = J.concat([Re]));
        var Se = J.map(function(Oe) {
          return String(Oe);
        });
        Se.unshift("Warning: " + M), Function.prototype.apply.call(console[w], console, Se);
      }
    }
    var b = !1, _ = !1, d = !1, o = !1, g = !1, A;
    A = Symbol.for("react.module.reference");
    function L(w) {
      return !!(typeof w == "string" || typeof w == "function" || w === i || w === s || g || w === n || w === f || w === h || o || w === m || b || _ || d || typeof w == "object" && w !== null && (w.$$typeof === y || w.$$typeof === p || w.$$typeof === u || w.$$typeof === a || w.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      w.$$typeof === A || w.getModuleId !== void 0));
    }
    function $(w, M, J) {
      var se = w.displayName;
      if (se)
        return se;
      var Re = M.displayName || M.name || "";
      return Re !== "" ? J + "(" + Re + ")" : J;
    }
    function V(w) {
      return w.displayName || "Context";
    }
    function Y(w) {
      if (w == null)
        return null;
      if (typeof w.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof w == "function")
        return w.displayName || w.name || null;
      if (typeof w == "string")
        return w;
      switch (w) {
        case i:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case n:
          return "StrictMode";
        case f:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case a:
            var M = w;
            return V(M) + ".Consumer";
          case u:
            var J = w;
            return V(J._context) + ".Provider";
          case l:
            return $(w, w.render, "ForwardRef");
          case p:
            var se = w.displayName || null;
            return se !== null ? se : Y(w.type) || "Memo";
          case y: {
            var Re = w, Se = Re._payload, Oe = Re._init;
            try {
              return Y(Oe(Se));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var x = Object.assign, T = 0, H, k, q, z, j, K, oe;
    function W() {
    }
    W.__reactDisabledLog = !0;
    function ie() {
      {
        if (T === 0) {
          H = console.log, k = console.info, q = console.warn, z = console.error, j = console.group, K = console.groupCollapsed, oe = console.groupEnd;
          var w = {
            configurable: !0,
            enumerable: !0,
            value: W,
            writable: !0
          };
          Object.defineProperties(console, {
            info: w,
            log: w,
            warn: w,
            error: w,
            group: w,
            groupCollapsed: w,
            groupEnd: w
          });
        }
        T++;
      }
    }
    function Z() {
      {
        if (T--, T === 0) {
          var w = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: x({}, w, {
              value: H
            }),
            info: x({}, w, {
              value: k
            }),
            warn: x({}, w, {
              value: q
            }),
            error: x({}, w, {
              value: z
            }),
            group: x({}, w, {
              value: j
            }),
            groupCollapsed: x({}, w, {
              value: K
            }),
            groupEnd: x({}, w, {
              value: oe
            })
          });
        }
        T < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = U.ReactCurrentDispatcher, F;
    function N(w, M, J) {
      {
        if (F === void 0)
          try {
            throw Error();
          } catch (Re) {
            var se = Re.stack.trim().match(/\n( *(at )?)/);
            F = se && se[1] || "";
          }
        return `
` + F + w;
      }
    }
    var C = !1, c;
    {
      var S = typeof WeakMap == "function" ? WeakMap : Map;
      c = new S();
    }
    function G(w, M) {
      if (!w || C)
        return "";
      {
        var J = c.get(w);
        if (J !== void 0)
          return J;
      }
      var se;
      C = !0;
      var Re = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Se;
      Se = re.current, re.current = null, ie();
      try {
        if (M) {
          var Oe = function() {
            throw Error();
          };
          if (Object.defineProperty(Oe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Oe, []);
            } catch (Wt) {
              se = Wt;
            }
            Reflect.construct(w, [], Oe);
          } else {
            try {
              Oe.call();
            } catch (Wt) {
              se = Wt;
            }
            w.call(Oe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Wt) {
            se = Wt;
          }
          w();
        }
      } catch (Wt) {
        if (Wt && se && typeof Wt.stack == "string") {
          for (var we = Wt.stack.split(`
`), ft = se.stack.split(`
`), Ve = we.length - 1, Ye = ft.length - 1; Ve >= 1 && Ye >= 0 && we[Ve] !== ft[Ye]; )
            Ye--;
          for (; Ve >= 1 && Ye >= 0; Ve--, Ye--)
            if (we[Ve] !== ft[Ye]) {
              if (Ve !== 1 || Ye !== 1)
                do
                  if (Ve--, Ye--, Ye < 0 || we[Ve] !== ft[Ye]) {
                    var it = `
` + we[Ve].replace(" at new ", " at ");
                    return w.displayName && it.includes("<anonymous>") && (it = it.replace("<anonymous>", w.displayName)), typeof w == "function" && c.set(w, it), it;
                  }
                while (Ve >= 1 && Ye >= 0);
              break;
            }
        }
      } finally {
        C = !1, re.current = Se, Z(), Error.prepareStackTrace = Re;
      }
      var gr = w ? w.displayName || w.name : "", Bi = gr ? N(gr) : "";
      return typeof w == "function" && c.set(w, Bi), Bi;
    }
    function Q(w, M, J) {
      return G(w, !1);
    }
    function be(w) {
      var M = w.prototype;
      return !!(M && M.isReactComponent);
    }
    function ve(w, M, J) {
      if (w == null)
        return "";
      if (typeof w == "function")
        return G(w, be(w));
      if (typeof w == "string")
        return N(w);
      switch (w) {
        case f:
          return N("Suspense");
        case h:
          return N("SuspenseList");
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case l:
            return Q(w.render);
          case p:
            return ve(w.type, M, J);
          case y: {
            var se = w, Re = se._payload, Se = se._init;
            try {
              return ve(Se(Re), M, J);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, Ie = {}, qe = U.ReactDebugCurrentFrame;
    function Le(w) {
      if (w) {
        var M = w._owner, J = ve(w.type, w._source, M ? M.type : null);
        qe.setExtraStackFrame(J);
      } else
        qe.setExtraStackFrame(null);
    }
    function De(w, M, J, se, Re) {
      {
        var Se = Function.call.bind(he);
        for (var Oe in w)
          if (Se(w, Oe)) {
            var we = void 0;
            try {
              if (typeof w[Oe] != "function") {
                var ft = Error((se || "React class") + ": " + J + " type `" + Oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof w[Oe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ft.name = "Invariant Violation", ft;
              }
              we = w[Oe](M, Oe, se, J, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ve) {
              we = Ve;
            }
            we && !(we instanceof Error) && (Le(Re), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", se || "React class", J, Oe, typeof we), Le(null)), we instanceof Error && !(we.message in Ie) && (Ie[we.message] = !0, Le(Re), E("Failed %s type: %s", J, we.message), Le(null));
          }
      }
    }
    var _e = Array.isArray;
    function de(w) {
      return _e(w);
    }
    function ge(w) {
      {
        var M = typeof Symbol == "function" && Symbol.toStringTag, J = M && w[Symbol.toStringTag] || w.constructor.name || "Object";
        return J;
      }
    }
    function pe(w) {
      try {
        return ue(w), !1;
      } catch {
        return !0;
      }
    }
    function ue(w) {
      return "" + w;
    }
    function ce(w) {
      if (pe(w))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ge(w)), ue(w);
    }
    var ne = U.ReactCurrentOwner, ye = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, ae, Ee;
    Ee = {};
    function xe(w) {
      if (he.call(w, "ref")) {
        var M = Object.getOwnPropertyDescriptor(w, "ref").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return w.ref !== void 0;
    }
    function Pe(w) {
      if (he.call(w, "key")) {
        var M = Object.getOwnPropertyDescriptor(w, "key").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return w.key !== void 0;
    }
    function Te(w, M) {
      if (typeof w.ref == "string" && ne.current && M && ne.current.stateNode !== M) {
        var J = Y(ne.current.type);
        Ee[J] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Y(ne.current.type), w.ref), Ee[J] = !0);
      }
    }
    function Ce(w, M) {
      {
        var J = function() {
          me || (me = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        J.isReactWarning = !0, Object.defineProperty(w, "key", {
          get: J,
          configurable: !0
        });
      }
    }
    function Pt(w, M) {
      {
        var J = function() {
          ae || (ae = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        J.isReactWarning = !0, Object.defineProperty(w, "ref", {
          get: J,
          configurable: !0
        });
      }
    }
    var Mt = function(w, M, J, se, Re, Se, Oe) {
      var we = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: w,
        key: M,
        ref: J,
        props: Oe,
        // Record the component responsible for creating this element.
        _owner: Se
      };
      return we._store = {}, Object.defineProperty(we._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(we, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: se
      }), Object.defineProperty(we, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Re
      }), Object.freeze && (Object.freeze(we.props), Object.freeze(we)), we;
    };
    function Qt(w, M, J, se, Re) {
      {
        var Se, Oe = {}, we = null, ft = null;
        J !== void 0 && (ce(J), we = "" + J), Pe(M) && (ce(M.key), we = "" + M.key), xe(M) && (ft = M.ref, Te(M, Re));
        for (Se in M)
          he.call(M, Se) && !ye.hasOwnProperty(Se) && (Oe[Se] = M[Se]);
        if (w && w.defaultProps) {
          var Ve = w.defaultProps;
          for (Se in Ve)
            Oe[Se] === void 0 && (Oe[Se] = Ve[Se]);
        }
        if (we || ft) {
          var Ye = typeof w == "function" ? w.displayName || w.name || "Unknown" : w;
          we && Ce(Oe, Ye), ft && Pt(Oe, Ye);
        }
        return Mt(w, we, ft, Re, se, ne.current, Oe);
      }
    }
    var lt = U.ReactCurrentOwner, Zt = U.ReactDebugCurrentFrame;
    function jt(w) {
      if (w) {
        var M = w._owner, J = ve(w.type, w._source, M ? M.type : null);
        Zt.setExtraStackFrame(J);
      } else
        Zt.setExtraStackFrame(null);
    }
    var pr;
    pr = !1;
    function Be(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function Ue() {
      {
        if (lt.current) {
          var w = Y(lt.current.type);
          if (w)
            return `

Check the render method of \`` + w + "`.";
        }
        return "";
      }
    }
    function We(w) {
      {
        if (w !== void 0) {
          var M = w.fileName.replace(/^.*[\\\/]/, ""), J = w.lineNumber;
          return `

Check your code at ` + M + ":" + J + ".";
        }
        return "";
      }
    }
    var ke = {};
    function He(w) {
      {
        var M = Ue();
        if (!M) {
          var J = typeof w == "string" ? w : w.displayName || w.name;
          J && (M = `

Check the top-level render call using <` + J + ">.");
        }
        return M;
      }
    }
    function Me(w, M) {
      {
        if (!w._store || w._store.validated || w.key != null)
          return;
        w._store.validated = !0;
        var J = He(M);
        if (ke[J])
          return;
        ke[J] = !0;
        var se = "";
        w && w._owner && w._owner !== lt.current && (se = " It was passed a child from " + Y(w._owner.type) + "."), jt(w), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', J, se), jt(null);
      }
    }
    function Xe(w, M) {
      {
        if (typeof w != "object")
          return;
        if (de(w))
          for (var J = 0; J < w.length; J++) {
            var se = w[J];
            Be(se) && Me(se, M);
          }
        else if (Be(w))
          w._store && (w._store.validated = !0);
        else if (w) {
          var Re = P(w);
          if (typeof Re == "function" && Re !== w.entries)
            for (var Se = Re.call(w), Oe; !(Oe = Se.next()).done; )
              Be(Oe.value) && Me(Oe.value, M);
        }
      }
    }
    function et(w) {
      {
        var M = w.type;
        if (M == null || typeof M == "string")
          return;
        var J;
        if (typeof M == "function")
          J = M.propTypes;
        else if (typeof M == "object" && (M.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        M.$$typeof === p))
          J = M.propTypes;
        else
          return;
        if (J) {
          var se = Y(M);
          De(J, w.props, "prop", se, w);
        } else if (M.PropTypes !== void 0 && !pr) {
          pr = !0;
          var Re = Y(M);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Re || "Unknown");
        }
        typeof M.getDefaultProps == "function" && !M.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tt(w) {
      {
        for (var M = Object.keys(w.props), J = 0; J < M.length; J++) {
          var se = M[J];
          if (se !== "children" && se !== "key") {
            jt(w), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", se), jt(null);
            break;
          }
        }
        w.ref !== null && (jt(w), E("Invalid attribute `ref` supplied to `React.Fragment`."), jt(null));
      }
    }
    function Qe(w, M, J, se, Re, Se) {
      {
        var Oe = L(w);
        if (!Oe) {
          var we = "";
          (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (we += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ft = We(Re);
          ft ? we += ft : we += Ue();
          var Ve;
          w === null ? Ve = "null" : de(w) ? Ve = "array" : w !== void 0 && w.$$typeof === t ? (Ve = "<" + (Y(w.type) || "Unknown") + " />", we = " Did you accidentally export a JSX literal instead of a component?") : Ve = typeof w, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ve, we);
        }
        var Ye = Qt(w, M, J, Re, Se);
        if (Ye == null)
          return Ye;
        if (Oe) {
          var it = M.children;
          if (it !== void 0)
            if (se)
              if (de(it)) {
                for (var gr = 0; gr < it.length; gr++)
                  Xe(it[gr], w);
                Object.freeze && Object.freeze(it);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Xe(it, w);
        }
        return w === i ? tt(Ye) : et(Ye), Ye;
      }
    }
    function rt(w, M, J) {
      return Qe(w, M, J, !0);
    }
    function Ze(w, M, J) {
      return Qe(w, M, J, !1);
    }
    var Ge = Ze, Fe = rt;
    ui.Fragment = i, ui.jsx = Ge, ui.jsxs = Fe;
  }()), ui;
}
process.env.NODE_ENV === "production" ? is.exports = jl() : is.exports = ql();
var ns = is.exports;
const Bl = Symbol(), xo = Object.getPrototypeOf, ss = /* @__PURE__ */ new WeakMap(), zl = (e) => e && (ss.has(e) ? ss.get(e) : xo(e) === Object.prototype || xo(e) === Array.prototype), kl = (e) => zl(e) && e[Bl] || null, Co = (e, t = !0) => {
  ss.set(e, t);
}, An = (e) => typeof e == "object" && e !== null, mr = /* @__PURE__ */ new WeakMap(), Gi = /* @__PURE__ */ new WeakSet(), Vl = (e = Object.is, t = (f, h) => new Proxy(f, h), r = (f) => An(f) && !Gi.has(f) && (Array.isArray(f) || !(Symbol.iterator in f)) && !(f instanceof WeakMap) && !(f instanceof WeakSet) && !(f instanceof Error) && !(f instanceof Number) && !(f instanceof Date) && !(f instanceof String) && !(f instanceof RegExp) && !(f instanceof ArrayBuffer), i = (f) => {
  switch (f.status) {
    case "fulfilled":
      return f.value;
    case "rejected":
      throw f.reason;
    default:
      throw f;
  }
}, n = /* @__PURE__ */ new WeakMap(), s = (f, h, p = i) => {
  const y = n.get(f);
  if ((y == null ? void 0 : y[0]) === h)
    return y[1];
  const m = Array.isArray(f) ? [] : Object.create(Object.getPrototypeOf(f));
  return Co(m, !0), n.set(f, [h, m]), Reflect.ownKeys(f).forEach((D) => {
    if (Object.getOwnPropertyDescriptor(m, D))
      return;
    const I = Reflect.get(f, D), P = {
      value: I,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (Gi.has(I))
      Co(I, !1);
    else if (I instanceof Promise)
      delete P.value, P.get = () => p(I);
    else if (mr.has(I)) {
      const [U, E] = mr.get(
        I
      );
      P.value = s(
        U,
        E(),
        p
      );
    }
    Object.defineProperty(m, D, P);
  }), Object.preventExtensions(m);
}, u = /* @__PURE__ */ new WeakMap(), a = [1, 1], l = (f) => {
  if (!An(f))
    throw new Error("object required");
  const h = u.get(f);
  if (h)
    return h;
  let p = a[0];
  const y = /* @__PURE__ */ new Set(), m = (A, L = ++a[0]) => {
    p !== L && (p = L, y.forEach(($) => $(A, L)));
  };
  let D = a[1];
  const I = (A = ++a[1]) => (D !== A && !y.size && (D = A, U.forEach(([L]) => {
    const $ = L[1](A);
    $ > p && (p = $);
  })), p), P = (A) => (L, $) => {
    const V = [...L];
    V[1] = [A, ...V[1]], m(V, $);
  }, U = /* @__PURE__ */ new Map(), E = (A, L) => {
    if (y.size) {
      const $ = L[3](P(A));
      U.set(A, [L, $]);
    } else
      U.set(A, [L]);
  }, O = (A) => {
    var L;
    const $ = U.get(A);
    $ && (U.delete(A), (L = $[1]) == null || L.call($));
  }, b = (A) => (y.add(A), y.size === 1 && U.forEach(([$, V], Y) => {
    const x = $[3](P(Y));
    U.set(Y, [$, x]);
  }), () => {
    y.delete(A), y.size === 0 && U.forEach(([$, V], Y) => {
      V && (V(), U.set(Y, [$]));
    });
  }), _ = Array.isArray(f) ? [] : Object.create(Object.getPrototypeOf(f)), o = t(_, {
    deleteProperty(A, L) {
      const $ = Reflect.get(A, L);
      O(L);
      const V = Reflect.deleteProperty(A, L);
      return V && m(["delete", [L], $]), V;
    },
    set(A, L, $, V) {
      const Y = Reflect.has(A, L), x = Reflect.get(A, L, V);
      if (Y && (e(x, $) || u.has($) && e(x, u.get($))))
        return !0;
      O(L), An($) && ($ = kl($) || $);
      let T = $;
      if ($ instanceof Promise)
        $.then((H) => {
          $.status = "fulfilled", $.value = H, m(["resolve", [L], H]);
        }).catch((H) => {
          $.status = "rejected", $.reason = H, m(["reject", [L], H]);
        });
      else {
        !mr.has($) && r($) && (T = l($));
        const H = !Gi.has(T) && mr.get(T);
        H && E(L, H);
      }
      return Reflect.set(A, L, T, V), m(["set", [L], $, x]), !0;
    }
  });
  u.set(f, o);
  const g = [
    _,
    I,
    s,
    b
  ];
  return mr.set(o, g), Reflect.ownKeys(f).forEach((A) => {
    const L = Object.getOwnPropertyDescriptor(
      f,
      A
    );
    "value" in L && (o[A] = f[A], delete L.value, delete L.writable), Object.defineProperty(_, A, L);
  }), o;
}) => [
  // public functions
  l,
  // shared state
  mr,
  Gi,
  // internal things
  e,
  t,
  r,
  i,
  n,
  s,
  u,
  a
], [Kl] = Vl();
function Er(e = {}) {
  return Kl(e);
}
function Mr(e, t, r) {
  const i = mr.get(e);
  let n;
  const s = [], u = i[3];
  let a = !1;
  const f = u((h) => {
    if (s.push(h), r) {
      t(s.splice(0));
      return;
    }
    n || (n = Promise.resolve().then(() => {
      n = void 0, a && t(s.splice(0));
    }));
  });
  return a = !0, () => {
    a = !1, f();
  };
}
function Wl(e, t) {
  const r = mr.get(e), [i, n, s] = r;
  return s(i, n(), t);
}
const at = Er({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), Ac = { state: at, subscribe(e) {
  return Mr(at, () => e(at));
}, push(e, t) {
  e !== at.view && (at.view = e, t && (at.data = t), at.history.push(e));
}, reset(e) {
  at.view = e, at.history = [e];
}, replace(e) {
  at.history.length > 1 && (at.history[at.history.length - 1] = e, at.view = e);
}, goBack() {
  if (at.history.length > 1) {
    at.history.pop();
    const [e] = at.history.slice(-1);
    at.view = e;
  }
}, setData(e) {
  at.data = e;
} }, _t = { WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE", WCM_VERSION: "WCM_VERSION", RECOMMENDED_WALLET_AMOUNT: 9, isMobile() {
  return typeof window < "u" ? !!(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
}, isAndroid() {
  return _t.isMobile() && navigator.userAgent.toLowerCase().includes("android");
}, isIos() {
  const e = navigator.userAgent.toLowerCase();
  return _t.isMobile() && (e.includes("iphone") || e.includes("ipad"));
}, isHttpUrl(e) {
  return e.startsWith("http://") || e.startsWith("https://");
}, isArray(e) {
  return Array.isArray(e) && e.length > 0;
}, formatNativeUrl(e, t, r) {
  if (_t.isHttpUrl(e))
    return this.formatUniversalUrl(e, t, r);
  let i = e;
  i.includes("://") || (i = e.replaceAll("/", "").replaceAll(":", ""), i = `${i}://`), i.endsWith("/") || (i = `${i}/`), this.setWalletConnectDeepLink(i, r);
  const n = encodeURIComponent(t);
  return `${i}wc?uri=${n}`;
}, formatUniversalUrl(e, t, r) {
  if (!_t.isHttpUrl(e))
    return this.formatNativeUrl(e, t, r);
  let i = e;
  i.endsWith("/") || (i = `${i}/`), this.setWalletConnectDeepLink(i, r);
  const n = encodeURIComponent(t);
  return `${i}wc?uri=${n}`;
}, async wait(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}, openHref(e, t) {
  window.open(e, t, "noreferrer noopener");
}, setWalletConnectDeepLink(e, t) {
  try {
    localStorage.setItem(_t.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: e, name: t }));
  } catch {
    console.info("Unable to set WalletConnect deep link");
  }
}, setWalletConnectAndroidDeepLink(e) {
  try {
    const [t] = e.split("?");
    localStorage.setItem(_t.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: t, name: "Android" }));
  } catch {
    console.info("Unable to set WalletConnect android deep link");
  }
}, removeWalletConnectDeepLink() {
  try {
    localStorage.removeItem(_t.WALLETCONNECT_DEEPLINK_CHOICE);
  } catch {
    console.info("Unable to remove WalletConnect deep link");
  }
}, setModalVersionInStorage() {
  try {
    typeof localStorage < "u" && localStorage.setItem(_t.WCM_VERSION, "2.6.2");
  } catch {
    console.info("Unable to set Web3Modal version in storage");
  }
}, getWalletRouterData() {
  var e;
  const t = (e = Ac.state.data) == null ? void 0 : e.Wallet;
  if (!t)
    throw new Error('Missing "Wallet" view data');
  return t;
} }, Hl = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), bt = Er({ enabled: Hl, userSessionId: "", events: [], connectedWalletId: void 0 }), Gl = { state: bt, subscribe(e) {
  return Mr(bt.events, () => e(Wl(bt.events[bt.events.length - 1])));
}, initialize() {
  bt.enabled && typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" && (bt.userSessionId = crypto.randomUUID());
}, setConnectedWalletId(e) {
  bt.connectedWalletId = e;
}, click(e) {
  if (bt.enabled) {
    const t = { type: "CLICK", name: e.name, userSessionId: bt.userSessionId, timestamp: Date.now(), data: e };
    bt.events.push(t);
  }
}, track(e) {
  if (bt.enabled) {
    const t = { type: "TRACK", name: e.name, userSessionId: bt.userSessionId, timestamp: Date.now(), data: e };
    bt.events.push(t);
  }
}, view(e) {
  if (bt.enabled) {
    const t = { type: "VIEW", name: e.name, userSessionId: bt.userSessionId, timestamp: Date.now(), data: e };
    bt.events.push(t);
  }
} }, er = Er({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }), Jt = { state: er, subscribe(e) {
  return Mr(er, () => e(er));
}, setChains(e) {
  er.chains = e;
}, setWalletConnectUri(e) {
  er.walletConnectUri = e;
}, setIsCustomDesktop(e) {
  er.isCustomDesktop = e;
}, setIsCustomMobile(e) {
  er.isCustomMobile = e;
}, setIsDataLoaded(e) {
  er.isDataLoaded = e;
}, setIsUiLoaded(e) {
  er.isUiLoaded = e;
}, setIsAuth(e) {
  er.isAuth = e;
} }, Yi = Er({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), Xr = { state: Yi, subscribe(e) {
  return Mr(Yi, () => e(Yi));
}, setConfig(e) {
  var t, r;
  Gl.initialize(), Jt.setChains(e.chains), Jt.setIsAuth(!!e.enableAuthMode), Jt.setIsCustomMobile(!!((t = e.mobileWallets) != null && t.length)), Jt.setIsCustomDesktop(!!((r = e.desktopWallets) != null && r.length)), _t.setModalVersionInStorage(), Object.assign(Yi, e);
} };
var Yl = Object.defineProperty, Ro = Object.getOwnPropertySymbols, Jl = Object.prototype.hasOwnProperty, Xl = Object.prototype.propertyIsEnumerable, Ao = (e, t, r) => t in e ? Yl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Ql = (e, t) => {
  for (var r in t || (t = {}))
    Jl.call(t, r) && Ao(e, r, t[r]);
  if (Ro)
    for (var r of Ro(t))
      Xl.call(t, r) && Ao(e, r, t[r]);
  return e;
};
const os = "https://explorer-api.walletconnect.com", as = "wcm", cs = "js-2.6.2";
async function Ji(e, t) {
  const r = Ql({ sdkType: as, sdkVersion: cs }, t), i = new URL(e, os);
  return i.searchParams.append("projectId", Xr.state.projectId), Object.entries(r).forEach(([n, s]) => {
    s && i.searchParams.append(n, String(s));
  }), (await fetch(i)).json();
}
const xr = { async getDesktopListings(e) {
  return Ji("/w3m/v1/getDesktopListings", e);
}, async getMobileListings(e) {
  return Ji("/w3m/v1/getMobileListings", e);
}, async getInjectedListings(e) {
  return Ji("/w3m/v1/getInjectedListings", e);
}, async getAllListings(e) {
  return Ji("/w3m/v1/getAllListings", e);
}, getWalletImageUrl(e) {
  return `${os}/w3m/v1/getWalletImage/${e}?projectId=${Xr.state.projectId}&sdkType=${as}&sdkVersion=${cs}`;
}, getAssetImageUrl(e) {
  return `${os}/w3m/v1/getAssetImage/${e}?projectId=${Xr.state.projectId}&sdkType=${as}&sdkVersion=${cs}`;
} };
var Zl = Object.defineProperty, Po = Object.getOwnPropertySymbols, ef = Object.prototype.hasOwnProperty, tf = Object.prototype.propertyIsEnumerable, To = (e, t, r) => t in e ? Zl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, rf = (e, t) => {
  for (var r in t || (t = {}))
    ef.call(t, r) && To(e, r, t[r]);
  if (Po)
    for (var r of Po(t))
      tf.call(t, r) && To(e, r, t[r]);
  return e;
};
const No = _t.isMobile(), tr = Er({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), L1 = { state: tr, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: e, explorerExcludedWalletIds: t } = Xr.state;
  if (e === "NONE" || t === "ALL" && !e)
    return tr.recomendedWallets;
  if (_t.isArray(e)) {
    const r = { recommendedIds: e.join(",") }, { listings: i } = await xr.getAllListings(r), n = Object.values(i);
    n.sort((s, u) => {
      const a = e.indexOf(s.id), l = e.indexOf(u.id);
      return a - l;
    }), tr.recomendedWallets = n;
  } else {
    const { chains: r, isAuth: i } = Jt.state, n = r == null ? void 0 : r.join(","), s = _t.isArray(t), u = { page: 1, sdks: i ? "auth_v1" : void 0, entries: _t.RECOMMENDED_WALLET_AMOUNT, chains: n, version: 2, excludedIds: s ? t.join(",") : void 0 }, { listings: a } = No ? await xr.getMobileListings(u) : await xr.getDesktopListings(u);
    tr.recomendedWallets = Object.values(a);
  }
  return tr.recomendedWallets;
}, async getWallets(e) {
  const t = rf({}, e), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: i } = Xr.state, { recomendedWallets: n } = tr;
  if (i === "ALL")
    return tr.wallets;
  n.length ? t.excludedIds = n.map((p) => p.id).join(",") : _t.isArray(r) && (t.excludedIds = r.join(",")), _t.isArray(i) && (t.excludedIds = [t.excludedIds, i].filter(Boolean).join(",")), Jt.state.isAuth && (t.sdks = "auth_v1");
  const { page: s, search: u } = e, { listings: a, total: l } = No ? await xr.getMobileListings(t) : await xr.getDesktopListings(t), f = Object.values(a), h = u ? "search" : "wallets";
  return tr[h] = { listings: [...tr[h].listings, ...f], total: l, page: s ?? 1 }, { listings: f, total: l };
}, getWalletImageUrl(e) {
  return xr.getWalletImageUrl(e);
}, getAssetImageUrl(e) {
  return xr.getAssetImageUrl(e);
}, resetSearch() {
  tr.search = { listings: [], total: 0, page: 1 };
} }, Vr = Er({ open: !1 }), Pn = { state: Vr, subscribe(e) {
  return Mr(Vr, () => e(Vr));
}, async open(e) {
  return new Promise((t) => {
    const { isUiLoaded: r, isDataLoaded: i } = Jt.state;
    if (_t.removeWalletConnectDeepLink(), Jt.setWalletConnectUri(e == null ? void 0 : e.uri), Jt.setChains(e == null ? void 0 : e.chains), Ac.reset("ConnectWallet"), r && i)
      Vr.open = !0, t();
    else {
      const n = setInterval(() => {
        const s = Jt.state;
        s.isUiLoaded && s.isDataLoaded && (clearInterval(n), Vr.open = !0, t());
      }, 200);
    }
  });
}, close() {
  Vr.open = !1;
} };
var nf = Object.defineProperty, Lo = Object.getOwnPropertySymbols, sf = Object.prototype.hasOwnProperty, of = Object.prototype.propertyIsEnumerable, Fo = (e, t, r) => t in e ? nf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, af = (e, t) => {
  for (var r in t || (t = {}))
    sf.call(t, r) && Fo(e, r, t[r]);
  if (Lo)
    for (var r of Lo(t))
      of.call(t, r) && Fo(e, r, t[r]);
  return e;
};
function cf() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const li = Er({ themeMode: cf() ? "dark" : "light" }), $o = { state: li, subscribe(e) {
  return Mr(li, () => e(li));
}, setThemeConfig(e) {
  const { themeMode: t, themeVariables: r } = e;
  t && (li.themeMode = t), r && (li.themeVariables = af({}, r));
} }, Cr = Er({ open: !1, message: "", variant: "success" }), F1 = { state: Cr, subscribe(e) {
  return Mr(Cr, () => e(Cr));
}, openToast(e, t) {
  Cr.open = !0, Cr.message = e, Cr.variant = t;
}, closeToast() {
  Cr.open = !1;
} };
let uf = class {
  constructor(t) {
    this.openModal = Pn.open, this.closeModal = Pn.close, this.subscribeModal = Pn.subscribe, this.setTheme = $o.setThemeConfig, $o.setThemeConfig(t), Xr.setConfig(t), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-049d62cc.js");
      const t = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", t), Jt.setIsUiLoaded(!0);
    }
  }
};
var $s = { exports: {} }, Yr = typeof Reflect == "object" ? Reflect : null, Uo = Yr && typeof Yr.apply == "function" ? Yr.apply : function(t, r, i) {
  return Function.prototype.apply.call(t, r, i);
}, en;
Yr && typeof Yr.ownKeys == "function" ? en = Yr.ownKeys : Object.getOwnPropertySymbols ? en = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : en = function(t) {
  return Object.getOwnPropertyNames(t);
};
function lf(e) {
  console && console.warn && console.warn(e);
}
var Pc = Number.isNaN || function(t) {
  return t !== t;
};
function Ne() {
  Ne.init.call(this);
}
$s.exports = Ne;
$s.exports.once = pf;
Ne.EventEmitter = Ne;
Ne.prototype._events = void 0;
Ne.prototype._eventsCount = 0;
Ne.prototype._maxListeners = void 0;
var Mo = 10;
function bn(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(Ne, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Mo;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || Pc(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    Mo = e;
  }
});
Ne.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Ne.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || Pc(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function Tc(e) {
  return e._maxListeners === void 0 ? Ne.defaultMaxListeners : e._maxListeners;
}
Ne.prototype.getMaxListeners = function() {
  return Tc(this);
};
Ne.prototype.emit = function(t) {
  for (var r = [], i = 1; i < arguments.length; i++)
    r.push(arguments[i]);
  var n = t === "error", s = this._events;
  if (s !== void 0)
    n = n && s.error === void 0;
  else if (!n)
    return !1;
  if (n) {
    var u;
    if (r.length > 0 && (u = r[0]), u instanceof Error)
      throw u;
    var a = new Error("Unhandled error." + (u ? " (" + u.message + ")" : ""));
    throw a.context = u, a;
  }
  var l = s[t];
  if (l === void 0)
    return !1;
  if (typeof l == "function")
    Uo(l, this, r);
  else
    for (var f = l.length, h = Uc(l, f), i = 0; i < f; ++i)
      Uo(h[i], this, r);
  return !0;
};
function Nc(e, t, r, i) {
  var n, s, u;
  if (bn(r), s = e._events, s === void 0 ? (s = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (s.newListener !== void 0 && (e.emit(
    "newListener",
    t,
    r.listener ? r.listener : r
  ), s = e._events), u = s[t]), u === void 0)
    u = s[t] = r, ++e._eventsCount;
  else if (typeof u == "function" ? u = s[t] = i ? [r, u] : [u, r] : i ? u.unshift(r) : u.push(r), n = Tc(e), n > 0 && u.length > n && !u.warned) {
    u.warned = !0;
    var a = new Error("Possible EventEmitter memory leak detected. " + u.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    a.name = "MaxListenersExceededWarning", a.emitter = e, a.type = t, a.count = u.length, lf(a);
  }
  return e;
}
Ne.prototype.addListener = function(t, r) {
  return Nc(this, t, r, !1);
};
Ne.prototype.on = Ne.prototype.addListener;
Ne.prototype.prependListener = function(t, r) {
  return Nc(this, t, r, !0);
};
function ff() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Lc(e, t, r) {
  var i = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r }, n = ff.bind(i);
  return n.listener = r, i.wrapFn = n, n;
}
Ne.prototype.once = function(t, r) {
  return bn(r), this.on(t, Lc(this, t, r)), this;
};
Ne.prototype.prependOnceListener = function(t, r) {
  return bn(r), this.prependListener(t, Lc(this, t, r)), this;
};
Ne.prototype.removeListener = function(t, r) {
  var i, n, s, u, a;
  if (bn(r), n = this._events, n === void 0)
    return this;
  if (i = n[t], i === void 0)
    return this;
  if (i === r || i.listener === r)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete n[t], n.removeListener && this.emit("removeListener", t, i.listener || r));
  else if (typeof i != "function") {
    for (s = -1, u = i.length - 1; u >= 0; u--)
      if (i[u] === r || i[u].listener === r) {
        a = i[u].listener, s = u;
        break;
      }
    if (s < 0)
      return this;
    s === 0 ? i.shift() : hf(i, s), i.length === 1 && (n[t] = i[0]), n.removeListener !== void 0 && this.emit("removeListener", t, a || r);
  }
  return this;
};
Ne.prototype.off = Ne.prototype.removeListener;
Ne.prototype.removeAllListeners = function(t) {
  var r, i, n;
  if (i = this._events, i === void 0)
    return this;
  if (i.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : i[t] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete i[t]), this;
  if (arguments.length === 0) {
    var s = Object.keys(i), u;
    for (n = 0; n < s.length; ++n)
      u = s[n], u !== "removeListener" && this.removeAllListeners(u);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (r = i[t], typeof r == "function")
    this.removeListener(t, r);
  else if (r !== void 0)
    for (n = r.length - 1; n >= 0; n--)
      this.removeListener(t, r[n]);
  return this;
};
function Fc(e, t, r) {
  var i = e._events;
  if (i === void 0)
    return [];
  var n = i[t];
  return n === void 0 ? [] : typeof n == "function" ? r ? [n.listener || n] : [n] : r ? df(n) : Uc(n, n.length);
}
Ne.prototype.listeners = function(t) {
  return Fc(this, t, !0);
};
Ne.prototype.rawListeners = function(t) {
  return Fc(this, t, !1);
};
Ne.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : $c.call(e, t);
};
Ne.prototype.listenerCount = $c;
function $c(e) {
  var t = this._events;
  if (t !== void 0) {
    var r = t[e];
    if (typeof r == "function")
      return 1;
    if (r !== void 0)
      return r.length;
  }
  return 0;
}
Ne.prototype.eventNames = function() {
  return this._eventsCount > 0 ? en(this._events) : [];
};
function Uc(e, t) {
  for (var r = new Array(t), i = 0; i < t; ++i)
    r[i] = e[i];
  return r;
}
function hf(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function df(e) {
  for (var t = new Array(e.length), r = 0; r < t.length; ++r)
    t[r] = e[r].listener || e[r];
  return t;
}
function pf(e, t) {
  return new Promise(function(r, i) {
    function n(u) {
      e.removeListener(t, s), i(u);
    }
    function s() {
      typeof e.removeListener == "function" && e.removeListener("error", n), r([].slice.call(arguments));
    }
    Mc(e, t, s, { once: !0 }), t !== "error" && gf(e, n, { once: !0 });
  });
}
function gf(e, t, r) {
  typeof e.on == "function" && Mc(e, "error", t, r);
}
function Mc(e, t, r, i) {
  if (typeof e.on == "function")
    i.once ? e.once(t, r) : e.on(t, r);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function n(s) {
      i.once && e.removeEventListener(t, n), r(s);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var Xt = $s.exports;
const jc = /* @__PURE__ */ yn(Xt);
var vn = {};
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
var us = function(e, t) {
  return us = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
    r.__proto__ = i;
  } || function(r, i) {
    for (var n in i)
      i.hasOwnProperty(n) && (r[n] = i[n]);
  }, us(e, t);
};
function yf(e, t) {
  us(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var ls = function() {
  return ls = Object.assign || function(t) {
    for (var r, i = 1, n = arguments.length; i < n; i++) {
      r = arguments[i];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, ls.apply(this, arguments);
};
function bf(e, t) {
  var r = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++)
      t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
  return r;
}
function vf(e, t, r, i) {
  var n = arguments.length, s = n < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, r) : i, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    s = Reflect.decorate(e, t, r, i);
  else
    for (var a = e.length - 1; a >= 0; a--)
      (u = e[a]) && (s = (n < 3 ? u(s) : n > 3 ? u(t, r, s) : u(t, r)) || s);
  return n > 3 && s && Object.defineProperty(t, r, s), s;
}
function mf(e, t) {
  return function(r, i) {
    t(r, i, e);
  };
}
function wf(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function _f(e, t, r, i) {
  function n(s) {
    return s instanceof r ? s : new r(function(u) {
      u(s);
    });
  }
  return new (r || (r = Promise))(function(s, u) {
    function a(h) {
      try {
        f(i.next(h));
      } catch (p) {
        u(p);
      }
    }
    function l(h) {
      try {
        f(i.throw(h));
      } catch (p) {
        u(p);
      }
    }
    function f(h) {
      h.done ? s(h.value) : n(h.value).then(a, l);
    }
    f((i = i.apply(e, t || [])).next());
  });
}
function Ef(e, t) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, i, n, s, u;
  return u = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
    return this;
  }), u;
  function a(f) {
    return function(h) {
      return l([f, h]);
    };
  }
  function l(f) {
    if (i)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (i = 1, n && (s = f[0] & 2 ? n.return : f[0] ? n.throw || ((s = n.return) && s.call(n), 0) : n.next) && !(s = s.call(n, f[1])).done)
          return s;
        switch (n = 0, s && (f = [f[0] & 2, s.value]), f[0]) {
          case 0:
          case 1:
            s = f;
            break;
          case 4:
            return r.label++, { value: f[1], done: !1 };
          case 5:
            r.label++, n = f[1], f = [0];
            continue;
          case 7:
            f = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (s = r.trys, !(s = s.length > 0 && s[s.length - 1]) && (f[0] === 6 || f[0] === 2)) {
              r = 0;
              continue;
            }
            if (f[0] === 3 && (!s || f[1] > s[0] && f[1] < s[3])) {
              r.label = f[1];
              break;
            }
            if (f[0] === 6 && r.label < s[1]) {
              r.label = s[1], s = f;
              break;
            }
            if (s && r.label < s[2]) {
              r.label = s[2], r.ops.push(f);
              break;
            }
            s[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        f = t.call(e, r);
      } catch (h) {
        f = [6, h], n = 0;
      } finally {
        i = s = 0;
      }
    if (f[0] & 5)
      throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}
function Sf(e, t, r, i) {
  i === void 0 && (i = r), e[i] = t[r];
}
function Df(e, t) {
  for (var r in e)
    r !== "default" && !t.hasOwnProperty(r) && (t[r] = e[r]);
}
function fs(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], i = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && i >= e.length && (e = void 0), { value: e && e[i++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function qc(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var i = r.call(e), n, s = [], u;
  try {
    for (; (t === void 0 || t-- > 0) && !(n = i.next()).done; )
      s.push(n.value);
  } catch (a) {
    u = { error: a };
  } finally {
    try {
      n && !n.done && (r = i.return) && r.call(i);
    } finally {
      if (u)
        throw u.error;
    }
  }
  return s;
}
function Of() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(qc(arguments[t]));
  return e;
}
function If() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++)
    e += arguments[t].length;
  for (var i = Array(e), n = 0, t = 0; t < r; t++)
    for (var s = arguments[t], u = 0, a = s.length; u < a; u++, n++)
      i[n] = s[u];
  return i;
}
function Ci(e) {
  return this instanceof Ci ? (this.v = e, this) : new Ci(e);
}
function xf(e, t, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = r.apply(e, t || []), n, s = [];
  return n = {}, u("next"), u("throw"), u("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n;
  function u(y) {
    i[y] && (n[y] = function(m) {
      return new Promise(function(D, I) {
        s.push([y, m, D, I]) > 1 || a(y, m);
      });
    });
  }
  function a(y, m) {
    try {
      l(i[y](m));
    } catch (D) {
      p(s[0][3], D);
    }
  }
  function l(y) {
    y.value instanceof Ci ? Promise.resolve(y.value.v).then(f, h) : p(s[0][2], y);
  }
  function f(y) {
    a("next", y);
  }
  function h(y) {
    a("throw", y);
  }
  function p(y, m) {
    y(m), s.shift(), s.length && a(s[0][0], s[0][1]);
  }
}
function Cf(e) {
  var t, r;
  return t = {}, i("next"), i("throw", function(n) {
    throw n;
  }), i("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function i(n, s) {
    t[n] = e[n] ? function(u) {
      return (r = !r) ? { value: Ci(e[n](u)), done: n === "return" } : s ? s(u) : u;
    } : s;
  }
}
function Rf(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], r;
  return t ? t.call(e) : (e = typeof fs == "function" ? fs(e) : e[Symbol.iterator](), r = {}, i("next"), i("throw"), i("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function i(s) {
    r[s] = e[s] && function(u) {
      return new Promise(function(a, l) {
        u = e[s](u), n(a, l, u.done, u.value);
      });
    };
  }
  function n(s, u, a, l) {
    Promise.resolve(l).then(function(f) {
      s({ value: f, done: a });
    }, u);
  }
}
function Af(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
function Pf(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  return t.default = e, t;
}
function Tf(e) {
  return e && e.__esModule ? e : { default: e };
}
function Nf(e, t) {
  if (!t.has(e))
    throw new TypeError("attempted to get private field on non-instance");
  return t.get(e);
}
function Lf(e, t, r) {
  if (!t.has(e))
    throw new TypeError("attempted to set private field on non-instance");
  return t.set(e, r), r;
}
const Ff = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return ls;
  },
  __asyncDelegator: Cf,
  __asyncGenerator: xf,
  __asyncValues: Rf,
  __await: Ci,
  __awaiter: _f,
  __classPrivateFieldGet: Nf,
  __classPrivateFieldSet: Lf,
  __createBinding: Sf,
  __decorate: vf,
  __exportStar: Df,
  __extends: yf,
  __generator: Ef,
  __importDefault: Tf,
  __importStar: Pf,
  __makeTemplateObject: Af,
  __metadata: wf,
  __param: mf,
  __read: qc,
  __rest: bf,
  __spread: Of,
  __spreadArrays: If,
  __values: fs
}, Symbol.toStringTag, { value: "Module" })), Kt = /* @__PURE__ */ Fs(Ff);
var Ni = {};
Object.defineProperty(Ni, "__esModule", { value: !0 });
function $f(e) {
  if (typeof e != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof e}`);
  try {
    return JSON.parse(e);
  } catch {
    return e;
  }
}
Ni.safeJsonParse = $f;
function Uf(e) {
  return typeof e == "string" ? e : JSON.stringify(e, (t, r) => typeof r > "u" ? null : r);
}
Ni.safeJsonStringify = Uf;
var fi = { exports: {} }, jo;
function Mf() {
  return jo || (jo = 1, function() {
    let e;
    function t() {
    }
    e = t, e.prototype.getItem = function(r) {
      return this.hasOwnProperty(r) ? String(this[r]) : null;
    }, e.prototype.setItem = function(r, i) {
      this[r] = String(i);
    }, e.prototype.removeItem = function(r) {
      delete this[r];
    }, e.prototype.clear = function() {
      const r = this;
      Object.keys(r).forEach(function(i) {
        r[i] = void 0, delete r[i];
      });
    }, e.prototype.key = function(r) {
      return r = r || 0, Object.keys(this)[r];
    }, e.prototype.__defineGetter__("length", function() {
      return Object.keys(this).length;
    }), typeof Nt < "u" && Nt.localStorage ? fi.exports = Nt.localStorage : typeof window < "u" && window.localStorage ? fi.exports = window.localStorage : fi.exports = new t();
  }()), fi.exports;
}
var Tn = {}, hi = {}, qo;
function jf() {
  if (qo)
    return hi;
  qo = 1, Object.defineProperty(hi, "__esModule", { value: !0 }), hi.IKeyValueStorage = void 0;
  class e {
  }
  return hi.IKeyValueStorage = e, hi;
}
var di = {}, Bo;
function qf() {
  if (Bo)
    return di;
  Bo = 1, Object.defineProperty(di, "__esModule", { value: !0 }), di.parseEntry = void 0;
  const e = Ni;
  function t(r) {
    var i;
    return [r[0], e.safeJsonParse((i = r[1]) !== null && i !== void 0 ? i : "")];
  }
  return di.parseEntry = t, di;
}
var zo;
function Bf() {
  return zo || (zo = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = Kt;
    t.__exportStar(jf(), e), t.__exportStar(qf(), e);
  }(Tn)), Tn;
}
Object.defineProperty(vn, "__esModule", { value: !0 });
vn.KeyValueStorage = void 0;
const Wr = Kt, ko = Ni, zf = Wr.__importDefault(Mf()), kf = Bf();
class Bc {
  constructor() {
    this.localStorage = zf.default;
  }
  getKeys() {
    return Wr.__awaiter(this, void 0, void 0, function* () {
      return Object.keys(this.localStorage);
    });
  }
  getEntries() {
    return Wr.__awaiter(this, void 0, void 0, function* () {
      return Object.entries(this.localStorage).map(kf.parseEntry);
    });
  }
  getItem(t) {
    return Wr.__awaiter(this, void 0, void 0, function* () {
      const r = this.localStorage.getItem(t);
      if (r !== null)
        return ko.safeJsonParse(r);
    });
  }
  setItem(t, r) {
    return Wr.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.setItem(t, ko.safeJsonStringify(r));
    });
  }
  removeItem(t) {
    return Wr.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.removeItem(t);
    });
  }
}
vn.KeyValueStorage = Bc;
var Vf = vn.default = Bc, ti = {}, pi = {}, te = {}, Nn = {}, gi = {}, Vo;
function Kf() {
  if (Vo)
    return gi;
  Vo = 1, Object.defineProperty(gi, "__esModule", { value: !0 }), gi.delay = void 0;
  function e(t) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, t);
    });
  }
  return gi.delay = e, gi;
}
var Rr = {}, Ln = {}, Ar = {}, Ko;
function Wf() {
  return Ko || (Ko = 1, Object.defineProperty(Ar, "__esModule", { value: !0 }), Ar.ONE_THOUSAND = Ar.ONE_HUNDRED = void 0, Ar.ONE_HUNDRED = 100, Ar.ONE_THOUSAND = 1e3), Ar;
}
var Fn = {}, Wo;
function Hf() {
  return Wo || (Wo = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ONE_YEAR = e.FOUR_WEEKS = e.THREE_WEEKS = e.TWO_WEEKS = e.ONE_WEEK = e.THIRTY_DAYS = e.SEVEN_DAYS = e.FIVE_DAYS = e.THREE_DAYS = e.ONE_DAY = e.TWENTY_FOUR_HOURS = e.TWELVE_HOURS = e.SIX_HOURS = e.THREE_HOURS = e.ONE_HOUR = e.SIXTY_MINUTES = e.THIRTY_MINUTES = e.TEN_MINUTES = e.FIVE_MINUTES = e.ONE_MINUTE = e.SIXTY_SECONDS = e.THIRTY_SECONDS = e.TEN_SECONDS = e.FIVE_SECONDS = e.ONE_SECOND = void 0, e.ONE_SECOND = 1, e.FIVE_SECONDS = 5, e.TEN_SECONDS = 10, e.THIRTY_SECONDS = 30, e.SIXTY_SECONDS = 60, e.ONE_MINUTE = e.SIXTY_SECONDS, e.FIVE_MINUTES = e.ONE_MINUTE * 5, e.TEN_MINUTES = e.ONE_MINUTE * 10, e.THIRTY_MINUTES = e.ONE_MINUTE * 30, e.SIXTY_MINUTES = e.ONE_MINUTE * 60, e.ONE_HOUR = e.SIXTY_MINUTES, e.THREE_HOURS = e.ONE_HOUR * 3, e.SIX_HOURS = e.ONE_HOUR * 6, e.TWELVE_HOURS = e.ONE_HOUR * 12, e.TWENTY_FOUR_HOURS = e.ONE_HOUR * 24, e.ONE_DAY = e.TWENTY_FOUR_HOURS, e.THREE_DAYS = e.ONE_DAY * 3, e.FIVE_DAYS = e.ONE_DAY * 5, e.SEVEN_DAYS = e.ONE_DAY * 7, e.THIRTY_DAYS = e.ONE_DAY * 30, e.ONE_WEEK = e.SEVEN_DAYS, e.TWO_WEEKS = e.ONE_WEEK * 2, e.THREE_WEEKS = e.ONE_WEEK * 3, e.FOUR_WEEKS = e.ONE_WEEK * 4, e.ONE_YEAR = e.ONE_DAY * 365;
  }(Fn)), Fn;
}
var Ho;
function zc() {
  return Ho || (Ho = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = Kt;
    t.__exportStar(Wf(), e), t.__exportStar(Hf(), e);
  }(Ln)), Ln;
}
var Go;
function Gf() {
  if (Go)
    return Rr;
  Go = 1, Object.defineProperty(Rr, "__esModule", { value: !0 }), Rr.fromMiliseconds = Rr.toMiliseconds = void 0;
  const e = zc();
  function t(i) {
    return i * e.ONE_THOUSAND;
  }
  Rr.toMiliseconds = t;
  function r(i) {
    return Math.floor(i / e.ONE_THOUSAND);
  }
  return Rr.fromMiliseconds = r, Rr;
}
var Yo;
function Yf() {
  return Yo || (Yo = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = Kt;
    t.__exportStar(Kf(), e), t.__exportStar(Gf(), e);
  }(Nn)), Nn;
}
var Kr = {}, Jo;
function Jf() {
  if (Jo)
    return Kr;
  Jo = 1, Object.defineProperty(Kr, "__esModule", { value: !0 }), Kr.Watch = void 0;
  class e {
    constructor() {
      this.timestamps = /* @__PURE__ */ new Map();
    }
    start(r) {
      if (this.timestamps.has(r))
        throw new Error(`Watch already started for label: ${r}`);
      this.timestamps.set(r, { started: Date.now() });
    }
    stop(r) {
      const i = this.get(r);
      if (typeof i.elapsed < "u")
        throw new Error(`Watch already stopped for label: ${r}`);
      const n = Date.now() - i.started;
      this.timestamps.set(r, { started: i.started, elapsed: n });
    }
    get(r) {
      const i = this.timestamps.get(r);
      if (typeof i > "u")
        throw new Error(`No timestamp found for label: ${r}`);
      return i;
    }
    elapsed(r) {
      const i = this.get(r);
      return i.elapsed || Date.now() - i.started;
    }
  }
  return Kr.Watch = e, Kr.default = e, Kr;
}
var $n = {}, yi = {}, Xo;
function Xf() {
  if (Xo)
    return yi;
  Xo = 1, Object.defineProperty(yi, "__esModule", { value: !0 }), yi.IWatch = void 0;
  class e {
  }
  return yi.IWatch = e, yi;
}
var Qo;
function Qf() {
  return Qo || (Qo = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), Kt.__exportStar(Xf(), e);
  }($n)), $n;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = Kt;
  t.__exportStar(Yf(), e), t.__exportStar(Jf(), e), t.__exportStar(Qf(), e), t.__exportStar(zc(), e);
})(te);
var Un = {}, bi = {};
let jr = class {
};
const Zf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: jr
}, Symbol.toStringTag, { value: "Module" })), eh = /* @__PURE__ */ Fs(Zf);
var Zo;
function th() {
  if (Zo)
    return bi;
  Zo = 1, Object.defineProperty(bi, "__esModule", { value: !0 }), bi.IHeartBeat = void 0;
  const e = eh;
  class t extends e.IEvents {
    constructor(i) {
      super();
    }
  }
  return bi.IHeartBeat = t, bi;
}
var ea;
function kc() {
  return ea || (ea = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), Kt.__exportStar(th(), e);
  }(Un)), Un;
}
var Mn = {}, Pr = {}, ta;
function rh() {
  if (ta)
    return Pr;
  ta = 1, Object.defineProperty(Pr, "__esModule", { value: !0 }), Pr.HEARTBEAT_EVENTS = Pr.HEARTBEAT_INTERVAL = void 0;
  const e = te;
  return Pr.HEARTBEAT_INTERVAL = e.FIVE_SECONDS, Pr.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, Pr;
}
var ra;
function Vc() {
  return ra || (ra = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), Kt.__exportStar(rh(), e);
  }(Mn)), Mn;
}
var ia;
function ih() {
  if (ia)
    return pi;
  ia = 1, Object.defineProperty(pi, "__esModule", { value: !0 }), pi.HeartBeat = void 0;
  const e = Kt, t = Xt, r = te, i = kc(), n = Vc();
  class s extends i.IHeartBeat {
    constructor(a) {
      super(a), this.events = new t.EventEmitter(), this.interval = n.HEARTBEAT_INTERVAL, this.interval = (a == null ? void 0 : a.interval) || n.HEARTBEAT_INTERVAL;
    }
    static init(a) {
      return e.__awaiter(this, void 0, void 0, function* () {
        const l = new s(a);
        return yield l.init(), l;
      });
    }
    init() {
      return e.__awaiter(this, void 0, void 0, function* () {
        yield this.initialize();
      });
    }
    stop() {
      clearInterval(this.intervalRef);
    }
    on(a, l) {
      this.events.on(a, l);
    }
    once(a, l) {
      this.events.once(a, l);
    }
    off(a, l) {
      this.events.off(a, l);
    }
    removeListener(a, l) {
      this.events.removeListener(a, l);
    }
    initialize() {
      return e.__awaiter(this, void 0, void 0, function* () {
        this.intervalRef = setInterval(() => this.pulse(), r.toMiliseconds(this.interval));
      });
    }
    pulse() {
      this.events.emit(n.HEARTBEAT_EVENTS.pulse);
    }
  }
  return pi.HeartBeat = s, pi;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = Kt;
  t.__exportStar(ih(), e), t.__exportStar(kc(), e), t.__exportStar(Vc(), e);
})(ti);
var Ae = {}, jn, na;
function nh() {
  if (na)
    return jn;
  na = 1;
  function e(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  jn = t;
  function t(r, i, n) {
    var s = n && n.stringify || e, u = 1;
    if (typeof r == "object" && r !== null) {
      var a = i.length + u;
      if (a === 1)
        return r;
      var l = new Array(a);
      l[0] = s(r);
      for (var f = 1; f < a; f++)
        l[f] = s(i[f]);
      return l.join(" ");
    }
    if (typeof r != "string")
      return r;
    var h = i.length;
    if (h === 0)
      return r;
    for (var p = "", y = 1 - u, m = -1, D = r && r.length || 0, I = 0; I < D; ) {
      if (r.charCodeAt(I) === 37 && I + 1 < D) {
        switch (m = m > -1 ? m : 0, r.charCodeAt(I + 1)) {
          case 100:
          case 102:
            if (y >= h || i[y] == null)
              break;
            m < I && (p += r.slice(m, I)), p += Number(i[y]), m = I + 2, I++;
            break;
          case 105:
            if (y >= h || i[y] == null)
              break;
            m < I && (p += r.slice(m, I)), p += Math.floor(Number(i[y])), m = I + 2, I++;
            break;
          case 79:
          case 111:
          case 106:
            if (y >= h || i[y] === void 0)
              break;
            m < I && (p += r.slice(m, I));
            var P = typeof i[y];
            if (P === "string") {
              p += "'" + i[y] + "'", m = I + 2, I++;
              break;
            }
            if (P === "function") {
              p += i[y].name || "<anonymous>", m = I + 2, I++;
              break;
            }
            p += s(i[y]), m = I + 2, I++;
            break;
          case 115:
            if (y >= h)
              break;
            m < I && (p += r.slice(m, I)), p += String(i[y]), m = I + 2, I++;
            break;
          case 37:
            m < I && (p += r.slice(m, I)), p += "%", m = I + 2, I++, y--;
            break;
        }
        ++y;
      }
      ++I;
    }
    return m === -1 ? r : (m < D && (p += r.slice(m)), p);
  }
  return jn;
}
var qn, sa;
function sh() {
  if (sa)
    return qn;
  sa = 1;
  const e = nh();
  qn = n;
  const t = _().console || {}, r = {
    mapHttpRequest: D,
    mapHttpResponse: D,
    wrapRequestSerializer: I,
    wrapResponseSerializer: I,
    wrapErrorSerializer: I,
    req: D,
    res: D,
    err: y
  };
  function i(d, o) {
    return Array.isArray(d) ? d.filter(function(A) {
      return A !== "!stdSerializers.err";
    }) : d === !0 ? Object.keys(o) : !1;
  }
  function n(d) {
    d = d || {}, d.browser = d.browser || {};
    const o = d.browser.transmit;
    if (o && typeof o.send != "function")
      throw Error("pino: transmit option must have a send function");
    const g = d.browser.write || t;
    d.browser.write && (d.browser.asObject = !0);
    const A = d.serializers || {}, L = i(d.browser.serialize, A);
    let $ = d.browser.serialize;
    Array.isArray(d.browser.serialize) && d.browser.serialize.indexOf("!stdSerializers.err") > -1 && ($ = !1);
    const V = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof g == "function" && (g.error = g.fatal = g.warn = g.info = g.debug = g.trace = g), d.enabled === !1 && (d.level = "silent");
    const Y = d.level || "info", x = Object.create(g);
    x.log || (x.log = P), Object.defineProperty(x, "levelVal", {
      get: H
    }), Object.defineProperty(x, "level", {
      get: k,
      set: q
    });
    const T = {
      transmit: o,
      serialize: L,
      asObject: d.browser.asObject,
      levels: V,
      timestamp: m(d)
    };
    x.levels = n.levels, x.level = Y, x.setMaxListeners = x.getMaxListeners = x.emit = x.addListener = x.on = x.prependListener = x.once = x.prependOnceListener = x.removeListener = x.removeAllListeners = x.listeners = x.listenerCount = x.eventNames = x.write = x.flush = P, x.serializers = A, x._serialize = L, x._stdErrSerialize = $, x.child = z, o && (x._logEvent = p());
    function H() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function k() {
      return this._level;
    }
    function q(j) {
      if (j !== "silent" && !this.levels.values[j])
        throw Error("unknown level " + j);
      this._level = j, s(T, x, "error", "log"), s(T, x, "fatal", "error"), s(T, x, "warn", "error"), s(T, x, "info", "log"), s(T, x, "debug", "log"), s(T, x, "trace", "log");
    }
    function z(j, K) {
      if (!j)
        throw new Error("missing bindings for child Pino");
      K = K || {}, L && j.serializers && (K.serializers = j.serializers);
      const oe = K.serializers;
      if (L && oe) {
        var W = Object.assign({}, A, oe), ie = d.browser.serialize === !0 ? Object.keys(W) : L;
        delete j.serializers, l([j], ie, W, this._stdErrSerialize);
      }
      function Z(re) {
        this._childLevel = (re._childLevel | 0) + 1, this.error = f(re, j, "error"), this.fatal = f(re, j, "fatal"), this.warn = f(re, j, "warn"), this.info = f(re, j, "info"), this.debug = f(re, j, "debug"), this.trace = f(re, j, "trace"), W && (this.serializers = W, this._serialize = ie), o && (this._logEvent = p(
          [].concat(re._logEvent.bindings, j)
        ));
      }
      return Z.prototype = this, new Z(this);
    }
    return x;
  }
  n.levels = {
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
  }, n.stdSerializers = r, n.stdTimeFunctions = Object.assign({}, { nullTime: U, epochTime: E, unixTime: O, isoTime: b });
  function s(d, o, g, A) {
    const L = Object.getPrototypeOf(o);
    o[g] = o.levelVal > o.levels.values[g] ? P : L[g] ? L[g] : t[g] || t[A] || P, u(d, o, g);
  }
  function u(d, o, g) {
    !d.transmit && o[g] === P || (o[g] = function(A) {
      return function() {
        const $ = d.timestamp(), V = new Array(arguments.length), Y = Object.getPrototypeOf && Object.getPrototypeOf(this) === t ? t : this;
        for (var x = 0; x < V.length; x++)
          V[x] = arguments[x];
        if (d.serialize && !d.asObject && l(V, this._serialize, this.serializers, this._stdErrSerialize), d.asObject ? A.call(Y, a(this, g, V, $)) : A.apply(Y, V), d.transmit) {
          const T = d.transmit.level || o.level, H = n.levels.values[T], k = n.levels.values[g];
          if (k < H)
            return;
          h(this, {
            ts: $,
            methodLevel: g,
            methodValue: k,
            transmitLevel: T,
            transmitValue: n.levels.values[d.transmit.level || o.level],
            send: d.transmit.send,
            val: o.levelVal
          }, V);
        }
      };
    }(o[g]));
  }
  function a(d, o, g, A) {
    d._serialize && l(g, d._serialize, d.serializers, d._stdErrSerialize);
    const L = g.slice();
    let $ = L[0];
    const V = {};
    A && (V.time = A), V.level = n.levels.values[o];
    let Y = (d._childLevel | 0) + 1;
    if (Y < 1 && (Y = 1), $ !== null && typeof $ == "object") {
      for (; Y-- && typeof L[0] == "object"; )
        Object.assign(V, L.shift());
      $ = L.length ? e(L.shift(), L) : void 0;
    } else
      typeof $ == "string" && ($ = e(L.shift(), L));
    return $ !== void 0 && (V.msg = $), V;
  }
  function l(d, o, g, A) {
    for (const L in d)
      if (A && d[L] instanceof Error)
        d[L] = n.stdSerializers.err(d[L]);
      else if (typeof d[L] == "object" && !Array.isArray(d[L]))
        for (const $ in d[L])
          o && o.indexOf($) > -1 && $ in g && (d[L][$] = g[$](d[L][$]));
  }
  function f(d, o, g) {
    return function() {
      const A = new Array(1 + arguments.length);
      A[0] = o;
      for (var L = 1; L < A.length; L++)
        A[L] = arguments[L - 1];
      return d[g].apply(this, A);
    };
  }
  function h(d, o, g) {
    const A = o.send, L = o.ts, $ = o.methodLevel, V = o.methodValue, Y = o.val, x = d._logEvent.bindings;
    l(
      g,
      d._serialize || Object.keys(d.serializers),
      d.serializers,
      d._stdErrSerialize === void 0 ? !0 : d._stdErrSerialize
    ), d._logEvent.ts = L, d._logEvent.messages = g.filter(function(T) {
      return x.indexOf(T) === -1;
    }), d._logEvent.level.label = $, d._logEvent.level.value = V, A($, d._logEvent, Y), d._logEvent = p(x);
  }
  function p(d) {
    return {
      ts: 0,
      messages: [],
      bindings: d || [],
      level: { label: "", value: 0 }
    };
  }
  function y(d) {
    const o = {
      type: d.constructor.name,
      msg: d.message,
      stack: d.stack
    };
    for (const g in d)
      o[g] === void 0 && (o[g] = d[g]);
    return o;
  }
  function m(d) {
    return typeof d.timestamp == "function" ? d.timestamp : d.timestamp === !1 ? U : E;
  }
  function D() {
    return {};
  }
  function I(d) {
    return d;
  }
  function P() {
  }
  function U() {
    return !1;
  }
  function E() {
    return Date.now();
  }
  function O() {
    return Math.round(Date.now() / 1e3);
  }
  function b() {
    return new Date(Date.now()).toISOString();
  }
  function _() {
    function d(o) {
      return typeof o < "u" && o;
    }
    try {
      return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
        get: function() {
          return delete Object.prototype.globalThis, this.globalThis = this;
        },
        configurable: !0
      }), globalThis;
    } catch {
      return d(self) || d(window) || d(this) || {};
    }
  }
  return qn;
}
var Tr = {}, oa;
function Kc() {
  return oa || (oa = 1, Object.defineProperty(Tr, "__esModule", { value: !0 }), Tr.PINO_CUSTOM_CONTEXT_KEY = Tr.PINO_LOGGER_DEFAULTS = void 0, Tr.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, Tr.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), Tr;
}
var St = {}, aa;
function oh() {
  if (aa)
    return St;
  aa = 1, Object.defineProperty(St, "__esModule", { value: !0 }), St.generateChildLogger = St.formatChildLoggerContext = St.getLoggerContext = St.setBrowserLoggerContext = St.getBrowserLoggerContext = St.getDefaultLoggerOptions = void 0;
  const e = Kc();
  function t(a) {
    return Object.assign(Object.assign({}, a), { level: (a == null ? void 0 : a.level) || e.PINO_LOGGER_DEFAULTS.level });
  }
  St.getDefaultLoggerOptions = t;
  function r(a, l = e.PINO_CUSTOM_CONTEXT_KEY) {
    return a[l] || "";
  }
  St.getBrowserLoggerContext = r;
  function i(a, l, f = e.PINO_CUSTOM_CONTEXT_KEY) {
    return a[f] = l, a;
  }
  St.setBrowserLoggerContext = i;
  function n(a, l = e.PINO_CUSTOM_CONTEXT_KEY) {
    let f = "";
    return typeof a.bindings > "u" ? f = r(a, l) : f = a.bindings().context || "", f;
  }
  St.getLoggerContext = n;
  function s(a, l, f = e.PINO_CUSTOM_CONTEXT_KEY) {
    const h = n(a, f);
    return h.trim() ? `${h}/${l}` : l;
  }
  St.formatChildLoggerContext = s;
  function u(a, l, f = e.PINO_CUSTOM_CONTEXT_KEY) {
    const h = s(a, l, f), p = a.child({ context: h });
    return i(p, h, f);
  }
  return St.generateChildLogger = u, St;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.pino = void 0;
  const t = Kt, r = t.__importDefault(sh());
  Object.defineProperty(e, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), t.__exportStar(Kc(), e), t.__exportStar(oh(), e);
})(Ae);
let ah = class extends jr {
  constructor(t) {
    super(), this.opts = t, this.protocol = "wc", this.version = 2;
  }
}, ch = class extends jr {
  constructor(t, r) {
    super(), this.core = t, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}, uh = class {
  constructor(t, r) {
    this.logger = t, this.core = r;
  }
}, lh = class extends jr {
  constructor(t, r) {
    super(), this.relayer = t, this.logger = r;
  }
}, fh = class extends jr {
  constructor(t) {
    super();
  }
}, hh = class {
  constructor(t, r, i, n) {
    this.core = t, this.logger = r, this.name = i;
  }
}, dh = class extends jr {
  constructor(t, r) {
    super(), this.relayer = t, this.logger = r;
  }
}, ph = class extends jr {
  constructor(t, r) {
    super(), this.core = t, this.logger = r;
  }
}, gh = class {
  constructor(t, r) {
    this.projectId = t, this.logger = r;
  }
}, yh = class {
  constructor(t) {
    this.opts = t, this.protocol = "wc", this.version = 2;
  }
}, bh = class {
  constructor(t) {
    this.client = t;
  }
};
const vh = (e) => JSON.stringify(e, (t, r) => typeof r == "bigint" ? r.toString() + "n" : r), mh = (e) => {
  const t = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = e.replace(t, '$1"$2n"$3');
  return JSON.parse(r, (i, n) => typeof n == "string" && n.match(/^\d+n$/) ? BigInt(n.substring(0, n.length - 1)) : n);
};
function Wc(e) {
  if (typeof e != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof e}`);
  try {
    return mh(e);
  } catch {
    return e;
  }
}
function Us(e) {
  return typeof e == "string" ? e : vh(e) || "";
}
var Ms = {}, ri = {}, mn = {}, wn = {};
Object.defineProperty(wn, "__esModule", { value: !0 });
wn.BrowserRandomSource = void 0;
const ca = 65536;
class wh {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const t = typeof self < "u" ? self.crypto || self.msCrypto : null;
    t && t.getRandomValues !== void 0 && (this._crypto = t, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(t) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const r = new Uint8Array(t);
    for (let i = 0; i < r.length; i += ca)
      this._crypto.getRandomValues(r.subarray(i, i + Math.min(r.length - i, ca)));
    return r;
  }
}
wn.BrowserRandomSource = wh;
function _h(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var _n = {}, Ut = {};
Object.defineProperty(Ut, "__esModule", { value: !0 });
function Eh(e) {
  for (var t = 0; t < e.length; t++)
    e[t] = 0;
  return e;
}
Ut.wipe = Eh;
const Sh = {}, Dh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sh
}, Symbol.toStringTag, { value: "Module" })), Oh = /* @__PURE__ */ Fs(Dh);
Object.defineProperty(_n, "__esModule", { value: !0 });
_n.NodeRandomSource = void 0;
const Ih = Ut;
class xh {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof _h < "u") {
      const t = Oh;
      t && t.randomBytes && (this._crypto = t, this.isAvailable = !0, this.isInstantiated = !0);
    }
  }
  randomBytes(t) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Node.js random byte generator is not available.");
    let r = this._crypto.randomBytes(t);
    if (r.length !== t)
      throw new Error("NodeRandomSource: got fewer bytes than requested");
    const i = new Uint8Array(t);
    for (let n = 0; n < i.length; n++)
      i[n] = r[n];
    return (0, Ih.wipe)(r), i;
  }
}
_n.NodeRandomSource = xh;
Object.defineProperty(mn, "__esModule", { value: !0 });
mn.SystemRandomSource = void 0;
const Ch = wn, Rh = _n;
class Ah {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new Ch.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new Rh.NodeRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Node";
      return;
    }
  }
  randomBytes(t) {
    if (!this.isAvailable)
      throw new Error("System random byte generator is not available.");
    return this._source.randomBytes(t);
  }
}
mn.SystemRandomSource = Ah;
var le = {}, Hc = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  function t(a, l) {
    var f = a >>> 16 & 65535, h = a & 65535, p = l >>> 16 & 65535, y = l & 65535;
    return h * y + (f * y + h * p << 16 >>> 0) | 0;
  }
  e.mul = Math.imul || t;
  function r(a, l) {
    return a + l | 0;
  }
  e.add = r;
  function i(a, l) {
    return a - l | 0;
  }
  e.sub = i;
  function n(a, l) {
    return a << l | a >>> 32 - l;
  }
  e.rotl = n;
  function s(a, l) {
    return a << 32 - l | a >>> l;
  }
  e.rotr = s;
  function u(a) {
    return typeof a == "number" && isFinite(a) && Math.floor(a) === a;
  }
  e.isInteger = Number.isInteger || u, e.MAX_SAFE_INTEGER = 9007199254740991, e.isSafeInteger = function(a) {
    return e.isInteger(a) && a >= -e.MAX_SAFE_INTEGER && a <= e.MAX_SAFE_INTEGER;
  };
})(Hc);
Object.defineProperty(le, "__esModule", { value: !0 });
var Gc = Hc;
function Ph(e, t) {
  return t === void 0 && (t = 0), (e[t + 0] << 8 | e[t + 1]) << 16 >> 16;
}
le.readInt16BE = Ph;
function Th(e, t) {
  return t === void 0 && (t = 0), (e[t + 0] << 8 | e[t + 1]) >>> 0;
}
le.readUint16BE = Th;
function Nh(e, t) {
  return t === void 0 && (t = 0), (e[t + 1] << 8 | e[t]) << 16 >> 16;
}
le.readInt16LE = Nh;
function Lh(e, t) {
  return t === void 0 && (t = 0), (e[t + 1] << 8 | e[t]) >>> 0;
}
le.readUint16LE = Lh;
function Yc(e, t, r) {
  return t === void 0 && (t = new Uint8Array(2)), r === void 0 && (r = 0), t[r + 0] = e >>> 8, t[r + 1] = e >>> 0, t;
}
le.writeUint16BE = Yc;
le.writeInt16BE = Yc;
function Jc(e, t, r) {
  return t === void 0 && (t = new Uint8Array(2)), r === void 0 && (r = 0), t[r + 0] = e >>> 0, t[r + 1] = e >>> 8, t;
}
le.writeUint16LE = Jc;
le.writeInt16LE = Jc;
function hs(e, t) {
  return t === void 0 && (t = 0), e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
}
le.readInt32BE = hs;
function ds(e, t) {
  return t === void 0 && (t = 0), (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0;
}
le.readUint32BE = ds;
function ps(e, t) {
  return t === void 0 && (t = 0), e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t];
}
le.readInt32LE = ps;
function gs(e, t) {
  return t === void 0 && (t = 0), (e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]) >>> 0;
}
le.readUint32LE = gs;
function sn(e, t, r) {
  return t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0), t[r + 0] = e >>> 24, t[r + 1] = e >>> 16, t[r + 2] = e >>> 8, t[r + 3] = e >>> 0, t;
}
le.writeUint32BE = sn;
le.writeInt32BE = sn;
function on(e, t, r) {
  return t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0), t[r + 0] = e >>> 0, t[r + 1] = e >>> 8, t[r + 2] = e >>> 16, t[r + 3] = e >>> 24, t;
}
le.writeUint32LE = on;
le.writeInt32LE = on;
function Fh(e, t) {
  t === void 0 && (t = 0);
  var r = hs(e, t), i = hs(e, t + 4);
  return r * 4294967296 + i - (i >> 31) * 4294967296;
}
le.readInt64BE = Fh;
function $h(e, t) {
  t === void 0 && (t = 0);
  var r = ds(e, t), i = ds(e, t + 4);
  return r * 4294967296 + i;
}
le.readUint64BE = $h;
function Uh(e, t) {
  t === void 0 && (t = 0);
  var r = ps(e, t), i = ps(e, t + 4);
  return i * 4294967296 + r - (r >> 31) * 4294967296;
}
le.readInt64LE = Uh;
function Mh(e, t) {
  t === void 0 && (t = 0);
  var r = gs(e, t), i = gs(e, t + 4);
  return i * 4294967296 + r;
}
le.readUint64LE = Mh;
function Xc(e, t, r) {
  return t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0), sn(e / 4294967296 >>> 0, t, r), sn(e >>> 0, t, r + 4), t;
}
le.writeUint64BE = Xc;
le.writeInt64BE = Xc;
function Qc(e, t, r) {
  return t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0), on(e >>> 0, t, r), on(e / 4294967296 >>> 0, t, r + 4), t;
}
le.writeUint64LE = Qc;
le.writeInt64LE = Qc;
function jh(e, t, r) {
  if (r === void 0 && (r = 0), e % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (e / 8 > t.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var i = 0, n = 1, s = e / 8 + r - 1; s >= r; s--)
    i += t[s] * n, n *= 256;
  return i;
}
le.readUintBE = jh;
function qh(e, t, r) {
  if (r === void 0 && (r = 0), e % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (e / 8 > t.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var i = 0, n = 1, s = r; s < r + e / 8; s++)
    i += t[s] * n, n *= 256;
  return i;
}
le.readUintLE = qh;
function Bh(e, t, r, i) {
  if (r === void 0 && (r = new Uint8Array(e / 8)), i === void 0 && (i = 0), e % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!Gc.isSafeInteger(t))
    throw new Error("writeUintBE value must be an integer");
  for (var n = 1, s = e / 8 + i - 1; s >= i; s--)
    r[s] = t / n & 255, n *= 256;
  return r;
}
le.writeUintBE = Bh;
function zh(e, t, r, i) {
  if (r === void 0 && (r = new Uint8Array(e / 8)), i === void 0 && (i = 0), e % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!Gc.isSafeInteger(t))
    throw new Error("writeUintLE value must be an integer");
  for (var n = 1, s = i; s < i + e / 8; s++)
    r[s] = t / n & 255, n *= 256;
  return r;
}
le.writeUintLE = zh;
function kh(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat32(t);
}
le.readFloat32BE = kh;
function Vh(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat32(t, !0);
}
le.readFloat32LE = Vh;
function Kh(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat64(t);
}
le.readFloat64BE = Kh;
function Wh(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat64(t, !0);
}
le.readFloat64LE = Wh;
function Hh(e, t, r) {
  t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0);
  var i = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return i.setFloat32(r, e), t;
}
le.writeFloat32BE = Hh;
function Gh(e, t, r) {
  t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0);
  var i = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return i.setFloat32(r, e, !0), t;
}
le.writeFloat32LE = Gh;
function Yh(e, t, r) {
  t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0);
  var i = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return i.setFloat64(r, e), t;
}
le.writeFloat64BE = Yh;
function Jh(e, t, r) {
  t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0);
  var i = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return i.setFloat64(r, e, !0), t;
}
le.writeFloat64LE = Jh;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.randomStringForEntropy = e.randomString = e.randomUint32 = e.randomBytes = e.defaultRandomSource = void 0;
  const t = mn, r = le, i = Ut;
  e.defaultRandomSource = new t.SystemRandomSource();
  function n(f, h = e.defaultRandomSource) {
    return h.randomBytes(f);
  }
  e.randomBytes = n;
  function s(f = e.defaultRandomSource) {
    const h = n(4, f), p = (0, r.readUint32LE)(h);
    return (0, i.wipe)(h), p;
  }
  e.randomUint32 = s;
  const u = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function a(f, h = u, p = e.defaultRandomSource) {
    if (h.length < 2)
      throw new Error("randomString charset is too short");
    if (h.length > 256)
      throw new Error("randomString charset is too long");
    let y = "";
    const m = h.length, D = 256 - 256 % m;
    for (; f > 0; ) {
      const I = n(Math.ceil(f * 256 / D), p);
      for (let P = 0; P < I.length && f > 0; P++) {
        const U = I[P];
        U < D && (y += h.charAt(U % m), f--);
      }
      (0, i.wipe)(I);
    }
    return y;
  }
  e.randomString = a;
  function l(f, h = u, p = e.defaultRandomSource) {
    const y = Math.ceil(f / (Math.log(h.length) / Math.LN2));
    return a(y, h, p);
  }
  e.randomStringForEntropy = l;
})(ri);
var Zc = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = le, r = Ut;
  e.DIGEST_LENGTH = 64, e.BLOCK_SIZE = 128;
  var i = (
    /** @class */
    function() {
      function a() {
        this.digestLength = e.DIGEST_LENGTH, this.blockSize = e.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
      }
      return a.prototype._initState = function() {
        this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209;
      }, a.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
      }, a.prototype.clean = function() {
        r.wipe(this._buffer), r.wipe(this._tempHi), r.wipe(this._tempLo), this.reset();
      }, a.prototype.update = function(l, f) {
        if (f === void 0 && (f = l.length), this._finished)
          throw new Error("SHA512: can't update because hash was finished.");
        var h = 0;
        if (this._bytesHashed += f, this._bufferLength > 0) {
          for (; this._bufferLength < e.BLOCK_SIZE && f > 0; )
            this._buffer[this._bufferLength++] = l[h++], f--;
          this._bufferLength === this.blockSize && (s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (f >= this.blockSize && (h = s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, l, h, f), f %= this.blockSize); f > 0; )
          this._buffer[this._bufferLength++] = l[h++], f--;
        return this;
      }, a.prototype.finish = function(l) {
        if (!this._finished) {
          var f = this._bytesHashed, h = this._bufferLength, p = f / 536870912 | 0, y = f << 3, m = f % 128 < 112 ? 128 : 256;
          this._buffer[h] = 128;
          for (var D = h + 1; D < m - 8; D++)
            this._buffer[D] = 0;
          t.writeUint32BE(p, this._buffer, m - 8), t.writeUint32BE(y, this._buffer, m - 4), s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, m), this._finished = !0;
        }
        for (var D = 0; D < this.digestLength / 8; D++)
          t.writeUint32BE(this._stateHi[D], l, D * 8), t.writeUint32BE(this._stateLo[D], l, D * 8 + 4);
        return this;
      }, a.prototype.digest = function() {
        var l = new Uint8Array(this.digestLength);
        return this.finish(l), l;
      }, a.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, a.prototype.restoreState = function(l) {
        return this._stateHi.set(l.stateHi), this._stateLo.set(l.stateLo), this._bufferLength = l.bufferLength, l.buffer && this._buffer.set(l.buffer), this._bytesHashed = l.bytesHashed, this._finished = !1, this;
      }, a.prototype.cleanSavedState = function(l) {
        r.wipe(l.stateHi), r.wipe(l.stateLo), l.buffer && r.wipe(l.buffer), l.bufferLength = 0, l.bytesHashed = 0;
      }, a;
    }()
  );
  e.SHA512 = i;
  var n = new Int32Array([
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
  function s(a, l, f, h, p, y, m) {
    for (var D = f[0], I = f[1], P = f[2], U = f[3], E = f[4], O = f[5], b = f[6], _ = f[7], d = h[0], o = h[1], g = h[2], A = h[3], L = h[4], $ = h[5], V = h[6], Y = h[7], x, T, H, k, q, z, j, K; m >= 128; ) {
      for (var oe = 0; oe < 16; oe++) {
        var W = 8 * oe + y;
        a[oe] = t.readUint32BE(p, W), l[oe] = t.readUint32BE(p, W + 4);
      }
      for (var oe = 0; oe < 80; oe++) {
        var ie = D, Z = I, re = P, F = U, N = E, C = O, c = b, S = _, G = d, Q = o, be = g, ve = A, he = L, Ie = $, qe = V, Le = Y;
        if (x = _, T = Y, q = T & 65535, z = T >>> 16, j = x & 65535, K = x >>> 16, x = (E >>> 14 | L << 32 - 14) ^ (E >>> 18 | L << 32 - 18) ^ (L >>> 41 - 32 | E << 32 - (41 - 32)), T = (L >>> 14 | E << 32 - 14) ^ (L >>> 18 | E << 32 - 18) ^ (E >>> 41 - 32 | L << 32 - (41 - 32)), q += T & 65535, z += T >>> 16, j += x & 65535, K += x >>> 16, x = E & O ^ ~E & b, T = L & $ ^ ~L & V, q += T & 65535, z += T >>> 16, j += x & 65535, K += x >>> 16, x = n[oe * 2], T = n[oe * 2 + 1], q += T & 65535, z += T >>> 16, j += x & 65535, K += x >>> 16, x = a[oe % 16], T = l[oe % 16], q += T & 65535, z += T >>> 16, j += x & 65535, K += x >>> 16, z += q >>> 16, j += z >>> 16, K += j >>> 16, H = j & 65535 | K << 16, k = q & 65535 | z << 16, x = H, T = k, q = T & 65535, z = T >>> 16, j = x & 65535, K = x >>> 16, x = (D >>> 28 | d << 32 - 28) ^ (d >>> 34 - 32 | D << 32 - (34 - 32)) ^ (d >>> 39 - 32 | D << 32 - (39 - 32)), T = (d >>> 28 | D << 32 - 28) ^ (D >>> 34 - 32 | d << 32 - (34 - 32)) ^ (D >>> 39 - 32 | d << 32 - (39 - 32)), q += T & 65535, z += T >>> 16, j += x & 65535, K += x >>> 16, x = D & I ^ D & P ^ I & P, T = d & o ^ d & g ^ o & g, q += T & 65535, z += T >>> 16, j += x & 65535, K += x >>> 16, z += q >>> 16, j += z >>> 16, K += j >>> 16, S = j & 65535 | K << 16, Le = q & 65535 | z << 16, x = F, T = ve, q = T & 65535, z = T >>> 16, j = x & 65535, K = x >>> 16, x = H, T = k, q += T & 65535, z += T >>> 16, j += x & 65535, K += x >>> 16, z += q >>> 16, j += z >>> 16, K += j >>> 16, F = j & 65535 | K << 16, ve = q & 65535 | z << 16, I = ie, P = Z, U = re, E = F, O = N, b = C, _ = c, D = S, o = G, g = Q, A = be, L = ve, $ = he, V = Ie, Y = qe, d = Le, oe % 16 === 15)
          for (var W = 0; W < 16; W++)
            x = a[W], T = l[W], q = T & 65535, z = T >>> 16, j = x & 65535, K = x >>> 16, x = a[(W + 9) % 16], T = l[(W + 9) % 16], q += T & 65535, z += T >>> 16, j += x & 65535, K += x >>> 16, H = a[(W + 1) % 16], k = l[(W + 1) % 16], x = (H >>> 1 | k << 32 - 1) ^ (H >>> 8 | k << 32 - 8) ^ H >>> 7, T = (k >>> 1 | H << 32 - 1) ^ (k >>> 8 | H << 32 - 8) ^ (k >>> 7 | H << 32 - 7), q += T & 65535, z += T >>> 16, j += x & 65535, K += x >>> 16, H = a[(W + 14) % 16], k = l[(W + 14) % 16], x = (H >>> 19 | k << 32 - 19) ^ (k >>> 61 - 32 | H << 32 - (61 - 32)) ^ H >>> 6, T = (k >>> 19 | H << 32 - 19) ^ (H >>> 61 - 32 | k << 32 - (61 - 32)) ^ (k >>> 6 | H << 32 - 6), q += T & 65535, z += T >>> 16, j += x & 65535, K += x >>> 16, z += q >>> 16, j += z >>> 16, K += j >>> 16, a[W] = j & 65535 | K << 16, l[W] = q & 65535 | z << 16;
      }
      x = D, T = d, q = T & 65535, z = T >>> 16, j = x & 65535, K = x >>> 16, x = f[0], T = h[0], q += T & 65535, z += T >>> 16, j += x & 65535, K += x >>> 16, z += q >>> 16, j += z >>> 16, K += j >>> 16, f[0] = D = j & 65535 | K << 16, h[0] = d = q & 65535 | z << 16, x = I, T = o, q = T & 65535, z = T >>> 16, j = x & 65535, K = x >>> 16, x = f[1], T = h[1], q += T & 65535, z += T >>> 16, j += x & 65535, K += x >>> 16, z += q >>> 16, j += z >>> 16, K += j >>> 16, f[1] = I = j & 65535 | K << 16, h[1] = o = q & 65535 | z << 16, x = P, T = g, q = T & 65535, z = T >>> 16, j = x & 65535, K = x >>> 16, x = f[2], T = h[2], q += T & 65535, z += T >>> 16, j += x & 65535, K += x >>> 16, z += q >>> 16, j += z >>> 16, K += j >>> 16, f[2] = P = j & 65535 | K << 16, h[2] = g = q & 65535 | z << 16, x = U, T = A, q = T & 65535, z = T >>> 16, j = x & 65535, K = x >>> 16, x = f[3], T = h[3], q += T & 65535, z += T >>> 16, j += x & 65535, K += x >>> 16, z += q >>> 16, j += z >>> 16, K += j >>> 16, f[3] = U = j & 65535 | K << 16, h[3] = A = q & 65535 | z << 16, x = E, T = L, q = T & 65535, z = T >>> 16, j = x & 65535, K = x >>> 16, x = f[4], T = h[4], q += T & 65535, z += T >>> 16, j += x & 65535, K += x >>> 16, z += q >>> 16, j += z >>> 16, K += j >>> 16, f[4] = E = j & 65535 | K << 16, h[4] = L = q & 65535 | z << 16, x = O, T = $, q = T & 65535, z = T >>> 16, j = x & 65535, K = x >>> 16, x = f[5], T = h[5], q += T & 65535, z += T >>> 16, j += x & 65535, K += x >>> 16, z += q >>> 16, j += z >>> 16, K += j >>> 16, f[5] = O = j & 65535 | K << 16, h[5] = $ = q & 65535 | z << 16, x = b, T = V, q = T & 65535, z = T >>> 16, j = x & 65535, K = x >>> 16, x = f[6], T = h[6], q += T & 65535, z += T >>> 16, j += x & 65535, K += x >>> 16, z += q >>> 16, j += z >>> 16, K += j >>> 16, f[6] = b = j & 65535 | K << 16, h[6] = V = q & 65535 | z << 16, x = _, T = Y, q = T & 65535, z = T >>> 16, j = x & 65535, K = x >>> 16, x = f[7], T = h[7], q += T & 65535, z += T >>> 16, j += x & 65535, K += x >>> 16, z += q >>> 16, j += z >>> 16, K += j >>> 16, f[7] = _ = j & 65535 | K << 16, h[7] = Y = q & 65535 | z << 16, y += 128, m -= 128;
    }
    return y;
  }
  function u(a) {
    var l = new i();
    l.update(a);
    var f = l.digest();
    return l.clean(), f;
  }
  e.hash = u;
})(Zc);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.convertSecretKeyToX25519 = e.convertPublicKeyToX25519 = e.verify = e.sign = e.extractPublicKeyFromSecretKey = e.generateKeyPair = e.generateKeyPairFromSeed = e.SEED_LENGTH = e.SECRET_KEY_LENGTH = e.PUBLIC_KEY_LENGTH = e.SIGNATURE_LENGTH = void 0;
  const t = ri, r = Zc, i = Ut;
  e.SIGNATURE_LENGTH = 64, e.PUBLIC_KEY_LENGTH = 32, e.SECRET_KEY_LENGTH = 64, e.SEED_LENGTH = 32;
  function n(F) {
    const N = new Float64Array(16);
    if (F)
      for (let C = 0; C < F.length; C++)
        N[C] = F[C];
    return N;
  }
  const s = new Uint8Array(32);
  s[0] = 9;
  const u = n(), a = n([1]), l = n([
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
  ]), f = n([
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
  ]), h = n([
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
  ]), p = n([
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
  ]), y = n([
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
  function m(F, N) {
    for (let C = 0; C < 16; C++)
      F[C] = N[C] | 0;
  }
  function D(F) {
    let N = 1;
    for (let C = 0; C < 16; C++) {
      let c = F[C] + N + 65535;
      N = Math.floor(c / 65536), F[C] = c - N * 65536;
    }
    F[0] += N - 1 + 37 * (N - 1);
  }
  function I(F, N, C) {
    const c = ~(C - 1);
    for (let S = 0; S < 16; S++) {
      const G = c & (F[S] ^ N[S]);
      F[S] ^= G, N[S] ^= G;
    }
  }
  function P(F, N) {
    const C = n(), c = n();
    for (let S = 0; S < 16; S++)
      c[S] = N[S];
    D(c), D(c), D(c);
    for (let S = 0; S < 2; S++) {
      C[0] = c[0] - 65517;
      for (let Q = 1; Q < 15; Q++)
        C[Q] = c[Q] - 65535 - (C[Q - 1] >> 16 & 1), C[Q - 1] &= 65535;
      C[15] = c[15] - 32767 - (C[14] >> 16 & 1);
      const G = C[15] >> 16 & 1;
      C[14] &= 65535, I(c, C, 1 - G);
    }
    for (let S = 0; S < 16; S++)
      F[2 * S] = c[S] & 255, F[2 * S + 1] = c[S] >> 8;
  }
  function U(F, N) {
    let C = 0;
    for (let c = 0; c < 32; c++)
      C |= F[c] ^ N[c];
    return (1 & C - 1 >>> 8) - 1;
  }
  function E(F, N) {
    const C = new Uint8Array(32), c = new Uint8Array(32);
    return P(C, F), P(c, N), U(C, c);
  }
  function O(F) {
    const N = new Uint8Array(32);
    return P(N, F), N[0] & 1;
  }
  function b(F, N) {
    for (let C = 0; C < 16; C++)
      F[C] = N[2 * C] + (N[2 * C + 1] << 8);
    F[15] &= 32767;
  }
  function _(F, N, C) {
    for (let c = 0; c < 16; c++)
      F[c] = N[c] + C[c];
  }
  function d(F, N, C) {
    for (let c = 0; c < 16; c++)
      F[c] = N[c] - C[c];
  }
  function o(F, N, C) {
    let c, S, G = 0, Q = 0, be = 0, ve = 0, he = 0, Ie = 0, qe = 0, Le = 0, De = 0, _e = 0, de = 0, ge = 0, pe = 0, ue = 0, ce = 0, ne = 0, ye = 0, me = 0, ae = 0, Ee = 0, xe = 0, Pe = 0, Te = 0, Ce = 0, Pt = 0, Mt = 0, Qt = 0, lt = 0, Zt = 0, jt = 0, pr = 0, Be = C[0], Ue = C[1], We = C[2], ke = C[3], He = C[4], Me = C[5], Xe = C[6], et = C[7], tt = C[8], Qe = C[9], rt = C[10], Ze = C[11], Ge = C[12], Fe = C[13], w = C[14], M = C[15];
    c = N[0], G += c * Be, Q += c * Ue, be += c * We, ve += c * ke, he += c * He, Ie += c * Me, qe += c * Xe, Le += c * et, De += c * tt, _e += c * Qe, de += c * rt, ge += c * Ze, pe += c * Ge, ue += c * Fe, ce += c * w, ne += c * M, c = N[1], Q += c * Be, be += c * Ue, ve += c * We, he += c * ke, Ie += c * He, qe += c * Me, Le += c * Xe, De += c * et, _e += c * tt, de += c * Qe, ge += c * rt, pe += c * Ze, ue += c * Ge, ce += c * Fe, ne += c * w, ye += c * M, c = N[2], be += c * Be, ve += c * Ue, he += c * We, Ie += c * ke, qe += c * He, Le += c * Me, De += c * Xe, _e += c * et, de += c * tt, ge += c * Qe, pe += c * rt, ue += c * Ze, ce += c * Ge, ne += c * Fe, ye += c * w, me += c * M, c = N[3], ve += c * Be, he += c * Ue, Ie += c * We, qe += c * ke, Le += c * He, De += c * Me, _e += c * Xe, de += c * et, ge += c * tt, pe += c * Qe, ue += c * rt, ce += c * Ze, ne += c * Ge, ye += c * Fe, me += c * w, ae += c * M, c = N[4], he += c * Be, Ie += c * Ue, qe += c * We, Le += c * ke, De += c * He, _e += c * Me, de += c * Xe, ge += c * et, pe += c * tt, ue += c * Qe, ce += c * rt, ne += c * Ze, ye += c * Ge, me += c * Fe, ae += c * w, Ee += c * M, c = N[5], Ie += c * Be, qe += c * Ue, Le += c * We, De += c * ke, _e += c * He, de += c * Me, ge += c * Xe, pe += c * et, ue += c * tt, ce += c * Qe, ne += c * rt, ye += c * Ze, me += c * Ge, ae += c * Fe, Ee += c * w, xe += c * M, c = N[6], qe += c * Be, Le += c * Ue, De += c * We, _e += c * ke, de += c * He, ge += c * Me, pe += c * Xe, ue += c * et, ce += c * tt, ne += c * Qe, ye += c * rt, me += c * Ze, ae += c * Ge, Ee += c * Fe, xe += c * w, Pe += c * M, c = N[7], Le += c * Be, De += c * Ue, _e += c * We, de += c * ke, ge += c * He, pe += c * Me, ue += c * Xe, ce += c * et, ne += c * tt, ye += c * Qe, me += c * rt, ae += c * Ze, Ee += c * Ge, xe += c * Fe, Pe += c * w, Te += c * M, c = N[8], De += c * Be, _e += c * Ue, de += c * We, ge += c * ke, pe += c * He, ue += c * Me, ce += c * Xe, ne += c * et, ye += c * tt, me += c * Qe, ae += c * rt, Ee += c * Ze, xe += c * Ge, Pe += c * Fe, Te += c * w, Ce += c * M, c = N[9], _e += c * Be, de += c * Ue, ge += c * We, pe += c * ke, ue += c * He, ce += c * Me, ne += c * Xe, ye += c * et, me += c * tt, ae += c * Qe, Ee += c * rt, xe += c * Ze, Pe += c * Ge, Te += c * Fe, Ce += c * w, Pt += c * M, c = N[10], de += c * Be, ge += c * Ue, pe += c * We, ue += c * ke, ce += c * He, ne += c * Me, ye += c * Xe, me += c * et, ae += c * tt, Ee += c * Qe, xe += c * rt, Pe += c * Ze, Te += c * Ge, Ce += c * Fe, Pt += c * w, Mt += c * M, c = N[11], ge += c * Be, pe += c * Ue, ue += c * We, ce += c * ke, ne += c * He, ye += c * Me, me += c * Xe, ae += c * et, Ee += c * tt, xe += c * Qe, Pe += c * rt, Te += c * Ze, Ce += c * Ge, Pt += c * Fe, Mt += c * w, Qt += c * M, c = N[12], pe += c * Be, ue += c * Ue, ce += c * We, ne += c * ke, ye += c * He, me += c * Me, ae += c * Xe, Ee += c * et, xe += c * tt, Pe += c * Qe, Te += c * rt, Ce += c * Ze, Pt += c * Ge, Mt += c * Fe, Qt += c * w, lt += c * M, c = N[13], ue += c * Be, ce += c * Ue, ne += c * We, ye += c * ke, me += c * He, ae += c * Me, Ee += c * Xe, xe += c * et, Pe += c * tt, Te += c * Qe, Ce += c * rt, Pt += c * Ze, Mt += c * Ge, Qt += c * Fe, lt += c * w, Zt += c * M, c = N[14], ce += c * Be, ne += c * Ue, ye += c * We, me += c * ke, ae += c * He, Ee += c * Me, xe += c * Xe, Pe += c * et, Te += c * tt, Ce += c * Qe, Pt += c * rt, Mt += c * Ze, Qt += c * Ge, lt += c * Fe, Zt += c * w, jt += c * M, c = N[15], ne += c * Be, ye += c * Ue, me += c * We, ae += c * ke, Ee += c * He, xe += c * Me, Pe += c * Xe, Te += c * et, Ce += c * tt, Pt += c * Qe, Mt += c * rt, Qt += c * Ze, lt += c * Ge, Zt += c * Fe, jt += c * w, pr += c * M, G += 38 * ye, Q += 38 * me, be += 38 * ae, ve += 38 * Ee, he += 38 * xe, Ie += 38 * Pe, qe += 38 * Te, Le += 38 * Ce, De += 38 * Pt, _e += 38 * Mt, de += 38 * Qt, ge += 38 * lt, pe += 38 * Zt, ue += 38 * jt, ce += 38 * pr, S = 1, c = G + S + 65535, S = Math.floor(c / 65536), G = c - S * 65536, c = Q + S + 65535, S = Math.floor(c / 65536), Q = c - S * 65536, c = be + S + 65535, S = Math.floor(c / 65536), be = c - S * 65536, c = ve + S + 65535, S = Math.floor(c / 65536), ve = c - S * 65536, c = he + S + 65535, S = Math.floor(c / 65536), he = c - S * 65536, c = Ie + S + 65535, S = Math.floor(c / 65536), Ie = c - S * 65536, c = qe + S + 65535, S = Math.floor(c / 65536), qe = c - S * 65536, c = Le + S + 65535, S = Math.floor(c / 65536), Le = c - S * 65536, c = De + S + 65535, S = Math.floor(c / 65536), De = c - S * 65536, c = _e + S + 65535, S = Math.floor(c / 65536), _e = c - S * 65536, c = de + S + 65535, S = Math.floor(c / 65536), de = c - S * 65536, c = ge + S + 65535, S = Math.floor(c / 65536), ge = c - S * 65536, c = pe + S + 65535, S = Math.floor(c / 65536), pe = c - S * 65536, c = ue + S + 65535, S = Math.floor(c / 65536), ue = c - S * 65536, c = ce + S + 65535, S = Math.floor(c / 65536), ce = c - S * 65536, c = ne + S + 65535, S = Math.floor(c / 65536), ne = c - S * 65536, G += S - 1 + 37 * (S - 1), S = 1, c = G + S + 65535, S = Math.floor(c / 65536), G = c - S * 65536, c = Q + S + 65535, S = Math.floor(c / 65536), Q = c - S * 65536, c = be + S + 65535, S = Math.floor(c / 65536), be = c - S * 65536, c = ve + S + 65535, S = Math.floor(c / 65536), ve = c - S * 65536, c = he + S + 65535, S = Math.floor(c / 65536), he = c - S * 65536, c = Ie + S + 65535, S = Math.floor(c / 65536), Ie = c - S * 65536, c = qe + S + 65535, S = Math.floor(c / 65536), qe = c - S * 65536, c = Le + S + 65535, S = Math.floor(c / 65536), Le = c - S * 65536, c = De + S + 65535, S = Math.floor(c / 65536), De = c - S * 65536, c = _e + S + 65535, S = Math.floor(c / 65536), _e = c - S * 65536, c = de + S + 65535, S = Math.floor(c / 65536), de = c - S * 65536, c = ge + S + 65535, S = Math.floor(c / 65536), ge = c - S * 65536, c = pe + S + 65535, S = Math.floor(c / 65536), pe = c - S * 65536, c = ue + S + 65535, S = Math.floor(c / 65536), ue = c - S * 65536, c = ce + S + 65535, S = Math.floor(c / 65536), ce = c - S * 65536, c = ne + S + 65535, S = Math.floor(c / 65536), ne = c - S * 65536, G += S - 1 + 37 * (S - 1), F[0] = G, F[1] = Q, F[2] = be, F[3] = ve, F[4] = he, F[5] = Ie, F[6] = qe, F[7] = Le, F[8] = De, F[9] = _e, F[10] = de, F[11] = ge, F[12] = pe, F[13] = ue, F[14] = ce, F[15] = ne;
  }
  function g(F, N) {
    o(F, N, N);
  }
  function A(F, N) {
    const C = n();
    let c;
    for (c = 0; c < 16; c++)
      C[c] = N[c];
    for (c = 253; c >= 0; c--)
      g(C, C), c !== 2 && c !== 4 && o(C, C, N);
    for (c = 0; c < 16; c++)
      F[c] = C[c];
  }
  function L(F, N) {
    const C = n();
    let c;
    for (c = 0; c < 16; c++)
      C[c] = N[c];
    for (c = 250; c >= 0; c--)
      g(C, C), c !== 1 && o(C, C, N);
    for (c = 0; c < 16; c++)
      F[c] = C[c];
  }
  function $(F, N) {
    const C = n(), c = n(), S = n(), G = n(), Q = n(), be = n(), ve = n(), he = n(), Ie = n();
    d(C, F[1], F[0]), d(Ie, N[1], N[0]), o(C, C, Ie), _(c, F[0], F[1]), _(Ie, N[0], N[1]), o(c, c, Ie), o(S, F[3], N[3]), o(S, S, f), o(G, F[2], N[2]), _(G, G, G), d(Q, c, C), d(be, G, S), _(ve, G, S), _(he, c, C), o(F[0], Q, be), o(F[1], he, ve), o(F[2], ve, be), o(F[3], Q, he);
  }
  function V(F, N, C) {
    for (let c = 0; c < 4; c++)
      I(F[c], N[c], C);
  }
  function Y(F, N) {
    const C = n(), c = n(), S = n();
    A(S, N[2]), o(C, N[0], S), o(c, N[1], S), P(F, c), F[31] ^= O(C) << 7;
  }
  function x(F, N, C) {
    m(F[0], u), m(F[1], a), m(F[2], a), m(F[3], u);
    for (let c = 255; c >= 0; --c) {
      const S = C[c / 8 | 0] >> (c & 7) & 1;
      V(F, N, S), $(N, F), $(F, F), V(F, N, S);
    }
  }
  function T(F, N) {
    const C = [n(), n(), n(), n()];
    m(C[0], h), m(C[1], p), m(C[2], a), o(C[3], h, p), x(F, C, N);
  }
  function H(F) {
    if (F.length !== e.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${e.SEED_LENGTH} bytes`);
    const N = (0, r.hash)(F);
    N[0] &= 248, N[31] &= 127, N[31] |= 64;
    const C = new Uint8Array(32), c = [n(), n(), n(), n()];
    T(c, N), Y(C, c);
    const S = new Uint8Array(64);
    return S.set(F), S.set(C, 32), {
      publicKey: C,
      secretKey: S
    };
  }
  e.generateKeyPairFromSeed = H;
  function k(F) {
    const N = (0, t.randomBytes)(32, F), C = H(N);
    return (0, i.wipe)(N), C;
  }
  e.generateKeyPair = k;
  function q(F) {
    if (F.length !== e.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${e.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(F.subarray(32));
  }
  e.extractPublicKeyFromSecretKey = q;
  const z = new Float64Array([
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
  function j(F, N) {
    let C, c, S, G;
    for (c = 63; c >= 32; --c) {
      for (C = 0, S = c - 32, G = c - 12; S < G; ++S)
        N[S] += C - 16 * N[c] * z[S - (c - 32)], C = Math.floor((N[S] + 128) / 256), N[S] -= C * 256;
      N[S] += C, N[c] = 0;
    }
    for (C = 0, S = 0; S < 32; S++)
      N[S] += C - (N[31] >> 4) * z[S], C = N[S] >> 8, N[S] &= 255;
    for (S = 0; S < 32; S++)
      N[S] -= C * z[S];
    for (c = 0; c < 32; c++)
      N[c + 1] += N[c] >> 8, F[c] = N[c] & 255;
  }
  function K(F) {
    const N = new Float64Array(64);
    for (let C = 0; C < 64; C++)
      N[C] = F[C];
    for (let C = 0; C < 64; C++)
      F[C] = 0;
    j(F, N);
  }
  function oe(F, N) {
    const C = new Float64Array(64), c = [n(), n(), n(), n()], S = (0, r.hash)(F.subarray(0, 32));
    S[0] &= 248, S[31] &= 127, S[31] |= 64;
    const G = new Uint8Array(64);
    G.set(S.subarray(32), 32);
    const Q = new r.SHA512();
    Q.update(G.subarray(32)), Q.update(N);
    const be = Q.digest();
    Q.clean(), K(be), T(c, be), Y(G, c), Q.reset(), Q.update(G.subarray(0, 32)), Q.update(F.subarray(32)), Q.update(N);
    const ve = Q.digest();
    K(ve);
    for (let he = 0; he < 32; he++)
      C[he] = be[he];
    for (let he = 0; he < 32; he++)
      for (let Ie = 0; Ie < 32; Ie++)
        C[he + Ie] += ve[he] * S[Ie];
    return j(G.subarray(32), C), G;
  }
  e.sign = oe;
  function W(F, N) {
    const C = n(), c = n(), S = n(), G = n(), Q = n(), be = n(), ve = n();
    return m(F[2], a), b(F[1], N), g(S, F[1]), o(G, S, l), d(S, S, F[2]), _(G, F[2], G), g(Q, G), g(be, Q), o(ve, be, Q), o(C, ve, S), o(C, C, G), L(C, C), o(C, C, S), o(C, C, G), o(C, C, G), o(F[0], C, G), g(c, F[0]), o(c, c, G), E(c, S) && o(F[0], F[0], y), g(c, F[0]), o(c, c, G), E(c, S) ? -1 : (O(F[0]) === N[31] >> 7 && d(F[0], u, F[0]), o(F[3], F[0], F[1]), 0);
  }
  function ie(F, N, C) {
    const c = new Uint8Array(32), S = [n(), n(), n(), n()], G = [n(), n(), n(), n()];
    if (C.length !== e.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${e.SIGNATURE_LENGTH} bytes`);
    if (W(G, F))
      return !1;
    const Q = new r.SHA512();
    Q.update(C.subarray(0, 32)), Q.update(F), Q.update(N);
    const be = Q.digest();
    return K(be), x(S, G, be), T(G, C.subarray(32)), $(S, G), Y(c, S), !U(C, c);
  }
  e.verify = ie;
  function Z(F) {
    let N = [n(), n(), n(), n()];
    if (W(N, F))
      throw new Error("Ed25519: invalid public key");
    let C = n(), c = n(), S = N[1];
    _(C, a, S), d(c, a, S), A(c, c), o(C, C, c);
    let G = new Uint8Array(32);
    return P(G, C), G;
  }
  e.convertPublicKeyToX25519 = Z;
  function re(F) {
    const N = (0, r.hash)(F.subarray(0, 32));
    N[0] &= 248, N[31] &= 127, N[31] |= 64;
    const C = new Uint8Array(N.subarray(0, 32));
    return (0, i.wipe)(N), C;
  }
  e.convertSecretKeyToX25519 = re;
})(Ms);
const Xh = "EdDSA", Qh = "JWT", eu = ".", tu = "base64url", Zh = "utf8", ed = "utf8", td = ":", rd = "did", id = "key", ua = "base58btc", nd = "z", sd = "K36", od = 32;
function js(e) {
  return globalThis.Buffer != null ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e;
}
function ru(e = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? js(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e);
}
function ys(e, t) {
  t || (t = e.reduce((n, s) => n + s.length, 0));
  const r = ru(t);
  let i = 0;
  for (const n of e)
    r.set(n, i), i += n.length;
  return js(r);
}
function ad(e, t) {
  if (e.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), i = 0; i < r.length; i++)
    r[i] = 255;
  for (var n = 0; n < e.length; n++) {
    var s = e.charAt(n), u = s.charCodeAt(0);
    if (r[u] !== 255)
      throw new TypeError(s + " is ambiguous");
    r[u] = n;
  }
  var a = e.length, l = e.charAt(0), f = Math.log(a) / Math.log(256), h = Math.log(256) / Math.log(a);
  function p(D) {
    if (D instanceof Uint8Array || (ArrayBuffer.isView(D) ? D = new Uint8Array(D.buffer, D.byteOffset, D.byteLength) : Array.isArray(D) && (D = Uint8Array.from(D))), !(D instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (D.length === 0)
      return "";
    for (var I = 0, P = 0, U = 0, E = D.length; U !== E && D[U] === 0; )
      U++, I++;
    for (var O = (E - U) * h + 1 >>> 0, b = new Uint8Array(O); U !== E; ) {
      for (var _ = D[U], d = 0, o = O - 1; (_ !== 0 || d < P) && o !== -1; o--, d++)
        _ += 256 * b[o] >>> 0, b[o] = _ % a >>> 0, _ = _ / a >>> 0;
      if (_ !== 0)
        throw new Error("Non-zero carry");
      P = d, U++;
    }
    for (var g = O - P; g !== O && b[g] === 0; )
      g++;
    for (var A = l.repeat(I); g < O; ++g)
      A += e.charAt(b[g]);
    return A;
  }
  function y(D) {
    if (typeof D != "string")
      throw new TypeError("Expected String");
    if (D.length === 0)
      return new Uint8Array();
    var I = 0;
    if (D[I] !== " ") {
      for (var P = 0, U = 0; D[I] === l; )
        P++, I++;
      for (var E = (D.length - I) * f + 1 >>> 0, O = new Uint8Array(E); D[I]; ) {
        var b = r[D.charCodeAt(I)];
        if (b === 255)
          return;
        for (var _ = 0, d = E - 1; (b !== 0 || _ < U) && d !== -1; d--, _++)
          b += a * O[d] >>> 0, O[d] = b % 256 >>> 0, b = b / 256 >>> 0;
        if (b !== 0)
          throw new Error("Non-zero carry");
        U = _, I++;
      }
      if (D[I] !== " ") {
        for (var o = E - U; o !== E && O[o] === 0; )
          o++;
        for (var g = new Uint8Array(P + (E - o)), A = P; o !== E; )
          g[A++] = O[o++];
        return g;
      }
    }
  }
  function m(D) {
    var I = y(D);
    if (I)
      return I;
    throw new Error(`Non-${t} character`);
  }
  return {
    encode: p,
    decodeUnsafe: y,
    decode: m
  };
}
var cd = ad, ud = cd;
const ld = (e) => {
  if (e instanceof Uint8Array && e.constructor.name === "Uint8Array")
    return e;
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  if (ArrayBuffer.isView(e))
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  throw new Error("Unknown type, must be binary type");
}, fd = (e) => new TextEncoder().encode(e), hd = (e) => new TextDecoder().decode(e);
class dd {
  constructor(t, r, i) {
    this.name = t, this.prefix = r, this.baseEncode = i;
  }
  encode(t) {
    if (t instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class pd {
  constructor(t, r, i) {
    if (this.name = t, this.prefix = r, r.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = r.codePointAt(0), this.baseDecode = i;
  }
  decode(t) {
    if (typeof t == "string") {
      if (t.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(t.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(t) {
    return iu(this, t);
  }
}
class gd {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return iu(this, t);
  }
  decode(t) {
    const r = t[0], i = this.decoders[r];
    if (i)
      return i.decode(t);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const iu = (e, t) => new gd({
  ...e.decoders || { [e.prefix]: e },
  ...t.decoders || { [t.prefix]: t }
});
class yd {
  constructor(t, r, i, n) {
    this.name = t, this.prefix = r, this.baseEncode = i, this.baseDecode = n, this.encoder = new dd(t, r, i), this.decoder = new pd(t, r, n);
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const En = ({ name: e, prefix: t, encode: r, decode: i }) => new yd(e, t, r, i), Li = ({ prefix: e, name: t, alphabet: r }) => {
  const { encode: i, decode: n } = ud(r, t);
  return En({
    prefix: e,
    name: t,
    encode: i,
    decode: (s) => ld(n(s))
  });
}, bd = (e, t, r, i) => {
  const n = {};
  for (let h = 0; h < t.length; ++h)
    n[t[h]] = h;
  let s = e.length;
  for (; e[s - 1] === "="; )
    --s;
  const u = new Uint8Array(s * r / 8 | 0);
  let a = 0, l = 0, f = 0;
  for (let h = 0; h < s; ++h) {
    const p = n[e[h]];
    if (p === void 0)
      throw new SyntaxError(`Non-${i} character`);
    l = l << r | p, a += r, a >= 8 && (a -= 8, u[f++] = 255 & l >> a);
  }
  if (a >= r || 255 & l << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return u;
}, vd = (e, t, r) => {
  const i = t[t.length - 1] === "=", n = (1 << r) - 1;
  let s = "", u = 0, a = 0;
  for (let l = 0; l < e.length; ++l)
    for (a = a << 8 | e[l], u += 8; u > r; )
      u -= r, s += t[n & a >> u];
  if (u && (s += t[n & a << r - u]), i)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, pt = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) => En({
  prefix: t,
  name: e,
  encode(n) {
    return vd(n, i, r);
  },
  decode(n) {
    return bd(n, i, r, e);
  }
}), md = En({
  prefix: "\0",
  name: "identity",
  encode: (e) => hd(e),
  decode: (e) => fd(e)
}), wd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: md
}, Symbol.toStringTag, { value: "Module" })), _d = pt({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), Ed = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: _d
}, Symbol.toStringTag, { value: "Module" })), Sd = pt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), Dd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: Sd
}, Symbol.toStringTag, { value: "Module" })), Od = Li({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), Id = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: Od
}, Symbol.toStringTag, { value: "Module" })), xd = pt({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), Cd = pt({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), Rd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: xd,
  base16upper: Cd
}, Symbol.toStringTag, { value: "Module" })), Ad = pt({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), Pd = pt({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), Td = pt({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), Nd = pt({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), Ld = pt({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), Fd = pt({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), $d = pt({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), Ud = pt({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), Md = pt({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), jd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: Ad,
  base32hex: Ld,
  base32hexpad: $d,
  base32hexpadupper: Ud,
  base32hexupper: Fd,
  base32pad: Td,
  base32padupper: Nd,
  base32upper: Pd,
  base32z: Md
}, Symbol.toStringTag, { value: "Module" })), qd = Li({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), Bd = Li({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), zd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: qd,
  base36upper: Bd
}, Symbol.toStringTag, { value: "Module" })), kd = Li({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), Vd = Li({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), Kd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: kd,
  base58flickr: Vd
}, Symbol.toStringTag, { value: "Module" })), Wd = pt({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), Hd = pt({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), Gd = pt({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), Yd = pt({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), Jd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: Wd,
  base64pad: Hd,
  base64url: Gd,
  base64urlpad: Yd
}, Symbol.toStringTag, { value: "Module" })), nu = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Xd = nu.reduce((e, t, r) => (e[r] = t, e), []), Qd = nu.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []);
function Zd(e) {
  return e.reduce((t, r) => (t += Xd[r], t), "");
}
function ep(e) {
  const t = [];
  for (const r of e) {
    const i = Qd[r.codePointAt(0)];
    if (i === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    t.push(i);
  }
  return new Uint8Array(t);
}
const tp = En({
  prefix: "🚀",
  name: "base256emoji",
  encode: Zd,
  decode: ep
}), rp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: tp
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const la = {
  ...wd,
  ...Ed,
  ...Dd,
  ...Id,
  ...Rd,
  ...jd,
  ...zd,
  ...Kd,
  ...Jd,
  ...rp
};
function su(e, t, r, i) {
  return {
    name: e,
    prefix: t,
    encoder: {
      name: e,
      prefix: t,
      encode: r
    },
    decoder: { decode: i }
  };
}
const fa = su("utf8", "u", (e) => "u" + new TextDecoder("utf8").decode(e), (e) => new TextEncoder().encode(e.substring(1))), Bn = su("ascii", "a", (e) => {
  let t = "a";
  for (let r = 0; r < e.length; r++)
    t += String.fromCharCode(e[r]);
  return t;
}, (e) => {
  e = e.substring(1);
  const t = ru(e.length);
  for (let r = 0; r < e.length; r++)
    t[r] = e.charCodeAt(r);
  return t;
}), ou = {
  utf8: fa,
  "utf-8": fa,
  hex: la.base16,
  latin1: Bn,
  ascii: Bn,
  binary: Bn,
  ...la
};
function xt(e, t = "utf8") {
  const r = ou[t];
  if (!r)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8") : r.encoder.encode(e).substring(1);
}
function At(e, t = "utf8") {
  const r = ou[t];
  if (!r)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? js(globalThis.Buffer.from(e, "utf-8")) : r.decoder.decode(`${r.prefix}${e}`);
}
function an(e) {
  return xt(At(Us(e), Zh), tu);
}
function au(e) {
  const t = At(sd, ua), r = nd + xt(ys([t, e]), ua);
  return [rd, id, r].join(td);
}
function ip(e) {
  return xt(e, tu);
}
function np(e) {
  return At([an(e.header), an(e.payload)].join(eu), ed);
}
function sp(e) {
  return [
    an(e.header),
    an(e.payload),
    ip(e.signature)
  ].join(eu);
}
function ha(e = ri.randomBytes(od)) {
  return Ms.generateKeyPairFromSeed(e);
}
async function op(e, t, r, i, n = te.fromMiliseconds(Date.now())) {
  const s = { alg: Xh, typ: Qh }, u = au(i.publicKey), a = n + r, l = { iss: u, sub: e, aud: t, iat: n, exp: a }, f = np({ header: s, payload: l }), h = Ms.sign(i.secretKey, f);
  return sp({ header: s, payload: l, signature: h });
}
var qs = {}, Sn = {};
Object.defineProperty(Sn, "__esModule", { value: !0 });
var vt = le, bs = Ut, ap = 20;
function cp(e, t, r) {
  for (var i = 1634760805, n = 857760878, s = 2036477234, u = 1797285236, a = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], l = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], f = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], h = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], p = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], y = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], m = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], D = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], I = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], P = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4], U = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8], E = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12], O = i, b = n, _ = s, d = u, o = a, g = l, A = f, L = h, $ = p, V = y, Y = m, x = D, T = I, H = P, k = U, q = E, z = 0; z < ap; z += 2)
    O = O + o | 0, T ^= O, T = T >>> 32 - 16 | T << 16, $ = $ + T | 0, o ^= $, o = o >>> 32 - 12 | o << 12, b = b + g | 0, H ^= b, H = H >>> 32 - 16 | H << 16, V = V + H | 0, g ^= V, g = g >>> 32 - 12 | g << 12, _ = _ + A | 0, k ^= _, k = k >>> 32 - 16 | k << 16, Y = Y + k | 0, A ^= Y, A = A >>> 32 - 12 | A << 12, d = d + L | 0, q ^= d, q = q >>> 32 - 16 | q << 16, x = x + q | 0, L ^= x, L = L >>> 32 - 12 | L << 12, _ = _ + A | 0, k ^= _, k = k >>> 32 - 8 | k << 8, Y = Y + k | 0, A ^= Y, A = A >>> 32 - 7 | A << 7, d = d + L | 0, q ^= d, q = q >>> 32 - 8 | q << 8, x = x + q | 0, L ^= x, L = L >>> 32 - 7 | L << 7, b = b + g | 0, H ^= b, H = H >>> 32 - 8 | H << 8, V = V + H | 0, g ^= V, g = g >>> 32 - 7 | g << 7, O = O + o | 0, T ^= O, T = T >>> 32 - 8 | T << 8, $ = $ + T | 0, o ^= $, o = o >>> 32 - 7 | o << 7, O = O + g | 0, q ^= O, q = q >>> 32 - 16 | q << 16, Y = Y + q | 0, g ^= Y, g = g >>> 32 - 12 | g << 12, b = b + A | 0, T ^= b, T = T >>> 32 - 16 | T << 16, x = x + T | 0, A ^= x, A = A >>> 32 - 12 | A << 12, _ = _ + L | 0, H ^= _, H = H >>> 32 - 16 | H << 16, $ = $ + H | 0, L ^= $, L = L >>> 32 - 12 | L << 12, d = d + o | 0, k ^= d, k = k >>> 32 - 16 | k << 16, V = V + k | 0, o ^= V, o = o >>> 32 - 12 | o << 12, _ = _ + L | 0, H ^= _, H = H >>> 32 - 8 | H << 8, $ = $ + H | 0, L ^= $, L = L >>> 32 - 7 | L << 7, d = d + o | 0, k ^= d, k = k >>> 32 - 8 | k << 8, V = V + k | 0, o ^= V, o = o >>> 32 - 7 | o << 7, b = b + A | 0, T ^= b, T = T >>> 32 - 8 | T << 8, x = x + T | 0, A ^= x, A = A >>> 32 - 7 | A << 7, O = O + g | 0, q ^= O, q = q >>> 32 - 8 | q << 8, Y = Y + q | 0, g ^= Y, g = g >>> 32 - 7 | g << 7;
  vt.writeUint32LE(O + i | 0, e, 0), vt.writeUint32LE(b + n | 0, e, 4), vt.writeUint32LE(_ + s | 0, e, 8), vt.writeUint32LE(d + u | 0, e, 12), vt.writeUint32LE(o + a | 0, e, 16), vt.writeUint32LE(g + l | 0, e, 20), vt.writeUint32LE(A + f | 0, e, 24), vt.writeUint32LE(L + h | 0, e, 28), vt.writeUint32LE($ + p | 0, e, 32), vt.writeUint32LE(V + y | 0, e, 36), vt.writeUint32LE(Y + m | 0, e, 40), vt.writeUint32LE(x + D | 0, e, 44), vt.writeUint32LE(T + I | 0, e, 48), vt.writeUint32LE(H + P | 0, e, 52), vt.writeUint32LE(k + U | 0, e, 56), vt.writeUint32LE(q + E | 0, e, 60);
}
function cu(e, t, r, i, n) {
  if (n === void 0 && (n = 0), e.length !== 32)
    throw new Error("ChaCha: key size must be 32 bytes");
  if (i.length < r.length)
    throw new Error("ChaCha: destination is shorter than source");
  var s, u;
  if (n === 0) {
    if (t.length !== 8 && t.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    s = new Uint8Array(16), u = s.length - t.length, s.set(t, u);
  } else {
    if (t.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    s = t, u = n;
  }
  for (var a = new Uint8Array(64), l = 0; l < r.length; l += 64) {
    cp(a, s, e);
    for (var f = l; f < l + 64 && f < r.length; f++)
      i[f] = r[f] ^ a[f - l];
    lp(s, 0, u);
  }
  return bs.wipe(a), n === 0 && bs.wipe(s), i;
}
Sn.streamXOR = cu;
function up(e, t, r, i) {
  return i === void 0 && (i = 0), bs.wipe(r), cu(e, t, r, r, i);
}
Sn.stream = up;
function lp(e, t, r) {
  for (var i = 1; r--; )
    i = i + (e[t] & 255) | 0, e[t] = i & 255, i >>>= 8, t++;
  if (i > 0)
    throw new Error("ChaCha: counter overflow");
}
var uu = {}, Sr = {};
Object.defineProperty(Sr, "__esModule", { value: !0 });
function fp(e, t, r) {
  return ~(e - 1) & t | e - 1 & r;
}
Sr.select = fp;
function hp(e, t) {
  return (e | 0) - (t | 0) - 1 >>> 31 & 1;
}
Sr.lessOrEqual = hp;
function lu(e, t) {
  if (e.length !== t.length)
    return 0;
  for (var r = 0, i = 0; i < e.length; i++)
    r |= e[i] ^ t[i];
  return 1 & r - 1 >>> 8;
}
Sr.compare = lu;
function dp(e, t) {
  return e.length === 0 || t.length === 0 ? !1 : lu(e, t) !== 0;
}
Sr.equal = dp;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = Sr, r = Ut;
  e.DIGEST_LENGTH = 16;
  var i = (
    /** @class */
    function() {
      function u(a) {
        this.digestLength = e.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
        var l = a[0] | a[1] << 8;
        this._r[0] = l & 8191;
        var f = a[2] | a[3] << 8;
        this._r[1] = (l >>> 13 | f << 3) & 8191;
        var h = a[4] | a[5] << 8;
        this._r[2] = (f >>> 10 | h << 6) & 7939;
        var p = a[6] | a[7] << 8;
        this._r[3] = (h >>> 7 | p << 9) & 8191;
        var y = a[8] | a[9] << 8;
        this._r[4] = (p >>> 4 | y << 12) & 255, this._r[5] = y >>> 1 & 8190;
        var m = a[10] | a[11] << 8;
        this._r[6] = (y >>> 14 | m << 2) & 8191;
        var D = a[12] | a[13] << 8;
        this._r[7] = (m >>> 11 | D << 5) & 8065;
        var I = a[14] | a[15] << 8;
        this._r[8] = (D >>> 8 | I << 8) & 8191, this._r[9] = I >>> 5 & 127, this._pad[0] = a[16] | a[17] << 8, this._pad[1] = a[18] | a[19] << 8, this._pad[2] = a[20] | a[21] << 8, this._pad[3] = a[22] | a[23] << 8, this._pad[4] = a[24] | a[25] << 8, this._pad[5] = a[26] | a[27] << 8, this._pad[6] = a[28] | a[29] << 8, this._pad[7] = a[30] | a[31] << 8;
      }
      return u.prototype._blocks = function(a, l, f) {
        for (var h = this._fin ? 0 : 2048, p = this._h[0], y = this._h[1], m = this._h[2], D = this._h[3], I = this._h[4], P = this._h[5], U = this._h[6], E = this._h[7], O = this._h[8], b = this._h[9], _ = this._r[0], d = this._r[1], o = this._r[2], g = this._r[3], A = this._r[4], L = this._r[5], $ = this._r[6], V = this._r[7], Y = this._r[8], x = this._r[9]; f >= 16; ) {
          var T = a[l + 0] | a[l + 1] << 8;
          p += T & 8191;
          var H = a[l + 2] | a[l + 3] << 8;
          y += (T >>> 13 | H << 3) & 8191;
          var k = a[l + 4] | a[l + 5] << 8;
          m += (H >>> 10 | k << 6) & 8191;
          var q = a[l + 6] | a[l + 7] << 8;
          D += (k >>> 7 | q << 9) & 8191;
          var z = a[l + 8] | a[l + 9] << 8;
          I += (q >>> 4 | z << 12) & 8191, P += z >>> 1 & 8191;
          var j = a[l + 10] | a[l + 11] << 8;
          U += (z >>> 14 | j << 2) & 8191;
          var K = a[l + 12] | a[l + 13] << 8;
          E += (j >>> 11 | K << 5) & 8191;
          var oe = a[l + 14] | a[l + 15] << 8;
          O += (K >>> 8 | oe << 8) & 8191, b += oe >>> 5 | h;
          var W = 0, ie = W;
          ie += p * _, ie += y * (5 * x), ie += m * (5 * Y), ie += D * (5 * V), ie += I * (5 * $), W = ie >>> 13, ie &= 8191, ie += P * (5 * L), ie += U * (5 * A), ie += E * (5 * g), ie += O * (5 * o), ie += b * (5 * d), W += ie >>> 13, ie &= 8191;
          var Z = W;
          Z += p * d, Z += y * _, Z += m * (5 * x), Z += D * (5 * Y), Z += I * (5 * V), W = Z >>> 13, Z &= 8191, Z += P * (5 * $), Z += U * (5 * L), Z += E * (5 * A), Z += O * (5 * g), Z += b * (5 * o), W += Z >>> 13, Z &= 8191;
          var re = W;
          re += p * o, re += y * d, re += m * _, re += D * (5 * x), re += I * (5 * Y), W = re >>> 13, re &= 8191, re += P * (5 * V), re += U * (5 * $), re += E * (5 * L), re += O * (5 * A), re += b * (5 * g), W += re >>> 13, re &= 8191;
          var F = W;
          F += p * g, F += y * o, F += m * d, F += D * _, F += I * (5 * x), W = F >>> 13, F &= 8191, F += P * (5 * Y), F += U * (5 * V), F += E * (5 * $), F += O * (5 * L), F += b * (5 * A), W += F >>> 13, F &= 8191;
          var N = W;
          N += p * A, N += y * g, N += m * o, N += D * d, N += I * _, W = N >>> 13, N &= 8191, N += P * (5 * x), N += U * (5 * Y), N += E * (5 * V), N += O * (5 * $), N += b * (5 * L), W += N >>> 13, N &= 8191;
          var C = W;
          C += p * L, C += y * A, C += m * g, C += D * o, C += I * d, W = C >>> 13, C &= 8191, C += P * _, C += U * (5 * x), C += E * (5 * Y), C += O * (5 * V), C += b * (5 * $), W += C >>> 13, C &= 8191;
          var c = W;
          c += p * $, c += y * L, c += m * A, c += D * g, c += I * o, W = c >>> 13, c &= 8191, c += P * d, c += U * _, c += E * (5 * x), c += O * (5 * Y), c += b * (5 * V), W += c >>> 13, c &= 8191;
          var S = W;
          S += p * V, S += y * $, S += m * L, S += D * A, S += I * g, W = S >>> 13, S &= 8191, S += P * o, S += U * d, S += E * _, S += O * (5 * x), S += b * (5 * Y), W += S >>> 13, S &= 8191;
          var G = W;
          G += p * Y, G += y * V, G += m * $, G += D * L, G += I * A, W = G >>> 13, G &= 8191, G += P * g, G += U * o, G += E * d, G += O * _, G += b * (5 * x), W += G >>> 13, G &= 8191;
          var Q = W;
          Q += p * x, Q += y * Y, Q += m * V, Q += D * $, Q += I * L, W = Q >>> 13, Q &= 8191, Q += P * A, Q += U * g, Q += E * o, Q += O * d, Q += b * _, W += Q >>> 13, Q &= 8191, W = (W << 2) + W | 0, W = W + ie | 0, ie = W & 8191, W = W >>> 13, Z += W, p = ie, y = Z, m = re, D = F, I = N, P = C, U = c, E = S, O = G, b = Q, l += 16, f -= 16;
        }
        this._h[0] = p, this._h[1] = y, this._h[2] = m, this._h[3] = D, this._h[4] = I, this._h[5] = P, this._h[6] = U, this._h[7] = E, this._h[8] = O, this._h[9] = b;
      }, u.prototype.finish = function(a, l) {
        l === void 0 && (l = 0);
        var f = new Uint16Array(10), h, p, y, m;
        if (this._leftover) {
          for (m = this._leftover, this._buffer[m++] = 1; m < 16; m++)
            this._buffer[m] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (h = this._h[1] >>> 13, this._h[1] &= 8191, m = 2; m < 10; m++)
          this._h[m] += h, h = this._h[m] >>> 13, this._h[m] &= 8191;
        for (this._h[0] += h * 5, h = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += h, h = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += h, f[0] = this._h[0] + 5, h = f[0] >>> 13, f[0] &= 8191, m = 1; m < 10; m++)
          f[m] = this._h[m] + h, h = f[m] >>> 13, f[m] &= 8191;
        for (f[9] -= 8192, p = (h ^ 1) - 1, m = 0; m < 10; m++)
          f[m] &= p;
        for (p = ~p, m = 0; m < 10; m++)
          this._h[m] = this._h[m] & p | f[m];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, y = this._h[0] + this._pad[0], this._h[0] = y & 65535, m = 1; m < 8; m++)
          y = (this._h[m] + this._pad[m] | 0) + (y >>> 16) | 0, this._h[m] = y & 65535;
        return a[l + 0] = this._h[0] >>> 0, a[l + 1] = this._h[0] >>> 8, a[l + 2] = this._h[1] >>> 0, a[l + 3] = this._h[1] >>> 8, a[l + 4] = this._h[2] >>> 0, a[l + 5] = this._h[2] >>> 8, a[l + 6] = this._h[3] >>> 0, a[l + 7] = this._h[3] >>> 8, a[l + 8] = this._h[4] >>> 0, a[l + 9] = this._h[4] >>> 8, a[l + 10] = this._h[5] >>> 0, a[l + 11] = this._h[5] >>> 8, a[l + 12] = this._h[6] >>> 0, a[l + 13] = this._h[6] >>> 8, a[l + 14] = this._h[7] >>> 0, a[l + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, u.prototype.update = function(a) {
        var l = 0, f = a.length, h;
        if (this._leftover) {
          h = 16 - this._leftover, h > f && (h = f);
          for (var p = 0; p < h; p++)
            this._buffer[this._leftover + p] = a[l + p];
          if (f -= h, l += h, this._leftover += h, this._leftover < 16)
            return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (f >= 16 && (h = f - f % 16, this._blocks(a, l, h), l += h, f -= h), f) {
          for (var p = 0; p < f; p++)
            this._buffer[this._leftover + p] = a[l + p];
          this._leftover += f;
        }
        return this;
      }, u.prototype.digest = function() {
        if (this._finished)
          throw new Error("Poly1305 was finished");
        var a = new Uint8Array(16);
        return this.finish(a), a;
      }, u.prototype.clean = function() {
        return r.wipe(this._buffer), r.wipe(this._r), r.wipe(this._h), r.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this;
      }, u;
    }()
  );
  e.Poly1305 = i;
  function n(u, a) {
    var l = new i(u);
    l.update(a);
    var f = l.digest();
    return l.clean(), f;
  }
  e.oneTimeAuth = n;
  function s(u, a) {
    return u.length !== e.DIGEST_LENGTH || a.length !== e.DIGEST_LENGTH ? !1 : t.equal(u, a);
  }
  e.equal = s;
})(uu);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = Sn, r = uu, i = Ut, n = le, s = Sr;
  e.KEY_LENGTH = 32, e.NONCE_LENGTH = 12, e.TAG_LENGTH = 16;
  var u = new Uint8Array(16), a = (
    /** @class */
    function() {
      function l(f) {
        if (this.nonceLength = e.NONCE_LENGTH, this.tagLength = e.TAG_LENGTH, f.length !== e.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(f);
      }
      return l.prototype.seal = function(f, h, p, y) {
        if (f.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var m = new Uint8Array(16);
        m.set(f, m.length - f.length);
        var D = new Uint8Array(32);
        t.stream(this._key, m, D, 4);
        var I = h.length + this.tagLength, P;
        if (y) {
          if (y.length !== I)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          P = y;
        } else
          P = new Uint8Array(I);
        return t.streamXOR(this._key, m, h, P, 4), this._authenticate(P.subarray(P.length - this.tagLength, P.length), D, P.subarray(0, P.length - this.tagLength), p), i.wipe(m), P;
      }, l.prototype.open = function(f, h, p, y) {
        if (f.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (h.length < this.tagLength)
          return null;
        var m = new Uint8Array(16);
        m.set(f, m.length - f.length);
        var D = new Uint8Array(32);
        t.stream(this._key, m, D, 4);
        var I = new Uint8Array(this.tagLength);
        if (this._authenticate(I, D, h.subarray(0, h.length - this.tagLength), p), !s.equal(I, h.subarray(h.length - this.tagLength, h.length)))
          return null;
        var P = h.length - this.tagLength, U;
        if (y) {
          if (y.length !== P)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          U = y;
        } else
          U = new Uint8Array(P);
        return t.streamXOR(this._key, m, h.subarray(0, h.length - this.tagLength), U, 4), i.wipe(m), U;
      }, l.prototype.clean = function() {
        return i.wipe(this._key), this;
      }, l.prototype._authenticate = function(f, h, p, y) {
        var m = new r.Poly1305(h);
        y && (m.update(y), y.length % 16 > 0 && m.update(u.subarray(y.length % 16))), m.update(p), p.length % 16 > 0 && m.update(u.subarray(p.length % 16));
        var D = new Uint8Array(8);
        y && n.writeUint64LE(y.length, D), m.update(D), n.writeUint64LE(p.length, D), m.update(D);
        for (var I = m.digest(), P = 0; P < I.length; P++)
          f[P] = I[P];
        m.clean(), i.wipe(I), i.wipe(D);
      }, l;
    }()
  );
  e.ChaCha20Poly1305 = a;
})(qs);
var fu = {}, Fi = {}, Bs = {};
Object.defineProperty(Bs, "__esModule", { value: !0 });
function pp(e) {
  return typeof e.saveState < "u" && typeof e.restoreState < "u" && typeof e.cleanSavedState < "u";
}
Bs.isSerializableHash = pp;
Object.defineProperty(Fi, "__esModule", { value: !0 });
var rr = Bs, gp = Sr, yp = Ut, hu = (
  /** @class */
  function() {
    function e(t, r) {
      this._finished = !1, this._inner = new t(), this._outer = new t(), this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
      var i = new Uint8Array(this.blockSize);
      r.length > this.blockSize ? this._inner.update(r).finish(i).clean() : i.set(r);
      for (var n = 0; n < i.length; n++)
        i[n] ^= 54;
      this._inner.update(i);
      for (var n = 0; n < i.length; n++)
        i[n] ^= 106;
      this._outer.update(i), rr.isSerializableHash(this._inner) && rr.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), yp.wipe(i);
    }
    return e.prototype.reset = function() {
      if (!rr.isSerializableHash(this._inner) || !rr.isSerializableHash(this._outer))
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, e.prototype.clean = function() {
      rr.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), rr.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
    }, e.prototype.update = function(t) {
      return this._inner.update(t), this;
    }, e.prototype.finish = function(t) {
      return this._finished ? (this._outer.finish(t), this) : (this._inner.finish(t), this._outer.update(t.subarray(0, this.digestLength)).finish(t), this._finished = !0, this);
    }, e.prototype.digest = function() {
      var t = new Uint8Array(this.digestLength);
      return this.finish(t), t;
    }, e.prototype.saveState = function() {
      if (!rr.isSerializableHash(this._inner))
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      return this._inner.saveState();
    }, e.prototype.restoreState = function(t) {
      if (!rr.isSerializableHash(this._inner) || !rr.isSerializableHash(this._outer))
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      return this._inner.restoreState(t), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, e.prototype.cleanSavedState = function(t) {
      if (!rr.isSerializableHash(this._inner))
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      this._inner.cleanSavedState(t);
    }, e;
  }()
);
Fi.HMAC = hu;
function bp(e, t, r) {
  var i = new hu(e, t);
  i.update(r);
  var n = i.digest();
  return i.clean(), n;
}
Fi.hmac = bp;
Fi.equal = gp.equal;
Object.defineProperty(fu, "__esModule", { value: !0 });
var da = Fi, pa = Ut, vp = (
  /** @class */
  function() {
    function e(t, r, i, n) {
      i === void 0 && (i = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = t, this._info = n;
      var s = da.hmac(this._hash, i, r);
      this._hmac = new da.HMAC(t, s), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
    }
    return e.prototype._fillBuffer = function() {
      this._counter[0]++;
      var t = this._counter[0];
      if (t === 0)
        throw new Error("hkdf: cannot expand more");
      this._hmac.reset(), t > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0;
    }, e.prototype.expand = function(t) {
      for (var r = new Uint8Array(t), i = 0; i < r.length; i++)
        this._bufpos === this._buffer.length && this._fillBuffer(), r[i] = this._buffer[this._bufpos++];
      return r;
    }, e.prototype.clean = function() {
      this._hmac.clean(), pa.wipe(this._buffer), pa.wipe(this._counter), this._bufpos = 0;
    }, e;
  }()
), mp = fu.HKDF = vp, Dn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = le, r = Ut;
  e.DIGEST_LENGTH = 32, e.BLOCK_SIZE = 64;
  var i = (
    /** @class */
    function() {
      function a() {
        this.digestLength = e.DIGEST_LENGTH, this.blockSize = e.BLOCK_SIZE, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
      }
      return a.prototype._initState = function() {
        this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225;
      }, a.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
      }, a.prototype.clean = function() {
        r.wipe(this._buffer), r.wipe(this._temp), this.reset();
      }, a.prototype.update = function(l, f) {
        if (f === void 0 && (f = l.length), this._finished)
          throw new Error("SHA256: can't update because hash was finished.");
        var h = 0;
        if (this._bytesHashed += f, this._bufferLength > 0) {
          for (; this._bufferLength < this.blockSize && f > 0; )
            this._buffer[this._bufferLength++] = l[h++], f--;
          this._bufferLength === this.blockSize && (s(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (f >= this.blockSize && (h = s(this._temp, this._state, l, h, f), f %= this.blockSize); f > 0; )
          this._buffer[this._bufferLength++] = l[h++], f--;
        return this;
      }, a.prototype.finish = function(l) {
        if (!this._finished) {
          var f = this._bytesHashed, h = this._bufferLength, p = f / 536870912 | 0, y = f << 3, m = f % 64 < 56 ? 64 : 128;
          this._buffer[h] = 128;
          for (var D = h + 1; D < m - 8; D++)
            this._buffer[D] = 0;
          t.writeUint32BE(p, this._buffer, m - 8), t.writeUint32BE(y, this._buffer, m - 4), s(this._temp, this._state, this._buffer, 0, m), this._finished = !0;
        }
        for (var D = 0; D < this.digestLength / 4; D++)
          t.writeUint32BE(this._state[D], l, D * 4);
        return this;
      }, a.prototype.digest = function() {
        var l = new Uint8Array(this.digestLength);
        return this.finish(l), l;
      }, a.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          state: new Int32Array(this._state),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, a.prototype.restoreState = function(l) {
        return this._state.set(l.state), this._bufferLength = l.bufferLength, l.buffer && this._buffer.set(l.buffer), this._bytesHashed = l.bytesHashed, this._finished = !1, this;
      }, a.prototype.cleanSavedState = function(l) {
        r.wipe(l.state), l.buffer && r.wipe(l.buffer), l.bufferLength = 0, l.bytesHashed = 0;
      }, a;
    }()
  );
  e.SHA256 = i;
  var n = new Int32Array([
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
  function s(a, l, f, h, p) {
    for (; p >= 64; ) {
      for (var y = l[0], m = l[1], D = l[2], I = l[3], P = l[4], U = l[5], E = l[6], O = l[7], b = 0; b < 16; b++) {
        var _ = h + b * 4;
        a[b] = t.readUint32BE(f, _);
      }
      for (var b = 16; b < 64; b++) {
        var d = a[b - 2], o = (d >>> 17 | d << 32 - 17) ^ (d >>> 19 | d << 32 - 19) ^ d >>> 10;
        d = a[b - 15];
        var g = (d >>> 7 | d << 32 - 7) ^ (d >>> 18 | d << 32 - 18) ^ d >>> 3;
        a[b] = (o + a[b - 7] | 0) + (g + a[b - 16] | 0);
      }
      for (var b = 0; b < 64; b++) {
        var o = (((P >>> 6 | P << 26) ^ (P >>> 11 | P << 21) ^ (P >>> 25 | P << 7)) + (P & U ^ ~P & E) | 0) + (O + (n[b] + a[b] | 0) | 0) | 0, g = ((y >>> 2 | y << 32 - 2) ^ (y >>> 13 | y << 32 - 13) ^ (y >>> 22 | y << 32 - 22)) + (y & m ^ y & D ^ m & D) | 0;
        O = E, E = U, U = P, P = I + o | 0, I = D, D = m, m = y, y = o + g | 0;
      }
      l[0] += y, l[1] += m, l[2] += D, l[3] += I, l[4] += P, l[5] += U, l[6] += E, l[7] += O, h += 64, p -= 64;
    }
    return h;
  }
  function u(a) {
    var l = new i();
    l.update(a);
    var f = l.digest();
    return l.clean(), f;
  }
  e.hash = u;
})(Dn);
var zs = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.sharedKey = e.generateKeyPair = e.generateKeyPairFromSeed = e.scalarMultBase = e.scalarMult = e.SHARED_KEY_LENGTH = e.SECRET_KEY_LENGTH = e.PUBLIC_KEY_LENGTH = void 0;
  const t = ri, r = Ut;
  e.PUBLIC_KEY_LENGTH = 32, e.SECRET_KEY_LENGTH = 32, e.SHARED_KEY_LENGTH = 32;
  function i(b) {
    const _ = new Float64Array(16);
    if (b)
      for (let d = 0; d < b.length; d++)
        _[d] = b[d];
    return _;
  }
  const n = new Uint8Array(32);
  n[0] = 9;
  const s = i([56129, 1]);
  function u(b) {
    let _ = 1;
    for (let d = 0; d < 16; d++) {
      let o = b[d] + _ + 65535;
      _ = Math.floor(o / 65536), b[d] = o - _ * 65536;
    }
    b[0] += _ - 1 + 37 * (_ - 1);
  }
  function a(b, _, d) {
    const o = ~(d - 1);
    for (let g = 0; g < 16; g++) {
      const A = o & (b[g] ^ _[g]);
      b[g] ^= A, _[g] ^= A;
    }
  }
  function l(b, _) {
    const d = i(), o = i();
    for (let g = 0; g < 16; g++)
      o[g] = _[g];
    u(o), u(o), u(o);
    for (let g = 0; g < 2; g++) {
      d[0] = o[0] - 65517;
      for (let L = 1; L < 15; L++)
        d[L] = o[L] - 65535 - (d[L - 1] >> 16 & 1), d[L - 1] &= 65535;
      d[15] = o[15] - 32767 - (d[14] >> 16 & 1);
      const A = d[15] >> 16 & 1;
      d[14] &= 65535, a(o, d, 1 - A);
    }
    for (let g = 0; g < 16; g++)
      b[2 * g] = o[g] & 255, b[2 * g + 1] = o[g] >> 8;
  }
  function f(b, _) {
    for (let d = 0; d < 16; d++)
      b[d] = _[2 * d] + (_[2 * d + 1] << 8);
    b[15] &= 32767;
  }
  function h(b, _, d) {
    for (let o = 0; o < 16; o++)
      b[o] = _[o] + d[o];
  }
  function p(b, _, d) {
    for (let o = 0; o < 16; o++)
      b[o] = _[o] - d[o];
  }
  function y(b, _, d) {
    let o, g, A = 0, L = 0, $ = 0, V = 0, Y = 0, x = 0, T = 0, H = 0, k = 0, q = 0, z = 0, j = 0, K = 0, oe = 0, W = 0, ie = 0, Z = 0, re = 0, F = 0, N = 0, C = 0, c = 0, S = 0, G = 0, Q = 0, be = 0, ve = 0, he = 0, Ie = 0, qe = 0, Le = 0, De = d[0], _e = d[1], de = d[2], ge = d[3], pe = d[4], ue = d[5], ce = d[6], ne = d[7], ye = d[8], me = d[9], ae = d[10], Ee = d[11], xe = d[12], Pe = d[13], Te = d[14], Ce = d[15];
    o = _[0], A += o * De, L += o * _e, $ += o * de, V += o * ge, Y += o * pe, x += o * ue, T += o * ce, H += o * ne, k += o * ye, q += o * me, z += o * ae, j += o * Ee, K += o * xe, oe += o * Pe, W += o * Te, ie += o * Ce, o = _[1], L += o * De, $ += o * _e, V += o * de, Y += o * ge, x += o * pe, T += o * ue, H += o * ce, k += o * ne, q += o * ye, z += o * me, j += o * ae, K += o * Ee, oe += o * xe, W += o * Pe, ie += o * Te, Z += o * Ce, o = _[2], $ += o * De, V += o * _e, Y += o * de, x += o * ge, T += o * pe, H += o * ue, k += o * ce, q += o * ne, z += o * ye, j += o * me, K += o * ae, oe += o * Ee, W += o * xe, ie += o * Pe, Z += o * Te, re += o * Ce, o = _[3], V += o * De, Y += o * _e, x += o * de, T += o * ge, H += o * pe, k += o * ue, q += o * ce, z += o * ne, j += o * ye, K += o * me, oe += o * ae, W += o * Ee, ie += o * xe, Z += o * Pe, re += o * Te, F += o * Ce, o = _[4], Y += o * De, x += o * _e, T += o * de, H += o * ge, k += o * pe, q += o * ue, z += o * ce, j += o * ne, K += o * ye, oe += o * me, W += o * ae, ie += o * Ee, Z += o * xe, re += o * Pe, F += o * Te, N += o * Ce, o = _[5], x += o * De, T += o * _e, H += o * de, k += o * ge, q += o * pe, z += o * ue, j += o * ce, K += o * ne, oe += o * ye, W += o * me, ie += o * ae, Z += o * Ee, re += o * xe, F += o * Pe, N += o * Te, C += o * Ce, o = _[6], T += o * De, H += o * _e, k += o * de, q += o * ge, z += o * pe, j += o * ue, K += o * ce, oe += o * ne, W += o * ye, ie += o * me, Z += o * ae, re += o * Ee, F += o * xe, N += o * Pe, C += o * Te, c += o * Ce, o = _[7], H += o * De, k += o * _e, q += o * de, z += o * ge, j += o * pe, K += o * ue, oe += o * ce, W += o * ne, ie += o * ye, Z += o * me, re += o * ae, F += o * Ee, N += o * xe, C += o * Pe, c += o * Te, S += o * Ce, o = _[8], k += o * De, q += o * _e, z += o * de, j += o * ge, K += o * pe, oe += o * ue, W += o * ce, ie += o * ne, Z += o * ye, re += o * me, F += o * ae, N += o * Ee, C += o * xe, c += o * Pe, S += o * Te, G += o * Ce, o = _[9], q += o * De, z += o * _e, j += o * de, K += o * ge, oe += o * pe, W += o * ue, ie += o * ce, Z += o * ne, re += o * ye, F += o * me, N += o * ae, C += o * Ee, c += o * xe, S += o * Pe, G += o * Te, Q += o * Ce, o = _[10], z += o * De, j += o * _e, K += o * de, oe += o * ge, W += o * pe, ie += o * ue, Z += o * ce, re += o * ne, F += o * ye, N += o * me, C += o * ae, c += o * Ee, S += o * xe, G += o * Pe, Q += o * Te, be += o * Ce, o = _[11], j += o * De, K += o * _e, oe += o * de, W += o * ge, ie += o * pe, Z += o * ue, re += o * ce, F += o * ne, N += o * ye, C += o * me, c += o * ae, S += o * Ee, G += o * xe, Q += o * Pe, be += o * Te, ve += o * Ce, o = _[12], K += o * De, oe += o * _e, W += o * de, ie += o * ge, Z += o * pe, re += o * ue, F += o * ce, N += o * ne, C += o * ye, c += o * me, S += o * ae, G += o * Ee, Q += o * xe, be += o * Pe, ve += o * Te, he += o * Ce, o = _[13], oe += o * De, W += o * _e, ie += o * de, Z += o * ge, re += o * pe, F += o * ue, N += o * ce, C += o * ne, c += o * ye, S += o * me, G += o * ae, Q += o * Ee, be += o * xe, ve += o * Pe, he += o * Te, Ie += o * Ce, o = _[14], W += o * De, ie += o * _e, Z += o * de, re += o * ge, F += o * pe, N += o * ue, C += o * ce, c += o * ne, S += o * ye, G += o * me, Q += o * ae, be += o * Ee, ve += o * xe, he += o * Pe, Ie += o * Te, qe += o * Ce, o = _[15], ie += o * De, Z += o * _e, re += o * de, F += o * ge, N += o * pe, C += o * ue, c += o * ce, S += o * ne, G += o * ye, Q += o * me, be += o * ae, ve += o * Ee, he += o * xe, Ie += o * Pe, qe += o * Te, Le += o * Ce, A += 38 * Z, L += 38 * re, $ += 38 * F, V += 38 * N, Y += 38 * C, x += 38 * c, T += 38 * S, H += 38 * G, k += 38 * Q, q += 38 * be, z += 38 * ve, j += 38 * he, K += 38 * Ie, oe += 38 * qe, W += 38 * Le, g = 1, o = A + g + 65535, g = Math.floor(o / 65536), A = o - g * 65536, o = L + g + 65535, g = Math.floor(o / 65536), L = o - g * 65536, o = $ + g + 65535, g = Math.floor(o / 65536), $ = o - g * 65536, o = V + g + 65535, g = Math.floor(o / 65536), V = o - g * 65536, o = Y + g + 65535, g = Math.floor(o / 65536), Y = o - g * 65536, o = x + g + 65535, g = Math.floor(o / 65536), x = o - g * 65536, o = T + g + 65535, g = Math.floor(o / 65536), T = o - g * 65536, o = H + g + 65535, g = Math.floor(o / 65536), H = o - g * 65536, o = k + g + 65535, g = Math.floor(o / 65536), k = o - g * 65536, o = q + g + 65535, g = Math.floor(o / 65536), q = o - g * 65536, o = z + g + 65535, g = Math.floor(o / 65536), z = o - g * 65536, o = j + g + 65535, g = Math.floor(o / 65536), j = o - g * 65536, o = K + g + 65535, g = Math.floor(o / 65536), K = o - g * 65536, o = oe + g + 65535, g = Math.floor(o / 65536), oe = o - g * 65536, o = W + g + 65535, g = Math.floor(o / 65536), W = o - g * 65536, o = ie + g + 65535, g = Math.floor(o / 65536), ie = o - g * 65536, A += g - 1 + 37 * (g - 1), g = 1, o = A + g + 65535, g = Math.floor(o / 65536), A = o - g * 65536, o = L + g + 65535, g = Math.floor(o / 65536), L = o - g * 65536, o = $ + g + 65535, g = Math.floor(o / 65536), $ = o - g * 65536, o = V + g + 65535, g = Math.floor(o / 65536), V = o - g * 65536, o = Y + g + 65535, g = Math.floor(o / 65536), Y = o - g * 65536, o = x + g + 65535, g = Math.floor(o / 65536), x = o - g * 65536, o = T + g + 65535, g = Math.floor(o / 65536), T = o - g * 65536, o = H + g + 65535, g = Math.floor(o / 65536), H = o - g * 65536, o = k + g + 65535, g = Math.floor(o / 65536), k = o - g * 65536, o = q + g + 65535, g = Math.floor(o / 65536), q = o - g * 65536, o = z + g + 65535, g = Math.floor(o / 65536), z = o - g * 65536, o = j + g + 65535, g = Math.floor(o / 65536), j = o - g * 65536, o = K + g + 65535, g = Math.floor(o / 65536), K = o - g * 65536, o = oe + g + 65535, g = Math.floor(o / 65536), oe = o - g * 65536, o = W + g + 65535, g = Math.floor(o / 65536), W = o - g * 65536, o = ie + g + 65535, g = Math.floor(o / 65536), ie = o - g * 65536, A += g - 1 + 37 * (g - 1), b[0] = A, b[1] = L, b[2] = $, b[3] = V, b[4] = Y, b[5] = x, b[6] = T, b[7] = H, b[8] = k, b[9] = q, b[10] = z, b[11] = j, b[12] = K, b[13] = oe, b[14] = W, b[15] = ie;
  }
  function m(b, _) {
    y(b, _, _);
  }
  function D(b, _) {
    const d = i();
    for (let o = 0; o < 16; o++)
      d[o] = _[o];
    for (let o = 253; o >= 0; o--)
      m(d, d), o !== 2 && o !== 4 && y(d, d, _);
    for (let o = 0; o < 16; o++)
      b[o] = d[o];
  }
  function I(b, _) {
    const d = new Uint8Array(32), o = new Float64Array(80), g = i(), A = i(), L = i(), $ = i(), V = i(), Y = i();
    for (let k = 0; k < 31; k++)
      d[k] = b[k];
    d[31] = b[31] & 127 | 64, d[0] &= 248, f(o, _);
    for (let k = 0; k < 16; k++)
      A[k] = o[k];
    g[0] = $[0] = 1;
    for (let k = 254; k >= 0; --k) {
      const q = d[k >>> 3] >>> (k & 7) & 1;
      a(g, A, q), a(L, $, q), h(V, g, L), p(g, g, L), h(L, A, $), p(A, A, $), m($, V), m(Y, g), y(g, L, g), y(L, A, V), h(V, g, L), p(g, g, L), m(A, g), p(L, $, Y), y(g, L, s), h(g, g, $), y(L, L, g), y(g, $, Y), y($, A, o), m(A, V), a(g, A, q), a(L, $, q);
    }
    for (let k = 0; k < 16; k++)
      o[k + 16] = g[k], o[k + 32] = L[k], o[k + 48] = A[k], o[k + 64] = $[k];
    const x = o.subarray(32), T = o.subarray(16);
    D(x, x), y(T, T, x);
    const H = new Uint8Array(32);
    return l(H, T), H;
  }
  e.scalarMult = I;
  function P(b) {
    return I(b, n);
  }
  e.scalarMultBase = P;
  function U(b) {
    if (b.length !== e.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${e.SECRET_KEY_LENGTH} bytes`);
    const _ = new Uint8Array(b);
    return {
      publicKey: P(_),
      secretKey: _
    };
  }
  e.generateKeyPairFromSeed = U;
  function E(b) {
    const _ = (0, t.randomBytes)(32, b), d = U(_);
    return (0, r.wipe)(_), d;
  }
  e.generateKeyPair = E;
  function O(b, _, d = !1) {
    if (b.length !== e.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (_.length !== e.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const o = I(b, _);
    if (d) {
      let g = 0;
      for (let A = 0; A < o.length; A++)
        g |= o[A];
      if (g === 0)
        throw new Error("X25519: invalid shared key");
    }
    return o;
  }
  e.sharedKey = O;
})(zs);
var ga = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var i = 0, n = t.length, s; i < n; i++)
      (s || !(i in t)) && (s || (s = Array.prototype.slice.call(t, 0, i)), s[i] = t[i]);
  return e.concat(s || Array.prototype.slice.call(t));
}, wp = (
  /** @class */
  function() {
    function e(t, r, i) {
      this.name = t, this.version = r, this.os = i, this.type = "browser";
    }
    return e;
  }()
), _p = (
  /** @class */
  function() {
    function e(t) {
      this.version = t, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return e;
  }()
), Ep = (
  /** @class */
  function() {
    function e(t, r, i, n) {
      this.name = t, this.version = r, this.os = i, this.bot = n, this.type = "bot-device";
    }
    return e;
  }()
), Sp = (
  /** @class */
  function() {
    function e() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return e;
  }()
), Dp = (
  /** @class */
  function() {
    function e() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return e;
  }()
), Op = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, Ip = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, ya = 3, xp = [
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
  ["searchbot", Op]
], ba = [
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
function Cp(e) {
  return e ? va(e) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new Dp() : typeof navigator < "u" ? va(navigator.userAgent) : Pp();
}
function Rp(e) {
  return e !== "" && xp.reduce(function(t, r) {
    var i = r[0], n = r[1];
    if (t)
      return t;
    var s = n.exec(e);
    return !!s && [i, s];
  }, !1);
}
function va(e) {
  var t = Rp(e);
  if (!t)
    return null;
  var r = t[0], i = t[1];
  if (r === "searchbot")
    return new Sp();
  var n = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
  n ? n.length < ya && (n = ga(ga([], n, !0), Tp(ya - n.length), !0)) : n = [];
  var s = n.join("."), u = Ap(e), a = Ip.exec(e);
  return a && a[1] ? new Ep(r, s, u, a[1]) : new wp(r, s, u);
}
function Ap(e) {
  for (var t = 0, r = ba.length; t < r; t++) {
    var i = ba[t], n = i[0], s = i[1], u = s.exec(e);
    if (u)
      return n;
  }
  return null;
}
function Pp() {
  var e = typeof process < "u" && process.version;
  return e ? new _p(process.version.slice(1)) : null;
}
function Tp(e) {
  for (var t = [], r = 0; r < e; r++)
    t.push("0");
  return t;
}
var $e = {};
Object.defineProperty($e, "__esModule", { value: !0 });
$e.getLocalStorage = $e.getLocalStorageOrThrow = $e.getCrypto = $e.getCryptoOrThrow = pu = $e.getLocation = $e.getLocationOrThrow = ks = $e.getNavigator = $e.getNavigatorOrThrow = du = $e.getDocument = $e.getDocumentOrThrow = $e.getFromWindowOrThrow = $e.getFromWindow = void 0;
function qr(e) {
  let t;
  return typeof window < "u" && typeof window[e] < "u" && (t = window[e]), t;
}
$e.getFromWindow = qr;
function ii(e) {
  const t = qr(e);
  if (!t)
    throw new Error(`${e} is not defined in Window`);
  return t;
}
$e.getFromWindowOrThrow = ii;
function Np() {
  return ii("document");
}
$e.getDocumentOrThrow = Np;
function Lp() {
  return qr("document");
}
var du = $e.getDocument = Lp;
function Fp() {
  return ii("navigator");
}
$e.getNavigatorOrThrow = Fp;
function $p() {
  return qr("navigator");
}
var ks = $e.getNavigator = $p;
function Up() {
  return ii("location");
}
$e.getLocationOrThrow = Up;
function Mp() {
  return qr("location");
}
var pu = $e.getLocation = Mp;
function jp() {
  return ii("crypto");
}
$e.getCryptoOrThrow = jp;
function qp() {
  return qr("crypto");
}
$e.getCrypto = qp;
function Bp() {
  return ii("localStorage");
}
$e.getLocalStorageOrThrow = Bp;
function zp() {
  return qr("localStorage");
}
$e.getLocalStorage = zp;
var Vs = {};
Object.defineProperty(Vs, "__esModule", { value: !0 });
var gu = Vs.getWindowMetadata = void 0;
const ma = $e;
function kp() {
  let e, t;
  try {
    e = ma.getDocumentOrThrow(), t = ma.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const p = e.getElementsByTagName("link"), y = [];
    for (let m = 0; m < p.length; m++) {
      const D = p[m], I = D.getAttribute("rel");
      if (I && I.toLowerCase().indexOf("icon") > -1) {
        const P = D.getAttribute("href");
        if (P)
          if (P.toLowerCase().indexOf("https:") === -1 && P.toLowerCase().indexOf("http:") === -1 && P.indexOf("//") !== 0) {
            let U = t.protocol + "//" + t.host;
            if (P.indexOf("/") === 0)
              U += P;
            else {
              const E = t.pathname.split("/");
              E.pop();
              const O = E.join("/");
              U += O + "/" + P;
            }
            y.push(U);
          } else if (P.indexOf("//") === 0) {
            const U = t.protocol + P;
            y.push(U);
          } else
            y.push(P);
      }
    }
    return y;
  }
  function i(...p) {
    const y = e.getElementsByTagName("meta");
    for (let m = 0; m < y.length; m++) {
      const D = y[m], I = ["itemprop", "property", "name"].map((P) => D.getAttribute(P)).filter((P) => P ? p.includes(P) : !1);
      if (I.length && I) {
        const P = D.getAttribute("content");
        if (P)
          return P;
      }
    }
    return "";
  }
  function n() {
    let p = i("name", "og:site_name", "og:title", "twitter:title");
    return p || (p = e.title), p;
  }
  function s() {
    return i("description", "og:description", "twitter:description", "keywords");
  }
  const u = n(), a = s(), l = t.origin, f = r();
  return {
    description: a,
    url: l,
    icons: f,
    name: u
  };
}
gu = Vs.getWindowMetadata = kp;
var Ri = {}, Vp = (e) => encodeURIComponent(e).replace(/[!'()*]/g, (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`), yu = "%[a-f0-9]{2}", wa = new RegExp("(" + yu + ")|([^%]+?)", "gi"), _a = new RegExp("(" + yu + ")+", "gi");
function vs(e, t) {
  try {
    return [decodeURIComponent(e.join(""))];
  } catch {
  }
  if (e.length === 1)
    return e;
  t = t || 1;
  var r = e.slice(0, t), i = e.slice(t);
  return Array.prototype.concat.call([], vs(r), vs(i));
}
function Kp(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    for (var t = e.match(wa) || [], r = 1; r < t.length; r++)
      e = vs(t, r).join(""), t = e.match(wa) || [];
    return e;
  }
}
function Wp(e) {
  for (var t = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = _a.exec(e); r; ) {
    try {
      t[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var i = Kp(r[0]);
      i !== r[0] && (t[r[0]] = i);
    }
    r = _a.exec(e);
  }
  t["%C2"] = "�";
  for (var n = Object.keys(t), s = 0; s < n.length; s++) {
    var u = n[s];
    e = e.replace(new RegExp(u, "g"), t[u]);
  }
  return e;
}
var Hp = function(e) {
  if (typeof e != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
  try {
    return e = e.replace(/\+/g, " "), decodeURIComponent(e);
  } catch {
    return Wp(e);
  }
}, Gp = (e, t) => {
  if (!(typeof e == "string" && typeof t == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (t === "")
    return [e];
  const r = e.indexOf(t);
  return r === -1 ? [e] : [
    e.slice(0, r),
    e.slice(r + t.length)
  ];
}, Yp = function(e, t) {
  for (var r = {}, i = Object.keys(e), n = Array.isArray(t), s = 0; s < i.length; s++) {
    var u = i[s], a = e[u];
    (n ? t.indexOf(u) !== -1 : t(u, a, e)) && (r[u] = a);
  }
  return r;
};
(function(e) {
  const t = Vp, r = Hp, i = Gp, n = Yp, s = (E) => E == null, u = Symbol("encodeFragmentIdentifier");
  function a(E) {
    switch (E.arrayFormat) {
      case "index":
        return (O) => (b, _) => {
          const d = b.length;
          return _ === void 0 || E.skipNull && _ === null || E.skipEmptyString && _ === "" ? b : _ === null ? [...b, [h(O, E), "[", d, "]"].join("")] : [
            ...b,
            [h(O, E), "[", h(d, E), "]=", h(_, E)].join("")
          ];
        };
      case "bracket":
        return (O) => (b, _) => _ === void 0 || E.skipNull && _ === null || E.skipEmptyString && _ === "" ? b : _ === null ? [...b, [h(O, E), "[]"].join("")] : [...b, [h(O, E), "[]=", h(_, E)].join("")];
      case "colon-list-separator":
        return (O) => (b, _) => _ === void 0 || E.skipNull && _ === null || E.skipEmptyString && _ === "" ? b : _ === null ? [...b, [h(O, E), ":list="].join("")] : [...b, [h(O, E), ":list=", h(_, E)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const O = E.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (b) => (_, d) => d === void 0 || E.skipNull && d === null || E.skipEmptyString && d === "" ? _ : (d = d === null ? "" : d, _.length === 0 ? [[h(b, E), O, h(d, E)].join("")] : [[_, h(d, E)].join(E.arrayFormatSeparator)]);
      }
      default:
        return (O) => (b, _) => _ === void 0 || E.skipNull && _ === null || E.skipEmptyString && _ === "" ? b : _ === null ? [...b, h(O, E)] : [...b, [h(O, E), "=", h(_, E)].join("")];
    }
  }
  function l(E) {
    let O;
    switch (E.arrayFormat) {
      case "index":
        return (b, _, d) => {
          if (O = /\[(\d*)\]$/.exec(b), b = b.replace(/\[\d*\]$/, ""), !O) {
            d[b] = _;
            return;
          }
          d[b] === void 0 && (d[b] = {}), d[b][O[1]] = _;
        };
      case "bracket":
        return (b, _, d) => {
          if (O = /(\[\])$/.exec(b), b = b.replace(/\[\]$/, ""), !O) {
            d[b] = _;
            return;
          }
          if (d[b] === void 0) {
            d[b] = [_];
            return;
          }
          d[b] = [].concat(d[b], _);
        };
      case "colon-list-separator":
        return (b, _, d) => {
          if (O = /(:list)$/.exec(b), b = b.replace(/:list$/, ""), !O) {
            d[b] = _;
            return;
          }
          if (d[b] === void 0) {
            d[b] = [_];
            return;
          }
          d[b] = [].concat(d[b], _);
        };
      case "comma":
      case "separator":
        return (b, _, d) => {
          const o = typeof _ == "string" && _.includes(E.arrayFormatSeparator), g = typeof _ == "string" && !o && p(_, E).includes(E.arrayFormatSeparator);
          _ = g ? p(_, E) : _;
          const A = o || g ? _.split(E.arrayFormatSeparator).map((L) => p(L, E)) : _ === null ? _ : p(_, E);
          d[b] = A;
        };
      case "bracket-separator":
        return (b, _, d) => {
          const o = /(\[\])$/.test(b);
          if (b = b.replace(/\[\]$/, ""), !o) {
            d[b] = _ && p(_, E);
            return;
          }
          const g = _ === null ? [] : _.split(E.arrayFormatSeparator).map((A) => p(A, E));
          if (d[b] === void 0) {
            d[b] = g;
            return;
          }
          d[b] = [].concat(d[b], g);
        };
      default:
        return (b, _, d) => {
          if (d[b] === void 0) {
            d[b] = _;
            return;
          }
          d[b] = [].concat(d[b], _);
        };
    }
  }
  function f(E) {
    if (typeof E != "string" || E.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function h(E, O) {
    return O.encode ? O.strict ? t(E) : encodeURIComponent(E) : E;
  }
  function p(E, O) {
    return O.decode ? r(E) : E;
  }
  function y(E) {
    return Array.isArray(E) ? E.sort() : typeof E == "object" ? y(Object.keys(E)).sort((O, b) => Number(O) - Number(b)).map((O) => E[O]) : E;
  }
  function m(E) {
    const O = E.indexOf("#");
    return O !== -1 && (E = E.slice(0, O)), E;
  }
  function D(E) {
    let O = "";
    const b = E.indexOf("#");
    return b !== -1 && (O = E.slice(b)), O;
  }
  function I(E) {
    E = m(E);
    const O = E.indexOf("?");
    return O === -1 ? "" : E.slice(O + 1);
  }
  function P(E, O) {
    return O.parseNumbers && !Number.isNaN(Number(E)) && typeof E == "string" && E.trim() !== "" ? E = Number(E) : O.parseBooleans && E !== null && (E.toLowerCase() === "true" || E.toLowerCase() === "false") && (E = E.toLowerCase() === "true"), E;
  }
  function U(E, O) {
    O = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, O), f(O.arrayFormatSeparator);
    const b = l(O), _ = /* @__PURE__ */ Object.create(null);
    if (typeof E != "string" || (E = E.trim().replace(/^[?#&]/, ""), !E))
      return _;
    for (const d of E.split("&")) {
      if (d === "")
        continue;
      let [o, g] = i(O.decode ? d.replace(/\+/g, " ") : d, "=");
      g = g === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(O.arrayFormat) ? g : p(g, O), b(p(o, O), g, _);
    }
    for (const d of Object.keys(_)) {
      const o = _[d];
      if (typeof o == "object" && o !== null)
        for (const g of Object.keys(o))
          o[g] = P(o[g], O);
      else
        _[d] = P(o, O);
    }
    return O.sort === !1 ? _ : (O.sort === !0 ? Object.keys(_).sort() : Object.keys(_).sort(O.sort)).reduce((d, o) => {
      const g = _[o];
      return g && typeof g == "object" && !Array.isArray(g) ? d[o] = y(g) : d[o] = g, d;
    }, /* @__PURE__ */ Object.create(null));
  }
  e.extract = I, e.parse = U, e.stringify = (E, O) => {
    if (!E)
      return "";
    O = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, O), f(O.arrayFormatSeparator);
    const b = (g) => O.skipNull && s(E[g]) || O.skipEmptyString && E[g] === "", _ = a(O), d = {};
    for (const g of Object.keys(E))
      b(g) || (d[g] = E[g]);
    const o = Object.keys(d);
    return O.sort !== !1 && o.sort(O.sort), o.map((g) => {
      const A = E[g];
      return A === void 0 ? "" : A === null ? h(g, O) : Array.isArray(A) ? A.length === 0 && O.arrayFormat === "bracket-separator" ? h(g, O) + "[]" : A.reduce(_(g), []).join("&") : h(g, O) + "=" + h(A, O);
    }).filter((g) => g.length > 0).join("&");
  }, e.parseUrl = (E, O) => {
    O = Object.assign({
      decode: !0
    }, O);
    const [b, _] = i(E, "#");
    return Object.assign(
      {
        url: b.split("?")[0] || "",
        query: U(I(E), O)
      },
      O && O.parseFragmentIdentifier && _ ? { fragmentIdentifier: p(_, O) } : {}
    );
  }, e.stringifyUrl = (E, O) => {
    O = Object.assign({
      encode: !0,
      strict: !0,
      [u]: !0
    }, O);
    const b = m(E.url).split("?")[0] || "", _ = e.extract(E.url), d = e.parse(_, { sort: !1 }), o = Object.assign(d, E.query);
    let g = e.stringify(o, O);
    g && (g = `?${g}`);
    let A = D(E.url);
    return E.fragmentIdentifier && (A = `#${O[u] ? h(E.fragmentIdentifier, O) : E.fragmentIdentifier}`), `${b}${g}${A}`;
  }, e.pick = (E, O, b) => {
    b = Object.assign({
      parseFragmentIdentifier: !0,
      [u]: !1
    }, b);
    const { url: _, query: d, fragmentIdentifier: o } = e.parseUrl(E, b);
    return e.stringifyUrl({
      url: _,
      query: n(d, O),
      fragmentIdentifier: o
    }, b);
  }, e.exclude = (E, O, b) => {
    const _ = Array.isArray(O) ? (d) => !O.includes(d) : (d, o) => !O(d, o);
    return e.pick(E, _, b);
  };
})(Ri);
const Jp = {
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
function bu(e, t) {
  return e.includes(":") ? [e] : t.chains || [];
}
const vu = "base10", It = "base16", ms = "base64pad", Ks = "utf8", mu = 0, Br = 1, Xp = 0, Ea = 1, ws = 12, Ws = 32;
function Qp() {
  const e = zs.generateKeyPair();
  return { privateKey: xt(e.secretKey, It), publicKey: xt(e.publicKey, It) };
}
function _s() {
  const e = ri.randomBytes(Ws);
  return xt(e, It);
}
function Zp(e, t) {
  const r = zs.sharedKey(At(e, It), At(t, It)), i = new mp(Dn.SHA256, r).expand(Ws);
  return xt(i, It);
}
function eg(e) {
  const t = Dn.hash(At(e, It));
  return xt(t, It);
}
function Jr(e) {
  const t = Dn.hash(At(e, Ks));
  return xt(t, It);
}
function tg(e) {
  return At(`${e}`, vu);
}
function $i(e) {
  return Number(xt(e, vu));
}
function rg(e) {
  const t = tg(typeof e.type < "u" ? e.type : mu);
  if ($i(t) === Br && typeof e.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof e.senderPublicKey < "u" ? At(e.senderPublicKey, It) : void 0, i = typeof e.iv < "u" ? At(e.iv, It) : ri.randomBytes(ws), n = new qs.ChaCha20Poly1305(At(e.symKey, It)).seal(i, At(e.message, Ks));
  return ng({ type: t, sealed: n, iv: i, senderPublicKey: r });
}
function ig(e) {
  const t = new qs.ChaCha20Poly1305(At(e.symKey, It)), { sealed: r, iv: i } = cn(e.encoded), n = t.open(i, r);
  if (n === null)
    throw new Error("Failed to decrypt");
  return xt(n, Ks);
}
function ng(e) {
  if ($i(e.type) === Br) {
    if (typeof e.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return xt(ys([e.type, e.senderPublicKey, e.iv, e.sealed]), ms);
  }
  return xt(ys([e.type, e.iv, e.sealed]), ms);
}
function cn(e) {
  const t = At(e, ms), r = t.slice(Xp, Ea), i = Ea;
  if ($i(r) === Br) {
    const a = i + Ws, l = a + ws, f = t.slice(i, a), h = t.slice(a, l), p = t.slice(l);
    return { type: r, sealed: p, iv: h, senderPublicKey: f };
  }
  const n = i + ws, s = t.slice(i, n), u = t.slice(n);
  return { type: r, sealed: u, iv: s };
}
function sg(e, t) {
  const r = cn(e);
  return wu({ type: $i(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? xt(r.senderPublicKey, It) : void 0, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey });
}
function wu(e) {
  const t = (e == null ? void 0 : e.type) || mu;
  if (t === Br) {
    if (typeof (e == null ? void 0 : e.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (e == null ? void 0 : e.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: t, senderPublicKey: e == null ? void 0 : e.senderPublicKey, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey };
}
function Sa(e) {
  return e.type === Br && typeof e.senderPublicKey == "string" && typeof e.receiverPublicKey == "string";
}
var og = Object.defineProperty, Da = Object.getOwnPropertySymbols, ag = Object.prototype.hasOwnProperty, cg = Object.prototype.propertyIsEnumerable, Oa = (e, t, r) => t in e ? og(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Ia = (e, t) => {
  for (var r in t || (t = {}))
    ag.call(t, r) && Oa(e, r, t[r]);
  if (Da)
    for (var r of Da(t))
      cg.call(t, r) && Oa(e, r, t[r]);
  return e;
};
const ug = "ReactNative", Lt = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, lg = "js";
function Hs() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function On() {
  return !du() && !!ks() && navigator.product === ug;
}
function Ui() {
  return !Hs() && !!ks();
}
function Mi() {
  return On() ? Lt.reactNative : Hs() ? Lt.node : Ui() ? Lt.browser : Lt.unknown;
}
function fg(e, t) {
  let r = Ri.parse(e);
  return r = Ia(Ia({}, r), t), e = Ri.stringify(r), e;
}
function hg() {
  return gu() || { name: "", description: "", url: "", icons: [""] };
}
function dg() {
  if (Mi() === Lt.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: i } = global.Platform;
    return [r, i].join("-");
  }
  const e = Cp();
  if (e === null)
    return "unknown";
  const t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
  return e.type === "browser" ? [t, e.name, e.version].join("-") : [t, e.version].join("-");
}
function pg() {
  var e;
  const t = Mi();
  return t === Lt.browser ? [t, ((e = pu()) == null ? void 0 : e.host) || "unknown"].join(":") : t;
}
function gg(e, t, r) {
  const i = dg(), n = pg();
  return [[e, t].join("-"), [lg, r].join("-"), i, n].join("/");
}
function yg({ protocol: e, version: t, relayUrl: r, sdkVersion: i, auth: n, projectId: s, useOnCloseEvent: u }) {
  const a = r.split("?"), l = gg(e, t, i), f = { auth: n, ua: l, projectId: s, useOnCloseEvent: u || void 0 }, h = fg(a[1] || "", f);
  return a[0] + "?" + h;
}
function $r(e, t) {
  return e.filter((r) => t.includes(r)).length === e.length;
}
function _u(e) {
  return Object.fromEntries(e.entries());
}
function Eu(e) {
  return new Map(Object.entries(e));
}
function Hr(e = te.FIVE_MINUTES, t) {
  const r = te.toMiliseconds(e || te.FIVE_MINUTES);
  let i, n, s;
  return { resolve: (u) => {
    s && i && (clearTimeout(s), i(u));
  }, reject: (u) => {
    s && n && (clearTimeout(s), n(u));
  }, done: () => new Promise((u, a) => {
    s = setTimeout(() => {
      a(new Error(t));
    }, r), i = u, n = a;
  }) };
}
function Ai(e, t, r) {
  return new Promise(async (i, n) => {
    const s = setTimeout(() => n(new Error(r)), t);
    try {
      const u = await e;
      i(u);
    } catch (u) {
      n(u);
    }
    clearTimeout(s);
  });
}
function Su(e, t) {
  if (typeof t == "string" && t.startsWith(`${e}:`))
    return t;
  if (e.toLowerCase() === "topic") {
    if (typeof t != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${t}`;
  } else if (e.toLowerCase() === "id") {
    if (typeof t != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${t}`;
  }
  throw new Error(`Unknown expirer target type: ${e}`);
}
function bg(e) {
  return Su("topic", e);
}
function vg(e) {
  return Su("id", e);
}
function Du(e) {
  const [t, r] = e.split(":"), i = { id: void 0, topic: void 0 };
  if (t === "topic" && typeof r == "string")
    i.topic = r;
  else if (t === "id" && Number.isInteger(Number(r)))
    i.id = Number(r);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);
  return i;
}
function Gt(e, t) {
  return te.fromMiliseconds((t || Date.now()) + te.toMiliseconds(e));
}
function wr(e) {
  return Date.now() >= te.toMiliseconds(e);
}
function nt(e, t) {
  return `${e}${t ? `:${t}` : ""}`;
}
async function mg({ id: e, topic: t, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const i = typeof r == "string" ? JSON.parse(r) : r;
    let n = i == null ? void 0 : i.href;
    if (typeof n != "string")
      return;
    n.endsWith("/") && (n = n.slice(0, -1));
    const s = `${n}/wc?requestId=${e}&sessionTopic=${t}`, u = Mi();
    u === Lt.browser ? s.startsWith("https://") ? window.open(s, "_blank", "noreferrer noopener") : window.open(s, "_self", "noreferrer noopener") : u === Lt.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(s);
  } catch (i) {
    console.error(i);
  }
}
const wg = "irn";
function Es(e) {
  return (e == null ? void 0 : e.relay) || { protocol: wg };
}
function tn(e) {
  const t = Jp[e];
  if (typeof t > "u")
    throw new Error(`Relay Protocol not supported: ${e}`);
  return t;
}
var _g = Object.defineProperty, xa = Object.getOwnPropertySymbols, Eg = Object.prototype.hasOwnProperty, Sg = Object.prototype.propertyIsEnumerable, Ca = (e, t, r) => t in e ? _g(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Dg = (e, t) => {
  for (var r in t || (t = {}))
    Eg.call(t, r) && Ca(e, r, t[r]);
  if (xa)
    for (var r of xa(t))
      Sg.call(t, r) && Ca(e, r, t[r]);
  return e;
};
function Og(e, t = "-") {
  const r = {}, i = "relay" + t;
  return Object.keys(e).forEach((n) => {
    if (n.startsWith(i)) {
      const s = n.replace(i, ""), u = e[n];
      r[s] = u;
    }
  }), r;
}
function Ig(e) {
  const t = e.indexOf(":"), r = e.indexOf("?") !== -1 ? e.indexOf("?") : void 0, i = e.substring(0, t), n = e.substring(t + 1, r).split("@"), s = typeof r < "u" ? e.substring(r) : "", u = Ri.parse(s);
  return { protocol: i, topic: xg(n[0]), version: parseInt(n[1], 10), symKey: u.symKey, relay: Og(u) };
}
function xg(e) {
  return e.startsWith("//") ? e.substring(2) : e;
}
function Cg(e, t = "-") {
  const r = "relay", i = {};
  return Object.keys(e).forEach((n) => {
    const s = r + t + n;
    e[n] && (i[s] = e[n]);
  }), i;
}
function Rg(e) {
  return `${e.protocol}:${e.topic}@${e.version}?` + Ri.stringify(Dg({ symKey: e.symKey }, Cg(e.relay)));
}
function ni(e) {
  const t = [];
  return e.forEach((r) => {
    const [i, n] = r.split(":");
    t.push(`${i}:${n}`);
  }), t;
}
function Ag(e) {
  const t = [];
  return Object.values(e).forEach((r) => {
    t.push(...ni(r.accounts));
  }), t;
}
function Pg(e, t) {
  const r = [];
  return Object.values(e).forEach((i) => {
    ni(i.accounts).includes(t) && r.push(...i.methods);
  }), r;
}
function Tg(e, t) {
  const r = [];
  return Object.values(e).forEach((i) => {
    ni(i.accounts).includes(t) && r.push(...i.events);
  }), r;
}
function Ng(e, t) {
  const r = rn(e, t);
  if (r)
    throw new Error(r.message);
  const i = {};
  for (const [n, s] of Object.entries(e))
    i[n] = { methods: s.methods, events: s.events, chains: s.accounts.map((u) => `${u.split(":")[0]}:${u.split(":")[1]}`) };
  return i;
}
const Lg = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, Fg = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function X(e, t) {
  const { message: r, code: i } = Fg[e];
  return { message: t ? `${r} ${t}` : r, code: i };
}
function st(e, t) {
  const { message: r, code: i } = Lg[e];
  return { message: t ? `${r} ${t}` : r, code: i };
}
function ji(e, t) {
  return Array.isArray(e) ? typeof t < "u" && e.length ? e.every(t) : !0 : !1;
}
function Ii(e) {
  return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
}
function Ot(e) {
  return typeof e > "u";
}
function ut(e, t) {
  return t && Ot(e) ? !0 : typeof e == "string" && !!e.trim().length;
}
function Gs(e, t) {
  return t && Ot(e) ? !0 : typeof e == "number" && !isNaN(e);
}
function $g(e, t) {
  const { requiredNamespaces: r } = t, i = Object.keys(e.namespaces), n = Object.keys(r);
  let s = !0;
  return $r(n, i) ? (i.forEach((u) => {
    const { accounts: a, methods: l, events: f } = e.namespaces[u], h = ni(a), p = r[u];
    (!$r(bu(u, p), h) || !$r(p.methods, l) || !$r(p.events, f)) && (s = !1);
  }), s) : !1;
}
function un(e) {
  return ut(e, !1) && e.includes(":") ? e.split(":").length === 2 : !1;
}
function Ug(e) {
  if (ut(e, !1) && e.includes(":")) {
    const t = e.split(":");
    if (t.length === 3) {
      const r = t[0] + ":" + t[1];
      return !!t[2] && un(r);
    }
  }
  return !1;
}
function Mg(e) {
  if (ut(e, !1))
    try {
      return typeof new URL(e) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function jg(e) {
  var t;
  return (t = e == null ? void 0 : e.proposer) == null ? void 0 : t.publicKey;
}
function qg(e) {
  return e == null ? void 0 : e.topic;
}
function Bg(e, t) {
  let r = null;
  return ut(e == null ? void 0 : e.publicKey, !1) || (r = X("MISSING_OR_INVALID", `${t} controller public key should be a string`)), r;
}
function Ra(e) {
  let t = !0;
  return ji(e) ? e.length && (t = e.every((r) => ut(r, !1))) : t = !1, t;
}
function zg(e, t, r) {
  let i = null;
  return ji(t) && t.length ? t.forEach((n) => {
    i || un(n) || (i = st("UNSUPPORTED_CHAINS", `${r}, chain ${n} should be a string and conform to "namespace:chainId" format`));
  }) : un(e) || (i = st("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), i;
}
function kg(e, t, r) {
  let i = null;
  return Object.entries(e).forEach(([n, s]) => {
    if (i)
      return;
    const u = zg(n, bu(n, s), `${t} ${r}`);
    u && (i = u);
  }), i;
}
function Vg(e, t) {
  let r = null;
  return ji(e) ? e.forEach((i) => {
    r || Ug(i) || (r = st("UNSUPPORTED_ACCOUNTS", `${t}, account ${i} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = st("UNSUPPORTED_ACCOUNTS", `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function Kg(e, t) {
  let r = null;
  return Object.values(e).forEach((i) => {
    if (r)
      return;
    const n = Vg(i == null ? void 0 : i.accounts, `${t} namespace`);
    n && (r = n);
  }), r;
}
function Wg(e, t) {
  let r = null;
  return Ra(e == null ? void 0 : e.methods) ? Ra(e == null ? void 0 : e.events) || (r = st("UNSUPPORTED_EVENTS", `${t}, events should be an array of strings or empty array for no events`)) : r = st("UNSUPPORTED_METHODS", `${t}, methods should be an array of strings or empty array for no methods`), r;
}
function Ou(e, t) {
  let r = null;
  return Object.values(e).forEach((i) => {
    if (r)
      return;
    const n = Wg(i, `${t}, namespace`);
    n && (r = n);
  }), r;
}
function Hg(e, t, r) {
  let i = null;
  if (e && Ii(e)) {
    const n = Ou(e, t);
    n && (i = n);
    const s = kg(e, t, r);
    s && (i = s);
  } else
    i = X("MISSING_OR_INVALID", `${t}, ${r} should be an object with data`);
  return i;
}
function rn(e, t) {
  let r = null;
  if (e && Ii(e)) {
    const i = Ou(e, t);
    i && (r = i);
    const n = Kg(e, t);
    n && (r = n);
  } else
    r = X("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
  return r;
}
function Iu(e) {
  return ut(e.protocol, !0);
}
function Gg(e, t) {
  let r = !1;
  return t && !e ? r = !0 : e && ji(e) && e.length && e.forEach((i) => {
    r = Iu(i);
  }), r;
}
function Yg(e) {
  return typeof e == "number";
}
function Rt(e) {
  return typeof e < "u" && typeof e !== null;
}
function Jg(e) {
  return !(!e || typeof e != "object" || !e.code || !Gs(e.code, !1) || !e.message || !ut(e.message, !1));
}
function Xg(e) {
  return !(Ot(e) || !ut(e.method, !1));
}
function Qg(e) {
  return !(Ot(e) || Ot(e.result) && Ot(e.error) || !Gs(e.id, !1) || !ut(e.jsonrpc, !1));
}
function Zg(e) {
  return !(Ot(e) || !ut(e.name, !1));
}
function Aa(e, t) {
  return !(!un(t) || !Ag(e).includes(t));
}
function ey(e, t, r) {
  return ut(r, !1) ? Pg(e, t).includes(r) : !1;
}
function ty(e, t, r) {
  return ut(r, !1) ? Tg(e, t).includes(r) : !1;
}
function Pa(e, t, r) {
  let i = null;
  const n = ry(e), s = iy(t), u = Object.keys(n), a = Object.keys(s), l = Ta(Object.keys(e)), f = Ta(Object.keys(t)), h = l.filter((p) => !f.includes(p));
  return h.length && (i = X("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${h.toString()}
      Received: ${Object.keys(t).toString()}`)), $r(u, a) || (i = X("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${u.toString()}
      Approved: ${a.toString()}`)), Object.keys(t).forEach((p) => {
    if (!p.includes(":") || i)
      return;
    const y = ni(t[p].accounts);
    y.includes(p) || (i = X("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${p}
        Required: ${p}
        Approved: ${y.toString()}`));
  }), u.forEach((p) => {
    i || ($r(n[p].methods, s[p].methods) ? $r(n[p].events, s[p].events) || (i = X("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${p}`)) : i = X("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${p}`));
  }), i;
}
function ry(e) {
  const t = {};
  return Object.keys(e).forEach((r) => {
    var i;
    r.includes(":") ? t[r] = e[r] : (i = e[r].chains) == null || i.forEach((n) => {
      t[n] = { methods: e[r].methods, events: e[r].events };
    });
  }), t;
}
function Ta(e) {
  return [...new Set(e.map((t) => t.includes(":") ? t.split(":")[0] : t))];
}
function iy(e) {
  const t = {};
  return Object.keys(e).forEach((r) => {
    if (r.includes(":"))
      t[r] = e[r];
    else {
      const i = ni(e[r].accounts);
      i == null || i.forEach((n) => {
        t[n] = { accounts: e[r].accounts.filter((s) => s.includes(`${n}:`)), methods: e[r].methods, events: e[r].events };
      });
    }
  }), t;
}
function ny(e, t) {
  return Gs(e, !1) && e <= t.max && e >= t.min;
}
function Na() {
  const e = Mi();
  return new Promise((t) => {
    switch (e) {
      case Lt.browser:
        t(sy());
        break;
      case Lt.reactNative:
        t(oy());
        break;
      case Lt.node:
        t(ay());
        break;
      default:
        t(!0);
    }
  });
}
function sy() {
  return Ui() && (navigator == null ? void 0 : navigator.onLine);
}
async function oy() {
  if (On() && typeof global < "u" && global != null && global.NetInfo) {
    const e = await (global == null ? void 0 : global.NetInfo.fetch());
    return e == null ? void 0 : e.isConnected;
  }
  return !0;
}
function ay() {
  return !0;
}
function cy(e) {
  switch (Mi()) {
    case Lt.browser:
      uy(e);
      break;
    case Lt.reactNative:
      ly(e);
      break;
  }
}
function uy(e) {
  Ui() && (window.addEventListener("online", () => e(!0)), window.addEventListener("offline", () => e(!1)));
}
function ly(e) {
  On() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((t) => e(t == null ? void 0 : t.isConnected)));
}
const zn = {};
let Xi = class {
  static get(t) {
    return zn[t];
  }
  static set(t, r) {
    zn[t] = r;
  }
  static delete(t) {
    delete zn[t];
  }
};
const fy = "PARSE_ERROR", hy = "INVALID_REQUEST", dy = "METHOD_NOT_FOUND", py = "INVALID_PARAMS", xu = "INTERNAL_ERROR", Ys = "SERVER_ERROR", gy = [-32700, -32600, -32601, -32602, -32603], xi = {
  [fy]: { code: -32700, message: "Parse error" },
  [hy]: { code: -32600, message: "Invalid Request" },
  [dy]: { code: -32601, message: "Method not found" },
  [py]: { code: -32602, message: "Invalid params" },
  [xu]: { code: -32603, message: "Internal error" },
  [Ys]: { code: -32e3, message: "Server error" }
}, Cu = Ys;
function yy(e) {
  return gy.includes(e);
}
function La(e) {
  return Object.keys(xi).includes(e) ? xi[e] : xi[Cu];
}
function by(e) {
  const t = Object.values(xi).find((r) => r.code === e);
  return t || xi[Cu];
}
function vy(e, t, r) {
  return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${t}`) : e;
}
var Ru = {}, cr = {}, Fa;
function my() {
  if (Fa)
    return cr;
  Fa = 1, Object.defineProperty(cr, "__esModule", { value: !0 }), cr.isBrowserCryptoAvailable = cr.getSubtleCrypto = cr.getBrowerCrypto = void 0;
  function e() {
    return (Nt == null ? void 0 : Nt.crypto) || (Nt == null ? void 0 : Nt.msCrypto) || {};
  }
  cr.getBrowerCrypto = e;
  function t() {
    const i = e();
    return i.subtle || i.webkitSubtle;
  }
  cr.getSubtleCrypto = t;
  function r() {
    return !!e() && !!t();
  }
  return cr.isBrowserCryptoAvailable = r, cr;
}
var ur = {}, $a;
function wy() {
  if ($a)
    return ur;
  $a = 1, Object.defineProperty(ur, "__esModule", { value: !0 }), ur.isBrowser = ur.isNode = ur.isReactNative = void 0;
  function e() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  ur.isReactNative = e;
  function t() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  ur.isNode = t;
  function r() {
    return !e() && !t();
  }
  return ur.isBrowser = r, ur;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = Kt;
  t.__exportStar(my(), e), t.__exportStar(wy(), e);
})(Ru);
function Js(e = 3) {
  const t = Date.now() * Math.pow(10, e), r = Math.floor(Math.random() * Math.pow(10, e));
  return t + r;
}
function Au(e = 6) {
  return BigInt(Js(e));
}
function Pi(e, t, r) {
  return {
    id: r || Js(),
    jsonrpc: "2.0",
    method: e,
    params: t
  };
}
function Xs(e, t) {
  return {
    id: e,
    jsonrpc: "2.0",
    result: t
  };
}
function Qs(e, t, r) {
  return {
    id: e,
    jsonrpc: "2.0",
    error: _y(t, r)
  };
}
function _y(e, t) {
  return typeof e > "u" ? La(xu) : (typeof e == "string" && (e = Object.assign(Object.assign({}, La(Ys)), { message: e })), typeof t < "u" && (e.data = t), yy(e.code) && (e = by(e.code)), e);
}
class Ey {
}
class Sy extends Ey {
  constructor() {
    super();
  }
}
class Dy extends Sy {
  constructor(t) {
    super();
  }
}
const Oy = "^wss?:";
function Iy(e) {
  const t = e.match(new RegExp(/^\w+:/, "gi"));
  if (!(!t || !t.length))
    return t[0];
}
function xy(e, t) {
  const r = Iy(e);
  return typeof r > "u" ? !1 : new RegExp(t).test(r);
}
function Ua(e) {
  return xy(e, Oy);
}
function Cy(e) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(e);
}
function Pu(e) {
  return typeof e == "object" && "id" in e && "jsonrpc" in e && e.jsonrpc === "2.0";
}
function Zs(e) {
  return Pu(e) && "method" in e;
}
function In(e) {
  return Pu(e) && (hr(e) || Yt(e));
}
function hr(e) {
  return "result" in e;
}
function Yt(e) {
  return "error" in e;
}
class Ry extends Dy {
  constructor(t) {
    super(t), this.events = new Xt.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(t), this.connection.connected && this.registerEventListeners();
  }
  async connect(t = this.connection) {
    await this.open(t);
  }
  async disconnect() {
    await this.close();
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async request(t, r) {
    return this.requestStrict(Pi(t.method, t.params || [], t.id || Au().toString()), r);
  }
  async requestStrict(t, r) {
    return new Promise(async (i, n) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (s) {
          n(s);
        }
      this.events.on(`${t.id}`, (s) => {
        Yt(s) ? n(s.error) : i(s.result);
      });
      try {
        await this.connection.send(t, r);
      } catch (s) {
        n(s);
      }
    });
  }
  setConnection(t = this.connection) {
    return t;
  }
  onPayload(t) {
    this.events.emit("payload", t), In(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", {
      type: t.method,
      data: t.params
    });
  }
  onClose(t) {
    t && t.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason ? `(${t.reason})` : ""}`)), this.events.emit("disconnect");
  }
  async open(t = this.connection) {
    this.connection === t && this.connection.connected || (this.connection.connected && this.close(), typeof t == "string" && (await this.connection.open(t), t = this.connection), this.connection = this.setConnection(t), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners || (this.connection.on("payload", (t) => this.onPayload(t)), this.connection.on("close", (t) => this.onClose(t)), this.connection.on("error", (t) => this.events.emit("error", t)), this.connection.on("register_error", (t) => this.onClose()), this.hasRegisteredEventListeners = !0);
  }
}
const Ay = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), Py = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", Ma = (e) => e.split("?")[0], ja = 10, Ty = Ay();
class Ny {
  constructor(t) {
    if (this.url = t, this.events = new Xt.EventEmitter(), this.registering = !1, !Ua(t))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
    this.url = t;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async open(t = this.url) {
    await this.register(t);
  }
  async close() {
    return new Promise((t, r) => {
      if (typeof this.socket > "u") {
        r(new Error("Connection already closed"));
        return;
      }
      this.socket.onclose = (i) => {
        this.onClose(i), t();
      }, this.socket.close();
    });
  }
  async send(t, r) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(Us(t));
    } catch (i) {
      this.onError(t.id, i);
    }
  }
  register(t = this.url) {
    if (!Ua(t))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
    if (this.registering) {
      const r = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= r || this.events.listenerCount("open") >= r) && this.events.setMaxListeners(r + 1), new Promise((i, n) => {
        this.events.once("register_error", (s) => {
          this.resetMaxListeners(), n(s);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u")
            return n(new Error("WebSocket connection is missing or invalid"));
          i(this.socket);
        });
      });
    }
    return this.url = t, this.registering = !0, new Promise((r, i) => {
      const n = Ru.isReactNative() ? void 0 : { rejectUnauthorized: !Cy(t) }, s = new Ty(t, [], n);
      Py() ? s.onerror = (u) => {
        const a = u;
        i(this.emitError(a.error));
      } : s.on("error", (u) => {
        i(this.emitError(u));
      }), s.onopen = () => {
        this.onOpen(s), r(s);
      };
    });
  }
  onOpen(t) {
    t.onmessage = (r) => this.onPayload(r), t.onclose = (r) => this.onClose(r), this.socket = t, this.registering = !1, this.events.emit("open");
  }
  onClose(t) {
    this.socket = void 0, this.registering = !1, this.events.emit("close", t);
  }
  onPayload(t) {
    if (typeof t.data > "u")
      return;
    const r = typeof t.data == "string" ? Wc(t.data) : t.data;
    this.events.emit("payload", r);
  }
  onError(t, r) {
    const i = this.parseError(r), n = i.message || i.toString(), s = Qs(t, n);
    this.events.emit("payload", s);
  }
  parseError(t, r = this.url) {
    return vy(t, Ma(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > ja && this.events.setMaxListeners(ja);
  }
  emitError(t) {
    const r = this.parseError(new Error((t == null ? void 0 : t.message) || `WebSocket connection failed for host: ${Ma(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var ln = { exports: {} };
ln.exports;
(function(e, t) {
  var r = 200, i = "__lodash_hash_undefined__", n = 1, s = 2, u = 9007199254740991, a = "[object Arguments]", l = "[object Array]", f = "[object AsyncFunction]", h = "[object Boolean]", p = "[object Date]", y = "[object Error]", m = "[object Function]", D = "[object GeneratorFunction]", I = "[object Map]", P = "[object Number]", U = "[object Null]", E = "[object Object]", O = "[object Promise]", b = "[object Proxy]", _ = "[object RegExp]", d = "[object Set]", o = "[object String]", g = "[object Symbol]", A = "[object Undefined]", L = "[object WeakMap]", $ = "[object ArrayBuffer]", V = "[object DataView]", Y = "[object Float32Array]", x = "[object Float64Array]", T = "[object Int8Array]", H = "[object Int16Array]", k = "[object Int32Array]", q = "[object Uint8Array]", z = "[object Uint8ClampedArray]", j = "[object Uint16Array]", K = "[object Uint32Array]", oe = /[\\^$.*+?()[\]{}|]/g, W = /^\[object .+?Constructor\]$/, ie = /^(?:0|[1-9]\d*)$/, Z = {};
  Z[Y] = Z[x] = Z[T] = Z[H] = Z[k] = Z[q] = Z[z] = Z[j] = Z[K] = !0, Z[a] = Z[l] = Z[$] = Z[h] = Z[V] = Z[p] = Z[y] = Z[m] = Z[I] = Z[P] = Z[E] = Z[_] = Z[d] = Z[o] = Z[L] = !1;
  var re = typeof Nt == "object" && Nt && Nt.Object === Object && Nt, F = typeof self == "object" && self && self.Object === Object && self, N = re || F || Function("return this")(), C = t && !t.nodeType && t, c = C && !0 && e && !e.nodeType && e, S = c && c.exports === C, G = S && re.process, Q = function() {
    try {
      return G && G.binding && G.binding("util");
    } catch {
    }
  }(), be = Q && Q.isTypedArray;
  function ve(v, R) {
    for (var B = -1, ee = v == null ? 0 : v.length, je = 0, fe = []; ++B < ee; ) {
      var Je = v[B];
      R(Je, B, v) && (fe[je++] = Je);
    }
    return fe;
  }
  function he(v, R) {
    for (var B = -1, ee = R.length, je = v.length; ++B < ee; )
      v[je + B] = R[B];
    return v;
  }
  function Ie(v, R) {
    for (var B = -1, ee = v == null ? 0 : v.length; ++B < ee; )
      if (R(v[B], B, v))
        return !0;
    return !1;
  }
  function qe(v, R) {
    for (var B = -1, ee = Array(v); ++B < v; )
      ee[B] = R(B);
    return ee;
  }
  function Le(v) {
    return function(R) {
      return v(R);
    };
  }
  function De(v, R) {
    return v.has(R);
  }
  function _e(v, R) {
    return v == null ? void 0 : v[R];
  }
  function de(v) {
    var R = -1, B = Array(v.size);
    return v.forEach(function(ee, je) {
      B[++R] = [je, ee];
    }), B;
  }
  function ge(v, R) {
    return function(B) {
      return v(R(B));
    };
  }
  function pe(v) {
    var R = -1, B = Array(v.size);
    return v.forEach(function(ee) {
      B[++R] = ee;
    }), B;
  }
  var ue = Array.prototype, ce = Function.prototype, ne = Object.prototype, ye = N["__core-js_shared__"], me = ce.toString, ae = ne.hasOwnProperty, Ee = function() {
    var v = /[^.]+$/.exec(ye && ye.keys && ye.keys.IE_PROTO || "");
    return v ? "Symbol(src)_1." + v : "";
  }(), xe = ne.toString, Pe = RegExp(
    "^" + me.call(ae).replace(oe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Te = S ? N.Buffer : void 0, Ce = N.Symbol, Pt = N.Uint8Array, Mt = ne.propertyIsEnumerable, Qt = ue.splice, lt = Ce ? Ce.toStringTag : void 0, Zt = Object.getOwnPropertySymbols, jt = Te ? Te.isBuffer : void 0, pr = ge(Object.keys, Object), Be = kr(N, "DataView"), Ue = kr(N, "Map"), We = kr(N, "Promise"), ke = kr(N, "Set"), He = kr(N, "WeakMap"), Me = kr(Object, "create"), Xe = Dr(Be), et = Dr(Ue), tt = Dr(We), Qe = Dr(ke), rt = Dr(He), Ze = Ce ? Ce.prototype : void 0, Ge = Ze ? Ze.valueOf : void 0;
  function Fe(v) {
    var R = -1, B = v == null ? 0 : v.length;
    for (this.clear(); ++R < B; ) {
      var ee = v[R];
      this.set(ee[0], ee[1]);
    }
  }
  function w() {
    this.__data__ = Me ? Me(null) : {}, this.size = 0;
  }
  function M(v) {
    var R = this.has(v) && delete this.__data__[v];
    return this.size -= R ? 1 : 0, R;
  }
  function J(v) {
    var R = this.__data__;
    if (Me) {
      var B = R[v];
      return B === i ? void 0 : B;
    }
    return ae.call(R, v) ? R[v] : void 0;
  }
  function se(v) {
    var R = this.__data__;
    return Me ? R[v] !== void 0 : ae.call(R, v);
  }
  function Re(v, R) {
    var B = this.__data__;
    return this.size += this.has(v) ? 0 : 1, B[v] = Me && R === void 0 ? i : R, this;
  }
  Fe.prototype.clear = w, Fe.prototype.delete = M, Fe.prototype.get = J, Fe.prototype.has = se, Fe.prototype.set = Re;
  function Se(v) {
    var R = -1, B = v == null ? 0 : v.length;
    for (this.clear(); ++R < B; ) {
      var ee = v[R];
      this.set(ee[0], ee[1]);
    }
  }
  function Oe() {
    this.__data__ = [], this.size = 0;
  }
  function we(v) {
    var R = this.__data__, B = ki(R, v);
    if (B < 0)
      return !1;
    var ee = R.length - 1;
    return B == ee ? R.pop() : Qt.call(R, B, 1), --this.size, !0;
  }
  function ft(v) {
    var R = this.__data__, B = ki(R, v);
    return B < 0 ? void 0 : R[B][1];
  }
  function Ve(v) {
    return ki(this.__data__, v) > -1;
  }
  function Ye(v, R) {
    var B = this.__data__, ee = ki(B, v);
    return ee < 0 ? (++this.size, B.push([v, R])) : B[ee][1] = R, this;
  }
  Se.prototype.clear = Oe, Se.prototype.delete = we, Se.prototype.get = ft, Se.prototype.has = Ve, Se.prototype.set = Ye;
  function it(v) {
    var R = -1, B = v == null ? 0 : v.length;
    for (this.clear(); ++R < B; ) {
      var ee = v[R];
      this.set(ee[0], ee[1]);
    }
  }
  function gr() {
    this.size = 0, this.__data__ = {
      hash: new Fe(),
      map: new (Ue || Se)(),
      string: new Fe()
    };
  }
  function Bi(v) {
    var R = Vi(this, v).delete(v);
    return this.size -= R ? 1 : 0, R;
  }
  function Wt(v) {
    return Vi(this, v).get(v);
  }
  function sl(v) {
    return Vi(this, v).has(v);
  }
  function ol(v, R) {
    var B = Vi(this, v), ee = B.size;
    return B.set(v, R), this.size += B.size == ee ? 0 : 1, this;
  }
  it.prototype.clear = gr, it.prototype.delete = Bi, it.prototype.get = Wt, it.prototype.has = sl, it.prototype.set = ol;
  function zi(v) {
    var R = -1, B = v == null ? 0 : v.length;
    for (this.__data__ = new it(); ++R < B; )
      this.add(v[R]);
  }
  function al(v) {
    return this.__data__.set(v, i), this;
  }
  function cl(v) {
    return this.__data__.has(v);
  }
  zi.prototype.add = zi.prototype.push = al, zi.prototype.has = cl;
  function yr(v) {
    var R = this.__data__ = new Se(v);
    this.size = R.size;
  }
  function ul() {
    this.__data__ = new Se(), this.size = 0;
  }
  function ll(v) {
    var R = this.__data__, B = R.delete(v);
    return this.size = R.size, B;
  }
  function fl(v) {
    return this.__data__.get(v);
  }
  function hl(v) {
    return this.__data__.has(v);
  }
  function dl(v, R) {
    var B = this.__data__;
    if (B instanceof Se) {
      var ee = B.__data__;
      if (!Ue || ee.length < r - 1)
        return ee.push([v, R]), this.size = ++B.size, this;
      B = this.__data__ = new it(ee);
    }
    return B.set(v, R), this.size = B.size, this;
  }
  yr.prototype.clear = ul, yr.prototype.delete = ll, yr.prototype.get = fl, yr.prototype.has = hl, yr.prototype.set = dl;
  function pl(v, R) {
    var B = Ki(v), ee = !B && Rl(v), je = !B && !ee && Rn(v), fe = !B && !ee && !je && So(v), Je = B || ee || je || fe, ot = Je ? qe(v.length, String) : [], ht = ot.length;
    for (var Ke in v)
      (R || ae.call(v, Ke)) && !(Je && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Ke == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      je && (Ke == "offset" || Ke == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      fe && (Ke == "buffer" || Ke == "byteLength" || Ke == "byteOffset") || // Skip index properties.
      Dl(Ke, ht))) && ot.push(Ke);
    return ot;
  }
  function ki(v, R) {
    for (var B = v.length; B--; )
      if (mo(v[B][0], R))
        return B;
    return -1;
  }
  function gl(v, R, B) {
    var ee = R(v);
    return Ki(v) ? ee : he(ee, B(v));
  }
  function oi(v) {
    return v == null ? v === void 0 ? A : U : lt && lt in Object(v) ? El(v) : Cl(v);
  }
  function go(v) {
    return ai(v) && oi(v) == a;
  }
  function yo(v, R, B, ee, je) {
    return v === R ? !0 : v == null || R == null || !ai(v) && !ai(R) ? v !== v && R !== R : yl(v, R, B, ee, yo, je);
  }
  function yl(v, R, B, ee, je, fe) {
    var Je = Ki(v), ot = Ki(R), ht = Je ? l : br(v), Ke = ot ? l : br(R);
    ht = ht == a ? E : ht, Ke = Ke == a ? E : Ke;
    var Tt = ht == E, Ht = Ke == E, yt = ht == Ke;
    if (yt && Rn(v)) {
      if (!Rn(R))
        return !1;
      Je = !0, Tt = !1;
    }
    if (yt && !Tt)
      return fe || (fe = new yr()), Je || So(v) ? bo(v, R, B, ee, je, fe) : wl(v, R, ht, B, ee, je, fe);
    if (!(B & n)) {
      var qt = Tt && ae.call(v, "__wrapped__"), Bt = Ht && ae.call(R, "__wrapped__");
      if (qt || Bt) {
        var vr = qt ? v.value() : v, ar = Bt ? R.value() : R;
        return fe || (fe = new yr()), je(vr, ar, B, ee, fe);
      }
    }
    return yt ? (fe || (fe = new yr()), _l(v, R, B, ee, je, fe)) : !1;
  }
  function bl(v) {
    if (!Eo(v) || Il(v))
      return !1;
    var R = wo(v) ? Pe : W;
    return R.test(Dr(v));
  }
  function vl(v) {
    return ai(v) && _o(v.length) && !!Z[oi(v)];
  }
  function ml(v) {
    if (!xl(v))
      return pr(v);
    var R = [];
    for (var B in Object(v))
      ae.call(v, B) && B != "constructor" && R.push(B);
    return R;
  }
  function bo(v, R, B, ee, je, fe) {
    var Je = B & n, ot = v.length, ht = R.length;
    if (ot != ht && !(Je && ht > ot))
      return !1;
    var Ke = fe.get(v);
    if (Ke && fe.get(R))
      return Ke == R;
    var Tt = -1, Ht = !0, yt = B & s ? new zi() : void 0;
    for (fe.set(v, R), fe.set(R, v); ++Tt < ot; ) {
      var qt = v[Tt], Bt = R[Tt];
      if (ee)
        var vr = Je ? ee(Bt, qt, Tt, R, v, fe) : ee(qt, Bt, Tt, v, R, fe);
      if (vr !== void 0) {
        if (vr)
          continue;
        Ht = !1;
        break;
      }
      if (yt) {
        if (!Ie(R, function(ar, Or) {
          if (!De(yt, Or) && (qt === ar || je(qt, ar, B, ee, fe)))
            return yt.push(Or);
        })) {
          Ht = !1;
          break;
        }
      } else if (!(qt === Bt || je(qt, Bt, B, ee, fe))) {
        Ht = !1;
        break;
      }
    }
    return fe.delete(v), fe.delete(R), Ht;
  }
  function wl(v, R, B, ee, je, fe, Je) {
    switch (B) {
      case V:
        if (v.byteLength != R.byteLength || v.byteOffset != R.byteOffset)
          return !1;
        v = v.buffer, R = R.buffer;
      case $:
        return !(v.byteLength != R.byteLength || !fe(new Pt(v), new Pt(R)));
      case h:
      case p:
      case P:
        return mo(+v, +R);
      case y:
        return v.name == R.name && v.message == R.message;
      case _:
      case o:
        return v == R + "";
      case I:
        var ot = de;
      case d:
        var ht = ee & n;
        if (ot || (ot = pe), v.size != R.size && !ht)
          return !1;
        var Ke = Je.get(v);
        if (Ke)
          return Ke == R;
        ee |= s, Je.set(v, R);
        var Tt = bo(ot(v), ot(R), ee, je, fe, Je);
        return Je.delete(v), Tt;
      case g:
        if (Ge)
          return Ge.call(v) == Ge.call(R);
    }
    return !1;
  }
  function _l(v, R, B, ee, je, fe) {
    var Je = B & n, ot = vo(v), ht = ot.length, Ke = vo(R), Tt = Ke.length;
    if (ht != Tt && !Je)
      return !1;
    for (var Ht = ht; Ht--; ) {
      var yt = ot[Ht];
      if (!(Je ? yt in R : ae.call(R, yt)))
        return !1;
    }
    var qt = fe.get(v);
    if (qt && fe.get(R))
      return qt == R;
    var Bt = !0;
    fe.set(v, R), fe.set(R, v);
    for (var vr = Je; ++Ht < ht; ) {
      yt = ot[Ht];
      var ar = v[yt], Or = R[yt];
      if (ee)
        var Do = Je ? ee(Or, ar, yt, R, v, fe) : ee(ar, Or, yt, v, R, fe);
      if (!(Do === void 0 ? ar === Or || je(ar, Or, B, ee, fe) : Do)) {
        Bt = !1;
        break;
      }
      vr || (vr = yt == "constructor");
    }
    if (Bt && !vr) {
      var Wi = v.constructor, Hi = R.constructor;
      Wi != Hi && "constructor" in v && "constructor" in R && !(typeof Wi == "function" && Wi instanceof Wi && typeof Hi == "function" && Hi instanceof Hi) && (Bt = !1);
    }
    return fe.delete(v), fe.delete(R), Bt;
  }
  function vo(v) {
    return gl(v, Tl, Sl);
  }
  function Vi(v, R) {
    var B = v.__data__;
    return Ol(R) ? B[typeof R == "string" ? "string" : "hash"] : B.map;
  }
  function kr(v, R) {
    var B = _e(v, R);
    return bl(B) ? B : void 0;
  }
  function El(v) {
    var R = ae.call(v, lt), B = v[lt];
    try {
      v[lt] = void 0;
      var ee = !0;
    } catch {
    }
    var je = xe.call(v);
    return ee && (R ? v[lt] = B : delete v[lt]), je;
  }
  var Sl = Zt ? function(v) {
    return v == null ? [] : (v = Object(v), ve(Zt(v), function(R) {
      return Mt.call(v, R);
    }));
  } : Nl, br = oi;
  (Be && br(new Be(new ArrayBuffer(1))) != V || Ue && br(new Ue()) != I || We && br(We.resolve()) != O || ke && br(new ke()) != d || He && br(new He()) != L) && (br = function(v) {
    var R = oi(v), B = R == E ? v.constructor : void 0, ee = B ? Dr(B) : "";
    if (ee)
      switch (ee) {
        case Xe:
          return V;
        case et:
          return I;
        case tt:
          return O;
        case Qe:
          return d;
        case rt:
          return L;
      }
    return R;
  });
  function Dl(v, R) {
    return R = R ?? u, !!R && (typeof v == "number" || ie.test(v)) && v > -1 && v % 1 == 0 && v < R;
  }
  function Ol(v) {
    var R = typeof v;
    return R == "string" || R == "number" || R == "symbol" || R == "boolean" ? v !== "__proto__" : v === null;
  }
  function Il(v) {
    return !!Ee && Ee in v;
  }
  function xl(v) {
    var R = v && v.constructor, B = typeof R == "function" && R.prototype || ne;
    return v === B;
  }
  function Cl(v) {
    return xe.call(v);
  }
  function Dr(v) {
    if (v != null) {
      try {
        return me.call(v);
      } catch {
      }
      try {
        return v + "";
      } catch {
      }
    }
    return "";
  }
  function mo(v, R) {
    return v === R || v !== v && R !== R;
  }
  var Rl = go(function() {
    return arguments;
  }()) ? go : function(v) {
    return ai(v) && ae.call(v, "callee") && !Mt.call(v, "callee");
  }, Ki = Array.isArray;
  function Al(v) {
    return v != null && _o(v.length) && !wo(v);
  }
  var Rn = jt || Ll;
  function Pl(v, R) {
    return yo(v, R);
  }
  function wo(v) {
    if (!Eo(v))
      return !1;
    var R = oi(v);
    return R == m || R == D || R == f || R == b;
  }
  function _o(v) {
    return typeof v == "number" && v > -1 && v % 1 == 0 && v <= u;
  }
  function Eo(v) {
    var R = typeof v;
    return v != null && (R == "object" || R == "function");
  }
  function ai(v) {
    return v != null && typeof v == "object";
  }
  var So = be ? Le(be) : vl;
  function Tl(v) {
    return Al(v) ? pl(v) : ml(v);
  }
  function Nl() {
    return [];
  }
  function Ll() {
    return !1;
  }
  e.exports = Pl;
})(ln, ln.exports);
var Ly = ln.exports;
const Fy = /* @__PURE__ */ yn(Ly);
function $y(e, t) {
  if (e.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), i = 0; i < r.length; i++)
    r[i] = 255;
  for (var n = 0; n < e.length; n++) {
    var s = e.charAt(n), u = s.charCodeAt(0);
    if (r[u] !== 255)
      throw new TypeError(s + " is ambiguous");
    r[u] = n;
  }
  var a = e.length, l = e.charAt(0), f = Math.log(a) / Math.log(256), h = Math.log(256) / Math.log(a);
  function p(D) {
    if (D instanceof Uint8Array || (ArrayBuffer.isView(D) ? D = new Uint8Array(D.buffer, D.byteOffset, D.byteLength) : Array.isArray(D) && (D = Uint8Array.from(D))), !(D instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (D.length === 0)
      return "";
    for (var I = 0, P = 0, U = 0, E = D.length; U !== E && D[U] === 0; )
      U++, I++;
    for (var O = (E - U) * h + 1 >>> 0, b = new Uint8Array(O); U !== E; ) {
      for (var _ = D[U], d = 0, o = O - 1; (_ !== 0 || d < P) && o !== -1; o--, d++)
        _ += 256 * b[o] >>> 0, b[o] = _ % a >>> 0, _ = _ / a >>> 0;
      if (_ !== 0)
        throw new Error("Non-zero carry");
      P = d, U++;
    }
    for (var g = O - P; g !== O && b[g] === 0; )
      g++;
    for (var A = l.repeat(I); g < O; ++g)
      A += e.charAt(b[g]);
    return A;
  }
  function y(D) {
    if (typeof D != "string")
      throw new TypeError("Expected String");
    if (D.length === 0)
      return new Uint8Array();
    var I = 0;
    if (D[I] !== " ") {
      for (var P = 0, U = 0; D[I] === l; )
        P++, I++;
      for (var E = (D.length - I) * f + 1 >>> 0, O = new Uint8Array(E); D[I]; ) {
        var b = r[D.charCodeAt(I)];
        if (b === 255)
          return;
        for (var _ = 0, d = E - 1; (b !== 0 || _ < U) && d !== -1; d--, _++)
          b += a * O[d] >>> 0, O[d] = b % 256 >>> 0, b = b / 256 >>> 0;
        if (b !== 0)
          throw new Error("Non-zero carry");
        U = _, I++;
      }
      if (D[I] !== " ") {
        for (var o = E - U; o !== E && O[o] === 0; )
          o++;
        for (var g = new Uint8Array(P + (E - o)), A = P; o !== E; )
          g[A++] = O[o++];
        return g;
      }
    }
  }
  function m(D) {
    var I = y(D);
    if (I)
      return I;
    throw new Error(`Non-${t} character`);
  }
  return { encode: p, decodeUnsafe: y, decode: m };
}
var Uy = $y, My = Uy;
const Tu = (e) => {
  if (e instanceof Uint8Array && e.constructor.name === "Uint8Array")
    return e;
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  if (ArrayBuffer.isView(e))
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  throw new Error("Unknown type, must be binary type");
}, jy = (e) => new TextEncoder().encode(e), qy = (e) => new TextDecoder().decode(e);
class By {
  constructor(t, r, i) {
    this.name = t, this.prefix = r, this.baseEncode = i;
  }
  encode(t) {
    if (t instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class zy {
  constructor(t, r, i) {
    if (this.name = t, this.prefix = r, r.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = r.codePointAt(0), this.baseDecode = i;
  }
  decode(t) {
    if (typeof t == "string") {
      if (t.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(t.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(t) {
    return Nu(this, t);
  }
}
class ky {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return Nu(this, t);
  }
  decode(t) {
    const r = t[0], i = this.decoders[r];
    if (i)
      return i.decode(t);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Nu = (e, t) => new ky({ ...e.decoders || { [e.prefix]: e }, ...t.decoders || { [t.prefix]: t } });
class Vy {
  constructor(t, r, i, n) {
    this.name = t, this.prefix = r, this.baseEncode = i, this.baseDecode = n, this.encoder = new By(t, r, i), this.decoder = new zy(t, r, n);
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const xn = ({ name: e, prefix: t, encode: r, decode: i }) => new Vy(e, t, r, i), qi = ({ prefix: e, name: t, alphabet: r }) => {
  const { encode: i, decode: n } = My(r, t);
  return xn({ prefix: e, name: t, encode: i, decode: (s) => Tu(n(s)) });
}, Ky = (e, t, r, i) => {
  const n = {};
  for (let h = 0; h < t.length; ++h)
    n[t[h]] = h;
  let s = e.length;
  for (; e[s - 1] === "="; )
    --s;
  const u = new Uint8Array(s * r / 8 | 0);
  let a = 0, l = 0, f = 0;
  for (let h = 0; h < s; ++h) {
    const p = n[e[h]];
    if (p === void 0)
      throw new SyntaxError(`Non-${i} character`);
    l = l << r | p, a += r, a >= 8 && (a -= 8, u[f++] = 255 & l >> a);
  }
  if (a >= r || 255 & l << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return u;
}, Wy = (e, t, r) => {
  const i = t[t.length - 1] === "=", n = (1 << r) - 1;
  let s = "", u = 0, a = 0;
  for (let l = 0; l < e.length; ++l)
    for (a = a << 8 | e[l], u += 8; u > r; )
      u -= r, s += t[n & a >> u];
  if (u && (s += t[n & a << r - u]), i)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, gt = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) => xn({ prefix: t, name: e, encode(n) {
  return Wy(n, i, r);
}, decode(n) {
  return Ky(n, i, r, e);
} }), Hy = xn({ prefix: "\0", name: "identity", encode: (e) => qy(e), decode: (e) => jy(e) });
var Gy = Object.freeze({ __proto__: null, identity: Hy });
const Yy = gt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var Jy = Object.freeze({ __proto__: null, base2: Yy });
const Xy = gt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Qy = Object.freeze({ __proto__: null, base8: Xy });
const Zy = qi({ prefix: "9", name: "base10", alphabet: "0123456789" });
var e0 = Object.freeze({ __proto__: null, base10: Zy });
const t0 = gt({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), r0 = gt({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var i0 = Object.freeze({ __proto__: null, base16: t0, base16upper: r0 });
const n0 = gt({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), s0 = gt({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), o0 = gt({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), a0 = gt({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), c0 = gt({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), u0 = gt({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), l0 = gt({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), f0 = gt({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), h0 = gt({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var d0 = Object.freeze({ __proto__: null, base32: n0, base32upper: s0, base32pad: o0, base32padupper: a0, base32hex: c0, base32hexupper: u0, base32hexpad: l0, base32hexpadupper: f0, base32z: h0 });
const p0 = qi({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), g0 = qi({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var y0 = Object.freeze({ __proto__: null, base36: p0, base36upper: g0 });
const b0 = qi({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), v0 = qi({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var m0 = Object.freeze({ __proto__: null, base58btc: b0, base58flickr: v0 });
const w0 = gt({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), _0 = gt({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), E0 = gt({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), S0 = gt({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var D0 = Object.freeze({ __proto__: null, base64: w0, base64pad: _0, base64url: E0, base64urlpad: S0 });
const Lu = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), O0 = Lu.reduce((e, t, r) => (e[r] = t, e), []), I0 = Lu.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []);
function x0(e) {
  return e.reduce((t, r) => (t += O0[r], t), "");
}
function C0(e) {
  const t = [];
  for (const r of e) {
    const i = I0[r.codePointAt(0)];
    if (i === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    t.push(i);
  }
  return new Uint8Array(t);
}
const R0 = xn({ prefix: "🚀", name: "base256emoji", encode: x0, decode: C0 });
var A0 = Object.freeze({ __proto__: null, base256emoji: R0 }), P0 = Fu, qa = 128, T0 = 127, N0 = ~T0, L0 = Math.pow(2, 31);
function Fu(e, t, r) {
  t = t || [], r = r || 0;
  for (var i = r; e >= L0; )
    t[r++] = e & 255 | qa, e /= 128;
  for (; e & N0; )
    t[r++] = e & 255 | qa, e >>>= 7;
  return t[r] = e | 0, Fu.bytes = r - i + 1, t;
}
var F0 = Ss, $0 = 128, Ba = 127;
function Ss(e, i) {
  var r = 0, i = i || 0, n = 0, s = i, u, a = e.length;
  do {
    if (s >= a)
      throw Ss.bytes = 0, new RangeError("Could not decode varint");
    u = e[s++], r += n < 28 ? (u & Ba) << n : (u & Ba) * Math.pow(2, n), n += 7;
  } while (u >= $0);
  return Ss.bytes = s - i, r;
}
var U0 = Math.pow(2, 7), M0 = Math.pow(2, 14), j0 = Math.pow(2, 21), q0 = Math.pow(2, 28), B0 = Math.pow(2, 35), z0 = Math.pow(2, 42), k0 = Math.pow(2, 49), V0 = Math.pow(2, 56), K0 = Math.pow(2, 63), W0 = function(e) {
  return e < U0 ? 1 : e < M0 ? 2 : e < j0 ? 3 : e < q0 ? 4 : e < B0 ? 5 : e < z0 ? 6 : e < k0 ? 7 : e < V0 ? 8 : e < K0 ? 9 : 10;
}, H0 = { encode: P0, decode: F0, encodingLength: W0 }, $u = H0;
const za = (e, t, r = 0) => ($u.encode(e, t, r), t), ka = (e) => $u.encodingLength(e), Ds = (e, t) => {
  const r = t.byteLength, i = ka(e), n = i + ka(r), s = new Uint8Array(n + r);
  return za(e, s, 0), za(r, s, i), s.set(t, n), new G0(e, r, t, s);
};
class G0 {
  constructor(t, r, i, n) {
    this.code = t, this.size = r, this.digest = i, this.bytes = n;
  }
}
const Uu = ({ name: e, code: t, encode: r }) => new Y0(e, t, r);
class Y0 {
  constructor(t, r, i) {
    this.name = t, this.code = r, this.encode = i;
  }
  digest(t) {
    if (t instanceof Uint8Array) {
      const r = this.encode(t);
      return r instanceof Uint8Array ? Ds(this.code, r) : r.then((i) => Ds(this.code, i));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const Mu = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t)), J0 = Uu({ name: "sha2-256", code: 18, encode: Mu("SHA-256") }), X0 = Uu({ name: "sha2-512", code: 19, encode: Mu("SHA-512") });
var Q0 = Object.freeze({ __proto__: null, sha256: J0, sha512: X0 });
const ju = 0, Z0 = "identity", qu = Tu, eb = (e) => Ds(ju, qu(e)), tb = { code: ju, name: Z0, encode: qu, digest: eb };
var rb = Object.freeze({ __proto__: null, identity: tb });
new TextEncoder(), new TextDecoder();
const Va = { ...Gy, ...Jy, ...Qy, ...e0, ...i0, ...d0, ...y0, ...m0, ...D0, ...A0 };
({ ...Q0, ...rb });
function Bu(e) {
  return globalThis.Buffer != null ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e;
}
function ib(e = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Bu(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e);
}
function zu(e, t, r, i) {
  return { name: e, prefix: t, encoder: { name: e, prefix: t, encode: r }, decoder: { decode: i } };
}
const Ka = zu("utf8", "u", (e) => "u" + new TextDecoder("utf8").decode(e), (e) => new TextEncoder().encode(e.substring(1))), kn = zu("ascii", "a", (e) => {
  let t = "a";
  for (let r = 0; r < e.length; r++)
    t += String.fromCharCode(e[r]);
  return t;
}, (e) => {
  e = e.substring(1);
  const t = ib(e.length);
  for (let r = 0; r < e.length; r++)
    t[r] = e.charCodeAt(r);
  return t;
}), nb = { utf8: Ka, "utf-8": Ka, hex: Va.base16, latin1: kn, ascii: kn, binary: kn, ...Va };
function sb(e, t = "utf8") {
  const r = nb[t];
  if (!r)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Bu(globalThis.Buffer.from(e, "utf-8")) : r.decoder.decode(`${r.prefix}${e}`);
}
const ku = "wc", ob = 2, eo = "core", _r = `${ku}@2:${eo}:`, ab = { name: eo, logger: "error" }, cb = { database: ":memory:" }, ub = "crypto", Wa = "client_ed25519_seed", lb = te.ONE_DAY, fb = "keychain", hb = "0.3", db = "messages", pb = "0.3", gb = te.SIX_HOURS, yb = "publisher", Vu = "irn", bb = "error", Ku = "wss://relay.walletconnect.com", Ha = "wss://relay.walletconnect.org", vb = "relayer", Et = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, mb = "_subscription", lr = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, wb = te.ONE_SECOND, _b = "2.10.0", Eb = 1e4, Sb = "0.3", Db = "WALLETCONNECT_CLIENT_ID", nr = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, Ob = "subscription", Ib = "0.3", xb = te.FIVE_SECONDS * 1e3, Cb = "pairing", Rb = "0.3", vi = { wc_pairingDelete: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 0 } } }, ir = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, Ab = "history", Pb = "0.3", Tb = "expirer", zt = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, Nb = "0.3", Vn = "verify-api", nn = "https://verify.walletconnect.com", Ga = "https://verify.walletconnect.org";
class Lb {
  constructor(t, r) {
    this.core = t, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = fb, this.version = hb, this.initialized = !1, this.storagePrefix = _r, this.init = async () => {
      if (!this.initialized) {
        const i = await this.getKeyChain();
        typeof i < "u" && (this.keychain = i), this.initialized = !0;
      }
    }, this.has = (i) => (this.isInitialized(), this.keychain.has(i)), this.set = async (i, n) => {
      this.isInitialized(), this.keychain.set(i, n), await this.persist();
    }, this.get = (i) => {
      this.isInitialized();
      const n = this.keychain.get(i);
      if (typeof n > "u") {
        const { message: s } = X("NO_MATCHING_KEY", `${this.name}: ${i}`);
        throw new Error(s);
      }
      return n;
    }, this.del = async (i) => {
      this.isInitialized(), this.keychain.delete(i), await this.persist();
    }, this.core = t, this.logger = Ae.generateChildLogger(r, this.name);
  }
  get context() {
    return Ae.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setKeyChain(t) {
    await this.core.storage.setItem(this.storageKey, _u(t));
  }
  async getKeyChain() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < "u" ? Eu(t) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = X("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class Fb {
  constructor(t, r, i) {
    this.core = t, this.logger = r, this.name = ub, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (n) => (this.isInitialized(), this.keychain.has(n)), this.getClientId = async () => {
      this.isInitialized();
      const n = await this.getClientSeed(), s = ha(n);
      return au(s.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const n = Qp();
      return this.setPrivateKey(n.publicKey, n.privateKey);
    }, this.signJWT = async (n) => {
      this.isInitialized();
      const s = await this.getClientSeed(), u = ha(s), a = _s();
      return await op(a, n, lb, u);
    }, this.generateSharedKey = (n, s, u) => {
      this.isInitialized();
      const a = this.getPrivateKey(n), l = Zp(a, s);
      return this.setSymKey(l, u);
    }, this.setSymKey = async (n, s) => {
      this.isInitialized();
      const u = s || eg(n);
      return await this.keychain.set(u, n), u;
    }, this.deleteKeyPair = async (n) => {
      this.isInitialized(), await this.keychain.del(n);
    }, this.deleteSymKey = async (n) => {
      this.isInitialized(), await this.keychain.del(n);
    }, this.encode = async (n, s, u) => {
      this.isInitialized();
      const a = wu(u), l = Us(s);
      if (Sa(a)) {
        const y = a.senderPublicKey, m = a.receiverPublicKey;
        n = await this.generateSharedKey(y, m);
      }
      const f = this.getSymKey(n), { type: h, senderPublicKey: p } = a;
      return rg({ type: h, symKey: f, message: l, senderPublicKey: p });
    }, this.decode = async (n, s, u) => {
      this.isInitialized();
      const a = sg(s, u);
      if (Sa(a)) {
        const l = a.receiverPublicKey, f = a.senderPublicKey;
        n = await this.generateSharedKey(l, f);
      }
      try {
        const l = this.getSymKey(n), f = ig({ symKey: l, encoded: s });
        return Wc(f);
      } catch (l) {
        this.logger.error(`Failed to decode message from topic: '${n}', clientId: '${await this.getClientId()}'`), this.logger.error(l);
      }
    }, this.getPayloadType = (n) => {
      const s = cn(n);
      return $i(s.type);
    }, this.getPayloadSenderPublicKey = (n) => {
      const s = cn(n);
      return s.senderPublicKey ? xt(s.senderPublicKey, It) : void 0;
    }, this.core = t, this.logger = Ae.generateChildLogger(r, this.name), this.keychain = i || new Lb(this.core, this.logger);
  }
  get context() {
    return Ae.getLoggerContext(this.logger);
  }
  async setPrivateKey(t, r) {
    return await this.keychain.set(t, r), t;
  }
  getPrivateKey(t) {
    return this.keychain.get(t);
  }
  async getClientSeed() {
    let t = "";
    try {
      t = this.keychain.get(Wa);
    } catch {
      t = _s(), await this.keychain.set(Wa, t);
    }
    return sb(t, "base16");
  }
  getSymKey(t) {
    return this.keychain.get(t);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = X("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class $b extends uh {
  constructor(t, r) {
    super(t, r), this.logger = t, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = db, this.version = pb, this.initialized = !1, this.storagePrefix = _r, this.init = async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const i = await this.getRelayerMessages();
          typeof i < "u" && (this.messages = i), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (i) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i);
        } finally {
          this.initialized = !0;
        }
      }
    }, this.set = async (i, n) => {
      this.isInitialized();
      const s = Jr(n);
      let u = this.messages.get(i);
      return typeof u > "u" && (u = {}), typeof u[s] < "u" || (u[s] = n, this.messages.set(i, u), await this.persist()), s;
    }, this.get = (i) => {
      this.isInitialized();
      let n = this.messages.get(i);
      return typeof n > "u" && (n = {}), n;
    }, this.has = (i, n) => {
      this.isInitialized();
      const s = this.get(i), u = Jr(n);
      return typeof s[u] < "u";
    }, this.del = async (i) => {
      this.isInitialized(), this.messages.delete(i), await this.persist();
    }, this.logger = Ae.generateChildLogger(t, this.name), this.core = r;
  }
  get context() {
    return Ae.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setRelayerMessages(t) {
    await this.core.storage.setItem(this.storageKey, _u(t));
  }
  async getRelayerMessages() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < "u" ? Eu(t) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = X("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class Ub extends lh {
  constructor(t, r) {
    super(t, r), this.relayer = t, this.logger = r, this.events = new Xt.EventEmitter(), this.name = yb, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = te.toMiliseconds(te.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (i, n, s) => {
      var u;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i, message: n, opts: s } });
      try {
        const a = (s == null ? void 0 : s.ttl) || gb, l = Es(s), f = (s == null ? void 0 : s.prompt) || !1, h = (s == null ? void 0 : s.tag) || 0, p = (s == null ? void 0 : s.id) || Au().toString(), y = { topic: i, message: n, opts: { ttl: a, relay: l, prompt: f, tag: h, id: p } }, m = setTimeout(() => this.queue.set(p, y), this.publishTimeout);
        try {
          await await Ai(this.rpcPublish(i, n, a, l, f, h, p), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(p), this.relayer.events.emit(Et.publish, y);
        } catch (D) {
          if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, (u = s == null ? void 0 : s.internal) != null && u.throwOnFailedPublish)
            throw this.removeRequestFromQueue(p), D;
          return;
        } finally {
          clearTimeout(m);
        }
        this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i, message: n, opts: s } });
      } catch (a) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(a), a;
      }
    }, this.on = (i, n) => {
      this.events.on(i, n);
    }, this.once = (i, n) => {
      this.events.once(i, n);
    }, this.off = (i, n) => {
      this.events.off(i, n);
    }, this.removeListener = (i, n) => {
      this.events.removeListener(i, n);
    }, this.relayer = t, this.logger = Ae.generateChildLogger(r, this.name), this.registerEventListeners();
  }
  get context() {
    return Ae.getLoggerContext(this.logger);
  }
  rpcPublish(t, r, i, n, s, u, a) {
    var l, f, h, p;
    const y = { method: tn(n.protocol).publish, params: { topic: t, message: r, ttl: i, prompt: s, tag: u }, id: a };
    return Ot((l = y.params) == null ? void 0 : l.prompt) && ((f = y.params) == null || delete f.prompt), Ot((h = y.params) == null ? void 0 : h.tag) && ((p = y.params) == null || delete p.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: y }), this.relayer.request(y);
  }
  removeRequestFromQueue(t) {
    this.queue.delete(t);
  }
  checkQueue() {
    this.queue.forEach(async (t) => {
      const { topic: r, message: i, opts: n } = t;
      await this.publish(r, i, n);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(ti.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(Et.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(Et.message_ack, (t) => {
      this.removeRequestFromQueue(t.id.toString());
    });
  }
}
class Mb {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.set = (t, r) => {
      const i = this.get(t);
      this.exists(t, r) || this.map.set(t, [...i, r]);
    }, this.get = (t) => this.map.get(t) || [], this.exists = (t, r) => this.get(t).includes(r), this.delete = (t, r) => {
      if (typeof r > "u") {
        this.map.delete(t);
        return;
      }
      if (!this.map.has(t))
        return;
      const i = this.get(t);
      if (!this.exists(t, r))
        return;
      const n = i.filter((s) => s !== r);
      if (!n.length) {
        this.map.delete(t);
        return;
      }
      this.map.set(t, n);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var jb = Object.defineProperty, qb = Object.defineProperties, Bb = Object.getOwnPropertyDescriptors, Ya = Object.getOwnPropertySymbols, zb = Object.prototype.hasOwnProperty, kb = Object.prototype.propertyIsEnumerable, Ja = (e, t, r) => t in e ? jb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, mi = (e, t) => {
  for (var r in t || (t = {}))
    zb.call(t, r) && Ja(e, r, t[r]);
  if (Ya)
    for (var r of Ya(t))
      kb.call(t, r) && Ja(e, r, t[r]);
  return e;
}, Kn = (e, t) => qb(e, Bb(t));
class Vb extends dh {
  constructor(t, r) {
    super(t, r), this.relayer = t, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new Mb(), this.events = new Xt.EventEmitter(), this.name = Ob, this.version = Ib, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = _r, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (i, n) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: n } });
      try {
        const s = Es(n), u = { topic: i, relay: s };
        this.pending.set(i, u);
        const a = await this.rpcSubscribe(i, s);
        return this.onSubscribe(a, u), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: n } }), a;
      } catch (s) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(s), s;
      }
    }, this.unsubscribe = async (i, n) => {
      await this.restartToComplete(), this.isInitialized(), typeof (n == null ? void 0 : n.id) < "u" ? await this.unsubscribeById(i, n.id, n) : await this.unsubscribeByTopic(i, n);
    }, this.isSubscribed = async (i) => this.topics.includes(i) ? !0 : await new Promise((n, s) => {
      const u = new te.Watch();
      u.start(this.pendingSubscriptionWatchLabel);
      const a = setInterval(() => {
        !this.pending.has(i) && this.topics.includes(i) && (clearInterval(a), u.stop(this.pendingSubscriptionWatchLabel), n(!0)), u.elapsed(this.pendingSubscriptionWatchLabel) >= xb && (clearInterval(a), u.stop(this.pendingSubscriptionWatchLabel), s(new Error("Subscription resolution timeout")));
      }, this.pollingInterval);
    }).catch(() => !1), this.on = (i, n) => {
      this.events.on(i, n);
    }, this.once = (i, n) => {
      this.events.once(i, n);
    }, this.off = (i, n) => {
      this.events.off(i, n);
    }, this.removeListener = (i, n) => {
      this.events.removeListener(i, n);
    }, this.restart = async () => {
      this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1;
    }, this.relayer = t, this.logger = Ae.generateChildLogger(r, this.name), this.clientId = "";
  }
  get context() {
    return Ae.getLoggerContext(this.logger);
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
  hasSubscription(t, r) {
    let i = !1;
    try {
      i = this.getSubscription(t).topic === r;
    } catch {
    }
    return i;
  }
  onEnable() {
    this.cached = [], this.initialized = !0;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(t, r) {
    const i = this.topicMap.get(t);
    await Promise.all(i.map(async (n) => await this.unsubscribeById(t, n, r)));
  }
  async unsubscribeById(t, r, i) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: t, id: r, opts: i } });
    try {
      const n = Es(i);
      await this.rpcUnsubscribe(t, r, n);
      const s = st("USER_DISCONNECTED", `${this.name}, ${t}`);
      await this.onUnsubscribe(t, r, s), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: t, id: r, opts: i } });
    } catch (n) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(n), n;
    }
  }
  async rpcSubscribe(t, r) {
    const i = { method: tn(r.protocol).subscribe, params: { topic: t } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      await await Ai(this.relayer.request(i), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(Et.connection_stalled);
    }
    return Jr(t + this.clientId);
  }
  async rpcBatchSubscribe(t) {
    if (!t.length)
      return;
    const r = t[0].relay, i = { method: tn(r.protocol).batchSubscribe, params: { topics: t.map((n) => n.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      return await await Ai(this.relayer.request(i), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(Et.connection_stalled);
    }
  }
  rpcUnsubscribe(t, r, i) {
    const n = { method: tn(i.protocol).unsubscribe, params: { topic: t, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n }), this.relayer.request(n);
  }
  onSubscribe(t, r) {
    this.setSubscription(t, Kn(mi({}, r), { id: t })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(t) {
    t.length && t.forEach((r) => {
      this.setSubscription(r.id, mi({}, r)), this.pending.delete(r.topic);
    });
  }
  async onUnsubscribe(t, r, i) {
    this.events.removeAllListeners(r), this.hasSubscription(r, t) && this.deleteSubscription(r, i), await this.relayer.messages.del(t);
  }
  async setRelayerSubscriptions(t) {
    await this.relayer.core.storage.setItem(this.storageKey, t);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(t, r) {
    this.subscriptions.has(t) || (this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: t, subscription: r }), this.addSubscription(t, r));
  }
  addSubscription(t, r) {
    this.subscriptions.set(t, mi({}, r)), this.topicMap.set(r.topic, t), this.events.emit(nr.created, r);
  }
  getSubscription(t) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: t });
    const r = this.subscriptions.get(t);
    if (!r) {
      const { message: i } = X("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw new Error(i);
    }
    return r;
  }
  deleteSubscription(t, r) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: t, reason: r });
    const i = this.getSubscription(t);
    this.subscriptions.delete(t), this.topicMap.delete(i.topic, t), this.events.emit(nr.deleted, Kn(mi({}, i), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(nr.sync);
  }
  async reset() {
    if (this.cached.length) {
      const t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < t; r++) {
        const i = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(i);
      }
    }
    this.events.emit(nr.resubscribed);
  }
  async restore() {
    try {
      const t = await this.getRelayerSubscriptions();
      if (typeof t > "u" || !t.length)
        return;
      if (this.subscriptions.size) {
        const { message: r } = X("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(r);
      }
      this.cached = t, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (t) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(t);
    }
  }
  async batchSubscribe(t) {
    if (!t.length)
      return;
    const r = await this.rpcBatchSubscribe(t);
    ji(r) && this.onBatchSubscribe(r.map((i, n) => Kn(mi({}, t[n]), { id: i })));
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
    const t = [];
    this.pending.forEach((r) => {
      t.push(r);
    }), await this.batchSubscribe(t);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(ti.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(Et.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(Et.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(nr.created, async (t) => {
      const r = nr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), await this.persist();
    }), this.events.on(nr.deleted, async (t) => {
      const r = nr.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = X("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  async restartToComplete() {
    this.restartInProgress && await new Promise((t) => {
      const r = setInterval(() => {
        this.restartInProgress || (clearInterval(r), t());
      }, this.pollingInterval);
    });
  }
}
var Kb = Object.defineProperty, Xa = Object.getOwnPropertySymbols, Wb = Object.prototype.hasOwnProperty, Hb = Object.prototype.propertyIsEnumerable, Qa = (e, t, r) => t in e ? Kb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Gb = (e, t) => {
  for (var r in t || (t = {}))
    Wb.call(t, r) && Qa(e, r, t[r]);
  if (Xa)
    for (var r of Xa(t))
      Hb.call(t, r) && Qa(e, r, t[r]);
  return e;
};
class Yb extends fh {
  constructor(t) {
    super(t), this.protocol = "wc", this.version = 2, this.events = new Xt.EventEmitter(), this.name = vb, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async (r) => {
      this.logger.debug("Publishing Request Payload");
      try {
        return await this.toEstablishConnection(), await this.provider.request(r);
      } catch (i) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(i), i;
      }
    }, this.onPayloadHandler = (r) => {
      this.onProviderPayload(r);
    }, this.onConnectHandler = () => {
      this.events.emit(Et.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (r) => {
      this.logger.error(r), this.events.emit(Et.error, r);
    }, this.registerProviderListeners = () => {
      this.provider.on(lr.payload, this.onPayloadHandler), this.provider.on(lr.connect, this.onConnectHandler), this.provider.on(lr.disconnect, this.onDisconnectHandler), this.provider.on(lr.error, this.onProviderErrorHandler);
    }, this.core = t.core, this.logger = typeof t.logger < "u" && typeof t.logger != "string" ? Ae.generateChildLogger(t.logger, this.name) : Ae.pino(Ae.getDefaultLoggerOptions({ level: t.logger || bb })), this.messages = new $b(this.logger, t.core), this.subscriber = new Vb(this, this.logger), this.publisher = new Ub(this, this.logger), this.relayUrl = (t == null ? void 0 : t.relayUrl) || Ku, this.projectId = t.projectId, this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Ha}...`), await this.restartTransport(Ha);
    }
    this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, Eb);
  }
  get context() {
    return Ae.getLoggerContext(this.logger);
  }
  get connected() {
    return this.provider.connection.connected;
  }
  get connecting() {
    return this.provider.connection.connecting;
  }
  async publish(t, r, i) {
    this.isInitialized(), await this.publisher.publish(t, r, i), await this.recordMessageEvent({ topic: t, message: r, publishedAt: Date.now() });
  }
  async subscribe(t, r) {
    var i;
    this.isInitialized();
    let n = ((i = this.subscriber.topicMap.get(t)) == null ? void 0 : i[0]) || "";
    return n || (await Promise.all([new Promise((s) => {
      this.subscriber.once(nr.created, (u) => {
        u.topic === t && s();
      });
    }), new Promise(async (s) => {
      n = await this.subscriber.subscribe(t, r), s();
    })]), n);
  }
  async unsubscribe(t, r) {
    this.isInitialized(), await this.subscriber.unsubscribe(t, r);
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async transportClose() {
    this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await Ai(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
  }
  async transportOpen(t) {
    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
      t && t !== this.relayUrl && (this.relayUrl = t, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
      try {
        await Promise.all([new Promise((r) => {
          if (!this.initialized)
            return r();
          this.subscriber.once(nr.resubscribed, () => {
            r();
          });
        }), new Promise(async (r, i) => {
          try {
            await Ai(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
          } catch (n) {
            i(n);
            return;
          }
          r();
        })]);
      } catch (r) {
        this.logger.error(r);
        const i = r;
        if (!this.isConnectionStalled(i.message))
          throw r;
        this.provider.events.emit(lr.disconnect);
      } finally {
        this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1;
      }
    }
  }
  async restartTransport(t) {
    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = t || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await Na())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(t) {
    return this.staleConnectionErrors.some((r) => t.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const t = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new Ry(new Ny(yg({ sdkVersion: _b, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: t, useOnCloseEvent: !0 }))), this.registerProviderListeners();
  }
  async recordMessageEvent(t) {
    const { topic: r, message: i } = t;
    await this.messages.set(r, i);
  }
  async shouldIgnoreMessageEvent(t) {
    const { topic: r, message: i } = t;
    if (!i || i.length === 0)
      return this.logger.debug(`Ignoring invalid/empty message: ${i}`), !0;
    if (!await this.subscriber.isSubscribed(r))
      return this.logger.debug(`Ignoring message for non-subscribed topic ${r}`), !0;
    const n = this.messages.has(r, i);
    return n && this.logger.debug(`Ignoring duplicate message: ${i}`), n;
  }
  async onProviderPayload(t) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: t }), Zs(t)) {
      if (!t.method.endsWith(mb))
        return;
      const r = t.params, { topic: i, message: n, publishedAt: s } = r.data, u = { topic: i, message: n, publishedAt: s };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Gb({ type: "event", event: r.id }, u)), this.events.emit(r.id, u), await this.acknowledgePayload(t), await this.onMessageEvent(u);
    } else
      In(t) && this.events.emit(Et.message_ack, t);
  }
  async onMessageEvent(t) {
    await this.shouldIgnoreMessageEvent(t) || (this.events.emit(Et.message, t), await this.recordMessageEvent(t));
  }
  async acknowledgePayload(t) {
    const r = Xs(t.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(lr.payload, this.onPayloadHandler), this.provider.off(lr.connect, this.onConnectHandler), this.provider.off(lr.disconnect, this.onDisconnectHandler), this.provider.off(lr.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(Et.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let t = await Na();
    cy(async (r) => {
      this.initialized && t !== r && (t = r, r ? await this.restartTransport().catch((i) => this.logger.error(i)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((i) => this.logger.error(i))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(Et.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((t) => this.logger.error(t));
    }, te.toMiliseconds(wb)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = X("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  async toEstablishConnection() {
    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
      if (this.connectionAttemptInProgress)
        return await new Promise((t) => {
          const r = setInterval(() => {
            this.connected && (clearInterval(r), t());
          }, this.connectionStatusPollingInterval);
        });
      await this.restartTransport();
    }
  }
}
var Jb = Object.defineProperty, Za = Object.getOwnPropertySymbols, Xb = Object.prototype.hasOwnProperty, Qb = Object.prototype.propertyIsEnumerable, ec = (e, t, r) => t in e ? Jb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, tc = (e, t) => {
  for (var r in t || (t = {}))
    Xb.call(t, r) && ec(e, r, t[r]);
  if (Za)
    for (var r of Za(t))
      Qb.call(t, r) && ec(e, r, t[r]);
  return e;
};
class Cn extends hh {
  constructor(t, r, i, n = _r, s = void 0) {
    super(t, r, i, n), this.core = t, this.logger = r, this.name = i, this.map = /* @__PURE__ */ new Map(), this.version = Sb, this.cached = [], this.initialized = !1, this.storagePrefix = _r, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((u) => {
        this.getKey && u !== null && !Ot(u) ? this.map.set(this.getKey(u), u) : jg(u) ? this.map.set(u.id, u) : qg(u) && this.map.set(u.topic, u);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (u, a) => {
      this.isInitialized(), this.map.has(u) ? await this.update(u, a) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: u, value: a }), this.map.set(u, a), await this.persist());
    }, this.get = (u) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: u }), this.getData(u)), this.getAll = (u) => (this.isInitialized(), u ? this.values.filter((a) => Object.keys(u).every((l) => Fy(a[l], u[l]))) : this.values), this.update = async (u, a) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: u, update: a });
      const l = tc(tc({}, this.getData(u)), a);
      this.map.set(u, l), await this.persist();
    }, this.delete = async (u, a) => {
      this.isInitialized(), this.map.has(u) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: u, reason: a }), this.map.delete(u), await this.persist());
    }, this.logger = Ae.generateChildLogger(r, this.name), this.storagePrefix = n, this.getKey = s;
  }
  get context() {
    return Ae.getLoggerContext(this.logger);
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
  async setDataStore(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(t) {
    const r = this.map.get(t);
    if (!r) {
      const { message: i } = X("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw this.logger.error(i), new Error(i);
    }
    return r;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const t = await this.getDataStore();
      if (typeof t > "u" || !t.length)
        return;
      if (this.map.size) {
        const { message: r } = X("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = t, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (t) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(t);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = X("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class Zb {
  constructor(t, r) {
    this.core = t, this.logger = r, this.name = Cb, this.version = Rb, this.events = new jc(), this.initialized = !1, this.storagePrefix = _r, this.ignoredPayloadTypes = [Br], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: i }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i])];
    }, this.create = async () => {
      this.isInitialized();
      const i = _s(), n = await this.core.crypto.setSymKey(i), s = Gt(te.FIVE_MINUTES), u = { protocol: Vu }, a = { topic: n, expiry: s, relay: u, active: !1 }, l = Rg({ protocol: this.core.protocol, version: this.core.version, topic: n, symKey: i, relay: u });
      return await this.pairings.set(n, a), await this.core.relayer.subscribe(n), this.core.expirer.set(n, s), { topic: n, uri: l };
    }, this.pair = async (i) => {
      this.isInitialized(), this.isValidPair(i);
      const { topic: n, symKey: s, relay: u } = Ig(i.uri);
      if (this.pairings.keys.includes(n))
        throw new Error(`Pairing already exists: ${n}`);
      if (this.core.crypto.hasKeys(n))
        throw new Error(`Keychain already exists: ${n}`);
      const a = Gt(te.FIVE_MINUTES), l = { topic: n, relay: u, expiry: a, active: !1 };
      return await this.pairings.set(n, l), await this.core.crypto.setSymKey(s, n), await this.core.relayer.subscribe(n, { relay: u }), this.core.expirer.set(n, a), i.activatePairing && await this.activate({ topic: n }), l;
    }, this.activate = async ({ topic: i }) => {
      this.isInitialized();
      const n = Gt(te.THIRTY_DAYS);
      await this.pairings.update(i, { active: !0, expiry: n }), this.core.expirer.set(i, n);
    }, this.ping = async (i) => {
      this.isInitialized(), await this.isValidPing(i);
      const { topic: n } = i;
      if (this.pairings.keys.includes(n)) {
        const s = await this.sendRequest(n, "wc_pairingPing", {}), { done: u, resolve: a, reject: l } = Hr();
        this.events.once(nt("pairing_ping", s), ({ error: f }) => {
          f ? l(f) : a();
        }), await u();
      }
    }, this.updateExpiry = async ({ topic: i, expiry: n }) => {
      this.isInitialized(), await this.pairings.update(i, { expiry: n });
    }, this.updateMetadata = async ({ topic: i, metadata: n }) => {
      this.isInitialized(), await this.pairings.update(i, { peerMetadata: n });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (i) => {
      this.isInitialized(), await this.isValidDisconnect(i);
      const { topic: n } = i;
      this.pairings.keys.includes(n) && (await this.sendRequest(n, "wc_pairingDelete", st("USER_DISCONNECTED")), await this.deletePairing(n));
    }, this.sendRequest = async (i, n, s) => {
      const u = Pi(n, s), a = await this.core.crypto.encode(i, u), l = vi[n].req;
      return this.core.history.set(i, u), this.core.relayer.publish(i, a, l), u.id;
    }, this.sendResult = async (i, n, s) => {
      const u = Xs(i, s), a = await this.core.crypto.encode(n, u), l = await this.core.history.get(n, i), f = vi[l.request.method].res;
      await this.core.relayer.publish(n, a, f), await this.core.history.resolve(u);
    }, this.sendError = async (i, n, s) => {
      const u = Qs(i, s), a = await this.core.crypto.encode(n, u), l = await this.core.history.get(n, i), f = vi[l.request.method] ? vi[l.request.method].res : vi.unregistered_method.res;
      await this.core.relayer.publish(n, a, f), await this.core.history.resolve(u);
    }, this.deletePairing = async (i, n) => {
      await this.core.relayer.unsubscribe(i), await Promise.all([this.pairings.delete(i, st("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i), n ? Promise.resolve() : this.core.expirer.del(i)]);
    }, this.cleanup = async () => {
      const i = this.pairings.getAll().filter((n) => wr(n.expiry));
      await Promise.all(i.map((n) => this.deletePairing(n.topic)));
    }, this.onRelayEventRequest = (i) => {
      const { topic: n, payload: s } = i;
      switch (s.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(n, s);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(n, s);
        default:
          return this.onUnknownRpcMethodRequest(n, s);
      }
    }, this.onRelayEventResponse = async (i) => {
      const { topic: n, payload: s } = i, u = (await this.core.history.get(n, s.id)).request.method;
      switch (u) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(n, s);
        default:
          return this.onUnknownRpcMethodResponse(u);
      }
    }, this.onPairingPingRequest = async (i, n) => {
      const { id: s } = n;
      try {
        this.isValidPing({ topic: i }), await this.sendResult(s, i, !0), this.events.emit("pairing_ping", { id: s, topic: i });
      } catch (u) {
        await this.sendError(s, i, u), this.logger.error(u);
      }
    }, this.onPairingPingResponse = (i, n) => {
      const { id: s } = n;
      setTimeout(() => {
        hr(n) ? this.events.emit(nt("pairing_ping", s), {}) : Yt(n) && this.events.emit(nt("pairing_ping", s), { error: n.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (i, n) => {
      const { id: s } = n;
      try {
        this.isValidDisconnect({ topic: i }), await this.deletePairing(i), this.events.emit("pairing_delete", { id: s, topic: i });
      } catch (u) {
        await this.sendError(s, i, u), this.logger.error(u);
      }
    }, this.onUnknownRpcMethodRequest = async (i, n) => {
      const { id: s, method: u } = n;
      try {
        if (this.registeredMethods.includes(u))
          return;
        const a = st("WC_METHOD_UNSUPPORTED", u);
        await this.sendError(s, i, a), this.logger.error(a);
      } catch (a) {
        await this.sendError(s, i, a), this.logger.error(a);
      }
    }, this.onUnknownRpcMethodResponse = (i) => {
      this.registeredMethods.includes(i) || this.logger.error(st("WC_METHOD_UNSUPPORTED", i));
    }, this.isValidPair = (i) => {
      if (!Rt(i)) {
        const { message: n } = X("MISSING_OR_INVALID", `pair() params: ${i}`);
        throw new Error(n);
      }
      if (!Mg(i.uri)) {
        const { message: n } = X("MISSING_OR_INVALID", `pair() uri: ${i.uri}`);
        throw new Error(n);
      }
    }, this.isValidPing = async (i) => {
      if (!Rt(i)) {
        const { message: s } = X("MISSING_OR_INVALID", `ping() params: ${i}`);
        throw new Error(s);
      }
      const { topic: n } = i;
      await this.isValidPairingTopic(n);
    }, this.isValidDisconnect = async (i) => {
      if (!Rt(i)) {
        const { message: s } = X("MISSING_OR_INVALID", `disconnect() params: ${i}`);
        throw new Error(s);
      }
      const { topic: n } = i;
      await this.isValidPairingTopic(n);
    }, this.isValidPairingTopic = async (i) => {
      if (!ut(i, !1)) {
        const { message: n } = X("MISSING_OR_INVALID", `pairing topic should be a string: ${i}`);
        throw new Error(n);
      }
      if (!this.pairings.keys.includes(i)) {
        const { message: n } = X("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i}`);
        throw new Error(n);
      }
      if (wr(this.pairings.get(i).expiry)) {
        await this.deletePairing(i);
        const { message: n } = X("EXPIRED", `pairing topic: ${i}`);
        throw new Error(n);
      }
    }, this.core = t, this.logger = Ae.generateChildLogger(r, this.name), this.pairings = new Cn(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return Ae.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = X("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(Et.message, async (t) => {
      const { topic: r, message: i } = t;
      if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i)))
        return;
      const n = await this.core.crypto.decode(r, i);
      try {
        Zs(n) ? (this.core.history.set(r, n), this.onRelayEventRequest({ topic: r, payload: n })) : In(n) && (await this.core.history.resolve(n), await this.onRelayEventResponse({ topic: r, payload: n }), this.core.history.delete(r, n.id));
      } catch (s) {
        this.logger.error(s);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(zt.expired, async (t) => {
      const { topic: r } = Du(t.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit("pairing_expire", { topic: r }));
    });
  }
}
class ev extends ch {
  constructor(t, r) {
    super(t, r), this.core = t, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new Xt.EventEmitter(), this.name = Ab, this.version = Pb, this.cached = [], this.initialized = !1, this.storagePrefix = _r, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.records.set(i.id, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (i, n, s) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: i, request: n, chainId: s }), this.records.has(n.id))
        return;
      const u = { id: n.id, topic: i, request: { method: n.method, params: n.params || null }, chainId: s, expiry: Gt(te.THIRTY_DAYS) };
      this.records.set(u.id, u), this.events.emit(ir.created, u);
    }, this.resolve = async (i) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: i }), !this.records.has(i.id))
        return;
      const n = await this.getRecord(i.id);
      typeof n.response > "u" && (n.response = Yt(i) ? { error: i.error } : { result: i.result }, this.records.set(n.id, n), this.events.emit(ir.updated, n));
    }, this.get = async (i, n) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: i, id: n }), await this.getRecord(n)), this.delete = (i, n) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: n }), this.values.forEach((s) => {
        if (s.topic === i) {
          if (typeof n < "u" && s.id !== n)
            return;
          this.records.delete(s.id), this.events.emit(ir.deleted, s);
        }
      });
    }, this.exists = async (i, n) => (this.isInitialized(), this.records.has(n) ? (await this.getRecord(n)).topic === i : !1), this.on = (i, n) => {
      this.events.on(i, n);
    }, this.once = (i, n) => {
      this.events.once(i, n);
    }, this.off = (i, n) => {
      this.events.off(i, n);
    }, this.removeListener = (i, n) => {
      this.events.removeListener(i, n);
    }, this.logger = Ae.generateChildLogger(r, this.name);
  }
  get context() {
    return Ae.getLoggerContext(this.logger);
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
    const t = [];
    return this.values.forEach((r) => {
      if (typeof r.response < "u")
        return;
      const i = { topic: r.topic, request: Pi(r.request.method, r.request.params, r.id), chainId: r.chainId };
      return t.push(i);
    }), t;
  }
  async setJsonRpcRecords(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(t) {
    this.isInitialized();
    const r = this.records.get(t);
    if (!r) {
      const { message: i } = X("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw new Error(i);
    }
    return r;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(ir.sync);
  }
  async restore() {
    try {
      const t = await this.getJsonRpcRecords();
      if (typeof t > "u" || !t.length)
        return;
      if (this.records.size) {
        const { message: r } = X("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = t, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (t) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(t);
    }
  }
  registerEventListeners() {
    this.events.on(ir.created, (t) => {
      const r = ir.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: t }), this.persist();
    }), this.events.on(ir.updated, (t) => {
      const r = ir.updated;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: t }), this.persist();
    }), this.events.on(ir.deleted, (t) => {
      const r = ir.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: t }), this.persist();
    }), this.core.heartbeat.on(ti.HEARTBEAT_EVENTS.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.records.forEach((t) => {
        te.toMiliseconds(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.delete(t.topic, t.id));
      });
    } catch (t) {
      this.logger.warn(t);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = X("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class tv extends ph {
  constructor(t, r) {
    super(t, r), this.core = t, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new Xt.EventEmitter(), this.name = Tb, this.version = Nb, this.cached = [], this.initialized = !1, this.storagePrefix = _r, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.expirations.set(i.target, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.has = (i) => {
      try {
        const n = this.formatTarget(i);
        return typeof this.getExpiration(n) < "u";
      } catch {
        return !1;
      }
    }, this.set = (i, n) => {
      this.isInitialized();
      const s = this.formatTarget(i), u = { target: s, expiry: n };
      this.expirations.set(s, u), this.checkExpiry(s, u), this.events.emit(zt.created, { target: s, expiration: u });
    }, this.get = (i) => {
      this.isInitialized();
      const n = this.formatTarget(i);
      return this.getExpiration(n);
    }, this.del = (i) => {
      if (this.isInitialized(), this.has(i)) {
        const n = this.formatTarget(i), s = this.getExpiration(n);
        this.expirations.delete(n), this.events.emit(zt.deleted, { target: n, expiration: s });
      }
    }, this.on = (i, n) => {
      this.events.on(i, n);
    }, this.once = (i, n) => {
      this.events.once(i, n);
    }, this.off = (i, n) => {
      this.events.off(i, n);
    }, this.removeListener = (i, n) => {
      this.events.removeListener(i, n);
    }, this.logger = Ae.generateChildLogger(r, this.name);
  }
  get context() {
    return Ae.getLoggerContext(this.logger);
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
  formatTarget(t) {
    if (typeof t == "string")
      return bg(t);
    if (typeof t == "number")
      return vg(t);
    const { message: r } = X("UNKNOWN_TYPE", `Target type: ${typeof t}`);
    throw new Error(r);
  }
  async setExpirations(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(zt.sync);
  }
  async restore() {
    try {
      const t = await this.getExpirations();
      if (typeof t > "u" || !t.length)
        return;
      if (this.expirations.size) {
        const { message: r } = X("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = t, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (t) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(t);
    }
  }
  getExpiration(t) {
    const r = this.expirations.get(t);
    if (!r) {
      const { message: i } = X("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw this.logger.error(i), new Error(i);
    }
    return r;
  }
  checkExpiry(t, r) {
    const { expiry: i } = r;
    te.toMiliseconds(i) - Date.now() <= 0 && this.expire(t, r);
  }
  expire(t, r) {
    this.expirations.delete(t), this.events.emit(zt.expired, { target: t, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((t, r) => this.checkExpiry(r, t));
  }
  registerEventListeners() {
    this.core.heartbeat.on(ti.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(zt.created, (t) => {
      const r = zt.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), this.persist();
    }), this.events.on(zt.expired, (t) => {
      const r = zt.expired;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), this.persist();
    }), this.events.on(zt.deleted, (t) => {
      const r = zt.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = X("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class rv extends gh {
  constructor(t, r) {
    super(t, r), this.projectId = t, this.logger = r, this.name = Vn, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (i) => {
      if (this.verifyDisabled || On() || !Ui())
        return;
      const n = (i == null ? void 0 : i.verifyUrl) || nn;
      this.verifyUrl !== n && this.removeIframe(), this.verifyUrl = n;
      try {
        await this.createIframe();
      } catch (s) {
        this.logger.warn(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.warn(s);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = Ga;
        try {
          await this.createIframe();
        } catch (s) {
          this.logger.error(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.error(s), this.verifyDisabled = !0;
        }
      }
    }, this.register = async (i) => {
      this.initialized ? this.sendPost(i.attestationId) : (this.addToQueue(i.attestationId), await this.init());
    }, this.resolve = async (i) => {
      if (this.isDevEnv)
        return "";
      const n = (i == null ? void 0 : i.verifyUrl) || nn;
      let s = "";
      try {
        s = await this.fetchAttestation(i.attestationId, n);
      } catch (u) {
        this.logger.warn(`failed to resolve attestation: ${i.attestationId} from url: ${n}`), this.logger.warn(u), s = await this.fetchAttestation(i.attestationId, Ga);
      }
      return s;
    }, this.fetchAttestation = async (i, n) => {
      var s;
      this.logger.info(`resolving attestation: ${i} from url: ${n}`);
      const u = this.startAbortTimer(te.ONE_SECOND * 2), a = await fetch(`${n}/attestation/${i}`, { signal: this.abortController.signal });
      return clearTimeout(u), a.status === 200 ? (s = await a.json()) == null ? void 0 : s.origin : "";
    }, this.addToQueue = (i) => {
      this.queue.push(i);
    }, this.processQueue = () => {
      this.queue.length !== 0 && (this.queue.forEach((i) => this.sendPost(i)), this.queue = []);
    }, this.sendPost = (i) => {
      var n;
      try {
        if (!this.iframe)
          return;
        (n = this.iframe.contentWindow) == null || n.postMessage(i, "*"), this.logger.info(`postMessage sent: ${i} ${this.verifyUrl}`);
      } catch {
      }
    }, this.createIframe = async () => {
      let i;
      const n = (s) => {
        s.data === "verify_ready" && (this.initialized = !0, this.processQueue(), window.removeEventListener("message", n), i());
      };
      await Promise.race([new Promise((s) => {
        if (document.getElementById(Vn))
          return s();
        window.addEventListener("message", n);
        const u = document.createElement("iframe");
        u.id = Vn, u.src = `${this.verifyUrl}/${this.projectId}`, u.style.display = "none", document.body.append(u), this.iframe = u, i = s;
      }), new Promise((s, u) => setTimeout(() => {
        window.removeEventListener("message", n), u("verify iframe load timeout");
      }, te.toMiliseconds(te.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
    }, this.logger = Ae.generateChildLogger(r, this.name), this.verifyUrl = nn, this.abortController = new AbortController(), this.isDevEnv = Hs() && process.env.IS_VITEST;
  }
  get context() {
    return Ae.getLoggerContext(this.logger);
  }
  startAbortTimer(t) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), te.toMiliseconds(t));
  }
}
var iv = Object.defineProperty, rc = Object.getOwnPropertySymbols, nv = Object.prototype.hasOwnProperty, sv = Object.prototype.propertyIsEnumerable, ic = (e, t, r) => t in e ? iv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, nc = (e, t) => {
  for (var r in t || (t = {}))
    nv.call(t, r) && ic(e, r, t[r]);
  if (rc)
    for (var r of rc(t))
      sv.call(t, r) && ic(e, r, t[r]);
  return e;
};
let ov = class Wu extends ah {
  constructor(t) {
    super(t), this.protocol = ku, this.version = ob, this.name = eo, this.events = new Xt.EventEmitter(), this.initialized = !1, this.on = (i, n) => this.events.on(i, n), this.once = (i, n) => this.events.once(i, n), this.off = (i, n) => this.events.off(i, n), this.removeListener = (i, n) => this.events.removeListener(i, n), this.projectId = t == null ? void 0 : t.projectId, this.relayUrl = (t == null ? void 0 : t.relayUrl) || Ku;
    const r = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : Ae.pino(Ae.getDefaultLoggerOptions({ level: (t == null ? void 0 : t.logger) || ab.logger }));
    this.logger = Ae.generateChildLogger(r, this.name), this.heartbeat = new ti.HeartBeat(), this.crypto = new Fb(this, this.logger, t == null ? void 0 : t.keychain), this.history = new ev(this, this.logger), this.expirer = new tv(this, this.logger), this.storage = t != null && t.storage ? t.storage : new Vf(nc(nc({}, cb), t == null ? void 0 : t.storageOptions)), this.relayer = new Yb({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new Zb(this, this.logger), this.verify = new rv(this.projectId || "", this.logger);
  }
  static async init(t) {
    const r = new Wu(t);
    await r.initialize();
    const i = await r.crypto.getClientId();
    return await r.storage.setItem(Db, i), r;
  }
  get context() {
    return Ae.getLoggerContext(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success");
    } catch (t) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, t), this.logger.error(t.message), t;
    }
  }
};
const av = ov, Hu = "wc", Gu = 2, Yu = "client", to = `${Hu}@${Gu}:${Yu}:`, Wn = { name: Yu, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, sc = "WALLETCONNECT_DEEPLINK_CHOICE", cv = "proposal", uv = "Proposal expired", lv = "session", Qi = te.SEVEN_DAYS, fv = "engine", wi = { wc_sessionPropose: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, Hn = { min: te.FIVE_MINUTES, max: te.SEVEN_DAYS }, fr = { idle: "IDLE", active: "ACTIVE" }, hv = "request", dv = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var pv = Object.defineProperty, gv = Object.defineProperties, yv = Object.getOwnPropertyDescriptors, oc = Object.getOwnPropertySymbols, bv = Object.prototype.hasOwnProperty, vv = Object.prototype.propertyIsEnumerable, ac = (e, t, r) => t in e ? pv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Ct = (e, t) => {
  for (var r in t || (t = {}))
    bv.call(t, r) && ac(e, r, t[r]);
  if (oc)
    for (var r of oc(t))
      vv.call(t, r) && ac(e, r, t[r]);
  return e;
}, _i = (e, t) => gv(e, yv(t));
class mv extends bh {
  constructor(t) {
    super(t), this.name = fv, this.events = new jc(), this.initialized = !1, this.ignoredPayloadTypes = [Br], this.requestQueue = { state: fr.idle, queue: [] }, this.sessionRequestQueue = { state: fr.idle, queue: [] }, this.requestQueueDelay = te.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({ methods: Object.keys(wi) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, te.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      await this.isInitialized();
      const i = _i(Ct({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(i);
      const { pairingTopic: n, requiredNamespaces: s, optionalNamespaces: u, sessionProperties: a, relays: l } = i;
      let f = n, h, p = !1;
      if (f && (p = this.client.core.pairing.pairings.get(f).active), !f || !p) {
        const { topic: O, uri: b } = await this.client.core.pairing.create();
        f = O, h = b;
      }
      const y = await this.client.core.crypto.generateKeyPair(), m = Ct({ requiredNamespaces: s, optionalNamespaces: u, relays: l ?? [{ protocol: Vu }], proposer: { publicKey: y, metadata: this.client.metadata } }, a && { sessionProperties: a }), { reject: D, resolve: I, done: P } = Hr(te.FIVE_MINUTES, uv);
      if (this.events.once(nt("session_connect"), async ({ error: O, session: b }) => {
        if (O)
          D(O);
        else if (b) {
          b.self.publicKey = y;
          const _ = _i(Ct({}, b), { requiredNamespaces: b.requiredNamespaces, optionalNamespaces: b.optionalNamespaces });
          await this.client.session.set(b.topic, _), await this.setExpiry(b.topic, b.expiry), f && await this.client.core.pairing.updateMetadata({ topic: f, metadata: b.peer.metadata }), I(_);
        }
      }), !f) {
        const { message: O } = X("NO_MATCHING_KEY", `connect() pairing topic: ${f}`);
        throw new Error(O);
      }
      const U = await this.sendRequest({ topic: f, method: "wc_sessionPropose", params: m }), E = Gt(te.FIVE_MINUTES);
      return await this.setProposal(U, Ct({ id: U, expiry: E }, m)), { uri: h, approval: P };
    }, this.pair = async (r) => (await this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      await this.isInitialized(), await this.isValidApprove(r);
      const { id: i, relayProtocol: n, namespaces: s, sessionProperties: u } = r, a = this.client.proposal.get(i);
      let { pairingTopic: l, proposer: f, requiredNamespaces: h, optionalNamespaces: p } = a;
      l = l || "", Ii(h) || (h = Ng(s, "approve()"));
      const y = await this.client.core.crypto.generateKeyPair(), m = f.publicKey, D = await this.client.core.crypto.generateSharedKey(y, m);
      l && i && (await this.client.core.pairing.updateMetadata({ topic: l, metadata: f.metadata }), await this.sendResult({ id: i, topic: l, result: { relay: { protocol: n ?? "irn" }, responderPublicKey: y } }), await this.client.proposal.delete(i, st("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: l }));
      const I = Ct({ relay: { protocol: n ?? "irn" }, namespaces: s, requiredNamespaces: h, optionalNamespaces: p, pairingTopic: l, controller: { publicKey: y, metadata: this.client.metadata }, expiry: Gt(Qi) }, u && { sessionProperties: u });
      await this.client.core.relayer.subscribe(D), await this.sendRequest({ topic: D, method: "wc_sessionSettle", params: I, throwOnFailedPublish: !0 });
      const P = _i(Ct({}, I), { topic: D, pairingTopic: l, acknowledged: !1, self: I.controller, peer: { publicKey: f.publicKey, metadata: f.metadata }, controller: y });
      return await this.client.session.set(D, P), await this.setExpiry(D, Gt(Qi)), { topic: D, acknowledged: () => new Promise((U) => setTimeout(() => U(this.client.session.get(D)), 500)) };
    }, this.reject = async (r) => {
      await this.isInitialized(), await this.isValidReject(r);
      const { id: i, reason: n } = r, { pairingTopic: s } = this.client.proposal.get(i);
      s && (await this.sendError(i, s, n), await this.client.proposal.delete(i, st("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      await this.isInitialized(), await this.isValidUpdate(r);
      const { topic: i, namespaces: n } = r, s = await this.sendRequest({ topic: i, method: "wc_sessionUpdate", params: { namespaces: n } }), { done: u, resolve: a, reject: l } = Hr();
      return this.events.once(nt("session_update", s), ({ error: f }) => {
        f ? l(f) : a();
      }), await this.client.session.update(i, { namespaces: n }), { acknowledged: u };
    }, this.extend = async (r) => {
      await this.isInitialized(), await this.isValidExtend(r);
      const { topic: i } = r, n = await this.sendRequest({ topic: i, method: "wc_sessionExtend", params: {} }), { done: s, resolve: u, reject: a } = Hr();
      return this.events.once(nt("session_extend", n), ({ error: l }) => {
        l ? a(l) : u();
      }), await this.setExpiry(i, Gt(Qi)), { acknowledged: s };
    }, this.request = async (r) => {
      await this.isInitialized(), await this.isValidRequest(r);
      const { chainId: i, request: n, topic: s, expiry: u } = r, a = Js(), { done: l, resolve: f, reject: h } = Hr(u);
      return this.events.once(nt("session_request", a), ({ error: p, result: y }) => {
        p ? h(p) : f(y);
      }), await Promise.all([new Promise(async (p) => {
        await this.sendRequest({ clientRpcId: a, topic: s, method: "wc_sessionRequest", params: { request: n, chainId: i }, expiry: u, throwOnFailedPublish: !0 }).catch((y) => h(y)), this.client.events.emit("session_request_sent", { topic: s, request: n, chainId: i, id: a }), p();
      }), new Promise(async (p) => {
        const y = await this.client.core.storage.getItem(sc);
        mg({ id: a, topic: s, wcDeepLink: y }), p();
      }), l()]).then((p) => p[2]);
    }, this.respond = async (r) => {
      await this.isInitialized(), await this.isValidRespond(r);
      const { topic: i, response: n } = r, { id: s } = n;
      hr(n) ? await this.sendResult({ id: s, topic: i, result: n.result, throwOnFailedPublish: !0 }) : Yt(n) && await this.sendError(s, i, n.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      await this.isInitialized(), await this.isValidPing(r);
      const { topic: i } = r;
      if (this.client.session.keys.includes(i)) {
        const n = await this.sendRequest({ topic: i, method: "wc_sessionPing", params: {} }), { done: s, resolve: u, reject: a } = Hr();
        this.events.once(nt("session_ping", n), ({ error: l }) => {
          l ? a(l) : u();
        }), await s();
      } else
        this.client.core.pairing.pairings.keys.includes(i) && await this.client.core.pairing.ping({ topic: i });
    }, this.emit = async (r) => {
      await this.isInitialized(), await this.isValidEmit(r);
      const { topic: i, event: n, chainId: s } = r;
      await this.sendRequest({ topic: i, method: "wc_sessionEvent", params: { event: n, chainId: s } });
    }, this.disconnect = async (r) => {
      await this.isInitialized(), await this.isValidDisconnect(r);
      const { topic: i } = r;
      this.client.session.keys.includes(i) ? (await this.sendRequest({ topic: i, method: "wc_sessionDelete", params: st("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession(i)) : await this.client.core.pairing.disconnect({ topic: i });
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((i) => $g(i, r))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (r) => {
      if (r.pairingTopic)
        try {
          const i = this.client.core.pairing.pairings.get(r.pairingTopic), n = this.client.core.pairing.pairings.getAll().filter((s) => {
            var u, a;
            return ((u = s.peerMetadata) == null ? void 0 : u.url) && ((a = s.peerMetadata) == null ? void 0 : a.url) === r.peer.metadata.url && s.topic && s.topic !== i.topic;
          });
          if (n.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${n.length} duplicate pairing(s)`), await Promise.all(n.map((s) => this.client.core.pairing.disconnect({ topic: s.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (i) {
          this.client.logger.error(i);
        }
    }, this.deleteSession = async (r, i) => {
      const { self: n } = this.client.session.get(r);
      await this.client.core.relayer.unsubscribe(r), this.client.session.delete(r, st("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(n.publicKey) && await this.client.core.crypto.deleteKeyPair(n.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), i || this.client.core.expirer.del(r), this.client.core.storage.removeItem(sc).catch((s) => this.client.logger.warn(s));
    }, this.deleteProposal = async (r, i) => {
      await Promise.all([this.client.proposal.delete(r, st("USER_DISCONNECTED")), i ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, i, n = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, i), n ? Promise.resolve() : this.client.core.expirer.del(r)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((s) => s.id !== r), n && (this.sessionRequestQueue.state = fr.idle);
    }, this.setExpiry = async (r, i) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: i }), this.client.core.expirer.set(r, i);
    }, this.setProposal = async (r, i) => {
      await this.client.proposal.set(r, i), this.client.core.expirer.set(r, i.expiry);
    }, this.setPendingSessionRequest = async (r) => {
      const i = wi.wc_sessionRequest.req.ttl, { id: n, topic: s, params: u } = r;
      await this.client.pendingRequest.set(n, { id: n, topic: s, params: u }), i && this.client.core.expirer.set(n, Gt(i));
    }, this.sendRequest = async (r) => {
      const { topic: i, method: n, params: s, expiry: u, relayRpcId: a, clientRpcId: l, throwOnFailedPublish: f } = r, h = Pi(n, s, l);
      if (Ui() && dv.includes(n)) {
        const m = Jr(JSON.stringify(h));
        this.client.core.verify.register({ attestationId: m });
      }
      const p = await this.client.core.crypto.encode(i, h), y = wi[n].req;
      return u && (y.ttl = u), a && (y.id = a), this.client.core.history.set(i, h), f ? (y.internal = _i(Ct({}, y.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(i, p, y)) : this.client.core.relayer.publish(i, p, y).catch((m) => this.client.logger.error(m)), h.id;
    }, this.sendResult = async (r) => {
      const { id: i, topic: n, result: s, throwOnFailedPublish: u } = r, a = Xs(i, s), l = await this.client.core.crypto.encode(n, a), f = await this.client.core.history.get(n, i), h = wi[f.request.method].res;
      u ? (h.internal = _i(Ct({}, h.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(n, l, h)) : this.client.core.relayer.publish(n, l, h).catch((p) => this.client.logger.error(p)), await this.client.core.history.resolve(a);
    }, this.sendError = async (r, i, n) => {
      const s = Qs(r, n), u = await this.client.core.crypto.encode(i, s), a = await this.client.core.history.get(i, r), l = wi[a.request.method].res;
      this.client.core.relayer.publish(i, u, l), await this.client.core.history.resolve(s);
    }, this.cleanup = async () => {
      const r = [], i = [];
      this.client.session.getAll().forEach((n) => {
        wr(n.expiry) && r.push(n.topic);
      }), this.client.proposal.getAll().forEach((n) => {
        wr(n.expiry) && i.push(n.id);
      }), await Promise.all([...r.map((n) => this.deleteSession(n)), ...i.map((n) => this.deleteProposal(n))]);
    }, this.onRelayEventRequest = async (r) => {
      this.requestQueue.queue.push(r), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === fr.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = fr.active;
        const r = this.requestQueue.queue.shift();
        if (r)
          try {
            this.processRequest(r), await new Promise((i) => setTimeout(i, 300));
          } catch (i) {
            this.client.logger.warn(i);
          }
      }
      this.requestQueue.state = fr.idle;
    }, this.processRequest = (r) => {
      const { topic: i, payload: n } = r, s = n.method;
      switch (s) {
        case "wc_sessionPropose":
          return this.onSessionProposeRequest(i, n);
        case "wc_sessionSettle":
          return this.onSessionSettleRequest(i, n);
        case "wc_sessionUpdate":
          return this.onSessionUpdateRequest(i, n);
        case "wc_sessionExtend":
          return this.onSessionExtendRequest(i, n);
        case "wc_sessionPing":
          return this.onSessionPingRequest(i, n);
        case "wc_sessionDelete":
          return this.onSessionDeleteRequest(i, n);
        case "wc_sessionRequest":
          return this.onSessionRequest(i, n);
        case "wc_sessionEvent":
          return this.onSessionEventRequest(i, n);
        default:
          return this.client.logger.info(`Unsupported request method ${s}`);
      }
    }, this.onRelayEventResponse = async (r) => {
      const { topic: i, payload: n } = r, s = (await this.client.core.history.get(i, n.id)).request.method;
      switch (s) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(i, n);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(i, n);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(i, n);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(i, n);
        case "wc_sessionPing":
          return this.onSessionPingResponse(i, n);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(i, n);
        default:
          return this.client.logger.info(`Unsupported response method ${s}`);
      }
    }, this.onRelayEventUnknownPayload = (r) => {
      const { topic: i } = r, { message: n } = X("MISSING_OR_INVALID", `Decoded payload on topic ${i} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(n);
    }, this.onSessionProposeRequest = async (r, i) => {
      const { params: n, id: s } = i;
      try {
        this.isValidConnect(Ct({}, i.params));
        const u = Gt(te.FIVE_MINUTES), a = Ct({ id: s, pairingTopic: r, expiry: u }, n);
        await this.setProposal(s, a);
        const l = Jr(JSON.stringify(i)), f = await this.getVerifyContext(l, a.proposer.metadata);
        this.client.events.emit("session_proposal", { id: s, params: a, verifyContext: f });
      } catch (u) {
        await this.sendError(s, r, u), this.client.logger.error(u);
      }
    }, this.onSessionProposeResponse = async (r, i) => {
      const { id: n } = i;
      if (hr(i)) {
        const { result: s } = i;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: s });
        const u = this.client.proposal.get(n);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: u });
        const a = u.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: a });
        const l = s.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: l });
        const f = await this.client.core.crypto.generateSharedKey(a, l);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: f });
        const h = await this.client.core.relayer.subscribe(f);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: h }), await this.client.core.pairing.activate({ topic: r });
      } else
        Yt(i) && (await this.client.proposal.delete(n, st("USER_DISCONNECTED")), this.events.emit(nt("session_connect"), { error: i.error }));
    }, this.onSessionSettleRequest = async (r, i) => {
      const { id: n, params: s } = i;
      try {
        this.isValidSessionSettleRequest(s);
        const { relay: u, controller: a, expiry: l, namespaces: f, requiredNamespaces: h, optionalNamespaces: p, sessionProperties: y, pairingTopic: m } = i.params, D = Ct({ topic: r, relay: u, expiry: l, namespaces: f, acknowledged: !0, pairingTopic: m, requiredNamespaces: h, optionalNamespaces: p, controller: a.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: a.publicKey, metadata: a.metadata } }, y && { sessionProperties: y });
        await this.sendResult({ id: i.id, topic: r, result: !0 }), this.events.emit(nt("session_connect"), { session: D }), this.cleanupDuplicatePairings(D);
      } catch (u) {
        await this.sendError(n, r, u), this.client.logger.error(u);
      }
    }, this.onSessionSettleResponse = async (r, i) => {
      const { id: n } = i;
      hr(i) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(nt("session_approve", n), {})) : Yt(i) && (await this.client.session.delete(r, st("USER_DISCONNECTED")), this.events.emit(nt("session_approve", n), { error: i.error }));
    }, this.onSessionUpdateRequest = async (r, i) => {
      const { params: n, id: s } = i;
      try {
        const u = `${r}_session_update`, a = Xi.get(u);
        if (a && this.isRequestOutOfSync(a, s)) {
          this.client.logger.info(`Discarding out of sync request - ${s}`);
          return;
        }
        this.isValidUpdate(Ct({ topic: r }, n)), await this.client.session.update(r, { namespaces: n.namespaces }), await this.sendResult({ id: s, topic: r, result: !0 }), this.client.events.emit("session_update", { id: s, topic: r, params: n }), Xi.set(u, s);
      } catch (u) {
        await this.sendError(s, r, u), this.client.logger.error(u);
      }
    }, this.isRequestOutOfSync = (r, i) => parseInt(i.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, i) => {
      const { id: n } = i;
      hr(i) ? this.events.emit(nt("session_update", n), {}) : Yt(i) && this.events.emit(nt("session_update", n), { error: i.error });
    }, this.onSessionExtendRequest = async (r, i) => {
      const { id: n } = i;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, Gt(Qi)), await this.sendResult({ id: n, topic: r, result: !0 }), this.client.events.emit("session_extend", { id: n, topic: r });
      } catch (s) {
        await this.sendError(n, r, s), this.client.logger.error(s);
      }
    }, this.onSessionExtendResponse = (r, i) => {
      const { id: n } = i;
      hr(i) ? this.events.emit(nt("session_extend", n), {}) : Yt(i) && this.events.emit(nt("session_extend", n), { error: i.error });
    }, this.onSessionPingRequest = async (r, i) => {
      const { id: n } = i;
      try {
        this.isValidPing({ topic: r }), await this.sendResult({ id: n, topic: r, result: !0 }), this.client.events.emit("session_ping", { id: n, topic: r });
      } catch (s) {
        await this.sendError(n, r, s), this.client.logger.error(s);
      }
    }, this.onSessionPingResponse = (r, i) => {
      const { id: n } = i;
      setTimeout(() => {
        hr(i) ? this.events.emit(nt("session_ping", n), {}) : Yt(i) && this.events.emit(nt("session_ping", n), { error: i.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (r, i) => {
      const { id: n } = i;
      try {
        this.isValidDisconnect({ topic: r, reason: i.params }), await Promise.all([new Promise((s) => {
          this.client.core.relayer.once(Et.publish, async () => {
            s(await this.deleteSession(r));
          });
        }), this.sendResult({ id: n, topic: r, result: !0 })]), this.client.events.emit("session_delete", { id: n, topic: r });
      } catch (s) {
        this.client.logger.error(s);
      }
    }, this.onSessionRequest = async (r, i) => {
      const { id: n, params: s } = i;
      try {
        this.isValidRequest(Ct({ topic: r }, s)), await this.setPendingSessionRequest({ id: n, topic: r, params: s }), this.addSessionRequestToSessionRequestQueue({ id: n, topic: r, params: s }), await this.processSessionRequestQueue();
      } catch (u) {
        await this.sendError(n, r, u), this.client.logger.error(u);
      }
    }, this.onSessionRequestResponse = (r, i) => {
      const { id: n } = i;
      hr(i) ? this.events.emit(nt("session_request", n), { result: i.result }) : Yt(i) && this.events.emit(nt("session_request", n), { error: i.error });
    }, this.onSessionEventRequest = async (r, i) => {
      const { id: n, params: s } = i;
      try {
        const u = `${r}_session_event_${s.event.name}`, a = Xi.get(u);
        if (a && this.isRequestOutOfSync(a, n)) {
          this.client.logger.info(`Discarding out of sync request - ${n}`);
          return;
        }
        this.isValidEmit(Ct({ topic: r }, s)), this.client.events.emit("session_event", { id: n, topic: r, params: s }), Xi.set(u, n);
      } catch (u) {
        await this.sendError(n, r, u), this.client.logger.error(u);
      }
    }, this.addSessionRequestToSessionRequestQueue = (r) => {
      this.sessionRequestQueue.queue.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = fr.idle, this.processSessionRequestQueue();
      }, te.toMiliseconds(this.requestQueueDelay));
    }, this.processSessionRequestQueue = async () => {
      if (this.sessionRequestQueue.state === fr.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const r = this.sessionRequestQueue.queue[0];
      if (!r) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        const { id: i, topic: n, params: s } = r, u = Jr(JSON.stringify(Pi("wc_sessionRequest", s, i))), a = this.client.session.get(n), l = await this.getVerifyContext(u, a.peer.metadata);
        this.sessionRequestQueue.state = fr.active, this.client.events.emit("session_request", { id: i, topic: n, params: s, verifyContext: l });
      } catch (i) {
        this.client.logger.error(i);
      }
    }, this.isValidConnect = async (r) => {
      if (!Rt(r)) {
        const { message: l } = X("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(l);
      }
      const { pairingTopic: i, requiredNamespaces: n, optionalNamespaces: s, sessionProperties: u, relays: a } = r;
      if (Ot(i) || await this.isValidPairingTopic(i), !Gg(a, !0)) {
        const { message: l } = X("MISSING_OR_INVALID", `connect() relays: ${a}`);
        throw new Error(l);
      }
      !Ot(n) && Ii(n) !== 0 && this.validateNamespaces(n, "requiredNamespaces"), !Ot(s) && Ii(s) !== 0 && this.validateNamespaces(s, "optionalNamespaces"), Ot(u) || this.validateSessionProps(u, "sessionProperties");
    }, this.validateNamespaces = (r, i) => {
      const n = Hg(r, "connect()", i);
      if (n)
        throw new Error(n.message);
    }, this.isValidApprove = async (r) => {
      if (!Rt(r))
        throw new Error(X("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: i, namespaces: n, relayProtocol: s, sessionProperties: u } = r;
      await this.isValidProposalId(i);
      const a = this.client.proposal.get(i), l = rn(n, "approve()");
      if (l)
        throw new Error(l.message);
      const f = Pa(a.requiredNamespaces, n, "approve()");
      if (f)
        throw new Error(f.message);
      if (!ut(s, !0)) {
        const { message: h } = X("MISSING_OR_INVALID", `approve() relayProtocol: ${s}`);
        throw new Error(h);
      }
      Ot(u) || this.validateSessionProps(u, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!Rt(r)) {
        const { message: s } = X("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(s);
      }
      const { id: i, reason: n } = r;
      if (await this.isValidProposalId(i), !Jg(n)) {
        const { message: s } = X("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(n)}`);
        throw new Error(s);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!Rt(r)) {
        const { message: f } = X("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(f);
      }
      const { relay: i, controller: n, namespaces: s, expiry: u } = r;
      if (!Iu(i)) {
        const { message: f } = X("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(f);
      }
      const a = Bg(n, "onSessionSettleRequest()");
      if (a)
        throw new Error(a.message);
      const l = rn(s, "onSessionSettleRequest()");
      if (l)
        throw new Error(l.message);
      if (wr(u)) {
        const { message: f } = X("EXPIRED", "onSessionSettleRequest()");
        throw new Error(f);
      }
    }, this.isValidUpdate = async (r) => {
      if (!Rt(r)) {
        const { message: l } = X("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(l);
      }
      const { topic: i, namespaces: n } = r;
      await this.isValidSessionTopic(i);
      const s = this.client.session.get(i), u = rn(n, "update()");
      if (u)
        throw new Error(u.message);
      const a = Pa(s.requiredNamespaces, n, "update()");
      if (a)
        throw new Error(a.message);
    }, this.isValidExtend = async (r) => {
      if (!Rt(r)) {
        const { message: n } = X("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(n);
      }
      const { topic: i } = r;
      await this.isValidSessionTopic(i);
    }, this.isValidRequest = async (r) => {
      if (!Rt(r)) {
        const { message: l } = X("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(l);
      }
      const { topic: i, request: n, chainId: s, expiry: u } = r;
      await this.isValidSessionTopic(i);
      const { namespaces: a } = this.client.session.get(i);
      if (!Aa(a, s)) {
        const { message: l } = X("MISSING_OR_INVALID", `request() chainId: ${s}`);
        throw new Error(l);
      }
      if (!Xg(n)) {
        const { message: l } = X("MISSING_OR_INVALID", `request() ${JSON.stringify(n)}`);
        throw new Error(l);
      }
      if (!ey(a, s, n.method)) {
        const { message: l } = X("MISSING_OR_INVALID", `request() method: ${n.method}`);
        throw new Error(l);
      }
      if (u && !ny(u, Hn)) {
        const { message: l } = X("MISSING_OR_INVALID", `request() expiry: ${u}. Expiry must be a number (in seconds) between ${Hn.min} and ${Hn.max}`);
        throw new Error(l);
      }
    }, this.isValidRespond = async (r) => {
      if (!Rt(r)) {
        const { message: s } = X("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(s);
      }
      const { topic: i, response: n } = r;
      if (await this.isValidSessionTopic(i), !Qg(n)) {
        const { message: s } = X("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(n)}`);
        throw new Error(s);
      }
    }, this.isValidPing = async (r) => {
      if (!Rt(r)) {
        const { message: n } = X("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(n);
      }
      const { topic: i } = r;
      await this.isValidSessionOrPairingTopic(i);
    }, this.isValidEmit = async (r) => {
      if (!Rt(r)) {
        const { message: a } = X("MISSING_OR_INVALID", `emit() params: ${r}`);
        throw new Error(a);
      }
      const { topic: i, event: n, chainId: s } = r;
      await this.isValidSessionTopic(i);
      const { namespaces: u } = this.client.session.get(i);
      if (!Aa(u, s)) {
        const { message: a } = X("MISSING_OR_INVALID", `emit() chainId: ${s}`);
        throw new Error(a);
      }
      if (!Zg(n)) {
        const { message: a } = X("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(n)}`);
        throw new Error(a);
      }
      if (!ty(u, s, n.name)) {
        const { message: a } = X("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(n)}`);
        throw new Error(a);
      }
    }, this.isValidDisconnect = async (r) => {
      if (!Rt(r)) {
        const { message: n } = X("MISSING_OR_INVALID", `disconnect() params: ${r}`);
        throw new Error(n);
      }
      const { topic: i } = r;
      await this.isValidSessionOrPairingTopic(i);
    }, this.getVerifyContext = async (r, i) => {
      const n = { verified: { verifyUrl: i.verifyUrl || nn, validation: "UNKNOWN", origin: i.url || "" } };
      try {
        const s = await this.client.core.verify.resolve({ attestationId: r, verifyUrl: i.verifyUrl });
        s && (n.verified.origin = s, n.verified.validation = s === new URL(i.url).origin ? "VALID" : "INVALID");
      } catch (s) {
        this.client.logger.error(s);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(n)}`), n;
    }, this.validateSessionProps = (r, i) => {
      Object.values(r).forEach((n) => {
        if (!ut(n, !1)) {
          const { message: s } = X("MISSING_OR_INVALID", `${i} must be in Record<string, string> format. Received: ${JSON.stringify(n)}`);
          throw new Error(s);
        }
      });
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: t } = X("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(Et.message, async (t) => {
      const { topic: r, message: i } = t;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(i)))
        return;
      const n = await this.client.core.crypto.decode(r, i);
      try {
        Zs(n) ? (this.client.core.history.set(r, n), this.onRelayEventRequest({ topic: r, payload: n })) : In(n) ? (await this.client.core.history.resolve(n), await this.onRelayEventResponse({ topic: r, payload: n }), this.client.core.history.delete(r, n.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: n });
      } catch (s) {
        this.client.logger.error(s);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(zt.expired, async (t) => {
      const { topic: r, id: i } = Du(t.target);
      if (i && this.client.pendingRequest.keys.includes(i))
        return await this.deletePendingSessionRequest(i, X("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession(r, !0), this.client.events.emit("session_expire", { topic: r })) : i && (await this.deleteProposal(i, !0), this.client.events.emit("proposal_expire", { id: i }));
    });
  }
  isValidPairingTopic(t) {
    if (!ut(t, !1)) {
      const { message: r } = X("MISSING_OR_INVALID", `pairing topic should be a string: ${t}`);
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(t)) {
      const { message: r } = X("NO_MATCHING_KEY", `pairing topic doesn't exist: ${t}`);
      throw new Error(r);
    }
    if (wr(this.client.core.pairing.pairings.get(t).expiry)) {
      const { message: r } = X("EXPIRED", `pairing topic: ${t}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(t) {
    if (!ut(t, !1)) {
      const { message: r } = X("MISSING_OR_INVALID", `session topic should be a string: ${t}`);
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(t)) {
      const { message: r } = X("NO_MATCHING_KEY", `session topic doesn't exist: ${t}`);
      throw new Error(r);
    }
    if (wr(this.client.session.get(t).expiry)) {
      await this.deleteSession(t);
      const { message: r } = X("EXPIRED", `session topic: ${t}`);
      throw new Error(r);
    }
  }
  async isValidSessionOrPairingTopic(t) {
    if (this.client.session.keys.includes(t))
      await this.isValidSessionTopic(t);
    else if (this.client.core.pairing.pairings.keys.includes(t))
      this.isValidPairingTopic(t);
    else if (ut(t, !1)) {
      const { message: r } = X("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${t}`);
      throw new Error(r);
    } else {
      const { message: r } = X("MISSING_OR_INVALID", `session or pairing topic should be a string: ${t}`);
      throw new Error(r);
    }
  }
  async isValidProposalId(t) {
    if (!Yg(t)) {
      const { message: r } = X("MISSING_OR_INVALID", `proposal id should be a number: ${t}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(t)) {
      const { message: r } = X("NO_MATCHING_KEY", `proposal id doesn't exist: ${t}`);
      throw new Error(r);
    }
    if (wr(this.client.proposal.get(t).expiry)) {
      await this.deleteProposal(t);
      const { message: r } = X("EXPIRED", `proposal id: ${t}`);
      throw new Error(r);
    }
  }
}
class wv extends Cn {
  constructor(t, r) {
    super(t, r, cv, to), this.core = t, this.logger = r;
  }
}
class _v extends Cn {
  constructor(t, r) {
    super(t, r, lv, to), this.core = t, this.logger = r;
  }
}
class Ev extends Cn {
  constructor(t, r) {
    super(t, r, hv, to, (i) => i.id), this.core = t, this.logger = r;
  }
}
let Sv = class Ju extends yh {
  constructor(t) {
    super(t), this.protocol = Hu, this.version = Gu, this.name = Wn.name, this.events = new Xt.EventEmitter(), this.on = (i, n) => this.events.on(i, n), this.once = (i, n) => this.events.once(i, n), this.off = (i, n) => this.events.off(i, n), this.removeListener = (i, n) => this.events.removeListener(i, n), this.removeAllListeners = (i) => this.events.removeAllListeners(i), this.connect = async (i) => {
      try {
        return await this.engine.connect(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.pair = async (i) => {
      try {
        return await this.engine.pair(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.approve = async (i) => {
      try {
        return await this.engine.approve(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.reject = async (i) => {
      try {
        return await this.engine.reject(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.update = async (i) => {
      try {
        return await this.engine.update(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.extend = async (i) => {
      try {
        return await this.engine.extend(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.request = async (i) => {
      try {
        return await this.engine.request(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.respond = async (i) => {
      try {
        return await this.engine.respond(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.ping = async (i) => {
      try {
        return await this.engine.ping(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.emit = async (i) => {
      try {
        return await this.engine.emit(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.disconnect = async (i) => {
      try {
        return await this.engine.disconnect(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.find = (i) => {
      try {
        return this.engine.find(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.name = (t == null ? void 0 : t.name) || Wn.name, this.metadata = (t == null ? void 0 : t.metadata) || hg();
    const r = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : Ae.pino(Ae.getDefaultLoggerOptions({ level: (t == null ? void 0 : t.logger) || Wn.logger }));
    this.core = (t == null ? void 0 : t.core) || new av(t), this.logger = Ae.generateChildLogger(r, this.name), this.session = new _v(this.core, this.logger), this.proposal = new wv(this.core, this.logger), this.pendingRequest = new Ev(this.core, this.logger), this.engine = new mv(this);
  }
  static async init(t) {
    const r = new Ju(t);
    return await r.initialize(), r;
  }
  get context() {
    return Ae.getLoggerContext(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }), this.logger.info("SignClient Initialization Success");
    } catch (t) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(t.message), t;
    }
  }
};
var Dv = Object.defineProperty, Ov = Object.defineProperties, Iv = Object.getOwnPropertyDescriptors, cc = Object.getOwnPropertySymbols, xv = Object.prototype.hasOwnProperty, Cv = Object.prototype.propertyIsEnumerable, uc = (e, t, r) => t in e ? Dv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Rv = (e, t) => {
  for (var r in t || (t = {}))
    xv.call(t, r) && uc(e, r, t[r]);
  if (cc)
    for (var r of cc(t))
      Cv.call(t, r) && uc(e, r, t[r]);
  return e;
}, Av = (e, t) => Ov(e, Iv(t)), ro = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
}, ze = (e, t, r) => (ro(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Nr = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, fn = (e, t, r, i) => (ro(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r), mt = (e, t, r) => (ro(e, t, "access private method"), r), Fr, Gr, Ei, ct, Os, Xu, wt, Dt, Is, lc;
let Pv = class {
  constructor(t) {
    Nr(this, Os), Nr(this, wt), Nr(this, Is), Nr(this, Fr, void 0), Nr(this, Gr, void 0), Nr(this, Ei, void 0), Nr(this, ct, void 0), fn(this, Fr, t), fn(this, Gr, mt(this, Os, Xu).call(this)), mt(this, wt, Dt).call(this);
  }
  async connect(t) {
    const { requiredNamespaces: r, optionalNamespaces: i } = t;
    return new Promise(async (n, s) => {
      await mt(this, wt, Dt).call(this);
      const u = ze(this, Gr).subscribeModal((f) => {
        f.open || (u(), s(new Error("Modal closed")));
      }), { uri: a, approval: l } = await ze(this, ct).connect(t);
      if (a) {
        const f = /* @__PURE__ */ new Set();
        r && Object.values(r).forEach(({ chains: h }) => {
          h && h.forEach((p) => f.add(p));
        }), i && Object.values(i).forEach(({ chains: h }) => {
          h && h.forEach((p) => f.add(p));
        }), await ze(this, Gr).openModal({ uri: a, chains: Array.from(f) });
      }
      try {
        const f = await l();
        n(f);
      } catch (f) {
        s(f);
      } finally {
        u(), ze(this, Gr).closeModal();
      }
    });
  }
  async disconnect(t) {
    await mt(this, wt, Dt).call(this), await ze(this, ct).disconnect(t);
  }
  async request(t) {
    return await mt(this, wt, Dt).call(this), await ze(this, ct).request(t);
  }
  async getSessions() {
    return await mt(this, wt, Dt).call(this), ze(this, ct).session.getAll();
  }
  async getSession() {
    return await mt(this, wt, Dt).call(this), ze(this, ct).session.getAll().at(-1);
  }
  async onSessionEvent(t) {
    await mt(this, wt, Dt).call(this), ze(this, ct).on("session_event", t);
  }
  async offSessionEvent(t) {
    await mt(this, wt, Dt).call(this), ze(this, ct).off("session_event", t);
  }
  async onSessionUpdate(t) {
    await mt(this, wt, Dt).call(this), ze(this, ct).on("session_update", t);
  }
  async offSessionUpdate(t) {
    await mt(this, wt, Dt).call(this), ze(this, ct).off("session_update", t);
  }
  async onSessionDelete(t) {
    await mt(this, wt, Dt).call(this), ze(this, ct).on("session_delete", t);
  }
  async offSessionDelete(t) {
    await mt(this, wt, Dt).call(this), ze(this, ct).off("session_delete", t);
  }
  async onSessionExpire(t) {
    await mt(this, wt, Dt).call(this), ze(this, ct).on("session_expire", t);
  }
  async offSessionExpire(t) {
    await mt(this, wt, Dt).call(this), ze(this, ct).off("session_expire", t);
  }
};
Fr = /* @__PURE__ */ new WeakMap(), Gr = /* @__PURE__ */ new WeakMap(), Ei = /* @__PURE__ */ new WeakMap(), ct = /* @__PURE__ */ new WeakMap(), Os = /* @__PURE__ */ new WeakSet(), Xu = function() {
  const { modalOptions: e, projectId: t } = ze(this, Fr);
  return new uf(Av(Rv({}, e), { projectId: t }));
}, wt = /* @__PURE__ */ new WeakSet(), Dt = async function() {
  return ze(this, ct) ? !0 : (!ze(this, Ei) && typeof window < "u" && fn(this, Ei, mt(this, Is, lc).call(this)), ze(this, Ei));
}, Is = /* @__PURE__ */ new WeakSet(), lc = async function() {
  fn(this, ct, await Sv.init({ metadata: ze(this, Fr).metadata, projectId: ze(this, Fr).projectId, relayUrl: ze(this, Fr).relayUrl }));
  const e = await ze(this, ct).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", e);
  } catch {
    console.info("Unable to set client id");
  }
};
function Tv(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(t, r) {
    var i = e.get(t);
    i ? i.push(r) : e.set(t, [r]);
  }, off: function(t, r) {
    var i = e.get(t);
    i && (r ? i.splice(i.indexOf(r) >>> 0, 1) : e.set(t, []));
  }, emit: function(t, r) {
    var i = e.get(t);
    i && i.slice().map(function(n) {
      n(r);
    }), (i = e.get("*")) && i.slice().map(function(n) {
      n(t, r);
    });
  } };
}
const hn = Tv();
let Si;
function Nv(e) {
  Si = new Pv(e);
}
async function Vt() {
  return new Promise((e) => {
    if (Si)
      e(Si);
    else {
      const t = setInterval(() => {
        Si && (clearInterval(t), e(Si));
      }, 200);
    }
  });
}
function Lv(e) {
  return kt(() => {
    Nv(e);
  }, []), null;
}
const Fv = Ul(Lv);
function io() {
  const [e, t] = Oi(void 0), [r, i] = Oi(void 0), [n, s] = Oi(!1);
  return { data: e, error: r, loading: n, setData: t, setError: i, setLoading: s };
}
function $v(e) {
  const { data: t, error: r, loading: i, setData: n, setError: s, setLoading: u } = io();
  async function a(l) {
    try {
      u(!0), s(void 0);
      const f = await (await Vt()).connect(l ?? e);
      return n(f), hn.emit("session_change"), f;
    } catch (f) {
      throw s(f), f;
    } finally {
      u(!1);
    }
  }
  return { data: t, error: r, loading: i, connect: a };
}
function Uv(e) {
  const { error: t, loading: r, setError: i, setLoading: n } = io();
  async function s(u) {
    try {
      n(!0), i(void 0), await (await Vt()).disconnect(u ?? e), hn.emit("session_change");
    } catch (a) {
      throw i(a), a;
    } finally {
      n(!1);
    }
  }
  return { error: t, loading: r, disconnect: s };
}
function Qu(e) {
  kt(() => (Vt().then((t) => {
    t.onSessionDelete(e);
  }), () => {
    Vt().then((t) => {
      t.offSessionDelete(e);
    });
  }), [e]);
}
function no(e) {
  kt(() => (Vt().then((t) => {
    t.onSessionEvent(e);
  }), () => {
    Vt().then((t) => {
      t.offSessionEvent(e);
    });
  }), [e]);
}
function Mv(e) {
  kt(() => (Vt().then((t) => {
    t.onSessionExpire(e);
  }), () => {
    Vt().then((t) => {
      t.offSessionExpire(e);
    });
  }), [e]);
}
function jv(e) {
  kt(() => (Vt().then((t) => {
    t.onSessionUpdate(e);
  }), () => {
    Vt().then((t) => {
      t.offSessionUpdate(e);
    });
  }), [e]);
}
function zr(e) {
  const { data: t, error: r, loading: i, setData: n, setError: s, setLoading: u } = io();
  async function a(l) {
    try {
      u(!0), s(void 0);
      const f = await (await Vt()).request(l ?? e);
      return n(f), f;
    } catch (f) {
      throw s(f), f;
    } finally {
      u(!1);
    }
  }
  return { data: t, error: r, loading: i, request: a };
}
var qv = Object.defineProperty, Bv = Object.defineProperties, zv = Object.getOwnPropertyDescriptors, fc = Object.getOwnPropertySymbols, kv = Object.prototype.hasOwnProperty, Vv = Object.prototype.propertyIsEnumerable, hc = (e, t, r) => t in e ? qv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Kv = (e, t) => {
  for (var r in t || (t = {}))
    kv.call(t, r) && hc(e, r, t[r]);
  if (fc)
    for (var r of fc(t))
      Vv.call(t, r) && hc(e, r, t[r]);
  return e;
}, Wv = (e, t) => Bv(e, zv(t));
function or() {
  const [e, t] = Oi(void 0);
  return Qu((r) => {
    r.topic === (e == null ? void 0 : e.topic) && t(void 0);
  }), jv((r) => {
    if (e && r.topic === (e == null ? void 0 : e.topic)) {
      const { namespaces: i } = r.params, n = Wv(Kv({}, e), { namespaces: i });
      t(n);
    }
  }), Mv((r) => {
    e && r.topic === (e == null ? void 0 : e.topic) && t(void 0);
  }), kt(() => {
    async function r() {
      const i = await (await Vt()).getSession();
      t(i);
    }
    return r(), hn.on("session_change", r), () => {
      hn.off("session_change", r);
    };
  }, []), e;
}
const Hv = [
  // aztec methods
  "aztec_connect",
  "aztec_disconnect",
  "aztec_getAccountPublicKey",
  "aztec_getSpendingPublicKey",
  "aztec_requestProofs"
], Zu = ["aztec:1337"], el = [
  // aleo methods
  "aleo_decrypt",
  "aleo_disconnect",
  "aleo_getSelectedAccount",
  "aleo_deployProgram",
  "aleo_getBalance",
  "aleo_executeProgram",
  "aleo_getRecords",
  "aleo_transfer"
], so = ["aleo:1"], xs = ["chainChanged", "accountSelected", "accountSynced"], Gv = "f0aaeffe71b636da453fce042d79d723", dc = "https://walletconnect.puzzle.online/", Yv = {
  standaloneChains: Zu.concat(so),
  enableExplorer: !1,
  enableAccountView: !0,
  enableNetworkView: !0,
  enableStandaloneMode: !0,
  mobileWallets: [
    {
      id: "puzzle",
      name: "Puzzle Wallet",
      links: {
        native: "",
        universal: dc
      }
    }
  ],
  desktopWallets: [
    {
      id: "puzzle",
      name: "Puzzle Wallet",
      links: {
        native: "",
        universal: dc
      }
    }
  ],
  walletImages: {
    // Override manual wallet image
    puzzle: "https://i.imgur.com/p9tHaFC.png"
  }
}, X1 = {
  requiredNamespaces: {
    aztec: {
      methods: Hv,
      chains: Zu,
      events: xs
    },
    aleo: {
      methods: el,
      chains: so,
      events: xs
    }
  }
}, Q1 = ({ dAppName: e, dAppDescription: t, dAppUrl: r, dAppIconURL: i }) => /* @__PURE__ */ ns.jsx(
  Fv,
  {
    projectId: Gv,
    metadata: {
      name: e,
      description: t,
      url: r,
      icons: [
        i
      ]
    },
    modalOptions: { ...Yv }
  }
), Z1 = ({ children: e }) => (I1(), /* @__PURE__ */ ns.jsx(ns.Fragment, { children: e })), pc = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), i = (l, f) => {
    const h = typeof l == "function" ? l(t) : l;
    if (!Object.is(h, t)) {
      const p = t;
      t = f ?? typeof h != "object" ? h : Object.assign({}, t, h), r.forEach((y) => y(t, p));
    }
  }, n = () => t, a = { setState: i, getState: n, subscribe: (l) => (r.add(l), () => r.delete(l)), destroy: () => {
    r.clear();
  } };
  return t = e(i, n, a), a;
}, Jv = (e) => e ? pc(e) : pc;
var Cs = { exports: {} }, Gn = {}, Zi = { exports: {} }, Yn = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gc;
function Xv() {
  if (gc)
    return Yn;
  gc = 1;
  var e = ei;
  function t(p, y) {
    return p === y && (p !== 0 || 1 / p === 1 / y) || p !== p && y !== y;
  }
  var r = typeof Object.is == "function" ? Object.is : t, i = e.useState, n = e.useEffect, s = e.useLayoutEffect, u = e.useDebugValue;
  function a(p, y) {
    var m = y(), D = i({ inst: { value: m, getSnapshot: y } }), I = D[0].inst, P = D[1];
    return s(function() {
      I.value = m, I.getSnapshot = y, l(I) && P({ inst: I });
    }, [p, m, y]), n(function() {
      return l(I) && P({ inst: I }), p(function() {
        l(I) && P({ inst: I });
      });
    }, [p]), u(m), m;
  }
  function l(p) {
    var y = p.getSnapshot;
    p = p.value;
    try {
      var m = y();
      return !r(p, m);
    } catch {
      return !0;
    }
  }
  function f(p, y) {
    return y();
  }
  var h = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? f : a;
  return Yn.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : h, Yn;
}
var Jn = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yc;
function Qv() {
  return yc || (yc = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = ei, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(O) {
      {
        for (var b = arguments.length, _ = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++)
          _[d - 1] = arguments[d];
        i("error", O, _);
      }
    }
    function i(O, b, _) {
      {
        var d = t.ReactDebugCurrentFrame, o = d.getStackAddendum();
        o !== "" && (b += "%s", _ = _.concat([o]));
        var g = _.map(function(A) {
          return String(A);
        });
        g.unshift("Warning: " + b), Function.prototype.apply.call(console[O], console, g);
      }
    }
    function n(O, b) {
      return O === b && (O !== 0 || 1 / O === 1 / b) || O !== O && b !== b;
    }
    var s = typeof Object.is == "function" ? Object.is : n, u = e.useState, a = e.useEffect, l = e.useLayoutEffect, f = e.useDebugValue, h = !1, p = !1;
    function y(O, b, _) {
      h || e.startTransition !== void 0 && (h = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var d = b();
      if (!p) {
        var o = b();
        s(d, o) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), p = !0);
      }
      var g = u({
        inst: {
          value: d,
          getSnapshot: b
        }
      }), A = g[0].inst, L = g[1];
      return l(function() {
        A.value = d, A.getSnapshot = b, m(A) && L({
          inst: A
        });
      }, [O, d, b]), a(function() {
        m(A) && L({
          inst: A
        });
        var $ = function() {
          m(A) && L({
            inst: A
          });
        };
        return O($);
      }, [O]), f(d), d;
    }
    function m(O) {
      var b = O.getSnapshot, _ = O.value;
      try {
        var d = b();
        return !s(_, d);
      } catch {
        return !0;
      }
    }
    function D(O, b, _) {
      return b();
    }
    var I = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", P = !I, U = P ? D : y, E = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : U;
    Jn.useSyncExternalStore = E, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Jn;
}
var bc;
function tl() {
  return bc || (bc = 1, process.env.NODE_ENV === "production" ? Zi.exports = Xv() : Zi.exports = Qv()), Zi.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vc;
function Zv() {
  if (vc)
    return Gn;
  vc = 1;
  var e = ei, t = tl();
  function r(f, h) {
    return f === h && (f !== 0 || 1 / f === 1 / h) || f !== f && h !== h;
  }
  var i = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, s = e.useRef, u = e.useEffect, a = e.useMemo, l = e.useDebugValue;
  return Gn.useSyncExternalStoreWithSelector = function(f, h, p, y, m) {
    var D = s(null);
    if (D.current === null) {
      var I = { hasValue: !1, value: null };
      D.current = I;
    } else
      I = D.current;
    D = a(function() {
      function U(d) {
        if (!E) {
          if (E = !0, O = d, d = y(d), m !== void 0 && I.hasValue) {
            var o = I.value;
            if (m(o, d))
              return b = o;
          }
          return b = d;
        }
        if (o = b, i(O, d))
          return o;
        var g = y(d);
        return m !== void 0 && m(o, g) ? o : (O = d, b = g);
      }
      var E = !1, O, b, _ = p === void 0 ? null : p;
      return [function() {
        return U(h());
      }, _ === null ? void 0 : function() {
        return U(_());
      }];
    }, [h, p, y, m]);
    var P = n(f, D[0], D[1]);
    return u(function() {
      I.hasValue = !0, I.value = P;
    }, [P]), l(P), P;
  }, Gn;
}
var Xn = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mc;
function e1() {
  return mc || (mc = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = ei, t = tl();
    function r(h, p) {
      return h === p && (h !== 0 || 1 / h === 1 / p) || h !== h && p !== p;
    }
    var i = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, s = e.useRef, u = e.useEffect, a = e.useMemo, l = e.useDebugValue;
    function f(h, p, y, m, D) {
      var I = s(null), P;
      I.current === null ? (P = {
        hasValue: !1,
        value: null
      }, I.current = P) : P = I.current;
      var U = a(function() {
        var _ = !1, d, o, g = function(V) {
          if (!_) {
            _ = !0, d = V;
            var Y = m(V);
            if (D !== void 0 && P.hasValue) {
              var x = P.value;
              if (D(x, Y))
                return o = x, x;
            }
            return o = Y, Y;
          }
          var T = d, H = o;
          if (i(T, V))
            return H;
          var k = m(V);
          return D !== void 0 && D(H, k) ? H : (d = V, o = k, k);
        }, A = y === void 0 ? null : y, L = function() {
          return g(p());
        }, $ = A === null ? void 0 : function() {
          return g(A());
        };
        return [L, $];
      }, [p, y, m, D]), E = U[0], O = U[1], b = n(h, E, O);
      return u(function() {
        P.hasValue = !0, P.value = b;
      }, [b]), l(b), b;
    }
    Xn.useSyncExternalStoreWithSelector = f, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Xn;
}
process.env.NODE_ENV === "production" ? Cs.exports = Zv() : Cs.exports = e1();
var t1 = Cs.exports;
const r1 = /* @__PURE__ */ yn(t1), { useSyncExternalStoreWithSelector: i1 } = r1;
function n1(e, t = e.getState, r) {
  const i = i1(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    r
  );
  return Ml(i), i;
}
const wc = (e) => {
  const t = typeof e == "function" ? Jv(e) : e, r = (i, n) => n1(t, i, n);
  return Object.assign(r, t), r;
}, s1 = (e) => e ? wc(e) : wc;
function dt(e) {
  for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    r[i - 1] = arguments[i];
  if (process.env.NODE_ENV !== "production") {
    var n = d1[e], s = n ? typeof n == "function" ? n.apply(null, r) : n : "unknown error nr: " + e;
    throw Error("[Immer] " + s);
  }
  throw Error("[Immer] minified error nr: " + e + (r.length ? " " + r.map(function(u) {
    return "'" + u + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function Qr(e) {
  return !!e && !!e[Ft];
}
function Ur(e) {
  var t;
  return !!e && (function(r) {
    if (!r || typeof r != "object")
      return !1;
    var i = Object.getPrototypeOf(r);
    if (i === null)
      return !0;
    var n = Object.hasOwnProperty.call(i, "constructor") && i.constructor;
    return n === Object || typeof n == "function" && Function.toString.call(n) === p1;
  }(e) || Array.isArray(e) || !!e[Cc] || !!(!((t = e.constructor) === null || t === void 0) && t[Cc]) || oo(e) || ao(e));
}
function Ti(e, t, r) {
  r === void 0 && (r = !1), si(e) === 0 ? (r ? Object.keys : ho)(e).forEach(function(i) {
    r && typeof i == "symbol" || t(i, e[i], e);
  }) : e.forEach(function(i, n) {
    return t(n, i, e);
  });
}
function si(e) {
  var t = e[Ft];
  return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : oo(e) ? 2 : ao(e) ? 3 : 0;
}
function Rs(e, t) {
  return si(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function o1(e, t) {
  return si(e) === 2 ? e.get(t) : e[t];
}
function rl(e, t, r) {
  var i = si(e);
  i === 2 ? e.set(t, r) : i === 3 ? e.add(r) : e[t] = r;
}
function a1(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function oo(e) {
  return f1 && e instanceof Map;
}
function ao(e) {
  return h1 && e instanceof Set;
}
function Lr(e) {
  return e.o || e.t;
}
function co(e) {
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  var t = g1(e);
  delete t[Ft];
  for (var r = ho(t), i = 0; i < r.length; i++) {
    var n = r[i], s = t[n];
    s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (t[n] = { configurable: !0, writable: !0, enumerable: s.enumerable, value: e[n] });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function uo(e, t) {
  return t === void 0 && (t = !1), lo(e) || Qr(e) || !Ur(e) || (si(e) > 1 && (e.set = e.add = e.clear = e.delete = c1), Object.freeze(e), t && Ti(e, function(r, i) {
    return uo(i, !0);
  }, !0)), e;
}
function c1() {
  dt(2);
}
function lo(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function sr(e) {
  var t = y1[e];
  return t || dt(18, e), t;
}
function _c() {
  return process.env.NODE_ENV === "production" || Zr || dt(0), Zr;
}
function Qn(e, t) {
  t && (sr("Patches"), e.u = [], e.s = [], e.v = t);
}
function dn(e) {
  As(e), e.p.forEach(u1), e.p = null;
}
function As(e) {
  e === Zr && (Zr = e.l);
}
function Ec(e) {
  return Zr = { p: [], l: Zr, h: e, m: !0, _: 0 };
}
function u1(e) {
  var t = e[Ft];
  t.i === 0 || t.i === 1 ? t.j() : t.O = !0;
}
function Zn(e, t) {
  t._ = t.p.length;
  var r = t.p[0], i = e !== void 0 && e !== r;
  return t.h.g || sr("ES5").S(t, e, i), i ? (r[Ft].P && (dn(t), dt(4)), Ur(e) && (e = pn(t, e), t.l || gn(t, e)), t.u && sr("Patches").M(r[Ft].t, e, t.u, t.s)) : e = pn(t, r, []), dn(t), t.u && t.v(t.u, t.s), e !== il ? e : void 0;
}
function pn(e, t, r) {
  if (lo(t))
    return t;
  var i = t[Ft];
  if (!i)
    return Ti(t, function(a, l) {
      return Sc(e, i, t, a, l, r);
    }, !0), t;
  if (i.A !== e)
    return t;
  if (!i.P)
    return gn(e, i.t, !0), i.t;
  if (!i.I) {
    i.I = !0, i.A._--;
    var n = i.i === 4 || i.i === 5 ? i.o = co(i.k) : i.o, s = n, u = !1;
    i.i === 3 && (s = new Set(n), n.clear(), u = !0), Ti(s, function(a, l) {
      return Sc(e, i, n, a, l, r, u);
    }), gn(e, n, !1), r && e.u && sr("Patches").N(i, r, e.u, e.s);
  }
  return i.o;
}
function Sc(e, t, r, i, n, s, u) {
  if (process.env.NODE_ENV !== "production" && n === r && dt(5), Qr(n)) {
    var a = pn(e, n, s && t && t.i !== 3 && !Rs(t.R, i) ? s.concat(i) : void 0);
    if (rl(r, i, a), !Qr(a))
      return;
    e.m = !1;
  } else
    u && r.add(n);
  if (Ur(n) && !lo(n)) {
    if (!e.h.D && e._ < 1)
      return;
    pn(e, n), t && t.A.l || gn(e, n);
  }
}
function gn(e, t, r) {
  r === void 0 && (r = !1), !e.l && e.h.D && e.m && uo(t, r);
}
function es(e, t) {
  var r = e[Ft];
  return (r ? Lr(r) : e)[t];
}
function Dc(e, t) {
  if (t in e)
    for (var r = Object.getPrototypeOf(e); r; ) {
      var i = Object.getOwnPropertyDescriptor(r, t);
      if (i)
        return i;
      r = Object.getPrototypeOf(r);
    }
}
function Ps(e) {
  e.P || (e.P = !0, e.l && Ps(e.l));
}
function ts(e) {
  e.o || (e.o = co(e.t));
}
function Ts(e, t, r) {
  var i = oo(t) ? sr("MapSet").F(t, r) : ao(t) ? sr("MapSet").T(t, r) : e.g ? function(n, s) {
    var u = Array.isArray(n), a = { i: u ? 1 : 0, A: s ? s.A : _c(), P: !1, I: !1, R: {}, l: s, t: n, k: null, o: null, j: null, C: !1 }, l = a, f = Ns;
    u && (l = [a], f = Di);
    var h = Proxy.revocable(l, f), p = h.revoke, y = h.proxy;
    return a.k = y, a.j = p, y;
  }(t, r) : sr("ES5").J(t, r);
  return (r ? r.A : _c()).p.push(i), i;
}
function l1(e) {
  return Qr(e) || dt(22, e), function t(r) {
    if (!Ur(r))
      return r;
    var i, n = r[Ft], s = si(r);
    if (n) {
      if (!n.P && (n.i < 4 || !sr("ES5").K(n)))
        return n.t;
      n.I = !0, i = Oc(r, s), n.I = !1;
    } else
      i = Oc(r, s);
    return Ti(i, function(u, a) {
      n && o1(n.t, u) === a || rl(i, u, t(a));
    }), s === 3 ? new Set(i) : i;
  }(e);
}
function Oc(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return co(e);
}
var Ic, Zr, fo = typeof Symbol < "u" && typeof Symbol("x") == "symbol", f1 = typeof Map < "u", h1 = typeof Set < "u", xc = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", il = fo ? Symbol.for("immer-nothing") : ((Ic = {})["immer-nothing"] = !0, Ic), Cc = fo ? Symbol.for("immer-draftable") : "__$immer_draftable", Ft = fo ? Symbol.for("immer-state") : "__$immer_state", d1 = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(e) {
  return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
}, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(e) {
  return "Cannot apply patch, path doesn't resolve: " + e;
}, 16: 'Sets cannot have "replace" patches.', 17: function(e) {
  return "Unsupported patch operation: " + e;
}, 18: function(e) {
  return "The plugin for '" + e + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + e + "()` when initializing your application.";
}, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(e) {
  return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + e + "'";
}, 22: function(e) {
  return "'current' expects a draft, got: " + e;
}, 23: function(e) {
  return "'original' expects a draft, got: " + e;
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" }, p1 = "" + Object.prototype.constructor, ho = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Object.getOwnPropertyNames, g1 = Object.getOwnPropertyDescriptors || function(e) {
  var t = {};
  return ho(e).forEach(function(r) {
    t[r] = Object.getOwnPropertyDescriptor(e, r);
  }), t;
}, y1 = {}, Ns = { get: function(e, t) {
  if (t === Ft)
    return e;
  var r = Lr(e);
  if (!Rs(r, t))
    return function(n, s, u) {
      var a, l = Dc(s, u);
      return l ? "value" in l ? l.value : (a = l.get) === null || a === void 0 ? void 0 : a.call(n.k) : void 0;
    }(e, r, t);
  var i = r[t];
  return e.I || !Ur(i) ? i : i === es(e.t, t) ? (ts(e), e.o[t] = Ts(e.A.h, i, e)) : i;
}, has: function(e, t) {
  return t in Lr(e);
}, ownKeys: function(e) {
  return Reflect.ownKeys(Lr(e));
}, set: function(e, t, r) {
  var i = Dc(Lr(e), t);
  if (i != null && i.set)
    return i.set.call(e.k, r), !0;
  if (!e.P) {
    var n = es(Lr(e), t), s = n == null ? void 0 : n[Ft];
    if (s && s.t === r)
      return e.o[t] = r, e.R[t] = !1, !0;
    if (a1(r, n) && (r !== void 0 || Rs(e.t, t)))
      return !0;
    ts(e), Ps(e);
  }
  return e.o[t] === r && (r !== void 0 || t in e.o) || Number.isNaN(r) && Number.isNaN(e.o[t]) || (e.o[t] = r, e.R[t] = !0), !0;
}, deleteProperty: function(e, t) {
  return es(e.t, t) !== void 0 || t in e.t ? (e.R[t] = !1, ts(e), Ps(e)) : delete e.R[t], e.o && delete e.o[t], !0;
}, getOwnPropertyDescriptor: function(e, t) {
  var r = Lr(e), i = Reflect.getOwnPropertyDescriptor(r, t);
  return i && { writable: !0, configurable: e.i !== 1 || t !== "length", enumerable: i.enumerable, value: r[t] };
}, defineProperty: function() {
  dt(11);
}, getPrototypeOf: function(e) {
  return Object.getPrototypeOf(e.t);
}, setPrototypeOf: function() {
  dt(12);
} }, Di = {};
Ti(Ns, function(e, t) {
  Di[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
}), Di.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && dt(13), Di.set.call(this, e, t, void 0);
}, Di.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && dt(14), Ns.set.call(this, e[0], t, r, e[0]);
};
var b1 = function() {
  function e(r) {
    var i = this;
    this.g = xc, this.D = !0, this.produce = function(n, s, u) {
      if (typeof n == "function" && typeof s != "function") {
        var a = s;
        s = n;
        var l = i;
        return function(I) {
          var P = this;
          I === void 0 && (I = a);
          for (var U = arguments.length, E = Array(U > 1 ? U - 1 : 0), O = 1; O < U; O++)
            E[O - 1] = arguments[O];
          return l.produce(I, function(b) {
            var _;
            return (_ = s).call.apply(_, [P, b].concat(E));
          });
        };
      }
      var f;
      if (typeof s != "function" && dt(6), u !== void 0 && typeof u != "function" && dt(7), Ur(n)) {
        var h = Ec(i), p = Ts(i, n, void 0), y = !0;
        try {
          f = s(p), y = !1;
        } finally {
          y ? dn(h) : As(h);
        }
        return typeof Promise < "u" && f instanceof Promise ? f.then(function(I) {
          return Qn(h, u), Zn(I, h);
        }, function(I) {
          throw dn(h), I;
        }) : (Qn(h, u), Zn(f, h));
      }
      if (!n || typeof n != "object") {
        if ((f = s(n)) === void 0 && (f = n), f === il && (f = void 0), i.D && uo(f, !0), u) {
          var m = [], D = [];
          sr("Patches").M(n, f, m, D), u(m, D);
        }
        return f;
      }
      dt(21, n);
    }, this.produceWithPatches = function(n, s) {
      if (typeof n == "function")
        return function(f) {
          for (var h = arguments.length, p = Array(h > 1 ? h - 1 : 0), y = 1; y < h; y++)
            p[y - 1] = arguments[y];
          return i.produceWithPatches(f, function(m) {
            return n.apply(void 0, [m].concat(p));
          });
        };
      var u, a, l = i.produce(n, s, function(f, h) {
        u = f, a = h;
      });
      return typeof Promise < "u" && l instanceof Promise ? l.then(function(f) {
        return [f, u, a];
      }) : [l, u, a];
    }, typeof (r == null ? void 0 : r.useProxies) == "boolean" && this.setUseProxies(r.useProxies), typeof (r == null ? void 0 : r.autoFreeze) == "boolean" && this.setAutoFreeze(r.autoFreeze);
  }
  var t = e.prototype;
  return t.createDraft = function(r) {
    Ur(r) || dt(8), Qr(r) && (r = l1(r));
    var i = Ec(this), n = Ts(this, r, void 0);
    return n[Ft].C = !0, As(i), n;
  }, t.finishDraft = function(r, i) {
    var n = r && r[Ft];
    process.env.NODE_ENV !== "production" && (n && n.C || dt(9), n.I && dt(10));
    var s = n.A;
    return Qn(s, i), Zn(void 0, s);
  }, t.setAutoFreeze = function(r) {
    this.D = r;
  }, t.setUseProxies = function(r) {
    r && !xc && dt(20), this.g = r;
  }, t.applyPatches = function(r, i) {
    var n;
    for (n = i.length - 1; n >= 0; n--) {
      var s = i[n];
      if (s.path.length === 0 && s.op === "replace") {
        r = s.value;
        break;
      }
    }
    n > -1 && (i = i.slice(n + 1));
    var u = sr("Patches").$;
    return Qr(r) ? u(r, i) : this.produce(r, function(a) {
      return u(a, i);
    });
  }, e;
}(), $t = new b1(), v1 = $t.produce;
$t.produceWithPatches.bind($t);
$t.setAutoFreeze.bind($t);
$t.setUseProxies.bind($t);
$t.applyPatches.bind($t);
$t.createDraft.bind($t);
$t.finishDraft.bind($t);
const m1 = (e) => (t, r, i) => (i.setState = (n, s, ...u) => {
  const a = typeof n == "function" ? v1(n) : n;
  return t(a, s, ...u);
}, e(i.setState, r, i)), w1 = m1, dr = s1()(
  w1((e, t) => ({
    account: void 0,
    accounts: [],
    chainId: void 0,
    setAccounts: (r) => {
      e({ accounts: r });
    },
    setAccount: (r) => {
      e({ account: r });
    },
    setChainId: (r) => {
      e({ chainId: r });
    },
    disconnect: () => {
      e({
        account: void 0,
        accounts: [],
        chainId: void 0
      });
    }
  }))
), nl = (e) => e.length < 5 * 2 ? e : `${e.slice(
  0,
  5 + 5
)}...${e.slice(e.length - 5, e.length)}`, em = () => {
  const e = or(), [t, r, i, n] = dr((h) => [
    h.account,
    h.accounts,
    h.chainId,
    h.setAccount
  ]), { request: s, data: u, error: a, loading: l } = zr({
    topic: e == null ? void 0 : e.topic,
    chainId: i ?? "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "aleo_getSelectedAccount",
      params: {
        type: "GET_SELECTED_ACCOUNT"
      }
    }
  });
  no(({ params: h, topic: p }) => {
    if (h.event.name === "accountSelected" && e && e.topic === p) {
      const m = h.event.data, D = h.chainId.split(":")[0], I = h.chainId.split(":")[1];
      n({
        network: D,
        chainId: I,
        address: m,
        shortenedAddress: nl(m)
      });
    }
  }), kt(() => {
    e && !l && s();
  }, [e == null ? void 0 : e.topic]), kt(() => {
    if (u) {
      const h = u && u.type === "GET_SELECTED_ACCOUNT_RES" ? u : void 0, p = h == null ? void 0 : h.data.account;
      p && n(p);
    }
  }, [u]);
  const f = a ? a.message : u && u.type === "GET_SELECTED_ACCOUNT_REJ" ? u.data.error : void 0;
  return {
    account: t,
    accounts: r,
    error: f,
    loading: l
  };
}, tm = () => {
  const e = or(), [t, r] = dr((p) => [
    p.chainId,
    p.account
  ]), { request: i, data: n, error: s, loading: u } = zr({
    topic: e == null ? void 0 : e.topic,
    chainId: t ?? "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "aleo_getBalance",
      params: {
        type: "GET_BALANCE",
        data: {
          assetId: void 0
        }
      }
    }
  });
  no(({ _: p, params: y, topic: m }) => {
    y.event.name === "accountSynced" && e && e.topic === m && !u && i();
  });
  const a = !!e && !!r;
  kt(() => {
    a && !u && i();
  }, [a, r]);
  const l = s ? s.message : n && n.type === "GET_BALANCE_REJ" ? n.data.error : void 0, f = n && n.type === "GET_BALANCE_RES" ? n : void 0, h = f == null ? void 0 : f.data.balances;
  return { loading: u, balances: h, error: l };
}, rm = () => {
  const e = or(), { connect: t, data: r, error: i, loading: n } = $v({
    requiredNamespaces: {
      aleo: {
        methods: el,
        chains: so,
        events: xs
      }
    }
  });
  return { connect: async () => {
    try {
      await t();
    } catch {
    }
  }, data: r, error: i, loading: n, session: e, isConnected: !!e };
}, im = (e) => {
  const t = or(), [r] = dr((p) => [
    p.chainId
  ]), { request: i, data: n, error: s, loading: u } = zr({
    topic: (t == null ? void 0 : t.topic) ?? "",
    chainId: r ?? "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "aleo_decrypt",
      params: {
        type: "DECRYPT",
        data: {
          transactionId: e
        }
      }
    }
  }), a = s ? s.message : n && n.type === "DECRYPT_REJ" ? n.data.error : void 0, l = n && n.type === "DECRYPT_RES" ? n : void 0, f = l == null ? void 0 : l.data;
  return { decrypt: () => {
    !e || !e.startsWith("at1") || e.length !== 61 || i();
  }, data: f, loading: u, error: a };
}, nm = (e) => {
  const t = or(), [r] = dr((p) => [
    p.chainId
  ]), { request: i, data: n, error: s, loading: u } = zr({
    topic: (t == null ? void 0 : t.topic) ?? "",
    chainId: r ?? "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "aleo_deployProgram",
      params: {
        type: "DEPLOY",
        data: {
          data: e
        }
      }
    }
  }), a = s ? s.message : n && n.type === "DEPLOY_REJ" ? n.data.error : void 0, l = n && n.type === "DEPLOY_RES" ? n : void 0, f = l == null ? void 0 : l.data.transactionId;
  return { deploy: () => {
    e && i();
  }, transactionId: f, loading: u, error: a };
};
var Ls = { exports: {} }, rs, Rc;
function _1() {
  if (Rc)
    return rs;
  Rc = 1;
  var e = 1e3, t = e * 60, r = t * 60, i = r * 24, n = i * 7, s = i * 365.25;
  rs = function(h, p) {
    p = p || {};
    var y = typeof h;
    if (y === "string" && h.length > 0)
      return u(h);
    if (y === "number" && isFinite(h))
      return p.long ? l(h) : a(h);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(h)
    );
  };
  function u(h) {
    if (h = String(h), !(h.length > 100)) {
      var p = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        h
      );
      if (p) {
        var y = parseFloat(p[1]), m = (p[2] || "ms").toLowerCase();
        switch (m) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return y * s;
          case "weeks":
          case "week":
          case "w":
            return y * n;
          case "days":
          case "day":
          case "d":
            return y * i;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return y * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return y * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return y * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return y;
          default:
            return;
        }
      }
    }
  }
  function a(h) {
    var p = Math.abs(h);
    return p >= i ? Math.round(h / i) + "d" : p >= r ? Math.round(h / r) + "h" : p >= t ? Math.round(h / t) + "m" : p >= e ? Math.round(h / e) + "s" : h + "ms";
  }
  function l(h) {
    var p = Math.abs(h);
    return p >= i ? f(h, p, i, "day") : p >= r ? f(h, p, r, "hour") : p >= t ? f(h, p, t, "minute") : p >= e ? f(h, p, e, "second") : h + " ms";
  }
  function f(h, p, y, m) {
    var D = p >= y * 1.5;
    return Math.round(h / y) + " " + m + (D ? "s" : "");
  }
  return rs;
}
function E1(e) {
  r.debug = r, r.default = r, r.coerce = l, r.disable = s, r.enable = n, r.enabled = u, r.humanize = _1(), r.destroy = f, Object.keys(e).forEach((h) => {
    r[h] = e[h];
  }), r.names = [], r.skips = [], r.formatters = {};
  function t(h) {
    let p = 0;
    for (let y = 0; y < h.length; y++)
      p = (p << 5) - p + h.charCodeAt(y), p |= 0;
    return r.colors[Math.abs(p) % r.colors.length];
  }
  r.selectColor = t;
  function r(h) {
    let p, y = null, m, D;
    function I(...P) {
      if (!I.enabled)
        return;
      const U = I, E = Number(/* @__PURE__ */ new Date()), O = E - (p || E);
      U.diff = O, U.prev = p, U.curr = E, p = E, P[0] = r.coerce(P[0]), typeof P[0] != "string" && P.unshift("%O");
      let b = 0;
      P[0] = P[0].replace(/%([a-zA-Z%])/g, (d, o) => {
        if (d === "%%")
          return "%";
        b++;
        const g = r.formatters[o];
        if (typeof g == "function") {
          const A = P[b];
          d = g.call(U, A), P.splice(b, 1), b--;
        }
        return d;
      }), r.formatArgs.call(U, P), (U.log || r.log).apply(U, P);
    }
    return I.namespace = h, I.useColors = r.useColors(), I.color = r.selectColor(h), I.extend = i, I.destroy = r.destroy, Object.defineProperty(I, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => y !== null ? y : (m !== r.namespaces && (m = r.namespaces, D = r.enabled(h)), D),
      set: (P) => {
        y = P;
      }
    }), typeof r.init == "function" && r.init(I), I;
  }
  function i(h, p) {
    const y = r(this.namespace + (typeof p > "u" ? ":" : p) + h);
    return y.log = this.log, y;
  }
  function n(h) {
    r.save(h), r.namespaces = h, r.names = [], r.skips = [];
    let p;
    const y = (typeof h == "string" ? h : "").split(/[\s,]+/), m = y.length;
    for (p = 0; p < m; p++)
      y[p] && (h = y[p].replace(/\*/g, ".*?"), h[0] === "-" ? r.skips.push(new RegExp("^" + h.slice(1) + "$")) : r.names.push(new RegExp("^" + h + "$")));
  }
  function s() {
    const h = [
      ...r.names.map(a),
      ...r.skips.map(a).map((p) => "-" + p)
    ].join(",");
    return r.enable(""), h;
  }
  function u(h) {
    if (h[h.length - 1] === "*")
      return !0;
    let p, y;
    for (p = 0, y = r.skips.length; p < y; p++)
      if (r.skips[p].test(h))
        return !1;
    for (p = 0, y = r.names.length; p < y; p++)
      if (r.names[p].test(h))
        return !0;
    return !1;
  }
  function a(h) {
    return h.toString().substring(2, h.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function l(h) {
    return h instanceof Error ? h.stack || h.message : h;
  }
  function f() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return r.enable(r.load()), r;
}
var S1 = E1;
(function(e, t) {
  t.formatArgs = i, t.save = n, t.load = s, t.useColors = r, t.storage = u(), t.destroy = (() => {
    let l = !1;
    return () => {
      l || (l = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), t.colors = [
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
  function i(l) {
    if (l[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + l[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors)
      return;
    const f = "color: " + this.color;
    l.splice(1, 0, f, "color: inherit");
    let h = 0, p = 0;
    l[0].replace(/%[a-zA-Z%]/g, (y) => {
      y !== "%%" && (h++, y === "%c" && (p = h));
    }), l.splice(p, 0, f);
  }
  t.log = console.debug || console.log || (() => {
  });
  function n(l) {
    try {
      l ? t.storage.setItem("debug", l) : t.storage.removeItem("debug");
    } catch {
    }
  }
  function s() {
    let l;
    try {
      l = t.storage.getItem("debug");
    } catch {
    }
    return !l && typeof process < "u" && "env" in process && (l = process.env.DEBUG), l;
  }
  function u() {
    try {
      return localStorage;
    } catch {
    }
  }
  e.exports = S1(t);
  const { formatters: a } = e.exports;
  a.j = function(l) {
    try {
      return JSON.stringify(l);
    } catch (f) {
      return "[UnexpectedJSONParseError]: " + f.message;
    }
  };
})(Ls, Ls.exports);
var D1 = Ls.exports;
const O1 = /* @__PURE__ */ yn(D1), po = O1("wallet:sdk");
po.enabled = !0;
const sm = () => {
  const e = or(), [t] = dr((a) => [
    a.disconnect
  ]), { disconnect: r, error: i, loading: n } = Uv({
    topic: e == null ? void 0 : e.topic,
    reason: st("USER_DISCONNECTED")
  }), s = async () => {
    if (e) {
      try {
        r();
      } catch {
        po("could not disconnect session entirely");
      }
      t();
    }
  }, u = i ? i.message : void 0;
  return { disconnect: s, error: u, loading: n };
}, om = (e) => {
  const t = or(), [r] = dr((m) => [
    m.chainId
  ]), i = e == null ? void 0 : e.inputs.map(
    (m) => typeof m == "string" ? m : m.plaintext
  ).join(" "), { request: n, data: s, error: u, loading: a } = zr({
    topic: (t == null ? void 0 : t.topic) ?? "",
    chainId: r ?? "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "aleo_executeProgram",
      params: {
        type: "EXECUTE",
        data: {
          data: {
            ...e,
            inputs: i ?? ""
          }
        }
      }
    }
  }), l = u ? u.message : s && s.type === "EXECUTE_REJ" ? s.data.error : void 0, f = s && s.type === "EXECUTE_RES" ? s : void 0, h = f == null ? void 0 : f.data.transactionId, p = f == null ? void 0 : f.data.transitions;
  return { execute: () => {
    e && n();
  }, transactionId: h, transitions: p, error: l, loading: a };
}, am = () => {
  const [e, t] = Oi({
    loading: !0
  });
  return kt(() => {
  }, []), { ...e };
}, cm = 50, um = (e) => {
  try {
    return JSON.stringify(e, null, 2).replaceAll('"', "") ?? "";
  } catch {
    return "";
  }
}, lm = ({ filter: e, page: t }) => {
  const r = or(), [i, n] = dr((I) => [
    I.chainId,
    I.account
  ]);
  (e == null ? void 0 : e.program_id) === "" && (e.program_id = void 0);
  const { request: s, data: u, error: a, loading: l } = zr({
    topic: r == null ? void 0 : r.topic,
    chainId: i ?? "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "aleo_getRecords",
      params: {
        type: "GET_RECORDS",
        data: {
          data: {
            filter: e,
            page: t
          }
        }
      }
    }
  });
  no(({ id: I, params: P, topic: U }) => {
    P.event.name === "accountSynced" && r && r.topic === U && !l && s();
  });
  const f = !!r && !!n;
  kt(() => {
    f && !l && s();
  }, [f, n]);
  const h = () => {
    !!r && !!n && !l && s();
  }, p = a ? a.message : u && u.type === "GET_RECORDS_REJ" ? u.data.error : void 0, y = u && u.type === "GET_RECORDS_RES" ? u : void 0, m = y == null ? void 0 : y.data.records, D = (y == null ? void 0 : y.data.totalRecordCount) ?? 0;
  return { request: h, records: m, error: p, loading: l, totalRecordCount: D };
}, I1 = () => {
  const e = or(), [t, r, i] = dr((n) => [
    n.setAccount,
    n.setAccounts,
    n.disconnect
  ]);
  kt(() => {
    if (e) {
      window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
      const n = e.namespaces.aleo.accounts.map((s) => {
        const u = s.split(":");
        return {
          network: u[0],
          chainId: u[1],
          address: u[2],
          shortenedAddress: nl(u[2])
        };
      });
      r(n ?? []), n[0] && t(n[0]);
    }
  }, [e == null ? void 0 : e.topic]), Qu(({ id: n, topic: s }) => {
    po("session deleted! topic: ", s), i();
  });
}, fm = (e) => {
  var p;
  const t = or(), [r] = dr((y) => [
    y.chainId
  ]), i = e.inputs.map(
    (y) => typeof y == "string" ? y : y.plaintext
  ), { request: n, data: s, error: u, loading: a } = zr({
    topic: (t == null ? void 0 : t.topic) ?? "",
    chainId: r ?? "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "createEvent",
      params: {
        type: e.type,
        programId: e.programId,
        functionId: e.functionId,
        fee: e.fee,
        inputs: i
      }
    }
  }), l = u ? u.message : s.error, f = (p = s == null ? void 0 : s.data) == null ? void 0 : p.eventId;
  return { createEvent: () => {
    e && n();
  }, eventId: f, error: l, loading: a };
};
function x1(e, t, r = t) {
  const i = e < BigInt(0), n = e.toString().slice(i ? 1 : 0).padStart(t + 1, "0"), s = n.slice(0, n.length - t), u = n.slice(-t);
  let a = u.length - 1;
  for (; u[a] === "0"; )
    --a;
  const l = u.slice(0, a + 1);
  return (i ? "-" : "") + (l ? `${s}.${l.slice(0, r)}` : s);
}
function hm(e, t) {
  const [r, i] = e.split("."), n = (i || "").replace(/0+$/, "").slice(0, t), s = BigInt(10) ** BigInt(t), u = s / BigInt(10) ** BigInt(n.length || 0);
  return BigInt(n || 0) * u + BigInt(r || 0) * s;
}
var C1 = /* @__PURE__ */ ((e) => (e[e.ETH = 0] = "ETH", e[e.DAI = 1] = "DAI", e))(C1 || {});
function R1(e) {
  switch (e) {
    case 0:
      return {
        id: 0,
        symbol: "ETH",
        coinMarketCapID: "1027"
      };
    case 1:
      return {
        id: 1,
        symbol: "DAI",
        coinMarketCapID: "4943"
      };
  }
}
class dm {
  constructor(t, r) {
    Ir(this, "type");
    Ir(this, "id");
    /// aztec asset id
    Ir(this, "symbol");
    Ir(this, "coinMarketCapID");
    Ir(this, "value");
    Ir(this, "getDisplayValue", () => x1(this.value, 18) + " " + this.symbol);
    this.type = t;
    const { id: i, symbol: n, coinMarketCapID: s } = R1(t);
    this.id = i, this.symbol = n, this.coinMarketCapID = s, this.value = r;
  }
}
const pm = "0x6b175474e89094c44da98b954eedeac495271d0f", gm = [
  {
    constant: !0,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: !1,
    type: "function"
  },
  {
    constant: !0,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8"
      }
    ],
    payable: !1,
    type: "function"
  },
  {
    constant: !0,
    inputs: [
      {
        name: "_owner",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256"
      }
    ],
    payable: !1,
    type: "function"
  },
  {
    constant: !0,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: !1,
    type: "function"
  }
];
var A1 = /* @__PURE__ */ ((e) => (e.Unknown = "Unknown", e.Deploy = "Deploy", e.Execute = "Execute", e.Send = "Send", e.Receive = "Receive", e.Join = "Join", e.Split = "Split", e.Shield = "Shield", e.Unshield = "Unshield", e))(A1 || {}), P1 = /* @__PURE__ */ ((e) => (e.Private = "Private", e.Public = "Public", e))(P1 || {});
export {
  C1 as A,
  Zu as B,
  el as C,
  so as D,
  xs as E,
  Gv as F,
  dc as G,
  Yv as H,
  X1 as I,
  pm as J,
  gm as K,
  A1 as L,
  Q1 as P,
  Gl as R,
  Ac as T,
  P1 as V,
  _t as a,
  Z1 as b,
  nl as c,
  tm as d,
  rm as e,
  im as f,
  nm as g,
  sm as h,
  om as i,
  am as j,
  cm as k,
  um as l,
  lm as m,
  $o as n,
  F1 as o,
  Jt as p,
  I1 as q,
  fm as r,
  Pn as s,
  L1 as t,
  em as u,
  x1 as v,
  hm as w,
  dm as x,
  Xr as y,
  Hv as z
};
