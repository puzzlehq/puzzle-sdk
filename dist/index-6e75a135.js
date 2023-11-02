import Xr, { memo as Nl, useEffect as Vt, useState as Zi, useDebugValue as Ll } from "react";
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
var ns = { exports: {} }, ai = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var So;
function Fl() {
  if (So)
    return ai;
  So = 1;
  var e = Xr, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  return ai.Fragment = r, ai.jsx = u, ai.jsxs = u, ai;
}
var ci = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Do;
function $l() {
  return Do || (Do = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Xr, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), D = Symbol.iterator, I = "@@iterator";
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
    function k(w) {
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
            return k(M) + ".Consumer";
          case u:
            var J = w;
            return k(J._context) + ".Provider";
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
    var x = Object.assign, T = 0, H, V, q, B, j, K, oe;
    function W() {
    }
    W.__reactDisabledLog = !0;
    function ie() {
      {
        if (T === 0) {
          H = console.log, V = console.info, q = console.warn, B = console.error, j = console.group, K = console.groupCollapsed, oe = console.groupEnd;
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
              value: V
            }),
            warn: x({}, w, {
              value: q
            }),
            error: x({}, w, {
              value: B
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
`), ke = we.length - 1, Ye = ft.length - 1; ke >= 1 && Ye >= 0 && we[ke] !== ft[Ye]; )
            Ye--;
          for (; ke >= 1 && Ye >= 0; ke--, Ye--)
            if (we[ke] !== ft[Ye]) {
              if (ke !== 1 || Ye !== 1)
                do
                  if (ke--, Ye--, Ye < 0 || we[ke] !== ft[Ye]) {
                    var it = `
` + we[ke].replace(" at new ", " at ");
                    return w.displayName && it.includes("<anonymous>") && (it = it.replace("<anonymous>", w.displayName)), typeof w == "function" && c.set(w, it), it;
                  }
                while (ke >= 1 && Ye >= 0);
              break;
            }
        }
      } finally {
        C = !1, re.current = Se, Z(), Error.prepareStackTrace = Re;
      }
      var pr = w ? w.displayName || w.name : "", qi = pr ? N(pr) : "";
      return typeof w == "function" && c.set(w, qi), qi;
    }
    function X(w, M, J) {
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
            return X(w.render);
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
            } catch (ke) {
              we = ke;
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
    function Xt(w, M, J, se, Re) {
      {
        var Se, Oe = {}, we = null, ft = null;
        J !== void 0 && (ce(J), we = "" + J), Pe(M) && (ce(M.key), we = "" + M.key), xe(M) && (ft = M.ref, Te(M, Re));
        for (Se in M)
          he.call(M, Se) && !ye.hasOwnProperty(Se) && (Oe[Se] = M[Se]);
        if (w && w.defaultProps) {
          var ke = w.defaultProps;
          for (Se in ke)
            Oe[Se] === void 0 && (Oe[Se] = ke[Se]);
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
    var dr;
    dr = !1;
    function ze(w) {
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
    var Ve = {};
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
        if (Ve[J])
          return;
        Ve[J] = !0;
        var se = "";
        w && w._owner && w._owner !== lt.current && (se = " It was passed a child from " + Y(w._owner.type) + "."), jt(w), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', J, se), jt(null);
      }
    }
    function Qe(w, M) {
      {
        if (typeof w != "object")
          return;
        if (de(w))
          for (var J = 0; J < w.length; J++) {
            var se = w[J];
            ze(se) && Me(se, M);
          }
        else if (ze(w))
          w._store && (w._store.validated = !0);
        else if (w) {
          var Re = P(w);
          if (typeof Re == "function" && Re !== w.entries)
            for (var Se = Re.call(w), Oe; !(Oe = Se.next()).done; )
              ze(Oe.value) && Me(Oe.value, M);
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
        } else if (M.PropTypes !== void 0 && !dr) {
          dr = !0;
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
    function Xe(w, M, J, se, Re, Se) {
      {
        var Oe = L(w);
        if (!Oe) {
          var we = "";
          (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (we += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ft = We(Re);
          ft ? we += ft : we += Ue();
          var ke;
          w === null ? ke = "null" : de(w) ? ke = "array" : w !== void 0 && w.$$typeof === t ? (ke = "<" + (Y(w.type) || "Unknown") + " />", we = " Did you accidentally export a JSX literal instead of a component?") : ke = typeof w, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ke, we);
        }
        var Ye = Xt(w, M, J, Re, Se);
        if (Ye == null)
          return Ye;
        if (Oe) {
          var it = M.children;
          if (it !== void 0)
            if (se)
              if (de(it)) {
                for (var pr = 0; pr < it.length; pr++)
                  Qe(it[pr], w);
                Object.freeze && Object.freeze(it);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Qe(it, w);
        }
        return w === i ? tt(Ye) : et(Ye), Ye;
      }
    }
    function rt(w, M, J) {
      return Xe(w, M, J, !0);
    }
    function Ze(w, M, J) {
      return Xe(w, M, J, !1);
    }
    var Ge = Ze, Fe = rt;
    ci.Fragment = i, ci.jsx = Ge, ci.jsxs = Fe;
  }()), ci;
}
process.env.NODE_ENV === "production" ? ns.exports = Fl() : ns.exports = $l();
var ss = ns.exports;
const Ul = Symbol(), Oo = Object.getPrototypeOf, os = /* @__PURE__ */ new WeakMap(), Ml = (e) => e && (os.has(e) ? os.get(e) : Oo(e) === Object.prototype || Oo(e) === Array.prototype), jl = (e) => Ml(e) && e[Ul] || null, Io = (e, t = !0) => {
  os.set(e, t);
}, Pn = (e) => typeof e == "object" && e !== null, vr = /* @__PURE__ */ new WeakMap(), Hi = /* @__PURE__ */ new WeakSet(), ql = (e = Object.is, t = (f, h) => new Proxy(f, h), r = (f) => Pn(f) && !Hi.has(f) && (Array.isArray(f) || !(Symbol.iterator in f)) && !(f instanceof WeakMap) && !(f instanceof WeakSet) && !(f instanceof Error) && !(f instanceof Number) && !(f instanceof Date) && !(f instanceof String) && !(f instanceof RegExp) && !(f instanceof ArrayBuffer), i = (f) => {
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
  return Io(m, !0), n.set(f, [h, m]), Reflect.ownKeys(f).forEach((D) => {
    if (Object.getOwnPropertyDescriptor(m, D))
      return;
    const I = Reflect.get(f, D), P = {
      value: I,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (Hi.has(I))
      Io(I, !1);
    else if (I instanceof Promise)
      delete P.value, P.get = () => p(I);
    else if (vr.has(I)) {
      const [U, E] = vr.get(
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
  if (!Pn(f))
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
    const k = [...L];
    k[1] = [A, ...k[1]], m(k, $);
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
  }, b = (A) => (y.add(A), y.size === 1 && U.forEach(([$, k], Y) => {
    const x = $[3](P(Y));
    U.set(Y, [$, x]);
  }), () => {
    y.delete(A), y.size === 0 && U.forEach(([$, k], Y) => {
      k && (k(), U.set(Y, [$]));
    });
  }), _ = Array.isArray(f) ? [] : Object.create(Object.getPrototypeOf(f)), o = t(_, {
    deleteProperty(A, L) {
      const $ = Reflect.get(A, L);
      O(L);
      const k = Reflect.deleteProperty(A, L);
      return k && m(["delete", [L], $]), k;
    },
    set(A, L, $, k) {
      const Y = Reflect.has(A, L), x = Reflect.get(A, L, k);
      if (Y && (e(x, $) || u.has($) && e(x, u.get($))))
        return !0;
      O(L), Pn($) && ($ = jl($) || $);
      let T = $;
      if ($ instanceof Promise)
        $.then((H) => {
          $.status = "fulfilled", $.value = H, m(["resolve", [L], H]);
        }).catch((H) => {
          $.status = "rejected", $.reason = H, m(["reject", [L], H]);
        });
      else {
        !vr.has($) && r($) && (T = l($));
        const H = !Hi.has(T) && vr.get(T);
        H && E(L, H);
      }
      return Reflect.set(A, L, T, k), m(["set", [L], $, x]), !0;
    }
  });
  u.set(f, o);
  const g = [
    _,
    I,
    s,
    b
  ];
  return vr.set(o, g), Reflect.ownKeys(f).forEach((A) => {
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
  vr,
  Hi,
  // internal things
  e,
  t,
  r,
  i,
  n,
  s,
  u,
  a
], [zl] = ql();
function _r(e = {}) {
  return zl(e);
}
function Ur(e, t, r) {
  const i = vr.get(e);
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
function Bl(e, t) {
  const r = vr.get(e), [i, n, s] = r;
  return s(i, n(), t);
}
const at = _r({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), Cc = { state: at, subscribe(e) {
  return Ur(at, () => e(at));
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
  const t = (e = Cc.state.data) == null ? void 0 : e.Wallet;
  if (!t)
    throw new Error('Missing "Wallet" view data');
  return t;
} }, Vl = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), bt = _r({ enabled: Vl, userSessionId: "", events: [], connectedWalletId: void 0 }), kl = { state: bt, subscribe(e) {
  return Ur(bt.events, () => e(Bl(bt.events[bt.events.length - 1])));
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
} }, er = _r({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }), Jt = { state: er, subscribe(e) {
  return Ur(er, () => e(er));
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
} }, Gi = _r({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), Yr = { state: Gi, subscribe(e) {
  return Ur(Gi, () => e(Gi));
}, setConfig(e) {
  var t, r;
  kl.initialize(), Jt.setChains(e.chains), Jt.setIsAuth(!!e.enableAuthMode), Jt.setIsCustomMobile(!!((t = e.mobileWallets) != null && t.length)), Jt.setIsCustomDesktop(!!((r = e.desktopWallets) != null && r.length)), _t.setModalVersionInStorage(), Object.assign(Gi, e);
} };
var Kl = Object.defineProperty, xo = Object.getOwnPropertySymbols, Wl = Object.prototype.hasOwnProperty, Hl = Object.prototype.propertyIsEnumerable, Co = (e, t, r) => t in e ? Kl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Gl = (e, t) => {
  for (var r in t || (t = {}))
    Wl.call(t, r) && Co(e, r, t[r]);
  if (xo)
    for (var r of xo(t))
      Hl.call(t, r) && Co(e, r, t[r]);
  return e;
};
const as = "https://explorer-api.walletconnect.com", cs = "wcm", us = "js-2.6.2";
async function Yi(e, t) {
  const r = Gl({ sdkType: cs, sdkVersion: us }, t), i = new URL(e, as);
  return i.searchParams.append("projectId", Yr.state.projectId), Object.entries(r).forEach(([n, s]) => {
    s && i.searchParams.append(n, String(s));
  }), (await fetch(i)).json();
}
const Ir = { async getDesktopListings(e) {
  return Yi("/w3m/v1/getDesktopListings", e);
}, async getMobileListings(e) {
  return Yi("/w3m/v1/getMobileListings", e);
}, async getInjectedListings(e) {
  return Yi("/w3m/v1/getInjectedListings", e);
}, async getAllListings(e) {
  return Yi("/w3m/v1/getAllListings", e);
}, getWalletImageUrl(e) {
  return `${as}/w3m/v1/getWalletImage/${e}?projectId=${Yr.state.projectId}&sdkType=${cs}&sdkVersion=${us}`;
}, getAssetImageUrl(e) {
  return `${as}/w3m/v1/getAssetImage/${e}?projectId=${Yr.state.projectId}&sdkType=${cs}&sdkVersion=${us}`;
} };
var Yl = Object.defineProperty, Ro = Object.getOwnPropertySymbols, Jl = Object.prototype.hasOwnProperty, Ql = Object.prototype.propertyIsEnumerable, Ao = (e, t, r) => t in e ? Yl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Xl = (e, t) => {
  for (var r in t || (t = {}))
    Jl.call(t, r) && Ao(e, r, t[r]);
  if (Ro)
    for (var r of Ro(t))
      Ql.call(t, r) && Ao(e, r, t[r]);
  return e;
};
const Po = _t.isMobile(), tr = _r({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), S1 = { state: tr, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: e, explorerExcludedWalletIds: t } = Yr.state;
  if (e === "NONE" || t === "ALL" && !e)
    return tr.recomendedWallets;
  if (_t.isArray(e)) {
    const r = { recommendedIds: e.join(",") }, { listings: i } = await Ir.getAllListings(r), n = Object.values(i);
    n.sort((s, u) => {
      const a = e.indexOf(s.id), l = e.indexOf(u.id);
      return a - l;
    }), tr.recomendedWallets = n;
  } else {
    const { chains: r, isAuth: i } = Jt.state, n = r == null ? void 0 : r.join(","), s = _t.isArray(t), u = { page: 1, sdks: i ? "auth_v1" : void 0, entries: _t.RECOMMENDED_WALLET_AMOUNT, chains: n, version: 2, excludedIds: s ? t.join(",") : void 0 }, { listings: a } = Po ? await Ir.getMobileListings(u) : await Ir.getDesktopListings(u);
    tr.recomendedWallets = Object.values(a);
  }
  return tr.recomendedWallets;
}, async getWallets(e) {
  const t = Xl({}, e), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: i } = Yr.state, { recomendedWallets: n } = tr;
  if (i === "ALL")
    return tr.wallets;
  n.length ? t.excludedIds = n.map((p) => p.id).join(",") : _t.isArray(r) && (t.excludedIds = r.join(",")), _t.isArray(i) && (t.excludedIds = [t.excludedIds, i].filter(Boolean).join(",")), Jt.state.isAuth && (t.sdks = "auth_v1");
  const { page: s, search: u } = e, { listings: a, total: l } = Po ? await Ir.getMobileListings(t) : await Ir.getDesktopListings(t), f = Object.values(a), h = u ? "search" : "wallets";
  return tr[h] = { listings: [...tr[h].listings, ...f], total: l, page: s ?? 1 }, { listings: f, total: l };
}, getWalletImageUrl(e) {
  return Ir.getWalletImageUrl(e);
}, getAssetImageUrl(e) {
  return Ir.getAssetImageUrl(e);
}, resetSearch() {
  tr.search = { listings: [], total: 0, page: 1 };
} }, Br = _r({ open: !1 }), Tn = { state: Br, subscribe(e) {
  return Ur(Br, () => e(Br));
}, async open(e) {
  return new Promise((t) => {
    const { isUiLoaded: r, isDataLoaded: i } = Jt.state;
    if (_t.removeWalletConnectDeepLink(), Jt.setWalletConnectUri(e == null ? void 0 : e.uri), Jt.setChains(e == null ? void 0 : e.chains), Cc.reset("ConnectWallet"), r && i)
      Br.open = !0, t();
    else {
      const n = setInterval(() => {
        const s = Jt.state;
        s.isUiLoaded && s.isDataLoaded && (clearInterval(n), Br.open = !0, t());
      }, 200);
    }
  });
}, close() {
  Br.open = !1;
} };
var Zl = Object.defineProperty, To = Object.getOwnPropertySymbols, ef = Object.prototype.hasOwnProperty, tf = Object.prototype.propertyIsEnumerable, No = (e, t, r) => t in e ? Zl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, rf = (e, t) => {
  for (var r in t || (t = {}))
    ef.call(t, r) && No(e, r, t[r]);
  if (To)
    for (var r of To(t))
      tf.call(t, r) && No(e, r, t[r]);
  return e;
};
function nf() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const ui = _r({ themeMode: nf() ? "dark" : "light" }), Lo = { state: ui, subscribe(e) {
  return Ur(ui, () => e(ui));
}, setThemeConfig(e) {
  const { themeMode: t, themeVariables: r } = e;
  t && (ui.themeMode = t), r && (ui.themeVariables = rf({}, r));
} }, xr = _r({ open: !1, message: "", variant: "success" }), D1 = { state: xr, subscribe(e) {
  return Ur(xr, () => e(xr));
}, openToast(e, t) {
  xr.open = !0, xr.message = e, xr.variant = t;
}, closeToast() {
  xr.open = !1;
} };
let sf = class {
  constructor(t) {
    this.openModal = Tn.open, this.closeModal = Tn.close, this.subscribeModal = Tn.subscribe, this.setTheme = Lo.setThemeConfig, Lo.setThemeConfig(t), Yr.setConfig(t), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-5ac1ffaa.js");
      const t = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", t), Jt.setIsUiLoaded(!0);
    }
  }
};
var $s = { exports: {} }, Hr = typeof Reflect == "object" ? Reflect : null, Fo = Hr && typeof Hr.apply == "function" ? Hr.apply : function(t, r, i) {
  return Function.prototype.apply.call(t, r, i);
}, en;
Hr && typeof Hr.ownKeys == "function" ? en = Hr.ownKeys : Object.getOwnPropertySymbols ? en = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : en = function(t) {
  return Object.getOwnPropertyNames(t);
};
function of(e) {
  console && console.warn && console.warn(e);
}
var Rc = Number.isNaN || function(t) {
  return t !== t;
};
function Ne() {
  Ne.init.call(this);
}
$s.exports = Ne;
$s.exports.once = lf;
Ne.EventEmitter = Ne;
Ne.prototype._events = void 0;
Ne.prototype._eventsCount = 0;
Ne.prototype._maxListeners = void 0;
var $o = 10;
function bn(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(Ne, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return $o;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || Rc(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    $o = e;
  }
});
Ne.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Ne.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || Rc(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function Ac(e) {
  return e._maxListeners === void 0 ? Ne.defaultMaxListeners : e._maxListeners;
}
Ne.prototype.getMaxListeners = function() {
  return Ac(this);
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
    Fo(l, this, r);
  else
    for (var f = l.length, h = Fc(l, f), i = 0; i < f; ++i)
      Fo(h[i], this, r);
  return !0;
};
function Pc(e, t, r, i) {
  var n, s, u;
  if (bn(r), s = e._events, s === void 0 ? (s = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (s.newListener !== void 0 && (e.emit(
    "newListener",
    t,
    r.listener ? r.listener : r
  ), s = e._events), u = s[t]), u === void 0)
    u = s[t] = r, ++e._eventsCount;
  else if (typeof u == "function" ? u = s[t] = i ? [r, u] : [u, r] : i ? u.unshift(r) : u.push(r), n = Ac(e), n > 0 && u.length > n && !u.warned) {
    u.warned = !0;
    var a = new Error("Possible EventEmitter memory leak detected. " + u.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    a.name = "MaxListenersExceededWarning", a.emitter = e, a.type = t, a.count = u.length, of(a);
  }
  return e;
}
Ne.prototype.addListener = function(t, r) {
  return Pc(this, t, r, !1);
};
Ne.prototype.on = Ne.prototype.addListener;
Ne.prototype.prependListener = function(t, r) {
  return Pc(this, t, r, !0);
};
function af() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Tc(e, t, r) {
  var i = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r }, n = af.bind(i);
  return n.listener = r, i.wrapFn = n, n;
}
Ne.prototype.once = function(t, r) {
  return bn(r), this.on(t, Tc(this, t, r)), this;
};
Ne.prototype.prependOnceListener = function(t, r) {
  return bn(r), this.prependListener(t, Tc(this, t, r)), this;
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
    s === 0 ? i.shift() : cf(i, s), i.length === 1 && (n[t] = i[0]), n.removeListener !== void 0 && this.emit("removeListener", t, a || r);
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
function Nc(e, t, r) {
  var i = e._events;
  if (i === void 0)
    return [];
  var n = i[t];
  return n === void 0 ? [] : typeof n == "function" ? r ? [n.listener || n] : [n] : r ? uf(n) : Fc(n, n.length);
}
Ne.prototype.listeners = function(t) {
  return Nc(this, t, !0);
};
Ne.prototype.rawListeners = function(t) {
  return Nc(this, t, !1);
};
Ne.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : Lc.call(e, t);
};
Ne.prototype.listenerCount = Lc;
function Lc(e) {
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
function Fc(e, t) {
  for (var r = new Array(t), i = 0; i < t; ++i)
    r[i] = e[i];
  return r;
}
function cf(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function uf(e) {
  for (var t = new Array(e.length), r = 0; r < t.length; ++r)
    t[r] = e[r].listener || e[r];
  return t;
}
function lf(e, t) {
  return new Promise(function(r, i) {
    function n(u) {
      e.removeListener(t, s), i(u);
    }
    function s() {
      typeof e.removeListener == "function" && e.removeListener("error", n), r([].slice.call(arguments));
    }
    $c(e, t, s, { once: !0 }), t !== "error" && ff(e, n, { once: !0 });
  });
}
function ff(e, t, r) {
  typeof e.on == "function" && $c(e, "error", t, r);
}
function $c(e, t, r, i) {
  if (typeof e.on == "function")
    i.once ? e.once(t, r) : e.on(t, r);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function n(s) {
      i.once && e.removeEventListener(t, n), r(s);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var Qt = $s.exports;
const Uc = /* @__PURE__ */ yn(Qt);
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
var ls = function(e, t) {
  return ls = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
    r.__proto__ = i;
  } || function(r, i) {
    for (var n in i)
      i.hasOwnProperty(n) && (r[n] = i[n]);
  }, ls(e, t);
};
function hf(e, t) {
  ls(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var fs = function() {
  return fs = Object.assign || function(t) {
    for (var r, i = 1, n = arguments.length; i < n; i++) {
      r = arguments[i];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, fs.apply(this, arguments);
};
function df(e, t) {
  var r = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++)
      t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
  return r;
}
function pf(e, t, r, i) {
  var n = arguments.length, s = n < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, r) : i, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    s = Reflect.decorate(e, t, r, i);
  else
    for (var a = e.length - 1; a >= 0; a--)
      (u = e[a]) && (s = (n < 3 ? u(s) : n > 3 ? u(t, r, s) : u(t, r)) || s);
  return n > 3 && s && Object.defineProperty(t, r, s), s;
}
function gf(e, t) {
  return function(r, i) {
    t(r, i, e);
  };
}
function yf(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function bf(e, t, r, i) {
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
function vf(e, t) {
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
function mf(e, t, r, i) {
  i === void 0 && (i = r), e[i] = t[r];
}
function wf(e, t) {
  for (var r in e)
    r !== "default" && !t.hasOwnProperty(r) && (t[r] = e[r]);
}
function hs(e) {
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
function Mc(e, t) {
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
function _f() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(Mc(arguments[t]));
  return e;
}
function Ef() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++)
    e += arguments[t].length;
  for (var i = Array(e), n = 0, t = 0; t < r; t++)
    for (var s = arguments[t], u = 0, a = s.length; u < a; u++, n++)
      i[n] = s[u];
  return i;
}
function Ii(e) {
  return this instanceof Ii ? (this.v = e, this) : new Ii(e);
}
function Sf(e, t, r) {
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
    y.value instanceof Ii ? Promise.resolve(y.value.v).then(f, h) : p(s[0][2], y);
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
function Df(e) {
  var t, r;
  return t = {}, i("next"), i("throw", function(n) {
    throw n;
  }), i("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function i(n, s) {
    t[n] = e[n] ? function(u) {
      return (r = !r) ? { value: Ii(e[n](u)), done: n === "return" } : s ? s(u) : u;
    } : s;
  }
}
function Of(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], r;
  return t ? t.call(e) : (e = typeof hs == "function" ? hs(e) : e[Symbol.iterator](), r = {}, i("next"), i("throw"), i("return"), r[Symbol.asyncIterator] = function() {
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
function If(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
function xf(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  return t.default = e, t;
}
function Cf(e) {
  return e && e.__esModule ? e : { default: e };
}
function Rf(e, t) {
  if (!t.has(e))
    throw new TypeError("attempted to get private field on non-instance");
  return t.get(e);
}
function Af(e, t, r) {
  if (!t.has(e))
    throw new TypeError("attempted to set private field on non-instance");
  return t.set(e, r), r;
}
const Pf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return fs;
  },
  __asyncDelegator: Df,
  __asyncGenerator: Sf,
  __asyncValues: Of,
  __await: Ii,
  __awaiter: bf,
  __classPrivateFieldGet: Rf,
  __classPrivateFieldSet: Af,
  __createBinding: mf,
  __decorate: pf,
  __exportStar: wf,
  __extends: hf,
  __generator: vf,
  __importDefault: Cf,
  __importStar: xf,
  __makeTemplateObject: If,
  __metadata: yf,
  __param: gf,
  __read: Mc,
  __rest: df,
  __spread: _f,
  __spreadArrays: Ef,
  __values: hs
}, Symbol.toStringTag, { value: "Module" })), Kt = /* @__PURE__ */ Fs(Pf);
var Pi = {};
Object.defineProperty(Pi, "__esModule", { value: !0 });
function Tf(e) {
  if (typeof e != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof e}`);
  try {
    return JSON.parse(e);
  } catch {
    return e;
  }
}
Pi.safeJsonParse = Tf;
function Nf(e) {
  return typeof e == "string" ? e : JSON.stringify(e, (t, r) => typeof r > "u" ? null : r);
}
Pi.safeJsonStringify = Nf;
var li = { exports: {} }, Uo;
function Lf() {
  return Uo || (Uo = 1, function() {
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
    }), typeof Nt < "u" && Nt.localStorage ? li.exports = Nt.localStorage : typeof window < "u" && window.localStorage ? li.exports = window.localStorage : li.exports = new t();
  }()), li.exports;
}
var Nn = {}, fi = {}, Mo;
function Ff() {
  if (Mo)
    return fi;
  Mo = 1, Object.defineProperty(fi, "__esModule", { value: !0 }), fi.IKeyValueStorage = void 0;
  class e {
  }
  return fi.IKeyValueStorage = e, fi;
}
var hi = {}, jo;
function $f() {
  if (jo)
    return hi;
  jo = 1, Object.defineProperty(hi, "__esModule", { value: !0 }), hi.parseEntry = void 0;
  const e = Pi;
  function t(r) {
    var i;
    return [r[0], e.safeJsonParse((i = r[1]) !== null && i !== void 0 ? i : "")];
  }
  return hi.parseEntry = t, hi;
}
var qo;
function Uf() {
  return qo || (qo = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = Kt;
    t.__exportStar(Ff(), e), t.__exportStar($f(), e);
  }(Nn)), Nn;
}
Object.defineProperty(vn, "__esModule", { value: !0 });
vn.KeyValueStorage = void 0;
const kr = Kt, zo = Pi, Mf = kr.__importDefault(Lf()), jf = Uf();
class jc {
  constructor() {
    this.localStorage = Mf.default;
  }
  getKeys() {
    return kr.__awaiter(this, void 0, void 0, function* () {
      return Object.keys(this.localStorage);
    });
  }
  getEntries() {
    return kr.__awaiter(this, void 0, void 0, function* () {
      return Object.entries(this.localStorage).map(jf.parseEntry);
    });
  }
  getItem(t) {
    return kr.__awaiter(this, void 0, void 0, function* () {
      const r = this.localStorage.getItem(t);
      if (r !== null)
        return zo.safeJsonParse(r);
    });
  }
  setItem(t, r) {
    return kr.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.setItem(t, zo.safeJsonStringify(r));
    });
  }
  removeItem(t) {
    return kr.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.removeItem(t);
    });
  }
}
vn.KeyValueStorage = jc;
var qf = vn.default = jc, Zr = {}, di = {}, te = {}, Ln = {}, pi = {}, Bo;
function zf() {
  if (Bo)
    return pi;
  Bo = 1, Object.defineProperty(pi, "__esModule", { value: !0 }), pi.delay = void 0;
  function e(t) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, t);
    });
  }
  return pi.delay = e, pi;
}
var Cr = {}, Fn = {}, Rr = {}, Vo;
function Bf() {
  return Vo || (Vo = 1, Object.defineProperty(Rr, "__esModule", { value: !0 }), Rr.ONE_THOUSAND = Rr.ONE_HUNDRED = void 0, Rr.ONE_HUNDRED = 100, Rr.ONE_THOUSAND = 1e3), Rr;
}
var $n = {}, ko;
function Vf() {
  return ko || (ko = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ONE_YEAR = e.FOUR_WEEKS = e.THREE_WEEKS = e.TWO_WEEKS = e.ONE_WEEK = e.THIRTY_DAYS = e.SEVEN_DAYS = e.FIVE_DAYS = e.THREE_DAYS = e.ONE_DAY = e.TWENTY_FOUR_HOURS = e.TWELVE_HOURS = e.SIX_HOURS = e.THREE_HOURS = e.ONE_HOUR = e.SIXTY_MINUTES = e.THIRTY_MINUTES = e.TEN_MINUTES = e.FIVE_MINUTES = e.ONE_MINUTE = e.SIXTY_SECONDS = e.THIRTY_SECONDS = e.TEN_SECONDS = e.FIVE_SECONDS = e.ONE_SECOND = void 0, e.ONE_SECOND = 1, e.FIVE_SECONDS = 5, e.TEN_SECONDS = 10, e.THIRTY_SECONDS = 30, e.SIXTY_SECONDS = 60, e.ONE_MINUTE = e.SIXTY_SECONDS, e.FIVE_MINUTES = e.ONE_MINUTE * 5, e.TEN_MINUTES = e.ONE_MINUTE * 10, e.THIRTY_MINUTES = e.ONE_MINUTE * 30, e.SIXTY_MINUTES = e.ONE_MINUTE * 60, e.ONE_HOUR = e.SIXTY_MINUTES, e.THREE_HOURS = e.ONE_HOUR * 3, e.SIX_HOURS = e.ONE_HOUR * 6, e.TWELVE_HOURS = e.ONE_HOUR * 12, e.TWENTY_FOUR_HOURS = e.ONE_HOUR * 24, e.ONE_DAY = e.TWENTY_FOUR_HOURS, e.THREE_DAYS = e.ONE_DAY * 3, e.FIVE_DAYS = e.ONE_DAY * 5, e.SEVEN_DAYS = e.ONE_DAY * 7, e.THIRTY_DAYS = e.ONE_DAY * 30, e.ONE_WEEK = e.SEVEN_DAYS, e.TWO_WEEKS = e.ONE_WEEK * 2, e.THREE_WEEKS = e.ONE_WEEK * 3, e.FOUR_WEEKS = e.ONE_WEEK * 4, e.ONE_YEAR = e.ONE_DAY * 365;
  }($n)), $n;
}
var Ko;
function qc() {
  return Ko || (Ko = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = Kt;
    t.__exportStar(Bf(), e), t.__exportStar(Vf(), e);
  }(Fn)), Fn;
}
var Wo;
function kf() {
  if (Wo)
    return Cr;
  Wo = 1, Object.defineProperty(Cr, "__esModule", { value: !0 }), Cr.fromMiliseconds = Cr.toMiliseconds = void 0;
  const e = qc();
  function t(i) {
    return i * e.ONE_THOUSAND;
  }
  Cr.toMiliseconds = t;
  function r(i) {
    return Math.floor(i / e.ONE_THOUSAND);
  }
  return Cr.fromMiliseconds = r, Cr;
}
var Ho;
function Kf() {
  return Ho || (Ho = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = Kt;
    t.__exportStar(zf(), e), t.__exportStar(kf(), e);
  }(Ln)), Ln;
}
var Vr = {}, Go;
function Wf() {
  if (Go)
    return Vr;
  Go = 1, Object.defineProperty(Vr, "__esModule", { value: !0 }), Vr.Watch = void 0;
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
var Un = {}, gi = {}, Yo;
function Hf() {
  if (Yo)
    return gi;
  Yo = 1, Object.defineProperty(gi, "__esModule", { value: !0 }), gi.IWatch = void 0;
  class e {
  }
  return gi.IWatch = e, gi;
}
var Jo;
function Gf() {
  return Jo || (Jo = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), Kt.__exportStar(Hf(), e);
  }(Un)), Un;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = Kt;
  t.__exportStar(Kf(), e), t.__exportStar(Wf(), e), t.__exportStar(Gf(), e), t.__exportStar(qc(), e);
})(te);
var Mn = {}, yi = {};
let Mr = class {
};
const Yf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: Mr
}, Symbol.toStringTag, { value: "Module" })), Jf = /* @__PURE__ */ Fs(Yf);
var Qo;
function Qf() {
  if (Qo)
    return yi;
  Qo = 1, Object.defineProperty(yi, "__esModule", { value: !0 }), yi.IHeartBeat = void 0;
  const e = Jf;
  class t extends e.IEvents {
    constructor(i) {
      super();
    }
  }
  return yi.IHeartBeat = t, yi;
}
var Xo;
function zc() {
  return Xo || (Xo = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), Kt.__exportStar(Qf(), e);
  }(Mn)), Mn;
}
var jn = {}, Ar = {}, Zo;
function Xf() {
  if (Zo)
    return Ar;
  Zo = 1, Object.defineProperty(Ar, "__esModule", { value: !0 }), Ar.HEARTBEAT_EVENTS = Ar.HEARTBEAT_INTERVAL = void 0;
  const e = te;
  return Ar.HEARTBEAT_INTERVAL = e.FIVE_SECONDS, Ar.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, Ar;
}
var ea;
function Bc() {
  return ea || (ea = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), Kt.__exportStar(Xf(), e);
  }(jn)), jn;
}
var ta;
function Zf() {
  if (ta)
    return di;
  ta = 1, Object.defineProperty(di, "__esModule", { value: !0 }), di.HeartBeat = void 0;
  const e = Kt, t = Qt, r = te, i = zc(), n = Bc();
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
  return di.HeartBeat = s, di;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = Kt;
  t.__exportStar(Zf(), e), t.__exportStar(zc(), e), t.__exportStar(Bc(), e);
})(Zr);
var Ae = {}, qn, ra;
function eh() {
  if (ra)
    return qn;
  ra = 1;
  function e(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  qn = t;
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
  return qn;
}
var zn, ia;
function th() {
  if (ia)
    return zn;
  ia = 1;
  const e = eh();
  zn = n;
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
    const k = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof g == "function" && (g.error = g.fatal = g.warn = g.info = g.debug = g.trace = g), d.enabled === !1 && (d.level = "silent");
    const Y = d.level || "info", x = Object.create(g);
    x.log || (x.log = P), Object.defineProperty(x, "levelVal", {
      get: H
    }), Object.defineProperty(x, "level", {
      get: V,
      set: q
    });
    const T = {
      transmit: o,
      serialize: L,
      asObject: d.browser.asObject,
      levels: k,
      timestamp: m(d)
    };
    x.levels = n.levels, x.level = Y, x.setMaxListeners = x.getMaxListeners = x.emit = x.addListener = x.on = x.prependListener = x.once = x.prependOnceListener = x.removeListener = x.removeAllListeners = x.listeners = x.listenerCount = x.eventNames = x.write = x.flush = P, x.serializers = A, x._serialize = L, x._stdErrSerialize = $, x.child = B, o && (x._logEvent = p());
    function H() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function V() {
      return this._level;
    }
    function q(j) {
      if (j !== "silent" && !this.levels.values[j])
        throw Error("unknown level " + j);
      this._level = j, s(T, x, "error", "log"), s(T, x, "fatal", "error"), s(T, x, "warn", "error"), s(T, x, "info", "log"), s(T, x, "debug", "log"), s(T, x, "trace", "log");
    }
    function B(j, K) {
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
        const $ = d.timestamp(), k = new Array(arguments.length), Y = Object.getPrototypeOf && Object.getPrototypeOf(this) === t ? t : this;
        for (var x = 0; x < k.length; x++)
          k[x] = arguments[x];
        if (d.serialize && !d.asObject && l(k, this._serialize, this.serializers, this._stdErrSerialize), d.asObject ? A.call(Y, a(this, g, k, $)) : A.apply(Y, k), d.transmit) {
          const T = d.transmit.level || o.level, H = n.levels.values[T], V = n.levels.values[g];
          if (V < H)
            return;
          h(this, {
            ts: $,
            methodLevel: g,
            methodValue: V,
            transmitLevel: T,
            transmitValue: n.levels.values[d.transmit.level || o.level],
            send: d.transmit.send,
            val: o.levelVal
          }, k);
        }
      };
    }(o[g]));
  }
  function a(d, o, g, A) {
    d._serialize && l(g, d._serialize, d.serializers, d._stdErrSerialize);
    const L = g.slice();
    let $ = L[0];
    const k = {};
    A && (k.time = A), k.level = n.levels.values[o];
    let Y = (d._childLevel | 0) + 1;
    if (Y < 1 && (Y = 1), $ !== null && typeof $ == "object") {
      for (; Y-- && typeof L[0] == "object"; )
        Object.assign(k, L.shift());
      $ = L.length ? e(L.shift(), L) : void 0;
    } else
      typeof $ == "string" && ($ = e(L.shift(), L));
    return $ !== void 0 && (k.msg = $), k;
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
    const A = o.send, L = o.ts, $ = o.methodLevel, k = o.methodValue, Y = o.val, x = d._logEvent.bindings;
    l(
      g,
      d._serialize || Object.keys(d.serializers),
      d.serializers,
      d._stdErrSerialize === void 0 ? !0 : d._stdErrSerialize
    ), d._logEvent.ts = L, d._logEvent.messages = g.filter(function(T) {
      return x.indexOf(T) === -1;
    }), d._logEvent.level.label = $, d._logEvent.level.value = k, A($, d._logEvent, Y), d._logEvent = p(x);
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
  return zn;
}
var Pr = {}, na;
function Vc() {
  return na || (na = 1, Object.defineProperty(Pr, "__esModule", { value: !0 }), Pr.PINO_CUSTOM_CONTEXT_KEY = Pr.PINO_LOGGER_DEFAULTS = void 0, Pr.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, Pr.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), Pr;
}
var St = {}, sa;
function rh() {
  if (sa)
    return St;
  sa = 1, Object.defineProperty(St, "__esModule", { value: !0 }), St.generateChildLogger = St.formatChildLoggerContext = St.getLoggerContext = St.setBrowserLoggerContext = St.getBrowserLoggerContext = St.getDefaultLoggerOptions = void 0;
  const e = Vc();
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
  const t = Kt, r = t.__importDefault(th());
  Object.defineProperty(e, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), t.__exportStar(Vc(), e), t.__exportStar(rh(), e);
})(Ae);
let ih = class extends Mr {
  constructor(t) {
    super(), this.opts = t, this.protocol = "wc", this.version = 2;
  }
}, nh = class extends Mr {
  constructor(t, r) {
    super(), this.core = t, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}, sh = class {
  constructor(t, r) {
    this.logger = t, this.core = r;
  }
}, oh = class extends Mr {
  constructor(t, r) {
    super(), this.relayer = t, this.logger = r;
  }
}, ah = class extends Mr {
  constructor(t) {
    super();
  }
}, ch = class {
  constructor(t, r, i, n) {
    this.core = t, this.logger = r, this.name = i;
  }
}, uh = class extends Mr {
  constructor(t, r) {
    super(), this.relayer = t, this.logger = r;
  }
}, lh = class extends Mr {
  constructor(t, r) {
    super(), this.core = t, this.logger = r;
  }
}, fh = class {
  constructor(t, r) {
    this.projectId = t, this.logger = r;
  }
}, hh = class {
  constructor(t) {
    this.opts = t, this.protocol = "wc", this.version = 2;
  }
}, dh = class {
  constructor(t) {
    this.client = t;
  }
};
const ph = (e) => JSON.stringify(e, (t, r) => typeof r == "bigint" ? r.toString() + "n" : r), gh = (e) => {
  const t = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = e.replace(t, '$1"$2n"$3');
  return JSON.parse(r, (i, n) => typeof n == "string" && n.match(/^\d+n$/) ? BigInt(n.substring(0, n.length - 1)) : n);
};
function kc(e) {
  if (typeof e != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof e}`);
  try {
    return gh(e);
  } catch {
    return e;
  }
}
function Us(e) {
  return typeof e == "string" ? e : ph(e) || "";
}
var Ms = {}, ei = {}, mn = {}, wn = {};
Object.defineProperty(wn, "__esModule", { value: !0 });
wn.BrowserRandomSource = void 0;
const oa = 65536;
class yh {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const t = typeof self < "u" ? self.crypto || self.msCrypto : null;
    t && t.getRandomValues !== void 0 && (this._crypto = t, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(t) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const r = new Uint8Array(t);
    for (let i = 0; i < r.length; i += oa)
      this._crypto.getRandomValues(r.subarray(i, i + Math.min(r.length - i, oa)));
    return r;
  }
}
wn.BrowserRandomSource = yh;
function bh(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var _n = {}, Ut = {};
Object.defineProperty(Ut, "__esModule", { value: !0 });
function vh(e) {
  for (var t = 0; t < e.length; t++)
    e[t] = 0;
  return e;
}
Ut.wipe = vh;
const mh = {}, wh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mh
}, Symbol.toStringTag, { value: "Module" })), _h = /* @__PURE__ */ Fs(wh);
Object.defineProperty(_n, "__esModule", { value: !0 });
_n.NodeRandomSource = void 0;
const Eh = Ut;
class Sh {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof bh < "u") {
      const t = _h;
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
    return (0, Eh.wipe)(r), i;
  }
}
_n.NodeRandomSource = Sh;
Object.defineProperty(mn, "__esModule", { value: !0 });
mn.SystemRandomSource = void 0;
const Dh = wn, Oh = _n;
class Ih {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new Dh.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new Oh.NodeRandomSource(), this._source.isAvailable) {
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
mn.SystemRandomSource = Ih;
var le = {}, Kc = {};
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
})(Kc);
Object.defineProperty(le, "__esModule", { value: !0 });
var Wc = Kc;
function xh(e, t) {
  return t === void 0 && (t = 0), (e[t + 0] << 8 | e[t + 1]) << 16 >> 16;
}
le.readInt16BE = xh;
function Ch(e, t) {
  return t === void 0 && (t = 0), (e[t + 0] << 8 | e[t + 1]) >>> 0;
}
le.readUint16BE = Ch;
function Rh(e, t) {
  return t === void 0 && (t = 0), (e[t + 1] << 8 | e[t]) << 16 >> 16;
}
le.readInt16LE = Rh;
function Ah(e, t) {
  return t === void 0 && (t = 0), (e[t + 1] << 8 | e[t]) >>> 0;
}
le.readUint16LE = Ah;
function Hc(e, t, r) {
  return t === void 0 && (t = new Uint8Array(2)), r === void 0 && (r = 0), t[r + 0] = e >>> 8, t[r + 1] = e >>> 0, t;
}
le.writeUint16BE = Hc;
le.writeInt16BE = Hc;
function Gc(e, t, r) {
  return t === void 0 && (t = new Uint8Array(2)), r === void 0 && (r = 0), t[r + 0] = e >>> 0, t[r + 1] = e >>> 8, t;
}
le.writeUint16LE = Gc;
le.writeInt16LE = Gc;
function ds(e, t) {
  return t === void 0 && (t = 0), e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
}
le.readInt32BE = ds;
function ps(e, t) {
  return t === void 0 && (t = 0), (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0;
}
le.readUint32BE = ps;
function gs(e, t) {
  return t === void 0 && (t = 0), e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t];
}
le.readInt32LE = gs;
function ys(e, t) {
  return t === void 0 && (t = 0), (e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]) >>> 0;
}
le.readUint32LE = ys;
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
function Ph(e, t) {
  t === void 0 && (t = 0);
  var r = ds(e, t), i = ds(e, t + 4);
  return r * 4294967296 + i - (i >> 31) * 4294967296;
}
le.readInt64BE = Ph;
function Th(e, t) {
  t === void 0 && (t = 0);
  var r = ps(e, t), i = ps(e, t + 4);
  return r * 4294967296 + i;
}
le.readUint64BE = Th;
function Nh(e, t) {
  t === void 0 && (t = 0);
  var r = gs(e, t), i = gs(e, t + 4);
  return i * 4294967296 + r - (r >> 31) * 4294967296;
}
le.readInt64LE = Nh;
function Lh(e, t) {
  t === void 0 && (t = 0);
  var r = ys(e, t), i = ys(e, t + 4);
  return i * 4294967296 + r;
}
le.readUint64LE = Lh;
function Yc(e, t, r) {
  return t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0), sn(e / 4294967296 >>> 0, t, r), sn(e >>> 0, t, r + 4), t;
}
le.writeUint64BE = Yc;
le.writeInt64BE = Yc;
function Jc(e, t, r) {
  return t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0), on(e >>> 0, t, r), on(e / 4294967296 >>> 0, t, r + 4), t;
}
le.writeUint64LE = Jc;
le.writeInt64LE = Jc;
function Fh(e, t, r) {
  if (r === void 0 && (r = 0), e % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (e / 8 > t.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var i = 0, n = 1, s = e / 8 + r - 1; s >= r; s--)
    i += t[s] * n, n *= 256;
  return i;
}
le.readUintBE = Fh;
function $h(e, t, r) {
  if (r === void 0 && (r = 0), e % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (e / 8 > t.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var i = 0, n = 1, s = r; s < r + e / 8; s++)
    i += t[s] * n, n *= 256;
  return i;
}
le.readUintLE = $h;
function Uh(e, t, r, i) {
  if (r === void 0 && (r = new Uint8Array(e / 8)), i === void 0 && (i = 0), e % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!Wc.isSafeInteger(t))
    throw new Error("writeUintBE value must be an integer");
  for (var n = 1, s = e / 8 + i - 1; s >= i; s--)
    r[s] = t / n & 255, n *= 256;
  return r;
}
le.writeUintBE = Uh;
function Mh(e, t, r, i) {
  if (r === void 0 && (r = new Uint8Array(e / 8)), i === void 0 && (i = 0), e % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!Wc.isSafeInteger(t))
    throw new Error("writeUintLE value must be an integer");
  for (var n = 1, s = i; s < i + e / 8; s++)
    r[s] = t / n & 255, n *= 256;
  return r;
}
le.writeUintLE = Mh;
function jh(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat32(t);
}
le.readFloat32BE = jh;
function qh(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat32(t, !0);
}
le.readFloat32LE = qh;
function zh(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat64(t);
}
le.readFloat64BE = zh;
function Bh(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat64(t, !0);
}
le.readFloat64LE = Bh;
function Vh(e, t, r) {
  t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0);
  var i = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return i.setFloat32(r, e), t;
}
le.writeFloat32BE = Vh;
function kh(e, t, r) {
  t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0);
  var i = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return i.setFloat32(r, e, !0), t;
}
le.writeFloat32LE = kh;
function Kh(e, t, r) {
  t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0);
  var i = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return i.setFloat64(r, e), t;
}
le.writeFloat64BE = Kh;
function Wh(e, t, r) {
  t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0);
  var i = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return i.setFloat64(r, e, !0), t;
}
le.writeFloat64LE = Wh;
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
})(ei);
var Qc = {};
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
    for (var D = f[0], I = f[1], P = f[2], U = f[3], E = f[4], O = f[5], b = f[6], _ = f[7], d = h[0], o = h[1], g = h[2], A = h[3], L = h[4], $ = h[5], k = h[6], Y = h[7], x, T, H, V, q, B, j, K; m >= 128; ) {
      for (var oe = 0; oe < 16; oe++) {
        var W = 8 * oe + y;
        a[oe] = t.readUint32BE(p, W), l[oe] = t.readUint32BE(p, W + 4);
      }
      for (var oe = 0; oe < 80; oe++) {
        var ie = D, Z = I, re = P, F = U, N = E, C = O, c = b, S = _, G = d, X = o, be = g, ve = A, he = L, Ie = $, qe = k, Le = Y;
        if (x = _, T = Y, q = T & 65535, B = T >>> 16, j = x & 65535, K = x >>> 16, x = (E >>> 14 | L << 32 - 14) ^ (E >>> 18 | L << 32 - 18) ^ (L >>> 41 - 32 | E << 32 - (41 - 32)), T = (L >>> 14 | E << 32 - 14) ^ (L >>> 18 | E << 32 - 18) ^ (E >>> 41 - 32 | L << 32 - (41 - 32)), q += T & 65535, B += T >>> 16, j += x & 65535, K += x >>> 16, x = E & O ^ ~E & b, T = L & $ ^ ~L & k, q += T & 65535, B += T >>> 16, j += x & 65535, K += x >>> 16, x = n[oe * 2], T = n[oe * 2 + 1], q += T & 65535, B += T >>> 16, j += x & 65535, K += x >>> 16, x = a[oe % 16], T = l[oe % 16], q += T & 65535, B += T >>> 16, j += x & 65535, K += x >>> 16, B += q >>> 16, j += B >>> 16, K += j >>> 16, H = j & 65535 | K << 16, V = q & 65535 | B << 16, x = H, T = V, q = T & 65535, B = T >>> 16, j = x & 65535, K = x >>> 16, x = (D >>> 28 | d << 32 - 28) ^ (d >>> 34 - 32 | D << 32 - (34 - 32)) ^ (d >>> 39 - 32 | D << 32 - (39 - 32)), T = (d >>> 28 | D << 32 - 28) ^ (D >>> 34 - 32 | d << 32 - (34 - 32)) ^ (D >>> 39 - 32 | d << 32 - (39 - 32)), q += T & 65535, B += T >>> 16, j += x & 65535, K += x >>> 16, x = D & I ^ D & P ^ I & P, T = d & o ^ d & g ^ o & g, q += T & 65535, B += T >>> 16, j += x & 65535, K += x >>> 16, B += q >>> 16, j += B >>> 16, K += j >>> 16, S = j & 65535 | K << 16, Le = q & 65535 | B << 16, x = F, T = ve, q = T & 65535, B = T >>> 16, j = x & 65535, K = x >>> 16, x = H, T = V, q += T & 65535, B += T >>> 16, j += x & 65535, K += x >>> 16, B += q >>> 16, j += B >>> 16, K += j >>> 16, F = j & 65535 | K << 16, ve = q & 65535 | B << 16, I = ie, P = Z, U = re, E = F, O = N, b = C, _ = c, D = S, o = G, g = X, A = be, L = ve, $ = he, k = Ie, Y = qe, d = Le, oe % 16 === 15)
          for (var W = 0; W < 16; W++)
            x = a[W], T = l[W], q = T & 65535, B = T >>> 16, j = x & 65535, K = x >>> 16, x = a[(W + 9) % 16], T = l[(W + 9) % 16], q += T & 65535, B += T >>> 16, j += x & 65535, K += x >>> 16, H = a[(W + 1) % 16], V = l[(W + 1) % 16], x = (H >>> 1 | V << 32 - 1) ^ (H >>> 8 | V << 32 - 8) ^ H >>> 7, T = (V >>> 1 | H << 32 - 1) ^ (V >>> 8 | H << 32 - 8) ^ (V >>> 7 | H << 32 - 7), q += T & 65535, B += T >>> 16, j += x & 65535, K += x >>> 16, H = a[(W + 14) % 16], V = l[(W + 14) % 16], x = (H >>> 19 | V << 32 - 19) ^ (V >>> 61 - 32 | H << 32 - (61 - 32)) ^ H >>> 6, T = (V >>> 19 | H << 32 - 19) ^ (H >>> 61 - 32 | V << 32 - (61 - 32)) ^ (V >>> 6 | H << 32 - 6), q += T & 65535, B += T >>> 16, j += x & 65535, K += x >>> 16, B += q >>> 16, j += B >>> 16, K += j >>> 16, a[W] = j & 65535 | K << 16, l[W] = q & 65535 | B << 16;
      }
      x = D, T = d, q = T & 65535, B = T >>> 16, j = x & 65535, K = x >>> 16, x = f[0], T = h[0], q += T & 65535, B += T >>> 16, j += x & 65535, K += x >>> 16, B += q >>> 16, j += B >>> 16, K += j >>> 16, f[0] = D = j & 65535 | K << 16, h[0] = d = q & 65535 | B << 16, x = I, T = o, q = T & 65535, B = T >>> 16, j = x & 65535, K = x >>> 16, x = f[1], T = h[1], q += T & 65535, B += T >>> 16, j += x & 65535, K += x >>> 16, B += q >>> 16, j += B >>> 16, K += j >>> 16, f[1] = I = j & 65535 | K << 16, h[1] = o = q & 65535 | B << 16, x = P, T = g, q = T & 65535, B = T >>> 16, j = x & 65535, K = x >>> 16, x = f[2], T = h[2], q += T & 65535, B += T >>> 16, j += x & 65535, K += x >>> 16, B += q >>> 16, j += B >>> 16, K += j >>> 16, f[2] = P = j & 65535 | K << 16, h[2] = g = q & 65535 | B << 16, x = U, T = A, q = T & 65535, B = T >>> 16, j = x & 65535, K = x >>> 16, x = f[3], T = h[3], q += T & 65535, B += T >>> 16, j += x & 65535, K += x >>> 16, B += q >>> 16, j += B >>> 16, K += j >>> 16, f[3] = U = j & 65535 | K << 16, h[3] = A = q & 65535 | B << 16, x = E, T = L, q = T & 65535, B = T >>> 16, j = x & 65535, K = x >>> 16, x = f[4], T = h[4], q += T & 65535, B += T >>> 16, j += x & 65535, K += x >>> 16, B += q >>> 16, j += B >>> 16, K += j >>> 16, f[4] = E = j & 65535 | K << 16, h[4] = L = q & 65535 | B << 16, x = O, T = $, q = T & 65535, B = T >>> 16, j = x & 65535, K = x >>> 16, x = f[5], T = h[5], q += T & 65535, B += T >>> 16, j += x & 65535, K += x >>> 16, B += q >>> 16, j += B >>> 16, K += j >>> 16, f[5] = O = j & 65535 | K << 16, h[5] = $ = q & 65535 | B << 16, x = b, T = k, q = T & 65535, B = T >>> 16, j = x & 65535, K = x >>> 16, x = f[6], T = h[6], q += T & 65535, B += T >>> 16, j += x & 65535, K += x >>> 16, B += q >>> 16, j += B >>> 16, K += j >>> 16, f[6] = b = j & 65535 | K << 16, h[6] = k = q & 65535 | B << 16, x = _, T = Y, q = T & 65535, B = T >>> 16, j = x & 65535, K = x >>> 16, x = f[7], T = h[7], q += T & 65535, B += T >>> 16, j += x & 65535, K += x >>> 16, B += q >>> 16, j += B >>> 16, K += j >>> 16, f[7] = _ = j & 65535 | K << 16, h[7] = Y = q & 65535 | B << 16, y += 128, m -= 128;
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
})(Qc);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.convertSecretKeyToX25519 = e.convertPublicKeyToX25519 = e.verify = e.sign = e.extractPublicKeyFromSecretKey = e.generateKeyPair = e.generateKeyPairFromSeed = e.SEED_LENGTH = e.SECRET_KEY_LENGTH = e.PUBLIC_KEY_LENGTH = e.SIGNATURE_LENGTH = void 0;
  const t = ei, r = Qc, i = Ut;
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
      for (let X = 1; X < 15; X++)
        C[X] = c[X] - 65535 - (C[X - 1] >> 16 & 1), C[X - 1] &= 65535;
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
    let c, S, G = 0, X = 0, be = 0, ve = 0, he = 0, Ie = 0, qe = 0, Le = 0, De = 0, _e = 0, de = 0, ge = 0, pe = 0, ue = 0, ce = 0, ne = 0, ye = 0, me = 0, ae = 0, Ee = 0, xe = 0, Pe = 0, Te = 0, Ce = 0, Pt = 0, Mt = 0, Xt = 0, lt = 0, Zt = 0, jt = 0, dr = 0, ze = C[0], Ue = C[1], We = C[2], Ve = C[3], He = C[4], Me = C[5], Qe = C[6], et = C[7], tt = C[8], Xe = C[9], rt = C[10], Ze = C[11], Ge = C[12], Fe = C[13], w = C[14], M = C[15];
    c = N[0], G += c * ze, X += c * Ue, be += c * We, ve += c * Ve, he += c * He, Ie += c * Me, qe += c * Qe, Le += c * et, De += c * tt, _e += c * Xe, de += c * rt, ge += c * Ze, pe += c * Ge, ue += c * Fe, ce += c * w, ne += c * M, c = N[1], X += c * ze, be += c * Ue, ve += c * We, he += c * Ve, Ie += c * He, qe += c * Me, Le += c * Qe, De += c * et, _e += c * tt, de += c * Xe, ge += c * rt, pe += c * Ze, ue += c * Ge, ce += c * Fe, ne += c * w, ye += c * M, c = N[2], be += c * ze, ve += c * Ue, he += c * We, Ie += c * Ve, qe += c * He, Le += c * Me, De += c * Qe, _e += c * et, de += c * tt, ge += c * Xe, pe += c * rt, ue += c * Ze, ce += c * Ge, ne += c * Fe, ye += c * w, me += c * M, c = N[3], ve += c * ze, he += c * Ue, Ie += c * We, qe += c * Ve, Le += c * He, De += c * Me, _e += c * Qe, de += c * et, ge += c * tt, pe += c * Xe, ue += c * rt, ce += c * Ze, ne += c * Ge, ye += c * Fe, me += c * w, ae += c * M, c = N[4], he += c * ze, Ie += c * Ue, qe += c * We, Le += c * Ve, De += c * He, _e += c * Me, de += c * Qe, ge += c * et, pe += c * tt, ue += c * Xe, ce += c * rt, ne += c * Ze, ye += c * Ge, me += c * Fe, ae += c * w, Ee += c * M, c = N[5], Ie += c * ze, qe += c * Ue, Le += c * We, De += c * Ve, _e += c * He, de += c * Me, ge += c * Qe, pe += c * et, ue += c * tt, ce += c * Xe, ne += c * rt, ye += c * Ze, me += c * Ge, ae += c * Fe, Ee += c * w, xe += c * M, c = N[6], qe += c * ze, Le += c * Ue, De += c * We, _e += c * Ve, de += c * He, ge += c * Me, pe += c * Qe, ue += c * et, ce += c * tt, ne += c * Xe, ye += c * rt, me += c * Ze, ae += c * Ge, Ee += c * Fe, xe += c * w, Pe += c * M, c = N[7], Le += c * ze, De += c * Ue, _e += c * We, de += c * Ve, ge += c * He, pe += c * Me, ue += c * Qe, ce += c * et, ne += c * tt, ye += c * Xe, me += c * rt, ae += c * Ze, Ee += c * Ge, xe += c * Fe, Pe += c * w, Te += c * M, c = N[8], De += c * ze, _e += c * Ue, de += c * We, ge += c * Ve, pe += c * He, ue += c * Me, ce += c * Qe, ne += c * et, ye += c * tt, me += c * Xe, ae += c * rt, Ee += c * Ze, xe += c * Ge, Pe += c * Fe, Te += c * w, Ce += c * M, c = N[9], _e += c * ze, de += c * Ue, ge += c * We, pe += c * Ve, ue += c * He, ce += c * Me, ne += c * Qe, ye += c * et, me += c * tt, ae += c * Xe, Ee += c * rt, xe += c * Ze, Pe += c * Ge, Te += c * Fe, Ce += c * w, Pt += c * M, c = N[10], de += c * ze, ge += c * Ue, pe += c * We, ue += c * Ve, ce += c * He, ne += c * Me, ye += c * Qe, me += c * et, ae += c * tt, Ee += c * Xe, xe += c * rt, Pe += c * Ze, Te += c * Ge, Ce += c * Fe, Pt += c * w, Mt += c * M, c = N[11], ge += c * ze, pe += c * Ue, ue += c * We, ce += c * Ve, ne += c * He, ye += c * Me, me += c * Qe, ae += c * et, Ee += c * tt, xe += c * Xe, Pe += c * rt, Te += c * Ze, Ce += c * Ge, Pt += c * Fe, Mt += c * w, Xt += c * M, c = N[12], pe += c * ze, ue += c * Ue, ce += c * We, ne += c * Ve, ye += c * He, me += c * Me, ae += c * Qe, Ee += c * et, xe += c * tt, Pe += c * Xe, Te += c * rt, Ce += c * Ze, Pt += c * Ge, Mt += c * Fe, Xt += c * w, lt += c * M, c = N[13], ue += c * ze, ce += c * Ue, ne += c * We, ye += c * Ve, me += c * He, ae += c * Me, Ee += c * Qe, xe += c * et, Pe += c * tt, Te += c * Xe, Ce += c * rt, Pt += c * Ze, Mt += c * Ge, Xt += c * Fe, lt += c * w, Zt += c * M, c = N[14], ce += c * ze, ne += c * Ue, ye += c * We, me += c * Ve, ae += c * He, Ee += c * Me, xe += c * Qe, Pe += c * et, Te += c * tt, Ce += c * Xe, Pt += c * rt, Mt += c * Ze, Xt += c * Ge, lt += c * Fe, Zt += c * w, jt += c * M, c = N[15], ne += c * ze, ye += c * Ue, me += c * We, ae += c * Ve, Ee += c * He, xe += c * Me, Pe += c * Qe, Te += c * et, Ce += c * tt, Pt += c * Xe, Mt += c * rt, Xt += c * Ze, lt += c * Ge, Zt += c * Fe, jt += c * w, dr += c * M, G += 38 * ye, X += 38 * me, be += 38 * ae, ve += 38 * Ee, he += 38 * xe, Ie += 38 * Pe, qe += 38 * Te, Le += 38 * Ce, De += 38 * Pt, _e += 38 * Mt, de += 38 * Xt, ge += 38 * lt, pe += 38 * Zt, ue += 38 * jt, ce += 38 * dr, S = 1, c = G + S + 65535, S = Math.floor(c / 65536), G = c - S * 65536, c = X + S + 65535, S = Math.floor(c / 65536), X = c - S * 65536, c = be + S + 65535, S = Math.floor(c / 65536), be = c - S * 65536, c = ve + S + 65535, S = Math.floor(c / 65536), ve = c - S * 65536, c = he + S + 65535, S = Math.floor(c / 65536), he = c - S * 65536, c = Ie + S + 65535, S = Math.floor(c / 65536), Ie = c - S * 65536, c = qe + S + 65535, S = Math.floor(c / 65536), qe = c - S * 65536, c = Le + S + 65535, S = Math.floor(c / 65536), Le = c - S * 65536, c = De + S + 65535, S = Math.floor(c / 65536), De = c - S * 65536, c = _e + S + 65535, S = Math.floor(c / 65536), _e = c - S * 65536, c = de + S + 65535, S = Math.floor(c / 65536), de = c - S * 65536, c = ge + S + 65535, S = Math.floor(c / 65536), ge = c - S * 65536, c = pe + S + 65535, S = Math.floor(c / 65536), pe = c - S * 65536, c = ue + S + 65535, S = Math.floor(c / 65536), ue = c - S * 65536, c = ce + S + 65535, S = Math.floor(c / 65536), ce = c - S * 65536, c = ne + S + 65535, S = Math.floor(c / 65536), ne = c - S * 65536, G += S - 1 + 37 * (S - 1), S = 1, c = G + S + 65535, S = Math.floor(c / 65536), G = c - S * 65536, c = X + S + 65535, S = Math.floor(c / 65536), X = c - S * 65536, c = be + S + 65535, S = Math.floor(c / 65536), be = c - S * 65536, c = ve + S + 65535, S = Math.floor(c / 65536), ve = c - S * 65536, c = he + S + 65535, S = Math.floor(c / 65536), he = c - S * 65536, c = Ie + S + 65535, S = Math.floor(c / 65536), Ie = c - S * 65536, c = qe + S + 65535, S = Math.floor(c / 65536), qe = c - S * 65536, c = Le + S + 65535, S = Math.floor(c / 65536), Le = c - S * 65536, c = De + S + 65535, S = Math.floor(c / 65536), De = c - S * 65536, c = _e + S + 65535, S = Math.floor(c / 65536), _e = c - S * 65536, c = de + S + 65535, S = Math.floor(c / 65536), de = c - S * 65536, c = ge + S + 65535, S = Math.floor(c / 65536), ge = c - S * 65536, c = pe + S + 65535, S = Math.floor(c / 65536), pe = c - S * 65536, c = ue + S + 65535, S = Math.floor(c / 65536), ue = c - S * 65536, c = ce + S + 65535, S = Math.floor(c / 65536), ce = c - S * 65536, c = ne + S + 65535, S = Math.floor(c / 65536), ne = c - S * 65536, G += S - 1 + 37 * (S - 1), F[0] = G, F[1] = X, F[2] = be, F[3] = ve, F[4] = he, F[5] = Ie, F[6] = qe, F[7] = Le, F[8] = De, F[9] = _e, F[10] = de, F[11] = ge, F[12] = pe, F[13] = ue, F[14] = ce, F[15] = ne;
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
    const C = n(), c = n(), S = n(), G = n(), X = n(), be = n(), ve = n(), he = n(), Ie = n();
    d(C, F[1], F[0]), d(Ie, N[1], N[0]), o(C, C, Ie), _(c, F[0], F[1]), _(Ie, N[0], N[1]), o(c, c, Ie), o(S, F[3], N[3]), o(S, S, f), o(G, F[2], N[2]), _(G, G, G), d(X, c, C), d(be, G, S), _(ve, G, S), _(he, c, C), o(F[0], X, be), o(F[1], he, ve), o(F[2], ve, be), o(F[3], X, he);
  }
  function k(F, N, C) {
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
      k(F, N, S), $(N, F), $(F, F), k(F, N, S);
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
  function V(F) {
    const N = (0, t.randomBytes)(32, F), C = H(N);
    return (0, i.wipe)(N), C;
  }
  e.generateKeyPair = V;
  function q(F) {
    if (F.length !== e.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${e.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(F.subarray(32));
  }
  e.extractPublicKeyFromSecretKey = q;
  const B = new Float64Array([
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
        N[S] += C - 16 * N[c] * B[S - (c - 32)], C = Math.floor((N[S] + 128) / 256), N[S] -= C * 256;
      N[S] += C, N[c] = 0;
    }
    for (C = 0, S = 0; S < 32; S++)
      N[S] += C - (N[31] >> 4) * B[S], C = N[S] >> 8, N[S] &= 255;
    for (S = 0; S < 32; S++)
      N[S] -= C * B[S];
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
    const X = new r.SHA512();
    X.update(G.subarray(32)), X.update(N);
    const be = X.digest();
    X.clean(), K(be), T(c, be), Y(G, c), X.reset(), X.update(G.subarray(0, 32)), X.update(F.subarray(32)), X.update(N);
    const ve = X.digest();
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
    const C = n(), c = n(), S = n(), G = n(), X = n(), be = n(), ve = n();
    return m(F[2], a), b(F[1], N), g(S, F[1]), o(G, S, l), d(S, S, F[2]), _(G, F[2], G), g(X, G), g(be, X), o(ve, be, X), o(C, ve, S), o(C, C, G), L(C, C), o(C, C, S), o(C, C, G), o(C, C, G), o(F[0], C, G), g(c, F[0]), o(c, c, G), E(c, S) && o(F[0], F[0], y), g(c, F[0]), o(c, c, G), E(c, S) ? -1 : (O(F[0]) === N[31] >> 7 && d(F[0], u, F[0]), o(F[3], F[0], F[1]), 0);
  }
  function ie(F, N, C) {
    const c = new Uint8Array(32), S = [n(), n(), n(), n()], G = [n(), n(), n(), n()];
    if (C.length !== e.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${e.SIGNATURE_LENGTH} bytes`);
    if (W(G, F))
      return !1;
    const X = new r.SHA512();
    X.update(C.subarray(0, 32)), X.update(F), X.update(N);
    const be = X.digest();
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
const Hh = "EdDSA", Gh = "JWT", Xc = ".", Zc = "base64url", Yh = "utf8", Jh = "utf8", Qh = ":", Xh = "did", Zh = "key", aa = "base58btc", ed = "z", td = "K36", rd = 32;
function js(e) {
  return globalThis.Buffer != null ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e;
}
function eu(e = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? js(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e);
}
function bs(e, t) {
  t || (t = e.reduce((n, s) => n + s.length, 0));
  const r = eu(t);
  let i = 0;
  for (const n of e)
    r.set(n, i), i += n.length;
  return js(r);
}
function id(e, t) {
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
var nd = id, sd = nd;
const od = (e) => {
  if (e instanceof Uint8Array && e.constructor.name === "Uint8Array")
    return e;
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  if (ArrayBuffer.isView(e))
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  throw new Error("Unknown type, must be binary type");
}, ad = (e) => new TextEncoder().encode(e), cd = (e) => new TextDecoder().decode(e);
class ud {
  constructor(t, r, i) {
    this.name = t, this.prefix = r, this.baseEncode = i;
  }
  encode(t) {
    if (t instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class ld {
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
    return tu(this, t);
  }
}
class fd {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return tu(this, t);
  }
  decode(t) {
    const r = t[0], i = this.decoders[r];
    if (i)
      return i.decode(t);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const tu = (e, t) => new fd({
  ...e.decoders || { [e.prefix]: e },
  ...t.decoders || { [t.prefix]: t }
});
class hd {
  constructor(t, r, i, n) {
    this.name = t, this.prefix = r, this.baseEncode = i, this.baseDecode = n, this.encoder = new ud(t, r, i), this.decoder = new ld(t, r, n);
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const En = ({ name: e, prefix: t, encode: r, decode: i }) => new hd(e, t, r, i), Ti = ({ prefix: e, name: t, alphabet: r }) => {
  const { encode: i, decode: n } = sd(r, t);
  return En({
    prefix: e,
    name: t,
    encode: i,
    decode: (s) => od(n(s))
  });
}, dd = (e, t, r, i) => {
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
}, pd = (e, t, r) => {
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
    return pd(n, i, r);
  },
  decode(n) {
    return dd(n, i, r, e);
  }
}), gd = En({
  prefix: "\0",
  name: "identity",
  encode: (e) => cd(e),
  decode: (e) => ad(e)
}), yd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: gd
}, Symbol.toStringTag, { value: "Module" })), bd = pt({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), vd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: bd
}, Symbol.toStringTag, { value: "Module" })), md = pt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), wd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: md
}, Symbol.toStringTag, { value: "Module" })), _d = Ti({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), Ed = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: _d
}, Symbol.toStringTag, { value: "Module" })), Sd = pt({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), Dd = pt({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), Od = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: Sd,
  base16upper: Dd
}, Symbol.toStringTag, { value: "Module" })), Id = pt({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), xd = pt({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), Cd = pt({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), Rd = pt({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), Ad = pt({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), Pd = pt({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), Td = pt({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), Nd = pt({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), Ld = pt({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), Fd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: Id,
  base32hex: Ad,
  base32hexpad: Td,
  base32hexpadupper: Nd,
  base32hexupper: Pd,
  base32pad: Cd,
  base32padupper: Rd,
  base32upper: xd,
  base32z: Ld
}, Symbol.toStringTag, { value: "Module" })), $d = Ti({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), Ud = Ti({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), Md = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: $d,
  base36upper: Ud
}, Symbol.toStringTag, { value: "Module" })), jd = Ti({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), qd = Ti({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), zd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: jd,
  base58flickr: qd
}, Symbol.toStringTag, { value: "Module" })), Bd = pt({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), Vd = pt({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), kd = pt({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), Kd = pt({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), Wd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: Bd,
  base64pad: Vd,
  base64url: kd,
  base64urlpad: Kd
}, Symbol.toStringTag, { value: "Module" })), ru = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Hd = ru.reduce((e, t, r) => (e[r] = t, e), []), Gd = ru.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []);
function Yd(e) {
  return e.reduce((t, r) => (t += Hd[r], t), "");
}
function Jd(e) {
  const t = [];
  for (const r of e) {
    const i = Gd[r.codePointAt(0)];
    if (i === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    t.push(i);
  }
  return new Uint8Array(t);
}
const Qd = En({
  prefix: "🚀",
  name: "base256emoji",
  encode: Yd,
  decode: Jd
}), Xd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: Qd
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const ca = {
  ...yd,
  ...vd,
  ...wd,
  ...Ed,
  ...Od,
  ...Fd,
  ...Md,
  ...zd,
  ...Wd,
  ...Xd
};
function iu(e, t, r, i) {
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
const ua = iu("utf8", "u", (e) => "u" + new TextDecoder("utf8").decode(e), (e) => new TextEncoder().encode(e.substring(1))), Bn = iu("ascii", "a", (e) => {
  let t = "a";
  for (let r = 0; r < e.length; r++)
    t += String.fromCharCode(e[r]);
  return t;
}, (e) => {
  e = e.substring(1);
  const t = eu(e.length);
  for (let r = 0; r < e.length; r++)
    t[r] = e.charCodeAt(r);
  return t;
}), nu = {
  utf8: ua,
  "utf-8": ua,
  hex: ca.base16,
  latin1: Bn,
  ascii: Bn,
  binary: Bn,
  ...ca
};
function xt(e, t = "utf8") {
  const r = nu[t];
  if (!r)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8") : r.encoder.encode(e).substring(1);
}
function At(e, t = "utf8") {
  const r = nu[t];
  if (!r)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? js(globalThis.Buffer.from(e, "utf-8")) : r.decoder.decode(`${r.prefix}${e}`);
}
function an(e) {
  return xt(At(Us(e), Yh), Zc);
}
function su(e) {
  const t = At(td, aa), r = ed + xt(bs([t, e]), aa);
  return [Xh, Zh, r].join(Qh);
}
function Zd(e) {
  return xt(e, Zc);
}
function ep(e) {
  return At([an(e.header), an(e.payload)].join(Xc), Jh);
}
function tp(e) {
  return [
    an(e.header),
    an(e.payload),
    Zd(e.signature)
  ].join(Xc);
}
function la(e = ei.randomBytes(rd)) {
  return Ms.generateKeyPairFromSeed(e);
}
async function rp(e, t, r, i, n = te.fromMiliseconds(Date.now())) {
  const s = { alg: Hh, typ: Gh }, u = su(i.publicKey), a = n + r, l = { iss: u, sub: e, aud: t, iat: n, exp: a }, f = ep({ header: s, payload: l }), h = Ms.sign(i.secretKey, f);
  return tp({ header: s, payload: l, signature: h });
}
var qs = {}, Sn = {};
Object.defineProperty(Sn, "__esModule", { value: !0 });
var vt = le, vs = Ut, ip = 20;
function np(e, t, r) {
  for (var i = 1634760805, n = 857760878, s = 2036477234, u = 1797285236, a = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], l = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], f = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], h = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], p = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], y = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], m = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], D = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], I = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], P = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4], U = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8], E = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12], O = i, b = n, _ = s, d = u, o = a, g = l, A = f, L = h, $ = p, k = y, Y = m, x = D, T = I, H = P, V = U, q = E, B = 0; B < ip; B += 2)
    O = O + o | 0, T ^= O, T = T >>> 32 - 16 | T << 16, $ = $ + T | 0, o ^= $, o = o >>> 32 - 12 | o << 12, b = b + g | 0, H ^= b, H = H >>> 32 - 16 | H << 16, k = k + H | 0, g ^= k, g = g >>> 32 - 12 | g << 12, _ = _ + A | 0, V ^= _, V = V >>> 32 - 16 | V << 16, Y = Y + V | 0, A ^= Y, A = A >>> 32 - 12 | A << 12, d = d + L | 0, q ^= d, q = q >>> 32 - 16 | q << 16, x = x + q | 0, L ^= x, L = L >>> 32 - 12 | L << 12, _ = _ + A | 0, V ^= _, V = V >>> 32 - 8 | V << 8, Y = Y + V | 0, A ^= Y, A = A >>> 32 - 7 | A << 7, d = d + L | 0, q ^= d, q = q >>> 32 - 8 | q << 8, x = x + q | 0, L ^= x, L = L >>> 32 - 7 | L << 7, b = b + g | 0, H ^= b, H = H >>> 32 - 8 | H << 8, k = k + H | 0, g ^= k, g = g >>> 32 - 7 | g << 7, O = O + o | 0, T ^= O, T = T >>> 32 - 8 | T << 8, $ = $ + T | 0, o ^= $, o = o >>> 32 - 7 | o << 7, O = O + g | 0, q ^= O, q = q >>> 32 - 16 | q << 16, Y = Y + q | 0, g ^= Y, g = g >>> 32 - 12 | g << 12, b = b + A | 0, T ^= b, T = T >>> 32 - 16 | T << 16, x = x + T | 0, A ^= x, A = A >>> 32 - 12 | A << 12, _ = _ + L | 0, H ^= _, H = H >>> 32 - 16 | H << 16, $ = $ + H | 0, L ^= $, L = L >>> 32 - 12 | L << 12, d = d + o | 0, V ^= d, V = V >>> 32 - 16 | V << 16, k = k + V | 0, o ^= k, o = o >>> 32 - 12 | o << 12, _ = _ + L | 0, H ^= _, H = H >>> 32 - 8 | H << 8, $ = $ + H | 0, L ^= $, L = L >>> 32 - 7 | L << 7, d = d + o | 0, V ^= d, V = V >>> 32 - 8 | V << 8, k = k + V | 0, o ^= k, o = o >>> 32 - 7 | o << 7, b = b + A | 0, T ^= b, T = T >>> 32 - 8 | T << 8, x = x + T | 0, A ^= x, A = A >>> 32 - 7 | A << 7, O = O + g | 0, q ^= O, q = q >>> 32 - 8 | q << 8, Y = Y + q | 0, g ^= Y, g = g >>> 32 - 7 | g << 7;
  vt.writeUint32LE(O + i | 0, e, 0), vt.writeUint32LE(b + n | 0, e, 4), vt.writeUint32LE(_ + s | 0, e, 8), vt.writeUint32LE(d + u | 0, e, 12), vt.writeUint32LE(o + a | 0, e, 16), vt.writeUint32LE(g + l | 0, e, 20), vt.writeUint32LE(A + f | 0, e, 24), vt.writeUint32LE(L + h | 0, e, 28), vt.writeUint32LE($ + p | 0, e, 32), vt.writeUint32LE(k + y | 0, e, 36), vt.writeUint32LE(Y + m | 0, e, 40), vt.writeUint32LE(x + D | 0, e, 44), vt.writeUint32LE(T + I | 0, e, 48), vt.writeUint32LE(H + P | 0, e, 52), vt.writeUint32LE(V + U | 0, e, 56), vt.writeUint32LE(q + E | 0, e, 60);
}
function ou(e, t, r, i, n) {
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
    np(a, s, e);
    for (var f = l; f < l + 64 && f < r.length; f++)
      i[f] = r[f] ^ a[f - l];
    op(s, 0, u);
  }
  return vs.wipe(a), n === 0 && vs.wipe(s), i;
}
Sn.streamXOR = ou;
function sp(e, t, r, i) {
  return i === void 0 && (i = 0), vs.wipe(r), ou(e, t, r, r, i);
}
Sn.stream = sp;
function op(e, t, r) {
  for (var i = 1; r--; )
    i = i + (e[t] & 255) | 0, e[t] = i & 255, i >>>= 8, t++;
  if (i > 0)
    throw new Error("ChaCha: counter overflow");
}
var au = {}, Er = {};
Object.defineProperty(Er, "__esModule", { value: !0 });
function ap(e, t, r) {
  return ~(e - 1) & t | e - 1 & r;
}
Er.select = ap;
function cp(e, t) {
  return (e | 0) - (t | 0) - 1 >>> 31 & 1;
}
Er.lessOrEqual = cp;
function cu(e, t) {
  if (e.length !== t.length)
    return 0;
  for (var r = 0, i = 0; i < e.length; i++)
    r |= e[i] ^ t[i];
  return 1 & r - 1 >>> 8;
}
Er.compare = cu;
function up(e, t) {
  return e.length === 0 || t.length === 0 ? !1 : cu(e, t) !== 0;
}
Er.equal = up;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = Er, r = Ut;
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
        for (var h = this._fin ? 0 : 2048, p = this._h[0], y = this._h[1], m = this._h[2], D = this._h[3], I = this._h[4], P = this._h[5], U = this._h[6], E = this._h[7], O = this._h[8], b = this._h[9], _ = this._r[0], d = this._r[1], o = this._r[2], g = this._r[3], A = this._r[4], L = this._r[5], $ = this._r[6], k = this._r[7], Y = this._r[8], x = this._r[9]; f >= 16; ) {
          var T = a[l + 0] | a[l + 1] << 8;
          p += T & 8191;
          var H = a[l + 2] | a[l + 3] << 8;
          y += (T >>> 13 | H << 3) & 8191;
          var V = a[l + 4] | a[l + 5] << 8;
          m += (H >>> 10 | V << 6) & 8191;
          var q = a[l + 6] | a[l + 7] << 8;
          D += (V >>> 7 | q << 9) & 8191;
          var B = a[l + 8] | a[l + 9] << 8;
          I += (q >>> 4 | B << 12) & 8191, P += B >>> 1 & 8191;
          var j = a[l + 10] | a[l + 11] << 8;
          U += (B >>> 14 | j << 2) & 8191;
          var K = a[l + 12] | a[l + 13] << 8;
          E += (j >>> 11 | K << 5) & 8191;
          var oe = a[l + 14] | a[l + 15] << 8;
          O += (K >>> 8 | oe << 8) & 8191, b += oe >>> 5 | h;
          var W = 0, ie = W;
          ie += p * _, ie += y * (5 * x), ie += m * (5 * Y), ie += D * (5 * k), ie += I * (5 * $), W = ie >>> 13, ie &= 8191, ie += P * (5 * L), ie += U * (5 * A), ie += E * (5 * g), ie += O * (5 * o), ie += b * (5 * d), W += ie >>> 13, ie &= 8191;
          var Z = W;
          Z += p * d, Z += y * _, Z += m * (5 * x), Z += D * (5 * Y), Z += I * (5 * k), W = Z >>> 13, Z &= 8191, Z += P * (5 * $), Z += U * (5 * L), Z += E * (5 * A), Z += O * (5 * g), Z += b * (5 * o), W += Z >>> 13, Z &= 8191;
          var re = W;
          re += p * o, re += y * d, re += m * _, re += D * (5 * x), re += I * (5 * Y), W = re >>> 13, re &= 8191, re += P * (5 * k), re += U * (5 * $), re += E * (5 * L), re += O * (5 * A), re += b * (5 * g), W += re >>> 13, re &= 8191;
          var F = W;
          F += p * g, F += y * o, F += m * d, F += D * _, F += I * (5 * x), W = F >>> 13, F &= 8191, F += P * (5 * Y), F += U * (5 * k), F += E * (5 * $), F += O * (5 * L), F += b * (5 * A), W += F >>> 13, F &= 8191;
          var N = W;
          N += p * A, N += y * g, N += m * o, N += D * d, N += I * _, W = N >>> 13, N &= 8191, N += P * (5 * x), N += U * (5 * Y), N += E * (5 * k), N += O * (5 * $), N += b * (5 * L), W += N >>> 13, N &= 8191;
          var C = W;
          C += p * L, C += y * A, C += m * g, C += D * o, C += I * d, W = C >>> 13, C &= 8191, C += P * _, C += U * (5 * x), C += E * (5 * Y), C += O * (5 * k), C += b * (5 * $), W += C >>> 13, C &= 8191;
          var c = W;
          c += p * $, c += y * L, c += m * A, c += D * g, c += I * o, W = c >>> 13, c &= 8191, c += P * d, c += U * _, c += E * (5 * x), c += O * (5 * Y), c += b * (5 * k), W += c >>> 13, c &= 8191;
          var S = W;
          S += p * k, S += y * $, S += m * L, S += D * A, S += I * g, W = S >>> 13, S &= 8191, S += P * o, S += U * d, S += E * _, S += O * (5 * x), S += b * (5 * Y), W += S >>> 13, S &= 8191;
          var G = W;
          G += p * Y, G += y * k, G += m * $, G += D * L, G += I * A, W = G >>> 13, G &= 8191, G += P * g, G += U * o, G += E * d, G += O * _, G += b * (5 * x), W += G >>> 13, G &= 8191;
          var X = W;
          X += p * x, X += y * Y, X += m * k, X += D * $, X += I * L, W = X >>> 13, X &= 8191, X += P * A, X += U * g, X += E * o, X += O * d, X += b * _, W += X >>> 13, X &= 8191, W = (W << 2) + W | 0, W = W + ie | 0, ie = W & 8191, W = W >>> 13, Z += W, p = ie, y = Z, m = re, D = F, I = N, P = C, U = c, E = S, O = G, b = X, l += 16, f -= 16;
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
})(au);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = Sn, r = au, i = Ut, n = le, s = Er;
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
var uu = {}, Ni = {}, zs = {};
Object.defineProperty(zs, "__esModule", { value: !0 });
function lp(e) {
  return typeof e.saveState < "u" && typeof e.restoreState < "u" && typeof e.cleanSavedState < "u";
}
zs.isSerializableHash = lp;
Object.defineProperty(Ni, "__esModule", { value: !0 });
var rr = zs, fp = Er, hp = Ut, lu = (
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
      this._outer.update(i), rr.isSerializableHash(this._inner) && rr.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), hp.wipe(i);
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
Ni.HMAC = lu;
function dp(e, t, r) {
  var i = new lu(e, t);
  i.update(r);
  var n = i.digest();
  return i.clean(), n;
}
Ni.hmac = dp;
Ni.equal = fp.equal;
Object.defineProperty(uu, "__esModule", { value: !0 });
var fa = Ni, ha = Ut, pp = (
  /** @class */
  function() {
    function e(t, r, i, n) {
      i === void 0 && (i = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = t, this._info = n;
      var s = fa.hmac(this._hash, i, r);
      this._hmac = new fa.HMAC(t, s), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
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
      this._hmac.clean(), ha.wipe(this._buffer), ha.wipe(this._counter), this._bufpos = 0;
    }, e;
  }()
), gp = uu.HKDF = pp, Dn = {};
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
var Bs = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.sharedKey = e.generateKeyPair = e.generateKeyPairFromSeed = e.scalarMultBase = e.scalarMult = e.SHARED_KEY_LENGTH = e.SECRET_KEY_LENGTH = e.PUBLIC_KEY_LENGTH = void 0;
  const t = ei, r = Ut;
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
    let o, g, A = 0, L = 0, $ = 0, k = 0, Y = 0, x = 0, T = 0, H = 0, V = 0, q = 0, B = 0, j = 0, K = 0, oe = 0, W = 0, ie = 0, Z = 0, re = 0, F = 0, N = 0, C = 0, c = 0, S = 0, G = 0, X = 0, be = 0, ve = 0, he = 0, Ie = 0, qe = 0, Le = 0, De = d[0], _e = d[1], de = d[2], ge = d[3], pe = d[4], ue = d[5], ce = d[6], ne = d[7], ye = d[8], me = d[9], ae = d[10], Ee = d[11], xe = d[12], Pe = d[13], Te = d[14], Ce = d[15];
    o = _[0], A += o * De, L += o * _e, $ += o * de, k += o * ge, Y += o * pe, x += o * ue, T += o * ce, H += o * ne, V += o * ye, q += o * me, B += o * ae, j += o * Ee, K += o * xe, oe += o * Pe, W += o * Te, ie += o * Ce, o = _[1], L += o * De, $ += o * _e, k += o * de, Y += o * ge, x += o * pe, T += o * ue, H += o * ce, V += o * ne, q += o * ye, B += o * me, j += o * ae, K += o * Ee, oe += o * xe, W += o * Pe, ie += o * Te, Z += o * Ce, o = _[2], $ += o * De, k += o * _e, Y += o * de, x += o * ge, T += o * pe, H += o * ue, V += o * ce, q += o * ne, B += o * ye, j += o * me, K += o * ae, oe += o * Ee, W += o * xe, ie += o * Pe, Z += o * Te, re += o * Ce, o = _[3], k += o * De, Y += o * _e, x += o * de, T += o * ge, H += o * pe, V += o * ue, q += o * ce, B += o * ne, j += o * ye, K += o * me, oe += o * ae, W += o * Ee, ie += o * xe, Z += o * Pe, re += o * Te, F += o * Ce, o = _[4], Y += o * De, x += o * _e, T += o * de, H += o * ge, V += o * pe, q += o * ue, B += o * ce, j += o * ne, K += o * ye, oe += o * me, W += o * ae, ie += o * Ee, Z += o * xe, re += o * Pe, F += o * Te, N += o * Ce, o = _[5], x += o * De, T += o * _e, H += o * de, V += o * ge, q += o * pe, B += o * ue, j += o * ce, K += o * ne, oe += o * ye, W += o * me, ie += o * ae, Z += o * Ee, re += o * xe, F += o * Pe, N += o * Te, C += o * Ce, o = _[6], T += o * De, H += o * _e, V += o * de, q += o * ge, B += o * pe, j += o * ue, K += o * ce, oe += o * ne, W += o * ye, ie += o * me, Z += o * ae, re += o * Ee, F += o * xe, N += o * Pe, C += o * Te, c += o * Ce, o = _[7], H += o * De, V += o * _e, q += o * de, B += o * ge, j += o * pe, K += o * ue, oe += o * ce, W += o * ne, ie += o * ye, Z += o * me, re += o * ae, F += o * Ee, N += o * xe, C += o * Pe, c += o * Te, S += o * Ce, o = _[8], V += o * De, q += o * _e, B += o * de, j += o * ge, K += o * pe, oe += o * ue, W += o * ce, ie += o * ne, Z += o * ye, re += o * me, F += o * ae, N += o * Ee, C += o * xe, c += o * Pe, S += o * Te, G += o * Ce, o = _[9], q += o * De, B += o * _e, j += o * de, K += o * ge, oe += o * pe, W += o * ue, ie += o * ce, Z += o * ne, re += o * ye, F += o * me, N += o * ae, C += o * Ee, c += o * xe, S += o * Pe, G += o * Te, X += o * Ce, o = _[10], B += o * De, j += o * _e, K += o * de, oe += o * ge, W += o * pe, ie += o * ue, Z += o * ce, re += o * ne, F += o * ye, N += o * me, C += o * ae, c += o * Ee, S += o * xe, G += o * Pe, X += o * Te, be += o * Ce, o = _[11], j += o * De, K += o * _e, oe += o * de, W += o * ge, ie += o * pe, Z += o * ue, re += o * ce, F += o * ne, N += o * ye, C += o * me, c += o * ae, S += o * Ee, G += o * xe, X += o * Pe, be += o * Te, ve += o * Ce, o = _[12], K += o * De, oe += o * _e, W += o * de, ie += o * ge, Z += o * pe, re += o * ue, F += o * ce, N += o * ne, C += o * ye, c += o * me, S += o * ae, G += o * Ee, X += o * xe, be += o * Pe, ve += o * Te, he += o * Ce, o = _[13], oe += o * De, W += o * _e, ie += o * de, Z += o * ge, re += o * pe, F += o * ue, N += o * ce, C += o * ne, c += o * ye, S += o * me, G += o * ae, X += o * Ee, be += o * xe, ve += o * Pe, he += o * Te, Ie += o * Ce, o = _[14], W += o * De, ie += o * _e, Z += o * de, re += o * ge, F += o * pe, N += o * ue, C += o * ce, c += o * ne, S += o * ye, G += o * me, X += o * ae, be += o * Ee, ve += o * xe, he += o * Pe, Ie += o * Te, qe += o * Ce, o = _[15], ie += o * De, Z += o * _e, re += o * de, F += o * ge, N += o * pe, C += o * ue, c += o * ce, S += o * ne, G += o * ye, X += o * me, be += o * ae, ve += o * Ee, he += o * xe, Ie += o * Pe, qe += o * Te, Le += o * Ce, A += 38 * Z, L += 38 * re, $ += 38 * F, k += 38 * N, Y += 38 * C, x += 38 * c, T += 38 * S, H += 38 * G, V += 38 * X, q += 38 * be, B += 38 * ve, j += 38 * he, K += 38 * Ie, oe += 38 * qe, W += 38 * Le, g = 1, o = A + g + 65535, g = Math.floor(o / 65536), A = o - g * 65536, o = L + g + 65535, g = Math.floor(o / 65536), L = o - g * 65536, o = $ + g + 65535, g = Math.floor(o / 65536), $ = o - g * 65536, o = k + g + 65535, g = Math.floor(o / 65536), k = o - g * 65536, o = Y + g + 65535, g = Math.floor(o / 65536), Y = o - g * 65536, o = x + g + 65535, g = Math.floor(o / 65536), x = o - g * 65536, o = T + g + 65535, g = Math.floor(o / 65536), T = o - g * 65536, o = H + g + 65535, g = Math.floor(o / 65536), H = o - g * 65536, o = V + g + 65535, g = Math.floor(o / 65536), V = o - g * 65536, o = q + g + 65535, g = Math.floor(o / 65536), q = o - g * 65536, o = B + g + 65535, g = Math.floor(o / 65536), B = o - g * 65536, o = j + g + 65535, g = Math.floor(o / 65536), j = o - g * 65536, o = K + g + 65535, g = Math.floor(o / 65536), K = o - g * 65536, o = oe + g + 65535, g = Math.floor(o / 65536), oe = o - g * 65536, o = W + g + 65535, g = Math.floor(o / 65536), W = o - g * 65536, o = ie + g + 65535, g = Math.floor(o / 65536), ie = o - g * 65536, A += g - 1 + 37 * (g - 1), g = 1, o = A + g + 65535, g = Math.floor(o / 65536), A = o - g * 65536, o = L + g + 65535, g = Math.floor(o / 65536), L = o - g * 65536, o = $ + g + 65535, g = Math.floor(o / 65536), $ = o - g * 65536, o = k + g + 65535, g = Math.floor(o / 65536), k = o - g * 65536, o = Y + g + 65535, g = Math.floor(o / 65536), Y = o - g * 65536, o = x + g + 65535, g = Math.floor(o / 65536), x = o - g * 65536, o = T + g + 65535, g = Math.floor(o / 65536), T = o - g * 65536, o = H + g + 65535, g = Math.floor(o / 65536), H = o - g * 65536, o = V + g + 65535, g = Math.floor(o / 65536), V = o - g * 65536, o = q + g + 65535, g = Math.floor(o / 65536), q = o - g * 65536, o = B + g + 65535, g = Math.floor(o / 65536), B = o - g * 65536, o = j + g + 65535, g = Math.floor(o / 65536), j = o - g * 65536, o = K + g + 65535, g = Math.floor(o / 65536), K = o - g * 65536, o = oe + g + 65535, g = Math.floor(o / 65536), oe = o - g * 65536, o = W + g + 65535, g = Math.floor(o / 65536), W = o - g * 65536, o = ie + g + 65535, g = Math.floor(o / 65536), ie = o - g * 65536, A += g - 1 + 37 * (g - 1), b[0] = A, b[1] = L, b[2] = $, b[3] = k, b[4] = Y, b[5] = x, b[6] = T, b[7] = H, b[8] = V, b[9] = q, b[10] = B, b[11] = j, b[12] = K, b[13] = oe, b[14] = W, b[15] = ie;
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
    const d = new Uint8Array(32), o = new Float64Array(80), g = i(), A = i(), L = i(), $ = i(), k = i(), Y = i();
    for (let V = 0; V < 31; V++)
      d[V] = b[V];
    d[31] = b[31] & 127 | 64, d[0] &= 248, f(o, _);
    for (let V = 0; V < 16; V++)
      A[V] = o[V];
    g[0] = $[0] = 1;
    for (let V = 254; V >= 0; --V) {
      const q = d[V >>> 3] >>> (V & 7) & 1;
      a(g, A, q), a(L, $, q), h(k, g, L), p(g, g, L), h(L, A, $), p(A, A, $), m($, k), m(Y, g), y(g, L, g), y(L, A, k), h(k, g, L), p(g, g, L), m(A, g), p(L, $, Y), y(g, L, s), h(g, g, $), y(L, L, g), y(g, $, Y), y($, A, o), m(A, k), a(g, A, q), a(L, $, q);
    }
    for (let V = 0; V < 16; V++)
      o[V + 16] = g[V], o[V + 32] = L[V], o[V + 48] = A[V], o[V + 64] = $[V];
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
})(Bs);
var da = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var i = 0, n = t.length, s; i < n; i++)
      (s || !(i in t)) && (s || (s = Array.prototype.slice.call(t, 0, i)), s[i] = t[i]);
  return e.concat(s || Array.prototype.slice.call(t));
}, yp = (
  /** @class */
  function() {
    function e(t, r, i) {
      this.name = t, this.version = r, this.os = i, this.type = "browser";
    }
    return e;
  }()
), bp = (
  /** @class */
  function() {
    function e(t) {
      this.version = t, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return e;
  }()
), vp = (
  /** @class */
  function() {
    function e(t, r, i, n) {
      this.name = t, this.version = r, this.os = i, this.bot = n, this.type = "bot-device";
    }
    return e;
  }()
), mp = (
  /** @class */
  function() {
    function e() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return e;
  }()
), wp = (
  /** @class */
  function() {
    function e() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return e;
  }()
), _p = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, Ep = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, pa = 3, Sp = [
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
  ["searchbot", _p]
], ga = [
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
function Dp(e) {
  return e ? ya(e) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new wp() : typeof navigator < "u" ? ya(navigator.userAgent) : xp();
}
function Op(e) {
  return e !== "" && Sp.reduce(function(t, r) {
    var i = r[0], n = r[1];
    if (t)
      return t;
    var s = n.exec(e);
    return !!s && [i, s];
  }, !1);
}
function ya(e) {
  var t = Op(e);
  if (!t)
    return null;
  var r = t[0], i = t[1];
  if (r === "searchbot")
    return new mp();
  var n = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
  n ? n.length < pa && (n = da(da([], n, !0), Cp(pa - n.length), !0)) : n = [];
  var s = n.join("."), u = Ip(e), a = Ep.exec(e);
  return a && a[1] ? new vp(r, s, u, a[1]) : new yp(r, s, u);
}
function Ip(e) {
  for (var t = 0, r = ga.length; t < r; t++) {
    var i = ga[t], n = i[0], s = i[1], u = s.exec(e);
    if (u)
      return n;
  }
  return null;
}
function xp() {
  var e = typeof process < "u" && process.version;
  return e ? new bp(process.version.slice(1)) : null;
}
function Cp(e) {
  for (var t = [], r = 0; r < e; r++)
    t.push("0");
  return t;
}
var $e = {};
Object.defineProperty($e, "__esModule", { value: !0 });
$e.getLocalStorage = $e.getLocalStorageOrThrow = $e.getCrypto = $e.getCryptoOrThrow = hu = $e.getLocation = $e.getLocationOrThrow = Vs = $e.getNavigator = $e.getNavigatorOrThrow = fu = $e.getDocument = $e.getDocumentOrThrow = $e.getFromWindowOrThrow = $e.getFromWindow = void 0;
function jr(e) {
  let t;
  return typeof window < "u" && typeof window[e] < "u" && (t = window[e]), t;
}
$e.getFromWindow = jr;
function ti(e) {
  const t = jr(e);
  if (!t)
    throw new Error(`${e} is not defined in Window`);
  return t;
}
$e.getFromWindowOrThrow = ti;
function Rp() {
  return ti("document");
}
$e.getDocumentOrThrow = Rp;
function Ap() {
  return jr("document");
}
var fu = $e.getDocument = Ap;
function Pp() {
  return ti("navigator");
}
$e.getNavigatorOrThrow = Pp;
function Tp() {
  return jr("navigator");
}
var Vs = $e.getNavigator = Tp;
function Np() {
  return ti("location");
}
$e.getLocationOrThrow = Np;
function Lp() {
  return jr("location");
}
var hu = $e.getLocation = Lp;
function Fp() {
  return ti("crypto");
}
$e.getCryptoOrThrow = Fp;
function $p() {
  return jr("crypto");
}
$e.getCrypto = $p;
function Up() {
  return ti("localStorage");
}
$e.getLocalStorageOrThrow = Up;
function Mp() {
  return jr("localStorage");
}
$e.getLocalStorage = Mp;
var ks = {};
Object.defineProperty(ks, "__esModule", { value: !0 });
var du = ks.getWindowMetadata = void 0;
const ba = $e;
function jp() {
  let e, t;
  try {
    e = ba.getDocumentOrThrow(), t = ba.getLocationOrThrow();
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
du = ks.getWindowMetadata = jp;
var xi = {}, qp = (e) => encodeURIComponent(e).replace(/[!'()*]/g, (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`), pu = "%[a-f0-9]{2}", va = new RegExp("(" + pu + ")|([^%]+?)", "gi"), ma = new RegExp("(" + pu + ")+", "gi");
function ms(e, t) {
  try {
    return [decodeURIComponent(e.join(""))];
  } catch {
  }
  if (e.length === 1)
    return e;
  t = t || 1;
  var r = e.slice(0, t), i = e.slice(t);
  return Array.prototype.concat.call([], ms(r), ms(i));
}
function zp(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    for (var t = e.match(va) || [], r = 1; r < t.length; r++)
      e = ms(t, r).join(""), t = e.match(va) || [];
    return e;
  }
}
function Bp(e) {
  for (var t = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = ma.exec(e); r; ) {
    try {
      t[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var i = zp(r[0]);
      i !== r[0] && (t[r[0]] = i);
    }
    r = ma.exec(e);
  }
  t["%C2"] = "�";
  for (var n = Object.keys(t), s = 0; s < n.length; s++) {
    var u = n[s];
    e = e.replace(new RegExp(u, "g"), t[u]);
  }
  return e;
}
var Vp = function(e) {
  if (typeof e != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
  try {
    return e = e.replace(/\+/g, " "), decodeURIComponent(e);
  } catch {
    return Bp(e);
  }
}, kp = (e, t) => {
  if (!(typeof e == "string" && typeof t == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (t === "")
    return [e];
  const r = e.indexOf(t);
  return r === -1 ? [e] : [
    e.slice(0, r),
    e.slice(r + t.length)
  ];
}, Kp = function(e, t) {
  for (var r = {}, i = Object.keys(e), n = Array.isArray(t), s = 0; s < i.length; s++) {
    var u = i[s], a = e[u];
    (n ? t.indexOf(u) !== -1 : t(u, a, e)) && (r[u] = a);
  }
  return r;
};
(function(e) {
  const t = qp, r = Vp, i = kp, n = Kp, s = (E) => E == null, u = Symbol("encodeFragmentIdentifier");
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
})(xi);
const Wp = {
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
function gu(e, t) {
  return e.includes(":") ? [e] : t.chains || [];
}
const yu = "base10", It = "base16", ws = "base64pad", Ks = "utf8", bu = 0, qr = 1, Hp = 0, wa = 1, _s = 12, Ws = 32;
function Gp() {
  const e = Bs.generateKeyPair();
  return { privateKey: xt(e.secretKey, It), publicKey: xt(e.publicKey, It) };
}
function Es() {
  const e = ei.randomBytes(Ws);
  return xt(e, It);
}
function Yp(e, t) {
  const r = Bs.sharedKey(At(e, It), At(t, It)), i = new gp(Dn.SHA256, r).expand(Ws);
  return xt(i, It);
}
function Jp(e) {
  const t = Dn.hash(At(e, It));
  return xt(t, It);
}
function Gr(e) {
  const t = Dn.hash(At(e, Ks));
  return xt(t, It);
}
function Qp(e) {
  return At(`${e}`, yu);
}
function Li(e) {
  return Number(xt(e, yu));
}
function Xp(e) {
  const t = Qp(typeof e.type < "u" ? e.type : bu);
  if (Li(t) === qr && typeof e.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof e.senderPublicKey < "u" ? At(e.senderPublicKey, It) : void 0, i = typeof e.iv < "u" ? At(e.iv, It) : ei.randomBytes(_s), n = new qs.ChaCha20Poly1305(At(e.symKey, It)).seal(i, At(e.message, Ks));
  return eg({ type: t, sealed: n, iv: i, senderPublicKey: r });
}
function Zp(e) {
  const t = new qs.ChaCha20Poly1305(At(e.symKey, It)), { sealed: r, iv: i } = cn(e.encoded), n = t.open(i, r);
  if (n === null)
    throw new Error("Failed to decrypt");
  return xt(n, Ks);
}
function eg(e) {
  if (Li(e.type) === qr) {
    if (typeof e.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return xt(bs([e.type, e.senderPublicKey, e.iv, e.sealed]), ws);
  }
  return xt(bs([e.type, e.iv, e.sealed]), ws);
}
function cn(e) {
  const t = At(e, ws), r = t.slice(Hp, wa), i = wa;
  if (Li(r) === qr) {
    const a = i + Ws, l = a + _s, f = t.slice(i, a), h = t.slice(a, l), p = t.slice(l);
    return { type: r, sealed: p, iv: h, senderPublicKey: f };
  }
  const n = i + _s, s = t.slice(i, n), u = t.slice(n);
  return { type: r, sealed: u, iv: s };
}
function tg(e, t) {
  const r = cn(e);
  return vu({ type: Li(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? xt(r.senderPublicKey, It) : void 0, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey });
}
function vu(e) {
  const t = (e == null ? void 0 : e.type) || bu;
  if (t === qr) {
    if (typeof (e == null ? void 0 : e.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (e == null ? void 0 : e.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: t, senderPublicKey: e == null ? void 0 : e.senderPublicKey, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey };
}
function _a(e) {
  return e.type === qr && typeof e.senderPublicKey == "string" && typeof e.receiverPublicKey == "string";
}
var rg = Object.defineProperty, Ea = Object.getOwnPropertySymbols, ig = Object.prototype.hasOwnProperty, ng = Object.prototype.propertyIsEnumerable, Sa = (e, t, r) => t in e ? rg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Da = (e, t) => {
  for (var r in t || (t = {}))
    ig.call(t, r) && Sa(e, r, t[r]);
  if (Ea)
    for (var r of Ea(t))
      ng.call(t, r) && Sa(e, r, t[r]);
  return e;
};
const sg = "ReactNative", Lt = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, og = "js";
function Hs() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function On() {
  return !fu() && !!Vs() && navigator.product === sg;
}
function Fi() {
  return !Hs() && !!Vs();
}
function $i() {
  return On() ? Lt.reactNative : Hs() ? Lt.node : Fi() ? Lt.browser : Lt.unknown;
}
function ag(e, t) {
  let r = xi.parse(e);
  return r = Da(Da({}, r), t), e = xi.stringify(r), e;
}
function cg() {
  return du() || { name: "", description: "", url: "", icons: [""] };
}
function ug() {
  if ($i() === Lt.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: i } = global.Platform;
    return [r, i].join("-");
  }
  const e = Dp();
  if (e === null)
    return "unknown";
  const t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
  return e.type === "browser" ? [t, e.name, e.version].join("-") : [t, e.version].join("-");
}
function lg() {
  var e;
  const t = $i();
  return t === Lt.browser ? [t, ((e = hu()) == null ? void 0 : e.host) || "unknown"].join(":") : t;
}
function fg(e, t, r) {
  const i = ug(), n = lg();
  return [[e, t].join("-"), [og, r].join("-"), i, n].join("/");
}
function hg({ protocol: e, version: t, relayUrl: r, sdkVersion: i, auth: n, projectId: s, useOnCloseEvent: u }) {
  const a = r.split("?"), l = fg(e, t, i), f = { auth: n, ua: l, projectId: s, useOnCloseEvent: u || void 0 }, h = ag(a[1] || "", f);
  return a[0] + "?" + h;
}
function Fr(e, t) {
  return e.filter((r) => t.includes(r)).length === e.length;
}
function mu(e) {
  return Object.fromEntries(e.entries());
}
function wu(e) {
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
function Ci(e, t, r) {
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
function _u(e, t) {
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
function dg(e) {
  return _u("topic", e);
}
function pg(e) {
  return _u("id", e);
}
function Eu(e) {
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
function mr(e) {
  return Date.now() >= te.toMiliseconds(e);
}
function nt(e, t) {
  return `${e}${t ? `:${t}` : ""}`;
}
async function gg({ id: e, topic: t, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const i = typeof r == "string" ? JSON.parse(r) : r;
    let n = i == null ? void 0 : i.href;
    if (typeof n != "string")
      return;
    n.endsWith("/") && (n = n.slice(0, -1));
    const s = `${n}/wc?requestId=${e}&sessionTopic=${t}`, u = $i();
    u === Lt.browser ? s.startsWith("https://") ? window.open(s, "_blank", "noreferrer noopener") : window.open(s, "_self", "noreferrer noopener") : u === Lt.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(s);
  } catch (i) {
    console.error(i);
  }
}
const yg = "irn";
function Ss(e) {
  return (e == null ? void 0 : e.relay) || { protocol: yg };
}
function tn(e) {
  const t = Wp[e];
  if (typeof t > "u")
    throw new Error(`Relay Protocol not supported: ${e}`);
  return t;
}
var bg = Object.defineProperty, Oa = Object.getOwnPropertySymbols, vg = Object.prototype.hasOwnProperty, mg = Object.prototype.propertyIsEnumerable, Ia = (e, t, r) => t in e ? bg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, wg = (e, t) => {
  for (var r in t || (t = {}))
    vg.call(t, r) && Ia(e, r, t[r]);
  if (Oa)
    for (var r of Oa(t))
      mg.call(t, r) && Ia(e, r, t[r]);
  return e;
};
function _g(e, t = "-") {
  const r = {}, i = "relay" + t;
  return Object.keys(e).forEach((n) => {
    if (n.startsWith(i)) {
      const s = n.replace(i, ""), u = e[n];
      r[s] = u;
    }
  }), r;
}
function Eg(e) {
  const t = e.indexOf(":"), r = e.indexOf("?") !== -1 ? e.indexOf("?") : void 0, i = e.substring(0, t), n = e.substring(t + 1, r).split("@"), s = typeof r < "u" ? e.substring(r) : "", u = xi.parse(s);
  return { protocol: i, topic: Sg(n[0]), version: parseInt(n[1], 10), symKey: u.symKey, relay: _g(u) };
}
function Sg(e) {
  return e.startsWith("//") ? e.substring(2) : e;
}
function Dg(e, t = "-") {
  const r = "relay", i = {};
  return Object.keys(e).forEach((n) => {
    const s = r + t + n;
    e[n] && (i[s] = e[n]);
  }), i;
}
function Og(e) {
  return `${e.protocol}:${e.topic}@${e.version}?` + xi.stringify(wg({ symKey: e.symKey }, Dg(e.relay)));
}
function ri(e) {
  const t = [];
  return e.forEach((r) => {
    const [i, n] = r.split(":");
    t.push(`${i}:${n}`);
  }), t;
}
function Ig(e) {
  const t = [];
  return Object.values(e).forEach((r) => {
    t.push(...ri(r.accounts));
  }), t;
}
function xg(e, t) {
  const r = [];
  return Object.values(e).forEach((i) => {
    ri(i.accounts).includes(t) && r.push(...i.methods);
  }), r;
}
function Cg(e, t) {
  const r = [];
  return Object.values(e).forEach((i) => {
    ri(i.accounts).includes(t) && r.push(...i.events);
  }), r;
}
function Rg(e, t) {
  const r = rn(e, t);
  if (r)
    throw new Error(r.message);
  const i = {};
  for (const [n, s] of Object.entries(e))
    i[n] = { methods: s.methods, events: s.events, chains: s.accounts.map((u) => `${u.split(":")[0]}:${u.split(":")[1]}`) };
  return i;
}
const Ag = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, Pg = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function Q(e, t) {
  const { message: r, code: i } = Pg[e];
  return { message: t ? `${r} ${t}` : r, code: i };
}
function st(e, t) {
  const { message: r, code: i } = Ag[e];
  return { message: t ? `${r} ${t}` : r, code: i };
}
function Ui(e, t) {
  return Array.isArray(e) ? typeof t < "u" && e.length ? e.every(t) : !0 : !1;
}
function Di(e) {
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
function Tg(e, t) {
  const { requiredNamespaces: r } = t, i = Object.keys(e.namespaces), n = Object.keys(r);
  let s = !0;
  return Fr(n, i) ? (i.forEach((u) => {
    const { accounts: a, methods: l, events: f } = e.namespaces[u], h = ri(a), p = r[u];
    (!Fr(gu(u, p), h) || !Fr(p.methods, l) || !Fr(p.events, f)) && (s = !1);
  }), s) : !1;
}
function un(e) {
  return ut(e, !1) && e.includes(":") ? e.split(":").length === 2 : !1;
}
function Ng(e) {
  if (ut(e, !1) && e.includes(":")) {
    const t = e.split(":");
    if (t.length === 3) {
      const r = t[0] + ":" + t[1];
      return !!t[2] && un(r);
    }
  }
  return !1;
}
function Lg(e) {
  if (ut(e, !1))
    try {
      return typeof new URL(e) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function Fg(e) {
  var t;
  return (t = e == null ? void 0 : e.proposer) == null ? void 0 : t.publicKey;
}
function $g(e) {
  return e == null ? void 0 : e.topic;
}
function Ug(e, t) {
  let r = null;
  return ut(e == null ? void 0 : e.publicKey, !1) || (r = Q("MISSING_OR_INVALID", `${t} controller public key should be a string`)), r;
}
function xa(e) {
  let t = !0;
  return Ui(e) ? e.length && (t = e.every((r) => ut(r, !1))) : t = !1, t;
}
function Mg(e, t, r) {
  let i = null;
  return Ui(t) && t.length ? t.forEach((n) => {
    i || un(n) || (i = st("UNSUPPORTED_CHAINS", `${r}, chain ${n} should be a string and conform to "namespace:chainId" format`));
  }) : un(e) || (i = st("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), i;
}
function jg(e, t, r) {
  let i = null;
  return Object.entries(e).forEach(([n, s]) => {
    if (i)
      return;
    const u = Mg(n, gu(n, s), `${t} ${r}`);
    u && (i = u);
  }), i;
}
function qg(e, t) {
  let r = null;
  return Ui(e) ? e.forEach((i) => {
    r || Ng(i) || (r = st("UNSUPPORTED_ACCOUNTS", `${t}, account ${i} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = st("UNSUPPORTED_ACCOUNTS", `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function zg(e, t) {
  let r = null;
  return Object.values(e).forEach((i) => {
    if (r)
      return;
    const n = qg(i == null ? void 0 : i.accounts, `${t} namespace`);
    n && (r = n);
  }), r;
}
function Bg(e, t) {
  let r = null;
  return xa(e == null ? void 0 : e.methods) ? xa(e == null ? void 0 : e.events) || (r = st("UNSUPPORTED_EVENTS", `${t}, events should be an array of strings or empty array for no events`)) : r = st("UNSUPPORTED_METHODS", `${t}, methods should be an array of strings or empty array for no methods`), r;
}
function Su(e, t) {
  let r = null;
  return Object.values(e).forEach((i) => {
    if (r)
      return;
    const n = Bg(i, `${t}, namespace`);
    n && (r = n);
  }), r;
}
function Vg(e, t, r) {
  let i = null;
  if (e && Di(e)) {
    const n = Su(e, t);
    n && (i = n);
    const s = jg(e, t, r);
    s && (i = s);
  } else
    i = Q("MISSING_OR_INVALID", `${t}, ${r} should be an object with data`);
  return i;
}
function rn(e, t) {
  let r = null;
  if (e && Di(e)) {
    const i = Su(e, t);
    i && (r = i);
    const n = zg(e, t);
    n && (r = n);
  } else
    r = Q("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
  return r;
}
function Du(e) {
  return ut(e.protocol, !0);
}
function kg(e, t) {
  let r = !1;
  return t && !e ? r = !0 : e && Ui(e) && e.length && e.forEach((i) => {
    r = Du(i);
  }), r;
}
function Kg(e) {
  return typeof e == "number";
}
function Rt(e) {
  return typeof e < "u" && typeof e !== null;
}
function Wg(e) {
  return !(!e || typeof e != "object" || !e.code || !Gs(e.code, !1) || !e.message || !ut(e.message, !1));
}
function Hg(e) {
  return !(Ot(e) || !ut(e.method, !1));
}
function Gg(e) {
  return !(Ot(e) || Ot(e.result) && Ot(e.error) || !Gs(e.id, !1) || !ut(e.jsonrpc, !1));
}
function Yg(e) {
  return !(Ot(e) || !ut(e.name, !1));
}
function Ca(e, t) {
  return !(!un(t) || !Ig(e).includes(t));
}
function Jg(e, t, r) {
  return ut(r, !1) ? xg(e, t).includes(r) : !1;
}
function Qg(e, t, r) {
  return ut(r, !1) ? Cg(e, t).includes(r) : !1;
}
function Ra(e, t, r) {
  let i = null;
  const n = Xg(e), s = Zg(t), u = Object.keys(n), a = Object.keys(s), l = Aa(Object.keys(e)), f = Aa(Object.keys(t)), h = l.filter((p) => !f.includes(p));
  return h.length && (i = Q("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${h.toString()}
      Received: ${Object.keys(t).toString()}`)), Fr(u, a) || (i = Q("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${u.toString()}
      Approved: ${a.toString()}`)), Object.keys(t).forEach((p) => {
    if (!p.includes(":") || i)
      return;
    const y = ri(t[p].accounts);
    y.includes(p) || (i = Q("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${p}
        Required: ${p}
        Approved: ${y.toString()}`));
  }), u.forEach((p) => {
    i || (Fr(n[p].methods, s[p].methods) ? Fr(n[p].events, s[p].events) || (i = Q("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${p}`)) : i = Q("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${p}`));
  }), i;
}
function Xg(e) {
  const t = {};
  return Object.keys(e).forEach((r) => {
    var i;
    r.includes(":") ? t[r] = e[r] : (i = e[r].chains) == null || i.forEach((n) => {
      t[n] = { methods: e[r].methods, events: e[r].events };
    });
  }), t;
}
function Aa(e) {
  return [...new Set(e.map((t) => t.includes(":") ? t.split(":")[0] : t))];
}
function Zg(e) {
  const t = {};
  return Object.keys(e).forEach((r) => {
    if (r.includes(":"))
      t[r] = e[r];
    else {
      const i = ri(e[r].accounts);
      i == null || i.forEach((n) => {
        t[n] = { accounts: e[r].accounts.filter((s) => s.includes(`${n}:`)), methods: e[r].methods, events: e[r].events };
      });
    }
  }), t;
}
function ey(e, t) {
  return Gs(e, !1) && e <= t.max && e >= t.min;
}
function Pa() {
  const e = $i();
  return new Promise((t) => {
    switch (e) {
      case Lt.browser:
        t(ty());
        break;
      case Lt.reactNative:
        t(ry());
        break;
      case Lt.node:
        t(iy());
        break;
      default:
        t(!0);
    }
  });
}
function ty() {
  return Fi() && (navigator == null ? void 0 : navigator.onLine);
}
async function ry() {
  if (On() && typeof global < "u" && global != null && global.NetInfo) {
    const e = await (global == null ? void 0 : global.NetInfo.fetch());
    return e == null ? void 0 : e.isConnected;
  }
  return !0;
}
function iy() {
  return !0;
}
function ny(e) {
  switch ($i()) {
    case Lt.browser:
      sy(e);
      break;
    case Lt.reactNative:
      oy(e);
      break;
  }
}
function sy(e) {
  Fi() && (window.addEventListener("online", () => e(!0)), window.addEventListener("offline", () => e(!1)));
}
function oy(e) {
  On() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((t) => e(t == null ? void 0 : t.isConnected)));
}
const Vn = {};
let Ji = class {
  static get(t) {
    return Vn[t];
  }
  static set(t, r) {
    Vn[t] = r;
  }
  static delete(t) {
    delete Vn[t];
  }
};
const ay = "PARSE_ERROR", cy = "INVALID_REQUEST", uy = "METHOD_NOT_FOUND", ly = "INVALID_PARAMS", Ou = "INTERNAL_ERROR", Ys = "SERVER_ERROR", fy = [-32700, -32600, -32601, -32602, -32603], Oi = {
  [ay]: { code: -32700, message: "Parse error" },
  [cy]: { code: -32600, message: "Invalid Request" },
  [uy]: { code: -32601, message: "Method not found" },
  [ly]: { code: -32602, message: "Invalid params" },
  [Ou]: { code: -32603, message: "Internal error" },
  [Ys]: { code: -32e3, message: "Server error" }
}, Iu = Ys;
function hy(e) {
  return fy.includes(e);
}
function Ta(e) {
  return Object.keys(Oi).includes(e) ? Oi[e] : Oi[Iu];
}
function dy(e) {
  const t = Object.values(Oi).find((r) => r.code === e);
  return t || Oi[Iu];
}
function py(e, t, r) {
  return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${t}`) : e;
}
var xu = {}, ar = {}, Na;
function gy() {
  if (Na)
    return ar;
  Na = 1, Object.defineProperty(ar, "__esModule", { value: !0 }), ar.isBrowserCryptoAvailable = ar.getSubtleCrypto = ar.getBrowerCrypto = void 0;
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
var cr = {}, La;
function yy() {
  if (La)
    return cr;
  La = 1, Object.defineProperty(cr, "__esModule", { value: !0 }), cr.isBrowser = cr.isNode = cr.isReactNative = void 0;
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
  t.__exportStar(gy(), e), t.__exportStar(yy(), e);
})(xu);
function Js(e = 3) {
  const t = Date.now() * Math.pow(10, e), r = Math.floor(Math.random() * Math.pow(10, e));
  return t + r;
}
function Cu(e = 6) {
  return BigInt(Js(e));
}
function Ri(e, t, r) {
  return {
    id: r || Js(),
    jsonrpc: "2.0",
    method: e,
    params: t
  };
}
function Qs(e, t) {
  return {
    id: e,
    jsonrpc: "2.0",
    result: t
  };
}
function Xs(e, t, r) {
  return {
    id: e,
    jsonrpc: "2.0",
    error: by(t, r)
  };
}
function by(e, t) {
  return typeof e > "u" ? Ta(Ou) : (typeof e == "string" && (e = Object.assign(Object.assign({}, Ta(Ys)), { message: e })), typeof t < "u" && (e.data = t), hy(e.code) && (e = dy(e.code)), e);
}
class vy {
}
class my extends vy {
  constructor() {
    super();
  }
}
class wy extends my {
  constructor(t) {
    super();
  }
}
const _y = "^wss?:";
function Ey(e) {
  const t = e.match(new RegExp(/^\w+:/, "gi"));
  if (!(!t || !t.length))
    return t[0];
}
function Sy(e, t) {
  const r = Ey(e);
  return typeof r > "u" ? !1 : new RegExp(t).test(r);
}
function Fa(e) {
  return Sy(e, _y);
}
function Dy(e) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(e);
}
function Ru(e) {
  return typeof e == "object" && "id" in e && "jsonrpc" in e && e.jsonrpc === "2.0";
}
function Zs(e) {
  return Ru(e) && "method" in e;
}
function In(e) {
  return Ru(e) && (fr(e) || Yt(e));
}
function fr(e) {
  return "result" in e;
}
function Yt(e) {
  return "error" in e;
}
class Oy extends wy {
  constructor(t) {
    super(t), this.events = new Qt.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(t), this.connection.connected && this.registerEventListeners();
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
    return this.requestStrict(Ri(t.method, t.params || [], t.id || Cu().toString()), r);
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
const Iy = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), xy = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", $a = (e) => e.split("?")[0], Ua = 10, Cy = Iy();
class Ry {
  constructor(t) {
    if (this.url = t, this.events = new Qt.EventEmitter(), this.registering = !1, !Fa(t))
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
    if (!Fa(t))
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
      const n = xu.isReactNative() ? void 0 : { rejectUnauthorized: !Dy(t) }, s = new Cy(t, [], n);
      xy() ? s.onerror = (u) => {
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
    const r = typeof t.data == "string" ? kc(t.data) : t.data;
    this.events.emit("payload", r);
  }
  onError(t, r) {
    const i = this.parseError(r), n = i.message || i.toString(), s = Xs(t, n);
    this.events.emit("payload", s);
  }
  parseError(t, r = this.url) {
    return py(t, $a(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Ua && this.events.setMaxListeners(Ua);
  }
  emitError(t) {
    const r = this.parseError(new Error((t == null ? void 0 : t.message) || `WebSocket connection failed for host: ${$a(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var ln = { exports: {} };
ln.exports;
(function(e, t) {
  var r = 200, i = "__lodash_hash_undefined__", n = 1, s = 2, u = 9007199254740991, a = "[object Arguments]", l = "[object Array]", f = "[object AsyncFunction]", h = "[object Boolean]", p = "[object Date]", y = "[object Error]", m = "[object Function]", D = "[object GeneratorFunction]", I = "[object Map]", P = "[object Number]", U = "[object Null]", E = "[object Object]", O = "[object Promise]", b = "[object Proxy]", _ = "[object RegExp]", d = "[object Set]", o = "[object String]", g = "[object Symbol]", A = "[object Undefined]", L = "[object WeakMap]", $ = "[object ArrayBuffer]", k = "[object DataView]", Y = "[object Float32Array]", x = "[object Float64Array]", T = "[object Int8Array]", H = "[object Int16Array]", V = "[object Int32Array]", q = "[object Uint8Array]", B = "[object Uint8ClampedArray]", j = "[object Uint16Array]", K = "[object Uint32Array]", oe = /[\\^$.*+?()[\]{}|]/g, W = /^\[object .+?Constructor\]$/, ie = /^(?:0|[1-9]\d*)$/, Z = {};
  Z[Y] = Z[x] = Z[T] = Z[H] = Z[V] = Z[q] = Z[B] = Z[j] = Z[K] = !0, Z[a] = Z[l] = Z[$] = Z[h] = Z[k] = Z[p] = Z[y] = Z[m] = Z[I] = Z[P] = Z[E] = Z[_] = Z[d] = Z[o] = Z[L] = !1;
  var re = typeof Nt == "object" && Nt && Nt.Object === Object && Nt, F = typeof self == "object" && self && self.Object === Object && self, N = re || F || Function("return this")(), C = t && !t.nodeType && t, c = C && !0 && e && !e.nodeType && e, S = c && c.exports === C, G = S && re.process, X = function() {
    try {
      return G && G.binding && G.binding("util");
    } catch {
    }
  }(), be = X && X.isTypedArray;
  function ve(v, R) {
    for (var z = -1, ee = v == null ? 0 : v.length, je = 0, fe = []; ++z < ee; ) {
      var Je = v[z];
      R(Je, z, v) && (fe[je++] = Je);
    }
    return fe;
  }
  function he(v, R) {
    for (var z = -1, ee = R.length, je = v.length; ++z < ee; )
      v[je + z] = R[z];
    return v;
  }
  function Ie(v, R) {
    for (var z = -1, ee = v == null ? 0 : v.length; ++z < ee; )
      if (R(v[z], z, v))
        return !0;
    return !1;
  }
  function qe(v, R) {
    for (var z = -1, ee = Array(v); ++z < v; )
      ee[z] = R(z);
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
    var R = -1, z = Array(v.size);
    return v.forEach(function(ee, je) {
      z[++R] = [je, ee];
    }), z;
  }
  function ge(v, R) {
    return function(z) {
      return v(R(z));
    };
  }
  function pe(v) {
    var R = -1, z = Array(v.size);
    return v.forEach(function(ee) {
      z[++R] = ee;
    }), z;
  }
  var ue = Array.prototype, ce = Function.prototype, ne = Object.prototype, ye = N["__core-js_shared__"], me = ce.toString, ae = ne.hasOwnProperty, Ee = function() {
    var v = /[^.]+$/.exec(ye && ye.keys && ye.keys.IE_PROTO || "");
    return v ? "Symbol(src)_1." + v : "";
  }(), xe = ne.toString, Pe = RegExp(
    "^" + me.call(ae).replace(oe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Te = S ? N.Buffer : void 0, Ce = N.Symbol, Pt = N.Uint8Array, Mt = ne.propertyIsEnumerable, Xt = ue.splice, lt = Ce ? Ce.toStringTag : void 0, Zt = Object.getOwnPropertySymbols, jt = Te ? Te.isBuffer : void 0, dr = ge(Object.keys, Object), ze = zr(N, "DataView"), Ue = zr(N, "Map"), We = zr(N, "Promise"), Ve = zr(N, "Set"), He = zr(N, "WeakMap"), Me = zr(Object, "create"), Qe = Dr(ze), et = Dr(Ue), tt = Dr(We), Xe = Dr(Ve), rt = Dr(He), Ze = Ce ? Ce.prototype : void 0, Ge = Ze ? Ze.valueOf : void 0;
  function Fe(v) {
    var R = -1, z = v == null ? 0 : v.length;
    for (this.clear(); ++R < z; ) {
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
      var z = R[v];
      return z === i ? void 0 : z;
    }
    return ae.call(R, v) ? R[v] : void 0;
  }
  function se(v) {
    var R = this.__data__;
    return Me ? R[v] !== void 0 : ae.call(R, v);
  }
  function Re(v, R) {
    var z = this.__data__;
    return this.size += this.has(v) ? 0 : 1, z[v] = Me && R === void 0 ? i : R, this;
  }
  Fe.prototype.clear = w, Fe.prototype.delete = M, Fe.prototype.get = J, Fe.prototype.has = se, Fe.prototype.set = Re;
  function Se(v) {
    var R = -1, z = v == null ? 0 : v.length;
    for (this.clear(); ++R < z; ) {
      var ee = v[R];
      this.set(ee[0], ee[1]);
    }
  }
  function Oe() {
    this.__data__ = [], this.size = 0;
  }
  function we(v) {
    var R = this.__data__, z = Bi(R, v);
    if (z < 0)
      return !1;
    var ee = R.length - 1;
    return z == ee ? R.pop() : Xt.call(R, z, 1), --this.size, !0;
  }
  function ft(v) {
    var R = this.__data__, z = Bi(R, v);
    return z < 0 ? void 0 : R[z][1];
  }
  function ke(v) {
    return Bi(this.__data__, v) > -1;
  }
  function Ye(v, R) {
    var z = this.__data__, ee = Bi(z, v);
    return ee < 0 ? (++this.size, z.push([v, R])) : z[ee][1] = R, this;
  }
  Se.prototype.clear = Oe, Se.prototype.delete = we, Se.prototype.get = ft, Se.prototype.has = ke, Se.prototype.set = Ye;
  function it(v) {
    var R = -1, z = v == null ? 0 : v.length;
    for (this.clear(); ++R < z; ) {
      var ee = v[R];
      this.set(ee[0], ee[1]);
    }
  }
  function pr() {
    this.size = 0, this.__data__ = {
      hash: new Fe(),
      map: new (Ue || Se)(),
      string: new Fe()
    };
  }
  function qi(v) {
    var R = Vi(this, v).delete(v);
    return this.size -= R ? 1 : 0, R;
  }
  function Wt(v) {
    return Vi(this, v).get(v);
  }
  function il(v) {
    return Vi(this, v).has(v);
  }
  function nl(v, R) {
    var z = Vi(this, v), ee = z.size;
    return z.set(v, R), this.size += z.size == ee ? 0 : 1, this;
  }
  it.prototype.clear = pr, it.prototype.delete = qi, it.prototype.get = Wt, it.prototype.has = il, it.prototype.set = nl;
  function zi(v) {
    var R = -1, z = v == null ? 0 : v.length;
    for (this.__data__ = new it(); ++R < z; )
      this.add(v[R]);
  }
  function sl(v) {
    return this.__data__.set(v, i), this;
  }
  function ol(v) {
    return this.__data__.has(v);
  }
  zi.prototype.add = zi.prototype.push = sl, zi.prototype.has = ol;
  function gr(v) {
    var R = this.__data__ = new Se(v);
    this.size = R.size;
  }
  function al() {
    this.__data__ = new Se(), this.size = 0;
  }
  function cl(v) {
    var R = this.__data__, z = R.delete(v);
    return this.size = R.size, z;
  }
  function ul(v) {
    return this.__data__.get(v);
  }
  function ll(v) {
    return this.__data__.has(v);
  }
  function fl(v, R) {
    var z = this.__data__;
    if (z instanceof Se) {
      var ee = z.__data__;
      if (!Ue || ee.length < r - 1)
        return ee.push([v, R]), this.size = ++z.size, this;
      z = this.__data__ = new it(ee);
    }
    return z.set(v, R), this.size = z.size, this;
  }
  gr.prototype.clear = al, gr.prototype.delete = cl, gr.prototype.get = ul, gr.prototype.has = ll, gr.prototype.set = fl;
  function hl(v, R) {
    var z = ki(v), ee = !z && xl(v), je = !z && !ee && An(v), fe = !z && !ee && !je && _o(v), Je = z || ee || je || fe, ot = Je ? qe(v.length, String) : [], ht = ot.length;
    for (var Ke in v)
      (R || ae.call(v, Ke)) && !(Je && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Ke == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      je && (Ke == "offset" || Ke == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      fe && (Ke == "buffer" || Ke == "byteLength" || Ke == "byteOffset") || // Skip index properties.
      El(Ke, ht))) && ot.push(Ke);
    return ot;
  }
  function Bi(v, R) {
    for (var z = v.length; z--; )
      if (bo(v[z][0], R))
        return z;
    return -1;
  }
  function dl(v, R, z) {
    var ee = R(v);
    return ki(v) ? ee : he(ee, z(v));
  }
  function si(v) {
    return v == null ? v === void 0 ? A : U : lt && lt in Object(v) ? wl(v) : Il(v);
  }
  function ho(v) {
    return oi(v) && si(v) == a;
  }
  function po(v, R, z, ee, je) {
    return v === R ? !0 : v == null || R == null || !oi(v) && !oi(R) ? v !== v && R !== R : pl(v, R, z, ee, po, je);
  }
  function pl(v, R, z, ee, je, fe) {
    var Je = ki(v), ot = ki(R), ht = Je ? l : yr(v), Ke = ot ? l : yr(R);
    ht = ht == a ? E : ht, Ke = Ke == a ? E : Ke;
    var Tt = ht == E, Ht = Ke == E, yt = ht == Ke;
    if (yt && An(v)) {
      if (!An(R))
        return !1;
      Je = !0, Tt = !1;
    }
    if (yt && !Tt)
      return fe || (fe = new gr()), Je || _o(v) ? go(v, R, z, ee, je, fe) : vl(v, R, ht, z, ee, je, fe);
    if (!(z & n)) {
      var qt = Tt && ae.call(v, "__wrapped__"), zt = Ht && ae.call(R, "__wrapped__");
      if (qt || zt) {
        var br = qt ? v.value() : v, or = zt ? R.value() : R;
        return fe || (fe = new gr()), je(br, or, z, ee, fe);
      }
    }
    return yt ? (fe || (fe = new gr()), ml(v, R, z, ee, je, fe)) : !1;
  }
  function gl(v) {
    if (!wo(v) || Dl(v))
      return !1;
    var R = vo(v) ? Pe : W;
    return R.test(Dr(v));
  }
  function yl(v) {
    return oi(v) && mo(v.length) && !!Z[si(v)];
  }
  function bl(v) {
    if (!Ol(v))
      return dr(v);
    var R = [];
    for (var z in Object(v))
      ae.call(v, z) && z != "constructor" && R.push(z);
    return R;
  }
  function go(v, R, z, ee, je, fe) {
    var Je = z & n, ot = v.length, ht = R.length;
    if (ot != ht && !(Je && ht > ot))
      return !1;
    var Ke = fe.get(v);
    if (Ke && fe.get(R))
      return Ke == R;
    var Tt = -1, Ht = !0, yt = z & s ? new zi() : void 0;
    for (fe.set(v, R), fe.set(R, v); ++Tt < ot; ) {
      var qt = v[Tt], zt = R[Tt];
      if (ee)
        var br = Je ? ee(zt, qt, Tt, R, v, fe) : ee(qt, zt, Tt, v, R, fe);
      if (br !== void 0) {
        if (br)
          continue;
        Ht = !1;
        break;
      }
      if (yt) {
        if (!Ie(R, function(or, Or) {
          if (!De(yt, Or) && (qt === or || je(qt, or, z, ee, fe)))
            return yt.push(Or);
        })) {
          Ht = !1;
          break;
        }
      } else if (!(qt === zt || je(qt, zt, z, ee, fe))) {
        Ht = !1;
        break;
      }
    }
    return fe.delete(v), fe.delete(R), Ht;
  }
  function vl(v, R, z, ee, je, fe, Je) {
    switch (z) {
      case k:
        if (v.byteLength != R.byteLength || v.byteOffset != R.byteOffset)
          return !1;
        v = v.buffer, R = R.buffer;
      case $:
        return !(v.byteLength != R.byteLength || !fe(new Pt(v), new Pt(R)));
      case h:
      case p:
      case P:
        return bo(+v, +R);
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
        var Tt = go(ot(v), ot(R), ee, je, fe, Je);
        return Je.delete(v), Tt;
      case g:
        if (Ge)
          return Ge.call(v) == Ge.call(R);
    }
    return !1;
  }
  function ml(v, R, z, ee, je, fe) {
    var Je = z & n, ot = yo(v), ht = ot.length, Ke = yo(R), Tt = Ke.length;
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
    var zt = !0;
    fe.set(v, R), fe.set(R, v);
    for (var br = Je; ++Ht < ht; ) {
      yt = ot[Ht];
      var or = v[yt], Or = R[yt];
      if (ee)
        var Eo = Je ? ee(Or, or, yt, R, v, fe) : ee(or, Or, yt, v, R, fe);
      if (!(Eo === void 0 ? or === Or || je(or, Or, z, ee, fe) : Eo)) {
        zt = !1;
        break;
      }
      br || (br = yt == "constructor");
    }
    if (zt && !br) {
      var Ki = v.constructor, Wi = R.constructor;
      Ki != Wi && "constructor" in v && "constructor" in R && !(typeof Ki == "function" && Ki instanceof Ki && typeof Wi == "function" && Wi instanceof Wi) && (zt = !1);
    }
    return fe.delete(v), fe.delete(R), zt;
  }
  function yo(v) {
    return dl(v, Al, _l);
  }
  function Vi(v, R) {
    var z = v.__data__;
    return Sl(R) ? z[typeof R == "string" ? "string" : "hash"] : z.map;
  }
  function zr(v, R) {
    var z = _e(v, R);
    return gl(z) ? z : void 0;
  }
  function wl(v) {
    var R = ae.call(v, lt), z = v[lt];
    try {
      v[lt] = void 0;
      var ee = !0;
    } catch {
    }
    var je = xe.call(v);
    return ee && (R ? v[lt] = z : delete v[lt]), je;
  }
  var _l = Zt ? function(v) {
    return v == null ? [] : (v = Object(v), ve(Zt(v), function(R) {
      return Mt.call(v, R);
    }));
  } : Pl, yr = si;
  (ze && yr(new ze(new ArrayBuffer(1))) != k || Ue && yr(new Ue()) != I || We && yr(We.resolve()) != O || Ve && yr(new Ve()) != d || He && yr(new He()) != L) && (yr = function(v) {
    var R = si(v), z = R == E ? v.constructor : void 0, ee = z ? Dr(z) : "";
    if (ee)
      switch (ee) {
        case Qe:
          return k;
        case et:
          return I;
        case tt:
          return O;
        case Xe:
          return d;
        case rt:
          return L;
      }
    return R;
  });
  function El(v, R) {
    return R = R ?? u, !!R && (typeof v == "number" || ie.test(v)) && v > -1 && v % 1 == 0 && v < R;
  }
  function Sl(v) {
    var R = typeof v;
    return R == "string" || R == "number" || R == "symbol" || R == "boolean" ? v !== "__proto__" : v === null;
  }
  function Dl(v) {
    return !!Ee && Ee in v;
  }
  function Ol(v) {
    var R = v && v.constructor, z = typeof R == "function" && R.prototype || ne;
    return v === z;
  }
  function Il(v) {
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
  function bo(v, R) {
    return v === R || v !== v && R !== R;
  }
  var xl = ho(function() {
    return arguments;
  }()) ? ho : function(v) {
    return oi(v) && ae.call(v, "callee") && !Mt.call(v, "callee");
  }, ki = Array.isArray;
  function Cl(v) {
    return v != null && mo(v.length) && !vo(v);
  }
  var An = jt || Tl;
  function Rl(v, R) {
    return po(v, R);
  }
  function vo(v) {
    if (!wo(v))
      return !1;
    var R = si(v);
    return R == m || R == D || R == f || R == b;
  }
  function mo(v) {
    return typeof v == "number" && v > -1 && v % 1 == 0 && v <= u;
  }
  function wo(v) {
    var R = typeof v;
    return v != null && (R == "object" || R == "function");
  }
  function oi(v) {
    return v != null && typeof v == "object";
  }
  var _o = be ? Le(be) : yl;
  function Al(v) {
    return Cl(v) ? hl(v) : bl(v);
  }
  function Pl() {
    return [];
  }
  function Tl() {
    return !1;
  }
  e.exports = Rl;
})(ln, ln.exports);
var Ay = ln.exports;
const Py = /* @__PURE__ */ yn(Ay);
function Ty(e, t) {
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
var Ny = Ty, Ly = Ny;
const Au = (e) => {
  if (e instanceof Uint8Array && e.constructor.name === "Uint8Array")
    return e;
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  if (ArrayBuffer.isView(e))
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Fy = (e) => new TextEncoder().encode(e), $y = (e) => new TextDecoder().decode(e);
class Uy {
  constructor(t, r, i) {
    this.name = t, this.prefix = r, this.baseEncode = i;
  }
  encode(t) {
    if (t instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class My {
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
    return Pu(this, t);
  }
}
class jy {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return Pu(this, t);
  }
  decode(t) {
    const r = t[0], i = this.decoders[r];
    if (i)
      return i.decode(t);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Pu = (e, t) => new jy({ ...e.decoders || { [e.prefix]: e }, ...t.decoders || { [t.prefix]: t } });
class qy {
  constructor(t, r, i, n) {
    this.name = t, this.prefix = r, this.baseEncode = i, this.baseDecode = n, this.encoder = new Uy(t, r, i), this.decoder = new My(t, r, n);
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const xn = ({ name: e, prefix: t, encode: r, decode: i }) => new qy(e, t, r, i), Mi = ({ prefix: e, name: t, alphabet: r }) => {
  const { encode: i, decode: n } = Ly(r, t);
  return xn({ prefix: e, name: t, encode: i, decode: (s) => Au(n(s)) });
}, zy = (e, t, r, i) => {
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
}, By = (e, t, r) => {
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
  return By(n, i, r);
}, decode(n) {
  return zy(n, i, r, e);
} }), Vy = xn({ prefix: "\0", name: "identity", encode: (e) => $y(e), decode: (e) => Fy(e) });
var ky = Object.freeze({ __proto__: null, identity: Vy });
const Ky = gt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var Wy = Object.freeze({ __proto__: null, base2: Ky });
const Hy = gt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Gy = Object.freeze({ __proto__: null, base8: Hy });
const Yy = Mi({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Jy = Object.freeze({ __proto__: null, base10: Yy });
const Qy = gt({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), Xy = gt({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Zy = Object.freeze({ __proto__: null, base16: Qy, base16upper: Xy });
const e0 = gt({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), t0 = gt({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), r0 = gt({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), i0 = gt({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), n0 = gt({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), s0 = gt({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), o0 = gt({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), a0 = gt({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), c0 = gt({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var u0 = Object.freeze({ __proto__: null, base32: e0, base32upper: t0, base32pad: r0, base32padupper: i0, base32hex: n0, base32hexupper: s0, base32hexpad: o0, base32hexpadupper: a0, base32z: c0 });
const l0 = Mi({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), f0 = Mi({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var h0 = Object.freeze({ __proto__: null, base36: l0, base36upper: f0 });
const d0 = Mi({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), p0 = Mi({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var g0 = Object.freeze({ __proto__: null, base58btc: d0, base58flickr: p0 });
const y0 = gt({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), b0 = gt({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), v0 = gt({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), m0 = gt({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var w0 = Object.freeze({ __proto__: null, base64: y0, base64pad: b0, base64url: v0, base64urlpad: m0 });
const Tu = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), _0 = Tu.reduce((e, t, r) => (e[r] = t, e), []), E0 = Tu.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []);
function S0(e) {
  return e.reduce((t, r) => (t += _0[r], t), "");
}
function D0(e) {
  const t = [];
  for (const r of e) {
    const i = E0[r.codePointAt(0)];
    if (i === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    t.push(i);
  }
  return new Uint8Array(t);
}
const O0 = xn({ prefix: "🚀", name: "base256emoji", encode: S0, decode: D0 });
var I0 = Object.freeze({ __proto__: null, base256emoji: O0 }), x0 = Nu, Ma = 128, C0 = 127, R0 = ~C0, A0 = Math.pow(2, 31);
function Nu(e, t, r) {
  t = t || [], r = r || 0;
  for (var i = r; e >= A0; )
    t[r++] = e & 255 | Ma, e /= 128;
  for (; e & R0; )
    t[r++] = e & 255 | Ma, e >>>= 7;
  return t[r] = e | 0, Nu.bytes = r - i + 1, t;
}
var P0 = Ds, T0 = 128, ja = 127;
function Ds(e, i) {
  var r = 0, i = i || 0, n = 0, s = i, u, a = e.length;
  do {
    if (s >= a)
      throw Ds.bytes = 0, new RangeError("Could not decode varint");
    u = e[s++], r += n < 28 ? (u & ja) << n : (u & ja) * Math.pow(2, n), n += 7;
  } while (u >= T0);
  return Ds.bytes = s - i, r;
}
var N0 = Math.pow(2, 7), L0 = Math.pow(2, 14), F0 = Math.pow(2, 21), $0 = Math.pow(2, 28), U0 = Math.pow(2, 35), M0 = Math.pow(2, 42), j0 = Math.pow(2, 49), q0 = Math.pow(2, 56), z0 = Math.pow(2, 63), B0 = function(e) {
  return e < N0 ? 1 : e < L0 ? 2 : e < F0 ? 3 : e < $0 ? 4 : e < U0 ? 5 : e < M0 ? 6 : e < j0 ? 7 : e < q0 ? 8 : e < z0 ? 9 : 10;
}, V0 = { encode: x0, decode: P0, encodingLength: B0 }, Lu = V0;
const qa = (e, t, r = 0) => (Lu.encode(e, t, r), t), za = (e) => Lu.encodingLength(e), Os = (e, t) => {
  const r = t.byteLength, i = za(e), n = i + za(r), s = new Uint8Array(n + r);
  return qa(e, s, 0), qa(r, s, i), s.set(t, n), new k0(e, r, t, s);
};
class k0 {
  constructor(t, r, i, n) {
    this.code = t, this.size = r, this.digest = i, this.bytes = n;
  }
}
const Fu = ({ name: e, code: t, encode: r }) => new K0(e, t, r);
class K0 {
  constructor(t, r, i) {
    this.name = t, this.code = r, this.encode = i;
  }
  digest(t) {
    if (t instanceof Uint8Array) {
      const r = this.encode(t);
      return r instanceof Uint8Array ? Os(this.code, r) : r.then((i) => Os(this.code, i));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const $u = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t)), W0 = Fu({ name: "sha2-256", code: 18, encode: $u("SHA-256") }), H0 = Fu({ name: "sha2-512", code: 19, encode: $u("SHA-512") });
var G0 = Object.freeze({ __proto__: null, sha256: W0, sha512: H0 });
const Uu = 0, Y0 = "identity", Mu = Au, J0 = (e) => Os(Uu, Mu(e)), Q0 = { code: Uu, name: Y0, encode: Mu, digest: J0 };
var X0 = Object.freeze({ __proto__: null, identity: Q0 });
new TextEncoder(), new TextDecoder();
const Ba = { ...ky, ...Wy, ...Gy, ...Jy, ...Zy, ...u0, ...h0, ...g0, ...w0, ...I0 };
({ ...G0, ...X0 });
function ju(e) {
  return globalThis.Buffer != null ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e;
}
function Z0(e = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? ju(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e);
}
function qu(e, t, r, i) {
  return { name: e, prefix: t, encoder: { name: e, prefix: t, encode: r }, decoder: { decode: i } };
}
const Va = qu("utf8", "u", (e) => "u" + new TextDecoder("utf8").decode(e), (e) => new TextEncoder().encode(e.substring(1))), kn = qu("ascii", "a", (e) => {
  let t = "a";
  for (let r = 0; r < e.length; r++)
    t += String.fromCharCode(e[r]);
  return t;
}, (e) => {
  e = e.substring(1);
  const t = Z0(e.length);
  for (let r = 0; r < e.length; r++)
    t[r] = e.charCodeAt(r);
  return t;
}), eb = { utf8: Va, "utf-8": Va, hex: Ba.base16, latin1: kn, ascii: kn, binary: kn, ...Ba };
function tb(e, t = "utf8") {
  const r = eb[t];
  if (!r)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? ju(globalThis.Buffer.from(e, "utf-8")) : r.decoder.decode(`${r.prefix}${e}`);
}
const zu = "wc", rb = 2, eo = "core", wr = `${zu}@2:${eo}:`, ib = { name: eo, logger: "error" }, nb = { database: ":memory:" }, sb = "crypto", ka = "client_ed25519_seed", ob = te.ONE_DAY, ab = "keychain", cb = "0.3", ub = "messages", lb = "0.3", fb = te.SIX_HOURS, hb = "publisher", Bu = "irn", db = "error", Vu = "wss://relay.walletconnect.com", Ka = "wss://relay.walletconnect.org", pb = "relayer", Et = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, gb = "_subscription", ur = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, yb = te.ONE_SECOND, bb = "2.10.0", vb = 1e4, mb = "0.3", wb = "WALLETCONNECT_CLIENT_ID", nr = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, _b = "subscription", Eb = "0.3", Sb = te.FIVE_SECONDS * 1e3, Db = "pairing", Ob = "0.3", bi = { wc_pairingDelete: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 0 } } }, ir = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, Ib = "history", xb = "0.3", Cb = "expirer", Bt = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, Rb = "0.3", Kn = "verify-api", nn = "https://verify.walletconnect.com", Wa = "https://verify.walletconnect.org";
class Ab {
  constructor(t, r) {
    this.core = t, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = ab, this.version = cb, this.initialized = !1, this.storagePrefix = wr, this.init = async () => {
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
        const { message: s } = Q("NO_MATCHING_KEY", `${this.name}: ${i}`);
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
    await this.core.storage.setItem(this.storageKey, mu(t));
  }
  async getKeyChain() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < "u" ? wu(t) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = Q("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class Pb {
  constructor(t, r, i) {
    this.core = t, this.logger = r, this.name = sb, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (n) => (this.isInitialized(), this.keychain.has(n)), this.getClientId = async () => {
      this.isInitialized();
      const n = await this.getClientSeed(), s = la(n);
      return su(s.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const n = Gp();
      return this.setPrivateKey(n.publicKey, n.privateKey);
    }, this.signJWT = async (n) => {
      this.isInitialized();
      const s = await this.getClientSeed(), u = la(s), a = Es();
      return await rp(a, n, ob, u);
    }, this.generateSharedKey = (n, s, u) => {
      this.isInitialized();
      const a = this.getPrivateKey(n), l = Yp(a, s);
      return this.setSymKey(l, u);
    }, this.setSymKey = async (n, s) => {
      this.isInitialized();
      const u = s || Jp(n);
      return await this.keychain.set(u, n), u;
    }, this.deleteKeyPair = async (n) => {
      this.isInitialized(), await this.keychain.del(n);
    }, this.deleteSymKey = async (n) => {
      this.isInitialized(), await this.keychain.del(n);
    }, this.encode = async (n, s, u) => {
      this.isInitialized();
      const a = vu(u), l = Us(s);
      if (_a(a)) {
        const y = a.senderPublicKey, m = a.receiverPublicKey;
        n = await this.generateSharedKey(y, m);
      }
      const f = this.getSymKey(n), { type: h, senderPublicKey: p } = a;
      return Xp({ type: h, symKey: f, message: l, senderPublicKey: p });
    }, this.decode = async (n, s, u) => {
      this.isInitialized();
      const a = tg(s, u);
      if (_a(a)) {
        const l = a.receiverPublicKey, f = a.senderPublicKey;
        n = await this.generateSharedKey(l, f);
      }
      try {
        const l = this.getSymKey(n), f = Zp({ symKey: l, encoded: s });
        return kc(f);
      } catch (l) {
        this.logger.error(`Failed to decode message from topic: '${n}', clientId: '${await this.getClientId()}'`), this.logger.error(l);
      }
    }, this.getPayloadType = (n) => {
      const s = cn(n);
      return Li(s.type);
    }, this.getPayloadSenderPublicKey = (n) => {
      const s = cn(n);
      return s.senderPublicKey ? xt(s.senderPublicKey, It) : void 0;
    }, this.core = t, this.logger = Ae.generateChildLogger(r, this.name), this.keychain = i || new Ab(this.core, this.logger);
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
      t = this.keychain.get(ka);
    } catch {
      t = Es(), await this.keychain.set(ka, t);
    }
    return tb(t, "base16");
  }
  getSymKey(t) {
    return this.keychain.get(t);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = Q("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class Tb extends sh {
  constructor(t, r) {
    super(t, r), this.logger = t, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = ub, this.version = lb, this.initialized = !1, this.storagePrefix = wr, this.init = async () => {
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
      const s = Gr(n);
      let u = this.messages.get(i);
      return typeof u > "u" && (u = {}), typeof u[s] < "u" || (u[s] = n, this.messages.set(i, u), await this.persist()), s;
    }, this.get = (i) => {
      this.isInitialized();
      let n = this.messages.get(i);
      return typeof n > "u" && (n = {}), n;
    }, this.has = (i, n) => {
      this.isInitialized();
      const s = this.get(i), u = Gr(n);
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
    await this.core.storage.setItem(this.storageKey, mu(t));
  }
  async getRelayerMessages() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < "u" ? wu(t) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = Q("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class Nb extends oh {
  constructor(t, r) {
    super(t, r), this.relayer = t, this.logger = r, this.events = new Qt.EventEmitter(), this.name = hb, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = te.toMiliseconds(te.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (i, n, s) => {
      var u;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i, message: n, opts: s } });
      try {
        const a = (s == null ? void 0 : s.ttl) || fb, l = Ss(s), f = (s == null ? void 0 : s.prompt) || !1, h = (s == null ? void 0 : s.tag) || 0, p = (s == null ? void 0 : s.id) || Cu().toString(), y = { topic: i, message: n, opts: { ttl: a, relay: l, prompt: f, tag: h, id: p } }, m = setTimeout(() => this.queue.set(p, y), this.publishTimeout);
        try {
          await await Ci(this.rpcPublish(i, n, a, l, f, h, p), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(p), this.relayer.events.emit(Et.publish, y);
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
    this.relayer.core.heartbeat.on(Zr.HEARTBEAT_EVENTS.pulse, () => {
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
class Lb {
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
var Fb = Object.defineProperty, $b = Object.defineProperties, Ub = Object.getOwnPropertyDescriptors, Ha = Object.getOwnPropertySymbols, Mb = Object.prototype.hasOwnProperty, jb = Object.prototype.propertyIsEnumerable, Ga = (e, t, r) => t in e ? Fb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, vi = (e, t) => {
  for (var r in t || (t = {}))
    Mb.call(t, r) && Ga(e, r, t[r]);
  if (Ha)
    for (var r of Ha(t))
      jb.call(t, r) && Ga(e, r, t[r]);
  return e;
}, Wn = (e, t) => $b(e, Ub(t));
class qb extends uh {
  constructor(t, r) {
    super(t, r), this.relayer = t, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new Lb(), this.events = new Qt.EventEmitter(), this.name = _b, this.version = Eb, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = wr, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (i, n) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: n } });
      try {
        const s = Ss(n), u = { topic: i, relay: s };
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
        !this.pending.has(i) && this.topics.includes(i) && (clearInterval(a), u.stop(this.pendingSubscriptionWatchLabel), n(!0)), u.elapsed(this.pendingSubscriptionWatchLabel) >= Sb && (clearInterval(a), u.stop(this.pendingSubscriptionWatchLabel), s(new Error("Subscription resolution timeout")));
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
      const n = Ss(i);
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
      await await Ci(this.relayer.request(i), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(Et.connection_stalled);
    }
    return Gr(t + this.clientId);
  }
  async rpcBatchSubscribe(t) {
    if (!t.length)
      return;
    const r = t[0].relay, i = { method: tn(r.protocol).batchSubscribe, params: { topics: t.map((n) => n.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      return await await Ci(this.relayer.request(i), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(Et.connection_stalled);
    }
  }
  rpcUnsubscribe(t, r, i) {
    const n = { method: tn(i.protocol).unsubscribe, params: { topic: t, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n }), this.relayer.request(n);
  }
  onSubscribe(t, r) {
    this.setSubscription(t, Wn(vi({}, r), { id: t })), this.pending.delete(r.topic);
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
      const { message: i } = Q("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw new Error(i);
    }
    return r;
  }
  deleteSubscription(t, r) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: t, reason: r });
    const i = this.getSubscription(t);
    this.subscriptions.delete(t), this.topicMap.delete(i.topic, t), this.events.emit(nr.deleted, Wn(vi({}, i), { reason: r }));
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
        const { message: r } = Q("RESTORE_WILL_OVERRIDE", this.name);
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
    Ui(r) && this.onBatchSubscribe(r.map((i, n) => Wn(vi({}, t[n]), { id: i })));
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
    this.relayer.core.heartbeat.on(Zr.HEARTBEAT_EVENTS.pulse, async () => {
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
      const { message: t } = Q("NOT_INITIALIZED", this.name);
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
var zb = Object.defineProperty, Ya = Object.getOwnPropertySymbols, Bb = Object.prototype.hasOwnProperty, Vb = Object.prototype.propertyIsEnumerable, Ja = (e, t, r) => t in e ? zb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, kb = (e, t) => {
  for (var r in t || (t = {}))
    Bb.call(t, r) && Ja(e, r, t[r]);
  if (Ya)
    for (var r of Ya(t))
      Vb.call(t, r) && Ja(e, r, t[r]);
  return e;
};
class Kb extends ah {
  constructor(t) {
    super(t), this.protocol = "wc", this.version = 2, this.events = new Qt.EventEmitter(), this.name = pb, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async (r) => {
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
      this.provider.on(ur.payload, this.onPayloadHandler), this.provider.on(ur.connect, this.onConnectHandler), this.provider.on(ur.disconnect, this.onDisconnectHandler), this.provider.on(ur.error, this.onProviderErrorHandler);
    }, this.core = t.core, this.logger = typeof t.logger < "u" && typeof t.logger != "string" ? Ae.generateChildLogger(t.logger, this.name) : Ae.pino(Ae.getDefaultLoggerOptions({ level: t.logger || db })), this.messages = new Tb(this.logger, t.core), this.subscriber = new qb(this, this.logger), this.publisher = new Nb(this, this.logger), this.relayUrl = (t == null ? void 0 : t.relayUrl) || Vu, this.projectId = t.projectId, this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Ka}...`), await this.restartTransport(Ka);
    }
    this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, vb);
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
    this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await Ci(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
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
            await Ci(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
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
        this.provider.events.emit(ur.disconnect);
      } finally {
        this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1;
      }
    }
  }
  async restartTransport(t) {
    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = t || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await Pa())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(t) {
    return this.staleConnectionErrors.some((r) => t.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const t = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new Oy(new Ry(hg({ sdkVersion: bb, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: t, useOnCloseEvent: !0 }))), this.registerProviderListeners();
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
      if (!t.method.endsWith(gb))
        return;
      const r = t.params, { topic: i, message: n, publishedAt: s } = r.data, u = { topic: i, message: n, publishedAt: s };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(kb({ type: "event", event: r.id }, u)), this.events.emit(r.id, u), await this.acknowledgePayload(t), await this.onMessageEvent(u);
    } else
      In(t) && this.events.emit(Et.message_ack, t);
  }
  async onMessageEvent(t) {
    await this.shouldIgnoreMessageEvent(t) || (this.events.emit(Et.message, t), await this.recordMessageEvent(t));
  }
  async acknowledgePayload(t) {
    const r = Qs(t.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(ur.payload, this.onPayloadHandler), this.provider.off(ur.connect, this.onConnectHandler), this.provider.off(ur.disconnect, this.onDisconnectHandler), this.provider.off(ur.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(Et.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let t = await Pa();
    ny(async (r) => {
      this.initialized && t !== r && (t = r, r ? await this.restartTransport().catch((i) => this.logger.error(i)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((i) => this.logger.error(i))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(Et.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((t) => this.logger.error(t));
    }, te.toMiliseconds(yb)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = Q("NOT_INITIALIZED", this.name);
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
var Wb = Object.defineProperty, Qa = Object.getOwnPropertySymbols, Hb = Object.prototype.hasOwnProperty, Gb = Object.prototype.propertyIsEnumerable, Xa = (e, t, r) => t in e ? Wb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Za = (e, t) => {
  for (var r in t || (t = {}))
    Hb.call(t, r) && Xa(e, r, t[r]);
  if (Qa)
    for (var r of Qa(t))
      Gb.call(t, r) && Xa(e, r, t[r]);
  return e;
};
class Cn extends ch {
  constructor(t, r, i, n = wr, s = void 0) {
    super(t, r, i, n), this.core = t, this.logger = r, this.name = i, this.map = /* @__PURE__ */ new Map(), this.version = mb, this.cached = [], this.initialized = !1, this.storagePrefix = wr, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((u) => {
        this.getKey && u !== null && !Ot(u) ? this.map.set(this.getKey(u), u) : Fg(u) ? this.map.set(u.id, u) : $g(u) && this.map.set(u.topic, u);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (u, a) => {
      this.isInitialized(), this.map.has(u) ? await this.update(u, a) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: u, value: a }), this.map.set(u, a), await this.persist());
    }, this.get = (u) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: u }), this.getData(u)), this.getAll = (u) => (this.isInitialized(), u ? this.values.filter((a) => Object.keys(u).every((l) => Py(a[l], u[l]))) : this.values), this.update = async (u, a) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: u, update: a });
      const l = Za(Za({}, this.getData(u)), a);
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
      const { message: i } = Q("NO_MATCHING_KEY", `${this.name}: ${t}`);
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
        const { message: r } = Q("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = t, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (t) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(t);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = Q("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class Yb {
  constructor(t, r) {
    this.core = t, this.logger = r, this.name = Db, this.version = Ob, this.events = new Uc(), this.initialized = !1, this.storagePrefix = wr, this.ignoredPayloadTypes = [qr], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: i }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i])];
    }, this.create = async () => {
      this.isInitialized();
      const i = Es(), n = await this.core.crypto.setSymKey(i), s = Gt(te.FIVE_MINUTES), u = { protocol: Bu }, a = { topic: n, expiry: s, relay: u, active: !1 }, l = Og({ protocol: this.core.protocol, version: this.core.version, topic: n, symKey: i, relay: u });
      return await this.pairings.set(n, a), await this.core.relayer.subscribe(n), this.core.expirer.set(n, s), { topic: n, uri: l };
    }, this.pair = async (i) => {
      this.isInitialized(), this.isValidPair(i);
      const { topic: n, symKey: s, relay: u } = Eg(i.uri);
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
      this.pairings.keys.includes(n) && (await this.sendRequest(n, "wc_pairingDelete", st("USER_DISCONNECTED")), await this.deletePairing(n));
    }, this.sendRequest = async (i, n, s) => {
      const u = Ri(n, s), a = await this.core.crypto.encode(i, u), l = bi[n].req;
      return this.core.history.set(i, u), this.core.relayer.publish(i, a, l), u.id;
    }, this.sendResult = async (i, n, s) => {
      const u = Qs(i, s), a = await this.core.crypto.encode(n, u), l = await this.core.history.get(n, i), f = bi[l.request.method].res;
      await this.core.relayer.publish(n, a, f), await this.core.history.resolve(u);
    }, this.sendError = async (i, n, s) => {
      const u = Xs(i, s), a = await this.core.crypto.encode(n, u), l = await this.core.history.get(n, i), f = bi[l.request.method] ? bi[l.request.method].res : bi.unregistered_method.res;
      await this.core.relayer.publish(n, a, f), await this.core.history.resolve(u);
    }, this.deletePairing = async (i, n) => {
      await this.core.relayer.unsubscribe(i), await Promise.all([this.pairings.delete(i, st("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i), n ? Promise.resolve() : this.core.expirer.del(i)]);
    }, this.cleanup = async () => {
      const i = this.pairings.getAll().filter((n) => mr(n.expiry));
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
        fr(n) ? this.events.emit(nt("pairing_ping", s), {}) : Yt(n) && this.events.emit(nt("pairing_ping", s), { error: n.error });
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
        const { message: n } = Q("MISSING_OR_INVALID", `pair() params: ${i}`);
        throw new Error(n);
      }
      if (!Lg(i.uri)) {
        const { message: n } = Q("MISSING_OR_INVALID", `pair() uri: ${i.uri}`);
        throw new Error(n);
      }
    }, this.isValidPing = async (i) => {
      if (!Rt(i)) {
        const { message: s } = Q("MISSING_OR_INVALID", `ping() params: ${i}`);
        throw new Error(s);
      }
      const { topic: n } = i;
      await this.isValidPairingTopic(n);
    }, this.isValidDisconnect = async (i) => {
      if (!Rt(i)) {
        const { message: s } = Q("MISSING_OR_INVALID", `disconnect() params: ${i}`);
        throw new Error(s);
      }
      const { topic: n } = i;
      await this.isValidPairingTopic(n);
    }, this.isValidPairingTopic = async (i) => {
      if (!ut(i, !1)) {
        const { message: n } = Q("MISSING_OR_INVALID", `pairing topic should be a string: ${i}`);
        throw new Error(n);
      }
      if (!this.pairings.keys.includes(i)) {
        const { message: n } = Q("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i}`);
        throw new Error(n);
      }
      if (mr(this.pairings.get(i).expiry)) {
        await this.deletePairing(i);
        const { message: n } = Q("EXPIRED", `pairing topic: ${i}`);
        throw new Error(n);
      }
    }, this.core = t, this.logger = Ae.generateChildLogger(r, this.name), this.pairings = new Cn(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return Ae.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = Q("NOT_INITIALIZED", this.name);
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
    this.core.expirer.on(Bt.expired, async (t) => {
      const { topic: r } = Eu(t.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit("pairing_expire", { topic: r }));
    });
  }
}
class Jb extends nh {
  constructor(t, r) {
    super(t, r), this.core = t, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new Qt.EventEmitter(), this.name = Ib, this.version = xb, this.cached = [], this.initialized = !1, this.storagePrefix = wr, this.init = async () => {
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
      const i = { topic: r.topic, request: Ri(r.request.method, r.request.params, r.id), chainId: r.chainId };
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
      const { message: i } = Q("NO_MATCHING_KEY", `${this.name}: ${t}`);
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
        const { message: r } = Q("RESTORE_WILL_OVERRIDE", this.name);
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
      const { message: t } = Q("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class Qb extends lh {
  constructor(t, r) {
    super(t, r), this.core = t, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new Qt.EventEmitter(), this.name = Cb, this.version = Rb, this.cached = [], this.initialized = !1, this.storagePrefix = wr, this.init = async () => {
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
      this.expirations.set(s, u), this.checkExpiry(s, u), this.events.emit(Bt.created, { target: s, expiration: u });
    }, this.get = (i) => {
      this.isInitialized();
      const n = this.formatTarget(i);
      return this.getExpiration(n);
    }, this.del = (i) => {
      if (this.isInitialized(), this.has(i)) {
        const n = this.formatTarget(i), s = this.getExpiration(n);
        this.expirations.delete(n), this.events.emit(Bt.deleted, { target: n, expiration: s });
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
      return dg(t);
    if (typeof t == "number")
      return pg(t);
    const { message: r } = Q("UNKNOWN_TYPE", `Target type: ${typeof t}`);
    throw new Error(r);
  }
  async setExpirations(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(Bt.sync);
  }
  async restore() {
    try {
      const t = await this.getExpirations();
      if (typeof t > "u" || !t.length)
        return;
      if (this.expirations.size) {
        const { message: r } = Q("RESTORE_WILL_OVERRIDE", this.name);
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
      const { message: i } = Q("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw this.logger.error(i), new Error(i);
    }
    return r;
  }
  checkExpiry(t, r) {
    const { expiry: i } = r;
    te.toMiliseconds(i) - Date.now() <= 0 && this.expire(t, r);
  }
  expire(t, r) {
    this.expirations.delete(t), this.events.emit(Bt.expired, { target: t, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((t, r) => this.checkExpiry(r, t));
  }
  registerEventListeners() {
    this.core.heartbeat.on(Zr.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(Bt.created, (t) => {
      const r = Bt.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), this.persist();
    }), this.events.on(Bt.expired, (t) => {
      const r = Bt.expired;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), this.persist();
    }), this.events.on(Bt.deleted, (t) => {
      const r = Bt.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = Q("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class Xb extends fh {
  constructor(t, r) {
    super(t, r), this.projectId = t, this.logger = r, this.name = Kn, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (i) => {
      if (this.verifyDisabled || On() || !Fi())
        return;
      const n = (i == null ? void 0 : i.verifyUrl) || nn;
      this.verifyUrl !== n && this.removeIframe(), this.verifyUrl = n;
      try {
        await this.createIframe();
      } catch (s) {
        this.logger.warn(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.warn(s);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = Wa;
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
        this.logger.warn(`failed to resolve attestation: ${i.attestationId} from url: ${n}`), this.logger.warn(u), s = await this.fetchAttestation(i.attestationId, Wa);
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
        if (document.getElementById(Kn))
          return s();
        window.addEventListener("message", n);
        const u = document.createElement("iframe");
        u.id = Kn, u.src = `${this.verifyUrl}/${this.projectId}`, u.style.display = "none", document.body.append(u), this.iframe = u, i = s;
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
var Zb = Object.defineProperty, ec = Object.getOwnPropertySymbols, ev = Object.prototype.hasOwnProperty, tv = Object.prototype.propertyIsEnumerable, tc = (e, t, r) => t in e ? Zb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, rc = (e, t) => {
  for (var r in t || (t = {}))
    ev.call(t, r) && tc(e, r, t[r]);
  if (ec)
    for (var r of ec(t))
      tv.call(t, r) && tc(e, r, t[r]);
  return e;
};
let rv = class ku extends ih {
  constructor(t) {
    super(t), this.protocol = zu, this.version = rb, this.name = eo, this.events = new Qt.EventEmitter(), this.initialized = !1, this.on = (i, n) => this.events.on(i, n), this.once = (i, n) => this.events.once(i, n), this.off = (i, n) => this.events.off(i, n), this.removeListener = (i, n) => this.events.removeListener(i, n), this.projectId = t == null ? void 0 : t.projectId, this.relayUrl = (t == null ? void 0 : t.relayUrl) || Vu;
    const r = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : Ae.pino(Ae.getDefaultLoggerOptions({ level: (t == null ? void 0 : t.logger) || ib.logger }));
    this.logger = Ae.generateChildLogger(r, this.name), this.heartbeat = new Zr.HeartBeat(), this.crypto = new Pb(this, this.logger, t == null ? void 0 : t.keychain), this.history = new Jb(this, this.logger), this.expirer = new Qb(this, this.logger), this.storage = t != null && t.storage ? t.storage : new qf(rc(rc({}, nb), t == null ? void 0 : t.storageOptions)), this.relayer = new Kb({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new Yb(this, this.logger), this.verify = new Xb(this.projectId || "", this.logger);
  }
  static async init(t) {
    const r = new ku(t);
    await r.initialize();
    const i = await r.crypto.getClientId();
    return await r.storage.setItem(wb, i), r;
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
const iv = rv, Ku = "wc", Wu = 2, Hu = "client", to = `${Ku}@${Wu}:${Hu}:`, Hn = { name: Hu, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, ic = "WALLETCONNECT_DEEPLINK_CHOICE", nv = "proposal", sv = "Proposal expired", ov = "session", Qi = te.SEVEN_DAYS, av = "engine", mi = { wc_sessionPropose: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, Gn = { min: te.FIVE_MINUTES, max: te.SEVEN_DAYS }, lr = { idle: "IDLE", active: "ACTIVE" }, cv = "request", uv = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var lv = Object.defineProperty, fv = Object.defineProperties, hv = Object.getOwnPropertyDescriptors, nc = Object.getOwnPropertySymbols, dv = Object.prototype.hasOwnProperty, pv = Object.prototype.propertyIsEnumerable, sc = (e, t, r) => t in e ? lv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Ct = (e, t) => {
  for (var r in t || (t = {}))
    dv.call(t, r) && sc(e, r, t[r]);
  if (nc)
    for (var r of nc(t))
      pv.call(t, r) && sc(e, r, t[r]);
  return e;
}, wi = (e, t) => fv(e, hv(t));
class gv extends dh {
  constructor(t) {
    super(t), this.name = av, this.events = new Uc(), this.initialized = !1, this.ignoredPayloadTypes = [qr], this.requestQueue = { state: lr.idle, queue: [] }, this.sessionRequestQueue = { state: lr.idle, queue: [] }, this.requestQueueDelay = te.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({ methods: Object.keys(mi) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, te.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      await this.isInitialized();
      const i = wi(Ct({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(i);
      const { pairingTopic: n, requiredNamespaces: s, optionalNamespaces: u, sessionProperties: a, relays: l } = i;
      let f = n, h, p = !1;
      if (f && (p = this.client.core.pairing.pairings.get(f).active), !f || !p) {
        const { topic: O, uri: b } = await this.client.core.pairing.create();
        f = O, h = b;
      }
      const y = await this.client.core.crypto.generateKeyPair(), m = Ct({ requiredNamespaces: s, optionalNamespaces: u, relays: l ?? [{ protocol: Bu }], proposer: { publicKey: y, metadata: this.client.metadata } }, a && { sessionProperties: a }), { reject: D, resolve: I, done: P } = Kr(te.FIVE_MINUTES, sv);
      if (this.events.once(nt("session_connect"), async ({ error: O, session: b }) => {
        if (O)
          D(O);
        else if (b) {
          b.self.publicKey = y;
          const _ = wi(Ct({}, b), { requiredNamespaces: b.requiredNamespaces, optionalNamespaces: b.optionalNamespaces });
          await this.client.session.set(b.topic, _), await this.setExpiry(b.topic, b.expiry), f && await this.client.core.pairing.updateMetadata({ topic: f, metadata: b.peer.metadata }), I(_);
        }
      }), !f) {
        const { message: O } = Q("NO_MATCHING_KEY", `connect() pairing topic: ${f}`);
        throw new Error(O);
      }
      const U = await this.sendRequest({ topic: f, method: "wc_sessionPropose", params: m }), E = Gt(te.FIVE_MINUTES);
      return await this.setProposal(U, Ct({ id: U, expiry: E }, m)), { uri: h, approval: P };
    }, this.pair = async (r) => (await this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      await this.isInitialized(), await this.isValidApprove(r);
      const { id: i, relayProtocol: n, namespaces: s, sessionProperties: u } = r, a = this.client.proposal.get(i);
      let { pairingTopic: l, proposer: f, requiredNamespaces: h, optionalNamespaces: p } = a;
      l = l || "", Di(h) || (h = Rg(s, "approve()"));
      const y = await this.client.core.crypto.generateKeyPair(), m = f.publicKey, D = await this.client.core.crypto.generateSharedKey(y, m);
      l && i && (await this.client.core.pairing.updateMetadata({ topic: l, metadata: f.metadata }), await this.sendResult({ id: i, topic: l, result: { relay: { protocol: n ?? "irn" }, responderPublicKey: y } }), await this.client.proposal.delete(i, st("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: l }));
      const I = Ct({ relay: { protocol: n ?? "irn" }, namespaces: s, requiredNamespaces: h, optionalNamespaces: p, pairingTopic: l, controller: { publicKey: y, metadata: this.client.metadata }, expiry: Gt(Qi) }, u && { sessionProperties: u });
      await this.client.core.relayer.subscribe(D), await this.sendRequest({ topic: D, method: "wc_sessionSettle", params: I, throwOnFailedPublish: !0 });
      const P = wi(Ct({}, I), { topic: D, pairingTopic: l, acknowledged: !1, self: I.controller, peer: { publicKey: f.publicKey, metadata: f.metadata }, controller: y });
      return await this.client.session.set(D, P), await this.setExpiry(D, Gt(Qi)), { topic: D, acknowledged: () => new Promise((U) => setTimeout(() => U(this.client.session.get(D)), 500)) };
    }, this.reject = async (r) => {
      await this.isInitialized(), await this.isValidReject(r);
      const { id: i, reason: n } = r, { pairingTopic: s } = this.client.proposal.get(i);
      s && (await this.sendError(i, s, n), await this.client.proposal.delete(i, st("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      await this.isInitialized(), await this.isValidUpdate(r);
      const { topic: i, namespaces: n } = r, s = await this.sendRequest({ topic: i, method: "wc_sessionUpdate", params: { namespaces: n } }), { done: u, resolve: a, reject: l } = Kr();
      return this.events.once(nt("session_update", s), ({ error: f }) => {
        f ? l(f) : a();
      }), await this.client.session.update(i, { namespaces: n }), { acknowledged: u };
    }, this.extend = async (r) => {
      await this.isInitialized(), await this.isValidExtend(r);
      const { topic: i } = r, n = await this.sendRequest({ topic: i, method: "wc_sessionExtend", params: {} }), { done: s, resolve: u, reject: a } = Kr();
      return this.events.once(nt("session_extend", n), ({ error: l }) => {
        l ? a(l) : u();
      }), await this.setExpiry(i, Gt(Qi)), { acknowledged: s };
    }, this.request = async (r) => {
      await this.isInitialized(), await this.isValidRequest(r);
      const { chainId: i, request: n, topic: s, expiry: u } = r, a = Js(), { done: l, resolve: f, reject: h } = Kr(u);
      return this.events.once(nt("session_request", a), ({ error: p, result: y }) => {
        p ? h(p) : f(y);
      }), await Promise.all([new Promise(async (p) => {
        await this.sendRequest({ clientRpcId: a, topic: s, method: "wc_sessionRequest", params: { request: n, chainId: i }, expiry: u, throwOnFailedPublish: !0 }).catch((y) => h(y)), this.client.events.emit("session_request_sent", { topic: s, request: n, chainId: i, id: a }), p();
      }), new Promise(async (p) => {
        const y = await this.client.core.storage.getItem(ic);
        gg({ id: a, topic: s, wcDeepLink: y }), p();
      }), l()]).then((p) => p[2]);
    }, this.respond = async (r) => {
      await this.isInitialized(), await this.isValidRespond(r);
      const { topic: i, response: n } = r, { id: s } = n;
      fr(n) ? await this.sendResult({ id: s, topic: i, result: n.result, throwOnFailedPublish: !0 }) : Yt(n) && await this.sendError(s, i, n.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      await this.isInitialized(), await this.isValidPing(r);
      const { topic: i } = r;
      if (this.client.session.keys.includes(i)) {
        const n = await this.sendRequest({ topic: i, method: "wc_sessionPing", params: {} }), { done: s, resolve: u, reject: a } = Kr();
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
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((i) => Tg(i, r))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (r) => {
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
      await this.client.core.relayer.unsubscribe(r), this.client.session.delete(r, st("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(n.publicKey) && await this.client.core.crypto.deleteKeyPair(n.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), i || this.client.core.expirer.del(r), this.client.core.storage.removeItem(ic).catch((s) => this.client.logger.warn(s));
    }, this.deleteProposal = async (r, i) => {
      await Promise.all([this.client.proposal.delete(r, st("USER_DISCONNECTED")), i ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, i, n = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, i), n ? Promise.resolve() : this.client.core.expirer.del(r)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((s) => s.id !== r), n && (this.sessionRequestQueue.state = lr.idle);
    }, this.setExpiry = async (r, i) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: i }), this.client.core.expirer.set(r, i);
    }, this.setProposal = async (r, i) => {
      await this.client.proposal.set(r, i), this.client.core.expirer.set(r, i.expiry);
    }, this.setPendingSessionRequest = async (r) => {
      const i = mi.wc_sessionRequest.req.ttl, { id: n, topic: s, params: u } = r;
      await this.client.pendingRequest.set(n, { id: n, topic: s, params: u }), i && this.client.core.expirer.set(n, Gt(i));
    }, this.sendRequest = async (r) => {
      const { topic: i, method: n, params: s, expiry: u, relayRpcId: a, clientRpcId: l, throwOnFailedPublish: f } = r, h = Ri(n, s, l);
      if (Fi() && uv.includes(n)) {
        const m = Gr(JSON.stringify(h));
        this.client.core.verify.register({ attestationId: m });
      }
      const p = await this.client.core.crypto.encode(i, h), y = mi[n].req;
      return u && (y.ttl = u), a && (y.id = a), this.client.core.history.set(i, h), f ? (y.internal = wi(Ct({}, y.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(i, p, y)) : this.client.core.relayer.publish(i, p, y).catch((m) => this.client.logger.error(m)), h.id;
    }, this.sendResult = async (r) => {
      const { id: i, topic: n, result: s, throwOnFailedPublish: u } = r, a = Qs(i, s), l = await this.client.core.crypto.encode(n, a), f = await this.client.core.history.get(n, i), h = mi[f.request.method].res;
      u ? (h.internal = wi(Ct({}, h.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(n, l, h)) : this.client.core.relayer.publish(n, l, h).catch((p) => this.client.logger.error(p)), await this.client.core.history.resolve(a);
    }, this.sendError = async (r, i, n) => {
      const s = Xs(r, n), u = await this.client.core.crypto.encode(i, s), a = await this.client.core.history.get(i, r), l = mi[a.request.method].res;
      this.client.core.relayer.publish(i, u, l), await this.client.core.history.resolve(s);
    }, this.cleanup = async () => {
      const r = [], i = [];
      this.client.session.getAll().forEach((n) => {
        mr(n.expiry) && r.push(n.topic);
      }), this.client.proposal.getAll().forEach((n) => {
        mr(n.expiry) && i.push(n.id);
      }), await Promise.all([...r.map((n) => this.deleteSession(n)), ...i.map((n) => this.deleteProposal(n))]);
    }, this.onRelayEventRequest = async (r) => {
      this.requestQueue.queue.push(r), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === lr.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = lr.active;
        const r = this.requestQueue.queue.shift();
        if (r)
          try {
            this.processRequest(r), await new Promise((i) => setTimeout(i, 300));
          } catch (i) {
            this.client.logger.warn(i);
          }
      }
      this.requestQueue.state = lr.idle;
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
      const { topic: i } = r, { message: n } = Q("MISSING_OR_INVALID", `Decoded payload on topic ${i} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(n);
    }, this.onSessionProposeRequest = async (r, i) => {
      const { params: n, id: s } = i;
      try {
        this.isValidConnect(Ct({}, i.params));
        const u = Gt(te.FIVE_MINUTES), a = Ct({ id: s, pairingTopic: r, expiry: u }, n);
        await this.setProposal(s, a);
        const l = Gr(JSON.stringify(i)), f = await this.getVerifyContext(l, a.proposer.metadata);
        this.client.events.emit("session_proposal", { id: s, params: a, verifyContext: f });
      } catch (u) {
        await this.sendError(s, r, u), this.client.logger.error(u);
      }
    }, this.onSessionProposeResponse = async (r, i) => {
      const { id: n } = i;
      if (fr(i)) {
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
      fr(i) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(nt("session_approve", n), {})) : Yt(i) && (await this.client.session.delete(r, st("USER_DISCONNECTED")), this.events.emit(nt("session_approve", n), { error: i.error }));
    }, this.onSessionUpdateRequest = async (r, i) => {
      const { params: n, id: s } = i;
      try {
        const u = `${r}_session_update`, a = Ji.get(u);
        if (a && this.isRequestOutOfSync(a, s)) {
          this.client.logger.info(`Discarding out of sync request - ${s}`);
          return;
        }
        this.isValidUpdate(Ct({ topic: r }, n)), await this.client.session.update(r, { namespaces: n.namespaces }), await this.sendResult({ id: s, topic: r, result: !0 }), this.client.events.emit("session_update", { id: s, topic: r, params: n }), Ji.set(u, s);
      } catch (u) {
        await this.sendError(s, r, u), this.client.logger.error(u);
      }
    }, this.isRequestOutOfSync = (r, i) => parseInt(i.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, i) => {
      const { id: n } = i;
      fr(i) ? this.events.emit(nt("session_update", n), {}) : Yt(i) && this.events.emit(nt("session_update", n), { error: i.error });
    }, this.onSessionExtendRequest = async (r, i) => {
      const { id: n } = i;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, Gt(Qi)), await this.sendResult({ id: n, topic: r, result: !0 }), this.client.events.emit("session_extend", { id: n, topic: r });
      } catch (s) {
        await this.sendError(n, r, s), this.client.logger.error(s);
      }
    }, this.onSessionExtendResponse = (r, i) => {
      const { id: n } = i;
      fr(i) ? this.events.emit(nt("session_extend", n), {}) : Yt(i) && this.events.emit(nt("session_extend", n), { error: i.error });
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
        fr(i) ? this.events.emit(nt("session_ping", n), {}) : Yt(i) && this.events.emit(nt("session_ping", n), { error: i.error });
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
      fr(i) ? this.events.emit(nt("session_request", n), { result: i.result }) : Yt(i) && this.events.emit(nt("session_request", n), { error: i.error });
    }, this.onSessionEventRequest = async (r, i) => {
      const { id: n, params: s } = i;
      try {
        const u = `${r}_session_event_${s.event.name}`, a = Ji.get(u);
        if (a && this.isRequestOutOfSync(a, n)) {
          this.client.logger.info(`Discarding out of sync request - ${n}`);
          return;
        }
        this.isValidEmit(Ct({ topic: r }, s)), this.client.events.emit("session_event", { id: n, topic: r, params: s }), Ji.set(u, n);
      } catch (u) {
        await this.sendError(n, r, u), this.client.logger.error(u);
      }
    }, this.addSessionRequestToSessionRequestQueue = (r) => {
      this.sessionRequestQueue.queue.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = lr.idle, this.processSessionRequestQueue();
      }, te.toMiliseconds(this.requestQueueDelay));
    }, this.processSessionRequestQueue = async () => {
      if (this.sessionRequestQueue.state === lr.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const r = this.sessionRequestQueue.queue[0];
      if (!r) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        const { id: i, topic: n, params: s } = r, u = Gr(JSON.stringify(Ri("wc_sessionRequest", s, i))), a = this.client.session.get(n), l = await this.getVerifyContext(u, a.peer.metadata);
        this.sessionRequestQueue.state = lr.active, this.client.events.emit("session_request", { id: i, topic: n, params: s, verifyContext: l });
      } catch (i) {
        this.client.logger.error(i);
      }
    }, this.isValidConnect = async (r) => {
      if (!Rt(r)) {
        const { message: l } = Q("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(l);
      }
      const { pairingTopic: i, requiredNamespaces: n, optionalNamespaces: s, sessionProperties: u, relays: a } = r;
      if (Ot(i) || await this.isValidPairingTopic(i), !kg(a, !0)) {
        const { message: l } = Q("MISSING_OR_INVALID", `connect() relays: ${a}`);
        throw new Error(l);
      }
      !Ot(n) && Di(n) !== 0 && this.validateNamespaces(n, "requiredNamespaces"), !Ot(s) && Di(s) !== 0 && this.validateNamespaces(s, "optionalNamespaces"), Ot(u) || this.validateSessionProps(u, "sessionProperties");
    }, this.validateNamespaces = (r, i) => {
      const n = Vg(r, "connect()", i);
      if (n)
        throw new Error(n.message);
    }, this.isValidApprove = async (r) => {
      if (!Rt(r))
        throw new Error(Q("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: i, namespaces: n, relayProtocol: s, sessionProperties: u } = r;
      await this.isValidProposalId(i);
      const a = this.client.proposal.get(i), l = rn(n, "approve()");
      if (l)
        throw new Error(l.message);
      const f = Ra(a.requiredNamespaces, n, "approve()");
      if (f)
        throw new Error(f.message);
      if (!ut(s, !0)) {
        const { message: h } = Q("MISSING_OR_INVALID", `approve() relayProtocol: ${s}`);
        throw new Error(h);
      }
      Ot(u) || this.validateSessionProps(u, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!Rt(r)) {
        const { message: s } = Q("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(s);
      }
      const { id: i, reason: n } = r;
      if (await this.isValidProposalId(i), !Wg(n)) {
        const { message: s } = Q("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(n)}`);
        throw new Error(s);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!Rt(r)) {
        const { message: f } = Q("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(f);
      }
      const { relay: i, controller: n, namespaces: s, expiry: u } = r;
      if (!Du(i)) {
        const { message: f } = Q("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(f);
      }
      const a = Ug(n, "onSessionSettleRequest()");
      if (a)
        throw new Error(a.message);
      const l = rn(s, "onSessionSettleRequest()");
      if (l)
        throw new Error(l.message);
      if (mr(u)) {
        const { message: f } = Q("EXPIRED", "onSessionSettleRequest()");
        throw new Error(f);
      }
    }, this.isValidUpdate = async (r) => {
      if (!Rt(r)) {
        const { message: l } = Q("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(l);
      }
      const { topic: i, namespaces: n } = r;
      await this.isValidSessionTopic(i);
      const s = this.client.session.get(i), u = rn(n, "update()");
      if (u)
        throw new Error(u.message);
      const a = Ra(s.requiredNamespaces, n, "update()");
      if (a)
        throw new Error(a.message);
    }, this.isValidExtend = async (r) => {
      if (!Rt(r)) {
        const { message: n } = Q("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(n);
      }
      const { topic: i } = r;
      await this.isValidSessionTopic(i);
    }, this.isValidRequest = async (r) => {
      if (!Rt(r)) {
        const { message: l } = Q("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(l);
      }
      const { topic: i, request: n, chainId: s, expiry: u } = r;
      await this.isValidSessionTopic(i);
      const { namespaces: a } = this.client.session.get(i);
      if (!Ca(a, s)) {
        const { message: l } = Q("MISSING_OR_INVALID", `request() chainId: ${s}`);
        throw new Error(l);
      }
      if (!Hg(n)) {
        const { message: l } = Q("MISSING_OR_INVALID", `request() ${JSON.stringify(n)}`);
        throw new Error(l);
      }
      if (!Jg(a, s, n.method)) {
        const { message: l } = Q("MISSING_OR_INVALID", `request() method: ${n.method}`);
        throw new Error(l);
      }
      if (u && !ey(u, Gn)) {
        const { message: l } = Q("MISSING_OR_INVALID", `request() expiry: ${u}. Expiry must be a number (in seconds) between ${Gn.min} and ${Gn.max}`);
        throw new Error(l);
      }
    }, this.isValidRespond = async (r) => {
      if (!Rt(r)) {
        const { message: s } = Q("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(s);
      }
      const { topic: i, response: n } = r;
      if (await this.isValidSessionTopic(i), !Gg(n)) {
        const { message: s } = Q("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(n)}`);
        throw new Error(s);
      }
    }, this.isValidPing = async (r) => {
      if (!Rt(r)) {
        const { message: n } = Q("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(n);
      }
      const { topic: i } = r;
      await this.isValidSessionOrPairingTopic(i);
    }, this.isValidEmit = async (r) => {
      if (!Rt(r)) {
        const { message: a } = Q("MISSING_OR_INVALID", `emit() params: ${r}`);
        throw new Error(a);
      }
      const { topic: i, event: n, chainId: s } = r;
      await this.isValidSessionTopic(i);
      const { namespaces: u } = this.client.session.get(i);
      if (!Ca(u, s)) {
        const { message: a } = Q("MISSING_OR_INVALID", `emit() chainId: ${s}`);
        throw new Error(a);
      }
      if (!Yg(n)) {
        const { message: a } = Q("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(n)}`);
        throw new Error(a);
      }
      if (!Qg(u, s, n.name)) {
        const { message: a } = Q("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(n)}`);
        throw new Error(a);
      }
    }, this.isValidDisconnect = async (r) => {
      if (!Rt(r)) {
        const { message: n } = Q("MISSING_OR_INVALID", `disconnect() params: ${r}`);
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
          const { message: s } = Q("MISSING_OR_INVALID", `${i} must be in Record<string, string> format. Received: ${JSON.stringify(n)}`);
          throw new Error(s);
        }
      });
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: t } = Q("NOT_INITIALIZED", this.name);
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
    this.client.core.expirer.on(Bt.expired, async (t) => {
      const { topic: r, id: i } = Eu(t.target);
      if (i && this.client.pendingRequest.keys.includes(i))
        return await this.deletePendingSessionRequest(i, Q("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession(r, !0), this.client.events.emit("session_expire", { topic: r })) : i && (await this.deleteProposal(i, !0), this.client.events.emit("proposal_expire", { id: i }));
    });
  }
  isValidPairingTopic(t) {
    if (!ut(t, !1)) {
      const { message: r } = Q("MISSING_OR_INVALID", `pairing topic should be a string: ${t}`);
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(t)) {
      const { message: r } = Q("NO_MATCHING_KEY", `pairing topic doesn't exist: ${t}`);
      throw new Error(r);
    }
    if (mr(this.client.core.pairing.pairings.get(t).expiry)) {
      const { message: r } = Q("EXPIRED", `pairing topic: ${t}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(t) {
    if (!ut(t, !1)) {
      const { message: r } = Q("MISSING_OR_INVALID", `session topic should be a string: ${t}`);
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(t)) {
      const { message: r } = Q("NO_MATCHING_KEY", `session topic doesn't exist: ${t}`);
      throw new Error(r);
    }
    if (mr(this.client.session.get(t).expiry)) {
      await this.deleteSession(t);
      const { message: r } = Q("EXPIRED", `session topic: ${t}`);
      throw new Error(r);
    }
  }
  async isValidSessionOrPairingTopic(t) {
    if (this.client.session.keys.includes(t))
      await this.isValidSessionTopic(t);
    else if (this.client.core.pairing.pairings.keys.includes(t))
      this.isValidPairingTopic(t);
    else if (ut(t, !1)) {
      const { message: r } = Q("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${t}`);
      throw new Error(r);
    } else {
      const { message: r } = Q("MISSING_OR_INVALID", `session or pairing topic should be a string: ${t}`);
      throw new Error(r);
    }
  }
  async isValidProposalId(t) {
    if (!Kg(t)) {
      const { message: r } = Q("MISSING_OR_INVALID", `proposal id should be a number: ${t}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(t)) {
      const { message: r } = Q("NO_MATCHING_KEY", `proposal id doesn't exist: ${t}`);
      throw new Error(r);
    }
    if (mr(this.client.proposal.get(t).expiry)) {
      await this.deleteProposal(t);
      const { message: r } = Q("EXPIRED", `proposal id: ${t}`);
      throw new Error(r);
    }
  }
}
class yv extends Cn {
  constructor(t, r) {
    super(t, r, nv, to), this.core = t, this.logger = r;
  }
}
class bv extends Cn {
  constructor(t, r) {
    super(t, r, ov, to), this.core = t, this.logger = r;
  }
}
class vv extends Cn {
  constructor(t, r) {
    super(t, r, cv, to, (i) => i.id), this.core = t, this.logger = r;
  }
}
let mv = class Gu extends hh {
  constructor(t) {
    super(t), this.protocol = Ku, this.version = Wu, this.name = Hn.name, this.events = new Qt.EventEmitter(), this.on = (i, n) => this.events.on(i, n), this.once = (i, n) => this.events.once(i, n), this.off = (i, n) => this.events.off(i, n), this.removeListener = (i, n) => this.events.removeListener(i, n), this.removeAllListeners = (i) => this.events.removeAllListeners(i), this.connect = async (i) => {
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
    }, this.name = (t == null ? void 0 : t.name) || Hn.name, this.metadata = (t == null ? void 0 : t.metadata) || cg();
    const r = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : Ae.pino(Ae.getDefaultLoggerOptions({ level: (t == null ? void 0 : t.logger) || Hn.logger }));
    this.core = (t == null ? void 0 : t.core) || new iv(t), this.logger = Ae.generateChildLogger(r, this.name), this.session = new bv(this.core, this.logger), this.proposal = new yv(this.core, this.logger), this.pendingRequest = new vv(this.core, this.logger), this.engine = new gv(this);
  }
  static async init(t) {
    const r = new Gu(t);
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
var wv = Object.defineProperty, _v = Object.defineProperties, Ev = Object.getOwnPropertyDescriptors, oc = Object.getOwnPropertySymbols, Sv = Object.prototype.hasOwnProperty, Dv = Object.prototype.propertyIsEnumerable, ac = (e, t, r) => t in e ? wv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Ov = (e, t) => {
  for (var r in t || (t = {}))
    Sv.call(t, r) && ac(e, r, t[r]);
  if (oc)
    for (var r of oc(t))
      Dv.call(t, r) && ac(e, r, t[r]);
  return e;
}, Iv = (e, t) => _v(e, Ev(t)), ro = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
}, Be = (e, t, r) => (ro(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Tr = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, fn = (e, t, r, i) => (ro(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r), mt = (e, t, r) => (ro(e, t, "access private method"), r), Lr, Wr, _i, ct, Is, Yu, wt, Dt, xs, cc;
let xv = class {
  constructor(t) {
    Tr(this, Is), Tr(this, wt), Tr(this, xs), Tr(this, Lr, void 0), Tr(this, Wr, void 0), Tr(this, _i, void 0), Tr(this, ct, void 0), fn(this, Lr, t), fn(this, Wr, mt(this, Is, Yu).call(this)), mt(this, wt, Dt).call(this);
  }
  async connect(t) {
    const { requiredNamespaces: r, optionalNamespaces: i } = t;
    return new Promise(async (n, s) => {
      await mt(this, wt, Dt).call(this);
      const u = Be(this, Wr).subscribeModal((f) => {
        f.open || (u(), s(new Error("Modal closed")));
      }), { uri: a, approval: l } = await Be(this, ct).connect(t);
      if (a) {
        const f = /* @__PURE__ */ new Set();
        r && Object.values(r).forEach(({ chains: h }) => {
          h && h.forEach((p) => f.add(p));
        }), i && Object.values(i).forEach(({ chains: h }) => {
          h && h.forEach((p) => f.add(p));
        }), await Be(this, Wr).openModal({ uri: a, chains: Array.from(f) });
      }
      try {
        const f = await l();
        n(f);
      } catch (f) {
        s(f);
      } finally {
        u(), Be(this, Wr).closeModal();
      }
    });
  }
  async disconnect(t) {
    await mt(this, wt, Dt).call(this), await Be(this, ct).disconnect(t);
  }
  async request(t) {
    return await mt(this, wt, Dt).call(this), await Be(this, ct).request(t);
  }
  async getSessions() {
    return await mt(this, wt, Dt).call(this), Be(this, ct).session.getAll();
  }
  async getSession() {
    return await mt(this, wt, Dt).call(this), Be(this, ct).session.getAll().at(-1);
  }
  async onSessionEvent(t) {
    await mt(this, wt, Dt).call(this), Be(this, ct).on("session_event", t);
  }
  async offSessionEvent(t) {
    await mt(this, wt, Dt).call(this), Be(this, ct).off("session_event", t);
  }
  async onSessionUpdate(t) {
    await mt(this, wt, Dt).call(this), Be(this, ct).on("session_update", t);
  }
  async offSessionUpdate(t) {
    await mt(this, wt, Dt).call(this), Be(this, ct).off("session_update", t);
  }
  async onSessionDelete(t) {
    await mt(this, wt, Dt).call(this), Be(this, ct).on("session_delete", t);
  }
  async offSessionDelete(t) {
    await mt(this, wt, Dt).call(this), Be(this, ct).off("session_delete", t);
  }
  async onSessionExpire(t) {
    await mt(this, wt, Dt).call(this), Be(this, ct).on("session_expire", t);
  }
  async offSessionExpire(t) {
    await mt(this, wt, Dt).call(this), Be(this, ct).off("session_expire", t);
  }
};
Lr = /* @__PURE__ */ new WeakMap(), Wr = /* @__PURE__ */ new WeakMap(), _i = /* @__PURE__ */ new WeakMap(), ct = /* @__PURE__ */ new WeakMap(), Is = /* @__PURE__ */ new WeakSet(), Yu = function() {
  const { modalOptions: e, projectId: t } = Be(this, Lr);
  return new sf(Iv(Ov({}, e), { projectId: t }));
}, wt = /* @__PURE__ */ new WeakSet(), Dt = async function() {
  return Be(this, ct) ? !0 : (!Be(this, _i) && typeof window < "u" && fn(this, _i, mt(this, xs, cc).call(this)), Be(this, _i));
}, xs = /* @__PURE__ */ new WeakSet(), cc = async function() {
  fn(this, ct, await mv.init({ metadata: Be(this, Lr).metadata, projectId: Be(this, Lr).projectId, relayUrl: Be(this, Lr).relayUrl }));
  const e = await Be(this, ct).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", e);
  } catch {
    console.info("Unable to set client id");
  }
};
function Cv(e) {
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
const hn = Cv();
let Ei;
function Rv(e) {
  Ei = new xv(e);
}
async function kt() {
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
function Av(e) {
  return Vt(() => {
    Rv(e);
  }, []), null;
}
const Pv = Nl(Av);
function io() {
  const [e, t] = Zi(void 0), [r, i] = Zi(void 0), [n, s] = Zi(!1);
  return { data: e, error: r, loading: n, setData: t, setError: i, setLoading: s };
}
function Tv(e) {
  const { data: t, error: r, loading: i, setData: n, setError: s, setLoading: u } = io();
  async function a(l) {
    try {
      u(!0), s(void 0);
      const f = await (await kt()).connect(l ?? e);
      return n(f), hn.emit("session_change"), f;
    } catch (f) {
      throw s(f), f;
    } finally {
      u(!1);
    }
  }
  return { data: t, error: r, loading: i, connect: a };
}
function Nv(e) {
  const { error: t, loading: r, setError: i, setLoading: n } = io();
  async function s(u) {
    try {
      n(!0), i(void 0), await (await kt()).disconnect(u ?? e), hn.emit("session_change");
    } catch (a) {
      throw i(a), a;
    } finally {
      n(!1);
    }
  }
  return { error: t, loading: r, disconnect: s };
}
function Ju(e) {
  Vt(() => (kt().then((t) => {
    t.onSessionDelete(e);
  }), () => {
    kt().then((t) => {
      t.offSessionDelete(e);
    });
  }), [e]);
}
function Rn(e) {
  Vt(() => (kt().then((t) => {
    t.onSessionEvent(e);
  }), () => {
    kt().then((t) => {
      t.offSessionEvent(e);
    });
  }), [e]);
}
function Lv(e) {
  Vt(() => (kt().then((t) => {
    t.onSessionExpire(e);
  }), () => {
    kt().then((t) => {
      t.offSessionExpire(e);
    });
  }), [e]);
}
function Fv(e) {
  Vt(() => (kt().then((t) => {
    t.onSessionUpdate(e);
  }), () => {
    kt().then((t) => {
      t.offSessionUpdate(e);
    });
  }), [e]);
}
function ii(e) {
  const { data: t, error: r, loading: i, setData: n, setError: s, setLoading: u } = io();
  async function a(l) {
    try {
      u(!0), s(void 0);
      const f = await (await kt()).request(l ?? e);
      return n(f), f;
    } catch (f) {
      throw s(f), f;
    } finally {
      u(!1);
    }
  }
  return { data: t, error: r, loading: i, request: a };
}
var $v = Object.defineProperty, Uv = Object.defineProperties, Mv = Object.getOwnPropertyDescriptors, uc = Object.getOwnPropertySymbols, jv = Object.prototype.hasOwnProperty, qv = Object.prototype.propertyIsEnumerable, lc = (e, t, r) => t in e ? $v(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, zv = (e, t) => {
  for (var r in t || (t = {}))
    jv.call(t, r) && lc(e, r, t[r]);
  if (uc)
    for (var r of uc(t))
      qv.call(t, r) && lc(e, r, t[r]);
  return e;
}, Bv = (e, t) => Uv(e, Mv(t));
function hr() {
  const [e, t] = Zi(void 0);
  return Ju((r) => {
    r.topic === (e == null ? void 0 : e.topic) && t(void 0);
  }), Fv((r) => {
    if (e && r.topic === (e == null ? void 0 : e.topic)) {
      const { namespaces: i } = r.params, n = Bv(zv({}, e), { namespaces: i });
      t(n);
    }
  }), Lv((r) => {
    e && r.topic === (e == null ? void 0 : e.topic) && t(void 0);
  }), Vt(() => {
    async function r() {
      const i = await (await kt()).getSession();
      t(i);
    }
    return r(), hn.on("session_change", r), () => {
      hn.off("session_change", r);
    };
  }, []), e;
}
const Qu = [
  "decrypt",
  "disconnect",
  "getSelectedAccount",
  "getBalance",
  "getRecords",
  "requestCreateEvent",
  "getEvents"
], no = ["aleo:1"], Xu = ["chainChanged", "accountSelected", "accountSynced"], Vv = "f0aaeffe71b636da453fce042d79d723", fc = "https://walletconnect.puzzle.online/", kv = {
  standaloneChains: no,
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
        universal: fc
      }
    }
  ],
  desktopWallets: [
    {
      id: "puzzle",
      name: "Puzzle Wallet",
      links: {
        native: "",
        universal: fc
      }
    }
  ],
  walletImages: {
    puzzle: "https://i.imgur.com/p9tHaFC.png"
  }
}, q1 = {
  requiredNamespaces: {
    aleo: {
      methods: Qu,
      chains: no,
      events: Xu
    }
  }
}, z1 = ({ dAppName: e, dAppDescription: t, dAppUrl: r, dAppIconURL: i }) => /* @__PURE__ */ ss.jsx(
  Pv,
  {
    projectId: Vv,
    metadata: {
      name: e,
      description: t,
      url: r,
      icons: [
        i
      ]
    },
    modalOptions: { ...kv }
  }
), B1 = ({ children: e }) => (_1(), /* @__PURE__ */ ss.jsx(ss.Fragment, { children: e })), hc = (e) => {
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
}, Kv = (e) => e ? hc(e) : hc;
var Cs = { exports: {} }, Yn = {}, Xi = { exports: {} }, Jn = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dc;
function Wv() {
  if (dc)
    return Jn;
  dc = 1;
  var e = Xr;
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
  return Jn.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : h, Jn;
}
var Qn = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pc;
function Hv() {
  return pc || (pc = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Xr, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
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
    Qn.useSyncExternalStore = E, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Qn;
}
var gc;
function Zu() {
  return gc || (gc = 1, process.env.NODE_ENV === "production" ? Xi.exports = Wv() : Xi.exports = Hv()), Xi.exports;
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
var yc;
function Gv() {
  if (yc)
    return Yn;
  yc = 1;
  var e = Xr, t = Zu();
  function r(f, h) {
    return f === h && (f !== 0 || 1 / f === 1 / h) || f !== f && h !== h;
  }
  var i = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, s = e.useRef, u = e.useEffect, a = e.useMemo, l = e.useDebugValue;
  return Yn.useSyncExternalStoreWithSelector = function(f, h, p, y, m) {
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
  }, Yn;
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
var bc;
function Yv() {
  return bc || (bc = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Xr, t = Zu();
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
        var _ = !1, d, o, g = function(k) {
          if (!_) {
            _ = !0, d = k;
            var Y = m(k);
            if (D !== void 0 && P.hasValue) {
              var x = P.value;
              if (D(x, Y))
                return o = x, x;
            }
            return o = Y, Y;
          }
          var T = d, H = o;
          if (i(T, k))
            return H;
          var V = m(k);
          return D !== void 0 && D(H, V) ? H : (d = k, o = V, V);
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
process.env.NODE_ENV === "production" ? Cs.exports = Gv() : Cs.exports = Yv();
var Jv = Cs.exports;
const Qv = /* @__PURE__ */ yn(Jv), { useSyncExternalStoreWithSelector: Xv } = Qv;
function Zv(e, t = e.getState, r) {
  const i = Xv(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    r
  );
  return Ll(i), i;
}
const vc = (e) => {
  const t = typeof e == "function" ? Kv(e) : e, r = (i, n) => Zv(t, i, n);
  return Object.assign(r, t), r;
}, e1 = (e) => e ? vc(e) : vc;
function dt(e) {
  for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    r[i - 1] = arguments[i];
  if (process.env.NODE_ENV !== "production") {
    var n = c1[e], s = n ? typeof n == "function" ? n.apply(null, r) : n : "unknown error nr: " + e;
    throw Error("[Immer] " + s);
  }
  throw Error("[Immer] minified error nr: " + e + (r.length ? " " + r.map(function(u) {
    return "'" + u + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function Jr(e) {
  return !!e && !!e[Ft];
}
function $r(e) {
  var t;
  return !!e && (function(r) {
    if (!r || typeof r != "object")
      return !1;
    var i = Object.getPrototypeOf(r);
    if (i === null)
      return !0;
    var n = Object.hasOwnProperty.call(i, "constructor") && i.constructor;
    return n === Object || typeof n == "function" && Function.toString.call(n) === u1;
  }(e) || Array.isArray(e) || !!e[Ic] || !!(!((t = e.constructor) === null || t === void 0) && t[Ic]) || so(e) || oo(e));
}
function Ai(e, t, r) {
  r === void 0 && (r = !1), ni(e) === 0 ? (r ? Object.keys : fo)(e).forEach(function(i) {
    r && typeof i == "symbol" || t(i, e[i], e);
  }) : e.forEach(function(i, n) {
    return t(n, i, e);
  });
}
function ni(e) {
  var t = e[Ft];
  return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : so(e) ? 2 : oo(e) ? 3 : 0;
}
function Rs(e, t) {
  return ni(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function t1(e, t) {
  return ni(e) === 2 ? e.get(t) : e[t];
}
function el(e, t, r) {
  var i = ni(e);
  i === 2 ? e.set(t, r) : i === 3 ? e.add(r) : e[t] = r;
}
function r1(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function so(e) {
  return o1 && e instanceof Map;
}
function oo(e) {
  return a1 && e instanceof Set;
}
function Nr(e) {
  return e.o || e.t;
}
function ao(e) {
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  var t = l1(e);
  delete t[Ft];
  for (var r = fo(t), i = 0; i < r.length; i++) {
    var n = r[i], s = t[n];
    s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (t[n] = { configurable: !0, writable: !0, enumerable: s.enumerable, value: e[n] });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function co(e, t) {
  return t === void 0 && (t = !1), uo(e) || Jr(e) || !$r(e) || (ni(e) > 1 && (e.set = e.add = e.clear = e.delete = i1), Object.freeze(e), t && Ai(e, function(r, i) {
    return co(i, !0);
  }, !0)), e;
}
function i1() {
  dt(2);
}
function uo(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function sr(e) {
  var t = f1[e];
  return t || dt(18, e), t;
}
function mc() {
  return process.env.NODE_ENV === "production" || Qr || dt(0), Qr;
}
function Zn(e, t) {
  t && (sr("Patches"), e.u = [], e.s = [], e.v = t);
}
function dn(e) {
  As(e), e.p.forEach(n1), e.p = null;
}
function As(e) {
  e === Qr && (Qr = e.l);
}
function wc(e) {
  return Qr = { p: [], l: Qr, h: e, m: !0, _: 0 };
}
function n1(e) {
  var t = e[Ft];
  t.i === 0 || t.i === 1 ? t.j() : t.O = !0;
}
function es(e, t) {
  t._ = t.p.length;
  var r = t.p[0], i = e !== void 0 && e !== r;
  return t.h.g || sr("ES5").S(t, e, i), i ? (r[Ft].P && (dn(t), dt(4)), $r(e) && (e = pn(t, e), t.l || gn(t, e)), t.u && sr("Patches").M(r[Ft].t, e, t.u, t.s)) : e = pn(t, r, []), dn(t), t.u && t.v(t.u, t.s), e !== tl ? e : void 0;
}
function pn(e, t, r) {
  if (uo(t))
    return t;
  var i = t[Ft];
  if (!i)
    return Ai(t, function(a, l) {
      return _c(e, i, t, a, l, r);
    }, !0), t;
  if (i.A !== e)
    return t;
  if (!i.P)
    return gn(e, i.t, !0), i.t;
  if (!i.I) {
    i.I = !0, i.A._--;
    var n = i.i === 4 || i.i === 5 ? i.o = ao(i.k) : i.o, s = n, u = !1;
    i.i === 3 && (s = new Set(n), n.clear(), u = !0), Ai(s, function(a, l) {
      return _c(e, i, n, a, l, r, u);
    }), gn(e, n, !1), r && e.u && sr("Patches").N(i, r, e.u, e.s);
  }
  return i.o;
}
function _c(e, t, r, i, n, s, u) {
  if (process.env.NODE_ENV !== "production" && n === r && dt(5), Jr(n)) {
    var a = pn(e, n, s && t && t.i !== 3 && !Rs(t.R, i) ? s.concat(i) : void 0);
    if (el(r, i, a), !Jr(a))
      return;
    e.m = !1;
  } else
    u && r.add(n);
  if ($r(n) && !uo(n)) {
    if (!e.h.D && e._ < 1)
      return;
    pn(e, n), t && t.A.l || gn(e, n);
  }
}
function gn(e, t, r) {
  r === void 0 && (r = !1), !e.l && e.h.D && e.m && co(t, r);
}
function ts(e, t) {
  var r = e[Ft];
  return (r ? Nr(r) : e)[t];
}
function Ec(e, t) {
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
function rs(e) {
  e.o || (e.o = ao(e.t));
}
function Ts(e, t, r) {
  var i = so(t) ? sr("MapSet").F(t, r) : oo(t) ? sr("MapSet").T(t, r) : e.g ? function(n, s) {
    var u = Array.isArray(n), a = { i: u ? 1 : 0, A: s ? s.A : mc(), P: !1, I: !1, R: {}, l: s, t: n, k: null, o: null, j: null, C: !1 }, l = a, f = Ns;
    u && (l = [a], f = Si);
    var h = Proxy.revocable(l, f), p = h.revoke, y = h.proxy;
    return a.k = y, a.j = p, y;
  }(t, r) : sr("ES5").J(t, r);
  return (r ? r.A : mc()).p.push(i), i;
}
function s1(e) {
  return Jr(e) || dt(22, e), function t(r) {
    if (!$r(r))
      return r;
    var i, n = r[Ft], s = ni(r);
    if (n) {
      if (!n.P && (n.i < 4 || !sr("ES5").K(n)))
        return n.t;
      n.I = !0, i = Sc(r, s), n.I = !1;
    } else
      i = Sc(r, s);
    return Ai(i, function(u, a) {
      n && t1(n.t, u) === a || el(i, u, t(a));
    }), s === 3 ? new Set(i) : i;
  }(e);
}
function Sc(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return ao(e);
}
var Dc, Qr, lo = typeof Symbol < "u" && typeof Symbol("x") == "symbol", o1 = typeof Map < "u", a1 = typeof Set < "u", Oc = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", tl = lo ? Symbol.for("immer-nothing") : ((Dc = {})["immer-nothing"] = !0, Dc), Ic = lo ? Symbol.for("immer-draftable") : "__$immer_draftable", Ft = lo ? Symbol.for("immer-state") : "__$immer_state", c1 = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(e) {
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
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" }, u1 = "" + Object.prototype.constructor, fo = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Object.getOwnPropertyNames, l1 = Object.getOwnPropertyDescriptors || function(e) {
  var t = {};
  return fo(e).forEach(function(r) {
    t[r] = Object.getOwnPropertyDescriptor(e, r);
  }), t;
}, f1 = {}, Ns = { get: function(e, t) {
  if (t === Ft)
    return e;
  var r = Nr(e);
  if (!Rs(r, t))
    return function(n, s, u) {
      var a, l = Ec(s, u);
      return l ? "value" in l ? l.value : (a = l.get) === null || a === void 0 ? void 0 : a.call(n.k) : void 0;
    }(e, r, t);
  var i = r[t];
  return e.I || !$r(i) ? i : i === ts(e.t, t) ? (rs(e), e.o[t] = Ts(e.A.h, i, e)) : i;
}, has: function(e, t) {
  return t in Nr(e);
}, ownKeys: function(e) {
  return Reflect.ownKeys(Nr(e));
}, set: function(e, t, r) {
  var i = Ec(Nr(e), t);
  if (i != null && i.set)
    return i.set.call(e.k, r), !0;
  if (!e.P) {
    var n = ts(Nr(e), t), s = n == null ? void 0 : n[Ft];
    if (s && s.t === r)
      return e.o[t] = r, e.R[t] = !1, !0;
    if (r1(r, n) && (r !== void 0 || Rs(e.t, t)))
      return !0;
    rs(e), Ps(e);
  }
  return e.o[t] === r && (r !== void 0 || t in e.o) || Number.isNaN(r) && Number.isNaN(e.o[t]) || (e.o[t] = r, e.R[t] = !0), !0;
}, deleteProperty: function(e, t) {
  return ts(e.t, t) !== void 0 || t in e.t ? (e.R[t] = !1, rs(e), Ps(e)) : delete e.R[t], e.o && delete e.o[t], !0;
}, getOwnPropertyDescriptor: function(e, t) {
  var r = Nr(e), i = Reflect.getOwnPropertyDescriptor(r, t);
  return i && { writable: !0, configurable: e.i !== 1 || t !== "length", enumerable: i.enumerable, value: r[t] };
}, defineProperty: function() {
  dt(11);
}, getPrototypeOf: function(e) {
  return Object.getPrototypeOf(e.t);
}, setPrototypeOf: function() {
  dt(12);
} }, Si = {};
Ai(Ns, function(e, t) {
  Si[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
}), Si.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && dt(13), Si.set.call(this, e, t, void 0);
}, Si.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && dt(14), Ns.set.call(this, e[0], t, r, e[0]);
};
var h1 = function() {
  function e(r) {
    var i = this;
    this.g = Oc, this.D = !0, this.produce = function(n, s, u) {
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
      if (typeof s != "function" && dt(6), u !== void 0 && typeof u != "function" && dt(7), $r(n)) {
        var h = wc(i), p = Ts(i, n, void 0), y = !0;
        try {
          f = s(p), y = !1;
        } finally {
          y ? dn(h) : As(h);
        }
        return typeof Promise < "u" && f instanceof Promise ? f.then(function(I) {
          return Zn(h, u), es(I, h);
        }, function(I) {
          throw dn(h), I;
        }) : (Zn(h, u), es(f, h));
      }
      if (!n || typeof n != "object") {
        if ((f = s(n)) === void 0 && (f = n), f === tl && (f = void 0), i.D && co(f, !0), u) {
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
    $r(r) || dt(8), Jr(r) && (r = s1(r));
    var i = wc(this), n = Ts(this, r, void 0);
    return n[Ft].C = !0, As(i), n;
  }, t.finishDraft = function(r, i) {
    var n = r && r[Ft];
    process.env.NODE_ENV !== "production" && (n && n.C || dt(9), n.I && dt(10));
    var s = n.A;
    return Zn(s, i), es(void 0, s);
  }, t.setAutoFreeze = function(r) {
    this.D = r;
  }, t.setUseProxies = function(r) {
    r && !Oc && dt(20), this.g = r;
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
    return Jr(r) ? u(r, i) : this.produce(r, function(a) {
      return u(a, i);
    });
  }, e;
}(), $t = new h1(), d1 = $t.produce;
$t.produceWithPatches.bind($t);
$t.setAutoFreeze.bind($t);
$t.setUseProxies.bind($t);
$t.applyPatches.bind($t);
$t.createDraft.bind($t);
$t.finishDraft.bind($t);
const p1 = (e) => (t, r, i) => (i.setState = (n, s, ...u) => {
  const a = typeof n == "function" ? d1(n) : n;
  return t(a, s, ...u);
}, e(i.setState, r, i)), g1 = p1, Sr = e1()(
  g1((e, t) => ({
    account: void 0,
    accounts: [],
    chainId: "aleo:1",
    // todo - figure out how to populate this from useConnect
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
), rl = (e) => e.length < 5 * 2 ? e : `${e.slice(
  0,
  5 + 5
)}...${e.slice(e.length - 5, e.length)}`, V1 = () => {
  const e = hr(), [t, r, i, n] = Sr((h) => [
    h.account,
    h.accounts,
    h.chainId,
    h.setAccount
  ]), { request: s, data: u, error: a, loading: l } = ii({
    topic: e == null ? void 0 : e.topic,
    chainId: i,
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "getSelectedAccount"
    }
  });
  Rn(({ params: h, topic: p }) => {
    if (h.event.name === "accountSelected" && e && e.topic === p) {
      const m = h.event.data, D = h.chainId.split(":")[0], I = h.chainId.split(":")[1];
      n({
        network: D,
        chainId: I,
        address: m,
        shortenedAddress: rl(m)
      });
    }
  }), Vt(() => {
    e && !l && s();
  }, [e == null ? void 0 : e.topic]), Vt(() => {
    if (u) {
      const h = u, p = h == null ? void 0 : h.account;
      p && n(p);
    }
  }, [u]);
  const f = a ? a.message : u && u.error;
  return {
    account: t,
    accounts: r,
    error: f,
    loading: l
  };
}, k1 = () => {
  const e = hr(), [t, r] = Sr((p) => [
    p.chainId,
    p.account
  ]), { request: i, data: n, error: s, loading: u } = ii({
    topic: e == null ? void 0 : e.topic,
    chainId: t,
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "getBalance",
      params: {
        assetId: void 0
      }
    }
  });
  Rn(({ _: p, params: y, topic: m }) => {
    y.event.name === "accountSynced" && e && e.topic === m && !u && i();
  });
  const a = !!e && !!r;
  Vt(() => {
    a && !u && i();
  }, [a, r]);
  const l = s ? s.message : n && n.error, f = n, h = f == null ? void 0 : f.balances;
  return { loading: u, balances: h, error: l };
}, K1 = () => {
  const e = hr(), { connect: t, data: r, error: i, loading: n } = Tv({
    requiredNamespaces: {
      aleo: {
        methods: Qu,
        chains: no,
        events: Xu
      }
    }
  });
  return { connect: async () => {
    try {
      const u = await t();
    } catch (u) {
      console.error("connect error", u.message);
    }
  }, data: r, error: i, loading: n, session: e, isConnected: !!e };
};
var Ls = { exports: {} }, is, xc;
function y1() {
  if (xc)
    return is;
  xc = 1;
  var e = 1e3, t = e * 60, r = t * 60, i = r * 24, n = i * 7, s = i * 365.25;
  is = function(h, p) {
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
  return is;
}
function b1(e) {
  r.debug = r, r.default = r, r.coerce = l, r.disable = s, r.enable = n, r.enabled = u, r.humanize = y1(), r.destroy = f, Object.keys(e).forEach((h) => {
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
var v1 = b1;
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
  e.exports = v1(t);
  const { formatters: a } = e.exports;
  a.j = function(l) {
    try {
      return JSON.stringify(l);
    } catch (f) {
      return "[UnexpectedJSONParseError]: " + f.message;
    }
  };
})(Ls, Ls.exports);
var m1 = Ls.exports;
const w1 = /* @__PURE__ */ yn(m1), ji = w1("wallet:sdk");
ji.enabled = !0;
const W1 = (e) => {
  ji("useDecrypt", e);
  const t = hr(), [r] = Sr((h) => [
    h.chainId
  ]), { request: i, data: n, error: s, loading: u } = ii({
    topic: (t == null ? void 0 : t.topic) ?? "",
    chainId: r,
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "decrypt",
      params: {
        ciphertexts: e
      }
    }
  }), a = s ? s.message : n && n.error, l = n;
  return { decrypt: () => {
    e && i();
  }, plaintexts: l == null ? void 0 : l.plaintexts, loading: u, error: a };
}, H1 = () => {
  const e = hr(), [t] = Sr((a) => [
    a.disconnect
  ]), { disconnect: r, error: i, loading: n } = Nv({
    topic: e == null ? void 0 : e.topic,
    reason: st("USER_DISCONNECTED")
  }), s = async () => {
    if (e) {
      try {
        r();
      } catch {
        ji("could not disconnect session entirely");
      }
      t();
    }
  }, u = i ? i.message : void 0;
  return { disconnect: s, error: u, loading: n };
}, G1 = ({ filter: e, page: t }) => {
  const r = hr(), [i, n] = Sr((I) => [
    I.chainId,
    I.account
  ]);
  console.log("useEvents filter", e), (e == null ? void 0 : e.programId) === "" && (e.programId = void 0), console.log("requesting events", { filter: e, page: t });
  const { request: s, data: u, error: a, loading: l } = ii({
    topic: (r == null ? void 0 : r.topic) ?? "",
    chainId: i,
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "getEvents",
      params: {
        filter: e,
        page: t
      }
    }
  });
  Rn(({ id: I, params: P, topic: U }) => {
    P.event.name === "accountSynced" && r && r.topic === U && !l && s();
  });
  const f = !!r && !!n;
  Vt(() => {
    f && !l && s();
  }, [f, n]);
  const h = () => {
    !!r && !!n && !l && s();
  }, p = a ? a.message : u && u.error, y = u, m = y == null ? void 0 : y.events, D = (y == null ? void 0 : y.pageCount) ?? 0;
  return { fetchPage: h, events: m, error: p, loading: l, page: t, pageCount: D };
}, Y1 = (e) => {
  try {
    return JSON.stringify(e, null, 2).replaceAll('"', "") ?? "";
  } catch {
    return "";
  }
}, J1 = ({ filter: e, page: t }) => {
  const r = hr(), [i, n] = Sr((I) => [
    I.chainId,
    I.account
  ]);
  (e == null ? void 0 : e.programId) === "" && (e.programId = void 0);
  const { request: s, data: u, error: a, loading: l } = ii({
    topic: r == null ? void 0 : r.topic,
    chainId: i,
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "getRecords",
      params: {
        filter: e,
        page: t
      }
    }
  });
  Rn(({ params: I, topic: P }) => {
    I.event.name === "accountSynced" && r && r.topic === P && !l && s();
  });
  const f = !!r && !!n;
  Vt(() => {
    f && !l && s();
  }, [f, n]);
  const h = () => {
    !!r && !!n && !l && s();
  }, p = a ? a.message : u && u.error, y = u, m = y == null ? void 0 : y.records, D = (y == null ? void 0 : y.pageCount) ?? 0;
  return { fetchPage: h, records: m, error: p, loading: l, page: t, pageCount: D };
}, _1 = () => {
  const e = hr(), [t, r, i] = Sr((n) => [
    n.setAccount,
    n.setAccounts,
    n.disconnect
  ]);
  Vt(() => {
    if (e) {
      window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
      const n = e.namespaces.aleo.accounts.map((s) => {
        const u = s.split(":");
        return {
          network: u[0],
          chainId: u[1],
          address: u[2],
          shortenedAddress: rl(u[2])
        };
      });
      r(n ?? []), n[0] && t(n[0]);
    }
  }, [e == null ? void 0 : e.topic]), Ju(({ id: n, topic: s }) => {
    ji("session deleted! topic: ", s), i();
  });
}, Q1 = (e) => {
  const t = hr(), [r] = Sr((p) => [
    p.chainId
  ]), i = e.inputs.map(
    (p) => typeof p == "string" ? p : p.plaintext
  ), { request: n, data: s, error: u, loading: a } = ii({
    topic: (t == null ? void 0 : t.topic) ?? "",
    chainId: r,
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "requestCreateEvent",
      params: {
        type: e.type,
        programId: e.programId,
        functionId: e.functionId,
        fee: e.fee,
        inputs: i
      }
    }
  }), l = u ? u.message : s && s.error, f = s;
  return { requestCreateEvent: () => {
    e && (ji("useRequestCreateEvent requesting...", e), n());
  }, eventId: f == null ? void 0 : f.eventId, error: l, loading: a };
}, X1 = 50;
export {
  X1 as A,
  z1 as P,
  kl as R,
  Cc as T,
  _t as a,
  B1 as b,
  rl as c,
  k1 as d,
  K1 as e,
  W1 as f,
  H1 as g,
  G1 as h,
  Y1 as i,
  J1 as j,
  _1 as k,
  Q1 as l,
  no as m,
  Lo as n,
  D1 as o,
  Jt as p,
  Xu as q,
  Vv as r,
  Tn as s,
  S1 as t,
  V1 as u,
  fc as v,
  Qu as w,
  kv as x,
  Yr as y,
  q1 as z
};
