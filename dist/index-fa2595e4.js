import gn, { memo as bh, useEffect as Yt, useState as qn, useDebugValue as _h } from "react";
var jt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Mi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function lo(e) {
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
var Cs = { exports: {} }, Sn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ca;
function wh() {
  if (ca)
    return Sn;
  ca = 1;
  var e = gn, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(a, u, h) {
    var f, d = {}, y = null, m = null;
    h !== void 0 && (y = "" + h), u.key !== void 0 && (y = "" + u.key), u.ref !== void 0 && (m = u.ref);
    for (f in u)
      n.call(u, f) && !s.hasOwnProperty(f) && (d[f] = u[f]);
    if (a && a.defaultProps)
      for (f in u = a.defaultProps, u)
        d[f] === void 0 && (d[f] = u[f]);
    return { $$typeof: t, type: a, key: y, ref: m, props: d, _owner: i.current };
  }
  return Sn.Fragment = r, Sn.jsx = o, Sn.jsxs = o, Sn;
}
var xn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ua;
function Eh() {
  return ua || (ua = 1, process.env.NODE_ENV !== "production" && function() {
    var e = gn, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), w = Symbol.iterator, O = "@@iterator";
    function A(E) {
      if (E === null || typeof E != "object")
        return null;
      var j = w && E[w] || E[O];
      return typeof j == "function" ? j : null;
    }
    var L = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(E) {
      {
        for (var j = arguments.length, J = new Array(j > 1 ? j - 1 : 0), oe = 1; oe < j; oe++)
          J[oe - 1] = arguments[oe];
        C("error", E, J);
      }
    }
    function C(E, j, J) {
      {
        var oe = L.ReactDebugCurrentFrame, Te = oe.getStackAddendum();
        Te !== "" && (j += "%s", J = J.concat([Te]));
        var xe = J.map(function(Oe) {
          return String(Oe);
        });
        xe.unshift("Warning: " + j), Function.prototype.apply.call(console[E], console, xe);
      }
    }
    var v = !1, S = !1, p = !1, c = !1, g = !1, F;
    F = Symbol.for("react.module.reference");
    function M(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === n || E === s || g || E === i || E === h || E === f || c || E === m || v || S || p || typeof E == "object" && E !== null && (E.$$typeof === y || E.$$typeof === d || E.$$typeof === o || E.$$typeof === a || E.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === F || E.getModuleId !== void 0));
    }
    function U(E, j, J) {
      var oe = E.displayName;
      if (oe)
        return oe;
      var Te = j.displayName || j.name || "";
      return Te !== "" ? J + "(" + Te + ")" : J;
    }
    function $(E) {
      return E.displayName || "Context";
    }
    function B(E) {
      if (E == null)
        return null;
      if (typeof E.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
        return E.displayName || E.name || null;
      if (typeof E == "string")
        return E;
      switch (E) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case h:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case a:
            var j = E;
            return $(j) + ".Consumer";
          case o:
            var J = E;
            return $(J._context) + ".Provider";
          case u:
            return U(E, E.render, "ForwardRef");
          case d:
            var oe = E.displayName || null;
            return oe !== null ? oe : B(E.type) || "Memo";
          case y: {
            var Te = E, xe = Te._payload, Oe = Te._init;
            try {
              return B(Oe(xe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var x = Object.assign, R = 0, G, z, q, H, k, V, ae;
    function W() {
    }
    W.__reactDisabledLog = !0;
    function ie() {
      {
        if (R === 0) {
          G = console.log, z = console.info, q = console.warn, H = console.error, k = console.group, V = console.groupCollapsed, ae = console.groupEnd;
          var E = {
            configurable: !0,
            enumerable: !0,
            value: W,
            writable: !0
          };
          Object.defineProperties(console, {
            info: E,
            log: E,
            warn: E,
            error: E,
            group: E,
            groupCollapsed: E,
            groupEnd: E
          });
        }
        R++;
      }
    }
    function Z() {
      {
        if (R--, R === 0) {
          var E = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: x({}, E, {
              value: G
            }),
            info: x({}, E, {
              value: z
            }),
            warn: x({}, E, {
              value: q
            }),
            error: x({}, E, {
              value: H
            }),
            group: x({}, E, {
              value: k
            }),
            groupCollapsed: x({}, E, {
              value: V
            }),
            groupEnd: x({}, E, {
              value: ae
            })
          });
        }
        R < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = L.ReactCurrentDispatcher, P;
    function N(E, j, J) {
      {
        if (P === void 0)
          try {
            throw Error();
          } catch (Te) {
            var oe = Te.stack.trim().match(/\n( *(at )?)/);
            P = oe && oe[1] || "";
          }
        return `
` + P + E;
      }
    }
    var I = !1, l;
    {
      var D = typeof WeakMap == "function" ? WeakMap : Map;
      l = new D();
    }
    function Y(E, j) {
      if (!E || I)
        return "";
      {
        var J = l.get(E);
        if (J !== void 0)
          return J;
      }
      var oe;
      I = !0;
      var Te = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var xe;
      xe = ne.current, ne.current = null, ie();
      try {
        if (j) {
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
            } catch (Qt) {
              oe = Qt;
            }
            Reflect.construct(E, [], Oe);
          } else {
            try {
              Oe.call();
            } catch (Qt) {
              oe = Qt;
            }
            E.call(Oe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Qt) {
            oe = Qt;
          }
          E();
        }
      } catch (Qt) {
        if (Qt && oe && typeof Qt.stack == "string") {
          for (var we = Qt.stack.split(`
`), gt = oe.stack.split(`
`), He = we.length - 1, Je = gt.length - 1; He >= 1 && Je >= 0 && we[He] !== gt[Je]; )
            Je--;
          for (; He >= 1 && Je >= 0; He--, Je--)
            if (we[He] !== gt[Je]) {
              if (He !== 1 || Je !== 1)
                do
                  if (He--, Je--, Je < 0 || we[He] !== gt[Je]) {
                    var st = `
` + we[He].replace(" at new ", " at ");
                    return E.displayName && st.includes("<anonymous>") && (st = st.replace("<anonymous>", E.displayName)), typeof E == "function" && l.set(E, st), st;
                  }
                while (He >= 1 && Je >= 0);
              break;
            }
        }
      } finally {
        I = !1, ne.current = xe, Z(), Error.prepareStackTrace = Te;
      }
      var wr = E ? E.displayName || E.name : "", ii = wr ? N(wr) : "";
      return typeof E == "function" && l.set(E, ii), ii;
    }
    function Q(E, j, J) {
      return Y(E, !1);
    }
    function ve(E) {
      var j = E.prototype;
      return !!(j && j.isReactComponent);
    }
    function be(E, j, J) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return Y(E, ve(E));
      if (typeof E == "string")
        return N(E);
      switch (E) {
        case h:
          return N("Suspense");
        case f:
          return N("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case u:
            return Q(E.render);
          case d:
            return be(E.type, j, J);
          case y: {
            var oe = E, Te = oe._payload, xe = oe._init;
            try {
              return be(xe(Te), j, J);
            } catch {
            }
          }
        }
      return "";
    }
    var de = Object.prototype.hasOwnProperty, Ce = {}, Be = L.ReactDebugCurrentFrame;
    function Le(E) {
      if (E) {
        var j = E._owner, J = be(E.type, E._source, j ? j.type : null);
        Be.setExtraStackFrame(J);
      } else
        Be.setExtraStackFrame(null);
    }
    function De(E, j, J, oe, Te) {
      {
        var xe = Function.call.bind(de);
        for (var Oe in E)
          if (xe(E, Oe)) {
            var we = void 0;
            try {
              if (typeof E[Oe] != "function") {
                var gt = Error((oe || "React class") + ": " + J + " type `" + Oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[Oe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw gt.name = "Invariant Violation", gt;
              }
              we = E[Oe](j, Oe, oe, J, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (He) {
              we = He;
            }
            we && !(we instanceof Error) && (Le(Te), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", oe || "React class", J, Oe, typeof we), Le(null)), we instanceof Error && !(we.message in Ce) && (Ce[we.message] = !0, Le(Te), _("Failed %s type: %s", J, we.message), Le(null));
          }
      }
    }
    var Ee = Array.isArray;
    function pe(E) {
      return Ee(E);
    }
    function ye(E) {
      {
        var j = typeof Symbol == "function" && Symbol.toStringTag, J = j && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return J;
      }
    }
    function ge(E) {
      try {
        return le(E), !1;
      } catch {
        return !0;
      }
    }
    function le(E) {
      return "" + E;
    }
    function ue(E) {
      if (ge(E))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ye(E)), le(E);
    }
    var se = L.ReactCurrentOwner, me = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, ce, Se;
    Se = {};
    function Ae(E) {
      if (de.call(E, "ref")) {
        var j = Object.getOwnPropertyDescriptor(E, "ref").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return E.ref !== void 0;
    }
    function Ne(E) {
      if (de.call(E, "key")) {
        var j = Object.getOwnPropertyDescriptor(E, "key").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return E.key !== void 0;
    }
    function Pe(E, j) {
      if (typeof E.ref == "string" && se.current && j && se.current.stateNode !== j) {
        var J = B(se.current.type);
        Se[J] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(se.current.type), E.ref), Se[J] = !0);
      }
    }
    function Ie(E, j) {
      {
        var J = function() {
          _e || (_e = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        J.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: J,
          configurable: !0
        });
      }
    }
    function Ut(E, j) {
      {
        var J = function() {
          ce || (ce = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        J.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: J,
          configurable: !0
        });
      }
    }
    var zt = function(E, j, J, oe, Te, xe, Oe) {
      var we = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: E,
        key: j,
        ref: J,
        props: Oe,
        // Record the component responsible for creating this element.
        _owner: xe
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
        value: oe
      }), Object.defineProperty(we, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Te
      }), Object.freeze && (Object.freeze(we.props), Object.freeze(we)), we;
    };
    function ir(E, j, J, oe, Te) {
      {
        var xe, Oe = {}, we = null, gt = null;
        J !== void 0 && (ue(J), we = "" + J), Ne(j) && (ue(j.key), we = "" + j.key), Ae(j) && (gt = j.ref, Pe(j, Te));
        for (xe in j)
          de.call(j, xe) && !me.hasOwnProperty(xe) && (Oe[xe] = j[xe]);
        if (E && E.defaultProps) {
          var He = E.defaultProps;
          for (xe in He)
            Oe[xe] === void 0 && (Oe[xe] = He[xe]);
        }
        if (we || gt) {
          var Je = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          we && Ie(Oe, Je), gt && Ut(Oe, Je);
        }
        return zt(E, we, gt, Te, oe, se.current, Oe);
      }
    }
    var pt = L.ReactCurrentOwner, sr = L.ReactDebugCurrentFrame;
    function Kt(E) {
      if (E) {
        var j = E._owner, J = be(E.type, E._source, j ? j.type : null);
        sr.setExtraStackFrame(J);
      } else
        sr.setExtraStackFrame(null);
    }
    var _r;
    _r = !1;
    function qe(E) {
      return typeof E == "object" && E !== null && E.$$typeof === t;
    }
    function $e() {
      {
        if (pt.current) {
          var E = B(pt.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
    }
    function We(E) {
      {
        if (E !== void 0) {
          var j = E.fileName.replace(/^.*[\\\/]/, ""), J = E.lineNumber;
          return `

Check your code at ` + j + ":" + J + ".";
        }
        return "";
      }
    }
    var Ke = {};
    function Ge(E) {
      {
        var j = $e();
        if (!j) {
          var J = typeof E == "string" ? E : E.displayName || E.name;
          J && (j = `

Check the top-level render call using <` + J + ">.");
        }
        return j;
      }
    }
    function je(E, j) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = !0;
        var J = Ge(j);
        if (Ke[J])
          return;
        Ke[J] = !0;
        var oe = "";
        E && E._owner && E._owner !== pt.current && (oe = " It was passed a child from " + B(E._owner.type) + "."), Kt(E), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', J, oe), Kt(null);
      }
    }
    function Ze(E, j) {
      {
        if (typeof E != "object")
          return;
        if (pe(E))
          for (var J = 0; J < E.length; J++) {
            var oe = E[J];
            qe(oe) && je(oe, j);
          }
        else if (qe(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var Te = A(E);
          if (typeof Te == "function" && Te !== E.entries)
            for (var xe = Te.call(E), Oe; !(Oe = xe.next()).done; )
              qe(Oe.value) && je(Oe.value, j);
        }
      }
    }
    function rt(E) {
      {
        var j = E.type;
        if (j == null || typeof j == "string")
          return;
        var J;
        if (typeof j == "function")
          J = j.propTypes;
        else if (typeof j == "object" && (j.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        j.$$typeof === d))
          J = j.propTypes;
        else
          return;
        if (J) {
          var oe = B(j);
          De(J, E.props, "prop", oe, E);
        } else if (j.PropTypes !== void 0 && !_r) {
          _r = !0;
          var Te = B(j);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Te || "Unknown");
        }
        typeof j.getDefaultProps == "function" && !j.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nt(E) {
      {
        for (var j = Object.keys(E.props), J = 0; J < j.length; J++) {
          var oe = j[J];
          if (oe !== "children" && oe !== "key") {
            Kt(E), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", oe), Kt(null);
            break;
          }
        }
        E.ref !== null && (Kt(E), _("Invalid attribute `ref` supplied to `React.Fragment`."), Kt(null));
      }
    }
    function et(E, j, J, oe, Te, xe) {
      {
        var Oe = M(E);
        if (!Oe) {
          var we = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (we += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var gt = We(Te);
          gt ? we += gt : we += $e();
          var He;
          E === null ? He = "null" : pe(E) ? He = "array" : E !== void 0 && E.$$typeof === t ? (He = "<" + (B(E.type) || "Unknown") + " />", we = " Did you accidentally export a JSX literal instead of a component?") : He = typeof E, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", He, we);
        }
        var Je = ir(E, j, J, Te, xe);
        if (Je == null)
          return Je;
        if (Oe) {
          var st = j.children;
          if (st !== void 0)
            if (oe)
              if (pe(st)) {
                for (var wr = 0; wr < st.length; wr++)
                  Ze(st[wr], E);
                Object.freeze && Object.freeze(st);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ze(st, E);
        }
        return E === n ? nt(Je) : rt(Je), Je;
      }
    }
    function it(E, j, J) {
      return et(E, j, J, !0);
    }
    function tt(E, j, J) {
      return et(E, j, J, !1);
    }
    var Ye = tt, Me = it;
    xn.Fragment = n, xn.jsx = Ye, xn.jsxs = Me;
  }()), xn;
}
process.env.NODE_ENV === "production" ? Cs.exports = wh() : Cs.exports = Eh();
var As = Cs.exports;
const Sh = Symbol(), la = Object.getPrototypeOf, Is = /* @__PURE__ */ new WeakMap(), xh = (e) => e && (Is.has(e) ? Is.get(e) : la(e) === Object.prototype || la(e) === Array.prototype), Dh = (e) => xh(e) && e[Sh] || null, fa = (e, t = !0) => {
  Is.set(e, t);
}, Xi = (e) => typeof e == "object" && e !== null, Dr = /* @__PURE__ */ new WeakMap(), fi = /* @__PURE__ */ new WeakSet(), Oh = (e = Object.is, t = (f, d) => new Proxy(f, d), r = (f) => Xi(f) && !fi.has(f) && (Array.isArray(f) || !(Symbol.iterator in f)) && !(f instanceof WeakMap) && !(f instanceof WeakSet) && !(f instanceof Error) && !(f instanceof Number) && !(f instanceof Date) && !(f instanceof String) && !(f instanceof RegExp) && !(f instanceof ArrayBuffer), n = (f) => f.configurable && f.enumerable && f.writable, i = (f) => {
  switch (f.status) {
    case "fulfilled":
      return f.value;
    case "rejected":
      throw f.reason;
    default:
      throw f;
  }
}, s = /* @__PURE__ */ new WeakMap(), o = (f, d, y = i) => {
  const m = s.get(f);
  if ((m == null ? void 0 : m[0]) === d)
    return m[1];
  const w = Array.isArray(f) ? [] : Object.create(Object.getPrototypeOf(f));
  return fa(w, !0), s.set(f, [d, w]), Reflect.ownKeys(f).forEach((O) => {
    if (Object.getOwnPropertyDescriptor(w, O))
      return;
    const A = Reflect.get(f, O), L = {
      value: A,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (fi.has(A))
      fa(A, !1);
    else if (A instanceof Promise)
      delete L.value, L.get = () => y(A);
    else if (Dr.has(A)) {
      const [_, C] = Dr.get(
        A
      );
      L.value = o(
        _,
        C(),
        y
      );
    }
    Object.defineProperty(w, O, L);
  }), Object.preventExtensions(w);
}, a = /* @__PURE__ */ new WeakMap(), u = [1, 1], h = (f) => {
  if (!Xi(f))
    throw new Error("object required");
  const d = a.get(f);
  if (d)
    return d;
  let y = u[0];
  const m = /* @__PURE__ */ new Set(), w = (U, $ = ++u[0]) => {
    y !== $ && (y = $, m.forEach((B) => B(U, $)));
  };
  let O = u[1];
  const A = (U = ++u[1]) => (O !== U && !m.size && (O = U, _.forEach(([$]) => {
    const B = $[1](U);
    B > y && (y = B);
  })), y), L = (U) => ($, B) => {
    const x = [...$];
    x[1] = [U, ...x[1]], w(x, B);
  }, _ = /* @__PURE__ */ new Map(), C = (U, $) => {
    if (m.size) {
      const B = $[3](L(U));
      _.set(U, [$, B]);
    } else
      _.set(U, [$]);
  }, v = (U) => {
    var $;
    const B = _.get(U);
    B && (_.delete(U), ($ = B[1]) == null || $.call(B));
  }, S = (U) => (m.add(U), m.size === 1 && _.forEach(([B, x], R) => {
    const G = B[3](L(R));
    _.set(R, [B, G]);
  }), () => {
    m.delete(U), m.size === 0 && _.forEach(([B, x], R) => {
      x && (x(), _.set(R, [B]));
    });
  }), p = Array.isArray(f) ? [] : Object.create(Object.getPrototypeOf(f)), c = (U, $, B, x, R) => {
    if (U && (e($, x) || a.has(x) && e($, a.get(x))))
      return;
    v(B), Xi(x) && (x = Dh(x) || x);
    let G = x;
    if (x instanceof Promise)
      x.then((z) => {
        x.status = "fulfilled", x.value = z, w(["resolve", [B], z]);
      }).catch((z) => {
        x.status = "rejected", x.reason = z, w(["reject", [B], z]);
      });
    else {
      !Dr.has(x) && r(x) && (G = h(x));
      const z = !fi.has(G) && Dr.get(G);
      z && C(B, z);
    }
    R(G), w(["set", [B], x, $]);
  }, F = t(p, {
    deleteProperty(U, $) {
      const B = Reflect.get(U, $);
      v($);
      const x = Reflect.deleteProperty(U, $);
      return x && w(["delete", [$], B]), x;
    },
    set(U, $, B, x) {
      const R = Reflect.has(U, $), G = Reflect.get(U, $, x);
      return c(R, G, $, B, (z) => {
        Reflect.set(U, $, z, x);
      }), !0;
    },
    defineProperty(U, $, B) {
      if (n(B)) {
        const x = Reflect.getOwnPropertyDescriptor(U, $);
        if (!x || n(x))
          return c(
            !!x && "value" in x,
            x == null ? void 0 : x.value,
            $,
            B.value,
            (R) => {
              Reflect.defineProperty(U, $, {
                ...B,
                value: R
              });
            }
          ), !0;
      }
      return Reflect.defineProperty(U, $, B);
    }
  });
  a.set(f, F);
  const M = [
    p,
    A,
    o,
    S
  ];
  return Dr.set(F, M), Reflect.ownKeys(f).forEach((U) => {
    const $ = Object.getOwnPropertyDescriptor(
      f,
      U
    );
    "value" in $ && (F[U] = f[U], delete $.value, delete $.writable), Object.defineProperty(p, U, $);
  }), F;
}) => [
  // public functions
  h,
  // shared state
  Dr,
  fi,
  // internal things
  e,
  t,
  r,
  n,
  i,
  s,
  o,
  a,
  u
], [Ch] = Oh();
function Rr(e = {}) {
  return Ch(e);
}
function Wr(e, t, r) {
  const n = Dr.get(e);
  let i;
  const s = [], o = n[3];
  let a = !1;
  const h = o((f) => {
    if (s.push(f), r) {
      t(s.splice(0));
      return;
    }
    i || (i = Promise.resolve().then(() => {
      i = void 0, a && t(s.splice(0));
    }));
  });
  return a = !0, () => {
    a = !1, h();
  };
}
function Ah(e, t) {
  const r = Dr.get(e), [n, i, s] = r;
  return s(n, i(), t);
}
const ft = Rr({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), Ou = { state: ft, subscribe(e) {
  return Wr(ft, () => e(ft));
}, push(e, t) {
  e !== ft.view && (ft.view = e, t && (ft.data = t), ft.history.push(e));
}, reset(e) {
  ft.view = e, ft.history = [e];
}, replace(e) {
  ft.history.length > 1 && (ft.history[ft.history.length - 1] = e, ft.view = e);
}, goBack() {
  if (ft.history.length > 1) {
    ft.history.pop();
    const [e] = ft.history.slice(-1);
    ft.view = e;
  }
}, setData(e) {
  ft.data = e;
} }, Ot = { WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE", WCM_VERSION: "WCM_VERSION", RECOMMENDED_WALLET_AMOUNT: 9, isMobile() {
  return typeof window < "u" ? !!(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
}, isAndroid() {
  return Ot.isMobile() && navigator.userAgent.toLowerCase().includes("android");
}, isIos() {
  const e = navigator.userAgent.toLowerCase();
  return Ot.isMobile() && (e.includes("iphone") || e.includes("ipad"));
}, isHttpUrl(e) {
  return e.startsWith("http://") || e.startsWith("https://");
}, isArray(e) {
  return Array.isArray(e) && e.length > 0;
}, formatNativeUrl(e, t, r) {
  if (Ot.isHttpUrl(e))
    return this.formatUniversalUrl(e, t, r);
  let n = e;
  n.includes("://") || (n = e.replaceAll("/", "").replaceAll(":", ""), n = `${n}://`), n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, r);
  const i = encodeURIComponent(t);
  return `${n}wc?uri=${i}`;
}, formatUniversalUrl(e, t, r) {
  if (!Ot.isHttpUrl(e))
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
    localStorage.setItem(Ot.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: e, name: t }));
  } catch {
    console.info("Unable to set WalletConnect deep link");
  }
}, setWalletConnectAndroidDeepLink(e) {
  try {
    const [t] = e.split("?");
    localStorage.setItem(Ot.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: t, name: "Android" }));
  } catch {
    console.info("Unable to set WalletConnect android deep link");
  }
}, removeWalletConnectDeepLink() {
  try {
    localStorage.removeItem(Ot.WALLETCONNECT_DEEPLINK_CHOICE);
  } catch {
    console.info("Unable to remove WalletConnect deep link");
  }
}, setModalVersionInStorage() {
  try {
    typeof localStorage < "u" && localStorage.setItem(Ot.WCM_VERSION, "2.6.1");
  } catch {
    console.info("Unable to set Web3Modal version in storage");
  }
}, getWalletRouterData() {
  var e;
  const t = (e = Ou.state.data) == null ? void 0 : e.Wallet;
  if (!t)
    throw new Error('Missing "Wallet" view data');
  return t;
} }, Ih = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), Et = Rr({ enabled: Ih, userSessionId: "", events: [], connectedWalletId: void 0 }), Th = { state: Et, subscribe(e) {
  return Wr(Et.events, () => e(Ah(Et.events[Et.events.length - 1])));
}, initialize() {
  Et.enabled && typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" && (Et.userSessionId = crypto.randomUUID());
}, setConnectedWalletId(e) {
  Et.connectedWalletId = e;
}, click(e) {
  if (Et.enabled) {
    const t = { type: "CLICK", name: e.name, userSessionId: Et.userSessionId, timestamp: Date.now(), data: e };
    Et.events.push(t);
  }
}, track(e) {
  if (Et.enabled) {
    const t = { type: "TRACK", name: e.name, userSessionId: Et.userSessionId, timestamp: Date.now(), data: e };
    Et.events.push(t);
  }
}, view(e) {
  if (Et.enabled) {
    const t = { type: "VIEW", name: e.name, userSessionId: Et.userSessionId, timestamp: Date.now(), data: e };
    Et.events.push(t);
  }
} }, or = Rr({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }), rr = { state: or, subscribe(e) {
  return Wr(or, () => e(or));
}, setChains(e) {
  or.chains = e;
}, setWalletConnectUri(e) {
  or.walletConnectUri = e;
}, setIsCustomDesktop(e) {
  or.isCustomDesktop = e;
}, setIsCustomMobile(e) {
  or.isCustomMobile = e;
}, setIsDataLoaded(e) {
  or.isDataLoaded = e;
}, setIsUiLoaded(e) {
  or.isUiLoaded = e;
}, setIsAuth(e) {
  or.isAuth = e;
} }, hi = Rr({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), fn = { state: hi, subscribe(e) {
  return Wr(hi, () => e(hi));
}, setConfig(e) {
  var t, r;
  Th.initialize(), rr.setChains(e.chains), rr.setIsAuth(!!e.enableAuthMode), rr.setIsCustomMobile(!!((t = e.mobileWallets) != null && t.length)), rr.setIsCustomDesktop(!!((r = e.desktopWallets) != null && r.length)), Ot.setModalVersionInStorage(), Object.assign(hi, e);
} };
var Rh = Object.defineProperty, ha = Object.getOwnPropertySymbols, Nh = Object.prototype.hasOwnProperty, Ph = Object.prototype.propertyIsEnumerable, da = (e, t, r) => t in e ? Rh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Fh = (e, t) => {
  for (var r in t || (t = {}))
    Nh.call(t, r) && da(e, r, t[r]);
  if (ha)
    for (var r of ha(t))
      Ph.call(t, r) && da(e, r, t[r]);
  return e;
};
const Ts = "https://explorer-api.walletconnect.com", Rs = "wcm", Ns = "js-2.6.1";
async function di(e, t) {
  const r = Fh({ sdkType: Rs, sdkVersion: Ns }, t), n = new URL(e, Ts);
  return n.searchParams.append("projectId", fn.state.projectId), Object.entries(r).forEach(([i, s]) => {
    s && n.searchParams.append(i, String(s));
  }), (await fetch(n)).json();
}
const Lr = { async getDesktopListings(e) {
  return di("/w3m/v1/getDesktopListings", e);
}, async getMobileListings(e) {
  return di("/w3m/v1/getMobileListings", e);
}, async getInjectedListings(e) {
  return di("/w3m/v1/getInjectedListings", e);
}, async getAllListings(e) {
  return di("/w3m/v1/getAllListings", e);
}, getWalletImageUrl(e) {
  return `${Ts}/w3m/v1/getWalletImage/${e}?projectId=${fn.state.projectId}&sdkType=${Rs}&sdkVersion=${Ns}`;
}, getAssetImageUrl(e) {
  return `${Ts}/w3m/v1/getAssetImage/${e}?projectId=${fn.state.projectId}&sdkType=${Rs}&sdkVersion=${Ns}`;
} };
var Lh = Object.defineProperty, pa = Object.getOwnPropertySymbols, Mh = Object.prototype.hasOwnProperty, Uh = Object.prototype.propertyIsEnumerable, ga = (e, t, r) => t in e ? Lh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, $h = (e, t) => {
  for (var r in t || (t = {}))
    Mh.call(t, r) && ga(e, r, t[r]);
  if (pa)
    for (var r of pa(t))
      Uh.call(t, r) && ga(e, r, t[r]);
  return e;
};
const ya = Ot.isMobile(), ar = Rr({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), CE = { state: ar, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: e, explorerExcludedWalletIds: t } = fn.state;
  if (e === "NONE" || t === "ALL" && !e)
    return ar.recomendedWallets;
  if (Ot.isArray(e)) {
    const r = { recommendedIds: e.join(",") }, { listings: n } = await Lr.getAllListings(r), i = Object.values(n);
    i.sort((s, o) => {
      const a = e.indexOf(s.id), u = e.indexOf(o.id);
      return a - u;
    }), ar.recomendedWallets = i;
  } else {
    const { chains: r, isAuth: n } = rr.state, i = r == null ? void 0 : r.join(","), s = Ot.isArray(t), o = { page: 1, sdks: n ? "auth_v1" : void 0, entries: Ot.RECOMMENDED_WALLET_AMOUNT, chains: i, version: 2, excludedIds: s ? t.join(",") : void 0 }, { listings: a } = ya ? await Lr.getMobileListings(o) : await Lr.getDesktopListings(o);
    ar.recomendedWallets = Object.values(a);
  }
  return ar.recomendedWallets;
}, async getWallets(e) {
  const t = $h({}, e), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: n } = fn.state, { recomendedWallets: i } = ar;
  if (n === "ALL")
    return ar.wallets;
  i.length ? t.excludedIds = i.map((d) => d.id).join(",") : Ot.isArray(r) && (t.excludedIds = r.join(",")), Ot.isArray(n) && (t.excludedIds = [t.excludedIds, n].filter(Boolean).join(",")), rr.state.isAuth && (t.sdks = "auth_v1");
  const { page: s, search: o } = e, { listings: a, total: u } = ya ? await Lr.getMobileListings(t) : await Lr.getDesktopListings(t), h = Object.values(a), f = o ? "search" : "wallets";
  return ar[f] = { listings: [...ar[f].listings, ...h], total: u, page: s ?? 1 }, { listings: h, total: u };
}, getWalletImageUrl(e) {
  return Lr.getWalletImageUrl(e);
}, getAssetImageUrl(e) {
  return Lr.getAssetImageUrl(e);
}, resetSearch() {
  ar.search = { listings: [], total: 0, page: 1 };
} }, Zr = Rr({ open: !1 }), Qi = { state: Zr, subscribe(e) {
  return Wr(Zr, () => e(Zr));
}, async open(e) {
  return new Promise((t) => {
    const { isUiLoaded: r, isDataLoaded: n } = rr.state;
    if (Ot.removeWalletConnectDeepLink(), rr.setWalletConnectUri(e == null ? void 0 : e.uri), rr.setChains(e == null ? void 0 : e.chains), Ou.reset("ConnectWallet"), r && n)
      Zr.open = !0, t();
    else {
      const i = setInterval(() => {
        const s = rr.state;
        s.isUiLoaded && s.isDataLoaded && (clearInterval(i), Zr.open = !0, t());
      }, 200);
    }
  });
}, close() {
  Zr.open = !1;
} };
var jh = Object.defineProperty, ma = Object.getOwnPropertySymbols, kh = Object.prototype.hasOwnProperty, Bh = Object.prototype.propertyIsEnumerable, va = (e, t, r) => t in e ? jh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, qh = (e, t) => {
  for (var r in t || (t = {}))
    kh.call(t, r) && va(e, r, t[r]);
  if (ma)
    for (var r of ma(t))
      Bh.call(t, r) && va(e, r, t[r]);
  return e;
};
function zh() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const Dn = Rr({ themeMode: zh() ? "dark" : "light" }), ba = { state: Dn, subscribe(e) {
  return Wr(Dn, () => e(Dn));
}, setThemeConfig(e) {
  const { themeMode: t, themeVariables: r } = e;
  t && (Dn.themeMode = t), r && (Dn.themeVariables = qh({}, r));
} }, Mr = Rr({ open: !1, message: "", variant: "success" }), AE = { state: Mr, subscribe(e) {
  return Wr(Mr, () => e(Mr));
}, openToast(e, t) {
  Mr.open = !0, Mr.message = e, Mr.variant = t;
}, closeToast() {
  Mr.open = !1;
} };
let Kh = class {
  constructor(t) {
    this.openModal = Qi.open, this.closeModal = Qi.close, this.subscribeModal = Qi.subscribe, this.setTheme = ba.setThemeConfig, ba.setThemeConfig(t), fn.setConfig(t), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-a6796892.js");
      const t = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", t), rr.setIsUiLoaded(!0);
    }
  }
};
var fo = { exports: {} }, un = typeof Reflect == "object" ? Reflect : null, _a = un && typeof un.apply == "function" ? un.apply : function(t, r, n) {
  return Function.prototype.apply.call(t, r, n);
}, yi;
un && typeof un.ownKeys == "function" ? yi = un.ownKeys : Object.getOwnPropertySymbols ? yi = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : yi = function(t) {
  return Object.getOwnPropertyNames(t);
};
function Hh(e) {
  console && console.warn && console.warn(e);
}
var Cu = Number.isNaN || function(t) {
  return t !== t;
};
function Fe() {
  Fe.init.call(this);
}
fo.exports = Fe;
fo.exports.once = Yh;
Fe.EventEmitter = Fe;
Fe.prototype._events = void 0;
Fe.prototype._eventsCount = 0;
Fe.prototype._maxListeners = void 0;
var wa = 10;
function Ui(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(Fe, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return wa;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || Cu(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    wa = e;
  }
});
Fe.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Fe.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || Cu(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function Au(e) {
  return e._maxListeners === void 0 ? Fe.defaultMaxListeners : e._maxListeners;
}
Fe.prototype.getMaxListeners = function() {
  return Au(this);
};
Fe.prototype.emit = function(t) {
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
  var u = s[t];
  if (u === void 0)
    return !1;
  if (typeof u == "function")
    _a(u, this, r);
  else
    for (var h = u.length, f = Pu(u, h), n = 0; n < h; ++n)
      _a(f[n], this, r);
  return !0;
};
function Iu(e, t, r, n) {
  var i, s, o;
  if (Ui(r), s = e._events, s === void 0 ? (s = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (s.newListener !== void 0 && (e.emit(
    "newListener",
    t,
    r.listener ? r.listener : r
  ), s = e._events), o = s[t]), o === void 0)
    o = s[t] = r, ++e._eventsCount;
  else if (typeof o == "function" ? o = s[t] = n ? [r, o] : [o, r] : n ? o.unshift(r) : o.push(r), i = Au(e), i > 0 && o.length > i && !o.warned) {
    o.warned = !0;
    var a = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    a.name = "MaxListenersExceededWarning", a.emitter = e, a.type = t, a.count = o.length, Hh(a);
  }
  return e;
}
Fe.prototype.addListener = function(t, r) {
  return Iu(this, t, r, !1);
};
Fe.prototype.on = Fe.prototype.addListener;
Fe.prototype.prependListener = function(t, r) {
  return Iu(this, t, r, !0);
};
function Vh() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Tu(e, t, r) {
  var n = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r }, i = Vh.bind(n);
  return i.listener = r, n.wrapFn = i, i;
}
Fe.prototype.once = function(t, r) {
  return Ui(r), this.on(t, Tu(this, t, r)), this;
};
Fe.prototype.prependOnceListener = function(t, r) {
  return Ui(r), this.prependListener(t, Tu(this, t, r)), this;
};
Fe.prototype.removeListener = function(t, r) {
  var n, i, s, o, a;
  if (Ui(r), i = this._events, i === void 0)
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
    s === 0 ? n.shift() : Wh(n, s), n.length === 1 && (i[t] = n[0]), i.removeListener !== void 0 && this.emit("removeListener", t, a || r);
  }
  return this;
};
Fe.prototype.off = Fe.prototype.removeListener;
Fe.prototype.removeAllListeners = function(t) {
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
function Ru(e, t, r) {
  var n = e._events;
  if (n === void 0)
    return [];
  var i = n[t];
  return i === void 0 ? [] : typeof i == "function" ? r ? [i.listener || i] : [i] : r ? Gh(i) : Pu(i, i.length);
}
Fe.prototype.listeners = function(t) {
  return Ru(this, t, !0);
};
Fe.prototype.rawListeners = function(t) {
  return Ru(this, t, !1);
};
Fe.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : Nu.call(e, t);
};
Fe.prototype.listenerCount = Nu;
function Nu(e) {
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
Fe.prototype.eventNames = function() {
  return this._eventsCount > 0 ? yi(this._events) : [];
};
function Pu(e, t) {
  for (var r = new Array(t), n = 0; n < t; ++n)
    r[n] = e[n];
  return r;
}
function Wh(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function Gh(e) {
  for (var t = new Array(e.length), r = 0; r < t.length; ++r)
    t[r] = e[r].listener || e[r];
  return t;
}
function Yh(e, t) {
  return new Promise(function(r, n) {
    function i(o) {
      e.removeListener(t, s), n(o);
    }
    function s() {
      typeof e.removeListener == "function" && e.removeListener("error", i), r([].slice.call(arguments));
    }
    Fu(e, t, s, { once: !0 }), t !== "error" && Jh(e, i, { once: !0 });
  });
}
function Jh(e, t, r) {
  typeof e.on == "function" && Fu(e, "error", t, r);
}
function Fu(e, t, r, n) {
  if (typeof e.on == "function")
    n.once ? e.once(t, r) : e.on(t, r);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function i(s) {
      n.once && e.removeEventListener(t, i), r(s);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var nr = fo.exports;
const Lu = /* @__PURE__ */ Mi(nr);
var $i = {};
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
function Xh(e, t) {
  Ps(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var Fs = function() {
  return Fs = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, Fs.apply(this, arguments);
};
function Qh(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function Zh(e, t, r, n) {
  var i = arguments.length, s = i < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, r) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    s = Reflect.decorate(e, t, r, n);
  else
    for (var a = e.length - 1; a >= 0; a--)
      (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, r, s) : o(t, r)) || s);
  return i > 3 && s && Object.defineProperty(t, r, s), s;
}
function ed(e, t) {
  return function(r, n) {
    t(r, n, e);
  };
}
function td(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function rd(e, t, r, n) {
  function i(s) {
    return s instanceof r ? s : new r(function(o) {
      o(s);
    });
  }
  return new (r || (r = Promise))(function(s, o) {
    function a(f) {
      try {
        h(n.next(f));
      } catch (d) {
        o(d);
      }
    }
    function u(f) {
      try {
        h(n.throw(f));
      } catch (d) {
        o(d);
      }
    }
    function h(f) {
      f.done ? s(f.value) : i(f.value).then(a, u);
    }
    h((n = n.apply(e, t || [])).next());
  });
}
function nd(e, t) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, i, s, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(h) {
    return function(f) {
      return u([h, f]);
    };
  }
  function u(h) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, i && (s = h[0] & 2 ? i.return : h[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, h[1])).done)
          return s;
        switch (i = 0, s && (h = [h[0] & 2, s.value]), h[0]) {
          case 0:
          case 1:
            s = h;
            break;
          case 4:
            return r.label++, { value: h[1], done: !1 };
          case 5:
            r.label++, i = h[1], h = [0];
            continue;
          case 7:
            h = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (s = r.trys, !(s = s.length > 0 && s[s.length - 1]) && (h[0] === 6 || h[0] === 2)) {
              r = 0;
              continue;
            }
            if (h[0] === 3 && (!s || h[1] > s[0] && h[1] < s[3])) {
              r.label = h[1];
              break;
            }
            if (h[0] === 6 && r.label < s[1]) {
              r.label = s[1], s = h;
              break;
            }
            if (s && r.label < s[2]) {
              r.label = s[2], r.ops.push(h);
              break;
            }
            s[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        h = t.call(e, r);
      } catch (f) {
        h = [6, f], i = 0;
      } finally {
        n = s = 0;
      }
    if (h[0] & 5)
      throw h[1];
    return { value: h[0] ? h[1] : void 0, done: !0 };
  }
}
function id(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}
function sd(e, t) {
  for (var r in e)
    r !== "default" && !t.hasOwnProperty(r) && (t[r] = e[r]);
}
function Ls(e) {
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
function Mu(e, t) {
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
function od() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(Mu(arguments[t]));
  return e;
}
function ad() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++)
    e += arguments[t].length;
  for (var n = Array(e), i = 0, t = 0; t < r; t++)
    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, i++)
      n[i] = s[o];
  return n;
}
function Hn(e) {
  return this instanceof Hn ? (this.v = e, this) : new Hn(e);
}
function cd(e, t, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []), i, s = [];
  return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(y) {
    n[y] && (i[y] = function(m) {
      return new Promise(function(w, O) {
        s.push([y, m, w, O]) > 1 || a(y, m);
      });
    });
  }
  function a(y, m) {
    try {
      u(n[y](m));
    } catch (w) {
      d(s[0][3], w);
    }
  }
  function u(y) {
    y.value instanceof Hn ? Promise.resolve(y.value.v).then(h, f) : d(s[0][2], y);
  }
  function h(y) {
    a("next", y);
  }
  function f(y) {
    a("throw", y);
  }
  function d(y, m) {
    y(m), s.shift(), s.length && a(s[0][0], s[0][1]);
  }
}
function ud(e) {
  var t, r;
  return t = {}, n("next"), n("throw", function(i) {
    throw i;
  }), n("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function n(i, s) {
    t[i] = e[i] ? function(o) {
      return (r = !r) ? { value: Hn(e[i](o)), done: i === "return" } : s ? s(o) : o;
    } : s;
  }
}
function ld(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], r;
  return t ? t.call(e) : (e = typeof Ls == "function" ? Ls(e) : e[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(s) {
    r[s] = e[s] && function(o) {
      return new Promise(function(a, u) {
        o = e[s](o), i(a, u, o.done, o.value);
      });
    };
  }
  function i(s, o, a, u) {
    Promise.resolve(u).then(function(h) {
      s({ value: h, done: a });
    }, o);
  }
}
function fd(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
function hd(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  return t.default = e, t;
}
function dd(e) {
  return e && e.__esModule ? e : { default: e };
}
function pd(e, t) {
  if (!t.has(e))
    throw new TypeError("attempted to get private field on non-instance");
  return t.get(e);
}
function gd(e, t, r) {
  if (!t.has(e))
    throw new TypeError("attempted to set private field on non-instance");
  return t.set(e, r), r;
}
const yd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return Fs;
  },
  __asyncDelegator: ud,
  __asyncGenerator: cd,
  __asyncValues: ld,
  __await: Hn,
  __awaiter: rd,
  __classPrivateFieldGet: pd,
  __classPrivateFieldSet: gd,
  __createBinding: id,
  __decorate: Zh,
  __exportStar: sd,
  __extends: Xh,
  __generator: nd,
  __importDefault: dd,
  __importStar: hd,
  __makeTemplateObject: fd,
  __metadata: td,
  __param: ed,
  __read: Mu,
  __rest: Qh,
  __spread: od,
  __spreadArrays: ad,
  __values: Ls
}, Symbol.toStringTag, { value: "Module" })), Xt = /* @__PURE__ */ lo(yd);
var Qn = {};
Object.defineProperty(Qn, "__esModule", { value: !0 });
function md(e) {
  if (typeof e != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof e}`);
  try {
    return JSON.parse(e);
  } catch {
    return e;
  }
}
Qn.safeJsonParse = md;
function vd(e) {
  return typeof e == "string" ? e : JSON.stringify(e, (t, r) => typeof r > "u" ? null : r);
}
Qn.safeJsonStringify = vd;
var On = { exports: {} }, Ea;
function bd() {
  return Ea || (Ea = 1, function() {
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
    }), typeof jt < "u" && jt.localStorage ? On.exports = jt.localStorage : typeof window < "u" && window.localStorage ? On.exports = window.localStorage : On.exports = new t();
  }()), On.exports;
}
var Zi = {}, Cn = {}, Sa;
function _d() {
  if (Sa)
    return Cn;
  Sa = 1, Object.defineProperty(Cn, "__esModule", { value: !0 }), Cn.IKeyValueStorage = void 0;
  class e {
  }
  return Cn.IKeyValueStorage = e, Cn;
}
var An = {}, xa;
function wd() {
  if (xa)
    return An;
  xa = 1, Object.defineProperty(An, "__esModule", { value: !0 }), An.parseEntry = void 0;
  const e = Qn;
  function t(r) {
    var n;
    return [r[0], e.safeJsonParse((n = r[1]) !== null && n !== void 0 ? n : "")];
  }
  return An.parseEntry = t, An;
}
var Da;
function Ed() {
  return Da || (Da = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = Xt;
    t.__exportStar(_d(), e), t.__exportStar(wd(), e);
  }(Zi)), Zi;
}
Object.defineProperty($i, "__esModule", { value: !0 });
$i.KeyValueStorage = void 0;
const rn = Xt, Oa = Qn, Sd = rn.__importDefault(bd()), xd = Ed();
class Uu {
  constructor() {
    this.localStorage = Sd.default;
  }
  getKeys() {
    return rn.__awaiter(this, void 0, void 0, function* () {
      return Object.keys(this.localStorage);
    });
  }
  getEntries() {
    return rn.__awaiter(this, void 0, void 0, function* () {
      return Object.entries(this.localStorage).map(xd.parseEntry);
    });
  }
  getItem(t) {
    return rn.__awaiter(this, void 0, void 0, function* () {
      const r = this.localStorage.getItem(t);
      if (r !== null)
        return Oa.safeJsonParse(r);
    });
  }
  setItem(t, r) {
    return rn.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.setItem(t, Oa.safeJsonStringify(r));
    });
  }
  removeItem(t) {
    return rn.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.removeItem(t);
    });
  }
}
$i.KeyValueStorage = Uu;
var Dd = $i.default = Uu, yn = {}, In = {}, te = {}, es = {}, Tn = {}, Ca;
function Od() {
  if (Ca)
    return Tn;
  Ca = 1, Object.defineProperty(Tn, "__esModule", { value: !0 }), Tn.delay = void 0;
  function e(t) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, t);
    });
  }
  return Tn.delay = e, Tn;
}
var Ur = {}, ts = {}, $r = {}, Aa;
function Cd() {
  return Aa || (Aa = 1, Object.defineProperty($r, "__esModule", { value: !0 }), $r.ONE_THOUSAND = $r.ONE_HUNDRED = void 0, $r.ONE_HUNDRED = 100, $r.ONE_THOUSAND = 1e3), $r;
}
var rs = {}, Ia;
function Ad() {
  return Ia || (Ia = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ONE_YEAR = e.FOUR_WEEKS = e.THREE_WEEKS = e.TWO_WEEKS = e.ONE_WEEK = e.THIRTY_DAYS = e.SEVEN_DAYS = e.FIVE_DAYS = e.THREE_DAYS = e.ONE_DAY = e.TWENTY_FOUR_HOURS = e.TWELVE_HOURS = e.SIX_HOURS = e.THREE_HOURS = e.ONE_HOUR = e.SIXTY_MINUTES = e.THIRTY_MINUTES = e.TEN_MINUTES = e.FIVE_MINUTES = e.ONE_MINUTE = e.SIXTY_SECONDS = e.THIRTY_SECONDS = e.TEN_SECONDS = e.FIVE_SECONDS = e.ONE_SECOND = void 0, e.ONE_SECOND = 1, e.FIVE_SECONDS = 5, e.TEN_SECONDS = 10, e.THIRTY_SECONDS = 30, e.SIXTY_SECONDS = 60, e.ONE_MINUTE = e.SIXTY_SECONDS, e.FIVE_MINUTES = e.ONE_MINUTE * 5, e.TEN_MINUTES = e.ONE_MINUTE * 10, e.THIRTY_MINUTES = e.ONE_MINUTE * 30, e.SIXTY_MINUTES = e.ONE_MINUTE * 60, e.ONE_HOUR = e.SIXTY_MINUTES, e.THREE_HOURS = e.ONE_HOUR * 3, e.SIX_HOURS = e.ONE_HOUR * 6, e.TWELVE_HOURS = e.ONE_HOUR * 12, e.TWENTY_FOUR_HOURS = e.ONE_HOUR * 24, e.ONE_DAY = e.TWENTY_FOUR_HOURS, e.THREE_DAYS = e.ONE_DAY * 3, e.FIVE_DAYS = e.ONE_DAY * 5, e.SEVEN_DAYS = e.ONE_DAY * 7, e.THIRTY_DAYS = e.ONE_DAY * 30, e.ONE_WEEK = e.SEVEN_DAYS, e.TWO_WEEKS = e.ONE_WEEK * 2, e.THREE_WEEKS = e.ONE_WEEK * 3, e.FOUR_WEEKS = e.ONE_WEEK * 4, e.ONE_YEAR = e.ONE_DAY * 365;
  }(rs)), rs;
}
var Ta;
function $u() {
  return Ta || (Ta = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = Xt;
    t.__exportStar(Cd(), e), t.__exportStar(Ad(), e);
  }(ts)), ts;
}
var Ra;
function Id() {
  if (Ra)
    return Ur;
  Ra = 1, Object.defineProperty(Ur, "__esModule", { value: !0 }), Ur.fromMiliseconds = Ur.toMiliseconds = void 0;
  const e = $u();
  function t(n) {
    return n * e.ONE_THOUSAND;
  }
  Ur.toMiliseconds = t;
  function r(n) {
    return Math.floor(n / e.ONE_THOUSAND);
  }
  return Ur.fromMiliseconds = r, Ur;
}
var Na;
function Td() {
  return Na || (Na = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = Xt;
    t.__exportStar(Od(), e), t.__exportStar(Id(), e);
  }(es)), es;
}
var en = {}, Pa;
function Rd() {
  if (Pa)
    return en;
  Pa = 1, Object.defineProperty(en, "__esModule", { value: !0 }), en.Watch = void 0;
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
  return en.Watch = e, en.default = e, en;
}
var ns = {}, Rn = {}, Fa;
function Nd() {
  if (Fa)
    return Rn;
  Fa = 1, Object.defineProperty(Rn, "__esModule", { value: !0 }), Rn.IWatch = void 0;
  class e {
  }
  return Rn.IWatch = e, Rn;
}
var La;
function Pd() {
  return La || (La = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), Xt.__exportStar(Nd(), e);
  }(ns)), ns;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = Xt;
  t.__exportStar(Td(), e), t.__exportStar(Rd(), e), t.__exportStar(Pd(), e), t.__exportStar($u(), e);
})(te);
var is = {}, Nn = {};
let Gr = class {
};
const Fd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: Gr
}, Symbol.toStringTag, { value: "Module" })), Ld = /* @__PURE__ */ lo(Fd);
var Ma;
function Md() {
  if (Ma)
    return Nn;
  Ma = 1, Object.defineProperty(Nn, "__esModule", { value: !0 }), Nn.IHeartBeat = void 0;
  const e = Ld;
  class t extends e.IEvents {
    constructor(n) {
      super();
    }
  }
  return Nn.IHeartBeat = t, Nn;
}
var Ua;
function ju() {
  return Ua || (Ua = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), Xt.__exportStar(Md(), e);
  }(is)), is;
}
var ss = {}, jr = {}, $a;
function Ud() {
  if ($a)
    return jr;
  $a = 1, Object.defineProperty(jr, "__esModule", { value: !0 }), jr.HEARTBEAT_EVENTS = jr.HEARTBEAT_INTERVAL = void 0;
  const e = te;
  return jr.HEARTBEAT_INTERVAL = e.FIVE_SECONDS, jr.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, jr;
}
var ja;
function ku() {
  return ja || (ja = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), Xt.__exportStar(Ud(), e);
  }(ss)), ss;
}
var ka;
function $d() {
  if (ka)
    return In;
  ka = 1, Object.defineProperty(In, "__esModule", { value: !0 }), In.HeartBeat = void 0;
  const e = Xt, t = nr, r = te, n = ju(), i = ku();
  class s extends n.IHeartBeat {
    constructor(a) {
      super(a), this.events = new t.EventEmitter(), this.interval = i.HEARTBEAT_INTERVAL, this.interval = (a == null ? void 0 : a.interval) || i.HEARTBEAT_INTERVAL;
    }
    static init(a) {
      return e.__awaiter(this, void 0, void 0, function* () {
        const u = new s(a);
        return yield u.init(), u;
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
    on(a, u) {
      this.events.on(a, u);
    }
    once(a, u) {
      this.events.once(a, u);
    }
    off(a, u) {
      this.events.off(a, u);
    }
    removeListener(a, u) {
      this.events.removeListener(a, u);
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
  return In.HeartBeat = s, In;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = Xt;
  t.__exportStar($d(), e), t.__exportStar(ju(), e), t.__exportStar(ku(), e);
})(yn);
var Re = {}, os, Ba;
function jd() {
  if (Ba)
    return os;
  Ba = 1;
  function e(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  os = t;
  function t(r, n, i) {
    var s = i && i.stringify || e, o = 1;
    if (typeof r == "object" && r !== null) {
      var a = n.length + o;
      if (a === 1)
        return r;
      var u = new Array(a);
      u[0] = s(r);
      for (var h = 1; h < a; h++)
        u[h] = s(n[h]);
      return u.join(" ");
    }
    if (typeof r != "string")
      return r;
    var f = n.length;
    if (f === 0)
      return r;
    for (var d = "", y = 1 - o, m = -1, w = r && r.length || 0, O = 0; O < w; ) {
      if (r.charCodeAt(O) === 37 && O + 1 < w) {
        switch (m = m > -1 ? m : 0, r.charCodeAt(O + 1)) {
          case 100:
          case 102:
            if (y >= f || n[y] == null)
              break;
            m < O && (d += r.slice(m, O)), d += Number(n[y]), m = O + 2, O++;
            break;
          case 105:
            if (y >= f || n[y] == null)
              break;
            m < O && (d += r.slice(m, O)), d += Math.floor(Number(n[y])), m = O + 2, O++;
            break;
          case 79:
          case 111:
          case 106:
            if (y >= f || n[y] === void 0)
              break;
            m < O && (d += r.slice(m, O));
            var A = typeof n[y];
            if (A === "string") {
              d += "'" + n[y] + "'", m = O + 2, O++;
              break;
            }
            if (A === "function") {
              d += n[y].name || "<anonymous>", m = O + 2, O++;
              break;
            }
            d += s(n[y]), m = O + 2, O++;
            break;
          case 115:
            if (y >= f)
              break;
            m < O && (d += r.slice(m, O)), d += String(n[y]), m = O + 2, O++;
            break;
          case 37:
            m < O && (d += r.slice(m, O)), d += "%", m = O + 2, O++, y--;
            break;
        }
        ++y;
      }
      ++O;
    }
    return m === -1 ? r : (m < w && (d += r.slice(m)), d);
  }
  return os;
}
var as, qa;
function kd() {
  if (qa)
    return as;
  qa = 1;
  const e = jd();
  as = i;
  const t = S().console || {}, r = {
    mapHttpRequest: w,
    mapHttpResponse: w,
    wrapRequestSerializer: O,
    wrapResponseSerializer: O,
    wrapErrorSerializer: O,
    req: w,
    res: w,
    err: y
  };
  function n(p, c) {
    return Array.isArray(p) ? p.filter(function(F) {
      return F !== "!stdSerializers.err";
    }) : p === !0 ? Object.keys(c) : !1;
  }
  function i(p) {
    p = p || {}, p.browser = p.browser || {};
    const c = p.browser.transmit;
    if (c && typeof c.send != "function")
      throw Error("pino: transmit option must have a send function");
    const g = p.browser.write || t;
    p.browser.write && (p.browser.asObject = !0);
    const F = p.serializers || {}, M = n(p.browser.serialize, F);
    let U = p.browser.serialize;
    Array.isArray(p.browser.serialize) && p.browser.serialize.indexOf("!stdSerializers.err") > -1 && (U = !1);
    const $ = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof g == "function" && (g.error = g.fatal = g.warn = g.info = g.debug = g.trace = g), p.enabled === !1 && (p.level = "silent");
    const B = p.level || "info", x = Object.create(g);
    x.log || (x.log = A), Object.defineProperty(x, "levelVal", {
      get: G
    }), Object.defineProperty(x, "level", {
      get: z,
      set: q
    });
    const R = {
      transmit: c,
      serialize: M,
      asObject: p.browser.asObject,
      levels: $,
      timestamp: m(p)
    };
    x.levels = i.levels, x.level = B, x.setMaxListeners = x.getMaxListeners = x.emit = x.addListener = x.on = x.prependListener = x.once = x.prependOnceListener = x.removeListener = x.removeAllListeners = x.listeners = x.listenerCount = x.eventNames = x.write = x.flush = A, x.serializers = F, x._serialize = M, x._stdErrSerialize = U, x.child = H, c && (x._logEvent = d());
    function G() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function z() {
      return this._level;
    }
    function q(k) {
      if (k !== "silent" && !this.levels.values[k])
        throw Error("unknown level " + k);
      this._level = k, s(R, x, "error", "log"), s(R, x, "fatal", "error"), s(R, x, "warn", "error"), s(R, x, "info", "log"), s(R, x, "debug", "log"), s(R, x, "trace", "log");
    }
    function H(k, V) {
      if (!k)
        throw new Error("missing bindings for child Pino");
      V = V || {}, M && k.serializers && (V.serializers = k.serializers);
      const ae = V.serializers;
      if (M && ae) {
        var W = Object.assign({}, F, ae), ie = p.browser.serialize === !0 ? Object.keys(W) : M;
        delete k.serializers, u([k], ie, W, this._stdErrSerialize);
      }
      function Z(ne) {
        this._childLevel = (ne._childLevel | 0) + 1, this.error = h(ne, k, "error"), this.fatal = h(ne, k, "fatal"), this.warn = h(ne, k, "warn"), this.info = h(ne, k, "info"), this.debug = h(ne, k, "debug"), this.trace = h(ne, k, "trace"), W && (this.serializers = W, this._serialize = ie), c && (this._logEvent = d(
          [].concat(ne._logEvent.bindings, k)
        ));
      }
      return Z.prototype = this, new Z(this);
    }
    return x;
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
  }, i.stdSerializers = r, i.stdTimeFunctions = Object.assign({}, { nullTime: L, epochTime: _, unixTime: C, isoTime: v });
  function s(p, c, g, F) {
    const M = Object.getPrototypeOf(c);
    c[g] = c.levelVal > c.levels.values[g] ? A : M[g] ? M[g] : t[g] || t[F] || A, o(p, c, g);
  }
  function o(p, c, g) {
    !p.transmit && c[g] === A || (c[g] = function(F) {
      return function() {
        const U = p.timestamp(), $ = new Array(arguments.length), B = Object.getPrototypeOf && Object.getPrototypeOf(this) === t ? t : this;
        for (var x = 0; x < $.length; x++)
          $[x] = arguments[x];
        if (p.serialize && !p.asObject && u($, this._serialize, this.serializers, this._stdErrSerialize), p.asObject ? F.call(B, a(this, g, $, U)) : F.apply(B, $), p.transmit) {
          const R = p.transmit.level || c.level, G = i.levels.values[R], z = i.levels.values[g];
          if (z < G)
            return;
          f(this, {
            ts: U,
            methodLevel: g,
            methodValue: z,
            transmitLevel: R,
            transmitValue: i.levels.values[p.transmit.level || c.level],
            send: p.transmit.send,
            val: c.levelVal
          }, $);
        }
      };
    }(c[g]));
  }
  function a(p, c, g, F) {
    p._serialize && u(g, p._serialize, p.serializers, p._stdErrSerialize);
    const M = g.slice();
    let U = M[0];
    const $ = {};
    F && ($.time = F), $.level = i.levels.values[c];
    let B = (p._childLevel | 0) + 1;
    if (B < 1 && (B = 1), U !== null && typeof U == "object") {
      for (; B-- && typeof M[0] == "object"; )
        Object.assign($, M.shift());
      U = M.length ? e(M.shift(), M) : void 0;
    } else
      typeof U == "string" && (U = e(M.shift(), M));
    return U !== void 0 && ($.msg = U), $;
  }
  function u(p, c, g, F) {
    for (const M in p)
      if (F && p[M] instanceof Error)
        p[M] = i.stdSerializers.err(p[M]);
      else if (typeof p[M] == "object" && !Array.isArray(p[M]))
        for (const U in p[M])
          c && c.indexOf(U) > -1 && U in g && (p[M][U] = g[U](p[M][U]));
  }
  function h(p, c, g) {
    return function() {
      const F = new Array(1 + arguments.length);
      F[0] = c;
      for (var M = 1; M < F.length; M++)
        F[M] = arguments[M - 1];
      return p[g].apply(this, F);
    };
  }
  function f(p, c, g) {
    const F = c.send, M = c.ts, U = c.methodLevel, $ = c.methodValue, B = c.val, x = p._logEvent.bindings;
    u(
      g,
      p._serialize || Object.keys(p.serializers),
      p.serializers,
      p._stdErrSerialize === void 0 ? !0 : p._stdErrSerialize
    ), p._logEvent.ts = M, p._logEvent.messages = g.filter(function(R) {
      return x.indexOf(R) === -1;
    }), p._logEvent.level.label = U, p._logEvent.level.value = $, F(U, p._logEvent, B), p._logEvent = d(x);
  }
  function d(p) {
    return {
      ts: 0,
      messages: [],
      bindings: p || [],
      level: { label: "", value: 0 }
    };
  }
  function y(p) {
    const c = {
      type: p.constructor.name,
      msg: p.message,
      stack: p.stack
    };
    for (const g in p)
      c[g] === void 0 && (c[g] = p[g]);
    return c;
  }
  function m(p) {
    return typeof p.timestamp == "function" ? p.timestamp : p.timestamp === !1 ? L : _;
  }
  function w() {
    return {};
  }
  function O(p) {
    return p;
  }
  function A() {
  }
  function L() {
    return !1;
  }
  function _() {
    return Date.now();
  }
  function C() {
    return Math.round(Date.now() / 1e3);
  }
  function v() {
    return new Date(Date.now()).toISOString();
  }
  function S() {
    function p(c) {
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
      return p(self) || p(window) || p(this) || {};
    }
  }
  return as;
}
var kr = {}, za;
function Bu() {
  return za || (za = 1, Object.defineProperty(kr, "__esModule", { value: !0 }), kr.PINO_CUSTOM_CONTEXT_KEY = kr.PINO_LOGGER_DEFAULTS = void 0, kr.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, kr.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), kr;
}
var At = {}, Ka;
function Bd() {
  if (Ka)
    return At;
  Ka = 1, Object.defineProperty(At, "__esModule", { value: !0 }), At.generateChildLogger = At.formatChildLoggerContext = At.getLoggerContext = At.setBrowserLoggerContext = At.getBrowserLoggerContext = At.getDefaultLoggerOptions = void 0;
  const e = Bu();
  function t(a) {
    return Object.assign(Object.assign({}, a), { level: (a == null ? void 0 : a.level) || e.PINO_LOGGER_DEFAULTS.level });
  }
  At.getDefaultLoggerOptions = t;
  function r(a, u = e.PINO_CUSTOM_CONTEXT_KEY) {
    return a[u] || "";
  }
  At.getBrowserLoggerContext = r;
  function n(a, u, h = e.PINO_CUSTOM_CONTEXT_KEY) {
    return a[h] = u, a;
  }
  At.setBrowserLoggerContext = n;
  function i(a, u = e.PINO_CUSTOM_CONTEXT_KEY) {
    let h = "";
    return typeof a.bindings > "u" ? h = r(a, u) : h = a.bindings().context || "", h;
  }
  At.getLoggerContext = i;
  function s(a, u, h = e.PINO_CUSTOM_CONTEXT_KEY) {
    const f = i(a, h);
    return f.trim() ? `${f}/${u}` : u;
  }
  At.formatChildLoggerContext = s;
  function o(a, u, h = e.PINO_CUSTOM_CONTEXT_KEY) {
    const f = s(a, u, h), d = a.child({ context: f });
    return n(d, f, h);
  }
  return At.generateChildLogger = o, At;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.pino = void 0;
  const t = Xt, r = t.__importDefault(kd());
  Object.defineProperty(e, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), t.__exportStar(Bu(), e), t.__exportStar(Bd(), e);
})(Re);
let qd = class extends Gr {
  constructor(t) {
    super(), this.opts = t, this.protocol = "wc", this.version = 2;
  }
}, zd = class extends Gr {
  constructor(t, r) {
    super(), this.core = t, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}, Kd = class {
  constructor(t, r) {
    this.logger = t, this.core = r;
  }
}, Hd = class extends Gr {
  constructor(t, r) {
    super(), this.relayer = t, this.logger = r;
  }
}, Vd = class extends Gr {
  constructor(t) {
    super();
  }
}, Wd = class {
  constructor(t, r, n, i) {
    this.core = t, this.logger = r, this.name = n;
  }
}, Gd = class extends Gr {
  constructor(t, r) {
    super(), this.relayer = t, this.logger = r;
  }
}, Yd = class extends Gr {
  constructor(t, r) {
    super(), this.core = t, this.logger = r;
  }
}, Jd = class {
  constructor(t, r) {
    this.projectId = t, this.logger = r;
  }
}, Xd = class {
  constructor(t) {
    this.opts = t, this.protocol = "wc", this.version = 2;
  }
}, Qd = class {
  constructor(t) {
    this.client = t;
  }
};
const Zd = (e) => JSON.stringify(e, (t, r) => typeof r == "bigint" ? r.toString() + "n" : r), ep = (e) => {
  const t = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = e.replace(t, '$1"$2n"$3');
  return JSON.parse(r, (n, i) => typeof i == "string" && i.match(/^\d+n$/) ? BigInt(i.substring(0, i.length - 1)) : i);
};
function qu(e) {
  if (typeof e != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof e}`);
  try {
    return ep(e);
  } catch {
    return e;
  }
}
function ho(e) {
  return typeof e == "string" ? e : Zd(e) || "";
}
var po = {}, mn = {}, ji = {}, ki = {};
Object.defineProperty(ki, "__esModule", { value: !0 });
ki.BrowserRandomSource = void 0;
const Ha = 65536;
class tp {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const t = typeof self < "u" ? self.crypto || self.msCrypto : null;
    t && t.getRandomValues !== void 0 && (this._crypto = t, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(t) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const r = new Uint8Array(t);
    for (let n = 0; n < r.length; n += Ha)
      this._crypto.getRandomValues(r.subarray(n, n + Math.min(r.length - n, Ha)));
    return r;
  }
}
ki.BrowserRandomSource = tp;
function rp(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Bi = {}, qt = {};
Object.defineProperty(qt, "__esModule", { value: !0 });
function np(e) {
  for (var t = 0; t < e.length; t++)
    e[t] = 0;
  return e;
}
qt.wipe = np;
const ip = {}, sp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ip
}, Symbol.toStringTag, { value: "Module" })), op = /* @__PURE__ */ lo(sp);
Object.defineProperty(Bi, "__esModule", { value: !0 });
Bi.NodeRandomSource = void 0;
const ap = qt;
class cp {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof rp < "u") {
      const t = op;
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
    return (0, ap.wipe)(r), n;
  }
}
Bi.NodeRandomSource = cp;
Object.defineProperty(ji, "__esModule", { value: !0 });
ji.SystemRandomSource = void 0;
const up = ki, lp = Bi;
class fp {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new up.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new lp.NodeRandomSource(), this._source.isAvailable) {
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
ji.SystemRandomSource = fp;
var fe = {}, zu = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  function t(a, u) {
    var h = a >>> 16 & 65535, f = a & 65535, d = u >>> 16 & 65535, y = u & 65535;
    return f * y + (h * y + f * d << 16 >>> 0) | 0;
  }
  e.mul = Math.imul || t;
  function r(a, u) {
    return a + u | 0;
  }
  e.add = r;
  function n(a, u) {
    return a - u | 0;
  }
  e.sub = n;
  function i(a, u) {
    return a << u | a >>> 32 - u;
  }
  e.rotl = i;
  function s(a, u) {
    return a << 32 - u | a >>> u;
  }
  e.rotr = s;
  function o(a) {
    return typeof a == "number" && isFinite(a) && Math.floor(a) === a;
  }
  e.isInteger = Number.isInteger || o, e.MAX_SAFE_INTEGER = 9007199254740991, e.isSafeInteger = function(a) {
    return e.isInteger(a) && a >= -e.MAX_SAFE_INTEGER && a <= e.MAX_SAFE_INTEGER;
  };
})(zu);
Object.defineProperty(fe, "__esModule", { value: !0 });
var Ku = zu;
function hp(e, t) {
  return t === void 0 && (t = 0), (e[t + 0] << 8 | e[t + 1]) << 16 >> 16;
}
fe.readInt16BE = hp;
function dp(e, t) {
  return t === void 0 && (t = 0), (e[t + 0] << 8 | e[t + 1]) >>> 0;
}
fe.readUint16BE = dp;
function pp(e, t) {
  return t === void 0 && (t = 0), (e[t + 1] << 8 | e[t]) << 16 >> 16;
}
fe.readInt16LE = pp;
function gp(e, t) {
  return t === void 0 && (t = 0), (e[t + 1] << 8 | e[t]) >>> 0;
}
fe.readUint16LE = gp;
function Hu(e, t, r) {
  return t === void 0 && (t = new Uint8Array(2)), r === void 0 && (r = 0), t[r + 0] = e >>> 8, t[r + 1] = e >>> 0, t;
}
fe.writeUint16BE = Hu;
fe.writeInt16BE = Hu;
function Vu(e, t, r) {
  return t === void 0 && (t = new Uint8Array(2)), r === void 0 && (r = 0), t[r + 0] = e >>> 0, t[r + 1] = e >>> 8, t;
}
fe.writeUint16LE = Vu;
fe.writeInt16LE = Vu;
function Ms(e, t) {
  return t === void 0 && (t = 0), e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
}
fe.readInt32BE = Ms;
function Us(e, t) {
  return t === void 0 && (t = 0), (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0;
}
fe.readUint32BE = Us;
function $s(e, t) {
  return t === void 0 && (t = 0), e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t];
}
fe.readInt32LE = $s;
function js(e, t) {
  return t === void 0 && (t = 0), (e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]) >>> 0;
}
fe.readUint32LE = js;
function bi(e, t, r) {
  return t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0), t[r + 0] = e >>> 24, t[r + 1] = e >>> 16, t[r + 2] = e >>> 8, t[r + 3] = e >>> 0, t;
}
fe.writeUint32BE = bi;
fe.writeInt32BE = bi;
function _i(e, t, r) {
  return t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0), t[r + 0] = e >>> 0, t[r + 1] = e >>> 8, t[r + 2] = e >>> 16, t[r + 3] = e >>> 24, t;
}
fe.writeUint32LE = _i;
fe.writeInt32LE = _i;
function yp(e, t) {
  t === void 0 && (t = 0);
  var r = Ms(e, t), n = Ms(e, t + 4);
  return r * 4294967296 + n - (n >> 31) * 4294967296;
}
fe.readInt64BE = yp;
function mp(e, t) {
  t === void 0 && (t = 0);
  var r = Us(e, t), n = Us(e, t + 4);
  return r * 4294967296 + n;
}
fe.readUint64BE = mp;
function vp(e, t) {
  t === void 0 && (t = 0);
  var r = $s(e, t), n = $s(e, t + 4);
  return n * 4294967296 + r - (r >> 31) * 4294967296;
}
fe.readInt64LE = vp;
function bp(e, t) {
  t === void 0 && (t = 0);
  var r = js(e, t), n = js(e, t + 4);
  return n * 4294967296 + r;
}
fe.readUint64LE = bp;
function Wu(e, t, r) {
  return t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0), bi(e / 4294967296 >>> 0, t, r), bi(e >>> 0, t, r + 4), t;
}
fe.writeUint64BE = Wu;
fe.writeInt64BE = Wu;
function Gu(e, t, r) {
  return t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0), _i(e >>> 0, t, r), _i(e / 4294967296 >>> 0, t, r + 4), t;
}
fe.writeUint64LE = Gu;
fe.writeInt64LE = Gu;
function _p(e, t, r) {
  if (r === void 0 && (r = 0), e % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (e / 8 > t.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var n = 0, i = 1, s = e / 8 + r - 1; s >= r; s--)
    n += t[s] * i, i *= 256;
  return n;
}
fe.readUintBE = _p;
function wp(e, t, r) {
  if (r === void 0 && (r = 0), e % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (e / 8 > t.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var n = 0, i = 1, s = r; s < r + e / 8; s++)
    n += t[s] * i, i *= 256;
  return n;
}
fe.readUintLE = wp;
function Ep(e, t, r, n) {
  if (r === void 0 && (r = new Uint8Array(e / 8)), n === void 0 && (n = 0), e % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!Ku.isSafeInteger(t))
    throw new Error("writeUintBE value must be an integer");
  for (var i = 1, s = e / 8 + n - 1; s >= n; s--)
    r[s] = t / i & 255, i *= 256;
  return r;
}
fe.writeUintBE = Ep;
function Sp(e, t, r, n) {
  if (r === void 0 && (r = new Uint8Array(e / 8)), n === void 0 && (n = 0), e % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!Ku.isSafeInteger(t))
    throw new Error("writeUintLE value must be an integer");
  for (var i = 1, s = n; s < n + e / 8; s++)
    r[s] = t / i & 255, i *= 256;
  return r;
}
fe.writeUintLE = Sp;
function xp(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat32(t);
}
fe.readFloat32BE = xp;
function Dp(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat32(t, !0);
}
fe.readFloat32LE = Dp;
function Op(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat64(t);
}
fe.readFloat64BE = Op;
function Cp(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat64(t, !0);
}
fe.readFloat64LE = Cp;
function Ap(e, t, r) {
  t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return n.setFloat32(r, e), t;
}
fe.writeFloat32BE = Ap;
function Ip(e, t, r) {
  t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return n.setFloat32(r, e, !0), t;
}
fe.writeFloat32LE = Ip;
function Tp(e, t, r) {
  t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return n.setFloat64(r, e), t;
}
fe.writeFloat64BE = Tp;
function Rp(e, t, r) {
  t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return n.setFloat64(r, e, !0), t;
}
fe.writeFloat64LE = Rp;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.randomStringForEntropy = e.randomString = e.randomUint32 = e.randomBytes = e.defaultRandomSource = void 0;
  const t = ji, r = fe, n = qt;
  e.defaultRandomSource = new t.SystemRandomSource();
  function i(h, f = e.defaultRandomSource) {
    return f.randomBytes(h);
  }
  e.randomBytes = i;
  function s(h = e.defaultRandomSource) {
    const f = i(4, h), d = (0, r.readUint32LE)(f);
    return (0, n.wipe)(f), d;
  }
  e.randomUint32 = s;
  const o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function a(h, f = o, d = e.defaultRandomSource) {
    if (f.length < 2)
      throw new Error("randomString charset is too short");
    if (f.length > 256)
      throw new Error("randomString charset is too long");
    let y = "";
    const m = f.length, w = 256 - 256 % m;
    for (; h > 0; ) {
      const O = i(Math.ceil(h * 256 / w), d);
      for (let A = 0; A < O.length && h > 0; A++) {
        const L = O[A];
        L < w && (y += f.charAt(L % m), h--);
      }
      (0, n.wipe)(O);
    }
    return y;
  }
  e.randomString = a;
  function u(h, f = o, d = e.defaultRandomSource) {
    const y = Math.ceil(h / (Math.log(f.length) / Math.LN2));
    return a(y, f, d);
  }
  e.randomStringForEntropy = u;
})(mn);
var Yu = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = fe, r = qt;
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
      }, a.prototype.update = function(u, h) {
        if (h === void 0 && (h = u.length), this._finished)
          throw new Error("SHA512: can't update because hash was finished.");
        var f = 0;
        if (this._bytesHashed += h, this._bufferLength > 0) {
          for (; this._bufferLength < e.BLOCK_SIZE && h > 0; )
            this._buffer[this._bufferLength++] = u[f++], h--;
          this._bufferLength === this.blockSize && (s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (h >= this.blockSize && (f = s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, u, f, h), h %= this.blockSize); h > 0; )
          this._buffer[this._bufferLength++] = u[f++], h--;
        return this;
      }, a.prototype.finish = function(u) {
        if (!this._finished) {
          var h = this._bytesHashed, f = this._bufferLength, d = h / 536870912 | 0, y = h << 3, m = h % 128 < 112 ? 128 : 256;
          this._buffer[f] = 128;
          for (var w = f + 1; w < m - 8; w++)
            this._buffer[w] = 0;
          t.writeUint32BE(d, this._buffer, m - 8), t.writeUint32BE(y, this._buffer, m - 4), s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, m), this._finished = !0;
        }
        for (var w = 0; w < this.digestLength / 8; w++)
          t.writeUint32BE(this._stateHi[w], u, w * 8), t.writeUint32BE(this._stateLo[w], u, w * 8 + 4);
        return this;
      }, a.prototype.digest = function() {
        var u = new Uint8Array(this.digestLength);
        return this.finish(u), u;
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
      }, a.prototype.restoreState = function(u) {
        return this._stateHi.set(u.stateHi), this._stateLo.set(u.stateLo), this._bufferLength = u.bufferLength, u.buffer && this._buffer.set(u.buffer), this._bytesHashed = u.bytesHashed, this._finished = !1, this;
      }, a.prototype.cleanSavedState = function(u) {
        r.wipe(u.stateHi), r.wipe(u.stateLo), u.buffer && r.wipe(u.buffer), u.bufferLength = 0, u.bytesHashed = 0;
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
  function s(a, u, h, f, d, y, m) {
    for (var w = h[0], O = h[1], A = h[2], L = h[3], _ = h[4], C = h[5], v = h[6], S = h[7], p = f[0], c = f[1], g = f[2], F = f[3], M = f[4], U = f[5], $ = f[6], B = f[7], x, R, G, z, q, H, k, V; m >= 128; ) {
      for (var ae = 0; ae < 16; ae++) {
        var W = 8 * ae + y;
        a[ae] = t.readUint32BE(d, W), u[ae] = t.readUint32BE(d, W + 4);
      }
      for (var ae = 0; ae < 80; ae++) {
        var ie = w, Z = O, ne = A, P = L, N = _, I = C, l = v, D = S, Y = p, Q = c, ve = g, be = F, de = M, Ce = U, Be = $, Le = B;
        if (x = S, R = B, q = R & 65535, H = R >>> 16, k = x & 65535, V = x >>> 16, x = (_ >>> 14 | M << 32 - 14) ^ (_ >>> 18 | M << 32 - 18) ^ (M >>> 41 - 32 | _ << 32 - (41 - 32)), R = (M >>> 14 | _ << 32 - 14) ^ (M >>> 18 | _ << 32 - 18) ^ (_ >>> 41 - 32 | M << 32 - (41 - 32)), q += R & 65535, H += R >>> 16, k += x & 65535, V += x >>> 16, x = _ & C ^ ~_ & v, R = M & U ^ ~M & $, q += R & 65535, H += R >>> 16, k += x & 65535, V += x >>> 16, x = i[ae * 2], R = i[ae * 2 + 1], q += R & 65535, H += R >>> 16, k += x & 65535, V += x >>> 16, x = a[ae % 16], R = u[ae % 16], q += R & 65535, H += R >>> 16, k += x & 65535, V += x >>> 16, H += q >>> 16, k += H >>> 16, V += k >>> 16, G = k & 65535 | V << 16, z = q & 65535 | H << 16, x = G, R = z, q = R & 65535, H = R >>> 16, k = x & 65535, V = x >>> 16, x = (w >>> 28 | p << 32 - 28) ^ (p >>> 34 - 32 | w << 32 - (34 - 32)) ^ (p >>> 39 - 32 | w << 32 - (39 - 32)), R = (p >>> 28 | w << 32 - 28) ^ (w >>> 34 - 32 | p << 32 - (34 - 32)) ^ (w >>> 39 - 32 | p << 32 - (39 - 32)), q += R & 65535, H += R >>> 16, k += x & 65535, V += x >>> 16, x = w & O ^ w & A ^ O & A, R = p & c ^ p & g ^ c & g, q += R & 65535, H += R >>> 16, k += x & 65535, V += x >>> 16, H += q >>> 16, k += H >>> 16, V += k >>> 16, D = k & 65535 | V << 16, Le = q & 65535 | H << 16, x = P, R = be, q = R & 65535, H = R >>> 16, k = x & 65535, V = x >>> 16, x = G, R = z, q += R & 65535, H += R >>> 16, k += x & 65535, V += x >>> 16, H += q >>> 16, k += H >>> 16, V += k >>> 16, P = k & 65535 | V << 16, be = q & 65535 | H << 16, O = ie, A = Z, L = ne, _ = P, C = N, v = I, S = l, w = D, c = Y, g = Q, F = ve, M = be, U = de, $ = Ce, B = Be, p = Le, ae % 16 === 15)
          for (var W = 0; W < 16; W++)
            x = a[W], R = u[W], q = R & 65535, H = R >>> 16, k = x & 65535, V = x >>> 16, x = a[(W + 9) % 16], R = u[(W + 9) % 16], q += R & 65535, H += R >>> 16, k += x & 65535, V += x >>> 16, G = a[(W + 1) % 16], z = u[(W + 1) % 16], x = (G >>> 1 | z << 32 - 1) ^ (G >>> 8 | z << 32 - 8) ^ G >>> 7, R = (z >>> 1 | G << 32 - 1) ^ (z >>> 8 | G << 32 - 8) ^ (z >>> 7 | G << 32 - 7), q += R & 65535, H += R >>> 16, k += x & 65535, V += x >>> 16, G = a[(W + 14) % 16], z = u[(W + 14) % 16], x = (G >>> 19 | z << 32 - 19) ^ (z >>> 61 - 32 | G << 32 - (61 - 32)) ^ G >>> 6, R = (z >>> 19 | G << 32 - 19) ^ (G >>> 61 - 32 | z << 32 - (61 - 32)) ^ (z >>> 6 | G << 32 - 6), q += R & 65535, H += R >>> 16, k += x & 65535, V += x >>> 16, H += q >>> 16, k += H >>> 16, V += k >>> 16, a[W] = k & 65535 | V << 16, u[W] = q & 65535 | H << 16;
      }
      x = w, R = p, q = R & 65535, H = R >>> 16, k = x & 65535, V = x >>> 16, x = h[0], R = f[0], q += R & 65535, H += R >>> 16, k += x & 65535, V += x >>> 16, H += q >>> 16, k += H >>> 16, V += k >>> 16, h[0] = w = k & 65535 | V << 16, f[0] = p = q & 65535 | H << 16, x = O, R = c, q = R & 65535, H = R >>> 16, k = x & 65535, V = x >>> 16, x = h[1], R = f[1], q += R & 65535, H += R >>> 16, k += x & 65535, V += x >>> 16, H += q >>> 16, k += H >>> 16, V += k >>> 16, h[1] = O = k & 65535 | V << 16, f[1] = c = q & 65535 | H << 16, x = A, R = g, q = R & 65535, H = R >>> 16, k = x & 65535, V = x >>> 16, x = h[2], R = f[2], q += R & 65535, H += R >>> 16, k += x & 65535, V += x >>> 16, H += q >>> 16, k += H >>> 16, V += k >>> 16, h[2] = A = k & 65535 | V << 16, f[2] = g = q & 65535 | H << 16, x = L, R = F, q = R & 65535, H = R >>> 16, k = x & 65535, V = x >>> 16, x = h[3], R = f[3], q += R & 65535, H += R >>> 16, k += x & 65535, V += x >>> 16, H += q >>> 16, k += H >>> 16, V += k >>> 16, h[3] = L = k & 65535 | V << 16, f[3] = F = q & 65535 | H << 16, x = _, R = M, q = R & 65535, H = R >>> 16, k = x & 65535, V = x >>> 16, x = h[4], R = f[4], q += R & 65535, H += R >>> 16, k += x & 65535, V += x >>> 16, H += q >>> 16, k += H >>> 16, V += k >>> 16, h[4] = _ = k & 65535 | V << 16, f[4] = M = q & 65535 | H << 16, x = C, R = U, q = R & 65535, H = R >>> 16, k = x & 65535, V = x >>> 16, x = h[5], R = f[5], q += R & 65535, H += R >>> 16, k += x & 65535, V += x >>> 16, H += q >>> 16, k += H >>> 16, V += k >>> 16, h[5] = C = k & 65535 | V << 16, f[5] = U = q & 65535 | H << 16, x = v, R = $, q = R & 65535, H = R >>> 16, k = x & 65535, V = x >>> 16, x = h[6], R = f[6], q += R & 65535, H += R >>> 16, k += x & 65535, V += x >>> 16, H += q >>> 16, k += H >>> 16, V += k >>> 16, h[6] = v = k & 65535 | V << 16, f[6] = $ = q & 65535 | H << 16, x = S, R = B, q = R & 65535, H = R >>> 16, k = x & 65535, V = x >>> 16, x = h[7], R = f[7], q += R & 65535, H += R >>> 16, k += x & 65535, V += x >>> 16, H += q >>> 16, k += H >>> 16, V += k >>> 16, h[7] = S = k & 65535 | V << 16, f[7] = B = q & 65535 | H << 16, y += 128, m -= 128;
    }
    return y;
  }
  function o(a) {
    var u = new n();
    u.update(a);
    var h = u.digest();
    return u.clean(), h;
  }
  e.hash = o;
})(Yu);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.convertSecretKeyToX25519 = e.convertPublicKeyToX25519 = e.verify = e.sign = e.extractPublicKeyFromSecretKey = e.generateKeyPair = e.generateKeyPairFromSeed = e.SEED_LENGTH = e.SECRET_KEY_LENGTH = e.PUBLIC_KEY_LENGTH = e.SIGNATURE_LENGTH = void 0;
  const t = mn, r = Yu, n = qt;
  e.SIGNATURE_LENGTH = 64, e.PUBLIC_KEY_LENGTH = 32, e.SECRET_KEY_LENGTH = 64, e.SEED_LENGTH = 32;
  function i(P) {
    const N = new Float64Array(16);
    if (P)
      for (let I = 0; I < P.length; I++)
        N[I] = P[I];
    return N;
  }
  const s = new Uint8Array(32);
  s[0] = 9;
  const o = i(), a = i([1]), u = i([
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
  ]), h = i([
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
  ]), f = i([
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
  ]), d = i([
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
  ]), y = i([
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
  function m(P, N) {
    for (let I = 0; I < 16; I++)
      P[I] = N[I] | 0;
  }
  function w(P) {
    let N = 1;
    for (let I = 0; I < 16; I++) {
      let l = P[I] + N + 65535;
      N = Math.floor(l / 65536), P[I] = l - N * 65536;
    }
    P[0] += N - 1 + 37 * (N - 1);
  }
  function O(P, N, I) {
    const l = ~(I - 1);
    for (let D = 0; D < 16; D++) {
      const Y = l & (P[D] ^ N[D]);
      P[D] ^= Y, N[D] ^= Y;
    }
  }
  function A(P, N) {
    const I = i(), l = i();
    for (let D = 0; D < 16; D++)
      l[D] = N[D];
    w(l), w(l), w(l);
    for (let D = 0; D < 2; D++) {
      I[0] = l[0] - 65517;
      for (let Q = 1; Q < 15; Q++)
        I[Q] = l[Q] - 65535 - (I[Q - 1] >> 16 & 1), I[Q - 1] &= 65535;
      I[15] = l[15] - 32767 - (I[14] >> 16 & 1);
      const Y = I[15] >> 16 & 1;
      I[14] &= 65535, O(l, I, 1 - Y);
    }
    for (let D = 0; D < 16; D++)
      P[2 * D] = l[D] & 255, P[2 * D + 1] = l[D] >> 8;
  }
  function L(P, N) {
    let I = 0;
    for (let l = 0; l < 32; l++)
      I |= P[l] ^ N[l];
    return (1 & I - 1 >>> 8) - 1;
  }
  function _(P, N) {
    const I = new Uint8Array(32), l = new Uint8Array(32);
    return A(I, P), A(l, N), L(I, l);
  }
  function C(P) {
    const N = new Uint8Array(32);
    return A(N, P), N[0] & 1;
  }
  function v(P, N) {
    for (let I = 0; I < 16; I++)
      P[I] = N[2 * I] + (N[2 * I + 1] << 8);
    P[15] &= 32767;
  }
  function S(P, N, I) {
    for (let l = 0; l < 16; l++)
      P[l] = N[l] + I[l];
  }
  function p(P, N, I) {
    for (let l = 0; l < 16; l++)
      P[l] = N[l] - I[l];
  }
  function c(P, N, I) {
    let l, D, Y = 0, Q = 0, ve = 0, be = 0, de = 0, Ce = 0, Be = 0, Le = 0, De = 0, Ee = 0, pe = 0, ye = 0, ge = 0, le = 0, ue = 0, se = 0, me = 0, _e = 0, ce = 0, Se = 0, Ae = 0, Ne = 0, Pe = 0, Ie = 0, Ut = 0, zt = 0, ir = 0, pt = 0, sr = 0, Kt = 0, _r = 0, qe = I[0], $e = I[1], We = I[2], Ke = I[3], Ge = I[4], je = I[5], Ze = I[6], rt = I[7], nt = I[8], et = I[9], it = I[10], tt = I[11], Ye = I[12], Me = I[13], E = I[14], j = I[15];
    l = N[0], Y += l * qe, Q += l * $e, ve += l * We, be += l * Ke, de += l * Ge, Ce += l * je, Be += l * Ze, Le += l * rt, De += l * nt, Ee += l * et, pe += l * it, ye += l * tt, ge += l * Ye, le += l * Me, ue += l * E, se += l * j, l = N[1], Q += l * qe, ve += l * $e, be += l * We, de += l * Ke, Ce += l * Ge, Be += l * je, Le += l * Ze, De += l * rt, Ee += l * nt, pe += l * et, ye += l * it, ge += l * tt, le += l * Ye, ue += l * Me, se += l * E, me += l * j, l = N[2], ve += l * qe, be += l * $e, de += l * We, Ce += l * Ke, Be += l * Ge, Le += l * je, De += l * Ze, Ee += l * rt, pe += l * nt, ye += l * et, ge += l * it, le += l * tt, ue += l * Ye, se += l * Me, me += l * E, _e += l * j, l = N[3], be += l * qe, de += l * $e, Ce += l * We, Be += l * Ke, Le += l * Ge, De += l * je, Ee += l * Ze, pe += l * rt, ye += l * nt, ge += l * et, le += l * it, ue += l * tt, se += l * Ye, me += l * Me, _e += l * E, ce += l * j, l = N[4], de += l * qe, Ce += l * $e, Be += l * We, Le += l * Ke, De += l * Ge, Ee += l * je, pe += l * Ze, ye += l * rt, ge += l * nt, le += l * et, ue += l * it, se += l * tt, me += l * Ye, _e += l * Me, ce += l * E, Se += l * j, l = N[5], Ce += l * qe, Be += l * $e, Le += l * We, De += l * Ke, Ee += l * Ge, pe += l * je, ye += l * Ze, ge += l * rt, le += l * nt, ue += l * et, se += l * it, me += l * tt, _e += l * Ye, ce += l * Me, Se += l * E, Ae += l * j, l = N[6], Be += l * qe, Le += l * $e, De += l * We, Ee += l * Ke, pe += l * Ge, ye += l * je, ge += l * Ze, le += l * rt, ue += l * nt, se += l * et, me += l * it, _e += l * tt, ce += l * Ye, Se += l * Me, Ae += l * E, Ne += l * j, l = N[7], Le += l * qe, De += l * $e, Ee += l * We, pe += l * Ke, ye += l * Ge, ge += l * je, le += l * Ze, ue += l * rt, se += l * nt, me += l * et, _e += l * it, ce += l * tt, Se += l * Ye, Ae += l * Me, Ne += l * E, Pe += l * j, l = N[8], De += l * qe, Ee += l * $e, pe += l * We, ye += l * Ke, ge += l * Ge, le += l * je, ue += l * Ze, se += l * rt, me += l * nt, _e += l * et, ce += l * it, Se += l * tt, Ae += l * Ye, Ne += l * Me, Pe += l * E, Ie += l * j, l = N[9], Ee += l * qe, pe += l * $e, ye += l * We, ge += l * Ke, le += l * Ge, ue += l * je, se += l * Ze, me += l * rt, _e += l * nt, ce += l * et, Se += l * it, Ae += l * tt, Ne += l * Ye, Pe += l * Me, Ie += l * E, Ut += l * j, l = N[10], pe += l * qe, ye += l * $e, ge += l * We, le += l * Ke, ue += l * Ge, se += l * je, me += l * Ze, _e += l * rt, ce += l * nt, Se += l * et, Ae += l * it, Ne += l * tt, Pe += l * Ye, Ie += l * Me, Ut += l * E, zt += l * j, l = N[11], ye += l * qe, ge += l * $e, le += l * We, ue += l * Ke, se += l * Ge, me += l * je, _e += l * Ze, ce += l * rt, Se += l * nt, Ae += l * et, Ne += l * it, Pe += l * tt, Ie += l * Ye, Ut += l * Me, zt += l * E, ir += l * j, l = N[12], ge += l * qe, le += l * $e, ue += l * We, se += l * Ke, me += l * Ge, _e += l * je, ce += l * Ze, Se += l * rt, Ae += l * nt, Ne += l * et, Pe += l * it, Ie += l * tt, Ut += l * Ye, zt += l * Me, ir += l * E, pt += l * j, l = N[13], le += l * qe, ue += l * $e, se += l * We, me += l * Ke, _e += l * Ge, ce += l * je, Se += l * Ze, Ae += l * rt, Ne += l * nt, Pe += l * et, Ie += l * it, Ut += l * tt, zt += l * Ye, ir += l * Me, pt += l * E, sr += l * j, l = N[14], ue += l * qe, se += l * $e, me += l * We, _e += l * Ke, ce += l * Ge, Se += l * je, Ae += l * Ze, Ne += l * rt, Pe += l * nt, Ie += l * et, Ut += l * it, zt += l * tt, ir += l * Ye, pt += l * Me, sr += l * E, Kt += l * j, l = N[15], se += l * qe, me += l * $e, _e += l * We, ce += l * Ke, Se += l * Ge, Ae += l * je, Ne += l * Ze, Pe += l * rt, Ie += l * nt, Ut += l * et, zt += l * it, ir += l * tt, pt += l * Ye, sr += l * Me, Kt += l * E, _r += l * j, Y += 38 * me, Q += 38 * _e, ve += 38 * ce, be += 38 * Se, de += 38 * Ae, Ce += 38 * Ne, Be += 38 * Pe, Le += 38 * Ie, De += 38 * Ut, Ee += 38 * zt, pe += 38 * ir, ye += 38 * pt, ge += 38 * sr, le += 38 * Kt, ue += 38 * _r, D = 1, l = Y + D + 65535, D = Math.floor(l / 65536), Y = l - D * 65536, l = Q + D + 65535, D = Math.floor(l / 65536), Q = l - D * 65536, l = ve + D + 65535, D = Math.floor(l / 65536), ve = l - D * 65536, l = be + D + 65535, D = Math.floor(l / 65536), be = l - D * 65536, l = de + D + 65535, D = Math.floor(l / 65536), de = l - D * 65536, l = Ce + D + 65535, D = Math.floor(l / 65536), Ce = l - D * 65536, l = Be + D + 65535, D = Math.floor(l / 65536), Be = l - D * 65536, l = Le + D + 65535, D = Math.floor(l / 65536), Le = l - D * 65536, l = De + D + 65535, D = Math.floor(l / 65536), De = l - D * 65536, l = Ee + D + 65535, D = Math.floor(l / 65536), Ee = l - D * 65536, l = pe + D + 65535, D = Math.floor(l / 65536), pe = l - D * 65536, l = ye + D + 65535, D = Math.floor(l / 65536), ye = l - D * 65536, l = ge + D + 65535, D = Math.floor(l / 65536), ge = l - D * 65536, l = le + D + 65535, D = Math.floor(l / 65536), le = l - D * 65536, l = ue + D + 65535, D = Math.floor(l / 65536), ue = l - D * 65536, l = se + D + 65535, D = Math.floor(l / 65536), se = l - D * 65536, Y += D - 1 + 37 * (D - 1), D = 1, l = Y + D + 65535, D = Math.floor(l / 65536), Y = l - D * 65536, l = Q + D + 65535, D = Math.floor(l / 65536), Q = l - D * 65536, l = ve + D + 65535, D = Math.floor(l / 65536), ve = l - D * 65536, l = be + D + 65535, D = Math.floor(l / 65536), be = l - D * 65536, l = de + D + 65535, D = Math.floor(l / 65536), de = l - D * 65536, l = Ce + D + 65535, D = Math.floor(l / 65536), Ce = l - D * 65536, l = Be + D + 65535, D = Math.floor(l / 65536), Be = l - D * 65536, l = Le + D + 65535, D = Math.floor(l / 65536), Le = l - D * 65536, l = De + D + 65535, D = Math.floor(l / 65536), De = l - D * 65536, l = Ee + D + 65535, D = Math.floor(l / 65536), Ee = l - D * 65536, l = pe + D + 65535, D = Math.floor(l / 65536), pe = l - D * 65536, l = ye + D + 65535, D = Math.floor(l / 65536), ye = l - D * 65536, l = ge + D + 65535, D = Math.floor(l / 65536), ge = l - D * 65536, l = le + D + 65535, D = Math.floor(l / 65536), le = l - D * 65536, l = ue + D + 65535, D = Math.floor(l / 65536), ue = l - D * 65536, l = se + D + 65535, D = Math.floor(l / 65536), se = l - D * 65536, Y += D - 1 + 37 * (D - 1), P[0] = Y, P[1] = Q, P[2] = ve, P[3] = be, P[4] = de, P[5] = Ce, P[6] = Be, P[7] = Le, P[8] = De, P[9] = Ee, P[10] = pe, P[11] = ye, P[12] = ge, P[13] = le, P[14] = ue, P[15] = se;
  }
  function g(P, N) {
    c(P, N, N);
  }
  function F(P, N) {
    const I = i();
    let l;
    for (l = 0; l < 16; l++)
      I[l] = N[l];
    for (l = 253; l >= 0; l--)
      g(I, I), l !== 2 && l !== 4 && c(I, I, N);
    for (l = 0; l < 16; l++)
      P[l] = I[l];
  }
  function M(P, N) {
    const I = i();
    let l;
    for (l = 0; l < 16; l++)
      I[l] = N[l];
    for (l = 250; l >= 0; l--)
      g(I, I), l !== 1 && c(I, I, N);
    for (l = 0; l < 16; l++)
      P[l] = I[l];
  }
  function U(P, N) {
    const I = i(), l = i(), D = i(), Y = i(), Q = i(), ve = i(), be = i(), de = i(), Ce = i();
    p(I, P[1], P[0]), p(Ce, N[1], N[0]), c(I, I, Ce), S(l, P[0], P[1]), S(Ce, N[0], N[1]), c(l, l, Ce), c(D, P[3], N[3]), c(D, D, h), c(Y, P[2], N[2]), S(Y, Y, Y), p(Q, l, I), p(ve, Y, D), S(be, Y, D), S(de, l, I), c(P[0], Q, ve), c(P[1], de, be), c(P[2], be, ve), c(P[3], Q, de);
  }
  function $(P, N, I) {
    for (let l = 0; l < 4; l++)
      O(P[l], N[l], I);
  }
  function B(P, N) {
    const I = i(), l = i(), D = i();
    F(D, N[2]), c(I, N[0], D), c(l, N[1], D), A(P, l), P[31] ^= C(I) << 7;
  }
  function x(P, N, I) {
    m(P[0], o), m(P[1], a), m(P[2], a), m(P[3], o);
    for (let l = 255; l >= 0; --l) {
      const D = I[l / 8 | 0] >> (l & 7) & 1;
      $(P, N, D), U(N, P), U(P, P), $(P, N, D);
    }
  }
  function R(P, N) {
    const I = [i(), i(), i(), i()];
    m(I[0], f), m(I[1], d), m(I[2], a), c(I[3], f, d), x(P, I, N);
  }
  function G(P) {
    if (P.length !== e.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${e.SEED_LENGTH} bytes`);
    const N = (0, r.hash)(P);
    N[0] &= 248, N[31] &= 127, N[31] |= 64;
    const I = new Uint8Array(32), l = [i(), i(), i(), i()];
    R(l, N), B(I, l);
    const D = new Uint8Array(64);
    return D.set(P), D.set(I, 32), {
      publicKey: I,
      secretKey: D
    };
  }
  e.generateKeyPairFromSeed = G;
  function z(P) {
    const N = (0, t.randomBytes)(32, P), I = G(N);
    return (0, n.wipe)(N), I;
  }
  e.generateKeyPair = z;
  function q(P) {
    if (P.length !== e.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${e.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(P.subarray(32));
  }
  e.extractPublicKeyFromSecretKey = q;
  const H = new Float64Array([
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
  function k(P, N) {
    let I, l, D, Y;
    for (l = 63; l >= 32; --l) {
      for (I = 0, D = l - 32, Y = l - 12; D < Y; ++D)
        N[D] += I - 16 * N[l] * H[D - (l - 32)], I = Math.floor((N[D] + 128) / 256), N[D] -= I * 256;
      N[D] += I, N[l] = 0;
    }
    for (I = 0, D = 0; D < 32; D++)
      N[D] += I - (N[31] >> 4) * H[D], I = N[D] >> 8, N[D] &= 255;
    for (D = 0; D < 32; D++)
      N[D] -= I * H[D];
    for (l = 0; l < 32; l++)
      N[l + 1] += N[l] >> 8, P[l] = N[l] & 255;
  }
  function V(P) {
    const N = new Float64Array(64);
    for (let I = 0; I < 64; I++)
      N[I] = P[I];
    for (let I = 0; I < 64; I++)
      P[I] = 0;
    k(P, N);
  }
  function ae(P, N) {
    const I = new Float64Array(64), l = [i(), i(), i(), i()], D = (0, r.hash)(P.subarray(0, 32));
    D[0] &= 248, D[31] &= 127, D[31] |= 64;
    const Y = new Uint8Array(64);
    Y.set(D.subarray(32), 32);
    const Q = new r.SHA512();
    Q.update(Y.subarray(32)), Q.update(N);
    const ve = Q.digest();
    Q.clean(), V(ve), R(l, ve), B(Y, l), Q.reset(), Q.update(Y.subarray(0, 32)), Q.update(P.subarray(32)), Q.update(N);
    const be = Q.digest();
    V(be);
    for (let de = 0; de < 32; de++)
      I[de] = ve[de];
    for (let de = 0; de < 32; de++)
      for (let Ce = 0; Ce < 32; Ce++)
        I[de + Ce] += be[de] * D[Ce];
    return k(Y.subarray(32), I), Y;
  }
  e.sign = ae;
  function W(P, N) {
    const I = i(), l = i(), D = i(), Y = i(), Q = i(), ve = i(), be = i();
    return m(P[2], a), v(P[1], N), g(D, P[1]), c(Y, D, u), p(D, D, P[2]), S(Y, P[2], Y), g(Q, Y), g(ve, Q), c(be, ve, Q), c(I, be, D), c(I, I, Y), M(I, I), c(I, I, D), c(I, I, Y), c(I, I, Y), c(P[0], I, Y), g(l, P[0]), c(l, l, Y), _(l, D) && c(P[0], P[0], y), g(l, P[0]), c(l, l, Y), _(l, D) ? -1 : (C(P[0]) === N[31] >> 7 && p(P[0], o, P[0]), c(P[3], P[0], P[1]), 0);
  }
  function ie(P, N, I) {
    const l = new Uint8Array(32), D = [i(), i(), i(), i()], Y = [i(), i(), i(), i()];
    if (I.length !== e.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${e.SIGNATURE_LENGTH} bytes`);
    if (W(Y, P))
      return !1;
    const Q = new r.SHA512();
    Q.update(I.subarray(0, 32)), Q.update(P), Q.update(N);
    const ve = Q.digest();
    return V(ve), x(D, Y, ve), R(Y, I.subarray(32)), U(D, Y), B(l, D), !L(I, l);
  }
  e.verify = ie;
  function Z(P) {
    let N = [i(), i(), i(), i()];
    if (W(N, P))
      throw new Error("Ed25519: invalid public key");
    let I = i(), l = i(), D = N[1];
    S(I, a, D), p(l, a, D), F(l, l), c(I, I, l);
    let Y = new Uint8Array(32);
    return A(Y, I), Y;
  }
  e.convertPublicKeyToX25519 = Z;
  function ne(P) {
    const N = (0, r.hash)(P.subarray(0, 32));
    N[0] &= 248, N[31] &= 127, N[31] |= 64;
    const I = new Uint8Array(N.subarray(0, 32));
    return (0, n.wipe)(N), I;
  }
  e.convertSecretKeyToX25519 = ne;
})(po);
const Np = "EdDSA", Pp = "JWT", Ju = ".", Xu = "base64url", Fp = "utf8", Lp = "utf8", Mp = ":", Up = "did", $p = "key", Va = "base58btc", jp = "z", kp = "K36", Bp = 32;
function go(e) {
  return globalThis.Buffer != null ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e;
}
function Qu(e = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? go(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e);
}
function ks(e, t) {
  t || (t = e.reduce((i, s) => i + s.length, 0));
  const r = Qu(t);
  let n = 0;
  for (const i of e)
    r.set(i, n), n += i.length;
  return go(r);
}
function qp(e, t) {
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
  var a = e.length, u = e.charAt(0), h = Math.log(a) / Math.log(256), f = Math.log(256) / Math.log(a);
  function d(w) {
    if (w instanceof Uint8Array || (ArrayBuffer.isView(w) ? w = new Uint8Array(w.buffer, w.byteOffset, w.byteLength) : Array.isArray(w) && (w = Uint8Array.from(w))), !(w instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (w.length === 0)
      return "";
    for (var O = 0, A = 0, L = 0, _ = w.length; L !== _ && w[L] === 0; )
      L++, O++;
    for (var C = (_ - L) * f + 1 >>> 0, v = new Uint8Array(C); L !== _; ) {
      for (var S = w[L], p = 0, c = C - 1; (S !== 0 || p < A) && c !== -1; c--, p++)
        S += 256 * v[c] >>> 0, v[c] = S % a >>> 0, S = S / a >>> 0;
      if (S !== 0)
        throw new Error("Non-zero carry");
      A = p, L++;
    }
    for (var g = C - A; g !== C && v[g] === 0; )
      g++;
    for (var F = u.repeat(O); g < C; ++g)
      F += e.charAt(v[g]);
    return F;
  }
  function y(w) {
    if (typeof w != "string")
      throw new TypeError("Expected String");
    if (w.length === 0)
      return new Uint8Array();
    var O = 0;
    if (w[O] !== " ") {
      for (var A = 0, L = 0; w[O] === u; )
        A++, O++;
      for (var _ = (w.length - O) * h + 1 >>> 0, C = new Uint8Array(_); w[O]; ) {
        var v = r[w.charCodeAt(O)];
        if (v === 255)
          return;
        for (var S = 0, p = _ - 1; (v !== 0 || S < L) && p !== -1; p--, S++)
          v += a * C[p] >>> 0, C[p] = v % 256 >>> 0, v = v / 256 >>> 0;
        if (v !== 0)
          throw new Error("Non-zero carry");
        L = S, O++;
      }
      if (w[O] !== " ") {
        for (var c = _ - L; c !== _ && C[c] === 0; )
          c++;
        for (var g = new Uint8Array(A + (_ - c)), F = A; c !== _; )
          g[F++] = C[c++];
        return g;
      }
    }
  }
  function m(w) {
    var O = y(w);
    if (O)
      return O;
    throw new Error(`Non-${t} character`);
  }
  return {
    encode: d,
    decodeUnsafe: y,
    decode: m
  };
}
var zp = qp, Kp = zp;
const Hp = (e) => {
  if (e instanceof Uint8Array && e.constructor.name === "Uint8Array")
    return e;
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  if (ArrayBuffer.isView(e))
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Vp = (e) => new TextEncoder().encode(e), Wp = (e) => new TextDecoder().decode(e);
class Gp {
  constructor(t, r, n) {
    this.name = t, this.prefix = r, this.baseEncode = n;
  }
  encode(t) {
    if (t instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Yp {
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
    return Zu(this, t);
  }
}
class Jp {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return Zu(this, t);
  }
  decode(t) {
    const r = t[0], n = this.decoders[r];
    if (n)
      return n.decode(t);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Zu = (e, t) => new Jp({
  ...e.decoders || { [e.prefix]: e },
  ...t.decoders || { [t.prefix]: t }
});
class Xp {
  constructor(t, r, n, i) {
    this.name = t, this.prefix = r, this.baseEncode = n, this.baseDecode = i, this.encoder = new Gp(t, r, n), this.decoder = new Yp(t, r, i);
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const qi = ({ name: e, prefix: t, encode: r, decode: n }) => new Xp(e, t, r, n), Zn = ({ prefix: e, name: t, alphabet: r }) => {
  const { encode: n, decode: i } = Kp(r, t);
  return qi({
    prefix: e,
    name: t,
    encode: n,
    decode: (s) => Hp(i(s))
  });
}, Qp = (e, t, r, n) => {
  const i = {};
  for (let f = 0; f < t.length; ++f)
    i[t[f]] = f;
  let s = e.length;
  for (; e[s - 1] === "="; )
    --s;
  const o = new Uint8Array(s * r / 8 | 0);
  let a = 0, u = 0, h = 0;
  for (let f = 0; f < s; ++f) {
    const d = i[e[f]];
    if (d === void 0)
      throw new SyntaxError(`Non-${n} character`);
    u = u << r | d, a += r, a >= 8 && (a -= 8, o[h++] = 255 & u >> a);
  }
  if (a >= r || 255 & u << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return o;
}, Zp = (e, t, r) => {
  const n = t[t.length - 1] === "=", i = (1 << r) - 1;
  let s = "", o = 0, a = 0;
  for (let u = 0; u < e.length; ++u)
    for (a = a << 8 | e[u], o += 8; o > r; )
      o -= r, s += t[i & a >> o];
  if (o && (s += t[i & a << r - o]), n)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, bt = ({ name: e, prefix: t, bitsPerChar: r, alphabet: n }) => qi({
  prefix: t,
  name: e,
  encode(i) {
    return Zp(i, n, r);
  },
  decode(i) {
    return Qp(i, n, r, e);
  }
}), eg = qi({
  prefix: "\0",
  name: "identity",
  encode: (e) => Wp(e),
  decode: (e) => Vp(e)
}), tg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: eg
}, Symbol.toStringTag, { value: "Module" })), rg = bt({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), ng = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: rg
}, Symbol.toStringTag, { value: "Module" })), ig = bt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), sg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: ig
}, Symbol.toStringTag, { value: "Module" })), og = Zn({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), ag = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: og
}, Symbol.toStringTag, { value: "Module" })), cg = bt({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), ug = bt({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), lg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: cg,
  base16upper: ug
}, Symbol.toStringTag, { value: "Module" })), fg = bt({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), hg = bt({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), dg = bt({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), pg = bt({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), gg = bt({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), yg = bt({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), mg = bt({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), vg = bt({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), bg = bt({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), _g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: fg,
  base32hex: gg,
  base32hexpad: mg,
  base32hexpadupper: vg,
  base32hexupper: yg,
  base32pad: dg,
  base32padupper: pg,
  base32upper: hg,
  base32z: bg
}, Symbol.toStringTag, { value: "Module" })), wg = Zn({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), Eg = Zn({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), Sg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: wg,
  base36upper: Eg
}, Symbol.toStringTag, { value: "Module" })), xg = Zn({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), Dg = Zn({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), Og = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: xg,
  base58flickr: Dg
}, Symbol.toStringTag, { value: "Module" })), Cg = bt({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), Ag = bt({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), Ig = bt({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), Tg = bt({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), Rg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: Cg,
  base64pad: Ag,
  base64url: Ig,
  base64urlpad: Tg
}, Symbol.toStringTag, { value: "Module" })), el = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Ng = el.reduce((e, t, r) => (e[r] = t, e), []), Pg = el.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []);
function Fg(e) {
  return e.reduce((t, r) => (t += Ng[r], t), "");
}
function Lg(e) {
  const t = [];
  for (const r of e) {
    const n = Pg[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    t.push(n);
  }
  return new Uint8Array(t);
}
const Mg = qi({
  prefix: "🚀",
  name: "base256emoji",
  encode: Fg,
  decode: Lg
}), Ug = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: Mg
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const Wa = {
  ...tg,
  ...ng,
  ...sg,
  ...ag,
  ...lg,
  ..._g,
  ...Sg,
  ...Og,
  ...Rg,
  ...Ug
};
function tl(e, t, r, n) {
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
const Ga = tl("utf8", "u", (e) => "u" + new TextDecoder("utf8").decode(e), (e) => new TextEncoder().encode(e.substring(1))), cs = tl("ascii", "a", (e) => {
  let t = "a";
  for (let r = 0; r < e.length; r++)
    t += String.fromCharCode(e[r]);
  return t;
}, (e) => {
  e = e.substring(1);
  const t = Qu(e.length);
  for (let r = 0; r < e.length; r++)
    t[r] = e.charCodeAt(r);
  return t;
}), rl = {
  utf8: Ga,
  "utf-8": Ga,
  hex: Wa.base16,
  latin1: cs,
  ascii: cs,
  binary: cs,
  ...Wa
};
function Pt(e, t = "utf8") {
  const r = rl[t];
  if (!r)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8") : r.encoder.encode(e).substring(1);
}
function Lt(e, t = "utf8") {
  const r = rl[t];
  if (!r)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? go(globalThis.Buffer.from(e, "utf-8")) : r.decoder.decode(`${r.prefix}${e}`);
}
function wi(e) {
  return Pt(Lt(ho(e), Fp), Xu);
}
function nl(e) {
  const t = Lt(kp, Va), r = jp + Pt(ks([t, e]), Va);
  return [Up, $p, r].join(Mp);
}
function $g(e) {
  return Pt(e, Xu);
}
function jg(e) {
  return Lt([wi(e.header), wi(e.payload)].join(Ju), Lp);
}
function kg(e) {
  return [
    wi(e.header),
    wi(e.payload),
    $g(e.signature)
  ].join(Ju);
}
function Ya(e = mn.randomBytes(Bp)) {
  return po.generateKeyPairFromSeed(e);
}
async function Bg(e, t, r, n, i = te.fromMiliseconds(Date.now())) {
  const s = { alg: Np, typ: Pp }, o = nl(n.publicKey), a = i + r, u = { iss: o, sub: e, aud: t, iat: i, exp: a }, h = jg({ header: s, payload: u }), f = po.sign(n.secretKey, h);
  return kg({ header: s, payload: u, signature: f });
}
var yo = {}, zi = {};
Object.defineProperty(zi, "__esModule", { value: !0 });
var St = fe, Bs = qt, qg = 20;
function zg(e, t, r) {
  for (var n = 1634760805, i = 857760878, s = 2036477234, o = 1797285236, a = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], u = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], h = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], f = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], d = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], y = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], m = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], w = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], O = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], A = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4], L = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8], _ = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12], C = n, v = i, S = s, p = o, c = a, g = u, F = h, M = f, U = d, $ = y, B = m, x = w, R = O, G = A, z = L, q = _, H = 0; H < qg; H += 2)
    C = C + c | 0, R ^= C, R = R >>> 32 - 16 | R << 16, U = U + R | 0, c ^= U, c = c >>> 32 - 12 | c << 12, v = v + g | 0, G ^= v, G = G >>> 32 - 16 | G << 16, $ = $ + G | 0, g ^= $, g = g >>> 32 - 12 | g << 12, S = S + F | 0, z ^= S, z = z >>> 32 - 16 | z << 16, B = B + z | 0, F ^= B, F = F >>> 32 - 12 | F << 12, p = p + M | 0, q ^= p, q = q >>> 32 - 16 | q << 16, x = x + q | 0, M ^= x, M = M >>> 32 - 12 | M << 12, S = S + F | 0, z ^= S, z = z >>> 32 - 8 | z << 8, B = B + z | 0, F ^= B, F = F >>> 32 - 7 | F << 7, p = p + M | 0, q ^= p, q = q >>> 32 - 8 | q << 8, x = x + q | 0, M ^= x, M = M >>> 32 - 7 | M << 7, v = v + g | 0, G ^= v, G = G >>> 32 - 8 | G << 8, $ = $ + G | 0, g ^= $, g = g >>> 32 - 7 | g << 7, C = C + c | 0, R ^= C, R = R >>> 32 - 8 | R << 8, U = U + R | 0, c ^= U, c = c >>> 32 - 7 | c << 7, C = C + g | 0, q ^= C, q = q >>> 32 - 16 | q << 16, B = B + q | 0, g ^= B, g = g >>> 32 - 12 | g << 12, v = v + F | 0, R ^= v, R = R >>> 32 - 16 | R << 16, x = x + R | 0, F ^= x, F = F >>> 32 - 12 | F << 12, S = S + M | 0, G ^= S, G = G >>> 32 - 16 | G << 16, U = U + G | 0, M ^= U, M = M >>> 32 - 12 | M << 12, p = p + c | 0, z ^= p, z = z >>> 32 - 16 | z << 16, $ = $ + z | 0, c ^= $, c = c >>> 32 - 12 | c << 12, S = S + M | 0, G ^= S, G = G >>> 32 - 8 | G << 8, U = U + G | 0, M ^= U, M = M >>> 32 - 7 | M << 7, p = p + c | 0, z ^= p, z = z >>> 32 - 8 | z << 8, $ = $ + z | 0, c ^= $, c = c >>> 32 - 7 | c << 7, v = v + F | 0, R ^= v, R = R >>> 32 - 8 | R << 8, x = x + R | 0, F ^= x, F = F >>> 32 - 7 | F << 7, C = C + g | 0, q ^= C, q = q >>> 32 - 8 | q << 8, B = B + q | 0, g ^= B, g = g >>> 32 - 7 | g << 7;
  St.writeUint32LE(C + n | 0, e, 0), St.writeUint32LE(v + i | 0, e, 4), St.writeUint32LE(S + s | 0, e, 8), St.writeUint32LE(p + o | 0, e, 12), St.writeUint32LE(c + a | 0, e, 16), St.writeUint32LE(g + u | 0, e, 20), St.writeUint32LE(F + h | 0, e, 24), St.writeUint32LE(M + f | 0, e, 28), St.writeUint32LE(U + d | 0, e, 32), St.writeUint32LE($ + y | 0, e, 36), St.writeUint32LE(B + m | 0, e, 40), St.writeUint32LE(x + w | 0, e, 44), St.writeUint32LE(R + O | 0, e, 48), St.writeUint32LE(G + A | 0, e, 52), St.writeUint32LE(z + L | 0, e, 56), St.writeUint32LE(q + _ | 0, e, 60);
}
function il(e, t, r, n, i) {
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
  for (var a = new Uint8Array(64), u = 0; u < r.length; u += 64) {
    zg(a, s, e);
    for (var h = u; h < u + 64 && h < r.length; h++)
      n[h] = r[h] ^ a[h - u];
    Hg(s, 0, o);
  }
  return Bs.wipe(a), i === 0 && Bs.wipe(s), n;
}
zi.streamXOR = il;
function Kg(e, t, r, n) {
  return n === void 0 && (n = 0), Bs.wipe(r), il(e, t, r, r, n);
}
zi.stream = Kg;
function Hg(e, t, r) {
  for (var n = 1; r--; )
    n = n + (e[t] & 255) | 0, e[t] = n & 255, n >>>= 8, t++;
  if (n > 0)
    throw new Error("ChaCha: counter overflow");
}
var sl = {}, Nr = {};
Object.defineProperty(Nr, "__esModule", { value: !0 });
function Vg(e, t, r) {
  return ~(e - 1) & t | e - 1 & r;
}
Nr.select = Vg;
function Wg(e, t) {
  return (e | 0) - (t | 0) - 1 >>> 31 & 1;
}
Nr.lessOrEqual = Wg;
function ol(e, t) {
  if (e.length !== t.length)
    return 0;
  for (var r = 0, n = 0; n < e.length; n++)
    r |= e[n] ^ t[n];
  return 1 & r - 1 >>> 8;
}
Nr.compare = ol;
function Gg(e, t) {
  return e.length === 0 || t.length === 0 ? !1 : ol(e, t) !== 0;
}
Nr.equal = Gg;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = Nr, r = qt;
  e.DIGEST_LENGTH = 16;
  var n = (
    /** @class */
    function() {
      function o(a) {
        this.digestLength = e.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
        var u = a[0] | a[1] << 8;
        this._r[0] = u & 8191;
        var h = a[2] | a[3] << 8;
        this._r[1] = (u >>> 13 | h << 3) & 8191;
        var f = a[4] | a[5] << 8;
        this._r[2] = (h >>> 10 | f << 6) & 7939;
        var d = a[6] | a[7] << 8;
        this._r[3] = (f >>> 7 | d << 9) & 8191;
        var y = a[8] | a[9] << 8;
        this._r[4] = (d >>> 4 | y << 12) & 255, this._r[5] = y >>> 1 & 8190;
        var m = a[10] | a[11] << 8;
        this._r[6] = (y >>> 14 | m << 2) & 8191;
        var w = a[12] | a[13] << 8;
        this._r[7] = (m >>> 11 | w << 5) & 8065;
        var O = a[14] | a[15] << 8;
        this._r[8] = (w >>> 8 | O << 8) & 8191, this._r[9] = O >>> 5 & 127, this._pad[0] = a[16] | a[17] << 8, this._pad[1] = a[18] | a[19] << 8, this._pad[2] = a[20] | a[21] << 8, this._pad[3] = a[22] | a[23] << 8, this._pad[4] = a[24] | a[25] << 8, this._pad[5] = a[26] | a[27] << 8, this._pad[6] = a[28] | a[29] << 8, this._pad[7] = a[30] | a[31] << 8;
      }
      return o.prototype._blocks = function(a, u, h) {
        for (var f = this._fin ? 0 : 2048, d = this._h[0], y = this._h[1], m = this._h[2], w = this._h[3], O = this._h[4], A = this._h[5], L = this._h[6], _ = this._h[7], C = this._h[8], v = this._h[9], S = this._r[0], p = this._r[1], c = this._r[2], g = this._r[3], F = this._r[4], M = this._r[5], U = this._r[6], $ = this._r[7], B = this._r[8], x = this._r[9]; h >= 16; ) {
          var R = a[u + 0] | a[u + 1] << 8;
          d += R & 8191;
          var G = a[u + 2] | a[u + 3] << 8;
          y += (R >>> 13 | G << 3) & 8191;
          var z = a[u + 4] | a[u + 5] << 8;
          m += (G >>> 10 | z << 6) & 8191;
          var q = a[u + 6] | a[u + 7] << 8;
          w += (z >>> 7 | q << 9) & 8191;
          var H = a[u + 8] | a[u + 9] << 8;
          O += (q >>> 4 | H << 12) & 8191, A += H >>> 1 & 8191;
          var k = a[u + 10] | a[u + 11] << 8;
          L += (H >>> 14 | k << 2) & 8191;
          var V = a[u + 12] | a[u + 13] << 8;
          _ += (k >>> 11 | V << 5) & 8191;
          var ae = a[u + 14] | a[u + 15] << 8;
          C += (V >>> 8 | ae << 8) & 8191, v += ae >>> 5 | f;
          var W = 0, ie = W;
          ie += d * S, ie += y * (5 * x), ie += m * (5 * B), ie += w * (5 * $), ie += O * (5 * U), W = ie >>> 13, ie &= 8191, ie += A * (5 * M), ie += L * (5 * F), ie += _ * (5 * g), ie += C * (5 * c), ie += v * (5 * p), W += ie >>> 13, ie &= 8191;
          var Z = W;
          Z += d * p, Z += y * S, Z += m * (5 * x), Z += w * (5 * B), Z += O * (5 * $), W = Z >>> 13, Z &= 8191, Z += A * (5 * U), Z += L * (5 * M), Z += _ * (5 * F), Z += C * (5 * g), Z += v * (5 * c), W += Z >>> 13, Z &= 8191;
          var ne = W;
          ne += d * c, ne += y * p, ne += m * S, ne += w * (5 * x), ne += O * (5 * B), W = ne >>> 13, ne &= 8191, ne += A * (5 * $), ne += L * (5 * U), ne += _ * (5 * M), ne += C * (5 * F), ne += v * (5 * g), W += ne >>> 13, ne &= 8191;
          var P = W;
          P += d * g, P += y * c, P += m * p, P += w * S, P += O * (5 * x), W = P >>> 13, P &= 8191, P += A * (5 * B), P += L * (5 * $), P += _ * (5 * U), P += C * (5 * M), P += v * (5 * F), W += P >>> 13, P &= 8191;
          var N = W;
          N += d * F, N += y * g, N += m * c, N += w * p, N += O * S, W = N >>> 13, N &= 8191, N += A * (5 * x), N += L * (5 * B), N += _ * (5 * $), N += C * (5 * U), N += v * (5 * M), W += N >>> 13, N &= 8191;
          var I = W;
          I += d * M, I += y * F, I += m * g, I += w * c, I += O * p, W = I >>> 13, I &= 8191, I += A * S, I += L * (5 * x), I += _ * (5 * B), I += C * (5 * $), I += v * (5 * U), W += I >>> 13, I &= 8191;
          var l = W;
          l += d * U, l += y * M, l += m * F, l += w * g, l += O * c, W = l >>> 13, l &= 8191, l += A * p, l += L * S, l += _ * (5 * x), l += C * (5 * B), l += v * (5 * $), W += l >>> 13, l &= 8191;
          var D = W;
          D += d * $, D += y * U, D += m * M, D += w * F, D += O * g, W = D >>> 13, D &= 8191, D += A * c, D += L * p, D += _ * S, D += C * (5 * x), D += v * (5 * B), W += D >>> 13, D &= 8191;
          var Y = W;
          Y += d * B, Y += y * $, Y += m * U, Y += w * M, Y += O * F, W = Y >>> 13, Y &= 8191, Y += A * g, Y += L * c, Y += _ * p, Y += C * S, Y += v * (5 * x), W += Y >>> 13, Y &= 8191;
          var Q = W;
          Q += d * x, Q += y * B, Q += m * $, Q += w * U, Q += O * M, W = Q >>> 13, Q &= 8191, Q += A * F, Q += L * g, Q += _ * c, Q += C * p, Q += v * S, W += Q >>> 13, Q &= 8191, W = (W << 2) + W | 0, W = W + ie | 0, ie = W & 8191, W = W >>> 13, Z += W, d = ie, y = Z, m = ne, w = P, O = N, A = I, L = l, _ = D, C = Y, v = Q, u += 16, h -= 16;
        }
        this._h[0] = d, this._h[1] = y, this._h[2] = m, this._h[3] = w, this._h[4] = O, this._h[5] = A, this._h[6] = L, this._h[7] = _, this._h[8] = C, this._h[9] = v;
      }, o.prototype.finish = function(a, u) {
        u === void 0 && (u = 0);
        var h = new Uint16Array(10), f, d, y, m;
        if (this._leftover) {
          for (m = this._leftover, this._buffer[m++] = 1; m < 16; m++)
            this._buffer[m] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (f = this._h[1] >>> 13, this._h[1] &= 8191, m = 2; m < 10; m++)
          this._h[m] += f, f = this._h[m] >>> 13, this._h[m] &= 8191;
        for (this._h[0] += f * 5, f = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += f, f = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += f, h[0] = this._h[0] + 5, f = h[0] >>> 13, h[0] &= 8191, m = 1; m < 10; m++)
          h[m] = this._h[m] + f, f = h[m] >>> 13, h[m] &= 8191;
        for (h[9] -= 8192, d = (f ^ 1) - 1, m = 0; m < 10; m++)
          h[m] &= d;
        for (d = ~d, m = 0; m < 10; m++)
          this._h[m] = this._h[m] & d | h[m];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, y = this._h[0] + this._pad[0], this._h[0] = y & 65535, m = 1; m < 8; m++)
          y = (this._h[m] + this._pad[m] | 0) + (y >>> 16) | 0, this._h[m] = y & 65535;
        return a[u + 0] = this._h[0] >>> 0, a[u + 1] = this._h[0] >>> 8, a[u + 2] = this._h[1] >>> 0, a[u + 3] = this._h[1] >>> 8, a[u + 4] = this._h[2] >>> 0, a[u + 5] = this._h[2] >>> 8, a[u + 6] = this._h[3] >>> 0, a[u + 7] = this._h[3] >>> 8, a[u + 8] = this._h[4] >>> 0, a[u + 9] = this._h[4] >>> 8, a[u + 10] = this._h[5] >>> 0, a[u + 11] = this._h[5] >>> 8, a[u + 12] = this._h[6] >>> 0, a[u + 13] = this._h[6] >>> 8, a[u + 14] = this._h[7] >>> 0, a[u + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, o.prototype.update = function(a) {
        var u = 0, h = a.length, f;
        if (this._leftover) {
          f = 16 - this._leftover, f > h && (f = h);
          for (var d = 0; d < f; d++)
            this._buffer[this._leftover + d] = a[u + d];
          if (h -= f, u += f, this._leftover += f, this._leftover < 16)
            return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (h >= 16 && (f = h - h % 16, this._blocks(a, u, f), u += f, h -= f), h) {
          for (var d = 0; d < h; d++)
            this._buffer[this._leftover + d] = a[u + d];
          this._leftover += h;
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
    var u = new n(o);
    u.update(a);
    var h = u.digest();
    return u.clean(), h;
  }
  e.oneTimeAuth = i;
  function s(o, a) {
    return o.length !== e.DIGEST_LENGTH || a.length !== e.DIGEST_LENGTH ? !1 : t.equal(o, a);
  }
  e.equal = s;
})(sl);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = zi, r = sl, n = qt, i = fe, s = Nr;
  e.KEY_LENGTH = 32, e.NONCE_LENGTH = 12, e.TAG_LENGTH = 16;
  var o = new Uint8Array(16), a = (
    /** @class */
    function() {
      function u(h) {
        if (this.nonceLength = e.NONCE_LENGTH, this.tagLength = e.TAG_LENGTH, h.length !== e.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(h);
      }
      return u.prototype.seal = function(h, f, d, y) {
        if (h.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var m = new Uint8Array(16);
        m.set(h, m.length - h.length);
        var w = new Uint8Array(32);
        t.stream(this._key, m, w, 4);
        var O = f.length + this.tagLength, A;
        if (y) {
          if (y.length !== O)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          A = y;
        } else
          A = new Uint8Array(O);
        return t.streamXOR(this._key, m, f, A, 4), this._authenticate(A.subarray(A.length - this.tagLength, A.length), w, A.subarray(0, A.length - this.tagLength), d), n.wipe(m), A;
      }, u.prototype.open = function(h, f, d, y) {
        if (h.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (f.length < this.tagLength)
          return null;
        var m = new Uint8Array(16);
        m.set(h, m.length - h.length);
        var w = new Uint8Array(32);
        t.stream(this._key, m, w, 4);
        var O = new Uint8Array(this.tagLength);
        if (this._authenticate(O, w, f.subarray(0, f.length - this.tagLength), d), !s.equal(O, f.subarray(f.length - this.tagLength, f.length)))
          return null;
        var A = f.length - this.tagLength, L;
        if (y) {
          if (y.length !== A)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          L = y;
        } else
          L = new Uint8Array(A);
        return t.streamXOR(this._key, m, f.subarray(0, f.length - this.tagLength), L, 4), n.wipe(m), L;
      }, u.prototype.clean = function() {
        return n.wipe(this._key), this;
      }, u.prototype._authenticate = function(h, f, d, y) {
        var m = new r.Poly1305(f);
        y && (m.update(y), y.length % 16 > 0 && m.update(o.subarray(y.length % 16))), m.update(d), d.length % 16 > 0 && m.update(o.subarray(d.length % 16));
        var w = new Uint8Array(8);
        y && i.writeUint64LE(y.length, w), m.update(w), i.writeUint64LE(d.length, w), m.update(w);
        for (var O = m.digest(), A = 0; A < O.length; A++)
          h[A] = O[A];
        m.clean(), n.wipe(O), n.wipe(w);
      }, u;
    }()
  );
  e.ChaCha20Poly1305 = a;
})(yo);
var al = {}, ei = {}, mo = {};
Object.defineProperty(mo, "__esModule", { value: !0 });
function Yg(e) {
  return typeof e.saveState < "u" && typeof e.restoreState < "u" && typeof e.cleanSavedState < "u";
}
mo.isSerializableHash = Yg;
Object.defineProperty(ei, "__esModule", { value: !0 });
var cr = mo, Jg = Nr, Xg = qt, cl = (
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
      this._outer.update(n), cr.isSerializableHash(this._inner) && cr.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), Xg.wipe(n);
    }
    return e.prototype.reset = function() {
      if (!cr.isSerializableHash(this._inner) || !cr.isSerializableHash(this._outer))
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, e.prototype.clean = function() {
      cr.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), cr.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
    }, e.prototype.update = function(t) {
      return this._inner.update(t), this;
    }, e.prototype.finish = function(t) {
      return this._finished ? (this._outer.finish(t), this) : (this._inner.finish(t), this._outer.update(t.subarray(0, this.digestLength)).finish(t), this._finished = !0, this);
    }, e.prototype.digest = function() {
      var t = new Uint8Array(this.digestLength);
      return this.finish(t), t;
    }, e.prototype.saveState = function() {
      if (!cr.isSerializableHash(this._inner))
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      return this._inner.saveState();
    }, e.prototype.restoreState = function(t) {
      if (!cr.isSerializableHash(this._inner) || !cr.isSerializableHash(this._outer))
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      return this._inner.restoreState(t), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, e.prototype.cleanSavedState = function(t) {
      if (!cr.isSerializableHash(this._inner))
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      this._inner.cleanSavedState(t);
    }, e;
  }()
);
ei.HMAC = cl;
function Qg(e, t, r) {
  var n = new cl(e, t);
  n.update(r);
  var i = n.digest();
  return n.clean(), i;
}
ei.hmac = Qg;
ei.equal = Jg.equal;
Object.defineProperty(al, "__esModule", { value: !0 });
var Ja = ei, Xa = qt, Zg = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      n === void 0 && (n = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = t, this._info = i;
      var s = Ja.hmac(this._hash, n, r);
      this._hmac = new Ja.HMAC(t, s), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
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
      this._hmac.clean(), Xa.wipe(this._buffer), Xa.wipe(this._counter), this._bufpos = 0;
    }, e;
  }()
), e0 = al.HKDF = Zg, Ki = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = fe, r = qt;
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
      }, a.prototype.update = function(u, h) {
        if (h === void 0 && (h = u.length), this._finished)
          throw new Error("SHA256: can't update because hash was finished.");
        var f = 0;
        if (this._bytesHashed += h, this._bufferLength > 0) {
          for (; this._bufferLength < this.blockSize && h > 0; )
            this._buffer[this._bufferLength++] = u[f++], h--;
          this._bufferLength === this.blockSize && (s(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (h >= this.blockSize && (f = s(this._temp, this._state, u, f, h), h %= this.blockSize); h > 0; )
          this._buffer[this._bufferLength++] = u[f++], h--;
        return this;
      }, a.prototype.finish = function(u) {
        if (!this._finished) {
          var h = this._bytesHashed, f = this._bufferLength, d = h / 536870912 | 0, y = h << 3, m = h % 64 < 56 ? 64 : 128;
          this._buffer[f] = 128;
          for (var w = f + 1; w < m - 8; w++)
            this._buffer[w] = 0;
          t.writeUint32BE(d, this._buffer, m - 8), t.writeUint32BE(y, this._buffer, m - 4), s(this._temp, this._state, this._buffer, 0, m), this._finished = !0;
        }
        for (var w = 0; w < this.digestLength / 4; w++)
          t.writeUint32BE(this._state[w], u, w * 4);
        return this;
      }, a.prototype.digest = function() {
        var u = new Uint8Array(this.digestLength);
        return this.finish(u), u;
      }, a.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          state: new Int32Array(this._state),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, a.prototype.restoreState = function(u) {
        return this._state.set(u.state), this._bufferLength = u.bufferLength, u.buffer && this._buffer.set(u.buffer), this._bytesHashed = u.bytesHashed, this._finished = !1, this;
      }, a.prototype.cleanSavedState = function(u) {
        r.wipe(u.state), u.buffer && r.wipe(u.buffer), u.bufferLength = 0, u.bytesHashed = 0;
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
  function s(a, u, h, f, d) {
    for (; d >= 64; ) {
      for (var y = u[0], m = u[1], w = u[2], O = u[3], A = u[4], L = u[5], _ = u[6], C = u[7], v = 0; v < 16; v++) {
        var S = f + v * 4;
        a[v] = t.readUint32BE(h, S);
      }
      for (var v = 16; v < 64; v++) {
        var p = a[v - 2], c = (p >>> 17 | p << 32 - 17) ^ (p >>> 19 | p << 32 - 19) ^ p >>> 10;
        p = a[v - 15];
        var g = (p >>> 7 | p << 32 - 7) ^ (p >>> 18 | p << 32 - 18) ^ p >>> 3;
        a[v] = (c + a[v - 7] | 0) + (g + a[v - 16] | 0);
      }
      for (var v = 0; v < 64; v++) {
        var c = (((A >>> 6 | A << 26) ^ (A >>> 11 | A << 21) ^ (A >>> 25 | A << 7)) + (A & L ^ ~A & _) | 0) + (C + (i[v] + a[v] | 0) | 0) | 0, g = ((y >>> 2 | y << 32 - 2) ^ (y >>> 13 | y << 32 - 13) ^ (y >>> 22 | y << 32 - 22)) + (y & m ^ y & w ^ m & w) | 0;
        C = _, _ = L, L = A, A = O + c | 0, O = w, w = m, m = y, y = c + g | 0;
      }
      u[0] += y, u[1] += m, u[2] += w, u[3] += O, u[4] += A, u[5] += L, u[6] += _, u[7] += C, f += 64, d -= 64;
    }
    return f;
  }
  function o(a) {
    var u = new n();
    u.update(a);
    var h = u.digest();
    return u.clean(), h;
  }
  e.hash = o;
})(Ki);
var vo = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.sharedKey = e.generateKeyPair = e.generateKeyPairFromSeed = e.scalarMultBase = e.scalarMult = e.SHARED_KEY_LENGTH = e.SECRET_KEY_LENGTH = e.PUBLIC_KEY_LENGTH = void 0;
  const t = mn, r = qt;
  e.PUBLIC_KEY_LENGTH = 32, e.SECRET_KEY_LENGTH = 32, e.SHARED_KEY_LENGTH = 32;
  function n(v) {
    const S = new Float64Array(16);
    if (v)
      for (let p = 0; p < v.length; p++)
        S[p] = v[p];
    return S;
  }
  const i = new Uint8Array(32);
  i[0] = 9;
  const s = n([56129, 1]);
  function o(v) {
    let S = 1;
    for (let p = 0; p < 16; p++) {
      let c = v[p] + S + 65535;
      S = Math.floor(c / 65536), v[p] = c - S * 65536;
    }
    v[0] += S - 1 + 37 * (S - 1);
  }
  function a(v, S, p) {
    const c = ~(p - 1);
    for (let g = 0; g < 16; g++) {
      const F = c & (v[g] ^ S[g]);
      v[g] ^= F, S[g] ^= F;
    }
  }
  function u(v, S) {
    const p = n(), c = n();
    for (let g = 0; g < 16; g++)
      c[g] = S[g];
    o(c), o(c), o(c);
    for (let g = 0; g < 2; g++) {
      p[0] = c[0] - 65517;
      for (let M = 1; M < 15; M++)
        p[M] = c[M] - 65535 - (p[M - 1] >> 16 & 1), p[M - 1] &= 65535;
      p[15] = c[15] - 32767 - (p[14] >> 16 & 1);
      const F = p[15] >> 16 & 1;
      p[14] &= 65535, a(c, p, 1 - F);
    }
    for (let g = 0; g < 16; g++)
      v[2 * g] = c[g] & 255, v[2 * g + 1] = c[g] >> 8;
  }
  function h(v, S) {
    for (let p = 0; p < 16; p++)
      v[p] = S[2 * p] + (S[2 * p + 1] << 8);
    v[15] &= 32767;
  }
  function f(v, S, p) {
    for (let c = 0; c < 16; c++)
      v[c] = S[c] + p[c];
  }
  function d(v, S, p) {
    for (let c = 0; c < 16; c++)
      v[c] = S[c] - p[c];
  }
  function y(v, S, p) {
    let c, g, F = 0, M = 0, U = 0, $ = 0, B = 0, x = 0, R = 0, G = 0, z = 0, q = 0, H = 0, k = 0, V = 0, ae = 0, W = 0, ie = 0, Z = 0, ne = 0, P = 0, N = 0, I = 0, l = 0, D = 0, Y = 0, Q = 0, ve = 0, be = 0, de = 0, Ce = 0, Be = 0, Le = 0, De = p[0], Ee = p[1], pe = p[2], ye = p[3], ge = p[4], le = p[5], ue = p[6], se = p[7], me = p[8], _e = p[9], ce = p[10], Se = p[11], Ae = p[12], Ne = p[13], Pe = p[14], Ie = p[15];
    c = S[0], F += c * De, M += c * Ee, U += c * pe, $ += c * ye, B += c * ge, x += c * le, R += c * ue, G += c * se, z += c * me, q += c * _e, H += c * ce, k += c * Se, V += c * Ae, ae += c * Ne, W += c * Pe, ie += c * Ie, c = S[1], M += c * De, U += c * Ee, $ += c * pe, B += c * ye, x += c * ge, R += c * le, G += c * ue, z += c * se, q += c * me, H += c * _e, k += c * ce, V += c * Se, ae += c * Ae, W += c * Ne, ie += c * Pe, Z += c * Ie, c = S[2], U += c * De, $ += c * Ee, B += c * pe, x += c * ye, R += c * ge, G += c * le, z += c * ue, q += c * se, H += c * me, k += c * _e, V += c * ce, ae += c * Se, W += c * Ae, ie += c * Ne, Z += c * Pe, ne += c * Ie, c = S[3], $ += c * De, B += c * Ee, x += c * pe, R += c * ye, G += c * ge, z += c * le, q += c * ue, H += c * se, k += c * me, V += c * _e, ae += c * ce, W += c * Se, ie += c * Ae, Z += c * Ne, ne += c * Pe, P += c * Ie, c = S[4], B += c * De, x += c * Ee, R += c * pe, G += c * ye, z += c * ge, q += c * le, H += c * ue, k += c * se, V += c * me, ae += c * _e, W += c * ce, ie += c * Se, Z += c * Ae, ne += c * Ne, P += c * Pe, N += c * Ie, c = S[5], x += c * De, R += c * Ee, G += c * pe, z += c * ye, q += c * ge, H += c * le, k += c * ue, V += c * se, ae += c * me, W += c * _e, ie += c * ce, Z += c * Se, ne += c * Ae, P += c * Ne, N += c * Pe, I += c * Ie, c = S[6], R += c * De, G += c * Ee, z += c * pe, q += c * ye, H += c * ge, k += c * le, V += c * ue, ae += c * se, W += c * me, ie += c * _e, Z += c * ce, ne += c * Se, P += c * Ae, N += c * Ne, I += c * Pe, l += c * Ie, c = S[7], G += c * De, z += c * Ee, q += c * pe, H += c * ye, k += c * ge, V += c * le, ae += c * ue, W += c * se, ie += c * me, Z += c * _e, ne += c * ce, P += c * Se, N += c * Ae, I += c * Ne, l += c * Pe, D += c * Ie, c = S[8], z += c * De, q += c * Ee, H += c * pe, k += c * ye, V += c * ge, ae += c * le, W += c * ue, ie += c * se, Z += c * me, ne += c * _e, P += c * ce, N += c * Se, I += c * Ae, l += c * Ne, D += c * Pe, Y += c * Ie, c = S[9], q += c * De, H += c * Ee, k += c * pe, V += c * ye, ae += c * ge, W += c * le, ie += c * ue, Z += c * se, ne += c * me, P += c * _e, N += c * ce, I += c * Se, l += c * Ae, D += c * Ne, Y += c * Pe, Q += c * Ie, c = S[10], H += c * De, k += c * Ee, V += c * pe, ae += c * ye, W += c * ge, ie += c * le, Z += c * ue, ne += c * se, P += c * me, N += c * _e, I += c * ce, l += c * Se, D += c * Ae, Y += c * Ne, Q += c * Pe, ve += c * Ie, c = S[11], k += c * De, V += c * Ee, ae += c * pe, W += c * ye, ie += c * ge, Z += c * le, ne += c * ue, P += c * se, N += c * me, I += c * _e, l += c * ce, D += c * Se, Y += c * Ae, Q += c * Ne, ve += c * Pe, be += c * Ie, c = S[12], V += c * De, ae += c * Ee, W += c * pe, ie += c * ye, Z += c * ge, ne += c * le, P += c * ue, N += c * se, I += c * me, l += c * _e, D += c * ce, Y += c * Se, Q += c * Ae, ve += c * Ne, be += c * Pe, de += c * Ie, c = S[13], ae += c * De, W += c * Ee, ie += c * pe, Z += c * ye, ne += c * ge, P += c * le, N += c * ue, I += c * se, l += c * me, D += c * _e, Y += c * ce, Q += c * Se, ve += c * Ae, be += c * Ne, de += c * Pe, Ce += c * Ie, c = S[14], W += c * De, ie += c * Ee, Z += c * pe, ne += c * ye, P += c * ge, N += c * le, I += c * ue, l += c * se, D += c * me, Y += c * _e, Q += c * ce, ve += c * Se, be += c * Ae, de += c * Ne, Ce += c * Pe, Be += c * Ie, c = S[15], ie += c * De, Z += c * Ee, ne += c * pe, P += c * ye, N += c * ge, I += c * le, l += c * ue, D += c * se, Y += c * me, Q += c * _e, ve += c * ce, be += c * Se, de += c * Ae, Ce += c * Ne, Be += c * Pe, Le += c * Ie, F += 38 * Z, M += 38 * ne, U += 38 * P, $ += 38 * N, B += 38 * I, x += 38 * l, R += 38 * D, G += 38 * Y, z += 38 * Q, q += 38 * ve, H += 38 * be, k += 38 * de, V += 38 * Ce, ae += 38 * Be, W += 38 * Le, g = 1, c = F + g + 65535, g = Math.floor(c / 65536), F = c - g * 65536, c = M + g + 65535, g = Math.floor(c / 65536), M = c - g * 65536, c = U + g + 65535, g = Math.floor(c / 65536), U = c - g * 65536, c = $ + g + 65535, g = Math.floor(c / 65536), $ = c - g * 65536, c = B + g + 65535, g = Math.floor(c / 65536), B = c - g * 65536, c = x + g + 65535, g = Math.floor(c / 65536), x = c - g * 65536, c = R + g + 65535, g = Math.floor(c / 65536), R = c - g * 65536, c = G + g + 65535, g = Math.floor(c / 65536), G = c - g * 65536, c = z + g + 65535, g = Math.floor(c / 65536), z = c - g * 65536, c = q + g + 65535, g = Math.floor(c / 65536), q = c - g * 65536, c = H + g + 65535, g = Math.floor(c / 65536), H = c - g * 65536, c = k + g + 65535, g = Math.floor(c / 65536), k = c - g * 65536, c = V + g + 65535, g = Math.floor(c / 65536), V = c - g * 65536, c = ae + g + 65535, g = Math.floor(c / 65536), ae = c - g * 65536, c = W + g + 65535, g = Math.floor(c / 65536), W = c - g * 65536, c = ie + g + 65535, g = Math.floor(c / 65536), ie = c - g * 65536, F += g - 1 + 37 * (g - 1), g = 1, c = F + g + 65535, g = Math.floor(c / 65536), F = c - g * 65536, c = M + g + 65535, g = Math.floor(c / 65536), M = c - g * 65536, c = U + g + 65535, g = Math.floor(c / 65536), U = c - g * 65536, c = $ + g + 65535, g = Math.floor(c / 65536), $ = c - g * 65536, c = B + g + 65535, g = Math.floor(c / 65536), B = c - g * 65536, c = x + g + 65535, g = Math.floor(c / 65536), x = c - g * 65536, c = R + g + 65535, g = Math.floor(c / 65536), R = c - g * 65536, c = G + g + 65535, g = Math.floor(c / 65536), G = c - g * 65536, c = z + g + 65535, g = Math.floor(c / 65536), z = c - g * 65536, c = q + g + 65535, g = Math.floor(c / 65536), q = c - g * 65536, c = H + g + 65535, g = Math.floor(c / 65536), H = c - g * 65536, c = k + g + 65535, g = Math.floor(c / 65536), k = c - g * 65536, c = V + g + 65535, g = Math.floor(c / 65536), V = c - g * 65536, c = ae + g + 65535, g = Math.floor(c / 65536), ae = c - g * 65536, c = W + g + 65535, g = Math.floor(c / 65536), W = c - g * 65536, c = ie + g + 65535, g = Math.floor(c / 65536), ie = c - g * 65536, F += g - 1 + 37 * (g - 1), v[0] = F, v[1] = M, v[2] = U, v[3] = $, v[4] = B, v[5] = x, v[6] = R, v[7] = G, v[8] = z, v[9] = q, v[10] = H, v[11] = k, v[12] = V, v[13] = ae, v[14] = W, v[15] = ie;
  }
  function m(v, S) {
    y(v, S, S);
  }
  function w(v, S) {
    const p = n();
    for (let c = 0; c < 16; c++)
      p[c] = S[c];
    for (let c = 253; c >= 0; c--)
      m(p, p), c !== 2 && c !== 4 && y(p, p, S);
    for (let c = 0; c < 16; c++)
      v[c] = p[c];
  }
  function O(v, S) {
    const p = new Uint8Array(32), c = new Float64Array(80), g = n(), F = n(), M = n(), U = n(), $ = n(), B = n();
    for (let z = 0; z < 31; z++)
      p[z] = v[z];
    p[31] = v[31] & 127 | 64, p[0] &= 248, h(c, S);
    for (let z = 0; z < 16; z++)
      F[z] = c[z];
    g[0] = U[0] = 1;
    for (let z = 254; z >= 0; --z) {
      const q = p[z >>> 3] >>> (z & 7) & 1;
      a(g, F, q), a(M, U, q), f($, g, M), d(g, g, M), f(M, F, U), d(F, F, U), m(U, $), m(B, g), y(g, M, g), y(M, F, $), f($, g, M), d(g, g, M), m(F, g), d(M, U, B), y(g, M, s), f(g, g, U), y(M, M, g), y(g, U, B), y(U, F, c), m(F, $), a(g, F, q), a(M, U, q);
    }
    for (let z = 0; z < 16; z++)
      c[z + 16] = g[z], c[z + 32] = M[z], c[z + 48] = F[z], c[z + 64] = U[z];
    const x = c.subarray(32), R = c.subarray(16);
    w(x, x), y(R, R, x);
    const G = new Uint8Array(32);
    return u(G, R), G;
  }
  e.scalarMult = O;
  function A(v) {
    return O(v, i);
  }
  e.scalarMultBase = A;
  function L(v) {
    if (v.length !== e.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${e.SECRET_KEY_LENGTH} bytes`);
    const S = new Uint8Array(v);
    return {
      publicKey: A(S),
      secretKey: S
    };
  }
  e.generateKeyPairFromSeed = L;
  function _(v) {
    const S = (0, t.randomBytes)(32, v), p = L(S);
    return (0, r.wipe)(S), p;
  }
  e.generateKeyPair = _;
  function C(v, S, p = !1) {
    if (v.length !== e.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (S.length !== e.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const c = O(v, S);
    if (p) {
      let g = 0;
      for (let F = 0; F < c.length; F++)
        g |= c[F];
      if (g === 0)
        throw new Error("X25519: invalid shared key");
    }
    return c;
  }
  e.sharedKey = C;
})(vo);
var Qa = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, s; n < i; n++)
      (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, t0 = (
  /** @class */
  function() {
    function e(t, r, n) {
      this.name = t, this.version = r, this.os = n, this.type = "browser";
    }
    return e;
  }()
), r0 = (
  /** @class */
  function() {
    function e(t) {
      this.version = t, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return e;
  }()
), n0 = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      this.name = t, this.version = r, this.os = n, this.bot = i, this.type = "bot-device";
    }
    return e;
  }()
), i0 = (
  /** @class */
  function() {
    function e() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return e;
  }()
), s0 = (
  /** @class */
  function() {
    function e() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return e;
  }()
), o0 = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, a0 = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, Za = 3, c0 = [
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
  ["searchbot", o0]
], ec = [
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
function u0(e) {
  return e ? tc(e) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new s0() : typeof navigator < "u" ? tc(navigator.userAgent) : h0();
}
function l0(e) {
  return e !== "" && c0.reduce(function(t, r) {
    var n = r[0], i = r[1];
    if (t)
      return t;
    var s = i.exec(e);
    return !!s && [n, s];
  }, !1);
}
function tc(e) {
  var t = l0(e);
  if (!t)
    return null;
  var r = t[0], n = t[1];
  if (r === "searchbot")
    return new i0();
  var i = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
  i ? i.length < Za && (i = Qa(Qa([], i, !0), d0(Za - i.length), !0)) : i = [];
  var s = i.join("."), o = f0(e), a = a0.exec(e);
  return a && a[1] ? new n0(r, s, o, a[1]) : new t0(r, s, o);
}
function f0(e) {
  for (var t = 0, r = ec.length; t < r; t++) {
    var n = ec[t], i = n[0], s = n[1], o = s.exec(e);
    if (o)
      return i;
  }
  return null;
}
function h0() {
  var e = typeof process < "u" && process.version;
  return e ? new r0(process.version.slice(1)) : null;
}
function d0(e) {
  for (var t = [], r = 0; r < e; r++)
    t.push("0");
  return t;
}
var Ue = {};
Object.defineProperty(Ue, "__esModule", { value: !0 });
Ue.getLocalStorage = Ue.getLocalStorageOrThrow = Ue.getCrypto = Ue.getCryptoOrThrow = ll = Ue.getLocation = Ue.getLocationOrThrow = bo = Ue.getNavigator = Ue.getNavigatorOrThrow = ul = Ue.getDocument = Ue.getDocumentOrThrow = Ue.getFromWindowOrThrow = Ue.getFromWindow = void 0;
function Yr(e) {
  let t;
  return typeof window < "u" && typeof window[e] < "u" && (t = window[e]), t;
}
Ue.getFromWindow = Yr;
function vn(e) {
  const t = Yr(e);
  if (!t)
    throw new Error(`${e} is not defined in Window`);
  return t;
}
Ue.getFromWindowOrThrow = vn;
function p0() {
  return vn("document");
}
Ue.getDocumentOrThrow = p0;
function g0() {
  return Yr("document");
}
var ul = Ue.getDocument = g0;
function y0() {
  return vn("navigator");
}
Ue.getNavigatorOrThrow = y0;
function m0() {
  return Yr("navigator");
}
var bo = Ue.getNavigator = m0;
function v0() {
  return vn("location");
}
Ue.getLocationOrThrow = v0;
function b0() {
  return Yr("location");
}
var ll = Ue.getLocation = b0;
function _0() {
  return vn("crypto");
}
Ue.getCryptoOrThrow = _0;
function w0() {
  return Yr("crypto");
}
Ue.getCrypto = w0;
function E0() {
  return vn("localStorage");
}
Ue.getLocalStorageOrThrow = E0;
function S0() {
  return Yr("localStorage");
}
Ue.getLocalStorage = S0;
var _o = {};
Object.defineProperty(_o, "__esModule", { value: !0 });
var fl = _o.getWindowMetadata = void 0;
const rc = Ue;
function x0() {
  let e, t;
  try {
    e = rc.getDocumentOrThrow(), t = rc.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const d = e.getElementsByTagName("link"), y = [];
    for (let m = 0; m < d.length; m++) {
      const w = d[m], O = w.getAttribute("rel");
      if (O && O.toLowerCase().indexOf("icon") > -1) {
        const A = w.getAttribute("href");
        if (A)
          if (A.toLowerCase().indexOf("https:") === -1 && A.toLowerCase().indexOf("http:") === -1 && A.indexOf("//") !== 0) {
            let L = t.protocol + "//" + t.host;
            if (A.indexOf("/") === 0)
              L += A;
            else {
              const _ = t.pathname.split("/");
              _.pop();
              const C = _.join("/");
              L += C + "/" + A;
            }
            y.push(L);
          } else if (A.indexOf("//") === 0) {
            const L = t.protocol + A;
            y.push(L);
          } else
            y.push(A);
      }
    }
    return y;
  }
  function n(...d) {
    const y = e.getElementsByTagName("meta");
    for (let m = 0; m < y.length; m++) {
      const w = y[m], O = ["itemprop", "property", "name"].map((A) => w.getAttribute(A)).filter((A) => A ? d.includes(A) : !1);
      if (O.length && O) {
        const A = w.getAttribute("content");
        if (A)
          return A;
      }
    }
    return "";
  }
  function i() {
    let d = n("name", "og:site_name", "og:title", "twitter:title");
    return d || (d = e.title), d;
  }
  function s() {
    return n("description", "og:description", "twitter:description", "keywords");
  }
  const o = i(), a = s(), u = t.origin, h = r();
  return {
    description: a,
    url: u,
    icons: h,
    name: o
  };
}
fl = _o.getWindowMetadata = x0;
var Vn = {}, D0 = (e) => encodeURIComponent(e).replace(/[!'()*]/g, (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`), hl = "%[a-f0-9]{2}", nc = new RegExp("(" + hl + ")|([^%]+?)", "gi"), ic = new RegExp("(" + hl + ")+", "gi");
function qs(e, t) {
  try {
    return [decodeURIComponent(e.join(""))];
  } catch {
  }
  if (e.length === 1)
    return e;
  t = t || 1;
  var r = e.slice(0, t), n = e.slice(t);
  return Array.prototype.concat.call([], qs(r), qs(n));
}
function O0(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    for (var t = e.match(nc) || [], r = 1; r < t.length; r++)
      e = qs(t, r).join(""), t = e.match(nc) || [];
    return e;
  }
}
function C0(e) {
  for (var t = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = ic.exec(e); r; ) {
    try {
      t[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var n = O0(r[0]);
      n !== r[0] && (t[r[0]] = n);
    }
    r = ic.exec(e);
  }
  t["%C2"] = "�";
  for (var i = Object.keys(t), s = 0; s < i.length; s++) {
    var o = i[s];
    e = e.replace(new RegExp(o, "g"), t[o]);
  }
  return e;
}
var A0 = function(e) {
  if (typeof e != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
  try {
    return e = e.replace(/\+/g, " "), decodeURIComponent(e);
  } catch {
    return C0(e);
  }
}, I0 = (e, t) => {
  if (!(typeof e == "string" && typeof t == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (t === "")
    return [e];
  const r = e.indexOf(t);
  return r === -1 ? [e] : [
    e.slice(0, r),
    e.slice(r + t.length)
  ];
}, T0 = function(e, t) {
  for (var r = {}, n = Object.keys(e), i = Array.isArray(t), s = 0; s < n.length; s++) {
    var o = n[s], a = e[o];
    (i ? t.indexOf(o) !== -1 : t(o, a, e)) && (r[o] = a);
  }
  return r;
};
(function(e) {
  const t = D0, r = A0, n = I0, i = T0, s = (_) => _ == null, o = Symbol("encodeFragmentIdentifier");
  function a(_) {
    switch (_.arrayFormat) {
      case "index":
        return (C) => (v, S) => {
          const p = v.length;
          return S === void 0 || _.skipNull && S === null || _.skipEmptyString && S === "" ? v : S === null ? [...v, [f(C, _), "[", p, "]"].join("")] : [
            ...v,
            [f(C, _), "[", f(p, _), "]=", f(S, _)].join("")
          ];
        };
      case "bracket":
        return (C) => (v, S) => S === void 0 || _.skipNull && S === null || _.skipEmptyString && S === "" ? v : S === null ? [...v, [f(C, _), "[]"].join("")] : [...v, [f(C, _), "[]=", f(S, _)].join("")];
      case "colon-list-separator":
        return (C) => (v, S) => S === void 0 || _.skipNull && S === null || _.skipEmptyString && S === "" ? v : S === null ? [...v, [f(C, _), ":list="].join("")] : [...v, [f(C, _), ":list=", f(S, _)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const C = _.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (v) => (S, p) => p === void 0 || _.skipNull && p === null || _.skipEmptyString && p === "" ? S : (p = p === null ? "" : p, S.length === 0 ? [[f(v, _), C, f(p, _)].join("")] : [[S, f(p, _)].join(_.arrayFormatSeparator)]);
      }
      default:
        return (C) => (v, S) => S === void 0 || _.skipNull && S === null || _.skipEmptyString && S === "" ? v : S === null ? [...v, f(C, _)] : [...v, [f(C, _), "=", f(S, _)].join("")];
    }
  }
  function u(_) {
    let C;
    switch (_.arrayFormat) {
      case "index":
        return (v, S, p) => {
          if (C = /\[(\d*)\]$/.exec(v), v = v.replace(/\[\d*\]$/, ""), !C) {
            p[v] = S;
            return;
          }
          p[v] === void 0 && (p[v] = {}), p[v][C[1]] = S;
        };
      case "bracket":
        return (v, S, p) => {
          if (C = /(\[\])$/.exec(v), v = v.replace(/\[\]$/, ""), !C) {
            p[v] = S;
            return;
          }
          if (p[v] === void 0) {
            p[v] = [S];
            return;
          }
          p[v] = [].concat(p[v], S);
        };
      case "colon-list-separator":
        return (v, S, p) => {
          if (C = /(:list)$/.exec(v), v = v.replace(/:list$/, ""), !C) {
            p[v] = S;
            return;
          }
          if (p[v] === void 0) {
            p[v] = [S];
            return;
          }
          p[v] = [].concat(p[v], S);
        };
      case "comma":
      case "separator":
        return (v, S, p) => {
          const c = typeof S == "string" && S.includes(_.arrayFormatSeparator), g = typeof S == "string" && !c && d(S, _).includes(_.arrayFormatSeparator);
          S = g ? d(S, _) : S;
          const F = c || g ? S.split(_.arrayFormatSeparator).map((M) => d(M, _)) : S === null ? S : d(S, _);
          p[v] = F;
        };
      case "bracket-separator":
        return (v, S, p) => {
          const c = /(\[\])$/.test(v);
          if (v = v.replace(/\[\]$/, ""), !c) {
            p[v] = S && d(S, _);
            return;
          }
          const g = S === null ? [] : S.split(_.arrayFormatSeparator).map((F) => d(F, _));
          if (p[v] === void 0) {
            p[v] = g;
            return;
          }
          p[v] = [].concat(p[v], g);
        };
      default:
        return (v, S, p) => {
          if (p[v] === void 0) {
            p[v] = S;
            return;
          }
          p[v] = [].concat(p[v], S);
        };
    }
  }
  function h(_) {
    if (typeof _ != "string" || _.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function f(_, C) {
    return C.encode ? C.strict ? t(_) : encodeURIComponent(_) : _;
  }
  function d(_, C) {
    return C.decode ? r(_) : _;
  }
  function y(_) {
    return Array.isArray(_) ? _.sort() : typeof _ == "object" ? y(Object.keys(_)).sort((C, v) => Number(C) - Number(v)).map((C) => _[C]) : _;
  }
  function m(_) {
    const C = _.indexOf("#");
    return C !== -1 && (_ = _.slice(0, C)), _;
  }
  function w(_) {
    let C = "";
    const v = _.indexOf("#");
    return v !== -1 && (C = _.slice(v)), C;
  }
  function O(_) {
    _ = m(_);
    const C = _.indexOf("?");
    return C === -1 ? "" : _.slice(C + 1);
  }
  function A(_, C) {
    return C.parseNumbers && !Number.isNaN(Number(_)) && typeof _ == "string" && _.trim() !== "" ? _ = Number(_) : C.parseBooleans && _ !== null && (_.toLowerCase() === "true" || _.toLowerCase() === "false") && (_ = _.toLowerCase() === "true"), _;
  }
  function L(_, C) {
    C = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, C), h(C.arrayFormatSeparator);
    const v = u(C), S = /* @__PURE__ */ Object.create(null);
    if (typeof _ != "string" || (_ = _.trim().replace(/^[?#&]/, ""), !_))
      return S;
    for (const p of _.split("&")) {
      if (p === "")
        continue;
      let [c, g] = n(C.decode ? p.replace(/\+/g, " ") : p, "=");
      g = g === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(C.arrayFormat) ? g : d(g, C), v(d(c, C), g, S);
    }
    for (const p of Object.keys(S)) {
      const c = S[p];
      if (typeof c == "object" && c !== null)
        for (const g of Object.keys(c))
          c[g] = A(c[g], C);
      else
        S[p] = A(c, C);
    }
    return C.sort === !1 ? S : (C.sort === !0 ? Object.keys(S).sort() : Object.keys(S).sort(C.sort)).reduce((p, c) => {
      const g = S[c];
      return g && typeof g == "object" && !Array.isArray(g) ? p[c] = y(g) : p[c] = g, p;
    }, /* @__PURE__ */ Object.create(null));
  }
  e.extract = O, e.parse = L, e.stringify = (_, C) => {
    if (!_)
      return "";
    C = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, C), h(C.arrayFormatSeparator);
    const v = (g) => C.skipNull && s(_[g]) || C.skipEmptyString && _[g] === "", S = a(C), p = {};
    for (const g of Object.keys(_))
      v(g) || (p[g] = _[g]);
    const c = Object.keys(p);
    return C.sort !== !1 && c.sort(C.sort), c.map((g) => {
      const F = _[g];
      return F === void 0 ? "" : F === null ? f(g, C) : Array.isArray(F) ? F.length === 0 && C.arrayFormat === "bracket-separator" ? f(g, C) + "[]" : F.reduce(S(g), []).join("&") : f(g, C) + "=" + f(F, C);
    }).filter((g) => g.length > 0).join("&");
  }, e.parseUrl = (_, C) => {
    C = Object.assign({
      decode: !0
    }, C);
    const [v, S] = n(_, "#");
    return Object.assign(
      {
        url: v.split("?")[0] || "",
        query: L(O(_), C)
      },
      C && C.parseFragmentIdentifier && S ? { fragmentIdentifier: d(S, C) } : {}
    );
  }, e.stringifyUrl = (_, C) => {
    C = Object.assign({
      encode: !0,
      strict: !0,
      [o]: !0
    }, C);
    const v = m(_.url).split("?")[0] || "", S = e.extract(_.url), p = e.parse(S, { sort: !1 }), c = Object.assign(p, _.query);
    let g = e.stringify(c, C);
    g && (g = `?${g}`);
    let F = w(_.url);
    return _.fragmentIdentifier && (F = `#${C[o] ? f(_.fragmentIdentifier, C) : _.fragmentIdentifier}`), `${v}${g}${F}`;
  }, e.pick = (_, C, v) => {
    v = Object.assign({
      parseFragmentIdentifier: !0,
      [o]: !1
    }, v);
    const { url: S, query: p, fragmentIdentifier: c } = e.parseUrl(_, v);
    return e.stringifyUrl({
      url: S,
      query: i(p, C),
      fragmentIdentifier: c
    }, v);
  }, e.exclude = (_, C, v) => {
    const S = Array.isArray(C) ? (p) => !C.includes(p) : (p, c) => !C(p, c);
    return e.pick(_, S, v);
  };
})(Vn);
const R0 = {
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
function dl(e, t) {
  return e.includes(":") ? [e] : t.chains || [];
}
const pl = "base10", Nt = "base16", zs = "base64pad", wo = "utf8", gl = 0, Jr = 1, N0 = 0, sc = 1, Ks = 12, Eo = 32;
function P0() {
  const e = vo.generateKeyPair();
  return { privateKey: Pt(e.secretKey, Nt), publicKey: Pt(e.publicKey, Nt) };
}
function Hs() {
  const e = mn.randomBytes(Eo);
  return Pt(e, Nt);
}
function F0(e, t) {
  const r = vo.sharedKey(Lt(e, Nt), Lt(t, Nt)), n = new e0(Ki.SHA256, r).expand(Eo);
  return Pt(n, Nt);
}
function L0(e) {
  const t = Ki.hash(Lt(e, Nt));
  return Pt(t, Nt);
}
function ln(e) {
  const t = Ki.hash(Lt(e, wo));
  return Pt(t, Nt);
}
function M0(e) {
  return Lt(`${e}`, pl);
}
function ti(e) {
  return Number(Pt(e, pl));
}
function U0(e) {
  const t = M0(typeof e.type < "u" ? e.type : gl);
  if (ti(t) === Jr && typeof e.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof e.senderPublicKey < "u" ? Lt(e.senderPublicKey, Nt) : void 0, n = typeof e.iv < "u" ? Lt(e.iv, Nt) : mn.randomBytes(Ks), i = new yo.ChaCha20Poly1305(Lt(e.symKey, Nt)).seal(n, Lt(e.message, wo));
  return j0({ type: t, sealed: i, iv: n, senderPublicKey: r });
}
function $0(e) {
  const t = new yo.ChaCha20Poly1305(Lt(e.symKey, Nt)), { sealed: r, iv: n } = Ei(e.encoded), i = t.open(n, r);
  if (i === null)
    throw new Error("Failed to decrypt");
  return Pt(i, wo);
}
function j0(e) {
  if (ti(e.type) === Jr) {
    if (typeof e.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return Pt(ks([e.type, e.senderPublicKey, e.iv, e.sealed]), zs);
  }
  return Pt(ks([e.type, e.iv, e.sealed]), zs);
}
function Ei(e) {
  const t = Lt(e, zs), r = t.slice(N0, sc), n = sc;
  if (ti(r) === Jr) {
    const a = n + Eo, u = a + Ks, h = t.slice(n, a), f = t.slice(a, u), d = t.slice(u);
    return { type: r, sealed: d, iv: f, senderPublicKey: h };
  }
  const i = n + Ks, s = t.slice(n, i), o = t.slice(i);
  return { type: r, sealed: o, iv: s };
}
function k0(e, t) {
  const r = Ei(e);
  return yl({ type: ti(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? Pt(r.senderPublicKey, Nt) : void 0, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey });
}
function yl(e) {
  const t = (e == null ? void 0 : e.type) || gl;
  if (t === Jr) {
    if (typeof (e == null ? void 0 : e.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (e == null ? void 0 : e.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: t, senderPublicKey: e == null ? void 0 : e.senderPublicKey, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey };
}
function oc(e) {
  return e.type === Jr && typeof e.senderPublicKey == "string" && typeof e.receiverPublicKey == "string";
}
var B0 = Object.defineProperty, ac = Object.getOwnPropertySymbols, q0 = Object.prototype.hasOwnProperty, z0 = Object.prototype.propertyIsEnumerable, cc = (e, t, r) => t in e ? B0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, uc = (e, t) => {
  for (var r in t || (t = {}))
    q0.call(t, r) && cc(e, r, t[r]);
  if (ac)
    for (var r of ac(t))
      z0.call(t, r) && cc(e, r, t[r]);
  return e;
};
const K0 = "ReactNative", Cr = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, H0 = "js";
function So() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function ml() {
  return !ul() && !!bo() && navigator.product === K0;
}
function xo() {
  return !So() && !!bo();
}
function Do() {
  return ml() ? Cr.reactNative : So() ? Cr.node : xo() ? Cr.browser : Cr.unknown;
}
function V0(e, t) {
  let r = Vn.parse(e);
  return r = uc(uc({}, r), t), e = Vn.stringify(r), e;
}
function W0() {
  return fl() || { name: "", description: "", url: "", icons: [""] };
}
function G0() {
  if (Do() === Cr.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: n } = global.Platform;
    return [r, n].join("-");
  }
  const e = u0();
  if (e === null)
    return "unknown";
  const t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
  return e.type === "browser" ? [t, e.name, e.version].join("-") : [t, e.version].join("-");
}
function Y0() {
  var e;
  const t = Do();
  return t === Cr.browser ? [t, ((e = ll()) == null ? void 0 : e.host) || "unknown"].join(":") : t;
}
function J0(e, t, r) {
  const n = G0(), i = Y0();
  return [[e, t].join("-"), [H0, r].join("-"), n, i].join("/");
}
function X0({ protocol: e, version: t, relayUrl: r, sdkVersion: n, auth: i, projectId: s, useOnCloseEvent: o }) {
  const a = r.split("?"), u = J0(e, t, n), h = { auth: i, ua: u, projectId: s, useOnCloseEvent: o || void 0 }, f = V0(a[1] || "", h);
  return a[0] + "?" + f;
}
function Kr(e, t) {
  return e.filter((r) => t.includes(r)).length === e.length;
}
function vl(e) {
  return Object.fromEntries(e.entries());
}
function bl(e) {
  return new Map(Object.entries(e));
}
function nn(e = te.FIVE_MINUTES, t) {
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
function Si(e, t, r) {
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
function _l(e, t) {
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
function Q0(e) {
  return _l("topic", e);
}
function Z0(e) {
  return _l("id", e);
}
function wl(e) {
  const [t, r] = e.split(":"), n = { id: void 0, topic: void 0 };
  if (t === "topic" && typeof r == "string")
    n.topic = r;
  else if (t === "id" && Number.isInteger(Number(r)))
    n.id = Number(r);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);
  return n;
}
function er(e, t) {
  return te.fromMiliseconds((t || Date.now()) + te.toMiliseconds(e));
}
function Or(e) {
  return Date.now() >= te.toMiliseconds(e);
}
function ot(e, t) {
  return `${e}${t ? `:${t}` : ""}`;
}
async function ey({ id: e, topic: t, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const n = typeof r == "string" ? JSON.parse(r) : r;
    let i = n == null ? void 0 : n.href;
    if (typeof i != "string")
      return;
    i.endsWith("/") && (i = i.slice(0, -1));
    const s = `${i}/wc?requestId=${e}&sessionTopic=${t}`, o = Do();
    o === Cr.browser ? s.startsWith("https://") ? window.open(s, "_blank", "noreferrer noopener") : window.open(s, "_self", "noreferrer noopener") : o === Cr.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(s);
  } catch (n) {
    console.error(n);
  }
}
const ty = "irn";
function Vs(e) {
  return (e == null ? void 0 : e.relay) || { protocol: ty };
}
function mi(e) {
  const t = R0[e];
  if (typeof t > "u")
    throw new Error(`Relay Protocol not supported: ${e}`);
  return t;
}
var ry = Object.defineProperty, lc = Object.getOwnPropertySymbols, ny = Object.prototype.hasOwnProperty, iy = Object.prototype.propertyIsEnumerable, fc = (e, t, r) => t in e ? ry(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, sy = (e, t) => {
  for (var r in t || (t = {}))
    ny.call(t, r) && fc(e, r, t[r]);
  if (lc)
    for (var r of lc(t))
      iy.call(t, r) && fc(e, r, t[r]);
  return e;
};
function oy(e, t = "-") {
  const r = {}, n = "relay" + t;
  return Object.keys(e).forEach((i) => {
    if (i.startsWith(n)) {
      const s = i.replace(n, ""), o = e[i];
      r[s] = o;
    }
  }), r;
}
function ay(e) {
  const t = e.indexOf(":"), r = e.indexOf("?") !== -1 ? e.indexOf("?") : void 0, n = e.substring(0, t), i = e.substring(t + 1, r).split("@"), s = typeof r < "u" ? e.substring(r) : "", o = Vn.parse(s);
  return { protocol: n, topic: cy(i[0]), version: parseInt(i[1], 10), symKey: o.symKey, relay: oy(o) };
}
function cy(e) {
  return e.startsWith("//") ? e.substring(2) : e;
}
function uy(e, t = "-") {
  const r = "relay", n = {};
  return Object.keys(e).forEach((i) => {
    const s = r + t + i;
    e[i] && (n[s] = e[i]);
  }), n;
}
function ly(e) {
  return `${e.protocol}:${e.topic}@${e.version}?` + Vn.stringify(sy({ symKey: e.symKey }, uy(e.relay)));
}
function bn(e) {
  const t = [];
  return e.forEach((r) => {
    const [n, i] = r.split(":");
    t.push(`${n}:${i}`);
  }), t;
}
function fy(e) {
  const t = [];
  return Object.values(e).forEach((r) => {
    t.push(...bn(r.accounts));
  }), t;
}
function hy(e, t) {
  const r = [];
  return Object.values(e).forEach((n) => {
    bn(n.accounts).includes(t) && r.push(...n.methods);
  }), r;
}
function dy(e, t) {
  const r = [];
  return Object.values(e).forEach((n) => {
    bn(n.accounts).includes(t) && r.push(...n.events);
  }), r;
}
function py(e, t) {
  const r = vi(e, t);
  if (r)
    throw new Error(r.message);
  const n = {};
  for (const [i, s] of Object.entries(e))
    n[i] = { methods: s.methods, events: s.events, chains: s.accounts.map((o) => `${o.split(":")[0]}:${o.split(":")[1]}`) };
  return n;
}
const gy = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, yy = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function X(e, t) {
  const { message: r, code: n } = yy[e];
  return { message: t ? `${r} ${t}` : r, code: n };
}
function ct(e, t) {
  const { message: r, code: n } = gy[e];
  return { message: t ? `${r} ${t}` : r, code: n };
}
function ri(e, t) {
  return Array.isArray(e) ? typeof t < "u" && e.length ? e.every(t) : !0 : !1;
}
function zn(e) {
  return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
}
function Tt(e) {
  return typeof e > "u";
}
function dt(e, t) {
  return t && Tt(e) ? !0 : typeof e == "string" && !!e.trim().length;
}
function Oo(e, t) {
  return t && Tt(e) ? !0 : typeof e == "number" && !isNaN(e);
}
function my(e, t) {
  const { requiredNamespaces: r } = t, n = Object.keys(e.namespaces), i = Object.keys(r);
  let s = !0;
  return Kr(i, n) ? (n.forEach((o) => {
    const { accounts: a, methods: u, events: h } = e.namespaces[o], f = bn(a), d = r[o];
    (!Kr(dl(o, d), f) || !Kr(d.methods, u) || !Kr(d.events, h)) && (s = !1);
  }), s) : !1;
}
function xi(e) {
  return dt(e, !1) && e.includes(":") ? e.split(":").length === 2 : !1;
}
function vy(e) {
  if (dt(e, !1) && e.includes(":")) {
    const t = e.split(":");
    if (t.length === 3) {
      const r = t[0] + ":" + t[1];
      return !!t[2] && xi(r);
    }
  }
  return !1;
}
function by(e) {
  if (dt(e, !1))
    try {
      return typeof new URL(e) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function _y(e) {
  var t;
  return (t = e == null ? void 0 : e.proposer) == null ? void 0 : t.publicKey;
}
function wy(e) {
  return e == null ? void 0 : e.topic;
}
function Ey(e, t) {
  let r = null;
  return dt(e == null ? void 0 : e.publicKey, !1) || (r = X("MISSING_OR_INVALID", `${t} controller public key should be a string`)), r;
}
function hc(e) {
  let t = !0;
  return ri(e) ? e.length && (t = e.every((r) => dt(r, !1))) : t = !1, t;
}
function Sy(e, t, r) {
  let n = null;
  return ri(t) && t.length ? t.forEach((i) => {
    n || xi(i) || (n = ct("UNSUPPORTED_CHAINS", `${r}, chain ${i} should be a string and conform to "namespace:chainId" format`));
  }) : xi(e) || (n = ct("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), n;
}
function xy(e, t, r) {
  let n = null;
  return Object.entries(e).forEach(([i, s]) => {
    if (n)
      return;
    const o = Sy(i, dl(i, s), `${t} ${r}`);
    o && (n = o);
  }), n;
}
function Dy(e, t) {
  let r = null;
  return ri(e) ? e.forEach((n) => {
    r || vy(n) || (r = ct("UNSUPPORTED_ACCOUNTS", `${t}, account ${n} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = ct("UNSUPPORTED_ACCOUNTS", `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function Oy(e, t) {
  let r = null;
  return Object.values(e).forEach((n) => {
    if (r)
      return;
    const i = Dy(n == null ? void 0 : n.accounts, `${t} namespace`);
    i && (r = i);
  }), r;
}
function Cy(e, t) {
  let r = null;
  return hc(e == null ? void 0 : e.methods) ? hc(e == null ? void 0 : e.events) || (r = ct("UNSUPPORTED_EVENTS", `${t}, events should be an array of strings or empty array for no events`)) : r = ct("UNSUPPORTED_METHODS", `${t}, methods should be an array of strings or empty array for no methods`), r;
}
function El(e, t) {
  let r = null;
  return Object.values(e).forEach((n) => {
    if (r)
      return;
    const i = Cy(n, `${t}, namespace`);
    i && (r = i);
  }), r;
}
function Ay(e, t, r) {
  let n = null;
  if (e && zn(e)) {
    const i = El(e, t);
    i && (n = i);
    const s = xy(e, t, r);
    s && (n = s);
  } else
    n = X("MISSING_OR_INVALID", `${t}, ${r} should be an object with data`);
  return n;
}
function vi(e, t) {
  let r = null;
  if (e && zn(e)) {
    const n = El(e, t);
    n && (r = n);
    const i = Oy(e, t);
    i && (r = i);
  } else
    r = X("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
  return r;
}
function Sl(e) {
  return dt(e.protocol, !0);
}
function Iy(e, t) {
  let r = !1;
  return t && !e ? r = !0 : e && ri(e) && e.length && e.forEach((n) => {
    r = Sl(n);
  }), r;
}
function Ty(e) {
  return typeof e == "number";
}
function Ft(e) {
  return typeof e < "u" && typeof e !== null;
}
function Ry(e) {
  return !(!e || typeof e != "object" || !e.code || !Oo(e.code, !1) || !e.message || !dt(e.message, !1));
}
function Ny(e) {
  return !(Tt(e) || !dt(e.method, !1));
}
function Py(e) {
  return !(Tt(e) || Tt(e.result) && Tt(e.error) || !Oo(e.id, !1) || !dt(e.jsonrpc, !1));
}
function Fy(e) {
  return !(Tt(e) || !dt(e.name, !1));
}
function dc(e, t) {
  return !(!xi(t) || !fy(e).includes(t));
}
function Ly(e, t, r) {
  return dt(r, !1) ? hy(e, t).includes(r) : !1;
}
function My(e, t, r) {
  return dt(r, !1) ? dy(e, t).includes(r) : !1;
}
function pc(e, t, r) {
  let n = null;
  const i = Uy(e), s = $y(t), o = Object.keys(i), a = Object.keys(s), u = gc(Object.keys(e)), h = gc(Object.keys(t)), f = u.filter((d) => !h.includes(d));
  return f.length && (n = X("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${f.toString()}
      Received: ${Object.keys(t).toString()}`)), Kr(o, a) || (n = X("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`)), Object.keys(t).forEach((d) => {
    if (!d.includes(":") || n)
      return;
    const y = bn(t[d].accounts);
    y.includes(d) || (n = X("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${d}
        Required: ${d}
        Approved: ${y.toString()}`));
  }), o.forEach((d) => {
    n || (Kr(i[d].methods, s[d].methods) ? Kr(i[d].events, s[d].events) || (n = X("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${d}`)) : n = X("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${d}`));
  }), n;
}
function Uy(e) {
  const t = {};
  return Object.keys(e).forEach((r) => {
    var n;
    r.includes(":") ? t[r] = e[r] : (n = e[r].chains) == null || n.forEach((i) => {
      t[i] = { methods: e[r].methods, events: e[r].events };
    });
  }), t;
}
function gc(e) {
  return [...new Set(e.map((t) => t.includes(":") ? t.split(":")[0] : t))];
}
function $y(e) {
  const t = {};
  return Object.keys(e).forEach((r) => {
    if (r.includes(":"))
      t[r] = e[r];
    else {
      const n = bn(e[r].accounts);
      n == null || n.forEach((i) => {
        t[i] = { accounts: e[r].accounts.filter((s) => s.includes(`${i}:`)), methods: e[r].methods, events: e[r].events };
      });
    }
  }), t;
}
function jy(e, t) {
  return Oo(e, !1) && e <= t.max && e >= t.min;
}
const ky = "PARSE_ERROR", By = "INVALID_REQUEST", qy = "METHOD_NOT_FOUND", zy = "INVALID_PARAMS", xl = "INTERNAL_ERROR", Co = "SERVER_ERROR", Ky = [-32700, -32600, -32601, -32602, -32603], Kn = {
  [ky]: { code: -32700, message: "Parse error" },
  [By]: { code: -32600, message: "Invalid Request" },
  [qy]: { code: -32601, message: "Method not found" },
  [zy]: { code: -32602, message: "Invalid params" },
  [xl]: { code: -32603, message: "Internal error" },
  [Co]: { code: -32e3, message: "Server error" }
}, Dl = Co;
function Hy(e) {
  return Ky.includes(e);
}
function yc(e) {
  return Object.keys(Kn).includes(e) ? Kn[e] : Kn[Dl];
}
function Vy(e) {
  const t = Object.values(Kn).find((r) => r.code === e);
  return t || Kn[Dl];
}
function Wy(e, t, r) {
  return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${t}`) : e;
}
var Ol = {}, gr = {}, mc;
function Gy() {
  if (mc)
    return gr;
  mc = 1, Object.defineProperty(gr, "__esModule", { value: !0 }), gr.isBrowserCryptoAvailable = gr.getSubtleCrypto = gr.getBrowerCrypto = void 0;
  function e() {
    return (jt == null ? void 0 : jt.crypto) || (jt == null ? void 0 : jt.msCrypto) || {};
  }
  gr.getBrowerCrypto = e;
  function t() {
    const n = e();
    return n.subtle || n.webkitSubtle;
  }
  gr.getSubtleCrypto = t;
  function r() {
    return !!e() && !!t();
  }
  return gr.isBrowserCryptoAvailable = r, gr;
}
var yr = {}, vc;
function Yy() {
  if (vc)
    return yr;
  vc = 1, Object.defineProperty(yr, "__esModule", { value: !0 }), yr.isBrowser = yr.isNode = yr.isReactNative = void 0;
  function e() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  yr.isReactNative = e;
  function t() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  yr.isNode = t;
  function r() {
    return !e() && !t();
  }
  return yr.isBrowser = r, yr;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = Xt;
  t.__exportStar(Gy(), e), t.__exportStar(Yy(), e);
})(Ol);
function Cl(e = 3) {
  const t = Date.now() * Math.pow(10, e), r = Math.floor(Math.random() * Math.pow(10, e));
  return t + r;
}
function Ao(e = 6) {
  return BigInt(Cl(e));
}
function Hi(e, t, r) {
  return {
    id: r || Cl(),
    jsonrpc: "2.0",
    method: e,
    params: t
  };
}
function Io(e, t) {
  return {
    id: e,
    jsonrpc: "2.0",
    result: t
  };
}
function To(e, t, r) {
  return {
    id: e,
    jsonrpc: "2.0",
    error: Jy(t, r)
  };
}
function Jy(e, t) {
  return typeof e > "u" ? yc(xl) : (typeof e == "string" && (e = Object.assign(Object.assign({}, yc(Co)), { message: e })), typeof t < "u" && (e.data = t), Hy(e.code) && (e = Vy(e.code)), e);
}
class Xy {
}
class Qy extends Xy {
  constructor() {
    super();
  }
}
class Zy extends Qy {
  constructor(t) {
    super();
  }
}
const e1 = "^wss?:";
function t1(e) {
  const t = e.match(new RegExp(/^\w+:/, "gi"));
  if (!(!t || !t.length))
    return t[0];
}
function r1(e, t) {
  const r = t1(e);
  return typeof r > "u" ? !1 : new RegExp(t).test(r);
}
function bc(e) {
  return r1(e, e1);
}
function n1(e) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(e);
}
function Al(e) {
  return typeof e == "object" && "id" in e && "jsonrpc" in e && e.jsonrpc === "2.0";
}
function Ro(e) {
  return Al(e) && "method" in e;
}
function Vi(e) {
  return Al(e) && (mr(e) || tr(e));
}
function mr(e) {
  return "result" in e;
}
function tr(e) {
  return "error" in e;
}
class i1 extends Zy {
  constructor(t) {
    super(t), this.events = new nr.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(t), this.connection.connected && this.registerEventListeners();
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
    return this.requestStrict(Hi(t.method, t.params || [], t.id || Ao().toString()), r);
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
        tr(s) ? i(s.error) : n(s.result);
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
    this.events.emit("payload", t), Vi(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", {
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
const s1 = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), o1 = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", _c = (e) => e.split("?")[0], wc = 10, a1 = s1();
class c1 {
  constructor(t) {
    if (this.url = t, this.events = new nr.EventEmitter(), this.registering = !1, !bc(t))
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
      this.socket.send(ho(t));
    } catch (n) {
      this.onError(t.id, n);
    }
  }
  register(t = this.url) {
    if (!bc(t))
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
      const i = Ol.isReactNative() ? void 0 : { rejectUnauthorized: !n1(t) }, s = new a1(t, [], i);
      o1() ? s.onerror = (o) => {
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
    const r = typeof t.data == "string" ? qu(t.data) : t.data;
    this.events.emit("payload", r);
  }
  onError(t, r) {
    const n = this.parseError(r), i = n.message || n.toString(), s = To(t, i);
    this.events.emit("payload", s);
  }
  parseError(t, r = this.url) {
    return Wy(t, _c(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > wc && this.events.setMaxListeners(wc);
  }
  emitError(t) {
    const r = this.parseError(new Error((t == null ? void 0 : t.message) || `WebSocket connection failed for host: ${_c(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var Di = { exports: {} };
Di.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", i = 1, s = 2, o = 9007199254740991, a = "[object Arguments]", u = "[object Array]", h = "[object AsyncFunction]", f = "[object Boolean]", d = "[object Date]", y = "[object Error]", m = "[object Function]", w = "[object GeneratorFunction]", O = "[object Map]", A = "[object Number]", L = "[object Null]", _ = "[object Object]", C = "[object Promise]", v = "[object Proxy]", S = "[object RegExp]", p = "[object Set]", c = "[object String]", g = "[object Symbol]", F = "[object Undefined]", M = "[object WeakMap]", U = "[object ArrayBuffer]", $ = "[object DataView]", B = "[object Float32Array]", x = "[object Float64Array]", R = "[object Int8Array]", G = "[object Int16Array]", z = "[object Int32Array]", q = "[object Uint8Array]", H = "[object Uint8ClampedArray]", k = "[object Uint16Array]", V = "[object Uint32Array]", ae = /[\\^$.*+?()[\]{}|]/g, W = /^\[object .+?Constructor\]$/, ie = /^(?:0|[1-9]\d*)$/, Z = {};
  Z[B] = Z[x] = Z[R] = Z[G] = Z[z] = Z[q] = Z[H] = Z[k] = Z[V] = !0, Z[a] = Z[u] = Z[U] = Z[f] = Z[$] = Z[d] = Z[y] = Z[m] = Z[O] = Z[A] = Z[_] = Z[S] = Z[p] = Z[c] = Z[M] = !1;
  var ne = typeof jt == "object" && jt && jt.Object === Object && jt, P = typeof self == "object" && self && self.Object === Object && self, N = ne || P || Function("return this")(), I = t && !t.nodeType && t, l = I && !0 && e && !e.nodeType && e, D = l && l.exports === I, Y = D && ne.process, Q = function() {
    try {
      return Y && Y.binding && Y.binding("util");
    } catch {
    }
  }(), ve = Q && Q.isTypedArray;
  function be(b, T) {
    for (var K = -1, ee = b == null ? 0 : b.length, ke = 0, he = []; ++K < ee; ) {
      var Xe = b[K];
      T(Xe, K, b) && (he[ke++] = Xe);
    }
    return he;
  }
  function de(b, T) {
    for (var K = -1, ee = T.length, ke = b.length; ++K < ee; )
      b[ke + K] = T[K];
    return b;
  }
  function Ce(b, T) {
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
  function Le(b) {
    return function(T) {
      return b(T);
    };
  }
  function De(b, T) {
    return b.has(T);
  }
  function Ee(b, T) {
    return b == null ? void 0 : b[T];
  }
  function pe(b) {
    var T = -1, K = Array(b.size);
    return b.forEach(function(ee, ke) {
      K[++T] = [ke, ee];
    }), K;
  }
  function ye(b, T) {
    return function(K) {
      return b(T(K));
    };
  }
  function ge(b) {
    var T = -1, K = Array(b.size);
    return b.forEach(function(ee) {
      K[++T] = ee;
    }), K;
  }
  var le = Array.prototype, ue = Function.prototype, se = Object.prototype, me = N["__core-js_shared__"], _e = ue.toString, ce = se.hasOwnProperty, Se = function() {
    var b = /[^.]+$/.exec(me && me.keys && me.keys.IE_PROTO || "");
    return b ? "Symbol(src)_1." + b : "";
  }(), Ae = se.toString, Ne = RegExp(
    "^" + _e.call(ce).replace(ae, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Pe = D ? N.Buffer : void 0, Ie = N.Symbol, Ut = N.Uint8Array, zt = se.propertyIsEnumerable, ir = le.splice, pt = Ie ? Ie.toStringTag : void 0, sr = Object.getOwnPropertySymbols, Kt = Pe ? Pe.isBuffer : void 0, _r = ye(Object.keys, Object), qe = Qr(N, "DataView"), $e = Qr(N, "Map"), We = Qr(N, "Promise"), Ke = Qr(N, "Set"), Ge = Qr(N, "WeakMap"), je = Qr(Object, "create"), Ze = Pr(qe), rt = Pr($e), nt = Pr(We), et = Pr(Ke), it = Pr(Ge), tt = Ie ? Ie.prototype : void 0, Ye = tt ? tt.valueOf : void 0;
  function Me(b) {
    var T = -1, K = b == null ? 0 : b.length;
    for (this.clear(); ++T < K; ) {
      var ee = b[T];
      this.set(ee[0], ee[1]);
    }
  }
  function E() {
    this.__data__ = je ? je(null) : {}, this.size = 0;
  }
  function j(b) {
    var T = this.has(b) && delete this.__data__[b];
    return this.size -= T ? 1 : 0, T;
  }
  function J(b) {
    var T = this.__data__;
    if (je) {
      var K = T[b];
      return K === n ? void 0 : K;
    }
    return ce.call(T, b) ? T[b] : void 0;
  }
  function oe(b) {
    var T = this.__data__;
    return je ? T[b] !== void 0 : ce.call(T, b);
  }
  function Te(b, T) {
    var K = this.__data__;
    return this.size += this.has(b) ? 0 : 1, K[b] = je && T === void 0 ? n : T, this;
  }
  Me.prototype.clear = E, Me.prototype.delete = j, Me.prototype.get = J, Me.prototype.has = oe, Me.prototype.set = Te;
  function xe(b) {
    var T = -1, K = b == null ? 0 : b.length;
    for (this.clear(); ++T < K; ) {
      var ee = b[T];
      this.set(ee[0], ee[1]);
    }
  }
  function Oe() {
    this.__data__ = [], this.size = 0;
  }
  function we(b) {
    var T = this.__data__, K = oi(T, b);
    if (K < 0)
      return !1;
    var ee = T.length - 1;
    return K == ee ? T.pop() : ir.call(T, K, 1), --this.size, !0;
  }
  function gt(b) {
    var T = this.__data__, K = oi(T, b);
    return K < 0 ? void 0 : T[K][1];
  }
  function He(b) {
    return oi(this.__data__, b) > -1;
  }
  function Je(b, T) {
    var K = this.__data__, ee = oi(K, b);
    return ee < 0 ? (++this.size, K.push([b, T])) : K[ee][1] = T, this;
  }
  xe.prototype.clear = Oe, xe.prototype.delete = we, xe.prototype.get = gt, xe.prototype.has = He, xe.prototype.set = Je;
  function st(b) {
    var T = -1, K = b == null ? 0 : b.length;
    for (this.clear(); ++T < K; ) {
      var ee = b[T];
      this.set(ee[0], ee[1]);
    }
  }
  function wr() {
    this.size = 0, this.__data__ = {
      hash: new Me(),
      map: new ($e || xe)(),
      string: new Me()
    };
  }
  function ii(b) {
    var T = ai(this, b).delete(b);
    return this.size -= T ? 1 : 0, T;
  }
  function Qt(b) {
    return ai(this, b).get(b);
  }
  function zf(b) {
    return ai(this, b).has(b);
  }
  function Kf(b, T) {
    var K = ai(this, b), ee = K.size;
    return K.set(b, T), this.size += K.size == ee ? 0 : 1, this;
  }
  st.prototype.clear = wr, st.prototype.delete = ii, st.prototype.get = Qt, st.prototype.has = zf, st.prototype.set = Kf;
  function si(b) {
    var T = -1, K = b == null ? 0 : b.length;
    for (this.__data__ = new st(); ++T < K; )
      this.add(b[T]);
  }
  function Hf(b) {
    return this.__data__.set(b, n), this;
  }
  function Vf(b) {
    return this.__data__.has(b);
  }
  si.prototype.add = si.prototype.push = Hf, si.prototype.has = Vf;
  function Er(b) {
    var T = this.__data__ = new xe(b);
    this.size = T.size;
  }
  function Wf() {
    this.__data__ = new xe(), this.size = 0;
  }
  function Gf(b) {
    var T = this.__data__, K = T.delete(b);
    return this.size = T.size, K;
  }
  function Yf(b) {
    return this.__data__.get(b);
  }
  function Jf(b) {
    return this.__data__.has(b);
  }
  function Xf(b, T) {
    var K = this.__data__;
    if (K instanceof xe) {
      var ee = K.__data__;
      if (!$e || ee.length < r - 1)
        return ee.push([b, T]), this.size = ++K.size, this;
      K = this.__data__ = new st(ee);
    }
    return K.set(b, T), this.size = K.size, this;
  }
  Er.prototype.clear = Wf, Er.prototype.delete = Gf, Er.prototype.get = Yf, Er.prototype.has = Jf, Er.prototype.set = Xf;
  function Qf(b, T) {
    var K = ci(b), ee = !K && dh(b), ke = !K && !ee && Ji(b), he = !K && !ee && !ke && oa(b), Xe = K || ee || ke || he, lt = Xe ? Be(b.length, String) : [], yt = lt.length;
    for (var Ve in b)
      (T || ce.call(b, Ve)) && !(Xe && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Ve == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      ke && (Ve == "offset" || Ve == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      he && (Ve == "buffer" || Ve == "byteLength" || Ve == "byteOffset") || // Skip index properties.
      ch(Ve, yt))) && lt.push(Ve);
    return lt;
  }
  function oi(b, T) {
    for (var K = b.length; K--; )
      if (ra(b[K][0], T))
        return K;
    return -1;
  }
  function Zf(b, T, K) {
    var ee = T(b);
    return ci(b) ? ee : de(ee, K(b));
  }
  function wn(b) {
    return b == null ? b === void 0 ? F : L : pt && pt in Object(b) ? oh(b) : hh(b);
  }
  function Qo(b) {
    return En(b) && wn(b) == a;
  }
  function Zo(b, T, K, ee, ke) {
    return b === T ? !0 : b == null || T == null || !En(b) && !En(T) ? b !== b && T !== T : eh(b, T, K, ee, Zo, ke);
  }
  function eh(b, T, K, ee, ke, he) {
    var Xe = ci(b), lt = ci(T), yt = Xe ? u : Sr(b), Ve = lt ? u : Sr(T);
    yt = yt == a ? _ : yt, Ve = Ve == a ? _ : Ve;
    var $t = yt == _, Zt = Ve == _, wt = yt == Ve;
    if (wt && Ji(b)) {
      if (!Ji(T))
        return !1;
      Xe = !0, $t = !1;
    }
    if (wt && !$t)
      return he || (he = new Er()), Xe || oa(b) ? ea(b, T, K, ee, ke, he) : ih(b, T, yt, K, ee, ke, he);
    if (!(K & i)) {
      var Ht = $t && ce.call(b, "__wrapped__"), Vt = Zt && ce.call(T, "__wrapped__");
      if (Ht || Vt) {
        var xr = Ht ? b.value() : b, pr = Vt ? T.value() : T;
        return he || (he = new Er()), ke(xr, pr, K, ee, he);
      }
    }
    return wt ? (he || (he = new Er()), sh(b, T, K, ee, ke, he)) : !1;
  }
  function th(b) {
    if (!sa(b) || lh(b))
      return !1;
    var T = na(b) ? Ne : W;
    return T.test(Pr(b));
  }
  function rh(b) {
    return En(b) && ia(b.length) && !!Z[wn(b)];
  }
  function nh(b) {
    if (!fh(b))
      return _r(b);
    var T = [];
    for (var K in Object(b))
      ce.call(b, K) && K != "constructor" && T.push(K);
    return T;
  }
  function ea(b, T, K, ee, ke, he) {
    var Xe = K & i, lt = b.length, yt = T.length;
    if (lt != yt && !(Xe && yt > lt))
      return !1;
    var Ve = he.get(b);
    if (Ve && he.get(T))
      return Ve == T;
    var $t = -1, Zt = !0, wt = K & s ? new si() : void 0;
    for (he.set(b, T), he.set(T, b); ++$t < lt; ) {
      var Ht = b[$t], Vt = T[$t];
      if (ee)
        var xr = Xe ? ee(Vt, Ht, $t, T, b, he) : ee(Ht, Vt, $t, b, T, he);
      if (xr !== void 0) {
        if (xr)
          continue;
        Zt = !1;
        break;
      }
      if (wt) {
        if (!Ce(T, function(pr, Fr) {
          if (!De(wt, Fr) && (Ht === pr || ke(Ht, pr, K, ee, he)))
            return wt.push(Fr);
        })) {
          Zt = !1;
          break;
        }
      } else if (!(Ht === Vt || ke(Ht, Vt, K, ee, he))) {
        Zt = !1;
        break;
      }
    }
    return he.delete(b), he.delete(T), Zt;
  }
  function ih(b, T, K, ee, ke, he, Xe) {
    switch (K) {
      case $:
        if (b.byteLength != T.byteLength || b.byteOffset != T.byteOffset)
          return !1;
        b = b.buffer, T = T.buffer;
      case U:
        return !(b.byteLength != T.byteLength || !he(new Ut(b), new Ut(T)));
      case f:
      case d:
      case A:
        return ra(+b, +T);
      case y:
        return b.name == T.name && b.message == T.message;
      case S:
      case c:
        return b == T + "";
      case O:
        var lt = pe;
      case p:
        var yt = ee & i;
        if (lt || (lt = ge), b.size != T.size && !yt)
          return !1;
        var Ve = Xe.get(b);
        if (Ve)
          return Ve == T;
        ee |= s, Xe.set(b, T);
        var $t = ea(lt(b), lt(T), ee, ke, he, Xe);
        return Xe.delete(b), $t;
      case g:
        if (Ye)
          return Ye.call(b) == Ye.call(T);
    }
    return !1;
  }
  function sh(b, T, K, ee, ke, he) {
    var Xe = K & i, lt = ta(b), yt = lt.length, Ve = ta(T), $t = Ve.length;
    if (yt != $t && !Xe)
      return !1;
    for (var Zt = yt; Zt--; ) {
      var wt = lt[Zt];
      if (!(Xe ? wt in T : ce.call(T, wt)))
        return !1;
    }
    var Ht = he.get(b);
    if (Ht && he.get(T))
      return Ht == T;
    var Vt = !0;
    he.set(b, T), he.set(T, b);
    for (var xr = Xe; ++Zt < yt; ) {
      wt = lt[Zt];
      var pr = b[wt], Fr = T[wt];
      if (ee)
        var aa = Xe ? ee(Fr, pr, wt, T, b, he) : ee(pr, Fr, wt, b, T, he);
      if (!(aa === void 0 ? pr === Fr || ke(pr, Fr, K, ee, he) : aa)) {
        Vt = !1;
        break;
      }
      xr || (xr = wt == "constructor");
    }
    if (Vt && !xr) {
      var ui = b.constructor, li = T.constructor;
      ui != li && "constructor" in b && "constructor" in T && !(typeof ui == "function" && ui instanceof ui && typeof li == "function" && li instanceof li) && (Vt = !1);
    }
    return he.delete(b), he.delete(T), Vt;
  }
  function ta(b) {
    return Zf(b, yh, ah);
  }
  function ai(b, T) {
    var K = b.__data__;
    return uh(T) ? K[typeof T == "string" ? "string" : "hash"] : K.map;
  }
  function Qr(b, T) {
    var K = Ee(b, T);
    return th(K) ? K : void 0;
  }
  function oh(b) {
    var T = ce.call(b, pt), K = b[pt];
    try {
      b[pt] = void 0;
      var ee = !0;
    } catch {
    }
    var ke = Ae.call(b);
    return ee && (T ? b[pt] = K : delete b[pt]), ke;
  }
  var ah = sr ? function(b) {
    return b == null ? [] : (b = Object(b), be(sr(b), function(T) {
      return zt.call(b, T);
    }));
  } : mh, Sr = wn;
  (qe && Sr(new qe(new ArrayBuffer(1))) != $ || $e && Sr(new $e()) != O || We && Sr(We.resolve()) != C || Ke && Sr(new Ke()) != p || Ge && Sr(new Ge()) != M) && (Sr = function(b) {
    var T = wn(b), K = T == _ ? b.constructor : void 0, ee = K ? Pr(K) : "";
    if (ee)
      switch (ee) {
        case Ze:
          return $;
        case rt:
          return O;
        case nt:
          return C;
        case et:
          return p;
        case it:
          return M;
      }
    return T;
  });
  function ch(b, T) {
    return T = T ?? o, !!T && (typeof b == "number" || ie.test(b)) && b > -1 && b % 1 == 0 && b < T;
  }
  function uh(b) {
    var T = typeof b;
    return T == "string" || T == "number" || T == "symbol" || T == "boolean" ? b !== "__proto__" : b === null;
  }
  function lh(b) {
    return !!Se && Se in b;
  }
  function fh(b) {
    var T = b && b.constructor, K = typeof T == "function" && T.prototype || se;
    return b === K;
  }
  function hh(b) {
    return Ae.call(b);
  }
  function Pr(b) {
    if (b != null) {
      try {
        return _e.call(b);
      } catch {
      }
      try {
        return b + "";
      } catch {
      }
    }
    return "";
  }
  function ra(b, T) {
    return b === T || b !== b && T !== T;
  }
  var dh = Qo(function() {
    return arguments;
  }()) ? Qo : function(b) {
    return En(b) && ce.call(b, "callee") && !zt.call(b, "callee");
  }, ci = Array.isArray;
  function ph(b) {
    return b != null && ia(b.length) && !na(b);
  }
  var Ji = Kt || vh;
  function gh(b, T) {
    return Zo(b, T);
  }
  function na(b) {
    if (!sa(b))
      return !1;
    var T = wn(b);
    return T == m || T == w || T == h || T == v;
  }
  function ia(b) {
    return typeof b == "number" && b > -1 && b % 1 == 0 && b <= o;
  }
  function sa(b) {
    var T = typeof b;
    return b != null && (T == "object" || T == "function");
  }
  function En(b) {
    return b != null && typeof b == "object";
  }
  var oa = ve ? Le(ve) : rh;
  function yh(b) {
    return ph(b) ? Qf(b) : nh(b);
  }
  function mh() {
    return [];
  }
  function vh() {
    return !1;
  }
  e.exports = gh;
})(Di, Di.exports);
var u1 = Di.exports;
const l1 = /* @__PURE__ */ Mi(u1);
function f1(e, t) {
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
  var a = e.length, u = e.charAt(0), h = Math.log(a) / Math.log(256), f = Math.log(256) / Math.log(a);
  function d(w) {
    if (w instanceof Uint8Array || (ArrayBuffer.isView(w) ? w = new Uint8Array(w.buffer, w.byteOffset, w.byteLength) : Array.isArray(w) && (w = Uint8Array.from(w))), !(w instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (w.length === 0)
      return "";
    for (var O = 0, A = 0, L = 0, _ = w.length; L !== _ && w[L] === 0; )
      L++, O++;
    for (var C = (_ - L) * f + 1 >>> 0, v = new Uint8Array(C); L !== _; ) {
      for (var S = w[L], p = 0, c = C - 1; (S !== 0 || p < A) && c !== -1; c--, p++)
        S += 256 * v[c] >>> 0, v[c] = S % a >>> 0, S = S / a >>> 0;
      if (S !== 0)
        throw new Error("Non-zero carry");
      A = p, L++;
    }
    for (var g = C - A; g !== C && v[g] === 0; )
      g++;
    for (var F = u.repeat(O); g < C; ++g)
      F += e.charAt(v[g]);
    return F;
  }
  function y(w) {
    if (typeof w != "string")
      throw new TypeError("Expected String");
    if (w.length === 0)
      return new Uint8Array();
    var O = 0;
    if (w[O] !== " ") {
      for (var A = 0, L = 0; w[O] === u; )
        A++, O++;
      for (var _ = (w.length - O) * h + 1 >>> 0, C = new Uint8Array(_); w[O]; ) {
        var v = r[w.charCodeAt(O)];
        if (v === 255)
          return;
        for (var S = 0, p = _ - 1; (v !== 0 || S < L) && p !== -1; p--, S++)
          v += a * C[p] >>> 0, C[p] = v % 256 >>> 0, v = v / 256 >>> 0;
        if (v !== 0)
          throw new Error("Non-zero carry");
        L = S, O++;
      }
      if (w[O] !== " ") {
        for (var c = _ - L; c !== _ && C[c] === 0; )
          c++;
        for (var g = new Uint8Array(A + (_ - c)), F = A; c !== _; )
          g[F++] = C[c++];
        return g;
      }
    }
  }
  function m(w) {
    var O = y(w);
    if (O)
      return O;
    throw new Error(`Non-${t} character`);
  }
  return { encode: d, decodeUnsafe: y, decode: m };
}
var h1 = f1, d1 = h1;
const Il = (e) => {
  if (e instanceof Uint8Array && e.constructor.name === "Uint8Array")
    return e;
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  if (ArrayBuffer.isView(e))
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  throw new Error("Unknown type, must be binary type");
}, p1 = (e) => new TextEncoder().encode(e), g1 = (e) => new TextDecoder().decode(e);
class y1 {
  constructor(t, r, n) {
    this.name = t, this.prefix = r, this.baseEncode = n;
  }
  encode(t) {
    if (t instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class m1 {
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
    return Tl(this, t);
  }
}
class v1 {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return Tl(this, t);
  }
  decode(t) {
    const r = t[0], n = this.decoders[r];
    if (n)
      return n.decode(t);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Tl = (e, t) => new v1({ ...e.decoders || { [e.prefix]: e }, ...t.decoders || { [t.prefix]: t } });
class b1 {
  constructor(t, r, n, i) {
    this.name = t, this.prefix = r, this.baseEncode = n, this.baseDecode = i, this.encoder = new y1(t, r, n), this.decoder = new m1(t, r, i);
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const Wi = ({ name: e, prefix: t, encode: r, decode: n }) => new b1(e, t, r, n), ni = ({ prefix: e, name: t, alphabet: r }) => {
  const { encode: n, decode: i } = d1(r, t);
  return Wi({ prefix: e, name: t, encode: n, decode: (s) => Il(i(s)) });
}, _1 = (e, t, r, n) => {
  const i = {};
  for (let f = 0; f < t.length; ++f)
    i[t[f]] = f;
  let s = e.length;
  for (; e[s - 1] === "="; )
    --s;
  const o = new Uint8Array(s * r / 8 | 0);
  let a = 0, u = 0, h = 0;
  for (let f = 0; f < s; ++f) {
    const d = i[e[f]];
    if (d === void 0)
      throw new SyntaxError(`Non-${n} character`);
    u = u << r | d, a += r, a >= 8 && (a -= 8, o[h++] = 255 & u >> a);
  }
  if (a >= r || 255 & u << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return o;
}, w1 = (e, t, r) => {
  const n = t[t.length - 1] === "=", i = (1 << r) - 1;
  let s = "", o = 0, a = 0;
  for (let u = 0; u < e.length; ++u)
    for (a = a << 8 | e[u], o += 8; o > r; )
      o -= r, s += t[i & a >> o];
  if (o && (s += t[i & a << r - o]), n)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, _t = ({ name: e, prefix: t, bitsPerChar: r, alphabet: n }) => Wi({ prefix: t, name: e, encode(i) {
  return w1(i, n, r);
}, decode(i) {
  return _1(i, n, r, e);
} }), E1 = Wi({ prefix: "\0", name: "identity", encode: (e) => g1(e), decode: (e) => p1(e) });
var S1 = Object.freeze({ __proto__: null, identity: E1 });
const x1 = _t({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var D1 = Object.freeze({ __proto__: null, base2: x1 });
const O1 = _t({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var C1 = Object.freeze({ __proto__: null, base8: O1 });
const A1 = ni({ prefix: "9", name: "base10", alphabet: "0123456789" });
var I1 = Object.freeze({ __proto__: null, base10: A1 });
const T1 = _t({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), R1 = _t({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var N1 = Object.freeze({ __proto__: null, base16: T1, base16upper: R1 });
const P1 = _t({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), F1 = _t({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), L1 = _t({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), M1 = _t({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), U1 = _t({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), $1 = _t({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), j1 = _t({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), k1 = _t({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), B1 = _t({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var q1 = Object.freeze({ __proto__: null, base32: P1, base32upper: F1, base32pad: L1, base32padupper: M1, base32hex: U1, base32hexupper: $1, base32hexpad: j1, base32hexpadupper: k1, base32z: B1 });
const z1 = ni({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), K1 = ni({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var H1 = Object.freeze({ __proto__: null, base36: z1, base36upper: K1 });
const V1 = ni({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), W1 = ni({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var G1 = Object.freeze({ __proto__: null, base58btc: V1, base58flickr: W1 });
const Y1 = _t({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), J1 = _t({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), X1 = _t({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), Q1 = _t({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Z1 = Object.freeze({ __proto__: null, base64: Y1, base64pad: J1, base64url: X1, base64urlpad: Q1 });
const Rl = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), em = Rl.reduce((e, t, r) => (e[r] = t, e), []), tm = Rl.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []);
function rm(e) {
  return e.reduce((t, r) => (t += em[r], t), "");
}
function nm(e) {
  const t = [];
  for (const r of e) {
    const n = tm[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    t.push(n);
  }
  return new Uint8Array(t);
}
const im = Wi({ prefix: "🚀", name: "base256emoji", encode: rm, decode: nm });
var sm = Object.freeze({ __proto__: null, base256emoji: im }), om = Nl, Ec = 128, am = 127, cm = ~am, um = Math.pow(2, 31);
function Nl(e, t, r) {
  t = t || [], r = r || 0;
  for (var n = r; e >= um; )
    t[r++] = e & 255 | Ec, e /= 128;
  for (; e & cm; )
    t[r++] = e & 255 | Ec, e >>>= 7;
  return t[r] = e | 0, Nl.bytes = r - n + 1, t;
}
var lm = Ws, fm = 128, Sc = 127;
function Ws(e, n) {
  var r = 0, n = n || 0, i = 0, s = n, o, a = e.length;
  do {
    if (s >= a)
      throw Ws.bytes = 0, new RangeError("Could not decode varint");
    o = e[s++], r += i < 28 ? (o & Sc) << i : (o & Sc) * Math.pow(2, i), i += 7;
  } while (o >= fm);
  return Ws.bytes = s - n, r;
}
var hm = Math.pow(2, 7), dm = Math.pow(2, 14), pm = Math.pow(2, 21), gm = Math.pow(2, 28), ym = Math.pow(2, 35), mm = Math.pow(2, 42), vm = Math.pow(2, 49), bm = Math.pow(2, 56), _m = Math.pow(2, 63), wm = function(e) {
  return e < hm ? 1 : e < dm ? 2 : e < pm ? 3 : e < gm ? 4 : e < ym ? 5 : e < mm ? 6 : e < vm ? 7 : e < bm ? 8 : e < _m ? 9 : 10;
}, Em = { encode: om, decode: lm, encodingLength: wm }, Pl = Em;
const xc = (e, t, r = 0) => (Pl.encode(e, t, r), t), Dc = (e) => Pl.encodingLength(e), Gs = (e, t) => {
  const r = t.byteLength, n = Dc(e), i = n + Dc(r), s = new Uint8Array(i + r);
  return xc(e, s, 0), xc(r, s, n), s.set(t, i), new Sm(e, r, t, s);
};
class Sm {
  constructor(t, r, n, i) {
    this.code = t, this.size = r, this.digest = n, this.bytes = i;
  }
}
const Fl = ({ name: e, code: t, encode: r }) => new xm(e, t, r);
class xm {
  constructor(t, r, n) {
    this.name = t, this.code = r, this.encode = n;
  }
  digest(t) {
    if (t instanceof Uint8Array) {
      const r = this.encode(t);
      return r instanceof Uint8Array ? Gs(this.code, r) : r.then((n) => Gs(this.code, n));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const Ll = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t)), Dm = Fl({ name: "sha2-256", code: 18, encode: Ll("SHA-256") }), Om = Fl({ name: "sha2-512", code: 19, encode: Ll("SHA-512") });
var Cm = Object.freeze({ __proto__: null, sha256: Dm, sha512: Om });
const Ml = 0, Am = "identity", Ul = Il, Im = (e) => Gs(Ml, Ul(e)), Tm = { code: Ml, name: Am, encode: Ul, digest: Im };
var Rm = Object.freeze({ __proto__: null, identity: Tm });
new TextEncoder(), new TextDecoder();
const Oc = { ...S1, ...D1, ...C1, ...I1, ...N1, ...q1, ...H1, ...G1, ...Z1, ...sm };
({ ...Cm, ...Rm });
function $l(e) {
  return globalThis.Buffer != null ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e;
}
function Nm(e = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? $l(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e);
}
function jl(e, t, r, n) {
  return { name: e, prefix: t, encoder: { name: e, prefix: t, encode: r }, decoder: { decode: n } };
}
const Cc = jl("utf8", "u", (e) => "u" + new TextDecoder("utf8").decode(e), (e) => new TextEncoder().encode(e.substring(1))), us = jl("ascii", "a", (e) => {
  let t = "a";
  for (let r = 0; r < e.length; r++)
    t += String.fromCharCode(e[r]);
  return t;
}, (e) => {
  e = e.substring(1);
  const t = Nm(e.length);
  for (let r = 0; r < e.length; r++)
    t[r] = e.charCodeAt(r);
  return t;
}), Pm = { utf8: Cc, "utf-8": Cc, hex: Oc.base16, latin1: us, ascii: us, binary: us, ...Oc };
function Fm(e, t = "utf8") {
  const r = Pm[t];
  if (!r)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? $l(globalThis.Buffer.from(e, "utf-8")) : r.decoder.decode(`${r.prefix}${e}`);
}
const kl = "wc", Lm = 2, No = "core", Ir = `${kl}@2:${No}:`, Mm = { name: No, logger: "error" }, Um = { database: ":memory:" }, $m = "crypto", Ac = "client_ed25519_seed", jm = te.ONE_DAY, km = "keychain", Bm = "0.3", qm = "messages", zm = "0.3", Km = te.SIX_HOURS, Hm = "publisher", Bl = "irn", Vm = "error", ql = "wss://relay.walletconnect.com", Ic = "wss://relay.walletconnect.org", Wm = "relayer", Qe = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, Gm = "_subscription", Pn = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, Ym = te.ONE_SECOND / 2, Jm = "2.9.1", Xm = 1e4, Qm = "0.3", Zm = "WALLETCONNECT_CLIENT_ID", lr = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, ev = "subscription", tv = "0.3", rv = te.FIVE_SECONDS * 1e3, nv = "pairing", iv = "0.3", Fn = { wc_pairingDelete: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 0 } } }, ur = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, sv = "history", ov = "0.3", av = "expirer", Gt = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, cv = "0.3", ls = "verify-api", Tc = "https://verify.walletconnect.com";
class uv {
  constructor(t, r) {
    this.core = t, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = km, this.version = Bm, this.initialized = !1, this.storagePrefix = Ir, this.init = async () => {
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
    await this.core.storage.setItem(this.storageKey, vl(t));
  }
  async getKeyChain() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < "u" ? bl(t) : void 0;
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
    this.core = t, this.logger = r, this.name = $m, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (i) => (this.isInitialized(), this.keychain.has(i)), this.getClientId = async () => {
      this.isInitialized();
      const i = await this.getClientSeed(), s = Ya(i);
      return nl(s.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const i = P0();
      return this.setPrivateKey(i.publicKey, i.privateKey);
    }, this.signJWT = async (i) => {
      this.isInitialized();
      const s = await this.getClientSeed(), o = Ya(s), a = Hs();
      return await Bg(a, i, jm, o);
    }, this.generateSharedKey = (i, s, o) => {
      this.isInitialized();
      const a = this.getPrivateKey(i), u = F0(a, s);
      return this.setSymKey(u, o);
    }, this.setSymKey = async (i, s) => {
      this.isInitialized();
      const o = s || L0(i);
      return await this.keychain.set(o, i), o;
    }, this.deleteKeyPair = async (i) => {
      this.isInitialized(), await this.keychain.del(i);
    }, this.deleteSymKey = async (i) => {
      this.isInitialized(), await this.keychain.del(i);
    }, this.encode = async (i, s, o) => {
      this.isInitialized();
      const a = yl(o), u = ho(s);
      if (oc(a)) {
        const y = a.senderPublicKey, m = a.receiverPublicKey;
        i = await this.generateSharedKey(y, m);
      }
      const h = this.getSymKey(i), { type: f, senderPublicKey: d } = a;
      return U0({ type: f, symKey: h, message: u, senderPublicKey: d });
    }, this.decode = async (i, s, o) => {
      this.isInitialized();
      const a = k0(s, o);
      if (oc(a)) {
        const u = a.receiverPublicKey, h = a.senderPublicKey;
        i = await this.generateSharedKey(u, h);
      }
      try {
        const u = this.getSymKey(i), h = $0({ symKey: u, encoded: s });
        return qu(h);
      } catch (u) {
        this.logger.error(`Failed to decode message from topic: '${i}', clientId: '${await this.getClientId()}'`), this.logger.error(u);
      }
    }, this.getPayloadType = (i) => {
      const s = Ei(i);
      return ti(s.type);
    }, this.getPayloadSenderPublicKey = (i) => {
      const s = Ei(i);
      return s.senderPublicKey ? Pt(s.senderPublicKey, Nt) : void 0;
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
      t = this.keychain.get(Ac);
    } catch {
      t = Hs(), await this.keychain.set(Ac, t);
    }
    return Fm(t, "base16");
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
class fv extends Kd {
  constructor(t, r) {
    super(t, r), this.logger = t, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = qm, this.version = zm, this.initialized = !1, this.storagePrefix = Ir, this.init = async () => {
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
      const s = ln(i);
      let o = this.messages.get(n);
      return typeof o > "u" && (o = {}), typeof o[s] < "u" || (o[s] = i, this.messages.set(n, o), await this.persist()), s;
    }, this.get = (n) => {
      this.isInitialized();
      let i = this.messages.get(n);
      return typeof i > "u" && (i = {}), i;
    }, this.has = (n, i) => {
      this.isInitialized();
      const s = this.get(n), o = ln(i);
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
    await this.core.storage.setItem(this.storageKey, vl(t));
  }
  async getRelayerMessages() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < "u" ? bl(t) : void 0;
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
class hv extends Hd {
  constructor(t, r) {
    super(t, r), this.relayer = t, this.logger = r, this.events = new nr.EventEmitter(), this.name = Hm, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = te.toMiliseconds(te.TEN_SECONDS), this.queueTimeout = te.toMiliseconds(te.FIVE_SECONDS), this.needsTransportRestart = !1, this.publish = async (n, i, s) => {
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: i, opts: s } });
      try {
        const o = (s == null ? void 0 : s.ttl) || Km, a = Vs(s), u = (s == null ? void 0 : s.prompt) || !1, h = (s == null ? void 0 : s.tag) || 0, f = (s == null ? void 0 : s.id) || Ao().toString(), d = { topic: n, message: i, opts: { ttl: o, relay: a, prompt: u, tag: h, id: f } }, y = setTimeout(() => this.queue.set(f, d), this.queueTimeout);
        try {
          await await Si(this.rpcPublish(n, i, o, a, u, h, f), this.publishTimeout), clearTimeout(y), this.relayer.events.emit(Qe.publish, d);
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
    var u, h, f, d;
    const y = { method: mi(i.protocol).publish, params: { topic: t, message: r, ttl: n, prompt: s, tag: o }, id: a };
    return Tt((u = y.params) == null ? void 0 : u.prompt) && ((h = y.params) == null || delete h.prompt), Tt((f = y.params) == null ? void 0 : f.tag) && ((d = y.params) == null || delete d.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: y }), this.relayer.request(y);
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
    this.relayer.core.heartbeat.on(yn.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(Qe.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(Qe.message_ack, (t) => {
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
var pv = Object.defineProperty, gv = Object.defineProperties, yv = Object.getOwnPropertyDescriptors, Rc = Object.getOwnPropertySymbols, mv = Object.prototype.hasOwnProperty, vv = Object.prototype.propertyIsEnumerable, Nc = (e, t, r) => t in e ? pv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Ln = (e, t) => {
  for (var r in t || (t = {}))
    mv.call(t, r) && Nc(e, r, t[r]);
  if (Rc)
    for (var r of Rc(t))
      vv.call(t, r) && Nc(e, r, t[r]);
  return e;
}, fs = (e, t) => gv(e, yv(t));
class bv extends Gd {
  constructor(t, r) {
    super(t, r), this.relayer = t, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new dv(), this.events = new nr.EventEmitter(), this.name = ev, this.version = tv, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Ir, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restart(), this.registerEventListeners(), this.onEnable(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (n, i) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: i } });
      try {
        const s = Vs(i), o = { topic: n, relay: s };
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
      const i = Vs(n);
      await this.rpcUnsubscribe(t, r, i);
      const s = ct("USER_DISCONNECTED", `${this.name}, ${t}`);
      await this.onUnsubscribe(t, r, s), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: t, id: r, opts: n } });
    } catch (i) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(i), i;
    }
  }
  async rpcSubscribe(t, r) {
    const n = { method: mi(r.protocol).subscribe, params: { topic: t } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      await await Si(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(Qe.connection_stalled);
    }
    return ln(t + this.clientId);
  }
  async rpcBatchSubscribe(t) {
    if (!t.length)
      return;
    const r = t[0].relay, n = { method: mi(r.protocol).batchSubscribe, params: { topics: t.map((i) => i.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      return await await Si(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(Qe.connection_stalled);
    }
  }
  rpcUnsubscribe(t, r, n) {
    const i = { method: mi(n.protocol).unsubscribe, params: { topic: t, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i }), this.relayer.request(i);
  }
  onSubscribe(t, r) {
    this.setSubscription(t, fs(Ln({}, r), { id: t })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(t) {
    t.length && t.forEach((r) => {
      this.setSubscription(r.id, Ln({}, r)), this.pending.delete(r.topic);
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
    this.subscriptions.set(t, Ln({}, r)), this.topicMap.set(r.topic, t), this.events.emit(lr.created, r);
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
    this.subscriptions.delete(t), this.topicMap.delete(n.topic, t), this.events.emit(lr.deleted, fs(Ln({}, n), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(lr.sync);
  }
  async reset() {
    if (this.cached.length) {
      const t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < t; r++) {
        const n = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(n);
      }
    }
    this.events.emit(lr.resubscribed);
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
    ri(r) && this.onBatchSubscribe(r.map((n, i) => fs(Ln({}, t[i]), { id: n })));
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
    this.relayer.core.heartbeat.on(yn.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(Qe.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(Qe.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(lr.created, async (t) => {
      const r = lr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), await this.persist();
    }), this.events.on(lr.deleted, async (t) => {
      const r = lr.deleted;
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
var _v = Object.defineProperty, Pc = Object.getOwnPropertySymbols, wv = Object.prototype.hasOwnProperty, Ev = Object.prototype.propertyIsEnumerable, Fc = (e, t, r) => t in e ? _v(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Sv = (e, t) => {
  for (var r in t || (t = {}))
    wv.call(t, r) && Fc(e, r, t[r]);
  if (Pc)
    for (var r of Pc(t))
      Ev.call(t, r) && Fc(e, r, t[r]);
  return e;
};
class xv extends Vd {
  constructor(t) {
    super(t), this.protocol = "wc", this.version = 2, this.events = new nr.EventEmitter(), this.name = Wm, this.transportExplicitlyClosed = !1, this.initialized = !1, this.reconnecting = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.request = async (r) => {
      this.logger.debug("Publishing Request Payload");
      try {
        return await this.toEstablishConnection(), await this.provider.request(r);
      } catch (n) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(n), n;
      }
    }, this.core = t.core, this.logger = typeof t.logger < "u" && typeof t.logger != "string" ? Re.generateChildLogger(t.logger, this.name) : Re.pino(Re.getDefaultLoggerOptions({ level: t.logger || Vm })), this.messages = new fv(this.logger, t.core), this.subscriber = new bv(this, this.logger), this.publisher = new hv(this, this.logger), this.relayUrl = (t == null ? void 0 : t.relayUrl) || ql, this.projectId = t.projectId, this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Ic}...`), await this.restartTransport(Ic);
    }
    this.registerEventListeners(), this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, Xm);
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
      this.subscriber.once(lr.created, (o) => {
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
    this.transportExplicitlyClosed = !0, this.connected && (await this.provider.disconnect(), this.events.emit(Qe.transport_closed));
  }
  async transportOpen(t) {
    if (this.transportExplicitlyClosed = !1, !this.reconnecting) {
      this.relayUrl = t || this.relayUrl, this.reconnecting = !0;
      try {
        await Promise.all([new Promise((r) => {
          this.initialized || r(), this.subscriber.once(lr.resubscribed, () => {
            r();
          });
        }), await Promise.race([new Promise(async (r, n) => {
          await Si(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`).catch((i) => n(i)).then(() => r()).finally(() => this.removeListener(Qe.transport_closed, this.rejectTransportOpen));
        }), new Promise((r) => this.once(Qe.transport_closed, this.rejectTransportOpen))])]);
      } catch (r) {
        this.logger.error(r);
        const n = r;
        if (!this.isConnectionStalled(n.message))
          throw r;
        this.events.emit(Qe.transport_closed);
      } finally {
        this.reconnecting = !1;
      }
    }
  }
  async restartTransport(t) {
    this.transportExplicitlyClosed || this.reconnecting || (this.relayUrl = t || this.relayUrl, this.connected && await Promise.all([new Promise((r) => {
      this.provider.once(Pn.disconnect, () => {
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
    this.provider = new i1(new c1(X0({ sdkVersion: Jm, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: t, useOnCloseEvent: !0 }))), this.registerProviderListeners();
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
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: t }), Ro(t)) {
      if (!t.method.endsWith(Gm))
        return;
      const r = t.params, { topic: n, message: i, publishedAt: s } = r.data, o = { topic: n, message: i, publishedAt: s };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Sv({ type: "event", event: r.id }, o)), this.events.emit(r.id, o), await this.acknowledgePayload(t), await this.onMessageEvent(o);
    } else
      Vi(t) && this.events.emit(Qe.message_ack, t);
  }
  async onMessageEvent(t) {
    await this.shouldIgnoreMessageEvent(t) || (this.events.emit(Qe.message, t), await this.recordMessageEvent(t));
  }
  async acknowledgePayload(t) {
    const r = Io(t.id, !0);
    await this.provider.connection.send(r);
  }
  registerProviderListeners() {
    this.provider.on(Pn.payload, (t) => this.onProviderPayload(t)), this.provider.on(Pn.connect, () => {
      this.events.emit(Qe.connect);
    }), this.provider.on(Pn.disconnect, () => {
      this.onProviderDisconnect();
    }), this.provider.on(Pn.error, (t) => {
      this.logger.error(t), this.events.emit(Qe.error, t);
    });
  }
  registerEventListeners() {
    this.events.on(Qe.connection_stalled, async () => {
      await this.restartTransport();
    });
  }
  onProviderDisconnect() {
    this.events.emit(Qe.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || setTimeout(async () => {
      await this.restartTransport();
    }, te.toMiliseconds(Ym));
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
var Dv = Object.defineProperty, Lc = Object.getOwnPropertySymbols, Ov = Object.prototype.hasOwnProperty, Cv = Object.prototype.propertyIsEnumerable, Mc = (e, t, r) => t in e ? Dv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Uc = (e, t) => {
  for (var r in t || (t = {}))
    Ov.call(t, r) && Mc(e, r, t[r]);
  if (Lc)
    for (var r of Lc(t))
      Cv.call(t, r) && Mc(e, r, t[r]);
  return e;
};
class Gi extends Wd {
  constructor(t, r, n, i = Ir, s = void 0) {
    super(t, r, n, i), this.core = t, this.logger = r, this.name = n, this.map = /* @__PURE__ */ new Map(), this.version = Qm, this.cached = [], this.initialized = !1, this.storagePrefix = Ir, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o) => {
        this.getKey && o !== null && !Tt(o) ? this.map.set(this.getKey(o), o) : _y(o) ? this.map.set(o.id, o) : wy(o) && this.map.set(o.topic, o);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (o, a) => {
      this.isInitialized(), this.map.has(o) ? await this.update(o, a) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: o, value: a }), this.map.set(o, a), await this.persist());
    }, this.get = (o) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: o }), this.getData(o)), this.getAll = (o) => (this.isInitialized(), o ? this.values.filter((a) => Object.keys(o).every((u) => l1(a[u], o[u]))) : this.values), this.update = async (o, a) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: o, update: a });
      const u = Uc(Uc({}, this.getData(o)), a);
      this.map.set(o, u), await this.persist();
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
class Av {
  constructor(t, r) {
    this.core = t, this.logger = r, this.name = nv, this.version = iv, this.events = new Lu(), this.initialized = !1, this.storagePrefix = Ir, this.ignoredPayloadTypes = [Jr], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: n }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...n])];
    }, this.create = async () => {
      this.isInitialized();
      const n = Hs(), i = await this.core.crypto.setSymKey(n), s = er(te.FIVE_MINUTES), o = { protocol: Bl }, a = { topic: i, expiry: s, relay: o, active: !1 }, u = ly({ protocol: this.core.protocol, version: this.core.version, topic: i, symKey: n, relay: o });
      return await this.pairings.set(i, a), await this.core.relayer.subscribe(i), this.core.expirer.set(i, s), { topic: i, uri: u };
    }, this.pair = async (n) => {
      this.isInitialized(), this.isValidPair(n);
      const { topic: i, symKey: s, relay: o } = ay(n.uri);
      if (this.pairings.keys.includes(i))
        throw new Error(`Pairing already exists: ${i}`);
      if (this.core.crypto.hasKeys(i))
        throw new Error(`Keychain already exists: ${i}`);
      const a = er(te.FIVE_MINUTES), u = { topic: i, relay: o, expiry: a, active: !1 };
      return await this.pairings.set(i, u), await this.core.crypto.setSymKey(s, i), await this.core.relayer.subscribe(i, { relay: o }), this.core.expirer.set(i, a), n.activatePairing && await this.activate({ topic: i }), u;
    }, this.activate = async ({ topic: n }) => {
      this.isInitialized();
      const i = er(te.THIRTY_DAYS);
      await this.pairings.update(n, { active: !0, expiry: i }), this.core.expirer.set(n, i);
    }, this.ping = async (n) => {
      this.isInitialized(), await this.isValidPing(n);
      const { topic: i } = n;
      if (this.pairings.keys.includes(i)) {
        const s = await this.sendRequest(i, "wc_pairingPing", {}), { done: o, resolve: a, reject: u } = nn();
        this.events.once(ot("pairing_ping", s), ({ error: h }) => {
          h ? u(h) : a();
        }), await o();
      }
    }, this.updateExpiry = async ({ topic: n, expiry: i }) => {
      this.isInitialized(), await this.pairings.update(n, { expiry: i });
    }, this.updateMetadata = async ({ topic: n, metadata: i }) => {
      this.isInitialized(), await this.pairings.update(n, { peerMetadata: i });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (n) => {
      this.isInitialized(), await this.isValidDisconnect(n);
      const { topic: i } = n;
      this.pairings.keys.includes(i) && (await this.sendRequest(i, "wc_pairingDelete", ct("USER_DISCONNECTED")), await this.deletePairing(i));
    }, this.sendRequest = async (n, i, s) => {
      const o = Hi(i, s), a = await this.core.crypto.encode(n, o), u = Fn[i].req;
      return this.core.history.set(n, o), this.core.relayer.publish(n, a, u), o.id;
    }, this.sendResult = async (n, i, s) => {
      const o = Io(n, s), a = await this.core.crypto.encode(i, o), u = await this.core.history.get(i, n), h = Fn[u.request.method].res;
      await this.core.relayer.publish(i, a, h), await this.core.history.resolve(o);
    }, this.sendError = async (n, i, s) => {
      const o = To(n, s), a = await this.core.crypto.encode(i, o), u = await this.core.history.get(i, n), h = Fn[u.request.method] ? Fn[u.request.method].res : Fn.unregistered_method.res;
      await this.core.relayer.publish(i, a, h), await this.core.history.resolve(o);
    }, this.deletePairing = async (n, i) => {
      await this.core.relayer.unsubscribe(n), await Promise.all([this.pairings.delete(n, ct("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(n), i ? Promise.resolve() : this.core.expirer.del(n)]);
    }, this.cleanup = async () => {
      const n = this.pairings.getAll().filter((i) => Or(i.expiry));
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
        mr(i) ? this.events.emit(ot("pairing_ping", s), {}) : tr(i) && this.events.emit(ot("pairing_ping", s), { error: i.error });
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
        const a = ct("WC_METHOD_UNSUPPORTED", o);
        await this.sendError(s, n, a), this.logger.error(a);
      } catch (a) {
        await this.sendError(s, n, a), this.logger.error(a);
      }
    }, this.onUnknownRpcMethodResponse = (n) => {
      this.registeredMethods.includes(n) || this.logger.error(ct("WC_METHOD_UNSUPPORTED", n));
    }, this.isValidPair = (n) => {
      if (!Ft(n)) {
        const { message: i } = X("MISSING_OR_INVALID", `pair() params: ${n}`);
        throw new Error(i);
      }
      if (!by(n.uri)) {
        const { message: i } = X("MISSING_OR_INVALID", `pair() uri: ${n.uri}`);
        throw new Error(i);
      }
    }, this.isValidPing = async (n) => {
      if (!Ft(n)) {
        const { message: s } = X("MISSING_OR_INVALID", `ping() params: ${n}`);
        throw new Error(s);
      }
      const { topic: i } = n;
      await this.isValidPairingTopic(i);
    }, this.isValidDisconnect = async (n) => {
      if (!Ft(n)) {
        const { message: s } = X("MISSING_OR_INVALID", `disconnect() params: ${n}`);
        throw new Error(s);
      }
      const { topic: i } = n;
      await this.isValidPairingTopic(i);
    }, this.isValidPairingTopic = async (n) => {
      if (!dt(n, !1)) {
        const { message: i } = X("MISSING_OR_INVALID", `pairing topic should be a string: ${n}`);
        throw new Error(i);
      }
      if (!this.pairings.keys.includes(n)) {
        const { message: i } = X("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n}`);
        throw new Error(i);
      }
      if (Or(this.pairings.get(n).expiry)) {
        await this.deletePairing(n);
        const { message: i } = X("EXPIRED", `pairing topic: ${n}`);
        throw new Error(i);
      }
    }, this.core = t, this.logger = Re.generateChildLogger(r, this.name), this.pairings = new Gi(this.core, this.logger, this.name, this.storagePrefix);
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
    this.core.relayer.on(Qe.message, async (t) => {
      const { topic: r, message: n } = t;
      if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n)))
        return;
      const i = await this.core.crypto.decode(r, n);
      Ro(i) ? (this.core.history.set(r, i), this.onRelayEventRequest({ topic: r, payload: i })) : Vi(i) && (await this.core.history.resolve(i), await this.onRelayEventResponse({ topic: r, payload: i }), this.core.history.delete(r, i.id));
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(Gt.expired, async (t) => {
      const { topic: r } = wl(t.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit("pairing_expire", { topic: r }));
    });
  }
}
class Iv extends zd {
  constructor(t, r) {
    super(t, r), this.core = t, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new nr.EventEmitter(), this.name = sv, this.version = ov, this.cached = [], this.initialized = !1, this.storagePrefix = Ir, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.records.set(n.id, n)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (n, i, s) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: n, request: i, chainId: s }), this.records.has(i.id))
        return;
      const o = { id: i.id, topic: n, request: { method: i.method, params: i.params || null }, chainId: s, expiry: er(te.THIRTY_DAYS) };
      this.records.set(o.id, o), this.events.emit(ur.created, o);
    }, this.resolve = async (n) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: n }), !this.records.has(n.id))
        return;
      const i = await this.getRecord(n.id);
      typeof i.response > "u" && (i.response = tr(n) ? { error: n.error } : { result: n.result }, this.records.set(i.id, i), this.events.emit(ur.updated, i));
    }, this.get = async (n, i) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: n, id: i }), await this.getRecord(i)), this.delete = (n, i) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: i }), this.values.forEach((s) => {
        if (s.topic === n) {
          if (typeof i < "u" && s.id !== i)
            return;
          this.records.delete(s.id), this.events.emit(ur.deleted, s);
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
      const n = { topic: r.topic, request: Hi(r.request.method, r.request.params, r.id), chainId: r.chainId };
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
    await this.setJsonRpcRecords(this.values), this.events.emit(ur.sync);
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
    this.events.on(ur.created, (t) => {
      const r = ur.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: t }), this.persist();
    }), this.events.on(ur.updated, (t) => {
      const r = ur.updated;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: t }), this.persist();
    }), this.events.on(ur.deleted, (t) => {
      const r = ur.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: t }), this.persist();
    }), this.core.heartbeat.on(yn.HEARTBEAT_EVENTS.pulse, () => {
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
class Tv extends Yd {
  constructor(t, r) {
    super(t, r), this.core = t, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new nr.EventEmitter(), this.name = av, this.version = cv, this.cached = [], this.initialized = !1, this.storagePrefix = Ir, this.init = async () => {
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
      this.expirations.set(s, o), this.checkExpiry(s, o), this.events.emit(Gt.created, { target: s, expiration: o });
    }, this.get = (n) => {
      this.isInitialized();
      const i = this.formatTarget(n);
      return this.getExpiration(i);
    }, this.del = (n) => {
      if (this.isInitialized(), this.has(n)) {
        const i = this.formatTarget(n), s = this.getExpiration(i);
        this.expirations.delete(i), this.events.emit(Gt.deleted, { target: i, expiration: s });
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
      return Q0(t);
    if (typeof t == "number")
      return Z0(t);
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
    await this.setExpirations(this.values), this.events.emit(Gt.sync);
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
    this.expirations.delete(t), this.events.emit(Gt.expired, { target: t, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((t, r) => this.checkExpiry(r, t));
  }
  registerEventListeners() {
    this.core.heartbeat.on(yn.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(Gt.created, (t) => {
      const r = Gt.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), this.persist();
    }), this.events.on(Gt.expired, (t) => {
      const r = Gt.expired;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), this.persist();
    }), this.events.on(Gt.deleted, (t) => {
      const r = Gt.deleted;
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
class Rv extends Jd {
  constructor(t, r) {
    super(t, r), this.projectId = t, this.logger = r, this.name = ls, this.initialized = !1, this.init = async (n) => {
      ml() || !xo() || (this.verifyUrl = (n == null ? void 0 : n.verifyUrl) || Tc, await this.createIframe());
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
          if (document.getElementById(ls))
            return n();
          const s = document.createElement("iframe");
          s.setAttribute("id", ls), s.setAttribute("src", `${this.verifyUrl}/${this.projectId}`), s.style.display = "none", s.addEventListener("load", () => {
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
    }, this.logger = Re.generateChildLogger(r, this.name), this.verifyUrl = Tc, this.abortController = new AbortController(), this.isDevEnv = So() && process.env.IS_VITEST;
  }
  get context() {
    return Re.getLoggerContext(this.logger);
  }
  startAbortTimer(t) {
    return setTimeout(() => this.abortController.abort(), te.toMiliseconds(t));
  }
}
var Nv = Object.defineProperty, $c = Object.getOwnPropertySymbols, Pv = Object.prototype.hasOwnProperty, Fv = Object.prototype.propertyIsEnumerable, jc = (e, t, r) => t in e ? Nv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, kc = (e, t) => {
  for (var r in t || (t = {}))
    Pv.call(t, r) && jc(e, r, t[r]);
  if ($c)
    for (var r of $c(t))
      Fv.call(t, r) && jc(e, r, t[r]);
  return e;
};
let Lv = class zl extends qd {
  constructor(t) {
    super(t), this.protocol = kl, this.version = Lm, this.name = No, this.events = new nr.EventEmitter(), this.initialized = !1, this.on = (n, i) => this.events.on(n, i), this.once = (n, i) => this.events.once(n, i), this.off = (n, i) => this.events.off(n, i), this.removeListener = (n, i) => this.events.removeListener(n, i), this.projectId = t == null ? void 0 : t.projectId, this.relayUrl = (t == null ? void 0 : t.relayUrl) || ql;
    const r = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : Re.pino(Re.getDefaultLoggerOptions({ level: (t == null ? void 0 : t.logger) || Mm.logger }));
    this.logger = Re.generateChildLogger(r, this.name), this.heartbeat = new yn.HeartBeat(), this.crypto = new lv(this, this.logger, t == null ? void 0 : t.keychain), this.history = new Iv(this, this.logger), this.expirer = new Tv(this, this.logger), this.storage = t != null && t.storage ? t.storage : new Dd(kc(kc({}, Um), t == null ? void 0 : t.storageOptions)), this.relayer = new xv({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new Av(this, this.logger), this.verify = new Rv(this.projectId || "", this.logger);
  }
  static async init(t) {
    const r = new zl(t);
    await r.initialize();
    const n = await r.crypto.getClientId();
    return await r.storage.setItem(Zm, n), r;
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
const Mv = Lv, Kl = "wc", Hl = 2, Vl = "client", Po = `${Kl}@${Hl}:${Vl}:`, hs = { name: Vl, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, Uv = "WALLETCONNECT_DEEPLINK_CHOICE", $v = "proposal", jv = "Proposal expired", kv = "session", pi = te.SEVEN_DAYS, Bv = "engine", Mn = { wc_sessionPropose: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, ds = { min: te.FIVE_MINUTES, max: te.SEVEN_DAYS }, Un = { idle: "idle", active: "active" }, qv = "request", zv = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var Kv = Object.defineProperty, Hv = Object.defineProperties, Vv = Object.getOwnPropertyDescriptors, Bc = Object.getOwnPropertySymbols, Wv = Object.prototype.hasOwnProperty, Gv = Object.prototype.propertyIsEnumerable, qc = (e, t, r) => t in e ? Kv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Wt = (e, t) => {
  for (var r in t || (t = {}))
    Wv.call(t, r) && qc(e, r, t[r]);
  if (Bc)
    for (var r of Bc(t))
      Gv.call(t, r) && qc(e, r, t[r]);
  return e;
}, ps = (e, t) => Hv(e, Vv(t));
class Yv extends Qd {
  constructor(t) {
    super(t), this.name = Bv, this.events = new Lu(), this.initialized = !1, this.ignoredPayloadTypes = [Jr], this.requestQueue = { state: Un.idle, requests: [] }, this.requestQueueDelay = te.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({ methods: Object.keys(Mn) }), this.initialized = !0, setTimeout(() => {
        this.requestQueue.requests = this.getPendingSessionRequests(), this.processRequestQueue();
      }, te.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      this.isInitialized();
      const n = ps(Wt({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(n);
      const { pairingTopic: i, requiredNamespaces: s, optionalNamespaces: o, sessionProperties: a, relays: u } = n;
      let h = i, f, d = !1;
      if (h && (d = this.client.core.pairing.pairings.get(h).active), !h || !d) {
        const { topic: C, uri: v } = await this.client.core.pairing.create();
        h = C, f = v;
      }
      const y = await this.client.core.crypto.generateKeyPair(), m = Wt({ requiredNamespaces: s, optionalNamespaces: o, relays: u ?? [{ protocol: Bl }], proposer: { publicKey: y, metadata: this.client.metadata } }, a && { sessionProperties: a }), { reject: w, resolve: O, done: A } = nn(te.FIVE_MINUTES, jv);
      if (this.events.once(ot("session_connect"), async ({ error: C, session: v }) => {
        if (C)
          w(C);
        else if (v) {
          v.self.publicKey = y;
          const S = ps(Wt({}, v), { requiredNamespaces: v.requiredNamespaces, optionalNamespaces: v.optionalNamespaces });
          await this.client.session.set(v.topic, S), await this.setExpiry(v.topic, v.expiry), h && await this.client.core.pairing.updateMetadata({ topic: h, metadata: v.peer.metadata }), O(S);
        }
      }), !h) {
        const { message: C } = X("NO_MATCHING_KEY", `connect() pairing topic: ${h}`);
        throw new Error(C);
      }
      const L = await this.sendRequest(h, "wc_sessionPropose", m), _ = er(te.FIVE_MINUTES);
      return await this.setProposal(L, Wt({ id: L, expiry: _ }, m)), { uri: f, approval: A };
    }, this.pair = async (r) => (this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      this.isInitialized(), await this.isValidApprove(r);
      const { id: n, relayProtocol: i, namespaces: s, sessionProperties: o } = r, a = this.client.proposal.get(n);
      let { pairingTopic: u, proposer: h, requiredNamespaces: f, optionalNamespaces: d } = a;
      u = u || "", zn(f) || (f = py(s, "approve()"));
      const y = await this.client.core.crypto.generateKeyPair(), m = h.publicKey, w = await this.client.core.crypto.generateSharedKey(y, m);
      u && n && (await this.client.core.pairing.updateMetadata({ topic: u, metadata: h.metadata }), await this.sendResult(n, u, { relay: { protocol: i ?? "irn" }, responderPublicKey: y }), await this.client.proposal.delete(n, ct("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: u }));
      const O = Wt({ relay: { protocol: i ?? "irn" }, namespaces: s, requiredNamespaces: f, optionalNamespaces: d, pairingTopic: u, controller: { publicKey: y, metadata: this.client.metadata }, expiry: er(pi) }, o && { sessionProperties: o });
      await this.client.core.relayer.subscribe(w), await this.sendRequest(w, "wc_sessionSettle", O);
      const A = ps(Wt({}, O), { topic: w, pairingTopic: u, acknowledged: !1, self: O.controller, peer: { publicKey: h.publicKey, metadata: h.metadata }, controller: y });
      return await this.client.session.set(w, A), await this.setExpiry(w, er(pi)), { topic: w, acknowledged: () => new Promise((L) => setTimeout(() => L(this.client.session.get(w)), 500)) };
    }, this.reject = async (r) => {
      this.isInitialized(), await this.isValidReject(r);
      const { id: n, reason: i } = r, { pairingTopic: s } = this.client.proposal.get(n);
      s && (await this.sendError(n, s, i), await this.client.proposal.delete(n, ct("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      this.isInitialized(), await this.isValidUpdate(r);
      const { topic: n, namespaces: i } = r, s = await this.sendRequest(n, "wc_sessionUpdate", { namespaces: i }), { done: o, resolve: a, reject: u } = nn();
      return this.events.once(ot("session_update", s), ({ error: h }) => {
        h ? u(h) : a();
      }), await this.client.session.update(n, { namespaces: i }), { acknowledged: o };
    }, this.extend = async (r) => {
      this.isInitialized(), await this.isValidExtend(r);
      const { topic: n } = r, i = await this.sendRequest(n, "wc_sessionExtend", {}), { done: s, resolve: o, reject: a } = nn();
      return this.events.once(ot("session_extend", i), ({ error: u }) => {
        u ? a(u) : o();
      }), await this.setExpiry(n, er(pi)), { acknowledged: s };
    }, this.request = async (r) => {
      this.isInitialized(), await this.isValidRequest(r);
      const { chainId: n, request: i, topic: s, expiry: o } = r, a = await this.sendRequest(s, "wc_sessionRequest", { request: i, chainId: n }, o), { done: u, resolve: h, reject: f } = nn(o);
      this.events.once(ot("session_request", a), ({ error: y, result: m }) => {
        y ? f(y) : h(m);
      }), this.client.events.emit("session_request_sent", { topic: s, request: i, chainId: n, id: a });
      const d = await this.client.core.storage.getItem(Uv);
      return ey({ id: a, topic: s, wcDeepLink: d }), await u();
    }, this.respond = async (r) => {
      this.isInitialized(), await this.isValidRespond(r);
      const { topic: n, response: i } = r, { id: s } = i;
      mr(i) ? await this.sendResult(s, n, i.result) : tr(i) && await this.sendError(s, n, i.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      this.isInitialized(), await this.isValidPing(r);
      const { topic: n } = r;
      if (this.client.session.keys.includes(n)) {
        const i = await this.sendRequest(n, "wc_sessionPing", {}), { done: s, resolve: o, reject: a } = nn();
        this.events.once(ot("session_ping", i), ({ error: u }) => {
          u ? a(u) : o();
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
        const i = Ao().toString();
        let s;
        const o = (a) => {
          (a == null ? void 0 : a.id.toString()) === i && (this.client.core.relayer.events.removeListener(Qe.message_ack, o), s());
        };
        await Promise.all([new Promise((a) => {
          s = a, this.client.core.relayer.on(Qe.message_ack, o);
        }), this.sendRequest(n, "wc_sessionDelete", ct("USER_DISCONNECTED"), void 0, i)]), await this.deleteSession(n);
      } else
        await this.client.core.pairing.disconnect({ topic: n });
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((n) => my(n, r))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (r) => {
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
      await this.client.core.relayer.unsubscribe(r), this.client.session.delete(r, ct("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(i.publicKey) && await this.client.core.crypto.deleteKeyPair(i.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), n || this.client.core.expirer.del(r);
    }, this.deleteProposal = async (r, n) => {
      await Promise.all([this.client.proposal.delete(r, ct("USER_DISCONNECTED")), n ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, n, i = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, n), i ? Promise.resolve() : this.client.core.expirer.del(r)]), this.requestQueue.requests = this.requestQueue.requests.filter((s) => s.id !== r), i && (this.requestQueue.state = Un.idle);
    }, this.setExpiry = async (r, n) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: n }), this.client.core.expirer.set(r, n);
    }, this.setProposal = async (r, n) => {
      await this.client.proposal.set(r, n), this.client.core.expirer.set(r, n.expiry);
    }, this.setPendingSessionRequest = async (r) => {
      const n = Mn.wc_sessionRequest.req.ttl, { id: i, topic: s, params: o } = r;
      await this.client.pendingRequest.set(i, { id: i, topic: s, params: o }), n && this.client.core.expirer.set(i, er(n));
    }, this.sendRequest = async (r, n, i, s, o) => {
      const a = Hi(n, i);
      if (xo() && zv.includes(n)) {
        const f = ln(JSON.stringify(a));
        await this.client.core.verify.register({ attestationId: f });
      }
      const u = await this.client.core.crypto.encode(r, a), h = Mn[n].req;
      return s && (h.ttl = s), o && (h.id = o), this.client.core.history.set(r, a), this.client.core.relayer.publish(r, u, h), a.id;
    }, this.sendResult = async (r, n, i) => {
      const s = Io(r, i), o = await this.client.core.crypto.encode(n, s), a = await this.client.core.history.get(n, r), u = Mn[a.request.method].res;
      this.client.core.relayer.publish(n, o, u), await this.client.core.history.resolve(s);
    }, this.sendError = async (r, n, i) => {
      const s = To(r, i), o = await this.client.core.crypto.encode(n, s), a = await this.client.core.history.get(n, r), u = Mn[a.request.method].res;
      this.client.core.relayer.publish(n, o, u), await this.client.core.history.resolve(s);
    }, this.cleanup = async () => {
      const r = [], n = [];
      this.client.session.getAll().forEach((i) => {
        Or(i.expiry) && r.push(i.topic);
      }), this.client.proposal.getAll().forEach((i) => {
        Or(i.expiry) && n.push(i.id);
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
        this.isValidConnect(Wt({}, n.params));
        const o = er(te.FIVE_MINUTES), a = Wt({ id: s, pairingTopic: r, expiry: o }, i);
        await this.setProposal(s, a);
        const u = ln(JSON.stringify(n)), h = await this.getVerifyContext(u, a.proposer.metadata);
        this.client.events.emit("session_proposal", { id: s, params: a, verifyContext: h });
      } catch (o) {
        await this.sendError(s, r, o), this.client.logger.error(o);
      }
    }, this.onSessionProposeResponse = async (r, n) => {
      const { id: i } = n;
      if (mr(n)) {
        const { result: s } = n;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: s });
        const o = this.client.proposal.get(i);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: o });
        const a = o.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: a });
        const u = s.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: u });
        const h = await this.client.core.crypto.generateSharedKey(a, u);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: h });
        const f = await this.client.core.relayer.subscribe(h);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: f }), await this.client.core.pairing.activate({ topic: r });
      } else
        tr(n) && (await this.client.proposal.delete(i, ct("USER_DISCONNECTED")), this.events.emit(ot("session_connect"), { error: n.error }));
    }, this.onSessionSettleRequest = async (r, n) => {
      const { id: i, params: s } = n;
      try {
        this.isValidSessionSettleRequest(s);
        const { relay: o, controller: a, expiry: u, namespaces: h, requiredNamespaces: f, optionalNamespaces: d, sessionProperties: y, pairingTopic: m } = n.params, w = Wt({ topic: r, relay: o, expiry: u, namespaces: h, acknowledged: !0, pairingTopic: m, requiredNamespaces: f, optionalNamespaces: d, controller: a.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: a.publicKey, metadata: a.metadata } }, y && { sessionProperties: y });
        await this.sendResult(n.id, r, !0), this.events.emit(ot("session_connect"), { session: w }), this.cleanupDuplicatePairings(w);
      } catch (o) {
        await this.sendError(i, r, o), this.client.logger.error(o);
      }
    }, this.onSessionSettleResponse = async (r, n) => {
      const { id: i } = n;
      mr(n) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(ot("session_approve", i), {})) : tr(n) && (await this.client.session.delete(r, ct("USER_DISCONNECTED")), this.events.emit(ot("session_approve", i), { error: n.error }));
    }, this.onSessionUpdateRequest = async (r, n) => {
      const { params: i, id: s } = n;
      try {
        this.isValidUpdate(Wt({ topic: r }, i)), await this.client.session.update(r, { namespaces: i.namespaces }), await this.sendResult(s, r, !0), this.client.events.emit("session_update", { id: s, topic: r, params: i });
      } catch (o) {
        await this.sendError(s, r, o), this.client.logger.error(o);
      }
    }, this.onSessionUpdateResponse = (r, n) => {
      const { id: i } = n;
      mr(n) ? this.events.emit(ot("session_update", i), {}) : tr(n) && this.events.emit(ot("session_update", i), { error: n.error });
    }, this.onSessionExtendRequest = async (r, n) => {
      const { id: i } = n;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, er(pi)), await this.sendResult(i, r, !0), this.client.events.emit("session_extend", { id: i, topic: r });
      } catch (s) {
        await this.sendError(i, r, s), this.client.logger.error(s);
      }
    }, this.onSessionExtendResponse = (r, n) => {
      const { id: i } = n;
      mr(n) ? this.events.emit(ot("session_extend", i), {}) : tr(n) && this.events.emit(ot("session_extend", i), { error: n.error });
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
        mr(n) ? this.events.emit(ot("session_ping", i), {}) : tr(n) && this.events.emit(ot("session_ping", i), { error: n.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (r, n) => {
      const { id: i } = n;
      try {
        this.isValidDisconnect({ topic: r, reason: n.params }), await Promise.all([new Promise((s) => {
          this.client.core.relayer.once(Qe.publish, async () => {
            s(await this.deleteSession(r));
          });
        }), this.sendResult(i, r, !0)]), this.client.events.emit("session_delete", { id: i, topic: r });
      } catch (s) {
        this.client.logger.error(s);
      }
    }, this.onSessionRequest = async (r, n) => {
      const { id: i, params: s } = n;
      try {
        this.isValidRequest(Wt({ topic: r }, s)), await this.setPendingSessionRequest({ id: i, topic: r, params: s }), this.addRequestToQueue({ id: i, topic: r, params: s }), await this.processRequestQueue();
      } catch (o) {
        await this.sendError(i, r, o), this.client.logger.error(o);
      }
    }, this.onSessionRequestResponse = (r, n) => {
      const { id: i } = n;
      mr(n) ? this.events.emit(ot("session_request", i), { result: n.result }) : tr(n) && this.events.emit(ot("session_request", i), { error: n.error });
    }, this.onSessionEventRequest = async (r, n) => {
      const { id: i, params: s } = n;
      try {
        this.isValidEmit(Wt({ topic: r }, s)), this.client.events.emit("session_event", { id: i, topic: r, params: s });
      } catch (o) {
        await this.sendError(i, r, o), this.client.logger.error(o);
      }
    }, this.addRequestToQueue = (r) => {
      this.requestQueue.requests.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.requestQueue.state = Un.idle, this.processRequestQueue();
      }, te.toMiliseconds(this.requestQueueDelay));
    }, this.processRequestQueue = async () => {
      if (this.requestQueue.state === Un.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const r = this.requestQueue.requests[0];
      if (!r) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        const { id: n, topic: i, params: s } = r, o = ln(JSON.stringify({ id: n, params: s })), a = this.client.session.get(i), u = await this.getVerifyContext(o, a.peer.metadata);
        this.requestQueue.state = Un.active, this.client.events.emit("session_request", { id: n, topic: i, params: s, verifyContext: u });
      } catch (n) {
        this.client.logger.error(n);
      }
    }, this.isValidConnect = async (r) => {
      if (!Ft(r)) {
        const { message: u } = X("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(u);
      }
      const { pairingTopic: n, requiredNamespaces: i, optionalNamespaces: s, sessionProperties: o, relays: a } = r;
      if (Tt(n) || await this.isValidPairingTopic(n), !Iy(a, !0)) {
        const { message: u } = X("MISSING_OR_INVALID", `connect() relays: ${a}`);
        throw new Error(u);
      }
      !Tt(i) && zn(i) !== 0 && this.validateNamespaces(i, "requiredNamespaces"), !Tt(s) && zn(s) !== 0 && this.validateNamespaces(s, "optionalNamespaces"), Tt(o) || this.validateSessionProps(o, "sessionProperties");
    }, this.validateNamespaces = (r, n) => {
      const i = Ay(r, "connect()", n);
      if (i)
        throw new Error(i.message);
    }, this.isValidApprove = async (r) => {
      if (!Ft(r))
        throw new Error(X("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: n, namespaces: i, relayProtocol: s, sessionProperties: o } = r;
      await this.isValidProposalId(n);
      const a = this.client.proposal.get(n), u = vi(i, "approve()");
      if (u)
        throw new Error(u.message);
      const h = pc(a.requiredNamespaces, i, "approve()");
      if (h)
        throw new Error(h.message);
      if (!dt(s, !0)) {
        const { message: f } = X("MISSING_OR_INVALID", `approve() relayProtocol: ${s}`);
        throw new Error(f);
      }
      Tt(o) || this.validateSessionProps(o, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!Ft(r)) {
        const { message: s } = X("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(s);
      }
      const { id: n, reason: i } = r;
      if (await this.isValidProposalId(n), !Ry(i)) {
        const { message: s } = X("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(i)}`);
        throw new Error(s);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!Ft(r)) {
        const { message: h } = X("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(h);
      }
      const { relay: n, controller: i, namespaces: s, expiry: o } = r;
      if (!Sl(n)) {
        const { message: h } = X("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(h);
      }
      const a = Ey(i, "onSessionSettleRequest()");
      if (a)
        throw new Error(a.message);
      const u = vi(s, "onSessionSettleRequest()");
      if (u)
        throw new Error(u.message);
      if (Or(o)) {
        const { message: h } = X("EXPIRED", "onSessionSettleRequest()");
        throw new Error(h);
      }
    }, this.isValidUpdate = async (r) => {
      if (!Ft(r)) {
        const { message: u } = X("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(u);
      }
      const { topic: n, namespaces: i } = r;
      await this.isValidSessionTopic(n);
      const s = this.client.session.get(n), o = vi(i, "update()");
      if (o)
        throw new Error(o.message);
      const a = pc(s.requiredNamespaces, i, "update()");
      if (a)
        throw new Error(a.message);
    }, this.isValidExtend = async (r) => {
      if (!Ft(r)) {
        const { message: i } = X("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(i);
      }
      const { topic: n } = r;
      await this.isValidSessionTopic(n);
    }, this.isValidRequest = async (r) => {
      if (!Ft(r)) {
        const { message: u } = X("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(u);
      }
      const { topic: n, request: i, chainId: s, expiry: o } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: a } = this.client.session.get(n);
      if (!dc(a, s)) {
        const { message: u } = X("MISSING_OR_INVALID", `request() chainId: ${s}`);
        throw new Error(u);
      }
      if (!Ny(i)) {
        const { message: u } = X("MISSING_OR_INVALID", `request() ${JSON.stringify(i)}`);
        throw new Error(u);
      }
      if (!Ly(a, s, i.method)) {
        const { message: u } = X("MISSING_OR_INVALID", `request() method: ${i.method}`);
        throw new Error(u);
      }
      if (o && !jy(o, ds)) {
        const { message: u } = X("MISSING_OR_INVALID", `request() expiry: ${o}. Expiry must be a number (in seconds) between ${ds.min} and ${ds.max}`);
        throw new Error(u);
      }
    }, this.isValidRespond = async (r) => {
      if (!Ft(r)) {
        const { message: s } = X("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(s);
      }
      const { topic: n, response: i } = r;
      if (await this.isValidSessionTopic(n), !Py(i)) {
        const { message: s } = X("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
        throw new Error(s);
      }
    }, this.isValidPing = async (r) => {
      if (!Ft(r)) {
        const { message: i } = X("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(i);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.isValidEmit = async (r) => {
      if (!Ft(r)) {
        const { message: a } = X("MISSING_OR_INVALID", `emit() params: ${r}`);
        throw new Error(a);
      }
      const { topic: n, event: i, chainId: s } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: o } = this.client.session.get(n);
      if (!dc(o, s)) {
        const { message: a } = X("MISSING_OR_INVALID", `emit() chainId: ${s}`);
        throw new Error(a);
      }
      if (!Fy(i)) {
        const { message: a } = X("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
        throw new Error(a);
      }
      if (!My(o, s, i.name)) {
        const { message: a } = X("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
        throw new Error(a);
      }
    }, this.isValidDisconnect = async (r) => {
      if (!Ft(r)) {
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
        if (!dt(i, !1)) {
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
    this.client.core.relayer.on(Qe.message, async (t) => {
      const { topic: r, message: n } = t;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(n)))
        return;
      const i = await this.client.core.crypto.decode(r, n);
      Ro(i) ? (this.client.core.history.set(r, i), this.onRelayEventRequest({ topic: r, payload: i })) : Vi(i) ? (await this.client.core.history.resolve(i), await this.onRelayEventResponse({ topic: r, payload: i }), this.client.core.history.delete(r, i.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: i });
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(Gt.expired, async (t) => {
      const { topic: r, id: n } = wl(t.target);
      if (n && this.client.pendingRequest.keys.includes(n))
        return await this.deletePendingSessionRequest(n, X("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession(r, !0), this.client.events.emit("session_expire", { topic: r })) : n && (await this.deleteProposal(n, !0), this.client.events.emit("proposal_expire", { id: n }));
    });
  }
  isValidPairingTopic(t) {
    if (!dt(t, !1)) {
      const { message: r } = X("MISSING_OR_INVALID", `pairing topic should be a string: ${t}`);
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(t)) {
      const { message: r } = X("NO_MATCHING_KEY", `pairing topic doesn't exist: ${t}`);
      throw new Error(r);
    }
    if (Or(this.client.core.pairing.pairings.get(t).expiry)) {
      const { message: r } = X("EXPIRED", `pairing topic: ${t}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(t) {
    if (!dt(t, !1)) {
      const { message: r } = X("MISSING_OR_INVALID", `session topic should be a string: ${t}`);
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(t)) {
      const { message: r } = X("NO_MATCHING_KEY", `session topic doesn't exist: ${t}`);
      throw new Error(r);
    }
    if (Or(this.client.session.get(t).expiry)) {
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
    else if (dt(t, !1)) {
      const { message: r } = X("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${t}`);
      throw new Error(r);
    } else {
      const { message: r } = X("MISSING_OR_INVALID", `session or pairing topic should be a string: ${t}`);
      throw new Error(r);
    }
  }
  async isValidProposalId(t) {
    if (!Ty(t)) {
      const { message: r } = X("MISSING_OR_INVALID", `proposal id should be a number: ${t}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(t)) {
      const { message: r } = X("NO_MATCHING_KEY", `proposal id doesn't exist: ${t}`);
      throw new Error(r);
    }
    if (Or(this.client.proposal.get(t).expiry)) {
      await this.deleteProposal(t);
      const { message: r } = X("EXPIRED", `proposal id: ${t}`);
      throw new Error(r);
    }
  }
}
class Jv extends Gi {
  constructor(t, r) {
    super(t, r, $v, Po), this.core = t, this.logger = r;
  }
}
class Xv extends Gi {
  constructor(t, r) {
    super(t, r, kv, Po), this.core = t, this.logger = r;
  }
}
class Qv extends Gi {
  constructor(t, r) {
    super(t, r, qv, Po, (n) => n.id), this.core = t, this.logger = r;
  }
}
let Zv = class Wl extends Xd {
  constructor(t) {
    super(t), this.protocol = Kl, this.version = Hl, this.name = hs.name, this.events = new nr.EventEmitter(), this.on = (n, i) => this.events.on(n, i), this.once = (n, i) => this.events.once(n, i), this.off = (n, i) => this.events.off(n, i), this.removeListener = (n, i) => this.events.removeListener(n, i), this.removeAllListeners = (n) => this.events.removeAllListeners(n), this.connect = async (n) => {
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
    }, this.name = (t == null ? void 0 : t.name) || hs.name, this.metadata = (t == null ? void 0 : t.metadata) || W0();
    const r = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : Re.pino(Re.getDefaultLoggerOptions({ level: (t == null ? void 0 : t.logger) || hs.logger }));
    this.core = (t == null ? void 0 : t.core) || new Mv(t), this.logger = Re.generateChildLogger(r, this.name), this.session = new Xv(this.core, this.logger), this.proposal = new Jv(this.core, this.logger), this.pendingRequest = new Qv(this.core, this.logger), this.engine = new Yv(this);
  }
  static async init(t) {
    const r = new Wl(t);
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
var eb = Object.defineProperty, tb = Object.defineProperties, rb = Object.getOwnPropertyDescriptors, zc = Object.getOwnPropertySymbols, nb = Object.prototype.hasOwnProperty, ib = Object.prototype.propertyIsEnumerable, Kc = (e, t, r) => t in e ? eb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, sb = (e, t) => {
  for (var r in t || (t = {}))
    nb.call(t, r) && Kc(e, r, t[r]);
  if (zc)
    for (var r of zc(t))
      ib.call(t, r) && Kc(e, r, t[r]);
  return e;
}, ob = (e, t) => tb(e, rb(t)), Fo = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
}, ze = (e, t, r) => (Fo(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Br = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, Oi = (e, t, r, n) => (Fo(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), xt = (e, t, r) => (Fo(e, t, "access private method"), r), zr, sn, $n, ht, Ys, Gl, Dt, It, Js, Hc;
let ab = class {
  constructor(t) {
    Br(this, Ys), Br(this, Dt), Br(this, Js), Br(this, zr, void 0), Br(this, sn, void 0), Br(this, $n, void 0), Br(this, ht, void 0), Oi(this, zr, t), Oi(this, sn, xt(this, Ys, Gl).call(this)), xt(this, Dt, It).call(this);
  }
  async connect(t) {
    const { requiredNamespaces: r, optionalNamespaces: n } = t;
    return new Promise(async (i, s) => {
      await xt(this, Dt, It).call(this);
      const o = ze(this, sn).subscribeModal((h) => {
        h.open || (o(), s(new Error("Modal closed")));
      }), { uri: a, approval: u } = await ze(this, ht).connect(t);
      if (a) {
        const h = /* @__PURE__ */ new Set();
        r && Object.values(r).forEach(({ chains: f }) => {
          f && f.forEach((d) => h.add(d));
        }), n && Object.values(n).forEach(({ chains: f }) => {
          f && f.forEach((d) => h.add(d));
        }), await ze(this, sn).openModal({ uri: a, chains: Array.from(h) });
      }
      try {
        const h = await u();
        i(h);
      } catch (h) {
        s(h);
      } finally {
        o(), ze(this, sn).closeModal();
      }
    });
  }
  async disconnect(t) {
    await xt(this, Dt, It).call(this), await ze(this, ht).disconnect(t);
  }
  async request(t) {
    return await xt(this, Dt, It).call(this), await ze(this, ht).request(t);
  }
  async getSessions() {
    return await xt(this, Dt, It).call(this), ze(this, ht).session.getAll();
  }
  async getSession() {
    return await xt(this, Dt, It).call(this), ze(this, ht).session.getAll().at(-1);
  }
  async onSessionEvent(t) {
    await xt(this, Dt, It).call(this), ze(this, ht).on("session_event", t);
  }
  async offSessionEvent(t) {
    await xt(this, Dt, It).call(this), ze(this, ht).off("session_event", t);
  }
  async onSessionUpdate(t) {
    await xt(this, Dt, It).call(this), ze(this, ht).on("session_update", t);
  }
  async offSessionUpdate(t) {
    await xt(this, Dt, It).call(this), ze(this, ht).off("session_update", t);
  }
  async onSessionDelete(t) {
    await xt(this, Dt, It).call(this), ze(this, ht).on("session_delete", t);
  }
  async offSessionDelete(t) {
    await xt(this, Dt, It).call(this), ze(this, ht).off("session_delete", t);
  }
  async onSessionExpire(t) {
    await xt(this, Dt, It).call(this), ze(this, ht).on("session_expire", t);
  }
  async offSessionExpire(t) {
    await xt(this, Dt, It).call(this), ze(this, ht).off("session_expire", t);
  }
};
zr = /* @__PURE__ */ new WeakMap(), sn = /* @__PURE__ */ new WeakMap(), $n = /* @__PURE__ */ new WeakMap(), ht = /* @__PURE__ */ new WeakMap(), Ys = /* @__PURE__ */ new WeakSet(), Gl = function() {
  const { modalOptions: e, projectId: t } = ze(this, zr);
  return new Kh(ob(sb({}, e), { projectId: t }));
}, Dt = /* @__PURE__ */ new WeakSet(), It = async function() {
  return ze(this, ht) ? !0 : (!ze(this, $n) && typeof window < "u" && Oi(this, $n, xt(this, Js, Hc).call(this)), ze(this, $n));
}, Js = /* @__PURE__ */ new WeakSet(), Hc = async function() {
  Oi(this, ht, await Zv.init({ metadata: ze(this, zr).metadata, projectId: ze(this, zr).projectId, relayUrl: ze(this, zr).relayUrl }));
  const e = await ze(this, ht).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", e);
  } catch {
    console.info("Unable to set client id");
  }
};
function cb(e) {
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
const Ci = cb();
let jn;
function ub(e) {
  jn = new ab(e);
}
async function Jt() {
  return new Promise((e) => {
    if (jn)
      e(jn);
    else {
      const t = setInterval(() => {
        jn && (clearInterval(t), e(jn));
      }, 200);
    }
  });
}
function lb(e) {
  return Yt(() => {
    ub(e);
  }, []), null;
}
const fb = bh(lb);
function Lo() {
  const [e, t] = qn(void 0), [r, n] = qn(void 0), [i, s] = qn(!1);
  return { data: e, error: r, loading: i, setData: t, setError: n, setLoading: s };
}
function hb(e) {
  const { data: t, error: r, loading: n, setData: i, setError: s, setLoading: o } = Lo();
  async function a(u) {
    try {
      o(!0), s(void 0);
      const h = await (await Jt()).connect(u ?? e);
      return i(h), Ci.emit("session_change"), h;
    } catch (h) {
      throw s(h), h;
    } finally {
      o(!1);
    }
  }
  return { data: t, error: r, loading: n, connect: a };
}
function db(e) {
  const { error: t, loading: r, setError: n, setLoading: i } = Lo();
  async function s(o) {
    try {
      i(!0), n(void 0), await (await Jt()).disconnect(o ?? e), Ci.emit("session_change");
    } catch (a) {
      throw n(a), a;
    } finally {
      i(!1);
    }
  }
  return { error: t, loading: r, disconnect: s };
}
function Yl(e) {
  Yt(() => (Jt().then((t) => {
    t.onSessionDelete(e);
  }), () => {
    Jt().then((t) => {
      t.offSessionDelete(e);
    });
  }), [e]);
}
function Mo(e) {
  Yt(() => (Jt().then((t) => {
    t.onSessionEvent(e);
  }), () => {
    Jt().then((t) => {
      t.offSessionEvent(e);
    });
  }), [e]);
}
function pb(e) {
  Yt(() => (Jt().then((t) => {
    t.onSessionExpire(e);
  }), () => {
    Jt().then((t) => {
      t.offSessionExpire(e);
    });
  }), [e]);
}
function gb(e) {
  Yt(() => (Jt().then((t) => {
    t.onSessionUpdate(e);
  }), () => {
    Jt().then((t) => {
      t.offSessionUpdate(e);
    });
  }), [e]);
}
function Xr(e) {
  const { data: t, error: r, loading: n, setData: i, setError: s, setLoading: o } = Lo();
  async function a(u) {
    try {
      o(!0), s(void 0);
      const h = await (await Jt()).request(u ?? e);
      return i(h), h;
    } catch (h) {
      throw s(h), h;
    } finally {
      o(!1);
    }
  }
  return { data: t, error: r, loading: n, request: a };
}
var yb = Object.defineProperty, mb = Object.defineProperties, vb = Object.getOwnPropertyDescriptors, Vc = Object.getOwnPropertySymbols, bb = Object.prototype.hasOwnProperty, _b = Object.prototype.propertyIsEnumerable, Wc = (e, t, r) => t in e ? yb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, wb = (e, t) => {
  for (var r in t || (t = {}))
    bb.call(t, r) && Wc(e, r, t[r]);
  if (Vc)
    for (var r of Vc(t))
      _b.call(t, r) && Wc(e, r, t[r]);
  return e;
}, Eb = (e, t) => mb(e, vb(t));
function dr() {
  const [e, t] = qn(void 0);
  return Yl((r) => {
    r.topic === (e == null ? void 0 : e.topic) && t(void 0);
  }), gb((r) => {
    if (e && r.topic === (e == null ? void 0 : e.topic)) {
      const { namespaces: n } = r.params, i = Eb(wb({}, e), { namespaces: n });
      t(i);
    }
  }), pb((r) => {
    e && r.topic === (e == null ? void 0 : e.topic) && t(void 0);
  }), Yt(() => {
    async function r() {
      const n = await (await Jt()).getSession();
      t(n);
    }
    return r(), Ci.on("session_change", r), () => {
      Ci.off("session_change", r);
    };
  }, []), e;
}
const Sb = [
  // aztec methods
  "aztec_connect",
  "aztec_disconnect",
  "aztec_getAccountPublicKey",
  "aztec_getSpendingPublicKey",
  "aztec_requestProofs"
], Jl = ["aztec:1337"], Xl = [
  // aleo methods
  "aleo_decrypt",
  "aleo_disconnect",
  "aleo_getSelectedAccount",
  "aleo_deployProgram",
  "aleo_getBalance",
  "aleo_executeProgram",
  "aleo_getRecords",
  "aleo_transfer"
], Uo = ["aleo:1"], Xs = ["chainChanged", "accountSelected", "accountSynced"], xb = "f0aaeffe71b636da453fce042d79d723", Gc = "https://walletconnect.puzzle.online/", Db = {
  standaloneChains: Jl.concat(Uo),
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
        universal: Gc
      }
    }
  ],
  desktopWallets: [
    {
      id: "puzzle",
      name: "Puzzle Wallet",
      links: {
        native: "",
        universal: Gc
      }
    }
  ],
  walletImages: {
    // Override manual wallet image
    puzzle: "https://i.imgur.com/p9tHaFC.png"
  }
}, zE = {
  requiredNamespaces: {
    aztec: {
      methods: Sb,
      chains: Jl,
      events: Xs
    },
    aleo: {
      methods: Xl,
      chains: Uo,
      events: Xs
    }
  }
}, KE = ({ dAppName: e, dAppDescription: t, dAppUrl: r, dAppIconURL: n }) => /* @__PURE__ */ As.jsx(
  fb,
  {
    projectId: xb,
    metadata: {
      name: e,
      description: t,
      url: r,
      icons: [
        n
      ]
    },
    modalOptions: { ...Db }
  }
), HE = ({ children: e }) => (EE(), /* @__PURE__ */ As.jsx(As.Fragment, { children: e })), Yc = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), n = (u, h) => {
    const f = typeof u == "function" ? u(t) : u;
    if (!Object.is(f, t)) {
      const d = t;
      t = h ?? typeof f != "object" ? f : Object.assign({}, t, f), r.forEach((y) => y(t, d));
    }
  }, i = () => t, a = { setState: n, getState: i, subscribe: (u) => (r.add(u), () => r.delete(u)), destroy: () => {
    r.clear();
  } };
  return t = e(n, i, a), a;
}, Ob = (e) => e ? Yc(e) : Yc;
var Qs = { exports: {} }, gs = {}, gi = { exports: {} }, ys = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jc;
function Cb() {
  if (Jc)
    return ys;
  Jc = 1;
  var e = gn;
  function t(d, y) {
    return d === y && (d !== 0 || 1 / d === 1 / y) || d !== d && y !== y;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, i = e.useEffect, s = e.useLayoutEffect, o = e.useDebugValue;
  function a(d, y) {
    var m = y(), w = n({ inst: { value: m, getSnapshot: y } }), O = w[0].inst, A = w[1];
    return s(function() {
      O.value = m, O.getSnapshot = y, u(O) && A({ inst: O });
    }, [d, m, y]), i(function() {
      return u(O) && A({ inst: O }), d(function() {
        u(O) && A({ inst: O });
      });
    }, [d]), o(m), m;
  }
  function u(d) {
    var y = d.getSnapshot;
    d = d.value;
    try {
      var m = y();
      return !r(d, m);
    } catch {
      return !0;
    }
  }
  function h(d, y) {
    return y();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : a;
  return ys.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, ys;
}
var ms = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xc;
function Ab() {
  return Xc || (Xc = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = gn, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(C) {
      {
        for (var v = arguments.length, S = new Array(v > 1 ? v - 1 : 0), p = 1; p < v; p++)
          S[p - 1] = arguments[p];
        n("error", C, S);
      }
    }
    function n(C, v, S) {
      {
        var p = t.ReactDebugCurrentFrame, c = p.getStackAddendum();
        c !== "" && (v += "%s", S = S.concat([c]));
        var g = S.map(function(F) {
          return String(F);
        });
        g.unshift("Warning: " + v), Function.prototype.apply.call(console[C], console, g);
      }
    }
    function i(C, v) {
      return C === v && (C !== 0 || 1 / C === 1 / v) || C !== C && v !== v;
    }
    var s = typeof Object.is == "function" ? Object.is : i, o = e.useState, a = e.useEffect, u = e.useLayoutEffect, h = e.useDebugValue, f = !1, d = !1;
    function y(C, v, S) {
      f || e.startTransition !== void 0 && (f = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var p = v();
      if (!d) {
        var c = v();
        s(p, c) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var g = o({
        inst: {
          value: p,
          getSnapshot: v
        }
      }), F = g[0].inst, M = g[1];
      return u(function() {
        F.value = p, F.getSnapshot = v, m(F) && M({
          inst: F
        });
      }, [C, p, v]), a(function() {
        m(F) && M({
          inst: F
        });
        var U = function() {
          m(F) && M({
            inst: F
          });
        };
        return C(U);
      }, [C]), h(p), p;
    }
    function m(C) {
      var v = C.getSnapshot, S = C.value;
      try {
        var p = v();
        return !s(S, p);
      } catch {
        return !0;
      }
    }
    function w(C, v, S) {
      return v();
    }
    var O = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", A = !O, L = A ? w : y, _ = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : L;
    ms.useSyncExternalStore = _, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ms;
}
var Qc;
function Ql() {
  return Qc || (Qc = 1, process.env.NODE_ENV === "production" ? gi.exports = Cb() : gi.exports = Ab()), gi.exports;
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
var Zc;
function Ib() {
  if (Zc)
    return gs;
  Zc = 1;
  var e = gn, t = Ql();
  function r(h, f) {
    return h === f && (h !== 0 || 1 / h === 1 / f) || h !== h && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : r, i = t.useSyncExternalStore, s = e.useRef, o = e.useEffect, a = e.useMemo, u = e.useDebugValue;
  return gs.useSyncExternalStoreWithSelector = function(h, f, d, y, m) {
    var w = s(null);
    if (w.current === null) {
      var O = { hasValue: !1, value: null };
      w.current = O;
    } else
      O = w.current;
    w = a(function() {
      function L(p) {
        if (!_) {
          if (_ = !0, C = p, p = y(p), m !== void 0 && O.hasValue) {
            var c = O.value;
            if (m(c, p))
              return v = c;
          }
          return v = p;
        }
        if (c = v, n(C, p))
          return c;
        var g = y(p);
        return m !== void 0 && m(c, g) ? c : (C = p, v = g);
      }
      var _ = !1, C, v, S = d === void 0 ? null : d;
      return [function() {
        return L(f());
      }, S === null ? void 0 : function() {
        return L(S());
      }];
    }, [f, d, y, m]);
    var A = i(h, w[0], w[1]);
    return o(function() {
      O.hasValue = !0, O.value = A;
    }, [A]), u(A), A;
  }, gs;
}
var vs = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eu;
function Tb() {
  return eu || (eu = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = gn, t = Ql();
    function r(f, d) {
      return f === d && (f !== 0 || 1 / f === 1 / d) || f !== f && d !== d;
    }
    var n = typeof Object.is == "function" ? Object.is : r, i = t.useSyncExternalStore, s = e.useRef, o = e.useEffect, a = e.useMemo, u = e.useDebugValue;
    function h(f, d, y, m, w) {
      var O = s(null), A;
      O.current === null ? (A = {
        hasValue: !1,
        value: null
      }, O.current = A) : A = O.current;
      var L = a(function() {
        var S = !1, p, c, g = function($) {
          if (!S) {
            S = !0, p = $;
            var B = m($);
            if (w !== void 0 && A.hasValue) {
              var x = A.value;
              if (w(x, B))
                return c = x, x;
            }
            return c = B, B;
          }
          var R = p, G = c;
          if (n(R, $))
            return G;
          var z = m($);
          return w !== void 0 && w(G, z) ? G : (p = $, c = z, z);
        }, F = y === void 0 ? null : y, M = function() {
          return g(d());
        }, U = F === null ? void 0 : function() {
          return g(F());
        };
        return [M, U];
      }, [d, y, m, w]), _ = L[0], C = L[1], v = i(f, _, C);
      return o(function() {
        A.hasValue = !0, A.value = v;
      }, [v]), u(v), v;
    }
    vs.useSyncExternalStoreWithSelector = h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), vs;
}
process.env.NODE_ENV === "production" ? Qs.exports = Ib() : Qs.exports = Tb();
var Rb = Qs.exports;
const Nb = /* @__PURE__ */ Mi(Rb), { useSyncExternalStoreWithSelector: Pb } = Nb;
function Fb(e, t = e.getState, r) {
  const n = Pb(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    r
  );
  return _h(n), n;
}
const tu = (e) => {
  const t = typeof e == "function" ? Ob(e) : e, r = (n, i) => Fb(t, n, i);
  return Object.assign(r, t), r;
}, Lb = (e) => e ? tu(e) : tu;
function mt(e) {
  for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  if (process.env.NODE_ENV !== "production") {
    var i = zb[e], s = i ? typeof i == "function" ? i.apply(null, r) : i : "unknown error nr: " + e;
    throw Error("[Immer] " + s);
  }
  throw Error("[Immer] minified error nr: " + e + (r.length ? " " + r.map(function(o) {
    return "'" + o + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function hn(e) {
  return !!e && !!e[kt];
}
function Vr(e) {
  var t;
  return !!e && (function(r) {
    if (!r || typeof r != "object")
      return !1;
    var n = Object.getPrototypeOf(r);
    if (n === null)
      return !0;
    var i = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
    return i === Object || typeof i == "function" && Function.toString.call(i) === Kb;
  }(e) || Array.isArray(e) || !!e[uu] || !!(!((t = e.constructor) === null || t === void 0) && t[uu]) || $o(e) || jo(e));
}
function Wn(e, t, r) {
  r === void 0 && (r = !1), _n(e) === 0 ? (r ? Object.keys : Ko)(e).forEach(function(n) {
    r && typeof n == "symbol" || t(n, e[n], e);
  }) : e.forEach(function(n, i) {
    return t(i, n, e);
  });
}
function _n(e) {
  var t = e[kt];
  return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : $o(e) ? 2 : jo(e) ? 3 : 0;
}
function Zs(e, t) {
  return _n(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Mb(e, t) {
  return _n(e) === 2 ? e.get(t) : e[t];
}
function Zl(e, t, r) {
  var n = _n(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function Ub(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function $o(e) {
  return Bb && e instanceof Map;
}
function jo(e) {
  return qb && e instanceof Set;
}
function qr(e) {
  return e.o || e.t;
}
function ko(e) {
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  var t = Hb(e);
  delete t[kt];
  for (var r = Ko(t), n = 0; n < r.length; n++) {
    var i = r[n], s = t[i];
    s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (t[i] = { configurable: !0, writable: !0, enumerable: s.enumerable, value: e[i] });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function Bo(e, t) {
  return t === void 0 && (t = !1), qo(e) || hn(e) || !Vr(e) || (_n(e) > 1 && (e.set = e.add = e.clear = e.delete = $b), Object.freeze(e), t && Wn(e, function(r, n) {
    return Bo(n, !0);
  }, !0)), e;
}
function $b() {
  mt(2);
}
function qo(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function fr(e) {
  var t = Vb[e];
  return t || mt(18, e), t;
}
function ru() {
  return process.env.NODE_ENV === "production" || dn || mt(0), dn;
}
function bs(e, t) {
  t && (fr("Patches"), e.u = [], e.s = [], e.v = t);
}
function Ai(e) {
  eo(e), e.p.forEach(jb), e.p = null;
}
function eo(e) {
  e === dn && (dn = e.l);
}
function nu(e) {
  return dn = { p: [], l: dn, h: e, m: !0, _: 0 };
}
function jb(e) {
  var t = e[kt];
  t.i === 0 || t.i === 1 ? t.j() : t.O = !0;
}
function _s(e, t) {
  t._ = t.p.length;
  var r = t.p[0], n = e !== void 0 && e !== r;
  return t.h.g || fr("ES5").S(t, e, n), n ? (r[kt].P && (Ai(t), mt(4)), Vr(e) && (e = Ii(t, e), t.l || Ti(t, e)), t.u && fr("Patches").M(r[kt].t, e, t.u, t.s)) : e = Ii(t, r, []), Ai(t), t.u && t.v(t.u, t.s), e !== ef ? e : void 0;
}
function Ii(e, t, r) {
  if (qo(t))
    return t;
  var n = t[kt];
  if (!n)
    return Wn(t, function(a, u) {
      return iu(e, n, t, a, u, r);
    }, !0), t;
  if (n.A !== e)
    return t;
  if (!n.P)
    return Ti(e, n.t, !0), n.t;
  if (!n.I) {
    n.I = !0, n.A._--;
    var i = n.i === 4 || n.i === 5 ? n.o = ko(n.k) : n.o, s = i, o = !1;
    n.i === 3 && (s = new Set(i), i.clear(), o = !0), Wn(s, function(a, u) {
      return iu(e, n, i, a, u, r, o);
    }), Ti(e, i, !1), r && e.u && fr("Patches").N(n, r, e.u, e.s);
  }
  return n.o;
}
function iu(e, t, r, n, i, s, o) {
  if (process.env.NODE_ENV !== "production" && i === r && mt(5), hn(i)) {
    var a = Ii(e, i, s && t && t.i !== 3 && !Zs(t.R, n) ? s.concat(n) : void 0);
    if (Zl(r, n, a), !hn(a))
      return;
    e.m = !1;
  } else
    o && r.add(i);
  if (Vr(i) && !qo(i)) {
    if (!e.h.D && e._ < 1)
      return;
    Ii(e, i), t && t.A.l || Ti(e, i);
  }
}
function Ti(e, t, r) {
  r === void 0 && (r = !1), !e.l && e.h.D && e.m && Bo(t, r);
}
function ws(e, t) {
  var r = e[kt];
  return (r ? qr(r) : e)[t];
}
function su(e, t) {
  if (t in e)
    for (var r = Object.getPrototypeOf(e); r; ) {
      var n = Object.getOwnPropertyDescriptor(r, t);
      if (n)
        return n;
      r = Object.getPrototypeOf(r);
    }
}
function to(e) {
  e.P || (e.P = !0, e.l && to(e.l));
}
function Es(e) {
  e.o || (e.o = ko(e.t));
}
function ro(e, t, r) {
  var n = $o(t) ? fr("MapSet").F(t, r) : jo(t) ? fr("MapSet").T(t, r) : e.g ? function(i, s) {
    var o = Array.isArray(i), a = { i: o ? 1 : 0, A: s ? s.A : ru(), P: !1, I: !1, R: {}, l: s, t: i, k: null, o: null, j: null, C: !1 }, u = a, h = no;
    o && (u = [a], h = kn);
    var f = Proxy.revocable(u, h), d = f.revoke, y = f.proxy;
    return a.k = y, a.j = d, y;
  }(t, r) : fr("ES5").J(t, r);
  return (r ? r.A : ru()).p.push(n), n;
}
function kb(e) {
  return hn(e) || mt(22, e), function t(r) {
    if (!Vr(r))
      return r;
    var n, i = r[kt], s = _n(r);
    if (i) {
      if (!i.P && (i.i < 4 || !fr("ES5").K(i)))
        return i.t;
      i.I = !0, n = ou(r, s), i.I = !1;
    } else
      n = ou(r, s);
    return Wn(n, function(o, a) {
      i && Mb(i.t, o) === a || Zl(n, o, t(a));
    }), s === 3 ? new Set(n) : n;
  }(e);
}
function ou(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return ko(e);
}
var au, dn, zo = typeof Symbol < "u" && typeof Symbol("x") == "symbol", Bb = typeof Map < "u", qb = typeof Set < "u", cu = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", ef = zo ? Symbol.for("immer-nothing") : ((au = {})["immer-nothing"] = !0, au), uu = zo ? Symbol.for("immer-draftable") : "__$immer_draftable", kt = zo ? Symbol.for("immer-state") : "__$immer_state", zb = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(e) {
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
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" }, Kb = "" + Object.prototype.constructor, Ko = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Object.getOwnPropertyNames, Hb = Object.getOwnPropertyDescriptors || function(e) {
  var t = {};
  return Ko(e).forEach(function(r) {
    t[r] = Object.getOwnPropertyDescriptor(e, r);
  }), t;
}, Vb = {}, no = { get: function(e, t) {
  if (t === kt)
    return e;
  var r = qr(e);
  if (!Zs(r, t))
    return function(i, s, o) {
      var a, u = su(s, o);
      return u ? "value" in u ? u.value : (a = u.get) === null || a === void 0 ? void 0 : a.call(i.k) : void 0;
    }(e, r, t);
  var n = r[t];
  return e.I || !Vr(n) ? n : n === ws(e.t, t) ? (Es(e), e.o[t] = ro(e.A.h, n, e)) : n;
}, has: function(e, t) {
  return t in qr(e);
}, ownKeys: function(e) {
  return Reflect.ownKeys(qr(e));
}, set: function(e, t, r) {
  var n = su(qr(e), t);
  if (n != null && n.set)
    return n.set.call(e.k, r), !0;
  if (!e.P) {
    var i = ws(qr(e), t), s = i == null ? void 0 : i[kt];
    if (s && s.t === r)
      return e.o[t] = r, e.R[t] = !1, !0;
    if (Ub(r, i) && (r !== void 0 || Zs(e.t, t)))
      return !0;
    Es(e), to(e);
  }
  return e.o[t] === r && (r !== void 0 || t in e.o) || Number.isNaN(r) && Number.isNaN(e.o[t]) || (e.o[t] = r, e.R[t] = !0), !0;
}, deleteProperty: function(e, t) {
  return ws(e.t, t) !== void 0 || t in e.t ? (e.R[t] = !1, Es(e), to(e)) : delete e.R[t], e.o && delete e.o[t], !0;
}, getOwnPropertyDescriptor: function(e, t) {
  var r = qr(e), n = Reflect.getOwnPropertyDescriptor(r, t);
  return n && { writable: !0, configurable: e.i !== 1 || t !== "length", enumerable: n.enumerable, value: r[t] };
}, defineProperty: function() {
  mt(11);
}, getPrototypeOf: function(e) {
  return Object.getPrototypeOf(e.t);
}, setPrototypeOf: function() {
  mt(12);
} }, kn = {};
Wn(no, function(e, t) {
  kn[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
}), kn.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && mt(13), kn.set.call(this, e, t, void 0);
}, kn.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && mt(14), no.set.call(this, e[0], t, r, e[0]);
};
var Wb = function() {
  function e(r) {
    var n = this;
    this.g = cu, this.D = !0, this.produce = function(i, s, o) {
      if (typeof i == "function" && typeof s != "function") {
        var a = s;
        s = i;
        var u = n;
        return function(O) {
          var A = this;
          O === void 0 && (O = a);
          for (var L = arguments.length, _ = Array(L > 1 ? L - 1 : 0), C = 1; C < L; C++)
            _[C - 1] = arguments[C];
          return u.produce(O, function(v) {
            var S;
            return (S = s).call.apply(S, [A, v].concat(_));
          });
        };
      }
      var h;
      if (typeof s != "function" && mt(6), o !== void 0 && typeof o != "function" && mt(7), Vr(i)) {
        var f = nu(n), d = ro(n, i, void 0), y = !0;
        try {
          h = s(d), y = !1;
        } finally {
          y ? Ai(f) : eo(f);
        }
        return typeof Promise < "u" && h instanceof Promise ? h.then(function(O) {
          return bs(f, o), _s(O, f);
        }, function(O) {
          throw Ai(f), O;
        }) : (bs(f, o), _s(h, f));
      }
      if (!i || typeof i != "object") {
        if ((h = s(i)) === void 0 && (h = i), h === ef && (h = void 0), n.D && Bo(h, !0), o) {
          var m = [], w = [];
          fr("Patches").M(i, h, m, w), o(m, w);
        }
        return h;
      }
      mt(21, i);
    }, this.produceWithPatches = function(i, s) {
      if (typeof i == "function")
        return function(h) {
          for (var f = arguments.length, d = Array(f > 1 ? f - 1 : 0), y = 1; y < f; y++)
            d[y - 1] = arguments[y];
          return n.produceWithPatches(h, function(m) {
            return i.apply(void 0, [m].concat(d));
          });
        };
      var o, a, u = n.produce(i, s, function(h, f) {
        o = h, a = f;
      });
      return typeof Promise < "u" && u instanceof Promise ? u.then(function(h) {
        return [h, o, a];
      }) : [u, o, a];
    }, typeof (r == null ? void 0 : r.useProxies) == "boolean" && this.setUseProxies(r.useProxies), typeof (r == null ? void 0 : r.autoFreeze) == "boolean" && this.setAutoFreeze(r.autoFreeze);
  }
  var t = e.prototype;
  return t.createDraft = function(r) {
    Vr(r) || mt(8), hn(r) && (r = kb(r));
    var n = nu(this), i = ro(this, r, void 0);
    return i[kt].C = !0, eo(n), i;
  }, t.finishDraft = function(r, n) {
    var i = r && r[kt];
    process.env.NODE_ENV !== "production" && (i && i.C || mt(9), i.I && mt(10));
    var s = i.A;
    return bs(s, n), _s(void 0, s);
  }, t.setAutoFreeze = function(r) {
    this.D = r;
  }, t.setUseProxies = function(r) {
    r && !cu && mt(20), this.g = r;
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
    var o = fr("Patches").$;
    return hn(r) ? o(r, n) : this.produce(r, function(a) {
      return o(a, n);
    });
  }, e;
}(), Bt = new Wb(), Gb = Bt.produce;
Bt.produceWithPatches.bind(Bt);
Bt.setAutoFreeze.bind(Bt);
Bt.setUseProxies.bind(Bt);
Bt.applyPatches.bind(Bt);
Bt.createDraft.bind(Bt);
Bt.finishDraft.bind(Bt);
const Yb = (e) => (t, r, n) => (n.setState = (i, s, ...o) => {
  const a = typeof i == "function" ? Gb(i) : i;
  return t(a, s, ...o);
}, e(n.setState, r, n)), Jb = Yb, br = Lb()(
  Jb((e, t) => ({
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
), VE = () => {
  const e = dr(), [t, r, n, i] = br((f) => [
    f.account,
    f.accounts,
    f.chainId,
    f.setAccount
  ]), { request: s, data: o, error: a, loading: u } = Xr({
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
  Mo(({ params: f, topic: d }) => {
    if (f.event.name === "accountSelected" && e && e.topic === d) {
      const m = f.event.data, w = f.chainId.split(":")[0], O = f.chainId.split(":")[1];
      i({
        network: w,
        chainId: O,
        address: m
      });
    }
  }), Yt(() => {
    e && !u && s();
  }, [e == null ? void 0 : e.topic]), Yt(() => {
    if (o) {
      const f = o && o.type === "GET_SELECTED_ACCOUNT_RES" ? o : void 0, d = f == null ? void 0 : f.data.account;
      d && i(d);
    }
  }, [o]);
  const h = a ? a.message : o && o.type === "GET_SELECTED_ACCOUNT_REJ" ? o.data.error : void 0;
  return {
    account: t,
    accounts: r,
    error: h,
    loading: u
  };
}, WE = () => {
  const e = dr(), [t, r] = br((d) => [
    d.chainId,
    d.account
  ]), { request: n, data: i, error: s, loading: o } = Xr({
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
  Mo(({ _: d, params: y, topic: m }) => {
    y.event.name === "accountSynced" && e && e.topic === m && !o && n();
  });
  const a = !!e && !!r;
  Yt(() => {
    a && !o && n();
  }, [a, r]);
  const u = s ? s.message : i && i.type === "GET_BALANCE_REJ" ? i.data.error : void 0, h = i && i.type === "GET_BALANCE_RES" ? i : void 0, f = h == null ? void 0 : h.data.balances;
  return { loading: o, balances: f, error: u };
}, GE = () => {
  const e = dr(), { connect: t, data: r, error: n, loading: i } = hb({
    requiredNamespaces: {
      aleo: {
        methods: Xl,
        chains: Uo,
        events: Xs
      }
    }
  });
  return { connect: async () => {
    await t();
  }, data: r, error: n, loading: i, session: e, isConnected: !!e };
}, YE = (e) => {
  const t = dr(), [r] = br((d) => [
    d.chainId
  ]), { request: n, data: i, error: s, loading: o } = Xr({
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
  }), a = s ? s.message : i && i.type === "DECRYPT_REJ" ? i.data.error : void 0, u = i && i.type === "DECRYPT_RES" ? i : void 0, h = u == null ? void 0 : u.data.transitions;
  return { decrypt: () => {
    !e || !e.startsWith("at1") || e.length !== 61 || n();
  }, transitions: h, loading: o, error: a };
}, JE = (e) => {
  const t = dr(), [r] = br((d) => [
    d.chainId
  ]), { request: n, data: i, error: s, loading: o } = Xr({
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
  }), a = s ? s.message : i && i.type === "DEPLOY_REJ" ? i.data.error : void 0, u = i && i.type === "DEPLOY_RES" ? i : void 0, h = u == null ? void 0 : u.data.transactionId;
  return { deploy: () => {
    e && n();
  }, transactionId: h, loading: o, error: a };
};
var io = { exports: {} }, Ss, lu;
function Xb() {
  if (lu)
    return Ss;
  lu = 1;
  var e = 1e3, t = e * 60, r = t * 60, n = r * 24, i = n * 7, s = n * 365.25;
  Ss = function(f, d) {
    d = d || {};
    var y = typeof f;
    if (y === "string" && f.length > 0)
      return o(f);
    if (y === "number" && isFinite(f))
      return d.long ? u(f) : a(f);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(f)
    );
  };
  function o(f) {
    if (f = String(f), !(f.length > 100)) {
      var d = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        f
      );
      if (d) {
        var y = parseFloat(d[1]), m = (d[2] || "ms").toLowerCase();
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
            return y * i;
          case "days":
          case "day":
          case "d":
            return y * n;
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
  function a(f) {
    var d = Math.abs(f);
    return d >= n ? Math.round(f / n) + "d" : d >= r ? Math.round(f / r) + "h" : d >= t ? Math.round(f / t) + "m" : d >= e ? Math.round(f / e) + "s" : f + "ms";
  }
  function u(f) {
    var d = Math.abs(f);
    return d >= n ? h(f, d, n, "day") : d >= r ? h(f, d, r, "hour") : d >= t ? h(f, d, t, "minute") : d >= e ? h(f, d, e, "second") : f + " ms";
  }
  function h(f, d, y, m) {
    var w = d >= y * 1.5;
    return Math.round(f / y) + " " + m + (w ? "s" : "");
  }
  return Ss;
}
function Qb(e) {
  r.debug = r, r.default = r, r.coerce = u, r.disable = s, r.enable = i, r.enabled = o, r.humanize = Xb(), r.destroy = h, Object.keys(e).forEach((f) => {
    r[f] = e[f];
  }), r.names = [], r.skips = [], r.formatters = {};
  function t(f) {
    let d = 0;
    for (let y = 0; y < f.length; y++)
      d = (d << 5) - d + f.charCodeAt(y), d |= 0;
    return r.colors[Math.abs(d) % r.colors.length];
  }
  r.selectColor = t;
  function r(f) {
    let d, y = null, m, w;
    function O(...A) {
      if (!O.enabled)
        return;
      const L = O, _ = Number(/* @__PURE__ */ new Date()), C = _ - (d || _);
      L.diff = C, L.prev = d, L.curr = _, d = _, A[0] = r.coerce(A[0]), typeof A[0] != "string" && A.unshift("%O");
      let v = 0;
      A[0] = A[0].replace(/%([a-zA-Z%])/g, (p, c) => {
        if (p === "%%")
          return "%";
        v++;
        const g = r.formatters[c];
        if (typeof g == "function") {
          const F = A[v];
          p = g.call(L, F), A.splice(v, 1), v--;
        }
        return p;
      }), r.formatArgs.call(L, A), (L.log || r.log).apply(L, A);
    }
    return O.namespace = f, O.useColors = r.useColors(), O.color = r.selectColor(f), O.extend = n, O.destroy = r.destroy, Object.defineProperty(O, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => y !== null ? y : (m !== r.namespaces && (m = r.namespaces, w = r.enabled(f)), w),
      set: (A) => {
        y = A;
      }
    }), typeof r.init == "function" && r.init(O), O;
  }
  function n(f, d) {
    const y = r(this.namespace + (typeof d > "u" ? ":" : d) + f);
    return y.log = this.log, y;
  }
  function i(f) {
    r.save(f), r.namespaces = f, r.names = [], r.skips = [];
    let d;
    const y = (typeof f == "string" ? f : "").split(/[\s,]+/), m = y.length;
    for (d = 0; d < m; d++)
      y[d] && (f = y[d].replace(/\*/g, ".*?"), f[0] === "-" ? r.skips.push(new RegExp("^" + f.slice(1) + "$")) : r.names.push(new RegExp("^" + f + "$")));
  }
  function s() {
    const f = [
      ...r.names.map(a),
      ...r.skips.map(a).map((d) => "-" + d)
    ].join(",");
    return r.enable(""), f;
  }
  function o(f) {
    if (f[f.length - 1] === "*")
      return !0;
    let d, y;
    for (d = 0, y = r.skips.length; d < y; d++)
      if (r.skips[d].test(f))
        return !1;
    for (d = 0, y = r.names.length; d < y; d++)
      if (r.names[d].test(f))
        return !0;
    return !1;
  }
  function a(f) {
    return f.toString().substring(2, f.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function u(f) {
    return f instanceof Error ? f.stack || f.message : f;
  }
  function h() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return r.enable(r.load()), r;
}
var Zb = Qb;
(function(e, t) {
  t.formatArgs = n, t.save = i, t.load = s, t.useColors = r, t.storage = o(), t.destroy = (() => {
    let u = !1;
    return () => {
      u || (u = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
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
  function n(u) {
    if (u[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + u[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors)
      return;
    const h = "color: " + this.color;
    u.splice(1, 0, h, "color: inherit");
    let f = 0, d = 0;
    u[0].replace(/%[a-zA-Z%]/g, (y) => {
      y !== "%%" && (f++, y === "%c" && (d = f));
    }), u.splice(d, 0, h);
  }
  t.log = console.debug || console.log || (() => {
  });
  function i(u) {
    try {
      u ? t.storage.setItem("debug", u) : t.storage.removeItem("debug");
    } catch {
    }
  }
  function s() {
    let u;
    try {
      u = t.storage.getItem("debug");
    } catch {
    }
    return !u && typeof process < "u" && "env" in process && (u = process.env.DEBUG), u;
  }
  function o() {
    try {
      return localStorage;
    } catch {
    }
  }
  e.exports = Zb(t);
  const { formatters: a } = e.exports;
  a.j = function(u) {
    try {
      return JSON.stringify(u);
    } catch (h) {
      return "[UnexpectedJSONParseError]: " + h.message;
    }
  };
})(io, io.exports);
var e_ = io.exports;
const t_ = /* @__PURE__ */ Mi(e_), Ho = t_("wallet:sdk");
Ho.enabled = !0;
const XE = () => {
  const e = dr(), [t] = br((a) => [
    a.disconnect
  ]), { disconnect: r, error: n, loading: i } = db({
    topic: e == null ? void 0 : e.topic,
    reason: ct("USER_DISCONNECTED")
  }), s = async () => {
    if (e) {
      try {
        r();
      } catch {
        Ho("could not disconnect session entirely");
      }
      t();
    }
  }, o = n ? n.message : void 0;
  return { disconnect: s, error: o, loading: i };
}, QE = (e) => {
  const t = dr(), [r] = br((y) => [
    y.chainId
  ]), { request: n, data: i, error: s, loading: o } = Xr({
    topic: (t == null ? void 0 : t.topic) ?? "",
    chainId: r ?? "aleo:1",
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
  }), a = s ? s.message : i && i.type === "EXECUTE_REJ" ? i.data.error : void 0, u = i && i.type === "EXECUTE_RES" ? i : void 0, h = u == null ? void 0 : u.data.transactionId, f = u == null ? void 0 : u.data.transitions;
  return { execute: () => {
    e && n();
  }, transactionId: h, transitions: f, error: a, loading: o };
}, ZE = () => {
  const [e, t] = qn({
    loading: !0
  });
  return Yt(() => {
  }, []), { ...e };
};
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function tf(e) {
  return typeof e > "u" || e === null;
}
function r_(e) {
  return typeof e == "object" && e !== null;
}
function n_(e) {
  return Array.isArray(e) ? e : tf(e) ? [] : [e];
}
function i_(e, t) {
  var r, n, i, s;
  if (t)
    for (s = Object.keys(t), r = 0, n = s.length; r < n; r += 1)
      i = s[r], e[i] = t[i];
  return e;
}
function s_(e, t) {
  var r = "", n;
  for (n = 0; n < t; n += 1)
    r += e;
  return r;
}
function o_(e) {
  return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
}
var a_ = tf, c_ = r_, u_ = n_, l_ = s_, f_ = o_, h_ = i_, ut = {
  isNothing: a_,
  isObject: c_,
  toArray: u_,
  repeat: l_,
  isNegativeZero: f_,
  extend: h_
};
function rf(e, t) {
  var r = "", n = e.reason || "(unknown reason)";
  return e.mark ? (e.mark.name && (r += 'in "' + e.mark.name + '" '), r += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")", !t && e.mark.snippet && (r += `

` + e.mark.snippet), n + " " + r) : n;
}
function Gn(e, t) {
  Error.call(this), this.name = "YAMLException", this.reason = e, this.mark = t, this.message = rf(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
Gn.prototype = Object.create(Error.prototype);
Gn.prototype.constructor = Gn;
Gn.prototype.toString = function(t) {
  return this.name + ": " + rf(this, t);
};
var Rt = Gn;
function xs(e, t, r, n, i) {
  var s = "", o = "", a = Math.floor(i / 2) - 1;
  return n - t > a && (s = " ... ", t = n - a + s.length), r - n > a && (o = " ...", r = n + a - o.length), {
    str: s + e.slice(t, r).replace(/\t/g, "→") + o,
    pos: n - t + s.length
    // relative position
  };
}
function Ds(e, t) {
  return ut.repeat(" ", t - e.length) + e;
}
function d_(e, t) {
  if (t = Object.create(t || null), !e.buffer)
    return null;
  t.maxLength || (t.maxLength = 79), typeof t.indent != "number" && (t.indent = 1), typeof t.linesBefore != "number" && (t.linesBefore = 3), typeof t.linesAfter != "number" && (t.linesAfter = 2);
  for (var r = /\r?\n|\r|\0/g, n = [0], i = [], s, o = -1; s = r.exec(e.buffer); )
    i.push(s.index), n.push(s.index + s[0].length), e.position <= s.index && o < 0 && (o = n.length - 2);
  o < 0 && (o = n.length - 1);
  var a = "", u, h, f = Math.min(e.line + t.linesAfter, i.length).toString().length, d = t.maxLength - (t.indent + f + 3);
  for (u = 1; u <= t.linesBefore && !(o - u < 0); u++)
    h = xs(
      e.buffer,
      n[o - u],
      i[o - u],
      e.position - (n[o] - n[o - u]),
      d
    ), a = ut.repeat(" ", t.indent) + Ds((e.line - u + 1).toString(), f) + " | " + h.str + `
` + a;
  for (h = xs(e.buffer, n[o], i[o], e.position, d), a += ut.repeat(" ", t.indent) + Ds((e.line + 1).toString(), f) + " | " + h.str + `
`, a += ut.repeat("-", t.indent + f + 3 + h.pos) + `^
`, u = 1; u <= t.linesAfter && !(o + u >= i.length); u++)
    h = xs(
      e.buffer,
      n[o + u],
      i[o + u],
      e.position - (n[o] - n[o + u]),
      d
    ), a += ut.repeat(" ", t.indent) + Ds((e.line + u + 1).toString(), f) + " | " + h.str + `
`;
  return a.replace(/\n$/, "");
}
var p_ = d_, g_ = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
], y_ = [
  "scalar",
  "sequence",
  "mapping"
];
function m_(e) {
  var t = {};
  return e !== null && Object.keys(e).forEach(function(r) {
    e[r].forEach(function(n) {
      t[String(n)] = r;
    });
  }), t;
}
function v_(e, t) {
  if (t = t || {}, Object.keys(t).forEach(function(r) {
    if (g_.indexOf(r) === -1)
      throw new Rt('Unknown option "' + r + '" is met in definition of "' + e + '" YAML type.');
  }), this.options = t, this.tag = e, this.kind = t.kind || null, this.resolve = t.resolve || function() {
    return !0;
  }, this.construct = t.construct || function(r) {
    return r;
  }, this.instanceOf = t.instanceOf || null, this.predicate = t.predicate || null, this.represent = t.represent || null, this.representName = t.representName || null, this.defaultStyle = t.defaultStyle || null, this.multi = t.multi || !1, this.styleAliases = m_(t.styleAliases || null), y_.indexOf(this.kind) === -1)
    throw new Rt('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.');
}
var vt = v_;
function fu(e, t) {
  var r = [];
  return e[t].forEach(function(n) {
    var i = r.length;
    r.forEach(function(s, o) {
      s.tag === n.tag && s.kind === n.kind && s.multi === n.multi && (i = o);
    }), r[i] = n;
  }), r;
}
function b_() {
  var e = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, t, r;
  function n(i) {
    i.multi ? (e.multi[i.kind].push(i), e.multi.fallback.push(i)) : e[i.kind][i.tag] = e.fallback[i.tag] = i;
  }
  for (t = 0, r = arguments.length; t < r; t += 1)
    arguments[t].forEach(n);
  return e;
}
function so(e) {
  return this.extend(e);
}
so.prototype.extend = function(t) {
  var r = [], n = [];
  if (t instanceof vt)
    n.push(t);
  else if (Array.isArray(t))
    n = n.concat(t);
  else if (t && (Array.isArray(t.implicit) || Array.isArray(t.explicit)))
    t.implicit && (r = r.concat(t.implicit)), t.explicit && (n = n.concat(t.explicit));
  else
    throw new Rt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  r.forEach(function(s) {
    if (!(s instanceof vt))
      throw new Rt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (s.loadKind && s.loadKind !== "scalar")
      throw new Rt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (s.multi)
      throw new Rt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), n.forEach(function(s) {
    if (!(s instanceof vt))
      throw new Rt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var i = Object.create(so.prototype);
  return i.implicit = (this.implicit || []).concat(r), i.explicit = (this.explicit || []).concat(n), i.compiledImplicit = fu(i, "implicit"), i.compiledExplicit = fu(i, "explicit"), i.compiledTypeMap = b_(i.compiledImplicit, i.compiledExplicit), i;
};
var nf = so, sf = new vt("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(e) {
    return e !== null ? e : "";
  }
}), of = new vt("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(e) {
    return e !== null ? e : [];
  }
}), af = new vt("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(e) {
    return e !== null ? e : {};
  }
}), cf = new nf({
  explicit: [
    sf,
    of,
    af
  ]
});
function __(e) {
  if (e === null)
    return !0;
  var t = e.length;
  return t === 1 && e === "~" || t === 4 && (e === "null" || e === "Null" || e === "NULL");
}
function w_() {
  return null;
}
function E_(e) {
  return e === null;
}
var uf = new vt("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: __,
  construct: w_,
  predicate: E_,
  represent: {
    canonical: function() {
      return "~";
    },
    lowercase: function() {
      return "null";
    },
    uppercase: function() {
      return "NULL";
    },
    camelcase: function() {
      return "Null";
    },
    empty: function() {
      return "";
    }
  },
  defaultStyle: "lowercase"
});
function S_(e) {
  if (e === null)
    return !1;
  var t = e.length;
  return t === 4 && (e === "true" || e === "True" || e === "TRUE") || t === 5 && (e === "false" || e === "False" || e === "FALSE");
}
function x_(e) {
  return e === "true" || e === "True" || e === "TRUE";
}
function D_(e) {
  return Object.prototype.toString.call(e) === "[object Boolean]";
}
var lf = new vt("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: S_,
  construct: x_,
  predicate: D_,
  represent: {
    lowercase: function(e) {
      return e ? "true" : "false";
    },
    uppercase: function(e) {
      return e ? "TRUE" : "FALSE";
    },
    camelcase: function(e) {
      return e ? "True" : "False";
    }
  },
  defaultStyle: "lowercase"
});
function O_(e) {
  return 48 <= e && e <= 57 || 65 <= e && e <= 70 || 97 <= e && e <= 102;
}
function C_(e) {
  return 48 <= e && e <= 55;
}
function A_(e) {
  return 48 <= e && e <= 57;
}
function I_(e) {
  if (e === null)
    return !1;
  var t = e.length, r = 0, n = !1, i;
  if (!t)
    return !1;
  if (i = e[r], (i === "-" || i === "+") && (i = e[++r]), i === "0") {
    if (r + 1 === t)
      return !0;
    if (i = e[++r], i === "b") {
      for (r++; r < t; r++)
        if (i = e[r], i !== "_") {
          if (i !== "0" && i !== "1")
            return !1;
          n = !0;
        }
      return n && i !== "_";
    }
    if (i === "x") {
      for (r++; r < t; r++)
        if (i = e[r], i !== "_") {
          if (!O_(e.charCodeAt(r)))
            return !1;
          n = !0;
        }
      return n && i !== "_";
    }
    if (i === "o") {
      for (r++; r < t; r++)
        if (i = e[r], i !== "_") {
          if (!C_(e.charCodeAt(r)))
            return !1;
          n = !0;
        }
      return n && i !== "_";
    }
  }
  if (i === "_")
    return !1;
  for (; r < t; r++)
    if (i = e[r], i !== "_") {
      if (!A_(e.charCodeAt(r)))
        return !1;
      n = !0;
    }
  return !(!n || i === "_");
}
function T_(e) {
  var t = e, r = 1, n;
  if (t.indexOf("_") !== -1 && (t = t.replace(/_/g, "")), n = t[0], (n === "-" || n === "+") && (n === "-" && (r = -1), t = t.slice(1), n = t[0]), t === "0")
    return 0;
  if (n === "0") {
    if (t[1] === "b")
      return r * parseInt(t.slice(2), 2);
    if (t[1] === "x")
      return r * parseInt(t.slice(2), 16);
    if (t[1] === "o")
      return r * parseInt(t.slice(2), 8);
  }
  return r * parseInt(t, 10);
}
function R_(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && e % 1 === 0 && !ut.isNegativeZero(e);
}
var ff = new vt("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: I_,
  construct: T_,
  predicate: R_,
  represent: {
    binary: function(e) {
      return e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1);
    },
    octal: function(e) {
      return e >= 0 ? "0o" + e.toString(8) : "-0o" + e.toString(8).slice(1);
    },
    decimal: function(e) {
      return e.toString(10);
    },
    /* eslint-disable max-len */
    hexadecimal: function(e) {
      return e >= 0 ? "0x" + e.toString(16).toUpperCase() : "-0x" + e.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
}), N_ = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function P_(e) {
  return !(e === null || !N_.test(e) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  e[e.length - 1] === "_");
}
function F_(e) {
  var t, r;
  return t = e.replace(/_/g, "").toLowerCase(), r = t[0] === "-" ? -1 : 1, "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)), t === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : t === ".nan" ? NaN : r * parseFloat(t, 10);
}
var L_ = /^[-+]?[0-9]+e/;
function M_(e, t) {
  var r;
  if (isNaN(e))
    switch (t) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === e)
    switch (t) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === e)
    switch (t) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (ut.isNegativeZero(e))
    return "-0.0";
  return r = e.toString(10), L_.test(r) ? r.replace("e", ".e") : r;
}
function U_(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && (e % 1 !== 0 || ut.isNegativeZero(e));
}
var hf = new vt("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: P_,
  construct: F_,
  predicate: U_,
  represent: M_,
  defaultStyle: "lowercase"
}), df = cf.extend({
  implicit: [
    uf,
    lf,
    ff,
    hf
  ]
}), pf = df, gf = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), yf = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function $_(e) {
  return e === null ? !1 : gf.exec(e) !== null || yf.exec(e) !== null;
}
function j_(e) {
  var t, r, n, i, s, o, a, u = 0, h = null, f, d, y;
  if (t = gf.exec(e), t === null && (t = yf.exec(e)), t === null)
    throw new Error("Date resolve error");
  if (r = +t[1], n = +t[2] - 1, i = +t[3], !t[4])
    return new Date(Date.UTC(r, n, i));
  if (s = +t[4], o = +t[5], a = +t[6], t[7]) {
    for (u = t[7].slice(0, 3); u.length < 3; )
      u += "0";
    u = +u;
  }
  return t[9] && (f = +t[10], d = +(t[11] || 0), h = (f * 60 + d) * 6e4, t[9] === "-" && (h = -h)), y = new Date(Date.UTC(r, n, i, s, o, a, u)), h && y.setTime(y.getTime() - h), y;
}
function k_(e) {
  return e.toISOString();
}
var mf = new vt("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: $_,
  construct: j_,
  instanceOf: Date,
  represent: k_
});
function B_(e) {
  return e === "<<" || e === null;
}
var vf = new vt("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: B_
}), Vo = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function q_(e) {
  if (e === null)
    return !1;
  var t, r, n = 0, i = e.length, s = Vo;
  for (r = 0; r < i; r++)
    if (t = s.indexOf(e.charAt(r)), !(t > 64)) {
      if (t < 0)
        return !1;
      n += 6;
    }
  return n % 8 === 0;
}
function z_(e) {
  var t, r, n = e.replace(/[\r\n=]/g, ""), i = n.length, s = Vo, o = 0, a = [];
  for (t = 0; t < i; t++)
    t % 4 === 0 && t && (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)), o = o << 6 | s.indexOf(n.charAt(t));
  return r = i % 4 * 6, r === 0 ? (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(o & 255)) : r === 18 ? (a.push(o >> 10 & 255), a.push(o >> 2 & 255)) : r === 12 && a.push(o >> 4 & 255), new Uint8Array(a);
}
function K_(e) {
  var t = "", r = 0, n, i, s = e.length, o = Vo;
  for (n = 0; n < s; n++)
    n % 3 === 0 && n && (t += o[r >> 18 & 63], t += o[r >> 12 & 63], t += o[r >> 6 & 63], t += o[r & 63]), r = (r << 8) + e[n];
  return i = s % 3, i === 0 ? (t += o[r >> 18 & 63], t += o[r >> 12 & 63], t += o[r >> 6 & 63], t += o[r & 63]) : i === 2 ? (t += o[r >> 10 & 63], t += o[r >> 4 & 63], t += o[r << 2 & 63], t += o[64]) : i === 1 && (t += o[r >> 2 & 63], t += o[r << 4 & 63], t += o[64], t += o[64]), t;
}
function H_(e) {
  return Object.prototype.toString.call(e) === "[object Uint8Array]";
}
var bf = new vt("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: q_,
  construct: z_,
  predicate: H_,
  represent: K_
}), V_ = Object.prototype.hasOwnProperty, W_ = Object.prototype.toString;
function G_(e) {
  if (e === null)
    return !0;
  var t = [], r, n, i, s, o, a = e;
  for (r = 0, n = a.length; r < n; r += 1) {
    if (i = a[r], o = !1, W_.call(i) !== "[object Object]")
      return !1;
    for (s in i)
      if (V_.call(i, s))
        if (!o)
          o = !0;
        else
          return !1;
    if (!o)
      return !1;
    if (t.indexOf(s) === -1)
      t.push(s);
    else
      return !1;
  }
  return !0;
}
function Y_(e) {
  return e !== null ? e : [];
}
var _f = new vt("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: G_,
  construct: Y_
}), J_ = Object.prototype.toString;
function X_(e) {
  if (e === null)
    return !0;
  var t, r, n, i, s, o = e;
  for (s = new Array(o.length), t = 0, r = o.length; t < r; t += 1) {
    if (n = o[t], J_.call(n) !== "[object Object]" || (i = Object.keys(n), i.length !== 1))
      return !1;
    s[t] = [i[0], n[i[0]]];
  }
  return !0;
}
function Q_(e) {
  if (e === null)
    return [];
  var t, r, n, i, s, o = e;
  for (s = new Array(o.length), t = 0, r = o.length; t < r; t += 1)
    n = o[t], i = Object.keys(n), s[t] = [i[0], n[i[0]]];
  return s;
}
var wf = new vt("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: X_,
  construct: Q_
}), Z_ = Object.prototype.hasOwnProperty;
function ew(e) {
  if (e === null)
    return !0;
  var t, r = e;
  for (t in r)
    if (Z_.call(r, t) && r[t] !== null)
      return !1;
  return !0;
}
function tw(e) {
  return e !== null ? e : {};
}
var Ef = new vt("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: ew,
  construct: tw
}), Wo = pf.extend({
  implicit: [
    mf,
    vf
  ],
  explicit: [
    bf,
    _f,
    wf,
    Ef
  ]
}), Tr = Object.prototype.hasOwnProperty, Ri = 1, Sf = 2, xf = 3, Ni = 4, Os = 1, rw = 2, hu = 3, nw = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, iw = /[\x85\u2028\u2029]/, sw = /[,\[\]\{\}]/, Df = /^(?:!|!!|![a-z\-]+!)$/i, Of = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function du(e) {
  return Object.prototype.toString.call(e);
}
function hr(e) {
  return e === 10 || e === 13;
}
function Hr(e) {
  return e === 9 || e === 32;
}
function Mt(e) {
  return e === 9 || e === 32 || e === 10 || e === 13;
}
function an(e) {
  return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
}
function ow(e) {
  var t;
  return 48 <= e && e <= 57 ? e - 48 : (t = e | 32, 97 <= t && t <= 102 ? t - 97 + 10 : -1);
}
function aw(e) {
  return e === 120 ? 2 : e === 117 ? 4 : e === 85 ? 8 : 0;
}
function cw(e) {
  return 48 <= e && e <= 57 ? e - 48 : -1;
}
function pu(e) {
  return e === 48 ? "\0" : e === 97 ? "\x07" : e === 98 ? "\b" : e === 116 || e === 9 ? "	" : e === 110 ? `
` : e === 118 ? "\v" : e === 102 ? "\f" : e === 114 ? "\r" : e === 101 ? "\x1B" : e === 32 ? " " : e === 34 ? '"' : e === 47 ? "/" : e === 92 ? "\\" : e === 78 ? "" : e === 95 ? " " : e === 76 ? "\u2028" : e === 80 ? "\u2029" : "";
}
function uw(e) {
  return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(
    (e - 65536 >> 10) + 55296,
    (e - 65536 & 1023) + 56320
  );
}
var Cf = new Array(256), Af = new Array(256);
for (var tn = 0; tn < 256; tn++)
  Cf[tn] = pu(tn) ? 1 : 0, Af[tn] = pu(tn);
function lw(e, t) {
  this.input = e, this.filename = t.filename || null, this.schema = t.schema || Wo, this.onWarning = t.onWarning || null, this.legacy = t.legacy || !1, this.json = t.json || !1, this.listener = t.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function If(e, t) {
  var r = {
    name: e.filename,
    buffer: e.input.slice(0, -1),
    // omit trailing \0
    position: e.position,
    line: e.line,
    column: e.position - e.lineStart
  };
  return r.snippet = p_(r), new Rt(t, r);
}
function re(e, t) {
  throw If(e, t);
}
function Pi(e, t) {
  e.onWarning && e.onWarning.call(null, If(e, t));
}
var gu = {
  YAML: function(t, r, n) {
    var i, s, o;
    t.version !== null && re(t, "duplication of %YAML directive"), n.length !== 1 && re(t, "YAML directive accepts exactly one argument"), i = /^([0-9]+)\.([0-9]+)$/.exec(n[0]), i === null && re(t, "ill-formed argument of the YAML directive"), s = parseInt(i[1], 10), o = parseInt(i[2], 10), s !== 1 && re(t, "unacceptable YAML version of the document"), t.version = n[0], t.checkLineBreaks = o < 2, o !== 1 && o !== 2 && Pi(t, "unsupported YAML version of the document");
  },
  TAG: function(t, r, n) {
    var i, s;
    n.length !== 2 && re(t, "TAG directive accepts exactly two arguments"), i = n[0], s = n[1], Df.test(i) || re(t, "ill-formed tag handle (first argument) of the TAG directive"), Tr.call(t.tagMap, i) && re(t, 'there is a previously declared suffix for "' + i + '" tag handle'), Of.test(s) || re(t, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      s = decodeURIComponent(s);
    } catch {
      re(t, "tag prefix is malformed: " + s);
    }
    t.tagMap[i] = s;
  }
};
function Ar(e, t, r, n) {
  var i, s, o, a;
  if (t < r) {
    if (a = e.input.slice(t, r), n)
      for (i = 0, s = a.length; i < s; i += 1)
        o = a.charCodeAt(i), o === 9 || 32 <= o && o <= 1114111 || re(e, "expected valid JSON character");
    else
      nw.test(a) && re(e, "the stream contains non-printable characters");
    e.result += a;
  }
}
function yu(e, t, r, n) {
  var i, s, o, a;
  for (ut.isObject(r) || re(e, "cannot merge mappings; the provided source object is unacceptable"), i = Object.keys(r), o = 0, a = i.length; o < a; o += 1)
    s = i[o], Tr.call(t, s) || (t[s] = r[s], n[s] = !0);
}
function cn(e, t, r, n, i, s, o, a, u) {
  var h, f;
  if (Array.isArray(i))
    for (i = Array.prototype.slice.call(i), h = 0, f = i.length; h < f; h += 1)
      Array.isArray(i[h]) && re(e, "nested arrays are not supported inside keys"), typeof i == "object" && du(i[h]) === "[object Object]" && (i[h] = "[object Object]");
  if (typeof i == "object" && du(i) === "[object Object]" && (i = "[object Object]"), i = String(i), t === null && (t = {}), n === "tag:yaml.org,2002:merge")
    if (Array.isArray(s))
      for (h = 0, f = s.length; h < f; h += 1)
        yu(e, t, s[h], r);
    else
      yu(e, t, s, r);
  else
    !e.json && !Tr.call(r, i) && Tr.call(t, i) && (e.line = o || e.line, e.lineStart = a || e.lineStart, e.position = u || e.position, re(e, "duplicated mapping key")), i === "__proto__" ? Object.defineProperty(t, i, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: s
    }) : t[i] = s, delete r[i];
  return t;
}
function Go(e) {
  var t;
  t = e.input.charCodeAt(e.position), t === 10 ? e.position++ : t === 13 ? (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++) : re(e, "a line break is expected"), e.line += 1, e.lineStart = e.position, e.firstTabInLine = -1;
}
function at(e, t, r) {
  for (var n = 0, i = e.input.charCodeAt(e.position); i !== 0; ) {
    for (; Hr(i); )
      i === 9 && e.firstTabInLine === -1 && (e.firstTabInLine = e.position), i = e.input.charCodeAt(++e.position);
    if (t && i === 35)
      do
        i = e.input.charCodeAt(++e.position);
      while (i !== 10 && i !== 13 && i !== 0);
    if (hr(i))
      for (Go(e), i = e.input.charCodeAt(e.position), n++, e.lineIndent = 0; i === 32; )
        e.lineIndent++, i = e.input.charCodeAt(++e.position);
    else
      break;
  }
  return r !== -1 && n !== 0 && e.lineIndent < r && Pi(e, "deficient indentation"), n;
}
function Yi(e) {
  var t = e.position, r;
  return r = e.input.charCodeAt(t), !!((r === 45 || r === 46) && r === e.input.charCodeAt(t + 1) && r === e.input.charCodeAt(t + 2) && (t += 3, r = e.input.charCodeAt(t), r === 0 || Mt(r)));
}
function Yo(e, t) {
  t === 1 ? e.result += " " : t > 1 && (e.result += ut.repeat(`
`, t - 1));
}
function fw(e, t, r) {
  var n, i, s, o, a, u, h, f, d = e.kind, y = e.result, m;
  if (m = e.input.charCodeAt(e.position), Mt(m) || an(m) || m === 35 || m === 38 || m === 42 || m === 33 || m === 124 || m === 62 || m === 39 || m === 34 || m === 37 || m === 64 || m === 96 || (m === 63 || m === 45) && (i = e.input.charCodeAt(e.position + 1), Mt(i) || r && an(i)))
    return !1;
  for (e.kind = "scalar", e.result = "", s = o = e.position, a = !1; m !== 0; ) {
    if (m === 58) {
      if (i = e.input.charCodeAt(e.position + 1), Mt(i) || r && an(i))
        break;
    } else if (m === 35) {
      if (n = e.input.charCodeAt(e.position - 1), Mt(n))
        break;
    } else {
      if (e.position === e.lineStart && Yi(e) || r && an(m))
        break;
      if (hr(m))
        if (u = e.line, h = e.lineStart, f = e.lineIndent, at(e, !1, -1), e.lineIndent >= t) {
          a = !0, m = e.input.charCodeAt(e.position);
          continue;
        } else {
          e.position = o, e.line = u, e.lineStart = h, e.lineIndent = f;
          break;
        }
    }
    a && (Ar(e, s, o, !1), Yo(e, e.line - u), s = o = e.position, a = !1), Hr(m) || (o = e.position + 1), m = e.input.charCodeAt(++e.position);
  }
  return Ar(e, s, o, !1), e.result ? !0 : (e.kind = d, e.result = y, !1);
}
function hw(e, t) {
  var r, n, i;
  if (r = e.input.charCodeAt(e.position), r !== 39)
    return !1;
  for (e.kind = "scalar", e.result = "", e.position++, n = i = e.position; (r = e.input.charCodeAt(e.position)) !== 0; )
    if (r === 39)
      if (Ar(e, n, e.position, !0), r = e.input.charCodeAt(++e.position), r === 39)
        n = e.position, e.position++, i = e.position;
      else
        return !0;
    else
      hr(r) ? (Ar(e, n, i, !0), Yo(e, at(e, !1, t)), n = i = e.position) : e.position === e.lineStart && Yi(e) ? re(e, "unexpected end of the document within a single quoted scalar") : (e.position++, i = e.position);
  re(e, "unexpected end of the stream within a single quoted scalar");
}
function dw(e, t) {
  var r, n, i, s, o, a;
  if (a = e.input.charCodeAt(e.position), a !== 34)
    return !1;
  for (e.kind = "scalar", e.result = "", e.position++, r = n = e.position; (a = e.input.charCodeAt(e.position)) !== 0; ) {
    if (a === 34)
      return Ar(e, r, e.position, !0), e.position++, !0;
    if (a === 92) {
      if (Ar(e, r, e.position, !0), a = e.input.charCodeAt(++e.position), hr(a))
        at(e, !1, t);
      else if (a < 256 && Cf[a])
        e.result += Af[a], e.position++;
      else if ((o = aw(a)) > 0) {
        for (i = o, s = 0; i > 0; i--)
          a = e.input.charCodeAt(++e.position), (o = ow(a)) >= 0 ? s = (s << 4) + o : re(e, "expected hexadecimal character");
        e.result += uw(s), e.position++;
      } else
        re(e, "unknown escape sequence");
      r = n = e.position;
    } else
      hr(a) ? (Ar(e, r, n, !0), Yo(e, at(e, !1, t)), r = n = e.position) : e.position === e.lineStart && Yi(e) ? re(e, "unexpected end of the document within a double quoted scalar") : (e.position++, n = e.position);
  }
  re(e, "unexpected end of the stream within a double quoted scalar");
}
function pw(e, t) {
  var r = !0, n, i, s, o = e.tag, a, u = e.anchor, h, f, d, y, m, w = /* @__PURE__ */ Object.create(null), O, A, L, _;
  if (_ = e.input.charCodeAt(e.position), _ === 91)
    f = 93, m = !1, a = [];
  else if (_ === 123)
    f = 125, m = !0, a = {};
  else
    return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = a), _ = e.input.charCodeAt(++e.position); _ !== 0; ) {
    if (at(e, !0, t), _ = e.input.charCodeAt(e.position), _ === f)
      return e.position++, e.tag = o, e.anchor = u, e.kind = m ? "mapping" : "sequence", e.result = a, !0;
    r ? _ === 44 && re(e, "expected the node content, but found ','") : re(e, "missed comma between flow collection entries"), A = O = L = null, d = y = !1, _ === 63 && (h = e.input.charCodeAt(e.position + 1), Mt(h) && (d = y = !0, e.position++, at(e, !0, t))), n = e.line, i = e.lineStart, s = e.position, pn(e, t, Ri, !1, !0), A = e.tag, O = e.result, at(e, !0, t), _ = e.input.charCodeAt(e.position), (y || e.line === n) && _ === 58 && (d = !0, _ = e.input.charCodeAt(++e.position), at(e, !0, t), pn(e, t, Ri, !1, !0), L = e.result), m ? cn(e, a, w, A, O, L, n, i, s) : d ? a.push(cn(e, null, w, A, O, L, n, i, s)) : a.push(O), at(e, !0, t), _ = e.input.charCodeAt(e.position), _ === 44 ? (r = !0, _ = e.input.charCodeAt(++e.position)) : r = !1;
  }
  re(e, "unexpected end of the stream within a flow collection");
}
function gw(e, t) {
  var r, n, i = Os, s = !1, o = !1, a = t, u = 0, h = !1, f, d;
  if (d = e.input.charCodeAt(e.position), d === 124)
    n = !1;
  else if (d === 62)
    n = !0;
  else
    return !1;
  for (e.kind = "scalar", e.result = ""; d !== 0; )
    if (d = e.input.charCodeAt(++e.position), d === 43 || d === 45)
      Os === i ? i = d === 43 ? hu : rw : re(e, "repeat of a chomping mode identifier");
    else if ((f = cw(d)) >= 0)
      f === 0 ? re(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : o ? re(e, "repeat of an indentation width identifier") : (a = t + f - 1, o = !0);
    else
      break;
  if (Hr(d)) {
    do
      d = e.input.charCodeAt(++e.position);
    while (Hr(d));
    if (d === 35)
      do
        d = e.input.charCodeAt(++e.position);
      while (!hr(d) && d !== 0);
  }
  for (; d !== 0; ) {
    for (Go(e), e.lineIndent = 0, d = e.input.charCodeAt(e.position); (!o || e.lineIndent < a) && d === 32; )
      e.lineIndent++, d = e.input.charCodeAt(++e.position);
    if (!o && e.lineIndent > a && (a = e.lineIndent), hr(d)) {
      u++;
      continue;
    }
    if (e.lineIndent < a) {
      i === hu ? e.result += ut.repeat(`
`, s ? 1 + u : u) : i === Os && s && (e.result += `
`);
      break;
    }
    for (n ? Hr(d) ? (h = !0, e.result += ut.repeat(`
`, s ? 1 + u : u)) : h ? (h = !1, e.result += ut.repeat(`
`, u + 1)) : u === 0 ? s && (e.result += " ") : e.result += ut.repeat(`
`, u) : e.result += ut.repeat(`
`, s ? 1 + u : u), s = !0, o = !0, u = 0, r = e.position; !hr(d) && d !== 0; )
      d = e.input.charCodeAt(++e.position);
    Ar(e, r, e.position, !1);
  }
  return !0;
}
function mu(e, t) {
  var r, n = e.tag, i = e.anchor, s = [], o, a = !1, u;
  if (e.firstTabInLine !== -1)
    return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = s), u = e.input.charCodeAt(e.position); u !== 0 && (e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, re(e, "tab characters must not be used in indentation")), !(u !== 45 || (o = e.input.charCodeAt(e.position + 1), !Mt(o)))); ) {
    if (a = !0, e.position++, at(e, !0, -1) && e.lineIndent <= t) {
      s.push(null), u = e.input.charCodeAt(e.position);
      continue;
    }
    if (r = e.line, pn(e, t, xf, !1, !0), s.push(e.result), at(e, !0, -1), u = e.input.charCodeAt(e.position), (e.line === r || e.lineIndent > t) && u !== 0)
      re(e, "bad indentation of a sequence entry");
    else if (e.lineIndent < t)
      break;
  }
  return a ? (e.tag = n, e.anchor = i, e.kind = "sequence", e.result = s, !0) : !1;
}
function yw(e, t, r) {
  var n, i, s, o, a, u, h = e.tag, f = e.anchor, d = {}, y = /* @__PURE__ */ Object.create(null), m = null, w = null, O = null, A = !1, L = !1, _;
  if (e.firstTabInLine !== -1)
    return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = d), _ = e.input.charCodeAt(e.position); _ !== 0; ) {
    if (!A && e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, re(e, "tab characters must not be used in indentation")), n = e.input.charCodeAt(e.position + 1), s = e.line, (_ === 63 || _ === 58) && Mt(n))
      _ === 63 ? (A && (cn(e, d, y, m, w, null, o, a, u), m = w = O = null), L = !0, A = !0, i = !0) : A ? (A = !1, i = !0) : re(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, _ = n;
    else {
      if (o = e.line, a = e.lineStart, u = e.position, !pn(e, r, Sf, !1, !0))
        break;
      if (e.line === s) {
        for (_ = e.input.charCodeAt(e.position); Hr(_); )
          _ = e.input.charCodeAt(++e.position);
        if (_ === 58)
          _ = e.input.charCodeAt(++e.position), Mt(_) || re(e, "a whitespace character is expected after the key-value separator within a block mapping"), A && (cn(e, d, y, m, w, null, o, a, u), m = w = O = null), L = !0, A = !1, i = !1, m = e.tag, w = e.result;
        else if (L)
          re(e, "can not read an implicit mapping pair; a colon is missed");
        else
          return e.tag = h, e.anchor = f, !0;
      } else if (L)
        re(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return e.tag = h, e.anchor = f, !0;
    }
    if ((e.line === s || e.lineIndent > t) && (A && (o = e.line, a = e.lineStart, u = e.position), pn(e, t, Ni, !0, i) && (A ? w = e.result : O = e.result), A || (cn(e, d, y, m, w, O, o, a, u), m = w = O = null), at(e, !0, -1), _ = e.input.charCodeAt(e.position)), (e.line === s || e.lineIndent > t) && _ !== 0)
      re(e, "bad indentation of a mapping entry");
    else if (e.lineIndent < t)
      break;
  }
  return A && cn(e, d, y, m, w, null, o, a, u), L && (e.tag = h, e.anchor = f, e.kind = "mapping", e.result = d), L;
}
function mw(e) {
  var t, r = !1, n = !1, i, s, o;
  if (o = e.input.charCodeAt(e.position), o !== 33)
    return !1;
  if (e.tag !== null && re(e, "duplication of a tag property"), o = e.input.charCodeAt(++e.position), o === 60 ? (r = !0, o = e.input.charCodeAt(++e.position)) : o === 33 ? (n = !0, i = "!!", o = e.input.charCodeAt(++e.position)) : i = "!", t = e.position, r) {
    do
      o = e.input.charCodeAt(++e.position);
    while (o !== 0 && o !== 62);
    e.position < e.length ? (s = e.input.slice(t, e.position), o = e.input.charCodeAt(++e.position)) : re(e, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; o !== 0 && !Mt(o); )
      o === 33 && (n ? re(e, "tag suffix cannot contain exclamation marks") : (i = e.input.slice(t - 1, e.position + 1), Df.test(i) || re(e, "named tag handle cannot contain such characters"), n = !0, t = e.position + 1)), o = e.input.charCodeAt(++e.position);
    s = e.input.slice(t, e.position), sw.test(s) && re(e, "tag suffix cannot contain flow indicator characters");
  }
  s && !Of.test(s) && re(e, "tag name cannot contain such characters: " + s);
  try {
    s = decodeURIComponent(s);
  } catch {
    re(e, "tag name is malformed: " + s);
  }
  return r ? e.tag = s : Tr.call(e.tagMap, i) ? e.tag = e.tagMap[i] + s : i === "!" ? e.tag = "!" + s : i === "!!" ? e.tag = "tag:yaml.org,2002:" + s : re(e, 'undeclared tag handle "' + i + '"'), !0;
}
function vw(e) {
  var t, r;
  if (r = e.input.charCodeAt(e.position), r !== 38)
    return !1;
  for (e.anchor !== null && re(e, "duplication of an anchor property"), r = e.input.charCodeAt(++e.position), t = e.position; r !== 0 && !Mt(r) && !an(r); )
    r = e.input.charCodeAt(++e.position);
  return e.position === t && re(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(t, e.position), !0;
}
function bw(e) {
  var t, r, n;
  if (n = e.input.charCodeAt(e.position), n !== 42)
    return !1;
  for (n = e.input.charCodeAt(++e.position), t = e.position; n !== 0 && !Mt(n) && !an(n); )
    n = e.input.charCodeAt(++e.position);
  return e.position === t && re(e, "name of an alias node must contain at least one character"), r = e.input.slice(t, e.position), Tr.call(e.anchorMap, r) || re(e, 'unidentified alias "' + r + '"'), e.result = e.anchorMap[r], at(e, !0, -1), !0;
}
function pn(e, t, r, n, i) {
  var s, o, a, u = 1, h = !1, f = !1, d, y, m, w, O, A;
  if (e.listener !== null && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, s = o = a = Ni === r || xf === r, n && at(e, !0, -1) && (h = !0, e.lineIndent > t ? u = 1 : e.lineIndent === t ? u = 0 : e.lineIndent < t && (u = -1)), u === 1)
    for (; mw(e) || vw(e); )
      at(e, !0, -1) ? (h = !0, a = s, e.lineIndent > t ? u = 1 : e.lineIndent === t ? u = 0 : e.lineIndent < t && (u = -1)) : a = !1;
  if (a && (a = h || i), (u === 1 || Ni === r) && (Ri === r || Sf === r ? O = t : O = t + 1, A = e.position - e.lineStart, u === 1 ? a && (mu(e, A) || yw(e, A, O)) || pw(e, O) ? f = !0 : (o && gw(e, O) || hw(e, O) || dw(e, O) ? f = !0 : bw(e) ? (f = !0, (e.tag !== null || e.anchor !== null) && re(e, "alias node should not have any properties")) : fw(e, O, Ri === r) && (f = !0, e.tag === null && (e.tag = "?")), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : u === 0 && (f = a && mu(e, A))), e.tag === null)
    e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
  else if (e.tag === "?") {
    for (e.result !== null && e.kind !== "scalar" && re(e, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"'), d = 0, y = e.implicitTypes.length; d < y; d += 1)
      if (w = e.implicitTypes[d], w.resolve(e.result)) {
        e.result = w.construct(e.result), e.tag = w.tag, e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
        break;
      }
  } else if (e.tag !== "!") {
    if (Tr.call(e.typeMap[e.kind || "fallback"], e.tag))
      w = e.typeMap[e.kind || "fallback"][e.tag];
    else
      for (w = null, m = e.typeMap.multi[e.kind || "fallback"], d = 0, y = m.length; d < y; d += 1)
        if (e.tag.slice(0, m[d].tag.length) === m[d].tag) {
          w = m[d];
          break;
        }
    w || re(e, "unknown tag !<" + e.tag + ">"), e.result !== null && w.kind !== e.kind && re(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + w.kind + '", not "' + e.kind + '"'), w.resolve(e.result, e.tag) ? (e.result = w.construct(e.result, e.tag), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : re(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
  }
  return e.listener !== null && e.listener("close", e), e.tag !== null || e.anchor !== null || f;
}
function _w(e) {
  var t = e.position, r, n, i, s = !1, o;
  for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = /* @__PURE__ */ Object.create(null), e.anchorMap = /* @__PURE__ */ Object.create(null); (o = e.input.charCodeAt(e.position)) !== 0 && (at(e, !0, -1), o = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || o !== 37)); ) {
    for (s = !0, o = e.input.charCodeAt(++e.position), r = e.position; o !== 0 && !Mt(o); )
      o = e.input.charCodeAt(++e.position);
    for (n = e.input.slice(r, e.position), i = [], n.length < 1 && re(e, "directive name must not be less than one character in length"); o !== 0; ) {
      for (; Hr(o); )
        o = e.input.charCodeAt(++e.position);
      if (o === 35) {
        do
          o = e.input.charCodeAt(++e.position);
        while (o !== 0 && !hr(o));
        break;
      }
      if (hr(o))
        break;
      for (r = e.position; o !== 0 && !Mt(o); )
        o = e.input.charCodeAt(++e.position);
      i.push(e.input.slice(r, e.position));
    }
    o !== 0 && Go(e), Tr.call(gu, n) ? gu[n](e, n, i) : Pi(e, 'unknown document directive "' + n + '"');
  }
  if (at(e, !0, -1), e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45 ? (e.position += 3, at(e, !0, -1)) : s && re(e, "directives end mark is expected"), pn(e, e.lineIndent - 1, Ni, !1, !0), at(e, !0, -1), e.checkLineBreaks && iw.test(e.input.slice(t, e.position)) && Pi(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && Yi(e)) {
    e.input.charCodeAt(e.position) === 46 && (e.position += 3, at(e, !0, -1));
    return;
  }
  if (e.position < e.length - 1)
    re(e, "end of the stream or a document separator is expected");
  else
    return;
}
function Tf(e, t) {
  e = String(e), t = t || {}, e.length !== 0 && (e.charCodeAt(e.length - 1) !== 10 && e.charCodeAt(e.length - 1) !== 13 && (e += `
`), e.charCodeAt(0) === 65279 && (e = e.slice(1)));
  var r = new lw(e, t), n = e.indexOf("\0");
  for (n !== -1 && (r.position = n, re(r, "null byte is not allowed in input")), r.input += "\0"; r.input.charCodeAt(r.position) === 32; )
    r.lineIndent += 1, r.position += 1;
  for (; r.position < r.length - 1; )
    _w(r);
  return r.documents;
}
function ww(e, t, r) {
  t !== null && typeof t == "object" && typeof r > "u" && (r = t, t = null);
  var n = Tf(e, r);
  if (typeof t != "function")
    return n;
  for (var i = 0, s = n.length; i < s; i += 1)
    t(n[i]);
}
function Ew(e, t) {
  var r = Tf(e, t);
  if (r.length !== 0) {
    if (r.length === 1)
      return r[0];
    throw new Rt("expected a single document in the stream, but found more");
  }
}
var Sw = ww, xw = Ew, Rf = {
  loadAll: Sw,
  load: xw
}, Nf = Object.prototype.toString, Pf = Object.prototype.hasOwnProperty, Jo = 65279, Dw = 9, Yn = 10, Ow = 13, Cw = 32, Aw = 33, Iw = 34, oo = 35, Tw = 37, Rw = 38, Nw = 39, Pw = 42, Ff = 44, Fw = 45, Fi = 58, Lw = 61, Mw = 62, Uw = 63, $w = 64, Lf = 91, Mf = 93, jw = 96, Uf = 123, kw = 124, $f = 125, Ct = {};
Ct[0] = "\\0";
Ct[7] = "\\a";
Ct[8] = "\\b";
Ct[9] = "\\t";
Ct[10] = "\\n";
Ct[11] = "\\v";
Ct[12] = "\\f";
Ct[13] = "\\r";
Ct[27] = "\\e";
Ct[34] = '\\"';
Ct[92] = "\\\\";
Ct[133] = "\\N";
Ct[160] = "\\_";
Ct[8232] = "\\L";
Ct[8233] = "\\P";
var Bw = [
  "y",
  "Y",
  "yes",
  "Yes",
  "YES",
  "on",
  "On",
  "ON",
  "n",
  "N",
  "no",
  "No",
  "NO",
  "off",
  "Off",
  "OFF"
], qw = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function zw(e, t) {
  var r, n, i, s, o, a, u;
  if (t === null)
    return {};
  for (r = {}, n = Object.keys(t), i = 0, s = n.length; i < s; i += 1)
    o = n[i], a = String(t[o]), o.slice(0, 2) === "!!" && (o = "tag:yaml.org,2002:" + o.slice(2)), u = e.compiledTypeMap.fallback[o], u && Pf.call(u.styleAliases, a) && (a = u.styleAliases[a]), r[o] = a;
  return r;
}
function Kw(e) {
  var t, r, n;
  if (t = e.toString(16).toUpperCase(), e <= 255)
    r = "x", n = 2;
  else if (e <= 65535)
    r = "u", n = 4;
  else if (e <= 4294967295)
    r = "U", n = 8;
  else
    throw new Rt("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + r + ut.repeat("0", n - t.length) + t;
}
var Hw = 1, Jn = 2;
function Vw(e) {
  this.schema = e.schema || Wo, this.indent = Math.max(1, e.indent || 2), this.noArrayIndent = e.noArrayIndent || !1, this.skipInvalid = e.skipInvalid || !1, this.flowLevel = ut.isNothing(e.flowLevel) ? -1 : e.flowLevel, this.styleMap = zw(this.schema, e.styles || null), this.sortKeys = e.sortKeys || !1, this.lineWidth = e.lineWidth || 80, this.noRefs = e.noRefs || !1, this.noCompatMode = e.noCompatMode || !1, this.condenseFlow = e.condenseFlow || !1, this.quotingType = e.quotingType === '"' ? Jn : Hw, this.forceQuotes = e.forceQuotes || !1, this.replacer = typeof e.replacer == "function" ? e.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function vu(e, t) {
  for (var r = ut.repeat(" ", t), n = 0, i = -1, s = "", o, a = e.length; n < a; )
    i = e.indexOf(`
`, n), i === -1 ? (o = e.slice(n), n = a) : (o = e.slice(n, i + 1), n = i + 1), o.length && o !== `
` && (s += r), s += o;
  return s;
}
function ao(e, t) {
  return `
` + ut.repeat(" ", e.indent * t);
}
function Ww(e, t) {
  var r, n, i;
  for (r = 0, n = e.implicitTypes.length; r < n; r += 1)
    if (i = e.implicitTypes[r], i.resolve(t))
      return !0;
  return !1;
}
function Li(e) {
  return e === Cw || e === Dw;
}
function Xn(e) {
  return 32 <= e && e <= 126 || 161 <= e && e <= 55295 && e !== 8232 && e !== 8233 || 57344 <= e && e <= 65533 && e !== Jo || 65536 <= e && e <= 1114111;
}
function bu(e) {
  return Xn(e) && e !== Jo && e !== Ow && e !== Yn;
}
function _u(e, t, r) {
  var n = bu(e), i = n && !Li(e);
  return (
    // ns-plain-safe
    (r ? (
      // c = flow-in
      n
    ) : n && e !== Ff && e !== Lf && e !== Mf && e !== Uf && e !== $f) && e !== oo && !(t === Fi && !i) || bu(t) && !Li(t) && e === oo || t === Fi && i
  );
}
function Gw(e) {
  return Xn(e) && e !== Jo && !Li(e) && e !== Fw && e !== Uw && e !== Fi && e !== Ff && e !== Lf && e !== Mf && e !== Uf && e !== $f && e !== oo && e !== Rw && e !== Pw && e !== Aw && e !== kw && e !== Lw && e !== Mw && e !== Nw && e !== Iw && e !== Tw && e !== $w && e !== jw;
}
function Yw(e) {
  return !Li(e) && e !== Fi;
}
function Bn(e, t) {
  var r = e.charCodeAt(t), n;
  return r >= 55296 && r <= 56319 && t + 1 < e.length && (n = e.charCodeAt(t + 1), n >= 56320 && n <= 57343) ? (r - 55296) * 1024 + n - 56320 + 65536 : r;
}
function jf(e) {
  var t = /^\n* /;
  return t.test(e);
}
var kf = 1, co = 2, Bf = 3, qf = 4, on = 5;
function Jw(e, t, r, n, i, s, o, a) {
  var u, h = 0, f = null, d = !1, y = !1, m = n !== -1, w = -1, O = Gw(Bn(e, 0)) && Yw(Bn(e, e.length - 1));
  if (t || o)
    for (u = 0; u < e.length; h >= 65536 ? u += 2 : u++) {
      if (h = Bn(e, u), !Xn(h))
        return on;
      O = O && _u(h, f, a), f = h;
    }
  else {
    for (u = 0; u < e.length; h >= 65536 ? u += 2 : u++) {
      if (h = Bn(e, u), h === Yn)
        d = !0, m && (y = y || // Foldable line = too long, and not more-indented.
        u - w - 1 > n && e[w + 1] !== " ", w = u);
      else if (!Xn(h))
        return on;
      O = O && _u(h, f, a), f = h;
    }
    y = y || m && u - w - 1 > n && e[w + 1] !== " ";
  }
  return !d && !y ? O && !o && !i(e) ? kf : s === Jn ? on : co : r > 9 && jf(e) ? on : o ? s === Jn ? on : co : y ? qf : Bf;
}
function Xw(e, t, r, n, i) {
  e.dump = function() {
    if (t.length === 0)
      return e.quotingType === Jn ? '""' : "''";
    if (!e.noCompatMode && (Bw.indexOf(t) !== -1 || qw.test(t)))
      return e.quotingType === Jn ? '"' + t + '"' : "'" + t + "'";
    var s = e.indent * Math.max(1, r), o = e.lineWidth === -1 ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - s), a = n || e.flowLevel > -1 && r >= e.flowLevel;
    function u(h) {
      return Ww(e, h);
    }
    switch (Jw(
      t,
      a,
      e.indent,
      o,
      u,
      e.quotingType,
      e.forceQuotes && !n,
      i
    )) {
      case kf:
        return t;
      case co:
        return "'" + t.replace(/'/g, "''") + "'";
      case Bf:
        return "|" + wu(t, e.indent) + Eu(vu(t, s));
      case qf:
        return ">" + wu(t, e.indent) + Eu(vu(Qw(t, o), s));
      case on:
        return '"' + Zw(t) + '"';
      default:
        throw new Rt("impossible error: invalid scalar style");
    }
  }();
}
function wu(e, t) {
  var r = jf(e) ? String(t) : "", n = e[e.length - 1] === `
`, i = n && (e[e.length - 2] === `
` || e === `
`), s = i ? "+" : n ? "" : "-";
  return r + s + `
`;
}
function Eu(e) {
  return e[e.length - 1] === `
` ? e.slice(0, -1) : e;
}
function Qw(e, t) {
  for (var r = /(\n+)([^\n]*)/g, n = function() {
    var h = e.indexOf(`
`);
    return h = h !== -1 ? h : e.length, r.lastIndex = h, Su(e.slice(0, h), t);
  }(), i = e[0] === `
` || e[0] === " ", s, o; o = r.exec(e); ) {
    var a = o[1], u = o[2];
    s = u[0] === " ", n += a + (!i && !s && u !== "" ? `
` : "") + Su(u, t), i = s;
  }
  return n;
}
function Su(e, t) {
  if (e === "" || e[0] === " ")
    return e;
  for (var r = / [^ ]/g, n, i = 0, s, o = 0, a = 0, u = ""; n = r.exec(e); )
    a = n.index, a - i > t && (s = o > i ? o : a, u += `
` + e.slice(i, s), i = s + 1), o = a;
  return u += `
`, e.length - i > t && o > i ? u += e.slice(i, o) + `
` + e.slice(o + 1) : u += e.slice(i), u.slice(1);
}
function Zw(e) {
  for (var t = "", r = 0, n, i = 0; i < e.length; r >= 65536 ? i += 2 : i++)
    r = Bn(e, i), n = Ct[r], !n && Xn(r) ? (t += e[i], r >= 65536 && (t += e[i + 1])) : t += n || Kw(r);
  return t;
}
function eE(e, t, r) {
  var n = "", i = e.tag, s, o, a;
  for (s = 0, o = r.length; s < o; s += 1)
    a = r[s], e.replacer && (a = e.replacer.call(r, String(s), a)), (vr(e, t, a, !1, !1) || typeof a > "u" && vr(e, t, null, !1, !1)) && (n !== "" && (n += "," + (e.condenseFlow ? "" : " ")), n += e.dump);
  e.tag = i, e.dump = "[" + n + "]";
}
function xu(e, t, r, n) {
  var i = "", s = e.tag, o, a, u;
  for (o = 0, a = r.length; o < a; o += 1)
    u = r[o], e.replacer && (u = e.replacer.call(r, String(o), u)), (vr(e, t + 1, u, !0, !0, !1, !0) || typeof u > "u" && vr(e, t + 1, null, !0, !0, !1, !0)) && ((!n || i !== "") && (i += ao(e, t)), e.dump && Yn === e.dump.charCodeAt(0) ? i += "-" : i += "- ", i += e.dump);
  e.tag = s, e.dump = i || "[]";
}
function tE(e, t, r) {
  var n = "", i = e.tag, s = Object.keys(r), o, a, u, h, f;
  for (o = 0, a = s.length; o < a; o += 1)
    f = "", n !== "" && (f += ", "), e.condenseFlow && (f += '"'), u = s[o], h = r[u], e.replacer && (h = e.replacer.call(r, u, h)), vr(e, t, u, !1, !1) && (e.dump.length > 1024 && (f += "? "), f += e.dump + (e.condenseFlow ? '"' : "") + ":" + (e.condenseFlow ? "" : " "), vr(e, t, h, !1, !1) && (f += e.dump, n += f));
  e.tag = i, e.dump = "{" + n + "}";
}
function rE(e, t, r, n) {
  var i = "", s = e.tag, o = Object.keys(r), a, u, h, f, d, y;
  if (e.sortKeys === !0)
    o.sort();
  else if (typeof e.sortKeys == "function")
    o.sort(e.sortKeys);
  else if (e.sortKeys)
    throw new Rt("sortKeys must be a boolean or a function");
  for (a = 0, u = o.length; a < u; a += 1)
    y = "", (!n || i !== "") && (y += ao(e, t)), h = o[a], f = r[h], e.replacer && (f = e.replacer.call(r, h, f)), vr(e, t + 1, h, !0, !0, !0) && (d = e.tag !== null && e.tag !== "?" || e.dump && e.dump.length > 1024, d && (e.dump && Yn === e.dump.charCodeAt(0) ? y += "?" : y += "? "), y += e.dump, d && (y += ao(e, t)), vr(e, t + 1, f, !0, d) && (e.dump && Yn === e.dump.charCodeAt(0) ? y += ":" : y += ": ", y += e.dump, i += y));
  e.tag = s, e.dump = i || "{}";
}
function Du(e, t, r) {
  var n, i, s, o, a, u;
  for (i = r ? e.explicitTypes : e.implicitTypes, s = 0, o = i.length; s < o; s += 1)
    if (a = i[s], (a.instanceOf || a.predicate) && (!a.instanceOf || typeof t == "object" && t instanceof a.instanceOf) && (!a.predicate || a.predicate(t))) {
      if (r ? a.multi && a.representName ? e.tag = a.representName(t) : e.tag = a.tag : e.tag = "?", a.represent) {
        if (u = e.styleMap[a.tag] || a.defaultStyle, Nf.call(a.represent) === "[object Function]")
          n = a.represent(t, u);
        else if (Pf.call(a.represent, u))
          n = a.represent[u](t, u);
        else
          throw new Rt("!<" + a.tag + '> tag resolver accepts not "' + u + '" style');
        e.dump = n;
      }
      return !0;
    }
  return !1;
}
function vr(e, t, r, n, i, s, o) {
  e.tag = null, e.dump = r, Du(e, r, !1) || Du(e, r, !0);
  var a = Nf.call(e.dump), u = n, h;
  n && (n = e.flowLevel < 0 || e.flowLevel > t);
  var f = a === "[object Object]" || a === "[object Array]", d, y;
  if (f && (d = e.duplicates.indexOf(r), y = d !== -1), (e.tag !== null && e.tag !== "?" || y || e.indent !== 2 && t > 0) && (i = !1), y && e.usedDuplicates[d])
    e.dump = "*ref_" + d;
  else {
    if (f && y && !e.usedDuplicates[d] && (e.usedDuplicates[d] = !0), a === "[object Object]")
      n && Object.keys(e.dump).length !== 0 ? (rE(e, t, e.dump, i), y && (e.dump = "&ref_" + d + e.dump)) : (tE(e, t, e.dump), y && (e.dump = "&ref_" + d + " " + e.dump));
    else if (a === "[object Array]")
      n && e.dump.length !== 0 ? (e.noArrayIndent && !o && t > 0 ? xu(e, t - 1, e.dump, i) : xu(e, t, e.dump, i), y && (e.dump = "&ref_" + d + e.dump)) : (eE(e, t, e.dump), y && (e.dump = "&ref_" + d + " " + e.dump));
    else if (a === "[object String]")
      e.tag !== "?" && Xw(e, e.dump, t, s, u);
    else {
      if (a === "[object Undefined]")
        return !1;
      if (e.skipInvalid)
        return !1;
      throw new Rt("unacceptable kind of an object to dump " + a);
    }
    e.tag !== null && e.tag !== "?" && (h = encodeURI(
      e.tag[0] === "!" ? e.tag.slice(1) : e.tag
    ).replace(/!/g, "%21"), e.tag[0] === "!" ? h = "!" + h : h.slice(0, 18) === "tag:yaml.org,2002:" ? h = "!!" + h.slice(18) : h = "!<" + h + ">", e.dump = h + " " + e.dump);
  }
  return !0;
}
function nE(e, t) {
  var r = [], n = [], i, s;
  for (uo(e, r, n), i = 0, s = n.length; i < s; i += 1)
    t.duplicates.push(r[n[i]]);
  t.usedDuplicates = new Array(s);
}
function uo(e, t, r) {
  var n, i, s;
  if (e !== null && typeof e == "object")
    if (i = t.indexOf(e), i !== -1)
      r.indexOf(i) === -1 && r.push(i);
    else if (t.push(e), Array.isArray(e))
      for (i = 0, s = e.length; i < s; i += 1)
        uo(e[i], t, r);
    else
      for (n = Object.keys(e), i = 0, s = n.length; i < s; i += 1)
        uo(e[n[i]], t, r);
}
function iE(e, t) {
  t = t || {};
  var r = new Vw(t);
  r.noRefs || nE(e, r);
  var n = e;
  return r.replacer && (n = r.replacer.call({ "": n }, "", n)), vr(r, 0, n, !0, !0) ? r.dump + `
` : "";
}
var sE = iE, oE = {
  dump: sE
};
function Xo(e, t) {
  return function() {
    throw new Error("Function yaml." + e + " is removed in js-yaml 4. Use yaml." + t + " instead, which is now safe by default.");
  };
}
var aE = vt, cE = nf, uE = cf, lE = df, fE = pf, hE = Wo, dE = Rf.load, pE = Rf.loadAll, gE = oE.dump, yE = Rt, mE = {
  binary: bf,
  float: hf,
  map: af,
  null: uf,
  pairs: wf,
  set: Ef,
  timestamp: mf,
  bool: lf,
  int: ff,
  merge: vf,
  omap: _f,
  seq: of,
  str: sf
}, vE = Xo("safeLoad", "load"), bE = Xo("safeLoadAll", "loadAll"), _E = Xo("safeDump", "dump"), wE = {
  Type: aE,
  Schema: cE,
  FAILSAFE_SCHEMA: uE,
  JSON_SCHEMA: lE,
  CORE_SCHEMA: fE,
  DEFAULT_SCHEMA: hE,
  load: dE,
  loadAll: pE,
  dump: gE,
  YAMLException: yE,
  types: mE,
  safeLoad: vE,
  safeLoadAll: bE,
  safeDump: _E
};
const eS = 50, tS = ({ filter: e, page: t, formatted: r }) => {
  const n = dr(), [i, s] = br((A) => [
    A.chainId,
    A.account
  ]);
  (e == null ? void 0 : e.program_id) === "" && (e.program_id = void 0);
  const { request: o, data: a, error: u, loading: h } = Xr({
    topic: n == null ? void 0 : n.topic,
    chainId: i ?? "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "aleo_getRecords",
      params: {
        type: "GET_RECORDS",
        filter: e,
        page: t,
        formatted: r
      }
    }
  });
  Mo(({ id: A, params: L, topic: _ }) => {
    L.event.name === "accountSynced" && n && n.topic === _ && !h && o();
  });
  const f = !!n && !!s;
  Yt(() => {
    f && !h && o();
  }, [f, s]);
  const d = () => {
    !!n && !!s && !h && o();
  }, y = u ? u.message : a && a.type === "GET_RECORDS_REJ" ? a.data.error : void 0, m = a && a.type === "GET_RECORDS_RES" ? a : void 0, w = m == null ? void 0 : m.data.records, O = (m == null ? void 0 : m.data.totalRecordCount) ?? 0;
  return w && w.forEach((A) => {
    console.log(A);
    const L = wE.load(A.plaintext);
    console.log(L);
  }), { request: d, records: w, error: y, loading: h, totalRecordCount: O };
}, rS = (e) => {
  const t = dr(), [r] = br((a) => [
    a.chainId
  ]), { request: n, data: i, error: s, loading: o } = Xr({
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
}, EE = () => {
  const e = dr(), [t, r, n] = br((i) => [
    i.setAccount,
    i.setAccounts,
    i.disconnect
  ]);
  Yt(() => {
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
  }, [e == null ? void 0 : e.topic]), Yl(({ id: i, topic: s }) => {
    Ho("session deleted! topic: ", s), n();
  });
};
function SE(e, t, r = t) {
  const n = e < BigInt(0), i = e.toString().slice(n ? 1 : 0).padStart(t + 1, "0"), s = i.slice(0, i.length - t), o = i.slice(-t);
  let a = o.length - 1;
  for (; o[a] === "0"; )
    --a;
  const u = o.slice(0, a + 1);
  return (n ? "-" : "") + (u ? `${s}.${u.slice(0, r)}` : s);
}
function nS(e, t) {
  const [r, n] = e.split("."), i = (n || "").replace(/0+$/, "").slice(0, t), s = BigInt(10) ** BigInt(t), o = s / BigInt(10) ** BigInt(i.length || 0);
  return BigInt(i || 0) * o + BigInt(r || 0) * s;
}
var xE = /* @__PURE__ */ ((e) => (e[e.ETH = 0] = "ETH", e[e.DAI = 1] = "DAI", e))(xE || {});
function DE(e) {
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
class iS {
  constructor(t, r) {
    this.getDisplayValue = () => SE(this.value, 18) + " " + this.symbol, this.type = t;
    const { id: n, symbol: i, coinMarketCapID: s } = DE(t);
    this.id = n, this.symbol = i, this.coinMarketCapID = s, this.value = r;
  }
}
const sS = "0x6b175474e89094c44da98b954eedeac495271d0f", oS = [
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
  xE as A,
  Uo as B,
  Xs as C,
  xb as D,
  Gc as E,
  Db as F,
  zE as G,
  sS as H,
  oS as I,
  KE as P,
  Th as R,
  Ou as T,
  Ot as a,
  HE as b,
  WE as c,
  GE as d,
  YE as e,
  JE as f,
  XE as g,
  QE as h,
  ZE as i,
  eS as j,
  tS as k,
  rS as l,
  EE as m,
  ba as n,
  AE as o,
  rr as p,
  SE as q,
  nS as r,
  Qi as s,
  CE as t,
  VE as u,
  iS as v,
  Sb as w,
  Jl as x,
  fn as y,
  Xl as z
};
