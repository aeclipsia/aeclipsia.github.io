(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function ic(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ku = { exports: {} },
  ll = {},
  Yu = { exports: {} },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gn = Symbol.for("react.element"),
  oc = Symbol.for("react.portal"),
  uc = Symbol.for("react.fragment"),
  sc = Symbol.for("react.strict_mode"),
  ac = Symbol.for("react.profiler"),
  cc = Symbol.for("react.provider"),
  fc = Symbol.for("react.context"),
  dc = Symbol.for("react.forward_ref"),
  pc = Symbol.for("react.suspense"),
  mc = Symbol.for("react.memo"),
  hc = Symbol.for("react.lazy"),
  Io = Symbol.iterator;
function vc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Io && e[Io]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Xu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Gu = Object.assign,
  Zu = {};
function sn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Zu),
    (this.updater = n || Xu);
}
sn.prototype.isReactComponent = {};
sn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
sn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ju() {}
Ju.prototype = sn.prototype;
function Vi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Zu),
    (this.updater = n || Xu);
}
var Hi = (Vi.prototype = new Ju());
Hi.constructor = Vi;
Gu(Hi, sn.prototype);
Hi.isPureReactComponent = !0;
var Fo = Array.isArray,
  qu = Object.prototype.hasOwnProperty,
  Bi = { current: null },
  bu = { key: !0, ref: !0, __self: !0, __source: !0 };
function es(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      qu.call(t, r) && !bu.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Gn,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Bi.current,
  };
}
function yc(e, t) {
  return {
    $$typeof: Gn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Wi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Gn;
}
function gc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Uo = /\/+/g;
function El(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? gc("" + e.key)
    : t.toString(36);
}
function xr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Gn:
          case oc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + El(o, 0) : r),
      Fo(l)
        ? ((n = ""),
          e != null && (n = e.replace(Uo, "$&/") + "/"),
          xr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (Wi(l) &&
            (l = yc(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Uo, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Fo(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + El(i, u);
      o += xr(i, t, n, s, l);
    }
  else if (((s = vc(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + El(i, u++)), (o += xr(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function ir(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    xr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function wc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var se = { current: null },
  Er = { transition: null },
  Sc = {
    ReactCurrentDispatcher: se,
    ReactCurrentBatchConfig: Er,
    ReactCurrentOwner: Bi,
  };
function ts() {
  throw Error("act(...) is not supported in production builds of React.");
}
T.Children = {
  map: ir,
  forEach: function (e, t, n) {
    ir(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ir(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ir(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Wi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
T.Component = sn;
T.Fragment = uc;
T.Profiler = ac;
T.PureComponent = Vi;
T.StrictMode = sc;
T.Suspense = pc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sc;
T.act = ts;
T.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Gu({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Bi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      qu.call(t, s) &&
        !bu.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Gn, type: e.type, key: l, ref: i, props: r, _owner: o };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: fc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: cc, _context: e }),
    (e.Consumer = e)
  );
};
T.createElement = es;
T.createFactory = function (e) {
  var t = es.bind(null, e);
  return (t.type = e), t;
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (e) {
  return { $$typeof: dc, render: e };
};
T.isValidElement = Wi;
T.lazy = function (e) {
  return { $$typeof: hc, _payload: { _status: -1, _result: e }, _init: wc };
};
T.memo = function (e, t) {
  return { $$typeof: mc, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function (e) {
  var t = Er.transition;
  Er.transition = {};
  try {
    e();
  } finally {
    Er.transition = t;
  }
};
T.unstable_act = ts;
T.useCallback = function (e, t) {
  return se.current.useCallback(e, t);
};
T.useContext = function (e) {
  return se.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return se.current.useDeferredValue(e);
};
T.useEffect = function (e, t) {
  return se.current.useEffect(e, t);
};
T.useId = function () {
  return se.current.useId();
};
T.useImperativeHandle = function (e, t, n) {
  return se.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function (e, t) {
  return se.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function (e, t) {
  return se.current.useLayoutEffect(e, t);
};
T.useMemo = function (e, t) {
  return se.current.useMemo(e, t);
};
T.useReducer = function (e, t, n) {
  return se.current.useReducer(e, t, n);
};
T.useRef = function (e) {
  return se.current.useRef(e);
};
T.useState = function (e) {
  return se.current.useState(e);
};
T.useSyncExternalStore = function (e, t, n) {
  return se.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function () {
  return se.current.useTransition();
};
T.version = "18.3.1";
Yu.exports = T;
var Q = Yu.exports;
const Zn = ic(Q);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kc = Q,
  xc = Symbol.for("react.element"),
  Ec = Symbol.for("react.fragment"),
  Cc = Object.prototype.hasOwnProperty,
  _c = kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Nc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ns(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Cc.call(t, r) && !Nc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: xc,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: _c.current,
  };
}
ll.Fragment = Ec;
ll.jsx = ns;
ll.jsxs = ns;
Ku.exports = ll;
var E = Ku.exports,
  rs = { exports: {} },
  we = {},
  ls = { exports: {} },
  is = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, z) {
    var j = N.length;
    N.push(z);
    e: for (; 0 < j; ) {
      var W = (j - 1) >>> 1,
        Z = N[W];
      if (0 < l(Z, z)) (N[W] = z), (N[j] = Z), (j = W);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var z = N[0],
      j = N.pop();
    if (j !== z) {
      N[0] = j;
      e: for (var W = 0, Z = N.length, rr = Z >>> 1; W < rr; ) {
        var gt = 2 * (W + 1) - 1,
          xl = N[gt],
          wt = gt + 1,
          lr = N[wt];
        if (0 > l(xl, j))
          wt < Z && 0 > l(lr, xl)
            ? ((N[W] = lr), (N[wt] = j), (W = wt))
            : ((N[W] = xl), (N[gt] = j), (W = gt));
        else if (wt < Z && 0 > l(lr, j)) (N[W] = lr), (N[wt] = j), (W = wt);
        else break e;
      }
    }
    return z;
  }
  function l(N, z) {
    var j = N.sortIndex - z.sortIndex;
    return j !== 0 ? j : N.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    c = [],
    h = 1,
    m = null,
    p = 3,
    g = !1,
    w = !1,
    k = !1,
    D = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(N) {
    for (var z = n(c); z !== null; ) {
      if (z.callback === null) r(c);
      else if (z.startTime <= N)
        r(c), (z.sortIndex = z.expirationTime), t(s, z);
      else break;
      z = n(c);
    }
  }
  function v(N) {
    if (((k = !1), d(N), !w))
      if (n(s) !== null) (w = !0), Sl(x);
      else {
        var z = n(c);
        z !== null && kl(v, z.startTime - N);
      }
  }
  function x(N, z) {
    (w = !1), k && ((k = !1), f(_), (_ = -1)), (g = !0);
    var j = p;
    try {
      for (
        d(z), m = n(s);
        m !== null && (!(m.expirationTime > z) || (N && !ke()));

      ) {
        var W = m.callback;
        if (typeof W == "function") {
          (m.callback = null), (p = m.priorityLevel);
          var Z = W(m.expirationTime <= z);
          (z = e.unstable_now()),
            typeof Z == "function" ? (m.callback = Z) : m === n(s) && r(s),
            d(z);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var rr = !0;
      else {
        var gt = n(c);
        gt !== null && kl(v, gt.startTime - z), (rr = !1);
      }
      return rr;
    } finally {
      (m = null), (p = j), (g = !1);
    }
  }
  var P = !1,
    S = null,
    _ = -1,
    O = 5,
    L = -1;
  function ke() {
    return !(e.unstable_now() - L < O);
  }
  function vt() {
    if (S !== null) {
      var N = e.unstable_now();
      L = N;
      var z = !0;
      try {
        z = S(!0, N);
      } finally {
        z ? yt() : ((P = !1), (S = null));
      }
    } else P = !1;
  }
  var yt;
  if (typeof a == "function")
    yt = function () {
      a(vt);
    };
  else if (typeof MessageChannel < "u") {
    var tr = new MessageChannel(),
      nr = tr.port2;
    (tr.port1.onmessage = vt),
      (yt = function () {
        nr.postMessage(null);
      });
  } else
    yt = function () {
      D(vt, 0);
    };
  function Sl(N) {
    (S = N), P || ((P = !0), yt());
  }
  function kl(N, z) {
    _ = D(function () {
      N(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), Sl(x));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (O = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (N) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = p;
      }
      var j = p;
      p = z;
      try {
        return N();
      } finally {
        p = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, z) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var j = p;
      p = N;
      try {
        return z();
      } finally {
        p = j;
      }
    }),
    (e.unstable_scheduleCallback = function (N, z, j) {
      var W = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? W + j : W))
          : (j = W),
        N)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = j + Z),
        (N = {
          id: h++,
          callback: z,
          priorityLevel: N,
          startTime: j,
          expirationTime: Z,
          sortIndex: -1,
        }),
        j > W
          ? ((N.sortIndex = j),
            t(c, N),
            n(s) === null &&
              N === n(c) &&
              (k ? (f(_), (_ = -1)) : (k = !0), kl(v, j - W)))
          : ((N.sortIndex = Z), t(s, N), w || g || ((w = !0), Sl(x))),
        N
      );
    }),
    (e.unstable_shouldYield = ke),
    (e.unstable_wrapCallback = function (N) {
      var z = p;
      return function () {
        var j = p;
        p = z;
        try {
          return N.apply(this, arguments);
        } finally {
          p = j;
        }
      };
    });
})(is);
ls.exports = is;
var Pc = ls.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zc = Q,
  ge = Pc;
function y(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var os = new Set(),
  Mn = {};
function Mt(e, t) {
  en(e, t), en(e + "Capture", t);
}
function en(e, t) {
  for (Mn[e] = t, e = 0; e < t.length; e++) os.add(t[e]);
}
var Qe = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Gl = Object.prototype.hasOwnProperty,
  Lc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  $o = {},
  Ao = {};
function jc(e) {
  return Gl.call(Ao, e)
    ? !0
    : Gl.call($o, e)
    ? !1
    : Lc.test(e)
    ? (Ao[e] = !0)
    : (($o[e] = !0), !1);
}
function Tc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Mc(e, t, n, r) {
  if (t === null || typeof t > "u" || Tc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ae(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  te[t] = new ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  te[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  te[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  te[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  te[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Qi = /[\-:]([a-z])/g;
function Ki(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Qi, Ki);
    te[t] = new ae(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Qi, Ki);
    te[t] = new ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Qi, Ki);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Yi(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Mc(t, n, l, r) && (n = null),
    r || l === null
      ? jc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ge = zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  or = Symbol.for("react.element"),
  It = Symbol.for("react.portal"),
  Ft = Symbol.for("react.fragment"),
  Xi = Symbol.for("react.strict_mode"),
  Zl = Symbol.for("react.profiler"),
  us = Symbol.for("react.provider"),
  ss = Symbol.for("react.context"),
  Gi = Symbol.for("react.forward_ref"),
  Jl = Symbol.for("react.suspense"),
  ql = Symbol.for("react.suspense_list"),
  Zi = Symbol.for("react.memo"),
  Je = Symbol.for("react.lazy"),
  as = Symbol.for("react.offscreen"),
  Vo = Symbol.iterator;
function fn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Vo && e[Vo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var H = Object.assign,
  Cl;
function wn(e) {
  if (Cl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Cl = (t && t[1]) || "";
    }
  return (
    `
` +
    Cl +
    e
  );
}
var _l = !1;
function Nl(e, t) {
  if (!e || _l) return "";
  _l = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (_l = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? wn(e) : "";
}
function Rc(e) {
  switch (e.tag) {
    case 5:
      return wn(e.type);
    case 16:
      return wn("Lazy");
    case 13:
      return wn("Suspense");
    case 19:
      return wn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Nl(e.type, !1)), e;
    case 11:
      return (e = Nl(e.type.render, !1)), e;
    case 1:
      return (e = Nl(e.type, !0)), e;
    default:
      return "";
  }
}
function bl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ft:
      return "Fragment";
    case It:
      return "Portal";
    case Zl:
      return "Profiler";
    case Xi:
      return "StrictMode";
    case Jl:
      return "Suspense";
    case ql:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ss:
        return (e.displayName || "Context") + ".Consumer";
      case us:
        return (e._context.displayName || "Context") + ".Provider";
      case Gi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Zi:
        return (
          (t = e.displayName || null), t !== null ? t : bl(e.type) || "Memo"
        );
      case Je:
        (t = e._payload), (e = e._init);
        try {
          return bl(e(t));
        } catch {}
    }
  return null;
}
function Dc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return bl(t);
    case 8:
      return t === Xi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ft(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function cs(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Oc(e) {
  var t = cs(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ur(e) {
  e._valueTracker || (e._valueTracker = Oc(e));
}
function fs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = cs(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Dr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ei(e, t) {
  var n = t.checked;
  return H({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ho(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ft(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ds(e, t) {
  (t = t.checked), t != null && Yi(e, "checked", t, !1);
}
function ti(e, t) {
  ds(e, t);
  var n = ft(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ni(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ni(e, t.type, ft(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Bo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ni(e, t, n) {
  (t !== "number" || Dr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Sn = Array.isArray;
function Xt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ft(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ri(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return H({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Wo(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (Sn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ft(n) };
}
function ps(e, t) {
  var n = ft(t.value),
    r = ft(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Qo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ms(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function li(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ms(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var sr,
  hs = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        sr = sr || document.createElement("div"),
          sr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = sr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Rn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var En = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ic = ["Webkit", "ms", "Moz", "O"];
Object.keys(En).forEach(function (e) {
  Ic.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (En[t] = En[e]);
  });
});
function vs(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (En.hasOwnProperty(e) && En[e])
    ? ("" + t).trim()
    : t + "px";
}
function ys(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = vs(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Fc = H(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ii(e, t) {
  if (t) {
    if (Fc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function oi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ui = null;
function Ji(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var si = null,
  Gt = null,
  Zt = null;
function Ko(e) {
  if ((e = bn(e))) {
    if (typeof si != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = al(t)), si(e.stateNode, e.type, t));
  }
}
function gs(e) {
  Gt ? (Zt ? Zt.push(e) : (Zt = [e])) : (Gt = e);
}
function ws() {
  if (Gt) {
    var e = Gt,
      t = Zt;
    if (((Zt = Gt = null), Ko(e), t)) for (e = 0; e < t.length; e++) Ko(t[e]);
  }
}
function Ss(e, t) {
  return e(t);
}
function ks() {}
var Pl = !1;
function xs(e, t, n) {
  if (Pl) return e(t, n);
  Pl = !0;
  try {
    return Ss(e, t, n);
  } finally {
    (Pl = !1), (Gt !== null || Zt !== null) && (ks(), ws());
  }
}
function Dn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = al(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var ai = !1;
if (Qe)
  try {
    var dn = {};
    Object.defineProperty(dn, "passive", {
      get: function () {
        ai = !0;
      },
    }),
      window.addEventListener("test", dn, dn),
      window.removeEventListener("test", dn, dn);
  } catch {
    ai = !1;
  }
function Uc(e, t, n, r, l, i, o, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var Cn = !1,
  Or = null,
  Ir = !1,
  ci = null,
  $c = {
    onError: function (e) {
      (Cn = !0), (Or = e);
    },
  };
function Ac(e, t, n, r, l, i, o, u, s) {
  (Cn = !1), (Or = null), Uc.apply($c, arguments);
}
function Vc(e, t, n, r, l, i, o, u, s) {
  if ((Ac.apply(this, arguments), Cn)) {
    if (Cn) {
      var c = Or;
      (Cn = !1), (Or = null);
    } else throw Error(y(198));
    Ir || ((Ir = !0), (ci = c));
  }
}
function Rt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Es(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Yo(e) {
  if (Rt(e) !== e) throw Error(y(188));
}
function Hc(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Rt(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Yo(l), e;
        if (i === r) return Yo(l), t;
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Cs(e) {
  return (e = Hc(e)), e !== null ? _s(e) : null;
}
function _s(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = _s(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ns = ge.unstable_scheduleCallback,
  Xo = ge.unstable_cancelCallback,
  Bc = ge.unstable_shouldYield,
  Wc = ge.unstable_requestPaint,
  K = ge.unstable_now,
  Qc = ge.unstable_getCurrentPriorityLevel,
  qi = ge.unstable_ImmediatePriority,
  Ps = ge.unstable_UserBlockingPriority,
  Fr = ge.unstable_NormalPriority,
  Kc = ge.unstable_LowPriority,
  zs = ge.unstable_IdlePriority,
  il = null,
  Ue = null;
function Yc(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == "function")
    try {
      Ue.onCommitFiberRoot(il, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Me = Math.clz32 ? Math.clz32 : Zc,
  Xc = Math.log,
  Gc = Math.LN2;
function Zc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Xc(e) / Gc) | 0)) | 0;
}
var ar = 64,
  cr = 4194304;
function kn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ur(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = kn(u)) : ((i &= o), i !== 0 && (r = kn(i)));
  } else (o = n & ~l), o !== 0 ? (r = kn(o)) : i !== 0 && (r = kn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Me(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Jc(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function qc(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Me(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & n) || u & r) && (l[o] = Jc(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function fi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ls() {
  var e = ar;
  return (ar <<= 1), !(ar & 4194240) && (ar = 64), e;
}
function zl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Jn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Me(t)),
    (e[t] = n);
}
function bc(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Me(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function bi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Me(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var R = 0;
function js(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ts,
  eo,
  Ms,
  Rs,
  Ds,
  di = !1,
  fr = [],
  rt = null,
  lt = null,
  it = null,
  On = new Map(),
  In = new Map(),
  be = [],
  ef =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Go(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      rt = null;
      break;
    case "dragenter":
    case "dragleave":
      lt = null;
      break;
    case "mouseover":
    case "mouseout":
      it = null;
      break;
    case "pointerover":
    case "pointerout":
      On.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      In.delete(t.pointerId);
  }
}
function pn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = bn(t)), t !== null && eo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function tf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (rt = pn(rt, e, t, n, r, l)), !0;
    case "dragenter":
      return (lt = pn(lt, e, t, n, r, l)), !0;
    case "mouseover":
      return (it = pn(it, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return On.set(i, pn(On.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), In.set(i, pn(In.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Os(e) {
  var t = xt(e.target);
  if (t !== null) {
    var n = Rt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Es(n)), t !== null)) {
          (e.blockedOn = t),
            Ds(e.priority, function () {
              Ms(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Cr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = pi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ui = r), n.target.dispatchEvent(r), (ui = null);
    } else return (t = bn(n)), t !== null && eo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Zo(e, t, n) {
  Cr(e) && n.delete(t);
}
function nf() {
  (di = !1),
    rt !== null && Cr(rt) && (rt = null),
    lt !== null && Cr(lt) && (lt = null),
    it !== null && Cr(it) && (it = null),
    On.forEach(Zo),
    In.forEach(Zo);
}
function mn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    di ||
      ((di = !0),
      ge.unstable_scheduleCallback(ge.unstable_NormalPriority, nf)));
}
function Fn(e) {
  function t(l) {
    return mn(l, e);
  }
  if (0 < fr.length) {
    mn(fr[0], e);
    for (var n = 1; n < fr.length; n++) {
      var r = fr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    rt !== null && mn(rt, e),
      lt !== null && mn(lt, e),
      it !== null && mn(it, e),
      On.forEach(t),
      In.forEach(t),
      n = 0;
    n < be.length;
    n++
  )
    (r = be[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < be.length && ((n = be[0]), n.blockedOn === null); )
    Os(n), n.blockedOn === null && be.shift();
}
var Jt = Ge.ReactCurrentBatchConfig,
  $r = !0;
function rf(e, t, n, r) {
  var l = R,
    i = Jt.transition;
  Jt.transition = null;
  try {
    (R = 1), to(e, t, n, r);
  } finally {
    (R = l), (Jt.transition = i);
  }
}
function lf(e, t, n, r) {
  var l = R,
    i = Jt.transition;
  Jt.transition = null;
  try {
    (R = 4), to(e, t, n, r);
  } finally {
    (R = l), (Jt.transition = i);
  }
}
function to(e, t, n, r) {
  if ($r) {
    var l = pi(e, t, n, r);
    if (l === null) Ul(e, t, r, Ar, n), Go(e, r);
    else if (tf(l, e, t, n, r)) r.stopPropagation();
    else if ((Go(e, r), t & 4 && -1 < ef.indexOf(e))) {
      for (; l !== null; ) {
        var i = bn(l);
        if (
          (i !== null && Ts(i),
          (i = pi(e, t, n, r)),
          i === null && Ul(e, t, r, Ar, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Ul(e, t, r, null, n);
  }
}
var Ar = null;
function pi(e, t, n, r) {
  if (((Ar = null), (e = Ji(r)), (e = xt(e)), e !== null))
    if (((t = Rt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Es(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ar = e), null;
}
function Is(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Qc()) {
        case qi:
          return 1;
        case Ps:
          return 4;
        case Fr:
        case Kc:
          return 16;
        case zs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tt = null,
  no = null,
  _r = null;
function Fs() {
  if (_r) return _r;
  var e,
    t = no,
    n = t.length,
    r,
    l = "value" in tt ? tt.value : tt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (_r = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Nr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function dr() {
  return !0;
}
function Jo() {
  return !1;
}
function Se(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? dr
        : Jo),
      (this.isPropagationStopped = Jo),
      this
    );
  }
  return (
    H(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = dr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = dr));
      },
      persist: function () {},
      isPersistent: dr,
    }),
    t
  );
}
var an = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ro = Se(an),
  qn = H({}, an, { view: 0, detail: 0 }),
  of = Se(qn),
  Ll,
  jl,
  hn,
  ol = H({}, qn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: lo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== hn &&
            (hn && e.type === "mousemove"
              ? ((Ll = e.screenX - hn.screenX), (jl = e.screenY - hn.screenY))
              : (jl = Ll = 0),
            (hn = e)),
          Ll);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : jl;
    },
  }),
  qo = Se(ol),
  uf = H({}, ol, { dataTransfer: 0 }),
  sf = Se(uf),
  af = H({}, qn, { relatedTarget: 0 }),
  Tl = Se(af),
  cf = H({}, an, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ff = Se(cf),
  df = H({}, an, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  pf = Se(df),
  mf = H({}, an, { data: 0 }),
  bo = Se(mf),
  hf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  vf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  yf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function gf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = yf[e]) ? !!t[e] : !1;
}
function lo() {
  return gf;
}
var wf = H({}, qn, {
    key: function (e) {
      if (e.key) {
        var t = hf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Nr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? vf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: lo,
    charCode: function (e) {
      return e.type === "keypress" ? Nr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Nr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Sf = Se(wf),
  kf = H({}, ol, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  eu = Se(kf),
  xf = H({}, qn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: lo,
  }),
  Ef = Se(xf),
  Cf = H({}, an, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _f = Se(Cf),
  Nf = H({}, ol, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Pf = Se(Nf),
  zf = [9, 13, 27, 32],
  io = Qe && "CompositionEvent" in window,
  _n = null;
Qe && "documentMode" in document && (_n = document.documentMode);
var Lf = Qe && "TextEvent" in window && !_n,
  Us = Qe && (!io || (_n && 8 < _n && 11 >= _n)),
  tu = " ",
  nu = !1;
function $s(e, t) {
  switch (e) {
    case "keyup":
      return zf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function As(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ut = !1;
function jf(e, t) {
  switch (e) {
    case "compositionend":
      return As(t);
    case "keypress":
      return t.which !== 32 ? null : ((nu = !0), tu);
    case "textInput":
      return (e = t.data), e === tu && nu ? null : e;
    default:
      return null;
  }
}
function Tf(e, t) {
  if (Ut)
    return e === "compositionend" || (!io && $s(e, t))
      ? ((e = Fs()), (_r = no = tt = null), (Ut = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Us && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Mf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ru(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Mf[e.type] : t === "textarea";
}
function Vs(e, t, n, r) {
  gs(r),
    (t = Vr(t, "onChange")),
    0 < t.length &&
      ((n = new ro("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Nn = null,
  Un = null;
function Rf(e) {
  qs(e, 0);
}
function ul(e) {
  var t = Vt(e);
  if (fs(t)) return e;
}
function Df(e, t) {
  if (e === "change") return t;
}
var Hs = !1;
if (Qe) {
  var Ml;
  if (Qe) {
    var Rl = "oninput" in document;
    if (!Rl) {
      var lu = document.createElement("div");
      lu.setAttribute("oninput", "return;"),
        (Rl = typeof lu.oninput == "function");
    }
    Ml = Rl;
  } else Ml = !1;
  Hs = Ml && (!document.documentMode || 9 < document.documentMode);
}
function iu() {
  Nn && (Nn.detachEvent("onpropertychange", Bs), (Un = Nn = null));
}
function Bs(e) {
  if (e.propertyName === "value" && ul(Un)) {
    var t = [];
    Vs(t, Un, e, Ji(e)), xs(Rf, t);
  }
}
function Of(e, t, n) {
  e === "focusin"
    ? (iu(), (Nn = t), (Un = n), Nn.attachEvent("onpropertychange", Bs))
    : e === "focusout" && iu();
}
function If(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ul(Un);
}
function Ff(e, t) {
  if (e === "click") return ul(t);
}
function Uf(e, t) {
  if (e === "input" || e === "change") return ul(t);
}
function $f(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var De = typeof Object.is == "function" ? Object.is : $f;
function $n(e, t) {
  if (De(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Gl.call(t, l) || !De(e[l], t[l])) return !1;
  }
  return !0;
}
function ou(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function uu(e, t) {
  var n = ou(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ou(n);
  }
}
function Ws(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ws(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Qs() {
  for (var e = window, t = Dr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Dr(e.document);
  }
  return t;
}
function oo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Af(e) {
  var t = Qs(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ws(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && oo(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = uu(n, i));
        var o = uu(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Vf = Qe && "documentMode" in document && 11 >= document.documentMode,
  $t = null,
  mi = null,
  Pn = null,
  hi = !1;
function su(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  hi ||
    $t == null ||
    $t !== Dr(r) ||
    ((r = $t),
    "selectionStart" in r && oo(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Pn && $n(Pn, r)) ||
      ((Pn = r),
      (r = Vr(mi, "onSelect")),
      0 < r.length &&
        ((t = new ro("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = $t))));
}
function pr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var At = {
    animationend: pr("Animation", "AnimationEnd"),
    animationiteration: pr("Animation", "AnimationIteration"),
    animationstart: pr("Animation", "AnimationStart"),
    transitionend: pr("Transition", "TransitionEnd"),
  },
  Dl = {},
  Ks = {};
Qe &&
  ((Ks = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete At.animationend.animation,
    delete At.animationiteration.animation,
    delete At.animationstart.animation),
  "TransitionEvent" in window || delete At.transitionend.transition);
function sl(e) {
  if (Dl[e]) return Dl[e];
  if (!At[e]) return e;
  var t = At[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ks) return (Dl[e] = t[n]);
  return e;
}
var Ys = sl("animationend"),
  Xs = sl("animationiteration"),
  Gs = sl("animationstart"),
  Zs = sl("transitionend"),
  Js = new Map(),
  au =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function pt(e, t) {
  Js.set(e, t), Mt(t, [e]);
}
for (var Ol = 0; Ol < au.length; Ol++) {
  var Il = au[Ol],
    Hf = Il.toLowerCase(),
    Bf = Il[0].toUpperCase() + Il.slice(1);
  pt(Hf, "on" + Bf);
}
pt(Ys, "onAnimationEnd");
pt(Xs, "onAnimationIteration");
pt(Gs, "onAnimationStart");
pt("dblclick", "onDoubleClick");
pt("focusin", "onFocus");
pt("focusout", "onBlur");
pt(Zs, "onTransitionEnd");
en("onMouseEnter", ["mouseout", "mouseover"]);
en("onMouseLeave", ["mouseout", "mouseover"]);
en("onPointerEnter", ["pointerout", "pointerover"]);
en("onPointerLeave", ["pointerout", "pointerover"]);
Mt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Mt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Mt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Mt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Mt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var xn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Wf = new Set("cancel close invalid load scroll toggle".split(" ").concat(xn));
function cu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Vc(r, t, void 0, e), (e.currentTarget = null);
}
function qs(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          cu(l, u, c), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          cu(l, u, c), (i = s);
        }
    }
  }
  if (Ir) throw ((e = ci), (Ir = !1), (ci = null), e);
}
function F(e, t) {
  var n = t[Si];
  n === void 0 && (n = t[Si] = new Set());
  var r = e + "__bubble";
  n.has(r) || (bs(t, e, 2, !1), n.add(r));
}
function Fl(e, t, n) {
  var r = 0;
  t && (r |= 4), bs(n, e, r, t);
}
var mr = "_reactListening" + Math.random().toString(36).slice(2);
function An(e) {
  if (!e[mr]) {
    (e[mr] = !0),
      os.forEach(function (n) {
        n !== "selectionchange" && (Wf.has(n) || Fl(n, !1, e), Fl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[mr] || ((t[mr] = !0), Fl("selectionchange", !1, t));
  }
}
function bs(e, t, n, r) {
  switch (Is(t)) {
    case 1:
      var l = rf;
      break;
    case 4:
      l = lf;
      break;
    default:
      l = to;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !ai ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Ul(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = xt(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  xs(function () {
    var c = i,
      h = Ji(n),
      m = [];
    e: {
      var p = Js.get(e);
      if (p !== void 0) {
        var g = ro,
          w = e;
        switch (e) {
          case "keypress":
            if (Nr(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Sf;
            break;
          case "focusin":
            (w = "focus"), (g = Tl);
            break;
          case "focusout":
            (w = "blur"), (g = Tl);
            break;
          case "beforeblur":
          case "afterblur":
            g = Tl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = qo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = sf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Ef;
            break;
          case Ys:
          case Xs:
          case Gs:
            g = ff;
            break;
          case Zs:
            g = _f;
            break;
          case "scroll":
            g = of;
            break;
          case "wheel":
            g = Pf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = pf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = eu;
        }
        var k = (t & 4) !== 0,
          D = !k && e === "scroll",
          f = k ? (p !== null ? p + "Capture" : null) : p;
        k = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (
            (d.tag === 5 &&
              v !== null &&
              ((d = v),
              f !== null && ((v = Dn(a, f)), v != null && k.push(Vn(a, v, d)))),
            D)
          )
            break;
          a = a.return;
        }
        0 < k.length &&
          ((p = new g(p, w, null, n, h)), m.push({ event: p, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          p &&
            n !== ui &&
            (w = n.relatedTarget || n.fromElement) &&
            (xt(w) || w[Ke]))
        )
          break e;
        if (
          (g || p) &&
          ((p =
            h.window === h
              ? h
              : (p = h.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          g
            ? ((w = n.relatedTarget || n.toElement),
              (g = c),
              (w = w ? xt(w) : null),
              w !== null &&
                ((D = Rt(w)), w !== D || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((g = null), (w = c)),
          g !== w)
        ) {
          if (
            ((k = qo),
            (v = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = eu),
              (v = "onPointerLeave"),
              (f = "onPointerEnter"),
              (a = "pointer")),
            (D = g == null ? p : Vt(g)),
            (d = w == null ? p : Vt(w)),
            (p = new k(v, a + "leave", g, n, h)),
            (p.target = D),
            (p.relatedTarget = d),
            (v = null),
            xt(h) === c &&
              ((k = new k(f, a + "enter", w, n, h)),
              (k.target = d),
              (k.relatedTarget = D),
              (v = k)),
            (D = v),
            g && w)
          )
            t: {
              for (k = g, f = w, a = 0, d = k; d; d = Dt(d)) a++;
              for (d = 0, v = f; v; v = Dt(v)) d++;
              for (; 0 < a - d; ) (k = Dt(k)), a--;
              for (; 0 < d - a; ) (f = Dt(f)), d--;
              for (; a--; ) {
                if (k === f || (f !== null && k === f.alternate)) break t;
                (k = Dt(k)), (f = Dt(f));
              }
              k = null;
            }
          else k = null;
          g !== null && fu(m, p, g, k, !1),
            w !== null && D !== null && fu(m, D, w, k, !0);
        }
      }
      e: {
        if (
          ((p = c ? Vt(c) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === "select" || (g === "input" && p.type === "file"))
        )
          var x = Df;
        else if (ru(p))
          if (Hs) x = Uf;
          else {
            x = If;
            var P = Of;
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (x = Ff);
        if (x && (x = x(e, c))) {
          Vs(m, x, n, h);
          break e;
        }
        P && P(e, p, c),
          e === "focusout" &&
            (P = p._wrapperState) &&
            P.controlled &&
            p.type === "number" &&
            ni(p, "number", p.value);
      }
      switch (((P = c ? Vt(c) : window), e)) {
        case "focusin":
          (ru(P) || P.contentEditable === "true") &&
            (($t = P), (mi = c), (Pn = null));
          break;
        case "focusout":
          Pn = mi = $t = null;
          break;
        case "mousedown":
          hi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (hi = !1), su(m, n, h);
          break;
        case "selectionchange":
          if (Vf) break;
        case "keydown":
        case "keyup":
          su(m, n, h);
      }
      var S;
      if (io)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        Ut
          ? $s(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (Us &&
          n.locale !== "ko" &&
          (Ut || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && Ut && (S = Fs())
            : ((tt = h),
              (no = "value" in tt ? tt.value : tt.textContent),
              (Ut = !0))),
        (P = Vr(c, _)),
        0 < P.length &&
          ((_ = new bo(_, e, null, n, h)),
          m.push({ event: _, listeners: P }),
          S ? (_.data = S) : ((S = As(n)), S !== null && (_.data = S)))),
        (S = Lf ? jf(e, n) : Tf(e, n)) &&
          ((c = Vr(c, "onBeforeInput")),
          0 < c.length &&
            ((h = new bo("onBeforeInput", "beforeinput", null, n, h)),
            m.push({ event: h, listeners: c }),
            (h.data = S)));
    }
    qs(m, t);
  });
}
function Vn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Vr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Dn(e, n)),
      i != null && r.unshift(Vn(e, i, l)),
      (i = Dn(e, t)),
      i != null && r.push(Vn(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Dt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function fu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = Dn(n, i)), s != null && o.unshift(Vn(n, s, u)))
        : l || ((s = Dn(n, i)), s != null && o.push(Vn(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Qf = /\r\n?/g,
  Kf = /\u0000|\uFFFD/g;
function du(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Qf,
      `
`
    )
    .replace(Kf, "");
}
function hr(e, t, n) {
  if (((t = du(t)), du(e) !== t && n)) throw Error(y(425));
}
function Hr() {}
var vi = null,
  yi = null;
function gi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var wi = typeof setTimeout == "function" ? setTimeout : void 0,
  Yf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  pu = typeof Promise == "function" ? Promise : void 0,
  Xf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof pu < "u"
      ? function (e) {
          return pu.resolve(null).then(e).catch(Gf);
        }
      : wi;
function Gf(e) {
  setTimeout(function () {
    throw e;
  });
}
function $l(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Fn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Fn(t);
}
function ot(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function mu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var cn = Math.random().toString(36).slice(2),
  Fe = "__reactFiber$" + cn,
  Hn = "__reactProps$" + cn,
  Ke = "__reactContainer$" + cn,
  Si = "__reactEvents$" + cn,
  Zf = "__reactListeners$" + cn,
  Jf = "__reactHandles$" + cn;
function xt(e) {
  var t = e[Fe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ke] || n[Fe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = mu(e); e !== null; ) {
          if ((n = e[Fe])) return n;
          e = mu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function bn(e) {
  return (
    (e = e[Fe] || e[Ke]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Vt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function al(e) {
  return e[Hn] || null;
}
var ki = [],
  Ht = -1;
function mt(e) {
  return { current: e };
}
function U(e) {
  0 > Ht || ((e.current = ki[Ht]), (ki[Ht] = null), Ht--);
}
function I(e, t) {
  Ht++, (ki[Ht] = e.current), (e.current = t);
}
var dt = {},
  ie = mt(dt),
  de = mt(!1),
  Pt = dt;
function tn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return dt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function pe(e) {
  return (e = e.childContextTypes), e != null;
}
function Br() {
  U(de), U(ie);
}
function hu(e, t, n) {
  if (ie.current !== dt) throw Error(y(168));
  I(ie, t), I(de, n);
}
function ea(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, Dc(e) || "Unknown", l));
  return H({}, n, r);
}
function Wr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || dt),
    (Pt = ie.current),
    I(ie, e),
    I(de, de.current),
    !0
  );
}
function vu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = ea(e, t, Pt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(de),
      U(ie),
      I(ie, e))
    : U(de),
    I(de, n);
}
var Ve = null,
  cl = !1,
  Al = !1;
function ta(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
function qf(e) {
  (cl = !0), ta(e);
}
function ht() {
  if (!Al && Ve !== null) {
    Al = !0;
    var e = 0,
      t = R;
    try {
      var n = Ve;
      for (R = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ve = null), (cl = !1);
    } catch (l) {
      throw (Ve !== null && (Ve = Ve.slice(e + 1)), Ns(qi, ht), l);
    } finally {
      (R = t), (Al = !1);
    }
  }
  return null;
}
var Bt = [],
  Wt = 0,
  Qr = null,
  Kr = 0,
  xe = [],
  Ee = 0,
  zt = null,
  He = 1,
  Be = "";
function St(e, t) {
  (Bt[Wt++] = Kr), (Bt[Wt++] = Qr), (Qr = e), (Kr = t);
}
function na(e, t, n) {
  (xe[Ee++] = He), (xe[Ee++] = Be), (xe[Ee++] = zt), (zt = e);
  var r = He;
  e = Be;
  var l = 32 - Me(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Me(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (He = (1 << (32 - Me(t) + l)) | (n << l) | r),
      (Be = i + e);
  } else (He = (1 << i) | (n << l) | r), (Be = e);
}
function uo(e) {
  e.return !== null && (St(e, 1), na(e, 1, 0));
}
function so(e) {
  for (; e === Qr; )
    (Qr = Bt[--Wt]), (Bt[Wt] = null), (Kr = Bt[--Wt]), (Bt[Wt] = null);
  for (; e === zt; )
    (zt = xe[--Ee]),
      (xe[Ee] = null),
      (Be = xe[--Ee]),
      (xe[Ee] = null),
      (He = xe[--Ee]),
      (xe[Ee] = null);
}
var ye = null,
  ve = null,
  $ = !1,
  Te = null;
function ra(e, t) {
  var n = Ce(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function yu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ye = e), (ve = ot(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ye = e), (ve = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = zt !== null ? { id: He, overflow: Be } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ce(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ye = e),
            (ve = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function xi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ei(e) {
  if ($) {
    var t = ve;
    if (t) {
      var n = t;
      if (!yu(e, t)) {
        if (xi(e)) throw Error(y(418));
        t = ot(n.nextSibling);
        var r = ye;
        t && yu(e, t)
          ? ra(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (ye = e));
      }
    } else {
      if (xi(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), ($ = !1), (ye = e);
    }
  }
}
function gu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ye = e;
}
function vr(e) {
  if (e !== ye) return !1;
  if (!$) return gu(e), ($ = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !gi(e.type, e.memoizedProps))),
    t && (t = ve))
  ) {
    if (xi(e)) throw (la(), Error(y(418)));
    for (; t; ) ra(e, t), (t = ot(t.nextSibling));
  }
  if ((gu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ve = ot(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ve = null;
    }
  } else ve = ye ? ot(e.stateNode.nextSibling) : null;
  return !0;
}
function la() {
  for (var e = ve; e; ) e = ot(e.nextSibling);
}
function nn() {
  (ve = ye = null), ($ = !1);
}
function ao(e) {
  Te === null ? (Te = [e]) : Te.push(e);
}
var bf = Ge.ReactCurrentBatchConfig;
function vn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function yr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function wu(e) {
  var t = e._init;
  return t(e._payload);
}
function ia(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = ct(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, v) {
    return a === null || a.tag !== 6
      ? ((a = Yl(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, v) {
    var x = d.type;
    return x === Ft
      ? h(f, a, d.props.children, v, d.key)
      : a !== null &&
        (a.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === Je &&
            wu(x) === a.type))
      ? ((v = l(a, d.props)), (v.ref = vn(f, a, d)), (v.return = f), v)
      : ((v = Rr(d.type, d.key, d.props, null, f.mode, v)),
        (v.ref = vn(f, a, d)),
        (v.return = f),
        v);
  }
  function c(f, a, d, v) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Xl(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function h(f, a, d, v, x) {
    return a === null || a.tag !== 7
      ? ((a = Nt(d, f.mode, v, x)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function m(f, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Yl("" + a, f.mode, d)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case or:
          return (
            (d = Rr(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = vn(f, null, a)),
            (d.return = f),
            d
          );
        case It:
          return (a = Xl(a, f.mode, d)), (a.return = f), a;
        case Je:
          var v = a._init;
          return m(f, v(a._payload), d);
      }
      if (Sn(a) || fn(a))
        return (a = Nt(a, f.mode, d, null)), (a.return = f), a;
      yr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var x = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return x !== null ? null : u(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case or:
          return d.key === x ? s(f, a, d, v) : null;
        case It:
          return d.key === x ? c(f, a, d, v) : null;
        case Je:
          return (x = d._init), p(f, a, x(d._payload), v);
      }
      if (Sn(d) || fn(d)) return x !== null ? null : h(f, a, d, v, null);
      yr(f, d);
    }
    return null;
  }
  function g(f, a, d, v, x) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (f = f.get(d) || null), u(a, f, "" + v, x);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case or:
          return (f = f.get(v.key === null ? d : v.key) || null), s(a, f, v, x);
        case It:
          return (f = f.get(v.key === null ? d : v.key) || null), c(a, f, v, x);
        case Je:
          var P = v._init;
          return g(f, a, d, P(v._payload), x);
      }
      if (Sn(v) || fn(v)) return (f = f.get(d) || null), h(a, f, v, x, null);
      yr(a, v);
    }
    return null;
  }
  function w(f, a, d, v) {
    for (
      var x = null, P = null, S = a, _ = (a = 0), O = null;
      S !== null && _ < d.length;
      _++
    ) {
      S.index > _ ? ((O = S), (S = null)) : (O = S.sibling);
      var L = p(f, S, d[_], v);
      if (L === null) {
        S === null && (S = O);
        break;
      }
      e && S && L.alternate === null && t(f, S),
        (a = i(L, a, _)),
        P === null ? (x = L) : (P.sibling = L),
        (P = L),
        (S = O);
    }
    if (_ === d.length) return n(f, S), $ && St(f, _), x;
    if (S === null) {
      for (; _ < d.length; _++)
        (S = m(f, d[_], v)),
          S !== null &&
            ((a = i(S, a, _)), P === null ? (x = S) : (P.sibling = S), (P = S));
      return $ && St(f, _), x;
    }
    for (S = r(f, S); _ < d.length; _++)
      (O = g(S, f, _, d[_], v)),
        O !== null &&
          (e && O.alternate !== null && S.delete(O.key === null ? _ : O.key),
          (a = i(O, a, _)),
          P === null ? (x = O) : (P.sibling = O),
          (P = O));
    return (
      e &&
        S.forEach(function (ke) {
          return t(f, ke);
        }),
      $ && St(f, _),
      x
    );
  }
  function k(f, a, d, v) {
    var x = fn(d);
    if (typeof x != "function") throw Error(y(150));
    if (((d = x.call(d)), d == null)) throw Error(y(151));
    for (
      var P = (x = null), S = a, _ = (a = 0), O = null, L = d.next();
      S !== null && !L.done;
      _++, L = d.next()
    ) {
      S.index > _ ? ((O = S), (S = null)) : (O = S.sibling);
      var ke = p(f, S, L.value, v);
      if (ke === null) {
        S === null && (S = O);
        break;
      }
      e && S && ke.alternate === null && t(f, S),
        (a = i(ke, a, _)),
        P === null ? (x = ke) : (P.sibling = ke),
        (P = ke),
        (S = O);
    }
    if (L.done) return n(f, S), $ && St(f, _), x;
    if (S === null) {
      for (; !L.done; _++, L = d.next())
        (L = m(f, L.value, v)),
          L !== null &&
            ((a = i(L, a, _)), P === null ? (x = L) : (P.sibling = L), (P = L));
      return $ && St(f, _), x;
    }
    for (S = r(f, S); !L.done; _++, L = d.next())
      (L = g(S, f, _, L.value, v)),
        L !== null &&
          (e && L.alternate !== null && S.delete(L.key === null ? _ : L.key),
          (a = i(L, a, _)),
          P === null ? (x = L) : (P.sibling = L),
          (P = L));
    return (
      e &&
        S.forEach(function (vt) {
          return t(f, vt);
        }),
      $ && St(f, _),
      x
    );
  }
  function D(f, a, d, v) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Ft &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case or:
          e: {
            for (var x = d.key, P = a; P !== null; ) {
              if (P.key === x) {
                if (((x = d.type), x === Ft)) {
                  if (P.tag === 7) {
                    n(f, P.sibling),
                      (a = l(P, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  P.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === Je &&
                    wu(x) === P.type)
                ) {
                  n(f, P.sibling),
                    (a = l(P, d.props)),
                    (a.ref = vn(f, P, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                n(f, P);
                break;
              } else t(f, P);
              P = P.sibling;
            }
            d.type === Ft
              ? ((a = Nt(d.props.children, f.mode, v, d.key)),
                (a.return = f),
                (f = a))
              : ((v = Rr(d.type, d.key, d.props, null, f.mode, v)),
                (v.ref = vn(f, a, d)),
                (v.return = f),
                (f = v));
          }
          return o(f);
        case It:
          e: {
            for (P = d.key; a !== null; ) {
              if (a.key === P)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  n(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else t(f, a);
              a = a.sibling;
            }
            (a = Xl(d, f.mode, v)), (a.return = f), (f = a);
          }
          return o(f);
        case Je:
          return (P = d._init), D(f, a, P(d._payload), v);
      }
      if (Sn(d)) return w(f, a, d, v);
      if (fn(d)) return k(f, a, d, v);
      yr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (n(f, a), (a = Yl(d, f.mode, v)), (a.return = f), (f = a)),
        o(f))
      : n(f, a);
  }
  return D;
}
var rn = ia(!0),
  oa = ia(!1),
  Yr = mt(null),
  Xr = null,
  Qt = null,
  co = null;
function fo() {
  co = Qt = Xr = null;
}
function po(e) {
  var t = Yr.current;
  U(Yr), (e._currentValue = t);
}
function Ci(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function qt(e, t) {
  (Xr = e),
    (co = Qt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (fe = !0), (e.firstContext = null));
}
function Ne(e) {
  var t = e._currentValue;
  if (co !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Qt === null)) {
      if (Xr === null) throw Error(y(308));
      (Qt = e), (Xr.dependencies = { lanes: 0, firstContext: e });
    } else Qt = Qt.next = e;
  return t;
}
var Et = null;
function mo(e) {
  Et === null ? (Et = [e]) : Et.push(e);
}
function ua(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), mo(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ye(e, r)
  );
}
function Ye(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var qe = !1;
function ho(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function sa(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function We(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ut(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ye(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), mo(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ye(e, n)
  );
}
function Pr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), bi(e, n);
  }
}
function Su(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Gr(e, t, n, r) {
  var l = e.updateQueue;
  qe = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), o === null ? (i = c) : (o.next = c), (o = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== o &&
        (u === null ? (h.firstBaseUpdate = c) : (u.next = c),
        (h.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var m = l.baseState;
    (o = 0), (h = c = s = null), (u = i);
    do {
      var p = u.lane,
        g = u.eventTime;
      if ((r & p) === p) {
        h !== null &&
          (h = h.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            k = u;
          switch (((p = t), (g = n), k.tag)) {
            case 1:
              if (((w = k.payload), typeof w == "function")) {
                m = w.call(g, m, p);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = k.payload),
                (p = typeof w == "function" ? w.call(g, m, p) : w),
                p == null)
              )
                break e;
              m = H({}, m, p);
              break e;
            case 2:
              qe = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (g = {
          eventTime: g,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((c = h = g), (s = m)) : (h = h.next = g),
          (o |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (jt |= o), (e.lanes = o), (e.memoizedState = m);
  }
}
function ku(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var er = {},
  $e = mt(er),
  Bn = mt(er),
  Wn = mt(er);
function Ct(e) {
  if (e === er) throw Error(y(174));
  return e;
}
function vo(e, t) {
  switch ((I(Wn, t), I(Bn, e), I($e, er), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : li(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = li(t, e));
  }
  U($e), I($e, t);
}
function ln() {
  U($e), U(Bn), U(Wn);
}
function aa(e) {
  Ct(Wn.current);
  var t = Ct($e.current),
    n = li(t, e.type);
  t !== n && (I(Bn, e), I($e, n));
}
function yo(e) {
  Bn.current === e && (U($e), U(Bn));
}
var A = mt(0);
function Zr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Vl = [];
function go() {
  for (var e = 0; e < Vl.length; e++)
    Vl[e]._workInProgressVersionPrimary = null;
  Vl.length = 0;
}
var zr = Ge.ReactCurrentDispatcher,
  Hl = Ge.ReactCurrentBatchConfig,
  Lt = 0,
  V = null,
  X = null,
  J = null,
  Jr = !1,
  zn = !1,
  Qn = 0,
  ed = 0;
function ne() {
  throw Error(y(321));
}
function wo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!De(e[n], t[n])) return !1;
  return !0;
}
function So(e, t, n, r, l, i) {
  if (
    ((Lt = i),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (zr.current = e === null || e.memoizedState === null ? ld : id),
    (e = n(r, l)),
    zn)
  ) {
    i = 0;
    do {
      if (((zn = !1), (Qn = 0), 25 <= i)) throw Error(y(301));
      (i += 1),
        (J = X = null),
        (t.updateQueue = null),
        (zr.current = od),
        (e = n(r, l));
    } while (zn);
  }
  if (
    ((zr.current = qr),
    (t = X !== null && X.next !== null),
    (Lt = 0),
    (J = X = V = null),
    (Jr = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function ko() {
  var e = Qn !== 0;
  return (Qn = 0), e;
}
function Ie() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return J === null ? (V.memoizedState = J = e) : (J = J.next = e), J;
}
function Pe() {
  if (X === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = J === null ? V.memoizedState : J.next;
  if (t !== null) (J = t), (X = e);
  else {
    if (e === null) throw Error(y(310));
    (X = e),
      (e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null,
      }),
      J === null ? (V.memoizedState = J = e) : (J = J.next = e);
  }
  return J;
}
function Kn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Bl(e) {
  var t = Pe(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = X,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      c = i;
    do {
      var h = c.lane;
      if ((Lt & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = m), (o = r)) : (s = s.next = m),
          (V.lanes |= h),
          (jt |= h);
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? (o = r) : (s.next = u),
      De(r, t.memoizedState) || (fe = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (V.lanes |= i), (jt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Wl(e) {
  var t = Pe(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    De(i, t.memoizedState) || (fe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function ca() {}
function fa(e, t) {
  var n = V,
    r = Pe(),
    l = t(),
    i = !De(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (fe = !0)),
    (r = r.queue),
    xo(ma.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (J !== null && J.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Yn(9, pa.bind(null, n, r, l, t), void 0, null),
      q === null)
    )
      throw Error(y(349));
    Lt & 30 || da(n, t, l);
  }
  return l;
}
function da(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function pa(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ha(t) && va(e);
}
function ma(e, t, n) {
  return n(function () {
    ha(t) && va(e);
  });
}
function ha(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !De(e, n);
  } catch {
    return !0;
  }
}
function va(e) {
  var t = Ye(e, 1);
  t !== null && Re(t, e, 1, -1);
}
function xu(e) {
  var t = Ie();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Kn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = rd.bind(null, V, e)),
    [t.memoizedState, e]
  );
}
function Yn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ya() {
  return Pe().memoizedState;
}
function Lr(e, t, n, r) {
  var l = Ie();
  (V.flags |= e),
    (l.memoizedState = Yn(1 | t, n, void 0, r === void 0 ? null : r));
}
function fl(e, t, n, r) {
  var l = Pe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (X !== null) {
    var o = X.memoizedState;
    if (((i = o.destroy), r !== null && wo(r, o.deps))) {
      l.memoizedState = Yn(t, n, i, r);
      return;
    }
  }
  (V.flags |= e), (l.memoizedState = Yn(1 | t, n, i, r));
}
function Eu(e, t) {
  return Lr(8390656, 8, e, t);
}
function xo(e, t) {
  return fl(2048, 8, e, t);
}
function ga(e, t) {
  return fl(4, 2, e, t);
}
function wa(e, t) {
  return fl(4, 4, e, t);
}
function Sa(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ka(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), fl(4, 4, Sa.bind(null, t, e), n)
  );
}
function Eo() {}
function xa(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ea(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ca(e, t, n) {
  return Lt & 21
    ? (De(n, t) || ((n = Ls()), (V.lanes |= n), (jt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (fe = !0)), (e.memoizedState = n));
}
function td(e, t) {
  var n = R;
  (R = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Hl.transition;
  Hl.transition = {};
  try {
    e(!1), t();
  } finally {
    (R = n), (Hl.transition = r);
  }
}
function _a() {
  return Pe().memoizedState;
}
function nd(e, t, n) {
  var r = at(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Na(e))
  )
    Pa(t, n);
  else if (((n = ua(e, t, n, r)), n !== null)) {
    var l = ue();
    Re(n, e, r, l), za(n, t, r);
  }
}
function rd(e, t, n) {
  var r = at(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Na(e)) Pa(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), De(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), mo(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = ua(e, t, l, r)),
      n !== null && ((l = ue()), Re(n, e, r, l), za(n, t, r));
  }
}
function Na(e) {
  var t = e.alternate;
  return e === V || (t !== null && t === V);
}
function Pa(e, t) {
  zn = Jr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function za(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), bi(e, n);
  }
}
var qr = {
    readContext: Ne,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1,
  },
  ld = {
    readContext: Ne,
    useCallback: function (e, t) {
      return (Ie().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ne,
    useEffect: Eu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Lr(4194308, 4, Sa.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Lr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Lr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ie();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ie();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = nd.bind(null, V, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ie();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: xu,
    useDebugValue: Eo,
    useDeferredValue: function (e) {
      return (Ie().memoizedState = e);
    },
    useTransition: function () {
      var e = xu(!1),
        t = e[0];
      return (e = td.bind(null, e[1])), (Ie().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = V,
        l = Ie();
      if ($) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), q === null)) throw Error(y(349));
        Lt & 30 || da(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Eu(ma.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Yn(9, pa.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ie(),
        t = q.identifierPrefix;
      if ($) {
        var n = Be,
          r = He;
        (n = (r & ~(1 << (32 - Me(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Qn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ed++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  id = {
    readContext: Ne,
    useCallback: xa,
    useContext: Ne,
    useEffect: xo,
    useImperativeHandle: ka,
    useInsertionEffect: ga,
    useLayoutEffect: wa,
    useMemo: Ea,
    useReducer: Bl,
    useRef: ya,
    useState: function () {
      return Bl(Kn);
    },
    useDebugValue: Eo,
    useDeferredValue: function (e) {
      var t = Pe();
      return Ca(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = Bl(Kn)[0],
        t = Pe().memoizedState;
      return [e, t];
    },
    useMutableSource: ca,
    useSyncExternalStore: fa,
    useId: _a,
    unstable_isNewReconciler: !1,
  },
  od = {
    readContext: Ne,
    useCallback: xa,
    useContext: Ne,
    useEffect: xo,
    useImperativeHandle: ka,
    useInsertionEffect: ga,
    useLayoutEffect: wa,
    useMemo: Ea,
    useReducer: Wl,
    useRef: ya,
    useState: function () {
      return Wl(Kn);
    },
    useDebugValue: Eo,
    useDeferredValue: function (e) {
      var t = Pe();
      return X === null ? (t.memoizedState = e) : Ca(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = Wl(Kn)[0],
        t = Pe().memoizedState;
      return [e, t];
    },
    useMutableSource: ca,
    useSyncExternalStore: fa,
    useId: _a,
    unstable_isNewReconciler: !1,
  };
function Le(e, t) {
  if (e && e.defaultProps) {
    (t = H({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function _i(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : H({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var dl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Rt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = at(e),
      i = We(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = ut(e, i, l)),
      t !== null && (Re(t, e, l, r), Pr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = at(e),
      i = We(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = ut(e, i, l)),
      t !== null && (Re(t, e, l, r), Pr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ue(),
      r = at(e),
      l = We(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ut(e, l, r)),
      t !== null && (Re(t, e, r, n), Pr(t, e, r));
  },
};
function Cu(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !$n(n, r) || !$n(l, i)
      : !0
  );
}
function La(e, t, n) {
  var r = !1,
    l = dt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ne(i))
      : ((l = pe(t) ? Pt : ie.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? tn(e, l) : dt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = dl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function _u(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && dl.enqueueReplaceState(t, t.state, null);
}
function Ni(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), ho(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Ne(i))
    : ((i = pe(t) ? Pt : ie.current), (l.context = tn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (_i(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && dl.enqueueReplaceState(l, l.state, null),
      Gr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function on(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Rc(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Ql(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Pi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var ud = typeof WeakMap == "function" ? WeakMap : Map;
function ja(e, t, n) {
  (n = We(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      el || ((el = !0), (Fi = r)), Pi(e, t);
    }),
    n
  );
}
function Ta(e, t, n) {
  (n = We(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Pi(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Pi(e, t),
          typeof r != "function" &&
            (st === null ? (st = new Set([this])) : st.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Nu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ud();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = kd.bind(null, e, t, n)), t.then(e, e));
}
function Pu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function zu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = We(-1, 1)), (t.tag = 2), ut(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var sd = Ge.ReactCurrentOwner,
  fe = !1;
function oe(e, t, n, r) {
  t.child = e === null ? oa(t, null, n, r) : rn(t, e.child, n, r);
}
function Lu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    qt(t, l),
    (r = So(e, t, n, r, i, l)),
    (n = ko()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : ($ && n && uo(t), (t.flags |= 1), oe(e, t, r, l), t.child)
  );
}
function ju(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !To(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Ma(e, t, i, r, l))
      : ((e = Rr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : $n), n(o, r) && e.ref === t.ref)
    )
      return Xe(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = ct(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ma(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if ($n(i, r) && e.ref === t.ref)
      if (((fe = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (fe = !0);
      else return (t.lanes = e.lanes), Xe(e, t, l);
  }
  return zi(e, t, n, r, l);
}
function Ra(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        I(Yt, he),
        (he |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          I(Yt, he),
          (he |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        I(Yt, he),
        (he |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      I(Yt, he),
      (he |= r);
  return oe(e, t, l, n), t.child;
}
function Da(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function zi(e, t, n, r, l) {
  var i = pe(n) ? Pt : ie.current;
  return (
    (i = tn(t, i)),
    qt(t, l),
    (n = So(e, t, n, r, i, l)),
    (r = ko()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : ($ && r && uo(t), (t.flags |= 1), oe(e, t, n, l), t.child)
  );
}
function Tu(e, t, n, r, l) {
  if (pe(n)) {
    var i = !0;
    Wr(t);
  } else i = !1;
  if ((qt(t, l), t.stateNode === null))
    jr(e, t), La(t, n, r), Ni(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ne(c))
      : ((c = pe(n) ? Pt : ie.current), (c = tn(t, c)));
    var h = n.getDerivedStateFromProps,
      m =
        typeof h == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== c) && _u(t, o, r, c)),
      (qe = !1);
    var p = t.memoizedState;
    (o.state = p),
      Gr(t, r, o, l),
      (s = t.memoizedState),
      u !== r || p !== s || de.current || qe
        ? (typeof h == "function" && (_i(t, n, h, r), (s = t.memoizedState)),
          (u = qe || Cu(t, n, u, r, p, s, c))
            ? (m ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = c),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      sa(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : Le(t.type, u)),
      (o.props = c),
      (m = t.pendingProps),
      (p = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Ne(s))
        : ((s = pe(n) ? Pt : ie.current), (s = tn(t, s)));
    var g = n.getDerivedStateFromProps;
    (h =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== m || p !== s) && _u(t, o, r, s)),
      (qe = !1),
      (p = t.memoizedState),
      (o.state = p),
      Gr(t, r, o, l);
    var w = t.memoizedState;
    u !== m || p !== w || de.current || qe
      ? (typeof g == "function" && (_i(t, n, g, r), (w = t.memoizedState)),
        (c = qe || Cu(t, n, c, r, p, w, s) || !1)
          ? (h ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, w, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, w, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (o.props = r),
        (o.state = w),
        (o.context = s),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Li(e, t, n, r, i, l);
}
function Li(e, t, n, r, l, i) {
  Da(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && vu(t, n, !1), Xe(e, t, i);
  (r = t.stateNode), (sd.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = rn(t, e.child, null, i)), (t.child = rn(t, null, u, i)))
      : oe(e, t, u, i),
    (t.memoizedState = r.state),
    l && vu(t, n, !0),
    t.child
  );
}
function Oa(e) {
  var t = e.stateNode;
  t.pendingContext
    ? hu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && hu(e, t.context, !1),
    vo(e, t.containerInfo);
}
function Mu(e, t, n, r, l) {
  return nn(), ao(l), (t.flags |= 256), oe(e, t, n, r), t.child;
}
var ji = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ti(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ia(e, t, n) {
  var r = t.pendingProps,
    l = A.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    I(A, l & 1),
    e === null)
  )
    return (
      Ei(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = hl(o, r, 0, null)),
              (e = Nt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ti(n)),
              (t.memoizedState = ji),
              e)
            : Co(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return ad(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = ct(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = ct(u, i)) : ((i = Nt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Ti(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ji),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = ct(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Co(e, t) {
  return (
    (t = hl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function gr(e, t, n, r) {
  return (
    r !== null && ao(r),
    rn(t, e.child, null, n),
    (e = Co(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ad(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ql(Error(y(422)))), gr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = hl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Nt(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && rn(t, e.child, null, o),
        (t.child.memoizedState = Ti(o)),
        (t.memoizedState = ji),
        i);
  if (!(t.mode & 1)) return gr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(y(419))), (r = Ql(i, r, void 0)), gr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), fe || u)) {
    if (((r = q), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Ye(e, l), Re(r, e, l, -1));
    }
    return jo(), (r = Ql(Error(y(421)))), gr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = xd.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ve = ot(l.nextSibling)),
      (ye = t),
      ($ = !0),
      (Te = null),
      e !== null &&
        ((xe[Ee++] = He),
        (xe[Ee++] = Be),
        (xe[Ee++] = zt),
        (He = e.id),
        (Be = e.overflow),
        (zt = t)),
      (t = Co(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ru(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ci(e.return, t, n);
}
function Kl(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Fa(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((oe(e, t, r.children, n), (r = A.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ru(e, n, t);
        else if (e.tag === 19) Ru(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((I(A, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Zr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Kl(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Zr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Kl(t, !0, n, null, i);
        break;
      case "together":
        Kl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function jr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Xe(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (jt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ct(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ct(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function cd(e, t, n) {
  switch (t.tag) {
    case 3:
      Oa(t), nn();
      break;
    case 5:
      aa(t);
      break;
    case 1:
      pe(t.type) && Wr(t);
      break;
    case 4:
      vo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      I(Yr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (I(A, A.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ia(e, t, n)
          : (I(A, A.current & 1),
            (e = Xe(e, t, n)),
            e !== null ? e.sibling : null);
      I(A, A.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Fa(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        I(A, A.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ra(e, t, n);
  }
  return Xe(e, t, n);
}
var Ua, Mi, $a, Aa;
Ua = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Mi = function () {};
$a = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Ct($e.current);
    var i = null;
    switch (n) {
      case "input":
        (l = ei(e, l)), (r = ei(e, r)), (i = []);
        break;
      case "select":
        (l = H({}, l, { value: void 0 })),
          (r = H({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = ri(e, l)), (r = ri(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Hr);
    }
    ii(n, r);
    var o;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Mn.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Mn.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && F("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(c, s));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Aa = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yn(e, t) {
  if (!$)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function fd(e, t, n) {
  var r = t.pendingProps;
  switch ((so(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return re(t), null;
    case 1:
      return pe(t.type) && Br(), re(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ln(),
        U(de),
        U(ie),
        go(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (vr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Te !== null && (Ai(Te), (Te = null)))),
        Mi(e, t),
        re(t),
        null
      );
    case 5:
      yo(t);
      var l = Ct(Wn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        $a(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return re(t), null;
        }
        if (((e = Ct($e.current)), vr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Fe] = t), (r[Hn] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              F("cancel", r), F("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              F("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < xn.length; l++) F(xn[l], r);
              break;
            case "source":
              F("error", r);
              break;
            case "img":
            case "image":
            case "link":
              F("error", r), F("load", r);
              break;
            case "details":
              F("toggle", r);
              break;
            case "input":
              Ho(r, i), F("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                F("invalid", r);
              break;
            case "textarea":
              Wo(r, i), F("invalid", r);
          }
          ii(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      hr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      hr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Mn.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  F("scroll", r);
            }
          switch (n) {
            case "input":
              ur(r), Bo(r, i, !0);
              break;
            case "textarea":
              ur(r), Qo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Hr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ms(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Fe] = t),
            (e[Hn] = r),
            Ua(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = oi(n, r)), n)) {
              case "dialog":
                F("cancel", e), F("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                F("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < xn.length; l++) F(xn[l], e);
                l = r;
                break;
              case "source":
                F("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                F("error", e), F("load", e), (l = r);
                break;
              case "details":
                F("toggle", e), (l = r);
                break;
              case "input":
                Ho(e, r), (l = ei(e, r)), F("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = H({}, r, { value: void 0 })),
                  F("invalid", e);
                break;
              case "textarea":
                Wo(e, r), (l = ri(e, r)), F("invalid", e);
                break;
              default:
                l = r;
            }
            ii(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? ys(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && hs(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Rn(e, s)
                    : typeof s == "number" && Rn(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Mn.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && F("scroll", e)
                      : s != null && Yi(e, i, s, o));
              }
            switch (n) {
              case "input":
                ur(e), Bo(e, r, !1);
                break;
              case "textarea":
                ur(e), Qo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ft(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Xt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Xt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Hr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return re(t), null;
    case 6:
      if (e && t.stateNode != null) Aa(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = Ct(Wn.current)), Ct($e.current), vr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Fe] = t),
            (i = r.nodeValue !== n) && ((e = ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                hr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  hr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Fe] = t),
            (t.stateNode = r);
      }
      return re(t), null;
    case 13:
      if (
        (U(A),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && ve !== null && t.mode & 1 && !(t.flags & 128))
          la(), nn(), (t.flags |= 98560), (i = !1);
        else if (((i = vr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(y(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(y(317));
            i[Fe] = t;
          } else
            nn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          re(t), (i = !1);
        } else Te !== null && (Ai(Te), (Te = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || A.current & 1 ? G === 0 && (G = 3) : jo())),
          t.updateQueue !== null && (t.flags |= 4),
          re(t),
          null);
    case 4:
      return (
        ln(), Mi(e, t), e === null && An(t.stateNode.containerInfo), re(t), null
      );
    case 10:
      return po(t.type._context), re(t), null;
    case 17:
      return pe(t.type) && Br(), re(t), null;
    case 19:
      if ((U(A), (i = t.memoizedState), i === null)) return re(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) yn(i, !1);
        else {
          if (G !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Zr(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    yn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return I(A, (A.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            K() > un &&
            ((t.flags |= 128), (r = !0), yn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Zr(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              yn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !$)
            )
              return re(t), null;
          } else
            2 * K() - i.renderingStartTime > un &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), yn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = K()),
          (t.sibling = null),
          (n = A.current),
          I(A, r ? (n & 1) | 2 : n & 1),
          t)
        : (re(t), null);
    case 22:
    case 23:
      return (
        Lo(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? he & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : re(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function dd(e, t) {
  switch ((so(t), t.tag)) {
    case 1:
      return (
        pe(t.type) && Br(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ln(),
        U(de),
        U(ie),
        go(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return yo(t), null;
    case 13:
      if ((U(A), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        nn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return U(A), null;
    case 4:
      return ln(), null;
    case 10:
      return po(t.type._context), null;
    case 22:
    case 23:
      return Lo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var wr = !1,
  le = !1,
  pd = typeof WeakSet == "function" ? WeakSet : Set,
  C = null;
function Kt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        B(e, t, r);
      }
    else n.current = null;
}
function Ri(e, t, n) {
  try {
    n();
  } catch (r) {
    B(e, t, r);
  }
}
var Du = !1;
function md(e, t) {
  if (((vi = $r), (e = Qs()), oo(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            c = 0,
            h = 0,
            m = e,
            p = null;
          t: for (;;) {
            for (
              var g;
              m !== n || (l !== 0 && m.nodeType !== 3) || (u = o + l),
                m !== i || (r !== 0 && m.nodeType !== 3) || (s = o + r),
                m.nodeType === 3 && (o += m.nodeValue.length),
                (g = m.firstChild) !== null;

            )
              (p = m), (m = g);
            for (;;) {
              if (m === e) break t;
              if (
                (p === n && ++c === l && (u = o),
                p === i && ++h === r && (s = o),
                (g = m.nextSibling) !== null)
              )
                break;
              (m = p), (p = m.parentNode);
            }
            m = g;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (yi = { focusedElem: e, selectionRange: n }, $r = !1, C = t; C !== null; )
    if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (C = e);
    else
      for (; C !== null; ) {
        t = C;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var k = w.memoizedProps,
                    D = w.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : Le(t.type, k),
                      D
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (v) {
          B(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (C = e);
          break;
        }
        C = t.return;
      }
  return (w = Du), (Du = !1), w;
}
function Ln(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Ri(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function pl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Di(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Va(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Va(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Fe], delete t[Hn], delete t[Si], delete t[Zf], delete t[Jf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ha(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ou(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ha(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Oi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Hr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Oi(e, t, n), e = e.sibling; e !== null; ) Oi(e, t, n), (e = e.sibling);
}
function Ii(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ii(e, t, n), e = e.sibling; e !== null; ) Ii(e, t, n), (e = e.sibling);
}
var b = null,
  je = !1;
function Ze(e, t, n) {
  for (n = n.child; n !== null; ) Ba(e, t, n), (n = n.sibling);
}
function Ba(e, t, n) {
  if (Ue && typeof Ue.onCommitFiberUnmount == "function")
    try {
      Ue.onCommitFiberUnmount(il, n);
    } catch {}
  switch (n.tag) {
    case 5:
      le || Kt(n, t);
    case 6:
      var r = b,
        l = je;
      (b = null),
        Ze(e, t, n),
        (b = r),
        (je = l),
        b !== null &&
          (je
            ? ((e = b),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : b.removeChild(n.stateNode));
      break;
    case 18:
      b !== null &&
        (je
          ? ((e = b),
            (n = n.stateNode),
            e.nodeType === 8
              ? $l(e.parentNode, n)
              : e.nodeType === 1 && $l(e, n),
            Fn(e))
          : $l(b, n.stateNode));
      break;
    case 4:
      (r = b),
        (l = je),
        (b = n.stateNode.containerInfo),
        (je = !0),
        Ze(e, t, n),
        (b = r),
        (je = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Ri(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Ze(e, t, n);
      break;
    case 1:
      if (
        !le &&
        (Kt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          B(n, t, u);
        }
      Ze(e, t, n);
      break;
    case 21:
      Ze(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((le = (r = le) || n.memoizedState !== null), Ze(e, t, n), (le = r))
        : Ze(e, t, n);
      break;
    default:
      Ze(e, t, n);
  }
}
function Iu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new pd()),
      t.forEach(function (r) {
        var l = Ed.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (b = u.stateNode), (je = !1);
              break e;
            case 3:
              (b = u.stateNode.containerInfo), (je = !0);
              break e;
            case 4:
              (b = u.stateNode.containerInfo), (je = !0);
              break e;
          }
          u = u.return;
        }
        if (b === null) throw Error(y(160));
        Ba(i, o, l), (b = null), (je = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        B(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Wa(t, e), (t = t.sibling);
}
function Wa(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ze(t, e), Oe(e), r & 4)) {
        try {
          Ln(3, e, e.return), pl(3, e);
        } catch (k) {
          B(e, e.return, k);
        }
        try {
          Ln(5, e, e.return);
        } catch (k) {
          B(e, e.return, k);
        }
      }
      break;
    case 1:
      ze(t, e), Oe(e), r & 512 && n !== null && Kt(n, n.return);
      break;
    case 5:
      if (
        (ze(t, e),
        Oe(e),
        r & 512 && n !== null && Kt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Rn(l, "");
        } catch (k) {
          B(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && ds(l, i),
              oi(u, o);
            var c = oi(u, i);
            for (o = 0; o < s.length; o += 2) {
              var h = s[o],
                m = s[o + 1];
              h === "style"
                ? ys(l, m)
                : h === "dangerouslySetInnerHTML"
                ? hs(l, m)
                : h === "children"
                ? Rn(l, m)
                : Yi(l, h, m, c);
            }
            switch (u) {
              case "input":
                ti(l, i);
                break;
              case "textarea":
                ps(l, i);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? Xt(l, !!i.multiple, g, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Xt(l, !!i.multiple, i.defaultValue, !0)
                      : Xt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Hn] = i;
          } catch (k) {
            B(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((ze(t, e), Oe(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (k) {
          B(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (ze(t, e), Oe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Fn(t.containerInfo);
        } catch (k) {
          B(e, e.return, k);
        }
      break;
    case 4:
      ze(t, e), Oe(e);
      break;
    case 13:
      ze(t, e),
        Oe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Po = K())),
        r & 4 && Iu(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((le = (c = le) || h), ze(t, e), (le = c)) : ze(t, e),
        Oe(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !h && e.mode & 1)
        )
          for (C = e, h = e.child; h !== null; ) {
            for (m = C = h; C !== null; ) {
              switch (((p = C), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ln(4, p, p.return);
                  break;
                case 1:
                  Kt(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (k) {
                      B(r, n, k);
                    }
                  }
                  break;
                case 5:
                  Kt(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Uu(m);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (C = g)) : Uu(m);
            }
            h = h.sibling;
          }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                (l = m.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = m.stateNode),
                      (s = m.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = vs("display", o)));
              } catch (k) {
                B(e, e.return, k);
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
              } catch (k) {
                B(e, e.return, k);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), (m = m.return);
          }
          h === m && (h = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      ze(t, e), Oe(e), r & 4 && Iu(e);
      break;
    case 21:
      break;
    default:
      ze(t, e), Oe(e);
  }
}
function Oe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ha(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Rn(l, ""), (r.flags &= -33));
          var i = Ou(e);
          Ii(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Ou(e);
          Oi(e, u, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      B(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function hd(e, t, n) {
  (C = e), Qa(e);
}
function Qa(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var l = C,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || wr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || le;
        u = wr;
        var c = le;
        if (((wr = o), (le = s) && !c))
          for (C = l; C !== null; )
            (o = C),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? $u(l)
                : s !== null
                ? ((s.return = o), (C = s))
                : $u(l);
        for (; i !== null; ) (C = i), Qa(i), (i = i.sibling);
        (C = l), (wr = u), (le = c);
      }
      Fu(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (C = i)) : Fu(e);
  }
}
function Fu(e) {
  for (; C !== null; ) {
    var t = C;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              le || pl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !le)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Le(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && ku(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ku(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var h = c.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && Fn(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        le || (t.flags & 512 && Di(t));
      } catch (p) {
        B(t, t.return, p);
      }
    }
    if (t === e) {
      C = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (C = n);
      break;
    }
    C = t.return;
  }
}
function Uu(e) {
  for (; C !== null; ) {
    var t = C;
    if (t === e) {
      C = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (C = n);
      break;
    }
    C = t.return;
  }
}
function $u(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            pl(4, t);
          } catch (s) {
            B(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              B(t, l, s);
            }
          }
          var i = t.return;
          try {
            Di(t);
          } catch (s) {
            B(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Di(t);
          } catch (s) {
            B(t, o, s);
          }
      }
    } catch (s) {
      B(t, t.return, s);
    }
    if (t === e) {
      C = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (C = u);
      break;
    }
    C = t.return;
  }
}
var vd = Math.ceil,
  br = Ge.ReactCurrentDispatcher,
  _o = Ge.ReactCurrentOwner,
  _e = Ge.ReactCurrentBatchConfig,
  M = 0,
  q = null,
  Y = null,
  ee = 0,
  he = 0,
  Yt = mt(0),
  G = 0,
  Xn = null,
  jt = 0,
  ml = 0,
  No = 0,
  jn = null,
  ce = null,
  Po = 0,
  un = 1 / 0,
  Ae = null,
  el = !1,
  Fi = null,
  st = null,
  Sr = !1,
  nt = null,
  tl = 0,
  Tn = 0,
  Ui = null,
  Tr = -1,
  Mr = 0;
function ue() {
  return M & 6 ? K() : Tr !== -1 ? Tr : (Tr = K());
}
function at(e) {
  return e.mode & 1
    ? M & 2 && ee !== 0
      ? ee & -ee
      : bf.transition !== null
      ? (Mr === 0 && (Mr = Ls()), Mr)
      : ((e = R),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Is(e.type))),
        e)
    : 1;
}
function Re(e, t, n, r) {
  if (50 < Tn) throw ((Tn = 0), (Ui = null), Error(y(185)));
  Jn(e, n, r),
    (!(M & 2) || e !== q) &&
      (e === q && (!(M & 2) && (ml |= n), G === 4 && et(e, ee)),
      me(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((un = K() + 500), cl && ht()));
}
function me(e, t) {
  var n = e.callbackNode;
  qc(e, t);
  var r = Ur(e, e === q ? ee : 0);
  if (r === 0)
    n !== null && Xo(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Xo(n), t === 1))
      e.tag === 0 ? qf(Au.bind(null, e)) : ta(Au.bind(null, e)),
        Xf(function () {
          !(M & 6) && ht();
        }),
        (n = null);
    else {
      switch (js(r)) {
        case 1:
          n = qi;
          break;
        case 4:
          n = Ps;
          break;
        case 16:
          n = Fr;
          break;
        case 536870912:
          n = zs;
          break;
        default:
          n = Fr;
      }
      n = ba(n, Ka.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ka(e, t) {
  if (((Tr = -1), (Mr = 0), M & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (bt() && e.callbackNode !== n) return null;
  var r = Ur(e, e === q ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = nl(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var i = Xa();
    (q !== e || ee !== t) && ((Ae = null), (un = K() + 500), _t(e, t));
    do
      try {
        wd();
        break;
      } catch (u) {
        Ya(e, u);
      }
    while (!0);
    fo(),
      (br.current = i),
      (M = l),
      Y !== null ? (t = 0) : ((q = null), (ee = 0), (t = G));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = fi(e)), l !== 0 && ((r = l), (t = $i(e, l)))), t === 1)
    )
      throw ((n = Xn), _t(e, 0), et(e, r), me(e, K()), n);
    if (t === 6) et(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !yd(l) &&
          ((t = nl(e, r)),
          t === 2 && ((i = fi(e)), i !== 0 && ((r = i), (t = $i(e, i)))),
          t === 1))
      )
        throw ((n = Xn), _t(e, 0), et(e, r), me(e, K()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          kt(e, ce, Ae);
          break;
        case 3:
          if (
            (et(e, r), (r & 130023424) === r && ((t = Po + 500 - K()), 10 < t))
          ) {
            if (Ur(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ue(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = wi(kt.bind(null, e, ce, Ae), t);
            break;
          }
          kt(e, ce, Ae);
          break;
        case 4:
          if ((et(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Me(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = K() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * vd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = wi(kt.bind(null, e, ce, Ae), r);
            break;
          }
          kt(e, ce, Ae);
          break;
        case 5:
          kt(e, ce, Ae);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return me(e, K()), e.callbackNode === n ? Ka.bind(null, e) : null;
}
function $i(e, t) {
  var n = jn;
  return (
    e.current.memoizedState.isDehydrated && (_t(e, t).flags |= 256),
    (e = nl(e, t)),
    e !== 2 && ((t = ce), (ce = n), t !== null && Ai(t)),
    e
  );
}
function Ai(e) {
  ce === null ? (ce = e) : ce.push.apply(ce, e);
}
function yd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!De(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function et(e, t) {
  for (
    t &= ~No,
      t &= ~ml,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Me(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Au(e) {
  if (M & 6) throw Error(y(327));
  bt();
  var t = Ur(e, 0);
  if (!(t & 1)) return me(e, K()), null;
  var n = nl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = fi(e);
    r !== 0 && ((t = r), (n = $i(e, r)));
  }
  if (n === 1) throw ((n = Xn), _t(e, 0), et(e, t), me(e, K()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    kt(e, ce, Ae),
    me(e, K()),
    null
  );
}
function zo(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((un = K() + 500), cl && ht());
  }
}
function Tt(e) {
  nt !== null && nt.tag === 0 && !(M & 6) && bt();
  var t = M;
  M |= 1;
  var n = _e.transition,
    r = R;
  try {
    if (((_e.transition = null), (R = 1), e)) return e();
  } finally {
    (R = r), (_e.transition = n), (M = t), !(M & 6) && ht();
  }
}
function Lo() {
  (he = Yt.current), U(Yt);
}
function _t(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Yf(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((so(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Br();
          break;
        case 3:
          ln(), U(de), U(ie), go();
          break;
        case 5:
          yo(r);
          break;
        case 4:
          ln();
          break;
        case 13:
          U(A);
          break;
        case 19:
          U(A);
          break;
        case 10:
          po(r.type._context);
          break;
        case 22:
        case 23:
          Lo();
      }
      n = n.return;
    }
  if (
    ((q = e),
    (Y = e = ct(e.current, null)),
    (ee = he = t),
    (G = 0),
    (Xn = null),
    (No = ml = jt = 0),
    (ce = jn = null),
    Et !== null)
  ) {
    for (t = 0; t < Et.length; t++)
      if (((n = Et[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Et = null;
  }
  return e;
}
function Ya(e, t) {
  do {
    var n = Y;
    try {
      if ((fo(), (zr.current = qr), Jr)) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Jr = !1;
      }
      if (
        ((Lt = 0),
        (J = X = V = null),
        (zn = !1),
        (Qn = 0),
        (_o.current = null),
        n === null || n.return === null)
      ) {
        (G = 1), (Xn = t), (Y = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = ee),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            h = u,
            m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p
              ? ((h.updateQueue = p.updateQueue),
                (h.memoizedState = p.memoizedState),
                (h.lanes = p.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var g = Pu(o);
          if (g !== null) {
            (g.flags &= -257),
              zu(g, o, u, i, t),
              g.mode & 1 && Nu(i, c, t),
              (t = g),
              (s = c);
            var w = t.updateQueue;
            if (w === null) {
              var k = new Set();
              k.add(s), (t.updateQueue = k);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Nu(i, c, t), jo();
              break e;
            }
            s = Error(y(426));
          }
        } else if ($ && u.mode & 1) {
          var D = Pu(o);
          if (D !== null) {
            !(D.flags & 65536) && (D.flags |= 256),
              zu(D, o, u, i, t),
              ao(on(s, u));
            break e;
          }
        }
        (i = s = on(s, u)),
          G !== 4 && (G = 2),
          jn === null ? (jn = [i]) : jn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = ja(i, s, t);
              Su(i, f);
              break e;
            case 1:
              u = s;
              var a = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (st === null || !st.has(d))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var v = Ta(i, u, t);
                Su(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Za(n);
    } catch (x) {
      (t = x), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Xa() {
  var e = br.current;
  return (br.current = qr), e === null ? qr : e;
}
function jo() {
  (G === 0 || G === 3 || G === 2) && (G = 4),
    q === null || (!(jt & 268435455) && !(ml & 268435455)) || et(q, ee);
}
function nl(e, t) {
  var n = M;
  M |= 2;
  var r = Xa();
  (q !== e || ee !== t) && ((Ae = null), _t(e, t));
  do
    try {
      gd();
      break;
    } catch (l) {
      Ya(e, l);
    }
  while (!0);
  if ((fo(), (M = n), (br.current = r), Y !== null)) throw Error(y(261));
  return (q = null), (ee = 0), G;
}
function gd() {
  for (; Y !== null; ) Ga(Y);
}
function wd() {
  for (; Y !== null && !Bc(); ) Ga(Y);
}
function Ga(e) {
  var t = qa(e.alternate, e, he);
  (e.memoizedProps = e.pendingProps),
    t === null ? Za(e) : (Y = t),
    (_o.current = null);
}
function Za(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = dd(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (G = 6), (Y = null);
        return;
      }
    } else if (((n = fd(n, t, he)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  G === 0 && (G = 5);
}
function kt(e, t, n) {
  var r = R,
    l = _e.transition;
  try {
    (_e.transition = null), (R = 1), Sd(e, t, n, r);
  } finally {
    (_e.transition = l), (R = r);
  }
  return null;
}
function Sd(e, t, n, r) {
  do bt();
  while (nt !== null);
  if (M & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (bc(e, i),
    e === q && ((Y = q = null), (ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Sr ||
      ((Sr = !0),
      ba(Fr, function () {
        return bt(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = _e.transition), (_e.transition = null);
    var o = R;
    R = 1;
    var u = M;
    (M |= 4),
      (_o.current = null),
      md(e, n),
      Wa(n, e),
      Af(yi),
      ($r = !!vi),
      (yi = vi = null),
      (e.current = n),
      hd(n),
      Wc(),
      (M = u),
      (R = o),
      (_e.transition = i);
  } else e.current = n;
  if (
    (Sr && ((Sr = !1), (nt = e), (tl = l)),
    (i = e.pendingLanes),
    i === 0 && (st = null),
    Yc(n.stateNode),
    me(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (el) throw ((el = !1), (e = Fi), (Fi = null), e);
  return (
    tl & 1 && e.tag !== 0 && bt(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ui ? Tn++ : ((Tn = 0), (Ui = e))) : (Tn = 0),
    ht(),
    null
  );
}
function bt() {
  if (nt !== null) {
    var e = js(tl),
      t = _e.transition,
      n = R;
    try {
      if (((_e.transition = null), (R = 16 > e ? 16 : e), nt === null))
        var r = !1;
      else {
        if (((e = nt), (nt = null), (tl = 0), M & 6)) throw Error(y(331));
        var l = M;
        for (M |= 4, C = e.current; C !== null; ) {
          var i = C,
            o = i.child;
          if (C.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (C = c; C !== null; ) {
                  var h = C;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ln(8, h, i);
                  }
                  var m = h.child;
                  if (m !== null) (m.return = h), (C = m);
                  else
                    for (; C !== null; ) {
                      h = C;
                      var p = h.sibling,
                        g = h.return;
                      if ((Va(h), h === c)) {
                        C = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = g), (C = p);
                        break;
                      }
                      C = g;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var D = k.sibling;
                    (k.sibling = null), (k = D);
                  } while (k !== null);
                }
              }
              C = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (C = o);
          else
            e: for (; C !== null; ) {
              if (((i = C), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ln(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (C = f);
                break e;
              }
              C = i.return;
            }
        }
        var a = e.current;
        for (C = a; C !== null; ) {
          o = C;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (C = d);
          else
            e: for (o = a; C !== null; ) {
              if (((u = C), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pl(9, u);
                  }
                } catch (x) {
                  B(u, u.return, x);
                }
              if (u === o) {
                C = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (C = v);
                break e;
              }
              C = u.return;
            }
        }
        if (
          ((M = l), ht(), Ue && typeof Ue.onPostCommitFiberRoot == "function")
        )
          try {
            Ue.onPostCommitFiberRoot(il, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (R = n), (_e.transition = t);
    }
  }
  return !1;
}
function Vu(e, t, n) {
  (t = on(n, t)),
    (t = ja(e, t, 1)),
    (e = ut(e, t, 1)),
    (t = ue()),
    e !== null && (Jn(e, 1, t), me(e, t));
}
function B(e, t, n) {
  if (e.tag === 3) Vu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Vu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (st === null || !st.has(r)))
        ) {
          (e = on(n, e)),
            (e = Ta(t, e, 1)),
            (t = ut(t, e, 1)),
            (e = ue()),
            t !== null && (Jn(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function kd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    q === e &&
      (ee & n) === n &&
      (G === 4 || (G === 3 && (ee & 130023424) === ee && 500 > K() - Po)
        ? _t(e, 0)
        : (No |= n)),
    me(e, t);
}
function Ja(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = cr), (cr <<= 1), !(cr & 130023424) && (cr = 4194304))
      : (t = 1));
  var n = ue();
  (e = Ye(e, t)), e !== null && (Jn(e, t, n), me(e, n));
}
function xd(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ja(e, n);
}
function Ed(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), Ja(e, n);
}
var qa;
qa = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || de.current) fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (fe = !1), cd(e, t, n);
      fe = !!(e.flags & 131072);
    }
  else (fe = !1), $ && t.flags & 1048576 && na(t, Kr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      jr(e, t), (e = t.pendingProps);
      var l = tn(t, ie.current);
      qt(t, n), (l = So(null, t, r, e, l, n));
      var i = ko();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            pe(r) ? ((i = !0), Wr(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            ho(t),
            (l.updater = dl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ni(t, r, e, n),
            (t = Li(null, t, r, !0, i, n)))
          : ((t.tag = 0), $ && i && uo(t), oe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (jr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = _d(r)),
          (e = Le(r, e)),
          l)
        ) {
          case 0:
            t = zi(null, t, r, e, n);
            break e;
          case 1:
            t = Tu(null, t, r, e, n);
            break e;
          case 11:
            t = Lu(null, t, r, e, n);
            break e;
          case 14:
            t = ju(null, t, r, Le(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        zi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Tu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Oa(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          sa(e, t),
          Gr(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = on(Error(y(423)), t)), (t = Mu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = on(Error(y(424)), t)), (t = Mu(e, t, r, n, l));
            break e;
          } else
            for (
              ve = ot(t.stateNode.containerInfo.firstChild),
                ye = t,
                $ = !0,
                Te = null,
                n = oa(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((nn(), r === l)) {
            t = Xe(e, t, n);
            break e;
          }
          oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        aa(t),
        e === null && Ei(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        gi(r, l) ? (o = null) : i !== null && gi(r, i) && (t.flags |= 32),
        Da(e, t),
        oe(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Ei(t), null;
    case 13:
      return Ia(e, t, n);
    case 4:
      return (
        vo(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = rn(t, null, r, n)) : oe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Lu(e, t, r, l, n)
      );
    case 7:
      return oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          I(Yr, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (De(i.value, o)) {
            if (i.children === l.children && !de.current) {
              t = Xe(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = We(-1, n & -n)), (s.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (c.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Ci(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(y(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  Ci(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        oe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        qt(t, n),
        (l = Ne(l)),
        (r = r(l)),
        (t.flags |= 1),
        oe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Le(r, t.pendingProps)),
        (l = Le(r.type, l)),
        ju(e, t, r, l, n)
      );
    case 15:
      return Ma(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        jr(e, t),
        (t.tag = 1),
        pe(r) ? ((e = !0), Wr(t)) : (e = !1),
        qt(t, n),
        La(t, r, l),
        Ni(t, r, l, n),
        Li(null, t, r, !0, e, n)
      );
    case 19:
      return Fa(e, t, n);
    case 22:
      return Ra(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function ba(e, t) {
  return Ns(e, t);
}
function Cd(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ce(e, t, n, r) {
  return new Cd(e, t, n, r);
}
function To(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function _d(e) {
  if (typeof e == "function") return To(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Gi)) return 11;
    if (e === Zi) return 14;
  }
  return 2;
}
function ct(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ce(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Rr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) To(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Ft:
        return Nt(n.children, l, i, t);
      case Xi:
        (o = 8), (l |= 8);
        break;
      case Zl:
        return (
          (e = Ce(12, n, t, l | 2)), (e.elementType = Zl), (e.lanes = i), e
        );
      case Jl:
        return (e = Ce(13, n, t, l)), (e.elementType = Jl), (e.lanes = i), e;
      case ql:
        return (e = Ce(19, n, t, l)), (e.elementType = ql), (e.lanes = i), e;
      case as:
        return hl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case us:
              o = 10;
              break e;
            case ss:
              o = 9;
              break e;
            case Gi:
              o = 11;
              break e;
            case Zi:
              o = 14;
              break e;
            case Je:
              (o = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ce(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Nt(e, t, n, r) {
  return (e = Ce(7, e, r, t)), (e.lanes = n), e;
}
function hl(e, t, n, r) {
  return (
    (e = Ce(22, e, r, t)),
    (e.elementType = as),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Yl(e, t, n) {
  return (e = Ce(6, e, null, t)), (e.lanes = n), e;
}
function Xl(e, t, n) {
  return (
    (t = Ce(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Nd(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = zl(0)),
    (this.expirationTimes = zl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = zl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Mo(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new Nd(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ce(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ho(i),
    e
  );
}
function Pd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: It,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ec(e) {
  if (!e) return dt;
  e = e._reactInternals;
  e: {
    if (Rt(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (pe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (pe(n)) return ea(e, n, t);
  }
  return t;
}
function tc(e, t, n, r, l, i, o, u, s) {
  return (
    (e = Mo(n, r, !0, e, l, i, o, u, s)),
    (e.context = ec(null)),
    (n = e.current),
    (r = ue()),
    (l = at(n)),
    (i = We(r, l)),
    (i.callback = t ?? null),
    ut(n, i, l),
    (e.current.lanes = l),
    Jn(e, l, r),
    me(e, r),
    e
  );
}
function vl(e, t, n, r) {
  var l = t.current,
    i = ue(),
    o = at(l);
  return (
    (n = ec(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = We(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ut(l, t, o)),
    e !== null && (Re(e, l, o, i), Pr(e, l, o)),
    o
  );
}
function rl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Hu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ro(e, t) {
  Hu(e, t), (e = e.alternate) && Hu(e, t);
}
function zd() {
  return null;
}
var nc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Do(e) {
  this._internalRoot = e;
}
yl.prototype.render = Do.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  vl(e, t, null, null);
};
yl.prototype.unmount = Do.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Tt(function () {
      vl(null, e, null, null);
    }),
      (t[Ke] = null);
  }
};
function yl(e) {
  this._internalRoot = e;
}
yl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Rs();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < be.length && t !== 0 && t < be[n].priority; n++);
    be.splice(n, 0, e), n === 0 && Os(e);
  }
};
function Oo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function gl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Bu() {}
function Ld(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = rl(o);
        i.call(c);
      };
    }
    var o = tc(t, r, e, 0, null, !1, !1, "", Bu);
    return (
      (e._reactRootContainer = o),
      (e[Ke] = o.current),
      An(e.nodeType === 8 ? e.parentNode : e),
      Tt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = rl(s);
      u.call(c);
    };
  }
  var s = Mo(e, 0, !1, null, null, !1, !1, "", Bu);
  return (
    (e._reactRootContainer = s),
    (e[Ke] = s.current),
    An(e.nodeType === 8 ? e.parentNode : e),
    Tt(function () {
      vl(t, s, n, r);
    }),
    s
  );
}
function wl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = rl(o);
        u.call(s);
      };
    }
    vl(t, o, e, l);
  } else o = Ld(n, t, e, l, r);
  return rl(o);
}
Ts = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = kn(t.pendingLanes);
        n !== 0 &&
          (bi(t, n | 1), me(t, K()), !(M & 6) && ((un = K() + 500), ht()));
      }
      break;
    case 13:
      Tt(function () {
        var r = Ye(e, 1);
        if (r !== null) {
          var l = ue();
          Re(r, e, 1, l);
        }
      }),
        Ro(e, 1);
  }
};
eo = function (e) {
  if (e.tag === 13) {
    var t = Ye(e, 134217728);
    if (t !== null) {
      var n = ue();
      Re(t, e, 134217728, n);
    }
    Ro(e, 134217728);
  }
};
Ms = function (e) {
  if (e.tag === 13) {
    var t = at(e),
      n = Ye(e, t);
    if (n !== null) {
      var r = ue();
      Re(n, e, t, r);
    }
    Ro(e, t);
  }
};
Rs = function () {
  return R;
};
Ds = function (e, t) {
  var n = R;
  try {
    return (R = e), t();
  } finally {
    R = n;
  }
};
si = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ti(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = al(r);
            if (!l) throw Error(y(90));
            fs(r), ti(r, l);
          }
        }
      }
      break;
    case "textarea":
      ps(e, n);
      break;
    case "select":
      (t = n.value), t != null && Xt(e, !!n.multiple, t, !1);
  }
};
Ss = zo;
ks = Tt;
var jd = { usingClientEntryPoint: !1, Events: [bn, Vt, al, gs, ws, zo] },
  gn = {
    findFiberByHostInstance: xt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Td = {
    bundleType: gn.bundleType,
    version: gn.version,
    rendererPackageName: gn.rendererPackageName,
    rendererConfig: gn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ge.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Cs(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: gn.findFiberByHostInstance || zd,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var kr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!kr.isDisabled && kr.supportsFiber)
    try {
      (il = kr.inject(Td)), (Ue = kr);
    } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jd;
we.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Oo(t)) throw Error(y(200));
  return Pd(e, t, null, n);
};
we.createRoot = function (e, t) {
  if (!Oo(e)) throw Error(y(299));
  var n = !1,
    r = "",
    l = nc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Mo(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ke] = t.current),
    An(e.nodeType === 8 ? e.parentNode : e),
    new Do(t)
  );
};
we.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = Cs(t)), (e = e === null ? null : e.stateNode), e;
};
we.flushSync = function (e) {
  return Tt(e);
};
we.hydrate = function (e, t, n) {
  if (!gl(t)) throw Error(y(200));
  return wl(null, e, t, !0, n);
};
we.hydrateRoot = function (e, t, n) {
  if (!Oo(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = nc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = tc(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Ke] = t.current),
    An(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new yl(t);
};
we.render = function (e, t, n) {
  if (!gl(t)) throw Error(y(200));
  return wl(null, e, t, !1, n);
};
we.unmountComponentAtNode = function (e) {
  if (!gl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Tt(function () {
        wl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ke] = null);
        });
      }),
      !0)
    : !1;
};
we.unstable_batchedUpdates = zo;
we.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!gl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return wl(e, t, n, !1, r);
};
we.version = "18.3.1-next-f1338f8080-20240426";
function rc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rc);
    } catch (e) {
      console.error(e);
    }
}
rc(), (rs.exports = we);
var Md = rs.exports,
  lc,
  Wu = Md;
(lc = Wu.createRoot), Wu.hydrateRoot;
const Ot = [
    "https://gameranx.com/wp-content/uploads/2019/08/Ori-and-the-Will-of-the-Wisps-4K-Wallpaper-3.jpg",
    "https://images.wallpaperscraft.com/image/single/camera_lens_strap_144511_3840x2160.jpg",
    "https://wallpapercat.com/w/full/8/3/2/2127835-3840x2160-desktop-4k-internet-background.jpg",
    "https://wallpapercat.com/w/full/2/d/8/742839-3840x2160-desktop-4k-hourglass-wallpaper-photo.jpg",
    "https://images.wallpaperscraft.com/image/single/hand_tablet_drawing_116199_3840x2160.jpg",
  ],
  Qu = [
    "Unity 2D Story Platformer Game",
    "Photography Section",
    "Mobile Social Media App",
    "Personal Activity Tracker",
    "Graphic Design UI Library",
  ],
  Rd = Zn.memo(({ position: e, show: t, isHovering: n, index: r }) =>
    t
      ? E.jsxs("div", {
          className:
            "fixed w-20 h-20 pointer-events-none mix-blend-difference z-50 transition-transform duration-300 ease-out",
          style: {
            left: e.x - 40,
            top: e.y - 40,
            transform: `scale(${n ? 1.5 : 1})`,
          },
          children: [
            E.jsx("div", {
              className: "absolute inset-0 bg-white rounded-full opacity-20",
            }),
            E.jsx("div", {
              className:
                "absolute inset-0 flex items-center justify-center text-white font-light",
              children: (r + 1).toString().padStart(2, "0"),
            }),
          ],
        })
      : null
  ),
  Dd = Zn.memo(({ total: e, current: t }) =>
    E.jsx("div", {
      className:
        "fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-40 pointer-events-none",
      children: Array.from({ length: e }, (n, r) =>
        E.jsx(
          "div",
          {
            className: `w-2 h-2 rounded-full transition-all duration-300 ${
              r === t ? "bg-white scale-150" : "bg-white/40"
            }`,
          },
          r
        )
      ),
    })
  ),
  Od = Zn.memo(({ currentView: e, setCurrentView: t, showProjectDetails: n }) =>
    E.jsxs("header", {
      className:
        "fixed top-0 left-0 right-0 z-40 px-12 py-8 flex justify-between items-center",
      children: [
        E.jsx("h1", {
          className: "text-white text-2xl font-light tracking-wider",
          children: "Jared James Lloyd Bueno",
        }),
        !n &&
          E.jsxs("nav", {
            className: "flex gap-8",
            children: [
              E.jsx("button", {
                onClick: () => t("projects"),
                className: `text-white font-light tracking-wider transition-all ${
                  e === "projects"
                    ? "opacity-100"
                    : "opacity-60 hover:opacity-100"
                }`,
                children: "Projects",
              }),
              E.jsx("button", {
                onClick: () => t("about"),
                className: `text-white font-light tracking-wider transition-all ${
                  e === "about" ? "opacity-100" : "opacity-60 hover:opacity-100"
                }`,
                children: "About Me",
              }),
            ],
          }),
      ],
    })
  ),
  Id = Zn.memo(({ show: e, description: t, onClose: n }) =>
    E.jsx("div", {
      className: `fixed inset-0 bg-black/95 z-40 transition-transform duration-700 ease-in-out smooth-scroll ${
        e ? "translate-y-0" : "translate-y-full"
      }`,
      children: E.jsxs("div", {
        className: "max-w-4xl mx-auto px-8 py-24",
        children: [
          E.jsx("button", {
            onClick: n,
            className:
              "fixed top-8 right-12 text-white opacity-60 hover:opacity-100 transition-opacity text-lg z-50",
            children: "Close",
          }),
          E.jsx("div", {
            className: "prose prose-invert max-w-none",
            dangerouslySetInnerHTML: { __html: t },
          }),
        ],
      }),
    })
  ),
  Fd = Zn.memo(({ show: e }) =>
    E.jsx("div", {
      className: `fixed inset-0 bg-black/95 z-30 transition-transform duration-700 ease-in-out smooth-scroll ${
        e ? "translate-y-0" : "translate-y-full"
      }`,
      children: E.jsxs("div", {
        className: "max-w-4xl mx-auto px-8 py-24",
        children: [
          E.jsx("h2", {
            className: "text-white text-5xl font-light mb-12",
            children: "About Me",
          }),
          E.jsxs("div", {
            className: "space-y-8",
            children: [
              E.jsx("p", {
                className: "text-white/90 text-lg leading-relaxed",
                children:
                  "I am Jared James Lloyd Bueno, a passionate web developer with a unique blend of expertise in technology, graphic design, and communication. My professional journey is defined by a strong commitment to creating user-centric and visually appealing technological solutions.",
              }),
              E.jsx("p", {
                className: "text-white/90 text-lg leading-relaxed",
                children:
                  "With a solid foundation in modern programming languages and frameworks, I aim to combine creativity and technical proficiency to develop functional and engaging user experiences.",
              }),
              E.jsxs("div", {
                className: "mt-12",
                children: [
                  E.jsx("h3", {
                    className: "text-white text-2xl font-light mb-6",
                    children: "Technical Skills",
                  }),
                  E.jsxs("div", {
                    className: "grid grid-cols-2 gap-8",
                    children: [
                      E.jsxs("div", {
                        children: [
                          E.jsx("h4", {
                            className: "text-white text-xl mb-4",
                            children: "Frontend",
                          }),
                          E.jsxs("ul", {
                            className: "text-white/90 list-disc pl-6 space-y-2",
                            children: [
                              E.jsx("li", { children: "HTML & CSS" }),
                              E.jsx("li", { children: "React & Angular" }),
                              E.jsx("li", {
                                children: "Bootstrap & Tailwind CSS",
                              }),
                              E.jsx("li", { children: "Three.js" }),
                              E.jsx("li", { children: "Figma & Photoshop" }),
                            ],
                          }),
                        ],
                      }),
                      E.jsxs("div", {
                        children: [
                          E.jsx("h4", {
                            className: "text-white text-xl mb-4",
                            children: "Backend",
                          }),
                          E.jsxs("ul", {
                            className: "text-white/90 list-disc pl-6 space-y-2",
                            children: [
                              E.jsx("li", { children: "Node.js" }),
                              E.jsx("li", { children: "Java & Python" }),
                              E.jsx("li", { children: "ASP.NET" }),
                              E.jsx("li", { children: "Django" }),
                              E.jsx("li", { children: "Oracle SQL & PL/SQL" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              E.jsxs("div", {
                className: "mt-12",
                children: [
                  E.jsx("h3", {
                    className: "text-white text-2xl font-light mb-6",
                    children: "Professional Experience",
                  }),
                  E.jsxs("ul", {
                    className: "text-white/90 list-disc pl-6 space-y-4",
                    children: [
                      E.jsxs("li", {
                        children: [
                          E.jsx("strong", {
                            children: "Freelance Graphic Designer:",
                          }),
                          " Designed logos, menus, and promotional materials for brands. Edited videos and photos for commercial and personal projects.",
                        ],
                      }),
                      E.jsxs("li", {
                        children: [
                          E.jsx("strong", {
                            children:
                              "Social Media Manager at A&M Batanguenyo:",
                          }),
                          " Created and managed visual content, including event photography, while ensuring excellent customer interaction online.",
                        ],
                      }),
                      E.jsxs("li", {
                        children: [
                          E.jsx("strong", {
                            children: "Intern at Enorme Studio:",
                          }),
                          " Collaborated on architecture and design projects, contributing to award-winning presentations.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              E.jsx("button", {
                onClick: () =>
                  window.open(
                    "https://drive.google.com/file/d/11_MSG13JeM7HSFPV8NlLuFFH6OJusgmI/view?usp=sharing",
                    "_blank"
                  ),
                className:
                  "bg-white text-black font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-200",
                children: "Download my Curriculum Vitae",
              }),
            ],
          }),
        ],
      }),
    })
  );
function Ud() {
  const [e, t] = Q.useState(0),
    [n, r] = Q.useState({ x: 0, y: 0 }),
    [l, i] = Q.useState(!0),
    [o, u] = Q.useState(0),
    [s, c] = Q.useState(!1),
    [h, m] = Q.useState(!1),
    [p, g] = Q.useState("projects"),
    [w, k] = Q.useState({ x: 0, y: 0 }),
    [D, f] = Q.useState([]),
    a = Q.useCallback((S) => {
      requestAnimationFrame(() => {
        r({ x: S.clientX, y: S.clientY }),
          k({
            x: S.clientX / window.innerWidth - 0.5,
            y: S.clientY / window.innerHeight - 0.5,
          });
      });
    }, []),
    d = Q.useCallback(() => {
      let S = !1;
      return (_) => {
        if (h || p === "about" || (_.preventDefault(), S)) return;
        S = !0;
        const O = _.deltaY > 0 ? 1 : -1;
        u(O),
          t((L) => (L + O + Ot.length) % Ot.length),
          setTimeout(() => {
            S = !1;
          }, 750);
      };
    }, [h, p]),
    v = Q.useCallback(() => i(!1), []),
    x = Q.useCallback(() => i(!0), []);
  Q.useEffect(() => {
    (async () => {
      try {
        const O = await (await fetch("/project-descriptions.html")).text(),
          vt = new DOMParser()
            .parseFromString(O, "text/html")
            .querySelectorAll("article"),
          yt = Array.from(vt).map((tr) => {
            const nr = tr.querySelector(".description");
            return nr ? nr.innerHTML : "";
          });
        f(yt);
      } catch (_) {
        console.error("Error loading project descriptions:", _);
      }
    })();
  }, []),
    Q.useEffect(() => {
      Ot.forEach((S) => {
        const _ = new Image();
        _.src = S;
      });
    }, []),
    Q.useEffect(() => {
      const S = d();
      return (
        window.addEventListener("mousemove", a, { passive: !0 }),
        window.addEventListener("wheel", S, { passive: !1 }),
        window.addEventListener("mouseleave", v),
        window.addEventListener("mouseenter", x),
        () => {
          window.removeEventListener("mousemove", a),
            window.removeEventListener("wheel", S),
            window.removeEventListener("mouseleave", v),
            window.removeEventListener("mouseenter", x);
        }
      );
    }, [d, a, v, x]);
  const P = Q.useMemo(
    () =>
      E.jsx("div", {
        className: "fixed left-8 top-1/2 -translate-y-1/2 z-40",
        children: E.jsxs("div", {
          className:
            "-rotate-90 transform origin-center flex items-center gap-4 text-white/60 transition-all duration-500",
          style: {
            opacity: l ? 1 : 0,
            transform: `rotate(-90deg) translateY(${o * 20}px)`,
          },
          children: [
            E.jsx("span", {
              className: "text-5xl font-light",
              children: (e + 1).toString().padStart(2, "0"),
            }),
            E.jsxs("span", {
              className: "text-sm tracking-wider",
              children: ["/ ", Ot.length.toString().padStart(2, "0")],
            }),
          ],
        }),
      }),
    [e, o, l]
  );
  return E.jsxs("div", {
    className: "relative w-screen h-screen overflow-hidden bg-black",
    children: [
      E.jsx(Od, { currentView: p, setCurrentView: g, showProjectDetails: h }),
      E.jsx(Rd, { position: n, show: l, isHovering: s, index: e }),
      p === "projects" &&
        E.jsxs(E.Fragment, {
          children: [
            P,
            E.jsx("div", {
              className:
                "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-auto",
              onMouseEnter: () => c(!0),
              onMouseLeave: () => c(!1),
              onClick: () => m(!0),
              children: E.jsx("h1", {
                className:
                  "text-white text-4xl font-light tracking-widest opacity-60 hover:opacity-100 transition-all duration-500 cursor-none",
                style: {
                  transform: `
                  scale(${s ? 1.4 : 1})
                  translate(
                    ${w.x * 30}px,
                    ${w.y * 30}px
                  )
                `,
                  transition: "all 0.5s ease-out",
                },
                children: Qu[e],
              }),
            }),
            E.jsx("div", {
              className: "relative w-full h-full",
              children: Ot.map((S, _) =>
                E.jsx(
                  "div",
                  {
                    className:
                      "absolute inset-0 transition-all duration-700 will-change-transform will-change-opacity cursor-none",
                    style: {
                      opacity: _ === e ? 1 : 0,
                      transform: `scale(${_ === e ? 1 : o > 0 ? 1.1 : 0.9})`,
                    },
                    onClick: () => m(!0),
                    children: E.jsx("img", {
                      src: S,
                      alt: `Slide ${_ + 1}`,
                      className: "w-full h-full object-cover",
                      loading: "lazy",
                    }),
                  },
                  S
                )
              ),
            }),
            E.jsx(Dd, { total: Ot.length, current: e }),
            E.jsx(Id, {
              show: h,
              title: Qu[e],
              description: D[e] || "",
              onClose: () => m(!1),
            }),
          ],
        }),
      E.jsx(Fd, { show: p === "about" }),
    ],
  });
}
lc(document.getElementById("root")).render(
  E.jsx(Q.StrictMode, { children: E.jsx(Ud, {}) })
);
