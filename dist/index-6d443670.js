import Qr, { memo as Hl, useEffect as gt, useState as $t, useDebugValue as kl } from "react";
var Nt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Vs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Lr(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var Zi = { exports: {} }, an = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var No;
function Gl() {
  if (No)
    return an;
  No = 1;
  var e = Qr, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(a, f, l) {
    var h, y = {}, g = null, v = null;
    l !== void 0 && (g = "" + l), f.key !== void 0 && (g = "" + f.key), f.ref !== void 0 && (v = f.ref);
    for (h in f)
      n.call(f, h) && !s.hasOwnProperty(h) && (y[h] = f[h]);
    if (a && a.defaultProps)
      for (h in f = a.defaultProps, f)
        y[h] === void 0 && (y[h] = f[h]);
    return { $$typeof: t, type: a, key: g, ref: v, props: y, _owner: i.current };
  }
  return an.Fragment = r, an.jsx = o, an.jsxs = o, an;
}
var cn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $o;
function Yl() {
  return $o || ($o = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Qr, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), w = Symbol.iterator, I = "@@iterator";
    function A(m) {
      if (m === null || typeof m != "object")
        return null;
      var M = w && m[w] || m[I];
      return typeof M == "function" ? M : null;
    }
    var U = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(m) {
      {
        for (var M = arguments.length, J = new Array(M > 1 ? M - 1 : 0), se = 1; se < M; se++)
          J[se - 1] = arguments[se];
        x("error", m, J);
      }
    }
    function x(m, M, J) {
      {
        var se = U.ReactDebugCurrentFrame, Te = se.getStackAddendum();
        Te !== "" && (M += "%s", J = J.concat([Te]));
        var Se = J.map(function(Oe) {
          return String(Oe);
        });
        Se.unshift("Warning: " + M), Function.prototype.apply.call(console[m], console, Se);
      }
    }
    var _ = !1, S = !1, d = !1, c = !1, p = !1, $;
    $ = Symbol.for("react.module.reference");
    function L(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === n || m === s || p || m === i || m === l || m === h || c || m === v || _ || S || d || typeof m == "object" && m !== null && (m.$$typeof === g || m.$$typeof === y || m.$$typeof === o || m.$$typeof === a || m.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      m.$$typeof === $ || m.getModuleId !== void 0));
    }
    function j(m, M, J) {
      var se = m.displayName;
      if (se)
        return se;
      var Te = M.displayName || M.name || "";
      return Te !== "" ? J + "(" + Te + ")" : J;
    }
    function F(m) {
      return m.displayName || "Context";
    }
    function q(m) {
      if (m == null)
        return null;
      if (typeof m.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
        return m.displayName || m.name || null;
      if (typeof m == "string")
        return m;
      switch (m) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case l:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case a:
            var M = m;
            return F(M) + ".Consumer";
          case o:
            var J = m;
            return F(J._context) + ".Provider";
          case f:
            return j(m, m.render, "ForwardRef");
          case y:
            var se = m.displayName || null;
            return se !== null ? se : q(m.type) || "Memo";
          case g: {
            var Te = m, Se = Te._payload, Oe = Te._init;
            try {
              return q(Oe(Se));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, R = 0, G, V, z, W, B, H, oe;
    function k() {
    }
    k.__reactDisabledLog = !0;
    function ne() {
      {
        if (R === 0) {
          G = console.log, V = console.info, z = console.warn, W = console.error, B = console.group, H = console.groupCollapsed, oe = console.groupEnd;
          var m = {
            configurable: !0,
            enumerable: !0,
            value: k,
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
        R++;
      }
    }
    function Z() {
      {
        if (R--, R === 0) {
          var m = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, m, {
              value: G
            }),
            info: D({}, m, {
              value: V
            }),
            warn: D({}, m, {
              value: z
            }),
            error: D({}, m, {
              value: W
            }),
            group: D({}, m, {
              value: B
            }),
            groupCollapsed: D({}, m, {
              value: H
            }),
            groupEnd: D({}, m, {
              value: oe
            })
          });
        }
        R < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = U.ReactCurrentDispatcher, N;
    function C(m, M, J) {
      {
        if (N === void 0)
          try {
            throw Error();
          } catch (Te) {
            var se = Te.stack.trim().match(/\n( *(at )?)/);
            N = se && se[1] || "";
          }
        return `
` + N + m;
      }
    }
    var P = !1, u;
    {
      var O = typeof WeakMap == "function" ? WeakMap : Map;
      u = new O();
    }
    function Y(m, M) {
      if (!m || P)
        return "";
      {
        var J = u.get(m);
        if (J !== void 0)
          return J;
      }
      var se;
      P = !0;
      var Te = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Se;
      Se = re.current, re.current = null, ne();
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
            } catch (Kt) {
              se = Kt;
            }
            Reflect.construct(m, [], Oe);
          } else {
            try {
              Oe.call();
            } catch (Kt) {
              se = Kt;
            }
            m.call(Oe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Kt) {
            se = Kt;
          }
          m();
        }
      } catch (Kt) {
        if (Kt && se && typeof Kt.stack == "string") {
          for (var me = Kt.stack.split(`
`), ht = se.stack.split(`
`), Ke = me.length - 1, Ye = ht.length - 1; Ke >= 1 && Ye >= 0 && me[Ke] !== ht[Ye]; )
            Ye--;
          for (; Ke >= 1 && Ye >= 0; Ke--, Ye--)
            if (me[Ke] !== ht[Ye]) {
              if (Ke !== 1 || Ye !== 1)
                do
                  if (Ke--, Ye--, Ye < 0 || me[Ke] !== ht[Ye]) {
                    var it = `
` + me[Ke].replace(" at new ", " at ");
                    return m.displayName && it.includes("<anonymous>") && (it = it.replace("<anonymous>", m.displayName)), typeof m == "function" && u.set(m, it), it;
                  }
                while (Ke >= 1 && Ye >= 0);
              break;
            }
        }
      } finally {
        P = !1, re.current = Se, Z(), Error.prepareStackTrace = Te;
      }
      var lr = m ? m.displayName || m.name : "", Bn = lr ? C(lr) : "";
      return typeof m == "function" && u.set(m, Bn), Bn;
    }
    function Q(m, M, J) {
      return Y(m, !1);
    }
    function _e(m) {
      var M = m.prototype;
      return !!(M && M.isReactComponent);
    }
    function be(m, M, J) {
      if (m == null)
        return "";
      if (typeof m == "function")
        return Y(m, _e(m));
      if (typeof m == "string")
        return C(m);
      switch (m) {
        case l:
          return C("Suspense");
        case h:
          return C("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case f:
            return Q(m.render);
          case y:
            return be(m.type, M, J);
          case g: {
            var se = m, Te = se._payload, Se = se._init;
            try {
              return be(Se(Te), M, J);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, xe = {}, Be = U.ReactDebugCurrentFrame;
    function $e(m) {
      if (m) {
        var M = m._owner, J = be(m.type, m._source, M ? M.type : null);
        Be.setExtraStackFrame(J);
      } else
        Be.setExtraStackFrame(null);
    }
    function De(m, M, J, se, Te) {
      {
        var Se = Function.call.bind(he);
        for (var Oe in m)
          if (Se(m, Oe)) {
            var me = void 0;
            try {
              if (typeof m[Oe] != "function") {
                var ht = Error((se || "React class") + ": " + J + " type `" + Oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[Oe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ht.name = "Invariant Violation", ht;
              }
              me = m[Oe](M, Oe, se, J, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ke) {
              me = Ke;
            }
            me && !(me instanceof Error) && ($e(Te), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", se || "React class", J, Oe, typeof me), $e(null)), me instanceof Error && !(me.message in xe) && (xe[me.message] = !0, $e(Te), E("Failed %s type: %s", J, me.message), $e(null));
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
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ge(m)), ue(m);
    }
    var ie = U.ReactCurrentOwner, ye = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ve, ae, Ee;
    Ee = {};
    function Ie(m) {
      if (he.call(m, "ref")) {
        var M = Object.getOwnPropertyDescriptor(m, "ref").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return m.ref !== void 0;
    }
    function Ae(m) {
      if (he.call(m, "key")) {
        var M = Object.getOwnPropertyDescriptor(m, "key").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return m.key !== void 0;
    }
    function Ce(m, M) {
      if (typeof m.ref == "string" && ie.current && M && ie.current.stateNode !== M) {
        var J = q(ie.current.type);
        Ee[J] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', q(ie.current.type), m.ref), Ee[J] = !0);
      }
    }
    function Pe(m, M) {
      {
        var J = function() {
          ve || (ve = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        J.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: J,
          configurable: !0
        });
      }
    }
    function At(m, M) {
      {
        var J = function() {
          ae || (ae = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        J.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: J,
          configurable: !0
        });
      }
    }
    var Ut = function(m, M, J, se, Te, Se, Oe) {
      var me = {
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
      return me._store = {}, Object.defineProperty(me._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(me, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: se
      }), Object.defineProperty(me, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Te
      }), Object.freeze && (Object.freeze(me.props), Object.freeze(me)), me;
    };
    function Xt(m, M, J, se, Te) {
      {
        var Se, Oe = {}, me = null, ht = null;
        J !== void 0 && (ce(J), me = "" + J), Ae(M) && (ce(M.key), me = "" + M.key), Ie(M) && (ht = M.ref, Ce(M, Te));
        for (Se in M)
          he.call(M, Se) && !ye.hasOwnProperty(Se) && (Oe[Se] = M[Se]);
        if (m && m.defaultProps) {
          var Ke = m.defaultProps;
          for (Se in Ke)
            Oe[Se] === void 0 && (Oe[Se] = Ke[Se]);
        }
        if (me || ht) {
          var Ye = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          me && Pe(Oe, Ye), ht && At(Oe, Ye);
        }
        return Ut(m, me, ht, Te, se, ie.current, Oe);
      }
    }
    var ft = U.ReactCurrentOwner, Qt = U.ReactDebugCurrentFrame;
    function Mt(m) {
      if (m) {
        var M = m._owner, J = be(m.type, m._source, M ? M.type : null);
        Qt.setExtraStackFrame(J);
      } else
        Qt.setExtraStackFrame(null);
    }
    var ur;
    ur = !1;
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
    function He(m) {
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
    function ke(m) {
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
    function Ue(m, M) {
      {
        if (!m._store || m._store.validated || m.key != null)
          return;
        m._store.validated = !0;
        var J = ke(M);
        if (Ve[J])
          return;
        Ve[J] = !0;
        var se = "";
        m && m._owner && m._owner !== ft.current && (se = " It was passed a child from " + q(m._owner.type) + "."), Mt(m), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', J, se), Mt(null);
      }
    }
    function Qe(m, M) {
      {
        if (typeof m != "object")
          return;
        if (de(m))
          for (var J = 0; J < m.length; J++) {
            var se = m[J];
            qe(se) && Ue(se, M);
          }
        else if (qe(m))
          m._store && (m._store.validated = !0);
        else if (m) {
          var Te = A(m);
          if (typeof Te == "function" && Te !== m.entries)
            for (var Se = Te.call(m), Oe; !(Oe = Se.next()).done; )
              qe(Oe.value) && Ue(Oe.value, M);
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
        else if (typeof M == "object" && (M.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        M.$$typeof === y))
          J = M.propTypes;
        else
          return;
        if (J) {
          var se = q(M);
          De(J, m.props, "prop", se, m);
        } else if (M.PropTypes !== void 0 && !ur) {
          ur = !0;
          var Te = q(M);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Te || "Unknown");
        }
        typeof M.getDefaultProps == "function" && !M.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function rt(m) {
      {
        for (var M = Object.keys(m.props), J = 0; J < M.length; J++) {
          var se = M[J];
          if (se !== "children" && se !== "key") {
            Mt(m), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", se), Mt(null);
            break;
          }
        }
        m.ref !== null && (Mt(m), E("Invalid attribute `ref` supplied to `React.Fragment`."), Mt(null));
      }
    }
    function Ze(m, M, J, se, Te, Se) {
      {
        var Oe = L(m);
        if (!Oe) {
          var me = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (me += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ht = He(Te);
          ht ? me += ht : me += Fe();
          var Ke;
          m === null ? Ke = "null" : de(m) ? Ke = "array" : m !== void 0 && m.$$typeof === t ? (Ke = "<" + (q(m.type) || "Unknown") + " />", me = " Did you accidentally export a JSX literal instead of a component?") : Ke = typeof m, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ke, me);
        }
        var Ye = Xt(m, M, J, Te, Se);
        if (Ye == null)
          return Ye;
        if (Oe) {
          var it = M.children;
          if (it !== void 0)
            if (se)
              if (de(it)) {
                for (var lr = 0; lr < it.length; lr++)
                  Qe(it[lr], m);
                Object.freeze && Object.freeze(it);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Qe(it, m);
        }
        return m === n ? rt(Ye) : tt(Ye), Ye;
      }
    }
    function nt(m, M, J) {
      return Ze(m, M, J, !0);
    }
    function et(m, M, J) {
      return Ze(m, M, J, !1);
    }
    var Ge = et, Le = nt;
    cn.Fragment = n, cn.jsx = Ge, cn.jsxs = Le;
  }()), cn;
}
process.env.NODE_ENV === "production" ? Zi.exports = Gl() : Zi.exports = Yl();
var es = Zi.exports;
const Jl = Symbol(), Lo = Object.getPrototypeOf, ts = /* @__PURE__ */ new WeakMap(), Xl = (e) => e && (ts.has(e) ? ts.get(e) : Lo(e) === Object.prototype || Lo(e) === Array.prototype), Ql = (e) => Xl(e) && e[Jl] || null, jo = (e, t = !0) => {
  ts.set(e, t);
}, Ii = (e) => typeof e == "object" && e !== null, pr = /* @__PURE__ */ new WeakMap(), kn = /* @__PURE__ */ new WeakSet(), Zl = (e = Object.is, t = (h, y) => new Proxy(h, y), r = (h) => Ii(h) && !kn.has(h) && (Array.isArray(h) || !(Symbol.iterator in h)) && !(h instanceof WeakMap) && !(h instanceof WeakSet) && !(h instanceof Error) && !(h instanceof Number) && !(h instanceof Date) && !(h instanceof String) && !(h instanceof RegExp) && !(h instanceof ArrayBuffer), n = (h) => h.configurable && h.enumerable && h.writable, i = (h) => {
  switch (h.status) {
    case "fulfilled":
      return h.value;
    case "rejected":
      throw h.reason;
    default:
      throw h;
  }
}, s = /* @__PURE__ */ new WeakMap(), o = (h, y, g = i) => {
  const v = s.get(h);
  if ((v == null ? void 0 : v[0]) === y)
    return v[1];
  const w = Array.isArray(h) ? [] : Object.create(Object.getPrototypeOf(h));
  return jo(w, !0), s.set(h, [y, w]), Reflect.ownKeys(h).forEach((I) => {
    if (Object.getOwnPropertyDescriptor(w, I))
      return;
    const A = Reflect.get(h, I), U = {
      value: A,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (kn.has(A))
      jo(A, !1);
    else if (A instanceof Promise)
      delete U.value, U.get = () => g(A);
    else if (pr.has(A)) {
      const [E, x] = pr.get(
        A
      );
      U.value = o(
        E,
        x(),
        g
      );
    }
    Object.defineProperty(w, I, U);
  }), Object.preventExtensions(w);
}, a = /* @__PURE__ */ new WeakMap(), f = [1, 1], l = (h) => {
  if (!Ii(h))
    throw new Error("object required");
  const y = a.get(h);
  if (y)
    return y;
  let g = f[0];
  const v = /* @__PURE__ */ new Set(), w = (j, F = ++f[0]) => {
    g !== F && (g = F, v.forEach((q) => q(j, F)));
  };
  let I = f[1];
  const A = (j = ++f[1]) => (I !== j && !v.size && (I = j, E.forEach(([F]) => {
    const q = F[1](j);
    q > g && (g = q);
  })), g), U = (j) => (F, q) => {
    const D = [...F];
    D[1] = [j, ...D[1]], w(D, q);
  }, E = /* @__PURE__ */ new Map(), x = (j, F) => {
    if (v.size) {
      const q = F[3](U(j));
      E.set(j, [F, q]);
    } else
      E.set(j, [F]);
  }, _ = (j) => {
    var F;
    const q = E.get(j);
    q && (E.delete(j), (F = q[1]) == null || F.call(q));
  }, S = (j) => (v.add(j), v.size === 1 && E.forEach(([q, D], R) => {
    const G = q[3](U(R));
    E.set(R, [q, G]);
  }), () => {
    v.delete(j), v.size === 0 && E.forEach(([q, D], R) => {
      D && (D(), E.set(R, [q]));
    });
  }), d = Array.isArray(h) ? [] : Object.create(Object.getPrototypeOf(h)), c = (j, F, q, D, R) => {
    if (j && (e(F, D) || a.has(D) && e(F, a.get(D))))
      return;
    _(q), Ii(D) && (D = Ql(D) || D);
    let G = D;
    if (D instanceof Promise)
      D.then((V) => {
        D.status = "fulfilled", D.value = V, w(["resolve", [q], V]);
      }).catch((V) => {
        D.status = "rejected", D.reason = V, w(["reject", [q], V]);
      });
    else {
      !pr.has(D) && r(D) && (G = l(D));
      const V = !kn.has(G) && pr.get(G);
      V && x(q, V);
    }
    R(G), w(["set", [q], D, F]);
  }, $ = t(d, {
    deleteProperty(j, F) {
      const q = Reflect.get(j, F);
      _(F);
      const D = Reflect.deleteProperty(j, F);
      return D && w(["delete", [F], q]), D;
    },
    set(j, F, q, D) {
      const R = Reflect.has(j, F), G = Reflect.get(j, F, D);
      return c(R, G, F, q, (V) => {
        Reflect.set(j, F, V, D);
      }), !0;
    },
    defineProperty(j, F, q) {
      if (n(q)) {
        const D = Reflect.getOwnPropertyDescriptor(j, F);
        if (!D || n(D))
          return c(
            !!D && "value" in D,
            D == null ? void 0 : D.value,
            F,
            q.value,
            (R) => {
              Reflect.defineProperty(j, F, {
                ...q,
                value: R
              });
            }
          ), !0;
      }
      return Reflect.defineProperty(j, F, q);
    }
  });
  a.set(h, $);
  const L = [
    d,
    A,
    o,
    S
  ];
  return pr.set($, L), Reflect.ownKeys(h).forEach((j) => {
    const F = Object.getOwnPropertyDescriptor(
      h,
      j
    );
    "value" in F && ($[j] = h[j], delete F.value, delete F.writable), Object.defineProperty(d, j, F);
  }), $;
}) => [
  // public functions
  l,
  // shared state
  pr,
  kn,
  // internal things
  e,
  t,
  r,
  n,
  i,
  s,
  o,
  a,
  f
], [ef] = Zl();
function br(e = {}) {
  return ef(e);
}
function jr(e, t, r) {
  const n = pr.get(e);
  let i;
  const s = [], o = n[3];
  let a = !1;
  const l = o((h) => {
    if (s.push(h), r) {
      t(s.splice(0));
      return;
    }
    i || (i = Promise.resolve().then(() => {
      i = void 0, a && t(s.splice(0));
    }));
  });
  return a = !0, () => {
    a = !1, l();
  };
}
function tf(e, t) {
  const r = pr.get(e), [n, i, s] = r;
  return s(n, i(), t);
}
const at = br({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), Lc = { state: at, subscribe(e) {
  return jr(at, () => e(at));
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
  let n = e;
  n.includes("://") || (n = e.replaceAll("/", "").replaceAll(":", ""), n = `${n}://`), n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, r);
  const i = encodeURIComponent(t);
  return `${n}wc?uri=${i}`;
}, formatUniversalUrl(e, t, r) {
  if (!St.isHttpUrl(e))
    return this.formatNativeUrl(e, t, r);
  let n = e;
  n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, r);
  const i = encodeURIComponent(t);
  return `${n}wc?uri=${i}`;
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
    typeof localStorage < "u" && localStorage.setItem(St.WCM_VERSION, "2.6.1");
  } catch {
    console.info("Unable to set Web3Modal version in storage");
  }
}, getWalletRouterData() {
  var e;
  const t = (e = Lc.state.data) == null ? void 0 : e.Wallet;
  if (!t)
    throw new Error('Missing "Wallet" view data');
  return t;
} }, rf = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), vt = br({ enabled: rf, userSessionId: "", events: [], connectedWalletId: void 0 }), nf = { state: vt, subscribe(e) {
  return jr(vt.events, () => e(tf(vt.events[vt.events.length - 1])));
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
} }, Zt = br({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }), Gt = { state: Zt, subscribe(e) {
  return jr(Zt, () => e(Zt));
}, setChains(e) {
  Zt.chains = e;
}, setWalletConnectUri(e) {
  Zt.walletConnectUri = e;
}, setIsCustomDesktop(e) {
  Zt.isCustomDesktop = e;
}, setIsCustomMobile(e) {
  Zt.isCustomMobile = e;
}, setIsDataLoaded(e) {
  Zt.isDataLoaded = e;
}, setIsUiLoaded(e) {
  Zt.isUiLoaded = e;
}, setIsAuth(e) {
  Zt.isAuth = e;
} }, Gn = br({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), Yr = { state: Gn, subscribe(e) {
  return jr(Gn, () => e(Gn));
}, setConfig(e) {
  var t, r;
  nf.initialize(), Gt.setChains(e.chains), Gt.setIsAuth(!!e.enableAuthMode), Gt.setIsCustomMobile(!!((t = e.mobileWallets) != null && t.length)), Gt.setIsCustomDesktop(!!((r = e.desktopWallets) != null && r.length)), St.setModalVersionInStorage(), Object.assign(Gn, e);
} };
var sf = Object.defineProperty, Fo = Object.getOwnPropertySymbols, of = Object.prototype.hasOwnProperty, af = Object.prototype.propertyIsEnumerable, Uo = (e, t, r) => t in e ? sf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, cf = (e, t) => {
  for (var r in t || (t = {}))
    of.call(t, r) && Uo(e, r, t[r]);
  if (Fo)
    for (var r of Fo(t))
      af.call(t, r) && Uo(e, r, t[r]);
  return e;
};
const rs = "https://explorer-api.walletconnect.com", ns = "wcm", is = "js-2.6.1";
async function Yn(e, t) {
  const r = cf({ sdkType: ns, sdkVersion: is }, t), n = new URL(e, rs);
  return n.searchParams.append("projectId", Yr.state.projectId), Object.entries(r).forEach(([i, s]) => {
    s && n.searchParams.append(i, String(s));
  }), (await fetch(n)).json();
}
const Dr = { async getDesktopListings(e) {
  return Yn("/w3m/v1/getDesktopListings", e);
}, async getMobileListings(e) {
  return Yn("/w3m/v1/getMobileListings", e);
}, async getInjectedListings(e) {
  return Yn("/w3m/v1/getInjectedListings", e);
}, async getAllListings(e) {
  return Yn("/w3m/v1/getAllListings", e);
}, getWalletImageUrl(e) {
  return `${rs}/w3m/v1/getWalletImage/${e}?projectId=${Yr.state.projectId}&sdkType=${ns}&sdkVersion=${is}`;
}, getAssetImageUrl(e) {
  return `${rs}/w3m/v1/getAssetImage/${e}?projectId=${Yr.state.projectId}&sdkType=${ns}&sdkVersion=${is}`;
} };
var uf = Object.defineProperty, Mo = Object.getOwnPropertySymbols, lf = Object.prototype.hasOwnProperty, ff = Object.prototype.propertyIsEnumerable, Bo = (e, t, r) => t in e ? uf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, hf = (e, t) => {
  for (var r in t || (t = {}))
    lf.call(t, r) && Bo(e, r, t[r]);
  if (Mo)
    for (var r of Mo(t))
      ff.call(t, r) && Bo(e, r, t[r]);
  return e;
};
const qo = St.isMobile(), er = br({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), nm = { state: er, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: e, explorerExcludedWalletIds: t } = Yr.state;
  if (e === "NONE" || t === "ALL" && !e)
    return er.recomendedWallets;
  if (St.isArray(e)) {
    const r = { recommendedIds: e.join(",") }, { listings: n } = await Dr.getAllListings(r), i = Object.values(n);
    i.sort((s, o) => {
      const a = e.indexOf(s.id), f = e.indexOf(o.id);
      return a - f;
    }), er.recomendedWallets = i;
  } else {
    const { chains: r, isAuth: n } = Gt.state, i = r == null ? void 0 : r.join(","), s = St.isArray(t), o = { page: 1, sdks: n ? "auth_v1" : void 0, entries: St.RECOMMENDED_WALLET_AMOUNT, chains: i, version: 2, excludedIds: s ? t.join(",") : void 0 }, { listings: a } = qo ? await Dr.getMobileListings(o) : await Dr.getDesktopListings(o);
    er.recomendedWallets = Object.values(a);
  }
  return er.recomendedWallets;
}, async getWallets(e) {
  const t = hf({}, e), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: n } = Yr.state, { recomendedWallets: i } = er;
  if (n === "ALL")
    return er.wallets;
  i.length ? t.excludedIds = i.map((y) => y.id).join(",") : St.isArray(r) && (t.excludedIds = r.join(",")), St.isArray(n) && (t.excludedIds = [t.excludedIds, n].filter(Boolean).join(",")), Gt.state.isAuth && (t.sdks = "auth_v1");
  const { page: s, search: o } = e, { listings: a, total: f } = qo ? await Dr.getMobileListings(t) : await Dr.getDesktopListings(t), l = Object.values(a), h = o ? "search" : "wallets";
  return er[h] = { listings: [...er[h].listings, ...l], total: f, page: s ?? 1 }, { listings: l, total: f };
}, getWalletImageUrl(e) {
  return Dr.getWalletImageUrl(e);
}, getAssetImageUrl(e) {
  return Dr.getAssetImageUrl(e);
}, resetSearch() {
  er.search = { listings: [], total: 0, page: 1 };
} }, zr = br({ open: !1 }), Pi = { state: zr, subscribe(e) {
  return jr(zr, () => e(zr));
}, async open(e) {
  return new Promise((t) => {
    const { isUiLoaded: r, isDataLoaded: n } = Gt.state;
    if (St.removeWalletConnectDeepLink(), Gt.setWalletConnectUri(e == null ? void 0 : e.uri), Gt.setChains(e == null ? void 0 : e.chains), Lc.reset("ConnectWallet"), r && n)
      zr.open = !0, t();
    else {
      const i = setInterval(() => {
        const s = Gt.state;
        s.isUiLoaded && s.isDataLoaded && (clearInterval(i), zr.open = !0, t());
      }, 200);
    }
  });
}, close() {
  zr.open = !1;
} };
var df = Object.defineProperty, zo = Object.getOwnPropertySymbols, pf = Object.prototype.hasOwnProperty, gf = Object.prototype.propertyIsEnumerable, Vo = (e, t, r) => t in e ? df(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, yf = (e, t) => {
  for (var r in t || (t = {}))
    pf.call(t, r) && Vo(e, r, t[r]);
  if (zo)
    for (var r of zo(t))
      gf.call(t, r) && Vo(e, r, t[r]);
  return e;
};
function _f() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const un = br({ themeMode: _f() ? "dark" : "light" }), Ko = { state: un, subscribe(e) {
  return jr(un, () => e(un));
}, setThemeConfig(e) {
  const { themeMode: t, themeVariables: r } = e;
  t && (un.themeMode = t), r && (un.themeVariables = yf({}, r));
} }, Or = br({ open: !1, message: "", variant: "success" }), im = { state: Or, subscribe(e) {
  return jr(Or, () => e(Or));
}, openToast(e, t) {
  Or.open = !0, Or.message = e, Or.variant = t;
}, closeToast() {
  Or.open = !1;
} };
let bf = class {
  constructor(t) {
    this.openModal = Pi.open, this.closeModal = Pi.close, this.subscribeModal = Pi.subscribe, this.setTheme = Ko.setThemeConfig, Ko.setThemeConfig(t), Yr.setConfig(t), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-f7b2cb2f.js");
      const t = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", t), Gt.setIsUiLoaded(!0);
    }
  }
};
var Ks = { exports: {} }, kr = typeof Reflect == "object" ? Reflect : null, Wo = kr && typeof kr.apply == "function" ? kr.apply : function(t, r, n) {
  return Function.prototype.apply.call(t, r, n);
}, Qn;
kr && typeof kr.ownKeys == "function" ? Qn = kr.ownKeys : Object.getOwnPropertySymbols ? Qn = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : Qn = function(t) {
  return Object.getOwnPropertyNames(t);
};
function vf(e) {
  console && console.warn && console.warn(e);
}
var jc = Number.isNaN || function(t) {
  return t !== t;
};
function Ne() {
  Ne.init.call(this);
}
Ks.exports = Ne;
Ks.exports.once = Sf;
Ne.EventEmitter = Ne;
Ne.prototype._events = void 0;
Ne.prototype._eventsCount = 0;
Ne.prototype._maxListeners = void 0;
var Ho = 10;
function hi(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(Ne, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Ho;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || jc(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    Ho = e;
  }
});
Ne.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Ne.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || jc(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function Fc(e) {
  return e._maxListeners === void 0 ? Ne.defaultMaxListeners : e._maxListeners;
}
Ne.prototype.getMaxListeners = function() {
  return Fc(this);
};
Ne.prototype.emit = function(t) {
  for (var r = [], n = 1; n < arguments.length; n++)
    r.push(arguments[n]);
  var i = t === "error", s = this._events;
  if (s !== void 0)
    i = i && s.error === void 0;
  else if (!i)
    return !1;
  if (i) {
    var o;
    if (r.length > 0 && (o = r[0]), o instanceof Error)
      throw o;
    var a = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
    throw a.context = o, a;
  }
  var f = s[t];
  if (f === void 0)
    return !1;
  if (typeof f == "function")
    Wo(f, this, r);
  else
    for (var l = f.length, h = zc(f, l), n = 0; n < l; ++n)
      Wo(h[n], this, r);
  return !0;
};
function Uc(e, t, r, n) {
  var i, s, o;
  if (hi(r), s = e._events, s === void 0 ? (s = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (s.newListener !== void 0 && (e.emit(
    "newListener",
    t,
    r.listener ? r.listener : r
  ), s = e._events), o = s[t]), o === void 0)
    o = s[t] = r, ++e._eventsCount;
  else if (typeof o == "function" ? o = s[t] = n ? [r, o] : [o, r] : n ? o.unshift(r) : o.push(r), i = Fc(e), i > 0 && o.length > i && !o.warned) {
    o.warned = !0;
    var a = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    a.name = "MaxListenersExceededWarning", a.emitter = e, a.type = t, a.count = o.length, vf(a);
  }
  return e;
}
Ne.prototype.addListener = function(t, r) {
  return Uc(this, t, r, !1);
};
Ne.prototype.on = Ne.prototype.addListener;
Ne.prototype.prependListener = function(t, r) {
  return Uc(this, t, r, !0);
};
function mf() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Mc(e, t, r) {
  var n = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r }, i = mf.bind(n);
  return i.listener = r, n.wrapFn = i, i;
}
Ne.prototype.once = function(t, r) {
  return hi(r), this.on(t, Mc(this, t, r)), this;
};
Ne.prototype.prependOnceListener = function(t, r) {
  return hi(r), this.prependListener(t, Mc(this, t, r)), this;
};
Ne.prototype.removeListener = function(t, r) {
  var n, i, s, o, a;
  if (hi(r), i = this._events, i === void 0)
    return this;
  if (n = i[t], n === void 0)
    return this;
  if (n === r || n.listener === r)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete i[t], i.removeListener && this.emit("removeListener", t, n.listener || r));
  else if (typeof n != "function") {
    for (s = -1, o = n.length - 1; o >= 0; o--)
      if (n[o] === r || n[o].listener === r) {
        a = n[o].listener, s = o;
        break;
      }
    if (s < 0)
      return this;
    s === 0 ? n.shift() : wf(n, s), n.length === 1 && (i[t] = n[0]), i.removeListener !== void 0 && this.emit("removeListener", t, a || r);
  }
  return this;
};
Ne.prototype.off = Ne.prototype.removeListener;
Ne.prototype.removeAllListeners = function(t) {
  var r, n, i;
  if (n = this._events, n === void 0)
    return this;
  if (n.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : n[t] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete n[t]), this;
  if (arguments.length === 0) {
    var s = Object.keys(n), o;
    for (i = 0; i < s.length; ++i)
      o = s[i], o !== "removeListener" && this.removeAllListeners(o);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (r = n[t], typeof r == "function")
    this.removeListener(t, r);
  else if (r !== void 0)
    for (i = r.length - 1; i >= 0; i--)
      this.removeListener(t, r[i]);
  return this;
};
function Bc(e, t, r) {
  var n = e._events;
  if (n === void 0)
    return [];
  var i = n[t];
  return i === void 0 ? [] : typeof i == "function" ? r ? [i.listener || i] : [i] : r ? Ef(i) : zc(i, i.length);
}
Ne.prototype.listeners = function(t) {
  return Bc(this, t, !0);
};
Ne.prototype.rawListeners = function(t) {
  return Bc(this, t, !1);
};
Ne.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : qc.call(e, t);
};
Ne.prototype.listenerCount = qc;
function qc(e) {
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
  return this._eventsCount > 0 ? Qn(this._events) : [];
};
function zc(e, t) {
  for (var r = new Array(t), n = 0; n < t; ++n)
    r[n] = e[n];
  return r;
}
function wf(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function Ef(e) {
  for (var t = new Array(e.length), r = 0; r < t.length; ++r)
    t[r] = e[r].listener || e[r];
  return t;
}
function Sf(e, t) {
  return new Promise(function(r, n) {
    function i(o) {
      e.removeListener(t, s), n(o);
    }
    function s() {
      typeof e.removeListener == "function" && e.removeListener("error", i), r([].slice.call(arguments));
    }
    Vc(e, t, s, { once: !0 }), t !== "error" && Df(e, i, { once: !0 });
  });
}
function Df(e, t, r) {
  typeof e.on == "function" && Vc(e, "error", t, r);
}
function Vc(e, t, r, n) {
  if (typeof e.on == "function")
    n.once ? e.once(t, r) : e.on(t, r);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function i(s) {
      n.once && e.removeEventListener(t, i), r(s);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var Jt = Ks.exports;
const Kc = /* @__PURE__ */ Vs(Jt);
var di = {};
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
var ss = function(e, t) {
  return ss = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      n.hasOwnProperty(i) && (r[i] = n[i]);
  }, ss(e, t);
};
function Of(e, t) {
  ss(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var os = function() {
  return os = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, os.apply(this, arguments);
};
function xf(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function If(e, t, r, n) {
  var i = arguments.length, s = i < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, r) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    s = Reflect.decorate(e, t, r, n);
  else
    for (var a = e.length - 1; a >= 0; a--)
      (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
  return i > 3 && s && Object.defineProperty(t, r, s), s;
}
function Pf(e, t) {
  return function(r, n) {
    t(r, n, e);
  };
}
function Tf(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function Rf(e, t, r, n) {
  function i(s) {
    return s instanceof r ? s : new r(function(o) {
      o(s);
    });
  }
  return new (r || (r = Promise))(function(s, o) {
    function a(h) {
      try {
        l(n.next(h));
      } catch (y) {
        o(y);
      }
    }
    function f(h) {
      try {
        l(n.throw(h));
      } catch (y) {
        o(y);
      }
    }
    function l(h) {
      h.done ? s(h.value) : i(h.value).then(a, f);
    }
    l((n = n.apply(e, t || [])).next());
  });
}
function Af(e, t) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, i, s, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(l) {
    return function(h) {
      return f([l, h]);
    };
  }
  function f(l) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, i && (s = l[0] & 2 ? i.return : l[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, l[1])).done)
          return s;
        switch (i = 0, s && (l = [l[0] & 2, s.value]), l[0]) {
          case 0:
          case 1:
            s = l;
            break;
          case 4:
            return r.label++, { value: l[1], done: !1 };
          case 5:
            r.label++, i = l[1], l = [0];
            continue;
          case 7:
            l = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (s = r.trys, !(s = s.length > 0 && s[s.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              r = 0;
              continue;
            }
            if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) {
              r.label = l[1];
              break;
            }
            if (l[0] === 6 && r.label < s[1]) {
              r.label = s[1], s = l;
              break;
            }
            if (s && r.label < s[2]) {
              r.label = s[2], r.ops.push(l);
              break;
            }
            s[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        l = t.call(e, r);
      } catch (h) {
        l = [6, h], i = 0;
      } finally {
        n = s = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function Cf(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}
function Nf(e, t) {
  for (var r in e)
    r !== "default" && !t.hasOwnProperty(r) && (t[r] = e[r]);
}
function as(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Wc(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, s = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      s.push(i.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return s;
}
function $f() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(Wc(arguments[t]));
  return e;
}
function Lf() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++)
    e += arguments[t].length;
  for (var n = Array(e), i = 0, t = 0; t < r; t++)
    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, i++)
      n[i] = s[o];
  return n;
}
function In(e) {
  return this instanceof In ? (this.v = e, this) : new In(e);
}
function jf(e, t, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []), i, s = [];
  return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(g) {
    n[g] && (i[g] = function(v) {
      return new Promise(function(w, I) {
        s.push([g, v, w, I]) > 1 || a(g, v);
      });
    });
  }
  function a(g, v) {
    try {
      f(n[g](v));
    } catch (w) {
      y(s[0][3], w);
    }
  }
  function f(g) {
    g.value instanceof In ? Promise.resolve(g.value.v).then(l, h) : y(s[0][2], g);
  }
  function l(g) {
    a("next", g);
  }
  function h(g) {
    a("throw", g);
  }
  function y(g, v) {
    g(v), s.shift(), s.length && a(s[0][0], s[0][1]);
  }
}
function Ff(e) {
  var t, r;
  return t = {}, n("next"), n("throw", function(i) {
    throw i;
  }), n("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function n(i, s) {
    t[i] = e[i] ? function(o) {
      return (r = !r) ? { value: In(e[i](o)), done: i === "return" } : s ? s(o) : o;
    } : s;
  }
}
function Uf(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], r;
  return t ? t.call(e) : (e = typeof as == "function" ? as(e) : e[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(s) {
    r[s] = e[s] && function(o) {
      return new Promise(function(a, f) {
        o = e[s](o), i(a, f, o.done, o.value);
      });
    };
  }
  function i(s, o, a, f) {
    Promise.resolve(f).then(function(l) {
      s({ value: l, done: a });
    }, o);
  }
}
function Mf(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
function Bf(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  return t.default = e, t;
}
function qf(e) {
  return e && e.__esModule ? e : { default: e };
}
function zf(e, t) {
  if (!t.has(e))
    throw new TypeError("attempted to get private field on non-instance");
  return t.get(e);
}
function Vf(e, t, r) {
  if (!t.has(e))
    throw new TypeError("attempted to set private field on non-instance");
  return t.set(e, r), r;
}
const Kf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return os;
  },
  __asyncDelegator: Ff,
  __asyncGenerator: jf,
  __asyncValues: Uf,
  __await: In,
  __awaiter: Rf,
  __classPrivateFieldGet: zf,
  __classPrivateFieldSet: Vf,
  __createBinding: Cf,
  __decorate: If,
  __exportStar: Nf,
  __extends: Of,
  __generator: Af,
  __importDefault: qf,
  __importStar: Bf,
  __makeTemplateObject: Mf,
  __metadata: Tf,
  __param: Pf,
  __read: Wc,
  __rest: xf,
  __spread: $f,
  __spreadArrays: Lf,
  __values: as
}, Symbol.toStringTag, { value: "Module" })), Hc = /* @__PURE__ */ Lr(Kf);
var $n = {};
Object.defineProperty($n, "__esModule", { value: !0 });
function Wf(e) {
  if (typeof e != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof e}`);
  try {
    return JSON.parse(e);
  } catch {
    return e;
  }
}
$n.safeJsonParse = Wf;
function Hf(e) {
  return typeof e == "string" ? e : JSON.stringify(e, (t, r) => typeof r > "u" ? null : r);
}
$n.safeJsonStringify = Hf;
var ln = { exports: {} }, ko;
function kf() {
  return ko || (ko = 1, function() {
    let e;
    function t() {
    }
    e = t, e.prototype.getItem = function(r) {
      return this.hasOwnProperty(r) ? String(this[r]) : null;
    }, e.prototype.setItem = function(r, n) {
      this[r] = String(n);
    }, e.prototype.removeItem = function(r) {
      delete this[r];
    }, e.prototype.clear = function() {
      const r = this;
      Object.keys(r).forEach(function(n) {
        r[n] = void 0, delete r[n];
      });
    }, e.prototype.key = function(r) {
      return r = r || 0, Object.keys(this)[r];
    }, e.prototype.__defineGetter__("length", function() {
      return Object.keys(this).length;
    }), typeof Nt < "u" && Nt.localStorage ? ln.exports = Nt.localStorage : typeof window < "u" && window.localStorage ? ln.exports = window.localStorage : ln.exports = new t();
  }()), ln.exports;
}
var Ti = {}, fn = {}, Go;
function Gf() {
  if (Go)
    return fn;
  Go = 1, Object.defineProperty(fn, "__esModule", { value: !0 }), fn.IKeyValueStorage = void 0;
  class e {
  }
  return fn.IKeyValueStorage = e, fn;
}
var hn = {}, Yo;
function Yf() {
  if (Yo)
    return hn;
  Yo = 1, Object.defineProperty(hn, "__esModule", { value: !0 }), hn.parseEntry = void 0;
  const e = $n;
  function t(r) {
    var n;
    return [r[0], e.safeJsonParse((n = r[1]) !== null && n !== void 0 ? n : "")];
  }
  return hn.parseEntry = t, hn;
}
var Jo;
function Jf() {
  return Jo || (Jo = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = Hc;
    t.__exportStar(Gf(), e), t.__exportStar(Yf(), e);
  }(Ti)), Ti;
}
Object.defineProperty(di, "__esModule", { value: !0 });
di.KeyValueStorage = void 0;
const Kr = Hc, Xo = $n, Xf = Kr.__importDefault(kf()), Qf = Jf();
class kc {
  constructor() {
    this.localStorage = Xf.default;
  }
  getKeys() {
    return Kr.__awaiter(this, void 0, void 0, function* () {
      return Object.keys(this.localStorage);
    });
  }
  getEntries() {
    return Kr.__awaiter(this, void 0, void 0, function* () {
      return Object.entries(this.localStorage).map(Qf.parseEntry);
    });
  }
  getItem(t) {
    return Kr.__awaiter(this, void 0, void 0, function* () {
      const r = this.localStorage.getItem(t);
      if (r !== null)
        return Xo.safeJsonParse(r);
    });
  }
  setItem(t, r) {
    return Kr.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.setItem(t, Xo.safeJsonStringify(r));
    });
  }
  removeItem(t) {
    return Kr.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.removeItem(t);
    });
  }
}
di.KeyValueStorage = kc;
var Zf = di.default = kc, Zr = {};
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
var cs = function(e, t) {
  return cs = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      n.hasOwnProperty(i) && (r[i] = n[i]);
  }, cs(e, t);
};
function eh(e, t) {
  cs(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var us = function() {
  return us = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, us.apply(this, arguments);
};
function th(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function rh(e, t, r, n) {
  var i = arguments.length, s = i < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, r) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    s = Reflect.decorate(e, t, r, n);
  else
    for (var a = e.length - 1; a >= 0; a--)
      (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
  return i > 3 && s && Object.defineProperty(t, r, s), s;
}
function nh(e, t) {
  return function(r, n) {
    t(r, n, e);
  };
}
function ih(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function sh(e, t, r, n) {
  function i(s) {
    return s instanceof r ? s : new r(function(o) {
      o(s);
    });
  }
  return new (r || (r = Promise))(function(s, o) {
    function a(h) {
      try {
        l(n.next(h));
      } catch (y) {
        o(y);
      }
    }
    function f(h) {
      try {
        l(n.throw(h));
      } catch (y) {
        o(y);
      }
    }
    function l(h) {
      h.done ? s(h.value) : i(h.value).then(a, f);
    }
    l((n = n.apply(e, t || [])).next());
  });
}
function oh(e, t) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, i, s, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(l) {
    return function(h) {
      return f([l, h]);
    };
  }
  function f(l) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, i && (s = l[0] & 2 ? i.return : l[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, l[1])).done)
          return s;
        switch (i = 0, s && (l = [l[0] & 2, s.value]), l[0]) {
          case 0:
          case 1:
            s = l;
            break;
          case 4:
            return r.label++, { value: l[1], done: !1 };
          case 5:
            r.label++, i = l[1], l = [0];
            continue;
          case 7:
            l = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (s = r.trys, !(s = s.length > 0 && s[s.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              r = 0;
              continue;
            }
            if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) {
              r.label = l[1];
              break;
            }
            if (l[0] === 6 && r.label < s[1]) {
              r.label = s[1], s = l;
              break;
            }
            if (s && r.label < s[2]) {
              r.label = s[2], r.ops.push(l);
              break;
            }
            s[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        l = t.call(e, r);
      } catch (h) {
        l = [6, h], i = 0;
      } finally {
        n = s = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function ah(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}
function ch(e, t) {
  for (var r in e)
    r !== "default" && !t.hasOwnProperty(r) && (t[r] = e[r]);
}
function ls(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Gc(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, s = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      s.push(i.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return s;
}
function uh() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(Gc(arguments[t]));
  return e;
}
function lh() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++)
    e += arguments[t].length;
  for (var n = Array(e), i = 0, t = 0; t < r; t++)
    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, i++)
      n[i] = s[o];
  return n;
}
function Pn(e) {
  return this instanceof Pn ? (this.v = e, this) : new Pn(e);
}
function fh(e, t, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []), i, s = [];
  return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(g) {
    n[g] && (i[g] = function(v) {
      return new Promise(function(w, I) {
        s.push([g, v, w, I]) > 1 || a(g, v);
      });
    });
  }
  function a(g, v) {
    try {
      f(n[g](v));
    } catch (w) {
      y(s[0][3], w);
    }
  }
  function f(g) {
    g.value instanceof Pn ? Promise.resolve(g.value.v).then(l, h) : y(s[0][2], g);
  }
  function l(g) {
    a("next", g);
  }
  function h(g) {
    a("throw", g);
  }
  function y(g, v) {
    g(v), s.shift(), s.length && a(s[0][0], s[0][1]);
  }
}
function hh(e) {
  var t, r;
  return t = {}, n("next"), n("throw", function(i) {
    throw i;
  }), n("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function n(i, s) {
    t[i] = e[i] ? function(o) {
      return (r = !r) ? { value: Pn(e[i](o)), done: i === "return" } : s ? s(o) : o;
    } : s;
  }
}
function dh(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], r;
  return t ? t.call(e) : (e = typeof ls == "function" ? ls(e) : e[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(s) {
    r[s] = e[s] && function(o) {
      return new Promise(function(a, f) {
        o = e[s](o), i(a, f, o.done, o.value);
      });
    };
  }
  function i(s, o, a, f) {
    Promise.resolve(f).then(function(l) {
      s({ value: l, done: a });
    }, o);
  }
}
function ph(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
function gh(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  return t.default = e, t;
}
function yh(e) {
  return e && e.__esModule ? e : { default: e };
}
function _h(e, t) {
  if (!t.has(e))
    throw new TypeError("attempted to get private field on non-instance");
  return t.get(e);
}
function bh(e, t, r) {
  if (!t.has(e))
    throw new TypeError("attempted to set private field on non-instance");
  return t.set(e, r), r;
}
const vh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return us;
  },
  __asyncDelegator: hh,
  __asyncGenerator: fh,
  __asyncValues: dh,
  __await: Pn,
  __awaiter: sh,
  __classPrivateFieldGet: _h,
  __classPrivateFieldSet: bh,
  __createBinding: ah,
  __decorate: rh,
  __exportStar: ch,
  __extends: eh,
  __generator: oh,
  __importDefault: yh,
  __importStar: gh,
  __makeTemplateObject: ph,
  __metadata: ih,
  __param: nh,
  __read: Gc,
  __rest: th,
  __spread: uh,
  __spreadArrays: lh,
  __values: ls
}, Symbol.toStringTag, { value: "Module" })), pi = /* @__PURE__ */ Lr(vh);
var dn = {}, te = {};
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
var fs = function(e, t) {
  return fs = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      n.hasOwnProperty(i) && (r[i] = n[i]);
  }, fs(e, t);
};
function mh(e, t) {
  fs(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var hs = function() {
  return hs = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, hs.apply(this, arguments);
};
function wh(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function Eh(e, t, r, n) {
  var i = arguments.length, s = i < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, r) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    s = Reflect.decorate(e, t, r, n);
  else
    for (var a = e.length - 1; a >= 0; a--)
      (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
  return i > 3 && s && Object.defineProperty(t, r, s), s;
}
function Sh(e, t) {
  return function(r, n) {
    t(r, n, e);
  };
}
function Dh(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function Oh(e, t, r, n) {
  function i(s) {
    return s instanceof r ? s : new r(function(o) {
      o(s);
    });
  }
  return new (r || (r = Promise))(function(s, o) {
    function a(h) {
      try {
        l(n.next(h));
      } catch (y) {
        o(y);
      }
    }
    function f(h) {
      try {
        l(n.throw(h));
      } catch (y) {
        o(y);
      }
    }
    function l(h) {
      h.done ? s(h.value) : i(h.value).then(a, f);
    }
    l((n = n.apply(e, t || [])).next());
  });
}
function xh(e, t) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, i, s, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(l) {
    return function(h) {
      return f([l, h]);
    };
  }
  function f(l) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, i && (s = l[0] & 2 ? i.return : l[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, l[1])).done)
          return s;
        switch (i = 0, s && (l = [l[0] & 2, s.value]), l[0]) {
          case 0:
          case 1:
            s = l;
            break;
          case 4:
            return r.label++, { value: l[1], done: !1 };
          case 5:
            r.label++, i = l[1], l = [0];
            continue;
          case 7:
            l = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (s = r.trys, !(s = s.length > 0 && s[s.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              r = 0;
              continue;
            }
            if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) {
              r.label = l[1];
              break;
            }
            if (l[0] === 6 && r.label < s[1]) {
              r.label = s[1], s = l;
              break;
            }
            if (s && r.label < s[2]) {
              r.label = s[2], r.ops.push(l);
              break;
            }
            s[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        l = t.call(e, r);
      } catch (h) {
        l = [6, h], i = 0;
      } finally {
        n = s = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function Ih(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}
function Ph(e, t) {
  for (var r in e)
    r !== "default" && !t.hasOwnProperty(r) && (t[r] = e[r]);
}
function ds(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Yc(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, s = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      s.push(i.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return s;
}
function Th() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(Yc(arguments[t]));
  return e;
}
function Rh() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++)
    e += arguments[t].length;
  for (var n = Array(e), i = 0, t = 0; t < r; t++)
    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, i++)
      n[i] = s[o];
  return n;
}
function Tn(e) {
  return this instanceof Tn ? (this.v = e, this) : new Tn(e);
}
function Ah(e, t, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []), i, s = [];
  return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(g) {
    n[g] && (i[g] = function(v) {
      return new Promise(function(w, I) {
        s.push([g, v, w, I]) > 1 || a(g, v);
      });
    });
  }
  function a(g, v) {
    try {
      f(n[g](v));
    } catch (w) {
      y(s[0][3], w);
    }
  }
  function f(g) {
    g.value instanceof Tn ? Promise.resolve(g.value.v).then(l, h) : y(s[0][2], g);
  }
  function l(g) {
    a("next", g);
  }
  function h(g) {
    a("throw", g);
  }
  function y(g, v) {
    g(v), s.shift(), s.length && a(s[0][0], s[0][1]);
  }
}
function Ch(e) {
  var t, r;
  return t = {}, n("next"), n("throw", function(i) {
    throw i;
  }), n("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function n(i, s) {
    t[i] = e[i] ? function(o) {
      return (r = !r) ? { value: Tn(e[i](o)), done: i === "return" } : s ? s(o) : o;
    } : s;
  }
}
function Nh(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], r;
  return t ? t.call(e) : (e = typeof ds == "function" ? ds(e) : e[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(s) {
    r[s] = e[s] && function(o) {
      return new Promise(function(a, f) {
        o = e[s](o), i(a, f, o.done, o.value);
      });
    };
  }
  function i(s, o, a, f) {
    Promise.resolve(f).then(function(l) {
      s({ value: l, done: a });
    }, o);
  }
}
function $h(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
function Lh(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  return t.default = e, t;
}
function jh(e) {
  return e && e.__esModule ? e : { default: e };
}
function Fh(e, t) {
  if (!t.has(e))
    throw new TypeError("attempted to get private field on non-instance");
  return t.get(e);
}
function Uh(e, t, r) {
  if (!t.has(e))
    throw new TypeError("attempted to set private field on non-instance");
  return t.set(e, r), r;
}
const Mh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return hs;
  },
  __asyncDelegator: Ch,
  __asyncGenerator: Ah,
  __asyncValues: Nh,
  __await: Tn,
  __awaiter: Oh,
  __classPrivateFieldGet: Fh,
  __classPrivateFieldSet: Uh,
  __createBinding: Ih,
  __decorate: Eh,
  __exportStar: Ph,
  __extends: mh,
  __generator: xh,
  __importDefault: jh,
  __importStar: Lh,
  __makeTemplateObject: $h,
  __metadata: Dh,
  __param: Sh,
  __read: Yc,
  __rest: wh,
  __spread: Th,
  __spreadArrays: Rh,
  __values: ds
}, Symbol.toStringTag, { value: "Module" })), gi = /* @__PURE__ */ Lr(Mh);
var Ri = {}, pn = {}, Qo;
function Bh() {
  if (Qo)
    return pn;
  Qo = 1, Object.defineProperty(pn, "__esModule", { value: !0 }), pn.delay = void 0;
  function e(t) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, t);
    });
  }
  return pn.delay = e, pn;
}
var xr = {}, Ai = {}, Ir = {}, Zo;
function qh() {
  return Zo || (Zo = 1, Object.defineProperty(Ir, "__esModule", { value: !0 }), Ir.ONE_THOUSAND = Ir.ONE_HUNDRED = void 0, Ir.ONE_HUNDRED = 100, Ir.ONE_THOUSAND = 1e3), Ir;
}
var Ci = {}, ea;
function zh() {
  return ea || (ea = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ONE_YEAR = e.FOUR_WEEKS = e.THREE_WEEKS = e.TWO_WEEKS = e.ONE_WEEK = e.THIRTY_DAYS = e.SEVEN_DAYS = e.FIVE_DAYS = e.THREE_DAYS = e.ONE_DAY = e.TWENTY_FOUR_HOURS = e.TWELVE_HOURS = e.SIX_HOURS = e.THREE_HOURS = e.ONE_HOUR = e.SIXTY_MINUTES = e.THIRTY_MINUTES = e.TEN_MINUTES = e.FIVE_MINUTES = e.ONE_MINUTE = e.SIXTY_SECONDS = e.THIRTY_SECONDS = e.TEN_SECONDS = e.FIVE_SECONDS = e.ONE_SECOND = void 0, e.ONE_SECOND = 1, e.FIVE_SECONDS = 5, e.TEN_SECONDS = 10, e.THIRTY_SECONDS = 30, e.SIXTY_SECONDS = 60, e.ONE_MINUTE = e.SIXTY_SECONDS, e.FIVE_MINUTES = e.ONE_MINUTE * 5, e.TEN_MINUTES = e.ONE_MINUTE * 10, e.THIRTY_MINUTES = e.ONE_MINUTE * 30, e.SIXTY_MINUTES = e.ONE_MINUTE * 60, e.ONE_HOUR = e.SIXTY_MINUTES, e.THREE_HOURS = e.ONE_HOUR * 3, e.SIX_HOURS = e.ONE_HOUR * 6, e.TWELVE_HOURS = e.ONE_HOUR * 12, e.TWENTY_FOUR_HOURS = e.ONE_HOUR * 24, e.ONE_DAY = e.TWENTY_FOUR_HOURS, e.THREE_DAYS = e.ONE_DAY * 3, e.FIVE_DAYS = e.ONE_DAY * 5, e.SEVEN_DAYS = e.ONE_DAY * 7, e.THIRTY_DAYS = e.ONE_DAY * 30, e.ONE_WEEK = e.SEVEN_DAYS, e.TWO_WEEKS = e.ONE_WEEK * 2, e.THREE_WEEKS = e.ONE_WEEK * 3, e.FOUR_WEEKS = e.ONE_WEEK * 4, e.ONE_YEAR = e.ONE_DAY * 365;
  }(Ci)), Ci;
}
var ta;
function Jc() {
  return ta || (ta = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = gi;
    t.__exportStar(qh(), e), t.__exportStar(zh(), e);
  }(Ai)), Ai;
}
var ra;
function Vh() {
  if (ra)
    return xr;
  ra = 1, Object.defineProperty(xr, "__esModule", { value: !0 }), xr.fromMiliseconds = xr.toMiliseconds = void 0;
  const e = Jc();
  function t(n) {
    return n * e.ONE_THOUSAND;
  }
  xr.toMiliseconds = t;
  function r(n) {
    return Math.floor(n / e.ONE_THOUSAND);
  }
  return xr.fromMiliseconds = r, xr;
}
var na;
function Kh() {
  return na || (na = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = gi;
    t.__exportStar(Bh(), e), t.__exportStar(Vh(), e);
  }(Ri)), Ri;
}
var Vr = {}, ia;
function Wh() {
  if (ia)
    return Vr;
  ia = 1, Object.defineProperty(Vr, "__esModule", { value: !0 }), Vr.Watch = void 0;
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
      const n = this.get(r);
      if (typeof n.elapsed < "u")
        throw new Error(`Watch already stopped for label: ${r}`);
      const i = Date.now() - n.started;
      this.timestamps.set(r, { started: n.started, elapsed: i });
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
  return Vr.Watch = e, Vr.default = e, Vr;
}
var Ni = {}, gn = {}, sa;
function Hh() {
  if (sa)
    return gn;
  sa = 1, Object.defineProperty(gn, "__esModule", { value: !0 }), gn.IWatch = void 0;
  class e {
  }
  return gn.IWatch = e, gn;
}
var oa;
function kh() {
  return oa || (oa = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), gi.__exportStar(Hh(), e);
  }(Ni)), Ni;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = gi;
  t.__exportStar(Kh(), e), t.__exportStar(Wh(), e), t.__exportStar(kh(), e), t.__exportStar(Jc(), e);
})(te);
var $i = {}, yn = {};
let Fr = class {
};
const Gh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: Fr
}, Symbol.toStringTag, { value: "Module" })), Yh = /* @__PURE__ */ Lr(Gh);
var aa;
function Jh() {
  if (aa)
    return yn;
  aa = 1, Object.defineProperty(yn, "__esModule", { value: !0 }), yn.IHeartBeat = void 0;
  const e = Yh;
  class t extends e.IEvents {
    constructor(n) {
      super();
    }
  }
  return yn.IHeartBeat = t, yn;
}
var ca;
function Xc() {
  return ca || (ca = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), pi.__exportStar(Jh(), e);
  }($i)), $i;
}
var Li = {}, Pr = {}, ua;
function Xh() {
  if (ua)
    return Pr;
  ua = 1, Object.defineProperty(Pr, "__esModule", { value: !0 }), Pr.HEARTBEAT_EVENTS = Pr.HEARTBEAT_INTERVAL = void 0;
  const e = te;
  return Pr.HEARTBEAT_INTERVAL = e.FIVE_SECONDS, Pr.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, Pr;
}
var la;
function Qc() {
  return la || (la = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), pi.__exportStar(Xh(), e);
  }(Li)), Li;
}
var fa;
function Qh() {
  if (fa)
    return dn;
  fa = 1, Object.defineProperty(dn, "__esModule", { value: !0 }), dn.HeartBeat = void 0;
  const e = pi, t = Jt, r = te, n = Xc(), i = Qc();
  class s extends n.IHeartBeat {
    constructor(a) {
      super(a), this.events = new t.EventEmitter(), this.interval = i.HEARTBEAT_INTERVAL, this.interval = (a == null ? void 0 : a.interval) || i.HEARTBEAT_INTERVAL;
    }
    static init(a) {
      return e.__awaiter(this, void 0, void 0, function* () {
        const f = new s(a);
        return yield f.init(), f;
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
    on(a, f) {
      this.events.on(a, f);
    }
    once(a, f) {
      this.events.once(a, f);
    }
    off(a, f) {
      this.events.off(a, f);
    }
    removeListener(a, f) {
      this.events.removeListener(a, f);
    }
    initialize() {
      return e.__awaiter(this, void 0, void 0, function* () {
        this.intervalRef = setInterval(() => this.pulse(), r.toMiliseconds(this.interval));
      });
    }
    pulse() {
      this.events.emit(i.HEARTBEAT_EVENTS.pulse);
    }
  }
  return dn.HeartBeat = s, dn;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = pi;
  t.__exportStar(Qh(), e), t.__exportStar(Xc(), e), t.__exportStar(Qc(), e);
})(Zr);
var Re = {};
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
var ps = function(e, t) {
  return ps = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      n.hasOwnProperty(i) && (r[i] = n[i]);
  }, ps(e, t);
};
function Zh(e, t) {
  ps(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var gs = function() {
  return gs = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, gs.apply(this, arguments);
};
function ed(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function td(e, t, r, n) {
  var i = arguments.length, s = i < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, r) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    s = Reflect.decorate(e, t, r, n);
  else
    for (var a = e.length - 1; a >= 0; a--)
      (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
  return i > 3 && s && Object.defineProperty(t, r, s), s;
}
function rd(e, t) {
  return function(r, n) {
    t(r, n, e);
  };
}
function nd(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function id(e, t, r, n) {
  function i(s) {
    return s instanceof r ? s : new r(function(o) {
      o(s);
    });
  }
  return new (r || (r = Promise))(function(s, o) {
    function a(h) {
      try {
        l(n.next(h));
      } catch (y) {
        o(y);
      }
    }
    function f(h) {
      try {
        l(n.throw(h));
      } catch (y) {
        o(y);
      }
    }
    function l(h) {
      h.done ? s(h.value) : i(h.value).then(a, f);
    }
    l((n = n.apply(e, t || [])).next());
  });
}
function sd(e, t) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, i, s, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(l) {
    return function(h) {
      return f([l, h]);
    };
  }
  function f(l) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, i && (s = l[0] & 2 ? i.return : l[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, l[1])).done)
          return s;
        switch (i = 0, s && (l = [l[0] & 2, s.value]), l[0]) {
          case 0:
          case 1:
            s = l;
            break;
          case 4:
            return r.label++, { value: l[1], done: !1 };
          case 5:
            r.label++, i = l[1], l = [0];
            continue;
          case 7:
            l = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (s = r.trys, !(s = s.length > 0 && s[s.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              r = 0;
              continue;
            }
            if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) {
              r.label = l[1];
              break;
            }
            if (l[0] === 6 && r.label < s[1]) {
              r.label = s[1], s = l;
              break;
            }
            if (s && r.label < s[2]) {
              r.label = s[2], r.ops.push(l);
              break;
            }
            s[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        l = t.call(e, r);
      } catch (h) {
        l = [6, h], i = 0;
      } finally {
        n = s = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function od(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}
function ad(e, t) {
  for (var r in e)
    r !== "default" && !t.hasOwnProperty(r) && (t[r] = e[r]);
}
function ys(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Zc(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, s = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      s.push(i.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return s;
}
function cd() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(Zc(arguments[t]));
  return e;
}
function ud() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++)
    e += arguments[t].length;
  for (var n = Array(e), i = 0, t = 0; t < r; t++)
    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, i++)
      n[i] = s[o];
  return n;
}
function Rn(e) {
  return this instanceof Rn ? (this.v = e, this) : new Rn(e);
}
function ld(e, t, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []), i, s = [];
  return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(g) {
    n[g] && (i[g] = function(v) {
      return new Promise(function(w, I) {
        s.push([g, v, w, I]) > 1 || a(g, v);
      });
    });
  }
  function a(g, v) {
    try {
      f(n[g](v));
    } catch (w) {
      y(s[0][3], w);
    }
  }
  function f(g) {
    g.value instanceof Rn ? Promise.resolve(g.value.v).then(l, h) : y(s[0][2], g);
  }
  function l(g) {
    a("next", g);
  }
  function h(g) {
    a("throw", g);
  }
  function y(g, v) {
    g(v), s.shift(), s.length && a(s[0][0], s[0][1]);
  }
}
function fd(e) {
  var t, r;
  return t = {}, n("next"), n("throw", function(i) {
    throw i;
  }), n("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function n(i, s) {
    t[i] = e[i] ? function(o) {
      return (r = !r) ? { value: Rn(e[i](o)), done: i === "return" } : s ? s(o) : o;
    } : s;
  }
}
function hd(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], r;
  return t ? t.call(e) : (e = typeof ys == "function" ? ys(e) : e[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(s) {
    r[s] = e[s] && function(o) {
      return new Promise(function(a, f) {
        o = e[s](o), i(a, f, o.done, o.value);
      });
    };
  }
  function i(s, o, a, f) {
    Promise.resolve(f).then(function(l) {
      s({ value: l, done: a });
    }, o);
  }
}
function dd(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
function pd(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  return t.default = e, t;
}
function gd(e) {
  return e && e.__esModule ? e : { default: e };
}
function yd(e, t) {
  if (!t.has(e))
    throw new TypeError("attempted to get private field on non-instance");
  return t.get(e);
}
function _d(e, t, r) {
  if (!t.has(e))
    throw new TypeError("attempted to set private field on non-instance");
  return t.set(e, r), r;
}
const bd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return gs;
  },
  __asyncDelegator: fd,
  __asyncGenerator: ld,
  __asyncValues: hd,
  __await: Rn,
  __awaiter: id,
  __classPrivateFieldGet: yd,
  __classPrivateFieldSet: _d,
  __createBinding: od,
  __decorate: td,
  __exportStar: ad,
  __extends: Zh,
  __generator: sd,
  __importDefault: gd,
  __importStar: pd,
  __makeTemplateObject: dd,
  __metadata: nd,
  __param: rd,
  __read: Zc,
  __rest: ed,
  __spread: cd,
  __spreadArrays: ud,
  __values: ys
}, Symbol.toStringTag, { value: "Module" })), vd = /* @__PURE__ */ Lr(bd);
var ji, ha;
function md() {
  if (ha)
    return ji;
  ha = 1;
  function e(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  ji = t;
  function t(r, n, i) {
    var s = i && i.stringify || e, o = 1;
    if (typeof r == "object" && r !== null) {
      var a = n.length + o;
      if (a === 1)
        return r;
      var f = new Array(a);
      f[0] = s(r);
      for (var l = 1; l < a; l++)
        f[l] = s(n[l]);
      return f.join(" ");
    }
    if (typeof r != "string")
      return r;
    var h = n.length;
    if (h === 0)
      return r;
    for (var y = "", g = 1 - o, v = -1, w = r && r.length || 0, I = 0; I < w; ) {
      if (r.charCodeAt(I) === 37 && I + 1 < w) {
        switch (v = v > -1 ? v : 0, r.charCodeAt(I + 1)) {
          case 100:
          case 102:
            if (g >= h || n[g] == null)
              break;
            v < I && (y += r.slice(v, I)), y += Number(n[g]), v = I + 2, I++;
            break;
          case 105:
            if (g >= h || n[g] == null)
              break;
            v < I && (y += r.slice(v, I)), y += Math.floor(Number(n[g])), v = I + 2, I++;
            break;
          case 79:
          case 111:
          case 106:
            if (g >= h || n[g] === void 0)
              break;
            v < I && (y += r.slice(v, I));
            var A = typeof n[g];
            if (A === "string") {
              y += "'" + n[g] + "'", v = I + 2, I++;
              break;
            }
            if (A === "function") {
              y += n[g].name || "<anonymous>", v = I + 2, I++;
              break;
            }
            y += s(n[g]), v = I + 2, I++;
            break;
          case 115:
            if (g >= h)
              break;
            v < I && (y += r.slice(v, I)), y += String(n[g]), v = I + 2, I++;
            break;
          case 37:
            v < I && (y += r.slice(v, I)), y += "%", v = I + 2, I++, g--;
            break;
        }
        ++g;
      }
      ++I;
    }
    return v === -1 ? r : (v < w && (y += r.slice(v)), y);
  }
  return ji;
}
var Fi, da;
function wd() {
  if (da)
    return Fi;
  da = 1;
  const e = md();
  Fi = i;
  const t = S().console || {}, r = {
    mapHttpRequest: w,
    mapHttpResponse: w,
    wrapRequestSerializer: I,
    wrapResponseSerializer: I,
    wrapErrorSerializer: I,
    req: w,
    res: w,
    err: g
  };
  function n(d, c) {
    return Array.isArray(d) ? d.filter(function($) {
      return $ !== "!stdSerializers.err";
    }) : d === !0 ? Object.keys(c) : !1;
  }
  function i(d) {
    d = d || {}, d.browser = d.browser || {};
    const c = d.browser.transmit;
    if (c && typeof c.send != "function")
      throw Error("pino: transmit option must have a send function");
    const p = d.browser.write || t;
    d.browser.write && (d.browser.asObject = !0);
    const $ = d.serializers || {}, L = n(d.browser.serialize, $);
    let j = d.browser.serialize;
    Array.isArray(d.browser.serialize) && d.browser.serialize.indexOf("!stdSerializers.err") > -1 && (j = !1);
    const F = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof p == "function" && (p.error = p.fatal = p.warn = p.info = p.debug = p.trace = p), d.enabled === !1 && (d.level = "silent");
    const q = d.level || "info", D = Object.create(p);
    D.log || (D.log = A), Object.defineProperty(D, "levelVal", {
      get: G
    }), Object.defineProperty(D, "level", {
      get: V,
      set: z
    });
    const R = {
      transmit: c,
      serialize: L,
      asObject: d.browser.asObject,
      levels: F,
      timestamp: v(d)
    };
    D.levels = i.levels, D.level = q, D.setMaxListeners = D.getMaxListeners = D.emit = D.addListener = D.on = D.prependListener = D.once = D.prependOnceListener = D.removeListener = D.removeAllListeners = D.listeners = D.listenerCount = D.eventNames = D.write = D.flush = A, D.serializers = $, D._serialize = L, D._stdErrSerialize = j, D.child = W, c && (D._logEvent = y());
    function G() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function V() {
      return this._level;
    }
    function z(B) {
      if (B !== "silent" && !this.levels.values[B])
        throw Error("unknown level " + B);
      this._level = B, s(R, D, "error", "log"), s(R, D, "fatal", "error"), s(R, D, "warn", "error"), s(R, D, "info", "log"), s(R, D, "debug", "log"), s(R, D, "trace", "log");
    }
    function W(B, H) {
      if (!B)
        throw new Error("missing bindings for child Pino");
      H = H || {}, L && B.serializers && (H.serializers = B.serializers);
      const oe = H.serializers;
      if (L && oe) {
        var k = Object.assign({}, $, oe), ne = d.browser.serialize === !0 ? Object.keys(k) : L;
        delete B.serializers, f([B], ne, k, this._stdErrSerialize);
      }
      function Z(re) {
        this._childLevel = (re._childLevel | 0) + 1, this.error = l(re, B, "error"), this.fatal = l(re, B, "fatal"), this.warn = l(re, B, "warn"), this.info = l(re, B, "info"), this.debug = l(re, B, "debug"), this.trace = l(re, B, "trace"), k && (this.serializers = k, this._serialize = ne), c && (this._logEvent = y(
          [].concat(re._logEvent.bindings, B)
        ));
      }
      return Z.prototype = this, new Z(this);
    }
    return D;
  }
  i.levels = {
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
  }, i.stdSerializers = r, i.stdTimeFunctions = Object.assign({}, { nullTime: U, epochTime: E, unixTime: x, isoTime: _ });
  function s(d, c, p, $) {
    const L = Object.getPrototypeOf(c);
    c[p] = c.levelVal > c.levels.values[p] ? A : L[p] ? L[p] : t[p] || t[$] || A, o(d, c, p);
  }
  function o(d, c, p) {
    !d.transmit && c[p] === A || (c[p] = function($) {
      return function() {
        const j = d.timestamp(), F = new Array(arguments.length), q = Object.getPrototypeOf && Object.getPrototypeOf(this) === t ? t : this;
        for (var D = 0; D < F.length; D++)
          F[D] = arguments[D];
        if (d.serialize && !d.asObject && f(F, this._serialize, this.serializers, this._stdErrSerialize), d.asObject ? $.call(q, a(this, p, F, j)) : $.apply(q, F), d.transmit) {
          const R = d.transmit.level || c.level, G = i.levels.values[R], V = i.levels.values[p];
          if (V < G)
            return;
          h(this, {
            ts: j,
            methodLevel: p,
            methodValue: V,
            transmitLevel: R,
            transmitValue: i.levels.values[d.transmit.level || c.level],
            send: d.transmit.send,
            val: c.levelVal
          }, F);
        }
      };
    }(c[p]));
  }
  function a(d, c, p, $) {
    d._serialize && f(p, d._serialize, d.serializers, d._stdErrSerialize);
    const L = p.slice();
    let j = L[0];
    const F = {};
    $ && (F.time = $), F.level = i.levels.values[c];
    let q = (d._childLevel | 0) + 1;
    if (q < 1 && (q = 1), j !== null && typeof j == "object") {
      for (; q-- && typeof L[0] == "object"; )
        Object.assign(F, L.shift());
      j = L.length ? e(L.shift(), L) : void 0;
    } else
      typeof j == "string" && (j = e(L.shift(), L));
    return j !== void 0 && (F.msg = j), F;
  }
  function f(d, c, p, $) {
    for (const L in d)
      if ($ && d[L] instanceof Error)
        d[L] = i.stdSerializers.err(d[L]);
      else if (typeof d[L] == "object" && !Array.isArray(d[L]))
        for (const j in d[L])
          c && c.indexOf(j) > -1 && j in p && (d[L][j] = p[j](d[L][j]));
  }
  function l(d, c, p) {
    return function() {
      const $ = new Array(1 + arguments.length);
      $[0] = c;
      for (var L = 1; L < $.length; L++)
        $[L] = arguments[L - 1];
      return d[p].apply(this, $);
    };
  }
  function h(d, c, p) {
    const $ = c.send, L = c.ts, j = c.methodLevel, F = c.methodValue, q = c.val, D = d._logEvent.bindings;
    f(
      p,
      d._serialize || Object.keys(d.serializers),
      d.serializers,
      d._stdErrSerialize === void 0 ? !0 : d._stdErrSerialize
    ), d._logEvent.ts = L, d._logEvent.messages = p.filter(function(R) {
      return D.indexOf(R) === -1;
    }), d._logEvent.level.label = j, d._logEvent.level.value = F, $(j, d._logEvent, q), d._logEvent = y(D);
  }
  function y(d) {
    return {
      ts: 0,
      messages: [],
      bindings: d || [],
      level: { label: "", value: 0 }
    };
  }
  function g(d) {
    const c = {
      type: d.constructor.name,
      msg: d.message,
      stack: d.stack
    };
    for (const p in d)
      c[p] === void 0 && (c[p] = d[p]);
    return c;
  }
  function v(d) {
    return typeof d.timestamp == "function" ? d.timestamp : d.timestamp === !1 ? U : E;
  }
  function w() {
    return {};
  }
  function I(d) {
    return d;
  }
  function A() {
  }
  function U() {
    return !1;
  }
  function E() {
    return Date.now();
  }
  function x() {
    return Math.round(Date.now() / 1e3);
  }
  function _() {
    return new Date(Date.now()).toISOString();
  }
  function S() {
    function d(c) {
      return typeof c < "u" && c;
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
  return Fi;
}
var Tr = {}, pa;
function eu() {
  return pa || (pa = 1, Object.defineProperty(Tr, "__esModule", { value: !0 }), Tr.PINO_CUSTOM_CONTEXT_KEY = Tr.PINO_LOGGER_DEFAULTS = void 0, Tr.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, Tr.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), Tr;
}
var Dt = {}, ga;
function Ed() {
  if (ga)
    return Dt;
  ga = 1, Object.defineProperty(Dt, "__esModule", { value: !0 }), Dt.generateChildLogger = Dt.formatChildLoggerContext = Dt.getLoggerContext = Dt.setBrowserLoggerContext = Dt.getBrowserLoggerContext = Dt.getDefaultLoggerOptions = void 0;
  const e = eu();
  function t(a) {
    return Object.assign(Object.assign({}, a), { level: (a == null ? void 0 : a.level) || e.PINO_LOGGER_DEFAULTS.level });
  }
  Dt.getDefaultLoggerOptions = t;
  function r(a, f = e.PINO_CUSTOM_CONTEXT_KEY) {
    return a[f] || "";
  }
  Dt.getBrowserLoggerContext = r;
  function n(a, f, l = e.PINO_CUSTOM_CONTEXT_KEY) {
    return a[l] = f, a;
  }
  Dt.setBrowserLoggerContext = n;
  function i(a, f = e.PINO_CUSTOM_CONTEXT_KEY) {
    let l = "";
    return typeof a.bindings > "u" ? l = r(a, f) : l = a.bindings().context || "", l;
  }
  Dt.getLoggerContext = i;
  function s(a, f, l = e.PINO_CUSTOM_CONTEXT_KEY) {
    const h = i(a, l);
    return h.trim() ? `${h}/${f}` : f;
  }
  Dt.formatChildLoggerContext = s;
  function o(a, f, l = e.PINO_CUSTOM_CONTEXT_KEY) {
    const h = s(a, f, l), y = a.child({ context: h });
    return n(y, h, l);
  }
  return Dt.generateChildLogger = o, Dt;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.pino = void 0;
  const t = vd, r = t.__importDefault(wd());
  Object.defineProperty(e, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), t.__exportStar(eu(), e), t.__exportStar(Ed(), e);
})(Re);
let Sd = class extends Fr {
  constructor(t) {
    super(), this.opts = t, this.protocol = "wc", this.version = 2;
  }
}, Dd = class extends Fr {
  constructor(t, r) {
    super(), this.core = t, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}, Od = class {
  constructor(t, r) {
    this.logger = t, this.core = r;
  }
}, xd = class extends Fr {
  constructor(t, r) {
    super(), this.relayer = t, this.logger = r;
  }
}, Id = class extends Fr {
  constructor(t) {
    super();
  }
}, Pd = class {
  constructor(t, r, n, i) {
    this.core = t, this.logger = r, this.name = n;
  }
}, Td = class extends Fr {
  constructor(t, r) {
    super(), this.relayer = t, this.logger = r;
  }
}, Rd = class extends Fr {
  constructor(t, r) {
    super(), this.core = t, this.logger = r;
  }
}, Ad = class {
  constructor(t, r) {
    this.projectId = t, this.logger = r;
  }
};
const Cd = (e) => JSON.stringify(e, (t, r) => typeof r == "bigint" ? r.toString() + "n" : r), Nd = (e) => {
  const t = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = e.replace(t, '$1"$2n"$3');
  return JSON.parse(r, (n, i) => typeof i == "string" && i.match(/^\d+n$/) ? BigInt(i.substring(0, i.length - 1)) : i);
};
function tu(e) {
  if (typeof e != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof e}`);
  try {
    return Nd(e);
  } catch {
    return e;
  }
}
function Ws(e) {
  return typeof e == "string" ? e : Cd(e) || "";
}
var Hs = {}, en = {}, yi = {}, _i = {};
Object.defineProperty(_i, "__esModule", { value: !0 });
_i.BrowserRandomSource = void 0;
const ya = 65536;
class $d {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const t = typeof self < "u" ? self.crypto || self.msCrypto : null;
    t && t.getRandomValues !== void 0 && (this._crypto = t, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(t) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const r = new Uint8Array(t);
    for (let n = 0; n < r.length; n += ya)
      this._crypto.getRandomValues(r.subarray(n, n + Math.min(r.length - n, ya)));
    return r;
  }
}
_i.BrowserRandomSource = $d;
function Ld(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var bi = {}, Ft = {};
Object.defineProperty(Ft, "__esModule", { value: !0 });
function jd(e) {
  for (var t = 0; t < e.length; t++)
    e[t] = 0;
  return e;
}
Ft.wipe = jd;
const Fd = {}, Ud = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fd
}, Symbol.toStringTag, { value: "Module" })), Md = /* @__PURE__ */ Lr(Ud);
Object.defineProperty(bi, "__esModule", { value: !0 });
bi.NodeRandomSource = void 0;
const Bd = Ft;
class qd {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof Ld < "u") {
      const t = Md;
      t && t.randomBytes && (this._crypto = t, this.isAvailable = !0, this.isInstantiated = !0);
    }
  }
  randomBytes(t) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Node.js random byte generator is not available.");
    let r = this._crypto.randomBytes(t);
    if (r.length !== t)
      throw new Error("NodeRandomSource: got fewer bytes than requested");
    const n = new Uint8Array(t);
    for (let i = 0; i < n.length; i++)
      n[i] = r[i];
    return (0, Bd.wipe)(r), n;
  }
}
bi.NodeRandomSource = qd;
Object.defineProperty(yi, "__esModule", { value: !0 });
yi.SystemRandomSource = void 0;
const zd = _i, Vd = bi;
class Kd {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new zd.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new Vd.NodeRandomSource(), this._source.isAvailable) {
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
yi.SystemRandomSource = Kd;
var le = {}, ru = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  function t(a, f) {
    var l = a >>> 16 & 65535, h = a & 65535, y = f >>> 16 & 65535, g = f & 65535;
    return h * g + (l * g + h * y << 16 >>> 0) | 0;
  }
  e.mul = Math.imul || t;
  function r(a, f) {
    return a + f | 0;
  }
  e.add = r;
  function n(a, f) {
    return a - f | 0;
  }
  e.sub = n;
  function i(a, f) {
    return a << f | a >>> 32 - f;
  }
  e.rotl = i;
  function s(a, f) {
    return a << 32 - f | a >>> f;
  }
  e.rotr = s;
  function o(a) {
    return typeof a == "number" && isFinite(a) && Math.floor(a) === a;
  }
  e.isInteger = Number.isInteger || o, e.MAX_SAFE_INTEGER = 9007199254740991, e.isSafeInteger = function(a) {
    return e.isInteger(a) && a >= -e.MAX_SAFE_INTEGER && a <= e.MAX_SAFE_INTEGER;
  };
})(ru);
Object.defineProperty(le, "__esModule", { value: !0 });
var nu = ru;
function Wd(e, t) {
  return t === void 0 && (t = 0), (e[t + 0] << 8 | e[t + 1]) << 16 >> 16;
}
le.readInt16BE = Wd;
function Hd(e, t) {
  return t === void 0 && (t = 0), (e[t + 0] << 8 | e[t + 1]) >>> 0;
}
le.readUint16BE = Hd;
function kd(e, t) {
  return t === void 0 && (t = 0), (e[t + 1] << 8 | e[t]) << 16 >> 16;
}
le.readInt16LE = kd;
function Gd(e, t) {
  return t === void 0 && (t = 0), (e[t + 1] << 8 | e[t]) >>> 0;
}
le.readUint16LE = Gd;
function iu(e, t, r) {
  return t === void 0 && (t = new Uint8Array(2)), r === void 0 && (r = 0), t[r + 0] = e >>> 8, t[r + 1] = e >>> 0, t;
}
le.writeUint16BE = iu;
le.writeInt16BE = iu;
function su(e, t, r) {
  return t === void 0 && (t = new Uint8Array(2)), r === void 0 && (r = 0), t[r + 0] = e >>> 0, t[r + 1] = e >>> 8, t;
}
le.writeUint16LE = su;
le.writeInt16LE = su;
function _s(e, t) {
  return t === void 0 && (t = 0), e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
}
le.readInt32BE = _s;
function bs(e, t) {
  return t === void 0 && (t = 0), (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0;
}
le.readUint32BE = bs;
function vs(e, t) {
  return t === void 0 && (t = 0), e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t];
}
le.readInt32LE = vs;
function ms(e, t) {
  return t === void 0 && (t = 0), (e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]) >>> 0;
}
le.readUint32LE = ms;
function ti(e, t, r) {
  return t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0), t[r + 0] = e >>> 24, t[r + 1] = e >>> 16, t[r + 2] = e >>> 8, t[r + 3] = e >>> 0, t;
}
le.writeUint32BE = ti;
le.writeInt32BE = ti;
function ri(e, t, r) {
  return t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0), t[r + 0] = e >>> 0, t[r + 1] = e >>> 8, t[r + 2] = e >>> 16, t[r + 3] = e >>> 24, t;
}
le.writeUint32LE = ri;
le.writeInt32LE = ri;
function Yd(e, t) {
  t === void 0 && (t = 0);
  var r = _s(e, t), n = _s(e, t + 4);
  return r * 4294967296 + n - (n >> 31) * 4294967296;
}
le.readInt64BE = Yd;
function Jd(e, t) {
  t === void 0 && (t = 0);
  var r = bs(e, t), n = bs(e, t + 4);
  return r * 4294967296 + n;
}
le.readUint64BE = Jd;
function Xd(e, t) {
  t === void 0 && (t = 0);
  var r = vs(e, t), n = vs(e, t + 4);
  return n * 4294967296 + r - (r >> 31) * 4294967296;
}
le.readInt64LE = Xd;
function Qd(e, t) {
  t === void 0 && (t = 0);
  var r = ms(e, t), n = ms(e, t + 4);
  return n * 4294967296 + r;
}
le.readUint64LE = Qd;
function ou(e, t, r) {
  return t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0), ti(e / 4294967296 >>> 0, t, r), ti(e >>> 0, t, r + 4), t;
}
le.writeUint64BE = ou;
le.writeInt64BE = ou;
function au(e, t, r) {
  return t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0), ri(e >>> 0, t, r), ri(e / 4294967296 >>> 0, t, r + 4), t;
}
le.writeUint64LE = au;
le.writeInt64LE = au;
function Zd(e, t, r) {
  if (r === void 0 && (r = 0), e % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (e / 8 > t.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var n = 0, i = 1, s = e / 8 + r - 1; s >= r; s--)
    n += t[s] * i, i *= 256;
  return n;
}
le.readUintBE = Zd;
function ep(e, t, r) {
  if (r === void 0 && (r = 0), e % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (e / 8 > t.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var n = 0, i = 1, s = r; s < r + e / 8; s++)
    n += t[s] * i, i *= 256;
  return n;
}
le.readUintLE = ep;
function tp(e, t, r, n) {
  if (r === void 0 && (r = new Uint8Array(e / 8)), n === void 0 && (n = 0), e % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!nu.isSafeInteger(t))
    throw new Error("writeUintBE value must be an integer");
  for (var i = 1, s = e / 8 + n - 1; s >= n; s--)
    r[s] = t / i & 255, i *= 256;
  return r;
}
le.writeUintBE = tp;
function rp(e, t, r, n) {
  if (r === void 0 && (r = new Uint8Array(e / 8)), n === void 0 && (n = 0), e % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!nu.isSafeInteger(t))
    throw new Error("writeUintLE value must be an integer");
  for (var i = 1, s = n; s < n + e / 8; s++)
    r[s] = t / i & 255, i *= 256;
  return r;
}
le.writeUintLE = rp;
function np(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat32(t);
}
le.readFloat32BE = np;
function ip(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat32(t, !0);
}
le.readFloat32LE = ip;
function sp(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat64(t);
}
le.readFloat64BE = sp;
function op(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat64(t, !0);
}
le.readFloat64LE = op;
function ap(e, t, r) {
  t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return n.setFloat32(r, e), t;
}
le.writeFloat32BE = ap;
function cp(e, t, r) {
  t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return n.setFloat32(r, e, !0), t;
}
le.writeFloat32LE = cp;
function up(e, t, r) {
  t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return n.setFloat64(r, e), t;
}
le.writeFloat64BE = up;
function lp(e, t, r) {
  t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return n.setFloat64(r, e, !0), t;
}
le.writeFloat64LE = lp;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.randomStringForEntropy = e.randomString = e.randomUint32 = e.randomBytes = e.defaultRandomSource = void 0;
  const t = yi, r = le, n = Ft;
  e.defaultRandomSource = new t.SystemRandomSource();
  function i(l, h = e.defaultRandomSource) {
    return h.randomBytes(l);
  }
  e.randomBytes = i;
  function s(l = e.defaultRandomSource) {
    const h = i(4, l), y = (0, r.readUint32LE)(h);
    return (0, n.wipe)(h), y;
  }
  e.randomUint32 = s;
  const o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function a(l, h = o, y = e.defaultRandomSource) {
    if (h.length < 2)
      throw new Error("randomString charset is too short");
    if (h.length > 256)
      throw new Error("randomString charset is too long");
    let g = "";
    const v = h.length, w = 256 - 256 % v;
    for (; l > 0; ) {
      const I = i(Math.ceil(l * 256 / w), y);
      for (let A = 0; A < I.length && l > 0; A++) {
        const U = I[A];
        U < w && (g += h.charAt(U % v), l--);
      }
      (0, n.wipe)(I);
    }
    return g;
  }
  e.randomString = a;
  function f(l, h = o, y = e.defaultRandomSource) {
    const g = Math.ceil(l / (Math.log(h.length) / Math.LN2));
    return a(g, h, y);
  }
  e.randomStringForEntropy = f;
})(en);
var cu = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = le, r = Ft;
  e.DIGEST_LENGTH = 64, e.BLOCK_SIZE = 128;
  var n = (
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
      }, a.prototype.update = function(f, l) {
        if (l === void 0 && (l = f.length), this._finished)
          throw new Error("SHA512: can't update because hash was finished.");
        var h = 0;
        if (this._bytesHashed += l, this._bufferLength > 0) {
          for (; this._bufferLength < e.BLOCK_SIZE && l > 0; )
            this._buffer[this._bufferLength++] = f[h++], l--;
          this._bufferLength === this.blockSize && (s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (l >= this.blockSize && (h = s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, f, h, l), l %= this.blockSize); l > 0; )
          this._buffer[this._bufferLength++] = f[h++], l--;
        return this;
      }, a.prototype.finish = function(f) {
        if (!this._finished) {
          var l = this._bytesHashed, h = this._bufferLength, y = l / 536870912 | 0, g = l << 3, v = l % 128 < 112 ? 128 : 256;
          this._buffer[h] = 128;
          for (var w = h + 1; w < v - 8; w++)
            this._buffer[w] = 0;
          t.writeUint32BE(y, this._buffer, v - 8), t.writeUint32BE(g, this._buffer, v - 4), s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, v), this._finished = !0;
        }
        for (var w = 0; w < this.digestLength / 8; w++)
          t.writeUint32BE(this._stateHi[w], f, w * 8), t.writeUint32BE(this._stateLo[w], f, w * 8 + 4);
        return this;
      }, a.prototype.digest = function() {
        var f = new Uint8Array(this.digestLength);
        return this.finish(f), f;
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
      }, a.prototype.restoreState = function(f) {
        return this._stateHi.set(f.stateHi), this._stateLo.set(f.stateLo), this._bufferLength = f.bufferLength, f.buffer && this._buffer.set(f.buffer), this._bytesHashed = f.bytesHashed, this._finished = !1, this;
      }, a.prototype.cleanSavedState = function(f) {
        r.wipe(f.stateHi), r.wipe(f.stateLo), f.buffer && r.wipe(f.buffer), f.bufferLength = 0, f.bytesHashed = 0;
      }, a;
    }()
  );
  e.SHA512 = n;
  var i = new Int32Array([
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
  function s(a, f, l, h, y, g, v) {
    for (var w = l[0], I = l[1], A = l[2], U = l[3], E = l[4], x = l[5], _ = l[6], S = l[7], d = h[0], c = h[1], p = h[2], $ = h[3], L = h[4], j = h[5], F = h[6], q = h[7], D, R, G, V, z, W, B, H; v >= 128; ) {
      for (var oe = 0; oe < 16; oe++) {
        var k = 8 * oe + g;
        a[oe] = t.readUint32BE(y, k), f[oe] = t.readUint32BE(y, k + 4);
      }
      for (var oe = 0; oe < 80; oe++) {
        var ne = w, Z = I, re = A, N = U, C = E, P = x, u = _, O = S, Y = d, Q = c, _e = p, be = $, he = L, xe = j, Be = F, $e = q;
        if (D = S, R = q, z = R & 65535, W = R >>> 16, B = D & 65535, H = D >>> 16, D = (E >>> 14 | L << 32 - 14) ^ (E >>> 18 | L << 32 - 18) ^ (L >>> 41 - 32 | E << 32 - (41 - 32)), R = (L >>> 14 | E << 32 - 14) ^ (L >>> 18 | E << 32 - 18) ^ (E >>> 41 - 32 | L << 32 - (41 - 32)), z += R & 65535, W += R >>> 16, B += D & 65535, H += D >>> 16, D = E & x ^ ~E & _, R = L & j ^ ~L & F, z += R & 65535, W += R >>> 16, B += D & 65535, H += D >>> 16, D = i[oe * 2], R = i[oe * 2 + 1], z += R & 65535, W += R >>> 16, B += D & 65535, H += D >>> 16, D = a[oe % 16], R = f[oe % 16], z += R & 65535, W += R >>> 16, B += D & 65535, H += D >>> 16, W += z >>> 16, B += W >>> 16, H += B >>> 16, G = B & 65535 | H << 16, V = z & 65535 | W << 16, D = G, R = V, z = R & 65535, W = R >>> 16, B = D & 65535, H = D >>> 16, D = (w >>> 28 | d << 32 - 28) ^ (d >>> 34 - 32 | w << 32 - (34 - 32)) ^ (d >>> 39 - 32 | w << 32 - (39 - 32)), R = (d >>> 28 | w << 32 - 28) ^ (w >>> 34 - 32 | d << 32 - (34 - 32)) ^ (w >>> 39 - 32 | d << 32 - (39 - 32)), z += R & 65535, W += R >>> 16, B += D & 65535, H += D >>> 16, D = w & I ^ w & A ^ I & A, R = d & c ^ d & p ^ c & p, z += R & 65535, W += R >>> 16, B += D & 65535, H += D >>> 16, W += z >>> 16, B += W >>> 16, H += B >>> 16, O = B & 65535 | H << 16, $e = z & 65535 | W << 16, D = N, R = be, z = R & 65535, W = R >>> 16, B = D & 65535, H = D >>> 16, D = G, R = V, z += R & 65535, W += R >>> 16, B += D & 65535, H += D >>> 16, W += z >>> 16, B += W >>> 16, H += B >>> 16, N = B & 65535 | H << 16, be = z & 65535 | W << 16, I = ne, A = Z, U = re, E = N, x = C, _ = P, S = u, w = O, c = Y, p = Q, $ = _e, L = be, j = he, F = xe, q = Be, d = $e, oe % 16 === 15)
          for (var k = 0; k < 16; k++)
            D = a[k], R = f[k], z = R & 65535, W = R >>> 16, B = D & 65535, H = D >>> 16, D = a[(k + 9) % 16], R = f[(k + 9) % 16], z += R & 65535, W += R >>> 16, B += D & 65535, H += D >>> 16, G = a[(k + 1) % 16], V = f[(k + 1) % 16], D = (G >>> 1 | V << 32 - 1) ^ (G >>> 8 | V << 32 - 8) ^ G >>> 7, R = (V >>> 1 | G << 32 - 1) ^ (V >>> 8 | G << 32 - 8) ^ (V >>> 7 | G << 32 - 7), z += R & 65535, W += R >>> 16, B += D & 65535, H += D >>> 16, G = a[(k + 14) % 16], V = f[(k + 14) % 16], D = (G >>> 19 | V << 32 - 19) ^ (V >>> 61 - 32 | G << 32 - (61 - 32)) ^ G >>> 6, R = (V >>> 19 | G << 32 - 19) ^ (G >>> 61 - 32 | V << 32 - (61 - 32)) ^ (V >>> 6 | G << 32 - 6), z += R & 65535, W += R >>> 16, B += D & 65535, H += D >>> 16, W += z >>> 16, B += W >>> 16, H += B >>> 16, a[k] = B & 65535 | H << 16, f[k] = z & 65535 | W << 16;
      }
      D = w, R = d, z = R & 65535, W = R >>> 16, B = D & 65535, H = D >>> 16, D = l[0], R = h[0], z += R & 65535, W += R >>> 16, B += D & 65535, H += D >>> 16, W += z >>> 16, B += W >>> 16, H += B >>> 16, l[0] = w = B & 65535 | H << 16, h[0] = d = z & 65535 | W << 16, D = I, R = c, z = R & 65535, W = R >>> 16, B = D & 65535, H = D >>> 16, D = l[1], R = h[1], z += R & 65535, W += R >>> 16, B += D & 65535, H += D >>> 16, W += z >>> 16, B += W >>> 16, H += B >>> 16, l[1] = I = B & 65535 | H << 16, h[1] = c = z & 65535 | W << 16, D = A, R = p, z = R & 65535, W = R >>> 16, B = D & 65535, H = D >>> 16, D = l[2], R = h[2], z += R & 65535, W += R >>> 16, B += D & 65535, H += D >>> 16, W += z >>> 16, B += W >>> 16, H += B >>> 16, l[2] = A = B & 65535 | H << 16, h[2] = p = z & 65535 | W << 16, D = U, R = $, z = R & 65535, W = R >>> 16, B = D & 65535, H = D >>> 16, D = l[3], R = h[3], z += R & 65535, W += R >>> 16, B += D & 65535, H += D >>> 16, W += z >>> 16, B += W >>> 16, H += B >>> 16, l[3] = U = B & 65535 | H << 16, h[3] = $ = z & 65535 | W << 16, D = E, R = L, z = R & 65535, W = R >>> 16, B = D & 65535, H = D >>> 16, D = l[4], R = h[4], z += R & 65535, W += R >>> 16, B += D & 65535, H += D >>> 16, W += z >>> 16, B += W >>> 16, H += B >>> 16, l[4] = E = B & 65535 | H << 16, h[4] = L = z & 65535 | W << 16, D = x, R = j, z = R & 65535, W = R >>> 16, B = D & 65535, H = D >>> 16, D = l[5], R = h[5], z += R & 65535, W += R >>> 16, B += D & 65535, H += D >>> 16, W += z >>> 16, B += W >>> 16, H += B >>> 16, l[5] = x = B & 65535 | H << 16, h[5] = j = z & 65535 | W << 16, D = _, R = F, z = R & 65535, W = R >>> 16, B = D & 65535, H = D >>> 16, D = l[6], R = h[6], z += R & 65535, W += R >>> 16, B += D & 65535, H += D >>> 16, W += z >>> 16, B += W >>> 16, H += B >>> 16, l[6] = _ = B & 65535 | H << 16, h[6] = F = z & 65535 | W << 16, D = S, R = q, z = R & 65535, W = R >>> 16, B = D & 65535, H = D >>> 16, D = l[7], R = h[7], z += R & 65535, W += R >>> 16, B += D & 65535, H += D >>> 16, W += z >>> 16, B += W >>> 16, H += B >>> 16, l[7] = S = B & 65535 | H << 16, h[7] = q = z & 65535 | W << 16, g += 128, v -= 128;
    }
    return g;
  }
  function o(a) {
    var f = new n();
    f.update(a);
    var l = f.digest();
    return f.clean(), l;
  }
  e.hash = o;
})(cu);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.convertSecretKeyToX25519 = e.convertPublicKeyToX25519 = e.verify = e.sign = e.extractPublicKeyFromSecretKey = e.generateKeyPair = e.generateKeyPairFromSeed = e.SEED_LENGTH = e.SECRET_KEY_LENGTH = e.PUBLIC_KEY_LENGTH = e.SIGNATURE_LENGTH = void 0;
  const t = en, r = cu, n = Ft;
  e.SIGNATURE_LENGTH = 64, e.PUBLIC_KEY_LENGTH = 32, e.SECRET_KEY_LENGTH = 64, e.SEED_LENGTH = 32;
  function i(N) {
    const C = new Float64Array(16);
    if (N)
      for (let P = 0; P < N.length; P++)
        C[P] = N[P];
    return C;
  }
  const s = new Uint8Array(32);
  s[0] = 9;
  const o = i(), a = i([1]), f = i([
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
  ]), l = i([
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
  ]), h = i([
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
  ]), y = i([
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
  ]), g = i([
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
  function v(N, C) {
    for (let P = 0; P < 16; P++)
      N[P] = C[P] | 0;
  }
  function w(N) {
    let C = 1;
    for (let P = 0; P < 16; P++) {
      let u = N[P] + C + 65535;
      C = Math.floor(u / 65536), N[P] = u - C * 65536;
    }
    N[0] += C - 1 + 37 * (C - 1);
  }
  function I(N, C, P) {
    const u = ~(P - 1);
    for (let O = 0; O < 16; O++) {
      const Y = u & (N[O] ^ C[O]);
      N[O] ^= Y, C[O] ^= Y;
    }
  }
  function A(N, C) {
    const P = i(), u = i();
    for (let O = 0; O < 16; O++)
      u[O] = C[O];
    w(u), w(u), w(u);
    for (let O = 0; O < 2; O++) {
      P[0] = u[0] - 65517;
      for (let Q = 1; Q < 15; Q++)
        P[Q] = u[Q] - 65535 - (P[Q - 1] >> 16 & 1), P[Q - 1] &= 65535;
      P[15] = u[15] - 32767 - (P[14] >> 16 & 1);
      const Y = P[15] >> 16 & 1;
      P[14] &= 65535, I(u, P, 1 - Y);
    }
    for (let O = 0; O < 16; O++)
      N[2 * O] = u[O] & 255, N[2 * O + 1] = u[O] >> 8;
  }
  function U(N, C) {
    let P = 0;
    for (let u = 0; u < 32; u++)
      P |= N[u] ^ C[u];
    return (1 & P - 1 >>> 8) - 1;
  }
  function E(N, C) {
    const P = new Uint8Array(32), u = new Uint8Array(32);
    return A(P, N), A(u, C), U(P, u);
  }
  function x(N) {
    const C = new Uint8Array(32);
    return A(C, N), C[0] & 1;
  }
  function _(N, C) {
    for (let P = 0; P < 16; P++)
      N[P] = C[2 * P] + (C[2 * P + 1] << 8);
    N[15] &= 32767;
  }
  function S(N, C, P) {
    for (let u = 0; u < 16; u++)
      N[u] = C[u] + P[u];
  }
  function d(N, C, P) {
    for (let u = 0; u < 16; u++)
      N[u] = C[u] - P[u];
  }
  function c(N, C, P) {
    let u, O, Y = 0, Q = 0, _e = 0, be = 0, he = 0, xe = 0, Be = 0, $e = 0, De = 0, we = 0, de = 0, ge = 0, pe = 0, ue = 0, ce = 0, ie = 0, ye = 0, ve = 0, ae = 0, Ee = 0, Ie = 0, Ae = 0, Ce = 0, Pe = 0, At = 0, Ut = 0, Xt = 0, ft = 0, Qt = 0, Mt = 0, ur = 0, qe = P[0], Fe = P[1], He = P[2], Ve = P[3], ke = P[4], Ue = P[5], Qe = P[6], tt = P[7], rt = P[8], Ze = P[9], nt = P[10], et = P[11], Ge = P[12], Le = P[13], m = P[14], M = P[15];
    u = C[0], Y += u * qe, Q += u * Fe, _e += u * He, be += u * Ve, he += u * ke, xe += u * Ue, Be += u * Qe, $e += u * tt, De += u * rt, we += u * Ze, de += u * nt, ge += u * et, pe += u * Ge, ue += u * Le, ce += u * m, ie += u * M, u = C[1], Q += u * qe, _e += u * Fe, be += u * He, he += u * Ve, xe += u * ke, Be += u * Ue, $e += u * Qe, De += u * tt, we += u * rt, de += u * Ze, ge += u * nt, pe += u * et, ue += u * Ge, ce += u * Le, ie += u * m, ye += u * M, u = C[2], _e += u * qe, be += u * Fe, he += u * He, xe += u * Ve, Be += u * ke, $e += u * Ue, De += u * Qe, we += u * tt, de += u * rt, ge += u * Ze, pe += u * nt, ue += u * et, ce += u * Ge, ie += u * Le, ye += u * m, ve += u * M, u = C[3], be += u * qe, he += u * Fe, xe += u * He, Be += u * Ve, $e += u * ke, De += u * Ue, we += u * Qe, de += u * tt, ge += u * rt, pe += u * Ze, ue += u * nt, ce += u * et, ie += u * Ge, ye += u * Le, ve += u * m, ae += u * M, u = C[4], he += u * qe, xe += u * Fe, Be += u * He, $e += u * Ve, De += u * ke, we += u * Ue, de += u * Qe, ge += u * tt, pe += u * rt, ue += u * Ze, ce += u * nt, ie += u * et, ye += u * Ge, ve += u * Le, ae += u * m, Ee += u * M, u = C[5], xe += u * qe, Be += u * Fe, $e += u * He, De += u * Ve, we += u * ke, de += u * Ue, ge += u * Qe, pe += u * tt, ue += u * rt, ce += u * Ze, ie += u * nt, ye += u * et, ve += u * Ge, ae += u * Le, Ee += u * m, Ie += u * M, u = C[6], Be += u * qe, $e += u * Fe, De += u * He, we += u * Ve, de += u * ke, ge += u * Ue, pe += u * Qe, ue += u * tt, ce += u * rt, ie += u * Ze, ye += u * nt, ve += u * et, ae += u * Ge, Ee += u * Le, Ie += u * m, Ae += u * M, u = C[7], $e += u * qe, De += u * Fe, we += u * He, de += u * Ve, ge += u * ke, pe += u * Ue, ue += u * Qe, ce += u * tt, ie += u * rt, ye += u * Ze, ve += u * nt, ae += u * et, Ee += u * Ge, Ie += u * Le, Ae += u * m, Ce += u * M, u = C[8], De += u * qe, we += u * Fe, de += u * He, ge += u * Ve, pe += u * ke, ue += u * Ue, ce += u * Qe, ie += u * tt, ye += u * rt, ve += u * Ze, ae += u * nt, Ee += u * et, Ie += u * Ge, Ae += u * Le, Ce += u * m, Pe += u * M, u = C[9], we += u * qe, de += u * Fe, ge += u * He, pe += u * Ve, ue += u * ke, ce += u * Ue, ie += u * Qe, ye += u * tt, ve += u * rt, ae += u * Ze, Ee += u * nt, Ie += u * et, Ae += u * Ge, Ce += u * Le, Pe += u * m, At += u * M, u = C[10], de += u * qe, ge += u * Fe, pe += u * He, ue += u * Ve, ce += u * ke, ie += u * Ue, ye += u * Qe, ve += u * tt, ae += u * rt, Ee += u * Ze, Ie += u * nt, Ae += u * et, Ce += u * Ge, Pe += u * Le, At += u * m, Ut += u * M, u = C[11], ge += u * qe, pe += u * Fe, ue += u * He, ce += u * Ve, ie += u * ke, ye += u * Ue, ve += u * Qe, ae += u * tt, Ee += u * rt, Ie += u * Ze, Ae += u * nt, Ce += u * et, Pe += u * Ge, At += u * Le, Ut += u * m, Xt += u * M, u = C[12], pe += u * qe, ue += u * Fe, ce += u * He, ie += u * Ve, ye += u * ke, ve += u * Ue, ae += u * Qe, Ee += u * tt, Ie += u * rt, Ae += u * Ze, Ce += u * nt, Pe += u * et, At += u * Ge, Ut += u * Le, Xt += u * m, ft += u * M, u = C[13], ue += u * qe, ce += u * Fe, ie += u * He, ye += u * Ve, ve += u * ke, ae += u * Ue, Ee += u * Qe, Ie += u * tt, Ae += u * rt, Ce += u * Ze, Pe += u * nt, At += u * et, Ut += u * Ge, Xt += u * Le, ft += u * m, Qt += u * M, u = C[14], ce += u * qe, ie += u * Fe, ye += u * He, ve += u * Ve, ae += u * ke, Ee += u * Ue, Ie += u * Qe, Ae += u * tt, Ce += u * rt, Pe += u * Ze, At += u * nt, Ut += u * et, Xt += u * Ge, ft += u * Le, Qt += u * m, Mt += u * M, u = C[15], ie += u * qe, ye += u * Fe, ve += u * He, ae += u * Ve, Ee += u * ke, Ie += u * Ue, Ae += u * Qe, Ce += u * tt, Pe += u * rt, At += u * Ze, Ut += u * nt, Xt += u * et, ft += u * Ge, Qt += u * Le, Mt += u * m, ur += u * M, Y += 38 * ye, Q += 38 * ve, _e += 38 * ae, be += 38 * Ee, he += 38 * Ie, xe += 38 * Ae, Be += 38 * Ce, $e += 38 * Pe, De += 38 * At, we += 38 * Ut, de += 38 * Xt, ge += 38 * ft, pe += 38 * Qt, ue += 38 * Mt, ce += 38 * ur, O = 1, u = Y + O + 65535, O = Math.floor(u / 65536), Y = u - O * 65536, u = Q + O + 65535, O = Math.floor(u / 65536), Q = u - O * 65536, u = _e + O + 65535, O = Math.floor(u / 65536), _e = u - O * 65536, u = be + O + 65535, O = Math.floor(u / 65536), be = u - O * 65536, u = he + O + 65535, O = Math.floor(u / 65536), he = u - O * 65536, u = xe + O + 65535, O = Math.floor(u / 65536), xe = u - O * 65536, u = Be + O + 65535, O = Math.floor(u / 65536), Be = u - O * 65536, u = $e + O + 65535, O = Math.floor(u / 65536), $e = u - O * 65536, u = De + O + 65535, O = Math.floor(u / 65536), De = u - O * 65536, u = we + O + 65535, O = Math.floor(u / 65536), we = u - O * 65536, u = de + O + 65535, O = Math.floor(u / 65536), de = u - O * 65536, u = ge + O + 65535, O = Math.floor(u / 65536), ge = u - O * 65536, u = pe + O + 65535, O = Math.floor(u / 65536), pe = u - O * 65536, u = ue + O + 65535, O = Math.floor(u / 65536), ue = u - O * 65536, u = ce + O + 65535, O = Math.floor(u / 65536), ce = u - O * 65536, u = ie + O + 65535, O = Math.floor(u / 65536), ie = u - O * 65536, Y += O - 1 + 37 * (O - 1), O = 1, u = Y + O + 65535, O = Math.floor(u / 65536), Y = u - O * 65536, u = Q + O + 65535, O = Math.floor(u / 65536), Q = u - O * 65536, u = _e + O + 65535, O = Math.floor(u / 65536), _e = u - O * 65536, u = be + O + 65535, O = Math.floor(u / 65536), be = u - O * 65536, u = he + O + 65535, O = Math.floor(u / 65536), he = u - O * 65536, u = xe + O + 65535, O = Math.floor(u / 65536), xe = u - O * 65536, u = Be + O + 65535, O = Math.floor(u / 65536), Be = u - O * 65536, u = $e + O + 65535, O = Math.floor(u / 65536), $e = u - O * 65536, u = De + O + 65535, O = Math.floor(u / 65536), De = u - O * 65536, u = we + O + 65535, O = Math.floor(u / 65536), we = u - O * 65536, u = de + O + 65535, O = Math.floor(u / 65536), de = u - O * 65536, u = ge + O + 65535, O = Math.floor(u / 65536), ge = u - O * 65536, u = pe + O + 65535, O = Math.floor(u / 65536), pe = u - O * 65536, u = ue + O + 65535, O = Math.floor(u / 65536), ue = u - O * 65536, u = ce + O + 65535, O = Math.floor(u / 65536), ce = u - O * 65536, u = ie + O + 65535, O = Math.floor(u / 65536), ie = u - O * 65536, Y += O - 1 + 37 * (O - 1), N[0] = Y, N[1] = Q, N[2] = _e, N[3] = be, N[4] = he, N[5] = xe, N[6] = Be, N[7] = $e, N[8] = De, N[9] = we, N[10] = de, N[11] = ge, N[12] = pe, N[13] = ue, N[14] = ce, N[15] = ie;
  }
  function p(N, C) {
    c(N, C, C);
  }
  function $(N, C) {
    const P = i();
    let u;
    for (u = 0; u < 16; u++)
      P[u] = C[u];
    for (u = 253; u >= 0; u--)
      p(P, P), u !== 2 && u !== 4 && c(P, P, C);
    for (u = 0; u < 16; u++)
      N[u] = P[u];
  }
  function L(N, C) {
    const P = i();
    let u;
    for (u = 0; u < 16; u++)
      P[u] = C[u];
    for (u = 250; u >= 0; u--)
      p(P, P), u !== 1 && c(P, P, C);
    for (u = 0; u < 16; u++)
      N[u] = P[u];
  }
  function j(N, C) {
    const P = i(), u = i(), O = i(), Y = i(), Q = i(), _e = i(), be = i(), he = i(), xe = i();
    d(P, N[1], N[0]), d(xe, C[1], C[0]), c(P, P, xe), S(u, N[0], N[1]), S(xe, C[0], C[1]), c(u, u, xe), c(O, N[3], C[3]), c(O, O, l), c(Y, N[2], C[2]), S(Y, Y, Y), d(Q, u, P), d(_e, Y, O), S(be, Y, O), S(he, u, P), c(N[0], Q, _e), c(N[1], he, be), c(N[2], be, _e), c(N[3], Q, he);
  }
  function F(N, C, P) {
    for (let u = 0; u < 4; u++)
      I(N[u], C[u], P);
  }
  function q(N, C) {
    const P = i(), u = i(), O = i();
    $(O, C[2]), c(P, C[0], O), c(u, C[1], O), A(N, u), N[31] ^= x(P) << 7;
  }
  function D(N, C, P) {
    v(N[0], o), v(N[1], a), v(N[2], a), v(N[3], o);
    for (let u = 255; u >= 0; --u) {
      const O = P[u / 8 | 0] >> (u & 7) & 1;
      F(N, C, O), j(C, N), j(N, N), F(N, C, O);
    }
  }
  function R(N, C) {
    const P = [i(), i(), i(), i()];
    v(P[0], h), v(P[1], y), v(P[2], a), c(P[3], h, y), D(N, P, C);
  }
  function G(N) {
    if (N.length !== e.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${e.SEED_LENGTH} bytes`);
    const C = (0, r.hash)(N);
    C[0] &= 248, C[31] &= 127, C[31] |= 64;
    const P = new Uint8Array(32), u = [i(), i(), i(), i()];
    R(u, C), q(P, u);
    const O = new Uint8Array(64);
    return O.set(N), O.set(P, 32), {
      publicKey: P,
      secretKey: O
    };
  }
  e.generateKeyPairFromSeed = G;
  function V(N) {
    const C = (0, t.randomBytes)(32, N), P = G(C);
    return (0, n.wipe)(C), P;
  }
  e.generateKeyPair = V;
  function z(N) {
    if (N.length !== e.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${e.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(N.subarray(32));
  }
  e.extractPublicKeyFromSecretKey = z;
  const W = new Float64Array([
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
  function B(N, C) {
    let P, u, O, Y;
    for (u = 63; u >= 32; --u) {
      for (P = 0, O = u - 32, Y = u - 12; O < Y; ++O)
        C[O] += P - 16 * C[u] * W[O - (u - 32)], P = Math.floor((C[O] + 128) / 256), C[O] -= P * 256;
      C[O] += P, C[u] = 0;
    }
    for (P = 0, O = 0; O < 32; O++)
      C[O] += P - (C[31] >> 4) * W[O], P = C[O] >> 8, C[O] &= 255;
    for (O = 0; O < 32; O++)
      C[O] -= P * W[O];
    for (u = 0; u < 32; u++)
      C[u + 1] += C[u] >> 8, N[u] = C[u] & 255;
  }
  function H(N) {
    const C = new Float64Array(64);
    for (let P = 0; P < 64; P++)
      C[P] = N[P];
    for (let P = 0; P < 64; P++)
      N[P] = 0;
    B(N, C);
  }
  function oe(N, C) {
    const P = new Float64Array(64), u = [i(), i(), i(), i()], O = (0, r.hash)(N.subarray(0, 32));
    O[0] &= 248, O[31] &= 127, O[31] |= 64;
    const Y = new Uint8Array(64);
    Y.set(O.subarray(32), 32);
    const Q = new r.SHA512();
    Q.update(Y.subarray(32)), Q.update(C);
    const _e = Q.digest();
    Q.clean(), H(_e), R(u, _e), q(Y, u), Q.reset(), Q.update(Y.subarray(0, 32)), Q.update(N.subarray(32)), Q.update(C);
    const be = Q.digest();
    H(be);
    for (let he = 0; he < 32; he++)
      P[he] = _e[he];
    for (let he = 0; he < 32; he++)
      for (let xe = 0; xe < 32; xe++)
        P[he + xe] += be[he] * O[xe];
    return B(Y.subarray(32), P), Y;
  }
  e.sign = oe;
  function k(N, C) {
    const P = i(), u = i(), O = i(), Y = i(), Q = i(), _e = i(), be = i();
    return v(N[2], a), _(N[1], C), p(O, N[1]), c(Y, O, f), d(O, O, N[2]), S(Y, N[2], Y), p(Q, Y), p(_e, Q), c(be, _e, Q), c(P, be, O), c(P, P, Y), L(P, P), c(P, P, O), c(P, P, Y), c(P, P, Y), c(N[0], P, Y), p(u, N[0]), c(u, u, Y), E(u, O) && c(N[0], N[0], g), p(u, N[0]), c(u, u, Y), E(u, O) ? -1 : (x(N[0]) === C[31] >> 7 && d(N[0], o, N[0]), c(N[3], N[0], N[1]), 0);
  }
  function ne(N, C, P) {
    const u = new Uint8Array(32), O = [i(), i(), i(), i()], Y = [i(), i(), i(), i()];
    if (P.length !== e.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${e.SIGNATURE_LENGTH} bytes`);
    if (k(Y, N))
      return !1;
    const Q = new r.SHA512();
    Q.update(P.subarray(0, 32)), Q.update(N), Q.update(C);
    const _e = Q.digest();
    return H(_e), D(O, Y, _e), R(Y, P.subarray(32)), j(O, Y), q(u, O), !U(P, u);
  }
  e.verify = ne;
  function Z(N) {
    let C = [i(), i(), i(), i()];
    if (k(C, N))
      throw new Error("Ed25519: invalid public key");
    let P = i(), u = i(), O = C[1];
    S(P, a, O), d(u, a, O), $(u, u), c(P, P, u);
    let Y = new Uint8Array(32);
    return A(Y, P), Y;
  }
  e.convertPublicKeyToX25519 = Z;
  function re(N) {
    const C = (0, r.hash)(N.subarray(0, 32));
    C[0] &= 248, C[31] &= 127, C[31] |= 64;
    const P = new Uint8Array(C.subarray(0, 32));
    return (0, n.wipe)(C), P;
  }
  e.convertSecretKeyToX25519 = re;
})(Hs);
const fp = "EdDSA", hp = "JWT", uu = ".", lu = "base64url", dp = "utf8", pp = "utf8", gp = ":", yp = "did", _p = "key", _a = "base58btc", bp = "z", vp = "K36", mp = 32;
function ks(e) {
  return globalThis.Buffer != null ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e;
}
function fu(e = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? ks(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e);
}
function ws(e, t) {
  t || (t = e.reduce((i, s) => i + s.length, 0));
  const r = fu(t);
  let n = 0;
  for (const i of e)
    r.set(i, n), n += i.length;
  return ks(r);
}
function wp(e, t) {
  if (e.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
    r[n] = 255;
  for (var i = 0; i < e.length; i++) {
    var s = e.charAt(i), o = s.charCodeAt(0);
    if (r[o] !== 255)
      throw new TypeError(s + " is ambiguous");
    r[o] = i;
  }
  var a = e.length, f = e.charAt(0), l = Math.log(a) / Math.log(256), h = Math.log(256) / Math.log(a);
  function y(w) {
    if (w instanceof Uint8Array || (ArrayBuffer.isView(w) ? w = new Uint8Array(w.buffer, w.byteOffset, w.byteLength) : Array.isArray(w) && (w = Uint8Array.from(w))), !(w instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (w.length === 0)
      return "";
    for (var I = 0, A = 0, U = 0, E = w.length; U !== E && w[U] === 0; )
      U++, I++;
    for (var x = (E - U) * h + 1 >>> 0, _ = new Uint8Array(x); U !== E; ) {
      for (var S = w[U], d = 0, c = x - 1; (S !== 0 || d < A) && c !== -1; c--, d++)
        S += 256 * _[c] >>> 0, _[c] = S % a >>> 0, S = S / a >>> 0;
      if (S !== 0)
        throw new Error("Non-zero carry");
      A = d, U++;
    }
    for (var p = x - A; p !== x && _[p] === 0; )
      p++;
    for (var $ = f.repeat(I); p < x; ++p)
      $ += e.charAt(_[p]);
    return $;
  }
  function g(w) {
    if (typeof w != "string")
      throw new TypeError("Expected String");
    if (w.length === 0)
      return new Uint8Array();
    var I = 0;
    if (w[I] !== " ") {
      for (var A = 0, U = 0; w[I] === f; )
        A++, I++;
      for (var E = (w.length - I) * l + 1 >>> 0, x = new Uint8Array(E); w[I]; ) {
        var _ = r[w.charCodeAt(I)];
        if (_ === 255)
          return;
        for (var S = 0, d = E - 1; (_ !== 0 || S < U) && d !== -1; d--, S++)
          _ += a * x[d] >>> 0, x[d] = _ % 256 >>> 0, _ = _ / 256 >>> 0;
        if (_ !== 0)
          throw new Error("Non-zero carry");
        U = S, I++;
      }
      if (w[I] !== " ") {
        for (var c = E - U; c !== E && x[c] === 0; )
          c++;
        for (var p = new Uint8Array(A + (E - c)), $ = A; c !== E; )
          p[$++] = x[c++];
        return p;
      }
    }
  }
  function v(w) {
    var I = g(w);
    if (I)
      return I;
    throw new Error(`Non-${t} character`);
  }
  return {
    encode: y,
    decodeUnsafe: g,
    decode: v
  };
}
var Ep = wp, Sp = Ep;
const Dp = (e) => {
  if (e instanceof Uint8Array && e.constructor.name === "Uint8Array")
    return e;
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  if (ArrayBuffer.isView(e))
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Op = (e) => new TextEncoder().encode(e), xp = (e) => new TextDecoder().decode(e);
class Ip {
  constructor(t, r, n) {
    this.name = t, this.prefix = r, this.baseEncode = n;
  }
  encode(t) {
    if (t instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Pp {
  constructor(t, r, n) {
    if (this.name = t, this.prefix = r, r.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = r.codePointAt(0), this.baseDecode = n;
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
    return hu(this, t);
  }
}
class Tp {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return hu(this, t);
  }
  decode(t) {
    const r = t[0], n = this.decoders[r];
    if (n)
      return n.decode(t);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const hu = (e, t) => new Tp({
  ...e.decoders || { [e.prefix]: e },
  ...t.decoders || { [t.prefix]: t }
});
class Rp {
  constructor(t, r, n, i) {
    this.name = t, this.prefix = r, this.baseEncode = n, this.baseDecode = i, this.encoder = new Ip(t, r, n), this.decoder = new Pp(t, r, i);
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const vi = ({ name: e, prefix: t, encode: r, decode: n }) => new Rp(e, t, r, n), Ln = ({ prefix: e, name: t, alphabet: r }) => {
  const { encode: n, decode: i } = Sp(r, t);
  return vi({
    prefix: e,
    name: t,
    encode: n,
    decode: (s) => Dp(i(s))
  });
}, Ap = (e, t, r, n) => {
  const i = {};
  for (let h = 0; h < t.length; ++h)
    i[t[h]] = h;
  let s = e.length;
  for (; e[s - 1] === "="; )
    --s;
  const o = new Uint8Array(s * r / 8 | 0);
  let a = 0, f = 0, l = 0;
  for (let h = 0; h < s; ++h) {
    const y = i[e[h]];
    if (y === void 0)
      throw new SyntaxError(`Non-${n} character`);
    f = f << r | y, a += r, a >= 8 && (a -= 8, o[l++] = 255 & f >> a);
  }
  if (a >= r || 255 & f << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return o;
}, Cp = (e, t, r) => {
  const n = t[t.length - 1] === "=", i = (1 << r) - 1;
  let s = "", o = 0, a = 0;
  for (let f = 0; f < e.length; ++f)
    for (a = a << 8 | e[f], o += 8; o > r; )
      o -= r, s += t[i & a >> o];
  if (o && (s += t[i & a << r - o]), n)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, yt = ({ name: e, prefix: t, bitsPerChar: r, alphabet: n }) => vi({
  prefix: t,
  name: e,
  encode(i) {
    return Cp(i, n, r);
  },
  decode(i) {
    return Ap(i, n, r, e);
  }
}), Np = vi({
  prefix: "\0",
  name: "identity",
  encode: (e) => xp(e),
  decode: (e) => Op(e)
}), $p = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: Np
}, Symbol.toStringTag, { value: "Module" })), Lp = yt({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), jp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: Lp
}, Symbol.toStringTag, { value: "Module" })), Fp = yt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), Up = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: Fp
}, Symbol.toStringTag, { value: "Module" })), Mp = Ln({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), Bp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: Mp
}, Symbol.toStringTag, { value: "Module" })), qp = yt({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), zp = yt({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), Vp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: qp,
  base16upper: zp
}, Symbol.toStringTag, { value: "Module" })), Kp = yt({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), Wp = yt({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), Hp = yt({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), kp = yt({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), Gp = yt({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), Yp = yt({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), Jp = yt({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), Xp = yt({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), Qp = yt({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), Zp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: Kp,
  base32hex: Gp,
  base32hexpad: Jp,
  base32hexpadupper: Xp,
  base32hexupper: Yp,
  base32pad: Hp,
  base32padupper: kp,
  base32upper: Wp,
  base32z: Qp
}, Symbol.toStringTag, { value: "Module" })), eg = Ln({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), tg = Ln({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), rg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: eg,
  base36upper: tg
}, Symbol.toStringTag, { value: "Module" })), ng = Ln({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), ig = Ln({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), sg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: ng,
  base58flickr: ig
}, Symbol.toStringTag, { value: "Module" })), og = yt({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), ag = yt({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), cg = yt({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), ug = yt({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), lg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: og,
  base64pad: ag,
  base64url: cg,
  base64urlpad: ug
}, Symbol.toStringTag, { value: "Module" })), du = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), fg = du.reduce((e, t, r) => (e[r] = t, e), []), hg = du.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []);
function dg(e) {
  return e.reduce((t, r) => (t += fg[r], t), "");
}
function pg(e) {
  const t = [];
  for (const r of e) {
    const n = hg[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    t.push(n);
  }
  return new Uint8Array(t);
}
const gg = vi({
  prefix: "🚀",
  name: "base256emoji",
  encode: dg,
  decode: pg
}), yg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: gg
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const ba = {
  ...$p,
  ...jp,
  ...Up,
  ...Bp,
  ...Vp,
  ...Zp,
  ...rg,
  ...sg,
  ...lg,
  ...yg
};
function pu(e, t, r, n) {
  return {
    name: e,
    prefix: t,
    encoder: {
      name: e,
      prefix: t,
      encode: r
    },
    decoder: { decode: n }
  };
}
const va = pu("utf8", "u", (e) => "u" + new TextDecoder("utf8").decode(e), (e) => new TextEncoder().encode(e.substring(1))), Ui = pu("ascii", "a", (e) => {
  let t = "a";
  for (let r = 0; r < e.length; r++)
    t += String.fromCharCode(e[r]);
  return t;
}, (e) => {
  e = e.substring(1);
  const t = fu(e.length);
  for (let r = 0; r < e.length; r++)
    t[r] = e.charCodeAt(r);
  return t;
}), gu = {
  utf8: va,
  "utf-8": va,
  hex: ba.base16,
  latin1: Ui,
  ascii: Ui,
  binary: Ui,
  ...ba
};
function Pt(e, t = "utf8") {
  const r = gu[t];
  if (!r)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8") : r.encoder.encode(e).substring(1);
}
function Rt(e, t = "utf8") {
  const r = gu[t];
  if (!r)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? ks(globalThis.Buffer.from(e, "utf-8")) : r.decoder.decode(`${r.prefix}${e}`);
}
function ni(e) {
  return Pt(Rt(Ws(e), dp), lu);
}
function yu(e) {
  const t = Rt(vp, _a), r = bp + Pt(ws([t, e]), _a);
  return [yp, _p, r].join(gp);
}
function _g(e) {
  return Pt(e, lu);
}
function bg(e) {
  return Rt([ni(e.header), ni(e.payload)].join(uu), pp);
}
function vg(e) {
  return [
    ni(e.header),
    ni(e.payload),
    _g(e.signature)
  ].join(uu);
}
function ma(e = en.randomBytes(mp)) {
  return Hs.generateKeyPairFromSeed(e);
}
async function mg(e, t, r, n, i = te.fromMiliseconds(Date.now())) {
  const s = { alg: fp, typ: hp }, o = yu(n.publicKey), a = i + r, f = { iss: o, sub: e, aud: t, iat: i, exp: a }, l = bg({ header: s, payload: f }), h = Hs.sign(n.secretKey, l);
  return vg({ header: s, payload: f, signature: h });
}
var Gs = {}, mi = {};
Object.defineProperty(mi, "__esModule", { value: !0 });
var mt = le, Es = Ft, wg = 20;
function Eg(e, t, r) {
  for (var n = 1634760805, i = 857760878, s = 2036477234, o = 1797285236, a = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], f = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], l = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], h = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], y = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], g = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], v = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], w = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], I = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], A = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4], U = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8], E = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12], x = n, _ = i, S = s, d = o, c = a, p = f, $ = l, L = h, j = y, F = g, q = v, D = w, R = I, G = A, V = U, z = E, W = 0; W < wg; W += 2)
    x = x + c | 0, R ^= x, R = R >>> 32 - 16 | R << 16, j = j + R | 0, c ^= j, c = c >>> 32 - 12 | c << 12, _ = _ + p | 0, G ^= _, G = G >>> 32 - 16 | G << 16, F = F + G | 0, p ^= F, p = p >>> 32 - 12 | p << 12, S = S + $ | 0, V ^= S, V = V >>> 32 - 16 | V << 16, q = q + V | 0, $ ^= q, $ = $ >>> 32 - 12 | $ << 12, d = d + L | 0, z ^= d, z = z >>> 32 - 16 | z << 16, D = D + z | 0, L ^= D, L = L >>> 32 - 12 | L << 12, S = S + $ | 0, V ^= S, V = V >>> 32 - 8 | V << 8, q = q + V | 0, $ ^= q, $ = $ >>> 32 - 7 | $ << 7, d = d + L | 0, z ^= d, z = z >>> 32 - 8 | z << 8, D = D + z | 0, L ^= D, L = L >>> 32 - 7 | L << 7, _ = _ + p | 0, G ^= _, G = G >>> 32 - 8 | G << 8, F = F + G | 0, p ^= F, p = p >>> 32 - 7 | p << 7, x = x + c | 0, R ^= x, R = R >>> 32 - 8 | R << 8, j = j + R | 0, c ^= j, c = c >>> 32 - 7 | c << 7, x = x + p | 0, z ^= x, z = z >>> 32 - 16 | z << 16, q = q + z | 0, p ^= q, p = p >>> 32 - 12 | p << 12, _ = _ + $ | 0, R ^= _, R = R >>> 32 - 16 | R << 16, D = D + R | 0, $ ^= D, $ = $ >>> 32 - 12 | $ << 12, S = S + L | 0, G ^= S, G = G >>> 32 - 16 | G << 16, j = j + G | 0, L ^= j, L = L >>> 32 - 12 | L << 12, d = d + c | 0, V ^= d, V = V >>> 32 - 16 | V << 16, F = F + V | 0, c ^= F, c = c >>> 32 - 12 | c << 12, S = S + L | 0, G ^= S, G = G >>> 32 - 8 | G << 8, j = j + G | 0, L ^= j, L = L >>> 32 - 7 | L << 7, d = d + c | 0, V ^= d, V = V >>> 32 - 8 | V << 8, F = F + V | 0, c ^= F, c = c >>> 32 - 7 | c << 7, _ = _ + $ | 0, R ^= _, R = R >>> 32 - 8 | R << 8, D = D + R | 0, $ ^= D, $ = $ >>> 32 - 7 | $ << 7, x = x + p | 0, z ^= x, z = z >>> 32 - 8 | z << 8, q = q + z | 0, p ^= q, p = p >>> 32 - 7 | p << 7;
  mt.writeUint32LE(x + n | 0, e, 0), mt.writeUint32LE(_ + i | 0, e, 4), mt.writeUint32LE(S + s | 0, e, 8), mt.writeUint32LE(d + o | 0, e, 12), mt.writeUint32LE(c + a | 0, e, 16), mt.writeUint32LE(p + f | 0, e, 20), mt.writeUint32LE($ + l | 0, e, 24), mt.writeUint32LE(L + h | 0, e, 28), mt.writeUint32LE(j + y | 0, e, 32), mt.writeUint32LE(F + g | 0, e, 36), mt.writeUint32LE(q + v | 0, e, 40), mt.writeUint32LE(D + w | 0, e, 44), mt.writeUint32LE(R + I | 0, e, 48), mt.writeUint32LE(G + A | 0, e, 52), mt.writeUint32LE(V + U | 0, e, 56), mt.writeUint32LE(z + E | 0, e, 60);
}
function _u(e, t, r, n, i) {
  if (i === void 0 && (i = 0), e.length !== 32)
    throw new Error("ChaCha: key size must be 32 bytes");
  if (n.length < r.length)
    throw new Error("ChaCha: destination is shorter than source");
  var s, o;
  if (i === 0) {
    if (t.length !== 8 && t.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    s = new Uint8Array(16), o = s.length - t.length, s.set(t, o);
  } else {
    if (t.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    s = t, o = i;
  }
  for (var a = new Uint8Array(64), f = 0; f < r.length; f += 64) {
    Eg(a, s, e);
    for (var l = f; l < f + 64 && l < r.length; l++)
      n[l] = r[l] ^ a[l - f];
    Dg(s, 0, o);
  }
  return Es.wipe(a), i === 0 && Es.wipe(s), n;
}
mi.streamXOR = _u;
function Sg(e, t, r, n) {
  return n === void 0 && (n = 0), Es.wipe(r), _u(e, t, r, r, n);
}
mi.stream = Sg;
function Dg(e, t, r) {
  for (var n = 1; r--; )
    n = n + (e[t] & 255) | 0, e[t] = n & 255, n >>>= 8, t++;
  if (n > 0)
    throw new Error("ChaCha: counter overflow");
}
var bu = {}, vr = {};
Object.defineProperty(vr, "__esModule", { value: !0 });
function Og(e, t, r) {
  return ~(e - 1) & t | e - 1 & r;
}
vr.select = Og;
function xg(e, t) {
  return (e | 0) - (t | 0) - 1 >>> 31 & 1;
}
vr.lessOrEqual = xg;
function vu(e, t) {
  if (e.length !== t.length)
    return 0;
  for (var r = 0, n = 0; n < e.length; n++)
    r |= e[n] ^ t[n];
  return 1 & r - 1 >>> 8;
}
vr.compare = vu;
function Ig(e, t) {
  return e.length === 0 || t.length === 0 ? !1 : vu(e, t) !== 0;
}
vr.equal = Ig;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = vr, r = Ft;
  e.DIGEST_LENGTH = 16;
  var n = (
    /** @class */
    function() {
      function o(a) {
        this.digestLength = e.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
        var f = a[0] | a[1] << 8;
        this._r[0] = f & 8191;
        var l = a[2] | a[3] << 8;
        this._r[1] = (f >>> 13 | l << 3) & 8191;
        var h = a[4] | a[5] << 8;
        this._r[2] = (l >>> 10 | h << 6) & 7939;
        var y = a[6] | a[7] << 8;
        this._r[3] = (h >>> 7 | y << 9) & 8191;
        var g = a[8] | a[9] << 8;
        this._r[4] = (y >>> 4 | g << 12) & 255, this._r[5] = g >>> 1 & 8190;
        var v = a[10] | a[11] << 8;
        this._r[6] = (g >>> 14 | v << 2) & 8191;
        var w = a[12] | a[13] << 8;
        this._r[7] = (v >>> 11 | w << 5) & 8065;
        var I = a[14] | a[15] << 8;
        this._r[8] = (w >>> 8 | I << 8) & 8191, this._r[9] = I >>> 5 & 127, this._pad[0] = a[16] | a[17] << 8, this._pad[1] = a[18] | a[19] << 8, this._pad[2] = a[20] | a[21] << 8, this._pad[3] = a[22] | a[23] << 8, this._pad[4] = a[24] | a[25] << 8, this._pad[5] = a[26] | a[27] << 8, this._pad[6] = a[28] | a[29] << 8, this._pad[7] = a[30] | a[31] << 8;
      }
      return o.prototype._blocks = function(a, f, l) {
        for (var h = this._fin ? 0 : 2048, y = this._h[0], g = this._h[1], v = this._h[2], w = this._h[3], I = this._h[4], A = this._h[5], U = this._h[6], E = this._h[7], x = this._h[8], _ = this._h[9], S = this._r[0], d = this._r[1], c = this._r[2], p = this._r[3], $ = this._r[4], L = this._r[5], j = this._r[6], F = this._r[7], q = this._r[8], D = this._r[9]; l >= 16; ) {
          var R = a[f + 0] | a[f + 1] << 8;
          y += R & 8191;
          var G = a[f + 2] | a[f + 3] << 8;
          g += (R >>> 13 | G << 3) & 8191;
          var V = a[f + 4] | a[f + 5] << 8;
          v += (G >>> 10 | V << 6) & 8191;
          var z = a[f + 6] | a[f + 7] << 8;
          w += (V >>> 7 | z << 9) & 8191;
          var W = a[f + 8] | a[f + 9] << 8;
          I += (z >>> 4 | W << 12) & 8191, A += W >>> 1 & 8191;
          var B = a[f + 10] | a[f + 11] << 8;
          U += (W >>> 14 | B << 2) & 8191;
          var H = a[f + 12] | a[f + 13] << 8;
          E += (B >>> 11 | H << 5) & 8191;
          var oe = a[f + 14] | a[f + 15] << 8;
          x += (H >>> 8 | oe << 8) & 8191, _ += oe >>> 5 | h;
          var k = 0, ne = k;
          ne += y * S, ne += g * (5 * D), ne += v * (5 * q), ne += w * (5 * F), ne += I * (5 * j), k = ne >>> 13, ne &= 8191, ne += A * (5 * L), ne += U * (5 * $), ne += E * (5 * p), ne += x * (5 * c), ne += _ * (5 * d), k += ne >>> 13, ne &= 8191;
          var Z = k;
          Z += y * d, Z += g * S, Z += v * (5 * D), Z += w * (5 * q), Z += I * (5 * F), k = Z >>> 13, Z &= 8191, Z += A * (5 * j), Z += U * (5 * L), Z += E * (5 * $), Z += x * (5 * p), Z += _ * (5 * c), k += Z >>> 13, Z &= 8191;
          var re = k;
          re += y * c, re += g * d, re += v * S, re += w * (5 * D), re += I * (5 * q), k = re >>> 13, re &= 8191, re += A * (5 * F), re += U * (5 * j), re += E * (5 * L), re += x * (5 * $), re += _ * (5 * p), k += re >>> 13, re &= 8191;
          var N = k;
          N += y * p, N += g * c, N += v * d, N += w * S, N += I * (5 * D), k = N >>> 13, N &= 8191, N += A * (5 * q), N += U * (5 * F), N += E * (5 * j), N += x * (5 * L), N += _ * (5 * $), k += N >>> 13, N &= 8191;
          var C = k;
          C += y * $, C += g * p, C += v * c, C += w * d, C += I * S, k = C >>> 13, C &= 8191, C += A * (5 * D), C += U * (5 * q), C += E * (5 * F), C += x * (5 * j), C += _ * (5 * L), k += C >>> 13, C &= 8191;
          var P = k;
          P += y * L, P += g * $, P += v * p, P += w * c, P += I * d, k = P >>> 13, P &= 8191, P += A * S, P += U * (5 * D), P += E * (5 * q), P += x * (5 * F), P += _ * (5 * j), k += P >>> 13, P &= 8191;
          var u = k;
          u += y * j, u += g * L, u += v * $, u += w * p, u += I * c, k = u >>> 13, u &= 8191, u += A * d, u += U * S, u += E * (5 * D), u += x * (5 * q), u += _ * (5 * F), k += u >>> 13, u &= 8191;
          var O = k;
          O += y * F, O += g * j, O += v * L, O += w * $, O += I * p, k = O >>> 13, O &= 8191, O += A * c, O += U * d, O += E * S, O += x * (5 * D), O += _ * (5 * q), k += O >>> 13, O &= 8191;
          var Y = k;
          Y += y * q, Y += g * F, Y += v * j, Y += w * L, Y += I * $, k = Y >>> 13, Y &= 8191, Y += A * p, Y += U * c, Y += E * d, Y += x * S, Y += _ * (5 * D), k += Y >>> 13, Y &= 8191;
          var Q = k;
          Q += y * D, Q += g * q, Q += v * F, Q += w * j, Q += I * L, k = Q >>> 13, Q &= 8191, Q += A * $, Q += U * p, Q += E * c, Q += x * d, Q += _ * S, k += Q >>> 13, Q &= 8191, k = (k << 2) + k | 0, k = k + ne | 0, ne = k & 8191, k = k >>> 13, Z += k, y = ne, g = Z, v = re, w = N, I = C, A = P, U = u, E = O, x = Y, _ = Q, f += 16, l -= 16;
        }
        this._h[0] = y, this._h[1] = g, this._h[2] = v, this._h[3] = w, this._h[4] = I, this._h[5] = A, this._h[6] = U, this._h[7] = E, this._h[8] = x, this._h[9] = _;
      }, o.prototype.finish = function(a, f) {
        f === void 0 && (f = 0);
        var l = new Uint16Array(10), h, y, g, v;
        if (this._leftover) {
          for (v = this._leftover, this._buffer[v++] = 1; v < 16; v++)
            this._buffer[v] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (h = this._h[1] >>> 13, this._h[1] &= 8191, v = 2; v < 10; v++)
          this._h[v] += h, h = this._h[v] >>> 13, this._h[v] &= 8191;
        for (this._h[0] += h * 5, h = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += h, h = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += h, l[0] = this._h[0] + 5, h = l[0] >>> 13, l[0] &= 8191, v = 1; v < 10; v++)
          l[v] = this._h[v] + h, h = l[v] >>> 13, l[v] &= 8191;
        for (l[9] -= 8192, y = (h ^ 1) - 1, v = 0; v < 10; v++)
          l[v] &= y;
        for (y = ~y, v = 0; v < 10; v++)
          this._h[v] = this._h[v] & y | l[v];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, g = this._h[0] + this._pad[0], this._h[0] = g & 65535, v = 1; v < 8; v++)
          g = (this._h[v] + this._pad[v] | 0) + (g >>> 16) | 0, this._h[v] = g & 65535;
        return a[f + 0] = this._h[0] >>> 0, a[f + 1] = this._h[0] >>> 8, a[f + 2] = this._h[1] >>> 0, a[f + 3] = this._h[1] >>> 8, a[f + 4] = this._h[2] >>> 0, a[f + 5] = this._h[2] >>> 8, a[f + 6] = this._h[3] >>> 0, a[f + 7] = this._h[3] >>> 8, a[f + 8] = this._h[4] >>> 0, a[f + 9] = this._h[4] >>> 8, a[f + 10] = this._h[5] >>> 0, a[f + 11] = this._h[5] >>> 8, a[f + 12] = this._h[6] >>> 0, a[f + 13] = this._h[6] >>> 8, a[f + 14] = this._h[7] >>> 0, a[f + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, o.prototype.update = function(a) {
        var f = 0, l = a.length, h;
        if (this._leftover) {
          h = 16 - this._leftover, h > l && (h = l);
          for (var y = 0; y < h; y++)
            this._buffer[this._leftover + y] = a[f + y];
          if (l -= h, f += h, this._leftover += h, this._leftover < 16)
            return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (l >= 16 && (h = l - l % 16, this._blocks(a, f, h), f += h, l -= h), l) {
          for (var y = 0; y < l; y++)
            this._buffer[this._leftover + y] = a[f + y];
          this._leftover += l;
        }
        return this;
      }, o.prototype.digest = function() {
        if (this._finished)
          throw new Error("Poly1305 was finished");
        var a = new Uint8Array(16);
        return this.finish(a), a;
      }, o.prototype.clean = function() {
        return r.wipe(this._buffer), r.wipe(this._r), r.wipe(this._h), r.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this;
      }, o;
    }()
  );
  e.Poly1305 = n;
  function i(o, a) {
    var f = new n(o);
    f.update(a);
    var l = f.digest();
    return f.clean(), l;
  }
  e.oneTimeAuth = i;
  function s(o, a) {
    return o.length !== e.DIGEST_LENGTH || a.length !== e.DIGEST_LENGTH ? !1 : t.equal(o, a);
  }
  e.equal = s;
})(bu);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = mi, r = bu, n = Ft, i = le, s = vr;
  e.KEY_LENGTH = 32, e.NONCE_LENGTH = 12, e.TAG_LENGTH = 16;
  var o = new Uint8Array(16), a = (
    /** @class */
    function() {
      function f(l) {
        if (this.nonceLength = e.NONCE_LENGTH, this.tagLength = e.TAG_LENGTH, l.length !== e.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(l);
      }
      return f.prototype.seal = function(l, h, y, g) {
        if (l.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var v = new Uint8Array(16);
        v.set(l, v.length - l.length);
        var w = new Uint8Array(32);
        t.stream(this._key, v, w, 4);
        var I = h.length + this.tagLength, A;
        if (g) {
          if (g.length !== I)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          A = g;
        } else
          A = new Uint8Array(I);
        return t.streamXOR(this._key, v, h, A, 4), this._authenticate(A.subarray(A.length - this.tagLength, A.length), w, A.subarray(0, A.length - this.tagLength), y), n.wipe(v), A;
      }, f.prototype.open = function(l, h, y, g) {
        if (l.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (h.length < this.tagLength)
          return null;
        var v = new Uint8Array(16);
        v.set(l, v.length - l.length);
        var w = new Uint8Array(32);
        t.stream(this._key, v, w, 4);
        var I = new Uint8Array(this.tagLength);
        if (this._authenticate(I, w, h.subarray(0, h.length - this.tagLength), y), !s.equal(I, h.subarray(h.length - this.tagLength, h.length)))
          return null;
        var A = h.length - this.tagLength, U;
        if (g) {
          if (g.length !== A)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          U = g;
        } else
          U = new Uint8Array(A);
        return t.streamXOR(this._key, v, h.subarray(0, h.length - this.tagLength), U, 4), n.wipe(v), U;
      }, f.prototype.clean = function() {
        return n.wipe(this._key), this;
      }, f.prototype._authenticate = function(l, h, y, g) {
        var v = new r.Poly1305(h);
        g && (v.update(g), g.length % 16 > 0 && v.update(o.subarray(g.length % 16))), v.update(y), y.length % 16 > 0 && v.update(o.subarray(y.length % 16));
        var w = new Uint8Array(8);
        g && i.writeUint64LE(g.length, w), v.update(w), i.writeUint64LE(y.length, w), v.update(w);
        for (var I = v.digest(), A = 0; A < I.length; A++)
          l[A] = I[A];
        v.clean(), n.wipe(I), n.wipe(w);
      }, f;
    }()
  );
  e.ChaCha20Poly1305 = a;
})(Gs);
var mu = {}, jn = {}, Ys = {};
Object.defineProperty(Ys, "__esModule", { value: !0 });
function Pg(e) {
  return typeof e.saveState < "u" && typeof e.restoreState < "u" && typeof e.cleanSavedState < "u";
}
Ys.isSerializableHash = Pg;
Object.defineProperty(jn, "__esModule", { value: !0 });
var tr = Ys, Tg = vr, Rg = Ft, wu = (
  /** @class */
  function() {
    function e(t, r) {
      this._finished = !1, this._inner = new t(), this._outer = new t(), this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
      var n = new Uint8Array(this.blockSize);
      r.length > this.blockSize ? this._inner.update(r).finish(n).clean() : n.set(r);
      for (var i = 0; i < n.length; i++)
        n[i] ^= 54;
      this._inner.update(n);
      for (var i = 0; i < n.length; i++)
        n[i] ^= 106;
      this._outer.update(n), tr.isSerializableHash(this._inner) && tr.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), Rg.wipe(n);
    }
    return e.prototype.reset = function() {
      if (!tr.isSerializableHash(this._inner) || !tr.isSerializableHash(this._outer))
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, e.prototype.clean = function() {
      tr.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), tr.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
    }, e.prototype.update = function(t) {
      return this._inner.update(t), this;
    }, e.prototype.finish = function(t) {
      return this._finished ? (this._outer.finish(t), this) : (this._inner.finish(t), this._outer.update(t.subarray(0, this.digestLength)).finish(t), this._finished = !0, this);
    }, e.prototype.digest = function() {
      var t = new Uint8Array(this.digestLength);
      return this.finish(t), t;
    }, e.prototype.saveState = function() {
      if (!tr.isSerializableHash(this._inner))
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      return this._inner.saveState();
    }, e.prototype.restoreState = function(t) {
      if (!tr.isSerializableHash(this._inner) || !tr.isSerializableHash(this._outer))
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      return this._inner.restoreState(t), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, e.prototype.cleanSavedState = function(t) {
      if (!tr.isSerializableHash(this._inner))
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      this._inner.cleanSavedState(t);
    }, e;
  }()
);
jn.HMAC = wu;
function Ag(e, t, r) {
  var n = new wu(e, t);
  n.update(r);
  var i = n.digest();
  return n.clean(), i;
}
jn.hmac = Ag;
jn.equal = Tg.equal;
Object.defineProperty(mu, "__esModule", { value: !0 });
var wa = jn, Ea = Ft, Cg = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      n === void 0 && (n = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = t, this._info = i;
      var s = wa.hmac(this._hash, n, r);
      this._hmac = new wa.HMAC(t, s), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
    }
    return e.prototype._fillBuffer = function() {
      this._counter[0]++;
      var t = this._counter[0];
      if (t === 0)
        throw new Error("hkdf: cannot expand more");
      this._hmac.reset(), t > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0;
    }, e.prototype.expand = function(t) {
      for (var r = new Uint8Array(t), n = 0; n < r.length; n++)
        this._bufpos === this._buffer.length && this._fillBuffer(), r[n] = this._buffer[this._bufpos++];
      return r;
    }, e.prototype.clean = function() {
      this._hmac.clean(), Ea.wipe(this._buffer), Ea.wipe(this._counter), this._bufpos = 0;
    }, e;
  }()
), Ng = mu.HKDF = Cg, wi = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = le, r = Ft;
  e.DIGEST_LENGTH = 32, e.BLOCK_SIZE = 64;
  var n = (
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
      }, a.prototype.update = function(f, l) {
        if (l === void 0 && (l = f.length), this._finished)
          throw new Error("SHA256: can't update because hash was finished.");
        var h = 0;
        if (this._bytesHashed += l, this._bufferLength > 0) {
          for (; this._bufferLength < this.blockSize && l > 0; )
            this._buffer[this._bufferLength++] = f[h++], l--;
          this._bufferLength === this.blockSize && (s(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (l >= this.blockSize && (h = s(this._temp, this._state, f, h, l), l %= this.blockSize); l > 0; )
          this._buffer[this._bufferLength++] = f[h++], l--;
        return this;
      }, a.prototype.finish = function(f) {
        if (!this._finished) {
          var l = this._bytesHashed, h = this._bufferLength, y = l / 536870912 | 0, g = l << 3, v = l % 64 < 56 ? 64 : 128;
          this._buffer[h] = 128;
          for (var w = h + 1; w < v - 8; w++)
            this._buffer[w] = 0;
          t.writeUint32BE(y, this._buffer, v - 8), t.writeUint32BE(g, this._buffer, v - 4), s(this._temp, this._state, this._buffer, 0, v), this._finished = !0;
        }
        for (var w = 0; w < this.digestLength / 4; w++)
          t.writeUint32BE(this._state[w], f, w * 4);
        return this;
      }, a.prototype.digest = function() {
        var f = new Uint8Array(this.digestLength);
        return this.finish(f), f;
      }, a.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          state: new Int32Array(this._state),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, a.prototype.restoreState = function(f) {
        return this._state.set(f.state), this._bufferLength = f.bufferLength, f.buffer && this._buffer.set(f.buffer), this._bytesHashed = f.bytesHashed, this._finished = !1, this;
      }, a.prototype.cleanSavedState = function(f) {
        r.wipe(f.state), f.buffer && r.wipe(f.buffer), f.bufferLength = 0, f.bytesHashed = 0;
      }, a;
    }()
  );
  e.SHA256 = n;
  var i = new Int32Array([
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
  function s(a, f, l, h, y) {
    for (; y >= 64; ) {
      for (var g = f[0], v = f[1], w = f[2], I = f[3], A = f[4], U = f[5], E = f[6], x = f[7], _ = 0; _ < 16; _++) {
        var S = h + _ * 4;
        a[_] = t.readUint32BE(l, S);
      }
      for (var _ = 16; _ < 64; _++) {
        var d = a[_ - 2], c = (d >>> 17 | d << 32 - 17) ^ (d >>> 19 | d << 32 - 19) ^ d >>> 10;
        d = a[_ - 15];
        var p = (d >>> 7 | d << 32 - 7) ^ (d >>> 18 | d << 32 - 18) ^ d >>> 3;
        a[_] = (c + a[_ - 7] | 0) + (p + a[_ - 16] | 0);
      }
      for (var _ = 0; _ < 64; _++) {
        var c = (((A >>> 6 | A << 26) ^ (A >>> 11 | A << 21) ^ (A >>> 25 | A << 7)) + (A & U ^ ~A & E) | 0) + (x + (i[_] + a[_] | 0) | 0) | 0, p = ((g >>> 2 | g << 32 - 2) ^ (g >>> 13 | g << 32 - 13) ^ (g >>> 22 | g << 32 - 22)) + (g & v ^ g & w ^ v & w) | 0;
        x = E, E = U, U = A, A = I + c | 0, I = w, w = v, v = g, g = c + p | 0;
      }
      f[0] += g, f[1] += v, f[2] += w, f[3] += I, f[4] += A, f[5] += U, f[6] += E, f[7] += x, h += 64, y -= 64;
    }
    return h;
  }
  function o(a) {
    var f = new n();
    f.update(a);
    var l = f.digest();
    return f.clean(), l;
  }
  e.hash = o;
})(wi);
var Js = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.sharedKey = e.generateKeyPair = e.generateKeyPairFromSeed = e.scalarMultBase = e.scalarMult = e.SHARED_KEY_LENGTH = e.SECRET_KEY_LENGTH = e.PUBLIC_KEY_LENGTH = void 0;
  const t = en, r = Ft;
  e.PUBLIC_KEY_LENGTH = 32, e.SECRET_KEY_LENGTH = 32, e.SHARED_KEY_LENGTH = 32;
  function n(_) {
    const S = new Float64Array(16);
    if (_)
      for (let d = 0; d < _.length; d++)
        S[d] = _[d];
    return S;
  }
  const i = new Uint8Array(32);
  i[0] = 9;
  const s = n([56129, 1]);
  function o(_) {
    let S = 1;
    for (let d = 0; d < 16; d++) {
      let c = _[d] + S + 65535;
      S = Math.floor(c / 65536), _[d] = c - S * 65536;
    }
    _[0] += S - 1 + 37 * (S - 1);
  }
  function a(_, S, d) {
    const c = ~(d - 1);
    for (let p = 0; p < 16; p++) {
      const $ = c & (_[p] ^ S[p]);
      _[p] ^= $, S[p] ^= $;
    }
  }
  function f(_, S) {
    const d = n(), c = n();
    for (let p = 0; p < 16; p++)
      c[p] = S[p];
    o(c), o(c), o(c);
    for (let p = 0; p < 2; p++) {
      d[0] = c[0] - 65517;
      for (let L = 1; L < 15; L++)
        d[L] = c[L] - 65535 - (d[L - 1] >> 16 & 1), d[L - 1] &= 65535;
      d[15] = c[15] - 32767 - (d[14] >> 16 & 1);
      const $ = d[15] >> 16 & 1;
      d[14] &= 65535, a(c, d, 1 - $);
    }
    for (let p = 0; p < 16; p++)
      _[2 * p] = c[p] & 255, _[2 * p + 1] = c[p] >> 8;
  }
  function l(_, S) {
    for (let d = 0; d < 16; d++)
      _[d] = S[2 * d] + (S[2 * d + 1] << 8);
    _[15] &= 32767;
  }
  function h(_, S, d) {
    for (let c = 0; c < 16; c++)
      _[c] = S[c] + d[c];
  }
  function y(_, S, d) {
    for (let c = 0; c < 16; c++)
      _[c] = S[c] - d[c];
  }
  function g(_, S, d) {
    let c, p, $ = 0, L = 0, j = 0, F = 0, q = 0, D = 0, R = 0, G = 0, V = 0, z = 0, W = 0, B = 0, H = 0, oe = 0, k = 0, ne = 0, Z = 0, re = 0, N = 0, C = 0, P = 0, u = 0, O = 0, Y = 0, Q = 0, _e = 0, be = 0, he = 0, xe = 0, Be = 0, $e = 0, De = d[0], we = d[1], de = d[2], ge = d[3], pe = d[4], ue = d[5], ce = d[6], ie = d[7], ye = d[8], ve = d[9], ae = d[10], Ee = d[11], Ie = d[12], Ae = d[13], Ce = d[14], Pe = d[15];
    c = S[0], $ += c * De, L += c * we, j += c * de, F += c * ge, q += c * pe, D += c * ue, R += c * ce, G += c * ie, V += c * ye, z += c * ve, W += c * ae, B += c * Ee, H += c * Ie, oe += c * Ae, k += c * Ce, ne += c * Pe, c = S[1], L += c * De, j += c * we, F += c * de, q += c * ge, D += c * pe, R += c * ue, G += c * ce, V += c * ie, z += c * ye, W += c * ve, B += c * ae, H += c * Ee, oe += c * Ie, k += c * Ae, ne += c * Ce, Z += c * Pe, c = S[2], j += c * De, F += c * we, q += c * de, D += c * ge, R += c * pe, G += c * ue, V += c * ce, z += c * ie, W += c * ye, B += c * ve, H += c * ae, oe += c * Ee, k += c * Ie, ne += c * Ae, Z += c * Ce, re += c * Pe, c = S[3], F += c * De, q += c * we, D += c * de, R += c * ge, G += c * pe, V += c * ue, z += c * ce, W += c * ie, B += c * ye, H += c * ve, oe += c * ae, k += c * Ee, ne += c * Ie, Z += c * Ae, re += c * Ce, N += c * Pe, c = S[4], q += c * De, D += c * we, R += c * de, G += c * ge, V += c * pe, z += c * ue, W += c * ce, B += c * ie, H += c * ye, oe += c * ve, k += c * ae, ne += c * Ee, Z += c * Ie, re += c * Ae, N += c * Ce, C += c * Pe, c = S[5], D += c * De, R += c * we, G += c * de, V += c * ge, z += c * pe, W += c * ue, B += c * ce, H += c * ie, oe += c * ye, k += c * ve, ne += c * ae, Z += c * Ee, re += c * Ie, N += c * Ae, C += c * Ce, P += c * Pe, c = S[6], R += c * De, G += c * we, V += c * de, z += c * ge, W += c * pe, B += c * ue, H += c * ce, oe += c * ie, k += c * ye, ne += c * ve, Z += c * ae, re += c * Ee, N += c * Ie, C += c * Ae, P += c * Ce, u += c * Pe, c = S[7], G += c * De, V += c * we, z += c * de, W += c * ge, B += c * pe, H += c * ue, oe += c * ce, k += c * ie, ne += c * ye, Z += c * ve, re += c * ae, N += c * Ee, C += c * Ie, P += c * Ae, u += c * Ce, O += c * Pe, c = S[8], V += c * De, z += c * we, W += c * de, B += c * ge, H += c * pe, oe += c * ue, k += c * ce, ne += c * ie, Z += c * ye, re += c * ve, N += c * ae, C += c * Ee, P += c * Ie, u += c * Ae, O += c * Ce, Y += c * Pe, c = S[9], z += c * De, W += c * we, B += c * de, H += c * ge, oe += c * pe, k += c * ue, ne += c * ce, Z += c * ie, re += c * ye, N += c * ve, C += c * ae, P += c * Ee, u += c * Ie, O += c * Ae, Y += c * Ce, Q += c * Pe, c = S[10], W += c * De, B += c * we, H += c * de, oe += c * ge, k += c * pe, ne += c * ue, Z += c * ce, re += c * ie, N += c * ye, C += c * ve, P += c * ae, u += c * Ee, O += c * Ie, Y += c * Ae, Q += c * Ce, _e += c * Pe, c = S[11], B += c * De, H += c * we, oe += c * de, k += c * ge, ne += c * pe, Z += c * ue, re += c * ce, N += c * ie, C += c * ye, P += c * ve, u += c * ae, O += c * Ee, Y += c * Ie, Q += c * Ae, _e += c * Ce, be += c * Pe, c = S[12], H += c * De, oe += c * we, k += c * de, ne += c * ge, Z += c * pe, re += c * ue, N += c * ce, C += c * ie, P += c * ye, u += c * ve, O += c * ae, Y += c * Ee, Q += c * Ie, _e += c * Ae, be += c * Ce, he += c * Pe, c = S[13], oe += c * De, k += c * we, ne += c * de, Z += c * ge, re += c * pe, N += c * ue, C += c * ce, P += c * ie, u += c * ye, O += c * ve, Y += c * ae, Q += c * Ee, _e += c * Ie, be += c * Ae, he += c * Ce, xe += c * Pe, c = S[14], k += c * De, ne += c * we, Z += c * de, re += c * ge, N += c * pe, C += c * ue, P += c * ce, u += c * ie, O += c * ye, Y += c * ve, Q += c * ae, _e += c * Ee, be += c * Ie, he += c * Ae, xe += c * Ce, Be += c * Pe, c = S[15], ne += c * De, Z += c * we, re += c * de, N += c * ge, C += c * pe, P += c * ue, u += c * ce, O += c * ie, Y += c * ye, Q += c * ve, _e += c * ae, be += c * Ee, he += c * Ie, xe += c * Ae, Be += c * Ce, $e += c * Pe, $ += 38 * Z, L += 38 * re, j += 38 * N, F += 38 * C, q += 38 * P, D += 38 * u, R += 38 * O, G += 38 * Y, V += 38 * Q, z += 38 * _e, W += 38 * be, B += 38 * he, H += 38 * xe, oe += 38 * Be, k += 38 * $e, p = 1, c = $ + p + 65535, p = Math.floor(c / 65536), $ = c - p * 65536, c = L + p + 65535, p = Math.floor(c / 65536), L = c - p * 65536, c = j + p + 65535, p = Math.floor(c / 65536), j = c - p * 65536, c = F + p + 65535, p = Math.floor(c / 65536), F = c - p * 65536, c = q + p + 65535, p = Math.floor(c / 65536), q = c - p * 65536, c = D + p + 65535, p = Math.floor(c / 65536), D = c - p * 65536, c = R + p + 65535, p = Math.floor(c / 65536), R = c - p * 65536, c = G + p + 65535, p = Math.floor(c / 65536), G = c - p * 65536, c = V + p + 65535, p = Math.floor(c / 65536), V = c - p * 65536, c = z + p + 65535, p = Math.floor(c / 65536), z = c - p * 65536, c = W + p + 65535, p = Math.floor(c / 65536), W = c - p * 65536, c = B + p + 65535, p = Math.floor(c / 65536), B = c - p * 65536, c = H + p + 65535, p = Math.floor(c / 65536), H = c - p * 65536, c = oe + p + 65535, p = Math.floor(c / 65536), oe = c - p * 65536, c = k + p + 65535, p = Math.floor(c / 65536), k = c - p * 65536, c = ne + p + 65535, p = Math.floor(c / 65536), ne = c - p * 65536, $ += p - 1 + 37 * (p - 1), p = 1, c = $ + p + 65535, p = Math.floor(c / 65536), $ = c - p * 65536, c = L + p + 65535, p = Math.floor(c / 65536), L = c - p * 65536, c = j + p + 65535, p = Math.floor(c / 65536), j = c - p * 65536, c = F + p + 65535, p = Math.floor(c / 65536), F = c - p * 65536, c = q + p + 65535, p = Math.floor(c / 65536), q = c - p * 65536, c = D + p + 65535, p = Math.floor(c / 65536), D = c - p * 65536, c = R + p + 65535, p = Math.floor(c / 65536), R = c - p * 65536, c = G + p + 65535, p = Math.floor(c / 65536), G = c - p * 65536, c = V + p + 65535, p = Math.floor(c / 65536), V = c - p * 65536, c = z + p + 65535, p = Math.floor(c / 65536), z = c - p * 65536, c = W + p + 65535, p = Math.floor(c / 65536), W = c - p * 65536, c = B + p + 65535, p = Math.floor(c / 65536), B = c - p * 65536, c = H + p + 65535, p = Math.floor(c / 65536), H = c - p * 65536, c = oe + p + 65535, p = Math.floor(c / 65536), oe = c - p * 65536, c = k + p + 65535, p = Math.floor(c / 65536), k = c - p * 65536, c = ne + p + 65535, p = Math.floor(c / 65536), ne = c - p * 65536, $ += p - 1 + 37 * (p - 1), _[0] = $, _[1] = L, _[2] = j, _[3] = F, _[4] = q, _[5] = D, _[6] = R, _[7] = G, _[8] = V, _[9] = z, _[10] = W, _[11] = B, _[12] = H, _[13] = oe, _[14] = k, _[15] = ne;
  }
  function v(_, S) {
    g(_, S, S);
  }
  function w(_, S) {
    const d = n();
    for (let c = 0; c < 16; c++)
      d[c] = S[c];
    for (let c = 253; c >= 0; c--)
      v(d, d), c !== 2 && c !== 4 && g(d, d, S);
    for (let c = 0; c < 16; c++)
      _[c] = d[c];
  }
  function I(_, S) {
    const d = new Uint8Array(32), c = new Float64Array(80), p = n(), $ = n(), L = n(), j = n(), F = n(), q = n();
    for (let V = 0; V < 31; V++)
      d[V] = _[V];
    d[31] = _[31] & 127 | 64, d[0] &= 248, l(c, S);
    for (let V = 0; V < 16; V++)
      $[V] = c[V];
    p[0] = j[0] = 1;
    for (let V = 254; V >= 0; --V) {
      const z = d[V >>> 3] >>> (V & 7) & 1;
      a(p, $, z), a(L, j, z), h(F, p, L), y(p, p, L), h(L, $, j), y($, $, j), v(j, F), v(q, p), g(p, L, p), g(L, $, F), h(F, p, L), y(p, p, L), v($, p), y(L, j, q), g(p, L, s), h(p, p, j), g(L, L, p), g(p, j, q), g(j, $, c), v($, F), a(p, $, z), a(L, j, z);
    }
    for (let V = 0; V < 16; V++)
      c[V + 16] = p[V], c[V + 32] = L[V], c[V + 48] = $[V], c[V + 64] = j[V];
    const D = c.subarray(32), R = c.subarray(16);
    w(D, D), g(R, R, D);
    const G = new Uint8Array(32);
    return f(G, R), G;
  }
  e.scalarMult = I;
  function A(_) {
    return I(_, i);
  }
  e.scalarMultBase = A;
  function U(_) {
    if (_.length !== e.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${e.SECRET_KEY_LENGTH} bytes`);
    const S = new Uint8Array(_);
    return {
      publicKey: A(S),
      secretKey: S
    };
  }
  e.generateKeyPairFromSeed = U;
  function E(_) {
    const S = (0, t.randomBytes)(32, _), d = U(S);
    return (0, r.wipe)(S), d;
  }
  e.generateKeyPair = E;
  function x(_, S, d = !1) {
    if (_.length !== e.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (S.length !== e.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const c = I(_, S);
    if (d) {
      let p = 0;
      for (let $ = 0; $ < c.length; $++)
        p |= c[$];
      if (p === 0)
        throw new Error("X25519: invalid shared key");
    }
    return c;
  }
  e.sharedKey = x;
})(Js);
var Sa = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, s; n < i; n++)
      (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, $g = (
  /** @class */
  function() {
    function e(t, r, n) {
      this.name = t, this.version = r, this.os = n, this.type = "browser";
    }
    return e;
  }()
), Lg = (
  /** @class */
  function() {
    function e(t) {
      this.version = t, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return e;
  }()
), jg = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      this.name = t, this.version = r, this.os = n, this.bot = i, this.type = "bot-device";
    }
    return e;
  }()
), Fg = (
  /** @class */
  function() {
    function e() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return e;
  }()
), Ug = (
  /** @class */
  function() {
    function e() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return e;
  }()
), Mg = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, Bg = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, Da = 3, qg = [
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
  ["searchbot", Mg]
], Oa = [
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
function zg(e) {
  return e ? xa(e) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new Ug() : typeof navigator < "u" ? xa(navigator.userAgent) : Wg();
}
function Vg(e) {
  return e !== "" && qg.reduce(function(t, r) {
    var n = r[0], i = r[1];
    if (t)
      return t;
    var s = i.exec(e);
    return !!s && [n, s];
  }, !1);
}
function xa(e) {
  var t = Vg(e);
  if (!t)
    return null;
  var r = t[0], n = t[1];
  if (r === "searchbot")
    return new Fg();
  var i = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
  i ? i.length < Da && (i = Sa(Sa([], i, !0), Hg(Da - i.length), !0)) : i = [];
  var s = i.join("."), o = Kg(e), a = Bg.exec(e);
  return a && a[1] ? new jg(r, s, o, a[1]) : new $g(r, s, o);
}
function Kg(e) {
  for (var t = 0, r = Oa.length; t < r; t++) {
    var n = Oa[t], i = n[0], s = n[1], o = s.exec(e);
    if (o)
      return i;
  }
  return null;
}
function Wg() {
  var e = typeof process < "u" && process.version;
  return e ? new Lg(process.version.slice(1)) : null;
}
function Hg(e) {
  for (var t = [], r = 0; r < e; r++)
    t.push("0");
  return t;
}
var je = {};
Object.defineProperty(je, "__esModule", { value: !0 });
je.getLocalStorage = je.getLocalStorageOrThrow = je.getCrypto = je.getCryptoOrThrow = Su = je.getLocation = je.getLocationOrThrow = Xs = je.getNavigator = je.getNavigatorOrThrow = Eu = je.getDocument = je.getDocumentOrThrow = je.getFromWindowOrThrow = je.getFromWindow = void 0;
function Ur(e) {
  let t;
  return typeof window < "u" && typeof window[e] < "u" && (t = window[e]), t;
}
je.getFromWindow = Ur;
function tn(e) {
  const t = Ur(e);
  if (!t)
    throw new Error(`${e} is not defined in Window`);
  return t;
}
je.getFromWindowOrThrow = tn;
function kg() {
  return tn("document");
}
je.getDocumentOrThrow = kg;
function Gg() {
  return Ur("document");
}
var Eu = je.getDocument = Gg;
function Yg() {
  return tn("navigator");
}
je.getNavigatorOrThrow = Yg;
function Jg() {
  return Ur("navigator");
}
var Xs = je.getNavigator = Jg;
function Xg() {
  return tn("location");
}
je.getLocationOrThrow = Xg;
function Qg() {
  return Ur("location");
}
var Su = je.getLocation = Qg;
function Zg() {
  return tn("crypto");
}
je.getCryptoOrThrow = Zg;
function ey() {
  return Ur("crypto");
}
je.getCrypto = ey;
function ty() {
  return tn("localStorage");
}
je.getLocalStorageOrThrow = ty;
function ry() {
  return Ur("localStorage");
}
je.getLocalStorage = ry;
var Qs = {};
Object.defineProperty(Qs, "__esModule", { value: !0 });
var Du = Qs.getWindowMetadata = void 0;
const Ia = je;
function ny() {
  let e, t;
  try {
    e = Ia.getDocumentOrThrow(), t = Ia.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const y = e.getElementsByTagName("link"), g = [];
    for (let v = 0; v < y.length; v++) {
      const w = y[v], I = w.getAttribute("rel");
      if (I && I.toLowerCase().indexOf("icon") > -1) {
        const A = w.getAttribute("href");
        if (A)
          if (A.toLowerCase().indexOf("https:") === -1 && A.toLowerCase().indexOf("http:") === -1 && A.indexOf("//") !== 0) {
            let U = t.protocol + "//" + t.host;
            if (A.indexOf("/") === 0)
              U += A;
            else {
              const E = t.pathname.split("/");
              E.pop();
              const x = E.join("/");
              U += x + "/" + A;
            }
            g.push(U);
          } else if (A.indexOf("//") === 0) {
            const U = t.protocol + A;
            g.push(U);
          } else
            g.push(A);
      }
    }
    return g;
  }
  function n(...y) {
    const g = e.getElementsByTagName("meta");
    for (let v = 0; v < g.length; v++) {
      const w = g[v], I = ["itemprop", "property", "name"].map((A) => w.getAttribute(A)).filter((A) => A ? y.includes(A) : !1);
      if (I.length && I) {
        const A = w.getAttribute("content");
        if (A)
          return A;
      }
    }
    return "";
  }
  function i() {
    let y = n("name", "og:site_name", "og:title", "twitter:title");
    return y || (y = e.title), y;
  }
  function s() {
    return n("description", "og:description", "twitter:description", "keywords");
  }
  const o = i(), a = s(), f = t.origin, l = r();
  return {
    description: a,
    url: f,
    icons: l,
    name: o
  };
}
Du = Qs.getWindowMetadata = ny;
var An = {}, iy = (e) => encodeURIComponent(e).replace(/[!'()*]/g, (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`), Ou = "%[a-f0-9]{2}", Pa = new RegExp("(" + Ou + ")|([^%]+?)", "gi"), Ta = new RegExp("(" + Ou + ")+", "gi");
function Ss(e, t) {
  try {
    return [decodeURIComponent(e.join(""))];
  } catch {
  }
  if (e.length === 1)
    return e;
  t = t || 1;
  var r = e.slice(0, t), n = e.slice(t);
  return Array.prototype.concat.call([], Ss(r), Ss(n));
}
function sy(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    for (var t = e.match(Pa) || [], r = 1; r < t.length; r++)
      e = Ss(t, r).join(""), t = e.match(Pa) || [];
    return e;
  }
}
function oy(e) {
  for (var t = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = Ta.exec(e); r; ) {
    try {
      t[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var n = sy(r[0]);
      n !== r[0] && (t[r[0]] = n);
    }
    r = Ta.exec(e);
  }
  t["%C2"] = "�";
  for (var i = Object.keys(t), s = 0; s < i.length; s++) {
    var o = i[s];
    e = e.replace(new RegExp(o, "g"), t[o]);
  }
  return e;
}
var ay = function(e) {
  if (typeof e != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
  try {
    return e = e.replace(/\+/g, " "), decodeURIComponent(e);
  } catch {
    return oy(e);
  }
}, cy = (e, t) => {
  if (!(typeof e == "string" && typeof t == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (t === "")
    return [e];
  const r = e.indexOf(t);
  return r === -1 ? [e] : [
    e.slice(0, r),
    e.slice(r + t.length)
  ];
}, uy = function(e, t) {
  for (var r = {}, n = Object.keys(e), i = Array.isArray(t), s = 0; s < n.length; s++) {
    var o = n[s], a = e[o];
    (i ? t.indexOf(o) !== -1 : t(o, a, e)) && (r[o] = a);
  }
  return r;
};
(function(e) {
  const t = iy, r = ay, n = cy, i = uy, s = (E) => E == null, o = Symbol("encodeFragmentIdentifier");
  function a(E) {
    switch (E.arrayFormat) {
      case "index":
        return (x) => (_, S) => {
          const d = _.length;
          return S === void 0 || E.skipNull && S === null || E.skipEmptyString && S === "" ? _ : S === null ? [..._, [h(x, E), "[", d, "]"].join("")] : [
            ..._,
            [h(x, E), "[", h(d, E), "]=", h(S, E)].join("")
          ];
        };
      case "bracket":
        return (x) => (_, S) => S === void 0 || E.skipNull && S === null || E.skipEmptyString && S === "" ? _ : S === null ? [..._, [h(x, E), "[]"].join("")] : [..._, [h(x, E), "[]=", h(S, E)].join("")];
      case "colon-list-separator":
        return (x) => (_, S) => S === void 0 || E.skipNull && S === null || E.skipEmptyString && S === "" ? _ : S === null ? [..._, [h(x, E), ":list="].join("")] : [..._, [h(x, E), ":list=", h(S, E)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const x = E.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (_) => (S, d) => d === void 0 || E.skipNull && d === null || E.skipEmptyString && d === "" ? S : (d = d === null ? "" : d, S.length === 0 ? [[h(_, E), x, h(d, E)].join("")] : [[S, h(d, E)].join(E.arrayFormatSeparator)]);
      }
      default:
        return (x) => (_, S) => S === void 0 || E.skipNull && S === null || E.skipEmptyString && S === "" ? _ : S === null ? [..._, h(x, E)] : [..._, [h(x, E), "=", h(S, E)].join("")];
    }
  }
  function f(E) {
    let x;
    switch (E.arrayFormat) {
      case "index":
        return (_, S, d) => {
          if (x = /\[(\d*)\]$/.exec(_), _ = _.replace(/\[\d*\]$/, ""), !x) {
            d[_] = S;
            return;
          }
          d[_] === void 0 && (d[_] = {}), d[_][x[1]] = S;
        };
      case "bracket":
        return (_, S, d) => {
          if (x = /(\[\])$/.exec(_), _ = _.replace(/\[\]$/, ""), !x) {
            d[_] = S;
            return;
          }
          if (d[_] === void 0) {
            d[_] = [S];
            return;
          }
          d[_] = [].concat(d[_], S);
        };
      case "colon-list-separator":
        return (_, S, d) => {
          if (x = /(:list)$/.exec(_), _ = _.replace(/:list$/, ""), !x) {
            d[_] = S;
            return;
          }
          if (d[_] === void 0) {
            d[_] = [S];
            return;
          }
          d[_] = [].concat(d[_], S);
        };
      case "comma":
      case "separator":
        return (_, S, d) => {
          const c = typeof S == "string" && S.includes(E.arrayFormatSeparator), p = typeof S == "string" && !c && y(S, E).includes(E.arrayFormatSeparator);
          S = p ? y(S, E) : S;
          const $ = c || p ? S.split(E.arrayFormatSeparator).map((L) => y(L, E)) : S === null ? S : y(S, E);
          d[_] = $;
        };
      case "bracket-separator":
        return (_, S, d) => {
          const c = /(\[\])$/.test(_);
          if (_ = _.replace(/\[\]$/, ""), !c) {
            d[_] = S && y(S, E);
            return;
          }
          const p = S === null ? [] : S.split(E.arrayFormatSeparator).map(($) => y($, E));
          if (d[_] === void 0) {
            d[_] = p;
            return;
          }
          d[_] = [].concat(d[_], p);
        };
      default:
        return (_, S, d) => {
          if (d[_] === void 0) {
            d[_] = S;
            return;
          }
          d[_] = [].concat(d[_], S);
        };
    }
  }
  function l(E) {
    if (typeof E != "string" || E.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function h(E, x) {
    return x.encode ? x.strict ? t(E) : encodeURIComponent(E) : E;
  }
  function y(E, x) {
    return x.decode ? r(E) : E;
  }
  function g(E) {
    return Array.isArray(E) ? E.sort() : typeof E == "object" ? g(Object.keys(E)).sort((x, _) => Number(x) - Number(_)).map((x) => E[x]) : E;
  }
  function v(E) {
    const x = E.indexOf("#");
    return x !== -1 && (E = E.slice(0, x)), E;
  }
  function w(E) {
    let x = "";
    const _ = E.indexOf("#");
    return _ !== -1 && (x = E.slice(_)), x;
  }
  function I(E) {
    E = v(E);
    const x = E.indexOf("?");
    return x === -1 ? "" : E.slice(x + 1);
  }
  function A(E, x) {
    return x.parseNumbers && !Number.isNaN(Number(E)) && typeof E == "string" && E.trim() !== "" ? E = Number(E) : x.parseBooleans && E !== null && (E.toLowerCase() === "true" || E.toLowerCase() === "false") && (E = E.toLowerCase() === "true"), E;
  }
  function U(E, x) {
    x = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, x), l(x.arrayFormatSeparator);
    const _ = f(x), S = /* @__PURE__ */ Object.create(null);
    if (typeof E != "string" || (E = E.trim().replace(/^[?#&]/, ""), !E))
      return S;
    for (const d of E.split("&")) {
      if (d === "")
        continue;
      let [c, p] = n(x.decode ? d.replace(/\+/g, " ") : d, "=");
      p = p === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(x.arrayFormat) ? p : y(p, x), _(y(c, x), p, S);
    }
    for (const d of Object.keys(S)) {
      const c = S[d];
      if (typeof c == "object" && c !== null)
        for (const p of Object.keys(c))
          c[p] = A(c[p], x);
      else
        S[d] = A(c, x);
    }
    return x.sort === !1 ? S : (x.sort === !0 ? Object.keys(S).sort() : Object.keys(S).sort(x.sort)).reduce((d, c) => {
      const p = S[c];
      return p && typeof p == "object" && !Array.isArray(p) ? d[c] = g(p) : d[c] = p, d;
    }, /* @__PURE__ */ Object.create(null));
  }
  e.extract = I, e.parse = U, e.stringify = (E, x) => {
    if (!E)
      return "";
    x = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, x), l(x.arrayFormatSeparator);
    const _ = (p) => x.skipNull && s(E[p]) || x.skipEmptyString && E[p] === "", S = a(x), d = {};
    for (const p of Object.keys(E))
      _(p) || (d[p] = E[p]);
    const c = Object.keys(d);
    return x.sort !== !1 && c.sort(x.sort), c.map((p) => {
      const $ = E[p];
      return $ === void 0 ? "" : $ === null ? h(p, x) : Array.isArray($) ? $.length === 0 && x.arrayFormat === "bracket-separator" ? h(p, x) + "[]" : $.reduce(S(p), []).join("&") : h(p, x) + "=" + h($, x);
    }).filter((p) => p.length > 0).join("&");
  }, e.parseUrl = (E, x) => {
    x = Object.assign({
      decode: !0
    }, x);
    const [_, S] = n(E, "#");
    return Object.assign(
      {
        url: _.split("?")[0] || "",
        query: U(I(E), x)
      },
      x && x.parseFragmentIdentifier && S ? { fragmentIdentifier: y(S, x) } : {}
    );
  }, e.stringifyUrl = (E, x) => {
    x = Object.assign({
      encode: !0,
      strict: !0,
      [o]: !0
    }, x);
    const _ = v(E.url).split("?")[0] || "", S = e.extract(E.url), d = e.parse(S, { sort: !1 }), c = Object.assign(d, E.query);
    let p = e.stringify(c, x);
    p && (p = `?${p}`);
    let $ = w(E.url);
    return E.fragmentIdentifier && ($ = `#${x[o] ? h(E.fragmentIdentifier, x) : E.fragmentIdentifier}`), `${_}${p}${$}`;
  }, e.pick = (E, x, _) => {
    _ = Object.assign({
      parseFragmentIdentifier: !0,
      [o]: !1
    }, _);
    const { url: S, query: d, fragmentIdentifier: c } = e.parseUrl(E, _);
    return e.stringifyUrl({
      url: S,
      query: i(d, x),
      fragmentIdentifier: c
    }, _);
  }, e.exclude = (E, x, _) => {
    const S = Array.isArray(x) ? (d) => !x.includes(d) : (d, c) => !x(d, c);
    return e.pick(E, S, _);
  };
})(An);
const ly = {
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
function xu(e, t) {
  return e.includes(":") ? [e] : t.chains || [];
}
const Iu = "base10", It = "base16", Ds = "base64pad", Zs = "utf8", Pu = 0, Mr = 1, fy = 0, Ra = 1, Os = 12, eo = 32;
function hy() {
  const e = Js.generateKeyPair();
  return { privateKey: Pt(e.secretKey, It), publicKey: Pt(e.publicKey, It) };
}
function xs() {
  const e = en.randomBytes(eo);
  return Pt(e, It);
}
function dy(e, t) {
  const r = Js.sharedKey(Rt(e, It), Rt(t, It)), n = new Ng(wi.SHA256, r).expand(eo);
  return Pt(n, It);
}
function py(e) {
  const t = wi.hash(Rt(e, It));
  return Pt(t, It);
}
function Gr(e) {
  const t = wi.hash(Rt(e, Zs));
  return Pt(t, It);
}
function gy(e) {
  return Rt(`${e}`, Iu);
}
function Fn(e) {
  return Number(Pt(e, Iu));
}
function yy(e) {
  const t = gy(typeof e.type < "u" ? e.type : Pu);
  if (Fn(t) === Mr && typeof e.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof e.senderPublicKey < "u" ? Rt(e.senderPublicKey, It) : void 0, n = typeof e.iv < "u" ? Rt(e.iv, It) : en.randomBytes(Os), i = new Gs.ChaCha20Poly1305(Rt(e.symKey, It)).seal(n, Rt(e.message, Zs));
  return by({ type: t, sealed: i, iv: n, senderPublicKey: r });
}
function _y(e) {
  const t = new Gs.ChaCha20Poly1305(Rt(e.symKey, It)), { sealed: r, iv: n } = ii(e.encoded), i = t.open(n, r);
  if (i === null)
    throw new Error("Failed to decrypt");
  return Pt(i, Zs);
}
function by(e) {
  if (Fn(e.type) === Mr) {
    if (typeof e.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return Pt(ws([e.type, e.senderPublicKey, e.iv, e.sealed]), Ds);
  }
  return Pt(ws([e.type, e.iv, e.sealed]), Ds);
}
function ii(e) {
  const t = Rt(e, Ds), r = t.slice(fy, Ra), n = Ra;
  if (Fn(r) === Mr) {
    const a = n + eo, f = a + Os, l = t.slice(n, a), h = t.slice(a, f), y = t.slice(f);
    return { type: r, sealed: y, iv: h, senderPublicKey: l };
  }
  const i = n + Os, s = t.slice(n, i), o = t.slice(i);
  return { type: r, sealed: o, iv: s };
}
function vy(e, t) {
  const r = ii(e);
  return Tu({ type: Fn(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? Pt(r.senderPublicKey, It) : void 0, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey });
}
function Tu(e) {
  const t = (e == null ? void 0 : e.type) || Pu;
  if (t === Mr) {
    if (typeof (e == null ? void 0 : e.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (e == null ? void 0 : e.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: t, senderPublicKey: e == null ? void 0 : e.senderPublicKey, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey };
}
function Aa(e) {
  return e.type === Mr && typeof e.senderPublicKey == "string" && typeof e.receiverPublicKey == "string";
}
var my = Object.defineProperty, Ca = Object.getOwnPropertySymbols, wy = Object.prototype.hasOwnProperty, Ey = Object.prototype.propertyIsEnumerable, Na = (e, t, r) => t in e ? my(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, $a = (e, t) => {
  for (var r in t || (t = {}))
    wy.call(t, r) && Na(e, r, t[r]);
  if (Ca)
    for (var r of Ca(t))
      Ey.call(t, r) && Na(e, r, t[r]);
  return e;
};
const Sy = "ReactNative", yr = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, Dy = "js";
function to() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function Ru() {
  return !Eu() && !!Xs() && navigator.product === Sy;
}
function ro() {
  return !to() && !!Xs();
}
function no() {
  return Ru() ? yr.reactNative : to() ? yr.node : ro() ? yr.browser : yr.unknown;
}
function Oy(e, t) {
  let r = An.parse(e);
  return r = $a($a({}, r), t), e = An.stringify(r), e;
}
function xy() {
  return Du() || { name: "", description: "", url: "", icons: [""] };
}
function Iy() {
  if (no() === yr.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: n } = global.Platform;
    return [r, n].join("-");
  }
  const e = zg();
  if (e === null)
    return "unknown";
  const t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
  return e.type === "browser" ? [t, e.name, e.version].join("-") : [t, e.version].join("-");
}
function Py() {
  var e;
  const t = no();
  return t === yr.browser ? [t, ((e = Su()) == null ? void 0 : e.host) || "unknown"].join(":") : t;
}
function Ty(e, t, r) {
  const n = Iy(), i = Py();
  return [[e, t].join("-"), [Dy, r].join("-"), n, i].join("/");
}
function Ry({ protocol: e, version: t, relayUrl: r, sdkVersion: n, auth: i, projectId: s, useOnCloseEvent: o }) {
  const a = r.split("?"), f = Ty(e, t, n), l = { auth: i, ua: f, projectId: s, useOnCloseEvent: o || void 0 }, h = Oy(a[1] || "", l);
  return a[0] + "?" + h;
}
function Nr(e, t) {
  return e.filter((r) => t.includes(r)).length === e.length;
}
function Au(e) {
  return Object.fromEntries(e.entries());
}
function Cu(e) {
  return new Map(Object.entries(e));
}
function Wr(e = te.FIVE_MINUTES, t) {
  const r = te.toMiliseconds(e || te.FIVE_MINUTES);
  let n, i, s;
  return { resolve: (o) => {
    s && n && (clearTimeout(s), n(o));
  }, reject: (o) => {
    s && i && (clearTimeout(s), i(o));
  }, done: () => new Promise((o, a) => {
    s = setTimeout(() => {
      a(new Error(t));
    }, r), n = o, i = a;
  }) };
}
function si(e, t, r) {
  return new Promise(async (n, i) => {
    const s = setTimeout(() => i(new Error(r)), t);
    try {
      const o = await e;
      n(o);
    } catch (o) {
      i(o);
    }
    clearTimeout(s);
  });
}
function Nu(e, t) {
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
function Ay(e) {
  return Nu("topic", e);
}
function Cy(e) {
  return Nu("id", e);
}
function $u(e) {
  const [t, r] = e.split(":"), n = { id: void 0, topic: void 0 };
  if (t === "topic" && typeof r == "string")
    n.topic = r;
  else if (t === "id" && Number.isInteger(Number(r)))
    n.id = Number(r);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);
  return n;
}
function Ht(e, t) {
  return te.fromMiliseconds((t || Date.now()) + te.toMiliseconds(e));
}
function gr(e) {
  return Date.now() >= te.toMiliseconds(e);
}
function st(e, t) {
  return `${e}${t ? `:${t}` : ""}`;
}
async function Ny({ id: e, topic: t, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const n = typeof r == "string" ? JSON.parse(r) : r;
    let i = n == null ? void 0 : n.href;
    if (typeof i != "string")
      return;
    i.endsWith("/") && (i = i.slice(0, -1));
    const s = `${i}/wc?requestId=${e}&sessionTopic=${t}`, o = no();
    o === yr.browser ? s.startsWith("https://") ? window.open(s, "_blank", "noreferrer noopener") : window.open(s, "_self", "noreferrer noopener") : o === yr.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(s);
  } catch (n) {
    console.error(n);
  }
}
const $y = "irn";
function Is(e) {
  return (e == null ? void 0 : e.relay) || { protocol: $y };
}
function Zn(e) {
  const t = ly[e];
  if (typeof t > "u")
    throw new Error(`Relay Protocol not supported: ${e}`);
  return t;
}
var Ly = Object.defineProperty, La = Object.getOwnPropertySymbols, jy = Object.prototype.hasOwnProperty, Fy = Object.prototype.propertyIsEnumerable, ja = (e, t, r) => t in e ? Ly(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Uy = (e, t) => {
  for (var r in t || (t = {}))
    jy.call(t, r) && ja(e, r, t[r]);
  if (La)
    for (var r of La(t))
      Fy.call(t, r) && ja(e, r, t[r]);
  return e;
};
function My(e, t = "-") {
  const r = {}, n = "relay" + t;
  return Object.keys(e).forEach((i) => {
    if (i.startsWith(n)) {
      const s = i.replace(n, ""), o = e[i];
      r[s] = o;
    }
  }), r;
}
function By(e) {
  const t = e.indexOf(":"), r = e.indexOf("?") !== -1 ? e.indexOf("?") : void 0, n = e.substring(0, t), i = e.substring(t + 1, r).split("@"), s = typeof r < "u" ? e.substring(r) : "", o = An.parse(s);
  return { protocol: n, topic: qy(i[0]), version: parseInt(i[1], 10), symKey: o.symKey, relay: My(o) };
}
function qy(e) {
  return e.startsWith("//") ? e.substring(2) : e;
}
function zy(e, t = "-") {
  const r = "relay", n = {};
  return Object.keys(e).forEach((i) => {
    const s = r + t + i;
    e[i] && (n[s] = e[i]);
  }), n;
}
function Vy(e) {
  return `${e.protocol}:${e.topic}@${e.version}?` + An.stringify(Uy({ symKey: e.symKey }, zy(e.relay)));
}
function rn(e) {
  const t = [];
  return e.forEach((r) => {
    const [n, i] = r.split(":");
    t.push(`${n}:${i}`);
  }), t;
}
function Ky(e) {
  const t = [];
  return Object.values(e).forEach((r) => {
    t.push(...rn(r.accounts));
  }), t;
}
function Wy(e, t) {
  const r = [];
  return Object.values(e).forEach((n) => {
    rn(n.accounts).includes(t) && r.push(...n.methods);
  }), r;
}
function Hy(e, t) {
  const r = [];
  return Object.values(e).forEach((n) => {
    rn(n.accounts).includes(t) && r.push(...n.events);
  }), r;
}
function ky(e, t) {
  const r = ei(e, t);
  if (r)
    throw new Error(r.message);
  const n = {};
  for (const [i, s] of Object.entries(e))
    n[i] = { methods: s.methods, events: s.events, chains: s.accounts.map((o) => `${o.split(":")[0]}:${o.split(":")[1]}`) };
  return n;
}
const Gy = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, Yy = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function X(e, t) {
  const { message: r, code: n } = Yy[e];
  return { message: t ? `${r} ${t}` : r, code: n };
}
function ut(e, t) {
  const { message: r, code: n } = Gy[e];
  return { message: t ? `${r} ${t}` : r, code: n };
}
function Un(e, t) {
  return Array.isArray(e) ? typeof t < "u" && e.length ? e.every(t) : !0 : !1;
}
function On(e) {
  return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
}
function xt(e) {
  return typeof e > "u";
}
function lt(e, t) {
  return t && xt(e) ? !0 : typeof e == "string" && !!e.trim().length;
}
function io(e, t) {
  return t && xt(e) ? !0 : typeof e == "number" && !isNaN(e);
}
function Jy(e, t) {
  const { requiredNamespaces: r } = t, n = Object.keys(e.namespaces), i = Object.keys(r);
  let s = !0;
  return Nr(i, n) ? (n.forEach((o) => {
    const { accounts: a, methods: f, events: l } = e.namespaces[o], h = rn(a), y = r[o];
    (!Nr(xu(o, y), h) || !Nr(y.methods, f) || !Nr(y.events, l)) && (s = !1);
  }), s) : !1;
}
function oi(e) {
  return lt(e, !1) && e.includes(":") ? e.split(":").length === 2 : !1;
}
function Xy(e) {
  if (lt(e, !1) && e.includes(":")) {
    const t = e.split(":");
    if (t.length === 3) {
      const r = t[0] + ":" + t[1];
      return !!t[2] && oi(r);
    }
  }
  return !1;
}
function Qy(e) {
  if (lt(e, !1))
    try {
      return typeof new URL(e) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function Zy(e) {
  var t;
  return (t = e == null ? void 0 : e.proposer) == null ? void 0 : t.publicKey;
}
function e0(e) {
  return e == null ? void 0 : e.topic;
}
function t0(e, t) {
  let r = null;
  return lt(e == null ? void 0 : e.publicKey, !1) || (r = X("MISSING_OR_INVALID", `${t} controller public key should be a string`)), r;
}
function Fa(e) {
  let t = !0;
  return Un(e) ? e.length && (t = e.every((r) => lt(r, !1))) : t = !1, t;
}
function r0(e, t, r) {
  let n = null;
  return Un(t) && t.length ? t.forEach((i) => {
    n || oi(i) || (n = ut("UNSUPPORTED_CHAINS", `${r}, chain ${i} should be a string and conform to "namespace:chainId" format`));
  }) : oi(e) || (n = ut("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), n;
}
function n0(e, t, r) {
  let n = null;
  return Object.entries(e).forEach(([i, s]) => {
    if (n)
      return;
    const o = r0(i, xu(i, s), `${t} ${r}`);
    o && (n = o);
  }), n;
}
function i0(e, t) {
  let r = null;
  return Un(e) ? e.forEach((n) => {
    r || Xy(n) || (r = ut("UNSUPPORTED_ACCOUNTS", `${t}, account ${n} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = ut("UNSUPPORTED_ACCOUNTS", `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function s0(e, t) {
  let r = null;
  return Object.values(e).forEach((n) => {
    if (r)
      return;
    const i = i0(n == null ? void 0 : n.accounts, `${t} namespace`);
    i && (r = i);
  }), r;
}
function o0(e, t) {
  let r = null;
  return Fa(e == null ? void 0 : e.methods) ? Fa(e == null ? void 0 : e.events) || (r = ut("UNSUPPORTED_EVENTS", `${t}, events should be an array of strings or empty array for no events`)) : r = ut("UNSUPPORTED_METHODS", `${t}, methods should be an array of strings or empty array for no methods`), r;
}
function Lu(e, t) {
  let r = null;
  return Object.values(e).forEach((n) => {
    if (r)
      return;
    const i = o0(n, `${t}, namespace`);
    i && (r = i);
  }), r;
}
function a0(e, t, r) {
  let n = null;
  if (e && On(e)) {
    const i = Lu(e, t);
    i && (n = i);
    const s = n0(e, t, r);
    s && (n = s);
  } else
    n = X("MISSING_OR_INVALID", `${t}, ${r} should be an object with data`);
  return n;
}
function ei(e, t) {
  let r = null;
  if (e && On(e)) {
    const n = Lu(e, t);
    n && (r = n);
    const i = s0(e, t);
    i && (r = i);
  } else
    r = X("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
  return r;
}
function ju(e) {
  return lt(e.protocol, !0);
}
function c0(e, t) {
  let r = !1;
  return t && !e ? r = !0 : e && Un(e) && e.length && e.forEach((n) => {
    r = ju(n);
  }), r;
}
function u0(e) {
  return typeof e == "number";
}
function Tt(e) {
  return typeof e < "u" && typeof e !== null;
}
function l0(e) {
  return !(!e || typeof e != "object" || !e.code || !io(e.code, !1) || !e.message || !lt(e.message, !1));
}
function f0(e) {
  return !(xt(e) || !lt(e.method, !1));
}
function h0(e) {
  return !(xt(e) || xt(e.result) && xt(e.error) || !io(e.id, !1) || !lt(e.jsonrpc, !1));
}
function d0(e) {
  return !(xt(e) || !lt(e.name, !1));
}
function Ua(e, t) {
  return !(!oi(t) || !Ky(e).includes(t));
}
function p0(e, t, r) {
  return lt(r, !1) ? Wy(e, t).includes(r) : !1;
}
function g0(e, t, r) {
  return lt(r, !1) ? Hy(e, t).includes(r) : !1;
}
function Ma(e, t, r) {
  let n = null;
  const i = y0(e), s = _0(t), o = Object.keys(i), a = Object.keys(s), f = Ba(Object.keys(e)), l = Ba(Object.keys(t)), h = f.filter((y) => !l.includes(y));
  return h.length && (n = X("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${h.toString()}
      Received: ${Object.keys(t).toString()}`)), Nr(o, a) || (n = X("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`)), Object.keys(t).forEach((y) => {
    if (!y.includes(":") || n)
      return;
    const g = rn(t[y].accounts);
    g.includes(y) || (n = X("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${y}
        Required: ${y}
        Approved: ${g.toString()}`));
  }), o.forEach((y) => {
    n || (Nr(i[y].methods, s[y].methods) ? Nr(i[y].events, s[y].events) || (n = X("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${y}`)) : n = X("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${y}`));
  }), n;
}
function y0(e) {
  const t = {};
  return Object.keys(e).forEach((r) => {
    var n;
    r.includes(":") ? t[r] = e[r] : (n = e[r].chains) == null || n.forEach((i) => {
      t[i] = { methods: e[r].methods, events: e[r].events };
    });
  }), t;
}
function Ba(e) {
  return [...new Set(e.map((t) => t.includes(":") ? t.split(":")[0] : t))];
}
function _0(e) {
  const t = {};
  return Object.keys(e).forEach((r) => {
    if (r.includes(":"))
      t[r] = e[r];
    else {
      const n = rn(e[r].accounts);
      n == null || n.forEach((i) => {
        t[i] = { accounts: e[r].accounts.filter((s) => s.includes(`${i}:`)), methods: e[r].methods, events: e[r].events };
      });
    }
  }), t;
}
function b0(e, t) {
  return io(e, !1) && e <= t.max && e >= t.min;
}
const v0 = "PARSE_ERROR", m0 = "INVALID_REQUEST", w0 = "METHOD_NOT_FOUND", E0 = "INVALID_PARAMS", Fu = "INTERNAL_ERROR", so = "SERVER_ERROR", S0 = [-32700, -32600, -32601, -32602, -32603], xn = {
  [v0]: { code: -32700, message: "Parse error" },
  [m0]: { code: -32600, message: "Invalid Request" },
  [w0]: { code: -32601, message: "Method not found" },
  [E0]: { code: -32602, message: "Invalid params" },
  [Fu]: { code: -32603, message: "Internal error" },
  [so]: { code: -32e3, message: "Server error" }
}, Uu = so;
function D0(e) {
  return S0.includes(e);
}
function qa(e) {
  return Object.keys(xn).includes(e) ? xn[e] : xn[Uu];
}
function O0(e) {
  const t = Object.values(xn).find((r) => r.code === e);
  return t || xn[Uu];
}
function x0(e, t, r) {
  return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${t}`) : e;
}
var Mu = {};
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
var Ps = function(e, t) {
  return Ps = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      n.hasOwnProperty(i) && (r[i] = n[i]);
  }, Ps(e, t);
};
function I0(e, t) {
  Ps(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var Ts = function() {
  return Ts = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, Ts.apply(this, arguments);
};
function P0(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function T0(e, t, r, n) {
  var i = arguments.length, s = i < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, r) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    s = Reflect.decorate(e, t, r, n);
  else
    for (var a = e.length - 1; a >= 0; a--)
      (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
  return i > 3 && s && Object.defineProperty(t, r, s), s;
}
function R0(e, t) {
  return function(r, n) {
    t(r, n, e);
  };
}
function A0(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function C0(e, t, r, n) {
  function i(s) {
    return s instanceof r ? s : new r(function(o) {
      o(s);
    });
  }
  return new (r || (r = Promise))(function(s, o) {
    function a(h) {
      try {
        l(n.next(h));
      } catch (y) {
        o(y);
      }
    }
    function f(h) {
      try {
        l(n.throw(h));
      } catch (y) {
        o(y);
      }
    }
    function l(h) {
      h.done ? s(h.value) : i(h.value).then(a, f);
    }
    l((n = n.apply(e, t || [])).next());
  });
}
function N0(e, t) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, i, s, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(l) {
    return function(h) {
      return f([l, h]);
    };
  }
  function f(l) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, i && (s = l[0] & 2 ? i.return : l[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, l[1])).done)
          return s;
        switch (i = 0, s && (l = [l[0] & 2, s.value]), l[0]) {
          case 0:
          case 1:
            s = l;
            break;
          case 4:
            return r.label++, { value: l[1], done: !1 };
          case 5:
            r.label++, i = l[1], l = [0];
            continue;
          case 7:
            l = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (s = r.trys, !(s = s.length > 0 && s[s.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              r = 0;
              continue;
            }
            if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) {
              r.label = l[1];
              break;
            }
            if (l[0] === 6 && r.label < s[1]) {
              r.label = s[1], s = l;
              break;
            }
            if (s && r.label < s[2]) {
              r.label = s[2], r.ops.push(l);
              break;
            }
            s[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        l = t.call(e, r);
      } catch (h) {
        l = [6, h], i = 0;
      } finally {
        n = s = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function $0(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}
function L0(e, t) {
  for (var r in e)
    r !== "default" && !t.hasOwnProperty(r) && (t[r] = e[r]);
}
function Rs(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Bu(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, s = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      s.push(i.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return s;
}
function j0() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(Bu(arguments[t]));
  return e;
}
function F0() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++)
    e += arguments[t].length;
  for (var n = Array(e), i = 0, t = 0; t < r; t++)
    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, i++)
      n[i] = s[o];
  return n;
}
function Cn(e) {
  return this instanceof Cn ? (this.v = e, this) : new Cn(e);
}
function U0(e, t, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []), i, s = [];
  return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(g) {
    n[g] && (i[g] = function(v) {
      return new Promise(function(w, I) {
        s.push([g, v, w, I]) > 1 || a(g, v);
      });
    });
  }
  function a(g, v) {
    try {
      f(n[g](v));
    } catch (w) {
      y(s[0][3], w);
    }
  }
  function f(g) {
    g.value instanceof Cn ? Promise.resolve(g.value.v).then(l, h) : y(s[0][2], g);
  }
  function l(g) {
    a("next", g);
  }
  function h(g) {
    a("throw", g);
  }
  function y(g, v) {
    g(v), s.shift(), s.length && a(s[0][0], s[0][1]);
  }
}
function M0(e) {
  var t, r;
  return t = {}, n("next"), n("throw", function(i) {
    throw i;
  }), n("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function n(i, s) {
    t[i] = e[i] ? function(o) {
      return (r = !r) ? { value: Cn(e[i](o)), done: i === "return" } : s ? s(o) : o;
    } : s;
  }
}
function B0(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], r;
  return t ? t.call(e) : (e = typeof Rs == "function" ? Rs(e) : e[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(s) {
    r[s] = e[s] && function(o) {
      return new Promise(function(a, f) {
        o = e[s](o), i(a, f, o.done, o.value);
      });
    };
  }
  function i(s, o, a, f) {
    Promise.resolve(f).then(function(l) {
      s({ value: l, done: a });
    }, o);
  }
}
function q0(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
function z0(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  return t.default = e, t;
}
function V0(e) {
  return e && e.__esModule ? e : { default: e };
}
function K0(e, t) {
  if (!t.has(e))
    throw new TypeError("attempted to get private field on non-instance");
  return t.get(e);
}
function W0(e, t, r) {
  if (!t.has(e))
    throw new TypeError("attempted to set private field on non-instance");
  return t.set(e, r), r;
}
const H0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return Ts;
  },
  __asyncDelegator: M0,
  __asyncGenerator: U0,
  __asyncValues: B0,
  __await: Cn,
  __awaiter: C0,
  __classPrivateFieldGet: K0,
  __classPrivateFieldSet: W0,
  __createBinding: $0,
  __decorate: T0,
  __exportStar: L0,
  __extends: I0,
  __generator: N0,
  __importDefault: V0,
  __importStar: z0,
  __makeTemplateObject: q0,
  __metadata: A0,
  __param: R0,
  __read: Bu,
  __rest: P0,
  __spread: j0,
  __spreadArrays: F0,
  __values: Rs
}, Symbol.toStringTag, { value: "Module" })), k0 = /* @__PURE__ */ Lr(H0);
var or = {}, za;
function G0() {
  if (za)
    return or;
  za = 1, Object.defineProperty(or, "__esModule", { value: !0 }), or.isBrowserCryptoAvailable = or.getSubtleCrypto = or.getBrowerCrypto = void 0;
  function e() {
    return (Nt == null ? void 0 : Nt.crypto) || (Nt == null ? void 0 : Nt.msCrypto) || {};
  }
  or.getBrowerCrypto = e;
  function t() {
    const n = e();
    return n.subtle || n.webkitSubtle;
  }
  or.getSubtleCrypto = t;
  function r() {
    return !!e() && !!t();
  }
  return or.isBrowserCryptoAvailable = r, or;
}
var ar = {}, Va;
function Y0() {
  if (Va)
    return ar;
  Va = 1, Object.defineProperty(ar, "__esModule", { value: !0 }), ar.isBrowser = ar.isNode = ar.isReactNative = void 0;
  function e() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  ar.isReactNative = e;
  function t() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  ar.isNode = t;
  function r() {
    return !e() && !t();
  }
  return ar.isBrowser = r, ar;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = k0;
  t.__exportStar(G0(), e), t.__exportStar(Y0(), e);
})(Mu);
function qu(e = 3) {
  const t = Date.now() * Math.pow(10, e), r = Math.floor(Math.random() * Math.pow(10, e));
  return t + r;
}
function oo(e = 6) {
  return BigInt(qu(e));
}
function Ei(e, t, r) {
  return {
    id: r || qu(),
    jsonrpc: "2.0",
    method: e,
    params: t
  };
}
function ao(e, t) {
  return {
    id: e,
    jsonrpc: "2.0",
    result: t
  };
}
function co(e, t, r) {
  return {
    id: e,
    jsonrpc: "2.0",
    error: J0(t, r)
  };
}
function J0(e, t) {
  return typeof e > "u" ? qa(Fu) : (typeof e == "string" && (e = Object.assign(Object.assign({}, qa(so)), { message: e })), typeof t < "u" && (e.data = t), D0(e.code) && (e = O0(e.code)), e);
}
class X0 {
}
class Q0 extends X0 {
  constructor() {
    super();
  }
}
class Z0 extends Q0 {
  constructor(t) {
    super();
  }
}
const e_ = "^wss?:";
function t_(e) {
  const t = e.match(new RegExp(/^\w+:/, "gi"));
  if (!(!t || !t.length))
    return t[0];
}
function r_(e, t) {
  const r = t_(e);
  return typeof r > "u" ? !1 : new RegExp(t).test(r);
}
function Ka(e) {
  return r_(e, e_);
}
function n_(e) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(e);
}
function zu(e) {
  return typeof e == "object" && "id" in e && "jsonrpc" in e && e.jsonrpc === "2.0";
}
function uo(e) {
  return zu(e) && "method" in e;
}
function Si(e) {
  return zu(e) && (cr(e) || kt(e));
}
function cr(e) {
  return "result" in e;
}
function kt(e) {
  return "error" in e;
}
class i_ extends Z0 {
  constructor(t) {
    super(t), this.events = new Jt.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(t), this.connection.connected && this.registerEventListeners();
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
    return this.requestStrict(Ei(t.method, t.params || [], t.id || oo().toString()), r);
  }
  async requestStrict(t, r) {
    return new Promise(async (n, i) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (s) {
          i(s);
        }
      this.events.on(`${t.id}`, (s) => {
        kt(s) ? i(s.error) : n(s.result);
      });
      try {
        await this.connection.send(t, r);
      } catch (s) {
        i(s);
      }
    });
  }
  setConnection(t = this.connection) {
    return t;
  }
  onPayload(t) {
    this.events.emit("payload", t), Si(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", {
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
const s_ = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), o_ = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", Wa = (e) => e.split("?")[0], Ha = 10, a_ = s_();
class c_ {
  constructor(t) {
    if (this.url = t, this.events = new Jt.EventEmitter(), this.registering = !1, !Ka(t))
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
      this.socket.onclose = (n) => {
        this.onClose(n), t();
      }, this.socket.close();
    });
  }
  async send(t, r) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(Ws(t));
    } catch (n) {
      this.onError(t.id, n);
    }
  }
  register(t = this.url) {
    if (!Ka(t))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
    if (this.registering) {
      const r = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= r || this.events.listenerCount("open") >= r) && this.events.setMaxListeners(r + 1), new Promise((n, i) => {
        this.events.once("register_error", (s) => {
          this.resetMaxListeners(), i(s);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u")
            return i(new Error("WebSocket connection is missing or invalid"));
          n(this.socket);
        });
      });
    }
    return this.url = t, this.registering = !0, new Promise((r, n) => {
      const i = Mu.isReactNative() ? void 0 : { rejectUnauthorized: !n_(t) }, s = new a_(t, [], i);
      o_() ? s.onerror = (o) => {
        const a = o;
        n(this.emitError(a.error));
      } : s.on("error", (o) => {
        n(this.emitError(o));
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
    const r = typeof t.data == "string" ? tu(t.data) : t.data;
    this.events.emit("payload", r);
  }
  onError(t, r) {
    const n = this.parseError(r), i = n.message || n.toString(), s = co(t, i);
    this.events.emit("payload", s);
  }
  parseError(t, r = this.url) {
    return x0(t, Wa(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Ha && this.events.setMaxListeners(Ha);
  }
  emitError(t) {
    const r = this.parseError(new Error((t == null ? void 0 : t.message) || `WebSocket connection failed for host: ${Wa(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var ai = { exports: {} };
ai.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", i = 1, s = 2, o = 9007199254740991, a = "[object Arguments]", f = "[object Array]", l = "[object AsyncFunction]", h = "[object Boolean]", y = "[object Date]", g = "[object Error]", v = "[object Function]", w = "[object GeneratorFunction]", I = "[object Map]", A = "[object Number]", U = "[object Null]", E = "[object Object]", x = "[object Promise]", _ = "[object Proxy]", S = "[object RegExp]", d = "[object Set]", c = "[object String]", p = "[object Symbol]", $ = "[object Undefined]", L = "[object WeakMap]", j = "[object ArrayBuffer]", F = "[object DataView]", q = "[object Float32Array]", D = "[object Float64Array]", R = "[object Int8Array]", G = "[object Int16Array]", V = "[object Int32Array]", z = "[object Uint8Array]", W = "[object Uint8ClampedArray]", B = "[object Uint16Array]", H = "[object Uint32Array]", oe = /[\\^$.*+?()[\]{}|]/g, k = /^\[object .+?Constructor\]$/, ne = /^(?:0|[1-9]\d*)$/, Z = {};
  Z[q] = Z[D] = Z[R] = Z[G] = Z[V] = Z[z] = Z[W] = Z[B] = Z[H] = !0, Z[a] = Z[f] = Z[j] = Z[h] = Z[F] = Z[y] = Z[g] = Z[v] = Z[I] = Z[A] = Z[E] = Z[S] = Z[d] = Z[c] = Z[L] = !1;
  var re = typeof Nt == "object" && Nt && Nt.Object === Object && Nt, N = typeof self == "object" && self && self.Object === Object && self, C = re || N || Function("return this")(), P = t && !t.nodeType && t, u = P && !0 && e && !e.nodeType && e, O = u && u.exports === P, Y = O && re.process, Q = function() {
    try {
      return Y && Y.binding && Y.binding("util");
    } catch {
    }
  }(), _e = Q && Q.isTypedArray;
  function be(b, T) {
    for (var K = -1, ee = b == null ? 0 : b.length, Me = 0, fe = []; ++K < ee; ) {
      var Je = b[K];
      T(Je, K, b) && (fe[Me++] = Je);
    }
    return fe;
  }
  function he(b, T) {
    for (var K = -1, ee = T.length, Me = b.length; ++K < ee; )
      b[Me + K] = T[K];
    return b;
  }
  function xe(b, T) {
    for (var K = -1, ee = b == null ? 0 : b.length; ++K < ee; )
      if (T(b[K], K, b))
        return !0;
    return !1;
  }
  function Be(b, T) {
    for (var K = -1, ee = Array(b); ++K < b; )
      ee[K] = T(K);
    return ee;
  }
  function $e(b) {
    return function(T) {
      return b(T);
    };
  }
  function De(b, T) {
    return b.has(T);
  }
  function we(b, T) {
    return b == null ? void 0 : b[T];
  }
  function de(b) {
    var T = -1, K = Array(b.size);
    return b.forEach(function(ee, Me) {
      K[++T] = [Me, ee];
    }), K;
  }
  function ge(b, T) {
    return function(K) {
      return b(T(K));
    };
  }
  function pe(b) {
    var T = -1, K = Array(b.size);
    return b.forEach(function(ee) {
      K[++T] = ee;
    }), K;
  }
  var ue = Array.prototype, ce = Function.prototype, ie = Object.prototype, ye = C["__core-js_shared__"], ve = ce.toString, ae = ie.hasOwnProperty, Ee = function() {
    var b = /[^.]+$/.exec(ye && ye.keys && ye.keys.IE_PROTO || "");
    return b ? "Symbol(src)_1." + b : "";
  }(), Ie = ie.toString, Ae = RegExp(
    "^" + ve.call(ae).replace(oe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Ce = O ? C.Buffer : void 0, Pe = C.Symbol, At = C.Uint8Array, Ut = ie.propertyIsEnumerable, Xt = ue.splice, ft = Pe ? Pe.toStringTag : void 0, Qt = Object.getOwnPropertySymbols, Mt = Ce ? Ce.isBuffer : void 0, ur = ge(Object.keys, Object), qe = qr(C, "DataView"), Fe = qr(C, "Map"), He = qr(C, "Promise"), Ve = qr(C, "Set"), ke = qr(C, "WeakMap"), Ue = qr(Object, "create"), Qe = Er(qe), tt = Er(Fe), rt = Er(He), Ze = Er(Ve), nt = Er(ke), et = Pe ? Pe.prototype : void 0, Ge = et ? et.valueOf : void 0;
  function Le(b) {
    var T = -1, K = b == null ? 0 : b.length;
    for (this.clear(); ++T < K; ) {
      var ee = b[T];
      this.set(ee[0], ee[1]);
    }
  }
  function m() {
    this.__data__ = Ue ? Ue(null) : {}, this.size = 0;
  }
  function M(b) {
    var T = this.has(b) && delete this.__data__[b];
    return this.size -= T ? 1 : 0, T;
  }
  function J(b) {
    var T = this.__data__;
    if (Ue) {
      var K = T[b];
      return K === n ? void 0 : K;
    }
    return ae.call(T, b) ? T[b] : void 0;
  }
  function se(b) {
    var T = this.__data__;
    return Ue ? T[b] !== void 0 : ae.call(T, b);
  }
  function Te(b, T) {
    var K = this.__data__;
    return this.size += this.has(b) ? 0 : 1, K[b] = Ue && T === void 0 ? n : T, this;
  }
  Le.prototype.clear = m, Le.prototype.delete = M, Le.prototype.get = J, Le.prototype.has = se, Le.prototype.set = Te;
  function Se(b) {
    var T = -1, K = b == null ? 0 : b.length;
    for (this.clear(); ++T < K; ) {
      var ee = b[T];
      this.set(ee[0], ee[1]);
    }
  }
  function Oe() {
    this.__data__ = [], this.size = 0;
  }
  function me(b) {
    var T = this.__data__, K = zn(T, b);
    if (K < 0)
      return !1;
    var ee = T.length - 1;
    return K == ee ? T.pop() : Xt.call(T, K, 1), --this.size, !0;
  }
  function ht(b) {
    var T = this.__data__, K = zn(T, b);
    return K < 0 ? void 0 : T[K][1];
  }
  function Ke(b) {
    return zn(this.__data__, b) > -1;
  }
  function Ye(b, T) {
    var K = this.__data__, ee = zn(K, b);
    return ee < 0 ? (++this.size, K.push([b, T])) : K[ee][1] = T, this;
  }
  Se.prototype.clear = Oe, Se.prototype.delete = me, Se.prototype.get = ht, Se.prototype.has = Ke, Se.prototype.set = Ye;
  function it(b) {
    var T = -1, K = b == null ? 0 : b.length;
    for (this.clear(); ++T < K; ) {
      var ee = b[T];
      this.set(ee[0], ee[1]);
    }
  }
  function lr() {
    this.size = 0, this.__data__ = {
      hash: new Le(),
      map: new (Fe || Se)(),
      string: new Le()
    };
  }
  function Bn(b) {
    var T = Vn(this, b).delete(b);
    return this.size -= T ? 1 : 0, T;
  }
  function Kt(b) {
    return Vn(this, b).get(b);
  }
  function yl(b) {
    return Vn(this, b).has(b);
  }
  function _l(b, T) {
    var K = Vn(this, b), ee = K.size;
    return K.set(b, T), this.size += K.size == ee ? 0 : 1, this;
  }
  it.prototype.clear = lr, it.prototype.delete = Bn, it.prototype.get = Kt, it.prototype.has = yl, it.prototype.set = _l;
  function qn(b) {
    var T = -1, K = b == null ? 0 : b.length;
    for (this.__data__ = new it(); ++T < K; )
      this.add(b[T]);
  }
  function bl(b) {
    return this.__data__.set(b, n), this;
  }
  function vl(b) {
    return this.__data__.has(b);
  }
  qn.prototype.add = qn.prototype.push = bl, qn.prototype.has = vl;
  function fr(b) {
    var T = this.__data__ = new Se(b);
    this.size = T.size;
  }
  function ml() {
    this.__data__ = new Se(), this.size = 0;
  }
  function wl(b) {
    var T = this.__data__, K = T.delete(b);
    return this.size = T.size, K;
  }
  function El(b) {
    return this.__data__.get(b);
  }
  function Sl(b) {
    return this.__data__.has(b);
  }
  function Dl(b, T) {
    var K = this.__data__;
    if (K instanceof Se) {
      var ee = K.__data__;
      if (!Fe || ee.length < r - 1)
        return ee.push([b, T]), this.size = ++K.size, this;
      K = this.__data__ = new it(ee);
    }
    return K.set(b, T), this.size = K.size, this;
  }
  fr.prototype.clear = ml, fr.prototype.delete = wl, fr.prototype.get = El, fr.prototype.has = Sl, fr.prototype.set = Dl;
  function Ol(b, T) {
    var K = Kn(b), ee = !K && Bl(b), Me = !K && !ee && xi(b), fe = !K && !ee && !Me && Ao(b), Je = K || ee || Me || fe, ot = Je ? Be(b.length, String) : [], dt = ot.length;
    for (var We in b)
      (T || ae.call(b, We)) && !(Je && // Safari 9 has enumerable `arguments.length` in strict mode.
      (We == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      Me && (We == "offset" || We == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      fe && (We == "buffer" || We == "byteLength" || We == "byteOffset") || // Skip index properties.
      Ll(We, dt))) && ot.push(We);
    return ot;
  }
  function zn(b, T) {
    for (var K = b.length; K--; )
      if (Io(b[K][0], T))
        return K;
    return -1;
  }
  function xl(b, T, K) {
    var ee = T(b);
    return Kn(b) ? ee : he(ee, K(b));
  }
  function sn(b) {
    return b == null ? b === void 0 ? $ : U : ft && ft in Object(b) ? Nl(b) : Ml(b);
  }
  function So(b) {
    return on(b) && sn(b) == a;
  }
  function Do(b, T, K, ee, Me) {
    return b === T ? !0 : b == null || T == null || !on(b) && !on(T) ? b !== b && T !== T : Il(b, T, K, ee, Do, Me);
  }
  function Il(b, T, K, ee, Me, fe) {
    var Je = Kn(b), ot = Kn(T), dt = Je ? f : hr(b), We = ot ? f : hr(T);
    dt = dt == a ? E : dt, We = We == a ? E : We;
    var Ct = dt == E, Wt = We == E, bt = dt == We;
    if (bt && xi(b)) {
      if (!xi(T))
        return !1;
      Je = !0, Ct = !1;
    }
    if (bt && !Ct)
      return fe || (fe = new fr()), Je || Ao(b) ? Oo(b, T, K, ee, Me, fe) : Al(b, T, dt, K, ee, Me, fe);
    if (!(K & i)) {
      var Bt = Ct && ae.call(b, "__wrapped__"), qt = Wt && ae.call(T, "__wrapped__");
      if (Bt || qt) {
        var dr = Bt ? b.value() : b, sr = qt ? T.value() : T;
        return fe || (fe = new fr()), Me(dr, sr, K, ee, fe);
      }
    }
    return bt ? (fe || (fe = new fr()), Cl(b, T, K, ee, Me, fe)) : !1;
  }
  function Pl(b) {
    if (!Ro(b) || Fl(b))
      return !1;
    var T = Po(b) ? Ae : k;
    return T.test(Er(b));
  }
  function Tl(b) {
    return on(b) && To(b.length) && !!Z[sn(b)];
  }
  function Rl(b) {
    if (!Ul(b))
      return ur(b);
    var T = [];
    for (var K in Object(b))
      ae.call(b, K) && K != "constructor" && T.push(K);
    return T;
  }
  function Oo(b, T, K, ee, Me, fe) {
    var Je = K & i, ot = b.length, dt = T.length;
    if (ot != dt && !(Je && dt > ot))
      return !1;
    var We = fe.get(b);
    if (We && fe.get(T))
      return We == T;
    var Ct = -1, Wt = !0, bt = K & s ? new qn() : void 0;
    for (fe.set(b, T), fe.set(T, b); ++Ct < ot; ) {
      var Bt = b[Ct], qt = T[Ct];
      if (ee)
        var dr = Je ? ee(qt, Bt, Ct, T, b, fe) : ee(Bt, qt, Ct, b, T, fe);
      if (dr !== void 0) {
        if (dr)
          continue;
        Wt = !1;
        break;
      }
      if (bt) {
        if (!xe(T, function(sr, Sr) {
          if (!De(bt, Sr) && (Bt === sr || Me(Bt, sr, K, ee, fe)))
            return bt.push(Sr);
        })) {
          Wt = !1;
          break;
        }
      } else if (!(Bt === qt || Me(Bt, qt, K, ee, fe))) {
        Wt = !1;
        break;
      }
    }
    return fe.delete(b), fe.delete(T), Wt;
  }
  function Al(b, T, K, ee, Me, fe, Je) {
    switch (K) {
      case F:
        if (b.byteLength != T.byteLength || b.byteOffset != T.byteOffset)
          return !1;
        b = b.buffer, T = T.buffer;
      case j:
        return !(b.byteLength != T.byteLength || !fe(new At(b), new At(T)));
      case h:
      case y:
      case A:
        return Io(+b, +T);
      case g:
        return b.name == T.name && b.message == T.message;
      case S:
      case c:
        return b == T + "";
      case I:
        var ot = de;
      case d:
        var dt = ee & i;
        if (ot || (ot = pe), b.size != T.size && !dt)
          return !1;
        var We = Je.get(b);
        if (We)
          return We == T;
        ee |= s, Je.set(b, T);
        var Ct = Oo(ot(b), ot(T), ee, Me, fe, Je);
        return Je.delete(b), Ct;
      case p:
        if (Ge)
          return Ge.call(b) == Ge.call(T);
    }
    return !1;
  }
  function Cl(b, T, K, ee, Me, fe) {
    var Je = K & i, ot = xo(b), dt = ot.length, We = xo(T), Ct = We.length;
    if (dt != Ct && !Je)
      return !1;
    for (var Wt = dt; Wt--; ) {
      var bt = ot[Wt];
      if (!(Je ? bt in T : ae.call(T, bt)))
        return !1;
    }
    var Bt = fe.get(b);
    if (Bt && fe.get(T))
      return Bt == T;
    var qt = !0;
    fe.set(b, T), fe.set(T, b);
    for (var dr = Je; ++Wt < dt; ) {
      bt = ot[Wt];
      var sr = b[bt], Sr = T[bt];
      if (ee)
        var Co = Je ? ee(Sr, sr, bt, T, b, fe) : ee(sr, Sr, bt, b, T, fe);
      if (!(Co === void 0 ? sr === Sr || Me(sr, Sr, K, ee, fe) : Co)) {
        qt = !1;
        break;
      }
      dr || (dr = bt == "constructor");
    }
    if (qt && !dr) {
      var Wn = b.constructor, Hn = T.constructor;
      Wn != Hn && "constructor" in b && "constructor" in T && !(typeof Wn == "function" && Wn instanceof Wn && typeof Hn == "function" && Hn instanceof Hn) && (qt = !1);
    }
    return fe.delete(b), fe.delete(T), qt;
  }
  function xo(b) {
    return xl(b, Vl, $l);
  }
  function Vn(b, T) {
    var K = b.__data__;
    return jl(T) ? K[typeof T == "string" ? "string" : "hash"] : K.map;
  }
  function qr(b, T) {
    var K = we(b, T);
    return Pl(K) ? K : void 0;
  }
  function Nl(b) {
    var T = ae.call(b, ft), K = b[ft];
    try {
      b[ft] = void 0;
      var ee = !0;
    } catch {
    }
    var Me = Ie.call(b);
    return ee && (T ? b[ft] = K : delete b[ft]), Me;
  }
  var $l = Qt ? function(b) {
    return b == null ? [] : (b = Object(b), be(Qt(b), function(T) {
      return Ut.call(b, T);
    }));
  } : Kl, hr = sn;
  (qe && hr(new qe(new ArrayBuffer(1))) != F || Fe && hr(new Fe()) != I || He && hr(He.resolve()) != x || Ve && hr(new Ve()) != d || ke && hr(new ke()) != L) && (hr = function(b) {
    var T = sn(b), K = T == E ? b.constructor : void 0, ee = K ? Er(K) : "";
    if (ee)
      switch (ee) {
        case Qe:
          return F;
        case tt:
          return I;
        case rt:
          return x;
        case Ze:
          return d;
        case nt:
          return L;
      }
    return T;
  });
  function Ll(b, T) {
    return T = T ?? o, !!T && (typeof b == "number" || ne.test(b)) && b > -1 && b % 1 == 0 && b < T;
  }
  function jl(b) {
    var T = typeof b;
    return T == "string" || T == "number" || T == "symbol" || T == "boolean" ? b !== "__proto__" : b === null;
  }
  function Fl(b) {
    return !!Ee && Ee in b;
  }
  function Ul(b) {
    var T = b && b.constructor, K = typeof T == "function" && T.prototype || ie;
    return b === K;
  }
  function Ml(b) {
    return Ie.call(b);
  }
  function Er(b) {
    if (b != null) {
      try {
        return ve.call(b);
      } catch {
      }
      try {
        return b + "";
      } catch {
      }
    }
    return "";
  }
  function Io(b, T) {
    return b === T || b !== b && T !== T;
  }
  var Bl = So(function() {
    return arguments;
  }()) ? So : function(b) {
    return on(b) && ae.call(b, "callee") && !Ut.call(b, "callee");
  }, Kn = Array.isArray;
  function ql(b) {
    return b != null && To(b.length) && !Po(b);
  }
  var xi = Mt || Wl;
  function zl(b, T) {
    return Do(b, T);
  }
  function Po(b) {
    if (!Ro(b))
      return !1;
    var T = sn(b);
    return T == v || T == w || T == l || T == _;
  }
  function To(b) {
    return typeof b == "number" && b > -1 && b % 1 == 0 && b <= o;
  }
  function Ro(b) {
    var T = typeof b;
    return b != null && (T == "object" || T == "function");
  }
  function on(b) {
    return b != null && typeof b == "object";
  }
  var Ao = _e ? $e(_e) : Tl;
  function Vl(b) {
    return ql(b) ? Ol(b) : Rl(b);
  }
  function Kl() {
    return [];
  }
  function Wl() {
    return !1;
  }
  e.exports = zl;
})(ai, ai.exports);
var u_ = ai.exports;
const l_ = /* @__PURE__ */ Vs(u_);
function f_(e, t) {
  if (e.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
    r[n] = 255;
  for (var i = 0; i < e.length; i++) {
    var s = e.charAt(i), o = s.charCodeAt(0);
    if (r[o] !== 255)
      throw new TypeError(s + " is ambiguous");
    r[o] = i;
  }
  var a = e.length, f = e.charAt(0), l = Math.log(a) / Math.log(256), h = Math.log(256) / Math.log(a);
  function y(w) {
    if (w instanceof Uint8Array || (ArrayBuffer.isView(w) ? w = new Uint8Array(w.buffer, w.byteOffset, w.byteLength) : Array.isArray(w) && (w = Uint8Array.from(w))), !(w instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (w.length === 0)
      return "";
    for (var I = 0, A = 0, U = 0, E = w.length; U !== E && w[U] === 0; )
      U++, I++;
    for (var x = (E - U) * h + 1 >>> 0, _ = new Uint8Array(x); U !== E; ) {
      for (var S = w[U], d = 0, c = x - 1; (S !== 0 || d < A) && c !== -1; c--, d++)
        S += 256 * _[c] >>> 0, _[c] = S % a >>> 0, S = S / a >>> 0;
      if (S !== 0)
        throw new Error("Non-zero carry");
      A = d, U++;
    }
    for (var p = x - A; p !== x && _[p] === 0; )
      p++;
    for (var $ = f.repeat(I); p < x; ++p)
      $ += e.charAt(_[p]);
    return $;
  }
  function g(w) {
    if (typeof w != "string")
      throw new TypeError("Expected String");
    if (w.length === 0)
      return new Uint8Array();
    var I = 0;
    if (w[I] !== " ") {
      for (var A = 0, U = 0; w[I] === f; )
        A++, I++;
      for (var E = (w.length - I) * l + 1 >>> 0, x = new Uint8Array(E); w[I]; ) {
        var _ = r[w.charCodeAt(I)];
        if (_ === 255)
          return;
        for (var S = 0, d = E - 1; (_ !== 0 || S < U) && d !== -1; d--, S++)
          _ += a * x[d] >>> 0, x[d] = _ % 256 >>> 0, _ = _ / 256 >>> 0;
        if (_ !== 0)
          throw new Error("Non-zero carry");
        U = S, I++;
      }
      if (w[I] !== " ") {
        for (var c = E - U; c !== E && x[c] === 0; )
          c++;
        for (var p = new Uint8Array(A + (E - c)), $ = A; c !== E; )
          p[$++] = x[c++];
        return p;
      }
    }
  }
  function v(w) {
    var I = g(w);
    if (I)
      return I;
    throw new Error(`Non-${t} character`);
  }
  return { encode: y, decodeUnsafe: g, decode: v };
}
var h_ = f_, d_ = h_;
const Vu = (e) => {
  if (e instanceof Uint8Array && e.constructor.name === "Uint8Array")
    return e;
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  if (ArrayBuffer.isView(e))
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  throw new Error("Unknown type, must be binary type");
}, p_ = (e) => new TextEncoder().encode(e), g_ = (e) => new TextDecoder().decode(e);
class y_ {
  constructor(t, r, n) {
    this.name = t, this.prefix = r, this.baseEncode = n;
  }
  encode(t) {
    if (t instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class __ {
  constructor(t, r, n) {
    if (this.name = t, this.prefix = r, r.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = r.codePointAt(0), this.baseDecode = n;
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
    return Ku(this, t);
  }
}
class b_ {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return Ku(this, t);
  }
  decode(t) {
    const r = t[0], n = this.decoders[r];
    if (n)
      return n.decode(t);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Ku = (e, t) => new b_({ ...e.decoders || { [e.prefix]: e }, ...t.decoders || { [t.prefix]: t } });
class v_ {
  constructor(t, r, n, i) {
    this.name = t, this.prefix = r, this.baseEncode = n, this.baseDecode = i, this.encoder = new y_(t, r, n), this.decoder = new __(t, r, i);
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const Di = ({ name: e, prefix: t, encode: r, decode: n }) => new v_(e, t, r, n), Mn = ({ prefix: e, name: t, alphabet: r }) => {
  const { encode: n, decode: i } = d_(r, t);
  return Di({ prefix: e, name: t, encode: n, decode: (s) => Vu(i(s)) });
}, m_ = (e, t, r, n) => {
  const i = {};
  for (let h = 0; h < t.length; ++h)
    i[t[h]] = h;
  let s = e.length;
  for (; e[s - 1] === "="; )
    --s;
  const o = new Uint8Array(s * r / 8 | 0);
  let a = 0, f = 0, l = 0;
  for (let h = 0; h < s; ++h) {
    const y = i[e[h]];
    if (y === void 0)
      throw new SyntaxError(`Non-${n} character`);
    f = f << r | y, a += r, a >= 8 && (a -= 8, o[l++] = 255 & f >> a);
  }
  if (a >= r || 255 & f << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return o;
}, w_ = (e, t, r) => {
  const n = t[t.length - 1] === "=", i = (1 << r) - 1;
  let s = "", o = 0, a = 0;
  for (let f = 0; f < e.length; ++f)
    for (a = a << 8 | e[f], o += 8; o > r; )
      o -= r, s += t[i & a >> o];
  if (o && (s += t[i & a << r - o]), n)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, _t = ({ name: e, prefix: t, bitsPerChar: r, alphabet: n }) => Di({ prefix: t, name: e, encode(i) {
  return w_(i, n, r);
}, decode(i) {
  return m_(i, n, r, e);
} }), E_ = Di({ prefix: "\0", name: "identity", encode: (e) => g_(e), decode: (e) => p_(e) });
var S_ = Object.freeze({ __proto__: null, identity: E_ });
const D_ = _t({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var O_ = Object.freeze({ __proto__: null, base2: D_ });
const x_ = _t({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var I_ = Object.freeze({ __proto__: null, base8: x_ });
const P_ = Mn({ prefix: "9", name: "base10", alphabet: "0123456789" });
var T_ = Object.freeze({ __proto__: null, base10: P_ });
const R_ = _t({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), A_ = _t({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var C_ = Object.freeze({ __proto__: null, base16: R_, base16upper: A_ });
const N_ = _t({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), $_ = _t({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), L_ = _t({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), j_ = _t({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), F_ = _t({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), U_ = _t({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), M_ = _t({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), B_ = _t({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), q_ = _t({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var z_ = Object.freeze({ __proto__: null, base32: N_, base32upper: $_, base32pad: L_, base32padupper: j_, base32hex: F_, base32hexupper: U_, base32hexpad: M_, base32hexpadupper: B_, base32z: q_ });
const V_ = Mn({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), K_ = Mn({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var W_ = Object.freeze({ __proto__: null, base36: V_, base36upper: K_ });
const H_ = Mn({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), k_ = Mn({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var G_ = Object.freeze({ __proto__: null, base58btc: H_, base58flickr: k_ });
const Y_ = _t({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), J_ = _t({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), X_ = _t({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), Q_ = _t({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Z_ = Object.freeze({ __proto__: null, base64: Y_, base64pad: J_, base64url: X_, base64urlpad: Q_ });
const Wu = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), eb = Wu.reduce((e, t, r) => (e[r] = t, e), []), tb = Wu.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []);
function rb(e) {
  return e.reduce((t, r) => (t += eb[r], t), "");
}
function nb(e) {
  const t = [];
  for (const r of e) {
    const n = tb[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    t.push(n);
  }
  return new Uint8Array(t);
}
const ib = Di({ prefix: "🚀", name: "base256emoji", encode: rb, decode: nb });
var sb = Object.freeze({ __proto__: null, base256emoji: ib }), ob = Hu, ka = 128, ab = 127, cb = ~ab, ub = Math.pow(2, 31);
function Hu(e, t, r) {
  t = t || [], r = r || 0;
  for (var n = r; e >= ub; )
    t[r++] = e & 255 | ka, e /= 128;
  for (; e & cb; )
    t[r++] = e & 255 | ka, e >>>= 7;
  return t[r] = e | 0, Hu.bytes = r - n + 1, t;
}
var lb = As, fb = 128, Ga = 127;
function As(e, n) {
  var r = 0, n = n || 0, i = 0, s = n, o, a = e.length;
  do {
    if (s >= a)
      throw As.bytes = 0, new RangeError("Could not decode varint");
    o = e[s++], r += i < 28 ? (o & Ga) << i : (o & Ga) * Math.pow(2, i), i += 7;
  } while (o >= fb);
  return As.bytes = s - n, r;
}
var hb = Math.pow(2, 7), db = Math.pow(2, 14), pb = Math.pow(2, 21), gb = Math.pow(2, 28), yb = Math.pow(2, 35), _b = Math.pow(2, 42), bb = Math.pow(2, 49), vb = Math.pow(2, 56), mb = Math.pow(2, 63), wb = function(e) {
  return e < hb ? 1 : e < db ? 2 : e < pb ? 3 : e < gb ? 4 : e < yb ? 5 : e < _b ? 6 : e < bb ? 7 : e < vb ? 8 : e < mb ? 9 : 10;
}, Eb = { encode: ob, decode: lb, encodingLength: wb }, ku = Eb;
const Ya = (e, t, r = 0) => (ku.encode(e, t, r), t), Ja = (e) => ku.encodingLength(e), Cs = (e, t) => {
  const r = t.byteLength, n = Ja(e), i = n + Ja(r), s = new Uint8Array(i + r);
  return Ya(e, s, 0), Ya(r, s, n), s.set(t, i), new Sb(e, r, t, s);
};
class Sb {
  constructor(t, r, n, i) {
    this.code = t, this.size = r, this.digest = n, this.bytes = i;
  }
}
const Gu = ({ name: e, code: t, encode: r }) => new Db(e, t, r);
class Db {
  constructor(t, r, n) {
    this.name = t, this.code = r, this.encode = n;
  }
  digest(t) {
    if (t instanceof Uint8Array) {
      const r = this.encode(t);
      return r instanceof Uint8Array ? Cs(this.code, r) : r.then((n) => Cs(this.code, n));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const Yu = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t)), Ob = Gu({ name: "sha2-256", code: 18, encode: Yu("SHA-256") }), xb = Gu({ name: "sha2-512", code: 19, encode: Yu("SHA-512") });
var Ib = Object.freeze({ __proto__: null, sha256: Ob, sha512: xb });
const Ju = 0, Pb = "identity", Xu = Vu, Tb = (e) => Cs(Ju, Xu(e)), Rb = { code: Ju, name: Pb, encode: Xu, digest: Tb };
var Ab = Object.freeze({ __proto__: null, identity: Rb });
new TextEncoder(), new TextDecoder();
const Xa = { ...S_, ...O_, ...I_, ...T_, ...C_, ...z_, ...W_, ...G_, ...Z_, ...sb };
({ ...Ib, ...Ab });
function Qu(e) {
  return globalThis.Buffer != null ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e;
}
function Cb(e = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Qu(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e);
}
function Zu(e, t, r, n) {
  return { name: e, prefix: t, encoder: { name: e, prefix: t, encode: r }, decoder: { decode: n } };
}
const Qa = Zu("utf8", "u", (e) => "u" + new TextDecoder("utf8").decode(e), (e) => new TextEncoder().encode(e.substring(1))), Mi = Zu("ascii", "a", (e) => {
  let t = "a";
  for (let r = 0; r < e.length; r++)
    t += String.fromCharCode(e[r]);
  return t;
}, (e) => {
  e = e.substring(1);
  const t = Cb(e.length);
  for (let r = 0; r < e.length; r++)
    t[r] = e.charCodeAt(r);
  return t;
}), Nb = { utf8: Qa, "utf-8": Qa, hex: Xa.base16, latin1: Mi, ascii: Mi, binary: Mi, ...Xa };
function $b(e, t = "utf8") {
  const r = Nb[t];
  if (!r)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Qu(globalThis.Buffer.from(e, "utf-8")) : r.decoder.decode(`${r.prefix}${e}`);
}
const el = "wc", Lb = 2, lo = "core", _r = `${el}@2:${lo}:`, jb = { name: lo, logger: "error" }, Fb = { database: ":memory:" }, Ub = "crypto", Za = "client_ed25519_seed", Mb = te.ONE_DAY, Bb = "keychain", qb = "0.3", zb = "messages", Vb = "0.3", Kb = te.SIX_HOURS, Wb = "publisher", tl = "irn", Hb = "error", rl = "wss://relay.walletconnect.com", ec = "wss://relay.walletconnect.org", kb = "relayer", Xe = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, Gb = "_subscription", _n = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, Yb = te.ONE_SECOND / 2, Jb = "2.9.1", Xb = 1e4, Qb = "0.3", Zb = "WALLETCONNECT_CLIENT_ID", nr = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, ev = "subscription", tv = "0.3", rv = te.FIVE_SECONDS * 1e3, nv = "pairing", iv = "0.3", bn = { wc_pairingDelete: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 0 } } }, rr = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, sv = "history", ov = "0.3", av = "expirer", Vt = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, cv = "0.3", Bi = "verify-api", tc = "https://verify.walletconnect.com";
class uv {
  constructor(t, r) {
    this.core = t, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = Bb, this.version = qb, this.initialized = !1, this.storagePrefix = _r, this.init = async () => {
      if (!this.initialized) {
        const n = await this.getKeyChain();
        typeof n < "u" && (this.keychain = n), this.initialized = !0;
      }
    }, this.has = (n) => (this.isInitialized(), this.keychain.has(n)), this.set = async (n, i) => {
      this.isInitialized(), this.keychain.set(n, i), await this.persist();
    }, this.get = (n) => {
      this.isInitialized();
      const i = this.keychain.get(n);
      if (typeof i > "u") {
        const { message: s } = X("NO_MATCHING_KEY", `${this.name}: ${n}`);
        throw new Error(s);
      }
      return i;
    }, this.del = async (n) => {
      this.isInitialized(), this.keychain.delete(n), await this.persist();
    }, this.core = t, this.logger = Re.generateChildLogger(r, this.name);
  }
  get context() {
    return Re.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setKeyChain(t) {
    await this.core.storage.setItem(this.storageKey, Au(t));
  }
  async getKeyChain() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < "u" ? Cu(t) : void 0;
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
class lv {
  constructor(t, r, n) {
    this.core = t, this.logger = r, this.name = Ub, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (i) => (this.isInitialized(), this.keychain.has(i)), this.getClientId = async () => {
      this.isInitialized();
      const i = await this.getClientSeed(), s = ma(i);
      return yu(s.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const i = hy();
      return this.setPrivateKey(i.publicKey, i.privateKey);
    }, this.signJWT = async (i) => {
      this.isInitialized();
      const s = await this.getClientSeed(), o = ma(s), a = xs();
      return await mg(a, i, Mb, o);
    }, this.generateSharedKey = (i, s, o) => {
      this.isInitialized();
      const a = this.getPrivateKey(i), f = dy(a, s);
      return this.setSymKey(f, o);
    }, this.setSymKey = async (i, s) => {
      this.isInitialized();
      const o = s || py(i);
      return await this.keychain.set(o, i), o;
    }, this.deleteKeyPair = async (i) => {
      this.isInitialized(), await this.keychain.del(i);
    }, this.deleteSymKey = async (i) => {
      this.isInitialized(), await this.keychain.del(i);
    }, this.encode = async (i, s, o) => {
      this.isInitialized();
      const a = Tu(o), f = Ws(s);
      if (Aa(a)) {
        const g = a.senderPublicKey, v = a.receiverPublicKey;
        i = await this.generateSharedKey(g, v);
      }
      const l = this.getSymKey(i), { type: h, senderPublicKey: y } = a;
      return yy({ type: h, symKey: l, message: f, senderPublicKey: y });
    }, this.decode = async (i, s, o) => {
      this.isInitialized();
      const a = vy(s, o);
      if (Aa(a)) {
        const f = a.receiverPublicKey, l = a.senderPublicKey;
        i = await this.generateSharedKey(f, l);
      }
      try {
        const f = this.getSymKey(i), l = _y({ symKey: f, encoded: s });
        return tu(l);
      } catch (f) {
        this.logger.error(`Failed to decode message from topic: '${i}', clientId: '${await this.getClientId()}'`), this.logger.error(f);
      }
    }, this.getPayloadType = (i) => {
      const s = ii(i);
      return Fn(s.type);
    }, this.getPayloadSenderPublicKey = (i) => {
      const s = ii(i);
      return s.senderPublicKey ? Pt(s.senderPublicKey, It) : void 0;
    }, this.core = t, this.logger = Re.generateChildLogger(r, this.name), this.keychain = n || new uv(this.core, this.logger);
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
      t = this.keychain.get(Za);
    } catch {
      t = xs(), await this.keychain.set(Za, t);
    }
    return $b(t, "base16");
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
class fv extends Od {
  constructor(t, r) {
    super(t, r), this.logger = t, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = zb, this.version = Vb, this.initialized = !1, this.storagePrefix = _r, this.init = async () => {
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
    }, this.set = async (n, i) => {
      this.isInitialized();
      const s = Gr(i);
      let o = this.messages.get(n);
      return typeof o > "u" && (o = {}), typeof o[s] < "u" || (o[s] = i, this.messages.set(n, o), await this.persist()), s;
    }, this.get = (n) => {
      this.isInitialized();
      let i = this.messages.get(n);
      return typeof i > "u" && (i = {}), i;
    }, this.has = (n, i) => {
      this.isInitialized();
      const s = this.get(n), o = Gr(i);
      return typeof s[o] < "u";
    }, this.del = async (n) => {
      this.isInitialized(), this.messages.delete(n), await this.persist();
    }, this.logger = Re.generateChildLogger(t, this.name), this.core = r;
  }
  get context() {
    return Re.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setRelayerMessages(t) {
    await this.core.storage.setItem(this.storageKey, Au(t));
  }
  async getRelayerMessages() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < "u" ? Cu(t) : void 0;
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
class hv extends xd {
  constructor(t, r) {
    super(t, r), this.relayer = t, this.logger = r, this.events = new Jt.EventEmitter(), this.name = Wb, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = te.toMiliseconds(te.TEN_SECONDS), this.queueTimeout = te.toMiliseconds(te.FIVE_SECONDS), this.needsTransportRestart = !1, this.publish = async (n, i, s) => {
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: i, opts: s } });
      try {
        const o = (s == null ? void 0 : s.ttl) || Kb, a = Is(s), f = (s == null ? void 0 : s.prompt) || !1, l = (s == null ? void 0 : s.tag) || 0, h = (s == null ? void 0 : s.id) || oo().toString(), y = { topic: n, message: i, opts: { ttl: o, relay: a, prompt: f, tag: l, id: h } }, g = setTimeout(() => this.queue.set(h, y), this.queueTimeout);
        try {
          await await si(this.rpcPublish(n, i, o, a, f, l, h), this.publishTimeout), clearTimeout(g), this.relayer.events.emit(Xe.publish, y);
        } catch {
          this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0;
          return;
        }
        this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: i, opts: s } });
      } catch (o) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(o), o;
      }
    }, this.on = (n, i) => {
      this.events.on(n, i);
    }, this.once = (n, i) => {
      this.events.once(n, i);
    }, this.off = (n, i) => {
      this.events.off(n, i);
    }, this.removeListener = (n, i) => {
      this.events.removeListener(n, i);
    }, this.relayer = t, this.logger = Re.generateChildLogger(r, this.name), this.registerEventListeners();
  }
  get context() {
    return Re.getLoggerContext(this.logger);
  }
  rpcPublish(t, r, n, i, s, o, a) {
    var f, l, h, y;
    const g = { method: Zn(i.protocol).publish, params: { topic: t, message: r, ttl: n, prompt: s, tag: o }, id: a };
    return xt((f = g.params) == null ? void 0 : f.prompt) && ((l = g.params) == null || delete l.prompt), xt((h = g.params) == null ? void 0 : h.tag) && ((y = g.params) == null || delete y.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: g }), this.relayer.request(g);
  }
  onPublish(t) {
    this.queue.delete(t);
  }
  checkQueue() {
    this.queue.forEach(async (t) => {
      const { topic: r, message: n, opts: i } = t;
      await this.publish(r, n, i);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Zr.HEARTBEAT_EVENTS.pulse, () => {
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
class dv {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.set = (t, r) => {
      const n = this.get(t);
      this.exists(t, r) || this.map.set(t, [...n, r]);
    }, this.get = (t) => this.map.get(t) || [], this.exists = (t, r) => this.get(t).includes(r), this.delete = (t, r) => {
      if (typeof r > "u") {
        this.map.delete(t);
        return;
      }
      if (!this.map.has(t))
        return;
      const n = this.get(t);
      if (!this.exists(t, r))
        return;
      const i = n.filter((s) => s !== r);
      if (!i.length) {
        this.map.delete(t);
        return;
      }
      this.map.set(t, i);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var pv = Object.defineProperty, gv = Object.defineProperties, yv = Object.getOwnPropertyDescriptors, rc = Object.getOwnPropertySymbols, _v = Object.prototype.hasOwnProperty, bv = Object.prototype.propertyIsEnumerable, nc = (e, t, r) => t in e ? pv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, vn = (e, t) => {
  for (var r in t || (t = {}))
    _v.call(t, r) && nc(e, r, t[r]);
  if (rc)
    for (var r of rc(t))
      bv.call(t, r) && nc(e, r, t[r]);
  return e;
}, qi = (e, t) => gv(e, yv(t));
class vv extends Td {
  constructor(t, r) {
    super(t, r), this.relayer = t, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new dv(), this.events = new Jt.EventEmitter(), this.name = ev, this.version = tv, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = _r, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restart(), this.registerEventListeners(), this.onEnable(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (n, i) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: i } });
      try {
        const s = Is(i), o = { topic: n, relay: s };
        this.pending.set(n, o);
        const a = await this.rpcSubscribe(n, s);
        return this.onSubscribe(a, o), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: i } }), a;
      } catch (s) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(s), s;
      }
    }, this.unsubscribe = async (n, i) => {
      await this.restartToComplete(), this.isInitialized(), typeof (i == null ? void 0 : i.id) < "u" ? await this.unsubscribeById(n, i.id, i) : await this.unsubscribeByTopic(n, i);
    }, this.isSubscribed = async (n) => this.topics.includes(n) ? !0 : await new Promise((i, s) => {
      const o = new te.Watch();
      o.start(this.pendingSubscriptionWatchLabel);
      const a = setInterval(() => {
        !this.pending.has(n) && this.topics.includes(n) && (clearInterval(a), o.stop(this.pendingSubscriptionWatchLabel), i(!0)), o.elapsed(this.pendingSubscriptionWatchLabel) >= rv && (clearInterval(a), o.stop(this.pendingSubscriptionWatchLabel), s(new Error("Subscription resolution timeout")));
      }, this.pollingInterval);
    }).catch(() => !1), this.on = (n, i) => {
      this.events.on(n, i);
    }, this.once = (n, i) => {
      this.events.once(n, i);
    }, this.off = (n, i) => {
      this.events.off(n, i);
    }, this.removeListener = (n, i) => {
      this.events.removeListener(n, i);
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
    let n = !1;
    try {
      n = this.getSubscription(t).topic === r;
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
  async unsubscribeByTopic(t, r) {
    const n = this.topicMap.get(t);
    await Promise.all(n.map(async (i) => await this.unsubscribeById(t, i, r)));
  }
  async unsubscribeById(t, r, n) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: t, id: r, opts: n } });
    try {
      const i = Is(n);
      await this.rpcUnsubscribe(t, r, i);
      const s = ut("USER_DISCONNECTED", `${this.name}, ${t}`);
      await this.onUnsubscribe(t, r, s), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: t, id: r, opts: n } });
    } catch (i) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(i), i;
    }
  }
  async rpcSubscribe(t, r) {
    const n = { method: Zn(r.protocol).subscribe, params: { topic: t } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      await await si(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(Xe.connection_stalled);
    }
    return Gr(t + this.clientId);
  }
  async rpcBatchSubscribe(t) {
    if (!t.length)
      return;
    const r = t[0].relay, n = { method: Zn(r.protocol).batchSubscribe, params: { topics: t.map((i) => i.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      return await await si(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(Xe.connection_stalled);
    }
  }
  rpcUnsubscribe(t, r, n) {
    const i = { method: Zn(n.protocol).unsubscribe, params: { topic: t, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i }), this.relayer.request(i);
  }
  onSubscribe(t, r) {
    this.setSubscription(t, qi(vn({}, r), { id: t })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(t) {
    t.length && t.forEach((r) => {
      this.setSubscription(r.id, vn({}, r)), this.pending.delete(r.topic);
    });
  }
  async onUnsubscribe(t, r, n) {
    this.events.removeAllListeners(r), this.hasSubscription(r, t) && this.deleteSubscription(r, n), await this.relayer.messages.del(t);
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
    this.subscriptions.set(t, vn({}, r)), this.topicMap.set(r.topic, t), this.events.emit(nr.created, r);
  }
  getSubscription(t) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: t });
    const r = this.subscriptions.get(t);
    if (!r) {
      const { message: n } = X("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw new Error(n);
    }
    return r;
  }
  deleteSubscription(t, r) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: t, reason: r });
    const n = this.getSubscription(t);
    this.subscriptions.delete(t), this.topicMap.delete(n.topic, t), this.events.emit(nr.deleted, qi(vn({}, n), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(nr.sync);
  }
  async reset() {
    if (this.cached.length) {
      const t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < t; r++) {
        const n = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(n);
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
    Un(r) && this.onBatchSubscribe(r.map((n, i) => qi(vn({}, t[i]), { id: n })));
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
var mv = Object.defineProperty, ic = Object.getOwnPropertySymbols, wv = Object.prototype.hasOwnProperty, Ev = Object.prototype.propertyIsEnumerable, sc = (e, t, r) => t in e ? mv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Sv = (e, t) => {
  for (var r in t || (t = {}))
    wv.call(t, r) && sc(e, r, t[r]);
  if (ic)
    for (var r of ic(t))
      Ev.call(t, r) && sc(e, r, t[r]);
  return e;
};
class Dv extends Id {
  constructor(t) {
    super(t), this.protocol = "wc", this.version = 2, this.events = new Jt.EventEmitter(), this.name = kb, this.transportExplicitlyClosed = !1, this.initialized = !1, this.reconnecting = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.request = async (r) => {
      this.logger.debug("Publishing Request Payload");
      try {
        return await this.toEstablishConnection(), await this.provider.request(r);
      } catch (n) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(n), n;
      }
    }, this.core = t.core, this.logger = typeof t.logger < "u" && typeof t.logger != "string" ? Re.generateChildLogger(t.logger, this.name) : Re.pino(Re.getDefaultLoggerOptions({ level: t.logger || Hb })), this.messages = new fv(this.logger, t.core), this.subscriber = new vv(this, this.logger), this.publisher = new hv(this, this.logger), this.relayUrl = (t == null ? void 0 : t.relayUrl) || rl, this.projectId = t.projectId, this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${ec}...`), await this.restartTransport(ec);
    }
    this.registerEventListeners(), this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, Xb);
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
  async publish(t, r, n) {
    this.isInitialized(), await this.publisher.publish(t, r, n), await this.recordMessageEvent({ topic: t, message: r, publishedAt: Date.now() });
  }
  async subscribe(t, r) {
    var n;
    this.isInitialized();
    let i = ((n = this.subscriber.topicMap.get(t)) == null ? void 0 : n[0]) || "";
    return i || (await Promise.all([new Promise((s) => {
      this.subscriber.once(nr.created, (o) => {
        o.topic === t && s();
      });
    }), new Promise(async (s) => {
      i = await this.subscriber.subscribe(t, r), s();
    })]), i);
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
        }), await Promise.race([new Promise(async (r, n) => {
          await si(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`).catch((i) => n(i)).then(() => r()).finally(() => this.removeListener(Xe.transport_closed, this.rejectTransportOpen));
        }), new Promise((r) => this.once(Xe.transport_closed, this.rejectTransportOpen))])]);
      } catch (r) {
        this.logger.error(r);
        const n = r;
        if (!this.isConnectionStalled(n.message))
          throw r;
        this.events.emit(Xe.transport_closed);
      } finally {
        this.reconnecting = !1;
      }
    }
  }
  async restartTransport(t) {
    this.transportExplicitlyClosed || this.reconnecting || (this.relayUrl = t || this.relayUrl, this.connected && await Promise.all([new Promise((r) => {
      this.provider.once(_n.disconnect, () => {
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
    this.provider = new i_(new c_(Ry({ sdkVersion: Jb, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: t, useOnCloseEvent: !0 }))), this.registerProviderListeners();
  }
  async recordMessageEvent(t) {
    const { topic: r, message: n } = t;
    await this.messages.set(r, n);
  }
  async shouldIgnoreMessageEvent(t) {
    const { topic: r, message: n } = t;
    if (!n || n.length === 0)
      return this.logger.debug(`Ignoring invalid/empty message: ${n}`), !0;
    if (!await this.subscriber.isSubscribed(r))
      return this.logger.debug(`Ignoring message for non-subscribed topic ${r}`), !0;
    const i = this.messages.has(r, n);
    return i && this.logger.debug(`Ignoring duplicate message: ${n}`), i;
  }
  async onProviderPayload(t) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: t }), uo(t)) {
      if (!t.method.endsWith(Gb))
        return;
      const r = t.params, { topic: n, message: i, publishedAt: s } = r.data, o = { topic: n, message: i, publishedAt: s };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Sv({ type: "event", event: r.id }, o)), this.events.emit(r.id, o), await this.acknowledgePayload(t), await this.onMessageEvent(o);
    } else
      Si(t) && this.events.emit(Xe.message_ack, t);
  }
  async onMessageEvent(t) {
    await this.shouldIgnoreMessageEvent(t) || (this.events.emit(Xe.message, t), await this.recordMessageEvent(t));
  }
  async acknowledgePayload(t) {
    const r = ao(t.id, !0);
    await this.provider.connection.send(r);
  }
  registerProviderListeners() {
    this.provider.on(_n.payload, (t) => this.onProviderPayload(t)), this.provider.on(_n.connect, () => {
      this.events.emit(Xe.connect);
    }), this.provider.on(_n.disconnect, () => {
      this.onProviderDisconnect();
    }), this.provider.on(_n.error, (t) => {
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
    }, te.toMiliseconds(Yb));
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
var Ov = Object.defineProperty, oc = Object.getOwnPropertySymbols, xv = Object.prototype.hasOwnProperty, Iv = Object.prototype.propertyIsEnumerable, ac = (e, t, r) => t in e ? Ov(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, cc = (e, t) => {
  for (var r in t || (t = {}))
    xv.call(t, r) && ac(e, r, t[r]);
  if (oc)
    for (var r of oc(t))
      Iv.call(t, r) && ac(e, r, t[r]);
  return e;
};
class Oi extends Pd {
  constructor(t, r, n, i = _r, s = void 0) {
    super(t, r, n, i), this.core = t, this.logger = r, this.name = n, this.map = /* @__PURE__ */ new Map(), this.version = Qb, this.cached = [], this.initialized = !1, this.storagePrefix = _r, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o) => {
        this.getKey && o !== null && !xt(o) ? this.map.set(this.getKey(o), o) : Zy(o) ? this.map.set(o.id, o) : e0(o) && this.map.set(o.topic, o);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (o, a) => {
      this.isInitialized(), this.map.has(o) ? await this.update(o, a) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: o, value: a }), this.map.set(o, a), await this.persist());
    }, this.get = (o) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: o }), this.getData(o)), this.getAll = (o) => (this.isInitialized(), o ? this.values.filter((a) => Object.keys(o).every((f) => l_(a[f], o[f]))) : this.values), this.update = async (o, a) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: o, update: a });
      const f = cc(cc({}, this.getData(o)), a);
      this.map.set(o, f), await this.persist();
    }, this.delete = async (o, a) => {
      this.isInitialized(), this.map.has(o) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: o, reason: a }), this.map.delete(o), await this.persist());
    }, this.logger = Re.generateChildLogger(r, this.name), this.storagePrefix = i, this.getKey = s;
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
      const { message: n } = X("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw this.logger.error(n), new Error(n);
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
class Pv {
  constructor(t, r) {
    this.core = t, this.logger = r, this.name = nv, this.version = iv, this.events = new Kc(), this.initialized = !1, this.storagePrefix = _r, this.ignoredPayloadTypes = [Mr], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: n }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...n])];
    }, this.create = async () => {
      this.isInitialized();
      const n = xs(), i = await this.core.crypto.setSymKey(n), s = Ht(te.FIVE_MINUTES), o = { protocol: tl }, a = { topic: i, expiry: s, relay: o, active: !1 }, f = Vy({ protocol: this.core.protocol, version: this.core.version, topic: i, symKey: n, relay: o });
      return await this.pairings.set(i, a), await this.core.relayer.subscribe(i), this.core.expirer.set(i, s), { topic: i, uri: f };
    }, this.pair = async (n) => {
      this.isInitialized(), this.isValidPair(n);
      const { topic: i, symKey: s, relay: o } = By(n.uri);
      if (this.pairings.keys.includes(i))
        throw new Error(`Pairing already exists: ${i}`);
      if (this.core.crypto.hasKeys(i))
        throw new Error(`Keychain already exists: ${i}`);
      const a = Ht(te.FIVE_MINUTES), f = { topic: i, relay: o, expiry: a, active: !1 };
      return await this.pairings.set(i, f), await this.core.crypto.setSymKey(s, i), await this.core.relayer.subscribe(i, { relay: o }), this.core.expirer.set(i, a), n.activatePairing && await this.activate({ topic: i }), f;
    }, this.activate = async ({ topic: n }) => {
      this.isInitialized();
      const i = Ht(te.THIRTY_DAYS);
      await this.pairings.update(n, { active: !0, expiry: i }), this.core.expirer.set(n, i);
    }, this.ping = async (n) => {
      this.isInitialized(), await this.isValidPing(n);
      const { topic: i } = n;
      if (this.pairings.keys.includes(i)) {
        const s = await this.sendRequest(i, "wc_pairingPing", {}), { done: o, resolve: a, reject: f } = Wr();
        this.events.once(st("pairing_ping", s), ({ error: l }) => {
          l ? f(l) : a();
        }), await o();
      }
    }, this.updateExpiry = async ({ topic: n, expiry: i }) => {
      this.isInitialized(), await this.pairings.update(n, { expiry: i });
    }, this.updateMetadata = async ({ topic: n, metadata: i }) => {
      this.isInitialized(), await this.pairings.update(n, { peerMetadata: i });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (n) => {
      this.isInitialized(), await this.isValidDisconnect(n);
      const { topic: i } = n;
      this.pairings.keys.includes(i) && (await this.sendRequest(i, "wc_pairingDelete", ut("USER_DISCONNECTED")), await this.deletePairing(i));
    }, this.sendRequest = async (n, i, s) => {
      const o = Ei(i, s), a = await this.core.crypto.encode(n, o), f = bn[i].req;
      return this.core.history.set(n, o), this.core.relayer.publish(n, a, f), o.id;
    }, this.sendResult = async (n, i, s) => {
      const o = ao(n, s), a = await this.core.crypto.encode(i, o), f = await this.core.history.get(i, n), l = bn[f.request.method].res;
      await this.core.relayer.publish(i, a, l), await this.core.history.resolve(o);
    }, this.sendError = async (n, i, s) => {
      const o = co(n, s), a = await this.core.crypto.encode(i, o), f = await this.core.history.get(i, n), l = bn[f.request.method] ? bn[f.request.method].res : bn.unregistered_method.res;
      await this.core.relayer.publish(i, a, l), await this.core.history.resolve(o);
    }, this.deletePairing = async (n, i) => {
      await this.core.relayer.unsubscribe(n), await Promise.all([this.pairings.delete(n, ut("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(n), i ? Promise.resolve() : this.core.expirer.del(n)]);
    }, this.cleanup = async () => {
      const n = this.pairings.getAll().filter((i) => gr(i.expiry));
      await Promise.all(n.map((i) => this.deletePairing(i.topic)));
    }, this.onRelayEventRequest = (n) => {
      const { topic: i, payload: s } = n;
      switch (s.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(i, s);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(i, s);
        default:
          return this.onUnknownRpcMethodRequest(i, s);
      }
    }, this.onRelayEventResponse = async (n) => {
      const { topic: i, payload: s } = n, o = (await this.core.history.get(i, s.id)).request.method;
      switch (o) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(i, s);
        default:
          return this.onUnknownRpcMethodResponse(o);
      }
    }, this.onPairingPingRequest = async (n, i) => {
      const { id: s } = i;
      try {
        this.isValidPing({ topic: n }), await this.sendResult(s, n, !0), this.events.emit("pairing_ping", { id: s, topic: n });
      } catch (o) {
        await this.sendError(s, n, o), this.logger.error(o);
      }
    }, this.onPairingPingResponse = (n, i) => {
      const { id: s } = i;
      setTimeout(() => {
        cr(i) ? this.events.emit(st("pairing_ping", s), {}) : kt(i) && this.events.emit(st("pairing_ping", s), { error: i.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (n, i) => {
      const { id: s } = i;
      try {
        this.isValidDisconnect({ topic: n }), await this.deletePairing(n), this.events.emit("pairing_delete", { id: s, topic: n });
      } catch (o) {
        await this.sendError(s, n, o), this.logger.error(o);
      }
    }, this.onUnknownRpcMethodRequest = async (n, i) => {
      const { id: s, method: o } = i;
      try {
        if (this.registeredMethods.includes(o))
          return;
        const a = ut("WC_METHOD_UNSUPPORTED", o);
        await this.sendError(s, n, a), this.logger.error(a);
      } catch (a) {
        await this.sendError(s, n, a), this.logger.error(a);
      }
    }, this.onUnknownRpcMethodResponse = (n) => {
      this.registeredMethods.includes(n) || this.logger.error(ut("WC_METHOD_UNSUPPORTED", n));
    }, this.isValidPair = (n) => {
      if (!Tt(n)) {
        const { message: i } = X("MISSING_OR_INVALID", `pair() params: ${n}`);
        throw new Error(i);
      }
      if (!Qy(n.uri)) {
        const { message: i } = X("MISSING_OR_INVALID", `pair() uri: ${n.uri}`);
        throw new Error(i);
      }
    }, this.isValidPing = async (n) => {
      if (!Tt(n)) {
        const { message: s } = X("MISSING_OR_INVALID", `ping() params: ${n}`);
        throw new Error(s);
      }
      const { topic: i } = n;
      await this.isValidPairingTopic(i);
    }, this.isValidDisconnect = async (n) => {
      if (!Tt(n)) {
        const { message: s } = X("MISSING_OR_INVALID", `disconnect() params: ${n}`);
        throw new Error(s);
      }
      const { topic: i } = n;
      await this.isValidPairingTopic(i);
    }, this.isValidPairingTopic = async (n) => {
      if (!lt(n, !1)) {
        const { message: i } = X("MISSING_OR_INVALID", `pairing topic should be a string: ${n}`);
        throw new Error(i);
      }
      if (!this.pairings.keys.includes(n)) {
        const { message: i } = X("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n}`);
        throw new Error(i);
      }
      if (gr(this.pairings.get(n).expiry)) {
        await this.deletePairing(n);
        const { message: i } = X("EXPIRED", `pairing topic: ${n}`);
        throw new Error(i);
      }
    }, this.core = t, this.logger = Re.generateChildLogger(r, this.name), this.pairings = new Oi(this.core, this.logger, this.name, this.storagePrefix);
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
    this.core.relayer.on(Xe.message, async (t) => {
      const { topic: r, message: n } = t;
      if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n)))
        return;
      const i = await this.core.crypto.decode(r, n);
      uo(i) ? (this.core.history.set(r, i), this.onRelayEventRequest({ topic: r, payload: i })) : Si(i) && (await this.core.history.resolve(i), await this.onRelayEventResponse({ topic: r, payload: i }), this.core.history.delete(r, i.id));
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(Vt.expired, async (t) => {
      const { topic: r } = $u(t.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit("pairing_expire", { topic: r }));
    });
  }
}
class Tv extends Dd {
  constructor(t, r) {
    super(t, r), this.core = t, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new Jt.EventEmitter(), this.name = sv, this.version = ov, this.cached = [], this.initialized = !1, this.storagePrefix = _r, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.records.set(n.id, n)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (n, i, s) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: n, request: i, chainId: s }), this.records.has(i.id))
        return;
      const o = { id: i.id, topic: n, request: { method: i.method, params: i.params || null }, chainId: s, expiry: Ht(te.THIRTY_DAYS) };
      this.records.set(o.id, o), this.events.emit(rr.created, o);
    }, this.resolve = async (n) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: n }), !this.records.has(n.id))
        return;
      const i = await this.getRecord(n.id);
      typeof i.response > "u" && (i.response = kt(n) ? { error: n.error } : { result: n.result }, this.records.set(i.id, i), this.events.emit(rr.updated, i));
    }, this.get = async (n, i) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: n, id: i }), await this.getRecord(i)), this.delete = (n, i) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: i }), this.values.forEach((s) => {
        if (s.topic === n) {
          if (typeof i < "u" && s.id !== i)
            return;
          this.records.delete(s.id), this.events.emit(rr.deleted, s);
        }
      });
    }, this.exists = async (n, i) => (this.isInitialized(), this.records.has(i) ? (await this.getRecord(i)).topic === n : !1), this.on = (n, i) => {
      this.events.on(n, i);
    }, this.once = (n, i) => {
      this.events.once(n, i);
    }, this.off = (n, i) => {
      this.events.off(n, i);
    }, this.removeListener = (n, i) => {
      this.events.removeListener(n, i);
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
      const n = { topic: r.topic, request: Ei(r.request.method, r.request.params, r.id), chainId: r.chainId };
      return t.push(n);
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
      const { message: n } = X("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw new Error(n);
    }
    return r;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(rr.sync);
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
    this.events.on(rr.created, (t) => {
      const r = rr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: t }), this.persist();
    }), this.events.on(rr.updated, (t) => {
      const r = rr.updated;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: t }), this.persist();
    }), this.events.on(rr.deleted, (t) => {
      const r = rr.deleted;
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
class Rv extends Rd {
  constructor(t, r) {
    super(t, r), this.core = t, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new Jt.EventEmitter(), this.name = av, this.version = cv, this.cached = [], this.initialized = !1, this.storagePrefix = _r, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.expirations.set(n.target, n)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.has = (n) => {
      try {
        const i = this.formatTarget(n);
        return typeof this.getExpiration(i) < "u";
      } catch {
        return !1;
      }
    }, this.set = (n, i) => {
      this.isInitialized();
      const s = this.formatTarget(n), o = { target: s, expiry: i };
      this.expirations.set(s, o), this.checkExpiry(s, o), this.events.emit(Vt.created, { target: s, expiration: o });
    }, this.get = (n) => {
      this.isInitialized();
      const i = this.formatTarget(n);
      return this.getExpiration(i);
    }, this.del = (n) => {
      if (this.isInitialized(), this.has(n)) {
        const i = this.formatTarget(n), s = this.getExpiration(i);
        this.expirations.delete(i), this.events.emit(Vt.deleted, { target: i, expiration: s });
      }
    }, this.on = (n, i) => {
      this.events.on(n, i);
    }, this.once = (n, i) => {
      this.events.once(n, i);
    }, this.off = (n, i) => {
      this.events.off(n, i);
    }, this.removeListener = (n, i) => {
      this.events.removeListener(n, i);
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
      return Ay(t);
    if (typeof t == "number")
      return Cy(t);
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
      const { message: n } = X("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw this.logger.error(n), new Error(n);
    }
    return r;
  }
  checkExpiry(t, r) {
    const { expiry: n } = r;
    te.toMiliseconds(n) - Date.now() <= 0 && this.expire(t, r);
  }
  expire(t, r) {
    this.expirations.delete(t), this.events.emit(Vt.expired, { target: t, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((t, r) => this.checkExpiry(r, t));
  }
  registerEventListeners() {
    this.core.heartbeat.on(Zr.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(Vt.created, (t) => {
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
class Av extends Ad {
  constructor(t, r) {
    super(t, r), this.projectId = t, this.logger = r, this.name = Bi, this.initialized = !1, this.init = async (n) => {
      Ru() || !ro() || (this.verifyUrl = (n == null ? void 0 : n.verifyUrl) || tc, await this.createIframe());
    }, this.register = async (n) => {
      var i;
      if (this.initialized || await this.init(), !!this.iframe)
        try {
          (i = this.iframe.contentWindow) == null || i.postMessage(n.attestationId, this.verifyUrl), this.logger.info(`postMessage sent: ${n.attestationId} ${this.verifyUrl}`);
        } catch {
        }
    }, this.resolve = async (n) => {
      var i;
      if (this.isDevEnv)
        return "";
      this.logger.info(`resolving attestation: ${n.attestationId}`);
      const s = this.startAbortTimer(te.FIVE_SECONDS), o = await fetch(`${this.verifyUrl}/attestation/${n.attestationId}`, { signal: this.abortController.signal });
      return clearTimeout(s), o.status === 200 ? (i = await o.json()) == null ? void 0 : i.origin : "";
    }, this.createIframe = async () => {
      try {
        await Promise.race([new Promise((n, i) => {
          if (document.getElementById(Bi))
            return n();
          const s = document.createElement("iframe");
          s.setAttribute("id", Bi), s.setAttribute("src", `${this.verifyUrl}/${this.projectId}`), s.style.display = "none", s.addEventListener("load", () => {
            this.initialized = !0, n();
          }), s.addEventListener("error", (o) => {
            i(o);
          }), document.body.append(s), this.iframe = s;
        }), new Promise((n) => {
          setTimeout(() => n("iframe load timeout"), te.toMiliseconds(te.ONE_SECOND / 2));
        })]);
      } catch (n) {
        this.logger.error(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.error(n);
      }
    }, this.logger = Re.generateChildLogger(r, this.name), this.verifyUrl = tc, this.abortController = new AbortController(), this.isDevEnv = to() && process.env.IS_VITEST;
  }
  get context() {
    return Re.getLoggerContext(this.logger);
  }
  startAbortTimer(t) {
    return setTimeout(() => this.abortController.abort(), te.toMiliseconds(t));
  }
}
var Cv = Object.defineProperty, uc = Object.getOwnPropertySymbols, Nv = Object.prototype.hasOwnProperty, $v = Object.prototype.propertyIsEnumerable, lc = (e, t, r) => t in e ? Cv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, fc = (e, t) => {
  for (var r in t || (t = {}))
    Nv.call(t, r) && lc(e, r, t[r]);
  if (uc)
    for (var r of uc(t))
      $v.call(t, r) && lc(e, r, t[r]);
  return e;
};
let Lv = class nl extends Sd {
  constructor(t) {
    super(t), this.protocol = el, this.version = Lb, this.name = lo, this.events = new Jt.EventEmitter(), this.initialized = !1, this.on = (n, i) => this.events.on(n, i), this.once = (n, i) => this.events.once(n, i), this.off = (n, i) => this.events.off(n, i), this.removeListener = (n, i) => this.events.removeListener(n, i), this.projectId = t == null ? void 0 : t.projectId, this.relayUrl = (t == null ? void 0 : t.relayUrl) || rl;
    const r = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : Re.pino(Re.getDefaultLoggerOptions({ level: (t == null ? void 0 : t.logger) || jb.logger }));
    this.logger = Re.generateChildLogger(r, this.name), this.heartbeat = new Zr.HeartBeat(), this.crypto = new lv(this, this.logger, t == null ? void 0 : t.keychain), this.history = new Tv(this, this.logger), this.expirer = new Rv(this, this.logger), this.storage = t != null && t.storage ? t.storage : new Zf(fc(fc({}, Fb), t == null ? void 0 : t.storageOptions)), this.relayer = new Dv({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new Pv(this, this.logger), this.verify = new Av(this.projectId || "", this.logger);
  }
  static async init(t) {
    const r = new nl(t);
    await r.initialize();
    const n = await r.crypto.getClientId();
    return await r.storage.setItem(Zb, n), r;
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
const jv = Lv;
let Fv = class {
  constructor(t) {
    this.opts = t, this.protocol = "wc", this.version = 2;
  }
}, Uv = class {
  constructor(t) {
    this.client = t;
  }
};
const il = "wc", sl = 2, ol = "client", fo = `${il}@${sl}:${ol}:`, zi = { name: ol, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, Mv = "WALLETCONNECT_DEEPLINK_CHOICE", Bv = "proposal", qv = "Proposal expired", zv = "session", Jn = te.SEVEN_DAYS, Vv = "engine", mn = { wc_sessionPropose: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, Vi = { min: te.FIVE_MINUTES, max: te.SEVEN_DAYS }, wn = { idle: "idle", active: "active" }, Kv = "request", Wv = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var Hv = Object.defineProperty, kv = Object.defineProperties, Gv = Object.getOwnPropertyDescriptors, hc = Object.getOwnPropertySymbols, Yv = Object.prototype.hasOwnProperty, Jv = Object.prototype.propertyIsEnumerable, dc = (e, t, r) => t in e ? Hv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, zt = (e, t) => {
  for (var r in t || (t = {}))
    Yv.call(t, r) && dc(e, r, t[r]);
  if (hc)
    for (var r of hc(t))
      Jv.call(t, r) && dc(e, r, t[r]);
  return e;
}, Ki = (e, t) => kv(e, Gv(t));
class Xv extends Uv {
  constructor(t) {
    super(t), this.name = Vv, this.events = new Kc(), this.initialized = !1, this.ignoredPayloadTypes = [Mr], this.requestQueue = { state: wn.idle, requests: [] }, this.requestQueueDelay = te.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({ methods: Object.keys(mn) }), this.initialized = !0, setTimeout(() => {
        this.requestQueue.requests = this.getPendingSessionRequests(), this.processRequestQueue();
      }, te.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      this.isInitialized();
      const n = Ki(zt({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(n);
      const { pairingTopic: i, requiredNamespaces: s, optionalNamespaces: o, sessionProperties: a, relays: f } = n;
      let l = i, h, y = !1;
      if (l && (y = this.client.core.pairing.pairings.get(l).active), !l || !y) {
        const { topic: x, uri: _ } = await this.client.core.pairing.create();
        l = x, h = _;
      }
      const g = await this.client.core.crypto.generateKeyPair(), v = zt({ requiredNamespaces: s, optionalNamespaces: o, relays: f ?? [{ protocol: tl }], proposer: { publicKey: g, metadata: this.client.metadata } }, a && { sessionProperties: a }), { reject: w, resolve: I, done: A } = Wr(te.FIVE_MINUTES, qv);
      if (this.events.once(st("session_connect"), async ({ error: x, session: _ }) => {
        if (x)
          w(x);
        else if (_) {
          _.self.publicKey = g;
          const S = Ki(zt({}, _), { requiredNamespaces: _.requiredNamespaces, optionalNamespaces: _.optionalNamespaces });
          await this.client.session.set(_.topic, S), await this.setExpiry(_.topic, _.expiry), l && await this.client.core.pairing.updateMetadata({ topic: l, metadata: _.peer.metadata }), I(S);
        }
      }), !l) {
        const { message: x } = X("NO_MATCHING_KEY", `connect() pairing topic: ${l}`);
        throw new Error(x);
      }
      const U = await this.sendRequest(l, "wc_sessionPropose", v), E = Ht(te.FIVE_MINUTES);
      return await this.setProposal(U, zt({ id: U, expiry: E }, v)), { uri: h, approval: A };
    }, this.pair = async (r) => (this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      this.isInitialized(), await this.isValidApprove(r);
      const { id: n, relayProtocol: i, namespaces: s, sessionProperties: o } = r, a = this.client.proposal.get(n);
      let { pairingTopic: f, proposer: l, requiredNamespaces: h, optionalNamespaces: y } = a;
      f = f || "", On(h) || (h = ky(s, "approve()"));
      const g = await this.client.core.crypto.generateKeyPair(), v = l.publicKey, w = await this.client.core.crypto.generateSharedKey(g, v);
      f && n && (await this.client.core.pairing.updateMetadata({ topic: f, metadata: l.metadata }), await this.sendResult(n, f, { relay: { protocol: i ?? "irn" }, responderPublicKey: g }), await this.client.proposal.delete(n, ut("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: f }));
      const I = zt({ relay: { protocol: i ?? "irn" }, namespaces: s, requiredNamespaces: h, optionalNamespaces: y, pairingTopic: f, controller: { publicKey: g, metadata: this.client.metadata }, expiry: Ht(Jn) }, o && { sessionProperties: o });
      await this.client.core.relayer.subscribe(w), await this.sendRequest(w, "wc_sessionSettle", I);
      const A = Ki(zt({}, I), { topic: w, pairingTopic: f, acknowledged: !1, self: I.controller, peer: { publicKey: l.publicKey, metadata: l.metadata }, controller: g });
      return await this.client.session.set(w, A), await this.setExpiry(w, Ht(Jn)), { topic: w, acknowledged: () => new Promise((U) => setTimeout(() => U(this.client.session.get(w)), 500)) };
    }, this.reject = async (r) => {
      this.isInitialized(), await this.isValidReject(r);
      const { id: n, reason: i } = r, { pairingTopic: s } = this.client.proposal.get(n);
      s && (await this.sendError(n, s, i), await this.client.proposal.delete(n, ut("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      this.isInitialized(), await this.isValidUpdate(r);
      const { topic: n, namespaces: i } = r, s = await this.sendRequest(n, "wc_sessionUpdate", { namespaces: i }), { done: o, resolve: a, reject: f } = Wr();
      return this.events.once(st("session_update", s), ({ error: l }) => {
        l ? f(l) : a();
      }), await this.client.session.update(n, { namespaces: i }), { acknowledged: o };
    }, this.extend = async (r) => {
      this.isInitialized(), await this.isValidExtend(r);
      const { topic: n } = r, i = await this.sendRequest(n, "wc_sessionExtend", {}), { done: s, resolve: o, reject: a } = Wr();
      return this.events.once(st("session_extend", i), ({ error: f }) => {
        f ? a(f) : o();
      }), await this.setExpiry(n, Ht(Jn)), { acknowledged: s };
    }, this.request = async (r) => {
      this.isInitialized(), await this.isValidRequest(r);
      const { chainId: n, request: i, topic: s, expiry: o } = r, a = await this.sendRequest(s, "wc_sessionRequest", { request: i, chainId: n }, o), { done: f, resolve: l, reject: h } = Wr(o);
      this.events.once(st("session_request", a), ({ error: g, result: v }) => {
        g ? h(g) : l(v);
      }), this.client.events.emit("session_request_sent", { topic: s, request: i, chainId: n, id: a });
      const y = await this.client.core.storage.getItem(Mv);
      return Ny({ id: a, topic: s, wcDeepLink: y }), await f();
    }, this.respond = async (r) => {
      this.isInitialized(), await this.isValidRespond(r);
      const { topic: n, response: i } = r, { id: s } = i;
      cr(i) ? await this.sendResult(s, n, i.result) : kt(i) && await this.sendError(s, n, i.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      this.isInitialized(), await this.isValidPing(r);
      const { topic: n } = r;
      if (this.client.session.keys.includes(n)) {
        const i = await this.sendRequest(n, "wc_sessionPing", {}), { done: s, resolve: o, reject: a } = Wr();
        this.events.once(st("session_ping", i), ({ error: f }) => {
          f ? a(f) : o();
        }), await s();
      } else
        this.client.core.pairing.pairings.keys.includes(n) && await this.client.core.pairing.ping({ topic: n });
    }, this.emit = async (r) => {
      this.isInitialized(), await this.isValidEmit(r);
      const { topic: n, event: i, chainId: s } = r;
      await this.sendRequest(n, "wc_sessionEvent", { event: i, chainId: s });
    }, this.disconnect = async (r) => {
      this.isInitialized(), await this.isValidDisconnect(r);
      const { topic: n } = r;
      if (this.client.session.keys.includes(n)) {
        const i = oo().toString();
        let s;
        const o = (a) => {
          (a == null ? void 0 : a.id.toString()) === i && (this.client.core.relayer.events.removeListener(Xe.message_ack, o), s());
        };
        await Promise.all([new Promise((a) => {
          s = a, this.client.core.relayer.on(Xe.message_ack, o);
        }), this.sendRequest(n, "wc_sessionDelete", ut("USER_DISCONNECTED"), void 0, i)]), await this.deleteSession(n);
      } else
        await this.client.core.pairing.disconnect({ topic: n });
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((n) => Jy(n, r))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (r) => {
      if (r.pairingTopic)
        try {
          const n = this.client.core.pairing.pairings.get(r.pairingTopic), i = this.client.core.pairing.pairings.getAll().filter((s) => {
            var o, a;
            return ((o = s.peerMetadata) == null ? void 0 : o.url) && ((a = s.peerMetadata) == null ? void 0 : a.url) === r.peer.metadata.url && s.topic && s.topic !== n.topic;
          });
          if (i.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${i.length} duplicate pairing(s)`), await Promise.all(i.map((s) => this.client.core.pairing.disconnect({ topic: s.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (n) {
          this.client.logger.error(n);
        }
    }, this.deleteSession = async (r, n) => {
      const { self: i } = this.client.session.get(r);
      await this.client.core.relayer.unsubscribe(r), this.client.session.delete(r, ut("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(i.publicKey) && await this.client.core.crypto.deleteKeyPair(i.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), n || this.client.core.expirer.del(r);
    }, this.deleteProposal = async (r, n) => {
      await Promise.all([this.client.proposal.delete(r, ut("USER_DISCONNECTED")), n ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, n, i = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, n), i ? Promise.resolve() : this.client.core.expirer.del(r)]), this.requestQueue.requests = this.requestQueue.requests.filter((s) => s.id !== r), i && (this.requestQueue.state = wn.idle);
    }, this.setExpiry = async (r, n) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: n }), this.client.core.expirer.set(r, n);
    }, this.setProposal = async (r, n) => {
      await this.client.proposal.set(r, n), this.client.core.expirer.set(r, n.expiry);
    }, this.setPendingSessionRequest = async (r) => {
      const n = mn.wc_sessionRequest.req.ttl, { id: i, topic: s, params: o } = r;
      await this.client.pendingRequest.set(i, { id: i, topic: s, params: o }), n && this.client.core.expirer.set(i, Ht(n));
    }, this.sendRequest = async (r, n, i, s, o) => {
      const a = Ei(n, i);
      if (ro() && Wv.includes(n)) {
        const h = Gr(JSON.stringify(a));
        await this.client.core.verify.register({ attestationId: h });
      }
      const f = await this.client.core.crypto.encode(r, a), l = mn[n].req;
      return s && (l.ttl = s), o && (l.id = o), this.client.core.history.set(r, a), this.client.core.relayer.publish(r, f, l), a.id;
    }, this.sendResult = async (r, n, i) => {
      const s = ao(r, i), o = await this.client.core.crypto.encode(n, s), a = await this.client.core.history.get(n, r), f = mn[a.request.method].res;
      this.client.core.relayer.publish(n, o, f), await this.client.core.history.resolve(s);
    }, this.sendError = async (r, n, i) => {
      const s = co(r, i), o = await this.client.core.crypto.encode(n, s), a = await this.client.core.history.get(n, r), f = mn[a.request.method].res;
      this.client.core.relayer.publish(n, o, f), await this.client.core.history.resolve(s);
    }, this.cleanup = async () => {
      const r = [], n = [];
      this.client.session.getAll().forEach((i) => {
        gr(i.expiry) && r.push(i.topic);
      }), this.client.proposal.getAll().forEach((i) => {
        gr(i.expiry) && n.push(i.id);
      }), await Promise.all([...r.map((i) => this.deleteSession(i)), ...n.map((i) => this.deleteProposal(i))]);
    }, this.onRelayEventRequest = (r) => {
      const { topic: n, payload: i } = r, s = i.method;
      switch (s) {
        case "wc_sessionPropose":
          return this.onSessionProposeRequest(n, i);
        case "wc_sessionSettle":
          return this.onSessionSettleRequest(n, i);
        case "wc_sessionUpdate":
          return this.onSessionUpdateRequest(n, i);
        case "wc_sessionExtend":
          return this.onSessionExtendRequest(n, i);
        case "wc_sessionPing":
          return this.onSessionPingRequest(n, i);
        case "wc_sessionDelete":
          return this.onSessionDeleteRequest(n, i);
        case "wc_sessionRequest":
          return this.onSessionRequest(n, i);
        case "wc_sessionEvent":
          return this.onSessionEventRequest(n, i);
        default:
          return this.client.logger.info(`Unsupported request method ${s}`);
      }
    }, this.onRelayEventResponse = async (r) => {
      const { topic: n, payload: i } = r, s = (await this.client.core.history.get(n, i.id)).request.method;
      switch (s) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(n, i);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(n, i);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(n, i);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(n, i);
        case "wc_sessionPing":
          return this.onSessionPingResponse(n, i);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(n, i);
        default:
          return this.client.logger.info(`Unsupported response method ${s}`);
      }
    }, this.onRelayEventUnknownPayload = (r) => {
      const { topic: n } = r, { message: i } = X("MISSING_OR_INVALID", `Decoded payload on topic ${n} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(i);
    }, this.onSessionProposeRequest = async (r, n) => {
      const { params: i, id: s } = n;
      try {
        this.isValidConnect(zt({}, n.params));
        const o = Ht(te.FIVE_MINUTES), a = zt({ id: s, pairingTopic: r, expiry: o }, i);
        await this.setProposal(s, a);
        const f = Gr(JSON.stringify(n)), l = await this.getVerifyContext(f, a.proposer.metadata);
        this.client.events.emit("session_proposal", { id: s, params: a, verifyContext: l });
      } catch (o) {
        await this.sendError(s, r, o), this.client.logger.error(o);
      }
    }, this.onSessionProposeResponse = async (r, n) => {
      const { id: i } = n;
      if (cr(n)) {
        const { result: s } = n;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: s });
        const o = this.client.proposal.get(i);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: o });
        const a = o.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: a });
        const f = s.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: f });
        const l = await this.client.core.crypto.generateSharedKey(a, f);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: l });
        const h = await this.client.core.relayer.subscribe(l);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: h }), await this.client.core.pairing.activate({ topic: r });
      } else
        kt(n) && (await this.client.proposal.delete(i, ut("USER_DISCONNECTED")), this.events.emit(st("session_connect"), { error: n.error }));
    }, this.onSessionSettleRequest = async (r, n) => {
      const { id: i, params: s } = n;
      try {
        this.isValidSessionSettleRequest(s);
        const { relay: o, controller: a, expiry: f, namespaces: l, requiredNamespaces: h, optionalNamespaces: y, sessionProperties: g, pairingTopic: v } = n.params, w = zt({ topic: r, relay: o, expiry: f, namespaces: l, acknowledged: !0, pairingTopic: v, requiredNamespaces: h, optionalNamespaces: y, controller: a.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: a.publicKey, metadata: a.metadata } }, g && { sessionProperties: g });
        await this.sendResult(n.id, r, !0), this.events.emit(st("session_connect"), { session: w }), this.cleanupDuplicatePairings(w);
      } catch (o) {
        await this.sendError(i, r, o), this.client.logger.error(o);
      }
    }, this.onSessionSettleResponse = async (r, n) => {
      const { id: i } = n;
      cr(n) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(st("session_approve", i), {})) : kt(n) && (await this.client.session.delete(r, ut("USER_DISCONNECTED")), this.events.emit(st("session_approve", i), { error: n.error }));
    }, this.onSessionUpdateRequest = async (r, n) => {
      const { params: i, id: s } = n;
      try {
        this.isValidUpdate(zt({ topic: r }, i)), await this.client.session.update(r, { namespaces: i.namespaces }), await this.sendResult(s, r, !0), this.client.events.emit("session_update", { id: s, topic: r, params: i });
      } catch (o) {
        await this.sendError(s, r, o), this.client.logger.error(o);
      }
    }, this.onSessionUpdateResponse = (r, n) => {
      const { id: i } = n;
      cr(n) ? this.events.emit(st("session_update", i), {}) : kt(n) && this.events.emit(st("session_update", i), { error: n.error });
    }, this.onSessionExtendRequest = async (r, n) => {
      const { id: i } = n;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, Ht(Jn)), await this.sendResult(i, r, !0), this.client.events.emit("session_extend", { id: i, topic: r });
      } catch (s) {
        await this.sendError(i, r, s), this.client.logger.error(s);
      }
    }, this.onSessionExtendResponse = (r, n) => {
      const { id: i } = n;
      cr(n) ? this.events.emit(st("session_extend", i), {}) : kt(n) && this.events.emit(st("session_extend", i), { error: n.error });
    }, this.onSessionPingRequest = async (r, n) => {
      const { id: i } = n;
      try {
        this.isValidPing({ topic: r }), await this.sendResult(i, r, !0), this.client.events.emit("session_ping", { id: i, topic: r });
      } catch (s) {
        await this.sendError(i, r, s), this.client.logger.error(s);
      }
    }, this.onSessionPingResponse = (r, n) => {
      const { id: i } = n;
      setTimeout(() => {
        cr(n) ? this.events.emit(st("session_ping", i), {}) : kt(n) && this.events.emit(st("session_ping", i), { error: n.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (r, n) => {
      const { id: i } = n;
      try {
        this.isValidDisconnect({ topic: r, reason: n.params }), await Promise.all([new Promise((s) => {
          this.client.core.relayer.once(Xe.publish, async () => {
            s(await this.deleteSession(r));
          });
        }), this.sendResult(i, r, !0)]), this.client.events.emit("session_delete", { id: i, topic: r });
      } catch (s) {
        this.client.logger.error(s);
      }
    }, this.onSessionRequest = async (r, n) => {
      const { id: i, params: s } = n;
      try {
        this.isValidRequest(zt({ topic: r }, s)), await this.setPendingSessionRequest({ id: i, topic: r, params: s }), this.addRequestToQueue({ id: i, topic: r, params: s }), await this.processRequestQueue();
      } catch (o) {
        await this.sendError(i, r, o), this.client.logger.error(o);
      }
    }, this.onSessionRequestResponse = (r, n) => {
      const { id: i } = n;
      cr(n) ? this.events.emit(st("session_request", i), { result: n.result }) : kt(n) && this.events.emit(st("session_request", i), { error: n.error });
    }, this.onSessionEventRequest = async (r, n) => {
      const { id: i, params: s } = n;
      try {
        this.isValidEmit(zt({ topic: r }, s)), this.client.events.emit("session_event", { id: i, topic: r, params: s });
      } catch (o) {
        await this.sendError(i, r, o), this.client.logger.error(o);
      }
    }, this.addRequestToQueue = (r) => {
      this.requestQueue.requests.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.requestQueue.state = wn.idle, this.processRequestQueue();
      }, te.toMiliseconds(this.requestQueueDelay));
    }, this.processRequestQueue = async () => {
      if (this.requestQueue.state === wn.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const r = this.requestQueue.requests[0];
      if (!r) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        const { id: n, topic: i, params: s } = r, o = Gr(JSON.stringify({ id: n, params: s })), a = this.client.session.get(i), f = await this.getVerifyContext(o, a.peer.metadata);
        this.requestQueue.state = wn.active, this.client.events.emit("session_request", { id: n, topic: i, params: s, verifyContext: f });
      } catch (n) {
        this.client.logger.error(n);
      }
    }, this.isValidConnect = async (r) => {
      if (!Tt(r)) {
        const { message: f } = X("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(f);
      }
      const { pairingTopic: n, requiredNamespaces: i, optionalNamespaces: s, sessionProperties: o, relays: a } = r;
      if (xt(n) || await this.isValidPairingTopic(n), !c0(a, !0)) {
        const { message: f } = X("MISSING_OR_INVALID", `connect() relays: ${a}`);
        throw new Error(f);
      }
      !xt(i) && On(i) !== 0 && this.validateNamespaces(i, "requiredNamespaces"), !xt(s) && On(s) !== 0 && this.validateNamespaces(s, "optionalNamespaces"), xt(o) || this.validateSessionProps(o, "sessionProperties");
    }, this.validateNamespaces = (r, n) => {
      const i = a0(r, "connect()", n);
      if (i)
        throw new Error(i.message);
    }, this.isValidApprove = async (r) => {
      if (!Tt(r))
        throw new Error(X("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: n, namespaces: i, relayProtocol: s, sessionProperties: o } = r;
      await this.isValidProposalId(n);
      const a = this.client.proposal.get(n), f = ei(i, "approve()");
      if (f)
        throw new Error(f.message);
      const l = Ma(a.requiredNamespaces, i, "approve()");
      if (l)
        throw new Error(l.message);
      if (!lt(s, !0)) {
        const { message: h } = X("MISSING_OR_INVALID", `approve() relayProtocol: ${s}`);
        throw new Error(h);
      }
      xt(o) || this.validateSessionProps(o, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!Tt(r)) {
        const { message: s } = X("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(s);
      }
      const { id: n, reason: i } = r;
      if (await this.isValidProposalId(n), !l0(i)) {
        const { message: s } = X("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(i)}`);
        throw new Error(s);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!Tt(r)) {
        const { message: l } = X("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(l);
      }
      const { relay: n, controller: i, namespaces: s, expiry: o } = r;
      if (!ju(n)) {
        const { message: l } = X("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(l);
      }
      const a = t0(i, "onSessionSettleRequest()");
      if (a)
        throw new Error(a.message);
      const f = ei(s, "onSessionSettleRequest()");
      if (f)
        throw new Error(f.message);
      if (gr(o)) {
        const { message: l } = X("EXPIRED", "onSessionSettleRequest()");
        throw new Error(l);
      }
    }, this.isValidUpdate = async (r) => {
      if (!Tt(r)) {
        const { message: f } = X("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(f);
      }
      const { topic: n, namespaces: i } = r;
      await this.isValidSessionTopic(n);
      const s = this.client.session.get(n), o = ei(i, "update()");
      if (o)
        throw new Error(o.message);
      const a = Ma(s.requiredNamespaces, i, "update()");
      if (a)
        throw new Error(a.message);
    }, this.isValidExtend = async (r) => {
      if (!Tt(r)) {
        const { message: i } = X("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(i);
      }
      const { topic: n } = r;
      await this.isValidSessionTopic(n);
    }, this.isValidRequest = async (r) => {
      if (!Tt(r)) {
        const { message: f } = X("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(f);
      }
      const { topic: n, request: i, chainId: s, expiry: o } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: a } = this.client.session.get(n);
      if (!Ua(a, s)) {
        const { message: f } = X("MISSING_OR_INVALID", `request() chainId: ${s}`);
        throw new Error(f);
      }
      if (!f0(i)) {
        const { message: f } = X("MISSING_OR_INVALID", `request() ${JSON.stringify(i)}`);
        throw new Error(f);
      }
      if (!p0(a, s, i.method)) {
        const { message: f } = X("MISSING_OR_INVALID", `request() method: ${i.method}`);
        throw new Error(f);
      }
      if (o && !b0(o, Vi)) {
        const { message: f } = X("MISSING_OR_INVALID", `request() expiry: ${o}. Expiry must be a number (in seconds) between ${Vi.min} and ${Vi.max}`);
        throw new Error(f);
      }
    }, this.isValidRespond = async (r) => {
      if (!Tt(r)) {
        const { message: s } = X("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(s);
      }
      const { topic: n, response: i } = r;
      if (await this.isValidSessionTopic(n), !h0(i)) {
        const { message: s } = X("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
        throw new Error(s);
      }
    }, this.isValidPing = async (r) => {
      if (!Tt(r)) {
        const { message: i } = X("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(i);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.isValidEmit = async (r) => {
      if (!Tt(r)) {
        const { message: a } = X("MISSING_OR_INVALID", `emit() params: ${r}`);
        throw new Error(a);
      }
      const { topic: n, event: i, chainId: s } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: o } = this.client.session.get(n);
      if (!Ua(o, s)) {
        const { message: a } = X("MISSING_OR_INVALID", `emit() chainId: ${s}`);
        throw new Error(a);
      }
      if (!d0(i)) {
        const { message: a } = X("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
        throw new Error(a);
      }
      if (!g0(o, s, i.name)) {
        const { message: a } = X("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
        throw new Error(a);
      }
    }, this.isValidDisconnect = async (r) => {
      if (!Tt(r)) {
        const { message: i } = X("MISSING_OR_INVALID", `disconnect() params: ${r}`);
        throw new Error(i);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.getVerifyContext = async (r, n) => {
      const i = { verified: { verifyUrl: n.verifyUrl || "", validation: "UNKNOWN", origin: n.url || "" } };
      try {
        const s = await this.client.core.verify.resolve({ attestationId: r, verifyUrl: n.verifyUrl });
        s && (i.verified.origin = s, i.verified.validation = s === n.url ? "VALID" : "INVALID");
      } catch (s) {
        this.client.logger.error(s);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(i)}`), i;
    }, this.validateSessionProps = (r, n) => {
      Object.values(r).forEach((i) => {
        if (!lt(i, !1)) {
          const { message: s } = X("MISSING_OR_INVALID", `${n} must be in Record<string, string> format. Received: ${JSON.stringify(i)}`);
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
      const { topic: r, message: n } = t;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(n)))
        return;
      const i = await this.client.core.crypto.decode(r, n);
      uo(i) ? (this.client.core.history.set(r, i), this.onRelayEventRequest({ topic: r, payload: i })) : Si(i) ? (await this.client.core.history.resolve(i), await this.onRelayEventResponse({ topic: r, payload: i }), this.client.core.history.delete(r, i.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: i });
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(Vt.expired, async (t) => {
      const { topic: r, id: n } = $u(t.target);
      if (n && this.client.pendingRequest.keys.includes(n))
        return await this.deletePendingSessionRequest(n, X("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession(r, !0), this.client.events.emit("session_expire", { topic: r })) : n && (await this.deleteProposal(n, !0), this.client.events.emit("proposal_expire", { id: n }));
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
    if (gr(this.client.core.pairing.pairings.get(t).expiry)) {
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
    if (gr(this.client.session.get(t).expiry)) {
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
    if (!u0(t)) {
      const { message: r } = X("MISSING_OR_INVALID", `proposal id should be a number: ${t}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(t)) {
      const { message: r } = X("NO_MATCHING_KEY", `proposal id doesn't exist: ${t}`);
      throw new Error(r);
    }
    if (gr(this.client.proposal.get(t).expiry)) {
      await this.deleteProposal(t);
      const { message: r } = X("EXPIRED", `proposal id: ${t}`);
      throw new Error(r);
    }
  }
}
class Qv extends Oi {
  constructor(t, r) {
    super(t, r, Bv, fo), this.core = t, this.logger = r;
  }
}
class Zv extends Oi {
  constructor(t, r) {
    super(t, r, zv, fo), this.core = t, this.logger = r;
  }
}
class e1 extends Oi {
  constructor(t, r) {
    super(t, r, Kv, fo, (n) => n.id), this.core = t, this.logger = r;
  }
}
let t1 = class al extends Fv {
  constructor(t) {
    super(t), this.protocol = il, this.version = sl, this.name = zi.name, this.events = new Jt.EventEmitter(), this.on = (n, i) => this.events.on(n, i), this.once = (n, i) => this.events.once(n, i), this.off = (n, i) => this.events.off(n, i), this.removeListener = (n, i) => this.events.removeListener(n, i), this.removeAllListeners = (n) => this.events.removeAllListeners(n), this.connect = async (n) => {
      try {
        return await this.engine.connect(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.pair = async (n) => {
      try {
        return await this.engine.pair(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.approve = async (n) => {
      try {
        return await this.engine.approve(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.reject = async (n) => {
      try {
        return await this.engine.reject(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.update = async (n) => {
      try {
        return await this.engine.update(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.extend = async (n) => {
      try {
        return await this.engine.extend(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.request = async (n) => {
      try {
        return await this.engine.request(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.respond = async (n) => {
      try {
        return await this.engine.respond(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.ping = async (n) => {
      try {
        return await this.engine.ping(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.emit = async (n) => {
      try {
        return await this.engine.emit(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.disconnect = async (n) => {
      try {
        return await this.engine.disconnect(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.find = (n) => {
      try {
        return this.engine.find(n);
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.name = (t == null ? void 0 : t.name) || zi.name, this.metadata = (t == null ? void 0 : t.metadata) || xy();
    const r = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : Re.pino(Re.getDefaultLoggerOptions({ level: (t == null ? void 0 : t.logger) || zi.logger }));
    this.core = (t == null ? void 0 : t.core) || new jv(t), this.logger = Re.generateChildLogger(r, this.name), this.session = new Zv(this.core, this.logger), this.proposal = new Qv(this.core, this.logger), this.pendingRequest = new e1(this.core, this.logger), this.engine = new Xv(this);
  }
  static async init(t) {
    const r = new al(t);
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
var r1 = Object.defineProperty, n1 = Object.defineProperties, i1 = Object.getOwnPropertyDescriptors, pc = Object.getOwnPropertySymbols, s1 = Object.prototype.hasOwnProperty, o1 = Object.prototype.propertyIsEnumerable, gc = (e, t, r) => t in e ? r1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, a1 = (e, t) => {
  for (var r in t || (t = {}))
    s1.call(t, r) && gc(e, r, t[r]);
  if (pc)
    for (var r of pc(t))
      o1.call(t, r) && gc(e, r, t[r]);
  return e;
}, c1 = (e, t) => n1(e, i1(t)), ho = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
}, ze = (e, t, r) => (ho(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Rr = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, ci = (e, t, r, n) => (ho(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), wt = (e, t, r) => (ho(e, t, "access private method"), r), Cr, Hr, En, ct, Ns, cl, Et, Ot, $s, yc;
let u1 = class {
  constructor(t) {
    Rr(this, Ns), Rr(this, Et), Rr(this, $s), Rr(this, Cr, void 0), Rr(this, Hr, void 0), Rr(this, En, void 0), Rr(this, ct, void 0), ci(this, Cr, t), ci(this, Hr, wt(this, Ns, cl).call(this)), wt(this, Et, Ot).call(this);
  }
  async connect(t) {
    const { requiredNamespaces: r, optionalNamespaces: n } = t;
    return new Promise(async (i, s) => {
      await wt(this, Et, Ot).call(this);
      const o = ze(this, Hr).subscribeModal((l) => {
        l.open || (o(), s(new Error("Modal closed")));
      }), { uri: a, approval: f } = await ze(this, ct).connect(t);
      if (a) {
        const l = /* @__PURE__ */ new Set();
        r && Object.values(r).forEach(({ chains: h }) => {
          h && h.forEach((y) => l.add(y));
        }), n && Object.values(n).forEach(({ chains: h }) => {
          h && h.forEach((y) => l.add(y));
        }), await ze(this, Hr).openModal({ uri: a, chains: Array.from(l) });
      }
      try {
        const l = await f();
        i(l);
      } catch (l) {
        s(l);
      } finally {
        o(), ze(this, Hr).closeModal();
      }
    });
  }
  async disconnect(t) {
    await wt(this, Et, Ot).call(this), await ze(this, ct).disconnect(t);
  }
  async request(t) {
    return await wt(this, Et, Ot).call(this), await ze(this, ct).request(t);
  }
  async getSessions() {
    return await wt(this, Et, Ot).call(this), ze(this, ct).session.getAll();
  }
  async getSession() {
    return await wt(this, Et, Ot).call(this), ze(this, ct).session.getAll().at(-1);
  }
  async onSessionEvent(t) {
    await wt(this, Et, Ot).call(this), ze(this, ct).on("session_event", t);
  }
  async offSessionEvent(t) {
    await wt(this, Et, Ot).call(this), ze(this, ct).off("session_event", t);
  }
  async onSessionUpdate(t) {
    await wt(this, Et, Ot).call(this), ze(this, ct).on("session_update", t);
  }
  async offSessionUpdate(t) {
    await wt(this, Et, Ot).call(this), ze(this, ct).off("session_update", t);
  }
  async onSessionDelete(t) {
    await wt(this, Et, Ot).call(this), ze(this, ct).on("session_delete", t);
  }
  async offSessionDelete(t) {
    await wt(this, Et, Ot).call(this), ze(this, ct).off("session_delete", t);
  }
  async onSessionExpire(t) {
    await wt(this, Et, Ot).call(this), ze(this, ct).on("session_expire", t);
  }
  async offSessionExpire(t) {
    await wt(this, Et, Ot).call(this), ze(this, ct).off("session_expire", t);
  }
};
Cr = /* @__PURE__ */ new WeakMap(), Hr = /* @__PURE__ */ new WeakMap(), En = /* @__PURE__ */ new WeakMap(), ct = /* @__PURE__ */ new WeakMap(), Ns = /* @__PURE__ */ new WeakSet(), cl = function() {
  const { modalOptions: e, projectId: t } = ze(this, Cr);
  return new bf(c1(a1({}, e), { projectId: t }));
}, Et = /* @__PURE__ */ new WeakSet(), Ot = async function() {
  return ze(this, ct) ? !0 : (!ze(this, En) && typeof window < "u" && ci(this, En, wt(this, $s, yc).call(this)), ze(this, En));
}, $s = /* @__PURE__ */ new WeakSet(), yc = async function() {
  ci(this, ct, await t1.init({ metadata: ze(this, Cr).metadata, projectId: ze(this, Cr).projectId, relayUrl: ze(this, Cr).relayUrl }));
  const e = await ze(this, ct).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", e);
  } catch {
    console.info("Unable to set client id");
  }
};
function l1(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(t, r) {
    var n = e.get(t);
    n ? n.push(r) : e.set(t, [r]);
  }, off: function(t, r) {
    var n = e.get(t);
    n && (r ? n.splice(n.indexOf(r) >>> 0, 1) : e.set(t, []));
  }, emit: function(t, r) {
    var n = e.get(t);
    n && n.slice().map(function(i) {
      i(r);
    }), (n = e.get("*")) && n.slice().map(function(i) {
      i(t, r);
    });
  } };
}
const Ls = l1();
let Sn;
function f1(e) {
  Sn = new u1(e);
}
async function Yt() {
  return new Promise((e) => {
    if (Sn)
      e(Sn);
    else {
      const t = setInterval(() => {
        Sn && (clearInterval(t), e(Sn));
      }, 200);
    }
  });
}
function h1(e) {
  return gt(() => {
    f1(e);
  }, []), null;
}
const d1 = Hl(h1);
function ul() {
  const [e, t] = $t(void 0), [r, n] = $t(void 0), [i, s] = $t(!1);
  return { data: e, error: r, loading: i, setData: t, setError: n, setLoading: s };
}
function p1(e) {
  const { data: t, error: r, loading: n, setData: i, setError: s, setLoading: o } = ul();
  async function a(f) {
    try {
      o(!0), s(void 0);
      const l = await (await Yt()).connect(f ?? e);
      return i(l), Ls.emit("session_change"), l;
    } catch (l) {
      throw s(l), l;
    } finally {
      o(!1);
    }
  }
  return { data: t, error: r, loading: n, connect: a };
}
function ll(e) {
  gt(() => (Yt().then((t) => {
    t.onSessionDelete(e);
  }), () => {
    Yt().then((t) => {
      t.offSessionDelete(e);
    });
  }), [e]);
}
function po(e) {
  gt(() => (Yt().then((t) => {
    t.onSessionEvent(e);
  }), () => {
    Yt().then((t) => {
      t.offSessionEvent(e);
    });
  }), [e]);
}
function g1(e) {
  gt(() => (Yt().then((t) => {
    t.onSessionExpire(e);
  }), () => {
    Yt().then((t) => {
      t.offSessionExpire(e);
    });
  }), [e]);
}
function y1(e) {
  gt(() => (Yt().then((t) => {
    t.onSessionUpdate(e);
  }), () => {
    Yt().then((t) => {
      t.offSessionUpdate(e);
    });
  }), [e]);
}
function Br(e) {
  const { data: t, error: r, loading: n, setData: i, setError: s, setLoading: o } = ul();
  async function a(f) {
    try {
      o(!0), s(void 0);
      const l = await (await Yt()).request(f ?? e);
      return i(l), l;
    } catch (l) {
      throw s(l), l;
    } finally {
      o(!1);
    }
  }
  return { data: t, error: r, loading: n, request: a };
}
var _1 = Object.defineProperty, b1 = Object.defineProperties, v1 = Object.getOwnPropertyDescriptors, _c = Object.getOwnPropertySymbols, m1 = Object.prototype.hasOwnProperty, w1 = Object.prototype.propertyIsEnumerable, bc = (e, t, r) => t in e ? _1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, E1 = (e, t) => {
  for (var r in t || (t = {}))
    m1.call(t, r) && bc(e, r, t[r]);
  if (_c)
    for (var r of _c(t))
      w1.call(t, r) && bc(e, r, t[r]);
  return e;
}, S1 = (e, t) => b1(e, v1(t));
function mr() {
  const [e, t] = $t(void 0);
  return ll((r) => {
    r.topic === (e == null ? void 0 : e.topic) && t(void 0);
  }), y1((r) => {
    if (e && r.topic === (e == null ? void 0 : e.topic)) {
      const { namespaces: n } = r.params, i = S1(E1({}, e), { namespaces: n });
      t(i);
    }
  }), g1((r) => {
    e && r.topic === (e == null ? void 0 : e.topic) && t(void 0);
  }), gt(() => {
    async function r() {
      const n = await (await Yt()).getSession();
      t(n);
    }
    return r(), Ls.on("session_change", r), () => {
      Ls.off("session_change", r);
    };
  }, []), e;
}
const D1 = [
  // aztec methods
  "aztec_connect",
  "aztec_disconnect",
  "aztec_getAccountPublicKey",
  "aztec_getSpendingPublicKey",
  "aztec_requestProofs"
], fl = ["aztec:1337"], hl = [
  // aleo methods
  "aleo_connect",
  "aleo_decrypt",
  "aleo_disconnect",
  "aleo_getSelectedAccount",
  "aleo_deployProgram",
  "aleo_getBalance",
  "aleo_executeProgram",
  "aleo_getRecords",
  "aleo_transfer"
], go = ["aleo:1"], js = ["chainChanged", "accountSelected", "accountSynced"], O1 = "f0aaeffe71b636da453fce042d79d723", vc = "https://walletconnect.puzzle.online/", x1 = {
  standaloneChains: fl.concat(go),
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
        universal: vc
      }
    }
  ],
  desktopWallets: [
    {
      id: "puzzle",
      name: "Puzzle Wallet",
      links: {
        native: "",
        universal: vc
      }
    }
  ],
  walletImages: {
    // Override manual wallet image
    puzzle: "https://i.imgur.com/p9tHaFC.png"
  }
}, vm = {
  requiredNamespaces: {
    aztec: {
      methods: D1,
      chains: fl,
      events: js
    },
    aleo: {
      methods: hl,
      chains: go,
      events: js
    }
  }
}, mm = ({ dAppName: e, dAppDescription: t, dAppUrl: r, dAppIconURL: n }) => /* @__PURE__ */ es.jsx(
  d1,
  {
    projectId: O1,
    metadata: {
      name: e,
      description: t,
      url: r,
      icons: [
        n
      ]
    },
    modalOptions: { ...x1 }
  }
), wm = ({ children: e }) => (Q1(), /* @__PURE__ */ es.jsx(es.Fragment, { children: e })), mc = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), n = (f, l) => {
    const h = typeof f == "function" ? f(t) : f;
    if (!Object.is(h, t)) {
      const y = t;
      t = l ?? typeof h != "object" ? h : Object.assign({}, t, h), r.forEach((g) => g(t, y));
    }
  }, i = () => t, a = { setState: n, getState: i, subscribe: (f) => (r.add(f), () => r.delete(f)), destroy: () => {
    r.clear();
  } };
  return t = e(n, i, a), a;
}, I1 = (e) => e ? mc(e) : mc;
var Fs = { exports: {} }, Wi = {}, Xn = { exports: {} }, Hi = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wc;
function P1() {
  if (wc)
    return Hi;
  wc = 1;
  var e = Qr;
  function t(y, g) {
    return y === g && (y !== 0 || 1 / y === 1 / g) || y !== y && g !== g;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, i = e.useEffect, s = e.useLayoutEffect, o = e.useDebugValue;
  function a(y, g) {
    var v = g(), w = n({ inst: { value: v, getSnapshot: g } }), I = w[0].inst, A = w[1];
    return s(function() {
      I.value = v, I.getSnapshot = g, f(I) && A({ inst: I });
    }, [y, v, g]), i(function() {
      return f(I) && A({ inst: I }), y(function() {
        f(I) && A({ inst: I });
      });
    }, [y]), o(v), v;
  }
  function f(y) {
    var g = y.getSnapshot;
    y = y.value;
    try {
      var v = g();
      return !r(y, v);
    } catch {
      return !0;
    }
  }
  function l(y, g) {
    return g();
  }
  var h = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : a;
  return Hi.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : h, Hi;
}
var ki = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ec;
function T1() {
  return Ec || (Ec = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Qr, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(x) {
      {
        for (var _ = arguments.length, S = new Array(_ > 1 ? _ - 1 : 0), d = 1; d < _; d++)
          S[d - 1] = arguments[d];
        n("error", x, S);
      }
    }
    function n(x, _, S) {
      {
        var d = t.ReactDebugCurrentFrame, c = d.getStackAddendum();
        c !== "" && (_ += "%s", S = S.concat([c]));
        var p = S.map(function($) {
          return String($);
        });
        p.unshift("Warning: " + _), Function.prototype.apply.call(console[x], console, p);
      }
    }
    function i(x, _) {
      return x === _ && (x !== 0 || 1 / x === 1 / _) || x !== x && _ !== _;
    }
    var s = typeof Object.is == "function" ? Object.is : i, o = e.useState, a = e.useEffect, f = e.useLayoutEffect, l = e.useDebugValue, h = !1, y = !1;
    function g(x, _, S) {
      h || e.startTransition !== void 0 && (h = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var d = _();
      if (!y) {
        var c = _();
        s(d, c) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), y = !0);
      }
      var p = o({
        inst: {
          value: d,
          getSnapshot: _
        }
      }), $ = p[0].inst, L = p[1];
      return f(function() {
        $.value = d, $.getSnapshot = _, v($) && L({
          inst: $
        });
      }, [x, d, _]), a(function() {
        v($) && L({
          inst: $
        });
        var j = function() {
          v($) && L({
            inst: $
          });
        };
        return x(j);
      }, [x]), l(d), d;
    }
    function v(x) {
      var _ = x.getSnapshot, S = x.value;
      try {
        var d = _();
        return !s(S, d);
      } catch {
        return !0;
      }
    }
    function w(x, _, S) {
      return _();
    }
    var I = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", A = !I, U = A ? w : g, E = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : U;
    ki.useSyncExternalStore = E, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ki;
}
var Sc;
function dl() {
  return Sc || (Sc = 1, process.env.NODE_ENV === "production" ? Xn.exports = P1() : Xn.exports = T1()), Xn.exports;
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
var Dc;
function R1() {
  if (Dc)
    return Wi;
  Dc = 1;
  var e = Qr, t = dl();
  function r(l, h) {
    return l === h && (l !== 0 || 1 / l === 1 / h) || l !== l && h !== h;
  }
  var n = typeof Object.is == "function" ? Object.is : r, i = t.useSyncExternalStore, s = e.useRef, o = e.useEffect, a = e.useMemo, f = e.useDebugValue;
  return Wi.useSyncExternalStoreWithSelector = function(l, h, y, g, v) {
    var w = s(null);
    if (w.current === null) {
      var I = { hasValue: !1, value: null };
      w.current = I;
    } else
      I = w.current;
    w = a(function() {
      function U(d) {
        if (!E) {
          if (E = !0, x = d, d = g(d), v !== void 0 && I.hasValue) {
            var c = I.value;
            if (v(c, d))
              return _ = c;
          }
          return _ = d;
        }
        if (c = _, n(x, d))
          return c;
        var p = g(d);
        return v !== void 0 && v(c, p) ? c : (x = d, _ = p);
      }
      var E = !1, x, _, S = y === void 0 ? null : y;
      return [function() {
        return U(h());
      }, S === null ? void 0 : function() {
        return U(S());
      }];
    }, [h, y, g, v]);
    var A = i(l, w[0], w[1]);
    return o(function() {
      I.hasValue = !0, I.value = A;
    }, [A]), f(A), A;
  }, Wi;
}
var Gi = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oc;
function A1() {
  return Oc || (Oc = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Qr, t = dl();
    function r(h, y) {
      return h === y && (h !== 0 || 1 / h === 1 / y) || h !== h && y !== y;
    }
    var n = typeof Object.is == "function" ? Object.is : r, i = t.useSyncExternalStore, s = e.useRef, o = e.useEffect, a = e.useMemo, f = e.useDebugValue;
    function l(h, y, g, v, w) {
      var I = s(null), A;
      I.current === null ? (A = {
        hasValue: !1,
        value: null
      }, I.current = A) : A = I.current;
      var U = a(function() {
        var S = !1, d, c, p = function(F) {
          if (!S) {
            S = !0, d = F;
            var q = v(F);
            if (w !== void 0 && A.hasValue) {
              var D = A.value;
              if (w(D, q))
                return c = D, D;
            }
            return c = q, q;
          }
          var R = d, G = c;
          if (n(R, F))
            return G;
          var V = v(F);
          return w !== void 0 && w(G, V) ? G : (d = F, c = V, V);
        }, $ = g === void 0 ? null : g, L = function() {
          return p(y());
        }, j = $ === null ? void 0 : function() {
          return p($());
        };
        return [L, j];
      }, [y, g, v, w]), E = U[0], x = U[1], _ = i(h, E, x);
      return o(function() {
        A.hasValue = !0, A.value = _;
      }, [_]), f(_), _;
    }
    Gi.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Gi;
}
process.env.NODE_ENV === "production" ? Fs.exports = R1() : Fs.exports = A1();
var C1 = Fs.exports;
const N1 = /* @__PURE__ */ Vs(C1), { useSyncExternalStoreWithSelector: $1 } = N1;
function L1(e, t = e.getState, r) {
  const n = $1(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    r
  );
  return kl(n), n;
}
const xc = (e) => {
  const t = typeof e == "function" ? I1(e) : e, r = (n, i) => L1(t, n, i);
  return Object.assign(r, t), r;
}, j1 = (e) => e ? xc(e) : xc;
function pt(e) {
  for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  if (process.env.NODE_ENV !== "production") {
    var i = K1[e], s = i ? typeof i == "function" ? i.apply(null, r) : i : "unknown error nr: " + e;
    throw Error("[Immer] " + s);
  }
  throw Error("[Immer] minified error nr: " + e + (r.length ? " " + r.map(function(o) {
    return "'" + o + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function Jr(e) {
  return !!e && !!e[Lt];
}
function $r(e) {
  var t;
  return !!e && (function(r) {
    if (!r || typeof r != "object")
      return !1;
    var n = Object.getPrototypeOf(r);
    if (n === null)
      return !0;
    var i = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
    return i === Object || typeof i == "function" && Function.toString.call(i) === W1;
  }(e) || Array.isArray(e) || !!e[$c] || !!(!((t = e.constructor) === null || t === void 0) && t[$c]) || yo(e) || _o(e));
}
function Nn(e, t, r) {
  r === void 0 && (r = !1), nn(e) === 0 ? (r ? Object.keys : Eo)(e).forEach(function(n) {
    r && typeof n == "symbol" || t(n, e[n], e);
  }) : e.forEach(function(n, i) {
    return t(i, n, e);
  });
}
function nn(e) {
  var t = e[Lt];
  return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : yo(e) ? 2 : _o(e) ? 3 : 0;
}
function Us(e, t) {
  return nn(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function F1(e, t) {
  return nn(e) === 2 ? e.get(t) : e[t];
}
function pl(e, t, r) {
  var n = nn(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function U1(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function yo(e) {
  return z1 && e instanceof Map;
}
function _o(e) {
  return V1 && e instanceof Set;
}
function Ar(e) {
  return e.o || e.t;
}
function bo(e) {
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  var t = H1(e);
  delete t[Lt];
  for (var r = Eo(t), n = 0; n < r.length; n++) {
    var i = r[n], s = t[i];
    s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (t[i] = { configurable: !0, writable: !0, enumerable: s.enumerable, value: e[i] });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function vo(e, t) {
  return t === void 0 && (t = !1), mo(e) || Jr(e) || !$r(e) || (nn(e) > 1 && (e.set = e.add = e.clear = e.delete = M1), Object.freeze(e), t && Nn(e, function(r, n) {
    return vo(n, !0);
  }, !0)), e;
}
function M1() {
  pt(2);
}
function mo(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function ir(e) {
  var t = k1[e];
  return t || pt(18, e), t;
}
function Ic() {
  return process.env.NODE_ENV === "production" || Xr || pt(0), Xr;
}
function Yi(e, t) {
  t && (ir("Patches"), e.u = [], e.s = [], e.v = t);
}
function ui(e) {
  Ms(e), e.p.forEach(B1), e.p = null;
}
function Ms(e) {
  e === Xr && (Xr = e.l);
}
function Pc(e) {
  return Xr = { p: [], l: Xr, h: e, m: !0, _: 0 };
}
function B1(e) {
  var t = e[Lt];
  t.i === 0 || t.i === 1 ? t.j() : t.g = !0;
}
function Ji(e, t) {
  t._ = t.p.length;
  var r = t.p[0], n = e !== void 0 && e !== r;
  return t.h.O || ir("ES5").S(t, e, n), n ? (r[Lt].P && (ui(t), pt(4)), $r(e) && (e = li(t, e), t.l || fi(t, e)), t.u && ir("Patches").M(r[Lt].t, e, t.u, t.s)) : e = li(t, r, []), ui(t), t.u && t.v(t.u, t.s), e !== gl ? e : void 0;
}
function li(e, t, r) {
  if (mo(t))
    return t;
  var n = t[Lt];
  if (!n)
    return Nn(t, function(a, f) {
      return Tc(e, n, t, a, f, r);
    }, !0), t;
  if (n.A !== e)
    return t;
  if (!n.P)
    return fi(e, n.t, !0), n.t;
  if (!n.I) {
    n.I = !0, n.A._--;
    var i = n.i === 4 || n.i === 5 ? n.o = bo(n.k) : n.o, s = i, o = !1;
    n.i === 3 && (s = new Set(i), i.clear(), o = !0), Nn(s, function(a, f) {
      return Tc(e, n, i, a, f, r, o);
    }), fi(e, i, !1), r && e.u && ir("Patches").N(n, r, e.u, e.s);
  }
  return n.o;
}
function Tc(e, t, r, n, i, s, o) {
  if (process.env.NODE_ENV !== "production" && i === r && pt(5), Jr(i)) {
    var a = li(e, i, s && t && t.i !== 3 && !Us(t.R, n) ? s.concat(n) : void 0);
    if (pl(r, n, a), !Jr(a))
      return;
    e.m = !1;
  } else
    o && r.add(i);
  if ($r(i) && !mo(i)) {
    if (!e.h.D && e._ < 1)
      return;
    li(e, i), t && t.A.l || fi(e, i);
  }
}
function fi(e, t, r) {
  r === void 0 && (r = !1), !e.l && e.h.D && e.m && vo(t, r);
}
function Xi(e, t) {
  var r = e[Lt];
  return (r ? Ar(r) : e)[t];
}
function Rc(e, t) {
  if (t in e)
    for (var r = Object.getPrototypeOf(e); r; ) {
      var n = Object.getOwnPropertyDescriptor(r, t);
      if (n)
        return n;
      r = Object.getPrototypeOf(r);
    }
}
function Bs(e) {
  e.P || (e.P = !0, e.l && Bs(e.l));
}
function Qi(e) {
  e.o || (e.o = bo(e.t));
}
function qs(e, t, r) {
  var n = yo(t) ? ir("MapSet").F(t, r) : _o(t) ? ir("MapSet").T(t, r) : e.O ? function(i, s) {
    var o = Array.isArray(i), a = { i: o ? 1 : 0, A: s ? s.A : Ic(), P: !1, I: !1, R: {}, l: s, t: i, k: null, o: null, j: null, C: !1 }, f = a, l = zs;
    o && (f = [a], l = Dn);
    var h = Proxy.revocable(f, l), y = h.revoke, g = h.proxy;
    return a.k = g, a.j = y, g;
  }(t, r) : ir("ES5").J(t, r);
  return (r ? r.A : Ic()).p.push(n), n;
}
function q1(e) {
  return Jr(e) || pt(22, e), function t(r) {
    if (!$r(r))
      return r;
    var n, i = r[Lt], s = nn(r);
    if (i) {
      if (!i.P && (i.i < 4 || !ir("ES5").K(i)))
        return i.t;
      i.I = !0, n = Ac(r, s), i.I = !1;
    } else
      n = Ac(r, s);
    return Nn(n, function(o, a) {
      i && F1(i.t, o) === a || pl(n, o, t(a));
    }), s === 3 ? new Set(n) : n;
  }(e);
}
function Ac(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return bo(e);
}
var Cc, Xr, wo = typeof Symbol < "u" && typeof Symbol("x") == "symbol", z1 = typeof Map < "u", V1 = typeof Set < "u", Nc = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", gl = wo ? Symbol.for("immer-nothing") : ((Cc = {})["immer-nothing"] = !0, Cc), $c = wo ? Symbol.for("immer-draftable") : "__$immer_draftable", Lt = wo ? Symbol.for("immer-state") : "__$immer_state", K1 = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(e) {
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
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" }, W1 = "" + Object.prototype.constructor, Eo = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Object.getOwnPropertyNames, H1 = Object.getOwnPropertyDescriptors || function(e) {
  var t = {};
  return Eo(e).forEach(function(r) {
    t[r] = Object.getOwnPropertyDescriptor(e, r);
  }), t;
}, k1 = {}, zs = { get: function(e, t) {
  if (t === Lt)
    return e;
  var r = Ar(e);
  if (!Us(r, t))
    return function(i, s, o) {
      var a, f = Rc(s, o);
      return f ? "value" in f ? f.value : (a = f.get) === null || a === void 0 ? void 0 : a.call(i.k) : void 0;
    }(e, r, t);
  var n = r[t];
  return e.I || !$r(n) ? n : n === Xi(e.t, t) ? (Qi(e), e.o[t] = qs(e.A.h, n, e)) : n;
}, has: function(e, t) {
  return t in Ar(e);
}, ownKeys: function(e) {
  return Reflect.ownKeys(Ar(e));
}, set: function(e, t, r) {
  var n = Rc(Ar(e), t);
  if (n != null && n.set)
    return n.set.call(e.k, r), !0;
  if (!e.P) {
    var i = Xi(Ar(e), t), s = i == null ? void 0 : i[Lt];
    if (s && s.t === r)
      return e.o[t] = r, e.R[t] = !1, !0;
    if (U1(r, i) && (r !== void 0 || Us(e.t, t)))
      return !0;
    Qi(e), Bs(e);
  }
  return e.o[t] === r && (r !== void 0 || t in e.o) || Number.isNaN(r) && Number.isNaN(e.o[t]) || (e.o[t] = r, e.R[t] = !0), !0;
}, deleteProperty: function(e, t) {
  return Xi(e.t, t) !== void 0 || t in e.t ? (e.R[t] = !1, Qi(e), Bs(e)) : delete e.R[t], e.o && delete e.o[t], !0;
}, getOwnPropertyDescriptor: function(e, t) {
  var r = Ar(e), n = Reflect.getOwnPropertyDescriptor(r, t);
  return n && { writable: !0, configurable: e.i !== 1 || t !== "length", enumerable: n.enumerable, value: r[t] };
}, defineProperty: function() {
  pt(11);
}, getPrototypeOf: function(e) {
  return Object.getPrototypeOf(e.t);
}, setPrototypeOf: function() {
  pt(12);
} }, Dn = {};
Nn(zs, function(e, t) {
  Dn[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
}), Dn.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && pt(13), Dn.set.call(this, e, t, void 0);
}, Dn.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && pt(14), zs.set.call(this, e[0], t, r, e[0]);
};
var G1 = function() {
  function e(r) {
    var n = this;
    this.O = Nc, this.D = !0, this.produce = function(i, s, o) {
      if (typeof i == "function" && typeof s != "function") {
        var a = s;
        s = i;
        var f = n;
        return function(I) {
          var A = this;
          I === void 0 && (I = a);
          for (var U = arguments.length, E = Array(U > 1 ? U - 1 : 0), x = 1; x < U; x++)
            E[x - 1] = arguments[x];
          return f.produce(I, function(_) {
            var S;
            return (S = s).call.apply(S, [A, _].concat(E));
          });
        };
      }
      var l;
      if (typeof s != "function" && pt(6), o !== void 0 && typeof o != "function" && pt(7), $r(i)) {
        var h = Pc(n), y = qs(n, i, void 0), g = !0;
        try {
          l = s(y), g = !1;
        } finally {
          g ? ui(h) : Ms(h);
        }
        return typeof Promise < "u" && l instanceof Promise ? l.then(function(I) {
          return Yi(h, o), Ji(I, h);
        }, function(I) {
          throw ui(h), I;
        }) : (Yi(h, o), Ji(l, h));
      }
      if (!i || typeof i != "object") {
        if ((l = s(i)) === void 0 && (l = i), l === gl && (l = void 0), n.D && vo(l, !0), o) {
          var v = [], w = [];
          ir("Patches").M(i, l, v, w), o(v, w);
        }
        return l;
      }
      pt(21, i);
    }, this.produceWithPatches = function(i, s) {
      if (typeof i == "function")
        return function(l) {
          for (var h = arguments.length, y = Array(h > 1 ? h - 1 : 0), g = 1; g < h; g++)
            y[g - 1] = arguments[g];
          return n.produceWithPatches(l, function(v) {
            return i.apply(void 0, [v].concat(y));
          });
        };
      var o, a, f = n.produce(i, s, function(l, h) {
        o = l, a = h;
      });
      return typeof Promise < "u" && f instanceof Promise ? f.then(function(l) {
        return [l, o, a];
      }) : [f, o, a];
    }, typeof (r == null ? void 0 : r.useProxies) == "boolean" && this.setUseProxies(r.useProxies), typeof (r == null ? void 0 : r.autoFreeze) == "boolean" && this.setAutoFreeze(r.autoFreeze);
  }
  var t = e.prototype;
  return t.createDraft = function(r) {
    $r(r) || pt(8), Jr(r) && (r = q1(r));
    var n = Pc(this), i = qs(this, r, void 0);
    return i[Lt].C = !0, Ms(n), i;
  }, t.finishDraft = function(r, n) {
    var i = r && r[Lt];
    process.env.NODE_ENV !== "production" && (i && i.C || pt(9), i.I && pt(10));
    var s = i.A;
    return Yi(s, n), Ji(void 0, s);
  }, t.setAutoFreeze = function(r) {
    this.D = r;
  }, t.setUseProxies = function(r) {
    r && !Nc && pt(20), this.O = r;
  }, t.applyPatches = function(r, n) {
    var i;
    for (i = n.length - 1; i >= 0; i--) {
      var s = n[i];
      if (s.path.length === 0 && s.op === "replace") {
        r = s.value;
        break;
      }
    }
    i > -1 && (n = n.slice(i + 1));
    var o = ir("Patches").$;
    return Jr(r) ? o(r, n) : this.produce(r, function(a) {
      return o(a, n);
    });
  }, e;
}(), jt = new G1(), Y1 = jt.produce;
jt.produceWithPatches.bind(jt);
jt.setAutoFreeze.bind(jt);
jt.setUseProxies.bind(jt);
jt.applyPatches.bind(jt);
jt.createDraft.bind(jt);
jt.finishDraft.bind(jt);
const J1 = (e) => (t, r, n) => (n.setState = (i, s, ...o) => {
  const a = typeof i == "function" ? Y1(i) : i;
  return t(a, s, ...o);
}, e(n.setState, r, n)), X1 = J1, wr = j1()(
  X1((e, t) => ({
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
), Em = () => {
  const e = mr(), [t, r, n, i] = wr((y) => [
    y.account,
    y.accounts,
    y.chainId,
    y.setAccount
  ]), [s, o] = $t(void 0), { request: a, data: f, error: l, loading: h } = Br({
    topic: e == null ? void 0 : e.topic,
    chainId: n ?? "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "aleo_getSelectedAccount",
      params: {
        type: "GET_SELECTED_ACCOUNT"
      }
    }
  });
  return po(({ params: y, topic: g }) => {
    if (y.event.name === "accountSelected" && e && e.topic === g) {
      const w = y.event.data, I = y.chainId.split(":")[0], A = y.chainId.split(":")[1];
      i({
        network: I,
        chainId: A,
        address: w
      }), o(void 0);
    }
  }), gt(() => {
    e && a();
  }, [e]), gt(() => {
    if (l)
      o(l.message);
    else if (f) {
      const y = f && f.type === "GET_SELECTED_ACCOUNT_RES" ? f : void 0, g = f && f.type === "GET_SELECTED_ACCOUNT_RES" ? f.data.error : void 0, v = y == null ? void 0 : y.data.account;
      v && i(v), o(g);
    }
  }, [f, l]), {
    account: t,
    accounts: r,
    isConnected: !!t,
    session: e,
    error: s,
    loading: h
  };
}, Sm = () => {
  const e = mr(), [t, r] = wr((w) => [
    w.chainId,
    w.account
  ]), [n, i] = $t(0), [s, o] = $t(!1), [a, f] = $t(void 0), { request: l, data: h, error: y, loading: g } = Br({
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
  po(({ _: w, params: I, topic: A }) => {
    I.event.name === "accountSynced" && e && e.topic === A && (l(), o(!0));
  });
  const v = !!e && !!r;
  return gt(() => {
    v && (l(), o(!0));
  }, [v, r, e]), gt(() => {
    if (y)
      i(0), f(y.message), o(!1);
    else if (h) {
      const w = h && h.type === "GET_BALANCE_RES" ? h : void 0, I = h && h.type === "GET_BALANCE_REJ" ? h.data.error : void 0, A = (w == null ? void 0 : w.data.balance) ?? 0;
      i(A), f(I), o(!1);
    }
  }, [h, y]), gt(() => {
    r === void 0 && i(0);
  }, [r]), { loading: s, balance: n, error: a };
}, Dm = () => {
  const [e, t] = $t(void 0), { connect: r, data: n, error: i, loading: s } = p1({
    requiredNamespaces: {
      aleo: {
        methods: hl,
        chains: go,
        events: js
      }
    }
  }), o = async () => {
    try {
      await r(), t(void 0);
    } catch {
    }
  };
  return gt(() => {
    i && t(i.message);
  }, [i]), { connect: o, data: n, error: e, loading: s };
}, Om = (e) => {
  const t = mr(), [r] = wr((y) => [
    y.chainId
  ]), { request: n, data: i, error: s, loading: o } = Br({
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
  }), a = s ? s.message : i && i.type === "DECRYPT_REJ" ? i.data.error : void 0, f = i && i.type === "DECRYPT_RES" ? i : void 0, l = f == null ? void 0 : f.data.transitions;
  return { decrypt: () => {
    !e || !e.startsWith("at1") || e.length !== 61 || n();
  }, transitions: l, loading: o, error: a };
}, xm = (e) => {
  const t = mr(), [r] = wr((y) => [
    y.chainId
  ]), { request: n, data: i, error: s, loading: o } = Br({
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
  }), a = s ? s.message : i && i.type === "DEPLOY_REJ" ? i.data.error : void 0, f = i && i.type === "DEPLOY_RES" ? i : void 0, l = f == null ? void 0 : f.data.transactionId;
  return { deploy: () => {
    e && n();
  }, transactionId: l, loading: o, error: a };
}, Im = (e) => {
  const t = mr();
  wr((y) => [
    y.chainId
  ]);
  const { request: r, data: n, error: i, loading: s } = Br({
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
  }), o = i ? i.message : n && n.type === "EXECUTE_REJ" ? n.data.error : void 0, a = n && n.type === "EXECUTE_RES" ? n : void 0, f = a == null ? void 0 : a.data.transactionId, l = a == null ? void 0 : a.data.transitions;
  return { execute: () => {
    e && (r(), console.log("sent execute request"));
  }, transactionId: f, transitions: l, error: o, loading: s };
}, Pm = () => {
  const [e, t] = $t({
    loading: !0
  });
  return gt(() => {
  }, []), { ...e };
}, Tm = (e) => {
  const t = mr(), [r, n] = wr((A) => [
    A.chainId,
    A.account
  ]), [i, s] = $t([]), [o, a] = $t(void 0), [f, l] = $t(!1);
  (e == null ? void 0 : e.program_id) === "" && (e.program_id = void 0);
  const { request: h, data: y, error: g, loading: v } = Br({
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
  po(({ id: A, params: U, topic: E }) => {
    U.event.name === "accountSynced" && t && t.topic === E && (h(), l(!0));
  });
  const w = !!t && !!n;
  gt(() => {
    w && (h(), l(!0));
  }, [w, n, t]), gt(() => {
    if (g)
      s([]), a(g.message), l(!1);
    else if (y) {
      const A = y, U = A.type === "GET_RECORDS_REJ" ? A.data.error : void 0, E = A.type === "GET_RECORDS_RES" ? A.data.records : [];
      s(E), a(U), l(!1);
    }
  }, [y, g]);
  const I = () => {
    !!t && !!n && (h(), l(!0));
  };
  return gt(() => {
    n === void 0 && s([]);
  }, [n]), { request: I, records: i, error: o, loading: f };
}, Rm = (e) => {
  const t = mr(), [r] = wr((a) => [
    a.chainId
  ]), { request: n, data: i, error: s, loading: o } = Br({
    topic: (t == null ? void 0 : t.topic) ?? "",
    chainId: r ?? "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "aleo_transfer",
      params: e
    }
  });
  return { transfer: n, data: i, error: s, loading: o };
}, Q1 = () => {
  const e = mr(), [t, r, n] = wr((i) => [
    i.setAccount,
    i.setAccounts,
    i.disconnect
  ]);
  gt(() => {
    if (e) {
      window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
      const i = e.namespaces.aleo.accounts.map((s) => {
        const o = s.split(":");
        return {
          network: o[0],
          chainId: o[1],
          address: o[2]
        };
      });
      r(i ?? []), i[0] && t(i[0]);
    }
  }, [e]), ll(({ id: i, topic: s }) => {
    console.log("session deleted! topic: ", s), n();
  });
};
function Z1(e, t, r = t) {
  const n = e < BigInt(0), i = e.toString().slice(n ? 1 : 0).padStart(t + 1, "0"), s = i.slice(0, i.length - t), o = i.slice(-t);
  let a = o.length - 1;
  for (; o[a] === "0"; )
    --a;
  const f = o.slice(0, a + 1);
  return (n ? "-" : "") + (f ? `${s}.${f.slice(0, r)}` : s);
}
function Am(e, t) {
  const [r, n] = e.split("."), i = (n || "").replace(/0+$/, "").slice(0, t), s = BigInt(10) ** BigInt(t), o = s / BigInt(10) ** BigInt(i.length || 0);
  return BigInt(i || 0) * o + BigInt(r || 0) * s;
}
var em = /* @__PURE__ */ ((e) => (e[e.ETH = 0] = "ETH", e[e.DAI = 1] = "DAI", e))(em || {});
function tm(e) {
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
class Cm {
  constructor(t, r) {
    this.getDisplayValue = () => Z1(this.value, 18) + " " + this.symbol, this.type = t;
    const { id: n, symbol: i, coinMarketCapID: s } = tm(t);
    this.id = n, this.symbol = i, this.coinMarketCapID = s, this.value = r;
  }
}
const Nm = "0x6b175474e89094c44da98b954eedeac495271d0f", $m = [
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
  em as A,
  O1 as B,
  vc as C,
  x1 as D,
  vm as E,
  Nm as F,
  $m as G,
  mm as P,
  nf as R,
  Lc as T,
  St as a,
  wm as b,
  Sm as c,
  Dm as d,
  Om as e,
  xm as f,
  Im as g,
  Pm as h,
  Tm as i,
  Rm as j,
  Q1 as k,
  Z1 as l,
  Am as m,
  Ko as n,
  im as o,
  Gt as p,
  Cm as q,
  fl as r,
  Pi as s,
  nm as t,
  Em as u,
  hl as v,
  D1 as w,
  go as x,
  Yr as y,
  js as z
};
