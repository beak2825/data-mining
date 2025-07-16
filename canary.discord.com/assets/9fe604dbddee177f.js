"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["74891"], {
		601911: function(t, e, n) {
			n.d(e, {
				y: () => r
			});
			var i = n(591759);

			function r(t, e) {
				let n = t.getIconSource(e);
				if (null != n && "number" != typeof n) {
					let t;
					if (Array.isArray(n) ? n.length > 0 && (t = n[0].uri) : t = n.uri, null != t) {
						var r;
						return null != (r = i.Z.toURLSafe(t)) ? r : void 0
					}
				}
			}
		},
		504211: function(t, e, n) {
			n.d(e, {
				B: () => o,
				X: () => a
			});
			var i, r = n(626135),
				l = n(981631),
				o = ((i = {}).STORE_MODAL = "store_modal", i.DETAILS_MODAL = "details_modal", i.STORE_EMBED = "store_embed", i.SKU_EMBED = "sku_embed", i);

			function a(t, e, n) {
				r.default.track(l.rMx.STOREFRONT_COPY_LINK_CLICKED, {
					application_id: t,
					area: e,
					sku_id: n
				})
			}
		},
		110742: function(t, e, n) {
			n.d(e, {
				M: () => l
			}), n(388685);
			var i = n(442837),
				r = n(580130);

			function l(t) {
				return (0, i.e7)([r.Z], () => {
					let e = r.Z.getForSku(t);
					if (null == e) return !1;
					let n = 0;
					for (let t of e) {
						var i, l;
						let e = null != (l = null == (i = t.endsAt) ? void 0 : i.getTime()) ? l : 1 / 0;
						e >= n && (n = e)
					}
					return n > new Date().getTime()
				}, [t])
			}
		},
		680005: function(t, e, n) {
			n.d(e, {
				YG: () => P,
				pV: () => _,
				rf: () => g
			});
			var i, r = n(255367);
			n(73800);
			var l = n(860911),
				o = n(755721),
				a = n(100527),
				s = n(906732),
				u = n(349167),
				c = n(929011),
				d = n(703656),
				p = n(626135),
				f = n(937615),
				S = n(110742),
				O = n(981631),
				I = n(388032),
				b = n(299283),
				g = ((i = {})[i.AVAILABLE = 0] = "AVAILABLE", i[i.LOADING = 1] = "LOADING", i[i.UPCOMING_PLAN = 2] = "UPCOMING_PLAN", i[i.SUBSCRIBED = 3] = "SUBSCRIBED", i[i.UNAVAILABLE = 4] = "UNAVAILABLE", i);

			function _(t) {
				let {
					appId: e,
					className: n,
					onClick: i,
					onHasClicked: l,
					skuId: o,
					subscriptionPlan: a,
					icon: s,
					state: u = 0
				} = t, c = null != a ? (0, f.xg)(a) : null, d = 1 === u;
				return 0 === u || d ? (0, r.jsx)(y, {
					appId: e,
					skuId: o,
					onClick: t => {
						i(t), null == l || l()
					},
					className: n,
					submitting: d,
					children: (0, r.jsxs)("div", {
						className: b.btnContent,
						children: [s, null != c ? I.intl.formatToPlainString(I.t.i4T8v7, {
							rate: c
						}) : I.intl.string(I.t.uuzaAA)]
					})
				}) : (0, r.jsx)(m, {
					className: n,
					children: function(t, e) {
						switch (t) {
							case 2:
								return I.intl.formatToPlainString(I.t.k1ew5O, {
									rate: e
								});
							case 3:
								return I.intl.formatToPlainString(I.t["Hs3Y+P"], {
									rate: e
								});
							case 4:
								return I.intl.string(I.t.DLAKbm)
						}
					}(u, null != c ? c : "")
				})
			}

			function P(t) {
				let {
					appId: e,
					className: n,
					onClick: i,
					onHasClicked: l,
					sku: o,
					icon: u
				} = t, {
					analyticsLocations: d
				} = (0, s.ZP)(a.Z.APP_STOREFRONT), p = () => {
					(0, c.r)({
						appId: e,
						skuId: o.id,
						analyticsLocations: d
					})
				}, g = (0, S.M)(o.id), _ = o.type === O.epS.DURABLE && g, {
					price: P
				} = o;
				return null == P ? null : _ ? (0, r.jsx)(m, {
					className: n,
					children: I.intl.string(I.t["6cfuDg"])
				}) : (0, r.jsx)(y, {
					appId: e,
					skuId: o.id,
					onClick: t => {
						(null != i ? i : p)(t), null == l || l()
					},
					className: n,
					children: (0, r.jsxs)("div", {
						className: b.btnContent,
						children: [u, I.intl.format(I.t.Xp5WTk, {
							price: (0, f.T4)(P.amount, P.currency)
						})]
					})
				})
			}

			function y(t) {
				var e, n, {
						appId: i,
						skuId: a,
						onClick: s
					} = t,
					c = function(t, e) {
						if (null == t) return {};
						var n, i, r = function(t, e) {
							if (null == t) return {};
							var n, i, r = {},
								l = Object.keys(t);
							for (i = 0; i < l.length; i++) n = l[i], e.indexOf(n) >= 0 || (r[n] = t[n]);
							return r
						}(t, e);
						if (Object.getOwnPropertySymbols) {
							var l = Object.getOwnPropertySymbols(t);
							for (i = 0; i < l.length; i++) n = l[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n])
						}
						return r
					}(t, ["appId", "skuId", "onClick"]);
				let f = (0, u.Z)();
				return (0, r.jsx)(o.zx, (e = function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = null != arguments[e] ? arguments[e] : {},
							i = Object.keys(n);
						"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
							return Object.getOwnPropertyDescriptor(n, t).enumerable
						}))), i.forEach(function(e) {
							var i;
							i = n[e], e in t ? Object.defineProperty(t, e, {
								value: i,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : t[e] = i
						})
					}
					return t
				}({}, c), n = n = {
					onClick: t => {
						if (p.default.track(O.rMx.STOREFRONT_PURCHASE_CLICKED, {
								application_id: i,
								sku_id: a
							}), !f) {
							t.preventDefault(), t.stopPropagation();
							let e = O.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(i, a),
								n = (0, l.Ui)(e, !1);
							(0, d.uL)(n);
							return
						}
						null == s || s(t)
					}
				}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(t, e) {
					var n = Object.keys(t);
					if (Object.getOwnPropertySymbols) {
						var i = Object.getOwnPropertySymbols(t);
						n.push.apply(n, i)
					}
					return n
				})(Object(n)).forEach(function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}), e))
			}

			function m(t) {
				let {
					className: e,
					children: n
				} = t;
				return (0, r.jsx)(o.zx, {
					disabled: !0,
					className: e,
					look: o.zx.Looks.OUTLINED,
					color: o.zx.Colors.PRIMARY,
					children: n
				})
			}
		},
		533159: function(t, e, n) {
			n.d(e, {
				Z: () => a
			});
			var i = n(255367);
			n(73800);
			var r = n(794295),
				l = n(388032),
				o = n(71851);

			function a(t) {
				let {
					termsOfServiceUrl: e,
					privacyPolicyUrl: n
				} = t;
				return null == e && null == n ? null : (0, i.jsxs)("span", {
					className: o.text,
					children: [null != e && (0, i.jsx)(r.Z, {
						href: e,
						children: l.intl.string(l.t["8S0kcH"])
					}), null != e && null != n && (0, i.jsx)("span", {
						"aria-disabled": "true",
						children: "•"
					}), null != n && (0, i.jsx)(r.Z, {
						href: n,
						children: l.intl.string(l.t.ZpyeCg)
					})]
				})
			}
		},
		349167: function(t, e, n) {
			n.d(e, {
				Z: () => l
			});
			var i = n(399606),
				r = n(314897);

			function l() {
				return (0, i.e7)([r.default], () => r.default.isAuthenticated())
			}
		},
		724870: function(t, e, n) {
			n.d(e, {
				h: () => g,
				m: () => P
			}), n(997841);
			var i = n(255367);
			n(73800);
			var r = n(512722),
				l = n.n(r),
				o = n(772848),
				a = n(481060),
				s = n(496929),
				u = n(159351),
				c = n(667),
				d = n(171246),
				p = n(509545),
				f = n(55563),
				S = n(626135),
				O = n(987209),
				I = n(107998),
				b = n(981631);

			function g(t) {
				let {
					initialPlanId: e,
					activeSubscription: r,
					analyticsObject: l,
					analyticsLocation: s,
					analyticsLocations: d,
					analyticsSubscriptionType: p,
					renderHeader: f,
					planGroup: g,
					skuId: _,
					guildId: P,
					reviewWarningMessage: y,
					applicationId: m,
					showBenefitsFirst: v,
					onComplete: E,
					forcesTransitionToGuild: h
				} = t, T = (0, o.Z)(), C = !1;
				(0, a.ZDy)(async () => {
					let {
						PaymentContextProvider: t
					} = await Promise.resolve().then(n.bind(n, 563132)), o = (await n.e("7458").then(n.bind(n, 405083))).default, {
						getApplicationPaymentSteps: a
					} = await n.e("86513").then(n.bind(n, 759386)), u = a({
						guildId: P,
						showBenefitsFirst: v
					});
					return n => {
						var a, c;
						return (0, i.jsx)(t, {
							loadId: T,
							applicationId: m,
							activeSubscription: r,
							stepConfigs: u,
							skuIDs: [_],
							children: (0, i.jsx)(I.c1, {
								children: (0, i.jsx)(O.KB, {
									children: (0, i.jsx)(o, (a = function(t) {
										for (var e = 1; e < arguments.length; e++) {
											var n = null != arguments[e] ? arguments[e] : {},
												i = Object.keys(n);
											"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
												return Object.getOwnPropertyDescriptor(n, t).enumerable
											}))), i.forEach(function(e) {
												var i;
												i = n[e], e in t ? Object.defineProperty(t, e, {
													value: i,
													enumerable: !0,
													configurable: !0,
													writable: !0
												}) : t[e] = i
											})
										}
										return t
									}({}, n), c = c = {
										initialPlanId: e,
										skuId: _,
										analyticsLocations: d,
										analyticsObject: l,
										analyticsLocation: s,
										analyticsSubscriptionType: p,
										renderHeader: f,
										planGroup: g,
										reviewWarningMessage: y,
										applicationId: m,
										guildId: null != P ? P : void 0,
										onComplete: () => {
											C = !0, null == E || E()
										},
										forcesTransitionToGuild: h
									}, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c)) : (function(t, e) {
										var n = Object.keys(t);
										if (Object.getOwnPropertySymbols) {
											var i = Object.getOwnPropertySymbols(t);
											n.push.apply(n, i)
										}
										return n
									})(Object(c)).forEach(function(t) {
										Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(c, t))
									}), a))
								})
							})
						})
					}
				}, {
					onCloseCallback: () => {
						C || (S.default.track(b.rMx.PAYMENT_FLOW_CANCELED, {
							load_id: T,
							payment_type: b.Zuq[b.GZQ.SUBSCRIPTION],
							location: null != s ? s : l,
							is_gift: !1,
							sku_id: _,
							application_id: m,
							location_stack: d
						}), (0, u.fw)(), (0, c.p)())
					},
					onCloseRequest: b.dG4
				})
			}
			let _ = async (t, e) => {
				let n = (await (0, s.yD)(t)).filter(t => null == t.ends_at || new Date(t.ends_at) > new Date).find(t => t.sku_id === e);
				l()(null == n, "User already has an active subscription to this SKU")
			};
			async function P(t) {
				var e;
				let {
					applicationId: n,
					skuId: i,
					initialPlanId: r,
					analyticsLocationObject: o,
					analyticsLocations: a,
					renderHeader: s
				} = t, u = f.Z.get(i), c = p.Z.getForSKU(i);
				l()(null != u, "Failed to find SKU");
				let S = (0, d.KW)(u.flags);
				l()(S, "Guild application subscriptions unsupported!"), await _(n, i);
				let O = {
					initialPlanId: null != r ? r : null == (e = c[0]) ? void 0 : e.id,
					activeSubscription: null,
					analyticsLocations: a,
					analyticsLocationObject: o,
					analyticsSubscriptionType: b.NYc.APPLICATION,
					renderHeader: s,
					planGroup: [],
					skuId: i,
					guildId: null,
					showBenefitsFirst: !1,
					applicationId: n
				};
				g(O)
			}
		},
		87484: function(t, e, n) {
			n.d(e, {
				Z: () => c
			});
			var i = n(255367);
			n(73800);
			var r = n(772848),
				l = n(481060),
				o = n(159351),
				a = n(667),
				s = n(626135),
				u = n(981631);

			function c(t) {
				let {
					applicationId: e,
					skuId: c,
					onClose: d,
					onComplete: p,
					analyticsLocations: f,
					analyticsLocationObject: S,
					contextKey: O
				} = t, I = !1, b = (0, r.Z)();
				(0, l.ZDy)(async () => {
					let {
						default: t
					} = await n.e("61670").then(n.bind(n, 409600));
					return n => {
						var r, l, {
								onClose: o
							} = n,
							a = function(t, e) {
								if (null == t) return {};
								var n, i, r = function(t, e) {
									if (null == t) return {};
									var n, i, r = {},
										l = Object.keys(t);
									for (i = 0; i < l.length; i++) n = l[i], e.indexOf(n) >= 0 || (r[n] = t[n]);
									return r
								}(t, e);
								if (Object.getOwnPropertySymbols) {
									var l = Object.getOwnPropertySymbols(t);
									for (i = 0; i < l.length; i++) n = l[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n])
								}
								return r
							}(n, ["onClose"]);
						return (0, i.jsx)(t, (r = function(t) {
							for (var e = 1; e < arguments.length; e++) {
								var n = null != arguments[e] ? arguments[e] : {},
									i = Object.keys(n);
								"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
									return Object.getOwnPropertyDescriptor(n, t).enumerable
								}))), i.forEach(function(e) {
									var i;
									i = n[e], e in t ? Object.defineProperty(t, e, {
										value: i,
										enumerable: !0,
										configurable: !0,
										writable: !0
									}) : t[e] = i
								})
							}
							return t
						}({}, a), l = l = {
							loadId: b,
							applicationId: e,
							skuId: c,
							analyticsLocations: f,
							analyticsLocationObject: S,
							onClose: t => {
								o(), null == d || d(t)
							},
							onComplete: t => {
								I = !0, null == p || p(t)
							}
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(t, e) {
							var n = Object.keys(t);
							if (Object.getOwnPropertySymbols) {
								var i = Object.getOwnPropertySymbols(t);
								n.push.apply(n, i)
							}
							return n
						})(Object(l)).forEach(function(t) {
							Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(l, t))
						}), r))
					}
				}, {
					contextKey: O,
					onCloseCallback: () => {
						I || s.default.track(u.rMx.PAYMENT_FLOW_CANCELED, {
							load_id: b,
							payment_type: u.Zuq[u.GZQ.ONE_TIME],
							location: S,
							is_gift: !1,
							sku_id: c,
							application_id: e,
							location_stack: f
						}), (0, o.fw)(), (0, a.p)(), null == d || d(I)
					},
					onCloseRequest: u.dG4
				})
			}
		},
		106976: function(t, e, n) {
			n.d(e, {
				i1: () => d,
				rx: () => c,
				sB: () => p,
				vY: () => f
			}), n(953529), n(388685);
			var i = n(570140),
				r = n(821849),
				l = n(307643),
				o = n(981631);

			function a(t) {
				return {
					id: t.id,
					type: o.epS.SUBSCRIPTION,
					application_id: t.application_id,
					product_line: o.POd.APPLICATION,
					name: t.name,
					summary: "",
					description: t.description,
					flags: t.sku_flags,
					manifests: [],
					available_regions: [],
					legal_notice: "",
					deleted: t.soft_deleted,
					price_tier: 0,
					show_age_gate: !1,
					restricted: !1
				}
			}

			function s(t) {
				var e;
				return {
					id: t.id,
					sku: a(t),
					summary: t.description,
					description: t.description,
					benefits: null != (e = t.store_listing_benefits) ? e : [],
					thumbnail: t.image_asset,
					published: t.published
				}
			}

			function u(t) {
				for (let e of (i.Z.dispatch({
						type: "SKUS_FETCH_SUCCESS",
						skus: t.map(a)
					}), i.Z.dispatch({
						type: "STORE_LISTINGS_FETCH_SUCCESS",
						storeListings: t.map(s)
					}), t)) i.Z.dispatch({
					type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
					skuId: e.id,
					subscriptionPlans: e.subscription_plans
				})
			}
			async function c(t, e) {
				i.Z.dispatch({
					type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS",
					applicationId: t,
					groupListingId: e
				});
				try {
					var n;
					let r = await l.jz(t, e);
					return i.Z.dispatch({
						type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS",
						applicationId: t,
						groupListing: r
					}), u(null != (n = r.subscription_listings) ? n : []), r
				} catch (e) {
					i.Z.dispatch({
						type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE",
						applicationId: t
					})
				}
			}
			async function d(t) {
				i.Z.dispatch({
					type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS",
					guildId: t
				});
				try {
					let e = await l.GF(t);
					i.Z.dispatch({
						type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS",
						guildId: t,
						entitlements: e
					})
				} catch (e) {
					i.Z.dispatch({
						type: "APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE",
						guildId: t
					})
				}
			}

			function p(t) {
				i.Z.dispatch({
					type: "APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED",
					guildId: t
				})
			}
			async function f(t) {
				let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
				i.Z.dispatch({
					type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN",
					planId: t
				});
				try {
					var n;
					let e = await l.a_(t);
					i.Z.dispatch({
						type: "APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS",
						groupListing: e
					});
					let o = null != (n = e.subscription_listings) ? n : [];
					await Promise.all(o.map(e => {
						if (e.subscription_plans[0].id === t) return r.GZ(e.id, void 0, void 0, !0)
					})), u(o)
				} catch (n) {
					"status" in n && 429 === n.status && e < 10 && await f(t, e++)
				}
			}
		},
		270144: function(t, e, n) {
			n.d(e, {
				CR: () => m,
				E8: () => N,
				Ev: () => E,
				LM: () => _,
				cr: () => T,
				ec: () => v,
				h6: () => P,
				jd: () => g,
				qz: () => y
			}), n(539854), n(388685), n(457542), n(997841);
			var i, r = n(73800),
				l = n(442837),
				o = n(496929),
				a = n(430824),
				s = n(496675),
				u = n(509545),
				c = n(78839),
				d = n(55563),
				p = n(801249),
				f = n(106976),
				S = n(307643),
				O = n(488915),
				I = n(171246),
				b = n(981631),
				g = ((i = {})[i.NOT_LOADED = 0] = "NOT_LOADED", i[i.LOADING = 1] = "LOADING", i[i.LOADED = 2] = "LOADED", i[i.ERROR = 3] = "ERROR", i);
			let _ = t => {
				let {
					guildId: e,
					canFetch: n = !0,
					forceRefetch: i = !1
				} = t, o = (0, l.e7)([O.Z], () => null != e ? O.Z.getEntitlementsForGuildFetchState(e) : null, [e]);
				return r.useEffect(() => {
					if (null == e || e === b.ME) return;
					let t = O.Z.getEntitlementsForGuildFetchState(e);
					n && (t === O.M.NOT_FETCHED || i) && (0, f.i1)(e)
				}, [e, n, i]), {
					entitlementsLoaded: o === O.M.FETCHED
				}
			};

			function P(t) {
				var e;
				let n = null != (e = null == t ? void 0 : t.id) ? e : b.lds,
					{
						entitlementsLoaded: i
					} = _({
						guildId: n,
						canFetch: (0, l.e7)([s.Z], () => s.Z.can(b.Plq.ADMINISTRATOR, t))
					}),
					o = (0, l.e7)([p.Z], () => p.Z.getLastGuildDismissedTime(n)),
					a = (0, l.Wu)([O.Z], () => {
						let t = O.Z.getEntitlementsForGuild(n),
							e = O.Z.getEntitlementsForGuild(n, !1),
							i = t.map(t => t.applicationId);
						return e.filter(t => !i.includes(t.applicationId))
					}),
					u = (0, l.cj)([d.Z], () => d.Z.getSKUs()),
					c = r.useMemo(() => a.filter(t => {
						let e = u[t.skuId];
						return null != e && e.available
					}), [a, u]);
				return i ? c.filter(t => null != t.endsAt && t.endsAt.getTime() > Math.max(null != o ? o : 0, Date.now() - 2592e6)) : []
			}
			let y = () => {
				let [t, e] = r.useState(0);
				return r.useEffect(() => {
					e(1), Promise.all([(0, o.p0)({
						withSku: !0,
						withApplication: !0,
						entitlementType: b.qc2.APPLICATION_SUBSCRIPTION
					}), (0, o.p0)({
						withSku: !0,
						withApplication: !0,
						entitlementType: b.qc2.PURCHASE
					})]).catch(() => {
						e(3)
					}).then(() => {
						e(2)
					})
				}, []), {
					loadState: t
				}
			};

			function m(t, e) {
				let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
					[i, o] = r.useState([]),
					[s, u] = r.useState(!1);
				return r.useLayoutEffect(() => {
					null != t && n && (u(!0), (0, S.tn)(t, e).then(o).finally(() => {
						u(!1)
					}))
				}, [t, e, n]), {
					guilds: (0, l.Wu)([a.Z], () => i.map(t => a.Z.getGuild(t)).filter(t => null != t), [i]),
					isFetching: s
				}
			}
			let v = t => t.items;

			function E(t, e) {
				return C(t, e, v)
			}
			let h = t => {
				var e, n;
				return null != (n = null == (e = t.renewalMutations) ? void 0 : e.items) ? n : []
			};

			function T(t, e) {
				return C(t, e, h)
			}

			function C(t, e, n) {
				let [i, o] = (0, l.Wu)([c.Z, u.Z], () => null == t ? [] : N({
					groupSku: t,
					SubscriptionStore: c.Z,
					SubscriptionPlanStore: u.Z,
					mapSubscriptionItems: n,
					guildId: e
				}), [t, n, e]);
				return r.useMemo(() => {
					if (null != i && null != o) return {
						subscription: i,
						subscriptionPlan: o
					}
				}, [i, o])
			}

			function N(t) {
				var e, n;
				let {
					groupSku: i,
					SubscriptionStore: r,
					SubscriptionPlanStore: l,
					mapSubscriptionItems: o,
					guildId: a
				} = t, {
					bundledSkuIds: s,
					flags: u
				} = i;
				for (let t of null != (e = r.getActiveApplicationSubscriptions()) ? e : []) {
					if ((0, I.KK)(u) && null != a && (null == (n = t.metadata) ? void 0 : n.application_subscription_guild_id) !== a) continue;
					let e = o(t).map(t => l.get(t.planId)).find(t => null != t && s.includes(t.skuId));
					if (null != e) return [t, e]
				}
				return []
			}
		},
		488915: function(t, e, n) {
			n.d(e, {
				M: () => S,
				Z: () => C
			}), n(388685);
			var i, r, l, o, a = n(512722),
				s = n.n(a),
				u = n(442837),
				c = n(759174),
				d = n(570140),
				p = n(959546),
				f = n(55563),
				S = ((r = {})[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED", r);

			function O(t) {
				return "subscription_listing:".concat(t)
			}

			function I(t) {
				return "application:".concat(t)
			}

			function b(t) {
				return "plan:".concat(t)
			}

			function g(t, e, n) {
				return "entitlement:".concat(t, ":").concat(n, ":").concat(e)
			}

			function _(t, e) {
				return "entitlement:".concat(e, ":").concat(t)
			}
			let P = new c.h(t => [I(t.application_id), ...t.subscription_listings_ids.map(O)], t => t.id),
				y = new c.h(t => [I(t.application_id), b(t.subscription_plans[0].id)], t => t.id),
				m = new c.h(t => [g(t.applicationId, t.isValid(null, f.Z), t.guildId), _(t.isValid(null, f.Z), t.guildId)], t => t.id),
				v = {},
				E = {};

			function h(t) {
				var e, n;
				for (let i of (P.set(t.id, t), null != (e = t.subscription_listings) ? e : [])) {
					n = i, y.set(n.id, n)
				}
			}
			class T extends(i = u.yh) {
				getSubscriptionGroupListingsForApplicationFetchState(t) {
					var e;
					return null != (e = v[t]) ? e : 0
				}
				getSubscriptionGroupListing(t) {
					return P.get(t)
				}
				getSubscriptionGroupListingForSubscriptionListing(t) {
					let e = P.values(O(t));
					return s()(e.length <= 1, "Found multiple group listings for listing"), e[0]
				}
				getSubscriptionListing(t) {
					return y.get(t)
				}
				getSubscriptionListingsForApplication(t) {
					return y.values(I(t))
				}
				getEntitlementsForGuildFetchState(t) {
					var e;
					return null != (e = E[t]) ? e : 0
				}
				getSubscriptionListingForPlan(t) {
					let e = y.values(b(t));
					return s()(e.length <= 1, "Found multiple listings for plan"), e[0]
				}
				getApplicationEntitlementsForGuild(t, e) {
					let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
					return m.values(g(t, n, e))
				}
				getEntitlementsForGuild(t) {
					let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
					return m.values(_(e, t))
				}
			}
			o = "ApplicationSubscriptionStore", (l = "displayName") in T ? Object.defineProperty(T, l, {
				value: o,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : T[l] = o;
			let C = new T(d.Z, {
				LOGOUT: function() {
					P.clear(), y.clear(), m.clear(), v = {}, E = {}
				},
				APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function(t) {
					let {
						applicationId: e,
						groupListingId: n
					} = t;
					v[e] = 1;
					let i = P.get(n);
					if (null != i)
						for (let t of i.subscription_listings_ids) y.delete(t)
				},
				APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function(t) {
					let {
						applicationId: e,
						groupListing: n
					} = t;
					v[e] = 2, h(n)
				},
				APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function(t) {
					let {
						applicationId: e
					} = t;
					v[e] = 2
				},
				APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(t) {
					let {
						guildId: e
					} = t;
					E[e] = 1
				},
				APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(t) {
					let {
						guildId: e,
						entitlements: n
					} = t;
					E[e] = 2, n.forEach(t => {
						let e = p.Z.createFromServer(t);
						m.set(e.id, e)
					})
				},
				APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(t) {
					let {
						guildId: e
					} = t;
					E[e] = 0
				},
				APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function(t) {
					let {
						groupListing: e
					} = t;
					h(e)
				}
			})
		},
		930155: function(t, e, n) {
			n.d(e, {
				H: () => a
			}), n(388685), n(415506);
			var i = n(73800),
				r = n(442837),
				l = n(821849),
				o = n(509545);

			function a(t) {
				let [e, n] = i.useState(!1), a = (0, r.Wu)([o.Z], () => o.Z.getForSKU(t), [t]), s = (0, r.e7)([o.Z], () => o.Z.isFetchingForSKU(t), [t]);
				return i.useEffect(() => {
					o.Z.isFetchingForSKU(t) || (n(!1), (0, l.GZ)(t).then(() => {
						n(!1)
					}).catch(() => {
						n(!0)
					}))
				}, [t]), {
					data: a,
					isLoading: s,
					error: e ? Error("SubscriptionPlans failed to fetch") : void 0
				}
			}
		},
		929011: function(t, e, n) {
			n.d(e, {
				H: () => S,
				r: () => O
			}), n(997841), n(388685);
			var i = n(255367),
				r = n(481060),
				l = n(724870),
				o = n(87484),
				a = n(509545),
				s = n(78839),
				u = n(55563),
				c = n(270144),
				d = n(171246),
				p = n(689011),
				f = n(981631);
			async function S(t) {
				let {
					subscriptionPlanId: e,
					sku: o,
					subscriptionGroupPlanIds: S,
					initialSubscribeForGuild: O,
					analyticsLocations: I,
					analyticsLocation: b,
					disableGuildSelector: g = !1
				} = t, {
					promise: _,
					resolve: P
				} = Promise.withResolvers();
				if ((0, d.KK)(o.flags) && !1 === g) {
					let {
						promise: t,
						resolve: e
					} = Promise.withResolvers();
					(0, r.ZDy)(async () => {
						let {
							GuildSubscriptionSelectionModal: t
						} = await n.e("43889").then(n.bind(n, 279875));
						return n => (0, i.jsx)(t, {
							transitionState: n.transitionState,
							onClose: n.onClose,
							sku: o,
							onSelect: e,
							currentGuildId: O
						})
					}), O = await t
				}
				let y = u.Z.getParentSKU(o.id),
					m = null;
				return null != y && ([m] = (0, c.E8)({
					groupSku: y,
					SubscriptionStore: s.Z,
					SubscriptionPlanStore: a.Z,
					mapSubscriptionItems: c.ec,
					guildId: O
				})), (0, l.h)({
					initialPlanId: e,
					skuId: o.id,
					activeSubscription: m,
					applicationId: o.applicationId,
					planGroup: S,
					guildId: O,
					renderHeader: (t, e, n) => (0, i.jsx)(p.t, {
						step: n,
						onClose: () => e(!1)
					}),
					analyticsSubscriptionType: f.NYc.APPLICATION,
					analyticsLocations: I,
					analyticsLocation: b,
					onComplete: P,
					showBenefitsFirst: !1,
					forcesTransitionToGuild: !1
				}), _
			}

			function O(t) {
				let {
					appId: e,
					skuId: n,
					analyticsLocations: i
				} = t;
				(0, o.Z)({
					applicationId: e,
					skuId: n,
					analyticsLocations: i
				})
			}
		},
		263519: function(t, e, n) {
			n.d(e, {
				Z: () => P
			}), n(361932), n(187205), n(997841);
			var i = n(73800),
				r = n(512722),
				l = n.n(r),
				o = n(442837),
				a = n(570140),
				s = n(821849),
				u = n(906732),
				c = n(680005),
				d = n(728345),
				p = n(349167),
				f = n(509545),
				S = n(55563),
				O = n(551428),
				I = n(270144),
				b = n(488915),
				g = n(171246),
				_ = n(929011);

			function P(t) {
				var e, n;
				let {
					initialSubscribeForGuild: r,
					analyticsLocation: P,
					skuId: y,
					onComplete: m,
					disableGuildSelector: v
				} = t, E = (0, o.e7)([S.Z], () => null != y ? S.Z.get(y) : void 0, [y]), h = (0, o.e7)([O.Z], () => null != y ? O.Z.getForSKU(y) : void 0, [y]), T = null == (e = (0, o.Wu)([f.Z], () => null != y ? f.Z.getForSKU(y) : [], [y])[0]) ? void 0 : e.id, C = (0, o.e7)([S.Z], () => null != y ? S.Z.getParentSKU(y) : void 0, [y]), N = null == C ? void 0 : C.bundledSkuIds, j = (0, o.Wu)([f.Z], () => {
					var t;
					return null != (t = null == N ? void 0 : N.flatMap(f.Z.getForSKU)) ? t : []
				}, [N]), A = i.useMemo(() => j.map(t => t.id), [j]), L = (0, g.KK)(null != (n = null == E ? void 0 : E.flags) ? n : 0), Z = (0, o.e7)([b.Z], () => null != r && !1 !== L && b.Z.getEntitlementsForGuild(r, !0).some(t => t.skuId === y), [L, y, r]), F = null == E ? void 0 : E.applicationId, w = (null == h ? void 0 : h.published) === !0 && (null == E ? void 0 : E.isAvailable()) === !0, {
					app: x
				} = (0, d.Rt)(F), {
					analyticsLocations: R
				} = (0, u.ZP)(), U = (0, I.Ev)(C, null != r ? r : void 0), k = null == U ? void 0 : U.subscription, D = null == U ? void 0 : U.subscriptionPlan, G = (0, I.cr)(C, null != r ? r : void 0), B = null == G ? void 0 : G.subscriptionPlan, {
					entitlementsLoaded: M
				} = (0, I.LM)({
					guildId: r
				});
				null == r && (M = !0);
				let H = (0, p.Z)(),
					K = null != k && (0, g.Jf)(k, E),
					Y = i.useMemo(() => {
						if (!M || null == x || null == y) return c.rf.LOADING;
						if (!w) return c.rf.UNAVAILABLE;
						if (!L) {
							if ((null == D ? void 0 : D.skuId) === y) return c.rf.SUBSCRIBED;
							if ((null == B ? void 0 : B.skuId) === y && !1 === K) return c.rf.UPCOMING_PLAN
						}
						return c.rf.AVAILABLE
					}, [null == D ? void 0 : D.skuId, w, x, M, K, L, null == B ? void 0 : B.skuId, y]);
				return i.useEffect(() => {
					w && null != y && H && (f.Z.isFetchingForSKU(y) || f.Z.isLoadedForSKU(y) || a.Z.wait(() => {
						(0, s.GZ)(y)
					}))
				}, [w, y, H]), {
					openModal: i.useCallback(() => {
						l()(null != x, "No application"), l()(null != y, "No SKU ID"), l()(w, "Cannot purchase this unpublished plan"), (0, _.H)({
							subscriptionPlanId: T,
							sku: E,
							subscriptionGroupPlanIds: A,
							initialSubscribeForGuild: r,
							disableGuildSelector: v,
							analyticsLocations: R,
							analyticsLocation: P
						}).then(() => {
							null == m || m()
						})
					}, [x, y, w, T, E, A, r, v, R, P, m]),
					subscriptionPurchaseButtonState: Y,
					isGuildSubscribed: Z
				}
			}
		},
		541822: function(t, e, n) {
			n.d(e, {
				Z: () => u
			}), n(388685);
			var i = n(255367),
				r = n(73800),
				l = n(120356),
				o = n.n(l),
				a = n(349361),
				s = n(806726);

			function u(t) {
				var e, n, {
						children: l,
						gradientClassName: u
					} = t,
					c = function(t, e) {
						if (null == t) return {};
						var n, i, r = function(t, e) {
							if (null == t) return {};
							var n, i, r = {},
								l = Object.keys(t);
							for (i = 0; i < l.length; i++) n = l[i], e.indexOf(n) >= 0 || (r[n] = t[n]);
							return r
						}(t, e);
						if (Object.getOwnPropertySymbols) {
							var l = Object.getOwnPropertySymbols(t);
							for (i = 0; i < l.length; i++) n = l[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n])
						}
						return r
					}(t, ["children", "gradientClassName"]);
				let d = r.useRef(null),
					[p, f] = r.useState(!0),
					S = () => {
						var t;
						(null == (t = d.current) ? void 0 : t.isScrolledToBottom()) === !0 ? f(!1) : f(!0)
					};
				return (0, i.jsxs)(i.Fragment, {
					children: [(0, i.jsx)(a.h2, (e = function(t) {
						for (var e = 1; e < arguments.length; e++) {
							var n = null != arguments[e] ? arguments[e] : {},
								i = Object.keys(n);
							"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
								return Object.getOwnPropertyDescriptor(n, t).enumerable
							}))), i.forEach(function(e) {
								var i;
								i = n[e], e in t ? Object.defineProperty(t, e, {
									value: i,
									enumerable: !0,
									configurable: !0,
									writable: !0
								}) : t[e] = i
							})
						}
						return t
					}({
						fade: !0
					}, c), n = n = {
						ref: t => {
							null != t && (d.current = t, S())
						},
						onScroll: S,
						children: l
					}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(t, e) {
						var n = Object.keys(t);
						if (Object.getOwnPropertySymbols) {
							var i = Object.getOwnPropertySymbols(t);
							n.push.apply(n, i)
						}
						return n
					})(Object(n)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}), e)), (0, i.jsx)("div", {
						className: o()(s.containerScrollGradient, u),
						"data-shown": p
					})]
				})
			}
		},
		269210: function(t, e, n) {
			n.d(e, {
				Gm: () => O,
				Uj: () => S,
				ZI: () => f
			}), n(953529);
			var i = n(255367);
			n(73800);
			var r = n(120356),
				l = n.n(r),
				o = n(708816),
				a = n(368072),
				s = n(777207),
				u = n(692547),
				c = n(330711),
				d = n(812743),
				p = n(820468);
			let f = 5;

			function S(t) {
				let {
					description: e,
					imgSrc: n,
					renderPurchaseButton: r,
					onPurchase: S,
					title: O,
					onDetails: I,
					benefitItems: b,
					benefitsSummary: g,
					subtitle: _,
					maxBenefits: P = f
				} = t;
				return (0, i.jsx)(o.tE, {
					children: (0, i.jsxs)("div", {
						className: l()(d.container, p.hoverCard),
						tabIndex: 0,
						onClick: () => {
							null != I ? I() : null != S && S()
						},
						onKeyUp: t => {
							"Enter" === t.key && (t.stopPropagation(), t.preventDefault(), null != I ? I() : null != S && S())
						},
						children: [(0, i.jsx)("div", {
							className: d.card,
							children: (0, i.jsxs)("div", {
								className: d.body,
								children: [(0, i.jsx)(s.x, {
									tag: "div",
									variant: "heading-lg/semibold",
									children: O
								}), (0, i.jsx)("div", {
									className: d.image,
									children: null != n ? (0, i.jsx)("img", {
										src: n.toString(),
										alt: ""
									}) : (0, i.jsx)(a.V, {
										color: u.Z.colors.ICON_PRIMARY,
										size: "custom",
										height: 48,
										width: 48
									})
								}), null != r ? r({
									className: d.purchaseBtn,
									onClick: t => {
										t.stopPropagation(), null == S || S()
									}
								}) : null, _, null != e && "" !== e && (0, i.jsx)(s.x, {
									className: d.description,
									color: "text-default",
									variant: "text-sm/medium",
									children: e
								})]
							})
						}), null != g && (0, i.jsx)("div", {
							className: d.benefitsSummary,
							children: (0, i.jsx)(s.x, {
								color: "interactive-normal",
								variant: "text-sm/medium",
								children: c.Z.Messages.STOREFRONT_BENEFITS_SUMMARY.format({
									count: g
								})
							})
						}), null != b && b.length > 0 && (0, i.jsx)("div", {
							className: d.benefits,
							children: (0, i.jsx)("div", {
								className: d.benefitsContainer,
								children: (0, i.jsxs)("div", {
									className: d.benefitsList,
									children: [(0, i.jsx)(s.x, {
										color: "header-secondary",
										variant: "eyebrow",
										children: c.Z.Messages.STOREFRONT_BENEFITS_TITLE
									}), b.length > P ? (0, i.jsxs)(i.Fragment, {
										children: [b.slice(0, P), (0, i.jsx)(s.x, {
											variant: "text-md/semibold",
											color: "text-secondary",
											children: c.Z.Messages.STOREFRONT_MORE_BENEFITS.format({
												count: b.length - P
											})
										})]
									}) : b]
								})
							})
						})]
					})
				})
			}

			function O(t) {
				let {
					icon: e,
					header: n,
					description: r
				} = t;
				return (0, i.jsxs)("div", {
					className: d.cardBenefit,
					children: [(0, i.jsx)("div", {
						className: d.cardBenefitIcon,
						children: e
					}), (0, i.jsxs)("div", {
						children: [null != n && (0, i.jsx)(s.x, {
							variant: "text-md/semibold",
							color: "header-primary",
							children: n
						}), (0, i.jsx)(s.x, {
							variant: "text-sm/normal",
							children: r
						})]
					})]
				})
			}
		}
	}
]);
//# sourceMappingURL=9fe604dbddee177f.js.map