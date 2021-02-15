!(function (i) {
  var n = {};
  function s(t) {
    if (n[t]) return n[t].exports;
    var e = (n[t] = { i: t, l: !1, exports: {} });
    return i[t].call(e.exports, e, e.exports, s), (e.l = !0), e.exports;
  }
  (s.m = i),
    (s.c = n),
    (s.d = function (t, e, i) {
      s.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (s.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (s.t = function (e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (s.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          s.d(
            i,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return i;
    }),
    (s.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return s.d(e, "a", e), e;
    }),
    (s.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (s.p = ""),
    s((s.s = 1));
})([
  function (ei, ii, t) {
    var ni;
    /*!
     * jQuery JavaScript Library v3.5.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2020-05-04T22:49Z
     */
    !(function (t, e) {
      "use strict";
      "object" == typeof ei.exports
        ? (ei.exports = t.document
            ? e(t, !0)
            : function (t) {
                if (!t.document)
                  throw new Error("jQuery requires a window with a document");
                return e(t);
              })
        : e(t);
    })("undefined" != typeof window ? window : this, function (x, t) {
      "use strict";
      function g(t) {
        return null != t && t === t.window;
      }
      var e = [],
        i = Object.getPrototypeOf,
        a = e.slice,
        m = e.flat
          ? function (t) {
              return e.flat.call(t);
            }
          : function (t) {
              return e.concat.apply([], t);
            },
        l = e.push,
        s = e.indexOf,
        n = {},
        r = n.toString,
        v = n.hasOwnProperty,
        o = v.toString,
        u = o.call(Object),
        y = {},
        _ = function (t) {
          return "function" == typeof t && "number" != typeof t.nodeType;
        },
        C = x.document,
        c = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function w(t, e, i) {
        var n,
          s,
          r = (i = i || C).createElement("script");
        if (((r.text = t), e))
          for (n in c)
            (s = e[n] || (e.getAttribute && e.getAttribute(n))) &&
              r.setAttribute(n, s);
        i.head.appendChild(r).parentNode.removeChild(r);
      }
      function p(t) {
        return null == t
          ? t + ""
          : "object" == typeof t || "function" == typeof t
          ? n[r.call(t)] || "object"
          : typeof t;
      }
      var h = "3.5.1",
        T = function (t, e) {
          return new T.fn.init(t, e);
        };
      function d(t) {
        var e = !!t && "length" in t && t.length,
          i = p(t);
        return (
          !_(t) &&
          !g(t) &&
          ("array" === i ||
            0 === e ||
            ("number" == typeof e && 0 < e && e - 1 in t))
        );
      }
      (T.fn = T.prototype = {
        jquery: h,
        constructor: T,
        length: 0,
        toArray: function () {
          return a.call(this);
        },
        get: function (t) {
          return null == t
            ? a.call(this)
            : t < 0
            ? this[t + this.length]
            : this[t];
        },
        pushStack: function (t) {
          t = T.merge(this.constructor(), t);
          return (t.prevObject = this), t;
        },
        each: function (t) {
          return T.each(this, t);
        },
        map: function (i) {
          return this.pushStack(
            T.map(this, function (t, e) {
              return i.call(t, e, t);
            })
          );
        },
        slice: function () {
          return this.pushStack(a.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            T.grep(this, function (t, e) {
              return (e + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            T.grep(this, function (t, e) {
              return e % 2;
            })
          );
        },
        eq: function (t) {
          var e = this.length,
            t = +t + (t < 0 ? e : 0);
          return this.pushStack(0 <= t && t < e ? [this[t]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: l,
        sort: e.sort,
        splice: e.splice,
      }),
        (T.extend = T.fn.extend = function () {
          var t,
            e,
            i,
            n,
            s,
            r = arguments[0] || {},
            o = 1,
            a = arguments.length,
            l = !1;
          for (
            "boolean" == typeof r && ((l = r), (r = arguments[o] || {}), o++),
              "object" == typeof r || _(r) || (r = {}),
              o === a && ((r = this), o--);
            o < a;
            o++
          )
            if (null != (t = arguments[o]))
              for (e in t)
                (i = t[e]),
                  "__proto__" !== e &&
                    r !== i &&
                    (l && i && (T.isPlainObject(i) || (n = Array.isArray(i)))
                      ? ((s = r[e]),
                        (s =
                          n && !Array.isArray(s)
                            ? []
                            : n || T.isPlainObject(s)
                            ? s
                            : {}),
                        (n = !1),
                        (r[e] = T.extend(l, s, i)))
                      : void 0 !== i && (r[e] = i));
          return r;
        }),
        T.extend({
          expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (t) {
            throw new Error(t);
          },
          noop: function () {},
          isPlainObject: function (t) {
            return (
              !(!t || "[object Object]" !== r.call(t)) &&
              (!(t = i(t)) ||
                ("function" ==
                  typeof (t = v.call(t, "constructor") && t.constructor) &&
                  o.call(t) === u))
            );
          },
          isEmptyObject: function (t) {
            for (var e in t) return !1;
            return !0;
          },
          globalEval: function (t, e, i) {
            w(t, { nonce: e && e.nonce }, i);
          },
          each: function (t, e) {
            var i,
              n = 0;
            if (d(t))
              for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
            else for (n in t) if (!1 === e.call(t[n], n, t[n])) break;
            return t;
          },
          makeArray: function (t, e) {
            e = e || [];
            return (
              null != t &&
                (d(Object(t))
                  ? T.merge(e, "string" == typeof t ? [t] : t)
                  : l.call(e, t)),
              e
            );
          },
          inArray: function (t, e, i) {
            return null == e ? -1 : s.call(e, t, i);
          },
          merge: function (t, e) {
            for (var i = +e.length, n = 0, s = t.length; n < i; n++)
              t[s++] = e[n];
            return (t.length = s), t;
          },
          grep: function (t, e, i) {
            for (var n = [], s = 0, r = t.length, o = !i; s < r; s++)
              !e(t[s], s) != o && n.push(t[s]);
            return n;
          },
          map: function (t, e, i) {
            var n,
              s,
              r = 0,
              o = [];
            if (d(t))
              for (n = t.length; r < n; r++)
                null != (s = e(t[r], r, i)) && o.push(s);
            else for (r in t) null != (s = e(t[r], r, i)) && o.push(s);
            return m(o);
          },
          guid: 1,
          support: y,
        }),
        "function" == typeof Symbol &&
          (T.fn[Symbol.iterator] = e[Symbol.iterator]),
        T.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (t, e) {
            n["[object " + e + "]"] = e.toLowerCase();
          }
        );
      var f =
        /*!
         * Sizzle CSS Selector Engine v2.3.5
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2020-03-14
         */
        (function (i) {
          function h(t, e) {
            return (
              (t = "0x" + t.slice(1) - 65536),
              e ||
                (t < 0
                  ? String.fromCharCode(65536 + t)
                  : String.fromCharCode((t >> 10) | 55296, (1023 & t) | 56320))
            );
          }
          function n() {
            x();
          }
          var t,
            f,
            w,
            r,
            s,
            p,
            d,
            g,
            b,
            l,
            u,
            x,
            C,
            o,
            T,
            m,
            a,
            c,
            v,
            D = "sizzle" + +new Date(),
            y = i.document,
            E = 0,
            _ = 0,
            k = lt(),
            S = lt(),
            N = lt(),
            A = lt(),
            O = function (t, e) {
              return t === e && (u = !0), 0;
            },
            M = {}.hasOwnProperty,
            e = [],
            j = e.pop,
            I = e.push,
            L = e.push,
            P = e.slice,
            F = function (t, e) {
              for (var i = 0, n = t.length; i < n; i++)
                if (t[i] === e) return i;
              return -1;
            },
            H =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            q = "[\\x20\\t\\r\\n\\f]",
            R =
              "(?:\\\\[\\da-fA-F]{1,6}" +
              q +
              "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            U =
              "\\[" +
              q +
              "*(" +
              R +
              ")(?:" +
              q +
              "*([*^$|!~]?=)" +
              q +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              R +
              "))|)" +
              q +
              "*\\]",
            $ =
              ":(" +
              R +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              U +
              ")*)|.*)\\)|)",
            W = new RegExp(q + "+", "g"),
            z = new RegExp(
              "^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$",
              "g"
            ),
            B = new RegExp("^" + q + "*," + q + "*"),
            V = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"),
            Y = new RegExp(q + "|>"),
            Q = new RegExp($),
            X = new RegExp("^" + R + "$"),
            K = {
              ID: new RegExp("^#(" + R + ")"),
              CLASS: new RegExp("^\\.(" + R + ")"),
              TAG: new RegExp("^(" + R + "|[*])"),
              ATTR: new RegExp("^" + U),
              PSEUDO: new RegExp("^" + $),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  q +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  q +
                  "*(?:([+-]|)" +
                  q +
                  "*(\\d+)|))" +
                  q +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + H + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  q +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  q +
                  "*((?:-\\d)?\\d*)" +
                  q +
                  "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            G = /HTML$/i,
            J = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            tt = /^[^{]+\{\s*\[native \w/,
            et = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            it = /[+~]/,
            nt = new RegExp(
              "\\\\[\\da-fA-F]{1,6}" + q + "?|\\\\([^\\r\\n\\f])",
              "g"
            ),
            st = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            rt = function (t, e) {
              return e
                ? "\0" === t
                  ? "�"
                  : t.slice(0, -1) +
                    "\\" +
                    t.charCodeAt(t.length - 1).toString(16) +
                    " "
                : "\\" + t;
            },
            ot = yt(
              function (t) {
                return (
                  !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
                );
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            L.apply((e = P.call(y.childNodes)), y.childNodes),
              e[y.childNodes.length].nodeType;
          } catch (t) {
            L = {
              apply: e.length
                ? function (t, e) {
                    I.apply(t, P.call(e));
                  }
                : function (t, e) {
                    for (var i = t.length, n = 0; (t[i++] = e[n++]); );
                    t.length = i - 1;
                  },
            };
          }
          function at(e, t, i, n) {
            var s,
              r,
              o,
              a,
              l,
              u,
              c,
              h = t && t.ownerDocument,
              d = t ? t.nodeType : 9;
            if (
              ((i = i || []),
              "string" != typeof e || !e || (1 !== d && 9 !== d && 11 !== d))
            )
              return i;
            if (!n && (x(t), (t = t || C), T)) {
              if (11 !== d && (l = et.exec(e)))
                if ((s = l[1])) {
                  if (9 === d) {
                    if (!(o = t.getElementById(s))) return i;
                    if (o.id === s) return i.push(o), i;
                  } else if (
                    h &&
                    (o = h.getElementById(s)) &&
                    v(t, o) &&
                    o.id === s
                  )
                    return i.push(o), i;
                } else {
                  if (l[2]) return L.apply(i, t.getElementsByTagName(e)), i;
                  if (
                    (s = l[3]) &&
                    f.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return L.apply(i, t.getElementsByClassName(s)), i;
                }
              if (
                f.qsa &&
                !A[e + " "] &&
                (!m || !m.test(e)) &&
                (1 !== d || "object" !== t.nodeName.toLowerCase())
              ) {
                if (((c = e), (h = t), 1 === d && (Y.test(e) || V.test(e)))) {
                  for (
                    ((h = (it.test(e) && gt(t.parentNode)) || t) === t &&
                      f.scope) ||
                      ((a = t.getAttribute("id"))
                        ? (a = a.replace(st, rt))
                        : t.setAttribute("id", (a = D))),
                      r = (u = p(e)).length;
                    r--;

                  )
                    u[r] = (a ? "#" + a : ":scope") + " " + vt(u[r]);
                  c = u.join(",");
                }
                try {
                  return L.apply(i, h.querySelectorAll(c)), i;
                } catch (t) {
                  A(e, !0);
                } finally {
                  a === D && t.removeAttribute("id");
                }
              }
            }
            return g(e.replace(z, "$1"), t, i, n);
          }
          function lt() {
            var i = [];
            function n(t, e) {
              return (
                i.push(t + " ") > w.cacheLength && delete n[i.shift()],
                (n[t + " "] = e)
              );
            }
            return n;
          }
          function ut(t) {
            return (t[D] = !0), t;
          }
          function ct(t) {
            var e = C.createElement("fieldset");
            try {
              return !!t(e);
            } catch (t) {
              return !1;
            } finally {
              e.parentNode && e.parentNode.removeChild(e), (e = null);
            }
          }
          function ht(t, e) {
            for (var i = t.split("|"), n = i.length; n--; )
              w.attrHandle[i[n]] = e;
          }
          function dt(t, e) {
            var i = e && t,
              n =
                i &&
                1 === t.nodeType &&
                1 === e.nodeType &&
                t.sourceIndex - e.sourceIndex;
            if (n) return n;
            if (i) for (; (i = i.nextSibling); ) if (i === e) return -1;
            return t ? 1 : -1;
          }
          function ft(e) {
            return function (t) {
              return "form" in t
                ? t.parentNode && !1 === t.disabled
                  ? "label" in t
                    ? "label" in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && ot(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function pt(o) {
            return ut(function (r) {
              return (
                (r = +r),
                ut(function (t, e) {
                  for (var i, n = o([], t.length, r), s = n.length; s--; )
                    t[(i = n[s])] && (t[i] = !(e[i] = t[i]));
                })
              );
            });
          }
          function gt(t) {
            return t && void 0 !== t.getElementsByTagName && t;
          }
          for (t in ((f = at.support = {}),
          (s = at.isXML = function (t) {
            var e = t.namespaceURI,
              t = (t.ownerDocument || t).documentElement;
            return !G.test(e || (t && t.nodeName) || "HTML");
          }),
          (x = at.setDocument = function (t) {
            var e,
              t = t ? t.ownerDocument || t : y;
            return (
              t != C &&
                9 === t.nodeType &&
                t.documentElement &&
                ((o = (C = t).documentElement),
                (T = !s(C)),
                y != C &&
                  (e = C.defaultView) &&
                  e.top !== e &&
                  (e.addEventListener
                    ? e.addEventListener("unload", n, !1)
                    : e.attachEvent && e.attachEvent("onunload", n)),
                (f.scope = ct(function (t) {
                  return (
                    o.appendChild(t).appendChild(C.createElement("div")),
                    void 0 !== t.querySelectorAll &&
                      !t.querySelectorAll(":scope fieldset div").length
                  );
                })),
                (f.attributes = ct(function (t) {
                  return (t.className = "i"), !t.getAttribute("className");
                })),
                (f.getElementsByTagName = ct(function (t) {
                  return (
                    t.appendChild(C.createComment("")),
                    !t.getElementsByTagName("*").length
                  );
                })),
                (f.getElementsByClassName = tt.test(C.getElementsByClassName)),
                (f.getById = ct(function (t) {
                  return (
                    (o.appendChild(t).id = D),
                    !C.getElementsByName || !C.getElementsByName(D).length
                  );
                })),
                f.getById
                  ? ((w.filter.ID = function (t) {
                      var e = t.replace(nt, h);
                      return function (t) {
                        return t.getAttribute("id") === e;
                      };
                    }),
                    (w.find.ID = function (t, e) {
                      if (void 0 !== e.getElementById && T) {
                        t = e.getElementById(t);
                        return t ? [t] : [];
                      }
                    }))
                  : ((w.filter.ID = function (t) {
                      var e = t.replace(nt, h);
                      return function (t) {
                        t =
                          void 0 !== t.getAttributeNode &&
                          t.getAttributeNode("id");
                        return t && t.value === e;
                      };
                    }),
                    (w.find.ID = function (t, e) {
                      if (void 0 !== e.getElementById && T) {
                        var i,
                          n,
                          s,
                          r = e.getElementById(t);
                        if (r) {
                          if ((i = r.getAttributeNode("id")) && i.value === t)
                            return [r];
                          for (
                            s = e.getElementsByName(t), n = 0;
                            (r = s[n++]);

                          )
                            if ((i = r.getAttributeNode("id")) && i.value === t)
                              return [r];
                        }
                        return [];
                      }
                    })),
                (w.find.TAG = f.getElementsByTagName
                  ? function (t, e) {
                      return void 0 !== e.getElementsByTagName
                        ? e.getElementsByTagName(t)
                        : f.qsa
                        ? e.querySelectorAll(t)
                        : void 0;
                    }
                  : function (t, e) {
                      var i,
                        n = [],
                        s = 0,
                        r = e.getElementsByTagName(t);
                      if ("*" !== t) return r;
                      for (; (i = r[s++]); ) 1 === i.nodeType && n.push(i);
                      return n;
                    }),
                (w.find.CLASS =
                  f.getElementsByClassName &&
                  function (t, e) {
                    if (void 0 !== e.getElementsByClassName && T)
                      return e.getElementsByClassName(t);
                  }),
                (a = []),
                (m = []),
                (f.qsa = tt.test(C.querySelectorAll)) &&
                  (ct(function (t) {
                    var e;
                    (o.appendChild(t).innerHTML =
                      "<a id='" +
                      D +
                      "'></a><select id='" +
                      D +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      t.querySelectorAll("[msallowcapture^='']").length &&
                        m.push("[*^$]=" + q + "*(?:''|\"\")"),
                      t.querySelectorAll("[selected]").length ||
                        m.push("\\[" + q + "*(?:value|" + H + ")"),
                      t.querySelectorAll("[id~=" + D + "-]").length ||
                        m.push("~="),
                      (e = C.createElement("input")).setAttribute("name", ""),
                      t.appendChild(e),
                      t.querySelectorAll("[name='']").length ||
                        m.push(
                          "\\[" + q + "*name" + q + "*=" + q + "*(?:''|\"\")"
                        ),
                      t.querySelectorAll(":checked").length ||
                        m.push(":checked"),
                      t.querySelectorAll("a#" + D + "+*").length ||
                        m.push(".#.+[+~]"),
                      t.querySelectorAll("\\\f"),
                      m.push("[\\r\\n\\f]");
                  }),
                  ct(function (t) {
                    t.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = C.createElement("input");
                    e.setAttribute("type", "hidden"),
                      t.appendChild(e).setAttribute("name", "D"),
                      t.querySelectorAll("[name=d]").length &&
                        m.push("name" + q + "*[*^$|!~]?="),
                      2 !== t.querySelectorAll(":enabled").length &&
                        m.push(":enabled", ":disabled"),
                      (o.appendChild(t).disabled = !0),
                      2 !== t.querySelectorAll(":disabled").length &&
                        m.push(":enabled", ":disabled"),
                      t.querySelectorAll("*,:x"),
                      m.push(",.*:");
                  })),
                (f.matchesSelector = tt.test(
                  (c =
                    o.matches ||
                    o.webkitMatchesSelector ||
                    o.mozMatchesSelector ||
                    o.oMatchesSelector ||
                    o.msMatchesSelector)
                )) &&
                  ct(function (t) {
                    (f.disconnectedMatch = c.call(t, "*")),
                      c.call(t, "[s!='']:x"),
                      a.push("!=", $);
                  }),
                (m = m.length && new RegExp(m.join("|"))),
                (a = a.length && new RegExp(a.join("|"))),
                (e = tt.test(o.compareDocumentPosition)),
                (v =
                  e || tt.test(o.contains)
                    ? function (t, e) {
                        var i = 9 === t.nodeType ? t.documentElement : t,
                          e = e && e.parentNode;
                        return (
                          t === e ||
                          !(
                            !e ||
                            1 !== e.nodeType ||
                            !(i.contains
                              ? i.contains(e)
                              : t.compareDocumentPosition &&
                                16 & t.compareDocumentPosition(e))
                          )
                        );
                      }
                    : function (t, e) {
                        if (e)
                          for (; (e = e.parentNode); ) if (e === t) return !0;
                        return !1;
                      }),
                (O = e
                  ? function (t, e) {
                      if (t === e) return (u = !0), 0;
                      var i =
                        !t.compareDocumentPosition - !e.compareDocumentPosition;
                      return (
                        i ||
                        (1 &
                          (i =
                            (t.ownerDocument || t) == (e.ownerDocument || e)
                              ? t.compareDocumentPosition(e)
                              : 1) ||
                        (!f.sortDetached && e.compareDocumentPosition(t) === i)
                          ? t == C || (t.ownerDocument == y && v(y, t))
                            ? -1
                            : e == C || (e.ownerDocument == y && v(y, e))
                            ? 1
                            : l
                            ? F(l, t) - F(l, e)
                            : 0
                          : 4 & i
                          ? -1
                          : 1)
                      );
                    }
                  : function (t, e) {
                      if (t === e) return (u = !0), 0;
                      var i,
                        n = 0,
                        s = t.parentNode,
                        r = e.parentNode,
                        o = [t],
                        a = [e];
                      if (!s || !r)
                        return t == C
                          ? -1
                          : e == C
                          ? 1
                          : s
                          ? -1
                          : r
                          ? 1
                          : l
                          ? F(l, t) - F(l, e)
                          : 0;
                      if (s === r) return dt(t, e);
                      for (i = t; (i = i.parentNode); ) o.unshift(i);
                      for (i = e; (i = i.parentNode); ) a.unshift(i);
                      for (; o[n] === a[n]; ) n++;
                      return n
                        ? dt(o[n], a[n])
                        : o[n] == y
                        ? -1
                        : a[n] == y
                        ? 1
                        : 0;
                    })),
              C
            );
          }),
          (at.matches = function (t, e) {
            return at(t, null, null, e);
          }),
          (at.matchesSelector = function (t, e) {
            if (
              (x(t),
              f.matchesSelector &&
                T &&
                !A[e + " "] &&
                (!a || !a.test(e)) &&
                (!m || !m.test(e)))
            )
              try {
                var i = c.call(t, e);
                if (
                  i ||
                  f.disconnectedMatch ||
                  (t.document && 11 !== t.document.nodeType)
                )
                  return i;
              } catch (t) {
                A(e, !0);
              }
            return 0 < at(e, C, null, [t]).length;
          }),
          (at.contains = function (t, e) {
            return (t.ownerDocument || t) != C && x(t), v(t, e);
          }),
          (at.attr = function (t, e) {
            (t.ownerDocument || t) != C && x(t);
            var i = w.attrHandle[e.toLowerCase()],
              i =
                i && M.call(w.attrHandle, e.toLowerCase())
                  ? i(t, e, !T)
                  : void 0;
            return void 0 !== i
              ? i
              : f.attributes || !T
              ? t.getAttribute(e)
              : (i = t.getAttributeNode(e)) && i.specified
              ? i.value
              : null;
          }),
          (at.escape = function (t) {
            return (t + "").replace(st, rt);
          }),
          (at.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t);
          }),
          (at.uniqueSort = function (t) {
            var e,
              i = [],
              n = 0,
              s = 0;
            if (
              ((u = !f.detectDuplicates),
              (l = !f.sortStable && t.slice(0)),
              t.sort(O),
              u)
            ) {
              for (; (e = t[s++]); ) e === t[s] && (n = i.push(s));
              for (; n--; ) t.splice(i[n], 1);
            }
            return (l = null), t;
          }),
          (r = at.getText = function (t) {
            var e,
              i = "",
              n = 0,
              s = t.nodeType;
            if (s) {
              if (1 === s || 9 === s || 11 === s) {
                if ("string" == typeof t.textContent) return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling) i += r(t);
              } else if (3 === s || 4 === s) return t.nodeValue;
            } else for (; (e = t[n++]); ) i += r(e);
            return i;
          }),
          ((w = at.selectors = {
            cacheLength: 50,
            createPseudo: ut,
            match: K,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (t) {
                return (
                  (t[1] = t[1].replace(nt, h)),
                  (t[3] = (t[3] || t[4] || t[5] || "").replace(nt, h)),
                  "~=" === t[2] && (t[3] = " " + t[3] + " "),
                  t.slice(0, 4)
                );
              },
              CHILD: function (t) {
                return (
                  (t[1] = t[1].toLowerCase()),
                  "nth" === t[1].slice(0, 3)
                    ? (t[3] || at.error(t[0]),
                      (t[4] = +(t[4]
                        ? t[5] + (t[6] || 1)
                        : 2 * ("even" === t[3] || "odd" === t[3]))),
                      (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                    : t[3] && at.error(t[0]),
                  t
                );
              },
              PSEUDO: function (t) {
                var e,
                  i = !t[6] && t[2];
                return K.CHILD.test(t[0])
                  ? null
                  : (t[3]
                      ? (t[2] = t[4] || t[5] || "")
                      : i &&
                        Q.test(i) &&
                        (e = p(i, !0)) &&
                        (e = i.indexOf(")", i.length - e) - i.length) &&
                        ((t[0] = t[0].slice(0, e)), (t[2] = i.slice(0, e))),
                    t.slice(0, 3));
              },
            },
            filter: {
              TAG: function (t) {
                var e = t.replace(nt, h).toLowerCase();
                return "*" === t
                  ? function () {
                      return !0;
                    }
                  : function (t) {
                      return t.nodeName && t.nodeName.toLowerCase() === e;
                    };
              },
              CLASS: function (t) {
                var e = k[t + " "];
                return (
                  e ||
                  ((e = new RegExp("(^|" + q + ")" + t + "(" + q + "|$)")) &&
                    k(t, function (t) {
                      return e.test(
                        ("string" == typeof t.className && t.className) ||
                          (void 0 !== t.getAttribute &&
                            t.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (e, i, n) {
                return function (t) {
                  t = at.attr(t, e);
                  return null == t
                    ? "!=" === i
                    : !i ||
                        ((t += ""),
                        "=" === i
                          ? t === n
                          : "!=" === i
                          ? t !== n
                          : "^=" === i
                          ? n && 0 === t.indexOf(n)
                          : "*=" === i
                          ? n && -1 < t.indexOf(n)
                          : "$=" === i
                          ? n && t.slice(-n.length) === n
                          : "~=" === i
                          ? -1 < (" " + t.replace(W, " ") + " ").indexOf(n)
                          : "|=" === i &&
                            (t === n || t.slice(0, n.length + 1) === n + "-"));
                };
              },
              CHILD: function (p, t, e, g, m) {
                var v = "nth" !== p.slice(0, 3),
                  y = "last" !== p.slice(-4),
                  _ = "of-type" === t;
                return 1 === g && 0 === m
                  ? function (t) {
                      return !!t.parentNode;
                    }
                  : function (t, e, i) {
                      var n,
                        s,
                        r,
                        o,
                        a,
                        l,
                        u = v != y ? "nextSibling" : "previousSibling",
                        c = t.parentNode,
                        h = _ && t.nodeName.toLowerCase(),
                        d = !i && !_,
                        f = !1;
                      if (c) {
                        if (v) {
                          for (; u; ) {
                            for (o = t; (o = o[u]); )
                              if (
                                _
                                  ? o.nodeName.toLowerCase() === h
                                  : 1 === o.nodeType
                              )
                                return !1;
                            l = u = "only" === p && !l && "nextSibling";
                          }
                          return !0;
                        }
                        if (((l = [y ? c.firstChild : c.lastChild]), y && d)) {
                          for (
                            f =
                              (a =
                                (n =
                                  (s =
                                    (r = (o = c)[D] || (o[D] = {}))[
                                      o.uniqueID
                                    ] || (r[o.uniqueID] = {}))[p] || [])[0] ===
                                  E && n[1]) && n[2],
                              o = a && c.childNodes[a];
                            (o = (++a && o && o[u]) || (f = a = 0) || l.pop());

                          )
                            if (1 === o.nodeType && ++f && o === t) {
                              s[p] = [E, a, f];
                              break;
                            }
                        } else if (
                          (d &&
                            (f = a =
                              (n =
                                (s =
                                  (r = (o = t)[D] || (o[D] = {}))[o.uniqueID] ||
                                  (r[o.uniqueID] = {}))[p] || [])[0] === E &&
                              n[1]),
                          !1 === f)
                        )
                          for (
                            ;
                            (o =
                              (++a && o && o[u]) || (f = a = 0) || l.pop()) &&
                            ((_
                              ? o.nodeName.toLowerCase() !== h
                              : 1 !== o.nodeType) ||
                              !++f ||
                              (d &&
                                ((s =
                                  (r = o[D] || (o[D] = {}))[o.uniqueID] ||
                                  (r[o.uniqueID] = {}))[p] = [E, f]),
                              o !== t));

                          );
                        return (f -= m) === g || (f % g == 0 && 0 <= f / g);
                      }
                    };
              },
              PSEUDO: function (t, r) {
                var e,
                  o =
                    w.pseudos[t] ||
                    w.setFilters[t.toLowerCase()] ||
                    at.error("unsupported pseudo: " + t);
                return o[D]
                  ? o(r)
                  : 1 < o.length
                  ? ((e = [t, t, "", r]),
                    w.setFilters.hasOwnProperty(t.toLowerCase())
                      ? ut(function (t, e) {
                          for (var i, n = o(t, r), s = n.length; s--; )
                            t[(i = F(t, n[s]))] = !(e[i] = n[s]);
                        })
                      : function (t) {
                          return o(t, 0, e);
                        })
                  : o;
              },
            },
            pseudos: {
              not: ut(function (t) {
                var n = [],
                  s = [],
                  a = d(t.replace(z, "$1"));
                return a[D]
                  ? ut(function (t, e, i, n) {
                      for (var s, r = a(t, null, n, []), o = t.length; o--; )
                        (s = r[o]) && (t[o] = !(e[o] = s));
                    })
                  : function (t, e, i) {
                      return (
                        (n[0] = t), a(n, null, i, s), (n[0] = null), !s.pop()
                      );
                    };
              }),
              has: ut(function (e) {
                return function (t) {
                  return 0 < at(e, t).length;
                };
              }),
              contains: ut(function (e) {
                return (
                  (e = e.replace(nt, h)),
                  function (t) {
                    return -1 < (t.textContent || r(t)).indexOf(e);
                  }
                );
              }),
              lang: ut(function (i) {
                return (
                  X.test(i || "") || at.error("unsupported lang: " + i),
                  (i = i.replace(nt, h).toLowerCase()),
                  function (t) {
                    var e;
                    do {
                      if (
                        (e = T
                          ? t.lang
                          : t.getAttribute("xml:lang") ||
                            t.getAttribute("lang"))
                      )
                        return (
                          (e = e.toLowerCase()) === i ||
                          0 === e.indexOf(i + "-")
                        );
                    } while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (t) {
                var e = i.location && i.location.hash;
                return e && e.slice(1) === t.id;
              },
              root: function (t) {
                return t === o;
              },
              focus: function (t) {
                return (
                  t === C.activeElement &&
                  (!C.hasFocus || C.hasFocus()) &&
                  !!(t.type || t.href || ~t.tabIndex)
                );
              },
              enabled: ft(!1),
              disabled: ft(!0),
              checked: function (t) {
                var e = t.nodeName.toLowerCase();
                return (
                  ("input" === e && !!t.checked) ||
                  ("option" === e && !!t.selected)
                );
              },
              selected: function (t) {
                return (
                  t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                );
              },
              empty: function (t) {
                for (t = t.firstChild; t; t = t.nextSibling)
                  if (t.nodeType < 6) return !1;
                return !0;
              },
              parent: function (t) {
                return !w.pseudos.empty(t);
              },
              header: function (t) {
                return Z.test(t.nodeName);
              },
              input: function (t) {
                return J.test(t.nodeName);
              },
              button: function (t) {
                var e = t.nodeName.toLowerCase();
                return ("input" === e && "button" === t.type) || "button" === e;
              },
              text: function (t) {
                return (
                  "input" === t.nodeName.toLowerCase() &&
                  "text" === t.type &&
                  (null == (t = t.getAttribute("type")) ||
                    "text" === t.toLowerCase())
                );
              },
              first: pt(function () {
                return [0];
              }),
              last: pt(function (t, e) {
                return [e - 1];
              }),
              eq: pt(function (t, e, i) {
                return [i < 0 ? i + e : i];
              }),
              even: pt(function (t, e) {
                for (var i = 0; i < e; i += 2) t.push(i);
                return t;
              }),
              odd: pt(function (t, e) {
                for (var i = 1; i < e; i += 2) t.push(i);
                return t;
              }),
              lt: pt(function (t, e, i) {
                for (var n = i < 0 ? i + e : e < i ? e : i; 0 <= --n; )
                  t.push(n);
                return t;
              }),
              gt: pt(function (t, e, i) {
                for (var n = i < 0 ? i + e : i; ++n < e; ) t.push(n);
                return t;
              }),
            },
          }).pseudos.nth = w.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            w.pseudos[t] = (function (e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            })(t);
          for (t in { submit: !0, reset: !0 })
            w.pseudos[t] = (function (i) {
              return function (t) {
                var e = t.nodeName.toLowerCase();
                return ("input" === e || "button" === e) && t.type === i;
              };
            })(t);
          function mt() {}
          function vt(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
            return n;
          }
          function yt(o, t, e) {
            var a = t.dir,
              l = t.next,
              u = l || a,
              c = e && "parentNode" === u,
              h = _++;
            return t.first
              ? function (t, e, i) {
                  for (; (t = t[a]); )
                    if (1 === t.nodeType || c) return o(t, e, i);
                  return !1;
                }
              : function (t, e, i) {
                  var n,
                    s,
                    r = [E, h];
                  if (i) {
                    for (; (t = t[a]); )
                      if ((1 === t.nodeType || c) && o(t, e, i)) return !0;
                  } else
                    for (; (t = t[a]); )
                      if (1 === t.nodeType || c)
                        if (
                          ((n =
                            (s = t[D] || (t[D] = {}))[t.uniqueID] ||
                            (s[t.uniqueID] = {})),
                          l && l === t.nodeName.toLowerCase())
                        )
                          t = t[a] || t;
                        else {
                          if ((s = n[u]) && s[0] === E && s[1] === h)
                            return (r[2] = s[2]);
                          if (((n[u] = r)[2] = o(t, e, i))) return !0;
                        }
                  return !1;
                };
          }
          function _t(s) {
            return 1 < s.length
              ? function (t, e, i) {
                  for (var n = s.length; n--; ) if (!s[n](t, e, i)) return !1;
                  return !0;
                }
              : s[0];
          }
          function wt(t, e, i, n, s) {
            for (var r, o = [], a = 0, l = t.length, u = null != e; a < l; a++)
              (r = t[a]) && ((i && !i(r, n, s)) || (o.push(r), u && e.push(a)));
            return o;
          }
          function bt(f, p, g, m, v, t) {
            return (
              m && !m[D] && (m = bt(m)),
              v && !v[D] && (v = bt(v, t)),
              ut(function (t, e, i, n) {
                var s,
                  r,
                  o,
                  a = [],
                  l = [],
                  u = e.length,
                  c =
                    t ||
                    (function (t, e, i) {
                      for (var n = 0, s = e.length; n < s; n++) at(t, e[n], i);
                      return i;
                    })(p || "*", i.nodeType ? [i] : i, []),
                  h = !f || (!t && p) ? c : wt(c, a, f, i, n),
                  d = g ? (v || (t ? f : u || m) ? [] : e) : h;
                if ((g && g(h, d, i, n), m))
                  for (s = wt(d, l), m(s, [], i, n), r = s.length; r--; )
                    (o = s[r]) && (d[l[r]] = !(h[l[r]] = o));
                if (t) {
                  if (v || f) {
                    if (v) {
                      for (s = [], r = d.length; r--; )
                        (o = d[r]) && s.push((h[r] = o));
                      v(null, (d = []), s, n);
                    }
                    for (r = d.length; r--; )
                      (o = d[r]) &&
                        -1 < (s = v ? F(t, o) : a[r]) &&
                        (t[s] = !(e[s] = o));
                  }
                } else (d = wt(d === e ? d.splice(u, d.length) : d)), v ? v(null, e, d, n) : L.apply(e, d);
              })
            );
          }
          function xt(m, v) {
            function t(t, e, i, n, s) {
              var r,
                o,
                a,
                l = 0,
                u = "0",
                c = t && [],
                h = [],
                d = b,
                f = t || (_ && w.find.TAG("*", s)),
                p = (E += null == d ? 1 : Math.random() || 0.1),
                g = f.length;
              for (
                s && (b = e == C || e || s);
                u !== g && null != (r = f[u]);
                u++
              ) {
                if (_ && r) {
                  for (
                    o = 0, e || r.ownerDocument == C || (x(r), (i = !T));
                    (a = m[o++]);

                  )
                    if (a(r, e || C, i)) {
                      n.push(r);
                      break;
                    }
                  s && (E = p);
                }
                y && ((r = !a && r) && l--, t && c.push(r));
              }
              if (((l += u), y && u !== l)) {
                for (o = 0; (a = v[o++]); ) a(c, h, e, i);
                if (t) {
                  if (0 < l) for (; u--; ) c[u] || h[u] || (h[u] = j.call(n));
                  h = wt(h);
                }
                L.apply(n, h),
                  s &&
                    !t &&
                    0 < h.length &&
                    1 < l + v.length &&
                    at.uniqueSort(n);
              }
              return s && ((E = p), (b = d)), c;
            }
            var y = 0 < v.length,
              _ = 0 < m.length;
            return y ? ut(t) : t;
          }
          return (
            (mt.prototype = w.filters = w.pseudos),
            (w.setFilters = new mt()),
            (p = at.tokenize = function (t, e) {
              var i,
                n,
                s,
                r,
                o,
                a,
                l,
                u = S[t + " "];
              if (u) return e ? 0 : u.slice(0);
              for (o = t, a = [], l = w.preFilter; o; ) {
                for (r in ((i && !(n = B.exec(o))) ||
                  (n && (o = o.slice(n[0].length) || o), a.push((s = []))),
                (i = !1),
                (n = V.exec(o)) &&
                  ((i = n.shift()),
                  s.push({ value: i, type: n[0].replace(z, " ") }),
                  (o = o.slice(i.length))),
                w.filter))
                  !(n = K[r].exec(o)) ||
                    (l[r] && !(n = l[r](n))) ||
                    ((i = n.shift()),
                    s.push({ value: i, type: r, matches: n }),
                    (o = o.slice(i.length)));
                if (!i) break;
              }
              return e ? o.length : o ? at.error(t) : S(t, a).slice(0);
            }),
            (d = at.compile = function (t, e) {
              var i,
                n = [],
                s = [],
                r = N[t + " "];
              if (!r) {
                for (i = (e = e || p(t)).length; i--; )
                  ((r = (function t(e) {
                    for (
                      var n,
                        i,
                        s,
                        r = e.length,
                        o = w.relative[e[0].type],
                        a = o || w.relative[" "],
                        l = o ? 1 : 0,
                        u = yt(
                          function (t) {
                            return t === n;
                          },
                          a,
                          !0
                        ),
                        c = yt(
                          function (t) {
                            return -1 < F(n, t);
                          },
                          a,
                          !0
                        ),
                        h = [
                          function (t, e, i) {
                            return (
                              (i =
                                (!o && (i || e !== b)) ||
                                ((n = e).nodeType ? u : c)(t, e, i)),
                              (n = null),
                              i
                            );
                          },
                        ];
                      l < r;
                      l++
                    )
                      if ((i = w.relative[e[l].type])) h = [yt(_t(h), i)];
                      else {
                        if (
                          (i = w.filter[e[l].type].apply(null, e[l].matches))[D]
                        ) {
                          for (s = ++l; s < r && !w.relative[e[s].type]; s++);
                          return bt(
                            1 < l && _t(h),
                            1 < l &&
                              vt(
                                e
                                  .slice(0, l - 1)
                                  .concat({
                                    value: " " === e[l - 2].type ? "*" : "",
                                  })
                              ).replace(z, "$1"),
                            i,
                            l < s && t(e.slice(l, s)),
                            s < r && t((e = e.slice(s))),
                            s < r && vt(e)
                          );
                        }
                        h.push(i);
                      }
                    return _t(h);
                  })(e[i]))[D]
                    ? n
                    : s
                  ).push(r);
                (r = N(t, xt(s, n))).selector = t;
              }
              return r;
            }),
            (g = at.select = function (t, e, i, n) {
              var s,
                r,
                o,
                a,
                l,
                u = "function" == typeof t && t,
                c = !n && p((t = u.selector || t));
              if (((i = i || []), 1 === c.length)) {
                if (
                  2 < (r = c[0] = c[0].slice(0)).length &&
                  "ID" === (o = r[0]).type &&
                  9 === e.nodeType &&
                  T &&
                  w.relative[r[1].type]
                ) {
                  if (
                    !(e = (w.find.ID(o.matches[0].replace(nt, h), e) || [])[0])
                  )
                    return i;
                  u && (e = e.parentNode),
                    (t = t.slice(r.shift().value.length));
                }
                for (
                  s = K.needsContext.test(t) ? 0 : r.length;
                  s-- && ((o = r[s]), !w.relative[(a = o.type)]);

                )
                  if (
                    (l = w.find[a]) &&
                    (n = l(
                      o.matches[0].replace(nt, h),
                      (it.test(r[0].type) && gt(e.parentNode)) || e
                    ))
                  ) {
                    if ((r.splice(s, 1), !(t = n.length && vt(r))))
                      return L.apply(i, n), i;
                    break;
                  }
              }
              return (
                (u || d(t, c))(
                  n,
                  e,
                  !T,
                  i,
                  !e || (it.test(t) && gt(e.parentNode)) || e
                ),
                i
              );
            }),
            (f.sortStable = D.split("").sort(O).join("") === D),
            (f.detectDuplicates = !!u),
            x(),
            (f.sortDetached = ct(function (t) {
              return 1 & t.compareDocumentPosition(C.createElement("fieldset"));
            })),
            ct(function (t) {
              return (
                (t.innerHTML = "<a href='#'></a>"),
                "#" === t.firstChild.getAttribute("href")
              );
            }) ||
              ht("type|href|height|width", function (t, e, i) {
                if (!i)
                  return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
              }),
            (f.attributes &&
              ct(function (t) {
                return (
                  (t.innerHTML = "<input/>"),
                  t.firstChild.setAttribute("value", ""),
                  "" === t.firstChild.getAttribute("value")
                );
              })) ||
              ht("value", function (t, e, i) {
                if (!i && "input" === t.nodeName.toLowerCase())
                  return t.defaultValue;
              }),
            ct(function (t) {
              return null == t.getAttribute("disabled");
            }) ||
              ht(H, function (t, e, i) {
                if (!i)
                  return !0 === t[e]
                    ? e.toLowerCase()
                    : (e = t.getAttributeNode(e)) && e.specified
                    ? e.value
                    : null;
              }),
            at
          );
        })(x);
      (T.find = f),
        (T.expr = f.selectors),
        (T.expr[":"] = T.expr.pseudos),
        (T.uniqueSort = T.unique = f.uniqueSort),
        (T.text = f.getText),
        (T.isXMLDoc = f.isXML),
        (T.contains = f.contains),
        (T.escapeSelector = f.escape);
      function b(t, e, i) {
        for (var n = [], s = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; )
          if (1 === t.nodeType) {
            if (s && T(t).is(i)) break;
            n.push(t);
          }
        return n;
      }
      function D(t, e) {
        for (var i = []; t; t = t.nextSibling)
          1 === t.nodeType && t !== e && i.push(t);
        return i;
      }
      var E = T.expr.match.needsContext;
      function k(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
      }
      var S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function N(t, i, n) {
        return _(i)
          ? T.grep(t, function (t, e) {
              return !!i.call(t, e, t) !== n;
            })
          : i.nodeType
          ? T.grep(t, function (t) {
              return (t === i) !== n;
            })
          : "string" != typeof i
          ? T.grep(t, function (t) {
              return -1 < s.call(i, t) !== n;
            })
          : T.filter(i, t, n);
      }
      (T.filter = function (t, e, i) {
        var n = e[0];
        return (
          i && (t = ":not(" + t + ")"),
          1 === e.length && 1 === n.nodeType
            ? T.find.matchesSelector(n, t)
              ? [n]
              : []
            : T.find.matches(
                t,
                T.grep(e, function (t) {
                  return 1 === t.nodeType;
                })
              )
        );
      }),
        T.fn.extend({
          find: function (t) {
            var e,
              i,
              n = this.length,
              s = this;
            if ("string" != typeof t)
              return this.pushStack(
                T(t).filter(function () {
                  for (e = 0; e < n; e++) if (T.contains(s[e], this)) return !0;
                })
              );
            for (i = this.pushStack([]), e = 0; e < n; e++) T.find(t, s[e], i);
            return 1 < n ? T.uniqueSort(i) : i;
          },
          filter: function (t) {
            return this.pushStack(N(this, t || [], !1));
          },
          not: function (t) {
            return this.pushStack(N(this, t || [], !0));
          },
          is: function (t) {
            return !!N(
              this,
              "string" == typeof t && E.test(t) ? T(t) : t || [],
              !1
            ).length;
          },
        });
      var A,
        O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((T.fn.init = function (t, e, i) {
        if (!t) return this;
        if (((i = i || A), "string" != typeof t))
          return t.nodeType
            ? ((this[0] = t), (this.length = 1), this)
            : _(t)
            ? void 0 !== i.ready
              ? i.ready(t)
              : t(T)
            : T.makeArray(t, this);
        if (
          !(n =
            "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length
              ? [null, t, null]
              : O.exec(t)) ||
          (!n[1] && e)
        )
          return (!e || e.jquery ? e || i : this.constructor(e)).find(t);
        if (n[1]) {
          if (
            ((e = e instanceof T ? e[0] : e),
            T.merge(
              this,
              T.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : C, !0)
            ),
            S.test(n[1]) && T.isPlainObject(e))
          )
            for (var n in e) _(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
          return this;
        }
        return (
          (t = C.getElementById(n[2])) && ((this[0] = t), (this.length = 1)),
          this
        );
      }).prototype = T.fn),
        (A = T(C));
      var M = /^(?:parents|prev(?:Until|All))/,
        j = { children: !0, contents: !0, next: !0, prev: !0 };
      function I(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; );
        return t;
      }
      T.fn.extend({
        has: function (t) {
          var e = T(t, this),
            i = e.length;
          return this.filter(function () {
            for (var t = 0; t < i; t++) if (T.contains(this, e[t])) return !0;
          });
        },
        closest: function (t, e) {
          var i,
            n = 0,
            s = this.length,
            r = [],
            o = "string" != typeof t && T(t);
          if (!E.test(t))
            for (; n < s; n++)
              for (i = this[n]; i && i !== e; i = i.parentNode)
                if (
                  i.nodeType < 11 &&
                  (o
                    ? -1 < o.index(i)
                    : 1 === i.nodeType && T.find.matchesSelector(i, t))
                ) {
                  r.push(i);
                  break;
                }
          return this.pushStack(1 < r.length ? T.uniqueSort(r) : r);
        },
        index: function (t) {
          return t
            ? "string" == typeof t
              ? s.call(T(t), this[0])
              : s.call(this, t.jquery ? t[0] : t)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (t, e) {
          return this.pushStack(T.uniqueSort(T.merge(this.get(), T(t, e))));
        },
        addBack: function (t) {
          return this.add(
            null == t ? this.prevObject : this.prevObject.filter(t)
          );
        },
      }),
        T.each(
          {
            parent: function (t) {
              t = t.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (t) {
              return b(t, "parentNode");
            },
            parentsUntil: function (t, e, i) {
              return b(t, "parentNode", i);
            },
            next: function (t) {
              return I(t, "nextSibling");
            },
            prev: function (t) {
              return I(t, "previousSibling");
            },
            nextAll: function (t) {
              return b(t, "nextSibling");
            },
            prevAll: function (t) {
              return b(t, "previousSibling");
            },
            nextUntil: function (t, e, i) {
              return b(t, "nextSibling", i);
            },
            prevUntil: function (t, e, i) {
              return b(t, "previousSibling", i);
            },
            siblings: function (t) {
              return D((t.parentNode || {}).firstChild, t);
            },
            children: function (t) {
              return D(t.firstChild);
            },
            contents: function (t) {
              return null != t.contentDocument && i(t.contentDocument)
                ? t.contentDocument
                : (k(t, "template") && (t = t.content || t),
                  T.merge([], t.childNodes));
            },
          },
          function (n, s) {
            T.fn[n] = function (t, e) {
              var i = T.map(this, s, t);
              return (
                "Until" !== n.slice(-5) && (e = t),
                e && "string" == typeof e && (i = T.filter(e, i)),
                1 < this.length &&
                  (j[n] || T.uniqueSort(i), M.test(n) && i.reverse()),
                this.pushStack(i)
              );
            };
          }
        );
      var L = /[^\x20\t\r\n\f]+/g;
      function P(t) {
        return t;
      }
      function F(t) {
        throw t;
      }
      function H(t, e, i, n) {
        var s;
        try {
          t && _((s = t.promise))
            ? s.call(t).done(e).fail(i)
            : t && _((s = t.then))
            ? s.call(t, e, i)
            : e.apply(void 0, [t].slice(n));
        } catch (t) {
          i.apply(void 0, [t]);
        }
      }
      (T.Callbacks = function (n) {
        var t, i;
        n =
          "string" == typeof n
            ? ((t = n),
              (i = {}),
              T.each(t.match(L) || [], function (t, e) {
                i[e] = !0;
              }),
              i)
            : T.extend({}, n);
        function s() {
          for (a = a || n.once, o = r = !0; u.length; c = -1)
            for (e = u.shift(); ++c < l.length; )
              !1 === l[c].apply(e[0], e[1]) &&
                n.stopOnFalse &&
                ((c = l.length), (e = !1));
          n.memory || (e = !1), (r = !1), a && (l = e ? [] : "");
        }
        var r,
          e,
          o,
          a,
          l = [],
          u = [],
          c = -1,
          h = {
            add: function () {
              return (
                l &&
                  (e && !r && ((c = l.length - 1), u.push(e)),
                  (function i(t) {
                    T.each(t, function (t, e) {
                      _(e)
                        ? (n.unique && h.has(e)) || l.push(e)
                        : e && e.length && "string" !== p(e) && i(e);
                    });
                  })(arguments),
                  e && !r && s()),
                this
              );
            },
            remove: function () {
              return (
                T.each(arguments, function (t, e) {
                  for (var i; -1 < (i = T.inArray(e, l, i)); )
                    l.splice(i, 1), i <= c && c--;
                }),
                this
              );
            },
            has: function (t) {
              return t ? -1 < T.inArray(t, l) : 0 < l.length;
            },
            empty: function () {
              return (l = l && []), this;
            },
            disable: function () {
              return (a = u = []), (l = e = ""), this;
            },
            disabled: function () {
              return !l;
            },
            lock: function () {
              return (a = u = []), e || r || (l = e = ""), this;
            },
            locked: function () {
              return !!a;
            },
            fireWith: function (t, e) {
              return (
                a ||
                  ((e = [t, (e = e || []).slice ? e.slice() : e]),
                  u.push(e),
                  r || s()),
                this
              );
            },
            fire: function () {
              return h.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!o;
            },
          };
        return h;
      }),
        T.extend({
          Deferred: function (t) {
            var r = [
                [
                  "notify",
                  "progress",
                  T.Callbacks("memory"),
                  T.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  T.Callbacks("once memory"),
                  T.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  T.Callbacks("once memory"),
                  T.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              s = "pending",
              o = {
                state: function () {
                  return s;
                },
                always: function () {
                  return a.done(arguments).fail(arguments), this;
                },
                catch: function (t) {
                  return o.then(null, t);
                },
                pipe: function () {
                  var s = arguments;
                  return T.Deferred(function (n) {
                    T.each(r, function (t, e) {
                      var i = _(s[e[4]]) && s[e[4]];
                      a[e[1]](function () {
                        var t = i && i.apply(this, arguments);
                        t && _(t.promise)
                          ? t
                              .promise()
                              .progress(n.notify)
                              .done(n.resolve)
                              .fail(n.reject)
                          : n[e[0] + "With"](this, i ? [t] : arguments);
                      });
                    }),
                      (s = null);
                  }).promise();
                },
                then: function (e, i, n) {
                  var l = 0;
                  function u(s, r, o, a) {
                    return function () {
                      function t() {
                        var t, e;
                        if (!(s < l)) {
                          if ((t = o.apply(i, n)) === r.promise())
                            throw new TypeError("Thenable self-resolution");
                          (e =
                            t &&
                            ("object" == typeof t || "function" == typeof t) &&
                            t.then),
                            _(e)
                              ? a
                                ? e.call(t, u(l, r, P, a), u(l, r, F, a))
                                : (l++,
                                  e.call(
                                    t,
                                    u(l, r, P, a),
                                    u(l, r, F, a),
                                    u(l, r, P, r.notifyWith)
                                  ))
                              : (o !== P && ((i = void 0), (n = [t])),
                                (a || r.resolveWith)(i, n));
                        }
                      }
                      var i = this,
                        n = arguments,
                        e = a
                          ? t
                          : function () {
                              try {
                                t();
                              } catch (t) {
                                T.Deferred.exceptionHook &&
                                  T.Deferred.exceptionHook(t, e.stackTrace),
                                  l <= s + 1 &&
                                    (o !== F && ((i = void 0), (n = [t])),
                                    r.rejectWith(i, n));
                              }
                            };
                      s
                        ? e()
                        : (T.Deferred.getStackHook &&
                            (e.stackTrace = T.Deferred.getStackHook()),
                          x.setTimeout(e));
                    };
                  }
                  return T.Deferred(function (t) {
                    r[0][3].add(u(0, t, _(n) ? n : P, t.notifyWith)),
                      r[1][3].add(u(0, t, _(e) ? e : P)),
                      r[2][3].add(u(0, t, _(i) ? i : F));
                  }).promise();
                },
                promise: function (t) {
                  return null != t ? T.extend(t, o) : o;
                },
              },
              a = {};
            return (
              T.each(r, function (t, e) {
                var i = e[2],
                  n = e[5];
                (o[e[1]] = i.add),
                  n &&
                    i.add(
                      function () {
                        s = n;
                      },
                      r[3 - t][2].disable,
                      r[3 - t][3].disable,
                      r[0][2].lock,
                      r[0][3].lock
                    ),
                  i.add(e[3].fire),
                  (a[e[0]] = function () {
                    return (
                      a[e[0] + "With"](this === a ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (a[e[0] + "With"] = i.fireWith);
              }),
              o.promise(a),
              t && t.call(a, a),
              a
            );
          },
          when: function (t) {
            function e(e) {
              return function (t) {
                (s[e] = this),
                  (r[e] = 1 < arguments.length ? a.call(arguments) : t),
                  --i || o.resolveWith(s, r);
              };
            }
            var i = arguments.length,
              n = i,
              s = Array(n),
              r = a.call(arguments),
              o = T.Deferred();
            if (
              i <= 1 &&
              (H(t, o.done(e(n)).resolve, o.reject, !i),
              "pending" === o.state() || _(r[n] && r[n].then))
            )
              return o.then();
            for (; n--; ) H(r[n], e(n), o.reject);
            return o.promise();
          },
        });
      var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (T.Deferred.exceptionHook = function (t, e) {
        x.console &&
          x.console.warn &&
          t &&
          q.test(t.name) &&
          x.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
      }),
        (T.readyException = function (t) {
          x.setTimeout(function () {
            throw t;
          });
        });
      var R = T.Deferred();
      function U() {
        C.removeEventListener("DOMContentLoaded", U),
          x.removeEventListener("load", U),
          T.ready();
      }
      (T.fn.ready = function (t) {
        return (
          R.then(t).catch(function (t) {
            T.readyException(t);
          }),
          this
        );
      }),
        T.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (t) {
            (!0 === t ? --T.readyWait : T.isReady) ||
              ((T.isReady = !0) !== t && 0 < --T.readyWait) ||
              R.resolveWith(C, [T]);
          },
        }),
        (T.ready.then = R.then),
        "complete" === C.readyState ||
        ("loading" !== C.readyState && !C.documentElement.doScroll)
          ? x.setTimeout(T.ready)
          : (C.addEventListener("DOMContentLoaded", U),
            x.addEventListener("load", U));
      var $ = function (t, e, i, n, s, r, o) {
          var a = 0,
            l = t.length,
            u = null == i;
          if ("object" === p(i))
            for (a in ((s = !0), i)) $(t, e, a, i[a], !0, r, o);
          else if (
            void 0 !== n &&
            ((s = !0),
            _(n) || (o = !0),
            u &&
              (e = o
                ? (e.call(t, n), null)
                : ((u = e),
                  function (t, e, i) {
                    return u.call(T(t), i);
                  })),
            e)
          )
            for (; a < l; a++) e(t[a], i, o ? n : n.call(t[a], a, e(t[a], i)));
          return s ? t : u ? e.call(t) : l ? e(t[0], i) : r;
        },
        W = /^-ms-/,
        z = /-([a-z])/g;
      function B(t, e) {
        return e.toUpperCase();
      }
      function V(t) {
        return t.replace(W, "ms-").replace(z, B);
      }
      function Y(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
      }
      function Q() {
        this.expando = T.expando + Q.uid++;
      }
      (Q.uid = 1),
        (Q.prototype = {
          cache: function (t) {
            var e = t[this.expando];
            return (
              e ||
                ((e = {}),
                Y(t) &&
                  (t.nodeType
                    ? (t[this.expando] = e)
                    : Object.defineProperty(t, this.expando, {
                        value: e,
                        configurable: !0,
                      }))),
              e
            );
          },
          set: function (t, e, i) {
            var n,
              s = this.cache(t);
            if ("string" == typeof e) s[V(e)] = i;
            else for (n in e) s[V(n)] = e[n];
            return s;
          },
          get: function (t, e) {
            return void 0 === e
              ? this.cache(t)
              : t[this.expando] && t[this.expando][V(e)];
          },
          access: function (t, e, i) {
            return void 0 === e || (e && "string" == typeof e && void 0 === i)
              ? this.get(t, e)
              : (this.set(t, e, i), void 0 !== i ? i : e);
          },
          remove: function (t, e) {
            var i,
              n = t[this.expando];
            if (void 0 !== n) {
              if (void 0 !== e) {
                i = (e = Array.isArray(e)
                  ? e.map(V)
                  : (e = V(e)) in n
                  ? [e]
                  : e.match(L) || []).length;
                for (; i--; ) delete n[e[i]];
              }
              (void 0 !== e && !T.isEmptyObject(n)) ||
                (t.nodeType
                  ? (t[this.expando] = void 0)
                  : delete t[this.expando]);
            }
          },
          hasData: function (t) {
            t = t[this.expando];
            return void 0 !== t && !T.isEmptyObject(t);
          },
        });
      var X = new Q(),
        K = new Q(),
        G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;
      function Z(t, e, i) {
        var n, s;
        if (void 0 === i && 1 === t.nodeType)
          if (
            ((n = "data-" + e.replace(J, "-$&").toLowerCase()),
            "string" == typeof (i = t.getAttribute(n)))
          ) {
            try {
              i =
                "true" === (s = i) ||
                ("false" !== s &&
                  ("null" === s
                    ? null
                    : s === +s + ""
                    ? +s
                    : G.test(s)
                    ? JSON.parse(s)
                    : s));
            } catch (t) {}
            K.set(t, e, i);
          } else i = void 0;
        return i;
      }
      T.extend({
        hasData: function (t) {
          return K.hasData(t) || X.hasData(t);
        },
        data: function (t, e, i) {
          return K.access(t, e, i);
        },
        removeData: function (t, e) {
          K.remove(t, e);
        },
        _data: function (t, e, i) {
          return X.access(t, e, i);
        },
        _removeData: function (t, e) {
          X.remove(t, e);
        },
      }),
        T.fn.extend({
          data: function (i, t) {
            var e,
              n,
              s,
              r = this[0],
              o = r && r.attributes;
            if (void 0 !== i)
              return "object" == typeof i
                ? this.each(function () {
                    K.set(this, i);
                  })
                : $(
                    this,
                    function (t) {
                      var e;
                      return r && void 0 === t
                        ? void 0 !== (e = K.get(r, i)) ||
                          void 0 !== (e = Z(r, i))
                          ? e
                          : void 0
                        : void this.each(function () {
                            K.set(this, i, t);
                          });
                    },
                    null,
                    t,
                    1 < arguments.length,
                    null,
                    !0
                  );
            if (
              this.length &&
              ((s = K.get(r)), 1 === r.nodeType && !X.get(r, "hasDataAttrs"))
            ) {
              for (e = o.length; e--; )
                o[e] &&
                  0 === (n = o[e].name).indexOf("data-") &&
                  ((n = V(n.slice(5))), Z(r, n, s[n]));
              X.set(r, "hasDataAttrs", !0);
            }
            return s;
          },
          removeData: function (t) {
            return this.each(function () {
              K.remove(this, t);
            });
          },
        }),
        T.extend({
          queue: function (t, e, i) {
            var n;
            if (t)
              return (
                (e = (e || "fx") + "queue"),
                (n = X.get(t, e)),
                i &&
                  (!n || Array.isArray(i)
                    ? (n = X.access(t, e, T.makeArray(i)))
                    : n.push(i)),
                n || []
              );
          },
          dequeue: function (t, e) {
            e = e || "fx";
            var i = T.queue(t, e),
              n = i.length,
              s = i.shift(),
              r = T._queueHooks(t, e);
            "inprogress" === s && ((s = i.shift()), n--),
              s &&
                ("fx" === e && i.unshift("inprogress"),
                delete r.stop,
                s.call(
                  t,
                  function () {
                    T.dequeue(t, e);
                  },
                  r
                )),
              !n && r && r.empty.fire();
          },
          _queueHooks: function (t, e) {
            var i = e + "queueHooks";
            return (
              X.get(t, i) ||
              X.access(t, i, {
                empty: T.Callbacks("once memory").add(function () {
                  X.remove(t, [e + "queue", i]);
                }),
              })
            );
          },
        }),
        T.fn.extend({
          queue: function (e, i) {
            var t = 2;
            return (
              "string" != typeof e && ((i = e), (e = "fx"), t--),
              arguments.length < t
                ? T.queue(this[0], e)
                : void 0 === i
                ? this
                : this.each(function () {
                    var t = T.queue(this, e, i);
                    T._queueHooks(this, e),
                      "fx" === e && "inprogress" !== t[0] && T.dequeue(this, e);
                  })
            );
          },
          dequeue: function (t) {
            return this.each(function () {
              T.dequeue(this, t);
            });
          },
          clearQueue: function (t) {
            return this.queue(t || "fx", []);
          },
          promise: function (t, e) {
            function i() {
              --s || r.resolveWith(o, [o]);
            }
            var n,
              s = 1,
              r = T.Deferred(),
              o = this,
              a = this.length;
            for (
              "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
              a--;

            )
              (n = X.get(o[a], t + "queueHooks")) &&
                n.empty &&
                (s++, n.empty.add(i));
            return i(), r.promise(e);
          },
        });
      var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
        it = ["Top", "Right", "Bottom", "Left"],
        nt = C.documentElement,
        st = function (t) {
          return T.contains(t.ownerDocument, t);
        },
        rt = { composed: !0 };
      nt.getRootNode &&
        (st = function (t) {
          return (
            T.contains(t.ownerDocument, t) ||
            t.getRootNode(rt) === t.ownerDocument
          );
        });
      var ot = function (t, e) {
        return (
          "none" === (t = e || t).style.display ||
          ("" === t.style.display && st(t) && "none" === T.css(t, "display"))
        );
      };
      function at(t, e, i, n) {
        var s,
          r,
          o = 20,
          a = n
            ? function () {
                return n.cur();
              }
            : function () {
                return T.css(t, e, "");
              },
          l = a(),
          u = (i && i[3]) || (T.cssNumber[e] ? "" : "px"),
          c =
            t.nodeType &&
            (T.cssNumber[e] || ("px" !== u && +l)) &&
            et.exec(T.css(t, e));
        if (c && c[3] !== u) {
          for (l /= 2, u = u || c[3], c = +l || 1; o--; )
            T.style(t, e, c + u),
              (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (o = 0),
              (c /= r);
          (c *= 2), T.style(t, e, c + u), (i = i || []);
        }
        return (
          i &&
            ((c = +c || +l || 0),
            (s = i[1] ? c + (i[1] + 1) * i[2] : +i[2]),
            n && ((n.unit = u), (n.start = c), (n.end = s))),
          s
        );
      }
      var lt = {};
      function ut(t, e) {
        for (var i, n, s, r, o, a = [], l = 0, u = t.length; l < u; l++)
          (n = t[l]).style &&
            ((i = n.style.display),
            e
              ? ("none" === i &&
                  ((a[l] = X.get(n, "display") || null),
                  a[l] || (n.style.display = "")),
                "" === n.style.display &&
                  ot(n) &&
                  (a[l] =
                    ((o = r = void 0),
                    (r = (s = n).ownerDocument),
                    (o = s.nodeName),
                    (s = lt[o]) ||
                      ((r = r.body.appendChild(r.createElement(o))),
                      (s = T.css(r, "display")),
                      r.parentNode.removeChild(r),
                      "none" === s && (s = "block"),
                      (lt[o] = s)))))
              : "none" !== i && ((a[l] = "none"), X.set(n, "display", i)));
        for (l = 0; l < u; l++) null != a[l] && (t[l].style.display = a[l]);
        return t;
      }
      T.fn.extend({
        show: function () {
          return ut(this, !0);
        },
        hide: function () {
          return ut(this);
        },
        toggle: function (t) {
          return "boolean" == typeof t
            ? t
              ? this.show()
              : this.hide()
            : this.each(function () {
                ot(this) ? T(this).show() : T(this).hide();
              });
        },
      });
      var ct = /^(?:checkbox|radio)$/i,
        ht = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        dt = /^$|^module$|\/(?:java|ecma)script/i;
      (h = C.createDocumentFragment().appendChild(C.createElement("div"))),
        (f = C.createElement("input")).setAttribute("type", "radio"),
        f.setAttribute("checked", "checked"),
        f.setAttribute("name", "t"),
        h.appendChild(f),
        (y.checkClone = h.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (h.innerHTML = "<textarea>x</textarea>"),
        (y.noCloneChecked = !!h.cloneNode(!0).lastChild.defaultValue),
        (h.innerHTML = "<option></option>"),
        (y.option = !!h.lastChild);
      var ft = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
      function pt(t, e) {
        var i =
          void 0 !== t.getElementsByTagName
            ? t.getElementsByTagName(e || "*")
            : void 0 !== t.querySelectorAll
            ? t.querySelectorAll(e || "*")
            : [];
        return void 0 === e || (e && k(t, e)) ? T.merge([t], i) : i;
      }
      function gt(t, e) {
        for (var i = 0, n = t.length; i < n; i++)
          X.set(t[i], "globalEval", !e || X.get(e[i], "globalEval"));
      }
      (ft.tbody = ft.tfoot = ft.colgroup = ft.caption = ft.thead),
        (ft.th = ft.td),
        y.option ||
          (ft.optgroup = ft.option = [
            1,
            "<select multiple='multiple'>",
            "</select>",
          ]);
      var mt = /<|&#?\w+;/;
      function vt(t, e, i, n, s) {
        for (
          var r,
            o,
            a,
            l,
            u,
            c = e.createDocumentFragment(),
            h = [],
            d = 0,
            f = t.length;
          d < f;
          d++
        )
          if ((r = t[d]) || 0 === r)
            if ("object" === p(r)) T.merge(h, r.nodeType ? [r] : r);
            else if (mt.test(r)) {
              for (
                o = o || c.appendChild(e.createElement("div")),
                  a = (ht.exec(r) || ["", ""])[1].toLowerCase(),
                  a = ft[a] || ft._default,
                  o.innerHTML = a[1] + T.htmlPrefilter(r) + a[2],
                  u = a[0];
                u--;

              )
                o = o.lastChild;
              T.merge(h, o.childNodes), ((o = c.firstChild).textContent = "");
            } else h.push(e.createTextNode(r));
        for (c.textContent = "", d = 0; (r = h[d++]); )
          if (n && -1 < T.inArray(r, n)) s && s.push(r);
          else if (
            ((l = st(r)), (o = pt(c.appendChild(r), "script")), l && gt(o), i)
          )
            for (u = 0; (r = o[u++]); ) dt.test(r.type || "") && i.push(r);
        return c;
      }
      var yt = /^key/,
        _t = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        wt = /^([^.]*)(?:\.(.+)|)/;
      function bt() {
        return !0;
      }
      function xt() {
        return !1;
      }
      function Ct(t, e) {
        return (
          (t ===
            (function () {
              try {
                return C.activeElement;
              } catch (t) {}
            })()) ==
          ("focus" === e)
        );
      }
      function Tt(t, e, i, n, s, r) {
        var o, a;
        if ("object" == typeof e) {
          for (a in ("string" != typeof i && ((n = n || i), (i = void 0)), e))
            Tt(t, a, i, n, e[a], r);
          return t;
        }
        if (
          (null == n && null == s
            ? ((s = i), (n = i = void 0))
            : null == s &&
              ("string" == typeof i
                ? ((s = n), (n = void 0))
                : ((s = n), (n = i), (i = void 0))),
          !1 === s)
        )
          s = xt;
        else if (!s) return t;
        return (
          1 === r &&
            ((o = s),
            ((s = function (t) {
              return T().off(t), o.apply(this, arguments);
            }).guid = o.guid || (o.guid = T.guid++))),
          t.each(function () {
            T.event.add(this, e, s, n, i);
          })
        );
      }
      function Dt(t, s, r) {
        r
          ? (X.set(t, s, !1),
            T.event.add(t, s, {
              namespace: !1,
              handler: function (t) {
                var e,
                  i,
                  n = X.get(this, s);
                if (1 & t.isTrigger && this[s]) {
                  if (n.length)
                    (T.event.special[s] || {}).delegateType &&
                      t.stopPropagation();
                  else if (
                    ((n = a.call(arguments)),
                    X.set(this, s, n),
                    (e = r(this, s)),
                    this[s](),
                    n !== (i = X.get(this, s)) || e
                      ? X.set(this, s, !1)
                      : (i = {}),
                    n !== i)
                  )
                    return (
                      t.stopImmediatePropagation(), t.preventDefault(), i.value
                    );
                } else
                  n.length &&
                    (X.set(this, s, {
                      value: T.event.trigger(
                        T.extend(n[0], T.Event.prototype),
                        n.slice(1),
                        this
                      ),
                    }),
                    t.stopImmediatePropagation());
              },
            }))
          : void 0 === X.get(t, s) && T.event.add(t, s, bt);
      }
      (T.event = {
        global: {},
        add: function (e, t, i, n, s) {
          var r,
            o,
            a,
            l,
            u,
            c,
            h,
            d,
            f,
            p = X.get(e);
          if (Y(e))
            for (
              i.handler && ((i = (r = i).handler), (s = r.selector)),
                s && T.find.matchesSelector(nt, s),
                i.guid || (i.guid = T.guid++),
                (a = p.events) || (a = p.events = Object.create(null)),
                (o = p.handle) ||
                  (o = p.handle = function (t) {
                    return void 0 !== T && T.event.triggered !== t.type
                      ? T.event.dispatch.apply(e, arguments)
                      : void 0;
                  }),
                l = (t = (t || "").match(L) || [""]).length;
              l--;

            )
              (h = f = (u = wt.exec(t[l]) || [])[1]),
                (d = (u[2] || "").split(".").sort()),
                h &&
                  ((c = T.event.special[h] || {}),
                  (h = (s ? c.delegateType : c.bindType) || h),
                  (c = T.event.special[h] || {}),
                  (u = T.extend(
                    {
                      type: h,
                      origType: f,
                      data: n,
                      handler: i,
                      guid: i.guid,
                      selector: s,
                      needsContext: s && T.expr.match.needsContext.test(s),
                      namespace: d.join("."),
                    },
                    r
                  )),
                  (f = a[h]) ||
                    (((f = a[h] = []).delegateCount = 0),
                    (c.setup && !1 !== c.setup.call(e, n, d, o)) ||
                      (e.addEventListener && e.addEventListener(h, o))),
                  c.add &&
                    (c.add.call(e, u),
                    u.handler.guid || (u.handler.guid = i.guid)),
                  s ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                  (T.event.global[h] = !0));
        },
        remove: function (t, e, i, n, s) {
          var r,
            o,
            a,
            l,
            u,
            c,
            h,
            d,
            f,
            p,
            g,
            m = X.hasData(t) && X.get(t);
          if (m && (l = m.events)) {
            for (u = (e = (e || "").match(L) || [""]).length; u--; )
              if (
                ((f = g = (a = wt.exec(e[u]) || [])[1]),
                (p = (a[2] || "").split(".").sort()),
                f)
              ) {
                for (
                  h = T.event.special[f] || {},
                    d = l[(f = (n ? h.delegateType : h.bindType) || f)] || [],
                    a =
                      a[2] &&
                      new RegExp(
                        "(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    o = r = d.length;
                  r--;

                )
                  (c = d[r]),
                    (!s && g !== c.origType) ||
                      (i && i.guid !== c.guid) ||
                      (a && !a.test(c.namespace)) ||
                      (n && n !== c.selector && ("**" !== n || !c.selector)) ||
                      (d.splice(r, 1),
                      c.selector && d.delegateCount--,
                      h.remove && h.remove.call(t, c));
                o &&
                  !d.length &&
                  ((h.teardown && !1 !== h.teardown.call(t, p, m.handle)) ||
                    T.removeEvent(t, f, m.handle),
                  delete l[f]);
              } else for (f in l) T.event.remove(t, f + e[u], i, n, !0);
            T.isEmptyObject(l) && X.remove(t, "handle events");
          }
        },
        dispatch: function (t) {
          var e,
            i,
            n,
            s,
            r,
            o = new Array(arguments.length),
            a = T.event.fix(t),
            l = (X.get(this, "events") || Object.create(null))[a.type] || [],
            t = T.event.special[a.type] || {};
          for (o[0] = a, e = 1; e < arguments.length; e++) o[e] = arguments[e];
          if (
            ((a.delegateTarget = this),
            !t.preDispatch || !1 !== t.preDispatch.call(this, a))
          ) {
            for (
              r = T.event.handlers.call(this, a, l), e = 0;
              (n = r[e++]) && !a.isPropagationStopped();

            )
              for (
                a.currentTarget = n.elem, i = 0;
                (s = n.handlers[i++]) && !a.isImmediatePropagationStopped();

              )
                (a.rnamespace &&
                  !1 !== s.namespace &&
                  !a.rnamespace.test(s.namespace)) ||
                  ((a.handleObj = s),
                  (a.data = s.data),
                  void 0 !==
                    (s = (
                      (T.event.special[s.origType] || {}).handle || s.handler
                    ).apply(n.elem, o)) &&
                    !1 === (a.result = s) &&
                    (a.preventDefault(), a.stopPropagation()));
            return t.postDispatch && t.postDispatch.call(this, a), a.result;
          }
        },
        handlers: function (t, e) {
          var i,
            n,
            s,
            r,
            o,
            a = [],
            l = e.delegateCount,
            u = t.target;
          if (l && u.nodeType && !("click" === t.type && 1 <= t.button))
            for (; u !== this; u = u.parentNode || this)
              if (
                1 === u.nodeType &&
                ("click" !== t.type || !0 !== u.disabled)
              ) {
                for (r = [], o = {}, i = 0; i < l; i++)
                  void 0 === o[(s = (n = e[i]).selector + " ")] &&
                    (o[s] = n.needsContext
                      ? -1 < T(s, this).index(u)
                      : T.find(s, this, null, [u]).length),
                    o[s] && r.push(n);
                r.length && a.push({ elem: u, handlers: r });
              }
          return (
            (u = this),
            l < e.length && a.push({ elem: u, handlers: e.slice(l) }),
            a
          );
        },
        addProp: function (e, t) {
          Object.defineProperty(T.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: _(t)
              ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function (t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              });
            },
          });
        },
        fix: function (t) {
          return t[T.expando] ? t : new T.Event(t);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (t) {
              t = this || t;
              return (
                ct.test(t.type) &&
                  t.click &&
                  k(t, "input") &&
                  Dt(t, "click", bt),
                !1
              );
            },
            trigger: function (t) {
              t = this || t;
              return (
                ct.test(t.type) && t.click && k(t, "input") && Dt(t, "click"),
                !0
              );
            },
            _default: function (t) {
              t = t.target;
              return (
                (ct.test(t.type) &&
                  t.click &&
                  k(t, "input") &&
                  X.get(t, "click")) ||
                k(t, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (t) {
              void 0 !== t.result &&
                t.originalEvent &&
                (t.originalEvent.returnValue = t.result);
            },
          },
        },
      }),
        (T.removeEvent = function (t, e, i) {
          t.removeEventListener && t.removeEventListener(e, i);
        }),
        (T.Event = function (t, e) {
          if (!(this instanceof T.Event)) return new T.Event(t, e);
          t && t.type
            ? ((this.originalEvent = t),
              (this.type = t.type),
              (this.isDefaultPrevented =
                t.defaultPrevented ||
                (void 0 === t.defaultPrevented && !1 === t.returnValue)
                  ? bt
                  : xt),
              (this.target =
                t.target && 3 === t.target.nodeType
                  ? t.target.parentNode
                  : t.target),
              (this.currentTarget = t.currentTarget),
              (this.relatedTarget = t.relatedTarget))
            : (this.type = t),
            e && T.extend(this, e),
            (this.timeStamp = (t && t.timeStamp) || Date.now()),
            (this[T.expando] = !0);
        }),
        (T.Event.prototype = {
          constructor: T.Event,
          isDefaultPrevented: xt,
          isPropagationStopped: xt,
          isImmediatePropagationStopped: xt,
          isSimulated: !1,
          preventDefault: function () {
            var t = this.originalEvent;
            (this.isDefaultPrevented = bt),
              t && !this.isSimulated && t.preventDefault();
          },
          stopPropagation: function () {
            var t = this.originalEvent;
            (this.isPropagationStopped = bt),
              t && !this.isSimulated && t.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var t = this.originalEvent;
            (this.isImmediatePropagationStopped = bt),
              t && !this.isSimulated && t.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        T.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (t) {
              var e = t.button;
              return null == t.which && yt.test(t.type)
                ? null != t.charCode
                  ? t.charCode
                  : t.keyCode
                : !t.which && void 0 !== e && _t.test(t.type)
                ? 1 & e
                  ? 1
                  : 2 & e
                  ? 3
                  : 4 & e
                  ? 2
                  : 0
                : t.which;
            },
          },
          T.event.addProp
        ),
        T.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
          T.event.special[t] = {
            setup: function () {
              return Dt(this, t, Ct), !1;
            },
            trigger: function () {
              return Dt(this, t), !0;
            },
            delegateType: e,
          };
        }),
        T.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (t, s) {
            T.event.special[t] = {
              delegateType: s,
              bindType: s,
              handle: function (t) {
                var e,
                  i = t.relatedTarget,
                  n = t.handleObj;
                return (
                  (i && (i === this || T.contains(this, i))) ||
                    ((t.type = n.origType),
                    (e = n.handler.apply(this, arguments)),
                    (t.type = s)),
                  e
                );
              },
            };
          }
        ),
        T.fn.extend({
          on: function (t, e, i, n) {
            return Tt(this, t, e, i, n);
          },
          one: function (t, e, i, n) {
            return Tt(this, t, e, i, n, 1);
          },
          off: function (t, e, i) {
            var n, s;
            if (t && t.preventDefault && t.handleObj)
              return (
                (n = t.handleObj),
                T(t.delegateTarget).off(
                  n.namespace ? n.origType + "." + n.namespace : n.origType,
                  n.selector,
                  n.handler
                ),
                this
              );
            if ("object" != typeof t)
              return (
                (!1 !== e && "function" != typeof e) || ((i = e), (e = void 0)),
                !1 === i && (i = xt),
                this.each(function () {
                  T.event.remove(this, t, i, e);
                })
              );
            for (s in t) this.off(s, e, t[s]);
            return this;
          },
        });
      var Et = /<script|<style|<link/i,
        kt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function Nt(t, e) {
        return (
          (k(t, "table") &&
            k(11 !== e.nodeType ? e : e.firstChild, "tr") &&
            T(t).children("tbody")[0]) ||
          t
        );
      }
      function At(t) {
        return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
      }
      function Ot(t) {
        return (
          "true/" === (t.type || "").slice(0, 5)
            ? (t.type = t.type.slice(5))
            : t.removeAttribute("type"),
          t
        );
      }
      function Mt(t, e) {
        var i, n, s, r;
        if (1 === e.nodeType) {
          if (X.hasData(t) && (r = X.get(t).events))
            for (s in (X.remove(e, "handle events"), r))
              for (i = 0, n = r[s].length; i < n; i++)
                T.event.add(e, s, r[s][i]);
          K.hasData(t) &&
            ((t = K.access(t)), (t = T.extend({}, t)), K.set(e, t));
        }
      }
      function jt(i, n, s, r) {
        n = m(n);
        var t,
          e,
          o,
          a,
          l,
          u,
          c = 0,
          h = i.length,
          d = h - 1,
          f = n[0],
          p = _(f);
        if (p || (1 < h && "string" == typeof f && !y.checkClone && kt.test(f)))
          return i.each(function (t) {
            var e = i.eq(t);
            p && (n[0] = f.call(this, t, e.html())), jt(e, n, s, r);
          });
        if (
          h &&
          ((e = (t = vt(n, i[0].ownerDocument, !1, i, r)).firstChild),
          1 === t.childNodes.length && (t = e),
          e || r)
        ) {
          for (a = (o = T.map(pt(t, "script"), At)).length; c < h; c++)
            (l = t),
              c !== d &&
                ((l = T.clone(l, !0, !0)), a && T.merge(o, pt(l, "script"))),
              s.call(i[c], l, c);
          if (a)
            for (
              u = o[o.length - 1].ownerDocument, T.map(o, Ot), c = 0;
              c < a;
              c++
            )
              (l = o[c]),
                dt.test(l.type || "") &&
                  !X.access(l, "globalEval") &&
                  T.contains(u, l) &&
                  (l.src && "module" !== (l.type || "").toLowerCase()
                    ? T._evalUrl &&
                      !l.noModule &&
                      T._evalUrl(
                        l.src,
                        { nonce: l.nonce || l.getAttribute("nonce") },
                        u
                      )
                    : w(l.textContent.replace(St, ""), l, u));
        }
        return i;
      }
      function It(t, e, i) {
        for (var n, s = e ? T.filter(e, t) : t, r = 0; null != (n = s[r]); r++)
          i || 1 !== n.nodeType || T.cleanData(pt(n)),
            n.parentNode &&
              (i && st(n) && gt(pt(n, "script")), n.parentNode.removeChild(n));
        return t;
      }
      T.extend({
        htmlPrefilter: function (t) {
          return t;
        },
        clone: function (t, e, i) {
          var n,
            s,
            r,
            o,
            a,
            l,
            u,
            c = t.cloneNode(!0),
            h = st(t);
          if (
            !(
              y.noCloneChecked ||
              (1 !== t.nodeType && 11 !== t.nodeType) ||
              T.isXMLDoc(t)
            )
          )
            for (o = pt(c), n = 0, s = (r = pt(t)).length; n < s; n++)
              (a = r[n]),
                (l = o[n]),
                (u = void 0),
                "input" === (u = l.nodeName.toLowerCase()) && ct.test(a.type)
                  ? (l.checked = a.checked)
                  : ("input" !== u && "textarea" !== u) ||
                    (l.defaultValue = a.defaultValue);
          if (e)
            if (i)
              for (
                r = r || pt(t), o = o || pt(c), n = 0, s = r.length;
                n < s;
                n++
              )
                Mt(r[n], o[n]);
            else Mt(t, c);
          return (
            0 < (o = pt(c, "script")).length && gt(o, !h && pt(t, "script")), c
          );
        },
        cleanData: function (t) {
          for (
            var e, i, n, s = T.event.special, r = 0;
            void 0 !== (i = t[r]);
            r++
          )
            if (Y(i)) {
              if ((e = i[X.expando])) {
                if (e.events)
                  for (n in e.events)
                    s[n] ? T.event.remove(i, n) : T.removeEvent(i, n, e.handle);
                i[X.expando] = void 0;
              }
              i[K.expando] && (i[K.expando] = void 0);
            }
        },
      }),
        T.fn.extend({
          detach: function (t) {
            return It(this, t, !0);
          },
          remove: function (t) {
            return It(this, t);
          },
          text: function (t) {
            return $(
              this,
              function (t) {
                return void 0 === t
                  ? T.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = t);
                    });
              },
              null,
              t,
              arguments.length
            );
          },
          append: function () {
            return jt(this, arguments, function (t) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                Nt(this, t).appendChild(t);
            });
          },
          prepend: function () {
            return jt(this, arguments, function (t) {
              var e;
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                (e = Nt(this, t)).insertBefore(t, e.firstChild);
            });
          },
          before: function () {
            return jt(this, arguments, function (t) {
              this.parentNode && this.parentNode.insertBefore(t, this);
            });
          },
          after: function () {
            return jt(this, arguments, function (t) {
              this.parentNode &&
                this.parentNode.insertBefore(t, this.nextSibling);
            });
          },
          empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++)
              1 === t.nodeType &&
                (T.cleanData(pt(t, !1)), (t.textContent = ""));
            return this;
          },
          clone: function (t, e) {
            return (
              (t = null != t && t),
              (e = null == e ? t : e),
              this.map(function () {
                return T.clone(this, t, e);
              })
            );
          },
          html: function (t) {
            return $(
              this,
              function (t) {
                var e = this[0] || {},
                  i = 0,
                  n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if (
                  "string" == typeof t &&
                  !Et.test(t) &&
                  !ft[(ht.exec(t) || ["", ""])[1].toLowerCase()]
                ) {
                  t = T.htmlPrefilter(t);
                  try {
                    for (; i < n; i++)
                      1 === (e = this[i] || {}).nodeType &&
                        (T.cleanData(pt(e, !1)), (e.innerHTML = t));
                    e = 0;
                  } catch (t) {}
                }
                e && this.empty().append(t);
              },
              null,
              t,
              arguments.length
            );
          },
          replaceWith: function () {
            var i = [];
            return jt(
              this,
              arguments,
              function (t) {
                var e = this.parentNode;
                T.inArray(this, i) < 0 &&
                  (T.cleanData(pt(this)), e && e.replaceChild(t, this));
              },
              i
            );
          },
        }),
        T.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (t, o) {
            T.fn[t] = function (t) {
              for (
                var e, i = [], n = T(t), s = n.length - 1, r = 0;
                r <= s;
                r++
              )
                (e = r === s ? this : this.clone(!0)),
                  T(n[r])[o](e),
                  l.apply(i, e.get());
              return this.pushStack(i);
            };
          }
        );
      function Lt(t, e, i) {
        var n,
          s = {};
        for (n in e) (s[n] = t.style[n]), (t.style[n] = e[n]);
        for (n in ((i = i.call(t)), e)) t.style[n] = s[n];
        return i;
      }
      var Pt,
        Ft,
        Ht,
        qt,
        Rt,
        Ut,
        $t,
        Wt,
        zt = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
        Bt = function (t) {
          var e = t.ownerDocument.defaultView;
          return (e && e.opener) || (e = x), e.getComputedStyle(t);
        },
        Vt = new RegExp(it.join("|"), "i");
      function Yt() {
        var t;
        Wt &&
          (($t.style.cssText =
            "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (Wt.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          nt.appendChild($t).appendChild(Wt),
          (t = x.getComputedStyle(Wt)),
          (Pt = "1%" !== t.top),
          (Ut = 12 === Qt(t.marginLeft)),
          (Wt.style.right = "60%"),
          (qt = 36 === Qt(t.right)),
          (Ft = 36 === Qt(t.width)),
          (Wt.style.position = "absolute"),
          (Ht = 12 === Qt(Wt.offsetWidth / 3)),
          nt.removeChild($t),
          (Wt = null));
      }
      function Qt(t) {
        return Math.round(parseFloat(t));
      }
      function Xt(t, e, i) {
        var n,
          s,
          r = t.style;
        return (
          (i = i || Bt(t)) &&
            ("" !== (s = i.getPropertyValue(e) || i[e]) ||
              st(t) ||
              (s = T.style(t, e)),
            !y.pixelBoxStyles() &&
              zt.test(s) &&
              Vt.test(e) &&
              ((n = r.width),
              (t = r.minWidth),
              (e = r.maxWidth),
              (r.minWidth = r.maxWidth = r.width = s),
              (s = i.width),
              (r.width = n),
              (r.minWidth = t),
              (r.maxWidth = e))),
          void 0 !== s ? s + "" : s
        );
      }
      function Kt(t, e) {
        return {
          get: function () {
            if (!t()) return (this.get = e).apply(this, arguments);
            delete this.get;
          },
        };
      }
      ($t = C.createElement("div")),
        (Wt = C.createElement("div")).style &&
          ((Wt.style.backgroundClip = "content-box"),
          (Wt.cloneNode(!0).style.backgroundClip = ""),
          (y.clearCloneStyle = "content-box" === Wt.style.backgroundClip),
          T.extend(y, {
            boxSizingReliable: function () {
              return Yt(), Ft;
            },
            pixelBoxStyles: function () {
              return Yt(), qt;
            },
            pixelPosition: function () {
              return Yt(), Pt;
            },
            reliableMarginLeft: function () {
              return Yt(), Ut;
            },
            scrollboxSize: function () {
              return Yt(), Ht;
            },
            reliableTrDimensions: function () {
              var t, e, i;
              return (
                null == Rt &&
                  ((t = C.createElement("table")),
                  (i = C.createElement("tr")),
                  (e = C.createElement("div")),
                  (t.style.cssText = "position:absolute;left:-11111px"),
                  (i.style.height = "1px"),
                  (e.style.height = "9px"),
                  nt.appendChild(t).appendChild(i).appendChild(e),
                  (i = x.getComputedStyle(i)),
                  (Rt = 3 < parseInt(i.height)),
                  nt.removeChild(t)),
                Rt
              );
            },
          }));
      var Gt = ["Webkit", "Moz", "ms"],
        Jt = C.createElement("div").style,
        Zt = {};
      function te(t) {
        var e = T.cssProps[t] || Zt[t];
        return (
          e ||
          (t in Jt
            ? t
            : (Zt[t] =
                (function (t) {
                  for (
                    var e = t[0].toUpperCase() + t.slice(1), i = Gt.length;
                    i--;

                  )
                    if ((t = Gt[i] + e) in Jt) return t;
                })(t) || t))
        );
      }
      var ee = /^(none|table(?!-c[ea]).+)/,
        ie = /^--/,
        ne = { position: "absolute", visibility: "hidden", display: "block" },
        se = { letterSpacing: "0", fontWeight: "400" };
      function re(t, e, i) {
        var n = et.exec(e);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e;
      }
      function oe(t, e, i, n, s, r) {
        var o = "width" === e ? 1 : 0,
          a = 0,
          l = 0;
        if (i === (n ? "border" : "content")) return 0;
        for (; o < 4; o += 2)
          "margin" === i && (l += T.css(t, i + it[o], !0, s)),
            n
              ? ("content" === i && (l -= T.css(t, "padding" + it[o], !0, s)),
                "margin" !== i &&
                  (l -= T.css(t, "border" + it[o] + "Width", !0, s)))
              : ((l += T.css(t, "padding" + it[o], !0, s)),
                "padding" !== i
                  ? (l += T.css(t, "border" + it[o] + "Width", !0, s))
                  : (a += T.css(t, "border" + it[o] + "Width", !0, s)));
        return (
          !n &&
            0 <= r &&
            (l +=
              Math.max(
                0,
                Math.ceil(
                  t["offset" + e[0].toUpperCase() + e.slice(1)] -
                    r -
                    l -
                    a -
                    0.5
                )
              ) || 0),
          l
        );
      }
      function ae(t, e, i) {
        var n = Bt(t),
          s =
            (!y.boxSizingReliable() || i) &&
            "border-box" === T.css(t, "boxSizing", !1, n),
          r = s,
          o = Xt(t, e, n),
          a = "offset" + e[0].toUpperCase() + e.slice(1);
        if (zt.test(o)) {
          if (!i) return o;
          o = "auto";
        }
        return (
          ((!y.boxSizingReliable() && s) ||
            (!y.reliableTrDimensions() && k(t, "tr")) ||
            "auto" === o ||
            (!parseFloat(o) && "inline" === T.css(t, "display", !1, n))) &&
            t.getClientRects().length &&
            ((s = "border-box" === T.css(t, "boxSizing", !1, n)),
            (r = a in t) && (o = t[a])),
          (o = parseFloat(o) || 0) +
            oe(t, e, i || (s ? "border" : "content"), r, n, o) +
            "px"
        );
      }
      function le(t, e, i, n, s) {
        return new le.prototype.init(t, e, i, n, s);
      }
      T.extend({
        cssHooks: {
          opacity: {
            get: function (t, e) {
              if (e) {
                t = Xt(t, "opacity");
                return "" === t ? "1" : t;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (t, e, i, n) {
          if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
            var s,
              r,
              o,
              a = V(e),
              l = ie.test(e),
              u = t.style;
            if (
              (l || (e = te(a)),
              (o = T.cssHooks[e] || T.cssHooks[a]),
              void 0 === i)
            )
              return o && "get" in o && void 0 !== (s = o.get(t, !1, n))
                ? s
                : u[e];
            "string" === (r = typeof i) &&
              (s = et.exec(i)) &&
              s[1] &&
              ((i = at(t, e, s)), (r = "number")),
              null != i &&
                i == i &&
                ("number" !== r ||
                  l ||
                  (i += (s && s[3]) || (T.cssNumber[a] ? "" : "px")),
                y.clearCloneStyle ||
                  "" !== i ||
                  0 !== e.indexOf("background") ||
                  (u[e] = "inherit"),
                (o && "set" in o && void 0 === (i = o.set(t, i, n))) ||
                  (l ? u.setProperty(e, i) : (u[e] = i)));
          }
        },
        css: function (t, e, i, n) {
          var s,
            r = V(e);
          return (
            ie.test(e) || (e = te(r)),
            (r = T.cssHooks[e] || T.cssHooks[r]) &&
              "get" in r &&
              (s = r.get(t, !0, i)),
            void 0 === s && (s = Xt(t, e, n)),
            "normal" === s && e in se && (s = se[e]),
            "" === i || i
              ? ((e = parseFloat(s)), !0 === i || isFinite(e) ? e || 0 : s)
              : s
          );
        },
      }),
        T.each(["height", "width"], function (t, a) {
          T.cssHooks[a] = {
            get: function (t, e, i) {
              if (e)
                return !ee.test(T.css(t, "display")) ||
                  (t.getClientRects().length && t.getBoundingClientRect().width)
                  ? ae(t, a, i)
                  : Lt(t, ne, function () {
                      return ae(t, a, i);
                    });
            },
            set: function (t, e, i) {
              var n,
                s = Bt(t),
                r = !y.scrollboxSize() && "absolute" === s.position,
                o = (r || i) && "border-box" === T.css(t, "boxSizing", !1, s),
                i = i ? oe(t, a, i, o, s) : 0;
              return (
                o &&
                  r &&
                  (i -= Math.ceil(
                    t["offset" + a[0].toUpperCase() + a.slice(1)] -
                      parseFloat(s[a]) -
                      oe(t, a, "border", !1, s) -
                      0.5
                  )),
                i &&
                  (n = et.exec(e)) &&
                  "px" !== (n[3] || "px") &&
                  ((t.style[a] = e), (e = T.css(t, a))),
                re(0, e, i)
              );
            },
          };
        }),
        (T.cssHooks.marginLeft = Kt(y.reliableMarginLeft, function (t, e) {
          if (e)
            return (
              (parseFloat(Xt(t, "marginLeft")) ||
                t.getBoundingClientRect().left -
                  Lt(t, { marginLeft: 0 }, function () {
                    return t.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        T.each({ margin: "", padding: "", border: "Width" }, function (s, r) {
          (T.cssHooks[s + r] = {
            expand: function (t) {
              for (
                var e = 0,
                  i = {},
                  n = "string" == typeof t ? t.split(" ") : [t];
                e < 4;
                e++
              )
                i[s + it[e] + r] = n[e] || n[e - 2] || n[0];
              return i;
            },
          }),
            "margin" !== s && (T.cssHooks[s + r].set = re);
        }),
        T.fn.extend({
          css: function (t, e) {
            return $(
              this,
              function (t, e, i) {
                var n,
                  s,
                  r = {},
                  o = 0;
                if (Array.isArray(e)) {
                  for (n = Bt(t), s = e.length; o < s; o++)
                    r[e[o]] = T.css(t, e[o], !1, n);
                  return r;
                }
                return void 0 !== i ? T.style(t, e, i) : T.css(t, e);
              },
              t,
              e,
              1 < arguments.length
            );
          },
        }),
        ((T.Tween = le).prototype = {
          constructor: le,
          init: function (t, e, i, n, s, r) {
            (this.elem = t),
              (this.prop = i),
              (this.easing = s || T.easing._default),
              (this.options = e),
              (this.start = this.now = this.cur()),
              (this.end = n),
              (this.unit = r || (T.cssNumber[i] ? "" : "px"));
          },
          cur: function () {
            var t = le.propHooks[this.prop];
            return (t && t.get ? t : le.propHooks._default).get(this);
          },
          run: function (t) {
            var e,
              i = le.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = e = T.easing[this.easing](
                    t,
                    this.options.duration * t,
                    0,
                    1,
                    this.options.duration
                  ))
                : (this.pos = e = t),
              (this.now = (this.end - this.start) * e + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              (i && i.set ? i : le.propHooks._default).set(this),
              this
            );
          },
        }),
        (le.prototype.init.prototype = le.prototype),
        (le.propHooks = {
          _default: {
            get: function (t) {
              return 1 !== t.elem.nodeType ||
                (null != t.elem[t.prop] && null == t.elem.style[t.prop])
                ? t.elem[t.prop]
                : (t = T.css(t.elem, t.prop, "")) && "auto" !== t
                ? t
                : 0;
            },
            set: function (t) {
              T.fx.step[t.prop]
                ? T.fx.step[t.prop](t)
                : 1 !== t.elem.nodeType ||
                  (!T.cssHooks[t.prop] && null == t.elem.style[te(t.prop)])
                ? (t.elem[t.prop] = t.now)
                : T.style(t.elem, t.prop, t.now + t.unit);
            },
          },
        }),
        (le.propHooks.scrollTop = le.propHooks.scrollLeft = {
          set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
          },
        }),
        (T.easing = {
          linear: function (t) {
            return t;
          },
          swing: function (t) {
            return 0.5 - Math.cos(t * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (T.fx = le.prototype.init),
        (T.fx.step = {});
      var ue,
        ce,
        he = /^(?:toggle|show|hide)$/,
        de = /queueHooks$/;
      function fe() {
        ce &&
          (!1 === C.hidden && x.requestAnimationFrame
            ? x.requestAnimationFrame(fe)
            : x.setTimeout(fe, T.fx.interval),
          T.fx.tick());
      }
      function pe() {
        return (
          x.setTimeout(function () {
            ue = void 0;
          }),
          (ue = Date.now())
        );
      }
      function ge(t, e) {
        var i,
          n = 0,
          s = { height: t };
        for (e = e ? 1 : 0; n < 4; n += 2 - e)
          s["margin" + (i = it[n])] = s["padding" + i] = t;
        return e && (s.opacity = s.width = t), s;
      }
      function me(t, e, i) {
        for (
          var n,
            s = (ve.tweeners[e] || []).concat(ve.tweeners["*"]),
            r = 0,
            o = s.length;
          r < o;
          r++
        )
          if ((n = s[r].call(i, e, t))) return n;
      }
      function ve(s, t, e) {
        var i,
          r,
          n = 0,
          o = ve.prefilters.length,
          a = T.Deferred().always(function () {
            delete l.elem;
          }),
          l = function () {
            if (r) return !1;
            for (
              var t = ue || pe(),
                t = Math.max(0, u.startTime + u.duration - t),
                e = 1 - (t / u.duration || 0),
                i = 0,
                n = u.tweens.length;
              i < n;
              i++
            )
              u.tweens[i].run(e);
            return (
              a.notifyWith(s, [u, e, t]),
              e < 1 && n
                ? t
                : (n || a.notifyWith(s, [u, 1, 0]), a.resolveWith(s, [u]), !1)
            );
          },
          u = a.promise({
            elem: s,
            props: T.extend({}, t),
            opts: T.extend(
              !0,
              { specialEasing: {}, easing: T.easing._default },
              e
            ),
            originalProperties: t,
            originalOptions: e,
            startTime: ue || pe(),
            duration: e.duration,
            tweens: [],
            createTween: function (t, e) {
              t = T.Tween(
                s,
                u.opts,
                t,
                e,
                u.opts.specialEasing[t] || u.opts.easing
              );
              return u.tweens.push(t), t;
            },
            stop: function (t) {
              var e = 0,
                i = t ? u.tweens.length : 0;
              if (r) return this;
              for (r = !0; e < i; e++) u.tweens[e].run(1);
              return (
                t
                  ? (a.notifyWith(s, [u, 1, 0]), a.resolveWith(s, [u, t]))
                  : a.rejectWith(s, [u, t]),
                this
              );
            },
          }),
          c = u.props;
        for (
          !(function (t, e) {
            var i, n, s, r, o;
            for (i in t)
              if (
                ((s = e[(n = V(i))]),
                (r = t[i]),
                Array.isArray(r) && ((s = r[1]), (r = t[i] = r[0])),
                i !== n && ((t[n] = r), delete t[i]),
                (o = T.cssHooks[n]) && ("expand" in o))
              )
                for (i in ((r = o.expand(r)), delete t[n], r))
                  (i in t) || ((t[i] = r[i]), (e[i] = s));
              else e[n] = s;
          })(c, u.opts.specialEasing);
          n < o;
          n++
        )
          if ((i = ve.prefilters[n].call(u, s, c, u.opts)))
            return (
              _(i.stop) &&
                (T._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)),
              i
            );
        return (
          T.map(c, me, u),
          _(u.opts.start) && u.opts.start.call(s, u),
          u
            .progress(u.opts.progress)
            .done(u.opts.done, u.opts.complete)
            .fail(u.opts.fail)
            .always(u.opts.always),
          T.fx.timer(T.extend(l, { elem: s, anim: u, queue: u.opts.queue })),
          u
        );
      }
      (T.Animation = T.extend(ve, {
        tweeners: {
          "*": [
            function (t, e) {
              var i = this.createTween(t, e);
              return at(i.elem, t, et.exec(e), i), i;
            },
          ],
        },
        tweener: function (t, e) {
          for (
            var i, n = 0, s = (t = _(t) ? ((e = t), ["*"]) : t.match(L)).length;
            n < s;
            n++
          )
            (i = t[n]),
              (ve.tweeners[i] = ve.tweeners[i] || []),
              ve.tweeners[i].unshift(e);
        },
        prefilters: [
          function (t, e, i) {
            var n,
              s,
              r,
              o,
              a,
              l,
              u,
              c = "width" in e || "height" in e,
              h = this,
              d = {},
              f = t.style,
              p = t.nodeType && ot(t),
              g = X.get(t, "fxshow");
            for (n in (i.queue ||
              (null == (o = T._queueHooks(t, "fx")).unqueued &&
                ((o.unqueued = 0),
                (a = o.empty.fire),
                (o.empty.fire = function () {
                  o.unqueued || a();
                })),
              o.unqueued++,
              h.always(function () {
                h.always(function () {
                  o.unqueued--, T.queue(t, "fx").length || o.empty.fire();
                });
              })),
            e))
              if (((s = e[n]), he.test(s))) {
                if (
                  (delete e[n],
                  (r = r || "toggle" === s),
                  s === (p ? "hide" : "show"))
                ) {
                  if ("show" !== s || !g || void 0 === g[n]) continue;
                  p = !0;
                }
                d[n] = (g && g[n]) || T.style(t, n);
              }
            if ((l = !T.isEmptyObject(e)) || !T.isEmptyObject(d))
              for (n in (c &&
                1 === t.nodeType &&
                ((i.overflow = [f.overflow, f.overflowX, f.overflowY]),
                null == (u = g && g.display) && (u = X.get(t, "display")),
                "none" === (c = T.css(t, "display")) &&
                  (u
                    ? (c = u)
                    : (ut([t], !0),
                      (u = t.style.display || u),
                      (c = T.css(t, "display")),
                      ut([t]))),
                ("inline" === c || ("inline-block" === c && null != u)) &&
                  "none" === T.css(t, "float") &&
                  (l ||
                    (h.done(function () {
                      f.display = u;
                    }),
                    null == u &&
                      ((c = f.display), (u = "none" === c ? "" : c))),
                  (f.display = "inline-block"))),
              i.overflow &&
                ((f.overflow = "hidden"),
                h.always(function () {
                  (f.overflow = i.overflow[0]),
                    (f.overflowX = i.overflow[1]),
                    (f.overflowY = i.overflow[2]);
                })),
              (l = !1),
              d))
                l ||
                  (g
                    ? "hidden" in g && (p = g.hidden)
                    : (g = X.access(t, "fxshow", { display: u })),
                  r && (g.hidden = !p),
                  p && ut([t], !0),
                  h.done(function () {
                    for (n in (p || ut([t]), X.remove(t, "fxshow"), d))
                      T.style(t, n, d[n]);
                  })),
                  (l = me(p ? g[n] : 0, n, h)),
                  n in g ||
                    ((g[n] = l.start), p && ((l.end = l.start), (l.start = 0)));
          },
        ],
        prefilter: function (t, e) {
          e ? ve.prefilters.unshift(t) : ve.prefilters.push(t);
        },
      })),
        (T.speed = function (t, e, i) {
          var n =
            t && "object" == typeof t
              ? T.extend({}, t)
              : {
                  complete: i || (!i && e) || (_(t) && t),
                  duration: t,
                  easing: (i && e) || (e && !_(e) && e),
                };
          return (
            T.fx.off
              ? (n.duration = 0)
              : "number" != typeof n.duration &&
                (n.duration in T.fx.speeds
                  ? (n.duration = T.fx.speeds[n.duration])
                  : (n.duration = T.fx.speeds._default)),
            (null != n.queue && !0 !== n.queue) || (n.queue = "fx"),
            (n.old = n.complete),
            (n.complete = function () {
              _(n.old) && n.old.call(this), n.queue && T.dequeue(this, n.queue);
            }),
            n
          );
        }),
        T.fn.extend({
          fadeTo: function (t, e, i, n) {
            return this.filter(ot)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: e }, t, i, n);
          },
          animate: function (e, t, i, n) {
            var s = T.isEmptyObject(e),
              r = T.speed(t, i, n),
              n = function () {
                var t = ve(this, T.extend({}, e), r);
                (s || X.get(this, "finish")) && t.stop(!0);
              };
            return (
              (n.finish = n),
              s || !1 === r.queue ? this.each(n) : this.queue(r.queue, n)
            );
          },
          stop: function (s, t, r) {
            function o(t) {
              var e = t.stop;
              delete t.stop, e(r);
            }
            return (
              "string" != typeof s && ((r = t), (t = s), (s = void 0)),
              t && this.queue(s || "fx", []),
              this.each(function () {
                var t = !0,
                  e = null != s && s + "queueHooks",
                  i = T.timers,
                  n = X.get(this);
                if (e) n[e] && n[e].stop && o(n[e]);
                else for (e in n) n[e] && n[e].stop && de.test(e) && o(n[e]);
                for (e = i.length; e--; )
                  i[e].elem !== this ||
                    (null != s && i[e].queue !== s) ||
                    (i[e].anim.stop(r), (t = !1), i.splice(e, 1));
                (!t && r) || T.dequeue(this, s);
              })
            );
          },
          finish: function (o) {
            return (
              !1 !== o && (o = o || "fx"),
              this.each(function () {
                var t,
                  e = X.get(this),
                  i = e[o + "queue"],
                  n = e[o + "queueHooks"],
                  s = T.timers,
                  r = i ? i.length : 0;
                for (
                  e.finish = !0,
                    T.queue(this, o, []),
                    n && n.stop && n.stop.call(this, !0),
                    t = s.length;
                  t--;

                )
                  s[t].elem === this &&
                    s[t].queue === o &&
                    (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; t < r; t++)
                  i[t] && i[t].finish && i[t].finish.call(this);
                delete e.finish;
              })
            );
          },
        }),
        T.each(["toggle", "show", "hide"], function (t, n) {
          var s = T.fn[n];
          T.fn[n] = function (t, e, i) {
            return null == t || "boolean" == typeof t
              ? s.apply(this, arguments)
              : this.animate(ge(n, !0), t, e, i);
          };
        }),
        T.each(
          {
            slideDown: ge("show"),
            slideUp: ge("hide"),
            slideToggle: ge("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (t, n) {
            T.fn[t] = function (t, e, i) {
              return this.animate(n, t, e, i);
            };
          }
        ),
        (T.timers = []),
        (T.fx.tick = function () {
          var t,
            e = 0,
            i = T.timers;
          for (ue = Date.now(); e < i.length; e++)
            (t = i[e])() || i[e] !== t || i.splice(e--, 1);
          i.length || T.fx.stop(), (ue = void 0);
        }),
        (T.fx.timer = function (t) {
          T.timers.push(t), T.fx.start();
        }),
        (T.fx.interval = 13),
        (T.fx.start = function () {
          ce || ((ce = !0), fe());
        }),
        (T.fx.stop = function () {
          ce = null;
        }),
        (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (T.fn.delay = function (n, t) {
          return (
            (n = (T.fx && T.fx.speeds[n]) || n),
            (t = t || "fx"),
            this.queue(t, function (t, e) {
              var i = x.setTimeout(t, n);
              e.stop = function () {
                x.clearTimeout(i);
              };
            })
          );
        }),
        (h = C.createElement("input")),
        (tt = C.createElement("select").appendChild(C.createElement("option"))),
        (h.type = "checkbox"),
        (y.checkOn = "" !== h.value),
        (y.optSelected = tt.selected),
        ((h = C.createElement("input")).value = "t"),
        (h.type = "radio"),
        (y.radioValue = "t" === h.value);
      var ye,
        _e = T.expr.attrHandle;
      T.fn.extend({
        attr: function (t, e) {
          return $(this, T.attr, t, e, 1 < arguments.length);
        },
        removeAttr: function (t) {
          return this.each(function () {
            T.removeAttr(this, t);
          });
        },
      }),
        T.extend({
          attr: function (t, e, i) {
            var n,
              s,
              r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
              return void 0 === t.getAttribute
                ? T.prop(t, e, i)
                : ((1 === r && T.isXMLDoc(t)) ||
                    (s =
                      T.attrHooks[e.toLowerCase()] ||
                      (T.expr.match.bool.test(e) ? ye : void 0)),
                  void 0 !== i
                    ? null === i
                      ? void T.removeAttr(t, e)
                      : s && "set" in s && void 0 !== (n = s.set(t, i, e))
                      ? n
                      : (t.setAttribute(e, i + ""), i)
                    : !(s && "get" in s && null !== (n = s.get(t, e))) &&
                      null == (n = T.find.attr(t, e))
                    ? void 0
                    : n);
          },
          attrHooks: {
            type: {
              set: function (t, e) {
                if (!y.radioValue && "radio" === e && k(t, "input")) {
                  var i = t.value;
                  return t.setAttribute("type", e), i && (t.value = i), e;
                }
              },
            },
          },
          removeAttr: function (t, e) {
            var i,
              n = 0,
              s = e && e.match(L);
            if (s && 1 === t.nodeType)
              for (; (i = s[n++]); ) t.removeAttribute(i);
          },
        }),
        (ye = {
          set: function (t, e, i) {
            return !1 === e ? T.removeAttr(t, i) : t.setAttribute(i, i), i;
          },
        }),
        T.each(T.expr.match.bool.source.match(/\w+/g), function (t, e) {
          var o = _e[e] || T.find.attr;
          _e[e] = function (t, e, i) {
            var n,
              s,
              r = e.toLowerCase();
            return (
              i ||
                ((s = _e[r]),
                (_e[r] = n),
                (n = null != o(t, e, i) ? r : null),
                (_e[r] = s)),
              n
            );
          };
        });
      var we = /^(?:input|select|textarea|button)$/i,
        be = /^(?:a|area)$/i;
      function xe(t) {
        return (t.match(L) || []).join(" ");
      }
      function Ce(t) {
        return (t.getAttribute && t.getAttribute("class")) || "";
      }
      function Te(t) {
        return Array.isArray(t)
          ? t
          : ("string" == typeof t && t.match(L)) || [];
      }
      T.fn.extend({
        prop: function (t, e) {
          return $(this, T.prop, t, e, 1 < arguments.length);
        },
        removeProp: function (t) {
          return this.each(function () {
            delete this[T.propFix[t] || t];
          });
        },
      }),
        T.extend({
          prop: function (t, e, i) {
            var n,
              s,
              r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
              return (
                (1 === r && T.isXMLDoc(t)) ||
                  ((e = T.propFix[e] || e), (s = T.propHooks[e])),
                void 0 !== i
                  ? s && "set" in s && void 0 !== (n = s.set(t, i, e))
                    ? n
                    : (t[e] = i)
                  : s && "get" in s && null !== (n = s.get(t, e))
                  ? n
                  : t[e]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (t) {
                var e = T.find.attr(t, "tabindex");
                return e
                  ? parseInt(e, 10)
                  : we.test(t.nodeName) || (be.test(t.nodeName) && t.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        y.optSelected ||
          (T.propHooks.selected = {
            get: function (t) {
              t = t.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (t) {
              t = t.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        T.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            T.propFix[this.toLowerCase()] = this;
          }
        ),
        T.fn.extend({
          addClass: function (e) {
            var t,
              i,
              n,
              s,
              r,
              o,
              a = 0;
            if (_(e))
              return this.each(function (t) {
                T(this).addClass(e.call(this, t, Ce(this)));
              });
            if ((t = Te(e)).length)
              for (; (i = this[a++]); )
                if (
                  ((o = Ce(i)), (n = 1 === i.nodeType && " " + xe(o) + " "))
                ) {
                  for (r = 0; (s = t[r++]); )
                    n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                  o !== (o = xe(n)) && i.setAttribute("class", o);
                }
            return this;
          },
          removeClass: function (e) {
            var t,
              i,
              n,
              s,
              r,
              o,
              a = 0;
            if (_(e))
              return this.each(function (t) {
                T(this).removeClass(e.call(this, t, Ce(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((t = Te(e)).length)
              for (; (i = this[a++]); )
                if (
                  ((o = Ce(i)), (n = 1 === i.nodeType && " " + xe(o) + " "))
                ) {
                  for (r = 0; (s = t[r++]); )
                    for (; -1 < n.indexOf(" " + s + " "); )
                      n = n.replace(" " + s + " ", " ");
                  o !== (o = xe(n)) && i.setAttribute("class", o);
                }
            return this;
          },
          toggleClass: function (s, e) {
            var r = typeof s,
              o = "string" == r || Array.isArray(s);
            return "boolean" == typeof e && o
              ? e
                ? this.addClass(s)
                : this.removeClass(s)
              : _(s)
              ? this.each(function (t) {
                  T(this).toggleClass(s.call(this, t, Ce(this), e), e);
                })
              : this.each(function () {
                  var t, e, i, n;
                  if (o)
                    for (e = 0, i = T(this), n = Te(s); (t = n[e++]); )
                      i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                  else
                    (void 0 !== s && "boolean" != r) ||
                      ((t = Ce(this)) && X.set(this, "__className__", t),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          (!t && !1 !== s && X.get(this, "__className__")) || ""
                        ));
                });
          },
          hasClass: function (t) {
            for (var e, i = 0, n = " " + t + " "; (e = this[i++]); )
              if (1 === e.nodeType && -1 < (" " + xe(Ce(e)) + " ").indexOf(n))
                return !0;
            return !1;
          },
        });
      var De = /\r/g;
      T.fn.extend({
        val: function (e) {
          var i,
            t,
            n,
            s = this[0];
          return arguments.length
            ? ((n = _(e)),
              this.each(function (t) {
                1 === this.nodeType &&
                  (null == (t = n ? e.call(this, t, T(this).val()) : e)
                    ? (t = "")
                    : "number" == typeof t
                    ? (t += "")
                    : Array.isArray(t) &&
                      (t = T.map(t, function (t) {
                        return null == t ? "" : t + "";
                      })),
                  ((i =
                    T.valHooks[this.type] ||
                    T.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in i &&
                    void 0 !== i.set(this, t, "value")) ||
                    (this.value = t));
              }))
            : s
            ? (i =
                T.valHooks[s.type] || T.valHooks[s.nodeName.toLowerCase()]) &&
              "get" in i &&
              void 0 !== (t = i.get(s, "value"))
              ? t
              : "string" == typeof (t = s.value)
              ? t.replace(De, "")
              : null == t
              ? ""
              : t
            : void 0;
        },
      }),
        T.extend({
          valHooks: {
            option: {
              get: function (t) {
                var e = T.find.attr(t, "value");
                return null != e ? e : xe(T.text(t));
              },
            },
            select: {
              get: function (t) {
                for (
                  var e,
                    i = t.options,
                    n = t.selectedIndex,
                    s = "select-one" === t.type,
                    r = s ? null : [],
                    o = s ? n + 1 : i.length,
                    a = n < 0 ? o : s ? n : 0;
                  a < o;
                  a++
                )
                  if (
                    ((e = i[a]).selected || a === n) &&
                    !e.disabled &&
                    (!e.parentNode.disabled || !k(e.parentNode, "optgroup"))
                  ) {
                    if (((e = T(e).val()), s)) return e;
                    r.push(e);
                  }
                return r;
              },
              set: function (t, e) {
                for (
                  var i, n, s = t.options, r = T.makeArray(e), o = s.length;
                  o--;

                )
                  ((n = s[o]).selected =
                    -1 < T.inArray(T.valHooks.option.get(n), r)) && (i = !0);
                return i || (t.selectedIndex = -1), r;
              },
            },
          },
        }),
        T.each(["radio", "checkbox"], function () {
          (T.valHooks[this] = {
            set: function (t, e) {
              if (Array.isArray(e))
                return (t.checked = -1 < T.inArray(T(t).val(), e));
            },
          }),
            y.checkOn ||
              (T.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value;
              });
        }),
        (y.focusin = "onfocusin" in x);
      function Ee(t) {
        t.stopPropagation();
      }
      var ke = /^(?:focusinfocus|focusoutblur)$/;
      T.extend(T.event, {
        trigger: function (t, e, i, n) {
          var s,
            r,
            o,
            a,
            l,
            u,
            c,
            h = [i || C],
            d = v.call(t, "type") ? t.type : t,
            f = v.call(t, "namespace") ? t.namespace.split(".") : [],
            p = (c = r = i = i || C);
          if (
            3 !== i.nodeType &&
            8 !== i.nodeType &&
            !ke.test(d + T.event.triggered) &&
            (-1 < d.indexOf(".") &&
              ((d = (f = d.split(".")).shift()), f.sort()),
            (a = d.indexOf(":") < 0 && "on" + d),
            ((t = t[T.expando]
              ? t
              : new T.Event(d, "object" == typeof t && t)).isTrigger = n
              ? 2
              : 3),
            (t.namespace = f.join(".")),
            (t.rnamespace = t.namespace
              ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (t.result = void 0),
            t.target || (t.target = i),
            (e = null == e ? [t] : T.makeArray(e, [t])),
            (u = T.event.special[d] || {}),
            n || !u.trigger || !1 !== u.trigger.apply(i, e))
          ) {
            if (!n && !u.noBubble && !g(i)) {
              for (
                o = u.delegateType || d, ke.test(o + d) || (p = p.parentNode);
                p;
                p = p.parentNode
              )
                h.push(p), (r = p);
              r === (i.ownerDocument || C) &&
                h.push(r.defaultView || r.parentWindow || x);
            }
            for (s = 0; (p = h[s++]) && !t.isPropagationStopped(); )
              (c = p),
                (t.type = 1 < s ? o : u.bindType || d),
                (l =
                  (X.get(p, "events") || Object.create(null))[t.type] &&
                  X.get(p, "handle")) && l.apply(p, e),
                (l = a && p[a]) &&
                  l.apply &&
                  Y(p) &&
                  ((t.result = l.apply(p, e)),
                  !1 === t.result && t.preventDefault());
            return (
              (t.type = d),
              n ||
                t.isDefaultPrevented() ||
                (u._default && !1 !== u._default.apply(h.pop(), e)) ||
                !Y(i) ||
                (a &&
                  _(i[d]) &&
                  !g(i) &&
                  ((r = i[a]) && (i[a] = null),
                  (T.event.triggered = d),
                  t.isPropagationStopped() && c.addEventListener(d, Ee),
                  i[d](),
                  t.isPropagationStopped() && c.removeEventListener(d, Ee),
                  (T.event.triggered = void 0),
                  r && (i[a] = r))),
              t.result
            );
          }
        },
        simulate: function (t, e, i) {
          t = T.extend(new T.Event(), i, { type: t, isSimulated: !0 });
          T.event.trigger(t, null, e);
        },
      }),
        T.fn.extend({
          trigger: function (t, e) {
            return this.each(function () {
              T.event.trigger(t, e, this);
            });
          },
          triggerHandler: function (t, e) {
            var i = this[0];
            if (i) return T.event.trigger(t, e, i, !0);
          },
        }),
        y.focusin ||
          T.each({ focus: "focusin", blur: "focusout" }, function (i, n) {
            function s(t) {
              T.event.simulate(n, t.target, T.event.fix(t));
            }
            T.event.special[n] = {
              setup: function () {
                var t = this.ownerDocument || this.document || this,
                  e = X.access(t, n);
                e || t.addEventListener(i, s, !0), X.access(t, n, (e || 0) + 1);
              },
              teardown: function () {
                var t = this.ownerDocument || this.document || this,
                  e = X.access(t, n) - 1;
                e
                  ? X.access(t, n, e)
                  : (t.removeEventListener(i, s, !0), X.remove(t, n));
              },
            };
          });
      var Se = x.location,
        Ne = { guid: Date.now() },
        Ae = /\?/;
      T.parseXML = function (t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
          e = new x.DOMParser().parseFromString(t, "text/xml");
        } catch (t) {
          e = void 0;
        }
        return (
          (e && !e.getElementsByTagName("parsererror").length) ||
            T.error("Invalid XML: " + t),
          e
        );
      };
      var Oe = /\[\]$/,
        Me = /\r?\n/g,
        je = /^(?:submit|button|image|reset|file)$/i,
        Ie = /^(?:input|select|textarea|keygen)/i;
      (T.param = function (t, e) {
        function i(t, e) {
          (e = _(e) ? e() : e),
            (s[s.length] =
              encodeURIComponent(t) +
              "=" +
              encodeURIComponent(null == e ? "" : e));
        }
        var n,
          s = [];
        if (null == t) return "";
        if (Array.isArray(t) || (t.jquery && !T.isPlainObject(t)))
          T.each(t, function () {
            i(this.name, this.value);
          });
        else
          for (n in t)
            !(function i(n, t, s, r) {
              if (Array.isArray(t))
                T.each(t, function (t, e) {
                  s || Oe.test(n)
                    ? r(n, e)
                    : i(
                        n +
                          "[" +
                          ("object" == typeof e && null != e ? t : "") +
                          "]",
                        e,
                        s,
                        r
                      );
                });
              else if (s || "object" !== p(t)) r(n, t);
              else for (var e in t) i(n + "[" + e + "]", t[e], s, r);
            })(n, t[n], e, i);
        return s.join("&");
      }),
        T.fn.extend({
          serialize: function () {
            return T.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var t = T.prop(this, "elements");
              return t ? T.makeArray(t) : this;
            })
              .filter(function () {
                var t = this.type;
                return (
                  this.name &&
                  !T(this).is(":disabled") &&
                  Ie.test(this.nodeName) &&
                  !je.test(t) &&
                  (this.checked || !ct.test(t))
                );
              })
              .map(function (t, e) {
                var i = T(this).val();
                return null == i
                  ? null
                  : Array.isArray(i)
                  ? T.map(i, function (t) {
                      return { name: e.name, value: t.replace(Me, "\r\n") };
                    })
                  : { name: e.name, value: i.replace(Me, "\r\n") };
              })
              .get();
          },
        });
      var Le = /%20/g,
        Pe = /#.*$/,
        Fe = /([?&])_=[^&]*/,
        He = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        qe = /^(?:GET|HEAD)$/,
        Re = /^\/\//,
        Ue = {},
        $e = {},
        We = "*/".concat("*"),
        ze = C.createElement("a");
      function Be(r) {
        return function (t, e) {
          "string" != typeof t && ((e = t), (t = "*"));
          var i,
            n = 0,
            s = t.toLowerCase().match(L) || [];
          if (_(e))
            for (; (i = s[n++]); )
              "+" === i[0]
                ? ((i = i.slice(1) || "*"), (r[i] = r[i] || []).unshift(e))
                : (r[i] = r[i] || []).push(e);
        };
      }
      function Ve(e, n, s, r) {
        var o = {},
          a = e === $e;
        function l(t) {
          var i;
          return (
            (o[t] = !0),
            T.each(e[t] || [], function (t, e) {
              e = e(n, s, r);
              return "string" != typeof e || a || o[e]
                ? a
                  ? !(i = e)
                  : void 0
                : (n.dataTypes.unshift(e), l(e), !1);
            }),
            i
          );
        }
        return l(n.dataTypes[0]) || (!o["*"] && l("*"));
      }
      function Ye(t, e) {
        var i,
          n,
          s = T.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((s[i] ? t : (n = n || {}))[i] = e[i]);
        return n && T.extend(!0, t, n), t;
      }
      (ze.href = Se.href),
        T.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: Se.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              Se.protocol
            ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": We,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": T.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (t, e) {
            return e ? Ye(Ye(t, T.ajaxSettings), e) : Ye(T.ajaxSettings, t);
          },
          ajaxPrefilter: Be(Ue),
          ajaxTransport: Be($e),
          ajax: function (t, e) {
            "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
            var l,
              u,
              c,
              i,
              h,
              n,
              d,
              f,
              s,
              p = T.ajaxSetup({}, e),
              g = p.context || p,
              m = p.context && (g.nodeType || g.jquery) ? T(g) : T.event,
              v = T.Deferred(),
              y = T.Callbacks("once memory"),
              _ = p.statusCode || {},
              r = {},
              o = {},
              a = "canceled",
              w = {
                readyState: 0,
                getResponseHeader: function (t) {
                  var e;
                  if (d) {
                    if (!i)
                      for (i = {}; (e = He.exec(c)); )
                        i[e[1].toLowerCase() + " "] = (
                          i[e[1].toLowerCase() + " "] || []
                        ).concat(e[2]);
                    e = i[t.toLowerCase() + " "];
                  }
                  return null == e ? null : e.join(", ");
                },
                getAllResponseHeaders: function () {
                  return d ? c : null;
                },
                setRequestHeader: function (t, e) {
                  return (
                    null == d &&
                      ((t = o[t.toLowerCase()] = o[t.toLowerCase()] || t),
                      (r[t] = e)),
                    this
                  );
                },
                overrideMimeType: function (t) {
                  return null == d && (p.mimeType = t), this;
                },
                statusCode: function (t) {
                  if (t)
                    if (d) w.always(t[w.status]);
                    else for (var e in t) _[e] = [_[e], t[e]];
                  return this;
                },
                abort: function (t) {
                  t = t || a;
                  return l && l.abort(t), b(0, t), this;
                },
              };
            if (
              (v.promise(w),
              (p.url = ((t || p.url || Se.href) + "").replace(
                Re,
                Se.protocol + "//"
              )),
              (p.type = e.method || e.type || p.method || p.type),
              (p.dataTypes = (p.dataType || "*").toLowerCase().match(L) || [
                "",
              ]),
              null == p.crossDomain)
            ) {
              n = C.createElement("a");
              try {
                (n.href = p.url),
                  (n.href = n.href),
                  (p.crossDomain =
                    ze.protocol + "//" + ze.host != n.protocol + "//" + n.host);
              } catch (t) {
                p.crossDomain = !0;
              }
            }
            if (
              (p.data &&
                p.processData &&
                "string" != typeof p.data &&
                (p.data = T.param(p.data, p.traditional)),
              Ve(Ue, p, e, w),
              d)
            )
              return w;
            for (s in ((f = T.event && p.global) &&
              0 == T.active++ &&
              T.event.trigger("ajaxStart"),
            (p.type = p.type.toUpperCase()),
            (p.hasContent = !qe.test(p.type)),
            (u = p.url.replace(Pe, "")),
            p.hasContent
              ? p.data &&
                p.processData &&
                0 ===
                  (p.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (p.data = p.data.replace(Le, "+"))
              : ((t = p.url.slice(u.length)),
                p.data &&
                  (p.processData || "string" == typeof p.data) &&
                  ((u += (Ae.test(u) ? "&" : "?") + p.data), delete p.data),
                !1 === p.cache &&
                  ((u = u.replace(Fe, "$1")),
                  (t = (Ae.test(u) ? "&" : "?") + "_=" + Ne.guid++ + t)),
                (p.url = u + t)),
            p.ifModified &&
              (T.lastModified[u] &&
                w.setRequestHeader("If-Modified-Since", T.lastModified[u]),
              T.etag[u] && w.setRequestHeader("If-None-Match", T.etag[u])),
            ((p.data && p.hasContent && !1 !== p.contentType) ||
              e.contentType) &&
              w.setRequestHeader("Content-Type", p.contentType),
            w.setRequestHeader(
              "Accept",
              p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                ? p.accepts[p.dataTypes[0]] +
                    ("*" !== p.dataTypes[0] ? ", " + We + "; q=0.01" : "")
                : p.accepts["*"]
            ),
            p.headers))
              w.setRequestHeader(s, p.headers[s]);
            if (p.beforeSend && (!1 === p.beforeSend.call(g, w, p) || d))
              return w.abort();
            if (
              ((a = "abort"),
              y.add(p.complete),
              w.done(p.success),
              w.fail(p.error),
              (l = Ve($e, p, e, w)))
            ) {
              if (((w.readyState = 1), f && m.trigger("ajaxSend", [w, p]), d))
                return w;
              p.async &&
                0 < p.timeout &&
                (h = x.setTimeout(function () {
                  w.abort("timeout");
                }, p.timeout));
              try {
                (d = !1), l.send(r, b);
              } catch (t) {
                if (d) throw t;
                b(-1, t);
              }
            } else b(-1, "No Transport");
            function b(t, e, i, n) {
              var s,
                r,
                o,
                a = e;
              d ||
                ((d = !0),
                h && x.clearTimeout(h),
                (l = void 0),
                (c = n || ""),
                (w.readyState = 0 < t ? 4 : 0),
                (n = (200 <= t && t < 300) || 304 === t),
                i &&
                  (o = (function (t, e, i) {
                    for (
                      var n, s, r, o, a = t.contents, l = t.dataTypes;
                      "*" === l[0];

                    )
                      l.shift(),
                        void 0 === n &&
                          (n =
                            t.mimeType || e.getResponseHeader("Content-Type"));
                    if (n)
                      for (s in a)
                        if (a[s] && a[s].test(n)) {
                          l.unshift(s);
                          break;
                        }
                    if (l[0] in i) r = l[0];
                    else {
                      for (s in i) {
                        if (!l[0] || t.converters[s + " " + l[0]]) {
                          r = s;
                          break;
                        }
                        o = o || s;
                      }
                      r = r || o;
                    }
                    if (r) return r !== l[0] && l.unshift(r), i[r];
                  })(p, w, i)),
                !n &&
                  -1 < T.inArray("script", p.dataTypes) &&
                  (p.converters["text script"] = function () {}),
                (o = (function (t, e, i, n) {
                  var s,
                    r,
                    o,
                    a,
                    l,
                    u = {},
                    c = t.dataTypes.slice();
                  if (c[1])
                    for (o in t.converters)
                      u[o.toLowerCase()] = t.converters[o];
                  for (r = c.shift(); r; )
                    if (
                      (t.responseFields[r] && (i[t.responseFields[r]] = e),
                      !l &&
                        n &&
                        t.dataFilter &&
                        (e = t.dataFilter(e, t.dataType)),
                      (l = r),
                      (r = c.shift()))
                    )
                      if ("*" === r) r = l;
                      else if ("*" !== l && l !== r) {
                        if (!(o = u[l + " " + r] || u["* " + r]))
                          for (s in u)
                            if (
                              ((a = s.split(" ")),
                              a[1] === r &&
                                (o = u[l + " " + a[0]] || u["* " + a[0]]))
                            ) {
                              !0 === o
                                ? (o = u[s])
                                : !0 !== u[s] && ((r = a[0]), c.unshift(a[1]));
                              break;
                            }
                        if (!0 !== o)
                          if (o && t.throws) e = o(e);
                          else
                            try {
                              e = o(e);
                            } catch (t) {
                              return {
                                state: "parsererror",
                                error: o
                                  ? t
                                  : "No conversion from " + l + " to " + r,
                              };
                            }
                      }
                  return { state: "success", data: e };
                })(p, o, w, n)),
                n
                  ? (p.ifModified &&
                      ((i = w.getResponseHeader("Last-Modified")) &&
                        (T.lastModified[u] = i),
                      (i = w.getResponseHeader("etag")) && (T.etag[u] = i)),
                    204 === t || "HEAD" === p.type
                      ? (a = "nocontent")
                      : 304 === t
                      ? (a = "notmodified")
                      : ((a = o.state), (s = o.data), (n = !(r = o.error))))
                  : ((r = a), (!t && a) || ((a = "error"), t < 0 && (t = 0))),
                (w.status = t),
                (w.statusText = (e || a) + ""),
                n ? v.resolveWith(g, [s, a, w]) : v.rejectWith(g, [w, a, r]),
                w.statusCode(_),
                (_ = void 0),
                f &&
                  m.trigger(n ? "ajaxSuccess" : "ajaxError", [w, p, n ? s : r]),
                y.fireWith(g, [w, a]),
                f &&
                  (m.trigger("ajaxComplete", [w, p]),
                  --T.active || T.event.trigger("ajaxStop")));
            }
            return w;
          },
          getJSON: function (t, e, i) {
            return T.get(t, e, i, "json");
          },
          getScript: function (t, e) {
            return T.get(t, void 0, e, "script");
          },
        }),
        T.each(["get", "post"], function (t, s) {
          T[s] = function (t, e, i, n) {
            return (
              _(e) && ((n = n || i), (i = e), (e = void 0)),
              T.ajax(
                T.extend(
                  { url: t, type: s, dataType: n, data: e, success: i },
                  T.isPlainObject(t) && t
                )
              )
            );
          };
        }),
        T.ajaxPrefilter(function (t) {
          for (var e in t.headers)
            "content-type" === e.toLowerCase() &&
              (t.contentType = t.headers[e] || "");
        }),
        (T._evalUrl = function (t, e, i) {
          return T.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (t) {
              T.globalEval(t, e, i);
            },
          });
        }),
        T.fn.extend({
          wrapAll: function (t) {
            return (
              this[0] &&
                (_(t) && (t = t.call(this[0])),
                (t = T(t, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var t = this; t.firstElementChild; )
                      t = t.firstElementChild;
                    return t;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (i) {
            return _(i)
              ? this.each(function (t) {
                  T(this).wrapInner(i.call(this, t));
                })
              : this.each(function () {
                  var t = T(this),
                    e = t.contents();
                  e.length ? e.wrapAll(i) : t.append(i);
                });
          },
          wrap: function (e) {
            var i = _(e);
            return this.each(function (t) {
              T(this).wrapAll(i ? e.call(this, t) : e);
            });
          },
          unwrap: function (t) {
            return (
              this.parent(t)
                .not("body")
                .each(function () {
                  T(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (T.expr.pseudos.hidden = function (t) {
          return !T.expr.pseudos.visible(t);
        }),
        (T.expr.pseudos.visible = function (t) {
          return !!(
            t.offsetWidth ||
            t.offsetHeight ||
            t.getClientRects().length
          );
        }),
        (T.ajaxSettings.xhr = function () {
          try {
            return new x.XMLHttpRequest();
          } catch (t) {}
        });
      var Qe = { 0: 200, 1223: 204 },
        Xe = T.ajaxSettings.xhr();
      (y.cors = !!Xe && "withCredentials" in Xe),
        (y.ajax = Xe = !!Xe),
        T.ajaxTransport(function (s) {
          var r, o;
          if (y.cors || (Xe && !s.crossDomain))
            return {
              send: function (t, e) {
                var i,
                  n = s.xhr();
                if (
                  (n.open(s.type, s.url, s.async, s.username, s.password),
                  s.xhrFields)
                )
                  for (i in s.xhrFields) n[i] = s.xhrFields[i];
                for (i in (s.mimeType &&
                  n.overrideMimeType &&
                  n.overrideMimeType(s.mimeType),
                s.crossDomain ||
                  t["X-Requested-With"] ||
                  (t["X-Requested-With"] = "XMLHttpRequest"),
                t))
                  n.setRequestHeader(i, t[i]);
                (r = function (t) {
                  return function () {
                    r &&
                      ((r = o = n.onload = n.onerror = n.onabort = n.ontimeout = n.onreadystatechange = null),
                      "abort" === t
                        ? n.abort()
                        : "error" === t
                        ? "number" != typeof n.status
                          ? e(0, "error")
                          : e(n.status, n.statusText)
                        : e(
                            Qe[n.status] || n.status,
                            n.statusText,
                            "text" !== (n.responseType || "text") ||
                              "string" != typeof n.responseText
                              ? { binary: n.response }
                              : { text: n.responseText },
                            n.getAllResponseHeaders()
                          ));
                  };
                }),
                  (n.onload = r()),
                  (o = n.onerror = n.ontimeout = r("error")),
                  void 0 !== n.onabort
                    ? (n.onabort = o)
                    : (n.onreadystatechange = function () {
                        4 === n.readyState &&
                          x.setTimeout(function () {
                            r && o();
                          });
                      }),
                  (r = r("abort"));
                try {
                  n.send((s.hasContent && s.data) || null);
                } catch (t) {
                  if (r) throw t;
                }
              },
              abort: function () {
                r && r();
              },
            };
        }),
        T.ajaxPrefilter(function (t) {
          t.crossDomain && (t.contents.script = !1);
        }),
        T.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (t) {
              return T.globalEval(t), t;
            },
          },
        }),
        T.ajaxPrefilter("script", function (t) {
          void 0 === t.cache && (t.cache = !1),
            t.crossDomain && (t.type = "GET");
        }),
        T.ajaxTransport("script", function (i) {
          var n, s;
          if (i.crossDomain || i.scriptAttrs)
            return {
              send: function (t, e) {
                (n = T("<script>")
                  .attr(i.scriptAttrs || {})
                  .prop({ charset: i.scriptCharset, src: i.url })
                  .on(
                    "load error",
                    (s = function (t) {
                      n.remove(),
                        (s = null),
                        t && e("error" === t.type ? 404 : 200, t.type);
                    })
                  )),
                  C.head.appendChild(n[0]);
              },
              abort: function () {
                s && s();
              },
            };
        });
      var Ke = [],
        Ge = /(=)\?(?=&|$)|\?\?/;
      T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var t = Ke.pop() || T.expando + "_" + Ne.guid++;
          return (this[t] = !0), t;
        },
      }),
        T.ajaxPrefilter("json jsonp", function (t, e, i) {
          var n,
            s,
            r,
            o =
              !1 !== t.jsonp &&
              (Ge.test(t.url)
                ? "url"
                : "string" == typeof t.data &&
                  0 ===
                    (t.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  Ge.test(t.data) &&
                  "data");
          if (o || "jsonp" === t.dataTypes[0])
            return (
              (n = t.jsonpCallback = _(t.jsonpCallback)
                ? t.jsonpCallback()
                : t.jsonpCallback),
              o
                ? (t[o] = t[o].replace(Ge, "$1" + n))
                : !1 !== t.jsonp &&
                  (t.url += (Ae.test(t.url) ? "&" : "?") + t.jsonp + "=" + n),
              (t.converters["script json"] = function () {
                return r || T.error(n + " was not called"), r[0];
              }),
              (t.dataTypes[0] = "json"),
              (s = x[n]),
              (x[n] = function () {
                r = arguments;
              }),
              i.always(function () {
                void 0 === s ? T(x).removeProp(n) : (x[n] = s),
                  t[n] && ((t.jsonpCallback = e.jsonpCallback), Ke.push(n)),
                  r && _(s) && s(r[0]),
                  (r = s = void 0);
              }),
              "script"
            );
        }),
        (y.createHTMLDocument =
          (((h = C.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
          2 === h.childNodes.length)),
        (T.parseHTML = function (t, e, i) {
          return "string" != typeof t
            ? []
            : ("boolean" == typeof e && ((i = e), (e = !1)),
              e ||
                (y.createHTMLDocument
                  ? (((n = (e = C.implementation.createHTMLDocument(
                      ""
                    )).createElement("base")).href = C.location.href),
                    e.head.appendChild(n))
                  : (e = C)),
              (n = !i && []),
              (i = S.exec(t))
                ? [e.createElement(i[1])]
                : ((i = vt([t], e, n)),
                  n && n.length && T(n).remove(),
                  T.merge([], i.childNodes)));
          var n;
        }),
        (T.fn.load = function (t, e, i) {
          var n,
            s,
            r,
            o = this,
            a = t.indexOf(" ");
          return (
            -1 < a && ((n = xe(t.slice(a))), (t = t.slice(0, a))),
            _(e)
              ? ((i = e), (e = void 0))
              : e && "object" == typeof e && (s = "POST"),
            0 < o.length &&
              T.ajax({ url: t, type: s || "GET", dataType: "html", data: e })
                .done(function (t) {
                  (r = arguments),
                    o.html(n ? T("<div>").append(T.parseHTML(t)).find(n) : t);
                })
                .always(
                  i &&
                    function (t, e) {
                      o.each(function () {
                        i.apply(this, r || [t.responseText, e, t]);
                      });
                    }
                ),
            this
          );
        }),
        (T.expr.pseudos.animated = function (e) {
          return T.grep(T.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (T.offset = {
          setOffset: function (t, e, i) {
            var n,
              s,
              r,
              o,
              a = T.css(t, "position"),
              l = T(t),
              u = {};
            "static" === a && (t.style.position = "relative"),
              (r = l.offset()),
              (n = T.css(t, "top")),
              (o = T.css(t, "left")),
              (o =
                ("absolute" === a || "fixed" === a) &&
                -1 < (n + o).indexOf("auto")
                  ? ((s = (a = l.position()).top), a.left)
                  : ((s = parseFloat(n) || 0), parseFloat(o) || 0)),
              _(e) && (e = e.call(t, i, T.extend({}, r))),
              null != e.top && (u.top = e.top - r.top + s),
              null != e.left && (u.left = e.left - r.left + o),
              "using" in e
                ? e.using.call(t, u)
                : ("number" == typeof u.top && (u.top += "px"),
                  "number" == typeof u.left && (u.left += "px"),
                  l.css(u));
          },
        }),
        T.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    T.offset.setOffset(this, e, t);
                  });
            var t,
              i = this[0];
            return i
              ? i.getClientRects().length
                ? ((t = i.getBoundingClientRect()),
                  (i = i.ownerDocument.defaultView),
                  { top: t.top + i.pageYOffset, left: t.left + i.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var t,
                e,
                i,
                n = this[0],
                s = { top: 0, left: 0 };
              if ("fixed" === T.css(n, "position"))
                e = n.getBoundingClientRect();
              else {
                for (
                  e = this.offset(),
                    i = n.ownerDocument,
                    t = n.offsetParent || i.documentElement;
                  t &&
                  (t === i.body || t === i.documentElement) &&
                  "static" === T.css(t, "position");

                )
                  t = t.parentNode;
                t &&
                  t !== n &&
                  1 === t.nodeType &&
                  (((s = T(t).offset()).top += T.css(t, "borderTopWidth", !0)),
                  (s.left += T.css(t, "borderLeftWidth", !0)));
              }
              return {
                top: e.top - s.top - T.css(n, "marginTop", !0),
                left: e.left - s.left - T.css(n, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var t = this.offsetParent;
                t && "static" === T.css(t, "position");

              )
                t = t.offsetParent;
              return t || nt;
            });
          },
        }),
        T.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (e, s) {
            var r = "pageYOffset" === s;
            T.fn[e] = function (t) {
              return $(
                this,
                function (t, e, i) {
                  var n;
                  return (
                    g(t) ? (n = t) : 9 === t.nodeType && (n = t.defaultView),
                    void 0 === i
                      ? n
                        ? n[s]
                        : t[e]
                      : void (n
                          ? n.scrollTo(
                              r ? n.pageXOffset : i,
                              r ? i : n.pageYOffset
                            )
                          : (t[e] = i))
                  );
                },
                e,
                t,
                arguments.length
              );
            };
          }
        ),
        T.each(["top", "left"], function (t, i) {
          T.cssHooks[i] = Kt(y.pixelPosition, function (t, e) {
            if (e)
              return (e = Xt(t, i)), zt.test(e) ? T(t).position()[i] + "px" : e;
          });
        }),
        T.each({ Height: "height", Width: "width" }, function (o, a) {
          T.each(
            { padding: "inner" + o, content: a, "": "outer" + o },
            function (n, r) {
              T.fn[r] = function (t, e) {
                var i = arguments.length && (n || "boolean" != typeof t),
                  s = n || (!0 === t || !0 === e ? "margin" : "border");
                return $(
                  this,
                  function (t, e, i) {
                    var n;
                    return g(t)
                      ? 0 === r.indexOf("outer")
                        ? t["inner" + o]
                        : t.document.documentElement["client" + o]
                      : 9 === t.nodeType
                      ? ((n = t.documentElement),
                        Math.max(
                          t.body["scroll" + o],
                          n["scroll" + o],
                          t.body["offset" + o],
                          n["offset" + o],
                          n["client" + o]
                        ))
                      : void 0 === i
                      ? T.css(t, e, s)
                      : T.style(t, e, i, s);
                  },
                  a,
                  i ? t : void 0,
                  i
                );
              };
            }
          );
        }),
        T.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (t, e) {
            T.fn[e] = function (t) {
              return this.on(e, t);
            };
          }
        ),
        T.fn.extend({
          bind: function (t, e, i) {
            return this.on(t, null, e, i);
          },
          unbind: function (t, e) {
            return this.off(t, null, e);
          },
          delegate: function (t, e, i, n) {
            return this.on(e, t, i, n);
          },
          undelegate: function (t, e, i) {
            return 1 === arguments.length
              ? this.off(t, "**")
              : this.off(e, t || "**", i);
          },
          hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t);
          },
        }),
        T.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (t, i) {
            T.fn[i] = function (t, e) {
              return 0 < arguments.length
                ? this.on(i, null, t, e)
                : this.trigger(i);
            };
          }
        );
      var Je = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      (T.proxy = function (t, e) {
        var i, n;
        if (("string" == typeof e && ((n = t[e]), (e = t), (t = n)), _(t)))
          return (
            (i = a.call(arguments, 2)),
            ((n = function () {
              return t.apply(e || this, i.concat(a.call(arguments)));
            }).guid = t.guid = t.guid || T.guid++),
            n
          );
      }),
        (T.holdReady = function (t) {
          t ? T.readyWait++ : T.ready(!0);
        }),
        (T.isArray = Array.isArray),
        (T.parseJSON = JSON.parse),
        (T.nodeName = k),
        (T.isFunction = _),
        (T.isWindow = g),
        (T.camelCase = V),
        (T.type = p),
        (T.now = Date.now),
        (T.isNumeric = function (t) {
          var e = T.type(t);
          return (
            ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
          );
        }),
        (T.trim = function (t) {
          return null == t ? "" : (t + "").replace(Je, "");
        }),
        void 0 ===
          (ni = function () {
            return T;
          }.apply(ii, [])) || (ei.exports = ni);
      var Ze = x.jQuery,
        ti = x.$;
      return (
        (T.noConflict = function (t) {
          return (
            x.$ === T && (x.$ = ti), t && x.jQuery === T && (x.jQuery = Ze), T
          );
        }),
        void 0 === t && (x.jQuery = x.$ = T),
        T
      );
    });
  },
  function (t, e, i) {
    i(2), (t.exports = i(8));
  },
  function (t, e, n) {
    "use strict";
    (function (i) {
      function e(t, e, i) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = i),
          t
        );
      }
      n(3),
        n(6),
        n(7),
        i(function () {
          i(".popularCarousel").owlCarousel(
            (e(
              (t = {
                loop: !1,
                margin: 10,
                nav: !0,
                navText: [
                  "<img src='../assets/prev.png'>",
                  "<img src='../assets/next.png'>",
                ],
                dots: !1,
              }),
              "loop",
              !0
            ),
            e(t, "responsive", {
              0: { items: 1, dots: !0, navText: !1 },
              767: { items: 2, dots: !0, navText: !1 },
              1e3: { items: 5, dots: !1 },
            }),
            t)
          ),
            i(".menuBar").click(function () {
              i(".menuBar").toggleClass("openMenu"),
                i(".menuBar").hasClass("openMenu")
                  ? (i(".mobileMenu").css("right", 0),
                    i(".layoutMobile").show(),
                    i("body").css("overflow", "hidden"))
                  : (i(".mobileMenu").css("right", -320),
                    i(".layoutMobile").hide(),
                    i("body").css("overflow", "scroll"));
            }),
            i(".collapse.show").each(function () {
              i(this)
                .prev(".card-header")
                .find(".fa")
                .addClass("fa-angle-up")
                .removeClass("fa-angle-down");
            }),
            i(".collapse")
              .on("show.bs.collapse", function () {
                i(this)
                  .prev(".card-header")
                  .find(".fa")
                  .removeClass("fa-angle-down")
                  .addClass("fa-angle-up");
              })
              .on("hide.bs.collapse", function () {
                i(this)
                  .prev(".card-header")
                  .find(".fa")
                  .removeClass("fa-angle-up")
                  .addClass("fa-angle-down");
              });
          var t = i(".shopLogo").width();
          i(".shopLogo").css("height", t);
        }),
        i(function () {
          window.prettyPrint && prettyPrint(),
            i("#dp1").datepicker({ format: "mm-dd-yyyy" });
          var t = new Date(),
            e = new Date(
              t.getFullYear(),
              t.getMonth(),
              t.getDate(),
              0,
              0,
              0,
              0
            );
          i("#dpd1")
            .datepicker({
              onRender: function (t) {
                return t.valueOf() < e.valueOf() ? "disabled" : "";
              },
            })
            .on("changeDate", function (t) {
              t.date.valueOf() > checkout.date.valueOf() &&
                ((t = new Date(t.date)).setDate(t.getDate() + 1),
                checkout.setValue(t));
            });
          i("input").intlTelInput({
            utilsScript:
              "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js",
          });
        });
    }.call(this, n(0)));
  },
  function (t, e, i) {
    /*!
     * Bootstrap v4.5.3 (https://getbootstrap.com/)
     * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     */
    !(function (t, e, i) {
      "use strict";
      function n(t) {
        return t && "object" == typeof t && "default" in t ? t : { default: t };
      }
      var c = n(e),
        r = n(i);
      function s(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      function o(t, e, i) {
        return e && s(t.prototype, e), i && s(t, i), t;
      }
      function a() {
        return (a =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var i,
                n = arguments[e];
              for (i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
          }).apply(this, arguments);
      }
      var l = "transitionend";
      function u(t) {
        var e = this,
          i = !1;
        return (
          c.default(this).one(h.TRANSITION_END, function () {
            i = !0;
          }),
          setTimeout(function () {
            i || h.triggerTransitionEnd(e);
          }, t),
          this
        );
      }
      var h = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function (t) {
          for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
          return t;
        },
        getSelectorFromElement: function (t) {
          var e = t.getAttribute("data-target");
          (e && "#" !== e) ||
            (e = (t = t.getAttribute("href")) && "#" !== t ? t.trim() : "");
          try {
            return document.querySelector(e) ? e : null;
          } catch (t) {
            return null;
          }
        },
        getTransitionDurationFromElement: function (t) {
          if (!t) return 0;
          var e = c.default(t).css("transition-duration"),
            i = c.default(t).css("transition-delay"),
            n = parseFloat(e),
            t = parseFloat(i);
          return n || t
            ? ((e = e.split(",")[0]),
              (i = i.split(",")[0]),
              1e3 * (parseFloat(e) + parseFloat(i)))
            : 0;
        },
        reflow: function (t) {
          return t.offsetHeight;
        },
        triggerTransitionEnd: function (t) {
          c.default(t).trigger(l);
        },
        supportsTransitionEnd: function () {
          return Boolean(l);
        },
        isElement: function (t) {
          return (t[0] || t).nodeType;
        },
        typeCheckConfig: function (t, e, i) {
          for (var n in i)
            if (Object.prototype.hasOwnProperty.call(i, n)) {
              var s = i[n],
                r = e[n],
                o =
                  r && h.isElement(r)
                    ? "element"
                    : null == (o = r)
                    ? "" + o
                    : {}.toString
                        .call(o)
                        .match(/\s([a-z]+)/i)[1]
                        .toLowerCase();
              if (!new RegExp(s).test(o))
                throw new Error(
                  t.toUpperCase() +
                    ': Option "' +
                    n +
                    '" provided type "' +
                    o +
                    '" but expected type "' +
                    s +
                    '".'
                );
            }
          var o;
        },
        findShadowRoot: function (t) {
          if (!document.documentElement.attachShadow) return null;
          if ("function" != typeof t.getRootNode)
            return t instanceof ShadowRoot
              ? t
              : t.parentNode
              ? h.findShadowRoot(t.parentNode)
              : null;
          t = t.getRootNode();
          return t instanceof ShadowRoot ? t : null;
        },
        jQueryDetection: function () {
          if (void 0 === c.default)
            throw new TypeError(
              "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
            );
          var t = c.default.fn.jquery.split(" ")[0].split(".");
          if (
            (t[0] < 2 && t[1] < 9) ||
            (1 === t[0] && 9 === t[1] && t[2] < 1) ||
            4 <= t[0]
          )
            throw new Error(
              "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
            );
        },
      };
      h.jQueryDetection(),
        (c.default.fn.emulateTransitionEnd = u),
        (c.default.event.special[h.TRANSITION_END] = {
          bindType: l,
          delegateType: l,
          handle: function (t) {
            if (c.default(t.target).is(this))
              return t.handleObj.handler.apply(this, arguments);
          },
        });
      var d = "alert",
        f = "bs.alert",
        p = "." + f,
        g = c.default.fn[d],
        m = (function () {
          function n(t) {
            this._element = t;
          }
          var t = n.prototype;
          return (
            (t.close = function (t) {
              var e = this._element;
              t && (e = this._getRootElement(t)),
                this._triggerCloseEvent(e).isDefaultPrevented() ||
                  this._removeElement(e);
            }),
            (t.dispose = function () {
              c.default.removeData(this._element, f), (this._element = null);
            }),
            (t._getRootElement = function (t) {
              var e = h.getSelectorFromElement(t),
                i = !1;
              return (
                e && (i = document.querySelector(e)),
                (i = i || c.default(t).closest(".alert")[0])
              );
            }),
            (t._triggerCloseEvent = function (t) {
              var e = c.default.Event("close.bs.alert");
              return c.default(t).trigger(e), e;
            }),
            (t._removeElement = function (e) {
              var t,
                i = this;
              c.default(e).removeClass("show"),
                c.default(e).hasClass("fade")
                  ? ((t = h.getTransitionDurationFromElement(e)),
                    c
                      .default(e)
                      .one(h.TRANSITION_END, function (t) {
                        return i._destroyElement(e, t);
                      })
                      .emulateTransitionEnd(t))
                  : this._destroyElement(e);
            }),
            (t._destroyElement = function (t) {
              c.default(t).detach().trigger("closed.bs.alert").remove();
            }),
            (n._jQueryInterface = function (i) {
              return this.each(function () {
                var t = c.default(this),
                  e = t.data(f);
                e || ((e = new n(this)), t.data(f, e)),
                  "close" === i && e[i](this);
              });
            }),
            (n._handleDismiss = function (e) {
              return function (t) {
                t && t.preventDefault(), e.close(this);
              };
            }),
            o(n, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.5.3";
                },
              },
            ]),
            n
          );
        })();
      c
        .default(document)
        .on(
          "click.bs.alert.data-api",
          '[data-dismiss="alert"]',
          m._handleDismiss(new m())
        ),
        (c.default.fn[d] = m._jQueryInterface),
        (c.default.fn[d].Constructor = m),
        (c.default.fn[d].noConflict = function () {
          return (c.default.fn[d] = g), m._jQueryInterface;
        });
      var v = "button",
        y = "bs.button",
        e = "." + y,
        i = ".data-api",
        _ = c.default.fn[v],
        w = "active",
        p = '[data-toggle^="button"]',
        b = 'input:not([type="hidden"])',
        x = (function () {
          function s(t) {
            (this._element = t), (this.shouldAvoidTriggerChange = !1);
          }
          var t = s.prototype;
          return (
            (t.toggle = function () {
              var t,
                e = !0,
                i = !0,
                n = c
                  .default(this._element)
                  .closest('[data-toggle="buttons"]')[0];
              !n ||
                ((t = this._element.querySelector(b)) &&
                  ("radio" === t.type &&
                    (t.checked && this._element.classList.contains(w)
                      ? (e = !1)
                      : (n = n.querySelector(".active")) &&
                        c.default(n).removeClass(w)),
                  e &&
                    (("checkbox" !== t.type && "radio" !== t.type) ||
                      (t.checked = !this._element.classList.contains(w)),
                    this.shouldAvoidTriggerChange ||
                      c.default(t).trigger("change")),
                  t.focus(),
                  (i = !1))),
                this._element.hasAttribute("disabled") ||
                  this._element.classList.contains("disabled") ||
                  (i &&
                    this._element.setAttribute(
                      "aria-pressed",
                      !this._element.classList.contains(w)
                    ),
                  e && c.default(this._element).toggleClass(w));
            }),
            (t.dispose = function () {
              c.default.removeData(this._element, y), (this._element = null);
            }),
            (s._jQueryInterface = function (i, n) {
              return this.each(function () {
                var t = c.default(this),
                  e = t.data(y);
                e || ((e = new s(this)), t.data(y, e)),
                  (e.shouldAvoidTriggerChange = n),
                  "toggle" === i && e[i]();
              });
            }),
            o(s, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.5.3";
                },
              },
            ]),
            s
          );
        })();
      c
        .default(document)
        .on("click.bs.button.data-api", p, function (t) {
          var e,
            i = t.target,
            n = i;
          c.default(i).hasClass("btn") || (i = c.default(i).closest(".btn")[0]),
            !i ||
            i.hasAttribute("disabled") ||
            i.classList.contains("disabled") ||
            ((e = i.querySelector(b)) &&
              (e.hasAttribute("disabled") || e.classList.contains("disabled")))
              ? t.preventDefault()
              : ("INPUT" !== n.tagName && "LABEL" === i.tagName) ||
                x._jQueryInterface.call(
                  c.default(i),
                  "toggle",
                  "INPUT" === n.tagName
                );
        })
        .on("focus.bs.button.data-api blur.bs.button.data-api", p, function (
          t
        ) {
          var e = c.default(t.target).closest(".btn")[0];
          c.default(e).toggleClass("focus", /^focus(in)?$/.test(t.type));
        }),
        c.default(window).on("load.bs.button.data-api", function () {
          for (
            var t = [].slice.call(
                document.querySelectorAll('[data-toggle="buttons"] .btn')
              ),
              e = 0,
              i = t.length;
            e < i;
            e++
          ) {
            var n = t[e],
              s = n.querySelector(b);
            s.checked || s.hasAttribute("checked")
              ? n.classList.add(w)
              : n.classList.remove(w);
          }
          for (
            var r = 0,
              o = (t = [].slice.call(
                document.querySelectorAll('[data-toggle="button"]')
              )).length;
            r < o;
            r++
          ) {
            var a = t[r];
            "true" === a.getAttribute("aria-pressed")
              ? a.classList.add(w)
              : a.classList.remove(w);
          }
        }),
        (c.default.fn[v] = x._jQueryInterface),
        (c.default.fn[v].Constructor = x),
        (c.default.fn[v].noConflict = function () {
          return (c.default.fn[v] = _), x._jQueryInterface;
        });
      var C = "carousel",
        T = "bs.carousel",
        D = "." + T,
        e = ".data-api",
        E = c.default.fn[C],
        k = {
          interval: 5e3,
          keyboard: !0,
          slide: !1,
          pause: "hover",
          wrap: !0,
          touch: !0,
        },
        S = {
          interval: "(number|boolean)",
          keyboard: "boolean",
          slide: "(boolean|string)",
          pause: "(string|boolean)",
          wrap: "boolean",
          touch: "boolean",
        },
        N = "next",
        A = "prev",
        O = "slid" + D,
        M = "active",
        j = ".active.carousel-item",
        I = { TOUCH: "touch", PEN: "pen" },
        L = (function () {
          function s(t, e) {
            (this._items = null),
              (this._interval = null),
              (this._activeElement = null),
              (this._isPaused = !1),
              (this._isSliding = !1),
              (this.touchTimeout = null),
              (this.touchStartX = 0),
              (this.touchDeltaX = 0),
              (this._config = this._getConfig(e)),
              (this._element = t),
              (this._indicatorsElement = this._element.querySelector(
                ".carousel-indicators"
              )),
              (this._touchSupported =
                "ontouchstart" in document.documentElement ||
                0 < navigator.maxTouchPoints),
              (this._pointerEvent = Boolean(
                window.PointerEvent || window.MSPointerEvent
              )),
              this._addEventListeners();
          }
          var t = s.prototype;
          return (
            (t.next = function () {
              this._isSliding || this._slide(N);
            }),
            (t.nextWhenVisible = function () {
              var t = c.default(this._element);
              !document.hidden &&
                t.is(":visible") &&
                "hidden" !== t.css("visibility") &&
                this.next();
            }),
            (t.prev = function () {
              this._isSliding || this._slide(A);
            }),
            (t.pause = function (t) {
              t || (this._isPaused = !0),
                this._element.querySelector(
                  ".carousel-item-next, .carousel-item-prev"
                ) && (h.triggerTransitionEnd(this._element), this.cycle(!0)),
                clearInterval(this._interval),
                (this._interval = null);
            }),
            (t.cycle = function (t) {
              t || (this._isPaused = !1),
                this._interval &&
                  (clearInterval(this._interval), (this._interval = null)),
                this._config.interval &&
                  !this._isPaused &&
                  (this._interval = setInterval(
                    (document.visibilityState
                      ? this.nextWhenVisible
                      : this.next
                    ).bind(this),
                    this._config.interval
                  ));
            }),
            (t.to = function (t) {
              var e = this;
              this._activeElement = this._element.querySelector(j);
              var i = this._getItemIndex(this._activeElement);
              if (!(t > this._items.length - 1 || t < 0))
                if (this._isSliding)
                  c.default(this._element).one(O, function () {
                    return e.to(t);
                  });
                else {
                  if (i === t) return this.pause(), void this.cycle();
                  i = i < t ? N : A;
                  this._slide(i, this._items[t]);
                }
            }),
            (t.dispose = function () {
              c.default(this._element).off(D),
                c.default.removeData(this._element, T),
                (this._items = null),
                (this._config = null),
                (this._element = null),
                (this._interval = null),
                (this._isPaused = null),
                (this._isSliding = null),
                (this._activeElement = null),
                (this._indicatorsElement = null);
            }),
            (t._getConfig = function (t) {
              return (t = a({}, k, t)), h.typeCheckConfig(C, t, S), t;
            }),
            (t._handleSwipe = function () {
              var t = Math.abs(this.touchDeltaX);
              t <= 40 ||
                ((t = t / this.touchDeltaX),
                (this.touchDeltaX = 0) < t && this.prev(),
                t < 0 && this.next());
            }),
            (t._addEventListeners = function () {
              var e = this;
              this._config.keyboard &&
                c
                  .default(this._element)
                  .on("keydown.bs.carousel", function (t) {
                    return e._keydown(t);
                  }),
                "hover" === this._config.pause &&
                  c
                    .default(this._element)
                    .on("mouseenter.bs.carousel", function (t) {
                      return e.pause(t);
                    })
                    .on("mouseleave.bs.carousel", function (t) {
                      return e.cycle(t);
                    }),
                this._config.touch && this._addTouchEventListeners();
            }),
            (t._addTouchEventListeners = function () {
              var t,
                e,
                i = this;
              this._touchSupported &&
                ((t = function (t) {
                  i._pointerEvent &&
                  I[t.originalEvent.pointerType.toUpperCase()]
                    ? (i.touchStartX = t.originalEvent.clientX)
                    : i._pointerEvent ||
                      (i.touchStartX = t.originalEvent.touches[0].clientX);
                }),
                (e = function (t) {
                  i._pointerEvent &&
                    I[t.originalEvent.pointerType.toUpperCase()] &&
                    (i.touchDeltaX = t.originalEvent.clientX - i.touchStartX),
                    i._handleSwipe(),
                    "hover" === i._config.pause &&
                      (i.pause(),
                      i.touchTimeout && clearTimeout(i.touchTimeout),
                      (i.touchTimeout = setTimeout(function (t) {
                        return i.cycle(t);
                      }, 500 + i._config.interval)));
                }),
                c
                  .default(this._element.querySelectorAll(".carousel-item img"))
                  .on("dragstart.bs.carousel", function (t) {
                    return t.preventDefault();
                  }),
                this._pointerEvent
                  ? (c.default(this._element).on("pointerdown.bs.carousel", t),
                    c.default(this._element).on("pointerup.bs.carousel", e),
                    this._element.classList.add("pointer-event"))
                  : (c.default(this._element).on("touchstart.bs.carousel", t),
                    c
                      .default(this._element)
                      .on("touchmove.bs.carousel", function (t) {
                        (t = t).originalEvent.touches &&
                        1 < t.originalEvent.touches.length
                          ? (i.touchDeltaX = 0)
                          : (i.touchDeltaX =
                              t.originalEvent.touches[0].clientX -
                              i.touchStartX);
                      }),
                    c.default(this._element).on("touchend.bs.carousel", e)));
            }),
            (t._keydown = function (t) {
              if (!/input|textarea/i.test(t.target.tagName))
                switch (t.which) {
                  case 37:
                    t.preventDefault(), this.prev();
                    break;
                  case 39:
                    t.preventDefault(), this.next();
                }
            }),
            (t._getItemIndex = function (t) {
              return (
                (this._items =
                  t && t.parentNode
                    ? [].slice.call(
                        t.parentNode.querySelectorAll(".carousel-item")
                      )
                    : []),
                this._items.indexOf(t)
              );
            }),
            (t._getItemByDirection = function (t, e) {
              var i = t === N,
                n = t === A,
                s = this._getItemIndex(e),
                r = this._items.length - 1;
              if (((n && 0 === s) || (i && s === r)) && !this._config.wrap)
                return e;
              t = (s + (t === A ? -1 : 1)) % this._items.length;
              return -1 == t
                ? this._items[this._items.length - 1]
                : this._items[t];
            }),
            (t._triggerSlideEvent = function (t, e) {
              var i = this._getItemIndex(t),
                n = this._getItemIndex(this._element.querySelector(j)),
                i = c.default.Event("slide.bs.carousel", {
                  relatedTarget: t,
                  direction: e,
                  from: n,
                  to: i,
                });
              return c.default(this._element).trigger(i), i;
            }),
            (t._setActiveIndicatorElement = function (t) {
              var e;
              this._indicatorsElement &&
                ((e = [].slice.call(
                  this._indicatorsElement.querySelectorAll(".active")
                )),
                c.default(e).removeClass(M),
                (t = this._indicatorsElement.children[this._getItemIndex(t)]) &&
                  c.default(t).addClass(M));
            }),
            (t._slide = function (t, e) {
              var i,
                n,
                s,
                r = this,
                o = this._element.querySelector(j),
                a = this._getItemIndex(o),
                l = e || (o && this._getItemByDirection(t, o)),
                u = this._getItemIndex(l),
                e = Boolean(this._interval),
                t =
                  t === N
                    ? ((i = "carousel-item-left"),
                      (n = "carousel-item-next"),
                      "left")
                    : ((i = "carousel-item-right"),
                      (n = "carousel-item-prev"),
                      "right");
              l && c.default(l).hasClass(M)
                ? (this._isSliding = !1)
                : this._triggerSlideEvent(l, t).isDefaultPrevented() ||
                  (o &&
                    l &&
                    ((this._isSliding = !0),
                    e && this.pause(),
                    this._setActiveIndicatorElement(l),
                    (s = c.default.Event(O, {
                      relatedTarget: l,
                      direction: t,
                      from: a,
                      to: u,
                    })),
                    c.default(this._element).hasClass("slide")
                      ? (c.default(l).addClass(n),
                        h.reflow(l),
                        c.default(o).addClass(i),
                        c.default(l).addClass(i),
                        (u = parseInt(l.getAttribute("data-interval"), 10))
                          ? ((this._config.defaultInterval =
                              this._config.defaultInterval ||
                              this._config.interval),
                            (this._config.interval = u))
                          : (this._config.interval =
                              this._config.defaultInterval ||
                              this._config.interval),
                        (u = h.getTransitionDurationFromElement(o)),
                        c
                          .default(o)
                          .one(h.TRANSITION_END, function () {
                            c
                              .default(l)
                              .removeClass(i + " " + n)
                              .addClass(M),
                              c.default(o).removeClass(M + " " + n + " " + i),
                              (r._isSliding = !1),
                              setTimeout(function () {
                                return c.default(r._element).trigger(s);
                              }, 0);
                          })
                          .emulateTransitionEnd(u))
                      : (c.default(o).removeClass(M),
                        c.default(l).addClass(M),
                        (this._isSliding = !1),
                        c.default(this._element).trigger(s)),
                    e && this.cycle()));
            }),
            (s._jQueryInterface = function (n) {
              return this.each(function () {
                var t = c.default(this).data(T),
                  e = a({}, k, c.default(this).data());
                "object" == typeof n && (e = a({}, e, n));
                var i = "string" == typeof n ? n : e.slide;
                if (
                  (t || ((t = new s(this, e)), c.default(this).data(T, t)),
                  "number" == typeof n)
                )
                  t.to(n);
                else if ("string" == typeof i) {
                  if (void 0 === t[i])
                    throw new TypeError('No method named "' + i + '"');
                  t[i]();
                } else e.interval && e.ride && (t.pause(), t.cycle());
              });
            }),
            (s._dataApiClickHandler = function (t) {
              var e,
                i,
                n = h.getSelectorFromElement(this);
              !n ||
                ((e = c.default(n)[0]) &&
                  c.default(e).hasClass("carousel") &&
                  ((i = a({}, c.default(e).data(), c.default(this).data())),
                  (n = this.getAttribute("data-slide-to")) && (i.interval = !1),
                  s._jQueryInterface.call(c.default(e), i),
                  n && c.default(e).data(T).to(n),
                  t.preventDefault()));
            }),
            o(s, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.5.3";
                },
              },
              {
                key: "Default",
                get: function () {
                  return k;
                },
              },
            ]),
            s
          );
        })();
      c
        .default(document)
        .on(
          "click.bs.carousel.data-api",
          "[data-slide], [data-slide-to]",
          L._dataApiClickHandler
        ),
        c.default(window).on("load.bs.carousel.data-api", function () {
          for (
            var t = [].slice.call(
                document.querySelectorAll('[data-ride="carousel"]')
              ),
              e = 0,
              i = t.length;
            e < i;
            e++
          ) {
            var n = c.default(t[e]);
            L._jQueryInterface.call(n, n.data());
          }
        }),
        (c.default.fn[C] = L._jQueryInterface),
        (c.default.fn[C].Constructor = L),
        (c.default.fn[C].noConflict = function () {
          return (c.default.fn[C] = E), L._jQueryInterface;
        });
      var P = "collapse",
        F = "bs.collapse",
        i = "." + F,
        H = c.default.fn[P],
        q = { toggle: !0, parent: "" },
        R = { toggle: "boolean", parent: "(string|element)" },
        U = "show",
        $ = "collapse",
        W = "collapsing",
        z = "collapsed",
        B = '[data-toggle="collapse"]',
        V = (function () {
          function r(e, t) {
            (this._isTransitioning = !1),
              (this._element = e),
              (this._config = this._getConfig(t)),
              (this._triggerArray = [].slice.call(
                document.querySelectorAll(
                  '[data-toggle="collapse"][href="#' +
                    e.id +
                    '"],[data-toggle="collapse"][data-target="#' +
                    e.id +
                    '"]'
                )
              ));
            for (
              var i = [].slice.call(document.querySelectorAll(B)),
                n = 0,
                s = i.length;
              n < s;
              n++
            ) {
              var r = i[n],
                o = h.getSelectorFromElement(r),
                a = [].slice
                  .call(document.querySelectorAll(o))
                  .filter(function (t) {
                    return t === e;
                  });
              null !== o &&
                0 < a.length &&
                ((this._selector = o), this._triggerArray.push(r));
            }
            (this._parent = this._config.parent ? this._getParent() : null),
              this._config.parent ||
                this._addAriaAndCollapsedClass(
                  this._element,
                  this._triggerArray
                ),
              this._config.toggle && this.toggle();
          }
          var t = r.prototype;
          return (
            (t.toggle = function () {
              c.default(this._element).hasClass(U) ? this.hide() : this.show();
            }),
            (t.show = function () {
              var t,
                e,
                i,
                n,
                s = this;
              this._isTransitioning ||
                c.default(this._element).hasClass(U) ||
                (this._parent &&
                  0 ===
                    (n = [].slice
                      .call(this._parent.querySelectorAll(".show, .collapsing"))
                      .filter(function (t) {
                        return "string" == typeof s._config.parent
                          ? t.getAttribute("data-parent") === s._config.parent
                          : t.classList.contains($);
                      })).length &&
                  (n = null),
                (n &&
                  (i = c.default(n).not(this._selector).data(F)) &&
                  i._isTransitioning) ||
                  ((t = c.default.Event("show.bs.collapse")),
                  c.default(this._element).trigger(t),
                  t.isDefaultPrevented() ||
                    (n &&
                      (r._jQueryInterface.call(
                        c.default(n).not(this._selector),
                        "hide"
                      ),
                      i || c.default(n).data(F, null)),
                    (e = this._getDimension()),
                    c.default(this._element).removeClass($).addClass(W),
                    (this._element.style[e] = 0),
                    this._triggerArray.length &&
                      c
                        .default(this._triggerArray)
                        .removeClass(z)
                        .attr("aria-expanded", !0),
                    this.setTransitioning(!0),
                    (i = "scroll" + (e[0].toUpperCase() + e.slice(1))),
                    (n = h.getTransitionDurationFromElement(this._element)),
                    c
                      .default(this._element)
                      .one(h.TRANSITION_END, function () {
                        c
                          .default(s._element)
                          .removeClass(W)
                          .addClass($ + " " + U),
                          (s._element.style[e] = ""),
                          s.setTransitioning(!1),
                          c.default(s._element).trigger("shown.bs.collapse");
                      })
                      .emulateTransitionEnd(n),
                    (this._element.style[e] = this._element[i] + "px"))));
            }),
            (t.hide = function () {
              var t = this;
              if (
                !this._isTransitioning &&
                c.default(this._element).hasClass(U)
              ) {
                var e = c.default.Event("hide.bs.collapse");
                if (
                  (c.default(this._element).trigger(e), !e.isDefaultPrevented())
                ) {
                  e = this._getDimension();
                  (this._element.style[e] =
                    this._element.getBoundingClientRect()[e] + "px"),
                    h.reflow(this._element),
                    c
                      .default(this._element)
                      .addClass(W)
                      .removeClass($ + " " + U);
                  var i = this._triggerArray.length;
                  if (0 < i)
                    for (var n = 0; n < i; n++) {
                      var s = this._triggerArray[n],
                        r = h.getSelectorFromElement(s);
                      null !== r &&
                        (c
                          .default([].slice.call(document.querySelectorAll(r)))
                          .hasClass(U) ||
                          c.default(s).addClass(z).attr("aria-expanded", !1));
                    }
                  this.setTransitioning(!0);
                  this._element.style[e] = "";
                  e = h.getTransitionDurationFromElement(this._element);
                  c.default(this._element)
                    .one(h.TRANSITION_END, function () {
                      t.setTransitioning(!1),
                        c
                          .default(t._element)
                          .removeClass(W)
                          .addClass($)
                          .trigger("hidden.bs.collapse");
                    })
                    .emulateTransitionEnd(e);
                }
              }
            }),
            (t.setTransitioning = function (t) {
              this._isTransitioning = t;
            }),
            (t.dispose = function () {
              c.default.removeData(this._element, F),
                (this._config = null),
                (this._parent = null),
                (this._element = null),
                (this._triggerArray = null),
                (this._isTransitioning = null);
            }),
            (t._getConfig = function (t) {
              return (
                ((t = a({}, q, t)).toggle = Boolean(t.toggle)),
                h.typeCheckConfig(P, t, R),
                t
              );
            }),
            (t._getDimension = function () {
              return c.default(this._element).hasClass("width")
                ? "width"
                : "height";
            }),
            (t._getParent = function () {
              var t,
                i = this;
              h.isElement(this._config.parent)
                ? ((t = this._config.parent),
                  void 0 !== this._config.parent.jquery &&
                    (t = this._config.parent[0]))
                : (t = document.querySelector(this._config.parent));
              var e =
                  '[data-toggle="collapse"][data-parent="' +
                  this._config.parent +
                  '"]',
                e = [].slice.call(t.querySelectorAll(e));
              return (
                c.default(e).each(function (t, e) {
                  i._addAriaAndCollapsedClass(r._getTargetFromElement(e), [e]);
                }),
                t
              );
            }),
            (t._addAriaAndCollapsedClass = function (t, e) {
              t = c.default(t).hasClass(U);
              e.length &&
                c.default(e).toggleClass(z, !t).attr("aria-expanded", t);
            }),
            (r._getTargetFromElement = function (t) {
              t = h.getSelectorFromElement(t);
              return t ? document.querySelector(t) : null;
            }),
            (r._jQueryInterface = function (n) {
              return this.each(function () {
                var t = c.default(this),
                  e = t.data(F),
                  i = a({}, q, t.data(), "object" == typeof n && n ? n : {});
                if (
                  (!e &&
                    i.toggle &&
                    "string" == typeof n &&
                    /show|hide/.test(n) &&
                    (i.toggle = !1),
                  e || ((e = new r(this, i)), t.data(F, e)),
                  "string" == typeof n)
                ) {
                  if (void 0 === e[n])
                    throw new TypeError('No method named "' + n + '"');
                  e[n]();
                }
              });
            }),
            o(r, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.5.3";
                },
              },
              {
                key: "Default",
                get: function () {
                  return q;
                },
              },
            ]),
            r
          );
        })();
      c.default(document).on("click.bs.collapse.data-api", B, function (t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var i = c.default(this),
          t = h.getSelectorFromElement(this),
          t = [].slice.call(document.querySelectorAll(t));
        c.default(t).each(function () {
          var t = c.default(this),
            e = t.data(F) ? "toggle" : i.data();
          V._jQueryInterface.call(t, e);
        });
      }),
        (c.default.fn[P] = V._jQueryInterface),
        (c.default.fn[P].Constructor = V),
        (c.default.fn[P].noConflict = function () {
          return (c.default.fn[P] = H), V._jQueryInterface;
        });
      var Y = "dropdown",
        Q = "bs.dropdown",
        X = "." + Q,
        p = ".data-api",
        K = c.default.fn[Y],
        G = new RegExp("38|40|27"),
        J = "hide" + X,
        Z = "hidden" + X,
        e = "click" + X + p,
        i = "keydown" + X + p,
        tt = "disabled",
        et = "show",
        it = "dropdown-menu-right",
        nt = '[data-toggle="dropdown"]',
        st = ".dropdown-menu",
        rt = {
          offset: 0,
          flip: !0,
          boundary: "scrollParent",
          reference: "toggle",
          display: "dynamic",
          popperConfig: null,
        },
        ot = {
          offset: "(number|string|function)",
          flip: "boolean",
          boundary: "(string|element)",
          reference: "(string|element)",
          display: "string",
          popperConfig: "(null|object)",
        },
        at = (function () {
          function u(t, e) {
            (this._element = t),
              (this._popper = null),
              (this._config = this._getConfig(e)),
              (this._menu = this._getMenuElement()),
              (this._inNavbar = this._detectNavbar()),
              this._addEventListeners();
          }
          var t = u.prototype;
          return (
            (t.toggle = function () {
              var t;
              this._element.disabled ||
                c.default(this._element).hasClass(tt) ||
                ((t = c.default(this._menu).hasClass(et)),
                u._clearMenus(),
                t || this.show(!0));
            }),
            (t.show = function (t) {
              if (
                (void 0 === t && (t = !1),
                !(
                  this._element.disabled ||
                  c.default(this._element).hasClass(tt) ||
                  c.default(this._menu).hasClass(et)
                ))
              ) {
                var e = { relatedTarget: this._element },
                  i = c.default.Event("show.bs.dropdown", e),
                  n = u._getParentFromElement(this._element);
                if ((c.default(n).trigger(i), !i.isDefaultPrevented())) {
                  if (!this._inNavbar && t) {
                    if (void 0 === r.default)
                      throw new TypeError(
                        "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                      );
                    t = this._element;
                    "parent" === this._config.reference
                      ? (t = n)
                      : h.isElement(this._config.reference) &&
                        ((t = this._config.reference),
                        void 0 !== this._config.reference.jquery &&
                          (t = this._config.reference[0])),
                      "scrollParent" !== this._config.boundary &&
                        c.default(n).addClass("position-static"),
                      (this._popper = new r.default(
                        t,
                        this._menu,
                        this._getPopperConfig()
                      ));
                  }
                  "ontouchstart" in document.documentElement &&
                    0 === c.default(n).closest(".navbar-nav").length &&
                    c
                      .default(document.body)
                      .children()
                      .on("mouseover", null, c.default.noop),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    c.default(this._menu).toggleClass(et),
                    c
                      .default(n)
                      .toggleClass(et)
                      .trigger(c.default.Event("shown.bs.dropdown", e));
                }
              }
            }),
            (t.hide = function () {
              var t, e, i;
              this._element.disabled ||
                c.default(this._element).hasClass(tt) ||
                !c.default(this._menu).hasClass(et) ||
                ((t = { relatedTarget: this._element }),
                (e = c.default.Event(J, t)),
                (i = u._getParentFromElement(this._element)),
                c.default(i).trigger(e),
                e.isDefaultPrevented() ||
                  (this._popper && this._popper.destroy(),
                  c.default(this._menu).toggleClass(et),
                  c.default(i).toggleClass(et).trigger(c.default.Event(Z, t))));
            }),
            (t.dispose = function () {
              c.default.removeData(this._element, Q),
                c.default(this._element).off(X),
                (this._element = null),
                (this._menu = null) !== this._popper &&
                  (this._popper.destroy(), (this._popper = null));
            }),
            (t.update = function () {
              (this._inNavbar = this._detectNavbar()),
                null !== this._popper && this._popper.scheduleUpdate();
            }),
            (t._addEventListeners = function () {
              var e = this;
              c.default(this._element).on("click.bs.dropdown", function (t) {
                t.preventDefault(), t.stopPropagation(), e.toggle();
              });
            }),
            (t._getConfig = function (t) {
              return (
                (t = a(
                  {},
                  this.constructor.Default,
                  c.default(this._element).data(),
                  t
                )),
                h.typeCheckConfig(Y, t, this.constructor.DefaultType),
                t
              );
            }),
            (t._getMenuElement = function () {
              var t;
              return (
                this._menu ||
                  ((t = u._getParentFromElement(this._element)) &&
                    (this._menu = t.querySelector(st))),
                this._menu
              );
            }),
            (t._getPlacement = function () {
              var t = c.default(this._element.parentNode),
                e = "bottom-start";
              return (
                t.hasClass("dropup")
                  ? (e = c.default(this._menu).hasClass(it)
                      ? "top-end"
                      : "top-start")
                  : t.hasClass("dropright")
                  ? (e = "right-start")
                  : t.hasClass("dropleft")
                  ? (e = "left-start")
                  : c.default(this._menu).hasClass(it) && (e = "bottom-end"),
                e
              );
            }),
            (t._detectNavbar = function () {
              return 0 < c.default(this._element).closest(".navbar").length;
            }),
            (t._getOffset = function () {
              var e = this,
                t = {};
              return (
                "function" == typeof this._config.offset
                  ? (t.fn = function (t) {
                      return (
                        (t.offsets = a(
                          {},
                          t.offsets,
                          e._config.offset(t.offsets, e._element) || {}
                        )),
                        t
                      );
                    })
                  : (t.offset = this._config.offset),
                t
              );
            }),
            (t._getPopperConfig = function () {
              var t = {
                placement: this._getPlacement(),
                modifiers: {
                  offset: this._getOffset(),
                  flip: { enabled: this._config.flip },
                  preventOverflow: { boundariesElement: this._config.boundary },
                },
              };
              return (
                "static" === this._config.display &&
                  (t.modifiers.applyStyle = { enabled: !1 }),
                a({}, t, this._config.popperConfig)
              );
            }),
            (u._jQueryInterface = function (e) {
              return this.each(function () {
                var t = c.default(this).data(Q);
                if (
                  (t ||
                    ((t = new u(this, "object" == typeof e ? e : null)),
                    c.default(this).data(Q, t)),
                  "string" == typeof e)
                ) {
                  if (void 0 === t[e])
                    throw new TypeError('No method named "' + e + '"');
                  t[e]();
                }
              });
            }),
            (u._clearMenus = function (t) {
              if (
                !t ||
                (3 !== t.which && ("keyup" !== t.type || 9 === t.which))
              )
                for (
                  var e = [].slice.call(document.querySelectorAll(nt)),
                    i = 0,
                    n = e.length;
                  i < n;
                  i++
                ) {
                  var s,
                    r,
                    o = u._getParentFromElement(e[i]),
                    a = c.default(e[i]).data(Q),
                    l = { relatedTarget: e[i] };
                  t && "click" === t.type && (l.clickEvent = t),
                    a &&
                      ((s = a._menu),
                      c.default(o).hasClass(et) &&
                        ((t &&
                          (("click" === t.type &&
                            /input|textarea/i.test(t.target.tagName)) ||
                            ("keyup" === t.type && 9 === t.which)) &&
                          c.default.contains(o, t.target)) ||
                          ((r = c.default.Event(J, l)),
                          c.default(o).trigger(r),
                          r.isDefaultPrevented() ||
                            ("ontouchstart" in document.documentElement &&
                              c
                                .default(document.body)
                                .children()
                                .off("mouseover", null, c.default.noop),
                            e[i].setAttribute("aria-expanded", "false"),
                            a._popper && a._popper.destroy(),
                            c.default(s).removeClass(et),
                            c
                              .default(o)
                              .removeClass(et)
                              .trigger(c.default.Event(Z, l))))));
                }
            }),
            (u._getParentFromElement = function (t) {
              var e,
                i = h.getSelectorFromElement(t);
              return i && (e = document.querySelector(i)), e || t.parentNode;
            }),
            (u._dataApiKeydownHandler = function (t) {
              if (
                (/input|textarea/i.test(t.target.tagName)
                  ? !(
                      32 === t.which ||
                      (27 !== t.which &&
                        ((40 !== t.which && 38 !== t.which) ||
                          c.default(t.target).closest(st).length))
                    )
                  : G.test(t.which)) &&
                !this.disabled &&
                !c.default(this).hasClass(tt)
              ) {
                var e = u._getParentFromElement(this),
                  i = c.default(e).hasClass(et);
                if (i || 27 !== t.which) {
                  if (
                    (t.preventDefault(),
                    t.stopPropagation(),
                    !i || 27 === t.which || 32 === t.which)
                  )
                    return (
                      27 === t.which &&
                        c.default(e.querySelector(nt)).trigger("focus"),
                      void c.default(this).trigger("click")
                    );
                  i = [].slice
                    .call(
                      e.querySelectorAll(
                        ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                      )
                    )
                    .filter(function (t) {
                      return c.default(t).is(":visible");
                    });
                  0 !== i.length &&
                    ((e = i.indexOf(t.target)),
                    38 === t.which && 0 < e && e--,
                    40 === t.which && e < i.length - 1 && e++,
                    e < 0 && (e = 0),
                    i[e].focus());
                }
              }
            }),
            o(u, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.5.3";
                },
              },
              {
                key: "Default",
                get: function () {
                  return rt;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return ot;
                },
              },
            ]),
            u
          );
        })();
      c
        .default(document)
        .on(i, nt, at._dataApiKeydownHandler)
        .on(i, st, at._dataApiKeydownHandler)
        .on(e + " keyup.bs.dropdown.data-api", at._clearMenus)
        .on(e, nt, function (t) {
          t.preventDefault(),
            t.stopPropagation(),
            at._jQueryInterface.call(c.default(this), "toggle");
        })
        .on(e, ".dropdown form", function (t) {
          t.stopPropagation();
        }),
        (c.default.fn[Y] = at._jQueryInterface),
        (c.default.fn[Y].Constructor = at),
        (c.default.fn[Y].noConflict = function () {
          return (c.default.fn[Y] = K), at._jQueryInterface;
        });
      var lt = "modal",
        ut = "bs.modal",
        ct = "." + ut,
        ht = c.default.fn[lt],
        dt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        ft = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          focus: "boolean",
          show: "boolean",
        },
        pt = "hidden" + ct,
        gt = "show" + ct,
        mt = "focusin" + ct,
        vt = "resize" + ct,
        yt = "click.dismiss" + ct,
        _t = "keydown.dismiss" + ct,
        wt = "mousedown.dismiss" + ct,
        bt = "modal-open",
        xt = "fade",
        Ct = "show",
        Tt = "modal-static",
        Dt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        Et = ".sticky-top",
        kt = (function () {
          function s(t, e) {
            (this._config = this._getConfig(e)),
              (this._element = t),
              (this._dialog = t.querySelector(".modal-dialog")),
              (this._backdrop = null),
              (this._isShown = !1),
              (this._isBodyOverflowing = !1),
              (this._ignoreBackdropClick = !1),
              (this._isTransitioning = !1),
              (this._scrollbarWidth = 0);
          }
          var t = s.prototype;
          return (
            (t.toggle = function (t) {
              return this._isShown ? this.hide() : this.show(t);
            }),
            (t.show = function (t) {
              var e,
                i = this;
              this._isShown ||
                this._isTransitioning ||
                (c.default(this._element).hasClass(xt) &&
                  (this._isTransitioning = !0),
                (e = c.default.Event(gt, { relatedTarget: t })),
                c.default(this._element).trigger(e),
                this._isShown ||
                  e.isDefaultPrevented() ||
                  ((this._isShown = !0),
                  this._checkScrollbar(),
                  this._setScrollbar(),
                  this._adjustDialog(),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  c
                    .default(this._element)
                    .on(yt, '[data-dismiss="modal"]', function (t) {
                      return i.hide(t);
                    }),
                  c.default(this._dialog).on(wt, function () {
                    c.default(i._element).one(
                      "mouseup.dismiss.bs.modal",
                      function (t) {
                        c.default(t.target).is(i._element) &&
                          (i._ignoreBackdropClick = !0);
                      }
                    );
                  }),
                  this._showBackdrop(function () {
                    return i._showElement(t);
                  })));
            }),
            (t.hide = function (t) {
              var e = this;
              t && t.preventDefault(),
                this._isShown &&
                  !this._isTransitioning &&
                  ((t = c.default.Event("hide.bs.modal")),
                  c.default(this._element).trigger(t),
                  this._isShown &&
                    !t.isDefaultPrevented() &&
                    ((this._isShown = !1),
                    (t = c.default(this._element).hasClass(xt)) &&
                      (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    c.default(document).off(mt),
                    c.default(this._element).removeClass(Ct),
                    c.default(this._element).off(yt),
                    c.default(this._dialog).off(wt),
                    t
                      ? ((t = h.getTransitionDurationFromElement(
                          this._element
                        )),
                        c
                          .default(this._element)
                          .one(h.TRANSITION_END, function (t) {
                            return e._hideModal(t);
                          })
                          .emulateTransitionEnd(t))
                      : this._hideModal()));
            }),
            (t.dispose = function () {
              [window, this._element, this._dialog].forEach(function (t) {
                return c.default(t).off(ct);
              }),
                c.default(document).off(mt),
                c.default.removeData(this._element, ut),
                (this._config = null),
                (this._element = null),
                (this._dialog = null),
                (this._backdrop = null),
                (this._isShown = null),
                (this._isBodyOverflowing = null),
                (this._ignoreBackdropClick = null),
                (this._isTransitioning = null),
                (this._scrollbarWidth = null);
            }),
            (t.handleUpdate = function () {
              this._adjustDialog();
            }),
            (t._getConfig = function (t) {
              return (t = a({}, dt, t)), h.typeCheckConfig(lt, t, ft), t;
            }),
            (t._triggerBackdropTransition = function () {
              var t,
                e,
                i,
                n = this;
              "static" === this._config.backdrop
                ? ((t = c.default.Event("hidePrevented.bs.modal")),
                  c.default(this._element).trigger(t),
                  t.isDefaultPrevented() ||
                    ((e =
                      this._element.scrollHeight >
                      document.documentElement.clientHeight) ||
                      (this._element.style.overflowY = "hidden"),
                    this._element.classList.add(Tt),
                    (i = h.getTransitionDurationFromElement(this._dialog)),
                    c.default(this._element).off(h.TRANSITION_END),
                    c
                      .default(this._element)
                      .one(h.TRANSITION_END, function () {
                        n._element.classList.remove(Tt),
                          e ||
                            c
                              .default(n._element)
                              .one(h.TRANSITION_END, function () {
                                n._element.style.overflowY = "";
                              })
                              .emulateTransitionEnd(n._element, i);
                      })
                      .emulateTransitionEnd(i),
                    this._element.focus()))
                : this.hide();
            }),
            (t._showElement = function (t) {
              var e = this,
                i = c.default(this._element).hasClass(xt),
                n = this._dialog
                  ? this._dialog.querySelector(".modal-body")
                  : null;
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                document.body.appendChild(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                c.default(this._dialog).hasClass("modal-dialog-scrollable") && n
                  ? (n.scrollTop = 0)
                  : (this._element.scrollTop = 0),
                i && h.reflow(this._element),
                c.default(this._element).addClass(Ct),
                this._config.focus && this._enforceFocus();
              var s = c.default.Event("shown.bs.modal", { relatedTarget: t }),
                t = function () {
                  e._config.focus && e._element.focus(),
                    (e._isTransitioning = !1),
                    c.default(e._element).trigger(s);
                };
              i
                ? ((i = h.getTransitionDurationFromElement(this._dialog)),
                  c
                    .default(this._dialog)
                    .one(h.TRANSITION_END, t)
                    .emulateTransitionEnd(i))
                : t();
            }),
            (t._enforceFocus = function () {
              var e = this;
              c.default(document)
                .off(mt)
                .on(mt, function (t) {
                  document !== t.target &&
                    e._element !== t.target &&
                    0 === c.default(e._element).has(t.target).length &&
                    e._element.focus();
                });
            }),
            (t._setEscapeEvent = function () {
              var e = this;
              this._isShown
                ? c.default(this._element).on(_t, function (t) {
                    e._config.keyboard && 27 === t.which
                      ? (t.preventDefault(), e.hide())
                      : e._config.keyboard ||
                        27 !== t.which ||
                        e._triggerBackdropTransition();
                  })
                : this._isShown || c.default(this._element).off(_t);
            }),
            (t._setResizeEvent = function () {
              var e = this;
              this._isShown
                ? c.default(window).on(vt, function (t) {
                    return e.handleUpdate(t);
                  })
                : c.default(window).off(vt);
            }),
            (t._hideModal = function () {
              var t = this;
              (this._element.style.display = "none"),
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._isTransitioning = !1),
                this._showBackdrop(function () {
                  c.default(document.body).removeClass(bt),
                    t._resetAdjustments(),
                    t._resetScrollbar(),
                    c.default(t._element).trigger(pt);
                });
            }),
            (t._removeBackdrop = function () {
              this._backdrop &&
                (c.default(this._backdrop).remove(), (this._backdrop = null));
            }),
            (t._showBackdrop = function (t) {
              var e,
                i = this,
                n = c.default(this._element).hasClass(xt) ? xt : "";
              this._isShown && this._config.backdrop
                ? ((this._backdrop = document.createElement("div")),
                  (this._backdrop.className = "modal-backdrop"),
                  n && this._backdrop.classList.add(n),
                  c.default(this._backdrop).appendTo(document.body),
                  c.default(this._element).on(yt, function (t) {
                    i._ignoreBackdropClick
                      ? (i._ignoreBackdropClick = !1)
                      : t.target === t.currentTarget &&
                        i._triggerBackdropTransition();
                  }),
                  n && h.reflow(this._backdrop),
                  c.default(this._backdrop).addClass(Ct),
                  t &&
                    (n
                      ? ((e = h.getTransitionDurationFromElement(
                          this._backdrop
                        )),
                        c
                          .default(this._backdrop)
                          .one(h.TRANSITION_END, t)
                          .emulateTransitionEnd(e))
                      : t()))
                : !this._isShown && this._backdrop
                ? (c.default(this._backdrop).removeClass(Ct),
                  (n = function () {
                    i._removeBackdrop(), t && t();
                  }),
                  c.default(this._element).hasClass(xt)
                    ? ((e = h.getTransitionDurationFromElement(this._backdrop)),
                      c
                        .default(this._backdrop)
                        .one(h.TRANSITION_END, n)
                        .emulateTransitionEnd(e))
                    : n())
                : t && t();
            }),
            (t._adjustDialog = function () {
              var t =
                this._element.scrollHeight >
                document.documentElement.clientHeight;
              !this._isBodyOverflowing &&
                t &&
                (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                this._isBodyOverflowing &&
                  !t &&
                  (this._element.style.paddingRight =
                    this._scrollbarWidth + "px");
            }),
            (t._resetAdjustments = function () {
              (this._element.style.paddingLeft = ""),
                (this._element.style.paddingRight = "");
            }),
            (t._checkScrollbar = function () {
              var t = document.body.getBoundingClientRect();
              (this._isBodyOverflowing =
                Math.round(t.left + t.right) < window.innerWidth),
                (this._scrollbarWidth = this._getScrollbarWidth());
            }),
            (t._setScrollbar = function () {
              var t,
                e,
                s = this;
              this._isBodyOverflowing &&
                ((t = [].slice.call(document.querySelectorAll(Dt))),
                (e = [].slice.call(document.querySelectorAll(Et))),
                c.default(t).each(function (t, e) {
                  var i = e.style.paddingRight,
                    n = c.default(e).css("padding-right");
                  c.default(e)
                    .data("padding-right", i)
                    .css(
                      "padding-right",
                      parseFloat(n) + s._scrollbarWidth + "px"
                    );
                }),
                c.default(e).each(function (t, e) {
                  var i = e.style.marginRight,
                    n = c.default(e).css("margin-right");
                  c.default(e)
                    .data("margin-right", i)
                    .css(
                      "margin-right",
                      parseFloat(n) - s._scrollbarWidth + "px"
                    );
                }),
                (t = document.body.style.paddingRight),
                (e = c.default(document.body).css("padding-right")),
                c
                  .default(document.body)
                  .data("padding-right", t)
                  .css(
                    "padding-right",
                    parseFloat(e) + this._scrollbarWidth + "px"
                  )),
                c.default(document.body).addClass(bt);
            }),
            (t._resetScrollbar = function () {
              var t = [].slice.call(document.querySelectorAll(Dt));
              c.default(t).each(function (t, e) {
                var i = c.default(e).data("padding-right");
                c.default(e).removeData("padding-right"),
                  (e.style.paddingRight = i || "");
              });
              t = [].slice.call(document.querySelectorAll(Et));
              c.default(t).each(function (t, e) {
                var i = c.default(e).data("margin-right");
                void 0 !== i &&
                  c
                    .default(e)
                    .css("margin-right", i)
                    .removeData("margin-right");
              });
              t = c.default(document.body).data("padding-right");
              c.default(document.body).removeData("padding-right"),
                (document.body.style.paddingRight = t || "");
            }),
            (t._getScrollbarWidth = function () {
              var t = document.createElement("div");
              (t.className = "modal-scrollbar-measure"),
                document.body.appendChild(t);
              var e = t.getBoundingClientRect().width - t.clientWidth;
              return document.body.removeChild(t), e;
            }),
            (s._jQueryInterface = function (i, n) {
              return this.each(function () {
                var t = c.default(this).data(ut),
                  e = a(
                    {},
                    dt,
                    c.default(this).data(),
                    "object" == typeof i && i ? i : {}
                  );
                if (
                  (t || ((t = new s(this, e)), c.default(this).data(ut, t)),
                  "string" == typeof i)
                ) {
                  if (void 0 === t[i])
                    throw new TypeError('No method named "' + i + '"');
                  t[i](n);
                } else e.show && t.show(n);
              });
            }),
            o(s, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.5.3";
                },
              },
              {
                key: "Default",
                get: function () {
                  return dt;
                },
              },
            ]),
            s
          );
        })();
      c
        .default(document)
        .on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
          var e,
            i = this,
            n = h.getSelectorFromElement(this);
          n && (e = document.querySelector(n));
          n = c.default(e).data(ut)
            ? "toggle"
            : a({}, c.default(e).data(), c.default(this).data());
          ("A" !== this.tagName && "AREA" !== this.tagName) ||
            t.preventDefault();
          var s = c.default(e).one(gt, function (t) {
            t.isDefaultPrevented() ||
              s.one(pt, function () {
                c.default(i).is(":visible") && i.focus();
              });
          });
          kt._jQueryInterface.call(c.default(e), n, this);
        }),
        (c.default.fn[lt] = kt._jQueryInterface),
        (c.default.fn[lt].Constructor = kt),
        (c.default.fn[lt].noConflict = function () {
          return (c.default.fn[lt] = ht), kt._jQueryInterface;
        });
      var St = [
          "background",
          "cite",
          "href",
          "itemtype",
          "longdesc",
          "poster",
          "src",
          "xlink:href",
        ],
        e = {
          "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "srcset", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
        },
        Nt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        At = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
      function Ot(t, r, e) {
        if (0 === t.length) return t;
        if (e && "function" == typeof e) return e(t);
        for (
          var t = new window.DOMParser().parseFromString(t, "text/html"),
            o = Object.keys(r),
            a = [].slice.call(t.body.querySelectorAll("*")),
            i = function (t, e) {
              var i = a[t],
                n = i.nodeName.toLowerCase();
              if (-1 === o.indexOf(i.nodeName.toLowerCase()))
                return i.parentNode.removeChild(i), "continue";
              var t = [].slice.call(i.attributes),
                s = [].concat(r["*"] || [], r[n] || []);
              t.forEach(function (t) {
                !(function (t, e) {
                  var i = t.nodeName.toLowerCase();
                  if (-1 !== e.indexOf(i))
                    return (
                      -1 === St.indexOf(i) ||
                      Boolean(t.nodeValue.match(Nt) || t.nodeValue.match(At))
                    );
                  for (
                    var n = e.filter(function (t) {
                        return t instanceof RegExp;
                      }),
                      s = 0,
                      r = n.length;
                    s < r;
                    s++
                  )
                    if (i.match(n[s])) return 1;
                })(t, s) && i.removeAttribute(t.nodeName);
              });
            },
            n = 0,
            s = a.length;
          n < s;
          n++
        )
          i(n);
        return t.body.innerHTML;
      }
      var Mt = "tooltip",
        jt = "bs.tooltip",
        It = "." + jt,
        Lt = c.default.fn[Mt],
        Pt = "bs-tooltip",
        Ft = new RegExp("(^|\\s)" + Pt + "\\S+", "g"),
        Ht = ["sanitize", "whiteList", "sanitizeFn"],
        qt = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(number|string|function)",
          container: "(string|element|boolean)",
          fallbackPlacement: "(string|array)",
          boundary: "(string|element)",
          sanitize: "boolean",
          sanitizeFn: "(null|function)",
          whiteList: "object",
          popperConfig: "(null|object)",
        },
        Rt = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: "right",
          BOTTOM: "bottom",
          LEFT: "left",
        },
        Ut = {
          animation: !0,
          template:
            '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
          trigger: "hover focus",
          title: "",
          delay: 0,
          html: !1,
          selector: !1,
          placement: "top",
          offset: 0,
          container: !1,
          fallbackPlacement: "flip",
          boundary: "scrollParent",
          sanitize: !0,
          sanitizeFn: null,
          whiteList: e,
          popperConfig: null,
        },
        $t = "show",
        Wt = {
          HIDE: "hide" + It,
          HIDDEN: "hidden" + It,
          SHOW: "show" + It,
          SHOWN: "shown" + It,
          INSERTED: "inserted" + It,
          CLICK: "click" + It,
          FOCUSIN: "focusin" + It,
          FOCUSOUT: "focusout" + It,
          MOUSEENTER: "mouseenter" + It,
          MOUSELEAVE: "mouseleave" + It,
        },
        zt = "fade",
        Bt = "show",
        Vt = "hover",
        Yt = "focus",
        Qt = (function () {
          function s(t, e) {
            if (void 0 === r.default)
              throw new TypeError(
                "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
              );
            (this._isEnabled = !0),
              (this._timeout = 0),
              (this._hoverState = ""),
              (this._activeTrigger = {}),
              (this._popper = null),
              (this.element = t),
              (this.config = this._getConfig(e)),
              (this.tip = null),
              this._setListeners();
          }
          var t = s.prototype;
          return (
            (t.enable = function () {
              this._isEnabled = !0;
            }),
            (t.disable = function () {
              this._isEnabled = !1;
            }),
            (t.toggleEnabled = function () {
              this._isEnabled = !this._isEnabled;
            }),
            (t.toggle = function (t) {
              var e, i;
              this._isEnabled &&
                (t
                  ? ((e = this.constructor.DATA_KEY),
                    (i = c.default(t.currentTarget).data(e)) ||
                      ((i = new this.constructor(
                        t.currentTarget,
                        this._getDelegateConfig()
                      )),
                      c.default(t.currentTarget).data(e, i)),
                    (i._activeTrigger.click = !i._activeTrigger.click),
                    i._isWithActiveTrigger()
                      ? i._enter(null, i)
                      : i._leave(null, i))
                  : c.default(this.getTipElement()).hasClass(Bt)
                  ? this._leave(null, this)
                  : this._enter(null, this));
            }),
            (t.dispose = function () {
              clearTimeout(this._timeout),
                c.default.removeData(this.element, this.constructor.DATA_KEY),
                c.default(this.element).off(this.constructor.EVENT_KEY),
                c
                  .default(this.element)
                  .closest(".modal")
                  .off("hide.bs.modal", this._hideModalHandler),
                this.tip && c.default(this.tip).remove(),
                (this._isEnabled = null),
                (this._timeout = null),
                (this._hoverState = null),
                (this._activeTrigger = null),
                this._popper && this._popper.destroy(),
                (this._popper = null),
                (this.element = null),
                (this.config = null),
                (this.tip = null);
            }),
            (t.show = function () {
              var e = this;
              if ("none" === c.default(this.element).css("display"))
                throw new Error("Please use show on visible elements");
              var t,
                i,
                n = c.default.Event(this.constructor.Event.SHOW);
              this.isWithContent() &&
                this._isEnabled &&
                (c.default(this.element).trigger(n),
                (i = h.findShadowRoot(this.element)),
                (t = c.default.contains(
                  null !== i ? i : this.element.ownerDocument.documentElement,
                  this.element
                )),
                !n.isDefaultPrevented() &&
                  t &&
                  ((i = this.getTipElement()),
                  (n = h.getUID(this.constructor.NAME)),
                  i.setAttribute("id", n),
                  this.element.setAttribute("aria-describedby", n),
                  this.setContent(),
                  this.config.animation && c.default(i).addClass(zt),
                  (t =
                    "function" == typeof this.config.placement
                      ? this.config.placement.call(this, i, this.element)
                      : this.config.placement),
                  (n = this._getAttachment(t)),
                  this.addAttachmentClass(n),
                  (t = this._getContainer()),
                  c.default(i).data(this.constructor.DATA_KEY, this),
                  c.default.contains(
                    this.element.ownerDocument.documentElement,
                    this.tip
                  ) || c.default(i).appendTo(t),
                  c
                    .default(this.element)
                    .trigger(this.constructor.Event.INSERTED),
                  (this._popper = new r.default(
                    this.element,
                    i,
                    this._getPopperConfig(n)
                  )),
                  c.default(i).addClass(Bt),
                  "ontouchstart" in document.documentElement &&
                    c
                      .default(document.body)
                      .children()
                      .on("mouseover", null, c.default.noop),
                  (n = function () {
                    e.config.animation && e._fixTransition();
                    var t = e._hoverState;
                    (e._hoverState = null),
                      c.default(e.element).trigger(e.constructor.Event.SHOWN),
                      "out" === t && e._leave(null, e);
                  }),
                  c.default(this.tip).hasClass(zt)
                    ? ((i = h.getTransitionDurationFromElement(this.tip)),
                      c
                        .default(this.tip)
                        .one(h.TRANSITION_END, n)
                        .emulateTransitionEnd(i))
                    : n()));
            }),
            (t.hide = function (t) {
              function e() {
                i._hoverState !== $t &&
                  n.parentNode &&
                  n.parentNode.removeChild(n),
                  i._cleanTipClass(),
                  i.element.removeAttribute("aria-describedby"),
                  c.default(i.element).trigger(i.constructor.Event.HIDDEN),
                  null !== i._popper && i._popper.destroy(),
                  t && t();
              }
              var i = this,
                n = this.getTipElement(),
                s = c.default.Event(this.constructor.Event.HIDE);
              c.default(this.element).trigger(s),
                s.isDefaultPrevented() ||
                  (c.default(n).removeClass(Bt),
                  "ontouchstart" in document.documentElement &&
                    c
                      .default(document.body)
                      .children()
                      .off("mouseover", null, c.default.noop),
                  (this._activeTrigger.click = !1),
                  (this._activeTrigger[Yt] = !1),
                  (this._activeTrigger[Vt] = !1),
                  c.default(this.tip).hasClass(zt)
                    ? ((s = h.getTransitionDurationFromElement(n)),
                      c
                        .default(n)
                        .one(h.TRANSITION_END, e)
                        .emulateTransitionEnd(s))
                    : e(),
                  (this._hoverState = ""));
            }),
            (t.update = function () {
              null !== this._popper && this._popper.scheduleUpdate();
            }),
            (t.isWithContent = function () {
              return Boolean(this.getTitle());
            }),
            (t.addAttachmentClass = function (t) {
              c.default(this.getTipElement()).addClass(Pt + "-" + t);
            }),
            (t.getTipElement = function () {
              return (
                (this.tip = this.tip || c.default(this.config.template)[0]),
                this.tip
              );
            }),
            (t.setContent = function () {
              var t = this.getTipElement();
              this.setElementContent(
                c.default(t.querySelectorAll(".tooltip-inner")),
                this.getTitle()
              ),
                c.default(t).removeClass(zt + " " + Bt);
            }),
            (t.setElementContent = function (t, e) {
              "object" != typeof e || (!e.nodeType && !e.jquery)
                ? this.config.html
                  ? (this.config.sanitize &&
                      (e = Ot(
                        e,
                        this.config.whiteList,
                        this.config.sanitizeFn
                      )),
                    t.html(e))
                  : t.text(e)
                : this.config.html
                ? c.default(e).parent().is(t) || t.empty().append(e)
                : t.text(c.default(e).text());
            }),
            (t.getTitle = function () {
              return (
                this.element.getAttribute("data-original-title") ||
                ("function" == typeof this.config.title
                  ? this.config.title.call(this.element)
                  : this.config.title)
              );
            }),
            (t._getPopperConfig = function (t) {
              var e = this;
              return a(
                {},
                {
                  placement: t,
                  modifiers: {
                    offset: this._getOffset(),
                    flip: { behavior: this.config.fallbackPlacement },
                    arrow: { element: ".arrow" },
                    preventOverflow: {
                      boundariesElement: this.config.boundary,
                    },
                  },
                  onCreate: function (t) {
                    t.originalPlacement !== t.placement &&
                      e._handlePopperPlacementChange(t);
                  },
                  onUpdate: function (t) {
                    return e._handlePopperPlacementChange(t);
                  },
                },
                this.config.popperConfig
              );
            }),
            (t._getOffset = function () {
              var e = this,
                t = {};
              return (
                "function" == typeof this.config.offset
                  ? (t.fn = function (t) {
                      return (
                        (t.offsets = a(
                          {},
                          t.offsets,
                          e.config.offset(t.offsets, e.element) || {}
                        )),
                        t
                      );
                    })
                  : (t.offset = this.config.offset),
                t
              );
            }),
            (t._getContainer = function () {
              return !1 === this.config.container
                ? document.body
                : h.isElement(this.config.container)
                ? c.default(this.config.container)
                : c.default(document).find(this.config.container);
            }),
            (t._getAttachment = function (t) {
              return Rt[t.toUpperCase()];
            }),
            (t._setListeners = function () {
              var i = this;
              this.config.trigger.split(" ").forEach(function (t) {
                var e;
                "click" === t
                  ? c
                      .default(i.element)
                      .on(
                        i.constructor.Event.CLICK,
                        i.config.selector,
                        function (t) {
                          return i.toggle(t);
                        }
                      )
                  : "manual" !== t &&
                    ((e =
                      t === Vt
                        ? i.constructor.Event.MOUSEENTER
                        : i.constructor.Event.FOCUSIN),
                    (t =
                      t === Vt
                        ? i.constructor.Event.MOUSELEAVE
                        : i.constructor.Event.FOCUSOUT),
                    c
                      .default(i.element)
                      .on(e, i.config.selector, function (t) {
                        return i._enter(t);
                      })
                      .on(t, i.config.selector, function (t) {
                        return i._leave(t);
                      }));
              }),
                (this._hideModalHandler = function () {
                  i.element && i.hide();
                }),
                c
                  .default(this.element)
                  .closest(".modal")
                  .on("hide.bs.modal", this._hideModalHandler),
                this.config.selector
                  ? (this.config = a({}, this.config, {
                      trigger: "manual",
                      selector: "",
                    }))
                  : this._fixTitle();
            }),
            (t._fixTitle = function () {
              var t = typeof this.element.getAttribute("data-original-title");
              (!this.element.getAttribute("title") && "string" == t) ||
                (this.element.setAttribute(
                  "data-original-title",
                  this.element.getAttribute("title") || ""
                ),
                this.element.setAttribute("title", ""));
            }),
            (t._enter = function (t, e) {
              var i = this.constructor.DATA_KEY;
              (e = e || c.default(t.currentTarget).data(i)) ||
                ((e = new this.constructor(
                  t.currentTarget,
                  this._getDelegateConfig()
                )),
                c.default(t.currentTarget).data(i, e)),
                t && (e._activeTrigger["focusin" === t.type ? Yt : Vt] = !0),
                c.default(e.getTipElement()).hasClass(Bt) ||
                e._hoverState === $t
                  ? (e._hoverState = $t)
                  : (clearTimeout(e._timeout),
                    (e._hoverState = $t),
                    e.config.delay && e.config.delay.show
                      ? (e._timeout = setTimeout(function () {
                          e._hoverState === $t && e.show();
                        }, e.config.delay.show))
                      : e.show());
            }),
            (t._leave = function (t, e) {
              var i = this.constructor.DATA_KEY;
              (e = e || c.default(t.currentTarget).data(i)) ||
                ((e = new this.constructor(
                  t.currentTarget,
                  this._getDelegateConfig()
                )),
                c.default(t.currentTarget).data(i, e)),
                t && (e._activeTrigger["focusout" === t.type ? Yt : Vt] = !1),
                e._isWithActiveTrigger() ||
                  (clearTimeout(e._timeout),
                  (e._hoverState = "out"),
                  e.config.delay && e.config.delay.hide
                    ? (e._timeout = setTimeout(function () {
                        "out" === e._hoverState && e.hide();
                      }, e.config.delay.hide))
                    : e.hide());
            }),
            (t._isWithActiveTrigger = function () {
              for (var t in this._activeTrigger)
                if (this._activeTrigger[t]) return !0;
              return !1;
            }),
            (t._getConfig = function (t) {
              var e = c.default(this.element).data();
              return (
                Object.keys(e).forEach(function (t) {
                  -1 !== Ht.indexOf(t) && delete e[t];
                }),
                "number" ==
                  typeof (t = a(
                    {},
                    this.constructor.Default,
                    e,
                    "object" == typeof t && t ? t : {}
                  )).delay && (t.delay = { show: t.delay, hide: t.delay }),
                "number" == typeof t.title && (t.title = t.title.toString()),
                "number" == typeof t.content &&
                  (t.content = t.content.toString()),
                h.typeCheckConfig(Mt, t, this.constructor.DefaultType),
                t.sanitize &&
                  (t.template = Ot(t.template, t.whiteList, t.sanitizeFn)),
                t
              );
            }),
            (t._getDelegateConfig = function () {
              var t = {};
              if (this.config)
                for (var e in this.config)
                  this.constructor.Default[e] !== this.config[e] &&
                    (t[e] = this.config[e]);
              return t;
            }),
            (t._cleanTipClass = function () {
              var t = c.default(this.getTipElement()),
                e = t.attr("class").match(Ft);
              null !== e && e.length && t.removeClass(e.join(""));
            }),
            (t._handlePopperPlacementChange = function (t) {
              (this.tip = t.instance.popper),
                this._cleanTipClass(),
                this.addAttachmentClass(this._getAttachment(t.placement));
            }),
            (t._fixTransition = function () {
              var t = this.getTipElement(),
                e = this.config.animation;
              null === t.getAttribute("x-placement") &&
                (c.default(t).removeClass(zt),
                (this.config.animation = !1),
                this.hide(),
                this.show(),
                (this.config.animation = e));
            }),
            (s._jQueryInterface = function (n) {
              return this.each(function () {
                var t = c.default(this),
                  e = t.data(jt),
                  i = "object" == typeof n && n;
                if (
                  (e || !/dispose|hide/.test(n)) &&
                  (e || ((e = new s(this, i)), t.data(jt, e)),
                  "string" == typeof n)
                ) {
                  if (void 0 === e[n])
                    throw new TypeError('No method named "' + n + '"');
                  e[n]();
                }
              });
            }),
            o(s, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.5.3";
                },
              },
              {
                key: "Default",
                get: function () {
                  return Ut;
                },
              },
              {
                key: "NAME",
                get: function () {
                  return Mt;
                },
              },
              {
                key: "DATA_KEY",
                get: function () {
                  return jt;
                },
              },
              {
                key: "Event",
                get: function () {
                  return Wt;
                },
              },
              {
                key: "EVENT_KEY",
                get: function () {
                  return It;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return qt;
                },
              },
            ]),
            s
          );
        })();
      (c.default.fn[Mt] = Qt._jQueryInterface),
        (c.default.fn[Mt].Constructor = Qt),
        (c.default.fn[Mt].noConflict = function () {
          return (c.default.fn[Mt] = Lt), Qt._jQueryInterface;
        });
      var Xt = "popover",
        Kt = "bs.popover",
        Gt = "." + Kt,
        Jt = c.default.fn[Xt],
        Zt = "bs-popover",
        te = new RegExp("(^|\\s)" + Zt + "\\S+", "g"),
        ee = a({}, Qt.Default, {
          placement: "right",
          trigger: "click",
          content: "",
          template:
            '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        }),
        ie = a({}, Qt.DefaultType, { content: "(string|element|function)" }),
        ne = {
          HIDE: "hide" + Gt,
          HIDDEN: "hidden" + Gt,
          SHOW: "show" + Gt,
          SHOWN: "shown" + Gt,
          INSERTED: "inserted" + Gt,
          CLICK: "click" + Gt,
          FOCUSIN: "focusin" + Gt,
          FOCUSOUT: "focusout" + Gt,
          MOUSEENTER: "mouseenter" + Gt,
          MOUSELEAVE: "mouseleave" + Gt,
        },
        se = (function (t) {
          var e;
          function n() {
            return t.apply(this, arguments) || this;
          }
          (i = t),
            ((e = n).prototype = Object.create(i.prototype)),
            ((e.prototype.constructor = e).__proto__ = i);
          var i = n.prototype;
          return (
            (i.isWithContent = function () {
              return this.getTitle() || this._getContent();
            }),
            (i.addAttachmentClass = function (t) {
              c.default(this.getTipElement()).addClass(Zt + "-" + t);
            }),
            (i.getTipElement = function () {
              return (
                (this.tip = this.tip || c.default(this.config.template)[0]),
                this.tip
              );
            }),
            (i.setContent = function () {
              var t = c.default(this.getTipElement());
              this.setElementContent(
                t.find(".popover-header"),
                this.getTitle()
              );
              var e = this._getContent();
              "function" == typeof e && (e = e.call(this.element)),
                this.setElementContent(t.find(".popover-body"), e),
                t.removeClass("fade show");
            }),
            (i._getContent = function () {
              return (
                this.element.getAttribute("data-content") || this.config.content
              );
            }),
            (i._cleanTipClass = function () {
              var t = c.default(this.getTipElement()),
                e = t.attr("class").match(te);
              null !== e && 0 < e.length && t.removeClass(e.join(""));
            }),
            (n._jQueryInterface = function (i) {
              return this.each(function () {
                var t = c.default(this).data(Kt),
                  e = "object" == typeof i ? i : null;
                if (
                  (t || !/dispose|hide/.test(i)) &&
                  (t || ((t = new n(this, e)), c.default(this).data(Kt, t)),
                  "string" == typeof i)
                ) {
                  if (void 0 === t[i])
                    throw new TypeError('No method named "' + i + '"');
                  t[i]();
                }
              });
            }),
            o(n, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.5.3";
                },
              },
              {
                key: "Default",
                get: function () {
                  return ee;
                },
              },
              {
                key: "NAME",
                get: function () {
                  return Xt;
                },
              },
              {
                key: "DATA_KEY",
                get: function () {
                  return Kt;
                },
              },
              {
                key: "Event",
                get: function () {
                  return ne;
                },
              },
              {
                key: "EVENT_KEY",
                get: function () {
                  return Gt;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return ie;
                },
              },
            ]),
            n
          );
        })(Qt);
      (c.default.fn[Xt] = se._jQueryInterface),
        (c.default.fn[Xt].Constructor = se),
        (c.default.fn[Xt].noConflict = function () {
          return (c.default.fn[Xt] = Jt), se._jQueryInterface;
        });
      var re = "scrollspy",
        oe = "bs.scrollspy",
        ae = "." + oe,
        le = c.default.fn[re],
        ue = { offset: 10, method: "auto", target: "" },
        ce = { offset: "number", method: "string", target: "(string|element)" },
        he = "active",
        de = ".nav, .list-group",
        fe = ".nav-link",
        pe = ".list-group-item",
        ge = "position",
        me = (function () {
          function i(t, e) {
            var i = this;
            (this._element = t),
              (this._scrollElement = "BODY" === t.tagName ? window : t),
              (this._config = this._getConfig(e)),
              (this._selector =
                this._config.target +
                " " +
                fe +
                "," +
                this._config.target +
                " " +
                pe +
                "," +
                this._config.target +
                " .dropdown-item"),
              (this._offsets = []),
              (this._targets = []),
              (this._activeTarget = null),
              (this._scrollHeight = 0),
              c
                .default(this._scrollElement)
                .on("scroll.bs.scrollspy", function (t) {
                  return i._process(t);
                }),
              this.refresh(),
              this._process();
          }
          var t = i.prototype;
          return (
            (t.refresh = function () {
              var e = this,
                t =
                  this._scrollElement === this._scrollElement.window
                    ? "offset"
                    : ge,
                n = "auto" === this._config.method ? t : this._config.method,
                s = n === ge ? this._getScrollTop() : 0;
              (this._offsets = []),
                (this._targets = []),
                (this._scrollHeight = this._getScrollHeight()),
                [].slice
                  .call(document.querySelectorAll(this._selector))
                  .map(function (t) {
                    var e,
                      i = h.getSelectorFromElement(t);
                    if ((i && (e = document.querySelector(i)), e)) {
                      t = e.getBoundingClientRect();
                      if (t.width || t.height)
                        return [c.default(e)[n]().top + s, i];
                    }
                    return null;
                  })
                  .filter(function (t) {
                    return t;
                  })
                  .sort(function (t, e) {
                    return t[0] - e[0];
                  })
                  .forEach(function (t) {
                    e._offsets.push(t[0]), e._targets.push(t[1]);
                  });
            }),
            (t.dispose = function () {
              c.default.removeData(this._element, oe),
                c.default(this._scrollElement).off(ae),
                (this._element = null),
                (this._scrollElement = null),
                (this._config = null),
                (this._selector = null),
                (this._offsets = null),
                (this._targets = null),
                (this._activeTarget = null),
                (this._scrollHeight = null);
            }),
            (t._getConfig = function (t) {
              var e;
              return (
                "string" !=
                  typeof (t = a({}, ue, "object" == typeof t && t ? t : {}))
                    .target &&
                  h.isElement(t.target) &&
                  ((e = c.default(t.target).attr("id")) ||
                    ((e = h.getUID(re)), c.default(t.target).attr("id", e)),
                  (t.target = "#" + e)),
                h.typeCheckConfig(re, t, ce),
                t
              );
            }),
            (t._getScrollTop = function () {
              return this._scrollElement === window
                ? this._scrollElement.pageYOffset
                : this._scrollElement.scrollTop;
            }),
            (t._getScrollHeight = function () {
              return (
                this._scrollElement.scrollHeight ||
                Math.max(
                  document.body.scrollHeight,
                  document.documentElement.scrollHeight
                )
              );
            }),
            (t._getOffsetHeight = function () {
              return this._scrollElement === window
                ? window.innerHeight
                : this._scrollElement.getBoundingClientRect().height;
            }),
            (t._process = function () {
              var t = this._getScrollTop() + this._config.offset,
                e = this._getScrollHeight(),
                i = this._config.offset + e - this._getOffsetHeight();
              if ((this._scrollHeight !== e && this.refresh(), i <= t)) {
                i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i);
              } else {
                if (
                  this._activeTarget &&
                  t < this._offsets[0] &&
                  0 < this._offsets[0]
                )
                  return (this._activeTarget = null), void this._clear();
                for (var n = this._offsets.length; n--; )
                  this._activeTarget !== this._targets[n] &&
                    t >= this._offsets[n] &&
                    (void 0 === this._offsets[n + 1] ||
                      t < this._offsets[n + 1]) &&
                    this._activate(this._targets[n]);
              }
            }),
            (t._activate = function (e) {
              (this._activeTarget = e), this._clear();
              var t = this._selector.split(",").map(function (t) {
                  return (
                    t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                  );
                }),
                t = c.default(
                  [].slice.call(document.querySelectorAll(t.join(",")))
                );
              t.hasClass("dropdown-item")
                ? (t.closest(".dropdown").find(".dropdown-toggle").addClass(he),
                  t.addClass(he))
                : (t.addClass(he),
                  t
                    .parents(de)
                    .prev(fe + ", " + pe)
                    .addClass(he),
                  t.parents(de).prev(".nav-item").children(fe).addClass(he)),
                c
                  .default(this._scrollElement)
                  .trigger("activate.bs.scrollspy", { relatedTarget: e });
            }),
            (t._clear = function () {
              [].slice
                .call(document.querySelectorAll(this._selector))
                .filter(function (t) {
                  return t.classList.contains(he);
                })
                .forEach(function (t) {
                  return t.classList.remove(he);
                });
            }),
            (i._jQueryInterface = function (e) {
              return this.each(function () {
                var t = c.default(this).data(oe);
                if (
                  (t ||
                    ((t = new i(this, "object" == typeof e && e)),
                    c.default(this).data(oe, t)),
                  "string" == typeof e)
                ) {
                  if (void 0 === t[e])
                    throw new TypeError('No method named "' + e + '"');
                  t[e]();
                }
              });
            }),
            o(i, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.5.3";
                },
              },
              {
                key: "Default",
                get: function () {
                  return ue;
                },
              },
            ]),
            i
          );
        })();
      c.default(window).on("load.bs.scrollspy.data-api", function () {
        for (
          var t = [].slice.call(
              document.querySelectorAll('[data-spy="scroll"]')
            ),
            e = t.length;
          e--;

        ) {
          var i = c.default(t[e]);
          me._jQueryInterface.call(i, i.data());
        }
      }),
        (c.default.fn[re] = me._jQueryInterface),
        (c.default.fn[re].Constructor = me),
        (c.default.fn[re].noConflict = function () {
          return (c.default.fn[re] = le), me._jQueryInterface;
        });
      var ve = "bs.tab",
        e = "." + ve,
        ye = c.default.fn.tab,
        _e = "active",
        we = ".active",
        be = "> li > .active",
        xe = (function () {
          function n(t) {
            this._element = t;
          }
          var t = n.prototype;
          return (
            (t.show = function () {
              var t,
                e,
                i,
                n,
                s,
                r,
                o = this;
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                c.default(this._element).hasClass(_e)) ||
                c.default(this._element).hasClass("disabled") ||
                ((r = c.default(this._element).closest(".nav, .list-group")[0]),
                (e = h.getSelectorFromElement(this._element)),
                r &&
                  ((s = "UL" === r.nodeName || "OL" === r.nodeName ? be : we),
                  (i = (i = c.default.makeArray(c.default(r).find(s)))[
                    i.length - 1
                  ])),
                (n = c.default.Event("hide.bs.tab", {
                  relatedTarget: this._element,
                })),
                (s = c.default.Event("show.bs.tab", { relatedTarget: i })),
                i && c.default(i).trigger(n),
                c.default(this._element).trigger(s),
                s.isDefaultPrevented() ||
                  n.isDefaultPrevented() ||
                  (e && (t = document.querySelector(e)),
                  this._activate(this._element, r),
                  (r = function () {
                    var t = c.default.Event("hidden.bs.tab", {
                        relatedTarget: o._element,
                      }),
                      e = c.default.Event("shown.bs.tab", { relatedTarget: i });
                    c.default(i).trigger(t), c.default(o._element).trigger(e);
                  }),
                  t ? this._activate(t, t.parentNode, r) : r()));
            }),
            (t.dispose = function () {
              c.default.removeData(this._element, ve), (this._element = null);
            }),
            (t._activate = function (t, e, i) {
              var n = this,
                s = (!e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
                  ? c.default(e).children(we)
                  : c.default(e).find(be))[0],
                r = i && s && c.default(s).hasClass("fade"),
                e = function () {
                  return n._transitionComplete(t, s, i);
                };
              s && r
                ? ((r = h.getTransitionDurationFromElement(s)),
                  c
                    .default(s)
                    .removeClass("show")
                    .one(h.TRANSITION_END, e)
                    .emulateTransitionEnd(r))
                : e();
            }),
            (t._transitionComplete = function (t, e, i) {
              var n;
              e &&
                (c.default(e).removeClass(_e),
                (n = c
                  .default(e.parentNode)
                  .find("> .dropdown-menu .active")[0]) &&
                  c.default(n).removeClass(_e),
                "tab" === e.getAttribute("role") &&
                  e.setAttribute("aria-selected", !1)),
                c.default(t).addClass(_e),
                "tab" === t.getAttribute("role") &&
                  t.setAttribute("aria-selected", !0),
                h.reflow(t),
                t.classList.contains("fade") && t.classList.add("show"),
                t.parentNode &&
                  c.default(t.parentNode).hasClass("dropdown-menu") &&
                  ((e = c.default(t).closest(".dropdown")[0]) &&
                    ((e = [].slice.call(
                      e.querySelectorAll(".dropdown-toggle")
                    )),
                    c.default(e).addClass(_e)),
                  t.setAttribute("aria-expanded", !0)),
                i && i();
            }),
            (n._jQueryInterface = function (i) {
              return this.each(function () {
                var t = c.default(this),
                  e = t.data(ve);
                if (
                  (e || ((e = new n(this)), t.data(ve, e)),
                  "string" == typeof i)
                ) {
                  if (void 0 === e[i])
                    throw new TypeError('No method named "' + i + '"');
                  e[i]();
                }
              });
            }),
            o(n, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.5.3";
                },
              },
            ]),
            n
          );
        })();
      c
        .default(document)
        .on(
          "click.bs.tab.data-api",
          '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
          function (t) {
            t.preventDefault(),
              xe._jQueryInterface.call(c.default(this), "show");
          }
        ),
        (c.default.fn.tab = xe._jQueryInterface),
        (c.default.fn.tab.Constructor = xe),
        (c.default.fn.tab.noConflict = function () {
          return (c.default.fn.tab = ye), xe._jQueryInterface;
        });
      var Ce = "toast",
        Te = "bs.toast",
        e = "." + Te,
        De = c.default.fn[Ce],
        Ee = "click.dismiss" + e,
        ke = "show",
        Se = "showing",
        Ne = { animation: "boolean", autohide: "boolean", delay: "number" },
        Ae = { animation: !0, autohide: !0, delay: 500 },
        Oe = (function () {
          function n(t, e) {
            (this._element = t),
              (this._config = this._getConfig(e)),
              (this._timeout = null),
              this._setListeners();
          }
          var t = n.prototype;
          return (
            (t.show = function () {
              var t,
                e = this,
                i = c.default.Event("show.bs.toast");
              c.default(this._element).trigger(i),
                i.isDefaultPrevented() ||
                  (this._clearTimeout(),
                  this._config.animation && this._element.classList.add("fade"),
                  (t = function () {
                    e._element.classList.remove(Se),
                      e._element.classList.add(ke),
                      c.default(e._element).trigger("shown.bs.toast"),
                      e._config.autohide &&
                        (e._timeout = setTimeout(function () {
                          e.hide();
                        }, e._config.delay));
                  }),
                  this._element.classList.remove("hide"),
                  h.reflow(this._element),
                  this._element.classList.add(Se),
                  this._config.animation
                    ? ((i = h.getTransitionDurationFromElement(this._element)),
                      c
                        .default(this._element)
                        .one(h.TRANSITION_END, t)
                        .emulateTransitionEnd(i))
                    : t());
            }),
            (t.hide = function () {
              var t;
              this._element.classList.contains(ke) &&
                ((t = c.default.Event("hide.bs.toast")),
                c.default(this._element).trigger(t),
                t.isDefaultPrevented() || this._close());
            }),
            (t.dispose = function () {
              this._clearTimeout(),
                this._element.classList.contains(ke) &&
                  this._element.classList.remove(ke),
                c.default(this._element).off(Ee),
                c.default.removeData(this._element, Te),
                (this._element = null),
                (this._config = null);
            }),
            (t._getConfig = function (t) {
              return (
                (t = a(
                  {},
                  Ae,
                  c.default(this._element).data(),
                  "object" == typeof t && t ? t : {}
                )),
                h.typeCheckConfig(Ce, t, this.constructor.DefaultType),
                t
              );
            }),
            (t._setListeners = function () {
              var t = this;
              c.default(this._element).on(
                Ee,
                '[data-dismiss="toast"]',
                function () {
                  return t.hide();
                }
              );
            }),
            (t._close = function () {
              function t() {
                i._element.classList.add("hide"),
                  c.default(i._element).trigger("hidden.bs.toast");
              }
              var e,
                i = this;
              this._element.classList.remove(ke),
                this._config.animation
                  ? ((e = h.getTransitionDurationFromElement(this._element)),
                    c
                      .default(this._element)
                      .one(h.TRANSITION_END, t)
                      .emulateTransitionEnd(e))
                  : t();
            }),
            (t._clearTimeout = function () {
              clearTimeout(this._timeout), (this._timeout = null);
            }),
            (n._jQueryInterface = function (i) {
              return this.each(function () {
                var t = c.default(this),
                  e = t.data(Te);
                if (
                  (e ||
                    ((e = new n(this, "object" == typeof i && i)),
                    t.data(Te, e)),
                  "string" == typeof i)
                ) {
                  if (void 0 === e[i])
                    throw new TypeError('No method named "' + i + '"');
                  e[i](this);
                }
              });
            }),
            o(n, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.5.3";
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return Ne;
                },
              },
              {
                key: "Default",
                get: function () {
                  return Ae;
                },
              },
            ]),
            n
          );
        })();
      (c.default.fn[Ce] = Oe._jQueryInterface),
        (c.default.fn[Ce].Constructor = Oe),
        (c.default.fn[Ce].noConflict = function () {
          return (c.default.fn[Ce] = De), Oe._jQueryInterface;
        }),
        (t.Alert = m),
        (t.Button = x),
        (t.Carousel = L),
        (t.Collapse = V),
        (t.Dropdown = at),
        (t.Modal = kt),
        (t.Popover = se),
        (t.Scrollspy = me),
        (t.Tab = xe),
        (t.Toast = Oe),
        (t.Tooltip = Qt),
        (t.Util = h),
        Object.defineProperty(t, "__esModule", { value: !0 });
    })(e, i(0), i(4));
  },
  function (t, tt, e) {
    "use strict";
    e.r(tt),
      function (t) {
        /**!
         * @fileOverview Kickass library to create and place poppers near their reference elements.
         * @version 1.16.1
         * @license
         * Copyright (c) 2016 Federico Zivolo and contributors
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in all
         * copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
         * SOFTWARE.
         */
        var i =
            "undefined" != typeof window &&
            "undefined" != typeof document &&
            "undefined" != typeof navigator,
          n = (function () {
            for (
              var t = ["Edge", "Trident", "Firefox"], e = 0;
              e < t.length;
              e += 1
            )
              if (i && 0 <= navigator.userAgent.indexOf(t[e])) return 1;
            return 0;
          })();
        var s =
          i && window.Promise
            ? function (t) {
                var e = !1;
                return function () {
                  e ||
                    ((e = !0),
                    window.Promise.resolve().then(function () {
                      (e = !1), t();
                    }));
                };
              }
            : function (t) {
                var e = !1;
                return function () {
                  e ||
                    ((e = !0),
                    setTimeout(function () {
                      (e = !1), t();
                    }, n));
                };
              };
        function r(t) {
          return t && "[object Function]" === {}.toString.call(t);
        }
        function h(t, e) {
          if (1 !== t.nodeType) return [];
          t = t.ownerDocument.defaultView.getComputedStyle(t, null);
          return e ? t[e] : t;
        }
        function u(t) {
          return "HTML" === t.nodeName ? t : t.parentNode || t.host;
        }
        function c(t) {
          if (!t) return document.body;
          switch (t.nodeName) {
            case "HTML":
            case "BODY":
              return t.ownerDocument.body;
            case "#document":
              return t.body;
          }
          var e = h(t),
            i = e.overflow,
            n = e.overflowX,
            e = e.overflowY;
          return /(auto|scroll|overlay)/.test(i + e + n) ? t : c(u(t));
        }
        function d(t) {
          return t && t.referenceNode ? t.referenceNode : t;
        }
        var e = i && !(!window.MSInputMethodContext || !document.documentMode),
          o = i && /MSIE 10/.test(navigator.userAgent);
        function f(t) {
          return 11 === t ? e : (10 !== t && e) || o;
        }
        function m(t) {
          if (!t) return document.documentElement;
          for (
            var e = f(10) ? document.body : null, i = t.offsetParent || null;
            i === e && t.nextElementSibling;

          )
            i = (t = t.nextElementSibling).offsetParent;
          var n = i && i.nodeName;
          return n && "BODY" !== n && "HTML" !== n
            ? -1 !== ["TH", "TD", "TABLE"].indexOf(i.nodeName) &&
              "static" === h(i, "position")
              ? m(i)
              : i
            : (t ? t.ownerDocument : document).documentElement;
        }
        function a(t) {
          return null !== t.parentNode ? a(t.parentNode) : t;
        }
        function p(t, e) {
          if (!(t && t.nodeType && e && e.nodeType))
            return document.documentElement;
          var i =
              t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            n = i ? t : e,
            s = i ? e : t,
            i = document.createRange();
          i.setStart(n, 0), i.setEnd(s, 0);
          i = i.commonAncestorContainer;
          if ((t !== i && e !== i) || n.contains(s))
            return "BODY" === (s = (n = i).nodeName) ||
              ("HTML" !== s && m(n.firstElementChild) !== n)
              ? m(i)
              : i;
          i = a(t);
          return i.host ? p(i.host, e) : p(t, a(e).host);
        }
        function g(t, e) {
          var i =
              "top" === (1 < arguments.length && void 0 !== e ? e : "top")
                ? "scrollTop"
                : "scrollLeft",
            e = t.nodeName;
          if ("BODY" !== e && "HTML" !== e) return t[i];
          e = t.ownerDocument.documentElement;
          return (t.ownerDocument.scrollingElement || e)[i];
        }
        function l(t, e) {
          var i = "x" === e ? "Left" : "Top",
            e = "Left" == i ? "Right" : "Bottom";
          return (
            parseFloat(t["border" + i + "Width"]) +
            parseFloat(t["border" + e + "Width"])
          );
        }
        function v(t, e, i, n) {
          return Math.max(
            e["offset" + t],
            e["scroll" + t],
            i["client" + t],
            i["offset" + t],
            i["scroll" + t],
            f(10)
              ? parseInt(i["offset" + t]) +
                  parseInt(n["margin" + ("Height" === t ? "Top" : "Left")]) +
                  parseInt(n["margin" + ("Height" === t ? "Bottom" : "Right")])
              : 0
          );
        }
        function y(t) {
          var e = t.body,
            i = t.documentElement,
            t = f(10) && getComputedStyle(i);
          return { height: v("Height", e, i, t), width: v("Width", e, i, t) };
        }
        var _ = function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          },
          w = function (t, e, i) {
            return e && b(t.prototype, e), i && b(t, i), t;
          };
        function b(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        function x(t, e, i) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = i),
            t
          );
        }
        var C =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var i,
                n = arguments[e];
              for (i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
          };
        function T(t) {
          return C({}, t, {
            right: t.left + t.width,
            bottom: t.top + t.height,
          });
        }
        function D(t) {
          var e,
            i,
            n = {};
          try {
            f(10)
              ? ((n = t.getBoundingClientRect()),
                (e = g(t, "top")),
                (i = g(t, "left")),
                (n.top += e),
                (n.left += i),
                (n.bottom += e),
                (n.right += i))
              : (n = t.getBoundingClientRect());
          } catch (t) {}
          var s = {
              left: n.left,
              top: n.top,
              width: n.right - n.left,
              height: n.bottom - n.top,
            },
            r = "HTML" === t.nodeName ? y(t.ownerDocument) : {},
            o = r.width || t.clientWidth || s.width,
            a = r.height || t.clientHeight || s.height,
            r = t.offsetWidth - o,
            o = t.offsetHeight - a;
          return (
            (r || o) &&
              ((r -= l((a = h(t)), "x")),
              (o -= l(a, "y")),
              (s.width -= r),
              (s.height -= o)),
            T(s)
          );
        }
        function E(t, e, i) {
          var n = 2 < arguments.length && void 0 !== i && i,
            s = f(10),
            r = "HTML" === e.nodeName,
            o = D(t),
            a = D(e),
            l = c(t),
            u = h(e),
            i = parseFloat(u.borderTopWidth),
            t = parseFloat(u.borderLeftWidth);
          n &&
            r &&
            ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
          o = T({
            top: o.top - a.top - i,
            left: o.left - a.left - t,
            width: o.width,
            height: o.height,
          });
          return (
            (o.marginTop = 0),
            (o.marginLeft = 0),
            !s &&
              r &&
              ((r = parseFloat(u.marginTop)),
              (u = parseFloat(u.marginLeft)),
              (o.top -= i - r),
              (o.bottom -= i - r),
              (o.left -= t - u),
              (o.right -= t - u),
              (o.marginTop = r),
              (o.marginLeft = u)),
            (s && !n ? e.contains(l) : e === l && "BODY" !== l.nodeName) &&
              (o = (function (t, e, i) {
                var n = 2 < arguments.length && void 0 !== i && i,
                  i = g(e, "top"),
                  e = g(e, "left"),
                  n = n ? -1 : 1;
                return (
                  (t.top += i * n),
                  (t.bottom += i * n),
                  (t.left += e * n),
                  (t.right += e * n),
                  t
                );
              })(o, e)),
            o
          );
        }
        function k(t) {
          if (!t || !t.parentElement || f()) return document.documentElement;
          for (var e = t.parentElement; e && "none" === h(e, "transform"); )
            e = e.parentElement;
          return e || document.documentElement;
        }
        function S(t, e, i, n, s) {
          var r = 4 < arguments.length && void 0 !== s && s,
            o = { top: 0, left: 0 },
            a = r ? k(t) : p(t, d(e));
          "viewport" === n
            ? (o = (function (t, e) {
                var i = 1 < arguments.length && void 0 !== e && e,
                  n = t.ownerDocument.documentElement,
                  s = E(t, n),
                  r = Math.max(n.clientWidth, window.innerWidth || 0),
                  e = Math.max(n.clientHeight, window.innerHeight || 0),
                  t = i ? 0 : g(n),
                  n = i ? 0 : g(n, "left");
                return T({
                  top: t - s.top + s.marginTop,
                  left: n - s.left + s.marginLeft,
                  width: r,
                  height: e,
                });
              })(a, r))
            : ((s = void 0),
              "scrollParent" === n
                ? "BODY" === (s = c(u(e))).nodeName &&
                  (s = t.ownerDocument.documentElement)
                : (s = "window" === n ? t.ownerDocument.documentElement : n),
              (l = E(s, a, r)),
              "HTML" !== s.nodeName ||
              (function t(e) {
                var i = e.nodeName;
                if ("BODY" === i || "HTML" === i) return !1;
                if ("fixed" === h(e, "position")) return !0;
                e = u(e);
                return !!e && t(e);
              })(a)
                ? (o = l)
                : ((t = (a = y(t.ownerDocument)).height),
                  (a = a.width),
                  (o.top += l.top - l.marginTop),
                  (o.bottom = t + l.top),
                  (o.left += l.left - l.marginLeft),
                  (o.right = a + l.left)));
          var l = "number" == typeof (i = i || 0);
          return (
            (o.left += l ? i : i.left || 0),
            (o.top += l ? i : i.top || 0),
            (o.right -= l ? i : i.right || 0),
            (o.bottom -= l ? i : i.bottom || 0),
            o
          );
        }
        function N(t, e, i, n, s, r) {
          r = 5 < arguments.length && void 0 !== r ? r : 0;
          if (-1 === t.indexOf("auto")) return t;
          var s = S(i, n, r, s),
            o = {
              top: { width: s.width, height: e.top - s.top },
              right: { width: s.right - e.right, height: s.height },
              bottom: { width: s.width, height: s.bottom - e.bottom },
              left: { width: e.left - s.left, height: s.height },
            },
            e = Object.keys(o)
              .map(function (t) {
                return C({ key: t }, o[t], {
                  area: (t = o[t]).width * t.height,
                });
              })
              .sort(function (t, e) {
                return e.area - t.area;
              }),
            s = e.filter(function (t) {
              var e = t.width,
                t = t.height;
              return e >= i.clientWidth && t >= i.clientHeight;
            }),
            e = (0 < s.length ? s : e)[0].key,
            t = t.split("-")[1];
          return e + (t ? "-" + t : "");
        }
        function A(t, e, i, n) {
          n = 3 < arguments.length && void 0 !== n ? n : null;
          return E(i, n ? k(e) : p(e, d(i)), n);
        }
        function O(t) {
          var e = t.ownerDocument.defaultView.getComputedStyle(t),
            i = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
            e = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
          return { width: t.offsetWidth + e, height: t.offsetHeight + i };
        }
        function M(t) {
          var e = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom",
          };
          return t.replace(/left|right|bottom|top/g, function (t) {
            return e[t];
          });
        }
        function j(t, e, i) {
          i = i.split("-")[0];
          var n = O(t),
            s = { width: n.width, height: n.height },
            r = -1 !== ["right", "left"].indexOf(i),
            o = r ? "top" : "left",
            a = r ? "left" : "top",
            t = r ? "height" : "width",
            r = r ? "width" : "height";
          return (
            (s[o] = e[o] + e[t] / 2 - n[t] / 2),
            (s[a] = i === a ? e[a] - n[r] : e[M(a)]),
            s
          );
        }
        function I(t, e) {
          return Array.prototype.find ? t.find(e) : t.filter(e)[0];
        }
        function L(t, i, e) {
          return (
            (void 0 === e
              ? t
              : t.slice(
                  0,
                  (function (t, e, i) {
                    if (Array.prototype.findIndex)
                      return t.findIndex(function (t) {
                        return t[e] === i;
                      });
                    var n = I(t, function (t) {
                      return t[e] === i;
                    });
                    return t.indexOf(n);
                  })(t, "name", e)
                )
            ).forEach(function (t) {
              t.function &&
                console.warn(
                  "`modifier.function` is deprecated, use `modifier.fn`!"
                );
              var e = t.function || t.fn;
              t.enabled &&
                r(e) &&
                ((i.offsets.popper = T(i.offsets.popper)),
                (i.offsets.reference = T(i.offsets.reference)),
                (i = e(i, t)));
            }),
            i
          );
        }
        function P(t, i) {
          return t.some(function (t) {
            var e = t.name;
            return t.enabled && e === i;
          });
        }
        function F(t) {
          for (
            var e = [!1, "ms", "Webkit", "Moz", "O"],
              i = t.charAt(0).toUpperCase() + t.slice(1),
              n = 0;
            n < e.length;
            n++
          ) {
            var s = e[n],
              s = s ? "" + s + i : t;
            if (void 0 !== document.body.style[s]) return s;
          }
          return null;
        }
        function H(t) {
          t = t.ownerDocument;
          return t ? t.defaultView : window;
        }
        function q(t, e, i, n) {
          (i.updateBound = n),
            H(t).addEventListener("resize", i.updateBound, { passive: !0 });
          t = c(t);
          return (
            (function t(e, i, n, s) {
              var r = "BODY" === e.nodeName,
                e = r ? e.ownerDocument.defaultView : e;
              e.addEventListener(i, n, { passive: !0 }),
                r || t(c(e.parentNode), i, n, s),
                s.push(e);
            })(t, "scroll", i.updateBound, i.scrollParents),
            (i.scrollElement = t),
            (i.eventsEnabled = !0),
            i
          );
        }
        function R() {
          var t, e;
          this.state.eventsEnabled &&
            (cancelAnimationFrame(this.scheduleUpdate),
            (this.state =
              ((t = this.reference),
              (e = this.state),
              H(t).removeEventListener("resize", e.updateBound),
              e.scrollParents.forEach(function (t) {
                t.removeEventListener("scroll", e.updateBound);
              }),
              (e.updateBound = null),
              (e.scrollParents = []),
              (e.scrollElement = null),
              (e.eventsEnabled = !1),
              e)));
        }
        function U(t) {
          return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
        }
        function $(i, n) {
          Object.keys(n).forEach(function (t) {
            var e = "";
            -1 !==
              ["width", "height", "top", "right", "bottom", "left"].indexOf(
                t
              ) &&
              U(n[t]) &&
              (e = "px"),
              (i.style[t] = n[t] + e);
          });
        }
        var W = i && /Firefox/i.test(navigator.userAgent);
        function z(t, e, i) {
          var n,
            s = I(t, function (t) {
              return t.name === e;
            }),
            r =
              !!s &&
              t.some(function (t) {
                return t.name === i && t.enabled && t.order < s.order;
              });
          return (
            r ||
              ((n = "`" + e + "`"),
              (t = "`" + i + "`"),
              console.warn(
                t +
                  " modifier is required by " +
                  n +
                  " modifier in order to work, be sure to include it before " +
                  n +
                  "!"
              )),
            r
          );
        }
        var B = [
            "auto-start",
            "auto",
            "auto-end",
            "top-start",
            "top",
            "top-end",
            "right-start",
            "right",
            "right-end",
            "bottom-end",
            "bottom",
            "bottom-start",
            "left-end",
            "left",
            "left-start",
          ],
          V = B.slice(3);
        function Y(t, e) {
          (e = 1 < arguments.length && void 0 !== e && e),
            (t = V.indexOf(t)),
            (t = V.slice(t + 1).concat(V.slice(0, t)));
          return e ? t.reverse() : t;
        }
        var Q = "flip",
          X = "clockwise",
          K = "counterclockwise";
        function G(t, s, r, e) {
          var o = [0, 0],
            a = -1 !== ["right", "left"].indexOf(e),
            i = t.split(/(\+|\-)/).map(function (t) {
              return t.trim();
            }),
            e = i.indexOf(
              I(i, function (t) {
                return -1 !== t.search(/,|\s/);
              })
            );
          i[e] &&
            -1 === i[e].indexOf(",") &&
            console.warn(
              "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
            );
          t = /\s*,\s*|\s+/;
          return (
            (-1 !== e
              ? [
                  i.slice(0, e).concat([i[e].split(t)[0]]),
                  [i[e].split(t)[1]].concat(i.slice(e + 1)),
                ]
              : [i]
            )
              .map(function (t, e) {
                var i = (1 === e ? !a : a) ? "height" : "width",
                  n = !1;
                return t
                  .reduce(function (t, e) {
                    return "" === t[t.length - 1] &&
                      -1 !== ["+", "-"].indexOf(e)
                      ? ((t[t.length - 1] = e), (n = !0), t)
                      : n
                      ? ((t[t.length - 1] += e), (n = !1), t)
                      : t.concat(e);
                  }, [])
                  .map(function (t) {
                    return (function (t, e, i, n) {
                      var s = +(r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/))[1],
                        r = r[2];
                      if (!s) return t;
                      if (0 !== r.indexOf("%"))
                        return "vh" !== r && "vw" !== r
                          ? s
                          : (("vh" === r
                              ? Math.max(
                                  document.documentElement.clientHeight,
                                  window.innerHeight || 0
                                )
                              : Math.max(
                                  document.documentElement.clientWidth,
                                  window.innerWidth || 0
                                )) /
                              100) *
                              s;
                      var o = void 0;
                      switch (r) {
                        case "%p":
                          o = i;
                          break;
                        case "%":
                        case "%r":
                        default:
                          o = n;
                      }
                      return (T(o)[e] / 100) * s;
                    })(t, i, s, r);
                  });
              })
              .forEach(function (i, n) {
                i.forEach(function (t, e) {
                  U(t) && (o[n] += t * ("-" === i[e - 1] ? -1 : 1));
                });
              }),
            o
          );
        }
        var J = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () {},
            onUpdate: function () {},
            modifiers: {
              shift: {
                order: 100,
                enabled: !0,
                fn: function (t) {
                  var e,
                    i,
                    n = t.placement,
                    s = n.split("-")[0],
                    r = n.split("-")[1];
                  return (
                    r &&
                      ((e = (i = t.offsets).reference),
                      (n = i.popper),
                      (s = (i = -1 !== ["bottom", "top"].indexOf(s))
                        ? "width"
                        : "height"),
                      (s = {
                        start: x({}, (i = i ? "left" : "top"), e[i]),
                        end: x({}, i, e[i] + e[s] - n[s]),
                      }),
                      (t.offsets.popper = C({}, n, s[r]))),
                    t
                  );
                },
              },
              offset: {
                order: 200,
                enabled: !0,
                fn: function (t, e) {
                  var i = e.offset,
                    n = t.placement,
                    s = (r = t.offsets).popper,
                    e = r.reference,
                    r = n.split("-")[0],
                    n = void 0,
                    n = U(+i) ? [+i, 0] : G(i, s, e, r);
                  return (
                    "left" === r
                      ? ((s.top += n[0]), (s.left -= n[1]))
                      : "right" === r
                      ? ((s.top += n[0]), (s.left += n[1]))
                      : "top" === r
                      ? ((s.left += n[0]), (s.top -= n[1]))
                      : "bottom" === r && ((s.left += n[0]), (s.top += n[1])),
                    (t.popper = s),
                    t
                  );
                },
                offset: 0,
              },
              preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function (t, n) {
                  var e = n.boundariesElement || m(t.instance.popper);
                  t.instance.reference === e && (e = m(e));
                  var i = F("transform"),
                    s = t.instance.popper.style,
                    r = s.top,
                    o = s.left,
                    a = s[i];
                  (s.top = ""), (s.left = ""), (s[i] = "");
                  var l = S(
                    t.instance.popper,
                    t.instance.reference,
                    n.padding,
                    e,
                    t.positionFixed
                  );
                  (s.top = r), (s.left = o), (s[i] = a), (n.boundaries = l);
                  var a = n.priority,
                    u = t.offsets.popper,
                    c = {
                      primary: function (t) {
                        var e = u[t];
                        return (
                          u[t] < l[t] &&
                            !n.escapeWithReference &&
                            (e = Math.max(u[t], l[t])),
                          x({}, t, e)
                        );
                      },
                      secondary: function (t) {
                        var e = "right" === t ? "left" : "top",
                          i = u[e];
                        return (
                          u[t] > l[t] &&
                            !n.escapeWithReference &&
                            (i = Math.min(
                              u[e],
                              l[t] - ("right" === t ? u.width : u.height)
                            )),
                          x({}, e, i)
                        );
                      },
                    };
                  return (
                    a.forEach(function (t) {
                      var e =
                        -1 !== ["left", "top"].indexOf(t)
                          ? "primary"
                          : "secondary";
                      u = C({}, u, c[e](t));
                    }),
                    (t.offsets.popper = u),
                    t
                  );
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent",
              },
              keepTogether: {
                order: 400,
                enabled: !0,
                fn: function (t) {
                  var e = (r = t.offsets).popper,
                    i = r.reference,
                    n = t.placement.split("-")[0],
                    s = Math.floor,
                    r = (o = -1 !== ["top", "bottom"].indexOf(n))
                      ? "right"
                      : "bottom",
                    n = o ? "left" : "top",
                    o = o ? "width" : "height";
                  return (
                    e[r] < s(i[n]) && (t.offsets.popper[n] = s(i[n]) - e[o]),
                    e[n] > s(i[r]) && (t.offsets.popper[n] = s(i[r])),
                    t
                  );
                },
              },
              arrow: {
                order: 500,
                enabled: !0,
                fn: function (t, e) {
                  if (!z(t.instance.modifiers, "arrow", "keepTogether"))
                    return t;
                  var i = e.element;
                  if ("string" == typeof i) {
                    if (!(i = t.instance.popper.querySelector(i))) return t;
                  } else if (!t.instance.popper.contains(i))
                    return (
                      console.warn(
                        "WARNING: `arrow.element` must be child of its popper element!"
                      ),
                      t
                    );
                  var n = t.placement.split("-")[0],
                    s = (c = t.offsets).popper,
                    r = c.reference,
                    o = -1 !== ["left", "right"].indexOf(n),
                    a = o ? "height" : "width",
                    l = o ? "Top" : "Left",
                    u = l.toLowerCase(),
                    e = o ? "left" : "top",
                    c = o ? "bottom" : "right",
                    n = O(i)[a];
                  return (
                    r[c] - n < s[u] &&
                      (t.offsets.popper[u] -= s[u] - (r[c] - n)),
                    r[u] + n > s[c] && (t.offsets.popper[u] += r[u] + n - s[c]),
                    (t.offsets.popper = T(t.offsets.popper)),
                    (o = r[u] + r[a] / 2 - n / 2),
                    (c = h(t.instance.popper)),
                    (r = parseFloat(c["margin" + l])),
                    (l = parseFloat(c["border" + l + "Width"])),
                    (l = o - t.offsets.popper[u] - r - l),
                    (l = Math.max(Math.min(s[a] - n, l), 0)),
                    (t.arrowElement = i),
                    (t.offsets.arrow =
                      (x((i = {}), u, Math.round(l)), x(i, e, ""), i)),
                    t
                  );
                },
                element: "[x-arrow]",
              },
              flip: {
                order: 600,
                enabled: !0,
                fn: function (u, c) {
                  if (P(u.instance.modifiers, "inner")) return u;
                  if (u.flipped && u.placement === u.originalPlacement)
                    return u;
                  var h = S(
                      u.instance.popper,
                      u.instance.reference,
                      c.padding,
                      c.boundariesElement,
                      u.positionFixed
                    ),
                    d = u.placement.split("-")[0],
                    f = M(d),
                    p = u.placement.split("-")[1] || "",
                    g = [];
                  switch (c.behavior) {
                    case Q:
                      g = [d, f];
                      break;
                    case X:
                      g = Y(d);
                      break;
                    case K:
                      g = Y(d, !0);
                      break;
                    default:
                      g = c.behavior;
                  }
                  return (
                    g.forEach(function (t, e) {
                      if (d !== t || g.length === e + 1) return u;
                      (d = u.placement.split("-")[0]), (f = M(d));
                      var i = u.offsets.popper,
                        n = u.offsets.reference,
                        s = Math.floor,
                        r =
                          ("left" === d && s(i.right) > s(n.left)) ||
                          ("right" === d && s(i.left) < s(n.right)) ||
                          ("top" === d && s(i.bottom) > s(n.top)) ||
                          ("bottom" === d && s(i.top) < s(n.bottom)),
                        o = s(i.left) < s(h.left),
                        a = s(i.right) > s(h.right),
                        l = s(i.top) < s(h.top),
                        t = s(i.bottom) > s(h.bottom),
                        n =
                          ("left" === d && o) ||
                          ("right" === d && a) ||
                          ("top" === d && l) ||
                          ("bottom" === d && t),
                        i = -1 !== ["top", "bottom"].indexOf(d),
                        s =
                          !!c.flipVariations &&
                          ((i && "start" === p && o) ||
                            (i && "end" === p && a) ||
                            (!i && "start" === p && l) ||
                            (!i && "end" === p && t)),
                        l =
                          !!c.flipVariationsByContent &&
                          ((i && "start" === p && a) ||
                            (i && "end" === p && o) ||
                            (!i && "start" === p && t) ||
                            (!i && "end" === p && l)),
                        l = s || l;
                      (r || n || l) &&
                        ((u.flipped = !0),
                        (r || n) && (d = g[e + 1]),
                        l &&
                          (p =
                            "end" === (l = p)
                              ? "start"
                              : "start" === l
                              ? "end"
                              : l),
                        (u.placement = d + (p ? "-" + p : "")),
                        (u.offsets.popper = C(
                          {},
                          u.offsets.popper,
                          j(u.instance.popper, u.offsets.reference, u.placement)
                        )),
                        (u = L(u.instance.modifiers, u, "flip")));
                    }),
                    u
                  );
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport",
                flipVariations: !1,
                flipVariationsByContent: !1,
              },
              inner: {
                order: 700,
                enabled: !1,
                fn: function (t) {
                  var e = t.placement,
                    i = e.split("-")[0],
                    n = (o = t.offsets).popper,
                    s = o.reference,
                    r = -1 !== ["left", "right"].indexOf(i),
                    o = -1 === ["top", "left"].indexOf(i);
                  return (
                    (n[r ? "left" : "top"] =
                      s[i] - (o ? n[r ? "width" : "height"] : 0)),
                    (t.placement = M(e)),
                    (t.offsets.popper = T(n)),
                    t
                  );
                },
              },
              hide: {
                order: 800,
                enabled: !0,
                fn: function (t) {
                  if (!z(t.instance.modifiers, "hide", "preventOverflow"))
                    return t;
                  var e = t.offsets.reference,
                    i = I(t.instance.modifiers, function (t) {
                      return "preventOverflow" === t.name;
                    }).boundaries;
                  if (
                    e.bottom < i.top ||
                    e.left > i.right ||
                    e.top > i.bottom ||
                    e.right < i.left
                  ) {
                    if (!0 === t.hide) return t;
                    (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
                  } else {
                    if (!1 === t.hide) return t;
                    (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
                  }
                  return t;
                },
              },
              computeStyle: {
                order: 850,
                enabled: !0,
                fn: function (t, e) {
                  var i = e.x,
                    n = e.y,
                    s = t.offsets.popper;
                  void 0 !==
                    (p = I(t.instance.modifiers, function (t) {
                      return "applyStyle" === t.name;
                    }).gpuAcceleration) &&
                    console.warn(
                      "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
                    );
                  var r,
                    o,
                    a,
                    l,
                    u = void 0 !== p ? p : e.gpuAcceleration,
                    c = m(t.instance.popper),
                    h = D(c),
                    d = { position: s.position },
                    f =
                      ((r = t),
                      (f = window.devicePixelRatio < 2 || !W),
                      (g = (l = r.offsets).popper),
                      (o = l.reference),
                      (a = Math.round),
                      (p = Math.floor),
                      (e = function (t) {
                        return t;
                      }),
                      (s = a(o.width)),
                      (l = a(g.width)),
                      (o = -1 !== ["left", "right"].indexOf(r.placement)),
                      (r = -1 !== r.placement.indexOf("-")),
                      (p = f ? (o || r || s % 2 == l % 2 ? a : p) : e),
                      (e = f ? a : e),
                      {
                        left: p(
                          s % 2 == 1 && l % 2 == 1 && !r && f
                            ? g.left - 1
                            : g.left
                        ),
                        top: e(g.top),
                        bottom: e(g.bottom),
                        right: p(g.right),
                      }),
                    e = "bottom" === i ? "top" : "bottom",
                    p = "right" === n ? "left" : "right",
                    g = F("transform"),
                    i = void 0,
                    n = void 0,
                    n =
                      "bottom" == e
                        ? "HTML" === c.nodeName
                          ? -c.clientHeight + f.bottom
                          : -h.height + f.bottom
                        : f.top,
                    i =
                      "right" == p
                        ? "HTML" === c.nodeName
                          ? -c.clientWidth + f.right
                          : -h.width + f.right
                        : f.left;
                  return (
                    u && g
                      ? ((d[g] = "translate3d(" + i + "px, " + n + "px, 0)"),
                        (d[e] = 0),
                        (d[p] = 0),
                        (d.willChange = "transform"))
                      : ((u = "bottom" == e ? -1 : 1),
                        (g = "right" == p ? -1 : 1),
                        (d[e] = n * u),
                        (d[p] = i * g),
                        (d.willChange = e + ", " + p)),
                    (p = { "x-placement": t.placement }),
                    (t.attributes = C({}, p, t.attributes)),
                    (t.styles = C({}, d, t.styles)),
                    (t.arrowStyles = C({}, t.offsets.arrow, t.arrowStyles)),
                    t
                  );
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right",
              },
              applyStyle: {
                order: 900,
                enabled: !0,
                fn: function (t) {
                  var e, i;
                  return (
                    $(t.instance.popper, t.styles),
                    (e = t.instance.popper),
                    (i = t.attributes),
                    Object.keys(i).forEach(function (t) {
                      !1 !== i[t]
                        ? e.setAttribute(t, i[t])
                        : e.removeAttribute(t);
                    }),
                    t.arrowElement &&
                      Object.keys(t.arrowStyles).length &&
                      $(t.arrowElement, t.arrowStyles),
                    t
                  );
                },
                onLoad: function (t, e, i, n, s) {
                  return (
                    (s = A(s, e, t, i.positionFixed)),
                    (t = N(
                      i.placement,
                      s,
                      e,
                      t,
                      i.modifiers.flip.boundariesElement,
                      i.modifiers.flip.padding
                    )),
                    e.setAttribute("x-placement", t),
                    $(e, { position: i.positionFixed ? "fixed" : "absolute" }),
                    i
                  );
                },
                gpuAcceleration: void 0,
              },
            },
          },
          w =
            (w(Z, [
              {
                key: "update",
                value: function () {
                  return function () {
                    var t;
                    this.state.isDestroyed ||
                      (((t = {
                        instance: this,
                        styles: {},
                        arrowStyles: {},
                        attributes: {},
                        flipped: !1,
                        offsets: {},
                      }).offsets.reference = A(
                        this.state,
                        this.popper,
                        this.reference,
                        this.options.positionFixed
                      )),
                      (t.placement = N(
                        this.options.placement,
                        t.offsets.reference,
                        this.popper,
                        this.reference,
                        this.options.modifiers.flip.boundariesElement,
                        this.options.modifiers.flip.padding
                      )),
                      (t.originalPlacement = t.placement),
                      (t.positionFixed = this.options.positionFixed),
                      (t.offsets.popper = j(
                        this.popper,
                        t.offsets.reference,
                        t.placement
                      )),
                      (t.offsets.popper.position = this.options.positionFixed
                        ? "fixed"
                        : "absolute"),
                      (t = L(this.modifiers, t)),
                      this.state.isCreated
                        ? this.options.onUpdate(t)
                        : ((this.state.isCreated = !0),
                          this.options.onCreate(t)));
                  }.call(this);
                },
              },
              {
                key: "destroy",
                value: function () {
                  return function () {
                    return (
                      (this.state.isDestroyed = !0),
                      P(this.modifiers, "applyStyle") &&
                        (this.popper.removeAttribute("x-placement"),
                        (this.popper.style.position = ""),
                        (this.popper.style.top = ""),
                        (this.popper.style.left = ""),
                        (this.popper.style.right = ""),
                        (this.popper.style.bottom = ""),
                        (this.popper.style.willChange = ""),
                        (this.popper.style[F("transform")] = "")),
                      this.disableEventListeners(),
                      this.options.removeOnDestroy &&
                        this.popper.parentNode.removeChild(this.popper),
                      this
                    );
                  }.call(this);
                },
              },
              {
                key: "enableEventListeners",
                value: function () {
                  return function () {
                    this.state.eventsEnabled ||
                      (this.state = q(
                        this.reference,
                        this.options,
                        this.state,
                        this.scheduleUpdate
                      ));
                  }.call(this);
                },
              },
              {
                key: "disableEventListeners",
                value: function () {
                  return R.call(this);
                },
              },
            ]),
            Z);
        function Z(t, e) {
          var i = this,
            n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          _(this, Z),
            (this.scheduleUpdate = function () {
              return requestAnimationFrame(i.update);
            }),
            (this.update = s(this.update.bind(this))),
            (this.options = C({}, Z.Defaults, n)),
            (this.state = {
              isDestroyed: !1,
              isCreated: !1,
              scrollParents: [],
            }),
            (this.reference = t && t.jquery ? t[0] : t),
            (this.popper = e && e.jquery ? e[0] : e),
            (this.options.modifiers = {}),
            Object.keys(C({}, Z.Defaults.modifiers, n.modifiers)).forEach(
              function (t) {
                i.options.modifiers[t] = C(
                  {},
                  Z.Defaults.modifiers[t] || {},
                  n.modifiers ? n.modifiers[t] : {}
                );
              }
            ),
            (this.modifiers = Object.keys(this.options.modifiers)
              .map(function (t) {
                return C({ name: t }, i.options.modifiers[t]);
              })
              .sort(function (t, e) {
                return t.order - e.order;
              })),
            this.modifiers.forEach(function (t) {
              t.enabled &&
                r(t.onLoad) &&
                t.onLoad(i.reference, i.popper, i.options, t, i.state);
            }),
            this.update();
          e = this.options.eventsEnabled;
          e && this.enableEventListeners(), (this.state.eventsEnabled = e);
        }
        (w.Utils = ("undefined" != typeof window ? window : t).PopperUtils),
          (w.placements = B),
          (w.Defaults = J),
          (tt.default = w);
      }.call(this, e(5));
  },
  function (t, e) {
    var i = (function () {
      return this;
    })();
    try {
      i = i || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (i = window);
    }
    t.exports = i;
  },
  function (t, e, i) {
    (function (t, n) {
      function l(t, e) {
        (this.settings = null),
          (this.options = u.extend({}, l.Defaults, e)),
          (this.$element = u(t)),
          (this._handlers = {}),
          (this._plugins = {}),
          (this._supress = {}),
          (this._current = null),
          (this._speed = null),
          (this._coordinates = []),
          (this._breakpoint = null),
          (this._width = null),
          (this._items = []),
          (this._clones = []),
          (this._mergers = []),
          (this._widths = []),
          (this._invalidated = {}),
          (this._pipe = []),
          (this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: { start: null, current: null },
            direction: null,
          }),
          (this._states = {
            current: {},
            tags: {
              initializing: ["busy"],
              animating: ["busy"],
              dragging: ["interacting"],
            },
          }),
          u.each(
            ["onResize", "onThrottledResize"],
            u.proxy(function (t, e) {
              this._handlers[e] = u.proxy(this[e], this);
            }, this)
          ),
          u.each(
            l.Plugins,
            u.proxy(function (t, e) {
              this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(
                this
              );
            }, this)
          ),
          u.each(
            l.Workers,
            u.proxy(function (t, e) {
              this._pipe.push({ filter: e.filter, run: u.proxy(e.run, this) });
            }, this)
          ),
          this.setup(),
          this.initialize();
      }
      var u, i, s, a, e, r, o, c, h, d, f, p, g, m, v, y, _, w, b, x, C, T;
      (u = window.Zepto || t),
        (i = window),
        (s = document),
        (l.Defaults = {
          items: 3,
          loop: !1,
          center: !1,
          rewind: !1,
          checkVisibility: !0,
          mouseDrag: !0,
          touchDrag: !0,
          pullDrag: !0,
          freeDrag: !1,
          margin: 0,
          stagePadding: 0,
          merge: !1,
          mergeFit: !0,
          autoWidth: !1,
          startPosition: 0,
          rtl: !1,
          smartSpeed: 250,
          fluidSpeed: !1,
          dragEndSpeed: !1,
          responsive: {},
          responsiveRefreshRate: 200,
          responsiveBaseElement: i,
          fallbackEasing: "swing",
          slideTransition: "",
          info: !1,
          nestedItemSelector: !1,
          itemElement: "div",
          stageElement: "div",
          refreshClass: "owl-refresh",
          loadedClass: "owl-loaded",
          loadingClass: "owl-loading",
          rtlClass: "owl-rtl",
          responsiveClass: "owl-responsive",
          dragClass: "owl-drag",
          itemClass: "owl-item",
          stageClass: "owl-stage",
          stageOuterClass: "owl-stage-outer",
          grabClass: "owl-grab",
        }),
        (l.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
        (l.Type = { Event: "event", State: "state" }),
        (l.Plugins = {}),
        (l.Workers = [
          {
            filter: ["width", "settings"],
            run: function () {
              this._width = this.$element.width();
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function (t) {
              t.current =
                this._items && this._items[this.relative(this._current)];
            },
          },
          {
            filter: ["items", "settings"],
            run: function () {
              this.$stage.children(".cloned").remove();
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function (t) {
              var e = this.settings.margin || "",
                i = !this.settings.autoWidth,
                n = this.settings.rtl,
                e = {
                  width: "auto",
                  "margin-left": n ? e : "",
                  "margin-right": n ? "" : e,
                };
              i || this.$stage.children().css(e), (t.css = e);
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function (t) {
              var e =
                  (this.width() / this.settings.items).toFixed(3) -
                  this.settings.margin,
                i = null,
                n = this._items.length,
                s = !this.settings.autoWidth,
                r = [];
              for (t.items = { merge: !1, width: e }; n--; )
                (i = this._mergers[n]),
                  (i =
                    (this.settings.mergeFit &&
                      Math.min(i, this.settings.items)) ||
                    i),
                  (t.items.merge = 1 < i || t.items.merge),
                  (r[n] = s ? e * i : this._items[n].width());
              this._widths = r;
            },
          },
          {
            filter: ["items", "settings"],
            run: function () {
              var t = [],
                e = this._items,
                i = this.settings,
                n = Math.max(2 * i.items, 4),
                s = 2 * Math.ceil(e.length / 2),
                r = i.loop && e.length ? (i.rewind ? n : Math.max(n, s)) : 0,
                o = "",
                a = "";
              for (r /= 2; 0 < r; )
                t.push(this.normalize(t.length / 2, !0)),
                  (o += e[t[t.length - 1]][0].outerHTML),
                  t.push(this.normalize(e.length - 1 - (t.length - 1) / 2, !0)),
                  (a = e[t[t.length - 1]][0].outerHTML + a),
                  --r;
              (this._clones = t),
                u(o).addClass("cloned").appendTo(this.$stage),
                u(a).addClass("cloned").prependTo(this.$stage);
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function () {
              for (
                var t,
                  e,
                  i = this.settings.rtl ? 1 : -1,
                  n = this._clones.length + this._items.length,
                  s = -1,
                  r = [];
                ++s < n;

              )
                (t = r[s - 1] || 0),
                  (e = this._widths[this.relative(s)] + this.settings.margin),
                  r.push(t + e * i);
              this._coordinates = r;
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function () {
              var t = this.settings.stagePadding,
                e = this._coordinates,
                t = {
                  width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                  "padding-left": t || "",
                  "padding-right": t || "",
                };
              this.$stage.css(t);
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function (t) {
              var e = this._coordinates.length,
                i = !this.settings.autoWidth,
                n = this.$stage.children();
              if (i && t.items.merge)
                for (; e--; )
                  (t.css.width = this._widths[this.relative(e)]),
                    n.eq(e).css(t.css);
              else i && ((t.css.width = t.items.width), n.css(t.css));
            },
          },
          {
            filter: ["items"],
            run: function () {
              this._coordinates.length < 1 && this.$stage.removeAttr("style");
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function (t) {
              (t.current = t.current
                ? this.$stage.children().index(t.current)
                : 0),
                (t.current = Math.max(
                  this.minimum(),
                  Math.min(this.maximum(), t.current)
                )),
                this.reset(t.current);
            },
          },
          {
            filter: ["position"],
            run: function () {
              this.animate(this.coordinates(this._current));
            },
          },
          {
            filter: ["width", "position", "items", "settings"],
            run: function () {
              for (
                var t,
                  e,
                  i = this.settings.rtl ? 1 : -1,
                  n = 2 * this.settings.stagePadding,
                  s = this.coordinates(this.current()) + n,
                  r = s + this.width() * i,
                  o = [],
                  a = 0,
                  l = this._coordinates.length;
                a < l;
                a++
              )
                (t = this._coordinates[a - 1] || 0),
                  (e = Math.abs(this._coordinates[a]) + n * i),
                  ((this.op(t, "<=", s) && this.op(t, ">", r)) ||
                    (this.op(e, "<", s) && this.op(e, ">", r))) &&
                    o.push(a);
              this.$stage.children(".active").removeClass("active"),
                this.$stage
                  .children(":eq(" + o.join("), :eq(") + ")")
                  .addClass("active"),
                this.$stage.children(".center").removeClass("center"),
                this.settings.center &&
                  this.$stage.children().eq(this.current()).addClass("center");
            },
          },
        ]),
        (l.prototype.initializeStage = function () {
          (this.$stage = this.$element.find("." + this.settings.stageClass)),
            this.$stage.length ||
              (this.$element.addClass(this.options.loadingClass),
              (this.$stage = u("<" + this.settings.stageElement + ">", {
                class: this.settings.stageClass,
              }).wrap(u("<div/>", { class: this.settings.stageOuterClass }))),
              this.$element.append(this.$stage.parent()));
        }),
        (l.prototype.initializeItems = function () {
          var t = this.$element.find(".owl-item");
          if (t.length)
            return (
              (this._items = t.get().map(function (t) {
                return u(t);
              })),
              (this._mergers = this._items.map(function () {
                return 1;
              })),
              void this.refresh()
            );
          this.replace(this.$element.children().not(this.$stage.parent())),
            this.isVisible() ? this.refresh() : this.invalidate("width"),
            this.$element
              .removeClass(this.options.loadingClass)
              .addClass(this.options.loadedClass);
        }),
        (l.prototype.initialize = function () {
          var t, e;
          this.enter("initializing"),
            this.trigger("initialize"),
            this.$element.toggleClass(
              this.settings.rtlClass,
              this.settings.rtl
            ),
            this.settings.autoWidth &&
              !this.is("pre-loading") &&
              ((t = this.$element.find("img")),
              (e = this.settings.nestedItemSelector
                ? "." + this.settings.nestedItemSelector
                : a),
              (e = this.$element.children(e).width()),
              t.length && e <= 0 && this.preloadAutoWidthImages(t)),
            this.initializeStage(),
            this.initializeItems(),
            this.registerEventHandlers(),
            this.leave("initializing"),
            this.trigger("initialized");
        }),
        (l.prototype.isVisible = function () {
          return !this.settings.checkVisibility || this.$element.is(":visible");
        }),
        (l.prototype.setup = function () {
          var e = this.viewport(),
            t = this.options.responsive,
            i = -1,
            n = null;
          t
            ? (u.each(t, function (t) {
                t <= e && i < t && (i = Number(t));
              }),
              "function" ==
                typeof (n = u.extend({}, this.options, t[i])).stagePadding &&
                (n.stagePadding = n.stagePadding()),
              delete n.responsive,
              n.responsiveClass &&
                this.$element.attr(
                  "class",
                  this.$element
                    .attr("class")
                    .replace(
                      new RegExp(
                        "(" + this.options.responsiveClass + "-)\\S+\\s",
                        "g"
                      ),
                      "$1" + i
                    )
                ))
            : (n = u.extend({}, this.options)),
            this.trigger("change", {
              property: { name: "settings", value: n },
            }),
            (this._breakpoint = i),
            (this.settings = n),
            this.invalidate("settings"),
            this.trigger("changed", {
              property: { name: "settings", value: this.settings },
            });
        }),
        (l.prototype.optionsLogic = function () {
          this.settings.autoWidth &&
            ((this.settings.stagePadding = !1), (this.settings.merge = !1));
        }),
        (l.prototype.prepare = function (t) {
          var e = this.trigger("prepare", { content: t });
          return (
            e.data ||
              (e.data = u("<" + this.settings.itemElement + "/>")
                .addClass(this.options.itemClass)
                .append(t)),
            this.trigger("prepared", { content: e.data }),
            e.data
          );
        }),
        (l.prototype.update = function () {
          for (
            var t = 0,
              e = this._pipe.length,
              i = u.proxy(function (t) {
                return this[t];
              }, this._invalidated),
              n = {};
            t < e;

          )
            (this._invalidated.all ||
              0 < u.grep(this._pipe[t].filter, i).length) &&
              this._pipe[t].run(n),
              t++;
          (this._invalidated = {}), this.is("valid") || this.enter("valid");
        }),
        (l.prototype.width = function (t) {
          switch ((t = t || l.Width.Default)) {
            case l.Width.Inner:
            case l.Width.Outer:
              return this._width;
            default:
              return (
                this._width -
                2 * this.settings.stagePadding +
                this.settings.margin
              );
          }
        }),
        (l.prototype.refresh = function () {
          this.enter("refreshing"),
            this.trigger("refresh"),
            this.setup(),
            this.optionsLogic(),
            this.$element.addClass(this.options.refreshClass),
            this.update(),
            this.$element.removeClass(this.options.refreshClass),
            this.leave("refreshing"),
            this.trigger("refreshed");
        }),
        (l.prototype.onThrottledResize = function () {
          i.clearTimeout(this.resizeTimer),
            (this.resizeTimer = i.setTimeout(
              this._handlers.onResize,
              this.settings.responsiveRefreshRate
            ));
        }),
        (l.prototype.onResize = function () {
          return (
            !!this._items.length &&
            this._width !== this.$element.width() &&
            !!this.isVisible() &&
            (this.enter("resizing"),
            this.trigger("resize").isDefaultPrevented()
              ? (this.leave("resizing"), !1)
              : (this.invalidate("width"),
                this.refresh(),
                this.leave("resizing"),
                void this.trigger("resized")))
          );
        }),
        (l.prototype.registerEventHandlers = function () {
          u.support.transition &&
            this.$stage.on(
              u.support.transition.end + ".owl.core",
              u.proxy(this.onTransitionEnd, this)
            ),
            !1 !== this.settings.responsive &&
              this.on(i, "resize", this._handlers.onThrottledResize),
            this.settings.mouseDrag &&
              (this.$element.addClass(this.options.dragClass),
              this.$stage.on(
                "mousedown.owl.core",
                u.proxy(this.onDragStart, this)
              ),
              this.$stage.on(
                "dragstart.owl.core selectstart.owl.core",
                function () {
                  return !1;
                }
              )),
            this.settings.touchDrag &&
              (this.$stage.on(
                "touchstart.owl.core",
                u.proxy(this.onDragStart, this)
              ),
              this.$stage.on(
                "touchcancel.owl.core",
                u.proxy(this.onDragEnd, this)
              ));
        }),
        (l.prototype.onDragStart = function (t) {
          var e = null;
          3 !== t.which &&
            ((e = u.support.transform
              ? {
                  x: (e = this.$stage
                    .css("transform")
                    .replace(/.*\(|\)| /g, "")
                    .split(","))[16 === e.length ? 12 : 4],
                  y: e[16 === e.length ? 13 : 5],
                }
              : ((e = this.$stage.position()),
                {
                  x: this.settings.rtl
                    ? e.left +
                      this.$stage.width() -
                      this.width() +
                      this.settings.margin
                    : e.left,
                  y: e.top,
                })),
            this.is("animating") &&
              (u.support.transform ? this.animate(e.x) : this.$stage.stop(),
              this.invalidate("position")),
            this.$element.toggleClass(
              this.options.grabClass,
              "mousedown" === t.type
            ),
            this.speed(0),
            (this._drag.time = new Date().getTime()),
            (this._drag.target = u(t.target)),
            (this._drag.stage.start = e),
            (this._drag.stage.current = e),
            (this._drag.pointer = this.pointer(t)),
            u(s).on(
              "mouseup.owl.core touchend.owl.core",
              u.proxy(this.onDragEnd, this)
            ),
            u(s).one(
              "mousemove.owl.core touchmove.owl.core",
              u.proxy(function (t) {
                var e = this.difference(this._drag.pointer, this.pointer(t));
                u(s).on(
                  "mousemove.owl.core touchmove.owl.core",
                  u.proxy(this.onDragMove, this)
                ),
                  (Math.abs(e.x) < Math.abs(e.y) && this.is("valid")) ||
                    (t.preventDefault(),
                    this.enter("dragging"),
                    this.trigger("drag"));
              }, this)
            ));
        }),
        (l.prototype.onDragMove = function (t) {
          var e,
            i = null,
            n = null,
            s = this.difference(this._drag.pointer, this.pointer(t)),
            r = this.difference(this._drag.stage.start, s);
          this.is("dragging") &&
            (t.preventDefault(),
            this.settings.loop
              ? ((i = this.coordinates(this.minimum())),
                (n = this.coordinates(this.maximum() + 1) - i),
                (r.x = ((((r.x - i) % n) + n) % n) + i))
              : ((i = this.settings.rtl
                  ? this.coordinates(this.maximum())
                  : this.coordinates(this.minimum())),
                (n = this.settings.rtl
                  ? this.coordinates(this.minimum())
                  : this.coordinates(this.maximum())),
                (e = this.settings.pullDrag ? (-1 * s.x) / 5 : 0),
                (r.x = Math.max(Math.min(r.x, i + e), n + e))),
            (this._drag.stage.current = r),
            this.animate(r.x));
        }),
        (l.prototype.onDragEnd = function (t) {
          var e = this.difference(this._drag.pointer, this.pointer(t)),
            i = this._drag.stage.current,
            t = (0 < e.x) ^ this.settings.rtl ? "left" : "right";
          u(s).off(".owl.core"),
            this.$element.removeClass(this.options.grabClass),
            ((0 !== e.x && this.is("dragging")) || !this.is("valid")) &&
              (this.speed(
                this.settings.dragEndSpeed || this.settings.smartSpeed
              ),
              this.current(
                this.closest(i.x, 0 !== e.x ? t : this._drag.direction)
              ),
              this.invalidate("position"),
              this.update(),
              (this._drag.direction = t),
              (3 < Math.abs(e.x) ||
                300 < new Date().getTime() - this._drag.time) &&
                this._drag.target.one("click.owl.core", function () {
                  return !1;
                })),
            this.is("dragging") &&
              (this.leave("dragging"), this.trigger("dragged"));
        }),
        (l.prototype.closest = function (i, n) {
          var s = -1,
            r = this.width(),
            o = this.coordinates();
          return (
            this.settings.freeDrag ||
              u.each(
                o,
                u.proxy(function (t, e) {
                  return (
                    "left" === n && e - 30 < i && i < e + 30
                      ? (s = t)
                      : "right" === n && e - r - 30 < i && i < e - r + 30
                      ? (s = t + 1)
                      : this.op(i, "<", e) &&
                        this.op(i, ">", o[t + 1] !== a ? o[t + 1] : e - r) &&
                        (s = "left" === n ? t + 1 : t),
                    -1 === s
                  );
                }, this)
              ),
            this.settings.loop ||
              (this.op(i, ">", o[this.minimum()])
                ? (s = i = this.minimum())
                : this.op(i, "<", o[this.maximum()]) &&
                  (s = i = this.maximum())),
            s
          );
        }),
        (l.prototype.animate = function (t) {
          var e = 0 < this.speed();
          this.is("animating") && this.onTransitionEnd(),
            e && (this.enter("animating"), this.trigger("translate")),
            u.support.transform3d && u.support.transition
              ? this.$stage.css({
                  transform: "translate3d(" + t + "px,0px,0px)",
                  transition:
                    this.speed() / 1e3 +
                    "s" +
                    (this.settings.slideTransition
                      ? " " + this.settings.slideTransition
                      : ""),
                })
              : e
              ? this.$stage.animate(
                  { left: t + "px" },
                  this.speed(),
                  this.settings.fallbackEasing,
                  u.proxy(this.onTransitionEnd, this)
                )
              : this.$stage.css({ left: t + "px" });
        }),
        (l.prototype.is = function (t) {
          return this._states.current[t] && 0 < this._states.current[t];
        }),
        (l.prototype.current = function (t) {
          return t === a
            ? this._current
            : 0 === this._items.length
            ? a
            : ((t = this.normalize(t)),
              this._current !== t &&
                ((e = this.trigger("change", {
                  property: { name: "position", value: t },
                })).data !== a && (t = this.normalize(e.data)),
                (this._current = t),
                this.invalidate("position"),
                this.trigger("changed", {
                  property: { name: "position", value: this._current },
                })),
              this._current);
          var e;
        }),
        (l.prototype.invalidate = function (t) {
          return (
            "string" === u.type(t) &&
              ((this._invalidated[t] = !0),
              this.is("valid") && this.leave("valid")),
            u.map(this._invalidated, function (t, e) {
              return e;
            })
          );
        }),
        (l.prototype.reset = function (t) {
          (t = this.normalize(t)) !== a &&
            ((this._speed = 0),
            (this._current = t),
            this.suppress(["translate", "translated"]),
            this.animate(this.coordinates(t)),
            this.release(["translate", "translated"]));
        }),
        (l.prototype.normalize = function (t, e) {
          var i = this._items.length,
            e = e ? 0 : this._clones.length;
          return (
            !this.isNumeric(t) || i < 1
              ? (t = a)
              : (t < 0 || i + e <= t) &&
                (t = ((((t - e / 2) % i) + i) % i) + e / 2),
            t
          );
        }),
        (l.prototype.relative = function (t) {
          return (t -= this._clones.length / 2), this.normalize(t, !0);
        }),
        (l.prototype.maximum = function (t) {
          var e,
            i,
            n,
            s = this.settings,
            r = this._coordinates.length;
          if (s.loop) r = this._clones.length / 2 + this._items.length - 1;
          else if (s.autoWidth || s.merge) {
            if ((e = this._items.length))
              for (
                i = this._items[--e].width(), n = this.$element.width();
                e-- &&
                !(n < (i += this._items[e].width() + this.settings.margin));

              );
            r = e + 1;
          } else
            r = s.center
              ? this._items.length - 1
              : this._items.length - s.items;
          return t && (r -= this._clones.length / 2), Math.max(r, 0);
        }),
        (l.prototype.minimum = function (t) {
          return t ? 0 : this._clones.length / 2;
        }),
        (l.prototype.items = function (t) {
          return t === a
            ? this._items.slice()
            : ((t = this.normalize(t, !0)), this._items[t]);
        }),
        (l.prototype.mergers = function (t) {
          return t === a
            ? this._mergers.slice()
            : ((t = this.normalize(t, !0)), this._mergers[t]);
        }),
        (l.prototype.clones = function (i) {
          function n(t) {
            return t % 2 == 0 ? s + t / 2 : e - (t + 1) / 2;
          }
          var e = this._clones.length / 2,
            s = e + this._items.length;
          return i === a
            ? u.map(this._clones, function (t, e) {
                return n(e);
              })
            : u.map(this._clones, function (t, e) {
                return t === i ? n(e) : null;
              });
        }),
        (l.prototype.speed = function (t) {
          return t !== a && (this._speed = t), this._speed;
        }),
        (l.prototype.coordinates = function (t) {
          var e,
            i = 1,
            n = t - 1;
          return t === a
            ? u.map(
                this._coordinates,
                u.proxy(function (t, e) {
                  return this.coordinates(e);
                }, this)
              )
            : (this.settings.center
                ? (this.settings.rtl && ((i = -1), (n = t + 1)),
                  (e = this._coordinates[t]),
                  (e +=
                    ((this.width() - e + (this._coordinates[n] || 0)) / 2) * i))
                : (e = this._coordinates[n] || 0),
              (e = Math.ceil(e)));
        }),
        (l.prototype.duration = function (t, e, i) {
          return 0 === i
            ? 0
            : Math.min(Math.max(Math.abs(e - t), 1), 6) *
                Math.abs(i || this.settings.smartSpeed);
        }),
        (l.prototype.to = function (t, e) {
          var i,
            n = this.current(),
            s = t - this.relative(n),
            r = (0 < s) - (s < 0),
            o = this._items.length,
            a = this.minimum(),
            l = this.maximum();
          this.settings.loop
            ? (!this.settings.rewind &&
                Math.abs(s) > o / 2 &&
                (s += -1 * r * o),
              (i = (((((t = n + s) - a) % o) + o) % o) + a) !== t &&
                i - s <= l &&
                0 < i - s &&
                ((n = i - s), (t = i), this.reset(n)))
            : (t = this.settings.rewind
                ? ((t % (l += 1)) + l) % l
                : Math.max(a, Math.min(l, t))),
            this.speed(this.duration(n, t, e)),
            this.current(t),
            this.isVisible() && this.update();
        }),
        (l.prototype.next = function (t) {
          (t = t || !1), this.to(this.relative(this.current()) + 1, t);
        }),
        (l.prototype.prev = function (t) {
          (t = t || !1), this.to(this.relative(this.current()) - 1, t);
        }),
        (l.prototype.onTransitionEnd = function (t) {
          if (
            t !== a &&
            (t.stopPropagation(),
            (t.target || t.srcElement || t.originalTarget) !==
              this.$stage.get(0))
          )
            return !1;
          this.leave("animating"), this.trigger("translated");
        }),
        (l.prototype.viewport = function () {
          var t;
          return (
            this.options.responsiveBaseElement !== i
              ? (t = u(this.options.responsiveBaseElement).width())
              : i.innerWidth
              ? (t = i.innerWidth)
              : s.documentElement && s.documentElement.clientWidth
              ? (t = s.documentElement.clientWidth)
              : console.warn("Can not detect viewport width."),
            t
          );
        }),
        (l.prototype.replace = function (t) {
          this.$stage.empty(),
            (this._items = []),
            (t = t && (t instanceof n ? t : u(t))),
            this.settings.nestedItemSelector &&
              (t = t.find("." + this.settings.nestedItemSelector)),
            t
              .filter(function () {
                return 1 === this.nodeType;
              })
              .each(
                u.proxy(function (t, e) {
                  (e = this.prepare(e)),
                    this.$stage.append(e),
                    this._items.push(e),
                    this._mergers.push(
                      +e
                        .find("[data-merge]")
                        .addBack("[data-merge]")
                        .attr("data-merge") || 1
                    );
                }, this)
              ),
            this.reset(
              this.isNumeric(this.settings.startPosition)
                ? this.settings.startPosition
                : 0
            ),
            this.invalidate("items");
        }),
        (l.prototype.add = function (t, e) {
          var i = this.relative(this._current);
          (e = e === a ? this._items.length : this.normalize(e, !0)),
            (t = t instanceof n ? t : u(t)),
            this.trigger("add", { content: t, position: e }),
            (t = this.prepare(t)),
            0 === this._items.length || e === this._items.length
              ? (0 === this._items.length && this.$stage.append(t),
                0 !== this._items.length && this._items[e - 1].after(t),
                this._items.push(t),
                this._mergers.push(
                  +t
                    .find("[data-merge]")
                    .addBack("[data-merge]")
                    .attr("data-merge") || 1
                ))
              : (this._items[e].before(t),
                this._items.splice(e, 0, t),
                this._mergers.splice(
                  e,
                  0,
                  +t
                    .find("[data-merge]")
                    .addBack("[data-merge]")
                    .attr("data-merge") || 1
                )),
            this._items[i] && this.reset(this._items[i].index()),
            this.invalidate("items"),
            this.trigger("added", { content: t, position: e });
        }),
        (l.prototype.remove = function (t) {
          (t = this.normalize(t, !0)) !== a &&
            (this.trigger("remove", { content: this._items[t], position: t }),
            this._items[t].remove(),
            this._items.splice(t, 1),
            this._mergers.splice(t, 1),
            this.invalidate("items"),
            this.trigger("removed", { content: null, position: t }));
        }),
        (l.prototype.preloadAutoWidthImages = function (t) {
          t.each(
            u.proxy(function (t, e) {
              this.enter("pre-loading"),
                (e = u(e)),
                u(new Image())
                  .one(
                    "load",
                    u.proxy(function (t) {
                      e.attr("src", t.target.src),
                        e.css("opacity", 1),
                        this.leave("pre-loading"),
                        this.is("pre-loading") ||
                          this.is("initializing") ||
                          this.refresh();
                    }, this)
                  )
                  .attr(
                    "src",
                    e.attr("src") ||
                      e.attr("data-src") ||
                      e.attr("data-src-retina")
                  );
            }, this)
          );
        }),
        (l.prototype.destroy = function () {
          for (var t in (this.$element.off(".owl.core"),
          this.$stage.off(".owl.core"),
          u(s).off(".owl.core"),
          !1 !== this.settings.responsive &&
            (i.clearTimeout(this.resizeTimer),
            this.off(i, "resize", this._handlers.onThrottledResize)),
          this._plugins))
            this._plugins[t].destroy();
          this.$stage.children(".cloned").remove(),
            this.$stage.unwrap(),
            this.$stage.children().contents().unwrap(),
            this.$stage.children().unwrap(),
            this.$stage.remove(),
            this.$element
              .removeClass(this.options.refreshClass)
              .removeClass(this.options.loadingClass)
              .removeClass(this.options.loadedClass)
              .removeClass(this.options.rtlClass)
              .removeClass(this.options.dragClass)
              .removeClass(this.options.grabClass)
              .attr(
                "class",
                this.$element
                  .attr("class")
                  .replace(
                    new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                    ""
                  )
              )
              .removeData("owl.carousel");
        }),
        (l.prototype.op = function (t, e, i) {
          var n = this.settings.rtl;
          switch (e) {
            case "<":
              return n ? i < t : t < i;
            case ">":
              return n ? t < i : i < t;
            case ">=":
              return n ? t <= i : i <= t;
            case "<=":
              return n ? i <= t : t <= i;
          }
        }),
        (l.prototype.on = function (t, e, i, n) {
          t.addEventListener
            ? t.addEventListener(e, i, n)
            : t.attachEvent && t.attachEvent("on" + e, i);
        }),
        (l.prototype.off = function (t, e, i, n) {
          t.removeEventListener
            ? t.removeEventListener(e, i, n)
            : t.detachEvent && t.detachEvent("on" + e, i);
        }),
        (l.prototype.trigger = function (t, e, i, n, s) {
          var r = {
              item: { count: this._items.length, index: this.current() },
            },
            o = u.camelCase(
              u
                .grep(["on", t, i], function (t) {
                  return t;
                })
                .join("-")
                .toLowerCase()
            ),
            a = u.Event(
              [t, "owl", i || "carousel"].join(".").toLowerCase(),
              u.extend({ relatedTarget: this }, r, e)
            );
          return (
            this._supress[t] ||
              (u.each(this._plugins, function (t, e) {
                e.onTrigger && e.onTrigger(a);
              }),
              this.register({ type: l.Type.Event, name: t }),
              this.$element.trigger(a),
              this.settings &&
                "function" == typeof this.settings[o] &&
                this.settings[o].call(this, a)),
            a
          );
        }),
        (l.prototype.enter = function (t) {
          u.each(
            [t].concat(this._states.tags[t] || []),
            u.proxy(function (t, e) {
              this._states.current[e] === a && (this._states.current[e] = 0),
                this._states.current[e]++;
            }, this)
          );
        }),
        (l.prototype.leave = function (t) {
          u.each(
            [t].concat(this._states.tags[t] || []),
            u.proxy(function (t, e) {
              this._states.current[e]--;
            }, this)
          );
        }),
        (l.prototype.register = function (i) {
          var e;
          i.type === l.Type.Event
            ? (u.event.special[i.name] || (u.event.special[i.name] = {}),
              u.event.special[i.name].owl ||
                ((e = u.event.special[i.name]._default),
                (u.event.special[i.name]._default = function (t) {
                  return !e ||
                    !e.apply ||
                    (t.namespace && -1 !== t.namespace.indexOf("owl"))
                    ? t.namespace && -1 < t.namespace.indexOf("owl")
                    : e.apply(this, arguments);
                }),
                (u.event.special[i.name].owl = !0)))
            : i.type === l.Type.State &&
              (this._states.tags[i.name]
                ? (this._states.tags[i.name] = this._states.tags[i.name].concat(
                    i.tags
                  ))
                : (this._states.tags[i.name] = i.tags),
              (this._states.tags[i.name] = u.grep(
                this._states.tags[i.name],
                u.proxy(function (t, e) {
                  return u.inArray(t, this._states.tags[i.name]) === e;
                }, this)
              )));
        }),
        (l.prototype.suppress = function (t) {
          u.each(
            t,
            u.proxy(function (t, e) {
              this._supress[e] = !0;
            }, this)
          );
        }),
        (l.prototype.release = function (t) {
          u.each(
            t,
            u.proxy(function (t, e) {
              delete this._supress[e];
            }, this)
          );
        }),
        (l.prototype.pointer = function (t) {
          var e = { x: null, y: null };
          return (
            (t =
              (t = t.originalEvent || t || i.event).touches && t.touches.length
                ? t.touches[0]
                : t.changedTouches && t.changedTouches.length
                ? t.changedTouches[0]
                : t).pageX
              ? ((e.x = t.pageX), (e.y = t.pageY))
              : ((e.x = t.clientX), (e.y = t.clientY)),
            e
          );
        }),
        (l.prototype.isNumeric = function (t) {
          return !isNaN(parseFloat(t));
        }),
        (l.prototype.difference = function (t, e) {
          return { x: t.x - e.x, y: t.y - e.y };
        }),
        (u.fn.owlCarousel = function (e) {
          var n = Array.prototype.slice.call(arguments, 1);
          return this.each(function () {
            var t = u(this),
              i = t.data("owl.carousel");
            i ||
              ((i = new l(this, "object" == typeof e && e)),
              t.data("owl.carousel", i),
              u.each(
                [
                  "next",
                  "prev",
                  "to",
                  "destroy",
                  "refresh",
                  "replace",
                  "add",
                  "remove",
                ],
                function (t, e) {
                  i.register({ type: l.Type.Event, name: e }),
                    i.$element.on(
                      e + ".owl.carousel.core",
                      u.proxy(function (t) {
                        t.namespace &&
                          t.relatedTarget !== this &&
                          (this.suppress([e]),
                          i[e].apply(this, [].slice.call(arguments, 1)),
                          this.release([e]));
                      }, i)
                    );
                }
              )),
              "string" == typeof e && "_" !== e.charAt(0) && i[e].apply(i, n);
          });
        }),
        (u.fn.owlCarousel.Constructor = l),
        (e = window.Zepto || t),
        (r = window),
        document,
        ((o = function (t) {
          (this._core = t),
            (this._interval = null),
            (this._visible = null),
            (this._handlers = {
              "initialized.owl.carousel": e.proxy(function (t) {
                t.namespace && this._core.settings.autoRefresh && this.watch();
              }, this),
            }),
            (this._core.options = e.extend({}, o.Defaults, this._core.options)),
            this._core.$element.on(this._handlers);
        }).Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
        (o.prototype.watch = function () {
          this._interval ||
            ((this._visible = this._core.isVisible()),
            (this._interval = r.setInterval(
              e.proxy(this.refresh, this),
              this._core.settings.autoRefreshInterval
            )));
        }),
        (o.prototype.refresh = function () {
          this._core.isVisible() !== this._visible &&
            ((this._visible = !this._visible),
            this._core.$element.toggleClass("owl-hidden", !this._visible),
            this._visible &&
              this._core.invalidate("width") &&
              this._core.refresh());
        }),
        (o.prototype.destroy = function () {
          var t, e;
          for (t in (r.clearInterval(this._interval), this._handlers))
            this._core.$element.off(t, this._handlers[t]);
          for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null);
        }),
        (e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = o),
        (c = window.Zepto || t),
        (h = window),
        document,
        ((d = function (t) {
          (this._core = t),
            (this._loaded = []),
            (this._handlers = {
              "initialized.owl.carousel change.owl.carousel resized.owl.carousel": c.proxy(
                function (t) {
                  if (
                    t.namespace &&
                    this._core.settings &&
                    this._core.settings.lazyLoad &&
                    ((t.property && "position" == t.property.name) ||
                      "initialized" == t.type)
                  ) {
                    var e = this._core.settings,
                      i = (e.center && Math.ceil(e.items / 2)) || e.items,
                      n = (e.center && -1 * i) || 0,
                      s =
                        (t.property && void 0 !== t.property.value
                          ? t.property.value
                          : this._core.current()) + n,
                      r = this._core.clones().length,
                      o = c.proxy(function (t, e) {
                        this.load(e);
                      }, this);
                    for (
                      0 < e.lazyLoadEager &&
                      ((i += e.lazyLoadEager),
                      e.loop && ((s -= e.lazyLoadEager), i++));
                      n++ < i;

                    )
                      this.load(r / 2 + this._core.relative(s)),
                        r &&
                          c.each(this._core.clones(this._core.relative(s)), o),
                        s++;
                  }
                },
                this
              ),
            }),
            (this._core.options = c.extend({}, d.Defaults, this._core.options)),
            this._core.$element.on(this._handlers);
        }).Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
        (d.prototype.load = function (t) {
          var e = this._core.$stage.children().eq(t),
            t = e && e.find(".owl-lazy");
          !t ||
            -1 < c.inArray(e.get(0), this._loaded) ||
            (t.each(
              c.proxy(function (t, e) {
                var i = c(e),
                  n =
                    (1 < h.devicePixelRatio && i.attr("data-src-retina")) ||
                    i.attr("data-src") ||
                    i.attr("data-srcset");
                this._core.trigger("load", { element: i, url: n }, "lazy"),
                  i.is("img")
                    ? i
                        .one(
                          "load.owl.lazy",
                          c.proxy(function () {
                            i.css("opacity", 1),
                              this._core.trigger(
                                "loaded",
                                { element: i, url: n },
                                "lazy"
                              );
                          }, this)
                        )
                        .attr("src", n)
                    : i.is("source")
                    ? i
                        .one(
                          "load.owl.lazy",
                          c.proxy(function () {
                            this._core.trigger(
                              "loaded",
                              { element: i, url: n },
                              "lazy"
                            );
                          }, this)
                        )
                        .attr("srcset", n)
                    : (((e = new Image()).onload = c.proxy(function () {
                        i.css({
                          "background-image": 'url("' + n + '")',
                          opacity: "1",
                        }),
                          this._core.trigger(
                            "loaded",
                            { element: i, url: n },
                            "lazy"
                          );
                      }, this)),
                      (e.src = n));
              }, this)
            ),
            this._loaded.push(e.get(0)));
        }),
        (d.prototype.destroy = function () {
          var t, e;
          for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
          for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null);
        }),
        (c.fn.owlCarousel.Constructor.Plugins.Lazy = d),
        (f = window.Zepto || t),
        (p = window),
        document,
        ((g = function (t) {
          (this._core = t),
            (this._previousHeight = null),
            (this._handlers = {
              "initialized.owl.carousel refreshed.owl.carousel": f.proxy(
                function (t) {
                  t.namespace &&
                    this._core.settings.autoHeight &&
                    this.update();
                },
                this
              ),
              "changed.owl.carousel": f.proxy(function (t) {
                t.namespace &&
                  this._core.settings.autoHeight &&
                  "position" === t.property.name &&
                  this.update();
              }, this),
              "loaded.owl.lazy": f.proxy(function (t) {
                t.namespace &&
                  this._core.settings.autoHeight &&
                  t.element
                    .closest("." + this._core.settings.itemClass)
                    .index() === this._core.current() &&
                  this.update();
              }, this),
            }),
            (this._core.options = f.extend({}, g.Defaults, this._core.options)),
            this._core.$element.on(this._handlers),
            (this._intervalId = null);
          var e = this;
          f(p).on("load", function () {
            e._core.settings.autoHeight && e.update();
          }),
            f(p).resize(function () {
              e._core.settings.autoHeight &&
                (null != e._intervalId && clearTimeout(e._intervalId),
                (e._intervalId = setTimeout(function () {
                  e.update();
                }, 250)));
            });
        }).Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
        (g.prototype.update = function () {
          var t = this._core._current,
            e = t + this._core.settings.items,
            i = this._core.settings.lazyLoad,
            t = this._core.$stage.children().toArray().slice(t, e),
            n = [],
            e = 0;
          f.each(t, function (t, e) {
            n.push(f(e).height());
          }),
            (e = Math.max.apply(null, n)) <= 1 &&
              i &&
              this._previousHeight &&
              (e = this._previousHeight),
            (this._previousHeight = e),
            this._core.$stage
              .parent()
              .height(e)
              .addClass(this._core.settings.autoHeightClass);
        }),
        (g.prototype.destroy = function () {
          var t, e;
          for (t in this._handlers)
            this._core.$element.off(t, this._handlers[t]);
          for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null);
        }),
        (f.fn.owlCarousel.Constructor.Plugins.AutoHeight = g),
        (m = window.Zepto || t),
        window,
        (v = document),
        ((y = function (t) {
          (this._core = t),
            (this._videos = {}),
            (this._playing = null),
            (this._handlers = {
              "initialized.owl.carousel": m.proxy(function (t) {
                t.namespace &&
                  this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"],
                  });
              }, this),
              "resize.owl.carousel": m.proxy(function (t) {
                t.namespace &&
                  this._core.settings.video &&
                  this.isInFullScreen() &&
                  t.preventDefault();
              }, this),
              "refreshed.owl.carousel": m.proxy(function (t) {
                t.namespace &&
                  this._core.is("resizing") &&
                  this._core.$stage.find(".cloned .owl-video-frame").remove();
              }, this),
              "changed.owl.carousel": m.proxy(function (t) {
                t.namespace &&
                  "position" === t.property.name &&
                  this._playing &&
                  this.stop();
              }, this),
              "prepared.owl.carousel": m.proxy(function (t) {
                var e;
                !t.namespace ||
                  ((e = m(t.content).find(".owl-video")).length &&
                    (e.css("display", "none"), this.fetch(e, m(t.content))));
              }, this),
            }),
            (this._core.options = m.extend({}, y.Defaults, this._core.options)),
            this._core.$element.on(this._handlers),
            this._core.$element.on(
              "click.owl.video",
              ".owl-video-play-icon",
              m.proxy(function (t) {
                this.play(t);
              }, this)
            );
        }).Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
        (y.prototype.fetch = function (t, e) {
          var i = t.attr("data-vimeo-id")
              ? "vimeo"
              : t.attr("data-vzaar-id")
              ? "vzaar"
              : "youtube",
            n =
              t.attr("data-vimeo-id") ||
              t.attr("data-youtube-id") ||
              t.attr("data-vzaar-id"),
            s = t.attr("data-width") || this._core.settings.videoWidth,
            r = t.attr("data-height") || this._core.settings.videoHeight,
            o = t.attr("href");
          if (!o) throw new Error("Missing video URL.");
          if (
            -1 <
            (n = o.match(
              /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
            ))[3].indexOf("youtu")
          )
            i = "youtube";
          else if (-1 < n[3].indexOf("vimeo")) i = "vimeo";
          else {
            if (!(-1 < n[3].indexOf("vzaar")))
              throw new Error("Video URL not supported.");
            i = "vzaar";
          }
          (n = n[6]),
            (this._videos[o] = { type: i, id: n, width: s, height: r }),
            e.attr("data-video", o),
            this.thumbnail(t, this._videos[o]);
        }),
        (y.prototype.thumbnail = function (e, t) {
          function i(t) {
            (n = u.lazyLoad
              ? m("<div/>", { class: "owl-video-tn " + l, srcType: t })
              : m("<div/>", {
                  class: "owl-video-tn",
                  style: "opacity:1;background-image:url(" + t + ")",
                })),
              e.after(n),
              e.after('<div class="owl-video-play-icon"></div>');
          }
          var n,
            s,
            r =
              t.width && t.height
                ? "width:" + t.width + "px;height:" + t.height + "px;"
                : "",
            o = e.find("img"),
            a = "src",
            l = "",
            u = this._core.settings;
          if (
            (e.wrap(m("<div/>", { class: "owl-video-wrapper", style: r })),
            this._core.settings.lazyLoad &&
              ((a = "data-src"), (l = "owl-lazy")),
            o.length)
          )
            return i(o.attr(a)), o.remove(), !1;
          "youtube" === t.type
            ? ((s = "//img.youtube.com/vi/" + t.id + "/hqdefault.jpg"), i(s))
            : "vimeo" === t.type
            ? m.ajax({
                type: "GET",
                url: "//vimeo.com/api/v2/video/" + t.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function (t) {
                  (s = t[0].thumbnail_large), i(s);
                },
              })
            : "vzaar" === t.type &&
              m.ajax({
                type: "GET",
                url: "//vzaar.com/api/videos/" + t.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function (t) {
                  (s = t.framegrab_url), i(s);
                },
              });
        }),
        (y.prototype.stop = function () {
          this._core.trigger("stop", null, "video"),
            this._playing.find(".owl-video-frame").remove(),
            this._playing.removeClass("owl-video-playing"),
            (this._playing = null),
            this._core.leave("playing"),
            this._core.trigger("stopped", null, "video");
        }),
        (y.prototype.play = function (t) {
          var e = m(t.target).closest("." + this._core.settings.itemClass),
            i = this._videos[e.attr("data-video")],
            n = i.width || "100%",
            s = i.height || this._core.$stage.height();
          this._playing ||
            (this._core.enter("playing"),
            this._core.trigger("play", null, "video"),
            (e = this._core.items(this._core.relative(e.index()))),
            this._core.reset(e.index()),
            (t = m(
              '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
            )).attr("height", s),
            t.attr("width", n),
            "youtube" === i.type
              ? t.attr(
                  "src",
                  "//www.youtube.com/embed/" +
                    i.id +
                    "?autoplay=1&rel=0&v=" +
                    i.id
                )
              : "vimeo" === i.type
              ? t.attr(
                  "src",
                  "//player.vimeo.com/video/" + i.id + "?autoplay=1"
                )
              : "vzaar" === i.type &&
                t.attr(
                  "src",
                  "//view.vzaar.com/" + i.id + "/player?autoplay=true"
                ),
            m(t)
              .wrap('<div class="owl-video-frame" />')
              .insertAfter(e.find(".owl-video")),
            (this._playing = e.addClass("owl-video-playing")));
        }),
        (y.prototype.isInFullScreen = function () {
          var t =
            v.fullscreenElement ||
            v.mozFullScreenElement ||
            v.webkitFullscreenElement;
          return t && m(t).parent().hasClass("owl-video-frame");
        }),
        (y.prototype.destroy = function () {
          var t, e;
          for (t in (this._core.$element.off("click.owl.video"),
          this._handlers))
            this._core.$element.off(t, this._handlers[t]);
          for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null);
        }),
        (m.fn.owlCarousel.Constructor.Plugins.Video = y),
        (_ = window.Zepto || t),
        window,
        document,
        ((w = function (t) {
          (this.core = t),
            (this.core.options = _.extend({}, w.Defaults, this.core.options)),
            (this.swapping = !0),
            (this.previous = void 0),
            (this.next = void 0),
            (this.handlers = {
              "change.owl.carousel": _.proxy(function (t) {
                t.namespace &&
                  "position" == t.property.name &&
                  ((this.previous = this.core.current()),
                  (this.next = t.property.value));
              }, this),
              "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": _.proxy(
                function (t) {
                  t.namespace && (this.swapping = "translated" == t.type);
                },
                this
              ),
              "translate.owl.carousel": _.proxy(function (t) {
                t.namespace &&
                  this.swapping &&
                  (this.core.options.animateOut ||
                    this.core.options.animateIn) &&
                  this.swap();
              }, this),
            }),
            this.core.$element.on(this.handlers);
        }).Defaults = { animateOut: !1, animateIn: !1 }),
        (w.prototype.swap = function () {
          var t, e, i, n, s, r;
          1 === this.core.settings.items &&
            _.support.animation &&
            _.support.transition &&
            (this.core.speed(0),
            (e = _.proxy(this.clear, this)),
            (i = this.core.$stage.children().eq(this.previous)),
            (n = this.core.$stage.children().eq(this.next)),
            (s = this.core.settings.animateIn),
            (r = this.core.settings.animateOut),
            this.core.current() !== this.previous &&
              (r &&
                ((t =
                  this.core.coordinates(this.previous) -
                  this.core.coordinates(this.next)),
                i
                  .one(_.support.animation.end, e)
                  .css({ left: t + "px" })
                  .addClass("animated owl-animated-out")
                  .addClass(r)),
              s &&
                n
                  .one(_.support.animation.end, e)
                  .addClass("animated owl-animated-in")
                  .addClass(s)));
        }),
        (w.prototype.clear = function (t) {
          _(t.target)
            .css({ left: "" })
            .removeClass("animated owl-animated-out owl-animated-in")
            .removeClass(this.core.settings.animateIn)
            .removeClass(this.core.settings.animateOut),
            this.core.onTransitionEnd();
        }),
        (w.prototype.destroy = function () {
          var t, e;
          for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
          for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null);
        }),
        (_.fn.owlCarousel.Constructor.Plugins.Animate = w),
        (b = window.Zepto || t),
        (x = window),
        (C = document),
        ((T = function (t) {
          (this._core = t),
            (this._call = null),
            (this._time = 0),
            (this._timeout = 0),
            (this._paused = !0),
            (this._handlers = {
              "changed.owl.carousel": b.proxy(function (t) {
                t.namespace && "settings" === t.property.name
                  ? this._core.settings.autoplay
                    ? this.play()
                    : this.stop()
                  : t.namespace &&
                    "position" === t.property.name &&
                    this._paused &&
                    (this._time = 0);
              }, this),
              "initialized.owl.carousel": b.proxy(function (t) {
                t.namespace && this._core.settings.autoplay && this.play();
              }, this),
              "play.owl.autoplay": b.proxy(function (t, e, i) {
                t.namespace && this.play(e, i);
              }, this),
              "stop.owl.autoplay": b.proxy(function (t) {
                t.namespace && this.stop();
              }, this),
              "mouseover.owl.autoplay": b.proxy(function () {
                this._core.settings.autoplayHoverPause &&
                  this._core.is("rotating") &&
                  this.pause();
              }, this),
              "mouseleave.owl.autoplay": b.proxy(function () {
                this._core.settings.autoplayHoverPause &&
                  this._core.is("rotating") &&
                  this.play();
              }, this),
              "touchstart.owl.core": b.proxy(function () {
                this._core.settings.autoplayHoverPause &&
                  this._core.is("rotating") &&
                  this.pause();
              }, this),
              "touchend.owl.core": b.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play();
              }, this),
            }),
            this._core.$element.on(this._handlers),
            (this._core.options = b.extend({}, T.Defaults, this._core.options));
        }).Defaults = {
          autoplay: !1,
          autoplayTimeout: 5e3,
          autoplayHoverPause: !1,
          autoplaySpeed: !1,
        }),
        (T.prototype._next = function (t) {
          (this._call = x.setTimeout(
            b.proxy(this._next, this, t),
            this._timeout * (Math.round(this.read() / this._timeout) + 1) -
              this.read()
          )),
            this._core.is("interacting") ||
              C.hidden ||
              this._core.next(t || this._core.settings.autoplaySpeed);
        }),
        (T.prototype.read = function () {
          return new Date().getTime() - this._time;
        }),
        (T.prototype.play = function (t, e) {
          var i;
          this._core.is("rotating") || this._core.enter("rotating"),
            (t = t || this._core.settings.autoplayTimeout),
            (i = Math.min(this._time % (this._timeout || t), t)),
            this._paused
              ? ((this._time = this.read()), (this._paused = !1))
              : x.clearTimeout(this._call),
            (this._time += (this.read() % t) - i),
            (this._timeout = t),
            (this._call = x.setTimeout(b.proxy(this._next, this, e), t - i));
        }),
        (T.prototype.stop = function () {
          this._core.is("rotating") &&
            ((this._time = 0),
            (this._paused = !0),
            x.clearTimeout(this._call),
            this._core.leave("rotating"));
        }),
        (T.prototype.pause = function () {
          this._core.is("rotating") &&
            !this._paused &&
            ((this._time = this.read()),
            (this._paused = !0),
            x.clearTimeout(this._call));
        }),
        (T.prototype.destroy = function () {
          var t, e;
          for (t in (this.stop(), this._handlers))
            this._core.$element.off(t, this._handlers[t]);
          for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null);
        }),
        (b.fn.owlCarousel.Constructor.Plugins.autoplay = T),
        (function (s) {
          "use strict";
          var e = function (t) {
            (this._core = t),
              (this._initialized = !1),
              (this._pages = []),
              (this._controls = {}),
              (this._templates = []),
              (this.$element = this._core.$element),
              (this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to,
              }),
              (this._handlers = {
                "prepared.owl.carousel": s.proxy(function (t) {
                  t.namespace &&
                    this._core.settings.dotsData &&
                    this._templates.push(
                      '<div class="' +
                        this._core.settings.dotClass +
                        '">' +
                        s(t.content)
                          .find("[data-dot]")
                          .addBack("[data-dot]")
                          .attr("data-dot") +
                        "</div>"
                    );
                }, this),
                "added.owl.carousel": s.proxy(function (t) {
                  t.namespace &&
                    this._core.settings.dotsData &&
                    this._templates.splice(
                      t.position,
                      0,
                      this._templates.pop()
                    );
                }, this),
                "remove.owl.carousel": s.proxy(function (t) {
                  t.namespace &&
                    this._core.settings.dotsData &&
                    this._templates.splice(t.position, 1);
                }, this),
                "changed.owl.carousel": s.proxy(function (t) {
                  t.namespace && "position" == t.property.name && this.draw();
                }, this),
                "initialized.owl.carousel": s.proxy(function (t) {
                  t.namespace &&
                    !this._initialized &&
                    (this._core.trigger("initialize", null, "navigation"),
                    this.initialize(),
                    this.update(),
                    this.draw(),
                    (this._initialized = !0),
                    this._core.trigger("initialized", null, "navigation"));
                }, this),
                "refreshed.owl.carousel": s.proxy(function (t) {
                  t.namespace &&
                    this._initialized &&
                    (this._core.trigger("refresh", null, "navigation"),
                    this.update(),
                    this.draw(),
                    this._core.trigger("refreshed", null, "navigation"));
                }, this),
              }),
              (this._core.options = s.extend(
                {},
                e.Defaults,
                this._core.options
              )),
              this.$element.on(this._handlers);
          };
          (e.Defaults = {
            nav: !1,
            navText: [
              '<span aria-label="Previous">&#x2039;</span>',
              '<span aria-label="Next">&#x203a;</span>',
            ],
            navSpeed: !1,
            navElement: 'button type="button" role="presentation"',
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1,
          }),
            (e.prototype.initialize = function () {
              var t,
                i = this._core.settings;
              for (t in ((this._controls.$relative = (i.navContainer
                ? s(i.navContainer)
                : s("<div>")
                    .addClass(i.navContainerClass)
                    .appendTo(this.$element)
              ).addClass("disabled")),
              (this._controls.$previous = s("<" + i.navElement + ">")
                .addClass(i.navClass[0])
                .html(i.navText[0])
                .prependTo(this._controls.$relative)
                .on(
                  "click",
                  s.proxy(function (t) {
                    this.prev(i.navSpeed);
                  }, this)
                )),
              (this._controls.$next = s("<" + i.navElement + ">")
                .addClass(i.navClass[1])
                .html(i.navText[1])
                .appendTo(this._controls.$relative)
                .on(
                  "click",
                  s.proxy(function (t) {
                    this.next(i.navSpeed);
                  }, this)
                )),
              i.dotsData ||
                (this._templates = [
                  s('<button role="button">')
                    .addClass(i.dotClass)
                    .append(s("<span>"))
                    .prop("outerHTML"),
                ]),
              (this._controls.$absolute = (i.dotsContainer
                ? s(i.dotsContainer)
                : s("<div>").addClass(i.dotsClass).appendTo(this.$element)
              ).addClass("disabled")),
              this._controls.$absolute.on(
                "click",
                "button",
                s.proxy(function (t) {
                  var e = (s(t.target).parent().is(this._controls.$absolute)
                    ? s(t.target)
                    : s(t.target).parent()
                  ).index();
                  t.preventDefault(), this.to(e, i.dotsSpeed);
                }, this)
              ),
              this._overrides))
                this._core[t] = s.proxy(this[t], this);
            }),
            (e.prototype.destroy = function () {
              var t,
                e,
                i,
                n,
                s = this._core.settings;
              for (t in this._handlers) this.$element.off(t, this._handlers[t]);
              for (e in this._controls)
                "$relative" === e && s.navContainer
                  ? this._controls[e].html("")
                  : this._controls[e].remove();
              for (n in this.overides) this._core[n] = this._overrides[n];
              for (i in Object.getOwnPropertyNames(this))
                "function" != typeof this[i] && (this[i] = null);
            }),
            (e.prototype.update = function () {
              var t,
                e,
                i = this._core.clones().length / 2,
                n = i + this._core.items().length,
                s = this._core.maximum(!0),
                r = this._core.settings,
                o =
                  r.center || r.autoWidth || r.dotsData
                    ? 1
                    : r.dotsEach || r.items;
              if (
                ("page" !== r.slideBy &&
                  (r.slideBy = Math.min(r.slideBy, r.items)),
                r.dots || "page" == r.slideBy)
              )
                for (this._pages = [], t = i, e = 0; t < n; t++) {
                  if (o <= e || 0 === e) {
                    if (
                      (this._pages.push({
                        start: Math.min(s, t - i),
                        end: t - i + o - 1,
                      }),
                      Math.min(s, t - i) === s)
                    )
                      break;
                    (e = 0), 0;
                  }
                  e += this._core.mergers(this._core.relative(t));
                }
            }),
            (e.prototype.draw = function () {
              var t = this._core.settings,
                e = this._core.items().length <= t.items,
                i = this._core.relative(this._core.current()),
                n = t.loop || t.rewind;
              this._controls.$relative.toggleClass("disabled", !t.nav || e),
                t.nav &&
                  (this._controls.$previous.toggleClass(
                    "disabled",
                    !n && i <= this._core.minimum(!0)
                  ),
                  this._controls.$next.toggleClass(
                    "disabled",
                    !n && i >= this._core.maximum(!0)
                  )),
                this._controls.$absolute.toggleClass("disabled", !t.dots || e),
                t.dots &&
                  ((e =
                    this._pages.length -
                    this._controls.$absolute.children().length),
                  t.dotsData && 0 != e
                    ? this._controls.$absolute.html(this._templates.join(""))
                    : 0 < e
                    ? this._controls.$absolute.append(
                        new Array(1 + e).join(this._templates[0])
                      )
                    : e < 0 &&
                      this._controls.$absolute.children().slice(e).remove(),
                  this._controls.$absolute
                    .find(".active")
                    .removeClass("active"),
                  this._controls.$absolute
                    .children()
                    .eq(s.inArray(this.current(), this._pages))
                    .addClass("active"));
            }),
            (e.prototype.onTrigger = function (t) {
              var e = this._core.settings;
              t.page = {
                index: s.inArray(this.current(), this._pages),
                count: this._pages.length,
                size:
                  e &&
                  (e.center || e.autoWidth || e.dotsData
                    ? 1
                    : e.dotsEach || e.items),
              };
            }),
            (e.prototype.current = function () {
              var i = this._core.relative(this._core.current());
              return s
                .grep(
                  this._pages,
                  s.proxy(function (t, e) {
                    return t.start <= i && t.end >= i;
                  }, this)
                )
                .pop();
            }),
            (e.prototype.getPosition = function (t) {
              var e,
                i,
                n = this._core.settings;
              return (
                "page" == n.slideBy
                  ? ((e = s.inArray(this.current(), this._pages)),
                    (i = this._pages.length),
                    t ? ++e : --e,
                    (e = this._pages[((e % i) + i) % i].start))
                  : ((e = this._core.relative(this._core.current())),
                    (i = this._core.items().length),
                    t ? (e += n.slideBy) : (e -= n.slideBy)),
                e
              );
            }),
            (e.prototype.next = function (t) {
              s.proxy(this._overrides.to, this._core)(this.getPosition(!0), t);
            }),
            (e.prototype.prev = function (t) {
              s.proxy(this._overrides.to, this._core)(this.getPosition(!1), t);
            }),
            (e.prototype.to = function (t, e, i) {
              !i && this._pages.length
                ? ((i = this._pages.length),
                  s.proxy(this._overrides.to, this._core)(
                    this._pages[((t % i) + i) % i].start,
                    e
                  ))
                : s.proxy(this._overrides.to, this._core)(t, e);
            }),
            (s.fn.owlCarousel.Constructor.Plugins.Navigation = e);
        })(window.Zepto || t, (window, document)),
        (function (n, s) {
          "use strict";
          var e = function (t) {
            (this._core = t),
              (this._hashes = {}),
              (this.$element = this._core.$element),
              (this._handlers = {
                "initialized.owl.carousel": n.proxy(function (t) {
                  t.namespace &&
                    "URLHash" === this._core.settings.startPosition &&
                    n(s).trigger("hashchange.owl.navigation");
                }, this),
                "prepared.owl.carousel": n.proxy(function (t) {
                  var e;
                  !t.namespace ||
                    ((e = n(t.content)
                      .find("[data-hash]")
                      .addBack("[data-hash]")
                      .attr("data-hash")) &&
                      (this._hashes[e] = t.content));
                }, this),
                "changed.owl.carousel": n.proxy(function (t) {
                  var i;
                  t.namespace &&
                    "position" === t.property.name &&
                    ((i = this._core.items(
                      this._core.relative(this._core.current())
                    )),
                    (t = n
                      .map(this._hashes, function (t, e) {
                        return t === i ? e : null;
                      })
                      .join()) &&
                      s.location.hash.slice(1) !== t &&
                      (s.location.hash = t));
                }, this),
              }),
              (this._core.options = n.extend(
                {},
                e.Defaults,
                this._core.options
              )),
              this.$element.on(this._handlers),
              n(s).on(
                "hashchange.owl.navigation",
                n.proxy(function (t) {
                  var e = s.location.hash.substring(1),
                    i = this._core.$stage.children(),
                    e = this._hashes[e] && i.index(this._hashes[e]);
                  void 0 !== e &&
                    e !== this._core.current() &&
                    this._core.to(this._core.relative(e), !1, !0);
                }, this)
              );
          };
          (e.Defaults = { URLhashListener: !1 }),
            (e.prototype.destroy = function () {
              var t, e;
              for (t in (n(s).off("hashchange.owl.navigation"), this._handlers))
                this._core.$element.off(t, this._handlers[t]);
              for (e in Object.getOwnPropertyNames(this))
                "function" != typeof this[e] && (this[e] = null);
            }),
            (n.fn.owlCarousel.Constructor.Plugins.Hash = e);
        })(window.Zepto || t, window, document),
        (function (s, r) {
          var o = s("<support>").get(0).style,
            a = "Webkit Moz O ms".split(" "),
            t = {
              transition: {
                end: {
                  WebkitTransition: "webkitTransitionEnd",
                  MozTransition: "transitionend",
                  OTransition: "oTransitionEnd",
                  transition: "transitionend",
                },
              },
              animation: {
                end: {
                  WebkitAnimation: "webkitAnimationEnd",
                  MozAnimation: "animationend",
                  OAnimation: "oAnimationEnd",
                  animation: "animationend",
                },
              },
            },
            e = function () {
              return !!l("transform");
            },
            i = function () {
              return !!l("perspective");
            },
            n = function () {
              return !!l("animation");
            };
          function l(t, i) {
            var n = !1,
              e = t.charAt(0).toUpperCase() + t.slice(1);
            return (
              s.each((t + " " + a.join(e + " ") + e).split(" "), function (
                t,
                e
              ) {
                if (o[e] !== r) return (n = !i || e), !1;
              }),
              n
            );
          }
          function u(t) {
            return l(t, !0);
          }
          !(function () {
            return !!l("transition");
          })() ||
            ((s.support.transition = new String(u("transition"))),
            (s.support.transition.end =
              t.transition.end[s.support.transition])),
            n() &&
              ((s.support.animation = new String(u("animation"))),
              (s.support.animation.end = t.animation.end[s.support.animation])),
            e() &&
              ((s.support.transform = new String(u("transform"))),
              (s.support.transform3d = i()));
        })(window.Zepto || t, (window, void document));
    }.call(this, i(0), i(0)));
  },
  function (t, e, i) {
    var n;
    (n = [i(0)]),
      void 0 ===
        (i =
          "function" ==
          typeof (i = function (S, N) {
            function A() {
              return new Date(Date.UTC.apply(Date, arguments));
            }
            function O() {
              var t = new Date();
              return A(t.getFullYear(), t.getMonth(), t.getDate());
            }
            function r(t, e) {
              return (
                t.getUTCFullYear() === e.getUTCFullYear() &&
                t.getUTCMonth() === e.getUTCMonth() &&
                t.getUTCDate() === e.getUTCDate()
              );
            }
            function t(t, e) {
              return function () {
                if (e !== N) S.fn.datepicker.deprecated(e);
                return this[t].apply(this, arguments);
              };
            }
            function u(t) {
              return t && !isNaN(t.getTime());
            }
            var i = (function () {
                var e = {
                  get: function (t) {
                    return this.slice(t)[0];
                  },
                  contains: function (t) {
                    var e = t && t.valueOf();
                    for (var i = 0, n = this.length; i < n; i++)
                      if (
                        0 <= this[i].valueOf() - e &&
                        this[i].valueOf() - e < 1e3 * 60 * 60 * 24
                      )
                        return i;
                    return -1;
                  },
                  remove: function (t) {
                    this.splice(t, 1);
                  },
                  replace: function (t) {
                    if (!t) return;
                    if (!S.isArray(t)) t = [t];
                    this.clear();
                    this.push.apply(this, t);
                  },
                  clear: function () {
                    this.length = 0;
                  },
                  copy: function () {
                    var t = new i();
                    t.replace(this);
                    return t;
                  },
                };
                return function () {
                  var t = [];
                  t.push.apply(t, arguments);
                  S.extend(t, e);
                  return t;
                };
              })(),
              x = function (t, e) {
                S.data(t, "datepicker", this);
                this._events = [];
                this._secondaryEvents = [];
                this._process_options(e);
                this.dates = new i();
                this.viewDate = this.o.defaultViewDate;
                this.focusDate = null;
                this.element = S(t);
                this.isInput = this.element.is("input");
                this.inputField = this.isInput
                  ? this.element
                  : this.element.find("input");
                this.component = this.element.hasClass("date")
                  ? this.element.find(
                      ".add-on, .input-group-addon, .input-group-append, .input-group-prepend, .btn"
                    )
                  : false;
                if (this.component && this.component.length === 0)
                  this.component = false;
                this.isInline = !this.component && this.element.is("div");
                this.picker = S(j.template);
                if (this._check_template(this.o.templates.leftArrow))
                  this.picker.find(".prev").html(this.o.templates.leftArrow);
                if (this._check_template(this.o.templates.rightArrow))
                  this.picker.find(".next").html(this.o.templates.rightArrow);
                this._buildEvents();
                this._attachEvents();
                if (this.isInline)
                  this.picker
                    .addClass("datepicker-inline")
                    .appendTo(this.element);
                else this.picker.addClass("datepicker-dropdown dropdown-menu");
                if (this.o.rtl) this.picker.addClass("datepicker-rtl");
                if (this.o.calendarWeeks)
                  this.picker
                    .find(
                      ".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear"
                    )
                    .attr("colspan", function (t, e) {
                      return Number(e) + 1;
                    });
                this._process_options({
                  startDate: this._o.startDate,
                  endDate: this._o.endDate,
                  daysOfWeekDisabled: this.o.daysOfWeekDisabled,
                  daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
                  datesDisabled: this.o.datesDisabled,
                });
                this._allow_update = false;
                this.setViewMode(this.o.startView);
                this._allow_update = true;
                this.fillDow();
                this.fillMonths();
                this.update();
                if (this.isInline) this.show();
              };
            x.prototype = {
              constructor: x,
              _resolveViewName: function (i) {
                S.each(j.viewModes, function (t, e) {
                  if (i === t || S.inArray(i, e.names) !== -1) {
                    i = t;
                    return false;
                  }
                });
                return i;
              },
              _resolveDaysOfWeek: function (t) {
                if (!S.isArray(t)) t = t.split(/[,\s]*/);
                return S.map(t, Number);
              },
              _check_template: function (t) {
                try {
                  if (t === N || t === "") return false;
                  if ((t.match(/[<>]/g) || []).length <= 0) return true;
                  var e = S(t);
                  return e.length > 0;
                } catch (t) {
                  return false;
                }
              },
              _process_options: function (t) {
                this._o = S.extend({}, this._o, t);
                var e = (this.o = S.extend({}, this._o));
                var i = e.language;
                if (!M[i]) {
                  i = i.split("-")[0];
                  if (!M[i]) i = f.language;
                }
                e.language = i;
                e.startView = this._resolveViewName(e.startView);
                e.minViewMode = this._resolveViewName(e.minViewMode);
                e.maxViewMode = this._resolveViewName(e.maxViewMode);
                e.startView = Math.max(
                  this.o.minViewMode,
                  Math.min(this.o.maxViewMode, e.startView)
                );
                if (e.multidate !== true) {
                  e.multidate = Number(e.multidate) || false;
                  if (e.multidate !== false)
                    e.multidate = Math.max(0, e.multidate);
                }
                e.multidateSeparator = String(e.multidateSeparator);
                e.weekStart %= 7;
                e.weekEnd = (e.weekStart + 6) % 7;
                var n = j.parseFormat(e.format);
                if (e.startDate !== -Infinity)
                  if (!!e.startDate)
                    if (e.startDate instanceof Date)
                      e.startDate = this._local_to_utc(
                        this._zero_time(e.startDate)
                      );
                    else
                      e.startDate = j.parseDate(
                        e.startDate,
                        n,
                        e.language,
                        e.assumeNearbyYear
                      );
                  else e.startDate = -Infinity;
                if (e.endDate !== Infinity)
                  if (!!e.endDate)
                    if (e.endDate instanceof Date)
                      e.endDate = this._local_to_utc(
                        this._zero_time(e.endDate)
                      );
                    else
                      e.endDate = j.parseDate(
                        e.endDate,
                        n,
                        e.language,
                        e.assumeNearbyYear
                      );
                  else e.endDate = Infinity;
                e.daysOfWeekDisabled = this._resolveDaysOfWeek(
                  e.daysOfWeekDisabled || []
                );
                e.daysOfWeekHighlighted = this._resolveDaysOfWeek(
                  e.daysOfWeekHighlighted || []
                );
                e.datesDisabled = e.datesDisabled || [];
                if (!S.isArray(e.datesDisabled))
                  e.datesDisabled = e.datesDisabled.split(",");
                e.datesDisabled = S.map(e.datesDisabled, function (t) {
                  return j.parseDate(t, n, e.language, e.assumeNearbyYear);
                });
                var s = String(e.orientation).toLowerCase().split(/\s+/g),
                  r = e.orientation.toLowerCase();
                s = S.grep(s, function (t) {
                  return /^auto|left|right|top|bottom$/.test(t);
                });
                e.orientation = { x: "auto", y: "auto" };
                if (!r || r === "auto");
                else if (s.length === 1)
                  switch (s[0]) {
                    case "top":
                    case "bottom":
                      e.orientation.y = s[0];
                      break;
                    case "left":
                    case "right":
                      e.orientation.x = s[0];
                      break;
                  }
                else {
                  r = S.grep(s, function (t) {
                    return /^left|right$/.test(t);
                  });
                  e.orientation.x = r[0] || "auto";
                  r = S.grep(s, function (t) {
                    return /^top|bottom$/.test(t);
                  });
                  e.orientation.y = r[0] || "auto";
                }
                if (
                  e.defaultViewDate instanceof Date ||
                  typeof e.defaultViewDate === "string"
                )
                  e.defaultViewDate = j.parseDate(
                    e.defaultViewDate,
                    n,
                    e.language,
                    e.assumeNearbyYear
                  );
                else if (e.defaultViewDate) {
                  var o = e.defaultViewDate.year || new Date().getFullYear();
                  var a = e.defaultViewDate.month || 0;
                  var l = e.defaultViewDate.day || 1;
                  e.defaultViewDate = A(o, a, l);
                } else e.defaultViewDate = O();
              },
              _applyEvents: function (t) {
                for (var e = 0, i, n, s; e < t.length; e++) {
                  i = t[e][0];
                  if (t[e].length === 2) {
                    n = N;
                    s = t[e][1];
                  } else if (t[e].length === 3) {
                    n = t[e][1];
                    s = t[e][2];
                  }
                  i.on(s, n);
                }
              },
              _unapplyEvents: function (t) {
                for (var e = 0, i, n, s; e < t.length; e++) {
                  i = t[e][0];
                  if (t[e].length === 2) {
                    s = N;
                    n = t[e][1];
                  } else if (t[e].length === 3) {
                    s = t[e][1];
                    n = t[e][2];
                  }
                  i.off(n, s);
                }
              },
              _buildEvents: function () {
                var t = {
                  keyup: S.proxy(function (t) {
                    if (
                      S.inArray(t.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) ===
                      -1
                    )
                      this.update();
                  }, this),
                  keydown: S.proxy(this.keydown, this),
                  paste: S.proxy(this.paste, this),
                };
                if (this.o.showOnFocus === true)
                  t.focus = S.proxy(this.show, this);
                if (this.isInput) this._events = [[this.element, t]];
                else if (this.component && this.inputField.length)
                  this._events = [
                    [this.inputField, t],
                    [this.component, { click: S.proxy(this.show, this) }],
                  ];
                else
                  this._events = [
                    [
                      this.element,
                      {
                        click: S.proxy(this.show, this),
                        keydown: S.proxy(this.keydown, this),
                      },
                    ],
                  ];
                this._events.push(
                  [
                    this.element,
                    "*",
                    {
                      blur: S.proxy(function (t) {
                        this._focused_from = t.target;
                      }, this),
                    },
                  ],
                  [
                    this.element,
                    {
                      blur: S.proxy(function (t) {
                        this._focused_from = t.target;
                      }, this),
                    },
                  ]
                );
                if (this.o.immediateUpdates)
                  this._events.push([
                    this.element,
                    {
                      "changeYear changeMonth": S.proxy(function (t) {
                        this.update(t.date);
                      }, this),
                    },
                  ]);
                this._secondaryEvents = [
                  [this.picker, { click: S.proxy(this.click, this) }],
                  [
                    this.picker,
                    ".prev, .next",
                    { click: S.proxy(this.navArrowsClick, this) },
                  ],
                  [
                    this.picker,
                    ".day:not(.disabled)",
                    { click: S.proxy(this.dayCellClick, this) },
                  ],
                  [S(window), { resize: S.proxy(this.place, this) }],
                  [
                    S(document),
                    {
                      "mousedown touchstart": S.proxy(function (t) {
                        if (
                          !(
                            this.element.is(t.target) ||
                            this.element.find(t.target).length ||
                            this.picker.is(t.target) ||
                            this.picker.find(t.target).length ||
                            this.isInline
                          )
                        )
                          this.hide();
                      }, this),
                    },
                  ],
                ];
              },
              _attachEvents: function () {
                this._detachEvents();
                this._applyEvents(this._events);
              },
              _detachEvents: function () {
                this._unapplyEvents(this._events);
              },
              _attachSecondaryEvents: function () {
                this._detachSecondaryEvents();
                this._applyEvents(this._secondaryEvents);
              },
              _detachSecondaryEvents: function () {
                this._unapplyEvents(this._secondaryEvents);
              },
              _trigger: function (t, e) {
                var i = e || this.dates.get(-1),
                  n = this._utc_to_local(i);
                this.element.trigger({
                  type: t,
                  date: n,
                  viewMode: this.viewMode,
                  dates: S.map(this.dates, this._utc_to_local),
                  format: S.proxy(function (t, e) {
                    if (arguments.length === 0) {
                      t = this.dates.length - 1;
                      e = this.o.format;
                    } else if (typeof t === "string") {
                      e = t;
                      t = this.dates.length - 1;
                    }
                    e = e || this.o.format;
                    var i = this.dates.get(t);
                    return j.formatDate(i, e, this.o.language);
                  }, this),
                });
              },
              show: function () {
                if (
                  this.inputField.is(":disabled") ||
                  (this.inputField.prop("readonly") &&
                    this.o.enableOnReadonly === false)
                )
                  return;
                if (!this.isInline) this.picker.appendTo(this.o.container);
                this.place();
                this.picker.show();
                this._attachSecondaryEvents();
                this._trigger("show");
                if (
                  (window.navigator.msMaxTouchPoints ||
                    "ontouchstart" in document) &&
                  this.o.disableTouchKeyboard
                )
                  S(this.element).blur();
                return this;
              },
              hide: function () {
                if (this.isInline || !this.picker.is(":visible")) return this;
                this.focusDate = null;
                this.picker.hide().detach();
                this._detachSecondaryEvents();
                this.setViewMode(this.o.startView);
                if (this.o.forceParse && this.inputField.val()) this.setValue();
                this._trigger("hide");
                return this;
              },
              destroy: function () {
                this.hide();
                this._detachEvents();
                this._detachSecondaryEvents();
                this.picker.remove();
                delete this.element.data().datepicker;
                if (!this.isInput) delete this.element.data().date;
                return this;
              },
              paste: function (t) {
                var e;
                if (
                  t.originalEvent.clipboardData &&
                  t.originalEvent.clipboardData.types &&
                  S.inArray(
                    "text/plain",
                    t.originalEvent.clipboardData.types
                  ) !== -1
                )
                  e = t.originalEvent.clipboardData.getData("text/plain");
                else if (window.clipboardData)
                  e = window.clipboardData.getData("Text");
                else return;
                this.setDate(e);
                this.update();
                t.preventDefault();
              },
              _utc_to_local: function (t) {
                if (!t) return t;
                var e = new Date(t.getTime() + t.getTimezoneOffset() * 6e4);
                if (e.getTimezoneOffset() !== t.getTimezoneOffset())
                  e = new Date(t.getTime() + e.getTimezoneOffset() * 6e4);
                return e;
              },
              _local_to_utc: function (t) {
                return t && new Date(t.getTime() - t.getTimezoneOffset() * 6e4);
              },
              _zero_time: function (t) {
                return (
                  t && new Date(t.getFullYear(), t.getMonth(), t.getDate())
                );
              },
              _zero_utc_time: function (t) {
                return (
                  t && A(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate())
                );
              },
              getDates: function () {
                return S.map(this.dates, this._utc_to_local);
              },
              getUTCDates: function () {
                return S.map(this.dates, function (t) {
                  return new Date(t);
                });
              },
              getDate: function () {
                return this._utc_to_local(this.getUTCDate());
              },
              getUTCDate: function () {
                var t = this.dates.get(-1);
                if (t !== N) return new Date(t);
                else return null;
              },
              clearDates: function () {
                this.inputField.val("");
                this.update();
                this._trigger("changeDate");
                if (this.o.autoclose) this.hide();
              },
              setDates: function () {
                var t = S.isArray(arguments[0]) ? arguments[0] : arguments;
                this.update.apply(this, t);
                this._trigger("changeDate");
                this.setValue();
                return this;
              },
              setUTCDates: function () {
                var t = S.isArray(arguments[0]) ? arguments[0] : arguments;
                this.setDates.apply(this, S.map(t, this._utc_to_local));
                return this;
              },
              setDate: t("setDates"),
              setUTCDate: t("setUTCDates"),
              remove: t(
                "destroy",
                "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"
              ),
              setValue: function () {
                var t = this.getFormattedDate();
                this.inputField.val(t);
                return this;
              },
              getFormattedDate: function (e) {
                if (e === N) e = this.o.format;
                var i = this.o.language;
                return S.map(this.dates, function (t) {
                  return j.formatDate(t, e, i);
                }).join(this.o.multidateSeparator);
              },
              getStartDate: function () {
                return this.o.startDate;
              },
              setStartDate: function (t) {
                this._process_options({ startDate: t });
                this.update();
                this.updateNavArrows();
                return this;
              },
              getEndDate: function () {
                return this.o.endDate;
              },
              setEndDate: function (t) {
                this._process_options({ endDate: t });
                this.update();
                this.updateNavArrows();
                return this;
              },
              setDaysOfWeekDisabled: function (t) {
                this._process_options({ daysOfWeekDisabled: t });
                this.update();
                return this;
              },
              setDaysOfWeekHighlighted: function (t) {
                this._process_options({ daysOfWeekHighlighted: t });
                this.update();
                return this;
              },
              setDatesDisabled: function (t) {
                this._process_options({ datesDisabled: t });
                this.update();
                return this;
              },
              place: function () {
                if (this.isInline) return this;
                var t = this.picker.outerWidth(),
                  e = this.picker.outerHeight(),
                  i = 10,
                  n = S(this.o.container),
                  s = n.width(),
                  r =
                    this.o.container === "body"
                      ? S(document).scrollTop()
                      : n.scrollTop(),
                  o = n.offset();
                var a = [0];
                this.element.parents().each(function () {
                  var t = S(this).css("z-index");
                  if (t !== "auto" && Number(t) !== 0) a.push(Number(t));
                });
                var l = Math.max.apply(Math, a) + this.o.zIndexOffset;
                var u = this.component
                  ? this.component.parent().offset()
                  : this.element.offset();
                var c = this.component
                  ? this.component.outerHeight(true)
                  : this.element.outerHeight(false);
                var h = this.component
                  ? this.component.outerWidth(true)
                  : this.element.outerWidth(false);
                var d = u.left - o.left;
                var f = u.top - o.top;
                if (this.o.container !== "body") f += r;
                this.picker.removeClass(
                  "datepicker-orient-top datepicker-orient-bottom " +
                    "datepicker-orient-right datepicker-orient-left"
                );
                if (this.o.orientation.x !== "auto") {
                  this.picker.addClass(
                    "datepicker-orient-" + this.o.orientation.x
                  );
                  if (this.o.orientation.x === "right") d -= t - h;
                } else if (u.left < 0) {
                  this.picker.addClass("datepicker-orient-left");
                  d -= u.left - i;
                } else if (d + t > s) {
                  this.picker.addClass("datepicker-orient-right");
                  d += h - t;
                } else if (this.o.rtl)
                  this.picker.addClass("datepicker-orient-right");
                else this.picker.addClass("datepicker-orient-left");
                var p = this.o.orientation.y,
                  g;
                if (p === "auto") {
                  g = -r + f - e;
                  p = g < 0 ? "bottom" : "top";
                }
                this.picker.addClass("datepicker-orient-" + p);
                if (p === "top")
                  f -= e + parseInt(this.picker.css("padding-top"));
                else f += c;
                if (this.o.rtl) {
                  var m = s - (d + h);
                  this.picker.css({ top: f, right: m, zIndex: l });
                } else this.picker.css({ top: f, left: d, zIndex: l });
                return this;
              },
              _allow_update: true,
              update: function () {
                if (!this._allow_update) return this;
                var t = this.dates.copy(),
                  i = [],
                  e = false;
                if (arguments.length) {
                  S.each(
                    arguments,
                    S.proxy(function (t, e) {
                      if (e instanceof Date) e = this._local_to_utc(e);
                      i.push(e);
                    }, this)
                  );
                  e = true;
                } else {
                  i = this.isInput
                    ? this.element.val()
                    : this.element.data("date") || this.inputField.val();
                  if (i && this.o.multidate)
                    i = i.split(this.o.multidateSeparator);
                  else i = [i];
                  delete this.element.data().date;
                }
                i = S.map(
                  i,
                  S.proxy(function (t) {
                    return j.parseDate(
                      t,
                      this.o.format,
                      this.o.language,
                      this.o.assumeNearbyYear
                    );
                  }, this)
                );
                i = S.grep(
                  i,
                  S.proxy(function (t) {
                    return !this.dateWithinRange(t) || !t;
                  }, this),
                  true
                );
                this.dates.replace(i);
                if (this.o.updateViewDate)
                  if (this.dates.length)
                    this.viewDate = new Date(this.dates.get(-1));
                  else if (this.viewDate < this.o.startDate)
                    this.viewDate = new Date(this.o.startDate);
                  else if (this.viewDate > this.o.endDate)
                    this.viewDate = new Date(this.o.endDate);
                  else this.viewDate = this.o.defaultViewDate;
                if (e) {
                  this.setValue();
                  this.element.change();
                } else if (this.dates.length)
                  if (String(t) !== String(this.dates) && e) {
                    this._trigger("changeDate");
                    this.element.change();
                  }
                if (!this.dates.length && t.length) {
                  this._trigger("clearDate");
                  this.element.change();
                }
                this.fill();
                return this;
              },
              fillDow: function () {
                if (this.o.showWeekDays) {
                  var t = this.o.weekStart,
                    e = "<tr>";
                  if (this.o.calendarWeeks) e += '<th class="cw">&#160;</th>';
                  while (t < this.o.weekStart + 7) {
                    e += '<th class="dow';
                    if (S.inArray(t, this.o.daysOfWeekDisabled) !== -1)
                      e += " disabled";
                    e += '">' + M[this.o.language].daysMin[t++ % 7] + "</th>";
                  }
                  e += "</tr>";
                  this.picker.find(".datepicker-days thead").append(e);
                }
              },
              fillMonths: function () {
                var t = this._utc_to_local(this.viewDate);
                var e = "";
                var i;
                for (var n = 0; n < 12; n++) {
                  i = t && t.getMonth() === n ? " focused" : "";
                  e +=
                    '<span class="month' +
                    i +
                    '">' +
                    M[this.o.language].monthsShort[n] +
                    "</span>";
                }
                this.picker.find(".datepicker-months td").html(e);
              },
              setRange: function (t) {
                if (!t || !t.length) delete this.range;
                else
                  this.range = S.map(t, function (t) {
                    return t.valueOf();
                  });
                this.fill();
              },
              getClassNames: function (t) {
                var e = [],
                  i = this.viewDate.getUTCFullYear(),
                  n = this.viewDate.getUTCMonth(),
                  s = O();
                if (
                  t.getUTCFullYear() < i ||
                  (t.getUTCFullYear() === i && t.getUTCMonth() < n)
                )
                  e.push("old");
                else if (
                  t.getUTCFullYear() > i ||
                  (t.getUTCFullYear() === i && t.getUTCMonth() > n)
                )
                  e.push("new");
                if (this.focusDate && t.valueOf() === this.focusDate.valueOf())
                  e.push("focused");
                if (this.o.todayHighlight && r(t, s)) e.push("today");
                if (this.dates.contains(t) !== -1) e.push("active");
                if (!this.dateWithinRange(t)) e.push("disabled");
                if (this.dateIsDisabled(t)) e.push("disabled", "disabled-date");
                if (
                  S.inArray(t.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1
                )
                  e.push("highlighted");
                if (this.range) {
                  if (
                    t > this.range[0] &&
                    t < this.range[this.range.length - 1]
                  )
                    e.push("range");
                  if (S.inArray(t.valueOf(), this.range) !== -1)
                    e.push("selected");
                  if (t.valueOf() === this.range[0]) e.push("range-start");
                  if (t.valueOf() === this.range[this.range.length - 1])
                    e.push("range-end");
                }
                return e;
              },
              _fill_yearsView: function (t, e, i, n, s, r, o) {
                var a = "";
                var l = i / 10;
                var u = this.picker.find(t);
                var c = Math.floor(n / i) * i;
                var h = c + l * 9;
                var d = Math.floor(this.viewDate.getFullYear() / l) * l;
                var f = S.map(this.dates, function (t) {
                  return Math.floor(t.getUTCFullYear() / l) * l;
                });
                var p, g, m;
                for (var v = c - l; v <= h + l; v += l) {
                  p = [e];
                  g = null;
                  if (v === c - l) p.push("old");
                  else if (v === h + l) p.push("new");
                  if (S.inArray(v, f) !== -1) p.push("active");
                  if (v < s || v > r) p.push("disabled");
                  if (v === d) p.push("focused");
                  if (o !== S.noop) {
                    m = o(new Date(v, 0, 1));
                    if (m === N) m = {};
                    else if (typeof m === "boolean") m = { enabled: m };
                    else if (typeof m === "string") m = { classes: m };
                    if (m.enabled === false) p.push("disabled");
                    if (m.classes) p = p.concat(m.classes.split(/\s+/));
                    if (m.tooltip) g = m.tooltip;
                  }
                  a +=
                    '<span class="' +
                    p.join(" ") +
                    '"' +
                    (g ? ' title="' + g + '"' : "") +
                    ">" +
                    v +
                    "</span>";
                }
                u.find(".datepicker-switch").text(c + "-" + h);
                u.find("td").html(a);
              },
              fill: function () {
                var t = new Date(this.viewDate),
                  s = t.getUTCFullYear(),
                  e = t.getUTCMonth(),
                  i =
                    this.o.startDate !== -Infinity
                      ? this.o.startDate.getUTCFullYear()
                      : -Infinity,
                  n =
                    this.o.startDate !== -Infinity
                      ? this.o.startDate.getUTCMonth()
                      : -Infinity,
                  r =
                    this.o.endDate !== Infinity
                      ? this.o.endDate.getUTCFullYear()
                      : Infinity,
                  o =
                    this.o.endDate !== Infinity
                      ? this.o.endDate.getUTCMonth()
                      : Infinity,
                  a = M[this.o.language].today || M["en"].today || "",
                  l = M[this.o.language].clear || M["en"].clear || "",
                  u = M[this.o.language].titleFormat || M["en"].titleFormat,
                  c = O(),
                  h =
                    (this.o.todayBtn === true ||
                      this.o.todayBtn === "linked") &&
                    c >= this.o.startDate &&
                    c <= this.o.endDate &&
                    !this.weekOfDateIsDisabled(c),
                  d,
                  f;
                if (isNaN(s) || isNaN(e)) return;
                this.picker
                  .find(".datepicker-days .datepicker-switch")
                  .text(j.formatDate(t, u, this.o.language));
                this.picker
                  .find("tfoot .today")
                  .text(a)
                  .css("display", h ? "table-cell" : "none");
                this.picker
                  .find("tfoot .clear")
                  .text(l)
                  .css(
                    "display",
                    this.o.clearBtn === true ? "table-cell" : "none"
                  );
                this.picker
                  .find("thead .datepicker-title")
                  .text(this.o.title)
                  .css(
                    "display",
                    typeof this.o.title === "string" && this.o.title !== ""
                      ? "table-cell"
                      : "none"
                  );
                this.updateNavArrows();
                this.fillMonths();
                var p = A(s, e, 0),
                  g = p.getUTCDate();
                p.setUTCDate(g - ((p.getUTCDay() - this.o.weekStart + 7) % 7));
                var m = new Date(p);
                if (p.getUTCFullYear() < 100)
                  m.setUTCFullYear(p.getUTCFullYear());
                m.setUTCDate(m.getUTCDate() + 42);
                m = m.valueOf();
                var v = [];
                var y, _;
                while (p.valueOf() < m) {
                  y = p.getUTCDay();
                  if (y === this.o.weekStart) {
                    v.push("<tr>");
                    if (this.o.calendarWeeks) {
                      var w = new Date(
                          +p + ((this.o.weekStart - y - 7) % 7) * 864e5
                        ),
                        b = new Date(
                          Number(w) + ((7 + 4 - w.getUTCDay()) % 7) * 864e5
                        ),
                        x = new Date(
                          Number((x = A(b.getUTCFullYear(), 0, 1))) +
                            ((7 + 4 - x.getUTCDay()) % 7) * 864e5
                        ),
                        C = (b - x) / 864e5 / 7 + 1;
                      v.push('<td class="cw">' + C + "</td>");
                    }
                  }
                  _ = this.getClassNames(p);
                  _.push("day");
                  var T = p.getUTCDate();
                  if (this.o.beforeShowDay !== S.noop) {
                    f = this.o.beforeShowDay(this._utc_to_local(p));
                    if (f === N) f = {};
                    else if (typeof f === "boolean") f = { enabled: f };
                    else if (typeof f === "string") f = { classes: f };
                    if (f.enabled === false) _.push("disabled");
                    if (f.classes) _ = _.concat(f.classes.split(/\s+/));
                    if (f.tooltip) d = f.tooltip;
                    if (f.content) T = f.content;
                  }
                  if (S.isFunction(S.uniqueSort)) _ = S.uniqueSort(_);
                  else _ = S.unique(_);
                  v.push(
                    '<td class="' +
                      _.join(" ") +
                      '"' +
                      (d ? ' title="' + d + '"' : "") +
                      ' data-date="' +
                      p.getTime().toString() +
                      '">' +
                      T +
                      "</td>"
                  );
                  d = null;
                  if (y === this.o.weekEnd) v.push("</tr>");
                  p.setUTCDate(p.getUTCDate() + 1);
                }
                this.picker.find(".datepicker-days tbody").html(v.join(""));
                var D =
                  M[this.o.language].monthsTitle ||
                  M["en"].monthsTitle ||
                  "Months";
                var E = this.picker
                  .find(".datepicker-months")
                  .find(".datepicker-switch")
                  .text(this.o.maxViewMode < 2 ? D : s)
                  .end()
                  .find("tbody span")
                  .removeClass("active");
                S.each(this.dates, function (t, e) {
                  if (e.getUTCFullYear() === s)
                    E.eq(e.getUTCMonth()).addClass("active");
                });
                if (s < i || s > r) E.addClass("disabled");
                if (s === i) E.slice(0, n).addClass("disabled");
                if (s === r) E.slice(o + 1).addClass("disabled");
                if (this.o.beforeShowMonth !== S.noop) {
                  var k = this;
                  S.each(E, function (t, e) {
                    var i = new Date(s, t, 1);
                    var n = k.o.beforeShowMonth(i);
                    if (n === N) n = {};
                    else if (typeof n === "boolean") n = { enabled: n };
                    else if (typeof n === "string") n = { classes: n };
                    if (n.enabled === false && !S(e).hasClass("disabled"))
                      S(e).addClass("disabled");
                    if (n.classes) S(e).addClass(n.classes);
                    if (n.tooltip) S(e).prop("title", n.tooltip);
                  });
                }
                this._fill_yearsView(
                  ".datepicker-years",
                  "year",
                  10,
                  s,
                  i,
                  r,
                  this.o.beforeShowYear
                );
                this._fill_yearsView(
                  ".datepicker-decades",
                  "decade",
                  100,
                  s,
                  i,
                  r,
                  this.o.beforeShowDecade
                );
                this._fill_yearsView(
                  ".datepicker-centuries",
                  "century",
                  1e3,
                  s,
                  i,
                  r,
                  this.o.beforeShowCentury
                );
              },
              updateNavArrows: function () {
                if (!this._allow_update) return;
                var t = new Date(this.viewDate),
                  e = t.getUTCFullYear(),
                  i = t.getUTCMonth(),
                  n =
                    this.o.startDate !== -Infinity
                      ? this.o.startDate.getUTCFullYear()
                      : -Infinity,
                  s =
                    this.o.startDate !== -Infinity
                      ? this.o.startDate.getUTCMonth()
                      : -Infinity,
                  r =
                    this.o.endDate !== Infinity
                      ? this.o.endDate.getUTCFullYear()
                      : Infinity,
                  o =
                    this.o.endDate !== Infinity
                      ? this.o.endDate.getUTCMonth()
                      : Infinity,
                  a,
                  l,
                  u = 1;
                switch (this.viewMode) {
                  case 4:
                    u *= 10;
                  case 3:
                    u *= 10;
                  case 2:
                    u *= 10;
                  case 1:
                    a = Math.floor(e / u) * u <= n;
                    l = Math.floor(e / u) * u + u > r;
                    break;
                  case 0:
                    a = e <= n && i <= s;
                    l = e >= r && i >= o;
                    break;
                }
                this.picker.find(".prev").toggleClass("disabled", a);
                this.picker.find(".next").toggleClass("disabled", l);
              },
              click: function (t) {
                t.preventDefault();
                t.stopPropagation();
                var e, i, n, s, r;
                e = S(t.target);
                if (
                  e.hasClass("datepicker-switch") &&
                  this.viewMode !== this.o.maxViewMode
                )
                  this.setViewMode(this.viewMode + 1);
                if (e.hasClass("today") && !e.hasClass("day")) {
                  this.setViewMode(0);
                  this._setDate(
                    O(),
                    this.o.todayBtn === "linked" ? null : "view"
                  );
                }
                if (e.hasClass("clear")) this.clearDates();
                if (!e.hasClass("disabled"))
                  if (
                    e.hasClass("month") ||
                    e.hasClass("year") ||
                    e.hasClass("decade") ||
                    e.hasClass("century")
                  ) {
                    this.viewDate.setUTCDate(1);
                    n = 1;
                    if (this.viewMode === 1) {
                      r = e.parent().find("span").index(e);
                      s = this.viewDate.getUTCFullYear();
                      this.viewDate.setUTCMonth(r);
                    } else {
                      r = 0;
                      s = Number(e.text());
                      this.viewDate.setUTCFullYear(s);
                    }
                    this._trigger(
                      j.viewModes[this.viewMode - 1].e,
                      this.viewDate
                    );
                    if (this.viewMode === this.o.minViewMode)
                      this._setDate(A(s, r, n));
                    else {
                      this.setViewMode(this.viewMode - 1);
                      this.fill();
                    }
                  }
                if (this.picker.is(":visible") && this._focused_from)
                  this._focused_from.focus();
                delete this._focused_from;
              },
              dayCellClick: function (t) {
                var e = S(t.currentTarget);
                var i = e.data("date");
                var n = new Date(i);
                if (this.o.updateViewDate) {
                  if (n.getUTCFullYear() !== this.viewDate.getUTCFullYear())
                    this._trigger("changeYear", this.viewDate);
                  if (n.getUTCMonth() !== this.viewDate.getUTCMonth())
                    this._trigger("changeMonth", this.viewDate);
                }
                this._setDate(n);
              },
              navArrowsClick: function (t) {
                var e = S(t.currentTarget);
                var i = e.hasClass("prev") ? -1 : 1;
                if (this.viewMode !== 0)
                  i *= j.viewModes[this.viewMode].navStep * 12;
                this.viewDate = this.moveMonth(this.viewDate, i);
                this._trigger(j.viewModes[this.viewMode].e, this.viewDate);
                this.fill();
              },
              _toggle_multidate: function (t) {
                var e = this.dates.contains(t);
                if (!t) this.dates.clear();
                if (e !== -1) {
                  if (
                    this.o.multidate === true ||
                    this.o.multidate > 1 ||
                    this.o.toggleActive
                  )
                    this.dates.remove(e);
                } else if (this.o.multidate === false) {
                  this.dates.clear();
                  this.dates.push(t);
                } else this.dates.push(t);
                if (typeof this.o.multidate === "number")
                  while (this.dates.length > this.o.multidate)
                    this.dates.remove(0);
              },
              _setDate: function (t, e) {
                if (!e || e === "date")
                  this._toggle_multidate(t && new Date(t));
                if ((!e && this.o.updateViewDate) || e === "view")
                  this.viewDate = t && new Date(t);
                this.fill();
                this.setValue();
                if (!e || e !== "view") this._trigger("changeDate");
                this.inputField.trigger("change");
                if (this.o.autoclose && (!e || e === "date")) this.hide();
              },
              moveDay: function (t, e) {
                var i = new Date(t);
                i.setUTCDate(t.getUTCDate() + e);
                return i;
              },
              moveWeek: function (t, e) {
                return this.moveDay(t, e * 7);
              },
              moveMonth: function (t, e) {
                if (!u(t)) return this.o.defaultViewDate;
                if (!e) return t;
                var i = new Date(t.valueOf()),
                  n = i.getUTCDate(),
                  s = i.getUTCMonth(),
                  r = Math.abs(e),
                  o,
                  a;
                e = e > 0 ? 1 : -1;
                if (r === 1) {
                  a =
                    e === -1
                      ? function () {
                          return i.getUTCMonth() === s;
                        }
                      : function () {
                          return i.getUTCMonth() !== o;
                        };
                  o = s + e;
                  i.setUTCMonth(o);
                  o = (o + 12) % 12;
                } else {
                  for (var l = 0; l < r; l++) i = this.moveMonth(i, e);
                  o = i.getUTCMonth();
                  i.setUTCDate(n);
                  a = function () {
                    return o !== i.getUTCMonth();
                  };
                }
                while (a()) {
                  i.setUTCDate(--n);
                  i.setUTCMonth(o);
                }
                return i;
              },
              moveYear: function (t, e) {
                return this.moveMonth(t, e * 12);
              },
              moveAvailableDate: function (t, e, i) {
                do {
                  t = this[i](t, e);
                  if (!this.dateWithinRange(t)) return false;
                  i = "moveDay";
                } while (this.dateIsDisabled(t));
                return t;
              },
              weekOfDateIsDisabled: function (t) {
                return (
                  S.inArray(t.getUTCDay(), this.o.daysOfWeekDisabled) !== -1
                );
              },
              dateIsDisabled: function (e) {
                return (
                  this.weekOfDateIsDisabled(e) ||
                  S.grep(this.o.datesDisabled, function (t) {
                    return r(e, t);
                  }).length > 0
                );
              },
              dateWithinRange: function (t) {
                return t >= this.o.startDate && t <= this.o.endDate;
              },
              keydown: function (t) {
                if (!this.picker.is(":visible")) {
                  if (t.keyCode === 40 || t.keyCode === 27) {
                    this.show();
                    t.stopPropagation();
                  }
                  return;
                }
                var e = false,
                  i,
                  n,
                  s = this.focusDate || this.viewDate;
                switch (t.keyCode) {
                  case 27:
                    if (this.focusDate) {
                      this.focusDate = null;
                      this.viewDate = this.dates.get(-1) || this.viewDate;
                      this.fill();
                    } else this.hide();
                    t.preventDefault();
                    t.stopPropagation();
                    break;
                  case 37:
                  case 38:
                  case 39:
                  case 40:
                    if (
                      !this.o.keyboardNavigation ||
                      this.o.daysOfWeekDisabled.length === 7
                    )
                      break;
                    i = t.keyCode === 37 || t.keyCode === 38 ? -1 : 1;
                    if (this.viewMode === 0) {
                      if (t.ctrlKey) {
                        n = this.moveAvailableDate(s, i, "moveYear");
                        if (n) this._trigger("changeYear", this.viewDate);
                      } else if (t.shiftKey) {
                        n = this.moveAvailableDate(s, i, "moveMonth");
                        if (n) this._trigger("changeMonth", this.viewDate);
                      } else if (t.keyCode === 37 || t.keyCode === 39)
                        n = this.moveAvailableDate(s, i, "moveDay");
                      else if (!this.weekOfDateIsDisabled(s))
                        n = this.moveAvailableDate(s, i, "moveWeek");
                    } else if (this.viewMode === 1) {
                      if (t.keyCode === 38 || t.keyCode === 40) i = i * 4;
                      n = this.moveAvailableDate(s, i, "moveMonth");
                    } else if (this.viewMode === 2) {
                      if (t.keyCode === 38 || t.keyCode === 40) i = i * 4;
                      n = this.moveAvailableDate(s, i, "moveYear");
                    }
                    if (n) {
                      this.focusDate = this.viewDate = n;
                      this.setValue();
                      this.fill();
                      t.preventDefault();
                    }
                    break;
                  case 13:
                    if (!this.o.forceParse) break;
                    s = this.focusDate || this.dates.get(-1) || this.viewDate;
                    if (this.o.keyboardNavigation) {
                      this._toggle_multidate(s);
                      e = true;
                    }
                    this.focusDate = null;
                    this.viewDate = this.dates.get(-1) || this.viewDate;
                    this.setValue();
                    this.fill();
                    if (this.picker.is(":visible")) {
                      t.preventDefault();
                      t.stopPropagation();
                      if (this.o.autoclose) this.hide();
                    }
                    break;
                  case 9:
                    this.focusDate = null;
                    this.viewDate = this.dates.get(-1) || this.viewDate;
                    this.fill();
                    this.hide();
                    break;
                }
                if (e) {
                  if (this.dates.length) this._trigger("changeDate");
                  else this._trigger("clearDate");
                  this.inputField.trigger("change");
                }
              },
              setViewMode: function (t) {
                this.viewMode = t;
                this.picker
                  .children("div")
                  .hide()
                  .filter(".datepicker-" + j.viewModes[this.viewMode].clsName)
                  .show();
                this.updateNavArrows();
                this._trigger("changeViewMode", new Date(this.viewDate));
              },
            };
            var c = function (t, e) {
              S.data(t, "datepicker", this);
              this.element = S(t);
              this.inputs = S.map(e.inputs, function (t) {
                return t.jquery ? t[0] : t;
              });
              delete e.inputs;
              this.keepEmptyValues = e.keepEmptyValues;
              delete e.keepEmptyValues;
              n.call(S(this.inputs), e).on(
                "changeDate",
                S.proxy(this.dateUpdated, this)
              );
              this.pickers = S.map(this.inputs, function (t) {
                return S.data(t, "datepicker");
              });
              this.updateDates();
            };
            function h(t, e) {
              var i = S(t).data(),
                n = {},
                s,
                r = new RegExp("^" + e.toLowerCase() + "([A-Z])");
              e = new RegExp("^" + e.toLowerCase());
              function o(t, e) {
                return e.toLowerCase();
              }
              for (var a in i)
                if (e.test(a)) {
                  s = a.replace(r, o);
                  n[s] = i[a];
                }
              return n;
            }
            function d(t) {
              var i = {};
              if (!M[t]) {
                t = t.split("-")[0];
                if (!M[t]) return;
              }
              var n = M[t];
              S.each(s, function (t, e) {
                if (e in n) i[e] = n[e];
              });
              return i;
            }
            c.prototype = {
              updateDates: function () {
                this.dates = S.map(this.pickers, function (t) {
                  return t.getUTCDate();
                });
                this.updateRanges();
              },
              updateRanges: function () {
                var i = S.map(this.dates, function (t) {
                  return t.valueOf();
                });
                S.each(this.pickers, function (t, e) {
                  e.setRange(i);
                });
              },
              clearDates: function () {
                S.each(this.pickers, function (t, e) {
                  e.clearDates();
                });
              },
              dateUpdated: function (t) {
                if (this.updating) return;
                this.updating = true;
                var i = S.data(t.target, "datepicker");
                if (i === N) return;
                var n = i.getUTCDate(),
                  s = this.keepEmptyValues,
                  e = S.inArray(t.target, this.inputs),
                  r = e - 1,
                  o = e + 1,
                  a = this.inputs.length;
                if (e === -1) return;
                S.each(this.pickers, function (t, e) {
                  if (!e.getUTCDate() && (e === i || !s)) e.setUTCDate(n);
                });
                if (n < this.dates[r])
                  while (r >= 0 && n < this.dates[r])
                    this.pickers[r--].setUTCDate(n);
                else if (n > this.dates[o])
                  while (o < a && n > this.dates[o])
                    this.pickers[o++].setUTCDate(n);
                this.updateDates();
                delete this.updating;
              },
              destroy: function () {
                S.map(this.pickers, function (t) {
                  t.destroy();
                });
                S(this.inputs).off("changeDate", this.dateUpdated);
                delete this.element.data().datepicker;
              },
              remove: t(
                "destroy",
                "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"
              ),
            };
            var e = S.fn.datepicker,
              n = function (a) {
                var l = Array.apply(null, arguments);
                l.shift();
                var u;
                this.each(function () {
                  var t = S(this),
                    e = t.data("datepicker"),
                    i = typeof a === "object" && a;
                  if (!e) {
                    var n = h(this, "date"),
                      s = S.extend({}, f, n, i),
                      r = d(s.language),
                      o = S.extend({}, f, r, n, i);
                    if (t.hasClass("input-daterange") || o.inputs) {
                      S.extend(o, {
                        inputs: o.inputs || t.find("input").toArray(),
                      });
                      e = new c(this, o);
                    } else e = new x(this, o);
                    t.data("datepicker", e);
                  }
                  if (typeof a === "string" && typeof e[a] === "function")
                    u = e[a].apply(e, l);
                });
                if (u === N || u instanceof x || u instanceof c) return this;
                if (this.length > 1)
                  throw new Error(
                    "Using only allowed for the collection of a single element (" +
                      a +
                      " function)"
                  );
                else return u;
              };
            S.fn.datepicker = n;
            var f = (S.fn.datepicker.defaults = {
                assumeNearbyYear: false,
                autoclose: false,
                beforeShowDay: S.noop,
                beforeShowMonth: S.noop,
                beforeShowYear: S.noop,
                beforeShowDecade: S.noop,
                beforeShowCentury: S.noop,
                calendarWeeks: false,
                clearBtn: false,
                toggleActive: false,
                daysOfWeekDisabled: [],
                daysOfWeekHighlighted: [],
                datesDisabled: [],
                endDate: Infinity,
                forceParse: true,
                format: "mm/dd/yyyy",
                keepEmptyValues: false,
                keyboardNavigation: true,
                language: "en",
                minViewMode: 0,
                maxViewMode: 4,
                multidate: false,
                multidateSeparator: ",",
                orientation: "auto",
                rtl: false,
                startDate: -Infinity,
                startView: 0,
                todayBtn: false,
                todayHighlight: false,
                updateViewDate: true,
                weekStart: 0,
                disableTouchKeyboard: false,
                enableOnReadonly: true,
                showOnFocus: true,
                zIndexOffset: 10,
                container: "body",
                immediateUpdates: false,
                title: "",
                templates: { leftArrow: "&#x00AB;", rightArrow: "&#x00BB;" },
                showWeekDays: true,
              }),
              s = (S.fn.datepicker.locale_opts = [
                "format",
                "rtl",
                "weekStart",
              ]);
            S.fn.datepicker.Constructor = x;
            var M = (S.fn.datepicker.dates = {
                en: {
                  days: [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                  daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                  months: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ],
                  monthsShort: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ],
                  today: "Today",
                  clear: "Clear",
                  titleFormat: "MM yyyy",
                },
              }),
              j = {
                viewModes: [
                  {
                    names: ["days", "month"],
                    clsName: "days",
                    e: "changeMonth",
                  },
                  {
                    names: ["months", "year"],
                    clsName: "months",
                    e: "changeYear",
                    navStep: 1,
                  },
                  {
                    names: ["years", "decade"],
                    clsName: "years",
                    e: "changeDecade",
                    navStep: 10,
                  },
                  {
                    names: ["decades", "century"],
                    clsName: "decades",
                    e: "changeCentury",
                    navStep: 100,
                  },
                  {
                    names: ["centuries", "millennium"],
                    clsName: "centuries",
                    e: "changeMillennium",
                    navStep: 1e3,
                  },
                ],
                validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
                nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
                parseFormat: function (t) {
                  if (
                    typeof t.toValue === "function" &&
                    typeof t.toDisplay === "function"
                  )
                    return t;
                  var e = t.replace(this.validParts, "\0").split("\0"),
                    i = t.match(this.validParts);
                  if (!e || !e.length || !i || i.length === 0)
                    throw new Error("Invalid date format.");
                  return { separators: e, parts: i };
                },
                parseDate: function (t, e, i, n) {
                  if (!t) return N;
                  if (t instanceof Date) return t;
                  if (typeof e === "string") e = j.parseFormat(e);
                  if (e.toValue) return e.toValue(t, e, i);
                  var s = {
                      d: "moveDay",
                      m: "moveMonth",
                      w: "moveWeek",
                      y: "moveYear",
                    },
                    r = { yesterday: "-1d", today: "+0d", tomorrow: "+1d" },
                    o,
                    a,
                    l,
                    u,
                    c;
                  if (t in r) t = r[t];
                  if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(t)) {
                    o = t.match(/([\-+]\d+)([dmwy])/gi);
                    t = new Date();
                    for (u = 0; u < o.length; u++) {
                      a = o[u].match(/([\-+]\d+)([dmwy])/i);
                      l = Number(a[1]);
                      c = s[a[2].toLowerCase()];
                      t = x.prototype[c](t, l);
                    }
                    return x.prototype._zero_utc_time(t);
                  }
                  o = (t && t.match(this.nonpunctuation)) || [];
                  function h(t, e) {
                    if (e === true) e = 10;
                    if (t < 100) {
                      t += 2e3;
                      if (t > new Date().getFullYear() + e) t -= 100;
                    }
                    return t;
                  }
                  var d = {},
                    f = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                    p = {
                      yyyy: function (t, e) {
                        return t.setUTCFullYear(n ? h(e, n) : e);
                      },
                      m: function (t, e) {
                        if (isNaN(t)) return t;
                        e -= 1;
                        while (e < 0) e += 12;
                        e %= 12;
                        t.setUTCMonth(e);
                        while (t.getUTCMonth() !== e)
                          t.setUTCDate(t.getUTCDate() - 1);
                        return t;
                      },
                      d: function (t, e) {
                        return t.setUTCDate(e);
                      },
                    },
                    g,
                    m;
                  p["yy"] = p["yyyy"];
                  p["M"] = p["MM"] = p["mm"] = p["m"];
                  p["dd"] = p["d"];
                  t = O();
                  var v = e.parts.slice();
                  if (o.length !== v.length)
                    v = S(v)
                      .filter(function (t, e) {
                        return S.inArray(e, f) !== -1;
                      })
                      .toArray();
                  function y() {
                    var t = this.slice(0, o[u].length),
                      e = o[u].slice(0, t.length);
                    return t.toLowerCase() === e.toLowerCase();
                  }
                  if (o.length === v.length) {
                    var _;
                    for (u = 0, _ = v.length; u < _; u++) {
                      g = parseInt(o[u], 10);
                      a = v[u];
                      if (isNaN(g))
                        switch (a) {
                          case "MM":
                            m = S(M[i].months).filter(y);
                            g = S.inArray(m[0], M[i].months) + 1;
                            break;
                          case "M":
                            m = S(M[i].monthsShort).filter(y);
                            g = S.inArray(m[0], M[i].monthsShort) + 1;
                            break;
                        }
                      d[a] = g;
                    }
                    var w, b;
                    for (u = 0; u < f.length; u++) {
                      b = f[u];
                      if (b in d && !isNaN(d[b])) {
                        w = new Date(t);
                        p[b](w, d[b]);
                        if (!isNaN(w)) t = w;
                      }
                    }
                  }
                  return t;
                },
                formatDate: function (t, e, i) {
                  if (!t) return "";
                  if (typeof e === "string") e = j.parseFormat(e);
                  if (e.toDisplay) return e.toDisplay(t, e, i);
                  var n = {
                    d: t.getUTCDate(),
                    D: M[i].daysShort[t.getUTCDay()],
                    DD: M[i].days[t.getUTCDay()],
                    m: t.getUTCMonth() + 1,
                    M: M[i].monthsShort[t.getUTCMonth()],
                    MM: M[i].months[t.getUTCMonth()],
                    yy: t.getUTCFullYear().toString().substring(2),
                    yyyy: t.getUTCFullYear(),
                  };
                  n.dd = (n.d < 10 ? "0" : "") + n.d;
                  n.mm = (n.m < 10 ? "0" : "") + n.m;
                  t = [];
                  var s = S.extend([], e.separators);
                  for (var r = 0, o = e.parts.length; r <= o; r++) {
                    if (s.length) t.push(s.shift());
                    t.push(n[e.parts[r]]);
                  }
                  return t.join("");
                },
                headTemplate:
                  "<thead>" +
                  "<tr>" +
                  '<th colspan="7" class="datepicker-title"></th>' +
                  "</tr>" +
                  "<tr>" +
                  '<th class="prev">' +
                  f.templates.leftArrow +
                  "</th>" +
                  '<th colspan="5" class="datepicker-switch"></th>' +
                  '<th class="next">' +
                  f.templates.rightArrow +
                  "</th>" +
                  "</tr>" +
                  "</thead>",
                contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
                footTemplate:
                  "<tfoot>" +
                  "<tr>" +
                  '<th colspan="7" class="today"></th>' +
                  "</tr>" +
                  "<tr>" +
                  '<th colspan="7" class="clear"></th>' +
                  "</tr>" +
                  "</tfoot>",
              };
            (j.template =
              '<div class="datepicker">' +
              '<div class="datepicker-days">' +
              '<table class="table-condensed">' +
              j.headTemplate +
              "<tbody></tbody>" +
              j.footTemplate +
              "</table>" +
              "</div>" +
              '<div class="datepicker-months">' +
              '<table class="table-condensed">' +
              j.headTemplate +
              j.contTemplate +
              j.footTemplate +
              "</table>" +
              "</div>" +
              '<div class="datepicker-years">' +
              '<table class="table-condensed">' +
              j.headTemplate +
              j.contTemplate +
              j.footTemplate +
              "</table>" +
              "</div>" +
              '<div class="datepicker-decades">' +
              '<table class="table-condensed">' +
              j.headTemplate +
              j.contTemplate +
              j.footTemplate +
              "</table>" +
              "</div>" +
              '<div class="datepicker-centuries">' +
              '<table class="table-condensed">' +
              j.headTemplate +
              j.contTemplate +
              j.footTemplate +
              "</table>" +
              "</div>" +
              "</div>"),
              (S.fn.datepicker.DPGlobal = j),
              (S.fn.datepicker.noConflict = function () {
                S.fn.datepicker = e;
                return this;
              }),
              (S.fn.datepicker.version = "1.9.0"),
              (S.fn.datepicker.deprecated = function (t) {
                var e = window.console;
                if (e && e.warn) e.warn("DEPRECATED: " + t);
              }),
              S(document).on(
                "focus.datepicker.data-api click.datepicker.data-api",
                '[data-provide="datepicker"]',
                function (t) {
                  var e = S(this);
                  if (e.data("datepicker")) return;
                  t.preventDefault();
                  n.call(e, "show");
                }
              ),
              S(function () {
                n.call(S('[data-provide="datepicker-inline"]'));
              });
          })
            ? i.apply(e, n)
            : i) || (t.exports = i);
  },
  function (t, e, i) {},
]);

