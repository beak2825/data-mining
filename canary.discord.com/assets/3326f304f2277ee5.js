"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["43676"], {
		857168: function(t, e, r) {
			var n = r(471540).charAt;
			t.exports = function(t, e, r) {
				return e + (r ? n(t, e).length : 1)
			}
		},
		992032: function(t, e, r) {
			var n = r(449285),
				i = TypeError;
			t.exports = function(t, e) {
				if (!delete t[e]) throw new i("Cannot delete property " + n(e) + " of " + n(t))
			}
		},
		518187: function(t, e, r) {
			r(35282);
			var n = r(580983),
				i = r(556585),
				o = r(16721),
				a = r(621523),
				c = r(751736),
				u = r(436207),
				s = c("species"),
				l = RegExp.prototype;
			t.exports = function(t, e, r, f) {
				var p = c(t),
					v = !a(function() {
						var e = {};
						return e[p] = function() {
							return 7
						}, 7 !== "" [t](e)
					}),
					g = v && !a(function() {
						var e = !1,
							r = /a/;
						return "split" === t && ((r = {}).constructor = {}, r.constructor[s] = function() {
							return r
						}, r.flags = "", r[p] = /./ [p]), r.exec = function() {
							return e = !0, null
						}, r[p](""), !e
					});
				if (!v || !g || r) {
					var d = /./ [p],
						x = e(p, "" [t], function(t, e, r, i, a) {
							var c = e.exec;
							return c === o || c === l.exec ? v && !a ? {
								done: !0,
								value: n(d, e, r, i)
							} : {
								done: !0,
								value: n(t, r, e, i)
							} : {
								done: !1
							}
						});
					i(String.prototype, t, x[0]), i(l, p, x[1])
				}
				f && u(l[p], "sham", !0)
			}
		},
		814559: function(t, e, r) {
			var n = r(46015),
				i = r(527160),
				o = Math.floor,
				a = n("".charAt),
				c = n("".replace),
				u = n("".slice),
				s = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
				l = /\$([$&'`]|\d{1,2})/g;
			t.exports = function(t, e, r, n, f, p) {
				var v = r + t.length,
					g = n.length,
					d = l;
				return void 0 !== f && (f = i(f), d = s), c(p, d, function(i, c) {
					var s;
					switch (a(c, 0)) {
						case "$":
							return "$";
						case "&":
							return t;
						case "`":
							return u(e, 0, r);
						case "'":
							return u(e, v);
						case "<":
							s = f[u(c, 1, -1)];
							break;
						default:
							var l = +c;
							if (0 === l) return i;
							if (l > g) {
								var p = o(l / 10);
								if (0 === p) return i;
								if (p <= g) return void 0 === n[p - 1] ? a(c, 1) : n[p - 1] + a(c, 1);
								return i
							}
							s = n[l - 1]
					}
					return void 0 === s ? "" : s
				})
			}
		},
		933009: function(t, e, r) {
			var n = r(434431),
				i = r(796138),
				o = r(751736)("match");
			t.exports = function(t) {
				var e;
				return n(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" === i(t))
			}
		},
		820616: function(t, e, r) {
			var n = r(580983),
				i = r(179122),
				o = r(880181),
				a = r(796138),
				c = r(16721),
				u = TypeError;
			t.exports = function(t, e) {
				var r = t.exec;
				if (o(r)) {
					var s = n(r, t, e);
					return null !== s && i(s), s
				}
				if ("RegExp" === a(t)) return n(c, t, e);
				throw new u("RegExp#exec called on incompatible receiver")
			}
		},
		16721: function(t, e, r) {
			var n, i, o = r(580983),
				a = r(46015),
				c = r(382698),
				u = r(503463),
				s = r(751954),
				l = r(571078),
				f = r(713411),
				p = r(199838).get,
				v = r(923646),
				g = r(204954),
				d = l("native-string-replace", String.prototype.replace),
				x = RegExp.prototype.exec,
				h = x,
				E = a("".charAt),
				y = a("".indexOf),
				I = a("".replace),
				R = a("".slice),
				b = (i = /b*/g, o(x, n = /a/, "a"), o(x, i, "a"), 0 !== n.lastIndex || 0 !== i.lastIndex),
				A = s.BROKEN_CARET,
				w = void 0 !== /()??/.exec("")[1];
			(b || w || A || v || g) && (h = function(t) {
				var e, r, n, i, a, s, l, v = p(this),
					g = c(t),
					S = v.raw;
				if (S) return S.lastIndex = this.lastIndex, e = o(h, S, g), this.lastIndex = S.lastIndex, e;
				var $ = v.groups,
					m = A && this.sticky,
					k = o(u, this),
					C = this.source,
					T = 0,
					_ = g;
				if (m && (-1 === y(k = I(k, "y", ""), "g") && (k += "g"), _ = R(g, this.lastIndex), this.lastIndex > 0 && (!this.multiline || this.multiline && "\n" !== E(g, this.lastIndex - 1)) && (C = "(?: " + C + ")", _ = " " + _, T++), r = RegExp("^(?:" + C + ")", k)), w && (r = RegExp("^" + C + "$(?!\\s)", k)), b && (n = this.lastIndex), i = o(x, m ? r : this, _), m ? i ? (i.input = R(i.input, T), i[0] = R(i[0], T), i.index = this.lastIndex, this.lastIndex += i[0].length) : this.lastIndex = 0 : b && i && (this.lastIndex = this.global ? i.index + i[0].length : n), w && i && i.length > 1 && o(d, i[0], r, function() {
						for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (i[a] = void 0)
					}), i && $)
					for (a = 0, i.groups = s = f(null); a < $.length; a++) s[(l = $[a])[0]] = i[l[1]];
				return i
			}), t.exports = h
		},
		503463: function(t, e, r) {
			var n = r(179122);
			t.exports = function() {
				var t = n(this),
					e = "";
				return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.unicodeSets && (e += "v"), t.sticky && (e += "y"), e
			}
		},
		817282: function(t, e, r) {
			var n = r(580983),
				i = r(77025),
				o = r(568033),
				a = r(503463),
				c = RegExp.prototype;
			t.exports = function(t) {
				var e = t.flags;
				return !(void 0 === e && !("flags" in c) && !i(t, "flags") && o(c, t)) ? e : n(a, t)
			}
		},
		751954: function(t, e, r) {
			var n = r(621523),
				i = r(127849).RegExp,
				o = n(function() {
					var t = i("a", "y");
					return t.lastIndex = 2, null !== t.exec("abcd")
				}),
				a = o || n(function() {
					return !i("a", "y").sticky
				});
			t.exports = {
				BROKEN_CARET: o || n(function() {
					var t = i("^r", "gy");
					return t.lastIndex = 2, null !== t.exec("str")
				}),
				MISSED_STICKY: a,
				UNSUPPORTED_Y: o
			}
		},
		923646: function(t, e, r) {
			var n = r(621523),
				i = r(127849).RegExp;
			t.exports = n(function() {
				var t = i(".", "s");
				return !(t.dotAll && t.test("\n") && "s" === t.flags)
			})
		},
		204954: function(t, e, r) {
			var n = r(621523),
				i = r(127849).RegExp;
			t.exports = n(function() {
				var t = i("(?<a>b)", "g");
				return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c")
			})
		},
		471540: function(t, e, r) {
			var n = r(46015),
				i = r(77826),
				o = r(382698),
				a = r(497464),
				c = n("".charAt),
				u = n("".charCodeAt),
				s = n("".slice),
				l = function(t) {
					return function(e, r) {
						var n, l, f = o(a(e)),
							p = i(r),
							v = f.length;
						return p < 0 || p >= v ? t ? "" : void 0 : (n = u(f, p)) < 55296 || n > 56319 || p + 1 === v || (l = u(f, p + 1)) < 56320 || l > 57343 ? t ? c(f, p) : n : t ? s(f, p, p + 2) : (n - 55296 << 10) + (l - 56320) + 65536
					}
				};
			t.exports = {
				codeAt: l(!1),
				charAt: l(!0)
			}
		},
		413496: function(t, e, r) {
			var n = r(507604),
				i = r(127849),
				o = r(46015),
				a = r(275717),
				c = r(176682),
				u = r(436207),
				s = r(713411),
				l = r(264750).f,
				f = r(568033),
				p = r(933009),
				v = r(382698),
				g = r(817282),
				d = r(751954),
				x = r(316096),
				h = r(556585),
				E = r(621523),
				y = r(77025),
				I = r(199838).enforce,
				R = r(108015),
				b = r(751736),
				A = r(923646),
				w = r(204954),
				S = b("match"),
				$ = i.RegExp,
				m = $.prototype,
				k = i.SyntaxError,
				C = o(m.exec),
				T = o("".charAt),
				_ = o("".replace),
				O = o("".indexOf),
				M = o("".slice),
				D = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
				K = /a/g,
				N = /a/g,
				P = new $(K) !== K,
				U = d.MISSED_STICKY,
				Y = d.UNSUPPORTED_Y,
				B = n && (!P || U || A || w || E(function() {
					return N[S] = !1, $(K) !== K || $(N) === N || "/a/i" !== String($(K, "i"))
				})),
				q = function(t) {
					for (var e, r = t.length, n = 0, i = "", o = !1; n <= r; n++) {
						if ("\\" === (e = T(t, n))) {
							i += e + T(t, ++n);
							continue
						}
						o || "." !== e ? ("[" === e ? o = !0 : "]" === e && (o = !1), i += e) : i += "[\\s\\S]"
					}
					return i
				},
				j = function(t) {
					for (var e, r = t.length, n = 0, i = "", o = [], a = s(null), c = !1, u = !1, l = 0, f = ""; n <= r; n++) {
						if ("\\" === (e = T(t, n))) e += T(t, ++n);
						else if ("]" === e) c = !1;
						else if (!c) switch (!0) {
							case "[" === e:
								c = !0;
								break;
							case "(" === e:
								if (i += e, "?:" === M(t, n + 1, n + 3)) continue;
								C(D, M(t, n + 1)) && (n += 2, u = !0), l++;
								continue;
							case ">" === e && u:
								if ("" === f || y(a, f)) throw new k("Invalid capture group name");
								a[f] = !0, o[o.length] = [f, l], u = !1, f = "";
								continue
						}
						u ? f += e : i += e
					}
					return [i, o]
				};
			if (a("RegExp", B)) {
				for (var z = function(t, e) {
						var r, n, i, o, a, s, l = f(m, this),
							d = p(t),
							x = void 0 === e,
							h = [],
							E = t;
						if (!l && d && x && t.constructor === z) return t;
						if ((d || f(m, t)) && (t = t.source, x && (e = g(E))), t = void 0 === t ? "" : v(t), e = void 0 === e ? "" : v(e), E = t, A && "dotAll" in K && (n = !!e && O(e, "s") > -1) && (e = _(e, /s/g, "")), r = e, U && "sticky" in K && (i = !!e && O(e, "y") > -1) && Y && (e = _(e, /y/g, "")), w && (t = (o = j(t))[0], h = o[1]), a = c($(t, e), l ? this : m, z), (n || i || h.length) && (s = I(a), n && (s.dotAll = !0, s.raw = z(q(t), r)), i && (s.sticky = !0), h.length && (s.groups = h)), t !== E) try {
							u(a, "source", "" === E ? "(?:)" : E)
						} catch (t) {}
						return a
					}, F = l($), G = 0; F.length > G;) x(z, $, F[G++]);
				m.constructor = z, z.prototype = m, h(i, "RegExp", z, {
					constructor: !0
				})
			}
			R("RegExp")
		},
		433524: function(t, e, r) {
			var n = r(507604),
				i = r(923646),
				o = r(796138),
				a = r(573078),
				c = r(199838).get,
				u = RegExp.prototype,
				s = TypeError;
			n && i && a(u, "dotAll", {
				configurable: !0,
				get: function() {
					if (this !== u) {
						if ("RegExp" === o(this)) return !!c(this).dotAll;
						throw new s("Incompatible receiver, RegExp required")
					}
				}
			})
		},
		35282: function(t, e, r) {
			var n = r(98405),
				i = r(16721);
			n({
				target: "RegExp",
				proto: !0,
				forced: /./.exec !== i
			}, {
				exec: i
			})
		},
		704826: function(t, e, r) {
			var n = r(636881),
				i = r(580983),
				o = r(46015),
				a = r(518187),
				c = r(621523),
				u = r(179122),
				s = r(880181),
				l = r(655152),
				f = r(77826),
				p = r(554148),
				v = r(382698),
				g = r(497464),
				d = r(857168),
				x = r(3831),
				h = r(814559),
				E = r(820616),
				y = r(751736)("replace"),
				I = Math.max,
				R = Math.min,
				b = o([].concat),
				A = o([].push),
				w = o("".indexOf),
				S = o("".slice),
				$ = "$0" === "a".replace(/./, "$0"),
				m = !!/./ [y] && "" === /./ [y]("a", "$0");
			a("replace", function(t, e, r) {
				var o = m ? "$" : "$0";
				return [function(t, r) {
					var n = g(this),
						o = l(t) ? void 0 : x(t, y);
					return o ? i(o, t, n, r) : i(e, v(n), t, r)
				}, function(t, i) {
					var a = u(this),
						c = v(t);
					if ("string" == typeof i && -1 === w(i, o) && -1 === w(i, "$<")) {
						var l = r(e, a, c, i);
						if (l.done) return l.value
					}
					var g = s(i);
					g || (i = v(i));
					var x = a.global;
					x && (T = a.unicode, a.lastIndex = 0);
					for (var y = []; null !== (O = E(a, c)) && (A(y, O), x);) {
						;
						"" === v(O[0]) && (a.lastIndex = d(c, p(a.lastIndex), T))
					}
					for (var $ = "", m = 0, k = 0; k < y.length; k++) {
						for (var C, T, _, O = y[k], M = v(O[0]), D = I(R(f(O.index), c.length), 0), K = [], N = 1; N < O.length; N++) A(K, void 0 === (C = O[N]) ? C : String(C));
						var P = O.groups;
						if (g) {
							var U = b([M], K, D, c);
							void 0 !== P && A(U, P), _ = v(n(i, void 0, U))
						} else _ = h(M, c, D, K, P, i);
						D >= m && ($ += S(c, m, D) + _, m = D + M.length)
					}
					return $ + S(c, m)
				}]
			}, !!c(function() {
				var t = /./;
				return t.exec = function() {
					var t = [];
					return t.groups = {
						a: "7"
					}, t
				}, "7" !== "".replace(t, "$<a>")
			}) || !$ || m)
		}
	}
]);
//# sourceMappingURL=3326f304f2277ee5.js.map