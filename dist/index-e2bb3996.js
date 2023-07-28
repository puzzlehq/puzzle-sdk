import Yr, { memo as Sl, useEffect as Ct, useState as Lt, useDebugValue as Dl } from "react";
var Nt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Os(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function xs(e) {
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
var Hn = { exports: {} }, oi = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yo;
function Ol() {
  if (yo)
    return oi;
  yo = 1;
  var e = Yr, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(a, l, f) {
    var h, b = {}, v = null, _ = null;
    f !== void 0 && (v = "" + f), l.key !== void 0 && (v = "" + l.key), l.ref !== void 0 && (_ = l.ref);
    for (h in l)
      i.call(l, h) && !s.hasOwnProperty(h) && (b[h] = l[h]);
    if (a && a.defaultProps)
      for (h in l = a.defaultProps, l)
        b[h] === void 0 && (b[h] = l[h]);
    return { $$typeof: t, type: a, key: v, ref: _, props: b, _owner: n.current };
  }
  return oi.Fragment = r, oi.jsx = u, oi.jsxs = u, oi;
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
var bo;
function xl() {
  return bo || (bo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Yr, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), O = Symbol.iterator, R = "@@iterator";
    function N(m) {
      if (m === null || typeof m != "object")
        return null;
      var M = O && m[O] || m[R];
      return typeof M == "function" ? M : null;
    }
    var B = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(m) {
      {
        for (var M = arguments.length, J = new Array(M > 1 ? M - 1 : 0), se = 1; se < M; se++)
          J[se - 1] = arguments[se];
        x("error", m, J);
      }
    }
    function x(m, M, J) {
      {
        var se = B.ReactDebugCurrentFrame, Ae = se.getStackAddendum();
        Ae !== "" && (M += "%s", J = J.concat([Ae]));
        var Se = J.map(function(Oe) {
          return String(Oe);
        });
        Se.unshift("Warning: " + M), Function.prototype.apply.call(console[m], console, Se);
      }
    }
    var g = !1, w = !1, d = !1, o = !1, p = !1, L;
    L = Symbol.for("react.module.reference");
    function U(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === i || m === s || p || m === n || m === f || m === h || o || m === _ || g || w || d || typeof m == "object" && m !== null && (m.$$typeof === v || m.$$typeof === b || m.$$typeof === u || m.$$typeof === a || m.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      m.$$typeof === L || m.getModuleId !== void 0));
    }
    function $(m, M, J) {
      var se = m.displayName;
      if (se)
        return se;
      var Ae = M.displayName || M.name || "";
      return Ae !== "" ? J + "(" + Ae + ")" : J;
    }
    function F(m) {
      return m.displayName || "Context";
    }
    function q(m) {
      if (m == null)
        return null;
      if (typeof m.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
        return m.displayName || m.name || null;
      if (typeof m == "string")
        return m;
      switch (m) {
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
      if (typeof m == "object")
        switch (m.$$typeof) {
          case a:
            var M = m;
            return F(M) + ".Consumer";
          case u:
            var J = m;
            return F(J._context) + ".Provider";
          case l:
            return $(m, m.render, "ForwardRef");
          case b:
            var se = m.displayName || null;
            return se !== null ? se : q(m.type) || "Memo";
          case v: {
            var Ae = m, Se = Ae._payload, Oe = Ae._init;
            try {
              return q(Oe(Se));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var E = Object.assign, C = 0, G, V, z, k, j, W, oe;
    function H() {
    }
    H.__reactDisabledLog = !0;
    function ie() {
      {
        if (C === 0) {
          G = console.log, V = console.info, z = console.warn, k = console.error, j = console.group, W = console.groupCollapsed, oe = console.groupEnd;
          var m = {
            configurable: !0,
            enumerable: !0,
            value: H,
            writable: !0
          };
          Object.defineProperties(console, {
            info: m,
            log: m,
            warn: m,
            error: m,
            group: m,
            groupCollapsed: m,
            groupEnd: m
          });
        }
        C++;
      }
    }
    function Z() {
      {
        if (C--, C === 0) {
          var m = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: E({}, m, {
              value: G
            }),
            info: E({}, m, {
              value: V
            }),
            warn: E({}, m, {
              value: z
            }),
            error: E({}, m, {
              value: k
            }),
            group: E({}, m, {
              value: j
            }),
            groupCollapsed: E({}, m, {
              value: W
            }),
            groupEnd: E({}, m, {
              value: oe
            })
          });
        }
        C < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = B.ReactCurrentDispatcher, P;
    function T(m, M, J) {
      {
        if (P === void 0)
          try {
            throw Error();
          } catch (Ae) {
            var se = Ae.stack.trim().match(/\n( *(at )?)/);
            P = se && se[1] || "";
          }
        return `
` + P + m;
      }
    }
    var I = !1, c;
    {
      var D = typeof WeakMap == "function" ? WeakMap : Map;
      c = new D();
    }
    function Y(m, M) {
      if (!m || I)
        return "";
      {
        var J = c.get(m);
        if (J !== void 0)
          return J;
      }
      var se;
      I = !0;
      var Ae = Error.prepareStackTrace;
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
            } catch (kt) {
              se = kt;
            }
            Reflect.construct(m, [], Oe);
          } else {
            try {
              Oe.call();
            } catch (kt) {
              se = kt;
            }
            m.call(Oe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (kt) {
            se = kt;
          }
          m();
        }
      } catch (kt) {
        if (kt && se && typeof kt.stack == "string") {
          for (var _e = kt.stack.split(`
`), ht = se.stack.split(`
`), Ke = _e.length - 1, Ye = ht.length - 1; Ke >= 1 && Ye >= 0 && _e[Ke] !== ht[Ye]; )
            Ye--;
          for (; Ke >= 1 && Ye >= 0; Ke--, Ye--)
            if (_e[Ke] !== ht[Ye]) {
              if (Ke !== 1 || Ye !== 1)
                do
                  if (Ke--, Ye--, Ye < 0 || _e[Ke] !== ht[Ye]) {
                    var nt = `
` + _e[Ke].replace(" at new ", " at ");
                    return m.displayName && nt.includes("<anonymous>") && (nt = nt.replace("<anonymous>", m.displayName)), typeof m == "function" && c.set(m, nt), nt;
                  }
                while (Ke >= 1 && Ye >= 0);
              break;
            }
        }
      } finally {
        I = !1, re.current = Se, Z(), Error.prepareStackTrace = Ae;
      }
      var fr = m ? m.displayName || m.name : "", Ui = fr ? T(fr) : "";
      return typeof m == "function" && c.set(m, Ui), Ui;
    }
    function Q(m, M, J) {
      return Y(m, !1);
    }
    function be(m) {
      var M = m.prototype;
      return !!(M && M.isReactComponent);
    }
    function ve(m, M, J) {
      if (m == null)
        return "";
      if (typeof m == "function")
        return Y(m, be(m));
      if (typeof m == "string")
        return T(m);
      switch (m) {
        case f:
          return T("Suspense");
        case h:
          return T("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case l:
            return Q(m.render);
          case b:
            return ve(m.type, M, J);
          case v: {
            var se = m, Ae = se._payload, Se = se._init;
            try {
              return ve(Se(Ae), M, J);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, xe = {}, Be = B.ReactDebugCurrentFrame;
    function Le(m) {
      if (m) {
        var M = m._owner, J = ve(m.type, m._source, M ? M.type : null);
        Be.setExtraStackFrame(J);
      } else
        Be.setExtraStackFrame(null);
    }
    function De(m, M, J, se, Ae) {
      {
        var Se = Function.call.bind(he);
        for (var Oe in m)
          if (Se(m, Oe)) {
            var _e = void 0;
            try {
              if (typeof m[Oe] != "function") {
                var ht = Error((se || "React class") + ": " + J + " type `" + Oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[Oe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ht.name = "Invariant Violation", ht;
              }
              _e = m[Oe](M, Oe, se, J, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ke) {
              _e = Ke;
            }
            _e && !(_e instanceof Error) && (Le(Ae), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", se || "React class", J, Oe, typeof _e), Le(null)), _e instanceof Error && !(_e.message in xe) && (xe[_e.message] = !0, Le(Ae), S("Failed %s type: %s", J, _e.message), Le(null));
          }
      }
    }
    var we = Array.isArray;
    function de(m) {
      return we(m);
    }
    function ge(m) {
      {
        var M = typeof Symbol == "function" && Symbol.toStringTag, J = M && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return J;
      }
    }
    function pe(m) {
      try {
        return ue(m), !1;
      } catch {
        return !0;
      }
    }
    function ue(m) {
      return "" + m;
    }
    function ce(m) {
      if (pe(m))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ge(m)), ue(m);
    }
    var ne = B.ReactCurrentOwner, ye = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, ae, Ee;
    Ee = {};
    function Ie(m) {
      if (he.call(m, "ref")) {
        var M = Object.getOwnPropertyDescriptor(m, "ref").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return m.ref !== void 0;
    }
    function Te(m) {
      if (he.call(m, "key")) {
        var M = Object.getOwnPropertyDescriptor(m, "key").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return m.key !== void 0;
    }
    function Pe(m, M) {
      if (typeof m.ref == "string" && ne.current && M && ne.current.stateNode !== M) {
        var J = q(ne.current.type);
        Ee[J] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', q(ne.current.type), m.ref), Ee[J] = !0);
      }
    }
    function Re(m, M) {
      {
        var J = function() {
          me || (me = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        J.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: J,
          configurable: !0
        });
      }
    }
    function Tt(m, M) {
      {
        var J = function() {
          ae || (ae = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        J.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: J,
          configurable: !0
        });
      }
    }
    var Mt = function(m, M, J, se, Ae, Se, Oe) {
      var _e = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: m,
        key: M,
        ref: J,
        props: Oe,
        // Record the component responsible for creating this element.
        _owner: Se
      };
      return _e._store = {}, Object.defineProperty(_e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(_e, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: se
      }), Object.defineProperty(_e, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ae
      }), Object.freeze && (Object.freeze(_e.props), Object.freeze(_e)), _e;
    };
    function Qt(m, M, J, se, Ae) {
      {
        var Se, Oe = {}, _e = null, ht = null;
        J !== void 0 && (ce(J), _e = "" + J), Te(M) && (ce(M.key), _e = "" + M.key), Ie(M) && (ht = M.ref, Pe(M, Ae));
        for (Se in M)
          he.call(M, Se) && !ye.hasOwnProperty(Se) && (Oe[Se] = M[Se]);
        if (m && m.defaultProps) {
          var Ke = m.defaultProps;
          for (Se in Ke)
            Oe[Se] === void 0 && (Oe[Se] = Ke[Se]);
        }
        if (_e || ht) {
          var Ye = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          _e && Re(Oe, Ye), ht && Tt(Oe, Ye);
        }
        return Mt(m, _e, ht, Ae, se, ne.current, Oe);
      }
    }
    var ft = B.ReactCurrentOwner, Zt = B.ReactDebugCurrentFrame;
    function jt(m) {
      if (m) {
        var M = m._owner, J = ve(m.type, m._source, M ? M.type : null);
        Zt.setExtraStackFrame(J);
      } else
        Zt.setExtraStackFrame(null);
    }
    var lr;
    lr = !1;
    function qe(m) {
      return typeof m == "object" && m !== null && m.$$typeof === t;
    }
    function Fe() {
      {
        if (ft.current) {
          var m = q(ft.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
    }
    function We(m) {
      {
        if (m !== void 0) {
          var M = m.fileName.replace(/^.*[\\\/]/, ""), J = m.lineNumber;
          return `

Check your code at ` + M + ":" + J + ".";
        }
        return "";
      }
    }
    var Ve = {};
    function He(m) {
      {
        var M = Fe();
        if (!M) {
          var J = typeof m == "string" ? m : m.displayName || m.name;
          J && (M = `

Check the top-level render call using <` + J + ">.");
        }
        return M;
      }
    }
    function Me(m, M) {
      {
        if (!m._store || m._store.validated || m.key != null)
          return;
        m._store.validated = !0;
        var J = He(M);
        if (Ve[J])
          return;
        Ve[J] = !0;
        var se = "";
        m && m._owner && m._owner !== ft.current && (se = " It was passed a child from " + q(m._owner.type) + "."), jt(m), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', J, se), jt(null);
      }
    }
    function Qe(m, M) {
      {
        if (typeof m != "object")
          return;
        if (de(m))
          for (var J = 0; J < m.length; J++) {
            var se = m[J];
            qe(se) && Me(se, M);
          }
        else if (qe(m))
          m._store && (m._store.validated = !0);
        else if (m) {
          var Ae = N(m);
          if (typeof Ae == "function" && Ae !== m.entries)
            for (var Se = Ae.call(m), Oe; !(Oe = Se.next()).done; )
              qe(Oe.value) && Me(Oe.value, M);
        }
      }
    }
    function tt(m) {
      {
        var M = m.type;
        if (M == null || typeof M == "string")
          return;
        var J;
        if (typeof M == "function")
          J = M.propTypes;
        else if (typeof M == "object" && (M.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        M.$$typeof === b))
          J = M.propTypes;
        else
          return;
        if (J) {
          var se = q(M);
          De(J, m.props, "prop", se, m);
        } else if (M.PropTypes !== void 0 && !lr) {
          lr = !0;
          var Ae = q(M);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ae || "Unknown");
        }
        typeof M.getDefaultProps == "function" && !M.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function rt(m) {
      {
        for (var M = Object.keys(m.props), J = 0; J < M.length; J++) {
          var se = M[J];
          if (se !== "children" && se !== "key") {
            jt(m), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", se), jt(null);
            break;
          }
        }
        m.ref !== null && (jt(m), S("Invalid attribute `ref` supplied to `React.Fragment`."), jt(null));
      }
    }
    function Ze(m, M, J, se, Ae, Se) {
      {
        var Oe = U(m);
        if (!Oe) {
          var _e = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (_e += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ht = We(Ae);
          ht ? _e += ht : _e += Fe();
          var Ke;
          m === null ? Ke = "null" : de(m) ? Ke = "array" : m !== void 0 && m.$$typeof === t ? (Ke = "<" + (q(m.type) || "Unknown") + " />", _e = " Did you accidentally export a JSX literal instead of a component?") : Ke = typeof m, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ke, _e);
        }
        var Ye = Qt(m, M, J, Ae, Se);
        if (Ye == null)
          return Ye;
        if (Oe) {
          var nt = M.children;
          if (nt !== void 0)
            if (se)
              if (de(nt)) {
                for (var fr = 0; fr < nt.length; fr++)
                  Qe(nt[fr], m);
                Object.freeze && Object.freeze(nt);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Qe(nt, m);
        }
        return m === i ? rt(Ye) : tt(Ye), Ye;
      }
    }
    function it(m, M, J) {
      return Ze(m, M, J, !0);
    }
    function et(m, M, J) {
      return Ze(m, M, J, !1);
    }
    var Ge = et, Ue = it;
    ai.Fragment = i, ai.jsx = Ge, ai.jsxs = Ue;
  }()), ai;
}
process.env.NODE_ENV === "production" ? Hn.exports = Ol() : Hn.exports = xl();
var Gn = Hn.exports;
const Il = Symbol(), vo = Object.getPrototypeOf, Yn = /* @__PURE__ */ new WeakMap(), Rl = (e) => e && (Yn.has(e) ? Yn.get(e) : vo(e) === Object.prototype || vo(e) === Array.prototype), Al = (e) => Rl(e) && e[Il] || null, mo = (e, t = !0) => {
  Yn.set(e, t);
}, wn = (e) => typeof e == "object" && e !== null, gr = /* @__PURE__ */ new WeakMap(), zi = /* @__PURE__ */ new WeakSet(), Cl = (e = Object.is, t = (h, b) => new Proxy(h, b), r = (h) => wn(h) && !zi.has(h) && (Array.isArray(h) || !(Symbol.iterator in h)) && !(h instanceof WeakMap) && !(h instanceof WeakSet) && !(h instanceof Error) && !(h instanceof Number) && !(h instanceof Date) && !(h instanceof String) && !(h instanceof RegExp) && !(h instanceof ArrayBuffer), i = (h) => h.configurable && h.enumerable && h.writable, n = (h) => {
  switch (h.status) {
    case "fulfilled":
      return h.value;
    case "rejected":
      throw h.reason;
    default:
      throw h;
  }
}, s = /* @__PURE__ */ new WeakMap(), u = (h, b, v = n) => {
  const _ = s.get(h);
  if ((_ == null ? void 0 : _[0]) === b)
    return _[1];
  const O = Array.isArray(h) ? [] : Object.create(Object.getPrototypeOf(h));
  return mo(O, !0), s.set(h, [b, O]), Reflect.ownKeys(h).forEach((R) => {
    if (Object.getOwnPropertyDescriptor(O, R))
      return;
    const N = Reflect.get(h, R), B = {
      value: N,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (zi.has(N))
      mo(N, !1);
    else if (N instanceof Promise)
      delete B.value, B.get = () => v(N);
    else if (gr.has(N)) {
      const [S, x] = gr.get(
        N
      );
      B.value = u(
        S,
        x(),
        v
      );
    }
    Object.defineProperty(O, R, B);
  }), Object.preventExtensions(O);
}, a = /* @__PURE__ */ new WeakMap(), l = [1, 1], f = (h) => {
  if (!wn(h))
    throw new Error("object required");
  const b = a.get(h);
  if (b)
    return b;
  let v = l[0];
  const _ = /* @__PURE__ */ new Set(), O = ($, F = ++l[0]) => {
    v !== F && (v = F, _.forEach((q) => q($, F)));
  };
  let R = l[1];
  const N = ($ = ++l[1]) => (R !== $ && !_.size && (R = $, S.forEach(([F]) => {
    const q = F[1]($);
    q > v && (v = q);
  })), v), B = ($) => (F, q) => {
    const E = [...F];
    E[1] = [$, ...E[1]], O(E, q);
  }, S = /* @__PURE__ */ new Map(), x = ($, F) => {
    if (_.size) {
      const q = F[3](B($));
      S.set($, [F, q]);
    } else
      S.set($, [F]);
  }, g = ($) => {
    var F;
    const q = S.get($);
    q && (S.delete($), (F = q[1]) == null || F.call(q));
  }, w = ($) => (_.add($), _.size === 1 && S.forEach(([q, E], C) => {
    const G = q[3](B(C));
    S.set(C, [q, G]);
  }), () => {
    _.delete($), _.size === 0 && S.forEach(([q, E], C) => {
      E && (E(), S.set(C, [q]));
    });
  }), d = Array.isArray(h) ? [] : Object.create(Object.getPrototypeOf(h)), o = ($, F, q, E, C) => {
    if ($ && (e(F, E) || a.has(E) && e(F, a.get(E))))
      return;
    g(q), wn(E) && (E = Al(E) || E);
    let G = E;
    if (E instanceof Promise)
      E.then((V) => {
        E.status = "fulfilled", E.value = V, O(["resolve", [q], V]);
      }).catch((V) => {
        E.status = "rejected", E.reason = V, O(["reject", [q], V]);
      });
    else {
      !gr.has(E) && r(E) && (G = f(E));
      const V = !zi.has(G) && gr.get(G);
      V && x(q, V);
    }
    C(G), O(["set", [q], E, F]);
  }, L = t(d, {
    deleteProperty($, F) {
      const q = Reflect.get($, F);
      g(F);
      const E = Reflect.deleteProperty($, F);
      return E && O(["delete", [F], q]), E;
    },
    set($, F, q, E) {
      const C = Reflect.has($, F), G = Reflect.get($, F, E);
      return o(C, G, F, q, (V) => {
        Reflect.set($, F, V, E);
      }), !0;
    },
    defineProperty($, F, q) {
      if (i(q)) {
        const E = Reflect.getOwnPropertyDescriptor($, F);
        if (!E || i(E))
          return o(
            !!E && "value" in E,
            E == null ? void 0 : E.value,
            F,
            q.value,
            (C) => {
              Reflect.defineProperty($, F, {
                ...q,
                value: C
              });
            }
          ), !0;
      }
      return Reflect.defineProperty($, F, q);
    }
  });
  a.set(h, L);
  const U = [
    d,
    N,
    u,
    w
  ];
  return gr.set(L, U), Reflect.ownKeys(h).forEach(($) => {
    const F = Object.getOwnPropertyDescriptor(
      h,
      $
    );
    "value" in F && (L[$] = h[$], delete F.value, delete F.writable), Object.defineProperty(d, $, F);
  }), L;
}) => [
  // public functions
  f,
  // shared state
  gr,
  zi,
  // internal things
  e,
  t,
  r,
  i,
  n,
  s,
  u,
  a,
  l
], [Tl] = Cl();
function mr(e = {}) {
  return Tl(e);
}
function Lr(e, t, r) {
  const i = gr.get(e);
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
function Pl(e, t) {
  const r = gr.get(e), [i, n, s] = r;
  return s(i, n(), t);
}
const at = mr({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), vc = { state: at, subscribe(e) {
  return Lr(at, () => e(at));
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
} }, Et = { WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE", WCM_VERSION: "WCM_VERSION", RECOMMENDED_WALLET_AMOUNT: 9, isMobile() {
  return typeof window < "u" ? !!(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
}, isAndroid() {
  return Et.isMobile() && navigator.userAgent.toLowerCase().includes("android");
}, isIos() {
  const e = navigator.userAgent.toLowerCase();
  return Et.isMobile() && (e.includes("iphone") || e.includes("ipad"));
}, isHttpUrl(e) {
  return e.startsWith("http://") || e.startsWith("https://");
}, isArray(e) {
  return Array.isArray(e) && e.length > 0;
}, formatNativeUrl(e, t, r) {
  if (Et.isHttpUrl(e))
    return this.formatUniversalUrl(e, t, r);
  let i = e;
  i.includes("://") || (i = e.replaceAll("/", "").replaceAll(":", ""), i = `${i}://`), i.endsWith("/") || (i = `${i}/`), this.setWalletConnectDeepLink(i, r);
  const n = encodeURIComponent(t);
  return `${i}wc?uri=${n}`;
}, formatUniversalUrl(e, t, r) {
  if (!Et.isHttpUrl(e))
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
    localStorage.setItem(Et.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: e, name: t }));
  } catch {
    console.info("Unable to set WalletConnect deep link");
  }
}, setWalletConnectAndroidDeepLink(e) {
  try {
    const [t] = e.split("?");
    localStorage.setItem(Et.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: t, name: "Android" }));
  } catch {
    console.info("Unable to set WalletConnect android deep link");
  }
}, removeWalletConnectDeepLink() {
  try {
    localStorage.removeItem(Et.WALLETCONNECT_DEEPLINK_CHOICE);
  } catch {
    console.info("Unable to remove WalletConnect deep link");
  }
}, setModalVersionInStorage() {
  try {
    typeof localStorage < "u" && localStorage.setItem(Et.WCM_VERSION, "2.6.1");
  } catch {
    console.info("Unable to set Web3Modal version in storage");
  }
}, getWalletRouterData() {
  var e;
  const t = (e = vc.state.data) == null ? void 0 : e.Wallet;
  if (!t)
    throw new Error('Missing "Wallet" view data');
  return t;
} }, Nl = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), vt = mr({ enabled: Nl, userSessionId: "", events: [], connectedWalletId: void 0 }), Ll = { state: vt, subscribe(e) {
  return Lr(vt.events, () => e(Pl(vt.events[vt.events.length - 1])));
}, initialize() {
  vt.enabled && typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" && (vt.userSessionId = crypto.randomUUID());
}, setConnectedWalletId(e) {
  vt.connectedWalletId = e;
}, click(e) {
  if (vt.enabled) {
    const t = { type: "CLICK", name: e.name, userSessionId: vt.userSessionId, timestamp: Date.now(), data: e };
    vt.events.push(t);
  }
}, track(e) {
  if (vt.enabled) {
    const t = { type: "TRACK", name: e.name, userSessionId: vt.userSessionId, timestamp: Date.now(), data: e };
    vt.events.push(t);
  }
}, view(e) {
  if (vt.enabled) {
    const t = { type: "VIEW", name: e.name, userSessionId: vt.userSessionId, timestamp: Date.now(), data: e };
    vt.events.push(t);
  }
} }, er = mr({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }), Yt = { state: er, subscribe(e) {
  return Lr(er, () => e(er));
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
} }, Vi = mr({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), Wr = { state: Vi, subscribe(e) {
  return Lr(Vi, () => e(Vi));
}, setConfig(e) {
  var t, r;
  Ll.initialize(), Yt.setChains(e.chains), Yt.setIsAuth(!!e.enableAuthMode), Yt.setIsCustomMobile(!!((t = e.mobileWallets) != null && t.length)), Yt.setIsCustomDesktop(!!((r = e.desktopWallets) != null && r.length)), Et.setModalVersionInStorage(), Object.assign(Vi, e);
} };
var Ul = Object.defineProperty, _o = Object.getOwnPropertySymbols, $l = Object.prototype.hasOwnProperty, Fl = Object.prototype.propertyIsEnumerable, wo = (e, t, r) => t in e ? Ul(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Ml = (e, t) => {
  for (var r in t || (t = {}))
    $l.call(t, r) && wo(e, r, t[r]);
  if (_o)
    for (var r of _o(t))
      Fl.call(t, r) && wo(e, r, t[r]);
  return e;
};
const Jn = "https://explorer-api.walletconnect.com", Xn = "wcm", Qn = "js-2.6.1";
async function Ki(e, t) {
  const r = Ml({ sdkType: Xn, sdkVersion: Qn }, t), i = new URL(e, Jn);
  return i.searchParams.append("projectId", Wr.state.projectId), Object.entries(r).forEach(([n, s]) => {
    s && i.searchParams.append(n, String(s));
  }), (await fetch(i)).json();
}
const Sr = { async getDesktopListings(e) {
  return Ki("/w3m/v1/getDesktopListings", e);
}, async getMobileListings(e) {
  return Ki("/w3m/v1/getMobileListings", e);
}, async getInjectedListings(e) {
  return Ki("/w3m/v1/getInjectedListings", e);
}, async getAllListings(e) {
  return Ki("/w3m/v1/getAllListings", e);
}, getWalletImageUrl(e) {
  return `${Jn}/w3m/v1/getWalletImage/${e}?projectId=${Wr.state.projectId}&sdkType=${Xn}&sdkVersion=${Qn}`;
}, getAssetImageUrl(e) {
  return `${Jn}/w3m/v1/getAssetImage/${e}?projectId=${Wr.state.projectId}&sdkType=${Xn}&sdkVersion=${Qn}`;
} };
var jl = Object.defineProperty, Eo = Object.getOwnPropertySymbols, Bl = Object.prototype.hasOwnProperty, ql = Object.prototype.propertyIsEnumerable, So = (e, t, r) => t in e ? jl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, zl = (e, t) => {
  for (var r in t || (t = {}))
    Bl.call(t, r) && So(e, r, t[r]);
  if (Eo)
    for (var r of Eo(t))
      ql.call(t, r) && So(e, r, t[r]);
  return e;
};
const Do = Et.isMobile(), tr = mr({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), ov = { state: tr, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: e, explorerExcludedWalletIds: t } = Wr.state;
  if (e === "NONE" || t === "ALL" && !e)
    return tr.recomendedWallets;
  if (Et.isArray(e)) {
    const r = { recommendedIds: e.join(",") }, { listings: i } = await Sr.getAllListings(r), n = Object.values(i);
    n.sort((s, u) => {
      const a = e.indexOf(s.id), l = e.indexOf(u.id);
      return a - l;
    }), tr.recomendedWallets = n;
  } else {
    const { chains: r, isAuth: i } = Yt.state, n = r == null ? void 0 : r.join(","), s = Et.isArray(t), u = { page: 1, sdks: i ? "auth_v1" : void 0, entries: Et.RECOMMENDED_WALLET_AMOUNT, chains: n, version: 2, excludedIds: s ? t.join(",") : void 0 }, { listings: a } = Do ? await Sr.getMobileListings(u) : await Sr.getDesktopListings(u);
    tr.recomendedWallets = Object.values(a);
  }
  return tr.recomendedWallets;
}, async getWallets(e) {
  const t = zl({}, e), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: i } = Wr.state, { recomendedWallets: n } = tr;
  if (i === "ALL")
    return tr.wallets;
  n.length ? t.excludedIds = n.map((b) => b.id).join(",") : Et.isArray(r) && (t.excludedIds = r.join(",")), Et.isArray(i) && (t.excludedIds = [t.excludedIds, i].filter(Boolean).join(",")), Yt.state.isAuth && (t.sdks = "auth_v1");
  const { page: s, search: u } = e, { listings: a, total: l } = Do ? await Sr.getMobileListings(t) : await Sr.getDesktopListings(t), f = Object.values(a), h = u ? "search" : "wallets";
  return tr[h] = { listings: [...tr[h].listings, ...f], total: l, page: s ?? 1 }, { listings: f, total: l };
}, getWalletImageUrl(e) {
  return Sr.getWalletImageUrl(e);
}, getAssetImageUrl(e) {
  return Sr.getAssetImageUrl(e);
}, resetSearch() {
  tr.search = { listings: [], total: 0, page: 1 };
} }, jr = mr({ open: !1 }), En = { state: jr, subscribe(e) {
  return Lr(jr, () => e(jr));
}, async open(e) {
  return new Promise((t) => {
    const { isUiLoaded: r, isDataLoaded: i } = Yt.state;
    if (Et.removeWalletConnectDeepLink(), Yt.setWalletConnectUri(e == null ? void 0 : e.uri), Yt.setChains(e == null ? void 0 : e.chains), vc.reset("ConnectWallet"), r && i)
      jr.open = !0, t();
    else {
      const n = setInterval(() => {
        const s = Yt.state;
        s.isUiLoaded && s.isDataLoaded && (clearInterval(n), jr.open = !0, t());
      }, 200);
    }
  });
}, close() {
  jr.open = !1;
} };
var Vl = Object.defineProperty, Oo = Object.getOwnPropertySymbols, Kl = Object.prototype.hasOwnProperty, kl = Object.prototype.propertyIsEnumerable, xo = (e, t, r) => t in e ? Vl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Wl = (e, t) => {
  for (var r in t || (t = {}))
    Kl.call(t, r) && xo(e, r, t[r]);
  if (Oo)
    for (var r of Oo(t))
      kl.call(t, r) && xo(e, r, t[r]);
  return e;
};
function Hl() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const ci = mr({ themeMode: Hl() ? "dark" : "light" }), Io = { state: ci, subscribe(e) {
  return Lr(ci, () => e(ci));
}, setThemeConfig(e) {
  const { themeMode: t, themeVariables: r } = e;
  t && (ci.themeMode = t), r && (ci.themeVariables = Wl({}, r));
} }, Dr = mr({ open: !1, message: "", variant: "success" }), av = { state: Dr, subscribe(e) {
  return Lr(Dr, () => e(Dr));
}, openToast(e, t) {
  Dr.open = !0, Dr.message = e, Dr.variant = t;
}, closeToast() {
  Dr.open = !1;
} };
let Gl = class {
  constructor(t) {
    this.openModal = En.open, this.closeModal = En.close, this.subscribeModal = En.subscribe, this.setTheme = Io.setThemeConfig, Io.setThemeConfig(t), Wr.setConfig(t), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-ea36b134.js");
      const t = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", t), Yt.setIsUiLoaded(!0);
    }
  }
};
var Is = { exports: {} }, Kr = typeof Reflect == "object" ? Reflect : null, Ro = Kr && typeof Kr.apply == "function" ? Kr.apply : function(t, r, i) {
  return Function.prototype.apply.call(t, r, i);
}, Hi;
Kr && typeof Kr.ownKeys == "function" ? Hi = Kr.ownKeys : Object.getOwnPropertySymbols ? Hi = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : Hi = function(t) {
  return Object.getOwnPropertyNames(t);
};
function Yl(e) {
  console && console.warn && console.warn(e);
}
var mc = Number.isNaN || function(t) {
  return t !== t;
};
function Ne() {
  Ne.init.call(this);
}
Is.exports = Ne;
Is.exports.once = Zl;
Ne.EventEmitter = Ne;
Ne.prototype._events = void 0;
Ne.prototype._eventsCount = 0;
Ne.prototype._maxListeners = void 0;
var Ao = 10;
function cn(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(Ne, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Ao;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || mc(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    Ao = e;
  }
});
Ne.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Ne.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || mc(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function _c(e) {
  return e._maxListeners === void 0 ? Ne.defaultMaxListeners : e._maxListeners;
}
Ne.prototype.getMaxListeners = function() {
  return _c(this);
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
    Ro(l, this, r);
  else
    for (var f = l.length, h = Oc(l, f), i = 0; i < f; ++i)
      Ro(h[i], this, r);
  return !0;
};
function wc(e, t, r, i) {
  var n, s, u;
  if (cn(r), s = e._events, s === void 0 ? (s = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (s.newListener !== void 0 && (e.emit(
    "newListener",
    t,
    r.listener ? r.listener : r
  ), s = e._events), u = s[t]), u === void 0)
    u = s[t] = r, ++e._eventsCount;
  else if (typeof u == "function" ? u = s[t] = i ? [r, u] : [u, r] : i ? u.unshift(r) : u.push(r), n = _c(e), n > 0 && u.length > n && !u.warned) {
    u.warned = !0;
    var a = new Error("Possible EventEmitter memory leak detected. " + u.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    a.name = "MaxListenersExceededWarning", a.emitter = e, a.type = t, a.count = u.length, Yl(a);
  }
  return e;
}
Ne.prototype.addListener = function(t, r) {
  return wc(this, t, r, !1);
};
Ne.prototype.on = Ne.prototype.addListener;
Ne.prototype.prependListener = function(t, r) {
  return wc(this, t, r, !0);
};
function Jl() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Ec(e, t, r) {
  var i = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r }, n = Jl.bind(i);
  return n.listener = r, i.wrapFn = n, n;
}
Ne.prototype.once = function(t, r) {
  return cn(r), this.on(t, Ec(this, t, r)), this;
};
Ne.prototype.prependOnceListener = function(t, r) {
  return cn(r), this.prependListener(t, Ec(this, t, r)), this;
};
Ne.prototype.removeListener = function(t, r) {
  var i, n, s, u, a;
  if (cn(r), n = this._events, n === void 0)
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
    s === 0 ? i.shift() : Xl(i, s), i.length === 1 && (n[t] = i[0]), n.removeListener !== void 0 && this.emit("removeListener", t, a || r);
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
function Sc(e, t, r) {
  var i = e._events;
  if (i === void 0)
    return [];
  var n = i[t];
  return n === void 0 ? [] : typeof n == "function" ? r ? [n.listener || n] : [n] : r ? Ql(n) : Oc(n, n.length);
}
Ne.prototype.listeners = function(t) {
  return Sc(this, t, !0);
};
Ne.prototype.rawListeners = function(t) {
  return Sc(this, t, !1);
};
Ne.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : Dc.call(e, t);
};
Ne.prototype.listenerCount = Dc;
function Dc(e) {
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
  return this._eventsCount > 0 ? Hi(this._events) : [];
};
function Oc(e, t) {
  for (var r = new Array(t), i = 0; i < t; ++i)
    r[i] = e[i];
  return r;
}
function Xl(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function Ql(e) {
  for (var t = new Array(e.length), r = 0; r < t.length; ++r)
    t[r] = e[r].listener || e[r];
  return t;
}
function Zl(e, t) {
  return new Promise(function(r, i) {
    function n(u) {
      e.removeListener(t, s), i(u);
    }
    function s() {
      typeof e.removeListener == "function" && e.removeListener("error", n), r([].slice.call(arguments));
    }
    xc(e, t, s, { once: !0 }), t !== "error" && ef(e, n, { once: !0 });
  });
}
function ef(e, t, r) {
  typeof e.on == "function" && xc(e, "error", t, r);
}
function xc(e, t, r, i) {
  if (typeof e.on == "function")
    i.once ? e.once(t, r) : e.on(t, r);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function n(s) {
      i.once && e.removeEventListener(t, n), r(s);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var Xt = Is.exports;
const Ic = /* @__PURE__ */ Os(Xt);
var un = {};
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
var Zn = function(e, t) {
  return Zn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
    r.__proto__ = i;
  } || function(r, i) {
    for (var n in i)
      i.hasOwnProperty(n) && (r[n] = i[n]);
  }, Zn(e, t);
};
function tf(e, t) {
  Zn(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var es = function() {
  return es = Object.assign || function(t) {
    for (var r, i = 1, n = arguments.length; i < n; i++) {
      r = arguments[i];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, es.apply(this, arguments);
};
function rf(e, t) {
  var r = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++)
      t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
  return r;
}
function nf(e, t, r, i) {
  var n = arguments.length, s = n < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, r) : i, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    s = Reflect.decorate(e, t, r, i);
  else
    for (var a = e.length - 1; a >= 0; a--)
      (u = e[a]) && (s = (n < 3 ? u(s) : n > 3 ? u(t, r, s) : u(t, r)) || s);
  return n > 3 && s && Object.defineProperty(t, r, s), s;
}
function sf(e, t) {
  return function(r, i) {
    t(r, i, e);
  };
}
function of(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function af(e, t, r, i) {
  function n(s) {
    return s instanceof r ? s : new r(function(u) {
      u(s);
    });
  }
  return new (r || (r = Promise))(function(s, u) {
    function a(h) {
      try {
        f(i.next(h));
      } catch (b) {
        u(b);
      }
    }
    function l(h) {
      try {
        f(i.throw(h));
      } catch (b) {
        u(b);
      }
    }
    function f(h) {
      h.done ? s(h.value) : n(h.value).then(a, l);
    }
    f((i = i.apply(e, t || [])).next());
  });
}
function cf(e, t) {
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
function uf(e, t, r, i) {
  i === void 0 && (i = r), e[i] = t[r];
}
function lf(e, t) {
  for (var r in e)
    r !== "default" && !t.hasOwnProperty(r) && (t[r] = e[r]);
}
function ts(e) {
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
function Rc(e, t) {
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
function ff() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(Rc(arguments[t]));
  return e;
}
function hf() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++)
    e += arguments[t].length;
  for (var i = Array(e), n = 0, t = 0; t < r; t++)
    for (var s = arguments[t], u = 0, a = s.length; u < a; u++, n++)
      i[n] = s[u];
  return i;
}
function xi(e) {
  return this instanceof xi ? (this.v = e, this) : new xi(e);
}
function df(e, t, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = r.apply(e, t || []), n, s = [];
  return n = {}, u("next"), u("throw"), u("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n;
  function u(v) {
    i[v] && (n[v] = function(_) {
      return new Promise(function(O, R) {
        s.push([v, _, O, R]) > 1 || a(v, _);
      });
    });
  }
  function a(v, _) {
    try {
      l(i[v](_));
    } catch (O) {
      b(s[0][3], O);
    }
  }
  function l(v) {
    v.value instanceof xi ? Promise.resolve(v.value.v).then(f, h) : b(s[0][2], v);
  }
  function f(v) {
    a("next", v);
  }
  function h(v) {
    a("throw", v);
  }
  function b(v, _) {
    v(_), s.shift(), s.length && a(s[0][0], s[0][1]);
  }
}
function pf(e) {
  var t, r;
  return t = {}, i("next"), i("throw", function(n) {
    throw n;
  }), i("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function i(n, s) {
    t[n] = e[n] ? function(u) {
      return (r = !r) ? { value: xi(e[n](u)), done: n === "return" } : s ? s(u) : u;
    } : s;
  }
}
function gf(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], r;
  return t ? t.call(e) : (e = typeof ts == "function" ? ts(e) : e[Symbol.iterator](), r = {}, i("next"), i("throw"), i("return"), r[Symbol.asyncIterator] = function() {
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
function yf(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
function bf(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  return t.default = e, t;
}
function vf(e) {
  return e && e.__esModule ? e : { default: e };
}
function mf(e, t) {
  if (!t.has(e))
    throw new TypeError("attempted to get private field on non-instance");
  return t.get(e);
}
function _f(e, t, r) {
  if (!t.has(e))
    throw new TypeError("attempted to set private field on non-instance");
  return t.set(e, r), r;
}
const wf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return es;
  },
  __asyncDelegator: pf,
  __asyncGenerator: df,
  __asyncValues: gf,
  __await: xi,
  __awaiter: af,
  __classPrivateFieldGet: mf,
  __classPrivateFieldSet: _f,
  __createBinding: uf,
  __decorate: nf,
  __exportStar: lf,
  __extends: tf,
  __generator: cf,
  __importDefault: vf,
  __importStar: bf,
  __makeTemplateObject: yf,
  __metadata: of,
  __param: sf,
  __read: Rc,
  __rest: rf,
  __spread: ff,
  __spreadArrays: hf,
  __values: ts
}, Symbol.toStringTag, { value: "Module" })), Kt = /* @__PURE__ */ xs(wf);
var Ai = {};
Object.defineProperty(Ai, "__esModule", { value: !0 });
function Ef(e) {
  if (typeof e != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof e}`);
  try {
    return JSON.parse(e);
  } catch {
    return e;
  }
}
Ai.safeJsonParse = Ef;
function Sf(e) {
  return typeof e == "string" ? e : JSON.stringify(e, (t, r) => typeof r > "u" ? null : r);
}
Ai.safeJsonStringify = Sf;
var ui = { exports: {} }, Co;
function Df() {
  return Co || (Co = 1, function() {
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
    }), typeof Nt < "u" && Nt.localStorage ? ui.exports = Nt.localStorage : typeof window < "u" && window.localStorage ? ui.exports = window.localStorage : ui.exports = new t();
  }()), ui.exports;
}
var Sn = {}, li = {}, To;
function Of() {
  if (To)
    return li;
  To = 1, Object.defineProperty(li, "__esModule", { value: !0 }), li.IKeyValueStorage = void 0;
  class e {
  }
  return li.IKeyValueStorage = e, li;
}
var fi = {}, Po;
function xf() {
  if (Po)
    return fi;
  Po = 1, Object.defineProperty(fi, "__esModule", { value: !0 }), fi.parseEntry = void 0;
  const e = Ai;
  function t(r) {
    var i;
    return [r[0], e.safeJsonParse((i = r[1]) !== null && i !== void 0 ? i : "")];
  }
  return fi.parseEntry = t, fi;
}
var No;
function If() {
  return No || (No = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = Kt;
    t.__exportStar(Of(), e), t.__exportStar(xf(), e);
  }(Sn)), Sn;
}
Object.defineProperty(un, "__esModule", { value: !0 });
un.KeyValueStorage = void 0;
const qr = Kt, Lo = Ai, Rf = qr.__importDefault(Df()), Af = If();
class Ac {
  constructor() {
    this.localStorage = Rf.default;
  }
  getKeys() {
    return qr.__awaiter(this, void 0, void 0, function* () {
      return Object.keys(this.localStorage);
    });
  }
  getEntries() {
    return qr.__awaiter(this, void 0, void 0, function* () {
      return Object.entries(this.localStorage).map(Af.parseEntry);
    });
  }
  getItem(t) {
    return qr.__awaiter(this, void 0, void 0, function* () {
      const r = this.localStorage.getItem(t);
      if (r !== null)
        return Lo.safeJsonParse(r);
    });
  }
  setItem(t, r) {
    return qr.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.setItem(t, Lo.safeJsonStringify(r));
    });
  }
  removeItem(t) {
    return qr.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.removeItem(t);
    });
  }
}
un.KeyValueStorage = Ac;
var Cf = un.default = Ac, Jr = {}, hi = {}, te = {}, Dn = {}, di = {}, Uo;
function Tf() {
  if (Uo)
    return di;
  Uo = 1, Object.defineProperty(di, "__esModule", { value: !0 }), di.delay = void 0;
  function e(t) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, t);
    });
  }
  return di.delay = e, di;
}
var Or = {}, On = {}, xr = {}, $o;
function Pf() {
  return $o || ($o = 1, Object.defineProperty(xr, "__esModule", { value: !0 }), xr.ONE_THOUSAND = xr.ONE_HUNDRED = void 0, xr.ONE_HUNDRED = 100, xr.ONE_THOUSAND = 1e3), xr;
}
var xn = {}, Fo;
function Nf() {
  return Fo || (Fo = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ONE_YEAR = e.FOUR_WEEKS = e.THREE_WEEKS = e.TWO_WEEKS = e.ONE_WEEK = e.THIRTY_DAYS = e.SEVEN_DAYS = e.FIVE_DAYS = e.THREE_DAYS = e.ONE_DAY = e.TWENTY_FOUR_HOURS = e.TWELVE_HOURS = e.SIX_HOURS = e.THREE_HOURS = e.ONE_HOUR = e.SIXTY_MINUTES = e.THIRTY_MINUTES = e.TEN_MINUTES = e.FIVE_MINUTES = e.ONE_MINUTE = e.SIXTY_SECONDS = e.THIRTY_SECONDS = e.TEN_SECONDS = e.FIVE_SECONDS = e.ONE_SECOND = void 0, e.ONE_SECOND = 1, e.FIVE_SECONDS = 5, e.TEN_SECONDS = 10, e.THIRTY_SECONDS = 30, e.SIXTY_SECONDS = 60, e.ONE_MINUTE = e.SIXTY_SECONDS, e.FIVE_MINUTES = e.ONE_MINUTE * 5, e.TEN_MINUTES = e.ONE_MINUTE * 10, e.THIRTY_MINUTES = e.ONE_MINUTE * 30, e.SIXTY_MINUTES = e.ONE_MINUTE * 60, e.ONE_HOUR = e.SIXTY_MINUTES, e.THREE_HOURS = e.ONE_HOUR * 3, e.SIX_HOURS = e.ONE_HOUR * 6, e.TWELVE_HOURS = e.ONE_HOUR * 12, e.TWENTY_FOUR_HOURS = e.ONE_HOUR * 24, e.ONE_DAY = e.TWENTY_FOUR_HOURS, e.THREE_DAYS = e.ONE_DAY * 3, e.FIVE_DAYS = e.ONE_DAY * 5, e.SEVEN_DAYS = e.ONE_DAY * 7, e.THIRTY_DAYS = e.ONE_DAY * 30, e.ONE_WEEK = e.SEVEN_DAYS, e.TWO_WEEKS = e.ONE_WEEK * 2, e.THREE_WEEKS = e.ONE_WEEK * 3, e.FOUR_WEEKS = e.ONE_WEEK * 4, e.ONE_YEAR = e.ONE_DAY * 365;
  }(xn)), xn;
}
var Mo;
function Cc() {
  return Mo || (Mo = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = Kt;
    t.__exportStar(Pf(), e), t.__exportStar(Nf(), e);
  }(On)), On;
}
var jo;
function Lf() {
  if (jo)
    return Or;
  jo = 1, Object.defineProperty(Or, "__esModule", { value: !0 }), Or.fromMiliseconds = Or.toMiliseconds = void 0;
  const e = Cc();
  function t(i) {
    return i * e.ONE_THOUSAND;
  }
  Or.toMiliseconds = t;
  function r(i) {
    return Math.floor(i / e.ONE_THOUSAND);
  }
  return Or.fromMiliseconds = r, Or;
}
var Bo;
function Uf() {
  return Bo || (Bo = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = Kt;
    t.__exportStar(Tf(), e), t.__exportStar(Lf(), e);
  }(Dn)), Dn;
}
var Br = {}, qo;
function $f() {
  if (qo)
    return Br;
  qo = 1, Object.defineProperty(Br, "__esModule", { value: !0 }), Br.Watch = void 0;
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
  return Br.Watch = e, Br.default = e, Br;
}
var In = {}, pi = {}, zo;
function Ff() {
  if (zo)
    return pi;
  zo = 1, Object.defineProperty(pi, "__esModule", { value: !0 }), pi.IWatch = void 0;
  class e {
  }
  return pi.IWatch = e, pi;
}
var Vo;
function Mf() {
  return Vo || (Vo = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), Kt.__exportStar(Ff(), e);
  }(In)), In;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = Kt;
  t.__exportStar(Uf(), e), t.__exportStar($f(), e), t.__exportStar(Mf(), e), t.__exportStar(Cc(), e);
})(te);
var Rn = {}, gi = {};
let Ur = class {
};
const jf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: Ur
}, Symbol.toStringTag, { value: "Module" })), Bf = /* @__PURE__ */ xs(jf);
var Ko;
function qf() {
  if (Ko)
    return gi;
  Ko = 1, Object.defineProperty(gi, "__esModule", { value: !0 }), gi.IHeartBeat = void 0;
  const e = Bf;
  class t extends e.IEvents {
    constructor(i) {
      super();
    }
  }
  return gi.IHeartBeat = t, gi;
}
var ko;
function Tc() {
  return ko || (ko = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), Kt.__exportStar(qf(), e);
  }(Rn)), Rn;
}
var An = {}, Ir = {}, Wo;
function zf() {
  if (Wo)
    return Ir;
  Wo = 1, Object.defineProperty(Ir, "__esModule", { value: !0 }), Ir.HEARTBEAT_EVENTS = Ir.HEARTBEAT_INTERVAL = void 0;
  const e = te;
  return Ir.HEARTBEAT_INTERVAL = e.FIVE_SECONDS, Ir.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, Ir;
}
var Ho;
function Pc() {
  return Ho || (Ho = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), Kt.__exportStar(zf(), e);
  }(An)), An;
}
var Go;
function Vf() {
  if (Go)
    return hi;
  Go = 1, Object.defineProperty(hi, "__esModule", { value: !0 }), hi.HeartBeat = void 0;
  const e = Kt, t = Xt, r = te, i = Tc(), n = Pc();
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
  return hi.HeartBeat = s, hi;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = Kt;
  t.__exportStar(Vf(), e), t.__exportStar(Tc(), e), t.__exportStar(Pc(), e);
})(Jr);
var Ce = {}, Cn, Yo;
function Kf() {
  if (Yo)
    return Cn;
  Yo = 1;
  function e(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  Cn = t;
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
    for (var b = "", v = 1 - u, _ = -1, O = r && r.length || 0, R = 0; R < O; ) {
      if (r.charCodeAt(R) === 37 && R + 1 < O) {
        switch (_ = _ > -1 ? _ : 0, r.charCodeAt(R + 1)) {
          case 100:
          case 102:
            if (v >= h || i[v] == null)
              break;
            _ < R && (b += r.slice(_, R)), b += Number(i[v]), _ = R + 2, R++;
            break;
          case 105:
            if (v >= h || i[v] == null)
              break;
            _ < R && (b += r.slice(_, R)), b += Math.floor(Number(i[v])), _ = R + 2, R++;
            break;
          case 79:
          case 111:
          case 106:
            if (v >= h || i[v] === void 0)
              break;
            _ < R && (b += r.slice(_, R));
            var N = typeof i[v];
            if (N === "string") {
              b += "'" + i[v] + "'", _ = R + 2, R++;
              break;
            }
            if (N === "function") {
              b += i[v].name || "<anonymous>", _ = R + 2, R++;
              break;
            }
            b += s(i[v]), _ = R + 2, R++;
            break;
          case 115:
            if (v >= h)
              break;
            _ < R && (b += r.slice(_, R)), b += String(i[v]), _ = R + 2, R++;
            break;
          case 37:
            _ < R && (b += r.slice(_, R)), b += "%", _ = R + 2, R++, v--;
            break;
        }
        ++v;
      }
      ++R;
    }
    return _ === -1 ? r : (_ < O && (b += r.slice(_)), b);
  }
  return Cn;
}
var Tn, Jo;
function kf() {
  if (Jo)
    return Tn;
  Jo = 1;
  const e = Kf();
  Tn = n;
  const t = w().console || {}, r = {
    mapHttpRequest: O,
    mapHttpResponse: O,
    wrapRequestSerializer: R,
    wrapResponseSerializer: R,
    wrapErrorSerializer: R,
    req: O,
    res: O,
    err: v
  };
  function i(d, o) {
    return Array.isArray(d) ? d.filter(function(L) {
      return L !== "!stdSerializers.err";
    }) : d === !0 ? Object.keys(o) : !1;
  }
  function n(d) {
    d = d || {}, d.browser = d.browser || {};
    const o = d.browser.transmit;
    if (o && typeof o.send != "function")
      throw Error("pino: transmit option must have a send function");
    const p = d.browser.write || t;
    d.browser.write && (d.browser.asObject = !0);
    const L = d.serializers || {}, U = i(d.browser.serialize, L);
    let $ = d.browser.serialize;
    Array.isArray(d.browser.serialize) && d.browser.serialize.indexOf("!stdSerializers.err") > -1 && ($ = !1);
    const F = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof p == "function" && (p.error = p.fatal = p.warn = p.info = p.debug = p.trace = p), d.enabled === !1 && (d.level = "silent");
    const q = d.level || "info", E = Object.create(p);
    E.log || (E.log = N), Object.defineProperty(E, "levelVal", {
      get: G
    }), Object.defineProperty(E, "level", {
      get: V,
      set: z
    });
    const C = {
      transmit: o,
      serialize: U,
      asObject: d.browser.asObject,
      levels: F,
      timestamp: _(d)
    };
    E.levels = n.levels, E.level = q, E.setMaxListeners = E.getMaxListeners = E.emit = E.addListener = E.on = E.prependListener = E.once = E.prependOnceListener = E.removeListener = E.removeAllListeners = E.listeners = E.listenerCount = E.eventNames = E.write = E.flush = N, E.serializers = L, E._serialize = U, E._stdErrSerialize = $, E.child = k, o && (E._logEvent = b());
    function G() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function V() {
      return this._level;
    }
    function z(j) {
      if (j !== "silent" && !this.levels.values[j])
        throw Error("unknown level " + j);
      this._level = j, s(C, E, "error", "log"), s(C, E, "fatal", "error"), s(C, E, "warn", "error"), s(C, E, "info", "log"), s(C, E, "debug", "log"), s(C, E, "trace", "log");
    }
    function k(j, W) {
      if (!j)
        throw new Error("missing bindings for child Pino");
      W = W || {}, U && j.serializers && (W.serializers = j.serializers);
      const oe = W.serializers;
      if (U && oe) {
        var H = Object.assign({}, L, oe), ie = d.browser.serialize === !0 ? Object.keys(H) : U;
        delete j.serializers, l([j], ie, H, this._stdErrSerialize);
      }
      function Z(re) {
        this._childLevel = (re._childLevel | 0) + 1, this.error = f(re, j, "error"), this.fatal = f(re, j, "fatal"), this.warn = f(re, j, "warn"), this.info = f(re, j, "info"), this.debug = f(re, j, "debug"), this.trace = f(re, j, "trace"), H && (this.serializers = H, this._serialize = ie), o && (this._logEvent = b(
          [].concat(re._logEvent.bindings, j)
        ));
      }
      return Z.prototype = this, new Z(this);
    }
    return E;
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
  }, n.stdSerializers = r, n.stdTimeFunctions = Object.assign({}, { nullTime: B, epochTime: S, unixTime: x, isoTime: g });
  function s(d, o, p, L) {
    const U = Object.getPrototypeOf(o);
    o[p] = o.levelVal > o.levels.values[p] ? N : U[p] ? U[p] : t[p] || t[L] || N, u(d, o, p);
  }
  function u(d, o, p) {
    !d.transmit && o[p] === N || (o[p] = function(L) {
      return function() {
        const $ = d.timestamp(), F = new Array(arguments.length), q = Object.getPrototypeOf && Object.getPrototypeOf(this) === t ? t : this;
        for (var E = 0; E < F.length; E++)
          F[E] = arguments[E];
        if (d.serialize && !d.asObject && l(F, this._serialize, this.serializers, this._stdErrSerialize), d.asObject ? L.call(q, a(this, p, F, $)) : L.apply(q, F), d.transmit) {
          const C = d.transmit.level || o.level, G = n.levels.values[C], V = n.levels.values[p];
          if (V < G)
            return;
          h(this, {
            ts: $,
            methodLevel: p,
            methodValue: V,
            transmitLevel: C,
            transmitValue: n.levels.values[d.transmit.level || o.level],
            send: d.transmit.send,
            val: o.levelVal
          }, F);
        }
      };
    }(o[p]));
  }
  function a(d, o, p, L) {
    d._serialize && l(p, d._serialize, d.serializers, d._stdErrSerialize);
    const U = p.slice();
    let $ = U[0];
    const F = {};
    L && (F.time = L), F.level = n.levels.values[o];
    let q = (d._childLevel | 0) + 1;
    if (q < 1 && (q = 1), $ !== null && typeof $ == "object") {
      for (; q-- && typeof U[0] == "object"; )
        Object.assign(F, U.shift());
      $ = U.length ? e(U.shift(), U) : void 0;
    } else
      typeof $ == "string" && ($ = e(U.shift(), U));
    return $ !== void 0 && (F.msg = $), F;
  }
  function l(d, o, p, L) {
    for (const U in d)
      if (L && d[U] instanceof Error)
        d[U] = n.stdSerializers.err(d[U]);
      else if (typeof d[U] == "object" && !Array.isArray(d[U]))
        for (const $ in d[U])
          o && o.indexOf($) > -1 && $ in p && (d[U][$] = p[$](d[U][$]));
  }
  function f(d, o, p) {
    return function() {
      const L = new Array(1 + arguments.length);
      L[0] = o;
      for (var U = 1; U < L.length; U++)
        L[U] = arguments[U - 1];
      return d[p].apply(this, L);
    };
  }
  function h(d, o, p) {
    const L = o.send, U = o.ts, $ = o.methodLevel, F = o.methodValue, q = o.val, E = d._logEvent.bindings;
    l(
      p,
      d._serialize || Object.keys(d.serializers),
      d.serializers,
      d._stdErrSerialize === void 0 ? !0 : d._stdErrSerialize
    ), d._logEvent.ts = U, d._logEvent.messages = p.filter(function(C) {
      return E.indexOf(C) === -1;
    }), d._logEvent.level.label = $, d._logEvent.level.value = F, L($, d._logEvent, q), d._logEvent = b(E);
  }
  function b(d) {
    return {
      ts: 0,
      messages: [],
      bindings: d || [],
      level: { label: "", value: 0 }
    };
  }
  function v(d) {
    const o = {
      type: d.constructor.name,
      msg: d.message,
      stack: d.stack
    };
    for (const p in d)
      o[p] === void 0 && (o[p] = d[p]);
    return o;
  }
  function _(d) {
    return typeof d.timestamp == "function" ? d.timestamp : d.timestamp === !1 ? B : S;
  }
  function O() {
    return {};
  }
  function R(d) {
    return d;
  }
  function N() {
  }
  function B() {
    return !1;
  }
  function S() {
    return Date.now();
  }
  function x() {
    return Math.round(Date.now() / 1e3);
  }
  function g() {
    return new Date(Date.now()).toISOString();
  }
  function w() {
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
  return Tn;
}
var Rr = {}, Xo;
function Nc() {
  return Xo || (Xo = 1, Object.defineProperty(Rr, "__esModule", { value: !0 }), Rr.PINO_CUSTOM_CONTEXT_KEY = Rr.PINO_LOGGER_DEFAULTS = void 0, Rr.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, Rr.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), Rr;
}
var St = {}, Qo;
function Wf() {
  if (Qo)
    return St;
  Qo = 1, Object.defineProperty(St, "__esModule", { value: !0 }), St.generateChildLogger = St.formatChildLoggerContext = St.getLoggerContext = St.setBrowserLoggerContext = St.getBrowserLoggerContext = St.getDefaultLoggerOptions = void 0;
  const e = Nc();
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
    const h = s(a, l, f), b = a.child({ context: h });
    return i(b, h, f);
  }
  return St.generateChildLogger = u, St;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.pino = void 0;
  const t = Kt, r = t.__importDefault(kf());
  Object.defineProperty(e, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), t.__exportStar(Nc(), e), t.__exportStar(Wf(), e);
})(Ce);
let Hf = class extends Ur {
  constructor(t) {
    super(), this.opts = t, this.protocol = "wc", this.version = 2;
  }
}, Gf = class extends Ur {
  constructor(t, r) {
    super(), this.core = t, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}, Yf = class {
  constructor(t, r) {
    this.logger = t, this.core = r;
  }
}, Jf = class extends Ur {
  constructor(t, r) {
    super(), this.relayer = t, this.logger = r;
  }
}, Xf = class extends Ur {
  constructor(t) {
    super();
  }
}, Qf = class {
  constructor(t, r, i, n) {
    this.core = t, this.logger = r, this.name = i;
  }
}, Zf = class extends Ur {
  constructor(t, r) {
    super(), this.relayer = t, this.logger = r;
  }
}, eh = class extends Ur {
  constructor(t, r) {
    super(), this.core = t, this.logger = r;
  }
}, th = class {
  constructor(t, r) {
    this.projectId = t, this.logger = r;
  }
}, rh = class {
  constructor(t) {
    this.opts = t, this.protocol = "wc", this.version = 2;
  }
}, ih = class {
  constructor(t) {
    this.client = t;
  }
};
const nh = (e) => JSON.stringify(e, (t, r) => typeof r == "bigint" ? r.toString() + "n" : r), sh = (e) => {
  const t = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = e.replace(t, '$1"$2n"$3');
  return JSON.parse(r, (i, n) => typeof n == "string" && n.match(/^\d+n$/) ? BigInt(n.substring(0, n.length - 1)) : n);
};
function Lc(e) {
  if (typeof e != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof e}`);
  try {
    return sh(e);
  } catch {
    return e;
  }
}
function Rs(e) {
  return typeof e == "string" ? e : nh(e) || "";
}
var As = {}, Xr = {}, ln = {}, fn = {};
Object.defineProperty(fn, "__esModule", { value: !0 });
fn.BrowserRandomSource = void 0;
const Zo = 65536;
class oh {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const t = typeof self < "u" ? self.crypto || self.msCrypto : null;
    t && t.getRandomValues !== void 0 && (this._crypto = t, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(t) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const r = new Uint8Array(t);
    for (let i = 0; i < r.length; i += Zo)
      this._crypto.getRandomValues(r.subarray(i, i + Math.min(r.length - i, Zo)));
    return r;
  }
}
fn.BrowserRandomSource = oh;
function ah(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var hn = {}, Ft = {};
Object.defineProperty(Ft, "__esModule", { value: !0 });
function ch(e) {
  for (var t = 0; t < e.length; t++)
    e[t] = 0;
  return e;
}
Ft.wipe = ch;
const uh = {}, lh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: uh
}, Symbol.toStringTag, { value: "Module" })), fh = /* @__PURE__ */ xs(lh);
Object.defineProperty(hn, "__esModule", { value: !0 });
hn.NodeRandomSource = void 0;
const hh = Ft;
class dh {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof ah < "u") {
      const t = fh;
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
    return (0, hh.wipe)(r), i;
  }
}
hn.NodeRandomSource = dh;
Object.defineProperty(ln, "__esModule", { value: !0 });
ln.SystemRandomSource = void 0;
const ph = fn, gh = hn;
class yh {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new ph.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new gh.NodeRandomSource(), this._source.isAvailable) {
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
ln.SystemRandomSource = yh;
var le = {}, Uc = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  function t(a, l) {
    var f = a >>> 16 & 65535, h = a & 65535, b = l >>> 16 & 65535, v = l & 65535;
    return h * v + (f * v + h * b << 16 >>> 0) | 0;
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
})(Uc);
Object.defineProperty(le, "__esModule", { value: !0 });
var $c = Uc;
function bh(e, t) {
  return t === void 0 && (t = 0), (e[t + 0] << 8 | e[t + 1]) << 16 >> 16;
}
le.readInt16BE = bh;
function vh(e, t) {
  return t === void 0 && (t = 0), (e[t + 0] << 8 | e[t + 1]) >>> 0;
}
le.readUint16BE = vh;
function mh(e, t) {
  return t === void 0 && (t = 0), (e[t + 1] << 8 | e[t]) << 16 >> 16;
}
le.readInt16LE = mh;
function _h(e, t) {
  return t === void 0 && (t = 0), (e[t + 1] << 8 | e[t]) >>> 0;
}
le.readUint16LE = _h;
function Fc(e, t, r) {
  return t === void 0 && (t = new Uint8Array(2)), r === void 0 && (r = 0), t[r + 0] = e >>> 8, t[r + 1] = e >>> 0, t;
}
le.writeUint16BE = Fc;
le.writeInt16BE = Fc;
function Mc(e, t, r) {
  return t === void 0 && (t = new Uint8Array(2)), r === void 0 && (r = 0), t[r + 0] = e >>> 0, t[r + 1] = e >>> 8, t;
}
le.writeUint16LE = Mc;
le.writeInt16LE = Mc;
function rs(e, t) {
  return t === void 0 && (t = 0), e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
}
le.readInt32BE = rs;
function is(e, t) {
  return t === void 0 && (t = 0), (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0;
}
le.readUint32BE = is;
function ns(e, t) {
  return t === void 0 && (t = 0), e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t];
}
le.readInt32LE = ns;
function ss(e, t) {
  return t === void 0 && (t = 0), (e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]) >>> 0;
}
le.readUint32LE = ss;
function Ji(e, t, r) {
  return t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0), t[r + 0] = e >>> 24, t[r + 1] = e >>> 16, t[r + 2] = e >>> 8, t[r + 3] = e >>> 0, t;
}
le.writeUint32BE = Ji;
le.writeInt32BE = Ji;
function Xi(e, t, r) {
  return t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0), t[r + 0] = e >>> 0, t[r + 1] = e >>> 8, t[r + 2] = e >>> 16, t[r + 3] = e >>> 24, t;
}
le.writeUint32LE = Xi;
le.writeInt32LE = Xi;
function wh(e, t) {
  t === void 0 && (t = 0);
  var r = rs(e, t), i = rs(e, t + 4);
  return r * 4294967296 + i - (i >> 31) * 4294967296;
}
le.readInt64BE = wh;
function Eh(e, t) {
  t === void 0 && (t = 0);
  var r = is(e, t), i = is(e, t + 4);
  return r * 4294967296 + i;
}
le.readUint64BE = Eh;
function Sh(e, t) {
  t === void 0 && (t = 0);
  var r = ns(e, t), i = ns(e, t + 4);
  return i * 4294967296 + r - (r >> 31) * 4294967296;
}
le.readInt64LE = Sh;
function Dh(e, t) {
  t === void 0 && (t = 0);
  var r = ss(e, t), i = ss(e, t + 4);
  return i * 4294967296 + r;
}
le.readUint64LE = Dh;
function jc(e, t, r) {
  return t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0), Ji(e / 4294967296 >>> 0, t, r), Ji(e >>> 0, t, r + 4), t;
}
le.writeUint64BE = jc;
le.writeInt64BE = jc;
function Bc(e, t, r) {
  return t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0), Xi(e >>> 0, t, r), Xi(e / 4294967296 >>> 0, t, r + 4), t;
}
le.writeUint64LE = Bc;
le.writeInt64LE = Bc;
function Oh(e, t, r) {
  if (r === void 0 && (r = 0), e % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (e / 8 > t.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var i = 0, n = 1, s = e / 8 + r - 1; s >= r; s--)
    i += t[s] * n, n *= 256;
  return i;
}
le.readUintBE = Oh;
function xh(e, t, r) {
  if (r === void 0 && (r = 0), e % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (e / 8 > t.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var i = 0, n = 1, s = r; s < r + e / 8; s++)
    i += t[s] * n, n *= 256;
  return i;
}
le.readUintLE = xh;
function Ih(e, t, r, i) {
  if (r === void 0 && (r = new Uint8Array(e / 8)), i === void 0 && (i = 0), e % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!$c.isSafeInteger(t))
    throw new Error("writeUintBE value must be an integer");
  for (var n = 1, s = e / 8 + i - 1; s >= i; s--)
    r[s] = t / n & 255, n *= 256;
  return r;
}
le.writeUintBE = Ih;
function Rh(e, t, r, i) {
  if (r === void 0 && (r = new Uint8Array(e / 8)), i === void 0 && (i = 0), e % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!$c.isSafeInteger(t))
    throw new Error("writeUintLE value must be an integer");
  for (var n = 1, s = i; s < i + e / 8; s++)
    r[s] = t / n & 255, n *= 256;
  return r;
}
le.writeUintLE = Rh;
function Ah(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat32(t);
}
le.readFloat32BE = Ah;
function Ch(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat32(t, !0);
}
le.readFloat32LE = Ch;
function Th(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat64(t);
}
le.readFloat64BE = Th;
function Ph(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat64(t, !0);
}
le.readFloat64LE = Ph;
function Nh(e, t, r) {
  t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0);
  var i = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return i.setFloat32(r, e), t;
}
le.writeFloat32BE = Nh;
function Lh(e, t, r) {
  t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0);
  var i = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return i.setFloat32(r, e, !0), t;
}
le.writeFloat32LE = Lh;
function Uh(e, t, r) {
  t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0);
  var i = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return i.setFloat64(r, e), t;
}
le.writeFloat64BE = Uh;
function $h(e, t, r) {
  t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0);
  var i = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return i.setFloat64(r, e, !0), t;
}
le.writeFloat64LE = $h;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.randomStringForEntropy = e.randomString = e.randomUint32 = e.randomBytes = e.defaultRandomSource = void 0;
  const t = ln, r = le, i = Ft;
  e.defaultRandomSource = new t.SystemRandomSource();
  function n(f, h = e.defaultRandomSource) {
    return h.randomBytes(f);
  }
  e.randomBytes = n;
  function s(f = e.defaultRandomSource) {
    const h = n(4, f), b = (0, r.readUint32LE)(h);
    return (0, i.wipe)(h), b;
  }
  e.randomUint32 = s;
  const u = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function a(f, h = u, b = e.defaultRandomSource) {
    if (h.length < 2)
      throw new Error("randomString charset is too short");
    if (h.length > 256)
      throw new Error("randomString charset is too long");
    let v = "";
    const _ = h.length, O = 256 - 256 % _;
    for (; f > 0; ) {
      const R = n(Math.ceil(f * 256 / O), b);
      for (let N = 0; N < R.length && f > 0; N++) {
        const B = R[N];
        B < O && (v += h.charAt(B % _), f--);
      }
      (0, i.wipe)(R);
    }
    return v;
  }
  e.randomString = a;
  function l(f, h = u, b = e.defaultRandomSource) {
    const v = Math.ceil(f / (Math.log(h.length) / Math.LN2));
    return a(v, h, b);
  }
  e.randomStringForEntropy = l;
})(Xr);
var qc = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = le, r = Ft;
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
          var f = this._bytesHashed, h = this._bufferLength, b = f / 536870912 | 0, v = f << 3, _ = f % 128 < 112 ? 128 : 256;
          this._buffer[h] = 128;
          for (var O = h + 1; O < _ - 8; O++)
            this._buffer[O] = 0;
          t.writeUint32BE(b, this._buffer, _ - 8), t.writeUint32BE(v, this._buffer, _ - 4), s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, _), this._finished = !0;
        }
        for (var O = 0; O < this.digestLength / 8; O++)
          t.writeUint32BE(this._stateHi[O], l, O * 8), t.writeUint32BE(this._stateLo[O], l, O * 8 + 4);
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
  function s(a, l, f, h, b, v, _) {
    for (var O = f[0], R = f[1], N = f[2], B = f[3], S = f[4], x = f[5], g = f[6], w = f[7], d = h[0], o = h[1], p = h[2], L = h[3], U = h[4], $ = h[5], F = h[6], q = h[7], E, C, G, V, z, k, j, W; _ >= 128; ) {
      for (var oe = 0; oe < 16; oe++) {
        var H = 8 * oe + v;
        a[oe] = t.readUint32BE(b, H), l[oe] = t.readUint32BE(b, H + 4);
      }
      for (var oe = 0; oe < 80; oe++) {
        var ie = O, Z = R, re = N, P = B, T = S, I = x, c = g, D = w, Y = d, Q = o, be = p, ve = L, he = U, xe = $, Be = F, Le = q;
        if (E = w, C = q, z = C & 65535, k = C >>> 16, j = E & 65535, W = E >>> 16, E = (S >>> 14 | U << 32 - 14) ^ (S >>> 18 | U << 32 - 18) ^ (U >>> 41 - 32 | S << 32 - (41 - 32)), C = (U >>> 14 | S << 32 - 14) ^ (U >>> 18 | S << 32 - 18) ^ (S >>> 41 - 32 | U << 32 - (41 - 32)), z += C & 65535, k += C >>> 16, j += E & 65535, W += E >>> 16, E = S & x ^ ~S & g, C = U & $ ^ ~U & F, z += C & 65535, k += C >>> 16, j += E & 65535, W += E >>> 16, E = n[oe * 2], C = n[oe * 2 + 1], z += C & 65535, k += C >>> 16, j += E & 65535, W += E >>> 16, E = a[oe % 16], C = l[oe % 16], z += C & 65535, k += C >>> 16, j += E & 65535, W += E >>> 16, k += z >>> 16, j += k >>> 16, W += j >>> 16, G = j & 65535 | W << 16, V = z & 65535 | k << 16, E = G, C = V, z = C & 65535, k = C >>> 16, j = E & 65535, W = E >>> 16, E = (O >>> 28 | d << 32 - 28) ^ (d >>> 34 - 32 | O << 32 - (34 - 32)) ^ (d >>> 39 - 32 | O << 32 - (39 - 32)), C = (d >>> 28 | O << 32 - 28) ^ (O >>> 34 - 32 | d << 32 - (34 - 32)) ^ (O >>> 39 - 32 | d << 32 - (39 - 32)), z += C & 65535, k += C >>> 16, j += E & 65535, W += E >>> 16, E = O & R ^ O & N ^ R & N, C = d & o ^ d & p ^ o & p, z += C & 65535, k += C >>> 16, j += E & 65535, W += E >>> 16, k += z >>> 16, j += k >>> 16, W += j >>> 16, D = j & 65535 | W << 16, Le = z & 65535 | k << 16, E = P, C = ve, z = C & 65535, k = C >>> 16, j = E & 65535, W = E >>> 16, E = G, C = V, z += C & 65535, k += C >>> 16, j += E & 65535, W += E >>> 16, k += z >>> 16, j += k >>> 16, W += j >>> 16, P = j & 65535 | W << 16, ve = z & 65535 | k << 16, R = ie, N = Z, B = re, S = P, x = T, g = I, w = c, O = D, o = Y, p = Q, L = be, U = ve, $ = he, F = xe, q = Be, d = Le, oe % 16 === 15)
          for (var H = 0; H < 16; H++)
            E = a[H], C = l[H], z = C & 65535, k = C >>> 16, j = E & 65535, W = E >>> 16, E = a[(H + 9) % 16], C = l[(H + 9) % 16], z += C & 65535, k += C >>> 16, j += E & 65535, W += E >>> 16, G = a[(H + 1) % 16], V = l[(H + 1) % 16], E = (G >>> 1 | V << 32 - 1) ^ (G >>> 8 | V << 32 - 8) ^ G >>> 7, C = (V >>> 1 | G << 32 - 1) ^ (V >>> 8 | G << 32 - 8) ^ (V >>> 7 | G << 32 - 7), z += C & 65535, k += C >>> 16, j += E & 65535, W += E >>> 16, G = a[(H + 14) % 16], V = l[(H + 14) % 16], E = (G >>> 19 | V << 32 - 19) ^ (V >>> 61 - 32 | G << 32 - (61 - 32)) ^ G >>> 6, C = (V >>> 19 | G << 32 - 19) ^ (G >>> 61 - 32 | V << 32 - (61 - 32)) ^ (V >>> 6 | G << 32 - 6), z += C & 65535, k += C >>> 16, j += E & 65535, W += E >>> 16, k += z >>> 16, j += k >>> 16, W += j >>> 16, a[H] = j & 65535 | W << 16, l[H] = z & 65535 | k << 16;
      }
      E = O, C = d, z = C & 65535, k = C >>> 16, j = E & 65535, W = E >>> 16, E = f[0], C = h[0], z += C & 65535, k += C >>> 16, j += E & 65535, W += E >>> 16, k += z >>> 16, j += k >>> 16, W += j >>> 16, f[0] = O = j & 65535 | W << 16, h[0] = d = z & 65535 | k << 16, E = R, C = o, z = C & 65535, k = C >>> 16, j = E & 65535, W = E >>> 16, E = f[1], C = h[1], z += C & 65535, k += C >>> 16, j += E & 65535, W += E >>> 16, k += z >>> 16, j += k >>> 16, W += j >>> 16, f[1] = R = j & 65535 | W << 16, h[1] = o = z & 65535 | k << 16, E = N, C = p, z = C & 65535, k = C >>> 16, j = E & 65535, W = E >>> 16, E = f[2], C = h[2], z += C & 65535, k += C >>> 16, j += E & 65535, W += E >>> 16, k += z >>> 16, j += k >>> 16, W += j >>> 16, f[2] = N = j & 65535 | W << 16, h[2] = p = z & 65535 | k << 16, E = B, C = L, z = C & 65535, k = C >>> 16, j = E & 65535, W = E >>> 16, E = f[3], C = h[3], z += C & 65535, k += C >>> 16, j += E & 65535, W += E >>> 16, k += z >>> 16, j += k >>> 16, W += j >>> 16, f[3] = B = j & 65535 | W << 16, h[3] = L = z & 65535 | k << 16, E = S, C = U, z = C & 65535, k = C >>> 16, j = E & 65535, W = E >>> 16, E = f[4], C = h[4], z += C & 65535, k += C >>> 16, j += E & 65535, W += E >>> 16, k += z >>> 16, j += k >>> 16, W += j >>> 16, f[4] = S = j & 65535 | W << 16, h[4] = U = z & 65535 | k << 16, E = x, C = $, z = C & 65535, k = C >>> 16, j = E & 65535, W = E >>> 16, E = f[5], C = h[5], z += C & 65535, k += C >>> 16, j += E & 65535, W += E >>> 16, k += z >>> 16, j += k >>> 16, W += j >>> 16, f[5] = x = j & 65535 | W << 16, h[5] = $ = z & 65535 | k << 16, E = g, C = F, z = C & 65535, k = C >>> 16, j = E & 65535, W = E >>> 16, E = f[6], C = h[6], z += C & 65535, k += C >>> 16, j += E & 65535, W += E >>> 16, k += z >>> 16, j += k >>> 16, W += j >>> 16, f[6] = g = j & 65535 | W << 16, h[6] = F = z & 65535 | k << 16, E = w, C = q, z = C & 65535, k = C >>> 16, j = E & 65535, W = E >>> 16, E = f[7], C = h[7], z += C & 65535, k += C >>> 16, j += E & 65535, W += E >>> 16, k += z >>> 16, j += k >>> 16, W += j >>> 16, f[7] = w = j & 65535 | W << 16, h[7] = q = z & 65535 | k << 16, v += 128, _ -= 128;
    }
    return v;
  }
  function u(a) {
    var l = new i();
    l.update(a);
    var f = l.digest();
    return l.clean(), f;
  }
  e.hash = u;
})(qc);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.convertSecretKeyToX25519 = e.convertPublicKeyToX25519 = e.verify = e.sign = e.extractPublicKeyFromSecretKey = e.generateKeyPair = e.generateKeyPairFromSeed = e.SEED_LENGTH = e.SECRET_KEY_LENGTH = e.PUBLIC_KEY_LENGTH = e.SIGNATURE_LENGTH = void 0;
  const t = Xr, r = qc, i = Ft;
  e.SIGNATURE_LENGTH = 64, e.PUBLIC_KEY_LENGTH = 32, e.SECRET_KEY_LENGTH = 64, e.SEED_LENGTH = 32;
  function n(P) {
    const T = new Float64Array(16);
    if (P)
      for (let I = 0; I < P.length; I++)
        T[I] = P[I];
    return T;
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
  ]), b = n([
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
  ]), v = n([
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
  function _(P, T) {
    for (let I = 0; I < 16; I++)
      P[I] = T[I] | 0;
  }
  function O(P) {
    let T = 1;
    for (let I = 0; I < 16; I++) {
      let c = P[I] + T + 65535;
      T = Math.floor(c / 65536), P[I] = c - T * 65536;
    }
    P[0] += T - 1 + 37 * (T - 1);
  }
  function R(P, T, I) {
    const c = ~(I - 1);
    for (let D = 0; D < 16; D++) {
      const Y = c & (P[D] ^ T[D]);
      P[D] ^= Y, T[D] ^= Y;
    }
  }
  function N(P, T) {
    const I = n(), c = n();
    for (let D = 0; D < 16; D++)
      c[D] = T[D];
    O(c), O(c), O(c);
    for (let D = 0; D < 2; D++) {
      I[0] = c[0] - 65517;
      for (let Q = 1; Q < 15; Q++)
        I[Q] = c[Q] - 65535 - (I[Q - 1] >> 16 & 1), I[Q - 1] &= 65535;
      I[15] = c[15] - 32767 - (I[14] >> 16 & 1);
      const Y = I[15] >> 16 & 1;
      I[14] &= 65535, R(c, I, 1 - Y);
    }
    for (let D = 0; D < 16; D++)
      P[2 * D] = c[D] & 255, P[2 * D + 1] = c[D] >> 8;
  }
  function B(P, T) {
    let I = 0;
    for (let c = 0; c < 32; c++)
      I |= P[c] ^ T[c];
    return (1 & I - 1 >>> 8) - 1;
  }
  function S(P, T) {
    const I = new Uint8Array(32), c = new Uint8Array(32);
    return N(I, P), N(c, T), B(I, c);
  }
  function x(P) {
    const T = new Uint8Array(32);
    return N(T, P), T[0] & 1;
  }
  function g(P, T) {
    for (let I = 0; I < 16; I++)
      P[I] = T[2 * I] + (T[2 * I + 1] << 8);
    P[15] &= 32767;
  }
  function w(P, T, I) {
    for (let c = 0; c < 16; c++)
      P[c] = T[c] + I[c];
  }
  function d(P, T, I) {
    for (let c = 0; c < 16; c++)
      P[c] = T[c] - I[c];
  }
  function o(P, T, I) {
    let c, D, Y = 0, Q = 0, be = 0, ve = 0, he = 0, xe = 0, Be = 0, Le = 0, De = 0, we = 0, de = 0, ge = 0, pe = 0, ue = 0, ce = 0, ne = 0, ye = 0, me = 0, ae = 0, Ee = 0, Ie = 0, Te = 0, Pe = 0, Re = 0, Tt = 0, Mt = 0, Qt = 0, ft = 0, Zt = 0, jt = 0, lr = 0, qe = I[0], Fe = I[1], We = I[2], Ve = I[3], He = I[4], Me = I[5], Qe = I[6], tt = I[7], rt = I[8], Ze = I[9], it = I[10], et = I[11], Ge = I[12], Ue = I[13], m = I[14], M = I[15];
    c = T[0], Y += c * qe, Q += c * Fe, be += c * We, ve += c * Ve, he += c * He, xe += c * Me, Be += c * Qe, Le += c * tt, De += c * rt, we += c * Ze, de += c * it, ge += c * et, pe += c * Ge, ue += c * Ue, ce += c * m, ne += c * M, c = T[1], Q += c * qe, be += c * Fe, ve += c * We, he += c * Ve, xe += c * He, Be += c * Me, Le += c * Qe, De += c * tt, we += c * rt, de += c * Ze, ge += c * it, pe += c * et, ue += c * Ge, ce += c * Ue, ne += c * m, ye += c * M, c = T[2], be += c * qe, ve += c * Fe, he += c * We, xe += c * Ve, Be += c * He, Le += c * Me, De += c * Qe, we += c * tt, de += c * rt, ge += c * Ze, pe += c * it, ue += c * et, ce += c * Ge, ne += c * Ue, ye += c * m, me += c * M, c = T[3], ve += c * qe, he += c * Fe, xe += c * We, Be += c * Ve, Le += c * He, De += c * Me, we += c * Qe, de += c * tt, ge += c * rt, pe += c * Ze, ue += c * it, ce += c * et, ne += c * Ge, ye += c * Ue, me += c * m, ae += c * M, c = T[4], he += c * qe, xe += c * Fe, Be += c * We, Le += c * Ve, De += c * He, we += c * Me, de += c * Qe, ge += c * tt, pe += c * rt, ue += c * Ze, ce += c * it, ne += c * et, ye += c * Ge, me += c * Ue, ae += c * m, Ee += c * M, c = T[5], xe += c * qe, Be += c * Fe, Le += c * We, De += c * Ve, we += c * He, de += c * Me, ge += c * Qe, pe += c * tt, ue += c * rt, ce += c * Ze, ne += c * it, ye += c * et, me += c * Ge, ae += c * Ue, Ee += c * m, Ie += c * M, c = T[6], Be += c * qe, Le += c * Fe, De += c * We, we += c * Ve, de += c * He, ge += c * Me, pe += c * Qe, ue += c * tt, ce += c * rt, ne += c * Ze, ye += c * it, me += c * et, ae += c * Ge, Ee += c * Ue, Ie += c * m, Te += c * M, c = T[7], Le += c * qe, De += c * Fe, we += c * We, de += c * Ve, ge += c * He, pe += c * Me, ue += c * Qe, ce += c * tt, ne += c * rt, ye += c * Ze, me += c * it, ae += c * et, Ee += c * Ge, Ie += c * Ue, Te += c * m, Pe += c * M, c = T[8], De += c * qe, we += c * Fe, de += c * We, ge += c * Ve, pe += c * He, ue += c * Me, ce += c * Qe, ne += c * tt, ye += c * rt, me += c * Ze, ae += c * it, Ee += c * et, Ie += c * Ge, Te += c * Ue, Pe += c * m, Re += c * M, c = T[9], we += c * qe, de += c * Fe, ge += c * We, pe += c * Ve, ue += c * He, ce += c * Me, ne += c * Qe, ye += c * tt, me += c * rt, ae += c * Ze, Ee += c * it, Ie += c * et, Te += c * Ge, Pe += c * Ue, Re += c * m, Tt += c * M, c = T[10], de += c * qe, ge += c * Fe, pe += c * We, ue += c * Ve, ce += c * He, ne += c * Me, ye += c * Qe, me += c * tt, ae += c * rt, Ee += c * Ze, Ie += c * it, Te += c * et, Pe += c * Ge, Re += c * Ue, Tt += c * m, Mt += c * M, c = T[11], ge += c * qe, pe += c * Fe, ue += c * We, ce += c * Ve, ne += c * He, ye += c * Me, me += c * Qe, ae += c * tt, Ee += c * rt, Ie += c * Ze, Te += c * it, Pe += c * et, Re += c * Ge, Tt += c * Ue, Mt += c * m, Qt += c * M, c = T[12], pe += c * qe, ue += c * Fe, ce += c * We, ne += c * Ve, ye += c * He, me += c * Me, ae += c * Qe, Ee += c * tt, Ie += c * rt, Te += c * Ze, Pe += c * it, Re += c * et, Tt += c * Ge, Mt += c * Ue, Qt += c * m, ft += c * M, c = T[13], ue += c * qe, ce += c * Fe, ne += c * We, ye += c * Ve, me += c * He, ae += c * Me, Ee += c * Qe, Ie += c * tt, Te += c * rt, Pe += c * Ze, Re += c * it, Tt += c * et, Mt += c * Ge, Qt += c * Ue, ft += c * m, Zt += c * M, c = T[14], ce += c * qe, ne += c * Fe, ye += c * We, me += c * Ve, ae += c * He, Ee += c * Me, Ie += c * Qe, Te += c * tt, Pe += c * rt, Re += c * Ze, Tt += c * it, Mt += c * et, Qt += c * Ge, ft += c * Ue, Zt += c * m, jt += c * M, c = T[15], ne += c * qe, ye += c * Fe, me += c * We, ae += c * Ve, Ee += c * He, Ie += c * Me, Te += c * Qe, Pe += c * tt, Re += c * rt, Tt += c * Ze, Mt += c * it, Qt += c * et, ft += c * Ge, Zt += c * Ue, jt += c * m, lr += c * M, Y += 38 * ye, Q += 38 * me, be += 38 * ae, ve += 38 * Ee, he += 38 * Ie, xe += 38 * Te, Be += 38 * Pe, Le += 38 * Re, De += 38 * Tt, we += 38 * Mt, de += 38 * Qt, ge += 38 * ft, pe += 38 * Zt, ue += 38 * jt, ce += 38 * lr, D = 1, c = Y + D + 65535, D = Math.floor(c / 65536), Y = c - D * 65536, c = Q + D + 65535, D = Math.floor(c / 65536), Q = c - D * 65536, c = be + D + 65535, D = Math.floor(c / 65536), be = c - D * 65536, c = ve + D + 65535, D = Math.floor(c / 65536), ve = c - D * 65536, c = he + D + 65535, D = Math.floor(c / 65536), he = c - D * 65536, c = xe + D + 65535, D = Math.floor(c / 65536), xe = c - D * 65536, c = Be + D + 65535, D = Math.floor(c / 65536), Be = c - D * 65536, c = Le + D + 65535, D = Math.floor(c / 65536), Le = c - D * 65536, c = De + D + 65535, D = Math.floor(c / 65536), De = c - D * 65536, c = we + D + 65535, D = Math.floor(c / 65536), we = c - D * 65536, c = de + D + 65535, D = Math.floor(c / 65536), de = c - D * 65536, c = ge + D + 65535, D = Math.floor(c / 65536), ge = c - D * 65536, c = pe + D + 65535, D = Math.floor(c / 65536), pe = c - D * 65536, c = ue + D + 65535, D = Math.floor(c / 65536), ue = c - D * 65536, c = ce + D + 65535, D = Math.floor(c / 65536), ce = c - D * 65536, c = ne + D + 65535, D = Math.floor(c / 65536), ne = c - D * 65536, Y += D - 1 + 37 * (D - 1), D = 1, c = Y + D + 65535, D = Math.floor(c / 65536), Y = c - D * 65536, c = Q + D + 65535, D = Math.floor(c / 65536), Q = c - D * 65536, c = be + D + 65535, D = Math.floor(c / 65536), be = c - D * 65536, c = ve + D + 65535, D = Math.floor(c / 65536), ve = c - D * 65536, c = he + D + 65535, D = Math.floor(c / 65536), he = c - D * 65536, c = xe + D + 65535, D = Math.floor(c / 65536), xe = c - D * 65536, c = Be + D + 65535, D = Math.floor(c / 65536), Be = c - D * 65536, c = Le + D + 65535, D = Math.floor(c / 65536), Le = c - D * 65536, c = De + D + 65535, D = Math.floor(c / 65536), De = c - D * 65536, c = we + D + 65535, D = Math.floor(c / 65536), we = c - D * 65536, c = de + D + 65535, D = Math.floor(c / 65536), de = c - D * 65536, c = ge + D + 65535, D = Math.floor(c / 65536), ge = c - D * 65536, c = pe + D + 65535, D = Math.floor(c / 65536), pe = c - D * 65536, c = ue + D + 65535, D = Math.floor(c / 65536), ue = c - D * 65536, c = ce + D + 65535, D = Math.floor(c / 65536), ce = c - D * 65536, c = ne + D + 65535, D = Math.floor(c / 65536), ne = c - D * 65536, Y += D - 1 + 37 * (D - 1), P[0] = Y, P[1] = Q, P[2] = be, P[3] = ve, P[4] = he, P[5] = xe, P[6] = Be, P[7] = Le, P[8] = De, P[9] = we, P[10] = de, P[11] = ge, P[12] = pe, P[13] = ue, P[14] = ce, P[15] = ne;
  }
  function p(P, T) {
    o(P, T, T);
  }
  function L(P, T) {
    const I = n();
    let c;
    for (c = 0; c < 16; c++)
      I[c] = T[c];
    for (c = 253; c >= 0; c--)
      p(I, I), c !== 2 && c !== 4 && o(I, I, T);
    for (c = 0; c < 16; c++)
      P[c] = I[c];
  }
  function U(P, T) {
    const I = n();
    let c;
    for (c = 0; c < 16; c++)
      I[c] = T[c];
    for (c = 250; c >= 0; c--)
      p(I, I), c !== 1 && o(I, I, T);
    for (c = 0; c < 16; c++)
      P[c] = I[c];
  }
  function $(P, T) {
    const I = n(), c = n(), D = n(), Y = n(), Q = n(), be = n(), ve = n(), he = n(), xe = n();
    d(I, P[1], P[0]), d(xe, T[1], T[0]), o(I, I, xe), w(c, P[0], P[1]), w(xe, T[0], T[1]), o(c, c, xe), o(D, P[3], T[3]), o(D, D, f), o(Y, P[2], T[2]), w(Y, Y, Y), d(Q, c, I), d(be, Y, D), w(ve, Y, D), w(he, c, I), o(P[0], Q, be), o(P[1], he, ve), o(P[2], ve, be), o(P[3], Q, he);
  }
  function F(P, T, I) {
    for (let c = 0; c < 4; c++)
      R(P[c], T[c], I);
  }
  function q(P, T) {
    const I = n(), c = n(), D = n();
    L(D, T[2]), o(I, T[0], D), o(c, T[1], D), N(P, c), P[31] ^= x(I) << 7;
  }
  function E(P, T, I) {
    _(P[0], u), _(P[1], a), _(P[2], a), _(P[3], u);
    for (let c = 255; c >= 0; --c) {
      const D = I[c / 8 | 0] >> (c & 7) & 1;
      F(P, T, D), $(T, P), $(P, P), F(P, T, D);
    }
  }
  function C(P, T) {
    const I = [n(), n(), n(), n()];
    _(I[0], h), _(I[1], b), _(I[2], a), o(I[3], h, b), E(P, I, T);
  }
  function G(P) {
    if (P.length !== e.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${e.SEED_LENGTH} bytes`);
    const T = (0, r.hash)(P);
    T[0] &= 248, T[31] &= 127, T[31] |= 64;
    const I = new Uint8Array(32), c = [n(), n(), n(), n()];
    C(c, T), q(I, c);
    const D = new Uint8Array(64);
    return D.set(P), D.set(I, 32), {
      publicKey: I,
      secretKey: D
    };
  }
  e.generateKeyPairFromSeed = G;
  function V(P) {
    const T = (0, t.randomBytes)(32, P), I = G(T);
    return (0, i.wipe)(T), I;
  }
  e.generateKeyPair = V;
  function z(P) {
    if (P.length !== e.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${e.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(P.subarray(32));
  }
  e.extractPublicKeyFromSecretKey = z;
  const k = new Float64Array([
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
  function j(P, T) {
    let I, c, D, Y;
    for (c = 63; c >= 32; --c) {
      for (I = 0, D = c - 32, Y = c - 12; D < Y; ++D)
        T[D] += I - 16 * T[c] * k[D - (c - 32)], I = Math.floor((T[D] + 128) / 256), T[D] -= I * 256;
      T[D] += I, T[c] = 0;
    }
    for (I = 0, D = 0; D < 32; D++)
      T[D] += I - (T[31] >> 4) * k[D], I = T[D] >> 8, T[D] &= 255;
    for (D = 0; D < 32; D++)
      T[D] -= I * k[D];
    for (c = 0; c < 32; c++)
      T[c + 1] += T[c] >> 8, P[c] = T[c] & 255;
  }
  function W(P) {
    const T = new Float64Array(64);
    for (let I = 0; I < 64; I++)
      T[I] = P[I];
    for (let I = 0; I < 64; I++)
      P[I] = 0;
    j(P, T);
  }
  function oe(P, T) {
    const I = new Float64Array(64), c = [n(), n(), n(), n()], D = (0, r.hash)(P.subarray(0, 32));
    D[0] &= 248, D[31] &= 127, D[31] |= 64;
    const Y = new Uint8Array(64);
    Y.set(D.subarray(32), 32);
    const Q = new r.SHA512();
    Q.update(Y.subarray(32)), Q.update(T);
    const be = Q.digest();
    Q.clean(), W(be), C(c, be), q(Y, c), Q.reset(), Q.update(Y.subarray(0, 32)), Q.update(P.subarray(32)), Q.update(T);
    const ve = Q.digest();
    W(ve);
    for (let he = 0; he < 32; he++)
      I[he] = be[he];
    for (let he = 0; he < 32; he++)
      for (let xe = 0; xe < 32; xe++)
        I[he + xe] += ve[he] * D[xe];
    return j(Y.subarray(32), I), Y;
  }
  e.sign = oe;
  function H(P, T) {
    const I = n(), c = n(), D = n(), Y = n(), Q = n(), be = n(), ve = n();
    return _(P[2], a), g(P[1], T), p(D, P[1]), o(Y, D, l), d(D, D, P[2]), w(Y, P[2], Y), p(Q, Y), p(be, Q), o(ve, be, Q), o(I, ve, D), o(I, I, Y), U(I, I), o(I, I, D), o(I, I, Y), o(I, I, Y), o(P[0], I, Y), p(c, P[0]), o(c, c, Y), S(c, D) && o(P[0], P[0], v), p(c, P[0]), o(c, c, Y), S(c, D) ? -1 : (x(P[0]) === T[31] >> 7 && d(P[0], u, P[0]), o(P[3], P[0], P[1]), 0);
  }
  function ie(P, T, I) {
    const c = new Uint8Array(32), D = [n(), n(), n(), n()], Y = [n(), n(), n(), n()];
    if (I.length !== e.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${e.SIGNATURE_LENGTH} bytes`);
    if (H(Y, P))
      return !1;
    const Q = new r.SHA512();
    Q.update(I.subarray(0, 32)), Q.update(P), Q.update(T);
    const be = Q.digest();
    return W(be), E(D, Y, be), C(Y, I.subarray(32)), $(D, Y), q(c, D), !B(I, c);
  }
  e.verify = ie;
  function Z(P) {
    let T = [n(), n(), n(), n()];
    if (H(T, P))
      throw new Error("Ed25519: invalid public key");
    let I = n(), c = n(), D = T[1];
    w(I, a, D), d(c, a, D), L(c, c), o(I, I, c);
    let Y = new Uint8Array(32);
    return N(Y, I), Y;
  }
  e.convertPublicKeyToX25519 = Z;
  function re(P) {
    const T = (0, r.hash)(P.subarray(0, 32));
    T[0] &= 248, T[31] &= 127, T[31] |= 64;
    const I = new Uint8Array(T.subarray(0, 32));
    return (0, i.wipe)(T), I;
  }
  e.convertSecretKeyToX25519 = re;
})(As);
const Fh = "EdDSA", Mh = "JWT", zc = ".", Vc = "base64url", jh = "utf8", Bh = "utf8", qh = ":", zh = "did", Vh = "key", ea = "base58btc", Kh = "z", kh = "K36", Wh = 32;
function Cs(e) {
  return globalThis.Buffer != null ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e;
}
function Kc(e = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Cs(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e);
}
function os(e, t) {
  t || (t = e.reduce((n, s) => n + s.length, 0));
  const r = Kc(t);
  let i = 0;
  for (const n of e)
    r.set(n, i), i += n.length;
  return Cs(r);
}
function Hh(e, t) {
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
  function b(O) {
    if (O instanceof Uint8Array || (ArrayBuffer.isView(O) ? O = new Uint8Array(O.buffer, O.byteOffset, O.byteLength) : Array.isArray(O) && (O = Uint8Array.from(O))), !(O instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (O.length === 0)
      return "";
    for (var R = 0, N = 0, B = 0, S = O.length; B !== S && O[B] === 0; )
      B++, R++;
    for (var x = (S - B) * h + 1 >>> 0, g = new Uint8Array(x); B !== S; ) {
      for (var w = O[B], d = 0, o = x - 1; (w !== 0 || d < N) && o !== -1; o--, d++)
        w += 256 * g[o] >>> 0, g[o] = w % a >>> 0, w = w / a >>> 0;
      if (w !== 0)
        throw new Error("Non-zero carry");
      N = d, B++;
    }
    for (var p = x - N; p !== x && g[p] === 0; )
      p++;
    for (var L = l.repeat(R); p < x; ++p)
      L += e.charAt(g[p]);
    return L;
  }
  function v(O) {
    if (typeof O != "string")
      throw new TypeError("Expected String");
    if (O.length === 0)
      return new Uint8Array();
    var R = 0;
    if (O[R] !== " ") {
      for (var N = 0, B = 0; O[R] === l; )
        N++, R++;
      for (var S = (O.length - R) * f + 1 >>> 0, x = new Uint8Array(S); O[R]; ) {
        var g = r[O.charCodeAt(R)];
        if (g === 255)
          return;
        for (var w = 0, d = S - 1; (g !== 0 || w < B) && d !== -1; d--, w++)
          g += a * x[d] >>> 0, x[d] = g % 256 >>> 0, g = g / 256 >>> 0;
        if (g !== 0)
          throw new Error("Non-zero carry");
        B = w, R++;
      }
      if (O[R] !== " ") {
        for (var o = S - B; o !== S && x[o] === 0; )
          o++;
        for (var p = new Uint8Array(N + (S - o)), L = N; o !== S; )
          p[L++] = x[o++];
        return p;
      }
    }
  }
  function _(O) {
    var R = v(O);
    if (R)
      return R;
    throw new Error(`Non-${t} character`);
  }
  return {
    encode: b,
    decodeUnsafe: v,
    decode: _
  };
}
var Gh = Hh, Yh = Gh;
const Jh = (e) => {
  if (e instanceof Uint8Array && e.constructor.name === "Uint8Array")
    return e;
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  if (ArrayBuffer.isView(e))
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Xh = (e) => new TextEncoder().encode(e), Qh = (e) => new TextDecoder().decode(e);
class Zh {
  constructor(t, r, i) {
    this.name = t, this.prefix = r, this.baseEncode = i;
  }
  encode(t) {
    if (t instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class ed {
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
    return kc(this, t);
  }
}
class td {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return kc(this, t);
  }
  decode(t) {
    const r = t[0], i = this.decoders[r];
    if (i)
      return i.decode(t);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const kc = (e, t) => new td({
  ...e.decoders || { [e.prefix]: e },
  ...t.decoders || { [t.prefix]: t }
});
class rd {
  constructor(t, r, i, n) {
    this.name = t, this.prefix = r, this.baseEncode = i, this.baseDecode = n, this.encoder = new Zh(t, r, i), this.decoder = new ed(t, r, n);
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const dn = ({ name: e, prefix: t, encode: r, decode: i }) => new rd(e, t, r, i), Ci = ({ prefix: e, name: t, alphabet: r }) => {
  const { encode: i, decode: n } = Yh(r, t);
  return dn({
    prefix: e,
    name: t,
    encode: i,
    decode: (s) => Jh(n(s))
  });
}, id = (e, t, r, i) => {
  const n = {};
  for (let h = 0; h < t.length; ++h)
    n[t[h]] = h;
  let s = e.length;
  for (; e[s - 1] === "="; )
    --s;
  const u = new Uint8Array(s * r / 8 | 0);
  let a = 0, l = 0, f = 0;
  for (let h = 0; h < s; ++h) {
    const b = n[e[h]];
    if (b === void 0)
      throw new SyntaxError(`Non-${i} character`);
    l = l << r | b, a += r, a >= 8 && (a -= 8, u[f++] = 255 & l >> a);
  }
  if (a >= r || 255 & l << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return u;
}, nd = (e, t, r) => {
  const i = t[t.length - 1] === "=", n = (1 << r) - 1;
  let s = "", u = 0, a = 0;
  for (let l = 0; l < e.length; ++l)
    for (a = a << 8 | e[l], u += 8; u > r; )
      u -= r, s += t[n & a >> u];
  if (u && (s += t[n & a << r - u]), i)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, gt = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) => dn({
  prefix: t,
  name: e,
  encode(n) {
    return nd(n, i, r);
  },
  decode(n) {
    return id(n, i, r, e);
  }
}), sd = dn({
  prefix: "\0",
  name: "identity",
  encode: (e) => Qh(e),
  decode: (e) => Xh(e)
}), od = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: sd
}, Symbol.toStringTag, { value: "Module" })), ad = gt({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), cd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: ad
}, Symbol.toStringTag, { value: "Module" })), ud = gt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), ld = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: ud
}, Symbol.toStringTag, { value: "Module" })), fd = Ci({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), hd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: fd
}, Symbol.toStringTag, { value: "Module" })), dd = gt({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), pd = gt({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), gd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: dd,
  base16upper: pd
}, Symbol.toStringTag, { value: "Module" })), yd = gt({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), bd = gt({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), vd = gt({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), md = gt({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), _d = gt({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), wd = gt({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), Ed = gt({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), Sd = gt({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), Dd = gt({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), Od = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: yd,
  base32hex: _d,
  base32hexpad: Ed,
  base32hexpadupper: Sd,
  base32hexupper: wd,
  base32pad: vd,
  base32padupper: md,
  base32upper: bd,
  base32z: Dd
}, Symbol.toStringTag, { value: "Module" })), xd = Ci({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), Id = Ci({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), Rd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: xd,
  base36upper: Id
}, Symbol.toStringTag, { value: "Module" })), Ad = Ci({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), Cd = Ci({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), Td = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: Ad,
  base58flickr: Cd
}, Symbol.toStringTag, { value: "Module" })), Pd = gt({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), Nd = gt({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), Ld = gt({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), Ud = gt({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), $d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: Pd,
  base64pad: Nd,
  base64url: Ld,
  base64urlpad: Ud
}, Symbol.toStringTag, { value: "Module" })), Wc = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Fd = Wc.reduce((e, t, r) => (e[r] = t, e), []), Md = Wc.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []);
function jd(e) {
  return e.reduce((t, r) => (t += Fd[r], t), "");
}
function Bd(e) {
  const t = [];
  for (const r of e) {
    const i = Md[r.codePointAt(0)];
    if (i === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    t.push(i);
  }
  return new Uint8Array(t);
}
const qd = dn({
  prefix: "🚀",
  name: "base256emoji",
  encode: jd,
  decode: Bd
}), zd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: qd
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const ta = {
  ...od,
  ...cd,
  ...ld,
  ...hd,
  ...gd,
  ...Od,
  ...Rd,
  ...Td,
  ...$d,
  ...zd
};
function Hc(e, t, r, i) {
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
const ra = Hc("utf8", "u", (e) => "u" + new TextDecoder("utf8").decode(e), (e) => new TextEncoder().encode(e.substring(1))), Pn = Hc("ascii", "a", (e) => {
  let t = "a";
  for (let r = 0; r < e.length; r++)
    t += String.fromCharCode(e[r]);
  return t;
}, (e) => {
  e = e.substring(1);
  const t = Kc(e.length);
  for (let r = 0; r < e.length; r++)
    t[r] = e.charCodeAt(r);
  return t;
}), Gc = {
  utf8: ra,
  "utf-8": ra,
  hex: ta.base16,
  latin1: Pn,
  ascii: Pn,
  binary: Pn,
  ...ta
};
function It(e, t = "utf8") {
  const r = Gc[t];
  if (!r)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8") : r.encoder.encode(e).substring(1);
}
function At(e, t = "utf8") {
  const r = Gc[t];
  if (!r)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Cs(globalThis.Buffer.from(e, "utf-8")) : r.decoder.decode(`${r.prefix}${e}`);
}
function Qi(e) {
  return It(At(Rs(e), jh), Vc);
}
function Yc(e) {
  const t = At(kh, ea), r = Kh + It(os([t, e]), ea);
  return [zh, Vh, r].join(qh);
}
function Vd(e) {
  return It(e, Vc);
}
function Kd(e) {
  return At([Qi(e.header), Qi(e.payload)].join(zc), Bh);
}
function kd(e) {
  return [
    Qi(e.header),
    Qi(e.payload),
    Vd(e.signature)
  ].join(zc);
}
function ia(e = Xr.randomBytes(Wh)) {
  return As.generateKeyPairFromSeed(e);
}
async function Wd(e, t, r, i, n = te.fromMiliseconds(Date.now())) {
  const s = { alg: Fh, typ: Mh }, u = Yc(i.publicKey), a = n + r, l = { iss: u, sub: e, aud: t, iat: n, exp: a }, f = Kd({ header: s, payload: l }), h = As.sign(i.secretKey, f);
  return kd({ header: s, payload: l, signature: h });
}
var Ts = {}, pn = {};
Object.defineProperty(pn, "__esModule", { value: !0 });
var mt = le, as = Ft, Hd = 20;
function Gd(e, t, r) {
  for (var i = 1634760805, n = 857760878, s = 2036477234, u = 1797285236, a = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], l = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], f = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], h = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], b = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], v = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], _ = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], O = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], R = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], N = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4], B = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8], S = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12], x = i, g = n, w = s, d = u, o = a, p = l, L = f, U = h, $ = b, F = v, q = _, E = O, C = R, G = N, V = B, z = S, k = 0; k < Hd; k += 2)
    x = x + o | 0, C ^= x, C = C >>> 32 - 16 | C << 16, $ = $ + C | 0, o ^= $, o = o >>> 32 - 12 | o << 12, g = g + p | 0, G ^= g, G = G >>> 32 - 16 | G << 16, F = F + G | 0, p ^= F, p = p >>> 32 - 12 | p << 12, w = w + L | 0, V ^= w, V = V >>> 32 - 16 | V << 16, q = q + V | 0, L ^= q, L = L >>> 32 - 12 | L << 12, d = d + U | 0, z ^= d, z = z >>> 32 - 16 | z << 16, E = E + z | 0, U ^= E, U = U >>> 32 - 12 | U << 12, w = w + L | 0, V ^= w, V = V >>> 32 - 8 | V << 8, q = q + V | 0, L ^= q, L = L >>> 32 - 7 | L << 7, d = d + U | 0, z ^= d, z = z >>> 32 - 8 | z << 8, E = E + z | 0, U ^= E, U = U >>> 32 - 7 | U << 7, g = g + p | 0, G ^= g, G = G >>> 32 - 8 | G << 8, F = F + G | 0, p ^= F, p = p >>> 32 - 7 | p << 7, x = x + o | 0, C ^= x, C = C >>> 32 - 8 | C << 8, $ = $ + C | 0, o ^= $, o = o >>> 32 - 7 | o << 7, x = x + p | 0, z ^= x, z = z >>> 32 - 16 | z << 16, q = q + z | 0, p ^= q, p = p >>> 32 - 12 | p << 12, g = g + L | 0, C ^= g, C = C >>> 32 - 16 | C << 16, E = E + C | 0, L ^= E, L = L >>> 32 - 12 | L << 12, w = w + U | 0, G ^= w, G = G >>> 32 - 16 | G << 16, $ = $ + G | 0, U ^= $, U = U >>> 32 - 12 | U << 12, d = d + o | 0, V ^= d, V = V >>> 32 - 16 | V << 16, F = F + V | 0, o ^= F, o = o >>> 32 - 12 | o << 12, w = w + U | 0, G ^= w, G = G >>> 32 - 8 | G << 8, $ = $ + G | 0, U ^= $, U = U >>> 32 - 7 | U << 7, d = d + o | 0, V ^= d, V = V >>> 32 - 8 | V << 8, F = F + V | 0, o ^= F, o = o >>> 32 - 7 | o << 7, g = g + L | 0, C ^= g, C = C >>> 32 - 8 | C << 8, E = E + C | 0, L ^= E, L = L >>> 32 - 7 | L << 7, x = x + p | 0, z ^= x, z = z >>> 32 - 8 | z << 8, q = q + z | 0, p ^= q, p = p >>> 32 - 7 | p << 7;
  mt.writeUint32LE(x + i | 0, e, 0), mt.writeUint32LE(g + n | 0, e, 4), mt.writeUint32LE(w + s | 0, e, 8), mt.writeUint32LE(d + u | 0, e, 12), mt.writeUint32LE(o + a | 0, e, 16), mt.writeUint32LE(p + l | 0, e, 20), mt.writeUint32LE(L + f | 0, e, 24), mt.writeUint32LE(U + h | 0, e, 28), mt.writeUint32LE($ + b | 0, e, 32), mt.writeUint32LE(F + v | 0, e, 36), mt.writeUint32LE(q + _ | 0, e, 40), mt.writeUint32LE(E + O | 0, e, 44), mt.writeUint32LE(C + R | 0, e, 48), mt.writeUint32LE(G + N | 0, e, 52), mt.writeUint32LE(V + B | 0, e, 56), mt.writeUint32LE(z + S | 0, e, 60);
}
function Jc(e, t, r, i, n) {
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
    Gd(a, s, e);
    for (var f = l; f < l + 64 && f < r.length; f++)
      i[f] = r[f] ^ a[f - l];
    Jd(s, 0, u);
  }
  return as.wipe(a), n === 0 && as.wipe(s), i;
}
pn.streamXOR = Jc;
function Yd(e, t, r, i) {
  return i === void 0 && (i = 0), as.wipe(r), Jc(e, t, r, r, i);
}
pn.stream = Yd;
function Jd(e, t, r) {
  for (var i = 1; r--; )
    i = i + (e[t] & 255) | 0, e[t] = i & 255, i >>>= 8, t++;
  if (i > 0)
    throw new Error("ChaCha: counter overflow");
}
var Xc = {}, _r = {};
Object.defineProperty(_r, "__esModule", { value: !0 });
function Xd(e, t, r) {
  return ~(e - 1) & t | e - 1 & r;
}
_r.select = Xd;
function Qd(e, t) {
  return (e | 0) - (t | 0) - 1 >>> 31 & 1;
}
_r.lessOrEqual = Qd;
function Qc(e, t) {
  if (e.length !== t.length)
    return 0;
  for (var r = 0, i = 0; i < e.length; i++)
    r |= e[i] ^ t[i];
  return 1 & r - 1 >>> 8;
}
_r.compare = Qc;
function Zd(e, t) {
  return e.length === 0 || t.length === 0 ? !1 : Qc(e, t) !== 0;
}
_r.equal = Zd;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = _r, r = Ft;
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
        var b = a[6] | a[7] << 8;
        this._r[3] = (h >>> 7 | b << 9) & 8191;
        var v = a[8] | a[9] << 8;
        this._r[4] = (b >>> 4 | v << 12) & 255, this._r[5] = v >>> 1 & 8190;
        var _ = a[10] | a[11] << 8;
        this._r[6] = (v >>> 14 | _ << 2) & 8191;
        var O = a[12] | a[13] << 8;
        this._r[7] = (_ >>> 11 | O << 5) & 8065;
        var R = a[14] | a[15] << 8;
        this._r[8] = (O >>> 8 | R << 8) & 8191, this._r[9] = R >>> 5 & 127, this._pad[0] = a[16] | a[17] << 8, this._pad[1] = a[18] | a[19] << 8, this._pad[2] = a[20] | a[21] << 8, this._pad[3] = a[22] | a[23] << 8, this._pad[4] = a[24] | a[25] << 8, this._pad[5] = a[26] | a[27] << 8, this._pad[6] = a[28] | a[29] << 8, this._pad[7] = a[30] | a[31] << 8;
      }
      return u.prototype._blocks = function(a, l, f) {
        for (var h = this._fin ? 0 : 2048, b = this._h[0], v = this._h[1], _ = this._h[2], O = this._h[3], R = this._h[4], N = this._h[5], B = this._h[6], S = this._h[7], x = this._h[8], g = this._h[9], w = this._r[0], d = this._r[1], o = this._r[2], p = this._r[3], L = this._r[4], U = this._r[5], $ = this._r[6], F = this._r[7], q = this._r[8], E = this._r[9]; f >= 16; ) {
          var C = a[l + 0] | a[l + 1] << 8;
          b += C & 8191;
          var G = a[l + 2] | a[l + 3] << 8;
          v += (C >>> 13 | G << 3) & 8191;
          var V = a[l + 4] | a[l + 5] << 8;
          _ += (G >>> 10 | V << 6) & 8191;
          var z = a[l + 6] | a[l + 7] << 8;
          O += (V >>> 7 | z << 9) & 8191;
          var k = a[l + 8] | a[l + 9] << 8;
          R += (z >>> 4 | k << 12) & 8191, N += k >>> 1 & 8191;
          var j = a[l + 10] | a[l + 11] << 8;
          B += (k >>> 14 | j << 2) & 8191;
          var W = a[l + 12] | a[l + 13] << 8;
          S += (j >>> 11 | W << 5) & 8191;
          var oe = a[l + 14] | a[l + 15] << 8;
          x += (W >>> 8 | oe << 8) & 8191, g += oe >>> 5 | h;
          var H = 0, ie = H;
          ie += b * w, ie += v * (5 * E), ie += _ * (5 * q), ie += O * (5 * F), ie += R * (5 * $), H = ie >>> 13, ie &= 8191, ie += N * (5 * U), ie += B * (5 * L), ie += S * (5 * p), ie += x * (5 * o), ie += g * (5 * d), H += ie >>> 13, ie &= 8191;
          var Z = H;
          Z += b * d, Z += v * w, Z += _ * (5 * E), Z += O * (5 * q), Z += R * (5 * F), H = Z >>> 13, Z &= 8191, Z += N * (5 * $), Z += B * (5 * U), Z += S * (5 * L), Z += x * (5 * p), Z += g * (5 * o), H += Z >>> 13, Z &= 8191;
          var re = H;
          re += b * o, re += v * d, re += _ * w, re += O * (5 * E), re += R * (5 * q), H = re >>> 13, re &= 8191, re += N * (5 * F), re += B * (5 * $), re += S * (5 * U), re += x * (5 * L), re += g * (5 * p), H += re >>> 13, re &= 8191;
          var P = H;
          P += b * p, P += v * o, P += _ * d, P += O * w, P += R * (5 * E), H = P >>> 13, P &= 8191, P += N * (5 * q), P += B * (5 * F), P += S * (5 * $), P += x * (5 * U), P += g * (5 * L), H += P >>> 13, P &= 8191;
          var T = H;
          T += b * L, T += v * p, T += _ * o, T += O * d, T += R * w, H = T >>> 13, T &= 8191, T += N * (5 * E), T += B * (5 * q), T += S * (5 * F), T += x * (5 * $), T += g * (5 * U), H += T >>> 13, T &= 8191;
          var I = H;
          I += b * U, I += v * L, I += _ * p, I += O * o, I += R * d, H = I >>> 13, I &= 8191, I += N * w, I += B * (5 * E), I += S * (5 * q), I += x * (5 * F), I += g * (5 * $), H += I >>> 13, I &= 8191;
          var c = H;
          c += b * $, c += v * U, c += _ * L, c += O * p, c += R * o, H = c >>> 13, c &= 8191, c += N * d, c += B * w, c += S * (5 * E), c += x * (5 * q), c += g * (5 * F), H += c >>> 13, c &= 8191;
          var D = H;
          D += b * F, D += v * $, D += _ * U, D += O * L, D += R * p, H = D >>> 13, D &= 8191, D += N * o, D += B * d, D += S * w, D += x * (5 * E), D += g * (5 * q), H += D >>> 13, D &= 8191;
          var Y = H;
          Y += b * q, Y += v * F, Y += _ * $, Y += O * U, Y += R * L, H = Y >>> 13, Y &= 8191, Y += N * p, Y += B * o, Y += S * d, Y += x * w, Y += g * (5 * E), H += Y >>> 13, Y &= 8191;
          var Q = H;
          Q += b * E, Q += v * q, Q += _ * F, Q += O * $, Q += R * U, H = Q >>> 13, Q &= 8191, Q += N * L, Q += B * p, Q += S * o, Q += x * d, Q += g * w, H += Q >>> 13, Q &= 8191, H = (H << 2) + H | 0, H = H + ie | 0, ie = H & 8191, H = H >>> 13, Z += H, b = ie, v = Z, _ = re, O = P, R = T, N = I, B = c, S = D, x = Y, g = Q, l += 16, f -= 16;
        }
        this._h[0] = b, this._h[1] = v, this._h[2] = _, this._h[3] = O, this._h[4] = R, this._h[5] = N, this._h[6] = B, this._h[7] = S, this._h[8] = x, this._h[9] = g;
      }, u.prototype.finish = function(a, l) {
        l === void 0 && (l = 0);
        var f = new Uint16Array(10), h, b, v, _;
        if (this._leftover) {
          for (_ = this._leftover, this._buffer[_++] = 1; _ < 16; _++)
            this._buffer[_] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (h = this._h[1] >>> 13, this._h[1] &= 8191, _ = 2; _ < 10; _++)
          this._h[_] += h, h = this._h[_] >>> 13, this._h[_] &= 8191;
        for (this._h[0] += h * 5, h = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += h, h = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += h, f[0] = this._h[0] + 5, h = f[0] >>> 13, f[0] &= 8191, _ = 1; _ < 10; _++)
          f[_] = this._h[_] + h, h = f[_] >>> 13, f[_] &= 8191;
        for (f[9] -= 8192, b = (h ^ 1) - 1, _ = 0; _ < 10; _++)
          f[_] &= b;
        for (b = ~b, _ = 0; _ < 10; _++)
          this._h[_] = this._h[_] & b | f[_];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, v = this._h[0] + this._pad[0], this._h[0] = v & 65535, _ = 1; _ < 8; _++)
          v = (this._h[_] + this._pad[_] | 0) + (v >>> 16) | 0, this._h[_] = v & 65535;
        return a[l + 0] = this._h[0] >>> 0, a[l + 1] = this._h[0] >>> 8, a[l + 2] = this._h[1] >>> 0, a[l + 3] = this._h[1] >>> 8, a[l + 4] = this._h[2] >>> 0, a[l + 5] = this._h[2] >>> 8, a[l + 6] = this._h[3] >>> 0, a[l + 7] = this._h[3] >>> 8, a[l + 8] = this._h[4] >>> 0, a[l + 9] = this._h[4] >>> 8, a[l + 10] = this._h[5] >>> 0, a[l + 11] = this._h[5] >>> 8, a[l + 12] = this._h[6] >>> 0, a[l + 13] = this._h[6] >>> 8, a[l + 14] = this._h[7] >>> 0, a[l + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, u.prototype.update = function(a) {
        var l = 0, f = a.length, h;
        if (this._leftover) {
          h = 16 - this._leftover, h > f && (h = f);
          for (var b = 0; b < h; b++)
            this._buffer[this._leftover + b] = a[l + b];
          if (f -= h, l += h, this._leftover += h, this._leftover < 16)
            return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (f >= 16 && (h = f - f % 16, this._blocks(a, l, h), l += h, f -= h), f) {
          for (var b = 0; b < f; b++)
            this._buffer[this._leftover + b] = a[l + b];
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
})(Xc);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = pn, r = Xc, i = Ft, n = le, s = _r;
  e.KEY_LENGTH = 32, e.NONCE_LENGTH = 12, e.TAG_LENGTH = 16;
  var u = new Uint8Array(16), a = (
    /** @class */
    function() {
      function l(f) {
        if (this.nonceLength = e.NONCE_LENGTH, this.tagLength = e.TAG_LENGTH, f.length !== e.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(f);
      }
      return l.prototype.seal = function(f, h, b, v) {
        if (f.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var _ = new Uint8Array(16);
        _.set(f, _.length - f.length);
        var O = new Uint8Array(32);
        t.stream(this._key, _, O, 4);
        var R = h.length + this.tagLength, N;
        if (v) {
          if (v.length !== R)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          N = v;
        } else
          N = new Uint8Array(R);
        return t.streamXOR(this._key, _, h, N, 4), this._authenticate(N.subarray(N.length - this.tagLength, N.length), O, N.subarray(0, N.length - this.tagLength), b), i.wipe(_), N;
      }, l.prototype.open = function(f, h, b, v) {
        if (f.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (h.length < this.tagLength)
          return null;
        var _ = new Uint8Array(16);
        _.set(f, _.length - f.length);
        var O = new Uint8Array(32);
        t.stream(this._key, _, O, 4);
        var R = new Uint8Array(this.tagLength);
        if (this._authenticate(R, O, h.subarray(0, h.length - this.tagLength), b), !s.equal(R, h.subarray(h.length - this.tagLength, h.length)))
          return null;
        var N = h.length - this.tagLength, B;
        if (v) {
          if (v.length !== N)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          B = v;
        } else
          B = new Uint8Array(N);
        return t.streamXOR(this._key, _, h.subarray(0, h.length - this.tagLength), B, 4), i.wipe(_), B;
      }, l.prototype.clean = function() {
        return i.wipe(this._key), this;
      }, l.prototype._authenticate = function(f, h, b, v) {
        var _ = new r.Poly1305(h);
        v && (_.update(v), v.length % 16 > 0 && _.update(u.subarray(v.length % 16))), _.update(b), b.length % 16 > 0 && _.update(u.subarray(b.length % 16));
        var O = new Uint8Array(8);
        v && n.writeUint64LE(v.length, O), _.update(O), n.writeUint64LE(b.length, O), _.update(O);
        for (var R = _.digest(), N = 0; N < R.length; N++)
          f[N] = R[N];
        _.clean(), i.wipe(R), i.wipe(O);
      }, l;
    }()
  );
  e.ChaCha20Poly1305 = a;
})(Ts);
var Zc = {}, Ti = {}, Ps = {};
Object.defineProperty(Ps, "__esModule", { value: !0 });
function ep(e) {
  return typeof e.saveState < "u" && typeof e.restoreState < "u" && typeof e.cleanSavedState < "u";
}
Ps.isSerializableHash = ep;
Object.defineProperty(Ti, "__esModule", { value: !0 });
var rr = Ps, tp = _r, rp = Ft, eu = (
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
      this._outer.update(i), rr.isSerializableHash(this._inner) && rr.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), rp.wipe(i);
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
Ti.HMAC = eu;
function ip(e, t, r) {
  var i = new eu(e, t);
  i.update(r);
  var n = i.digest();
  return i.clean(), n;
}
Ti.hmac = ip;
Ti.equal = tp.equal;
Object.defineProperty(Zc, "__esModule", { value: !0 });
var na = Ti, sa = Ft, np = (
  /** @class */
  function() {
    function e(t, r, i, n) {
      i === void 0 && (i = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = t, this._info = n;
      var s = na.hmac(this._hash, i, r);
      this._hmac = new na.HMAC(t, s), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
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
      this._hmac.clean(), sa.wipe(this._buffer), sa.wipe(this._counter), this._bufpos = 0;
    }, e;
  }()
), sp = Zc.HKDF = np, gn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = le, r = Ft;
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
          var f = this._bytesHashed, h = this._bufferLength, b = f / 536870912 | 0, v = f << 3, _ = f % 64 < 56 ? 64 : 128;
          this._buffer[h] = 128;
          for (var O = h + 1; O < _ - 8; O++)
            this._buffer[O] = 0;
          t.writeUint32BE(b, this._buffer, _ - 8), t.writeUint32BE(v, this._buffer, _ - 4), s(this._temp, this._state, this._buffer, 0, _), this._finished = !0;
        }
        for (var O = 0; O < this.digestLength / 4; O++)
          t.writeUint32BE(this._state[O], l, O * 4);
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
  function s(a, l, f, h, b) {
    for (; b >= 64; ) {
      for (var v = l[0], _ = l[1], O = l[2], R = l[3], N = l[4], B = l[5], S = l[6], x = l[7], g = 0; g < 16; g++) {
        var w = h + g * 4;
        a[g] = t.readUint32BE(f, w);
      }
      for (var g = 16; g < 64; g++) {
        var d = a[g - 2], o = (d >>> 17 | d << 32 - 17) ^ (d >>> 19 | d << 32 - 19) ^ d >>> 10;
        d = a[g - 15];
        var p = (d >>> 7 | d << 32 - 7) ^ (d >>> 18 | d << 32 - 18) ^ d >>> 3;
        a[g] = (o + a[g - 7] | 0) + (p + a[g - 16] | 0);
      }
      for (var g = 0; g < 64; g++) {
        var o = (((N >>> 6 | N << 26) ^ (N >>> 11 | N << 21) ^ (N >>> 25 | N << 7)) + (N & B ^ ~N & S) | 0) + (x + (n[g] + a[g] | 0) | 0) | 0, p = ((v >>> 2 | v << 32 - 2) ^ (v >>> 13 | v << 32 - 13) ^ (v >>> 22 | v << 32 - 22)) + (v & _ ^ v & O ^ _ & O) | 0;
        x = S, S = B, B = N, N = R + o | 0, R = O, O = _, _ = v, v = o + p | 0;
      }
      l[0] += v, l[1] += _, l[2] += O, l[3] += R, l[4] += N, l[5] += B, l[6] += S, l[7] += x, h += 64, b -= 64;
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
})(gn);
var Ns = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.sharedKey = e.generateKeyPair = e.generateKeyPairFromSeed = e.scalarMultBase = e.scalarMult = e.SHARED_KEY_LENGTH = e.SECRET_KEY_LENGTH = e.PUBLIC_KEY_LENGTH = void 0;
  const t = Xr, r = Ft;
  e.PUBLIC_KEY_LENGTH = 32, e.SECRET_KEY_LENGTH = 32, e.SHARED_KEY_LENGTH = 32;
  function i(g) {
    const w = new Float64Array(16);
    if (g)
      for (let d = 0; d < g.length; d++)
        w[d] = g[d];
    return w;
  }
  const n = new Uint8Array(32);
  n[0] = 9;
  const s = i([56129, 1]);
  function u(g) {
    let w = 1;
    for (let d = 0; d < 16; d++) {
      let o = g[d] + w + 65535;
      w = Math.floor(o / 65536), g[d] = o - w * 65536;
    }
    g[0] += w - 1 + 37 * (w - 1);
  }
  function a(g, w, d) {
    const o = ~(d - 1);
    for (let p = 0; p < 16; p++) {
      const L = o & (g[p] ^ w[p]);
      g[p] ^= L, w[p] ^= L;
    }
  }
  function l(g, w) {
    const d = i(), o = i();
    for (let p = 0; p < 16; p++)
      o[p] = w[p];
    u(o), u(o), u(o);
    for (let p = 0; p < 2; p++) {
      d[0] = o[0] - 65517;
      for (let U = 1; U < 15; U++)
        d[U] = o[U] - 65535 - (d[U - 1] >> 16 & 1), d[U - 1] &= 65535;
      d[15] = o[15] - 32767 - (d[14] >> 16 & 1);
      const L = d[15] >> 16 & 1;
      d[14] &= 65535, a(o, d, 1 - L);
    }
    for (let p = 0; p < 16; p++)
      g[2 * p] = o[p] & 255, g[2 * p + 1] = o[p] >> 8;
  }
  function f(g, w) {
    for (let d = 0; d < 16; d++)
      g[d] = w[2 * d] + (w[2 * d + 1] << 8);
    g[15] &= 32767;
  }
  function h(g, w, d) {
    for (let o = 0; o < 16; o++)
      g[o] = w[o] + d[o];
  }
  function b(g, w, d) {
    for (let o = 0; o < 16; o++)
      g[o] = w[o] - d[o];
  }
  function v(g, w, d) {
    let o, p, L = 0, U = 0, $ = 0, F = 0, q = 0, E = 0, C = 0, G = 0, V = 0, z = 0, k = 0, j = 0, W = 0, oe = 0, H = 0, ie = 0, Z = 0, re = 0, P = 0, T = 0, I = 0, c = 0, D = 0, Y = 0, Q = 0, be = 0, ve = 0, he = 0, xe = 0, Be = 0, Le = 0, De = d[0], we = d[1], de = d[2], ge = d[3], pe = d[4], ue = d[5], ce = d[6], ne = d[7], ye = d[8], me = d[9], ae = d[10], Ee = d[11], Ie = d[12], Te = d[13], Pe = d[14], Re = d[15];
    o = w[0], L += o * De, U += o * we, $ += o * de, F += o * ge, q += o * pe, E += o * ue, C += o * ce, G += o * ne, V += o * ye, z += o * me, k += o * ae, j += o * Ee, W += o * Ie, oe += o * Te, H += o * Pe, ie += o * Re, o = w[1], U += o * De, $ += o * we, F += o * de, q += o * ge, E += o * pe, C += o * ue, G += o * ce, V += o * ne, z += o * ye, k += o * me, j += o * ae, W += o * Ee, oe += o * Ie, H += o * Te, ie += o * Pe, Z += o * Re, o = w[2], $ += o * De, F += o * we, q += o * de, E += o * ge, C += o * pe, G += o * ue, V += o * ce, z += o * ne, k += o * ye, j += o * me, W += o * ae, oe += o * Ee, H += o * Ie, ie += o * Te, Z += o * Pe, re += o * Re, o = w[3], F += o * De, q += o * we, E += o * de, C += o * ge, G += o * pe, V += o * ue, z += o * ce, k += o * ne, j += o * ye, W += o * me, oe += o * ae, H += o * Ee, ie += o * Ie, Z += o * Te, re += o * Pe, P += o * Re, o = w[4], q += o * De, E += o * we, C += o * de, G += o * ge, V += o * pe, z += o * ue, k += o * ce, j += o * ne, W += o * ye, oe += o * me, H += o * ae, ie += o * Ee, Z += o * Ie, re += o * Te, P += o * Pe, T += o * Re, o = w[5], E += o * De, C += o * we, G += o * de, V += o * ge, z += o * pe, k += o * ue, j += o * ce, W += o * ne, oe += o * ye, H += o * me, ie += o * ae, Z += o * Ee, re += o * Ie, P += o * Te, T += o * Pe, I += o * Re, o = w[6], C += o * De, G += o * we, V += o * de, z += o * ge, k += o * pe, j += o * ue, W += o * ce, oe += o * ne, H += o * ye, ie += o * me, Z += o * ae, re += o * Ee, P += o * Ie, T += o * Te, I += o * Pe, c += o * Re, o = w[7], G += o * De, V += o * we, z += o * de, k += o * ge, j += o * pe, W += o * ue, oe += o * ce, H += o * ne, ie += o * ye, Z += o * me, re += o * ae, P += o * Ee, T += o * Ie, I += o * Te, c += o * Pe, D += o * Re, o = w[8], V += o * De, z += o * we, k += o * de, j += o * ge, W += o * pe, oe += o * ue, H += o * ce, ie += o * ne, Z += o * ye, re += o * me, P += o * ae, T += o * Ee, I += o * Ie, c += o * Te, D += o * Pe, Y += o * Re, o = w[9], z += o * De, k += o * we, j += o * de, W += o * ge, oe += o * pe, H += o * ue, ie += o * ce, Z += o * ne, re += o * ye, P += o * me, T += o * ae, I += o * Ee, c += o * Ie, D += o * Te, Y += o * Pe, Q += o * Re, o = w[10], k += o * De, j += o * we, W += o * de, oe += o * ge, H += o * pe, ie += o * ue, Z += o * ce, re += o * ne, P += o * ye, T += o * me, I += o * ae, c += o * Ee, D += o * Ie, Y += o * Te, Q += o * Pe, be += o * Re, o = w[11], j += o * De, W += o * we, oe += o * de, H += o * ge, ie += o * pe, Z += o * ue, re += o * ce, P += o * ne, T += o * ye, I += o * me, c += o * ae, D += o * Ee, Y += o * Ie, Q += o * Te, be += o * Pe, ve += o * Re, o = w[12], W += o * De, oe += o * we, H += o * de, ie += o * ge, Z += o * pe, re += o * ue, P += o * ce, T += o * ne, I += o * ye, c += o * me, D += o * ae, Y += o * Ee, Q += o * Ie, be += o * Te, ve += o * Pe, he += o * Re, o = w[13], oe += o * De, H += o * we, ie += o * de, Z += o * ge, re += o * pe, P += o * ue, T += o * ce, I += o * ne, c += o * ye, D += o * me, Y += o * ae, Q += o * Ee, be += o * Ie, ve += o * Te, he += o * Pe, xe += o * Re, o = w[14], H += o * De, ie += o * we, Z += o * de, re += o * ge, P += o * pe, T += o * ue, I += o * ce, c += o * ne, D += o * ye, Y += o * me, Q += o * ae, be += o * Ee, ve += o * Ie, he += o * Te, xe += o * Pe, Be += o * Re, o = w[15], ie += o * De, Z += o * we, re += o * de, P += o * ge, T += o * pe, I += o * ue, c += o * ce, D += o * ne, Y += o * ye, Q += o * me, be += o * ae, ve += o * Ee, he += o * Ie, xe += o * Te, Be += o * Pe, Le += o * Re, L += 38 * Z, U += 38 * re, $ += 38 * P, F += 38 * T, q += 38 * I, E += 38 * c, C += 38 * D, G += 38 * Y, V += 38 * Q, z += 38 * be, k += 38 * ve, j += 38 * he, W += 38 * xe, oe += 38 * Be, H += 38 * Le, p = 1, o = L + p + 65535, p = Math.floor(o / 65536), L = o - p * 65536, o = U + p + 65535, p = Math.floor(o / 65536), U = o - p * 65536, o = $ + p + 65535, p = Math.floor(o / 65536), $ = o - p * 65536, o = F + p + 65535, p = Math.floor(o / 65536), F = o - p * 65536, o = q + p + 65535, p = Math.floor(o / 65536), q = o - p * 65536, o = E + p + 65535, p = Math.floor(o / 65536), E = o - p * 65536, o = C + p + 65535, p = Math.floor(o / 65536), C = o - p * 65536, o = G + p + 65535, p = Math.floor(o / 65536), G = o - p * 65536, o = V + p + 65535, p = Math.floor(o / 65536), V = o - p * 65536, o = z + p + 65535, p = Math.floor(o / 65536), z = o - p * 65536, o = k + p + 65535, p = Math.floor(o / 65536), k = o - p * 65536, o = j + p + 65535, p = Math.floor(o / 65536), j = o - p * 65536, o = W + p + 65535, p = Math.floor(o / 65536), W = o - p * 65536, o = oe + p + 65535, p = Math.floor(o / 65536), oe = o - p * 65536, o = H + p + 65535, p = Math.floor(o / 65536), H = o - p * 65536, o = ie + p + 65535, p = Math.floor(o / 65536), ie = o - p * 65536, L += p - 1 + 37 * (p - 1), p = 1, o = L + p + 65535, p = Math.floor(o / 65536), L = o - p * 65536, o = U + p + 65535, p = Math.floor(o / 65536), U = o - p * 65536, o = $ + p + 65535, p = Math.floor(o / 65536), $ = o - p * 65536, o = F + p + 65535, p = Math.floor(o / 65536), F = o - p * 65536, o = q + p + 65535, p = Math.floor(o / 65536), q = o - p * 65536, o = E + p + 65535, p = Math.floor(o / 65536), E = o - p * 65536, o = C + p + 65535, p = Math.floor(o / 65536), C = o - p * 65536, o = G + p + 65535, p = Math.floor(o / 65536), G = o - p * 65536, o = V + p + 65535, p = Math.floor(o / 65536), V = o - p * 65536, o = z + p + 65535, p = Math.floor(o / 65536), z = o - p * 65536, o = k + p + 65535, p = Math.floor(o / 65536), k = o - p * 65536, o = j + p + 65535, p = Math.floor(o / 65536), j = o - p * 65536, o = W + p + 65535, p = Math.floor(o / 65536), W = o - p * 65536, o = oe + p + 65535, p = Math.floor(o / 65536), oe = o - p * 65536, o = H + p + 65535, p = Math.floor(o / 65536), H = o - p * 65536, o = ie + p + 65535, p = Math.floor(o / 65536), ie = o - p * 65536, L += p - 1 + 37 * (p - 1), g[0] = L, g[1] = U, g[2] = $, g[3] = F, g[4] = q, g[5] = E, g[6] = C, g[7] = G, g[8] = V, g[9] = z, g[10] = k, g[11] = j, g[12] = W, g[13] = oe, g[14] = H, g[15] = ie;
  }
  function _(g, w) {
    v(g, w, w);
  }
  function O(g, w) {
    const d = i();
    for (let o = 0; o < 16; o++)
      d[o] = w[o];
    for (let o = 253; o >= 0; o--)
      _(d, d), o !== 2 && o !== 4 && v(d, d, w);
    for (let o = 0; o < 16; o++)
      g[o] = d[o];
  }
  function R(g, w) {
    const d = new Uint8Array(32), o = new Float64Array(80), p = i(), L = i(), U = i(), $ = i(), F = i(), q = i();
    for (let V = 0; V < 31; V++)
      d[V] = g[V];
    d[31] = g[31] & 127 | 64, d[0] &= 248, f(o, w);
    for (let V = 0; V < 16; V++)
      L[V] = o[V];
    p[0] = $[0] = 1;
    for (let V = 254; V >= 0; --V) {
      const z = d[V >>> 3] >>> (V & 7) & 1;
      a(p, L, z), a(U, $, z), h(F, p, U), b(p, p, U), h(U, L, $), b(L, L, $), _($, F), _(q, p), v(p, U, p), v(U, L, F), h(F, p, U), b(p, p, U), _(L, p), b(U, $, q), v(p, U, s), h(p, p, $), v(U, U, p), v(p, $, q), v($, L, o), _(L, F), a(p, L, z), a(U, $, z);
    }
    for (let V = 0; V < 16; V++)
      o[V + 16] = p[V], o[V + 32] = U[V], o[V + 48] = L[V], o[V + 64] = $[V];
    const E = o.subarray(32), C = o.subarray(16);
    O(E, E), v(C, C, E);
    const G = new Uint8Array(32);
    return l(G, C), G;
  }
  e.scalarMult = R;
  function N(g) {
    return R(g, n);
  }
  e.scalarMultBase = N;
  function B(g) {
    if (g.length !== e.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${e.SECRET_KEY_LENGTH} bytes`);
    const w = new Uint8Array(g);
    return {
      publicKey: N(w),
      secretKey: w
    };
  }
  e.generateKeyPairFromSeed = B;
  function S(g) {
    const w = (0, t.randomBytes)(32, g), d = B(w);
    return (0, r.wipe)(w), d;
  }
  e.generateKeyPair = S;
  function x(g, w, d = !1) {
    if (g.length !== e.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (w.length !== e.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const o = R(g, w);
    if (d) {
      let p = 0;
      for (let L = 0; L < o.length; L++)
        p |= o[L];
      if (p === 0)
        throw new Error("X25519: invalid shared key");
    }
    return o;
  }
  e.sharedKey = x;
})(Ns);
var oa = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var i = 0, n = t.length, s; i < n; i++)
      (s || !(i in t)) && (s || (s = Array.prototype.slice.call(t, 0, i)), s[i] = t[i]);
  return e.concat(s || Array.prototype.slice.call(t));
}, op = (
  /** @class */
  function() {
    function e(t, r, i) {
      this.name = t, this.version = r, this.os = i, this.type = "browser";
    }
    return e;
  }()
), ap = (
  /** @class */
  function() {
    function e(t) {
      this.version = t, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return e;
  }()
), cp = (
  /** @class */
  function() {
    function e(t, r, i, n) {
      this.name = t, this.version = r, this.os = i, this.bot = n, this.type = "bot-device";
    }
    return e;
  }()
), up = (
  /** @class */
  function() {
    function e() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return e;
  }()
), lp = (
  /** @class */
  function() {
    function e() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return e;
  }()
), fp = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, hp = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, aa = 3, dp = [
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
  ["searchbot", fp]
], ca = [
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
function pp(e) {
  return e ? ua(e) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new lp() : typeof navigator < "u" ? ua(navigator.userAgent) : bp();
}
function gp(e) {
  return e !== "" && dp.reduce(function(t, r) {
    var i = r[0], n = r[1];
    if (t)
      return t;
    var s = n.exec(e);
    return !!s && [i, s];
  }, !1);
}
function ua(e) {
  var t = gp(e);
  if (!t)
    return null;
  var r = t[0], i = t[1];
  if (r === "searchbot")
    return new up();
  var n = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
  n ? n.length < aa && (n = oa(oa([], n, !0), vp(aa - n.length), !0)) : n = [];
  var s = n.join("."), u = yp(e), a = hp.exec(e);
  return a && a[1] ? new cp(r, s, u, a[1]) : new op(r, s, u);
}
function yp(e) {
  for (var t = 0, r = ca.length; t < r; t++) {
    var i = ca[t], n = i[0], s = i[1], u = s.exec(e);
    if (u)
      return n;
  }
  return null;
}
function bp() {
  var e = typeof process < "u" && process.version;
  return e ? new ap(process.version.slice(1)) : null;
}
function vp(e) {
  for (var t = [], r = 0; r < e; r++)
    t.push("0");
  return t;
}
var $e = {};
Object.defineProperty($e, "__esModule", { value: !0 });
$e.getLocalStorage = $e.getLocalStorageOrThrow = $e.getCrypto = $e.getCryptoOrThrow = ru = $e.getLocation = $e.getLocationOrThrow = Ls = $e.getNavigator = $e.getNavigatorOrThrow = tu = $e.getDocument = $e.getDocumentOrThrow = $e.getFromWindowOrThrow = $e.getFromWindow = void 0;
function $r(e) {
  let t;
  return typeof window < "u" && typeof window[e] < "u" && (t = window[e]), t;
}
$e.getFromWindow = $r;
function Qr(e) {
  const t = $r(e);
  if (!t)
    throw new Error(`${e} is not defined in Window`);
  return t;
}
$e.getFromWindowOrThrow = Qr;
function mp() {
  return Qr("document");
}
$e.getDocumentOrThrow = mp;
function _p() {
  return $r("document");
}
var tu = $e.getDocument = _p;
function wp() {
  return Qr("navigator");
}
$e.getNavigatorOrThrow = wp;
function Ep() {
  return $r("navigator");
}
var Ls = $e.getNavigator = Ep;
function Sp() {
  return Qr("location");
}
$e.getLocationOrThrow = Sp;
function Dp() {
  return $r("location");
}
var ru = $e.getLocation = Dp;
function Op() {
  return Qr("crypto");
}
$e.getCryptoOrThrow = Op;
function xp() {
  return $r("crypto");
}
$e.getCrypto = xp;
function Ip() {
  return Qr("localStorage");
}
$e.getLocalStorageOrThrow = Ip;
function Rp() {
  return $r("localStorage");
}
$e.getLocalStorage = Rp;
var Us = {};
Object.defineProperty(Us, "__esModule", { value: !0 });
var iu = Us.getWindowMetadata = void 0;
const la = $e;
function Ap() {
  let e, t;
  try {
    e = la.getDocumentOrThrow(), t = la.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const b = e.getElementsByTagName("link"), v = [];
    for (let _ = 0; _ < b.length; _++) {
      const O = b[_], R = O.getAttribute("rel");
      if (R && R.toLowerCase().indexOf("icon") > -1) {
        const N = O.getAttribute("href");
        if (N)
          if (N.toLowerCase().indexOf("https:") === -1 && N.toLowerCase().indexOf("http:") === -1 && N.indexOf("//") !== 0) {
            let B = t.protocol + "//" + t.host;
            if (N.indexOf("/") === 0)
              B += N;
            else {
              const S = t.pathname.split("/");
              S.pop();
              const x = S.join("/");
              B += x + "/" + N;
            }
            v.push(B);
          } else if (N.indexOf("//") === 0) {
            const B = t.protocol + N;
            v.push(B);
          } else
            v.push(N);
      }
    }
    return v;
  }
  function i(...b) {
    const v = e.getElementsByTagName("meta");
    for (let _ = 0; _ < v.length; _++) {
      const O = v[_], R = ["itemprop", "property", "name"].map((N) => O.getAttribute(N)).filter((N) => N ? b.includes(N) : !1);
      if (R.length && R) {
        const N = O.getAttribute("content");
        if (N)
          return N;
      }
    }
    return "";
  }
  function n() {
    let b = i("name", "og:site_name", "og:title", "twitter:title");
    return b || (b = e.title), b;
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
iu = Us.getWindowMetadata = Ap;
var Ii = {}, Cp = (e) => encodeURIComponent(e).replace(/[!'()*]/g, (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`), nu = "%[a-f0-9]{2}", fa = new RegExp("(" + nu + ")|([^%]+?)", "gi"), ha = new RegExp("(" + nu + ")+", "gi");
function cs(e, t) {
  try {
    return [decodeURIComponent(e.join(""))];
  } catch {
  }
  if (e.length === 1)
    return e;
  t = t || 1;
  var r = e.slice(0, t), i = e.slice(t);
  return Array.prototype.concat.call([], cs(r), cs(i));
}
function Tp(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    for (var t = e.match(fa) || [], r = 1; r < t.length; r++)
      e = cs(t, r).join(""), t = e.match(fa) || [];
    return e;
  }
}
function Pp(e) {
  for (var t = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = ha.exec(e); r; ) {
    try {
      t[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var i = Tp(r[0]);
      i !== r[0] && (t[r[0]] = i);
    }
    r = ha.exec(e);
  }
  t["%C2"] = "�";
  for (var n = Object.keys(t), s = 0; s < n.length; s++) {
    var u = n[s];
    e = e.replace(new RegExp(u, "g"), t[u]);
  }
  return e;
}
var Np = function(e) {
  if (typeof e != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
  try {
    return e = e.replace(/\+/g, " "), decodeURIComponent(e);
  } catch {
    return Pp(e);
  }
}, Lp = (e, t) => {
  if (!(typeof e == "string" && typeof t == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (t === "")
    return [e];
  const r = e.indexOf(t);
  return r === -1 ? [e] : [
    e.slice(0, r),
    e.slice(r + t.length)
  ];
}, Up = function(e, t) {
  for (var r = {}, i = Object.keys(e), n = Array.isArray(t), s = 0; s < i.length; s++) {
    var u = i[s], a = e[u];
    (n ? t.indexOf(u) !== -1 : t(u, a, e)) && (r[u] = a);
  }
  return r;
};
(function(e) {
  const t = Cp, r = Np, i = Lp, n = Up, s = (S) => S == null, u = Symbol("encodeFragmentIdentifier");
  function a(S) {
    switch (S.arrayFormat) {
      case "index":
        return (x) => (g, w) => {
          const d = g.length;
          return w === void 0 || S.skipNull && w === null || S.skipEmptyString && w === "" ? g : w === null ? [...g, [h(x, S), "[", d, "]"].join("")] : [
            ...g,
            [h(x, S), "[", h(d, S), "]=", h(w, S)].join("")
          ];
        };
      case "bracket":
        return (x) => (g, w) => w === void 0 || S.skipNull && w === null || S.skipEmptyString && w === "" ? g : w === null ? [...g, [h(x, S), "[]"].join("")] : [...g, [h(x, S), "[]=", h(w, S)].join("")];
      case "colon-list-separator":
        return (x) => (g, w) => w === void 0 || S.skipNull && w === null || S.skipEmptyString && w === "" ? g : w === null ? [...g, [h(x, S), ":list="].join("")] : [...g, [h(x, S), ":list=", h(w, S)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const x = S.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (g) => (w, d) => d === void 0 || S.skipNull && d === null || S.skipEmptyString && d === "" ? w : (d = d === null ? "" : d, w.length === 0 ? [[h(g, S), x, h(d, S)].join("")] : [[w, h(d, S)].join(S.arrayFormatSeparator)]);
      }
      default:
        return (x) => (g, w) => w === void 0 || S.skipNull && w === null || S.skipEmptyString && w === "" ? g : w === null ? [...g, h(x, S)] : [...g, [h(x, S), "=", h(w, S)].join("")];
    }
  }
  function l(S) {
    let x;
    switch (S.arrayFormat) {
      case "index":
        return (g, w, d) => {
          if (x = /\[(\d*)\]$/.exec(g), g = g.replace(/\[\d*\]$/, ""), !x) {
            d[g] = w;
            return;
          }
          d[g] === void 0 && (d[g] = {}), d[g][x[1]] = w;
        };
      case "bracket":
        return (g, w, d) => {
          if (x = /(\[\])$/.exec(g), g = g.replace(/\[\]$/, ""), !x) {
            d[g] = w;
            return;
          }
          if (d[g] === void 0) {
            d[g] = [w];
            return;
          }
          d[g] = [].concat(d[g], w);
        };
      case "colon-list-separator":
        return (g, w, d) => {
          if (x = /(:list)$/.exec(g), g = g.replace(/:list$/, ""), !x) {
            d[g] = w;
            return;
          }
          if (d[g] === void 0) {
            d[g] = [w];
            return;
          }
          d[g] = [].concat(d[g], w);
        };
      case "comma":
      case "separator":
        return (g, w, d) => {
          const o = typeof w == "string" && w.includes(S.arrayFormatSeparator), p = typeof w == "string" && !o && b(w, S).includes(S.arrayFormatSeparator);
          w = p ? b(w, S) : w;
          const L = o || p ? w.split(S.arrayFormatSeparator).map((U) => b(U, S)) : w === null ? w : b(w, S);
          d[g] = L;
        };
      case "bracket-separator":
        return (g, w, d) => {
          const o = /(\[\])$/.test(g);
          if (g = g.replace(/\[\]$/, ""), !o) {
            d[g] = w && b(w, S);
            return;
          }
          const p = w === null ? [] : w.split(S.arrayFormatSeparator).map((L) => b(L, S));
          if (d[g] === void 0) {
            d[g] = p;
            return;
          }
          d[g] = [].concat(d[g], p);
        };
      default:
        return (g, w, d) => {
          if (d[g] === void 0) {
            d[g] = w;
            return;
          }
          d[g] = [].concat(d[g], w);
        };
    }
  }
  function f(S) {
    if (typeof S != "string" || S.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function h(S, x) {
    return x.encode ? x.strict ? t(S) : encodeURIComponent(S) : S;
  }
  function b(S, x) {
    return x.decode ? r(S) : S;
  }
  function v(S) {
    return Array.isArray(S) ? S.sort() : typeof S == "object" ? v(Object.keys(S)).sort((x, g) => Number(x) - Number(g)).map((x) => S[x]) : S;
  }
  function _(S) {
    const x = S.indexOf("#");
    return x !== -1 && (S = S.slice(0, x)), S;
  }
  function O(S) {
    let x = "";
    const g = S.indexOf("#");
    return g !== -1 && (x = S.slice(g)), x;
  }
  function R(S) {
    S = _(S);
    const x = S.indexOf("?");
    return x === -1 ? "" : S.slice(x + 1);
  }
  function N(S, x) {
    return x.parseNumbers && !Number.isNaN(Number(S)) && typeof S == "string" && S.trim() !== "" ? S = Number(S) : x.parseBooleans && S !== null && (S.toLowerCase() === "true" || S.toLowerCase() === "false") && (S = S.toLowerCase() === "true"), S;
  }
  function B(S, x) {
    x = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, x), f(x.arrayFormatSeparator);
    const g = l(x), w = /* @__PURE__ */ Object.create(null);
    if (typeof S != "string" || (S = S.trim().replace(/^[?#&]/, ""), !S))
      return w;
    for (const d of S.split("&")) {
      if (d === "")
        continue;
      let [o, p] = i(x.decode ? d.replace(/\+/g, " ") : d, "=");
      p = p === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(x.arrayFormat) ? p : b(p, x), g(b(o, x), p, w);
    }
    for (const d of Object.keys(w)) {
      const o = w[d];
      if (typeof o == "object" && o !== null)
        for (const p of Object.keys(o))
          o[p] = N(o[p], x);
      else
        w[d] = N(o, x);
    }
    return x.sort === !1 ? w : (x.sort === !0 ? Object.keys(w).sort() : Object.keys(w).sort(x.sort)).reduce((d, o) => {
      const p = w[o];
      return p && typeof p == "object" && !Array.isArray(p) ? d[o] = v(p) : d[o] = p, d;
    }, /* @__PURE__ */ Object.create(null));
  }
  e.extract = R, e.parse = B, e.stringify = (S, x) => {
    if (!S)
      return "";
    x = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, x), f(x.arrayFormatSeparator);
    const g = (p) => x.skipNull && s(S[p]) || x.skipEmptyString && S[p] === "", w = a(x), d = {};
    for (const p of Object.keys(S))
      g(p) || (d[p] = S[p]);
    const o = Object.keys(d);
    return x.sort !== !1 && o.sort(x.sort), o.map((p) => {
      const L = S[p];
      return L === void 0 ? "" : L === null ? h(p, x) : Array.isArray(L) ? L.length === 0 && x.arrayFormat === "bracket-separator" ? h(p, x) + "[]" : L.reduce(w(p), []).join("&") : h(p, x) + "=" + h(L, x);
    }).filter((p) => p.length > 0).join("&");
  }, e.parseUrl = (S, x) => {
    x = Object.assign({
      decode: !0
    }, x);
    const [g, w] = i(S, "#");
    return Object.assign(
      {
        url: g.split("?")[0] || "",
        query: B(R(S), x)
      },
      x && x.parseFragmentIdentifier && w ? { fragmentIdentifier: b(w, x) } : {}
    );
  }, e.stringifyUrl = (S, x) => {
    x = Object.assign({
      encode: !0,
      strict: !0,
      [u]: !0
    }, x);
    const g = _(S.url).split("?")[0] || "", w = e.extract(S.url), d = e.parse(w, { sort: !1 }), o = Object.assign(d, S.query);
    let p = e.stringify(o, x);
    p && (p = `?${p}`);
    let L = O(S.url);
    return S.fragmentIdentifier && (L = `#${x[u] ? h(S.fragmentIdentifier, x) : S.fragmentIdentifier}`), `${g}${p}${L}`;
  }, e.pick = (S, x, g) => {
    g = Object.assign({
      parseFragmentIdentifier: !0,
      [u]: !1
    }, g);
    const { url: w, query: d, fragmentIdentifier: o } = e.parseUrl(S, g);
    return e.stringifyUrl({
      url: w,
      query: n(d, x),
      fragmentIdentifier: o
    }, g);
  }, e.exclude = (S, x, g) => {
    const w = Array.isArray(x) ? (d) => !x.includes(d) : (d, o) => !x(d, o);
    return e.pick(S, w, g);
  };
})(Ii);
const $p = {
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
function su(e, t) {
  return e.includes(":") ? [e] : t.chains || [];
}
const ou = "base10", xt = "base16", us = "base64pad", $s = "utf8", au = 0, Fr = 1, Fp = 0, da = 1, ls = 12, Fs = 32;
function Mp() {
  const e = Ns.generateKeyPair();
  return { privateKey: It(e.secretKey, xt), publicKey: It(e.publicKey, xt) };
}
function fs() {
  const e = Xr.randomBytes(Fs);
  return It(e, xt);
}
function jp(e, t) {
  const r = Ns.sharedKey(At(e, xt), At(t, xt)), i = new sp(gn.SHA256, r).expand(Fs);
  return It(i, xt);
}
function Bp(e) {
  const t = gn.hash(At(e, xt));
  return It(t, xt);
}
function kr(e) {
  const t = gn.hash(At(e, $s));
  return It(t, xt);
}
function qp(e) {
  return At(`${e}`, ou);
}
function Pi(e) {
  return Number(It(e, ou));
}
function zp(e) {
  const t = qp(typeof e.type < "u" ? e.type : au);
  if (Pi(t) === Fr && typeof e.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof e.senderPublicKey < "u" ? At(e.senderPublicKey, xt) : void 0, i = typeof e.iv < "u" ? At(e.iv, xt) : Xr.randomBytes(ls), n = new Ts.ChaCha20Poly1305(At(e.symKey, xt)).seal(i, At(e.message, $s));
  return Kp({ type: t, sealed: n, iv: i, senderPublicKey: r });
}
function Vp(e) {
  const t = new Ts.ChaCha20Poly1305(At(e.symKey, xt)), { sealed: r, iv: i } = Zi(e.encoded), n = t.open(i, r);
  if (n === null)
    throw new Error("Failed to decrypt");
  return It(n, $s);
}
function Kp(e) {
  if (Pi(e.type) === Fr) {
    if (typeof e.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return It(os([e.type, e.senderPublicKey, e.iv, e.sealed]), us);
  }
  return It(os([e.type, e.iv, e.sealed]), us);
}
function Zi(e) {
  const t = At(e, us), r = t.slice(Fp, da), i = da;
  if (Pi(r) === Fr) {
    const a = i + Fs, l = a + ls, f = t.slice(i, a), h = t.slice(a, l), b = t.slice(l);
    return { type: r, sealed: b, iv: h, senderPublicKey: f };
  }
  const n = i + ls, s = t.slice(i, n), u = t.slice(n);
  return { type: r, sealed: u, iv: s };
}
function kp(e, t) {
  const r = Zi(e);
  return cu({ type: Pi(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? It(r.senderPublicKey, xt) : void 0, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey });
}
function cu(e) {
  const t = (e == null ? void 0 : e.type) || au;
  if (t === Fr) {
    if (typeof (e == null ? void 0 : e.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (e == null ? void 0 : e.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: t, senderPublicKey: e == null ? void 0 : e.senderPublicKey, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey };
}
function pa(e) {
  return e.type === Fr && typeof e.senderPublicKey == "string" && typeof e.receiverPublicKey == "string";
}
var Wp = Object.defineProperty, ga = Object.getOwnPropertySymbols, Hp = Object.prototype.hasOwnProperty, Gp = Object.prototype.propertyIsEnumerable, ya = (e, t, r) => t in e ? Wp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, ba = (e, t) => {
  for (var r in t || (t = {}))
    Hp.call(t, r) && ya(e, r, t[r]);
  if (ga)
    for (var r of ga(t))
      Gp.call(t, r) && ya(e, r, t[r]);
  return e;
};
const Yp = "ReactNative", br = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, Jp = "js";
function Ms() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function uu() {
  return !tu() && !!Ls() && navigator.product === Yp;
}
function js() {
  return !Ms() && !!Ls();
}
function Bs() {
  return uu() ? br.reactNative : Ms() ? br.node : js() ? br.browser : br.unknown;
}
function Xp(e, t) {
  let r = Ii.parse(e);
  return r = ba(ba({}, r), t), e = Ii.stringify(r), e;
}
function Qp() {
  return iu() || { name: "", description: "", url: "", icons: [""] };
}
function Zp() {
  if (Bs() === br.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: i } = global.Platform;
    return [r, i].join("-");
  }
  const e = pp();
  if (e === null)
    return "unknown";
  const t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
  return e.type === "browser" ? [t, e.name, e.version].join("-") : [t, e.version].join("-");
}
function eg() {
  var e;
  const t = Bs();
  return t === br.browser ? [t, ((e = ru()) == null ? void 0 : e.host) || "unknown"].join(":") : t;
}
function tg(e, t, r) {
  const i = Zp(), n = eg();
  return [[e, t].join("-"), [Jp, r].join("-"), i, n].join("/");
}
function rg({ protocol: e, version: t, relayUrl: r, sdkVersion: i, auth: n, projectId: s, useOnCloseEvent: u }) {
  const a = r.split("?"), l = tg(e, t, i), f = { auth: n, ua: l, projectId: s, useOnCloseEvent: u || void 0 }, h = Xp(a[1] || "", f);
  return a[0] + "?" + h;
}
function Pr(e, t) {
  return e.filter((r) => t.includes(r)).length === e.length;
}
function lu(e) {
  return Object.fromEntries(e.entries());
}
function fu(e) {
  return new Map(Object.entries(e));
}
function zr(e = te.FIVE_MINUTES, t) {
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
function en(e, t, r) {
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
function hu(e, t) {
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
function ig(e) {
  return hu("topic", e);
}
function ng(e) {
  return hu("id", e);
}
function du(e) {
  const [t, r] = e.split(":"), i = { id: void 0, topic: void 0 };
  if (t === "topic" && typeof r == "string")
    i.topic = r;
  else if (t === "id" && Number.isInteger(Number(r)))
    i.id = Number(r);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);
  return i;
}
function Ht(e, t) {
  return te.fromMiliseconds((t || Date.now()) + te.toMiliseconds(e));
}
function yr(e) {
  return Date.now() >= te.toMiliseconds(e);
}
function st(e, t) {
  return `${e}${t ? `:${t}` : ""}`;
}
async function sg({ id: e, topic: t, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const i = typeof r == "string" ? JSON.parse(r) : r;
    let n = i == null ? void 0 : i.href;
    if (typeof n != "string")
      return;
    n.endsWith("/") && (n = n.slice(0, -1));
    const s = `${n}/wc?requestId=${e}&sessionTopic=${t}`, u = Bs();
    u === br.browser ? s.startsWith("https://") ? window.open(s, "_blank", "noreferrer noopener") : window.open(s, "_self", "noreferrer noopener") : u === br.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(s);
  } catch (i) {
    console.error(i);
  }
}
const og = "irn";
function hs(e) {
  return (e == null ? void 0 : e.relay) || { protocol: og };
}
function Gi(e) {
  const t = $p[e];
  if (typeof t > "u")
    throw new Error(`Relay Protocol not supported: ${e}`);
  return t;
}
var ag = Object.defineProperty, va = Object.getOwnPropertySymbols, cg = Object.prototype.hasOwnProperty, ug = Object.prototype.propertyIsEnumerable, ma = (e, t, r) => t in e ? ag(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, lg = (e, t) => {
  for (var r in t || (t = {}))
    cg.call(t, r) && ma(e, r, t[r]);
  if (va)
    for (var r of va(t))
      ug.call(t, r) && ma(e, r, t[r]);
  return e;
};
function fg(e, t = "-") {
  const r = {}, i = "relay" + t;
  return Object.keys(e).forEach((n) => {
    if (n.startsWith(i)) {
      const s = n.replace(i, ""), u = e[n];
      r[s] = u;
    }
  }), r;
}
function hg(e) {
  const t = e.indexOf(":"), r = e.indexOf("?") !== -1 ? e.indexOf("?") : void 0, i = e.substring(0, t), n = e.substring(t + 1, r).split("@"), s = typeof r < "u" ? e.substring(r) : "", u = Ii.parse(s);
  return { protocol: i, topic: dg(n[0]), version: parseInt(n[1], 10), symKey: u.symKey, relay: fg(u) };
}
function dg(e) {
  return e.startsWith("//") ? e.substring(2) : e;
}
function pg(e, t = "-") {
  const r = "relay", i = {};
  return Object.keys(e).forEach((n) => {
    const s = r + t + n;
    e[n] && (i[s] = e[n]);
  }), i;
}
function gg(e) {
  return `${e.protocol}:${e.topic}@${e.version}?` + Ii.stringify(lg({ symKey: e.symKey }, pg(e.relay)));
}
function Zr(e) {
  const t = [];
  return e.forEach((r) => {
    const [i, n] = r.split(":");
    t.push(`${i}:${n}`);
  }), t;
}
function yg(e) {
  const t = [];
  return Object.values(e).forEach((r) => {
    t.push(...Zr(r.accounts));
  }), t;
}
function bg(e, t) {
  const r = [];
  return Object.values(e).forEach((i) => {
    Zr(i.accounts).includes(t) && r.push(...i.methods);
  }), r;
}
function vg(e, t) {
  const r = [];
  return Object.values(e).forEach((i) => {
    Zr(i.accounts).includes(t) && r.push(...i.events);
  }), r;
}
function mg(e, t) {
  const r = Yi(e, t);
  if (r)
    throw new Error(r.message);
  const i = {};
  for (const [n, s] of Object.entries(e))
    i[n] = { methods: s.methods, events: s.events, chains: s.accounts.map((u) => `${u.split(":")[0]}:${u.split(":")[1]}`) };
  return i;
}
const _g = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, wg = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function X(e, t) {
  const { message: r, code: i } = wg[e];
  return { message: t ? `${r} ${t}` : r, code: i };
}
function ut(e, t) {
  const { message: r, code: i } = _g[e];
  return { message: t ? `${r} ${t}` : r, code: i };
}
function Ni(e, t) {
  return Array.isArray(e) ? typeof t < "u" && e.length ? e.every(t) : !0 : !1;
}
function Di(e) {
  return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
}
function Ot(e) {
  return typeof e > "u";
}
function lt(e, t) {
  return t && Ot(e) ? !0 : typeof e == "string" && !!e.trim().length;
}
function qs(e, t) {
  return t && Ot(e) ? !0 : typeof e == "number" && !isNaN(e);
}
function Eg(e, t) {
  const { requiredNamespaces: r } = t, i = Object.keys(e.namespaces), n = Object.keys(r);
  let s = !0;
  return Pr(n, i) ? (i.forEach((u) => {
    const { accounts: a, methods: l, events: f } = e.namespaces[u], h = Zr(a), b = r[u];
    (!Pr(su(u, b), h) || !Pr(b.methods, l) || !Pr(b.events, f)) && (s = !1);
  }), s) : !1;
}
function tn(e) {
  return lt(e, !1) && e.includes(":") ? e.split(":").length === 2 : !1;
}
function Sg(e) {
  if (lt(e, !1) && e.includes(":")) {
    const t = e.split(":");
    if (t.length === 3) {
      const r = t[0] + ":" + t[1];
      return !!t[2] && tn(r);
    }
  }
  return !1;
}
function Dg(e) {
  if (lt(e, !1))
    try {
      return typeof new URL(e) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function Og(e) {
  var t;
  return (t = e == null ? void 0 : e.proposer) == null ? void 0 : t.publicKey;
}
function xg(e) {
  return e == null ? void 0 : e.topic;
}
function Ig(e, t) {
  let r = null;
  return lt(e == null ? void 0 : e.publicKey, !1) || (r = X("MISSING_OR_INVALID", `${t} controller public key should be a string`)), r;
}
function _a(e) {
  let t = !0;
  return Ni(e) ? e.length && (t = e.every((r) => lt(r, !1))) : t = !1, t;
}
function Rg(e, t, r) {
  let i = null;
  return Ni(t) && t.length ? t.forEach((n) => {
    i || tn(n) || (i = ut("UNSUPPORTED_CHAINS", `${r}, chain ${n} should be a string and conform to "namespace:chainId" format`));
  }) : tn(e) || (i = ut("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), i;
}
function Ag(e, t, r) {
  let i = null;
  return Object.entries(e).forEach(([n, s]) => {
    if (i)
      return;
    const u = Rg(n, su(n, s), `${t} ${r}`);
    u && (i = u);
  }), i;
}
function Cg(e, t) {
  let r = null;
  return Ni(e) ? e.forEach((i) => {
    r || Sg(i) || (r = ut("UNSUPPORTED_ACCOUNTS", `${t}, account ${i} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = ut("UNSUPPORTED_ACCOUNTS", `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function Tg(e, t) {
  let r = null;
  return Object.values(e).forEach((i) => {
    if (r)
      return;
    const n = Cg(i == null ? void 0 : i.accounts, `${t} namespace`);
    n && (r = n);
  }), r;
}
function Pg(e, t) {
  let r = null;
  return _a(e == null ? void 0 : e.methods) ? _a(e == null ? void 0 : e.events) || (r = ut("UNSUPPORTED_EVENTS", `${t}, events should be an array of strings or empty array for no events`)) : r = ut("UNSUPPORTED_METHODS", `${t}, methods should be an array of strings or empty array for no methods`), r;
}
function pu(e, t) {
  let r = null;
  return Object.values(e).forEach((i) => {
    if (r)
      return;
    const n = Pg(i, `${t}, namespace`);
    n && (r = n);
  }), r;
}
function Ng(e, t, r) {
  let i = null;
  if (e && Di(e)) {
    const n = pu(e, t);
    n && (i = n);
    const s = Ag(e, t, r);
    s && (i = s);
  } else
    i = X("MISSING_OR_INVALID", `${t}, ${r} should be an object with data`);
  return i;
}
function Yi(e, t) {
  let r = null;
  if (e && Di(e)) {
    const i = pu(e, t);
    i && (r = i);
    const n = Tg(e, t);
    n && (r = n);
  } else
    r = X("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
  return r;
}
function gu(e) {
  return lt(e.protocol, !0);
}
function Lg(e, t) {
  let r = !1;
  return t && !e ? r = !0 : e && Ni(e) && e.length && e.forEach((i) => {
    r = gu(i);
  }), r;
}
function Ug(e) {
  return typeof e == "number";
}
function Rt(e) {
  return typeof e < "u" && typeof e !== null;
}
function $g(e) {
  return !(!e || typeof e != "object" || !e.code || !qs(e.code, !1) || !e.message || !lt(e.message, !1));
}
function Fg(e) {
  return !(Ot(e) || !lt(e.method, !1));
}
function Mg(e) {
  return !(Ot(e) || Ot(e.result) && Ot(e.error) || !qs(e.id, !1) || !lt(e.jsonrpc, !1));
}
function jg(e) {
  return !(Ot(e) || !lt(e.name, !1));
}
function wa(e, t) {
  return !(!tn(t) || !yg(e).includes(t));
}
function Bg(e, t, r) {
  return lt(r, !1) ? bg(e, t).includes(r) : !1;
}
function qg(e, t, r) {
  return lt(r, !1) ? vg(e, t).includes(r) : !1;
}
function Ea(e, t, r) {
  let i = null;
  const n = zg(e), s = Vg(t), u = Object.keys(n), a = Object.keys(s), l = Sa(Object.keys(e)), f = Sa(Object.keys(t)), h = l.filter((b) => !f.includes(b));
  return h.length && (i = X("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${h.toString()}
      Received: ${Object.keys(t).toString()}`)), Pr(u, a) || (i = X("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${u.toString()}
      Approved: ${a.toString()}`)), Object.keys(t).forEach((b) => {
    if (!b.includes(":") || i)
      return;
    const v = Zr(t[b].accounts);
    v.includes(b) || (i = X("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${b}
        Required: ${b}
        Approved: ${v.toString()}`));
  }), u.forEach((b) => {
    i || (Pr(n[b].methods, s[b].methods) ? Pr(n[b].events, s[b].events) || (i = X("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${b}`)) : i = X("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${b}`));
  }), i;
}
function zg(e) {
  const t = {};
  return Object.keys(e).forEach((r) => {
    var i;
    r.includes(":") ? t[r] = e[r] : (i = e[r].chains) == null || i.forEach((n) => {
      t[n] = { methods: e[r].methods, events: e[r].events };
    });
  }), t;
}
function Sa(e) {
  return [...new Set(e.map((t) => t.includes(":") ? t.split(":")[0] : t))];
}
function Vg(e) {
  const t = {};
  return Object.keys(e).forEach((r) => {
    if (r.includes(":"))
      t[r] = e[r];
    else {
      const i = Zr(e[r].accounts);
      i == null || i.forEach((n) => {
        t[n] = { accounts: e[r].accounts.filter((s) => s.includes(`${n}:`)), methods: e[r].methods, events: e[r].events };
      });
    }
  }), t;
}
function Kg(e, t) {
  return qs(e, !1) && e <= t.max && e >= t.min;
}
const kg = "PARSE_ERROR", Wg = "INVALID_REQUEST", Hg = "METHOD_NOT_FOUND", Gg = "INVALID_PARAMS", yu = "INTERNAL_ERROR", zs = "SERVER_ERROR", Yg = [-32700, -32600, -32601, -32602, -32603], Oi = {
  [kg]: { code: -32700, message: "Parse error" },
  [Wg]: { code: -32600, message: "Invalid Request" },
  [Hg]: { code: -32601, message: "Method not found" },
  [Gg]: { code: -32602, message: "Invalid params" },
  [yu]: { code: -32603, message: "Internal error" },
  [zs]: { code: -32e3, message: "Server error" }
}, bu = zs;
function Jg(e) {
  return Yg.includes(e);
}
function Da(e) {
  return Object.keys(Oi).includes(e) ? Oi[e] : Oi[bu];
}
function Xg(e) {
  const t = Object.values(Oi).find((r) => r.code === e);
  return t || Oi[bu];
}
function Qg(e, t, r) {
  return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${t}`) : e;
}
var vu = {}, ar = {}, Oa;
function Zg() {
  if (Oa)
    return ar;
  Oa = 1, Object.defineProperty(ar, "__esModule", { value: !0 }), ar.isBrowserCryptoAvailable = ar.getSubtleCrypto = ar.getBrowerCrypto = void 0;
  function e() {
    return (Nt == null ? void 0 : Nt.crypto) || (Nt == null ? void 0 : Nt.msCrypto) || {};
  }
  ar.getBrowerCrypto = e;
  function t() {
    const i = e();
    return i.subtle || i.webkitSubtle;
  }
  ar.getSubtleCrypto = t;
  function r() {
    return !!e() && !!t();
  }
  return ar.isBrowserCryptoAvailable = r, ar;
}
var cr = {}, xa;
function ey() {
  if (xa)
    return cr;
  xa = 1, Object.defineProperty(cr, "__esModule", { value: !0 }), cr.isBrowser = cr.isNode = cr.isReactNative = void 0;
  function e() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  cr.isReactNative = e;
  function t() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  cr.isNode = t;
  function r() {
    return !e() && !t();
  }
  return cr.isBrowser = r, cr;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = Kt;
  t.__exportStar(Zg(), e), t.__exportStar(ey(), e);
})(vu);
function mu(e = 3) {
  const t = Date.now() * Math.pow(10, e), r = Math.floor(Math.random() * Math.pow(10, e));
  return t + r;
}
function Vs(e = 6) {
  return BigInt(mu(e));
}
function yn(e, t, r) {
  return {
    id: r || mu(),
    jsonrpc: "2.0",
    method: e,
    params: t
  };
}
function Ks(e, t) {
  return {
    id: e,
    jsonrpc: "2.0",
    result: t
  };
}
function ks(e, t, r) {
  return {
    id: e,
    jsonrpc: "2.0",
    error: ty(t, r)
  };
}
function ty(e, t) {
  return typeof e > "u" ? Da(yu) : (typeof e == "string" && (e = Object.assign(Object.assign({}, Da(zs)), { message: e })), typeof t < "u" && (e.data = t), Jg(e.code) && (e = Xg(e.code)), e);
}
class ry {
}
class iy extends ry {
  constructor() {
    super();
  }
}
class ny extends iy {
  constructor(t) {
    super();
  }
}
const sy = "^wss?:";
function oy(e) {
  const t = e.match(new RegExp(/^\w+:/, "gi"));
  if (!(!t || !t.length))
    return t[0];
}
function ay(e, t) {
  const r = oy(e);
  return typeof r > "u" ? !1 : new RegExp(t).test(r);
}
function Ia(e) {
  return ay(e, sy);
}
function cy(e) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(e);
}
function _u(e) {
  return typeof e == "object" && "id" in e && "jsonrpc" in e && e.jsonrpc === "2.0";
}
function Ws(e) {
  return _u(e) && "method" in e;
}
function bn(e) {
  return _u(e) && (ur(e) || Gt(e));
}
function ur(e) {
  return "result" in e;
}
function Gt(e) {
  return "error" in e;
}
class uy extends ny {
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
    return this.requestStrict(yn(t.method, t.params || [], t.id || Vs().toString()), r);
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
        Gt(s) ? n(s.error) : i(s.result);
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
    this.events.emit("payload", t), bn(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", {
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
const ly = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), fy = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", Ra = (e) => e.split("?")[0], Aa = 10, hy = ly();
class dy {
  constructor(t) {
    if (this.url = t, this.events = new Xt.EventEmitter(), this.registering = !1, !Ia(t))
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
      this.socket.send(Rs(t));
    } catch (i) {
      this.onError(t.id, i);
    }
  }
  register(t = this.url) {
    if (!Ia(t))
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
      const n = vu.isReactNative() ? void 0 : { rejectUnauthorized: !cy(t) }, s = new hy(t, [], n);
      fy() ? s.onerror = (u) => {
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
    const r = typeof t.data == "string" ? Lc(t.data) : t.data;
    this.events.emit("payload", r);
  }
  onError(t, r) {
    const i = this.parseError(r), n = i.message || i.toString(), s = ks(t, n);
    this.events.emit("payload", s);
  }
  parseError(t, r = this.url) {
    return Qg(t, Ra(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Aa && this.events.setMaxListeners(Aa);
  }
  emitError(t) {
    const r = this.parseError(new Error((t == null ? void 0 : t.message) || `WebSocket connection failed for host: ${Ra(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var rn = { exports: {} };
rn.exports;
(function(e, t) {
  var r = 200, i = "__lodash_hash_undefined__", n = 1, s = 2, u = 9007199254740991, a = "[object Arguments]", l = "[object Array]", f = "[object AsyncFunction]", h = "[object Boolean]", b = "[object Date]", v = "[object Error]", _ = "[object Function]", O = "[object GeneratorFunction]", R = "[object Map]", N = "[object Number]", B = "[object Null]", S = "[object Object]", x = "[object Promise]", g = "[object Proxy]", w = "[object RegExp]", d = "[object Set]", o = "[object String]", p = "[object Symbol]", L = "[object Undefined]", U = "[object WeakMap]", $ = "[object ArrayBuffer]", F = "[object DataView]", q = "[object Float32Array]", E = "[object Float64Array]", C = "[object Int8Array]", G = "[object Int16Array]", V = "[object Int32Array]", z = "[object Uint8Array]", k = "[object Uint8ClampedArray]", j = "[object Uint16Array]", W = "[object Uint32Array]", oe = /[\\^$.*+?()[\]{}|]/g, H = /^\[object .+?Constructor\]$/, ie = /^(?:0|[1-9]\d*)$/, Z = {};
  Z[q] = Z[E] = Z[C] = Z[G] = Z[V] = Z[z] = Z[k] = Z[j] = Z[W] = !0, Z[a] = Z[l] = Z[$] = Z[h] = Z[F] = Z[b] = Z[v] = Z[_] = Z[R] = Z[N] = Z[S] = Z[w] = Z[d] = Z[o] = Z[U] = !1;
  var re = typeof Nt == "object" && Nt && Nt.Object === Object && Nt, P = typeof self == "object" && self && self.Object === Object && self, T = re || P || Function("return this")(), I = t && !t.nodeType && t, c = I && !0 && e && !e.nodeType && e, D = c && c.exports === I, Y = D && re.process, Q = function() {
    try {
      return Y && Y.binding && Y.binding("util");
    } catch {
    }
  }(), be = Q && Q.isTypedArray;
  function ve(y, A) {
    for (var K = -1, ee = y == null ? 0 : y.length, je = 0, fe = []; ++K < ee; ) {
      var Je = y[K];
      A(Je, K, y) && (fe[je++] = Je);
    }
    return fe;
  }
  function he(y, A) {
    for (var K = -1, ee = A.length, je = y.length; ++K < ee; )
      y[je + K] = A[K];
    return y;
  }
  function xe(y, A) {
    for (var K = -1, ee = y == null ? 0 : y.length; ++K < ee; )
      if (A(y[K], K, y))
        return !0;
    return !1;
  }
  function Be(y, A) {
    for (var K = -1, ee = Array(y); ++K < y; )
      ee[K] = A(K);
    return ee;
  }
  function Le(y) {
    return function(A) {
      return y(A);
    };
  }
  function De(y, A) {
    return y.has(A);
  }
  function we(y, A) {
    return y == null ? void 0 : y[A];
  }
  function de(y) {
    var A = -1, K = Array(y.size);
    return y.forEach(function(ee, je) {
      K[++A] = [je, ee];
    }), K;
  }
  function ge(y, A) {
    return function(K) {
      return y(A(K));
    };
  }
  function pe(y) {
    var A = -1, K = Array(y.size);
    return y.forEach(function(ee) {
      K[++A] = ee;
    }), K;
  }
  var ue = Array.prototype, ce = Function.prototype, ne = Object.prototype, ye = T["__core-js_shared__"], me = ce.toString, ae = ne.hasOwnProperty, Ee = function() {
    var y = /[^.]+$/.exec(ye && ye.keys && ye.keys.IE_PROTO || "");
    return y ? "Symbol(src)_1." + y : "";
  }(), Ie = ne.toString, Te = RegExp(
    "^" + me.call(ae).replace(oe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Pe = D ? T.Buffer : void 0, Re = T.Symbol, Tt = T.Uint8Array, Mt = ne.propertyIsEnumerable, Qt = ue.splice, ft = Re ? Re.toStringTag : void 0, Zt = Object.getOwnPropertySymbols, jt = Pe ? Pe.isBuffer : void 0, lr = ge(Object.keys, Object), qe = Mr(T, "DataView"), Fe = Mr(T, "Map"), We = Mr(T, "Promise"), Ve = Mr(T, "Set"), He = Mr(T, "WeakMap"), Me = Mr(Object, "create"), Qe = wr(qe), tt = wr(Fe), rt = wr(We), Ze = wr(Ve), it = wr(He), et = Re ? Re.prototype : void 0, Ge = et ? et.valueOf : void 0;
  function Ue(y) {
    var A = -1, K = y == null ? 0 : y.length;
    for (this.clear(); ++A < K; ) {
      var ee = y[A];
      this.set(ee[0], ee[1]);
    }
  }
  function m() {
    this.__data__ = Me ? Me(null) : {}, this.size = 0;
  }
  function M(y) {
    var A = this.has(y) && delete this.__data__[y];
    return this.size -= A ? 1 : 0, A;
  }
  function J(y) {
    var A = this.__data__;
    if (Me) {
      var K = A[y];
      return K === i ? void 0 : K;
    }
    return ae.call(A, y) ? A[y] : void 0;
  }
  function se(y) {
    var A = this.__data__;
    return Me ? A[y] !== void 0 : ae.call(A, y);
  }
  function Ae(y, A) {
    var K = this.__data__;
    return this.size += this.has(y) ? 0 : 1, K[y] = Me && A === void 0 ? i : A, this;
  }
  Ue.prototype.clear = m, Ue.prototype.delete = M, Ue.prototype.get = J, Ue.prototype.has = se, Ue.prototype.set = Ae;
  function Se(y) {
    var A = -1, K = y == null ? 0 : y.length;
    for (this.clear(); ++A < K; ) {
      var ee = y[A];
      this.set(ee[0], ee[1]);
    }
  }
  function Oe() {
    this.__data__ = [], this.size = 0;
  }
  function _e(y) {
    var A = this.__data__, K = Fi(A, y);
    if (K < 0)
      return !1;
    var ee = A.length - 1;
    return K == ee ? A.pop() : Qt.call(A, K, 1), --this.size, !0;
  }
  function ht(y) {
    var A = this.__data__, K = Fi(A, y);
    return K < 0 ? void 0 : A[K][1];
  }
  function Ke(y) {
    return Fi(this.__data__, y) > -1;
  }
  function Ye(y, A) {
    var K = this.__data__, ee = Fi(K, y);
    return ee < 0 ? (++this.size, K.push([y, A])) : K[ee][1] = A, this;
  }
  Se.prototype.clear = Oe, Se.prototype.delete = _e, Se.prototype.get = ht, Se.prototype.has = Ke, Se.prototype.set = Ye;
  function nt(y) {
    var A = -1, K = y == null ? 0 : y.length;
    for (this.clear(); ++A < K; ) {
      var ee = y[A];
      this.set(ee[0], ee[1]);
    }
  }
  function fr() {
    this.size = 0, this.__data__ = {
      hash: new Ue(),
      map: new (Fe || Se)(),
      string: new Ue()
    };
  }
  function Ui(y) {
    var A = Mi(this, y).delete(y);
    return this.size -= A ? 1 : 0, A;
  }
  function kt(y) {
    return Mi(this, y).get(y);
  }
  function Hu(y) {
    return Mi(this, y).has(y);
  }
  function Gu(y, A) {
    var K = Mi(this, y), ee = K.size;
    return K.set(y, A), this.size += K.size == ee ? 0 : 1, this;
  }
  nt.prototype.clear = fr, nt.prototype.delete = Ui, nt.prototype.get = kt, nt.prototype.has = Hu, nt.prototype.set = Gu;
  function $i(y) {
    var A = -1, K = y == null ? 0 : y.length;
    for (this.__data__ = new nt(); ++A < K; )
      this.add(y[A]);
  }
  function Yu(y) {
    return this.__data__.set(y, i), this;
  }
  function Ju(y) {
    return this.__data__.has(y);
  }
  $i.prototype.add = $i.prototype.push = Yu, $i.prototype.has = Ju;
  function hr(y) {
    var A = this.__data__ = new Se(y);
    this.size = A.size;
  }
  function Xu() {
    this.__data__ = new Se(), this.size = 0;
  }
  function Qu(y) {
    var A = this.__data__, K = A.delete(y);
    return this.size = A.size, K;
  }
  function Zu(y) {
    return this.__data__.get(y);
  }
  function el(y) {
    return this.__data__.has(y);
  }
  function tl(y, A) {
    var K = this.__data__;
    if (K instanceof Se) {
      var ee = K.__data__;
      if (!Fe || ee.length < r - 1)
        return ee.push([y, A]), this.size = ++K.size, this;
      K = this.__data__ = new nt(ee);
    }
    return K.set(y, A), this.size = K.size, this;
  }
  hr.prototype.clear = Xu, hr.prototype.delete = Qu, hr.prototype.get = Zu, hr.prototype.has = el, hr.prototype.set = tl;
  function rl(y, A) {
    var K = ji(y), ee = !K && bl(y), je = !K && !ee && _n(y), fe = !K && !ee && !je && po(y), Je = K || ee || je || fe, ot = Je ? Be(y.length, String) : [], dt = ot.length;
    for (var ke in y)
      (A || ae.call(y, ke)) && !(Je && // Safari 9 has enumerable `arguments.length` in strict mode.
      (ke == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      je && (ke == "offset" || ke == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      fe && (ke == "buffer" || ke == "byteLength" || ke == "byteOffset") || // Skip index properties.
      hl(ke, dt))) && ot.push(ke);
    return ot;
  }
  function Fi(y, A) {
    for (var K = y.length; K--; )
      if (uo(y[K][0], A))
        return K;
    return -1;
  }
  function il(y, A, K) {
    var ee = A(y);
    return ji(y) ? ee : he(ee, K(y));
  }
  function ni(y) {
    return y == null ? y === void 0 ? L : B : ft && ft in Object(y) ? ll(y) : yl(y);
  }
  function so(y) {
    return si(y) && ni(y) == a;
  }
  function oo(y, A, K, ee, je) {
    return y === A ? !0 : y == null || A == null || !si(y) && !si(A) ? y !== y && A !== A : nl(y, A, K, ee, oo, je);
  }
  function nl(y, A, K, ee, je, fe) {
    var Je = ji(y), ot = ji(A), dt = Je ? l : dr(y), ke = ot ? l : dr(A);
    dt = dt == a ? S : dt, ke = ke == a ? S : ke;
    var Pt = dt == S, Wt = ke == S, bt = dt == ke;
    if (bt && _n(y)) {
      if (!_n(A))
        return !1;
      Je = !0, Pt = !1;
    }
    if (bt && !Pt)
      return fe || (fe = new hr()), Je || po(y) ? ao(y, A, K, ee, je, fe) : cl(y, A, dt, K, ee, je, fe);
    if (!(K & n)) {
      var Bt = Pt && ae.call(y, "__wrapped__"), qt = Wt && ae.call(A, "__wrapped__");
      if (Bt || qt) {
        var pr = Bt ? y.value() : y, or = qt ? A.value() : A;
        return fe || (fe = new hr()), je(pr, or, K, ee, fe);
      }
    }
    return bt ? (fe || (fe = new hr()), ul(y, A, K, ee, je, fe)) : !1;
  }
  function sl(y) {
    if (!ho(y) || pl(y))
      return !1;
    var A = lo(y) ? Te : H;
    return A.test(wr(y));
  }
  function ol(y) {
    return si(y) && fo(y.length) && !!Z[ni(y)];
  }
  function al(y) {
    if (!gl(y))
      return lr(y);
    var A = [];
    for (var K in Object(y))
      ae.call(y, K) && K != "constructor" && A.push(K);
    return A;
  }
  function ao(y, A, K, ee, je, fe) {
    var Je = K & n, ot = y.length, dt = A.length;
    if (ot != dt && !(Je && dt > ot))
      return !1;
    var ke = fe.get(y);
    if (ke && fe.get(A))
      return ke == A;
    var Pt = -1, Wt = !0, bt = K & s ? new $i() : void 0;
    for (fe.set(y, A), fe.set(A, y); ++Pt < ot; ) {
      var Bt = y[Pt], qt = A[Pt];
      if (ee)
        var pr = Je ? ee(qt, Bt, Pt, A, y, fe) : ee(Bt, qt, Pt, y, A, fe);
      if (pr !== void 0) {
        if (pr)
          continue;
        Wt = !1;
        break;
      }
      if (bt) {
        if (!xe(A, function(or, Er) {
          if (!De(bt, Er) && (Bt === or || je(Bt, or, K, ee, fe)))
            return bt.push(Er);
        })) {
          Wt = !1;
          break;
        }
      } else if (!(Bt === qt || je(Bt, qt, K, ee, fe))) {
        Wt = !1;
        break;
      }
    }
    return fe.delete(y), fe.delete(A), Wt;
  }
  function cl(y, A, K, ee, je, fe, Je) {
    switch (K) {
      case F:
        if (y.byteLength != A.byteLength || y.byteOffset != A.byteOffset)
          return !1;
        y = y.buffer, A = A.buffer;
      case $:
        return !(y.byteLength != A.byteLength || !fe(new Tt(y), new Tt(A)));
      case h:
      case b:
      case N:
        return uo(+y, +A);
      case v:
        return y.name == A.name && y.message == A.message;
      case w:
      case o:
        return y == A + "";
      case R:
        var ot = de;
      case d:
        var dt = ee & n;
        if (ot || (ot = pe), y.size != A.size && !dt)
          return !1;
        var ke = Je.get(y);
        if (ke)
          return ke == A;
        ee |= s, Je.set(y, A);
        var Pt = ao(ot(y), ot(A), ee, je, fe, Je);
        return Je.delete(y), Pt;
      case p:
        if (Ge)
          return Ge.call(y) == Ge.call(A);
    }
    return !1;
  }
  function ul(y, A, K, ee, je, fe) {
    var Je = K & n, ot = co(y), dt = ot.length, ke = co(A), Pt = ke.length;
    if (dt != Pt && !Je)
      return !1;
    for (var Wt = dt; Wt--; ) {
      var bt = ot[Wt];
      if (!(Je ? bt in A : ae.call(A, bt)))
        return !1;
    }
    var Bt = fe.get(y);
    if (Bt && fe.get(A))
      return Bt == A;
    var qt = !0;
    fe.set(y, A), fe.set(A, y);
    for (var pr = Je; ++Wt < dt; ) {
      bt = ot[Wt];
      var or = y[bt], Er = A[bt];
      if (ee)
        var go = Je ? ee(Er, or, bt, A, y, fe) : ee(or, Er, bt, y, A, fe);
      if (!(go === void 0 ? or === Er || je(or, Er, K, ee, fe) : go)) {
        qt = !1;
        break;
      }
      pr || (pr = bt == "constructor");
    }
    if (qt && !pr) {
      var Bi = y.constructor, qi = A.constructor;
      Bi != qi && "constructor" in y && "constructor" in A && !(typeof Bi == "function" && Bi instanceof Bi && typeof qi == "function" && qi instanceof qi) && (qt = !1);
    }
    return fe.delete(y), fe.delete(A), qt;
  }
  function co(y) {
    return il(y, _l, fl);
  }
  function Mi(y, A) {
    var K = y.__data__;
    return dl(A) ? K[typeof A == "string" ? "string" : "hash"] : K.map;
  }
  function Mr(y, A) {
    var K = we(y, A);
    return sl(K) ? K : void 0;
  }
  function ll(y) {
    var A = ae.call(y, ft), K = y[ft];
    try {
      y[ft] = void 0;
      var ee = !0;
    } catch {
    }
    var je = Ie.call(y);
    return ee && (A ? y[ft] = K : delete y[ft]), je;
  }
  var fl = Zt ? function(y) {
    return y == null ? [] : (y = Object(y), ve(Zt(y), function(A) {
      return Mt.call(y, A);
    }));
  } : wl, dr = ni;
  (qe && dr(new qe(new ArrayBuffer(1))) != F || Fe && dr(new Fe()) != R || We && dr(We.resolve()) != x || Ve && dr(new Ve()) != d || He && dr(new He()) != U) && (dr = function(y) {
    var A = ni(y), K = A == S ? y.constructor : void 0, ee = K ? wr(K) : "";
    if (ee)
      switch (ee) {
        case Qe:
          return F;
        case tt:
          return R;
        case rt:
          return x;
        case Ze:
          return d;
        case it:
          return U;
      }
    return A;
  });
  function hl(y, A) {
    return A = A ?? u, !!A && (typeof y == "number" || ie.test(y)) && y > -1 && y % 1 == 0 && y < A;
  }
  function dl(y) {
    var A = typeof y;
    return A == "string" || A == "number" || A == "symbol" || A == "boolean" ? y !== "__proto__" : y === null;
  }
  function pl(y) {
    return !!Ee && Ee in y;
  }
  function gl(y) {
    var A = y && y.constructor, K = typeof A == "function" && A.prototype || ne;
    return y === K;
  }
  function yl(y) {
    return Ie.call(y);
  }
  function wr(y) {
    if (y != null) {
      try {
        return me.call(y);
      } catch {
      }
      try {
        return y + "";
      } catch {
      }
    }
    return "";
  }
  function uo(y, A) {
    return y === A || y !== y && A !== A;
  }
  var bl = so(function() {
    return arguments;
  }()) ? so : function(y) {
    return si(y) && ae.call(y, "callee") && !Mt.call(y, "callee");
  }, ji = Array.isArray;
  function vl(y) {
    return y != null && fo(y.length) && !lo(y);
  }
  var _n = jt || El;
  function ml(y, A) {
    return oo(y, A);
  }
  function lo(y) {
    if (!ho(y))
      return !1;
    var A = ni(y);
    return A == _ || A == O || A == f || A == g;
  }
  function fo(y) {
    return typeof y == "number" && y > -1 && y % 1 == 0 && y <= u;
  }
  function ho(y) {
    var A = typeof y;
    return y != null && (A == "object" || A == "function");
  }
  function si(y) {
    return y != null && typeof y == "object";
  }
  var po = be ? Le(be) : ol;
  function _l(y) {
    return vl(y) ? rl(y) : al(y);
  }
  function wl() {
    return [];
  }
  function El() {
    return !1;
  }
  e.exports = ml;
})(rn, rn.exports);
var py = rn.exports;
const gy = /* @__PURE__ */ Os(py);
function yy(e, t) {
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
  function b(O) {
    if (O instanceof Uint8Array || (ArrayBuffer.isView(O) ? O = new Uint8Array(O.buffer, O.byteOffset, O.byteLength) : Array.isArray(O) && (O = Uint8Array.from(O))), !(O instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (O.length === 0)
      return "";
    for (var R = 0, N = 0, B = 0, S = O.length; B !== S && O[B] === 0; )
      B++, R++;
    for (var x = (S - B) * h + 1 >>> 0, g = new Uint8Array(x); B !== S; ) {
      for (var w = O[B], d = 0, o = x - 1; (w !== 0 || d < N) && o !== -1; o--, d++)
        w += 256 * g[o] >>> 0, g[o] = w % a >>> 0, w = w / a >>> 0;
      if (w !== 0)
        throw new Error("Non-zero carry");
      N = d, B++;
    }
    for (var p = x - N; p !== x && g[p] === 0; )
      p++;
    for (var L = l.repeat(R); p < x; ++p)
      L += e.charAt(g[p]);
    return L;
  }
  function v(O) {
    if (typeof O != "string")
      throw new TypeError("Expected String");
    if (O.length === 0)
      return new Uint8Array();
    var R = 0;
    if (O[R] !== " ") {
      for (var N = 0, B = 0; O[R] === l; )
        N++, R++;
      for (var S = (O.length - R) * f + 1 >>> 0, x = new Uint8Array(S); O[R]; ) {
        var g = r[O.charCodeAt(R)];
        if (g === 255)
          return;
        for (var w = 0, d = S - 1; (g !== 0 || w < B) && d !== -1; d--, w++)
          g += a * x[d] >>> 0, x[d] = g % 256 >>> 0, g = g / 256 >>> 0;
        if (g !== 0)
          throw new Error("Non-zero carry");
        B = w, R++;
      }
      if (O[R] !== " ") {
        for (var o = S - B; o !== S && x[o] === 0; )
          o++;
        for (var p = new Uint8Array(N + (S - o)), L = N; o !== S; )
          p[L++] = x[o++];
        return p;
      }
    }
  }
  function _(O) {
    var R = v(O);
    if (R)
      return R;
    throw new Error(`Non-${t} character`);
  }
  return { encode: b, decodeUnsafe: v, decode: _ };
}
var by = yy, vy = by;
const wu = (e) => {
  if (e instanceof Uint8Array && e.constructor.name === "Uint8Array")
    return e;
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  if (ArrayBuffer.isView(e))
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  throw new Error("Unknown type, must be binary type");
}, my = (e) => new TextEncoder().encode(e), _y = (e) => new TextDecoder().decode(e);
class wy {
  constructor(t, r, i) {
    this.name = t, this.prefix = r, this.baseEncode = i;
  }
  encode(t) {
    if (t instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Ey {
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
    return Eu(this, t);
  }
}
class Sy {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return Eu(this, t);
  }
  decode(t) {
    const r = t[0], i = this.decoders[r];
    if (i)
      return i.decode(t);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Eu = (e, t) => new Sy({ ...e.decoders || { [e.prefix]: e }, ...t.decoders || { [t.prefix]: t } });
class Dy {
  constructor(t, r, i, n) {
    this.name = t, this.prefix = r, this.baseEncode = i, this.baseDecode = n, this.encoder = new wy(t, r, i), this.decoder = new Ey(t, r, n);
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const vn = ({ name: e, prefix: t, encode: r, decode: i }) => new Dy(e, t, r, i), Li = ({ prefix: e, name: t, alphabet: r }) => {
  const { encode: i, decode: n } = vy(r, t);
  return vn({ prefix: e, name: t, encode: i, decode: (s) => wu(n(s)) });
}, Oy = (e, t, r, i) => {
  const n = {};
  for (let h = 0; h < t.length; ++h)
    n[t[h]] = h;
  let s = e.length;
  for (; e[s - 1] === "="; )
    --s;
  const u = new Uint8Array(s * r / 8 | 0);
  let a = 0, l = 0, f = 0;
  for (let h = 0; h < s; ++h) {
    const b = n[e[h]];
    if (b === void 0)
      throw new SyntaxError(`Non-${i} character`);
    l = l << r | b, a += r, a >= 8 && (a -= 8, u[f++] = 255 & l >> a);
  }
  if (a >= r || 255 & l << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return u;
}, xy = (e, t, r) => {
  const i = t[t.length - 1] === "=", n = (1 << r) - 1;
  let s = "", u = 0, a = 0;
  for (let l = 0; l < e.length; ++l)
    for (a = a << 8 | e[l], u += 8; u > r; )
      u -= r, s += t[n & a >> u];
  if (u && (s += t[n & a << r - u]), i)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, yt = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) => vn({ prefix: t, name: e, encode(n) {
  return xy(n, i, r);
}, decode(n) {
  return Oy(n, i, r, e);
} }), Iy = vn({ prefix: "\0", name: "identity", encode: (e) => _y(e), decode: (e) => my(e) });
var Ry = Object.freeze({ __proto__: null, identity: Iy });
const Ay = yt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var Cy = Object.freeze({ __proto__: null, base2: Ay });
const Ty = yt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Py = Object.freeze({ __proto__: null, base8: Ty });
const Ny = Li({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Ly = Object.freeze({ __proto__: null, base10: Ny });
const Uy = yt({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), $y = yt({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Fy = Object.freeze({ __proto__: null, base16: Uy, base16upper: $y });
const My = yt({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), jy = yt({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), By = yt({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), qy = yt({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), zy = yt({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), Vy = yt({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), Ky = yt({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), ky = yt({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), Wy = yt({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Hy = Object.freeze({ __proto__: null, base32: My, base32upper: jy, base32pad: By, base32padupper: qy, base32hex: zy, base32hexupper: Vy, base32hexpad: Ky, base32hexpadupper: ky, base32z: Wy });
const Gy = Li({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), Yy = Li({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Jy = Object.freeze({ __proto__: null, base36: Gy, base36upper: Yy });
const Xy = Li({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), Qy = Li({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Zy = Object.freeze({ __proto__: null, base58btc: Xy, base58flickr: Qy });
const e0 = yt({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), t0 = yt({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), r0 = yt({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), i0 = yt({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var n0 = Object.freeze({ __proto__: null, base64: e0, base64pad: t0, base64url: r0, base64urlpad: i0 });
const Su = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), s0 = Su.reduce((e, t, r) => (e[r] = t, e), []), o0 = Su.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []);
function a0(e) {
  return e.reduce((t, r) => (t += s0[r], t), "");
}
function c0(e) {
  const t = [];
  for (const r of e) {
    const i = o0[r.codePointAt(0)];
    if (i === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    t.push(i);
  }
  return new Uint8Array(t);
}
const u0 = vn({ prefix: "🚀", name: "base256emoji", encode: a0, decode: c0 });
var l0 = Object.freeze({ __proto__: null, base256emoji: u0 }), f0 = Du, Ca = 128, h0 = 127, d0 = ~h0, p0 = Math.pow(2, 31);
function Du(e, t, r) {
  t = t || [], r = r || 0;
  for (var i = r; e >= p0; )
    t[r++] = e & 255 | Ca, e /= 128;
  for (; e & d0; )
    t[r++] = e & 255 | Ca, e >>>= 7;
  return t[r] = e | 0, Du.bytes = r - i + 1, t;
}
var g0 = ds, y0 = 128, Ta = 127;
function ds(e, i) {
  var r = 0, i = i || 0, n = 0, s = i, u, a = e.length;
  do {
    if (s >= a)
      throw ds.bytes = 0, new RangeError("Could not decode varint");
    u = e[s++], r += n < 28 ? (u & Ta) << n : (u & Ta) * Math.pow(2, n), n += 7;
  } while (u >= y0);
  return ds.bytes = s - i, r;
}
var b0 = Math.pow(2, 7), v0 = Math.pow(2, 14), m0 = Math.pow(2, 21), _0 = Math.pow(2, 28), w0 = Math.pow(2, 35), E0 = Math.pow(2, 42), S0 = Math.pow(2, 49), D0 = Math.pow(2, 56), O0 = Math.pow(2, 63), x0 = function(e) {
  return e < b0 ? 1 : e < v0 ? 2 : e < m0 ? 3 : e < _0 ? 4 : e < w0 ? 5 : e < E0 ? 6 : e < S0 ? 7 : e < D0 ? 8 : e < O0 ? 9 : 10;
}, I0 = { encode: f0, decode: g0, encodingLength: x0 }, Ou = I0;
const Pa = (e, t, r = 0) => (Ou.encode(e, t, r), t), Na = (e) => Ou.encodingLength(e), ps = (e, t) => {
  const r = t.byteLength, i = Na(e), n = i + Na(r), s = new Uint8Array(n + r);
  return Pa(e, s, 0), Pa(r, s, i), s.set(t, n), new R0(e, r, t, s);
};
class R0 {
  constructor(t, r, i, n) {
    this.code = t, this.size = r, this.digest = i, this.bytes = n;
  }
}
const xu = ({ name: e, code: t, encode: r }) => new A0(e, t, r);
class A0 {
  constructor(t, r, i) {
    this.name = t, this.code = r, this.encode = i;
  }
  digest(t) {
    if (t instanceof Uint8Array) {
      const r = this.encode(t);
      return r instanceof Uint8Array ? ps(this.code, r) : r.then((i) => ps(this.code, i));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const Iu = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t)), C0 = xu({ name: "sha2-256", code: 18, encode: Iu("SHA-256") }), T0 = xu({ name: "sha2-512", code: 19, encode: Iu("SHA-512") });
var P0 = Object.freeze({ __proto__: null, sha256: C0, sha512: T0 });
const Ru = 0, N0 = "identity", Au = wu, L0 = (e) => ps(Ru, Au(e)), U0 = { code: Ru, name: N0, encode: Au, digest: L0 };
var $0 = Object.freeze({ __proto__: null, identity: U0 });
new TextEncoder(), new TextDecoder();
const La = { ...Ry, ...Cy, ...Py, ...Ly, ...Fy, ...Hy, ...Jy, ...Zy, ...n0, ...l0 };
({ ...P0, ...$0 });
function Cu(e) {
  return globalThis.Buffer != null ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e;
}
function F0(e = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Cu(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e);
}
function Tu(e, t, r, i) {
  return { name: e, prefix: t, encoder: { name: e, prefix: t, encode: r }, decoder: { decode: i } };
}
const Ua = Tu("utf8", "u", (e) => "u" + new TextDecoder("utf8").decode(e), (e) => new TextEncoder().encode(e.substring(1))), Nn = Tu("ascii", "a", (e) => {
  let t = "a";
  for (let r = 0; r < e.length; r++)
    t += String.fromCharCode(e[r]);
  return t;
}, (e) => {
  e = e.substring(1);
  const t = F0(e.length);
  for (let r = 0; r < e.length; r++)
    t[r] = e.charCodeAt(r);
  return t;
}), M0 = { utf8: Ua, "utf-8": Ua, hex: La.base16, latin1: Nn, ascii: Nn, binary: Nn, ...La };
function j0(e, t = "utf8") {
  const r = M0[t];
  if (!r)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Cu(globalThis.Buffer.from(e, "utf-8")) : r.decoder.decode(`${r.prefix}${e}`);
}
const Pu = "wc", B0 = 2, Hs = "core", vr = `${Pu}@2:${Hs}:`, q0 = { name: Hs, logger: "error" }, z0 = { database: ":memory:" }, V0 = "crypto", $a = "client_ed25519_seed", K0 = te.ONE_DAY, k0 = "keychain", W0 = "0.3", H0 = "messages", G0 = "0.3", Y0 = te.SIX_HOURS, J0 = "publisher", Nu = "irn", X0 = "error", Lu = "wss://relay.walletconnect.com", Fa = "wss://relay.walletconnect.org", Q0 = "relayer", Xe = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, Z0 = "_subscription", yi = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, eb = te.ONE_SECOND / 2, tb = "2.9.1", rb = 1e4, ib = "0.3", nb = "WALLETCONNECT_CLIENT_ID", nr = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, sb = "subscription", ob = "0.3", ab = te.FIVE_SECONDS * 1e3, cb = "pairing", ub = "0.3", bi = { wc_pairingDelete: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 0 } } }, ir = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, lb = "history", fb = "0.3", hb = "expirer", Vt = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, db = "0.3", Ln = "verify-api", Ma = "https://verify.walletconnect.com";
class pb {
  constructor(t, r) {
    this.core = t, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = k0, this.version = W0, this.initialized = !1, this.storagePrefix = vr, this.init = async () => {
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
    }, this.core = t, this.logger = Ce.generateChildLogger(r, this.name);
  }
  get context() {
    return Ce.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setKeyChain(t) {
    await this.core.storage.setItem(this.storageKey, lu(t));
  }
  async getKeyChain() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < "u" ? fu(t) : void 0;
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
class gb {
  constructor(t, r, i) {
    this.core = t, this.logger = r, this.name = V0, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (n) => (this.isInitialized(), this.keychain.has(n)), this.getClientId = async () => {
      this.isInitialized();
      const n = await this.getClientSeed(), s = ia(n);
      return Yc(s.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const n = Mp();
      return this.setPrivateKey(n.publicKey, n.privateKey);
    }, this.signJWT = async (n) => {
      this.isInitialized();
      const s = await this.getClientSeed(), u = ia(s), a = fs();
      return await Wd(a, n, K0, u);
    }, this.generateSharedKey = (n, s, u) => {
      this.isInitialized();
      const a = this.getPrivateKey(n), l = jp(a, s);
      return this.setSymKey(l, u);
    }, this.setSymKey = async (n, s) => {
      this.isInitialized();
      const u = s || Bp(n);
      return await this.keychain.set(u, n), u;
    }, this.deleteKeyPair = async (n) => {
      this.isInitialized(), await this.keychain.del(n);
    }, this.deleteSymKey = async (n) => {
      this.isInitialized(), await this.keychain.del(n);
    }, this.encode = async (n, s, u) => {
      this.isInitialized();
      const a = cu(u), l = Rs(s);
      if (pa(a)) {
        const v = a.senderPublicKey, _ = a.receiverPublicKey;
        n = await this.generateSharedKey(v, _);
      }
      const f = this.getSymKey(n), { type: h, senderPublicKey: b } = a;
      return zp({ type: h, symKey: f, message: l, senderPublicKey: b });
    }, this.decode = async (n, s, u) => {
      this.isInitialized();
      const a = kp(s, u);
      if (pa(a)) {
        const l = a.receiverPublicKey, f = a.senderPublicKey;
        n = await this.generateSharedKey(l, f);
      }
      try {
        const l = this.getSymKey(n), f = Vp({ symKey: l, encoded: s });
        return Lc(f);
      } catch (l) {
        this.logger.error(`Failed to decode message from topic: '${n}', clientId: '${await this.getClientId()}'`), this.logger.error(l);
      }
    }, this.getPayloadType = (n) => {
      const s = Zi(n);
      return Pi(s.type);
    }, this.getPayloadSenderPublicKey = (n) => {
      const s = Zi(n);
      return s.senderPublicKey ? It(s.senderPublicKey, xt) : void 0;
    }, this.core = t, this.logger = Ce.generateChildLogger(r, this.name), this.keychain = i || new pb(this.core, this.logger);
  }
  get context() {
    return Ce.getLoggerContext(this.logger);
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
      t = this.keychain.get($a);
    } catch {
      t = fs(), await this.keychain.set($a, t);
    }
    return j0(t, "base16");
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
class yb extends Yf {
  constructor(t, r) {
    super(t, r), this.logger = t, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = H0, this.version = G0, this.initialized = !1, this.storagePrefix = vr, this.init = async () => {
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
      const s = kr(n);
      let u = this.messages.get(i);
      return typeof u > "u" && (u = {}), typeof u[s] < "u" || (u[s] = n, this.messages.set(i, u), await this.persist()), s;
    }, this.get = (i) => {
      this.isInitialized();
      let n = this.messages.get(i);
      return typeof n > "u" && (n = {}), n;
    }, this.has = (i, n) => {
      this.isInitialized();
      const s = this.get(i), u = kr(n);
      return typeof s[u] < "u";
    }, this.del = async (i) => {
      this.isInitialized(), this.messages.delete(i), await this.persist();
    }, this.logger = Ce.generateChildLogger(t, this.name), this.core = r;
  }
  get context() {
    return Ce.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setRelayerMessages(t) {
    await this.core.storage.setItem(this.storageKey, lu(t));
  }
  async getRelayerMessages() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < "u" ? fu(t) : void 0;
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
class bb extends Jf {
  constructor(t, r) {
    super(t, r), this.relayer = t, this.logger = r, this.events = new Xt.EventEmitter(), this.name = J0, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = te.toMiliseconds(te.TEN_SECONDS), this.queueTimeout = te.toMiliseconds(te.FIVE_SECONDS), this.needsTransportRestart = !1, this.publish = async (i, n, s) => {
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i, message: n, opts: s } });
      try {
        const u = (s == null ? void 0 : s.ttl) || Y0, a = hs(s), l = (s == null ? void 0 : s.prompt) || !1, f = (s == null ? void 0 : s.tag) || 0, h = (s == null ? void 0 : s.id) || Vs().toString(), b = { topic: i, message: n, opts: { ttl: u, relay: a, prompt: l, tag: f, id: h } }, v = setTimeout(() => this.queue.set(h, b), this.queueTimeout);
        try {
          await await en(this.rpcPublish(i, n, u, a, l, f, h), this.publishTimeout), clearTimeout(v), this.relayer.events.emit(Xe.publish, b);
        } catch {
          this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0;
          return;
        }
        this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i, message: n, opts: s } });
      } catch (u) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(u), u;
      }
    }, this.on = (i, n) => {
      this.events.on(i, n);
    }, this.once = (i, n) => {
      this.events.once(i, n);
    }, this.off = (i, n) => {
      this.events.off(i, n);
    }, this.removeListener = (i, n) => {
      this.events.removeListener(i, n);
    }, this.relayer = t, this.logger = Ce.generateChildLogger(r, this.name), this.registerEventListeners();
  }
  get context() {
    return Ce.getLoggerContext(this.logger);
  }
  rpcPublish(t, r, i, n, s, u, a) {
    var l, f, h, b;
    const v = { method: Gi(n.protocol).publish, params: { topic: t, message: r, ttl: i, prompt: s, tag: u }, id: a };
    return Ot((l = v.params) == null ? void 0 : l.prompt) && ((f = v.params) == null || delete f.prompt), Ot((h = v.params) == null ? void 0 : h.tag) && ((b = v.params) == null || delete b.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: v }), this.relayer.request(v);
  }
  onPublish(t) {
    this.queue.delete(t);
  }
  checkQueue() {
    this.queue.forEach(async (t) => {
      const { topic: r, message: i, opts: n } = t;
      await this.publish(r, i, n);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Jr.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(Xe.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(Xe.message_ack, (t) => {
      this.onPublish(t.id.toString());
    });
  }
}
class vb {
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
var mb = Object.defineProperty, _b = Object.defineProperties, wb = Object.getOwnPropertyDescriptors, ja = Object.getOwnPropertySymbols, Eb = Object.prototype.hasOwnProperty, Sb = Object.prototype.propertyIsEnumerable, Ba = (e, t, r) => t in e ? mb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, vi = (e, t) => {
  for (var r in t || (t = {}))
    Eb.call(t, r) && Ba(e, r, t[r]);
  if (ja)
    for (var r of ja(t))
      Sb.call(t, r) && Ba(e, r, t[r]);
  return e;
}, Un = (e, t) => _b(e, wb(t));
class Db extends Zf {
  constructor(t, r) {
    super(t, r), this.relayer = t, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new vb(), this.events = new Xt.EventEmitter(), this.name = sb, this.version = ob, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = vr, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restart(), this.registerEventListeners(), this.onEnable(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (i, n) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: n } });
      try {
        const s = hs(n), u = { topic: i, relay: s };
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
        !this.pending.has(i) && this.topics.includes(i) && (clearInterval(a), u.stop(this.pendingSubscriptionWatchLabel), n(!0)), u.elapsed(this.pendingSubscriptionWatchLabel) >= ab && (clearInterval(a), u.stop(this.pendingSubscriptionWatchLabel), s(new Error("Subscription resolution timeout")));
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
    }, this.relayer = t, this.logger = Ce.generateChildLogger(r, this.name), this.clientId = "";
  }
  get context() {
    return Ce.getLoggerContext(this.logger);
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
      const n = hs(i);
      await this.rpcUnsubscribe(t, r, n);
      const s = ut("USER_DISCONNECTED", `${this.name}, ${t}`);
      await this.onUnsubscribe(t, r, s), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: t, id: r, opts: i } });
    } catch (n) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(n), n;
    }
  }
  async rpcSubscribe(t, r) {
    const i = { method: Gi(r.protocol).subscribe, params: { topic: t } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      await await en(this.relayer.request(i), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(Xe.connection_stalled);
    }
    return kr(t + this.clientId);
  }
  async rpcBatchSubscribe(t) {
    if (!t.length)
      return;
    const r = t[0].relay, i = { method: Gi(r.protocol).batchSubscribe, params: { topics: t.map((n) => n.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      return await await en(this.relayer.request(i), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(Xe.connection_stalled);
    }
  }
  rpcUnsubscribe(t, r, i) {
    const n = { method: Gi(i.protocol).unsubscribe, params: { topic: t, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n }), this.relayer.request(n);
  }
  onSubscribe(t, r) {
    this.setSubscription(t, Un(vi({}, r), { id: t })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(t) {
    t.length && t.forEach((r) => {
      this.setSubscription(r.id, vi({}, r)), this.pending.delete(r.topic);
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
    this.subscriptions.set(t, vi({}, r)), this.topicMap.set(r.topic, t), this.events.emit(nr.created, r);
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
    this.subscriptions.delete(t), this.topicMap.delete(i.topic, t), this.events.emit(nr.deleted, Un(vi({}, i), { reason: r }));
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
    Ni(r) && this.onBatchSubscribe(r.map((i, n) => Un(vi({}, t[n]), { id: i })));
  }
  async onConnect() {
    this.restartInProgress || (await this.restart(), this.onEnable());
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (this.relayer.transportExplicitlyClosed)
      return;
    const t = [];
    this.pending.forEach((r) => {
      t.push(r);
    }), await this.batchSubscribe(t);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Jr.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(Xe.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(Xe.disconnect, () => {
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
var Ob = Object.defineProperty, qa = Object.getOwnPropertySymbols, xb = Object.prototype.hasOwnProperty, Ib = Object.prototype.propertyIsEnumerable, za = (e, t, r) => t in e ? Ob(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Rb = (e, t) => {
  for (var r in t || (t = {}))
    xb.call(t, r) && za(e, r, t[r]);
  if (qa)
    for (var r of qa(t))
      Ib.call(t, r) && za(e, r, t[r]);
  return e;
};
class Ab extends Xf {
  constructor(t) {
    super(t), this.protocol = "wc", this.version = 2, this.events = new Xt.EventEmitter(), this.name = Q0, this.transportExplicitlyClosed = !1, this.initialized = !1, this.reconnecting = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.request = async (r) => {
      this.logger.debug("Publishing Request Payload");
      try {
        return await this.toEstablishConnection(), await this.provider.request(r);
      } catch (i) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(i), i;
      }
    }, this.core = t.core, this.logger = typeof t.logger < "u" && typeof t.logger != "string" ? Ce.generateChildLogger(t.logger, this.name) : Ce.pino(Ce.getDefaultLoggerOptions({ level: t.logger || X0 })), this.messages = new yb(this.logger, t.core), this.subscriber = new Db(this, this.logger), this.publisher = new bb(this, this.logger), this.relayUrl = (t == null ? void 0 : t.relayUrl) || Lu, this.projectId = t.projectId, this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Fa}...`), await this.restartTransport(Fa);
    }
    this.registerEventListeners(), this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, rb);
  }
  get context() {
    return Ce.getLoggerContext(this.logger);
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
    this.transportExplicitlyClosed = !0, this.connected && (await this.provider.disconnect(), this.events.emit(Xe.transport_closed));
  }
  async transportOpen(t) {
    if (this.transportExplicitlyClosed = !1, !this.reconnecting) {
      this.relayUrl = t || this.relayUrl, this.reconnecting = !0;
      try {
        await Promise.all([new Promise((r) => {
          this.initialized || r(), this.subscriber.once(nr.resubscribed, () => {
            r();
          });
        }), await Promise.race([new Promise(async (r, i) => {
          await en(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`).catch((n) => i(n)).then(() => r()).finally(() => this.removeListener(Xe.transport_closed, this.rejectTransportOpen));
        }), new Promise((r) => this.once(Xe.transport_closed, this.rejectTransportOpen))])]);
      } catch (r) {
        this.logger.error(r);
        const i = r;
        if (!this.isConnectionStalled(i.message))
          throw r;
        this.events.emit(Xe.transport_closed);
      } finally {
        this.reconnecting = !1;
      }
    }
  }
  async restartTransport(t) {
    this.transportExplicitlyClosed || this.reconnecting || (this.relayUrl = t || this.relayUrl, this.connected && await Promise.all([new Promise((r) => {
      this.provider.once(yi.disconnect, () => {
        r();
      });
    }), this.transportClose()]), await this.createProvider(), await this.transportOpen());
  }
  isConnectionStalled(t) {
    return this.staleConnectionErrors.some((r) => t.includes(r));
  }
  rejectTransportOpen() {
    throw new Error("Attempt to connect to relay via `transportOpen` has stalled. Retrying...");
  }
  async createProvider() {
    const t = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new uy(new dy(rg({ sdkVersion: tb, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: t, useOnCloseEvent: !0 }))), this.registerProviderListeners();
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
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: t }), Ws(t)) {
      if (!t.method.endsWith(Z0))
        return;
      const r = t.params, { topic: i, message: n, publishedAt: s } = r.data, u = { topic: i, message: n, publishedAt: s };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Rb({ type: "event", event: r.id }, u)), this.events.emit(r.id, u), await this.acknowledgePayload(t), await this.onMessageEvent(u);
    } else
      bn(t) && this.events.emit(Xe.message_ack, t);
  }
  async onMessageEvent(t) {
    await this.shouldIgnoreMessageEvent(t) || (this.events.emit(Xe.message, t), await this.recordMessageEvent(t));
  }
  async acknowledgePayload(t) {
    const r = Ks(t.id, !0);
    await this.provider.connection.send(r);
  }
  registerProviderListeners() {
    this.provider.on(yi.payload, (t) => this.onProviderPayload(t)), this.provider.on(yi.connect, () => {
      this.events.emit(Xe.connect);
    }), this.provider.on(yi.disconnect, () => {
      this.onProviderDisconnect();
    }), this.provider.on(yi.error, (t) => {
      this.logger.error(t), this.events.emit(Xe.error, t);
    });
  }
  registerEventListeners() {
    this.events.on(Xe.connection_stalled, async () => {
      await this.restartTransport();
    });
  }
  onProviderDisconnect() {
    this.events.emit(Xe.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || setTimeout(async () => {
      await this.restartTransport();
    }, te.toMiliseconds(eb));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = X("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  async toEstablishConnection() {
    if (!this.connected) {
      if (this.connecting)
        return await new Promise((t) => {
          const r = setInterval(() => {
            this.connected && (clearInterval(r), t());
          }, this.connectionStatusPollingInterval);
        });
      await this.restartTransport();
    }
  }
}
var Cb = Object.defineProperty, Va = Object.getOwnPropertySymbols, Tb = Object.prototype.hasOwnProperty, Pb = Object.prototype.propertyIsEnumerable, Ka = (e, t, r) => t in e ? Cb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, ka = (e, t) => {
  for (var r in t || (t = {}))
    Tb.call(t, r) && Ka(e, r, t[r]);
  if (Va)
    for (var r of Va(t))
      Pb.call(t, r) && Ka(e, r, t[r]);
  return e;
};
class mn extends Qf {
  constructor(t, r, i, n = vr, s = void 0) {
    super(t, r, i, n), this.core = t, this.logger = r, this.name = i, this.map = /* @__PURE__ */ new Map(), this.version = ib, this.cached = [], this.initialized = !1, this.storagePrefix = vr, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((u) => {
        this.getKey && u !== null && !Ot(u) ? this.map.set(this.getKey(u), u) : Og(u) ? this.map.set(u.id, u) : xg(u) && this.map.set(u.topic, u);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (u, a) => {
      this.isInitialized(), this.map.has(u) ? await this.update(u, a) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: u, value: a }), this.map.set(u, a), await this.persist());
    }, this.get = (u) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: u }), this.getData(u)), this.getAll = (u) => (this.isInitialized(), u ? this.values.filter((a) => Object.keys(u).every((l) => gy(a[l], u[l]))) : this.values), this.update = async (u, a) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: u, update: a });
      const l = ka(ka({}, this.getData(u)), a);
      this.map.set(u, l), await this.persist();
    }, this.delete = async (u, a) => {
      this.isInitialized(), this.map.has(u) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: u, reason: a }), this.map.delete(u), await this.persist());
    }, this.logger = Ce.generateChildLogger(r, this.name), this.storagePrefix = n, this.getKey = s;
  }
  get context() {
    return Ce.getLoggerContext(this.logger);
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
class Nb {
  constructor(t, r) {
    this.core = t, this.logger = r, this.name = cb, this.version = ub, this.events = new Ic(), this.initialized = !1, this.storagePrefix = vr, this.ignoredPayloadTypes = [Fr], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: i }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i])];
    }, this.create = async () => {
      this.isInitialized();
      const i = fs(), n = await this.core.crypto.setSymKey(i), s = Ht(te.FIVE_MINUTES), u = { protocol: Nu }, a = { topic: n, expiry: s, relay: u, active: !1 }, l = gg({ protocol: this.core.protocol, version: this.core.version, topic: n, symKey: i, relay: u });
      return await this.pairings.set(n, a), await this.core.relayer.subscribe(n), this.core.expirer.set(n, s), { topic: n, uri: l };
    }, this.pair = async (i) => {
      this.isInitialized(), this.isValidPair(i);
      const { topic: n, symKey: s, relay: u } = hg(i.uri);
      if (this.pairings.keys.includes(n))
        throw new Error(`Pairing already exists: ${n}`);
      if (this.core.crypto.hasKeys(n))
        throw new Error(`Keychain already exists: ${n}`);
      const a = Ht(te.FIVE_MINUTES), l = { topic: n, relay: u, expiry: a, active: !1 };
      return await this.pairings.set(n, l), await this.core.crypto.setSymKey(s, n), await this.core.relayer.subscribe(n, { relay: u }), this.core.expirer.set(n, a), i.activatePairing && await this.activate({ topic: n }), l;
    }, this.activate = async ({ topic: i }) => {
      this.isInitialized();
      const n = Ht(te.THIRTY_DAYS);
      await this.pairings.update(i, { active: !0, expiry: n }), this.core.expirer.set(i, n);
    }, this.ping = async (i) => {
      this.isInitialized(), await this.isValidPing(i);
      const { topic: n } = i;
      if (this.pairings.keys.includes(n)) {
        const s = await this.sendRequest(n, "wc_pairingPing", {}), { done: u, resolve: a, reject: l } = zr();
        this.events.once(st("pairing_ping", s), ({ error: f }) => {
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
      this.pairings.keys.includes(n) && (await this.sendRequest(n, "wc_pairingDelete", ut("USER_DISCONNECTED")), await this.deletePairing(n));
    }, this.sendRequest = async (i, n, s) => {
      const u = yn(n, s), a = await this.core.crypto.encode(i, u), l = bi[n].req;
      return this.core.history.set(i, u), this.core.relayer.publish(i, a, l), u.id;
    }, this.sendResult = async (i, n, s) => {
      const u = Ks(i, s), a = await this.core.crypto.encode(n, u), l = await this.core.history.get(n, i), f = bi[l.request.method].res;
      await this.core.relayer.publish(n, a, f), await this.core.history.resolve(u);
    }, this.sendError = async (i, n, s) => {
      const u = ks(i, s), a = await this.core.crypto.encode(n, u), l = await this.core.history.get(n, i), f = bi[l.request.method] ? bi[l.request.method].res : bi.unregistered_method.res;
      await this.core.relayer.publish(n, a, f), await this.core.history.resolve(u);
    }, this.deletePairing = async (i, n) => {
      await this.core.relayer.unsubscribe(i), await Promise.all([this.pairings.delete(i, ut("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i), n ? Promise.resolve() : this.core.expirer.del(i)]);
    }, this.cleanup = async () => {
      const i = this.pairings.getAll().filter((n) => yr(n.expiry));
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
        ur(n) ? this.events.emit(st("pairing_ping", s), {}) : Gt(n) && this.events.emit(st("pairing_ping", s), { error: n.error });
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
        const a = ut("WC_METHOD_UNSUPPORTED", u);
        await this.sendError(s, i, a), this.logger.error(a);
      } catch (a) {
        await this.sendError(s, i, a), this.logger.error(a);
      }
    }, this.onUnknownRpcMethodResponse = (i) => {
      this.registeredMethods.includes(i) || this.logger.error(ut("WC_METHOD_UNSUPPORTED", i));
    }, this.isValidPair = (i) => {
      if (!Rt(i)) {
        const { message: n } = X("MISSING_OR_INVALID", `pair() params: ${i}`);
        throw new Error(n);
      }
      if (!Dg(i.uri)) {
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
      if (!lt(i, !1)) {
        const { message: n } = X("MISSING_OR_INVALID", `pairing topic should be a string: ${i}`);
        throw new Error(n);
      }
      if (!this.pairings.keys.includes(i)) {
        const { message: n } = X("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i}`);
        throw new Error(n);
      }
      if (yr(this.pairings.get(i).expiry)) {
        await this.deletePairing(i);
        const { message: n } = X("EXPIRED", `pairing topic: ${i}`);
        throw new Error(n);
      }
    }, this.core = t, this.logger = Ce.generateChildLogger(r, this.name), this.pairings = new mn(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return Ce.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = X("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(Xe.message, async (t) => {
      const { topic: r, message: i } = t;
      if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i)))
        return;
      const n = await this.core.crypto.decode(r, i);
      Ws(n) ? (this.core.history.set(r, n), this.onRelayEventRequest({ topic: r, payload: n })) : bn(n) && (await this.core.history.resolve(n), await this.onRelayEventResponse({ topic: r, payload: n }), this.core.history.delete(r, n.id));
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(Vt.expired, async (t) => {
      const { topic: r } = du(t.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit("pairing_expire", { topic: r }));
    });
  }
}
class Lb extends Gf {
  constructor(t, r) {
    super(t, r), this.core = t, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new Xt.EventEmitter(), this.name = lb, this.version = fb, this.cached = [], this.initialized = !1, this.storagePrefix = vr, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.records.set(i.id, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (i, n, s) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: i, request: n, chainId: s }), this.records.has(n.id))
        return;
      const u = { id: n.id, topic: i, request: { method: n.method, params: n.params || null }, chainId: s, expiry: Ht(te.THIRTY_DAYS) };
      this.records.set(u.id, u), this.events.emit(ir.created, u);
    }, this.resolve = async (i) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: i }), !this.records.has(i.id))
        return;
      const n = await this.getRecord(i.id);
      typeof n.response > "u" && (n.response = Gt(i) ? { error: i.error } : { result: i.result }, this.records.set(n.id, n), this.events.emit(ir.updated, n));
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
    }, this.logger = Ce.generateChildLogger(r, this.name);
  }
  get context() {
    return Ce.getLoggerContext(this.logger);
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
      const i = { topic: r.topic, request: yn(r.request.method, r.request.params, r.id), chainId: r.chainId };
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
    }), this.core.heartbeat.on(Jr.HEARTBEAT_EVENTS.pulse, () => {
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
class Ub extends eh {
  constructor(t, r) {
    super(t, r), this.core = t, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new Xt.EventEmitter(), this.name = hb, this.version = db, this.cached = [], this.initialized = !1, this.storagePrefix = vr, this.init = async () => {
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
      this.expirations.set(s, u), this.checkExpiry(s, u), this.events.emit(Vt.created, { target: s, expiration: u });
    }, this.get = (i) => {
      this.isInitialized();
      const n = this.formatTarget(i);
      return this.getExpiration(n);
    }, this.del = (i) => {
      if (this.isInitialized(), this.has(i)) {
        const n = this.formatTarget(i), s = this.getExpiration(n);
        this.expirations.delete(n), this.events.emit(Vt.deleted, { target: n, expiration: s });
      }
    }, this.on = (i, n) => {
      this.events.on(i, n);
    }, this.once = (i, n) => {
      this.events.once(i, n);
    }, this.off = (i, n) => {
      this.events.off(i, n);
    }, this.removeListener = (i, n) => {
      this.events.removeListener(i, n);
    }, this.logger = Ce.generateChildLogger(r, this.name);
  }
  get context() {
    return Ce.getLoggerContext(this.logger);
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
      return ig(t);
    if (typeof t == "number")
      return ng(t);
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
    await this.setExpirations(this.values), this.events.emit(Vt.sync);
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
    this.expirations.delete(t), this.events.emit(Vt.expired, { target: t, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((t, r) => this.checkExpiry(r, t));
  }
  registerEventListeners() {
    this.core.heartbeat.on(Jr.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(Vt.created, (t) => {
      const r = Vt.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), this.persist();
    }), this.events.on(Vt.expired, (t) => {
      const r = Vt.expired;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), this.persist();
    }), this.events.on(Vt.deleted, (t) => {
      const r = Vt.deleted;
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
class $b extends th {
  constructor(t, r) {
    super(t, r), this.projectId = t, this.logger = r, this.name = Ln, this.initialized = !1, this.init = async (i) => {
      uu() || !js() || (this.verifyUrl = (i == null ? void 0 : i.verifyUrl) || Ma, await this.createIframe());
    }, this.register = async (i) => {
      var n;
      if (this.initialized || await this.init(), !!this.iframe)
        try {
          (n = this.iframe.contentWindow) == null || n.postMessage(i.attestationId, this.verifyUrl), this.logger.info(`postMessage sent: ${i.attestationId} ${this.verifyUrl}`);
        } catch {
        }
    }, this.resolve = async (i) => {
      var n;
      if (this.isDevEnv)
        return "";
      this.logger.info(`resolving attestation: ${i.attestationId}`);
      const s = this.startAbortTimer(te.FIVE_SECONDS), u = await fetch(`${this.verifyUrl}/attestation/${i.attestationId}`, { signal: this.abortController.signal });
      return clearTimeout(s), u.status === 200 ? (n = await u.json()) == null ? void 0 : n.origin : "";
    }, this.createIframe = async () => {
      try {
        await Promise.race([new Promise((i, n) => {
          if (document.getElementById(Ln))
            return i();
          const s = document.createElement("iframe");
          s.setAttribute("id", Ln), s.setAttribute("src", `${this.verifyUrl}/${this.projectId}`), s.style.display = "none", s.addEventListener("load", () => {
            this.initialized = !0, i();
          }), s.addEventListener("error", (u) => {
            n(u);
          }), document.body.append(s), this.iframe = s;
        }), new Promise((i) => {
          setTimeout(() => i("iframe load timeout"), te.toMiliseconds(te.ONE_SECOND / 2));
        })]);
      } catch (i) {
        this.logger.error(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.error(i);
      }
    }, this.logger = Ce.generateChildLogger(r, this.name), this.verifyUrl = Ma, this.abortController = new AbortController(), this.isDevEnv = Ms() && process.env.IS_VITEST;
  }
  get context() {
    return Ce.getLoggerContext(this.logger);
  }
  startAbortTimer(t) {
    return setTimeout(() => this.abortController.abort(), te.toMiliseconds(t));
  }
}
var Fb = Object.defineProperty, Wa = Object.getOwnPropertySymbols, Mb = Object.prototype.hasOwnProperty, jb = Object.prototype.propertyIsEnumerable, Ha = (e, t, r) => t in e ? Fb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Ga = (e, t) => {
  for (var r in t || (t = {}))
    Mb.call(t, r) && Ha(e, r, t[r]);
  if (Wa)
    for (var r of Wa(t))
      jb.call(t, r) && Ha(e, r, t[r]);
  return e;
};
let Bb = class Uu extends Hf {
  constructor(t) {
    super(t), this.protocol = Pu, this.version = B0, this.name = Hs, this.events = new Xt.EventEmitter(), this.initialized = !1, this.on = (i, n) => this.events.on(i, n), this.once = (i, n) => this.events.once(i, n), this.off = (i, n) => this.events.off(i, n), this.removeListener = (i, n) => this.events.removeListener(i, n), this.projectId = t == null ? void 0 : t.projectId, this.relayUrl = (t == null ? void 0 : t.relayUrl) || Lu;
    const r = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : Ce.pino(Ce.getDefaultLoggerOptions({ level: (t == null ? void 0 : t.logger) || q0.logger }));
    this.logger = Ce.generateChildLogger(r, this.name), this.heartbeat = new Jr.HeartBeat(), this.crypto = new gb(this, this.logger, t == null ? void 0 : t.keychain), this.history = new Lb(this, this.logger), this.expirer = new Ub(this, this.logger), this.storage = t != null && t.storage ? t.storage : new Cf(Ga(Ga({}, z0), t == null ? void 0 : t.storageOptions)), this.relayer = new Ab({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new Nb(this, this.logger), this.verify = new $b(this.projectId || "", this.logger);
  }
  static async init(t) {
    const r = new Uu(t);
    await r.initialize();
    const i = await r.crypto.getClientId();
    return await r.storage.setItem(nb, i), r;
  }
  get context() {
    return Ce.getLoggerContext(this.logger);
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
const qb = Bb, $u = "wc", Fu = 2, Mu = "client", Gs = `${$u}@${Fu}:${Mu}:`, $n = { name: Mu, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, zb = "WALLETCONNECT_DEEPLINK_CHOICE", Vb = "proposal", Kb = "Proposal expired", kb = "session", ki = te.SEVEN_DAYS, Wb = "engine", mi = { wc_sessionPropose: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, Fn = { min: te.FIVE_MINUTES, max: te.SEVEN_DAYS }, _i = { idle: "idle", active: "active" }, Hb = "request", Gb = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var Yb = Object.defineProperty, Jb = Object.defineProperties, Xb = Object.getOwnPropertyDescriptors, Ya = Object.getOwnPropertySymbols, Qb = Object.prototype.hasOwnProperty, Zb = Object.prototype.propertyIsEnumerable, Ja = (e, t, r) => t in e ? Yb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, zt = (e, t) => {
  for (var r in t || (t = {}))
    Qb.call(t, r) && Ja(e, r, t[r]);
  if (Ya)
    for (var r of Ya(t))
      Zb.call(t, r) && Ja(e, r, t[r]);
  return e;
}, Mn = (e, t) => Jb(e, Xb(t));
class e1 extends ih {
  constructor(t) {
    super(t), this.name = Wb, this.events = new Ic(), this.initialized = !1, this.ignoredPayloadTypes = [Fr], this.requestQueue = { state: _i.idle, requests: [] }, this.requestQueueDelay = te.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({ methods: Object.keys(mi) }), this.initialized = !0, setTimeout(() => {
        this.requestQueue.requests = this.getPendingSessionRequests(), this.processRequestQueue();
      }, te.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      this.isInitialized();
      const i = Mn(zt({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(i);
      const { pairingTopic: n, requiredNamespaces: s, optionalNamespaces: u, sessionProperties: a, relays: l } = i;
      let f = n, h, b = !1;
      if (f && (b = this.client.core.pairing.pairings.get(f).active), !f || !b) {
        const { topic: x, uri: g } = await this.client.core.pairing.create();
        f = x, h = g;
      }
      const v = await this.client.core.crypto.generateKeyPair(), _ = zt({ requiredNamespaces: s, optionalNamespaces: u, relays: l ?? [{ protocol: Nu }], proposer: { publicKey: v, metadata: this.client.metadata } }, a && { sessionProperties: a }), { reject: O, resolve: R, done: N } = zr(te.FIVE_MINUTES, Kb);
      if (this.events.once(st("session_connect"), async ({ error: x, session: g }) => {
        if (x)
          O(x);
        else if (g) {
          g.self.publicKey = v;
          const w = Mn(zt({}, g), { requiredNamespaces: g.requiredNamespaces, optionalNamespaces: g.optionalNamespaces });
          await this.client.session.set(g.topic, w), await this.setExpiry(g.topic, g.expiry), f && await this.client.core.pairing.updateMetadata({ topic: f, metadata: g.peer.metadata }), R(w);
        }
      }), !f) {
        const { message: x } = X("NO_MATCHING_KEY", `connect() pairing topic: ${f}`);
        throw new Error(x);
      }
      const B = await this.sendRequest(f, "wc_sessionPropose", _), S = Ht(te.FIVE_MINUTES);
      return await this.setProposal(B, zt({ id: B, expiry: S }, _)), { uri: h, approval: N };
    }, this.pair = async (r) => (this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      this.isInitialized(), await this.isValidApprove(r);
      const { id: i, relayProtocol: n, namespaces: s, sessionProperties: u } = r, a = this.client.proposal.get(i);
      let { pairingTopic: l, proposer: f, requiredNamespaces: h, optionalNamespaces: b } = a;
      l = l || "", Di(h) || (h = mg(s, "approve()"));
      const v = await this.client.core.crypto.generateKeyPair(), _ = f.publicKey, O = await this.client.core.crypto.generateSharedKey(v, _);
      l && i && (await this.client.core.pairing.updateMetadata({ topic: l, metadata: f.metadata }), await this.sendResult(i, l, { relay: { protocol: n ?? "irn" }, responderPublicKey: v }), await this.client.proposal.delete(i, ut("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: l }));
      const R = zt({ relay: { protocol: n ?? "irn" }, namespaces: s, requiredNamespaces: h, optionalNamespaces: b, pairingTopic: l, controller: { publicKey: v, metadata: this.client.metadata }, expiry: Ht(ki) }, u && { sessionProperties: u });
      await this.client.core.relayer.subscribe(O), await this.sendRequest(O, "wc_sessionSettle", R);
      const N = Mn(zt({}, R), { topic: O, pairingTopic: l, acknowledged: !1, self: R.controller, peer: { publicKey: f.publicKey, metadata: f.metadata }, controller: v });
      return await this.client.session.set(O, N), await this.setExpiry(O, Ht(ki)), { topic: O, acknowledged: () => new Promise((B) => setTimeout(() => B(this.client.session.get(O)), 500)) };
    }, this.reject = async (r) => {
      this.isInitialized(), await this.isValidReject(r);
      const { id: i, reason: n } = r, { pairingTopic: s } = this.client.proposal.get(i);
      s && (await this.sendError(i, s, n), await this.client.proposal.delete(i, ut("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      this.isInitialized(), await this.isValidUpdate(r);
      const { topic: i, namespaces: n } = r, s = await this.sendRequest(i, "wc_sessionUpdate", { namespaces: n }), { done: u, resolve: a, reject: l } = zr();
      return this.events.once(st("session_update", s), ({ error: f }) => {
        f ? l(f) : a();
      }), await this.client.session.update(i, { namespaces: n }), { acknowledged: u };
    }, this.extend = async (r) => {
      this.isInitialized(), await this.isValidExtend(r);
      const { topic: i } = r, n = await this.sendRequest(i, "wc_sessionExtend", {}), { done: s, resolve: u, reject: a } = zr();
      return this.events.once(st("session_extend", n), ({ error: l }) => {
        l ? a(l) : u();
      }), await this.setExpiry(i, Ht(ki)), { acknowledged: s };
    }, this.request = async (r) => {
      this.isInitialized(), await this.isValidRequest(r);
      const { chainId: i, request: n, topic: s, expiry: u } = r, a = await this.sendRequest(s, "wc_sessionRequest", { request: n, chainId: i }, u), { done: l, resolve: f, reject: h } = zr(u);
      this.events.once(st("session_request", a), ({ error: v, result: _ }) => {
        v ? h(v) : f(_);
      }), this.client.events.emit("session_request_sent", { topic: s, request: n, chainId: i, id: a });
      const b = await this.client.core.storage.getItem(zb);
      return sg({ id: a, topic: s, wcDeepLink: b }), await l();
    }, this.respond = async (r) => {
      this.isInitialized(), await this.isValidRespond(r);
      const { topic: i, response: n } = r, { id: s } = n;
      ur(n) ? await this.sendResult(s, i, n.result) : Gt(n) && await this.sendError(s, i, n.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      this.isInitialized(), await this.isValidPing(r);
      const { topic: i } = r;
      if (this.client.session.keys.includes(i)) {
        const n = await this.sendRequest(i, "wc_sessionPing", {}), { done: s, resolve: u, reject: a } = zr();
        this.events.once(st("session_ping", n), ({ error: l }) => {
          l ? a(l) : u();
        }), await s();
      } else
        this.client.core.pairing.pairings.keys.includes(i) && await this.client.core.pairing.ping({ topic: i });
    }, this.emit = async (r) => {
      this.isInitialized(), await this.isValidEmit(r);
      const { topic: i, event: n, chainId: s } = r;
      await this.sendRequest(i, "wc_sessionEvent", { event: n, chainId: s });
    }, this.disconnect = async (r) => {
      this.isInitialized(), await this.isValidDisconnect(r);
      const { topic: i } = r;
      if (this.client.session.keys.includes(i)) {
        const n = Vs().toString();
        let s;
        const u = (a) => {
          (a == null ? void 0 : a.id.toString()) === n && (this.client.core.relayer.events.removeListener(Xe.message_ack, u), s());
        };
        await Promise.all([new Promise((a) => {
          s = a, this.client.core.relayer.on(Xe.message_ack, u);
        }), this.sendRequest(i, "wc_sessionDelete", ut("USER_DISCONNECTED"), void 0, n)]), await this.deleteSession(i);
      } else
        await this.client.core.pairing.disconnect({ topic: i });
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((i) => Eg(i, r))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (r) => {
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
      await this.client.core.relayer.unsubscribe(r), this.client.session.delete(r, ut("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(n.publicKey) && await this.client.core.crypto.deleteKeyPair(n.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), i || this.client.core.expirer.del(r);
    }, this.deleteProposal = async (r, i) => {
      await Promise.all([this.client.proposal.delete(r, ut("USER_DISCONNECTED")), i ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, i, n = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, i), n ? Promise.resolve() : this.client.core.expirer.del(r)]), this.requestQueue.requests = this.requestQueue.requests.filter((s) => s.id !== r), n && (this.requestQueue.state = _i.idle);
    }, this.setExpiry = async (r, i) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: i }), this.client.core.expirer.set(r, i);
    }, this.setProposal = async (r, i) => {
      await this.client.proposal.set(r, i), this.client.core.expirer.set(r, i.expiry);
    }, this.setPendingSessionRequest = async (r) => {
      const i = mi.wc_sessionRequest.req.ttl, { id: n, topic: s, params: u } = r;
      await this.client.pendingRequest.set(n, { id: n, topic: s, params: u }), i && this.client.core.expirer.set(n, Ht(i));
    }, this.sendRequest = async (r, i, n, s, u) => {
      const a = yn(i, n);
      if (js() && Gb.includes(i)) {
        const h = kr(JSON.stringify(a));
        await this.client.core.verify.register({ attestationId: h });
      }
      const l = await this.client.core.crypto.encode(r, a), f = mi[i].req;
      return s && (f.ttl = s), u && (f.id = u), this.client.core.history.set(r, a), this.client.core.relayer.publish(r, l, f), a.id;
    }, this.sendResult = async (r, i, n) => {
      const s = Ks(r, n), u = await this.client.core.crypto.encode(i, s), a = await this.client.core.history.get(i, r), l = mi[a.request.method].res;
      this.client.core.relayer.publish(i, u, l), await this.client.core.history.resolve(s);
    }, this.sendError = async (r, i, n) => {
      const s = ks(r, n), u = await this.client.core.crypto.encode(i, s), a = await this.client.core.history.get(i, r), l = mi[a.request.method].res;
      this.client.core.relayer.publish(i, u, l), await this.client.core.history.resolve(s);
    }, this.cleanup = async () => {
      const r = [], i = [];
      this.client.session.getAll().forEach((n) => {
        yr(n.expiry) && r.push(n.topic);
      }), this.client.proposal.getAll().forEach((n) => {
        yr(n.expiry) && i.push(n.id);
      }), await Promise.all([...r.map((n) => this.deleteSession(n)), ...i.map((n) => this.deleteProposal(n))]);
    }, this.onRelayEventRequest = (r) => {
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
        this.isValidConnect(zt({}, i.params));
        const u = Ht(te.FIVE_MINUTES), a = zt({ id: s, pairingTopic: r, expiry: u }, n);
        await this.setProposal(s, a);
        const l = kr(JSON.stringify(i)), f = await this.getVerifyContext(l, a.proposer.metadata);
        this.client.events.emit("session_proposal", { id: s, params: a, verifyContext: f });
      } catch (u) {
        await this.sendError(s, r, u), this.client.logger.error(u);
      }
    }, this.onSessionProposeResponse = async (r, i) => {
      const { id: n } = i;
      if (ur(i)) {
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
        Gt(i) && (await this.client.proposal.delete(n, ut("USER_DISCONNECTED")), this.events.emit(st("session_connect"), { error: i.error }));
    }, this.onSessionSettleRequest = async (r, i) => {
      const { id: n, params: s } = i;
      try {
        this.isValidSessionSettleRequest(s);
        const { relay: u, controller: a, expiry: l, namespaces: f, requiredNamespaces: h, optionalNamespaces: b, sessionProperties: v, pairingTopic: _ } = i.params, O = zt({ topic: r, relay: u, expiry: l, namespaces: f, acknowledged: !0, pairingTopic: _, requiredNamespaces: h, optionalNamespaces: b, controller: a.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: a.publicKey, metadata: a.metadata } }, v && { sessionProperties: v });
        await this.sendResult(i.id, r, !0), this.events.emit(st("session_connect"), { session: O }), this.cleanupDuplicatePairings(O);
      } catch (u) {
        await this.sendError(n, r, u), this.client.logger.error(u);
      }
    }, this.onSessionSettleResponse = async (r, i) => {
      const { id: n } = i;
      ur(i) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(st("session_approve", n), {})) : Gt(i) && (await this.client.session.delete(r, ut("USER_DISCONNECTED")), this.events.emit(st("session_approve", n), { error: i.error }));
    }, this.onSessionUpdateRequest = async (r, i) => {
      const { params: n, id: s } = i;
      try {
        this.isValidUpdate(zt({ topic: r }, n)), await this.client.session.update(r, { namespaces: n.namespaces }), await this.sendResult(s, r, !0), this.client.events.emit("session_update", { id: s, topic: r, params: n });
      } catch (u) {
        await this.sendError(s, r, u), this.client.logger.error(u);
      }
    }, this.onSessionUpdateResponse = (r, i) => {
      const { id: n } = i;
      ur(i) ? this.events.emit(st("session_update", n), {}) : Gt(i) && this.events.emit(st("session_update", n), { error: i.error });
    }, this.onSessionExtendRequest = async (r, i) => {
      const { id: n } = i;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, Ht(ki)), await this.sendResult(n, r, !0), this.client.events.emit("session_extend", { id: n, topic: r });
      } catch (s) {
        await this.sendError(n, r, s), this.client.logger.error(s);
      }
    }, this.onSessionExtendResponse = (r, i) => {
      const { id: n } = i;
      ur(i) ? this.events.emit(st("session_extend", n), {}) : Gt(i) && this.events.emit(st("session_extend", n), { error: i.error });
    }, this.onSessionPingRequest = async (r, i) => {
      const { id: n } = i;
      try {
        this.isValidPing({ topic: r }), await this.sendResult(n, r, !0), this.client.events.emit("session_ping", { id: n, topic: r });
      } catch (s) {
        await this.sendError(n, r, s), this.client.logger.error(s);
      }
    }, this.onSessionPingResponse = (r, i) => {
      const { id: n } = i;
      setTimeout(() => {
        ur(i) ? this.events.emit(st("session_ping", n), {}) : Gt(i) && this.events.emit(st("session_ping", n), { error: i.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (r, i) => {
      const { id: n } = i;
      try {
        this.isValidDisconnect({ topic: r, reason: i.params }), await Promise.all([new Promise((s) => {
          this.client.core.relayer.once(Xe.publish, async () => {
            s(await this.deleteSession(r));
          });
        }), this.sendResult(n, r, !0)]), this.client.events.emit("session_delete", { id: n, topic: r });
      } catch (s) {
        this.client.logger.error(s);
      }
    }, this.onSessionRequest = async (r, i) => {
      const { id: n, params: s } = i;
      try {
        this.isValidRequest(zt({ topic: r }, s)), await this.setPendingSessionRequest({ id: n, topic: r, params: s }), this.addRequestToQueue({ id: n, topic: r, params: s }), await this.processRequestQueue();
      } catch (u) {
        await this.sendError(n, r, u), this.client.logger.error(u);
      }
    }, this.onSessionRequestResponse = (r, i) => {
      const { id: n } = i;
      ur(i) ? this.events.emit(st("session_request", n), { result: i.result }) : Gt(i) && this.events.emit(st("session_request", n), { error: i.error });
    }, this.onSessionEventRequest = async (r, i) => {
      const { id: n, params: s } = i;
      try {
        this.isValidEmit(zt({ topic: r }, s)), this.client.events.emit("session_event", { id: n, topic: r, params: s });
      } catch (u) {
        await this.sendError(n, r, u), this.client.logger.error(u);
      }
    }, this.addRequestToQueue = (r) => {
      this.requestQueue.requests.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.requestQueue.state = _i.idle, this.processRequestQueue();
      }, te.toMiliseconds(this.requestQueueDelay));
    }, this.processRequestQueue = async () => {
      if (this.requestQueue.state === _i.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const r = this.requestQueue.requests[0];
      if (!r) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        const { id: i, topic: n, params: s } = r, u = kr(JSON.stringify({ id: i, params: s })), a = this.client.session.get(n), l = await this.getVerifyContext(u, a.peer.metadata);
        this.requestQueue.state = _i.active, this.client.events.emit("session_request", { id: i, topic: n, params: s, verifyContext: l });
      } catch (i) {
        this.client.logger.error(i);
      }
    }, this.isValidConnect = async (r) => {
      if (!Rt(r)) {
        const { message: l } = X("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(l);
      }
      const { pairingTopic: i, requiredNamespaces: n, optionalNamespaces: s, sessionProperties: u, relays: a } = r;
      if (Ot(i) || await this.isValidPairingTopic(i), !Lg(a, !0)) {
        const { message: l } = X("MISSING_OR_INVALID", `connect() relays: ${a}`);
        throw new Error(l);
      }
      !Ot(n) && Di(n) !== 0 && this.validateNamespaces(n, "requiredNamespaces"), !Ot(s) && Di(s) !== 0 && this.validateNamespaces(s, "optionalNamespaces"), Ot(u) || this.validateSessionProps(u, "sessionProperties");
    }, this.validateNamespaces = (r, i) => {
      const n = Ng(r, "connect()", i);
      if (n)
        throw new Error(n.message);
    }, this.isValidApprove = async (r) => {
      if (!Rt(r))
        throw new Error(X("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: i, namespaces: n, relayProtocol: s, sessionProperties: u } = r;
      await this.isValidProposalId(i);
      const a = this.client.proposal.get(i), l = Yi(n, "approve()");
      if (l)
        throw new Error(l.message);
      const f = Ea(a.requiredNamespaces, n, "approve()");
      if (f)
        throw new Error(f.message);
      if (!lt(s, !0)) {
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
      if (await this.isValidProposalId(i), !$g(n)) {
        const { message: s } = X("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(n)}`);
        throw new Error(s);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!Rt(r)) {
        const { message: f } = X("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(f);
      }
      const { relay: i, controller: n, namespaces: s, expiry: u } = r;
      if (!gu(i)) {
        const { message: f } = X("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(f);
      }
      const a = Ig(n, "onSessionSettleRequest()");
      if (a)
        throw new Error(a.message);
      const l = Yi(s, "onSessionSettleRequest()");
      if (l)
        throw new Error(l.message);
      if (yr(u)) {
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
      const s = this.client.session.get(i), u = Yi(n, "update()");
      if (u)
        throw new Error(u.message);
      const a = Ea(s.requiredNamespaces, n, "update()");
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
      if (!wa(a, s)) {
        const { message: l } = X("MISSING_OR_INVALID", `request() chainId: ${s}`);
        throw new Error(l);
      }
      if (!Fg(n)) {
        const { message: l } = X("MISSING_OR_INVALID", `request() ${JSON.stringify(n)}`);
        throw new Error(l);
      }
      if (!Bg(a, s, n.method)) {
        const { message: l } = X("MISSING_OR_INVALID", `request() method: ${n.method}`);
        throw new Error(l);
      }
      if (u && !Kg(u, Fn)) {
        const { message: l } = X("MISSING_OR_INVALID", `request() expiry: ${u}. Expiry must be a number (in seconds) between ${Fn.min} and ${Fn.max}`);
        throw new Error(l);
      }
    }, this.isValidRespond = async (r) => {
      if (!Rt(r)) {
        const { message: s } = X("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(s);
      }
      const { topic: i, response: n } = r;
      if (await this.isValidSessionTopic(i), !Mg(n)) {
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
      if (!wa(u, s)) {
        const { message: a } = X("MISSING_OR_INVALID", `emit() chainId: ${s}`);
        throw new Error(a);
      }
      if (!jg(n)) {
        const { message: a } = X("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(n)}`);
        throw new Error(a);
      }
      if (!qg(u, s, n.name)) {
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
      const n = { verified: { verifyUrl: i.verifyUrl || "", validation: "UNKNOWN", origin: i.url || "" } };
      try {
        const s = await this.client.core.verify.resolve({ attestationId: r, verifyUrl: i.verifyUrl });
        s && (n.verified.origin = s, n.verified.validation = s === i.url ? "VALID" : "INVALID");
      } catch (s) {
        this.client.logger.error(s);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(n)}`), n;
    }, this.validateSessionProps = (r, i) => {
      Object.values(r).forEach((n) => {
        if (!lt(n, !1)) {
          const { message: s } = X("MISSING_OR_INVALID", `${i} must be in Record<string, string> format. Received: ${JSON.stringify(n)}`);
          throw new Error(s);
        }
      });
    };
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = X("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(Xe.message, async (t) => {
      const { topic: r, message: i } = t;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(i)))
        return;
      const n = await this.client.core.crypto.decode(r, i);
      Ws(n) ? (this.client.core.history.set(r, n), this.onRelayEventRequest({ topic: r, payload: n })) : bn(n) ? (await this.client.core.history.resolve(n), await this.onRelayEventResponse({ topic: r, payload: n }), this.client.core.history.delete(r, n.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: n });
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(Vt.expired, async (t) => {
      const { topic: r, id: i } = du(t.target);
      if (i && this.client.pendingRequest.keys.includes(i))
        return await this.deletePendingSessionRequest(i, X("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession(r, !0), this.client.events.emit("session_expire", { topic: r })) : i && (await this.deleteProposal(i, !0), this.client.events.emit("proposal_expire", { id: i }));
    });
  }
  isValidPairingTopic(t) {
    if (!lt(t, !1)) {
      const { message: r } = X("MISSING_OR_INVALID", `pairing topic should be a string: ${t}`);
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(t)) {
      const { message: r } = X("NO_MATCHING_KEY", `pairing topic doesn't exist: ${t}`);
      throw new Error(r);
    }
    if (yr(this.client.core.pairing.pairings.get(t).expiry)) {
      const { message: r } = X("EXPIRED", `pairing topic: ${t}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(t) {
    if (!lt(t, !1)) {
      const { message: r } = X("MISSING_OR_INVALID", `session topic should be a string: ${t}`);
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(t)) {
      const { message: r } = X("NO_MATCHING_KEY", `session topic doesn't exist: ${t}`);
      throw new Error(r);
    }
    if (yr(this.client.session.get(t).expiry)) {
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
    else if (lt(t, !1)) {
      const { message: r } = X("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${t}`);
      throw new Error(r);
    } else {
      const { message: r } = X("MISSING_OR_INVALID", `session or pairing topic should be a string: ${t}`);
      throw new Error(r);
    }
  }
  async isValidProposalId(t) {
    if (!Ug(t)) {
      const { message: r } = X("MISSING_OR_INVALID", `proposal id should be a number: ${t}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(t)) {
      const { message: r } = X("NO_MATCHING_KEY", `proposal id doesn't exist: ${t}`);
      throw new Error(r);
    }
    if (yr(this.client.proposal.get(t).expiry)) {
      await this.deleteProposal(t);
      const { message: r } = X("EXPIRED", `proposal id: ${t}`);
      throw new Error(r);
    }
  }
}
class t1 extends mn {
  constructor(t, r) {
    super(t, r, Vb, Gs), this.core = t, this.logger = r;
  }
}
class r1 extends mn {
  constructor(t, r) {
    super(t, r, kb, Gs), this.core = t, this.logger = r;
  }
}
class i1 extends mn {
  constructor(t, r) {
    super(t, r, Hb, Gs, (i) => i.id), this.core = t, this.logger = r;
  }
}
let n1 = class ju extends rh {
  constructor(t) {
    super(t), this.protocol = $u, this.version = Fu, this.name = $n.name, this.events = new Xt.EventEmitter(), this.on = (i, n) => this.events.on(i, n), this.once = (i, n) => this.events.once(i, n), this.off = (i, n) => this.events.off(i, n), this.removeListener = (i, n) => this.events.removeListener(i, n), this.removeAllListeners = (i) => this.events.removeAllListeners(i), this.connect = async (i) => {
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
    }, this.name = (t == null ? void 0 : t.name) || $n.name, this.metadata = (t == null ? void 0 : t.metadata) || Qp();
    const r = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : Ce.pino(Ce.getDefaultLoggerOptions({ level: (t == null ? void 0 : t.logger) || $n.logger }));
    this.core = (t == null ? void 0 : t.core) || new qb(t), this.logger = Ce.generateChildLogger(r, this.name), this.session = new r1(this.core, this.logger), this.proposal = new t1(this.core, this.logger), this.pendingRequest = new i1(this.core, this.logger), this.engine = new e1(this);
  }
  static async init(t) {
    const r = new ju(t);
    return await r.initialize(), r;
  }
  get context() {
    return Ce.getLoggerContext(this.logger);
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
var s1 = Object.defineProperty, o1 = Object.defineProperties, a1 = Object.getOwnPropertyDescriptors, Xa = Object.getOwnPropertySymbols, c1 = Object.prototype.hasOwnProperty, u1 = Object.prototype.propertyIsEnumerable, Qa = (e, t, r) => t in e ? s1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, l1 = (e, t) => {
  for (var r in t || (t = {}))
    c1.call(t, r) && Qa(e, r, t[r]);
  if (Xa)
    for (var r of Xa(t))
      u1.call(t, r) && Qa(e, r, t[r]);
  return e;
}, f1 = (e, t) => o1(e, a1(t)), Ys = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
}, ze = (e, t, r) => (Ys(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Ar = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, nn = (e, t, r, i) => (Ys(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r), _t = (e, t, r) => (Ys(e, t, "access private method"), r), Tr, Vr, wi, ct, gs, Bu, wt, Dt, ys, Za;
let h1 = class {
  constructor(t) {
    Ar(this, gs), Ar(this, wt), Ar(this, ys), Ar(this, Tr, void 0), Ar(this, Vr, void 0), Ar(this, wi, void 0), Ar(this, ct, void 0), nn(this, Tr, t), nn(this, Vr, _t(this, gs, Bu).call(this)), _t(this, wt, Dt).call(this);
  }
  async connect(t) {
    const { requiredNamespaces: r, optionalNamespaces: i } = t;
    return new Promise(async (n, s) => {
      await _t(this, wt, Dt).call(this);
      const u = ze(this, Vr).subscribeModal((f) => {
        f.open || (u(), s(new Error("Modal closed")));
      }), { uri: a, approval: l } = await ze(this, ct).connect(t);
      if (a) {
        const f = /* @__PURE__ */ new Set();
        r && Object.values(r).forEach(({ chains: h }) => {
          h && h.forEach((b) => f.add(b));
        }), i && Object.values(i).forEach(({ chains: h }) => {
          h && h.forEach((b) => f.add(b));
        }), await ze(this, Vr).openModal({ uri: a, chains: Array.from(f) });
      }
      try {
        const f = await l();
        n(f);
      } catch (f) {
        s(f);
      } finally {
        u(), ze(this, Vr).closeModal();
      }
    });
  }
  async disconnect(t) {
    await _t(this, wt, Dt).call(this), await ze(this, ct).disconnect(t);
  }
  async request(t) {
    return await _t(this, wt, Dt).call(this), await ze(this, ct).request(t);
  }
  async getSessions() {
    return await _t(this, wt, Dt).call(this), ze(this, ct).session.getAll();
  }
  async getSession() {
    return await _t(this, wt, Dt).call(this), ze(this, ct).session.getAll().at(-1);
  }
  async onSessionEvent(t) {
    await _t(this, wt, Dt).call(this), ze(this, ct).on("session_event", t);
  }
  async offSessionEvent(t) {
    await _t(this, wt, Dt).call(this), ze(this, ct).off("session_event", t);
  }
  async onSessionUpdate(t) {
    await _t(this, wt, Dt).call(this), ze(this, ct).on("session_update", t);
  }
  async offSessionUpdate(t) {
    await _t(this, wt, Dt).call(this), ze(this, ct).off("session_update", t);
  }
  async onSessionDelete(t) {
    await _t(this, wt, Dt).call(this), ze(this, ct).on("session_delete", t);
  }
  async offSessionDelete(t) {
    await _t(this, wt, Dt).call(this), ze(this, ct).off("session_delete", t);
  }
  async onSessionExpire(t) {
    await _t(this, wt, Dt).call(this), ze(this, ct).on("session_expire", t);
  }
  async offSessionExpire(t) {
    await _t(this, wt, Dt).call(this), ze(this, ct).off("session_expire", t);
  }
};
Tr = /* @__PURE__ */ new WeakMap(), Vr = /* @__PURE__ */ new WeakMap(), wi = /* @__PURE__ */ new WeakMap(), ct = /* @__PURE__ */ new WeakMap(), gs = /* @__PURE__ */ new WeakSet(), Bu = function() {
  const { modalOptions: e, projectId: t } = ze(this, Tr);
  return new Gl(f1(l1({}, e), { projectId: t }));
}, wt = /* @__PURE__ */ new WeakSet(), Dt = async function() {
  return ze(this, ct) ? !0 : (!ze(this, wi) && typeof window < "u" && nn(this, wi, _t(this, ys, Za).call(this)), ze(this, wi));
}, ys = /* @__PURE__ */ new WeakSet(), Za = async function() {
  nn(this, ct, await n1.init({ metadata: ze(this, Tr).metadata, projectId: ze(this, Tr).projectId, relayUrl: ze(this, Tr).relayUrl }));
  const e = await ze(this, ct).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", e);
  } catch {
    console.info("Unable to set client id");
  }
};
function d1(e) {
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
const bs = d1();
let Ei;
function p1(e) {
  Ei = new h1(e);
}
async function Jt() {
  return new Promise((e) => {
    if (Ei)
      e(Ei);
    else {
      const t = setInterval(() => {
        Ei && (clearInterval(t), e(Ei));
      }, 200);
    }
  });
}
function g1(e) {
  return Ct(() => {
    p1(e);
  }, []), null;
}
const y1 = Sl(g1);
function qu() {
  const [e, t] = Lt(void 0), [r, i] = Lt(void 0), [n, s] = Lt(!1);
  return { data: e, error: r, loading: n, setData: t, setError: i, setLoading: s };
}
function b1(e) {
  const { data: t, error: r, loading: i, setData: n, setError: s, setLoading: u } = qu();
  async function a(l) {
    try {
      u(!0), s(void 0);
      const f = await (await Jt()).connect(l ?? e);
      return n(f), bs.emit("session_change"), f;
    } catch (f) {
      throw s(f), f;
    } finally {
      u(!1);
    }
  }
  return { data: t, error: r, loading: i, connect: a };
}
function v1(e) {
  Ct(() => (Jt().then((t) => {
    t.onSessionDelete(e);
  }), () => {
    Jt().then((t) => {
      t.offSessionDelete(e);
    });
  }), [e]);
}
function Js(e) {
  Ct(() => (Jt().then((t) => {
    t.onSessionEvent(e);
  }), () => {
    Jt().then((t) => {
      t.offSessionEvent(e);
    });
  }), [e]);
}
function m1(e) {
  Ct(() => (Jt().then((t) => {
    t.onSessionExpire(e);
  }), () => {
    Jt().then((t) => {
      t.offSessionExpire(e);
    });
  }), [e]);
}
function _1(e) {
  Ct(() => (Jt().then((t) => {
    t.onSessionUpdate(e);
  }), () => {
    Jt().then((t) => {
      t.offSessionUpdate(e);
    });
  }), [e]);
}
function ei(e) {
  const { data: t, error: r, loading: i, setData: n, setError: s, setLoading: u } = qu();
  async function a(l) {
    try {
      u(!0), s(void 0);
      const f = await (await Jt()).request(l ?? e);
      return n(f), f;
    } catch (f) {
      throw s(f), f;
    } finally {
      u(!1);
    }
  }
  return { data: t, error: r, loading: i, request: a };
}
var w1 = Object.defineProperty, E1 = Object.defineProperties, S1 = Object.getOwnPropertyDescriptors, ec = Object.getOwnPropertySymbols, D1 = Object.prototype.hasOwnProperty, O1 = Object.prototype.propertyIsEnumerable, tc = (e, t, r) => t in e ? w1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, x1 = (e, t) => {
  for (var r in t || (t = {}))
    D1.call(t, r) && tc(e, r, t[r]);
  if (ec)
    for (var r of ec(t))
      O1.call(t, r) && tc(e, r, t[r]);
  return e;
}, I1 = (e, t) => E1(e, S1(t));
function ti() {
  const [e, t] = Lt(void 0);
  return v1((r) => {
    r.topic === (e == null ? void 0 : e.topic) && t(void 0);
  }), _1((r) => {
    if (e && r.topic === (e == null ? void 0 : e.topic)) {
      const { namespaces: i } = r.params, n = I1(x1({}, e), { namespaces: i });
      t(n);
    }
  }), m1((r) => {
    e && r.topic === (e == null ? void 0 : e.topic) && t(void 0);
  }), Ct(() => {
    async function r() {
      const i = await (await Jt()).getSession();
      t(i);
    }
    return r(), bs.on("session_change", r), () => {
      bs.off("session_change", r);
    };
  }, []), e;
}
const R1 = [
  // aztec methods
  "aztec_connect",
  "aztec_disconnect",
  "aztec_getAccountPublicKey",
  "aztec_getSpendingPublicKey",
  "aztec_requestProofs"
], zu = ["aztec:1337"], Vu = [
  // aleo methods
  "aleo_connect",
  "aleo_disconnect",
  "aleo_getSelectedAccount",
  "aleo_transfer",
  "aleo_deployProgram",
  "aleo_getBalance",
  "aleo_executeProgram",
  "aleo_getRecords"
], Xs = ["aleo:1"], vs = ["chainChanged", "accountsChanged", "balanceChanged", "recordsChanged"], A1 = "f0aaeffe71b636da453fce042d79d723", rc = "https://walletconnect.puzzle.online/", C1 = {
  standaloneChains: zu.concat(Xs),
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
        universal: rc
      }
    }
  ],
  desktopWallets: [
    {
      id: "puzzle",
      name: "Puzzle Wallet",
      links: {
        native: "",
        universal: rc
      }
    }
  ],
  walletImages: {
    // Override manual wallet image
    puzzle: "https://i.imgur.com/p9tHaFC.png"
  }
}, Ev = {
  requiredNamespaces: {
    aztec: {
      methods: R1,
      chains: zu,
      events: vs
    },
    aleo: {
      methods: Vu,
      chains: Xs,
      events: vs
    }
  }
}, Sv = ({ dAppName: e, dAppDescription: t, dAppUrl: r, dAppIconURL: i }) => /* @__PURE__ */ Gn.jsx(
  y1,
  {
    projectId: A1,
    metadata: {
      name: e,
      description: t,
      url: r,
      icons: [
        i
      ]
    },
    modalOptions: { ...C1 }
  }
), Dv = ({ children: e }) => /* @__PURE__ */ Gn.jsx(Gn.Fragment, { children: e }), ic = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), i = (l, f) => {
    const h = typeof l == "function" ? l(t) : l;
    if (!Object.is(h, t)) {
      const b = t;
      t = f ?? typeof h != "object" ? h : Object.assign({}, t, h), r.forEach((v) => v(t, b));
    }
  }, n = () => t, a = { setState: i, getState: n, subscribe: (l) => (r.add(l), () => r.delete(l)), destroy: () => {
    r.clear();
  } };
  return t = e(i, n, a), a;
}, T1 = (e) => e ? ic(e) : ic;
var ms = { exports: {} }, jn = {}, Wi = { exports: {} }, Bn = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nc;
function P1() {
  if (nc)
    return Bn;
  nc = 1;
  var e = Yr;
  function t(b, v) {
    return b === v && (b !== 0 || 1 / b === 1 / v) || b !== b && v !== v;
  }
  var r = typeof Object.is == "function" ? Object.is : t, i = e.useState, n = e.useEffect, s = e.useLayoutEffect, u = e.useDebugValue;
  function a(b, v) {
    var _ = v(), O = i({ inst: { value: _, getSnapshot: v } }), R = O[0].inst, N = O[1];
    return s(function() {
      R.value = _, R.getSnapshot = v, l(R) && N({ inst: R });
    }, [b, _, v]), n(function() {
      return l(R) && N({ inst: R }), b(function() {
        l(R) && N({ inst: R });
      });
    }, [b]), u(_), _;
  }
  function l(b) {
    var v = b.getSnapshot;
    b = b.value;
    try {
      var _ = v();
      return !r(b, _);
    } catch {
      return !0;
    }
  }
  function f(b, v) {
    return v();
  }
  var h = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? f : a;
  return Bn.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : h, Bn;
}
var qn = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sc;
function N1() {
  return sc || (sc = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Yr, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(x) {
      {
        for (var g = arguments.length, w = new Array(g > 1 ? g - 1 : 0), d = 1; d < g; d++)
          w[d - 1] = arguments[d];
        i("error", x, w);
      }
    }
    function i(x, g, w) {
      {
        var d = t.ReactDebugCurrentFrame, o = d.getStackAddendum();
        o !== "" && (g += "%s", w = w.concat([o]));
        var p = w.map(function(L) {
          return String(L);
        });
        p.unshift("Warning: " + g), Function.prototype.apply.call(console[x], console, p);
      }
    }
    function n(x, g) {
      return x === g && (x !== 0 || 1 / x === 1 / g) || x !== x && g !== g;
    }
    var s = typeof Object.is == "function" ? Object.is : n, u = e.useState, a = e.useEffect, l = e.useLayoutEffect, f = e.useDebugValue, h = !1, b = !1;
    function v(x, g, w) {
      h || e.startTransition !== void 0 && (h = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var d = g();
      if (!b) {
        var o = g();
        s(d, o) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), b = !0);
      }
      var p = u({
        inst: {
          value: d,
          getSnapshot: g
        }
      }), L = p[0].inst, U = p[1];
      return l(function() {
        L.value = d, L.getSnapshot = g, _(L) && U({
          inst: L
        });
      }, [x, d, g]), a(function() {
        _(L) && U({
          inst: L
        });
        var $ = function() {
          _(L) && U({
            inst: L
          });
        };
        return x($);
      }, [x]), f(d), d;
    }
    function _(x) {
      var g = x.getSnapshot, w = x.value;
      try {
        var d = g();
        return !s(w, d);
      } catch {
        return !0;
      }
    }
    function O(x, g, w) {
      return g();
    }
    var R = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", N = !R, B = N ? O : v, S = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : B;
    qn.useSyncExternalStore = S, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), qn;
}
var oc;
function Ku() {
  return oc || (oc = 1, process.env.NODE_ENV === "production" ? Wi.exports = P1() : Wi.exports = N1()), Wi.exports;
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
var ac;
function L1() {
  if (ac)
    return jn;
  ac = 1;
  var e = Yr, t = Ku();
  function r(f, h) {
    return f === h && (f !== 0 || 1 / f === 1 / h) || f !== f && h !== h;
  }
  var i = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, s = e.useRef, u = e.useEffect, a = e.useMemo, l = e.useDebugValue;
  return jn.useSyncExternalStoreWithSelector = function(f, h, b, v, _) {
    var O = s(null);
    if (O.current === null) {
      var R = { hasValue: !1, value: null };
      O.current = R;
    } else
      R = O.current;
    O = a(function() {
      function B(d) {
        if (!S) {
          if (S = !0, x = d, d = v(d), _ !== void 0 && R.hasValue) {
            var o = R.value;
            if (_(o, d))
              return g = o;
          }
          return g = d;
        }
        if (o = g, i(x, d))
          return o;
        var p = v(d);
        return _ !== void 0 && _(o, p) ? o : (x = d, g = p);
      }
      var S = !1, x, g, w = b === void 0 ? null : b;
      return [function() {
        return B(h());
      }, w === null ? void 0 : function() {
        return B(w());
      }];
    }, [h, b, v, _]);
    var N = n(f, O[0], O[1]);
    return u(function() {
      R.hasValue = !0, R.value = N;
    }, [N]), l(N), N;
  }, jn;
}
var zn = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cc;
function U1() {
  return cc || (cc = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Yr, t = Ku();
    function r(h, b) {
      return h === b && (h !== 0 || 1 / h === 1 / b) || h !== h && b !== b;
    }
    var i = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, s = e.useRef, u = e.useEffect, a = e.useMemo, l = e.useDebugValue;
    function f(h, b, v, _, O) {
      var R = s(null), N;
      R.current === null ? (N = {
        hasValue: !1,
        value: null
      }, R.current = N) : N = R.current;
      var B = a(function() {
        var w = !1, d, o, p = function(F) {
          if (!w) {
            w = !0, d = F;
            var q = _(F);
            if (O !== void 0 && N.hasValue) {
              var E = N.value;
              if (O(E, q))
                return o = E, E;
            }
            return o = q, q;
          }
          var C = d, G = o;
          if (i(C, F))
            return G;
          var V = _(F);
          return O !== void 0 && O(G, V) ? G : (d = F, o = V, V);
        }, L = v === void 0 ? null : v, U = function() {
          return p(b());
        }, $ = L === null ? void 0 : function() {
          return p(L());
        };
        return [U, $];
      }, [b, v, _, O]), S = B[0], x = B[1], g = n(h, S, x);
      return u(function() {
        N.hasValue = !0, N.value = g;
      }, [g]), l(g), g;
    }
    zn.useSyncExternalStoreWithSelector = f, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), zn;
}
process.env.NODE_ENV === "production" ? ms.exports = L1() : ms.exports = U1();
var $1 = ms.exports;
const F1 = /* @__PURE__ */ Os($1), { useSyncExternalStoreWithSelector: M1 } = F1;
function j1(e, t = e.getState, r) {
  const i = M1(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    r
  );
  return Dl(i), i;
}
const uc = (e) => {
  const t = typeof e == "function" ? T1(e) : e, r = (i, n) => j1(t, i, n);
  return Object.assign(r, t), r;
}, B1 = (e) => e ? uc(e) : uc;
function pt(e) {
  for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    r[i - 1] = arguments[i];
  if (process.env.NODE_ENV !== "production") {
    var n = G1[e], s = n ? typeof n == "function" ? n.apply(null, r) : n : "unknown error nr: " + e;
    throw Error("[Immer] " + s);
  }
  throw Error("[Immer] minified error nr: " + e + (r.length ? " " + r.map(function(u) {
    return "'" + u + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function Hr(e) {
  return !!e && !!e[Ut];
}
function Nr(e) {
  var t;
  return !!e && (function(r) {
    if (!r || typeof r != "object")
      return !1;
    var i = Object.getPrototypeOf(r);
    if (i === null)
      return !0;
    var n = Object.hasOwnProperty.call(i, "constructor") && i.constructor;
    return n === Object || typeof n == "function" && Function.toString.call(n) === Y1;
  }(e) || Array.isArray(e) || !!e[bc] || !!(!((t = e.constructor) === null || t === void 0) && t[bc]) || Qs(e) || Zs(e));
}
function Ri(e, t, r) {
  r === void 0 && (r = !1), ri(e) === 0 ? (r ? Object.keys : no)(e).forEach(function(i) {
    r && typeof i == "symbol" || t(i, e[i], e);
  }) : e.forEach(function(i, n) {
    return t(n, i, e);
  });
}
function ri(e) {
  var t = e[Ut];
  return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : Qs(e) ? 2 : Zs(e) ? 3 : 0;
}
function _s(e, t) {
  return ri(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function q1(e, t) {
  return ri(e) === 2 ? e.get(t) : e[t];
}
function ku(e, t, r) {
  var i = ri(e);
  i === 2 ? e.set(t, r) : i === 3 ? e.add(r) : e[t] = r;
}
function z1(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function Qs(e) {
  return W1 && e instanceof Map;
}
function Zs(e) {
  return H1 && e instanceof Set;
}
function Cr(e) {
  return e.o || e.t;
}
function eo(e) {
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  var t = J1(e);
  delete t[Ut];
  for (var r = no(t), i = 0; i < r.length; i++) {
    var n = r[i], s = t[n];
    s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (t[n] = { configurable: !0, writable: !0, enumerable: s.enumerable, value: e[n] });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function to(e, t) {
  return t === void 0 && (t = !1), ro(e) || Hr(e) || !Nr(e) || (ri(e) > 1 && (e.set = e.add = e.clear = e.delete = V1), Object.freeze(e), t && Ri(e, function(r, i) {
    return to(i, !0);
  }, !0)), e;
}
function V1() {
  pt(2);
}
function ro(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function sr(e) {
  var t = X1[e];
  return t || pt(18, e), t;
}
function lc() {
  return process.env.NODE_ENV === "production" || Gr || pt(0), Gr;
}
function Vn(e, t) {
  t && (sr("Patches"), e.u = [], e.s = [], e.v = t);
}
function sn(e) {
  ws(e), e.p.forEach(K1), e.p = null;
}
function ws(e) {
  e === Gr && (Gr = e.l);
}
function fc(e) {
  return Gr = { p: [], l: Gr, h: e, m: !0, _: 0 };
}
function K1(e) {
  var t = e[Ut];
  t.i === 0 || t.i === 1 ? t.j() : t.O = !0;
}
function Kn(e, t) {
  t._ = t.p.length;
  var r = t.p[0], i = e !== void 0 && e !== r;
  return t.h.g || sr("ES5").S(t, e, i), i ? (r[Ut].P && (sn(t), pt(4)), Nr(e) && (e = on(t, e), t.l || an(t, e)), t.u && sr("Patches").M(r[Ut].t, e, t.u, t.s)) : e = on(t, r, []), sn(t), t.u && t.v(t.u, t.s), e !== Wu ? e : void 0;
}
function on(e, t, r) {
  if (ro(t))
    return t;
  var i = t[Ut];
  if (!i)
    return Ri(t, function(a, l) {
      return hc(e, i, t, a, l, r);
    }, !0), t;
  if (i.A !== e)
    return t;
  if (!i.P)
    return an(e, i.t, !0), i.t;
  if (!i.I) {
    i.I = !0, i.A._--;
    var n = i.i === 4 || i.i === 5 ? i.o = eo(i.k) : i.o, s = n, u = !1;
    i.i === 3 && (s = new Set(n), n.clear(), u = !0), Ri(s, function(a, l) {
      return hc(e, i, n, a, l, r, u);
    }), an(e, n, !1), r && e.u && sr("Patches").N(i, r, e.u, e.s);
  }
  return i.o;
}
function hc(e, t, r, i, n, s, u) {
  if (process.env.NODE_ENV !== "production" && n === r && pt(5), Hr(n)) {
    var a = on(e, n, s && t && t.i !== 3 && !_s(t.R, i) ? s.concat(i) : void 0);
    if (ku(r, i, a), !Hr(a))
      return;
    e.m = !1;
  } else
    u && r.add(n);
  if (Nr(n) && !ro(n)) {
    if (!e.h.D && e._ < 1)
      return;
    on(e, n), t && t.A.l || an(e, n);
  }
}
function an(e, t, r) {
  r === void 0 && (r = !1), !e.l && e.h.D && e.m && to(t, r);
}
function kn(e, t) {
  var r = e[Ut];
  return (r ? Cr(r) : e)[t];
}
function dc(e, t) {
  if (t in e)
    for (var r = Object.getPrototypeOf(e); r; ) {
      var i = Object.getOwnPropertyDescriptor(r, t);
      if (i)
        return i;
      r = Object.getPrototypeOf(r);
    }
}
function Es(e) {
  e.P || (e.P = !0, e.l && Es(e.l));
}
function Wn(e) {
  e.o || (e.o = eo(e.t));
}
function Ss(e, t, r) {
  var i = Qs(t) ? sr("MapSet").F(t, r) : Zs(t) ? sr("MapSet").T(t, r) : e.g ? function(n, s) {
    var u = Array.isArray(n), a = { i: u ? 1 : 0, A: s ? s.A : lc(), P: !1, I: !1, R: {}, l: s, t: n, k: null, o: null, j: null, C: !1 }, l = a, f = Ds;
    u && (l = [a], f = Si);
    var h = Proxy.revocable(l, f), b = h.revoke, v = h.proxy;
    return a.k = v, a.j = b, v;
  }(t, r) : sr("ES5").J(t, r);
  return (r ? r.A : lc()).p.push(i), i;
}
function k1(e) {
  return Hr(e) || pt(22, e), function t(r) {
    if (!Nr(r))
      return r;
    var i, n = r[Ut], s = ri(r);
    if (n) {
      if (!n.P && (n.i < 4 || !sr("ES5").K(n)))
        return n.t;
      n.I = !0, i = pc(r, s), n.I = !1;
    } else
      i = pc(r, s);
    return Ri(i, function(u, a) {
      n && q1(n.t, u) === a || ku(i, u, t(a));
    }), s === 3 ? new Set(i) : i;
  }(e);
}
function pc(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return eo(e);
}
var gc, Gr, io = typeof Symbol < "u" && typeof Symbol("x") == "symbol", W1 = typeof Map < "u", H1 = typeof Set < "u", yc = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", Wu = io ? Symbol.for("immer-nothing") : ((gc = {})["immer-nothing"] = !0, gc), bc = io ? Symbol.for("immer-draftable") : "__$immer_draftable", Ut = io ? Symbol.for("immer-state") : "__$immer_state", G1 = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(e) {
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
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" }, Y1 = "" + Object.prototype.constructor, no = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Object.getOwnPropertyNames, J1 = Object.getOwnPropertyDescriptors || function(e) {
  var t = {};
  return no(e).forEach(function(r) {
    t[r] = Object.getOwnPropertyDescriptor(e, r);
  }), t;
}, X1 = {}, Ds = { get: function(e, t) {
  if (t === Ut)
    return e;
  var r = Cr(e);
  if (!_s(r, t))
    return function(n, s, u) {
      var a, l = dc(s, u);
      return l ? "value" in l ? l.value : (a = l.get) === null || a === void 0 ? void 0 : a.call(n.k) : void 0;
    }(e, r, t);
  var i = r[t];
  return e.I || !Nr(i) ? i : i === kn(e.t, t) ? (Wn(e), e.o[t] = Ss(e.A.h, i, e)) : i;
}, has: function(e, t) {
  return t in Cr(e);
}, ownKeys: function(e) {
  return Reflect.ownKeys(Cr(e));
}, set: function(e, t, r) {
  var i = dc(Cr(e), t);
  if (i != null && i.set)
    return i.set.call(e.k, r), !0;
  if (!e.P) {
    var n = kn(Cr(e), t), s = n == null ? void 0 : n[Ut];
    if (s && s.t === r)
      return e.o[t] = r, e.R[t] = !1, !0;
    if (z1(r, n) && (r !== void 0 || _s(e.t, t)))
      return !0;
    Wn(e), Es(e);
  }
  return e.o[t] === r && (r !== void 0 || t in e.o) || Number.isNaN(r) && Number.isNaN(e.o[t]) || (e.o[t] = r, e.R[t] = !0), !0;
}, deleteProperty: function(e, t) {
  return kn(e.t, t) !== void 0 || t in e.t ? (e.R[t] = !1, Wn(e), Es(e)) : delete e.R[t], e.o && delete e.o[t], !0;
}, getOwnPropertyDescriptor: function(e, t) {
  var r = Cr(e), i = Reflect.getOwnPropertyDescriptor(r, t);
  return i && { writable: !0, configurable: e.i !== 1 || t !== "length", enumerable: i.enumerable, value: r[t] };
}, defineProperty: function() {
  pt(11);
}, getPrototypeOf: function(e) {
  return Object.getPrototypeOf(e.t);
}, setPrototypeOf: function() {
  pt(12);
} }, Si = {};
Ri(Ds, function(e, t) {
  Si[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
}), Si.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && pt(13), Si.set.call(this, e, t, void 0);
}, Si.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && pt(14), Ds.set.call(this, e[0], t, r, e[0]);
};
var Q1 = function() {
  function e(r) {
    var i = this;
    this.g = yc, this.D = !0, this.produce = function(n, s, u) {
      if (typeof n == "function" && typeof s != "function") {
        var a = s;
        s = n;
        var l = i;
        return function(R) {
          var N = this;
          R === void 0 && (R = a);
          for (var B = arguments.length, S = Array(B > 1 ? B - 1 : 0), x = 1; x < B; x++)
            S[x - 1] = arguments[x];
          return l.produce(R, function(g) {
            var w;
            return (w = s).call.apply(w, [N, g].concat(S));
          });
        };
      }
      var f;
      if (typeof s != "function" && pt(6), u !== void 0 && typeof u != "function" && pt(7), Nr(n)) {
        var h = fc(i), b = Ss(i, n, void 0), v = !0;
        try {
          f = s(b), v = !1;
        } finally {
          v ? sn(h) : ws(h);
        }
        return typeof Promise < "u" && f instanceof Promise ? f.then(function(R) {
          return Vn(h, u), Kn(R, h);
        }, function(R) {
          throw sn(h), R;
        }) : (Vn(h, u), Kn(f, h));
      }
      if (!n || typeof n != "object") {
        if ((f = s(n)) === void 0 && (f = n), f === Wu && (f = void 0), i.D && to(f, !0), u) {
          var _ = [], O = [];
          sr("Patches").M(n, f, _, O), u(_, O);
        }
        return f;
      }
      pt(21, n);
    }, this.produceWithPatches = function(n, s) {
      if (typeof n == "function")
        return function(f) {
          for (var h = arguments.length, b = Array(h > 1 ? h - 1 : 0), v = 1; v < h; v++)
            b[v - 1] = arguments[v];
          return i.produceWithPatches(f, function(_) {
            return n.apply(void 0, [_].concat(b));
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
    Nr(r) || pt(8), Hr(r) && (r = k1(r));
    var i = fc(this), n = Ss(this, r, void 0);
    return n[Ut].C = !0, ws(i), n;
  }, t.finishDraft = function(r, i) {
    var n = r && r[Ut];
    process.env.NODE_ENV !== "production" && (n && n.C || pt(9), n.I && pt(10));
    var s = n.A;
    return Vn(s, i), Kn(void 0, s);
  }, t.setAutoFreeze = function(r) {
    this.D = r;
  }, t.setUseProxies = function(r) {
    r && !yc && pt(20), this.g = r;
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
    return Hr(r) ? u(r, i) : this.produce(r, function(a) {
      return u(a, i);
    });
  }, e;
}(), $t = new Q1(), Z1 = $t.produce;
$t.produceWithPatches.bind($t);
$t.setAutoFreeze.bind($t);
$t.setUseProxies.bind($t);
$t.applyPatches.bind($t);
$t.createDraft.bind($t);
$t.finishDraft.bind($t);
const ev = (e) => (t, r, i) => (i.setState = (n, s, ...u) => {
  const a = typeof n == "function" ? Z1(n) : n;
  return t(a, s, ...u);
}, e(i.setState, r, i)), tv = ev, ii = B1()(
  tv((e, t) => ({
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
    }
  }))
), Ov = () => {
  const e = ti(), [t, r, i, n] = ii((b) => [
    b.account,
    b.accounts,
    b.chainId,
    b.setAccount
  ]), [s, u] = Lt(void 0), { request: a, data: l, error: f, loading: h } = ei({
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
  return Js(({ params: b }) => {
    if (b.event.name === "accountsChanged") {
      const _ = b.event.data[0], O = b.chainId.split(":")[0], R = b.chainId.split(":")[1];
      n({
        network: O,
        chainId: R,
        address: _
      }), u(void 0);
    }
  }), Ct(() => {
    e && a();
  }, [e]), Ct(() => {
    if (f)
      u(f.message);
    else if (l) {
      const b = l && l.type === "GET_SELECTED_ACCOUNT_RES" ? l : void 0, v = l && l.type === "GET_SELECTED_ACCOUNT_RES" ? l.data.error : void 0, _ = b == null ? void 0 : b.data.account;
      _ && n(_), u(v);
    }
  }, [l, f]), {
    account: t,
    accounts: r,
    isConnected: !!t,
    session: e,
    error: s,
    loading: h
  };
}, xv = () => {
  const e = ti(), [t] = ii((v) => [
    v.chainId
  ]), [r, i] = Lt(0), [n, s] = Lt(!1), [u, a] = Lt(void 0), { request: l, data: f, error: h, loading: b } = ei({
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
  return Js(({ id: v, params: _, topic: O }) => {
    if (_.event.name === "balanceChanged") {
      const N = Number(_.event.data);
      i(N), a(void 0), s(!1);
    }
  }), Ct(() => {
    e && (l(), s(!0));
  }, [e]), Ct(() => {
    if (h)
      i(0), a(h.message), s(!1);
    else if (f) {
      const v = f && f.type === "GET_BALANCE_RES" ? f : void 0, _ = f && f.type === "GET_BALANCE_REJ" ? f.data.error : void 0, O = (v == null ? void 0 : v.data.balance) ?? 0;
      i(O), a(_), s(!1);
    }
  }, [f, h]), { loading: n, balance: r, error: u };
}, Iv = () => {
  const [e, t] = Lt(void 0), { connect: r, data: i, error: n, loading: s } = b1({
    requiredNamespaces: {
      aleo: {
        methods: Vu,
        chains: Xs,
        events: vs
      }
    }
  }), u = async () => {
    try {
      await r(), t(void 0);
    } catch {
    }
  };
  return Ct(() => {
    n && t(n.message);
  }, [n]), { connect: u, data: i, error: e, loading: s };
}, Rv = (e) => {
  const t = ti(), [r] = ii((b) => [
    b.chainId
  ]), { request: i, data: n, error: s, loading: u } = ei({
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
}, Av = (e) => {
  const t = ti();
  ii((O) => [
    O.chainId
  ]);
  const { request: r, data: i, error: n, loading: s } = ei({
    topic: (t == null ? void 0 : t.topic) ?? "",
    chainId: "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "aleo_executeProgram",
      params: {
        type: "EXECUTE",
        data: {
          data: e
        }
      }
    }
  }), u = n ? n.message : i && i.type === "EXECUTE_REJ" ? i.data.error : void 0, a = i && i.type === "EXECUTE_RES" ? i : void 0, l = a == null ? void 0 : a.data.transactionId, f = a == null ? void 0 : a.data.outputPrivate, h = a == null ? void 0 : a.data.outputPublic, b = a == null ? void 0 : a.data.outputRecords, v = a == null ? void 0 : a.data.outputConstant;
  return { execute: () => {
    e && (r(), console.log("sent execute request"));
  }, transactionId: l, outputConstant: v, outputPrivate: f, outputRecords: b, outputPublic: h, error: u, loading: s };
}, Cv = () => {
  const [e, t] = Lt({
    loading: !0
  });
  return Ct(() => {
  }, []), { ...e };
}, Tv = () => {
  const e = ti(), [t] = ii((v) => [
    v.chainId
  ]), [r, i] = Lt([]), [n, s] = Lt(void 0), [u, a] = Lt(!1), { request: l, data: f, error: h, loading: b } = ei({
    topic: e == null ? void 0 : e.topic,
    chainId: t ?? "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "aleo_getRecords",
      params: {
        type: "GET_RECORDS"
      }
    }
  });
  return Js(({ id: v, params: _, topic: O }) => {
    if (_.event.name === "recordsChanged") {
      const N = _.event.data;
      i(N), s(void 0), a(!1);
    }
  }), Ct(() => {
    e && (l(), a(!0));
  }, [e]), Ct(() => {
    if (h)
      i([]), s(h.message), a(!1);
    else if (f) {
      const v = f, _ = v.type === "GET_RECORDS_REJ" ? v.data.error : void 0, O = v.type === "GET_RECORDS_RES" ? v.data.records : [];
      i(O), s(_), a(!1);
    }
  }, [f, h]), { records: r, error: n, loading: u };
}, Pv = (e) => {
  const t = ti(), [r] = ii((a) => [
    a.chainId
  ]), { request: i, data: n, error: s, loading: u } = ei({
    topic: (t == null ? void 0 : t.topic) ?? "",
    chainId: r ?? "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "aleo_transfer",
      params: e
    }
  });
  return { transfer: i, data: n, error: s, loading: u };
};
function rv(e, t, r = t) {
  const i = e < BigInt(0), n = e.toString().slice(i ? 1 : 0).padStart(t + 1, "0"), s = n.slice(0, n.length - t), u = n.slice(-t);
  let a = u.length - 1;
  for (; u[a] === "0"; )
    --a;
  const l = u.slice(0, a + 1);
  return (i ? "-" : "") + (l ? `${s}.${l.slice(0, r)}` : s);
}
function Nv(e, t) {
  const [r, i] = e.split("."), n = (i || "").replace(/0+$/, "").slice(0, t), s = BigInt(10) ** BigInt(t), u = s / BigInt(10) ** BigInt(n.length || 0);
  return BigInt(n || 0) * u + BigInt(r || 0) * s;
}
var iv = /* @__PURE__ */ ((e) => (e[e.ETH = 0] = "ETH", e[e.DAI = 1] = "DAI", e))(iv || {});
function nv(e) {
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
class Lv {
  constructor(t, r) {
    this.getDisplayValue = () => rv(this.value, 18) + " " + this.symbol, this.type = t;
    const { id: i, symbol: n, coinMarketCapID: s } = nv(t);
    this.id = i, this.symbol = n, this.coinMarketCapID = s, this.value = r;
  }
}
const Uv = "0x6b175474e89094c44da98b954eedeac495271d0f", $v = [
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
export {
  iv as A,
  C1 as B,
  Ev as C,
  Uv as D,
  $v as E,
  Sv as P,
  Ll as R,
  vc as T,
  Et as a,
  Dv as b,
  xv as c,
  Iv as d,
  Rv as e,
  Av as f,
  Cv as g,
  Tv as h,
  Pv as i,
  rv as j,
  Nv as k,
  Lv as l,
  zu as m,
  Io as n,
  av as o,
  Yt as p,
  Vu as q,
  Xs as r,
  En as s,
  ov as t,
  Ov as u,
  vs as v,
  R1 as w,
  A1 as x,
  Wr as y,
  rc as z
};
