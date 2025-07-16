! function() {
	"use strict";

	function t() {
		return document.getElementById(s)
	}

	function r() {
		var e = (S() || {}).universeId;
		return null != (e = I(void 0 === e ? "" : e).gameDetails) && e.licenseDescription ? b().createElement("div", {
			className: "game-licensed-badges-container"
		}, b().createElement("div", {
			className: "game-licensed-badge"
		}, b().createElement("div", {
			className: "game-licensed-badge-info"
		}, null == e ? void 0 : e.licenseDescription))) : null
	}
	var a = {
			n: function(e) {
				var t = e && e.__esModule ? function() {
					return e.default
				} : function() {
					return e
				};
				return a.d(t, {
					a: t
				}), t
			},
			d: function(e, t) {
				for (var n in t) a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, {
					enumerable: !0,
					get: t[n]
				})
			},
			o: function(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}
		},
		i = CoreUtilities,
		h = React,
		b = a.n(h),
		o = ReactDOM,
		l = ReactUtilities,
		c = TanstackQuery,
		w = Roblox,
		n = w.EnvironmentUrls.apiGatewayUrl,
		x = function(e) {
			return i.urlService.getUrlWithLocale("/info/age-recommendations-policy", e)
		},
		u = function() {
			return n + "/experience-guidelines-api/experience-guidelines/get-age-recommendation"
		},
		E = function(e) {
			var t = {
					url: u(),
					retryable: !0,
					withCredentials: !0
				},
				e = {
					universeId: e
				};
			return i.httpService.post(t, e)
		},
		e = {
			common: [],
			feature: "Feature.GameDetails"
		},
		s = "game-detail-meta-data",
		S = function() {
			var e, a = (null === (e = t()) || void 0 === e ? void 0 : e.dataset) || {};
			return Object.keys(a).reduce(function(e, t) {
				var n = a[t].toLowerCase();
				return e[t] = "true" === n || "false" !== n && a[t], e
			}, {})
		},
		D = "Suitable for everyone",
		k = "Content Maturity",
		R = "N/A",
		N = "Label.ContentMaturity",
		C = "Label.Unavailable",
		U = "Label.ContainsStrongLanguageWarningWithGuideline",
		d = function(e, o, l, c) {
			return new(l = l || Promise)(function(n, t) {
				function a(e) {
					try {
						i(c.next(e))
					} catch (e) {
						t(e)
					}
				}

				function r(e) {
					try {
						i(c.throw(e))
					} catch (e) {
						t(e)
					}
				}

				function i(e) {
					var t;
					e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
						e(t)
					})).then(a, r)
				}
				i((c = c.apply(e, o || [])).next())
			})
		},
		m = function(n, a) {
			var r, i, o, l = {
					label: 0,
					sent: function() {
						if (1 & o[0]) throw o[1];
						return o[1]
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
						if (r) throw new TypeError("Generator is already executing.");
						for (; l;) try {
							if (r = 1, i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, t[1])).done) return o;
							switch (i = 0, o && (t = [2 & t[0], o.value]), t[0]) {
								case 0:
								case 1:
									o = t;
									break;
								case 4:
									return l.label++, {
										value: t[1],
										done: !1
									};
								case 5:
									l.label++, i = t[1], t = [0];
									continue;
								case 7:
									t = l.ops.pop(), l.trys.pop();
									continue;
								default:
									if (!(o = 0 < (o = l.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
										l = 0;
										continue
									}
									if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
										l.label = t[1];
										break
									}
									if (6 === t[0] && l.label < o[1]) {
										l.label = o[1], o = t;
										break
									}
									if (o && l.label < o[2]) {
										l.label = o[2], l.ops.push(t);
										break
									}
									o[2] && l.ops.pop(), l.trys.pop();
									continue
							}
							t = a.call(n, l)
						} catch (e) {
							t = [6, e], i = 0
						} finally {
							r = o = 0
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
		f = function(e) {
			return n + "/asset-text-filter-settings/public/universe/" + e
		},
		B = function(n) {
			return d(void 0, void 0, Promise, function() {
				var t;
				return m(this, function(e) {
					switch (e.label) {
						case 0:
							return t = {
								url: f(n),
								retryable: !0,
								withCredentials: !0
							}, [4, i.httpService.get(t)];
						case 1:
							return [2, e.sent().data]
					}
				})
			})
		},
		P = function(e, o, l, c) {
			return new(l = l || Promise)(function(n, t) {
				function a(e) {
					try {
						i(c.next(e))
					} catch (e) {
						t(e)
					}
				}

				function r(e) {
					try {
						i(c.throw(e))
					} catch (e) {
						t(e)
					}
				}

				function i(e) {
					var t;
					e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
						e(t)
					})).then(a, r)
				}
				i((c = c.apply(e, o || [])).next())
			})
		},
		G = function(n, a) {
			var r, i, o, l = {
					label: 0,
					sent: function() {
						if (1 & o[0]) throw o[1];
						return o[1]
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
						if (r) throw new TypeError("Generator is already executing.");
						for (; l;) try {
							if (r = 1, i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, t[1])).done) return o;
							switch (i = 0, o && (t = [2 & t[0], o.value]), t[0]) {
								case 0:
								case 1:
									o = t;
									break;
								case 4:
									return l.label++, {
										value: t[1],
										done: !1
									};
								case 5:
									l.label++, i = t[1], t = [0];
									continue;
								case 7:
									t = l.ops.pop(), l.trys.pop();
									continue;
								default:
									if (!(o = 0 < (o = l.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
										l = 0;
										continue
									}
									if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
										l.label = t[1];
										break
									}
									if (6 === t[0] && l.label < o[1]) {
										l.label = o[1], o = t;
										break
									}
									if (o && l.label < o[2]) {
										l.label = o[2], l.ops.push(t);
										break
									}
									o[2] && l.ops.pop(), l.trys.pop();
									continue
							}
							t = a.call(n, l)
						} catch (e) {
							t = [6, e], i = 0
						} finally {
							r = o = 0
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
		p = (0, l.withTranslations)(function(e) {
			var t = e.isDisplayAgeRecommendationDetails,
				n = e.translate,
				a = (0, h.useState)(!1),
				r = a[0],
				i = a[1],
				o = (0, h.useState)(!1),
				l = (o[0], o[1]),
				c = (0, h.useState)(!1),
				u = c[0],
				s = c[1],
				e = (0, h.useState)(!1),
				a = e[0],
				d = e[1],
				o = (0, h.useState)(null),
				c = o[0],
				m = o[1],
				e = (0, h.useState)(null),
				o = e[0],
				f = e[1],
				e = (S() || {}).universeId,
				p = void 0 === e ? "" : e,
				g = (0, h.useCallback)(function() {
					return P(void 0, void 0, void 0, function() {
						var t;
						return G(this, function(e) {
							switch (e.label) {
								case 0:
									return e.trys.push([0, 2, , 3]), [4, B(p)];
								case 1:
									return t = e.sent(), d(!0 === (null == t ? void 0 : t.Profanity)), [3, 3];
								case 2:
									return e.sent(), d(!1), [3, 3];
								case 3:
									return [2]
							}
						})
					})
				}, [p]),
				v = (0, h.useCallback)(function() {
					return P(void 0, void 0, void 0, function() {
						var t, n;
						return G(this, function(e) {
							switch (e.label) {
								case 0:
									i(!0), e.label = 1;
								case 1:
									return e.trys.push([1, 3, 4, 5]), [4, E(p)];
								case 2:
									return (t = e.sent(), n = t.data, f(n.headerDisplayName), null == (null === (t = n.ageRecommendationDetails) || void 0 === t ? void 0 : t.summary.ageRecommendation)) ? (m(null), [2]) : (t = (t = null === (t = n.ageRecommendationDetails.descriptorUsages) || void 0 === t ? void 0 : t.map(function(e) {
										return e.descriptor.displayName
									}).join(", ")) || (0 === n.ageRecommendationDetails.summary.ageRecommendation.minimumAge ? D : ""), t = {
										descriptorDisplayNames: t,
										ageRecommendationBracket: null !== (t = n.ageRecommendationDetails.summary.ageRecommendation.displayNameWithHeaderShort) && void 0 !== t ? t : n.ageRecommendationDetails.summary.ageRecommendation.displayName
									}, m(t), n = null === (n = n.ageRecommendationDetails.descriptorUsages) || void 0 === n ? void 0 : n.find(function(e) {
										return "strong-language" === e.name
									}), s(!0 === (null == n ? void 0 : n.contains)), [3, 5]);
								case 3:
									return e.sent(), l(!0), m(null), s(!1), f(null), [3, 5];
								case 4:
									return i(!1), [7];
								case 5:
									return [2]
							}
						})
					})
				}, [p]),
				y = (0, h.useCallback)(function() {
					return P(void 0, void 0, void 0, function() {
						return G(this, function(e) {
							switch (e.label) {
								case 0:
									return e.trys.push([0, 3, 4, 5]), i(!0), [4, v()];
								case 1:
									return e.sent(), [4, g()];
								case 2:
									return e.sent(), [3, 5];
								case 3:
									return e.sent(), l(!0), m(null), d(!1), f(null), s(!1), [3, 5];
								case 4:
									return i(!1), [7];
								case 5:
									return [2]
							}
						})
					})
				}, [v, g]);
			(0, h.useEffect)(function() {
				y()
			}, [y]);
			e = (new w.Intl).getRobloxLocale();
			if (t) {
				if (c) return b().createElement("div", {
					className: "age-rating-details col-xs-12 section-content"
				}, b().createElement("a", {
					className: "age-rating-age-bracket text-lead text-link",
					href: x(e)
				}, c.ageRecommendationBracket), b().createElement("span", {
					className: "age-rating-display-name text"
				}, c.descriptorDisplayNames));
				if (!r) return b().createElement("div", {
					className: "age-rating-details col-xs-12 section-content"
				}, b().createElement("a", {
					className: "age-rating-age-bracket text-lead text-link",
					href: x(e)
				}, null !== (o = null != o ? o : n(N)) && void 0 !== o ? o : k), b().createElement("span", {
					className: "age-rating-display-name text"
				}, null !== (o = n(C)) && void 0 !== o ? o : R))
			}
			if (c && (a || u)) {
				n = n(U, {
					guideline: c.ageRecommendationBracket
				});
				return b().createElement("a", {
					className: "age-recommendation-title text",
					href: "#game-age-recommendation-details"
				}, "" !== n ? n : c.ageRecommendationBracket)
			}
			return c ? b().createElement("a", {
				className: "age-recommendation-title text",
				href: "#game-age-recommendation-details-container"
			}, c.ageRecommendationBracket) : b().createElement(b().Fragment, null)
		}, e),
		e = CoreRobloxUtilities,
		g = (HeaderScripts, w.EnvironmentUrls.gamesApi, w.EnvironmentUrls.voiceApi, function(e, o, l, c) {
			return new(l = l || Promise)(function(n, t) {
				function a(e) {
					try {
						i(c.next(e))
					} catch (e) {
						t(e)
					}
				}

				function r(e) {
					try {
						i(c.throw(e))
					} catch (e) {
						t(e)
					}
				}

				function i(e) {
					var t;
					e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function(e) {
						e(t)
					})).then(a, r)
				}
				i((c = c.apply(e, o || [])).next())
			})
		}),
		v = function(n, a) {
			var r, i, o, l = {
					label: 0,
					sent: function() {
						if (1 & o[0]) throw o[1];
						return o[1]
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
						if (r) throw new TypeError("Generator is already executing.");
						for (; l;) try {
							if (r = 1, i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, t[1])).done) return o;
							switch (i = 0, o && (t = [2 & t[0], o.value]), t[0]) {
								case 0:
								case 1:
									o = t;
									break;
								case 4:
									return l.label++, {
										value: t[1],
										done: !1
									};
								case 5:
									l.label++, i = t[1], t = [0];
									continue;
								case 7:
									t = l.ops.pop(), l.trys.pop();
									continue;
								default:
									if (!(o = 0 < (o = l.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
										l = 0;
										continue
									}
									if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
										l.label = t[1];
										break
									}
									if (6 === t[0] && l.label < o[1]) {
										l.label = o[1], o = t;
										break
									}
									if (o && l.label < o[2]) {
										l.label = o[2], l.ops.push(t);
										break
									}
									o[2] && l.ops.pop(), l.trys.pop();
									continue
							}
							t = a.call(n, l)
						} catch (e) {
							t = [6, e], i = 0
						} finally {
							r = o = 0
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
		y = e.dataStores.gamesDataStore,
		A = (e.dataStores.userDataStoreV2, e.dataStores.localeDataStore, e.dataStores.userDataStore.FriendsUserSortType, function(t) {
			return g(void 0, void 0, Promise, function() {
				return v(this, function(e) {
					switch (e.label) {
						case 0:
							return [4, y.getGameDetails([t])];
						case 1:
							return [2, e.sent().data.data[0]]
					}
				})
			})
		}),
		I = function(e) {
			var t = (0, c.useQuery)({
				queryKey: ["getGameDetails", e],
				queryFn: function() {
					return A(e)
				}
			});
			return {
				gameDetails: t.data,
				hasError: t.isError
			}
		};
	(0, i.ready)(function() {
		var e = document.getElementById("game-age-recommendation-details");
		e && ((0, o.render)(b().createElement(p, {
			isDisplayAgeRecommendationDetails: !0
		}), e), e = null);
		var t, n, a = document.getElementById("game-age-recommendation-container");
		a && ((0, o.render)(b().createElement(p, {
			isDisplayAgeRecommendationDetails: !1
		}), a), t = a, (n = document.createElement("div")).id = "game-licensed-badge-container", null !== (e = t.parentElement) && void 0 !== e && e.insertBefore(n, t.nextSibling), (0, o.render)(b().createElement(c.QueryClientProvider, {
			client: l.queryClient
		}, b().createElement(r, null)), n))
	})
}();
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/b7dea19986916c85602f62d9f9cd1637-gameGuidelines.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("GameGuidelines");