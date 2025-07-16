(() => {
	"use strict";
	var e = {
			697497: function(e, r, t) {
				t.d(r, {
					H: () => i
				});
				let n = (e, r) => {
						let t = a(e, r);
						if (t > 0) {
							let n = o(e, r),
								a = (t / e.length + t / r.length + (t - n) / t) / 3;
							return a < .7 ? a : a + .1 * l(e, r) * (1 - a)
						}
						return 0
					},
					a = (e, r) => {
						let t = Math.floor(Math.max(e.length, r.length) / 2) - 1,
							n = [],
							a = 0;
						for (var o = 0; o < e.length; o++)
							for (var l = Math.max(0, o - t); l <= Math.min(r.length, o + t); l++)
								if (e[o] === r[l] && !n[l]) {
									n[l] = !0, a++;
									break
								} return a
					},
					o = (e, r) => {
						let t = Math.floor(Math.max(e.length, r.length) / 2) - 1,
							n = {
								a: "",
								b: ""
							},
							a = [];
						for (let o = 0; o < e.length; o++)
							for (let l = Math.max(0, o - t); l <= Math.min(r.length, o + t); l++)
								if (e[o] === r[l] && !a[l]) {
									n.a += e[o], a[l] = !0;
									break
								} a = [];
						for (let o = 0; o < r.length; o++)
							for (let l = Math.max(0, o - t); l <= Math.min(e.length, o + t); l++)
								if (r[o] === e[l] && !a[l]) {
									n.b += r[o], a[l] = !0;
									break
								} let o = 0;
						for (let e = 0; e < n.a.length; e++) n.a[e] !== n.b[e] && o++;
						return Math.floor(o / 2)
					},
					l = (e, r) => {
						let t = 0;
						for (; t < 4; t++)
							if (e[t] !== r[t]) return t;
						return ++t
					};

				function i(e, r, t) {
					let {
						caseSensitive: a = !1
					} = null != t ? t : {};
					return a ? n(e, r) : n(e.toLowerCase(), r.toLowerCase())
				}
			},
			158633: function(e, r, t) {
				t(361932), t(187205), t(388685), t(642613), t(35282), t(781311), t(413496), t(433524), t(539854);
				var n = t(658722),
					a = t.n(n),
					o = t(624138),
					l = t(697497),
					i = t(886118);

				function u(e) {
					return e.split(",").map(e => e.trim()).filter(e => "" !== e)
				}

				function f(e) {
					return "string" == typeof e ? [e.trim()] : e.map(e => e.trim())
				}
				self.addEventListener("message", e => {
					let {
						data: {
							id: r,
							searchTerm: t,
							searchStrings: n,
							searchType: c,
							sortType: s,
							jaroWinklerSearchThreshold: h
						}
					} = e, p = [];
					for (let e of u(t)) switch (c) {
						case i.S.REGEX:
							p.push(... function(e, r) {
								let t = RegExp(e, "i");
								return r.reduce((e, r, n) => f(r).some(e => t.test(e)) ? [...e, n] : e, [])
							}(e, n));
							break;
						case i.S.FUZZY:
							p.push(... function(e, r) {
								return r.reduce((r, t, n) => f(t).some(r => (function(e, r) {
									let t = (0, o.Fv)(e),
										n = (0, o.Fv)(r);
									return a()(e, r) || a()(t, r) || a()(t, n)
								})(e, r)) ? [...r, n] : r, [])
							}(e, n));
							break;
						case i.S.JARO_WINKLER:
							p.push(... function(e, r, t) {
								return r.reduce((r, n, a) => Math.max(...f(n).map(r => (0, l.H)(e, r))) >= t ? [...r, a] : r, [])
							}(e, n, h));
							break;
						case i.S.EXACT:
							p.push(... function(e, r) {
								return r.reduce((r, t, n) => f(t).some(r => r.toLocaleLowerCase() === e.toLocaleLowerCase()) ? [...r, n] : r, [])
							}(e, n))
					}
					let d = [...new Set(p)];
					s === i.E.JARO_WINKLER && (d = function(e, r, t) {
						let n = u(e);
						return t.map(e => {
							let t = f(r[e]);
							return {
								index: e,
								rank: Math.max(...n.flatMap(e => t.map(r => (0, l.H)(e, r))))
							}
						}).sort((e, r) => r.rank - e.rank).map(e => e.index)
					}(t, n, d));
					let m = {
						id: r,
						foundItemIndexes: d
					};
					self.postMessage(m)
				})
			},
			886118: function(e, r, t) {
				t.d(r, {
					E: () => l,
					S: () => o
				});
				var n, a, o = ((n = {}).FUZZY = "fuzzy", n.EXACT = "exact", n.REGEX = "regex", n.JARO_WINKLER = "jaro_winkler", n),
					l = ((a = {}).NONE = "none", a.JARO_WINKLER = "jaro_winkler", a)
			},
			624138: function(e, r, t) {
				t.d(r, {
					Fv: () => n.Fv
				});
				var n = t(468194)
			},
			468194: function(e, r, t) {
				t.d(r, {
					Fv: () => a
				}), t(35282), t(388685), t(704826), t(513431);
				let n = /[\u0300-\u036f]/g;
				null == String.prototype.normalize || (e => e.normalize("NFD").replace(n, "").normalize("NFC"));
				let a = null == String.prototype.normalize ? e => e : function(e) {
					let r = t(510085),
						n = "";
					return [...e.normalize("NFD")].forEach(e => {
						var t;
						n += null != (t = r[e]) ? t : e
					}), n.normalize("NFD").toLocaleLowerCase()
				}
			}
		},
		r = {};

	function t(n) {
		var a = r[n];
		if (void 0 !== a) return a.exports;
		var o = r[n] = {
			exports: {}
		};
		return e[n].call(o.exports, o, o.exports, t), o.exports
	}
	t.m = e, t.x = () => {
		var e = t.O(void 0, ["26767", "43676", "73956", "52328"], function() {
			return t(158633)
		});
		return t.O(e)
	}, t.n = e => {
		var r = e && e.__esModule ? () => e.default : () => e;
		return t.d(r, {
			a: r
		}), r
	}, t.d = (e, r) => {
		for (var n in r) t.o(r, n) && !t.o(e, n) && Object.defineProperty(e, n, {
			enumerable: !0,
			get: r[n]
		})
	}, t.f = {}, t.e = e => Promise.all(Object.keys(t.f).reduce((r, n) => (t.f[n](e, r), r), [])), t.u = e => "" + ({
		26767: "31bcef2ea8539653",
		43676: "3326f304f2277ee5",
		52328: "03c10480fa205fd8",
		73956: "d17a63d82b16b409"
	})[e] + ".js", t.g = (() => {
		if ("object" == typeof globalThis) return globalThis;
		try {
			return this || Function("return this")()
		} catch (e) {
			if ("object" == typeof window) return window
		}
	})(), t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), (() => {
		var e = [];
		t.O = (r, n, a, o) => {
			if (n) {
				o = o || 0;
				for (var l = e.length; l > 0 && e[l - 1][2] > o; l--) e[l] = e[l - 1];
				e[l] = [n, a, o];
				return
			}
			for (var i = 1 / 0, l = 0; l < e.length; l++) {
				for (var [n, a, o] = e[l], u = !0, f = 0; f < n.length; f++)(!1 & o || i >= o) && Object.keys(t.O).every(e => t.O[e](n[f])) ? n.splice(f--, 1) : (u = !1, o < i && (i = o));
				if (u) {
					e.splice(l--, 1);
					var c = a();
					void 0 !== c && (r = c)
				}
			}
			return r
		}
	})(), t.p = "/assets/", t.rv = () => "1.3.1", (() => {
		var e = t.x;
		t.x = () => Promise.all(["26767", "43676", "73956", "52328"].map(t.e, t)).then(e)
	})(), (() => {
		var e = {
			56558: 1
		};
		t.f.i = (r, n) => {
			e[r] || importScripts(t.p + t.u(r))
		};
		var r = this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || [],
			n = r.push.bind(r);
		r.push = r => {
			var [a, o, l] = r;
			for (var i in o) t.o(o, i) && (t.m[i] = o[i]);
			for (l && l(t); a.length;) e[a.pop()] = 1;
			n(r)
		}
	})(), t.ruid = "bundler=rspack@1.3.1", t.x()
})();
//# sourceMappingURL=1bde59fe0bbd7a92.js.map