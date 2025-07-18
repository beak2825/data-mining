! function() {
	"use strict";
	var e, t = {
			n: function(e) {
				var i = e && e.__esModule ? function() {
					return e.default
				} : function() {
					return e
				};
				return t.d(i, {
					a: i
				}), i
			},
			d: function(e, i) {
				for (var n in i) t.o(i, n) && !t.o(e, n) && Object.defineProperty(e, n, {
					enumerable: !0,
					get: i[n]
				})
			},
			o: function(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}
		},
		i = Roblox,
		n = t.n(i),
		r = CoreUtilities,
		l = {
			assetRootUrlTemplate: "catalog",
			bundleRootUrlTemplate: "bundles",
			getRecommendations: {
				url: i.EnvironmentUrls.catalogApi + "/v2/recommendations/complement-assets",
				retryable: !0,
				withCredentials: !0
			},
			postItemDetails: {
				url: i.EnvironmentUrls.catalogApi + "/v1/catalog/items/details",
				retryable: !0,
				withCredentials: !0
			},
			postCollectibleItemDetails: {
				url: i.EnvironmentUrls.apiGatewayUrl + "/marketplace-items/v1/items/details",
				retryable: !0,
				withCredentials: !0
			},
			getItemOwnershipUrl: function(e, t, n) {
				return i.EnvironmentUrls.inventoryApi + "/v1/users/" + e + "/items/" + t + "/" + n + "/is-owned"
			}
		};
	! function(e) {
		e[e.DETAILS_NOT_HYDRATED = 0] = "DETAILS_NOT_HYDRATED", e[e.DETAILS_LOADING = 1] = "DETAILS_LOADING", e[e.DETAILS_HYDRATED = 2] = "DETAILS_HYDRATED"
	}(e || (e = {}));
	var o = 1e4,
		s = 1e3,
		a = 1e4,
		c = 500,
		u = "asset",
		d = "bundle",
		f = CoreRobloxUtilities,
		m = function(e, t) {
			return "ITEM_DETAILS_HYDRATION_" + t.toUpperCase() + "_" + e
		},
		p = function(e) {
			return "ITEM_DETAILS_HYDRATION_" + e.toUpperCase() + "_TRACKING"
		},
		v = function(e) {
			try {
				return f.localStorageService.getLocalStorage(p(e))
			} catch (e) {
				return
			}
		},
		h = function(e, t) {
			var i = v(e);
			null == i && (i = function(e) {
				var t = new Array;
				return f.localStorageService.setLocalStorage(p(e), t), t
			}(e)), i.push(t), f.localStorageService.setLocalStorage(p(e), i)
		},
		I = function(e, t) {
			try {
				return f.localStorageService.getLocalStorage(m(e, t))
			} catch (e) {
				return
			}
		},
		y = function(t, i, n) {
			if (!n) {
				var r = {};
				r.status = e.DETAILS_LOADING, r.lastModifiedTimestamp = Date.now(), f.localStorageService.setLocalStorage(m(t, i), r), h(i, t)
			}
		},
		b = function(t, i, n, r) {
			if (!r) {
				var l = {};
				l.status = e.DETAILS_HYDRATED, l.details = n, l.lastModifiedTimestamp = Date.now(), f.localStorageService.setLocalStorage(m(t, i), l), h(i, t)
			}
		},
		D = function(e) {
			var t = v(e),
				i = new Array;
			null != t && t.forEach((function(t) {
				var n = I(t, e);
				void 0 === (null == n ? void 0 : n.lastModifiedTimestamp) || Date.now() - (null == n ? void 0 : n.lastModifiedTimestamp) > a ? f.localStorageService.removeLocalStorage(m(t, e)) : i.push(t)
			})), f.localStorageService.setLocalStorage(p(e), i)
		},
		T = function() {
			D(u), D(d)
		},
		w = function(e) {
			return new Promise((function(t) {
				return setTimeout((function() {
					return t(void 0)
				}), e)
			}))
		},
		A = function(e, t) {
			if (e.isOffSale) return !1;
			if ((e.itemRestrictions.includes("Limited") || e.itemRestrictions.includes("LimitedUnique")) && !0 !== e.hasResellers) return !1;
			if (e.collectibleItemId && t) {
				if (void 0 === t) return !1;
				if (0 === t.unitsAvailableForConsumption && !1 === t.hasResellers && e.itemRestrictions.includes("Collectible")) return !1;
				if (!(void 0 !== e.collectibleItemId && e.itemRestrictions.includes("Collectible") && !0 === t.hasResellers && (0 === t.unitsAvailableForConsumption || t.lowestResalePrice && 0 !== t.lowestResalePrice && t.lowestResalePrice < t.price || "ExperiencesDevApiOnly" === t.saleLocationType)) && "ExperiencesDevApiOnly" === t.saleLocationType) return !1
			}
			return !e.isOffSale
		},
		R = function(e, t) {
			if (!e.itemRestrictions.includes("Limited") && !e.itemRestrictions.includes("LimitedUnique")) {
				if (e.collectibleItemId && t)
					if (e.itemRestrictions.includes("Collectible")) {
						if (0 === t.unitsAvailableForConsumption || 0 === t.quantityLimitPerUser) return
					} else if (0 !== t.quantityLimitPerUser) return t.quantityLimitPerUser;
				return 1
			}
		},
		S = function(e, t) {
			if (!e.isOffSale && !e.itemRestrictions.includes("Limited") && !e.itemRestrictions.includes("LimitedUnique")) {
				if (e.collectibleItemId && t) {
					if (e.itemRestrictions.includes("Collectible")) {
						if (void 0 !== e.collectibleItemId && e.itemRestrictions.includes("Collectible") && (0 === t.unitsAvailableForConsumption || t.lowestResalePrice && 0 !== t.lowestResalePrice && t.lowestResalePrice < t.price || "ExperiencesDevApiOnly" === t.saleLocationType)) {
							if (0 === t.lowestResalePrice) return;
							return t.lowestResalePrice
						}
						return t.price
					}
					if ("ExperiencesDevApiOnly" === t.saleLocationType) return;
					return t.price
				}
				return e.price
			}
		},
		g = function(e, t) {
			return !(!e.itemRestrictions.includes("Limited") && !e.itemRestrictions.includes("LimitedUnique")) || !(!e.collectibleItemId || !t) && (void 0 !== e.collectibleItemId && e.itemRestrictions.includes("Collectible") && !0 === t.hasResellers && (0 === t.unitsAvailableForConsumption || 0 !== t.lowestResalePrice && t.lowestResalePrice && t.lowestResalePrice < t.price || "ExperiencesDevApiOnly" === t.saleLocationType))
		},
		L = function(e, t) {
			return {
				purchasable: A(e, t),
				ownershipLimit: R(e, t),
				purchasePrice: S(e, t),
				purchaseFromReseller: g(e, t)
			}
		},
		E = function() {
			return (E = Object.assign || function(e) {
				for (var t, i = 1, n = arguments.length; i < n; i++)
					for (var r in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
				return e
			}).apply(this, arguments)
		},
		P = function(e, t, i, n) {
			return new(i || (i = Promise))((function(r, l) {
				function o(e) {
					try {
						a(n.next(e))
					} catch (e) {
						l(e)
					}
				}

				function s(e) {
					try {
						a(n.throw(e))
					} catch (e) {
						l(e)
					}
				}

				function a(e) {
					var t;
					e.done ? r(e.value) : (t = e.value, t instanceof i ? t : new i((function(e) {
						e(t)
					}))).then(o, s)
				}
				a((n = n.apply(e, t || [])).next())
			}))
		},
		O = function(e, t) {
			var i, n, r, l, o = {
				label: 0,
				sent: function() {
					if (1 & r[0]) throw r[1];
					return r[1]
				},
				trys: [],
				ops: []
			};
			return l = {
				next: s(0),
				throw: s(1),
				return: s(2)
			}, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
				return this
			}), l;

			function s(l) {
				return function(s) {
					return function(l) {
						if (i) throw new TypeError("Generator is already executing.");
						for (; o;) try {
							if (i = 1, n && (r = 2 & l[0] ? n.return : l[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, l[1])).done) return r;
							switch (n = 0, r && (l = [2 & l[0], r.value]), l[0]) {
								case 0:
								case 1:
									r = l;
									break;
								case 4:
									return o.label++, {
										value: l[1],
										done: !1
									};
								case 5:
									o.label++, n = l[1], l = [0];
									continue;
								case 7:
									l = o.ops.pop(), o.trys.pop();
									continue;
								default:
									if (!(r = o.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
										o = 0;
										continue
									}
									if (3 === l[0] && (!r || l[1] > r[0] && l[1] < r[3])) {
										o.label = l[1];
										break
									}
									if (6 === l[0] && o.label < r[1]) {
										o.label = r[1], r = l;
										break
									}
									if (r && o.label < r[2]) {
										o.label = r[2], o.ops.push(l);
										break
									}
									r[2] && o.ops.pop(), o.trys.pop();
									continue
							}
							l = t.call(e, o)
						} catch (e) {
							l = [6, e], n = 0
						} finally {
							i = r = 0
						}
						if (5 & l[0]) throw l[1];
						return {
							value: l[0] ? l[1] : void 0,
							done: !0
						}
					}([l, s])
				}
			}
		},
		_ = function(e) {
			var t = {
				items: e
			};
			return r.httpService.post(l.postItemDetails, t)
		},
		C = function(e, t) {
			return P(void 0, void 0, Promise, (function() {
				var i;
				return O(this, (function(n) {
					switch (n.label) {
						case 0:
							return n.trys.push([0, 2, , 3]), t <= 0 || e.length <= 0 ? [2, void 0] : (i = new Array, [4, Promise.resolve(_(e))]);
						case 1:
							return n.sent().data.data.forEach((function(e) {
								i.push(E(E({}, e), {
									purchaseInfo: void 0 === e.collectibleItemId ? L(e, void 0) : void 0
								}))
							})), i.length === e.length ? [2, i] : [3, 3];
						case 2:
							return n.sent(), [2, C(e, t - 1)];
						case 3:
							return [2, C(e, t - 1)]
					}
				}))
			}))
		},
		U = function(t, i) {
			return P(void 0, void 0, Promise, (function() {
				var n, r, l;
				return O(this, (function(o) {
					switch (o.label) {
						case 0:
							return n = new Array, r = new Array, t.forEach((function(t) {
								var i = I(t.id, t.itemType);
								void 0 !== i && i.status === e.DETAILS_HYDRATED ? n.push(i.details) : r.push(t)
							})), r.length > 0 && i > 0 ? [4, w(c)] : [3, 3];
						case 1:
							return o.sent(), [4, U(r, i - 1)];
						case 2:
							return (l = o.sent()).hydratedItemDetails = n.concat(l.hydratedItemDetails), [2, l];
						case 3:
							return [2, {
								hydratedItemDetails: n,
								nonHydratedItemDetails: r
							}]
					}
				}))
			}))
		},
		x = function(e, t, i) {
			return P(void 0, void 0, Promise, (function() {
				var n, r, l;
				return O(this, (function(o) {
					switch (o.label) {
						case 0:
							for (n = new Array, r = function(i) {
									var r = e.find((function(e) {
										return e.collectibleItemId === t[i]
									}));
									if (r) {
										var l = I(r.id, r.itemType);
										l && void 0 === l.details.collectibleItemDetails && n.push(t[i])
									}
								}, l = 0; l < t.length; l++) r(l);
							return n.length > 0 && i > 0 ? [4, w(c)] : [3, 3];
						case 1:
							return o.sent(), [4, x(e, n, i - 1)];
						case 2:
							o.sent(), o.label = 3;
						case 3:
							return [2]
					}
				}))
			}))
		},
		H = function(t, i, n) {
			return P(void 0, void 0, Promise, (function() {
				var a, c, u, d, f, m, p, v, h, D, w, A, R, S;
				return O(this, (function(g) {
					switch (g.label) {
						case 0:
							return a = null != i && i, T(), c = new Array, u = new Array, d = new Array, t.forEach((function(t) {
								var i = I(t.id, t.itemType);
								null == i ? (u.push(t), y(t.id, t.itemType, a)) : i.status === e.DETAILS_LOADING || i.status === e.DETAILS_NOT_HYDRATED ? Date.now() - i.lastModifiedTimestamp > s ? (u.push(t), y(t.id, t.itemType, a)) : d.push(t) : Date.now() - i.lastModifiedTimestamp > o ? (u.push(t), y(t.id, t.itemType, a)) : c.push(i.details)
							})), u.length > 0 ? [4, Promise.resolve(C(u, 3))] : [3, 2];
						case 1:
							void 0 !== (f = g.sent()) && f.forEach((function(e) {
								b(e.id, e.itemType, e, a), c.push(e)
							})), g.label = 2;
						case 2:
							return [4, U(d, 3)];
						case 3:
							return (m = g.sent()).hydratedItemDetails.forEach((function(e) {
								c.push(e)
							})), m.nonHydratedItemDetails.length > 0 ? [4, Promise.resolve(C(d, 3))] : [3, 5];
						case 4:
							void 0 !== (p = g.sent()) && p.forEach((function(e) {
								b(e.id, e.itemType, e, a), c.push(e)
							})), g.label = 5;
						case 5:
							return v = new Array, h = new Array, c.forEach((function(e) {
								var t = I(e.id, e.itemType),
									i = null == t ? void 0 : t.details;
								if (i && i.collectibleItemId && void 0 === i.collectibleItemDetails)
									if (i.collectibleItemDetailsLoading) h.push(i.collectibleItemId);
									else {
										var n = E(E({}, i), {
											collectibleItemDetailsLoading: !0
										});
										b(n.id, n.itemType, n, a), v.push(i.collectibleItemId)
									}
							})), v.length > 0 && n ? [4, Promise.resolve((P = v, O = {
								itemIds: P
							}, r.httpService.post(l.postCollectibleItemDetails, O)))] : [3, 7];
						case 6:
							for (D = g.sent(), w = function(e) {
									var t = D.data[e],
										i = c.find((function(e) {
											return e.collectibleItemId === t.collectibleItemId
										}));
									void 0 !== i && (t.purchaseInfo = L(i, t), i.collectibleItemDetails = t, b(i.id, i.itemType, i, a))
								}, A = 0; A < D.data.length; A++) w(A);
							g.label = 7;
						case 7:
							return [4, x(c, h, 5)];
						case 8:
							for (g.sent(), A = 0; A < c.length; A++) R = c[A], (S = I(R.id, R.itemType)) && (R.collectibleItemDetails = S.details.collectibleItemDetails);
							return [2, c]
					}
					var P, O
				}))
			}))
		};
	n().ItemDetailsHydrationService = {
		getItemDetails: H
	}
}();
//# sourceMappingURL=https://js.rbxcdn.com/216225ad8d63cc83397f22d5f37c335e-itemDetailsHydrationService.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("ItemDetailsHydrationService");