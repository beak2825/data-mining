(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["50946"], {
		658722: function(t) {
			"use strict";
			t.exports = function(t, r) {
				var n = r.length,
					e = t.length;
				if (e > n) return !1;
				if (e === n) return t === r;
				t: for (var o = 0, i = 0; o < e; o++) {
					for (var u = t.charCodeAt(o); i < n;)
						if (r.charCodeAt(i++) === u) continue t;
					return !1
				}
				return !0
			}
		},
		56135: function(t, r, n) {
			t.exports = n(325237).Symbol
		},
		903425: function(t, r, n) {
			var e = n(56135),
				o = n(440693),
				i = n(766598),
				u = e ? e.toStringTag : void 0;
			t.exports = function(t) {
				return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : u && u in Object(t) ? o(t) : i(t)
			}
		},
		788255: function(t, r, n) {
			t.exports = "object" == typeof n.g && n.g && n.g.Object === Object && n.g
		},
		440693: function(t, r, n) {
			var e = n(56135),
				o = Object.prototype,
				i = o.hasOwnProperty,
				u = o.toString,
				c = e ? e.toStringTag : void 0;
			t.exports = function(t) {
				var r = i.call(t, c),
					n = t[c];
				try {
					t[c] = void 0;
					var e = !0
				} catch (t) {}
				var o = u.call(t);
				return e && (r ? t[c] = n : delete t[c]), o
			}
		},
		766598: function(t) {
			var r = Object.prototype.toString;
			t.exports = function(t) {
				return r.call(t)
			}
		},
		325237: function(t, r, n) {
			var e = n(788255),
				o = "object" == typeof self && self && self.Object === Object && self;
			t.exports = e || o || Function("return this")()
		},
		954955: function(t, r, n) {
			var e = n(661233),
				o = n(586769),
				i = n(675769),
				u = Math.max,
				c = Math.min;
			t.exports = function(t, r, n) {
				var f, a, s, v, p, l, d = 0,
					g = !1,
					h = !1,
					x = !0;
				if ("function" != typeof t) throw TypeError("Expected a function");

				function b(r) {
					var n = f,
						e = a;
					return f = a = void 0, d = r, v = t.apply(e, n)
				}

				function y(t) {
					var n = t - l,
						e = t - d;
					return void 0 === l || n >= r || n < 0 || h && e >= s
				}

				function m() {
					var t, n, e, i = o();
					if (y(i)) return j(i);
					p = setTimeout(m, (t = i - l, n = i - d, e = r - t, h ? c(e, s - n) : e))
				}

				function j(t) {
					return (p = void 0, x && f) ? b(t) : (f = a = void 0, v)
				}

				function k() {
					var t, n = o(),
						e = y(n);
					if (f = arguments, a = this, l = n, e) {
						if (void 0 === p) return d = t = l, p = setTimeout(m, r), g ? b(t) : v;
						if (h) return clearTimeout(p), p = setTimeout(m, r), b(l)
					}
					return void 0 === p && (p = setTimeout(m, r)), v
				}
				return r = i(r) || 0, e(n) && (g = !!n.leading, s = (h = "maxWait" in n) ? u(i(n.maxWait) || 0, r) : s, x = "trailing" in n ? !!n.trailing : x), k.cancel = function() {
					void 0 !== p && clearTimeout(p), d = 0, f = l = a = p = void 0
				}, k.flush = function() {
					return void 0 === p ? v : j(o())
				}, k
			}
		},
		661233: function(t) {
			t.exports = function(t) {
				var r = typeof t;
				return null != t && ("object" == r || "function" == r)
			}
		},
		533206: function(t) {
			t.exports = function(t) {
				return null != t && "object" == typeof t
			}
		},
		158698: function(t, r, n) {
			var e = n(903425),
				o = n(533206);
			t.exports = function(t) {
				return "symbol" == typeof t || o(t) && "[object Symbol]" == e(t)
			}
		},
		586769: function(t, r, n) {
			var e = n(325237);
			t.exports = function() {
				return e.Date.now()
			}
		},
		675769: function(t, r, n) {
			var e = n(661233),
				o = n(158698),
				i = 0 / 0,
				u = /^\s+|\s+$/g,
				c = /^[-+]0x[0-9a-f]+$/i,
				f = /^0b[01]+$/i,
				a = /^0o[0-7]+$/i,
				s = parseInt;
			t.exports = function(t) {
				if ("number" == typeof t) return t;
				if (o(t)) return i;
				if (e(t)) {
					var r = "function" == typeof t.valueOf ? t.valueOf() : t;
					t = e(r) ? r + "" : r
				}
				if ("string" != typeof t) return 0 === t ? t : +t;
				t = t.replace(u, "");
				var n = f.test(t);
				return n || a.test(t) ? s(t.slice(2), n ? 2 : 8) : c.test(t) ? i : +t
			}
		},
		72570: function(t, r, n) {
			"use strict";
			var e = n(621523);
			t.exports = function(t, r) {
				var n = [][t];
				return !!n && e(function() {
					n.call(null, r || function() {
						return 1
					}, 1)
				})
			}
		},
		573078: function(t, r, n) {
			"use strict";
			var e = n(494465),
				o = n(117895);
			t.exports = function(t, r, n) {
				return n.get && e(n.get, r, {
					getter: !0
				}), n.set && e(n.set, r, {
					setter: !0
				}), o.f(t, r, n)
			}
		},
		742850: function(t, r, n) {
			"use strict";
			var e = n(46015),
				o = Error,
				i = e("".replace),
				u = String(new o("zxcasd").stack),
				c = /\n\s*at [^:]*:[^\n]*/,
				f = c.test(u);
			t.exports = function(t, r) {
				if (f && "string" == typeof t && !o.prepareStackTrace)
					for (; r--;) t = i(t, c, "");
				return t
			}
		},
		176682: function(t, r, n) {
			"use strict";
			var e = n(880181),
				o = n(434431),
				i = n(769827);
			t.exports = function(t, r, n) {
				var u, c;
				return i && e(u = r.constructor) && u !== n && o(c = u.prototype) && c !== n.prototype && i(t, c), t
			}
		},
		759319: function(t, r, n) {
			"use strict";
			var e = n(382698);
			t.exports = function(t, r) {
				return void 0 === t ? arguments.length < 2 ? "" : r : e(t)
			}
		},
		108015: function(t, r, n) {
			"use strict";
			var e = n(154028),
				o = n(573078),
				i = n(751736),
				u = n(507604),
				c = i("species");
			t.exports = function(t) {
				var r = e(t);
				u && r && !r[c] && o(r, c, {
					configurable: !0,
					get: function() {
						return this
					}
				})
			}
		},
		642613: function(t, r, n) {
			"use strict";
			var e = n(98405),
				o = n(46015),
				i = n(896471),
				u = n(527160),
				c = n(914331),
				f = n(992032),
				a = n(382698),
				s = n(621523),
				v = n(992914),
				p = n(72570),
				l = n(358932),
				d = n(635464),
				g = n(287353),
				h = n(920542),
				x = [],
				b = o(x.sort),
				y = o(x.push),
				m = s(function() {
					x.sort(void 0)
				}),
				j = s(function() {
					x.sort(null)
				}),
				k = p("sort"),
				O = !s(function() {
					if (g) return g < 70;
					if (!l || !(l > 3)) {
						if (d) return !0;
						if (h) return h < 603;
						var t, r, n, e, o = "";
						for (t = 65; t < 76; t++) {
							switch (r = String.fromCharCode(t), t) {
								case 66:
								case 69:
								case 70:
								case 72:
									n = 3;
									break;
								case 68:
								case 71:
									n = 4;
									break;
								default:
									n = 2
							}
							for (e = 0; e < 47; e++) x.push({
								k: r + e,
								v: n
							})
						}
						for (x.sort(function(t, r) {
								return r.v - t.v
							}), e = 0; e < x.length; e++) r = x[e].k.charAt(0), o.charAt(o.length - 1) !== r && (o += r);
						return "DGBEFHACIJK" !== o
					}
				});
			e({
				target: "Array",
				proto: !0,
				forced: m || !j || !k || !O
			}, {
				sort: function(t) {
					void 0 !== t && i(t);
					var r, n, e = u(this);
					if (O) return void 0 === t ? b(e) : b(e, t);
					var o = [],
						s = c(e);
					for (n = 0; n < s; n++) n in e && y(o, e[n]);
					for (v(o, function(r, n) {
							return void 0 === n ? -1 : void 0 === r ? 1 : void 0 !== t ? +t(r, n) || 0 : a(r) > a(n) ? 1 : -1
						}), r = c(o), n = 0; n < r;) e[n] = o[n++];
					for (; n < s;) f(e, n++);
					return e
				}
			})
		}
	}
]);
//# sourceMappingURL=2666944303f0c707.js.map