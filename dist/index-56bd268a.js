import Xr, { memo as Al, useEffect as zt, useState as Dn, useDebugValue as Rl } from "react";
var Pt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ui(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Cs(e) {
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
var Ji = { exports: {} }, on = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _o;
function Tl() {
  if (_o)
    return on;
  _o = 1;
  var e = Xr, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(a, l, h) {
    var f, g = {}, v = null, m = null;
    h !== void 0 && (v = "" + h), l.key !== void 0 && (v = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (f in l)
      n.call(l, f) && !s.hasOwnProperty(f) && (g[f] = l[f]);
    if (a && a.defaultProps)
      for (f in l = a.defaultProps, l)
        g[f] === void 0 && (g[f] = l[f]);
    return { $$typeof: t, type: a, key: v, ref: m, props: g, _owner: i.current };
  }
  return on.Fragment = r, on.jsx = u, on.jsxs = u, on;
}
var an = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wo;
function Pl() {
  return wo || (wo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Xr, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), O = Symbol.iterator, x = "@@iterator";
    function T(_) {
      if (_ === null || typeof _ != "object")
        return null;
      var j = O && _[O] || _[x];
      return typeof j == "function" ? j : null;
    }
    var M = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(_) {
      {
        for (var j = arguments.length, J = new Array(j > 1 ? j - 1 : 0), se = 1; se < j; se++)
          J[se - 1] = arguments[se];
        I("error", _, J);
      }
    }
    function I(_, j, J) {
      {
        var se = M.ReactDebugCurrentFrame, Ae = se.getStackAddendum();
        Ae !== "" && (j += "%s", J = J.concat([Ae]));
        var Se = J.map(function(Oe) {
          return String(Oe);
        });
        Se.unshift("Warning: " + j), Function.prototype.apply.call(console[_], console, Se);
      }
    }
    var y = !1, E = !1, d = !1, o = !1, p = !1, L;
    L = Symbol.for("react.module.reference");
    function F(_) {
      return !!(typeof _ == "string" || typeof _ == "function" || _ === n || _ === s || p || _ === i || _ === h || _ === f || o || _ === m || y || E || d || typeof _ == "object" && _ !== null && (_.$$typeof === v || _.$$typeof === g || _.$$typeof === u || _.$$typeof === a || _.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      _.$$typeof === L || _.getModuleId !== void 0));
    }
    function U(_, j, J) {
      var se = _.displayName;
      if (se)
        return se;
      var Ae = j.displayName || j.name || "";
      return Ae !== "" ? J + "(" + Ae + ")" : J;
    }
    function $(_) {
      return _.displayName || "Context";
    }
    function q(_) {
      if (_ == null)
        return null;
      if (typeof _.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof _ == "function")
        return _.displayName || _.name || null;
      if (typeof _ == "string")
        return _;
      switch (_) {
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
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case a:
            var j = _;
            return $(j) + ".Consumer";
          case u:
            var J = _;
            return $(J._context) + ".Provider";
          case l:
            return U(_, _.render, "ForwardRef");
          case g:
            var se = _.displayName || null;
            return se !== null ? se : q(_.type) || "Memo";
          case v: {
            var Ae = _, Se = Ae._payload, Oe = Ae._init;
            try {
              return q(Oe(Se));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, R = 0, G, K, z, k, B, W, oe;
    function H() {
    }
    H.__reactDisabledLog = !0;
    function ne() {
      {
        if (R === 0) {
          G = console.log, K = console.info, z = console.warn, k = console.error, B = console.group, W = console.groupCollapsed, oe = console.groupEnd;
          var _ = {
            configurable: !0,
            enumerable: !0,
            value: H,
            writable: !0
          };
          Object.defineProperties(console, {
            info: _,
            log: _,
            warn: _,
            error: _,
            group: _,
            groupCollapsed: _,
            groupEnd: _
          });
        }
        R++;
      }
    }
    function Z() {
      {
        if (R--, R === 0) {
          var _ = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, _, {
              value: G
            }),
            info: S({}, _, {
              value: K
            }),
            warn: S({}, _, {
              value: z
            }),
            error: S({}, _, {
              value: k
            }),
            group: S({}, _, {
              value: B
            }),
            groupCollapsed: S({}, _, {
              value: W
            }),
            groupEnd: S({}, _, {
              value: oe
            })
          });
        }
        R < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = M.ReactCurrentDispatcher, N;
    function P(_, j, J) {
      {
        if (N === void 0)
          try {
            throw Error();
          } catch (Ae) {
            var se = Ae.stack.trim().match(/\n( *(at )?)/);
            N = se && se[1] || "";
          }
        return `
` + N + _;
      }
    }
    var C = !1, c;
    {
      var D = typeof WeakMap == "function" ? WeakMap : Map;
      c = new D();
    }
    function Y(_, j) {
      if (!_ || C)
        return "";
      {
        var J = c.get(_);
        if (J !== void 0)
          return J;
      }
      var se;
      C = !0;
      var Ae = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Se;
      Se = re.current, re.current = null, ne();
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
            } catch (kt) {
              se = kt;
            }
            Reflect.construct(_, [], Oe);
          } else {
            try {
              Oe.call();
            } catch (kt) {
              se = kt;
            }
            _.call(Oe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (kt) {
            se = kt;
          }
          _();
        }
      } catch (kt) {
        if (kt && se && typeof kt.stack == "string") {
          for (var _e = kt.stack.split(`
`), ht = se.stack.split(`
`), Ve = _e.length - 1, Ye = ht.length - 1; Ve >= 1 && Ye >= 0 && _e[Ve] !== ht[Ye]; )
            Ye--;
          for (; Ve >= 1 && Ye >= 0; Ve--, Ye--)
            if (_e[Ve] !== ht[Ye]) {
              if (Ve !== 1 || Ye !== 1)
                do
                  if (Ve--, Ye--, Ye < 0 || _e[Ve] !== ht[Ye]) {
                    var it = `
` + _e[Ve].replace(" at new ", " at ");
                    return _.displayName && it.includes("<anonymous>") && (it = it.replace("<anonymous>", _.displayName)), typeof _ == "function" && c.set(_, it), it;
                  }
                while (Ve >= 1 && Ye >= 0);
              break;
            }
        }
      } finally {
        C = !1, re.current = Se, Z(), Error.prepareStackTrace = Ae;
      }
      var hr = _ ? _.displayName || _.name : "", Un = hr ? P(hr) : "";
      return typeof _ == "function" && c.set(_, Un), Un;
    }
    function Q(_, j, J) {
      return Y(_, !1);
    }
    function be(_) {
      var j = _.prototype;
      return !!(j && j.isReactComponent);
    }
    function ve(_, j, J) {
      if (_ == null)
        return "";
      if (typeof _ == "function")
        return Y(_, be(_));
      if (typeof _ == "string")
        return P(_);
      switch (_) {
        case h:
          return P("Suspense");
        case f:
          return P("SuspenseList");
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case l:
            return Q(_.render);
          case g:
            return ve(_.type, j, J);
          case v: {
            var se = _, Ae = se._payload, Se = se._init;
            try {
              return ve(Se(Ae), j, J);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, Ie = {}, Be = M.ReactDebugCurrentFrame;
    function Le(_) {
      if (_) {
        var j = _._owner, J = ve(_.type, _._source, j ? j.type : null);
        Be.setExtraStackFrame(J);
      } else
        Be.setExtraStackFrame(null);
    }
    function De(_, j, J, se, Ae) {
      {
        var Se = Function.call.bind(he);
        for (var Oe in _)
          if (Se(_, Oe)) {
            var _e = void 0;
            try {
              if (typeof _[Oe] != "function") {
                var ht = Error((se || "React class") + ": " + J + " type `" + Oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof _[Oe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ht.name = "Invariant Violation", ht;
              }
              _e = _[Oe](j, Oe, se, J, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ve) {
              _e = Ve;
            }
            _e && !(_e instanceof Error) && (Le(Ae), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", se || "React class", J, Oe, typeof _e), Le(null)), _e instanceof Error && !(_e.message in Ie) && (Ie[_e.message] = !0, Le(Ae), w("Failed %s type: %s", J, _e.message), Le(null));
          }
      }
    }
    var we = Array.isArray;
    function de(_) {
      return we(_);
    }
    function ge(_) {
      {
        var j = typeof Symbol == "function" && Symbol.toStringTag, J = j && _[Symbol.toStringTag] || _.constructor.name || "Object";
        return J;
      }
    }
    function pe(_) {
      try {
        return ue(_), !1;
      } catch {
        return !0;
      }
    }
    function ue(_) {
      return "" + _;
    }
    function ce(_) {
      if (pe(_))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ge(_)), ue(_);
    }
    var ie = M.ReactCurrentOwner, ye = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, ae, Ee;
    Ee = {};
    function xe(_) {
      if (he.call(_, "ref")) {
        var j = Object.getOwnPropertyDescriptor(_, "ref").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return _.ref !== void 0;
    }
    function Te(_) {
      if (he.call(_, "key")) {
        var j = Object.getOwnPropertyDescriptor(_, "key").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return _.key !== void 0;
    }
    function Pe(_, j) {
      if (typeof _.ref == "string" && ie.current && j && ie.current.stateNode !== j) {
        var J = q(ie.current.type);
        Ee[J] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', q(ie.current.type), _.ref), Ee[J] = !0);
      }
    }
    function Ce(_, j) {
      {
        var J = function() {
          me || (me = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        J.isReactWarning = !0, Object.defineProperty(_, "key", {
          get: J,
          configurable: !0
        });
      }
    }
    function Rt(_, j) {
      {
        var J = function() {
          ae || (ae = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        J.isReactWarning = !0, Object.defineProperty(_, "ref", {
          get: J,
          configurable: !0
        });
      }
    }
    var Ut = function(_, j, J, se, Ae, Se, Oe) {
      var _e = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: _,
        key: j,
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
    function Xt(_, j, J, se, Ae) {
      {
        var Se, Oe = {}, _e = null, ht = null;
        J !== void 0 && (ce(J), _e = "" + J), Te(j) && (ce(j.key), _e = "" + j.key), xe(j) && (ht = j.ref, Pe(j, Ae));
        for (Se in j)
          he.call(j, Se) && !ye.hasOwnProperty(Se) && (Oe[Se] = j[Se]);
        if (_ && _.defaultProps) {
          var Ve = _.defaultProps;
          for (Se in Ve)
            Oe[Se] === void 0 && (Oe[Se] = Ve[Se]);
        }
        if (_e || ht) {
          var Ye = typeof _ == "function" ? _.displayName || _.name || "Unknown" : _;
          _e && Ce(Oe, Ye), ht && Rt(Oe, Ye);
        }
        return Ut(_, _e, ht, Ae, se, ie.current, Oe);
      }
    }
    var ft = M.ReactCurrentOwner, Qt = M.ReactDebugCurrentFrame;
    function $t(_) {
      if (_) {
        var j = _._owner, J = ve(_.type, _._source, j ? j.type : null);
        Qt.setExtraStackFrame(J);
      } else
        Qt.setExtraStackFrame(null);
    }
    var fr;
    fr = !1;
    function qe(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function $e() {
      {
        if (ft.current) {
          var _ = q(ft.current.type);
          if (_)
            return `

Check the render method of \`` + _ + "`.";
        }
        return "";
      }
    }
    function We(_) {
      {
        if (_ !== void 0) {
          var j = _.fileName.replace(/^.*[\\\/]/, ""), J = _.lineNumber;
          return `

Check your code at ` + j + ":" + J + ".";
        }
        return "";
      }
    }
    var Ke = {};
    function He(_) {
      {
        var j = $e();
        if (!j) {
          var J = typeof _ == "string" ? _ : _.displayName || _.name;
          J && (j = `

Check the top-level render call using <` + J + ">.");
        }
        return j;
      }
    }
    function Me(_, j) {
      {
        if (!_._store || _._store.validated || _.key != null)
          return;
        _._store.validated = !0;
        var J = He(j);
        if (Ke[J])
          return;
        Ke[J] = !0;
        var se = "";
        _ && _._owner && _._owner !== ft.current && (se = " It was passed a child from " + q(_._owner.type) + "."), $t(_), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', J, se), $t(null);
      }
    }
    function Qe(_, j) {
      {
        if (typeof _ != "object")
          return;
        if (de(_))
          for (var J = 0; J < _.length; J++) {
            var se = _[J];
            qe(se) && Me(se, j);
          }
        else if (qe(_))
          _._store && (_._store.validated = !0);
        else if (_) {
          var Ae = T(_);
          if (typeof Ae == "function" && Ae !== _.entries)
            for (var Se = Ae.call(_), Oe; !(Oe = Se.next()).done; )
              qe(Oe.value) && Me(Oe.value, j);
        }
      }
    }
    function tt(_) {
      {
        var j = _.type;
        if (j == null || typeof j == "string")
          return;
        var J;
        if (typeof j == "function")
          J = j.propTypes;
        else if (typeof j == "object" && (j.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        j.$$typeof === g))
          J = j.propTypes;
        else
          return;
        if (J) {
          var se = q(j);
          De(J, _.props, "prop", se, _);
        } else if (j.PropTypes !== void 0 && !fr) {
          fr = !0;
          var Ae = q(j);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ae || "Unknown");
        }
        typeof j.getDefaultProps == "function" && !j.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function rt(_) {
      {
        for (var j = Object.keys(_.props), J = 0; J < j.length; J++) {
          var se = j[J];
          if (se !== "children" && se !== "key") {
            $t(_), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", se), $t(null);
            break;
          }
        }
        _.ref !== null && ($t(_), w("Invalid attribute `ref` supplied to `React.Fragment`."), $t(null));
      }
    }
    function Ze(_, j, J, se, Ae, Se) {
      {
        var Oe = F(_);
        if (!Oe) {
          var _e = "";
          (_ === void 0 || typeof _ == "object" && _ !== null && Object.keys(_).length === 0) && (_e += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ht = We(Ae);
          ht ? _e += ht : _e += $e();
          var Ve;
          _ === null ? Ve = "null" : de(_) ? Ve = "array" : _ !== void 0 && _.$$typeof === t ? (Ve = "<" + (q(_.type) || "Unknown") + " />", _e = " Did you accidentally export a JSX literal instead of a component?") : Ve = typeof _, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ve, _e);
        }
        var Ye = Xt(_, j, J, Ae, Se);
        if (Ye == null)
          return Ye;
        if (Oe) {
          var it = j.children;
          if (it !== void 0)
            if (se)
              if (de(it)) {
                for (var hr = 0; hr < it.length; hr++)
                  Qe(it[hr], _);
                Object.freeze && Object.freeze(it);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Qe(it, _);
        }
        return _ === n ? rt(Ye) : tt(Ye), Ye;
      }
    }
    function nt(_, j, J) {
      return Ze(_, j, J, !0);
    }
    function et(_, j, J) {
      return Ze(_, j, J, !1);
    }
    var Ge = et, Fe = nt;
    an.Fragment = n, an.jsx = Ge, an.jsxs = Fe;
  }()), an;
}
process.env.NODE_ENV === "production" ? Ji.exports = Tl() : Ji.exports = Pl();
var Xi = Ji.exports;
const Nl = Symbol(), Eo = Object.getPrototypeOf, Qi = /* @__PURE__ */ new WeakMap(), Ll = (e) => e && (Qi.has(e) ? Qi.get(e) : Eo(e) === Object.prototype || Eo(e) === Array.prototype), Fl = (e) => Ll(e) && e[Nl] || null, So = (e, t = !0) => {
  Qi.set(e, t);
}, Si = (e) => typeof e == "object" && e !== null, yr = /* @__PURE__ */ new WeakMap(), Kn = /* @__PURE__ */ new WeakSet(), Ul = (e = Object.is, t = (f, g) => new Proxy(f, g), r = (f) => Si(f) && !Kn.has(f) && (Array.isArray(f) || !(Symbol.iterator in f)) && !(f instanceof WeakMap) && !(f instanceof WeakSet) && !(f instanceof Error) && !(f instanceof Number) && !(f instanceof Date) && !(f instanceof String) && !(f instanceof RegExp) && !(f instanceof ArrayBuffer), n = (f) => f.configurable && f.enumerable && f.writable, i = (f) => {
  switch (f.status) {
    case "fulfilled":
      return f.value;
    case "rejected":
      throw f.reason;
    default:
      throw f;
  }
}, s = /* @__PURE__ */ new WeakMap(), u = (f, g, v = i) => {
  const m = s.get(f);
  if ((m == null ? void 0 : m[0]) === g)
    return m[1];
  const O = Array.isArray(f) ? [] : Object.create(Object.getPrototypeOf(f));
  return So(O, !0), s.set(f, [g, O]), Reflect.ownKeys(f).forEach((x) => {
    if (Object.getOwnPropertyDescriptor(O, x))
      return;
    const T = Reflect.get(f, x), M = {
      value: T,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (Kn.has(T))
      So(T, !1);
    else if (T instanceof Promise)
      delete M.value, M.get = () => v(T);
    else if (yr.has(T)) {
      const [w, I] = yr.get(
        T
      );
      M.value = u(
        w,
        I(),
        v
      );
    }
    Object.defineProperty(O, x, M);
  }), Object.preventExtensions(O);
}, a = /* @__PURE__ */ new WeakMap(), l = [1, 1], h = (f) => {
  if (!Si(f))
    throw new Error("object required");
  const g = a.get(f);
  if (g)
    return g;
  let v = l[0];
  const m = /* @__PURE__ */ new Set(), O = (U, $ = ++l[0]) => {
    v !== $ && (v = $, m.forEach((q) => q(U, $)));
  };
  let x = l[1];
  const T = (U = ++l[1]) => (x !== U && !m.size && (x = U, w.forEach(([$]) => {
    const q = $[1](U);
    q > v && (v = q);
  })), v), M = (U) => ($, q) => {
    const S = [...$];
    S[1] = [U, ...S[1]], O(S, q);
  }, w = /* @__PURE__ */ new Map(), I = (U, $) => {
    if (m.size) {
      const q = $[3](M(U));
      w.set(U, [$, q]);
    } else
      w.set(U, [$]);
  }, y = (U) => {
    var $;
    const q = w.get(U);
    q && (w.delete(U), ($ = q[1]) == null || $.call(q));
  }, E = (U) => (m.add(U), m.size === 1 && w.forEach(([q, S], R) => {
    const G = q[3](M(R));
    w.set(R, [q, G]);
  }), () => {
    m.delete(U), m.size === 0 && w.forEach(([q, S], R) => {
      S && (S(), w.set(R, [q]));
    });
  }), d = Array.isArray(f) ? [] : Object.create(Object.getPrototypeOf(f)), o = (U, $, q, S, R) => {
    if (U && (e($, S) || a.has(S) && e($, a.get(S))))
      return;
    y(q), Si(S) && (S = Fl(S) || S);
    let G = S;
    if (S instanceof Promise)
      S.then((K) => {
        S.status = "fulfilled", S.value = K, O(["resolve", [q], K]);
      }).catch((K) => {
        S.status = "rejected", S.reason = K, O(["reject", [q], K]);
      });
    else {
      !yr.has(S) && r(S) && (G = h(S));
      const K = !Kn.has(G) && yr.get(G);
      K && I(q, K);
    }
    R(G), O(["set", [q], S, $]);
  }, L = t(d, {
    deleteProperty(U, $) {
      const q = Reflect.get(U, $);
      y($);
      const S = Reflect.deleteProperty(U, $);
      return S && O(["delete", [$], q]), S;
    },
    set(U, $, q, S) {
      const R = Reflect.has(U, $), G = Reflect.get(U, $, S);
      return o(R, G, $, q, (K) => {
        Reflect.set(U, $, K, S);
      }), !0;
    },
    defineProperty(U, $, q) {
      if (n(q)) {
        const S = Reflect.getOwnPropertyDescriptor(U, $);
        if (!S || n(S))
          return o(
            !!S && "value" in S,
            S == null ? void 0 : S.value,
            $,
            q.value,
            (R) => {
              Reflect.defineProperty(U, $, {
                ...q,
                value: R
              });
            }
          ), !0;
      }
      return Reflect.defineProperty(U, $, q);
    }
  });
  a.set(f, L);
  const F = [
    d,
    T,
    u,
    E
  ];
  return yr.set(L, F), Reflect.ownKeys(f).forEach((U) => {
    const $ = Object.getOwnPropertyDescriptor(
      f,
      U
    );
    "value" in $ && (L[U] = f[U], delete $.value, delete $.writable), Object.defineProperty(d, U, $);
  }), L;
}) => [
  // public functions
  h,
  // shared state
  yr,
  Kn,
  // internal things
  e,
  t,
  r,
  n,
  i,
  s,
  u,
  a,
  l
], [$l] = Ul();
function _r(e = {}) {
  return $l(e);
}
function Fr(e, t, r) {
  const n = yr.get(e);
  let i;
  const s = [], u = n[3];
  let a = !1;
  const h = u((f) => {
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
function Ml(e, t) {
  const r = yr.get(e), [n, i, s] = r;
  return s(n, i(), t);
}
const ct = _r({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), Sc = { state: ct, subscribe(e) {
  return Fr(ct, () => e(ct));
}, push(e, t) {
  e !== ct.view && (ct.view = e, t && (ct.data = t), ct.history.push(e));
}, reset(e) {
  ct.view = e, ct.history = [e];
}, replace(e) {
  ct.history.length > 1 && (ct.history[ct.history.length - 1] = e, ct.view = e);
}, goBack() {
  if (ct.history.length > 1) {
    ct.history.pop();
    const [e] = ct.history.slice(-1);
    ct.view = e;
  }
}, setData(e) {
  ct.data = e;
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
  let n = e;
  n.includes("://") || (n = e.replaceAll("/", "").replaceAll(":", ""), n = `${n}://`), n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, r);
  const i = encodeURIComponent(t);
  return `${n}wc?uri=${i}`;
}, formatUniversalUrl(e, t, r) {
  if (!Et.isHttpUrl(e))
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
  const t = (e = Sc.state.data) == null ? void 0 : e.Wallet;
  if (!t)
    throw new Error('Missing "Wallet" view data');
  return t;
} }, jl = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), vt = _r({ enabled: jl, userSessionId: "", events: [], connectedWalletId: void 0 }), Bl = { state: vt, subscribe(e) {
  return Fr(vt.events, () => e(Ml(vt.events[vt.events.length - 1])));
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
} }, Zt = _r({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }), Yt = { state: Zt, subscribe(e) {
  return Fr(Zt, () => e(Zt));
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
} }, Vn = _r({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), Gr = { state: Vn, subscribe(e) {
  return Fr(Vn, () => e(Vn));
}, setConfig(e) {
  var t, r;
  Bl.initialize(), Yt.setChains(e.chains), Yt.setIsAuth(!!e.enableAuthMode), Yt.setIsCustomMobile(!!((t = e.mobileWallets) != null && t.length)), Yt.setIsCustomDesktop(!!((r = e.desktopWallets) != null && r.length)), Et.setModalVersionInStorage(), Object.assign(Vn, e);
} };
var ql = Object.defineProperty, Do = Object.getOwnPropertySymbols, zl = Object.prototype.hasOwnProperty, Kl = Object.prototype.propertyIsEnumerable, Oo = (e, t, r) => t in e ? ql(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Vl = (e, t) => {
  for (var r in t || (t = {}))
    zl.call(t, r) && Oo(e, r, t[r]);
  if (Do)
    for (var r of Do(t))
      Kl.call(t, r) && Oo(e, r, t[r]);
  return e;
};
const Zi = "https://explorer-api.walletconnect.com", es = "wcm", ts = "js-2.6.1";
async function kn(e, t) {
  const r = Vl({ sdkType: es, sdkVersion: ts }, t), n = new URL(e, Zi);
  return n.searchParams.append("projectId", Gr.state.projectId), Object.entries(r).forEach(([i, s]) => {
    s && n.searchParams.append(i, String(s));
  }), (await fetch(n)).json();
}
const Dr = { async getDesktopListings(e) {
  return kn("/w3m/v1/getDesktopListings", e);
}, async getMobileListings(e) {
  return kn("/w3m/v1/getMobileListings", e);
}, async getInjectedListings(e) {
  return kn("/w3m/v1/getInjectedListings", e);
}, async getAllListings(e) {
  return kn("/w3m/v1/getAllListings", e);
}, getWalletImageUrl(e) {
  return `${Zi}/w3m/v1/getWalletImage/${e}?projectId=${Gr.state.projectId}&sdkType=${es}&sdkVersion=${ts}`;
}, getAssetImageUrl(e) {
  return `${Zi}/w3m/v1/getAssetImage/${e}?projectId=${Gr.state.projectId}&sdkType=${es}&sdkVersion=${ts}`;
} };
var kl = Object.defineProperty, Io = Object.getOwnPropertySymbols, Wl = Object.prototype.hasOwnProperty, Hl = Object.prototype.propertyIsEnumerable, xo = (e, t, r) => t in e ? kl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Gl = (e, t) => {
  for (var r in t || (t = {}))
    Wl.call(t, r) && xo(e, r, t[r]);
  if (Io)
    for (var r of Io(t))
      Hl.call(t, r) && xo(e, r, t[r]);
  return e;
};
const Co = Et.isMobile(), er = _r({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), vv = { state: er, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: e, explorerExcludedWalletIds: t } = Gr.state;
  if (e === "NONE" || t === "ALL" && !e)
    return er.recomendedWallets;
  if (Et.isArray(e)) {
    const r = { recommendedIds: e.join(",") }, { listings: n } = await Dr.getAllListings(r), i = Object.values(n);
    i.sort((s, u) => {
      const a = e.indexOf(s.id), l = e.indexOf(u.id);
      return a - l;
    }), er.recomendedWallets = i;
  } else {
    const { chains: r, isAuth: n } = Yt.state, i = r == null ? void 0 : r.join(","), s = Et.isArray(t), u = { page: 1, sdks: n ? "auth_v1" : void 0, entries: Et.RECOMMENDED_WALLET_AMOUNT, chains: i, version: 2, excludedIds: s ? t.join(",") : void 0 }, { listings: a } = Co ? await Dr.getMobileListings(u) : await Dr.getDesktopListings(u);
    er.recomendedWallets = Object.values(a);
  }
  return er.recomendedWallets;
}, async getWallets(e) {
  const t = Gl({}, e), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: n } = Gr.state, { recomendedWallets: i } = er;
  if (n === "ALL")
    return er.wallets;
  i.length ? t.excludedIds = i.map((g) => g.id).join(",") : Et.isArray(r) && (t.excludedIds = r.join(",")), Et.isArray(n) && (t.excludedIds = [t.excludedIds, n].filter(Boolean).join(",")), Yt.state.isAuth && (t.sdks = "auth_v1");
  const { page: s, search: u } = e, { listings: a, total: l } = Co ? await Dr.getMobileListings(t) : await Dr.getDesktopListings(t), h = Object.values(a), f = u ? "search" : "wallets";
  return er[f] = { listings: [...er[f].listings, ...h], total: l, page: s ?? 1 }, { listings: h, total: l };
}, getWalletImageUrl(e) {
  return Dr.getWalletImageUrl(e);
}, getAssetImageUrl(e) {
  return Dr.getAssetImageUrl(e);
}, resetSearch() {
  er.search = { listings: [], total: 0, page: 1 };
} }, qr = _r({ open: !1 }), Di = { state: qr, subscribe(e) {
  return Fr(qr, () => e(qr));
}, async open(e) {
  return new Promise((t) => {
    const { isUiLoaded: r, isDataLoaded: n } = Yt.state;
    if (Et.removeWalletConnectDeepLink(), Yt.setWalletConnectUri(e == null ? void 0 : e.uri), Yt.setChains(e == null ? void 0 : e.chains), Sc.reset("ConnectWallet"), r && n)
      qr.open = !0, t();
    else {
      const i = setInterval(() => {
        const s = Yt.state;
        s.isUiLoaded && s.isDataLoaded && (clearInterval(i), qr.open = !0, t());
      }, 200);
    }
  });
}, close() {
  qr.open = !1;
} };
var Yl = Object.defineProperty, Ao = Object.getOwnPropertySymbols, Jl = Object.prototype.hasOwnProperty, Xl = Object.prototype.propertyIsEnumerable, Ro = (e, t, r) => t in e ? Yl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Ql = (e, t) => {
  for (var r in t || (t = {}))
    Jl.call(t, r) && Ro(e, r, t[r]);
  if (Ao)
    for (var r of Ao(t))
      Xl.call(t, r) && Ro(e, r, t[r]);
  return e;
};
function Zl() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const cn = _r({ themeMode: Zl() ? "dark" : "light" }), To = { state: cn, subscribe(e) {
  return Fr(cn, () => e(cn));
}, setThemeConfig(e) {
  const { themeMode: t, themeVariables: r } = e;
  t && (cn.themeMode = t), r && (cn.themeVariables = Ql({}, r));
} }, Or = _r({ open: !1, message: "", variant: "success" }), mv = { state: Or, subscribe(e) {
  return Fr(Or, () => e(Or));
}, openToast(e, t) {
  Or.open = !0, Or.message = e, Or.variant = t;
}, closeToast() {
  Or.open = !1;
} };
let ef = class {
  constructor(t) {
    this.openModal = Di.open, this.closeModal = Di.close, this.subscribeModal = Di.subscribe, this.setTheme = To.setThemeConfig, To.setThemeConfig(t), Gr.setConfig(t), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-4e511f0a.js");
      const t = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", t), Yt.setIsUiLoaded(!0);
    }
  }
};
var As = { exports: {} }, Wr = typeof Reflect == "object" ? Reflect : null, Po = Wr && typeof Wr.apply == "function" ? Wr.apply : function(t, r, n) {
  return Function.prototype.apply.call(t, r, n);
}, Gn;
Wr && typeof Wr.ownKeys == "function" ? Gn = Wr.ownKeys : Object.getOwnPropertySymbols ? Gn = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : Gn = function(t) {
  return Object.getOwnPropertyNames(t);
};
function tf(e) {
  console && console.warn && console.warn(e);
}
var Dc = Number.isNaN || function(t) {
  return t !== t;
};
function Ne() {
  Ne.init.call(this);
}
As.exports = Ne;
As.exports.once = of;
Ne.EventEmitter = Ne;
Ne.prototype._events = void 0;
Ne.prototype._eventsCount = 0;
Ne.prototype._maxListeners = void 0;
var No = 10;
function li(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(Ne, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return No;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || Dc(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    No = e;
  }
});
Ne.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Ne.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || Dc(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function Oc(e) {
  return e._maxListeners === void 0 ? Ne.defaultMaxListeners : e._maxListeners;
}
Ne.prototype.getMaxListeners = function() {
  return Oc(this);
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
    Po(l, this, r);
  else
    for (var h = l.length, f = Rc(l, h), n = 0; n < h; ++n)
      Po(f[n], this, r);
  return !0;
};
function Ic(e, t, r, n) {
  var i, s, u;
  if (li(r), s = e._events, s === void 0 ? (s = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (s.newListener !== void 0 && (e.emit(
    "newListener",
    t,
    r.listener ? r.listener : r
  ), s = e._events), u = s[t]), u === void 0)
    u = s[t] = r, ++e._eventsCount;
  else if (typeof u == "function" ? u = s[t] = n ? [r, u] : [u, r] : n ? u.unshift(r) : u.push(r), i = Oc(e), i > 0 && u.length > i && !u.warned) {
    u.warned = !0;
    var a = new Error("Possible EventEmitter memory leak detected. " + u.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    a.name = "MaxListenersExceededWarning", a.emitter = e, a.type = t, a.count = u.length, tf(a);
  }
  return e;
}
Ne.prototype.addListener = function(t, r) {
  return Ic(this, t, r, !1);
};
Ne.prototype.on = Ne.prototype.addListener;
Ne.prototype.prependListener = function(t, r) {
  return Ic(this, t, r, !0);
};
function rf() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function xc(e, t, r) {
  var n = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r }, i = rf.bind(n);
  return i.listener = r, n.wrapFn = i, i;
}
Ne.prototype.once = function(t, r) {
  return li(r), this.on(t, xc(this, t, r)), this;
};
Ne.prototype.prependOnceListener = function(t, r) {
  return li(r), this.prependListener(t, xc(this, t, r)), this;
};
Ne.prototype.removeListener = function(t, r) {
  var n, i, s, u, a;
  if (li(r), i = this._events, i === void 0)
    return this;
  if (n = i[t], n === void 0)
    return this;
  if (n === r || n.listener === r)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete i[t], i.removeListener && this.emit("removeListener", t, n.listener || r));
  else if (typeof n != "function") {
    for (s = -1, u = n.length - 1; u >= 0; u--)
      if (n[u] === r || n[u].listener === r) {
        a = n[u].listener, s = u;
        break;
      }
    if (s < 0)
      return this;
    s === 0 ? n.shift() : nf(n, s), n.length === 1 && (i[t] = n[0]), i.removeListener !== void 0 && this.emit("removeListener", t, a || r);
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
    var s = Object.keys(n), u;
    for (i = 0; i < s.length; ++i)
      u = s[i], u !== "removeListener" && this.removeAllListeners(u);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (r = n[t], typeof r == "function")
    this.removeListener(t, r);
  else if (r !== void 0)
    for (i = r.length - 1; i >= 0; i--)
      this.removeListener(t, r[i]);
  return this;
};
function Cc(e, t, r) {
  var n = e._events;
  if (n === void 0)
    return [];
  var i = n[t];
  return i === void 0 ? [] : typeof i == "function" ? r ? [i.listener || i] : [i] : r ? sf(i) : Rc(i, i.length);
}
Ne.prototype.listeners = function(t) {
  return Cc(this, t, !0);
};
Ne.prototype.rawListeners = function(t) {
  return Cc(this, t, !1);
};
Ne.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : Ac.call(e, t);
};
Ne.prototype.listenerCount = Ac;
function Ac(e) {
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
  return this._eventsCount > 0 ? Gn(this._events) : [];
};
function Rc(e, t) {
  for (var r = new Array(t), n = 0; n < t; ++n)
    r[n] = e[n];
  return r;
}
function nf(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function sf(e) {
  for (var t = new Array(e.length), r = 0; r < t.length; ++r)
    t[r] = e[r].listener || e[r];
  return t;
}
function of(e, t) {
  return new Promise(function(r, n) {
    function i(u) {
      e.removeListener(t, s), n(u);
    }
    function s() {
      typeof e.removeListener == "function" && e.removeListener("error", i), r([].slice.call(arguments));
    }
    Tc(e, t, s, { once: !0 }), t !== "error" && af(e, i, { once: !0 });
  });
}
function af(e, t, r) {
  typeof e.on == "function" && Tc(e, "error", t, r);
}
function Tc(e, t, r, n) {
  if (typeof e.on == "function")
    n.once ? e.once(t, r) : e.on(t, r);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function i(s) {
      n.once && e.removeEventListener(t, i), r(s);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var Jt = As.exports;
const Pc = /* @__PURE__ */ ui(Jt);
var fi = {};
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
var rs = function(e, t) {
  return rs = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      n.hasOwnProperty(i) && (r[i] = n[i]);
  }, rs(e, t);
};
function cf(e, t) {
  rs(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var ns = function() {
  return ns = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, ns.apply(this, arguments);
};
function uf(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function lf(e, t, r, n) {
  var i = arguments.length, s = i < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, r) : n, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    s = Reflect.decorate(e, t, r, n);
  else
    for (var a = e.length - 1; a >= 0; a--)
      (u = e[a]) && (s = (i < 3 ? u(s) : i > 3 ? u(t, r, s) : u(t, r)) || s);
  return i > 3 && s && Object.defineProperty(t, r, s), s;
}
function ff(e, t) {
  return function(r, n) {
    t(r, n, e);
  };
}
function hf(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function df(e, t, r, n) {
  function i(s) {
    return s instanceof r ? s : new r(function(u) {
      u(s);
    });
  }
  return new (r || (r = Promise))(function(s, u) {
    function a(f) {
      try {
        h(n.next(f));
      } catch (g) {
        u(g);
      }
    }
    function l(f) {
      try {
        h(n.throw(f));
      } catch (g) {
        u(g);
      }
    }
    function h(f) {
      f.done ? s(f.value) : i(f.value).then(a, l);
    }
    h((n = n.apply(e, t || [])).next());
  });
}
function pf(e, t) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, i, s, u;
  return u = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
    return this;
  }), u;
  function a(h) {
    return function(f) {
      return l([h, f]);
    };
  }
  function l(h) {
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
function gf(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}
function yf(e, t) {
  for (var r in e)
    r !== "default" && !t.hasOwnProperty(r) && (t[r] = e[r]);
}
function is(e) {
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
function Nc(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, s = [], u;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      s.push(i.value);
  } catch (a) {
    u = { error: a };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (u)
        throw u.error;
    }
  }
  return s;
}
function bf() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(Nc(arguments[t]));
  return e;
}
function vf() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++)
    e += arguments[t].length;
  for (var n = Array(e), i = 0, t = 0; t < r; t++)
    for (var s = arguments[t], u = 0, a = s.length; u < a; u++, i++)
      n[i] = s[u];
  return n;
}
function xn(e) {
  return this instanceof xn ? (this.v = e, this) : new xn(e);
}
function mf(e, t, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []), i, s = [];
  return i = {}, u("next"), u("throw"), u("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function u(v) {
    n[v] && (i[v] = function(m) {
      return new Promise(function(O, x) {
        s.push([v, m, O, x]) > 1 || a(v, m);
      });
    });
  }
  function a(v, m) {
    try {
      l(n[v](m));
    } catch (O) {
      g(s[0][3], O);
    }
  }
  function l(v) {
    v.value instanceof xn ? Promise.resolve(v.value.v).then(h, f) : g(s[0][2], v);
  }
  function h(v) {
    a("next", v);
  }
  function f(v) {
    a("throw", v);
  }
  function g(v, m) {
    v(m), s.shift(), s.length && a(s[0][0], s[0][1]);
  }
}
function _f(e) {
  var t, r;
  return t = {}, n("next"), n("throw", function(i) {
    throw i;
  }), n("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function n(i, s) {
    t[i] = e[i] ? function(u) {
      return (r = !r) ? { value: xn(e[i](u)), done: i === "return" } : s ? s(u) : u;
    } : s;
  }
}
function wf(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], r;
  return t ? t.call(e) : (e = typeof is == "function" ? is(e) : e[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(s) {
    r[s] = e[s] && function(u) {
      return new Promise(function(a, l) {
        u = e[s](u), i(a, l, u.done, u.value);
      });
    };
  }
  function i(s, u, a, l) {
    Promise.resolve(l).then(function(h) {
      s({ value: h, done: a });
    }, u);
  }
}
function Ef(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
function Sf(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  return t.default = e, t;
}
function Df(e) {
  return e && e.__esModule ? e : { default: e };
}
function Of(e, t) {
  if (!t.has(e))
    throw new TypeError("attempted to get private field on non-instance");
  return t.get(e);
}
function If(e, t, r) {
  if (!t.has(e))
    throw new TypeError("attempted to set private field on non-instance");
  return t.set(e, r), r;
}
const xf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return ns;
  },
  __asyncDelegator: _f,
  __asyncGenerator: mf,
  __asyncValues: wf,
  __await: xn,
  __awaiter: df,
  __classPrivateFieldGet: Of,
  __classPrivateFieldSet: If,
  __createBinding: gf,
  __decorate: lf,
  __exportStar: yf,
  __extends: cf,
  __generator: pf,
  __importDefault: Df,
  __importStar: Sf,
  __makeTemplateObject: Ef,
  __metadata: hf,
  __param: ff,
  __read: Nc,
  __rest: uf,
  __spread: bf,
  __spreadArrays: vf,
  __values: is
}, Symbol.toStringTag, { value: "Module" })), Vt = /* @__PURE__ */ Cs(xf);
var Rn = {};
Object.defineProperty(Rn, "__esModule", { value: !0 });
function Cf(e) {
  if (typeof e != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof e}`);
  try {
    return JSON.parse(e);
  } catch {
    return e;
  }
}
Rn.safeJsonParse = Cf;
function Af(e) {
  return typeof e == "string" ? e : JSON.stringify(e, (t, r) => typeof r > "u" ? null : r);
}
Rn.safeJsonStringify = Af;
var un = { exports: {} }, Lo;
function Rf() {
  return Lo || (Lo = 1, function() {
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
    }), typeof Pt < "u" && Pt.localStorage ? un.exports = Pt.localStorage : typeof window < "u" && window.localStorage ? un.exports = window.localStorage : un.exports = new t();
  }()), un.exports;
}
var Oi = {}, ln = {}, Fo;
function Tf() {
  if (Fo)
    return ln;
  Fo = 1, Object.defineProperty(ln, "__esModule", { value: !0 }), ln.IKeyValueStorage = void 0;
  class e {
  }
  return ln.IKeyValueStorage = e, ln;
}
var fn = {}, Uo;
function Pf() {
  if (Uo)
    return fn;
  Uo = 1, Object.defineProperty(fn, "__esModule", { value: !0 }), fn.parseEntry = void 0;
  const e = Rn;
  function t(r) {
    var n;
    return [r[0], e.safeJsonParse((n = r[1]) !== null && n !== void 0 ? n : "")];
  }
  return fn.parseEntry = t, fn;
}
var $o;
function Nf() {
  return $o || ($o = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = Vt;
    t.__exportStar(Tf(), e), t.__exportStar(Pf(), e);
  }(Oi)), Oi;
}
Object.defineProperty(fi, "__esModule", { value: !0 });
fi.KeyValueStorage = void 0;
const Kr = Vt, Mo = Rn, Lf = Kr.__importDefault(Rf()), Ff = Nf();
class Lc {
  constructor() {
    this.localStorage = Lf.default;
  }
  getKeys() {
    return Kr.__awaiter(this, void 0, void 0, function* () {
      return Object.keys(this.localStorage);
    });
  }
  getEntries() {
    return Kr.__awaiter(this, void 0, void 0, function* () {
      return Object.entries(this.localStorage).map(Ff.parseEntry);
    });
  }
  getItem(t) {
    return Kr.__awaiter(this, void 0, void 0, function* () {
      const r = this.localStorage.getItem(t);
      if (r !== null)
        return Mo.safeJsonParse(r);
    });
  }
  setItem(t, r) {
    return Kr.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.setItem(t, Mo.safeJsonStringify(r));
    });
  }
  removeItem(t) {
    return Kr.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.removeItem(t);
    });
  }
}
fi.KeyValueStorage = Lc;
var Uf = fi.default = Lc, Qr = {}, hn = {}, te = {}, Ii = {}, dn = {}, jo;
function $f() {
  if (jo)
    return dn;
  jo = 1, Object.defineProperty(dn, "__esModule", { value: !0 }), dn.delay = void 0;
  function e(t) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, t);
    });
  }
  return dn.delay = e, dn;
}
var Ir = {}, xi = {}, xr = {}, Bo;
function Mf() {
  return Bo || (Bo = 1, Object.defineProperty(xr, "__esModule", { value: !0 }), xr.ONE_THOUSAND = xr.ONE_HUNDRED = void 0, xr.ONE_HUNDRED = 100, xr.ONE_THOUSAND = 1e3), xr;
}
var Ci = {}, qo;
function jf() {
  return qo || (qo = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ONE_YEAR = e.FOUR_WEEKS = e.THREE_WEEKS = e.TWO_WEEKS = e.ONE_WEEK = e.THIRTY_DAYS = e.SEVEN_DAYS = e.FIVE_DAYS = e.THREE_DAYS = e.ONE_DAY = e.TWENTY_FOUR_HOURS = e.TWELVE_HOURS = e.SIX_HOURS = e.THREE_HOURS = e.ONE_HOUR = e.SIXTY_MINUTES = e.THIRTY_MINUTES = e.TEN_MINUTES = e.FIVE_MINUTES = e.ONE_MINUTE = e.SIXTY_SECONDS = e.THIRTY_SECONDS = e.TEN_SECONDS = e.FIVE_SECONDS = e.ONE_SECOND = void 0, e.ONE_SECOND = 1, e.FIVE_SECONDS = 5, e.TEN_SECONDS = 10, e.THIRTY_SECONDS = 30, e.SIXTY_SECONDS = 60, e.ONE_MINUTE = e.SIXTY_SECONDS, e.FIVE_MINUTES = e.ONE_MINUTE * 5, e.TEN_MINUTES = e.ONE_MINUTE * 10, e.THIRTY_MINUTES = e.ONE_MINUTE * 30, e.SIXTY_MINUTES = e.ONE_MINUTE * 60, e.ONE_HOUR = e.SIXTY_MINUTES, e.THREE_HOURS = e.ONE_HOUR * 3, e.SIX_HOURS = e.ONE_HOUR * 6, e.TWELVE_HOURS = e.ONE_HOUR * 12, e.TWENTY_FOUR_HOURS = e.ONE_HOUR * 24, e.ONE_DAY = e.TWENTY_FOUR_HOURS, e.THREE_DAYS = e.ONE_DAY * 3, e.FIVE_DAYS = e.ONE_DAY * 5, e.SEVEN_DAYS = e.ONE_DAY * 7, e.THIRTY_DAYS = e.ONE_DAY * 30, e.ONE_WEEK = e.SEVEN_DAYS, e.TWO_WEEKS = e.ONE_WEEK * 2, e.THREE_WEEKS = e.ONE_WEEK * 3, e.FOUR_WEEKS = e.ONE_WEEK * 4, e.ONE_YEAR = e.ONE_DAY * 365;
  }(Ci)), Ci;
}
var zo;
function Fc() {
  return zo || (zo = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = Vt;
    t.__exportStar(Mf(), e), t.__exportStar(jf(), e);
  }(xi)), xi;
}
var Ko;
function Bf() {
  if (Ko)
    return Ir;
  Ko = 1, Object.defineProperty(Ir, "__esModule", { value: !0 }), Ir.fromMiliseconds = Ir.toMiliseconds = void 0;
  const e = Fc();
  function t(n) {
    return n * e.ONE_THOUSAND;
  }
  Ir.toMiliseconds = t;
  function r(n) {
    return Math.floor(n / e.ONE_THOUSAND);
  }
  return Ir.fromMiliseconds = r, Ir;
}
var Vo;
function qf() {
  return Vo || (Vo = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = Vt;
    t.__exportStar($f(), e), t.__exportStar(Bf(), e);
  }(Ii)), Ii;
}
var zr = {}, ko;
function zf() {
  if (ko)
    return zr;
  ko = 1, Object.defineProperty(zr, "__esModule", { value: !0 }), zr.Watch = void 0;
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
  return zr.Watch = e, zr.default = e, zr;
}
var Ai = {}, pn = {}, Wo;
function Kf() {
  if (Wo)
    return pn;
  Wo = 1, Object.defineProperty(pn, "__esModule", { value: !0 }), pn.IWatch = void 0;
  class e {
  }
  return pn.IWatch = e, pn;
}
var Ho;
function Vf() {
  return Ho || (Ho = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), Vt.__exportStar(Kf(), e);
  }(Ai)), Ai;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = Vt;
  t.__exportStar(qf(), e), t.__exportStar(zf(), e), t.__exportStar(Vf(), e), t.__exportStar(Fc(), e);
})(te);
var Ri = {}, gn = {};
let Ur = class {
};
const kf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: Ur
}, Symbol.toStringTag, { value: "Module" })), Wf = /* @__PURE__ */ Cs(kf);
var Go;
function Hf() {
  if (Go)
    return gn;
  Go = 1, Object.defineProperty(gn, "__esModule", { value: !0 }), gn.IHeartBeat = void 0;
  const e = Wf;
  class t extends e.IEvents {
    constructor(n) {
      super();
    }
  }
  return gn.IHeartBeat = t, gn;
}
var Yo;
function Uc() {
  return Yo || (Yo = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), Vt.__exportStar(Hf(), e);
  }(Ri)), Ri;
}
var Ti = {}, Cr = {}, Jo;
function Gf() {
  if (Jo)
    return Cr;
  Jo = 1, Object.defineProperty(Cr, "__esModule", { value: !0 }), Cr.HEARTBEAT_EVENTS = Cr.HEARTBEAT_INTERVAL = void 0;
  const e = te;
  return Cr.HEARTBEAT_INTERVAL = e.FIVE_SECONDS, Cr.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, Cr;
}
var Xo;
function $c() {
  return Xo || (Xo = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), Vt.__exportStar(Gf(), e);
  }(Ti)), Ti;
}
var Qo;
function Yf() {
  if (Qo)
    return hn;
  Qo = 1, Object.defineProperty(hn, "__esModule", { value: !0 }), hn.HeartBeat = void 0;
  const e = Vt, t = Jt, r = te, n = Uc(), i = $c();
  class s extends n.IHeartBeat {
    constructor(a) {
      super(a), this.events = new t.EventEmitter(), this.interval = i.HEARTBEAT_INTERVAL, this.interval = (a == null ? void 0 : a.interval) || i.HEARTBEAT_INTERVAL;
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
      this.events.emit(i.HEARTBEAT_EVENTS.pulse);
    }
  }
  return hn.HeartBeat = s, hn;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = Vt;
  t.__exportStar(Yf(), e), t.__exportStar(Uc(), e), t.__exportStar($c(), e);
})(Qr);
var Re = {}, Pi, Zo;
function Jf() {
  if (Zo)
    return Pi;
  Zo = 1;
  function e(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  Pi = t;
  function t(r, n, i) {
    var s = i && i.stringify || e, u = 1;
    if (typeof r == "object" && r !== null) {
      var a = n.length + u;
      if (a === 1)
        return r;
      var l = new Array(a);
      l[0] = s(r);
      for (var h = 1; h < a; h++)
        l[h] = s(n[h]);
      return l.join(" ");
    }
    if (typeof r != "string")
      return r;
    var f = n.length;
    if (f === 0)
      return r;
    for (var g = "", v = 1 - u, m = -1, O = r && r.length || 0, x = 0; x < O; ) {
      if (r.charCodeAt(x) === 37 && x + 1 < O) {
        switch (m = m > -1 ? m : 0, r.charCodeAt(x + 1)) {
          case 100:
          case 102:
            if (v >= f || n[v] == null)
              break;
            m < x && (g += r.slice(m, x)), g += Number(n[v]), m = x + 2, x++;
            break;
          case 105:
            if (v >= f || n[v] == null)
              break;
            m < x && (g += r.slice(m, x)), g += Math.floor(Number(n[v])), m = x + 2, x++;
            break;
          case 79:
          case 111:
          case 106:
            if (v >= f || n[v] === void 0)
              break;
            m < x && (g += r.slice(m, x));
            var T = typeof n[v];
            if (T === "string") {
              g += "'" + n[v] + "'", m = x + 2, x++;
              break;
            }
            if (T === "function") {
              g += n[v].name || "<anonymous>", m = x + 2, x++;
              break;
            }
            g += s(n[v]), m = x + 2, x++;
            break;
          case 115:
            if (v >= f)
              break;
            m < x && (g += r.slice(m, x)), g += String(n[v]), m = x + 2, x++;
            break;
          case 37:
            m < x && (g += r.slice(m, x)), g += "%", m = x + 2, x++, v--;
            break;
        }
        ++v;
      }
      ++x;
    }
    return m === -1 ? r : (m < O && (g += r.slice(m)), g);
  }
  return Pi;
}
var Ni, ea;
function Xf() {
  if (ea)
    return Ni;
  ea = 1;
  const e = Jf();
  Ni = i;
  const t = E().console || {}, r = {
    mapHttpRequest: O,
    mapHttpResponse: O,
    wrapRequestSerializer: x,
    wrapResponseSerializer: x,
    wrapErrorSerializer: x,
    req: O,
    res: O,
    err: v
  };
  function n(d, o) {
    return Array.isArray(d) ? d.filter(function(L) {
      return L !== "!stdSerializers.err";
    }) : d === !0 ? Object.keys(o) : !1;
  }
  function i(d) {
    d = d || {}, d.browser = d.browser || {};
    const o = d.browser.transmit;
    if (o && typeof o.send != "function")
      throw Error("pino: transmit option must have a send function");
    const p = d.browser.write || t;
    d.browser.write && (d.browser.asObject = !0);
    const L = d.serializers || {}, F = n(d.browser.serialize, L);
    let U = d.browser.serialize;
    Array.isArray(d.browser.serialize) && d.browser.serialize.indexOf("!stdSerializers.err") > -1 && (U = !1);
    const $ = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof p == "function" && (p.error = p.fatal = p.warn = p.info = p.debug = p.trace = p), d.enabled === !1 && (d.level = "silent");
    const q = d.level || "info", S = Object.create(p);
    S.log || (S.log = T), Object.defineProperty(S, "levelVal", {
      get: G
    }), Object.defineProperty(S, "level", {
      get: K,
      set: z
    });
    const R = {
      transmit: o,
      serialize: F,
      asObject: d.browser.asObject,
      levels: $,
      timestamp: m(d)
    };
    S.levels = i.levels, S.level = q, S.setMaxListeners = S.getMaxListeners = S.emit = S.addListener = S.on = S.prependListener = S.once = S.prependOnceListener = S.removeListener = S.removeAllListeners = S.listeners = S.listenerCount = S.eventNames = S.write = S.flush = T, S.serializers = L, S._serialize = F, S._stdErrSerialize = U, S.child = k, o && (S._logEvent = g());
    function G() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function K() {
      return this._level;
    }
    function z(B) {
      if (B !== "silent" && !this.levels.values[B])
        throw Error("unknown level " + B);
      this._level = B, s(R, S, "error", "log"), s(R, S, "fatal", "error"), s(R, S, "warn", "error"), s(R, S, "info", "log"), s(R, S, "debug", "log"), s(R, S, "trace", "log");
    }
    function k(B, W) {
      if (!B)
        throw new Error("missing bindings for child Pino");
      W = W || {}, F && B.serializers && (W.serializers = B.serializers);
      const oe = W.serializers;
      if (F && oe) {
        var H = Object.assign({}, L, oe), ne = d.browser.serialize === !0 ? Object.keys(H) : F;
        delete B.serializers, l([B], ne, H, this._stdErrSerialize);
      }
      function Z(re) {
        this._childLevel = (re._childLevel | 0) + 1, this.error = h(re, B, "error"), this.fatal = h(re, B, "fatal"), this.warn = h(re, B, "warn"), this.info = h(re, B, "info"), this.debug = h(re, B, "debug"), this.trace = h(re, B, "trace"), H && (this.serializers = H, this._serialize = ne), o && (this._logEvent = g(
          [].concat(re._logEvent.bindings, B)
        ));
      }
      return Z.prototype = this, new Z(this);
    }
    return S;
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
  }, i.stdSerializers = r, i.stdTimeFunctions = Object.assign({}, { nullTime: M, epochTime: w, unixTime: I, isoTime: y });
  function s(d, o, p, L) {
    const F = Object.getPrototypeOf(o);
    o[p] = o.levelVal > o.levels.values[p] ? T : F[p] ? F[p] : t[p] || t[L] || T, u(d, o, p);
  }
  function u(d, o, p) {
    !d.transmit && o[p] === T || (o[p] = function(L) {
      return function() {
        const U = d.timestamp(), $ = new Array(arguments.length), q = Object.getPrototypeOf && Object.getPrototypeOf(this) === t ? t : this;
        for (var S = 0; S < $.length; S++)
          $[S] = arguments[S];
        if (d.serialize && !d.asObject && l($, this._serialize, this.serializers, this._stdErrSerialize), d.asObject ? L.call(q, a(this, p, $, U)) : L.apply(q, $), d.transmit) {
          const R = d.transmit.level || o.level, G = i.levels.values[R], K = i.levels.values[p];
          if (K < G)
            return;
          f(this, {
            ts: U,
            methodLevel: p,
            methodValue: K,
            transmitLevel: R,
            transmitValue: i.levels.values[d.transmit.level || o.level],
            send: d.transmit.send,
            val: o.levelVal
          }, $);
        }
      };
    }(o[p]));
  }
  function a(d, o, p, L) {
    d._serialize && l(p, d._serialize, d.serializers, d._stdErrSerialize);
    const F = p.slice();
    let U = F[0];
    const $ = {};
    L && ($.time = L), $.level = i.levels.values[o];
    let q = (d._childLevel | 0) + 1;
    if (q < 1 && (q = 1), U !== null && typeof U == "object") {
      for (; q-- && typeof F[0] == "object"; )
        Object.assign($, F.shift());
      U = F.length ? e(F.shift(), F) : void 0;
    } else
      typeof U == "string" && (U = e(F.shift(), F));
    return U !== void 0 && ($.msg = U), $;
  }
  function l(d, o, p, L) {
    for (const F in d)
      if (L && d[F] instanceof Error)
        d[F] = i.stdSerializers.err(d[F]);
      else if (typeof d[F] == "object" && !Array.isArray(d[F]))
        for (const U in d[F])
          o && o.indexOf(U) > -1 && U in p && (d[F][U] = p[U](d[F][U]));
  }
  function h(d, o, p) {
    return function() {
      const L = new Array(1 + arguments.length);
      L[0] = o;
      for (var F = 1; F < L.length; F++)
        L[F] = arguments[F - 1];
      return d[p].apply(this, L);
    };
  }
  function f(d, o, p) {
    const L = o.send, F = o.ts, U = o.methodLevel, $ = o.methodValue, q = o.val, S = d._logEvent.bindings;
    l(
      p,
      d._serialize || Object.keys(d.serializers),
      d.serializers,
      d._stdErrSerialize === void 0 ? !0 : d._stdErrSerialize
    ), d._logEvent.ts = F, d._logEvent.messages = p.filter(function(R) {
      return S.indexOf(R) === -1;
    }), d._logEvent.level.label = U, d._logEvent.level.value = $, L(U, d._logEvent, q), d._logEvent = g(S);
  }
  function g(d) {
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
  function m(d) {
    return typeof d.timestamp == "function" ? d.timestamp : d.timestamp === !1 ? M : w;
  }
  function O() {
    return {};
  }
  function x(d) {
    return d;
  }
  function T() {
  }
  function M() {
    return !1;
  }
  function w() {
    return Date.now();
  }
  function I() {
    return Math.round(Date.now() / 1e3);
  }
  function y() {
    return new Date(Date.now()).toISOString();
  }
  function E() {
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
  return Ni;
}
var Ar = {}, ta;
function Mc() {
  return ta || (ta = 1, Object.defineProperty(Ar, "__esModule", { value: !0 }), Ar.PINO_CUSTOM_CONTEXT_KEY = Ar.PINO_LOGGER_DEFAULTS = void 0, Ar.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, Ar.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), Ar;
}
var St = {}, ra;
function Qf() {
  if (ra)
    return St;
  ra = 1, Object.defineProperty(St, "__esModule", { value: !0 }), St.generateChildLogger = St.formatChildLoggerContext = St.getLoggerContext = St.setBrowserLoggerContext = St.getBrowserLoggerContext = St.getDefaultLoggerOptions = void 0;
  const e = Mc();
  function t(a) {
    return Object.assign(Object.assign({}, a), { level: (a == null ? void 0 : a.level) || e.PINO_LOGGER_DEFAULTS.level });
  }
  St.getDefaultLoggerOptions = t;
  function r(a, l = e.PINO_CUSTOM_CONTEXT_KEY) {
    return a[l] || "";
  }
  St.getBrowserLoggerContext = r;
  function n(a, l, h = e.PINO_CUSTOM_CONTEXT_KEY) {
    return a[h] = l, a;
  }
  St.setBrowserLoggerContext = n;
  function i(a, l = e.PINO_CUSTOM_CONTEXT_KEY) {
    let h = "";
    return typeof a.bindings > "u" ? h = r(a, l) : h = a.bindings().context || "", h;
  }
  St.getLoggerContext = i;
  function s(a, l, h = e.PINO_CUSTOM_CONTEXT_KEY) {
    const f = i(a, h);
    return f.trim() ? `${f}/${l}` : l;
  }
  St.formatChildLoggerContext = s;
  function u(a, l, h = e.PINO_CUSTOM_CONTEXT_KEY) {
    const f = s(a, l, h), g = a.child({ context: f });
    return n(g, f, h);
  }
  return St.generateChildLogger = u, St;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.pino = void 0;
  const t = Vt, r = t.__importDefault(Xf());
  Object.defineProperty(e, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), t.__exportStar(Mc(), e), t.__exportStar(Qf(), e);
})(Re);
let Zf = class extends Ur {
  constructor(t) {
    super(), this.opts = t, this.protocol = "wc", this.version = 2;
  }
}, eh = class extends Ur {
  constructor(t, r) {
    super(), this.core = t, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}, th = class {
  constructor(t, r) {
    this.logger = t, this.core = r;
  }
}, rh = class extends Ur {
  constructor(t, r) {
    super(), this.relayer = t, this.logger = r;
  }
}, nh = class extends Ur {
  constructor(t) {
    super();
  }
}, ih = class {
  constructor(t, r, n, i) {
    this.core = t, this.logger = r, this.name = n;
  }
}, sh = class extends Ur {
  constructor(t, r) {
    super(), this.relayer = t, this.logger = r;
  }
}, oh = class extends Ur {
  constructor(t, r) {
    super(), this.core = t, this.logger = r;
  }
}, ah = class {
  constructor(t, r) {
    this.projectId = t, this.logger = r;
  }
}, ch = class {
  constructor(t) {
    this.opts = t, this.protocol = "wc", this.version = 2;
  }
}, uh = class {
  constructor(t) {
    this.client = t;
  }
};
const lh = (e) => JSON.stringify(e, (t, r) => typeof r == "bigint" ? r.toString() + "n" : r), fh = (e) => {
  const t = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = e.replace(t, '$1"$2n"$3');
  return JSON.parse(r, (n, i) => typeof i == "string" && i.match(/^\d+n$/) ? BigInt(i.substring(0, i.length - 1)) : i);
};
function jc(e) {
  if (typeof e != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof e}`);
  try {
    return fh(e);
  } catch {
    return e;
  }
}
function Rs(e) {
  return typeof e == "string" ? e : lh(e) || "";
}
var Ts = {}, Zr = {}, hi = {}, di = {};
Object.defineProperty(di, "__esModule", { value: !0 });
di.BrowserRandomSource = void 0;
const na = 65536;
class hh {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const t = typeof self < "u" ? self.crypto || self.msCrypto : null;
    t && t.getRandomValues !== void 0 && (this._crypto = t, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(t) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const r = new Uint8Array(t);
    for (let n = 0; n < r.length; n += na)
      this._crypto.getRandomValues(r.subarray(n, n + Math.min(r.length - n, na)));
    return r;
  }
}
di.BrowserRandomSource = hh;
function dh(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var pi = {}, Ft = {};
Object.defineProperty(Ft, "__esModule", { value: !0 });
function ph(e) {
  for (var t = 0; t < e.length; t++)
    e[t] = 0;
  return e;
}
Ft.wipe = ph;
const gh = {}, yh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gh
}, Symbol.toStringTag, { value: "Module" })), bh = /* @__PURE__ */ Cs(yh);
Object.defineProperty(pi, "__esModule", { value: !0 });
pi.NodeRandomSource = void 0;
const vh = Ft;
class mh {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof dh < "u") {
      const t = bh;
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
    return (0, vh.wipe)(r), n;
  }
}
pi.NodeRandomSource = mh;
Object.defineProperty(hi, "__esModule", { value: !0 });
hi.SystemRandomSource = void 0;
const _h = di, wh = pi;
class Eh {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new _h.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new wh.NodeRandomSource(), this._source.isAvailable) {
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
hi.SystemRandomSource = Eh;
var le = {}, Bc = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  function t(a, l) {
    var h = a >>> 16 & 65535, f = a & 65535, g = l >>> 16 & 65535, v = l & 65535;
    return f * v + (h * v + f * g << 16 >>> 0) | 0;
  }
  e.mul = Math.imul || t;
  function r(a, l) {
    return a + l | 0;
  }
  e.add = r;
  function n(a, l) {
    return a - l | 0;
  }
  e.sub = n;
  function i(a, l) {
    return a << l | a >>> 32 - l;
  }
  e.rotl = i;
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
})(Bc);
Object.defineProperty(le, "__esModule", { value: !0 });
var qc = Bc;
function Sh(e, t) {
  return t === void 0 && (t = 0), (e[t + 0] << 8 | e[t + 1]) << 16 >> 16;
}
le.readInt16BE = Sh;
function Dh(e, t) {
  return t === void 0 && (t = 0), (e[t + 0] << 8 | e[t + 1]) >>> 0;
}
le.readUint16BE = Dh;
function Oh(e, t) {
  return t === void 0 && (t = 0), (e[t + 1] << 8 | e[t]) << 16 >> 16;
}
le.readInt16LE = Oh;
function Ih(e, t) {
  return t === void 0 && (t = 0), (e[t + 1] << 8 | e[t]) >>> 0;
}
le.readUint16LE = Ih;
function zc(e, t, r) {
  return t === void 0 && (t = new Uint8Array(2)), r === void 0 && (r = 0), t[r + 0] = e >>> 8, t[r + 1] = e >>> 0, t;
}
le.writeUint16BE = zc;
le.writeInt16BE = zc;
function Kc(e, t, r) {
  return t === void 0 && (t = new Uint8Array(2)), r === void 0 && (r = 0), t[r + 0] = e >>> 0, t[r + 1] = e >>> 8, t;
}
le.writeUint16LE = Kc;
le.writeInt16LE = Kc;
function ss(e, t) {
  return t === void 0 && (t = 0), e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
}
le.readInt32BE = ss;
function os(e, t) {
  return t === void 0 && (t = 0), (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0;
}
le.readUint32BE = os;
function as(e, t) {
  return t === void 0 && (t = 0), e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t];
}
le.readInt32LE = as;
function cs(e, t) {
  return t === void 0 && (t = 0), (e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]) >>> 0;
}
le.readUint32LE = cs;
function Xn(e, t, r) {
  return t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0), t[r + 0] = e >>> 24, t[r + 1] = e >>> 16, t[r + 2] = e >>> 8, t[r + 3] = e >>> 0, t;
}
le.writeUint32BE = Xn;
le.writeInt32BE = Xn;
function Qn(e, t, r) {
  return t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0), t[r + 0] = e >>> 0, t[r + 1] = e >>> 8, t[r + 2] = e >>> 16, t[r + 3] = e >>> 24, t;
}
le.writeUint32LE = Qn;
le.writeInt32LE = Qn;
function xh(e, t) {
  t === void 0 && (t = 0);
  var r = ss(e, t), n = ss(e, t + 4);
  return r * 4294967296 + n - (n >> 31) * 4294967296;
}
le.readInt64BE = xh;
function Ch(e, t) {
  t === void 0 && (t = 0);
  var r = os(e, t), n = os(e, t + 4);
  return r * 4294967296 + n;
}
le.readUint64BE = Ch;
function Ah(e, t) {
  t === void 0 && (t = 0);
  var r = as(e, t), n = as(e, t + 4);
  return n * 4294967296 + r - (r >> 31) * 4294967296;
}
le.readInt64LE = Ah;
function Rh(e, t) {
  t === void 0 && (t = 0);
  var r = cs(e, t), n = cs(e, t + 4);
  return n * 4294967296 + r;
}
le.readUint64LE = Rh;
function Vc(e, t, r) {
  return t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0), Xn(e / 4294967296 >>> 0, t, r), Xn(e >>> 0, t, r + 4), t;
}
le.writeUint64BE = Vc;
le.writeInt64BE = Vc;
function kc(e, t, r) {
  return t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0), Qn(e >>> 0, t, r), Qn(e / 4294967296 >>> 0, t, r + 4), t;
}
le.writeUint64LE = kc;
le.writeInt64LE = kc;
function Th(e, t, r) {
  if (r === void 0 && (r = 0), e % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (e / 8 > t.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var n = 0, i = 1, s = e / 8 + r - 1; s >= r; s--)
    n += t[s] * i, i *= 256;
  return n;
}
le.readUintBE = Th;
function Ph(e, t, r) {
  if (r === void 0 && (r = 0), e % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (e / 8 > t.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var n = 0, i = 1, s = r; s < r + e / 8; s++)
    n += t[s] * i, i *= 256;
  return n;
}
le.readUintLE = Ph;
function Nh(e, t, r, n) {
  if (r === void 0 && (r = new Uint8Array(e / 8)), n === void 0 && (n = 0), e % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!qc.isSafeInteger(t))
    throw new Error("writeUintBE value must be an integer");
  for (var i = 1, s = e / 8 + n - 1; s >= n; s--)
    r[s] = t / i & 255, i *= 256;
  return r;
}
le.writeUintBE = Nh;
function Lh(e, t, r, n) {
  if (r === void 0 && (r = new Uint8Array(e / 8)), n === void 0 && (n = 0), e % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!qc.isSafeInteger(t))
    throw new Error("writeUintLE value must be an integer");
  for (var i = 1, s = n; s < n + e / 8; s++)
    r[s] = t / i & 255, i *= 256;
  return r;
}
le.writeUintLE = Lh;
function Fh(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat32(t);
}
le.readFloat32BE = Fh;
function Uh(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat32(t, !0);
}
le.readFloat32LE = Uh;
function $h(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat64(t);
}
le.readFloat64BE = $h;
function Mh(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat64(t, !0);
}
le.readFloat64LE = Mh;
function jh(e, t, r) {
  t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return n.setFloat32(r, e), t;
}
le.writeFloat32BE = jh;
function Bh(e, t, r) {
  t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return n.setFloat32(r, e, !0), t;
}
le.writeFloat32LE = Bh;
function qh(e, t, r) {
  t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return n.setFloat64(r, e), t;
}
le.writeFloat64BE = qh;
function zh(e, t, r) {
  t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return n.setFloat64(r, e, !0), t;
}
le.writeFloat64LE = zh;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.randomStringForEntropy = e.randomString = e.randomUint32 = e.randomBytes = e.defaultRandomSource = void 0;
  const t = hi, r = le, n = Ft;
  e.defaultRandomSource = new t.SystemRandomSource();
  function i(h, f = e.defaultRandomSource) {
    return f.randomBytes(h);
  }
  e.randomBytes = i;
  function s(h = e.defaultRandomSource) {
    const f = i(4, h), g = (0, r.readUint32LE)(f);
    return (0, n.wipe)(f), g;
  }
  e.randomUint32 = s;
  const u = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function a(h, f = u, g = e.defaultRandomSource) {
    if (f.length < 2)
      throw new Error("randomString charset is too short");
    if (f.length > 256)
      throw new Error("randomString charset is too long");
    let v = "";
    const m = f.length, O = 256 - 256 % m;
    for (; h > 0; ) {
      const x = i(Math.ceil(h * 256 / O), g);
      for (let T = 0; T < x.length && h > 0; T++) {
        const M = x[T];
        M < O && (v += f.charAt(M % m), h--);
      }
      (0, n.wipe)(x);
    }
    return v;
  }
  e.randomString = a;
  function l(h, f = u, g = e.defaultRandomSource) {
    const v = Math.ceil(h / (Math.log(f.length) / Math.LN2));
    return a(v, f, g);
  }
  e.randomStringForEntropy = l;
})(Zr);
var Wc = {};
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
      }, a.prototype.update = function(l, h) {
        if (h === void 0 && (h = l.length), this._finished)
          throw new Error("SHA512: can't update because hash was finished.");
        var f = 0;
        if (this._bytesHashed += h, this._bufferLength > 0) {
          for (; this._bufferLength < e.BLOCK_SIZE && h > 0; )
            this._buffer[this._bufferLength++] = l[f++], h--;
          this._bufferLength === this.blockSize && (s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (h >= this.blockSize && (f = s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, l, f, h), h %= this.blockSize); h > 0; )
          this._buffer[this._bufferLength++] = l[f++], h--;
        return this;
      }, a.prototype.finish = function(l) {
        if (!this._finished) {
          var h = this._bytesHashed, f = this._bufferLength, g = h / 536870912 | 0, v = h << 3, m = h % 128 < 112 ? 128 : 256;
          this._buffer[f] = 128;
          for (var O = f + 1; O < m - 8; O++)
            this._buffer[O] = 0;
          t.writeUint32BE(g, this._buffer, m - 8), t.writeUint32BE(v, this._buffer, m - 4), s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, m), this._finished = !0;
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
  function s(a, l, h, f, g, v, m) {
    for (var O = h[0], x = h[1], T = h[2], M = h[3], w = h[4], I = h[5], y = h[6], E = h[7], d = f[0], o = f[1], p = f[2], L = f[3], F = f[4], U = f[5], $ = f[6], q = f[7], S, R, G, K, z, k, B, W; m >= 128; ) {
      for (var oe = 0; oe < 16; oe++) {
        var H = 8 * oe + v;
        a[oe] = t.readUint32BE(g, H), l[oe] = t.readUint32BE(g, H + 4);
      }
      for (var oe = 0; oe < 80; oe++) {
        var ne = O, Z = x, re = T, N = M, P = w, C = I, c = y, D = E, Y = d, Q = o, be = p, ve = L, he = F, Ie = U, Be = $, Le = q;
        if (S = E, R = q, z = R & 65535, k = R >>> 16, B = S & 65535, W = S >>> 16, S = (w >>> 14 | F << 32 - 14) ^ (w >>> 18 | F << 32 - 18) ^ (F >>> 41 - 32 | w << 32 - (41 - 32)), R = (F >>> 14 | w << 32 - 14) ^ (F >>> 18 | w << 32 - 18) ^ (w >>> 41 - 32 | F << 32 - (41 - 32)), z += R & 65535, k += R >>> 16, B += S & 65535, W += S >>> 16, S = w & I ^ ~w & y, R = F & U ^ ~F & $, z += R & 65535, k += R >>> 16, B += S & 65535, W += S >>> 16, S = i[oe * 2], R = i[oe * 2 + 1], z += R & 65535, k += R >>> 16, B += S & 65535, W += S >>> 16, S = a[oe % 16], R = l[oe % 16], z += R & 65535, k += R >>> 16, B += S & 65535, W += S >>> 16, k += z >>> 16, B += k >>> 16, W += B >>> 16, G = B & 65535 | W << 16, K = z & 65535 | k << 16, S = G, R = K, z = R & 65535, k = R >>> 16, B = S & 65535, W = S >>> 16, S = (O >>> 28 | d << 32 - 28) ^ (d >>> 34 - 32 | O << 32 - (34 - 32)) ^ (d >>> 39 - 32 | O << 32 - (39 - 32)), R = (d >>> 28 | O << 32 - 28) ^ (O >>> 34 - 32 | d << 32 - (34 - 32)) ^ (O >>> 39 - 32 | d << 32 - (39 - 32)), z += R & 65535, k += R >>> 16, B += S & 65535, W += S >>> 16, S = O & x ^ O & T ^ x & T, R = d & o ^ d & p ^ o & p, z += R & 65535, k += R >>> 16, B += S & 65535, W += S >>> 16, k += z >>> 16, B += k >>> 16, W += B >>> 16, D = B & 65535 | W << 16, Le = z & 65535 | k << 16, S = N, R = ve, z = R & 65535, k = R >>> 16, B = S & 65535, W = S >>> 16, S = G, R = K, z += R & 65535, k += R >>> 16, B += S & 65535, W += S >>> 16, k += z >>> 16, B += k >>> 16, W += B >>> 16, N = B & 65535 | W << 16, ve = z & 65535 | k << 16, x = ne, T = Z, M = re, w = N, I = P, y = C, E = c, O = D, o = Y, p = Q, L = be, F = ve, U = he, $ = Ie, q = Be, d = Le, oe % 16 === 15)
          for (var H = 0; H < 16; H++)
            S = a[H], R = l[H], z = R & 65535, k = R >>> 16, B = S & 65535, W = S >>> 16, S = a[(H + 9) % 16], R = l[(H + 9) % 16], z += R & 65535, k += R >>> 16, B += S & 65535, W += S >>> 16, G = a[(H + 1) % 16], K = l[(H + 1) % 16], S = (G >>> 1 | K << 32 - 1) ^ (G >>> 8 | K << 32 - 8) ^ G >>> 7, R = (K >>> 1 | G << 32 - 1) ^ (K >>> 8 | G << 32 - 8) ^ (K >>> 7 | G << 32 - 7), z += R & 65535, k += R >>> 16, B += S & 65535, W += S >>> 16, G = a[(H + 14) % 16], K = l[(H + 14) % 16], S = (G >>> 19 | K << 32 - 19) ^ (K >>> 61 - 32 | G << 32 - (61 - 32)) ^ G >>> 6, R = (K >>> 19 | G << 32 - 19) ^ (G >>> 61 - 32 | K << 32 - (61 - 32)) ^ (K >>> 6 | G << 32 - 6), z += R & 65535, k += R >>> 16, B += S & 65535, W += S >>> 16, k += z >>> 16, B += k >>> 16, W += B >>> 16, a[H] = B & 65535 | W << 16, l[H] = z & 65535 | k << 16;
      }
      S = O, R = d, z = R & 65535, k = R >>> 16, B = S & 65535, W = S >>> 16, S = h[0], R = f[0], z += R & 65535, k += R >>> 16, B += S & 65535, W += S >>> 16, k += z >>> 16, B += k >>> 16, W += B >>> 16, h[0] = O = B & 65535 | W << 16, f[0] = d = z & 65535 | k << 16, S = x, R = o, z = R & 65535, k = R >>> 16, B = S & 65535, W = S >>> 16, S = h[1], R = f[1], z += R & 65535, k += R >>> 16, B += S & 65535, W += S >>> 16, k += z >>> 16, B += k >>> 16, W += B >>> 16, h[1] = x = B & 65535 | W << 16, f[1] = o = z & 65535 | k << 16, S = T, R = p, z = R & 65535, k = R >>> 16, B = S & 65535, W = S >>> 16, S = h[2], R = f[2], z += R & 65535, k += R >>> 16, B += S & 65535, W += S >>> 16, k += z >>> 16, B += k >>> 16, W += B >>> 16, h[2] = T = B & 65535 | W << 16, f[2] = p = z & 65535 | k << 16, S = M, R = L, z = R & 65535, k = R >>> 16, B = S & 65535, W = S >>> 16, S = h[3], R = f[3], z += R & 65535, k += R >>> 16, B += S & 65535, W += S >>> 16, k += z >>> 16, B += k >>> 16, W += B >>> 16, h[3] = M = B & 65535 | W << 16, f[3] = L = z & 65535 | k << 16, S = w, R = F, z = R & 65535, k = R >>> 16, B = S & 65535, W = S >>> 16, S = h[4], R = f[4], z += R & 65535, k += R >>> 16, B += S & 65535, W += S >>> 16, k += z >>> 16, B += k >>> 16, W += B >>> 16, h[4] = w = B & 65535 | W << 16, f[4] = F = z & 65535 | k << 16, S = I, R = U, z = R & 65535, k = R >>> 16, B = S & 65535, W = S >>> 16, S = h[5], R = f[5], z += R & 65535, k += R >>> 16, B += S & 65535, W += S >>> 16, k += z >>> 16, B += k >>> 16, W += B >>> 16, h[5] = I = B & 65535 | W << 16, f[5] = U = z & 65535 | k << 16, S = y, R = $, z = R & 65535, k = R >>> 16, B = S & 65535, W = S >>> 16, S = h[6], R = f[6], z += R & 65535, k += R >>> 16, B += S & 65535, W += S >>> 16, k += z >>> 16, B += k >>> 16, W += B >>> 16, h[6] = y = B & 65535 | W << 16, f[6] = $ = z & 65535 | k << 16, S = E, R = q, z = R & 65535, k = R >>> 16, B = S & 65535, W = S >>> 16, S = h[7], R = f[7], z += R & 65535, k += R >>> 16, B += S & 65535, W += S >>> 16, k += z >>> 16, B += k >>> 16, W += B >>> 16, h[7] = E = B & 65535 | W << 16, f[7] = q = z & 65535 | k << 16, v += 128, m -= 128;
    }
    return v;
  }
  function u(a) {
    var l = new n();
    l.update(a);
    var h = l.digest();
    return l.clean(), h;
  }
  e.hash = u;
})(Wc);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.convertSecretKeyToX25519 = e.convertPublicKeyToX25519 = e.verify = e.sign = e.extractPublicKeyFromSecretKey = e.generateKeyPair = e.generateKeyPairFromSeed = e.SEED_LENGTH = e.SECRET_KEY_LENGTH = e.PUBLIC_KEY_LENGTH = e.SIGNATURE_LENGTH = void 0;
  const t = Zr, r = Wc, n = Ft;
  e.SIGNATURE_LENGTH = 64, e.PUBLIC_KEY_LENGTH = 32, e.SECRET_KEY_LENGTH = 64, e.SEED_LENGTH = 32;
  function i(N) {
    const P = new Float64Array(16);
    if (N)
      for (let C = 0; C < N.length; C++)
        P[C] = N[C];
    return P;
  }
  const s = new Uint8Array(32);
  s[0] = 9;
  const u = i(), a = i([1]), l = i([
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
  ]), g = i([
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
  ]), v = i([
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
  function m(N, P) {
    for (let C = 0; C < 16; C++)
      N[C] = P[C] | 0;
  }
  function O(N) {
    let P = 1;
    for (let C = 0; C < 16; C++) {
      let c = N[C] + P + 65535;
      P = Math.floor(c / 65536), N[C] = c - P * 65536;
    }
    N[0] += P - 1 + 37 * (P - 1);
  }
  function x(N, P, C) {
    const c = ~(C - 1);
    for (let D = 0; D < 16; D++) {
      const Y = c & (N[D] ^ P[D]);
      N[D] ^= Y, P[D] ^= Y;
    }
  }
  function T(N, P) {
    const C = i(), c = i();
    for (let D = 0; D < 16; D++)
      c[D] = P[D];
    O(c), O(c), O(c);
    for (let D = 0; D < 2; D++) {
      C[0] = c[0] - 65517;
      for (let Q = 1; Q < 15; Q++)
        C[Q] = c[Q] - 65535 - (C[Q - 1] >> 16 & 1), C[Q - 1] &= 65535;
      C[15] = c[15] - 32767 - (C[14] >> 16 & 1);
      const Y = C[15] >> 16 & 1;
      C[14] &= 65535, x(c, C, 1 - Y);
    }
    for (let D = 0; D < 16; D++)
      N[2 * D] = c[D] & 255, N[2 * D + 1] = c[D] >> 8;
  }
  function M(N, P) {
    let C = 0;
    for (let c = 0; c < 32; c++)
      C |= N[c] ^ P[c];
    return (1 & C - 1 >>> 8) - 1;
  }
  function w(N, P) {
    const C = new Uint8Array(32), c = new Uint8Array(32);
    return T(C, N), T(c, P), M(C, c);
  }
  function I(N) {
    const P = new Uint8Array(32);
    return T(P, N), P[0] & 1;
  }
  function y(N, P) {
    for (let C = 0; C < 16; C++)
      N[C] = P[2 * C] + (P[2 * C + 1] << 8);
    N[15] &= 32767;
  }
  function E(N, P, C) {
    for (let c = 0; c < 16; c++)
      N[c] = P[c] + C[c];
  }
  function d(N, P, C) {
    for (let c = 0; c < 16; c++)
      N[c] = P[c] - C[c];
  }
  function o(N, P, C) {
    let c, D, Y = 0, Q = 0, be = 0, ve = 0, he = 0, Ie = 0, Be = 0, Le = 0, De = 0, we = 0, de = 0, ge = 0, pe = 0, ue = 0, ce = 0, ie = 0, ye = 0, me = 0, ae = 0, Ee = 0, xe = 0, Te = 0, Pe = 0, Ce = 0, Rt = 0, Ut = 0, Xt = 0, ft = 0, Qt = 0, $t = 0, fr = 0, qe = C[0], $e = C[1], We = C[2], Ke = C[3], He = C[4], Me = C[5], Qe = C[6], tt = C[7], rt = C[8], Ze = C[9], nt = C[10], et = C[11], Ge = C[12], Fe = C[13], _ = C[14], j = C[15];
    c = P[0], Y += c * qe, Q += c * $e, be += c * We, ve += c * Ke, he += c * He, Ie += c * Me, Be += c * Qe, Le += c * tt, De += c * rt, we += c * Ze, de += c * nt, ge += c * et, pe += c * Ge, ue += c * Fe, ce += c * _, ie += c * j, c = P[1], Q += c * qe, be += c * $e, ve += c * We, he += c * Ke, Ie += c * He, Be += c * Me, Le += c * Qe, De += c * tt, we += c * rt, de += c * Ze, ge += c * nt, pe += c * et, ue += c * Ge, ce += c * Fe, ie += c * _, ye += c * j, c = P[2], be += c * qe, ve += c * $e, he += c * We, Ie += c * Ke, Be += c * He, Le += c * Me, De += c * Qe, we += c * tt, de += c * rt, ge += c * Ze, pe += c * nt, ue += c * et, ce += c * Ge, ie += c * Fe, ye += c * _, me += c * j, c = P[3], ve += c * qe, he += c * $e, Ie += c * We, Be += c * Ke, Le += c * He, De += c * Me, we += c * Qe, de += c * tt, ge += c * rt, pe += c * Ze, ue += c * nt, ce += c * et, ie += c * Ge, ye += c * Fe, me += c * _, ae += c * j, c = P[4], he += c * qe, Ie += c * $e, Be += c * We, Le += c * Ke, De += c * He, we += c * Me, de += c * Qe, ge += c * tt, pe += c * rt, ue += c * Ze, ce += c * nt, ie += c * et, ye += c * Ge, me += c * Fe, ae += c * _, Ee += c * j, c = P[5], Ie += c * qe, Be += c * $e, Le += c * We, De += c * Ke, we += c * He, de += c * Me, ge += c * Qe, pe += c * tt, ue += c * rt, ce += c * Ze, ie += c * nt, ye += c * et, me += c * Ge, ae += c * Fe, Ee += c * _, xe += c * j, c = P[6], Be += c * qe, Le += c * $e, De += c * We, we += c * Ke, de += c * He, ge += c * Me, pe += c * Qe, ue += c * tt, ce += c * rt, ie += c * Ze, ye += c * nt, me += c * et, ae += c * Ge, Ee += c * Fe, xe += c * _, Te += c * j, c = P[7], Le += c * qe, De += c * $e, we += c * We, de += c * Ke, ge += c * He, pe += c * Me, ue += c * Qe, ce += c * tt, ie += c * rt, ye += c * Ze, me += c * nt, ae += c * et, Ee += c * Ge, xe += c * Fe, Te += c * _, Pe += c * j, c = P[8], De += c * qe, we += c * $e, de += c * We, ge += c * Ke, pe += c * He, ue += c * Me, ce += c * Qe, ie += c * tt, ye += c * rt, me += c * Ze, ae += c * nt, Ee += c * et, xe += c * Ge, Te += c * Fe, Pe += c * _, Ce += c * j, c = P[9], we += c * qe, de += c * $e, ge += c * We, pe += c * Ke, ue += c * He, ce += c * Me, ie += c * Qe, ye += c * tt, me += c * rt, ae += c * Ze, Ee += c * nt, xe += c * et, Te += c * Ge, Pe += c * Fe, Ce += c * _, Rt += c * j, c = P[10], de += c * qe, ge += c * $e, pe += c * We, ue += c * Ke, ce += c * He, ie += c * Me, ye += c * Qe, me += c * tt, ae += c * rt, Ee += c * Ze, xe += c * nt, Te += c * et, Pe += c * Ge, Ce += c * Fe, Rt += c * _, Ut += c * j, c = P[11], ge += c * qe, pe += c * $e, ue += c * We, ce += c * Ke, ie += c * He, ye += c * Me, me += c * Qe, ae += c * tt, Ee += c * rt, xe += c * Ze, Te += c * nt, Pe += c * et, Ce += c * Ge, Rt += c * Fe, Ut += c * _, Xt += c * j, c = P[12], pe += c * qe, ue += c * $e, ce += c * We, ie += c * Ke, ye += c * He, me += c * Me, ae += c * Qe, Ee += c * tt, xe += c * rt, Te += c * Ze, Pe += c * nt, Ce += c * et, Rt += c * Ge, Ut += c * Fe, Xt += c * _, ft += c * j, c = P[13], ue += c * qe, ce += c * $e, ie += c * We, ye += c * Ke, me += c * He, ae += c * Me, Ee += c * Qe, xe += c * tt, Te += c * rt, Pe += c * Ze, Ce += c * nt, Rt += c * et, Ut += c * Ge, Xt += c * Fe, ft += c * _, Qt += c * j, c = P[14], ce += c * qe, ie += c * $e, ye += c * We, me += c * Ke, ae += c * He, Ee += c * Me, xe += c * Qe, Te += c * tt, Pe += c * rt, Ce += c * Ze, Rt += c * nt, Ut += c * et, Xt += c * Ge, ft += c * Fe, Qt += c * _, $t += c * j, c = P[15], ie += c * qe, ye += c * $e, me += c * We, ae += c * Ke, Ee += c * He, xe += c * Me, Te += c * Qe, Pe += c * tt, Ce += c * rt, Rt += c * Ze, Ut += c * nt, Xt += c * et, ft += c * Ge, Qt += c * Fe, $t += c * _, fr += c * j, Y += 38 * ye, Q += 38 * me, be += 38 * ae, ve += 38 * Ee, he += 38 * xe, Ie += 38 * Te, Be += 38 * Pe, Le += 38 * Ce, De += 38 * Rt, we += 38 * Ut, de += 38 * Xt, ge += 38 * ft, pe += 38 * Qt, ue += 38 * $t, ce += 38 * fr, D = 1, c = Y + D + 65535, D = Math.floor(c / 65536), Y = c - D * 65536, c = Q + D + 65535, D = Math.floor(c / 65536), Q = c - D * 65536, c = be + D + 65535, D = Math.floor(c / 65536), be = c - D * 65536, c = ve + D + 65535, D = Math.floor(c / 65536), ve = c - D * 65536, c = he + D + 65535, D = Math.floor(c / 65536), he = c - D * 65536, c = Ie + D + 65535, D = Math.floor(c / 65536), Ie = c - D * 65536, c = Be + D + 65535, D = Math.floor(c / 65536), Be = c - D * 65536, c = Le + D + 65535, D = Math.floor(c / 65536), Le = c - D * 65536, c = De + D + 65535, D = Math.floor(c / 65536), De = c - D * 65536, c = we + D + 65535, D = Math.floor(c / 65536), we = c - D * 65536, c = de + D + 65535, D = Math.floor(c / 65536), de = c - D * 65536, c = ge + D + 65535, D = Math.floor(c / 65536), ge = c - D * 65536, c = pe + D + 65535, D = Math.floor(c / 65536), pe = c - D * 65536, c = ue + D + 65535, D = Math.floor(c / 65536), ue = c - D * 65536, c = ce + D + 65535, D = Math.floor(c / 65536), ce = c - D * 65536, c = ie + D + 65535, D = Math.floor(c / 65536), ie = c - D * 65536, Y += D - 1 + 37 * (D - 1), D = 1, c = Y + D + 65535, D = Math.floor(c / 65536), Y = c - D * 65536, c = Q + D + 65535, D = Math.floor(c / 65536), Q = c - D * 65536, c = be + D + 65535, D = Math.floor(c / 65536), be = c - D * 65536, c = ve + D + 65535, D = Math.floor(c / 65536), ve = c - D * 65536, c = he + D + 65535, D = Math.floor(c / 65536), he = c - D * 65536, c = Ie + D + 65535, D = Math.floor(c / 65536), Ie = c - D * 65536, c = Be + D + 65535, D = Math.floor(c / 65536), Be = c - D * 65536, c = Le + D + 65535, D = Math.floor(c / 65536), Le = c - D * 65536, c = De + D + 65535, D = Math.floor(c / 65536), De = c - D * 65536, c = we + D + 65535, D = Math.floor(c / 65536), we = c - D * 65536, c = de + D + 65535, D = Math.floor(c / 65536), de = c - D * 65536, c = ge + D + 65535, D = Math.floor(c / 65536), ge = c - D * 65536, c = pe + D + 65535, D = Math.floor(c / 65536), pe = c - D * 65536, c = ue + D + 65535, D = Math.floor(c / 65536), ue = c - D * 65536, c = ce + D + 65535, D = Math.floor(c / 65536), ce = c - D * 65536, c = ie + D + 65535, D = Math.floor(c / 65536), ie = c - D * 65536, Y += D - 1 + 37 * (D - 1), N[0] = Y, N[1] = Q, N[2] = be, N[3] = ve, N[4] = he, N[5] = Ie, N[6] = Be, N[7] = Le, N[8] = De, N[9] = we, N[10] = de, N[11] = ge, N[12] = pe, N[13] = ue, N[14] = ce, N[15] = ie;
  }
  function p(N, P) {
    o(N, P, P);
  }
  function L(N, P) {
    const C = i();
    let c;
    for (c = 0; c < 16; c++)
      C[c] = P[c];
    for (c = 253; c >= 0; c--)
      p(C, C), c !== 2 && c !== 4 && o(C, C, P);
    for (c = 0; c < 16; c++)
      N[c] = C[c];
  }
  function F(N, P) {
    const C = i();
    let c;
    for (c = 0; c < 16; c++)
      C[c] = P[c];
    for (c = 250; c >= 0; c--)
      p(C, C), c !== 1 && o(C, C, P);
    for (c = 0; c < 16; c++)
      N[c] = C[c];
  }
  function U(N, P) {
    const C = i(), c = i(), D = i(), Y = i(), Q = i(), be = i(), ve = i(), he = i(), Ie = i();
    d(C, N[1], N[0]), d(Ie, P[1], P[0]), o(C, C, Ie), E(c, N[0], N[1]), E(Ie, P[0], P[1]), o(c, c, Ie), o(D, N[3], P[3]), o(D, D, h), o(Y, N[2], P[2]), E(Y, Y, Y), d(Q, c, C), d(be, Y, D), E(ve, Y, D), E(he, c, C), o(N[0], Q, be), o(N[1], he, ve), o(N[2], ve, be), o(N[3], Q, he);
  }
  function $(N, P, C) {
    for (let c = 0; c < 4; c++)
      x(N[c], P[c], C);
  }
  function q(N, P) {
    const C = i(), c = i(), D = i();
    L(D, P[2]), o(C, P[0], D), o(c, P[1], D), T(N, c), N[31] ^= I(C) << 7;
  }
  function S(N, P, C) {
    m(N[0], u), m(N[1], a), m(N[2], a), m(N[3], u);
    for (let c = 255; c >= 0; --c) {
      const D = C[c / 8 | 0] >> (c & 7) & 1;
      $(N, P, D), U(P, N), U(N, N), $(N, P, D);
    }
  }
  function R(N, P) {
    const C = [i(), i(), i(), i()];
    m(C[0], f), m(C[1], g), m(C[2], a), o(C[3], f, g), S(N, C, P);
  }
  function G(N) {
    if (N.length !== e.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${e.SEED_LENGTH} bytes`);
    const P = (0, r.hash)(N);
    P[0] &= 248, P[31] &= 127, P[31] |= 64;
    const C = new Uint8Array(32), c = [i(), i(), i(), i()];
    R(c, P), q(C, c);
    const D = new Uint8Array(64);
    return D.set(N), D.set(C, 32), {
      publicKey: C,
      secretKey: D
    };
  }
  e.generateKeyPairFromSeed = G;
  function K(N) {
    const P = (0, t.randomBytes)(32, N), C = G(P);
    return (0, n.wipe)(P), C;
  }
  e.generateKeyPair = K;
  function z(N) {
    if (N.length !== e.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${e.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(N.subarray(32));
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
  function B(N, P) {
    let C, c, D, Y;
    for (c = 63; c >= 32; --c) {
      for (C = 0, D = c - 32, Y = c - 12; D < Y; ++D)
        P[D] += C - 16 * P[c] * k[D - (c - 32)], C = Math.floor((P[D] + 128) / 256), P[D] -= C * 256;
      P[D] += C, P[c] = 0;
    }
    for (C = 0, D = 0; D < 32; D++)
      P[D] += C - (P[31] >> 4) * k[D], C = P[D] >> 8, P[D] &= 255;
    for (D = 0; D < 32; D++)
      P[D] -= C * k[D];
    for (c = 0; c < 32; c++)
      P[c + 1] += P[c] >> 8, N[c] = P[c] & 255;
  }
  function W(N) {
    const P = new Float64Array(64);
    for (let C = 0; C < 64; C++)
      P[C] = N[C];
    for (let C = 0; C < 64; C++)
      N[C] = 0;
    B(N, P);
  }
  function oe(N, P) {
    const C = new Float64Array(64), c = [i(), i(), i(), i()], D = (0, r.hash)(N.subarray(0, 32));
    D[0] &= 248, D[31] &= 127, D[31] |= 64;
    const Y = new Uint8Array(64);
    Y.set(D.subarray(32), 32);
    const Q = new r.SHA512();
    Q.update(Y.subarray(32)), Q.update(P);
    const be = Q.digest();
    Q.clean(), W(be), R(c, be), q(Y, c), Q.reset(), Q.update(Y.subarray(0, 32)), Q.update(N.subarray(32)), Q.update(P);
    const ve = Q.digest();
    W(ve);
    for (let he = 0; he < 32; he++)
      C[he] = be[he];
    for (let he = 0; he < 32; he++)
      for (let Ie = 0; Ie < 32; Ie++)
        C[he + Ie] += ve[he] * D[Ie];
    return B(Y.subarray(32), C), Y;
  }
  e.sign = oe;
  function H(N, P) {
    const C = i(), c = i(), D = i(), Y = i(), Q = i(), be = i(), ve = i();
    return m(N[2], a), y(N[1], P), p(D, N[1]), o(Y, D, l), d(D, D, N[2]), E(Y, N[2], Y), p(Q, Y), p(be, Q), o(ve, be, Q), o(C, ve, D), o(C, C, Y), F(C, C), o(C, C, D), o(C, C, Y), o(C, C, Y), o(N[0], C, Y), p(c, N[0]), o(c, c, Y), w(c, D) && o(N[0], N[0], v), p(c, N[0]), o(c, c, Y), w(c, D) ? -1 : (I(N[0]) === P[31] >> 7 && d(N[0], u, N[0]), o(N[3], N[0], N[1]), 0);
  }
  function ne(N, P, C) {
    const c = new Uint8Array(32), D = [i(), i(), i(), i()], Y = [i(), i(), i(), i()];
    if (C.length !== e.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${e.SIGNATURE_LENGTH} bytes`);
    if (H(Y, N))
      return !1;
    const Q = new r.SHA512();
    Q.update(C.subarray(0, 32)), Q.update(N), Q.update(P);
    const be = Q.digest();
    return W(be), S(D, Y, be), R(Y, C.subarray(32)), U(D, Y), q(c, D), !M(C, c);
  }
  e.verify = ne;
  function Z(N) {
    let P = [i(), i(), i(), i()];
    if (H(P, N))
      throw new Error("Ed25519: invalid public key");
    let C = i(), c = i(), D = P[1];
    E(C, a, D), d(c, a, D), L(c, c), o(C, C, c);
    let Y = new Uint8Array(32);
    return T(Y, C), Y;
  }
  e.convertPublicKeyToX25519 = Z;
  function re(N) {
    const P = (0, r.hash)(N.subarray(0, 32));
    P[0] &= 248, P[31] &= 127, P[31] |= 64;
    const C = new Uint8Array(P.subarray(0, 32));
    return (0, n.wipe)(P), C;
  }
  e.convertSecretKeyToX25519 = re;
})(Ts);
const Kh = "EdDSA", Vh = "JWT", Hc = ".", Gc = "base64url", kh = "utf8", Wh = "utf8", Hh = ":", Gh = "did", Yh = "key", ia = "base58btc", Jh = "z", Xh = "K36", Qh = 32;
function Ps(e) {
  return globalThis.Buffer != null ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e;
}
function Yc(e = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Ps(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e);
}
function us(e, t) {
  t || (t = e.reduce((i, s) => i + s.length, 0));
  const r = Yc(t);
  let n = 0;
  for (const i of e)
    r.set(i, n), n += i.length;
  return Ps(r);
}
function Zh(e, t) {
  if (e.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
    r[n] = 255;
  for (var i = 0; i < e.length; i++) {
    var s = e.charAt(i), u = s.charCodeAt(0);
    if (r[u] !== 255)
      throw new TypeError(s + " is ambiguous");
    r[u] = i;
  }
  var a = e.length, l = e.charAt(0), h = Math.log(a) / Math.log(256), f = Math.log(256) / Math.log(a);
  function g(O) {
    if (O instanceof Uint8Array || (ArrayBuffer.isView(O) ? O = new Uint8Array(O.buffer, O.byteOffset, O.byteLength) : Array.isArray(O) && (O = Uint8Array.from(O))), !(O instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (O.length === 0)
      return "";
    for (var x = 0, T = 0, M = 0, w = O.length; M !== w && O[M] === 0; )
      M++, x++;
    for (var I = (w - M) * f + 1 >>> 0, y = new Uint8Array(I); M !== w; ) {
      for (var E = O[M], d = 0, o = I - 1; (E !== 0 || d < T) && o !== -1; o--, d++)
        E += 256 * y[o] >>> 0, y[o] = E % a >>> 0, E = E / a >>> 0;
      if (E !== 0)
        throw new Error("Non-zero carry");
      T = d, M++;
    }
    for (var p = I - T; p !== I && y[p] === 0; )
      p++;
    for (var L = l.repeat(x); p < I; ++p)
      L += e.charAt(y[p]);
    return L;
  }
  function v(O) {
    if (typeof O != "string")
      throw new TypeError("Expected String");
    if (O.length === 0)
      return new Uint8Array();
    var x = 0;
    if (O[x] !== " ") {
      for (var T = 0, M = 0; O[x] === l; )
        T++, x++;
      for (var w = (O.length - x) * h + 1 >>> 0, I = new Uint8Array(w); O[x]; ) {
        var y = r[O.charCodeAt(x)];
        if (y === 255)
          return;
        for (var E = 0, d = w - 1; (y !== 0 || E < M) && d !== -1; d--, E++)
          y += a * I[d] >>> 0, I[d] = y % 256 >>> 0, y = y / 256 >>> 0;
        if (y !== 0)
          throw new Error("Non-zero carry");
        M = E, x++;
      }
      if (O[x] !== " ") {
        for (var o = w - M; o !== w && I[o] === 0; )
          o++;
        for (var p = new Uint8Array(T + (w - o)), L = T; o !== w; )
          p[L++] = I[o++];
        return p;
      }
    }
  }
  function m(O) {
    var x = v(O);
    if (x)
      return x;
    throw new Error(`Non-${t} character`);
  }
  return {
    encode: g,
    decodeUnsafe: v,
    decode: m
  };
}
var ed = Zh, td = ed;
const rd = (e) => {
  if (e instanceof Uint8Array && e.constructor.name === "Uint8Array")
    return e;
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  if (ArrayBuffer.isView(e))
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  throw new Error("Unknown type, must be binary type");
}, nd = (e) => new TextEncoder().encode(e), id = (e) => new TextDecoder().decode(e);
class sd {
  constructor(t, r, n) {
    this.name = t, this.prefix = r, this.baseEncode = n;
  }
  encode(t) {
    if (t instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class od {
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
    return Jc(this, t);
  }
}
class ad {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return Jc(this, t);
  }
  decode(t) {
    const r = t[0], n = this.decoders[r];
    if (n)
      return n.decode(t);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Jc = (e, t) => new ad({
  ...e.decoders || { [e.prefix]: e },
  ...t.decoders || { [t.prefix]: t }
});
class cd {
  constructor(t, r, n, i) {
    this.name = t, this.prefix = r, this.baseEncode = n, this.baseDecode = i, this.encoder = new sd(t, r, n), this.decoder = new od(t, r, i);
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const gi = ({ name: e, prefix: t, encode: r, decode: n }) => new cd(e, t, r, n), Tn = ({ prefix: e, name: t, alphabet: r }) => {
  const { encode: n, decode: i } = td(r, t);
  return gi({
    prefix: e,
    name: t,
    encode: n,
    decode: (s) => rd(i(s))
  });
}, ud = (e, t, r, n) => {
  const i = {};
  for (let f = 0; f < t.length; ++f)
    i[t[f]] = f;
  let s = e.length;
  for (; e[s - 1] === "="; )
    --s;
  const u = new Uint8Array(s * r / 8 | 0);
  let a = 0, l = 0, h = 0;
  for (let f = 0; f < s; ++f) {
    const g = i[e[f]];
    if (g === void 0)
      throw new SyntaxError(`Non-${n} character`);
    l = l << r | g, a += r, a >= 8 && (a -= 8, u[h++] = 255 & l >> a);
  }
  if (a >= r || 255 & l << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return u;
}, ld = (e, t, r) => {
  const n = t[t.length - 1] === "=", i = (1 << r) - 1;
  let s = "", u = 0, a = 0;
  for (let l = 0; l < e.length; ++l)
    for (a = a << 8 | e[l], u += 8; u > r; )
      u -= r, s += t[i & a >> u];
  if (u && (s += t[i & a << r - u]), n)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, gt = ({ name: e, prefix: t, bitsPerChar: r, alphabet: n }) => gi({
  prefix: t,
  name: e,
  encode(i) {
    return ld(i, n, r);
  },
  decode(i) {
    return ud(i, n, r, e);
  }
}), fd = gi({
  prefix: "\0",
  name: "identity",
  encode: (e) => id(e),
  decode: (e) => nd(e)
}), hd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: fd
}, Symbol.toStringTag, { value: "Module" })), dd = gt({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), pd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: dd
}, Symbol.toStringTag, { value: "Module" })), gd = gt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), yd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: gd
}, Symbol.toStringTag, { value: "Module" })), bd = Tn({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), vd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: bd
}, Symbol.toStringTag, { value: "Module" })), md = gt({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), _d = gt({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), wd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: md,
  base16upper: _d
}, Symbol.toStringTag, { value: "Module" })), Ed = gt({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), Sd = gt({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), Dd = gt({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), Od = gt({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), Id = gt({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), xd = gt({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), Cd = gt({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), Ad = gt({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), Rd = gt({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), Td = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: Ed,
  base32hex: Id,
  base32hexpad: Cd,
  base32hexpadupper: Ad,
  base32hexupper: xd,
  base32pad: Dd,
  base32padupper: Od,
  base32upper: Sd,
  base32z: Rd
}, Symbol.toStringTag, { value: "Module" })), Pd = Tn({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), Nd = Tn({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), Ld = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: Pd,
  base36upper: Nd
}, Symbol.toStringTag, { value: "Module" })), Fd = Tn({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), Ud = Tn({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), $d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: Fd,
  base58flickr: Ud
}, Symbol.toStringTag, { value: "Module" })), Md = gt({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), jd = gt({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), Bd = gt({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), qd = gt({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), zd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: Md,
  base64pad: jd,
  base64url: Bd,
  base64urlpad: qd
}, Symbol.toStringTag, { value: "Module" })), Xc = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Kd = Xc.reduce((e, t, r) => (e[r] = t, e), []), Vd = Xc.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []);
function kd(e) {
  return e.reduce((t, r) => (t += Kd[r], t), "");
}
function Wd(e) {
  const t = [];
  for (const r of e) {
    const n = Vd[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    t.push(n);
  }
  return new Uint8Array(t);
}
const Hd = gi({
  prefix: "🚀",
  name: "base256emoji",
  encode: kd,
  decode: Wd
}), Gd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: Hd
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const sa = {
  ...hd,
  ...pd,
  ...yd,
  ...vd,
  ...wd,
  ...Td,
  ...Ld,
  ...$d,
  ...zd,
  ...Gd
};
function Qc(e, t, r, n) {
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
const oa = Qc("utf8", "u", (e) => "u" + new TextDecoder("utf8").decode(e), (e) => new TextEncoder().encode(e.substring(1))), Li = Qc("ascii", "a", (e) => {
  let t = "a";
  for (let r = 0; r < e.length; r++)
    t += String.fromCharCode(e[r]);
  return t;
}, (e) => {
  e = e.substring(1);
  const t = Yc(e.length);
  for (let r = 0; r < e.length; r++)
    t[r] = e.charCodeAt(r);
  return t;
}), Zc = {
  utf8: oa,
  "utf-8": oa,
  hex: sa.base16,
  latin1: Li,
  ascii: Li,
  binary: Li,
  ...sa
};
function xt(e, t = "utf8") {
  const r = Zc[t];
  if (!r)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8") : r.encoder.encode(e).substring(1);
}
function At(e, t = "utf8") {
  const r = Zc[t];
  if (!r)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Ps(globalThis.Buffer.from(e, "utf-8")) : r.decoder.decode(`${r.prefix}${e}`);
}
function Zn(e) {
  return xt(At(Rs(e), kh), Gc);
}
function eu(e) {
  const t = At(Xh, ia), r = Jh + xt(us([t, e]), ia);
  return [Gh, Yh, r].join(Hh);
}
function Yd(e) {
  return xt(e, Gc);
}
function Jd(e) {
  return At([Zn(e.header), Zn(e.payload)].join(Hc), Wh);
}
function Xd(e) {
  return [
    Zn(e.header),
    Zn(e.payload),
    Yd(e.signature)
  ].join(Hc);
}
function aa(e = Zr.randomBytes(Qh)) {
  return Ts.generateKeyPairFromSeed(e);
}
async function Qd(e, t, r, n, i = te.fromMiliseconds(Date.now())) {
  const s = { alg: Kh, typ: Vh }, u = eu(n.publicKey), a = i + r, l = { iss: u, sub: e, aud: t, iat: i, exp: a }, h = Jd({ header: s, payload: l }), f = Ts.sign(n.secretKey, h);
  return Xd({ header: s, payload: l, signature: f });
}
var Ns = {}, yi = {};
Object.defineProperty(yi, "__esModule", { value: !0 });
var mt = le, ls = Ft, Zd = 20;
function ep(e, t, r) {
  for (var n = 1634760805, i = 857760878, s = 2036477234, u = 1797285236, a = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], l = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], h = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], f = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], g = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], v = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], m = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], O = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], x = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], T = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4], M = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8], w = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12], I = n, y = i, E = s, d = u, o = a, p = l, L = h, F = f, U = g, $ = v, q = m, S = O, R = x, G = T, K = M, z = w, k = 0; k < Zd; k += 2)
    I = I + o | 0, R ^= I, R = R >>> 32 - 16 | R << 16, U = U + R | 0, o ^= U, o = o >>> 32 - 12 | o << 12, y = y + p | 0, G ^= y, G = G >>> 32 - 16 | G << 16, $ = $ + G | 0, p ^= $, p = p >>> 32 - 12 | p << 12, E = E + L | 0, K ^= E, K = K >>> 32 - 16 | K << 16, q = q + K | 0, L ^= q, L = L >>> 32 - 12 | L << 12, d = d + F | 0, z ^= d, z = z >>> 32 - 16 | z << 16, S = S + z | 0, F ^= S, F = F >>> 32 - 12 | F << 12, E = E + L | 0, K ^= E, K = K >>> 32 - 8 | K << 8, q = q + K | 0, L ^= q, L = L >>> 32 - 7 | L << 7, d = d + F | 0, z ^= d, z = z >>> 32 - 8 | z << 8, S = S + z | 0, F ^= S, F = F >>> 32 - 7 | F << 7, y = y + p | 0, G ^= y, G = G >>> 32 - 8 | G << 8, $ = $ + G | 0, p ^= $, p = p >>> 32 - 7 | p << 7, I = I + o | 0, R ^= I, R = R >>> 32 - 8 | R << 8, U = U + R | 0, o ^= U, o = o >>> 32 - 7 | o << 7, I = I + p | 0, z ^= I, z = z >>> 32 - 16 | z << 16, q = q + z | 0, p ^= q, p = p >>> 32 - 12 | p << 12, y = y + L | 0, R ^= y, R = R >>> 32 - 16 | R << 16, S = S + R | 0, L ^= S, L = L >>> 32 - 12 | L << 12, E = E + F | 0, G ^= E, G = G >>> 32 - 16 | G << 16, U = U + G | 0, F ^= U, F = F >>> 32 - 12 | F << 12, d = d + o | 0, K ^= d, K = K >>> 32 - 16 | K << 16, $ = $ + K | 0, o ^= $, o = o >>> 32 - 12 | o << 12, E = E + F | 0, G ^= E, G = G >>> 32 - 8 | G << 8, U = U + G | 0, F ^= U, F = F >>> 32 - 7 | F << 7, d = d + o | 0, K ^= d, K = K >>> 32 - 8 | K << 8, $ = $ + K | 0, o ^= $, o = o >>> 32 - 7 | o << 7, y = y + L | 0, R ^= y, R = R >>> 32 - 8 | R << 8, S = S + R | 0, L ^= S, L = L >>> 32 - 7 | L << 7, I = I + p | 0, z ^= I, z = z >>> 32 - 8 | z << 8, q = q + z | 0, p ^= q, p = p >>> 32 - 7 | p << 7;
  mt.writeUint32LE(I + n | 0, e, 0), mt.writeUint32LE(y + i | 0, e, 4), mt.writeUint32LE(E + s | 0, e, 8), mt.writeUint32LE(d + u | 0, e, 12), mt.writeUint32LE(o + a | 0, e, 16), mt.writeUint32LE(p + l | 0, e, 20), mt.writeUint32LE(L + h | 0, e, 24), mt.writeUint32LE(F + f | 0, e, 28), mt.writeUint32LE(U + g | 0, e, 32), mt.writeUint32LE($ + v | 0, e, 36), mt.writeUint32LE(q + m | 0, e, 40), mt.writeUint32LE(S + O | 0, e, 44), mt.writeUint32LE(R + x | 0, e, 48), mt.writeUint32LE(G + T | 0, e, 52), mt.writeUint32LE(K + M | 0, e, 56), mt.writeUint32LE(z + w | 0, e, 60);
}
function tu(e, t, r, n, i) {
  if (i === void 0 && (i = 0), e.length !== 32)
    throw new Error("ChaCha: key size must be 32 bytes");
  if (n.length < r.length)
    throw new Error("ChaCha: destination is shorter than source");
  var s, u;
  if (i === 0) {
    if (t.length !== 8 && t.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    s = new Uint8Array(16), u = s.length - t.length, s.set(t, u);
  } else {
    if (t.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    s = t, u = i;
  }
  for (var a = new Uint8Array(64), l = 0; l < r.length; l += 64) {
    ep(a, s, e);
    for (var h = l; h < l + 64 && h < r.length; h++)
      n[h] = r[h] ^ a[h - l];
    rp(s, 0, u);
  }
  return ls.wipe(a), i === 0 && ls.wipe(s), n;
}
yi.streamXOR = tu;
function tp(e, t, r, n) {
  return n === void 0 && (n = 0), ls.wipe(r), tu(e, t, r, r, n);
}
yi.stream = tp;
function rp(e, t, r) {
  for (var n = 1; r--; )
    n = n + (e[t] & 255) | 0, e[t] = n & 255, n >>>= 8, t++;
  if (n > 0)
    throw new Error("ChaCha: counter overflow");
}
var ru = {}, wr = {};
Object.defineProperty(wr, "__esModule", { value: !0 });
function np(e, t, r) {
  return ~(e - 1) & t | e - 1 & r;
}
wr.select = np;
function ip(e, t) {
  return (e | 0) - (t | 0) - 1 >>> 31 & 1;
}
wr.lessOrEqual = ip;
function nu(e, t) {
  if (e.length !== t.length)
    return 0;
  for (var r = 0, n = 0; n < e.length; n++)
    r |= e[n] ^ t[n];
  return 1 & r - 1 >>> 8;
}
wr.compare = nu;
function sp(e, t) {
  return e.length === 0 || t.length === 0 ? !1 : nu(e, t) !== 0;
}
wr.equal = sp;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = wr, r = Ft;
  e.DIGEST_LENGTH = 16;
  var n = (
    /** @class */
    function() {
      function u(a) {
        this.digestLength = e.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
        var l = a[0] | a[1] << 8;
        this._r[0] = l & 8191;
        var h = a[2] | a[3] << 8;
        this._r[1] = (l >>> 13 | h << 3) & 8191;
        var f = a[4] | a[5] << 8;
        this._r[2] = (h >>> 10 | f << 6) & 7939;
        var g = a[6] | a[7] << 8;
        this._r[3] = (f >>> 7 | g << 9) & 8191;
        var v = a[8] | a[9] << 8;
        this._r[4] = (g >>> 4 | v << 12) & 255, this._r[5] = v >>> 1 & 8190;
        var m = a[10] | a[11] << 8;
        this._r[6] = (v >>> 14 | m << 2) & 8191;
        var O = a[12] | a[13] << 8;
        this._r[7] = (m >>> 11 | O << 5) & 8065;
        var x = a[14] | a[15] << 8;
        this._r[8] = (O >>> 8 | x << 8) & 8191, this._r[9] = x >>> 5 & 127, this._pad[0] = a[16] | a[17] << 8, this._pad[1] = a[18] | a[19] << 8, this._pad[2] = a[20] | a[21] << 8, this._pad[3] = a[22] | a[23] << 8, this._pad[4] = a[24] | a[25] << 8, this._pad[5] = a[26] | a[27] << 8, this._pad[6] = a[28] | a[29] << 8, this._pad[7] = a[30] | a[31] << 8;
      }
      return u.prototype._blocks = function(a, l, h) {
        for (var f = this._fin ? 0 : 2048, g = this._h[0], v = this._h[1], m = this._h[2], O = this._h[3], x = this._h[4], T = this._h[5], M = this._h[6], w = this._h[7], I = this._h[8], y = this._h[9], E = this._r[0], d = this._r[1], o = this._r[2], p = this._r[3], L = this._r[4], F = this._r[5], U = this._r[6], $ = this._r[7], q = this._r[8], S = this._r[9]; h >= 16; ) {
          var R = a[l + 0] | a[l + 1] << 8;
          g += R & 8191;
          var G = a[l + 2] | a[l + 3] << 8;
          v += (R >>> 13 | G << 3) & 8191;
          var K = a[l + 4] | a[l + 5] << 8;
          m += (G >>> 10 | K << 6) & 8191;
          var z = a[l + 6] | a[l + 7] << 8;
          O += (K >>> 7 | z << 9) & 8191;
          var k = a[l + 8] | a[l + 9] << 8;
          x += (z >>> 4 | k << 12) & 8191, T += k >>> 1 & 8191;
          var B = a[l + 10] | a[l + 11] << 8;
          M += (k >>> 14 | B << 2) & 8191;
          var W = a[l + 12] | a[l + 13] << 8;
          w += (B >>> 11 | W << 5) & 8191;
          var oe = a[l + 14] | a[l + 15] << 8;
          I += (W >>> 8 | oe << 8) & 8191, y += oe >>> 5 | f;
          var H = 0, ne = H;
          ne += g * E, ne += v * (5 * S), ne += m * (5 * q), ne += O * (5 * $), ne += x * (5 * U), H = ne >>> 13, ne &= 8191, ne += T * (5 * F), ne += M * (5 * L), ne += w * (5 * p), ne += I * (5 * o), ne += y * (5 * d), H += ne >>> 13, ne &= 8191;
          var Z = H;
          Z += g * d, Z += v * E, Z += m * (5 * S), Z += O * (5 * q), Z += x * (5 * $), H = Z >>> 13, Z &= 8191, Z += T * (5 * U), Z += M * (5 * F), Z += w * (5 * L), Z += I * (5 * p), Z += y * (5 * o), H += Z >>> 13, Z &= 8191;
          var re = H;
          re += g * o, re += v * d, re += m * E, re += O * (5 * S), re += x * (5 * q), H = re >>> 13, re &= 8191, re += T * (5 * $), re += M * (5 * U), re += w * (5 * F), re += I * (5 * L), re += y * (5 * p), H += re >>> 13, re &= 8191;
          var N = H;
          N += g * p, N += v * o, N += m * d, N += O * E, N += x * (5 * S), H = N >>> 13, N &= 8191, N += T * (5 * q), N += M * (5 * $), N += w * (5 * U), N += I * (5 * F), N += y * (5 * L), H += N >>> 13, N &= 8191;
          var P = H;
          P += g * L, P += v * p, P += m * o, P += O * d, P += x * E, H = P >>> 13, P &= 8191, P += T * (5 * S), P += M * (5 * q), P += w * (5 * $), P += I * (5 * U), P += y * (5 * F), H += P >>> 13, P &= 8191;
          var C = H;
          C += g * F, C += v * L, C += m * p, C += O * o, C += x * d, H = C >>> 13, C &= 8191, C += T * E, C += M * (5 * S), C += w * (5 * q), C += I * (5 * $), C += y * (5 * U), H += C >>> 13, C &= 8191;
          var c = H;
          c += g * U, c += v * F, c += m * L, c += O * p, c += x * o, H = c >>> 13, c &= 8191, c += T * d, c += M * E, c += w * (5 * S), c += I * (5 * q), c += y * (5 * $), H += c >>> 13, c &= 8191;
          var D = H;
          D += g * $, D += v * U, D += m * F, D += O * L, D += x * p, H = D >>> 13, D &= 8191, D += T * o, D += M * d, D += w * E, D += I * (5 * S), D += y * (5 * q), H += D >>> 13, D &= 8191;
          var Y = H;
          Y += g * q, Y += v * $, Y += m * U, Y += O * F, Y += x * L, H = Y >>> 13, Y &= 8191, Y += T * p, Y += M * o, Y += w * d, Y += I * E, Y += y * (5 * S), H += Y >>> 13, Y &= 8191;
          var Q = H;
          Q += g * S, Q += v * q, Q += m * $, Q += O * U, Q += x * F, H = Q >>> 13, Q &= 8191, Q += T * L, Q += M * p, Q += w * o, Q += I * d, Q += y * E, H += Q >>> 13, Q &= 8191, H = (H << 2) + H | 0, H = H + ne | 0, ne = H & 8191, H = H >>> 13, Z += H, g = ne, v = Z, m = re, O = N, x = P, T = C, M = c, w = D, I = Y, y = Q, l += 16, h -= 16;
        }
        this._h[0] = g, this._h[1] = v, this._h[2] = m, this._h[3] = O, this._h[4] = x, this._h[5] = T, this._h[6] = M, this._h[7] = w, this._h[8] = I, this._h[9] = y;
      }, u.prototype.finish = function(a, l) {
        l === void 0 && (l = 0);
        var h = new Uint16Array(10), f, g, v, m;
        if (this._leftover) {
          for (m = this._leftover, this._buffer[m++] = 1; m < 16; m++)
            this._buffer[m] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (f = this._h[1] >>> 13, this._h[1] &= 8191, m = 2; m < 10; m++)
          this._h[m] += f, f = this._h[m] >>> 13, this._h[m] &= 8191;
        for (this._h[0] += f * 5, f = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += f, f = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += f, h[0] = this._h[0] + 5, f = h[0] >>> 13, h[0] &= 8191, m = 1; m < 10; m++)
          h[m] = this._h[m] + f, f = h[m] >>> 13, h[m] &= 8191;
        for (h[9] -= 8192, g = (f ^ 1) - 1, m = 0; m < 10; m++)
          h[m] &= g;
        for (g = ~g, m = 0; m < 10; m++)
          this._h[m] = this._h[m] & g | h[m];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, v = this._h[0] + this._pad[0], this._h[0] = v & 65535, m = 1; m < 8; m++)
          v = (this._h[m] + this._pad[m] | 0) + (v >>> 16) | 0, this._h[m] = v & 65535;
        return a[l + 0] = this._h[0] >>> 0, a[l + 1] = this._h[0] >>> 8, a[l + 2] = this._h[1] >>> 0, a[l + 3] = this._h[1] >>> 8, a[l + 4] = this._h[2] >>> 0, a[l + 5] = this._h[2] >>> 8, a[l + 6] = this._h[3] >>> 0, a[l + 7] = this._h[3] >>> 8, a[l + 8] = this._h[4] >>> 0, a[l + 9] = this._h[4] >>> 8, a[l + 10] = this._h[5] >>> 0, a[l + 11] = this._h[5] >>> 8, a[l + 12] = this._h[6] >>> 0, a[l + 13] = this._h[6] >>> 8, a[l + 14] = this._h[7] >>> 0, a[l + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, u.prototype.update = function(a) {
        var l = 0, h = a.length, f;
        if (this._leftover) {
          f = 16 - this._leftover, f > h && (f = h);
          for (var g = 0; g < f; g++)
            this._buffer[this._leftover + g] = a[l + g];
          if (h -= f, l += f, this._leftover += f, this._leftover < 16)
            return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (h >= 16 && (f = h - h % 16, this._blocks(a, l, f), l += f, h -= f), h) {
          for (var g = 0; g < h; g++)
            this._buffer[this._leftover + g] = a[l + g];
          this._leftover += h;
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
  e.Poly1305 = n;
  function i(u, a) {
    var l = new n(u);
    l.update(a);
    var h = l.digest();
    return l.clean(), h;
  }
  e.oneTimeAuth = i;
  function s(u, a) {
    return u.length !== e.DIGEST_LENGTH || a.length !== e.DIGEST_LENGTH ? !1 : t.equal(u, a);
  }
  e.equal = s;
})(ru);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = yi, r = ru, n = Ft, i = le, s = wr;
  e.KEY_LENGTH = 32, e.NONCE_LENGTH = 12, e.TAG_LENGTH = 16;
  var u = new Uint8Array(16), a = (
    /** @class */
    function() {
      function l(h) {
        if (this.nonceLength = e.NONCE_LENGTH, this.tagLength = e.TAG_LENGTH, h.length !== e.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(h);
      }
      return l.prototype.seal = function(h, f, g, v) {
        if (h.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var m = new Uint8Array(16);
        m.set(h, m.length - h.length);
        var O = new Uint8Array(32);
        t.stream(this._key, m, O, 4);
        var x = f.length + this.tagLength, T;
        if (v) {
          if (v.length !== x)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          T = v;
        } else
          T = new Uint8Array(x);
        return t.streamXOR(this._key, m, f, T, 4), this._authenticate(T.subarray(T.length - this.tagLength, T.length), O, T.subarray(0, T.length - this.tagLength), g), n.wipe(m), T;
      }, l.prototype.open = function(h, f, g, v) {
        if (h.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (f.length < this.tagLength)
          return null;
        var m = new Uint8Array(16);
        m.set(h, m.length - h.length);
        var O = new Uint8Array(32);
        t.stream(this._key, m, O, 4);
        var x = new Uint8Array(this.tagLength);
        if (this._authenticate(x, O, f.subarray(0, f.length - this.tagLength), g), !s.equal(x, f.subarray(f.length - this.tagLength, f.length)))
          return null;
        var T = f.length - this.tagLength, M;
        if (v) {
          if (v.length !== T)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          M = v;
        } else
          M = new Uint8Array(T);
        return t.streamXOR(this._key, m, f.subarray(0, f.length - this.tagLength), M, 4), n.wipe(m), M;
      }, l.prototype.clean = function() {
        return n.wipe(this._key), this;
      }, l.prototype._authenticate = function(h, f, g, v) {
        var m = new r.Poly1305(f);
        v && (m.update(v), v.length % 16 > 0 && m.update(u.subarray(v.length % 16))), m.update(g), g.length % 16 > 0 && m.update(u.subarray(g.length % 16));
        var O = new Uint8Array(8);
        v && i.writeUint64LE(v.length, O), m.update(O), i.writeUint64LE(g.length, O), m.update(O);
        for (var x = m.digest(), T = 0; T < x.length; T++)
          h[T] = x[T];
        m.clean(), n.wipe(x), n.wipe(O);
      }, l;
    }()
  );
  e.ChaCha20Poly1305 = a;
})(Ns);
var iu = {}, Pn = {}, Ls = {};
Object.defineProperty(Ls, "__esModule", { value: !0 });
function op(e) {
  return typeof e.saveState < "u" && typeof e.restoreState < "u" && typeof e.cleanSavedState < "u";
}
Ls.isSerializableHash = op;
Object.defineProperty(Pn, "__esModule", { value: !0 });
var tr = Ls, ap = wr, cp = Ft, su = (
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
      this._outer.update(n), tr.isSerializableHash(this._inner) && tr.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), cp.wipe(n);
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
Pn.HMAC = su;
function up(e, t, r) {
  var n = new su(e, t);
  n.update(r);
  var i = n.digest();
  return n.clean(), i;
}
Pn.hmac = up;
Pn.equal = ap.equal;
Object.defineProperty(iu, "__esModule", { value: !0 });
var ca = Pn, ua = Ft, lp = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      n === void 0 && (n = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = t, this._info = i;
      var s = ca.hmac(this._hash, n, r);
      this._hmac = new ca.HMAC(t, s), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
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
      this._hmac.clean(), ua.wipe(this._buffer), ua.wipe(this._counter), this._bufpos = 0;
    }, e;
  }()
), fp = iu.HKDF = lp, bi = {};
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
      }, a.prototype.update = function(l, h) {
        if (h === void 0 && (h = l.length), this._finished)
          throw new Error("SHA256: can't update because hash was finished.");
        var f = 0;
        if (this._bytesHashed += h, this._bufferLength > 0) {
          for (; this._bufferLength < this.blockSize && h > 0; )
            this._buffer[this._bufferLength++] = l[f++], h--;
          this._bufferLength === this.blockSize && (s(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (h >= this.blockSize && (f = s(this._temp, this._state, l, f, h), h %= this.blockSize); h > 0; )
          this._buffer[this._bufferLength++] = l[f++], h--;
        return this;
      }, a.prototype.finish = function(l) {
        if (!this._finished) {
          var h = this._bytesHashed, f = this._bufferLength, g = h / 536870912 | 0, v = h << 3, m = h % 64 < 56 ? 64 : 128;
          this._buffer[f] = 128;
          for (var O = f + 1; O < m - 8; O++)
            this._buffer[O] = 0;
          t.writeUint32BE(g, this._buffer, m - 8), t.writeUint32BE(v, this._buffer, m - 4), s(this._temp, this._state, this._buffer, 0, m), this._finished = !0;
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
  function s(a, l, h, f, g) {
    for (; g >= 64; ) {
      for (var v = l[0], m = l[1], O = l[2], x = l[3], T = l[4], M = l[5], w = l[6], I = l[7], y = 0; y < 16; y++) {
        var E = f + y * 4;
        a[y] = t.readUint32BE(h, E);
      }
      for (var y = 16; y < 64; y++) {
        var d = a[y - 2], o = (d >>> 17 | d << 32 - 17) ^ (d >>> 19 | d << 32 - 19) ^ d >>> 10;
        d = a[y - 15];
        var p = (d >>> 7 | d << 32 - 7) ^ (d >>> 18 | d << 32 - 18) ^ d >>> 3;
        a[y] = (o + a[y - 7] | 0) + (p + a[y - 16] | 0);
      }
      for (var y = 0; y < 64; y++) {
        var o = (((T >>> 6 | T << 26) ^ (T >>> 11 | T << 21) ^ (T >>> 25 | T << 7)) + (T & M ^ ~T & w) | 0) + (I + (i[y] + a[y] | 0) | 0) | 0, p = ((v >>> 2 | v << 32 - 2) ^ (v >>> 13 | v << 32 - 13) ^ (v >>> 22 | v << 32 - 22)) + (v & m ^ v & O ^ m & O) | 0;
        I = w, w = M, M = T, T = x + o | 0, x = O, O = m, m = v, v = o + p | 0;
      }
      l[0] += v, l[1] += m, l[2] += O, l[3] += x, l[4] += T, l[5] += M, l[6] += w, l[7] += I, f += 64, g -= 64;
    }
    return f;
  }
  function u(a) {
    var l = new n();
    l.update(a);
    var h = l.digest();
    return l.clean(), h;
  }
  e.hash = u;
})(bi);
var Fs = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.sharedKey = e.generateKeyPair = e.generateKeyPairFromSeed = e.scalarMultBase = e.scalarMult = e.SHARED_KEY_LENGTH = e.SECRET_KEY_LENGTH = e.PUBLIC_KEY_LENGTH = void 0;
  const t = Zr, r = Ft;
  e.PUBLIC_KEY_LENGTH = 32, e.SECRET_KEY_LENGTH = 32, e.SHARED_KEY_LENGTH = 32;
  function n(y) {
    const E = new Float64Array(16);
    if (y)
      for (let d = 0; d < y.length; d++)
        E[d] = y[d];
    return E;
  }
  const i = new Uint8Array(32);
  i[0] = 9;
  const s = n([56129, 1]);
  function u(y) {
    let E = 1;
    for (let d = 0; d < 16; d++) {
      let o = y[d] + E + 65535;
      E = Math.floor(o / 65536), y[d] = o - E * 65536;
    }
    y[0] += E - 1 + 37 * (E - 1);
  }
  function a(y, E, d) {
    const o = ~(d - 1);
    for (let p = 0; p < 16; p++) {
      const L = o & (y[p] ^ E[p]);
      y[p] ^= L, E[p] ^= L;
    }
  }
  function l(y, E) {
    const d = n(), o = n();
    for (let p = 0; p < 16; p++)
      o[p] = E[p];
    u(o), u(o), u(o);
    for (let p = 0; p < 2; p++) {
      d[0] = o[0] - 65517;
      for (let F = 1; F < 15; F++)
        d[F] = o[F] - 65535 - (d[F - 1] >> 16 & 1), d[F - 1] &= 65535;
      d[15] = o[15] - 32767 - (d[14] >> 16 & 1);
      const L = d[15] >> 16 & 1;
      d[14] &= 65535, a(o, d, 1 - L);
    }
    for (let p = 0; p < 16; p++)
      y[2 * p] = o[p] & 255, y[2 * p + 1] = o[p] >> 8;
  }
  function h(y, E) {
    for (let d = 0; d < 16; d++)
      y[d] = E[2 * d] + (E[2 * d + 1] << 8);
    y[15] &= 32767;
  }
  function f(y, E, d) {
    for (let o = 0; o < 16; o++)
      y[o] = E[o] + d[o];
  }
  function g(y, E, d) {
    for (let o = 0; o < 16; o++)
      y[o] = E[o] - d[o];
  }
  function v(y, E, d) {
    let o, p, L = 0, F = 0, U = 0, $ = 0, q = 0, S = 0, R = 0, G = 0, K = 0, z = 0, k = 0, B = 0, W = 0, oe = 0, H = 0, ne = 0, Z = 0, re = 0, N = 0, P = 0, C = 0, c = 0, D = 0, Y = 0, Q = 0, be = 0, ve = 0, he = 0, Ie = 0, Be = 0, Le = 0, De = d[0], we = d[1], de = d[2], ge = d[3], pe = d[4], ue = d[5], ce = d[6], ie = d[7], ye = d[8], me = d[9], ae = d[10], Ee = d[11], xe = d[12], Te = d[13], Pe = d[14], Ce = d[15];
    o = E[0], L += o * De, F += o * we, U += o * de, $ += o * ge, q += o * pe, S += o * ue, R += o * ce, G += o * ie, K += o * ye, z += o * me, k += o * ae, B += o * Ee, W += o * xe, oe += o * Te, H += o * Pe, ne += o * Ce, o = E[1], F += o * De, U += o * we, $ += o * de, q += o * ge, S += o * pe, R += o * ue, G += o * ce, K += o * ie, z += o * ye, k += o * me, B += o * ae, W += o * Ee, oe += o * xe, H += o * Te, ne += o * Pe, Z += o * Ce, o = E[2], U += o * De, $ += o * we, q += o * de, S += o * ge, R += o * pe, G += o * ue, K += o * ce, z += o * ie, k += o * ye, B += o * me, W += o * ae, oe += o * Ee, H += o * xe, ne += o * Te, Z += o * Pe, re += o * Ce, o = E[3], $ += o * De, q += o * we, S += o * de, R += o * ge, G += o * pe, K += o * ue, z += o * ce, k += o * ie, B += o * ye, W += o * me, oe += o * ae, H += o * Ee, ne += o * xe, Z += o * Te, re += o * Pe, N += o * Ce, o = E[4], q += o * De, S += o * we, R += o * de, G += o * ge, K += o * pe, z += o * ue, k += o * ce, B += o * ie, W += o * ye, oe += o * me, H += o * ae, ne += o * Ee, Z += o * xe, re += o * Te, N += o * Pe, P += o * Ce, o = E[5], S += o * De, R += o * we, G += o * de, K += o * ge, z += o * pe, k += o * ue, B += o * ce, W += o * ie, oe += o * ye, H += o * me, ne += o * ae, Z += o * Ee, re += o * xe, N += o * Te, P += o * Pe, C += o * Ce, o = E[6], R += o * De, G += o * we, K += o * de, z += o * ge, k += o * pe, B += o * ue, W += o * ce, oe += o * ie, H += o * ye, ne += o * me, Z += o * ae, re += o * Ee, N += o * xe, P += o * Te, C += o * Pe, c += o * Ce, o = E[7], G += o * De, K += o * we, z += o * de, k += o * ge, B += o * pe, W += o * ue, oe += o * ce, H += o * ie, ne += o * ye, Z += o * me, re += o * ae, N += o * Ee, P += o * xe, C += o * Te, c += o * Pe, D += o * Ce, o = E[8], K += o * De, z += o * we, k += o * de, B += o * ge, W += o * pe, oe += o * ue, H += o * ce, ne += o * ie, Z += o * ye, re += o * me, N += o * ae, P += o * Ee, C += o * xe, c += o * Te, D += o * Pe, Y += o * Ce, o = E[9], z += o * De, k += o * we, B += o * de, W += o * ge, oe += o * pe, H += o * ue, ne += o * ce, Z += o * ie, re += o * ye, N += o * me, P += o * ae, C += o * Ee, c += o * xe, D += o * Te, Y += o * Pe, Q += o * Ce, o = E[10], k += o * De, B += o * we, W += o * de, oe += o * ge, H += o * pe, ne += o * ue, Z += o * ce, re += o * ie, N += o * ye, P += o * me, C += o * ae, c += o * Ee, D += o * xe, Y += o * Te, Q += o * Pe, be += o * Ce, o = E[11], B += o * De, W += o * we, oe += o * de, H += o * ge, ne += o * pe, Z += o * ue, re += o * ce, N += o * ie, P += o * ye, C += o * me, c += o * ae, D += o * Ee, Y += o * xe, Q += o * Te, be += o * Pe, ve += o * Ce, o = E[12], W += o * De, oe += o * we, H += o * de, ne += o * ge, Z += o * pe, re += o * ue, N += o * ce, P += o * ie, C += o * ye, c += o * me, D += o * ae, Y += o * Ee, Q += o * xe, be += o * Te, ve += o * Pe, he += o * Ce, o = E[13], oe += o * De, H += o * we, ne += o * de, Z += o * ge, re += o * pe, N += o * ue, P += o * ce, C += o * ie, c += o * ye, D += o * me, Y += o * ae, Q += o * Ee, be += o * xe, ve += o * Te, he += o * Pe, Ie += o * Ce, o = E[14], H += o * De, ne += o * we, Z += o * de, re += o * ge, N += o * pe, P += o * ue, C += o * ce, c += o * ie, D += o * ye, Y += o * me, Q += o * ae, be += o * Ee, ve += o * xe, he += o * Te, Ie += o * Pe, Be += o * Ce, o = E[15], ne += o * De, Z += o * we, re += o * de, N += o * ge, P += o * pe, C += o * ue, c += o * ce, D += o * ie, Y += o * ye, Q += o * me, be += o * ae, ve += o * Ee, he += o * xe, Ie += o * Te, Be += o * Pe, Le += o * Ce, L += 38 * Z, F += 38 * re, U += 38 * N, $ += 38 * P, q += 38 * C, S += 38 * c, R += 38 * D, G += 38 * Y, K += 38 * Q, z += 38 * be, k += 38 * ve, B += 38 * he, W += 38 * Ie, oe += 38 * Be, H += 38 * Le, p = 1, o = L + p + 65535, p = Math.floor(o / 65536), L = o - p * 65536, o = F + p + 65535, p = Math.floor(o / 65536), F = o - p * 65536, o = U + p + 65535, p = Math.floor(o / 65536), U = o - p * 65536, o = $ + p + 65535, p = Math.floor(o / 65536), $ = o - p * 65536, o = q + p + 65535, p = Math.floor(o / 65536), q = o - p * 65536, o = S + p + 65535, p = Math.floor(o / 65536), S = o - p * 65536, o = R + p + 65535, p = Math.floor(o / 65536), R = o - p * 65536, o = G + p + 65535, p = Math.floor(o / 65536), G = o - p * 65536, o = K + p + 65535, p = Math.floor(o / 65536), K = o - p * 65536, o = z + p + 65535, p = Math.floor(o / 65536), z = o - p * 65536, o = k + p + 65535, p = Math.floor(o / 65536), k = o - p * 65536, o = B + p + 65535, p = Math.floor(o / 65536), B = o - p * 65536, o = W + p + 65535, p = Math.floor(o / 65536), W = o - p * 65536, o = oe + p + 65535, p = Math.floor(o / 65536), oe = o - p * 65536, o = H + p + 65535, p = Math.floor(o / 65536), H = o - p * 65536, o = ne + p + 65535, p = Math.floor(o / 65536), ne = o - p * 65536, L += p - 1 + 37 * (p - 1), p = 1, o = L + p + 65535, p = Math.floor(o / 65536), L = o - p * 65536, o = F + p + 65535, p = Math.floor(o / 65536), F = o - p * 65536, o = U + p + 65535, p = Math.floor(o / 65536), U = o - p * 65536, o = $ + p + 65535, p = Math.floor(o / 65536), $ = o - p * 65536, o = q + p + 65535, p = Math.floor(o / 65536), q = o - p * 65536, o = S + p + 65535, p = Math.floor(o / 65536), S = o - p * 65536, o = R + p + 65535, p = Math.floor(o / 65536), R = o - p * 65536, o = G + p + 65535, p = Math.floor(o / 65536), G = o - p * 65536, o = K + p + 65535, p = Math.floor(o / 65536), K = o - p * 65536, o = z + p + 65535, p = Math.floor(o / 65536), z = o - p * 65536, o = k + p + 65535, p = Math.floor(o / 65536), k = o - p * 65536, o = B + p + 65535, p = Math.floor(o / 65536), B = o - p * 65536, o = W + p + 65535, p = Math.floor(o / 65536), W = o - p * 65536, o = oe + p + 65535, p = Math.floor(o / 65536), oe = o - p * 65536, o = H + p + 65535, p = Math.floor(o / 65536), H = o - p * 65536, o = ne + p + 65535, p = Math.floor(o / 65536), ne = o - p * 65536, L += p - 1 + 37 * (p - 1), y[0] = L, y[1] = F, y[2] = U, y[3] = $, y[4] = q, y[5] = S, y[6] = R, y[7] = G, y[8] = K, y[9] = z, y[10] = k, y[11] = B, y[12] = W, y[13] = oe, y[14] = H, y[15] = ne;
  }
  function m(y, E) {
    v(y, E, E);
  }
  function O(y, E) {
    const d = n();
    for (let o = 0; o < 16; o++)
      d[o] = E[o];
    for (let o = 253; o >= 0; o--)
      m(d, d), o !== 2 && o !== 4 && v(d, d, E);
    for (let o = 0; o < 16; o++)
      y[o] = d[o];
  }
  function x(y, E) {
    const d = new Uint8Array(32), o = new Float64Array(80), p = n(), L = n(), F = n(), U = n(), $ = n(), q = n();
    for (let K = 0; K < 31; K++)
      d[K] = y[K];
    d[31] = y[31] & 127 | 64, d[0] &= 248, h(o, E);
    for (let K = 0; K < 16; K++)
      L[K] = o[K];
    p[0] = U[0] = 1;
    for (let K = 254; K >= 0; --K) {
      const z = d[K >>> 3] >>> (K & 7) & 1;
      a(p, L, z), a(F, U, z), f($, p, F), g(p, p, F), f(F, L, U), g(L, L, U), m(U, $), m(q, p), v(p, F, p), v(F, L, $), f($, p, F), g(p, p, F), m(L, p), g(F, U, q), v(p, F, s), f(p, p, U), v(F, F, p), v(p, U, q), v(U, L, o), m(L, $), a(p, L, z), a(F, U, z);
    }
    for (let K = 0; K < 16; K++)
      o[K + 16] = p[K], o[K + 32] = F[K], o[K + 48] = L[K], o[K + 64] = U[K];
    const S = o.subarray(32), R = o.subarray(16);
    O(S, S), v(R, R, S);
    const G = new Uint8Array(32);
    return l(G, R), G;
  }
  e.scalarMult = x;
  function T(y) {
    return x(y, i);
  }
  e.scalarMultBase = T;
  function M(y) {
    if (y.length !== e.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${e.SECRET_KEY_LENGTH} bytes`);
    const E = new Uint8Array(y);
    return {
      publicKey: T(E),
      secretKey: E
    };
  }
  e.generateKeyPairFromSeed = M;
  function w(y) {
    const E = (0, t.randomBytes)(32, y), d = M(E);
    return (0, r.wipe)(E), d;
  }
  e.generateKeyPair = w;
  function I(y, E, d = !1) {
    if (y.length !== e.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (E.length !== e.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const o = x(y, E);
    if (d) {
      let p = 0;
      for (let L = 0; L < o.length; L++)
        p |= o[L];
      if (p === 0)
        throw new Error("X25519: invalid shared key");
    }
    return o;
  }
  e.sharedKey = I;
})(Fs);
var la = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, s; n < i; n++)
      (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}, hp = (
  /** @class */
  function() {
    function e(t, r, n) {
      this.name = t, this.version = r, this.os = n, this.type = "browser";
    }
    return e;
  }()
), dp = (
  /** @class */
  function() {
    function e(t) {
      this.version = t, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return e;
  }()
), pp = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      this.name = t, this.version = r, this.os = n, this.bot = i, this.type = "bot-device";
    }
    return e;
  }()
), gp = (
  /** @class */
  function() {
    function e() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return e;
  }()
), yp = (
  /** @class */
  function() {
    function e() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return e;
  }()
), bp = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, vp = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, fa = 3, mp = [
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
  ["searchbot", bp]
], ha = [
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
function _p(e) {
  return e ? da(e) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new yp() : typeof navigator < "u" ? da(navigator.userAgent) : Sp();
}
function wp(e) {
  return e !== "" && mp.reduce(function(t, r) {
    var n = r[0], i = r[1];
    if (t)
      return t;
    var s = i.exec(e);
    return !!s && [n, s];
  }, !1);
}
function da(e) {
  var t = wp(e);
  if (!t)
    return null;
  var r = t[0], n = t[1];
  if (r === "searchbot")
    return new gp();
  var i = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
  i ? i.length < fa && (i = la(la([], i, !0), Dp(fa - i.length), !0)) : i = [];
  var s = i.join("."), u = Ep(e), a = vp.exec(e);
  return a && a[1] ? new pp(r, s, u, a[1]) : new hp(r, s, u);
}
function Ep(e) {
  for (var t = 0, r = ha.length; t < r; t++) {
    var n = ha[t], i = n[0], s = n[1], u = s.exec(e);
    if (u)
      return i;
  }
  return null;
}
function Sp() {
  var e = typeof process < "u" && process.version;
  return e ? new dp(process.version.slice(1)) : null;
}
function Dp(e) {
  for (var t = [], r = 0; r < e; r++)
    t.push("0");
  return t;
}
var Ue = {};
Object.defineProperty(Ue, "__esModule", { value: !0 });
Ue.getLocalStorage = Ue.getLocalStorageOrThrow = Ue.getCrypto = Ue.getCryptoOrThrow = au = Ue.getLocation = Ue.getLocationOrThrow = Us = Ue.getNavigator = Ue.getNavigatorOrThrow = ou = Ue.getDocument = Ue.getDocumentOrThrow = Ue.getFromWindowOrThrow = Ue.getFromWindow = void 0;
function $r(e) {
  let t;
  return typeof window < "u" && typeof window[e] < "u" && (t = window[e]), t;
}
Ue.getFromWindow = $r;
function en(e) {
  const t = $r(e);
  if (!t)
    throw new Error(`${e} is not defined in Window`);
  return t;
}
Ue.getFromWindowOrThrow = en;
function Op() {
  return en("document");
}
Ue.getDocumentOrThrow = Op;
function Ip() {
  return $r("document");
}
var ou = Ue.getDocument = Ip;
function xp() {
  return en("navigator");
}
Ue.getNavigatorOrThrow = xp;
function Cp() {
  return $r("navigator");
}
var Us = Ue.getNavigator = Cp;
function Ap() {
  return en("location");
}
Ue.getLocationOrThrow = Ap;
function Rp() {
  return $r("location");
}
var au = Ue.getLocation = Rp;
function Tp() {
  return en("crypto");
}
Ue.getCryptoOrThrow = Tp;
function Pp() {
  return $r("crypto");
}
Ue.getCrypto = Pp;
function Np() {
  return en("localStorage");
}
Ue.getLocalStorageOrThrow = Np;
function Lp() {
  return $r("localStorage");
}
Ue.getLocalStorage = Lp;
var $s = {};
Object.defineProperty($s, "__esModule", { value: !0 });
var cu = $s.getWindowMetadata = void 0;
const pa = Ue;
function Fp() {
  let e, t;
  try {
    e = pa.getDocumentOrThrow(), t = pa.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const g = e.getElementsByTagName("link"), v = [];
    for (let m = 0; m < g.length; m++) {
      const O = g[m], x = O.getAttribute("rel");
      if (x && x.toLowerCase().indexOf("icon") > -1) {
        const T = O.getAttribute("href");
        if (T)
          if (T.toLowerCase().indexOf("https:") === -1 && T.toLowerCase().indexOf("http:") === -1 && T.indexOf("//") !== 0) {
            let M = t.protocol + "//" + t.host;
            if (T.indexOf("/") === 0)
              M += T;
            else {
              const w = t.pathname.split("/");
              w.pop();
              const I = w.join("/");
              M += I + "/" + T;
            }
            v.push(M);
          } else if (T.indexOf("//") === 0) {
            const M = t.protocol + T;
            v.push(M);
          } else
            v.push(T);
      }
    }
    return v;
  }
  function n(...g) {
    const v = e.getElementsByTagName("meta");
    for (let m = 0; m < v.length; m++) {
      const O = v[m], x = ["itemprop", "property", "name"].map((T) => O.getAttribute(T)).filter((T) => T ? g.includes(T) : !1);
      if (x.length && x) {
        const T = O.getAttribute("content");
        if (T)
          return T;
      }
    }
    return "";
  }
  function i() {
    let g = n("name", "og:site_name", "og:title", "twitter:title");
    return g || (g = e.title), g;
  }
  function s() {
    return n("description", "og:description", "twitter:description", "keywords");
  }
  const u = i(), a = s(), l = t.origin, h = r();
  return {
    description: a,
    url: l,
    icons: h,
    name: u
  };
}
cu = $s.getWindowMetadata = Fp;
var Cn = {}, Up = (e) => encodeURIComponent(e).replace(/[!'()*]/g, (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`), uu = "%[a-f0-9]{2}", ga = new RegExp("(" + uu + ")|([^%]+?)", "gi"), ya = new RegExp("(" + uu + ")+", "gi");
function fs(e, t) {
  try {
    return [decodeURIComponent(e.join(""))];
  } catch {
  }
  if (e.length === 1)
    return e;
  t = t || 1;
  var r = e.slice(0, t), n = e.slice(t);
  return Array.prototype.concat.call([], fs(r), fs(n));
}
function $p(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    for (var t = e.match(ga) || [], r = 1; r < t.length; r++)
      e = fs(t, r).join(""), t = e.match(ga) || [];
    return e;
  }
}
function Mp(e) {
  for (var t = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = ya.exec(e); r; ) {
    try {
      t[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var n = $p(r[0]);
      n !== r[0] && (t[r[0]] = n);
    }
    r = ya.exec(e);
  }
  t["%C2"] = "�";
  for (var i = Object.keys(t), s = 0; s < i.length; s++) {
    var u = i[s];
    e = e.replace(new RegExp(u, "g"), t[u]);
  }
  return e;
}
var jp = function(e) {
  if (typeof e != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
  try {
    return e = e.replace(/\+/g, " "), decodeURIComponent(e);
  } catch {
    return Mp(e);
  }
}, Bp = (e, t) => {
  if (!(typeof e == "string" && typeof t == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (t === "")
    return [e];
  const r = e.indexOf(t);
  return r === -1 ? [e] : [
    e.slice(0, r),
    e.slice(r + t.length)
  ];
}, qp = function(e, t) {
  for (var r = {}, n = Object.keys(e), i = Array.isArray(t), s = 0; s < n.length; s++) {
    var u = n[s], a = e[u];
    (i ? t.indexOf(u) !== -1 : t(u, a, e)) && (r[u] = a);
  }
  return r;
};
(function(e) {
  const t = Up, r = jp, n = Bp, i = qp, s = (w) => w == null, u = Symbol("encodeFragmentIdentifier");
  function a(w) {
    switch (w.arrayFormat) {
      case "index":
        return (I) => (y, E) => {
          const d = y.length;
          return E === void 0 || w.skipNull && E === null || w.skipEmptyString && E === "" ? y : E === null ? [...y, [f(I, w), "[", d, "]"].join("")] : [
            ...y,
            [f(I, w), "[", f(d, w), "]=", f(E, w)].join("")
          ];
        };
      case "bracket":
        return (I) => (y, E) => E === void 0 || w.skipNull && E === null || w.skipEmptyString && E === "" ? y : E === null ? [...y, [f(I, w), "[]"].join("")] : [...y, [f(I, w), "[]=", f(E, w)].join("")];
      case "colon-list-separator":
        return (I) => (y, E) => E === void 0 || w.skipNull && E === null || w.skipEmptyString && E === "" ? y : E === null ? [...y, [f(I, w), ":list="].join("")] : [...y, [f(I, w), ":list=", f(E, w)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const I = w.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (y) => (E, d) => d === void 0 || w.skipNull && d === null || w.skipEmptyString && d === "" ? E : (d = d === null ? "" : d, E.length === 0 ? [[f(y, w), I, f(d, w)].join("")] : [[E, f(d, w)].join(w.arrayFormatSeparator)]);
      }
      default:
        return (I) => (y, E) => E === void 0 || w.skipNull && E === null || w.skipEmptyString && E === "" ? y : E === null ? [...y, f(I, w)] : [...y, [f(I, w), "=", f(E, w)].join("")];
    }
  }
  function l(w) {
    let I;
    switch (w.arrayFormat) {
      case "index":
        return (y, E, d) => {
          if (I = /\[(\d*)\]$/.exec(y), y = y.replace(/\[\d*\]$/, ""), !I) {
            d[y] = E;
            return;
          }
          d[y] === void 0 && (d[y] = {}), d[y][I[1]] = E;
        };
      case "bracket":
        return (y, E, d) => {
          if (I = /(\[\])$/.exec(y), y = y.replace(/\[\]$/, ""), !I) {
            d[y] = E;
            return;
          }
          if (d[y] === void 0) {
            d[y] = [E];
            return;
          }
          d[y] = [].concat(d[y], E);
        };
      case "colon-list-separator":
        return (y, E, d) => {
          if (I = /(:list)$/.exec(y), y = y.replace(/:list$/, ""), !I) {
            d[y] = E;
            return;
          }
          if (d[y] === void 0) {
            d[y] = [E];
            return;
          }
          d[y] = [].concat(d[y], E);
        };
      case "comma":
      case "separator":
        return (y, E, d) => {
          const o = typeof E == "string" && E.includes(w.arrayFormatSeparator), p = typeof E == "string" && !o && g(E, w).includes(w.arrayFormatSeparator);
          E = p ? g(E, w) : E;
          const L = o || p ? E.split(w.arrayFormatSeparator).map((F) => g(F, w)) : E === null ? E : g(E, w);
          d[y] = L;
        };
      case "bracket-separator":
        return (y, E, d) => {
          const o = /(\[\])$/.test(y);
          if (y = y.replace(/\[\]$/, ""), !o) {
            d[y] = E && g(E, w);
            return;
          }
          const p = E === null ? [] : E.split(w.arrayFormatSeparator).map((L) => g(L, w));
          if (d[y] === void 0) {
            d[y] = p;
            return;
          }
          d[y] = [].concat(d[y], p);
        };
      default:
        return (y, E, d) => {
          if (d[y] === void 0) {
            d[y] = E;
            return;
          }
          d[y] = [].concat(d[y], E);
        };
    }
  }
  function h(w) {
    if (typeof w != "string" || w.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function f(w, I) {
    return I.encode ? I.strict ? t(w) : encodeURIComponent(w) : w;
  }
  function g(w, I) {
    return I.decode ? r(w) : w;
  }
  function v(w) {
    return Array.isArray(w) ? w.sort() : typeof w == "object" ? v(Object.keys(w)).sort((I, y) => Number(I) - Number(y)).map((I) => w[I]) : w;
  }
  function m(w) {
    const I = w.indexOf("#");
    return I !== -1 && (w = w.slice(0, I)), w;
  }
  function O(w) {
    let I = "";
    const y = w.indexOf("#");
    return y !== -1 && (I = w.slice(y)), I;
  }
  function x(w) {
    w = m(w);
    const I = w.indexOf("?");
    return I === -1 ? "" : w.slice(I + 1);
  }
  function T(w, I) {
    return I.parseNumbers && !Number.isNaN(Number(w)) && typeof w == "string" && w.trim() !== "" ? w = Number(w) : I.parseBooleans && w !== null && (w.toLowerCase() === "true" || w.toLowerCase() === "false") && (w = w.toLowerCase() === "true"), w;
  }
  function M(w, I) {
    I = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, I), h(I.arrayFormatSeparator);
    const y = l(I), E = /* @__PURE__ */ Object.create(null);
    if (typeof w != "string" || (w = w.trim().replace(/^[?#&]/, ""), !w))
      return E;
    for (const d of w.split("&")) {
      if (d === "")
        continue;
      let [o, p] = n(I.decode ? d.replace(/\+/g, " ") : d, "=");
      p = p === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(I.arrayFormat) ? p : g(p, I), y(g(o, I), p, E);
    }
    for (const d of Object.keys(E)) {
      const o = E[d];
      if (typeof o == "object" && o !== null)
        for (const p of Object.keys(o))
          o[p] = T(o[p], I);
      else
        E[d] = T(o, I);
    }
    return I.sort === !1 ? E : (I.sort === !0 ? Object.keys(E).sort() : Object.keys(E).sort(I.sort)).reduce((d, o) => {
      const p = E[o];
      return p && typeof p == "object" && !Array.isArray(p) ? d[o] = v(p) : d[o] = p, d;
    }, /* @__PURE__ */ Object.create(null));
  }
  e.extract = x, e.parse = M, e.stringify = (w, I) => {
    if (!w)
      return "";
    I = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, I), h(I.arrayFormatSeparator);
    const y = (p) => I.skipNull && s(w[p]) || I.skipEmptyString && w[p] === "", E = a(I), d = {};
    for (const p of Object.keys(w))
      y(p) || (d[p] = w[p]);
    const o = Object.keys(d);
    return I.sort !== !1 && o.sort(I.sort), o.map((p) => {
      const L = w[p];
      return L === void 0 ? "" : L === null ? f(p, I) : Array.isArray(L) ? L.length === 0 && I.arrayFormat === "bracket-separator" ? f(p, I) + "[]" : L.reduce(E(p), []).join("&") : f(p, I) + "=" + f(L, I);
    }).filter((p) => p.length > 0).join("&");
  }, e.parseUrl = (w, I) => {
    I = Object.assign({
      decode: !0
    }, I);
    const [y, E] = n(w, "#");
    return Object.assign(
      {
        url: y.split("?")[0] || "",
        query: M(x(w), I)
      },
      I && I.parseFragmentIdentifier && E ? { fragmentIdentifier: g(E, I) } : {}
    );
  }, e.stringifyUrl = (w, I) => {
    I = Object.assign({
      encode: !0,
      strict: !0,
      [u]: !0
    }, I);
    const y = m(w.url).split("?")[0] || "", E = e.extract(w.url), d = e.parse(E, { sort: !1 }), o = Object.assign(d, w.query);
    let p = e.stringify(o, I);
    p && (p = `?${p}`);
    let L = O(w.url);
    return w.fragmentIdentifier && (L = `#${I[u] ? f(w.fragmentIdentifier, I) : w.fragmentIdentifier}`), `${y}${p}${L}`;
  }, e.pick = (w, I, y) => {
    y = Object.assign({
      parseFragmentIdentifier: !0,
      [u]: !1
    }, y);
    const { url: E, query: d, fragmentIdentifier: o } = e.parseUrl(w, y);
    return e.stringifyUrl({
      url: E,
      query: i(d, I),
      fragmentIdentifier: o
    }, y);
  }, e.exclude = (w, I, y) => {
    const E = Array.isArray(I) ? (d) => !I.includes(d) : (d, o) => !I(d, o);
    return e.pick(w, E, y);
  };
})(Cn);
const zp = {
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
function lu(e, t) {
  return e.includes(":") ? [e] : t.chains || [];
}
const fu = "base10", It = "base16", hs = "base64pad", Ms = "utf8", hu = 0, Mr = 1, Kp = 0, ba = 1, ds = 12, js = 32;
function Vp() {
  const e = Fs.generateKeyPair();
  return { privateKey: xt(e.secretKey, It), publicKey: xt(e.publicKey, It) };
}
function ps() {
  const e = Zr.randomBytes(js);
  return xt(e, It);
}
function kp(e, t) {
  const r = Fs.sharedKey(At(e, It), At(t, It)), n = new fp(bi.SHA256, r).expand(js);
  return xt(n, It);
}
function Wp(e) {
  const t = bi.hash(At(e, It));
  return xt(t, It);
}
function Hr(e) {
  const t = bi.hash(At(e, Ms));
  return xt(t, It);
}
function Hp(e) {
  return At(`${e}`, fu);
}
function Nn(e) {
  return Number(xt(e, fu));
}
function Gp(e) {
  const t = Hp(typeof e.type < "u" ? e.type : hu);
  if (Nn(t) === Mr && typeof e.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof e.senderPublicKey < "u" ? At(e.senderPublicKey, It) : void 0, n = typeof e.iv < "u" ? At(e.iv, It) : Zr.randomBytes(ds), i = new Ns.ChaCha20Poly1305(At(e.symKey, It)).seal(n, At(e.message, Ms));
  return Jp({ type: t, sealed: i, iv: n, senderPublicKey: r });
}
function Yp(e) {
  const t = new Ns.ChaCha20Poly1305(At(e.symKey, It)), { sealed: r, iv: n } = ei(e.encoded), i = t.open(n, r);
  if (i === null)
    throw new Error("Failed to decrypt");
  return xt(i, Ms);
}
function Jp(e) {
  if (Nn(e.type) === Mr) {
    if (typeof e.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return xt(us([e.type, e.senderPublicKey, e.iv, e.sealed]), hs);
  }
  return xt(us([e.type, e.iv, e.sealed]), hs);
}
function ei(e) {
  const t = At(e, hs), r = t.slice(Kp, ba), n = ba;
  if (Nn(r) === Mr) {
    const a = n + js, l = a + ds, h = t.slice(n, a), f = t.slice(a, l), g = t.slice(l);
    return { type: r, sealed: g, iv: f, senderPublicKey: h };
  }
  const i = n + ds, s = t.slice(n, i), u = t.slice(i);
  return { type: r, sealed: u, iv: s };
}
function Xp(e, t) {
  const r = ei(e);
  return du({ type: Nn(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? xt(r.senderPublicKey, It) : void 0, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey });
}
function du(e) {
  const t = (e == null ? void 0 : e.type) || hu;
  if (t === Mr) {
    if (typeof (e == null ? void 0 : e.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (e == null ? void 0 : e.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: t, senderPublicKey: e == null ? void 0 : e.senderPublicKey, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey };
}
function va(e) {
  return e.type === Mr && typeof e.senderPublicKey == "string" && typeof e.receiverPublicKey == "string";
}
var Qp = Object.defineProperty, ma = Object.getOwnPropertySymbols, Zp = Object.prototype.hasOwnProperty, eg = Object.prototype.propertyIsEnumerable, _a = (e, t, r) => t in e ? Qp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, wa = (e, t) => {
  for (var r in t || (t = {}))
    Zp.call(t, r) && _a(e, r, t[r]);
  if (ma)
    for (var r of ma(t))
      eg.call(t, r) && _a(e, r, t[r]);
  return e;
};
const tg = "ReactNative", vr = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, rg = "js";
function Bs() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function pu() {
  return !ou() && !!Us() && navigator.product === tg;
}
function qs() {
  return !Bs() && !!Us();
}
function zs() {
  return pu() ? vr.reactNative : Bs() ? vr.node : qs() ? vr.browser : vr.unknown;
}
function ng(e, t) {
  let r = Cn.parse(e);
  return r = wa(wa({}, r), t), e = Cn.stringify(r), e;
}
function ig() {
  return cu() || { name: "", description: "", url: "", icons: [""] };
}
function sg() {
  if (zs() === vr.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: n } = global.Platform;
    return [r, n].join("-");
  }
  const e = _p();
  if (e === null)
    return "unknown";
  const t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
  return e.type === "browser" ? [t, e.name, e.version].join("-") : [t, e.version].join("-");
}
function og() {
  var e;
  const t = zs();
  return t === vr.browser ? [t, ((e = au()) == null ? void 0 : e.host) || "unknown"].join(":") : t;
}
function ag(e, t, r) {
  const n = sg(), i = og();
  return [[e, t].join("-"), [rg, r].join("-"), n, i].join("/");
}
function cg({ protocol: e, version: t, relayUrl: r, sdkVersion: n, auth: i, projectId: s, useOnCloseEvent: u }) {
  const a = r.split("?"), l = ag(e, t, n), h = { auth: i, ua: l, projectId: s, useOnCloseEvent: u || void 0 }, f = ng(a[1] || "", h);
  return a[0] + "?" + f;
}
function Nr(e, t) {
  return e.filter((r) => t.includes(r)).length === e.length;
}
function gu(e) {
  return Object.fromEntries(e.entries());
}
function yu(e) {
  return new Map(Object.entries(e));
}
function Vr(e = te.FIVE_MINUTES, t) {
  const r = te.toMiliseconds(e || te.FIVE_MINUTES);
  let n, i, s;
  return { resolve: (u) => {
    s && n && (clearTimeout(s), n(u));
  }, reject: (u) => {
    s && i && (clearTimeout(s), i(u));
  }, done: () => new Promise((u, a) => {
    s = setTimeout(() => {
      a(new Error(t));
    }, r), n = u, i = a;
  }) };
}
function ti(e, t, r) {
  return new Promise(async (n, i) => {
    const s = setTimeout(() => i(new Error(r)), t);
    try {
      const u = await e;
      n(u);
    } catch (u) {
      i(u);
    }
    clearTimeout(s);
  });
}
function bu(e, t) {
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
function ug(e) {
  return bu("topic", e);
}
function lg(e) {
  return bu("id", e);
}
function vu(e) {
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
function br(e) {
  return Date.now() >= te.toMiliseconds(e);
}
function st(e, t) {
  return `${e}${t ? `:${t}` : ""}`;
}
async function fg({ id: e, topic: t, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const n = typeof r == "string" ? JSON.parse(r) : r;
    let i = n == null ? void 0 : n.href;
    if (typeof i != "string")
      return;
    i.endsWith("/") && (i = i.slice(0, -1));
    const s = `${i}/wc?requestId=${e}&sessionTopic=${t}`, u = zs();
    u === vr.browser ? s.startsWith("https://") ? window.open(s, "_blank", "noreferrer noopener") : window.open(s, "_self", "noreferrer noopener") : u === vr.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(s);
  } catch (n) {
    console.error(n);
  }
}
const hg = "irn";
function gs(e) {
  return (e == null ? void 0 : e.relay) || { protocol: hg };
}
function Yn(e) {
  const t = zp[e];
  if (typeof t > "u")
    throw new Error(`Relay Protocol not supported: ${e}`);
  return t;
}
var dg = Object.defineProperty, Ea = Object.getOwnPropertySymbols, pg = Object.prototype.hasOwnProperty, gg = Object.prototype.propertyIsEnumerable, Sa = (e, t, r) => t in e ? dg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, yg = (e, t) => {
  for (var r in t || (t = {}))
    pg.call(t, r) && Sa(e, r, t[r]);
  if (Ea)
    for (var r of Ea(t))
      gg.call(t, r) && Sa(e, r, t[r]);
  return e;
};
function bg(e, t = "-") {
  const r = {}, n = "relay" + t;
  return Object.keys(e).forEach((i) => {
    if (i.startsWith(n)) {
      const s = i.replace(n, ""), u = e[i];
      r[s] = u;
    }
  }), r;
}
function vg(e) {
  const t = e.indexOf(":"), r = e.indexOf("?") !== -1 ? e.indexOf("?") : void 0, n = e.substring(0, t), i = e.substring(t + 1, r).split("@"), s = typeof r < "u" ? e.substring(r) : "", u = Cn.parse(s);
  return { protocol: n, topic: mg(i[0]), version: parseInt(i[1], 10), symKey: u.symKey, relay: bg(u) };
}
function mg(e) {
  return e.startsWith("//") ? e.substring(2) : e;
}
function _g(e, t = "-") {
  const r = "relay", n = {};
  return Object.keys(e).forEach((i) => {
    const s = r + t + i;
    e[i] && (n[s] = e[i]);
  }), n;
}
function wg(e) {
  return `${e.protocol}:${e.topic}@${e.version}?` + Cn.stringify(yg({ symKey: e.symKey }, _g(e.relay)));
}
function tn(e) {
  const t = [];
  return e.forEach((r) => {
    const [n, i] = r.split(":");
    t.push(`${n}:${i}`);
  }), t;
}
function Eg(e) {
  const t = [];
  return Object.values(e).forEach((r) => {
    t.push(...tn(r.accounts));
  }), t;
}
function Sg(e, t) {
  const r = [];
  return Object.values(e).forEach((n) => {
    tn(n.accounts).includes(t) && r.push(...n.methods);
  }), r;
}
function Dg(e, t) {
  const r = [];
  return Object.values(e).forEach((n) => {
    tn(n.accounts).includes(t) && r.push(...n.events);
  }), r;
}
function Og(e, t) {
  const r = Jn(e, t);
  if (r)
    throw new Error(r.message);
  const n = {};
  for (const [i, s] of Object.entries(e))
    n[i] = { methods: s.methods, events: s.events, chains: s.accounts.map((u) => `${u.split(":")[0]}:${u.split(":")[1]}`) };
  return n;
}
const Ig = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, xg = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function X(e, t) {
  const { message: r, code: n } = xg[e];
  return { message: t ? `${r} ${t}` : r, code: n };
}
function ot(e, t) {
  const { message: r, code: n } = Ig[e];
  return { message: t ? `${r} ${t}` : r, code: n };
}
function Ln(e, t) {
  return Array.isArray(e) ? typeof t < "u" && e.length ? e.every(t) : !0 : !1;
}
function On(e) {
  return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
}
function Ot(e) {
  return typeof e > "u";
}
function lt(e, t) {
  return t && Ot(e) ? !0 : typeof e == "string" && !!e.trim().length;
}
function Ks(e, t) {
  return t && Ot(e) ? !0 : typeof e == "number" && !isNaN(e);
}
function Cg(e, t) {
  const { requiredNamespaces: r } = t, n = Object.keys(e.namespaces), i = Object.keys(r);
  let s = !0;
  return Nr(i, n) ? (n.forEach((u) => {
    const { accounts: a, methods: l, events: h } = e.namespaces[u], f = tn(a), g = r[u];
    (!Nr(lu(u, g), f) || !Nr(g.methods, l) || !Nr(g.events, h)) && (s = !1);
  }), s) : !1;
}
function ri(e) {
  return lt(e, !1) && e.includes(":") ? e.split(":").length === 2 : !1;
}
function Ag(e) {
  if (lt(e, !1) && e.includes(":")) {
    const t = e.split(":");
    if (t.length === 3) {
      const r = t[0] + ":" + t[1];
      return !!t[2] && ri(r);
    }
  }
  return !1;
}
function Rg(e) {
  if (lt(e, !1))
    try {
      return typeof new URL(e) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function Tg(e) {
  var t;
  return (t = e == null ? void 0 : e.proposer) == null ? void 0 : t.publicKey;
}
function Pg(e) {
  return e == null ? void 0 : e.topic;
}
function Ng(e, t) {
  let r = null;
  return lt(e == null ? void 0 : e.publicKey, !1) || (r = X("MISSING_OR_INVALID", `${t} controller public key should be a string`)), r;
}
function Da(e) {
  let t = !0;
  return Ln(e) ? e.length && (t = e.every((r) => lt(r, !1))) : t = !1, t;
}
function Lg(e, t, r) {
  let n = null;
  return Ln(t) && t.length ? t.forEach((i) => {
    n || ri(i) || (n = ot("UNSUPPORTED_CHAINS", `${r}, chain ${i} should be a string and conform to "namespace:chainId" format`));
  }) : ri(e) || (n = ot("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), n;
}
function Fg(e, t, r) {
  let n = null;
  return Object.entries(e).forEach(([i, s]) => {
    if (n)
      return;
    const u = Lg(i, lu(i, s), `${t} ${r}`);
    u && (n = u);
  }), n;
}
function Ug(e, t) {
  let r = null;
  return Ln(e) ? e.forEach((n) => {
    r || Ag(n) || (r = ot("UNSUPPORTED_ACCOUNTS", `${t}, account ${n} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = ot("UNSUPPORTED_ACCOUNTS", `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function $g(e, t) {
  let r = null;
  return Object.values(e).forEach((n) => {
    if (r)
      return;
    const i = Ug(n == null ? void 0 : n.accounts, `${t} namespace`);
    i && (r = i);
  }), r;
}
function Mg(e, t) {
  let r = null;
  return Da(e == null ? void 0 : e.methods) ? Da(e == null ? void 0 : e.events) || (r = ot("UNSUPPORTED_EVENTS", `${t}, events should be an array of strings or empty array for no events`)) : r = ot("UNSUPPORTED_METHODS", `${t}, methods should be an array of strings or empty array for no methods`), r;
}
function mu(e, t) {
  let r = null;
  return Object.values(e).forEach((n) => {
    if (r)
      return;
    const i = Mg(n, `${t}, namespace`);
    i && (r = i);
  }), r;
}
function jg(e, t, r) {
  let n = null;
  if (e && On(e)) {
    const i = mu(e, t);
    i && (n = i);
    const s = Fg(e, t, r);
    s && (n = s);
  } else
    n = X("MISSING_OR_INVALID", `${t}, ${r} should be an object with data`);
  return n;
}
function Jn(e, t) {
  let r = null;
  if (e && On(e)) {
    const n = mu(e, t);
    n && (r = n);
    const i = $g(e, t);
    i && (r = i);
  } else
    r = X("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
  return r;
}
function _u(e) {
  return lt(e.protocol, !0);
}
function Bg(e, t) {
  let r = !1;
  return t && !e ? r = !0 : e && Ln(e) && e.length && e.forEach((n) => {
    r = _u(n);
  }), r;
}
function qg(e) {
  return typeof e == "number";
}
function Ct(e) {
  return typeof e < "u" && typeof e !== null;
}
function zg(e) {
  return !(!e || typeof e != "object" || !e.code || !Ks(e.code, !1) || !e.message || !lt(e.message, !1));
}
function Kg(e) {
  return !(Ot(e) || !lt(e.method, !1));
}
function Vg(e) {
  return !(Ot(e) || Ot(e.result) && Ot(e.error) || !Ks(e.id, !1) || !lt(e.jsonrpc, !1));
}
function kg(e) {
  return !(Ot(e) || !lt(e.name, !1));
}
function Oa(e, t) {
  return !(!ri(t) || !Eg(e).includes(t));
}
function Wg(e, t, r) {
  return lt(r, !1) ? Sg(e, t).includes(r) : !1;
}
function Hg(e, t, r) {
  return lt(r, !1) ? Dg(e, t).includes(r) : !1;
}
function Ia(e, t, r) {
  let n = null;
  const i = Gg(e), s = Yg(t), u = Object.keys(i), a = Object.keys(s), l = xa(Object.keys(e)), h = xa(Object.keys(t)), f = l.filter((g) => !h.includes(g));
  return f.length && (n = X("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${f.toString()}
      Received: ${Object.keys(t).toString()}`)), Nr(u, a) || (n = X("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${u.toString()}
      Approved: ${a.toString()}`)), Object.keys(t).forEach((g) => {
    if (!g.includes(":") || n)
      return;
    const v = tn(t[g].accounts);
    v.includes(g) || (n = X("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${g}
        Required: ${g}
        Approved: ${v.toString()}`));
  }), u.forEach((g) => {
    n || (Nr(i[g].methods, s[g].methods) ? Nr(i[g].events, s[g].events) || (n = X("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${g}`)) : n = X("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${g}`));
  }), n;
}
function Gg(e) {
  const t = {};
  return Object.keys(e).forEach((r) => {
    var n;
    r.includes(":") ? t[r] = e[r] : (n = e[r].chains) == null || n.forEach((i) => {
      t[i] = { methods: e[r].methods, events: e[r].events };
    });
  }), t;
}
function xa(e) {
  return [...new Set(e.map((t) => t.includes(":") ? t.split(":")[0] : t))];
}
function Yg(e) {
  const t = {};
  return Object.keys(e).forEach((r) => {
    if (r.includes(":"))
      t[r] = e[r];
    else {
      const n = tn(e[r].accounts);
      n == null || n.forEach((i) => {
        t[i] = { accounts: e[r].accounts.filter((s) => s.includes(`${i}:`)), methods: e[r].methods, events: e[r].events };
      });
    }
  }), t;
}
function Jg(e, t) {
  return Ks(e, !1) && e <= t.max && e >= t.min;
}
const Xg = "PARSE_ERROR", Qg = "INVALID_REQUEST", Zg = "METHOD_NOT_FOUND", ey = "INVALID_PARAMS", wu = "INTERNAL_ERROR", Vs = "SERVER_ERROR", ty = [-32700, -32600, -32601, -32602, -32603], In = {
  [Xg]: { code: -32700, message: "Parse error" },
  [Qg]: { code: -32600, message: "Invalid Request" },
  [Zg]: { code: -32601, message: "Method not found" },
  [ey]: { code: -32602, message: "Invalid params" },
  [wu]: { code: -32603, message: "Internal error" },
  [Vs]: { code: -32e3, message: "Server error" }
}, Eu = Vs;
function ry(e) {
  return ty.includes(e);
}
function Ca(e) {
  return Object.keys(In).includes(e) ? In[e] : In[Eu];
}
function ny(e) {
  const t = Object.values(In).find((r) => r.code === e);
  return t || In[Eu];
}
function iy(e, t, r) {
  return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${t}`) : e;
}
var Su = {}, ar = {}, Aa;
function sy() {
  if (Aa)
    return ar;
  Aa = 1, Object.defineProperty(ar, "__esModule", { value: !0 }), ar.isBrowserCryptoAvailable = ar.getSubtleCrypto = ar.getBrowerCrypto = void 0;
  function e() {
    return (Pt == null ? void 0 : Pt.crypto) || (Pt == null ? void 0 : Pt.msCrypto) || {};
  }
  ar.getBrowerCrypto = e;
  function t() {
    const n = e();
    return n.subtle || n.webkitSubtle;
  }
  ar.getSubtleCrypto = t;
  function r() {
    return !!e() && !!t();
  }
  return ar.isBrowserCryptoAvailable = r, ar;
}
var cr = {}, Ra;
function oy() {
  if (Ra)
    return cr;
  Ra = 1, Object.defineProperty(cr, "__esModule", { value: !0 }), cr.isBrowser = cr.isNode = cr.isReactNative = void 0;
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
  const t = Vt;
  t.__exportStar(sy(), e), t.__exportStar(oy(), e);
})(Su);
function Du(e = 3) {
  const t = Date.now() * Math.pow(10, e), r = Math.floor(Math.random() * Math.pow(10, e));
  return t + r;
}
function ks(e = 6) {
  return BigInt(Du(e));
}
function vi(e, t, r) {
  return {
    id: r || Du(),
    jsonrpc: "2.0",
    method: e,
    params: t
  };
}
function Ws(e, t) {
  return {
    id: e,
    jsonrpc: "2.0",
    result: t
  };
}
function Hs(e, t, r) {
  return {
    id: e,
    jsonrpc: "2.0",
    error: ay(t, r)
  };
}
function ay(e, t) {
  return typeof e > "u" ? Ca(wu) : (typeof e == "string" && (e = Object.assign(Object.assign({}, Ca(Vs)), { message: e })), typeof t < "u" && (e.data = t), ry(e.code) && (e = ny(e.code)), e);
}
class cy {
}
class uy extends cy {
  constructor() {
    super();
  }
}
class ly extends uy {
  constructor(t) {
    super();
  }
}
const fy = "^wss?:";
function hy(e) {
  const t = e.match(new RegExp(/^\w+:/, "gi"));
  if (!(!t || !t.length))
    return t[0];
}
function dy(e, t) {
  const r = hy(e);
  return typeof r > "u" ? !1 : new RegExp(t).test(r);
}
function Ta(e) {
  return dy(e, fy);
}
function py(e) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(e);
}
function Ou(e) {
  return typeof e == "object" && "id" in e && "jsonrpc" in e && e.jsonrpc === "2.0";
}
function Gs(e) {
  return Ou(e) && "method" in e;
}
function mi(e) {
  return Ou(e) && (ur(e) || Gt(e));
}
function ur(e) {
  return "result" in e;
}
function Gt(e) {
  return "error" in e;
}
class gy extends ly {
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
    return this.requestStrict(vi(t.method, t.params || [], t.id || ks().toString()), r);
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
        Gt(s) ? i(s.error) : n(s.result);
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
    this.events.emit("payload", t), mi(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", {
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
const yy = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), by = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", Pa = (e) => e.split("?")[0], Na = 10, vy = yy();
class my {
  constructor(t) {
    if (this.url = t, this.events = new Jt.EventEmitter(), this.registering = !1, !Ta(t))
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
      this.socket.send(Rs(t));
    } catch (n) {
      this.onError(t.id, n);
    }
  }
  register(t = this.url) {
    if (!Ta(t))
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
      const i = Su.isReactNative() ? void 0 : { rejectUnauthorized: !py(t) }, s = new vy(t, [], i);
      by() ? s.onerror = (u) => {
        const a = u;
        n(this.emitError(a.error));
      } : s.on("error", (u) => {
        n(this.emitError(u));
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
    const r = typeof t.data == "string" ? jc(t.data) : t.data;
    this.events.emit("payload", r);
  }
  onError(t, r) {
    const n = this.parseError(r), i = n.message || n.toString(), s = Hs(t, i);
    this.events.emit("payload", s);
  }
  parseError(t, r = this.url) {
    return iy(t, Pa(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Na && this.events.setMaxListeners(Na);
  }
  emitError(t) {
    const r = this.parseError(new Error((t == null ? void 0 : t.message) || `WebSocket connection failed for host: ${Pa(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var ni = { exports: {} };
ni.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", i = 1, s = 2, u = 9007199254740991, a = "[object Arguments]", l = "[object Array]", h = "[object AsyncFunction]", f = "[object Boolean]", g = "[object Date]", v = "[object Error]", m = "[object Function]", O = "[object GeneratorFunction]", x = "[object Map]", T = "[object Number]", M = "[object Null]", w = "[object Object]", I = "[object Promise]", y = "[object Proxy]", E = "[object RegExp]", d = "[object Set]", o = "[object String]", p = "[object Symbol]", L = "[object Undefined]", F = "[object WeakMap]", U = "[object ArrayBuffer]", $ = "[object DataView]", q = "[object Float32Array]", S = "[object Float64Array]", R = "[object Int8Array]", G = "[object Int16Array]", K = "[object Int32Array]", z = "[object Uint8Array]", k = "[object Uint8ClampedArray]", B = "[object Uint16Array]", W = "[object Uint32Array]", oe = /[\\^$.*+?()[\]{}|]/g, H = /^\[object .+?Constructor\]$/, ne = /^(?:0|[1-9]\d*)$/, Z = {};
  Z[q] = Z[S] = Z[R] = Z[G] = Z[K] = Z[z] = Z[k] = Z[B] = Z[W] = !0, Z[a] = Z[l] = Z[U] = Z[f] = Z[$] = Z[g] = Z[v] = Z[m] = Z[x] = Z[T] = Z[w] = Z[E] = Z[d] = Z[o] = Z[F] = !1;
  var re = typeof Pt == "object" && Pt && Pt.Object === Object && Pt, N = typeof self == "object" && self && self.Object === Object && self, P = re || N || Function("return this")(), C = t && !t.nodeType && t, c = C && !0 && e && !e.nodeType && e, D = c && c.exports === C, Y = D && re.process, Q = function() {
    try {
      return Y && Y.binding && Y.binding("util");
    } catch {
    }
  }(), be = Q && Q.isTypedArray;
  function ve(b, A) {
    for (var V = -1, ee = b == null ? 0 : b.length, je = 0, fe = []; ++V < ee; ) {
      var Je = b[V];
      A(Je, V, b) && (fe[je++] = Je);
    }
    return fe;
  }
  function he(b, A) {
    for (var V = -1, ee = A.length, je = b.length; ++V < ee; )
      b[je + V] = A[V];
    return b;
  }
  function Ie(b, A) {
    for (var V = -1, ee = b == null ? 0 : b.length; ++V < ee; )
      if (A(b[V], V, b))
        return !0;
    return !1;
  }
  function Be(b, A) {
    for (var V = -1, ee = Array(b); ++V < b; )
      ee[V] = A(V);
    return ee;
  }
  function Le(b) {
    return function(A) {
      return b(A);
    };
  }
  function De(b, A) {
    return b.has(A);
  }
  function we(b, A) {
    return b == null ? void 0 : b[A];
  }
  function de(b) {
    var A = -1, V = Array(b.size);
    return b.forEach(function(ee, je) {
      V[++A] = [je, ee];
    }), V;
  }
  function ge(b, A) {
    return function(V) {
      return b(A(V));
    };
  }
  function pe(b) {
    var A = -1, V = Array(b.size);
    return b.forEach(function(ee) {
      V[++A] = ee;
    }), V;
  }
  var ue = Array.prototype, ce = Function.prototype, ie = Object.prototype, ye = P["__core-js_shared__"], me = ce.toString, ae = ie.hasOwnProperty, Ee = function() {
    var b = /[^.]+$/.exec(ye && ye.keys && ye.keys.IE_PROTO || "");
    return b ? "Symbol(src)_1." + b : "";
  }(), xe = ie.toString, Te = RegExp(
    "^" + me.call(ae).replace(oe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Pe = D ? P.Buffer : void 0, Ce = P.Symbol, Rt = P.Uint8Array, Ut = ie.propertyIsEnumerable, Xt = ue.splice, ft = Ce ? Ce.toStringTag : void 0, Qt = Object.getOwnPropertySymbols, $t = Pe ? Pe.isBuffer : void 0, fr = ge(Object.keys, Object), qe = Br(P, "DataView"), $e = Br(P, "Map"), We = Br(P, "Promise"), Ke = Br(P, "Set"), He = Br(P, "WeakMap"), Me = Br(Object, "create"), Qe = Er(qe), tt = Er($e), rt = Er(We), Ze = Er(Ke), nt = Er(He), et = Ce ? Ce.prototype : void 0, Ge = et ? et.valueOf : void 0;
  function Fe(b) {
    var A = -1, V = b == null ? 0 : b.length;
    for (this.clear(); ++A < V; ) {
      var ee = b[A];
      this.set(ee[0], ee[1]);
    }
  }
  function _() {
    this.__data__ = Me ? Me(null) : {}, this.size = 0;
  }
  function j(b) {
    var A = this.has(b) && delete this.__data__[b];
    return this.size -= A ? 1 : 0, A;
  }
  function J(b) {
    var A = this.__data__;
    if (Me) {
      var V = A[b];
      return V === n ? void 0 : V;
    }
    return ae.call(A, b) ? A[b] : void 0;
  }
  function se(b) {
    var A = this.__data__;
    return Me ? A[b] !== void 0 : ae.call(A, b);
  }
  function Ae(b, A) {
    var V = this.__data__;
    return this.size += this.has(b) ? 0 : 1, V[b] = Me && A === void 0 ? n : A, this;
  }
  Fe.prototype.clear = _, Fe.prototype.delete = j, Fe.prototype.get = J, Fe.prototype.has = se, Fe.prototype.set = Ae;
  function Se(b) {
    var A = -1, V = b == null ? 0 : b.length;
    for (this.clear(); ++A < V; ) {
      var ee = b[A];
      this.set(ee[0], ee[1]);
    }
  }
  function Oe() {
    this.__data__ = [], this.size = 0;
  }
  function _e(b) {
    var A = this.__data__, V = Mn(A, b);
    if (V < 0)
      return !1;
    var ee = A.length - 1;
    return V == ee ? A.pop() : Xt.call(A, V, 1), --this.size, !0;
  }
  function ht(b) {
    var A = this.__data__, V = Mn(A, b);
    return V < 0 ? void 0 : A[V][1];
  }
  function Ve(b) {
    return Mn(this.__data__, b) > -1;
  }
  function Ye(b, A) {
    var V = this.__data__, ee = Mn(V, b);
    return ee < 0 ? (++this.size, V.push([b, A])) : V[ee][1] = A, this;
  }
  Se.prototype.clear = Oe, Se.prototype.delete = _e, Se.prototype.get = ht, Se.prototype.has = Ve, Se.prototype.set = Ye;
  function it(b) {
    var A = -1, V = b == null ? 0 : b.length;
    for (this.clear(); ++A < V; ) {
      var ee = b[A];
      this.set(ee[0], ee[1]);
    }
  }
  function hr() {
    this.size = 0, this.__data__ = {
      hash: new Fe(),
      map: new ($e || Se)(),
      string: new Fe()
    };
  }
  function Un(b) {
    var A = jn(this, b).delete(b);
    return this.size -= A ? 1 : 0, A;
  }
  function kt(b) {
    return jn(this, b).get(b);
  }
  function Zu(b) {
    return jn(this, b).has(b);
  }
  function el(b, A) {
    var V = jn(this, b), ee = V.size;
    return V.set(b, A), this.size += V.size == ee ? 0 : 1, this;
  }
  it.prototype.clear = hr, it.prototype.delete = Un, it.prototype.get = kt, it.prototype.has = Zu, it.prototype.set = el;
  function $n(b) {
    var A = -1, V = b == null ? 0 : b.length;
    for (this.__data__ = new it(); ++A < V; )
      this.add(b[A]);
  }
  function tl(b) {
    return this.__data__.set(b, n), this;
  }
  function rl(b) {
    return this.__data__.has(b);
  }
  $n.prototype.add = $n.prototype.push = tl, $n.prototype.has = rl;
  function dr(b) {
    var A = this.__data__ = new Se(b);
    this.size = A.size;
  }
  function nl() {
    this.__data__ = new Se(), this.size = 0;
  }
  function il(b) {
    var A = this.__data__, V = A.delete(b);
    return this.size = A.size, V;
  }
  function sl(b) {
    return this.__data__.get(b);
  }
  function ol(b) {
    return this.__data__.has(b);
  }
  function al(b, A) {
    var V = this.__data__;
    if (V instanceof Se) {
      var ee = V.__data__;
      if (!$e || ee.length < r - 1)
        return ee.push([b, A]), this.size = ++V.size, this;
      V = this.__data__ = new it(ee);
    }
    return V.set(b, A), this.size = V.size, this;
  }
  dr.prototype.clear = nl, dr.prototype.delete = il, dr.prototype.get = sl, dr.prototype.has = ol, dr.prototype.set = al;
  function cl(b, A) {
    var V = Bn(b), ee = !V && Sl(b), je = !V && !ee && Ei(b), fe = !V && !ee && !je && vo(b), Je = V || ee || je || fe, at = Je ? Be(b.length, String) : [], dt = at.length;
    for (var ke in b)
      (A || ae.call(b, ke)) && !(Je && // Safari 9 has enumerable `arguments.length` in strict mode.
      (ke == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      je && (ke == "offset" || ke == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      fe && (ke == "buffer" || ke == "byteLength" || ke == "byteOffset") || // Skip index properties.
      vl(ke, dt))) && at.push(ke);
    return at;
  }
  function Mn(b, A) {
    for (var V = b.length; V--; )
      if (po(b[V][0], A))
        return V;
    return -1;
  }
  function ul(b, A, V) {
    var ee = A(b);
    return Bn(b) ? ee : he(ee, V(b));
  }
  function nn(b) {
    return b == null ? b === void 0 ? L : M : ft && ft in Object(b) ? yl(b) : El(b);
  }
  function uo(b) {
    return sn(b) && nn(b) == a;
  }
  function lo(b, A, V, ee, je) {
    return b === A ? !0 : b == null || A == null || !sn(b) && !sn(A) ? b !== b && A !== A : ll(b, A, V, ee, lo, je);
  }
  function ll(b, A, V, ee, je, fe) {
    var Je = Bn(b), at = Bn(A), dt = Je ? l : pr(b), ke = at ? l : pr(A);
    dt = dt == a ? w : dt, ke = ke == a ? w : ke;
    var Tt = dt == w, Wt = ke == w, bt = dt == ke;
    if (bt && Ei(b)) {
      if (!Ei(A))
        return !1;
      Je = !0, Tt = !1;
    }
    if (bt && !Tt)
      return fe || (fe = new dr()), Je || vo(b) ? fo(b, A, V, ee, je, fe) : pl(b, A, dt, V, ee, je, fe);
    if (!(V & i)) {
      var Mt = Tt && ae.call(b, "__wrapped__"), jt = Wt && ae.call(A, "__wrapped__");
      if (Mt || jt) {
        var gr = Mt ? b.value() : b, or = jt ? A.value() : A;
        return fe || (fe = new dr()), je(gr, or, V, ee, fe);
      }
    }
    return bt ? (fe || (fe = new dr()), gl(b, A, V, ee, je, fe)) : !1;
  }
  function fl(b) {
    if (!bo(b) || _l(b))
      return !1;
    var A = go(b) ? Te : H;
    return A.test(Er(b));
  }
  function hl(b) {
    return sn(b) && yo(b.length) && !!Z[nn(b)];
  }
  function dl(b) {
    if (!wl(b))
      return fr(b);
    var A = [];
    for (var V in Object(b))
      ae.call(b, V) && V != "constructor" && A.push(V);
    return A;
  }
  function fo(b, A, V, ee, je, fe) {
    var Je = V & i, at = b.length, dt = A.length;
    if (at != dt && !(Je && dt > at))
      return !1;
    var ke = fe.get(b);
    if (ke && fe.get(A))
      return ke == A;
    var Tt = -1, Wt = !0, bt = V & s ? new $n() : void 0;
    for (fe.set(b, A), fe.set(A, b); ++Tt < at; ) {
      var Mt = b[Tt], jt = A[Tt];
      if (ee)
        var gr = Je ? ee(jt, Mt, Tt, A, b, fe) : ee(Mt, jt, Tt, b, A, fe);
      if (gr !== void 0) {
        if (gr)
          continue;
        Wt = !1;
        break;
      }
      if (bt) {
        if (!Ie(A, function(or, Sr) {
          if (!De(bt, Sr) && (Mt === or || je(Mt, or, V, ee, fe)))
            return bt.push(Sr);
        })) {
          Wt = !1;
          break;
        }
      } else if (!(Mt === jt || je(Mt, jt, V, ee, fe))) {
        Wt = !1;
        break;
      }
    }
    return fe.delete(b), fe.delete(A), Wt;
  }
  function pl(b, A, V, ee, je, fe, Je) {
    switch (V) {
      case $:
        if (b.byteLength != A.byteLength || b.byteOffset != A.byteOffset)
          return !1;
        b = b.buffer, A = A.buffer;
      case U:
        return !(b.byteLength != A.byteLength || !fe(new Rt(b), new Rt(A)));
      case f:
      case g:
      case T:
        return po(+b, +A);
      case v:
        return b.name == A.name && b.message == A.message;
      case E:
      case o:
        return b == A + "";
      case x:
        var at = de;
      case d:
        var dt = ee & i;
        if (at || (at = pe), b.size != A.size && !dt)
          return !1;
        var ke = Je.get(b);
        if (ke)
          return ke == A;
        ee |= s, Je.set(b, A);
        var Tt = fo(at(b), at(A), ee, je, fe, Je);
        return Je.delete(b), Tt;
      case p:
        if (Ge)
          return Ge.call(b) == Ge.call(A);
    }
    return !1;
  }
  function gl(b, A, V, ee, je, fe) {
    var Je = V & i, at = ho(b), dt = at.length, ke = ho(A), Tt = ke.length;
    if (dt != Tt && !Je)
      return !1;
    for (var Wt = dt; Wt--; ) {
      var bt = at[Wt];
      if (!(Je ? bt in A : ae.call(A, bt)))
        return !1;
    }
    var Mt = fe.get(b);
    if (Mt && fe.get(A))
      return Mt == A;
    var jt = !0;
    fe.set(b, A), fe.set(A, b);
    for (var gr = Je; ++Wt < dt; ) {
      bt = at[Wt];
      var or = b[bt], Sr = A[bt];
      if (ee)
        var mo = Je ? ee(Sr, or, bt, A, b, fe) : ee(or, Sr, bt, b, A, fe);
      if (!(mo === void 0 ? or === Sr || je(or, Sr, V, ee, fe) : mo)) {
        jt = !1;
        break;
      }
      gr || (gr = bt == "constructor");
    }
    if (jt && !gr) {
      var qn = b.constructor, zn = A.constructor;
      qn != zn && "constructor" in b && "constructor" in A && !(typeof qn == "function" && qn instanceof qn && typeof zn == "function" && zn instanceof zn) && (jt = !1);
    }
    return fe.delete(b), fe.delete(A), jt;
  }
  function ho(b) {
    return ul(b, Il, bl);
  }
  function jn(b, A) {
    var V = b.__data__;
    return ml(A) ? V[typeof A == "string" ? "string" : "hash"] : V.map;
  }
  function Br(b, A) {
    var V = we(b, A);
    return fl(V) ? V : void 0;
  }
  function yl(b) {
    var A = ae.call(b, ft), V = b[ft];
    try {
      b[ft] = void 0;
      var ee = !0;
    } catch {
    }
    var je = xe.call(b);
    return ee && (A ? b[ft] = V : delete b[ft]), je;
  }
  var bl = Qt ? function(b) {
    return b == null ? [] : (b = Object(b), ve(Qt(b), function(A) {
      return Ut.call(b, A);
    }));
  } : xl, pr = nn;
  (qe && pr(new qe(new ArrayBuffer(1))) != $ || $e && pr(new $e()) != x || We && pr(We.resolve()) != I || Ke && pr(new Ke()) != d || He && pr(new He()) != F) && (pr = function(b) {
    var A = nn(b), V = A == w ? b.constructor : void 0, ee = V ? Er(V) : "";
    if (ee)
      switch (ee) {
        case Qe:
          return $;
        case tt:
          return x;
        case rt:
          return I;
        case Ze:
          return d;
        case nt:
          return F;
      }
    return A;
  });
  function vl(b, A) {
    return A = A ?? u, !!A && (typeof b == "number" || ne.test(b)) && b > -1 && b % 1 == 0 && b < A;
  }
  function ml(b) {
    var A = typeof b;
    return A == "string" || A == "number" || A == "symbol" || A == "boolean" ? b !== "__proto__" : b === null;
  }
  function _l(b) {
    return !!Ee && Ee in b;
  }
  function wl(b) {
    var A = b && b.constructor, V = typeof A == "function" && A.prototype || ie;
    return b === V;
  }
  function El(b) {
    return xe.call(b);
  }
  function Er(b) {
    if (b != null) {
      try {
        return me.call(b);
      } catch {
      }
      try {
        return b + "";
      } catch {
      }
    }
    return "";
  }
  function po(b, A) {
    return b === A || b !== b && A !== A;
  }
  var Sl = uo(function() {
    return arguments;
  }()) ? uo : function(b) {
    return sn(b) && ae.call(b, "callee") && !Ut.call(b, "callee");
  }, Bn = Array.isArray;
  function Dl(b) {
    return b != null && yo(b.length) && !go(b);
  }
  var Ei = $t || Cl;
  function Ol(b, A) {
    return lo(b, A);
  }
  function go(b) {
    if (!bo(b))
      return !1;
    var A = nn(b);
    return A == m || A == O || A == h || A == y;
  }
  function yo(b) {
    return typeof b == "number" && b > -1 && b % 1 == 0 && b <= u;
  }
  function bo(b) {
    var A = typeof b;
    return b != null && (A == "object" || A == "function");
  }
  function sn(b) {
    return b != null && typeof b == "object";
  }
  var vo = be ? Le(be) : hl;
  function Il(b) {
    return Dl(b) ? cl(b) : dl(b);
  }
  function xl() {
    return [];
  }
  function Cl() {
    return !1;
  }
  e.exports = Ol;
})(ni, ni.exports);
var _y = ni.exports;
const wy = /* @__PURE__ */ ui(_y);
function Ey(e, t) {
  if (e.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
    r[n] = 255;
  for (var i = 0; i < e.length; i++) {
    var s = e.charAt(i), u = s.charCodeAt(0);
    if (r[u] !== 255)
      throw new TypeError(s + " is ambiguous");
    r[u] = i;
  }
  var a = e.length, l = e.charAt(0), h = Math.log(a) / Math.log(256), f = Math.log(256) / Math.log(a);
  function g(O) {
    if (O instanceof Uint8Array || (ArrayBuffer.isView(O) ? O = new Uint8Array(O.buffer, O.byteOffset, O.byteLength) : Array.isArray(O) && (O = Uint8Array.from(O))), !(O instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (O.length === 0)
      return "";
    for (var x = 0, T = 0, M = 0, w = O.length; M !== w && O[M] === 0; )
      M++, x++;
    for (var I = (w - M) * f + 1 >>> 0, y = new Uint8Array(I); M !== w; ) {
      for (var E = O[M], d = 0, o = I - 1; (E !== 0 || d < T) && o !== -1; o--, d++)
        E += 256 * y[o] >>> 0, y[o] = E % a >>> 0, E = E / a >>> 0;
      if (E !== 0)
        throw new Error("Non-zero carry");
      T = d, M++;
    }
    for (var p = I - T; p !== I && y[p] === 0; )
      p++;
    for (var L = l.repeat(x); p < I; ++p)
      L += e.charAt(y[p]);
    return L;
  }
  function v(O) {
    if (typeof O != "string")
      throw new TypeError("Expected String");
    if (O.length === 0)
      return new Uint8Array();
    var x = 0;
    if (O[x] !== " ") {
      for (var T = 0, M = 0; O[x] === l; )
        T++, x++;
      for (var w = (O.length - x) * h + 1 >>> 0, I = new Uint8Array(w); O[x]; ) {
        var y = r[O.charCodeAt(x)];
        if (y === 255)
          return;
        for (var E = 0, d = w - 1; (y !== 0 || E < M) && d !== -1; d--, E++)
          y += a * I[d] >>> 0, I[d] = y % 256 >>> 0, y = y / 256 >>> 0;
        if (y !== 0)
          throw new Error("Non-zero carry");
        M = E, x++;
      }
      if (O[x] !== " ") {
        for (var o = w - M; o !== w && I[o] === 0; )
          o++;
        for (var p = new Uint8Array(T + (w - o)), L = T; o !== w; )
          p[L++] = I[o++];
        return p;
      }
    }
  }
  function m(O) {
    var x = v(O);
    if (x)
      return x;
    throw new Error(`Non-${t} character`);
  }
  return { encode: g, decodeUnsafe: v, decode: m };
}
var Sy = Ey, Dy = Sy;
const Iu = (e) => {
  if (e instanceof Uint8Array && e.constructor.name === "Uint8Array")
    return e;
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  if (ArrayBuffer.isView(e))
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Oy = (e) => new TextEncoder().encode(e), Iy = (e) => new TextDecoder().decode(e);
class xy {
  constructor(t, r, n) {
    this.name = t, this.prefix = r, this.baseEncode = n;
  }
  encode(t) {
    if (t instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Cy {
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
    return xu(this, t);
  }
}
class Ay {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return xu(this, t);
  }
  decode(t) {
    const r = t[0], n = this.decoders[r];
    if (n)
      return n.decode(t);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const xu = (e, t) => new Ay({ ...e.decoders || { [e.prefix]: e }, ...t.decoders || { [t.prefix]: t } });
class Ry {
  constructor(t, r, n, i) {
    this.name = t, this.prefix = r, this.baseEncode = n, this.baseDecode = i, this.encoder = new xy(t, r, n), this.decoder = new Cy(t, r, i);
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const _i = ({ name: e, prefix: t, encode: r, decode: n }) => new Ry(e, t, r, n), Fn = ({ prefix: e, name: t, alphabet: r }) => {
  const { encode: n, decode: i } = Dy(r, t);
  return _i({ prefix: e, name: t, encode: n, decode: (s) => Iu(i(s)) });
}, Ty = (e, t, r, n) => {
  const i = {};
  for (let f = 0; f < t.length; ++f)
    i[t[f]] = f;
  let s = e.length;
  for (; e[s - 1] === "="; )
    --s;
  const u = new Uint8Array(s * r / 8 | 0);
  let a = 0, l = 0, h = 0;
  for (let f = 0; f < s; ++f) {
    const g = i[e[f]];
    if (g === void 0)
      throw new SyntaxError(`Non-${n} character`);
    l = l << r | g, a += r, a >= 8 && (a -= 8, u[h++] = 255 & l >> a);
  }
  if (a >= r || 255 & l << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return u;
}, Py = (e, t, r) => {
  const n = t[t.length - 1] === "=", i = (1 << r) - 1;
  let s = "", u = 0, a = 0;
  for (let l = 0; l < e.length; ++l)
    for (a = a << 8 | e[l], u += 8; u > r; )
      u -= r, s += t[i & a >> u];
  if (u && (s += t[i & a << r - u]), n)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, yt = ({ name: e, prefix: t, bitsPerChar: r, alphabet: n }) => _i({ prefix: t, name: e, encode(i) {
  return Py(i, n, r);
}, decode(i) {
  return Ty(i, n, r, e);
} }), Ny = _i({ prefix: "\0", name: "identity", encode: (e) => Iy(e), decode: (e) => Oy(e) });
var Ly = Object.freeze({ __proto__: null, identity: Ny });
const Fy = yt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var Uy = Object.freeze({ __proto__: null, base2: Fy });
const $y = yt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var My = Object.freeze({ __proto__: null, base8: $y });
const jy = Fn({ prefix: "9", name: "base10", alphabet: "0123456789" });
var By = Object.freeze({ __proto__: null, base10: jy });
const qy = yt({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), zy = yt({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Ky = Object.freeze({ __proto__: null, base16: qy, base16upper: zy });
const Vy = yt({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), ky = yt({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), Wy = yt({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), Hy = yt({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), Gy = yt({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), Yy = yt({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), Jy = yt({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Xy = yt({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), Qy = yt({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Zy = Object.freeze({ __proto__: null, base32: Vy, base32upper: ky, base32pad: Wy, base32padupper: Hy, base32hex: Gy, base32hexupper: Yy, base32hexpad: Jy, base32hexpadupper: Xy, base32z: Qy });
const e0 = Fn({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), t0 = Fn({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var r0 = Object.freeze({ __proto__: null, base36: e0, base36upper: t0 });
const n0 = Fn({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), i0 = Fn({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var s0 = Object.freeze({ __proto__: null, base58btc: n0, base58flickr: i0 });
const o0 = yt({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), a0 = yt({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), c0 = yt({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), u0 = yt({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var l0 = Object.freeze({ __proto__: null, base64: o0, base64pad: a0, base64url: c0, base64urlpad: u0 });
const Cu = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), f0 = Cu.reduce((e, t, r) => (e[r] = t, e), []), h0 = Cu.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []);
function d0(e) {
  return e.reduce((t, r) => (t += f0[r], t), "");
}
function p0(e) {
  const t = [];
  for (const r of e) {
    const n = h0[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    t.push(n);
  }
  return new Uint8Array(t);
}
const g0 = _i({ prefix: "🚀", name: "base256emoji", encode: d0, decode: p0 });
var y0 = Object.freeze({ __proto__: null, base256emoji: g0 }), b0 = Au, La = 128, v0 = 127, m0 = ~v0, _0 = Math.pow(2, 31);
function Au(e, t, r) {
  t = t || [], r = r || 0;
  for (var n = r; e >= _0; )
    t[r++] = e & 255 | La, e /= 128;
  for (; e & m0; )
    t[r++] = e & 255 | La, e >>>= 7;
  return t[r] = e | 0, Au.bytes = r - n + 1, t;
}
var w0 = ys, E0 = 128, Fa = 127;
function ys(e, n) {
  var r = 0, n = n || 0, i = 0, s = n, u, a = e.length;
  do {
    if (s >= a)
      throw ys.bytes = 0, new RangeError("Could not decode varint");
    u = e[s++], r += i < 28 ? (u & Fa) << i : (u & Fa) * Math.pow(2, i), i += 7;
  } while (u >= E0);
  return ys.bytes = s - n, r;
}
var S0 = Math.pow(2, 7), D0 = Math.pow(2, 14), O0 = Math.pow(2, 21), I0 = Math.pow(2, 28), x0 = Math.pow(2, 35), C0 = Math.pow(2, 42), A0 = Math.pow(2, 49), R0 = Math.pow(2, 56), T0 = Math.pow(2, 63), P0 = function(e) {
  return e < S0 ? 1 : e < D0 ? 2 : e < O0 ? 3 : e < I0 ? 4 : e < x0 ? 5 : e < C0 ? 6 : e < A0 ? 7 : e < R0 ? 8 : e < T0 ? 9 : 10;
}, N0 = { encode: b0, decode: w0, encodingLength: P0 }, Ru = N0;
const Ua = (e, t, r = 0) => (Ru.encode(e, t, r), t), $a = (e) => Ru.encodingLength(e), bs = (e, t) => {
  const r = t.byteLength, n = $a(e), i = n + $a(r), s = new Uint8Array(i + r);
  return Ua(e, s, 0), Ua(r, s, n), s.set(t, i), new L0(e, r, t, s);
};
class L0 {
  constructor(t, r, n, i) {
    this.code = t, this.size = r, this.digest = n, this.bytes = i;
  }
}
const Tu = ({ name: e, code: t, encode: r }) => new F0(e, t, r);
class F0 {
  constructor(t, r, n) {
    this.name = t, this.code = r, this.encode = n;
  }
  digest(t) {
    if (t instanceof Uint8Array) {
      const r = this.encode(t);
      return r instanceof Uint8Array ? bs(this.code, r) : r.then((n) => bs(this.code, n));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const Pu = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t)), U0 = Tu({ name: "sha2-256", code: 18, encode: Pu("SHA-256") }), $0 = Tu({ name: "sha2-512", code: 19, encode: Pu("SHA-512") });
var M0 = Object.freeze({ __proto__: null, sha256: U0, sha512: $0 });
const Nu = 0, j0 = "identity", Lu = Iu, B0 = (e) => bs(Nu, Lu(e)), q0 = { code: Nu, name: j0, encode: Lu, digest: B0 };
var z0 = Object.freeze({ __proto__: null, identity: q0 });
new TextEncoder(), new TextDecoder();
const Ma = { ...Ly, ...Uy, ...My, ...By, ...Ky, ...Zy, ...r0, ...s0, ...l0, ...y0 };
({ ...M0, ...z0 });
function Fu(e) {
  return globalThis.Buffer != null ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e;
}
function K0(e = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Fu(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e);
}
function Uu(e, t, r, n) {
  return { name: e, prefix: t, encoder: { name: e, prefix: t, encode: r }, decoder: { decode: n } };
}
const ja = Uu("utf8", "u", (e) => "u" + new TextDecoder("utf8").decode(e), (e) => new TextEncoder().encode(e.substring(1))), Fi = Uu("ascii", "a", (e) => {
  let t = "a";
  for (let r = 0; r < e.length; r++)
    t += String.fromCharCode(e[r]);
  return t;
}, (e) => {
  e = e.substring(1);
  const t = K0(e.length);
  for (let r = 0; r < e.length; r++)
    t[r] = e.charCodeAt(r);
  return t;
}), V0 = { utf8: ja, "utf-8": ja, hex: Ma.base16, latin1: Fi, ascii: Fi, binary: Fi, ...Ma };
function k0(e, t = "utf8") {
  const r = V0[t];
  if (!r)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Fu(globalThis.Buffer.from(e, "utf-8")) : r.decoder.decode(`${r.prefix}${e}`);
}
const $u = "wc", W0 = 2, Ys = "core", mr = `${$u}@2:${Ys}:`, H0 = { name: Ys, logger: "error" }, G0 = { database: ":memory:" }, Y0 = "crypto", Ba = "client_ed25519_seed", J0 = te.ONE_DAY, X0 = "keychain", Q0 = "0.3", Z0 = "messages", eb = "0.3", tb = te.SIX_HOURS, rb = "publisher", Mu = "irn", nb = "error", ju = "wss://relay.walletconnect.com", qa = "wss://relay.walletconnect.org", ib = "relayer", Xe = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, sb = "_subscription", yn = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, ob = te.ONE_SECOND / 2, ab = "2.9.1", cb = 1e4, ub = "0.3", lb = "WALLETCONNECT_CLIENT_ID", nr = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, fb = "subscription", hb = "0.3", db = te.FIVE_SECONDS * 1e3, pb = "pairing", gb = "0.3", bn = { wc_pairingDelete: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 0 } } }, rr = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, yb = "history", bb = "0.3", vb = "expirer", qt = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, mb = "0.3", Ui = "verify-api", za = "https://verify.walletconnect.com";
class _b {
  constructor(t, r) {
    this.core = t, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = X0, this.version = Q0, this.initialized = !1, this.storagePrefix = mr, this.init = async () => {
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
    await this.core.storage.setItem(this.storageKey, gu(t));
  }
  async getKeyChain() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < "u" ? yu(t) : void 0;
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
class wb {
  constructor(t, r, n) {
    this.core = t, this.logger = r, this.name = Y0, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (i) => (this.isInitialized(), this.keychain.has(i)), this.getClientId = async () => {
      this.isInitialized();
      const i = await this.getClientSeed(), s = aa(i);
      return eu(s.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const i = Vp();
      return this.setPrivateKey(i.publicKey, i.privateKey);
    }, this.signJWT = async (i) => {
      this.isInitialized();
      const s = await this.getClientSeed(), u = aa(s), a = ps();
      return await Qd(a, i, J0, u);
    }, this.generateSharedKey = (i, s, u) => {
      this.isInitialized();
      const a = this.getPrivateKey(i), l = kp(a, s);
      return this.setSymKey(l, u);
    }, this.setSymKey = async (i, s) => {
      this.isInitialized();
      const u = s || Wp(i);
      return await this.keychain.set(u, i), u;
    }, this.deleteKeyPair = async (i) => {
      this.isInitialized(), await this.keychain.del(i);
    }, this.deleteSymKey = async (i) => {
      this.isInitialized(), await this.keychain.del(i);
    }, this.encode = async (i, s, u) => {
      this.isInitialized();
      const a = du(u), l = Rs(s);
      if (va(a)) {
        const v = a.senderPublicKey, m = a.receiverPublicKey;
        i = await this.generateSharedKey(v, m);
      }
      const h = this.getSymKey(i), { type: f, senderPublicKey: g } = a;
      return Gp({ type: f, symKey: h, message: l, senderPublicKey: g });
    }, this.decode = async (i, s, u) => {
      this.isInitialized();
      const a = Xp(s, u);
      if (va(a)) {
        const l = a.receiverPublicKey, h = a.senderPublicKey;
        i = await this.generateSharedKey(l, h);
      }
      try {
        const l = this.getSymKey(i), h = Yp({ symKey: l, encoded: s });
        return jc(h);
      } catch (l) {
        this.logger.error(`Failed to decode message from topic: '${i}', clientId: '${await this.getClientId()}'`), this.logger.error(l);
      }
    }, this.getPayloadType = (i) => {
      const s = ei(i);
      return Nn(s.type);
    }, this.getPayloadSenderPublicKey = (i) => {
      const s = ei(i);
      return s.senderPublicKey ? xt(s.senderPublicKey, It) : void 0;
    }, this.core = t, this.logger = Re.generateChildLogger(r, this.name), this.keychain = n || new _b(this.core, this.logger);
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
      t = this.keychain.get(Ba);
    } catch {
      t = ps(), await this.keychain.set(Ba, t);
    }
    return k0(t, "base16");
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
class Eb extends th {
  constructor(t, r) {
    super(t, r), this.logger = t, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = Z0, this.version = eb, this.initialized = !1, this.storagePrefix = mr, this.init = async () => {
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
      const s = Hr(i);
      let u = this.messages.get(n);
      return typeof u > "u" && (u = {}), typeof u[s] < "u" || (u[s] = i, this.messages.set(n, u), await this.persist()), s;
    }, this.get = (n) => {
      this.isInitialized();
      let i = this.messages.get(n);
      return typeof i > "u" && (i = {}), i;
    }, this.has = (n, i) => {
      this.isInitialized();
      const s = this.get(n), u = Hr(i);
      return typeof s[u] < "u";
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
    await this.core.storage.setItem(this.storageKey, gu(t));
  }
  async getRelayerMessages() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < "u" ? yu(t) : void 0;
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
class Sb extends rh {
  constructor(t, r) {
    super(t, r), this.relayer = t, this.logger = r, this.events = new Jt.EventEmitter(), this.name = rb, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = te.toMiliseconds(te.TEN_SECONDS), this.queueTimeout = te.toMiliseconds(te.FIVE_SECONDS), this.needsTransportRestart = !1, this.publish = async (n, i, s) => {
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: i, opts: s } });
      try {
        const u = (s == null ? void 0 : s.ttl) || tb, a = gs(s), l = (s == null ? void 0 : s.prompt) || !1, h = (s == null ? void 0 : s.tag) || 0, f = (s == null ? void 0 : s.id) || ks().toString(), g = { topic: n, message: i, opts: { ttl: u, relay: a, prompt: l, tag: h, id: f } }, v = setTimeout(() => this.queue.set(f, g), this.queueTimeout);
        try {
          await await ti(this.rpcPublish(n, i, u, a, l, h, f), this.publishTimeout), clearTimeout(v), this.relayer.events.emit(Xe.publish, g);
        } catch {
          this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0;
          return;
        }
        this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: i, opts: s } });
      } catch (u) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(u), u;
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
  rpcPublish(t, r, n, i, s, u, a) {
    var l, h, f, g;
    const v = { method: Yn(i.protocol).publish, params: { topic: t, message: r, ttl: n, prompt: s, tag: u }, id: a };
    return Ot((l = v.params) == null ? void 0 : l.prompt) && ((h = v.params) == null || delete h.prompt), Ot((f = v.params) == null ? void 0 : f.tag) && ((g = v.params) == null || delete g.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: v }), this.relayer.request(v);
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
    this.relayer.core.heartbeat.on(Qr.HEARTBEAT_EVENTS.pulse, () => {
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
class Db {
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
var Ob = Object.defineProperty, Ib = Object.defineProperties, xb = Object.getOwnPropertyDescriptors, Ka = Object.getOwnPropertySymbols, Cb = Object.prototype.hasOwnProperty, Ab = Object.prototype.propertyIsEnumerable, Va = (e, t, r) => t in e ? Ob(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, vn = (e, t) => {
  for (var r in t || (t = {}))
    Cb.call(t, r) && Va(e, r, t[r]);
  if (Ka)
    for (var r of Ka(t))
      Ab.call(t, r) && Va(e, r, t[r]);
  return e;
}, $i = (e, t) => Ib(e, xb(t));
class Rb extends sh {
  constructor(t, r) {
    super(t, r), this.relayer = t, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new Db(), this.events = new Jt.EventEmitter(), this.name = fb, this.version = hb, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = mr, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restart(), this.registerEventListeners(), this.onEnable(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (n, i) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: i } });
      try {
        const s = gs(i), u = { topic: n, relay: s };
        this.pending.set(n, u);
        const a = await this.rpcSubscribe(n, s);
        return this.onSubscribe(a, u), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: i } }), a;
      } catch (s) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(s), s;
      }
    }, this.unsubscribe = async (n, i) => {
      await this.restartToComplete(), this.isInitialized(), typeof (i == null ? void 0 : i.id) < "u" ? await this.unsubscribeById(n, i.id, i) : await this.unsubscribeByTopic(n, i);
    }, this.isSubscribed = async (n) => this.topics.includes(n) ? !0 : await new Promise((i, s) => {
      const u = new te.Watch();
      u.start(this.pendingSubscriptionWatchLabel);
      const a = setInterval(() => {
        !this.pending.has(n) && this.topics.includes(n) && (clearInterval(a), u.stop(this.pendingSubscriptionWatchLabel), i(!0)), u.elapsed(this.pendingSubscriptionWatchLabel) >= db && (clearInterval(a), u.stop(this.pendingSubscriptionWatchLabel), s(new Error("Subscription resolution timeout")));
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
      const i = gs(n);
      await this.rpcUnsubscribe(t, r, i);
      const s = ot("USER_DISCONNECTED", `${this.name}, ${t}`);
      await this.onUnsubscribe(t, r, s), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: t, id: r, opts: n } });
    } catch (i) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(i), i;
    }
  }
  async rpcSubscribe(t, r) {
    const n = { method: Yn(r.protocol).subscribe, params: { topic: t } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      await await ti(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(Xe.connection_stalled);
    }
    return Hr(t + this.clientId);
  }
  async rpcBatchSubscribe(t) {
    if (!t.length)
      return;
    const r = t[0].relay, n = { method: Yn(r.protocol).batchSubscribe, params: { topics: t.map((i) => i.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      return await await ti(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(Xe.connection_stalled);
    }
  }
  rpcUnsubscribe(t, r, n) {
    const i = { method: Yn(n.protocol).unsubscribe, params: { topic: t, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i }), this.relayer.request(i);
  }
  onSubscribe(t, r) {
    this.setSubscription(t, $i(vn({}, r), { id: t })), this.pending.delete(r.topic);
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
    this.subscriptions.delete(t), this.topicMap.delete(n.topic, t), this.events.emit(nr.deleted, $i(vn({}, n), { reason: r }));
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
    Ln(r) && this.onBatchSubscribe(r.map((n, i) => $i(vn({}, t[i]), { id: n })));
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
    this.relayer.core.heartbeat.on(Qr.HEARTBEAT_EVENTS.pulse, async () => {
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
var Tb = Object.defineProperty, ka = Object.getOwnPropertySymbols, Pb = Object.prototype.hasOwnProperty, Nb = Object.prototype.propertyIsEnumerable, Wa = (e, t, r) => t in e ? Tb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Lb = (e, t) => {
  for (var r in t || (t = {}))
    Pb.call(t, r) && Wa(e, r, t[r]);
  if (ka)
    for (var r of ka(t))
      Nb.call(t, r) && Wa(e, r, t[r]);
  return e;
};
class Fb extends nh {
  constructor(t) {
    super(t), this.protocol = "wc", this.version = 2, this.events = new Jt.EventEmitter(), this.name = ib, this.transportExplicitlyClosed = !1, this.initialized = !1, this.reconnecting = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.request = async (r) => {
      this.logger.debug("Publishing Request Payload");
      try {
        return await this.toEstablishConnection(), await this.provider.request(r);
      } catch (n) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(n), n;
      }
    }, this.core = t.core, this.logger = typeof t.logger < "u" && typeof t.logger != "string" ? Re.generateChildLogger(t.logger, this.name) : Re.pino(Re.getDefaultLoggerOptions({ level: t.logger || nb })), this.messages = new Eb(this.logger, t.core), this.subscriber = new Rb(this, this.logger), this.publisher = new Sb(this, this.logger), this.relayUrl = (t == null ? void 0 : t.relayUrl) || ju, this.projectId = t.projectId, this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${qa}...`), await this.restartTransport(qa);
    }
    this.registerEventListeners(), this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, cb);
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
      this.subscriber.once(nr.created, (u) => {
        u.topic === t && s();
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
          await ti(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`).catch((i) => n(i)).then(() => r()).finally(() => this.removeListener(Xe.transport_closed, this.rejectTransportOpen));
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
      this.provider.once(yn.disconnect, () => {
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
    this.provider = new gy(new my(cg({ sdkVersion: ab, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: t, useOnCloseEvent: !0 }))), this.registerProviderListeners();
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
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: t }), Gs(t)) {
      if (!t.method.endsWith(sb))
        return;
      const r = t.params, { topic: n, message: i, publishedAt: s } = r.data, u = { topic: n, message: i, publishedAt: s };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Lb({ type: "event", event: r.id }, u)), this.events.emit(r.id, u), await this.acknowledgePayload(t), await this.onMessageEvent(u);
    } else
      mi(t) && this.events.emit(Xe.message_ack, t);
  }
  async onMessageEvent(t) {
    await this.shouldIgnoreMessageEvent(t) || (this.events.emit(Xe.message, t), await this.recordMessageEvent(t));
  }
  async acknowledgePayload(t) {
    const r = Ws(t.id, !0);
    await this.provider.connection.send(r);
  }
  registerProviderListeners() {
    this.provider.on(yn.payload, (t) => this.onProviderPayload(t)), this.provider.on(yn.connect, () => {
      this.events.emit(Xe.connect);
    }), this.provider.on(yn.disconnect, () => {
      this.onProviderDisconnect();
    }), this.provider.on(yn.error, (t) => {
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
    }, te.toMiliseconds(ob));
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
var Ub = Object.defineProperty, Ha = Object.getOwnPropertySymbols, $b = Object.prototype.hasOwnProperty, Mb = Object.prototype.propertyIsEnumerable, Ga = (e, t, r) => t in e ? Ub(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Ya = (e, t) => {
  for (var r in t || (t = {}))
    $b.call(t, r) && Ga(e, r, t[r]);
  if (Ha)
    for (var r of Ha(t))
      Mb.call(t, r) && Ga(e, r, t[r]);
  return e;
};
class wi extends ih {
  constructor(t, r, n, i = mr, s = void 0) {
    super(t, r, n, i), this.core = t, this.logger = r, this.name = n, this.map = /* @__PURE__ */ new Map(), this.version = ub, this.cached = [], this.initialized = !1, this.storagePrefix = mr, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((u) => {
        this.getKey && u !== null && !Ot(u) ? this.map.set(this.getKey(u), u) : Tg(u) ? this.map.set(u.id, u) : Pg(u) && this.map.set(u.topic, u);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (u, a) => {
      this.isInitialized(), this.map.has(u) ? await this.update(u, a) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: u, value: a }), this.map.set(u, a), await this.persist());
    }, this.get = (u) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: u }), this.getData(u)), this.getAll = (u) => (this.isInitialized(), u ? this.values.filter((a) => Object.keys(u).every((l) => wy(a[l], u[l]))) : this.values), this.update = async (u, a) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: u, update: a });
      const l = Ya(Ya({}, this.getData(u)), a);
      this.map.set(u, l), await this.persist();
    }, this.delete = async (u, a) => {
      this.isInitialized(), this.map.has(u) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: u, reason: a }), this.map.delete(u), await this.persist());
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
class jb {
  constructor(t, r) {
    this.core = t, this.logger = r, this.name = pb, this.version = gb, this.events = new Pc(), this.initialized = !1, this.storagePrefix = mr, this.ignoredPayloadTypes = [Mr], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: n }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...n])];
    }, this.create = async () => {
      this.isInitialized();
      const n = ps(), i = await this.core.crypto.setSymKey(n), s = Ht(te.FIVE_MINUTES), u = { protocol: Mu }, a = { topic: i, expiry: s, relay: u, active: !1 }, l = wg({ protocol: this.core.protocol, version: this.core.version, topic: i, symKey: n, relay: u });
      return await this.pairings.set(i, a), await this.core.relayer.subscribe(i), this.core.expirer.set(i, s), { topic: i, uri: l };
    }, this.pair = async (n) => {
      this.isInitialized(), this.isValidPair(n);
      const { topic: i, symKey: s, relay: u } = vg(n.uri);
      if (this.pairings.keys.includes(i))
        throw new Error(`Pairing already exists: ${i}`);
      if (this.core.crypto.hasKeys(i))
        throw new Error(`Keychain already exists: ${i}`);
      const a = Ht(te.FIVE_MINUTES), l = { topic: i, relay: u, expiry: a, active: !1 };
      return await this.pairings.set(i, l), await this.core.crypto.setSymKey(s, i), await this.core.relayer.subscribe(i, { relay: u }), this.core.expirer.set(i, a), n.activatePairing && await this.activate({ topic: i }), l;
    }, this.activate = async ({ topic: n }) => {
      this.isInitialized();
      const i = Ht(te.THIRTY_DAYS);
      await this.pairings.update(n, { active: !0, expiry: i }), this.core.expirer.set(n, i);
    }, this.ping = async (n) => {
      this.isInitialized(), await this.isValidPing(n);
      const { topic: i } = n;
      if (this.pairings.keys.includes(i)) {
        const s = await this.sendRequest(i, "wc_pairingPing", {}), { done: u, resolve: a, reject: l } = Vr();
        this.events.once(st("pairing_ping", s), ({ error: h }) => {
          h ? l(h) : a();
        }), await u();
      }
    }, this.updateExpiry = async ({ topic: n, expiry: i }) => {
      this.isInitialized(), await this.pairings.update(n, { expiry: i });
    }, this.updateMetadata = async ({ topic: n, metadata: i }) => {
      this.isInitialized(), await this.pairings.update(n, { peerMetadata: i });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (n) => {
      this.isInitialized(), await this.isValidDisconnect(n);
      const { topic: i } = n;
      this.pairings.keys.includes(i) && (await this.sendRequest(i, "wc_pairingDelete", ot("USER_DISCONNECTED")), await this.deletePairing(i));
    }, this.sendRequest = async (n, i, s) => {
      const u = vi(i, s), a = await this.core.crypto.encode(n, u), l = bn[i].req;
      return this.core.history.set(n, u), this.core.relayer.publish(n, a, l), u.id;
    }, this.sendResult = async (n, i, s) => {
      const u = Ws(n, s), a = await this.core.crypto.encode(i, u), l = await this.core.history.get(i, n), h = bn[l.request.method].res;
      await this.core.relayer.publish(i, a, h), await this.core.history.resolve(u);
    }, this.sendError = async (n, i, s) => {
      const u = Hs(n, s), a = await this.core.crypto.encode(i, u), l = await this.core.history.get(i, n), h = bn[l.request.method] ? bn[l.request.method].res : bn.unregistered_method.res;
      await this.core.relayer.publish(i, a, h), await this.core.history.resolve(u);
    }, this.deletePairing = async (n, i) => {
      await this.core.relayer.unsubscribe(n), await Promise.all([this.pairings.delete(n, ot("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(n), i ? Promise.resolve() : this.core.expirer.del(n)]);
    }, this.cleanup = async () => {
      const n = this.pairings.getAll().filter((i) => br(i.expiry));
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
      const { topic: i, payload: s } = n, u = (await this.core.history.get(i, s.id)).request.method;
      switch (u) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(i, s);
        default:
          return this.onUnknownRpcMethodResponse(u);
      }
    }, this.onPairingPingRequest = async (n, i) => {
      const { id: s } = i;
      try {
        this.isValidPing({ topic: n }), await this.sendResult(s, n, !0), this.events.emit("pairing_ping", { id: s, topic: n });
      } catch (u) {
        await this.sendError(s, n, u), this.logger.error(u);
      }
    }, this.onPairingPingResponse = (n, i) => {
      const { id: s } = i;
      setTimeout(() => {
        ur(i) ? this.events.emit(st("pairing_ping", s), {}) : Gt(i) && this.events.emit(st("pairing_ping", s), { error: i.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (n, i) => {
      const { id: s } = i;
      try {
        this.isValidDisconnect({ topic: n }), await this.deletePairing(n), this.events.emit("pairing_delete", { id: s, topic: n });
      } catch (u) {
        await this.sendError(s, n, u), this.logger.error(u);
      }
    }, this.onUnknownRpcMethodRequest = async (n, i) => {
      const { id: s, method: u } = i;
      try {
        if (this.registeredMethods.includes(u))
          return;
        const a = ot("WC_METHOD_UNSUPPORTED", u);
        await this.sendError(s, n, a), this.logger.error(a);
      } catch (a) {
        await this.sendError(s, n, a), this.logger.error(a);
      }
    }, this.onUnknownRpcMethodResponse = (n) => {
      this.registeredMethods.includes(n) || this.logger.error(ot("WC_METHOD_UNSUPPORTED", n));
    }, this.isValidPair = (n) => {
      if (!Ct(n)) {
        const { message: i } = X("MISSING_OR_INVALID", `pair() params: ${n}`);
        throw new Error(i);
      }
      if (!Rg(n.uri)) {
        const { message: i } = X("MISSING_OR_INVALID", `pair() uri: ${n.uri}`);
        throw new Error(i);
      }
    }, this.isValidPing = async (n) => {
      if (!Ct(n)) {
        const { message: s } = X("MISSING_OR_INVALID", `ping() params: ${n}`);
        throw new Error(s);
      }
      const { topic: i } = n;
      await this.isValidPairingTopic(i);
    }, this.isValidDisconnect = async (n) => {
      if (!Ct(n)) {
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
      if (br(this.pairings.get(n).expiry)) {
        await this.deletePairing(n);
        const { message: i } = X("EXPIRED", `pairing topic: ${n}`);
        throw new Error(i);
      }
    }, this.core = t, this.logger = Re.generateChildLogger(r, this.name), this.pairings = new wi(this.core, this.logger, this.name, this.storagePrefix);
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
      Gs(i) ? (this.core.history.set(r, i), this.onRelayEventRequest({ topic: r, payload: i })) : mi(i) && (await this.core.history.resolve(i), await this.onRelayEventResponse({ topic: r, payload: i }), this.core.history.delete(r, i.id));
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(qt.expired, async (t) => {
      const { topic: r } = vu(t.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit("pairing_expire", { topic: r }));
    });
  }
}
class Bb extends eh {
  constructor(t, r) {
    super(t, r), this.core = t, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new Jt.EventEmitter(), this.name = yb, this.version = bb, this.cached = [], this.initialized = !1, this.storagePrefix = mr, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.records.set(n.id, n)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (n, i, s) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: n, request: i, chainId: s }), this.records.has(i.id))
        return;
      const u = { id: i.id, topic: n, request: { method: i.method, params: i.params || null }, chainId: s, expiry: Ht(te.THIRTY_DAYS) };
      this.records.set(u.id, u), this.events.emit(rr.created, u);
    }, this.resolve = async (n) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: n }), !this.records.has(n.id))
        return;
      const i = await this.getRecord(n.id);
      typeof i.response > "u" && (i.response = Gt(n) ? { error: n.error } : { result: n.result }, this.records.set(i.id, i), this.events.emit(rr.updated, i));
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
      const n = { topic: r.topic, request: vi(r.request.method, r.request.params, r.id), chainId: r.chainId };
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
    }), this.core.heartbeat.on(Qr.HEARTBEAT_EVENTS.pulse, () => {
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
class qb extends oh {
  constructor(t, r) {
    super(t, r), this.core = t, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new Jt.EventEmitter(), this.name = vb, this.version = mb, this.cached = [], this.initialized = !1, this.storagePrefix = mr, this.init = async () => {
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
      const s = this.formatTarget(n), u = { target: s, expiry: i };
      this.expirations.set(s, u), this.checkExpiry(s, u), this.events.emit(qt.created, { target: s, expiration: u });
    }, this.get = (n) => {
      this.isInitialized();
      const i = this.formatTarget(n);
      return this.getExpiration(i);
    }, this.del = (n) => {
      if (this.isInitialized(), this.has(n)) {
        const i = this.formatTarget(n), s = this.getExpiration(i);
        this.expirations.delete(i), this.events.emit(qt.deleted, { target: i, expiration: s });
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
      return ug(t);
    if (typeof t == "number")
      return lg(t);
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
    this.expirations.delete(t), this.events.emit(qt.expired, { target: t, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((t, r) => this.checkExpiry(r, t));
  }
  registerEventListeners() {
    this.core.heartbeat.on(Qr.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(qt.created, (t) => {
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
class zb extends ah {
  constructor(t, r) {
    super(t, r), this.projectId = t, this.logger = r, this.name = Ui, this.initialized = !1, this.init = async (n) => {
      pu() || !qs() || (this.verifyUrl = (n == null ? void 0 : n.verifyUrl) || za, await this.createIframe());
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
      const s = this.startAbortTimer(te.FIVE_SECONDS), u = await fetch(`${this.verifyUrl}/attestation/${n.attestationId}`, { signal: this.abortController.signal });
      return clearTimeout(s), u.status === 200 ? (i = await u.json()) == null ? void 0 : i.origin : "";
    }, this.createIframe = async () => {
      try {
        await Promise.race([new Promise((n, i) => {
          if (document.getElementById(Ui))
            return n();
          const s = document.createElement("iframe");
          s.setAttribute("id", Ui), s.setAttribute("src", `${this.verifyUrl}/${this.projectId}`), s.style.display = "none", s.addEventListener("load", () => {
            this.initialized = !0, n();
          }), s.addEventListener("error", (u) => {
            i(u);
          }), document.body.append(s), this.iframe = s;
        }), new Promise((n) => {
          setTimeout(() => n("iframe load timeout"), te.toMiliseconds(te.ONE_SECOND / 2));
        })]);
      } catch (n) {
        this.logger.error(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.error(n);
      }
    }, this.logger = Re.generateChildLogger(r, this.name), this.verifyUrl = za, this.abortController = new AbortController(), this.isDevEnv = Bs() && process.env.IS_VITEST;
  }
  get context() {
    return Re.getLoggerContext(this.logger);
  }
  startAbortTimer(t) {
    return setTimeout(() => this.abortController.abort(), te.toMiliseconds(t));
  }
}
var Kb = Object.defineProperty, Ja = Object.getOwnPropertySymbols, Vb = Object.prototype.hasOwnProperty, kb = Object.prototype.propertyIsEnumerable, Xa = (e, t, r) => t in e ? Kb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Qa = (e, t) => {
  for (var r in t || (t = {}))
    Vb.call(t, r) && Xa(e, r, t[r]);
  if (Ja)
    for (var r of Ja(t))
      kb.call(t, r) && Xa(e, r, t[r]);
  return e;
};
let Wb = class Bu extends Zf {
  constructor(t) {
    super(t), this.protocol = $u, this.version = W0, this.name = Ys, this.events = new Jt.EventEmitter(), this.initialized = !1, this.on = (n, i) => this.events.on(n, i), this.once = (n, i) => this.events.once(n, i), this.off = (n, i) => this.events.off(n, i), this.removeListener = (n, i) => this.events.removeListener(n, i), this.projectId = t == null ? void 0 : t.projectId, this.relayUrl = (t == null ? void 0 : t.relayUrl) || ju;
    const r = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : Re.pino(Re.getDefaultLoggerOptions({ level: (t == null ? void 0 : t.logger) || H0.logger }));
    this.logger = Re.generateChildLogger(r, this.name), this.heartbeat = new Qr.HeartBeat(), this.crypto = new wb(this, this.logger, t == null ? void 0 : t.keychain), this.history = new Bb(this, this.logger), this.expirer = new qb(this, this.logger), this.storage = t != null && t.storage ? t.storage : new Uf(Qa(Qa({}, G0), t == null ? void 0 : t.storageOptions)), this.relayer = new Fb({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new jb(this, this.logger), this.verify = new zb(this.projectId || "", this.logger);
  }
  static async init(t) {
    const r = new Bu(t);
    await r.initialize();
    const n = await r.crypto.getClientId();
    return await r.storage.setItem(lb, n), r;
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
const Hb = Wb, qu = "wc", zu = 2, Ku = "client", Js = `${qu}@${zu}:${Ku}:`, Mi = { name: Ku, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, Gb = "WALLETCONNECT_DEEPLINK_CHOICE", Yb = "proposal", Jb = "Proposal expired", Xb = "session", Wn = te.SEVEN_DAYS, Qb = "engine", mn = { wc_sessionPropose: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, ji = { min: te.FIVE_MINUTES, max: te.SEVEN_DAYS }, _n = { idle: "idle", active: "active" }, Zb = "request", e1 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var t1 = Object.defineProperty, r1 = Object.defineProperties, n1 = Object.getOwnPropertyDescriptors, Za = Object.getOwnPropertySymbols, i1 = Object.prototype.hasOwnProperty, s1 = Object.prototype.propertyIsEnumerable, ec = (e, t, r) => t in e ? t1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Bt = (e, t) => {
  for (var r in t || (t = {}))
    i1.call(t, r) && ec(e, r, t[r]);
  if (Za)
    for (var r of Za(t))
      s1.call(t, r) && ec(e, r, t[r]);
  return e;
}, Bi = (e, t) => r1(e, n1(t));
class o1 extends uh {
  constructor(t) {
    super(t), this.name = Qb, this.events = new Pc(), this.initialized = !1, this.ignoredPayloadTypes = [Mr], this.requestQueue = { state: _n.idle, requests: [] }, this.requestQueueDelay = te.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({ methods: Object.keys(mn) }), this.initialized = !0, setTimeout(() => {
        this.requestQueue.requests = this.getPendingSessionRequests(), this.processRequestQueue();
      }, te.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      this.isInitialized();
      const n = Bi(Bt({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(n);
      const { pairingTopic: i, requiredNamespaces: s, optionalNamespaces: u, sessionProperties: a, relays: l } = n;
      let h = i, f, g = !1;
      if (h && (g = this.client.core.pairing.pairings.get(h).active), !h || !g) {
        const { topic: I, uri: y } = await this.client.core.pairing.create();
        h = I, f = y;
      }
      const v = await this.client.core.crypto.generateKeyPair(), m = Bt({ requiredNamespaces: s, optionalNamespaces: u, relays: l ?? [{ protocol: Mu }], proposer: { publicKey: v, metadata: this.client.metadata } }, a && { sessionProperties: a }), { reject: O, resolve: x, done: T } = Vr(te.FIVE_MINUTES, Jb);
      if (this.events.once(st("session_connect"), async ({ error: I, session: y }) => {
        if (I)
          O(I);
        else if (y) {
          y.self.publicKey = v;
          const E = Bi(Bt({}, y), { requiredNamespaces: y.requiredNamespaces, optionalNamespaces: y.optionalNamespaces });
          await this.client.session.set(y.topic, E), await this.setExpiry(y.topic, y.expiry), h && await this.client.core.pairing.updateMetadata({ topic: h, metadata: y.peer.metadata }), x(E);
        }
      }), !h) {
        const { message: I } = X("NO_MATCHING_KEY", `connect() pairing topic: ${h}`);
        throw new Error(I);
      }
      const M = await this.sendRequest(h, "wc_sessionPropose", m), w = Ht(te.FIVE_MINUTES);
      return await this.setProposal(M, Bt({ id: M, expiry: w }, m)), { uri: f, approval: T };
    }, this.pair = async (r) => (this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      this.isInitialized(), await this.isValidApprove(r);
      const { id: n, relayProtocol: i, namespaces: s, sessionProperties: u } = r, a = this.client.proposal.get(n);
      let { pairingTopic: l, proposer: h, requiredNamespaces: f, optionalNamespaces: g } = a;
      l = l || "", On(f) || (f = Og(s, "approve()"));
      const v = await this.client.core.crypto.generateKeyPair(), m = h.publicKey, O = await this.client.core.crypto.generateSharedKey(v, m);
      l && n && (await this.client.core.pairing.updateMetadata({ topic: l, metadata: h.metadata }), await this.sendResult(n, l, { relay: { protocol: i ?? "irn" }, responderPublicKey: v }), await this.client.proposal.delete(n, ot("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: l }));
      const x = Bt({ relay: { protocol: i ?? "irn" }, namespaces: s, requiredNamespaces: f, optionalNamespaces: g, pairingTopic: l, controller: { publicKey: v, metadata: this.client.metadata }, expiry: Ht(Wn) }, u && { sessionProperties: u });
      await this.client.core.relayer.subscribe(O), await this.sendRequest(O, "wc_sessionSettle", x);
      const T = Bi(Bt({}, x), { topic: O, pairingTopic: l, acknowledged: !1, self: x.controller, peer: { publicKey: h.publicKey, metadata: h.metadata }, controller: v });
      return await this.client.session.set(O, T), await this.setExpiry(O, Ht(Wn)), { topic: O, acknowledged: () => new Promise((M) => setTimeout(() => M(this.client.session.get(O)), 500)) };
    }, this.reject = async (r) => {
      this.isInitialized(), await this.isValidReject(r);
      const { id: n, reason: i } = r, { pairingTopic: s } = this.client.proposal.get(n);
      s && (await this.sendError(n, s, i), await this.client.proposal.delete(n, ot("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      this.isInitialized(), await this.isValidUpdate(r);
      const { topic: n, namespaces: i } = r, s = await this.sendRequest(n, "wc_sessionUpdate", { namespaces: i }), { done: u, resolve: a, reject: l } = Vr();
      return this.events.once(st("session_update", s), ({ error: h }) => {
        h ? l(h) : a();
      }), await this.client.session.update(n, { namespaces: i }), { acknowledged: u };
    }, this.extend = async (r) => {
      this.isInitialized(), await this.isValidExtend(r);
      const { topic: n } = r, i = await this.sendRequest(n, "wc_sessionExtend", {}), { done: s, resolve: u, reject: a } = Vr();
      return this.events.once(st("session_extend", i), ({ error: l }) => {
        l ? a(l) : u();
      }), await this.setExpiry(n, Ht(Wn)), { acknowledged: s };
    }, this.request = async (r) => {
      this.isInitialized(), await this.isValidRequest(r);
      const { chainId: n, request: i, topic: s, expiry: u } = r, a = await this.sendRequest(s, "wc_sessionRequest", { request: i, chainId: n }, u), { done: l, resolve: h, reject: f } = Vr(u);
      this.events.once(st("session_request", a), ({ error: v, result: m }) => {
        v ? f(v) : h(m);
      }), this.client.events.emit("session_request_sent", { topic: s, request: i, chainId: n, id: a });
      const g = await this.client.core.storage.getItem(Gb);
      return fg({ id: a, topic: s, wcDeepLink: g }), await l();
    }, this.respond = async (r) => {
      this.isInitialized(), await this.isValidRespond(r);
      const { topic: n, response: i } = r, { id: s } = i;
      ur(i) ? await this.sendResult(s, n, i.result) : Gt(i) && await this.sendError(s, n, i.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      this.isInitialized(), await this.isValidPing(r);
      const { topic: n } = r;
      if (this.client.session.keys.includes(n)) {
        const i = await this.sendRequest(n, "wc_sessionPing", {}), { done: s, resolve: u, reject: a } = Vr();
        this.events.once(st("session_ping", i), ({ error: l }) => {
          l ? a(l) : u();
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
        const i = ks().toString();
        let s;
        const u = (a) => {
          (a == null ? void 0 : a.id.toString()) === i && (this.client.core.relayer.events.removeListener(Xe.message_ack, u), s());
        };
        await Promise.all([new Promise((a) => {
          s = a, this.client.core.relayer.on(Xe.message_ack, u);
        }), this.sendRequest(n, "wc_sessionDelete", ot("USER_DISCONNECTED"), void 0, i)]), await this.deleteSession(n);
      } else
        await this.client.core.pairing.disconnect({ topic: n });
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((n) => Cg(n, r))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (r) => {
      if (r.pairingTopic)
        try {
          const n = this.client.core.pairing.pairings.get(r.pairingTopic), i = this.client.core.pairing.pairings.getAll().filter((s) => {
            var u, a;
            return ((u = s.peerMetadata) == null ? void 0 : u.url) && ((a = s.peerMetadata) == null ? void 0 : a.url) === r.peer.metadata.url && s.topic && s.topic !== n.topic;
          });
          if (i.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${i.length} duplicate pairing(s)`), await Promise.all(i.map((s) => this.client.core.pairing.disconnect({ topic: s.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (n) {
          this.client.logger.error(n);
        }
    }, this.deleteSession = async (r, n) => {
      const { self: i } = this.client.session.get(r);
      await this.client.core.relayer.unsubscribe(r), this.client.session.delete(r, ot("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(i.publicKey) && await this.client.core.crypto.deleteKeyPair(i.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), n || this.client.core.expirer.del(r);
    }, this.deleteProposal = async (r, n) => {
      await Promise.all([this.client.proposal.delete(r, ot("USER_DISCONNECTED")), n ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, n, i = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, n), i ? Promise.resolve() : this.client.core.expirer.del(r)]), this.requestQueue.requests = this.requestQueue.requests.filter((s) => s.id !== r), i && (this.requestQueue.state = _n.idle);
    }, this.setExpiry = async (r, n) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: n }), this.client.core.expirer.set(r, n);
    }, this.setProposal = async (r, n) => {
      await this.client.proposal.set(r, n), this.client.core.expirer.set(r, n.expiry);
    }, this.setPendingSessionRequest = async (r) => {
      const n = mn.wc_sessionRequest.req.ttl, { id: i, topic: s, params: u } = r;
      await this.client.pendingRequest.set(i, { id: i, topic: s, params: u }), n && this.client.core.expirer.set(i, Ht(n));
    }, this.sendRequest = async (r, n, i, s, u) => {
      const a = vi(n, i);
      if (qs() && e1.includes(n)) {
        const f = Hr(JSON.stringify(a));
        await this.client.core.verify.register({ attestationId: f });
      }
      const l = await this.client.core.crypto.encode(r, a), h = mn[n].req;
      return s && (h.ttl = s), u && (h.id = u), this.client.core.history.set(r, a), this.client.core.relayer.publish(r, l, h), a.id;
    }, this.sendResult = async (r, n, i) => {
      const s = Ws(r, i), u = await this.client.core.crypto.encode(n, s), a = await this.client.core.history.get(n, r), l = mn[a.request.method].res;
      this.client.core.relayer.publish(n, u, l), await this.client.core.history.resolve(s);
    }, this.sendError = async (r, n, i) => {
      const s = Hs(r, i), u = await this.client.core.crypto.encode(n, s), a = await this.client.core.history.get(n, r), l = mn[a.request.method].res;
      this.client.core.relayer.publish(n, u, l), await this.client.core.history.resolve(s);
    }, this.cleanup = async () => {
      const r = [], n = [];
      this.client.session.getAll().forEach((i) => {
        br(i.expiry) && r.push(i.topic);
      }), this.client.proposal.getAll().forEach((i) => {
        br(i.expiry) && n.push(i.id);
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
        this.isValidConnect(Bt({}, n.params));
        const u = Ht(te.FIVE_MINUTES), a = Bt({ id: s, pairingTopic: r, expiry: u }, i);
        await this.setProposal(s, a);
        const l = Hr(JSON.stringify(n)), h = await this.getVerifyContext(l, a.proposer.metadata);
        this.client.events.emit("session_proposal", { id: s, params: a, verifyContext: h });
      } catch (u) {
        await this.sendError(s, r, u), this.client.logger.error(u);
      }
    }, this.onSessionProposeResponse = async (r, n) => {
      const { id: i } = n;
      if (ur(n)) {
        const { result: s } = n;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: s });
        const u = this.client.proposal.get(i);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: u });
        const a = u.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: a });
        const l = s.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: l });
        const h = await this.client.core.crypto.generateSharedKey(a, l);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: h });
        const f = await this.client.core.relayer.subscribe(h);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: f }), await this.client.core.pairing.activate({ topic: r });
      } else
        Gt(n) && (await this.client.proposal.delete(i, ot("USER_DISCONNECTED")), this.events.emit(st("session_connect"), { error: n.error }));
    }, this.onSessionSettleRequest = async (r, n) => {
      const { id: i, params: s } = n;
      try {
        this.isValidSessionSettleRequest(s);
        const { relay: u, controller: a, expiry: l, namespaces: h, requiredNamespaces: f, optionalNamespaces: g, sessionProperties: v, pairingTopic: m } = n.params, O = Bt({ topic: r, relay: u, expiry: l, namespaces: h, acknowledged: !0, pairingTopic: m, requiredNamespaces: f, optionalNamespaces: g, controller: a.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: a.publicKey, metadata: a.metadata } }, v && { sessionProperties: v });
        await this.sendResult(n.id, r, !0), this.events.emit(st("session_connect"), { session: O }), this.cleanupDuplicatePairings(O);
      } catch (u) {
        await this.sendError(i, r, u), this.client.logger.error(u);
      }
    }, this.onSessionSettleResponse = async (r, n) => {
      const { id: i } = n;
      ur(n) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(st("session_approve", i), {})) : Gt(n) && (await this.client.session.delete(r, ot("USER_DISCONNECTED")), this.events.emit(st("session_approve", i), { error: n.error }));
    }, this.onSessionUpdateRequest = async (r, n) => {
      const { params: i, id: s } = n;
      try {
        this.isValidUpdate(Bt({ topic: r }, i)), await this.client.session.update(r, { namespaces: i.namespaces }), await this.sendResult(s, r, !0), this.client.events.emit("session_update", { id: s, topic: r, params: i });
      } catch (u) {
        await this.sendError(s, r, u), this.client.logger.error(u);
      }
    }, this.onSessionUpdateResponse = (r, n) => {
      const { id: i } = n;
      ur(n) ? this.events.emit(st("session_update", i), {}) : Gt(n) && this.events.emit(st("session_update", i), { error: n.error });
    }, this.onSessionExtendRequest = async (r, n) => {
      const { id: i } = n;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, Ht(Wn)), await this.sendResult(i, r, !0), this.client.events.emit("session_extend", { id: i, topic: r });
      } catch (s) {
        await this.sendError(i, r, s), this.client.logger.error(s);
      }
    }, this.onSessionExtendResponse = (r, n) => {
      const { id: i } = n;
      ur(n) ? this.events.emit(st("session_extend", i), {}) : Gt(n) && this.events.emit(st("session_extend", i), { error: n.error });
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
        ur(n) ? this.events.emit(st("session_ping", i), {}) : Gt(n) && this.events.emit(st("session_ping", i), { error: n.error });
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
        this.isValidRequest(Bt({ topic: r }, s)), await this.setPendingSessionRequest({ id: i, topic: r, params: s }), this.addRequestToQueue({ id: i, topic: r, params: s }), await this.processRequestQueue();
      } catch (u) {
        await this.sendError(i, r, u), this.client.logger.error(u);
      }
    }, this.onSessionRequestResponse = (r, n) => {
      const { id: i } = n;
      ur(n) ? this.events.emit(st("session_request", i), { result: n.result }) : Gt(n) && this.events.emit(st("session_request", i), { error: n.error });
    }, this.onSessionEventRequest = async (r, n) => {
      const { id: i, params: s } = n;
      try {
        this.isValidEmit(Bt({ topic: r }, s)), this.client.events.emit("session_event", { id: i, topic: r, params: s });
      } catch (u) {
        await this.sendError(i, r, u), this.client.logger.error(u);
      }
    }, this.addRequestToQueue = (r) => {
      this.requestQueue.requests.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.requestQueue.state = _n.idle, this.processRequestQueue();
      }, te.toMiliseconds(this.requestQueueDelay));
    }, this.processRequestQueue = async () => {
      if (this.requestQueue.state === _n.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const r = this.requestQueue.requests[0];
      if (!r) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        const { id: n, topic: i, params: s } = r, u = Hr(JSON.stringify({ id: n, params: s })), a = this.client.session.get(i), l = await this.getVerifyContext(u, a.peer.metadata);
        this.requestQueue.state = _n.active, this.client.events.emit("session_request", { id: n, topic: i, params: s, verifyContext: l });
      } catch (n) {
        this.client.logger.error(n);
      }
    }, this.isValidConnect = async (r) => {
      if (!Ct(r)) {
        const { message: l } = X("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(l);
      }
      const { pairingTopic: n, requiredNamespaces: i, optionalNamespaces: s, sessionProperties: u, relays: a } = r;
      if (Ot(n) || await this.isValidPairingTopic(n), !Bg(a, !0)) {
        const { message: l } = X("MISSING_OR_INVALID", `connect() relays: ${a}`);
        throw new Error(l);
      }
      !Ot(i) && On(i) !== 0 && this.validateNamespaces(i, "requiredNamespaces"), !Ot(s) && On(s) !== 0 && this.validateNamespaces(s, "optionalNamespaces"), Ot(u) || this.validateSessionProps(u, "sessionProperties");
    }, this.validateNamespaces = (r, n) => {
      const i = jg(r, "connect()", n);
      if (i)
        throw new Error(i.message);
    }, this.isValidApprove = async (r) => {
      if (!Ct(r))
        throw new Error(X("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: n, namespaces: i, relayProtocol: s, sessionProperties: u } = r;
      await this.isValidProposalId(n);
      const a = this.client.proposal.get(n), l = Jn(i, "approve()");
      if (l)
        throw new Error(l.message);
      const h = Ia(a.requiredNamespaces, i, "approve()");
      if (h)
        throw new Error(h.message);
      if (!lt(s, !0)) {
        const { message: f } = X("MISSING_OR_INVALID", `approve() relayProtocol: ${s}`);
        throw new Error(f);
      }
      Ot(u) || this.validateSessionProps(u, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!Ct(r)) {
        const { message: s } = X("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(s);
      }
      const { id: n, reason: i } = r;
      if (await this.isValidProposalId(n), !zg(i)) {
        const { message: s } = X("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(i)}`);
        throw new Error(s);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!Ct(r)) {
        const { message: h } = X("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(h);
      }
      const { relay: n, controller: i, namespaces: s, expiry: u } = r;
      if (!_u(n)) {
        const { message: h } = X("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(h);
      }
      const a = Ng(i, "onSessionSettleRequest()");
      if (a)
        throw new Error(a.message);
      const l = Jn(s, "onSessionSettleRequest()");
      if (l)
        throw new Error(l.message);
      if (br(u)) {
        const { message: h } = X("EXPIRED", "onSessionSettleRequest()");
        throw new Error(h);
      }
    }, this.isValidUpdate = async (r) => {
      if (!Ct(r)) {
        const { message: l } = X("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(l);
      }
      const { topic: n, namespaces: i } = r;
      await this.isValidSessionTopic(n);
      const s = this.client.session.get(n), u = Jn(i, "update()");
      if (u)
        throw new Error(u.message);
      const a = Ia(s.requiredNamespaces, i, "update()");
      if (a)
        throw new Error(a.message);
    }, this.isValidExtend = async (r) => {
      if (!Ct(r)) {
        const { message: i } = X("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(i);
      }
      const { topic: n } = r;
      await this.isValidSessionTopic(n);
    }, this.isValidRequest = async (r) => {
      if (!Ct(r)) {
        const { message: l } = X("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(l);
      }
      const { topic: n, request: i, chainId: s, expiry: u } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: a } = this.client.session.get(n);
      if (!Oa(a, s)) {
        const { message: l } = X("MISSING_OR_INVALID", `request() chainId: ${s}`);
        throw new Error(l);
      }
      if (!Kg(i)) {
        const { message: l } = X("MISSING_OR_INVALID", `request() ${JSON.stringify(i)}`);
        throw new Error(l);
      }
      if (!Wg(a, s, i.method)) {
        const { message: l } = X("MISSING_OR_INVALID", `request() method: ${i.method}`);
        throw new Error(l);
      }
      if (u && !Jg(u, ji)) {
        const { message: l } = X("MISSING_OR_INVALID", `request() expiry: ${u}. Expiry must be a number (in seconds) between ${ji.min} and ${ji.max}`);
        throw new Error(l);
      }
    }, this.isValidRespond = async (r) => {
      if (!Ct(r)) {
        const { message: s } = X("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(s);
      }
      const { topic: n, response: i } = r;
      if (await this.isValidSessionTopic(n), !Vg(i)) {
        const { message: s } = X("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
        throw new Error(s);
      }
    }, this.isValidPing = async (r) => {
      if (!Ct(r)) {
        const { message: i } = X("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(i);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.isValidEmit = async (r) => {
      if (!Ct(r)) {
        const { message: a } = X("MISSING_OR_INVALID", `emit() params: ${r}`);
        throw new Error(a);
      }
      const { topic: n, event: i, chainId: s } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: u } = this.client.session.get(n);
      if (!Oa(u, s)) {
        const { message: a } = X("MISSING_OR_INVALID", `emit() chainId: ${s}`);
        throw new Error(a);
      }
      if (!kg(i)) {
        const { message: a } = X("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
        throw new Error(a);
      }
      if (!Hg(u, s, i.name)) {
        const { message: a } = X("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
        throw new Error(a);
      }
    }, this.isValidDisconnect = async (r) => {
      if (!Ct(r)) {
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
      Gs(i) ? (this.client.core.history.set(r, i), this.onRelayEventRequest({ topic: r, payload: i })) : mi(i) ? (await this.client.core.history.resolve(i), await this.onRelayEventResponse({ topic: r, payload: i }), this.client.core.history.delete(r, i.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: i });
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(qt.expired, async (t) => {
      const { topic: r, id: n } = vu(t.target);
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
    if (br(this.client.core.pairing.pairings.get(t).expiry)) {
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
    if (br(this.client.session.get(t).expiry)) {
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
    if (!qg(t)) {
      const { message: r } = X("MISSING_OR_INVALID", `proposal id should be a number: ${t}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(t)) {
      const { message: r } = X("NO_MATCHING_KEY", `proposal id doesn't exist: ${t}`);
      throw new Error(r);
    }
    if (br(this.client.proposal.get(t).expiry)) {
      await this.deleteProposal(t);
      const { message: r } = X("EXPIRED", `proposal id: ${t}`);
      throw new Error(r);
    }
  }
}
class a1 extends wi {
  constructor(t, r) {
    super(t, r, Yb, Js), this.core = t, this.logger = r;
  }
}
class c1 extends wi {
  constructor(t, r) {
    super(t, r, Xb, Js), this.core = t, this.logger = r;
  }
}
class u1 extends wi {
  constructor(t, r) {
    super(t, r, Zb, Js, (n) => n.id), this.core = t, this.logger = r;
  }
}
let l1 = class Vu extends ch {
  constructor(t) {
    super(t), this.protocol = qu, this.version = zu, this.name = Mi.name, this.events = new Jt.EventEmitter(), this.on = (n, i) => this.events.on(n, i), this.once = (n, i) => this.events.once(n, i), this.off = (n, i) => this.events.off(n, i), this.removeListener = (n, i) => this.events.removeListener(n, i), this.removeAllListeners = (n) => this.events.removeAllListeners(n), this.connect = async (n) => {
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
    }, this.name = (t == null ? void 0 : t.name) || Mi.name, this.metadata = (t == null ? void 0 : t.metadata) || ig();
    const r = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : Re.pino(Re.getDefaultLoggerOptions({ level: (t == null ? void 0 : t.logger) || Mi.logger }));
    this.core = (t == null ? void 0 : t.core) || new Hb(t), this.logger = Re.generateChildLogger(r, this.name), this.session = new c1(this.core, this.logger), this.proposal = new a1(this.core, this.logger), this.pendingRequest = new u1(this.core, this.logger), this.engine = new o1(this);
  }
  static async init(t) {
    const r = new Vu(t);
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
var f1 = Object.defineProperty, h1 = Object.defineProperties, d1 = Object.getOwnPropertyDescriptors, tc = Object.getOwnPropertySymbols, p1 = Object.prototype.hasOwnProperty, g1 = Object.prototype.propertyIsEnumerable, rc = (e, t, r) => t in e ? f1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, y1 = (e, t) => {
  for (var r in t || (t = {}))
    p1.call(t, r) && rc(e, r, t[r]);
  if (tc)
    for (var r of tc(t))
      g1.call(t, r) && rc(e, r, t[r]);
  return e;
}, b1 = (e, t) => h1(e, d1(t)), Xs = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
}, ze = (e, t, r) => (Xs(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Rr = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, ii = (e, t, r, n) => (Xs(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), _t = (e, t, r) => (Xs(e, t, "access private method"), r), Pr, kr, wn, ut, vs, ku, wt, Dt, ms, nc;
let v1 = class {
  constructor(t) {
    Rr(this, vs), Rr(this, wt), Rr(this, ms), Rr(this, Pr, void 0), Rr(this, kr, void 0), Rr(this, wn, void 0), Rr(this, ut, void 0), ii(this, Pr, t), ii(this, kr, _t(this, vs, ku).call(this)), _t(this, wt, Dt).call(this);
  }
  async connect(t) {
    const { requiredNamespaces: r, optionalNamespaces: n } = t;
    return new Promise(async (i, s) => {
      await _t(this, wt, Dt).call(this);
      const u = ze(this, kr).subscribeModal((h) => {
        h.open || (u(), s(new Error("Modal closed")));
      }), { uri: a, approval: l } = await ze(this, ut).connect(t);
      if (a) {
        const h = /* @__PURE__ */ new Set();
        r && Object.values(r).forEach(({ chains: f }) => {
          f && f.forEach((g) => h.add(g));
        }), n && Object.values(n).forEach(({ chains: f }) => {
          f && f.forEach((g) => h.add(g));
        }), await ze(this, kr).openModal({ uri: a, chains: Array.from(h) });
      }
      try {
        const h = await l();
        i(h);
      } catch (h) {
        s(h);
      } finally {
        u(), ze(this, kr).closeModal();
      }
    });
  }
  async disconnect(t) {
    await _t(this, wt, Dt).call(this), await ze(this, ut).disconnect(t);
  }
  async request(t) {
    return await _t(this, wt, Dt).call(this), await ze(this, ut).request(t);
  }
  async getSessions() {
    return await _t(this, wt, Dt).call(this), ze(this, ut).session.getAll();
  }
  async getSession() {
    return await _t(this, wt, Dt).call(this), ze(this, ut).session.getAll().at(-1);
  }
  async onSessionEvent(t) {
    await _t(this, wt, Dt).call(this), ze(this, ut).on("session_event", t);
  }
  async offSessionEvent(t) {
    await _t(this, wt, Dt).call(this), ze(this, ut).off("session_event", t);
  }
  async onSessionUpdate(t) {
    await _t(this, wt, Dt).call(this), ze(this, ut).on("session_update", t);
  }
  async offSessionUpdate(t) {
    await _t(this, wt, Dt).call(this), ze(this, ut).off("session_update", t);
  }
  async onSessionDelete(t) {
    await _t(this, wt, Dt).call(this), ze(this, ut).on("session_delete", t);
  }
  async offSessionDelete(t) {
    await _t(this, wt, Dt).call(this), ze(this, ut).off("session_delete", t);
  }
  async onSessionExpire(t) {
    await _t(this, wt, Dt).call(this), ze(this, ut).on("session_expire", t);
  }
  async offSessionExpire(t) {
    await _t(this, wt, Dt).call(this), ze(this, ut).off("session_expire", t);
  }
};
Pr = /* @__PURE__ */ new WeakMap(), kr = /* @__PURE__ */ new WeakMap(), wn = /* @__PURE__ */ new WeakMap(), ut = /* @__PURE__ */ new WeakMap(), vs = /* @__PURE__ */ new WeakSet(), ku = function() {
  const { modalOptions: e, projectId: t } = ze(this, Pr);
  return new ef(b1(y1({}, e), { projectId: t }));
}, wt = /* @__PURE__ */ new WeakSet(), Dt = async function() {
  return ze(this, ut) ? !0 : (!ze(this, wn) && typeof window < "u" && ii(this, wn, _t(this, ms, nc).call(this)), ze(this, wn));
}, ms = /* @__PURE__ */ new WeakSet(), nc = async function() {
  ii(this, ut, await l1.init({ metadata: ze(this, Pr).metadata, projectId: ze(this, Pr).projectId, relayUrl: ze(this, Pr).relayUrl }));
  const e = await ze(this, ut).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", e);
  } catch {
    console.info("Unable to set client id");
  }
};
function m1(e) {
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
const si = m1();
let En;
function _1(e) {
  En = new v1(e);
}
async function Kt() {
  return new Promise((e) => {
    if (En)
      e(En);
    else {
      const t = setInterval(() => {
        En && (clearInterval(t), e(En));
      }, 200);
    }
  });
}
function w1(e) {
  return zt(() => {
    _1(e);
  }, []), null;
}
const E1 = Al(w1);
function Qs() {
  const [e, t] = Dn(void 0), [r, n] = Dn(void 0), [i, s] = Dn(!1);
  return { data: e, error: r, loading: i, setData: t, setError: n, setLoading: s };
}
function S1(e) {
  const { data: t, error: r, loading: n, setData: i, setError: s, setLoading: u } = Qs();
  async function a(l) {
    try {
      u(!0), s(void 0);
      const h = await (await Kt()).connect(l ?? e);
      return i(h), si.emit("session_change"), h;
    } catch (h) {
      throw s(h), h;
    } finally {
      u(!1);
    }
  }
  return { data: t, error: r, loading: n, connect: a };
}
function D1(e) {
  const { error: t, loading: r, setError: n, setLoading: i } = Qs();
  async function s(u) {
    try {
      i(!0), n(void 0), await (await Kt()).disconnect(u ?? e), si.emit("session_change");
    } catch (a) {
      throw n(a), a;
    } finally {
      i(!1);
    }
  }
  return { error: t, loading: r, disconnect: s };
}
function Wu(e) {
  zt(() => (Kt().then((t) => {
    t.onSessionDelete(e);
  }), () => {
    Kt().then((t) => {
      t.offSessionDelete(e);
    });
  }), [e]);
}
function Zs(e) {
  zt(() => (Kt().then((t) => {
    t.onSessionEvent(e);
  }), () => {
    Kt().then((t) => {
      t.offSessionEvent(e);
    });
  }), [e]);
}
function O1(e) {
  zt(() => (Kt().then((t) => {
    t.onSessionExpire(e);
  }), () => {
    Kt().then((t) => {
      t.offSessionExpire(e);
    });
  }), [e]);
}
function I1(e) {
  zt(() => (Kt().then((t) => {
    t.onSessionUpdate(e);
  }), () => {
    Kt().then((t) => {
      t.offSessionUpdate(e);
    });
  }), [e]);
}
function jr(e) {
  const { data: t, error: r, loading: n, setData: i, setError: s, setLoading: u } = Qs();
  async function a(l) {
    try {
      u(!0), s(void 0);
      const h = await (await Kt()).request(l ?? e);
      return i(h), h;
    } catch (h) {
      throw s(h), h;
    } finally {
      u(!1);
    }
  }
  return { data: t, error: r, loading: n, request: a };
}
var x1 = Object.defineProperty, C1 = Object.defineProperties, A1 = Object.getOwnPropertyDescriptors, ic = Object.getOwnPropertySymbols, R1 = Object.prototype.hasOwnProperty, T1 = Object.prototype.propertyIsEnumerable, sc = (e, t, r) => t in e ? x1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, P1 = (e, t) => {
  for (var r in t || (t = {}))
    R1.call(t, r) && sc(e, r, t[r]);
  if (ic)
    for (var r of ic(t))
      T1.call(t, r) && sc(e, r, t[r]);
  return e;
}, N1 = (e, t) => C1(e, A1(t));
function sr() {
  const [e, t] = Dn(void 0);
  return Wu((r) => {
    r.topic === (e == null ? void 0 : e.topic) && t(void 0);
  }), I1((r) => {
    if (e && r.topic === (e == null ? void 0 : e.topic)) {
      const { namespaces: n } = r.params, i = N1(P1({}, e), { namespaces: n });
      t(i);
    }
  }), O1((r) => {
    e && r.topic === (e == null ? void 0 : e.topic) && t(void 0);
  }), zt(() => {
    async function r() {
      const n = await (await Kt()).getSession();
      t(n);
    }
    return r(), si.on("session_change", r), () => {
      si.off("session_change", r);
    };
  }, []), e;
}
const L1 = [
  // aztec methods
  "aztec_connect",
  "aztec_disconnect",
  "aztec_getAccountPublicKey",
  "aztec_getSpendingPublicKey",
  "aztec_requestProofs"
], Hu = ["aztec:1337"], Gu = [
  // aleo methods
  "aleo_decrypt",
  "aleo_disconnect",
  "aleo_getSelectedAccount",
  "aleo_deployProgram",
  "aleo_getBalance",
  "aleo_executeProgram",
  "aleo_getRecords",
  "aleo_transfer"
], eo = ["aleo:1"], _s = ["chainChanged", "accountSelected", "accountSynced"], F1 = "f0aaeffe71b636da453fce042d79d723", oc = "https://walletconnect.puzzle.online/", U1 = {
  standaloneChains: Hu.concat(eo),
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
        universal: oc
      }
    }
  ],
  desktopWallets: [
    {
      id: "puzzle",
      name: "Puzzle Wallet",
      links: {
        native: "",
        universal: oc
      }
    }
  ],
  walletImages: {
    // Override manual wallet image
    puzzle: "https://i.imgur.com/p9tHaFC.png"
  }
}, Lv = {
  requiredNamespaces: {
    aztec: {
      methods: L1,
      chains: Hu,
      events: _s
    },
    aleo: {
      methods: Gu,
      chains: eo,
      events: _s
    }
  }
}, Fv = ({ dAppName: e, dAppDescription: t, dAppUrl: r, dAppIconURL: n }) => /* @__PURE__ */ Xi.jsx(
  E1,
  {
    projectId: F1,
    metadata: {
      name: e,
      description: t,
      url: r,
      icons: [
        n
      ]
    },
    modalOptions: { ...U1 }
  }
), Uv = ({ children: e }) => (dv(), /* @__PURE__ */ Xi.jsx(Xi.Fragment, { children: e })), ac = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), n = (l, h) => {
    const f = typeof l == "function" ? l(t) : l;
    if (!Object.is(f, t)) {
      const g = t;
      t = h ?? typeof f != "object" ? f : Object.assign({}, t, f), r.forEach((v) => v(t, g));
    }
  }, i = () => t, a = { setState: n, getState: i, subscribe: (l) => (r.add(l), () => r.delete(l)), destroy: () => {
    r.clear();
  } };
  return t = e(n, i, a), a;
}, $1 = (e) => e ? ac(e) : ac;
var ws = { exports: {} }, qi = {}, Hn = { exports: {} }, zi = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cc;
function M1() {
  if (cc)
    return zi;
  cc = 1;
  var e = Xr;
  function t(g, v) {
    return g === v && (g !== 0 || 1 / g === 1 / v) || g !== g && v !== v;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, i = e.useEffect, s = e.useLayoutEffect, u = e.useDebugValue;
  function a(g, v) {
    var m = v(), O = n({ inst: { value: m, getSnapshot: v } }), x = O[0].inst, T = O[1];
    return s(function() {
      x.value = m, x.getSnapshot = v, l(x) && T({ inst: x });
    }, [g, m, v]), i(function() {
      return l(x) && T({ inst: x }), g(function() {
        l(x) && T({ inst: x });
      });
    }, [g]), u(m), m;
  }
  function l(g) {
    var v = g.getSnapshot;
    g = g.value;
    try {
      var m = v();
      return !r(g, m);
    } catch {
      return !0;
    }
  }
  function h(g, v) {
    return v();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : a;
  return zi.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, zi;
}
var Ki = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uc;
function j1() {
  return uc || (uc = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Xr, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(I) {
      {
        for (var y = arguments.length, E = new Array(y > 1 ? y - 1 : 0), d = 1; d < y; d++)
          E[d - 1] = arguments[d];
        n("error", I, E);
      }
    }
    function n(I, y, E) {
      {
        var d = t.ReactDebugCurrentFrame, o = d.getStackAddendum();
        o !== "" && (y += "%s", E = E.concat([o]));
        var p = E.map(function(L) {
          return String(L);
        });
        p.unshift("Warning: " + y), Function.prototype.apply.call(console[I], console, p);
      }
    }
    function i(I, y) {
      return I === y && (I !== 0 || 1 / I === 1 / y) || I !== I && y !== y;
    }
    var s = typeof Object.is == "function" ? Object.is : i, u = e.useState, a = e.useEffect, l = e.useLayoutEffect, h = e.useDebugValue, f = !1, g = !1;
    function v(I, y, E) {
      f || e.startTransition !== void 0 && (f = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var d = y();
      if (!g) {
        var o = y();
        s(d, o) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), g = !0);
      }
      var p = u({
        inst: {
          value: d,
          getSnapshot: y
        }
      }), L = p[0].inst, F = p[1];
      return l(function() {
        L.value = d, L.getSnapshot = y, m(L) && F({
          inst: L
        });
      }, [I, d, y]), a(function() {
        m(L) && F({
          inst: L
        });
        var U = function() {
          m(L) && F({
            inst: L
          });
        };
        return I(U);
      }, [I]), h(d), d;
    }
    function m(I) {
      var y = I.getSnapshot, E = I.value;
      try {
        var d = y();
        return !s(E, d);
      } catch {
        return !0;
      }
    }
    function O(I, y, E) {
      return y();
    }
    var x = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", T = !x, M = T ? O : v, w = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : M;
    Ki.useSyncExternalStore = w, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ki;
}
var lc;
function Yu() {
  return lc || (lc = 1, process.env.NODE_ENV === "production" ? Hn.exports = M1() : Hn.exports = j1()), Hn.exports;
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
var fc;
function B1() {
  if (fc)
    return qi;
  fc = 1;
  var e = Xr, t = Yu();
  function r(h, f) {
    return h === f && (h !== 0 || 1 / h === 1 / f) || h !== h && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : r, i = t.useSyncExternalStore, s = e.useRef, u = e.useEffect, a = e.useMemo, l = e.useDebugValue;
  return qi.useSyncExternalStoreWithSelector = function(h, f, g, v, m) {
    var O = s(null);
    if (O.current === null) {
      var x = { hasValue: !1, value: null };
      O.current = x;
    } else
      x = O.current;
    O = a(function() {
      function M(d) {
        if (!w) {
          if (w = !0, I = d, d = v(d), m !== void 0 && x.hasValue) {
            var o = x.value;
            if (m(o, d))
              return y = o;
          }
          return y = d;
        }
        if (o = y, n(I, d))
          return o;
        var p = v(d);
        return m !== void 0 && m(o, p) ? o : (I = d, y = p);
      }
      var w = !1, I, y, E = g === void 0 ? null : g;
      return [function() {
        return M(f());
      }, E === null ? void 0 : function() {
        return M(E());
      }];
    }, [f, g, v, m]);
    var T = i(h, O[0], O[1]);
    return u(function() {
      x.hasValue = !0, x.value = T;
    }, [T]), l(T), T;
  }, qi;
}
var Vi = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hc;
function q1() {
  return hc || (hc = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Xr, t = Yu();
    function r(f, g) {
      return f === g && (f !== 0 || 1 / f === 1 / g) || f !== f && g !== g;
    }
    var n = typeof Object.is == "function" ? Object.is : r, i = t.useSyncExternalStore, s = e.useRef, u = e.useEffect, a = e.useMemo, l = e.useDebugValue;
    function h(f, g, v, m, O) {
      var x = s(null), T;
      x.current === null ? (T = {
        hasValue: !1,
        value: null
      }, x.current = T) : T = x.current;
      var M = a(function() {
        var E = !1, d, o, p = function($) {
          if (!E) {
            E = !0, d = $;
            var q = m($);
            if (O !== void 0 && T.hasValue) {
              var S = T.value;
              if (O(S, q))
                return o = S, S;
            }
            return o = q, q;
          }
          var R = d, G = o;
          if (n(R, $))
            return G;
          var K = m($);
          return O !== void 0 && O(G, K) ? G : (d = $, o = K, K);
        }, L = v === void 0 ? null : v, F = function() {
          return p(g());
        }, U = L === null ? void 0 : function() {
          return p(L());
        };
        return [F, U];
      }, [g, v, m, O]), w = M[0], I = M[1], y = i(f, w, I);
      return u(function() {
        T.hasValue = !0, T.value = y;
      }, [y]), l(y), y;
    }
    Vi.useSyncExternalStoreWithSelector = h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Vi;
}
process.env.NODE_ENV === "production" ? ws.exports = B1() : ws.exports = q1();
var z1 = ws.exports;
const K1 = /* @__PURE__ */ ui(z1), { useSyncExternalStoreWithSelector: V1 } = K1;
function k1(e, t = e.getState, r) {
  const n = V1(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    r
  );
  return Rl(n), n;
}
const dc = (e) => {
  const t = typeof e == "function" ? $1(e) : e, r = (n, i) => k1(t, n, i);
  return Object.assign(r, t), r;
}, W1 = (e) => e ? dc(e) : dc;
function pt(e) {
  for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  if (process.env.NODE_ENV !== "production") {
    var i = ev[e], s = i ? typeof i == "function" ? i.apply(null, r) : i : "unknown error nr: " + e;
    throw Error("[Immer] " + s);
  }
  throw Error("[Immer] minified error nr: " + e + (r.length ? " " + r.map(function(u) {
    return "'" + u + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function Yr(e) {
  return !!e && !!e[Nt];
}
function Lr(e) {
  var t;
  return !!e && (function(r) {
    if (!r || typeof r != "object")
      return !1;
    var n = Object.getPrototypeOf(r);
    if (n === null)
      return !0;
    var i = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
    return i === Object || typeof i == "function" && Function.toString.call(i) === tv;
  }(e) || Array.isArray(e) || !!e[wc] || !!(!((t = e.constructor) === null || t === void 0) && t[wc]) || to(e) || ro(e));
}
function An(e, t, r) {
  r === void 0 && (r = !1), rn(e) === 0 ? (r ? Object.keys : ao)(e).forEach(function(n) {
    r && typeof n == "symbol" || t(n, e[n], e);
  }) : e.forEach(function(n, i) {
    return t(i, n, e);
  });
}
function rn(e) {
  var t = e[Nt];
  return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : to(e) ? 2 : ro(e) ? 3 : 0;
}
function Es(e, t) {
  return rn(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function H1(e, t) {
  return rn(e) === 2 ? e.get(t) : e[t];
}
function Ju(e, t, r) {
  var n = rn(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function G1(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function to(e) {
  return Q1 && e instanceof Map;
}
function ro(e) {
  return Z1 && e instanceof Set;
}
function Tr(e) {
  return e.o || e.t;
}
function no(e) {
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  var t = rv(e);
  delete t[Nt];
  for (var r = ao(t), n = 0; n < r.length; n++) {
    var i = r[n], s = t[i];
    s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (t[i] = { configurable: !0, writable: !0, enumerable: s.enumerable, value: e[i] });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function io(e, t) {
  return t === void 0 && (t = !1), so(e) || Yr(e) || !Lr(e) || (rn(e) > 1 && (e.set = e.add = e.clear = e.delete = Y1), Object.freeze(e), t && An(e, function(r, n) {
    return io(n, !0);
  }, !0)), e;
}
function Y1() {
  pt(2);
}
function so(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function ir(e) {
  var t = nv[e];
  return t || pt(18, e), t;
}
function pc() {
  return process.env.NODE_ENV === "production" || Jr || pt(0), Jr;
}
function ki(e, t) {
  t && (ir("Patches"), e.u = [], e.s = [], e.v = t);
}
function oi(e) {
  Ss(e), e.p.forEach(J1), e.p = null;
}
function Ss(e) {
  e === Jr && (Jr = e.l);
}
function gc(e) {
  return Jr = { p: [], l: Jr, h: e, m: !0, _: 0 };
}
function J1(e) {
  var t = e[Nt];
  t.i === 0 || t.i === 1 ? t.j() : t.O = !0;
}
function Wi(e, t) {
  t._ = t.p.length;
  var r = t.p[0], n = e !== void 0 && e !== r;
  return t.h.g || ir("ES5").S(t, e, n), n ? (r[Nt].P && (oi(t), pt(4)), Lr(e) && (e = ai(t, e), t.l || ci(t, e)), t.u && ir("Patches").M(r[Nt].t, e, t.u, t.s)) : e = ai(t, r, []), oi(t), t.u && t.v(t.u, t.s), e !== Xu ? e : void 0;
}
function ai(e, t, r) {
  if (so(t))
    return t;
  var n = t[Nt];
  if (!n)
    return An(t, function(a, l) {
      return yc(e, n, t, a, l, r);
    }, !0), t;
  if (n.A !== e)
    return t;
  if (!n.P)
    return ci(e, n.t, !0), n.t;
  if (!n.I) {
    n.I = !0, n.A._--;
    var i = n.i === 4 || n.i === 5 ? n.o = no(n.k) : n.o, s = i, u = !1;
    n.i === 3 && (s = new Set(i), i.clear(), u = !0), An(s, function(a, l) {
      return yc(e, n, i, a, l, r, u);
    }), ci(e, i, !1), r && e.u && ir("Patches").N(n, r, e.u, e.s);
  }
  return n.o;
}
function yc(e, t, r, n, i, s, u) {
  if (process.env.NODE_ENV !== "production" && i === r && pt(5), Yr(i)) {
    var a = ai(e, i, s && t && t.i !== 3 && !Es(t.R, n) ? s.concat(n) : void 0);
    if (Ju(r, n, a), !Yr(a))
      return;
    e.m = !1;
  } else
    u && r.add(i);
  if (Lr(i) && !so(i)) {
    if (!e.h.D && e._ < 1)
      return;
    ai(e, i), t && t.A.l || ci(e, i);
  }
}
function ci(e, t, r) {
  r === void 0 && (r = !1), !e.l && e.h.D && e.m && io(t, r);
}
function Hi(e, t) {
  var r = e[Nt];
  return (r ? Tr(r) : e)[t];
}
function bc(e, t) {
  if (t in e)
    for (var r = Object.getPrototypeOf(e); r; ) {
      var n = Object.getOwnPropertyDescriptor(r, t);
      if (n)
        return n;
      r = Object.getPrototypeOf(r);
    }
}
function Ds(e) {
  e.P || (e.P = !0, e.l && Ds(e.l));
}
function Gi(e) {
  e.o || (e.o = no(e.t));
}
function Os(e, t, r) {
  var n = to(t) ? ir("MapSet").F(t, r) : ro(t) ? ir("MapSet").T(t, r) : e.g ? function(i, s) {
    var u = Array.isArray(i), a = { i: u ? 1 : 0, A: s ? s.A : pc(), P: !1, I: !1, R: {}, l: s, t: i, k: null, o: null, j: null, C: !1 }, l = a, h = Is;
    u && (l = [a], h = Sn);
    var f = Proxy.revocable(l, h), g = f.revoke, v = f.proxy;
    return a.k = v, a.j = g, v;
  }(t, r) : ir("ES5").J(t, r);
  return (r ? r.A : pc()).p.push(n), n;
}
function X1(e) {
  return Yr(e) || pt(22, e), function t(r) {
    if (!Lr(r))
      return r;
    var n, i = r[Nt], s = rn(r);
    if (i) {
      if (!i.P && (i.i < 4 || !ir("ES5").K(i)))
        return i.t;
      i.I = !0, n = vc(r, s), i.I = !1;
    } else
      n = vc(r, s);
    return An(n, function(u, a) {
      i && H1(i.t, u) === a || Ju(n, u, t(a));
    }), s === 3 ? new Set(n) : n;
  }(e);
}
function vc(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return no(e);
}
var mc, Jr, oo = typeof Symbol < "u" && typeof Symbol("x") == "symbol", Q1 = typeof Map < "u", Z1 = typeof Set < "u", _c = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", Xu = oo ? Symbol.for("immer-nothing") : ((mc = {})["immer-nothing"] = !0, mc), wc = oo ? Symbol.for("immer-draftable") : "__$immer_draftable", Nt = oo ? Symbol.for("immer-state") : "__$immer_state", ev = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(e) {
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
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" }, tv = "" + Object.prototype.constructor, ao = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Object.getOwnPropertyNames, rv = Object.getOwnPropertyDescriptors || function(e) {
  var t = {};
  return ao(e).forEach(function(r) {
    t[r] = Object.getOwnPropertyDescriptor(e, r);
  }), t;
}, nv = {}, Is = { get: function(e, t) {
  if (t === Nt)
    return e;
  var r = Tr(e);
  if (!Es(r, t))
    return function(i, s, u) {
      var a, l = bc(s, u);
      return l ? "value" in l ? l.value : (a = l.get) === null || a === void 0 ? void 0 : a.call(i.k) : void 0;
    }(e, r, t);
  var n = r[t];
  return e.I || !Lr(n) ? n : n === Hi(e.t, t) ? (Gi(e), e.o[t] = Os(e.A.h, n, e)) : n;
}, has: function(e, t) {
  return t in Tr(e);
}, ownKeys: function(e) {
  return Reflect.ownKeys(Tr(e));
}, set: function(e, t, r) {
  var n = bc(Tr(e), t);
  if (n != null && n.set)
    return n.set.call(e.k, r), !0;
  if (!e.P) {
    var i = Hi(Tr(e), t), s = i == null ? void 0 : i[Nt];
    if (s && s.t === r)
      return e.o[t] = r, e.R[t] = !1, !0;
    if (G1(r, i) && (r !== void 0 || Es(e.t, t)))
      return !0;
    Gi(e), Ds(e);
  }
  return e.o[t] === r && (r !== void 0 || t in e.o) || Number.isNaN(r) && Number.isNaN(e.o[t]) || (e.o[t] = r, e.R[t] = !0), !0;
}, deleteProperty: function(e, t) {
  return Hi(e.t, t) !== void 0 || t in e.t ? (e.R[t] = !1, Gi(e), Ds(e)) : delete e.R[t], e.o && delete e.o[t], !0;
}, getOwnPropertyDescriptor: function(e, t) {
  var r = Tr(e), n = Reflect.getOwnPropertyDescriptor(r, t);
  return n && { writable: !0, configurable: e.i !== 1 || t !== "length", enumerable: n.enumerable, value: r[t] };
}, defineProperty: function() {
  pt(11);
}, getPrototypeOf: function(e) {
  return Object.getPrototypeOf(e.t);
}, setPrototypeOf: function() {
  pt(12);
} }, Sn = {};
An(Is, function(e, t) {
  Sn[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
}), Sn.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && pt(13), Sn.set.call(this, e, t, void 0);
}, Sn.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && pt(14), Is.set.call(this, e[0], t, r, e[0]);
};
var iv = function() {
  function e(r) {
    var n = this;
    this.g = _c, this.D = !0, this.produce = function(i, s, u) {
      if (typeof i == "function" && typeof s != "function") {
        var a = s;
        s = i;
        var l = n;
        return function(x) {
          var T = this;
          x === void 0 && (x = a);
          for (var M = arguments.length, w = Array(M > 1 ? M - 1 : 0), I = 1; I < M; I++)
            w[I - 1] = arguments[I];
          return l.produce(x, function(y) {
            var E;
            return (E = s).call.apply(E, [T, y].concat(w));
          });
        };
      }
      var h;
      if (typeof s != "function" && pt(6), u !== void 0 && typeof u != "function" && pt(7), Lr(i)) {
        var f = gc(n), g = Os(n, i, void 0), v = !0;
        try {
          h = s(g), v = !1;
        } finally {
          v ? oi(f) : Ss(f);
        }
        return typeof Promise < "u" && h instanceof Promise ? h.then(function(x) {
          return ki(f, u), Wi(x, f);
        }, function(x) {
          throw oi(f), x;
        }) : (ki(f, u), Wi(h, f));
      }
      if (!i || typeof i != "object") {
        if ((h = s(i)) === void 0 && (h = i), h === Xu && (h = void 0), n.D && io(h, !0), u) {
          var m = [], O = [];
          ir("Patches").M(i, h, m, O), u(m, O);
        }
        return h;
      }
      pt(21, i);
    }, this.produceWithPatches = function(i, s) {
      if (typeof i == "function")
        return function(h) {
          for (var f = arguments.length, g = Array(f > 1 ? f - 1 : 0), v = 1; v < f; v++)
            g[v - 1] = arguments[v];
          return n.produceWithPatches(h, function(m) {
            return i.apply(void 0, [m].concat(g));
          });
        };
      var u, a, l = n.produce(i, s, function(h, f) {
        u = h, a = f;
      });
      return typeof Promise < "u" && l instanceof Promise ? l.then(function(h) {
        return [h, u, a];
      }) : [l, u, a];
    }, typeof (r == null ? void 0 : r.useProxies) == "boolean" && this.setUseProxies(r.useProxies), typeof (r == null ? void 0 : r.autoFreeze) == "boolean" && this.setAutoFreeze(r.autoFreeze);
  }
  var t = e.prototype;
  return t.createDraft = function(r) {
    Lr(r) || pt(8), Yr(r) && (r = X1(r));
    var n = gc(this), i = Os(this, r, void 0);
    return i[Nt].C = !0, Ss(n), i;
  }, t.finishDraft = function(r, n) {
    var i = r && r[Nt];
    process.env.NODE_ENV !== "production" && (i && i.C || pt(9), i.I && pt(10));
    var s = i.A;
    return ki(s, n), Wi(void 0, s);
  }, t.setAutoFreeze = function(r) {
    this.D = r;
  }, t.setUseProxies = function(r) {
    r && !_c && pt(20), this.g = r;
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
    var u = ir("Patches").$;
    return Yr(r) ? u(r, n) : this.produce(r, function(a) {
      return u(a, n);
    });
  }, e;
}(), Lt = new iv(), sv = Lt.produce;
Lt.produceWithPatches.bind(Lt);
Lt.setAutoFreeze.bind(Lt);
Lt.setUseProxies.bind(Lt);
Lt.applyPatches.bind(Lt);
Lt.createDraft.bind(Lt);
Lt.finishDraft.bind(Lt);
const ov = (e) => (t, r, n) => (n.setState = (i, s, ...u) => {
  const a = typeof i == "function" ? sv(i) : i;
  return t(a, s, ...u);
}, e(n.setState, r, n)), av = ov, lr = W1()(
  av((e, t) => ({
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
), Qu = (e) => e.length < 5 * 2 ? e : `${e.slice(
  0,
  5 + 5
)}...${e.slice(e.length - 5, e.length)}`, $v = () => {
  const e = sr(), [t, r, n, i] = lr((f) => [
    f.account,
    f.accounts,
    f.chainId,
    f.setAccount
  ]), { request: s, data: u, error: a, loading: l } = jr({
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
  Zs(({ params: f, topic: g }) => {
    if (f.event.name === "accountSelected" && e && e.topic === g) {
      const m = f.event.data, O = f.chainId.split(":")[0], x = f.chainId.split(":")[1];
      i({
        network: O,
        chainId: x,
        address: m,
        shortenedAddress: Qu(m)
      });
    }
  }), zt(() => {
    e && !l && s();
  }, [e == null ? void 0 : e.topic]), zt(() => {
    if (u) {
      const f = u && u.type === "GET_SELECTED_ACCOUNT_RES" ? u : void 0, g = f == null ? void 0 : f.data.account;
      g && i(g);
    }
  }, [u]);
  const h = a ? a.message : u && u.type === "GET_SELECTED_ACCOUNT_REJ" ? u.data.error : void 0;
  return {
    account: t,
    accounts: r,
    error: h,
    loading: l
  };
}, Mv = () => {
  const e = sr(), [t, r] = lr((g) => [
    g.chainId,
    g.account
  ]), { request: n, data: i, error: s, loading: u } = jr({
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
  Zs(({ _: g, params: v, topic: m }) => {
    v.event.name === "accountSynced" && e && e.topic === m && !u && n();
  });
  const a = !!e && !!r;
  zt(() => {
    a && !u && n();
  }, [a, r]);
  const l = s ? s.message : i && i.type === "GET_BALANCE_REJ" ? i.data.error : void 0, h = i && i.type === "GET_BALANCE_RES" ? i : void 0, f = h == null ? void 0 : h.data.balances;
  return { loading: u, balances: f, error: l };
}, jv = () => {
  const e = sr(), { connect: t, data: r, error: n, loading: i } = S1({
    requiredNamespaces: {
      aleo: {
        methods: Gu,
        chains: eo,
        events: _s
      }
    }
  });
  return { connect: async () => {
    try {
      await t();
    } catch {
    }
  }, data: r, error: n, loading: i, session: e, isConnected: !!e };
}, Bv = (e) => {
  const t = sr(), [r] = lr((g) => [
    g.chainId
  ]), { request: n, data: i, error: s, loading: u } = jr({
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
  }), a = s ? s.message : i && i.type === "DECRYPT_REJ" ? i.data.error : void 0, l = i && i.type === "DECRYPT_RES" ? i : void 0, h = l == null ? void 0 : l.data;
  return { decrypt: () => {
    !e || !e.startsWith("at1") || e.length !== 61 || n();
  }, data: h, loading: u, error: a };
}, qv = (e) => {
  const t = sr(), [r] = lr((g) => [
    g.chainId
  ]), { request: n, data: i, error: s, loading: u } = jr({
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
  }), a = s ? s.message : i && i.type === "DEPLOY_REJ" ? i.data.error : void 0, l = i && i.type === "DEPLOY_RES" ? i : void 0, h = l == null ? void 0 : l.data.transactionId;
  return { deploy: () => {
    e && n();
  }, transactionId: h, loading: u, error: a };
};
var xs = { exports: {} }, Yi, Ec;
function cv() {
  if (Ec)
    return Yi;
  Ec = 1;
  var e = 1e3, t = e * 60, r = t * 60, n = r * 24, i = n * 7, s = n * 365.25;
  Yi = function(f, g) {
    g = g || {};
    var v = typeof f;
    if (v === "string" && f.length > 0)
      return u(f);
    if (v === "number" && isFinite(f))
      return g.long ? l(f) : a(f);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(f)
    );
  };
  function u(f) {
    if (f = String(f), !(f.length > 100)) {
      var g = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        f
      );
      if (g) {
        var v = parseFloat(g[1]), m = (g[2] || "ms").toLowerCase();
        switch (m) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return v * s;
          case "weeks":
          case "week":
          case "w":
            return v * i;
          case "days":
          case "day":
          case "d":
            return v * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return v * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return v * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return v * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return v;
          default:
            return;
        }
      }
    }
  }
  function a(f) {
    var g = Math.abs(f);
    return g >= n ? Math.round(f / n) + "d" : g >= r ? Math.round(f / r) + "h" : g >= t ? Math.round(f / t) + "m" : g >= e ? Math.round(f / e) + "s" : f + "ms";
  }
  function l(f) {
    var g = Math.abs(f);
    return g >= n ? h(f, g, n, "day") : g >= r ? h(f, g, r, "hour") : g >= t ? h(f, g, t, "minute") : g >= e ? h(f, g, e, "second") : f + " ms";
  }
  function h(f, g, v, m) {
    var O = g >= v * 1.5;
    return Math.round(f / v) + " " + m + (O ? "s" : "");
  }
  return Yi;
}
function uv(e) {
  r.debug = r, r.default = r, r.coerce = l, r.disable = s, r.enable = i, r.enabled = u, r.humanize = cv(), r.destroy = h, Object.keys(e).forEach((f) => {
    r[f] = e[f];
  }), r.names = [], r.skips = [], r.formatters = {};
  function t(f) {
    let g = 0;
    for (let v = 0; v < f.length; v++)
      g = (g << 5) - g + f.charCodeAt(v), g |= 0;
    return r.colors[Math.abs(g) % r.colors.length];
  }
  r.selectColor = t;
  function r(f) {
    let g, v = null, m, O;
    function x(...T) {
      if (!x.enabled)
        return;
      const M = x, w = Number(/* @__PURE__ */ new Date()), I = w - (g || w);
      M.diff = I, M.prev = g, M.curr = w, g = w, T[0] = r.coerce(T[0]), typeof T[0] != "string" && T.unshift("%O");
      let y = 0;
      T[0] = T[0].replace(/%([a-zA-Z%])/g, (d, o) => {
        if (d === "%%")
          return "%";
        y++;
        const p = r.formatters[o];
        if (typeof p == "function") {
          const L = T[y];
          d = p.call(M, L), T.splice(y, 1), y--;
        }
        return d;
      }), r.formatArgs.call(M, T), (M.log || r.log).apply(M, T);
    }
    return x.namespace = f, x.useColors = r.useColors(), x.color = r.selectColor(f), x.extend = n, x.destroy = r.destroy, Object.defineProperty(x, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => v !== null ? v : (m !== r.namespaces && (m = r.namespaces, O = r.enabled(f)), O),
      set: (T) => {
        v = T;
      }
    }), typeof r.init == "function" && r.init(x), x;
  }
  function n(f, g) {
    const v = r(this.namespace + (typeof g > "u" ? ":" : g) + f);
    return v.log = this.log, v;
  }
  function i(f) {
    r.save(f), r.namespaces = f, r.names = [], r.skips = [];
    let g;
    const v = (typeof f == "string" ? f : "").split(/[\s,]+/), m = v.length;
    for (g = 0; g < m; g++)
      v[g] && (f = v[g].replace(/\*/g, ".*?"), f[0] === "-" ? r.skips.push(new RegExp("^" + f.slice(1) + "$")) : r.names.push(new RegExp("^" + f + "$")));
  }
  function s() {
    const f = [
      ...r.names.map(a),
      ...r.skips.map(a).map((g) => "-" + g)
    ].join(",");
    return r.enable(""), f;
  }
  function u(f) {
    if (f[f.length - 1] === "*")
      return !0;
    let g, v;
    for (g = 0, v = r.skips.length; g < v; g++)
      if (r.skips[g].test(f))
        return !1;
    for (g = 0, v = r.names.length; g < v; g++)
      if (r.names[g].test(f))
        return !0;
    return !1;
  }
  function a(f) {
    return f.toString().substring(2, f.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function l(f) {
    return f instanceof Error ? f.stack || f.message : f;
  }
  function h() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return r.enable(r.load()), r;
}
var lv = uv;
(function(e, t) {
  t.formatArgs = n, t.save = i, t.load = s, t.useColors = r, t.storage = u(), t.destroy = (() => {
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
  function n(l) {
    if (l[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + l[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors)
      return;
    const h = "color: " + this.color;
    l.splice(1, 0, h, "color: inherit");
    let f = 0, g = 0;
    l[0].replace(/%[a-zA-Z%]/g, (v) => {
      v !== "%%" && (f++, v === "%c" && (g = f));
    }), l.splice(g, 0, h);
  }
  t.log = console.debug || console.log || (() => {
  });
  function i(l) {
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
  e.exports = lv(t);
  const { formatters: a } = e.exports;
  a.j = function(l) {
    try {
      return JSON.stringify(l);
    } catch (h) {
      return "[UnexpectedJSONParseError]: " + h.message;
    }
  };
})(xs, xs.exports);
var fv = xs.exports;
const hv = /* @__PURE__ */ ui(fv), co = hv("wallet:sdk");
co.enabled = !0;
const zv = () => {
  const e = sr(), [t] = lr((a) => [
    a.disconnect
  ]), { disconnect: r, error: n, loading: i } = D1({
    topic: e == null ? void 0 : e.topic,
    reason: ot("USER_DISCONNECTED")
  }), s = async () => {
    if (e) {
      try {
        r();
      } catch {
        co("could not disconnect session entirely");
      }
      t();
    }
  }, u = n ? n.message : void 0;
  return { disconnect: s, error: u, loading: i };
}, Kv = (e) => {
  const t = sr(), [r] = lr((m) => [
    m.chainId
  ]), n = e == null ? void 0 : e.inputs.map(
    (m) => typeof m == "string" ? m : m.plaintext
  ).join(" "), { request: i, data: s, error: u, loading: a } = jr({
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
            inputs: n ?? ""
          }
        }
      }
    }
  }), l = u ? u.message : s && s.type === "EXECUTE_REJ" ? s.data.error : void 0, h = s && s.type === "EXECUTE_RES" ? s : void 0, f = h == null ? void 0 : h.data.transactionId, g = h == null ? void 0 : h.data.transitions;
  return { execute: () => {
    e && i();
  }, transactionId: f, transitions: g, error: l, loading: a };
}, Vv = () => {
  const [e, t] = Dn({
    loading: !0
  });
  return zt(() => {
  }, []), { ...e };
}, kv = 50, Wv = (e) => {
  try {
    return JSON.stringify(e, null, 2).replaceAll('"', "") ?? "";
  } catch {
    return "";
  }
}, Hv = ({ filter: e, page: t }) => {
  const r = sr(), [n, i] = lr((x) => [
    x.chainId,
    x.account
  ]);
  (e == null ? void 0 : e.program_id) === "" && (e.program_id = void 0);
  const { request: s, data: u, error: a, loading: l } = jr({
    topic: r == null ? void 0 : r.topic,
    chainId: n ?? "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "aleo_getRecords",
      params: {
        type: "GET_RECORDS",
        filter: e,
        page: t
      }
    }
  });
  Zs(({ id: x, params: T, topic: M }) => {
    T.event.name === "accountSynced" && r && r.topic === M && !l && s();
  });
  const h = !!r && !!i;
  zt(() => {
    h && !l && s();
  }, [h, i]);
  const f = () => {
    !!r && !!i && !l && s();
  }, g = a ? a.message : u && u.type === "GET_RECORDS_REJ" ? u.data.error : void 0, v = u && u.type === "GET_RECORDS_RES" ? u : void 0, m = v == null ? void 0 : v.data.records, O = (v == null ? void 0 : v.data.totalRecordCount) ?? 0;
  return { request: f, records: m, error: g, loading: l, totalRecordCount: O };
}, Gv = (e) => {
  const t = sr(), [r] = lr((a) => [
    a.chainId
  ]), { request: n, data: i, error: s, loading: u } = jr({
    topic: (t == null ? void 0 : t.topic) ?? "",
    chainId: r ?? "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "aleo_transfer",
      params: e
    }
  });
  return { transfer: n, data: i, error: s, loading: u };
}, dv = () => {
  const e = sr(), [t, r, n] = lr((i) => [
    i.setAccount,
    i.setAccounts,
    i.disconnect
  ]);
  zt(() => {
    if (e) {
      window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
      const i = e.namespaces.aleo.accounts.map((s) => {
        const u = s.split(":");
        return {
          network: u[0],
          chainId: u[1],
          address: u[2],
          shortenedAddress: Qu(u[2])
        };
      });
      r(i ?? []), i[0] && t(i[0]);
    }
  }, [e == null ? void 0 : e.topic]), Wu(({ id: i, topic: s }) => {
    co("session deleted! topic: ", s), n();
  });
};
function pv(e, t, r = t) {
  const n = e < BigInt(0), i = e.toString().slice(n ? 1 : 0).padStart(t + 1, "0"), s = i.slice(0, i.length - t), u = i.slice(-t);
  let a = u.length - 1;
  for (; u[a] === "0"; )
    --a;
  const l = u.slice(0, a + 1);
  return (n ? "-" : "") + (l ? `${s}.${l.slice(0, r)}` : s);
}
function Yv(e, t) {
  const [r, n] = e.split("."), i = (n || "").replace(/0+$/, "").slice(0, t), s = BigInt(10) ** BigInt(t), u = s / BigInt(10) ** BigInt(i.length || 0);
  return BigInt(i || 0) * u + BigInt(r || 0) * s;
}
var gv = /* @__PURE__ */ ((e) => (e[e.ETH = 0] = "ETH", e[e.DAI = 1] = "DAI", e))(gv || {});
function yv(e) {
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
class Jv {
  constructor(t, r) {
    this.getDisplayValue = () => pv(this.value, 18) + " " + this.symbol, this.type = t;
    const { id: n, symbol: i, coinMarketCapID: s } = yv(t);
    this.id = n, this.symbol = i, this.coinMarketCapID = s, this.value = r;
  }
}
const Xv = "0x6b175474e89094c44da98b954eedeac495271d0f", Qv = [
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
  gv as A,
  Hu as B,
  Gu as C,
  eo as D,
  _s as E,
  F1 as F,
  oc as G,
  U1 as H,
  Lv as I,
  Xv as J,
  Qv as K,
  Fv as P,
  Bl as R,
  Sc as T,
  Et as a,
  Uv as b,
  Qu as c,
  Mv as d,
  jv as e,
  Bv as f,
  qv as g,
  zv as h,
  Kv as i,
  Vv as j,
  kv as k,
  Wv as l,
  Hv as m,
  To as n,
  mv as o,
  Yt as p,
  Gv as q,
  dv as r,
  Di as s,
  vv as t,
  $v as u,
  pv as v,
  Yv as w,
  Jv as x,
  Gr as y,
  L1 as z
};
