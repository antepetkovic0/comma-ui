import qe, { useMemo as kr, forwardRef as Tr } from "react";
var ke = { exports: {} }, oe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue;
function jr() {
  if (Ue)
    return oe;
  Ue = 1;
  var r = qe, n = Symbol.for("react.element"), i = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, u = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(d, p, x) {
    var g, w = {}, T = null, O = null;
    x !== void 0 && (T = "" + x), p.key !== void 0 && (T = "" + p.key), p.ref !== void 0 && (O = p.ref);
    for (g in p)
      a.call(p, g) && !l.hasOwnProperty(g) && (w[g] = p[g]);
    if (d && d.defaultProps)
      for (g in p = d.defaultProps, p)
        w[g] === void 0 && (w[g] = p[g]);
    return { $$typeof: n, type: d, key: T, ref: O, props: w, _owner: u.current };
  }
  return oe.Fragment = i, oe.jsx = s, oe.jsxs = s, oe;
}
var ie = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function Pr() {
  return Be || (Be = 1, process.env.NODE_ENV !== "production" && function() {
    var r = qe, n = Symbol.for("react.element"), i = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), F = Symbol.iterator, _ = "@@iterator";
    function j(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = F && e[F] || e[_];
      return typeof t == "function" ? t : null;
    }
    var P = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(e) {
      {
        for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), c = 1; c < t; c++)
          o[c - 1] = arguments[c];
        le("error", e, o);
      }
    }
    function le(e, t, o) {
      {
        var c = P.ReactDebugCurrentFrame, v = c.getStackAddendum();
        v !== "" && (t += "%s", o = o.concat([v]));
        var y = o.map(function(m) {
          return String(m);
        });
        y.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, y);
      }
    }
    var X = !1, ce = !1, ue = !1, de = !1, fe = !1, Z;
    Z = Symbol.for("react.module.reference");
    function Q(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === l || fe || e === u || e === x || e === g || de || e === O || X || ce || ue || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === w || e.$$typeof === s || e.$$typeof === d || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Z || e.getModuleId !== void 0));
    }
    function ee(e, t, o) {
      var c = e.displayName;
      if (c)
        return c;
      var v = t.displayName || t.name || "";
      return v !== "" ? o + "(" + v + ")" : o;
    }
    function h(e) {
      return e.displayName || "Context";
    }
    function M(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case a:
          return "Fragment";
        case i:
          return "Portal";
        case l:
          return "Profiler";
        case u:
          return "StrictMode";
        case x:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var t = e;
            return h(t) + ".Consumer";
          case s:
            var o = e;
            return h(o._context) + ".Provider";
          case p:
            return ee(e, e.render, "ForwardRef");
          case w:
            var c = e.displayName || null;
            return c !== null ? c : M(e.type) || "Memo";
          case T: {
            var v = e, y = v._payload, m = v._init;
            try {
              return M(m(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, $ = 0, Y, re, H, W, te, N, U;
    function Pe() {
    }
    Pe.__reactDisabledLog = !0;
    function tr() {
      {
        if ($ === 0) {
          Y = console.log, re = console.info, H = console.warn, W = console.error, te = console.group, N = console.groupCollapsed, U = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Pe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        $++;
      }
    }
    function nr() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, e, {
              value: Y
            }),
            info: I({}, e, {
              value: re
            }),
            warn: I({}, e, {
              value: H
            }),
            error: I({}, e, {
              value: W
            }),
            group: I({}, e, {
              value: te
            }),
            groupCollapsed: I({}, e, {
              value: N
            }),
            groupEnd: I({}, e, {
              value: U
            })
          });
        }
        $ < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ye = P.ReactCurrentDispatcher, xe;
    function pe(e, t, o) {
      {
        if (xe === void 0)
          try {
            throw Error();
          } catch (v) {
            var c = v.stack.trim().match(/\n( *(at )?)/);
            xe = c && c[1] || "";
          }
        return `
` + xe + e;
      }
    }
    var we = !1, be;
    {
      var or = typeof WeakMap == "function" ? WeakMap : Map;
      be = new or();
    }
    function Ae(e, t) {
      if (!e || we)
        return "";
      {
        var o = be.get(e);
        if (o !== void 0)
          return o;
      }
      var c;
      we = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = ye.current, ye.current = null, tr();
      try {
        if (t) {
          var m = function() {
            throw Error();
          };
          if (Object.defineProperty(m.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(m, []);
            } catch (V) {
              c = V;
            }
            Reflect.construct(e, [], m);
          } else {
            try {
              m.call();
            } catch (V) {
              c = V;
            }
            e.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (V) {
            c = V;
          }
          e();
        }
      } catch (V) {
        if (V && c && typeof V.stack == "string") {
          for (var b = V.stack.split(`
`), A = c.stack.split(`
`), E = b.length - 1, S = A.length - 1; E >= 1 && S >= 0 && b[E] !== A[S]; )
            S--;
          for (; E >= 1 && S >= 0; E--, S--)
            if (b[E] !== A[S]) {
              if (E !== 1 || S !== 1)
                do
                  if (E--, S--, S < 0 || b[E] !== A[S]) {
                    var z = `
` + b[E].replace(" at new ", " at ");
                    return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), typeof e == "function" && be.set(e, z), z;
                  }
                while (E >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        we = !1, ye.current = y, nr(), Error.prepareStackTrace = v;
      }
      var J = e ? e.displayName || e.name : "", Ye = J ? pe(J) : "";
      return typeof e == "function" && be.set(e, Ye), Ye;
    }
    function ir(e, t, o) {
      return Ae(e, !1);
    }
    function ar(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ge(e, t, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ae(e, ar(e));
      if (typeof e == "string")
        return pe(e);
      switch (e) {
        case x:
          return pe("Suspense");
        case g:
          return pe("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return ir(e.render);
          case w:
            return ge(e.type, t, o);
          case T: {
            var c = e, v = c._payload, y = c._init;
            try {
              return ge(y(v), t, o);
            } catch {
            }
          }
        }
      return "";
    }
    var me = Object.prototype.hasOwnProperty, Oe = {}, Me = P.ReactDebugCurrentFrame;
    function ve(e) {
      if (e) {
        var t = e._owner, o = ge(e.type, e._source, t ? t.type : null);
        Me.setExtraStackFrame(o);
      } else
        Me.setExtraStackFrame(null);
    }
    function sr(e, t, o, c, v) {
      {
        var y = Function.call.bind(me);
        for (var m in e)
          if (y(e, m)) {
            var b = void 0;
            try {
              if (typeof e[m] != "function") {
                var A = Error((c || "React class") + ": " + o + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw A.name = "Invariant Violation", A;
              }
              b = e[m](t, m, c, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              b = E;
            }
            b && !(b instanceof Error) && (ve(v), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", o, m, typeof b), ve(null)), b instanceof Error && !(b.message in Oe) && (Oe[b.message] = !0, ve(v), C("Failed %s type: %s", o, b.message), ve(null));
          }
      }
    }
    var lr = Array.isArray;
    function Ce(e) {
      return lr(e);
    }
    function cr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, o = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function ur(e) {
      try {
        return Ie(e), !1;
      } catch {
        return !0;
      }
    }
    function Ie(e) {
      return "" + e;
    }
    function ze(e) {
      if (ur(e))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", cr(e)), Ie(e);
    }
    var ne = P.ReactCurrentOwner, dr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Le, Fe, Re;
    Re = {};
    function fr(e) {
      if (me.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function pr(e) {
      if (me.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function br(e, t) {
      if (typeof e.ref == "string" && ne.current && t && ne.current.stateNode !== t) {
        var o = M(ne.current.type);
        Re[o] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(ne.current.type), e.ref), Re[o] = !0);
      }
    }
    function gr(e, t) {
      {
        var o = function() {
          Le || (Le = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function mr(e, t) {
      {
        var o = function() {
          Fe || (Fe = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var vr = function(e, t, o, c, v, y, m) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: o,
        props: m,
        // Record the component responsible for creating this element.
        _owner: y
      };
      return b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(b, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function hr(e, t, o, c, v) {
      {
        var y, m = {}, b = null, A = null;
        o !== void 0 && (ze(o), b = "" + o), pr(t) && (ze(t.key), b = "" + t.key), fr(t) && (A = t.ref, br(t, v));
        for (y in t)
          me.call(t, y) && !dr.hasOwnProperty(y) && (m[y] = t[y]);
        if (e && e.defaultProps) {
          var E = e.defaultProps;
          for (y in E)
            m[y] === void 0 && (m[y] = E[y]);
        }
        if (b || A) {
          var S = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          b && gr(m, S), A && mr(m, S);
        }
        return vr(e, b, A, v, c, ne.current, m);
      }
    }
    var Ee = P.ReactCurrentOwner, Ve = P.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var t = e._owner, o = ge(e.type, e._source, t ? t.type : null);
        Ve.setExtraStackFrame(o);
      } else
        Ve.setExtraStackFrame(null);
    }
    var _e;
    _e = !1;
    function Se(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function $e() {
      {
        if (Ee.current) {
          var e = M(Ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function yr(e) {
      {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), o = e.lineNumber;
          return `

Check your code at ` + t + ":" + o + ".";
        }
        return "";
      }
    }
    var We = {};
    function xr(e) {
      {
        var t = $e();
        if (!t) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (t = `

Check the top-level render call using <` + o + ">.");
        }
        return t;
      }
    }
    function Ne(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = xr(t);
        if (We[o])
          return;
        We[o] = !0;
        var c = "";
        e && e._owner && e._owner !== Ee.current && (c = " It was passed a child from " + M(e._owner.type) + "."), q(e), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, c), q(null);
      }
    }
    function De(e, t) {
      {
        if (typeof e != "object")
          return;
        if (Ce(e))
          for (var o = 0; o < e.length; o++) {
            var c = e[o];
            Se(c) && Ne(c, t);
          }
        else if (Se(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var v = j(e);
          if (typeof v == "function" && v !== e.entries)
            for (var y = v.call(e), m; !(m = y.next()).done; )
              Se(m.value) && Ne(m.value, t);
        }
      }
    }
    function wr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var o;
        if (typeof t == "function")
          o = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === w))
          o = t.propTypes;
        else
          return;
        if (o) {
          var c = M(t);
          sr(o, e.props, "prop", c, e);
        } else if (t.PropTypes !== void 0 && !_e) {
          _e = !0;
          var v = M(t);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Cr(e) {
      {
        for (var t = Object.keys(e.props), o = 0; o < t.length; o++) {
          var c = t[o];
          if (c !== "children" && c !== "key") {
            q(e), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), q(null);
            break;
          }
        }
        e.ref !== null && (q(e), C("Invalid attribute `ref` supplied to `React.Fragment`."), q(null));
      }
    }
    function Ge(e, t, o, c, v, y) {
      {
        var m = Q(e);
        if (!m) {
          var b = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var A = yr(v);
          A ? b += A : b += $e();
          var E;
          e === null ? E = "null" : Ce(e) ? E = "array" : e !== void 0 && e.$$typeof === n ? (E = "<" + (M(e.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, b);
        }
        var S = hr(e, t, o, v, y);
        if (S == null)
          return S;
        if (m) {
          var z = t.children;
          if (z !== void 0)
            if (c)
              if (Ce(z)) {
                for (var J = 0; J < z.length; J++)
                  De(z[J], e);
                Object.freeze && Object.freeze(z);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              De(z, e);
        }
        return e === a ? Cr(S) : wr(S), S;
      }
    }
    function Rr(e, t, o) {
      return Ge(e, t, o, !0);
    }
    function Er(e, t, o) {
      return Ge(e, t, o, !1);
    }
    var _r = Er, Sr = Rr;
    ie.Fragment = a, ie.jsx = _r, ie.jsxs = Sr;
  }()), ie;
}
process.env.NODE_ENV === "production" ? ke.exports = jr() : ke.exports = Pr();
var k = ke.exports;
const Ar = {
  small: "w-4 h-4 border-2",
  medium: "w-8 h-8 border-4",
  large: "w-16 h-16 border-8"
}, Or = {
  default: "border-cui-astral-primary/30 border-t-cui-astral-primary",
  invert: "border-[#c4c4c2]/30 border-t-white"
}, wt = ({
  size: r = "medium",
  appearance: n = "default"
}) => {
  const a = `rounded-full animate-spin ${Ar[r]} ${Or[n]}`;
  return /* @__PURE__ */ k.jsx("div", { className: a });
}, je = "-";
function Mr(r) {
  const n = zr(r), {
    conflictingClassGroups: i,
    conflictingClassGroupModifiers: a
  } = r;
  function u(s) {
    const d = s.split(je);
    return d[0] === "" && d.length !== 1 && d.shift(), Je(d, n) || Ir(s);
  }
  function l(s, d) {
    const p = i[s] || [];
    return d && a[s] ? [...p, ...a[s]] : p;
  }
  return {
    getClassGroupId: u,
    getConflictingClassGroupIds: l
  };
}
function Je(r, n) {
  var s;
  if (r.length === 0)
    return n.classGroupId;
  const i = r[0], a = n.nextPart.get(i), u = a ? Je(r.slice(1), a) : void 0;
  if (u)
    return u;
  if (n.validators.length === 0)
    return;
  const l = r.join(je);
  return (s = n.validators.find(({
    validator: d
  }) => d(l))) == null ? void 0 : s.classGroupId;
}
const Ze = /^\[(.+)\]$/;
function Ir(r) {
  if (Ze.test(r)) {
    const n = Ze.exec(r)[1], i = n == null ? void 0 : n.substring(0, n.indexOf(":"));
    if (i)
      return "arbitrary.." + i;
  }
}
function zr(r) {
  const {
    theme: n,
    prefix: i
  } = r, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Fr(Object.entries(r.classGroups), i).forEach(([l, s]) => {
    Te(s, a, l, n);
  }), a;
}
function Te(r, n, i, a) {
  r.forEach((u) => {
    if (typeof u == "string") {
      const l = u === "" ? n : He(n, u);
      l.classGroupId = i;
      return;
    }
    if (typeof u == "function") {
      if (Lr(u)) {
        Te(u(a), n, i, a);
        return;
      }
      n.validators.push({
        validator: u,
        classGroupId: i
      });
      return;
    }
    Object.entries(u).forEach(([l, s]) => {
      Te(s, He(n, l), i, a);
    });
  });
}
function He(r, n) {
  let i = r;
  return n.split(je).forEach((a) => {
    i.nextPart.has(a) || i.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), i = i.nextPart.get(a);
  }), i;
}
function Lr(r) {
  return r.isThemeGetter;
}
function Fr(r, n) {
  return n ? r.map(([i, a]) => {
    const u = a.map((l) => typeof l == "string" ? n + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(([s, d]) => [n + s, d])) : l);
    return [i, u];
  }) : r;
}
function Vr(r) {
  if (r < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let n = 0, i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  function u(l, s) {
    i.set(l, s), n++, n > r && (n = 0, a = i, i = /* @__PURE__ */ new Map());
  }
  return {
    get(l) {
      let s = i.get(l);
      if (s !== void 0)
        return s;
      if ((s = a.get(l)) !== void 0)
        return u(l, s), s;
    },
    set(l, s) {
      i.has(l) ? i.set(l, s) : u(l, s);
    }
  };
}
const Ke = "!";
function $r(r) {
  const n = r.separator, i = n.length === 1, a = n[0], u = n.length;
  return function(s) {
    const d = [];
    let p = 0, x = 0, g;
    for (let _ = 0; _ < s.length; _++) {
      let j = s[_];
      if (p === 0) {
        if (j === a && (i || s.slice(_, _ + u) === n)) {
          d.push(s.slice(x, _)), x = _ + u;
          continue;
        }
        if (j === "/") {
          g = _;
          continue;
        }
      }
      j === "[" ? p++ : j === "]" && p--;
    }
    const w = d.length === 0 ? s : s.substring(x), T = w.startsWith(Ke), O = T ? w.substring(1) : w, F = g && g > x ? g - x : void 0;
    return {
      modifiers: d,
      hasImportantModifier: T,
      baseClassName: O,
      maybePostfixModifierPosition: F
    };
  };
}
function Wr(r) {
  if (r.length <= 1)
    return r;
  const n = [];
  let i = [];
  return r.forEach((a) => {
    a[0] === "[" ? (n.push(...i.sort(), a), i = []) : i.push(a);
  }), n.push(...i.sort()), n;
}
function Nr(r) {
  return {
    cache: Vr(r.cacheSize),
    splitModifiers: $r(r),
    ...Mr(r)
  };
}
const Dr = /\s+/;
function Gr(r, n) {
  const {
    splitModifiers: i,
    getClassGroupId: a,
    getConflictingClassGroupIds: u
  } = n, l = /* @__PURE__ */ new Set();
  return r.trim().split(Dr).map((s) => {
    const {
      modifiers: d,
      hasImportantModifier: p,
      baseClassName: x,
      maybePostfixModifierPosition: g
    } = i(s);
    let w = a(g ? x.substring(0, g) : x), T = !!g;
    if (!w) {
      if (!g)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      if (w = a(x), !w)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      T = !1;
    }
    const O = Wr(d).join(":");
    return {
      isTailwindClass: !0,
      modifierId: p ? O + Ke : O,
      classGroupId: w,
      originalClassName: s,
      hasPostfixModifier: T
    };
  }).reverse().filter((s) => {
    if (!s.isTailwindClass)
      return !0;
    const {
      modifierId: d,
      classGroupId: p,
      hasPostfixModifier: x
    } = s, g = d + p;
    return l.has(g) ? !1 : (l.add(g), u(p, x).forEach((w) => l.add(d + w)), !0);
  }).reverse().map((s) => s.originalClassName).join(" ");
}
function Yr() {
  let r = 0, n, i, a = "";
  for (; r < arguments.length; )
    (n = arguments[r++]) && (i = Xe(n)) && (a && (a += " "), a += i);
  return a;
}
function Xe(r) {
  if (typeof r == "string")
    return r;
  let n, i = "";
  for (let a = 0; a < r.length; a++)
    r[a] && (n = Xe(r[a])) && (i && (i += " "), i += n);
  return i;
}
function Ur(r, ...n) {
  let i, a, u, l = s;
  function s(p) {
    const x = n.reduce((g, w) => w(g), r());
    return i = Nr(x), a = i.cache.get, u = i.cache.set, l = d, d(p);
  }
  function d(p) {
    const x = a(p);
    if (x)
      return x;
    const g = Gr(p, i);
    return u(p, g), g;
  }
  return function() {
    return l(Yr.apply(null, arguments));
  };
}
function R(r) {
  const n = (i) => i[r] || [];
  return n.isThemeGetter = !0, n;
}
const Qe = /^\[(?:([a-z-]+):)?(.+)\]$/i, Br = /^\d+\/\d+$/, Zr = /* @__PURE__ */ new Set(["px", "full", "screen"]), Hr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, qr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Jr = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Kr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function L(r) {
  return B(r) || Zr.has(r) || Br.test(r);
}
function D(r) {
  return K(r, "length", it);
}
function B(r) {
  return !!r && !Number.isNaN(Number(r));
}
function he(r) {
  return K(r, "number", B);
}
function ae(r) {
  return !!r && Number.isInteger(Number(r));
}
function Xr(r) {
  return r.endsWith("%") && B(r.slice(0, -1));
}
function f(r) {
  return Qe.test(r);
}
function G(r) {
  return Hr.test(r);
}
const Qr = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function et(r) {
  return K(r, Qr, er);
}
function rt(r) {
  return K(r, "position", er);
}
const tt = /* @__PURE__ */ new Set(["image", "url"]);
function nt(r) {
  return K(r, tt, st);
}
function ot(r) {
  return K(r, "", at);
}
function se() {
  return !0;
}
function K(r, n, i) {
  const a = Qe.exec(r);
  return a ? a[1] ? typeof n == "string" ? a[1] === n : n.has(a[1]) : i(a[2]) : !1;
}
function it(r) {
  return qr.test(r);
}
function er() {
  return !1;
}
function at(r) {
  return Jr.test(r);
}
function st(r) {
  return Kr.test(r);
}
function lt() {
  const r = R("colors"), n = R("spacing"), i = R("blur"), a = R("brightness"), u = R("borderColor"), l = R("borderRadius"), s = R("borderSpacing"), d = R("borderWidth"), p = R("contrast"), x = R("grayscale"), g = R("hueRotate"), w = R("invert"), T = R("gap"), O = R("gradientColorStops"), F = R("gradientColorStopPositions"), _ = R("inset"), j = R("margin"), P = R("opacity"), C = R("padding"), le = R("saturate"), X = R("scale"), ce = R("sepia"), ue = R("skew"), de = R("space"), fe = R("translate"), Z = () => ["auto", "contain", "none"], Q = () => ["auto", "hidden", "clip", "visible", "scroll"], ee = () => ["auto", f, n], h = () => [f, n], M = () => ["", L, D], I = () => ["auto", B, f], $ = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], Y = () => ["solid", "dashed", "dotted", "double", "none"], re = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], H = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], W = () => ["", "0", f], te = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], N = () => [B, he], U = () => [B, f];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [se],
      spacing: [L, D],
      blur: ["none", "", G, f],
      brightness: N(),
      borderColor: [r],
      borderRadius: ["none", "", "full", G, f],
      borderSpacing: h(),
      borderWidth: M(),
      contrast: N(),
      grayscale: W(),
      hueRotate: U(),
      invert: W(),
      gap: h(),
      gradientColorStops: [r],
      gradientColorStopPositions: [Xr, D],
      inset: ee(),
      margin: ee(),
      opacity: N(),
      padding: h(),
      saturate: N(),
      scale: N(),
      sepia: W(),
      skew: U(),
      space: h(),
      translate: h()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", f]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [G]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": te()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": te()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...$(), f]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Q()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Q()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Q()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: Z()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Z()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Z()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [_]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [_]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [_]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [_]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [_]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [_]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [_]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [_]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [_]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", ae, f]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: ee()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", f]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: W()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: W()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ae, f]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [se]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ae, f]
        }, f]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": I()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": I()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [se]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ae, f]
        }, f]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": I()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": I()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", f]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", f]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [T]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [T]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [T]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...H()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...H(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...H(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [C]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [C]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [C]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [C]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [C]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [C]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [C]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [C]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [C]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [j]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [j]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [j]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [j]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [j]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [j]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [j]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [j]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [j]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [de]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [de]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", f, n]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", f, L]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [G]
        }, G, f]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [f, n, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", L, f]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [f, n, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", G, D]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", he]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [se]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", f]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", B, he]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", L, f]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", f]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", f]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [r]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [P]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [r]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [P]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...Y(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", L, D]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", L, f]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [r]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: h()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", f]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", f]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [P]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...$(), rt]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", et]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, nt]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [r]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [F]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [F]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [F]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [O]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [O]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [O]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [l]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [l]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [l]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [l]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [l]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [l]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [l]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [l]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [l]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [l]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [l]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [l]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [l]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [l]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [l]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [d]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [d]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [d]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [d]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [d]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [d]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [d]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [d]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [d]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [P]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Y(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [d]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [d]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [P]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: Y()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [u]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [u]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [u]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [u]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [u]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [u]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [u]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [u]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...Y()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [L, f]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [L, D]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [r]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: M()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [r]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [P]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [L, D]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [r]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", G, ot]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [se]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [P]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": re()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": re()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [i]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [a]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [p]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", G, f]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [x]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [g]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [w]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [le]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [ce]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [i]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [a]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [p]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [x]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [g]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [w]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [P]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [le]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [ce]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", f]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: U()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", f]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: U()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", f]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [X]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [X]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [X]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ae, f]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [fe]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [fe]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [ue]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [ue]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", f]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", r]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", f]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [r]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": h()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": h()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": h()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": h()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": h()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": h()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": h()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": h()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": h()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": h()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": h()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": h()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": h()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": h()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": h()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": h()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": h()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": h()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", f]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [r, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [L, D, he]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [r, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const ct = /* @__PURE__ */ Ur(lt);
function ut() {
  return /* @__PURE__ */ k.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      role: "img",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      children: /* @__PURE__ */ k.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12.0006 2.25C11.6058 2.25 11.2181 2.35429 10.8766 2.55233C10.5357 2.75 10.253 3.03408 10.0569 3.37589L10.0559 3.37772L1.80731 17.6252C1.61017 17.9667 1.50621 18.354 1.50586 18.7483C1.50551 19.1425 1.60878 19.53 1.80532 19.8718C2.00186 20.2136 2.28477 20.4978 2.62571 20.6958C2.96665 20.8939 3.35365 20.9988 3.74794 21.0002L3.75058 21.0002H20.2506L20.2532 21.0002C20.6475 20.9988 21.0345 20.8939 21.3754 20.6958C21.7164 20.4978 21.9993 20.2136 22.1958 19.8718C22.3924 19.53 22.4956 19.1425 22.4953 18.7483C22.4949 18.354 22.3905 17.9659 22.1934 17.6245L13.9453 3.37772L13.9443 3.37598C13.7482 3.03413 13.4655 2.75002 13.1246 2.55233C12.7831 2.35429 12.3953 2.25 12.0006 2.25ZM12.0006 9.00024C12.4148 9.00024 12.7506 9.33603 12.7506 9.75024V13.5002C12.7506 13.9145 12.4148 14.2502 12.0006 14.2502C11.5864 14.2502 11.2506 13.9145 11.2506 13.5002V9.75024C11.2506 9.33603 11.5864 9.00024 12.0006 9.00024ZM12.0006 18.0002C12.6219 18.0002 13.1256 17.4966 13.1256 16.8752C13.1256 16.2539 12.6219 15.7502 12.0006 15.7502C11.3793 15.7502 10.8756 16.2539 10.8756 16.8752C10.8756 17.4966 11.3793 18.0002 12.0006 18.0002Z",
          fill: "#CF182E"
        }
      )
    }
  );
}
function dt() {
  return /* @__PURE__ */ k.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      role: "img",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      className: "fill-inherit",
      children: [
        /* @__PURE__ */ k.jsx("path", { d: "M17.3183 2.68439C17.3771 2.74352 17.4216 2.81149 17.4518 2.884C17.4829 2.95817 17.5 3.03958 17.5 3.125V7.8125C17.5 8.15768 17.2202 8.4375 16.875 8.4375C16.5298 8.4375 16.25 8.15768 16.25 7.8125V4.63388L11.6919 9.19194C11.4479 9.43602 11.0521 9.43602 10.8081 9.19194C10.564 8.94786 10.564 8.55214 10.8081 8.30806L15.3661 3.75H12.1875C11.8423 3.75 11.5625 3.47018 11.5625 3.125C11.5625 2.77982 11.8423 2.5 12.1875 2.5H16.875C17.0469 2.5 17.2026 2.56941 17.3156 2.68173L17.3169 2.68306L17.3183 2.68439Z" }),
        /* @__PURE__ */ k.jsx("path", { d: "M3.75 5C3.41848 5 3.10054 5.1317 2.86612 5.36612C2.6317 5.60054 2.5 5.91848 2.5 6.25V16.25C2.5 16.5815 2.6317 16.8995 2.86612 17.1339C3.10054 17.3683 3.41848 17.5 3.75 17.5H13.75C14.0815 17.5 14.3995 17.3683 14.6339 17.1339C14.8683 16.8995 15 16.5815 15 16.25V11.25C15 10.9048 14.7202 10.625 14.375 10.625C14.0298 10.625 13.75 10.9048 13.75 11.25V16.25H3.75L3.75 6.25H8.75C9.09518 6.25 9.375 5.97018 9.375 5.625C9.375 5.27982 9.09518 5 8.75 5H3.75Z" })
      ]
    }
  );
}
function ft() {
  return /* @__PURE__ */ k.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      role: "img",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      children: /* @__PURE__ */ k.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM11.8125 9C12.4338 9 12.9375 8.49632 12.9375 7.875C12.9375 7.25368 12.4338 6.75 11.8125 6.75C11.1912 6.75 10.6875 7.25368 10.6875 7.875C10.6875 8.49632 11.1912 9 11.8125 9ZM10.5 11.25C10.5 10.8358 10.8358 10.5 11.25 10.5H12C12.4142 10.5 12.75 10.8358 12.75 11.25V15.75C13.1642 15.75 13.5 16.0858 13.5 16.5C13.5 16.9142 13.1642 17.25 12.75 17.25H12C11.5858 17.25 11.25 16.9142 11.25 16.5V12C10.8358 12 10.5 11.6642 10.5 11.25Z",
          fill: "#3950AD"
        }
      )
    }
  );
}
function pt() {
  return /* @__PURE__ */ k.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      role: "img",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      children: /* @__PURE__ */ k.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM16.6677 9.2323C16.9536 9.532 16.9424 10.0067 16.6427 10.2927L11.1396 15.5427C10.8496 15.8193 10.3934 15.8191 10.1037 15.5422L7.35684 12.9172C7.05737 12.631 7.0466 12.1563 7.33278 11.8568C7.61895 11.5574 8.0937 11.5466 8.39317 11.8328L10.6223 13.963L15.6073 9.20734C15.907 8.92142 16.3817 8.93259 16.6677 9.2323Z",
          fill: "#208560"
        }
      )
    }
  );
}
function bt() {
  return /* @__PURE__ */ k.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      role: "img",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      children: /* @__PURE__ */ k.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM12.75 7.5C12.75 7.08579 12.4142 6.75 12 6.75C11.5858 6.75 11.25 7.08579 11.25 7.5V12.75C11.25 13.1642 11.5858 13.5 12 13.5C12.4142 13.5 12.75 13.1642 12.75 12.75V7.5ZM13.125 16.125C13.125 16.7463 12.6213 17.25 12 17.25C11.3787 17.25 10.875 16.7463 10.875 16.125C10.875 15.5037 11.3787 15 12 15C12.6213 15 13.125 15.5037 13.125 16.125Z",
          fill: "#AD7410"
        }
      )
    }
  );
}
function gt() {
}
let rr = gt;
process.env.NODE_ENV !== "production" && (rr = (r, n) => {
  console.warn(`[commaUI: ${r}] ${n}`);
});
const mt = rr, vt = ({ name: r }) => {
  const n = kr(() => {
    switch (r) {
      case "success":
        return /* @__PURE__ */ k.jsx(pt, {});
      case "info":
        return /* @__PURE__ */ k.jsx(ft, {});
      case "warning":
        return /* @__PURE__ */ k.jsx(bt, {});
      case "error":
        return /* @__PURE__ */ k.jsx(ut, {});
      case "external-link":
        return /* @__PURE__ */ k.jsx(dt, {});
      default:
        return null;
    }
  }, [r]);
  return n || mt("Icon", "Unknown icon name."), n;
}, ht = {
  success: "bg-cui-success-100 border-cui-success-200",
  info: "bg-cui-info-100 border-cui-info-200",
  error: "bg-cui-error-100 border-cui-error-200",
  warning: "bg-[#FFA500] border-orange-200"
}, yt = Tr(
  ({ type: r, children: n, className: i, ...a }, u) => {
    const s = ct("alert flex items-start gap-2 p-4 border rounded-sm text-cui-text-primary", ht[r], i);
    return /* @__PURE__ */ k.jsxs("div", { role: "alert", ref: u, className: s, ...a, children: [
      /* @__PURE__ */ k.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ k.jsx(vt, { name: r }) }),
      n
    ] });
  }
);
yt.displayName = "Alert";
const Ct = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "cui-text": {
          primary: "#1b1b1a",
          secondary: "#545452",
          tertiary: "#72716f",
          subdued: "#a6a5a2"
        },
        "cui-astral": {
          primary: "#2e7899",
          secondary: "#2a638f",
          tertiary: "#074058",
          quaternary: "#5d72c2"
        },
        "cui-success": {
          100: "#ebf5f1",
          200: "#b6d1c6",
          300: "#208560"
        },
        "cui-info": {
          100: "#e8efff",
          200: "#b9c7eb",
          300: "#3950ad"
        },
        "cui-error": {
          100: "#fff0f1",
          200: "#facfd4",
          300: "#cf182e"
        },
        "cui-warning": {
          100: "#fff8e3",
          200: "#ffe299",
          300: "#ad7410"
        }
      }
    }
  },
  plugins: []
};
export {
  yt as Alert,
  wt as Spinner,
  Ct as tailwindConfig
};
