! function() {
	"use strict";

	function t() {
		return (0, e.useEffect)(function() {
			var t = new Date;
			p(void 0, void 0, Promise, function() {
				return v(this, function(e) {
					switch (e.label) {
						case 0:
							return [4, h(t)];
						case 1:
							return e.sent(), [2]
					}
				})
			}).catch(function(e) {
				console.error("Error calling shouldIssueGlobalPrivacyControlStatus")
			})
		}, []), null
	}
	var n = {
			n: function(e) {
				var t = e && e.__esModule ? function() {
					return e.default
				} : function() {
					return e
				};
				return n.d(t, {
					a: t
				}), t
			},
			d: function(e, t) {
				for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
					enumerable: !0,
					get: t[r]
				})
			},
			o: function(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}
		},
		r = CoreUtilities,
		e = React,
		o = n.n(e),
		i = ReactDOM,
		g = CoreRobloxUtilities,
		w = HeaderScripts,
		m = "Roblox.UserSettings.GlobalPrivacyControl",
		S = -1,
		x = 864e5,
		k = 864e5,
		C = 10,
		a = Roblox,
		c = a.EnvironmentUrls.userSettingsApi,
		l = a.EnvironmentUrls.universalAppConfigurationApi,
		u = function() {
			return {
				withCredentials: !0,
				url: c + "/v1/user-settings/gpc"
			}
		},
		s = function() {
			return {
				withCredentials: !0,
				url: l + "/v1/behaviors/user-settings-global-privacy-control-policy/content"
			}
		},
		E = function() {
			var e = s();
			return r.httpService.get(e)
		},
		P = function() {
			var e = u();
			return r.httpService.post(e)
		},
		f = function(e, a, c, l) {
			return new(c = c || Promise)(function(r, t) {
				function n(e) {
					try {
						i(l.next(e))
					} catch (e) {
						t(e)
					}
				}

				function o(e) {
					try {
						i(l.throw(e))
					} catch (e) {
						t(e)
					}
				}

				function i(e) {
					var t;
					e.done ? r(e.value) : ((t = e.value) instanceof c ? t : new c(function(e) {
						e(t)
					})).then(n, o)
				}
				i((l = l.apply(e, a || [])).next())
			})
		},
		M = function(r, n) {
			var o, i, a, c = {
					label: 0,
					sent: function() {
						if (1 & a[0]) throw a[1];
						return a[1]
					},
					trys: [],
					ops: []
				},
				e = {
					next: t(0),
					throw: t(1),
					return: t(2)
				};
			return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
				return this
			}), e;

			function t(t) {
				return function(e) {
					return function(t) {
						if (o) throw new TypeError("Generator is already executing.");
						for (; c;) try {
							if (o = 1, i && (a = 2 & t[0] ? i.return : t[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, t[1])).done) return a;
							switch (i = 0, a && (t = [2 & t[0], a.value]), t[0]) {
								case 0:
								case 1:
									a = t;
									break;
								case 4:
									return c.label++, {
										value: t[1],
										done: !1
									};
								case 5:
									c.label++, i = t[1], t = [0];
									continue;
								case 7:
									t = c.ops.pop(), c.trys.pop();
									continue;
								default:
									if (!(a = 0 < (a = c.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
										c = 0;
										continue
									}
									if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
										c.label = t[1];
										break
									}
									if (6 === t[0] && c.label < a[1]) {
										c.label = a[1], a = t;
										break
									}
									if (a && c.label < a[2]) {
										c.label = a[2], c.ops.push(t);
										break
									}
									a[2] && c.ops.pop(), c.trys.pop();
									continue
							}
							t = n.call(r, c)
						} catch (e) {
							t = [6, e], i = 0
						} finally {
							o = a = 0
						}
						if (5 & t[0]) throw t[1];
						return {
							value: t[0] ? t[1] : void 0,
							done: !0
						}
					}([t, e])
				}
			}
		},
		h = function(y) {
			return f(void 0, void 0, void 0, function() {
				var t, r, n, o, i, a, c, l, u, s, f, h, p, v, d, b;
				return M(this, function(e) {
					switch (e.label) {
						case 0:
							if (!navigator.globalPrivacyControl) return [2];
							if (null !== (b = null === (b = null === w.deviceMeta || void 0 === w.deviceMeta ? void 0 : w.deviceMeta.getDeviceMeta()) || void 0 === b ? void 0 : b.isInApp) && void 0 !== b && b) return [2];
							if (!w.authenticatedUser.isAuthenticated) return [2];
							e.label = 1;
						case 1:
							return e.trys.push([1, 3, , 4]), [4, E()];
						case 2:
							return i = e.sent(), t = i.data.gpcVersion, r = i.data.cooldownPeriodInMs, n = i.data.cooldownPeriodFuzzyInMs, [3, 4];
						case 3:
							return e.sent(), t = S, r = x, n = k, [3, 4];
						case 4:
							try {
								o = g.localStorageService.getLocalStorage(m)
							} catch (e) {
								throw e instanceof SyntaxError && (o = {}), e
							}
							if (o && (i = w.authenticatedUser.id, a = o[i])) {
								c = a.nextTimeToCheck;
								try {
									if (s = Date.parse(c), Number.isFinite(s) && (u = y.getTime(), l = a.gpcVersion, Number.isFinite(l) && l === t && u < s)) return [2]
								} catch (e) {
									console.error("Error with local storage, proceeding with globalPrivacyControl")
								}
							}
							e.label = 5;
						case 5:
							return e.trys.push([5, 7, , 8]), [4, P()];
						case 6:
							return e.sent(), [3, 8];
						case 7:
							return e.sent(), console.error("Error setting globalPrivacyControl"), [2];
						case 8:
							try {
								null === o && (o = {}), u = y.getTime(), f = u + r, h = Math.floor(Math.random() * n), s = f + h, f = new Date(s), (h = {}).gpcVersion = t, h.nextTimeToCheck = f.toISOString(), p = w.authenticatedUser.id, o[p] = h, Object.keys(o).length > C && (v = null, d = 1 / 0, Object.keys(o).filter(function(e) {
									return Number(e) !== p
								}).forEach(function(e) {
									var t = Number(e),
										e = Date.parse(o[t].nextTimeToCheck);
									e < d && (v = t, d = e)
								}), v && delete o[v]), g.localStorageService.setLocalStorage(m, o)
							} catch (e) {
								if (console.error("Error updating local storage for handleGlobalPrivacyControl"), e instanceof SyntaxError) return g.localStorageService.removeLocalStorage(m), [2];
								throw e
							}
							return [2]
					}
				})
			})
		},
		p = function(e, a, c, l) {
			return new(c = c || Promise)(function(r, t) {
				function n(e) {
					try {
						i(l.next(e))
					} catch (e) {
						t(e)
					}
				}

				function o(e) {
					try {
						i(l.throw(e))
					} catch (e) {
						t(e)
					}
				}

				function i(e) {
					var t;
					e.done ? r(e.value) : ((t = e.value) instanceof c ? t : new c(function(e) {
						e(t)
					})).then(n, o)
				}
				i((l = l.apply(e, a || [])).next())
			})
		},
		v = function(r, n) {
			var o, i, a, c = {
					label: 0,
					sent: function() {
						if (1 & a[0]) throw a[1];
						return a[1]
					},
					trys: [],
					ops: []
				},
				e = {
					next: t(0),
					throw: t(1),
					return: t(2)
				};
			return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
				return this
			}), e;

			function t(t) {
				return function(e) {
					return function(t) {
						if (o) throw new TypeError("Generator is already executing.");
						for (; c;) try {
							if (o = 1, i && (a = 2 & t[0] ? i.return : t[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, t[1])).done) return a;
							switch (i = 0, a && (t = [2 & t[0], a.value]), t[0]) {
								case 0:
								case 1:
									a = t;
									break;
								case 4:
									return c.label++, {
										value: t[1],
										done: !1
									};
								case 5:
									c.label++, i = t[1], t = [0];
									continue;
								case 7:
									t = c.ops.pop(), c.trys.pop();
									continue;
								default:
									if (!(a = 0 < (a = c.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
										c = 0;
										continue
									}
									if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
										c.label = t[1];
										break
									}
									if (6 === t[0] && c.label < a[1]) {
										c.label = a[1], a = t;
										break
									}
									if (a && c.label < a[2]) {
										c.label = a[2], c.ops.push(t);
										break
									}
									a[2] && c.ops.pop(), c.trys.pop();
									continue
							}
							t = n.call(r, c)
						} catch (e) {
							t = [6, e], i = 0
						} finally {
							o = a = 0
						}
						if (5 & t[0]) throw t[1];
						return {
							value: t[0] ? t[1] : void 0,
							done: !0
						}
					}([t, e])
				}
			}
		};
	(0, r.ready)(function() {
		var e = document.getElementById("global-privacy-control-checker-container");
		null !== e && (0, i.render)(o().createElement(t, null), e)
	})
}();
//# sourceMappingURL=https://js.rbxcdn.com/56b8f8ffe102aef8bff0c26e3bbfdb41-globalPrivacyControlChecker.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("GlobalPrivacyControlChecker");