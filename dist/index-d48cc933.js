import Xr, { memo as ml, useEffect as xt, useState as Lt, useDebugValue as _l } from "react";
var Nt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ws(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Es(e) {
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
var kn = { exports: {} }, oi = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fo;
function wl() {
  if (fo)
    return oi;
  fo = 1;
  var e = Xr, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(a, l, f) {
    var d, b = {}, _ = null, m = null;
    f !== void 0 && (_ = "" + f), l.key !== void 0 && (_ = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (d in l)
      i.call(l, d) && !s.hasOwnProperty(d) && (b[d] = l[d]);
    if (a && a.defaultProps)
      for (d in l = a.defaultProps, l)
        b[d] === void 0 && (b[d] = l[d]);
    return { $$typeof: t, type: a, key: _, ref: m, props: b, _owner: n.current };
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
var ho;
function El() {
  return ho || (ho = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Xr, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), D = Symbol.iterator, I = "@@iterator";
    function U(v) {
      if (v === null || typeof v != "object")
        return null;
      var M = D && v[D] || v[I];
      return typeof M == "function" ? M : null;
    }
    var $ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(v) {
      {
        for (var M = arguments.length, J = new Array(M > 1 ? M - 1 : 0), se = 1; se < M; se++)
          J[se - 1] = arguments[se];
        O("error", v, J);
      }
    }
    function O(v, M, J) {
      {
        var se = $.ReactDebugCurrentFrame, Ce = se.getStackAddendum();
        Ce !== "" && (M += "%s", J = J.concat([Ce]));
        var Se = J.map(function(Oe) {
          return String(Oe);
        });
        Se.unshift("Warning: " + M), Function.prototype.apply.call(console[v], console, Se);
      }
    }
    var g = !1, w = !1, h = !1, o = !1, p = !1, R;
    R = Symbol.for("react.module.reference");
    function N(v) {
      return !!(typeof v == "string" || typeof v == "function" || v === i || v === s || p || v === n || v === f || v === d || o || v === m || g || w || h || typeof v == "object" && v !== null && (v.$$typeof === _ || v.$$typeof === b || v.$$typeof === u || v.$$typeof === a || v.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      v.$$typeof === R || v.getModuleId !== void 0));
    }
    function F(v, M, J) {
      var se = v.displayName;
      if (se)
        return se;
      var Ce = M.displayName || M.name || "";
      return Ce !== "" ? J + "(" + Ce + ")" : J;
    }
    function K(v) {
      return v.displayName || "Context";
    }
    function Y(v) {
      if (v == null)
        return null;
      if (typeof v.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof v == "function")
        return v.displayName || v.name || null;
      if (typeof v == "string")
        return v;
      switch (v) {
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
        case d:
          return "SuspenseList";
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case a:
            var M = v;
            return K(M) + ".Consumer";
          case u:
            var J = v;
            return K(J._context) + ".Provider";
          case l:
            return F(v, v.render, "ForwardRef");
          case b:
            var se = v.displayName || null;
            return se !== null ? se : Y(v.type) || "Memo";
          case _: {
            var Ce = v, Se = Ce._payload, Oe = Ce._init;
            try {
              return Y(Oe(Se));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var x = Object.assign, T = 0, H, q, B, V, j, W, oe;
    function k() {
    }
    k.__reactDisabledLog = !0;
    function ie() {
      {
        if (T === 0) {
          H = console.log, q = console.info, B = console.warn, V = console.error, j = console.group, W = console.groupCollapsed, oe = console.groupEnd;
          var v = {
            configurable: !0,
            enumerable: !0,
            value: k,
            writable: !0
          };
          Object.defineProperties(console, {
            info: v,
            log: v,
            warn: v,
            error: v,
            group: v,
            groupCollapsed: v,
            groupEnd: v
          });
        }
        T++;
      }
    }
    function Q() {
      {
        if (T--, T === 0) {
          var v = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: x({}, v, {
              value: H
            }),
            info: x({}, v, {
              value: q
            }),
            warn: x({}, v, {
              value: B
            }),
            error: x({}, v, {
              value: V
            }),
            group: x({}, v, {
              value: j
            }),
            groupCollapsed: x({}, v, {
              value: W
            }),
            groupEnd: x({}, v, {
              value: oe
            })
          });
        }
        T < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = $.ReactCurrentDispatcher, L;
    function P(v, M, J) {
      {
        if (L === void 0)
          try {
            throw Error();
          } catch (Ce) {
            var se = Ce.stack.trim().match(/\n( *(at )?)/);
            L = se && se[1] || "";
          }
        return `
` + L + v;
      }
    }
    var A = !1, c;
    {
      var S = typeof WeakMap == "function" ? WeakMap : Map;
      c = new S();
    }
    function G(v, M) {
      if (!v || A)
        return "";
      {
        var J = c.get(v);
        if (J !== void 0)
          return J;
      }
      var se;
      A = !0;
      var Ce = Error.prepareStackTrace;
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
            Reflect.construct(v, [], Oe);
          } else {
            try {
              Oe.call();
            } catch (Wt) {
              se = Wt;
            }
            v.call(Oe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Wt) {
            se = Wt;
          }
          v();
        }
      } catch (Wt) {
        if (Wt && se && typeof Wt.stack == "string") {
          for (var _e = Wt.stack.split(`
`), ft = se.stack.split(`
`), qe = _e.length - 1, Ge = ft.length - 1; qe >= 1 && Ge >= 0 && _e[qe] !== ft[Ge]; )
            Ge--;
          for (; qe >= 1 && Ge >= 0; qe--, Ge--)
            if (_e[qe] !== ft[Ge]) {
              if (qe !== 1 || Ge !== 1)
                do
                  if (qe--, Ge--, Ge < 0 || _e[qe] !== ft[Ge]) {
                    var it = `
` + _e[qe].replace(" at new ", " at ");
                    return v.displayName && it.includes("<anonymous>") && (it = it.replace("<anonymous>", v.displayName)), typeof v == "function" && c.set(v, it), it;
                  }
                while (qe >= 1 && Ge >= 0);
              break;
            }
        }
      } finally {
        A = !1, re.current = Se, Q(), Error.prepareStackTrace = Ce;
      }
      var fr = v ? v.displayName || v.name : "", Li = fr ? P(fr) : "";
      return typeof v == "function" && c.set(v, Li), Li;
    }
    function Z(v, M, J) {
      return G(v, !1);
    }
    function be(v) {
      var M = v.prototype;
      return !!(M && M.isReactComponent);
    }
    function ve(v, M, J) {
      if (v == null)
        return "";
      if (typeof v == "function")
        return G(v, be(v));
      if (typeof v == "string")
        return P(v);
      switch (v) {
        case f:
          return P("Suspense");
        case d:
          return P("SuspenseList");
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case l:
            return Z(v.render);
          case b:
            return ve(v.type, M, J);
          case _: {
            var se = v, Ce = se._payload, Se = se._init;
            try {
              return ve(Se(Ce), M, J);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, xe = {}, Be = $.ReactDebugCurrentFrame;
    function Le(v) {
      if (v) {
        var M = v._owner, J = ve(v.type, v._source, M ? M.type : null);
        Be.setExtraStackFrame(J);
      } else
        Be.setExtraStackFrame(null);
    }
    function De(v, M, J, se, Ce) {
      {
        var Se = Function.call.bind(he);
        for (var Oe in v)
          if (Se(v, Oe)) {
            var _e = void 0;
            try {
              if (typeof v[Oe] != "function") {
                var ft = Error((se || "React class") + ": " + J + " type `" + Oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof v[Oe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ft.name = "Invariant Violation", ft;
              }
              _e = v[Oe](M, Oe, se, J, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (qe) {
              _e = qe;
            }
            _e && !(_e instanceof Error) && (Le(Ce), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", se || "React class", J, Oe, typeof _e), Le(null)), _e instanceof Error && !(_e.message in xe) && (xe[_e.message] = !0, Le(Ce), E("Failed %s type: %s", J, _e.message), Le(null));
          }
      }
    }
    var we = Array.isArray;
    function de(v) {
      return we(v);
    }
    function ge(v) {
      {
        var M = typeof Symbol == "function" && Symbol.toStringTag, J = M && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return J;
      }
    }
    function pe(v) {
      try {
        return ue(v), !1;
      } catch {
        return !0;
      }
    }
    function ue(v) {
      return "" + v;
    }
    function ce(v) {
      if (pe(v))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ge(v)), ue(v);
    }
    var ne = $.ReactCurrentOwner, ye = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, ae, Ee;
    Ee = {};
    function Ie(v) {
      if (he.call(v, "ref")) {
        var M = Object.getOwnPropertyDescriptor(v, "ref").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return v.ref !== void 0;
    }
    function Te(v) {
      if (he.call(v, "key")) {
        var M = Object.getOwnPropertyDescriptor(v, "key").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return v.key !== void 0;
    }
    function Pe(v, M) {
      if (typeof v.ref == "string" && ne.current && M && ne.current.stateNode !== M) {
        var J = Y(ne.current.type);
        Ee[J] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Y(ne.current.type), v.ref), Ee[J] = !0);
      }
    }
    function Ae(v, M) {
      {
        var J = function() {
          me || (me = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        J.isReactWarning = !0, Object.defineProperty(v, "key", {
          get: J,
          configurable: !0
        });
      }
    }
    function Tt(v, M) {
      {
        var J = function() {
          ae || (ae = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        J.isReactWarning = !0, Object.defineProperty(v, "ref", {
          get: J,
          configurable: !0
        });
      }
    }
    var Mt = function(v, M, J, se, Ce, Se, Oe) {
      var _e = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: v,
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
        value: Ce
      }), Object.freeze && (Object.freeze(_e.props), Object.freeze(_e)), _e;
    };
    function Zt(v, M, J, se, Ce) {
      {
        var Se, Oe = {}, _e = null, ft = null;
        J !== void 0 && (ce(J), _e = "" + J), Te(M) && (ce(M.key), _e = "" + M.key), Ie(M) && (ft = M.ref, Pe(M, Ce));
        for (Se in M)
          he.call(M, Se) && !ye.hasOwnProperty(Se) && (Oe[Se] = M[Se]);
        if (v && v.defaultProps) {
          var qe = v.defaultProps;
          for (Se in qe)
            Oe[Se] === void 0 && (Oe[Se] = qe[Se]);
        }
        if (_e || ft) {
          var Ge = typeof v == "function" ? v.displayName || v.name || "Unknown" : v;
          _e && Ae(Oe, Ge), ft && Tt(Oe, Ge);
        }
        return Mt(v, _e, ft, Ce, se, ne.current, Oe);
      }
    }
    var lt = $.ReactCurrentOwner, Qt = $.ReactDebugCurrentFrame;
    function jt(v) {
      if (v) {
        var M = v._owner, J = ve(v.type, v._source, M ? M.type : null);
        Qt.setExtraStackFrame(J);
      } else
        Qt.setExtraStackFrame(null);
    }
    var lr;
    lr = !1;
    function ze(v) {
      return typeof v == "object" && v !== null && v.$$typeof === t;
    }
    function $e() {
      {
        if (lt.current) {
          var v = Y(lt.current.type);
          if (v)
            return `

Check the render method of \`` + v + "`.";
        }
        return "";
      }
    }
    function We(v) {
      {
        if (v !== void 0) {
          var M = v.fileName.replace(/^.*[\\\/]/, ""), J = v.lineNumber;
          return `

Check your code at ` + M + ":" + J + ".";
        }
        return "";
      }
    }
    var Ve = {};
    function ke(v) {
      {
        var M = $e();
        if (!M) {
          var J = typeof v == "string" ? v : v.displayName || v.name;
          J && (M = `

Check the top-level render call using <` + J + ">.");
        }
        return M;
      }
    }
    function Me(v, M) {
      {
        if (!v._store || v._store.validated || v.key != null)
          return;
        v._store.validated = !0;
        var J = ke(M);
        if (Ve[J])
          return;
        Ve[J] = !0;
        var se = "";
        v && v._owner && v._owner !== lt.current && (se = " It was passed a child from " + Y(v._owner.type) + "."), jt(v), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', J, se), jt(null);
      }
    }
    function Xe(v, M) {
      {
        if (typeof v != "object")
          return;
        if (de(v))
          for (var J = 0; J < v.length; J++) {
            var se = v[J];
            ze(se) && Me(se, M);
          }
        else if (ze(v))
          v._store && (v._store.validated = !0);
        else if (v) {
          var Ce = U(v);
          if (typeof Ce == "function" && Ce !== v.entries)
            for (var Se = Ce.call(v), Oe; !(Oe = Se.next()).done; )
              ze(Oe.value) && Me(Oe.value, M);
        }
      }
    }
    function et(v) {
      {
        var M = v.type;
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
          var se = Y(M);
          De(J, v.props, "prop", se, v);
        } else if (M.PropTypes !== void 0 && !lr) {
          lr = !0;
          var Ce = Y(M);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ce || "Unknown");
        }
        typeof M.getDefaultProps == "function" && !M.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tt(v) {
      {
        for (var M = Object.keys(v.props), J = 0; J < M.length; J++) {
          var se = M[J];
          if (se !== "children" && se !== "key") {
            jt(v), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", se), jt(null);
            break;
          }
        }
        v.ref !== null && (jt(v), E("Invalid attribute `ref` supplied to `React.Fragment`."), jt(null));
      }
    }
    function Ze(v, M, J, se, Ce, Se) {
      {
        var Oe = N(v);
        if (!Oe) {
          var _e = "";
          (v === void 0 || typeof v == "object" && v !== null && Object.keys(v).length === 0) && (_e += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ft = We(Ce);
          ft ? _e += ft : _e += $e();
          var qe;
          v === null ? qe = "null" : de(v) ? qe = "array" : v !== void 0 && v.$$typeof === t ? (qe = "<" + (Y(v.type) || "Unknown") + " />", _e = " Did you accidentally export a JSX literal instead of a component?") : qe = typeof v, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", qe, _e);
        }
        var Ge = Zt(v, M, J, Ce, Se);
        if (Ge == null)
          return Ge;
        if (Oe) {
          var it = M.children;
          if (it !== void 0)
            if (se)
              if (de(it)) {
                for (var fr = 0; fr < it.length; fr++)
                  Xe(it[fr], v);
                Object.freeze && Object.freeze(it);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Xe(it, v);
        }
        return v === i ? tt(Ge) : et(Ge), Ge;
      }
    }
    function rt(v, M, J) {
      return Ze(v, M, J, !0);
    }
    function Qe(v, M, J) {
      return Ze(v, M, J, !1);
    }
    var He = Qe, Ue = rt;
    ai.Fragment = i, ai.jsx = He, ai.jsxs = Ue;
  }()), ai;
}
process.env.NODE_ENV === "production" ? kn.exports = wl() : kn.exports = El();
var Hn = kn.exports;
const Sl = Symbol(), po = Object.getPrototypeOf, Gn = /* @__PURE__ */ new WeakMap(), Dl = (e) => e && (Gn.has(e) ? Gn.get(e) : po(e) === Object.prototype || po(e) === Array.prototype), Ol = (e) => Dl(e) && e[Sl] || null, go = (e, t = !0) => {
  Gn.set(e, t);
}, _n = (e) => typeof e == "object" && e !== null, gr = /* @__PURE__ */ new WeakMap(), zi = /* @__PURE__ */ new WeakSet(), xl = (e = Object.is, t = (f, d) => new Proxy(f, d), r = (f) => _n(f) && !zi.has(f) && (Array.isArray(f) || !(Symbol.iterator in f)) && !(f instanceof WeakMap) && !(f instanceof WeakSet) && !(f instanceof Error) && !(f instanceof Number) && !(f instanceof Date) && !(f instanceof String) && !(f instanceof RegExp) && !(f instanceof ArrayBuffer), i = (f) => {
  switch (f.status) {
    case "fulfilled":
      return f.value;
    case "rejected":
      throw f.reason;
    default:
      throw f;
  }
}, n = /* @__PURE__ */ new WeakMap(), s = (f, d, b = i) => {
  const _ = n.get(f);
  if ((_ == null ? void 0 : _[0]) === d)
    return _[1];
  const m = Array.isArray(f) ? [] : Object.create(Object.getPrototypeOf(f));
  return go(m, !0), n.set(f, [d, m]), Reflect.ownKeys(f).forEach((D) => {
    if (Object.getOwnPropertyDescriptor(m, D))
      return;
    const I = Reflect.get(f, D), U = {
      value: I,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (zi.has(I))
      go(I, !1);
    else if (I instanceof Promise)
      delete U.value, U.get = () => b(I);
    else if (gr.has(I)) {
      const [$, E] = gr.get(
        I
      );
      U.value = s(
        $,
        E(),
        b
      );
    }
    Object.defineProperty(m, D, U);
  }), Object.preventExtensions(m);
}, u = /* @__PURE__ */ new WeakMap(), a = [1, 1], l = (f) => {
  if (!_n(f))
    throw new Error("object required");
  const d = u.get(f);
  if (d)
    return d;
  let b = a[0];
  const _ = /* @__PURE__ */ new Set(), m = (R, N = ++a[0]) => {
    b !== N && (b = N, _.forEach((F) => F(R, N)));
  };
  let D = a[1];
  const I = (R = ++a[1]) => (D !== R && !_.size && (D = R, $.forEach(([N]) => {
    const F = N[1](R);
    F > b && (b = F);
  })), b), U = (R) => (N, F) => {
    const K = [...N];
    K[1] = [R, ...K[1]], m(K, F);
  }, $ = /* @__PURE__ */ new Map(), E = (R, N) => {
    if (_.size) {
      const F = N[3](U(R));
      $.set(R, [N, F]);
    } else
      $.set(R, [N]);
  }, O = (R) => {
    var N;
    const F = $.get(R);
    F && ($.delete(R), (N = F[1]) == null || N.call(F));
  }, g = (R) => (_.add(R), _.size === 1 && $.forEach(([F, K], Y) => {
    const x = F[3](U(Y));
    $.set(Y, [F, x]);
  }), () => {
    _.delete(R), _.size === 0 && $.forEach(([F, K], Y) => {
      K && (K(), $.set(Y, [F]));
    });
  }), w = Array.isArray(f) ? [] : Object.create(Object.getPrototypeOf(f)), o = t(w, {
    deleteProperty(R, N) {
      const F = Reflect.get(R, N);
      O(N);
      const K = Reflect.deleteProperty(R, N);
      return K && m(["delete", [N], F]), K;
    },
    set(R, N, F, K) {
      const Y = Reflect.has(R, N), x = Reflect.get(R, N, K);
      if (Y && (e(x, F) || u.has(F) && e(x, u.get(F))))
        return !0;
      O(N), _n(F) && (F = Ol(F) || F);
      let T = F;
      if (F instanceof Promise)
        F.then((H) => {
          F.status = "fulfilled", F.value = H, m(["resolve", [N], H]);
        }).catch((H) => {
          F.status = "rejected", F.reason = H, m(["reject", [N], H]);
        });
      else {
        !gr.has(F) && r(F) && (T = l(F));
        const H = !zi.has(T) && gr.get(T);
        H && E(N, H);
      }
      return Reflect.set(R, N, T, K), m(["set", [N], F, x]), !0;
    }
  });
  u.set(f, o);
  const p = [
    w,
    I,
    s,
    g
  ];
  return gr.set(o, p), Reflect.ownKeys(f).forEach((R) => {
    const N = Object.getOwnPropertyDescriptor(
      f,
      R
    );
    "value" in N && (o[R] = f[R], delete N.value, delete N.writable), Object.defineProperty(w, R, N);
  }), o;
}) => [
  // public functions
  l,
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
  a
], [Il] = xl();
function mr(e = {}) {
  return Il(e);
}
function Lr(e, t, r) {
  const i = gr.get(e);
  let n;
  const s = [], u = i[3];
  let a = !1;
  const f = u((d) => {
    if (s.push(d), r) {
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
function Al(e, t) {
  const r = gr.get(e), [i, n, s] = r;
  return s(i, n(), t);
}
const at = mr({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), hc = { state: at, subscribe(e) {
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
} }, St = { WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE", WCM_VERSION: "WCM_VERSION", RECOMMENDED_WALLET_AMOUNT: 9, isMobile() {
  return typeof window < "u" ? !!(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
}, isAndroid() {
  return St.isMobile() && navigator.userAgent.toLowerCase().includes("android");
}, isIos() {
  const e = navigator.userAgent.toLowerCase();
  return St.isMobile() && (e.includes("iphone") || e.includes("ipad"));
}, isHttpUrl(e) {
  return e.startsWith("http://") || e.startsWith("https://");
}, isArray(e) {
  return Array.isArray(e) && e.length > 0;
}, formatNativeUrl(e, t, r) {
  if (St.isHttpUrl(e))
    return this.formatUniversalUrl(e, t, r);
  let i = e;
  i.includes("://") || (i = e.replaceAll("/", "").replaceAll(":", ""), i = `${i}://`), i.endsWith("/") || (i = `${i}/`), this.setWalletConnectDeepLink(i, r);
  const n = encodeURIComponent(t);
  return `${i}wc?uri=${n}`;
}, formatUniversalUrl(e, t, r) {
  if (!St.isHttpUrl(e))
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
    localStorage.setItem(St.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: e, name: t }));
  } catch {
    console.info("Unable to set WalletConnect deep link");
  }
}, setWalletConnectAndroidDeepLink(e) {
  try {
    const [t] = e.split("?");
    localStorage.setItem(St.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: t, name: "Android" }));
  } catch {
    console.info("Unable to set WalletConnect android deep link");
  }
}, removeWalletConnectDeepLink() {
  try {
    localStorage.removeItem(St.WALLETCONNECT_DEEPLINK_CHOICE);
  } catch {
    console.info("Unable to remove WalletConnect deep link");
  }
}, setModalVersionInStorage() {
  try {
    typeof localStorage < "u" && localStorage.setItem(St.WCM_VERSION, "2.6.0");
  } catch {
    console.info("Unable to set Web3Modal version in storage");
  }
}, getWalletRouterData() {
  var e;
  const t = (e = hc.state.data) == null ? void 0 : e.Wallet;
  if (!t)
    throw new Error('Missing "Wallet" view data');
  return t;
} }, Cl = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), bt = mr({ enabled: Cl, userSessionId: "", events: [], connectedWalletId: void 0 }), Rl = { state: bt, subscribe(e) {
  return Lr(bt.events, () => e(Al(bt.events[bt.events.length - 1])));
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
} }, Vi = mr({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), Gr = { state: Vi, subscribe(e) {
  return Lr(Vi, () => e(Vi));
}, setConfig(e) {
  var t, r;
  Rl.initialize(), Yt.setChains(e.chains), Yt.setIsAuth(!!e.enableAuthMode), Yt.setIsCustomMobile(!!((t = e.mobileWallets) != null && t.length)), Yt.setIsCustomDesktop(!!((r = e.desktopWallets) != null && r.length)), St.setModalVersionInStorage(), Object.assign(Vi, e);
} }, Yn = "https://explorer-api.walletconnect.com";
async function qi(e, t) {
  const r = new URL(e, Yn);
  return r.searchParams.append("projectId", Gr.state.projectId), Object.entries(t).forEach(([i, n]) => {
    n && r.searchParams.append(i, String(n));
  }), (await fetch(r)).json();
}
const Sr = { async getDesktopListings(e) {
  return qi("/w3m/v1/getDesktopListings", e);
}, async getMobileListings(e) {
  return qi("/w3m/v1/getMobileListings", e);
}, async getInjectedListings(e) {
  return qi("/w3m/v1/getInjectedListings", e);
}, async getAllListings(e) {
  return qi("/w3m/v1/getAllListings", e);
}, getWalletImageUrl(e) {
  return `${Yn}/w3m/v1/getWalletImage/${e}?projectId=${Gr.state.projectId}`;
}, getAssetImageUrl(e) {
  return `${Yn}/w3m/v1/getAssetImage/${e}?projectId=${Gr.state.projectId}`;
} };
var Tl = Object.defineProperty, yo = Object.getOwnPropertySymbols, Pl = Object.prototype.hasOwnProperty, Nl = Object.prototype.propertyIsEnumerable, bo = (e, t, r) => t in e ? Tl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Ll = (e, t) => {
  for (var r in t || (t = {}))
    Pl.call(t, r) && bo(e, r, t[r]);
  if (yo)
    for (var r of yo(t))
      Nl.call(t, r) && bo(e, r, t[r]);
  return e;
};
const vo = St.isMobile(), tr = mr({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), Zb = { state: tr, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: e, explorerExcludedWalletIds: t } = Gr.state;
  if (e === "NONE" || t === "ALL" && !e)
    return tr.recomendedWallets;
  if (St.isArray(e)) {
    const r = { recommendedIds: e.join(",") }, { listings: i } = await Sr.getAllListings(r), n = Object.values(i);
    n.sort((s, u) => {
      const a = e.indexOf(s.id), l = e.indexOf(u.id);
      return a - l;
    }), tr.recomendedWallets = n;
  } else {
    const { chains: r, isAuth: i } = Yt.state, n = r == null ? void 0 : r.join(","), s = St.isArray(t), u = { page: 1, sdks: i ? "auth_v1" : void 0, entries: St.RECOMMENDED_WALLET_AMOUNT, chains: n, version: 2, excludedIds: s ? t.join(",") : void 0 }, { listings: a } = vo ? await Sr.getMobileListings(u) : await Sr.getDesktopListings(u);
    tr.recomendedWallets = Object.values(a);
  }
  return tr.recomendedWallets;
}, async getWallets(e) {
  const t = Ll({}, e), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: i } = Gr.state, { recomendedWallets: n } = tr;
  if (i === "ALL")
    return tr.wallets;
  n.length ? t.excludedIds = n.map((b) => b.id).join(",") : St.isArray(r) && (t.excludedIds = r.join(",")), St.isArray(i) && (t.excludedIds = [t.excludedIds, i].filter(Boolean).join(",")), Yt.state.isAuth && (t.sdks = "auth_v1");
  const { page: s, search: u } = e, { listings: a, total: l } = vo ? await Sr.getMobileListings(t) : await Sr.getDesktopListings(t), f = Object.values(a), d = u ? "search" : "wallets";
  return tr[d] = { listings: [...tr[d].listings, ...f], total: l, page: s ?? 1 }, { listings: f, total: l };
}, getWalletImageUrl(e) {
  return Sr.getWalletImageUrl(e);
}, getAssetImageUrl(e) {
  return Sr.getAssetImageUrl(e);
}, resetSearch() {
  tr.search = { listings: [], total: 0, page: 1 };
} }, zr = mr({ open: !1 }), wn = { state: zr, subscribe(e) {
  return Lr(zr, () => e(zr));
}, async open(e) {
  return new Promise((t) => {
    const { isUiLoaded: r, isDataLoaded: i } = Yt.state;
    if (Yt.setWalletConnectUri(e == null ? void 0 : e.uri), Yt.setChains(e == null ? void 0 : e.chains), hc.reset("ConnectWallet"), r && i)
      zr.open = !0, t();
    else {
      const n = setInterval(() => {
        const s = Yt.state;
        s.isUiLoaded && s.isDataLoaded && (clearInterval(n), zr.open = !0, t());
      }, 200);
    }
  });
}, close() {
  zr.open = !1;
} };
var Ul = Object.defineProperty, mo = Object.getOwnPropertySymbols, Fl = Object.prototype.hasOwnProperty, $l = Object.prototype.propertyIsEnumerable, _o = (e, t, r) => t in e ? Ul(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Ml = (e, t) => {
  for (var r in t || (t = {}))
    Fl.call(t, r) && _o(e, r, t[r]);
  if (mo)
    for (var r of mo(t))
      $l.call(t, r) && _o(e, r, t[r]);
  return e;
};
function jl() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const ci = mr({ themeMode: jl() ? "dark" : "light" }), wo = { state: ci, subscribe(e) {
  return Lr(ci, () => e(ci));
}, setThemeConfig(e) {
  const { themeMode: t, themeVariables: r } = e;
  t && (ci.themeMode = t), r && (ci.themeVariables = Ml({}, r));
} }, Dr = mr({ open: !1, message: "", variant: "success" }), Qb = { state: Dr, subscribe(e) {
  return Lr(Dr, () => e(Dr));
}, openToast(e, t) {
  Dr.open = !0, Dr.message = e, Dr.variant = t;
}, closeToast() {
  Dr.open = !1;
} };
let Bl = class {
  constructor(t) {
    this.openModal = wn.open, this.closeModal = wn.close, this.subscribeModal = wn.subscribe, this.setTheme = wo.setThemeConfig, wo.setThemeConfig(t), Gr.setConfig(t), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-0051d9f5.js");
      const t = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", t), Yt.setIsUiLoaded(!0);
    }
  }
};
var Ss = { exports: {} }, kr = typeof Reflect == "object" ? Reflect : null, Eo = kr && typeof kr.apply == "function" ? kr.apply : function(t, r, i) {
  return Function.prototype.apply.call(t, r, i);
}, ki;
kr && typeof kr.ownKeys == "function" ? ki = kr.ownKeys : Object.getOwnPropertySymbols ? ki = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : ki = function(t) {
  return Object.getOwnPropertyNames(t);
};
function zl(e) {
  console && console.warn && console.warn(e);
}
var dc = Number.isNaN || function(t) {
  return t !== t;
};
function Ne() {
  Ne.init.call(this);
}
Ss.exports = Ne;
Ss.exports.once = Wl;
Ne.EventEmitter = Ne;
Ne.prototype._events = void 0;
Ne.prototype._eventsCount = 0;
Ne.prototype._maxListeners = void 0;
var So = 10;
function an(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(Ne, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return So;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || dc(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    So = e;
  }
});
Ne.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Ne.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || dc(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function pc(e) {
  return e._maxListeners === void 0 ? Ne.defaultMaxListeners : e._maxListeners;
}
Ne.prototype.getMaxListeners = function() {
  return pc(this);
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
    Eo(l, this, r);
  else
    for (var f = l.length, d = mc(l, f), i = 0; i < f; ++i)
      Eo(d[i], this, r);
  return !0;
};
function gc(e, t, r, i) {
  var n, s, u;
  if (an(r), s = e._events, s === void 0 ? (s = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (s.newListener !== void 0 && (e.emit(
    "newListener",
    t,
    r.listener ? r.listener : r
  ), s = e._events), u = s[t]), u === void 0)
    u = s[t] = r, ++e._eventsCount;
  else if (typeof u == "function" ? u = s[t] = i ? [r, u] : [u, r] : i ? u.unshift(r) : u.push(r), n = pc(e), n > 0 && u.length > n && !u.warned) {
    u.warned = !0;
    var a = new Error("Possible EventEmitter memory leak detected. " + u.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    a.name = "MaxListenersExceededWarning", a.emitter = e, a.type = t, a.count = u.length, zl(a);
  }
  return e;
}
Ne.prototype.addListener = function(t, r) {
  return gc(this, t, r, !1);
};
Ne.prototype.on = Ne.prototype.addListener;
Ne.prototype.prependListener = function(t, r) {
  return gc(this, t, r, !0);
};
function Vl() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function yc(e, t, r) {
  var i = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r }, n = Vl.bind(i);
  return n.listener = r, i.wrapFn = n, n;
}
Ne.prototype.once = function(t, r) {
  return an(r), this.on(t, yc(this, t, r)), this;
};
Ne.prototype.prependOnceListener = function(t, r) {
  return an(r), this.prependListener(t, yc(this, t, r)), this;
};
Ne.prototype.removeListener = function(t, r) {
  var i, n, s, u, a;
  if (an(r), n = this._events, n === void 0)
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
    s === 0 ? i.shift() : ql(i, s), i.length === 1 && (n[t] = i[0]), n.removeListener !== void 0 && this.emit("removeListener", t, a || r);
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
function bc(e, t, r) {
  var i = e._events;
  if (i === void 0)
    return [];
  var n = i[t];
  return n === void 0 ? [] : typeof n == "function" ? r ? [n.listener || n] : [n] : r ? Kl(n) : mc(n, n.length);
}
Ne.prototype.listeners = function(t) {
  return bc(this, t, !0);
};
Ne.prototype.rawListeners = function(t) {
  return bc(this, t, !1);
};
Ne.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : vc.call(e, t);
};
Ne.prototype.listenerCount = vc;
function vc(e) {
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
  return this._eventsCount > 0 ? ki(this._events) : [];
};
function mc(e, t) {
  for (var r = new Array(t), i = 0; i < t; ++i)
    r[i] = e[i];
  return r;
}
function ql(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function Kl(e) {
  for (var t = new Array(e.length), r = 0; r < t.length; ++r)
    t[r] = e[r].listener || e[r];
  return t;
}
function Wl(e, t) {
  return new Promise(function(r, i) {
    function n(u) {
      e.removeListener(t, s), i(u);
    }
    function s() {
      typeof e.removeListener == "function" && e.removeListener("error", n), r([].slice.call(arguments));
    }
    _c(e, t, s, { once: !0 }), t !== "error" && kl(e, n, { once: !0 });
  });
}
function kl(e, t, r) {
  typeof e.on == "function" && _c(e, "error", t, r);
}
function _c(e, t, r, i) {
  if (typeof e.on == "function")
    i.once ? e.once(t, r) : e.on(t, r);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function n(s) {
      i.once && e.removeEventListener(t, n), r(s);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var Xt = Ss.exports;
const wc = /* @__PURE__ */ ws(Xt);
var cn = {};
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
var Jn = function(e, t) {
  return Jn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
    r.__proto__ = i;
  } || function(r, i) {
    for (var n in i)
      i.hasOwnProperty(n) && (r[n] = i[n]);
  }, Jn(e, t);
};
function Hl(e, t) {
  Jn(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var Xn = function() {
  return Xn = Object.assign || function(t) {
    for (var r, i = 1, n = arguments.length; i < n; i++) {
      r = arguments[i];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, Xn.apply(this, arguments);
};
function Gl(e, t) {
  var r = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++)
      t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
  return r;
}
function Yl(e, t, r, i) {
  var n = arguments.length, s = n < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, r) : i, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    s = Reflect.decorate(e, t, r, i);
  else
    for (var a = e.length - 1; a >= 0; a--)
      (u = e[a]) && (s = (n < 3 ? u(s) : n > 3 ? u(t, r, s) : u(t, r)) || s);
  return n > 3 && s && Object.defineProperty(t, r, s), s;
}
function Jl(e, t) {
  return function(r, i) {
    t(r, i, e);
  };
}
function Xl(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function Zl(e, t, r, i) {
  function n(s) {
    return s instanceof r ? s : new r(function(u) {
      u(s);
    });
  }
  return new (r || (r = Promise))(function(s, u) {
    function a(d) {
      try {
        f(i.next(d));
      } catch (b) {
        u(b);
      }
    }
    function l(d) {
      try {
        f(i.throw(d));
      } catch (b) {
        u(b);
      }
    }
    function f(d) {
      d.done ? s(d.value) : n(d.value).then(a, l);
    }
    f((i = i.apply(e, t || [])).next());
  });
}
function Ql(e, t) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, i, n, s, u;
  return u = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
    return this;
  }), u;
  function a(f) {
    return function(d) {
      return l([f, d]);
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
      } catch (d) {
        f = [6, d], n = 0;
      } finally {
        i = s = 0;
      }
    if (f[0] & 5)
      throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}
function ef(e, t, r, i) {
  i === void 0 && (i = r), e[i] = t[r];
}
function tf(e, t) {
  for (var r in e)
    r !== "default" && !t.hasOwnProperty(r) && (t[r] = e[r]);
}
function Zn(e) {
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
function Ec(e, t) {
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
function rf() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(Ec(arguments[t]));
  return e;
}
function nf() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++)
    e += arguments[t].length;
  for (var i = Array(e), n = 0, t = 0; t < r; t++)
    for (var s = arguments[t], u = 0, a = s.length; u < a; u++, n++)
      i[n] = s[u];
  return i;
}
function Oi(e) {
  return this instanceof Oi ? (this.v = e, this) : new Oi(e);
}
function sf(e, t, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = r.apply(e, t || []), n, s = [];
  return n = {}, u("next"), u("throw"), u("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n;
  function u(_) {
    i[_] && (n[_] = function(m) {
      return new Promise(function(D, I) {
        s.push([_, m, D, I]) > 1 || a(_, m);
      });
    });
  }
  function a(_, m) {
    try {
      l(i[_](m));
    } catch (D) {
      b(s[0][3], D);
    }
  }
  function l(_) {
    _.value instanceof Oi ? Promise.resolve(_.value.v).then(f, d) : b(s[0][2], _);
  }
  function f(_) {
    a("next", _);
  }
  function d(_) {
    a("throw", _);
  }
  function b(_, m) {
    _(m), s.shift(), s.length && a(s[0][0], s[0][1]);
  }
}
function of(e) {
  var t, r;
  return t = {}, i("next"), i("throw", function(n) {
    throw n;
  }), i("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function i(n, s) {
    t[n] = e[n] ? function(u) {
      return (r = !r) ? { value: Oi(e[n](u)), done: n === "return" } : s ? s(u) : u;
    } : s;
  }
}
function af(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], r;
  return t ? t.call(e) : (e = typeof Zn == "function" ? Zn(e) : e[Symbol.iterator](), r = {}, i("next"), i("throw"), i("return"), r[Symbol.asyncIterator] = function() {
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
function cf(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
function uf(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  return t.default = e, t;
}
function lf(e) {
  return e && e.__esModule ? e : { default: e };
}
function ff(e, t) {
  if (!t.has(e))
    throw new TypeError("attempted to get private field on non-instance");
  return t.get(e);
}
function hf(e, t, r) {
  if (!t.has(e))
    throw new TypeError("attempted to set private field on non-instance");
  return t.set(e, r), r;
}
const df = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return Xn;
  },
  __asyncDelegator: of,
  __asyncGenerator: sf,
  __asyncValues: af,
  __await: Oi,
  __awaiter: Zl,
  __classPrivateFieldGet: ff,
  __classPrivateFieldSet: hf,
  __createBinding: ef,
  __decorate: Yl,
  __exportStar: tf,
  __extends: Hl,
  __generator: Ql,
  __importDefault: lf,
  __importStar: uf,
  __makeTemplateObject: cf,
  __metadata: Xl,
  __param: Jl,
  __read: Ec,
  __rest: Gl,
  __spread: rf,
  __spreadArrays: nf,
  __values: Zn
}, Symbol.toStringTag, { value: "Module" })), Kt = /* @__PURE__ */ Es(df);
var Ai = {};
Object.defineProperty(Ai, "__esModule", { value: !0 });
function pf(e) {
  if (typeof e != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof e}`);
  try {
    return JSON.parse(e);
  } catch {
    return e;
  }
}
Ai.safeJsonParse = pf;
function gf(e) {
  return typeof e == "string" ? e : JSON.stringify(e, (t, r) => typeof r > "u" ? null : r);
}
Ai.safeJsonStringify = gf;
var ui = { exports: {} }, Do;
function yf() {
  return Do || (Do = 1, function() {
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
var En = {}, li = {}, Oo;
function bf() {
  if (Oo)
    return li;
  Oo = 1, Object.defineProperty(li, "__esModule", { value: !0 }), li.IKeyValueStorage = void 0;
  class e {
  }
  return li.IKeyValueStorage = e, li;
}
var fi = {}, xo;
function vf() {
  if (xo)
    return fi;
  xo = 1, Object.defineProperty(fi, "__esModule", { value: !0 }), fi.parseEntry = void 0;
  const e = Ai;
  function t(r) {
    var i;
    return [r[0], e.safeJsonParse((i = r[1]) !== null && i !== void 0 ? i : "")];
  }
  return fi.parseEntry = t, fi;
}
var Io;
function mf() {
  return Io || (Io = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = Kt;
    t.__exportStar(bf(), e), t.__exportStar(vf(), e);
  }(En)), En;
}
Object.defineProperty(cn, "__esModule", { value: !0 });
cn.KeyValueStorage = void 0;
const qr = Kt, Ao = Ai, _f = qr.__importDefault(yf()), wf = mf();
class Sc {
  constructor() {
    this.localStorage = _f.default;
  }
  getKeys() {
    return qr.__awaiter(this, void 0, void 0, function* () {
      return Object.keys(this.localStorage);
    });
  }
  getEntries() {
    return qr.__awaiter(this, void 0, void 0, function* () {
      return Object.entries(this.localStorage).map(wf.parseEntry);
    });
  }
  getItem(t) {
    return qr.__awaiter(this, void 0, void 0, function* () {
      const r = this.localStorage.getItem(t);
      if (r !== null)
        return Ao.safeJsonParse(r);
    });
  }
  setItem(t, r) {
    return qr.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.setItem(t, Ao.safeJsonStringify(r));
    });
  }
  removeItem(t) {
    return qr.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.removeItem(t);
    });
  }
}
cn.KeyValueStorage = Sc;
var Ef = cn.default = Sc, Zr = {}, hi = {}, te = {}, Sn = {}, di = {}, Co;
function Sf() {
  if (Co)
    return di;
  Co = 1, Object.defineProperty(di, "__esModule", { value: !0 }), di.delay = void 0;
  function e(t) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, t);
    });
  }
  return di.delay = e, di;
}
var Or = {}, Dn = {}, xr = {}, Ro;
function Df() {
  return Ro || (Ro = 1, Object.defineProperty(xr, "__esModule", { value: !0 }), xr.ONE_THOUSAND = xr.ONE_HUNDRED = void 0, xr.ONE_HUNDRED = 100, xr.ONE_THOUSAND = 1e3), xr;
}
var On = {}, To;
function Of() {
  return To || (To = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ONE_YEAR = e.FOUR_WEEKS = e.THREE_WEEKS = e.TWO_WEEKS = e.ONE_WEEK = e.THIRTY_DAYS = e.SEVEN_DAYS = e.FIVE_DAYS = e.THREE_DAYS = e.ONE_DAY = e.TWENTY_FOUR_HOURS = e.TWELVE_HOURS = e.SIX_HOURS = e.THREE_HOURS = e.ONE_HOUR = e.SIXTY_MINUTES = e.THIRTY_MINUTES = e.TEN_MINUTES = e.FIVE_MINUTES = e.ONE_MINUTE = e.SIXTY_SECONDS = e.THIRTY_SECONDS = e.TEN_SECONDS = e.FIVE_SECONDS = e.ONE_SECOND = void 0, e.ONE_SECOND = 1, e.FIVE_SECONDS = 5, e.TEN_SECONDS = 10, e.THIRTY_SECONDS = 30, e.SIXTY_SECONDS = 60, e.ONE_MINUTE = e.SIXTY_SECONDS, e.FIVE_MINUTES = e.ONE_MINUTE * 5, e.TEN_MINUTES = e.ONE_MINUTE * 10, e.THIRTY_MINUTES = e.ONE_MINUTE * 30, e.SIXTY_MINUTES = e.ONE_MINUTE * 60, e.ONE_HOUR = e.SIXTY_MINUTES, e.THREE_HOURS = e.ONE_HOUR * 3, e.SIX_HOURS = e.ONE_HOUR * 6, e.TWELVE_HOURS = e.ONE_HOUR * 12, e.TWENTY_FOUR_HOURS = e.ONE_HOUR * 24, e.ONE_DAY = e.TWENTY_FOUR_HOURS, e.THREE_DAYS = e.ONE_DAY * 3, e.FIVE_DAYS = e.ONE_DAY * 5, e.SEVEN_DAYS = e.ONE_DAY * 7, e.THIRTY_DAYS = e.ONE_DAY * 30, e.ONE_WEEK = e.SEVEN_DAYS, e.TWO_WEEKS = e.ONE_WEEK * 2, e.THREE_WEEKS = e.ONE_WEEK * 3, e.FOUR_WEEKS = e.ONE_WEEK * 4, e.ONE_YEAR = e.ONE_DAY * 365;
  }(On)), On;
}
var Po;
function Dc() {
  return Po || (Po = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = Kt;
    t.__exportStar(Df(), e), t.__exportStar(Of(), e);
  }(Dn)), Dn;
}
var No;
function xf() {
  if (No)
    return Or;
  No = 1, Object.defineProperty(Or, "__esModule", { value: !0 }), Or.fromMiliseconds = Or.toMiliseconds = void 0;
  const e = Dc();
  function t(i) {
    return i * e.ONE_THOUSAND;
  }
  Or.toMiliseconds = t;
  function r(i) {
    return Math.floor(i / e.ONE_THOUSAND);
  }
  return Or.fromMiliseconds = r, Or;
}
var Lo;
function If() {
  return Lo || (Lo = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = Kt;
    t.__exportStar(Sf(), e), t.__exportStar(xf(), e);
  }(Sn)), Sn;
}
var Vr = {}, Uo;
function Af() {
  if (Uo)
    return Vr;
  Uo = 1, Object.defineProperty(Vr, "__esModule", { value: !0 }), Vr.Watch = void 0;
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
  return Vr.Watch = e, Vr.default = e, Vr;
}
var xn = {}, pi = {}, Fo;
function Cf() {
  if (Fo)
    return pi;
  Fo = 1, Object.defineProperty(pi, "__esModule", { value: !0 }), pi.IWatch = void 0;
  class e {
  }
  return pi.IWatch = e, pi;
}
var $o;
function Rf() {
  return $o || ($o = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), Kt.__exportStar(Cf(), e);
  }(xn)), xn;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = Kt;
  t.__exportStar(If(), e), t.__exportStar(Af(), e), t.__exportStar(Rf(), e), t.__exportStar(Dc(), e);
})(te);
var In = {}, gi = {};
let Ur = class {
};
const Tf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: Ur
}, Symbol.toStringTag, { value: "Module" })), Pf = /* @__PURE__ */ Es(Tf);
var Mo;
function Nf() {
  if (Mo)
    return gi;
  Mo = 1, Object.defineProperty(gi, "__esModule", { value: !0 }), gi.IHeartBeat = void 0;
  const e = Pf;
  class t extends e.IEvents {
    constructor(i) {
      super();
    }
  }
  return gi.IHeartBeat = t, gi;
}
var jo;
function Oc() {
  return jo || (jo = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), Kt.__exportStar(Nf(), e);
  }(In)), In;
}
var An = {}, Ir = {}, Bo;
function Lf() {
  if (Bo)
    return Ir;
  Bo = 1, Object.defineProperty(Ir, "__esModule", { value: !0 }), Ir.HEARTBEAT_EVENTS = Ir.HEARTBEAT_INTERVAL = void 0;
  const e = te;
  return Ir.HEARTBEAT_INTERVAL = e.FIVE_SECONDS, Ir.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, Ir;
}
var zo;
function xc() {
  return zo || (zo = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), Kt.__exportStar(Lf(), e);
  }(An)), An;
}
var Vo;
function Uf() {
  if (Vo)
    return hi;
  Vo = 1, Object.defineProperty(hi, "__esModule", { value: !0 }), hi.HeartBeat = void 0;
  const e = Kt, t = Xt, r = te, i = Oc(), n = xc();
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
  t.__exportStar(Uf(), e), t.__exportStar(Oc(), e), t.__exportStar(xc(), e);
})(Zr);
var Re = {}, Cn, qo;
function Ff() {
  if (qo)
    return Cn;
  qo = 1;
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
    var d = i.length;
    if (d === 0)
      return r;
    for (var b = "", _ = 1 - u, m = -1, D = r && r.length || 0, I = 0; I < D; ) {
      if (r.charCodeAt(I) === 37 && I + 1 < D) {
        switch (m = m > -1 ? m : 0, r.charCodeAt(I + 1)) {
          case 100:
          case 102:
            if (_ >= d || i[_] == null)
              break;
            m < I && (b += r.slice(m, I)), b += Number(i[_]), m = I + 2, I++;
            break;
          case 105:
            if (_ >= d || i[_] == null)
              break;
            m < I && (b += r.slice(m, I)), b += Math.floor(Number(i[_])), m = I + 2, I++;
            break;
          case 79:
          case 111:
          case 106:
            if (_ >= d || i[_] === void 0)
              break;
            m < I && (b += r.slice(m, I));
            var U = typeof i[_];
            if (U === "string") {
              b += "'" + i[_] + "'", m = I + 2, I++;
              break;
            }
            if (U === "function") {
              b += i[_].name || "<anonymous>", m = I + 2, I++;
              break;
            }
            b += s(i[_]), m = I + 2, I++;
            break;
          case 115:
            if (_ >= d)
              break;
            m < I && (b += r.slice(m, I)), b += String(i[_]), m = I + 2, I++;
            break;
          case 37:
            m < I && (b += r.slice(m, I)), b += "%", m = I + 2, I++, _--;
            break;
        }
        ++_;
      }
      ++I;
    }
    return m === -1 ? r : (m < D && (b += r.slice(m)), b);
  }
  return Cn;
}
var Rn, Ko;
function $f() {
  if (Ko)
    return Rn;
  Ko = 1;
  const e = Ff();
  Rn = n;
  const t = w().console || {}, r = {
    mapHttpRequest: D,
    mapHttpResponse: D,
    wrapRequestSerializer: I,
    wrapResponseSerializer: I,
    wrapErrorSerializer: I,
    req: D,
    res: D,
    err: _
  };
  function i(h, o) {
    return Array.isArray(h) ? h.filter(function(R) {
      return R !== "!stdSerializers.err";
    }) : h === !0 ? Object.keys(o) : !1;
  }
  function n(h) {
    h = h || {}, h.browser = h.browser || {};
    const o = h.browser.transmit;
    if (o && typeof o.send != "function")
      throw Error("pino: transmit option must have a send function");
    const p = h.browser.write || t;
    h.browser.write && (h.browser.asObject = !0);
    const R = h.serializers || {}, N = i(h.browser.serialize, R);
    let F = h.browser.serialize;
    Array.isArray(h.browser.serialize) && h.browser.serialize.indexOf("!stdSerializers.err") > -1 && (F = !1);
    const K = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof p == "function" && (p.error = p.fatal = p.warn = p.info = p.debug = p.trace = p), h.enabled === !1 && (h.level = "silent");
    const Y = h.level || "info", x = Object.create(p);
    x.log || (x.log = U), Object.defineProperty(x, "levelVal", {
      get: H
    }), Object.defineProperty(x, "level", {
      get: q,
      set: B
    });
    const T = {
      transmit: o,
      serialize: N,
      asObject: h.browser.asObject,
      levels: K,
      timestamp: m(h)
    };
    x.levels = n.levels, x.level = Y, x.setMaxListeners = x.getMaxListeners = x.emit = x.addListener = x.on = x.prependListener = x.once = x.prependOnceListener = x.removeListener = x.removeAllListeners = x.listeners = x.listenerCount = x.eventNames = x.write = x.flush = U, x.serializers = R, x._serialize = N, x._stdErrSerialize = F, x.child = V, o && (x._logEvent = b());
    function H() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function q() {
      return this._level;
    }
    function B(j) {
      if (j !== "silent" && !this.levels.values[j])
        throw Error("unknown level " + j);
      this._level = j, s(T, x, "error", "log"), s(T, x, "fatal", "error"), s(T, x, "warn", "error"), s(T, x, "info", "log"), s(T, x, "debug", "log"), s(T, x, "trace", "log");
    }
    function V(j, W) {
      if (!j)
        throw new Error("missing bindings for child Pino");
      W = W || {}, N && j.serializers && (W.serializers = j.serializers);
      const oe = W.serializers;
      if (N && oe) {
        var k = Object.assign({}, R, oe), ie = h.browser.serialize === !0 ? Object.keys(k) : N;
        delete j.serializers, l([j], ie, k, this._stdErrSerialize);
      }
      function Q(re) {
        this._childLevel = (re._childLevel | 0) + 1, this.error = f(re, j, "error"), this.fatal = f(re, j, "fatal"), this.warn = f(re, j, "warn"), this.info = f(re, j, "info"), this.debug = f(re, j, "debug"), this.trace = f(re, j, "trace"), k && (this.serializers = k, this._serialize = ie), o && (this._logEvent = b(
          [].concat(re._logEvent.bindings, j)
        ));
      }
      return Q.prototype = this, new Q(this);
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
  }, n.stdSerializers = r, n.stdTimeFunctions = Object.assign({}, { nullTime: $, epochTime: E, unixTime: O, isoTime: g });
  function s(h, o, p, R) {
    const N = Object.getPrototypeOf(o);
    o[p] = o.levelVal > o.levels.values[p] ? U : N[p] ? N[p] : t[p] || t[R] || U, u(h, o, p);
  }
  function u(h, o, p) {
    !h.transmit && o[p] === U || (o[p] = function(R) {
      return function() {
        const F = h.timestamp(), K = new Array(arguments.length), Y = Object.getPrototypeOf && Object.getPrototypeOf(this) === t ? t : this;
        for (var x = 0; x < K.length; x++)
          K[x] = arguments[x];
        if (h.serialize && !h.asObject && l(K, this._serialize, this.serializers, this._stdErrSerialize), h.asObject ? R.call(Y, a(this, p, K, F)) : R.apply(Y, K), h.transmit) {
          const T = h.transmit.level || o.level, H = n.levels.values[T], q = n.levels.values[p];
          if (q < H)
            return;
          d(this, {
            ts: F,
            methodLevel: p,
            methodValue: q,
            transmitLevel: T,
            transmitValue: n.levels.values[h.transmit.level || o.level],
            send: h.transmit.send,
            val: o.levelVal
          }, K);
        }
      };
    }(o[p]));
  }
  function a(h, o, p, R) {
    h._serialize && l(p, h._serialize, h.serializers, h._stdErrSerialize);
    const N = p.slice();
    let F = N[0];
    const K = {};
    R && (K.time = R), K.level = n.levels.values[o];
    let Y = (h._childLevel | 0) + 1;
    if (Y < 1 && (Y = 1), F !== null && typeof F == "object") {
      for (; Y-- && typeof N[0] == "object"; )
        Object.assign(K, N.shift());
      F = N.length ? e(N.shift(), N) : void 0;
    } else
      typeof F == "string" && (F = e(N.shift(), N));
    return F !== void 0 && (K.msg = F), K;
  }
  function l(h, o, p, R) {
    for (const N in h)
      if (R && h[N] instanceof Error)
        h[N] = n.stdSerializers.err(h[N]);
      else if (typeof h[N] == "object" && !Array.isArray(h[N]))
        for (const F in h[N])
          o && o.indexOf(F) > -1 && F in p && (h[N][F] = p[F](h[N][F]));
  }
  function f(h, o, p) {
    return function() {
      const R = new Array(1 + arguments.length);
      R[0] = o;
      for (var N = 1; N < R.length; N++)
        R[N] = arguments[N - 1];
      return h[p].apply(this, R);
    };
  }
  function d(h, o, p) {
    const R = o.send, N = o.ts, F = o.methodLevel, K = o.methodValue, Y = o.val, x = h._logEvent.bindings;
    l(
      p,
      h._serialize || Object.keys(h.serializers),
      h.serializers,
      h._stdErrSerialize === void 0 ? !0 : h._stdErrSerialize
    ), h._logEvent.ts = N, h._logEvent.messages = p.filter(function(T) {
      return x.indexOf(T) === -1;
    }), h._logEvent.level.label = F, h._logEvent.level.value = K, R(F, h._logEvent, Y), h._logEvent = b(x);
  }
  function b(h) {
    return {
      ts: 0,
      messages: [],
      bindings: h || [],
      level: { label: "", value: 0 }
    };
  }
  function _(h) {
    const o = {
      type: h.constructor.name,
      msg: h.message,
      stack: h.stack
    };
    for (const p in h)
      o[p] === void 0 && (o[p] = h[p]);
    return o;
  }
  function m(h) {
    return typeof h.timestamp == "function" ? h.timestamp : h.timestamp === !1 ? $ : E;
  }
  function D() {
    return {};
  }
  function I(h) {
    return h;
  }
  function U() {
  }
  function $() {
    return !1;
  }
  function E() {
    return Date.now();
  }
  function O() {
    return Math.round(Date.now() / 1e3);
  }
  function g() {
    return new Date(Date.now()).toISOString();
  }
  function w() {
    function h(o) {
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
      return h(self) || h(window) || h(this) || {};
    }
  }
  return Rn;
}
var Ar = {}, Wo;
function Ic() {
  return Wo || (Wo = 1, Object.defineProperty(Ar, "__esModule", { value: !0 }), Ar.PINO_CUSTOM_CONTEXT_KEY = Ar.PINO_LOGGER_DEFAULTS = void 0, Ar.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, Ar.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), Ar;
}
var wt = {}, ko;
function Mf() {
  if (ko)
    return wt;
  ko = 1, Object.defineProperty(wt, "__esModule", { value: !0 }), wt.generateChildLogger = wt.formatChildLoggerContext = wt.getLoggerContext = wt.setBrowserLoggerContext = wt.getBrowserLoggerContext = wt.getDefaultLoggerOptions = void 0;
  const e = Ic();
  function t(a) {
    return Object.assign(Object.assign({}, a), { level: (a == null ? void 0 : a.level) || e.PINO_LOGGER_DEFAULTS.level });
  }
  wt.getDefaultLoggerOptions = t;
  function r(a, l = e.PINO_CUSTOM_CONTEXT_KEY) {
    return a[l] || "";
  }
  wt.getBrowserLoggerContext = r;
  function i(a, l, f = e.PINO_CUSTOM_CONTEXT_KEY) {
    return a[f] = l, a;
  }
  wt.setBrowserLoggerContext = i;
  function n(a, l = e.PINO_CUSTOM_CONTEXT_KEY) {
    let f = "";
    return typeof a.bindings > "u" ? f = r(a, l) : f = a.bindings().context || "", f;
  }
  wt.getLoggerContext = n;
  function s(a, l, f = e.PINO_CUSTOM_CONTEXT_KEY) {
    const d = n(a, f);
    return d.trim() ? `${d}/${l}` : l;
  }
  wt.formatChildLoggerContext = s;
  function u(a, l, f = e.PINO_CUSTOM_CONTEXT_KEY) {
    const d = s(a, l, f), b = a.child({ context: d });
    return i(b, d, f);
  }
  return wt.generateChildLogger = u, wt;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.pino = void 0;
  const t = Kt, r = t.__importDefault($f());
  Object.defineProperty(e, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), t.__exportStar(Ic(), e), t.__exportStar(Mf(), e);
})(Re);
let jf = class extends Ur {
  constructor(t) {
    super(), this.opts = t, this.protocol = "wc", this.version = 2;
  }
}, Bf = class extends Ur {
  constructor(t, r) {
    super(), this.core = t, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}, zf = class {
  constructor(t, r) {
    this.logger = t, this.core = r;
  }
}, Vf = class extends Ur {
  constructor(t, r) {
    super(), this.relayer = t, this.logger = r;
  }
}, qf = class extends Ur {
  constructor(t) {
    super();
  }
}, Kf = class {
  constructor(t, r, i, n) {
    this.core = t, this.logger = r, this.name = i;
  }
}, Wf = class extends Ur {
  constructor(t, r) {
    super(), this.relayer = t, this.logger = r;
  }
}, kf = class extends Ur {
  constructor(t, r) {
    super(), this.core = t, this.logger = r;
  }
}, Hf = class {
  constructor(t, r) {
    this.projectId = t, this.logger = r;
  }
}, Gf = class {
  constructor(t) {
    this.opts = t, this.protocol = "wc", this.version = 2;
  }
}, Yf = class {
  constructor(t) {
    this.client = t;
  }
};
const Jf = (e) => JSON.stringify(e, (t, r) => typeof r == "bigint" ? r.toString() + "n" : r), Xf = (e) => {
  const t = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = e.replace(t, '$1"$2n"$3');
  return JSON.parse(r, (i, n) => typeof n == "string" && n.match(/^\d+n$/) ? BigInt(n.substring(0, n.length - 1)) : n);
};
function Ac(e) {
  if (typeof e != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof e}`);
  try {
    return Xf(e);
  } catch {
    return e;
  }
}
function Ds(e) {
  return typeof e == "string" ? e : Jf(e) || "";
}
var Os = {}, Qr = {}, un = {}, ln = {};
Object.defineProperty(ln, "__esModule", { value: !0 });
ln.BrowserRandomSource = void 0;
const Ho = 65536;
class Zf {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const t = typeof self < "u" ? self.crypto || self.msCrypto : null;
    t && t.getRandomValues !== void 0 && (this._crypto = t, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(t) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const r = new Uint8Array(t);
    for (let i = 0; i < r.length; i += Ho)
      this._crypto.getRandomValues(r.subarray(i, i + Math.min(r.length - i, Ho)));
    return r;
  }
}
ln.BrowserRandomSource = Zf;
function Qf(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var fn = {}, $t = {};
Object.defineProperty($t, "__esModule", { value: !0 });
function eh(e) {
  for (var t = 0; t < e.length; t++)
    e[t] = 0;
  return e;
}
$t.wipe = eh;
const th = {}, rh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: th
}, Symbol.toStringTag, { value: "Module" })), ih = /* @__PURE__ */ Es(rh);
Object.defineProperty(fn, "__esModule", { value: !0 });
fn.NodeRandomSource = void 0;
const nh = $t;
class sh {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof Qf < "u") {
      const t = ih;
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
    return (0, nh.wipe)(r), i;
  }
}
fn.NodeRandomSource = sh;
Object.defineProperty(un, "__esModule", { value: !0 });
un.SystemRandomSource = void 0;
const oh = ln, ah = fn;
class ch {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new oh.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new ah.NodeRandomSource(), this._source.isAvailable) {
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
un.SystemRandomSource = ch;
var le = {}, Cc = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  function t(a, l) {
    var f = a >>> 16 & 65535, d = a & 65535, b = l >>> 16 & 65535, _ = l & 65535;
    return d * _ + (f * _ + d * b << 16 >>> 0) | 0;
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
})(Cc);
Object.defineProperty(le, "__esModule", { value: !0 });
var Rc = Cc;
function uh(e, t) {
  return t === void 0 && (t = 0), (e[t + 0] << 8 | e[t + 1]) << 16 >> 16;
}
le.readInt16BE = uh;
function lh(e, t) {
  return t === void 0 && (t = 0), (e[t + 0] << 8 | e[t + 1]) >>> 0;
}
le.readUint16BE = lh;
function fh(e, t) {
  return t === void 0 && (t = 0), (e[t + 1] << 8 | e[t]) << 16 >> 16;
}
le.readInt16LE = fh;
function hh(e, t) {
  return t === void 0 && (t = 0), (e[t + 1] << 8 | e[t]) >>> 0;
}
le.readUint16LE = hh;
function Tc(e, t, r) {
  return t === void 0 && (t = new Uint8Array(2)), r === void 0 && (r = 0), t[r + 0] = e >>> 8, t[r + 1] = e >>> 0, t;
}
le.writeUint16BE = Tc;
le.writeInt16BE = Tc;
function Pc(e, t, r) {
  return t === void 0 && (t = new Uint8Array(2)), r === void 0 && (r = 0), t[r + 0] = e >>> 0, t[r + 1] = e >>> 8, t;
}
le.writeUint16LE = Pc;
le.writeInt16LE = Pc;
function Qn(e, t) {
  return t === void 0 && (t = 0), e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
}
le.readInt32BE = Qn;
function es(e, t) {
  return t === void 0 && (t = 0), (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0;
}
le.readUint32BE = es;
function ts(e, t) {
  return t === void 0 && (t = 0), e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t];
}
le.readInt32LE = ts;
function rs(e, t) {
  return t === void 0 && (t = 0), (e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]) >>> 0;
}
le.readUint32LE = rs;
function Yi(e, t, r) {
  return t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0), t[r + 0] = e >>> 24, t[r + 1] = e >>> 16, t[r + 2] = e >>> 8, t[r + 3] = e >>> 0, t;
}
le.writeUint32BE = Yi;
le.writeInt32BE = Yi;
function Ji(e, t, r) {
  return t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0), t[r + 0] = e >>> 0, t[r + 1] = e >>> 8, t[r + 2] = e >>> 16, t[r + 3] = e >>> 24, t;
}
le.writeUint32LE = Ji;
le.writeInt32LE = Ji;
function dh(e, t) {
  t === void 0 && (t = 0);
  var r = Qn(e, t), i = Qn(e, t + 4);
  return r * 4294967296 + i - (i >> 31) * 4294967296;
}
le.readInt64BE = dh;
function ph(e, t) {
  t === void 0 && (t = 0);
  var r = es(e, t), i = es(e, t + 4);
  return r * 4294967296 + i;
}
le.readUint64BE = ph;
function gh(e, t) {
  t === void 0 && (t = 0);
  var r = ts(e, t), i = ts(e, t + 4);
  return i * 4294967296 + r - (r >> 31) * 4294967296;
}
le.readInt64LE = gh;
function yh(e, t) {
  t === void 0 && (t = 0);
  var r = rs(e, t), i = rs(e, t + 4);
  return i * 4294967296 + r;
}
le.readUint64LE = yh;
function Nc(e, t, r) {
  return t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0), Yi(e / 4294967296 >>> 0, t, r), Yi(e >>> 0, t, r + 4), t;
}
le.writeUint64BE = Nc;
le.writeInt64BE = Nc;
function Lc(e, t, r) {
  return t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0), Ji(e >>> 0, t, r), Ji(e / 4294967296 >>> 0, t, r + 4), t;
}
le.writeUint64LE = Lc;
le.writeInt64LE = Lc;
function bh(e, t, r) {
  if (r === void 0 && (r = 0), e % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (e / 8 > t.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var i = 0, n = 1, s = e / 8 + r - 1; s >= r; s--)
    i += t[s] * n, n *= 256;
  return i;
}
le.readUintBE = bh;
function vh(e, t, r) {
  if (r === void 0 && (r = 0), e % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (e / 8 > t.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var i = 0, n = 1, s = r; s < r + e / 8; s++)
    i += t[s] * n, n *= 256;
  return i;
}
le.readUintLE = vh;
function mh(e, t, r, i) {
  if (r === void 0 && (r = new Uint8Array(e / 8)), i === void 0 && (i = 0), e % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!Rc.isSafeInteger(t))
    throw new Error("writeUintBE value must be an integer");
  for (var n = 1, s = e / 8 + i - 1; s >= i; s--)
    r[s] = t / n & 255, n *= 256;
  return r;
}
le.writeUintBE = mh;
function _h(e, t, r, i) {
  if (r === void 0 && (r = new Uint8Array(e / 8)), i === void 0 && (i = 0), e % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!Rc.isSafeInteger(t))
    throw new Error("writeUintLE value must be an integer");
  for (var n = 1, s = i; s < i + e / 8; s++)
    r[s] = t / n & 255, n *= 256;
  return r;
}
le.writeUintLE = _h;
function wh(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat32(t);
}
le.readFloat32BE = wh;
function Eh(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat32(t, !0);
}
le.readFloat32LE = Eh;
function Sh(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat64(t);
}
le.readFloat64BE = Sh;
function Dh(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat64(t, !0);
}
le.readFloat64LE = Dh;
function Oh(e, t, r) {
  t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0);
  var i = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return i.setFloat32(r, e), t;
}
le.writeFloat32BE = Oh;
function xh(e, t, r) {
  t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0);
  var i = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return i.setFloat32(r, e, !0), t;
}
le.writeFloat32LE = xh;
function Ih(e, t, r) {
  t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0);
  var i = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return i.setFloat64(r, e), t;
}
le.writeFloat64BE = Ih;
function Ah(e, t, r) {
  t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0);
  var i = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return i.setFloat64(r, e, !0), t;
}
le.writeFloat64LE = Ah;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.randomStringForEntropy = e.randomString = e.randomUint32 = e.randomBytes = e.defaultRandomSource = void 0;
  const t = un, r = le, i = $t;
  e.defaultRandomSource = new t.SystemRandomSource();
  function n(f, d = e.defaultRandomSource) {
    return d.randomBytes(f);
  }
  e.randomBytes = n;
  function s(f = e.defaultRandomSource) {
    const d = n(4, f), b = (0, r.readUint32LE)(d);
    return (0, i.wipe)(d), b;
  }
  e.randomUint32 = s;
  const u = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function a(f, d = u, b = e.defaultRandomSource) {
    if (d.length < 2)
      throw new Error("randomString charset is too short");
    if (d.length > 256)
      throw new Error("randomString charset is too long");
    let _ = "";
    const m = d.length, D = 256 - 256 % m;
    for (; f > 0; ) {
      const I = n(Math.ceil(f * 256 / D), b);
      for (let U = 0; U < I.length && f > 0; U++) {
        const $ = I[U];
        $ < D && (_ += d.charAt($ % m), f--);
      }
      (0, i.wipe)(I);
    }
    return _;
  }
  e.randomString = a;
  function l(f, d = u, b = e.defaultRandomSource) {
    const _ = Math.ceil(f / (Math.log(d.length) / Math.LN2));
    return a(_, d, b);
  }
  e.randomStringForEntropy = l;
})(Qr);
var Uc = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = le, r = $t;
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
        var d = 0;
        if (this._bytesHashed += f, this._bufferLength > 0) {
          for (; this._bufferLength < e.BLOCK_SIZE && f > 0; )
            this._buffer[this._bufferLength++] = l[d++], f--;
          this._bufferLength === this.blockSize && (s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (f >= this.blockSize && (d = s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, l, d, f), f %= this.blockSize); f > 0; )
          this._buffer[this._bufferLength++] = l[d++], f--;
        return this;
      }, a.prototype.finish = function(l) {
        if (!this._finished) {
          var f = this._bytesHashed, d = this._bufferLength, b = f / 536870912 | 0, _ = f << 3, m = f % 128 < 112 ? 128 : 256;
          this._buffer[d] = 128;
          for (var D = d + 1; D < m - 8; D++)
            this._buffer[D] = 0;
          t.writeUint32BE(b, this._buffer, m - 8), t.writeUint32BE(_, this._buffer, m - 4), s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, m), this._finished = !0;
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
  function s(a, l, f, d, b, _, m) {
    for (var D = f[0], I = f[1], U = f[2], $ = f[3], E = f[4], O = f[5], g = f[6], w = f[7], h = d[0], o = d[1], p = d[2], R = d[3], N = d[4], F = d[5], K = d[6], Y = d[7], x, T, H, q, B, V, j, W; m >= 128; ) {
      for (var oe = 0; oe < 16; oe++) {
        var k = 8 * oe + _;
        a[oe] = t.readUint32BE(b, k), l[oe] = t.readUint32BE(b, k + 4);
      }
      for (var oe = 0; oe < 80; oe++) {
        var ie = D, Q = I, re = U, L = $, P = E, A = O, c = g, S = w, G = h, Z = o, be = p, ve = R, he = N, xe = F, Be = K, Le = Y;
        if (x = w, T = Y, B = T & 65535, V = T >>> 16, j = x & 65535, W = x >>> 16, x = (E >>> 14 | N << 32 - 14) ^ (E >>> 18 | N << 32 - 18) ^ (N >>> 41 - 32 | E << 32 - (41 - 32)), T = (N >>> 14 | E << 32 - 14) ^ (N >>> 18 | E << 32 - 18) ^ (E >>> 41 - 32 | N << 32 - (41 - 32)), B += T & 65535, V += T >>> 16, j += x & 65535, W += x >>> 16, x = E & O ^ ~E & g, T = N & F ^ ~N & K, B += T & 65535, V += T >>> 16, j += x & 65535, W += x >>> 16, x = n[oe * 2], T = n[oe * 2 + 1], B += T & 65535, V += T >>> 16, j += x & 65535, W += x >>> 16, x = a[oe % 16], T = l[oe % 16], B += T & 65535, V += T >>> 16, j += x & 65535, W += x >>> 16, V += B >>> 16, j += V >>> 16, W += j >>> 16, H = j & 65535 | W << 16, q = B & 65535 | V << 16, x = H, T = q, B = T & 65535, V = T >>> 16, j = x & 65535, W = x >>> 16, x = (D >>> 28 | h << 32 - 28) ^ (h >>> 34 - 32 | D << 32 - (34 - 32)) ^ (h >>> 39 - 32 | D << 32 - (39 - 32)), T = (h >>> 28 | D << 32 - 28) ^ (D >>> 34 - 32 | h << 32 - (34 - 32)) ^ (D >>> 39 - 32 | h << 32 - (39 - 32)), B += T & 65535, V += T >>> 16, j += x & 65535, W += x >>> 16, x = D & I ^ D & U ^ I & U, T = h & o ^ h & p ^ o & p, B += T & 65535, V += T >>> 16, j += x & 65535, W += x >>> 16, V += B >>> 16, j += V >>> 16, W += j >>> 16, S = j & 65535 | W << 16, Le = B & 65535 | V << 16, x = L, T = ve, B = T & 65535, V = T >>> 16, j = x & 65535, W = x >>> 16, x = H, T = q, B += T & 65535, V += T >>> 16, j += x & 65535, W += x >>> 16, V += B >>> 16, j += V >>> 16, W += j >>> 16, L = j & 65535 | W << 16, ve = B & 65535 | V << 16, I = ie, U = Q, $ = re, E = L, O = P, g = A, w = c, D = S, o = G, p = Z, R = be, N = ve, F = he, K = xe, Y = Be, h = Le, oe % 16 === 15)
          for (var k = 0; k < 16; k++)
            x = a[k], T = l[k], B = T & 65535, V = T >>> 16, j = x & 65535, W = x >>> 16, x = a[(k + 9) % 16], T = l[(k + 9) % 16], B += T & 65535, V += T >>> 16, j += x & 65535, W += x >>> 16, H = a[(k + 1) % 16], q = l[(k + 1) % 16], x = (H >>> 1 | q << 32 - 1) ^ (H >>> 8 | q << 32 - 8) ^ H >>> 7, T = (q >>> 1 | H << 32 - 1) ^ (q >>> 8 | H << 32 - 8) ^ (q >>> 7 | H << 32 - 7), B += T & 65535, V += T >>> 16, j += x & 65535, W += x >>> 16, H = a[(k + 14) % 16], q = l[(k + 14) % 16], x = (H >>> 19 | q << 32 - 19) ^ (q >>> 61 - 32 | H << 32 - (61 - 32)) ^ H >>> 6, T = (q >>> 19 | H << 32 - 19) ^ (H >>> 61 - 32 | q << 32 - (61 - 32)) ^ (q >>> 6 | H << 32 - 6), B += T & 65535, V += T >>> 16, j += x & 65535, W += x >>> 16, V += B >>> 16, j += V >>> 16, W += j >>> 16, a[k] = j & 65535 | W << 16, l[k] = B & 65535 | V << 16;
      }
      x = D, T = h, B = T & 65535, V = T >>> 16, j = x & 65535, W = x >>> 16, x = f[0], T = d[0], B += T & 65535, V += T >>> 16, j += x & 65535, W += x >>> 16, V += B >>> 16, j += V >>> 16, W += j >>> 16, f[0] = D = j & 65535 | W << 16, d[0] = h = B & 65535 | V << 16, x = I, T = o, B = T & 65535, V = T >>> 16, j = x & 65535, W = x >>> 16, x = f[1], T = d[1], B += T & 65535, V += T >>> 16, j += x & 65535, W += x >>> 16, V += B >>> 16, j += V >>> 16, W += j >>> 16, f[1] = I = j & 65535 | W << 16, d[1] = o = B & 65535 | V << 16, x = U, T = p, B = T & 65535, V = T >>> 16, j = x & 65535, W = x >>> 16, x = f[2], T = d[2], B += T & 65535, V += T >>> 16, j += x & 65535, W += x >>> 16, V += B >>> 16, j += V >>> 16, W += j >>> 16, f[2] = U = j & 65535 | W << 16, d[2] = p = B & 65535 | V << 16, x = $, T = R, B = T & 65535, V = T >>> 16, j = x & 65535, W = x >>> 16, x = f[3], T = d[3], B += T & 65535, V += T >>> 16, j += x & 65535, W += x >>> 16, V += B >>> 16, j += V >>> 16, W += j >>> 16, f[3] = $ = j & 65535 | W << 16, d[3] = R = B & 65535 | V << 16, x = E, T = N, B = T & 65535, V = T >>> 16, j = x & 65535, W = x >>> 16, x = f[4], T = d[4], B += T & 65535, V += T >>> 16, j += x & 65535, W += x >>> 16, V += B >>> 16, j += V >>> 16, W += j >>> 16, f[4] = E = j & 65535 | W << 16, d[4] = N = B & 65535 | V << 16, x = O, T = F, B = T & 65535, V = T >>> 16, j = x & 65535, W = x >>> 16, x = f[5], T = d[5], B += T & 65535, V += T >>> 16, j += x & 65535, W += x >>> 16, V += B >>> 16, j += V >>> 16, W += j >>> 16, f[5] = O = j & 65535 | W << 16, d[5] = F = B & 65535 | V << 16, x = g, T = K, B = T & 65535, V = T >>> 16, j = x & 65535, W = x >>> 16, x = f[6], T = d[6], B += T & 65535, V += T >>> 16, j += x & 65535, W += x >>> 16, V += B >>> 16, j += V >>> 16, W += j >>> 16, f[6] = g = j & 65535 | W << 16, d[6] = K = B & 65535 | V << 16, x = w, T = Y, B = T & 65535, V = T >>> 16, j = x & 65535, W = x >>> 16, x = f[7], T = d[7], B += T & 65535, V += T >>> 16, j += x & 65535, W += x >>> 16, V += B >>> 16, j += V >>> 16, W += j >>> 16, f[7] = w = j & 65535 | W << 16, d[7] = Y = B & 65535 | V << 16, _ += 128, m -= 128;
    }
    return _;
  }
  function u(a) {
    var l = new i();
    l.update(a);
    var f = l.digest();
    return l.clean(), f;
  }
  e.hash = u;
})(Uc);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.convertSecretKeyToX25519 = e.convertPublicKeyToX25519 = e.verify = e.sign = e.extractPublicKeyFromSecretKey = e.generateKeyPair = e.generateKeyPairFromSeed = e.SEED_LENGTH = e.SECRET_KEY_LENGTH = e.PUBLIC_KEY_LENGTH = e.SIGNATURE_LENGTH = void 0;
  const t = Qr, r = Uc, i = $t;
  e.SIGNATURE_LENGTH = 64, e.PUBLIC_KEY_LENGTH = 32, e.SECRET_KEY_LENGTH = 64, e.SEED_LENGTH = 32;
  function n(L) {
    const P = new Float64Array(16);
    if (L)
      for (let A = 0; A < L.length; A++)
        P[A] = L[A];
    return P;
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
  ]), d = n([
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
  ]), _ = n([
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
  function m(L, P) {
    for (let A = 0; A < 16; A++)
      L[A] = P[A] | 0;
  }
  function D(L) {
    let P = 1;
    for (let A = 0; A < 16; A++) {
      let c = L[A] + P + 65535;
      P = Math.floor(c / 65536), L[A] = c - P * 65536;
    }
    L[0] += P - 1 + 37 * (P - 1);
  }
  function I(L, P, A) {
    const c = ~(A - 1);
    for (let S = 0; S < 16; S++) {
      const G = c & (L[S] ^ P[S]);
      L[S] ^= G, P[S] ^= G;
    }
  }
  function U(L, P) {
    const A = n(), c = n();
    for (let S = 0; S < 16; S++)
      c[S] = P[S];
    D(c), D(c), D(c);
    for (let S = 0; S < 2; S++) {
      A[0] = c[0] - 65517;
      for (let Z = 1; Z < 15; Z++)
        A[Z] = c[Z] - 65535 - (A[Z - 1] >> 16 & 1), A[Z - 1] &= 65535;
      A[15] = c[15] - 32767 - (A[14] >> 16 & 1);
      const G = A[15] >> 16 & 1;
      A[14] &= 65535, I(c, A, 1 - G);
    }
    for (let S = 0; S < 16; S++)
      L[2 * S] = c[S] & 255, L[2 * S + 1] = c[S] >> 8;
  }
  function $(L, P) {
    let A = 0;
    for (let c = 0; c < 32; c++)
      A |= L[c] ^ P[c];
    return (1 & A - 1 >>> 8) - 1;
  }
  function E(L, P) {
    const A = new Uint8Array(32), c = new Uint8Array(32);
    return U(A, L), U(c, P), $(A, c);
  }
  function O(L) {
    const P = new Uint8Array(32);
    return U(P, L), P[0] & 1;
  }
  function g(L, P) {
    for (let A = 0; A < 16; A++)
      L[A] = P[2 * A] + (P[2 * A + 1] << 8);
    L[15] &= 32767;
  }
  function w(L, P, A) {
    for (let c = 0; c < 16; c++)
      L[c] = P[c] + A[c];
  }
  function h(L, P, A) {
    for (let c = 0; c < 16; c++)
      L[c] = P[c] - A[c];
  }
  function o(L, P, A) {
    let c, S, G = 0, Z = 0, be = 0, ve = 0, he = 0, xe = 0, Be = 0, Le = 0, De = 0, we = 0, de = 0, ge = 0, pe = 0, ue = 0, ce = 0, ne = 0, ye = 0, me = 0, ae = 0, Ee = 0, Ie = 0, Te = 0, Pe = 0, Ae = 0, Tt = 0, Mt = 0, Zt = 0, lt = 0, Qt = 0, jt = 0, lr = 0, ze = A[0], $e = A[1], We = A[2], Ve = A[3], ke = A[4], Me = A[5], Xe = A[6], et = A[7], tt = A[8], Ze = A[9], rt = A[10], Qe = A[11], He = A[12], Ue = A[13], v = A[14], M = A[15];
    c = P[0], G += c * ze, Z += c * $e, be += c * We, ve += c * Ve, he += c * ke, xe += c * Me, Be += c * Xe, Le += c * et, De += c * tt, we += c * Ze, de += c * rt, ge += c * Qe, pe += c * He, ue += c * Ue, ce += c * v, ne += c * M, c = P[1], Z += c * ze, be += c * $e, ve += c * We, he += c * Ve, xe += c * ke, Be += c * Me, Le += c * Xe, De += c * et, we += c * tt, de += c * Ze, ge += c * rt, pe += c * Qe, ue += c * He, ce += c * Ue, ne += c * v, ye += c * M, c = P[2], be += c * ze, ve += c * $e, he += c * We, xe += c * Ve, Be += c * ke, Le += c * Me, De += c * Xe, we += c * et, de += c * tt, ge += c * Ze, pe += c * rt, ue += c * Qe, ce += c * He, ne += c * Ue, ye += c * v, me += c * M, c = P[3], ve += c * ze, he += c * $e, xe += c * We, Be += c * Ve, Le += c * ke, De += c * Me, we += c * Xe, de += c * et, ge += c * tt, pe += c * Ze, ue += c * rt, ce += c * Qe, ne += c * He, ye += c * Ue, me += c * v, ae += c * M, c = P[4], he += c * ze, xe += c * $e, Be += c * We, Le += c * Ve, De += c * ke, we += c * Me, de += c * Xe, ge += c * et, pe += c * tt, ue += c * Ze, ce += c * rt, ne += c * Qe, ye += c * He, me += c * Ue, ae += c * v, Ee += c * M, c = P[5], xe += c * ze, Be += c * $e, Le += c * We, De += c * Ve, we += c * ke, de += c * Me, ge += c * Xe, pe += c * et, ue += c * tt, ce += c * Ze, ne += c * rt, ye += c * Qe, me += c * He, ae += c * Ue, Ee += c * v, Ie += c * M, c = P[6], Be += c * ze, Le += c * $e, De += c * We, we += c * Ve, de += c * ke, ge += c * Me, pe += c * Xe, ue += c * et, ce += c * tt, ne += c * Ze, ye += c * rt, me += c * Qe, ae += c * He, Ee += c * Ue, Ie += c * v, Te += c * M, c = P[7], Le += c * ze, De += c * $e, we += c * We, de += c * Ve, ge += c * ke, pe += c * Me, ue += c * Xe, ce += c * et, ne += c * tt, ye += c * Ze, me += c * rt, ae += c * Qe, Ee += c * He, Ie += c * Ue, Te += c * v, Pe += c * M, c = P[8], De += c * ze, we += c * $e, de += c * We, ge += c * Ve, pe += c * ke, ue += c * Me, ce += c * Xe, ne += c * et, ye += c * tt, me += c * Ze, ae += c * rt, Ee += c * Qe, Ie += c * He, Te += c * Ue, Pe += c * v, Ae += c * M, c = P[9], we += c * ze, de += c * $e, ge += c * We, pe += c * Ve, ue += c * ke, ce += c * Me, ne += c * Xe, ye += c * et, me += c * tt, ae += c * Ze, Ee += c * rt, Ie += c * Qe, Te += c * He, Pe += c * Ue, Ae += c * v, Tt += c * M, c = P[10], de += c * ze, ge += c * $e, pe += c * We, ue += c * Ve, ce += c * ke, ne += c * Me, ye += c * Xe, me += c * et, ae += c * tt, Ee += c * Ze, Ie += c * rt, Te += c * Qe, Pe += c * He, Ae += c * Ue, Tt += c * v, Mt += c * M, c = P[11], ge += c * ze, pe += c * $e, ue += c * We, ce += c * Ve, ne += c * ke, ye += c * Me, me += c * Xe, ae += c * et, Ee += c * tt, Ie += c * Ze, Te += c * rt, Pe += c * Qe, Ae += c * He, Tt += c * Ue, Mt += c * v, Zt += c * M, c = P[12], pe += c * ze, ue += c * $e, ce += c * We, ne += c * Ve, ye += c * ke, me += c * Me, ae += c * Xe, Ee += c * et, Ie += c * tt, Te += c * Ze, Pe += c * rt, Ae += c * Qe, Tt += c * He, Mt += c * Ue, Zt += c * v, lt += c * M, c = P[13], ue += c * ze, ce += c * $e, ne += c * We, ye += c * Ve, me += c * ke, ae += c * Me, Ee += c * Xe, Ie += c * et, Te += c * tt, Pe += c * Ze, Ae += c * rt, Tt += c * Qe, Mt += c * He, Zt += c * Ue, lt += c * v, Qt += c * M, c = P[14], ce += c * ze, ne += c * $e, ye += c * We, me += c * Ve, ae += c * ke, Ee += c * Me, Ie += c * Xe, Te += c * et, Pe += c * tt, Ae += c * Ze, Tt += c * rt, Mt += c * Qe, Zt += c * He, lt += c * Ue, Qt += c * v, jt += c * M, c = P[15], ne += c * ze, ye += c * $e, me += c * We, ae += c * Ve, Ee += c * ke, Ie += c * Me, Te += c * Xe, Pe += c * et, Ae += c * tt, Tt += c * Ze, Mt += c * rt, Zt += c * Qe, lt += c * He, Qt += c * Ue, jt += c * v, lr += c * M, G += 38 * ye, Z += 38 * me, be += 38 * ae, ve += 38 * Ee, he += 38 * Ie, xe += 38 * Te, Be += 38 * Pe, Le += 38 * Ae, De += 38 * Tt, we += 38 * Mt, de += 38 * Zt, ge += 38 * lt, pe += 38 * Qt, ue += 38 * jt, ce += 38 * lr, S = 1, c = G + S + 65535, S = Math.floor(c / 65536), G = c - S * 65536, c = Z + S + 65535, S = Math.floor(c / 65536), Z = c - S * 65536, c = be + S + 65535, S = Math.floor(c / 65536), be = c - S * 65536, c = ve + S + 65535, S = Math.floor(c / 65536), ve = c - S * 65536, c = he + S + 65535, S = Math.floor(c / 65536), he = c - S * 65536, c = xe + S + 65535, S = Math.floor(c / 65536), xe = c - S * 65536, c = Be + S + 65535, S = Math.floor(c / 65536), Be = c - S * 65536, c = Le + S + 65535, S = Math.floor(c / 65536), Le = c - S * 65536, c = De + S + 65535, S = Math.floor(c / 65536), De = c - S * 65536, c = we + S + 65535, S = Math.floor(c / 65536), we = c - S * 65536, c = de + S + 65535, S = Math.floor(c / 65536), de = c - S * 65536, c = ge + S + 65535, S = Math.floor(c / 65536), ge = c - S * 65536, c = pe + S + 65535, S = Math.floor(c / 65536), pe = c - S * 65536, c = ue + S + 65535, S = Math.floor(c / 65536), ue = c - S * 65536, c = ce + S + 65535, S = Math.floor(c / 65536), ce = c - S * 65536, c = ne + S + 65535, S = Math.floor(c / 65536), ne = c - S * 65536, G += S - 1 + 37 * (S - 1), S = 1, c = G + S + 65535, S = Math.floor(c / 65536), G = c - S * 65536, c = Z + S + 65535, S = Math.floor(c / 65536), Z = c - S * 65536, c = be + S + 65535, S = Math.floor(c / 65536), be = c - S * 65536, c = ve + S + 65535, S = Math.floor(c / 65536), ve = c - S * 65536, c = he + S + 65535, S = Math.floor(c / 65536), he = c - S * 65536, c = xe + S + 65535, S = Math.floor(c / 65536), xe = c - S * 65536, c = Be + S + 65535, S = Math.floor(c / 65536), Be = c - S * 65536, c = Le + S + 65535, S = Math.floor(c / 65536), Le = c - S * 65536, c = De + S + 65535, S = Math.floor(c / 65536), De = c - S * 65536, c = we + S + 65535, S = Math.floor(c / 65536), we = c - S * 65536, c = de + S + 65535, S = Math.floor(c / 65536), de = c - S * 65536, c = ge + S + 65535, S = Math.floor(c / 65536), ge = c - S * 65536, c = pe + S + 65535, S = Math.floor(c / 65536), pe = c - S * 65536, c = ue + S + 65535, S = Math.floor(c / 65536), ue = c - S * 65536, c = ce + S + 65535, S = Math.floor(c / 65536), ce = c - S * 65536, c = ne + S + 65535, S = Math.floor(c / 65536), ne = c - S * 65536, G += S - 1 + 37 * (S - 1), L[0] = G, L[1] = Z, L[2] = be, L[3] = ve, L[4] = he, L[5] = xe, L[6] = Be, L[7] = Le, L[8] = De, L[9] = we, L[10] = de, L[11] = ge, L[12] = pe, L[13] = ue, L[14] = ce, L[15] = ne;
  }
  function p(L, P) {
    o(L, P, P);
  }
  function R(L, P) {
    const A = n();
    let c;
    for (c = 0; c < 16; c++)
      A[c] = P[c];
    for (c = 253; c >= 0; c--)
      p(A, A), c !== 2 && c !== 4 && o(A, A, P);
    for (c = 0; c < 16; c++)
      L[c] = A[c];
  }
  function N(L, P) {
    const A = n();
    let c;
    for (c = 0; c < 16; c++)
      A[c] = P[c];
    for (c = 250; c >= 0; c--)
      p(A, A), c !== 1 && o(A, A, P);
    for (c = 0; c < 16; c++)
      L[c] = A[c];
  }
  function F(L, P) {
    const A = n(), c = n(), S = n(), G = n(), Z = n(), be = n(), ve = n(), he = n(), xe = n();
    h(A, L[1], L[0]), h(xe, P[1], P[0]), o(A, A, xe), w(c, L[0], L[1]), w(xe, P[0], P[1]), o(c, c, xe), o(S, L[3], P[3]), o(S, S, f), o(G, L[2], P[2]), w(G, G, G), h(Z, c, A), h(be, G, S), w(ve, G, S), w(he, c, A), o(L[0], Z, be), o(L[1], he, ve), o(L[2], ve, be), o(L[3], Z, he);
  }
  function K(L, P, A) {
    for (let c = 0; c < 4; c++)
      I(L[c], P[c], A);
  }
  function Y(L, P) {
    const A = n(), c = n(), S = n();
    R(S, P[2]), o(A, P[0], S), o(c, P[1], S), U(L, c), L[31] ^= O(A) << 7;
  }
  function x(L, P, A) {
    m(L[0], u), m(L[1], a), m(L[2], a), m(L[3], u);
    for (let c = 255; c >= 0; --c) {
      const S = A[c / 8 | 0] >> (c & 7) & 1;
      K(L, P, S), F(P, L), F(L, L), K(L, P, S);
    }
  }
  function T(L, P) {
    const A = [n(), n(), n(), n()];
    m(A[0], d), m(A[1], b), m(A[2], a), o(A[3], d, b), x(L, A, P);
  }
  function H(L) {
    if (L.length !== e.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${e.SEED_LENGTH} bytes`);
    const P = (0, r.hash)(L);
    P[0] &= 248, P[31] &= 127, P[31] |= 64;
    const A = new Uint8Array(32), c = [n(), n(), n(), n()];
    T(c, P), Y(A, c);
    const S = new Uint8Array(64);
    return S.set(L), S.set(A, 32), {
      publicKey: A,
      secretKey: S
    };
  }
  e.generateKeyPairFromSeed = H;
  function q(L) {
    const P = (0, t.randomBytes)(32, L), A = H(P);
    return (0, i.wipe)(P), A;
  }
  e.generateKeyPair = q;
  function B(L) {
    if (L.length !== e.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${e.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(L.subarray(32));
  }
  e.extractPublicKeyFromSecretKey = B;
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
  function j(L, P) {
    let A, c, S, G;
    for (c = 63; c >= 32; --c) {
      for (A = 0, S = c - 32, G = c - 12; S < G; ++S)
        P[S] += A - 16 * P[c] * V[S - (c - 32)], A = Math.floor((P[S] + 128) / 256), P[S] -= A * 256;
      P[S] += A, P[c] = 0;
    }
    for (A = 0, S = 0; S < 32; S++)
      P[S] += A - (P[31] >> 4) * V[S], A = P[S] >> 8, P[S] &= 255;
    for (S = 0; S < 32; S++)
      P[S] -= A * V[S];
    for (c = 0; c < 32; c++)
      P[c + 1] += P[c] >> 8, L[c] = P[c] & 255;
  }
  function W(L) {
    const P = new Float64Array(64);
    for (let A = 0; A < 64; A++)
      P[A] = L[A];
    for (let A = 0; A < 64; A++)
      L[A] = 0;
    j(L, P);
  }
  function oe(L, P) {
    const A = new Float64Array(64), c = [n(), n(), n(), n()], S = (0, r.hash)(L.subarray(0, 32));
    S[0] &= 248, S[31] &= 127, S[31] |= 64;
    const G = new Uint8Array(64);
    G.set(S.subarray(32), 32);
    const Z = new r.SHA512();
    Z.update(G.subarray(32)), Z.update(P);
    const be = Z.digest();
    Z.clean(), W(be), T(c, be), Y(G, c), Z.reset(), Z.update(G.subarray(0, 32)), Z.update(L.subarray(32)), Z.update(P);
    const ve = Z.digest();
    W(ve);
    for (let he = 0; he < 32; he++)
      A[he] = be[he];
    for (let he = 0; he < 32; he++)
      for (let xe = 0; xe < 32; xe++)
        A[he + xe] += ve[he] * S[xe];
    return j(G.subarray(32), A), G;
  }
  e.sign = oe;
  function k(L, P) {
    const A = n(), c = n(), S = n(), G = n(), Z = n(), be = n(), ve = n();
    return m(L[2], a), g(L[1], P), p(S, L[1]), o(G, S, l), h(S, S, L[2]), w(G, L[2], G), p(Z, G), p(be, Z), o(ve, be, Z), o(A, ve, S), o(A, A, G), N(A, A), o(A, A, S), o(A, A, G), o(A, A, G), o(L[0], A, G), p(c, L[0]), o(c, c, G), E(c, S) && o(L[0], L[0], _), p(c, L[0]), o(c, c, G), E(c, S) ? -1 : (O(L[0]) === P[31] >> 7 && h(L[0], u, L[0]), o(L[3], L[0], L[1]), 0);
  }
  function ie(L, P, A) {
    const c = new Uint8Array(32), S = [n(), n(), n(), n()], G = [n(), n(), n(), n()];
    if (A.length !== e.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${e.SIGNATURE_LENGTH} bytes`);
    if (k(G, L))
      return !1;
    const Z = new r.SHA512();
    Z.update(A.subarray(0, 32)), Z.update(L), Z.update(P);
    const be = Z.digest();
    return W(be), x(S, G, be), T(G, A.subarray(32)), F(S, G), Y(c, S), !$(A, c);
  }
  e.verify = ie;
  function Q(L) {
    let P = [n(), n(), n(), n()];
    if (k(P, L))
      throw new Error("Ed25519: invalid public key");
    let A = n(), c = n(), S = P[1];
    w(A, a, S), h(c, a, S), R(c, c), o(A, A, c);
    let G = new Uint8Array(32);
    return U(G, A), G;
  }
  e.convertPublicKeyToX25519 = Q;
  function re(L) {
    const P = (0, r.hash)(L.subarray(0, 32));
    P[0] &= 248, P[31] &= 127, P[31] |= 64;
    const A = new Uint8Array(P.subarray(0, 32));
    return (0, i.wipe)(P), A;
  }
  e.convertSecretKeyToX25519 = re;
})(Os);
const Ch = "EdDSA", Rh = "JWT", Fc = ".", $c = "base64url", Th = "utf8", Ph = "utf8", Nh = ":", Lh = "did", Uh = "key", Go = "base58btc", Fh = "z", $h = "K36", Mh = 32;
function xs(e) {
  return globalThis.Buffer != null ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e;
}
function Mc(e = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? xs(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e);
}
function is(e, t) {
  t || (t = e.reduce((n, s) => n + s.length, 0));
  const r = Mc(t);
  let i = 0;
  for (const n of e)
    r.set(n, i), i += n.length;
  return xs(r);
}
function jh(e, t) {
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
  var a = e.length, l = e.charAt(0), f = Math.log(a) / Math.log(256), d = Math.log(256) / Math.log(a);
  function b(D) {
    if (D instanceof Uint8Array || (ArrayBuffer.isView(D) ? D = new Uint8Array(D.buffer, D.byteOffset, D.byteLength) : Array.isArray(D) && (D = Uint8Array.from(D))), !(D instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (D.length === 0)
      return "";
    for (var I = 0, U = 0, $ = 0, E = D.length; $ !== E && D[$] === 0; )
      $++, I++;
    for (var O = (E - $) * d + 1 >>> 0, g = new Uint8Array(O); $ !== E; ) {
      for (var w = D[$], h = 0, o = O - 1; (w !== 0 || h < U) && o !== -1; o--, h++)
        w += 256 * g[o] >>> 0, g[o] = w % a >>> 0, w = w / a >>> 0;
      if (w !== 0)
        throw new Error("Non-zero carry");
      U = h, $++;
    }
    for (var p = O - U; p !== O && g[p] === 0; )
      p++;
    for (var R = l.repeat(I); p < O; ++p)
      R += e.charAt(g[p]);
    return R;
  }
  function _(D) {
    if (typeof D != "string")
      throw new TypeError("Expected String");
    if (D.length === 0)
      return new Uint8Array();
    var I = 0;
    if (D[I] !== " ") {
      for (var U = 0, $ = 0; D[I] === l; )
        U++, I++;
      for (var E = (D.length - I) * f + 1 >>> 0, O = new Uint8Array(E); D[I]; ) {
        var g = r[D.charCodeAt(I)];
        if (g === 255)
          return;
        for (var w = 0, h = E - 1; (g !== 0 || w < $) && h !== -1; h--, w++)
          g += a * O[h] >>> 0, O[h] = g % 256 >>> 0, g = g / 256 >>> 0;
        if (g !== 0)
          throw new Error("Non-zero carry");
        $ = w, I++;
      }
      if (D[I] !== " ") {
        for (var o = E - $; o !== E && O[o] === 0; )
          o++;
        for (var p = new Uint8Array(U + (E - o)), R = U; o !== E; )
          p[R++] = O[o++];
        return p;
      }
    }
  }
  function m(D) {
    var I = _(D);
    if (I)
      return I;
    throw new Error(`Non-${t} character`);
  }
  return {
    encode: b,
    decodeUnsafe: _,
    decode: m
  };
}
var Bh = jh, zh = Bh;
const Vh = (e) => {
  if (e instanceof Uint8Array && e.constructor.name === "Uint8Array")
    return e;
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  if (ArrayBuffer.isView(e))
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  throw new Error("Unknown type, must be binary type");
}, qh = (e) => new TextEncoder().encode(e), Kh = (e) => new TextDecoder().decode(e);
class Wh {
  constructor(t, r, i) {
    this.name = t, this.prefix = r, this.baseEncode = i;
  }
  encode(t) {
    if (t instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class kh {
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
    return jc(this, t);
  }
}
class Hh {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return jc(this, t);
  }
  decode(t) {
    const r = t[0], i = this.decoders[r];
    if (i)
      return i.decode(t);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const jc = (e, t) => new Hh({
  ...e.decoders || { [e.prefix]: e },
  ...t.decoders || { [t.prefix]: t }
});
class Gh {
  constructor(t, r, i, n) {
    this.name = t, this.prefix = r, this.baseEncode = i, this.baseDecode = n, this.encoder = new Wh(t, r, i), this.decoder = new kh(t, r, n);
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const hn = ({ name: e, prefix: t, encode: r, decode: i }) => new Gh(e, t, r, i), Ci = ({ prefix: e, name: t, alphabet: r }) => {
  const { encode: i, decode: n } = zh(r, t);
  return hn({
    prefix: e,
    name: t,
    encode: i,
    decode: (s) => Vh(n(s))
  });
}, Yh = (e, t, r, i) => {
  const n = {};
  for (let d = 0; d < t.length; ++d)
    n[t[d]] = d;
  let s = e.length;
  for (; e[s - 1] === "="; )
    --s;
  const u = new Uint8Array(s * r / 8 | 0);
  let a = 0, l = 0, f = 0;
  for (let d = 0; d < s; ++d) {
    const b = n[e[d]];
    if (b === void 0)
      throw new SyntaxError(`Non-${i} character`);
    l = l << r | b, a += r, a >= 8 && (a -= 8, u[f++] = 255 & l >> a);
  }
  if (a >= r || 255 & l << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return u;
}, Jh = (e, t, r) => {
  const i = t[t.length - 1] === "=", n = (1 << r) - 1;
  let s = "", u = 0, a = 0;
  for (let l = 0; l < e.length; ++l)
    for (a = a << 8 | e[l], u += 8; u > r; )
      u -= r, s += t[n & a >> u];
  if (u && (s += t[n & a << r - u]), i)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, pt = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) => hn({
  prefix: t,
  name: e,
  encode(n) {
    return Jh(n, i, r);
  },
  decode(n) {
    return Yh(n, i, r, e);
  }
}), Xh = hn({
  prefix: "\0",
  name: "identity",
  encode: (e) => Kh(e),
  decode: (e) => qh(e)
}), Zh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: Xh
}, Symbol.toStringTag, { value: "Module" })), Qh = pt({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), ed = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: Qh
}, Symbol.toStringTag, { value: "Module" })), td = pt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), rd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: td
}, Symbol.toStringTag, { value: "Module" })), id = Ci({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), nd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: id
}, Symbol.toStringTag, { value: "Module" })), sd = pt({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), od = pt({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), ad = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: sd,
  base16upper: od
}, Symbol.toStringTag, { value: "Module" })), cd = pt({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), ud = pt({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), ld = pt({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), fd = pt({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), hd = pt({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), dd = pt({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), pd = pt({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), gd = pt({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), yd = pt({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), bd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: cd,
  base32hex: hd,
  base32hexpad: pd,
  base32hexpadupper: gd,
  base32hexupper: dd,
  base32pad: ld,
  base32padupper: fd,
  base32upper: ud,
  base32z: yd
}, Symbol.toStringTag, { value: "Module" })), vd = Ci({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), md = Ci({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), _d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: vd,
  base36upper: md
}, Symbol.toStringTag, { value: "Module" })), wd = Ci({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), Ed = Ci({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), Sd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: wd,
  base58flickr: Ed
}, Symbol.toStringTag, { value: "Module" })), Dd = pt({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), Od = pt({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), xd = pt({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), Id = pt({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), Ad = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: Dd,
  base64pad: Od,
  base64url: xd,
  base64urlpad: Id
}, Symbol.toStringTag, { value: "Module" })), Bc = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Cd = Bc.reduce((e, t, r) => (e[r] = t, e), []), Rd = Bc.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []);
function Td(e) {
  return e.reduce((t, r) => (t += Cd[r], t), "");
}
function Pd(e) {
  const t = [];
  for (const r of e) {
    const i = Rd[r.codePointAt(0)];
    if (i === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    t.push(i);
  }
  return new Uint8Array(t);
}
const Nd = hn({
  prefix: "🚀",
  name: "base256emoji",
  encode: Td,
  decode: Pd
}), Ld = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: Nd
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const Yo = {
  ...Zh,
  ...ed,
  ...rd,
  ...nd,
  ...ad,
  ...bd,
  ..._d,
  ...Sd,
  ...Ad,
  ...Ld
};
function zc(e, t, r, i) {
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
const Jo = zc("utf8", "u", (e) => "u" + new TextDecoder("utf8").decode(e), (e) => new TextEncoder().encode(e.substring(1))), Tn = zc("ascii", "a", (e) => {
  let t = "a";
  for (let r = 0; r < e.length; r++)
    t += String.fromCharCode(e[r]);
  return t;
}, (e) => {
  e = e.substring(1);
  const t = Mc(e.length);
  for (let r = 0; r < e.length; r++)
    t[r] = e.charCodeAt(r);
  return t;
}), Vc = {
  utf8: Jo,
  "utf-8": Jo,
  hex: Yo.base16,
  latin1: Tn,
  ascii: Tn,
  binary: Tn,
  ...Yo
};
function It(e, t = "utf8") {
  const r = Vc[t];
  if (!r)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8") : r.encoder.encode(e).substring(1);
}
function Rt(e, t = "utf8") {
  const r = Vc[t];
  if (!r)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? xs(globalThis.Buffer.from(e, "utf-8")) : r.decoder.decode(`${r.prefix}${e}`);
}
function Xi(e) {
  return It(Rt(Ds(e), Th), $c);
}
function qc(e) {
  const t = Rt($h, Go), r = Fh + It(is([t, e]), Go);
  return [Lh, Uh, r].join(Nh);
}
function Ud(e) {
  return It(e, $c);
}
function Fd(e) {
  return Rt([Xi(e.header), Xi(e.payload)].join(Fc), Ph);
}
function $d(e) {
  return [
    Xi(e.header),
    Xi(e.payload),
    Ud(e.signature)
  ].join(Fc);
}
function Xo(e = Qr.randomBytes(Mh)) {
  return Os.generateKeyPairFromSeed(e);
}
async function Md(e, t, r, i, n = te.fromMiliseconds(Date.now())) {
  const s = { alg: Ch, typ: Rh }, u = qc(i.publicKey), a = n + r, l = { iss: u, sub: e, aud: t, iat: n, exp: a }, f = Fd({ header: s, payload: l }), d = Os.sign(i.secretKey, f);
  return $d({ header: s, payload: l, signature: d });
}
var Is = {}, dn = {};
Object.defineProperty(dn, "__esModule", { value: !0 });
var vt = le, ns = $t, jd = 20;
function Bd(e, t, r) {
  for (var i = 1634760805, n = 857760878, s = 2036477234, u = 1797285236, a = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], l = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], f = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], d = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], b = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], _ = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], m = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], D = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], I = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], U = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4], $ = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8], E = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12], O = i, g = n, w = s, h = u, o = a, p = l, R = f, N = d, F = b, K = _, Y = m, x = D, T = I, H = U, q = $, B = E, V = 0; V < jd; V += 2)
    O = O + o | 0, T ^= O, T = T >>> 32 - 16 | T << 16, F = F + T | 0, o ^= F, o = o >>> 32 - 12 | o << 12, g = g + p | 0, H ^= g, H = H >>> 32 - 16 | H << 16, K = K + H | 0, p ^= K, p = p >>> 32 - 12 | p << 12, w = w + R | 0, q ^= w, q = q >>> 32 - 16 | q << 16, Y = Y + q | 0, R ^= Y, R = R >>> 32 - 12 | R << 12, h = h + N | 0, B ^= h, B = B >>> 32 - 16 | B << 16, x = x + B | 0, N ^= x, N = N >>> 32 - 12 | N << 12, w = w + R | 0, q ^= w, q = q >>> 32 - 8 | q << 8, Y = Y + q | 0, R ^= Y, R = R >>> 32 - 7 | R << 7, h = h + N | 0, B ^= h, B = B >>> 32 - 8 | B << 8, x = x + B | 0, N ^= x, N = N >>> 32 - 7 | N << 7, g = g + p | 0, H ^= g, H = H >>> 32 - 8 | H << 8, K = K + H | 0, p ^= K, p = p >>> 32 - 7 | p << 7, O = O + o | 0, T ^= O, T = T >>> 32 - 8 | T << 8, F = F + T | 0, o ^= F, o = o >>> 32 - 7 | o << 7, O = O + p | 0, B ^= O, B = B >>> 32 - 16 | B << 16, Y = Y + B | 0, p ^= Y, p = p >>> 32 - 12 | p << 12, g = g + R | 0, T ^= g, T = T >>> 32 - 16 | T << 16, x = x + T | 0, R ^= x, R = R >>> 32 - 12 | R << 12, w = w + N | 0, H ^= w, H = H >>> 32 - 16 | H << 16, F = F + H | 0, N ^= F, N = N >>> 32 - 12 | N << 12, h = h + o | 0, q ^= h, q = q >>> 32 - 16 | q << 16, K = K + q | 0, o ^= K, o = o >>> 32 - 12 | o << 12, w = w + N | 0, H ^= w, H = H >>> 32 - 8 | H << 8, F = F + H | 0, N ^= F, N = N >>> 32 - 7 | N << 7, h = h + o | 0, q ^= h, q = q >>> 32 - 8 | q << 8, K = K + q | 0, o ^= K, o = o >>> 32 - 7 | o << 7, g = g + R | 0, T ^= g, T = T >>> 32 - 8 | T << 8, x = x + T | 0, R ^= x, R = R >>> 32 - 7 | R << 7, O = O + p | 0, B ^= O, B = B >>> 32 - 8 | B << 8, Y = Y + B | 0, p ^= Y, p = p >>> 32 - 7 | p << 7;
  vt.writeUint32LE(O + i | 0, e, 0), vt.writeUint32LE(g + n | 0, e, 4), vt.writeUint32LE(w + s | 0, e, 8), vt.writeUint32LE(h + u | 0, e, 12), vt.writeUint32LE(o + a | 0, e, 16), vt.writeUint32LE(p + l | 0, e, 20), vt.writeUint32LE(R + f | 0, e, 24), vt.writeUint32LE(N + d | 0, e, 28), vt.writeUint32LE(F + b | 0, e, 32), vt.writeUint32LE(K + _ | 0, e, 36), vt.writeUint32LE(Y + m | 0, e, 40), vt.writeUint32LE(x + D | 0, e, 44), vt.writeUint32LE(T + I | 0, e, 48), vt.writeUint32LE(H + U | 0, e, 52), vt.writeUint32LE(q + $ | 0, e, 56), vt.writeUint32LE(B + E | 0, e, 60);
}
function Kc(e, t, r, i, n) {
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
    Bd(a, s, e);
    for (var f = l; f < l + 64 && f < r.length; f++)
      i[f] = r[f] ^ a[f - l];
    Vd(s, 0, u);
  }
  return ns.wipe(a), n === 0 && ns.wipe(s), i;
}
dn.streamXOR = Kc;
function zd(e, t, r, i) {
  return i === void 0 && (i = 0), ns.wipe(r), Kc(e, t, r, r, i);
}
dn.stream = zd;
function Vd(e, t, r) {
  for (var i = 1; r--; )
    i = i + (e[t] & 255) | 0, e[t] = i & 255, i >>>= 8, t++;
  if (i > 0)
    throw new Error("ChaCha: counter overflow");
}
var Wc = {}, _r = {};
Object.defineProperty(_r, "__esModule", { value: !0 });
function qd(e, t, r) {
  return ~(e - 1) & t | e - 1 & r;
}
_r.select = qd;
function Kd(e, t) {
  return (e | 0) - (t | 0) - 1 >>> 31 & 1;
}
_r.lessOrEqual = Kd;
function kc(e, t) {
  if (e.length !== t.length)
    return 0;
  for (var r = 0, i = 0; i < e.length; i++)
    r |= e[i] ^ t[i];
  return 1 & r - 1 >>> 8;
}
_r.compare = kc;
function Wd(e, t) {
  return e.length === 0 || t.length === 0 ? !1 : kc(e, t) !== 0;
}
_r.equal = Wd;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = _r, r = $t;
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
        var d = a[4] | a[5] << 8;
        this._r[2] = (f >>> 10 | d << 6) & 7939;
        var b = a[6] | a[7] << 8;
        this._r[3] = (d >>> 7 | b << 9) & 8191;
        var _ = a[8] | a[9] << 8;
        this._r[4] = (b >>> 4 | _ << 12) & 255, this._r[5] = _ >>> 1 & 8190;
        var m = a[10] | a[11] << 8;
        this._r[6] = (_ >>> 14 | m << 2) & 8191;
        var D = a[12] | a[13] << 8;
        this._r[7] = (m >>> 11 | D << 5) & 8065;
        var I = a[14] | a[15] << 8;
        this._r[8] = (D >>> 8 | I << 8) & 8191, this._r[9] = I >>> 5 & 127, this._pad[0] = a[16] | a[17] << 8, this._pad[1] = a[18] | a[19] << 8, this._pad[2] = a[20] | a[21] << 8, this._pad[3] = a[22] | a[23] << 8, this._pad[4] = a[24] | a[25] << 8, this._pad[5] = a[26] | a[27] << 8, this._pad[6] = a[28] | a[29] << 8, this._pad[7] = a[30] | a[31] << 8;
      }
      return u.prototype._blocks = function(a, l, f) {
        for (var d = this._fin ? 0 : 2048, b = this._h[0], _ = this._h[1], m = this._h[2], D = this._h[3], I = this._h[4], U = this._h[5], $ = this._h[6], E = this._h[7], O = this._h[8], g = this._h[9], w = this._r[0], h = this._r[1], o = this._r[2], p = this._r[3], R = this._r[4], N = this._r[5], F = this._r[6], K = this._r[7], Y = this._r[8], x = this._r[9]; f >= 16; ) {
          var T = a[l + 0] | a[l + 1] << 8;
          b += T & 8191;
          var H = a[l + 2] | a[l + 3] << 8;
          _ += (T >>> 13 | H << 3) & 8191;
          var q = a[l + 4] | a[l + 5] << 8;
          m += (H >>> 10 | q << 6) & 8191;
          var B = a[l + 6] | a[l + 7] << 8;
          D += (q >>> 7 | B << 9) & 8191;
          var V = a[l + 8] | a[l + 9] << 8;
          I += (B >>> 4 | V << 12) & 8191, U += V >>> 1 & 8191;
          var j = a[l + 10] | a[l + 11] << 8;
          $ += (V >>> 14 | j << 2) & 8191;
          var W = a[l + 12] | a[l + 13] << 8;
          E += (j >>> 11 | W << 5) & 8191;
          var oe = a[l + 14] | a[l + 15] << 8;
          O += (W >>> 8 | oe << 8) & 8191, g += oe >>> 5 | d;
          var k = 0, ie = k;
          ie += b * w, ie += _ * (5 * x), ie += m * (5 * Y), ie += D * (5 * K), ie += I * (5 * F), k = ie >>> 13, ie &= 8191, ie += U * (5 * N), ie += $ * (5 * R), ie += E * (5 * p), ie += O * (5 * o), ie += g * (5 * h), k += ie >>> 13, ie &= 8191;
          var Q = k;
          Q += b * h, Q += _ * w, Q += m * (5 * x), Q += D * (5 * Y), Q += I * (5 * K), k = Q >>> 13, Q &= 8191, Q += U * (5 * F), Q += $ * (5 * N), Q += E * (5 * R), Q += O * (5 * p), Q += g * (5 * o), k += Q >>> 13, Q &= 8191;
          var re = k;
          re += b * o, re += _ * h, re += m * w, re += D * (5 * x), re += I * (5 * Y), k = re >>> 13, re &= 8191, re += U * (5 * K), re += $ * (5 * F), re += E * (5 * N), re += O * (5 * R), re += g * (5 * p), k += re >>> 13, re &= 8191;
          var L = k;
          L += b * p, L += _ * o, L += m * h, L += D * w, L += I * (5 * x), k = L >>> 13, L &= 8191, L += U * (5 * Y), L += $ * (5 * K), L += E * (5 * F), L += O * (5 * N), L += g * (5 * R), k += L >>> 13, L &= 8191;
          var P = k;
          P += b * R, P += _ * p, P += m * o, P += D * h, P += I * w, k = P >>> 13, P &= 8191, P += U * (5 * x), P += $ * (5 * Y), P += E * (5 * K), P += O * (5 * F), P += g * (5 * N), k += P >>> 13, P &= 8191;
          var A = k;
          A += b * N, A += _ * R, A += m * p, A += D * o, A += I * h, k = A >>> 13, A &= 8191, A += U * w, A += $ * (5 * x), A += E * (5 * Y), A += O * (5 * K), A += g * (5 * F), k += A >>> 13, A &= 8191;
          var c = k;
          c += b * F, c += _ * N, c += m * R, c += D * p, c += I * o, k = c >>> 13, c &= 8191, c += U * h, c += $ * w, c += E * (5 * x), c += O * (5 * Y), c += g * (5 * K), k += c >>> 13, c &= 8191;
          var S = k;
          S += b * K, S += _ * F, S += m * N, S += D * R, S += I * p, k = S >>> 13, S &= 8191, S += U * o, S += $ * h, S += E * w, S += O * (5 * x), S += g * (5 * Y), k += S >>> 13, S &= 8191;
          var G = k;
          G += b * Y, G += _ * K, G += m * F, G += D * N, G += I * R, k = G >>> 13, G &= 8191, G += U * p, G += $ * o, G += E * h, G += O * w, G += g * (5 * x), k += G >>> 13, G &= 8191;
          var Z = k;
          Z += b * x, Z += _ * Y, Z += m * K, Z += D * F, Z += I * N, k = Z >>> 13, Z &= 8191, Z += U * R, Z += $ * p, Z += E * o, Z += O * h, Z += g * w, k += Z >>> 13, Z &= 8191, k = (k << 2) + k | 0, k = k + ie | 0, ie = k & 8191, k = k >>> 13, Q += k, b = ie, _ = Q, m = re, D = L, I = P, U = A, $ = c, E = S, O = G, g = Z, l += 16, f -= 16;
        }
        this._h[0] = b, this._h[1] = _, this._h[2] = m, this._h[3] = D, this._h[4] = I, this._h[5] = U, this._h[6] = $, this._h[7] = E, this._h[8] = O, this._h[9] = g;
      }, u.prototype.finish = function(a, l) {
        l === void 0 && (l = 0);
        var f = new Uint16Array(10), d, b, _, m;
        if (this._leftover) {
          for (m = this._leftover, this._buffer[m++] = 1; m < 16; m++)
            this._buffer[m] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (d = this._h[1] >>> 13, this._h[1] &= 8191, m = 2; m < 10; m++)
          this._h[m] += d, d = this._h[m] >>> 13, this._h[m] &= 8191;
        for (this._h[0] += d * 5, d = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += d, d = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += d, f[0] = this._h[0] + 5, d = f[0] >>> 13, f[0] &= 8191, m = 1; m < 10; m++)
          f[m] = this._h[m] + d, d = f[m] >>> 13, f[m] &= 8191;
        for (f[9] -= 8192, b = (d ^ 1) - 1, m = 0; m < 10; m++)
          f[m] &= b;
        for (b = ~b, m = 0; m < 10; m++)
          this._h[m] = this._h[m] & b | f[m];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, _ = this._h[0] + this._pad[0], this._h[0] = _ & 65535, m = 1; m < 8; m++)
          _ = (this._h[m] + this._pad[m] | 0) + (_ >>> 16) | 0, this._h[m] = _ & 65535;
        return a[l + 0] = this._h[0] >>> 0, a[l + 1] = this._h[0] >>> 8, a[l + 2] = this._h[1] >>> 0, a[l + 3] = this._h[1] >>> 8, a[l + 4] = this._h[2] >>> 0, a[l + 5] = this._h[2] >>> 8, a[l + 6] = this._h[3] >>> 0, a[l + 7] = this._h[3] >>> 8, a[l + 8] = this._h[4] >>> 0, a[l + 9] = this._h[4] >>> 8, a[l + 10] = this._h[5] >>> 0, a[l + 11] = this._h[5] >>> 8, a[l + 12] = this._h[6] >>> 0, a[l + 13] = this._h[6] >>> 8, a[l + 14] = this._h[7] >>> 0, a[l + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, u.prototype.update = function(a) {
        var l = 0, f = a.length, d;
        if (this._leftover) {
          d = 16 - this._leftover, d > f && (d = f);
          for (var b = 0; b < d; b++)
            this._buffer[this._leftover + b] = a[l + b];
          if (f -= d, l += d, this._leftover += d, this._leftover < 16)
            return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (f >= 16 && (d = f - f % 16, this._blocks(a, l, d), l += d, f -= d), f) {
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
})(Wc);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = dn, r = Wc, i = $t, n = le, s = _r;
  e.KEY_LENGTH = 32, e.NONCE_LENGTH = 12, e.TAG_LENGTH = 16;
  var u = new Uint8Array(16), a = (
    /** @class */
    function() {
      function l(f) {
        if (this.nonceLength = e.NONCE_LENGTH, this.tagLength = e.TAG_LENGTH, f.length !== e.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(f);
      }
      return l.prototype.seal = function(f, d, b, _) {
        if (f.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var m = new Uint8Array(16);
        m.set(f, m.length - f.length);
        var D = new Uint8Array(32);
        t.stream(this._key, m, D, 4);
        var I = d.length + this.tagLength, U;
        if (_) {
          if (_.length !== I)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          U = _;
        } else
          U = new Uint8Array(I);
        return t.streamXOR(this._key, m, d, U, 4), this._authenticate(U.subarray(U.length - this.tagLength, U.length), D, U.subarray(0, U.length - this.tagLength), b), i.wipe(m), U;
      }, l.prototype.open = function(f, d, b, _) {
        if (f.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (d.length < this.tagLength)
          return null;
        var m = new Uint8Array(16);
        m.set(f, m.length - f.length);
        var D = new Uint8Array(32);
        t.stream(this._key, m, D, 4);
        var I = new Uint8Array(this.tagLength);
        if (this._authenticate(I, D, d.subarray(0, d.length - this.tagLength), b), !s.equal(I, d.subarray(d.length - this.tagLength, d.length)))
          return null;
        var U = d.length - this.tagLength, $;
        if (_) {
          if (_.length !== U)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          $ = _;
        } else
          $ = new Uint8Array(U);
        return t.streamXOR(this._key, m, d.subarray(0, d.length - this.tagLength), $, 4), i.wipe(m), $;
      }, l.prototype.clean = function() {
        return i.wipe(this._key), this;
      }, l.prototype._authenticate = function(f, d, b, _) {
        var m = new r.Poly1305(d);
        _ && (m.update(_), _.length % 16 > 0 && m.update(u.subarray(_.length % 16))), m.update(b), b.length % 16 > 0 && m.update(u.subarray(b.length % 16));
        var D = new Uint8Array(8);
        _ && n.writeUint64LE(_.length, D), m.update(D), n.writeUint64LE(b.length, D), m.update(D);
        for (var I = m.digest(), U = 0; U < I.length; U++)
          f[U] = I[U];
        m.clean(), i.wipe(I), i.wipe(D);
      }, l;
    }()
  );
  e.ChaCha20Poly1305 = a;
})(Is);
var Hc = {}, Ri = {}, As = {};
Object.defineProperty(As, "__esModule", { value: !0 });
function kd(e) {
  return typeof e.saveState < "u" && typeof e.restoreState < "u" && typeof e.cleanSavedState < "u";
}
As.isSerializableHash = kd;
Object.defineProperty(Ri, "__esModule", { value: !0 });
var rr = As, Hd = _r, Gd = $t, Gc = (
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
      this._outer.update(i), rr.isSerializableHash(this._inner) && rr.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), Gd.wipe(i);
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
Ri.HMAC = Gc;
function Yd(e, t, r) {
  var i = new Gc(e, t);
  i.update(r);
  var n = i.digest();
  return i.clean(), n;
}
Ri.hmac = Yd;
Ri.equal = Hd.equal;
Object.defineProperty(Hc, "__esModule", { value: !0 });
var Zo = Ri, Qo = $t, Jd = (
  /** @class */
  function() {
    function e(t, r, i, n) {
      i === void 0 && (i = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = t, this._info = n;
      var s = Zo.hmac(this._hash, i, r);
      this._hmac = new Zo.HMAC(t, s), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
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
      this._hmac.clean(), Qo.wipe(this._buffer), Qo.wipe(this._counter), this._bufpos = 0;
    }, e;
  }()
), Xd = Hc.HKDF = Jd, pn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = le, r = $t;
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
        var d = 0;
        if (this._bytesHashed += f, this._bufferLength > 0) {
          for (; this._bufferLength < this.blockSize && f > 0; )
            this._buffer[this._bufferLength++] = l[d++], f--;
          this._bufferLength === this.blockSize && (s(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (f >= this.blockSize && (d = s(this._temp, this._state, l, d, f), f %= this.blockSize); f > 0; )
          this._buffer[this._bufferLength++] = l[d++], f--;
        return this;
      }, a.prototype.finish = function(l) {
        if (!this._finished) {
          var f = this._bytesHashed, d = this._bufferLength, b = f / 536870912 | 0, _ = f << 3, m = f % 64 < 56 ? 64 : 128;
          this._buffer[d] = 128;
          for (var D = d + 1; D < m - 8; D++)
            this._buffer[D] = 0;
          t.writeUint32BE(b, this._buffer, m - 8), t.writeUint32BE(_, this._buffer, m - 4), s(this._temp, this._state, this._buffer, 0, m), this._finished = !0;
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
  function s(a, l, f, d, b) {
    for (; b >= 64; ) {
      for (var _ = l[0], m = l[1], D = l[2], I = l[3], U = l[4], $ = l[5], E = l[6], O = l[7], g = 0; g < 16; g++) {
        var w = d + g * 4;
        a[g] = t.readUint32BE(f, w);
      }
      for (var g = 16; g < 64; g++) {
        var h = a[g - 2], o = (h >>> 17 | h << 32 - 17) ^ (h >>> 19 | h << 32 - 19) ^ h >>> 10;
        h = a[g - 15];
        var p = (h >>> 7 | h << 32 - 7) ^ (h >>> 18 | h << 32 - 18) ^ h >>> 3;
        a[g] = (o + a[g - 7] | 0) + (p + a[g - 16] | 0);
      }
      for (var g = 0; g < 64; g++) {
        var o = (((U >>> 6 | U << 26) ^ (U >>> 11 | U << 21) ^ (U >>> 25 | U << 7)) + (U & $ ^ ~U & E) | 0) + (O + (n[g] + a[g] | 0) | 0) | 0, p = ((_ >>> 2 | _ << 32 - 2) ^ (_ >>> 13 | _ << 32 - 13) ^ (_ >>> 22 | _ << 32 - 22)) + (_ & m ^ _ & D ^ m & D) | 0;
        O = E, E = $, $ = U, U = I + o | 0, I = D, D = m, m = _, _ = o + p | 0;
      }
      l[0] += _, l[1] += m, l[2] += D, l[3] += I, l[4] += U, l[5] += $, l[6] += E, l[7] += O, d += 64, b -= 64;
    }
    return d;
  }
  function u(a) {
    var l = new i();
    l.update(a);
    var f = l.digest();
    return l.clean(), f;
  }
  e.hash = u;
})(pn);
var Cs = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.sharedKey = e.generateKeyPair = e.generateKeyPairFromSeed = e.scalarMultBase = e.scalarMult = e.SHARED_KEY_LENGTH = e.SECRET_KEY_LENGTH = e.PUBLIC_KEY_LENGTH = void 0;
  const t = Qr, r = $t;
  e.PUBLIC_KEY_LENGTH = 32, e.SECRET_KEY_LENGTH = 32, e.SHARED_KEY_LENGTH = 32;
  function i(g) {
    const w = new Float64Array(16);
    if (g)
      for (let h = 0; h < g.length; h++)
        w[h] = g[h];
    return w;
  }
  const n = new Uint8Array(32);
  n[0] = 9;
  const s = i([56129, 1]);
  function u(g) {
    let w = 1;
    for (let h = 0; h < 16; h++) {
      let o = g[h] + w + 65535;
      w = Math.floor(o / 65536), g[h] = o - w * 65536;
    }
    g[0] += w - 1 + 37 * (w - 1);
  }
  function a(g, w, h) {
    const o = ~(h - 1);
    for (let p = 0; p < 16; p++) {
      const R = o & (g[p] ^ w[p]);
      g[p] ^= R, w[p] ^= R;
    }
  }
  function l(g, w) {
    const h = i(), o = i();
    for (let p = 0; p < 16; p++)
      o[p] = w[p];
    u(o), u(o), u(o);
    for (let p = 0; p < 2; p++) {
      h[0] = o[0] - 65517;
      for (let N = 1; N < 15; N++)
        h[N] = o[N] - 65535 - (h[N - 1] >> 16 & 1), h[N - 1] &= 65535;
      h[15] = o[15] - 32767 - (h[14] >> 16 & 1);
      const R = h[15] >> 16 & 1;
      h[14] &= 65535, a(o, h, 1 - R);
    }
    for (let p = 0; p < 16; p++)
      g[2 * p] = o[p] & 255, g[2 * p + 1] = o[p] >> 8;
  }
  function f(g, w) {
    for (let h = 0; h < 16; h++)
      g[h] = w[2 * h] + (w[2 * h + 1] << 8);
    g[15] &= 32767;
  }
  function d(g, w, h) {
    for (let o = 0; o < 16; o++)
      g[o] = w[o] + h[o];
  }
  function b(g, w, h) {
    for (let o = 0; o < 16; o++)
      g[o] = w[o] - h[o];
  }
  function _(g, w, h) {
    let o, p, R = 0, N = 0, F = 0, K = 0, Y = 0, x = 0, T = 0, H = 0, q = 0, B = 0, V = 0, j = 0, W = 0, oe = 0, k = 0, ie = 0, Q = 0, re = 0, L = 0, P = 0, A = 0, c = 0, S = 0, G = 0, Z = 0, be = 0, ve = 0, he = 0, xe = 0, Be = 0, Le = 0, De = h[0], we = h[1], de = h[2], ge = h[3], pe = h[4], ue = h[5], ce = h[6], ne = h[7], ye = h[8], me = h[9], ae = h[10], Ee = h[11], Ie = h[12], Te = h[13], Pe = h[14], Ae = h[15];
    o = w[0], R += o * De, N += o * we, F += o * de, K += o * ge, Y += o * pe, x += o * ue, T += o * ce, H += o * ne, q += o * ye, B += o * me, V += o * ae, j += o * Ee, W += o * Ie, oe += o * Te, k += o * Pe, ie += o * Ae, o = w[1], N += o * De, F += o * we, K += o * de, Y += o * ge, x += o * pe, T += o * ue, H += o * ce, q += o * ne, B += o * ye, V += o * me, j += o * ae, W += o * Ee, oe += o * Ie, k += o * Te, ie += o * Pe, Q += o * Ae, o = w[2], F += o * De, K += o * we, Y += o * de, x += o * ge, T += o * pe, H += o * ue, q += o * ce, B += o * ne, V += o * ye, j += o * me, W += o * ae, oe += o * Ee, k += o * Ie, ie += o * Te, Q += o * Pe, re += o * Ae, o = w[3], K += o * De, Y += o * we, x += o * de, T += o * ge, H += o * pe, q += o * ue, B += o * ce, V += o * ne, j += o * ye, W += o * me, oe += o * ae, k += o * Ee, ie += o * Ie, Q += o * Te, re += o * Pe, L += o * Ae, o = w[4], Y += o * De, x += o * we, T += o * de, H += o * ge, q += o * pe, B += o * ue, V += o * ce, j += o * ne, W += o * ye, oe += o * me, k += o * ae, ie += o * Ee, Q += o * Ie, re += o * Te, L += o * Pe, P += o * Ae, o = w[5], x += o * De, T += o * we, H += o * de, q += o * ge, B += o * pe, V += o * ue, j += o * ce, W += o * ne, oe += o * ye, k += o * me, ie += o * ae, Q += o * Ee, re += o * Ie, L += o * Te, P += o * Pe, A += o * Ae, o = w[6], T += o * De, H += o * we, q += o * de, B += o * ge, V += o * pe, j += o * ue, W += o * ce, oe += o * ne, k += o * ye, ie += o * me, Q += o * ae, re += o * Ee, L += o * Ie, P += o * Te, A += o * Pe, c += o * Ae, o = w[7], H += o * De, q += o * we, B += o * de, V += o * ge, j += o * pe, W += o * ue, oe += o * ce, k += o * ne, ie += o * ye, Q += o * me, re += o * ae, L += o * Ee, P += o * Ie, A += o * Te, c += o * Pe, S += o * Ae, o = w[8], q += o * De, B += o * we, V += o * de, j += o * ge, W += o * pe, oe += o * ue, k += o * ce, ie += o * ne, Q += o * ye, re += o * me, L += o * ae, P += o * Ee, A += o * Ie, c += o * Te, S += o * Pe, G += o * Ae, o = w[9], B += o * De, V += o * we, j += o * de, W += o * ge, oe += o * pe, k += o * ue, ie += o * ce, Q += o * ne, re += o * ye, L += o * me, P += o * ae, A += o * Ee, c += o * Ie, S += o * Te, G += o * Pe, Z += o * Ae, o = w[10], V += o * De, j += o * we, W += o * de, oe += o * ge, k += o * pe, ie += o * ue, Q += o * ce, re += o * ne, L += o * ye, P += o * me, A += o * ae, c += o * Ee, S += o * Ie, G += o * Te, Z += o * Pe, be += o * Ae, o = w[11], j += o * De, W += o * we, oe += o * de, k += o * ge, ie += o * pe, Q += o * ue, re += o * ce, L += o * ne, P += o * ye, A += o * me, c += o * ae, S += o * Ee, G += o * Ie, Z += o * Te, be += o * Pe, ve += o * Ae, o = w[12], W += o * De, oe += o * we, k += o * de, ie += o * ge, Q += o * pe, re += o * ue, L += o * ce, P += o * ne, A += o * ye, c += o * me, S += o * ae, G += o * Ee, Z += o * Ie, be += o * Te, ve += o * Pe, he += o * Ae, o = w[13], oe += o * De, k += o * we, ie += o * de, Q += o * ge, re += o * pe, L += o * ue, P += o * ce, A += o * ne, c += o * ye, S += o * me, G += o * ae, Z += o * Ee, be += o * Ie, ve += o * Te, he += o * Pe, xe += o * Ae, o = w[14], k += o * De, ie += o * we, Q += o * de, re += o * ge, L += o * pe, P += o * ue, A += o * ce, c += o * ne, S += o * ye, G += o * me, Z += o * ae, be += o * Ee, ve += o * Ie, he += o * Te, xe += o * Pe, Be += o * Ae, o = w[15], ie += o * De, Q += o * we, re += o * de, L += o * ge, P += o * pe, A += o * ue, c += o * ce, S += o * ne, G += o * ye, Z += o * me, be += o * ae, ve += o * Ee, he += o * Ie, xe += o * Te, Be += o * Pe, Le += o * Ae, R += 38 * Q, N += 38 * re, F += 38 * L, K += 38 * P, Y += 38 * A, x += 38 * c, T += 38 * S, H += 38 * G, q += 38 * Z, B += 38 * be, V += 38 * ve, j += 38 * he, W += 38 * xe, oe += 38 * Be, k += 38 * Le, p = 1, o = R + p + 65535, p = Math.floor(o / 65536), R = o - p * 65536, o = N + p + 65535, p = Math.floor(o / 65536), N = o - p * 65536, o = F + p + 65535, p = Math.floor(o / 65536), F = o - p * 65536, o = K + p + 65535, p = Math.floor(o / 65536), K = o - p * 65536, o = Y + p + 65535, p = Math.floor(o / 65536), Y = o - p * 65536, o = x + p + 65535, p = Math.floor(o / 65536), x = o - p * 65536, o = T + p + 65535, p = Math.floor(o / 65536), T = o - p * 65536, o = H + p + 65535, p = Math.floor(o / 65536), H = o - p * 65536, o = q + p + 65535, p = Math.floor(o / 65536), q = o - p * 65536, o = B + p + 65535, p = Math.floor(o / 65536), B = o - p * 65536, o = V + p + 65535, p = Math.floor(o / 65536), V = o - p * 65536, o = j + p + 65535, p = Math.floor(o / 65536), j = o - p * 65536, o = W + p + 65535, p = Math.floor(o / 65536), W = o - p * 65536, o = oe + p + 65535, p = Math.floor(o / 65536), oe = o - p * 65536, o = k + p + 65535, p = Math.floor(o / 65536), k = o - p * 65536, o = ie + p + 65535, p = Math.floor(o / 65536), ie = o - p * 65536, R += p - 1 + 37 * (p - 1), p = 1, o = R + p + 65535, p = Math.floor(o / 65536), R = o - p * 65536, o = N + p + 65535, p = Math.floor(o / 65536), N = o - p * 65536, o = F + p + 65535, p = Math.floor(o / 65536), F = o - p * 65536, o = K + p + 65535, p = Math.floor(o / 65536), K = o - p * 65536, o = Y + p + 65535, p = Math.floor(o / 65536), Y = o - p * 65536, o = x + p + 65535, p = Math.floor(o / 65536), x = o - p * 65536, o = T + p + 65535, p = Math.floor(o / 65536), T = o - p * 65536, o = H + p + 65535, p = Math.floor(o / 65536), H = o - p * 65536, o = q + p + 65535, p = Math.floor(o / 65536), q = o - p * 65536, o = B + p + 65535, p = Math.floor(o / 65536), B = o - p * 65536, o = V + p + 65535, p = Math.floor(o / 65536), V = o - p * 65536, o = j + p + 65535, p = Math.floor(o / 65536), j = o - p * 65536, o = W + p + 65535, p = Math.floor(o / 65536), W = o - p * 65536, o = oe + p + 65535, p = Math.floor(o / 65536), oe = o - p * 65536, o = k + p + 65535, p = Math.floor(o / 65536), k = o - p * 65536, o = ie + p + 65535, p = Math.floor(o / 65536), ie = o - p * 65536, R += p - 1 + 37 * (p - 1), g[0] = R, g[1] = N, g[2] = F, g[3] = K, g[4] = Y, g[5] = x, g[6] = T, g[7] = H, g[8] = q, g[9] = B, g[10] = V, g[11] = j, g[12] = W, g[13] = oe, g[14] = k, g[15] = ie;
  }
  function m(g, w) {
    _(g, w, w);
  }
  function D(g, w) {
    const h = i();
    for (let o = 0; o < 16; o++)
      h[o] = w[o];
    for (let o = 253; o >= 0; o--)
      m(h, h), o !== 2 && o !== 4 && _(h, h, w);
    for (let o = 0; o < 16; o++)
      g[o] = h[o];
  }
  function I(g, w) {
    const h = new Uint8Array(32), o = new Float64Array(80), p = i(), R = i(), N = i(), F = i(), K = i(), Y = i();
    for (let q = 0; q < 31; q++)
      h[q] = g[q];
    h[31] = g[31] & 127 | 64, h[0] &= 248, f(o, w);
    for (let q = 0; q < 16; q++)
      R[q] = o[q];
    p[0] = F[0] = 1;
    for (let q = 254; q >= 0; --q) {
      const B = h[q >>> 3] >>> (q & 7) & 1;
      a(p, R, B), a(N, F, B), d(K, p, N), b(p, p, N), d(N, R, F), b(R, R, F), m(F, K), m(Y, p), _(p, N, p), _(N, R, K), d(K, p, N), b(p, p, N), m(R, p), b(N, F, Y), _(p, N, s), d(p, p, F), _(N, N, p), _(p, F, Y), _(F, R, o), m(R, K), a(p, R, B), a(N, F, B);
    }
    for (let q = 0; q < 16; q++)
      o[q + 16] = p[q], o[q + 32] = N[q], o[q + 48] = R[q], o[q + 64] = F[q];
    const x = o.subarray(32), T = o.subarray(16);
    D(x, x), _(T, T, x);
    const H = new Uint8Array(32);
    return l(H, T), H;
  }
  e.scalarMult = I;
  function U(g) {
    return I(g, n);
  }
  e.scalarMultBase = U;
  function $(g) {
    if (g.length !== e.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${e.SECRET_KEY_LENGTH} bytes`);
    const w = new Uint8Array(g);
    return {
      publicKey: U(w),
      secretKey: w
    };
  }
  e.generateKeyPairFromSeed = $;
  function E(g) {
    const w = (0, t.randomBytes)(32, g), h = $(w);
    return (0, r.wipe)(w), h;
  }
  e.generateKeyPair = E;
  function O(g, w, h = !1) {
    if (g.length !== e.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (w.length !== e.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const o = I(g, w);
    if (h) {
      let p = 0;
      for (let R = 0; R < o.length; R++)
        p |= o[R];
      if (p === 0)
        throw new Error("X25519: invalid shared key");
    }
    return o;
  }
  e.sharedKey = O;
})(Cs);
var ea = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var i = 0, n = t.length, s; i < n; i++)
      (s || !(i in t)) && (s || (s = Array.prototype.slice.call(t, 0, i)), s[i] = t[i]);
  return e.concat(s || Array.prototype.slice.call(t));
}, Zd = (
  /** @class */
  function() {
    function e(t, r, i) {
      this.name = t, this.version = r, this.os = i, this.type = "browser";
    }
    return e;
  }()
), Qd = (
  /** @class */
  function() {
    function e(t) {
      this.version = t, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return e;
  }()
), ep = (
  /** @class */
  function() {
    function e(t, r, i, n) {
      this.name = t, this.version = r, this.os = i, this.bot = n, this.type = "bot-device";
    }
    return e;
  }()
), tp = (
  /** @class */
  function() {
    function e() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return e;
  }()
), rp = (
  /** @class */
  function() {
    function e() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return e;
  }()
), ip = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, np = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, ta = 3, sp = [
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
  ["searchbot", ip]
], ra = [
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
function op(e) {
  return e ? ia(e) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new rp() : typeof navigator < "u" ? ia(navigator.userAgent) : up();
}
function ap(e) {
  return e !== "" && sp.reduce(function(t, r) {
    var i = r[0], n = r[1];
    if (t)
      return t;
    var s = n.exec(e);
    return !!s && [i, s];
  }, !1);
}
function ia(e) {
  var t = ap(e);
  if (!t)
    return null;
  var r = t[0], i = t[1];
  if (r === "searchbot")
    return new tp();
  var n = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
  n ? n.length < ta && (n = ea(ea([], n, !0), lp(ta - n.length), !0)) : n = [];
  var s = n.join("."), u = cp(e), a = np.exec(e);
  return a && a[1] ? new ep(r, s, u, a[1]) : new Zd(r, s, u);
}
function cp(e) {
  for (var t = 0, r = ra.length; t < r; t++) {
    var i = ra[t], n = i[0], s = i[1], u = s.exec(e);
    if (u)
      return n;
  }
  return null;
}
function up() {
  var e = typeof process < "u" && process.version;
  return e ? new Qd(process.version.slice(1)) : null;
}
function lp(e) {
  for (var t = [], r = 0; r < e; r++)
    t.push("0");
  return t;
}
var Fe = {};
Object.defineProperty(Fe, "__esModule", { value: !0 });
Fe.getLocalStorage = Fe.getLocalStorageOrThrow = Fe.getCrypto = Fe.getCryptoOrThrow = Jc = Fe.getLocation = Fe.getLocationOrThrow = Rs = Fe.getNavigator = Fe.getNavigatorOrThrow = Yc = Fe.getDocument = Fe.getDocumentOrThrow = Fe.getFromWindowOrThrow = Fe.getFromWindow = void 0;
function Fr(e) {
  let t;
  return typeof window < "u" && typeof window[e] < "u" && (t = window[e]), t;
}
Fe.getFromWindow = Fr;
function ei(e) {
  const t = Fr(e);
  if (!t)
    throw new Error(`${e} is not defined in Window`);
  return t;
}
Fe.getFromWindowOrThrow = ei;
function fp() {
  return ei("document");
}
Fe.getDocumentOrThrow = fp;
function hp() {
  return Fr("document");
}
var Yc = Fe.getDocument = hp;
function dp() {
  return ei("navigator");
}
Fe.getNavigatorOrThrow = dp;
function pp() {
  return Fr("navigator");
}
var Rs = Fe.getNavigator = pp;
function gp() {
  return ei("location");
}
Fe.getLocationOrThrow = gp;
function yp() {
  return Fr("location");
}
var Jc = Fe.getLocation = yp;
function bp() {
  return ei("crypto");
}
Fe.getCryptoOrThrow = bp;
function vp() {
  return Fr("crypto");
}
Fe.getCrypto = vp;
function mp() {
  return ei("localStorage");
}
Fe.getLocalStorageOrThrow = mp;
function _p() {
  return Fr("localStorage");
}
Fe.getLocalStorage = _p;
var Ts = {};
Object.defineProperty(Ts, "__esModule", { value: !0 });
var Xc = Ts.getWindowMetadata = void 0;
const na = Fe;
function wp() {
  let e, t;
  try {
    e = na.getDocumentOrThrow(), t = na.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const b = e.getElementsByTagName("link"), _ = [];
    for (let m = 0; m < b.length; m++) {
      const D = b[m], I = D.getAttribute("rel");
      if (I && I.toLowerCase().indexOf("icon") > -1) {
        const U = D.getAttribute("href");
        if (U)
          if (U.toLowerCase().indexOf("https:") === -1 && U.toLowerCase().indexOf("http:") === -1 && U.indexOf("//") !== 0) {
            let $ = t.protocol + "//" + t.host;
            if (U.indexOf("/") === 0)
              $ += U;
            else {
              const E = t.pathname.split("/");
              E.pop();
              const O = E.join("/");
              $ += O + "/" + U;
            }
            _.push($);
          } else if (U.indexOf("//") === 0) {
            const $ = t.protocol + U;
            _.push($);
          } else
            _.push(U);
      }
    }
    return _;
  }
  function i(...b) {
    const _ = e.getElementsByTagName("meta");
    for (let m = 0; m < _.length; m++) {
      const D = _[m], I = ["itemprop", "property", "name"].map((U) => D.getAttribute(U)).filter((U) => U ? b.includes(U) : !1);
      if (I.length && I) {
        const U = D.getAttribute("content");
        if (U)
          return U;
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
Xc = Ts.getWindowMetadata = wp;
var xi = {}, Ep = (e) => encodeURIComponent(e).replace(/[!'()*]/g, (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`), Zc = "%[a-f0-9]{2}", sa = new RegExp("(" + Zc + ")|([^%]+?)", "gi"), oa = new RegExp("(" + Zc + ")+", "gi");
function ss(e, t) {
  try {
    return [decodeURIComponent(e.join(""))];
  } catch {
  }
  if (e.length === 1)
    return e;
  t = t || 1;
  var r = e.slice(0, t), i = e.slice(t);
  return Array.prototype.concat.call([], ss(r), ss(i));
}
function Sp(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    for (var t = e.match(sa) || [], r = 1; r < t.length; r++)
      e = ss(t, r).join(""), t = e.match(sa) || [];
    return e;
  }
}
function Dp(e) {
  for (var t = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = oa.exec(e); r; ) {
    try {
      t[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var i = Sp(r[0]);
      i !== r[0] && (t[r[0]] = i);
    }
    r = oa.exec(e);
  }
  t["%C2"] = "�";
  for (var n = Object.keys(t), s = 0; s < n.length; s++) {
    var u = n[s];
    e = e.replace(new RegExp(u, "g"), t[u]);
  }
  return e;
}
var Op = function(e) {
  if (typeof e != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
  try {
    return e = e.replace(/\+/g, " "), decodeURIComponent(e);
  } catch {
    return Dp(e);
  }
}, xp = (e, t) => {
  if (!(typeof e == "string" && typeof t == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (t === "")
    return [e];
  const r = e.indexOf(t);
  return r === -1 ? [e] : [
    e.slice(0, r),
    e.slice(r + t.length)
  ];
}, Ip = function(e, t) {
  for (var r = {}, i = Object.keys(e), n = Array.isArray(t), s = 0; s < i.length; s++) {
    var u = i[s], a = e[u];
    (n ? t.indexOf(u) !== -1 : t(u, a, e)) && (r[u] = a);
  }
  return r;
};
(function(e) {
  const t = Ep, r = Op, i = xp, n = Ip, s = (E) => E == null, u = Symbol("encodeFragmentIdentifier");
  function a(E) {
    switch (E.arrayFormat) {
      case "index":
        return (O) => (g, w) => {
          const h = g.length;
          return w === void 0 || E.skipNull && w === null || E.skipEmptyString && w === "" ? g : w === null ? [...g, [d(O, E), "[", h, "]"].join("")] : [
            ...g,
            [d(O, E), "[", d(h, E), "]=", d(w, E)].join("")
          ];
        };
      case "bracket":
        return (O) => (g, w) => w === void 0 || E.skipNull && w === null || E.skipEmptyString && w === "" ? g : w === null ? [...g, [d(O, E), "[]"].join("")] : [...g, [d(O, E), "[]=", d(w, E)].join("")];
      case "colon-list-separator":
        return (O) => (g, w) => w === void 0 || E.skipNull && w === null || E.skipEmptyString && w === "" ? g : w === null ? [...g, [d(O, E), ":list="].join("")] : [...g, [d(O, E), ":list=", d(w, E)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const O = E.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (g) => (w, h) => h === void 0 || E.skipNull && h === null || E.skipEmptyString && h === "" ? w : (h = h === null ? "" : h, w.length === 0 ? [[d(g, E), O, d(h, E)].join("")] : [[w, d(h, E)].join(E.arrayFormatSeparator)]);
      }
      default:
        return (O) => (g, w) => w === void 0 || E.skipNull && w === null || E.skipEmptyString && w === "" ? g : w === null ? [...g, d(O, E)] : [...g, [d(O, E), "=", d(w, E)].join("")];
    }
  }
  function l(E) {
    let O;
    switch (E.arrayFormat) {
      case "index":
        return (g, w, h) => {
          if (O = /\[(\d*)\]$/.exec(g), g = g.replace(/\[\d*\]$/, ""), !O) {
            h[g] = w;
            return;
          }
          h[g] === void 0 && (h[g] = {}), h[g][O[1]] = w;
        };
      case "bracket":
        return (g, w, h) => {
          if (O = /(\[\])$/.exec(g), g = g.replace(/\[\]$/, ""), !O) {
            h[g] = w;
            return;
          }
          if (h[g] === void 0) {
            h[g] = [w];
            return;
          }
          h[g] = [].concat(h[g], w);
        };
      case "colon-list-separator":
        return (g, w, h) => {
          if (O = /(:list)$/.exec(g), g = g.replace(/:list$/, ""), !O) {
            h[g] = w;
            return;
          }
          if (h[g] === void 0) {
            h[g] = [w];
            return;
          }
          h[g] = [].concat(h[g], w);
        };
      case "comma":
      case "separator":
        return (g, w, h) => {
          const o = typeof w == "string" && w.includes(E.arrayFormatSeparator), p = typeof w == "string" && !o && b(w, E).includes(E.arrayFormatSeparator);
          w = p ? b(w, E) : w;
          const R = o || p ? w.split(E.arrayFormatSeparator).map((N) => b(N, E)) : w === null ? w : b(w, E);
          h[g] = R;
        };
      case "bracket-separator":
        return (g, w, h) => {
          const o = /(\[\])$/.test(g);
          if (g = g.replace(/\[\]$/, ""), !o) {
            h[g] = w && b(w, E);
            return;
          }
          const p = w === null ? [] : w.split(E.arrayFormatSeparator).map((R) => b(R, E));
          if (h[g] === void 0) {
            h[g] = p;
            return;
          }
          h[g] = [].concat(h[g], p);
        };
      default:
        return (g, w, h) => {
          if (h[g] === void 0) {
            h[g] = w;
            return;
          }
          h[g] = [].concat(h[g], w);
        };
    }
  }
  function f(E) {
    if (typeof E != "string" || E.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function d(E, O) {
    return O.encode ? O.strict ? t(E) : encodeURIComponent(E) : E;
  }
  function b(E, O) {
    return O.decode ? r(E) : E;
  }
  function _(E) {
    return Array.isArray(E) ? E.sort() : typeof E == "object" ? _(Object.keys(E)).sort((O, g) => Number(O) - Number(g)).map((O) => E[O]) : E;
  }
  function m(E) {
    const O = E.indexOf("#");
    return O !== -1 && (E = E.slice(0, O)), E;
  }
  function D(E) {
    let O = "";
    const g = E.indexOf("#");
    return g !== -1 && (O = E.slice(g)), O;
  }
  function I(E) {
    E = m(E);
    const O = E.indexOf("?");
    return O === -1 ? "" : E.slice(O + 1);
  }
  function U(E, O) {
    return O.parseNumbers && !Number.isNaN(Number(E)) && typeof E == "string" && E.trim() !== "" ? E = Number(E) : O.parseBooleans && E !== null && (E.toLowerCase() === "true" || E.toLowerCase() === "false") && (E = E.toLowerCase() === "true"), E;
  }
  function $(E, O) {
    O = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, O), f(O.arrayFormatSeparator);
    const g = l(O), w = /* @__PURE__ */ Object.create(null);
    if (typeof E != "string" || (E = E.trim().replace(/^[?#&]/, ""), !E))
      return w;
    for (const h of E.split("&")) {
      if (h === "")
        continue;
      let [o, p] = i(O.decode ? h.replace(/\+/g, " ") : h, "=");
      p = p === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(O.arrayFormat) ? p : b(p, O), g(b(o, O), p, w);
    }
    for (const h of Object.keys(w)) {
      const o = w[h];
      if (typeof o == "object" && o !== null)
        for (const p of Object.keys(o))
          o[p] = U(o[p], O);
      else
        w[h] = U(o, O);
    }
    return O.sort === !1 ? w : (O.sort === !0 ? Object.keys(w).sort() : Object.keys(w).sort(O.sort)).reduce((h, o) => {
      const p = w[o];
      return p && typeof p == "object" && !Array.isArray(p) ? h[o] = _(p) : h[o] = p, h;
    }, /* @__PURE__ */ Object.create(null));
  }
  e.extract = I, e.parse = $, e.stringify = (E, O) => {
    if (!E)
      return "";
    O = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, O), f(O.arrayFormatSeparator);
    const g = (p) => O.skipNull && s(E[p]) || O.skipEmptyString && E[p] === "", w = a(O), h = {};
    for (const p of Object.keys(E))
      g(p) || (h[p] = E[p]);
    const o = Object.keys(h);
    return O.sort !== !1 && o.sort(O.sort), o.map((p) => {
      const R = E[p];
      return R === void 0 ? "" : R === null ? d(p, O) : Array.isArray(R) ? R.length === 0 && O.arrayFormat === "bracket-separator" ? d(p, O) + "[]" : R.reduce(w(p), []).join("&") : d(p, O) + "=" + d(R, O);
    }).filter((p) => p.length > 0).join("&");
  }, e.parseUrl = (E, O) => {
    O = Object.assign({
      decode: !0
    }, O);
    const [g, w] = i(E, "#");
    return Object.assign(
      {
        url: g.split("?")[0] || "",
        query: $(I(E), O)
      },
      O && O.parseFragmentIdentifier && w ? { fragmentIdentifier: b(w, O) } : {}
    );
  }, e.stringifyUrl = (E, O) => {
    O = Object.assign({
      encode: !0,
      strict: !0,
      [u]: !0
    }, O);
    const g = m(E.url).split("?")[0] || "", w = e.extract(E.url), h = e.parse(w, { sort: !1 }), o = Object.assign(h, E.query);
    let p = e.stringify(o, O);
    p && (p = `?${p}`);
    let R = D(E.url);
    return E.fragmentIdentifier && (R = `#${O[u] ? d(E.fragmentIdentifier, O) : E.fragmentIdentifier}`), `${g}${p}${R}`;
  }, e.pick = (E, O, g) => {
    g = Object.assign({
      parseFragmentIdentifier: !0,
      [u]: !1
    }, g);
    const { url: w, query: h, fragmentIdentifier: o } = e.parseUrl(E, g);
    return e.stringifyUrl({
      url: w,
      query: n(h, O),
      fragmentIdentifier: o
    }, g);
  }, e.exclude = (E, O, g) => {
    const w = Array.isArray(O) ? (h) => !O.includes(h) : (h, o) => !O(h, o);
    return e.pick(E, w, g);
  };
})(xi);
const Ap = {
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
function Qc(e, t) {
  return e.includes(":") ? [e] : t.chains || [];
}
const eu = "base10", Ot = "base16", os = "base64pad", Ps = "utf8", tu = 0, $r = 1, Cp = 0, aa = 1, as = 12, Ns = 32;
function Rp() {
  const e = Cs.generateKeyPair();
  return { privateKey: It(e.secretKey, Ot), publicKey: It(e.publicKey, Ot) };
}
function cs() {
  const e = Qr.randomBytes(Ns);
  return It(e, Ot);
}
function Tp(e, t) {
  const r = Cs.sharedKey(Rt(e, Ot), Rt(t, Ot)), i = new Xd(pn.SHA256, r).expand(Ns);
  return It(i, Ot);
}
function Pp(e) {
  const t = pn.hash(Rt(e, Ot));
  return It(t, Ot);
}
function Hr(e) {
  const t = pn.hash(Rt(e, Ps));
  return It(t, Ot);
}
function Np(e) {
  return Rt(`${e}`, eu);
}
function Ti(e) {
  return Number(It(e, eu));
}
function Lp(e) {
  const t = Np(typeof e.type < "u" ? e.type : tu);
  if (Ti(t) === $r && typeof e.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof e.senderPublicKey < "u" ? Rt(e.senderPublicKey, Ot) : void 0, i = typeof e.iv < "u" ? Rt(e.iv, Ot) : Qr.randomBytes(as), n = new Is.ChaCha20Poly1305(Rt(e.symKey, Ot)).seal(i, Rt(e.message, Ps));
  return Fp({ type: t, sealed: n, iv: i, senderPublicKey: r });
}
function Up(e) {
  const t = new Is.ChaCha20Poly1305(Rt(e.symKey, Ot)), { sealed: r, iv: i } = Zi(e.encoded), n = t.open(i, r);
  if (n === null)
    throw new Error("Failed to decrypt");
  return It(n, Ps);
}
function Fp(e) {
  if (Ti(e.type) === $r) {
    if (typeof e.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return It(is([e.type, e.senderPublicKey, e.iv, e.sealed]), os);
  }
  return It(is([e.type, e.iv, e.sealed]), os);
}
function Zi(e) {
  const t = Rt(e, os), r = t.slice(Cp, aa), i = aa;
  if (Ti(r) === $r) {
    const a = i + Ns, l = a + as, f = t.slice(i, a), d = t.slice(a, l), b = t.slice(l);
    return { type: r, sealed: b, iv: d, senderPublicKey: f };
  }
  const n = i + as, s = t.slice(i, n), u = t.slice(n);
  return { type: r, sealed: u, iv: s };
}
function $p(e, t) {
  const r = Zi(e);
  return ru({ type: Ti(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? It(r.senderPublicKey, Ot) : void 0, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey });
}
function ru(e) {
  const t = (e == null ? void 0 : e.type) || tu;
  if (t === $r) {
    if (typeof (e == null ? void 0 : e.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (e == null ? void 0 : e.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: t, senderPublicKey: e == null ? void 0 : e.senderPublicKey, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey };
}
function ca(e) {
  return e.type === $r && typeof e.senderPublicKey == "string" && typeof e.receiverPublicKey == "string";
}
var Mp = Object.defineProperty, ua = Object.getOwnPropertySymbols, jp = Object.prototype.hasOwnProperty, Bp = Object.prototype.propertyIsEnumerable, la = (e, t, r) => t in e ? Mp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, fa = (e, t) => {
  for (var r in t || (t = {}))
    jp.call(t, r) && la(e, r, t[r]);
  if (ua)
    for (var r of ua(t))
      Bp.call(t, r) && la(e, r, t[r]);
  return e;
};
const zp = "ReactNative", br = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, Vp = "js";
function Ls() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function iu() {
  return !Yc() && !!Rs() && navigator.product === zp;
}
function Us() {
  return !Ls() && !!Rs();
}
function Fs() {
  return iu() ? br.reactNative : Ls() ? br.node : Us() ? br.browser : br.unknown;
}
function qp(e, t) {
  let r = xi.parse(e);
  return r = fa(fa({}, r), t), e = xi.stringify(r), e;
}
function Kp() {
  return Xc() || { name: "", description: "", url: "", icons: [""] };
}
function Wp() {
  if (Fs() === br.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: i } = global.Platform;
    return [r, i].join("-");
  }
  const e = op();
  if (e === null)
    return "unknown";
  const t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
  return e.type === "browser" ? [t, e.name, e.version].join("-") : [t, e.version].join("-");
}
function kp() {
  var e;
  const t = Fs();
  return t === br.browser ? [t, ((e = Jc()) == null ? void 0 : e.host) || "unknown"].join(":") : t;
}
function Hp(e, t, r) {
  const i = Wp(), n = kp();
  return [[e, t].join("-"), [Vp, r].join("-"), i, n].join("/");
}
function Gp({ protocol: e, version: t, relayUrl: r, sdkVersion: i, auth: n, projectId: s, useOnCloseEvent: u }) {
  const a = r.split("?"), l = Hp(e, t, i), f = { auth: n, ua: l, projectId: s, useOnCloseEvent: u || void 0 }, d = qp(a[1] || "", f);
  return a[0] + "?" + d;
}
function Pr(e, t) {
  return e.filter((r) => t.includes(r)).length === e.length;
}
function nu(e) {
  return Object.fromEntries(e.entries());
}
function su(e) {
  return new Map(Object.entries(e));
}
function Kr(e = te.FIVE_MINUTES, t) {
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
function Qi(e, t, r) {
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
function ou(e, t) {
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
function Yp(e) {
  return ou("topic", e);
}
function Jp(e) {
  return ou("id", e);
}
function au(e) {
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
function nt(e, t) {
  return `${e}${t ? `:${t}` : ""}`;
}
async function Xp({ id: e, topic: t, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const i = typeof r == "string" ? JSON.parse(r) : r;
    let n = i == null ? void 0 : i.href;
    if (typeof n != "string")
      return;
    n.endsWith("/") && (n = n.slice(0, -1));
    const s = `${n}/wc?requestId=${e}&sessionTopic=${t}`, u = Fs();
    u === br.browser ? s.startsWith("https://") ? window.open(s, "_blank", "noreferrer noopener") : window.open(s, "_self", "noreferrer noopener") : u === br.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(s);
  } catch (i) {
    console.error(i);
  }
}
const Zp = "irn";
function us(e) {
  return (e == null ? void 0 : e.relay) || { protocol: Zp };
}
function Hi(e) {
  const t = Ap[e];
  if (typeof t > "u")
    throw new Error(`Relay Protocol not supported: ${e}`);
  return t;
}
var Qp = Object.defineProperty, ha = Object.getOwnPropertySymbols, eg = Object.prototype.hasOwnProperty, tg = Object.prototype.propertyIsEnumerable, da = (e, t, r) => t in e ? Qp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, rg = (e, t) => {
  for (var r in t || (t = {}))
    eg.call(t, r) && da(e, r, t[r]);
  if (ha)
    for (var r of ha(t))
      tg.call(t, r) && da(e, r, t[r]);
  return e;
};
function ig(e, t = "-") {
  const r = {}, i = "relay" + t;
  return Object.keys(e).forEach((n) => {
    if (n.startsWith(i)) {
      const s = n.replace(i, ""), u = e[n];
      r[s] = u;
    }
  }), r;
}
function ng(e) {
  const t = e.indexOf(":"), r = e.indexOf("?") !== -1 ? e.indexOf("?") : void 0, i = e.substring(0, t), n = e.substring(t + 1, r).split("@"), s = typeof r < "u" ? e.substring(r) : "", u = xi.parse(s);
  return { protocol: i, topic: sg(n[0]), version: parseInt(n[1], 10), symKey: u.symKey, relay: ig(u) };
}
function sg(e) {
  return e.startsWith("//") ? e.substring(2) : e;
}
function og(e, t = "-") {
  const r = "relay", i = {};
  return Object.keys(e).forEach((n) => {
    const s = r + t + n;
    e[n] && (i[s] = e[n]);
  }), i;
}
function ag(e) {
  return `${e.protocol}:${e.topic}@${e.version}?` + xi.stringify(rg({ symKey: e.symKey }, og(e.relay)));
}
function ti(e) {
  const t = [];
  return e.forEach((r) => {
    const [i, n] = r.split(":");
    t.push(`${i}:${n}`);
  }), t;
}
function cg(e) {
  const t = [];
  return Object.values(e).forEach((r) => {
    t.push(...ti(r.accounts));
  }), t;
}
function ug(e, t) {
  const r = [];
  return Object.values(e).forEach((i) => {
    ti(i.accounts).includes(t) && r.push(...i.methods);
  }), r;
}
function lg(e, t) {
  const r = [];
  return Object.values(e).forEach((i) => {
    ti(i.accounts).includes(t) && r.push(...i.events);
  }), r;
}
function fg(e, t) {
  const r = Gi(e, t);
  if (r)
    throw new Error(r.message);
  const i = {};
  for (const [n, s] of Object.entries(e))
    i[n] = { methods: s.methods, events: s.events, chains: s.accounts.map((u) => `${u.split(":")[0]}:${u.split(":")[1]}`) };
  return i;
}
const hg = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, dg = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function X(e, t) {
  const { message: r, code: i } = dg[e];
  return { message: t ? `${r} ${t}` : r, code: i };
}
function ct(e, t) {
  const { message: r, code: i } = hg[e];
  return { message: t ? `${r} ${t}` : r, code: i };
}
function Pi(e, t) {
  return Array.isArray(e) ? typeof t < "u" && e.length ? e.every(t) : !0 : !1;
}
function Si(e) {
  return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
}
function Dt(e) {
  return typeof e > "u";
}
function ut(e, t) {
  return t && Dt(e) ? !0 : typeof e == "string" && !!e.trim().length;
}
function $s(e, t) {
  return t && Dt(e) ? !0 : typeof e == "number" && !isNaN(e);
}
function pg(e, t) {
  const { requiredNamespaces: r } = t, i = Object.keys(e.namespaces), n = Object.keys(r);
  let s = !0;
  return Pr(n, i) ? (i.forEach((u) => {
    const { accounts: a, methods: l, events: f } = e.namespaces[u], d = ti(a), b = r[u];
    (!Pr(Qc(u, b), d) || !Pr(b.methods, l) || !Pr(b.events, f)) && (s = !1);
  }), s) : !1;
}
function en(e) {
  return ut(e, !1) && e.includes(":") ? e.split(":").length === 2 : !1;
}
function gg(e) {
  if (ut(e, !1) && e.includes(":")) {
    const t = e.split(":");
    if (t.length === 3) {
      const r = t[0] + ":" + t[1];
      return !!t[2] && en(r);
    }
  }
  return !1;
}
function yg(e) {
  if (ut(e, !1))
    try {
      return typeof new URL(e) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function bg(e) {
  var t;
  return (t = e == null ? void 0 : e.proposer) == null ? void 0 : t.publicKey;
}
function vg(e) {
  return e == null ? void 0 : e.topic;
}
function mg(e, t) {
  let r = null;
  return ut(e == null ? void 0 : e.publicKey, !1) || (r = X("MISSING_OR_INVALID", `${t} controller public key should be a string`)), r;
}
function pa(e) {
  let t = !0;
  return Pi(e) ? e.length && (t = e.every((r) => ut(r, !1))) : t = !1, t;
}
function _g(e, t, r) {
  let i = null;
  return Pi(t) && t.length ? t.forEach((n) => {
    i || en(n) || (i = ct("UNSUPPORTED_CHAINS", `${r}, chain ${n} should be a string and conform to "namespace:chainId" format`));
  }) : en(e) || (i = ct("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), i;
}
function wg(e, t, r) {
  let i = null;
  return Object.entries(e).forEach(([n, s]) => {
    if (i)
      return;
    const u = _g(n, Qc(n, s), `${t} ${r}`);
    u && (i = u);
  }), i;
}
function Eg(e, t) {
  let r = null;
  return Pi(e) ? e.forEach((i) => {
    r || gg(i) || (r = ct("UNSUPPORTED_ACCOUNTS", `${t}, account ${i} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = ct("UNSUPPORTED_ACCOUNTS", `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function Sg(e, t) {
  let r = null;
  return Object.values(e).forEach((i) => {
    if (r)
      return;
    const n = Eg(i == null ? void 0 : i.accounts, `${t} namespace`);
    n && (r = n);
  }), r;
}
function Dg(e, t) {
  let r = null;
  return pa(e == null ? void 0 : e.methods) ? pa(e == null ? void 0 : e.events) || (r = ct("UNSUPPORTED_EVENTS", `${t}, events should be an array of strings or empty array for no events`)) : r = ct("UNSUPPORTED_METHODS", `${t}, methods should be an array of strings or empty array for no methods`), r;
}
function cu(e, t) {
  let r = null;
  return Object.values(e).forEach((i) => {
    if (r)
      return;
    const n = Dg(i, `${t}, namespace`);
    n && (r = n);
  }), r;
}
function Og(e, t, r) {
  let i = null;
  if (e && Si(e)) {
    const n = cu(e, t);
    n && (i = n);
    const s = wg(e, t, r);
    s && (i = s);
  } else
    i = X("MISSING_OR_INVALID", `${t}, ${r} should be an object with data`);
  return i;
}
function Gi(e, t) {
  let r = null;
  if (e && Si(e)) {
    const i = cu(e, t);
    i && (r = i);
    const n = Sg(e, t);
    n && (r = n);
  } else
    r = X("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
  return r;
}
function uu(e) {
  return ut(e.protocol, !0);
}
function xg(e, t) {
  let r = !1;
  return t && !e ? r = !0 : e && Pi(e) && e.length && e.forEach((i) => {
    r = uu(i);
  }), r;
}
function Ig(e) {
  return typeof e == "number";
}
function At(e) {
  return typeof e < "u" && typeof e !== null;
}
function Ag(e) {
  return !(!e || typeof e != "object" || !e.code || !$s(e.code, !1) || !e.message || !ut(e.message, !1));
}
function Cg(e) {
  return !(Dt(e) || !ut(e.method, !1));
}
function Rg(e) {
  return !(Dt(e) || Dt(e.result) && Dt(e.error) || !$s(e.id, !1) || !ut(e.jsonrpc, !1));
}
function Tg(e) {
  return !(Dt(e) || !ut(e.name, !1));
}
function ga(e, t) {
  return !(!en(t) || !cg(e).includes(t));
}
function Pg(e, t, r) {
  return ut(r, !1) ? ug(e, t).includes(r) : !1;
}
function Ng(e, t, r) {
  return ut(r, !1) ? lg(e, t).includes(r) : !1;
}
function ya(e, t, r) {
  let i = null;
  const n = Lg(e), s = Ug(t), u = Object.keys(n), a = Object.keys(s), l = ba(Object.keys(e)), f = ba(Object.keys(t)), d = l.filter((b) => !f.includes(b));
  return d.length && (i = X("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${d.toString()}
      Received: ${Object.keys(t).toString()}`)), Pr(u, a) || (i = X("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${u.toString()}
      Approved: ${a.toString()}`)), Object.keys(t).forEach((b) => {
    if (!b.includes(":") || i)
      return;
    const _ = ti(t[b].accounts);
    _.includes(b) || (i = X("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${b}
        Required: ${b}
        Approved: ${_.toString()}`));
  }), u.forEach((b) => {
    i || (Pr(n[b].methods, s[b].methods) ? Pr(n[b].events, s[b].events) || (i = X("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${b}`)) : i = X("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${b}`));
  }), i;
}
function Lg(e) {
  const t = {};
  return Object.keys(e).forEach((r) => {
    var i;
    r.includes(":") ? t[r] = e[r] : (i = e[r].chains) == null || i.forEach((n) => {
      t[n] = { methods: e[r].methods, events: e[r].events };
    });
  }), t;
}
function ba(e) {
  return [...new Set(e.map((t) => t.includes(":") ? t.split(":")[0] : t))];
}
function Ug(e) {
  const t = {};
  return Object.keys(e).forEach((r) => {
    if (r.includes(":"))
      t[r] = e[r];
    else {
      const i = ti(e[r].accounts);
      i == null || i.forEach((n) => {
        t[n] = { accounts: e[r].accounts.filter((s) => s.includes(`${n}:`)), methods: e[r].methods, events: e[r].events };
      });
    }
  }), t;
}
function Fg(e, t) {
  return $s(e, !1) && e <= t.max && e >= t.min;
}
const $g = "PARSE_ERROR", Mg = "INVALID_REQUEST", jg = "METHOD_NOT_FOUND", Bg = "INVALID_PARAMS", lu = "INTERNAL_ERROR", Ms = "SERVER_ERROR", zg = [-32700, -32600, -32601, -32602, -32603], Di = {
  [$g]: { code: -32700, message: "Parse error" },
  [Mg]: { code: -32600, message: "Invalid Request" },
  [jg]: { code: -32601, message: "Method not found" },
  [Bg]: { code: -32602, message: "Invalid params" },
  [lu]: { code: -32603, message: "Internal error" },
  [Ms]: { code: -32e3, message: "Server error" }
}, fu = Ms;
function Vg(e) {
  return zg.includes(e);
}
function va(e) {
  return Object.keys(Di).includes(e) ? Di[e] : Di[fu];
}
function qg(e) {
  const t = Object.values(Di).find((r) => r.code === e);
  return t || Di[fu];
}
function Kg(e, t, r) {
  return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${t}`) : e;
}
var hu = {}, ar = {}, ma;
function Wg() {
  if (ma)
    return ar;
  ma = 1, Object.defineProperty(ar, "__esModule", { value: !0 }), ar.isBrowserCryptoAvailable = ar.getSubtleCrypto = ar.getBrowerCrypto = void 0;
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
var cr = {}, _a;
function kg() {
  if (_a)
    return cr;
  _a = 1, Object.defineProperty(cr, "__esModule", { value: !0 }), cr.isBrowser = cr.isNode = cr.isReactNative = void 0;
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
  t.__exportStar(Wg(), e), t.__exportStar(kg(), e);
})(hu);
function du(e = 3) {
  const t = Date.now() * Math.pow(10, e), r = Math.floor(Math.random() * Math.pow(10, e));
  return t + r;
}
function js(e = 6) {
  return BigInt(du(e));
}
function gn(e, t, r) {
  return {
    id: r || du(),
    jsonrpc: "2.0",
    method: e,
    params: t
  };
}
function Bs(e, t) {
  return {
    id: e,
    jsonrpc: "2.0",
    result: t
  };
}
function zs(e, t, r) {
  return {
    id: e,
    jsonrpc: "2.0",
    error: Hg(t, r)
  };
}
function Hg(e, t) {
  return typeof e > "u" ? va(lu) : (typeof e == "string" && (e = Object.assign(Object.assign({}, va(Ms)), { message: e })), typeof t < "u" && (e.data = t), Vg(e.code) && (e = qg(e.code)), e);
}
class Gg {
}
class Yg extends Gg {
  constructor() {
    super();
  }
}
class Jg extends Yg {
  constructor(t) {
    super();
  }
}
const Xg = "^wss?:";
function Zg(e) {
  const t = e.match(new RegExp(/^\w+:/, "gi"));
  if (!(!t || !t.length))
    return t[0];
}
function Qg(e, t) {
  const r = Zg(e);
  return typeof r > "u" ? !1 : new RegExp(t).test(r);
}
function wa(e) {
  return Qg(e, Xg);
}
function ey(e) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(e);
}
function pu(e) {
  return typeof e == "object" && "id" in e && "jsonrpc" in e && e.jsonrpc === "2.0";
}
function Vs(e) {
  return pu(e) && "method" in e;
}
function yn(e) {
  return pu(e) && (ur(e) || Gt(e));
}
function ur(e) {
  return "result" in e;
}
function Gt(e) {
  return "error" in e;
}
class ty extends Jg {
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
    return this.requestStrict(gn(t.method, t.params || [], t.id || js().toString()), r);
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
    this.events.emit("payload", t), yn(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", {
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
const ry = () => typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : require("ws"), iy = () => typeof window < "u", Ea = (e) => e.split("?")[0], Sa = 10, ny = ry();
class sy {
  constructor(t) {
    if (this.url = t, this.events = new Xt.EventEmitter(), this.registering = !1, !wa(t))
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
      this.socket.send(Ds(t));
    } catch (i) {
      this.onError(t.id, i);
    }
  }
  register(t = this.url) {
    if (!wa(t))
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
      const n = hu.isReactNative() ? void 0 : { rejectUnauthorized: !ey(t) }, s = new ny(t, [], n);
      iy() ? s.onerror = (u) => {
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
    const r = typeof t.data == "string" ? Ac(t.data) : t.data;
    this.events.emit("payload", r);
  }
  onError(t, r) {
    const i = this.parseError(r), n = i.message || i.toString(), s = zs(t, n);
    this.events.emit("payload", s);
  }
  parseError(t, r = this.url) {
    return Kg(t, Ea(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Sa && this.events.setMaxListeners(Sa);
  }
  emitError(t) {
    const r = this.parseError(new Error((t == null ? void 0 : t.message) || `WebSocket connection failed for host: ${Ea(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var tn = { exports: {} };
tn.exports;
(function(e, t) {
  var r = 200, i = "__lodash_hash_undefined__", n = 1, s = 2, u = 9007199254740991, a = "[object Arguments]", l = "[object Array]", f = "[object AsyncFunction]", d = "[object Boolean]", b = "[object Date]", _ = "[object Error]", m = "[object Function]", D = "[object GeneratorFunction]", I = "[object Map]", U = "[object Number]", $ = "[object Null]", E = "[object Object]", O = "[object Promise]", g = "[object Proxy]", w = "[object RegExp]", h = "[object Set]", o = "[object String]", p = "[object Symbol]", R = "[object Undefined]", N = "[object WeakMap]", F = "[object ArrayBuffer]", K = "[object DataView]", Y = "[object Float32Array]", x = "[object Float64Array]", T = "[object Int8Array]", H = "[object Int16Array]", q = "[object Int32Array]", B = "[object Uint8Array]", V = "[object Uint8ClampedArray]", j = "[object Uint16Array]", W = "[object Uint32Array]", oe = /[\\^$.*+?()[\]{}|]/g, k = /^\[object .+?Constructor\]$/, ie = /^(?:0|[1-9]\d*)$/, Q = {};
  Q[Y] = Q[x] = Q[T] = Q[H] = Q[q] = Q[B] = Q[V] = Q[j] = Q[W] = !0, Q[a] = Q[l] = Q[F] = Q[d] = Q[K] = Q[b] = Q[_] = Q[m] = Q[I] = Q[U] = Q[E] = Q[w] = Q[h] = Q[o] = Q[N] = !1;
  var re = typeof Nt == "object" && Nt && Nt.Object === Object && Nt, L = typeof self == "object" && self && self.Object === Object && self, P = re || L || Function("return this")(), A = t && !t.nodeType && t, c = A && !0 && e && !e.nodeType && e, S = c && c.exports === A, G = S && re.process, Z = function() {
    try {
      return G && G.binding && G.binding("util");
    } catch {
    }
  }(), be = Z && Z.isTypedArray;
  function ve(y, C) {
    for (var z = -1, ee = y == null ? 0 : y.length, je = 0, fe = []; ++z < ee; ) {
      var Ye = y[z];
      C(Ye, z, y) && (fe[je++] = Ye);
    }
    return fe;
  }
  function he(y, C) {
    for (var z = -1, ee = C.length, je = y.length; ++z < ee; )
      y[je + z] = C[z];
    return y;
  }
  function xe(y, C) {
    for (var z = -1, ee = y == null ? 0 : y.length; ++z < ee; )
      if (C(y[z], z, y))
        return !0;
    return !1;
  }
  function Be(y, C) {
    for (var z = -1, ee = Array(y); ++z < y; )
      ee[z] = C(z);
    return ee;
  }
  function Le(y) {
    return function(C) {
      return y(C);
    };
  }
  function De(y, C) {
    return y.has(C);
  }
  function we(y, C) {
    return y == null ? void 0 : y[C];
  }
  function de(y) {
    var C = -1, z = Array(y.size);
    return y.forEach(function(ee, je) {
      z[++C] = [je, ee];
    }), z;
  }
  function ge(y, C) {
    return function(z) {
      return y(C(z));
    };
  }
  function pe(y) {
    var C = -1, z = Array(y.size);
    return y.forEach(function(ee) {
      z[++C] = ee;
    }), z;
  }
  var ue = Array.prototype, ce = Function.prototype, ne = Object.prototype, ye = P["__core-js_shared__"], me = ce.toString, ae = ne.hasOwnProperty, Ee = function() {
    var y = /[^.]+$/.exec(ye && ye.keys && ye.keys.IE_PROTO || "");
    return y ? "Symbol(src)_1." + y : "";
  }(), Ie = ne.toString, Te = RegExp(
    "^" + me.call(ae).replace(oe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Pe = S ? P.Buffer : void 0, Ae = P.Symbol, Tt = P.Uint8Array, Mt = ne.propertyIsEnumerable, Zt = ue.splice, lt = Ae ? Ae.toStringTag : void 0, Qt = Object.getOwnPropertySymbols, jt = Pe ? Pe.isBuffer : void 0, lr = ge(Object.keys, Object), ze = Br(P, "DataView"), $e = Br(P, "Map"), We = Br(P, "Promise"), Ve = Br(P, "Set"), ke = Br(P, "WeakMap"), Me = Br(Object, "create"), Xe = wr(ze), et = wr($e), tt = wr(We), Ze = wr(Ve), rt = wr(ke), Qe = Ae ? Ae.prototype : void 0, He = Qe ? Qe.valueOf : void 0;
  function Ue(y) {
    var C = -1, z = y == null ? 0 : y.length;
    for (this.clear(); ++C < z; ) {
      var ee = y[C];
      this.set(ee[0], ee[1]);
    }
  }
  function v() {
    this.__data__ = Me ? Me(null) : {}, this.size = 0;
  }
  function M(y) {
    var C = this.has(y) && delete this.__data__[y];
    return this.size -= C ? 1 : 0, C;
  }
  function J(y) {
    var C = this.__data__;
    if (Me) {
      var z = C[y];
      return z === i ? void 0 : z;
    }
    return ae.call(C, y) ? C[y] : void 0;
  }
  function se(y) {
    var C = this.__data__;
    return Me ? C[y] !== void 0 : ae.call(C, y);
  }
  function Ce(y, C) {
    var z = this.__data__;
    return this.size += this.has(y) ? 0 : 1, z[y] = Me && C === void 0 ? i : C, this;
  }
  Ue.prototype.clear = v, Ue.prototype.delete = M, Ue.prototype.get = J, Ue.prototype.has = se, Ue.prototype.set = Ce;
  function Se(y) {
    var C = -1, z = y == null ? 0 : y.length;
    for (this.clear(); ++C < z; ) {
      var ee = y[C];
      this.set(ee[0], ee[1]);
    }
  }
  function Oe() {
    this.__data__ = [], this.size = 0;
  }
  function _e(y) {
    var C = this.__data__, z = Fi(C, y);
    if (z < 0)
      return !1;
    var ee = C.length - 1;
    return z == ee ? C.pop() : Zt.call(C, z, 1), --this.size, !0;
  }
  function ft(y) {
    var C = this.__data__, z = Fi(C, y);
    return z < 0 ? void 0 : C[z][1];
  }
  function qe(y) {
    return Fi(this.__data__, y) > -1;
  }
  function Ge(y, C) {
    var z = this.__data__, ee = Fi(z, y);
    return ee < 0 ? (++this.size, z.push([y, C])) : z[ee][1] = C, this;
  }
  Se.prototype.clear = Oe, Se.prototype.delete = _e, Se.prototype.get = ft, Se.prototype.has = qe, Se.prototype.set = Ge;
  function it(y) {
    var C = -1, z = y == null ? 0 : y.length;
    for (this.clear(); ++C < z; ) {
      var ee = y[C];
      this.set(ee[0], ee[1]);
    }
  }
  function fr() {
    this.size = 0, this.__data__ = {
      hash: new Ue(),
      map: new ($e || Se)(),
      string: new Ue()
    };
  }
  function Li(y) {
    var C = $i(this, y).delete(y);
    return this.size -= C ? 1 : 0, C;
  }
  function Wt(y) {
    return $i(this, y).get(y);
  }
  function qu(y) {
    return $i(this, y).has(y);
  }
  function Ku(y, C) {
    var z = $i(this, y), ee = z.size;
    return z.set(y, C), this.size += z.size == ee ? 0 : 1, this;
  }
  it.prototype.clear = fr, it.prototype.delete = Li, it.prototype.get = Wt, it.prototype.has = qu, it.prototype.set = Ku;
  function Ui(y) {
    var C = -1, z = y == null ? 0 : y.length;
    for (this.__data__ = new it(); ++C < z; )
      this.add(y[C]);
  }
  function Wu(y) {
    return this.__data__.set(y, i), this;
  }
  function ku(y) {
    return this.__data__.has(y);
  }
  Ui.prototype.add = Ui.prototype.push = Wu, Ui.prototype.has = ku;
  function hr(y) {
    var C = this.__data__ = new Se(y);
    this.size = C.size;
  }
  function Hu() {
    this.__data__ = new Se(), this.size = 0;
  }
  function Gu(y) {
    var C = this.__data__, z = C.delete(y);
    return this.size = C.size, z;
  }
  function Yu(y) {
    return this.__data__.get(y);
  }
  function Ju(y) {
    return this.__data__.has(y);
  }
  function Xu(y, C) {
    var z = this.__data__;
    if (z instanceof Se) {
      var ee = z.__data__;
      if (!$e || ee.length < r - 1)
        return ee.push([y, C]), this.size = ++z.size, this;
      z = this.__data__ = new it(ee);
    }
    return z.set(y, C), this.size = z.size, this;
  }
  hr.prototype.clear = Hu, hr.prototype.delete = Gu, hr.prototype.get = Yu, hr.prototype.has = Ju, hr.prototype.set = Xu;
  function Zu(y, C) {
    var z = Mi(y), ee = !z && dl(y), je = !z && !ee && mn(y), fe = !z && !ee && !je && uo(y), Ye = z || ee || je || fe, ot = Ye ? Be(y.length, String) : [], ht = ot.length;
    for (var Ke in y)
      (C || ae.call(y, Ke)) && !(Ye && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Ke == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      je && (Ke == "offset" || Ke == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      fe && (Ke == "buffer" || Ke == "byteLength" || Ke == "byteOffset") || // Skip index properties.
      cl(Ke, ht))) && ot.push(Ke);
    return ot;
  }
  function Fi(y, C) {
    for (var z = y.length; z--; )
      if (so(y[z][0], C))
        return z;
    return -1;
  }
  function Qu(y, C, z) {
    var ee = C(y);
    return Mi(y) ? ee : he(ee, z(y));
  }
  function ni(y) {
    return y == null ? y === void 0 ? R : $ : lt && lt in Object(y) ? ol(y) : hl(y);
  }
  function to(y) {
    return si(y) && ni(y) == a;
  }
  function ro(y, C, z, ee, je) {
    return y === C ? !0 : y == null || C == null || !si(y) && !si(C) ? y !== y && C !== C : el(y, C, z, ee, ro, je);
  }
  function el(y, C, z, ee, je, fe) {
    var Ye = Mi(y), ot = Mi(C), ht = Ye ? l : dr(y), Ke = ot ? l : dr(C);
    ht = ht == a ? E : ht, Ke = Ke == a ? E : Ke;
    var Pt = ht == E, kt = Ke == E, yt = ht == Ke;
    if (yt && mn(y)) {
      if (!mn(C))
        return !1;
      Ye = !0, Pt = !1;
    }
    if (yt && !Pt)
      return fe || (fe = new hr()), Ye || uo(y) ? io(y, C, z, ee, je, fe) : nl(y, C, ht, z, ee, je, fe);
    if (!(z & n)) {
      var Bt = Pt && ae.call(y, "__wrapped__"), zt = kt && ae.call(C, "__wrapped__");
      if (Bt || zt) {
        var pr = Bt ? y.value() : y, or = zt ? C.value() : C;
        return fe || (fe = new hr()), je(pr, or, z, ee, fe);
      }
    }
    return yt ? (fe || (fe = new hr()), sl(y, C, z, ee, je, fe)) : !1;
  }
  function tl(y) {
    if (!co(y) || ll(y))
      return !1;
    var C = oo(y) ? Te : k;
    return C.test(wr(y));
  }
  function rl(y) {
    return si(y) && ao(y.length) && !!Q[ni(y)];
  }
  function il(y) {
    if (!fl(y))
      return lr(y);
    var C = [];
    for (var z in Object(y))
      ae.call(y, z) && z != "constructor" && C.push(z);
    return C;
  }
  function io(y, C, z, ee, je, fe) {
    var Ye = z & n, ot = y.length, ht = C.length;
    if (ot != ht && !(Ye && ht > ot))
      return !1;
    var Ke = fe.get(y);
    if (Ke && fe.get(C))
      return Ke == C;
    var Pt = -1, kt = !0, yt = z & s ? new Ui() : void 0;
    for (fe.set(y, C), fe.set(C, y); ++Pt < ot; ) {
      var Bt = y[Pt], zt = C[Pt];
      if (ee)
        var pr = Ye ? ee(zt, Bt, Pt, C, y, fe) : ee(Bt, zt, Pt, y, C, fe);
      if (pr !== void 0) {
        if (pr)
          continue;
        kt = !1;
        break;
      }
      if (yt) {
        if (!xe(C, function(or, Er) {
          if (!De(yt, Er) && (Bt === or || je(Bt, or, z, ee, fe)))
            return yt.push(Er);
        })) {
          kt = !1;
          break;
        }
      } else if (!(Bt === zt || je(Bt, zt, z, ee, fe))) {
        kt = !1;
        break;
      }
    }
    return fe.delete(y), fe.delete(C), kt;
  }
  function nl(y, C, z, ee, je, fe, Ye) {
    switch (z) {
      case K:
        if (y.byteLength != C.byteLength || y.byteOffset != C.byteOffset)
          return !1;
        y = y.buffer, C = C.buffer;
      case F:
        return !(y.byteLength != C.byteLength || !fe(new Tt(y), new Tt(C)));
      case d:
      case b:
      case U:
        return so(+y, +C);
      case _:
        return y.name == C.name && y.message == C.message;
      case w:
      case o:
        return y == C + "";
      case I:
        var ot = de;
      case h:
        var ht = ee & n;
        if (ot || (ot = pe), y.size != C.size && !ht)
          return !1;
        var Ke = Ye.get(y);
        if (Ke)
          return Ke == C;
        ee |= s, Ye.set(y, C);
        var Pt = io(ot(y), ot(C), ee, je, fe, Ye);
        return Ye.delete(y), Pt;
      case p:
        if (He)
          return He.call(y) == He.call(C);
    }
    return !1;
  }
  function sl(y, C, z, ee, je, fe) {
    var Ye = z & n, ot = no(y), ht = ot.length, Ke = no(C), Pt = Ke.length;
    if (ht != Pt && !Ye)
      return !1;
    for (var kt = ht; kt--; ) {
      var yt = ot[kt];
      if (!(Ye ? yt in C : ae.call(C, yt)))
        return !1;
    }
    var Bt = fe.get(y);
    if (Bt && fe.get(C))
      return Bt == C;
    var zt = !0;
    fe.set(y, C), fe.set(C, y);
    for (var pr = Ye; ++kt < ht; ) {
      yt = ot[kt];
      var or = y[yt], Er = C[yt];
      if (ee)
        var lo = Ye ? ee(Er, or, yt, C, y, fe) : ee(or, Er, yt, y, C, fe);
      if (!(lo === void 0 ? or === Er || je(or, Er, z, ee, fe) : lo)) {
        zt = !1;
        break;
      }
      pr || (pr = yt == "constructor");
    }
    if (zt && !pr) {
      var ji = y.constructor, Bi = C.constructor;
      ji != Bi && "constructor" in y && "constructor" in C && !(typeof ji == "function" && ji instanceof ji && typeof Bi == "function" && Bi instanceof Bi) && (zt = !1);
    }
    return fe.delete(y), fe.delete(C), zt;
  }
  function no(y) {
    return Qu(y, yl, al);
  }
  function $i(y, C) {
    var z = y.__data__;
    return ul(C) ? z[typeof C == "string" ? "string" : "hash"] : z.map;
  }
  function Br(y, C) {
    var z = we(y, C);
    return tl(z) ? z : void 0;
  }
  function ol(y) {
    var C = ae.call(y, lt), z = y[lt];
    try {
      y[lt] = void 0;
      var ee = !0;
    } catch {
    }
    var je = Ie.call(y);
    return ee && (C ? y[lt] = z : delete y[lt]), je;
  }
  var al = Qt ? function(y) {
    return y == null ? [] : (y = Object(y), ve(Qt(y), function(C) {
      return Mt.call(y, C);
    }));
  } : bl, dr = ni;
  (ze && dr(new ze(new ArrayBuffer(1))) != K || $e && dr(new $e()) != I || We && dr(We.resolve()) != O || Ve && dr(new Ve()) != h || ke && dr(new ke()) != N) && (dr = function(y) {
    var C = ni(y), z = C == E ? y.constructor : void 0, ee = z ? wr(z) : "";
    if (ee)
      switch (ee) {
        case Xe:
          return K;
        case et:
          return I;
        case tt:
          return O;
        case Ze:
          return h;
        case rt:
          return N;
      }
    return C;
  });
  function cl(y, C) {
    return C = C ?? u, !!C && (typeof y == "number" || ie.test(y)) && y > -1 && y % 1 == 0 && y < C;
  }
  function ul(y) {
    var C = typeof y;
    return C == "string" || C == "number" || C == "symbol" || C == "boolean" ? y !== "__proto__" : y === null;
  }
  function ll(y) {
    return !!Ee && Ee in y;
  }
  function fl(y) {
    var C = y && y.constructor, z = typeof C == "function" && C.prototype || ne;
    return y === z;
  }
  function hl(y) {
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
  function so(y, C) {
    return y === C || y !== y && C !== C;
  }
  var dl = to(function() {
    return arguments;
  }()) ? to : function(y) {
    return si(y) && ae.call(y, "callee") && !Mt.call(y, "callee");
  }, Mi = Array.isArray;
  function pl(y) {
    return y != null && ao(y.length) && !oo(y);
  }
  var mn = jt || vl;
  function gl(y, C) {
    return ro(y, C);
  }
  function oo(y) {
    if (!co(y))
      return !1;
    var C = ni(y);
    return C == m || C == D || C == f || C == g;
  }
  function ao(y) {
    return typeof y == "number" && y > -1 && y % 1 == 0 && y <= u;
  }
  function co(y) {
    var C = typeof y;
    return y != null && (C == "object" || C == "function");
  }
  function si(y) {
    return y != null && typeof y == "object";
  }
  var uo = be ? Le(be) : rl;
  function yl(y) {
    return pl(y) ? Zu(y) : il(y);
  }
  function bl() {
    return [];
  }
  function vl() {
    return !1;
  }
  e.exports = gl;
})(tn, tn.exports);
var oy = tn.exports;
const ay = /* @__PURE__ */ ws(oy);
function cy(e, t) {
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
  var a = e.length, l = e.charAt(0), f = Math.log(a) / Math.log(256), d = Math.log(256) / Math.log(a);
  function b(D) {
    if (D instanceof Uint8Array || (ArrayBuffer.isView(D) ? D = new Uint8Array(D.buffer, D.byteOffset, D.byteLength) : Array.isArray(D) && (D = Uint8Array.from(D))), !(D instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (D.length === 0)
      return "";
    for (var I = 0, U = 0, $ = 0, E = D.length; $ !== E && D[$] === 0; )
      $++, I++;
    for (var O = (E - $) * d + 1 >>> 0, g = new Uint8Array(O); $ !== E; ) {
      for (var w = D[$], h = 0, o = O - 1; (w !== 0 || h < U) && o !== -1; o--, h++)
        w += 256 * g[o] >>> 0, g[o] = w % a >>> 0, w = w / a >>> 0;
      if (w !== 0)
        throw new Error("Non-zero carry");
      U = h, $++;
    }
    for (var p = O - U; p !== O && g[p] === 0; )
      p++;
    for (var R = l.repeat(I); p < O; ++p)
      R += e.charAt(g[p]);
    return R;
  }
  function _(D) {
    if (typeof D != "string")
      throw new TypeError("Expected String");
    if (D.length === 0)
      return new Uint8Array();
    var I = 0;
    if (D[I] !== " ") {
      for (var U = 0, $ = 0; D[I] === l; )
        U++, I++;
      for (var E = (D.length - I) * f + 1 >>> 0, O = new Uint8Array(E); D[I]; ) {
        var g = r[D.charCodeAt(I)];
        if (g === 255)
          return;
        for (var w = 0, h = E - 1; (g !== 0 || w < $) && h !== -1; h--, w++)
          g += a * O[h] >>> 0, O[h] = g % 256 >>> 0, g = g / 256 >>> 0;
        if (g !== 0)
          throw new Error("Non-zero carry");
        $ = w, I++;
      }
      if (D[I] !== " ") {
        for (var o = E - $; o !== E && O[o] === 0; )
          o++;
        for (var p = new Uint8Array(U + (E - o)), R = U; o !== E; )
          p[R++] = O[o++];
        return p;
      }
    }
  }
  function m(D) {
    var I = _(D);
    if (I)
      return I;
    throw new Error(`Non-${t} character`);
  }
  return { encode: b, decodeUnsafe: _, decode: m };
}
var uy = cy, ly = uy;
const gu = (e) => {
  if (e instanceof Uint8Array && e.constructor.name === "Uint8Array")
    return e;
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  if (ArrayBuffer.isView(e))
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  throw new Error("Unknown type, must be binary type");
}, fy = (e) => new TextEncoder().encode(e), hy = (e) => new TextDecoder().decode(e);
class dy {
  constructor(t, r, i) {
    this.name = t, this.prefix = r, this.baseEncode = i;
  }
  encode(t) {
    if (t instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class py {
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
    return yu(this, t);
  }
}
class gy {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return yu(this, t);
  }
  decode(t) {
    const r = t[0], i = this.decoders[r];
    if (i)
      return i.decode(t);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const yu = (e, t) => new gy({ ...e.decoders || { [e.prefix]: e }, ...t.decoders || { [t.prefix]: t } });
class yy {
  constructor(t, r, i, n) {
    this.name = t, this.prefix = r, this.baseEncode = i, this.baseDecode = n, this.encoder = new dy(t, r, i), this.decoder = new py(t, r, n);
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const bn = ({ name: e, prefix: t, encode: r, decode: i }) => new yy(e, t, r, i), Ni = ({ prefix: e, name: t, alphabet: r }) => {
  const { encode: i, decode: n } = ly(r, t);
  return bn({ prefix: e, name: t, encode: i, decode: (s) => gu(n(s)) });
}, by = (e, t, r, i) => {
  const n = {};
  for (let d = 0; d < t.length; ++d)
    n[t[d]] = d;
  let s = e.length;
  for (; e[s - 1] === "="; )
    --s;
  const u = new Uint8Array(s * r / 8 | 0);
  let a = 0, l = 0, f = 0;
  for (let d = 0; d < s; ++d) {
    const b = n[e[d]];
    if (b === void 0)
      throw new SyntaxError(`Non-${i} character`);
    l = l << r | b, a += r, a >= 8 && (a -= 8, u[f++] = 255 & l >> a);
  }
  if (a >= r || 255 & l << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return u;
}, vy = (e, t, r) => {
  const i = t[t.length - 1] === "=", n = (1 << r) - 1;
  let s = "", u = 0, a = 0;
  for (let l = 0; l < e.length; ++l)
    for (a = a << 8 | e[l], u += 8; u > r; )
      u -= r, s += t[n & a >> u];
  if (u && (s += t[n & a << r - u]), i)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, gt = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) => bn({ prefix: t, name: e, encode(n) {
  return vy(n, i, r);
}, decode(n) {
  return by(n, i, r, e);
} }), my = bn({ prefix: "\0", name: "identity", encode: (e) => hy(e), decode: (e) => fy(e) });
var _y = Object.freeze({ __proto__: null, identity: my });
const wy = gt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var Ey = Object.freeze({ __proto__: null, base2: wy });
const Sy = gt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Dy = Object.freeze({ __proto__: null, base8: Sy });
const Oy = Ni({ prefix: "9", name: "base10", alphabet: "0123456789" });
var xy = Object.freeze({ __proto__: null, base10: Oy });
const Iy = gt({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), Ay = gt({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Cy = Object.freeze({ __proto__: null, base16: Iy, base16upper: Ay });
const Ry = gt({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), Ty = gt({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), Py = gt({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), Ny = gt({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), Ly = gt({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), Uy = gt({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), Fy = gt({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), $y = gt({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), My = gt({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var jy = Object.freeze({ __proto__: null, base32: Ry, base32upper: Ty, base32pad: Py, base32padupper: Ny, base32hex: Ly, base32hexupper: Uy, base32hexpad: Fy, base32hexpadupper: $y, base32z: My });
const By = Ni({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), zy = Ni({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Vy = Object.freeze({ __proto__: null, base36: By, base36upper: zy });
const qy = Ni({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), Ky = Ni({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Wy = Object.freeze({ __proto__: null, base58btc: qy, base58flickr: Ky });
const ky = gt({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), Hy = gt({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), Gy = gt({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), Yy = gt({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Jy = Object.freeze({ __proto__: null, base64: ky, base64pad: Hy, base64url: Gy, base64urlpad: Yy });
const bu = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Xy = bu.reduce((e, t, r) => (e[r] = t, e), []), Zy = bu.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []);
function Qy(e) {
  return e.reduce((t, r) => (t += Xy[r], t), "");
}
function e0(e) {
  const t = [];
  for (const r of e) {
    const i = Zy[r.codePointAt(0)];
    if (i === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    t.push(i);
  }
  return new Uint8Array(t);
}
const t0 = bn({ prefix: "🚀", name: "base256emoji", encode: Qy, decode: e0 });
var r0 = Object.freeze({ __proto__: null, base256emoji: t0 }), i0 = vu, Da = 128, n0 = 127, s0 = ~n0, o0 = Math.pow(2, 31);
function vu(e, t, r) {
  t = t || [], r = r || 0;
  for (var i = r; e >= o0; )
    t[r++] = e & 255 | Da, e /= 128;
  for (; e & s0; )
    t[r++] = e & 255 | Da, e >>>= 7;
  return t[r] = e | 0, vu.bytes = r - i + 1, t;
}
var a0 = ls, c0 = 128, Oa = 127;
function ls(e, i) {
  var r = 0, i = i || 0, n = 0, s = i, u, a = e.length;
  do {
    if (s >= a)
      throw ls.bytes = 0, new RangeError("Could not decode varint");
    u = e[s++], r += n < 28 ? (u & Oa) << n : (u & Oa) * Math.pow(2, n), n += 7;
  } while (u >= c0);
  return ls.bytes = s - i, r;
}
var u0 = Math.pow(2, 7), l0 = Math.pow(2, 14), f0 = Math.pow(2, 21), h0 = Math.pow(2, 28), d0 = Math.pow(2, 35), p0 = Math.pow(2, 42), g0 = Math.pow(2, 49), y0 = Math.pow(2, 56), b0 = Math.pow(2, 63), v0 = function(e) {
  return e < u0 ? 1 : e < l0 ? 2 : e < f0 ? 3 : e < h0 ? 4 : e < d0 ? 5 : e < p0 ? 6 : e < g0 ? 7 : e < y0 ? 8 : e < b0 ? 9 : 10;
}, m0 = { encode: i0, decode: a0, encodingLength: v0 }, mu = m0;
const xa = (e, t, r = 0) => (mu.encode(e, t, r), t), Ia = (e) => mu.encodingLength(e), fs = (e, t) => {
  const r = t.byteLength, i = Ia(e), n = i + Ia(r), s = new Uint8Array(n + r);
  return xa(e, s, 0), xa(r, s, i), s.set(t, n), new _0(e, r, t, s);
};
class _0 {
  constructor(t, r, i, n) {
    this.code = t, this.size = r, this.digest = i, this.bytes = n;
  }
}
const _u = ({ name: e, code: t, encode: r }) => new w0(e, t, r);
class w0 {
  constructor(t, r, i) {
    this.name = t, this.code = r, this.encode = i;
  }
  digest(t) {
    if (t instanceof Uint8Array) {
      const r = this.encode(t);
      return r instanceof Uint8Array ? fs(this.code, r) : r.then((i) => fs(this.code, i));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const wu = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t)), E0 = _u({ name: "sha2-256", code: 18, encode: wu("SHA-256") }), S0 = _u({ name: "sha2-512", code: 19, encode: wu("SHA-512") });
var D0 = Object.freeze({ __proto__: null, sha256: E0, sha512: S0 });
const Eu = 0, O0 = "identity", Su = gu, x0 = (e) => fs(Eu, Su(e)), I0 = { code: Eu, name: O0, encode: Su, digest: x0 };
var A0 = Object.freeze({ __proto__: null, identity: I0 });
new TextEncoder(), new TextDecoder();
const Aa = { ..._y, ...Ey, ...Dy, ...xy, ...Cy, ...jy, ...Vy, ...Wy, ...Jy, ...r0 };
({ ...D0, ...A0 });
function Du(e) {
  return globalThis.Buffer != null ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e;
}
function C0(e = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Du(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e);
}
function Ou(e, t, r, i) {
  return { name: e, prefix: t, encoder: { name: e, prefix: t, encode: r }, decoder: { decode: i } };
}
const Ca = Ou("utf8", "u", (e) => "u" + new TextDecoder("utf8").decode(e), (e) => new TextEncoder().encode(e.substring(1))), Pn = Ou("ascii", "a", (e) => {
  let t = "a";
  for (let r = 0; r < e.length; r++)
    t += String.fromCharCode(e[r]);
  return t;
}, (e) => {
  e = e.substring(1);
  const t = C0(e.length);
  for (let r = 0; r < e.length; r++)
    t[r] = e.charCodeAt(r);
  return t;
}), R0 = { utf8: Ca, "utf-8": Ca, hex: Aa.base16, latin1: Pn, ascii: Pn, binary: Pn, ...Aa };
function T0(e, t = "utf8") {
  const r = R0[t];
  if (!r)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Du(globalThis.Buffer.from(e, "utf-8")) : r.decoder.decode(`${r.prefix}${e}`);
}
const xu = "wc", P0 = 2, qs = "core", vr = `${xu}@2:${qs}:`, N0 = { name: qs, logger: "error" }, L0 = { database: ":memory:" }, U0 = "crypto", Ra = "client_ed25519_seed", F0 = te.ONE_DAY, $0 = "keychain", M0 = "0.3", j0 = "messages", B0 = "0.3", z0 = te.SIX_HOURS, V0 = "publisher", Iu = "irn", q0 = "error", Au = "wss://relay.walletconnect.com", Ta = "wss://relay.walletconnect.org", K0 = "relayer", Je = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, W0 = "_subscription", yi = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, k0 = te.ONE_SECOND / 2, H0 = "2.9.0", G0 = 1e4, Y0 = "0.3", J0 = "WALLETCONNECT_CLIENT_ID", nr = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, X0 = "subscription", Z0 = "0.3", Q0 = te.FIVE_SECONDS * 1e3, e1 = "pairing", t1 = "0.3", bi = { wc_pairingDelete: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 0 } } }, ir = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, r1 = "history", i1 = "0.3", n1 = "expirer", qt = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, s1 = "0.3", Nn = "verify-api", Pa = "https://verify.walletconnect.com";
class o1 {
  constructor(t, r) {
    this.core = t, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = $0, this.version = M0, this.initialized = !1, this.storagePrefix = vr, this.init = async () => {
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
    }, this.core = t, this.logger = Re.generateChildLogger(r, this.name);
  }
  get context() {
    return Re.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setKeyChain(t) {
    await this.core.storage.setItem(this.storageKey, nu(t));
  }
  async getKeyChain() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < "u" ? su(t) : void 0;
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
class a1 {
  constructor(t, r, i) {
    this.core = t, this.logger = r, this.name = U0, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (n) => (this.isInitialized(), this.keychain.has(n)), this.getClientId = async () => {
      this.isInitialized();
      const n = await this.getClientSeed(), s = Xo(n);
      return qc(s.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const n = Rp();
      return this.setPrivateKey(n.publicKey, n.privateKey);
    }, this.signJWT = async (n) => {
      this.isInitialized();
      const s = await this.getClientSeed(), u = Xo(s), a = cs();
      return await Md(a, n, F0, u);
    }, this.generateSharedKey = (n, s, u) => {
      this.isInitialized();
      const a = this.getPrivateKey(n), l = Tp(a, s);
      return this.setSymKey(l, u);
    }, this.setSymKey = async (n, s) => {
      this.isInitialized();
      const u = s || Pp(n);
      return await this.keychain.set(u, n), u;
    }, this.deleteKeyPair = async (n) => {
      this.isInitialized(), await this.keychain.del(n);
    }, this.deleteSymKey = async (n) => {
      this.isInitialized(), await this.keychain.del(n);
    }, this.encode = async (n, s, u) => {
      this.isInitialized();
      const a = ru(u), l = Ds(s);
      if (ca(a)) {
        const _ = a.senderPublicKey, m = a.receiverPublicKey;
        n = await this.generateSharedKey(_, m);
      }
      const f = this.getSymKey(n), { type: d, senderPublicKey: b } = a;
      return Lp({ type: d, symKey: f, message: l, senderPublicKey: b });
    }, this.decode = async (n, s, u) => {
      this.isInitialized();
      const a = $p(s, u);
      if (ca(a)) {
        const d = a.receiverPublicKey, b = a.senderPublicKey;
        n = await this.generateSharedKey(d, b);
      }
      const l = this.getSymKey(n), f = Up({ symKey: l, encoded: s });
      return Ac(f);
    }, this.getPayloadType = (n) => {
      const s = Zi(n);
      return Ti(s.type);
    }, this.getPayloadSenderPublicKey = (n) => {
      const s = Zi(n);
      return s.senderPublicKey ? It(s.senderPublicKey, Ot) : void 0;
    }, this.core = t, this.logger = Re.generateChildLogger(r, this.name), this.keychain = i || new o1(this.core, this.logger);
  }
  get context() {
    return Re.getLoggerContext(this.logger);
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
      t = this.keychain.get(Ra);
    } catch {
      t = cs(), await this.keychain.set(Ra, t);
    }
    return T0(t, "base16");
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
class c1 extends zf {
  constructor(t, r) {
    super(t, r), this.logger = t, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = j0, this.version = B0, this.initialized = !1, this.storagePrefix = vr, this.init = async () => {
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
      const s = Hr(n);
      let u = this.messages.get(i);
      return typeof u > "u" && (u = {}), typeof u[s] < "u" || (u[s] = n, this.messages.set(i, u), await this.persist()), s;
    }, this.get = (i) => {
      this.isInitialized();
      let n = this.messages.get(i);
      return typeof n > "u" && (n = {}), n;
    }, this.has = (i, n) => {
      this.isInitialized();
      const s = this.get(i), u = Hr(n);
      return typeof s[u] < "u";
    }, this.del = async (i) => {
      this.isInitialized(), this.messages.delete(i), await this.persist();
    }, this.logger = Re.generateChildLogger(t, this.name), this.core = r;
  }
  get context() {
    return Re.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setRelayerMessages(t) {
    await this.core.storage.setItem(this.storageKey, nu(t));
  }
  async getRelayerMessages() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < "u" ? su(t) : void 0;
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
class u1 extends Vf {
  constructor(t, r) {
    super(t, r), this.relayer = t, this.logger = r, this.events = new Xt.EventEmitter(), this.name = V0, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = te.toMiliseconds(te.TEN_SECONDS), this.queueTimeout = te.toMiliseconds(te.FIVE_SECONDS), this.needsTransportRestart = !1, this.publish = async (i, n, s) => {
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i, message: n, opts: s } });
      try {
        const u = (s == null ? void 0 : s.ttl) || z0, a = us(s), l = (s == null ? void 0 : s.prompt) || !1, f = (s == null ? void 0 : s.tag) || 0, d = (s == null ? void 0 : s.id) || js().toString(), b = { topic: i, message: n, opts: { ttl: u, relay: a, prompt: l, tag: f, id: d } }, _ = setTimeout(() => this.queue.set(d, b), this.queueTimeout);
        try {
          await await Qi(this.rpcPublish(i, n, u, a, l, f, d), this.publishTimeout), clearTimeout(_), this.relayer.events.emit(Je.publish, b);
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
    }, this.relayer = t, this.logger = Re.generateChildLogger(r, this.name), this.registerEventListeners();
  }
  get context() {
    return Re.getLoggerContext(this.logger);
  }
  rpcPublish(t, r, i, n, s, u, a) {
    var l, f, d, b;
    const _ = { method: Hi(n.protocol).publish, params: { topic: t, message: r, ttl: i, prompt: s, tag: u }, id: a };
    return Dt((l = _.params) == null ? void 0 : l.prompt) && ((f = _.params) == null || delete f.prompt), Dt((d = _.params) == null ? void 0 : d.tag) && ((b = _.params) == null || delete b.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: _ }), this.relayer.request(_);
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
    this.relayer.core.heartbeat.on(Zr.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(Je.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(Je.message_ack, (t) => {
      this.onPublish(t.id.toString());
    });
  }
}
class l1 {
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
var f1 = Object.defineProperty, h1 = Object.defineProperties, d1 = Object.getOwnPropertyDescriptors, Na = Object.getOwnPropertySymbols, p1 = Object.prototype.hasOwnProperty, g1 = Object.prototype.propertyIsEnumerable, La = (e, t, r) => t in e ? f1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, vi = (e, t) => {
  for (var r in t || (t = {}))
    p1.call(t, r) && La(e, r, t[r]);
  if (Na)
    for (var r of Na(t))
      g1.call(t, r) && La(e, r, t[r]);
  return e;
}, Ln = (e, t) => h1(e, d1(t));
class y1 extends Wf {
  constructor(t, r) {
    super(t, r), this.relayer = t, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new l1(), this.events = new Xt.EventEmitter(), this.name = X0, this.version = Z0, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = vr, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restart(), this.registerEventListeners(), this.onEnable(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (i, n) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: n } });
      try {
        const s = us(n), u = { topic: i, relay: s };
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
        !this.pending.has(i) && this.topics.includes(i) && (clearInterval(a), u.stop(this.pendingSubscriptionWatchLabel), n(!0)), u.elapsed(this.pendingSubscriptionWatchLabel) >= Q0 && (clearInterval(a), u.stop(this.pendingSubscriptionWatchLabel), s(new Error("Subscription resolution timeout")));
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
    }, this.relayer = t, this.logger = Re.generateChildLogger(r, this.name), this.clientId = "";
  }
  get context() {
    return Re.getLoggerContext(this.logger);
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
      const n = us(i);
      await this.rpcUnsubscribe(t, r, n);
      const s = ct("USER_DISCONNECTED", `${this.name}, ${t}`);
      await this.onUnsubscribe(t, r, s), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: t, id: r, opts: i } });
    } catch (n) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(n), n;
    }
  }
  async rpcSubscribe(t, r) {
    const i = { method: Hi(r.protocol).subscribe, params: { topic: t } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      await await Qi(this.relayer.request(i), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(Je.connection_stalled);
    }
    return Hr(t + this.clientId);
  }
  async rpcBatchSubscribe(t) {
    if (!t.length)
      return;
    const r = t[0].relay, i = { method: Hi(r.protocol).batchSubscribe, params: { topics: t.map((n) => n.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      return await await Qi(this.relayer.request(i), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(Je.connection_stalled);
    }
  }
  rpcUnsubscribe(t, r, i) {
    const n = { method: Hi(i.protocol).unsubscribe, params: { topic: t, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n }), this.relayer.request(n);
  }
  onSubscribe(t, r) {
    this.setSubscription(t, Ln(vi({}, r), { id: t })), this.pending.delete(r.topic);
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
    this.subscriptions.delete(t), this.topicMap.delete(i.topic, t), this.events.emit(nr.deleted, Ln(vi({}, i), { reason: r }));
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
    Pi(r) && this.onBatchSubscribe(r.map((i, n) => Ln(vi({}, t[n]), { id: i })));
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
    this.relayer.core.heartbeat.on(Zr.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(Je.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(Je.disconnect, () => {
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
var b1 = Object.defineProperty, Ua = Object.getOwnPropertySymbols, v1 = Object.prototype.hasOwnProperty, m1 = Object.prototype.propertyIsEnumerable, Fa = (e, t, r) => t in e ? b1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, _1 = (e, t) => {
  for (var r in t || (t = {}))
    v1.call(t, r) && Fa(e, r, t[r]);
  if (Ua)
    for (var r of Ua(t))
      m1.call(t, r) && Fa(e, r, t[r]);
  return e;
};
class w1 extends qf {
  constructor(t) {
    super(t), this.protocol = "wc", this.version = 2, this.events = new Xt.EventEmitter(), this.name = K0, this.transportExplicitlyClosed = !1, this.initialized = !1, this.reconnecting = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.request = async (r) => {
      this.logger.debug("Publishing Request Payload");
      try {
        return await this.toEstablishConnection(), await this.provider.request(r);
      } catch (i) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(i), i;
      }
    }, this.core = t.core, this.logger = typeof t.logger < "u" && typeof t.logger != "string" ? Re.generateChildLogger(t.logger, this.name) : Re.pino(Re.getDefaultLoggerOptions({ level: t.logger || q0 })), this.messages = new c1(this.logger, t.core), this.subscriber = new y1(this, this.logger), this.publisher = new u1(this, this.logger), this.relayUrl = (t == null ? void 0 : t.relayUrl) || Au, this.projectId = t.projectId, this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Ta}...`), await this.restartTransport(Ta);
    }
    this.registerEventListeners(), this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, G0);
  }
  get context() {
    return Re.getLoggerContext(this.logger);
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
    this.transportExplicitlyClosed = !0, this.connected && (await this.provider.disconnect(), this.events.emit(Je.transport_closed));
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
          await Qi(this.provider.connect(), 5e3, `Socket stalled when trying to connect to ${this.relayUrl}`).catch((n) => i(n)).then(() => r()).finally(() => this.removeListener(Je.transport_closed, this.rejectTransportOpen));
        }), new Promise((r) => this.once(Je.transport_closed, this.rejectTransportOpen))])]);
      } catch (r) {
        this.logger.error(r);
        const i = r;
        if (!this.isConnectionStalled(i.message))
          throw r;
        this.events.emit(Je.transport_closed);
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
    this.provider = new ty(new sy(Gp({ sdkVersion: H0, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: t, useOnCloseEvent: !0 }))), this.registerProviderListeners();
  }
  async recordMessageEvent(t) {
    const { topic: r, message: i } = t;
    await this.messages.set(r, i);
  }
  async shouldIgnoreMessageEvent(t) {
    const { topic: r, message: i } = t;
    return await this.subscriber.isSubscribed(r) ? this.messages.has(r, i) : !0;
  }
  async onProviderPayload(t) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: t }), Vs(t)) {
      if (!t.method.endsWith(W0))
        return;
      const r = t.params, { topic: i, message: n, publishedAt: s } = r.data, u = { topic: i, message: n, publishedAt: s };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(_1({ type: "event", event: r.id }, u)), this.events.emit(r.id, u), await this.acknowledgePayload(t), await this.onMessageEvent(u);
    } else
      yn(t) && this.events.emit(Je.message_ack, t);
  }
  async onMessageEvent(t) {
    await this.shouldIgnoreMessageEvent(t) || (this.events.emit(Je.message, t), await this.recordMessageEvent(t));
  }
  async acknowledgePayload(t) {
    const r = Bs(t.id, !0);
    await this.provider.connection.send(r);
  }
  registerProviderListeners() {
    this.provider.on(yi.payload, (t) => this.onProviderPayload(t)), this.provider.on(yi.connect, () => {
      this.events.emit(Je.connect);
    }), this.provider.on(yi.disconnect, () => {
      this.onProviderDisconnect();
    }), this.provider.on(yi.error, (t) => {
      this.logger.error(t), this.events.emit(Je.error, t);
    });
  }
  registerEventListeners() {
    this.events.on(Je.connection_stalled, async () => {
      await this.restartTransport();
    });
  }
  onProviderDisconnect() {
    this.events.emit(Je.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || setTimeout(async () => {
      await this.restartTransport();
    }, te.toMiliseconds(k0));
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
var E1 = Object.defineProperty, $a = Object.getOwnPropertySymbols, S1 = Object.prototype.hasOwnProperty, D1 = Object.prototype.propertyIsEnumerable, Ma = (e, t, r) => t in e ? E1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, ja = (e, t) => {
  for (var r in t || (t = {}))
    S1.call(t, r) && Ma(e, r, t[r]);
  if ($a)
    for (var r of $a(t))
      D1.call(t, r) && Ma(e, r, t[r]);
  return e;
};
class vn extends Kf {
  constructor(t, r, i, n = vr, s = void 0) {
    super(t, r, i, n), this.core = t, this.logger = r, this.name = i, this.map = /* @__PURE__ */ new Map(), this.version = Y0, this.cached = [], this.initialized = !1, this.storagePrefix = vr, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((u) => {
        this.getKey && u !== null && !Dt(u) ? this.map.set(this.getKey(u), u) : bg(u) ? this.map.set(u.id, u) : vg(u) && this.map.set(u.topic, u);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (u, a) => {
      this.isInitialized(), this.map.has(u) ? await this.update(u, a) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: u, value: a }), this.map.set(u, a), await this.persist());
    }, this.get = (u) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: u }), this.getData(u)), this.getAll = (u) => (this.isInitialized(), u ? this.values.filter((a) => Object.keys(u).every((l) => ay(a[l], u[l]))) : this.values), this.update = async (u, a) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: u, update: a });
      const l = ja(ja({}, this.getData(u)), a);
      this.map.set(u, l), await this.persist();
    }, this.delete = async (u, a) => {
      this.isInitialized(), this.map.has(u) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: u, reason: a }), this.map.delete(u), await this.persist());
    }, this.logger = Re.generateChildLogger(r, this.name), this.storagePrefix = n, this.getKey = s;
  }
  get context() {
    return Re.getLoggerContext(this.logger);
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
class O1 {
  constructor(t, r) {
    this.core = t, this.logger = r, this.name = e1, this.version = t1, this.events = new wc(), this.initialized = !1, this.storagePrefix = vr, this.ignoredPayloadTypes = [$r], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: i }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i])];
    }, this.create = async () => {
      this.isInitialized();
      const i = cs(), n = await this.core.crypto.setSymKey(i), s = Ht(te.FIVE_MINUTES), u = { protocol: Iu }, a = { topic: n, expiry: s, relay: u, active: !1 }, l = ag({ protocol: this.core.protocol, version: this.core.version, topic: n, symKey: i, relay: u });
      return await this.pairings.set(n, a), await this.core.relayer.subscribe(n), this.core.expirer.set(n, s), { topic: n, uri: l };
    }, this.pair = async (i) => {
      this.isInitialized(), this.isValidPair(i);
      const { topic: n, symKey: s, relay: u } = ng(i.uri);
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
        const s = await this.sendRequest(n, "wc_pairingPing", {}), { done: u, resolve: a, reject: l } = Kr();
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
      this.pairings.keys.includes(n) && (await this.sendRequest(n, "wc_pairingDelete", ct("USER_DISCONNECTED")), await this.deletePairing(n));
    }, this.sendRequest = async (i, n, s) => {
      const u = gn(n, s), a = await this.core.crypto.encode(i, u), l = bi[n].req;
      return this.core.history.set(i, u), this.core.relayer.publish(i, a, l), u.id;
    }, this.sendResult = async (i, n, s) => {
      const u = Bs(i, s), a = await this.core.crypto.encode(n, u), l = await this.core.history.get(n, i), f = bi[l.request.method].res;
      await this.core.relayer.publish(n, a, f), await this.core.history.resolve(u);
    }, this.sendError = async (i, n, s) => {
      const u = zs(i, s), a = await this.core.crypto.encode(n, u), l = await this.core.history.get(n, i), f = bi[l.request.method] ? bi[l.request.method].res : bi.unregistered_method.res;
      await this.core.relayer.publish(n, a, f), await this.core.history.resolve(u);
    }, this.deletePairing = async (i, n) => {
      await this.core.relayer.unsubscribe(i), await Promise.all([this.pairings.delete(i, ct("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i), n ? Promise.resolve() : this.core.expirer.del(i)]);
    }, this.cleanup = async () => {
      const i = this.pairings.getAll().filter((n) => yr(n.expiry));
      await Promise.all(i.map((n) => this.deletePairing(n.topic)));
    }, this.onRelayEventRequest = (i) => {
      const { topic: n, payload: s } = i, u = s.method;
      if (this.pairings.keys.includes(n))
        switch (u) {
          case "wc_pairingPing":
            return this.onPairingPingRequest(n, s);
          case "wc_pairingDelete":
            return this.onPairingDeleteRequest(n, s);
          default:
            return this.onUnknownRpcMethodRequest(n, s);
        }
    }, this.onRelayEventResponse = async (i) => {
      const { topic: n, payload: s } = i, u = (await this.core.history.get(n, s.id)).request.method;
      if (this.pairings.keys.includes(n))
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
        ur(n) ? this.events.emit(nt("pairing_ping", s), {}) : Gt(n) && this.events.emit(nt("pairing_ping", s), { error: n.error });
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
        const a = ct("WC_METHOD_UNSUPPORTED", u);
        await this.sendError(s, i, a), this.logger.error(a);
      } catch (a) {
        await this.sendError(s, i, a), this.logger.error(a);
      }
    }, this.onUnknownRpcMethodResponse = (i) => {
      this.registeredMethods.includes(i) || this.logger.error(ct("WC_METHOD_UNSUPPORTED", i));
    }, this.isValidPair = (i) => {
      if (!At(i)) {
        const { message: n } = X("MISSING_OR_INVALID", `pair() params: ${i}`);
        throw new Error(n);
      }
      if (!yg(i.uri)) {
        const { message: n } = X("MISSING_OR_INVALID", `pair() uri: ${i.uri}`);
        throw new Error(n);
      }
    }, this.isValidPing = async (i) => {
      if (!At(i)) {
        const { message: s } = X("MISSING_OR_INVALID", `ping() params: ${i}`);
        throw new Error(s);
      }
      const { topic: n } = i;
      await this.isValidPairingTopic(n);
    }, this.isValidDisconnect = async (i) => {
      if (!At(i)) {
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
      if (yr(this.pairings.get(i).expiry)) {
        await this.deletePairing(i);
        const { message: n } = X("EXPIRED", `pairing topic: ${i}`);
        throw new Error(n);
      }
    }, this.core = t, this.logger = Re.generateChildLogger(r, this.name), this.pairings = new vn(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return Re.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = X("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(Je.message, async (t) => {
      const { topic: r, message: i } = t;
      if (this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i)))
        return;
      const n = await this.core.crypto.decode(r, i);
      Vs(n) ? (this.core.history.set(r, n), this.onRelayEventRequest({ topic: r, payload: n })) : yn(n) && (await this.core.history.resolve(n), await this.onRelayEventResponse({ topic: r, payload: n }), this.core.history.delete(r, n.id));
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(qt.expired, async (t) => {
      const { topic: r } = au(t.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit("pairing_expire", { topic: r }));
    });
  }
}
class x1 extends Bf {
  constructor(t, r) {
    super(t, r), this.core = t, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new Xt.EventEmitter(), this.name = r1, this.version = i1, this.cached = [], this.initialized = !1, this.storagePrefix = vr, this.init = async () => {
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
    }, this.logger = Re.generateChildLogger(r, this.name);
  }
  get context() {
    return Re.getLoggerContext(this.logger);
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
      const i = { topic: r.topic, request: gn(r.request.method, r.request.params, r.id), chainId: r.chainId };
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
    }), this.core.heartbeat.on(Zr.HEARTBEAT_EVENTS.pulse, () => {
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
class I1 extends kf {
  constructor(t, r) {
    super(t, r), this.core = t, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new Xt.EventEmitter(), this.name = n1, this.version = s1, this.cached = [], this.initialized = !1, this.storagePrefix = vr, this.init = async () => {
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
      this.expirations.set(s, u), this.checkExpiry(s, u), this.events.emit(qt.created, { target: s, expiration: u });
    }, this.get = (i) => {
      this.isInitialized();
      const n = this.formatTarget(i);
      return this.getExpiration(n);
    }, this.del = (i) => {
      if (this.isInitialized(), this.has(i)) {
        const n = this.formatTarget(i), s = this.getExpiration(n);
        this.expirations.delete(n), this.events.emit(qt.deleted, { target: n, expiration: s });
      }
    }, this.on = (i, n) => {
      this.events.on(i, n);
    }, this.once = (i, n) => {
      this.events.once(i, n);
    }, this.off = (i, n) => {
      this.events.off(i, n);
    }, this.removeListener = (i, n) => {
      this.events.removeListener(i, n);
    }, this.logger = Re.generateChildLogger(r, this.name);
  }
  get context() {
    return Re.getLoggerContext(this.logger);
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
      return Yp(t);
    if (typeof t == "number")
      return Jp(t);
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
    await this.setExpirations(this.values), this.events.emit(qt.sync);
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
    this.expirations.delete(t), this.events.emit(qt.expired, { target: t, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((t, r) => this.checkExpiry(r, t));
  }
  registerEventListeners() {
    this.core.heartbeat.on(Zr.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(qt.created, (t) => {
      const r = qt.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), this.persist();
    }), this.events.on(qt.expired, (t) => {
      const r = qt.expired;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), this.persist();
    }), this.events.on(qt.deleted, (t) => {
      const r = qt.deleted;
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
class A1 extends Hf {
  constructor(t, r) {
    super(t, r), this.projectId = t, this.logger = r, this.name = Nn, this.initialized = !1, this.init = async (i) => {
      iu() || !Us() || (this.verifyUrl = (i == null ? void 0 : i.verifyUrl) || Pa, await this.createIframe());
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
          if (document.getElementById(Nn))
            return i();
          const s = document.createElement("iframe");
          s.setAttribute("id", Nn), s.setAttribute("src", `${this.verifyUrl}/${this.projectId}`), s.style.display = "none", s.addEventListener("load", () => {
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
    }, this.logger = Re.generateChildLogger(r, this.name), this.verifyUrl = Pa, this.abortController = new AbortController(), this.isDevEnv = Ls() && process.env.IS_VITEST;
  }
  get context() {
    return Re.getLoggerContext(this.logger);
  }
  startAbortTimer(t) {
    return setTimeout(() => this.abortController.abort(), te.toMiliseconds(t));
  }
}
var C1 = Object.defineProperty, Ba = Object.getOwnPropertySymbols, R1 = Object.prototype.hasOwnProperty, T1 = Object.prototype.propertyIsEnumerable, za = (e, t, r) => t in e ? C1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Va = (e, t) => {
  for (var r in t || (t = {}))
    R1.call(t, r) && za(e, r, t[r]);
  if (Ba)
    for (var r of Ba(t))
      T1.call(t, r) && za(e, r, t[r]);
  return e;
};
let P1 = class Cu extends jf {
  constructor(t) {
    super(t), this.protocol = xu, this.version = P0, this.name = qs, this.events = new Xt.EventEmitter(), this.initialized = !1, this.on = (i, n) => this.events.on(i, n), this.once = (i, n) => this.events.once(i, n), this.off = (i, n) => this.events.off(i, n), this.removeListener = (i, n) => this.events.removeListener(i, n), this.projectId = t == null ? void 0 : t.projectId, this.relayUrl = (t == null ? void 0 : t.relayUrl) || Au;
    const r = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : Re.pino(Re.getDefaultLoggerOptions({ level: (t == null ? void 0 : t.logger) || N0.logger }));
    this.logger = Re.generateChildLogger(r, this.name), this.heartbeat = new Zr.HeartBeat(), this.crypto = new a1(this, this.logger, t == null ? void 0 : t.keychain), this.history = new x1(this, this.logger), this.expirer = new I1(this, this.logger), this.storage = t != null && t.storage ? t.storage : new Ef(Va(Va({}, L0), t == null ? void 0 : t.storageOptions)), this.relayer = new w1({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new O1(this, this.logger), this.verify = new A1(this.projectId || "", this.logger);
  }
  static async init(t) {
    const r = new Cu(t);
    await r.initialize();
    const i = await r.crypto.getClientId();
    return await r.storage.setItem(J0, i), r;
  }
  get context() {
    return Re.getLoggerContext(this.logger);
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
const N1 = P1, Ru = "wc", Tu = 2, Pu = "client", Ks = `${Ru}@${Tu}:${Pu}:`, Un = { name: Pu, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, L1 = "WALLETCONNECT_DEEPLINK_CHOICE", U1 = "proposal", F1 = "Proposal expired", $1 = "session", Ki = te.SEVEN_DAYS, M1 = "engine", mi = { wc_sessionPropose: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, Fn = { min: te.FIVE_MINUTES, max: te.SEVEN_DAYS }, j1 = "request", B1 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var z1 = Object.defineProperty, V1 = Object.defineProperties, q1 = Object.getOwnPropertyDescriptors, qa = Object.getOwnPropertySymbols, K1 = Object.prototype.hasOwnProperty, W1 = Object.prototype.propertyIsEnumerable, Ka = (e, t, r) => t in e ? z1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Vt = (e, t) => {
  for (var r in t || (t = {}))
    K1.call(t, r) && Ka(e, r, t[r]);
  if (qa)
    for (var r of qa(t))
      W1.call(t, r) && Ka(e, r, t[r]);
  return e;
}, $n = (e, t) => V1(e, q1(t));
class k1 extends Yf {
  constructor(t) {
    super(t), this.name = M1, this.events = new wc(), this.initialized = !1, this.ignoredPayloadTypes = [$r], this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({ methods: Object.keys(mi) }), this.initialized = !0);
    }, this.connect = async (r) => {
      this.isInitialized();
      const i = $n(Vt({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(i);
      const { pairingTopic: n, requiredNamespaces: s, optionalNamespaces: u, sessionProperties: a, relays: l } = i;
      let f = n, d, b = !1;
      if (f && (b = this.client.core.pairing.pairings.get(f).active), !f || !b) {
        const { topic: O, uri: g } = await this.client.core.pairing.create();
        f = O, d = g;
      }
      const _ = await this.client.core.crypto.generateKeyPair(), m = Vt({ requiredNamespaces: s, optionalNamespaces: u, relays: l ?? [{ protocol: Iu }], proposer: { publicKey: _, metadata: this.client.metadata } }, a && { sessionProperties: a }), { reject: D, resolve: I, done: U } = Kr(te.FIVE_MINUTES, F1);
      if (this.events.once(nt("session_connect"), async ({ error: O, session: g }) => {
        if (O)
          D(O);
        else if (g) {
          g.self.publicKey = _;
          const w = $n(Vt({}, g), { requiredNamespaces: g.requiredNamespaces, optionalNamespaces: g.optionalNamespaces });
          await this.client.session.set(g.topic, w), await this.setExpiry(g.topic, g.expiry), f && await this.client.core.pairing.updateMetadata({ topic: f, metadata: g.peer.metadata }), I(w);
        }
      }), !f) {
        const { message: O } = X("NO_MATCHING_KEY", `connect() pairing topic: ${f}`);
        throw new Error(O);
      }
      const $ = await this.sendRequest(f, "wc_sessionPropose", m), E = Ht(te.FIVE_MINUTES);
      return await this.setProposal($, Vt({ id: $, expiry: E }, m)), { uri: d, approval: U };
    }, this.pair = async (r) => (this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      this.isInitialized(), await this.isValidApprove(r);
      const { id: i, relayProtocol: n, namespaces: s, sessionProperties: u } = r, a = this.client.proposal.get(i);
      let { pairingTopic: l, proposer: f, requiredNamespaces: d, optionalNamespaces: b } = a;
      l = l || "", Si(d) || (d = fg(s, "approve()"));
      const _ = await this.client.core.crypto.generateKeyPair(), m = f.publicKey, D = await this.client.core.crypto.generateSharedKey(_, m);
      l && i && (await this.client.core.pairing.updateMetadata({ topic: l, metadata: f.metadata }), await this.sendResult(i, l, { relay: { protocol: n ?? "irn" }, responderPublicKey: _ }), await this.client.proposal.delete(i, ct("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: l }));
      const I = Vt({ relay: { protocol: n ?? "irn" }, namespaces: s, requiredNamespaces: d, optionalNamespaces: b, pairingTopic: l, controller: { publicKey: _, metadata: this.client.metadata }, expiry: Ht(Ki) }, u && { sessionProperties: u });
      await this.client.core.relayer.subscribe(D), await this.sendRequest(D, "wc_sessionSettle", I);
      const U = $n(Vt({}, I), { topic: D, pairingTopic: l, acknowledged: !1, self: I.controller, peer: { publicKey: f.publicKey, metadata: f.metadata }, controller: _ });
      return await this.client.session.set(D, U), await this.setExpiry(D, Ht(Ki)), { topic: D, acknowledged: () => new Promise(($) => setTimeout(() => $(this.client.session.get(D)), 500)) };
    }, this.reject = async (r) => {
      this.isInitialized(), await this.isValidReject(r);
      const { id: i, reason: n } = r, { pairingTopic: s } = this.client.proposal.get(i);
      s && (await this.sendError(i, s, n), await this.client.proposal.delete(i, ct("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      this.isInitialized(), await this.isValidUpdate(r);
      const { topic: i, namespaces: n } = r, s = await this.sendRequest(i, "wc_sessionUpdate", { namespaces: n }), { done: u, resolve: a, reject: l } = Kr();
      return this.events.once(nt("session_update", s), ({ error: f }) => {
        f ? l(f) : a();
      }), await this.client.session.update(i, { namespaces: n }), { acknowledged: u };
    }, this.extend = async (r) => {
      this.isInitialized(), await this.isValidExtend(r);
      const { topic: i } = r, n = await this.sendRequest(i, "wc_sessionExtend", {}), { done: s, resolve: u, reject: a } = Kr();
      return this.events.once(nt("session_extend", n), ({ error: l }) => {
        l ? a(l) : u();
      }), await this.setExpiry(i, Ht(Ki)), { acknowledged: s };
    }, this.request = async (r) => {
      this.isInitialized(), await this.isValidRequest(r);
      const { chainId: i, request: n, topic: s, expiry: u } = r, a = await this.sendRequest(s, "wc_sessionRequest", { request: n, chainId: i }, u), { done: l, resolve: f, reject: d } = Kr(u);
      this.events.once(nt("session_request", a), ({ error: _, result: m }) => {
        _ ? d(_) : f(m);
      }), this.client.events.emit("session_request_sent", { topic: s, request: n, chainId: i, id: a });
      const b = await this.client.core.storage.getItem(L1);
      return Xp({ id: a, topic: s, wcDeepLink: b }), await l();
    }, this.respond = async (r) => {
      this.isInitialized(), await this.isValidRespond(r);
      const { topic: i, response: n } = r, { id: s } = n;
      ur(n) ? await this.sendResult(s, i, n.result) : Gt(n) && await this.sendError(s, i, n.error), this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 });
    }, this.ping = async (r) => {
      this.isInitialized(), await this.isValidPing(r);
      const { topic: i } = r;
      if (this.client.session.keys.includes(i)) {
        const n = await this.sendRequest(i, "wc_sessionPing", {}), { done: s, resolve: u, reject: a } = Kr();
        this.events.once(nt("session_ping", n), ({ error: l }) => {
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
        const n = js().toString();
        let s;
        const u = (a) => {
          (a == null ? void 0 : a.id.toString()) === n && (this.client.core.relayer.events.removeListener(Je.message_ack, u), s());
        };
        await Promise.all([new Promise((a) => {
          s = a, this.client.core.relayer.on(Je.message_ack, u);
        }), this.sendRequest(i, "wc_sessionDelete", ct("USER_DISCONNECTED"), void 0, n)]), await this.deleteSession(i);
      } else
        await this.client.core.pairing.disconnect({ topic: i });
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((i) => pg(i, r))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (r) => {
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
      await this.client.core.relayer.unsubscribe(r), this.client.session.delete(r, ct("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(n.publicKey) && await this.client.core.crypto.deleteKeyPair(n.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), i || this.client.core.expirer.del(r);
    }, this.deleteProposal = async (r, i) => {
      await Promise.all([this.client.proposal.delete(r, ct("USER_DISCONNECTED")), i ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, i, n = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, i), n ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.setExpiry = async (r, i) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: i }), this.client.core.expirer.set(r, i);
    }, this.setProposal = async (r, i) => {
      await this.client.proposal.set(r, i), this.client.core.expirer.set(r, i.expiry);
    }, this.setPendingSessionRequest = async (r) => {
      const i = mi.wc_sessionRequest.req.ttl, { id: n, topic: s, params: u } = r;
      await this.client.pendingRequest.set(n, { id: n, topic: s, params: u }), i && this.client.core.expirer.set(n, Ht(i));
    }, this.sendRequest = async (r, i, n, s, u) => {
      const a = gn(i, n);
      if (Us() && B1.includes(i)) {
        const d = Hr(JSON.stringify(a));
        await this.client.core.verify.register({ attestationId: d });
      }
      const l = await this.client.core.crypto.encode(r, a), f = mi[i].req;
      return s && (f.ttl = s), u && (f.id = u), this.client.core.history.set(r, a), this.client.core.relayer.publish(r, l, f), a.id;
    }, this.sendResult = async (r, i, n) => {
      const s = Bs(r, n), u = await this.client.core.crypto.encode(i, s), a = await this.client.core.history.get(i, r), l = mi[a.request.method].res;
      this.client.core.relayer.publish(i, u, l), await this.client.core.history.resolve(s);
    }, this.sendError = async (r, i, n) => {
      const s = zs(r, n), u = await this.client.core.crypto.encode(i, s), a = await this.client.core.history.get(i, r), l = mi[a.request.method].res;
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
        this.isValidConnect(Vt({}, i.params));
        const u = Ht(te.FIVE_MINUTES), a = Vt({ id: s, pairingTopic: r, expiry: u }, n);
        await this.setProposal(s, a);
        const l = Hr(JSON.stringify(i)), f = await this.getVerifyContext(l, a.proposer.metadata);
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
        const d = await this.client.core.relayer.subscribe(f);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: d }), await this.client.core.pairing.activate({ topic: r });
      } else
        Gt(i) && (await this.client.proposal.delete(n, ct("USER_DISCONNECTED")), this.events.emit(nt("session_connect"), { error: i.error }));
    }, this.onSessionSettleRequest = async (r, i) => {
      const { id: n, params: s } = i;
      try {
        this.isValidSessionSettleRequest(s);
        const { relay: u, controller: a, expiry: l, namespaces: f, requiredNamespaces: d, optionalNamespaces: b, sessionProperties: _, pairingTopic: m } = i.params, D = Vt({ topic: r, relay: u, expiry: l, namespaces: f, acknowledged: !0, pairingTopic: m, requiredNamespaces: d, optionalNamespaces: b, controller: a.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: a.publicKey, metadata: a.metadata } }, _ && { sessionProperties: _ });
        await this.sendResult(i.id, r, !0), this.events.emit(nt("session_connect"), { session: D }), this.cleanupDuplicatePairings(D);
      } catch (u) {
        await this.sendError(n, r, u), this.client.logger.error(u);
      }
    }, this.onSessionSettleResponse = async (r, i) => {
      const { id: n } = i;
      ur(i) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(nt("session_approve", n), {})) : Gt(i) && (await this.client.session.delete(r, ct("USER_DISCONNECTED")), this.events.emit(nt("session_approve", n), { error: i.error }));
    }, this.onSessionUpdateRequest = async (r, i) => {
      const { params: n, id: s } = i;
      try {
        this.isValidUpdate(Vt({ topic: r }, n)), await this.client.session.update(r, { namespaces: n.namespaces }), await this.sendResult(s, r, !0), this.client.events.emit("session_update", { id: s, topic: r, params: n });
      } catch (u) {
        await this.sendError(s, r, u), this.client.logger.error(u);
      }
    }, this.onSessionUpdateResponse = (r, i) => {
      const { id: n } = i;
      ur(i) ? this.events.emit(nt("session_update", n), {}) : Gt(i) && this.events.emit(nt("session_update", n), { error: i.error });
    }, this.onSessionExtendRequest = async (r, i) => {
      const { id: n } = i;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, Ht(Ki)), await this.sendResult(n, r, !0), this.client.events.emit("session_extend", { id: n, topic: r });
      } catch (s) {
        await this.sendError(n, r, s), this.client.logger.error(s);
      }
    }, this.onSessionExtendResponse = (r, i) => {
      const { id: n } = i;
      ur(i) ? this.events.emit(nt("session_extend", n), {}) : Gt(i) && this.events.emit(nt("session_extend", n), { error: i.error });
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
        ur(i) ? this.events.emit(nt("session_ping", n), {}) : Gt(i) && this.events.emit(nt("session_ping", n), { error: i.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (r, i) => {
      const { id: n } = i;
      try {
        this.isValidDisconnect({ topic: r, reason: i.params }), await Promise.all([new Promise((s) => {
          this.client.core.relayer.once(Je.publish, async () => {
            s(await this.deleteSession(r));
          });
        }), this.sendResult(n, r, !0)]), this.client.events.emit("session_delete", { id: n, topic: r });
      } catch (s) {
        this.client.logger.error(s);
      }
    }, this.onSessionRequest = async (r, i) => {
      const { id: n, params: s } = i;
      try {
        this.isValidRequest(Vt({ topic: r }, s)), await this.setPendingSessionRequest({ id: n, topic: r, params: s });
        const u = Hr(JSON.stringify(i)), a = this.client.session.get(r), l = await this.getVerifyContext(u, a.peer.metadata);
        this.client.events.emit("session_request", { id: n, topic: r, params: s, verifyContext: l });
      } catch (u) {
        await this.sendError(n, r, u), this.client.logger.error(u);
      }
    }, this.onSessionRequestResponse = (r, i) => {
      const { id: n } = i;
      ur(i) ? this.events.emit(nt("session_request", n), { result: i.result }) : Gt(i) && this.events.emit(nt("session_request", n), { error: i.error });
    }, this.onSessionEventRequest = async (r, i) => {
      const { id: n, params: s } = i;
      try {
        this.isValidEmit(Vt({ topic: r }, s)), this.client.events.emit("session_event", { id: n, topic: r, params: s });
      } catch (u) {
        await this.sendError(n, r, u), this.client.logger.error(u);
      }
    }, this.isValidConnect = async (r) => {
      if (!At(r)) {
        const { message: l } = X("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(l);
      }
      const { pairingTopic: i, requiredNamespaces: n, optionalNamespaces: s, sessionProperties: u, relays: a } = r;
      if (Dt(i) || await this.isValidPairingTopic(i), !xg(a, !0)) {
        const { message: l } = X("MISSING_OR_INVALID", `connect() relays: ${a}`);
        throw new Error(l);
      }
      !Dt(n) && Si(n) !== 0 && this.validateNamespaces(n, "requiredNamespaces"), !Dt(s) && Si(s) !== 0 && this.validateNamespaces(s, "optionalNamespaces"), Dt(u) || this.validateSessionProps(u, "sessionProperties");
    }, this.validateNamespaces = (r, i) => {
      const n = Og(r, "connect()", i);
      if (n)
        throw new Error(n.message);
    }, this.isValidApprove = async (r) => {
      if (!At(r))
        throw new Error(X("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: i, namespaces: n, relayProtocol: s, sessionProperties: u } = r;
      await this.isValidProposalId(i);
      const a = this.client.proposal.get(i), l = Gi(n, "approve()");
      if (l)
        throw new Error(l.message);
      const f = ya(a.requiredNamespaces, n, "approve()");
      if (f)
        throw new Error(f.message);
      if (!ut(s, !0)) {
        const { message: d } = X("MISSING_OR_INVALID", `approve() relayProtocol: ${s}`);
        throw new Error(d);
      }
      Dt(u) || this.validateSessionProps(u, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!At(r)) {
        const { message: s } = X("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(s);
      }
      const { id: i, reason: n } = r;
      if (await this.isValidProposalId(i), !Ag(n)) {
        const { message: s } = X("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(n)}`);
        throw new Error(s);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!At(r)) {
        const { message: f } = X("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(f);
      }
      const { relay: i, controller: n, namespaces: s, expiry: u } = r;
      if (!uu(i)) {
        const { message: f } = X("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(f);
      }
      const a = mg(n, "onSessionSettleRequest()");
      if (a)
        throw new Error(a.message);
      const l = Gi(s, "onSessionSettleRequest()");
      if (l)
        throw new Error(l.message);
      if (yr(u)) {
        const { message: f } = X("EXPIRED", "onSessionSettleRequest()");
        throw new Error(f);
      }
    }, this.isValidUpdate = async (r) => {
      if (!At(r)) {
        const { message: l } = X("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(l);
      }
      const { topic: i, namespaces: n } = r;
      await this.isValidSessionTopic(i);
      const s = this.client.session.get(i), u = Gi(n, "update()");
      if (u)
        throw new Error(u.message);
      const a = ya(s.requiredNamespaces, n, "update()");
      if (a)
        throw new Error(a.message);
    }, this.isValidExtend = async (r) => {
      if (!At(r)) {
        const { message: n } = X("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(n);
      }
      const { topic: i } = r;
      await this.isValidSessionTopic(i);
    }, this.isValidRequest = async (r) => {
      if (!At(r)) {
        const { message: l } = X("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(l);
      }
      const { topic: i, request: n, chainId: s, expiry: u } = r;
      await this.isValidSessionTopic(i);
      const { namespaces: a } = this.client.session.get(i);
      if (!ga(a, s)) {
        const { message: l } = X("MISSING_OR_INVALID", `request() chainId: ${s}`);
        throw new Error(l);
      }
      if (!Cg(n)) {
        const { message: l } = X("MISSING_OR_INVALID", `request() ${JSON.stringify(n)}`);
        throw new Error(l);
      }
      if (!Pg(a, s, n.method)) {
        const { message: l } = X("MISSING_OR_INVALID", `request() method: ${n.method}`);
        throw new Error(l);
      }
      if (u && !Fg(u, Fn)) {
        const { message: l } = X("MISSING_OR_INVALID", `request() expiry: ${u}. Expiry must be a number (in seconds) between ${Fn.min} and ${Fn.max}`);
        throw new Error(l);
      }
    }, this.isValidRespond = async (r) => {
      if (!At(r)) {
        const { message: s } = X("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(s);
      }
      const { topic: i, response: n } = r;
      if (await this.isValidSessionTopic(i), !Rg(n)) {
        const { message: s } = X("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(n)}`);
        throw new Error(s);
      }
    }, this.isValidPing = async (r) => {
      if (!At(r)) {
        const { message: n } = X("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(n);
      }
      const { topic: i } = r;
      await this.isValidSessionOrPairingTopic(i);
    }, this.isValidEmit = async (r) => {
      if (!At(r)) {
        const { message: a } = X("MISSING_OR_INVALID", `emit() params: ${r}`);
        throw new Error(a);
      }
      const { topic: i, event: n, chainId: s } = r;
      await this.isValidSessionTopic(i);
      const { namespaces: u } = this.client.session.get(i);
      if (!ga(u, s)) {
        const { message: a } = X("MISSING_OR_INVALID", `emit() chainId: ${s}`);
        throw new Error(a);
      }
      if (!Tg(n)) {
        const { message: a } = X("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(n)}`);
        throw new Error(a);
      }
      if (!Ng(u, s, n.name)) {
        const { message: a } = X("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(n)}`);
        throw new Error(a);
      }
    }, this.isValidDisconnect = async (r) => {
      if (!At(r)) {
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
        if (!ut(n, !1)) {
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
    this.client.core.relayer.on(Je.message, async (t) => {
      const { topic: r, message: i } = t;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(i)))
        return;
      const n = await this.client.core.crypto.decode(r, i);
      Vs(n) ? (this.client.core.history.set(r, n), this.onRelayEventRequest({ topic: r, payload: n })) : yn(n) ? (await this.client.core.history.resolve(n), await this.onRelayEventResponse({ topic: r, payload: n }), this.client.core.history.delete(r, n.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: n });
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(qt.expired, async (t) => {
      const { topic: r, id: i } = au(t.target);
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
    if (yr(this.client.core.pairing.pairings.get(t).expiry)) {
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
    else if (ut(t, !1)) {
      const { message: r } = X("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${t}`);
      throw new Error(r);
    } else {
      const { message: r } = X("MISSING_OR_INVALID", `session or pairing topic should be a string: ${t}`);
      throw new Error(r);
    }
  }
  async isValidProposalId(t) {
    if (!Ig(t)) {
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
class H1 extends vn {
  constructor(t, r) {
    super(t, r, U1, Ks), this.core = t, this.logger = r;
  }
}
class G1 extends vn {
  constructor(t, r) {
    super(t, r, $1, Ks), this.core = t, this.logger = r;
  }
}
class Y1 extends vn {
  constructor(t, r) {
    super(t, r, j1, Ks, (i) => i.id), this.core = t, this.logger = r;
  }
}
let J1 = class Nu extends Gf {
  constructor(t) {
    super(t), this.protocol = Ru, this.version = Tu, this.name = Un.name, this.events = new Xt.EventEmitter(), this.on = (i, n) => this.events.on(i, n), this.once = (i, n) => this.events.once(i, n), this.off = (i, n) => this.events.off(i, n), this.removeListener = (i, n) => this.events.removeListener(i, n), this.removeAllListeners = (i) => this.events.removeAllListeners(i), this.connect = async (i) => {
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
    }, this.name = (t == null ? void 0 : t.name) || Un.name, this.metadata = (t == null ? void 0 : t.metadata) || Kp();
    const r = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : Re.pino(Re.getDefaultLoggerOptions({ level: (t == null ? void 0 : t.logger) || Un.logger }));
    this.core = (t == null ? void 0 : t.core) || new N1(t), this.logger = Re.generateChildLogger(r, this.name), this.session = new G1(this.core, this.logger), this.proposal = new H1(this.core, this.logger), this.pendingRequest = new Y1(this.core, this.logger), this.engine = new k1(this);
  }
  static async init(t) {
    const r = new Nu(t);
    return await r.initialize(), r;
  }
  get context() {
    return Re.getLoggerContext(this.logger);
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
var X1 = Object.defineProperty, Z1 = Object.defineProperties, Q1 = Object.getOwnPropertyDescriptors, Wa = Object.getOwnPropertySymbols, eb = Object.prototype.hasOwnProperty, tb = Object.prototype.propertyIsEnumerable, ka = (e, t, r) => t in e ? X1(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[t] = r, rb = (e, t) => {
  for (var r in t || (t = {}))
    eb.call(t, r) && ka(e, r, t[r]);
  if (Wa)
    for (var r of Wa(t))
      tb.call(t, r) && ka(e, r, t[r]);
  return e;
}, ib = (e, t) => Z1(e, Q1(t)), Ws = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
}, st = (e, t, r) => (Ws(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Cr = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, rn = (e, t, r, i) => (Ws(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r), mt = (e, t, r) => (Ws(e, t, "access private method"), r), Tr, Wr, _i, Ct, hs, Lu, _t, Et, ds, Ha;
let nb = class {
  constructor(t) {
    Cr(this, hs), Cr(this, _t), Cr(this, ds), Cr(this, Tr, void 0), Cr(this, Wr, void 0), Cr(this, _i, void 0), Cr(this, Ct, void 0), rn(this, Tr, t), rn(this, Wr, mt(this, hs, Lu).call(this)), mt(this, _t, Et).call(this);
  }
  async connect(t) {
    const {
      requiredNamespaces: r,
      optionalNamespaces: i
    } = t;
    return new Promise(async (n, s) => {
      await mt(this, _t, Et).call(this);
      const u = st(this, Wr).subscribeModal((f) => {
        f.open || (u(), s(new Error("Modal closed")));
      }), {
        uri: a,
        approval: l
      } = await st(this, Ct).connect(t);
      if (a) {
        const f = /* @__PURE__ */ new Set();
        r && Object.values(r).forEach(({
          chains: d
        }) => {
          d && d.forEach((b) => f.add(b));
        }), i && Object.values(i).forEach(({
          chains: d
        }) => {
          d && d.forEach((b) => f.add(b));
        }), await st(this, Wr).openModal({
          uri: a,
          chains: Array.from(f)
        });
      }
      try {
        const f = await l();
        n(f);
      } catch (f) {
        s(f);
      } finally {
        u(), st(this, Wr).closeModal();
      }
    });
  }
  async disconnect(t) {
    await mt(this, _t, Et).call(this), await st(this, Ct).disconnect(t);
  }
  async request(t) {
    return await mt(this, _t, Et).call(this), await st(this, Ct).request(t);
  }
  async getSessions() {
    return await mt(this, _t, Et).call(this), st(this, Ct).session.getAll();
  }
  async getSession() {
    return await mt(this, _t, Et).call(this), st(this, Ct).session.getAll().at(-1);
  }
  async onSessionEvent(t) {
    await mt(this, _t, Et).call(this), st(this, Ct).on("session_event", t);
  }
  async offSessionEvent(t) {
    await mt(this, _t, Et).call(this);
  }
  async onSessionUpdate(t) {
    await mt(this, _t, Et).call(this), st(this, Ct).on("session_update", t);
  }
  async offSessionUpdate(t) {
    await mt(this, _t, Et).call(this);
  }
  async onSessionDelete(t) {
    await mt(this, _t, Et).call(this), st(this, Ct).on("session_delete", t);
  }
  async offSessionDelete(t) {
    await mt(this, _t, Et).call(this);
  }
  async onSessionExpire(t) {
    await mt(this, _t, Et).call(this), st(this, Ct).on("session_expire", t);
  }
  async offSessionExpire(t) {
    await mt(this, _t, Et).call(this);
  }
};
Tr = /* @__PURE__ */ new WeakMap(), Wr = /* @__PURE__ */ new WeakMap(), _i = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakMap(), hs = /* @__PURE__ */ new WeakSet(), Lu = function() {
  const {
    modalOptions: e,
    projectId: t
  } = st(this, Tr);
  return new Bl(ib(rb({}, e), {
    projectId: t
  }));
}, _t = /* @__PURE__ */ new WeakSet(), Et = async function() {
  return st(this, Ct) ? !0 : (!st(this, _i) && typeof window < "u" && rn(this, _i, mt(this, ds, Ha).call(this)), st(this, _i));
}, ds = /* @__PURE__ */ new WeakSet(), Ha = async function() {
  rn(this, Ct, await J1.init({
    metadata: st(this, Tr).metadata,
    projectId: st(this, Tr).projectId,
    relayUrl: st(this, Tr).relayUrl
  }));
  const e = await st(this, Ct).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", e);
  } catch {
    console.info("Unable to set client id");
  }
};
function sb(e) {
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
const Uu = sb();
let wi;
function ob(e) {
  wi = new nb(e);
}
async function Jt() {
  return new Promise((e) => {
    if (wi)
      e(wi);
    else {
      const t = setInterval(() => {
        wi && (clearInterval(t), e(wi));
      }, 200);
    }
  });
}
function ab(e) {
  return xt(() => {
    ob(e);
  }, []), null;
}
const cb = ml(ab);
function Fu() {
  const [e, t] = Lt(void 0), [r, i] = Lt(void 0), [n, s] = Lt(!1);
  return {
    data: e,
    error: r,
    loading: n,
    setData: t,
    setError: i,
    setLoading: s
  };
}
function ub(e) {
  const {
    data: t,
    error: r,
    loading: i,
    setData: n,
    setError: s,
    setLoading: u
  } = Fu();
  async function a(l) {
    try {
      u(!0), s(void 0);
      const f = await (await Jt()).connect(l ?? e);
      return n(f), Uu.emit("session_change"), f;
    } catch (f) {
      throw s(f), f;
    } finally {
      u(!1);
    }
  }
  return {
    data: t,
    error: r,
    loading: i,
    connect: a
  };
}
function $u(e) {
  xt(() => (Jt().then((t) => {
    t.onSessionDelete(e);
  }), () => {
    Jt().then((t) => {
    });
  }), [e]);
}
function ks(e) {
  xt(() => (Jt().then((t) => {
    t.onSessionEvent(e);
  }), () => {
    Jt().then((t) => {
    });
  }), [e]);
}
function lb(e) {
  xt(() => (Jt().then((t) => {
    t.onSessionExpire(e);
  }), () => {
    Jt().then((t) => {
    });
  }), [e]);
}
function fb(e) {
  xt(() => (Jt().then((t) => {
    t.onSessionUpdate(e);
  }), () => {
    Jt().then((t) => {
    });
  }), [e]);
}
function ri(e) {
  const {
    data: t,
    error: r,
    loading: i,
    setData: n,
    setError: s,
    setLoading: u
  } = Fu();
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
  return {
    data: t,
    error: r,
    loading: i,
    request: a
  };
}
var hb = Object.defineProperty, db = Object.defineProperties, pb = Object.getOwnPropertyDescriptors, Ga = Object.getOwnPropertySymbols, gb = Object.prototype.hasOwnProperty, yb = Object.prototype.propertyIsEnumerable, Ya = (e, t, r) => t in e ? hb(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[t] = r, bb = (e, t) => {
  for (var r in t || (t = {}))
    gb.call(t, r) && Ya(e, r, t[r]);
  if (Ga)
    for (var r of Ga(t))
      yb.call(t, r) && Ya(e, r, t[r]);
  return e;
}, vb = (e, t) => db(e, pb(t));
function Mr() {
  const [e, t] = Lt(void 0);
  return $u((r) => {
    r.topic === (e == null ? void 0 : e.topic) && t(void 0);
  }), fb((r) => {
    if (e && r.topic === (e == null ? void 0 : e.topic)) {
      const {
        namespaces: i
      } = r.params, n = vb(bb({}, e), {
        namespaces: i
      });
      t(n);
    }
  }), lb((r) => {
    e && r.topic === (e == null ? void 0 : e.topic) && t(void 0);
  }), xt(() => {
    async function r() {
      const i = await (await Jt()).getSession();
      t(i);
    }
    return r(), Uu.on("session_change", r), () => {
    };
  }, []), e;
}
const mb = [
  // aztec methods
  "aztec_connect",
  "aztec_disconnect",
  "aztec_getAccountPublicKey",
  "aztec_getSpendingPublicKey",
  "aztec_requestProofs"
], Mu = ["aztec:1337"], ju = [
  // aleo methods
  "aleo_connect",
  "aleo_disconnect",
  "aleo_getSelectedAccount",
  "aleo_transfer",
  "aleo_deployProgram",
  "aleo_getBalance",
  "aleo_executeProgram",
  "aleo_getRecords"
], Hs = ["aleo:1"], ps = ["chainChanged", "accountsChanged", "balanceChanged", "recordsChanged"], _b = "f0aaeffe71b636da453fce042d79d723", Ja = "https://walletconnect.puzzle.online/", wb = {
  standaloneChains: Mu.concat(Hs),
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
        universal: Ja
      }
    }
  ],
  desktopWallets: [
    {
      id: "puzzle",
      name: "Puzzle Wallet",
      links: {
        native: "",
        universal: Ja
      }
    }
  ],
  walletImages: {
    // Override manual wallet image
    puzzle: "https://i.imgur.com/p9tHaFC.png"
  }
}, pv = {
  requiredNamespaces: {
    aztec: {
      methods: mb,
      chains: Mu,
      events: ps
    },
    aleo: {
      methods: ju,
      chains: Hs,
      events: ps
    }
  }
}, gv = ({ dAppName: e, dAppDescription: t, dAppUrl: r, dAppIconURL: i }) => /* @__PURE__ */ Hn.jsx(
  cb,
  {
    projectId: _b,
    metadata: {
      name: e,
      description: t,
      url: r,
      icons: [
        i
      ]
    },
    modalOptions: { ...wb }
  }
), yv = ({ children: e }) => (Hb(), /* @__PURE__ */ Hn.jsx(Hn.Fragment, { children: e })), Xa = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), i = (l, f) => {
    const d = typeof l == "function" ? l(t) : l;
    if (!Object.is(d, t)) {
      const b = t;
      t = f ?? typeof d != "object" ? d : Object.assign({}, t, d), r.forEach((_) => _(t, b));
    }
  }, n = () => t, a = { setState: i, getState: n, subscribe: (l) => (r.add(l), () => r.delete(l)), destroy: () => {
    r.clear();
  } };
  return t = e(i, n, a), a;
}, Eb = (e) => e ? Xa(e) : Xa;
var gs = { exports: {} }, Mn = {}, Wi = { exports: {} }, jn = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Za;
function Sb() {
  if (Za)
    return jn;
  Za = 1;
  var e = Xr;
  function t(b, _) {
    return b === _ && (b !== 0 || 1 / b === 1 / _) || b !== b && _ !== _;
  }
  var r = typeof Object.is == "function" ? Object.is : t, i = e.useState, n = e.useEffect, s = e.useLayoutEffect, u = e.useDebugValue;
  function a(b, _) {
    var m = _(), D = i({ inst: { value: m, getSnapshot: _ } }), I = D[0].inst, U = D[1];
    return s(function() {
      I.value = m, I.getSnapshot = _, l(I) && U({ inst: I });
    }, [b, m, _]), n(function() {
      return l(I) && U({ inst: I }), b(function() {
        l(I) && U({ inst: I });
      });
    }, [b]), u(m), m;
  }
  function l(b) {
    var _ = b.getSnapshot;
    b = b.value;
    try {
      var m = _();
      return !r(b, m);
    } catch {
      return !0;
    }
  }
  function f(b, _) {
    return _();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? f : a;
  return jn.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, jn;
}
var Bn = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qa;
function Db() {
  return Qa || (Qa = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Xr, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(O) {
      {
        for (var g = arguments.length, w = new Array(g > 1 ? g - 1 : 0), h = 1; h < g; h++)
          w[h - 1] = arguments[h];
        i("error", O, w);
      }
    }
    function i(O, g, w) {
      {
        var h = t.ReactDebugCurrentFrame, o = h.getStackAddendum();
        o !== "" && (g += "%s", w = w.concat([o]));
        var p = w.map(function(R) {
          return String(R);
        });
        p.unshift("Warning: " + g), Function.prototype.apply.call(console[O], console, p);
      }
    }
    function n(O, g) {
      return O === g && (O !== 0 || 1 / O === 1 / g) || O !== O && g !== g;
    }
    var s = typeof Object.is == "function" ? Object.is : n, u = e.useState, a = e.useEffect, l = e.useLayoutEffect, f = e.useDebugValue, d = !1, b = !1;
    function _(O, g, w) {
      d || e.startTransition !== void 0 && (d = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var h = g();
      if (!b) {
        var o = g();
        s(h, o) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), b = !0);
      }
      var p = u({
        inst: {
          value: h,
          getSnapshot: g
        }
      }), R = p[0].inst, N = p[1];
      return l(function() {
        R.value = h, R.getSnapshot = g, m(R) && N({
          inst: R
        });
      }, [O, h, g]), a(function() {
        m(R) && N({
          inst: R
        });
        var F = function() {
          m(R) && N({
            inst: R
          });
        };
        return O(F);
      }, [O]), f(h), h;
    }
    function m(O) {
      var g = O.getSnapshot, w = O.value;
      try {
        var h = g();
        return !s(w, h);
      } catch {
        return !0;
      }
    }
    function D(O, g, w) {
      return g();
    }
    var I = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", U = !I, $ = U ? D : _, E = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : $;
    Bn.useSyncExternalStore = E, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Bn;
}
var ec;
function Bu() {
  return ec || (ec = 1, process.env.NODE_ENV === "production" ? Wi.exports = Sb() : Wi.exports = Db()), Wi.exports;
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
var tc;
function Ob() {
  if (tc)
    return Mn;
  tc = 1;
  var e = Xr, t = Bu();
  function r(f, d) {
    return f === d && (f !== 0 || 1 / f === 1 / d) || f !== f && d !== d;
  }
  var i = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, s = e.useRef, u = e.useEffect, a = e.useMemo, l = e.useDebugValue;
  return Mn.useSyncExternalStoreWithSelector = function(f, d, b, _, m) {
    var D = s(null);
    if (D.current === null) {
      var I = { hasValue: !1, value: null };
      D.current = I;
    } else
      I = D.current;
    D = a(function() {
      function $(h) {
        if (!E) {
          if (E = !0, O = h, h = _(h), m !== void 0 && I.hasValue) {
            var o = I.value;
            if (m(o, h))
              return g = o;
          }
          return g = h;
        }
        if (o = g, i(O, h))
          return o;
        var p = _(h);
        return m !== void 0 && m(o, p) ? o : (O = h, g = p);
      }
      var E = !1, O, g, w = b === void 0 ? null : b;
      return [function() {
        return $(d());
      }, w === null ? void 0 : function() {
        return $(w());
      }];
    }, [d, b, _, m]);
    var U = n(f, D[0], D[1]);
    return u(function() {
      I.hasValue = !0, I.value = U;
    }, [U]), l(U), U;
  }, Mn;
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
var rc;
function xb() {
  return rc || (rc = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Xr, t = Bu();
    function r(d, b) {
      return d === b && (d !== 0 || 1 / d === 1 / b) || d !== d && b !== b;
    }
    var i = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, s = e.useRef, u = e.useEffect, a = e.useMemo, l = e.useDebugValue;
    function f(d, b, _, m, D) {
      var I = s(null), U;
      I.current === null ? (U = {
        hasValue: !1,
        value: null
      }, I.current = U) : U = I.current;
      var $ = a(function() {
        var w = !1, h, o, p = function(K) {
          if (!w) {
            w = !0, h = K;
            var Y = m(K);
            if (D !== void 0 && U.hasValue) {
              var x = U.value;
              if (D(x, Y))
                return o = x, x;
            }
            return o = Y, Y;
          }
          var T = h, H = o;
          if (i(T, K))
            return H;
          var q = m(K);
          return D !== void 0 && D(H, q) ? H : (h = K, o = q, q);
        }, R = _ === void 0 ? null : _, N = function() {
          return p(b());
        }, F = R === null ? void 0 : function() {
          return p(R());
        };
        return [N, F];
      }, [b, _, m, D]), E = $[0], O = $[1], g = n(d, E, O);
      return u(function() {
        U.hasValue = !0, U.value = g;
      }, [g]), l(g), g;
    }
    zn.useSyncExternalStoreWithSelector = f, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), zn;
}
process.env.NODE_ENV === "production" ? gs.exports = Ob() : gs.exports = xb();
var Ib = gs.exports;
const Ab = /* @__PURE__ */ ws(Ib), { useSyncExternalStoreWithSelector: Cb } = Ab;
function Rb(e, t = e.getState, r) {
  const i = Cb(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    r
  );
  return _l(i), i;
}
const ic = (e) => {
  const t = typeof e == "function" ? Eb(e) : e, r = (i, n) => Rb(t, i, n);
  return Object.assign(r, t), r;
}, Tb = (e) => e ? ic(e) : ic;
function dt(e) {
  for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    r[i - 1] = arguments[i];
  if (process.env.NODE_ENV !== "production") {
    var n = jb[e], s = n ? typeof n == "function" ? n.apply(null, r) : n : "unknown error nr: " + e;
    throw Error("[Immer] " + s);
  }
  throw Error("[Immer] minified error nr: " + e + (r.length ? " " + r.map(function(u) {
    return "'" + u + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function Yr(e) {
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
    return n === Object || typeof n == "function" && Function.toString.call(n) === Bb;
  }(e) || Array.isArray(e) || !!e[fc] || !!(!((t = e.constructor) === null || t === void 0) && t[fc]) || Gs(e) || Ys(e));
}
function Ii(e, t, r) {
  r === void 0 && (r = !1), ii(e) === 0 ? (r ? Object.keys : eo)(e).forEach(function(i) {
    r && typeof i == "symbol" || t(i, e[i], e);
  }) : e.forEach(function(i, n) {
    return t(n, i, e);
  });
}
function ii(e) {
  var t = e[Ut];
  return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : Gs(e) ? 2 : Ys(e) ? 3 : 0;
}
function ys(e, t) {
  return ii(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Pb(e, t) {
  return ii(e) === 2 ? e.get(t) : e[t];
}
function zu(e, t, r) {
  var i = ii(e);
  i === 2 ? e.set(t, r) : i === 3 ? e.add(r) : e[t] = r;
}
function Nb(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function Gs(e) {
  return $b && e instanceof Map;
}
function Ys(e) {
  return Mb && e instanceof Set;
}
function Rr(e) {
  return e.o || e.t;
}
function Js(e) {
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  var t = zb(e);
  delete t[Ut];
  for (var r = eo(t), i = 0; i < r.length; i++) {
    var n = r[i], s = t[n];
    s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (t[n] = { configurable: !0, writable: !0, enumerable: s.enumerable, value: e[n] });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function Xs(e, t) {
  return t === void 0 && (t = !1), Zs(e) || Yr(e) || !Nr(e) || (ii(e) > 1 && (e.set = e.add = e.clear = e.delete = Lb), Object.freeze(e), t && Ii(e, function(r, i) {
    return Xs(i, !0);
  }, !0)), e;
}
function Lb() {
  dt(2);
}
function Zs(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function sr(e) {
  var t = Vb[e];
  return t || dt(18, e), t;
}
function nc() {
  return process.env.NODE_ENV === "production" || Jr || dt(0), Jr;
}
function Vn(e, t) {
  t && (sr("Patches"), e.u = [], e.s = [], e.v = t);
}
function nn(e) {
  bs(e), e.p.forEach(Ub), e.p = null;
}
function bs(e) {
  e === Jr && (Jr = e.l);
}
function sc(e) {
  return Jr = { p: [], l: Jr, h: e, m: !0, _: 0 };
}
function Ub(e) {
  var t = e[Ut];
  t.i === 0 || t.i === 1 ? t.j() : t.O = !0;
}
function qn(e, t) {
  t._ = t.p.length;
  var r = t.p[0], i = e !== void 0 && e !== r;
  return t.h.g || sr("ES5").S(t, e, i), i ? (r[Ut].P && (nn(t), dt(4)), Nr(e) && (e = sn(t, e), t.l || on(t, e)), t.u && sr("Patches").M(r[Ut].t, e, t.u, t.s)) : e = sn(t, r, []), nn(t), t.u && t.v(t.u, t.s), e !== Vu ? e : void 0;
}
function sn(e, t, r) {
  if (Zs(t))
    return t;
  var i = t[Ut];
  if (!i)
    return Ii(t, function(a, l) {
      return oc(e, i, t, a, l, r);
    }, !0), t;
  if (i.A !== e)
    return t;
  if (!i.P)
    return on(e, i.t, !0), i.t;
  if (!i.I) {
    i.I = !0, i.A._--;
    var n = i.i === 4 || i.i === 5 ? i.o = Js(i.k) : i.o, s = n, u = !1;
    i.i === 3 && (s = new Set(n), n.clear(), u = !0), Ii(s, function(a, l) {
      return oc(e, i, n, a, l, r, u);
    }), on(e, n, !1), r && e.u && sr("Patches").N(i, r, e.u, e.s);
  }
  return i.o;
}
function oc(e, t, r, i, n, s, u) {
  if (process.env.NODE_ENV !== "production" && n === r && dt(5), Yr(n)) {
    var a = sn(e, n, s && t && t.i !== 3 && !ys(t.R, i) ? s.concat(i) : void 0);
    if (zu(r, i, a), !Yr(a))
      return;
    e.m = !1;
  } else
    u && r.add(n);
  if (Nr(n) && !Zs(n)) {
    if (!e.h.D && e._ < 1)
      return;
    sn(e, n), t && t.A.l || on(e, n);
  }
}
function on(e, t, r) {
  r === void 0 && (r = !1), !e.l && e.h.D && e.m && Xs(t, r);
}
function Kn(e, t) {
  var r = e[Ut];
  return (r ? Rr(r) : e)[t];
}
function ac(e, t) {
  if (t in e)
    for (var r = Object.getPrototypeOf(e); r; ) {
      var i = Object.getOwnPropertyDescriptor(r, t);
      if (i)
        return i;
      r = Object.getPrototypeOf(r);
    }
}
function vs(e) {
  e.P || (e.P = !0, e.l && vs(e.l));
}
function Wn(e) {
  e.o || (e.o = Js(e.t));
}
function ms(e, t, r) {
  var i = Gs(t) ? sr("MapSet").F(t, r) : Ys(t) ? sr("MapSet").T(t, r) : e.g ? function(n, s) {
    var u = Array.isArray(n), a = { i: u ? 1 : 0, A: s ? s.A : nc(), P: !1, I: !1, R: {}, l: s, t: n, k: null, o: null, j: null, C: !1 }, l = a, f = _s;
    u && (l = [a], f = Ei);
    var d = Proxy.revocable(l, f), b = d.revoke, _ = d.proxy;
    return a.k = _, a.j = b, _;
  }(t, r) : sr("ES5").J(t, r);
  return (r ? r.A : nc()).p.push(i), i;
}
function Fb(e) {
  return Yr(e) || dt(22, e), function t(r) {
    if (!Nr(r))
      return r;
    var i, n = r[Ut], s = ii(r);
    if (n) {
      if (!n.P && (n.i < 4 || !sr("ES5").K(n)))
        return n.t;
      n.I = !0, i = cc(r, s), n.I = !1;
    } else
      i = cc(r, s);
    return Ii(i, function(u, a) {
      n && Pb(n.t, u) === a || zu(i, u, t(a));
    }), s === 3 ? new Set(i) : i;
  }(e);
}
function cc(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return Js(e);
}
var uc, Jr, Qs = typeof Symbol < "u" && typeof Symbol("x") == "symbol", $b = typeof Map < "u", Mb = typeof Set < "u", lc = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", Vu = Qs ? Symbol.for("immer-nothing") : ((uc = {})["immer-nothing"] = !0, uc), fc = Qs ? Symbol.for("immer-draftable") : "__$immer_draftable", Ut = Qs ? Symbol.for("immer-state") : "__$immer_state", jb = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(e) {
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
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" }, Bb = "" + Object.prototype.constructor, eo = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Object.getOwnPropertyNames, zb = Object.getOwnPropertyDescriptors || function(e) {
  var t = {};
  return eo(e).forEach(function(r) {
    t[r] = Object.getOwnPropertyDescriptor(e, r);
  }), t;
}, Vb = {}, _s = { get: function(e, t) {
  if (t === Ut)
    return e;
  var r = Rr(e);
  if (!ys(r, t))
    return function(n, s, u) {
      var a, l = ac(s, u);
      return l ? "value" in l ? l.value : (a = l.get) === null || a === void 0 ? void 0 : a.call(n.k) : void 0;
    }(e, r, t);
  var i = r[t];
  return e.I || !Nr(i) ? i : i === Kn(e.t, t) ? (Wn(e), e.o[t] = ms(e.A.h, i, e)) : i;
}, has: function(e, t) {
  return t in Rr(e);
}, ownKeys: function(e) {
  return Reflect.ownKeys(Rr(e));
}, set: function(e, t, r) {
  var i = ac(Rr(e), t);
  if (i != null && i.set)
    return i.set.call(e.k, r), !0;
  if (!e.P) {
    var n = Kn(Rr(e), t), s = n == null ? void 0 : n[Ut];
    if (s && s.t === r)
      return e.o[t] = r, e.R[t] = !1, !0;
    if (Nb(r, n) && (r !== void 0 || ys(e.t, t)))
      return !0;
    Wn(e), vs(e);
  }
  return e.o[t] === r && (r !== void 0 || t in e.o) || Number.isNaN(r) && Number.isNaN(e.o[t]) || (e.o[t] = r, e.R[t] = !0), !0;
}, deleteProperty: function(e, t) {
  return Kn(e.t, t) !== void 0 || t in e.t ? (e.R[t] = !1, Wn(e), vs(e)) : delete e.R[t], e.o && delete e.o[t], !0;
}, getOwnPropertyDescriptor: function(e, t) {
  var r = Rr(e), i = Reflect.getOwnPropertyDescriptor(r, t);
  return i && { writable: !0, configurable: e.i !== 1 || t !== "length", enumerable: i.enumerable, value: r[t] };
}, defineProperty: function() {
  dt(11);
}, getPrototypeOf: function(e) {
  return Object.getPrototypeOf(e.t);
}, setPrototypeOf: function() {
  dt(12);
} }, Ei = {};
Ii(_s, function(e, t) {
  Ei[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
}), Ei.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && dt(13), Ei.set.call(this, e, t, void 0);
}, Ei.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && dt(14), _s.set.call(this, e[0], t, r, e[0]);
};
var qb = function() {
  function e(r) {
    var i = this;
    this.g = lc, this.D = !0, this.produce = function(n, s, u) {
      if (typeof n == "function" && typeof s != "function") {
        var a = s;
        s = n;
        var l = i;
        return function(I) {
          var U = this;
          I === void 0 && (I = a);
          for (var $ = arguments.length, E = Array($ > 1 ? $ - 1 : 0), O = 1; O < $; O++)
            E[O - 1] = arguments[O];
          return l.produce(I, function(g) {
            var w;
            return (w = s).call.apply(w, [U, g].concat(E));
          });
        };
      }
      var f;
      if (typeof s != "function" && dt(6), u !== void 0 && typeof u != "function" && dt(7), Nr(n)) {
        var d = sc(i), b = ms(i, n, void 0), _ = !0;
        try {
          f = s(b), _ = !1;
        } finally {
          _ ? nn(d) : bs(d);
        }
        return typeof Promise < "u" && f instanceof Promise ? f.then(function(I) {
          return Vn(d, u), qn(I, d);
        }, function(I) {
          throw nn(d), I;
        }) : (Vn(d, u), qn(f, d));
      }
      if (!n || typeof n != "object") {
        if ((f = s(n)) === void 0 && (f = n), f === Vu && (f = void 0), i.D && Xs(f, !0), u) {
          var m = [], D = [];
          sr("Patches").M(n, f, m, D), u(m, D);
        }
        return f;
      }
      dt(21, n);
    }, this.produceWithPatches = function(n, s) {
      if (typeof n == "function")
        return function(f) {
          for (var d = arguments.length, b = Array(d > 1 ? d - 1 : 0), _ = 1; _ < d; _++)
            b[_ - 1] = arguments[_];
          return i.produceWithPatches(f, function(m) {
            return n.apply(void 0, [m].concat(b));
          });
        };
      var u, a, l = i.produce(n, s, function(f, d) {
        u = f, a = d;
      });
      return typeof Promise < "u" && l instanceof Promise ? l.then(function(f) {
        return [f, u, a];
      }) : [l, u, a];
    }, typeof (r == null ? void 0 : r.useProxies) == "boolean" && this.setUseProxies(r.useProxies), typeof (r == null ? void 0 : r.autoFreeze) == "boolean" && this.setAutoFreeze(r.autoFreeze);
  }
  var t = e.prototype;
  return t.createDraft = function(r) {
    Nr(r) || dt(8), Yr(r) && (r = Fb(r));
    var i = sc(this), n = ms(this, r, void 0);
    return n[Ut].C = !0, bs(i), n;
  }, t.finishDraft = function(r, i) {
    var n = r && r[Ut];
    process.env.NODE_ENV !== "production" && (n && n.C || dt(9), n.I && dt(10));
    var s = n.A;
    return Vn(s, i), qn(void 0, s);
  }, t.setAutoFreeze = function(r) {
    this.D = r;
  }, t.setUseProxies = function(r) {
    r && !lc && dt(20), this.g = r;
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
    return Yr(r) ? u(r, i) : this.produce(r, function(a) {
      return u(a, i);
    });
  }, e;
}(), Ft = new qb(), Kb = Ft.produce;
Ft.produceWithPatches.bind(Ft);
Ft.setAutoFreeze.bind(Ft);
Ft.setUseProxies.bind(Ft);
Ft.applyPatches.bind(Ft);
Ft.createDraft.bind(Ft);
Ft.finishDraft.bind(Ft);
const Wb = (e) => (t, r, i) => (i.setState = (n, s, ...u) => {
  const a = typeof n == "function" ? Kb(n) : n;
  return t(a, s, ...u);
}, e(i.setState, r, i)), kb = Wb, jr = Tb()(
  kb((e, t) => ({
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
), bv = () => {
  const e = Mr(), [t, r, i, n] = jr((b) => [
    b.account,
    b.accounts,
    b.chainId,
    b.setAccount
  ]), [s, u] = Lt(void 0), { request: a, data: l, error: f, loading: d } = ri({
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
  return ks(({ params: b }) => {
    if (b.event.name === "accountsChanged") {
      const m = b.event.data[0], D = b.chainId.split(":")[0], I = b.chainId.split(":")[1];
      n({
        network: D,
        chainId: I,
        address: m
      }), u(void 0);
    }
  }), xt(() => {
    e && a();
  }, [e]), xt(() => {
    if (f)
      u(f.message);
    else if (l) {
      const b = l && l.type === "GET_SELECTED_ACCOUNT_RES" ? l : void 0, _ = l && l.type === "GET_SELECTED_ACCOUNT_RES" ? l.data.error : void 0, m = b == null ? void 0 : b.data.account;
      m && n(m), u(_);
    }
  }, [l, f]), {
    account: t,
    accounts: r,
    isConnected: !!t,
    session: e,
    error: s,
    loading: d
  };
}, vv = () => {
  const e = Mr(), [t] = jr((_) => [
    _.chainId
  ]), [r, i] = Lt(0), [n, s] = Lt(!1), [u, a] = Lt(void 0), { request: l, data: f, error: d, loading: b } = ri({
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
  return ks(({ id: _, params: m, topic: D }) => {
    if (m.event.name === "balanceChanged") {
      const U = Number(m.event.data);
      i(U), a(void 0), s(!1);
    }
  }), xt(() => {
    e && (l(), s(!0));
  }, [e]), xt(() => {
    if (d)
      i(0), a(d.message), s(!1);
    else if (f) {
      const _ = f && f.type === "GET_BALANCE_RES" ? f : void 0, m = f && f.type === "GET_BALANCE_REJ" ? f.data.error : void 0, D = (_ == null ? void 0 : _.data.balance) ?? 0;
      i(D), a(m), s(!1);
    }
  }, [f, d]), { loading: n, balance: r, error: u };
}, mv = () => {
  const [e, t] = Lt(void 0), { connect: r, data: i, error: n, loading: s } = ub({
    requiredNamespaces: {
      aleo: {
        methods: ju,
        chains: Hs,
        events: ps
      }
    }
  }), u = async () => {
    try {
      await r(), t(void 0);
    } catch {
    }
  };
  return xt(() => {
    n && t(n.message);
  }, [n]), { connect: u, data: i, error: e, loading: s };
}, _v = (e) => {
  const t = Mr(), [r] = jr((b) => [
    b.chainId
  ]), { request: i, data: n, error: s, loading: u } = ri({
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
}, wv = (e) => {
  const t = Mr();
  jr((D) => [
    D.chainId
  ]);
  const { request: r, data: i, error: n, loading: s } = ri({
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
  }), u = n ? n.message : i && i.type === "EXECUTE_REJ" ? i.data.error : void 0, a = i && i.type === "EXECUTE_RES" ? i : void 0, l = a == null ? void 0 : a.data.transactionId, f = a == null ? void 0 : a.data.outputPrivate, d = a == null ? void 0 : a.data.outputPublic, b = a == null ? void 0 : a.data.outputRecords, _ = a == null ? void 0 : a.data.outputConstant;
  return { execute: () => {
    e && (r(), console.log("sent execute request"));
  }, transactionId: l, outputConstant: _, outputPrivate: f, outputRecords: b, outputPublic: d, error: u, loading: s };
}, Ev = () => {
  const [e, t] = Lt({
    loading: !0
  });
  return xt(() => {
  }, []), { ...e };
}, Sv = (e) => {
  const t = Mr(), [r] = jr((m) => [
    m.chainId
  ]), [i, n] = Lt([]), [s, u] = Lt(void 0), [a, l] = Lt(!1), { request: f, data: d, error: b, loading: _ } = ri({
    topic: t == null ? void 0 : t.topic,
    chainId: r ?? "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "aleo_getRecords",
      params: {
        type: "GET_RECORDS",
        filter: e
      }
    }
  });
  return ks(({ id: m, params: D, topic: I }) => {
    if (D.event.name === "recordsChanged") {
      const $ = D.event.data;
      n($), u(void 0), l(!1);
    }
  }), xt(() => {
    t && (f(), l(!0));
  }, [t]), xt(() => {
    if (b)
      n([]), u(b.message), l(!1);
    else if (d) {
      const m = d, D = m.type === "GET_RECORDS_REJ" ? m.data.error : void 0, I = m.type === "GET_RECORDS_RES" ? m.data.records : [];
      n(I), u(D), l(!1);
    }
  }, [d, b]), { records: i, error: s, loading: a };
}, Dv = (e) => {
  const t = Mr(), [r] = jr((a) => [
    a.chainId
  ]), { request: i, data: n, error: s, loading: u } = ri({
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
}, Hb = () => {
  const e = Mr(), [t, r] = jr((i) => [
    i.setAccount,
    i.setAccounts
  ]);
  xt(() => {
    if (e) {
      window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
      const i = e.namespaces.aleo.accounts.map((n) => {
        const s = n.split(":");
        return {
          network: s[0],
          chainId: s[1],
          address: s[2]
        };
      });
      r(i ?? []), i[0] && t(i[0]);
    }
  }, [e]), $u(({ id: i, topic: n }) => {
    console.log("session deleted! topic: ", n);
  });
};
function Gb(e, t, r = t) {
  const i = e < BigInt(0), n = e.toString().slice(i ? 1 : 0).padStart(t + 1, "0"), s = n.slice(0, n.length - t), u = n.slice(-t);
  let a = u.length - 1;
  for (; u[a] === "0"; )
    --a;
  const l = u.slice(0, a + 1);
  return (i ? "-" : "") + (l ? `${s}.${l.slice(0, r)}` : s);
}
function Ov(e, t) {
  const [r, i] = e.split("."), n = (i || "").replace(/0+$/, "").slice(0, t), s = BigInt(10) ** BigInt(t), u = s / BigInt(10) ** BigInt(n.length || 0);
  return BigInt(n || 0) * u + BigInt(r || 0) * s;
}
var Yb = /* @__PURE__ */ ((e) => (e[e.ETH = 0] = "ETH", e[e.DAI = 1] = "DAI", e))(Yb || {});
function Jb(e) {
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
class xv {
  constructor(t, r) {
    this.getDisplayValue = () => Gb(this.value, 18) + " " + this.symbol, this.type = t;
    const { id: i, symbol: n, coinMarketCapID: s } = Jb(t);
    this.id = i, this.symbol = n, this.coinMarketCapID = s, this.value = r;
  }
}
const Iv = "0x6b175474e89094c44da98b954eedeac495271d0f", Av = [
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
  Yb as A,
  Av as B,
  Iv as D,
  wn as F,
  wo as G,
  hc as N,
  gv as P,
  Qb as Q,
  Rl as T,
  yv as a,
  vv as b,
  mv as c,
  Yt as d,
  _v as e,
  Gr as f,
  wv as g,
  Ev as h,
  St as i,
  Sv as j,
  Dv as k,
  Hb as l,
  Gb as m,
  xv as n,
  Mu as o,
  ju as p,
  Zb as q,
  Hs as r,
  ps as s,
  Ov as t,
  bv as u,
  _b as v,
  mb as w,
  Ja as x,
  wb as y,
  pv as z
};
