! function() {
	"use strict";
	var i = {
			n: function(e) {
				var t = e && e.__esModule ? function() {
					return e.default
				} : function() {
					return e
				};
				return i.d(t, {
					a: t
				}), t
			},
			d: function(e, t) {
				for (var n in t) i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
					enumerable: !0,
					get: t[n]
				})
			},
			o: function(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}
		},
		r = CoreUtilities,
		f = React,
		d = i.n(f),
		t = ReactDOM,
		e = ReactUtilities,
		y = CoreRobloxUtilities,
		v = HeaderScripts,
		p = Roblox,
		b = p.EnvironmentUrls.apiGatewayUrl;

	function n() {
		return document.getElementById(c)
	}
	var a = function(e, o, u, c) {
			return new(u = u || Promise)(function(n, t) {
				function i(e) {
					try {
						a(c.next(e))
					} catch (e) {
						t(e)
					}
				}

				function r(e) {
					try {
						a(c.throw(e))
					} catch (e) {
						t(e)
					}
				}

				function a(e) {
					var t;
					e.done ? n(e.value) : ((t = e.value) instanceof u ? t : new u(function(e) {
						e(t)
					})).then(i, r)
				}
				a((c = c.apply(e, o || [])).next())
			})
		},
		o = function(n, i) {
			var r, a, o, u = {
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
						for (; u;) try {
							if (r = 1, a && (o = 2 & t[0] ? a.return : t[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, t[1])).done) return o;
							switch (a = 0, o && (t = [2 & t[0], o.value]), t[0]) {
								case 0:
								case 1:
									o = t;
									break;
								case 4:
									return u.label++, {
										value: t[1],
										done: !1
									};
								case 5:
									u.label++, a = t[1], t = [0];
									continue;
								case 7:
									t = u.ops.pop(), u.trys.pop();
									continue;
								default:
									if (!(o = 0 < (o = u.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
										u = 0;
										continue
									}
									if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
										u.label = t[1];
										break
									}
									if (6 === t[0] && u.label < o[1]) {
										u.label = o[1], o = t;
										break
									}
									if (o && u.label < o[2]) {
										u.label = o[2], u.ops.push(t);
										break
									}
									o[2] && u.ops.pop(), u.trys.pop();
									continue
							}
							t = i.call(n, u)
						} catch (e) {
							t = [6, e], a = 0
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
		h = function(n) {
			return a(void 0, void 0, Promise, function() {
				var t;
				return o(this, function(e) {
					switch (e.label) {
						case 0:
							return t = {
								url: b + "/community-links/v1/universes/" + n + "/community",
								retryable: !0,
								withCredentials: !0
							}, [4, r.httpService.get(t)];
						case 1:
							return [2, e.sent().data]
					}
				})
			})
		},
		u = {
			common: [],
			feature: "Feature.CommunityLinks"
		},
		c = "game-detail-meta-data",
		w = function() {
			var e, i = (null === (e = n()) || void 0 === e ? void 0 : e.dataset) || {};
			return Object.keys(i).reduce(function(e, t) {
				var n = i[t].toLowerCase();
				return e[t] = "true" === n || "false" !== n && i[t], e
			}, {})
		},
		g = {
			HeadingCommunityTitle: "Heading.CommunityTitle",
			DescriptionCommunityDefault: "Description.CommunityDefault",
			LabelViewButton: "Label.ViewButton"
		},
		k = "UserCommunities.EDP.CommunityLinks",
		E = function(e, o, u, c) {
			return new(u = u || Promise)(function(n, t) {
				function i(e) {
					try {
						a(c.next(e))
					} catch (e) {
						t(e)
					}
				}

				function r(e) {
					try {
						a(c.throw(e))
					} catch (e) {
						t(e)
					}
				}

				function a(e) {
					var t;
					e.done ? n(e.value) : ((t = e.value) instanceof u ? t : new u(function(e) {
						e(t)
					})).then(i, r)
				}
				a((c = c.apply(e, o || [])).next())
			})
		},
		C = function(n, i) {
			var r, a, o, u = {
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
						for (; u;) try {
							if (r = 1, a && (o = 2 & t[0] ? a.return : t[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, t[1])).done) return o;
							switch (a = 0, o && (t = [2 & t[0], o.value]), t[0]) {
								case 0:
								case 1:
									o = t;
									break;
								case 4:
									return u.label++, {
										value: t[1],
										done: !1
									};
								case 5:
									u.label++, a = t[1], t = [0];
									continue;
								case 7:
									t = u.ops.pop(), u.trys.pop();
									continue;
								default:
									if (!(o = 0 < (o = u.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
										u = 0;
										continue
									}
									if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
										u.label = t[1];
										break
									}
									if (6 === t[0] && u.label < o[1]) {
										u.label = o[1], o = t;
										break
									}
									if (o && u.label < o[2]) {
										u.label = o[2], u.ops.push(t);
										break
									}
									o[2] && u.ops.pop(), u.trys.pop();
									continue
							}
							t = i.call(n, u)
						} catch (e) {
							t = [6, e], a = 0
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
		l = (0, e.withTranslations)(function(e) {
			var t = e.translate,
				n = (0, f.useState)(null),
				i = n[0],
				r = n[1],
				a = w() || {},
				o = a.universeId,
				u = void 0 === o ? "" : o,
				c = a.placeName,
				e = void 0 === c ? "" : c,
				n = (0, f.useState)(void 0),
				o = n[0],
				l = n[1],
				a = (0, f.useState)(!1),
				c = a[0],
				n = a[1],
				s = (0, f.useCallback)(function() {
					return E(void 0, void 0, void 0, function() {
						var t;
						return C(this, function(e) {
							switch (e.label) {
								case 0:
									return [4, p.ExperimentationService.getAllValuesForLayer(k)];
								case 1:
									return t = e.sent(), l(null == t ? void 0 : t.communityLinkDisplayConfig), [2]
							}
						})
					})
				}, []),
				m = (0, f.useCallback)(function() {
					return E(void 0, void 0, void 0, function() {
						var t;
						return C(this, function(e) {
							switch (e.label) {
								case 0:
									return e.trys.push([0, 2, , 3]), [4, h(u)];
								case 1:
									return t = e.sent(), r(t), [3, 3];
								case 2:
									return e.sent(), r(null), [3, 3];
								case 3:
									return [2]
							}
						})
					})
				}, [u]),
				a = (0, f.useCallback)(function() {
					var e, t;
					null != i && i.communityId && (e = u, t = i.communityId, y.eventStreamService.sendEventWithTarget("clickCommunityLink", "communityLinkDisplay", {
						guildedServerId: t,
						entityType: "universe",
						entityId: e
					}))
				}, [u, i]);
			return (0, f.useEffect)(function() {
				!v.authenticatedUser.isUnder13 && v.authenticatedUser.isAuthenticated && E(void 0, void 0, void 0, function() {
					return C(this, function(e) {
						switch (e.label) {
							case 0:
								return [4, Promise.all([m(), s()])];
							case 1:
								return e.sent(), [2]
						}
					})
				})
			}, [m, s]), null != i && i.communityId && "private" !== i.visibility && o ? (c || (n(!0), p.ExperimentationService.logLayerExposure(k)), o.inTreatment ? d().createElement("div", {
				className: "game-community-section"
			}, d().createElement("h2", {
				className: "game-community-title"
			}, t(g.HeadingCommunityTitle)), d().createElement("a", {
				className: "game-community-link",
				"data-testid": "game-community-link",
				href: (o = i.communityId, b + "/community-links/v1/guilded/" + o + "/join?a=red"),
				onClick: a,
				target: "_blank",
				rel: "noreferrer"
			}, d().createElement("div", {
				className: "game-community-icon-container"
			}, d().createElement("div", {
				className: "game-community-icon"
			})), d().createElement("div", {
				className: "game-community-info-container"
			}, d().createElement("div", null, d().createElement("h5", {
				className: "game-community-name"
			}, i.name)), d().createElement("div", null, d().createElement("span", {
				className: "game-community-description text-default"
			}, i.description || t(g.DescriptionCommunityDefault, {
				experienceName: e
			})))), d().createElement("div", {
				className: "game-community-visit-container"
			}, d().createElement("button", {
				className: "btn btn-cta-md btn-min-width",
				type: "button"
			}, t(g.LabelViewButton))))) : null) : null
		}, u);
	(0, r.ready)(function() {
		var e = document.getElementById("game-community-link-container");
		e && (0, t.render)(d().createElement(l, null), e)
	})
}();
//# sourceMappingURL=https://sourcemaps.rbxcdn.com/5f2f0435b63f0bd26a176dd4a1992d01-gameCommunity.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("GameCommunity");