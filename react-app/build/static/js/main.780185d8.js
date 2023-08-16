/*! For license information please see main.780185d8.js.LICENSE.txt */
!(function () {
  var e = {
      888: function (e, t, n) {
        "use strict";
        var r = n(47);
        function a() {}
        function o() {}
        (o.resetWarningCache = a),
          (e.exports = function () {
            function e(e, t, n, a, o, i) {
              if (i !== r) {
                var u = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((u.name = "Invariant Violation"), u);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: o,
              resetWarningCache: a,
            };
            return (n.PropTypes = n), n;
          });
      },
      7: function (e, t, n) {
        e.exports = n(888)();
      },
      47: function (e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      463: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = n(296);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
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
        var i = new Set(),
          u = {};
        function l(e, t) {
          s(e, t), s(e + "Capture", t);
        }
        function s(e, t) {
          for (u[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function v(e, t, n, r, a, o, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = i);
        }
        var m = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            m[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            m[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              m[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            m[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              m[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            m[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            m[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            m[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            m[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function g(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = m.hasOwnProperty(t) ? m[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, g);
            m[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, g);
              m[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, g);
            m[t] = new v(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (m.xlinkHref = new v(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          S = Symbol.for("react.element"),
          _ = Symbol.for("react.portal"),
          k = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          x = Symbol.for("react.profiler"),
          T = Symbol.for("react.provider"),
          R = Symbol.for("react.context"),
          C = Symbol.for("react.forward_ref"),
          N = Symbol.for("react.suspense"),
          L = Symbol.for("react.suspense_list"),
          O = Symbol.for("react.memo"),
          A = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var P = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var D = Symbol.iterator;
        function M(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (D && e[D]) || e["@@iterator"])
            ? e
            : null;
        }
        var j,
          U = Object.assign;
        function z(e) {
          if (void 0 === j)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              j = (t && t[1]) || "";
            }
          return "\n" + j + e;
        }
        var I = !1;
        function F(e, t) {
          if (!e || I) return "";
          I = !0;
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
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (s) {
                  var r = s;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (s) {
                  r = s;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (s) {
                r = s;
              }
              e();
            }
          } catch (s) {
            if (s && r && "string" === typeof s.stack) {
              for (
                var a = s.stack.split("\n"),
                  o = r.stack.split("\n"),
                  i = a.length - 1,
                  u = o.length - 1;
                1 <= i && 0 <= u && a[i] !== o[u];

              )
                u--;
              for (; 1 <= i && 0 <= u; i--, u--)
                if (a[i] !== o[u]) {
                  if (1 !== i || 1 !== u)
                    do {
                      if ((i--, 0 > --u || a[i] !== o[u])) {
                        var l = "\n" + a[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            l.includes("<anonymous>") &&
                            (l = l.replace("<anonymous>", e.displayName)),
                          l
                        );
                      }
                    } while (1 <= i && 0 <= u);
                  break;
                }
            }
          } finally {
            (I = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? z(e) : "";
        }
        function V(e) {
          switch (e.tag) {
            case 5:
              return z(e.type);
            case 16:
              return z("Lazy");
            case 13:
              return z("Suspense");
            case 19:
              return z("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = F(e.type, !1));
            case 11:
              return (e = F(e.type.render, !1));
            case 1:
              return (e = F(e.type, !0));
            default:
              return "";
          }
        }
        function B(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case k:
              return "Fragment";
            case _:
              return "Portal";
            case x:
              return "Profiler";
            case E:
              return "StrictMode";
            case N:
              return "Suspense";
            case L:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case R:
                return (e.displayName || "Context") + ".Consumer";
              case T:
                return (e._context.displayName || "Context") + ".Provider";
              case C:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case O:
                return null !== (t = e.displayName || null)
                  ? t
                  : B(e.type) || "Memo";
              case A:
                (t = e._payload), (e = e._init);
                try {
                  return B(e(t));
                } catch (n) {}
            }
          return null;
        }
        function W(e) {
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
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
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
              return B(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
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
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function H(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function $(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function K(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = $(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = $(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Q(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function G(e, t) {
          var n = t.checked;
          return U({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Y(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = H(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function J(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function X(e, t) {
          J(e, t);
          var n = H(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, H(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && Q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + H(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return U({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: H(n) };
        }
        function oe(e, t) {
          var n = H(t.value),
            r = H(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function ue(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function le(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? ue(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var se,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (se = se || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = se.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
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
          he = ["Webkit", "ms", "Moz", "O"];
        function ve(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function me(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = ve(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ye = U(
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
        function ge(e, t) {
          if (t) {
            if (
              ye[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
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
        var we = null;
        function Se(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var _e = null,
          ke = null,
          Ee = null;
        function xe(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof _e) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = Sa(t)), _e(e.stateNode, e.type, t));
          }
        }
        function Te(e) {
          ke ? (Ee ? Ee.push(e) : (Ee = [e])) : (ke = e);
        }
        function Re() {
          if (ke) {
            var e = ke,
              t = Ee;
            if (((Ee = ke = null), xe(e), t))
              for (e = 0; e < t.length; e++) xe(t[e]);
          }
        }
        function Ce(e, t) {
          return e(t);
        }
        function Ne() {}
        var Le = !1;
        function Oe(e, t, n) {
          if (Le) return e(t, n);
          Le = !0;
          try {
            return Ce(e, t, n);
          } finally {
            (Le = !1), (null !== ke || null !== Ee) && (Ne(), Re());
          }
        }
        function Ae(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = Sa(n);
          if (null === r) return null;
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
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Pe = !1;
        if (c)
          try {
            var De = {};
            Object.defineProperty(De, "passive", {
              get: function () {
                Pe = !0;
              },
            }),
              window.addEventListener("test", De, De),
              window.removeEventListener("test", De, De);
          } catch (ce) {
            Pe = !1;
          }
        function Me(e, t, n, r, a, o, i, u, l) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var je = !1,
          Ue = null,
          ze = !1,
          Ie = null,
          Fe = {
            onError: function (e) {
              (je = !0), (Ue = e);
            },
          };
        function Ve(e, t, n, r, a, o, i, u, l) {
          (je = !1), (Ue = null), Me.apply(Fe, arguments);
        }
        function Be(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function We(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function He(e) {
          if (Be(e) !== e) throw Error(o(188));
        }
        function $e(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Be(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === n) return He(a), e;
                    if (i === r) return He(a), t;
                    i = i.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = i);
                else {
                  for (var u = !1, l = a.child; l; ) {
                    if (l === n) {
                      (u = !0), (n = a), (r = i);
                      break;
                    }
                    if (l === r) {
                      (u = !0), (r = a), (n = i);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!u) {
                    for (l = i.child; l; ) {
                      if (l === n) {
                        (u = !0), (n = i), (r = a);
                        break;
                      }
                      if (l === r) {
                        (u = !0), (r = i), (n = a);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!u) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ke(e)
            : null;
        }
        function Ke(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ke(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = a.unstable_scheduleCallback,
          Qe = a.unstable_cancelCallback,
          Ge = a.unstable_shouldYield,
          Ye = a.unstable_requestPaint,
          Je = a.unstable_now,
          Xe = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((ut(e) / lt) | 0)) | 0;
              },
          ut = Math.log,
          lt = Math.LN2;
        var st = 64,
          ct = 4194304;
        function ft(e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
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
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var u = i & ~a;
            0 !== u ? (r = ft(u)) : 0 !== (o &= i) && (r = ft(o));
          } else 0 !== (i = n & ~a) ? (r = ft(i)) : 0 !== o && (r = ft(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
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
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function vt() {
          var e = st;
          return 0 === (4194240 & (st <<= 1)) && (st = 64), e;
        }
        function mt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function yt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function gt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var St,
          _t,
          kt,
          Et,
          xt,
          Tt = !1,
          Rt = [],
          Ct = null,
          Nt = null,
          Lt = null,
          Ot = new Map(),
          At = new Map(),
          Pt = [],
          Dt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Mt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Ct = null;
              break;
            case "dragenter":
            case "dragleave":
              Nt = null;
              break;
            case "mouseover":
            case "mouseout":
              Lt = null;
              break;
            case "pointerover":
            case "pointerout":
              Ot.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              At.delete(t.pointerId);
          }
        }
        function jt(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && _t(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Ut(e) {
          var t = ga(e.target);
          if (null !== t) {
            var n = Be(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = We(n)))
                  return (
                    (e.blockedOn = t),
                    void xt(e.priority, function () {
                      kt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function zt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && _t(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function It(e, t, n) {
          zt(e) && n.delete(t);
        }
        function Ft() {
          (Tt = !1),
            null !== Ct && zt(Ct) && (Ct = null),
            null !== Nt && zt(Nt) && (Nt = null),
            null !== Lt && zt(Lt) && (Lt = null),
            Ot.forEach(It),
            At.forEach(It);
        }
        function Vt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Tt ||
              ((Tt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Ft)));
        }
        function Bt(e) {
          function t(t) {
            return Vt(t, e);
          }
          if (0 < Rt.length) {
            Vt(Rt[0], e);
            for (var n = 1; n < Rt.length; n++) {
              var r = Rt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Ct && Vt(Ct, e),
              null !== Nt && Vt(Nt, e),
              null !== Lt && Vt(Lt, e),
              Ot.forEach(t),
              At.forEach(t),
              n = 0;
            n < Pt.length;
            n++
          )
            (r = Pt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Pt.length && null === (n = Pt[0]).blockedOn; )
            Ut(n), null === n.blockedOn && Pt.shift();
        }
        var Wt = w.ReactCurrentBatchConfig,
          Ht = !0;
        function $t(e, t, n, r) {
          var a = bt,
            o = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 1), qt(e, t, n, r);
          } finally {
            (bt = a), (Wt.transition = o);
          }
        }
        function Kt(e, t, n, r) {
          var a = bt,
            o = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 4), qt(e, t, n, r);
          } finally {
            (bt = a), (Wt.transition = o);
          }
        }
        function qt(e, t, n, r) {
          if (Ht) {
            var a = Gt(e, t, n, r);
            if (null === a) Hr(e, t, r, Qt, n), Mt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Ct = jt(Ct, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Nt = jt(Nt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Lt = jt(Lt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var o = a.pointerId;
                    return Ot.set(o, jt(Ot.get(o) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      At.set(o, jt(At.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Mt(e, r), 4 & t && -1 < Dt.indexOf(e))) {
              for (; null !== a; ) {
                var o = ba(a);
                if (
                  (null !== o && St(o),
                  null === (o = Gt(e, t, n, r)) && Hr(e, t, r, Qt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else Hr(e, t, r, null, n);
          }
        }
        var Qt = null;
        function Gt(e, t, n, r) {
          if (((Qt = null), null !== (e = ga((e = Se(r))))))
            if (null === (t = Be(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = We(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Qt = e), null;
        }
        function Yt(e) {
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
              switch (Xe()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Jt = null,
          Xt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Xt,
            r = n.length,
            a = "value" in Jt ? Jt.value : Jt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, o) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            U(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          un,
          ln,
          sn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(sn),
          fn = U({}, sn, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = U({}, fn, {
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
            getModifierState: xn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== ln &&
                    (ln && "mousemove" === e.type
                      ? ((on = e.screenX - ln.screenX),
                        (un = e.screenY - ln.screenY))
                      : (un = on = 0),
                    (ln = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : un;
            },
          }),
          hn = an(pn),
          vn = an(U({}, pn, { dataTransfer: 0 })),
          mn = an(U({}, fn, { relatedTarget: 0 })),
          yn = an(
            U({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          gn = U({}, sn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(gn),
          wn = an(U({}, sn, { data: 0 })),
          Sn = {
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
          _n = {
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
          kn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = kn[e]) && !!t[e];
        }
        function xn() {
          return En;
        }
        var Tn = U({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = Sn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? _n[e.keyCode] || "Unidentified"
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
            getModifierState: xn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Rn = an(Tn),
          Cn = an(
            U({}, pn, {
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
            })
          ),
          Nn = an(
            U({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: xn,
            })
          ),
          Ln = an(
            U({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          On = U({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
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
          An = an(On),
          Pn = [9, 13, 27, 32],
          Dn = c && "CompositionEvent" in window,
          Mn = null;
        c && "documentMode" in document && (Mn = document.documentMode);
        var jn = c && "TextEvent" in window && !Mn,
          Un = c && (!Dn || (Mn && 8 < Mn && 11 >= Mn)),
          zn = String.fromCharCode(32),
          In = !1;
        function Fn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Pn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Vn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Bn = !1;
        var Wn = {
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
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Wn[e.type] : "textarea" === t;
        }
        function $n(e, t, n, r) {
          Te(r),
            0 < (t = Kr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Kn = null,
          qn = null;
        function Qn(e) {
          zr(e, 0);
        }
        function Gn(e) {
          if (q(wa(e))) return e;
        }
        function Yn(e, t) {
          if ("change" === e) return t;
        }
        var Jn = !1;
        if (c) {
          var Xn;
          if (c) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Xn = Zn;
          } else Xn = !1;
          Jn = Xn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Kn && (Kn.detachEvent("onpropertychange", nr), (qn = Kn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Gn(qn)) {
            var t = [];
            $n(t, qn, e, Se(e)), Oe(Qn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (qn = n), (Kn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Gn(qn);
        }
        function or(e, t) {
          if ("click" === e) return Gn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Gn(t);
        }
        var ur =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function lr(e, t) {
          if (ur(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !ur(e[a], t[a])) return !1;
          }
          return !0;
        }
        function sr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = sr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = sr(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = Q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = Q((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  o = Math.min(r.start, a);
                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = cr(n, o));
                var i = cr(n, r);
                a &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var vr = c && "documentMode" in document && 11 >= document.documentMode,
          mr = null,
          yr = null,
          gr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == mr ||
            mr !== Q(r) ||
            ("selectionStart" in (r = mr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (gr && lr(gr, r)) ||
              ((gr = r),
              0 < (r = Kr(yr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = mr))));
        }
        function Sr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var _r = {
            animationend: Sr("Animation", "AnimationEnd"),
            animationiteration: Sr("Animation", "AnimationIteration"),
            animationstart: Sr("Animation", "AnimationStart"),
            transitionend: Sr("Transition", "TransitionEnd"),
          },
          kr = {},
          Er = {};
        function xr(e) {
          if (kr[e]) return kr[e];
          if (!_r[e]) return e;
          var t,
            n = _r[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (kr[e] = n[t]);
          return e;
        }
        c &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete _r.animationend.animation,
            delete _r.animationiteration.animation,
            delete _r.animationstart.animation),
          "TransitionEvent" in window || delete _r.transitionend.transition);
        var Tr = xr("animationend"),
          Rr = xr("animationiteration"),
          Cr = xr("animationstart"),
          Nr = xr("transitionend"),
          Lr = new Map(),
          Or =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Ar(e, t) {
          Lr.set(e, t), l(t, [e]);
        }
        for (var Pr = 0; Pr < Or.length; Pr++) {
          var Dr = Or[Pr];
          Ar(Dr.toLowerCase(), "on" + (Dr[0].toUpperCase() + Dr.slice(1)));
        }
        Ar(Tr, "onAnimationEnd"),
          Ar(Rr, "onAnimationIteration"),
          Ar(Cr, "onAnimationStart"),
          Ar("dblclick", "onDoubleClick"),
          Ar("focusin", "onFocus"),
          Ar("focusout", "onBlur"),
          Ar(Nr, "onTransitionEnd"),
          s("onMouseEnter", ["mouseout", "mouseover"]),
          s("onMouseLeave", ["mouseout", "mouseover"]),
          s("onPointerEnter", ["pointerout", "pointerover"]),
          s("onPointerLeave", ["pointerout", "pointerover"]),
          l(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          l(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          l("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          l(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Mr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          jr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Mr)
          );
        function Ur(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, i, u, l, s) {
              if ((Ve.apply(this, arguments), je)) {
                if (!je) throw Error(o(198));
                var c = Ue;
                (je = !1), (Ue = null), ze || ((ze = !0), (Ie = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function zr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var u = r[i],
                    l = u.instance,
                    s = u.currentTarget;
                  if (((u = u.listener), l !== o && a.isPropagationStopped()))
                    break e;
                  Ur(a, u, s), (o = l);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((l = (u = r[i]).instance),
                    (s = u.currentTarget),
                    (u = u.listener),
                    l !== o && a.isPropagationStopped())
                  )
                    break e;
                  Ur(a, u, s), (o = l);
                }
            }
          }
          if (ze) throw ((e = Ie), (ze = !1), (Ie = null), e);
        }
        function Ir(e, t) {
          var n = t[va];
          void 0 === n && (n = t[va] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Wr(t, e, 2, !1), n.add(r));
        }
        function Fr(e, t, n) {
          var r = 0;
          t && (r |= 4), Wr(n, e, r, t);
        }
        var Vr = "_reactListening" + Math.random().toString(36).slice(2);
        function Br(e) {
          if (!e[Vr]) {
            (e[Vr] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (jr.has(t) || Fr(t, !1, e), Fr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Vr] || ((t[Vr] = !0), Fr("selectionchange", !1, t));
          }
        }
        function Wr(e, t, n, r) {
          switch (Yt(t)) {
            case 1:
              var a = $t;
              break;
            case 4:
              a = Kt;
              break;
            default:
              a = qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Pe ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Hr(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var u = r.stateNode.containerInfo;
                if (u === a || (8 === u.nodeType && u.parentNode === a)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var l = i.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = i.stateNode.containerInfo) === a ||
                        (8 === l.nodeType && l.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== u; ) {
                  if (null === (i = ga(u))) return;
                  if (5 === (l = i.tag) || 6 === l) {
                    r = o = i;
                    continue e;
                  }
                  u = u.parentNode;
                }
              }
              r = r.return;
            }
          Oe(function () {
            var r = o,
              a = Se(n),
              i = [];
            e: {
              var u = Lr.get(e);
              if (void 0 !== u) {
                var l = cn,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    l = Rn;
                    break;
                  case "focusin":
                    (s = "focus"), (l = mn);
                    break;
                  case "focusout":
                    (s = "blur"), (l = mn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    l = mn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    l = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    l = vn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    l = Nn;
                    break;
                  case Tr:
                  case Rr:
                  case Cr:
                    l = yn;
                    break;
                  case Nr:
                    l = Ln;
                    break;
                  case "scroll":
                    l = dn;
                    break;
                  case "wheel":
                    l = An;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    l = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    l = Cn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== u ? u + "Capture" : null) : u;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var v = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== v &&
                      ((p = v),
                      null !== d &&
                        null != (v = Ae(h, d)) &&
                        c.push($r(h, v, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((u = new l(u, s, null, n, a)),
                  i.push({ event: u, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((l = "mouseout" === e || "pointerout" === e),
                (!(u = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!ga(s) && !s[ha])) &&
                  (l || u) &&
                  ((u =
                    a.window === a
                      ? a
                      : (u = a.ownerDocument)
                      ? u.defaultView || u.parentWindow
                      : window),
                  l
                    ? ((l = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? ga(s)
                          : null) &&
                        (s !== (f = Be(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((l = null), (s = r)),
                  l !== s))
              ) {
                if (
                  ((c = hn),
                  (v = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Cn),
                    (v = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == l ? u : wa(l)),
                  (p = null == s ? u : wa(s)),
                  ((u = new c(v, h + "leave", l, n, a)).target = f),
                  (u.relatedTarget = p),
                  (v = null),
                  ga(a) === r &&
                    (((c = new c(d, h + "enter", s, n, a)).target = p),
                    (c.relatedTarget = f),
                    (v = c)),
                  (f = v),
                  l && s)
                )
                  e: {
                    for (d = s, h = 0, p = c = l; p; p = qr(p)) h++;
                    for (p = 0, v = d; v; v = qr(v)) p++;
                    for (; 0 < h - p; ) (c = qr(c)), h--;
                    for (; 0 < p - h; ) (d = qr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = qr(c)), (d = qr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== l && Qr(i, u, l, c, !1),
                  null !== s && null !== f && Qr(i, f, s, c, !0);
              }
              if (
                "select" ===
                  (l =
                    (u = r ? wa(r) : window).nodeName &&
                    u.nodeName.toLowerCase()) ||
                ("input" === l && "file" === u.type)
              )
                var m = Yn;
              else if (Hn(u))
                if (Jn) m = ir;
                else {
                  m = ar;
                  var y = rr;
                }
              else
                (l = u.nodeName) &&
                  "input" === l.toLowerCase() &&
                  ("checkbox" === u.type || "radio" === u.type) &&
                  (m = or);
              switch (
                (m && (m = m(e, r))
                  ? $n(i, m, n, a)
                  : (y && y(e, u, r),
                    "focusout" === e &&
                      (y = u._wrapperState) &&
                      y.controlled &&
                      "number" === u.type &&
                      ee(u, "number", u.value)),
                (y = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Hn(y) || "true" === y.contentEditable) &&
                    ((mr = y), (yr = r), (gr = null));
                  break;
                case "focusout":
                  gr = yr = mr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(i, n, a);
                  break;
                case "selectionchange":
                  if (vr) break;
                case "keydown":
                case "keyup":
                  wr(i, n, a);
              }
              var g;
              if (Dn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Bn
                  ? Fn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Un &&
                  "ko" !== n.locale &&
                  (Bn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Bn && (g = en())
                    : ((Xt = "value" in (Jt = a) ? Jt.value : Jt.textContent),
                      (Bn = !0))),
                0 < (y = Kr(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  i.push({ event: b, listeners: y }),
                  g ? (b.data = g) : null !== (g = Vn(n)) && (b.data = g))),
                (g = jn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Vn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((In = !0), zn);
                        case "textInput":
                          return (e = t.data) === zn && In ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Bn)
                        return "compositionend" === e || (!Dn && Fn(e, t))
                          ? ((e = en()), (Zt = Xt = Jt = null), (Bn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Un && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Kr(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = g));
            }
            zr(i, t);
          });
        }
        function $r(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Kr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Ae(e, n)) && r.unshift($r(e, o, a)),
              null != (o = Ae(e, t)) && r.push($r(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Qr(e, t, n, r, a) {
          for (var o = t._reactName, i = []; null !== n && n !== r; ) {
            var u = n,
              l = u.alternate,
              s = u.stateNode;
            if (null !== l && l === r) break;
            5 === u.tag &&
              null !== s &&
              ((u = s),
              a
                ? null != (l = Ae(n, o)) && i.unshift($r(n, l, u))
                : a || (null != (l = Ae(n, o)) && i.push($r(n, l, u)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Gr = /\r\n?/g,
          Yr = /\u0000|\uFFFD/g;
        function Jr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Gr, "\n")
            .replace(Yr, "");
        }
        function Xr(e, t, n) {
          if (((t = Jr(t)), Jr(e) !== t && n)) throw Error(o(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oa = "function" === typeof Promise ? Promise : void 0,
          ia =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oa
              ? function (e) {
                  return oa.resolve(null).then(e).catch(ua);
                }
              : ra;
        function ua(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function la(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Bt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Bt(t);
        }
        function sa(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fa = Math.random().toString(36).slice(2),
          da = "__reactFiber$" + fa,
          pa = "__reactProps$" + fa,
          ha = "__reactContainer$" + fa,
          va = "__reactEvents$" + fa,
          ma = "__reactListeners$" + fa,
          ya = "__reactHandles$" + fa;
        function ga(e) {
          var t = e[da];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[da])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[da])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[da] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function Sa(e) {
          return e[pa] || null;
        }
        var _a = [],
          ka = -1;
        function Ea(e) {
          return { current: e };
        }
        function xa(e) {
          0 > ka || ((e.current = _a[ka]), (_a[ka] = null), ka--);
        }
        function Ta(e, t) {
          ka++, (_a[ka] = e.current), (e.current = t);
        }
        var Ra = {},
          Ca = Ea(Ra),
          Na = Ea(!1),
          La = Ra;
        function Oa(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ra;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Aa(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Pa() {
          xa(Na), xa(Ca);
        }
        function Da(e, t, n) {
          if (Ca.current !== Ra) throw Error(o(168));
          Ta(Ca, t), Ta(Na, n);
        }
        function Ma(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, W(e) || "Unknown", a));
          return U({}, n, r);
        }
        function ja(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ra),
            (La = Ca.current),
            Ta(Ca, e),
            Ta(Na, Na.current),
            !0
          );
        }
        function Ua(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = Ma(e, t, La)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              xa(Na),
              xa(Ca),
              Ta(Ca, e))
            : xa(Na),
            Ta(Na, n);
        }
        var za = null,
          Ia = !1,
          Fa = !1;
        function Va(e) {
          null === za ? (za = [e]) : za.push(e);
        }
        function Ba() {
          if (!Fa && null !== za) {
            Fa = !0;
            var e = 0,
              t = bt;
            try {
              var n = za;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (za = null), (Ia = !1);
            } catch (a) {
              throw (null !== za && (za = za.slice(e + 1)), qe(Ze, Ba), a);
            } finally {
              (bt = t), (Fa = !1);
            }
          }
          return null;
        }
        var Wa = [],
          Ha = 0,
          $a = null,
          Ka = 0,
          qa = [],
          Qa = 0,
          Ga = null,
          Ya = 1,
          Ja = "";
        function Xa(e, t) {
          (Wa[Ha++] = Ka), (Wa[Ha++] = $a), ($a = e), (Ka = t);
        }
        function Za(e, t, n) {
          (qa[Qa++] = Ya), (qa[Qa++] = Ja), (qa[Qa++] = Ga), (Ga = e);
          var r = Ya;
          e = Ja;
          var a = 32 - it(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var o = 32 - it(t) + a;
          if (30 < o) {
            var i = a - (a % 5);
            (o = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (Ya = (1 << (32 - it(t) + a)) | (n << a) | r),
              (Ja = o + e);
          } else (Ya = (1 << o) | (n << a) | r), (Ja = e);
        }
        function eo(e) {
          null !== e.return && (Xa(e, 1), Za(e, 1, 0));
        }
        function to(e) {
          for (; e === $a; )
            ($a = Wa[--Ha]), (Wa[Ha] = null), (Ka = Wa[--Ha]), (Wa[Ha] = null);
          for (; e === Ga; )
            (Ga = qa[--Qa]),
              (qa[Qa] = null),
              (Ja = qa[--Qa]),
              (qa[Qa] = null),
              (Ya = qa[--Qa]),
              (qa[Qa] = null);
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null;
        function io(e, t) {
          var n = As(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function uo(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (no = e), (ro = sa(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ga ? { id: Ya, overflow: Ja } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = As(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function lo(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function so(e) {
          if (ao) {
            var t = ro;
            if (t) {
              var n = t;
              if (!uo(e, t)) {
                if (lo(e)) throw Error(o(418));
                t = sa(n.nextSibling);
                var r = no;
                t && uo(e, t)
                  ? io(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
              }
            } else {
              if (lo(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
            }
          }
        }
        function co(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          no = e;
        }
        function fo(e) {
          if (e !== no) return !1;
          if (!ao) return co(e), (ao = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (lo(e)) throw (po(), Error(o(418)));
            for (; t; ) io(e, t), (t = sa(t.nextSibling));
          }
          if ((co(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ro = sa(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? sa(e.stateNode.nextSibling) : null;
          return !0;
        }
        function po() {
          for (var e = ro; e; ) e = sa(e.nextSibling);
        }
        function ho() {
          (ro = no = null), (ao = !1);
        }
        function vo(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var mo = w.ReactCurrentBatchConfig;
        function yo(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = U({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var go = Ea(null),
          bo = null,
          wo = null,
          So = null;
        function _o() {
          So = wo = bo = null;
        }
        function ko(e) {
          var t = go.current;
          xa(go), (e._currentValue = t);
        }
        function Eo(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function xo(e, t) {
          (bo = e),
            (So = wo = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (wu = !0), (e.firstContext = null));
        }
        function To(e) {
          var t = e._currentValue;
          if (So !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === wo)
            ) {
              if (null === bo) throw Error(o(308));
              (wo = e), (bo.dependencies = { lanes: 0, firstContext: e });
            } else wo = wo.next = e;
          return t;
        }
        var Ro = null;
        function Co(e) {
          null === Ro ? (Ro = [e]) : Ro.push(e);
        }
        function No(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Co(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Lo(e, r)
          );
        }
        function Lo(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Oo = !1;
        function Ao(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Po(e, t) {
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
        function Do(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Mo(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Nl))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Lo(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Co(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Lo(e, n)
          );
        }
        function jo(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        function Uo(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (a = o = i) : (o = o.next = i), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function zo(e, t, n, r) {
          var a = e.updateQueue;
          Oo = !1;
          var o = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            u = a.shared.pending;
          if (null !== u) {
            a.shared.pending = null;
            var l = u,
              s = l.next;
            (l.next = null), null === i ? (o = s) : (i.next = s), (i = l);
            var c = e.alternate;
            null !== c &&
              (u = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === u ? (c.firstBaseUpdate = s) : (u.next = s),
              (c.lastBaseUpdate = l));
          }
          if (null !== o) {
            var f = a.baseState;
            for (i = 0, c = s = l = null, u = o; ; ) {
              var d = u.lane,
                p = u.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: u.tag,
                      payload: u.payload,
                      callback: u.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    v = u;
                  switch (((d = t), (p = n), v.tag)) {
                    case 1:
                      if ("function" === typeof (h = v.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = v.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = U({}, f, d);
                      break e;
                    case 2:
                      Oo = !0;
                  }
                }
                null !== u.callback &&
                  0 !== u.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [u]) : d.push(u));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: u.tag,
                  payload: u.payload,
                  callback: u.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (l = f)) : (c = c.next = p),
                  (i |= d);
              if (null === (u = u.next)) {
                if (null === (u = a.shared.pending)) break;
                (u = (d = u).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (l = f),
              (a.baseState = l),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (i |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            (Ul |= i), (e.lanes = i), (e.memoizedState = f);
          }
        }
        function Io(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var Fo = new r.Component().refs;
        function Vo(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : U({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Bo = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Be(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = ts(),
              a = ns(e),
              o = Do(r, a);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Mo(e, o, a)) && (rs(t, e, a, r), jo(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ts(),
              a = ns(e),
              o = Do(r, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Mo(e, o, a)) && (rs(t, e, a, r), jo(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ts(),
              r = ns(e),
              a = Do(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Mo(e, a, r)) && (rs(t, e, r, n), jo(t, e, r));
          },
        };
        function Wo(e, t, n, r, a, o, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !lr(n, r) ||
                !lr(a, o);
        }
        function Ho(e, t, n) {
          var r = !1,
            a = Ra,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = To(o))
              : ((a = Aa(t) ? La : Ca.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Oa(e, a)
                  : Ra)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Bo),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function $o(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Bo.enqueueReplaceState(t, t.state, null);
        }
        function Ko(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Fo), Ao(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (a.context = To(o))
            : ((o = Aa(t) ? La : Ca.current), (a.context = Oa(e, o))),
            (a.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (Vo(e, t, o, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Bo.enqueueReplaceState(a, a.state, null),
              zo(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function qo(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Fo && (t = a.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function Qo(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Go(e) {
          return (0, e._init)(e._payload);
        }
        function Yo(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Ds(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function u(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function l(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = zs(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            var o = n.type;
            return o === k
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === o ||
                  ("object" === typeof o &&
                    null !== o &&
                    o.$$typeof === A &&
                    Go(o) === t.type))
              ? (((r = a(t, n.props)).ref = qo(e, t, n)), (r.return = e), r)
              : (((r = Ms(n.type, n.key, n.props, null, e.mode, r)).ref = qo(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Is(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = js(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = zs("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case S:
                  return (
                    ((n = Ms(t.type, t.key, t.props, null, e.mode, n)).ref = qo(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case _:
                  return ((t = Is(t, e.mode, n)).return = e), t;
                case A:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || M(t))
                return ((t = js(t, e.mode, n, null)).return = e), t;
              Qo(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : l(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case S:
                  return n.key === a ? s(e, t, n, r) : null;
                case _:
                  return n.key === a ? c(e, t, n, r) : null;
                case A:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || M(n)) return null !== a ? null : f(e, t, n, r, null);
              Qo(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return l(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case S:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case _:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case A:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || M(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              Qo(t, r);
            }
            return null;
          }
          function v(a, o, u, l) {
            for (
              var s = null, c = null, f = o, v = (o = 0), m = null;
              null !== f && v < u.length;
              v++
            ) {
              f.index > v ? ((m = f), (f = null)) : (m = f.sibling);
              var y = p(a, f, u[v], l);
              if (null === y) {
                null === f && (f = m);
                break;
              }
              e && f && null === y.alternate && t(a, f),
                (o = i(y, o, v)),
                null === c ? (s = y) : (c.sibling = y),
                (c = y),
                (f = m);
            }
            if (v === u.length) return n(a, f), ao && Xa(a, v), s;
            if (null === f) {
              for (; v < u.length; v++)
                null !== (f = d(a, u[v], l)) &&
                  ((o = i(f, o, v)),
                  null === c ? (s = f) : (c.sibling = f),
                  (c = f));
              return ao && Xa(a, v), s;
            }
            for (f = r(a, f); v < u.length; v++)
              null !== (m = h(f, a, v, u[v], l)) &&
                (e &&
                  null !== m.alternate &&
                  f.delete(null === m.key ? v : m.key),
                (o = i(m, o, v)),
                null === c ? (s = m) : (c.sibling = m),
                (c = m));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Xa(a, v),
              s
            );
          }
          function m(a, u, l, s) {
            var c = M(l);
            if ("function" !== typeof c) throw Error(o(150));
            if (null == (l = c.call(l))) throw Error(o(151));
            for (
              var f = (c = null), v = u, m = (u = 0), y = null, g = l.next();
              null !== v && !g.done;
              m++, g = l.next()
            ) {
              v.index > m ? ((y = v), (v = null)) : (y = v.sibling);
              var b = p(a, v, g.value, s);
              if (null === b) {
                null === v && (v = y);
                break;
              }
              e && v && null === b.alternate && t(a, v),
                (u = i(b, u, m)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (v = y);
            }
            if (g.done) return n(a, v), ao && Xa(a, m), c;
            if (null === v) {
              for (; !g.done; m++, g = l.next())
                null !== (g = d(a, g.value, s)) &&
                  ((u = i(g, u, m)),
                  null === f ? (c = g) : (f.sibling = g),
                  (f = g));
              return ao && Xa(a, m), c;
            }
            for (v = r(a, v); !g.done; m++, g = l.next())
              null !== (g = h(v, a, m, g.value, s)) &&
                (e &&
                  null !== g.alternate &&
                  v.delete(null === g.key ? m : g.key),
                (u = i(g, u, m)),
                null === f ? (c = g) : (f.sibling = g),
                (f = g));
            return (
              e &&
                v.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Xa(a, m),
              c
            );
          }
          return function e(r, o, i, l) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === k &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case S:
                  e: {
                    for (var s = i.key, c = o; null !== c; ) {
                      if (c.key === s) {
                        if ((s = i.type) === k) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((o = a(c, i.props.children)).return = r),
                              (r = o);
                            break e;
                          }
                        } else if (
                          c.elementType === s ||
                          ("object" === typeof s &&
                            null !== s &&
                            s.$$typeof === A &&
                            Go(s) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((o = a(c, i.props)).ref = qo(r, c, i)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    i.type === k
                      ? (((o = js(i.props.children, r.mode, l, i.key)).return =
                          r),
                        (r = o))
                      : (((l = Ms(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          l
                        )).ref = qo(r, o, i)),
                        (l.return = r),
                        (r = l));
                  }
                  return u(r);
                case _:
                  e: {
                    for (c = i.key; null !== o; ) {
                      if (o.key === c) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === i.containerInfo &&
                          o.stateNode.implementation === i.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = a(o, i.children || [])).return = r),
                            (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = Is(i, r.mode, l)).return = r), (r = o);
                  }
                  return u(r);
                case A:
                  return e(r, o, (c = i._init)(i._payload), l);
              }
              if (te(i)) return v(r, o, i, l);
              if (M(i)) return m(r, o, i, l);
              Qo(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, i)).return = r), (r = o))
                  : (n(r, o), ((o = zs(i, r.mode, l)).return = r), (r = o)),
                u(r))
              : n(r, o);
          };
        }
        var Jo = Yo(!0),
          Xo = Yo(!1),
          Zo = {},
          ei = Ea(Zo),
          ti = Ea(Zo),
          ni = Ea(Zo);
        function ri(e) {
          if (e === Zo) throw Error(o(174));
          return e;
        }
        function ai(e, t) {
          switch ((Ta(ni, t), Ta(ti, e), Ta(ei, Zo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
              break;
            default:
              t = le(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          xa(ei), Ta(ei, t);
        }
        function oi() {
          xa(ei), xa(ti), xa(ni);
        }
        function ii(e) {
          ri(ni.current);
          var t = ri(ei.current),
            n = le(t, e.type);
          t !== n && (Ta(ti, e), Ta(ei, n));
        }
        function ui(e) {
          ti.current === e && (xa(ei), xa(ti));
        }
        var li = Ea(0);
        function si(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ci = [];
        function fi() {
          for (var e = 0; e < ci.length; e++)
            ci[e]._workInProgressVersionPrimary = null;
          ci.length = 0;
        }
        var di = w.ReactCurrentDispatcher,
          pi = w.ReactCurrentBatchConfig,
          hi = 0,
          vi = null,
          mi = null,
          yi = null,
          gi = !1,
          bi = !1,
          wi = 0,
          Si = 0;
        function _i() {
          throw Error(o(321));
        }
        function ki(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!ur(e[n], t[n])) return !1;
          return !0;
        }
        function Ei(e, t, n, r, a, i) {
          if (
            ((hi = i),
            (vi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (di.current = null === e || null === e.memoizedState ? uu : lu),
            (e = n(r, a)),
            bi)
          ) {
            i = 0;
            do {
              if (((bi = !1), (wi = 0), 25 <= i)) throw Error(o(301));
              (i += 1),
                (yi = mi = null),
                (t.updateQueue = null),
                (di.current = su),
                (e = n(r, a));
            } while (bi);
          }
          if (
            ((di.current = iu),
            (t = null !== mi && null !== mi.next),
            (hi = 0),
            (yi = mi = vi = null),
            (gi = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function xi() {
          var e = 0 !== wi;
          return (wi = 0), e;
        }
        function Ti() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === yi ? (vi.memoizedState = yi = e) : (yi = yi.next = e), yi
          );
        }
        function Ri() {
          if (null === mi) {
            var e = vi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = mi.next;
          var t = null === yi ? vi.memoizedState : yi.next;
          if (null !== t) (yi = t), (mi = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (mi = e).memoizedState,
              baseState: mi.baseState,
              baseQueue: mi.baseQueue,
              queue: mi.queue,
              next: null,
            }),
              null === yi ? (vi.memoizedState = yi = e) : (yi = yi.next = e);
          }
          return yi;
        }
        function Ci(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Ni(e) {
          var t = Ri(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = mi,
            a = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== a) {
              var u = a.next;
              (a.next = i.next), (i.next = u);
            }
            (r.baseQueue = a = i), (n.pending = null);
          }
          if (null !== a) {
            (i = a.next), (r = r.baseState);
            var l = (u = null),
              s = null,
              c = i;
            do {
              var f = c.lane;
              if ((hi & f) === f)
                null !== s &&
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
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === s ? ((l = s = d), (u = r)) : (s = s.next = d),
                  (vi.lanes |= f),
                  (Ul |= f);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === s ? (u = r) : (s.next = l),
              ur(r, t.memoizedState) || (wu = !0),
              (t.memoizedState = r),
              (t.baseState = u),
              (t.baseQueue = s),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (i = a.lane), (vi.lanes |= i), (Ul |= i), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Li(e) {
          var t = Ri(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var u = (a = a.next);
            do {
              (i = e(i, u.action)), (u = u.next);
            } while (u !== a);
            ur(i, t.memoizedState) || (wu = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function Oi() {}
        function Ai(e, t) {
          var n = vi,
            r = Ri(),
            a = t(),
            i = !ur(r.memoizedState, a);
          if (
            (i && ((r.memoizedState = a), (wu = !0)),
            (r = r.queue),
            Hi(Mi.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== yi && 1 & yi.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Ii(9, Di.bind(null, n, r, a, t), void 0, null),
              null === Ll)
            )
              throw Error(o(349));
            0 !== (30 & hi) || Pi(n, t, a);
          }
          return a;
        }
        function Pi(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = vi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vi.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Di(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), ji(t) && Ui(e);
        }
        function Mi(e, t, n) {
          return n(function () {
            ji(t) && Ui(e);
          });
        }
        function ji(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !ur(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Ui(e) {
          var t = Lo(e, 1);
          null !== t && rs(t, e, 1, -1);
        }
        function zi(e) {
          var t = Ti();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Ci,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nu.bind(null, vi, e)),
            [t.memoizedState, e]
          );
        }
        function Ii(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = vi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Fi() {
          return Ri().memoizedState;
        }
        function Vi(e, t, n, r) {
          var a = Ti();
          (vi.flags |= e),
            (a.memoizedState = Ii(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Bi(e, t, n, r) {
          var a = Ri();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== mi) {
            var i = mi.memoizedState;
            if (((o = i.destroy), null !== r && ki(r, i.deps)))
              return void (a.memoizedState = Ii(t, n, o, r));
          }
          (vi.flags |= e), (a.memoizedState = Ii(1 | t, n, o, r));
        }
        function Wi(e, t) {
          return Vi(8390656, 8, e, t);
        }
        function Hi(e, t) {
          return Bi(2048, 8, e, t);
        }
        function $i(e, t) {
          return Bi(4, 2, e, t);
        }
        function Ki(e, t) {
          return Bi(4, 4, e, t);
        }
        function qi(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Qi(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Bi(4, 4, qi.bind(null, t, e), n)
          );
        }
        function Gi() {}
        function Yi(e, t) {
          var n = Ri();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ki(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Ji(e, t) {
          var n = Ri();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ki(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Xi(e, t, n) {
          return 0 === (21 & hi)
            ? (e.baseState && ((e.baseState = !1), (wu = !0)),
              (e.memoizedState = n))
            : (ur(n, t) ||
                ((n = vt()), (vi.lanes |= n), (Ul |= n), (e.baseState = !0)),
              t);
        }
        function Zi(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pi.transition;
          pi.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (pi.transition = r);
          }
        }
        function eu() {
          return Ri().memoizedState;
        }
        function tu(e, t, n) {
          var r = ns(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            ru(e))
          )
            au(t, n);
          else if (null !== (n = No(e, t, n, r))) {
            rs(n, e, r, ts()), ou(n, t, r);
          }
        }
        function nu(e, t, n) {
          var r = ns(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (ru(e)) au(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  u = o(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = u), ur(u, i))) {
                  var l = t.interleaved;
                  return (
                    null === l
                      ? ((a.next = a), Co(t))
                      : ((a.next = l.next), (l.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (s) {}
            null !== (n = No(e, t, a, r)) &&
              (rs(n, e, r, (a = ts())), ou(n, t, r));
          }
        }
        function ru(e) {
          var t = e.alternate;
          return e === vi || (null !== t && t === vi);
        }
        function au(e, t) {
          bi = gi = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function ou(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        var iu = {
            readContext: To,
            useCallback: _i,
            useContext: _i,
            useEffect: _i,
            useImperativeHandle: _i,
            useInsertionEffect: _i,
            useLayoutEffect: _i,
            useMemo: _i,
            useReducer: _i,
            useRef: _i,
            useState: _i,
            useDebugValue: _i,
            useDeferredValue: _i,
            useTransition: _i,
            useMutableSource: _i,
            useSyncExternalStore: _i,
            useId: _i,
            unstable_isNewReconciler: !1,
          },
          uu = {
            readContext: To,
            useCallback: function (e, t) {
              return (Ti().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: To,
            useEffect: Wi,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Vi(4194308, 4, qi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Vi(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Vi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Ti();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Ti();
              return (
                (t = void 0 !== n ? n(t) : t),
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
                (e = e.dispatch = tu.bind(null, vi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Ti().memoizedState = e);
            },
            useState: zi,
            useDebugValue: Gi,
            useDeferredValue: function (e) {
              return (Ti().memoizedState = e);
            },
            useTransition: function () {
              var e = zi(!1),
                t = e[0];
              return (
                (e = Zi.bind(null, e[1])), (Ti().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = vi,
                a = Ti();
              if (ao) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === Ll)) throw Error(o(349));
                0 !== (30 & hi) || Pi(r, t, n);
              }
              a.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (a.queue = i),
                Wi(Mi.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Ii(9, Di.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Ti(),
                t = Ll.identifierPrefix;
              if (ao) {
                var n = Ja;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ya & ~(1 << (32 - it(Ya) - 1))).toString(32) + n)),
                  0 < (n = wi++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = Si++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          lu = {
            readContext: To,
            useCallback: Yi,
            useContext: To,
            useEffect: Hi,
            useImperativeHandle: Qi,
            useInsertionEffect: $i,
            useLayoutEffect: Ki,
            useMemo: Ji,
            useReducer: Ni,
            useRef: Fi,
            useState: function () {
              return Ni(Ci);
            },
            useDebugValue: Gi,
            useDeferredValue: function (e) {
              return Xi(Ri(), mi.memoizedState, e);
            },
            useTransition: function () {
              return [Ni(Ci)[0], Ri().memoizedState];
            },
            useMutableSource: Oi,
            useSyncExternalStore: Ai,
            useId: eu,
            unstable_isNewReconciler: !1,
          },
          su = {
            readContext: To,
            useCallback: Yi,
            useContext: To,
            useEffect: Hi,
            useImperativeHandle: Qi,
            useInsertionEffect: $i,
            useLayoutEffect: Ki,
            useMemo: Ji,
            useReducer: Li,
            useRef: Fi,
            useState: function () {
              return Li(Ci);
            },
            useDebugValue: Gi,
            useDeferredValue: function (e) {
              var t = Ri();
              return null === mi
                ? (t.memoizedState = e)
                : Xi(t, mi.memoizedState, e);
            },
            useTransition: function () {
              return [Li(Ci)[0], Ri().memoizedState];
            },
            useMutableSource: Oi,
            useSyncExternalStore: Ai,
            useId: eu,
            unstable_isNewReconciler: !1,
          };
        function cu(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += V(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (o) {
            a = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function fu(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function du(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pu = "function" === typeof WeakMap ? WeakMap : Map;
        function hu(e, t, n) {
          ((n = Do(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              $l || (($l = !0), (Kl = r)), du(0, t);
            }),
            n
          );
        }
        function vu(e, t, n) {
          (n = Do(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                du(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                du(0, t),
                  "function" !== typeof r &&
                    (null === ql ? (ql = new Set([this])) : ql.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function mu(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pu();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Ts.bind(null, e, t, n)), t.then(e, e));
        }
        function yu(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function gu(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Do(-1, 1)).tag = 2), Mo(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bu = w.ReactCurrentOwner,
          wu = !1;
        function Su(e, t, n, r) {
          t.child = null === e ? Xo(t, null, n, r) : Jo(t, e.child, n, r);
        }
        function _u(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            xo(t, a),
            (r = Ei(e, t, n, r, o, a)),
            (n = xi()),
            null === e || wu
              ? (ao && n && eo(t), (t.flags |= 1), Su(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                $u(e, t, a))
          );
        }
        function ku(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              Ps(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Ms(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), Eu(e, t, o, r, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var i = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : lr)(i, r) &&
              e.ref === t.ref
            )
              return $u(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Ds(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Eu(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (lr(o, r) && e.ref === t.ref) {
              if (((wu = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), $u(e, t, a);
              0 !== (131072 & e.flags) && (wu = !0);
            }
          }
          return Ru(e, t, n, r, a);
        }
        function xu(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ta(Dl, Pl),
                (Pl |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ta(Dl, Pl),
                  (Pl |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                Ta(Dl, Pl),
                (Pl |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ta(Dl, Pl),
              (Pl |= r);
          return Su(e, t, a, n), t.child;
        }
        function Tu(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ru(e, t, n, r, a) {
          var o = Aa(n) ? La : Ca.current;
          return (
            (o = Oa(t, o)),
            xo(t, a),
            (n = Ei(e, t, n, r, o, a)),
            (r = xi()),
            null === e || wu
              ? (ao && r && eo(t), (t.flags |= 1), Su(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                $u(e, t, a))
          );
        }
        function Cu(e, t, n, r, a) {
          if (Aa(n)) {
            var o = !0;
            ja(t);
          } else o = !1;
          if ((xo(t, a), null === t.stateNode))
            Hu(e, t), Ho(t, n, r), Ko(t, n, r, a), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              u = t.memoizedProps;
            i.props = u;
            var l = i.context,
              s = n.contextType;
            "object" === typeof s && null !== s
              ? (s = To(s))
              : (s = Oa(t, (s = Aa(n) ? La : Ca.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((u !== r || l !== s) && $o(t, i, r, s)),
              (Oo = !1);
            var d = t.memoizedState;
            (i.state = d),
              zo(t, r, i, a),
              (l = t.memoizedState),
              u !== r || d !== l || Na.current || Oo
                ? ("function" === typeof c &&
                    (Vo(t, n, c, r), (l = t.memoizedState)),
                  (u = Oo || Wo(t, n, u, r, d, l, s))
                    ? (f ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = l)),
                  (i.props = r),
                  (i.state = l),
                  (i.context = s),
                  (r = u))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              Po(e, t),
              (u = t.memoizedProps),
              (s = t.type === t.elementType ? u : yo(t.type, u)),
              (i.props = s),
              (f = t.pendingProps),
              (d = i.context),
              "object" === typeof (l = n.contextType) && null !== l
                ? (l = To(l))
                : (l = Oa(t, (l = Aa(n) ? La : Ca.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((u !== f || d !== l) && $o(t, i, r, l)),
              (Oo = !1),
              (d = t.memoizedState),
              (i.state = d),
              zo(t, r, i, a);
            var h = t.memoizedState;
            u !== f || d !== h || Na.current || Oo
              ? ("function" === typeof p &&
                  (Vo(t, n, p, r), (h = t.memoizedState)),
                (s = Oo || Wo(t, n, s, r, d, h, l) || !1)
                  ? (c ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, l),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, l)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (u === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (u === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = l),
                (r = s))
              : ("function" !== typeof i.componentDidUpdate ||
                  (u === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (u === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Nu(e, t, n, r, o, a);
        }
        function Nu(e, t, n, r, a, o) {
          Tu(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return a && Ua(t, n, !1), $u(e, t, o);
          (r = t.stateNode), (bu.current = t);
          var u =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Jo(t, e.child, null, o)),
                (t.child = Jo(t, null, u, o)))
              : Su(e, t, u, o),
            (t.memoizedState = r.state),
            a && Ua(t, n, !0),
            t.child
          );
        }
        function Lu(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Da(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Da(0, t.context, !1),
            ai(e, t.containerInfo);
        }
        function Ou(e, t, n, r, a) {
          return ho(), vo(a), (t.flags |= 256), Su(e, t, n, r), t.child;
        }
        var Au,
          Pu,
          Du,
          Mu,
          ju = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Uu(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function zu(e, t, n) {
          var r,
            a = t.pendingProps,
            i = li.current,
            u = !1,
            l = 0 !== (128 & t.flags);
          if (
            ((r = l) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((u = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Ta(li, 1 & i),
            null === e)
          )
            return (
              so(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((l = a.children),
                  (e = a.fallback),
                  u
                    ? ((a = t.mode),
                      (u = t.child),
                      (l = { mode: "hidden", children: l }),
                      0 === (1 & a) && null !== u
                        ? ((u.childLanes = 0), (u.pendingProps = l))
                        : (u = Us(l, a, 0, null)),
                      (e = js(e, a, n, null)),
                      (u.return = t),
                      (e.return = t),
                      (u.sibling = e),
                      (t.child = u),
                      (t.child.memoizedState = Uu(n)),
                      (t.memoizedState = ju),
                      e)
                    : Iu(t, l))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, a, i, u) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Fu(e, t, u, (r = fu(Error(o(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (a = t.mode),
                    (r = Us(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((i = js(i, a, u, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && Jo(t, e.child, null, u),
                    (t.child.memoizedState = Uu(u)),
                    (t.memoizedState = ju),
                    i);
              if (0 === (1 & t.mode)) return Fu(e, t, u, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var l = r.dgst;
                return (
                  (r = l), Fu(e, t, u, (r = fu((i = Error(o(419))), r, void 0)))
                );
              }
              if (((l = 0 !== (u & e.childLanes)), wu || l)) {
                if (null !== (r = Ll)) {
                  switch (u & -u) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
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
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | u)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), Lo(e, a), rs(r, e, a, -1));
                }
                return ms(), Fu(e, t, u, (r = fu(Error(o(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Cs.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (ro = sa(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((qa[Qa++] = Ya),
                    (qa[Qa++] = Ja),
                    (qa[Qa++] = Ga),
                    (Ya = e.id),
                    (Ja = e.overflow),
                    (Ga = t)),
                  (t = Iu(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, l, a, r, i, n);
          if (u) {
            (u = a.fallback), (l = t.mode), (r = (i = e.child).sibling);
            var s = { mode: "hidden", children: a.children };
            return (
              0 === (1 & l) && t.child !== i
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = s),
                  (t.deletions = null))
                : ((a = Ds(i, s)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (u = Ds(r, u))
                : ((u = js(u, l, n, null)).flags |= 2),
              (u.return = t),
              (a.return = t),
              (a.sibling = u),
              (t.child = a),
              (a = u),
              (u = t.child),
              (l =
                null === (l = e.child.memoizedState)
                  ? Uu(n)
                  : {
                      baseLanes: l.baseLanes | n,
                      cachePool: null,
                      transitions: l.transitions,
                    }),
              (u.memoizedState = l),
              (u.childLanes = e.childLanes & ~n),
              (t.memoizedState = ju),
              a
            );
          }
          return (
            (e = (u = e.child).sibling),
            (a = Ds(u, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Iu(e, t) {
          return (
            ((t = Us(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Fu(e, t, n, r) {
          return (
            null !== r && vo(r),
            Jo(t, e.child, null, n),
            ((e = Iu(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Vu(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Eo(e.return, t, n);
        }
        function Bu(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function Wu(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((Su(e, t, r.children, n), 0 !== (2 & (r = li.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Vu(e, n, t);
                else if (19 === e.tag) Vu(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ta(li, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === si(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Bu(t, !1, a, n, o);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === si(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Bu(t, !0, n, null, o);
                break;
              case "together":
                Bu(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Hu(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function $u(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Ul |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Ds((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ds(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Ku(e, t) {
          if (!ao)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function qu(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Qu(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
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
              return qu(t), null;
            case 1:
            case 17:
              return Aa(t.type) && Pa(), qu(t), null;
            case 3:
              return (
                (r = t.stateNode),
                oi(),
                xa(Na),
                xa(Ca),
                fi(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (us(oo), (oo = null)))),
                Pu(e, t),
                qu(t),
                null
              );
            case 5:
              ui(t);
              var a = ri(ni.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Du(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return qu(t), null;
                }
                if (((e = ri(ei.current)), fo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[da] = t), (r[pa] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Ir("cancel", r), Ir("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ir("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Mr.length; a++) Ir(Mr[a], r);
                      break;
                    case "source":
                      Ir("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ir("error", r), Ir("load", r);
                      break;
                    case "details":
                      Ir("toggle", r);
                      break;
                    case "input":
                      Y(r, i), Ir("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Ir("invalid", r);
                      break;
                    case "textarea":
                      ae(r, i), Ir("invalid", r);
                  }
                  for (var l in (ge(n, i), (a = null), i))
                    if (i.hasOwnProperty(l)) {
                      var s = i[l];
                      "children" === l
                        ? "string" === typeof s
                          ? r.textContent !== s &&
                            (!0 !== i.suppressHydrationWarning &&
                              Xr(r.textContent, s, e),
                            (a = ["children", s]))
                          : "number" === typeof s &&
                            r.textContent !== "" + s &&
                            (!0 !== i.suppressHydrationWarning &&
                              Xr(r.textContent, s, e),
                            (a = ["children", "" + s]))
                        : u.hasOwnProperty(l) &&
                          null != s &&
                          "onScroll" === l &&
                          Ir("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      K(r), Z(r, i, !0);
                      break;
                    case "textarea":
                      K(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (l = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = ue(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = l.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = l.createElement(n, { is: r.is }))
                        : ((e = l.createElement(n)),
                          "select" === n &&
                            ((l = e),
                            r.multiple
                              ? (l.multiple = !0)
                              : r.size && (l.size = r.size)))
                      : (e = l.createElementNS(e, n)),
                    (e[da] = t),
                    (e[pa] = r),
                    Au(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((l = be(n, r)), n)) {
                      case "dialog":
                        Ir("cancel", e), Ir("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ir("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Mr.length; a++) Ir(Mr[a], e);
                        a = r;
                        break;
                      case "source":
                        Ir("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ir("error", e), Ir("load", e), (a = r);
                        break;
                      case "details":
                        Ir("toggle", e), (a = r);
                        break;
                      case "input":
                        Y(e, r), (a = G(e, r)), Ir("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = U({}, r, { value: void 0 })),
                          Ir("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Ir("invalid", e);
                    }
                    for (i in (ge(n, a), (s = a)))
                      if (s.hasOwnProperty(i)) {
                        var c = s[i];
                        "style" === i
                          ? me(e, c)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === i
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && de(e, c)
                            : "number" === typeof c && de(e, "" + c)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (u.hasOwnProperty(i)
                              ? null != c && "onScroll" === i && Ir("scroll", e)
                              : null != c && b(e, i, c, l));
                      }
                    switch (n) {
                      case "input":
                        K(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        K(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + H(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr);
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
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return qu(t), null;
            case 6:
              if (e && null != t.stateNode) Mu(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((n = ri(ni.current)), ri(ei.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[da] = t),
                    (i = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[da] = t),
                    (t.stateNode = r);
              }
              return qu(t), null;
            case 13:
              if (
                (xa(li),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ao &&
                  null !== ro &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  po(), ho(), (t.flags |= 98560), (i = !1);
                else if (((i = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(o(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(o(317));
                    i[da] = t;
                  } else
                    ho(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  qu(t), (i = !1);
                } else null !== oo && (us(oo), (oo = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & li.current)
                        ? 0 === Ml && (Ml = 3)
                        : ms())),
                  null !== t.updateQueue && (t.flags |= 4),
                  qu(t),
                  null);
            case 4:
              return (
                oi(),
                Pu(e, t),
                null === e && Br(t.stateNode.containerInfo),
                qu(t),
                null
              );
            case 10:
              return ko(t.type._context), qu(t), null;
            case 19:
              if ((xa(li), null === (i = t.memoizedState))) return qu(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (l = i.rendering)))
                if (r) Ku(i, !1);
                else {
                  if (0 !== Ml || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (l = si(e))) {
                        for (
                          t.flags |= 128,
                            Ku(i, !1),
                            null !== (r = l.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (l = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = l.childLanes),
                                (i.lanes = l.lanes),
                                (i.child = l.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = l.memoizedProps),
                                (i.memoizedState = l.memoizedState),
                                (i.updateQueue = l.updateQueue),
                                (i.type = l.type),
                                (e = l.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ta(li, (1 & li.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Je() > Wl &&
                    ((t.flags |= 128),
                    (r = !0),
                    Ku(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = si(l))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Ku(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !l.alternate &&
                        !ao)
                    )
                      return qu(t), null;
                  } else
                    2 * Je() - i.renderingStartTime > Wl &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Ku(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((l.sibling = t.child), (t.child = l))
                  : (null !== (n = i.last) ? (n.sibling = l) : (t.child = l),
                    (i.last = l));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Je()),
                  (t.sibling = null),
                  (n = li.current),
                  Ta(li, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (qu(t), null);
            case 22:
            case 23:
              return (
                ds(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Pl) &&
                    (qu(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : qu(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Gu(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Aa(t.type) && Pa(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                oi(),
                xa(Na),
                xa(Ca),
                fi(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return ui(t), null;
            case 13:
              if (
                (xa(li),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                ho();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return xa(li), null;
            case 4:
              return oi(), null;
            case 10:
              return ko(t.type._context), null;
            case 22:
            case 23:
              return ds(), null;
            default:
              return null;
          }
        }
        (Au = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Pu = function () {}),
          (Du = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), ri(ei.current);
              var o,
                i = null;
              switch (n) {
                case "input":
                  (a = G(e, a)), (r = G(e, r)), (i = []);
                  break;
                case "select":
                  (a = U({}, a, { value: void 0 })),
                    (r = U({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ge(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var l = a[c];
                    for (o in l)
                      l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (u.hasOwnProperty(c)
                        ? i || (i = [])
                        : (i = i || []).push(c, null));
              for (c in r) {
                var s = r[c];
                if (
                  ((l = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && s !== l && (null != s || null != l))
                )
                  if ("style" === c)
                    if (l) {
                      for (o in l)
                        !l.hasOwnProperty(o) ||
                          (s && s.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in s)
                        s.hasOwnProperty(o) &&
                          l[o] !== s[o] &&
                          (n || (n = {}), (n[o] = s[o]));
                    } else n || (i || (i = []), i.push(c, n)), (n = s);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((s = s ? s.__html : void 0),
                        (l = l ? l.__html : void 0),
                        null != s && l !== s && (i = i || []).push(c, s))
                      : "children" === c
                      ? ("string" !== typeof s && "number" !== typeof s) ||
                        (i = i || []).push(c, "" + s)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (u.hasOwnProperty(c)
                          ? (null != s && "onScroll" === c && Ir("scroll", e),
                            i || l === s || (i = []))
                          : (i = i || []).push(c, s));
              }
              n && (i = i || []).push("style", n);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Mu = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Yu = !1,
          Ju = !1,
          Xu = "function" === typeof WeakSet ? WeakSet : Set,
          Zu = null;
        function el(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                xs(e, t, r);
              }
            else n.current = null;
        }
        function tl(e, t, n) {
          try {
            n();
          } catch (r) {
            xs(e, t, r);
          }
        }
        var nl = !1;
        function rl(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && tl(t, n, o);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function al(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
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
        function ol(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function il(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), il(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[da],
              delete t[pa],
              delete t[va],
              delete t[ma],
              delete t[ya]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ul(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ll(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ul(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function sl(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (sl(e, t, n), e = e.sibling; null !== e; )
              sl(e, t, n), (e = e.sibling);
        }
        function cl(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cl(e, t, n), e = e.sibling; null !== e; )
              cl(e, t, n), (e = e.sibling);
        }
        var fl = null,
          dl = !1;
        function pl(e, t, n) {
          for (n = n.child; null !== n; ) hl(e, t, n), (n = n.sibling);
        }
        function hl(e, t, n) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n);
            } catch (u) {}
          switch (n.tag) {
            case 5:
              Ju || el(n, t);
            case 6:
              var r = fl,
                a = dl;
              (fl = null),
                pl(e, t, n),
                (dl = a),
                null !== (fl = r) &&
                  (dl
                    ? ((e = fl),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : fl.removeChild(n.stateNode));
              break;
            case 18:
              null !== fl &&
                (dl
                  ? ((e = fl),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? la(e.parentNode, n)
                      : 1 === e.nodeType && la(e, n),
                    Bt(e))
                  : la(fl, n.stateNode));
              break;
            case 4:
              (r = fl),
                (a = dl),
                (fl = n.stateNode.containerInfo),
                (dl = !0),
                pl(e, t, n),
                (fl = r),
                (dl = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Ju &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var o = a,
                    i = o.destroy;
                  (o = o.tag),
                    void 0 !== i &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      tl(n, t, i),
                    (a = a.next);
                } while (a !== r);
              }
              pl(e, t, n);
              break;
            case 1:
              if (
                !Ju &&
                (el(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (u) {
                  xs(n, t, u);
                }
              pl(e, t, n);
              break;
            case 21:
              pl(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Ju = (r = Ju) || null !== n.memoizedState),
                  pl(e, t, n),
                  (Ju = r))
                : pl(e, t, n);
              break;
            default:
              pl(e, t, n);
          }
        }
        function vl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Xu()),
              t.forEach(function (t) {
                var r = Ns.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function ml(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var i = e,
                  u = t,
                  l = u;
                e: for (; null !== l; ) {
                  switch (l.tag) {
                    case 5:
                      (fl = l.stateNode), (dl = !1);
                      break e;
                    case 3:
                    case 4:
                      (fl = l.stateNode.containerInfo), (dl = !0);
                      break e;
                  }
                  l = l.return;
                }
                if (null === fl) throw Error(o(160));
                hl(i, u, a), (fl = null), (dl = !1);
                var s = a.alternate;
                null !== s && (s.return = null), (a.return = null);
              } catch (c) {
                xs(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) yl(t, e), (t = t.sibling);
        }
        function yl(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ml(t, e), gl(e), 4 & r)) {
                try {
                  rl(3, e, e.return), al(3, e);
                } catch (m) {
                  xs(e, e.return, m);
                }
                try {
                  rl(5, e, e.return);
                } catch (m) {
                  xs(e, e.return, m);
                }
              }
              break;
            case 1:
              ml(t, e), gl(e), 512 & r && null !== n && el(n, n.return);
              break;
            case 5:
              if (
                (ml(t, e),
                gl(e),
                512 & r && null !== n && el(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (m) {
                  xs(e, e.return, m);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  u = null !== n ? n.memoizedProps : i,
                  l = e.type,
                  s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                  try {
                    "input" === l &&
                      "radio" === i.type &&
                      null != i.name &&
                      J(a, i),
                      be(l, u);
                    var c = be(l, i);
                    for (u = 0; u < s.length; u += 2) {
                      var f = s[u],
                        d = s[u + 1];
                      "style" === f
                        ? me(a, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(a, d)
                        : "children" === f
                        ? de(a, d)
                        : b(a, f, d, c);
                    }
                    switch (l) {
                      case "input":
                        X(a, i);
                        break;
                      case "textarea":
                        oe(a, i);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? ne(a, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(a, !!i.multiple, i.defaultValue, !0)
                              : ne(a, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    a[pa] = i;
                  } catch (m) {
                    xs(e, e.return, m);
                  }
              }
              break;
            case 6:
              if ((ml(t, e), gl(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (m) {
                  xs(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                (ml(t, e),
                gl(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Bt(t.containerInfo);
                } catch (m) {
                  xs(e, e.return, m);
                }
              break;
            case 4:
            default:
              ml(t, e), gl(e);
              break;
            case 13:
              ml(t, e),
                gl(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Bl = Je())),
                4 & r && vl(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Ju = (c = Ju) || f), ml(t, e), (Ju = c))
                  : ml(t, e),
                gl(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Zu = e, f = e.child; null !== f; ) {
                    for (d = Zu = f; null !== Zu; ) {
                      switch (((h = (p = Zu).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          rl(4, p, p.return);
                          break;
                        case 1:
                          el(p, p.return);
                          var v = p.stateNode;
                          if ("function" === typeof v.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (v.props = t.memoizedProps),
                                (v.state = t.memoizedState),
                                v.componentWillUnmount();
                            } catch (m) {
                              xs(r, n, m);
                            }
                          }
                          break;
                        case 5:
                          el(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            _l(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Zu = h)) : _l(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (a = d.stateNode),
                          c
                            ? "function" === typeof (i = a.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((l = d.stateNode),
                              (u =
                                void 0 !== (s = d.memoizedProps.style) &&
                                null !== s &&
                                s.hasOwnProperty("display")
                                  ? s.display
                                  : null),
                              (l.style.display = ve("display", u)));
                      } catch (m) {
                        xs(e, e.return, m);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (m) {
                        xs(e, e.return, m);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              ml(t, e), gl(e), 4 & r && vl(e);
            case 21:
          }
        }
        function gl(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ul(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ""), (r.flags &= -33)),
                    cl(e, ll(e), a);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  sl(e, ll(e), i);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (u) {
              xs(e, e.return, u);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bl(e, t, n) {
          (Zu = e), wl(e, t, n);
        }
        function wl(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Zu; ) {
            var a = Zu,
              o = a.child;
            if (22 === a.tag && r) {
              var i = null !== a.memoizedState || Yu;
              if (!i) {
                var u = a.alternate,
                  l = (null !== u && null !== u.memoizedState) || Ju;
                u = Yu;
                var s = Ju;
                if (((Yu = i), (Ju = l) && !s))
                  for (Zu = a; null !== Zu; )
                    (l = (i = Zu).child),
                      22 === i.tag && null !== i.memoizedState
                        ? kl(a)
                        : null !== l
                        ? ((l.return = i), (Zu = l))
                        : kl(a);
                for (; null !== o; ) (Zu = o), wl(o, t, n), (o = o.sibling);
                (Zu = a), (Yu = u), (Ju = s);
              }
              Sl(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== o
                ? ((o.return = a), (Zu = o))
                : Sl(e);
          }
        }
        function Sl(e) {
          for (; null !== Zu; ) {
            var t = Zu;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ju || al(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Ju)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : yo(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Io(t, i, r);
                      break;
                    case 3:
                      var u = t.updateQueue;
                      if (null !== u) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Io(t, u, n);
                      }
                      break;
                    case 5:
                      var l = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = l;
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
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Bt(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Ju || (512 & t.flags && ol(t));
              } catch (p) {
                xs(t, t.return, p);
              }
            }
            if (t === e) {
              Zu = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Zu = n);
              break;
            }
            Zu = t.return;
          }
        }
        function _l(e) {
          for (; null !== Zu; ) {
            var t = Zu;
            if (t === e) {
              Zu = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Zu = n);
              break;
            }
            Zu = t.return;
          }
        }
        function kl(e) {
          for (; null !== Zu; ) {
            var t = Zu;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    al(4, t);
                  } catch (l) {
                    xs(t, n, l);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (l) {
                      xs(t, a, l);
                    }
                  }
                  var o = t.return;
                  try {
                    ol(t);
                  } catch (l) {
                    xs(t, o, l);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    ol(t);
                  } catch (l) {
                    xs(t, i, l);
                  }
              }
            } catch (l) {
              xs(t, t.return, l);
            }
            if (t === e) {
              Zu = null;
              break;
            }
            var u = t.sibling;
            if (null !== u) {
              (u.return = t.return), (Zu = u);
              break;
            }
            Zu = t.return;
          }
        }
        var El,
          xl = Math.ceil,
          Tl = w.ReactCurrentDispatcher,
          Rl = w.ReactCurrentOwner,
          Cl = w.ReactCurrentBatchConfig,
          Nl = 0,
          Ll = null,
          Ol = null,
          Al = 0,
          Pl = 0,
          Dl = Ea(0),
          Ml = 0,
          jl = null,
          Ul = 0,
          zl = 0,
          Il = 0,
          Fl = null,
          Vl = null,
          Bl = 0,
          Wl = 1 / 0,
          Hl = null,
          $l = !1,
          Kl = null,
          ql = null,
          Ql = !1,
          Gl = null,
          Yl = 0,
          Jl = 0,
          Xl = null,
          Zl = -1,
          es = 0;
        function ts() {
          return 0 !== (6 & Nl) ? Je() : -1 !== Zl ? Zl : (Zl = Je());
        }
        function ns(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Nl) && 0 !== Al
            ? Al & -Al
            : null !== mo.transition
            ? (0 === es && (es = vt()), es)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
        }
        function rs(e, t, n, r) {
          if (50 < Jl) throw ((Jl = 0), (Xl = null), Error(o(185)));
          yt(e, n, r),
            (0 !== (2 & Nl) && e === Ll) ||
              (e === Ll && (0 === (2 & Nl) && (zl |= n), 4 === Ml && ls(e, Al)),
              as(e, r),
              1 === n &&
                0 === Nl &&
                0 === (1 & t.mode) &&
                ((Wl = Je() + 500), Ia && Ba()));
        }
        function as(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var i = 31 - it(o),
                u = 1 << i,
                l = a[i];
              -1 === l
                ? (0 !== (u & n) && 0 === (u & r)) || (a[i] = pt(u, t))
                : l <= t && (e.expiredLanes |= u),
                (o &= ~u);
            }
          })(e, t);
          var r = dt(e, e === Ll ? Al : 0);
          if (0 === r)
            null !== n && Qe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ia = !0), Va(e);
                  })(ss.bind(null, e))
                : Va(ss.bind(null, e)),
                ia(function () {
                  0 === (6 & Nl) && Ba();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Ls(n, os.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function os(e, t) {
          if (((Zl = -1), (es = 0), 0 !== (6 & Nl))) throw Error(o(327));
          var n = e.callbackNode;
          if (ks() && e.callbackNode !== n) return null;
          var r = dt(e, e === Ll ? Al : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = ys(e, r);
          else {
            t = r;
            var a = Nl;
            Nl |= 2;
            var i = vs();
            for (
              (Ll === e && Al === t) ||
              ((Hl = null), (Wl = Je() + 500), ps(e, t));
              ;

            )
              try {
                bs();
                break;
              } catch (l) {
                hs(e, l);
              }
            _o(),
              (Tl.current = i),
              (Nl = a),
              null !== Ol ? (t = 0) : ((Ll = null), (Al = 0), (t = Ml));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = is(e, a))),
              1 === t)
            )
              throw ((n = jl), ps(e, 0), ls(e, r), as(e, Je()), n);
            if (6 === t) ls(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!ur(o(), a)) return !1;
                            } catch (u) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = ys(e, r)) &&
                    0 !== (i = ht(e)) &&
                    ((r = i), (t = is(e, i))),
                  1 === t))
              )
                throw ((n = jl), ps(e, 0), ls(e, r), as(e, Je()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  _s(e, Vl, Hl);
                  break;
                case 3:
                  if (
                    (ls(e, r),
                    (130023424 & r) === r && 10 < (t = Bl + 500 - Je()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      ts(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(_s.bind(null, e, Vl, Hl), t);
                    break;
                  }
                  _s(e, Vl, Hl);
                  break;
                case 4:
                  if ((ls(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var u = 31 - it(r);
                    (i = 1 << u), (u = t[u]) > a && (a = u), (r &= ~i);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Je() - r)
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
                          : 1960 * xl(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(_s.bind(null, e, Vl, Hl), r);
                    break;
                  }
                  _s(e, Vl, Hl);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return as(e, Je()), e.callbackNode === n ? os.bind(null, e) : null;
        }
        function is(e, t) {
          var n = Fl;
          return (
            e.current.memoizedState.isDehydrated && (ps(e, t).flags |= 256),
            2 !== (e = ys(e, t)) && ((t = Vl), (Vl = n), null !== t && us(t)),
            e
          );
        }
        function us(e) {
          null === Vl ? (Vl = e) : Vl.push.apply(Vl, e);
        }
        function ls(e, t) {
          for (
            t &= ~Il,
              t &= ~zl,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function ss(e) {
          if (0 !== (6 & Nl)) throw Error(o(327));
          ks();
          var t = dt(e, 0);
          if (0 === (1 & t)) return as(e, Je()), null;
          var n = ys(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = is(e, r)));
          }
          if (1 === n) throw ((n = jl), ps(e, 0), ls(e, t), as(e, Je()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            _s(e, Vl, Hl),
            as(e, Je()),
            null
          );
        }
        function cs(e, t) {
          var n = Nl;
          Nl |= 1;
          try {
            return e(t);
          } finally {
            0 === (Nl = n) && ((Wl = Je() + 500), Ia && Ba());
          }
        }
        function fs(e) {
          null !== Gl && 0 === Gl.tag && 0 === (6 & Nl) && ks();
          var t = Nl;
          Nl |= 1;
          var n = Cl.transition,
            r = bt;
          try {
            if (((Cl.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Cl.transition = n), 0 === (6 & (Nl = t)) && Ba();
          }
        }
        function ds() {
          (Pl = Dl.current), xa(Dl);
        }
        function ps(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ol))
            for (n = Ol.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Pa();
                  break;
                case 3:
                  oi(), xa(Na), xa(Ca), fi();
                  break;
                case 5:
                  ui(r);
                  break;
                case 4:
                  oi();
                  break;
                case 13:
                case 19:
                  xa(li);
                  break;
                case 10:
                  ko(r.type._context);
                  break;
                case 22:
                case 23:
                  ds();
              }
              n = n.return;
            }
          if (
            ((Ll = e),
            (Ol = e = Ds(e.current, null)),
            (Al = Pl = t),
            (Ml = 0),
            (jl = null),
            (Il = zl = Ul = 0),
            (Vl = Fl = null),
            null !== Ro)
          ) {
            for (t = 0; t < Ro.length; t++)
              if (null !== (r = (n = Ro[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var i = o.next;
                  (o.next = a), (r.next = i);
                }
                n.pending = r;
              }
            Ro = null;
          }
          return e;
        }
        function hs(e, t) {
          for (;;) {
            var n = Ol;
            try {
              if ((_o(), (di.current = iu), gi)) {
                for (var r = vi.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                gi = !1;
              }
              if (
                ((hi = 0),
                (yi = mi = vi = null),
                (bi = !1),
                (wi = 0),
                (Rl.current = null),
                null === n || null === n.return)
              ) {
                (Ml = 1), (jl = t), (Ol = null);
                break;
              }
              e: {
                var i = e,
                  u = n.return,
                  l = n,
                  s = t;
                if (
                  ((t = Al),
                  (l.flags |= 32768),
                  null !== s &&
                    "object" === typeof s &&
                    "function" === typeof s.then)
                ) {
                  var c = s,
                    f = l,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = yu(u);
                  if (null !== h) {
                    (h.flags &= -257),
                      gu(h, u, l, 0, t),
                      1 & h.mode && mu(i, c, t),
                      (s = c);
                    var v = (t = h).updateQueue;
                    if (null === v) {
                      var m = new Set();
                      m.add(s), (t.updateQueue = m);
                    } else v.add(s);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    mu(i, c, t), ms();
                    break e;
                  }
                  s = Error(o(426));
                } else if (ao && 1 & l.mode) {
                  var y = yu(u);
                  if (null !== y) {
                    0 === (65536 & y.flags) && (y.flags |= 256),
                      gu(y, u, l, 0, t),
                      vo(cu(s, l));
                    break e;
                  }
                }
                (i = s = cu(s, l)),
                  4 !== Ml && (Ml = 2),
                  null === Fl ? (Fl = [i]) : Fl.push(i),
                  (i = u);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Uo(i, hu(0, s, t));
                      break e;
                    case 1:
                      l = s;
                      var g = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof g.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === ql || !ql.has(b))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          Uo(i, vu(i, l, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              Ss(n);
            } catch (w) {
              (t = w), Ol === n && null !== n && (Ol = n = n.return);
              continue;
            }
            break;
          }
        }
        function vs() {
          var e = Tl.current;
          return (Tl.current = iu), null === e ? iu : e;
        }
        function ms() {
          (0 !== Ml && 3 !== Ml && 2 !== Ml) || (Ml = 4),
            null === Ll ||
              (0 === (268435455 & Ul) && 0 === (268435455 & zl)) ||
              ls(Ll, Al);
        }
        function ys(e, t) {
          var n = Nl;
          Nl |= 2;
          var r = vs();
          for ((Ll === e && Al === t) || ((Hl = null), ps(e, t)); ; )
            try {
              gs();
              break;
            } catch (a) {
              hs(e, a);
            }
          if ((_o(), (Nl = n), (Tl.current = r), null !== Ol))
            throw Error(o(261));
          return (Ll = null), (Al = 0), Ml;
        }
        function gs() {
          for (; null !== Ol; ) ws(Ol);
        }
        function bs() {
          for (; null !== Ol && !Ge(); ) ws(Ol);
        }
        function ws(e) {
          var t = El(e.alternate, e, Pl);
          (e.memoizedProps = e.pendingProps),
            null === t ? Ss(e) : (Ol = t),
            (Rl.current = null);
        }
        function Ss(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Qu(n, t, Pl))) return void (Ol = n);
            } else {
              if (null !== (n = Gu(n, t)))
                return (n.flags &= 32767), void (Ol = n);
              if (null === e) return (Ml = 6), void (Ol = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ol = t);
            Ol = t = e;
          } while (null !== t);
          0 === Ml && (Ml = 5);
        }
        function _s(e, t, n) {
          var r = bt,
            a = Cl.transition;
          try {
            (Cl.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  ks();
                } while (null !== Gl);
                if (0 !== (6 & Nl)) throw Error(o(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
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
                      var a = 31 - it(n),
                        o = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                    }
                  })(e, i),
                  e === Ll && ((Ol = Ll = null), (Al = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Ql ||
                    ((Ql = !0),
                    Ls(tt, function () {
                      return ks(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Cl.transition), (Cl.transition = null);
                  var u = bt;
                  bt = 1;
                  var l = Nl;
                  (Nl |= 4),
                    (Rl.current = null),
                    (function (e, t) {
                      if (((ea = Ht), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (S) {
                                n = null;
                                break e;
                              }
                              var u = 0,
                                l = -1,
                                s = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (l = u + a),
                                    d !== i ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (s = u + r),
                                    3 === d.nodeType &&
                                      (u += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === a && (l = u),
                                    p === i && ++f === r && (s = u),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === l || -1 === s
                                  ? null
                                  : { start: l, end: s };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Ht = !1,
                          Zu = t;
                        null !== Zu;

                      )
                        if (
                          ((e = (t = Zu).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Zu = e);
                        else
                          for (; null !== Zu; ) {
                            t = Zu;
                            try {
                              var v = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== v) {
                                      var m = v.memoizedProps,
                                        y = v.memoizedState,
                                        g = t.stateNode,
                                        b = g.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? m
                                            : yo(t.type, m),
                                          y
                                        );
                                      g.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (S) {
                              xs(t, t.return, S);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zu = e);
                              break;
                            }
                            Zu = t.return;
                          }
                      (v = nl), (nl = !1);
                    })(e, n),
                    yl(n, e),
                    hr(ta),
                    (Ht = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    bl(n, e, a),
                    Ye(),
                    (Nl = l),
                    (bt = u),
                    (Cl.transition = i);
                } else e.current = n;
                if (
                  (Ql && ((Ql = !1), (Gl = e), (Yl = a)),
                  (i = e.pendingLanes),
                  0 === i && (ql = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  as(e, Je()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if ($l) throw (($l = !1), (e = Kl), (Kl = null), e);
                0 !== (1 & Yl) && 0 !== e.tag && ks(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Xl
                      ? Jl++
                      : ((Jl = 0), (Xl = e))
                    : (Jl = 0),
                  Ba();
              })(e, t, n, r);
          } finally {
            (Cl.transition = a), (bt = r);
          }
          return null;
        }
        function ks() {
          if (null !== Gl) {
            var e = wt(Yl),
              t = Cl.transition,
              n = bt;
            try {
              if (((Cl.transition = null), (bt = 16 > e ? 16 : e), null === Gl))
                var r = !1;
              else {
                if (((e = Gl), (Gl = null), (Yl = 0), 0 !== (6 & Nl)))
                  throw Error(o(331));
                var a = Nl;
                for (Nl |= 4, Zu = e.current; null !== Zu; ) {
                  var i = Zu,
                    u = i.child;
                  if (0 !== (16 & Zu.flags)) {
                    var l = i.deletions;
                    if (null !== l) {
                      for (var s = 0; s < l.length; s++) {
                        var c = l[s];
                        for (Zu = c; null !== Zu; ) {
                          var f = Zu;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rl(8, f, i);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Zu = d);
                          else
                            for (; null !== Zu; ) {
                              var p = (f = Zu).sibling,
                                h = f.return;
                              if ((il(f), f === c)) {
                                Zu = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Zu = p);
                                break;
                              }
                              Zu = h;
                            }
                        }
                      }
                      var v = i.alternate;
                      if (null !== v) {
                        var m = v.child;
                        if (null !== m) {
                          v.child = null;
                          do {
                            var y = m.sibling;
                            (m.sibling = null), (m = y);
                          } while (null !== m);
                        }
                      }
                      Zu = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== u)
                    (u.return = i), (Zu = u);
                  else
                    e: for (; null !== Zu; ) {
                      if (0 !== (2048 & (i = Zu).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rl(9, i, i.return);
                        }
                      var g = i.sibling;
                      if (null !== g) {
                        (g.return = i.return), (Zu = g);
                        break e;
                      }
                      Zu = i.return;
                    }
                }
                var b = e.current;
                for (Zu = b; null !== Zu; ) {
                  var w = (u = Zu).child;
                  if (0 !== (2064 & u.subtreeFlags) && null !== w)
                    (w.return = u), (Zu = w);
                  else
                    e: for (u = b; null !== Zu; ) {
                      if (0 !== (2048 & (l = Zu).flags))
                        try {
                          switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                              al(9, l);
                          }
                        } catch (_) {
                          xs(l, l.return, _);
                        }
                      if (l === u) {
                        Zu = null;
                        break e;
                      }
                      var S = l.sibling;
                      if (null !== S) {
                        (S.return = l.return), (Zu = S);
                        break e;
                      }
                      Zu = l.return;
                    }
                }
                if (
                  ((Nl = a),
                  Ba(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (_) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Cl.transition = t);
            }
          }
          return !1;
        }
        function Es(e, t, n) {
          (e = Mo(e, (t = hu(0, (t = cu(n, t)), 1)), 1)),
            (t = ts()),
            null !== e && (yt(e, 1, t), as(e, t));
        }
        function xs(e, t, n) {
          if (3 === e.tag) Es(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Es(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === ql || !ql.has(r)))
                ) {
                  (t = Mo(t, (e = vu(t, (e = cu(n, e)), 1)), 1)),
                    (e = ts()),
                    null !== t && (yt(t, 1, e), as(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Ts(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = ts()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ll === e &&
              (Al & n) === n &&
              (4 === Ml ||
              (3 === Ml && (130023424 & Al) === Al && 500 > Je() - Bl)
                ? ps(e, 0)
                : (Il |= n)),
            as(e, t);
        }
        function Rs(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = ts();
          null !== (e = Lo(e, t)) && (yt(e, t, n), as(e, n));
        }
        function Cs(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Rs(e, n);
        }
        function Ns(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), Rs(e, n);
        }
        function Ls(e, t) {
          return qe(e, t);
        }
        function Os(e, t, n, r) {
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
        function As(e, t, n, r) {
          return new Os(e, t, n, r);
        }
        function Ps(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ds(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = As(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Ms(e, t, n, r, a, i) {
          var u = 2;
          if (((r = e), "function" === typeof e)) Ps(e) && (u = 1);
          else if ("string" === typeof e) u = 5;
          else
            e: switch (e) {
              case k:
                return js(n.children, a, i, t);
              case E:
                (u = 8), (a |= 8);
                break;
              case x:
                return (
                  ((e = As(12, n, t, 2 | a)).elementType = x), (e.lanes = i), e
                );
              case N:
                return (
                  ((e = As(13, n, t, a)).elementType = N), (e.lanes = i), e
                );
              case L:
                return (
                  ((e = As(19, n, t, a)).elementType = L), (e.lanes = i), e
                );
              case P:
                return Us(n, a, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case T:
                      u = 10;
                      break e;
                    case R:
                      u = 9;
                      break e;
                    case C:
                      u = 11;
                      break e;
                    case O:
                      u = 14;
                      break e;
                    case A:
                      (u = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = As(u, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function js(e, t, n, r) {
          return ((e = As(7, e, r, t)).lanes = n), e;
        }
        function Us(e, t, n, r) {
          return (
            ((e = As(22, e, r, t)).elementType = P),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function zs(e, t, n) {
          return ((e = As(6, e, null, t)).lanes = n), e;
        }
        function Is(e, t, n) {
          return (
            ((t = As(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Fs(e, t, n, r, a) {
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
            (this.eventTimes = mt(0)),
            (this.expirationTimes = mt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = mt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Vs(e, t, n, r, a, o, i, u, l) {
          return (
            (e = new Fs(e, t, n, u, l)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = As(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ao(o),
            e
          );
        }
        function Bs(e) {
          if (!e) return Ra;
          e: {
            if (Be((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Aa(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Aa(n)) return Ma(e, n, t);
          }
          return t;
        }
        function Ws(e, t, n, r, a, o, i, u, l) {
          return (
            ((e = Vs(n, r, !0, e, 0, o, 0, u, l)).context = Bs(null)),
            (n = e.current),
            ((o = Do((r = ts()), (a = ns(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Mo(n, o, a),
            (e.current.lanes = a),
            yt(e, a, r),
            as(e, r),
            e
          );
        }
        function Hs(e, t, n, r) {
          var a = t.current,
            o = ts(),
            i = ns(a);
          return (
            (n = Bs(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Do(o, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Mo(a, t, i)) && (rs(e, a, i, o), jo(e, a, i)),
            i
          );
        }
        function $s(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Ks(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function qs(e, t) {
          Ks(e, t), (e = e.alternate) && Ks(e, t);
        }
        El = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Na.current) wu = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (wu = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Lu(t), ho();
                        break;
                      case 5:
                        ii(t);
                        break;
                      case 1:
                        Aa(t.type) && ja(t);
                        break;
                      case 4:
                        ai(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ta(go, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ta(li, 1 & li.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? zu(e, t, n)
                            : (Ta(li, 1 & li.current),
                              null !== (e = $u(e, t, n)) ? e.sibling : null);
                        Ta(li, 1 & li.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Wu(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ta(li, li.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), xu(e, t, n);
                    }
                    return $u(e, t, n);
                  })(e, t, n)
                );
              wu = 0 !== (131072 & e.flags);
            }
          else (wu = !1), ao && 0 !== (1048576 & t.flags) && Za(t, Ka, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Hu(e, t), (e = t.pendingProps);
              var a = Oa(t, Ca.current);
              xo(t, n), (a = Ei(null, t, r, e, a, n));
              var i = xi();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Aa(r) ? ((i = !0), ja(t)) : (i = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Ao(t),
                    (a.updater = Bo),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Ko(t, r, e, n),
                    (t = Nu(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    ao && i && eo(t),
                    Su(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Hu(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Ps(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === C) return 11;
                        if (e === O) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = yo(r, e)),
                  a)
                ) {
                  case 0:
                    t = Ru(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Cu(null, t, r, e, n);
                    break e;
                  case 11:
                    t = _u(null, t, r, e, n);
                    break e;
                  case 14:
                    t = ku(null, t, r, yo(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ru(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Cu(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 3:
              e: {
                if ((Lu(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (a = (i = t.memoizedState).element),
                  Po(e, t),
                  zo(t, r, null, n);
                var u = t.memoizedState;
                if (((r = u.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: u.cache,
                      pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                      transitions: u.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Ou(e, t, r, n, (a = cu(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Ou(e, t, r, n, (a = cu(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = sa(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = Xo(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ho(), r === a)) {
                    t = $u(e, t, n);
                    break e;
                  }
                  Su(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ii(t),
                null === e && so(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (u = a.children),
                na(r, a)
                  ? (u = null)
                  : null !== i && na(r, i) && (t.flags |= 32),
                Tu(e, t),
                Su(e, t, u, n),
                t.child
              );
            case 6:
              return null === e && so(t), null;
            case 13:
              return zu(e, t, n);
            case 4:
              return (
                ai(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Jo(t, null, r, n)) : Su(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                _u(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 7:
              return Su(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Su(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (i = t.memoizedProps),
                  (u = a.value),
                  Ta(go, r._currentValue),
                  (r._currentValue = u),
                  null !== i)
                )
                  if (ur(i.value, u)) {
                    if (i.children === a.children && !Na.current) {
                      t = $u(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var l = i.dependencies;
                      if (null !== l) {
                        u = i.child;
                        for (var s = l.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === i.tag) {
                              (s = Do(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (s.next = s)
                                  : ((s.next = f.next), (f.next = s)),
                                  (c.pending = s);
                              }
                            }
                            (i.lanes |= n),
                              null !== (s = i.alternate) && (s.lanes |= n),
                              Eo(i.return, n, t),
                              (l.lanes |= n);
                            break;
                          }
                          s = s.next;
                        }
                      } else if (10 === i.tag)
                        u = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (u = i.return)) throw Error(o(341));
                        (u.lanes |= n),
                          null !== (l = u.alternate) && (l.lanes |= n),
                          Eo(u, n, t),
                          (u = i.sibling);
                      } else u = i.child;
                      if (null !== u) u.return = i;
                      else
                        for (u = i; null !== u; ) {
                          if (u === t) {
                            u = null;
                            break;
                          }
                          if (null !== (i = u.sibling)) {
                            (i.return = u.return), (u = i);
                            break;
                          }
                          u = u.return;
                        }
                      i = u;
                    }
                Su(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                xo(t, n),
                (r = r((a = To(a)))),
                (t.flags |= 1),
                Su(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = yo((r = t.type), t.pendingProps)),
                ku(e, t, r, (a = yo(r.type, a)), n)
              );
            case 15:
              return Eu(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : yo(r, a)),
                Hu(e, t),
                (t.tag = 1),
                Aa(r) ? ((e = !0), ja(t)) : (e = !1),
                xo(t, n),
                Ho(t, r, a),
                Ko(t, r, a, n),
                Nu(null, t, r, !0, e, n)
              );
            case 19:
              return Wu(e, t, n);
            case 22:
              return xu(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var Qs =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Gs(e) {
          this._internalRoot = e;
        }
        function Ys(e) {
          this._internalRoot = e;
        }
        function Js(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Xs(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zs() {}
        function ec(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var i = o;
            if ("function" === typeof a) {
              var u = a;
              a = function () {
                var e = $s(i);
                u.call(e);
              };
            }
            Hs(t, i, e, a);
          } else
            i = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = $s(i);
                    o.call(e);
                  };
                }
                var i = Ws(t, r, e, 0, null, !1, 0, "", Zs);
                return (
                  (e._reactRootContainer = i),
                  (e[ha] = i.current),
                  Br(8 === e.nodeType ? e.parentNode : e),
                  fs(),
                  i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var u = r;
                r = function () {
                  var e = $s(l);
                  u.call(e);
                };
              }
              var l = Vs(e, 0, !1, null, 0, !1, 0, "", Zs);
              return (
                (e._reactRootContainer = l),
                (e[ha] = l.current),
                Br(8 === e.nodeType ? e.parentNode : e),
                fs(function () {
                  Hs(t, l, n, r);
                }),
                l
              );
            })(n, t, e, a, r);
          return $s(i);
        }
        (Ys.prototype.render = Gs.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Hs(e, t, null, null);
          }),
          (Ys.prototype.unmount = Gs.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                fs(function () {
                  Hs(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Ys.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Pt.length && 0 !== t && t < Pt[n].priority;
                n++
              );
              Pt.splice(n, 0, e), 0 === n && Ut(e);
            }
          }),
          (St = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (gt(t, 1 | n),
                    as(t, Je()),
                    0 === (6 & Nl) && ((Wl = Je() + 500), Ba()));
                }
                break;
              case 13:
                fs(function () {
                  var t = Lo(e, 1);
                  if (null !== t) {
                    var n = ts();
                    rs(t, e, 1, n);
                  }
                }),
                  qs(e, 1);
            }
          }),
          (_t = function (e) {
            if (13 === e.tag) {
              var t = Lo(e, 134217728);
              if (null !== t) rs(t, e, 134217728, ts());
              qs(e, 134217728);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = ns(e),
                n = Lo(e, t);
              if (null !== n) rs(n, e, t, ts());
              qs(e, t);
            }
          }),
          (Et = function () {
            return bt;
          }),
          (xt = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (_e = function (e, t, n) {
            switch (t) {
              case "input":
                if ((X(e, n), (t = n.name), "radio" === n.type && null != t)) {
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
                      var a = Sa(r);
                      if (!a) throw Error(o(90));
                      q(r), X(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Ce = cs),
          (Ne = fs);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, Sa, Te, Re, cs],
          },
          nc = {
            findFiberByHostInstance: ga,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = $e(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (ot = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Js(t)) throw Error(o(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: _,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Js(e)) throw Error(o(299));
            var n = !1,
              r = "",
              a = Qs;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Vs(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Br(8 === e.nodeType ? e.parentNode : e),
              new Gs(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = $e(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return fs(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Xs(t)) throw Error(o(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Js(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              i = "",
              u = Qs;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (u = n.onRecoverableError)),
              (t = Ws(t, null, e, 1, null != n ? n : null, a, 0, i, u)),
              (e[ha] = t.current),
              Br(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Ys(t);
          }),
          (t.render = function (e, t, n) {
            if (!Xs(t)) throw Error(o(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Xs(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (fs(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cs),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Xs(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        "use strict";
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          u =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, t, n) {
          var r,
            o = {},
            s = null,
            c = null;
          for (r in (void 0 !== n && (s = "" + n),
          void 0 !== t.key && (s = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !l.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: s,
            ref: c,
            props: o,
            _owner: u.current,
          };
        }
        (t.jsx = s), (t.jsxs = s);
      },
      117: function (e, t) {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          u = Symbol.for("react.provider"),
          l = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = Object.assign,
          m = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        function g() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (g.prototype = y.prototype);
        var w = (b.prototype = new g());
        (w.constructor = b), v(w, y.prototype), (w.isPureReactComponent = !0);
        var S = Array.isArray,
          _ = Object.prototype.hasOwnProperty,
          k = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function x(e, t, r) {
          var a,
            o = {},
            i = null,
            u = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (u = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              _.call(t, a) && !E.hasOwnProperty(a) && (o[a] = t[a]);
          var l = arguments.length - 2;
          if (1 === l) o.children = r;
          else if (1 < l) {
            for (var s = Array(l), c = 0; c < l; c++) s[c] = arguments[c + 2];
            o.children = s;
          }
          if (e && e.defaultProps)
            for (a in (l = e.defaultProps)) void 0 === o[a] && (o[a] = l[a]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: u,
            props: o,
            _owner: k.current,
          };
        }
        function T(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var R = /\/+/g;
        function C(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function N(e, t, a, o, i) {
          var u = typeof e;
          ("undefined" !== u && "boolean" !== u) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (u) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    l = !0;
                }
            }
          if (l)
            return (
              (i = i((l = e))),
              (e = "" === o ? "." + C(l, 0) : o),
              S(i)
                ? ((a = ""),
                  null != e && (a = e.replace(R, "$&/") + "/"),
                  N(i, t, a, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (T(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      a +
                        (!i.key || (l && l.key === i.key)
                          ? ""
                          : ("" + i.key).replace(R, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((l = 0), (o = "" === o ? "." : o + ":"), S(e)))
            for (var s = 0; s < e.length; s++) {
              var c = o + C((u = e[s]), s);
              l += N(u, t, a, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), s = 0; !(u = e.next()).done; )
              l += N((u = u.value), t, a, (c = o + C(u, s++)), i);
          else if ("object" === u)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return l;
        }
        function L(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            N(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function O(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var A = { current: null },
          P = { transition: null },
          D = {
            ReactCurrentDispatcher: A,
            ReactCurrentBatchConfig: P,
            ReactCurrentOwner: k,
          };
        (t.Children = {
          map: L,
          forEach: function (e, t, n) {
            L(
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
              L(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              L(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!T(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = a),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = v({}, e.props),
              o = e.key,
              i = e.ref,
              u = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (u = k.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var l = e.type.defaultProps;
              for (s in t)
                _.call(t, s) &&
                  !E.hasOwnProperty(s) &&
                  (a[s] = void 0 === t[s] && void 0 !== l ? l[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) a.children = r;
            else if (1 < s) {
              l = Array(s);
              for (var c = 0; c < s; c++) l[c] = arguments[c + 2];
              a.children = l;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: i,
              props: a,
              _owner: u,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: l,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: u, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = x),
          (t.createFactory = function (e) {
            var t = x.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = T),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: O,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = P.transition;
            P.transition = {};
            try {
              e();
            } finally {
              P.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return A.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return A.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return A.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return A.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return A.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return A.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return A.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return A.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return A.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return A.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return A.current.useRef(e);
          }),
          (t.useState = function (e) {
            return A.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return A.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return A.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        "use strict";
        e.exports = n(117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(374);
      },
      813: function (e, t) {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var u = 2 * (r + 1) - 1,
                l = e[u],
                s = u + 1,
                c = e[s];
              if (0 > o(l, n))
                s < a && 0 > o(c, l)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = l), (e[u] = n), (r = u));
              else {
                if (!(s < a && 0 > o(c, n))) break e;
                (e[r] = c), (e[s] = n), (r = s);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var u = Date,
            l = u.now();
          t.unstable_now = function () {
            return u.now() - l;
          };
        }
        var s = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          v = !1,
          m = !1,
          y = "function" === typeof setTimeout ? setTimeout : null,
          g = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(s, t);
            }
            t = r(c);
          }
        }
        function S(e) {
          if (((m = !1), w(e), !v))
            if (null !== r(s)) (v = !0), P(_);
            else {
              var t = r(c);
              null !== t && D(S, t.startTime - e);
            }
        }
        function _(e, n) {
          (v = !1), m && ((m = !1), g(T), (T = -1)), (h = !0);
          var o = p;
          try {
            for (
              w(n), d = r(s);
              null !== d && (!(d.expirationTime > n) || (e && !N()));

            ) {
              var i = d.callback;
              if ("function" === typeof i) {
                (d.callback = null), (p = d.priorityLevel);
                var u = i(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof u
                    ? (d.callback = u)
                    : d === r(s) && a(s),
                  w(n);
              } else a(s);
              d = r(s);
            }
            if (null !== d) var l = !0;
            else {
              var f = r(c);
              null !== f && D(S, f.startTime - n), (l = !1);
            }
            return l;
          } finally {
            (d = null), (p = o), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k,
          E = !1,
          x = null,
          T = -1,
          R = 5,
          C = -1;
        function N() {
          return !(t.unstable_now() - C < R);
        }
        function L() {
          if (null !== x) {
            var e = t.unstable_now();
            C = e;
            var n = !0;
            try {
              n = x(!0, e);
            } finally {
              n ? k() : ((E = !1), (x = null));
            }
          } else E = !1;
        }
        if ("function" === typeof b)
          k = function () {
            b(L);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var O = new MessageChannel(),
            A = O.port2;
          (O.port1.onmessage = L),
            (k = function () {
              A.postMessage(null);
            });
        } else
          k = function () {
            y(L, 0);
          };
        function P(e) {
          (x = e), E || ((E = !0), k());
        }
        function D(e, n) {
          T = y(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            v || h || ((v = !0), P(_));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (R = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(s);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? i + o : i)
                : (o = i),
              e)
            ) {
              case 1:
                var u = -1;
                break;
              case 2:
                u = 250;
                break;
              case 5:
                u = 1073741823;
                break;
              case 4:
                u = 1e4;
                break;
              default:
                u = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (u = o + u),
                sortIndex: -1,
              }),
              o > i
                ? ((e.sortIndex = o),
                  n(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (m ? (g(T), (T = -1)) : (m = !0), D(S, o - i)))
                : ((e.sortIndex = u), n(s, e), v || h || ((v = !0), P(_))),
              e
            );
          }),
          (t.unstable_shouldYield = N),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        "use strict";
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (function () {
      var e,
        t = Object.getPrototypeOf
          ? function (e) {
              return Object.getPrototypeOf(e);
            }
          : function (e) {
              return e.__proto__;
            };
      n.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r;
        if ("object" === typeof r && r) {
          if (4 & a && r.__esModule) return r;
          if (16 & a && "function" === typeof r.then) return r;
        }
        var o = Object.create(null);
        n.r(o);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var u = 2 & a && r;
          "object" == typeof u && !~e.indexOf(u);
          u = t(u)
        )
          Object.getOwnPropertyNames(u).forEach(function (e) {
            i[e] = function () {
              return r[e];
            };
          });
        return (
          (i.default = function () {
            return r;
          }),
          n.d(o, i),
          o
        );
      };
    })(),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (function () {
      "use strict";
      var e,
        t = n(791),
        r = n.t(t, 2),
        a = n(250);
      function o(e) {
        if (Array.isArray(e)) return e;
      }
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function u(e, t) {
        if (e) {
          if ("string" === typeof e) return i(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? i(e, t)
              : void 0
          );
        }
      }
      function l() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function s(e, t) {
        return (
          o(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                o,
                i,
                u = [],
                l = !0,
                s = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = o.call(n)).done) &&
                    (u.push(r.value), u.length !== t);
                    l = !0
                  );
              } catch (c) {
                (s = !0), (a = c);
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return u;
            }
          })(e, t) ||
          u(e, t) ||
          l()
        );
      }
      function c(e) {
        if (
          ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }
      function f(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return i(e);
          })(e) ||
          c(e) ||
          u(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function d(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function p(e) {
        return (
          (p =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          p(e)
        );
      }
      function h(e) {
        var t = (function (e, t) {
          if ("object" !== p(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== p(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === p(t) ? t : String(t);
      }
      function v(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, h(r.key), r);
        }
      }
      function m(e, t, n) {
        return (
          t && v(e.prototype, t),
          n && v(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function y(e, t) {
        return (
          (y = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          y(e, t)
        );
      }
      function g(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && y(e, t);
      }
      function b(e) {
        return (
          (b = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          b(e)
        );
      }
      function w() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function S(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function _(e) {
        var t = w();
        return function () {
          var n,
            r = b(e);
          if (t) {
            var a = b(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === p(t) || "function" === typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            return S(e);
          })(this, n);
        };
      }
      function k(e, t, n) {
        return (
          (k = w()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var a = new (Function.bind.apply(e, r))();
                return n && y(a, n.prototype), a;
              }),
          k.apply(null, arguments)
        );
      }
      function E(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (E = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return k(e, arguments, b(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              y(r, e)
            );
          }),
          E(e)
        );
      }
      function x(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = u(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          i = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (i = e.done), e;
          },
          e: function (e) {
            (l = !0), (o = e);
          },
          f: function () {
            try {
              i || null == n.return || n.return();
            } finally {
              if (l) throw o;
            }
          },
        };
      }
      function T() {
        return (
          (T = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          T.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(e || (e = {}));
      var R,
        C = "popstate";
      function N(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function L(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function O(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          T(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? P(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function A(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          a = void 0 === r ? "" : r,
          o = e.hash,
          i = void 0 === o ? "" : o;
        return (
          a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a),
          i && "#" !== i && (n += "#" === i.charAt(0) ? i : "#" + i),
          n
        );
      }
      function P(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function D(t, n, r, a) {
        void 0 === a && (a = {});
        var o = a,
          i = o.window,
          u = void 0 === i ? document.defaultView : i,
          l = o.v5Compat,
          s = void 0 !== l && l,
          c = u.history,
          f = e.Pop,
          d = null,
          p = h();
        function h() {
          return (c.state || { idx: null }).idx;
        }
        function v() {
          f = e.Pop;
          var t = h(),
            n = null == t ? null : t - p;
          (p = t), d && d({ action: f, location: y.location, delta: n });
        }
        function m(e) {
          var t =
              "null" !== u.location.origin
                ? u.location.origin
                : u.location.href,
            n = "string" === typeof e ? e : A(e);
          return (
            N(
              t,
              "No window.location.(origin|href) available to create URL for href: " +
                n
            ),
            new URL(n, t)
          );
        }
        null == p && ((p = 0), c.replaceState(T({}, c.state, { idx: p }), ""));
        var y = {
          get action() {
            return f;
          },
          get location() {
            return t(u, c);
          },
          listen: function (e) {
            if (d)
              throw new Error("A history only accepts one active listener");
            return (
              u.addEventListener(C, v),
              (d = e),
              function () {
                u.removeEventListener(C, v), (d = null);
              }
            );
          },
          createHref: function (e) {
            return n(u, e);
          },
          createURL: m,
          encodeLocation: function (e) {
            var t = m(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (t, n) {
            f = e.Push;
            var a = O(y.location, t, n);
            r && r(a, t);
            var o = L(a, (p = h() + 1)),
              i = y.createHref(a);
            try {
              c.pushState(o, "", i);
            } catch (l) {
              u.location.assign(i);
            }
            s && d && d({ action: f, location: y.location, delta: 1 });
          },
          replace: function (t, n) {
            f = e.Replace;
            var a = O(y.location, t, n);
            r && r(a, t);
            var o = L(a, (p = h())),
              i = y.createHref(a);
            c.replaceState(o, "", i),
              s && d && d({ action: f, location: y.location, delta: 0 });
          },
          go: function (e) {
            return c.go(e);
          },
        };
        return y;
      }
      function M(e, t, n) {
        void 0 === n && (n = "/");
        var r = G(("string" === typeof t ? P(t) : t).pathname || "/", n);
        if (null == r) return null;
        var a = j(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var n =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, n) {
                      return e === t[n];
                    });
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  })
                );
          });
        })(a);
        for (var o = null, i = 0; null == o && i < a.length; ++i)
          o = K(a[i], Q(r));
        return o;
      }
      function j(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = "");
        var a = function (e, a, o) {
          var i = {
            relativePath: void 0 === o ? e.path || "" : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          };
          i.relativePath.startsWith("/") &&
            (N(
              i.relativePath.startsWith(r),
              'Absolute route path "' +
                i.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
            ),
            (i.relativePath = i.relativePath.slice(r.length)));
          var u = ee([r, i.relativePath]),
            l = n.concat(i);
          e.children &&
            e.children.length > 0 &&
            (N(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                u +
                '".'
            ),
            j(e.children, t, l, u)),
            (null != e.path || e.index) &&
              t.push({ path: u, score: $(u, e.index), routesMeta: l });
        };
        return (
          e.forEach(function (e, t) {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?")) {
              var r,
                o = x(U(e.path));
              try {
                for (o.s(); !(r = o.n()).done; ) {
                  var i = r.value;
                  a(e, t, i);
                }
              } catch (u) {
                o.e(u);
              } finally {
                o.f();
              }
            } else a(e, t);
          }),
          t
        );
      }
      function U(e) {
        var t = e.split("/");
        if (0 === t.length) return [];
        var n,
          r = o((n = t)) || c(n) || u(n) || l(),
          a = r[0],
          i = r.slice(1),
          s = a.endsWith("?"),
          d = a.replace(/\?$/, "");
        if (0 === i.length) return s ? [d, ""] : [d];
        var p = U(i.join("/")),
          h = [];
        return (
          h.push.apply(
            h,
            f(
              p.map(function (e) {
                return "" === e ? d : [d, e].join("/");
              })
            )
          ),
          s && h.push.apply(h, f(p)),
          h.map(function (t) {
            return e.startsWith("/") && "" === t ? "/" : t;
          })
        );
      }
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(R || (R = {}));
      var z = /^:\w+$/,
        I = 3,
        F = 2,
        V = 1,
        B = 10,
        W = -2,
        H = function (e) {
          return "*" === e;
        };
      function $(e, t) {
        var n = e.split("/"),
          r = n.length;
        return (
          n.some(H) && (r += W),
          t && (r += F),
          n
            .filter(function (e) {
              return !H(e);
            })
            .reduce(function (e, t) {
              return e + (z.test(t) ? I : "" === t ? V : B);
            }, r)
        );
      }
      function K(e, t) {
        for (
          var n = e.routesMeta, r = {}, a = "/", o = [], i = 0;
          i < n.length;
          ++i
        ) {
          var u = n[i],
            l = i === n.length - 1,
            s = "/" === a ? t : t.slice(a.length) || "/",
            c = q(
              { path: u.relativePath, caseSensitive: u.caseSensitive, end: l },
              s
            );
          if (!c) return null;
          Object.assign(r, c.params);
          var f = u.route;
          o.push({
            params: r,
            pathname: ee([a, c.pathname]),
            pathnameBase: te(ee([a, c.pathnameBase])),
            route: f,
          }),
            "/" !== c.pathnameBase && (a = ee([a, c.pathnameBase]));
        }
        return o;
      }
      function q(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            Y(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".'
            );
            var r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/\/:(\w+)/g, function (e, t) {
                    return r.push(t), "/([^\\/]+)";
                  });
            e.endsWith("*")
              ? (r.push("*"),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
              ? (a += "\\/*$")
              : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            var o = new RegExp(a, t ? void 0 : "i");
            return [o, r];
          })(e.path, e.caseSensitive, e.end),
          r = s(n, 2),
          a = r[0],
          o = r[1],
          i = t.match(a);
        if (!i) return null;
        var u = i[0],
          l = u.replace(/(.)\/+$/, "$1"),
          c = i.slice(1);
        return {
          params: o.reduce(function (e, t, n) {
            if ("*" === t) {
              var r = c[n] || "";
              l = u.slice(0, u.length - r.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return (
                    Y(
                      !1,
                      'The value for the URL param "' +
                        t +
                        '" will not be decoded because the string "' +
                        e +
                        '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                        n +
                        ")."
                    ),
                    e
                  );
                }
              })(c[n] || "", t)),
              e
            );
          }, {}),
          pathname: u,
          pathnameBase: l,
          pattern: e,
        };
      }
      function Q(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            Y(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ")."
            ),
            e
          );
        }
      }
      function G(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function Y(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function J(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function X(e) {
        return e.filter(function (e, t) {
          return 0 === t || (e.route.path && e.route.path.length > 0);
        });
      }
      function Z(e, t, n, r) {
        var a;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (a = P(e))
            : (N(
                !(a = T({}, e)).pathname || !a.pathname.includes("?"),
                J("?", "pathname", "search", a)
              ),
              N(
                !a.pathname || !a.pathname.includes("#"),
                J("#", "pathname", "hash", a)
              ),
              N(
                !a.search || !a.search.includes("#"),
                J("#", "search", "hash", a)
              ));
        var o,
          i = "" === e || "" === a.pathname,
          u = i ? "/" : a.pathname;
        if (r || null == u) o = n;
        else {
          var l = t.length - 1;
          if (u.startsWith("..")) {
            for (var s = u.split("/"); ".." === s[0]; ) s.shift(), (l -= 1);
            a.pathname = s.join("/");
          }
          o = l >= 0 ? t[l] : "/";
        }
        var c = (function (e, t) {
            void 0 === t && (t = "/");
            var n = "string" === typeof e ? P(e) : e,
              r = n.pathname,
              a = n.search,
              o = void 0 === a ? "" : a,
              i = n.hash,
              u = void 0 === i ? "" : i,
              l = r
                ? r.startsWith("/")
                  ? r
                  : (function (e, t) {
                      var n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach(function (e) {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(r, t)
                : t;
            return { pathname: l, search: ne(o), hash: re(u) };
          })(a, o),
          f = u && "/" !== u && u.endsWith("/"),
          d = (i || "." === u) && n.endsWith("/");
        return c.pathname.endsWith("/") || (!f && !d) || (c.pathname += "/"), c;
      }
      var ee = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        te = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        ne = function (e) {
          return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
        },
        re = function (e) {
          return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
        },
        ae = (function (e) {
          g(n, e);
          var t = _(n);
          function n() {
            return d(this, n), t.apply(this, arguments);
          }
          return m(n);
        })(E(Error));
      function oe(e) {
        return (
          null != e &&
          "number" === typeof e.status &&
          "string" === typeof e.statusText &&
          "boolean" === typeof e.internal &&
          "data" in e
        );
      }
      var ie = ["post", "put", "patch", "delete"],
        ue = (new Set(ie), ["get"].concat(ie));
      new Set(ue),
        new Set([301, 302, 303, 307, 308]),
        new Set([307, 308]),
        "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          window.document.createElement;
      Symbol("deferred");
      function le() {
        return (
          (le = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          le.apply(this, arguments)
        );
      }
      var se =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              },
        ce = t.useState,
        fe = t.useEffect,
        de = t.useLayoutEffect,
        pe = t.useDebugValue;
      function he(e) {
        var t = e.getSnapshot,
          n = e.value;
        try {
          var r = t();
          return !se(n, r);
        } catch (a) {
          return !0;
        }
      }
      "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        window.document.createElement,
        r.useSyncExternalStore;
      var ve = t.createContext(null);
      var me = t.createContext(null);
      var ye = t.createContext(null);
      var ge = t.createContext(null);
      var be = t.createContext(null);
      var we = t.createContext({ outlet: null, matches: [] });
      var Se = t.createContext(null);
      function _e() {
        return null != t.useContext(be);
      }
      function ke() {
        return _e() || N(!1), t.useContext(be).location;
      }
      function Ee() {
        _e() || N(!1);
        var e = t.useContext(ge),
          n = e.basename,
          r = e.navigator,
          a = t.useContext(we).matches,
          o = ke().pathname,
          i = JSON.stringify(
            X(a).map(function (e) {
              return e.pathnameBase;
            })
          ),
          u = t.useRef(!1);
        return (
          t.useEffect(function () {
            u.current = !0;
          }),
          t.useCallback(
            function (e, t) {
              if ((void 0 === t && (t = {}), u.current))
                if ("number" !== typeof e) {
                  var a = Z(e, JSON.parse(i), o, "path" === t.relative);
                  "/" !== n &&
                    (a.pathname = "/" === a.pathname ? n : ee([n, a.pathname])),
                    (t.replace ? r.replace : r.push)(a, t.state, t);
                } else r.go(e);
            },
            [n, r, i, o]
          )
        );
      }
      function xe() {
        var e = t.useContext(we).matches,
          n = e[e.length - 1];
        return n ? n.params : {};
      }
      function Te(e, n) {
        var r = (void 0 === n ? {} : n).relative,
          a = t.useContext(we).matches,
          o = ke().pathname,
          i = JSON.stringify(
            X(a).map(function (e) {
              return e.pathnameBase;
            })
          );
        return t.useMemo(
          function () {
            return Z(e, JSON.parse(i), o, "path" === r);
          },
          [e, i, o, r]
        );
      }
      function Re() {
        var e = (function () {
            var e,
              n = t.useContext(Se),
              r = Pe(Ne.UseRouteError),
              a = De(Ne.UseRouteError);
            if (n) return n;
            return null == (e = r.errors) ? void 0 : e[a];
          })(),
          n = oe(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          a = "rgba(200,200,200, 0.5)",
          o = { padding: "0.5rem", backgroundColor: a };
        return t.createElement(
          t.Fragment,
          null,
          t.createElement("h2", null, "Unexpected Application Error!"),
          t.createElement("h3", { style: { fontStyle: "italic" } }, n),
          r ? t.createElement("pre", { style: o }, r) : null,
          null
        );
      }
      var Ce,
        Ne,
        Le = (function (e) {
          g(r, e);
          var n = _(r);
          function r(e) {
            var t;
            return (
              d(this, r),
              ((t = n.call(this, e)).state = {
                location: e.location,
                error: e.error,
              }),
              t
            );
          }
          return (
            m(
              r,
              [
                {
                  key: "componentDidCatch",
                  value: function (e, t) {
                    console.error(
                      "React Router caught the following error during render",
                      e,
                      t
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return this.state.error
                      ? t.createElement(
                          we.Provider,
                          { value: this.props.routeContext },
                          t.createElement(Se.Provider, {
                            value: this.state.error,
                            children: this.props.component,
                          })
                        )
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function (e) {
                    return { error: e };
                  },
                },
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    return t.location !== e.location
                      ? { error: e.error, location: e.location }
                      : { error: e.error || t.error, location: t.location };
                  },
                },
              ]
            ),
            r
          );
        })(t.Component);
      function Oe(e) {
        var n = e.routeContext,
          r = e.match,
          a = e.children,
          o = t.useContext(ve);
        return (
          o &&
            o.static &&
            o.staticContext &&
            r.route.errorElement &&
            (o.staticContext._deepestRenderedBoundaryId = r.route.id),
          t.createElement(we.Provider, { value: n }, a)
        );
      }
      function Ae(e, n, r) {
        if ((void 0 === n && (n = []), null == e)) {
          if (null == r || !r.errors) return null;
          e = r.matches;
        }
        var a = e,
          o = null == r ? void 0 : r.errors;
        if (null != o) {
          var i = a.findIndex(function (e) {
            return e.route.id && (null == o ? void 0 : o[e.route.id]);
          });
          i >= 0 || N(!1), (a = a.slice(0, Math.min(a.length, i + 1)));
        }
        return a.reduceRight(function (e, i, u) {
          var l = i.route.id ? (null == o ? void 0 : o[i.route.id]) : null,
            s = r ? i.route.errorElement || t.createElement(Re, null) : null,
            c = n.concat(a.slice(0, u + 1)),
            f = function () {
              return t.createElement(
                Oe,
                { match: i, routeContext: { outlet: e, matches: c } },
                l ? s : void 0 !== i.route.element ? i.route.element : e
              );
            };
          return r && (i.route.errorElement || 0 === u)
            ? t.createElement(Le, {
                location: r.location,
                component: s,
                error: l,
                children: f(),
                routeContext: { outlet: null, matches: c },
              })
            : f();
        }, null);
      }
      function Pe(e) {
        var n = t.useContext(me);
        return n || N(!1), n;
      }
      function De(e) {
        var n = (function (e) {
            var n = t.useContext(we);
            return n || N(!1), n;
          })(),
          r = n.matches[n.matches.length - 1];
        return r.route.id || N(!1), r.route.id;
      }
      !(function (e) {
        (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
      })(Ce || (Ce = {})),
        (function (e) {
          (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator");
        })(Ne || (Ne = {}));
      var Me;
      function je(e) {
        N(!1);
      }
      function Ue(n) {
        var r = n.basename,
          a = void 0 === r ? "/" : r,
          o = n.children,
          i = void 0 === o ? null : o,
          u = n.location,
          l = n.navigationType,
          s = void 0 === l ? e.Pop : l,
          c = n.navigator,
          f = n.static,
          d = void 0 !== f && f;
        _e() && N(!1);
        var p = a.replace(/^\/*/, "/"),
          h = t.useMemo(
            function () {
              return { basename: p, navigator: c, static: d };
            },
            [p, c, d]
          );
        "string" === typeof u && (u = P(u));
        var v = u,
          m = v.pathname,
          y = void 0 === m ? "/" : m,
          g = v.search,
          b = void 0 === g ? "" : g,
          w = v.hash,
          S = void 0 === w ? "" : w,
          _ = v.state,
          k = void 0 === _ ? null : _,
          E = v.key,
          x = void 0 === E ? "default" : E,
          T = t.useMemo(
            function () {
              var e = G(y, p);
              return null == e
                ? null
                : { pathname: e, search: b, hash: S, state: k, key: x };
            },
            [p, y, b, S, k, x]
          );
        return null == T
          ? null
          : t.createElement(
              ge.Provider,
              { value: h },
              t.createElement(be.Provider, {
                children: i,
                value: { location: T, navigationType: s },
              })
            );
      }
      function ze(n) {
        var r = n.children,
          a = n.location,
          o = t.useContext(ve);
        return (function (n, r) {
          _e() || N(!1);
          var a,
            o = t.useContext(ge).navigator,
            i = t.useContext(me),
            u = t.useContext(we).matches,
            l = u[u.length - 1],
            s = l ? l.params : {},
            c = (l && l.pathname, l ? l.pathnameBase : "/"),
            f = (l && l.route, ke());
          if (r) {
            var d,
              p = "string" === typeof r ? P(r) : r;
            "/" === c ||
              (null == (d = p.pathname) ? void 0 : d.startsWith(c)) ||
              N(!1),
              (a = p);
          } else a = f;
          var h = a.pathname || "/",
            v = M(n, { pathname: "/" === c ? h : h.slice(c.length) || "/" }),
            m = Ae(
              v &&
                v.map(function (e) {
                  return Object.assign({}, e, {
                    params: Object.assign({}, s, e.params),
                    pathname: ee([
                      c,
                      o.encodeLocation
                        ? o.encodeLocation(e.pathname).pathname
                        : e.pathname,
                    ]),
                    pathnameBase:
                      "/" === e.pathnameBase
                        ? c
                        : ee([
                            c,
                            o.encodeLocation
                              ? o.encodeLocation(e.pathnameBase).pathname
                              : e.pathnameBase,
                          ]),
                  });
                }),
              u,
              i || void 0
            );
          return r && m
            ? t.createElement(
                be.Provider,
                {
                  value: {
                    location: le(
                      {
                        pathname: "/",
                        search: "",
                        hash: "",
                        state: null,
                        key: "default",
                      },
                      a
                    ),
                    navigationType: e.Pop,
                  },
                },
                m
              )
            : m;
        })(o && !r ? o.router.routes : Fe(r), a);
      }
      !(function (e) {
        (e[(e.pending = 0)] = "pending"),
          (e[(e.success = 1)] = "success"),
          (e[(e.error = 2)] = "error");
      })(Me || (Me = {}));
      var Ie = new Promise(function () {});
      t.Component;
      function Fe(e, n) {
        void 0 === n && (n = []);
        var r = [];
        return (
          t.Children.forEach(e, function (e, a) {
            if (t.isValidElement(e))
              if (e.type !== t.Fragment) {
                e.type !== je && N(!1),
                  e.props.index && e.props.children && N(!1);
                var o = [].concat(f(n), [a]),
                  i = {
                    id: e.props.id || o.join("-"),
                    caseSensitive: e.props.caseSensitive,
                    element: e.props.element,
                    index: e.props.index,
                    path: e.props.path,
                    loader: e.props.loader,
                    action: e.props.action,
                    errorElement: e.props.errorElement,
                    hasErrorBoundary: null != e.props.errorElement,
                    shouldRevalidate: e.props.shouldRevalidate,
                    handle: e.props.handle,
                  };
                e.props.children && (i.children = Fe(e.props.children, o)),
                  r.push(i);
              } else r.push.apply(r, Fe(e.props.children, n));
          }),
          r
        );
      }
      function Ve() {
        return (
          (Ve = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Ve.apply(this, arguments)
        );
      }
      function Be(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      var We = [
        "onClick",
        "relative",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
        "preventScrollReset",
      ];
      function He(e) {
        var n,
          r = e.basename,
          a = e.children,
          o = e.window,
          i = t.useRef();
        null == i.current &&
          (i.current =
            (void 0 === (n = { window: o, v5Compat: !0 }) && (n = {}),
            D(
              function (e, t) {
                var n = e.location;
                return O(
                  "",
                  { pathname: n.pathname, search: n.search, hash: n.hash },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default"
                );
              },
              function (e, t) {
                return "string" === typeof t ? t : A(t);
              },
              null,
              n
            )));
        var u = i.current,
          l = s(t.useState({ action: u.action, location: u.location }), 2),
          c = l[0],
          f = l[1];
        return (
          t.useLayoutEffect(
            function () {
              return u.listen(f);
            },
            [u]
          ),
          t.createElement(Ue, {
            basename: r,
            children: a,
            location: c.location,
            navigationType: c.action,
            navigator: u,
          })
        );
      }
      var $e =
          "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          "undefined" !== typeof window.document.createElement,
        Ke = t.forwardRef(function (e, n) {
          var r,
            a = e.onClick,
            o = e.relative,
            i = e.reloadDocument,
            u = e.replace,
            l = e.state,
            s = e.target,
            c = e.to,
            f = e.preventScrollReset,
            d = Be(e, We),
            p = !1;
          if (
            $e &&
            "string" === typeof c &&
            /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(c)
          ) {
            r = c;
            var h = new URL(window.location.href),
              v = c.startsWith("//") ? new URL(h.protocol + c) : new URL(c);
            v.origin === h.origin
              ? (c = v.pathname + v.search + v.hash)
              : (p = !0);
          }
          var m = (function (e, n) {
              var r = (void 0 === n ? {} : n).relative;
              _e() || N(!1);
              var a = t.useContext(ge),
                o = a.basename,
                i = a.navigator,
                u = Te(e, { relative: r }),
                l = u.hash,
                s = u.pathname,
                c = u.search,
                f = s;
              return (
                "/" !== o && (f = "/" === s ? o : ee([o, s])),
                i.createHref({ pathname: f, search: c, hash: l })
              );
            })(c, { relative: o }),
            y = (function (e, n) {
              var r = void 0 === n ? {} : n,
                a = r.target,
                o = r.replace,
                i = r.state,
                u = r.preventScrollReset,
                l = r.relative,
                s = Ee(),
                c = ke(),
                f = Te(e, { relative: l });
              return t.useCallback(
                function (t) {
                  if (
                    (function (e, t) {
                      return (
                        0 === e.button &&
                        (!t || "_self" === t) &&
                        !(function (e) {
                          return !!(
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          );
                        })(e)
                      );
                    })(t, a)
                  ) {
                    t.preventDefault();
                    var n = void 0 !== o ? o : A(c) === A(f);
                    s(e, {
                      replace: n,
                      state: i,
                      preventScrollReset: u,
                      relative: l,
                    });
                  }
                },
                [c, s, f, o, i, a, e, u, l]
              );
            })(c, {
              replace: u,
              state: l,
              target: s,
              preventScrollReset: f,
              relative: o,
            });
          return t.createElement(
            "a",
            Ve({}, d, {
              href: r || m,
              onClick:
                p || i
                  ? a
                  : function (e) {
                      a && a(e), e.defaultPrevented || y(e);
                    },
              ref: n,
              target: s,
            })
          );
        });
      var qe, Qe;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmitImpl = "useSubmitImpl"),
          (e.UseFetcher = "useFetcher");
      })(qe || (qe = {})),
        (function (e) {
          (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(Qe || (Qe = {}));
      function Ge(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Ye(e, t, n, r, a, o, i) {
        try {
          var u = e[o](i),
            l = u.value;
        } catch (s) {
          return void n(s);
        }
        u.done ? t(l) : Promise.resolve(l).then(r, a);
      }
      function Je(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              Ye(o, r, a, i, u, "next", e);
            }
            function u(e) {
              Ye(o, r, a, i, u, "throw", e);
            }
            i(void 0);
          });
        };
      }
      function Xe() {
        Xe = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          u = a.toStringTag || "@@toStringTag";
        function l(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, "");
        } catch (N) {
          l = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function s(e, t, n, a) {
          var o = t && t.prototype instanceof d ? t : d,
            i = Object.create(o.prototype),
            u = new T(a || []);
          return r(i, "_invoke", { value: _(e, n, u) }), i;
        }
        function c(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        e.wrap = s;
        var f = {};
        function d() {}
        function h() {}
        function v() {}
        var m = {};
        l(m, o, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          g = y && y(y(R([])));
        g && g !== t && n.call(g, o) && (m = g);
        var b = (v.prototype = d.prototype = Object.create(m));
        function w(e) {
          ["next", "throw", "return"].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function S(e, t) {
          function a(r, o, i, u) {
            var l = c(e[r], e, o);
            if ("throw" !== l.type) {
              var s = l.arg,
                f = s.value;
              return f && "object" == p(f) && n.call(f, "__await")
                ? t.resolve(f.__await).then(
                    function (e) {
                      a("next", e, i, u);
                    },
                    function (e) {
                      a("throw", e, i, u);
                    }
                  )
                : t.resolve(f).then(
                    function (e) {
                      (s.value = e), i(s);
                    },
                    function (e) {
                      return a("throw", e, i, u);
                    }
                  );
            }
            u(l.arg);
          }
          var o;
          r(this, "_invoke", {
            value: function (e, n) {
              function r() {
                return new t(function (t, r) {
                  a(e, n, t, r);
                });
              }
              return (o = o ? o.then(r, r) : r());
            },
          });
        }
        function _(e, t, n) {
          var r = "suspendedStart";
          return function (a, o) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw o;
              return C();
            }
            for (n.method = a, n.arg = o; ; ) {
              var i = n.delegate;
              if (i) {
                var u = k(i, n);
                if (u) {
                  if (u === f) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var l = c(e, t, n);
              if ("normal" === l.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function k(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                k(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              f
            );
          var a = c(r, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              f);
        }
        function E(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function x(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function T(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(E, this),
            this.reset(!0);
        }
        function R(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: C };
        }
        function C() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = v),
          r(b, "constructor", { value: v, configurable: !0 }),
          r(v, "constructor", { value: h, configurable: !0 }),
          (h.displayName = l(v, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === h || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, v)
                : ((e.__proto__ = v), l(e, u, "GeneratorFunction")),
              (e.prototype = Object.create(b)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          w(S.prototype),
          l(S.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = S),
          (e.async = function (t, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new S(s(t, n, r, a), o);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          w(b),
          l(b, u, "Generator"),
          l(b, o, function () {
            return this;
          }),
          l(b, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = R),
          (T.prototype = {
            constructor: T,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var u = n.call(o, "catchLoc"),
                    l = n.call(o, "finallyLoc");
                  if (u && l) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (u) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), x(n), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    x(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: R(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      function Ze(e, t, n) {
        return (
          (t = h(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function et(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function tt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? et(Object(n), !0).forEach(function (t) {
                Ze(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : et(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var nt = n(164),
        rt = ["override"],
        at = ["cachePolicyForParams_UNSTABLE"],
        ot = Xe().mark(Un),
        it = Xe().mark(Qr);
      var ut = function (e) {
        var t = new Error(e);
        if (void 0 === t.stack)
          try {
            throw t;
          } catch (n) {}
        return t;
      };
      var lt = function (e) {
        return !!e && "function" === typeof e.then;
      };
      var st = function (e, t) {
        if (null != e) return e;
        throw ut(
          null !== t && void 0 !== t ? t : "Got unexpected null or undefined"
        );
      };
      function ct(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var ft = (function () {
          function e() {
            d(this, e);
          }
          return (
            m(e, [
              {
                key: "getValue",
                value: function () {
                  throw ut("BaseLoadable");
                },
              },
              {
                key: "toPromise",
                value: function () {
                  throw ut("BaseLoadable");
                },
              },
              {
                key: "valueMaybe",
                value: function () {
                  throw ut("BaseLoadable");
                },
              },
              {
                key: "valueOrThrow",
                value: function () {
                  throw ut(
                    'Loadable expected value, but in "'.concat(
                      this.state,
                      '" state'
                    )
                  );
                },
              },
              {
                key: "promiseMaybe",
                value: function () {
                  throw ut("BaseLoadable");
                },
              },
              {
                key: "promiseOrThrow",
                value: function () {
                  throw ut(
                    'Loadable expected promise, but in "'.concat(
                      this.state,
                      '" state'
                    )
                  );
                },
              },
              {
                key: "errorMaybe",
                value: function () {
                  throw ut("BaseLoadable");
                },
              },
              {
                key: "errorOrThrow",
                value: function () {
                  throw ut(
                    'Loadable expected error, but in "'.concat(
                      this.state,
                      '" state'
                    )
                  );
                },
              },
              {
                key: "is",
                value: function (e) {
                  return e.state === this.state && e.contents === this.contents;
                },
              },
              {
                key: "map",
                value: function (e) {
                  throw ut("BaseLoadable");
                },
              },
            ]),
            e
          );
        })(),
        dt = (function (e) {
          g(n, e);
          var t = _(n);
          function n(e) {
            var r;
            return (
              d(this, n),
              ct(S((r = t.call(this))), "state", "hasValue"),
              ct(S(r), "contents", void 0),
              (r.contents = e),
              r
            );
          }
          return (
            m(n, [
              {
                key: "getValue",
                value: function () {
                  return this.contents;
                },
              },
              {
                key: "toPromise",
                value: function () {
                  return Promise.resolve(this.contents);
                },
              },
              {
                key: "valueMaybe",
                value: function () {
                  return this.contents;
                },
              },
              {
                key: "valueOrThrow",
                value: function () {
                  return this.contents;
                },
              },
              { key: "promiseMaybe", value: function () {} },
              { key: "errorMaybe", value: function () {} },
              {
                key: "map",
                value: function (e) {
                  var t = this;
                  try {
                    var n = e(this.contents);
                    return lt(n) ? yt(n) : wt(n) ? n : vt(n);
                  } catch (r) {
                    return lt(r)
                      ? yt(
                          r.next(function () {
                            return t.map(e);
                          })
                        )
                      : mt(r);
                  }
                },
              },
            ]),
            n
          );
        })(ft),
        pt = (function (e) {
          g(n, e);
          var t = _(n);
          function n(e) {
            var r;
            return (
              d(this, n),
              ct(S((r = t.call(this))), "state", "hasError"),
              ct(S(r), "contents", void 0),
              (r.contents = e),
              r
            );
          }
          return (
            m(n, [
              {
                key: "getValue",
                value: function () {
                  throw this.contents;
                },
              },
              {
                key: "toPromise",
                value: function () {
                  return Promise.reject(this.contents);
                },
              },
              { key: "valueMaybe", value: function () {} },
              { key: "promiseMaybe", value: function () {} },
              {
                key: "errorMaybe",
                value: function () {
                  return this.contents;
                },
              },
              {
                key: "errorOrThrow",
                value: function () {
                  return this.contents;
                },
              },
              {
                key: "map",
                value: function (e) {
                  return this;
                },
              },
            ]),
            n
          );
        })(ft),
        ht = (function (e) {
          g(n, e);
          var t = _(n);
          function n(e) {
            var r;
            return (
              d(this, n),
              ct(S((r = t.call(this))), "state", "loading"),
              ct(S(r), "contents", void 0),
              (r.contents = e),
              r
            );
          }
          return (
            m(n, [
              {
                key: "getValue",
                value: function () {
                  throw this.contents;
                },
              },
              {
                key: "toPromise",
                value: function () {
                  return this.contents;
                },
              },
              { key: "valueMaybe", value: function () {} },
              {
                key: "promiseMaybe",
                value: function () {
                  return this.contents;
                },
              },
              {
                key: "promiseOrThrow",
                value: function () {
                  return this.contents;
                },
              },
              { key: "errorMaybe", value: function () {} },
              {
                key: "map",
                value: function (e) {
                  var t = this;
                  return yt(
                    this.contents
                      .then(function (t) {
                        var n = e(t);
                        if (wt(n)) {
                          var r = n;
                          switch (r.state) {
                            case "hasValue":
                            case "loading":
                              return r.contents;
                            case "hasError":
                              throw r.contents;
                          }
                        }
                        return n;
                      })
                      .catch(function (n) {
                        if (lt(n))
                          return n.then(function () {
                            return t.map(e).contents;
                          });
                        throw n;
                      })
                  );
                },
              },
            ]),
            n
          );
        })(ft);
      function vt(e) {
        return Object.freeze(new dt(e));
      }
      function mt(e) {
        return Object.freeze(new pt(e));
      }
      function yt(e) {
        return Object.freeze(new ht(e));
      }
      function gt() {
        return Object.freeze(new ht(new Promise(function () {})));
      }
      function bt(e) {
        var t = (function (e) {
          return e.every(function (e) {
            return "hasValue" === e.state;
          })
            ? vt(
                e.map(function (e) {
                  return e.contents;
                })
              )
            : e.some(function (e) {
                return "hasError" === e.state;
              })
            ? mt(
                st(
                  e.find(function (e) {
                    return "hasError" === e.state;
                  }),
                  "Invalid loadable passed to loadableAll"
                ).contents
              )
            : yt(
                Promise.all(
                  e.map(function (e) {
                    return e.contents;
                  })
                )
              );
        })(
          (Array.isArray(e)
            ? e
            : Object.getOwnPropertyNames(e).map(function (t) {
                return e[t];
              })
          ).map(function (e) {
            return wt(e) ? e : lt(e) ? yt(e) : vt(e);
          })
        );
        return Array.isArray(e)
          ? t
          : t.map(function (t) {
              return Object.getOwnPropertyNames(e).reduce(function (e, n, r) {
                return tt(tt({}, e), {}, Ze({}, n, t[r]));
              }, {});
            });
      }
      function wt(e) {
        return e instanceof ft;
      }
      var St = {
          of: function (e) {
            return lt(e) ? yt(e) : wt(e) ? e : vt(e);
          },
          error: function (e) {
            return mt(e);
          },
          loading: function () {
            return gt();
          },
          all: bt,
          isLoadable: wt,
        },
        _t = {
          loadableWithValue: vt,
          loadableWithError: mt,
          loadableWithPromise: yt,
          loadableLoading: gt,
          loadableAll: bt,
          isLoadable: wt,
          RecoilLoadable: St,
        },
        kt = _t.loadableWithValue,
        Et = _t.loadableWithError,
        xt = _t.loadableWithPromise,
        Tt = _t.loadableLoading,
        Rt = _t.loadableAll,
        Ct = _t.isLoadable,
        Nt = _t.RecoilLoadable,
        Lt = Object.freeze({
          __proto__: null,
          loadableWithValue: kt,
          loadableWithError: Et,
          loadableWithPromise: xt,
          loadableLoading: Tt,
          loadableAll: Rt,
          isLoadable: Ct,
          RecoilLoadable: Nt,
        }),
        Ot = {
          RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: !0,
          RECOIL_GKS_ENABLED: new Set([
            "recoil_hamt_2020",
            "recoil_sync_external_store",
            "recoil_suppress_rerender_in_callback",
            "recoil_memory_managament_2020",
          ]),
        };
      !(function () {
        var e;
        "undefined" !== typeof process &&
          null !=
            (null === (e = process) || void 0 === e
              ? void 0
              : {
                  NODE_ENV: "production",
                  PUBLIC_URL: "/ReactJS.movie",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }) &&
          ((function (e, t) {
            var n,
              r,
              a =
                null ===
                  (n = {
                    NODE_ENV: "production",
                    PUBLIC_URL: "/ReactJS.movie",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                  }[e]) ||
                void 0 === n ||
                null === (r = n.toLowerCase()) ||
                void 0 === r
                  ? void 0
                  : r.trim();
            if (null != a && "" !== a) {
              if (!["true", "false"].includes(a))
                throw ut(
                  "process.env."
                    .concat(e, " value must be 'true', 'false', or empty: ")
                    .concat(a)
                );
              t("true" === a);
            }
          })("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED", function (e) {
            Ot.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = e;
          }),
          (function (e, t) {
            var n,
              r =
                null ===
                  (n = {
                    NODE_ENV: "production",
                    PUBLIC_URL: "/ReactJS.movie",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                  }[e]) || void 0 === n
                  ? void 0
                  : n.trim();
            null != r && "" !== r && t(r.split(/\s*,\s*|\s+/));
          })("RECOIL_GKS_ENABLED", function (e) {
            e.forEach(function (e) {
              Ot.RECOIL_GKS_ENABLED.add(e);
            });
          }));
      })();
      var At = Ot;
      function Pt(e) {
        return At.RECOIL_GKS_ENABLED.has(e);
      }
      (Pt.setPass = function (e) {
        At.RECOIL_GKS_ENABLED.add(e);
      }),
        (Pt.setFail = function (e) {
          At.RECOIL_GKS_ENABLED.delete(e);
        }),
        (Pt.clear = function () {
          At.RECOIL_GKS_ENABLED.clear();
        });
      var Dt = Pt;
      var Mt,
        jt,
        Ut,
        zt = function (e, t) {
          return (
            (arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : {}
            ).error,
            null
          );
        },
        It = zt,
        Ft =
          null !== (Mt = t.createMutableSource) && void 0 !== Mt
            ? Mt
            : t.unstable_createMutableSource,
        Vt =
          null !== (jt = t.useMutableSource) && void 0 !== jt
            ? jt
            : t.unstable_useMutableSource,
        Bt =
          null !== (Ut = t.useSyncExternalStore) && void 0 !== Ut
            ? Ut
            : t.unstable_useSyncExternalStore,
        Wt = !1;
      var Ht = {
          createMutableSource: Ft,
          useMutableSource: Vt,
          useSyncExternalStore: Bt,
          currentRendererSupportsUseSyncExternalStore: function () {
            var e,
              n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
              r = n.ReactCurrentDispatcher,
              a = n.ReactCurrentOwner,
              o =
                null !=
                (null !==
                  (e = null === r || void 0 === r ? void 0 : r.current) &&
                void 0 !== e
                  ? e
                  : a.currentDispatcher
                ).useSyncExternalStore;
            return (
              !Bt ||
                o ||
                Wt ||
                ((Wt = !0),
                It(
                  "A React renderer without React 18+ API support is being used with React 18+."
                )),
              o
            );
          },
          reactMode: function () {
            return Dt("recoil_transition_support")
              ? { mode: "TRANSITION_SUPPORT", early: !0, concurrent: !0 }
              : Dt("recoil_sync_external_store") && null != Bt
              ? { mode: "SYNC_EXTERNAL_STORE", early: !0, concurrent: !1 }
              : Dt("recoil_mutable_source") &&
                null != Vt &&
                "undefined" !== typeof window &&
                !window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE
              ? Dt("recoil_suppress_rerender_in_callback")
                ? { mode: "MUTABLE_SOURCE", early: !0, concurrent: !0 }
                : { mode: "MUTABLE_SOURCE", early: !1, concurrent: !1 }
              : Dt("recoil_suppress_rerender_in_callback")
              ? { mode: "LEGACY", early: !0, concurrent: !1 }
              : { mode: "LEGACY", early: !1, concurrent: !1 };
          },
          isFastRefreshEnabled: function () {
            return !1;
          },
        },
        $t = (function () {
          function e(t) {
            d(this, e), ct(this, "key", void 0), (this.key = t);
          }
          return (
            m(e, [
              {
                key: "toJSON",
                value: function () {
                  return { key: this.key };
                },
              },
            ]),
            e
          );
        })(),
        Kt = (function (e) {
          g(n, e);
          var t = _(n);
          function n() {
            return d(this, n), t.apply(this, arguments);
          }
          return m(n);
        })($t),
        qt = (function (e) {
          g(n, e);
          var t = _(n);
          function n() {
            return d(this, n), t.apply(this, arguments);
          }
          return m(n);
        })($t);
      var Qt = {
          AbstractRecoilValue: $t,
          RecoilState: Kt,
          RecoilValueReadOnly: qt,
          isRecoilValue: function (e) {
            return e instanceof Kt || e instanceof qt;
          },
        },
        Gt = Qt.AbstractRecoilValue,
        Yt = Qt.RecoilState,
        Jt = Qt.RecoilValueReadOnly,
        Xt = Qt.isRecoilValue,
        Zt = Object.freeze({
          __proto__: null,
          AbstractRecoilValue: Gt,
          RecoilState: Yt,
          RecoilValueReadOnly: Jt,
          isRecoilValue: Xt,
        });
      var en = function (e) {};
      var tn = function (e, t) {
          return Xe().mark(function n() {
            var r, a, o, i;
            return Xe().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      (r = 0), (a = x(e)), (n.prev = 2), a.s();
                    case 4:
                      if ((o = a.n()).done) {
                        n.next = 10;
                        break;
                      }
                      return (i = o.value), (n.next = 8), t(i, r++);
                    case 8:
                      n.next = 4;
                      break;
                    case 10:
                      n.next = 15;
                      break;
                    case 12:
                      (n.prev = 12), (n.t0 = n.catch(2)), a.e(n.t0);
                    case 15:
                      return (n.prev = 15), a.f(), n.finish(15);
                    case 18:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              null,
              [[2, 12, 15, 18]]
            );
          })();
        },
        nn = m(function e() {
          d(this, e);
        }),
        rn = new nn(),
        an = new Map(),
        on = new Map();
      var un = (function (e) {
        g(n, e);
        var t = _(n);
        function n() {
          return d(this, n), t.apply(this, arguments);
        }
        return m(n);
      })(E(Error));
      var ln = new Map();
      function sn(e) {
        return ln.get(e);
      }
      var cn = {
        nodes: an,
        recoilValues: on,
        registerNode: function (e) {
          At.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED &&
            (function (e) {
              if (an.has(e)) {
                var t = 'Duplicate atom key "'.concat(
                  e,
                  '". This is a FATAL ERROR in\n      production. But it is safe to ignore this warning if it occurred because of\n      hot module replacement.'
                );
                console.warn(t);
              }
            })(e.key),
            an.set(e.key, e);
          var t =
            null == e.set
              ? new Zt.RecoilValueReadOnly(e.key)
              : new Zt.RecoilState(e.key);
          return on.set(e.key, t), t;
        },
        getNode: function (e) {
          var t = an.get(e);
          if (null == t)
            throw new un(
              'Missing definition for RecoilValue: "'.concat(e, '""')
            );
          return t;
        },
        getNodeMaybe: function (e) {
          return an.get(e);
        },
        deleteNodeConfigIfPossible: function (e) {
          var t;
          if (Dt("recoil_memory_managament_2020")) {
            var n,
              r = an.get(e);
            if (
              null !== r &&
              void 0 !== r &&
              null !== (t = r.shouldDeleteConfigOnRelease) &&
              void 0 !== t &&
              t.call(r)
            )
              an.delete(e),
                null === (n = sn(e)) || void 0 === n || n(),
                ln.delete(e);
          }
        },
        setConfigDeletionHandler: function (e, t) {
          Dt("recoil_memory_managament_2020") &&
            (void 0 === t ? ln.delete(e) : ln.set(e, t));
        },
        getConfigDeletionHandler: sn,
        recoilValuesForKeys: function (e) {
          return tn(e, function (e) {
            return st(on.get(e));
          });
        },
        NodeMissingError: un,
        DefaultValue: nn,
        DEFAULT_VALUE: rn,
      };
      var fn = {
        enqueueExecution: function (e, t) {
          t();
        },
      };
      var dn = (function (e, t) {
          return e((t = { exports: {} }), t.exports), t.exports;
        })(function (e) {
          var t =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" === typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  },
            n = {},
            r = Math.pow(2, 5),
            a = r - 1,
            o = r / 2,
            i = r / 4,
            u = {},
            l = function (e) {
              return function () {
                return e;
              };
            },
            s = (n.hash = function (e) {
              var n = "undefined" === typeof e ? "undefined" : t(e);
              if ("number" === n) return e;
              "string" !== n && (e += "");
              for (var r = 0, a = 0, o = e.length; a < o; ++a) {
                r = ((r << 5) - r + e.charCodeAt(a)) | 0;
              }
              return r;
            }),
            c = function (e, t) {
              return (t >>> e) & a;
            },
            f = function (e) {
              return 1 << e;
            },
            d = function (e, t) {
              return (
                (n = e & (t - 1)),
                (n =
                  ((n =
                    (858993459 & (n -= (n >> 1) & 1431655765)) +
                    ((n >> 2) & 858993459)) +
                    (n >> 4)) &
                  252645135),
                127 & ((n += n >> 8) + (n >> 16))
              );
              var n;
            },
            p = function (e, t, n, r) {
              var a = r;
              if (!e) {
                var o = r.length;
                a = new Array(o);
                for (var i = 0; i < o; ++i) a[i] = r[i];
              }
              return (a[t] = n), a;
            },
            h = function (e, t, n) {
              var r = n.length - 1,
                a = 0,
                o = 0,
                i = n;
              if (e) a = o = t;
              else for (i = new Array(r); a < t; ) i[o++] = n[a++];
              for (++a; a <= r; ) i[o++] = n[a++];
              return e && (i.length = r), i;
            },
            v = { __hamt_isEmpty: !0 },
            m = function (e) {
              return e === v || (e && e.__hamt_isEmpty);
            },
            y = function (e, t, n, r) {
              return {
                type: 1,
                edit: e,
                hash: t,
                key: n,
                value: r,
                _modify: k,
              };
            },
            g = function (e, t, n) {
              return { type: 2, edit: e, hash: t, children: n, _modify: E };
            },
            b = function (e, t, n) {
              return { type: 3, edit: e, mask: t, children: n, _modify: x };
            },
            w = function (e, t, n) {
              return { type: 4, edit: e, size: t, children: n, _modify: T };
            },
            S = function e(t, n, r, a, o, i) {
              if (r === o) return g(t, r, [i, a]);
              var u = c(n, r),
                l = c(n, o);
              return b(
                t,
                f(u) | f(l),
                u === l ? [e(t, n + 5, r, a, o, i)] : u < l ? [a, i] : [i, a]
              );
            },
            _ = function (e, t) {
              return e === t.edit;
            },
            k = function (e, t, n, r, a, o, i) {
              if (t(o, this.key)) {
                var l = r(this.value);
                return l === this.value
                  ? this
                  : l === u
                  ? (--i.value, v)
                  : _(e, this)
                  ? ((this.value = l), this)
                  : y(e, a, o, l);
              }
              var s = r();
              return s === u
                ? this
                : (++i.value, S(e, n, this.hash, this, a, y(e, a, o, s)));
            },
            E = function (e, t, n, r, a, o, i) {
              if (a === this.hash) {
                var l = (function (e, t, n, r, a, o, i, l) {
                  for (var s = a.length, c = 0; c < s; ++c) {
                    var f = a[c];
                    if (n(i, f.key)) {
                      var d = f.value,
                        v = o(d);
                      return v === d
                        ? a
                        : v === u
                        ? (--l.value, h(e, c, a))
                        : p(e, c, y(t, r, i, v), a);
                    }
                  }
                  var m = o();
                  return m === u ? a : (++l.value, p(e, s, y(t, r, i, m), a));
                })(_(e, this), e, t, this.hash, this.children, r, o, i);
                return l === this.children
                  ? this
                  : l.length > 1
                  ? g(e, this.hash, l)
                  : l[0];
              }
              var s = r();
              return s === u
                ? this
                : (++i.value, S(e, n, this.hash, this, a, y(e, a, o, s)));
            },
            x = function (e, t, n, r, a, i, u) {
              var l = this.mask,
                s = this.children,
                y = c(n, a),
                g = f(y),
                S = d(l, g),
                k = l & g,
                E = k ? s[S] : v,
                x = E._modify(e, t, n + 5, r, a, i, u);
              if (E === x) return this;
              var T,
                R = _(e, this),
                C = l,
                N = void 0;
              if (k && m(x)) {
                if (!(C &= ~g)) return v;
                if (
                  s.length <= 2 &&
                  ((T = s[1 ^ S]) === v || 1 === T.type || 2 === T.type)
                )
                  return s[1 ^ S];
                N = h(R, S, s);
              } else if (k || m(x)) N = p(R, S, x, s);
              else {
                if (s.length >= o)
                  return (function (e, t, n, r, a) {
                    for (var o = [], i = r, u = 0, l = 0; i; ++l)
                      1 & i && (o[l] = a[u++]), (i >>>= 1);
                    return (o[t] = n), w(e, u + 1, o);
                  })(e, y, x, l, s);
                (C |= g),
                  (N = (function (e, t, n, r) {
                    var a = r.length;
                    if (e) {
                      for (var o = a; o >= t; ) r[o--] = r[o];
                      return (r[t] = n), r;
                    }
                    for (var i = 0, u = 0, l = new Array(a + 1); i < t; )
                      l[u++] = r[i++];
                    for (l[t] = n; i < a; ) l[++u] = r[i++];
                    return l;
                  })(R, S, x, s));
              }
              return R
                ? ((this.mask = C), (this.children = N), this)
                : b(e, C, N);
            },
            T = function (e, t, n, r, a, o, u) {
              var l = this.size,
                s = this.children,
                f = c(n, a),
                d = s[f],
                h = (d || v)._modify(e, t, n + 5, r, a, o, u);
              if (d === h) return this;
              var y = _(e, this),
                g = void 0;
              if (m(d) && !m(h)) ++l, (g = p(y, f, h, s));
              else if (!m(d) && m(h)) {
                if (--l <= i)
                  return (function (e, t, n, r) {
                    for (
                      var a = new Array(t - 1),
                        o = 0,
                        i = 0,
                        u = 0,
                        l = r.length;
                      u < l;
                      ++u
                    )
                      if (u !== n) {
                        var s = r[u];
                        s && !m(s) && ((a[o++] = s), (i |= 1 << u));
                      }
                    return b(e, i, a);
                  })(e, l, f, s);
                g = p(y, f, v, s);
              } else g = p(y, f, h, s);
              return y
                ? ((this.size = l), (this.children = g), this)
                : w(e, l, g);
            };
          function R(e, t, n, r, a) {
            (this._editable = e),
              (this._edit = t),
              (this._config = n),
              (this._root = r),
              (this._size = a);
          }
          (v._modify = function (e, t, n, r, a, o, i) {
            var l = r();
            return l === u ? v : (++i.value, y(e, a, o, l));
          }),
            (R.prototype.setTree = function (e, t) {
              return this._editable
                ? ((this._root = e), (this._size = t), this)
                : e === this._root
                ? this
                : new R(this._editable, this._edit, this._config, e, t);
            });
          var C = (n.tryGetHash = function (e, t, n, r) {
            for (var a = r._root, o = 0, i = r._config.keyEq; ; )
              switch (a.type) {
                case 1:
                  return i(n, a.key) ? a.value : e;
                case 2:
                  if (t === a.hash)
                    for (var u = a.children, l = 0, s = u.length; l < s; ++l) {
                      var p = u[l];
                      if (i(n, p.key)) return p.value;
                    }
                  return e;
                case 3:
                  var h = c(o, t),
                    v = f(h);
                  if (a.mask & v) {
                    (a = a.children[d(a.mask, v)]), (o += 5);
                    break;
                  }
                  return e;
                case 4:
                  if ((a = a.children[c(o, t)])) {
                    o += 5;
                    break;
                  }
                  return e;
                default:
                  return e;
              }
          });
          R.prototype.tryGetHash = function (e, t, n) {
            return C(e, t, n, this);
          };
          var N = (n.tryGet = function (e, t, n) {
            return C(e, n._config.hash(t), t, n);
          });
          R.prototype.tryGet = function (e, t) {
            return N(e, t, this);
          };
          var L = (n.getHash = function (e, t, n) {
            return C(void 0, e, t, n);
          });
          R.prototype.getHash = function (e, t) {
            return L(e, t, this);
          };
          n.get = function (e, t) {
            return C(void 0, t._config.hash(e), e, t);
          };
          R.prototype.get = function (e, t) {
            return N(t, e, this);
          };
          var O = (n.has = function (e, t, n) {
            return C(u, e, t, n) !== u;
          });
          R.prototype.hasHash = function (e, t) {
            return O(e, t, this);
          };
          var A = (n.has = function (e, t) {
            return O(t._config.hash(e), e, t);
          });
          R.prototype.has = function (e) {
            return A(e, this);
          };
          var P = function (e, t) {
            return e === t;
          };
          (n.make = function (e) {
            return new R(
              0,
              0,
              { keyEq: (e && e.keyEq) || P, hash: (e && e.hash) || s },
              v,
              0
            );
          }),
            (n.empty = n.make());
          var D = (n.isEmpty = function (e) {
            return e && !!m(e._root);
          });
          R.prototype.isEmpty = function () {
            return D(this);
          };
          var M = (n.modifyHash = function (e, t, n, r) {
            var a = { value: r._size },
              o = r._root._modify(
                r._editable ? r._edit : NaN,
                r._config.keyEq,
                0,
                e,
                t,
                n,
                a
              );
            return r.setTree(o, a.value);
          });
          R.prototype.modifyHash = function (e, t, n) {
            return M(n, e, t, this);
          };
          var j = (n.modify = function (e, t, n) {
            return M(e, n._config.hash(t), t, n);
          });
          R.prototype.modify = function (e, t) {
            return j(t, e, this);
          };
          var U = (n.setHash = function (e, t, n, r) {
            return M(l(n), e, t, r);
          });
          R.prototype.setHash = function (e, t, n) {
            return U(e, t, n, this);
          };
          var z = (n.set = function (e, t, n) {
            return U(n._config.hash(e), e, t, n);
          });
          R.prototype.set = function (e, t) {
            return z(e, t, this);
          };
          var I = l(u),
            F = (n.removeHash = function (e, t, n) {
              return M(I, e, t, n);
            });
          R.prototype.removeHash = R.prototype.deleteHash = function (e, t) {
            return F(e, t, this);
          };
          var V = (n.remove = function (e, t) {
            return F(t._config.hash(e), e, t);
          });
          R.prototype.remove = R.prototype.delete = function (e) {
            return V(e, this);
          };
          var B = (n.beginMutation = function (e) {
            return new R(
              e._editable + 1,
              e._edit + 1,
              e._config,
              e._root,
              e._size
            );
          });
          R.prototype.beginMutation = function () {
            return B(this);
          };
          var W = (n.endMutation = function (e) {
            return (e._editable = e._editable && e._editable - 1), e;
          });
          R.prototype.endMutation = function () {
            return W(this);
          };
          var H = (n.mutate = function (e, t) {
            var n = B(t);
            return e(n), W(n);
          });
          R.prototype.mutate = function (e) {
            return H(e, this);
          };
          var $ = function (e) {
              return e && K(e[0], e[1], e[2], e[3], e[4]);
            },
            K = function (e, t, n, r, a) {
              for (; n < e; ) {
                var o = t[n++];
                if (o && !m(o)) return q(o, r, [e, t, n, r, a]);
              }
              return $(a);
            },
            q = function (e, t, n) {
              switch (e.type) {
                case 1:
                  return { value: t(e), rest: n };
                case 2:
                case 4:
                case 3:
                  var r = e.children;
                  return K(r.length, r, 0, t, n);
                default:
                  return $(n);
              }
            },
            Q = { done: !0 };
          function G(e) {
            this.v = e;
          }
          (G.prototype.next = function () {
            if (!this.v) return Q;
            var e = this.v;
            return (this.v = $(e.rest)), e;
          }),
            (G.prototype[Symbol.iterator] = function () {
              return this;
            });
          var Y = function (e, t) {
              return new G(q(e._root, t));
            },
            J = function (e) {
              return [e.key, e.value];
            },
            X = (n.entries = function (e) {
              return Y(e, J);
            });
          R.prototype.entries = R.prototype[Symbol.iterator] = function () {
            return X(this);
          };
          var Z = function (e) {
              return e.key;
            },
            ee = (n.keys = function (e) {
              return Y(e, Z);
            });
          R.prototype.keys = function () {
            return ee(this);
          };
          var te = function (e) {
              return e.value;
            },
            ne =
              (n.values =
              R.prototype.values =
                function (e) {
                  return Y(e, te);
                });
          R.prototype.values = function () {
            return ne(this);
          };
          var re = (n.fold = function (e, t, n) {
            var r = n._root;
            if (1 === r.type) return e(t, r.value, r.key);
            for (var a = [r.children], o = void 0; (o = a.pop()); )
              for (var i = 0, u = o.length; i < u; ) {
                var l = o[i++];
                l &&
                  l.type &&
                  (1 === l.type
                    ? (t = e(t, l.value, l.key))
                    : a.push(l.children));
              }
            return t;
          });
          R.prototype.fold = function (e, t) {
            return re(e, t, this);
          };
          var ae = (n.forEach = function (e, t) {
            return re(
              function (n, r, a) {
                return e(r, a, t);
              },
              null,
              t
            );
          });
          R.prototype.forEach = function (e) {
            return ae(e, this);
          };
          var oe = (n.count = function (e) {
            return e._size;
          });
          (R.prototype.count = function () {
            return oe(this);
          }),
            Object.defineProperty(R.prototype, "size", {
              get: R.prototype.count,
            }),
            e.exports ? (e.exports = n) : ((void 0).hamt = n);
        }),
        pn = (function () {
          function e(t) {
            d(this, e),
              ct(this, "_map", void 0),
              (this._map = new Map(
                null === t || void 0 === t ? void 0 : t.entries()
              ));
          }
          return (
            m(e, [
              {
                key: "keys",
                value: function () {
                  return this._map.keys();
                },
              },
              {
                key: "entries",
                value: function () {
                  return this._map.entries();
                },
              },
              {
                key: "get",
                value: function (e) {
                  return this._map.get(e);
                },
              },
              {
                key: "has",
                value: function (e) {
                  return this._map.has(e);
                },
              },
              {
                key: "set",
                value: function (e, t) {
                  return this._map.set(e, t), this;
                },
              },
              {
                key: "delete",
                value: function (e) {
                  return this._map.delete(e), this;
                },
              },
              {
                key: "clone",
                value: function () {
                  return vn(this);
                },
              },
              {
                key: "toMap",
                value: function () {
                  return new Map(this._map);
                },
              },
            ]),
            e
          );
        })(),
        hn = (function () {
          function e(t) {
            if (
              (d(this, e),
              ct(this, "_hamt", dn.empty.beginMutation()),
              t instanceof e)
            ) {
              var n = t._hamt.endMutation();
              (t._hamt = n.beginMutation()), (this._hamt = n.beginMutation());
            } else if (t) {
              var r,
                a = x(t.entries());
              try {
                for (a.s(); !(r = a.n()).done; ) {
                  var o = s(r.value, 2),
                    i = o[0],
                    u = o[1];
                  this._hamt.set(i, u);
                }
              } catch (l) {
                a.e(l);
              } finally {
                a.f();
              }
            }
          }
          return (
            m(e, [
              {
                key: "keys",
                value: function () {
                  return this._hamt.keys();
                },
              },
              {
                key: "entries",
                value: function () {
                  return this._hamt.entries();
                },
              },
              {
                key: "get",
                value: function (e) {
                  return this._hamt.get(e);
                },
              },
              {
                key: "has",
                value: function (e) {
                  return this._hamt.has(e);
                },
              },
              {
                key: "set",
                value: function (e, t) {
                  return this._hamt.set(e, t), this;
                },
              },
              {
                key: "delete",
                value: function (e) {
                  return this._hamt.delete(e), this;
                },
              },
              {
                key: "clone",
                value: function () {
                  return vn(this);
                },
              },
              {
                key: "toMap",
                value: function () {
                  return new Map(this._hamt);
                },
              },
            ]),
            e
          );
        })();
      function vn(e) {
        return Dt("recoil_hamt_2020") ? new hn(e) : new pn(e);
      }
      var mn = vn;
      var yn = function (e) {
        for (
          var t = new Set(),
            n = arguments.length,
            r = new Array(n > 1 ? n - 1 : 0),
            a = 1;
          a < n;
          a++
        )
          r[a - 1] = arguments[a];
        var o,
          i = x(e);
        try {
          e: for (i.s(); !(o = i.n()).done; ) {
            var u,
              l = o.value,
              s = x(r);
            try {
              for (s.s(); !(u = s.n()).done; ) {
                if (u.value.has(l)) continue e;
              }
            } catch (c) {
              s.e(c);
            } finally {
              s.f();
            }
            t.add(l);
          }
        } catch (c) {
          i.e(c);
        } finally {
          i.f();
        }
        return t;
      };
      var gn = function (e, t) {
        var n = new Map();
        return (
          e.forEach(function (e, r) {
            n.set(r, t(e, r));
          }),
          n
        );
      };
      function bn(e, t, n, r) {
        var a = n.nodeDeps,
          o = n.nodeToNodeSubscriptions,
          i = a.get(e);
        if (!i || !r || i === r.nodeDeps.get(e)) {
          a.set(e, t);
          var u,
            l = x(null == i ? t : yn(t, i));
          try {
            for (l.s(); !(u = l.n()).done; ) {
              var s = u.value;
              o.has(s) || o.set(s, new Set()), st(o.get(s)).add(e);
            }
          } catch (h) {
            l.e(h);
          } finally {
            l.f();
          }
          if (i) {
            var c,
              f = x(yn(i, t));
            try {
              for (f.s(); !(c = f.n()).done; ) {
                var d = c.value;
                if (!o.has(d)) return;
                var p = st(o.get(d));
                p.delete(e), 0 === p.size && o.delete(d);
              }
            } catch (h) {
              f.e(h);
            } finally {
              f.f();
            }
          }
        }
      }
      var wn = function (e) {
          return {
            nodeDeps: gn(e.nodeDeps, function (e) {
              return new Set(e);
            }),
            nodeToNodeSubscriptions: gn(
              e.nodeToNodeSubscriptions,
              function (e) {
                return new Set(e);
              }
            ),
          };
        },
        Sn = function () {
          return { nodeDeps: new Map(), nodeToNodeSubscriptions: new Map() };
        },
        _n = function (e, t, n, r) {
          var a,
            o,
            i,
            u,
            l = n.getState();
          r !== l.currentTree.version &&
            r !==
              (null === (a = l.nextTree) || void 0 === a
                ? void 0
                : a.version) &&
            r !==
              (null === (o = l.previousTree) || void 0 === o
                ? void 0
                : o.version) &&
            It("Tried to save dependencies to a discarded tree");
          var s = n.getGraph(r);
          if (
            (bn(e, t, s),
            r ===
              (null === (i = l.previousTree) || void 0 === i
                ? void 0
                : i.version) && bn(e, t, n.getGraph(l.currentTree.version), s),
            r ===
              (null === (u = l.previousTree) || void 0 === u
                ? void 0
                : u.version) || r === l.currentTree.version)
          ) {
            var c,
              f =
                null === (c = l.nextTree) || void 0 === c ? void 0 : c.version;
            if (void 0 !== f) bn(e, t, n.getGraph(f), s);
          }
        },
        kn = 0,
        En = 0,
        xn = 0,
        Tn = function () {
          return kn++;
        },
        Rn = function () {
          return En++;
        },
        Cn = function () {
          return xn++;
        },
        Nn = Object.freeze({
          __proto__: null,
          persistentMap: mn,
        }).persistentMap,
        Ln = Sn,
        On = Tn;
      function An() {
        var e = On();
        return {
          version: e,
          stateID: e,
          transactionMetadata: {},
          dirtyAtoms: new Set(),
          atomValues: Nn(),
          nonvalidatedAtoms: Nn(),
        };
      }
      var Pn = {
          makeEmptyTreeState: An,
          makeEmptyStoreState: function () {
            var e = An();
            return {
              currentTree: e,
              nextTree: null,
              previousTree: null,
              commitDepth: 0,
              knownAtoms: new Set(),
              knownSelectors: new Set(),
              transactionSubscriptions: new Map(),
              nodeTransactionSubscriptions: new Map(),
              nodeToComponentSubscriptions: new Map(),
              queuedComponentCallbacks_DEPRECATED: [],
              suspendedComponentResolvers: new Set(),
              graphsByVersion: new Map().set(e.version, Ln()),
              retention: {
                referenceCounts: new Map(),
                nodesRetainedByZone: new Map(),
                retainablesToCheckForRelease: new Set(),
              },
              nodeCleanupFunctions: new Map(),
            };
          },
          getNextTreeStateVersion: On,
        },
        Dn = m(function e() {
          d(this, e);
        });
      var Mn = {
        RetentionZone: Dn,
        retentionZone: function () {
          return new Dn();
        },
      };
      var jn = function (e, t) {
        var n = new Set(e);
        return n.add(t), n;
      };
      function Un(e, t) {
        var n, r, a, o;
        return Xe().wrap(
          function (i) {
            for (;;)
              switch ((i.prev = i.next)) {
                case 0:
                  (n = 0), (r = x(e)), (i.prev = 2), r.s();
                case 4:
                  if ((a = r.n()).done) {
                    i.next = 11;
                    break;
                  }
                  if (((o = a.value), !t(o, n++))) {
                    i.next = 9;
                    break;
                  }
                  return (i.next = 9), o;
                case 9:
                  i.next = 4;
                  break;
                case 11:
                  i.next = 16;
                  break;
                case 13:
                  (i.prev = 13), (i.t0 = i.catch(2)), r.e(i.t0);
                case 16:
                  return (i.prev = 16), r.f(), i.finish(16);
                case 19:
                case "end":
                  return i.stop();
              }
          },
          ot,
          null,
          [[2, 13, 16, 19]]
        );
      }
      var zn = Un;
      var In = function (e, t) {
          return new Proxy(e, {
            get: function (e, n) {
              return !(n in e) && n in t && (e[n] = t[n]()), e[n];
            },
            ownKeys: function (e) {
              return Object.keys(e);
            },
          });
        },
        Fn = cn.getNode,
        Vn = cn.getNodeMaybe,
        Bn = cn.recoilValuesForKeys,
        Wn = Mn.RetentionZone,
        Hn = jn,
        $n = Object.freeze(new Set()),
        Kn = (function (e) {
          g(n, e);
          var t = _(n);
          function n() {
            return d(this, n), t.apply(this, arguments);
          }
          return m(n);
        })(E(Error));
      function qn(e, t, n, r) {
        var a = e.getState();
        if (!a.nodeCleanupFunctions.has(n)) {
          var o = Fn(n),
            i = (function (e, t, n) {
              if (!Dt("recoil_memory_managament_2020")) return function () {};
              var r = e.getState().retention.nodesRetainedByZone;
              function a(e) {
                var n = r.get(e);
                n || r.set(e, (n = new Set())), n.add(t);
              }
              if (n instanceof Wn) a(n);
              else if (Array.isArray(n)) {
                var o,
                  i = x(n);
                try {
                  for (i.s(); !(o = i.n()).done; ) a(o.value);
                } catch (u) {
                  i.e(u);
                } finally {
                  i.f();
                }
              }
              return function () {
                if (Dt("recoil_memory_managament_2020")) {
                  var r = e.getState().retention;
                  if (n instanceof Wn) i(n);
                  else if (Array.isArray(n)) {
                    var a,
                      o = x(n);
                    try {
                      for (o.s(); !(a = o.n()).done; ) i(a.value);
                    } catch (u) {
                      o.e(u);
                    } finally {
                      o.f();
                    }
                  }
                }
                function i(e) {
                  var n = r.nodesRetainedByZone.get(e);
                  null === n || void 0 === n || n.delete(t),
                    n && 0 === n.size && r.nodesRetainedByZone.delete(e);
                }
              };
            })(e, n, o.retainedBy),
            u = o.init(e, t, r);
          a.nodeCleanupFunctions.set(n, function () {
            u(), i();
          });
        }
      }
      function Qn(e, t, n) {
        return Fn(n).peek(e, t);
      }
      function Gn(e, t, n) {
        for (
          var r = new Set(),
            a = Array.from(n),
            o = e.getGraph(t.version),
            i = a.pop();
          i;
          i = a.pop()
        ) {
          var u;
          r.add(i);
          var l,
            s = x(
              null !== (u = o.nodeToNodeSubscriptions.get(i)) && void 0 !== u
                ? u
                : $n
            );
          try {
            for (s.s(); !(l = s.n()).done; ) {
              var c = l.value;
              r.has(c) || a.push(c);
            }
          } catch (f) {
            s.e(f);
          } finally {
            s.f();
          }
        }
        return r;
      }
      var Yn = function (e, t, n) {
          return qn(e, t, n, "get"), Fn(n).get(e, t);
        },
        Jn = Qn,
        Xn = function (e, t, n, r) {
          var a = Fn(n);
          if (null == a.set)
            throw new Kn("Attempt to set read-only RecoilValue: ".concat(n));
          var o = a.set;
          return qn(e, t, n, "set"), o(e, t, r);
        },
        Zn = function (e, t, n) {
          qn(e, e.getState().currentTree, t, n);
        },
        er = function (e, t) {
          var n,
            r = e.getState();
          null === (n = r.nodeCleanupFunctions.get(t)) || void 0 === n || n(),
            r.nodeCleanupFunctions.delete(t);
        },
        tr = function (e, t, n) {
          var r,
            a = Vn(t);
          return (
            null === a ||
              void 0 === a ||
              null === (r = a.invalidate) ||
              void 0 === r ||
              r.call(a, e),
            tt(
              tt({}, e),
              {},
              {
                atomValues: e.atomValues.clone().delete(t),
                nonvalidatedAtoms: e.nonvalidatedAtoms.clone().set(t, n),
                dirtyAtoms: Hn(e.dirtyAtoms, t),
              }
            )
          );
        },
        nr = function (e, t, n) {
          var r = e.getState(),
            a = e.getGraph(t.version),
            o = Fn(n).nodeType;
          return In(
            { type: o },
            {
              loadable: function () {
                return Qn(e, t, n);
              },
              isActive: function () {
                return r.knownAtoms.has(n) || r.knownSelectors.has(n);
              },
              isSet: function () {
                return "selector" !== o && t.atomValues.has(n);
              },
              isModified: function () {
                return t.dirtyAtoms.has(n);
              },
              deps: function () {
                var e;
                return Bn(
                  null !== (e = a.nodeDeps.get(n)) && void 0 !== e ? e : []
                );
              },
              subscribers: function () {
                var a, o;
                return {
                  nodes: Bn(
                    zn(Gn(e, t, new Set([n])), function (e) {
                      return e !== n;
                    })
                  ),
                  components: tn(
                    null !==
                      (a =
                        null === (o = r.nodeToComponentSubscriptions.get(n)) ||
                        void 0 === o
                          ? void 0
                          : o.values()) && void 0 !== a
                      ? a
                      : [],
                    function (e) {
                      return { name: s(e, 1)[0] };
                    }
                  ),
                };
              },
            }
          );
        },
        rr = Gn,
        ar = null;
      var or = function (e) {
          ar = e;
        },
        ir = function () {
          var e;
          null === (e = ar) || void 0 === e || e();
        },
        ur = rr,
        lr = Yn,
        sr = Xn,
        cr = Cn,
        fr = cn.getNode,
        dr = cn.getNodeMaybe,
        pr = cn.DefaultValue,
        hr = Ht.reactMode,
        vr = Zt.AbstractRecoilValue,
        mr = Zt.RecoilState,
        yr = Zt.RecoilValueReadOnly,
        gr = Zt.isRecoilValue,
        br = ir;
      function wr(e, t, n) {
        if ("set" === n.type) {
          var r,
            a = n.recoilValue,
            o = (function (e, t, n, r) {
              var a = n.key;
              if ("function" === typeof r) {
                var o = lr(e, t, a);
                if ("loading" === o.state) {
                  var i = 'Tried to set atom or selector "'.concat(
                    a,
                    '" using an updater function while the current state is pending, this is not currently supported.'
                  );
                  throw (It(i), ut(i));
                }
                if ("hasError" === o.state) throw o.contents;
                return r(o.contents);
              }
              return r;
            })(e, t, a, n.valueOrUpdater),
            i = x(sr(e, t, a.key, o).entries());
          try {
            for (i.s(); !(r = i.n()).done; ) {
              var u = s(r.value, 2);
              Sr(t, u[0], u[1]);
            }
          } catch (h) {
            i.e(h);
          } finally {
            i.f();
          }
        } else if ("setLoadable" === n.type) {
          Sr(t, n.recoilValue.key, n.loadable);
        } else if ("markModified" === n.type) {
          var l = n.recoilValue.key;
          t.dirtyAtoms.add(l);
        } else if ("setUnvalidated" === n.type) {
          var c,
            f = n.recoilValue.key,
            d = n.unvalidatedValue,
            p = dr(f);
          null === p ||
            void 0 === p ||
            null === (c = p.invalidate) ||
            void 0 === c ||
            c.call(p, t),
            t.atomValues.delete(f),
            t.nonvalidatedAtoms.set(f, d),
            t.dirtyAtoms.add(f);
        } else It("Unknown action ".concat(n.type));
      }
      function Sr(e, t, n) {
        "hasValue" === n.state && n.contents instanceof pr
          ? e.atomValues.delete(t)
          : e.atomValues.set(t, n),
          e.dirtyAtoms.add(t),
          e.nonvalidatedAtoms.delete(t);
      }
      function _r(e, t) {
        e.replaceState(function (n) {
          var r,
            a = xr(n),
            o = x(t);
          try {
            for (o.s(); !(r = o.n()).done; ) {
              var i = r.value;
              wr(e, a, i);
            }
          } catch (u) {
            o.e(u);
          } finally {
            o.f();
          }
          return Tr(e, a), br(), a;
        });
      }
      function kr(e, t) {
        if (Er.length) {
          var n = Er[Er.length - 1],
            r = n.get(e);
          r || n.set(e, (r = [])), r.push(t);
        } else _r(e, [t]);
      }
      var Er = [];
      function xr(e) {
        return tt(
          tt({}, e),
          {},
          {
            atomValues: e.atomValues.clone(),
            nonvalidatedAtoms: e.nonvalidatedAtoms.clone(),
            dirtyAtoms: new Set(e.dirtyAtoms),
          }
        );
      }
      function Tr(e, t) {
        var n,
          r = x(ur(e, t, t.dirtyAtoms));
        try {
          for (r.s(); !(n = r.n()).done; ) {
            var a,
              o,
              i = n.value;
            null === (a = dr(i)) ||
              void 0 === a ||
              null === (o = a.invalidate) ||
              void 0 === o ||
              o.call(a, t);
          }
        } catch (u) {
          r.e(u);
        } finally {
          r.f();
        }
      }
      function Rr(e, t, n) {
        kr(e, { type: "set", recoilValue: t, valueOrUpdater: n });
      }
      var Cr = {
        RecoilValueReadOnly: yr,
        AbstractRecoilValue: vr,
        RecoilState: mr,
        getRecoilValueAsLoadable: function (e, t) {
          var n,
            r,
            a = t.key,
            o =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : e.getState().currentTree,
            i = e.getState();
          o.version !== i.currentTree.version &&
            o.version !==
              (null === (n = i.nextTree) || void 0 === n
                ? void 0
                : n.version) &&
            o.version !==
              (null === (r = i.previousTree) || void 0 === r
                ? void 0
                : r.version) &&
            It("Tried to read from a discarded tree");
          var u = lr(e, o, a);
          return "loading" === u.state && u.contents.catch(function () {}), u;
        },
        setRecoilValue: Rr,
        setRecoilValueLoadable: function (e, t, n) {
          if (n instanceof pr) return Rr(e, t, n);
          kr(e, { type: "setLoadable", recoilValue: t, loadable: n });
        },
        markRecoilValueModified: function (e, t) {
          kr(e, { type: "markModified", recoilValue: t });
        },
        setUnvalidatedRecoilValue: function (e, t, n) {
          kr(e, {
            type: "setUnvalidated",
            recoilValue: t,
            unvalidatedValue: n,
          });
        },
        subscribeToRecoilValue: function (e, t, n) {
          var r = t.key,
            a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : null,
            o = cr(),
            i = e.getState();
          i.nodeToComponentSubscriptions.has(r) ||
            i.nodeToComponentSubscriptions.set(r, new Map()),
            st(i.nodeToComponentSubscriptions.get(r)).set(o, [
              null !== a && void 0 !== a ? a : "<not captured>",
              n,
            ]);
          var u = hr();
          if (u.early && ("LEGACY" === u.mode || "MUTABLE_SOURCE" === u.mode)) {
            var l = e.getState().nextTree;
            l && l.dirtyAtoms.has(r) && n(l);
          }
          return {
            release: function () {
              var t = e.getState(),
                n = t.nodeToComponentSubscriptions.get(r);
              void 0 !== n && n.has(o)
                ? (n.delete(o),
                  0 === n.size && t.nodeToComponentSubscriptions.delete(r))
                : It(
                    "Subscription missing at release time for atom ".concat(
                      r,
                      ". This is a bug in Recoil."
                    )
                  );
            },
          };
        },
        isRecoilValue: gr,
        applyAtomValueWrites: function (e, t) {
          var n = e.clone();
          return (
            t.forEach(function (e, t) {
              "hasValue" === e.state && e.contents instanceof pr
                ? n.delete(t)
                : n.set(t, e);
            }),
            n
          );
        },
        batchStart: function () {
          var e = new Map();
          return (
            Er.push(e),
            function () {
              var t,
                n = x(e);
              try {
                for (n.s(); !(t = n.n()).done; ) {
                  var r = s(t.value, 2);
                  _r(r[0], r[1]);
                }
              } catch (a) {
                n.e(a);
              } finally {
                n.f();
              }
              Er.pop() !== e && It("Incorrect order of batch popping");
            }
          );
        },
        writeLoadableToTreeState: Sr,
        invalidateDownstreams: Tr,
        copyTreeState: xr,
        refreshRecoilValue: function (e, t) {
          var n,
            r = e.getState().currentTree,
            a = fr(t.key);
          null === (n = a.clearCache) || void 0 === n || n.call(a, e, r);
        },
      };
      var Nr = function (e, t, n) {
          for (var r = e.entries(), a = r.next(); !a.done; ) {
            var o = a.value;
            if (t.call(n, o[1], o[0], e)) return !0;
            a = r.next();
          }
          return !1;
        },
        Lr = er,
        Or = cn.deleteNodeConfigIfPossible,
        Ar = cn.getNode,
        Pr = Mn.RetentionZone,
        Dr = new Set();
      function Mr(e, t) {
        var n = e.getState(),
          r = n.currentTree;
        if (n.nextTree)
          It(
            "releaseNodesNowOnCurrentTree should only be called at the end of a batch"
          );
        else {
          var a,
            o = new Set(),
            i = x(t);
          try {
            for (i.s(); !(a = i.n()).done; ) {
              var u = a.value;
              if (u instanceof Pr) {
                var l,
                  s = x(Ur(n, u));
                try {
                  for (s.s(); !(l = s.n()).done; ) {
                    var c = l.value;
                    o.add(c);
                  }
                } catch (h) {
                  s.e(h);
                } finally {
                  s.f();
                }
              } else o.add(u);
            }
          } catch (h) {
            i.e(h);
          } finally {
            i.f();
          }
          var f,
            d = (function (e, t) {
              var n = e.getState(),
                r = n.currentTree,
                a = e.getGraph(r.version),
                o = new Set(),
                i = new Set();
              return u(t), o;
              function u(t) {
                var l,
                  s = new Set(),
                  c = (function (e, t, n, r, a) {
                    var o = e.getGraph(t.version),
                      i = [],
                      u = new Set();
                    for (; n.size > 0; ) l(st(n.values().next().value));
                    return i;
                    function l(e) {
                      if (r.has(e) || a.has(e)) n.delete(e);
                      else if (!u.has(e)) {
                        var t = o.nodeToNodeSubscriptions.get(e);
                        if (t) {
                          var s,
                            c = x(t);
                          try {
                            for (c.s(); !(s = c.n()).done; ) {
                              l(s.value);
                            }
                          } catch (h) {
                            c.e(h);
                          } finally {
                            c.f();
                          }
                        }
                        u.add(e), n.delete(e), i.push(e);
                      }
                    }
                  })(e, r, t, o, i),
                  f = x(c);
                try {
                  for (f.s(); !(l = f.n()).done; ) {
                    var d,
                      p = l.value;
                    if ("recoilRoot" !== Ar(p).retainedBy)
                      if (
                        (null !== (d = n.retention.referenceCounts.get(p)) &&
                        void 0 !== d
                          ? d
                          : 0) > 0
                      )
                        i.add(p);
                      else if (
                        zr(p).some(function (e) {
                          return n.retention.referenceCounts.get(e);
                        })
                      )
                        i.add(p);
                      else {
                        var v = a.nodeToNodeSubscriptions.get(p);
                        v &&
                        Nr(v, function (e) {
                          return i.has(e);
                        })
                          ? i.add(p)
                          : (o.add(p), s.add(p));
                      }
                    else i.add(p);
                  }
                } catch (h) {
                  f.e(h);
                } finally {
                  f.f();
                }
                var m,
                  y = new Set(),
                  g = x(s);
                try {
                  for (g.s(); !(m = g.n()).done; ) {
                    var b,
                      w = m.value,
                      S = x(
                        null !== (_ = a.nodeDeps.get(w)) && void 0 !== _
                          ? _
                          : Dr
                      );
                    try {
                      for (S.s(); !(b = S.n()).done; ) {
                        var _,
                          k = b.value;
                        o.has(k) || y.add(k);
                      }
                    } catch (h) {
                      S.e(h);
                    } finally {
                      S.f();
                    }
                  }
                } catch (h) {
                  g.e(h);
                } finally {
                  g.f();
                }
                y.size && u(y);
              }
            })(e, o),
            p = x(d);
          try {
            for (p.s(); !(f = p.n()).done; ) {
              jr(e, r, f.value);
            }
          } catch (h) {
            p.e(h);
          } finally {
            p.f();
          }
        }
      }
      function jr(e, t, n) {
        if (Dt("recoil_memory_managament_2020")) {
          Lr(e, n);
          var r = e.getState();
          r.knownAtoms.delete(n),
            r.knownSelectors.delete(n),
            r.nodeTransactionSubscriptions.delete(n),
            r.retention.referenceCounts.delete(n);
          var a,
            o = x(zr(n));
          try {
            for (o.s(); !(a = o.n()).done; ) {
              var i,
                u = a.value;
              null === (i = r.retention.nodesRetainedByZone.get(u)) ||
                void 0 === i ||
                i.delete(n);
            }
          } catch (h) {
            o.e(h);
          } finally {
            o.f();
          }
          t.atomValues.delete(n),
            t.dirtyAtoms.delete(n),
            t.nonvalidatedAtoms.delete(n);
          var l = r.graphsByVersion.get(t.version);
          if (l) {
            var s = l.nodeDeps.get(n);
            if (void 0 !== s) {
              l.nodeDeps.delete(n);
              var c,
                f = x(s);
              try {
                for (f.s(); !(c = f.n()).done; ) {
                  var d,
                    p = c.value;
                  null === (d = l.nodeToNodeSubscriptions.get(p)) ||
                    void 0 === d ||
                    d.delete(n);
                }
              } catch (h) {
                f.e(h);
              } finally {
                f.f();
              }
            }
            l.nodeToNodeSubscriptions.delete(n);
          }
          Or(n);
        }
      }
      function Ur(e, t) {
        var n;
        return null !== (n = e.retention.nodesRetainedByZone.get(t)) &&
          void 0 !== n
          ? n
          : Dr;
      }
      function zr(e) {
        var t = Ar(e).retainedBy;
        return void 0 === t || "components" === t || "recoilRoot" === t
          ? []
          : t instanceof Pr
          ? [t]
          : t;
      }
      function Ir(e, t) {
        Dt("recoil_memory_managament_2020") &&
          (e.getState().retention.referenceCounts.delete(t),
          (function (e, t) {
            var n = e.getState();
            n.nextTree
              ? n.retention.retainablesToCheckForRelease.add(t)
              : Mr(e, new Set([t]));
          })(e, t));
      }
      var Fr = 12e4,
        Vr = function (e, t, n) {
          var r;
          if (Dt("recoil_memory_managament_2020")) {
            var a = e.getState().retention.referenceCounts,
              o = (null !== (r = a.get(t)) && void 0 !== r ? r : 0) + n;
            0 === o ? Ir(e, t) : a.set(t, o);
          }
        },
        Br = function (e) {
          if (Dt("recoil_memory_managament_2020")) {
            var t = e.getState();
            Mr(e, t.retention.retainablesToCheckForRelease),
              t.retention.retainablesToCheckForRelease.clear();
          }
        },
        Wr = function (e) {
          return void 0 === e ? "recoilRoot" : e;
        },
        Hr = nt.unstable_batchedUpdates,
        $r = Cr.batchStart,
        Kr =
          {
            unstable_batchedUpdates: { unstable_batchedUpdates: Hr }
              .unstable_batchedUpdates,
          }.unstable_batchedUpdates ||
          function (e) {
            return e();
          },
        qr = function (e) {
          Kr(function () {
            var t = function () {};
            try {
              (t = $r()), e();
            } finally {
              t();
            }
          });
        };
      function Qr(e) {
        var t, n, r, a, o, i;
        return Xe().wrap(
          function (u) {
            for (;;)
              switch ((u.prev = u.next)) {
                case 0:
                  (t = x(e)), (u.prev = 1), t.s();
                case 3:
                  if ((n = t.n()).done) {
                    u.next = 24;
                    break;
                  }
                  (r = n.value), (a = x(r)), (u.prev = 6), a.s();
                case 8:
                  if ((o = a.n()).done) {
                    u.next = 14;
                    break;
                  }
                  return (i = o.value), (u.next = 12), i;
                case 12:
                  u.next = 8;
                  break;
                case 14:
                  u.next = 19;
                  break;
                case 16:
                  (u.prev = 16), (u.t0 = u.catch(6)), a.e(u.t0);
                case 19:
                  return (u.prev = 19), a.f(), u.finish(19);
                case 22:
                  u.next = 3;
                  break;
                case 24:
                  u.next = 29;
                  break;
                case 26:
                  (u.prev = 26), (u.t1 = u.catch(1)), t.e(u.t1);
                case 29:
                  return (u.prev = 29), t.f(), u.finish(29);
                case 32:
                case "end":
                  return u.stop();
              }
          },
          it,
          null,
          [
            [1, 26, 29, 32],
            [6, 16, 19, 22],
          ]
        );
      }
      var Gr = Qr,
        Yr = "undefined" === typeof Window || "undefined" === typeof window,
        Jr =
          "undefined" !== typeof navigator &&
          "ReactNative" === navigator.product,
        Xr = {
          isSSR: Yr,
          isReactNative: Jr,
          isWindow: function (e) {
            return !Yr && (e === window || e instanceof Window);
          },
        };
      var Zr = function (e, t) {
          var n, r;
          return [
            function () {
              var a = t.apply(void 0, arguments);
              return n === a ? r : ((n = a), (r = e.apply(void 0, arguments)));
            },
            function () {
              n = null;
            },
          ];
        },
        ea = qr,
        ta = Zn,
        na = nr,
        ra = Sn,
        aa = Rn,
        oa = cn.DEFAULT_VALUE,
        ia = cn.recoilValues,
        ua = cn.recoilValuesForKeys,
        la = Cr.AbstractRecoilValue,
        sa = Cr.getRecoilValueAsLoadable,
        ca = Cr.setRecoilValue,
        fa = Cr.setUnvalidatedRecoilValue,
        da = Vr,
        pa = or,
        ha = Pn.getNextTreeStateVersion,
        va = Pn.makeEmptyStoreState,
        ma = Xr.isSSR,
        ya = Zr,
        ga = (function () {
          function e(t, n) {
            var r = this;
            d(this, e),
              ct(this, "_store", void 0),
              ct(this, "_refCount", 1),
              ct(this, "getLoadable", function (e) {
                return r.checkRefCount_INTERNAL(), sa(r._store, e);
              }),
              ct(this, "getPromise", function (e) {
                return r.checkRefCount_INTERNAL(), r.getLoadable(e).toPromise();
              }),
              ct(this, "getNodes_UNSTABLE", function (e) {
                if (
                  (r.checkRefCount_INTERNAL(),
                  !0 === (null === e || void 0 === e ? void 0 : e.isModified))
                ) {
                  if (
                    !1 ===
                    (null === e || void 0 === e ? void 0 : e.isInitialized)
                  )
                    return [];
                  var t = r._store.getState().currentTree;
                  return ua(t.dirtyAtoms);
                }
                var n = r._store.getState().knownAtoms,
                  a = r._store.getState().knownSelectors;
                return null ==
                  (null === e || void 0 === e ? void 0 : e.isInitialized)
                  ? ia.values()
                  : !0 === e.isInitialized
                  ? ua(Gr([n, a]))
                  : zn(ia.values(), function (e) {
                      var t = e.key;
                      return !n.has(t) && !a.has(t);
                    });
              }),
              ct(this, "getInfo_UNSTABLE", function (e) {
                var t = e.key;
                return (
                  r.checkRefCount_INTERNAL(),
                  na(r._store, r._store.getState().currentTree, t)
                );
              }),
              ct(this, "map", function (e) {
                r.checkRefCount_INTERNAL();
                var t = new ka(r, ea);
                return e(t), t;
              }),
              ct(
                this,
                "asyncMap",
                (function () {
                  var e = Je(
                    Xe().mark(function e(t) {
                      var n;
                      return Xe().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                r.checkRefCount_INTERNAL(),
                                (n = new ka(r, ea)).retain(),
                                (e.next = 5),
                                t(n)
                              );
                            case 5:
                              return (
                                n.autoRelease_INTERNAL(), e.abrupt("return", n)
                              );
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              ),
              (this._store = {
                storeID: aa(),
                parentStoreID: n,
                getState: function () {
                  return t;
                },
                replaceState: function (e) {
                  t.currentTree = e(t.currentTree);
                },
                getGraph: function (e) {
                  var n = t.graphsByVersion;
                  if (n.has(e)) return st(n.get(e));
                  var r = ra();
                  return n.set(e, r), r;
                },
                subscribeToTransactions: function () {
                  return { release: function () {} };
                },
                addTransactionMetadata: function () {
                  throw ut("Cannot subscribe to Snapshots");
                },
              });
            var a,
              o = x(this._store.getState().knownAtoms);
            try {
              for (o.s(); !(a = o.n()).done; ) {
                var i = a.value;
                ta(this._store, i, "get"), da(this._store, i, 1);
              }
            } catch (u) {
              o.e(u);
            } finally {
              o.f();
            }
            this.autoRelease_INTERNAL();
          }
          return (
            m(e, [
              {
                key: "retain",
                value: function () {
                  var e = this;
                  this._refCount <= 0 &&
                    It(
                      "Attempt to retain() Snapshot that was already released."
                    ),
                    this._refCount++;
                  var t = !1;
                  return function () {
                    t || ((t = !0), e._release());
                  };
                },
              },
              {
                key: "autoRelease_INTERNAL",
                value: function () {
                  var e = this;
                  ma ||
                    window.setTimeout(function () {
                      return e._release();
                    }, 10);
                },
              },
              {
                key: "_release",
                value: function () {
                  if ((this._refCount--, 0 === this._refCount)) {
                    if (
                      (this._store
                        .getState()
                        .nodeCleanupFunctions.forEach(function (e) {
                          return e();
                        }),
                      this._store.getState().nodeCleanupFunctions.clear(),
                      !Dt("recoil_memory_managament_2020"))
                    )
                      return;
                  } else this._refCount;
                },
              },
              {
                key: "isRetained",
                value: function () {
                  return this._refCount > 0;
                },
              },
              {
                key: "checkRefCount_INTERNAL",
                value: function () {
                  Dt("recoil_memory_managament_2020") && this._refCount;
                },
              },
              {
                key: "getStore_INTERNAL",
                value: function () {
                  return this.checkRefCount_INTERNAL(), this._store;
                },
              },
              {
                key: "getID",
                value: function () {
                  return (
                    this.checkRefCount_INTERNAL(),
                    this._store.getState().currentTree.stateID
                  );
                },
              },
              {
                key: "getStoreID",
                value: function () {
                  return this.checkRefCount_INTERNAL(), this._store.storeID;
                },
              },
            ]),
            e
          );
        })();
      function ba(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = e.getState(),
          a = n ? ha() : t.version;
        return {
          currentTree: {
            version: n ? a : t.version,
            stateID: n ? a : t.stateID,
            transactionMetadata: tt({}, t.transactionMetadata),
            dirtyAtoms: new Set(t.dirtyAtoms),
            atomValues: t.atomValues.clone(),
            nonvalidatedAtoms: t.nonvalidatedAtoms.clone(),
          },
          commitDepth: 0,
          nextTree: null,
          previousTree: null,
          knownAtoms: new Set(r.knownAtoms),
          knownSelectors: new Set(r.knownSelectors),
          transactionSubscriptions: new Map(),
          nodeTransactionSubscriptions: new Map(),
          nodeToComponentSubscriptions: new Map(),
          queuedComponentCallbacks_DEPRECATED: [],
          suspendedComponentResolvers: new Set(),
          graphsByVersion: new Map().set(a, e.getGraph(t.version)),
          retention: {
            referenceCounts: new Map(),
            nodesRetainedByZone: new Map(),
            retainablesToCheckForRelease: new Set(),
          },
          nodeCleanupFunctions: new Map(
            tn(r.nodeCleanupFunctions.entries(), function (e) {
              return [s(e, 1)[0], function () {}];
            })
          ),
        };
      }
      var wa = s(
          ya(
            function (e, t) {
              var n,
                r = e.getState(),
                a =
                  "latest" === t
                    ? null !== (n = r.nextTree) && void 0 !== n
                      ? n
                      : r.currentTree
                    : st(r.previousTree);
              return new ga(ba(e, a), e.storeID);
            },
            function (e, t) {
              var n, r;
              return (
                String(t) +
                String(e.storeID) +
                String(
                  null === (n = e.getState().nextTree) || void 0 === n
                    ? void 0
                    : n.version
                ) +
                String(e.getState().currentTree.version) +
                String(
                  null === (r = e.getState().previousTree) || void 0 === r
                    ? void 0
                    : r.version
                )
              );
            }
          ),
          2
        ),
        Sa = wa[0],
        _a = wa[1];
      pa(_a);
      var ka = (function (e) {
          g(n, e);
          var t = _(n);
          function n(e, r) {
            var a;
            return (
              d(this, n),
              ct(
                S(
                  (a = t.call(
                    this,
                    ba(
                      e.getStore_INTERNAL(),
                      e.getStore_INTERNAL().getState().currentTree,
                      !0
                    ),
                    e.getStoreID()
                  ))
                ),
                "_batch",
                void 0
              ),
              ct(S(a), "set", function (e, t) {
                a.checkRefCount_INTERNAL();
                var n = a.getStore_INTERNAL();
                a._batch(function () {
                  da(n, e.key, 1), ca(a.getStore_INTERNAL(), e, t);
                });
              }),
              ct(S(a), "reset", function (e) {
                a.checkRefCount_INTERNAL();
                var t = a.getStore_INTERNAL();
                a._batch(function () {
                  da(t, e.key, 1), ca(a.getStore_INTERNAL(), e, oa);
                });
              }),
              ct(S(a), "setUnvalidatedAtomValues_DEPRECATED", function (e) {
                a.checkRefCount_INTERNAL();
                var t = a.getStore_INTERNAL();
                ea(function () {
                  var n,
                    r = x(e.entries());
                  try {
                    for (r.s(); !(n = r.n()).done; ) {
                      var a = s(n.value, 2),
                        o = a[0],
                        i = a[1];
                      da(t, o, 1), fa(t, new la(o), i);
                    }
                  } catch (u) {
                    r.e(u);
                  } finally {
                    r.f();
                  }
                });
              }),
              (a._batch = r),
              a
            );
          }
          return m(n);
        })(ga),
        Ea = {
          Snapshot: ga,
          MutableSnapshot: ka,
          freshSnapshot: function (e) {
            var t = new ga(va());
            return null != e ? t.map(e) : t;
          },
          cloneSnapshot: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "latest",
              n = Sa(e, t);
            return n.isRetained() ? n : (_a(), Sa(e, t));
          },
        },
        xa = Ea.Snapshot,
        Ta = Ea.MutableSnapshot,
        Ra = Ea.freshSnapshot,
        Ca = Ea.cloneSnapshot,
        Na = Object.freeze({
          __proto__: null,
          Snapshot: xa,
          MutableSnapshot: Ta,
          freshSnapshot: Ra,
          cloneSnapshot: Ca,
        });
      var La = function () {
          for (
            var e = new Set(), t = arguments.length, n = new Array(t), r = 0;
            r < t;
            r++
          )
            n[r] = arguments[r];
          for (var a = 0, o = n; a < o.length; a++) {
            var i,
              u = x(o[a]);
            try {
              for (u.s(); !(i = u.n()).done; ) {
                var l = i.value;
                e.add(l);
              }
            } catch (s) {
              u.e(s);
            } finally {
              u.f();
            }
          }
          return e;
        },
        Oa = t.useRef;
      var Aa = function (e) {
          var t = Oa(e);
          return (
            t.current === e && "function" === typeof e && (t.current = e()), t
          );
        },
        Pa = Pn.getNextTreeStateVersion,
        Da = Pn.makeEmptyStoreState,
        Ma = er,
        ja = rr,
        Ua = Zn,
        za = Xn,
        Ia = tr,
        Fa = Sn,
        Va = wn,
        Ba = Rn,
        Wa = Ht.createMutableSource,
        Ha = Ht.reactMode,
        $a = Cr.applyAtomValueWrites,
        Ka = Br,
        qa = Na.freshSnapshot,
        Qa = t.useCallback,
        Ga = t.useContext,
        Ya = t.useEffect,
        Ja = t.useMemo,
        Xa = t.useRef,
        Za = t.useState;
      function eo() {
        throw ut(
          "This component must be used inside a <RecoilRoot> component."
        );
      }
      var to = Object.freeze({
          storeID: Ba(),
          getState: eo,
          replaceState: eo,
          getGraph: eo,
          subscribeToTransactions: eo,
          addTransactionMetadata: eo,
        }),
        no = !1;
      function ro(e) {
        if (no)
          throw ut(
            "An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions."
          );
        var t = e.getState();
        if (null === t.nextTree) {
          Dt("recoil_memory_managament_2020") &&
            Dt("recoil_release_on_cascading_update_killswitch_2021") &&
            t.commitDepth > 0 &&
            Ka(e);
          var n = t.currentTree.version,
            r = Pa();
          (t.nextTree = tt(
            tt({}, t.currentTree),
            {},
            {
              version: r,
              stateID: r,
              dirtyAtoms: new Set(),
              transactionMetadata: {},
            }
          )),
            t.graphsByVersion.set(r, Va(st(t.graphsByVersion.get(n))));
        }
      }
      var ao = t.createContext({ current: to }),
        oo = function () {
          return Ga(ao);
        },
        io = t.createContext(null);
      function uo(e, t, n) {
        var r,
          a = x(ja(e, n, n.dirtyAtoms));
        try {
          for (a.s(); !(r = a.n()).done; ) {
            var o = r.value,
              i = t.nodeToComponentSubscriptions.get(o);
            if (i) {
              var u,
                l = x(i);
              try {
                for (l.s(); !(u = l.n()).done; ) {
                  var c = s(u.value, 2),
                    f = (c[0], s(c[1], 2));
                  f[0];
                  (0, f[1])(n);
                }
              } catch (d) {
                l.e(d);
              } finally {
                l.f();
              }
            }
          }
        } catch (d) {
          a.e(d);
        } finally {
          a.f();
        }
      }
      function lo(e) {
        var t = e.getState(),
          n = t.currentTree,
          r = n.dirtyAtoms;
        if (r.size) {
          var a,
            o = x(t.nodeTransactionSubscriptions);
          try {
            for (o.s(); !(a = o.n()).done; ) {
              var i = s(a.value, 2),
                u = i[0],
                l = i[1];
              if (r.has(u)) {
                var c,
                  f = x(l);
                try {
                  for (f.s(); !(c = f.n()).done; ) {
                    var d = s(c.value, 2);
                    d[0];
                    (0, d[1])(e);
                  }
                } catch (m) {
                  f.e(m);
                } finally {
                  f.f();
                }
              }
            }
          } catch (m) {
            o.e(m);
          } finally {
            o.f();
          }
          var p,
            h = x(t.transactionSubscriptions);
          try {
            for (h.s(); !(p = h.n()).done; ) {
              var v = s(p.value, 2);
              v[0];
              (0, v[1])(e);
            }
          } catch (m) {
            h.e(m);
          } finally {
            h.f();
          }
          (!Ha().early || t.suspendedComponentResolvers.size > 0) &&
            (uo(e, t, n),
            t.suspendedComponentResolvers.forEach(function (e) {
              return e();
            }),
            t.suspendedComponentResolvers.clear());
        }
        t.queuedComponentCallbacks_DEPRECATED.forEach(function (e) {
          return e(n);
        }),
          t.queuedComponentCallbacks_DEPRECATED.splice(
            0,
            t.queuedComponentCallbacks_DEPRECATED.length
          );
      }
      function so(e) {
        var t = e.setNotifyBatcherOfChange,
          n = oo(),
          r = s(Za([]), 2)[1];
        return (
          t(function () {
            return r({});
          }),
          Ya(
            function () {
              return (
                t(function () {
                  return r({});
                }),
                function () {
                  t(function () {});
                }
              );
            },
            [t]
          ),
          Ya(function () {
            fn.enqueueExecution("Batcher", function () {
              !(function (e) {
                var t = e.getState();
                t.commitDepth++;
                try {
                  var n = t.nextTree;
                  if (null == n) return;
                  (t.previousTree = t.currentTree),
                    (t.currentTree = n),
                    (t.nextTree = null),
                    lo(e),
                    null != t.previousTree
                      ? t.graphsByVersion.delete(t.previousTree.version)
                      : It(
                          "Ended batch with no previous state, which is unexpected",
                          "recoil"
                        ),
                    (t.previousTree = null),
                    Dt("recoil_memory_managament_2020") && null == n && Ka(e);
                } finally {
                  t.commitDepth--;
                }
              })(n.current);
            });
          }),
          null
        );
      }
      var co = 0;
      function fo(e) {
        var n,
          r = e.initializeState_DEPRECATED,
          a = e.initializeState,
          o = e.store_INTERNAL,
          i = e.children,
          u = function (e) {
            var t = n.current.graphsByVersion;
            if (t.has(e)) return st(t.get(e));
            var r = Fa();
            return t.set(e, r), r;
          },
          l = function (e, t) {
            if (null == t) {
              var n = p.current.getState().transactionSubscriptions,
                r = co++;
              return (
                n.set(r, e),
                {
                  release: function () {
                    n.delete(r);
                  },
                }
              );
            }
            var a = p.current.getState().nodeTransactionSubscriptions;
            a.has(t) || a.set(t, new Map());
            var o = co++;
            return (
              st(a.get(t)).set(o, e),
              {
                release: function () {
                  var e = a.get(t);
                  e && (e.delete(o), 0 === e.size && a.delete(t));
                },
              }
            );
          },
          s = function (e) {
            ro(p.current);
            for (var t = 0, n = Object.keys(e); t < n.length; t++) {
              var r = n[t];
              st(p.current.getState().nextTree).transactionMetadata[r] = e[r];
            }
          },
          c = function (e) {
            ro(p.current);
            var t,
              r = st(n.current.nextTree);
            try {
              (no = !0), (t = e(r));
            } finally {
              no = !1;
            }
            t !== r &&
              ((n.current.nextTree = t),
              Ha().early && uo(p.current, n.current, t),
              st(f.current)());
          },
          f = Xa(null),
          d = Qa(
            function (e) {
              f.current = e;
            },
            [f]
          ),
          p = Aa(function () {
            return null !== o && void 0 !== o
              ? o
              : {
                  storeID: Ba(),
                  getState: function () {
                    return n.current;
                  },
                  replaceState: c,
                  getGraph: u,
                  subscribeToTransactions: l,
                  addTransactionMetadata: s,
                };
          });
        null != o && (p.current = o),
          (n = Aa(function () {
            return null != r
              ? (function (e, t) {
                  var n = Da();
                  return (
                    t({
                      set: function (t, r) {
                        var a,
                          o = n.currentTree,
                          i = za(e, o, t.key, r),
                          u = new Set(i.keys()),
                          l = o.nonvalidatedAtoms.clone(),
                          s = x(u);
                        try {
                          for (s.s(); !(a = s.n()).done; ) {
                            var c = a.value;
                            l.delete(c);
                          }
                        } catch (f) {
                          s.e(f);
                        } finally {
                          s.f();
                        }
                        n.currentTree = tt(
                          tt({}, o),
                          {},
                          {
                            dirtyAtoms: La(o.dirtyAtoms, u),
                            atomValues: $a(o.atomValues, i),
                            nonvalidatedAtoms: l,
                          }
                        );
                      },
                      setUnvalidatedAtomValues: function (e) {
                        e.forEach(function (e, t) {
                          n.currentTree = Ia(n.currentTree, t, e);
                        });
                      },
                    }),
                    n
                  );
                })(p.current, r)
              : null != a
              ? (function (e) {
                  var t = qa(e),
                    n = t.getStore_INTERNAL().getState();
                  return (
                    t.retain(),
                    n.nodeCleanupFunctions.forEach(function (e) {
                      return e();
                    }),
                    n.nodeCleanupFunctions.clear(),
                    n
                  );
                })(a)
              : Da();
          }));
        var h = Ja(
          function () {
            return null === Wa || void 0 === Wa
              ? void 0
              : Wa(n, function () {
                  return n.current.currentTree.version;
                });
          },
          [n]
        );
        return (
          Ya(
            function () {
              var e,
                t = p.current,
                n = x(new Set(t.getState().knownAtoms));
              try {
                for (n.s(); !(e = n.n()).done; ) {
                  var r = e.value;
                  Ua(t, r, "get");
                }
              } catch (a) {
                n.e(a);
              } finally {
                n.f();
              }
              return function () {
                var e,
                  n = x(t.getState().knownAtoms);
                try {
                  for (n.s(); !(e = n.n()).done; ) {
                    var r = e.value;
                    Ma(t, r);
                  }
                } catch (a) {
                  n.e(a);
                } finally {
                  n.f();
                }
              };
            },
            [p]
          ),
          t.createElement(
            ao.Provider,
            { value: p },
            t.createElement(
              io.Provider,
              { value: h },
              t.createElement(so, { setNotifyBatcherOfChange: d }),
              i
            )
          )
        );
      }
      var po = {
        RecoilRoot: function (e) {
          var n = e.override,
            r = Ge(e, rt),
            a = oo();
          return !1 === n && a.current !== to
            ? e.children
            : t.createElement(fo, r);
        },
        useStoreRef: oo,
        useRecoilMutableSource: function () {
          var e = Ga(io);
          return (
            null == e &&
              en(
                "Attempted to use a Recoil hook outside of a <RecoilRoot>. <RecoilRoot> must be an ancestor of any component that uses Recoil hooks."
              ),
            e
          );
        },
        useRecoilStoreID: function () {
          return oo().current.storeID;
        },
        notifyComponents_FOR_TESTING: uo,
        sendEndOfBatchNotifications_FOR_TESTING: lo,
      };
      var ho = function (e, t) {
          if (e === t) return !0;
          if (e.length !== t.length) return !1;
          for (var n = 0, r = e.length; n < r; n++)
            if (e[n] !== t[n]) return !1;
          return !0;
        },
        vo = t.useEffect,
        mo = t.useRef;
      var yo = function (e) {
          var t = mo();
          return (
            vo(function () {
              t.current = e;
            }),
            t.current
          );
        },
        go = po.useStoreRef,
        bo = Fr,
        wo = Vr,
        So = Mn.RetentionZone,
        _o = t.useEffect,
        ko = t.useRef,
        Eo = Xr.isSSR;
      var xo = function (e) {
        if (Dt("recoil_memory_managament_2020"))
          return (function (e) {
            var t = Array.isArray(e) ? e : [e],
              n = t.map(function (e) {
                return e instanceof So ? e : e.key;
              }),
              r = go();
            _o(function () {
              if (Dt("recoil_memory_managament_2020")) {
                var e = r.current;
                if (a.current && !Eo)
                  window.clearTimeout(a.current), (a.current = null);
                else {
                  var t,
                    o = x(n);
                  try {
                    for (o.s(); !(t = o.n()).done; ) {
                      var i = t.value;
                      wo(e, i, 1);
                    }
                  } catch (u) {
                    o.e(u);
                  } finally {
                    o.f();
                  }
                }
                return function () {
                  var t,
                    r = x(n);
                  try {
                    for (r.s(); !(t = r.n()).done; ) {
                      var a = t.value;
                      wo(e, a, -1);
                    }
                  } catch (u) {
                    r.e(u);
                  } finally {
                    r.f();
                  }
                };
              }
            }, [r].concat(f(n)));
            var a = ko(),
              o = yo(n);
            if (!Eo && (void 0 === o || !ho(o, n))) {
              var i,
                u = r.current,
                l = x(n);
              try {
                for (l.s(); !(i = l.n()).done; ) {
                  var s = i.value;
                  wo(u, s, 1);
                }
              } catch (h) {
                l.e(h);
              } finally {
                l.f();
              }
              if (o) {
                var c,
                  d = x(o);
                try {
                  for (d.s(); !(c = d.n()).done; ) {
                    var p = c.value;
                    wo(u, p, -1);
                  }
                } catch (h) {
                  d.e(h);
                } finally {
                  d.f();
                }
              }
              a.current && window.clearTimeout(a.current),
                (a.current = window.setTimeout(function () {
                  a.current = null;
                  var e,
                    t = x(n);
                  try {
                    for (t.s(); !(e = t.n()).done; ) {
                      var r = e.value;
                      wo(u, r, -1);
                    }
                  } catch (h) {
                    t.e(h);
                  } finally {
                    t.f();
                  }
                }, bo));
            }
          })(e);
      };
      var To = function () {
          return "<component name not available>";
        },
        Ro = cn.DEFAULT_VALUE,
        Co = Ht.currentRendererSupportsUseSyncExternalStore,
        No = Ht.reactMode,
        Lo = Ht.useMutableSource,
        Oo = Ht.useSyncExternalStore,
        Ao = po.useRecoilMutableSource,
        Po = po.useStoreRef,
        Do = (Zt.isRecoilValue, Cr.getRecoilValueAsLoadable),
        Mo = Cr.setRecoilValue,
        jo = Cr.subscribeToRecoilValue,
        Uo = t.useCallback,
        zo = t.useEffect,
        Io = t.useMemo,
        Fo = t.useRef,
        Vo = t.useState,
        Bo = Xr.isSSR;
      function Wo(e, t, n) {
        if ("hasValue" === e.state) return e.contents;
        if ("loading" === e.state)
          throw new Promise(function (t) {
            var r = n.current.getState().suspendedComponentResolvers;
            r.add(t),
              Bo &&
                lt(e.contents) &&
                e.contents.finally(function () {
                  r.delete(t);
                });
          });
        throw "hasError" === e.state
          ? e.contents
          : ut('Invalid value of loadable atom "'.concat(t.key, '"'));
      }
      function Ho(e) {
        var t = Po(),
          n = To(),
          r = Uo(
            function () {
              var n;
              var r = t.current,
                a = r.getState(),
                o =
                  No().early && null !== (n = a.nextTree) && void 0 !== n
                    ? n
                    : a.currentTree;
              return { loadable: Do(r, e, o), key: e.key };
            },
            [t, e]
          ),
          a = Uo(function (e) {
            var t;
            return function () {
              var n,
                r,
                a = e();
              return null !== (n = t) &&
                void 0 !== n &&
                n.loadable.is(a.loadable) &&
                (null === (r = t) || void 0 === r ? void 0 : r.key) === a.key
                ? t
                : ((t = a), a);
            };
          }, []),
          o = Io(
            function () {
              return a(r);
            },
            [r, a]
          ),
          i = Uo(
            function (r) {
              var a = t.current;
              return jo(a, e, r, n).release;
            },
            [t, e, n]
          );
        return Oo(i, o, o).loadable;
      }
      function $o(e) {
        var t = Po(),
          n = Uo(
            function () {
              var n,
                r = t.current,
                a = r.getState(),
                o =
                  No().early && null !== (n = a.nextTree) && void 0 !== n
                    ? n
                    : a.currentTree;
              return Do(r, e, o);
            },
            [t, e]
          ),
          r = Uo(
            function () {
              return n();
            },
            [n]
          ),
          a = To(),
          o = Uo(
            function (r, o) {
              var i = t.current;
              return jo(
                i,
                e,
                function () {
                  if (!Dt("recoil_suppress_rerender_in_callback")) return o();
                  var e = n();
                  l.current.is(e) || o(), (l.current = e);
                },
                a
              ).release;
            },
            [t, e, a, n]
          ),
          i = Ao();
        if (null == i)
          throw ut(
            "Recoil hooks must be used in components contained within a <RecoilRoot> component."
          );
        var u = Lo(i, r, o),
          l = Fo(u);
        return (
          zo(function () {
            l.current = u;
          }),
          u
        );
      }
      function Ko(e) {
        var t = Po(),
          n = To(),
          r = Uo(
            function () {
              var n;
              var r = t.current,
                a = r.getState(),
                o =
                  No().early && null !== (n = a.nextTree) && void 0 !== n
                    ? n
                    : a.currentTree;
              return Do(r, e, o);
            },
            [t, e]
          ),
          a = Uo(
            function () {
              return { loadable: r(), key: e.key };
            },
            [r, e.key]
          ),
          o = Uo(
            function (e) {
              var t = a();
              return e.loadable.is(t.loadable) && e.key === t.key ? e : t;
            },
            [a]
          );
        zo(
          function () {
            var r = jo(
              t.current,
              e,
              function (e) {
                l(o);
              },
              n
            );
            return l(o), r.release;
          },
          [n, e, t, o]
        );
        var i = s(Vo(a), 2),
          u = i[0],
          l = i[1];
        return u.key !== e.key ? a().loadable : u.loadable;
      }
      function qo(e) {
        var t = Po(),
          n = s(Vo([]), 2)[1],
          r = To(),
          a = Uo(
            function () {
              var n;
              var r = t.current,
                a = r.getState(),
                o =
                  No().early && null !== (n = a.nextTree) && void 0 !== n
                    ? n
                    : a.currentTree;
              return Do(r, e, o);
            },
            [t, e]
          ),
          o = a(),
          i = Fo(o);
        return (
          zo(function () {
            i.current = o;
          }),
          zo(
            function () {
              var o = t.current,
                u = o.getState(),
                l = jo(
                  o,
                  e,
                  function (e) {
                    var t;
                    if (!Dt("recoil_suppress_rerender_in_callback"))
                      return n([]);
                    var r = a();
                    (null !== (t = i.current) && void 0 !== t && t.is(r)) ||
                      n(r),
                      (i.current = r);
                  },
                  r
                );
              if (u.nextTree)
                o.getState().queuedComponentCallbacks_DEPRECATED.push(
                  function () {
                    (i.current = null), n([]);
                  }
                );
              else {
                var s;
                if (!Dt("recoil_suppress_rerender_in_callback")) return n([]);
                var c = a();
                (null !== (s = i.current) && void 0 !== s && s.is(c)) || n(c),
                  (i.current = c);
              }
              return l.release;
            },
            [r, a, e, t]
          ),
          o
        );
      }
      function Qo(e) {
        return (
          Dt("recoil_memory_managament_2020") && xo(e),
          {
            TRANSITION_SUPPORT: Ko,
            SYNC_EXTERNAL_STORE: Co() ? Ho : Ko,
            MUTABLE_SOURCE: $o,
            LEGACY: qo,
          }[No().mode](e)
        );
      }
      function Go(e) {
        var t = Po();
        return Wo(Qo(e), e, t);
      }
      function Yo(e) {
        var t = Po();
        return Uo(
          function (n) {
            Mo(t.current, e, n);
          },
          [t, e]
        );
      }
      function Jo(e) {
        return Dt("recoil_memory_managament_2020") && xo(e), Ko(e);
      }
      function Xo(e) {
        var t = Po();
        return Wo(Jo(e), e, t);
      }
      var Zo = function (e) {
          return [Go(e), Yo(e)];
        },
        ei = function (e) {
          return [Qo(e), Yo(e)];
        },
        ti = Go,
        ni = Qo,
        ri = function (e) {
          var t = Po();
          return Uo(
            function () {
              Mo(t.current, e, Ro);
            },
            [t, e]
          );
        },
        ai = Yo,
        oi = Jo,
        ii = Xo,
        ui = function (e) {
          return [Xo(e), Yo(e)];
        };
      var li = qr,
        si = cn.DEFAULT_VALUE,
        ci = cn.getNode,
        fi = po.useStoreRef,
        di = Cr.AbstractRecoilValue,
        pi = Cr.setRecoilValueLoadable,
        hi = Fr,
        vi = Na.cloneSnapshot,
        mi = t.useCallback,
        yi = t.useEffect,
        gi = t.useRef,
        bi = t.useState,
        wi = Xr.isSSR;
      function Si(e) {
        var t = fi();
        yi(
          function () {
            return t.current.subscribeToTransactions(e).release;
          },
          [e, t]
        );
      }
      function _i(e, t) {
        var n,
          r = e.getState(),
          a = null !== (n = r.nextTree) && void 0 !== n ? n : r.currentTree,
          o = t.getStore_INTERNAL().getState().currentTree;
        li(function () {
          for (
            var n = new Set(),
              r = 0,
              i = [a.atomValues.keys(), o.atomValues.keys()];
            r < i.length;
            r++
          ) {
            var u,
              l = x(i[r]);
            try {
              for (l.s(); !(u = l.n()).done; ) {
                var s,
                  c,
                  f = u.value;
                (null === (s = a.atomValues.get(f)) || void 0 === s
                  ? void 0
                  : s.contents) !==
                  (null === (c = o.atomValues.get(f)) || void 0 === c
                    ? void 0
                    : c.contents) &&
                  ci(f).shouldRestoreFromSnapshots &&
                  n.add(f);
              }
            } catch (d) {
              l.e(d);
            } finally {
              l.f();
            }
          }
          n.forEach(function (t) {
            pi(
              e,
              new di(t),
              o.atomValues.has(t) ? st(o.atomValues.get(t)) : si
            );
          }),
            e.replaceState(function (e) {
              return tt(tt({}, e), {}, { stateID: t.getID() });
            });
        });
      }
      var ki = function () {
          var e = fi(),
            t = s(
              bi(function () {
                return vi(e.current);
              }),
              2
            ),
            n = t[0],
            r = t[1],
            a = yo(n),
            o = gi(),
            i = gi();
          if (
            (Si(
              mi(function (e) {
                return r(vi(e));
              }, [])
            ),
            yi(
              function () {
                var e,
                  t = n.retain();
                o.current &&
                  !wi &&
                  (window.clearTimeout(o.current),
                  (o.current = null),
                  null === (e = i.current) || void 0 === e || e.call(i),
                  (i.current = null));
                return function () {
                  window.setTimeout(t, 10);
                };
              },
              [n]
            ),
            a !== n && !wi)
          ) {
            var u;
            if (o.current)
              window.clearTimeout(o.current),
                (o.current = null),
                null === (u = i.current) || void 0 === u || u.call(i),
                (i.current = null);
            (i.current = n.retain()),
              (o.current = window.setTimeout(function () {
                var e;
                (o.current = null),
                  null === (e = i.current) || void 0 === e || e.call(i),
                  (i.current = null);
              }, hi));
          }
          return n;
        },
        Ei = _i,
        xi = function () {
          var e = fi();
          return mi(
            function (t) {
              return _i(e.current, t);
            },
            [e]
          );
        },
        Ti = function (e) {
          Si(
            mi(
              function (t) {
                var n = vi(t, "latest"),
                  r = vi(t, "previous");
                e({ snapshot: n, previousSnapshot: r });
              },
              [e]
            )
          );
        },
        Ri = nr,
        Ci = po.useStoreRef;
      var Ni = function () {
          var e = Ci();
          return function (t) {
            var n = t.key;
            return Ri(e.current, e.current.getState().currentTree, n);
          };
        },
        Li = Ht.reactMode,
        Oi = po.RecoilRoot,
        Ai = po.useStoreRef,
        Pi = t.useMemo;
      var Di = function () {
          "MUTABLE_SOURCE" === Li().mode &&
            console.warn(
              "Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode."
            );
          var e = Ai().current;
          return Pi(
            function () {
              return function (n) {
                var r = n.children;
                return t.createElement(Oi, { store_INTERNAL: e }, r);
              };
            },
            [e]
          );
        },
        Mi = Lt.loadableWithValue,
        ji = Zn,
        Ui = cn.DEFAULT_VALUE,
        zi = cn.getNode,
        Ii = Cr.copyTreeState,
        Fi = Cr.getRecoilValueAsLoadable,
        Vi = Cr.invalidateDownstreams,
        Bi = Cr.writeLoadableToTreeState;
      function Wi(e) {
        return "atom" === zi(e.key).nodeType;
      }
      var Hi = (function () {
        function e(t, n) {
          var r = this;
          d(this, e),
            ct(this, "_store", void 0),
            ct(this, "_treeState", void 0),
            ct(this, "_changes", void 0),
            ct(this, "get", function (e) {
              if (r._changes.has(e.key)) return r._changes.get(e.key);
              if (!Wi(e))
                throw ut(
                  "Reading selectors within atomicUpdate is not supported"
                );
              var t = Fi(r._store, e, r._treeState);
              if ("hasValue" === t.state) return t.contents;
              throw "hasError" === t.state
                ? t.contents
                : ut(
                    "Expected Recoil atom ".concat(
                      e.key,
                      " to have a value, but it is in a loading state."
                    )
                  );
            }),
            ct(this, "set", function (e, t) {
              if (!Wi(e))
                throw ut(
                  "Setting selectors within atomicUpdate is not supported"
                );
              if ("function" === typeof t) {
                var n = r.get(e);
                r._changes.set(e.key, t(n));
              } else ji(r._store, e.key, "set"), r._changes.set(e.key, t);
            }),
            ct(this, "reset", function (e) {
              r.set(e, Ui);
            }),
            (this._store = t),
            (this._treeState = n),
            (this._changes = new Map());
        }
        return (
          m(e, [
            {
              key: "newTreeState_INTERNAL",
              value: function () {
                if (0 === this._changes.size) return this._treeState;
                var e,
                  t = Ii(this._treeState),
                  n = x(this._changes);
                try {
                  for (n.s(); !(e = n.n()).done; ) {
                    var r = s(e.value, 2),
                      a = r[0],
                      o = r[1];
                    Bi(t, a, Mi(o));
                  }
                } catch (i) {
                  n.e(i);
                } finally {
                  n.f();
                }
                return Vi(this._store, t), t;
              },
            },
          ]),
          e
        );
      })();
      var $i = function (e) {
          return function (t) {
            e.replaceState(function (n) {
              var r = new Hi(e, n);
              return t(r), r.newTreeState_INTERNAL();
            });
          };
        },
        Ki = Object.freeze({ __proto__: null, atomicUpdater: $i });
      var qi = function (e, t) {
          if (!e) throw new Error(t);
        },
        Qi = Ki.atomicUpdater,
        Gi = qr,
        Yi = cn.DEFAULT_VALUE,
        Ji = po.useStoreRef,
        Xi = Cr.refreshRecoilValue,
        Zi = Cr.setRecoilValue,
        eu = Na.cloneSnapshot,
        tu = Ei,
        nu = t.useCallback,
        ru = m(function e() {
          d(this, e);
        }),
        au = new ru();
      function ou(e, t, n, r) {
        var a,
          o,
          i = au;
        (Gi(function () {
          var o =
            "useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";
          if ("function" !== typeof t) throw ut(o);
          var u = In(
              tt(
                tt({}, null !== r && void 0 !== r ? r : {}),
                {},
                {
                  set: function (t, n) {
                    return Zi(e, t, n);
                  },
                  reset: function (t) {
                    return Zi(e, t, Yi);
                  },
                  refresh: function (t) {
                    return Xi(e, t);
                  },
                  gotoSnapshot: function (t) {
                    return tu(e, t);
                  },
                  transact_UNSTABLE: function (t) {
                    return Qi(e)(t);
                  },
                }
              ),
              {
                snapshot: function () {
                  var t = eu(e);
                  return (a = t.retain()), t;
                },
              }
            ),
            l = t(u);
          if ("function" !== typeof l) throw ut(o);
          i = l.apply(void 0, f(n));
        }),
        i instanceof ru && qi(!1),
        lt(i))
          ? (i = i.finally(function () {
              var e;
              null === (e = a) || void 0 === e || e();
            }))
          : null === (o = a) || void 0 === o || o();
        return i;
      }
      var iu = ou,
        uu = function (e, t) {
          var n = Ji();
          return nu(
            function () {
              for (
                var t = arguments.length, r = new Array(t), a = 0;
                a < t;
                a++
              )
                r[a] = arguments[a];
              return ou(n.current, e, r);
            },
            null != t ? [].concat(f(t), [n]) : void 0
          );
        },
        lu = po.useStoreRef,
        su = Cr.refreshRecoilValue,
        cu = t.useCallback;
      var fu = function (e) {
          var t = lu();
          return cu(
            function () {
              var n = t.current;
              su(n, e);
            },
            [e, t]
          );
        },
        du = Ki.atomicUpdater,
        pu = po.useStoreRef,
        hu = t.useMemo;
      var vu = function (e, t) {
          var n = pu();
          return hu(
            function () {
              return function () {
                for (
                  var t = arguments.length, r = new Array(t), a = 0;
                  a < t;
                  a++
                )
                  r[a] = arguments[a];
                du(n.current)(function (t) {
                  e(t).apply(void 0, r);
                });
              };
            },
            null != t ? [].concat(f(t), [n]) : void 0
          );
        },
        mu = {
          WrappedValue: m(function e(t) {
            d(this, e), ct(this, "value", void 0), (this.value = t);
          }),
        }.WrappedValue,
        yu = Object.freeze({ __proto__: null, WrappedValue: mu }),
        gu = Ht.isFastRefreshEnabled,
        bu = (function (e) {
          g(n, e);
          var t = _(n);
          function n() {
            return d(this, n), t.apply(this, arguments);
          }
          return m(n);
        })(E(Error)),
        wu = (function () {
          function e(t) {
            var n, r, a;
            d(this, e),
              ct(this, "_name", void 0),
              ct(this, "_numLeafs", void 0),
              ct(this, "_root", void 0),
              ct(this, "_onHit", void 0),
              ct(this, "_onSet", void 0),
              ct(this, "_mapNodeValue", void 0),
              (this._name = null === t || void 0 === t ? void 0 : t.name),
              (this._numLeafs = 0),
              (this._root = null),
              (this._onHit =
                null !== (n = null === t || void 0 === t ? void 0 : t.onHit) &&
                void 0 !== n
                  ? n
                  : function () {}),
              (this._onSet =
                null !== (r = null === t || void 0 === t ? void 0 : t.onSet) &&
                void 0 !== r
                  ? r
                  : function () {}),
              (this._mapNodeValue =
                null !==
                  (a = null === t || void 0 === t ? void 0 : t.mapNodeValue) &&
                void 0 !== a
                  ? a
                  : function (e) {
                      return e;
                    });
          }
          return (
            m(e, [
              {
                key: "size",
                value: function () {
                  return this._numLeafs;
                },
              },
              {
                key: "root",
                value: function () {
                  return this._root;
                },
              },
              {
                key: "get",
                value: function (e, t) {
                  var n;
                  return null === (n = this.getLeafNode(e, t)) || void 0 === n
                    ? void 0
                    : n.value;
                },
              },
              {
                key: "getLeafNode",
                value: function (e, t) {
                  if (null != this._root)
                    for (var n = this._root; n; ) {
                      if (
                        (null === t || void 0 === t || t.onNodeVisit(n),
                        "leaf" === n.type)
                      )
                        return this._onHit(n), n;
                      var r = this._mapNodeValue(e(n.nodeKey));
                      n = n.branches.get(r);
                    }
                },
              },
              {
                key: "set",
                value: function (e, t, n) {
                  var r = this,
                    a = function () {
                      var a,
                        o,
                        i,
                        u,
                        l,
                        c,
                        f,
                        d = x(e);
                      try {
                        for (d.s(); !(f = d.n()).done; ) {
                          var p,
                            h,
                            v,
                            m = s(f.value, 2),
                            y = m[0],
                            g = m[1],
                            b = r._root;
                          if (
                            "leaf" ===
                            (null === b || void 0 === b ? void 0 : b.type)
                          )
                            throw r.invalidCacheError();
                          var w = l;
                          if (
                            "branch" !==
                              (l =
                                null !== (p = l = w ? w.branches.get(c) : b) &&
                                void 0 !== p
                                  ? p
                                  : {
                                      type: "branch",
                                      nodeKey: y,
                                      parent: w,
                                      branches: new Map(),
                                      branchKey: c,
                                    }).type ||
                            l.nodeKey !== y
                          )
                            throw r.invalidCacheError();
                          null === w || void 0 === w || w.branches.set(c, l),
                            null === n ||
                              void 0 === n ||
                              null === (h = n.onNodeVisit) ||
                              void 0 === h ||
                              h.call(n, l),
                            (c = r._mapNodeValue(g)),
                            (r._root =
                              null !== (v = r._root) && void 0 !== v ? v : l);
                        }
                      } catch (k) {
                        d.e(k);
                      } finally {
                        d.f();
                      }
                      var S = l
                        ? null === (a = l) || void 0 === a
                          ? void 0
                          : a.branches.get(c)
                        : r._root;
                      if (null != S && ("leaf" !== S.type || S.branchKey !== c))
                        throw r.invalidCacheError();
                      var _ = {
                        type: "leaf",
                        value: t,
                        parent: l,
                        branchKey: c,
                      };
                      null === (o = l) || void 0 === o || o.branches.set(c, _),
                        (r._root =
                          null !== (i = r._root) && void 0 !== i ? i : _),
                        r._numLeafs++,
                        r._onSet(_),
                        null === n ||
                          void 0 === n ||
                          null === (u = n.onNodeVisit) ||
                          void 0 === u ||
                          u.call(n, _);
                    };
                  try {
                    a();
                  } catch (o) {
                    if (!(o instanceof bu)) throw o;
                    this.clear(), a();
                  }
                },
              },
              {
                key: "delete",
                value: function (e) {
                  var t = this.root();
                  if (!t) return !1;
                  if (e === t)
                    return (this._root = null), (this._numLeafs = 0), !0;
                  for (var n = e.parent, r = e.branchKey; n; ) {
                    var a;
                    if ((n.branches.delete(r), n === t))
                      return (
                        0 === n.branches.size
                          ? ((this._root = null), (this._numLeafs = 0))
                          : this._numLeafs--,
                        !0
                      );
                    if (n.branches.size > 0) break;
                    (r =
                      null === (a = n) || void 0 === a ? void 0 : a.branchKey),
                      (n = n.parent);
                  }
                  for (; n !== t; n = n.parent) if (null == n) return !1;
                  return this._numLeafs--, !0;
                },
              },
              {
                key: "clear",
                value: function () {
                  (this._numLeafs = 0), (this._root = null);
                },
              },
              {
                key: "invalidCacheError",
                value: function () {
                  var e = gu()
                    ? "Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache."
                    : "Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.";
                  throw (
                    (It(
                      e + (null != this._name ? " - ".concat(this._name) : "")
                    ),
                    new bu())
                  );
                },
              },
            ]),
            e
          );
        })(),
        Su = { TreeCache: wu }.TreeCache,
        _u = Object.freeze({ __proto__: null, TreeCache: Su }),
        ku = {
          LRUCache: (function () {
            function e(t) {
              var n;
              d(this, e),
                ct(this, "_maxSize", void 0),
                ct(this, "_size", void 0),
                ct(this, "_head", void 0),
                ct(this, "_tail", void 0),
                ct(this, "_map", void 0),
                ct(this, "_keyMapper", void 0),
                (this._maxSize = t.maxSize),
                (this._size = 0),
                (this._head = null),
                (this._tail = null),
                (this._map = new Map()),
                (this._keyMapper =
                  null !== (n = t.mapKey) && void 0 !== n
                    ? n
                    : function (e) {
                        return e;
                      });
            }
            return (
              m(e, [
                {
                  key: "head",
                  value: function () {
                    return this._head;
                  },
                },
                {
                  key: "tail",
                  value: function () {
                    return this._tail;
                  },
                },
                {
                  key: "size",
                  value: function () {
                    return this._size;
                  },
                },
                {
                  key: "maxSize",
                  value: function () {
                    return this._maxSize;
                  },
                },
                {
                  key: "has",
                  value: function (e) {
                    return this._map.has(this._keyMapper(e));
                  },
                },
                {
                  key: "get",
                  value: function (e) {
                    var t = this._keyMapper(e),
                      n = this._map.get(t);
                    if (n) return this.set(e, n.value), n.value;
                  },
                },
                {
                  key: "set",
                  value: function (e, t) {
                    var n = this._keyMapper(e);
                    this._map.get(n) && this.delete(e);
                    var r = this.head(),
                      a = { key: e, right: r, left: null, value: t };
                    r ? (r.left = a) : (this._tail = a),
                      this._map.set(n, a),
                      (this._head = a),
                      this._size++,
                      this._maybeDeleteLRU();
                  },
                },
                {
                  key: "_maybeDeleteLRU",
                  value: function () {
                    this.size() > this.maxSize() && this.deleteLru();
                  },
                },
                {
                  key: "deleteLru",
                  value: function () {
                    var e = this.tail();
                    e && this.delete(e.key);
                  },
                },
                {
                  key: "delete",
                  value: function (e) {
                    var t = this._keyMapper(e);
                    if (this._size && this._map.has(t)) {
                      var n = st(this._map.get(t)),
                        r = n.right,
                        a = n.left;
                      r && (r.left = n.left),
                        a && (a.right = n.right),
                        n === this.head() && (this._head = r),
                        n === this.tail() && (this._tail = a),
                        this._map.delete(t),
                        this._size--;
                    }
                  },
                },
                {
                  key: "clear",
                  value: function () {
                    (this._size = 0),
                      (this._head = null),
                      (this._tail = null),
                      (this._map = new Map());
                  },
                },
              ]),
              e
            );
          })(),
        }.LRUCache,
        Eu = Object.freeze({ __proto__: null, LRUCache: ku }),
        xu = Eu.LRUCache,
        Tu = _u.TreeCache;
      var Ru = function (e) {
        var t = e.name,
          n = e.maxSize,
          r = e.mapNodeValue,
          a =
            void 0 === r
              ? function (e) {
                  return e;
                }
              : r,
          o = new xu({ maxSize: n }),
          i = new Tu({
            name: t,
            mapNodeValue: a,
            onHit: function (e) {
              o.set(e, !0);
            },
            onSet: function (e) {
              var t = o.tail();
              o.set(e, !0), t && i.size() > n && i.delete(t.key);
            },
          });
        return i;
      };
      function Cu(e, t, n) {
        if ("string" === typeof e && !e.includes('"') && !e.includes("\\"))
          return '"'.concat(e, '"');
        switch (typeof e) {
          case "undefined":
            return "";
          case "boolean":
            return e ? "true" : "false";
          case "number":
          case "symbol":
            return String(e);
          case "string":
            return JSON.stringify(e);
          case "function":
            if (!0 !== (null === t || void 0 === t ? void 0 : t.allowFunctions))
              throw ut("Attempt to serialize function in a Recoil cache key");
            return "__FUNCTION(".concat(e.name, ")__");
        }
        if (null === e) return "null";
        var r;
        if ("object" !== typeof e)
          return null !== (r = JSON.stringify(e)) && void 0 !== r ? r : "";
        if (lt(e)) return "__PROMISE__";
        if (Array.isArray(e))
          return "[".concat(
            e.map(function (e, n) {
              return Cu(e, t, n.toString());
            }),
            "]"
          );
        if ("function" === typeof e.toJSON) return Cu(e.toJSON(n), t, n);
        if (e instanceof Map) {
          var a,
            o = {},
            i = x(e);
          try {
            for (i.s(); !(a = i.n()).done; ) {
              var u = s(a.value, 2),
                l = u[0],
                c = u[1];
              o["string" === typeof l ? l : Cu(l, t)] = c;
            }
          } catch (f) {
            i.e(f);
          } finally {
            i.f();
          }
          return Cu(o, t, n);
        }
        return e instanceof Set
          ? Cu(
              Array.from(e).sort(function (e, n) {
                return Cu(e, t).localeCompare(Cu(n, t));
              }),
              t,
              n
            )
          : void 0 !== Symbol &&
            null != e[Symbol.iterator] &&
            "function" === typeof e[Symbol.iterator]
          ? Cu(Array.from(e), t, n)
          : "{".concat(
              Object.keys(e)
                .filter(function (t) {
                  return void 0 !== e[t];
                })
                .sort()
                .map(function (n) {
                  return "".concat(Cu(n, t), ":").concat(Cu(e[n], t, n));
                })
                .join(","),
              "}"
            );
      }
      var Nu = function (e) {
          return Cu(
            e,
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { allowFunctions: !1 }
          );
        },
        Lu = _u.TreeCache,
        Ou = { equality: "reference", eviction: "keep-all", maxSize: 1 / 0 };
      var Au = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ou,
          t = e.equality,
          n = void 0 === t ? Ou.equality : t,
          r = e.eviction,
          a = void 0 === r ? Ou.eviction : r,
          o = e.maxSize,
          i = void 0 === o ? Ou.maxSize : o,
          u = arguments.length > 1 ? arguments[1] : void 0,
          l = (function (e) {
            switch (e) {
              case "reference":
                return function (e) {
                  return e;
                };
              case "value":
                return function (e) {
                  return Nu(e);
                };
            }
            throw ut("Unrecognized equality policy ".concat(e));
          })(n);
        return (function (e, t, n, r) {
          switch (e) {
            case "keep-all":
              return new Lu({ name: r, mapNodeValue: n });
            case "lru":
              return Ru({ name: r, maxSize: st(t), mapNodeValue: n });
            case "most-recent":
              return Ru({ name: r, maxSize: 1, mapNodeValue: n });
          }
          throw ut("Unrecognized eviction policy ".concat(e));
        })(a, i, l, u);
      };
      var Pu = function (e) {
          return function () {
            return null;
          };
        },
        Du = Lt.isLoadable,
        Mu = Lt.loadableWithError,
        ju = Lt.loadableWithPromise,
        Uu = Lt.loadableWithValue,
        zu = yu.WrappedValue,
        Iu = Yn,
        Fu = Jn,
        Vu = Xn,
        Bu = _n,
        Wu = cn.DEFAULT_VALUE,
        Hu = cn.getConfigDeletionHandler,
        $u = cn.getNode,
        Ku = cn.registerNode,
        qu = Zt.isRecoilValue,
        Qu = Cr.markRecoilValueModified,
        Gu = Wr,
        Yu = iu,
        Ju = Pu,
        Xu = m(function e() {
          d(this, e);
        }),
        Zu = new Xu(),
        el = [],
        tl = new Map(),
        nl = (function () {
          var e = 0;
          return function () {
            return e++;
          };
        })();
      function rl(e) {
        var t = null,
          n = e.key,
          r = e.get,
          a = e.cachePolicy_UNSTABLE,
          o = null != e.set ? e.set : void 0;
        var i = new Set(),
          u = Au(
            null !== a && void 0 !== a
              ? a
              : { equality: "reference", eviction: "keep-all" },
            n
          ),
          l = Gu(e.retainedBy_UNSTABLE),
          c = new Map(),
          f = 0;
        function d() {
          return !Dt("recoil_memory_managament_2020") || f > 0;
        }
        function p(e) {
          return (
            e.getState().knownSelectors.add(n),
            f++,
            function () {
              f--;
            }
          );
        }
        function h() {
          return void 0 !== Hu(n) && !d();
        }
        function v(e, t, n, r, a) {
          N(t, r, a), m(e, n);
        }
        function m(e, t) {
          C(e, t) && R(e), y(t, !0);
        }
        function y(e, n) {
          var r = tl.get(e);
          if (null != r) {
            var a,
              o = x(r);
            try {
              for (o.s(); !(a = o.n()).done; ) {
                var i = a.value;
                Qu(i, st(t));
              }
            } catch (u) {
              o.e(u);
            } finally {
              o.f();
            }
            n && tl.delete(e);
          }
        }
        function g(e, t) {
          var n = tl.get(t);
          null == n && tl.set(t, (n = new Set())), n.add(e);
        }
        function b(e, t, n, r, a, o) {
          return t
            .then(function (r) {
              if (!d()) throw (R(e), Zu);
              null != o.loadingDepKey && o.loadingDepPromise === t
                ? n.atomValues.set(o.loadingDepKey, Uu(r))
                : e.getState().knownSelectors.forEach(function (e) {
                    n.atomValues.delete(e);
                  });
              var i = _(e, n);
              if (i && "loading" !== i.state) {
                if (
                  ((C(e, a) || null == T(e)) && m(e, a), "hasValue" === i.state)
                )
                  return i.contents;
                throw i.contents;
              }
              if (!C(e, a)) {
                var u = E(e, n);
                if (null != u) return u.loadingLoadable.contents;
              }
              var l = s(S(e, n, a), 2),
                c = l[0],
                f = l[1];
              if (
                ("loading" !== c.state && v(e, n, a, c, f),
                "hasError" === c.state)
              )
                throw c.contents;
              return c.contents;
            })
            .catch(function (t) {
              if (t instanceof Xu) throw Zu;
              if (!d()) throw (R(e), Zu);
              var o = Mu(t);
              throw (v(e, n, a, o, r), t);
            });
        }
        function w(e, t, r, a) {
          var o, u, l, s, c, f, d;
          (C(e, a) ||
            t.version ===
              (null === (o = e.getState()) ||
              void 0 === o ||
              null === (u = o.currentTree) ||
              void 0 === u
                ? void 0
                : u.version) ||
            t.version ===
              (null === (l = e.getState()) ||
              void 0 === l ||
              null === (s = l.nextTree) ||
              void 0 === s
                ? void 0
                : s.version)) &&
            Bu(
              n,
              r,
              e,
              null !==
                (c =
                  null === (f = e.getState()) ||
                  void 0 === f ||
                  null === (d = f.nextTree) ||
                  void 0 === d
                    ? void 0
                    : d.version) && void 0 !== c
                ? c
                : e.getState().currentTree.version
            );
          var p,
            h = x(r);
          try {
            for (h.s(); !(p = h.n()).done; ) {
              var v = p.value;
              i.add(v);
            }
          } catch (m) {
            h.e(m);
          } finally {
            h.f();
          }
        }
        function S(e, a, o) {
          var i,
            u,
            l = Ju(n),
            s = !0,
            c = !0,
            f = function () {
              l(), (c = !1);
            },
            p = !1,
            h = { loadingDepKey: null, loadingDepPromise: null },
            m = new Map();
          function g(t) {
            var n = t.key,
              r = Iu(e, a, n);
            switch (
              (m.set(n, r),
              s ||
                (w(e, a, new Set(m.keys()), o),
                (function (e, t) {
                  C(e, t) && (st(T(e)).stateVersions.clear(), y(t, !1));
                })(e, o)),
              r.state)
            ) {
              case "hasValue":
                return r.contents;
              case "hasError":
                throw r.contents;
              case "loading":
                throw (
                  ((h.loadingDepKey = n),
                  (h.loadingDepPromise = r.contents),
                  r.contents)
                );
            }
            throw ut("Invalid Loadable state");
          }
          try {
            (i = r({
              get: g,
              getCallback: function (n) {
                return function () {
                  if (c)
                    throw ut(
                      "Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription."
                    );
                  null == t && qi(!1);
                  for (
                    var r = arguments.length, a = new Array(r), o = 0;
                    o < r;
                    o++
                  )
                    a[o] = arguments[o];
                  return Yu(e, n, a, { node: t });
                };
              },
            })),
              (i = qu(i) ? g(i) : i),
              Du(i) && ("hasError" === i.state && (p = !0), (i = i.contents)),
              lt(i)
                ? (i = (function (e, t, n, r, a, o) {
                    return t
                      .then(function (t) {
                        if (!d()) throw (R(e), Zu);
                        var o = Uu(t);
                        return v(e, n, a, o, r), t;
                      })
                      .catch(function (t) {
                        if (!d()) throw (R(e), Zu);
                        if (lt(t)) return b(e, t, n, r, a, o);
                        var i = Mu(t);
                        throw (v(e, n, a, i, r), t);
                      });
                  })(e, i, a, m, o, h).finally(f))
                : f(),
              (i = i instanceof zu ? i.value : i);
          } catch (S) {
            lt((i = S))
              ? (i = b(e, i, a, m, o, h).finally(f))
              : ((p = !0), f());
          }
          return (
            (u = p ? Mu(i) : lt(i) ? ju(i) : Uu(i)),
            (s = !1),
            (function (e, t, n) {
              if (C(e, t)) {
                var r = T(e);
                null != r && (r.depValuesDiscoveredSoFarDuringAsyncWork = n);
              }
            })(e, o, m),
            w(e, a, new Set(m.keys()), o),
            [u, m]
          );
        }
        function _(e, t) {
          var r = t.atomValues.get(n);
          if (null != r) return r;
          var a,
            o = new Set();
          try {
            r = u.get(
              function (n) {
                return "string" !== typeof n && qi(!1), Iu(e, t, n).contents;
              },
              {
                onNodeVisit: function (e) {
                  "branch" === e.type && e.nodeKey !== n && o.add(e.nodeKey);
                },
              }
            );
          } catch (i) {
            throw ut(
              'Problem with cache lookup for selector "'
                .concat(n, '": ')
                .concat(i.message)
            );
          }
          r &&
            (t.atomValues.set(n, r),
            w(
              e,
              t,
              o,
              null === (a = T(e)) || void 0 === a ? void 0 : a.executionID
            ));
          return r;
        }
        function k(e, t) {
          var n = _(e, t);
          if (null != n) return R(e), n;
          var r,
            a = E(e, t);
          if (null != a)
            return (
              "loading" ===
                (null === (r = a.loadingLoadable) || void 0 === r
                  ? void 0
                  : r.state) && g(e, a.executionID),
              a.loadingLoadable
            );
          var o = nl(),
            i = s(S(e, t, o), 2),
            u = i[0],
            l = i[1];
          return (
            "loading" === u.state
              ? (!(function (e, t, n, r, a) {
                  c.set(e, {
                    depValuesDiscoveredSoFarDuringAsyncWork: r,
                    executionID: t,
                    loadingLoadable: n,
                    stateVersions: new Map([[a.version, !0]]),
                  });
                })(e, o, u, l, t),
                g(e, o))
              : (R(e), N(t, u, l)),
            u
          );
        }
        function E(e, t) {
          function n(n) {
            var r,
              a = x(n);
            try {
              for (a.s(); !(r = a.n()).done; ) {
                var o = s(r.value, 2),
                  i = o[0],
                  u = o[1];
                if (!Iu(e, t, i).is(u)) return !0;
              }
            } catch (l) {
              a.e(l);
            } finally {
              a.f();
            }
            return !1;
          }
          var r,
            a = x(
              Gr([
                c.has(e) ? [st(c.get(e))] : [],
                tn(
                  zn(c, function (t) {
                    return s(t, 1)[0] !== e;
                  }),
                  function (e) {
                    return s(e, 2)[1];
                  }
                ),
              ])
            );
          try {
            for (a.s(); !(r = a.n()).done; ) {
              var o = r.value;
              if (
                o.stateVersions.get(t.version) ||
                !n(o.depValuesDiscoveredSoFarDuringAsyncWork)
              )
                return o.stateVersions.set(t.version, !0), o;
              o.stateVersions.set(t.version, !1);
            }
          } catch (i) {
            a.e(i);
          } finally {
            a.f();
          }
        }
        function T(e) {
          return c.get(e);
        }
        function R(e) {
          c.delete(e);
        }
        function C(e, t) {
          var n;
          return (
            t === (null === (n = T(e)) || void 0 === n ? void 0 : n.executionID)
          );
        }
        function N(e, t, r) {
          e.atomValues.set(n, t);
          try {
            u.set(
              (function (e) {
                return Array.from(e.entries()).map(function (e) {
                  var t = s(e, 2);
                  return [t[0], t[1].contents];
                });
              })(r),
              t
            );
          } catch (a) {
            throw ut(
              'Problem with setting cache for selector "'
                .concat(n, '": ')
                .concat(a.message)
            );
          }
        }
        function L(e, t) {
          var r = t.atomValues.get(n);
          return null != r
            ? r
            : u.get(function (n) {
                var r;
                return (
                  "string" !== typeof n && qi(!1),
                  null === (r = Fu(e, t, n)) || void 0 === r
                    ? void 0
                    : r.contents
                );
              });
        }
        function O(e, t) {
          return (function (e) {
            if (el.includes(n)) {
              var t = "Recoil selector has circular dependencies: ".concat(
                el.slice(el.indexOf(n)).join(" \u2192 ")
              );
              return Mu(ut(t));
            }
            el.push(n);
            try {
              return e();
            } finally {
              el.pop();
            }
          })(function () {
            return k(e, t);
          });
        }
        function A(e) {
          e.atomValues.delete(n);
        }
        function P(e, n) {
          null == t && qi(!1);
          var r,
            a = x(i);
          try {
            for (a.s(); !(r = a.n()).done; ) {
              var o,
                l = r.value,
                s = $u(l);
              null === (o = s.clearCache) || void 0 === o || o.call(s, e, n);
            }
          } catch (c) {
            a.e(c);
          } finally {
            a.f();
          }
          i.clear(), A(n), u.clear(), Qu(e, t);
        }
        if (null != o) {
          return (t = Ku({
            key: n,
            nodeType: "selector",
            peek: L,
            get: O,
            set: function (e, t, r) {
              var a = !1,
                i = new Map();
              function u(r) {
                var o = r.key;
                if (a)
                  throw ut(
                    "Recoil: Async selector sets are not currently supported."
                  );
                var i = Iu(e, t, o);
                if ("hasValue" === i.state) return i.contents;
                if ("loading" === i.state) {
                  var u = 'Getting value of asynchronous atom or selector "'
                    .concat(o, '" in a pending state while setting selector "')
                    .concat(n, '" is not yet supported.');
                  throw (It(u), ut(u));
                }
                throw i.contents;
              }
              function l(n, r) {
                if (a) {
                  var o =
                    "Recoil: Async selector sets are not currently supported.";
                  throw (It(o), ut(o));
                }
                var l = "function" === typeof r ? r(u(n)) : r;
                Vu(e, t, n.key, l).forEach(function (e, t) {
                  return i.set(t, e);
                });
              }
              var s = o(
                {
                  set: l,
                  get: u,
                  reset: function (e) {
                    l(e, Wu);
                  },
                },
                r
              );
              if (void 0 !== s)
                throw lt(s)
                  ? ut(
                      "Recoil: Async selector sets are not currently supported."
                    )
                  : ut("Recoil: selector set should be a void function.");
              return (a = !0), i;
            },
            init: p,
            invalidate: A,
            clearCache: P,
            shouldDeleteConfigOnRelease: h,
            dangerouslyAllowMutability: e.dangerouslyAllowMutability,
            shouldRestoreFromSnapshots: !1,
            retainedBy: l,
          }));
        }
        return (t = Ku({
          key: n,
          nodeType: "selector",
          peek: L,
          get: O,
          init: p,
          invalidate: A,
          clearCache: P,
          shouldDeleteConfigOnRelease: h,
          dangerouslyAllowMutability: e.dangerouslyAllowMutability,
          shouldRestoreFromSnapshots: !1,
          retainedBy: l,
        }));
      }
      rl.value = function (e) {
        return new zu(e);
      };
      var al = rl,
        ol = Lt.isLoadable,
        il = Lt.loadableWithError,
        ul = Lt.loadableWithPromise,
        ll = Lt.loadableWithValue,
        sl = yu.WrappedValue,
        cl = nr,
        fl = cn.DEFAULT_VALUE,
        dl = cn.DefaultValue,
        pl = cn.getConfigDeletionHandler,
        hl = cn.registerNode,
        vl = cn.setConfigDeletionHandler,
        ml = Zt.isRecoilValue,
        yl = Cr.getRecoilValueAsLoadable,
        gl = Cr.markRecoilValueModified,
        bl = Cr.setRecoilValue,
        wl = Cr.setRecoilValueLoadable,
        Sl = Wr,
        _l = function (e) {
          return e instanceof sl ? e.value : e;
        };
      function kl(e) {
        var t = e.key,
          n = e.persistence_UNSTABLE,
          r = Sl(e.retainedBy_UNSTABLE),
          a = 0;
        function o(e) {
          return ul(
            e
              .then(function (e) {
                return (i = ll(e)), e;
              })
              .catch(function (e) {
                throw ((i = il(e)), e);
              })
          );
        }
        var i = lt(e.default)
          ? o(e.default)
          : ol(e.default)
          ? "loading" === e.default.state
            ? o(e.default.contents)
            : e.default
          : ll(_l(e.default));
        s(i.contents);
        var u = void 0,
          l = new Map();
        function s(e) {
          return e;
        }
        function c(e, n) {
          var r, a;
          return null !==
            (r = null !== (a = n.atomValues.get(t)) && void 0 !== a ? a : u) &&
            void 0 !== r
            ? r
            : i;
        }
        var d = hl({
          key: t,
          nodeType: "atom",
          peek: c,
          get: function (e, r) {
            if (r.atomValues.has(t)) return st(r.atomValues.get(t));
            if (r.nonvalidatedAtoms.has(t)) {
              if (null != u) return u;
              if (null == n)
                return (
                  en(
                    "Tried to restore a persisted value for atom ".concat(
                      t,
                      " but it has no persistence settings."
                    )
                  ),
                  i
                );
              var a = r.nonvalidatedAtoms.get(t),
                o = n.validator(a, fl),
                l = o instanceof dl ? i : ll(o);
              return (u = l);
            }
            return i;
          },
          set: function (e, n, r) {
            if (n.atomValues.has(t)) {
              var a = st(n.atomValues.get(t));
              if ("hasValue" === a.state && r === a.contents) return new Map();
            } else if (!n.nonvalidatedAtoms.has(t) && r instanceof dl)
              return new Map();
            return (u = void 0), new Map().set(t, ll(r));
          },
          init: function (n, r, o) {
            var u;
            if ((a++, n.getState().knownAtoms.add(t), "loading" === i.state)) {
              i.contents.finally(function () {
                var e;
                (null !== (e = n.getState().nextTree) && void 0 !== e
                  ? e
                  : n.getState().currentTree
                ).atomValues.has(t) || gl(n, d);
              });
            }
            var s =
              null !== (u = e.effects) && void 0 !== u ? u : e.effects_UNSTABLE;
            if (null != s) {
              var p,
                h = function (e) {
                  if (g && e.key === t) {
                    var a = y;
                    return a instanceof dl
                      ? c(n, r)
                      : lt(a)
                      ? ul(
                          a.then(function (e) {
                            return e instanceof dl ? i.toPromise() : e;
                          })
                        )
                      : ll(a);
                  }
                  return yl(n, e);
                },
                v = function (e) {
                  return h(e).toPromise();
                },
                m = function (e) {
                  var r,
                    a = cl(
                      n,
                      null !== (r = n.getState().nextTree) && void 0 !== r
                        ? r
                        : n.getState().currentTree,
                      e.key
                    );
                  return !g || e.key !== t || y instanceof dl
                    ? a
                    : tt(tt({}, a), {}, { isSet: !0, loadable: h(e) });
                },
                y = fl,
                g = !0,
                b = !1,
                w = null,
                S = function (e) {
                  return function (t) {
                    if (g) {
                      var r = h(d),
                        a = "hasValue" === r.state ? r.contents : fl;
                      (y = "function" === typeof t ? t(a) : t),
                        lt(y) &&
                          (y = y.then(function (t) {
                            return (w = { effect: e, value: t }), t;
                          }));
                    } else {
                      if (lt(t))
                        throw ut(
                          "Setting atoms to async values is not implemented."
                        );
                      "function" !== typeof t &&
                        (w = { effect: e, value: _l(t) }),
                        bl(
                          n,
                          d,
                          "function" === typeof t
                            ? function (n) {
                                var r = _l(t(n));
                                return (w = { effect: e, value: r }), r;
                              }
                            : _l(t)
                        );
                    }
                  };
                },
                _ = function (e) {
                  return function () {
                    return S(e)(fl);
                  };
                },
                k = function (e) {
                  return function (r) {
                    var a,
                      o = n.subscribeToTransactions(function (n) {
                        var a,
                          o = n.getState(),
                          u = o.currentTree,
                          l = o.previousTree;
                        l ||
                          (It(
                            "Transaction subscribers notified without a next tree being present -- this is a bug in Recoil"
                          ),
                          (l = u));
                        var s =
                          null !== (a = u.atomValues.get(t)) && void 0 !== a
                            ? a
                            : i;
                        if ("hasValue" === s.state) {
                          var c,
                            f,
                            d,
                            p,
                            h = s.contents,
                            v =
                              null !== (c = l.atomValues.get(t)) && void 0 !== c
                                ? c
                                : i,
                            m = "hasValue" === v.state ? v.contents : fl;
                          (null === (f = w) || void 0 === f
                            ? void 0
                            : f.effect) !== e ||
                          (null === (d = w) || void 0 === d
                            ? void 0
                            : d.value) !== h
                            ? r(h, m, !u.atomValues.has(t))
                            : (null === (p = w) || void 0 === p
                                ? void 0
                                : p.effect) === e && (w = null);
                        }
                      }, t).release;
                    l.set(
                      n,
                      [].concat(
                        f(null !== (a = l.get(n)) && void 0 !== a ? a : []),
                        [o]
                      )
                    );
                  };
                },
                E = x(s);
              try {
                for (E.s(); !(p = E.n()).done; ) {
                  var T = p.value;
                  try {
                    var R,
                      C = T({
                        node: d,
                        storeID: n.storeID,
                        parentStoreID_UNSTABLE: n.parentStoreID,
                        trigger: o,
                        setSelf: S(T),
                        resetSelf: _(T),
                        onSet: k(T),
                        getPromise: v,
                        getLoadable: h,
                        getInfo_UNSTABLE: m,
                      });
                    if (null != C)
                      l.set(
                        n,
                        [].concat(
                          f(null !== (R = l.get(n)) && void 0 !== R ? R : []),
                          [C]
                        )
                      );
                  } catch (O) {
                    (y = O), (b = !0);
                  }
                }
              } catch (A) {
                E.e(A);
              } finally {
                E.f();
              }
              if (((g = !1), !(y instanceof dl))) {
                var N,
                  L = b
                    ? il(y)
                    : lt(y)
                    ? ul(
                        (function (e, n) {
                          var r = n
                            .then(function (n) {
                              var a, o;
                              return (
                                (null ===
                                  (o = (
                                    null !== (a = e.getState().nextTree) &&
                                    void 0 !== a
                                      ? a
                                      : e.getState().currentTree
                                  ).atomValues.get(t)) || void 0 === o
                                  ? void 0
                                  : o.contents) === r && bl(e, d, n),
                                n
                              );
                            })
                            .catch(function (n) {
                              var a, o;
                              throw (
                                ((null ===
                                  (o = (
                                    null !== (a = e.getState().nextTree) &&
                                    void 0 !== a
                                      ? a
                                      : e.getState().currentTree
                                  ).atomValues.get(t)) || void 0 === o
                                  ? void 0
                                  : o.contents) === r && wl(e, d, il(n)),
                                n)
                              );
                            });
                          return r;
                        })(n, y)
                      )
                    : ll(_l(y));
                L.contents,
                  r.atomValues.set(t, L),
                  null === (N = n.getState().nextTree) ||
                    void 0 === N ||
                    N.atomValues.set(t, L);
              }
            }
            return function () {
              var e;
              a--,
                null === (e = l.get(n)) ||
                  void 0 === e ||
                  e.forEach(function (e) {
                    return e();
                  }),
                l.delete(n);
            };
          },
          invalidate: function () {
            u = void 0;
          },
          shouldDeleteConfigOnRelease: function () {
            return void 0 !== pl(t) && a <= 0;
          },
          dangerouslyAllowMutability: e.dangerouslyAllowMutability,
          persistence_UNSTABLE: e.persistence_UNSTABLE
            ? {
                type: e.persistence_UNSTABLE.type,
                backButton: e.persistence_UNSTABLE.backButton,
              }
            : void 0,
          shouldRestoreFromSnapshots: !0,
          retainedBy: r,
        });
        return d;
      }
      function El(e) {
        var t = Object.assign(
            {},
            ((function (e) {
              if (null == e) throw new TypeError("Cannot destructure " + e);
            })(e),
            e)
          ),
          n = "default" in e ? e.default : new Promise(function () {});
        return ml(n)
          ? (function (e) {
              var t = El(
                  tt(
                    tt({}, e),
                    {},
                    {
                      default: fl,
                      persistence_UNSTABLE:
                        void 0 === e.persistence_UNSTABLE
                          ? void 0
                          : tt(
                              tt({}, e.persistence_UNSTABLE),
                              {},
                              {
                                validator: function (t) {
                                  return t instanceof dl
                                    ? t
                                    : st(e.persistence_UNSTABLE).validator(
                                        t,
                                        fl
                                      );
                                },
                              }
                            ),
                      effects: e.effects,
                      effects_UNSTABLE: e.effects_UNSTABLE,
                    }
                  )
                ),
                n = al({
                  key: "".concat(e.key, "__withFallback"),
                  get: function (n) {
                    var r = (0, n.get)(t);
                    return r instanceof dl ? e.default : r;
                  },
                  set: function (e, n) {
                    return (0, e.set)(t, n);
                  },
                  cachePolicy_UNSTABLE: { eviction: "most-recent" },
                  dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                });
              return vl(n.key, pl(e.key)), n;
            })(tt(tt({}, t), {}, { default: n }))
          : kl(tt(tt({}, t), {}, { default: n }));
      }
      El.value = function (e) {
        return new sl(e);
      };
      var xl = El,
        Tl = {
          MapCache: (function () {
            function e(t) {
              var n;
              d(this, e),
                ct(this, "_map", void 0),
                ct(this, "_keyMapper", void 0),
                (this._map = new Map()),
                (this._keyMapper =
                  null !==
                    (n = null === t || void 0 === t ? void 0 : t.mapKey) &&
                  void 0 !== n
                    ? n
                    : function (e) {
                        return e;
                      });
            }
            return (
              m(e, [
                {
                  key: "size",
                  value: function () {
                    return this._map.size;
                  },
                },
                {
                  key: "has",
                  value: function (e) {
                    return this._map.has(this._keyMapper(e));
                  },
                },
                {
                  key: "get",
                  value: function (e) {
                    return this._map.get(this._keyMapper(e));
                  },
                },
                {
                  key: "set",
                  value: function (e, t) {
                    this._map.set(this._keyMapper(e), t);
                  },
                },
                {
                  key: "delete",
                  value: function (e) {
                    this._map.delete(this._keyMapper(e));
                  },
                },
                {
                  key: "clear",
                  value: function () {
                    this._map.clear();
                  },
                },
              ]),
              e
            );
          })(),
        }.MapCache,
        Rl = Object.freeze({ __proto__: null, MapCache: Tl }),
        Cl = Eu.LRUCache,
        Nl = Rl.MapCache,
        Ll = { equality: "reference", eviction: "none", maxSize: 1 / 0 };
      var Ol = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Ll,
            t = e.equality,
            n = void 0 === t ? Ll.equality : t,
            r = e.eviction,
            a = void 0 === r ? Ll.eviction : r,
            o = e.maxSize,
            i = void 0 === o ? Ll.maxSize : o,
            u = (function (e) {
              switch (e) {
                case "reference":
                  return function (e) {
                    return e;
                  };
                case "value":
                  return function (e) {
                    return Nu(e);
                  };
              }
              throw ut("Unrecognized equality policy ".concat(e));
            })(n);
          return (function (e, t, n) {
            switch (e) {
              case "keep-all":
                return new Nl({ mapKey: n });
              case "lru":
                return new Cl({ mapKey: n, maxSize: st(t) });
              case "most-recent":
                return new Cl({ mapKey: n, maxSize: 1 });
            }
            throw ut("Unrecognized eviction policy ".concat(e));
          })(a, i, u);
        },
        Al = cn.setConfigDeletionHandler;
      var Pl = function (e) {
          var t,
            n,
            r = Ol({
              equality:
                null !==
                  (t =
                    null === (n = e.cachePolicyForParams_UNSTABLE) ||
                    void 0 === n
                      ? void 0
                      : n.equality) && void 0 !== t
                  ? t
                  : "value",
              eviction: "keep-all",
            });
          return function (t) {
            var n,
              a,
              o = r.get(t);
            if (null != o) return o;
            e.cachePolicyForParams_UNSTABLE;
            var i = Ge(e, at),
              u = "default" in e ? e.default : new Promise(function () {}),
              l = xl(
                tt(
                  tt({}, i),
                  {},
                  {
                    key: ""
                      .concat(e.key, "__")
                      .concat(
                        null !== (n = Nu(t)) && void 0 !== n ? n : "void"
                      ),
                    default: "function" === typeof u ? u(t) : u,
                    retainedBy_UNSTABLE:
                      "function" === typeof e.retainedBy_UNSTABLE
                        ? e.retainedBy_UNSTABLE(t)
                        : e.retainedBy_UNSTABLE,
                    effects:
                      "function" === typeof e.effects
                        ? e.effects(t)
                        : "function" === typeof e.effects_UNSTABLE
                        ? e.effects_UNSTABLE(t)
                        : null !== (a = e.effects) && void 0 !== a
                        ? a
                        : e.effects_UNSTABLE,
                  }
                )
              );
            return (
              r.set(t, l),
              Al(l.key, function () {
                r.delete(t);
              }),
              l
            );
          };
        },
        Dl = cn.setConfigDeletionHandler,
        Ml = 0;
      var jl = function (e) {
          var t,
            n,
            r = Ol({
              equality:
                null !==
                  (t =
                    null === (n = e.cachePolicyForParams_UNSTABLE) ||
                    void 0 === n
                      ? void 0
                      : n.equality) && void 0 !== t
                  ? t
                  : "value",
              eviction: "keep-all",
            });
          return function (t) {
            var n, a;
            try {
              a = r.get(t);
            } catch (f) {
              throw ut(
                "Problem with cache lookup for selector "
                  .concat(e.key, ": ")
                  .concat(f.message)
              );
            }
            if (null != a) return a;
            var o,
              i = ""
                .concat(e.key, "__selectorFamily/")
                .concat(
                  null !== (n = Nu(t, { allowFunctions: !0 })) && void 0 !== n
                    ? n
                    : "void",
                  "/"
                )
                .concat(Ml++),
              u = function (n) {
                return e.get(t)(n);
              },
              l = e.cachePolicy_UNSTABLE,
              s =
                "function" === typeof e.retainedBy_UNSTABLE
                  ? e.retainedBy_UNSTABLE(t)
                  : e.retainedBy_UNSTABLE;
            if (null != e.set) {
              var c = e.set;
              o = al({
                key: i,
                get: u,
                set: function (e, n) {
                  return c(t)(e, n);
                },
                cachePolicy_UNSTABLE: l,
                dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                retainedBy_UNSTABLE: s,
              });
            } else
              o = al({
                key: i,
                get: u,
                cachePolicy_UNSTABLE: l,
                dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                retainedBy_UNSTABLE: s,
              });
            return (
              r.set(t, o),
              Dl(o.key, function () {
                r.delete(t);
              }),
              o
            );
          };
        },
        Ul = jl({
          key: "__constant",
          get: function (e) {
            return function () {
              return e;
            };
          },
          cachePolicyForParams_UNSTABLE: { equality: "reference" },
        });
      var zl = function (e) {
          return Ul(e);
        },
        Il = jl({
          key: "__error",
          get: function (e) {
            return function () {
              throw ut(e);
            };
          },
          cachePolicyForParams_UNSTABLE: { equality: "reference" },
        });
      var Fl = function (e) {
        return Il(e);
      };
      var Vl = function (e) {
          return e;
        },
        Bl = Lt.loadableWithError,
        Wl = Lt.loadableWithPromise,
        Hl = Lt.loadableWithValue;
      function $l(e, t) {
        var n,
          r = Array(t.length).fill(void 0),
          a = Array(t.length).fill(void 0),
          o = x(t.entries());
        try {
          for (o.s(); !(n = o.n()).done; ) {
            var i = s(n.value, 2),
              u = i[0],
              l = i[1];
            try {
              r[u] = e(l);
            } catch (c) {
              a[u] = c;
            }
          }
        } catch (f) {
          o.e(f);
        } finally {
          o.f();
        }
        return [r, a];
      }
      function Kl(e) {
        return null != e && !lt(e);
      }
      function ql(e) {
        return Array.isArray(e)
          ? e
          : Object.getOwnPropertyNames(e).map(function (t) {
              return e[t];
            });
      }
      function Ql(e, t) {
        return Array.isArray(e)
          ? t
          : Object.getOwnPropertyNames(e).reduce(function (e, n, r) {
              return tt(tt({}, e), {}, Ze({}, n, t[r]));
            }, {});
      }
      function Gl(e, t, n) {
        return Ql(
          e,
          n.map(function (e, n) {
            return null == e ? Hl(t[n]) : lt(e) ? Wl(e) : Bl(e);
          })
        );
      }
      var Yl = jl({
          key: "__waitForNone",
          get: function (e) {
            return function (t) {
              var n = s($l(t.get, ql(e)), 2),
                r = n[0],
                a = n[1];
              return Gl(e, r, a);
            };
          },
          dangerouslyAllowMutability: !0,
        }),
        Jl = jl({
          key: "__waitForAny",
          get: function (e) {
            return function (t) {
              var n = s($l(t.get, ql(e)), 2),
                r = n[0],
                a = n[1];
              return a.some(function (e) {
                return !lt(e);
              })
                ? Gl(e, r, a)
                : new Promise(function (t) {
                    var n,
                      o = x(a.entries());
                    try {
                      var i = function () {
                        var o = s(n.value, 2),
                          i = o[0],
                          u = o[1];
                        lt(u) &&
                          u
                            .then(function (n) {
                              (r[i] = n), (a[i] = void 0), t(Gl(e, r, a));
                            })
                            .catch(function (n) {
                              (a[i] = n), t(Gl(e, r, a));
                            });
                      };
                      for (o.s(); !(n = o.n()).done; ) i();
                    } catch (u) {
                      o.e(u);
                    } finally {
                      o.f();
                    }
                  });
            };
          },
          dangerouslyAllowMutability: !0,
        }),
        Xl = {
          waitForNone: Yl,
          waitForAny: Jl,
          waitForAll: jl({
            key: "__waitForAll",
            get: function (e) {
              return function (t) {
                var n = s($l(t.get, ql(e)), 2),
                  r = n[0],
                  a = n[1];
                if (
                  a.every(function (e) {
                    return null == e;
                  })
                )
                  return Ql(e, r);
                var o = a.find(Kl);
                if (null != o) throw o;
                return Promise.all(a).then(function (t) {
                  return Ql(
                    e,
                    ((n = r),
                    t.map(function (e, t) {
                      return void 0 === e ? n[t] : e;
                    }))
                  );
                  var n;
                });
              };
            },
            dangerouslyAllowMutability: !0,
          }),
          waitForAllSettled: jl({
            key: "__waitForAllSettled",
            get: function (e) {
              return function (t) {
                var n = s($l(t.get, ql(e)), 2),
                  r = n[0],
                  a = n[1];
                return a.every(function (e) {
                  return !lt(e);
                })
                  ? Gl(e, r, a)
                  : Promise.all(
                      a.map(function (e, t) {
                        return lt(e)
                          ? e
                              .then(function (e) {
                                (r[t] = e), (a[t] = void 0);
                              })
                              .catch(function (e) {
                                (r[t] = void 0), (a[t] = e);
                              })
                          : null;
                      })
                    ).then(function () {
                      return Gl(e, r, a);
                    });
              };
            },
            dangerouslyAllowMutability: !0,
          }),
          noWait: jl({
            key: "__noWait",
            get: function (e) {
              return function (t) {
                var n = t.get;
                try {
                  return al.value(Hl(n(e)));
                } catch (r) {
                  return al.value(lt(r) ? Wl(r) : Bl(r));
                }
              };
            },
            dangerouslyAllowMutability: !0,
          }),
        },
        Zl = Lt.RecoilLoadable,
        es = cn.DefaultValue,
        ts = po.RecoilRoot,
        ns = po.useRecoilStoreID,
        rs = Zt.isRecoilValue,
        as = Mn.retentionZone,
        os = Na.freshSnapshot,
        is = {
          DefaultValue: es,
          isRecoilValue: rs,
          RecoilLoadable: Zl,
          RecoilEnv: At,
          RecoilRoot: ts,
          useRecoilStoreID: ns,
          useRecoilBridgeAcrossReactRoots_UNSTABLE: Di,
          atom: xl,
          selector: al,
          atomFamily: Pl,
          selectorFamily: jl,
          constSelector: zl,
          errorSelector: Fl,
          readOnlySelector: Vl,
          noWait: Xl.noWait,
          waitForNone: Xl.waitForNone,
          waitForAny: Xl.waitForAny,
          waitForAll: Xl.waitForAll,
          waitForAllSettled: Xl.waitForAllSettled,
          useRecoilValue: ti,
          useRecoilValueLoadable: ni,
          useRecoilState: Zo,
          useRecoilStateLoadable: ei,
          useSetRecoilState: ai,
          useResetRecoilState: ri,
          useGetRecoilValueInfo_UNSTABLE: Ni,
          useRecoilRefresher_UNSTABLE: fu,
          useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: oi,
          useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: ii,
          useRecoilState_TRANSITION_SUPPORT_UNSTABLE: ui,
          useRecoilCallback: uu,
          useRecoilTransaction_UNSTABLE: vu,
          useGotoRecoilSnapshot: xi,
          useRecoilSnapshot: ki,
          useRecoilTransactionObserver_UNSTABLE: Ti,
          snapshot_UNSTABLE: os,
          useRetain: xo,
          retentionZone: as,
        },
        us = is.RecoilRoot,
        ls = is.atom,
        ss = is.useRecoilState,
        cs = is.useSetRecoilState,
        fs = {
          bg: "Point_bg__8C1dJ",
          show: "Point_show__PymHo",
          img: "Point_img__qmkNf",
          textbox: "Point_textbox__am4Gi",
          title: "Point_title__QIqYJ",
        },
        ds = n(184);
      var ps = function (e) {
          var t = e.background_image_original,
            n = e.medium_cover_image,
            r = e.url,
            a = e.title_long,
            o = e.rating,
            i = e.runtime,
            u = e.genres,
            l = e.download_count;
          return (0, ds.jsxs)("div", {
            children: [
              (0, ds.jsx)("img", { className: fs.bg, src: t }),
              (0, ds.jsxs)("div", {
                className: fs.show,
                children: [
                  (0, ds.jsx)("img", { className: fs.img, src: n }),
                  (0, ds.jsxs)("div", {
                    className: fs.textbox,
                    children: [
                      (0, ds.jsx)("h1", {
                        className: fs.title,
                        children: (0, ds.jsx)("a", {
                          href: r,
                          target: "_blank",
                          children: a,
                        }),
                      }),
                      (0, ds.jsxs)("ul", {
                        children: [
                          (0, ds.jsxs)("li", { children: ["Rating ", o] }),
                          (0, ds.jsxs)("li", { children: ["Runtime ", i] }),
                          (0, ds.jsxs)("li", { children: ["Download ", l] }),
                          (0, ds.jsxs)("li", {
                            children: [
                              "Genres",
                              (0, ds.jsx)("ul", {
                                children: u.map(function (e) {
                                  return (0, ds.jsx)("li", { children: e }, e);
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        hs = { loader: "Loading_loader__KhFBI" };
      var vs = function () {
          return (0, ds.jsx)("div", {
            className: hs.loader,
            children: (0, ds.jsx)("span", { children: "Loading..." }),
          });
        },
        ms = {
          container: "Home_container__1VwHG",
          slide__box: "Home_slide__box__jjDX-",
          title: "Home_title__5Yj0k",
          footer: "Home_footer__-I5oD",
          copyright: "Home_copyright__AN2UE",
          copyright_letter: "Home_copyright_letter__h0yDh",
        };
      var ys = function () {
        var e = xe().id,
          n = s((0, t.useState)(!0), 2),
          r = n[0],
          a = n[1],
          o = s((0, t.useState)({}), 2),
          i = o[0],
          u = o[1];
        return (
          (0, t.useEffect)(function () {
            fetch(
              "https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e)
            )
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                u(e.data.movie), a(!1);
              });
          }, []),
          (0, ds.jsx)("div", {
            className: ms.container,
            children: r
              ? (0, ds.jsx)(vs, {})
              : (0, ds.jsx)(ps, {
                  background_image_original: i.background_image_original,
                  medium_cover_image: i.medium_cover_image,
                  url: i.url,
                  title_long: i.title_long,
                  rating: i.rating,
                  runtime: i.runtime,
                  genres: i.genres,
                  download_count: i.download_count,
                }),
          })
        );
      };
      function gs(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      var bs,
        ws = Object.prototype.toString,
        Ss = Object.getPrototypeOf,
        _s =
          ((bs = Object.create(null)),
          function (e) {
            var t = ws.call(e);
            return bs[t] || (bs[t] = t.slice(8, -1).toLowerCase());
          }),
        ks = function (e) {
          return (
            (e = e.toLowerCase()),
            function (t) {
              return _s(t) === e;
            }
          );
        },
        Es = function (e) {
          return function (t) {
            return typeof t === e;
          };
        },
        xs = Array.isArray,
        Ts = Es("undefined");
      var Rs = ks("ArrayBuffer");
      var Cs = Es("string"),
        Ns = Es("function"),
        Ls = Es("number"),
        Os = function (e) {
          return null !== e && "object" === typeof e;
        },
        As = function (e) {
          if ("object" !== _s(e)) return !1;
          var t = Ss(e);
          return (
            (null === t ||
              t === Object.prototype ||
              null === Object.getPrototypeOf(t)) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
          );
        },
        Ps = ks("Date"),
        Ds = ks("File"),
        Ms = ks("Blob"),
        js = ks("FileList"),
        Us = ks("URLSearchParams");
      function zs(e, t) {
        var n,
          r,
          a = (
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          ).allOwnKeys,
          o = void 0 !== a && a;
        if (null !== e && "undefined" !== typeof e)
          if (("object" !== typeof e && (e = [e]), xs(e)))
            for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
          else {
            var i,
              u = o ? Object.getOwnPropertyNames(e) : Object.keys(e),
              l = u.length;
            for (n = 0; n < l; n++) (i = u[n]), t.call(null, e[i], i, e);
          }
      }
      function Is(e, t) {
        t = t.toLowerCase();
        for (var n, r = Object.keys(e), a = r.length; a-- > 0; )
          if (t === (n = r[a]).toLowerCase()) return n;
        return null;
      }
      var Fs =
          "undefined" !== typeof globalThis
            ? globalThis
            : "undefined" !== typeof self
            ? self
            : "undefined" !== typeof window
            ? window
            : global,
        Vs = function (e) {
          return !Ts(e) && e !== Fs;
        };
      var Bs,
        Ws =
          ((Bs = "undefined" !== typeof Uint8Array && Ss(Uint8Array)),
          function (e) {
            return Bs && e instanceof Bs;
          }),
        Hs = ks("HTMLFormElement"),
        $s = (function (e) {
          var t = Object.prototype.hasOwnProperty;
          return function (e, n) {
            return t.call(e, n);
          };
        })(),
        Ks = ks("RegExp"),
        qs = function (e, t) {
          var n = Object.getOwnPropertyDescriptors(e),
            r = {};
          zs(n, function (n, a) {
            !1 !== t(n, a, e) && (r[a] = n);
          }),
            Object.defineProperties(e, r);
        },
        Qs = "abcdefghijklmnopqrstuvwxyz",
        Gs = "0123456789",
        Ys = { DIGIT: Gs, ALPHA: Qs, ALPHA_DIGIT: Qs + Qs.toUpperCase() + Gs };
      var Js = {
        isArray: xs,
        isArrayBuffer: Rs,
        isBuffer: function (e) {
          return (
            null !== e &&
            !Ts(e) &&
            null !== e.constructor &&
            !Ts(e.constructor) &&
            Ns(e.constructor.isBuffer) &&
            e.constructor.isBuffer(e)
          );
        },
        isFormData: function (e) {
          var t = "[object FormData]";
          return (
            e &&
            (("function" === typeof FormData && e instanceof FormData) ||
              ws.call(e) === t ||
              (Ns(e.toString) && e.toString() === t))
          );
        },
        isArrayBufferView: function (e) {
          return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e && e.buffer && Rs(e.buffer);
        },
        isString: Cs,
        isNumber: Ls,
        isBoolean: function (e) {
          return !0 === e || !1 === e;
        },
        isObject: Os,
        isPlainObject: As,
        isUndefined: Ts,
        isDate: Ps,
        isFile: Ds,
        isBlob: Ms,
        isRegExp: Ks,
        isFunction: Ns,
        isStream: function (e) {
          return Os(e) && Ns(e.pipe);
        },
        isURLSearchParams: Us,
        isTypedArray: Ws,
        isFileList: js,
        forEach: zs,
        merge: function e() {
          for (
            var t = ((Vs(this) && this) || {}).caseless,
              n = {},
              r = function (r, a) {
                var o = (t && Is(n, a)) || a;
                As(n[o]) && As(r)
                  ? (n[o] = e(n[o], r))
                  : As(r)
                  ? (n[o] = e({}, r))
                  : xs(r)
                  ? (n[o] = r.slice())
                  : (n[o] = r);
              },
              a = 0,
              o = arguments.length;
            a < o;
            a++
          )
            arguments[a] && zs(arguments[a], r);
          return n;
        },
        extend: function (e, t, n) {
          return (
            zs(
              t,
              function (t, r) {
                n && Ns(t) ? (e[r] = gs(t, n)) : (e[r] = t);
              },
              {
                allOwnKeys: (arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {}
                ).allOwnKeys,
              }
            ),
            e
          );
        },
        trim: function (e) {
          return e.trim
            ? e.trim()
            : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        },
        stripBOM: function (e) {
          return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
        },
        inherits: function (e, t, n, r) {
          (e.prototype = Object.create(t.prototype, r)),
            (e.prototype.constructor = e),
            Object.defineProperty(e, "super", { value: t.prototype }),
            n && Object.assign(e.prototype, n);
        },
        toFlatObject: function (e, t, n, r) {
          var a,
            o,
            i,
            u = {};
          if (((t = t || {}), null == e)) return t;
          do {
            for (o = (a = Object.getOwnPropertyNames(e)).length; o-- > 0; )
              (i = a[o]),
                (r && !r(i, e, t)) || u[i] || ((t[i] = e[i]), (u[i] = !0));
            e = !1 !== n && Ss(e);
          } while (e && (!n || n(e, t)) && e !== Object.prototype);
          return t;
        },
        kindOf: _s,
        kindOfTest: ks,
        endsWith: function (e, t, n) {
          (e = String(e)),
            (void 0 === n || n > e.length) && (n = e.length),
            (n -= t.length);
          var r = e.indexOf(t, n);
          return -1 !== r && r === n;
        },
        toArray: function (e) {
          if (!e) return null;
          if (xs(e)) return e;
          var t = e.length;
          if (!Ls(t)) return null;
          for (var n = new Array(t); t-- > 0; ) n[t] = e[t];
          return n;
        },
        forEachEntry: function (e, t) {
          for (
            var n, r = (e && e[Symbol.iterator]).call(e);
            (n = r.next()) && !n.done;

          ) {
            var a = n.value;
            t.call(e, a[0], a[1]);
          }
        },
        matchAll: function (e, t) {
          for (var n, r = []; null !== (n = e.exec(t)); ) r.push(n);
          return r;
        },
        isHTMLForm: Hs,
        hasOwnProperty: $s,
        hasOwnProp: $s,
        reduceDescriptors: qs,
        freezeMethods: function (e) {
          qs(e, function (t, n) {
            if (Ns(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
              return !1;
            var r = e[n];
            Ns(r) &&
              ((t.enumerable = !1),
              "writable" in t
                ? (t.writable = !1)
                : t.set ||
                  (t.set = function () {
                    throw Error("Can not rewrite read-only method '" + n + "'");
                  }));
          });
        },
        toObjectSet: function (e, t) {
          var n = {},
            r = function (e) {
              e.forEach(function (e) {
                n[e] = !0;
              });
            };
          return xs(e) ? r(e) : r(String(e).split(t)), n;
        },
        toCamelCase: function (e) {
          return e
            .toLowerCase()
            .replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
              return t.toUpperCase() + n;
            });
        },
        noop: function () {},
        toFiniteNumber: function (e, t) {
          return (e = +e), Number.isFinite(e) ? e : t;
        },
        findKey: Is,
        global: Fs,
        isContextDefined: Vs,
        ALPHABET: Ys,
        generateString: function () {
          for (
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 16,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Ys.ALPHA_DIGIT,
              n = "",
              r = t.length;
            e--;

          )
            n += t[(Math.random() * r) | 0];
          return n;
        },
        isSpecCompliantForm: function (e) {
          return !!(
            e &&
            Ns(e.append) &&
            "FormData" === e[Symbol.toStringTag] &&
            e[Symbol.iterator]
          );
        },
        toJSONObject: function (e) {
          var t = new Array(10);
          return (function e(n, r) {
            if (Os(n)) {
              if (t.indexOf(n) >= 0) return;
              if (!("toJSON" in n)) {
                t[r] = n;
                var a = xs(n) ? [] : {};
                return (
                  zs(n, function (t, n) {
                    var o = e(t, r + 1);
                    !Ts(o) && (a[n] = o);
                  }),
                  (t[r] = void 0),
                  a
                );
              }
            }
            return n;
          })(e, 0);
        },
      };
      function Xs(e, t, n, r, a) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
          (this.message = e),
          (this.name = "AxiosError"),
          t && (this.code = t),
          n && (this.config = n),
          r && (this.request = r),
          a && (this.response = a);
      }
      Js.inherits(Xs, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: Js.toJSONObject(this.config),
            code: this.code,
            status:
              this.response && this.response.status
                ? this.response.status
                : null,
          };
        },
      });
      var Zs = Xs.prototype,
        ec = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
      ].forEach(function (e) {
        ec[e] = { value: e };
      }),
        Object.defineProperties(Xs, ec),
        Object.defineProperty(Zs, "isAxiosError", { value: !0 }),
        (Xs.from = function (e, t, n, r, a, o) {
          var i = Object.create(Zs);
          return (
            Js.toFlatObject(
              e,
              i,
              function (e) {
                return e !== Error.prototype;
              },
              function (e) {
                return "isAxiosError" !== e;
              }
            ),
            Xs.call(i, e.message, t, n, r, a),
            (i.cause = e),
            (i.name = e.name),
            o && Object.assign(i, o),
            i
          );
        });
      var tc = Xs,
        nc = null;
      function rc(e) {
        return Js.isPlainObject(e) || Js.isArray(e);
      }
      function ac(e) {
        return Js.endsWith(e, "[]") ? e.slice(0, -2) : e;
      }
      function oc(e, t, n) {
        return e
          ? e
              .concat(t)
              .map(function (e, t) {
                return (e = ac(e)), !n && t ? "[" + e + "]" : e;
              })
              .join(n ? "." : "")
          : t;
      }
      var ic = Js.toFlatObject(Js, {}, null, function (e) {
        return /^is[A-Z]/.test(e);
      });
      var uc = function (e, t, n) {
        if (!Js.isObject(e)) throw new TypeError("target must be an object");
        t = t || new (nc || FormData)();
        var r = (n = Js.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (e, t) {
              return !Js.isUndefined(t[e]);
            }
          )).metaTokens,
          a = n.visitor || s,
          o = n.dots,
          i = n.indexes,
          u =
            (n.Blob || ("undefined" !== typeof Blob && Blob)) &&
            Js.isSpecCompliantForm(t);
        if (!Js.isFunction(a))
          throw new TypeError("visitor must be a function");
        function l(e) {
          if (null === e) return "";
          if (Js.isDate(e)) return e.toISOString();
          if (!u && Js.isBlob(e))
            throw new tc("Blob is not supported. Use a Buffer instead.");
          return Js.isArrayBuffer(e) || Js.isTypedArray(e)
            ? u && "function" === typeof Blob
              ? new Blob([e])
              : Buffer.from(e)
            : e;
        }
        function s(e, n, a) {
          var u = e;
          if (e && !a && "object" === typeof e)
            if (Js.endsWith(n, "{}"))
              (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
            else if (
              (Js.isArray(e) &&
                (function (e) {
                  return Js.isArray(e) && !e.some(rc);
                })(e)) ||
              ((Js.isFileList(e) || Js.endsWith(n, "[]")) &&
                (u = Js.toArray(e)))
            )
              return (
                (n = ac(n)),
                u.forEach(function (e, r) {
                  !Js.isUndefined(e) &&
                    null !== e &&
                    t.append(
                      !0 === i ? oc([n], r, o) : null === i ? n : n + "[]",
                      l(e)
                    );
                }),
                !1
              );
          return !!rc(e) || (t.append(oc(a, n, o), l(e)), !1);
        }
        var c = [],
          f = Object.assign(ic, {
            defaultVisitor: s,
            convertValue: l,
            isVisitable: rc,
          });
        if (!Js.isObject(e)) throw new TypeError("data must be an object");
        return (
          (function e(n, r) {
            if (!Js.isUndefined(n)) {
              if (-1 !== c.indexOf(n))
                throw Error("Circular reference detected in " + r.join("."));
              c.push(n),
                Js.forEach(n, function (n, o) {
                  !0 ===
                    (!(Js.isUndefined(n) || null === n) &&
                      a.call(t, n, Js.isString(o) ? o.trim() : o, r, f)) &&
                    e(n, r ? r.concat(o) : [o]);
                }),
                c.pop();
            }
          })(e),
          t
        );
      };
      function lc(e) {
        var t = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\0",
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
          return t[e];
        });
      }
      function sc(e, t) {
        (this._pairs = []), e && uc(e, this, t);
      }
      var cc = sc.prototype;
      (cc.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
        (cc.toString = function (e) {
          var t = e
            ? function (t) {
                return e.call(this, t, lc);
              }
            : lc;
          return this._pairs
            .map(function (e) {
              return t(e[0]) + "=" + t(e[1]);
            }, "")
            .join("&");
        });
      var fc = sc;
      function dc(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function pc(e, t, n) {
        if (!t) return e;
        var r,
          a = (n && n.encode) || dc,
          o = n && n.serialize;
        if (
          (r = o
            ? o(t, n)
            : Js.isURLSearchParams(t)
            ? t.toString()
            : new fc(t, n).toString(a))
        ) {
          var i = e.indexOf("#");
          -1 !== i && (e = e.slice(0, i)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + r);
        }
        return e;
      }
      var hc = (function () {
          function e() {
            d(this, e), (this.handlers = []);
          }
          return (
            m(e, [
              {
                key: "use",
                value: function (e, t, n) {
                  return (
                    this.handlers.push({
                      fulfilled: e,
                      rejected: t,
                      synchronous: !!n && n.synchronous,
                      runWhen: n ? n.runWhen : null,
                    }),
                    this.handlers.length - 1
                  );
                },
              },
              {
                key: "eject",
                value: function (e) {
                  this.handlers[e] && (this.handlers[e] = null);
                },
              },
              {
                key: "clear",
                value: function () {
                  this.handlers && (this.handlers = []);
                },
              },
              {
                key: "forEach",
                value: function (e) {
                  Js.forEach(this.handlers, function (t) {
                    null !== t && e(t);
                  });
                },
              },
            ]),
            e
          );
        })(),
        vc = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        mc = {
          isBrowser: !0,
          classes: {
            URLSearchParams:
              "undefined" !== typeof URLSearchParams ? URLSearchParams : fc,
            FormData: "undefined" !== typeof FormData ? FormData : null,
            Blob: "undefined" !== typeof Blob ? Blob : null,
          },
          isStandardBrowserEnv: (function () {
            var e;
            return (
              ("undefined" === typeof navigator ||
                ("ReactNative" !== (e = navigator.product) &&
                  "NativeScript" !== e &&
                  "NS" !== e)) &&
              "undefined" !== typeof window &&
              "undefined" !== typeof document
            );
          })(),
          isStandardBrowserWebWorkerEnv:
            "undefined" !== typeof WorkerGlobalScope &&
            self instanceof WorkerGlobalScope &&
            "function" === typeof self.importScripts,
          protocols: ["http", "https", "file", "blob", "url", "data"],
        };
      var yc = function (e) {
          function t(e, n, r, a) {
            var o = e[a++],
              i = Number.isFinite(+o),
              u = a >= e.length;
            return (
              (o = !o && Js.isArray(r) ? r.length : o),
              u
                ? (Js.hasOwnProp(r, o) ? (r[o] = [r[o], n]) : (r[o] = n), !i)
                : ((r[o] && Js.isObject(r[o])) || (r[o] = []),
                  t(e, n, r[o], a) &&
                    Js.isArray(r[o]) &&
                    (r[o] = (function (e) {
                      var t,
                        n,
                        r = {},
                        a = Object.keys(e),
                        o = a.length;
                      for (t = 0; t < o; t++) r[(n = a[t])] = e[n];
                      return r;
                    })(r[o])),
                  !i)
            );
          }
          if (Js.isFormData(e) && Js.isFunction(e.entries)) {
            var n = {};
            return (
              Js.forEachEntry(e, function (e, r) {
                t(
                  (function (e) {
                    return Js.matchAll(/\w+|\[(\w*)]/g, e).map(function (e) {
                      return "[]" === e[0] ? "" : e[1] || e[0];
                    });
                  })(e),
                  r,
                  n,
                  0
                );
              }),
              n
            );
          }
          return null;
        },
        gc = { "Content-Type": void 0 };
      var bc = {
        transitional: vc,
        adapter: ["xhr", "http"],
        transformRequest: [
          function (e, t) {
            var n,
              r = t.getContentType() || "",
              a = r.indexOf("application/json") > -1,
              o = Js.isObject(e);
            if (
              (o && Js.isHTMLForm(e) && (e = new FormData(e)), Js.isFormData(e))
            )
              return a && a ? JSON.stringify(yc(e)) : e;
            if (
              Js.isArrayBuffer(e) ||
              Js.isBuffer(e) ||
              Js.isStream(e) ||
              Js.isFile(e) ||
              Js.isBlob(e)
            )
              return e;
            if (Js.isArrayBufferView(e)) return e.buffer;
            if (Js.isURLSearchParams(e))
              return (
                t.setContentType(
                  "application/x-www-form-urlencoded;charset=utf-8",
                  !1
                ),
                e.toString()
              );
            if (o) {
              if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return (function (e, t) {
                  return uc(
                    e,
                    new mc.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (e, t, n, r) {
                          return mc.isNode && Js.isBuffer(e)
                            ? (this.append(t, e.toString("base64")), !1)
                            : r.defaultVisitor.apply(this, arguments);
                        },
                      },
                      t
                    )
                  );
                })(e, this.formSerializer).toString();
              if (
                (n = Js.isFileList(e)) ||
                r.indexOf("multipart/form-data") > -1
              ) {
                var i = this.env && this.env.FormData;
                return uc(
                  n ? { "files[]": e } : e,
                  i && new i(),
                  this.formSerializer
                );
              }
            }
            return o || a
              ? (t.setContentType("application/json", !1),
                (function (e, t, n) {
                  if (Js.isString(e))
                    try {
                      return (t || JSON.parse)(e), Js.trim(e);
                    } catch (r) {
                      if ("SyntaxError" !== r.name) throw r;
                    }
                  return (n || JSON.stringify)(e);
                })(e))
              : e;
          },
        ],
        transformResponse: [
          function (e) {
            var t = this.transitional || bc.transitional,
              n = t && t.forcedJSONParsing,
              r = "json" === this.responseType;
            if (e && Js.isString(e) && ((n && !this.responseType) || r)) {
              var a = !(t && t.silentJSONParsing) && r;
              try {
                return JSON.parse(e);
              } catch (o) {
                if (a) {
                  if ("SyntaxError" === o.name)
                    throw tc.from(
                      o,
                      tc.ERR_BAD_RESPONSE,
                      this,
                      null,
                      this.response
                    );
                  throw o;
                }
              }
            }
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: mc.classes.FormData, Blob: mc.classes.Blob },
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        },
        headers: { common: { Accept: "application/json, text/plain, */*" } },
      };
      Js.forEach(["delete", "get", "head"], function (e) {
        bc.headers[e] = {};
      }),
        Js.forEach(["post", "put", "patch"], function (e) {
          bc.headers[e] = Js.merge(gc);
        });
      var wc = bc,
        Sc = Js.toObjectSet([
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ]),
        _c = Symbol("internals");
      function kc(e) {
        return e && String(e).trim().toLowerCase();
      }
      function Ec(e) {
        return !1 === e || null == e
          ? e
          : Js.isArray(e)
          ? e.map(Ec)
          : String(e);
      }
      function xc(e, t, n, r, a) {
        return Js.isFunction(r)
          ? r.call(this, t, n)
          : (a && (t = n),
            Js.isString(t)
              ? Js.isString(r)
                ? -1 !== t.indexOf(r)
                : Js.isRegExp(r)
                ? r.test(t)
                : void 0
              : void 0);
      }
      var Tc = (function (e, t) {
        function n(e) {
          d(this, n), e && this.set(e);
        }
        return (
          m(
            n,
            [
              {
                key: "set",
                value: function (e, t, n) {
                  var r = this;
                  function a(e, t, n) {
                    var a = kc(t);
                    if (!a)
                      throw new Error("header name must be a non-empty string");
                    var o = Js.findKey(r, a);
                    (!o ||
                      void 0 === r[o] ||
                      !0 === n ||
                      (void 0 === n && !1 !== r[o])) &&
                      (r[o || t] = Ec(e));
                  }
                  var o = function (e, t) {
                    return Js.forEach(e, function (e, n) {
                      return a(e, n, t);
                    });
                  };
                  return (
                    Js.isPlainObject(e) || e instanceof this.constructor
                      ? o(e, t)
                      : Js.isString(e) &&
                        (e = e.trim()) &&
                        !/^[-_a-zA-Z]+$/.test(e.trim())
                      ? o(
                          (function (e) {
                            var t,
                              n,
                              r,
                              a = {};
                            return (
                              e &&
                                e.split("\n").forEach(function (e) {
                                  (r = e.indexOf(":")),
                                    (t = e
                                      .substring(0, r)
                                      .trim()
                                      .toLowerCase()),
                                    (n = e.substring(r + 1).trim()),
                                    !t ||
                                      (a[t] && Sc[t]) ||
                                      ("set-cookie" === t
                                        ? a[t]
                                          ? a[t].push(n)
                                          : (a[t] = [n])
                                        : (a[t] = a[t] ? a[t] + ", " + n : n));
                                }),
                              a
                            );
                          })(e),
                          t
                        )
                      : null != e && a(t, e, n),
                    this
                  );
                },
              },
              {
                key: "get",
                value: function (e, t) {
                  if ((e = kc(e))) {
                    var n = Js.findKey(this, e);
                    if (n) {
                      var r = this[n];
                      if (!t) return r;
                      if (!0 === t)
                        return (function (e) {
                          for (
                            var t,
                              n = Object.create(null),
                              r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                            (t = r.exec(e));

                          )
                            n[t[1]] = t[2];
                          return n;
                        })(r);
                      if (Js.isFunction(t)) return t.call(this, r, n);
                      if (Js.isRegExp(t)) return t.exec(r);
                      throw new TypeError(
                        "parser must be boolean|regexp|function"
                      );
                    }
                  }
                },
              },
              {
                key: "has",
                value: function (e, t) {
                  if ((e = kc(e))) {
                    var n = Js.findKey(this, e);
                    return !(
                      !n ||
                      void 0 === this[n] ||
                      (t && !xc(0, this[n], n, t))
                    );
                  }
                  return !1;
                },
              },
              {
                key: "delete",
                value: function (e, t) {
                  var n = this,
                    r = !1;
                  function a(e) {
                    if ((e = kc(e))) {
                      var a = Js.findKey(n, e);
                      !a ||
                        (t && !xc(0, n[a], a, t)) ||
                        (delete n[a], (r = !0));
                    }
                  }
                  return Js.isArray(e) ? e.forEach(a) : a(e), r;
                },
              },
              {
                key: "clear",
                value: function (e) {
                  for (var t = Object.keys(this), n = t.length, r = !1; n--; ) {
                    var a = t[n];
                    (e && !xc(0, this[a], a, e, !0)) ||
                      (delete this[a], (r = !0));
                  }
                  return r;
                },
              },
              {
                key: "normalize",
                value: function (e) {
                  var t = this,
                    n = {};
                  return (
                    Js.forEach(this, function (r, a) {
                      var o = Js.findKey(n, a);
                      if (o) return (t[o] = Ec(r)), void delete t[a];
                      var i = e
                        ? (function (e) {
                            return e
                              .trim()
                              .toLowerCase()
                              .replace(/([a-z\d])(\w*)/g, function (e, t, n) {
                                return t.toUpperCase() + n;
                              });
                          })(a)
                        : String(a).trim();
                      i !== a && delete t[a], (t[i] = Ec(r)), (n[i] = !0);
                    }),
                    this
                  );
                },
              },
              {
                key: "concat",
                value: function () {
                  for (
                    var e, t = arguments.length, n = new Array(t), r = 0;
                    r < t;
                    r++
                  )
                    n[r] = arguments[r];
                  return (e = this.constructor).concat.apply(
                    e,
                    [this].concat(n)
                  );
                },
              },
              {
                key: "toJSON",
                value: function (e) {
                  var t = Object.create(null);
                  return (
                    Js.forEach(this, function (n, r) {
                      null != n &&
                        !1 !== n &&
                        (t[r] = e && Js.isArray(n) ? n.join(", ") : n);
                    }),
                    t
                  );
                },
              },
              {
                key: Symbol.iterator,
                value: function () {
                  return Object.entries(this.toJSON())[Symbol.iterator]();
                },
              },
              {
                key: "toString",
                value: function () {
                  return Object.entries(this.toJSON())
                    .map(function (e) {
                      var t = s(e, 2);
                      return t[0] + ": " + t[1];
                    })
                    .join("\n");
                },
              },
              {
                key: Symbol.toStringTag,
                get: function () {
                  return "AxiosHeaders";
                },
              },
            ],
            [
              {
                key: "from",
                value: function (e) {
                  return e instanceof this ? e : new this(e);
                },
              },
              {
                key: "concat",
                value: function (e) {
                  for (
                    var t = new this(e),
                      n = arguments.length,
                      r = new Array(n > 1 ? n - 1 : 0),
                      a = 1;
                    a < n;
                    a++
                  )
                    r[a - 1] = arguments[a];
                  return (
                    r.forEach(function (e) {
                      return t.set(e);
                    }),
                    t
                  );
                },
              },
              {
                key: "accessor",
                value: function (e) {
                  var t = (this[_c] = this[_c] = { accessors: {} }).accessors,
                    n = this.prototype;
                  function r(e) {
                    var r = kc(e);
                    t[r] ||
                      (!(function (e, t) {
                        var n = Js.toCamelCase(" " + t);
                        ["get", "set", "has"].forEach(function (r) {
                          Object.defineProperty(e, r + n, {
                            value: function (e, n, a) {
                              return this[r].call(this, t, e, n, a);
                            },
                            configurable: !0,
                          });
                        });
                      })(n, e),
                      (t[r] = !0));
                  }
                  return Js.isArray(e) ? e.forEach(r) : r(e), this;
                },
              },
            ]
          ),
          n
        );
      })();
      Tc.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization",
      ]),
        Js.freezeMethods(Tc.prototype),
        Js.freezeMethods(Tc);
      var Rc = Tc;
      function Cc(e, t) {
        var n = this || wc,
          r = t || n,
          a = Rc.from(r.headers),
          o = r.data;
        return (
          Js.forEach(e, function (e) {
            o = e.call(n, o, a.normalize(), t ? t.status : void 0);
          }),
          a.normalize(),
          o
        );
      }
      function Nc(e) {
        return !(!e || !e.__CANCEL__);
      }
      function Lc(e, t, n) {
        tc.call(this, null == e ? "canceled" : e, tc.ERR_CANCELED, t, n),
          (this.name = "CanceledError");
      }
      Js.inherits(Lc, tc, { __CANCEL__: !0 });
      var Oc = Lc;
      var Ac = mc.isStandardBrowserEnv
        ? {
            write: function (e, t, n, r, a, o) {
              var i = [];
              i.push(e + "=" + encodeURIComponent(t)),
                Js.isNumber(n) &&
                  i.push("expires=" + new Date(n).toGMTString()),
                Js.isString(r) && i.push("path=" + r),
                Js.isString(a) && i.push("domain=" + a),
                !0 === o && i.push("secure"),
                (document.cookie = i.join("; "));
            },
            read: function (e) {
              var t = document.cookie.match(
                new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
              );
              return t ? decodeURIComponent(t[3]) : null;
            },
            remove: function (e) {
              this.write(e, "", Date.now() - 864e5);
            },
          }
        : {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
      function Pc(e, t) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
          ? (function (e, t) {
              return t
                ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "")
                : e;
            })(e, t)
          : t;
      }
      var Dc = mc.isStandardBrowserEnv
        ? (function () {
            var e,
              t = /(msie|trident)/i.test(navigator.userAgent),
              n = document.createElement("a");
            function r(e) {
              var r = e;
              return (
                t && (n.setAttribute("href", r), (r = n.href)),
                n.setAttribute("href", r),
                {
                  href: n.href,
                  protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                  host: n.host,
                  search: n.search ? n.search.replace(/^\?/, "") : "",
                  hash: n.hash ? n.hash.replace(/^#/, "") : "",
                  hostname: n.hostname,
                  port: n.port,
                  pathname:
                    "/" === n.pathname.charAt(0)
                      ? n.pathname
                      : "/" + n.pathname,
                }
              );
            }
            return (
              (e = r(window.location.href)),
              function (t) {
                var n = Js.isString(t) ? r(t) : t;
                return n.protocol === e.protocol && n.host === e.host;
              }
            );
          })()
        : function () {
            return !0;
          };
      var Mc = function (e, t) {
        e = e || 10;
        var n,
          r = new Array(e),
          a = new Array(e),
          o = 0,
          i = 0;
        return (
          (t = void 0 !== t ? t : 1e3),
          function (u) {
            var l = Date.now(),
              s = a[i];
            n || (n = l), (r[o] = u), (a[o] = l);
            for (var c = i, f = 0; c !== o; ) (f += r[c++]), (c %= e);
            if (((o = (o + 1) % e) === i && (i = (i + 1) % e), !(l - n < t))) {
              var d = s && l - s;
              return d ? Math.round((1e3 * f) / d) : void 0;
            }
          }
        );
      };
      function jc(e, t) {
        var n = 0,
          r = Mc(50, 250);
        return function (a) {
          var o = a.loaded,
            i = a.lengthComputable ? a.total : void 0,
            u = o - n,
            l = r(u);
          n = o;
          var s = {
            loaded: o,
            total: i,
            progress: i ? o / i : void 0,
            bytes: u,
            rate: l || void 0,
            estimated: l && i && o <= i ? (i - o) / l : void 0,
            event: a,
          };
          (s[t ? "download" : "upload"] = !0), e(s);
        };
      }
      var Uc =
          "undefined" !== typeof XMLHttpRequest &&
          function (e) {
            return new Promise(function (t, n) {
              var r,
                a = e.data,
                o = Rc.from(e.headers).normalize(),
                i = e.responseType;
              function u() {
                e.cancelToken && e.cancelToken.unsubscribe(r),
                  e.signal && e.signal.removeEventListener("abort", r);
              }
              Js.isFormData(a) &&
                (mc.isStandardBrowserEnv || mc.isStandardBrowserWebWorkerEnv) &&
                o.setContentType(!1);
              var l = new XMLHttpRequest();
              if (e.auth) {
                var s = e.auth.username || "",
                  c = e.auth.password
                    ? unescape(encodeURIComponent(e.auth.password))
                    : "";
                o.set("Authorization", "Basic " + btoa(s + ":" + c));
              }
              var f = Pc(e.baseURL, e.url);
              function d() {
                if (l) {
                  var r = Rc.from(
                    "getAllResponseHeaders" in l && l.getAllResponseHeaders()
                  );
                  !(function (e, t, n) {
                    var r = n.config.validateStatus;
                    n.status && r && !r(n.status)
                      ? t(
                          new tc(
                            "Request failed with status code " + n.status,
                            [tc.ERR_BAD_REQUEST, tc.ERR_BAD_RESPONSE][
                              Math.floor(n.status / 100) - 4
                            ],
                            n.config,
                            n.request,
                            n
                          )
                        )
                      : e(n);
                  })(
                    function (e) {
                      t(e), u();
                    },
                    function (e) {
                      n(e), u();
                    },
                    {
                      data:
                        i && "text" !== i && "json" !== i
                          ? l.response
                          : l.responseText,
                      status: l.status,
                      statusText: l.statusText,
                      headers: r,
                      config: e,
                      request: l,
                    }
                  ),
                    (l = null);
                }
              }
              if (
                (l.open(
                  e.method.toUpperCase(),
                  pc(f, e.params, e.paramsSerializer),
                  !0
                ),
                (l.timeout = e.timeout),
                "onloadend" in l
                  ? (l.onloadend = d)
                  : (l.onreadystatechange = function () {
                      l &&
                        4 === l.readyState &&
                        (0 !== l.status ||
                          (l.responseURL &&
                            0 === l.responseURL.indexOf("file:"))) &&
                        setTimeout(d);
                    }),
                (l.onabort = function () {
                  l &&
                    (n(new tc("Request aborted", tc.ECONNABORTED, e, l)),
                    (l = null));
                }),
                (l.onerror = function () {
                  n(new tc("Network Error", tc.ERR_NETWORK, e, l)), (l = null);
                }),
                (l.ontimeout = function () {
                  var t = e.timeout
                      ? "timeout of " + e.timeout + "ms exceeded"
                      : "timeout exceeded",
                    r = e.transitional || vc;
                  e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                    n(
                      new tc(
                        t,
                        r.clarifyTimeoutError ? tc.ETIMEDOUT : tc.ECONNABORTED,
                        e,
                        l
                      )
                    ),
                    (l = null);
                }),
                mc.isStandardBrowserEnv)
              ) {
                var p =
                  (e.withCredentials || Dc(f)) &&
                  e.xsrfCookieName &&
                  Ac.read(e.xsrfCookieName);
                p && o.set(e.xsrfHeaderName, p);
              }
              void 0 === a && o.setContentType(null),
                "setRequestHeader" in l &&
                  Js.forEach(o.toJSON(), function (e, t) {
                    l.setRequestHeader(t, e);
                  }),
                Js.isUndefined(e.withCredentials) ||
                  (l.withCredentials = !!e.withCredentials),
                i && "json" !== i && (l.responseType = e.responseType),
                "function" === typeof e.onDownloadProgress &&
                  l.addEventListener("progress", jc(e.onDownloadProgress, !0)),
                "function" === typeof e.onUploadProgress &&
                  l.upload &&
                  l.upload.addEventListener("progress", jc(e.onUploadProgress)),
                (e.cancelToken || e.signal) &&
                  ((r = function (t) {
                    l &&
                      (n(!t || t.type ? new Oc(null, e, l) : t),
                      l.abort(),
                      (l = null));
                  }),
                  e.cancelToken && e.cancelToken.subscribe(r),
                  e.signal &&
                    (e.signal.aborted
                      ? r()
                      : e.signal.addEventListener("abort", r)));
              var h = (function (e) {
                var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return (t && t[1]) || "";
              })(f);
              h && -1 === mc.protocols.indexOf(h)
                ? n(
                    new tc(
                      "Unsupported protocol " + h + ":",
                      tc.ERR_BAD_REQUEST,
                      e
                    )
                  )
                : l.send(a || null);
            });
          },
        zc = { http: nc, xhr: Uc };
      Js.forEach(zc, function (e, t) {
        if (e) {
          try {
            Object.defineProperty(e, "name", { value: t });
          } catch (n) {}
          Object.defineProperty(e, "adapterName", { value: t });
        }
      });
      var Ic = {
        getAdapter: function (e) {
          for (
            var t, n, r = (e = Js.isArray(e) ? e : [e]).length, a = 0;
            a < r &&
            ((t = e[a]), !(n = Js.isString(t) ? zc[t.toLowerCase()] : t));
            a++
          );
          if (!n) {
            if (!1 === n)
              throw new tc(
                "Adapter ".concat(t, " is not supported by the environment"),
                "ERR_NOT_SUPPORT"
              );
            throw new Error(
              Js.hasOwnProp(zc, t)
                ? "Adapter '".concat(t, "' is not available in the build")
                : "Unknown adapter '".concat(t, "'")
            );
          }
          if (!Js.isFunction(n))
            throw new TypeError("adapter is not a function");
          return n;
        },
        adapters: zc,
      };
      function Fc(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new Oc(null, e);
      }
      function Vc(e) {
        return (
          Fc(e),
          (e.headers = Rc.from(e.headers)),
          (e.data = Cc.call(e, e.transformRequest)),
          -1 !== ["post", "put", "patch"].indexOf(e.method) &&
            e.headers.setContentType("application/x-www-form-urlencoded", !1),
          Ic.getAdapter(e.adapter || wc.adapter)(e).then(
            function (t) {
              return (
                Fc(e),
                (t.data = Cc.call(e, e.transformResponse, t)),
                (t.headers = Rc.from(t.headers)),
                t
              );
            },
            function (t) {
              return (
                Nc(t) ||
                  (Fc(e),
                  t &&
                    t.response &&
                    ((t.response.data = Cc.call(
                      e,
                      e.transformResponse,
                      t.response
                    )),
                    (t.response.headers = Rc.from(t.response.headers)))),
                Promise.reject(t)
              );
            }
          )
        );
      }
      var Bc = function (e) {
        return e instanceof Rc ? e.toJSON() : e;
      };
      function Wc(e, t) {
        t = t || {};
        var n = {};
        function r(e, t, n) {
          return Js.isPlainObject(e) && Js.isPlainObject(t)
            ? Js.merge.call({ caseless: n }, e, t)
            : Js.isPlainObject(t)
            ? Js.merge({}, t)
            : Js.isArray(t)
            ? t.slice()
            : t;
        }
        function a(e, t, n) {
          return Js.isUndefined(t)
            ? Js.isUndefined(e)
              ? void 0
              : r(void 0, e, n)
            : r(e, t, n);
        }
        function o(e, t) {
          if (!Js.isUndefined(t)) return r(void 0, t);
        }
        function i(e, t) {
          return Js.isUndefined(t)
            ? Js.isUndefined(e)
              ? void 0
              : r(void 0, e)
            : r(void 0, t);
        }
        function u(n, a, o) {
          return o in t ? r(n, a) : o in e ? r(void 0, n) : void 0;
        }
        var l = {
          url: o,
          method: o,
          data: o,
          baseURL: i,
          transformRequest: i,
          transformResponse: i,
          paramsSerializer: i,
          timeout: i,
          timeoutMessage: i,
          withCredentials: i,
          adapter: i,
          responseType: i,
          xsrfCookieName: i,
          xsrfHeaderName: i,
          onUploadProgress: i,
          onDownloadProgress: i,
          decompress: i,
          maxContentLength: i,
          maxBodyLength: i,
          beforeRedirect: i,
          transport: i,
          httpAgent: i,
          httpsAgent: i,
          cancelToken: i,
          socketPath: i,
          responseEncoding: i,
          validateStatus: u,
          headers: function (e, t) {
            return a(Bc(e), Bc(t), !0);
          },
        };
        return (
          Js.forEach(Object.keys(e).concat(Object.keys(t)), function (r) {
            var o = l[r] || a,
              i = o(e[r], t[r], r);
            (Js.isUndefined(i) && o !== u) || (n[r] = i);
          }),
          n
        );
      }
      var Hc = "1.3.4",
        $c = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        function (e, t) {
          $c[e] = function (n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        }
      );
      var Kc = {};
      $c.transitional = function (e, t, n) {
        function r(e, t) {
          return (
            "[Axios v1.3.4] Transitional option '" +
            e +
            "'" +
            t +
            (n ? ". " + n : "")
          );
        }
        return function (n, a, o) {
          if (!1 === e)
            throw new tc(
              r(a, " has been removed" + (t ? " in " + t : "")),
              tc.ERR_DEPRECATED
            );
          return (
            t &&
              !Kc[a] &&
              ((Kc[a] = !0),
              console.warn(
                r(
                  a,
                  " has been deprecated since v" +
                    t +
                    " and will be removed in the near future"
                )
              )),
            !e || e(n, a, o)
          );
        };
      };
      var qc = {
          assertOptions: function (e, t, n) {
            if ("object" !== typeof e)
              throw new tc(
                "options must be an object",
                tc.ERR_BAD_OPTION_VALUE
              );
            for (var r = Object.keys(e), a = r.length; a-- > 0; ) {
              var o = r[a],
                i = t[o];
              if (i) {
                var u = e[o],
                  l = void 0 === u || i(u, o, e);
                if (!0 !== l)
                  throw new tc(
                    "option " + o + " must be " + l,
                    tc.ERR_BAD_OPTION_VALUE
                  );
              } else if (!0 !== n)
                throw new tc("Unknown option " + o, tc.ERR_BAD_OPTION);
            }
          },
          validators: $c,
        },
        Qc = qc.validators,
        Gc = (function () {
          function e(t) {
            d(this, e),
              (this.defaults = t),
              (this.interceptors = { request: new hc(), response: new hc() });
          }
          return (
            m(e, [
              {
                key: "request",
                value: function (e, t) {
                  "string" === typeof e
                    ? ((t = t || {}).url = e)
                    : (t = e || {});
                  var n,
                    r = (t = Wc(this.defaults, t)),
                    a = r.transitional,
                    o = r.paramsSerializer,
                    i = r.headers;
                  void 0 !== a &&
                    qc.assertOptions(
                      a,
                      {
                        silentJSONParsing: Qc.transitional(Qc.boolean),
                        forcedJSONParsing: Qc.transitional(Qc.boolean),
                        clarifyTimeoutError: Qc.transitional(Qc.boolean),
                      },
                      !1
                    ),
                    void 0 !== o &&
                      qc.assertOptions(
                        o,
                        { encode: Qc.function, serialize: Qc.function },
                        !0
                      ),
                    (t.method = (
                      t.method ||
                      this.defaults.method ||
                      "get"
                    ).toLowerCase()),
                    (n = i && Js.merge(i.common, i[t.method])) &&
                      Js.forEach(
                        [
                          "delete",
                          "get",
                          "head",
                          "post",
                          "put",
                          "patch",
                          "common",
                        ],
                        function (e) {
                          delete i[e];
                        }
                      ),
                    (t.headers = Rc.concat(n, i));
                  var u = [],
                    l = !0;
                  this.interceptors.request.forEach(function (e) {
                    ("function" === typeof e.runWhen && !1 === e.runWhen(t)) ||
                      ((l = l && e.synchronous),
                      u.unshift(e.fulfilled, e.rejected));
                  });
                  var s,
                    c = [];
                  this.interceptors.response.forEach(function (e) {
                    c.push(e.fulfilled, e.rejected);
                  });
                  var f,
                    d = 0;
                  if (!l) {
                    var p = [Vc.bind(this), void 0];
                    for (
                      p.unshift.apply(p, u),
                        p.push.apply(p, c),
                        f = p.length,
                        s = Promise.resolve(t);
                      d < f;

                    )
                      s = s.then(p[d++], p[d++]);
                    return s;
                  }
                  f = u.length;
                  var h = t;
                  for (d = 0; d < f; ) {
                    var v = u[d++],
                      m = u[d++];
                    try {
                      h = v(h);
                    } catch (y) {
                      m.call(this, y);
                      break;
                    }
                  }
                  try {
                    s = Vc.call(this, h);
                  } catch (y) {
                    return Promise.reject(y);
                  }
                  for (d = 0, f = c.length; d < f; ) s = s.then(c[d++], c[d++]);
                  return s;
                },
              },
              {
                key: "getUri",
                value: function (e) {
                  return pc(
                    Pc((e = Wc(this.defaults, e)).baseURL, e.url),
                    e.params,
                    e.paramsSerializer
                  );
                },
              },
            ]),
            e
          );
        })();
      Js.forEach(["delete", "get", "head", "options"], function (e) {
        Gc.prototype[e] = function (t, n) {
          return this.request(
            Wc(n || {}, { method: e, url: t, data: (n || {}).data })
          );
        };
      }),
        Js.forEach(["post", "put", "patch"], function (e) {
          function t(t) {
            return function (n, r, a) {
              return this.request(
                Wc(a || {}, {
                  method: e,
                  headers: t ? { "Content-Type": "multipart/form-data" } : {},
                  url: n,
                  data: r,
                })
              );
            };
          }
          (Gc.prototype[e] = t()), (Gc.prototype[e + "Form"] = t(!0));
        });
      var Yc = Gc,
        Jc = (function () {
          function e(t) {
            if ((d(this, e), "function" !== typeof t))
              throw new TypeError("executor must be a function.");
            var n;
            this.promise = new Promise(function (e) {
              n = e;
            });
            var r = this;
            this.promise.then(function (e) {
              if (r._listeners) {
                for (var t = r._listeners.length; t-- > 0; ) r._listeners[t](e);
                r._listeners = null;
              }
            }),
              (this.promise.then = function (e) {
                var t,
                  n = new Promise(function (e) {
                    r.subscribe(e), (t = e);
                  }).then(e);
                return (
                  (n.cancel = function () {
                    r.unsubscribe(t);
                  }),
                  n
                );
              }),
              t(function (e, t, a) {
                r.reason || ((r.reason = new Oc(e, t, a)), n(r.reason));
              });
          }
          return (
            m(
              e,
              [
                {
                  key: "throwIfRequested",
                  value: function () {
                    if (this.reason) throw this.reason;
                  },
                },
                {
                  key: "subscribe",
                  value: function (e) {
                    this.reason
                      ? e(this.reason)
                      : this._listeners
                      ? this._listeners.push(e)
                      : (this._listeners = [e]);
                  },
                },
                {
                  key: "unsubscribe",
                  value: function (e) {
                    if (this._listeners) {
                      var t = this._listeners.indexOf(e);
                      -1 !== t && this._listeners.splice(t, 1);
                    }
                  },
                },
              ],
              [
                {
                  key: "source",
                  value: function () {
                    var t;
                    return {
                      token: new e(function (e) {
                        t = e;
                      }),
                      cancel: t,
                    };
                  },
                },
              ]
            ),
            e
          );
        })();
      var Xc = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
      };
      Object.entries(Xc).forEach(function (e) {
        var t = s(e, 2),
          n = t[0],
          r = t[1];
        Xc[r] = n;
      });
      var Zc = Xc;
      var ef = (function e(t) {
        var n = new Yc(t),
          r = gs(Yc.prototype.request, n);
        return (
          Js.extend(r, Yc.prototype, n, { allOwnKeys: !0 }),
          Js.extend(r, n, null, { allOwnKeys: !0 }),
          (r.create = function (n) {
            return e(Wc(t, n));
          }),
          r
        );
      })(wc);
      (ef.Axios = Yc),
        (ef.CanceledError = Oc),
        (ef.CancelToken = Jc),
        (ef.isCancel = Nc),
        (ef.VERSION = Hc),
        (ef.toFormData = uc),
        (ef.AxiosError = tc),
        (ef.Cancel = ef.CanceledError),
        (ef.all = function (e) {
          return Promise.all(e);
        }),
        (ef.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }),
        (ef.isAxiosError = function (e) {
          return Js.isObject(e) && !0 === e.isAxiosError;
        }),
        (ef.mergeConfig = Wc),
        (ef.AxiosHeaders = Rc),
        (ef.formToJSON = function (e) {
          return yc(Js.isHTMLForm(e) ? new FormData(e) : e);
        }),
        (ef.HttpStatusCode = Zc),
        (ef.default = ef);
      var tf = ef,
        nf = n(7),
        rf = n.n(nf),
        af = {
          movie: "Movie_movie__bSRRL",
          movie__img: "Movie_movie__img__ic8cf",
          movie__title: "Movie_movie__title__27-I-",
          movie__year: "Movie_movie__year__UCxvg",
          movie__genres: "Movie_movie__genres__WKDvK",
        };
      function of(e) {
        var t = e.id,
          n = e.coverImg,
          r = e.title,
          a = e.year,
          o = e.summary,
          i = e.genres,
          u = e.movie_style;
        return "" == n
          ? null
          : (0, ds.jsxs)("div", {
              className: af.movie,
              style: u,
              children: [
                (0, ds.jsx)("img", { src: n, alt: r, className: af.movie_img }),
                (0, ds.jsxs)("div", {
                  children: [
                    (0, ds.jsx)("h2", {
                      className: af.movie_title,
                      children: (0, ds.jsx)(Ke, {
                        to: "/movie/".concat(t),
                        children:
                          r && r.length > 50
                            ? "".concat(r.slice(0, 50), "...")
                            : r,
                      }),
                    }),
                    (0, ds.jsx)("h3", {
                      className: af.movie_year,
                      children: a,
                    }),
                    (0, ds.jsx)("p", {
                      className: af.movie__summary,
                      children:
                        o && o.length > 235
                          ? "".concat(o.slice(0, 235), "...")
                          : o,
                    }),
                    (0, ds.jsx)("ul", {
                      className: af.movie_genres,
                      children:
                        i &&
                        i.map(function (e) {
                          return (0, ds.jsx)("li", { children: e }, e);
                        }),
                    }),
                  ],
                }),
              ],
            });
      }
      of.prototype = {
        id: rf().number.isRequired,
        coverImg: rf().string.isRequired,
        title: rf().string.isRequired,
        summary: rf().string.isRequired,
        genres: rf().arrayOf(rf().string).isRequired,
      };
      var uf = of,
        lf = {
          container: "Slide_container__-Rbsn",
          slide__show: "Slide_slide__show__AErhu",
          slide: "Slide_slide__spujN",
          left: "Slide_left__B34SU",
          right: "Slide_right__MWB7-",
        };
      var sf = function (e) {
          var n = e.movieContents,
            r = s((0, t.useState)(0), 2),
            a = r[0],
            o = r[1];
          return (0, ds.jsxs)("div", {
            className: lf.container,
            children: [
              (0, ds.jsx)("div", {
                className: lf.slide__show,
                children: (0, ds.jsx)("div", {
                  className: lf.slide,
                  style: { transform: "translateX(".concat(a, "px)") },
                  children: n.map(function (e) {
                    return (0,
                    ds.jsx)(uf, { id: e.id, year: e.year, coverImg: e.medium_cover_image, title: e.title, summary: "", genres: e.genres, movie_style: { minWidth: "350px", height: "300px" } }, e.id);
                  }),
                }),
              }),
              (0, ds.jsxs)("div", {
                children: [
                  (0, ds.jsx)("button", {
                    className: lf.left,
                    onClick: function () {
                      a >= 0 ||
                        o(function (e) {
                          return e + 350;
                        });
                    },
                    children: (0, ds.jsx)("i", {
                      className: "fas fa-caret-square-left",
                    }),
                  }),
                  (0, ds.jsx)("button", {
                    className: lf.right,
                    onClick: function () {
                      a <= -2450 ||
                        o(function (e) {
                          return e - 350;
                        });
                    },
                    children: (0, ds.jsx)("i", {
                      className: "fas fa-caret-square-right",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        cf = [
          { title: "High Rating", path: "minimum_rating=7" },
          { title: "Romance", path: "genre=romance" },
          { title: "Thriller", path: "genre=thriller" },
          { title: "Animation", path: "genre=animation" },
        ];
      var ff = function () {
        var e = s((0, t.useState)([]), 2),
          n = e[0],
          r = e[1];
        return (
          (0, t.useEffect)(function () {
            var e = cf.map(function (e) {
              e.title;
              var t = e.path;
              return tf.get("https://yts.mx/api/v2/list_movies.json?" + t, {
                params: { limit: 10, sort_by: "year" },
              });
            });
            tf.all(e).then(
              tf.spread(
                Je(
                  Xe().mark(function e() {
                    var t,
                      n,
                      a,
                      o,
                      i = arguments;
                    return Xe().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            for (
                              t = i.length, n = new Array(t), a = 0;
                              a < t;
                              a++
                            )
                              n[a] = i[a];
                            return (
                              (e.next = 3),
                              n.map(function (e) {
                                if (200 === e.status) return e.data.data.movies;
                              })
                            );
                          case 3:
                            (o = e.sent), r(o);
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )
              )
            );
          }, []),
          (0, ds.jsxs)("div", {
            className: ms.container,
            children: [
              cf.map(function (e, t) {
                return (0,
                ds.jsxs)("div", { className: ms.slide__box, children: [(0, ds.jsx)("h3", { className: ms.title, children: (0, ds.jsxs)(Ke, { to: "/page/".concat(e.path, "/1"), children: [(0, ds.jsx)("i", { className: "fas fa-external-link-alt" }), (0, ds.jsxs)("span", { children: [e.title, " Movie"] })] }) }), n && 0 === n.length ? (0, ds.jsx)(vs, {}) : (0, ds.jsx)(sf, { movieContents: n[t] })] }, t);
              }),
              (0, ds.jsx)("div", {
                className: ms.footer,
                children: (0, ds.jsx)("div", {
                  className: ms.copyright,
                  children: (0, ds.jsx)("h3", {
                    className: ms.copyright_letter,
                    children: "Copyright belongs to Amy K",
                  }),
                }),
              }),
            ],
          })
        );
      };
      var df = function () {
          return (0, ds.jsx)("div", {});
        },
        pf = ls({ key: "listPageReLoading", default: !1 }),
        hf = ls({ key: "focusNav", default: "" }),
        vf = {
          container: "List_container__UvRtP",
          loader: "List_loader__yK1eD",
          movies: "List_movies__Lr5sh",
          footer: "List_footer__lR1Fo",
          focusing: "List_focusing__S4UFs",
        },
        mf = f(Array(10)).map(function (e, t) {
          return t + 1;
        });
      var yf = function () {
        var e = xe(),
          n = e.num,
          r = e.detail,
          a = s((0, t.useState)(!0), 2),
          o = a[0],
          i = a[1],
          u = s((0, t.useState)([]), 2),
          l = u[0],
          c = u[1],
          f = s(ss(pf), 2),
          d = f[0],
          p = f[1],
          h = cs(hf),
          v = (function () {
            var e = Je(
              Xe().mark(function e() {
                var t;
                return Xe().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          fetch(
                            "https://yts.mx/api/v2/list_movies.json?page="
                              .concat(n, "&")
                              .concat(r, "&sort_by=year")
                          )
                        );
                      case 2:
                        return (e.next = 4), e.sent.json();
                      case 4:
                        (t = e.sent), c(t.data.movies), i(!1);
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return (
          (0, t.useEffect)(
            function () {
              p(!1), i(!0), h(r), v();
            },
            [d]
          ),
          (0, ds.jsx)("div", {
            children: (0, ds.jsxs)("div", {
              className: vf.container,
              children: [
                o
                  ? (0, ds.jsx)(vs, {})
                  : (0, ds.jsx)("div", {
                      className: vf.movies,
                      children: l.map(function (e) {
                        return (0,
                        ds.jsx)(uf, { id: e.id, year: e.year, coverImg: e.medium_cover_image, title: e.title, summary: e.summary, genres: e.genres }, e.id);
                      }),
                    }),
                (0, ds.jsx)("ul", {
                  className: vf.footer,
                  children: o
                    ? null
                    : mf.map(function (e) {
                        return (0, ds.jsx)("li", {
                          children: (0, ds.jsx)(Ke, {
                            to: "/page/".concat(r, "/").concat(e),
                            onClick: function () {
                              return p(!0);
                            },
                            className: e == n ? vf.focusing : null,
                            children: e,
                          }),
                        });
                      }),
                }),
              ],
            }),
          })
        );
      };
      var gf = function () {
        return (0, ds.jsx)(us, {
          children: (0, ds.jsxs)(He, {
            basename: "/ReactJS.movie",
            children: [
              (0, ds.jsx)(df, {}),
              (0, ds.jsxs)(ze, {
                children: [
                  (0, ds.jsx)(je, {
                    path: "/page/:detail/:num",
                    element: (0, ds.jsx)(yf, {}),
                  }),
                  (0, ds.jsx)(je, {
                    path: "/movie/:id",
                    element: (0, ds.jsx)(ys, {}),
                  }),
                  (0, ds.jsx)(je, { path: "/", element: (0, ds.jsx)(ff, {}) }),
                ],
              }),
            ],
          }),
        });
      };
      a.createRoot(document.getElementById("root")).render((0, ds.jsx)(gf, {}));
    })();
})();
//# sourceMappingURL=main.780185d8.js.map
