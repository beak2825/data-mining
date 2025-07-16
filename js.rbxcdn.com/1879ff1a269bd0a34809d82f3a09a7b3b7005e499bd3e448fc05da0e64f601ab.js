! function() {
	"use strict";
	var e = {
			n: function(t) {
				var n = t && t.__esModule ? function() {
					return t.default
				} : function() {
					return t
				};
				return e.d(n, {
					a: n
				}), n
			},
			d: function(t, n) {
				for (var r in n) e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, {
					enumerable: !0,
					get: n[r]
				})
			},
			o: function(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}
		},
		t = CoreUtilities,
		n = React,
		r = e.n(n),
		a = ReactDOM,
		i = WebBlox,
		c = ReactUtilities,
		o = HeaderScripts,
		u = function(e) {
			var t = e.label,
				n = e.children,
				a = e.translate;
			return r().createElement("li", {
				className: "profile-stat"
			}, r().createElement(i.Typography, {
				variant: "body1",
				color: "secondary"
			}, a(t)), r().createElement(i.Typography, {
				variant: "body1"
			}, n))
		},
		l = "Heading.Statistics",
		s = "Label.JoinDate",
		f = "Label.PlaceVisits",
		d = Roblox,
		m = d.EnvironmentUrls.gamesApi,
		h = d.EnvironmentUrls.usersApi,
		v = function(e) {
			return {
				url: m + "/v2/users/" + e + "/games",
				withCredentials: !0
			}
		},
		b = "Public",
		p = function(e, t, n, r) {
			return new(n || (n = Promise))((function(a, i) {
				function c(e) {
					try {
						u(r.next(e))
					} catch (e) {
						i(e)
					}
				}

				function o(e) {
					try {
						u(r.throw(e))
					} catch (e) {
						i(e)
					}
				}

				function u(e) {
					var t;
					e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
						e(t)
					}))).then(c, o)
				}
				u((r = r.apply(e, t || [])).next())
			}))
		},
		y = function(e, t) {
			var n, r, a, i, c = {
				label: 0,
				sent: function() {
					if (1 & a[0]) throw a[1];
					return a[1]
				},
				trys: [],
				ops: []
			};
			return i = {
				next: o(0),
				throw: o(1),
				return: o(2)
			}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
				return this
			}), i;

			function o(i) {
				return function(o) {
					return function(i) {
						if (n) throw new TypeError("Generator is already executing.");
						for (; c;) try {
							if (n = 1, r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, i[1])).done) return a;
							switch (r = 0, a && (i = [2 & i[0], a.value]), i[0]) {
								case 0:
								case 1:
									a = i;
									break;
								case 4:
									return c.label++, {
										value: i[1],
										done: !1
									};
								case 5:
									c.label++, r = i[1], i = [0];
									continue;
								case 7:
									i = c.ops.pop(), c.trys.pop();
									continue;
								default:
									if (!(a = c.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
										c = 0;
										continue
									}
									if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
										c.label = i[1];
										break
									}
									if (6 === i[0] && c.label < a[1]) {
										c.label = a[1], a = i;
										break
									}
									if (a && c.label < a[2]) {
										c.label = a[2], c.ops.push(i);
										break
									}
									a[2] && c.ops.pop(), c.trys.pop();
									continue
							}
							i = t.call(e, c)
						} catch (e) {
							i = [6, e], r = 0
						} finally {
							n = a = 0
						}
						if (5 & i[0]) throw i[1];
						return {
							value: i[0] ? i[1] : void 0,
							done: !0
						}
					}([i, o])
				}
			}
		},
		w = function(e) {
			return t.httpService.get(function(e) {
				return {
					url: h + "/v1/users/" + e,
					withCredentials: !0
				}
			}(e), {}).then((function(e) {
				return e.data
			}))
		},
		g = function(e) {
			var a, c = e.translate,
				d = s,
				m = f,
				h = (0, n.useState)(void 0),
				g = h[0],
				E = h[1],
				S = (0, n.useState)(void 0),
				P = S[0],
				k = S[1],
				x = (a = /\/users\/(\d+)\//g.exec(window.location.pathname)) ? a[1] : null,
				C = x ? parseInt(x, 10) : o.authenticatedUser.id,
				U = (0, n.useCallback)((function() {
					C === o.authenticatedUser.id ? E(new Date(o.authenticatedUser.created)) : w(C).then((function(e) {
						(null == e ? void 0 : e.created) && E(new Date(e.created))
					})).catch((function() {
						return E(void 0)
					}))
				}), [C]),
				N = (0, n.useCallback)((function(e, n) {
					(function(e, n) {
						return p(void 0, void 0, Promise, (function() {
							var r;
							return y(this, (function(a) {
								switch (a.label) {
									case 0:
										return r = {
											accessFilter: b,
											cursor: n,
											limit: 50
										}, [4, t.httpService.get(v(e), r)];
									case 1:
										return [2, a.sent().data]
								}
							}))
						}))
					})(C, n).then((function(t) {
						if (t) {
							var r = t.nextPageCursor,
								a = t.data,
								i = (null != e ? e : []).concat(a);
							r && n !== r ? N(i, r) : k(i)
						} else k(e)
					})).catch((function() {
						k(e)
					}))
				}), [C]),
				O = (0, n.useRef)(null);
			(0, n.useEffect)((function() {
				if (O.current) {
					var e = new IntersectionObserver((function(e, t) {
						e.some((function(e) {
							return e.isIntersecting
						})) && (N(), U(), t.disconnect())
					}));
					return e.observe(O.current),
						function() {
							return e.disconnect()
						}
				}
			}), [O, N, U]);
			var F = null == P ? void 0 : P.reduce((function(e, t) {
				return e + (Number.isNaN(t.placeVisits) ? 0 : t.placeVisits)
			}), 0);
			return r().createElement(r().Fragment, null, r().createElement("h2", {
				className: "profile-stats-header"
			}, c(l)), r().createElement(i.Paper, {
				ref: O
			}, r().createElement("ul", {
				className: "profile-stats"
			}, null != g && r().createElement(u, {
				translate: c,
				label: d
			}, r().createElement("time", {
				dateTime: g.toISOString()
			}, g.toLocaleDateString())), null != F && r().createElement(u, {
				translate: c,
				label: m
			}, t.numberFormat.getNumberFormat(F)))))
		},
		E = (0, c.withTranslations)((function(e) {
			var t = e.translate,
				a = (0, n.useState)(document.body.classList.contains("dark-theme")),
				c = a[0],
				o = a[1];
			return (0, n.useEffect)((function() {
				var e = new MutationObserver((function() {
					o(document.body.classList.contains("dark-theme"))
				}));
				return e.observe(document.body, {
						attributeFilter: ["class"]
					}),
					function() {
						return e.disconnect()
					}
			}), []), r().createElement(i.UIThemeProvider, {
				theme: c ? "dark" : "light"
			}, r().createElement(g, {
				translate: t
			}))
		}), {
			common: [],
			feature: "Feature.Profile"
		});
	(0, t.ready)((function() {
		var e = document.getElementById("profile-statistics-container");
		if (e) {
			var t = (0, i.createCache)();
			(0, a.render)(r().createElement(i.CacheProvider, {
				cache: t
			}, r().createElement(E, null)), e)
		}
	}))
}();
//# sourceMappingURL=https://js.rbxcdn.com/a4258e0fe7806debb91762b8165dee80-profileStatistics.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("ProfileStatistics");