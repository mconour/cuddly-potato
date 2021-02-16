! function (t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (T, t) {
    function e(t, e) {
        return e.toUpperCase()
    }
    var n = [],
        k = T.document,
        c = n.slice,
        m = n.concat,
        a = n.push,
        r = n.indexOf,
        i = {},
        o = i.toString,
        d = i.hasOwnProperty,
        g = {},
        s = "2.2.4",
        S = function (t, e) {
            return new S.fn.init(t, e)
        },
        l = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        u = /^-ms-/,
        h = /-([\da-z])/gi;

    function f(t) {
        var e = !!t && "length" in t && t.length,
            n = S.type(t);
        return "function" !== n && !S.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }
    S.fn = S.prototype = {
        jquery: s,
        constructor: S,
        selector: "",
        length: 0,
        toArray: function () {
            return c.call(this)
        },
        get: function (t) {
            return null != t ? t < 0 ? this[t + this.length] : this[t] : c.call(this)
        },
        pushStack: function (t) {
            var e = S.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function (t) {
            return S.each(this, t)
        },
        map: function (n) {
            return this.pushStack(S.map(this, function (t, e) {
                return n.call(t, e, t)
            }))
        },
        slice: function () {
            return this.pushStack(c.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (t) {
            var e = this.length,
                n = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= n && n < e ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, S.extend = S.fn.extend = function () {
        var t, e, n, i, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || S.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (t = arguments[a]))
                for (e in t) n = s[e], s !== (i = t[e]) && (u && i && (S.isPlainObject(i) || (r = S.isArray(i))) ? (o = r ? (r = !1, n && S.isArray(n) ? n : []) : n && S.isPlainObject(n) ? n : {}, s[e] = S.extend(u, o, i)) : void 0 !== i && (s[e] = i));
        return s
    }, S.extend({
        expando: "jQuery" + (s + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
            throw new Error(t)
        },
        noop: function () {},
        isFunction: function (t) {
            return "function" === S.type(t)
        },
        isArray: Array.isArray,
        isWindow: function (t) {
            return null != t && t === t.window
        },
        isNumeric: function (t) {
            var e = t && t.toString();
            return !S.isArray(t) && 0 <= e - parseFloat(e) + 1
        },
        isPlainObject: function (t) {
            var e;
            if ("object" !== S.type(t) || t.nodeType || S.isWindow(t)) return !1;
            if (t.constructor && !d.call(t, "constructor") && !d.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (e in t);
            return void 0 === e || d.call(t, e)
        },
        isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? i[o.call(t)] || "object" : typeof t
        },
        globalEval: function (t) {
            var e, n = eval;
            (t = S.trim(t)) && (1 === t.indexOf("use strict") ? ((e = k.createElement("script")).text = t, k.head.appendChild(e).parentNode.removeChild(e)) : n(t))
        },
        camelCase: function (t) {
            return t.replace(u, "ms-").replace(h, e)
        },
        nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function (t, e) {
            var n, i = 0;
            if (f(t))
                for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
            else
                for (i in t)
                    if (!1 === e.call(t[i], i, t[i])) break;
            return t
        },
        trim: function (t) {
            return null == t ? "" : (t + "").replace(l, "")
        },
        makeArray: function (t, e) {
            var n = e || [];
            return null != t && (f(Object(t)) ? S.merge(n, "string" == typeof t ? [t] : t) : a.call(n, t)), n
        },
        inArray: function (t, e, n) {
            return null == e ? -1 : r.call(e, t, n)
        },
        merge: function (t, e) {
            for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
            return t.length = r, t
        },
        grep: function (t, e, n) {
            for (var i = [], r = 0, o = t.length, s = !n; r < o; r++) !e(t[r], r) != s && i.push(t[r]);
            return i
        },
        map: function (t, e, n) {
            var i, r, o = 0,
                s = [];
            if (f(t))
                for (i = t.length; o < i; o++) null != (r = e(t[o], o, n)) && s.push(r);
            else
                for (o in t) null != (r = e(t[o], o, n)) && s.push(r);
            return m.apply([], s)
        },
        guid: 1,
        proxy: function (t, e) {
            var n, i, r;
            return "string" == typeof e && (n = t[e], e = t, t = n), S.isFunction(t) ? (i = c.call(arguments, 2), (r = function () {
                return t.apply(e || this, i.concat(c.call(arguments)))
            }).guid = t.guid = t.guid || S.guid++, r) : void 0
        },
        now: Date.now,
        support: g
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = n[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        i["[object " + e + "]"] = e.toLowerCase()
    });
    var p = function (n) {
        function h(t, e, n) {
            var i = "0x" + e - 65536;
            return i != i || n ? e : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }

        function r() {
            w()
        }
        var t, d, x, o, s, m, f, g, b, l, u, w, T, a, k, v, c, p, _, S = "sizzle" + 1 * new Date,
            y = n.document,
            P = 0,
            i = 0,
            C = rt(),
            O = rt(),
            E = rt(),
            A = function (t, e) {
                return t === e && (u = !0), 0
            },
            D = {}.hasOwnProperty,
            e = [],
            M = e.pop,
            R = e.push,
            N = e.push,
            L = e.slice,
            j = function (t, e) {
                for (var n = 0, i = t.length; n < i; n++)
                    if (t[n] === e) return n;
                return -1
            },
            F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            I = "[\\x20\\t\\r\\n\\f]",
            q = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            B = "\\[" + I + "*(" + q + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + I + "*\\]",
            z = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)",
            X = new RegExp(I + "+", "g"),
            H = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
            W = new RegExp("^" + I + "*," + I + "*"),
            Y = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
            U = new RegExp("=" + I + "*([^\\]'\"]*?)" + I + "*\\]", "g"),
            $ = new RegExp(z),
            V = new RegExp("^" + q + "$"),
            K = {
                ID: new RegExp("^#(" + q + ")"),
                CLASS: new RegExp("^\\.(" + q + ")"),
                TAG: new RegExp("^(" + q + "|[*])"),
                ATTR: new RegExp("^" + B),
                PSEUDO: new RegExp("^" + z),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + F + ")$", "i"),
                needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
            },
            G = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            tt = /[+~]/,
            et = /'|\\/g,
            nt = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig");
        try {
            N.apply(e = L.call(y.childNodes), y.childNodes), e[y.childNodes.length].nodeType
        } catch (t) {
            N = {
                apply: e.length ? function (t, e) {
                    R.apply(t, L.call(e))
                } : function (t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }

        function it(t, e, n, i) {
            var r, o, s, a, l, u, c, h, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!i && ((e ? e.ownerDocument || e : y) !== T && w(e), e = e || T, k)) {
                if (11 !== p && (u = J.exec(t)))
                    if (r = u[1]) {
                        if (9 === p) {
                            if (!(s = e.getElementById(r))) return n;
                            if (s.id === r) return n.push(s), n
                        } else if (f && (s = f.getElementById(r)) && _(e, s) && s.id === r) return n.push(s), n
                    } else {
                        if (u[2]) return N.apply(n, e.getElementsByTagName(t)), n;
                        if ((r = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return N.apply(n, e.getElementsByClassName(r)), n
                    } if (d.qsa && !E[t + " "] && (!v || !v.test(t))) {
                    if (1 !== p) f = e, h = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(et, "\\$&") : e.setAttribute("id", a = S), o = (c = m(t)).length, l = V.test(a) ? "#" + a : "[id='" + a + "']"; o--;) c[o] = l + " " + dt(c[o]);
                        h = c.join(","), f = tt.test(t) && ft(e.parentNode) || e
                    }
                    if (h) try {
                        return N.apply(n, f.querySelectorAll(h)), n
                    } catch (t) {} finally {
                        a === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace(H, "$1"), e, n, i)
        }

        function rt() {
            var i = [];
            return function t(e, n) {
                return i.push(e + " ") > x.cacheLength && delete t[i.shift()], t[e + " "] = n
            }
        }

        function ot(t) {
            return t[S] = !0, t
        }

        function st(t) {
            var e = T.createElement("div");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function at(t, e) {
            for (var n = t.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = e
        }

        function lt(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || 1 << 31) - (~t.sourceIndex || 1 << 31);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function ut(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function ct(n) {
            return function (t) {
                var e = t.nodeName.toLowerCase();
                return ("input" === e || "button" === e) && t.type === n
            }
        }

        function ht(s) {
            return ot(function (o) {
                return o = +o, ot(function (t, e) {
                    for (var n, i = s([], t.length, o), r = i.length; r--;) t[n = i[r]] && (t[n] = !(e[n] = t[n]))
                })
            })
        }

        function ft(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        for (t in d = it.support = {}, s = it.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, w = it.setDocument = function (t) {
                var e, n, i = t ? t.ownerDocument || t : y;
                return i !== T && 9 === i.nodeType && i.documentElement && (a = (T = i).documentElement, k = !s(T), (n = T.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", r, !1) : n.attachEvent && n.attachEvent("onunload", r)), d.attributes = st(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), d.getElementsByTagName = st(function (t) {
                    return t.appendChild(T.createComment("")), !t.getElementsByTagName("*").length
                }), d.getElementsByClassName = Z.test(T.getElementsByClassName), d.getById = st(function (t) {
                    return a.appendChild(t).id = S, !T.getElementsByName || !T.getElementsByName(S).length
                }), d.getById ? (x.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && k) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }, x.filter.ID = function (t) {
                    var e = t.replace(nt, h);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete x.find.ID, x.filter.ID = function (t) {
                    var n = t.replace(nt, h);
                    return function (t) {
                        var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return e && e.value === n
                    }
                }), x.find.TAG = d.getElementsByTagName ? function (t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : d.qsa ? e.querySelectorAll(t) : void 0
                } : function (t, e) {
                    var n, i = [],
                        r = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" !== t) return o;
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }, x.find.CLASS = d.getElementsByClassName && function (t, e) {
                    return void 0 !== e.getElementsByClassName && k ? e.getElementsByClassName(t) : void 0
                }, c = [], v = [], (d.qsa = Z.test(T.querySelectorAll)) && (st(function (t) {
                    a.appendChild(t).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + I + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || v.push("\\[" + I + "*(?:value|" + F + ")"), t.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), t.querySelectorAll(":checked").length || v.push(":checked"), t.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]")
                }), st(function (t) {
                    var e = T.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && v.push("name" + I + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), v.push(",.*:")
                })), (d.matchesSelector = Z.test(p = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && st(function (t) {
                    d.disconnectedMatch = p.call(t, "div"), p.call(t, "[s!='']:x"), c.push("!=", z)
                }), v = v.length && new RegExp(v.join("|")), c = c.length && new RegExp(c.join("|")), e = Z.test(a.compareDocumentPosition), _ = e || Z.test(a.contains) ? function (t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function (t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, A = e ? function (t, e) {
                    if (t === e) return u = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !d.sortDetached && e.compareDocumentPosition(t) === n ? t === T || t.ownerDocument === y && _(y, t) ? -1 : e === T || e.ownerDocument === y && _(y, e) ? 1 : l ? j(l, t) - j(l, e) : 0 : 4 & n ? -1 : 1)
                } : function (t, e) {
                    if (t === e) return u = !0, 0;
                    var n, i = 0,
                        r = t.parentNode,
                        o = e.parentNode,
                        s = [t],
                        a = [e];
                    if (!r || !o) return t === T ? -1 : e === T ? 1 : r ? -1 : o ? 1 : l ? j(l, t) - j(l, e) : 0;
                    if (r === o) return lt(t, e);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? lt(s[i], a[i]) : s[i] === y ? -1 : a[i] === y ? 1 : 0
                }), T
            }, it.matches = function (t, e) {
                return it(t, null, null, e)
            }, it.matchesSelector = function (t, e) {
                if ((t.ownerDocument || t) !== T && w(t), e = e.replace(U, "='$1']"), d.matchesSelector && k && !E[e + " "] && (!c || !c.test(e)) && (!v || !v.test(e))) try {
                    var n = p.call(t, e);
                    if (n || d.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (t) {}
                return 0 < it(e, T, null, [t]).length
            }, it.contains = function (t, e) {
                return (t.ownerDocument || t) !== T && w(t), _(t, e)
            }, it.attr = function (t, e) {
                (t.ownerDocument || t) !== T && w(t);
                var n = x.attrHandle[e.toLowerCase()],
                    i = n && D.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !k) : void 0;
                return void 0 !== i ? i : d.attributes || !k ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, it.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, it.uniqueSort = function (t) {
                var e, n = [],
                    i = 0,
                    r = 0;
                if (u = !d.detectDuplicates, l = !d.sortStable && t.slice(0), t.sort(A), u) {
                    for (; e = t[r++];) e === t[r] && (i = n.push(r));
                    for (; i--;) t.splice(n[i], 1)
                }
                return l = null, t
            }, o = it.getText = function (t) {
                var e, n = "",
                    i = 0,
                    r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += o(t)
                    } else if (3 === r || 4 === r) return t.nodeValue
                } else
                    for (; e = t[i++];) n += o(e);
                return n
            }, (x = it.selectors = {
                cacheLength: 50,
                createPseudo: ot,
                match: K,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(nt, h), t[3] = (t[3] || t[4] || t[5] || "").replace(nt, h), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || it.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && it.error(t[0]), t
                    },
                    PSEUDO: function (t) {
                        var e, n = !t[6] && t[2];
                        return K.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && $.test(n) && (e = m(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(nt, h).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function (t) {
                        var e = C[t + " "];
                        return e || (e = new RegExp("(^|" + I + ")" + t + "(" + I + "|$)")) && C(t, function (t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (n, i, r) {
                        return function (t) {
                            var e = it.attr(t, n);
                            return null == e ? "!=" === i : !i || (e += "", "=" === i ? e === r : "!=" === i ? e !== r : "^=" === i ? r && 0 === e.indexOf(r) : "*=" === i ? r && -1 < e.indexOf(r) : "$=" === i ? r && e.slice(-r.length) === r : "~=" === i ? -1 < (" " + e.replace(X, " ") + " ").indexOf(r) : "|=" === i && (e === r || e.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function (d, t, e, m, g) {
                        var v = "nth" !== d.slice(0, 3),
                            _ = "last" !== d.slice(-4),
                            y = "of-type" === t;
                        return 1 === m && 0 === g ? function (t) {
                            return !!t.parentNode
                        } : function (t, e, n) {
                            var i, r, o, s, a, l, u = v != _ ? "nextSibling" : "previousSibling",
                                c = t.parentNode,
                                h = y && t.nodeName.toLowerCase(),
                                f = !n && !y,
                                p = !1;
                            if (c) {
                                if (v) {
                                    for (; u;) {
                                        for (s = t; s = s[u];)
                                            if (y ? s.nodeName.toLowerCase() === h : 1 === s.nodeType) return !1;
                                        l = u = "only" === d && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [_ ? c.firstChild : c.lastChild], _ && f) {
                                    for (p = (a = (i = (r = (o = (s = c)[S] || (s[S] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[d] || [])[0] === P && i[1]) && i[2], s = a && c.childNodes[a]; s = ++a && s && s[u] || (p = a = 0) || l.pop();)
                                        if (1 === s.nodeType && ++p && s === t) {
                                            r[d] = [P, a, p];
                                            break
                                        }
                                } else if (f && (p = a = (i = (r = (o = (s = t)[S] || (s[S] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[d] || [])[0] === P && i[1]), !1 === p)
                                    for (;
                                        (s = ++a && s && s[u] || (p = a = 0) || l.pop()) && ((y ? s.nodeName.toLowerCase() !== h : 1 !== s.nodeType) || !++p || (f && ((r = (o = s[S] || (s[S] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[d] = [P, p]), s !== t)););
                                return (p -= g) === m || p % m == 0 && 0 <= p / m
                            }
                        }
                    },
                    PSEUDO: function (t, o) {
                        var e, s = x.pseudos[t] || x.setFilters[t.toLowerCase()] || it.error("unsupported pseudo: " + t);
                        return s[S] ? s(o) : 1 < s.length ? (e = [t, t, "", o], x.setFilters.hasOwnProperty(t.toLowerCase()) ? ot(function (t, e) {
                            for (var n, i = s(t, o), r = i.length; r--;) t[n = j(t, i[r])] = !(e[n] = i[r])
                        }) : function (t) {
                            return s(t, 0, e)
                        }) : s
                    }
                },
                pseudos: {
                    not: ot(function (t) {
                        var i = [],
                            r = [],
                            a = f(t.replace(H, "$1"));
                        return a[S] ? ot(function (t, e, n, i) {
                            for (var r, o = a(t, null, i, []), s = t.length; s--;)(r = o[s]) && (t[s] = !(e[s] = r))
                        }) : function (t, e, n) {
                            return i[0] = t, a(i, null, n, r), i[0] = null, !r.pop()
                        }
                    }),
                    has: ot(function (e) {
                        return function (t) {
                            return 0 < it(e, t).length
                        }
                    }),
                    contains: ot(function (e) {
                        return e = e.replace(nt, h),
                            function (t) {
                                return -1 < (t.textContent || t.innerText || o(t)).indexOf(e)
                            }
                    }),
                    lang: ot(function (n) {
                        return V.test(n || "") || it.error("unsupported lang: " + n), n = n.replace(nt, h).toLowerCase(),
                            function (t) {
                                var e;
                                do {
                                    if (e = k ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function (t) {
                        var e = n.location && n.location.hash;
                        return e && e.slice(1) === t.id
                    },
                    root: function (t) {
                        return t === a
                    },
                    focus: function (t) {
                        return t === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function (t) {
                        return !1 === t.disabled
                    },
                    disabled: function (t) {
                        return !0 === t.disabled
                    },
                    checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (t) {
                        return !x.pseudos.empty(t)
                    },
                    header: function (t) {
                        return Q.test(t.nodeName)
                    },
                    input: function (t) {
                        return G.test(t.nodeName)
                    },
                    button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: ht(function () {
                        return [0]
                    }),
                    last: ht(function (t, e) {
                        return [e - 1]
                    }),
                    eq: ht(function (t, e, n) {
                        return [n < 0 ? n + e : n]
                    }),
                    even: ht(function (t, e) {
                        for (var n = 0; n < e; n += 2) t.push(n);
                        return t
                    }),
                    odd: ht(function (t, e) {
                        for (var n = 1; n < e; n += 2) t.push(n);
                        return t
                    }),
                    lt: ht(function (t, e, n) {
                        for (var i = n < 0 ? n + e : n; 0 <= --i;) t.push(i);
                        return t
                    }),
                    gt: ht(function (t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }).pseudos.nth = x.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[t] = ut(t);
        for (t in {
                submit: !0,
                reset: !0
            }) x.pseudos[t] = ct(t);

        function pt() {}

        function dt(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
            return i
        }

        function mt(a, t, e) {
            var l = t.dir,
                u = e && "parentNode" === l,
                c = i++;
            return t.first ? function (t, e, n) {
                for (; t = t[l];)
                    if (1 === t.nodeType || u) return a(t, e, n)
            } : function (t, e, n) {
                var i, r, o, s = [P, c];
                if (n) {
                    for (; t = t[l];)
                        if ((1 === t.nodeType || u) && a(t, e, n)) return !0
                } else
                    for (; t = t[l];)
                        if (1 === t.nodeType || u) {
                            if ((i = (r = (o = t[S] || (t[S] = {}))[t.uniqueID] || (o[t.uniqueID] = {}))[l]) && i[0] === P && i[1] === c) return s[2] = i[2];
                            if ((r[l] = s)[2] = a(t, e, n)) return !0
                        }
            }
        }

        function gt(r) {
            return 1 < r.length ? function (t, e, n) {
                for (var i = r.length; i--;)
                    if (!r[i](t, e, n)) return !1;
                return !0
            } : r[0]
        }

        function vt(t, e, n, i, r) {
            for (var o, s = [], a = 0, l = t.length, u = null != e; a < l; a++)(o = t[a]) && (n && !n(o, i, r) || (s.push(o), u && e.push(a)));
            return s
        }

        function _t(p, d, m, g, v, t) {
            return g && !g[S] && (g = _t(g)), v && !v[S] && (v = _t(v, t)), ot(function (t, e, n, i) {
                var r, o, s, a = [],
                    l = [],
                    u = e.length,
                    c = t || function (t, e, n) {
                        for (var i = 0, r = e.length; i < r; i++) it(t, e[i], n);
                        return n
                    }(d || "*", n.nodeType ? [n] : n, []),
                    h = !p || !t && d ? c : vt(c, a, p, n, i),
                    f = m ? v || (t ? p : u || g) ? [] : e : h;
                if (m && m(h, f, n, i), g)
                    for (r = vt(f, l), g(r, [], n, i), o = r.length; o--;)(s = r[o]) && (f[l[o]] = !(h[l[o]] = s));
                if (t) {
                    if (v || p) {
                        if (v) {
                            for (r = [], o = f.length; o--;)(s = f[o]) && r.push(h[o] = s);
                            v(null, f = [], r, i)
                        }
                        for (o = f.length; o--;)(s = f[o]) && -1 < (r = v ? j(t, s) : a[o]) && (t[r] = !(e[r] = s))
                    }
                } else f = vt(f === e ? f.splice(u, f.length) : f), v ? v(null, e, f, i) : N.apply(e, f)
            })
        }

        function yt(t) {
            for (var r, e, n, i = t.length, o = x.relative[t[0].type], s = o || x.relative[" "], a = o ? 1 : 0, l = mt(function (t) {
                    return t === r
                }, s, !0), u = mt(function (t) {
                    return -1 < j(r, t)
                }, s, !0), c = [function (t, e, n) {
                    var i = !o && (n || e !== b) || ((r = e).nodeType ? l(t, e, n) : u(t, e, n));
                    return r = null, i
                }]; a < i; a++)
                if (e = x.relative[t[a].type]) c = [mt(gt(c), e)];
                else {
                    if ((e = x.filter[t[a].type].apply(null, t[a].matches))[S]) {
                        for (n = ++a; n < i && !x.relative[t[n].type]; n++);
                        return _t(1 < a && gt(c), 1 < a && dt(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(H, "$1"), e, a < n && yt(t.slice(a, n)), n < i && yt(t = t.slice(n)), n < i && dt(t))
                    }
                    c.push(e)
                } return gt(c)
        }
        return pt.prototype = x.filters = x.pseudos, x.setFilters = new pt, m = it.tokenize = function (t, e) {
            var n, i, r, o, s, a, l, u = O[t + " "];
            if (u) return e ? 0 : u.slice(0);
            for (s = t, a = [], l = x.preFilter; s;) {
                for (o in n && !(i = W.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(r = [])), n = !1, (i = Y.exec(s)) && (n = i.shift(), r.push({
                        value: n,
                        type: i[0].replace(H, " ")
                    }), s = s.slice(n.length)), x.filter) !(i = K[o].exec(s)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({
                    value: n,
                    type: o,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return e ? s.length : s ? it.error(t) : O(t, a).slice(0)
        }, f = it.compile = function (t, e) {
            var n, i = [],
                r = [],
                o = E[t + " "];
            if (!o) {
                for (e || (e = m(t)), n = e.length; n--;)(o = yt(e[n]))[S] ? i.push(o) : r.push(o);
                (o = E(t, function (g, v) {
                    function t(t, e, n, i, r) {
                        var o, s, a, l = 0,
                            u = "0",
                            c = t && [],
                            h = [],
                            f = b,
                            p = t || y && x.find.TAG("*", r),
                            d = P += null == f ? 1 : Math.random() || .1,
                            m = p.length;
                        for (r && (b = e === T || e || r); u !== m && null != (o = p[u]); u++) {
                            if (y && o) {
                                for (s = 0, e || o.ownerDocument === T || (w(o), n = !k); a = g[s++];)
                                    if (a(o, e || T, n)) {
                                        i.push(o);
                                        break
                                    } r && (P = d)
                            }
                            _ && ((o = !a && o) && l--, t && c.push(o))
                        }
                        if (l += u, _ && u !== l) {
                            for (s = 0; a = v[s++];) a(c, h, e, n);
                            if (t) {
                                if (0 < l)
                                    for (; u--;) c[u] || h[u] || (h[u] = M.call(i));
                                h = vt(h)
                            }
                            N.apply(i, h), r && !t && 0 < h.length && 1 < l + v.length && it.uniqueSort(i)
                        }
                        return r && (P = d, b = f), c
                    }
                    var _ = 0 < v.length,
                        y = 0 < g.length;
                    return _ ? ot(t) : t
                }(r, i))).selector = t
            }
            return o
        }, g = it.select = function (t, e, n, i) {
            var r, o, s, a, l, u = "function" == typeof t && t,
                c = !i && m(t = u.selector || t);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && d.getById && 9 === e.nodeType && k && x.relative[o[1].type]) {
                    if (!(e = (x.find.ID(s.matches[0].replace(nt, h), e) || [])[0])) return n;
                    u && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (r = K.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !x.relative[a = s.type]);)
                    if ((l = x.find[a]) && (i = l(s.matches[0].replace(nt, h), tt.test(o[0].type) && ft(e.parentNode) || e))) {
                        if (o.splice(r, 1), !(t = i.length && dt(o))) return N.apply(n, i), n;
                        break
                    }
            }
            return (u || f(t, c))(i, e, !k, n, !e || tt.test(t) && ft(e.parentNode) || e), n
        }, d.sortStable = S.split("").sort(A).join("") === S, d.detectDuplicates = !!u, w(), d.sortDetached = st(function (t) {
            return 1 & t.compareDocumentPosition(T.createElement("div"))
        }), st(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || at("type|href|height|width", function (t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), d.attributes && st(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || at("value", function (t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), st(function (t) {
            return null == t.getAttribute("disabled")
        }) || at(F, function (t, e, n) {
            var i;
            return n ? void 0 : !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), it
    }(T);
    S.find = p, S.expr = p.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = p.uniqueSort, S.text = p.getText, S.isXMLDoc = p.isXML, S.contains = p.contains;

    function v(t, e, n) {
        for (var i = [], r = void 0 !== n;
            (t = t[e]) && 9 !== t.nodeType;)
            if (1 === t.nodeType) {
                if (r && S(t).is(n)) break;
                i.push(t)
            } return i
    }

    function _(t, e) {
        for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
        return n
    }
    var y = S.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        b = /^.[^:#\[\.,]*$/;

    function w(t, n, i) {
        if (S.isFunction(n)) return S.grep(t, function (t, e) {
            return !!n.call(t, e, t) !== i
        });
        if (n.nodeType) return S.grep(t, function (t) {
            return t === n !== i
        });
        if ("string" == typeof n) {
            if (b.test(n)) return S.filter(n, t, i);
            n = S.filter(n, t)
        }
        return S.grep(t, function (t) {
            return -1 < r.call(n, t) !== i
        })
    }
    S.filter = function (t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? S.find.matchesSelector(i, t) ? [i] : [] : S.find.matches(t, S.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, S.fn.extend({
        find: function (t) {
            var e, n = this.length,
                i = [],
                r = this;
            if ("string" != typeof t) return this.pushStack(S(t).filter(function () {
                for (e = 0; e < n; e++)
                    if (S.contains(r[e], this)) return !0
            }));
            for (e = 0; e < n; e++) S.find(t, r[e], i);
            return (i = this.pushStack(1 < n ? S.unique(i) : i)).selector = this.selector ? this.selector + " " + t : t, i
        },
        filter: function (t) {
            return this.pushStack(w(this, t || [], !1))
        },
        not: function (t) {
            return this.pushStack(w(this, t || [], !0))
        },
        is: function (t) {
            return !!w(this, "string" == typeof t && y.test(t) ? S(t) : t || [], !1).length
        }
    });
    var P, C = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (S.fn.init = function (t, e, n) {
        var i, r;
        if (!t) return this;
        if (n = n || P, "string" != typeof t) return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : S.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(S) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), S.makeArray(t, this));
        if (!(i = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : C.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
        if (i[1]) {
            if (e = e instanceof S ? e[0] : e, S.merge(this, S.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : k, !0)), x.test(i[1]) && S.isPlainObject(e))
                for (i in e) S.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
            return this
        }
        return (r = k.getElementById(i[2])) && r.parentNode && (this.length = 1, this[0] = r), this.context = k, this.selector = t, this
    }).prototype = S.fn, P = S(k);
    var O = /^(?:parents|prev(?:Until|All))/,
        E = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function A(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }
    S.fn.extend({
        has: function (t) {
            var e = S(t, this),
                n = e.length;
            return this.filter(function () {
                for (var t = 0; t < n; t++)
                    if (S.contains(this, e[t])) return !0
            })
        },
        closest: function (t, e) {
            for (var n, i = 0, r = this.length, o = [], s = y.test(t) || "string" != typeof t ? S(t, e || this.context) : 0; i < r; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    } return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function (t) {
            return t ? "string" == typeof t ? r.call(S(t), this[0]) : r.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (t, e) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(t, e))))
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), S.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function (t) {
            return v(t, "parentNode")
        },
        parentsUntil: function (t, e, n) {
            return v(t, "parentNode", n)
        },
        next: function (t) {
            return A(t, "nextSibling")
        },
        prev: function (t) {
            return A(t, "previousSibling")
        },
        nextAll: function (t) {
            return v(t, "nextSibling")
        },
        prevAll: function (t) {
            return v(t, "previousSibling")
        },
        nextUntil: function (t, e, n) {
            return v(t, "nextSibling", n)
        },
        prevUntil: function (t, e, n) {
            return v(t, "previousSibling", n)
        },
        siblings: function (t) {
            return _((t.parentNode || {}).firstChild, t)
        },
        children: function (t) {
            return _(t.firstChild)
        },
        contents: function (t) {
            return t.contentDocument || S.merge([], t.childNodes)
        }
    }, function (i, r) {
        S.fn[i] = function (t, e) {
            var n = S.map(this, r, t);
            return "Until" !== i.slice(-5) && (e = t), e && "string" == typeof e && (n = S.filter(e, n)), 1 < this.length && (E[i] || S.uniqueSort(n), O.test(i) && n.reverse()), this.pushStack(n)
        }
    });
    var D, M = /\S+/g;

    function R() {
        k.removeEventListener("DOMContentLoaded", R), T.removeEventListener("load", R), S.ready()
    }
    S.Callbacks = function (i) {
        i = "string" == typeof i ? function (t) {
            var n = {};
            return S.each(t.match(M) || [], function (t, e) {
                n[e] = !0
            }), n
        }(i) : S.extend({}, i);

        function n() {
            for (o = i.once, e = r = !0; a.length; l = -1)
                for (t = a.shift(); ++l < s.length;) !1 === s[l].apply(t[0], t[1]) && i.stopOnFalse && (l = s.length, t = !1);
            i.memory || (t = !1), r = !1, o && (s = t ? [] : "")
        }
        var r, t, e, o, s = [],
            a = [],
            l = -1,
            u = {
                add: function () {
                    return s && (t && !r && (l = s.length - 1, a.push(t)), function n(t) {
                        S.each(t, function (t, e) {
                            S.isFunction(e) ? i.unique && u.has(e) || s.push(e) : e && e.length && "string" !== S.type(e) && n(e)
                        })
                    }(arguments), t && !r && n()), this
                },
                remove: function () {
                    return S.each(arguments, function (t, e) {
                        for (var n; - 1 < (n = S.inArray(e, s, n));) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function (t) {
                    return t ? -1 < S.inArray(t, s) : 0 < s.length
                },
                empty: function () {
                    return s && (s = []), this
                },
                disable: function () {
                    return o = a = [], s = t = "", this
                },
                disabled: function () {
                    return !s
                },
                lock: function () {
                    return o = a = [], t || (s = t = ""), this
                },
                locked: function () {
                    return !!o
                },
                fireWith: function (t, e) {
                    return o || (e = [t, (e = e || []).slice ? e.slice() : e], a.push(e), r || n()), this
                },
                fire: function () {
                    return u.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!e
                }
            };
        return u
    }, S.extend({
        Deferred: function (t) {
            var o = [
                    ["resolve", "done", S.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", S.Callbacks("memory")]
                ],
                r = "pending",
                s = {
                    state: function () {
                        return r
                    },
                    always: function () {
                        return a.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var r = arguments;
                        return S.Deferred(function (i) {
                            S.each(o, function (t, e) {
                                var n = S.isFunction(r[t]) && r[t];
                                a[e[1]](function () {
                                    var t = n && n.apply(this, arguments);
                                    t && S.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[e[0] + "With"](this === s ? i.promise() : this, n ? [t] : arguments)
                                })
                            }), r = null
                        }).promise()
                    },
                    promise: function (t) {
                        return null != t ? S.extend(t, s) : s
                    }
                },
                a = {};
            return s.pipe = s.then, S.each(o, function (t, e) {
                var n = e[2],
                    i = e[3];
                s[e[1]] = n.add, i && n.add(function () {
                    r = i
                }, o[1 ^ t][2].disable, o[2][2].lock), a[e[0]] = function () {
                    return a[e[0] + "With"](this === a ? s : this, arguments), this
                }, a[e[0] + "With"] = n.fireWith
            }), s.promise(a), t && t.call(a, a), a
        },
        when: function (t) {
            function e(e, n, i) {
                return function (t) {
                    n[e] = this, i[e] = 1 < arguments.length ? c.call(arguments) : t, i === r ? u.notifyWith(n, i) : --l || u.resolveWith(n, i)
                }
            }
            var r, n, i, o = 0,
                s = c.call(arguments),
                a = s.length,
                l = 1 !== a || t && S.isFunction(t.promise) ? a : 0,
                u = 1 === l ? t : S.Deferred();
            if (1 < a)
                for (r = new Array(a), n = new Array(a), i = new Array(a); o < a; o++) s[o] && S.isFunction(s[o].promise) ? s[o].promise().progress(e(o, n, r)).done(e(o, i, s)).fail(u.reject) : --l;
            return l || u.resolveWith(i, s), u.promise()
        }
    }), S.fn.ready = function (t) {
        return S.ready.promise().done(t), this
    }, S.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (t) {
            t ? S.readyWait++ : S.ready(!0)
        },
        ready: function (t) {
            (!0 === t ? --S.readyWait : S.isReady) || ((S.isReady = !0) !== t && 0 < --S.readyWait || (D.resolveWith(k, [S]), S.fn.triggerHandler && (S(k).triggerHandler("ready"), S(k).off("ready"))))
        }
    }), S.ready.promise = function (t) {
        return D || (D = S.Deferred(), "complete" === k.readyState || "loading" !== k.readyState && !k.documentElement.doScroll ? T.setTimeout(S.ready) : (k.addEventListener("DOMContentLoaded", R), T.addEventListener("load", R))), D.promise(t)
    }, S.ready.promise();

    function N(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    }
    var L = function (t, e, n, i, r, o, s) {
        var a = 0,
            l = t.length,
            u = null == n;
        if ("object" === S.type(n))
            for (a in r = !0, n) L(t, e, a, n[a], !0, o, s);
        else if (void 0 !== i && (r = !0, S.isFunction(i) || (s = !0), u && (e = s ? (e.call(t, i), null) : (u = e, function (t, e, n) {
                return u.call(S(t), n)
            })), e))
            for (; a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
        return r ? t : u ? e.call(t) : l ? e(t[0], n) : o
    };

    function j() {
        this.expando = S.expando + j.uid++
    }
    j.uid = 1, j.prototype = {
        register: function (t, e) {
            var n = e || {};
            return t.nodeType ? t[this.expando] = n : Object.defineProperty(t, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), t[this.expando]
        },
        cache: function (t) {
            if (!N(t)) return {};
            var e = t[this.expando];
            return e || (e = {}, N(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function (t, e, n) {
            var i, r = this.cache(t);
            if ("string" == typeof e) r[e] = n;
            else
                for (i in e) r[i] = e[i];
            return r
        },
        get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
        },
        access: function (t, e, n) {
            var i;
            return void 0 === e || e && "string" == typeof e && void 0 === n ? void 0 !== (i = this.get(t, e)) ? i : this.get(t, S.camelCase(e)) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function (t, e) {
            var n, i, r, o = t[this.expando];
            if (void 0 !== o) {
                if (void 0 === e) this.register(t);
                else {
                    n = (i = S.isArray(e) ? e.concat(e.map(S.camelCase)) : (r = S.camelCase(e), e in o ? [e, r] : (i = r) in o ? [i] : i.match(M) || [])).length;
                    for (; n--;) delete o[i[n]]
                }
                void 0 !== e && !S.isEmptyObject(o) || (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !S.isEmptyObject(e)
        }
    };
    var F = new j,
        I = new j,
        q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        B = /[A-Z]/g;

    function z(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(B, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : q.test(n) ? S.parseJSON(n) : n)
                } catch (t) {}
                I.set(t, e, n)
            } else n = void 0;
        return n
    }
    S.extend({
        hasData: function (t) {
            return I.hasData(t) || F.hasData(t)
        },
        data: function (t, e, n) {
            return I.access(t, e, n)
        },
        removeData: function (t, e) {
            I.remove(t, e)
        },
        _data: function (t, e, n) {
            return F.access(t, e, n)
        },
        _removeData: function (t, e) {
            F.remove(t, e)
        }
    }), S.fn.extend({
        data: function (i, t) {
            var e, n, r, o = this[0],
                s = o && o.attributes;
            if (void 0 !== i) return "object" == typeof i ? this.each(function () {
                I.set(this, i)
            }) : L(this, function (e) {
                var t, n;
                if (o && void 0 === e) {
                    if (void 0 !== (t = I.get(o, i) || I.get(o, i.replace(B, "-$&").toLowerCase()))) return t;
                    if (n = S.camelCase(i), void 0 !== (t = I.get(o, n))) return t;
                    if (void 0 !== (t = z(o, n, void 0))) return t
                } else n = S.camelCase(i), this.each(function () {
                    var t = I.get(this, n);
                    I.set(this, n, e), -1 < i.indexOf("-") && void 0 !== t && I.set(this, i, e)
                })
            }, null, t, 1 < arguments.length, null, !0);
            if (this.length && (r = I.get(o), 1 === o.nodeType && !F.get(o, "hasDataAttrs"))) {
                for (e = s.length; e--;) s[e] && (0 === (n = s[e].name).indexOf("data-") && (n = S.camelCase(n.slice(5)), z(o, n, r[n])));
                F.set(o, "hasDataAttrs", !0)
            }
            return r
        },
        removeData: function (t) {
            return this.each(function () {
                I.remove(this, t)
            })
        }
    }), S.extend({
        queue: function (t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = F.get(t, e), n && (!i || S.isArray(n) ? i = F.access(t, e, S.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function (t, e) {
            e = e || "fx";
            var n = S.queue(t, e),
                i = n.length,
                r = n.shift(),
                o = S._queueHooks(t, e);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, function () {
                S.dequeue(t, e)
            }, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return F.get(t, n) || F.access(t, n, {
                empty: S.Callbacks("once memory").add(function () {
                    F.remove(t, [e + "queue", n])
                })
            })
        }
    }), S.fn.extend({
        queue: function (e, n) {
            var t = 2;
            return "string" != typeof e && (n = e, e = "fx", t--), arguments.length < t ? S.queue(this[0], e) : void 0 === n ? this : this.each(function () {
                var t = S.queue(this, e, n);
                S._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && S.dequeue(this, e)
            })
        },
        dequeue: function (t) {
            return this.each(function () {
                S.dequeue(this, t)
            })
        },
        clearQueue: function (t) {
            return this.queue(t || "fx", [])
        },
        promise: function (t, e) {
            function n() {
                --r || o.resolveWith(s, [s])
            }
            var i, r = 1,
                o = S.Deferred(),
                s = this,
                a = this.length;
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(i = F.get(s[a], t + "queueHooks")) && i.empty && (r++, i.empty.add(n));
            return n(), o.promise(e)
        }
    });

    function X(t, e) {
        return t = e || t, "none" === S.css(t, "display") || !S.contains(t.ownerDocument, t)
    }
    var H = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        W = new RegExp("^(?:([+-])=|)(" + H + ")([a-z%]*)$", "i"),
        Y = ["Top", "Right", "Bottom", "Left"];

    function U(t, e, n, i) {
        var r, o = 1,
            s = 20,
            a = i ? function () {
                return i.cur()
            } : function () {
                return S.css(t, e, "")
            },
            l = a(),
            u = n && n[3] || (S.cssNumber[e] ? "" : "px"),
            c = (S.cssNumber[e] || "px" !== u && +l) && W.exec(S.css(t, e));
        if (c && c[3] !== u)
            for (u = u || c[3], n = n || [], c = +l || 1; c /= o = o || ".5", S.style(t, e, c + u), o !== (o = a() / l) && 1 !== o && --s;);
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }
    var $ = /^(?:checkbox|radio)$/i,
        V = /<([\w:-]+)/,
        K = /^$|\/(?:java|ecma)script/i,
        G = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function Q(t, e) {
        var n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && S.nodeName(t, e) ? S.merge([t], n) : n
    }

    function Z(t, e) {
        for (var n = 0, i = t.length; n < i; n++) F.set(t[n], "globalEval", !e || F.get(e[n], "globalEval"))
    }
    G.optgroup = G.option, G.tbody = G.tfoot = G.colgroup = G.caption = G.thead, G.th = G.td;
    var J, tt, et = /<|&#?\w+;/;

    function nt(t, e, n, i, r) {
        for (var o, s, a, l, u, c, h = e.createDocumentFragment(), f = [], p = 0, d = t.length; p < d; p++)
            if ((o = t[p]) || 0 === o)
                if ("object" === S.type(o)) S.merge(f, o.nodeType ? [o] : o);
                else if (et.test(o)) {
            for (s = s || h.appendChild(e.createElement("div")), a = (V.exec(o) || ["", ""])[1].toLowerCase(), l = G[a] || G._default, s.innerHTML = l[1] + S.htmlPrefilter(o) + l[2], c = l[0]; c--;) s = s.lastChild;
            S.merge(f, s.childNodes), (s = h.firstChild).textContent = ""
        } else f.push(e.createTextNode(o));
        for (h.textContent = "", p = 0; o = f[p++];)
            if (i && -1 < S.inArray(o, i)) r && r.push(o);
            else if (u = S.contains(o.ownerDocument, o), s = Q(h.appendChild(o), "script"), u && Z(s), n)
            for (c = 0; o = s[c++];) K.test(o.type || "") && n.push(o);
        return h
    }
    J = k.createDocumentFragment().appendChild(k.createElement("div")), (tt = k.createElement("input")).setAttribute("type", "radio"), tt.setAttribute("checked", "checked"), tt.setAttribute("name", "t"), J.appendChild(tt), g.checkClone = J.cloneNode(!0).cloneNode(!0).lastChild.checked, J.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!J.cloneNode(!0).lastChild.defaultValue;
    var it = /^key/,
        rt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ot = /^([^.]*)(?:\.(.+)|)/;

    function st() {
        return !0
    }

    function at() {
        return !1
    }

    function lt() {
        try {
            return k.activeElement
        } catch (t) {}
    }

    function ut(t, e, n, i, r, o) {
        var s, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), e) ut(t, a, n, i, e[a], o);
            return t
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = at;
        else if (!r) return t;
        return 1 === o && (s = r, (r = function (t) {
            return S().off(t), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = S.guid++)), t.each(function () {
            S.event.add(this, e, r, i, n)
        })
    }
    S.event = {
        global: {},
        add: function (e, t, n, i, r) {
            var o, s, a, l, u, c, h, f, p, d, m, g = F.get(e);
            if (g)
                for (n.handler && (n = (o = n).handler, r = o.selector), n.guid || (n.guid = S.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function (t) {
                        return void 0 !== S && S.event.triggered !== t.type ? S.event.dispatch.apply(e, arguments) : void 0
                    }), u = (t = (t || "").match(M) || [""]).length; u--;) p = m = (a = ot.exec(t[u]) || [])[1], d = (a[2] || "").split(".").sort(), p && (h = S.event.special[p] || {}, p = (r ? h.delegateType : h.bindType) || p, h = S.event.special[p] || {}, c = S.extend({
                    type: p,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && S.expr.match.needsContext.test(r),
                    namespace: d.join(".")
                }, o), (f = l[p]) || ((f = l[p] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(e, i, d, s) || e.addEventListener && e.addEventListener(p, s)), h.add && (h.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, c) : f.push(c), S.event.global[p] = !0)
        },
        remove: function (t, e, n, i, r) {
            var o, s, a, l, u, c, h, f, p, d, m, g = F.hasData(t) && F.get(t);
            if (g && (l = g.events)) {
                for (u = (e = (e || "").match(M) || [""]).length; u--;)
                    if (p = m = (a = ot.exec(e[u]) || [])[1], d = (a[2] || "").split(".").sort(), p) {
                        for (h = S.event.special[p] || {}, f = l[p = (i ? h.delegateType : h.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--;) c = f[o], !r && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, h.remove && h.remove.call(t, c));
                        s && !f.length && (h.teardown && !1 !== h.teardown.call(t, d, g.handle) || S.removeEvent(t, p, g.handle), delete l[p])
                    } else
                        for (p in l) S.event.remove(t, p + e[u], n, i, !0);
                S.isEmptyObject(l) && F.remove(t, "handle events")
            }
        },
        dispatch: function (t) {
            t = S.event.fix(t);
            var e, n, i, r, o, s = [],
                a = c.call(arguments),
                l = (F.get(this, "events") || {})[t.type] || [],
                u = S.event.special[t.type] || {};
            if ((a[0] = t).delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, t)) {
                for (s = S.event.handlers.call(this, t, l), e = 0;
                    (r = s[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o, t.data = o.data, void 0 !== (i = ((S.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },
        handlers: function (t, e) {
            var n, i, r, o, s = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                        for (i = [], n = 0; n < a; n++) void 0 === i[r = (o = e[n]).selector + " "] && (i[r] = o.needsContext ? -1 < S(r, this).index(l) : S.find(r, this, null, [l]).length), i[r] && i.push(o);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    } return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (t, e) {
                var n, i, r, o = e.button;
                return null == t.pageX && null != e.clientX && (i = (n = t.target.ownerDocument || k).documentElement, r = n.body, t.pageX = e.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        fix: function (t) {
            if (t[S.expando]) return t;
            var e, n, i, r = t.type,
                o = t,
                s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = rt.test(r) ? this.mouseHooks : it.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new S.Event(o), e = i.length; e--;) t[n = i[e]] = o[n];
            return t.target || (t.target = k), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, o) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    return this !== lt() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === lt() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && S.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function (t) {
                    return S.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, S.removeEvent = function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }, S.Event = function (t, e) {
        return this instanceof S.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? st : at) : this.type = t, e && S.extend(this, e), this.timeStamp = t && t.timeStamp || S.now(), void(this[S.expando] = !0)) : new S.Event(t, e)
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: at,
        isPropagationStopped: at,
        isImmediatePropagationStopped: at,
        isSimulated: !1,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = st, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = st, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = st, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, r) {
        S.event.special[t] = {
            delegateType: r,
            bindType: r,
            handle: function (t) {
                var e, n = t.relatedTarget,
                    i = t.handleObj;
                return n && (n === this || S.contains(this, n)) || (t.type = i.origType, e = i.handler.apply(this, arguments), t.type = r), e
            }
        }
    }), S.fn.extend({
        on: function (t, e, n, i) {
            return ut(this, t, e, n, i)
        },
        one: function (t, e, n, i) {
            return ut(this, t, e, n, i, 1)
        },
        off: function (t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, S(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" != typeof t) return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = at), this.each(function () {
                S.event.remove(this, t, n, e)
            });
            for (r in t) this.off(r, e, t[r]);
            return this
        }
    });
    var ct = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        ht = /<script|<style|<link/i,
        ft = /checked\s*(?:[^=]|=\s*.checked.)/i,
        pt = /^true\/(.*)/,
        dt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function mt(t, e) {
        return S.nodeName(t, "table") && S.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function gt(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function vt(t) {
        var e = pt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function _t(t, e) {
        var n, i, r, o, s, a, l, u;
        if (1 === e.nodeType) {
            if (F.hasData(t) && (o = F.access(t), s = F.set(e, o), u = o.events))
                for (r in delete s.handle, s.events = {}, u)
                    for (n = 0, i = u[r].length; n < i; n++) S.event.add(e, r, u[r][n]);
            I.hasData(t) && (a = I.access(t), l = S.extend({}, a), I.set(e, l))
        }
    }

    function yt(n, i, r, o) {
        i = m.apply([], i);
        var t, e, s, a, l, u, c = 0,
            h = n.length,
            f = h - 1,
            p = i[0],
            d = S.isFunction(p);
        if (d || 1 < h && "string" == typeof p && !g.checkClone && ft.test(p)) return n.each(function (t) {
            var e = n.eq(t);
            d && (i[0] = p.call(this, t, e.html())), yt(e, i, r, o)
        });
        if (h && (e = (t = nt(i, n[0].ownerDocument, !1, n, o)).firstChild, 1 === t.childNodes.length && (t = e), e || o)) {
            for (a = (s = S.map(Q(t, "script"), gt)).length; c < h; c++) l = t, c !== f && (l = S.clone(l, !0, !0), a && S.merge(s, Q(l, "script"))), r.call(n[c], l, c);
            if (a)
                for (u = s[s.length - 1].ownerDocument, S.map(s, vt), c = 0; c < a; c++) l = s[c], K.test(l.type || "") && !F.access(l, "globalEval") && S.contains(u, l) && (l.src ? S._evalUrl && S._evalUrl(l.src) : S.globalEval(l.textContent.replace(dt, "")))
        }
        return n
    }

    function xt(t, e, n) {
        for (var i, r = e ? S.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || S.cleanData(Q(i)), i.parentNode && (n && S.contains(i.ownerDocument, i) && Z(Q(i, "script")), i.parentNode.removeChild(i));
        return t
    }
    S.extend({
        htmlPrefilter: function (t) {
            return t.replace(ct, "<$1></$2>")
        },
        clone: function (t, e, n) {
            var i, r, o, s, a, l, u, c = t.cloneNode(!0),
                h = S.contains(t.ownerDocument, t);
            if (!(g.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || S.isXMLDoc(t)))
                for (s = Q(c), i = 0, r = (o = Q(t)).length; i < r; i++) a = o[i], l = s[i], void 0, "input" === (u = l.nodeName.toLowerCase()) && $.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
            if (e)
                if (n)
                    for (o = o || Q(t), s = s || Q(c), i = 0, r = o.length; i < r; i++) _t(o[i], s[i]);
                else _t(t, c);
            return 0 < (s = Q(c, "script")).length && Z(s, !h && Q(t, "script")), c
        },
        cleanData: function (t) {
            for (var e, n, i, r = S.event.special, o = 0; void 0 !== (n = t[o]); o++)
                if (N(n)) {
                    if (e = n[F.expando]) {
                        if (e.events)
                            for (i in e.events) r[i] ? S.event.remove(n, i) : S.removeEvent(n, i, e.handle);
                        n[F.expando] = void 0
                    }
                    n[I.expando] && (n[I.expando] = void 0)
                }
        }
    }), S.fn.extend({
        domManip: yt,
        detach: function (t) {
            return xt(this, t, !0)
        },
        remove: function (t) {
            return xt(this, t)
        },
        text: function (t) {
            return L(this, function (t) {
                return void 0 === t ? S.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function () {
            return yt(this, arguments, function (t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || mt(this, t).appendChild(t)
            })
        },
        prepend: function () {
            return yt(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = mt(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function () {
            return yt(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function () {
            return yt(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (S.cleanData(Q(t, !1)), t.textContent = "");
            return this
        },
        clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return S.clone(this, t, e)
            })
        },
        html: function (t) {
            return L(this, function (t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !ht.test(t) && !G[(V.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = S.htmlPrefilter(t);
                    try {
                        for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (S.cleanData(Q(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function () {
            var n = [];
            return yt(this, arguments, function (t) {
                var e = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(Q(this)), e && e.replaceChild(t, this))
            }, n)
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, s) {
        S.fn[t] = function (t) {
            for (var e, n = [], i = S(t), r = i.length - 1, o = 0; o <= r; o++) e = o === r ? this : this.clone(!0), S(i[o])[s](e), a.apply(n, e.get());
            return this.pushStack(n)
        }
    });
    var bt, wt = {
        HTML: "block",
        BODY: "block"
    };

    function Tt(t, e) {
        var n = S(e.createElement(t)).appendTo(e.body),
            i = S.css(n[0], "display");
        return n.detach(), i
    }

    function kt(t) {
        var e = k,
            n = wt[t];
        return n || ("none" !== (n = Tt(t, e)) && n || ((e = (bt = (bt || S("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentDocument).write(), e.close(), n = Tt(t, e), bt.detach()), wt[t] = n), n
    }

    function St(t, e, n, i) {
        var r, o, s = {};
        for (o in e) s[o] = t.style[o], t.style[o] = e[o];
        for (o in r = n.apply(t, i || []), e) t.style[o] = s[o];
        return r
    }
    var Pt = /^margin/,
        Ct = new RegExp("^(" + H + ")(?!px)[a-z%]+$", "i"),
        Ot = function (t) {
            var e = t.ownerDocument.defaultView;
            return e && e.opener || (e = T), e.getComputedStyle(t)
        },
        Et = k.documentElement;

    function At(t, e, n) {
        var i, r, o, s, a = t.style;
        return "" !== (s = (n = n || Ot(t)) ? n.getPropertyValue(e) || n[e] : void 0) && void 0 !== s || S.contains(t.ownerDocument, t) || (s = S.style(t, e)), n && !g.pixelMarginRight() && Ct.test(s) && Pt.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o), void 0 !== s ? s + "" : s
    }

    function Dt(t, e) {
        return {
            get: function () {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }! function () {
        var e, n, i, r, o = k.createElement("div"),
            s = k.createElement("div");
        if (s.style) {
            function t() {
                s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Et.appendChild(o);
                var t = T.getComputedStyle(s);
                e = "1%" !== t.top, r = "2px" === t.marginLeft, n = "4px" === t.width, s.style.marginRight = "50%", i = "4px" === t.marginRight, Et.removeChild(o)
            }
            s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(s), S.extend(g, {
                pixelPosition: function () {
                    return t(), e
                },
                boxSizingReliable: function () {
                    return null == n && t(), n
                },
                pixelMarginRight: function () {
                    return null == n && t(), i
                },
                reliableMarginLeft: function () {
                    return null == n && t(), r
                },
                reliableMarginRight: function () {
                    var t, e = s.appendChild(k.createElement("div"));
                    return e.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", s.style.width = "1px", Et.appendChild(o), t = !parseFloat(T.getComputedStyle(e).marginRight), Et.removeChild(o), s.removeChild(e), t
                }
            })
        }
    }();
    var Mt = /^(none|table(?!-c[ea]).+)/,
        Rt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Nt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Lt = ["Webkit", "O", "Moz", "ms"],
        jt = k.createElement("div").style;

    function Ft(t) {
        if (t in jt) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), n = Lt.length; n--;)
            if ((t = Lt[n] + e) in jt) return t
    }

    function It(t, e, n) {
        var i = W.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }

    function qt(t, e, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += S.css(t, n + Y[o], !0, r)), i ? ("content" === n && (s -= S.css(t, "padding" + Y[o], !0, r)), "margin" !== n && (s -= S.css(t, "border" + Y[o] + "Width", !0, r))) : (s += S.css(t, "padding" + Y[o], !0, r), "padding" !== n && (s += S.css(t, "border" + Y[o] + "Width", !0, r)));
        return s
    }

    function Bt(t, e, n) {
        var i = !0,
            r = "width" === e ? t.offsetWidth : t.offsetHeight,
            o = Ot(t),
            s = "border-box" === S.css(t, "boxSizing", !1, o);
        if (r <= 0 || null == r) {
            if (((r = At(t, e, o)) < 0 || null == r) && (r = t.style[e]), Ct.test(r)) return r;
            i = s && (g.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + qt(t, e, n || (s ? "border" : "content"), i, o) + "px"
    }

    function zt(t, e) {
        for (var n, i, r, o = [], s = 0, a = t.length; s < a; s++)(i = t[s]).style && (o[s] = F.get(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && X(i) && (o[s] = F.access(i, "olddisplay", kt(i.nodeName)))) : (r = X(i), "none" === n && r || F.set(i, "olddisplay", r ? n : S.css(i, "display"))));
        for (s = 0; s < a; s++)(i = t[s]).style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
        return t
    }

    function Xt(t, e, n, i, r) {
        return new Xt.prototype.init(t, e, n, i, r)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = At(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function (t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = S.camelCase(e),
                    l = t.style;
                return e = S.cssProps[a] || (S.cssProps[a] = Ft(a) || a), s = S.cssHooks[e] || S.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : l[e] : ("string" === (o = typeof n) && (r = W.exec(n)) && r[1] && (n = U(t, e, r), o = "number"), void(null != n && n == n && ("number" === o && (n += r && r[3] || (S.cssNumber[a] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l[e] = n))))
            }
        },
        css: function (t, e, n, i) {
            var r, o, s, a = S.camelCase(e);
            return e = S.cssProps[a] || (S.cssProps[a] = Ft(a) || a), (s = S.cssHooks[e] || S.cssHooks[a]) && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = At(t, e, i)), "normal" === r && e in Nt && (r = Nt[e]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), S.each(["height", "width"], function (t, s) {
        S.cssHooks[s] = {
            get: function (t, e, n) {
                return e ? Mt.test(S.css(t, "display")) && 0 === t.offsetWidth ? St(t, Rt, function () {
                    return Bt(t, s, n)
                }) : Bt(t, s, n) : void 0
            },
            set: function (t, e, n) {
                var i, r = n && Ot(t),
                    o = n && qt(t, s, n, "border-box" === S.css(t, "boxSizing", !1, r), r);
                return o && (i = W.exec(e)) && "px" !== (i[3] || "px") && (t.style[s] = e, e = S.css(t, s)), It(0, e, o)
            }
        }
    }), S.cssHooks.marginLeft = Dt(g.reliableMarginLeft, function (t, e) {
        return e ? (parseFloat(At(t, "marginLeft")) || t.getBoundingClientRect().left - St(t, {
            marginLeft: 0
        }, function () {
            return t.getBoundingClientRect().left
        })) + "px" : void 0
    }), S.cssHooks.marginRight = Dt(g.reliableMarginRight, function (t, e) {
        return e ? St(t, {
            display: "inline-block"
        }, At, [t, "marginRight"]) : void 0
    }), S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (r, o) {
        S.cssHooks[r + o] = {
            expand: function (t) {
                for (var e = 0, n = {}, i = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) n[r + Y[e] + o] = i[e] || i[e - 2] || i[0];
                return n
            }
        }, Pt.test(r) || (S.cssHooks[r + o].set = It)
    }), S.fn.extend({
        css: function (t, e) {
            return L(this, function (t, e, n) {
                var i, r, o = {},
                    s = 0;
                if (S.isArray(e)) {
                    for (i = Ot(t), r = e.length; s < r; s++) o[e[s]] = S.css(t, e[s], !1, i);
                    return o
                }
                return void 0 !== n ? S.style(t, e, n) : S.css(t, e)
            }, t, e, 1 < arguments.length)
        },
        show: function () {
            return zt(this, !0)
        },
        hide: function () {
            return zt(this)
        },
        toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                X(this) ? S(this).show() : S(this).hide()
            })
        }
    }), ((S.Tween = Xt).prototype = {
        constructor: Xt,
        init: function (t, e, n, i, r, o) {
            this.elem = t, this.prop = n, this.easing = r || S.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var t = Xt.propHooks[this.prop];
            return t && t.get ? t.get(this) : Xt.propHooks._default.get(this)
        },
        run: function (t) {
            var e, n = Xt.propHooks[this.prop];
            return this.options.duration ? this.pos = e = S.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Xt.propHooks._default.set(this), this
        }
    }).init.prototype = Xt.prototype, (Xt.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = S.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function (t) {
                S.fx.step[t.prop] ? S.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[S.cssProps[t.prop]] && !S.cssHooks[t.prop] ? t.elem[t.prop] = t.now : S.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }).scrollTop = Xt.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, S.easing = {
        linear: function (t) {
            return t
        },
        swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, S.fx = Xt.prototype.init, S.fx.step = {};
    var Ht, Wt, Yt, Ut, $t, Vt = /^(?:toggle|show|hide)$/,
        Kt = /queueHooks$/;

    function Gt() {
        return T.setTimeout(function () {
            Ht = void 0
        }), Ht = S.now()
    }

    function Qt(t, e) {
        var n, i = 0,
            r = {
                height: t
            };
        for (e = e ? 1 : 0; i < 4; i += 2 - e) r["margin" + (n = Y[i])] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r
    }

    function Zt(t, e, n) {
        for (var i, r = (Jt.tweeners[e] || []).concat(Jt.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, e, t)) return i
    }

    function Jt(o, t, e) {
        var n, s, i = 0,
            r = Jt.prefilters.length,
            a = S.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (s) return !1;
                for (var t = Ht || Gt(), e = Math.max(0, u.startTime + u.duration - t), n = 1 - (e / u.duration || 0), i = 0, r = u.tweens.length; i < r; i++) u.tweens[i].run(n);
                return a.notifyWith(o, [u, n, e]), n < 1 && r ? e : (a.resolveWith(o, [u]), !1)
            },
            u = a.promise({
                elem: o,
                props: S.extend({}, t),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, e),
                originalProperties: t,
                originalOptions: e,
                startTime: Ht || Gt(),
                duration: e.duration,
                tweens: [],
                createTween: function (t, e) {
                    var n = S.Tween(o, u.opts, t, e, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function (t) {
                    var e = 0,
                        n = t ? u.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; e < n; e++) u.tweens[e].run(1);
                    return t ? (a.notifyWith(o, [u, 1, 0]), a.resolveWith(o, [u, t])) : a.rejectWith(o, [u, t]), this
                }
            }),
            c = u.props;
        for (function (t, e) {
                var n, i, r, o, s;
                for (n in t)
                    if (r = e[i = S.camelCase(n)], o = t[n], S.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (s = S.cssHooks[i]) && "expand" in s)
                        for (n in o = s.expand(o), delete t[i], o) n in t || (t[n] = o[n], e[n] = r);
                    else e[i] = r
            }(c, u.opts.specialEasing); i < r; i++)
            if (n = Jt.prefilters[i].call(u, o, c, u.opts)) return S.isFunction(n.stop) && (S._queueHooks(u.elem, u.opts.queue).stop = S.proxy(n.stop, n)), n;
        return S.map(c, Zt, u), S.isFunction(u.opts.start) && u.opts.start.call(o, u), S.fx.timer(S.extend(l, {
            elem: o,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    S.Animation = S.extend(Jt, {
        tweeners: {
            "*": [function (t, e) {
                var n = this.createTween(t, e);
                return U(n.elem, t, W.exec(e), n), n
            }]
        },
        tweener: function (t, e) {
            for (var n, i = 0, r = (t = S.isFunction(t) ? (e = t, ["*"]) : t.match(M)).length; i < r; i++) n = t[i], Jt.tweeners[n] = Jt.tweeners[n] || [], Jt.tweeners[n].unshift(e)
        },
        prefilters: [function (e, t, n) {
            var i, r, o, s, a, l, u, c = this,
                h = {},
                f = e.style,
                p = e.nodeType && X(e),
                d = F.get(e, "fxshow");
            for (i in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
                    a.unqueued || l()
                }), a.unqueued++, c.always(function () {
                    c.always(function () {
                        a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
                    })
                })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ("none" === (u = S.css(e, "display")) ? F.get(e, "olddisplay") || kt(e.nodeName) : u) && "none" === S.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", c.always(function () {
                    f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                })), t)
                if (r = t[i], Vt.exec(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                        if ("show" !== r || !d || void 0 === d[i]) continue;
                        p = !0
                    }
                    h[i] = d && d[i] || S.style(e, i)
                } else u = void 0;
            if (S.isEmptyObject(h)) "inline" === ("none" === u ? kt(e.nodeName) : u) && (f.display = u);
            else
                for (i in d ? "hidden" in d && (p = d.hidden) : d = F.access(e, "fxshow", {}), o && (d.hidden = !p), p ? S(e).show() : c.done(function () {
                        S(e).hide()
                    }), c.done(function () {
                        var t;
                        for (t in F.remove(e, "fxshow"), h) S.style(e, t, h[t])
                    }), h) s = Zt(p ? d[i] : 0, i, c), i in d || (d[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }],
        prefilter: function (t, e) {
            e ? Jt.prefilters.unshift(t) : Jt.prefilters.push(t)
        }
    }), S.speed = function (t, e, n) {
        var i = t && "object" == typeof t ? S.extend({}, t) : {
            complete: n || !n && e || S.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !S.isFunction(e) && e
        };
        return i.duration = S.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in S.fx.speeds ? S.fx.speeds[i.duration] : S.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            S.isFunction(i.old) && i.old.call(this), i.queue && S.dequeue(this, i.queue)
        }, i
    }, S.fn.extend({
        fadeTo: function (t, e, n, i) {
            return this.filter(X).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function (e, t, n, i) {
            function r() {
                var t = Jt(this, S.extend({}, e), s);
                (o || F.get(this, "finish")) && t.stop(!0)
            }
            var o = S.isEmptyObject(e),
                s = S.speed(t, n, i);
            return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
        },
        stop: function (r, t, o) {
            function s(t) {
                var e = t.stop;
                delete t.stop, e(o)
            }
            return "string" != typeof r && (o = t, t = r, r = void 0), t && !1 !== r && this.queue(r || "fx", []), this.each(function () {
                var t = !0,
                    e = null != r && r + "queueHooks",
                    n = S.timers,
                    i = F.get(this);
                if (e) i[e] && i[e].stop && s(i[e]);
                else
                    for (e in i) i[e] && i[e].stop && Kt.test(e) && s(i[e]);
                for (e = n.length; e--;) n[e].elem !== this || null != r && n[e].queue !== r || (n[e].anim.stop(o), t = !1, n.splice(e, 1));
                !t && o || S.dequeue(this, r)
            })
        },
        finish: function (s) {
            return !1 !== s && (s = s || "fx"), this.each(function () {
                var t, e = F.get(this),
                    n = e[s + "queue"],
                    i = e[s + "queueHooks"],
                    r = S.timers,
                    o = n ? n.length : 0;
                for (e.finish = !0, S.queue(this, s, []), i && i.stop && i.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === s && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; t < o; t++) n[t] && n[t].finish && n[t].finish.call(this);
                delete e.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function (t, i) {
        var r = S.fn[i];
        S.fn[i] = function (t, e, n) {
            return null == t || "boolean" == typeof t ? r.apply(this, arguments) : this.animate(Qt(i, !0), t, e, n)
        }
    }), S.each({
        slideDown: Qt("show"),
        slideUp: Qt("hide"),
        slideToggle: Qt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (t, i) {
        S.fn[t] = function (t, e, n) {
            return this.animate(i, t, e, n)
        }
    }), S.timers = [], S.fx.tick = function () {
        var t, e = 0,
            n = S.timers;
        for (Ht = S.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
        n.length || S.fx.stop(), Ht = void 0
    }, S.fx.timer = function (t) {
        S.timers.push(t), t() ? S.fx.start() : S.timers.pop()
    }, S.fx.interval = 13, S.fx.start = function () {
        Wt || (Wt = T.setInterval(S.fx.tick, S.fx.interval))
    }, S.fx.stop = function () {
        T.clearInterval(Wt), Wt = null
    }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S.fn.delay = function (i, t) {
        return i = S.fx && S.fx.speeds[i] || i, t = t || "fx", this.queue(t, function (t, e) {
            var n = T.setTimeout(t, i);
            e.stop = function () {
                T.clearTimeout(n)
            }
        })
    }, Yt = k.createElement("input"), Ut = k.createElement("select"), $t = Ut.appendChild(k.createElement("option")), Yt.type = "checkbox", g.checkOn = "" !== Yt.value, g.optSelected = $t.selected, Ut.disabled = !0, g.optDisabled = !$t.disabled, (Yt = k.createElement("input")).value = "t", Yt.type = "radio", g.radioValue = "t" === Yt.value;
    var te, ee = S.expr.attrHandle;
    S.fn.extend({
        attr: function (t, e) {
            return L(this, S.attr, t, e, 1 < arguments.length)
        },
        removeAttr: function (t) {
            return this.each(function () {
                S.removeAttr(this, t)
            })
        }
    }), S.extend({
        attr: function (t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? S.prop(t, e, n) : (1 === o && S.isXMLDoc(t) || (e = e.toLowerCase(), r = S.attrHooks[e] || (S.expr.match.bool.test(e) ? te : void 0)), void 0 !== n ? null === n ? void S.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : null == (i = S.find.attr(t, e)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function (t, e) {
                    if (!g.radioValue && "radio" === e && S.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function (t, e) {
            var n, i, r = 0,
                o = e && e.match(M);
            if (o && 1 === t.nodeType)
                for (; n = o[r++];) i = S.propFix[n] || n, S.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
        }
    }), te = {
        set: function (t, e, n) {
            return !1 === e ? S.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var o = ee[e] || S.find.attr;
        ee[e] = function (t, e, n) {
            var i, r;
            return n || (r = ee[e], ee[e] = i, i = null != o(t, e, n) ? e.toLowerCase() : null, ee[e] = r), i
        }
    });
    var ne = /^(?:input|select|textarea|button)$/i,
        ie = /^(?:a|area)$/i;
    S.fn.extend({
        prop: function (t, e) {
            return L(this, S.prop, t, e, 1 < arguments.length)
        },
        removeProp: function (t) {
            return this.each(function () {
                delete this[S.propFix[t] || t]
            })
        }
    }), S.extend({
        prop: function (t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(t) || (e = S.propFix[e] || e, r = S.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = S.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ne.test(t.nodeName) || ie.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), g.optSelected || (S.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        S.propFix[this.toLowerCase()] = this
    });
    var re = /[\t\r\n\f]/g;

    function oe(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }
    S.fn.extend({
        addClass: function (e) {
            var t, n, i, r, o, s, a, l = 0;
            if (S.isFunction(e)) return this.each(function (t) {
                S(this).addClass(e.call(this, t, oe(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(M) || []; n = this[l++];)
                    if (r = oe(n), i = 1 === n.nodeType && (" " + r + " ").replace(re, " ")) {
                        for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = S.trim(i)) && n.setAttribute("class", a)
                    } return this
        },
        removeClass: function (e) {
            var t, n, i, r, o, s, a, l = 0;
            if (S.isFunction(e)) return this.each(function (t) {
                S(this).removeClass(e.call(this, t, oe(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(M) || []; n = this[l++];)
                    if (r = oe(n), i = 1 === n.nodeType && (" " + r + " ").replace(re, " ")) {
                        for (s = 0; o = t[s++];)
                            for (; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                        r !== (a = S.trim(i)) && n.setAttribute("class", a)
                    } return this
        },
        toggleClass: function (r, e) {
            var o = typeof r;
            return "boolean" == typeof e && "string" == o ? e ? this.addClass(r) : this.removeClass(r) : S.isFunction(r) ? this.each(function (t) {
                S(this).toggleClass(r.call(this, t, oe(this), e), e)
            }) : this.each(function () {
                var t, e, n, i;
                if ("string" == o)
                    for (e = 0, n = S(this), i = r.match(M) || []; t = i[e++];) n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
                else void 0 !== r && "boolean" != o || ((t = oe(this)) && F.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === r ? "" : F.get(this, "__className__") || ""))
            })
        },
        hasClass: function (t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + oe(n) + " ").replace(re, " ").indexOf(e)) return !0;
            return !1
        }
    });
    var se = /\r/g,
        ae = /[\x20\t\r\n\f]+/g;
    S.fn.extend({
        val: function (n) {
            var i, t, r, e = this[0];
            return arguments.length ? (r = S.isFunction(n), this.each(function (t) {
                var e;
                1 === this.nodeType && (null == (e = r ? n.call(this, t, S(this).val()) : n) ? e = "" : "number" == typeof e ? e += "" : S.isArray(e) && (e = S.map(e, function (t) {
                    return null == t ? "" : t + ""
                })), (i = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, e, "value") || (this.value = e))
            })) : e ? (i = S.valHooks[e.type] || S.valHooks[e.nodeName.toLowerCase()]) && "get" in i && void 0 !== (t = i.get(e, "value")) ? t : "string" == typeof (t = e.value) ? t.replace(se, "") : null == t ? "" : t : void 0
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = S.find.attr(t, "value");
                    return null != e ? e : S.trim(S.text(t)).replace(ae, " ")
                }
            },
            select: {
                get: function (t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || r < 0, s = o ? null : [], a = o ? r + 1 : i.length, l = r < 0 ? a : o ? r : 0; l < a; l++)
                        if (((n = i[l]).selected || l === r) && (g.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !S.nodeName(n.parentNode, "optgroup"))) {
                            if (e = S(n).val(), o) return e;
                            s.push(e)
                        } return s
                },
                set: function (t, e) {
                    for (var n, i, r = t.options, o = S.makeArray(e), s = r.length; s--;)((i = r[s]).selected = -1 < S.inArray(S.valHooks.option.get(i), o)) && (n = !0);
                    return n || (t.selectedIndex = -1), o
                }
            }
        }
    }), S.each(["radio", "checkbox"], function () {
        S.valHooks[this] = {
            set: function (t, e) {
                return S.isArray(e) ? t.checked = -1 < S.inArray(S(t).val(), e) : void 0
            }
        }, g.checkOn || (S.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var le = /^(?:focusinfocus|focusoutblur)$/;
    S.extend(S.event, {
        trigger: function (t, e, n, i) {
            var r, o, s, a, l, u, c, h = [n || k],
                f = d.call(t, "type") ? t.type : t,
                p = d.call(t, "namespace") ? t.namespace.split(".") : [];
            if (o = s = n = n || k, 3 !== n.nodeType && 8 !== n.nodeType && !le.test(f + S.event.triggered) && (-1 < f.indexOf(".") && (f = (p = f.split(".")).shift(), p.sort()), l = f.indexOf(":") < 0 && "on" + f, (t = t[S.expando] ? t : new S.Event(f, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : S.makeArray(e, [t]), c = S.event.special[f] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, e))) {
                if (!i && !c.noBubble && !S.isWindow(n)) {
                    for (a = c.delegateType || f, le.test(a + f) || (o = o.parentNode); o; o = o.parentNode) h.push(o), s = o;
                    s === (n.ownerDocument || k) && h.push(s.defaultView || s.parentWindow || T)
                }
                for (r = 0;
                    (o = h[r++]) && !t.isPropagationStopped();) t.type = 1 < r ? a : c.bindType || f, (u = (F.get(o, "events") || {})[t.type] && F.get(o, "handle")) && u.apply(o, e), (u = l && o[l]) && u.apply && N(o) && (t.result = u.apply(o, e), !1 === t.result && t.preventDefault());
                return t.type = f, i || t.isDefaultPrevented() || c._default && !1 !== c._default.apply(h.pop(), e) || !N(n) || l && S.isFunction(n[f]) && !S.isWindow(n) && ((s = n[l]) && (n[l] = null), n[S.event.triggered = f](), S.event.triggered = void 0, s && (n[l] = s)), t.result
            }
        },
        simulate: function (t, e, n) {
            var i = S.extend(new S.Event, n, {
                type: t,
                isSimulated: !0
            });
            S.event.trigger(i, null, e)
        }
    }), S.fn.extend({
        trigger: function (t, e) {
            return this.each(function () {
                S.event.trigger(t, e, this)
            })
        },
        triggerHandler: function (t, e) {
            var n = this[0];
            return n ? S.event.trigger(t, e, n, !0) : void 0
        }
    }), S.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, n) {
        S.fn[n] = function (t, e) {
            return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n)
        }
    }), S.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), g.focusin = "onfocusin" in T, g.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function (n, i) {
        function r(t) {
            S.event.simulate(i, t.target, S.event.fix(t))
        }
        S.event.special[i] = {
            setup: function () {
                var t = this.ownerDocument || this,
                    e = F.access(t, i);
                e || t.addEventListener(n, r, !0), F.access(t, i, (e || 0) + 1)
            },
            teardown: function () {
                var t = this.ownerDocument || this,
                    e = F.access(t, i) - 1;
                e ? F.access(t, i, e) : (t.removeEventListener(n, r, !0), F.remove(t, i))
            }
        }
    });
    var ue = T.location,
        ce = S.now(),
        he = /\?/;
    S.parseJSON = function (t) {
        return JSON.parse(t + "")
    }, S.parseXML = function (t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
            e = (new T.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            e = void 0
        }
        return e && !e.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + t), e
    };
    var fe = /#.*$/,
        pe = /([?&])_=[^&]*/,
        de = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        me = /^(?:GET|HEAD)$/,
        ge = /^\/\//,
        ve = {},
        _e = {},
        ye = "*/".concat("*"),
        xe = k.createElement("a");

    function be(o) {
        return function (t, e) {
            "string" != typeof t && (e = t, t = "*");
            var n, i = 0,
                r = t.toLowerCase().match(M) || [];
            if (S.isFunction(e))
                for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(e)) : (o[n] = o[n] || []).push(e)
        }
    }

    function we(e, r, o, s) {
        var a = {},
            l = e === _e;

        function u(t) {
            var i;
            return a[t] = !0, S.each(e[t] || [], function (t, e) {
                var n = e(r, o, s);
                return "string" != typeof n || l || a[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n), u(n), !1)
            }), i
        }
        return u(r.dataTypes[0]) || !a["*"] && u("*")
    }

    function Te(t, e) {
        var n, i, r = S.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && S.extend(!0, t, i), t
    }
    xe.href = ue.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ue.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ue.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ye,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": S.parseJSON,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (t, e) {
            return e ? Te(Te(t, S.ajaxSettings), e) : Te(S.ajaxSettings, t)
        },
        ajaxPrefilter: be(ve),
        ajaxTransport: be(_e),
        ajax: function (t, e) {
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var c, h, f, n, p, i, d, r, m = S.ajaxSetup({}, e),
                g = m.context || m,
                v = m.context && (g.nodeType || g.jquery) ? S(g) : S.event,
                _ = S.Deferred(),
                y = S.Callbacks("once memory"),
                x = m.statusCode || {},
                o = {},
                s = {},
                b = 0,
                a = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (2 === b) {
                            if (!n)
                                for (n = {}; e = de.exec(f);) n[e[1].toLowerCase()] = e[2];
                            e = n[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return 2 === b ? f : null
                    },
                    setRequestHeader: function (t, e) {
                        var n = t.toLowerCase();
                        return b || (t = s[n] = s[n] || t, o[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return b || (m.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)
                            if (b < 2)
                                for (e in t) x[e] = [x[e], t[e]];
                            else w.always(t[w.status]);
                        return this
                    },
                    abort: function (t) {
                        var e = t || a;
                        return c && c.abort(e), l(0, e), this
                    }
                };
            if (_.promise(w).complete = y.add, w.success = w.done, w.error = w.fail, m.url = ((t || m.url || ue.href) + "").replace(fe, "").replace(ge, ue.protocol + "//"), m.type = e.method || e.type || m.method || m.type, m.dataTypes = S.trim(m.dataType || "*").toLowerCase().match(M) || [""], null == m.crossDomain) {
                i = k.createElement("a");
                try {
                    i.href = m.url, i.href = i.href, m.crossDomain = xe.protocol + "//" + xe.host != i.protocol + "//" + i.host
                } catch (t) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = S.param(m.data, m.traditional)), we(ve, m, e, w), 2 === b) return w;
            for (r in (d = S.event && m.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !me.test(m.type), h = m.url, m.hasContent || (m.data && (h = m.url += (he.test(h) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = pe.test(h) ? h.replace(pe, "$1_=" + ce++) : h + (he.test(h) ? "&" : "?") + "_=" + ce++)), m.ifModified && (S.lastModified[h] && w.setRequestHeader("If-Modified-Since", S.lastModified[h]), S.etag[h] && w.setRequestHeader("If-None-Match", S.etag[h])), (m.data && m.hasContent && !1 !== m.contentType || e.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ye + "; q=0.01" : "") : m.accepts["*"]), m.headers) w.setRequestHeader(r, m.headers[r]);
            if (m.beforeSend && (!1 === m.beforeSend.call(g, w, m) || 2 === b)) return w.abort();
            for (r in a = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[r](m[r]);
            if (c = we(_e, m, e, w)) {
                if (w.readyState = 1, d && v.trigger("ajaxSend", [w, m]), 2 === b) return w;
                m.async && 0 < m.timeout && (p = T.setTimeout(function () {
                    w.abort("timeout")
                }, m.timeout));
                try {
                    b = 1, c.send(o, l)
                } catch (t) {
                    if (!(b < 2)) throw t;
                    l(-1, t)
                }
            } else l(-1, "No Transport");

            function l(t, e, n, i) {
                var r, o, s, a, l, u = e;
                2 !== b && (b = 2, p && T.clearTimeout(p), c = void 0, f = i || "", w.readyState = 0 < t ? 4 : 0, r = 200 <= t && t < 300 || 304 === t, n && (a = function (t, e, n) {
                    for (var i, r, o, s, a = t.contents, l = t.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in a)
                            if (a[r] && a[r].test(i)) {
                                l.unshift(r);
                                break
                            } if (l[0] in n) o = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || t.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            s || (s = r)
                        }
                        o = o || s
                    }
                    return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
                }(m, w, n)), a = function (t, e, n, i) {
                    var r, o, s, a, l, u = {},
                        c = t.dataTypes.slice();
                    if (c[1])
                        for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
                    for (o = c.shift(); o;)
                        if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(s = u[l + " " + o] || u["* " + o]))
                            for (r in u)
                                if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                    !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));
                                    break
                                } if (!0 !== s)
                            if (s && t.throws) e = s(e);
                            else try {
                                e = s(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: s ? t : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: e
                    }
                }(m, a, w, r), r ? (m.ifModified && ((l = w.getResponseHeader("Last-Modified")) && (S.lastModified[h] = l), (l = w.getResponseHeader("etag")) && (S.etag[h] = l)), 204 === t || "HEAD" === m.type ? u = "nocontent" : 304 === t ? u = "notmodified" : (u = a.state, o = a.data, r = !(s = a.error))) : (s = u, !t && u || (u = "error", t < 0 && (t = 0))), w.status = t, w.statusText = (e || u) + "", r ? _.resolveWith(g, [o, u, w]) : _.rejectWith(g, [w, u, s]), w.statusCode(x), x = void 0, d && v.trigger(r ? "ajaxSuccess" : "ajaxError", [w, m, r ? o : s]), y.fireWith(g, [w, u]), d && (v.trigger("ajaxComplete", [w, m]), --S.active || S.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function (t, e, n) {
            return S.get(t, e, n, "json")
        },
        getScript: function (t, e) {
            return S.get(t, void 0, e, "script")
        }
    }), S.each(["get", "post"], function (t, r) {
        S[r] = function (t, e, n, i) {
            return S.isFunction(e) && (i = i || n, n = e, e = void 0), S.ajax(S.extend({
                url: t,
                type: r,
                dataType: i,
                data: e,
                success: n
            }, S.isPlainObject(t) && t))
        }
    }), S._evalUrl = function (t) {
        return S.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, S.fn.extend({
        wrapAll: function (e) {
            var t;
            return S.isFunction(e) ? this.each(function (t) {
                S(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function (n) {
            return S.isFunction(n) ? this.each(function (t) {
                S(this).wrapInner(n.call(this, t))
            }) : this.each(function () {
                var t = S(this),
                    e = t.contents();
                e.length ? e.wrapAll(n) : t.append(n)
            })
        },
        wrap: function (e) {
            var n = S.isFunction(e);
            return this.each(function (t) {
                S(this).wrapAll(n ? e.call(this, t) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                S.nodeName(this, "body") || S(this).replaceWith(this.childNodes)
            }).end()
        }
    }), S.expr.filters.hidden = function (t) {
        return !S.expr.filters.visible(t)
    }, S.expr.filters.visible = function (t) {
        return 0 < t.offsetWidth || 0 < t.offsetHeight || 0 < t.getClientRects().length
    };
    var ke = /%20/g,
        Se = /\[\]$/,
        Pe = /\r?\n/g,
        Ce = /^(?:submit|button|image|reset|file)$/i,
        Oe = /^(?:input|select|textarea|keygen)/i;

    function Ee(n, t, i, r) {
        var e;
        if (S.isArray(t)) S.each(t, function (t, e) {
            i || Se.test(n) ? r(n, e) : Ee(n + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, i, r)
        });
        else if (i || "object" !== S.type(t)) r(n, t);
        else
            for (e in t) Ee(n + "[" + e + "]", t[e], i, r)
    }
    S.param = function (t, e) {
        function n(t, e) {
            e = S.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        }
        var i, r = [];
        if (void 0 === e && (e = S.ajaxSettings && S.ajaxSettings.traditional), S.isArray(t) || t.jquery && !S.isPlainObject(t)) S.each(t, function () {
            n(this.name, this.value)
        });
        else
            for (i in t) Ee(i, t[i], e, n);
        return r.join("&").replace(ke, "+")
    }, S.fn.extend({
        serialize: function () {
            return S.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var t = S.prop(this, "elements");
                return t ? S.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !S(this).is(":disabled") && Oe.test(this.nodeName) && !Ce.test(t) && (this.checked || !$.test(t))
            }).map(function (t, e) {
                var n = S(this).val();
                return null == n ? null : S.isArray(n) ? S.map(n, function (t) {
                    return {
                        name: e.name,
                        value: t.replace(Pe, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Pe, "\r\n")
                }
            }).get()
        }
    }), S.ajaxSettings.xhr = function () {
        try {
            return new T.XMLHttpRequest
        } catch (t) {}
    };
    var Ae = {
            0: 200,
            1223: 204
        },
        De = S.ajaxSettings.xhr();
    g.cors = !!De && "withCredentials" in De, g.ajax = De = !!De, S.ajaxTransport(function (r) {
        var o, s;
        return g.cors || De && !r.crossDomain ? {
            send: function (t, e) {
                var n, i = r.xhr();
                if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                    for (n in r.xhrFields) i[n] = r.xhrFields[n];
                for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) i.setRequestHeader(n, t[n]);
                o = function (t) {
                    return function () {
                        o && (o = s = i.onload = i.onerror = i.onabort = i.onreadystatechange = null, "abort" === t ? i.abort() : "error" === t ? "number" != typeof i.status ? e(0, "error") : e(i.status, i.statusText) : e(Ae[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                            binary: i.response
                        } : {
                            text: i.responseText
                        }, i.getAllResponseHeaders()))
                    }
                }, i.onload = o(), s = i.onerror = o("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function () {
                    4 === i.readyState && T.setTimeout(function () {
                        o && s()
                    })
                }, o = o("abort");
                try {
                    i.send(r.hasContent && r.data || null)
                } catch (t) {
                    if (o) throw t
                }
            },
            abort: function () {
                o && o()
            }
        } : void 0
    }), S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (t) {
                return S.globalEval(t), t
            }
        }
    }), S.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), S.ajaxTransport("script", function (n) {
        var i, r;
        if (n.crossDomain) return {
            send: function (t, e) {
                i = S("<script>").prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", r = function (t) {
                    i.remove(), r = null, t && e("error" === t.type ? 404 : 200, t.type)
                }), k.head.appendChild(i[0])
            },
            abort: function () {
                r && r()
            }
        }
    });
    var Me = [],
        Re = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = Me.pop() || S.expando + "_" + ce++;
            return this[t] = !0, t
        }
    }), S.ajaxPrefilter("json jsonp", function (t, e, n) {
        var i, r, o, s = !1 !== t.jsonp && (Re.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Re.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = S.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Re, "$1" + i) : !1 !== t.jsonp && (t.url += (he.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return o || S.error(i + " was not called"), o[0]
        }, t.dataTypes[0] = "json", r = T[i], T[i] = function () {
            o = arguments
        }, n.always(function () {
            void 0 === r ? S(T).removeProp(i) : T[i] = r, t[i] && (t.jsonpCallback = e.jsonpCallback, Me.push(i)), o && S.isFunction(r) && r(o[0]), o = r = void 0
        }), "script") : void 0
    }), S.parseHTML = function (t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || k;
        var i = x.exec(t),
            r = !n && [];
        return i ? [e.createElement(i[1])] : (i = nt([t], e, r), r && r.length && S(r).remove(), S.merge([], i.childNodes))
    };
    var Ne = S.fn.load;

    function Le(t) {
        return S.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    S.fn.load = function (t, e, n) {
        if ("string" != typeof t && Ne) return Ne.apply(this, arguments);
        var i, r, o, s = this,
            a = t.indexOf(" ");
        return -1 < a && (i = S.trim(t.slice(a)), t = t.slice(0, a)), S.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), 0 < s.length && S.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            o = arguments, s.html(i ? S("<div>").append(S.parseHTML(t)).find(i) : t)
        }).always(n && function (t, e) {
            s.each(function () {
                n.apply(this, o || [t.responseText, e, t])
            })
        }), this
    }, S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        S.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), S.expr.filters.animated = function (e) {
        return S.grep(S.timers, function (t) {
            return e === t.elem
        }).length
    }, S.offset = {
        setOffset: function (t, e, n) {
            var i, r, o, s, a, l, u = S.css(t, "position"),
                c = S(t),
                h = {};
            "static" === u && (t.style.position = "relative"), a = c.offset(), o = S.css(t, "top"), l = S.css(t, "left"), r = ("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto") ? (s = (i = c.position()).top, i.left) : (s = parseFloat(o) || 0, parseFloat(l) || 0), S.isFunction(e) && (e = e.call(t, n, S.extend({}, a))), null != e.top && (h.top = e.top - a.top + s), null != e.left && (h.left = e.left - a.left + r), "using" in e ? e.using.call(t, h) : c.css(h)
        }
    }, S.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                S.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0],
                r = {
                    top: 0,
                    left: 0
                },
                o = i && i.ownerDocument;
            return o ? (t = o.documentElement, S.contains(t, i) ? (r = i.getBoundingClientRect(), n = Le(o), {
                top: r.top + n.pageYOffset - t.clientTop,
                left: r.left + n.pageXOffset - t.clientLeft
            }) : r) : void 0
        },
        position: function () {
            if (this[0]) {
                var t, e, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === S.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), S.nodeName(t[0], "html") || (i = t.offset()), i.top += S.css(t[0], "borderTopWidth", !0), i.left += S.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - S.css(n, "marginTop", !0),
                    left: e.left - i.left - S.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && "static" === S.css(t, "position");) t = t.offsetParent;
                return t || Et
            })
        }
    }), S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, r) {
        var o = "pageYOffset" === r;
        S.fn[e] = function (t) {
            return L(this, function (t, e, n) {
                var i = Le(t);
                return void 0 === n ? i ? i[r] : t[e] : void(i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : t[e] = n)
            }, e, t, arguments.length)
        }
    }), S.each(["top", "left"], function (t, n) {
        S.cssHooks[n] = Dt(g.pixelPosition, function (t, e) {
            return e ? (e = At(t, n), Ct.test(e) ? S(t).position()[n] + "px" : e) : void 0
        })
    }), S.each({
        Height: "height",
        Width: "width"
    }, function (o, s) {
        S.each({
            padding: "inner" + o,
            content: s,
            "": "outer" + o
        }, function (i, t) {
            S.fn[t] = function (t, e) {
                var n = arguments.length && (i || "boolean" != typeof t),
                    r = i || (!0 === t || !0 === e ? "margin" : "border");
                return L(this, function (t, e, n) {
                    var i;
                    return S.isWindow(t) ? t.document.documentElement["client" + o] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + o], i["scroll" + o], t.body["offset" + o], i["offset" + o], i["client" + o])) : void 0 === n ? S.css(t, e, r) : S.style(t, e, n, r)
                }, s, n ? t : void 0, n, null)
            }
        })
    }), S.fn.extend({
        bind: function (t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function (t, e) {
            return this.off(t, null, e)
        },
        delegate: function (t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function (t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        },
        size: function () {
            return this.length
        }
    }), S.fn.andSelf = S.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return S
    });
    var je = T.jQuery,
        Fe = T.$;
    return S.noConflict = function (t) {
        return T.$ === S && (T.$ = Fe), t && T.jQuery === S && (T.jQuery = je), S
    }, t || (T.jQuery = T.$ = S), S
}),
function (t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? t(require("jquery"), window, document) : t(jQuery, window, document)
}(function (b, w, T, k) {
    "use strict";
    if (!w.history.pushState) return b.fn.smoothState = function () {
        return this
    }, void(b.fn.smoothState.options = {});
    if (!b.fn.smoothState) {
        var S = b("html, body"),
            P = w.console,
            C = {
                isExternal: function (t) {
                    var e = t.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
                    return "string" == typeof e[1] && 0 < e[1].length && e[1].toLowerCase() !== w.location.protocol || "string" == typeof e[2] && 0 < e[2].length && e[2].replace(new RegExp(":(" + {
                        "http:": 80,
                        "https:": 443
                    } [w.location.protocol] + ")?$"), "") !== w.location.host
                },
                stripHash: function (t) {
                    return t.replace(/#.*/, "")
                },
                isHash: function (t, e) {
                    e = e || w.location.href;
                    var n = -1 < t.indexOf("#"),
                        i = C.stripHash(t) === C.stripHash(e);
                    return n && i
                },
                translate: function (t) {
                    var e = {
                        dataType: "html",
                        type: "GET"
                    };
                    return "string" == typeof t ? b.extend({}, e, {
                        url: t
                    }) : b.extend({}, e, t)
                },
                shouldLoadAnchor: function (t, e, n) {
                    var i = t.prop("href");
                    return !(C.isExternal(i) || C.isHash(i) || t.is(e) || t.prop("target") || typeof n !== k && "" !== n && -1 === t.prop("href").search(n))
                },
                clearIfOverCapacity: function (t, e) {
                    return Object.keys || (Object.keys = function (t) {
                        var e, n = [];
                        for (e in t) Object.prototype.hasOwnProperty.call(t, e) && n.push(e);
                        return n
                    }), Object.keys(t).length > e && (t = {}), t
                },
                storePageIn: function (t, e, n, i, r, o) {
                    var s = b("<html></html>").append(b(n));
                    return void 0 === r && (r = {}), void 0 === o && (o = e), t[e] = {
                        status: "loaded",
                        title: s.find("title").first().text(),
                        html: s.find("#" + i),
                        doc: n,
                        state: r,
                        destUrl: o
                    }, t
                },
                triggerAllAnimationEndEvent: function (e, t) {
                    t = " " + t || "";
                    var n = 0;
                    e.on("animationstart webkitAnimationStart oanimationstart MSAnimationStart", function (t) {
                        b(t.delegateTarget).is(e) && (t.stopPropagation(), n++)
                    }), e.on("animationend webkitAnimationEnd oanimationend MSAnimationEnd", function (t) {
                        b(t.delegateTarget).is(e) && (t.stopPropagation(), 0 === --n && e.trigger("allanimationend"))
                    }), e.on("allanimationend" + t, function () {
                        n = 0, C.redraw(e)
                    })
                },
                redraw: function (t) {
                    t.height()
                }
            },
            n = function (t, a) {
                function l(t) {
                    (t = t || !1) && d.hasOwnProperty(t) ? delete d[t] : d = {}, h.data("smoothState").cache = d
                }

                function u(t, e) {
                    e = e || b.noop;
                    var r = C.translate(t);
                    if (!(d = C.clearIfOverCapacity(d, a.cacheLength)).hasOwnProperty(r.url) || void 0 !== r.data) {
                        d[r.url] = {
                            status: "fetching"
                        };
                        var n = b.ajax(r);
                        n.done(function (t) {
                            C.storePageIn(d, r.url, t, f), h.data("smoothState").cache = d
                        }), n.fail(function () {
                            d[r.url].status = "error"
                        }), a.locationHeader && n.always(function (t, e, n) {
                            var i = (t.statusCode ? t : n).getResponseHeader(a.locationHeader);
                            i && (d[r.url].destUrl = i)
                        }), e && n.always(e)
                    }
                }

                function c(t) {
                    var e = "#" + f,
                        n = d[t] ? b(d[t].html.html()) : null;
                    n.length ? (T.title = d[t].title, h.data("smoothState").href = t, a.loadingClass && S.removeClass(a.loadingClass), a.onReady.render(h, n), h.one("ss.onReadyEnd", function () {
                        p = !1, a.onAfter(h, n), a.scroll && function () {
                            if (s) {
                                var t = b(s, h);
                                if (t.length) {
                                    var e = t.offset().top;
                                    S.scrollTop(e)
                                }
                                s = null
                            }
                        }(), x(h)
                    }), w.setTimeout(function () {
                        h.trigger("ss.onReadyEnd")
                    }, a.onReady.duration)) : !n && a.debug && P ? P.warn("No element with an id of " + e + " in response from " + t + " in " + d) : w.location = t
                }

                function i(t, n, i) {
                    var r = C.translate(t);
                    void 0 === n && (n = !0), void 0 === i && (i = !0);
                    var o = !1,
                        s = !1,
                        e = {
                            loaded: function () {
                                var t = o ? "ss.onProgressEnd" : "ss.onStartEnd";
                                if (s && o ? s && c(r.url) : h.one(t, function () {
                                        c(r.url), i || l(r.url)
                                    }), n) {
                                    var e = d[r.url].destUrl;
                                    m = a.alterChangeState({
                                        id: f
                                    }, d[r.url].title, e), d[r.url].state = m, w.history.pushState(m, d[r.url].title, e)
                                }
                                s && !i && l(r.url)
                            },
                            fetching: function () {
                                o || (o = !0, h.one("ss.onStartEnd", function () {
                                    a.loadingClass && S.addClass(a.loadingClass), a.onProgress.render(h), w.setTimeout(function () {
                                        h.trigger("ss.onProgressEnd"), s = !0
                                    }, a.onProgress.duration)
                                })), w.setTimeout(function () {
                                    d.hasOwnProperty(r.url) && e[d[r.url].status]()
                                }, 10)
                            },
                            error: function () {
                                a.debug && P ? P.log("There was an error loading: " + r.url) : w.location = r.url
                            }
                        };
                    d.hasOwnProperty(r.url) || u(r), a.onStart.render(h), w.setTimeout(function () {
                        a.scroll && S.scrollTop(0), h.trigger("ss.onStartEnd")
                    }, a.onStart.duration), e[d[r.url].status]()
                }

                function e(t) {
                    var e, n = b(t.currentTarget);
                    C.shouldLoadAnchor(n, a.blacklist, a.hrefRegex) && !p && (t.stopPropagation(), e = C.translate(n.prop("href")), e = a.alterRequest(e), u(e))
                }

                function n(t) {
                    var e = b(t.currentTarget);
                    if (!t.metaKey && !t.ctrlKey && C.shouldLoadAnchor(e, a.blacklist, a.hrefRegex) && (t.stopPropagation(), t.preventDefault(), !_())) {
                        y();
                        var n = C.translate(e.prop("href"));
                        p = !0, s = e.prop("hash"), n = a.alterRequest(n), a.onBefore(e, h), i(n)
                    }
                }

                function r(t) {
                    var e = b(t.currentTarget);
                    if (!e.is(a.blacklist) && (t.preventDefault(), t.stopPropagation(), !_())) {
                        y();
                        var n = {
                            url: e.prop("action"),
                            data: e.serialize(),
                            type: e.prop("method")
                        };
                        p = !0, "get" === (n = a.alterRequest(n)).type.toLowerCase() && (n.url = n.url + "?" + n.data), a.onBefore(e, h), i(n, k, a.allowFormCaching)
                    }
                }
                var o, h = b(t),
                    f = h.prop("id"),
                    s = null,
                    p = !1,
                    d = {},
                    m = {},
                    g = w.location.href,
                    v = 0,
                    _ = function () {
                        var t = null === a.repeatDelay,
                            e = parseInt(Date.now()) > v;
                        return !(t || e)
                    },
                    y = function () {
                        v = parseInt(Date.now()) + parseInt(a.repeatDelay)
                    },
                    x = function (t) {
                        a.anchors && a.prefetch && t.find(a.anchors).not(a.prefetchBlacklist).on(a.prefetchOn, null, e)
                    };
                return a = b.extend({}, b.fn.smoothState.options, a), null === w.history.state ? (m = a.alterChangeState({
                    id: f
                }, T.title, g), w.history.replaceState(m, T.title, g)) : m = {}, C.storePageIn(d, g, T.documentElement.outerHTML, f, m), C.triggerAllAnimationEndEvent(h, "ss.onStartEnd ss.onProgressEnd ss.onEndEnd"), o = h, a.anchors && (o.on("click", a.anchors, n), x(o)), a.forms && o.on("submit", a.forms, r), {
                    href: g,
                    cache: d,
                    clear: l,
                    load: i,
                    fetch: u,
                    restartCSSAnimations: function () {
                        var t = h.prop("class");
                        h.removeClass(t), C.redraw(h), h.addClass(t)
                    }
                }
            };
        w.onpopstate = function (t) {
            if (null !== t.state) {
                var e = w.location.href,
                    n = b("#" + t.state.id).data("smoothState"),
                    i = n.href !== e && !C.isHash(e, n.href),
                    r = t.state !== n.cache[n.href].state;
                (i || r) && (r && n.clear(n.href), n.load(e, !1))
            }
        }, b.smoothStateUtility = C, b.fn.smoothState = function (e) {
            return this.each(function () {
                var t = this.tagName.toLowerCase();
                this.id && "body" !== t && "html" !== t && !b.data(this, "smoothState") ? b.data(this, "smoothState", new n(this, e)) : !this.id && P ? P.warn("Every smoothState container needs an id but the following one does not have one:", this) : "body" !== t && "html" !== t || !P || P.warn("The smoothstate container cannot be the " + this.tagName + " tag")
            })
        }, b.fn.smoothState.options = {
            debug: !1,
            anchors: "a",
            hrefRegex: "",
            forms: "form",
            allowFormCaching: !1,
            repeatDelay: 500,
            blacklist: ".no-smoothState",
            prefetch: !1,
            prefetchOn: "mouseover touchstart",
            prefetchBlacklist: ".no-prefetch",
            locationHeader: "X-SmoothState-Location",
            cacheLength: 0,
            loadingClass: "is-loading",
            scroll: !0,
            alterRequest: function (t) {
                return t
            },
            alterChangeState: function (t, e, n) {
                return t
            },
            onBefore: function (t, e) {},
            onStart: {
                duration: 0,
                render: function (t) {}
            },
            onProgress: {
                duration: 0,
                render: function (t) {}
            },
            onReady: {
                duration: 0,
                render: function (t, e) {
                    t.html(e)
                }
            },
            onAfter: function (t, e) {}
        }
    }
}),
function (t) {
    "undefined" == typeof module ? this.charming = t : module.exports = t
}(function (t, e) {
    "use strict";
    var s = (e = e || {}).tagName || "span",
        a = null != e.classPrefix ? e.classPrefix : "char",
        l = 1;
    return function t(e) {
        for (var n = [].slice.call(e.childNodes), i = n.length, r = -1; ++r < i;) t(n[r]);
        e.nodeType === Node.TEXT_NODE && function (t) {
            for (var e = t.parentNode, n = t.nodeValue, i = n.length, r = -1; ++r < i;) {
                var o = document.createElement(s);
                a && (o.className = a + l, l++), o.appendChild(document.createTextNode(n[r])), e.insertBefore(o, t)
            }
            e.removeChild(t)
        }(e)
    }(t), t
}),
function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return e.on = function (t, e) {
        if (t && e) {
            var n = this._events = this._events || {},
                i = n[t] = n[t] || [];
            return -1 == i.indexOf(e) && i.push(e), this
        }
    }, e.once = function (t, e) {
        if (t && e) {
            this.on(t, e);
            var n = this._onceEvents = this._onceEvents || {};
            return (n[t] = n[t] || {})[e] = !0, this
        }
    }, e.off = function (t, e) {
        var n = this._events && this._events[t];
        if (n && n.length) {
            var i = n.indexOf(e);
            return -1 != i && n.splice(i, 1), this
        }
    }, e.emitEvent = function (t, e) {
        var n = this._events && this._events[t];
        if (n && n.length) {
            n = n.slice(0), e = e || [];
            for (var i = this._onceEvents && this._onceEvents[t], r = 0; r < n.length; r++) {
                var o = n[r];
                i && i[o] && (this.off(t, o), delete i[o]), o.apply(this, e)
            }
            return this
        }
    }, e.allOff = function () {
        delete this._events, delete this._onceEvents
    }, t
}),
function (e, n) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (t) {
        return n(e, t)
    }) : "object" == typeof module && module.exports ? module.exports = n(e, require("ev-emitter")) : e.imagesLoaded = n(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function (e, t) {
    function r(t, e) {
        for (var n in e) t[n] = e[n];
        return t
    }

    function o(t, e, n) {
        if (!(this instanceof o)) return new o(t, e, n);
        var i = t;
        return "string" == typeof t && (i = document.querySelectorAll(t)), i ? (this.elements = function (t) {
            return Array.isArray(t) ? t : "object" == typeof t && "number" == typeof t.length ? l.call(t) : [t]
        }(i), this.options = r({}, this.options), "function" == typeof e ? n = e : r(this.options, e), n && this.on("always", n), this.getImages(), s && (this.jqDeferred = new s.Deferred), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (i || t))
    }

    function n(t) {
        this.img = t
    }

    function i(t, e) {
        this.url = t, this.element = e, this.img = new Image
    }
    var s = e.jQuery,
        a = e.console,
        l = Array.prototype.slice;
    (o.prototype = Object.create(t.prototype)).options = {}, o.prototype.getImages = function () {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, o.prototype.addElementImages = function (t) {
        "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && u[e]) {
            for (var n = t.querySelectorAll("img"), i = 0; i < n.length; i++) {
                var r = n[i];
                this.addImage(r)
            }
            if ("string" == typeof this.options.background) {
                var o = t.querySelectorAll(this.options.background);
                for (i = 0; i < o.length; i++) {
                    var s = o[i];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    };
    var u = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function (t) {
        var e = getComputedStyle(t);
        if (e)
            for (var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(e.backgroundImage); null !== i;) {
                var r = i && i[2];
                r && this.addBackground(r, t), i = n.exec(e.backgroundImage)
            }
    }, o.prototype.addImage = function (t) {
        var e = new n(t);
        this.images.push(e)
    }, o.prototype.addBackground = function (t, e) {
        var n = new i(t, e);
        this.images.push(n)
    }, o.prototype.check = function () {
        function e(t, e, n) {
            setTimeout(function () {
                i.progress(t, e, n)
            })
        }
        var i = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (t) {
            t.once("progress", e), t.check()
        }) : void this.complete()
    }, o.prototype.progress = function (t, e, n) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + n, t, e)
    }, o.prototype.complete = function () {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this)
        }
    }, (n.prototype = Object.create(t.prototype)).check = function () {
        return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, n.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth
    }, n.prototype.confirm = function (t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
    }, n.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, n.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, n.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, n.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, (i.prototype = Object.create(n.prototype)).check = function () {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, i.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, i.prototype.confirm = function (t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
    }, o.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery) && ((s = t).fn.imagesLoaded = function (t, e) {
            return new o(this, t, e).jqDeferred.promise(s(this))
        })
    }, o.makeJQueryPlugin(), o
});
var global_custom2, _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
        "use strict";

        function l(e) {
            var n = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
            return function (t) {
                return (Math.round(t / e) * e * n | 0) / n
            }
        }

        function u(t, e) {
            for (; t;) t.f || t.blob || (t.m = e || Math.round), t = t._next
        }
        var t, e, T, b, w, k, v, n, g, i;

        function _(t, e, n, i) {
            n === i && (n = i - (i - e) / 1e6), t === e && (e = t + (n - t) / 1e6), this.a = t, this.b = e, this.c = n, this.d = i, this.da = i - t, this.ca = n - t, this.ba = e - t
        }

        function S(t, e, n, i) {
            var r = {
                    a: t
                },
                o = {},
                s = {},
                a = {
                    c: i
                },
                l = (t + e) / 2,
                u = (e + n) / 2,
                c = (n + i) / 2,
                h = (l + u) / 2,
                f = (u + c) / 2,
                p = (f - h) / 8;
            return r.b = l + (t - l) / 4, o.b = h + p, r.c = o.a = (r.b + o.b) / 2, o.c = s.a = (h + f) / 2, s.b = f - p, a.b = c + (i - c) / 4, s.c = a.a = (s.b + a.b) / 2, [r, o, s, a]
        }

        function y(t, e, n, i, r) {
            var o, s, a, l, u, c, h, f, p, d, m, g, v, _ = t.length - 1,
                y = 0,
                x = t[0].a;
            for (o = 0; o < _; o++) s = (u = t[y]).a, a = u.d, l = t[y + 1].d, f = r ? (m = b[o], v = ((g = w[o]) + m) * e * .25 / (i ? .5 : k[o] || .5), a - ((c = a - (a - s) * (i ? .5 * e : 0 !== m ? v / m : 0)) + (((h = a + (l - a) * (i ? .5 * e : 0 !== g ? v / g : 0)) - c) * (3 * m / (m + g) + .5) / 4 || 0))) : a - ((c = a - (a - s) * e * .5) + (h = a + (l - a) * e * .5)) / 2, c += f, h += f, u.c = p = c, u.b = 0 !== o ? x : x = u.a + .6 * (u.c - u.a), u.da = a - s, u.ca = p - s, u.ba = x - s, n ? (d = S(s, x, p, a), t.splice(y, 1, d[0], d[1], d[2], d[3]), y += 4) : y++, x = h;
            (u = t[y]).b = x, u.c = x + .4 * (u.d - x), u.da = u.d - u.a, u.ca = u.c - u.a, u.ba = x - u.a, n && (d = S(u.a, x, u.c, u.d), t.splice(y, 1, d[0], d[1], d[2], d[3]))
        }

        function x(t, e, n, i) {
            var r, o, s, a, l, u, c = [];
            if (i)
                for (o = (t = [i].concat(t)).length; - 1 < --o;) "string" == typeof (u = t[o][e]) && "=" === u.charAt(1) && (t[o][e] = i[e] + Number(u.charAt(0) + u.substr(2)));
            if ((r = t.length - 2) < 0) return c[0] = new _(t[0][e], 0, 0, t[0][e]), c;
            for (o = 0; o < r; o++) s = t[o][e], a = t[o + 1][e], c[o] = new _(s, 0, 0, a), n && (l = t[o + 2][e], b[o] = (b[o] || 0) + (a - s) * (a - s), w[o] = (w[o] || 0) + (l - a) * (l - a));
            return c[o] = new _(t[o][e], 0, 0, t[o + 1][e]), c
        }

        function p(t, e, n, i, r, o) {
            var s, a, l, u, c, h, f, p, d = {},
                m = [],
                g = o || t[0];
            for (a in r = "string" == typeof r ? "," + r + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == e && (e = 1), t[0]) m.push(a);
            if (1 < t.length) {
                for (p = t[t.length - 1], f = !0, s = m.length; - 1 < --s;)
                    if (a = m[s], .05 < Math.abs(g[a] - p[a])) {
                        f = !1;
                        break
                    } f && (t = t.concat(), o && t.unshift(o), t.push(t[1]), o = t[t.length - 3])
            }
            for (b.length = w.length = k.length = 0, s = m.length; - 1 < --s;) a = m[s], v[a] = -1 !== r.indexOf("," + a + ","), d[a] = x(t, a, v[a], o);
            for (s = b.length; - 1 < --s;) b[s] = Math.sqrt(b[s]), w[s] = Math.sqrt(w[s]);
            if (!i) {
                for (s = m.length; - 1 < --s;)
                    if (v[a])
                        for (h = (l = d[m[s]]).length - 1, u = 0; u < h; u++) c = l[u + 1].da / w[u] + l[u].da / b[u] || 0, k[u] = (k[u] || 0) + c * c;
                for (s = k.length; - 1 < --s;) k[s] = Math.sqrt(k[s])
            }
            for (s = m.length, u = n ? 4 : 1; - 1 < --s;) l = d[a = m[s]], y(l, e, n, i, v[a]), f && (l.splice(0, u), l.splice(l.length - u, u));
            return d
        }

        function d(t, e, n) {
            for (var i, r, o, s, a, l, u, c, h, f, p, d = 1 / n, m = t.length; - 1 < --m;)
                for (o = (f = t[m]).a, s = f.d - o, a = f.c - o, l = f.b - o, i = r = 0, c = 1; c <= n; c++) i = r - (r = ((u = d * c) * u * s + 3 * (h = 1 - u) * (u * a + h * l)) * u), e[p = m * n + c - 1] = (e[p] || 0) + i * i
        }
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (i, c, y) {
            function m(t) {
                var e, n = [],
                    i = t.length;
                for (e = 0; e !== i; n.push(t[e++]));
                return n
            }

            function g(t, e, n) {
                var i, r, o = t.cycle;
                for (i in o) r = o[i], t[i] = "function" == typeof r ? r(n, e[n], e) : r[n % r.length];
                delete t.cycle
            }

            function v(t) {
                if ("function" == typeof t) return t;
                var d = "object" == typeof t ? t : {
                        each: t
                    },
                    m = d.ease,
                    g = d.from || 0,
                    v = d.base || 0,
                    _ = {},
                    y = isNaN(g),
                    x = d.axis,
                    b = {
                        center: .5,
                        end: 1
                    } [g] || 0;
                return function (t, e, n) {
                    var i, r, o, s, a, l, u, c, h, f = (n || d).length,
                        p = _[f];
                    if (!p) {
                        if (!(h = "auto" === d.grid ? 0 : (d.grid || [1 / 0])[0])) {
                            for (u = -1 / 0; u < (u = n[h++].getBoundingClientRect().left) && h < f;);
                            h--
                        }
                        for (p = _[f] = [], i = y ? Math.min(h, f) * b - .5 : g % h, r = y ? f * b / h - .5 : g / h | 0, c = 1 / (u = 0), l = 0; l < f; l++) o = l % h - i, s = r - (l / h | 0), p[l] = a = x ? Math.abs("y" === x ? s : o) : Math.sqrt(o * o + s * s), u < a && (u = a), a < c && (c = a);
                        p.max = u - c, p.min = c, p.v = f = d.amount || d.each * (f < h ? f : x ? "y" === x ? f / h : h : Math.max(h, f / h)) || 0, p.b = f < 0 ? v - f : v
                    }
                    return f = (p[t] - p.min) / p.max, p.b + (m ? m.getRatio(f) : f) * p.v
                }
            }
            var _ = function (t, e, n) {
                    y.call(this, t, e, n), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = _.prototype.render
                },
                x = 1e-8,
                b = y._internals,
                w = b.isSelector,
                T = b.isArray,
                t = _.prototype = y.to({}, .1, {}),
                k = [];
            _.version = "2.1.2", t.constructor = _, t.kill()._gc = !1, _.killTweensOf = _.killDelayedCallsTo = y.killTweensOf, _.getTweensOf = y.getTweensOf, _.lagSmoothing = y.lagSmoothing, _.ticker = y.ticker, _.render = y.render, _.distribute = v, t.invalidate = function () {
                return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), y.prototype.invalidate.call(this)
            }, t.updateTo = function (t, e) {
                var n, i = this,
                    r = i.ratio,
                    o = i.vars.immediateRender || t.immediateRender;
                for (n in e && i._startTime < i._timeline._time && (i._startTime = i._timeline._time, i._uncache(!1), i._gc ? i._enabled(!0, !1) : i._timeline.insert(i, i._startTime - i._delay)), t) i.vars[n] = t[n];
                if (i._initted || o)
                    if (e) i._initted = !1, o && i.render(0, !0, !0);
                    else if (i._gc && i._enabled(!0, !1), i._notifyPluginsOfEnabled && i._firstPT && y._onPluginEvent("_onDisable", i), .998 < i._time / i._duration) {
                    var s = i._totalTime;
                    i.render(0, !0, !1), i._initted = !1, i.render(s, !0, !1)
                } else if (i._initted = !1, i._init(), 0 < i._time || o)
                    for (var a, l = 1 / (1 - r), u = i._firstPT; u;) a = u.s + u.c, u.c *= l, u.s = a - u.c, u = u._next;
                return i
            }, t.render = function (t, e, n) {
                this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                var i, r, o, s, a, l, u, c, h, f = this,
                    p = f._dirty ? f.totalDuration() : f._totalDuration,
                    d = f._time,
                    m = f._totalTime,
                    g = f._cycle,
                    v = f._duration,
                    _ = f._rawPrevTime;
                if (p - x <= t && 0 <= t ? (f._totalTime = p, f._cycle = f._repeat, f._yoyo && 0 != (1 & f._cycle) ? (f._time = 0, f.ratio = f._ease._calcEnd ? f._ease.getRatio(0) : 0) : (f._time = v, f.ratio = f._ease._calcEnd ? f._ease.getRatio(1) : 1), f._reversed || (i = !0, r = "onComplete", n = n || f._timeline.autoRemoveChildren), 0 !== v || !f._initted && f.vars.lazy && !n || (f._startTime === f._timeline._duration && (t = 0), (_ < 0 || t <= 0 && -x <= t || _ === x && "isPause" !== f.data) && _ !== t && (n = !0, x < _ && (r = "onReverseComplete")), f._rawPrevTime = c = !e || t || _ === t ? t : x)) : t < x ? (f._totalTime = f._time = f._cycle = 0, f.ratio = f._ease._calcEnd ? f._ease.getRatio(0) : 0, (0 !== m || 0 === v && 0 < _) && (r = "onReverseComplete", i = f._reversed), -x < t ? t = 0 : t < 0 && (f._active = !1, 0 !== v || !f._initted && f.vars.lazy && !n || (0 <= _ && (n = !0), f._rawPrevTime = c = !e || t || _ === t ? t : x)), f._initted || (n = !0)) : (f._totalTime = f._time = t, 0 !== f._repeat && (s = v + f._repeatDelay, f._cycle = f._totalTime / s >> 0, 0 !== f._cycle && f._cycle === f._totalTime / s && m <= t && f._cycle--, f._time = f._totalTime - f._cycle * s, f._yoyo && 0 != (1 & f._cycle) && (f._time = v - f._time, (h = f._yoyoEase || f.vars.yoyoEase) && (f._yoyoEase || (!0 !== h || f._initted ? f._yoyoEase = h = !0 === h ? f._ease : h instanceof Ease ? h : Ease.map[h] : (h = f.vars.ease, f._yoyoEase = h = h ? h instanceof Ease ? h : "function" == typeof h ? new Ease(h, f.vars.easeParams) : Ease.map[h] || y.defaultEase : y.defaultEase)), f.ratio = h ? 1 - h.getRatio((v - f._time) / v) : 0)), f._time > v ? f._time = v : f._time < 0 && (f._time = 0)), f._easeType && !h ? (a = f._time / v, (1 === (l = f._easeType) || 3 === l && .5 <= a) && (a = 1 - a), 3 === l && (a *= 2), 1 === (u = f._easePower) ? a *= a : 2 === u ? a *= a * a : 3 === u ? a *= a * a * a : 4 === u && (a *= a * a * a * a), f.ratio = 1 === l ? 1 - a : 2 === l ? a : f._time / v < .5 ? a / 2 : 1 - a / 2) : h || (f.ratio = f._ease.getRatio(f._time / v))), d !== f._time || n || g !== f._cycle) {
                    if (!f._initted) {
                        if (f._init(), !f._initted || f._gc) return;
                        if (!n && f._firstPT && (!1 !== f.vars.lazy && f._duration || f.vars.lazy && !f._duration)) return f._time = d, f._totalTime = m, f._rawPrevTime = _, f._cycle = g, b.lazyTweens.push(f), void(f._lazy = [t, e]);
                        !f._time || i || h ? i && this._ease._calcEnd && !h && (f.ratio = f._ease.getRatio(0 === f._time ? 0 : 1)) : f.ratio = f._ease.getRatio(f._time / v)
                    }
                    for (!1 !== f._lazy && (f._lazy = !1), f._active || !f._paused && f._time !== d && 0 <= t && (f._active = !0), 0 === m && (2 === f._initted && 0 < t && f._init(), f._startAt && (0 <= t ? f._startAt.render(t, !0, n) : r || (r = "_dummyGS")), !f.vars.onStart || 0 === f._totalTime && 0 !== v || (e || f._callback("onStart"))), o = f._firstPT; o;) o.f ? o.t[o.p](o.c * f.ratio + o.s) : o.t[o.p] = o.c * f.ratio + o.s, o = o._next;
                    f._onUpdate && (t < 0 && f._startAt && f._startTime && f._startAt.render(t, !0, n), e || f._totalTime === m && !r || f._callback("onUpdate")), f._cycle !== g && (e || f._gc || f.vars.onRepeat && f._callback("onRepeat")), !r || f._gc && !n || (t < 0 && f._startAt && !f._onUpdate && f._startTime && f._startAt.render(t, !0, n), i && (f._timeline.autoRemoveChildren && f._enabled(!1, !1), f._active = !1), !e && f.vars[r] && f._callback(r), 0 === v && f._rawPrevTime === x && c !== x && (f._rawPrevTime = 0))
                } else m !== f._totalTime && f._onUpdate && (e || f._callback("onUpdate"))
            }, _.to = function (t, e, n) {
                return new _(t, e, n)
            }, _.from = function (t, e, n) {
                return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new _(t, e, n)
            }, _.fromTo = function (t, e, n, i) {
                return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new _(t, e, i)
            }, _.staggerTo = _.allTo = function (t, e, n, i, r, o, s) {
                var a, l, u, c, h = [],
                    f = v(n.stagger || i),
                    p = n.cycle,
                    d = (n.startAt || k).cycle;
                for (T(t) || ("string" == typeof t && (t = y.selector(t) || t), w(t) && (t = m(t))), a = (t = t || []).length - 1, u = 0; u <= a; u++) {
                    for (c in l = {}, n) l[c] = n[c];
                    if (p && (g(l, t, u), null != l.duration && (e = l.duration, delete l.duration)), d) {
                        for (c in d = l.startAt = {}, n.startAt) d[c] = n.startAt[c];
                        g(l.startAt, t, u)
                    }
                    l.delay = f(u, t[u], t) + (l.delay || 0), u === a && r && (l.onComplete = function () {
                        n.onComplete && n.onComplete.apply(n.onCompleteScope || this, arguments), r.apply(s || n.callbackScope || this, o || k)
                    }), h[u] = new _(t[u], e, l)
                }
                return h
            }, _.staggerFrom = _.allFrom = function (t, e, n, i, r, o, s) {
                return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, _.staggerTo(t, e, n, i, r, o, s)
            }, _.staggerFromTo = _.allFromTo = function (t, e, n, i, r, o, s, a) {
                return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, _.staggerTo(t, e, i, r, o, s, a)
            }, _.delayedCall = function (t, e, n, i, r) {
                return new _(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: n,
                    callbackScope: i,
                    onReverseComplete: e,
                    onReverseCompleteParams: n,
                    immediateRender: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, _.set = function (t, e) {
                return new _(t, 0, e)
            }, _.isTweening = function (t) {
                return 0 < y.getTweensOf(t, !0).length
            };
            var o = function (t, e) {
                    for (var n = [], i = 0, r = t._first; r;) r instanceof y ? n[i++] = r : (e && (n[i++] = r), i = (n = n.concat(o(r, e))).length), r = r._next;
                    return n
                },
                h = _.getAllTweens = function (t) {
                    return o(i._rootTimeline, t).concat(o(i._rootFramesTimeline, t))
                };
            _.killAll = function (t, e, n, i) {
                null == e && (e = !0), null == n && (n = !0);
                var r, o, s, a = h(0 != i),
                    l = a.length,
                    u = e && n && i;
                for (s = 0; s < l; s++) o = a[s], (u || o instanceof c || (r = o.target === o.vars.onComplete) && n || e && !r) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
            }, _.killChildTweensOf = function (t, e) {
                if (null != t) {
                    var n, i, r, o, s, a = b.tweenLookup;
                    if ("string" == typeof t && (t = y.selector(t) || t), w(t) && (t = m(t)), T(t))
                        for (o = t.length; - 1 < --o;) _.killChildTweensOf(t[o], e);
                    else {
                        for (r in n = [], a)
                            for (i = a[r].target.parentNode; i;) i === t && (n = n.concat(a[r].tweens)), i = i.parentNode;
                        for (s = n.length, o = 0; o < s; o++) e && n[o].totalTime(n[o].totalDuration()), n[o]._enabled(!1, !1)
                    }
                }
            };

            function r(t, e, n, i) {
                e = !1 !== e, n = !1 !== n;
                for (var r, o, s = h(i = !1 !== i), a = e && n && i, l = s.length; - 1 < --l;) o = s[l], (a || o instanceof c || (r = o.target === o.vars.onComplete) && n || e && !r) && o.paused(t)
            }
            return _.pauseAll = function (t, e, n) {
                r(!0, t, e, n)
            }, _.resumeAll = function (t, e, n) {
                r(!1, t, e, n)
            }, _.globalTimeScale = function (t) {
                var e = i._rootTimeline,
                    n = y.ticker.time;
                return arguments.length ? (t = t || x, e._startTime = n - (n - e._startTime) * e._timeScale / t, e = i._rootFramesTimeline, n = y.ticker.frame, e._startTime = n - (n - e._startTime) * e._timeScale / t, e._timeScale = i._rootTimeline._timeScale = t, t) : e._timeScale
            }, t.progress = function (t, e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
            }, t.totalProgress = function (t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
            }, t.time = function (t, e) {
                if (!arguments.length) return this._time;
                this._dirty && this.totalDuration();
                var n = this._duration,
                    i = this._cycle,
                    r = i * (n + this._repeatDelay);
                return n < t && (t = n), this.totalTime(this._yoyo && 1 & i ? n - t + r : this._repeat ? t + r : t, e)
            }, t.duration = function (t) {
                return arguments.length ? i.prototype.duration.call(this, t) : this._duration
            }, t.totalDuration = function (t) {
                return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
            }, t.repeat = function (t) {
                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, t.repeatDelay = function (t) {
                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, t.yoyo = function (t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, _
        }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (h, f, d) {
            function m(t) {
                f.call(this, t);
                var e, n, i = this,
                    r = i.vars;
                for (n in i._labels = {}, i.autoRemoveChildren = !!r.autoRemoveChildren, i.smoothChildTiming = !!r.smoothChildTiming, i._sortChildren = !0, i._onUpdate = r.onUpdate, r) e = r[n], p(e) && -1 !== e.join("").indexOf("{self}") && (r[n] = i._swapSelfInParams(e));
                p(r.tweens) && i.add(r.tweens, 0, r.align, r.stagger)
            }

            function g(t) {
                var e, n = {};
                for (e in t) n[e] = t[e];
                return n
            }

            function v(t, e, n) {
                var i, r, o = t.cycle;
                for (i in o) r = o[i], t[i] = "function" == typeof r ? r(n, e[n], e) : r[n % r.length];
                delete t.cycle
            }

            function u(t, e, n, i) {
                var r = "immediateRender";
                return r in e || (e[r] = !(n && !1 === n[r] || i)), e
            }

            function _(t) {
                if ("function" == typeof t) return t;
                var d = "object" == typeof t ? t : {
                        each: t
                    },
                    m = d.ease,
                    g = d.from || 0,
                    v = d.base || 0,
                    _ = {},
                    y = isNaN(g),
                    x = d.axis,
                    b = {
                        center: .5,
                        end: 1
                    } [g] || 0;
                return function (t, e, n) {
                    var i, r, o, s, a, l, u, c, h, f = (n || d).length,
                        p = _[f];
                    if (!p) {
                        if (!(h = "auto" === d.grid ? 0 : (d.grid || [1 / 0])[0])) {
                            for (u = -1 / 0; u < (u = n[h++].getBoundingClientRect().left) && h < f;);
                            h--
                        }
                        for (p = _[f] = [], i = y ? Math.min(h, f) * b - .5 : g % h, r = y ? f * b / h - .5 : g / h | 0, c = 1 / (u = 0), l = 0; l < f; l++) o = l % h - i, s = r - (l / h | 0), p[l] = a = x ? Math.abs("y" === x ? s : o) : Math.sqrt(o * o + s * s), u < a && (u = a), a < c && (c = a);
                        p.max = u - c, p.min = c, p.v = f = d.amount || d.each * (f < h ? f : x ? "y" === x ? f / h : h : Math.max(h, f / h)) || 0, p.b = f < 0 ? v - f : v
                    }
                    return f = (p[t] - p.min) / p.max, p.b + (m ? m.getRatio(f) : f) * p.v
                }
            }
            var y = 1e-8,
                t = d._internals,
                e = m._internals = {},
                x = t.isSelector,
                p = t.isArray,
                b = t.lazyTweens,
                w = t.lazyRender,
                s = _gsScope._gsDefine.globals,
                o = e.pauseCallback = function () {},
                n = m.prototype = new f;
            return m.version = "2.1.2", m.distribute = _, n.constructor = m, n.kill()._gc = n._forcingPlayhead = n._hasPause = !1, n.to = function (t, e, n, i) {
                var r = n.repeat && s.TweenMax || d;
                return e ? this.add(new r(t, e, n), i) : this.set(t, n, i)
            }, n.from = function (t, e, n, i) {
                return this.add((n.repeat && s.TweenMax || d).from(t, e, u(0, n)), i)
            }, n.fromTo = function (t, e, n, i, r) {
                var o = i.repeat && s.TweenMax || d;
                return i = u(0, i, n), e ? this.add(o.fromTo(t, e, n, i), r) : this.set(t, i, r)
            }, n.staggerTo = function (t, e, n, i, r, o, s, a) {
                var l, u, c = new m({
                        onComplete: o,
                        onCompleteParams: s,
                        callbackScope: a,
                        smoothChildTiming: this.smoothChildTiming
                    }),
                    h = _(n.stagger || i),
                    f = n.startAt,
                    p = n.cycle;
                for ("string" == typeof t && (t = d.selector(t) || t), x(t = t || []) && (t = function (t) {
                        var e, n = [],
                            i = t.length;
                        for (e = 0; e !== i; n.push(t[e++]));
                        return n
                    }(t)), u = 0; u < t.length; u++) l = g(n), f && (l.startAt = g(f), f.cycle && v(l.startAt, t, u)), p && (v(l, t, u), null != l.duration && (e = l.duration, delete l.duration)), c.to(t[u], e, l, h(u, t[u], t));
                return this.add(c, r)
            }, n.staggerFrom = function (t, e, n, i, r, o, s, a) {
                return n.runBackwards = !0, this.staggerTo(t, e, u(0, n), i, r, o, s, a)
            }, n.staggerFromTo = function (t, e, n, i, r, o, s, a, l) {
                return i.startAt = n, this.staggerTo(t, e, u(0, i, n), r, o, s, a, l)
            }, n.call = function (t, e, n, i) {
                return this.add(d.delayedCall(0, t, e, n), i)
            }, n.set = function (t, e, n) {
                return this.add(new d(t, 0, u(0, e, null, !0)), n)
            }, m.exportRoot = function (t, e) {
                null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                var n, i, r, o, s = new m(t),
                    a = s._timeline;
                for (null == e && (e = !0), a._remove(s, !0), s._startTime = 0, s._rawPrevTime = s._time = s._totalTime = a._time, r = a._first; r;) o = r._next, e && r instanceof d && r.target === r.vars.onComplete || ((i = r._startTime - r._delay) < 0 && (n = 1), s.add(r, i)), r = o;
                return a.add(s, 0), n && s.totalDuration(), s
            }, n.add = function (t, e, n, i) {
                var r, o, s, a, l, u, c = this;
                if ("number" != typeof e && (e = c._parseTimeOrLabel(e, 0, !0, t)), !(t instanceof h)) {
                    if (t instanceof Array || t && t.push && p(t)) {
                        for (n = n || "normal", i = i || 0, r = e, o = t.length, s = 0; s < o; s++) p(a = t[s]) && (a = new m({
                            tweens: a
                        })), c.add(a, r), "string" != typeof a && "function" != typeof a && ("sequence" === n ? r = a._startTime + a.totalDuration() / a._timeScale : "start" === n && (a._startTime -= a.delay())), r += i;
                        return c._uncache(!0)
                    }
                    if ("string" == typeof t) return c.addLabel(t, e);
                    if ("function" != typeof t) throw "Cannot add " + t + " into the timeline; it is not a tween, timeline, function, or string.";
                    t = d.delayedCall(0, t)
                }
                if (f.prototype.add.call(c, t, e), (t._time || !t._duration && t._initted) && (r = (c.rawTime() - t._startTime) * t._timeScale, (!t._duration || 1e-5 < Math.abs(Math.max(0, Math.min(t.totalDuration(), r))) - t._totalTime) && t.render(r, !1, !1)), (c._gc || c._time === c._duration) && !c._paused && c._duration < c.duration())
                    for (u = (l = c).rawTime() > t._startTime; l._timeline;) u && l._timeline.smoothChildTiming ? l.totalTime(l._totalTime, !0) : l._gc && l._enabled(!0, !1), l = l._timeline;
                return c
            }, n.remove = function (t) {
                if (t instanceof h) {
                    this._remove(t, !1);
                    var e = t._timeline = t.vars.useFrames ? h._rootFramesTimeline : h._rootTimeline;
                    return t._startTime = (t._paused ? t._pauseTime : e._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale, this
                }
                if (t instanceof Array || t && t.push && p(t)) {
                    for (var n = t.length; - 1 < --n;) this.remove(t[n]);
                    return this
                }
                return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
            }, n._remove = function (t, e) {
                return f.prototype._remove.call(this, t, e), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, n.append = function (t, e) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
            }, n.insert = n.insertMultiple = function (t, e, n, i) {
                return this.add(t, e || 0, n, i)
            }, n.appendMultiple = function (t, e, n, i) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t), n, i)
            }, n.addLabel = function (t, e) {
                return this._labels[t] = this._parseTimeOrLabel(e), this
            }, n.addPause = function (t, e, n, i) {
                var r = d.delayedCall(0, o, n, i || this);
                return r.vars.onComplete = r.vars.onReverseComplete = e, r.data = "isPause", this._hasPause = !0, this.add(r, t)
            }, n.removeLabel = function (t) {
                return delete this._labels[t], this
            }, n.getLabelTime = function (t) {
                return null != this._labels[t] ? this._labels[t] : -1
            }, n._parseTimeOrLabel = function (t, e, n, i) {
                var r, o;
                if (i instanceof h && i.timeline === this) this.remove(i);
                else if (i && (i instanceof Array || i.push && p(i)))
                    for (o = i.length; - 1 < --o;) i[o] instanceof h && i[o].timeline === this && this.remove(i[o]);
                if (r = "number" != typeof t || e ? 99999999999 < this.duration() ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof e) return this._parseTimeOrLabel(e, n && "number" == typeof t && null == this._labels[e] ? t - r : 0, n);
                if (e = e || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = r);
                else {
                    if (-1 === (o = t.indexOf("="))) return null == this._labels[t] ? n ? this._labels[t] = r + e : e : this._labels[t] + e;
                    e = parseInt(t.charAt(o - 1) + "1", 10) * Number(t.substr(o + 1)), t = 1 < o ? this._parseTimeOrLabel(t.substr(0, o - 1), 0, n) : r
                }
                return Number(t) + e
            }, n.seek = function (t, e) {
                return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
            }, n.stop = function () {
                return this.paused(!0)
            }, n.gotoAndPlay = function (t, e) {
                return this.play(t, e)
            }, n.gotoAndStop = function (t, e) {
                return this.pause(t, e)
            }, n.render = function (t, e, n) {
                this._gc && this._enabled(!0, !1);
                var i, r, o, s, a, l, u, c, h = this,
                    f = h._time,
                    p = h._dirty ? h.totalDuration() : h._totalDuration,
                    d = h._startTime,
                    m = h._timeScale,
                    g = h._paused;
                if (f !== h._time && (t += h._time - f), p - y <= t && 0 <= t) h._totalTime = h._time = p, h._reversed || h._hasPausedChild() || (r = !0, s = "onComplete", a = !!h._timeline.autoRemoveChildren, 0 === h._duration && (t <= 0 && -y <= t || h._rawPrevTime < 0 || h._rawPrevTime === y) && h._rawPrevTime !== t && h._first && (a = !0, h._rawPrevTime > y && (s = "onReverseComplete"))), h._rawPrevTime = h._duration || !e || t || h._rawPrevTime === t ? t : y, t = p + 1e-4;
                else if (t < y)
                    if (h._totalTime = h._time = 0, -y < t && (t = 0), (0 !== f || 0 === h._duration && h._rawPrevTime !== y && (0 < h._rawPrevTime || t < 0 && 0 <= h._rawPrevTime)) && (s = "onReverseComplete", r = h._reversed), t < 0) h._active = !1, h._timeline.autoRemoveChildren && h._reversed ? (a = r = !0, s = "onReverseComplete") : 0 <= h._rawPrevTime && h._first && (a = !0), h._rawPrevTime = t;
                    else {
                        if (h._rawPrevTime = h._duration || !e || t || h._rawPrevTime === t ? t : y, 0 === t && r)
                            for (i = h._first; i && 0 === i._startTime;) i._duration || (r = !1), i = i._next;
                        t = 0, h._initted || (a = !0)
                    }
                else {
                    if (h._hasPause && !h._forcingPlayhead && !e) {
                        if (f <= t)
                            for (i = h._first; i && i._startTime <= t && !l;) i._duration || "isPause" !== i.data || i.ratio || 0 === i._startTime && 0 === h._rawPrevTime || (l = i), i = i._next;
                        else
                            for (i = h._last; i && i._startTime >= t && !l;) i._duration || "isPause" === i.data && 0 < i._rawPrevTime && (l = i), i = i._prev;
                        l && (h._time = h._totalTime = t = l._startTime, c = h._startTime + t / h._timeScale)
                    }
                    h._totalTime = h._time = h._rawPrevTime = t
                }
                if (h._time !== f && h._first || n || a || l) {
                    if (h._initted || (h._initted = !0), h._active || !h._paused && h._time !== f && 0 < t && (h._active = !0), 0 === f && h.vars.onStart && (0 === h._time && h._duration || e || h._callback("onStart")), f <= (u = h._time))
                        for (i = h._first; i && (o = i._next, u === h._time && (!h._paused || g));)(i._active || i._startTime <= u && !i._paused && !i._gc) && (l === i && (h.pause(), h._pauseTime = c), i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)), i = o;
                    else
                        for (i = h._last; i && (o = i._prev, u === h._time && (!h._paused || g));) {
                            if (i._active || i._startTime <= f && !i._paused && !i._gc) {
                                if (l === i) {
                                    for (l = i._prev; l && l.endTime() > h._time;) l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, n), l = l._prev;
                                    l = null, h.pause(), h._pauseTime = c
                                }
                                i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)
                            }
                            i = o
                        }
                    h._onUpdate && (e || (b.length && w(), h._callback("onUpdate"))), s && (h._gc || d !== h._startTime && m === h._timeScale || !(0 === h._time || p >= h.totalDuration()) || (r && (b.length && w(), h._timeline.autoRemoveChildren && h._enabled(!1, !1), h._active = !1), !e && h.vars[s] && h._callback(s)))
                }
            }, n._hasPausedChild = function () {
                for (var t = this._first; t;) {
                    if (t._paused || t instanceof m && t._hasPausedChild()) return !0;
                    t = t._next
                }
                return !1
            }, n.getChildren = function (t, e, n, i) {
                i = i || -9999999999;
                for (var r = [], o = this._first, s = 0; o;) o._startTime < i || (o instanceof d ? !1 !== e && (r[s++] = o) : (!1 !== n && (r[s++] = o), !1 !== t && (s = (r = r.concat(o.getChildren(!0, e, n))).length))), o = o._next;
                return r
            }, n.getTweensOf = function (t, e) {
                var n, i, r = this._gc,
                    o = [],
                    s = 0;
                for (r && this._enabled(!0, !0), i = (n = d.getTweensOf(t)).length; - 1 < --i;)(n[i].timeline === this || e && this._contains(n[i])) && (o[s++] = n[i]);
                return r && this._enabled(!1, !0), o
            }, n.recent = function () {
                return this._recent
            }, n._contains = function (t) {
                for (var e = t.timeline; e;) {
                    if (e === this) return !0;
                    e = e.timeline
                }
                return !1
            }, n.shiftChildren = function (t, e, n) {
                n = n || 0;
                for (var i, r = this._first, o = this._labels; r;) r._startTime >= n && (r._startTime += t), r = r._next;
                if (e)
                    for (i in o) o[i] >= n && (o[i] += t);
                return this._uncache(!0)
            }, n._kill = function (t, e) {
                if (!t && !e) return this._enabled(!1, !1);
                for (var n = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), i = n.length, r = !1; - 1 < --i;) n[i]._kill(t, e) && (r = !0);
                return r
            }, n.clear = function (t) {
                var e = this.getChildren(!1, !0, !0),
                    n = e.length;
                for (this._time = this._totalTime = 0; - 1 < --n;) e[n]._enabled(!1, !1);
                return !1 !== t && (this._labels = {}), this._uncache(!0)
            }, n.invalidate = function () {
                for (var t = this._first; t;) t.invalidate(), t = t._next;
                return h.prototype.invalidate.call(this)
            }, n._enabled = function (t, e) {
                if (t === this._gc)
                    for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                return f.prototype._enabled.call(this, t, e)
            }, n.totalTime = function (t, e, n) {
                this._forcingPlayhead = !0;
                var i = h.prototype.totalTime.apply(this, arguments);
                return this._forcingPlayhead = !1, i
            }, n.duration = function (t) {
                return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
            }, n.totalDuration = function (t) {
                if (arguments.length) return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this;
                if (this._dirty) {
                    for (var e, n, i = 0, r = this, o = r._last, s = 999999999999; o;) e = o._prev, o._dirty && o.totalDuration(), o._startTime > s && r._sortChildren && !o._paused && !r._calculatingDuration ? (r._calculatingDuration = 1, r.add(o, o._startTime - o._delay), r._calculatingDuration = 0) : s = o._startTime, o._startTime < 0 && !o._paused && (i -= o._startTime, r._timeline.smoothChildTiming && (r._startTime += o._startTime / r._timeScale, r._time -= o._startTime, r._totalTime -= o._startTime, r._rawPrevTime -= o._startTime), r.shiftChildren(-o._startTime, !1, -9999999999), s = 0), i < (n = o._startTime + o._totalDuration / o._timeScale) && (i = n), o = e;
                    r._duration = r._totalDuration = i, r._dirty = !1
                }
                return this._totalDuration
            }, n.paused = function (t) {
                if (!1 === t && this._paused)
                    for (var e = this._first; e;) e._startTime === this._time && "isPause" === e.data && (e._rawPrevTime = 0), e = e._next;
                return h.prototype.paused.apply(this, arguments)
            }, n.usesFrames = function () {
                for (var t = this._timeline; t._timeline;) t = t._timeline;
                return t === h._rootFramesTimeline
            }, n.rawTime = function (t) {
                return t && (this._paused || this._repeat && 0 < this.time() && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
            }, m
        }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (e, a, t) {
            function n(t) {
                e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !!this.vars.yoyo, this._dirty = !0
            }
            var O = 1e-8,
                i = a._internals,
                E = i.lazyTweens,
                A = i.lazyRender,
                l = _gsScope._gsDefine.globals,
                u = new t(null, null, 1, 0),
                r = n.prototype = new e;
            return r.constructor = n, r.kill()._gc = !1, n.version = "2.1.2", r.invalidate = function () {
                return this._yoyo = !!this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
            }, r.addCallback = function (t, e, n, i) {
                return this.add(a.delayedCall(0, t, n, i), e)
            }, r.removeCallback = function (t, e) {
                if (t)
                    if (null == e) this._kill(null, t);
                    else
                        for (var n = this.getTweensOf(t, !1), i = n.length, r = this._parseTimeOrLabel(e); - 1 < --i;) n[i]._startTime === r && n[i]._enabled(!1, !1);
                return this
            }, r.removePause = function (t) {
                return this.removeCallback(e._internals.pauseCallback, t)
            }, r.tweenTo = function (t, e) {
                e = e || {};
                var n, i, r, o = {
                        ease: u,
                        useFrames: this.usesFrames(),
                        immediateRender: !1,
                        lazy: !1
                    },
                    s = e.repeat && l.TweenMax || a;
                for (i in e) o[i] = e[i];
                return o.time = this._parseTimeOrLabel(t), n = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, r = new s(this, n, o), o.onStart = function () {
                    r.target.paused(!0), r.vars.time === r.target.time() || n !== r.duration() || r.isFromTo || r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale).render(r.time(), !0, !0), e.onStart && e.onStart.apply(e.onStartScope || e.callbackScope || r, e.onStartParams || [])
                }, r
            }, r.tweenFromTo = function (t, e, n) {
                n = n || {}, t = this._parseTimeOrLabel(t), n.startAt = {
                    onComplete: this.seek,
                    onCompleteParams: [t],
                    callbackScope: this
                }, n.immediateRender = !1 !== n.immediateRender;
                var i = this.tweenTo(e, n);
                return i.isFromTo = 1, i.duration(Math.abs(i.vars.time - t) / this._timeScale || .001)
            }, r.render = function (t, e, n) {
                this._gc && this._enabled(!0, !1);
                var i, r, o, s, a, l, u, c, h, f = this,
                    p = f._time,
                    d = f._dirty ? f.totalDuration() : f._totalDuration,
                    m = f._duration,
                    g = f._totalTime,
                    v = f._startTime,
                    _ = f._timeScale,
                    y = f._rawPrevTime,
                    x = f._paused,
                    b = f._cycle;
                if (p !== f._time && (t += f._time - p), d - O <= t && 0 <= t) f._locked || (f._totalTime = d, f._cycle = f._repeat), f._reversed || f._hasPausedChild() || (r = !0, s = "onComplete", a = !!f._timeline.autoRemoveChildren, 0 === f._duration && (t <= 0 && -O <= t || y < 0 || y === O) && y !== t && f._first && (a = !0, O < y && (s = "onReverseComplete"))), f._rawPrevTime = f._duration || !e || t || f._rawPrevTime === t ? t : O, f._yoyo && 1 & f._cycle ? f._time = t = 0 : t = (f._time = m) + 1e-4;
                else if (t < O)
                    if (f._locked || (f._totalTime = f._cycle = 0), f._time = 0, -O < t && (t = 0), (0 !== p || 0 === m && y !== O && (0 < y || t < 0 && 0 <= y) && !f._locked) && (s = "onReverseComplete", r = f._reversed), t < 0) f._active = !1, f._timeline.autoRemoveChildren && f._reversed ? (a = r = !0, s = "onReverseComplete") : 0 <= y && f._first && (a = !0), f._rawPrevTime = t;
                    else {
                        if (f._rawPrevTime = m || !e || t || f._rawPrevTime === t ? t : O, 0 === t && r)
                            for (i = f._first; i && 0 === i._startTime;) i._duration || (r = !1), i = i._next;
                        t = 0, f._initted || (a = !0)
                    }
                else if (0 === m && y < 0 && (a = !0), f._time = f._rawPrevTime = t, f._locked || (f._totalTime = t, 0 !== f._repeat && (l = m + f._repeatDelay, f._cycle = f._totalTime / l >> 0, f._cycle && f._cycle === f._totalTime / l && g <= t && f._cycle--, f._time = f._totalTime - f._cycle * l, f._yoyo && 1 & f._cycle && (f._time = m - f._time), f._time > m ? t = (f._time = m) + 1e-4 : f._time < 0 ? f._time = t = 0 : t = f._time)), f._hasPause && !f._forcingPlayhead && !e) {
                    if (p <= (t = f._time) || f._repeat && b !== f._cycle)
                        for (i = f._first; i && i._startTime <= t && !u;) i._duration || "isPause" !== i.data || i.ratio || 0 === i._startTime && 0 === f._rawPrevTime || (u = i), i = i._next;
                    else
                        for (i = f._last; i && i._startTime >= t && !u;) i._duration || "isPause" === i.data && 0 < i._rawPrevTime && (u = i), i = i._prev;
                    u && (h = f._startTime + u._startTime / f._timeScale, u._startTime < m && (f._time = f._rawPrevTime = t = u._startTime, f._totalTime = t + f._cycle * (f._totalDuration + f._repeatDelay)))
                }
                if (f._cycle !== b && !f._locked) {
                    var w = f._yoyo && 0 != (1 & b),
                        T = w === (f._yoyo && 0 != (1 & f._cycle)),
                        k = f._totalTime,
                        S = f._cycle,
                        P = f._rawPrevTime,
                        C = f._time;
                    if (f._totalTime = b * m, f._cycle < b ? w = !w : f._totalTime += m, f._time = p, f._rawPrevTime = 0 === m ? y - 1e-4 : y, f._cycle = b, f._locked = !0, p = w ? 0 : m, f.render(p, e, 0 === m), e || f._gc || f.vars.onRepeat && (f._cycle = S, f._locked = !1, f._callback("onRepeat")), p !== f._time) return;
                    if (T && (f._cycle = b, f._locked = !0, p = w ? m + 1e-4 : -1e-4, f.render(p, !0, !1)), f._locked = !1, f._paused && !x) return;
                    f._time = C, f._totalTime = k, f._cycle = S, f._rawPrevTime = P
                }
                if (f._time !== p && f._first || n || a || u) {
                    if (f._initted || (f._initted = !0), f._active || !f._paused && f._totalTime !== g && 0 < t && (f._active = !0), 0 === g && f.vars.onStart && (0 === f._totalTime && f._totalDuration || e || f._callback("onStart")), p <= (c = f._time))
                        for (i = f._first; i && (o = i._next, c === f._time && (!f._paused || x));)(i._active || i._startTime <= f._time && !i._paused && !i._gc) && (u === i && (f.pause(), f._pauseTime = h), i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)), i = o;
                    else
                        for (i = f._last; i && (o = i._prev, c === f._time && (!f._paused || x));) {
                            if (i._active || i._startTime <= p && !i._paused && !i._gc) {
                                if (u === i) {
                                    for (u = i._prev; u && u.endTime() > f._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, n), u = u._prev;
                                    u = null, f.pause(), f._pauseTime = h
                                }
                                i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)
                            }
                            i = o
                        }
                    f._onUpdate && (e || (E.length && A(), f._callback("onUpdate"))), s && (f._locked || f._gc || v !== f._startTime && _ === f._timeScale || !(0 === f._time || d >= f.totalDuration()) || (r && (E.length && A(), f._timeline.autoRemoveChildren && f._enabled(!1, !1), f._active = !1), !e && f.vars[s] && f._callback(s)))
                } else g !== f._totalTime && f._onUpdate && (e || f._callback("onUpdate"))
            }, r.getActive = function (t, e, n) {
                var i, r, o = [],
                    s = this.getChildren(t || null == t, e || null == t, !!n),
                    a = 0,
                    l = s.length;
                for (i = 0; i < l; i++)(r = s[i]).isActive() && (o[a++] = r);
                return o
            }, r.getLabelAfter = function (t) {
                t || 0 !== t && (t = this._time);
                var e, n = this.getLabelsArray(),
                    i = n.length;
                for (e = 0; e < i; e++)
                    if (n[e].time > t) return n[e].name;
                return null
            }, r.getLabelBefore = function (t) {
                null == t && (t = this._time);
                for (var e = this.getLabelsArray(), n = e.length; - 1 < --n;)
                    if (e[n].time < t) return e[n].name;
                return null
            }, r.getLabelsArray = function () {
                var t, e = [],
                    n = 0;
                for (t in this._labels) e[n++] = {
                    time: this._labels[t],
                    name: t
                };
                return e.sort(function (t, e) {
                    return t.time - e.time
                }), e
            }, r.invalidate = function () {
                return this._locked = !1, e.prototype.invalidate.call(this)
            }, r.progress = function (t, e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
            }, r.totalProgress = function (t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
            }, r.totalDuration = function (t) {
                return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
            }, r.time = function (t, e) {
                if (!arguments.length) return this._time;
                this._dirty && this.totalDuration();
                var n = this._duration,
                    i = this._cycle,
                    r = i * (n + this._repeatDelay);
                return n < t && (t = n), this.totalTime(this._yoyo && 1 & i ? n - t + r : this._repeat ? t + r : t, e)
            }, r.repeat = function (t) {
                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, r.repeatDelay = function (t) {
                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, r.yoyo = function (t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, r.currentLabel = function (t) {
                return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + O)
            }, n
        }, !0), T = 180 / Math.PI, b = [], w = [], k = [], v = {}, n = _gsScope._gsDefine.globals, g = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.8",
            API: 2,
            global: !0,
            init: function (t, e, n) {
                this._target = t, e instanceof Array && (e = {
                    values: e
                }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                var i, r, o, s, a, l = e.values || [],
                    u = {},
                    c = l[0],
                    h = e.autoRotate || n.vars.orientToBezier;
                for (i in this._autoRotate = h ? h instanceof Array ? h : [
                        ["x", "y", "rotation", !0 === h ? 0 : Number(h) || 0]
                    ] : null, c) this._props.push(i);
                for (o = this._props.length; - 1 < --o;) i = this._props[o], this._overwriteProps.push(i), r = this._func[i] = "function" == typeof t[i], u[i] = r ? t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]() : parseFloat(t[i]), a || u[i] !== l[0][i] && (a = u);
                if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? p(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : function (t, e, n) {
                        var i, r, o, s, a, l, u, c, h, f, p, d = {},
                            m = "cubic" === (e = e || "soft") ? 3 : 2,
                            g = "soft" === e,
                            v = [];
                        if (g && n && (t = [n].concat(t)), null == t || t.length < 1 + m) throw "invalid Bezier data";
                        for (h in t[0]) v.push(h);
                        for (l = v.length; - 1 < --l;) {
                            for (d[h = v[l]] = a = [], f = 0, c = t.length, u = 0; u < c; u++) i = null == n ? t[u][h] : "string" == typeof (p = t[u][h]) && "=" === p.charAt(1) ? n[h] + Number(p.charAt(0) + p.substr(2)) : Number(p), g && 1 < u && u < c - 1 && (a[f++] = (i + a[f - 2]) / 2), a[f++] = i;
                            for (c = f - m + 1, u = f = 0; u < c; u += m) i = a[u], r = a[u + 1], o = a[u + 2], s = 2 == m ? 0 : a[u + 3], a[f++] = p = 3 == m ? new _(i, r, o, s) : new _(i, (2 * r + i) / 3, (2 * r + o) / 3, o);
                            a.length = f
                        }
                        return d
                    }(l, e.type, u), this._segCount = this._beziers[i].length, this._timeRes) {
                    var f = function (t, e) {
                        var n, i, r, o, s = [],
                            a = [],
                            l = 0,
                            u = 0,
                            c = (e = e >> 0 || 6) - 1,
                            h = [],
                            f = [];
                        for (n in t) d(t[n], s, e);
                        for (r = s.length, i = 0; i < r; i++) l += Math.sqrt(s[i]), f[o = i % e] = l, o === c && (u += l, h[o = i / e >> 0] = f, a[o] = u, l = 0, f = []);
                        return {
                            length: u,
                            lengths: a,
                            segments: h
                        }
                    }(this._beziers, this._timeRes);
                    this._length = f.length, this._lengths = f.lengths, this._segments = f.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                }
                if (h = this._autoRotate)
                    for (this._initialRotations = [], h[0] instanceof Array || (this._autoRotate = h = [h]), o = h.length; - 1 < --o;) {
                        for (s = 0; s < 3; s++) i = h[o][s], this._func[i] = "function" == typeof t[i] && t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)];
                        i = h[o][2], this._initialRotations[o] = (this._func[i] ? this._func[i].call(this._target) : this._target[i]) || 0, this._overwriteProps.push(i)
                    }
                return this._startRatio = n.vars.runBackwards ? 1 : 0, !0
            },
            set: function (t) {
                var e, n, i, r, o, s, a, l, u, c, h = this._segCount,
                    f = this._func,
                    p = this._target,
                    d = t !== this._startRatio;
                if (this._timeRes) {
                    if (u = this._lengths, c = this._curSeg, t *= this._length, i = this._li, t > this._l2 && i < h - 1) {
                        for (l = h - 1; i < l && (this._l2 = u[++i]) <= t;);
                        this._l1 = u[i - 1], this._li = i, this._curSeg = c = this._segments[i], this._s2 = c[this._s1 = this._si = 0]
                    } else if (t < this._l1 && 0 < i) {
                        for (; 0 < i && (this._l1 = u[--i]) >= t;);
                        0 === i && t < this._l1 ? this._l1 = 0 : i++, this._l2 = u[i], this._li = i, this._curSeg = c = this._segments[i], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                    }
                    if (e = i, t -= this._l1, i = this._si, t > this._s2 && i < c.length - 1) {
                        for (l = c.length - 1; i < l && (this._s2 = c[++i]) <= t;);
                        this._s1 = c[i - 1], this._si = i
                    } else if (t < this._s1 && 0 < i) {
                        for (; 0 < i && (this._s1 = c[--i]) >= t;);
                        0 === i && t < this._s1 ? this._s1 = 0 : i++, this._s2 = c[i], this._si = i
                    }
                    s = (i + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                } else s = (t - (e = t < 0 ? 0 : 1 <= t ? h - 1 : h * t >> 0) * (1 / h)) * h;
                for (n = 1 - s, i = this._props.length; - 1 < --i;) r = this._props[i], a = (s * s * (o = this._beziers[r][e]).da + 3 * n * (s * o.ca + n * o.ba)) * s + o.a, this._mod[r] && (a = this._mod[r](a, p)), f[r] ? p[r](a) : p[r] = a;
                if (this._autoRotate) {
                    var m, g, v, _, y, x, b, w = this._autoRotate;
                    for (i = w.length; - 1 < --i;) r = w[i][2], x = w[i][3] || 0, b = !0 === w[i][4] ? 1 : T, o = this._beziers[w[i][0]], m = this._beziers[w[i][1]], o && m && (o = o[e], m = m[e], g = o.a + (o.b - o.a) * s, g += ((_ = o.b + (o.c - o.b) * s) - g) * s, _ += (o.c + (o.d - o.c) * s - _) * s, v = m.a + (m.b - m.a) * s, v += ((y = m.b + (m.c - m.b) * s) - v) * s, y += (m.c + (m.d - m.c) * s - y) * s, a = d ? Math.atan2(y - v, _ - g) * b + x : this._initialRotations[i], this._mod[r] && (a = this._mod[r](a, p)), f[r] ? p[r](a) : p[r] = a)
                }
            }
        }), i = g.prototype, g.bezierThrough = p, g.cubicToQuadratic = S, g._autoCSS = !0, g.quadraticToCubic = function (t, e, n) {
            return new _(t, (2 * e + t) / 3, (2 * e + n) / 3, n)
        }, g._cssRegister = function () {
            var t = n.CSSPlugin;
            if (t) {
                var e = t._internals,
                    p = e._parseToProxy,
                    d = e._setPluginRatio,
                    m = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {
                    parser: function (t, e, n, i, r, o) {
                        e instanceof Array && (e = {
                            values: e
                        }), o = new g;
                        var s, a, l, u = e.values,
                            c = u.length - 1,
                            h = [],
                            f = {};
                        if (c < 0) return r;
                        for (s = 0; s <= c; s++) l = p(t, u[s], i, r, o, c !== s), h[s] = l.end;
                        for (a in e) f[a] = e[a];
                        return f.values = h, (r = new m(t, "bezier", 0, 0, l.pt, 2)).data = l, r.plugin = o, r.setRatio = d, 0 === f.autoRotate && (f.autoRotate = !0), !f.autoRotate || f.autoRotate instanceof Array || (s = !0 === f.autoRotate ? 0 : Number(f.autoRotate), f.autoRotate = null != l.end.left ? [
                            ["left", "top", "rotation", s, !1]
                        ] : null != l.end.x && [
                            ["x", "y", "rotation", s, !1]
                        ]), f.autoRotate && (i._transform || i._enableTransforms(!1), l.autoRotate = i._target._gsTransform, l.proxy.rotation = l.autoRotate.rotation || 0, i._overwriteProps.push("rotation")), o._onInitTween(l.proxy, f, i._tween), r
                    }
                })
            }
        }, i._mod = function (t) {
            for (var e, n = this._overwriteProps, i = n.length; - 1 < --i;)(e = t[n[i]]) && "function" == typeof e && (this._mod[n[i]] = e)
        }, i._kill = function (t) {
            var e, n, i = this._props;
            for (e in this._beziers)
                if (e in t)
                    for (delete this._beziers[e], delete this._func[e], n = i.length; - 1 < --n;) i[n] === e && i.splice(n, 1);
            if (i = this._autoRotate)
                for (n = i.length; - 1 < --n;) t[i[n][2]] && i.splice(n, 1);
            return this._super._kill.call(this, t)
        }, _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (o, B) {
            var d, k, S, m, z = function () {
                    o.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = z.prototype.setRatio
                },
                u = _gsScope._gsDefine.globals,
                g = {},
                t = z.prototype = new o("css");
            (t.constructor = z).version = "2.1.0", z.API = 2, z.defaultTransformPerspective = 0, z.defaultSkewType = "compensated", z.defaultSmoothOrigin = !0, t = "px", z.suffixMap = {
                top: t,
                right: t,
                bottom: t,
                left: t,
                width: t,
                height: t,
                fontSize: t,
                padding: t,
                margin: t,
                perspective: t,
                lineHeight: ""
            };

            function s(t, e) {
                return e.toUpperCase()
            }

            function a(t, e) {
                return e && et.createElementNS ? et.createElementNS(e, t) : et.createElement(t)
            }

            function l(t) {
                return q.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            }

            function v(t) {
                _gsScope.console && console.log(t)
            }

            function P(t, e) {
                var n, i, r = (e = e || nt).style;
                if (void 0 !== r[t]) return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], i = 5; - 1 < --i && void 0 === r[n[i] + t];);
                return 0 <= i ? (at = "-" + (lt = 3 === i ? "ms" : n[i]).toLowerCase() + "-", lt + t) : null
            }

            function _(t) {
                return ut.getComputedStyle(t)
            }

            function y(t, e) {
                var n, i, r, o = {};
                if (e = e || _(t))
                    if (n = e.length)
                        for (; - 1 < --n;) - 1 !== (r = e[n]).indexOf("-transform") && qt !== r || (o[r.replace(Y, s)] = e.getPropertyValue(r));
                    else
                        for (n in e) - 1 !== n.indexOf("Transform") && It !== n || (o[n] = e[n]);
                else if (e = t.currentStyle || t.style)
                    for (n in e) "string" == typeof n && void 0 === o[n] && (o[n.replace(Y, s)] = e[n]);
                return st || (o.opacity = l(t)), i = Gt(t, e, !1), o.rotation = i.rotation, o.skewX = i.skewX, o.scaleX = i.scaleX, o.scaleY = i.scaleY, o.x = i.x, o.y = i.y, zt && (o.z = i.z, o.rotationX = i.rotationX, o.rotationY = i.rotationY, o.scaleZ = i.scaleZ), o.filters && delete o.filters, o
            }

            function x(t, e, n, i, r) {
                var o, s, a, l = {},
                    u = t.style;
                for (s in n) "cssText" !== s && "length" !== s && isNaN(s) && (e[s] !== (o = n[s]) || r && r[s]) && -1 === s.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[s] || "" === e[s].replace(c, "") ? o : 0 : ft(t, s), void 0 !== u[s] && (a = new wt(u, s, u[s], a)));
                if (i)
                    for (s in i) "className" !== s && (l[s] = i[s]);
                return {
                    difs: l,
                    firstMPT: a
                }
            }

            function b(t, e, n) {
                if ("svg" === (t.nodeName + "").toLowerCase()) return (n || _(t))[e] || 0;
                if (t.getCTM && $t(t)) return t.getBBox()[e] || 0;
                var i = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                    r = pt[e],
                    o = r.length;
                for (n = n || _(t); - 1 < --o;) i -= parseFloat(ct(t, "padding" + r[o], n, !0)) || 0, i -= parseFloat(ct(t, "border" + r[o] + "Width", n, !0)) || 0;
                return i
            }

            function C(t, e) {
                return "function" == typeof t && (t = t(N, R)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
            }

            function O(t, e) {
                "function" == typeof t && (t = t(N, R));
                var n = "string" == typeof t && "=" === t.charAt(1);
                return "string" == typeof t && "v" === t.charAt(t.length - 2) && (t = (n ? t.substr(0, 2) : 0) + window["inner" + ("vh" === t.substr(-2) ? "Height" : "Width")] * (parseFloat(n ? t.substr(2) : t) / 100)), null == t ? e : n ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
            }

            function E(t, e, n, i) {
                var r, o, s, a, l;
                return "function" == typeof t && (t = t(N, R)), (a = null == t ? e : "number" == typeof t ? t : (r = 360, o = t.split("_"), s = ((l = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === t.indexOf("rad") ? 1 : J) - (l ? 0 : e), o.length && (i && (i[n] = e + s), -1 !== t.indexOf("short") && ((s %= r) !== s % 180 && (s = s < 0 ? s + r : s - r)), -1 !== t.indexOf("_cw") && s < 0 ? s = (s + 3599999999640) % r - (s / r | 0) * r : -1 !== t.indexOf("ccw") && 0 < s && (s = (s - 3599999999640) % r - (s / r | 0) * r)), e + s)) < 1e-6 && -1e-6 < a && (a = 0), a
            }

            function p(t, e, n) {
                return 255 * (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) + .5 | 0
            }

            function i(t, e) {
                var n, i, r, o = t.match(_t) || [],
                    s = 0,
                    a = "";
                if (!o.length) return t;
                for (n = 0; n < o.length; n++) i = o[n], s += (r = t.substr(s, t.indexOf(i, s) - s)).length + i.length, 3 === (i = vt(i, e)).length && i.push(1), a += r + (e ? "hsla(" + i[0] + "," + i[1] + "%," + i[2] + "%," + i[3] : "rgba(" + i.join(",")) + ")";
                return a + t.substr(s)
            }
            var A, w, T, X, D, M, R, N, e, n, L = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                j = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                F = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                c = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                I = /(?:\d|\-|\+|=|#|\.)*/g,
                q = /opacity *= *([^)]*)/i,
                H = /opacity:([^;]*)/i,
                h = /alpha\(opacity *=.+?\)/i,
                W = /^(rgb|hsl)/,
                f = /([A-Z])/g,
                Y = /-([a-z])/gi,
                U = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                $ = /(?:Left|Right|Width)/i,
                V = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                K = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                G = /,(?=[^\)]*(?:\(|$))/gi,
                Q = /[\s,\(]/i,
                Z = Math.PI / 180,
                J = 180 / Math.PI,
                tt = {},
                r = {
                    style: {}
                },
                et = _gsScope.document || {
                    createElement: function () {
                        return r
                    }
                },
                nt = a("div"),
                it = a("img"),
                rt = z._internals = {
                    _specialProps: g
                },
                ot = (_gsScope.navigator || {}).userAgent || "",
                st = (e = ot.indexOf("Android"), n = a("a"), T = -1 !== ot.indexOf("Safari") && -1 === ot.indexOf("Chrome") && (-1 === e || 3 < parseFloat(ot.substr(e + 8, 2))), D = T && parseFloat(ot.substr(ot.indexOf("Version/") + 8, 2)) < 6, X = -1 !== ot.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(ot) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(ot)) && (M = parseFloat(RegExp.$1)), !!n && (n.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(n.style.opacity))),
                at = "",
                lt = "",
                ut = "undefined" != typeof window ? window : et.defaultView || {
                    getComputedStyle: function () {}
                },
                ct = z.getStyle = function (t, e, n, i, r) {
                    var o;
                    return st || "opacity" !== e ? (!i && t.style[e] ? o = t.style[e] : (n = n || _(t)) ? o = n[e] || n.getPropertyValue(e) || n.getPropertyValue(e.replace(f, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]), null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : l(t)
                },
                ht = rt.convertToPixels = function (t, e, n, i, r) {
                    if ("px" === i || !i && "lineHeight" !== e) return n;
                    if ("auto" === i || !n) return 0;
                    var o, s, a, l = $.test(e),
                        u = t,
                        c = nt.style,
                        h = n < 0,
                        f = 1 === n;
                    if (h && (n = -n), f && (n *= 100), "lineHeight" !== e || i)
                        if ("%" === i && -1 !== e.indexOf("border")) o = n / 100 * (l ? t.clientWidth : t.clientHeight);
                        else {
                            if (c.cssText = "border:0 solid red;position:" + ct(t, "position") + ";line-height:0;", "%" !== i && u.appendChild && "v" !== i.charAt(0) && "rem" !== i) c[l ? "borderLeftWidth" : "borderTopWidth"] = n + i;
                            else {
                                if (u = t.parentNode || et.body, -1 !== ct(u, "display").indexOf("flex") && (c.position = "absolute"), s = u._gsCache, a = B.ticker.frame, s && l && s.time === a) return s.width * n / 100;
                                c[l ? "width" : "height"] = n + i
                            }
                            u.appendChild(nt), o = parseFloat(nt[l ? "offsetWidth" : "offsetHeight"]), u.removeChild(nt), l && "%" === i && !1 !== z.cacheWidths && ((s = u._gsCache = u._gsCache || {}).time = a, s.width = o / n * 100), 0 !== o || r || (o = ht(t, e, n, i, !0))
                        }
                    else s = _(t).lineHeight, t.style.lineHeight = n, o = parseFloat(_(t).lineHeight), t.style.lineHeight = s;
                    return f && (o /= 100), h ? -o : o
                },
                ft = rt.calculateOffset = function (t, e, n) {
                    if ("absolute" !== ct(t, "position", n)) return 0;
                    var i = "left" === e ? "Left" : "Top",
                        r = ct(t, "margin" + i, n);
                    return t["offset" + i] - (ht(t, e, parseFloat(r), r.replace(I, "")) || 0)
                },
                pt = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                dt = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                mt = function (t, e) {
                    if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                    null != t && "" !== t || (t = "0 0");
                    var n, i = t.split(" "),
                        r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                        o = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                    if (3 < i.length && !e) {
                        for (i = t.split(", ").join(",").split(","), t = [], n = 0; n < i.length; n++) t.push(mt(i[n]));
                        return t.join(",")
                    }
                    return null == o ? o = "center" === r ? "50%" : "0" : "center" === o && (o = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + o + (2 < i.length ? " " + i[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== o.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === o.charAt(1), e.ox = parseFloat(r.replace(c, "")), e.oy = parseFloat(o.replace(c, "")), e.v = t), e || t
                },
                gt = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                vt = z.parseColor = function (t, e) {
                    var n, i, r, o, s, a, l, u, c, h, f;
                    if (t)
                        if ("number" == typeof t) n = [t >> 16, t >> 8 & 255, 255 & t];
                        else {
                            if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), gt[t]) n = gt[t];
                            else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (i = t.charAt(1)) + i + (r = t.charAt(2)) + r + (o = t.charAt(3)) + o), n = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                            else if ("hsl" === t.substr(0, 3))
                                if (n = f = t.match(L), e) {
                                    if (-1 !== t.indexOf("=")) return t.match(j)
                                } else s = Number(n[0]) % 360 / 360, a = Number(n[1]) / 100, i = 2 * (l = Number(n[2]) / 100) - (r = l <= .5 ? l * (a + 1) : l + a - l * a), 3 < n.length && (n[3] = Number(n[3])), n[0] = p(s + 1 / 3, i, r), n[1] = p(s, i, r), n[2] = p(s - 1 / 3, i, r);
                            else n = t.match(L) || gt.transparent;
                            n[0] = Number(n[0]), n[1] = Number(n[1]), n[2] = Number(n[2]), 3 < n.length && (n[3] = Number(n[3]))
                        }
                    else n = gt.black;
                    return e && !f && (i = n[0] / 255, r = n[1] / 255, o = n[2] / 255, l = ((u = Math.max(i, r, o)) + (c = Math.min(i, r, o))) / 2, u === c ? s = a = 0 : (h = u - c, a = .5 < l ? h / (2 - u - c) : h / (u + c), s = u === i ? (r - o) / h + (r < o ? 6 : 0) : u === r ? (o - i) / h + 2 : (i - r) / h + 4, s *= 60), n[0] = s + .5 | 0, n[1] = 100 * a + .5 | 0, n[2] = 100 * l + .5 | 0), n
                },
                _t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (t in gt) _t += "|" + t + "\\b";
            _t = new RegExp(_t + ")", "gi"), z.colorStringFilter = function (t) {
                var e, n = t[0] + " " + t[1];
                _t.test(n) && (e = -1 !== n.indexOf("hsl(") || -1 !== n.indexOf("hsla("), t[0] = i(t[0], e), t[1] = i(t[1], e)), _t.lastIndex = 0
            }, B.defaultStringFilter || (B.defaultStringFilter = z.colorStringFilter);

            function yt(t, e, o, s) {
                if (null == t) return function (t) {
                    return t
                };
                var a, l = e ? (t.match(_t) || [""])[0] : "",
                    u = t.split(l).join("").match(F) || [],
                    c = t.substr(0, t.indexOf(u[0])),
                    h = ")" === t.charAt(t.length - 1) ? ")" : "",
                    f = -1 !== t.indexOf(" ") ? " " : ",",
                    p = u.length,
                    d = 0 < p ? u[0].replace(L, "") : "";
                return p ? a = e ? function (t) {
                    var e, n, i, r;
                    if ("number" == typeof t) t += d;
                    else if (s && G.test(t)) {
                        for (r = t.replace(G, "|").split("|"), i = 0; i < r.length; i++) r[i] = a(r[i]);
                        return r.join(",")
                    }
                    if (e = (t.match(_t) || [l])[0], i = (n = t.split(e).join("").match(F) || []).length, p > i--)
                        for (; ++i < p;) n[i] = o ? n[(i - 1) / 2 | 0] : u[i];
                    return c + n.join(f) + f + e + h + (-1 !== t.indexOf("inset") ? " inset" : "")
                } : function (t) {
                    var e, n, i;
                    if ("number" == typeof t) t += d;
                    else if (s && G.test(t)) {
                        for (n = t.replace(G, "|").split("|"), i = 0; i < n.length; i++) n[i] = a(n[i]);
                        return n.join(",")
                    }
                    if (i = (e = t.match(F) || []).length, p > i--)
                        for (; ++i < p;) e[i] = o ? e[(i - 1) / 2 | 0] : u[i];
                    return c + e.join(f) + h
                } : function (t) {
                    return t
                }
            }

            function xt(u) {
                return u = u.split(","),
                    function (t, e, n, i, r, o, s) {
                        var a, l = (e + "").split(" ");
                        for (s = {}, a = 0; a < 4; a++) s[u[a]] = l[a] = l[a] || l[(a - 1) / 2 >> 0];
                        return i.parse(t, s, r, o)
                    }
            }

            function bt(t, e, n, i, r, o) {
                var s = new Tt(t, e, n, i - n, r, -1, o);
                return s.b = n, s.e = s.xs0 = i, s
            }
            var wt = (rt._setPluginRatio = function (t) {
                    this.plugin.setRatio(t);
                    for (var e, n, i, r, o, s = this.data, a = s.proxy, l = s.firstMPT; l;) e = a[l.v], l.r ? e = l.r(e) : e < 1e-6 && -1e-6 < e && (e = 0), l.t[l.p] = e, l = l._next;
                    if (s.autoRotate && (s.autoRotate.rotation = s.mod ? s.mod.call(this._tween, a.rotation, this.t, this._tween) : a.rotation), 1 === t || 0 === t)
                        for (l = s.firstMPT, o = 1 === t ? "e" : "b"; l;) {
                            if ((n = l.t).type) {
                                if (1 === n.type) {
                                    for (r = n.xs0 + n.s + n.xs1, i = 1; i < n.l; i++) r += n["xn" + i] + n["xs" + (i + 1)];
                                    n[o] = r
                                }
                            } else n[o] = n.s + n.xs0;
                            l = l._next
                        }
                }, function (t, e, n, i, r) {
                    this.t = t, this.p = e, this.v = n, this.r = r, i && ((i._prev = this)._next = i)
                }),
                Tt = (rt._parseToProxy = function (t, e, n, i, r, o) {
                    var s, a, l, u, c, h = i,
                        f = {},
                        p = {},
                        d = n._transform,
                        m = tt;
                    for (n._transform = null, tt = e, i = c = n.parse(t, e, i, r), tt = m, o && (n._transform = d, h && (h._prev = null, h._prev && (h._prev._next = null))); i && i !== h;) {
                        if (i.type <= 1 && (p[a = i.p] = i.s + i.c, f[a] = i.s, o || (u = new wt(i, "s", a, u, i.r), i.c = 0), 1 === i.type))
                            for (s = i.l; 0 < --s;) l = "xn" + s, p[a = i.p + "_" + l] = i.data[l], f[a] = i[l], o || (u = new wt(i, l, a, u, i.rxp[l]));
                        i = i._next
                    }
                    return {
                        proxy: f,
                        end: p,
                        firstMPT: u,
                        pt: c
                    }
                }, rt.CSSPropTween = function (t, e, n, i, r, o, s, a, l, u, c) {
                    this.t = t, this.p = e, this.s = n, this.c = i, this.n = s || e, t instanceof Tt || m.push(this.n), this.r = a ? "function" == typeof a ? a : Math.round : a, this.type = o || 0, l && (this.pr = l, d = !0), this.b = void 0 === u ? n : u, this.e = void 0 === c ? n + i : c, r && ((this._next = r)._prev = this)
                }),
                kt = z.parseComplex = function (t, e, n, i, r, o, s, a, l, u) {
                    n = n || o || "", "function" == typeof i && (i = i(N, R)), s = new Tt(t, e, 0, 0, s, u ? 2 : 1, null, !1, a, n, i), i += "", r && _t.test(i + n) && (i = [n, i], z.colorStringFilter(i), n = i[0], i = i[1]);
                    var c, h, f, p, d, m, g, v, _, y, x, b, w, T = n.split(", ").join(",").split(" "),
                        k = i.split(", ").join(",").split(" "),
                        S = T.length,
                        P = !1 !== A;
                    for (-1 === i.indexOf(",") && -1 === n.indexOf(",") || (k = -1 !== (i + n).indexOf("rgb") || -1 !== (i + n).indexOf("hsl") ? (T = T.join(" ").replace(G, ", ").split(" "), k.join(" ").replace(G, ", ").split(" ")) : (T = T.join(" ").split(",").join(", ").split(" "), k.join(" ").split(",").join(", ").split(" ")), S = T.length), S !== k.length && (S = (T = (o || "").split(" ")).length), s.plugin = l, s.setRatio = u, c = _t.lastIndex = 0; c < S; c++)
                        if (p = T[c], d = k[c] + "", (v = parseFloat(p)) || 0 === v) s.appendXtra("", v, C(d, v), d.replace(j, ""), P && -1 !== d.indexOf("px") && Math.round, !0);
                        else if (r && _t.test(p)) b = ")" + ((b = d.indexOf(")") + 1) ? d.substr(b) : ""), w = -1 !== d.indexOf("hsl") && st, y = d, p = vt(p, w), d = vt(d, w), (_ = 6 < p.length + d.length) && !st && 0 === d[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent", s.e = s.e.split(k[c]).join("transparent")) : (st || (_ = !1), w ? s.appendXtra(y.substr(0, y.indexOf("hsl")) + (_ ? "hsla(" : "hsl("), p[0], C(d[0], p[0]), ",", !1, !0).appendXtra("", p[1], C(d[1], p[1]), "%,", !1).appendXtra("", p[2], C(d[2], p[2]), _ ? "%," : "%" + b, !1) : s.appendXtra(y.substr(0, y.indexOf("rgb")) + (_ ? "rgba(" : "rgb("), p[0], d[0] - p[0], ",", Math.round, !0).appendXtra("", p[1], d[1] - p[1], ",", Math.round).appendXtra("", p[2], d[2] - p[2], _ ? "," : b, Math.round), _ && (p = p.length < 4 ? 1 : p[3], s.appendXtra("", p, (d.length < 4 ? 1 : d[3]) - p, b, !1))), _t.lastIndex = 0;
                    else if (m = p.match(L)) {
                        if (!(g = d.match(j)) || g.length !== m.length) return s;
                        for (h = f = 0; h < m.length; h++) x = m[h], y = p.indexOf(x, f), s.appendXtra(p.substr(f, y - f), Number(x), C(g[h], x), "", P && "px" === p.substr(y + x.length, 2) && Math.round, 0 === h), f = y + x.length;
                        s["xs" + s.l] += p.substr(f)
                    } else s["xs" + s.l] += s.l || s["xs" + s.l] ? " " + d : d;
                    if (-1 !== i.indexOf("=") && s.data) {
                        for (b = s.xs0 + s.data.s, c = 1; c < s.l; c++) b += s["xs" + c] + s.data["xn" + c];
                        s.e = b + s["xs" + c]
                    }
                    return s.l || (s.type = -1, s.xs0 = s.e), s.xfirst || s
                },
                St = 9;
            for ((t = Tt.prototype).l = t.pr = 0; 0 < --St;) t["xn" + St] = 0, t["xs" + St] = "";
            t.xs0 = "", t._next = t._prev = t.xfirst = t.data = t.plugin = t.setRatio = t.rxp = null, t.appendXtra = function (t, e, n, i, r, o) {
                var s = this,
                    a = s.l;
                return s["xs" + a] += o && (a || s["xs" + a]) ? " " + t : t || "", n || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = i || "", 0 < a ? (s.data["xn" + a] = e + n, s.rxp["xn" + a] = r, s["xn" + a] = e, s.plugin || (s.xfirst = new Tt(s, "xn" + a, e, n, s.xfirst || s, 0, s.n, r, s.pr), s.xfirst.xs0 = 0)) : (s.data = {
                    s: e + n
                }, s.rxp = {}, s.s = e, s.c = n, s.r = r)) : s["xs" + a] += e + (i || ""), s
            };

            function Pt(t, e) {
                e = e || {}, this.p = e.prefix && P(t) || t, g[t] = g[this.p] = this, this.format = e.formatter || yt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.allowFunc = e.allowFunc, this.pr = e.priority || 0
            }
            var Ct = rt._registerComplexSpecialProp = function (t, e, n) {
                    "object" != typeof e && (e = {
                        parser: n
                    });
                    var i, r = t.split(","),
                        o = e.defaultValue;
                    for (n = n || [o], i = 0; i < r.length; i++) e.prefix = 0 === i && e.prefix, e.defaultValue = n[i] || o, new Pt(r[i], e)
                },
                Ot = rt._registerPluginProp = function (t) {
                    if (!g[t]) {
                        var l = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                        Ct(t, {
                            parser: function (t, e, n, i, r, o, s) {
                                var a = u.com.greensock.plugins[l];
                                return a ? (a._cssRegister(), g[n].parse(t, e, n, i, r, o, s)) : (v("Error: " + l + " js file not loaded."), r)
                            }
                        })
                    }
                };
            (t = Pt.prototype).parseComplex = function (t, e, n, i, r, o) {
                var s, a, l, u, c, h, f = this.keyword;
                if (this.multi && (G.test(n) || G.test(e) ? (a = e.replace(G, "|").split("|"), l = n.replace(G, "|").split("|")) : f && (a = [e], l = [n])), l) {
                    for (u = l.length > a.length ? l.length : a.length, s = 0; s < u; s++) e = a[s] = a[s] || this.dflt, n = l[s] = l[s] || this.dflt, f && ((c = e.indexOf(f)) !== (h = n.indexOf(f)) && (-1 === h ? a[s] = a[s].split(f).join("") : -1 === c && (a[s] += " " + f)));
                    e = a.join(", "), n = l.join(", ")
                }
                return kt(t, this.p, e, n, this.clrs, this.dflt, i, this.pr, r, o)
            }, t.parse = function (t, e, n, i, r, o, s) {
                return this.parseComplex(t.style, this.format(ct(t, this.p, S, !1, this.dflt)), this.format(e), r, o)
            }, z.registerSpecialProp = function (t, l, u) {
                Ct(t, {
                    parser: function (t, e, n, i, r, o, s) {
                        var a = new Tt(t, n, 0, 0, r, 2, n, !1, u);
                        return a.plugin = o, a.setRatio = l(t, e, i._tween, n), a
                    },
                    priority: u
                })
            }, z.useSVGTransformAttr = !0;

            function Et(t, e, n) {
                var i, r = et.createElementNS("http://www.w3.org/2000/svg", t),
                    o = /([a-z])([A-Z])/g;
                for (i in n) r.setAttributeNS(null, i.replace(o, "$1-$2").toLowerCase(), n[i]);
                return e.appendChild(r), r
            }

            function At(t, e, n, i, r, o) {
                var s, a, l, u, c, h, f, p, d, m, g, v, _, y, x = t._gsTransform,
                    b = Kt(t, !0);
                x && (_ = x.xOrigin, y = x.yOrigin), (!i || (s = i.split(" ")).length < 2) && (0 === (f = t.getBBox()).x && 0 === f.y && f.width + f.height === 0 && (f = {
                    x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                    y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                    width: 0,
                    height: 0
                }), s = [(-1 !== (e = mt(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * f.width : parseFloat(e[0])) + f.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * f.height : parseFloat(e[1])) + f.y]), n.xOrigin = u = parseFloat(s[0]), n.yOrigin = c = parseFloat(s[1]), i && b !== Vt && (h = b[0], f = b[1], p = b[2], d = b[3], m = b[4], g = b[5], (v = h * d - f * p) && (a = u * (d / v) + c * (-p / v) + (p * g - d * m) / v, l = u * (-f / v) + c * (h / v) - (h * g - f * m) / v, u = n.xOrigin = s[0] = a, c = n.yOrigin = s[1] = l)), x && (o && (n.xOffset = x.xOffset, n.yOffset = x.yOffset, x = n), r || !1 !== r && !1 !== z.defaultSmoothOrigin ? (a = u - _, l = c - y, x.xOffset += a * b[0] + l * b[2] - a, x.yOffset += a * b[1] + l * b[3] - l) : x.xOffset = x.yOffset = 0), o || t.setAttribute("data-svg-origin", s.join(" "))
            }

            function Dt(t) {
                var e, n, i = this.data,
                    r = -i.rotation * Z,
                    o = r + i.skewX * Z,
                    s = 1e5,
                    a = (Math.cos(r) * i.scaleX * s | 0) / s,
                    l = (Math.sin(r) * i.scaleX * s | 0) / s,
                    u = (Math.sin(o) * -i.scaleY * s | 0) / s,
                    c = (Math.cos(o) * i.scaleY * s | 0) / s,
                    h = this.t.style,
                    f = this.t.currentStyle;
                if (f) {
                    n = l, l = -u, u = -n, e = f.filter, h.filter = "";
                    var p, d, m = this.t.offsetWidth,
                        g = this.t.offsetHeight,
                        v = "absolute" !== f.position,
                        _ = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + u + ", M22=" + c,
                        y = i.x + m * i.xPercent / 100,
                        x = i.y + g * i.yPercent / 100;
                    if (null != i.ox && (y += (p = (i.oxp ? m * i.ox * .01 : i.ox) - m / 2) - (p * a + (d = (i.oyp ? g * i.oy * .01 : i.oy) - g / 2) * l), x += d - (p * u + d * c)), v ? _ += ", Dx=" + ((p = m / 2) - (p * a + (d = g / 2) * l) + y) + ", Dy=" + (d - (p * u + d * c) + x) + ")" : _ += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? h.filter = e.replace(K, _) : h.filter = _ + " " + e, 0 !== t && 1 !== t || 1 != a || 0 !== l || 0 !== u || 1 != c || (v && -1 === _.indexOf("Dx=0, Dy=0") || q.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && h.removeAttribute("filter")), !v) {
                        var b, w, T, k = M < 8 ? 1 : -1;
                        for (p = i.ieOffsetX || 0, d = i.ieOffsetY || 0, i.ieOffsetX = Math.round((m - ((a < 0 ? -a : a) * m + (l < 0 ? -l : l) * g)) / 2 + y), i.ieOffsetY = Math.round((g - ((c < 0 ? -c : c) * g + (u < 0 ? -u : u) * m)) / 2 + x), St = 0; St < 4; St++) T = (n = -1 !== (b = f[w = dt[St]]).indexOf("px") ? parseFloat(b) : ht(this.t, w, parseFloat(b), b.replace(I, "")) || 0) !== i[w] ? St < 2 ? -i.ieOffsetX : -i.ieOffsetY : St < 2 ? p - i.ieOffsetX : d - i.ieOffsetY, h[w] = (i[w] = Math.round(n - T * (0 === St || 2 === St ? 1 : k))) + "px"
                    }
                }
            }
            var Mt, Rt, Nt, Lt, jt, Ft = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                It = P("transform"),
                qt = at + "transform",
                Bt = P("transformOrigin"),
                zt = null !== P("perspective"),
                Xt = rt.Transform = function () {
                    this.perspective = parseFloat(z.defaultTransformPerspective) || 0, this.force3D = !(!1 === z.defaultForce3D || !zt) && (z.defaultForce3D || "auto")
                },
                Ht = _gsScope.SVGElement,
                Wt = et.documentElement || {},
                Yt = (jt = M || /Android/i.test(ot) && !_gsScope.chrome, et.createElementNS && !jt && (Rt = Et("svg", Wt), Lt = (Nt = Et("rect", Rt, {
                    width: 100,
                    height: 50,
                    x: 100
                })).getBoundingClientRect().width, Nt.style[Bt] = "50% 50%", Nt.style[It] = "scaleX(0.5)", jt = Lt === Nt.getBoundingClientRect().width && !(X && zt), Wt.removeChild(Rt)), jt),
                Ut = function (t) {
                    var e, n = a("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                        i = this.parentNode,
                        r = this.nextSibling,
                        o = this.style.cssText;
                    if (Wt.appendChild(n), n.appendChild(this), this.style.display = "block", t) try {
                        e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Ut
                    } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                    return r ? i.insertBefore(this, r) : i.appendChild(this), Wt.removeChild(n), this.style.cssText = o, e
                },
                $t = function (t) {
                    return !(!Ht || !t.getCTM || t.parentNode && !t.ownerSVGElement || ! function (e) {
                        try {
                            return e.getBBox()
                        } catch (t) {
                            return Ut.call(e, !0)
                        }
                    }(t))
                },
                Vt = [1, 0, 0, 1, 0, 0],
                Kt = function (t, e) {
                    var n, i, r, o, s, a, l, u = t._gsTransform || new Xt,
                        c = t.style;
                    if (It ? i = ct(t, qt, null, !0) : t.currentStyle && (i = (i = t.currentStyle.filter.match(V)) && 4 === i.length ? [i[0].substr(4), Number(i[2].substr(4)), Number(i[1].substr(4)), i[3].substr(4), u.x || 0, u.y || 0].join(",") : ""), n = !i || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i, It && n && !t.offsetParent && (o = c.display, c.display = "block", (l = t.parentNode) && t.offsetParent || (s = 1, a = t.nextSibling, Wt.appendChild(t)), n = !(i = ct(t, qt, null, !0)) || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i, o ? c.display = o : te(c, "display"), s && (a ? l.insertBefore(t, a) : l ? l.appendChild(t) : Wt.removeChild(t))), (u.svg || t.getCTM && $t(t)) && (n && -1 !== (c[It] + "").indexOf("matrix") && (i = c[It], n = 0), r = t.getAttribute("transform"), n && r && (i = "matrix(" + (r = t.transform.baseVal.consolidate().matrix).a + "," + r.b + "," + r.c + "," + r.d + "," + r.e + "," + r.f + ")", n = 0)), n) return Vt;
                    for (r = (i || "").match(L) || [], St = r.length; - 1 < --St;) o = Number(r[St]), r[St] = (s = o - (o |= 0)) ? (1e5 * s + (s < 0 ? -.5 : .5) | 0) / 1e5 + o : o;
                    return e && 6 < r.length ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                },
                Gt = rt.getTransform = function (t, e, n, i) {
                    if (t._gsTransform && n && !i) return t._gsTransform;
                    var r, o, s, a, l, u, c = n && t._gsTransform || new Xt,
                        h = c.scaleX < 0,
                        f = zt && (parseFloat(ct(t, Bt, e, !1, "0 0 0").split(" ")[2]) || c.zOrigin) || 0,
                        p = parseFloat(z.defaultTransformPerspective) || 0;
                    if (c.svg = !(!t.getCTM || !$t(t)), c.svg && (At(t, ct(t, Bt, e, !1, "50% 50%") + "", c, t.getAttribute("data-svg-origin")), Mt = z.useSVGTransformAttr || Yt), (r = Kt(t)) !== Vt) {
                        if (16 === r.length) {
                            var d, m, g, v, _, y = r[0],
                                x = r[1],
                                b = r[2],
                                w = r[3],
                                T = r[4],
                                k = r[5],
                                S = r[6],
                                P = r[7],
                                C = r[8],
                                O = r[9],
                                E = r[10],
                                A = r[12],
                                D = r[13],
                                M = r[14],
                                R = r[11],
                                N = Math.atan2(S, E);
                            c.zOrigin && (A = C * (M = -c.zOrigin) - r[12], D = O * M - r[13], M = E * M + c.zOrigin - r[14]), c.rotationX = N * J, N && (d = T * (v = Math.cos(-N)) + C * (_ = Math.sin(-N)), m = k * v + O * _, g = S * v + E * _, C = T * -_ + C * v, O = k * -_ + O * v, E = S * -_ + E * v, R = P * -_ + R * v, T = d, k = m, S = g), N = Math.atan2(-b, E), c.rotationY = N * J, N && (m = x * (v = Math.cos(-N)) - O * (_ = Math.sin(-N)), g = b * v - E * _, O = x * _ + O * v, E = b * _ + E * v, R = w * _ + R * v, y = d = y * v - C * _, x = m, b = g), N = Math.atan2(x, y), c.rotation = N * J, N && (d = y * (v = Math.cos(N)) + x * (_ = Math.sin(N)), m = T * v + k * _, g = C * v + O * _, x = x * v - y * _, k = k * v - T * _, O = O * v - C * _, y = d, T = m, C = g), c.rotationX && 359.9 < Math.abs(c.rotationX) + Math.abs(c.rotation) && (c.rotationX = c.rotation = 0, c.rotationY = 180 - c.rotationY), N = Math.atan2(T, k), c.scaleX = (1e5 * Math.sqrt(y * y + x * x + b * b) + .5 | 0) / 1e5, c.scaleY = (1e5 * Math.sqrt(k * k + S * S) + .5 | 0) / 1e5, c.scaleZ = (1e5 * Math.sqrt(C * C + O * O + E * E) + .5 | 0) / 1e5, y /= c.scaleX, T /= c.scaleY, x /= c.scaleX, k /= c.scaleY, 2e-5 < Math.abs(N) ? (c.skewX = N * J, T = 0, "simple" !== c.skewType && (c.scaleY *= 1 / Math.cos(N))) : c.skewX = 0, c.perspective = R ? 1 / (R < 0 ? -R : R) : 0, c.x = A, c.y = D, c.z = M, c.svg && (c.x -= c.xOrigin - (c.xOrigin * y - c.yOrigin * T), c.y -= c.yOrigin - (c.yOrigin * x - c.xOrigin * k))
                        } else if (!zt || i || !r.length || c.x !== r[4] || c.y !== r[5] || !c.rotationX && !c.rotationY) {
                            var L = 6 <= r.length,
                                j = L ? r[0] : 1,
                                F = r[1] || 0,
                                I = r[2] || 0,
                                q = L ? r[3] : 1;
                            c.x = r[4] || 0, c.y = r[5] || 0, s = Math.sqrt(j * j + F * F), a = Math.sqrt(q * q + I * I), l = j || F ? Math.atan2(F, j) * J : c.rotation || 0, u = I || q ? Math.atan2(I, q) * J + l : c.skewX || 0, c.scaleX = s, c.scaleY = a, c.rotation = l, c.skewX = u, zt && (c.rotationX = c.rotationY = c.z = 0, c.perspective = p, c.scaleZ = 1), c.svg && (c.x -= c.xOrigin - (c.xOrigin * j + c.yOrigin * I), c.y -= c.yOrigin - (c.xOrigin * F + c.yOrigin * q))
                        }
                        for (o in 90 < Math.abs(c.skewX) && Math.abs(c.skewX) < 270 && (h ? (c.scaleX *= -1, c.skewX += c.rotation <= 0 ? 180 : -180, c.rotation += c.rotation <= 0 ? 180 : -180) : (c.scaleY *= -1, c.skewX += c.skewX <= 0 ? 180 : -180)), c.zOrigin = f, c) c[o] < 2e-5 && -2e-5 < c[o] && (c[o] = 0)
                    }
                    return n && ((t._gsTransform = c).svg && (Mt && t.style[It] ? B.delayedCall(.001, function () {
                        te(t.style, It)
                    }) : !Mt && t.getAttribute("transform") && B.delayedCall(.001, function () {
                        t.removeAttribute("transform")
                    }))), c
                },
                Qt = rt.set3DTransformRatio = rt.setTransformRatio = function (t) {
                    var e, n, i, r, o, s, a, l, u, c, h, f, p, d, m, g, v, _, y, x, b, w, T, k = this.data,
                        S = this.t.style,
                        P = k.rotation,
                        C = k.rotationX,
                        O = k.rotationY,
                        E = k.scaleX,
                        A = k.scaleY,
                        D = k.scaleZ,
                        M = k.x,
                        R = k.y,
                        N = k.z,
                        L = k.svg,
                        j = k.perspective,
                        F = k.force3D,
                        I = k.skewY,
                        q = k.skewX;
                    if (I && (q += I, P += I), !((1 !== t && 0 !== t || "auto" !== F || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && F || N || j || O || C || 1 !== D) || Mt && L || !zt) P || q || L ? (P *= Z, w = q * Z, T = 1e5, n = Math.cos(P) * E, o = Math.sin(P) * E, i = Math.sin(P - w) * -A, s = Math.cos(P - w) * A, w && "simple" === k.skewType && (e = Math.tan(w - I * Z), i *= e = Math.sqrt(1 + e * e), s *= e, I && (e = Math.tan(I * Z), n *= e = Math.sqrt(1 + e * e), o *= e)), L && (M += k.xOrigin - (k.xOrigin * n + k.yOrigin * i) + k.xOffset, R += k.yOrigin - (k.xOrigin * o + k.yOrigin * s) + k.yOffset, Mt && (k.xPercent || k.yPercent) && (m = this.t.getBBox(), M += .01 * k.xPercent * m.width, R += .01 * k.yPercent * m.height), M < (m = 1e-6) && -m < M && (M = 0), R < m && -m < R && (R = 0)), y = (n * T | 0) / T + "," + (o * T | 0) / T + "," + (i * T | 0) / T + "," + (s * T | 0) / T + "," + M + "," + R + ")", L && Mt ? this.t.setAttribute("transform", "matrix(" + y) : S[It] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + y) : S[It] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + A + "," + M + "," + R + ")";
                    else {
                        if (X && (E < (m = 1e-4) && -m < E && (E = D = 2e-5), A < m && -m < A && (A = D = 2e-5), !j || k.z || k.rotationX || k.rotationY || (j = 0)), P || q) P *= Z, g = n = Math.cos(P), v = o = Math.sin(P), q && (P -= q * Z, g = Math.cos(P), v = Math.sin(P), "simple" === k.skewType && (e = Math.tan((q - I) * Z), g *= e = Math.sqrt(1 + e * e), v *= e, k.skewY && (e = Math.tan(I * Z), n *= e = Math.sqrt(1 + e * e), o *= e))), i = -v, s = g;
                        else {
                            if (!(O || C || 1 !== D || j || L)) return void(S[It] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) translate3d(" : "translate3d(") + M + "px," + R + "px," + N + "px)" + (1 !== E || 1 !== A ? " scale(" + E + "," + A + ")" : ""));
                            n = s = 1, i = o = 0
                        }
                        c = 1, r = a = l = u = h = f = 0, p = j ? -1 / j : 0, d = k.zOrigin, m = 1e-6, x = ",", b = "0", (P = O * Z) && (g = Math.cos(P), h = p * (l = -(v = Math.sin(P))), r = n * v, a = o * v, p *= c = g, n *= g, o *= g), (P = C * Z) && (e = i * (g = Math.cos(P)) + r * (v = Math.sin(P)), _ = s * g + a * v, u = c * v, f = p * v, r = i * -v + r * g, a = s * -v + a * g, c *= g, p *= g, i = e, s = _), 1 !== D && (r *= D, a *= D, c *= D, p *= D), 1 !== A && (i *= A, s *= A, u *= A, f *= A), 1 !== E && (n *= E, o *= E, l *= E, h *= E), (d || L) && (d && (M += r * -d, R += a * -d, N += c * -d + d), L && (M += k.xOrigin - (k.xOrigin * n + k.yOrigin * i) + k.xOffset, R += k.yOrigin - (k.xOrigin * o + k.yOrigin * s) + k.yOffset), M < m && -m < M && (M = b), R < m && -m < R && (R = b), N < m && -m < N && (N = 0)), y = k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix3d(" : "matrix3d(", y += (n < m && -m < n ? b : n) + x + (o < m && -m < o ? b : o) + x + (l < m && -m < l ? b : l), y += x + (h < m && -m < h ? b : h) + x + (i < m && -m < i ? b : i) + x + (s < m && -m < s ? b : s), C || O || 1 !== D ? (y += x + (u < m && -m < u ? b : u) + x + (f < m && -m < f ? b : f) + x + (r < m && -m < r ? b : r), y += x + (a < m && -m < a ? b : a) + x + (c < m && -m < c ? b : c) + x + (p < m && -m < p ? b : p) + x) : y += ",0,0,0,0,1,0,", y += M + x + R + x + N + x + (j ? 1 + -N / j : 1) + ")", S[It] = y
                    }
                };
            (t = Xt.prototype).x = t.y = t.z = t.skewX = t.skewY = t.rotation = t.rotationX = t.rotationY = t.zOrigin = t.xPercent = t.yPercent = t.xOffset = t.yOffset = 0, t.scaleX = t.scaleY = t.scaleZ = 1, Ct("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                parser: function (t, e, n, i, r, o, s) {
                    if (i._lastParsedTransform === s) return r;
                    var a = (i._lastParsedTransform = s).scale && "function" == typeof s.scale ? s.scale : 0;
                    a && (s.scale = a(N, t));
                    var l, u, c, h, f, p, d, m, g, v = t._gsTransform,
                        _ = t.style,
                        y = Ft.length,
                        x = s,
                        b = {},
                        w = "transformOrigin",
                        T = Gt(t, S, !0, x.parseTransform),
                        k = x.transform && ("function" == typeof x.transform ? x.transform(N, R) : x.transform);
                    if (T.skewType = x.skewType || T.skewType || z.defaultSkewType, i._transform = T, "rotationZ" in x && (x.rotation = x.rotationZ), k && "string" == typeof k && It)(u = nt.style)[It] = k, u.display = "block", u.position = "absolute", -1 !== k.indexOf("%") && (u.width = ct(t, "width"), u.height = ct(t, "height")), et.body.appendChild(nt), l = Gt(nt, null, !1), "simple" === T.skewType && (l.scaleY *= Math.cos(l.skewX * Z)), T.svg && (p = T.xOrigin, d = T.yOrigin, l.x -= T.xOffset, l.y -= T.yOffset, (x.transformOrigin || x.svgOrigin) && (k = {}, At(t, mt(x.transformOrigin), k, x.svgOrigin, x.smoothOrigin, !0), p = k.xOrigin, d = k.yOrigin, l.x -= k.xOffset - T.xOffset, l.y -= k.yOffset - T.yOffset), (p || d) && (m = Kt(nt, !0), l.x -= p - (p * m[0] + d * m[2]), l.y -= d - (p * m[1] + d * m[3]))), et.body.removeChild(nt), l.perspective || (l.perspective = T.perspective), null != x.xPercent && (l.xPercent = O(x.xPercent, T.xPercent)), null != x.yPercent && (l.yPercent = O(x.yPercent, T.yPercent));
                    else if ("object" == typeof x) {
                        if (l = {
                                scaleX: O(null != x.scaleX ? x.scaleX : x.scale, T.scaleX),
                                scaleY: O(null != x.scaleY ? x.scaleY : x.scale, T.scaleY),
                                scaleZ: O(x.scaleZ, T.scaleZ),
                                x: O(x.x, T.x),
                                y: O(x.y, T.y),
                                z: O(x.z, T.z),
                                xPercent: O(x.xPercent, T.xPercent),
                                yPercent: O(x.yPercent, T.yPercent),
                                perspective: O(x.transformPerspective, T.perspective)
                            }, null != (f = x.directionalRotation))
                            if ("object" == typeof f)
                                for (u in f) x[u] = f[u];
                            else x.rotation = f;
                        "string" == typeof x.x && -1 !== x.x.indexOf("%") && (l.x = 0, l.xPercent = O(x.x, T.xPercent)), "string" == typeof x.y && -1 !== x.y.indexOf("%") && (l.y = 0, l.yPercent = O(x.y, T.yPercent)), l.rotation = E("rotation" in x ? x.rotation : "shortRotation" in x ? x.shortRotation + "_short" : T.rotation, T.rotation, "rotation", b), zt && (l.rotationX = E("rotationX" in x ? x.rotationX : "shortRotationX" in x ? x.shortRotationX + "_short" : T.rotationX || 0, T.rotationX, "rotationX", b), l.rotationY = E("rotationY" in x ? x.rotationY : "shortRotationY" in x ? x.shortRotationY + "_short" : T.rotationY || 0, T.rotationY, "rotationY", b)), l.skewX = E(x.skewX, T.skewX), l.skewY = E(x.skewY, T.skewY)
                    }
                    for (zt && null != x.force3D && (T.force3D = x.force3D, h = !0), (c = T.force3D || T.z || T.rotationX || T.rotationY || l.z || l.rotationX || l.rotationY || l.perspective) || null == x.scale || (l.scaleZ = 1); - 1 < --y;)(1e-6 < (k = l[g = Ft[y]] - T[g]) || k < -1e-6 || null != x[g] || null != tt[g]) && (h = !0, r = new Tt(T, g, T[g], k, r), g in b && (r.e = b[g]), r.xs0 = 0, r.plugin = o, i._overwriteProps.push(r.n));
                    return k = "function" == typeof x.transformOrigin ? x.transformOrigin(N, R) : x.transformOrigin, T.svg && (k || x.svgOrigin) && (p = T.xOffset, d = T.yOffset, At(t, mt(k), l, x.svgOrigin, x.smoothOrigin), r = bt(T, "xOrigin", (v ? T : l).xOrigin, l.xOrigin, r, w), r = bt(T, "yOrigin", (v ? T : l).yOrigin, l.yOrigin, r, w), p === T.xOffset && d === T.yOffset || (r = bt(T, "xOffset", v ? p : T.xOffset, T.xOffset, r, w), r = bt(T, "yOffset", v ? d : T.yOffset, T.yOffset, r, w)), k = "0px 0px"), (k || zt && c && T.zOrigin) && (It ? (h = !0, g = Bt, k || (k = (k = (ct(t, g, S, !1, "50% 50%") + "").split(" "))[0] + " " + k[1] + " " + T.zOrigin + "px"), k += "", (r = new Tt(_, g, 0, 0, r, -1, w)).b = _[g], r.plugin = o, zt ? (u = T.zOrigin, k = k.split(" "), T.zOrigin = (2 < k.length ? parseFloat(k[2]) : u) || 0, r.xs0 = r.e = k[0] + " " + (k[1] || "50%") + " 0px", (r = new Tt(T, "zOrigin", 0, 0, r, -1, r.n)).b = u, r.xs0 = r.e = T.zOrigin) : r.xs0 = r.e = k) : mt(k + "", T)), h && (i._transformType = T.svg && Mt || !c && 3 !== this._transformType ? 2 : 3), a && (s.scale = a), r
                },
                allowFunc: !0,
                prefix: !0
            }), Ct("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), Ct("clipPath", {
                defaultValue: "inset(0px)",
                prefix: !0,
                multi: !0,
                formatter: yt("inset(0px 0px 0px 0px)", !1, !0)
            }), Ct("borderRadius", {
                defaultValue: "0px",
                parser: function (t, e, n, i, r, o) {
                    e = this.format(e);
                    var s, a, l, u, c, h, f, p, d, m, g, v, _, y, x, b, w = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        T = t.style;
                    for (d = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), s = e.split(" "), a = 0; a < w.length; a++) this.p.indexOf("border") && (w[a] = P(w[a])), -1 !== (c = u = ct(t, w[a], S, !1, "0px")).indexOf(" ") && (c = (u = c.split(" "))[0], u = u[1]), h = l = s[a], f = parseFloat(c), v = c.substr((f + "").length), "" === (g = (_ = "=" === h.charAt(1)) ? (p = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), p *= parseFloat(h), h.substr((p + "").length - (p < 0 ? 1 : 0)) || "") : (p = parseFloat(h), h.substr((p + "").length))) && (g = k[n] || v), g !== v && (y = ht(t, "borderLeft", f, v), x = ht(t, "borderTop", f, v), u = "%" === g ? (c = y / d * 100 + "%", x / m * 100 + "%") : "em" === g ? (c = y / (b = ht(t, "borderLeft", 1, "em")) + "em", x / b + "em") : (c = y + "px", x + "px"), _ && (h = parseFloat(c) + p + g, l = parseFloat(u) + p + g)), r = kt(T, w[a], c + " " + u, h + " " + l, !1, "0px", r);
                    return r
                },
                prefix: !0,
                formatter: yt("0px 0px 0px 0px", !1, !0)
            }), Ct("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                defaultValue: "0px",
                parser: function (t, e, n, i, r, o) {
                    return kt(t.style, n, this.format(ct(t, n, S, !1, "0px 0px")), this.format(e), !1, "0px", r)
                },
                prefix: !0,
                formatter: yt("0px 0px", !1, !0)
            }), Ct("backgroundPosition", {
                defaultValue: "0 0",
                parser: function (t, e, n, i, r, o) {
                    var s, a, l, u, c, h, f = "background-position",
                        p = S || _(t),
                        d = this.format((p ? M ? p.getPropertyValue(f + "-x") + " " + p.getPropertyValue(f + "-y") : p.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                        m = this.format(e);
                    if (-1 !== d.indexOf("%") != (-1 !== m.indexOf("%")) && m.split(",").length < 2 && ((h = ct(t, "backgroundImage").replace(U, "")) && "none" !== h)) {
                        for (s = d.split(" "), a = m.split(" "), it.setAttribute("src", h), l = 2; - 1 < --l;)(u = -1 !== (d = s[l]).indexOf("%")) != (-1 !== a[l].indexOf("%")) && (c = 0 === l ? t.offsetWidth - it.width : t.offsetHeight - it.height, s[l] = u ? parseFloat(d) / 100 * c + "px" : parseFloat(d) / c * 100 + "%");
                        d = s.join(" ")
                    }
                    return this.parseComplex(t.style, d, m, r, o)
                },
                formatter: mt
            }), Ct("backgroundSize", {
                defaultValue: "0 0",
                formatter: function (t) {
                    return "co" === (t += "").substr(0, 2) ? t : mt(-1 === t.indexOf(" ") ? t + " " + t : t)
                }
            }), Ct("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), Ct("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), Ct("transformStyle", {
                prefix: !0
            }), Ct("backfaceVisibility", {
                prefix: !0
            }), Ct("userSelect", {
                prefix: !0
            }), Ct("margin", {
                parser: xt("marginTop,marginRight,marginBottom,marginLeft")
            }), Ct("padding", {
                parser: xt("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), Ct("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function (t, e, n, i, r, o) {
                    var s, a, l;
                    return e = M < 9 ? (a = t.currentStyle, l = M < 8 ? " " : ",", s = "rect(" + a.clipTop + l + a.clipRight + l + a.clipBottom + l + a.clipLeft + ")", this.format(e).split(",").join(l)) : (s = this.format(ct(t, this.p, S, !1, this.dflt)), this.format(e)), this.parseComplex(t.style, s, e, r, o)
                }
            }), Ct("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), Ct("autoRound,strictUnits", {
                parser: function (t, e, n, i, r) {
                    return r
                }
            }), Ct("border", {
                defaultValue: "0px solid #000",
                parser: function (t, e, n, i, r, o) {
                    var s = ct(t, "borderTopWidth", S, !1, "0px"),
                        a = this.format(e).split(" "),
                        l = a[0].replace(I, "");
                    return "px" !== l && (s = parseFloat(s) / ht(t, "borderTopWidth", 1, l) + l), this.parseComplex(t.style, this.format(s + " " + ct(t, "borderTopStyle", S, !1, "solid") + " " + ct(t, "borderTopColor", S, !1, "#000")), a.join(" "), r, o)
                },
                color: !0,
                formatter: function (t) {
                    var e = t.split(" ");
                    return e[0] + " " + (e[1] || "solid") + " " + (t.match(_t) || ["#000"])[0]
                }
            }), Ct("borderWidth", {
                parser: xt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), Ct("float,cssFloat,styleFloat", {
                parser: function (t, e, n, i, r, o) {
                    var s = t.style,
                        a = "cssFloat" in s ? "cssFloat" : "styleFloat";
                    return new Tt(s, a, 0, 0, r, -1, n, !1, 0, s[a], e)
                }
            });

            function Zt(t) {
                var e, n = this.t,
                    i = n.filter || ct(this.data, "filter") || "",
                    r = this.s + this.c * t | 0;
                100 == r && (e = -1 === i.indexOf("atrix(") && -1 === i.indexOf("radient(") && -1 === i.indexOf("oader(") ? (n.removeAttribute("filter"), !ct(this.data, "filter")) : (n.filter = i.replace(h, ""), !0)), e || (this.xn1 && (n.filter = i = i || "alpha(opacity=" + r + ")"), -1 === i.indexOf("pacity") ? 0 == r && this.xn1 || (n.filter = i + " alpha(opacity=" + r + ")") : n.filter = i.replace(q, "opacity=" + r))
            }
            Ct("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function (t, e, n, i, r, o) {
                    var s = parseFloat(ct(t, "opacity", S, !1, "1")),
                        a = t.style,
                        l = "autoAlpha" === n;
                    return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + s), l && 1 === s && "hidden" === ct(t, "visibility", S) && 0 !== e && (s = 0), st ? r = new Tt(a, "opacity", s, e - s, r) : ((r = new Tt(a, "opacity", 100 * s, 100 * (e - s), r)).xn1 = l ? 1 : 0, a.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = o, r.setRatio = Zt), l && ((r = new Tt(a, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== s ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", i._overwriteProps.push(r.n), i._overwriteProps.push(n)), r
                }
            });

            function Jt(t) {
                if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                    this.t.setAttribute("class", 0 === t ? this.b : this.e);
                    for (var e = this.data, n = this.t.style; e;) e.v ? n[e.p] = e.v : te(n, e.p), e = e._next;
                    1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
            }
            var te = function (t, e) {
                e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(f, "-$1").toLowerCase())) : t.removeAttribute(e))
            };
            Ct("className", {
                parser: function (t, e, n, i, r, o, s) {
                    var a, l, u, c, h, f = t.getAttribute("class") || "",
                        p = t.style.cssText;
                    if ((r = i._classNamePT = new Tt(t, n, 0, 0, r, 2)).setRatio = Jt, r.pr = -11, d = !0, r.b = f, l = y(t, S), u = t._gsClassPT) {
                        for (c = {}, h = u.data; h;) c[h.p] = 1, h = h._next;
                        u.setRatio(1)
                    }
                    return (t._gsClassPT = r).e = "=" !== e.charAt(1) ? e : f.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", r.e), a = x(t, l, y(t), s, c), t.setAttribute("class", f), r.data = a.firstMPT, t.style.cssText = p, r.xfirst = i.parse(t, a.difs, r, o)
                }
            });

            function ee(t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var e, n, i, r, o, s = this.t.style,
                        a = g.transform.parse;
                    if ("all" === this.e) r = !(s.cssText = "");
                    else
                        for (i = (e = this.e.split(" ").join("").split(",")).length; - 1 < --i;) n = e[i], g[n] && (g[n].parse === a ? r = !0 : n = "transformOrigin" === n ? Bt : g[n].p), te(s, n);
                    r && (te(s, It), (o = this.t._gsTransform) && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                }
            }
            for (Ct("clearProps", {
                    parser: function (t, e, n, i, r) {
                        return (r = new Tt(t, n, 0, 0, r, 2)).setRatio = ee, r.e = e, r.pr = -10, r.data = i._tween, d = !0, r
                    }
                }), t = "bezier,throwProps,physicsProps,physics2D".split(","), St = t.length; St--;) Ot(t[St]);
            (t = z.prototype)._firstPT = t._lastParsedTransform = t._transform = null, t._onInitTween = function (t, e, n, i) {
                if (!t.nodeType) return !1;
                this._target = R = t, this._tween = n, this._vars = e, N = i, A = e.autoRound, d = !1, k = e.suffixMap || z.suffixMap, S = _(t), m = this._overwriteProps;
                var r, o, s, a, l, u, c, h, f, p = t.style;
                if (w && "" === p.zIndex && ("auto" !== (r = ct(t, "zIndex", S)) && "" !== r || this._addLazySet(p, "zIndex", 0)), "string" == typeof e && (a = p.cssText, r = y(t, S), p.cssText = a + ";" + e, r = x(t, r, y(t)).difs, !st && H.test(e) && (r.opacity = parseFloat(RegExp.$1)), e = r, p.cssText = a), e.className ? this._firstPT = o = g.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = o = this.parse(t, e, null), this._transformType) {
                    for (f = 3 === this._transformType, It ? T && (w = !0, "" === p.zIndex && ("auto" !== (c = ct(t, "zIndex", S)) && "" !== c || this._addLazySet(p, "zIndex", 0)), D && this._addLazySet(p, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (f ? "visible" : "hidden"))) : p.zoom = 1, s = o; s && s._next;) s = s._next;
                    h = new Tt(t, "transform", 0, 0, null, 2), this._linkCSSP(h, null, s), h.setRatio = It ? Qt : Dt, h.data = this._transform || Gt(t, S, !0), h.tween = n, h.pr = -1, m.pop()
                }
                if (d) {
                    for (; o;) {
                        for (u = o._next, s = a; s && s.pr > o.pr;) s = s._next;
                        (o._prev = s ? s._prev : l) ? o._prev._next = o: a = o, (o._next = s) ? s._prev = o : l = o, o = u
                    }
                    this._firstPT = a
                }
                return !0
            }, t.parse = function (t, e, n, i) {
                var r, o, s, a, l, u, c, h, f, p, d = t.style;
                for (r in e) {
                    if (u = e[r], o = g[r], "function" != typeof u || o && o.allowFunc || (u = u(N, R)), o) n = o.parse(t, u, r, this, n, i, e);
                    else {
                        if ("--" === r.substr(0, 2)) {
                            this._tween._propLookup[r] = this._addTween.call(this._tween, t.style, "setProperty", _(t).getPropertyValue(r) + "", u + "", r, !1, r);
                            continue
                        }
                        l = ct(t, r, S) + "", f = "string" == typeof u, "color" === r || "fill" === r || "stroke" === r || -1 !== r.indexOf("Color") || f && W.test(u) ? (f || (u = (3 < (u = vt(u)).length ? "rgba(" : "rgb(") + u.join(",") + ")"), n = kt(d, r, l, u, !0, "transparent", n, 0, i)) : f && Q.test(u) ? n = kt(d, r, l, u, !0, null, n, 0, i) : (c = (s = parseFloat(l)) || 0 === s ? l.substr((s + "").length) : "", "" !== l && "auto" !== l || (c = "width" === r || "height" === r ? (s = b(t, r, S), "px") : "left" === r || "top" === r ? (s = ft(t, r, S), "px") : (s = "opacity" !== r ? 0 : 1, "")), "" === (h = (p = f && "=" === u.charAt(1)) ? (a = parseInt(u.charAt(0) + "1", 10), u = u.substr(2), a *= parseFloat(u), u.replace(I, "")) : (a = parseFloat(u), f ? u.replace(I, "") : "")) && (h = r in k ? k[r] : c), u = a || 0 === a ? (p ? a + s : a) + h : e[r], c === h || "" === h && "lineHeight" !== r || !a && 0 !== a || !s || (s = ht(t, r, s, c), "%" === h ? (s /= ht(t, r, 100, "%") / 100, !0 !== e.strictUnits && (l = s + "%")) : "em" === h || "rem" === h || "vw" === h || "vh" === h ? s /= ht(t, r, 1, h) : "px" !== h && (a = ht(t, r, a, h), h = "px"), p && (a || 0 === a) && (u = a + s + h)), p && (a += s), !s && 0 !== s || !a && 0 !== a ? void 0 !== d[r] && (u || u + "" != "NaN" && null != u) ? (n = new Tt(d, r, a || s || 0, 0, n, -1, r, !1, 0, l, u)).xs0 = "none" !== u || "display" !== r && -1 === r.indexOf("Style") ? u : l : v("invalid " + r + " tween value: " + e[r]) : (n = new Tt(d, r, s, a - s, n, 0, r, !1 !== A && ("px" === h || "zIndex" === r), 0, l, u)).xs0 = h)
                    }
                    i && n && !n.plugin && (n.plugin = i)
                }
                return n
            }, t.setRatio = function (t) {
                var e, n, i, r = this._firstPT;
                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                        for (; r;) {
                            if (e = r.c * t + r.s, r.r ? e = r.r(e) : e < 1e-6 && -1e-6 < e && (e = 0), r.type)
                                if (1 === r.type)
                                    if (2 === (i = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                    else if (3 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                            else if (4 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                            else if (5 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                            else {
                                for (n = r.xs0 + e + r.xs1, i = 1; i < r.l; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                                r.t[r.p] = n
                            } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                            else r.t[r.p] = e + r.xs0;
                            r = r._next
                        } else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                    else
                        for (; r;) {
                            if (2 !== r.type)
                                if (r.r && -1 !== r.type)
                                    if (e = r.r(r.s + r.c), r.type) {
                                        if (1 === r.type) {
                                            for (i = r.l, n = r.xs0 + e + r.xs1, i = 1; i < r.l; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                                            r.t[r.p] = n
                                        }
                                    } else r.t[r.p] = e + r.xs0;
                            else r.t[r.p] = r.e;
                            else r.setRatio(t);
                            r = r._next
                        }
            }, t._enableTransforms = function (t) {
                this._transform = this._transform || Gt(this._target, S, !0), this._transformType = this._transform.svg && Mt || !t && 3 !== this._transformType ? 2 : 3
            };

            function ne(t) {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            }
            t._addLazySet = function (t, e, n) {
                var i = this._firstPT = new Tt(t, e, 0, 0, this._firstPT, 2);
                i.e = n, i.setRatio = ne, i.data = this
            }, t._linkCSSP = function (t, e, n, i) {
                return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, i = !0), n ? n._next = t : i || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = n), t
            }, t._mod = function (t) {
                for (var e = this._firstPT; e;) "function" == typeof t[e.p] && (e.r = t[e.p]), e = e._next
            }, t._kill = function (t) {
                var e, n, i, r = t;
                if (t.autoAlpha || t.alpha) {
                    for (n in r = {}, t) r[n] = t[n];
                    r.opacity = 1, r.autoAlpha && (r.visibility = 1)
                }
                for (t.className && (e = this._classNamePT) && ((i = e.xfirst) && i._prev ? this._linkCSSP(i._prev, e._next, i._prev._prev) : i === this._firstPT && (this._firstPT = e._next), e._next && this._linkCSSP(e._next, e._next._next, i._prev), this._classNamePT = null), e = this._firstPT; e;) e.plugin && e.plugin !== n && e.plugin._kill && (e.plugin._kill(t), n = e.plugin), e = e._next;
                return o.prototype._kill.call(this, r)
            };
            var ie = function (t, e, n) {
                var i, r, o, s;
                if (t.slice)
                    for (r = t.length; - 1 < --r;) ie(t[r], e, n);
                else
                    for (r = (i = t.childNodes).length; - 1 < --r;) s = (o = i[r]).type, o.style && (e.push(y(o)), n && n.push(o)), 1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || ie(o, e, n)
            };
            return z.cascadeTo = function (t, e, n) {
                var i, r, o, s, a = B.to(t, e, n),
                    l = [a],
                    u = [],
                    c = [],
                    h = [],
                    f = B._internals.reservedProps;
                for (t = a._targets || a.target, ie(t, u, h), a.render(e, !0, !0), ie(t, c), a.render(0, !0, !0), a._enabled(!0), i = h.length; - 1 < --i;)
                    if ((r = x(h[i], u[i], c[i])).firstMPT) {
                        for (o in r = r.difs, n) f[o] && (r[o] = n[o]);
                        for (o in s = {}, r) s[o] = u[i][o];
                        l.push(B.fromTo(h[i], e, s, r))
                    } return l
            }, o.activate([z]), z
        }, !0), t = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.7.0",
            priority: -1,
            API: 2,
            init: function (t, e, n) {
                return this._tween = n, !0
            }
        }), (e = t.prototype)._onInitAllProps = function () {
            var t, e, n, i, r = this._tween,
                o = r.vars.roundProps,
                s = {},
                a = r._propLookup.roundProps;
            if ("object" != typeof o || o.push)
                for ("string" == typeof o && (o = o.split(",")), n = o.length; - 1 < --n;) s[o[n]] = Math.round;
            else
                for (i in o) s[i] = l(o[i]);
            for (i in s)
                for (t = r._firstPT; t;) e = t._next, t.pg ? t.t._mod(s) : t.n === i && (2 === t.f && t.t ? u(t.t._firstPT, s[i]) : (this._add(t.t, i, t.s, t.c, s[i]), e && (e._prev = t._prev), t._prev ? t._prev._next = e : r._firstPT === t && (r._firstPT = e), t._next = t._prev = null, r._propLookup[i] = a)), t = e;
            return !1
        }, e._add = function (t, e, n, i, r) {
            this._addTween(t, e, n, n + i, e, r || Math.round), this._overwriteProps.push(e)
        }, _gsScope._gsDefine.plugin({
            propName: "attr",
            API: 2,
            version: "0.6.1",
            init: function (t, e, n, i) {
                var r, o;
                if ("function" != typeof t.setAttribute) return !1;
                for (r in e) "function" == typeof (o = e[r]) && (o = o(i, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", o + "", r, !1, r), this._overwriteProps.push(r);
                return !0
            }
        }), _gsScope._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.3.1",
            API: 2,
            init: function (t, e, n, i) {
                "object" != typeof e && (e = {
                    rotation: e
                }), this.finals = {};
                var r, o, s, a, l, u, c = !0 === e.useRadians ? 2 * Math.PI : 360;
                for (r in e) "useRadians" !== r && ("function" == typeof (a = e[r]) && (a = a(i, t)), o = (u = (a + "").split("_"))[0], s = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), l = (a = this.finals[r] = "string" == typeof o && "=" === o.charAt(1) ? s + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0) - s, u.length && (-1 !== (o = u.join("_")).indexOf("short") && ((l %= c) !== l % (c / 2) && (l = l < 0 ? l + c : l - c)), -1 !== o.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * c) % c - (l / c | 0) * c : -1 !== o.indexOf("ccw") && 0 < l && (l = (l - 9999999999 * c) % c - (l / c | 0) * c)), (1e-6 < l || l < -1e-6) && (this._addTween(t, r, s, s + l, r), this._overwriteProps.push(r)));
                return !0
            },
            set: function (t) {
                var e;
                if (1 !== t) this._super.setRatio.call(this, t);
                else
                    for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
            }
        })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (g) {
            function t(t, e) {
                var n = h("easing." + t, function () {}, !0),
                    i = n.prototype = new g;
                return i.constructor = n, i.getRatio = e, n
            }

            function e(t, e, n, i, r) {
                var o = h("easing." + t, {
                    easeOut: new e,
                    easeIn: new n,
                    easeInOut: new i
                }, !0);
                return f(o, t), o
            }

            function v(t, e, n) {
                this.t = t, this.v = e, n && (((this.next = n).prev = this).c = n.v - e, this.gap = n.t - t)
            }

            function n(t, e) {
                var n = h("easing." + t, function (t) {
                        this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                    }, !0),
                    i = n.prototype = new g;
                return i.constructor = n, i.getRatio = e, i.config = function (t) {
                    return new n(t)
                }, n
            }
            var i, r, o, s, a = _gsScope.GreenSockGlobals || _gsScope,
                l = a.com.greensock,
                u = 2 * Math.PI,
                c = Math.PI / 2,
                h = l._class,
                f = g.register || function () {},
                p = e("Back", n("BackOut", function (t) {
                    return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                }), n("BackIn", function (t) {
                    return t * t * ((this._p1 + 1) * t - this._p1)
                }), n("BackInOut", function (t) {
                    return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                })),
                d = h("easing.SlowMo", function (t, e, n) {
                    e = e || 0 === e ? e : .7, null == t ? t = .7 : 1 < t && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === n
                }, !0),
                m = d.prototype = new g;
            return m.constructor = d, m.getRatio = function (t) {
                var e = t + (.5 - t) * this._p;
                return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
            }, d.ease = new d(.7, .7), m.config = d.config = function (t, e, n) {
                return new d(t, e, n)
            }, (m = (i = h("easing.SteppedEase", function (t, e) {
                t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0
            }, !0)).prototype = new g).constructor = i, m.getRatio = function (t) {
                return t < 0 ? t = 0 : 1 <= t && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1
            }, m.config = i.config = function (t, e) {
                return new i(t, e)
            }, (m = (r = h("easing.ExpoScaleEase", function (t, e, n) {
                this._p1 = Math.log(e / t), this._p2 = e - t, this._p3 = t, this._ease = n
            }, !0)).prototype = new g).constructor = r, m.getRatio = function (t) {
                return this._ease && (t = this._ease.getRatio(t)), (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
            }, m.config = r.config = function (t, e, n) {
                return new r(t, e, n)
            }, (m = (o = h("easing.RoughEase", function (t) {
                for (var e, n, i, r, o, s, a = (t = t || {}).taper || "none", l = [], u = 0, c = 0 | (t.points || 20), h = c, f = !1 !== t.randomize, p = !0 === t.clamp, d = t.template instanceof g ? t.template : null, m = "number" == typeof t.strength ? .4 * t.strength : .4; - 1 < --h;) e = f ? Math.random() : 1 / c * h, n = d ? d.getRatio(e) : e, i = "none" === a ? m : "out" === a ? (r = 1 - e) * r * m : "in" === a ? e * e * m : (r = e < .5 ? 2 * e : 2 * (1 - e)) * r * .5 * m, f ? n += Math.random() * i - .5 * i : h % 2 ? n += .5 * i : n -= .5 * i, p && (1 < n ? n = 1 : n < 0 && (n = 0)), l[u++] = {
                    x: e,
                    y: n
                };
                for (l.sort(function (t, e) {
                        return t.x - e.x
                    }), s = new v(1, 1, null), h = c; - 1 < --h;) o = l[h], s = new v(o.x, o.y, s);
                this._prev = new v(0, 0, 0 !== s.t ? s : s.next)
            }, !0)).prototype = new g).constructor = o, m.getRatio = function (t) {
                var e = this._prev;
                if (t > e.t) {
                    for (; e.next && t >= e.t;) e = e.next;
                    e = e.prev
                } else
                    for (; e.prev && t <= e.t;) e = e.prev;
                return (this._prev = e).v + (t - e.t) / e.gap * e.c
            }, m.config = function (t) {
                return new o(t)
            }, o.ease = new o, e("Bounce", t("BounceOut", function (t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }), t("BounceIn", function (t) {
                return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            }), t("BounceInOut", function (t) {
                var e = t < .5;
                return t = (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
            })), e("Circ", t("CircOut", function (t) {
                return Math.sqrt(1 - (t -= 1) * t)
            }), t("CircIn", function (t) {
                return -(Math.sqrt(1 - t * t) - 1)
            }), t("CircInOut", function (t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            })), e("Elastic", (s = function (t, e, n) {
                var i = h("easing." + t, function (t, e) {
                        this._p1 = 1 <= t ? t : 1, this._p2 = (e || n) / (t < 1 ? t : 1), this._p3 = this._p2 / u * (Math.asin(1 / this._p1) || 0), this._p2 = u / this._p2
                    }, !0),
                    r = i.prototype = new g;
                return r.constructor = i, r.getRatio = e, r.config = function (t, e) {
                    return new i(t, e)
                }, i
            })("ElasticOut", function (t) {
                return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
            }, .3), s("ElasticIn", function (t) {
                return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
            }, .3), s("ElasticInOut", function (t) {
                return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
            }, .45)), e("Expo", t("ExpoOut", function (t) {
                return 1 - Math.pow(2, -10 * t)
            }), t("ExpoIn", function (t) {
                return Math.pow(2, 10 * (t - 1)) - .001
            }), t("ExpoInOut", function (t) {
                return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            })), e("Sine", t("SineOut", function (t) {
                return Math.sin(t * c)
            }), t("SineIn", function (t) {
                return 1 - Math.cos(t * c)
            }), t("SineInOut", function (t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            })), h("easing.EaseLookup", {
                find: function (t) {
                    return g.map[t]
                }
            }, !0), f(a.SlowMo, "SlowMo", "ease,"), f(o, "RoughEase", "ease,"), f(i, "SteppedEase", "ease,"), p
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function (f, p) {
        "use strict";
        var d = {},
            i = f.document,
            m = f.GreenSockGlobals = f.GreenSockGlobals || f,
            t = m[p];
        if (t) return "undefined" != typeof module && module.exports && (module.exports = t);

        function g(t) {
            var e, n = t.split("."),
                i = m;
            for (e = 0; e < n.length; e++) i[n[e]] = i = i[n[e]] || {};
            return i
        }

        function l(t) {
            var e, n = [],
                i = t.length;
            for (e = 0; e !== i; n.push(t[e++]));
            return n
        }

        function v() {}
        var e, n, r, _, y, o, s, h = g("com.greensock"),
            x = 1e-8,
            b = (o = Object.prototype.toString, s = o.call([]), function (t) {
                return null != t && (t instanceof Array || "object" == typeof t && !!t.push && o.call(t) === s)
            }),
            w = {},
            T = function (a, l, u, c) {
                this.sc = w[a] ? w[a].sc : [], (w[a] = this).gsClass = null, this.func = u;
                var h = [];
                this.check = function (t) {
                    for (var e, n, i, r, o = l.length, s = o; - 1 < --o;)(e = w[l[o]] || new T(l[o], [])).gsClass ? (h[o] = e.gsClass, s--) : t && e.sc.push(this);
                    if (0 === s && u) {
                        if (i = (n = ("com.greensock." + a).split(".")).pop(), r = g(n.join("."))[i] = this.gsClass = u.apply(u, h), c)
                            if (m[i] = d[i] = r, "undefined" != typeof module && module.exports)
                                if (a === p)
                                    for (o in module.exports = d[p] = r, d) r[o] = d[o];
                                else d[p] && (d[p][i] = r);
                        else "function" == typeof define && define.amd && define((f.GreenSockAMDPath ? f.GreenSockAMDPath + "/" : "") + a.split(".").pop(), [], function () {
                            return r
                        });
                        for (o = 0; o < this.sc.length; o++) this.sc[o].check()
                    }
                }, this.check(!0)
            },
            a = f._gsDefine = function (t, e, n, i) {
                return new T(t, e, n, i)
            },
            k = h._class = function (t, e, n) {
                return e = e || function () {}, a(t, [], function () {
                    return e
                }, n), e
            };
        a.globals = m;
        var u = [0, 0, 1, 1],
            S = k("easing.Ease", function (t, e, n, i) {
                this._func = t, this._type = n || 0, this._power = i || 0, this._params = e ? u.concat(e) : u
            }, !0),
            P = S.map = {},
            c = S.register = function (t, e, n, i) {
                for (var r, o, s, a, l = e.split(","), u = l.length, c = (n || "easeIn,easeOut,easeInOut").split(","); - 1 < --u;)
                    for (o = l[u], r = i ? k("easing." + o, null, !0) : h.easing[o] || {}, s = c.length; - 1 < --s;) a = c[s], P[o + "." + a] = P[a + o] = r[a] = t.getRatio ? t : t[a] || new t
            };
        for ((r = S.prototype)._calcEnd = !1, r.getRatio = function (t) {
                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type,
                    n = this._power,
                    i = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                return 1 === n ? i *= i : 2 === n ? i *= i * i : 3 === n ? i *= i * i * i : 4 === n && (i *= i * i * i * i), 1 === e ? 1 - i : 2 === e ? i : t < .5 ? i / 2 : 1 - i / 2
            }, n = (e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; - 1 < --n;) r = e[n] + ",Power" + n, c(new S(null, null, 1, n), r, "easeOut", !0), c(new S(null, null, 2, n), r, "easeIn" + (0 === n ? ",easeNone" : "")), c(new S(null, null, 3, n), r, "easeInOut");
        P.linear = h.easing.Linear.easeIn, P.swing = h.easing.Quad.easeInOut;
        var C = k("events.EventDispatcher", function (t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        (r = C.prototype).addEventListener = function (t, e, n, i, r) {
            r = r || 0;
            var o, s, a = this._listeners[t],
                l = 0;
            for (this !== _ || y || _.wake(), null == a && (this._listeners[t] = a = []), s = a.length; - 1 < --s;)(o = a[s]).c === e && o.s === n ? a.splice(s, 1) : 0 === l && o.pr < r && (l = s + 1);
            a.splice(l, 0, {
                c: e,
                s: n,
                up: i,
                pr: r
            })
        }, r.removeEventListener = function (t, e) {
            var n, i = this._listeners[t];
            if (i)
                for (n = i.length; - 1 < --n;)
                    if (i[n].c === e) return void i.splice(n, 1)
        }, r.dispatchEvent = function (t) {
            var e, n, i, r = this._listeners[t];
            if (r)
                for (1 < (e = r.length) && (r = r.slice(0)), n = this._eventTarget; - 1 < --e;)(i = r[e]) && (i.up ? i.c.call(i.s || n, {
                    type: t,
                    target: n
                }) : i.c.call(i.s || n))
        };
        var O = f.requestAnimationFrame,
            E = f.cancelAnimationFrame,
            A = Date.now || function () {
                return (new Date).getTime()
            },
            D = A();
        for (n = (e = ["ms", "moz", "webkit", "o"]).length; - 1 < --n && !O;) O = f[e[n] + "RequestAnimationFrame"], E = f[e[n] + "CancelAnimationFrame"] || f[e[n] + "CancelRequestAnimationFrame"];
        k("Ticker", function (t, e) {
            var r, o, s, a, l, u = this,
                c = A(),
                n = !(!1 === e || !O) && "auto",
                h = 500,
                f = 33,
                p = function (t) {
                    var e, n, i = A() - D;
                    h < i && (c += i - f), D += i, u.time = (D - c) / 1e3, e = u.time - l, (!r || 0 < e || !0 === t) && (u.frame++, l += e + (a <= e ? .004 : a - e), n = !0), !0 !== t && (s = o(p)), n && u.dispatchEvent("tick")
                };
            C.call(u), u.time = u.frame = 0, u.tick = function () {
                p(!0)
            }, u.lagSmoothing = function (t, e) {
                return arguments.length ? (h = t || 1e8, void(f = Math.min(e, h, 0))) : h < 1e8
            }, u.sleep = function () {
                null != s && (n && E ? E(s) : clearTimeout(s), o = v, s = null, u === _ && (y = !1))
            }, u.wake = function (t) {
                null !== s ? u.sleep() : t ? c += -D + (D = A()) : 10 < u.frame && (D = A() - h + 5), o = 0 === r ? v : n && O ? O : function (t) {
                    return setTimeout(t, 1e3 * (l - u.time) + 1 | 0)
                }, u === _ && (y = !0), p(2)
            }, u.fps = function (t) {
                return arguments.length ? (a = 1 / ((r = t) || 60), l = this.time + a, void u.wake()) : r
            }, u.useRAF = function (t) {
                return arguments.length ? (u.sleep(), n = t, void u.fps(r)) : n
            }, u.fps(t), setTimeout(function () {
                "auto" === n && u.frame < 5 && "hidden" !== (i || {}).visibilityState && u.useRAF(!1)
            }, 1500)
        }), (r = h.Ticker.prototype = new h.events.EventDispatcher).constructor = h.Ticker;
        var M = k("core.Animation", function (t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !!e.immediateRender, this.data = e.data, this._reversed = !!e.reversed, Z) {
                y || _.wake();
                var n = this.vars.useFrames ? Q : Z;
                n.add(this, n._time), this.vars.paused && this.paused(!0)
            }
        });
        _ = M.ticker = new h.Ticker, (r = M.prototype)._dirty = r._gc = r._initted = r._paused = !1, r._totalTime = r._time = 0, r._rawPrevTime = -1, r._next = r._last = r._onUpdate = r._timeline = r.timeline = null, r._paused = !1;
        var R = function () {
            y && 2e3 < A() - D && ("hidden" !== (i || {}).visibilityState || !_.lagSmoothing()) && _.wake();
            var t = setTimeout(R, 2e3);
            t.unref && t.unref()
        };
        R(), r.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, r.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, r.resume = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!1)
        }, r.seek = function (t, e) {
            return this.totalTime(Number(t), !1 !== e)
        }, r.restart = function (t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
        }, r.reverse = function (t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, r.render = function (t, e, n) {}, r.invalidate = function () {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
        }, r.isActive = function () {
            var t, e = this._timeline,
                n = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= n && t < n + this.totalDuration() / this._timeScale - x
        }, r._enabled = function (t, e) {
            return y || _.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, r._kill = function (t, e) {
            return this._enabled(!1, !1)
        }, r.kill = function (t, e) {
            return this._kill(t, e), this
        }, r._uncache = function (t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
            return this
        }, r._swapSelfInParams = function (t) {
            for (var e = t.length, n = t.concat(); - 1 < --e;) "{self}" === t[e] && (n[e] = this);
            return n
        }, r._callback = function (t) {
            var e = this.vars,
                n = e[t],
                i = e[t + "Params"],
                r = e[t + "Scope"] || e.callbackScope || this;
            switch (i ? i.length : 0) {
                case 0:
                    n.call(r);
                    break;
                case 1:
                    n.call(r, i[0]);
                    break;
                case 2:
                    n.call(r, i[0], i[1]);
                    break;
                default:
                    n.apply(r, i)
            }
        }, r.eventCallback = function (t, e, n, i) {
            if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length) return r[t];
                null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = b(n) && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n, r[t + "Scope"] = i), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, r.delay = function (t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, r.duration = function (t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, r.totalDuration = function (t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, r.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, r.totalTime = function (t, e, n) {
            if (y || _.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (t < 0 && !n && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var i = this._totalDuration,
                        r = this._timeline;
                    if (i < t && !n && (t = i), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? i - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                        for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                }
                this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (z.length && tt(), this.render(t, e, !1), z.length && tt())
            }
            return this
        }, r.progress = r.totalProgress = function (t, e) {
            var n = this.duration();
            return arguments.length ? this.totalTime(n * t, e) : n ? this._time / n : this.ratio
        }, r.startTime = function (t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, r.endTime = function (t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }, r.timeScale = function (t) {
            if (!arguments.length) return this._timeScale;
            var e, n;
            for (t = t || x, this._timeline && this._timeline.smoothChildTiming && (n = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(), this._startTime = n - (n - this._startTime) * this._timeScale / t), this._timeScale = t, n = this.timeline; n && n.timeline;) n._dirty = !0, n.totalDuration(), n = n.timeline;
            return this
        }, r.reversed = function (t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, r.paused = function (t) {
            if (!arguments.length) return this._paused;
            var e, n, i = this._timeline;
            return t != this._paused && i && (y || t || _.wake(), n = (e = i.rawTime()) - this._pauseTime, !t && i.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 != n && this._initted && this.duration() && (e = i.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
        };
        var N = k("core.SimpleTimeline", function (t) {
            M.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        (r = N.prototype = new M).constructor = N, r.kill()._gc = !1, r._first = r._last = r._recent = null, r._sortChildren = !1, r.add = r.insert = function (t, e, n, i) {
            var r, o;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                for (o = t._startTime; r && r._startTime > o;) r = r._prev;
            return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
        }, r._remove = function (t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, r.render = function (t, e, n) {
            var i, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; r;) i = r._next, (r._active || t >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, n) : r.render((t - r._startTime) * r._timeScale, e, n)), r = i
        }, r.rawTime = function () {
            return y || _.wake(), this._totalTime
        };

        function L(t) {
            return t && t.length && t !== f && t[0] && (t[0] === f || t[0].nodeType && t[0].style && !t.nodeType)
        }
        var j = k("TweenLite", function (t, e, n) {
            if (M.call(this, e, n), this.render = j.prototype.render, null == t) throw "Cannot tween a null target.";
            this.target = t = "string" != typeof t ? t : j.selector(t) || t;
            var i, r, o, s = t.jquery || t.length && t !== f && t[0] && (t[0] === f || t[0].nodeType && t[0].style && !t.nodeType),
                a = this.vars.overwrite;
            if (this._overwrite = a = null == a ? G[j.defaultOverwrite] : "number" == typeof a ? a >> 0 : G[a], (s || t instanceof Array || t.push && b(t)) && "number" != typeof t[0])
                for (this._targets = o = l(t), this._propLookup = [], this._siblings = [], i = 0; i < o.length; i++)(r = o[i]) ? "string" != typeof r ? r.length && r !== f && r[0] && (r[0] === f || r[0].nodeType && r[0].style && !r.nodeType) ? (o.splice(i--, 1), this._targets = o = o.concat(l(r))) : (this._siblings[i] = nt(r, this, !1), 1 === a && 1 < this._siblings[i].length && it(r, this, null, 1, this._siblings[i])) : "string" == typeof (r = o[i--] = j.selector(r)) && o.splice(i + 1, 1) : o.splice(i--, 1);
            else this._propLookup = {}, this._siblings = nt(t, this, !1), 1 === a && 1 < this._siblings.length && it(t, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -x, this.render(Math.min(0, -this._delay)))
        }, !0);
        (r = j.prototype = new M).constructor = j, r.kill()._gc = !1, r.ratio = 0, r._firstPT = r._targets = r._overwrittenProps = r._startAt = null, r._notifyPluginsOfEnabled = r._lazy = !1, j.version = "2.1.2", j.defaultEase = r._ease = new S(null, null, 1, 1), j.defaultOverwrite = "auto", j.ticker = _, j.autoSleep = 120, j.lagSmoothing = function (t, e) {
            _.lagSmoothing(t, e)
        }, j.selector = f.$ || f.jQuery || function (t) {
            var e = f.$ || f.jQuery;
            return e ? (j.selector = e)(t) : (i || (i = f.document), i ? i.querySelectorAll ? i.querySelectorAll(t) : i.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t)
        };

        function F(t) {
            for (var e, n = this._firstPT; n;) e = n.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : n.c * t + n.s, n.m ? e = n.m.call(this._tween, e, this._target || n.t, this._tween) : e < 1e-6 && -1e-6 < e && !n.blob && (e = 0), n.f ? n.fp ? n.t[n.p](n.fp, e) : n.t[n.p](e) : n.t[n.p] = e, n = n._next
        }

        function I(t) {
            return (1e3 * t | 0) / 1e3 + ""
        }

        function q(t, e, n, i) {
            var r, o, s, a, l, u, c, h = [],
                f = 0,
                p = "",
                d = 0;
            for (h.start = t, h.end = e, t = h[0] = t + "", e = h[1] = e + "", n && (n(h), t = h[0], e = h[1]), h.length = 0, r = t.match(H) || [], o = e.match(H) || [], i && (i._next = null, i.blob = 1, h._firstPT = h._applyPT = i), l = o.length, a = 0; a < l; a++) c = o[a], p += (u = e.substr(f, e.indexOf(c, f) - f)) || !a ? u : ",", f += u.length, d ? d = (d + 1) % 5 : "rgba(" === u.substr(-5) && (d = 1), c === r[a] || r.length <= a ? p += c : (p && (h.push(p), p = ""), s = parseFloat(r[a]), h.push(s), h._firstPT = {
                _next: h._firstPT,
                t: h,
                p: h.length - 1,
                s: s,
                c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - s) || 0,
                f: 0,
                m: d && d < 4 ? Math.round : I
            }), f += c.length;
            return (p += e.substr(f)) && h.push(p), h.setRatio = F, W.test(e) && (h.end = null), h
        }

        function B(t, e, n, i, r, o, s, a, l) {
            "function" == typeof i && (i = i(l || 0, t));
            var u = typeof t[e],
                c = "function" != u ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                h = "get" !== n ? n : c ? s ? t[c](s) : t[c]() : t[e],
                f = "string" == typeof i && "=" === i.charAt(1),
                p = {
                    t: t,
                    p: e,
                    s: h,
                    f: "function" == u,
                    pg: 0,
                    n: r || e,
                    m: o ? "function" == typeof o ? o : Math.round : 0,
                    pr: 0,
                    c: f ? parseInt(i.charAt(0) + "1", 10) * parseFloat(i.substr(2)) : parseFloat(i) - h || 0
                };
            return "number" == typeof h && ("number" == typeof i || f) || (s || isNaN(h) || !f && isNaN(i) || "boolean" == typeof h || "boolean" == typeof i ? (p.fp = s, p = {
                t: q(h, f ? parseFloat(p.s) + p.c + (p.s + "").replace(/[0-9\-\.]/g, "") : i, a || j.defaultStringFilter, p),
                p: "setRatio",
                s: 0,
                c: 1,
                f: 2,
                pg: 0,
                n: r || e,
                pr: 0,
                m: 0
            }) : (p.s = parseFloat(h), f || (p.c = parseFloat(i) - p.s || 0))), p.c ? ((p._next = this._firstPT) && (p._next._prev = p), this._firstPT = p) : void 0
        }
        var z = [],
            X = {},
            H = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            W = /[\+-]=-?[\.\d]/,
            Y = j._internals = {
                isArray: b,
                isSelector: L,
                lazyTweens: z,
                blobDif: q
            },
            U = j._plugins = {},
            $ = Y.tweenLookup = {},
            V = 0,
            K = Y.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1,
                stringFilter: 1,
                id: 1,
                yoyoEase: 1,
                stagger: 1
            },
            G = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                true: 1,
                false: 0
            },
            Q = M._rootFramesTimeline = new N,
            Z = M._rootTimeline = new N,
            J = 30,
            tt = Y.lazyRender = function () {
                var t, e, n = z.length;
                for (X = {}, t = 0; t < n; t++)(e = z[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
                z.length = 0
            };
        Z._startTime = _.time, Q._startTime = _.frame, Z._active = Q._active = !0, setTimeout(tt, 1), M._updateRoot = j.render = function () {
            var t, e, n;
            if (z.length && tt(), Z.render((_.time - Z._startTime) * Z._timeScale, !1, !1), Q.render((_.frame - Q._startTime) * Q._timeScale, !1, !1), z.length && tt(), _.frame >= J) {
                for (n in J = _.frame + (parseInt(j.autoSleep, 10) || 120), $) {
                    for (t = (e = $[n].tweens).length; - 1 < --t;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete $[n]
                }
                if ((!(n = Z._first) || n._paused) && j.autoSleep && !Q._first && 1 === _._listeners.tick.length) {
                    for (; n && n._paused;) n = n._next;
                    n || _.sleep()
                }
            }
        }, _.addEventListener("tick", M._updateRoot);

        function et(t, e, n, i) {
            var r, o, s = t.vars.onOverwrite;
            return s && (r = s(t, e, n, i)), (s = j.onOverwrite) && (o = s(t, e, n, i)), !1 !== r && !1 !== o
        }
        var nt = function (t, e, n) {
                var i, r, o = t._gsTweenID;
                if ($[o || (t._gsTweenID = o = "t" + V++)] || ($[o] = {
                        target: t,
                        tweens: []
                    }), e && ((i = $[o].tweens)[r = i.length] = e, n))
                    for (; - 1 < --r;) i[r] === e && i.splice(r, 1);
                return $[o].tweens
            },
            it = function (t, e, n, i, r) {
                var o, s, a, l;
                if (1 === i || 4 <= i) {
                    for (l = r.length, o = 0; o < l; o++)
                        if ((a = r[o]) !== e) a._gc || a._kill(null, t, e) && (s = !0);
                        else if (5 === i) break;
                    return s
                }
                var u, c = e._startTime + x,
                    h = [],
                    f = 0,
                    p = 0 === e._duration;
                for (o = r.length; - 1 < --o;)(a = r[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (u = u || rt(e, 0, p), 0 === rt(a, u, p) && (h[f++] = a)) : a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && ((p || !a._initted) && c - a._startTime <= 2e-8 || (h[f++] = a)));
                for (o = f; - 1 < --o;)
                    if (l = (a = h[o])._firstPT, 2 === i && a._kill(n, t, e) && (s = !0), 2 !== i || !a._firstPT && a._initted && l) {
                        if (2 !== i && !et(a, e)) continue;
                        a._enabled(!1, !1) && (s = !0)
                    } return s
            },
            rt = function (t, e, n) {
                for (var i = t._timeline, r = i._timeScale, o = t._startTime; i._timeline;) {
                    if (o += i._startTime, r *= i._timeScale, i._paused) return -100;
                    i = i._timeline
                }
                return e < (o /= r) ? o - e : n && o === e || !t._initted && o - e < 2e-8 ? x : (o += t.totalDuration() / t._timeScale / r) > e + x ? 0 : o - e - x
            };
        r._init = function () {
            var t, e, n, i, r, o, s = this.vars,
                a = this._overwrittenProps,
                l = this._duration,
                u = !!s.immediateRender,
                c = s.ease,
                h = this._startAt;
            if (s.startAt) {
                for (i in h && (h.render(-1, !0), h.kill()), r = {}, s.startAt) r[i] = s.startAt[i];
                if (r.data = "isStart", r.overwrite = !1, r.immediateRender = !0, r.lazy = u && !1 !== s.lazy, r.startAt = r.delay = null, r.onUpdate = s.onUpdate, r.onUpdateParams = s.onUpdateParams, r.onUpdateScope = s.onUpdateScope || s.callbackScope || this, this._startAt = j.to(this.target || {}, 0, r), u)
                    if (0 < this._time) this._startAt = null;
                    else if (0 !== l) return
            } else if (s.runBackwards && 0 !== l)
                if (h) h.render(-1, !0), h.kill(), this._startAt = null;
                else {
                    for (i in 0 !== this._time && (u = !1), n = {}, s) K[i] && "autoCSS" !== i || (n[i] = s[i]);
                    if (n.overwrite = 0, n.data = "isFromStart", n.lazy = u && !1 !== s.lazy, n.immediateRender = u, this._startAt = j.to(this.target, 0, n), u) {
                        if (0 === this._time) return
                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                } if (this._ease = c = c ? c instanceof S ? c : "function" == typeof c ? new S(c, s.easeParams) : P[c] || j.defaultEase : j.defaultEase, s.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (o = this._targets.length, t = 0; t < o; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
            if (e && j._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
                for (n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
            this._onUpdate = s.onUpdate, this._initted = !0
        }, r._initProps = function (t, e, n, i, r) {
            var o, s, a, l, u, c;
            if (null == t) return !1;
            for (o in X[t._gsTweenID] && tt(), this.vars.css || t.style && t !== f && t.nodeType && U.css && !1 !== this.vars.autoCSS && function (t, e) {
                    var n, i = {};
                    for (n in t) K[n] || n in e && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!U[n] || U[n] && U[n]._autoCSS) || (i[n] = t[n], delete t[n]);
                    t.css = i
                }(this.vars, t), this.vars)
                if (c = this.vars[o], K[o]) c && (c instanceof Array || c.push && b(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[o] = c = this._swapSelfInParams(c, this));
                else if (U[o] && (l = new U[o])._onInitTween(t, this.vars[o], this, r)) {
                for (this._firstPT = u = {
                        _next: this._firstPT,
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 1,
                        n: o,
                        pg: 1,
                        pr: l._priority,
                        m: 0
                    }, s = l._overwriteProps.length; - 1 < --s;) e[l._overwriteProps[s]] = this._firstPT;
                (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u)
            } else e[o] = B.call(this, t, o, "get", c, o, 0, null, this.vars.stringFilter, r);
            return i && this._kill(i, t) ? this._initProps(t, e, n, i, r) : 1 < this._overwrite && this._firstPT && 1 < n.length && it(t, this, e, this._overwrite, n) ? (this._kill(e, t), this._initProps(t, e, n, i, r)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (X[t._gsTweenID] = !0), a)
        }, r.render = function (t, e, n) {
            var i, r, o, s, a = this,
                l = a._time,
                u = a._duration,
                c = a._rawPrevTime;
            if (u - x <= t && 0 <= t) a._totalTime = a._time = u, a.ratio = a._ease._calcEnd ? a._ease.getRatio(1) : 1, a._reversed || (i = !0, r = "onComplete", n = n || a._timeline.autoRemoveChildren), 0 !== u || !a._initted && a.vars.lazy && !n || (a._startTime === a._timeline._duration && (t = 0), (c < 0 || t <= 0 && -x <= t || c === x && "isPause" !== a.data) && c !== t && (n = !0, x < c && (r = "onReverseComplete")), a._rawPrevTime = s = !e || t || c === t ? t : x);
            else if (t < x) a._totalTime = a._time = 0, a.ratio = a._ease._calcEnd ? a._ease.getRatio(0) : 0, (0 !== l || 0 === u && 0 < c) && (r = "onReverseComplete", i = a._reversed), -x < t ? t = 0 : t < 0 && (a._active = !1, 0 !== u || !a._initted && a.vars.lazy && !n || (0 <= c && (c !== x || "isPause" !== a.data) && (n = !0), a._rawPrevTime = s = !e || t || c === t ? t : x)), (!a._initted || a._startAt && a._startAt.progress()) && (n = !0);
            else if (a._totalTime = a._time = t, a._easeType) {
                var h = t / u,
                    f = a._easeType,
                    p = a._easePower;
                (1 === f || 3 === f && .5 <= h) && (h = 1 - h), 3 === f && (h *= 2), 1 === p ? h *= h : 2 === p ? h *= h * h : 3 === p ? h *= h * h * h : 4 === p && (h *= h * h * h * h), a.ratio = 1 === f ? 1 - h : 2 === f ? h : t / u < .5 ? h / 2 : 1 - h / 2
            } else a.ratio = a._ease.getRatio(t / u);
            if (a._time !== l || n) {
                if (!a._initted) {
                    if (a._init(), !a._initted || a._gc) return;
                    if (!n && a._firstPT && (!1 !== a.vars.lazy && a._duration || a.vars.lazy && !a._duration)) return a._time = a._totalTime = l, a._rawPrevTime = c, z.push(a), void(a._lazy = [t, e]);
                    a._time && !i ? a.ratio = a._ease.getRatio(a._time / u) : i && a._ease._calcEnd && (a.ratio = a._ease.getRatio(0 === a._time ? 0 : 1))
                }
                for (!1 !== a._lazy && (a._lazy = !1), a._active || !a._paused && a._time !== l && 0 <= t && (a._active = !0), 0 === l && (a._startAt && (0 <= t ? a._startAt.render(t, !0, n) : r || (r = "_dummyGS")), !a.vars.onStart || 0 === a._time && 0 !== u || (e || a._callback("onStart"))), o = a._firstPT; o;) o.f ? o.t[o.p](o.c * a.ratio + o.s) : o.t[o.p] = o.c * a.ratio + o.s, o = o._next;
                a._onUpdate && (t < 0 && a._startAt && -1e-4 !== t && a._startAt.render(t, !0, n), e || (a._time !== l || i || n) && a._callback("onUpdate")), !r || a._gc && !n || (t < 0 && a._startAt && !a._onUpdate && -1e-4 !== t && a._startAt.render(t, !0, n), i && (a._timeline.autoRemoveChildren && a._enabled(!1, !1), a._active = !1), !e && a.vars[r] && a._callback(r), 0 === u && a._rawPrevTime === x && s !== x && (a._rawPrevTime = 0))
            }
        }, r._kill = function (t, e, n) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : j.selector(e) || e;
            var i, r, o, s, a, l, u, c, h, f = n && this._time && n._startTime === this._startTime && this._timeline === n._timeline,
                p = this._firstPT;
            if ((b(e) || L(e)) && "number" != typeof e[0])
                for (i = e.length; - 1 < --i;) this._kill(t, e[i], n) && (l = !0);
            else {
                if (this._targets) {
                    for (i = this._targets.length; - 1 < --i;)
                        if (e === this._targets[i]) {
                            a = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target) return !1;
                    a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    if (u = t || a, c = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), n && (j.onOverwrite || this.vars.onOverwrite)) {
                        for (o in u) a[o] && (h || (h = []), h.push(o));
                        if ((h || !t) && !et(this, n, e, h)) return !1
                    }
                    for (o in u)(s = a[o]) && (f && (s.f ? s.t[s.p](s.s) : s.t[s.p] = s.s, l = !0), s.pg && s.t._kill(u) && (l = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete a[o]), c && (r[o] = 1);
                    !this._firstPT && this._initted && p && this._enabled(!1, !1)
                }
            }
            return l
        }, r.invalidate = function () {
            this._notifyPluginsOfEnabled && j._onPluginEvent("_onDisable", this);
            var t = this._time;
            return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], M.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -x, this.render(t, !1, !1 !== this.vars.lazy)), this
        }, r._enabled = function (t, e) {
            if (y || _.wake(), t && this._gc) {
                var n, i = this._targets;
                if (i)
                    for (n = i.length; - 1 < --n;) this._siblings[n] = nt(i[n], this, !0);
                else this._siblings = nt(this.target, this, !0)
            }
            return M.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && j._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        }, j.to = function (t, e, n) {
            return new j(t, e, n)
        }, j.from = function (t, e, n) {
            return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new j(t, e, n)
        }, j.fromTo = function (t, e, n, i) {
            return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new j(t, e, i)
        }, j.delayedCall = function (t, e, n, i, r) {
            return new j(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: n,
                callbackScope: i,
                onReverseComplete: e,
                onReverseCompleteParams: n,
                immediateRender: !1,
                lazy: !1,
                useFrames: r,
                overwrite: 0
            })
        }, j.set = function (t, e) {
            return new j(t, 0, e)
        }, j.getTweensOf = function (t, e) {
            if (null == t) return [];
            var n, i, r, o;
            if (t = "string" != typeof t ? t : j.selector(t) || t, (b(t) || L(t)) && "number" != typeof t[0]) {
                for (n = t.length, i = []; - 1 < --n;) i = i.concat(j.getTweensOf(t[n], e));
                for (n = i.length; - 1 < --n;)
                    for (o = i[n], r = n; - 1 < --r;) o === i[r] && i.splice(n, 1)
            } else if (t._gsTweenID)
                for (n = (i = nt(t).concat()).length; - 1 < --n;)(i[n]._gc || e && !i[n].isActive()) && i.splice(n, 1);
            return i || []
        }, j.killTweensOf = j.killDelayedCallsTo = function (t, e, n) {
            "object" == typeof e && (n = e, e = !1);
            for (var i = j.getTweensOf(t, e), r = i.length; - 1 < --r;) i[r]._kill(n, t)
        };
        var ot = k("plugins.TweenPlugin", function (t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = ot.prototype
        }, !0);
        if (r = ot.prototype, ot.version = "1.19.0", ot.API = 2, r._firstPT = null, r._addTween = B, r.setRatio = F, r._kill = function (t) {
                var e, n = this._overwriteProps,
                    i = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else
                    for (e = n.length; - 1 < --e;) null != t[n[e]] && n.splice(e, 1);
                for (; i;) null != t[i.n] && (i._next && (i._next._prev = i._prev), i._prev ? (i._prev._next = i._next, i._prev = null) : this._firstPT === i && (this._firstPT = i._next)), i = i._next;
                return !1
            }, r._mod = r._roundProps = function (t) {
                for (var e, n = this._firstPT; n;)(e = t[this._propName] || null != n.n && t[n.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === n.f ? n.t._applyPT.m = e : n.m = e), n = n._next
            }, j._onPluginEvent = function (t, e) {
                var n, i, r, o, s, a = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; a;) {
                        for (s = a._next, i = r; i && i.pr > a.pr;) i = i._next;
                        (a._prev = i ? i._prev : o) ? a._prev._next = a: r = a, (a._next = i) ? i._prev = a : o = a, a = s
                    }
                    a = e._firstPT = r
                }
                for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (n = !0), a = a._next;
                return n
            }, ot.activate = function (t) {
                for (var e = t.length; - 1 < --e;) t[e].API === ot.API && (U[(new t[e])._propName] = t[e]);
                return !0
            }, a.plugin = function (t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e, n = t.propName,
                    i = t.priority || 0,
                    r = t.overwriteProps,
                    o = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_mod",
                        mod: "_mod",
                        initAll: "_onInitAllProps"
                    },
                    s = k("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function () {
                        ot.call(this, n, i), this._overwriteProps = r || []
                    }, !0 === t.global),
                    a = s.prototype = new ot(n);
                for (e in (a.constructor = s).API = t.API, o) "function" == typeof t[e] && (a[o[e]] = t[e]);
                return s.version = t.version, ot.activate([s]), s
            }, e = f._gsQueue) {
            for (n = 0; n < e.length; n++) e[n]();
            for (r in w) w[r].func || f.console.log("GSAP encountered missing dependency: " + r)
        }
        y = !1
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
    function (t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.anime = e()
    }(this, function () {
        "use strict";
        var T = {
                update: null,
                begin: null,
                loopBegin: null,
                changeBegin: null,
                change: null,
                changeComplete: null,
                loopComplete: null,
                complete: null,
                loop: 1,
                direction: "normal",
                autoplay: !0,
                timelineOffset: 0
            },
            S = {
                duration: 1e3,
                delay: 0,
                endDelay: 0,
                easing: "easeOutElastic(1, .5)",
                round: 0
            },
            n = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective"],
            f = {
                CSS: {},
                springs: {}
            };

        function P(t, e, n) {
            return Math.min(Math.max(t, e), n)
        }

        function a(t, e) {
            return -1 < t.indexOf(e)
        }

        function o(t, e) {
            return t.apply(null, e)
        }
        var C = {
            arr: function (t) {
                return Array.isArray(t)
            },
            obj: function (t) {
                return a(Object.prototype.toString.call(t), "Object")
            },
            pth: function (t) {
                return C.obj(t) && t.hasOwnProperty("totalLength")
            },
            svg: function (t) {
                return t instanceof SVGElement
            },
            inp: function (t) {
                return t instanceof HTMLInputElement
            },
            dom: function (t) {
                return t.nodeType || C.svg(t)
            },
            str: function (t) {
                return "string" == typeof t
            },
            fnc: function (t) {
                return "function" == typeof t
            },
            und: function (t) {
                return void 0 === t
            },
            hex: function (t) {
                return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)
            },
            rgb: function (t) {
                return /^rgb/.test(t)
            },
            hsl: function (t) {
                return /^hsl/.test(t)
            },
            col: function (t) {
                return C.hex(t) || C.rgb(t) || C.hsl(t)
            },
            key: function (t) {
                return !T.hasOwnProperty(t) && !S.hasOwnProperty(t) && "targets" !== t && "keyframes" !== t
            }
        };

        function p(t) {
            var e = /\(([^)]+)\)/.exec(t);
            return e ? e[1].split(",").map(function (t) {
                return parseFloat(t)
            }) : []
        }

        function s(r, n) {
            var t = p(r),
                e = P(C.und(t[0]) ? 1 : t[0], .1, 100),
                i = P(C.und(t[1]) ? 100 : t[1], .1, 100),
                o = P(C.und(t[2]) ? 10 : t[2], .1, 100),
                s = P(C.und(t[3]) ? 0 : t[3], .1, 100),
                a = Math.sqrt(i / e),
                l = o / (2 * Math.sqrt(i * e)),
                u = l < 1 ? a * Math.sqrt(1 - l * l) : 0,
                c = l < 1 ? (l * a - s) / u : -s + a;

            function h(t) {
                var e = n ? n * t / 1e3 : t;
                return e = l < 1 ? Math.exp(-e * l * a) * (1 * Math.cos(u * e) + c * Math.sin(u * e)) : (1 + c * e) * Math.exp(-e * a), 0 === t || 1 === t ? t : 1 - e
            }
            return n ? h : function () {
                var t = f.springs[r];
                if (t) return t;
                for (var e = 0, n = 0;;)
                    if (1 === h(e += 1 / 6)) {
                        if (16 <= ++n) break
                    } else n = 0;
                var i = e * (1 / 6) * 1e3;
                return f.springs[r] = i
            }
        }

        function l(t, e) {
            void 0 === t && (t = 1), void 0 === e && (e = .5);
            var n = P(t, 1, 10),
                i = P(e, .1, 2);
            return function (t) {
                return 0 === t || 1 === t ? t : -n * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - i / (2 * Math.PI) * Math.asin(1 / n)) * (2 * Math.PI) / i)
            }
        }

        function u(e) {
            return void 0 === e && (e = 10),
                function (t) {
                    return Math.round(t * e) * (1 / e)
                }
        }
        var c = function (o, e, s, n) {
                if (0 <= o && o <= 1 && 0 <= s && s <= 1) {
                    var a = new Float32Array(11);
                    if (o !== e || s !== n)
                        for (var t = 0; t < 11; ++t) a[t] = m(.1 * t, o, s);
                    return function (t) {
                        return o === e && s === n ? t : 0 === t || 1 === t ? t : m(function (t) {
                            for (var e = 0, n = 1; 10 !== n && a[n] <= t; ++n) e += .1;
                            var i = e + (t - a[--n]) / (a[n + 1] - a[n]) * .1,
                                r = g(i, o, s);
                            return .001 <= r ? function (t, e, n, i) {
                                for (var r = 0; r < 4; ++r) {
                                    var o = g(e, n, i);
                                    if (0 === o) return e;
                                    e -= (m(e, n, i) - t) / o
                                }
                                return e
                            }(t, i, o, s) : 0 === r ? i : function (t, e, n, i, r) {
                                for (var o, s, a = 0; 0 < (o = m(s = e + (n - e) / 2, i, r) - t) ? n = s : e = s, 1e-7 < Math.abs(o) && ++a < 10;);
                                return s
                            }(t, e, e + .1, o, s)
                        }(t), e, n)
                    }
                }
            },
            h = function () {
                function t(n) {
                    e[n].forEach(function (t, e) {
                        r["ease" + n + i[e]] = t
                    })
                }
                var i = ["Quad", "Cubic", "Quart", "Quint", "Sine", "Expo", "Circ", "Back", "Elastic"],
                    e = {
                        In: [
                            [.55, .085, .68, .53],
                            [.55, .055, .675, .19],
                            [.895, .03, .685, .22],
                            [.755, .05, .855, .06],
                            [.47, 0, .745, .715],
                            [.95, .05, .795, .035],
                            [.6, .04, .98, .335],
                            [.6, -.28, .735, .045], l
                        ],
                        Out: [
                            [.25, .46, .45, .94],
                            [.215, .61, .355, 1],
                            [.165, .84, .44, 1],
                            [.23, 1, .32, 1],
                            [.39, .575, .565, 1],
                            [.19, 1, .22, 1],
                            [.075, .82, .165, 1],
                            [.175, .885, .32, 1.275],
                            function (e, n) {
                                return function (t) {
                                    return 1 - l(e, n)(1 - t)
                                }
                            }
                        ],
                        InOut: [
                            [.455, .03, .515, .955],
                            [.645, .045, .355, 1],
                            [.77, 0, .175, 1],
                            [.86, 0, .07, 1],
                            [.445, .05, .55, .95],
                            [1, 0, 0, 1],
                            [.785, .135, .15, .86],
                            [.68, -.55, .265, 1.55],
                            function (e, n) {
                                return function (t) {
                                    return t < .5 ? l(e, n)(2 * t) / 2 : 1 - l(e, n)(-2 * t + 2) / 2
                                }
                            }
                        ]
                    },
                    r = {
                        linear: [.25, .25, .75, .75]
                    };
                for (var n in e) t(n);
                return r
            }();

        function i(t, e) {
            return 1 - 3 * e + 3 * t
        }

        function r(t, e) {
            return 3 * e - 6 * t
        }

        function d(t) {
            return 3 * t
        }

        function m(t, e, n) {
            return ((i(e, n) * t + r(e, n)) * t + d(e)) * t
        }

        function g(t, e, n) {
            return 3 * i(e, n) * t * t + 2 * r(e, n) * t + d(e)
        }

        function k(t, e) {
            if (C.fnc(t)) return t;
            var n = t.split("(")[0],
                i = h[n],
                r = p(t);
            switch (n) {
                case "spring":
                    return s(t, e);
                case "cubicBezier":
                    return o(c, r);
                case "steps":
                    return o(u, r);
                default:
                    return C.fnc(i) ? o(i, r) : o(c, i)
            }
        }

        function v(t) {
            try {
                return document.querySelectorAll(t)
            } catch (t) {
                return
            }
        }

        function O(t, e) {
            for (var n = t.length, i = 2 <= arguments.length ? e : void 0, r = [], o = 0; o < n; o++)
                if (o in t) {
                    var s = t[o];
                    e.call(i, s, o, t) && r.push(s)
                } return r
        }

        function E(t) {
            return t.reduce(function (t, e) {
                return t.concat(C.arr(e) ? E(e) : e)
            }, [])
        }

        function e(t) {
            return C.arr(t) ? t : (C.str(t) && (t = v(t) || t), t instanceof NodeList || t instanceof HTMLCollection ? [].slice.call(t) : [t])
        }

        function _(t, e) {
            return t.some(function (t) {
                return t === e
            })
        }

        function y(t) {
            var e = {};
            for (var n in t) e[n] = t[n];
            return e
        }

        function A(t, e) {
            var n = y(t);
            for (var i in t) n[i] = e.hasOwnProperty(i) ? e[i] : t[i];
            return n
        }

        function D(t, e) {
            var n = y(t);
            for (var i in e) n[i] = C.und(t[i]) ? e[i] : t[i];
            return n
        }

        function M(t) {
            var e = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);
            if (e) return e[2]
        }

        function x(t, e) {
            return C.fnc(t) ? t(e.target, e.id, e.total) : t
        }

        function b(t, e) {
            return t.getAttribute(e)
        }

        function w(t, e, n) {
            if (_([n, "deg", "rad", "turn"], M(e))) return e;
            var i = f.CSS[e + n];
            if (!C.und(i)) return i;
            var r = document.createElement(t.tagName),
                o = t.parentNode && t.parentNode !== document ? t.parentNode : document.body;
            o.appendChild(r), r.style.position = "absolute", r.style.width = 100 + n;
            var s = 100 / r.offsetWidth;
            o.removeChild(r);
            var a = s * parseFloat(e);
            return f.CSS[e + n] = a
        }

        function R(t, e, n) {
            if (e in t.style) {
                var i = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
                    r = t.style[e] || getComputedStyle(t).getPropertyValue(i) || "0";
                return n ? w(t, r, n) : r
            }
        }

        function N(t, e) {
            return C.dom(t) && !C.inp(t) && (b(t, e) || C.svg(t) && t[e]) ? "attribute" : C.dom(t) && _(n, e) ? "transform" : C.dom(t) && "transform" !== e && R(t, e) ? "css" : null != t[e] ? "object" : void 0
        }

        function L(t) {
            if (C.dom(t)) {
                for (var e, n = t.style.transform || "", i = /(\w+)\(([^)]*)\)/g, r = new Map; e = i.exec(n);) r.set(e[1], e[2]);
                return r
            }
        }

        function j(t, e, n, i) {
            switch (N(t, e)) {
                case "transform":
                    return function (t, e, n, i) {
                        var r, o = a(e, "scale") ? 1 : 0 + (a(r = e, "translate") || "perspective" === r ? "px" : a(r, "rotate") || a(r, "skew") ? "deg" : void 0),
                            s = L(t).get(e) || o;
                        return n && (n.transforms.list.set(e, s), n.transforms.last = e), i ? w(t, s, i) : s
                    }(t, e, i, n);
                case "css":
                    return R(t, e, n);
                case "attribute":
                    return b(t, e);
                default:
                    return t[e] || 0
            }
        }

        function F(t, e) {
            var n = /^(\*=|\+=|-=)/.exec(t);
            if (!n) return t;
            var i = M(t) || 0,
                r = parseFloat(e),
                o = parseFloat(t.replace(n[0], ""));
            switch (n[0][0]) {
                case "+":
                    return r + o + i;
                case "-":
                    return r - o + i;
                case "*":
                    return r * o + i
            }
        }

        function I(t, e) {
            if (C.col(t)) return function (t) {
                return C.rgb(t) ? (n = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e = t)) ? "rgba(" + n[1] + ",1)" : e : C.hex(t) ? (i = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, e, n, i) {
                    return e + e + n + n + i + i
                }), r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i), "rgba(" + parseInt(r[1], 16) + "," + parseInt(r[2], 16) + "," + parseInt(r[3], 16) + ",1)") : C.hsl(t) ? function (t) {
                    var e, n, i, r = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),
                        o = parseInt(r[1], 10) / 360,
                        s = parseInt(r[2], 10) / 100,
                        a = parseInt(r[3], 10) / 100,
                        l = r[4] || 1;

                    function u(t, e, n) {
                        return n < 0 && (n += 1), 1 < n && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
                    }
                    if (0 == s) e = n = i = a;
                    else {
                        var c = a < .5 ? a * (1 + s) : a + s - a * s,
                            h = 2 * a - c;
                        e = u(h, c, o + 1 / 3), n = u(h, c, o), i = u(h, c, o - 1 / 3)
                    }
                    return "rgba(" + 255 * e + "," + 255 * n + "," + 255 * i + "," + l + ")"
                }(t) : void 0;
                var e, n, i, r
            }(t);
            var n = M(t),
                i = n ? t.substr(0, t.length - n.length) : t;
            return e && !/\s/g.test(t) ? i + e : i
        }

        function q(t, e) {
            return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
        }

        function B(t) {
            for (var e, n = t.points, i = 0, r = 0; r < n.numberOfItems; r++) {
                var o = n.getItem(r);
                0 < r && (i += q(e, o)), e = o
            }
            return i
        }

        function z(t) {
            if (t.getTotalLength) return t.getTotalLength();
            switch (t.tagName.toLowerCase()) {
                case "circle":
                    return o = t, 2 * Math.PI * b(o, "r");
                case "rect":
                    return 2 * b(r = t, "width") + 2 * b(r, "height");
                case "line":
                    return q({
                        x: b(i = t, "x1"),
                        y: b(i, "y1")
                    }, {
                        x: b(i, "x2"),
                        y: b(i, "y2")
                    });
                case "polyline":
                    return B(t);
                case "polygon":
                    return n = (e = t).points, B(e) + q(n.getItem(n.numberOfItems - 1), n.getItem(0))
            }
            var e, n, i, r, o
        }

        function X(e, t) {
            var n = t || {},
                i = n.el || function () {
                    for (var t = e.parentNode; C.svg(t) && (t = t.parentNode, C.svg(t.parentNode)););
                    return t
                }(),
                r = i.getBoundingClientRect(),
                o = b(i, "viewBox"),
                s = r.width,
                a = r.height,
                l = n.viewBox || (o ? o.split(" ") : [0, 0, s, a]);
            return {
                el: i,
                viewBox: l,
                x: l[0] / 1,
                y: l[1] / 1,
                w: s / l[2],
                h: a / l[3]
            }
        }

        function H(n, i) {
            function t(t) {
                void 0 === t && (t = 0);
                var e = 1 <= i + t ? i + t : 0;
                return n.el.getPointAtLength(e)
            }
            var e = X(n.el, n.svg),
                r = t(),
                o = t(-1),
                s = t(1);
            switch (n.property) {
                case "x":
                    return (r.x - e.x) * e.w;
                case "y":
                    return (r.y - e.y) * e.h;
                case "angle":
                    return 180 * Math.atan2(s.y - o.y, s.x - o.x) / Math.PI
            }
        }

        function W(t, e) {
            var n = /-?\d*\.?\d+/g,
                i = I(C.pth(t) ? t.totalLength : t, e) + "";
            return {
                original: i,
                numbers: i.match(n) ? i.match(n).map(Number) : [0],
                strings: C.str(t) || e ? i.split(n) : []
            }
        }

        function Y(t) {
            return O(t ? E(C.arr(t) ? t.map(e) : e(t)) : [], function (t, e, n) {
                return n.indexOf(t) === e
            })
        }

        function U(t) {
            var n = Y(t);
            return n.map(function (t, e) {
                return {
                    target: t,
                    id: e,
                    total: n.length,
                    transforms: {
                        list: L(t)
                    }
                }
            })
        }

        function $(t, i) {
            var e = y(i);
            if (/^spring/.test(e.easing) && (e.duration = s(e.easing)), C.arr(t)) {
                var n = t.length;
                2 !== n || C.obj(t[0]) ? C.fnc(i.duration) || (e.duration = i.duration / n) : t = {
                    value: t
                }
            }
            var r = C.arr(t) ? t : [t];
            return r.map(function (t, e) {
                var n = C.obj(t) && !C.pth(t) ? t : {
                    value: t
                };
                return C.und(n.delay) && (n.delay = e ? 0 : i.delay), C.und(n.endDelay) && (n.endDelay = e === r.length - 1 ? i.endDelay : 0), n
            }).map(function (t) {
                return D(t, e)
            })
        }
        var V = {
            css: function (t, e, n) {
                return t.style[e] = n
            },
            attribute: function (t, e, n) {
                return t.setAttribute(e, n)
            },
            object: function (t, e, n) {
                return t[e] = n
            },
            transform: function (t, e, n, i, r) {
                if (i.list.set(e, n), e === i.last || r) {
                    var o = "";
                    i.list.forEach(function (t, e) {
                        o += e + "(" + t + ") "
                    }), t.style.transform = o
                }
            }
        };

        function K(t, l) {
            U(t).forEach(function (t) {
                for (var e in l) {
                    var n = x(l[e], t),
                        i = t.target,
                        r = M(n),
                        o = j(i, e, r, t),
                        s = F(I(n, r || M(o)), o),
                        a = N(i, e);
                    V[a](i, e, s, t.transforms, !0)
                }
            })
        }

        function G(t, n) {
            return O(E(t.map(function (e) {
                return n.map(function (t) {
                    return function (t, e) {
                        var n = N(t.target, e.name);
                        if (n) {
                            var i = function (c, h) {
                                    var f;
                                    return c.tweens.map(function (t) {
                                        var e = function (t, e) {
                                                var n = {};
                                                for (var i in t) {
                                                    var r = x(t[i], e);
                                                    C.arr(r) && 1 === (r = r.map(function (t) {
                                                        return x(t, e)
                                                    })).length && (r = r[0]), n[i] = r
                                                }
                                                return n.duration = parseFloat(n.duration), n.delay = parseFloat(n.delay), n
                                            }(t, h),
                                            n = e.value,
                                            i = C.arr(n) ? n[1] : n,
                                            r = M(i),
                                            o = j(h.target, c.name, r, h),
                                            s = f ? f.to.original : o,
                                            a = C.arr(n) ? n[0] : s,
                                            l = M(a) || M(o),
                                            u = r || l;
                                        return C.und(i) && (i = s), e.from = W(a, u), e.to = W(F(i, a), u), e.start = f ? f.end : 0, e.end = e.start + e.delay + e.duration + e.endDelay, e.easing = k(e.easing, e.duration), e.isPath = C.pth(n), e.isColor = C.col(e.from.original), e.isColor && (e.round = 1), f = e
                                    })
                                }(e, t),
                                r = i[i.length - 1];
                            return {
                                type: n,
                                property: e.name,
                                animatable: t,
                                tweens: i,
                                duration: r.end,
                                delay: i[0].delay,
                                endDelay: r.endDelay
                            }
                        }
                    }(e, t)
                })
            })), function (t) {
                return !C.und(t)
            })
        }

        function Q(t, e) {
            function n(t) {
                return t.timelineOffset ? t.timelineOffset : 0
            }
            var i = t.length,
                r = {};
            return r.duration = i ? Math.max.apply(Math, t.map(function (t) {
                return n(t) + t.duration
            })) : e.duration, r.delay = i ? Math.min.apply(Math, t.map(function (t) {
                return n(t) + t.delay
            })) : e.delay, r.endDelay = i ? r.duration - Math.max.apply(Math, t.map(function (t) {
                return n(t) + t.duration - t.endDelay
            })) : e.endDelay, r
        }
        var Z, J = 0,
            tt = [],
            t = [],
            et = nt;

        function nt() {
            Z = requestAnimationFrame(it)
        }

        function it(t) {
            var e = tt.length;
            if (e) {
                for (var n = 0; n < e;) {
                    var i = tt[n];
                    if (i.paused) {
                        var r = tt.indexOf(i); - 1 < r && (tt.splice(r, 1), e = tt.length)
                    } else i.tick(t);
                    n++
                }
                nt()
            } else Z = cancelAnimationFrame(Z)
        }

        function rt(t) {
            void 0 === t && (t = {});
            var o, s = 0,
                a = 0,
                l = 0,
                u = 0,
                c = null;

            function h(t) {
                var e = window.Promise && new Promise(function (t) {
                    return c = t
                });
                return t.finished = e
            }
            var e, n, i, r, f, p, d, m, k = (n = A(T, e = t), r = function (t, e) {
                var n = [],
                    i = e.keyframes;
                for (var r in i && (e = D(function (e) {
                        for (var n = O(E(e.map(function (t) {
                                return Object.keys(t)
                            })), function (t) {
                                return C.key(t)
                            }).reduce(function (t, e) {
                                return t.indexOf(e) < 0 && t.push(e), t
                            }, []), r = {}, t = function (t) {
                                var i = n[t];
                                r[i] = e.map(function (t) {
                                    var e = {};
                                    for (var n in t) C.key(n) ? n == i && (e.value = t[n]) : e[n] = t[n];
                                    return e
                                })
                            }, i = 0; i < n.length; i++) t(i);
                        return r
                    }(i), e)), e) C.key(r) && n.push({
                    name: r,
                    tweens: $(e[r], t)
                });
                return n
            }(i = A(S, e), e), d = Q(p = G(f = U(e.targets), r), i), m = J, J++, D(n, {
                id: m,
                children: [],
                animatables: f,
                animations: p,
                duration: d.duration,
                delay: d.delay,
                endDelay: d.endDelay
            }));

            function g() {
                var t = k.direction;
                "alternate" !== t && (k.direction = "normal" !== t ? "normal" : "reverse"), k.reversed = !k.reversed, o.forEach(function (t) {
                    return t.reversed = k.reversed
                })
            }

            function v(t) {
                return k.reversed ? k.duration - t : t
            }

            function _() {
                s = 0, a = v(k.currentTime) * (1 / rt.speed)
            }

            function y(t, e) {
                e && e.seek(t - e.timelineOffset)
            }

            function x(e) {
                for (var t = 0, n = k.animations, i = n.length; t < i;) {
                    var r = n[t],
                        o = r.animatable,
                        s = r.tweens,
                        a = s.length - 1,
                        l = s[a];
                    a && (l = O(s, function (t) {
                        return e < t.end
                    })[0] || l);
                    for (var u = P(e - l.start - l.delay, 0, l.duration) / l.duration, c = isNaN(u) ? 1 : l.easing(u), h = l.to.strings, f = l.round, p = [], d = l.to.numbers.length, m = void 0, g = 0; g < d; g++) {
                        var v = void 0,
                            _ = l.to.numbers[g],
                            y = l.from.numbers[g] || 0;
                        v = l.isPath ? H(l.value, c * _) : y + c * (_ - y), f && (l.isColor && 2 < g || (v = Math.round(v * f) / f)), p.push(v)
                    }
                    var x = h.length;
                    if (x) {
                        m = h[0];
                        for (var b = 0; b < x; b++) {
                            h[b];
                            var w = h[b + 1],
                                T = p[b];
                            isNaN(T) || (m += w ? T + w : T + " ")
                        }
                    } else m = p[0];
                    V[r.type](o.target, r.property, m, o.transforms), r.currentValue = m, t++
                }
            }

            function b(t) {
                k[t] && !k.passThrough && k[t](k)
            }

            function w(t) {
                var e = k.duration,
                    n = k.delay,
                    i = e - k.endDelay,
                    r = v(t);
                k.progress = P(r / e * 100, 0, 100), k.reversePlayback = r < k.currentTime, o && function (t) {
                    if (k.reversePlayback)
                        for (var e = u; e--;) y(t, o[e]);
                    else
                        for (var n = 0; n < u; n++) y(t, o[n])
                }(r), !k.began && 0 < k.currentTime && (k.began = !0, b("begin"), b("loopBegin")), r <= n && 0 !== k.currentTime && x(0), (i <= r && k.currentTime !== e || !e) && x(e), n < r && r < i ? (k.changeBegan || (k.changeBegan = !0, k.changeCompleted = !1, b("changeBegin")), b("change"), x(r)) : k.changeBegan && (k.changeCompleted = !0, k.changeBegan = !1, b("changeComplete")), k.currentTime = P(r, 0, e), k.began && b("update"), e <= t && (a = 0, k.remaining && !0 !== k.remaining && k.remaining--, k.remaining ? (s = l, b("loopComplete"), b("loopBegin"), "alternate" === k.direction && g()) : (k.paused = !0, k.completed || (k.completed = !0, b("loopComplete"), b("complete"), !k.passThrough && "Promise" in window && (c(), h(k)))))
            }
            return h(k), k.reset = function () {
                var t = k.direction;
                k.passThrough = !1, k.currentTime = 0, k.progress = 0, k.paused = !0, k.began = !1, k.changeBegan = !1, k.completed = !1, k.changeCompleted = !1, k.reversePlayback = !1, k.reversed = "reverse" === t, k.remaining = k.loop, o = k.children;
                for (var e = u = o.length; e--;) k.children[e].reset();
                (k.reversed && !0 !== k.loop || "alternate" === t && 1 === k.loop) && k.remaining++, x(0)
            }, k.set = function (t, e) {
                return K(t, e), k
            }, k.tick = function (t) {
                l = t, s || (s = l), w((l + (a - s)) * rt.speed)
            }, k.seek = function (t) {
                w(v(t))
            }, k.pause = function () {
                k.paused = !0, _()
            }, k.play = function () {
                k.paused && (k.completed && k.reset(), k.paused = !1, tt.push(k), _(), Z || et())
            }, k.reverse = function () {
                g(), _()
            }, k.restart = function () {
                k.reset(), k.play()
            }, k.reset(), k.autoplay && k.play(), k
        }

        function ot(t, e) {
            for (var n = e.length; n--;) _(t, e[n].animatable.target) && e.splice(n, 1)
        }
        return "undefined" != typeof document && document.addEventListener("visibilitychange", function () {
            document.hidden ? (tt.forEach(function (t) {
                return t.pause()
            }), t = tt.slice(0), tt = []) : t.forEach(function (t) {
                return t.play()
            })
        }), rt.version = "3.0.1", rt.speed = 1, rt.running = tt, rt.remove = function (t) {
            for (var e = Y(t), n = tt.length; n--;) {
                var i = tt[n],
                    r = i.animations,
                    o = i.children;
                ot(e, r);
                for (var s = o.length; s--;) {
                    var a = o[s],
                        l = a.animations;
                    ot(e, l), l.length || a.children.length || o.splice(s, 1)
                }
                r.length || o.length || i.pause()
            }
        }, rt.get = j, rt.set = K, rt.convertPx = w, rt.path = function (t, e) {
            var n = C.str(t) ? v(t)[0] : t,
                i = e || 100;
            return function (t) {
                return {
                    property: t,
                    el: n,
                    svg: X(n),
                    totalLength: z(n) * (i / 100)
                }
            }
        }, rt.setDashoffset = function (t) {
            var e = z(t);
            return t.setAttribute("stroke-dasharray", e), e
        }, rt.stagger = function (t, e) {
            void 0 === e && (e = {});
            var u = e.direction || "normal",
                c = e.easing ? k(e.easing) : null,
                h = e.grid,
                f = e.axis,
                p = e.from || 0,
                d = "first" === p,
                m = "center" === p,
                g = "last" === p,
                v = C.arr(t),
                _ = v ? parseFloat(t[0]) : parseFloat(t),
                y = v ? parseFloat(t[1]) : 0,
                x = M(v ? t[1] : t) || 0,
                b = e.start || 0 + (v ? _ : 0),
                w = [],
                T = 0;
            return function (t, e, n) {
                if (d && (p = 0), m && (p = (n - 1) / 2), g && (p = n - 1), !w.length) {
                    for (var i = 0; i < n; i++) {
                        if (h) {
                            var r = m ? (h[0] - 1) / 2 : p % h[0],
                                o = m ? (h[1] - 1) / 2 : Math.floor(p / h[0]),
                                s = r - i % h[0],
                                a = o - Math.floor(i / h[0]),
                                l = Math.sqrt(s * s + a * a);
                            "x" === f && (l = -s), "y" === f && (l = -a), w.push(l)
                        } else w.push(Math.abs(p - i));
                        T = Math.max.apply(Math, w)
                    }
                    c && (w = w.map(function (t) {
                        return c(t / T) * T
                    })), "reverse" === u && (w = w.map(function (t) {
                        return f ? t < 0 ? -1 * t : -t : Math.abs(T - t)
                    }))
                }
                return b + (v ? (y - _) / T : _) * (Math.round(100 * w[e]) / 100) + x
            }
        }, rt.timeline = function (c) {
            void 0 === c && (c = {});
            var h = rt(c);
            return h.duration = 0, h.add = function (t, e) {
                var n = tt.indexOf(h),
                    i = h.children;

                function r(t) {
                    t.passThrough = !0
                } - 1 < n && tt.splice(n, 1);
                for (var o = 0; o < i.length; o++) r(i[o]);
                var s = D(t, A(S, c));
                s.targets = s.targets || c.targets;
                var a = h.duration;
                s.autoplay = !1, s.direction = h.direction, s.timelineOffset = C.und(e) ? a : F(e, a), r(h), h.seek(s.timelineOffset);
                var l = rt(s);
                r(l), i.push(l);
                var u = Q(i, c);
                return h.delay = u.delay, h.endDelay = u.endDelay, h.duration = u.duration, h.seek(0), h.reset(), h.autoplay && h.play(), h
            }, h
        }, rt.easing = k, rt.penner = h, rt.random = function (t, e) {
            return Math.floor(Math.random() * (e - t + 1)) + t
        }, rt
    }),
    function o(s, a, l) {
        function u(n, t) {
            if (!a[n]) {
                if (!s[n]) {
                    var e = "function" == typeof require && require;
                    if (!t && e) return e(n, !0);
                    if (c) return c(n, !0);
                    var i = new Error("Cannot find module '" + n + "'");
                    throw i.code = "MODULE_NOT_FOUND", i
                }
                var r = a[n] = {
                    exports: {}
                };
                s[n][0].call(r.exports, function (t) {
                    var e = s[n][1][t];
                    return u(e || t)
                }, r, r.exports, o, s, a, l)
            }
            return a[n].exports
        }
        for (var c = "function" == typeof require && require, t = 0; t < l.length; t++) u(l[t]);
        return u
    }({
        1: [function (t, e, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var i = function (t, e, n) {
                return e && r(t.prototype, e), n && r(t, n), t
            };

            function r(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            function s(t, e, n) {
                null === t && (t = Function.prototype);
                var i = Object.getOwnPropertyDescriptor(t, e);
                if (void 0 === i) {
                    var r = Object.getPrototypeOf(t);
                    return null === r ? void 0 : s(r, e, n)
                }
                if ("value" in i) return i.value;
                var o = i.get;
                return void 0 !== o ? o.call(n) : void 0
            }
            var o, a = t("../../index");
            var l = (function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(u, ((o = a) && o.__esModule ? o : {
                default: o
            }).default), i(u, [{
                key: "createExtraBound",
                value: function () {
                    var e = this;
                    ["getCache", "inViewport"].forEach(function (t) {
                        return e[t] = e[t].bind(e)
                    })
                }
            }, {
                key: "resize",
                value: function () {
                    this.resizing = !0, this.getCache(), s(Object.getPrototypeOf(u.prototype), "resize", this).call(this), this.resizing = !1
                }
            }, {
                key: "getCache",
                value: function () {
                    var o = this;
                    this.cache = [], this.dom.divs.forEach(function (t, e) {
                        t.style.display = "block", t.style.transform = "none";
                        var n = o.vars.target,
                            i = t.getBoundingClientRect(),
                            r = {
                                el: t,
                                state: !0,
                                top: i.top + n,
                                left: i.left,
                                center: i.height / 2,
                                bottom: i.bottom + n,
                                speed: t.getAttribute("data-speed") || "-1"
                            };
                        4 === e && console.log(i.top, n, r.top), o.cache.push(r)
                    }), this.vars.bounding = this.dom.section.getBoundingClientRect().height - (this.vars.native ? 0 : this.vars.height)
                }
            }, {
                key: "run",
                value: function () {
                    this.dom.divs.forEach(this.inViewport), this.dom.section.style[this.prefix] = this.getTransform(-1 * this.vars.current), s(Object.getPrototypeOf(u.prototype), "run", this).call(this)
                }
            }, {
                key: "inViewport",
                value: function (t, e) {
                    if (this.cache && !this.resizing) {
                        var n = this.cache[e],
                            i = this.vars.current,
                            r = (n.top + n.center - i) * n.speed,
                            o = Math.round(n.top + r - i);
                        0 < Math.round(n.bottom + r - i) && o < this.vars.height ? (t.classList.contains("inviewport") || t.classList.add("inviewport"), t.style.display = "block", t.style[this.prefix] = this.getTransform(r)) : t.classList.contains("inviewport") && t.classList.remove("inviewport")
                    }
                }
            }]), u);

            function u(t) {
                ! function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, u);
                var e = function (t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, Object.getPrototypeOf(u).call(this, t));
                return e.createExtraBound(), e.resizing = !1, e.cache = null, e.dom.divs = Array.prototype.slice.call(t.divs, 0), e
            }
            n.default = l
        }, {
            "../../index": 3
        }],
        2: [function (t, e, n) {
            "use strict";
            var i, r = t("./custom"),
                o = (i = r) && i.__esModule ? i : {
                    default: i
                };
            global_custom2 = o
        }, {
            "./custom": 1
        }],
        3: [function (t, e, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var i = function (t, e, n) {
                return e && r(t.prototype, e), n && r(t, n), t
            };

            function r(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            var o = c(t("dom-classes")),
                s = c(t("dom-create-element")),
                a = c(t("prefix")),
                l = c(t("virtual-scroll")),
                u = c(t("dom-events"));

            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var h, f, p = (i(d, [{
                key: "createBound",
                value: function () {
                    var e = this;
                    ["run", "calc", "debounce", "resize", "mouseUp", "mouseDown", "mouseMove", "calcScroll", "scrollTo"].forEach(function (t) {
                        return e[t] = e[t].bind(e)
                    })
                }
            }, {
                key: "init",
                value: function () {
                    this.addClasses(), this.vars.preload && this.preloadImages(), this.vars.native ? this.addFakeScrollHeight() : this.options.noscrollbar || this.addFakeScrollBar(), this.addEvents(), this.resize()
                }
            }, {
                key: "addClasses",
                value: function () {
                    var t = this.vars.native ? "native" : "virtual",
                        e = "vertical" === this.vars.direction ? "y" : "x";
                    o.default.add(this.dom.listener, "is-" + t + "-scroll"), o.default.add(this.dom.listener, e + "-scroll")
                }
            }, {
                key: "preloadImages",
                value: function () {
                    var n = this,
                        i = Array.prototype.slice.call(this.dom.listener.querySelectorAll("img"), 0);
                    i.forEach(function (t) {
                        var e = document.createElement("img");
                        u.default.once(e, "load", function () {
                            i.splice(i.indexOf(t), 1), 0 === i.length && n.resize()
                        }), e.src = t.getAttribute("src")
                    })
                }
            }, {
                key: "calc",
                value: function (t) {
                    var e = "horizontal" == this.vars.direction ? t.deltaX : t.deltaY;
                    this.vars.target += -1 * e, this.clampTarget()
                }
            }, {
                key: "debounce",
                value: function () {
                    var t = this,
                        e = this.dom.listener === document.body;
                    this.vars.target = "vertical" === this.vars.direction ? e ? window.scrollY || window.pageYOffset : this.dom.listener.scrollTop : e ? window.scrollX || window.pageXOffset : this.dom.listener.scrollLeft, clearTimeout(this.vars.timer), this.vars.ticking || (this.vars.ticking = !0, o.default.add(this.dom.listener, "is-scrolling")), this.vars.timer = setTimeout(function () {
                        t.vars.ticking = !1, o.default.remove(t.dom.listener, "is-scrolling")
                    }, 200)
                }
            }, {
                key: "run",
                value: function () {
                    if (this.vars.current += (this.vars.target - this.vars.current) * this.vars.ease, this.vars.current < .1 && (this.vars.current = 0), this.rAF = requestAnimationFrame(this.run), this.extends || (this.dom.section.style[this.prefix] = this.getTransform(-this.vars.current.toFixed(2))), !this.vars.native && !this.options.noscrollbar) {
                        var t = this.dom.scrollbar.drag.height,
                            e = "vertical" === this.vars.direction ? this.vars.height : this.vars.width,
                            n = Math.abs(this.vars.current) / (this.vars.bounding / (e - t)) + t / .5 - t,
                            i = Math.max(0, Math.min(n - t, n + t));
                        this.dom.scrollbar.drag.el.style[this.prefix] = this.getTransform(i.toFixed(2))
                    }
                }
            }, {
                key: "getTransform",
                value: function (t) {
                    return "vertical" === this.vars.direction ? "translate3d(0," + t + "px,0)" : "translate3d(" + t + "px,0,0)"
                }
            }, {
                key: "on",
                value: function (t) {
                    var e = arguments.length <= 0 || void 0 === t || t,
                        n = this.dom.listener === document.body ? window : this.dom.listener;
                    this.vars.native ? u.default.on(n, "scroll", this.debounce) : this.vs && this.vs.on(this.calc), e && this.requestAnimationFrame()
                }
            }, {
                key: "off",
                value: function (t) {
                    var e = arguments.length <= 0 || void 0 === t || t,
                        n = this.dom.listener === document.body ? window : this.dom.listener;
                    this.vars.native ? u.default.off(n, "scroll", this.debounce) : this.vs && this.vs.off(this.calc), e && this.cancelAnimationFrame()
                }
            }, {
                key: "requestAnimationFrame",
                value: (f = function () {
                    this.rAF = requestAnimationFrame(this.run)
                }, g.toString = function () {
                    return f.toString()
                }, g)
            }, {
                key: "cancelAnimationFrame",
                value: (h = function () {
                    cancelAnimationFrame(this.rAF)
                }, m.toString = function () {
                    return h.toString()
                }, m)
            }, {
                key: "addEvents",
                value: function () {
                    this.on(), u.default.on(window, "resize", this.resize)
                }
            }, {
                key: "removeEvents",
                value: function () {
                    this.off(), u.default.off(window, "resize", this.resize)
                }
            }, {
                key: "addFakeScrollBar",
                value: function () {
                    this.dom.listener.appendChild(this.dom.scrollbar.el), this.dom.scrollbar.el.appendChild(this.dom.scrollbar.drag.el), u.default.on(this.dom.scrollbar.el, "click", this.calcScroll), u.default.on(this.dom.scrollbar.el, "mousedown", this.mouseDown), u.default.on(document, "mousemove", this.mouseMove), u.default.on(document, "mouseup", this.mouseUp)
                }
            }, {
                key: "removeFakeScrollBar",
                value: function () {
                    u.default.off(this.dom.scrollbar.el, "click", this.calcScroll), u.default.off(this.dom.scrollbar.el, "mousedown", this.mouseDown), u.default.off(document, "mousemove", this.mouseMove), u.default.off(document, "mouseup", this.mouseUp), this.dom.listener.removeChild(this.dom.scrollbar.el)
                }
            }, {
                key: "mouseDown",
                value: function (t) {
                    t.preventDefault(), 1 == t.which && (this.dom.scrollbar.state.clicked = !0)
                }
            }, {
                key: "mouseUp",
                value: function (t) {
                    this.dom.scrollbar.state.clicked = !1, o.default.remove(this.dom.listener, "is-dragging")
                }
            }, {
                key: "mouseMove",
                value: function (t) {
                    this.dom.scrollbar.state.clicked && this.calcScroll(t)
                }
            }, {
                key: "addFakeScrollHeight",
                value: function () {
                    this.dom.scroll = (0, s.default)({
                        selector: "div",
                        styles: "vs-scroll-view"
                    }), this.dom.listener.appendChild(this.dom.scroll)
                }
            }, {
                key: "removeFakeScrollHeight",
                value: function () {
                    this.dom.listener.removeChild(this.dom.scroll)
                }
            }, {
                key: "calcScroll",
                value: function (t) {
                    var e = "vertical" == this.vars.direction ? t.clientY : t.clientX,
                        n = "vertical" == this.vars.direction ? this.vars.height : this.vars.width,
                        i = e * (this.vars.bounding / n);
                    o.default.add(this.dom.listener, "is-dragging"), this.vars.target = i, this.clampTarget(), this.dom.scrollbar && (this.dom.scrollbar.drag.delta = this.vars.target)
                }
            }, {
                key: "scrollTo",
                value: function (t) {
                    this.vars.native ? "vertical" == this.vars.direction ? window.scrollTo(0, t) : window.scrollTo(t, 0) : (this.vars.target = t, this.clampTarget())
                }
            }, {
                key: "resize",
                value: function () {
                    var t = "vertical" === this.vars.direction ? "height" : "width";
                    if (this.vars.height = window.innerHeight, this.vars.width = window.innerWidth, !this.extends) {
                        var e = this.dom.section.getBoundingClientRect();
                        this.vars.bounding = "vertical" === this.vars.direction ? e.height - (this.vars.native ? 0 : this.vars.height) : e.right - (this.vars.native ? 0 : this.vars.width)
                    }
                    this.vars.native || this.options.noscrollbar ? this.vars.native ? this.dom.scroll.style[t] = this.vars.bounding + "px" : this.clampTarget() : (this.dom.scrollbar.drag.height = this.vars.height * (this.vars.height / (this.vars.bounding + this.vars.height)), this.dom.scrollbar.drag.el.style[t] = this.dom.scrollbar.drag.height + "px")
                }
            }, {
                key: "clampTarget",
                value: function () {
                    this.vars.target = Math.round(Math.max(0, Math.min(this.vars.target, this.vars.bounding)))
                }
            }, {
                key: "destroy",
                value: function () {
                    this.vars.native ? (o.default.remove(this.dom.listener, "is-native-scroll"), this.removeFakeScrollHeight()) : (o.default.remove(this.dom.listener, "is-virtual-scroll"), this.options.noscrollbar || this.removeFakeScrollBar()), "vertical" === this.vars.direction ? o.default.remove(this.dom.listener, "y-scroll") : o.default.remove(this.dom.listener, "x-scroll"), this.vs && (this.vs.destroy(), this.vs = null), this.removeEvents()
                }
            }]), d);

            function d() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                ! function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, d), this.createBound(), this.options = t, this.prefix = (0, a.default)("transform"), this.rAF = void 0, this.extends = "Smooth" != this.constructor.name, this.vars = {
                    direction: this.options.direction || "vertical",
                    native: this.options.native || !1,
                    ease: this.options.ease || .075,
                    preload: this.options.preload || !1,
                    current: 0,
                    target: 0,
                    height: window.innerHeight,
                    width: window.innerWidth,
                    bounding: 0,
                    timer: null,
                    ticking: !1
                }, this.vs = this.vars.native ? null : new l.default({
                    limitInertia: this.options.vs && this.options.vs.limitInertia || !1,
                    mouseMultiplier: this.options.vs && this.options.vs.mouseMultiplier || 1,
                    touchMultiplier: this.options.vs && this.options.vs.touchMultiplier || 1.5,
                    firefoxMultiplier: this.options.vs && this.options.vs.firefoxMultiplier || 30,
                    preventTouch: this.options.vs && this.options.vs.preventTouch || !0
                }), this.dom = {
                    listener: this.options.listener || document.body,
                    section: this.options.section || document.querySelector(".vs-section") || null,
                    scrollbar: this.vars.native || this.options.noscrollbar ? null : {
                        state: {
                            clicked: !1,
                            x: 0
                        },
                        el: (0, s.default)({
                            selector: "div",
                            styles: "vs-scrollbar vs-" + this.vars.direction + " vs-scrollbar-" + this.constructor.name.toLowerCase()
                        }),
                        drag: {
                            el: (0, s.default)({
                                selector: "div",
                                styles: "vs-scrolldrag"
                            }),
                            delta: 0,
                            height: 50
                        }
                    }
                }
            }

            function m() {
                return h.apply(this, arguments)
            }

            function g() {
                return f.apply(this, arguments)
            }
            n.default = p, window.Smooth = p
        }, {
            "dom-classes": 5,
            "dom-create-element": 6,
            "dom-events": 7,
            prefix: 11,
            "virtual-scroll": 17
        }],
        4: [function (t, e, n) {
            "use strict";
            var o = Object.prototype.toString,
                s = Object.prototype.hasOwnProperty;

            function a(t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            }
            e.exports = function (t) {
                if (!t) return console.warn("bindAll requires at least one argument.");
                var e = Array.prototype.slice.call(arguments, 1);
                if (0 === e.length)
                    for (var n in t) s.call(t, n) && "function" == typeof t[n] && "[object Function]" == o.call(t[n]) && e.push(n);
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    t[r] = a(t[r], t)
                }
            }
        }, {}],
        5: [function (t, e, n) {
            var r = t("indexof"),
                i = /\s+/,
                o = Object.prototype.toString;

            function s(t) {
                if (t.classList) return t.classList;
                var e = t.className.replace(/^\s+|\s+$/g, "").split(i);
                return "" === e[0] && e.shift(), e
            }

            function a(t, e) {
                if (t.classList) t.classList.add(e);
                else {
                    var n = s(t);
                    ~r(n, e) || n.push(e), t.className = n.join(" ")
                }
            }

            function l(t, e) {
                return t.classList ? t.classList.contains(e) : !!~r(s(t), e)
            }

            function u(t, e) {
                if ("[object RegExp]" == o.call(e)) return c(t, e);
                if (t.classList) t.classList.remove(e);
                else {
                    var n = s(t),
                        i = r(n, e);
                    ~i && n.splice(i, 1), t.className = n.join(" ")
                }
            }

            function c(t, e, n) {
                for (var i = Array.prototype.slice.call(s(t)), r = 0; r < i.length; r++) e.test(i[r]) && u(t, i[r])
            }
            e.exports = s, e.exports.add = a, e.exports.contains = l, e.exports.has = l, e.exports.toggle = function (t, e) {
                if (t.classList) return t.classList.toggle(e);
                l(t, e) ? u(t, e) : a(t, e)
            }, e.exports.remove = u, e.exports.removeMatching = c
        }, {
            indexof: 8
        }],
        6: [function (t, e, n) {
            e.exports = function (t) {
                t = t || {};
                var e = document.createElement(t.selector);
                if (t.attr)
                    for (var n in t.attr) t.attr.hasOwnProperty(n) && e.setAttribute(n, t.attr[n]);
                return "a" == t.selector && t.link && (e.href = t.link, t.target && e.setAttribute("target", t.target)), "img" == t.selector && t.src && (e.src = t.src, t.lazyload && (e.style.opacity = 0, e.onload = function () {
                    e.style.opacity = 1
                })), t.id && (e.id = t.id), t.styles && (e.className = t.styles), t.html && (e.innerHTML = t.html), t.children && e.appendChild(t.children), e
            }
        }, {}],
        7: [function (t, e, n) {
            var r = t("synthetic-dom-events"),
                s = function (t, e, n, i) {
                    return t.addEventListener(e, n, i || !1)
                },
                a = function (t, e, n, i) {
                    return t.removeEventListener(e, n, i || !1)
                },
                i = function (t, e, n) {
                    var i = r(e, n);
                    t.dispatchEvent(i)
                };
            document.addEventListener || (s = function (t, e, n) {
                return t.attachEvent("on" + e, n)
            }), document.removeEventListener || (a = function (t, e, n) {
                return t.detachEvent("on" + e, n)
            }), document.dispatchEvent || (i = function (t, e, n) {
                var i = r(e, n);
                return t.fireEvent("on" + i.type, i)
            }), e.exports = {
                on: s,
                off: a,
                once: function (n, i, r, o) {
                    s(n, i, function t(e) {
                        a(n, i, t, o), r(e)
                    }, o)
                },
                emit: i
            }
        }, {
            "synthetic-dom-events": 12
        }],
        8: [function (t, e, n) {
            var i = [].indexOf;
            e.exports = function (t, e) {
                if (i) return t.indexOf(e);
                for (var n = 0; n < t.length; ++n)
                    if (t[n] === e) return n;
                return -1
            }
        }, {}],
        9: [function (t, e, n) {
            (function () {
                function t(t, e, n, i) {
                    this.stability = null != t ? Math.abs(t) : 8, this.sensitivity = null != e ? 1 + Math.abs(e) : 100, this.tolerance = null != n ? 1 + Math.abs(n) : 1.1, this.delay = null != i ? i : 150, this.lastUpDeltas = function () {
                        var t, e, n;
                        for (n = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : e <= t; 1 <= e ? t++ : t--) n.push(null);
                        return n
                    }.call(this), this.lastDownDeltas = function () {
                        var t, e, n;
                        for (n = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : e <= t; 1 <= e ? t++ : t--) n.push(null);
                        return n
                    }.call(this), this.deltasTimestamp = function () {
                        var t, e, n;
                        for (n = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : e <= t; 1 <= e ? t++ : t--) n.push(null);
                        return n
                    }.call(this)
                }(null != n ? n : this).Lethargy = (t.prototype.check = function (t) {
                    var e;
                    return null != (t = t.originalEvent || t).wheelDelta ? e = t.wheelDelta : null != t.deltaY ? e = -40 * t.deltaY : null == t.detail && 0 !== t.detail || (e = -40 * t.detail), this.deltasTimestamp.push(Date.now()), this.deltasTimestamp.shift(), 0 < e ? (this.lastUpDeltas.push(e), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(e), this.lastDownDeltas.shift(), this.isInertia(-1))
                }, t.prototype.isInertia = function (t) {
                    var e, n, i, r, o, s, a;
                    return null === (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) && (i = e.slice(0, this.stability), n = e.slice(this.stability, 2 * this.stability), a = i.reduce(function (t, e) {
                        return t + e
                    }), o = n.reduce(function (t, e) {
                        return t + e
                    }), s = a / i.length, r = o / n.length, Math.abs(s) < Math.abs(r * this.tolerance) && this.sensitivity < Math.abs(r) && t)
                }, t.prototype.showLastUpDeltas = function () {
                    return this.lastUpDeltas
                }, t.prototype.showLastDownDeltas = function () {
                    return this.lastDownDeltas
                }, t)
            }).call(this)
        }, {}],
        10: [function (t, e, n) {
            "use strict";
            var l = Object.prototype.hasOwnProperty,
                u = Object.prototype.propertyIsEnumerable;
            e.exports = Object.assign || function (t, e) {
                for (var n, i, r = function (t) {
                        if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
                        return Object(t)
                    }(t), o = 1; o < arguments.length; o++) {
                    for (var s in n = Object(arguments[o])) l.call(n, s) && (r[s] = n[s]);
                    if (Object.getOwnPropertySymbols) {
                        i = Object.getOwnPropertySymbols(n);
                        for (var a = 0; a < i.length; a++) u.call(n, i[a]) && (r[i[a]] = n[i[a]])
                    }
                }
                return r
            }
        }, {}],
        11: [function (t, e, n) {
            var r = "undefined" != typeof document ? document.createElement("p").style : {},
                o = ["O", "ms", "Moz", "Webkit"],
                i = /([A-Z])/g,
                s = {};

            function a(t) {
                if (t = t.replace(/-([a-z])/g, function (t, e) {
                        return e.toUpperCase()
                    }), void 0 !== r[t]) return t;
                for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = o.length; n--;) {
                    var i = o[n] + e;
                    if (void 0 !== r[i]) return i
                }
                return t
            }
            e.exports = function (t) {
                return t in s ? s[t] : s[t] = a(t)
            }, e.exports.dash = function (t) {
                return t = a(t), i.test(t) && (t = "-" + t.replace(i, "-$1"), i.lastIndex = 0), t.toLowerCase()
            }
        }, {}],
        12: [function (t, e, n) {
            window;
            var p = document || {},
                d = (p.documentElement, !0);
            try {
                p.createEvent("KeyEvents")
            } catch (t) {
                d = !1
            }
            e.exports = p.createEvent ? function (t, e) {
                e = e || {};
                var n = g(t),
                    i = n;
                "KeyboardEvent" === n && d && (n = "KeyEvents", i = "KeyEvent");
                var r = p.createEvent(n),
                    o = "init" + i,
                    s = "function" == typeof r[o] ? o : "initEvent",
                    a = m[s],
                    l = [],
                    u = {};
                e.type = t;
                for (var c = 0; c < a.length; ++c) {
                    var h = e[f = a[c]];
                    void 0 === h && (h = r[f]), u[f] = !0, l.push(h)
                }
                for (var f in r[s].apply(r, l), "KeyboardEvent" === n && (r = function (t, e) {
                        return t.ctrlKey == (e.ctrlKey || !1) && t.altKey == (e.altKey || !1) && t.shiftKey == (e.shiftKey || !1) && t.metaKey == (e.metaKey || !1) && t.keyCode == (e.keyCode || 0) && t.charCode == (e.charCode || 0) || ((t = document.createEvent("Event")).initEvent(e.type, e.bubbles, e.cancelable), t.ctrlKey = e.ctrlKey || !1, t.altKey = e.altKey || !1, t.shiftKey = e.shiftKey || !1, t.metaKey = e.metaKey || !1, t.keyCode = e.keyCode || 0, t.charCode = e.charCode || 0), t
                    }(r, e)), e) u[f] || (r[f] = e[f]);
                return r
            } : function (t, e) {
                e = e || {};
                var n = p.createEventObject();
                for (var i in n.type = t, e) void 0 !== e[i] && (n[i] = e[i]);
                return n
            };
            var m = t("./init.json"),
                r = t("./types.json"),
                g = function () {
                    var e = {};
                    for (var t in r)
                        for (var n = r[t], i = 0; i < n.length; i++) e[n[i]] = t;
                    return function (t) {
                        return e[t] || "Event"
                    }
                }()
        }, {
            "./init.json": 13,
            "./types.json": 14
        }],
        13: [function (t, e, n) {
            e.exports = {
                initEvent: ["type", "bubbles", "cancelable"],
                initUIEvent: ["type", "bubbles", "cancelable", "view", "detail"],
                initMouseEvent: ["type", "bubbles", "cancelable", "view", "detail", "screenX", "screenY", "clientX", "clientY", "ctrlKey", "altKey", "shiftKey", "metaKey", "button", "relatedTarget"],
                initMutationEvent: ["type", "bubbles", "cancelable", "relatedNode", "prevValue", "newValue", "attrName", "attrChange"],
                initKeyboardEvent: ["type", "bubbles", "cancelable", "view", "ctrlKey", "altKey", "shiftKey", "metaKey", "keyCode", "charCode"],
                initKeyEvent: ["type", "bubbles", "cancelable", "view", "ctrlKey", "altKey", "shiftKey", "metaKey", "keyCode", "charCode"]
            }
        }, {}],
        14: [function (t, e, n) {
            e.exports = {
                MouseEvent: ["click", "mousedown", "mouseup", "mouseover", "mousemove", "mouseout"],
                KeyboardEvent: ["keydown", "keyup", "keypress"],
                MutationEvent: ["DOMSubtreeModified", "DOMNodeInserted", "DOMNodeRemoved", "DOMNodeRemovedFromDocument", "DOMNodeInsertedIntoDocument", "DOMAttrModified", "DOMCharacterDataModified"],
                HTMLEvents: ["load", "unload", "abort", "error", "select", "change", "submit", "reset", "focus", "blur", "resize", "scroll"],
                UIEvent: ["DOMFocusIn", "DOMFocusOut", "DOMActivate"]
            }
        }, {}],
        15: [function (t, e, n) {
            function i() {}
            i.prototype = {
                on: function (t, e, n) {
                    var i = this.e || (this.e = {});
                    return (i[t] || (i[t] = [])).push({
                        fn: e,
                        ctx: n
                    }), this
                },
                once: function (t, e, n) {
                    var i = this;

                    function r() {
                        i.off(t, r), e.apply(n, arguments)
                    }
                    return r._ = e, this.on(t, r, n)
                },
                emit: function (t) {
                    for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), i = 0, r = n.length; i < r; i++) n[i].fn.apply(n[i].ctx, e);
                    return this
                },
                off: function (t, e) {
                    var n = this.e || (this.e = {}),
                        i = n[t],
                        r = [];
                    if (i && e)
                        for (var o = 0, s = i.length; o < s; o++) i[o].fn !== e && i[o].fn._ !== e && r.push(i[o]);
                    return r.length ? n[t] = r : delete n[t], this
                }
            }, e.exports = i
        }, {}],
        16: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
                return JSON.parse(JSON.stringify(t))
            }
        }, {}],
        17: [function (t, e, n) {
            "use strict";
            var i = t("object-assign"),
                r = t("tiny-emitter"),
                o = t("lethargy").Lethargy,
                s = t("./support"),
                a = (t("./clone"), t("bindall-standalone")),
                l = "virtualscroll";
            e.exports = p;
            var u = 37,
                c = 38,
                h = 39,
                f = 40;

            function p(t) {
                a(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"), this.el = window, t && t.el && (this.el = t.el, delete t.el), this.options = i({
                    mouseMultiplier: 1,
                    touchMultiplier: 2,
                    firefoxMultiplier: 15,
                    keyStep: 120,
                    preventTouch: !1,
                    unpreventTouchClass: "vs-touchmove-allowed",
                    limitInertia: !1
                }, t), this.options.limitInertia && (this._lethargy = new o), this._emitter = new r, this._event = {
                    y: 0,
                    x: 0,
                    deltaX: 0,
                    deltaY: 0
                }, this.touchStartX = null, this.touchStartY = null, this.bodyTouchAction = null
            }
            p.prototype._notify = function (t) {
                var e = this._event;
                e.x += e.deltaX, e.y += e.deltaY, this._emitter.emit(l, {
                    x: e.x,
                    y: e.y,
                    deltaX: e.deltaX,
                    deltaY: e.deltaY,
                    originalEvent: t
                })
            }, p.prototype._onWheel = function (t) {
                var e = this.options;
                if (!this._lethargy || !1 !== this._lethargy.check(t)) {
                    var n = this._event;
                    n.deltaX = t.wheelDeltaX || -1 * t.deltaX, n.deltaY = t.wheelDeltaY || -1 * t.deltaY, s.isFirefox && 1 == t.deltaMode && (n.deltaX *= e.firefoxMultiplier, n.deltaY *= e.firefoxMultiplier), n.deltaX *= e.mouseMultiplier, n.deltaY *= e.mouseMultiplier, this._notify(t)
                }
            }, p.prototype._onMouseWheel = function (t) {
                if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
                    var e = this._event;
                    e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0, e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta, this._notify(t)
                }
            }, p.prototype._onTouchStart = function (t) {
                var e = t.targetTouches ? t.targetTouches[0] : t;
                this.touchStartX = e.pageX, this.touchStartY = e.pageY
            }, p.prototype._onTouchMove = function (t) {
                var e = this.options;
                e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault();
                var n = this._event,
                    i = t.targetTouches ? t.targetTouches[0] : t;
                n.deltaX = (i.pageX - this.touchStartX) * e.touchMultiplier, n.deltaY = (i.pageY - this.touchStartY) * e.touchMultiplier, this.touchStartX = i.pageX, this.touchStartY = i.pageY, this._notify(t)
            }, p.prototype._onKeyDown = function (t) {
                var e = this._event;
                switch (e.deltaX = e.deltaY = 0, t.keyCode) {
                    case u:
                    case c:
                        e.deltaY = this.options.keyStep;
                        break;
                    case h:
                    case f:
                        e.deltaY = -this.options.keyStep;
                        break;
                    default:
                        return
                }
                this._notify(t)
            }, p.prototype._bind = function () {
                s.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel), s.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel), s.hasTouch && (this.el.addEventListener("touchstart", this._onTouchStart), this.el.addEventListener("touchmove", this._onTouchMove)), s.hasPointer && s.hasTouchWin && (this.bodyTouchAction = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", this.el.addEventListener("MSPointerDown", this._onTouchStart, !0), this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)), s.hasKeyDown && document.addEventListener("keydown", this._onKeyDown)
            }, p.prototype._unbind = function () {
                s.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel), s.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel), s.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart), this.el.removeEventListener("touchmove", this._onTouchMove)), s.hasPointer && s.hasTouchWin && (document.body.style.msTouchAction = this.bodyTouchAction, this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0), this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)), s.hasKeyDown && document.removeEventListener("keydown", this._onKeyDown)
            }, p.prototype.on = function (t, e) {
                this._emitter.on(l, t, e);
                var n = this._emitter.e;
                n && n[l] && 1 === n[l].length && this._bind()
            }, p.prototype.off = function (t, e) {
                this._emitter.off(l, t, e);
                var n = this._emitter.e;
                (!n[l] || n[l].length <= 0) && this._unbind()
            }, p.prototype.reset = function () {
                var t = this._event;
                t.x = 0, t.y = 0
            }, p.prototype.destroy = function () {
                this._emitter.off(), this._unbind()
            }
        }, {
            "./clone": 16,
            "./support": 18,
            "bindall-standalone": 4,
            lethargy: 9,
            "object-assign": 10,
            "tiny-emitter": 15
        }],
        18: [function (t, e, n) {
            "use strict";
            e.exports = {
                hasWheelEvent: "onwheel" in document,
                hasMouseWheelEvent: "onmousewheel" in document,
                hasTouch: "ontouchstart" in document,
                hasTouchWin: navigator.msMaxTouchPoints && 1 < navigator.msMaxTouchPoints,
                hasPointer: !!window.navigator.msPointerEnabled,
                hasKeyDown: "onkeydown" in document,
                isFirefox: -1 < navigator.userAgent.indexOf("Firefox")
            }
        }, {}]
    }, {}, [2]);