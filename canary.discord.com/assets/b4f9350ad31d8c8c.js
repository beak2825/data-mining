"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["66317"], {
		808824: function(e) {
			e.exports = "/assets/8bb674bb2fe63f4a.svg"
		},
		60488: function(e, t, r) {
			r.d(t, {
				v: () => o
			});
			var n = r(255367),
				a = r(73800),
				l = r(709014);
			let i = {
					earn: {
						name: "earn",
						start: 0,
						duration: 180
					},
					spend: {
						name: "spend",
						start: 240,
						duration: 180
					}
				},
				o = e => {
					let t = a.useRef(null),
						o = a.useRef(e);
					o.current = e;
					let u = a.useMemo(() => () => {
							null != t.current && t.current.play(e)
						}, [e]),
						c = a.useCallback(e => {
							var a, u;
							return (0, n.jsx)(l.L, (a = function(e) {
								for (var t = 1; t < arguments.length; t++) {
									var r = null != arguments[t] ? arguments[t] : {},
										n = Object.keys(r);
									"function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
										return Object.getOwnPropertyDescriptor(r, e).enumerable
									}))), n.forEach(function(t) {
										var n;
										n = r[t], t in e ? Object.defineProperty(e, t, {
											value: n,
											enumerable: !0,
											configurable: !0,
											writable: !0
										}) : e[t] = n
									})
								}
								return e
							}({}, e), u = u = {
								src: () => r.e("44980").then(r.t.bind(r, 304306, 19)),
								ref: t,
								initialAnimation: o.current,
								markers: i
							}, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(u)) : (function(e, t) {
								var r = Object.keys(e);
								if (Object.getOwnPropertySymbols) {
									var n = Object.getOwnPropertySymbols(e);
									r.push.apply(r, n)
								}
								return r
							})(Object(u)).forEach(function(e) {
								Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(u, e))
							}), a))
						}, []);
					return {
						events: {},
						play: u,
						getDuration: a.useCallback(() => {
							var e;
							return null == (e = t.current) ? void 0 : e.getDuration()
						}, []),
						getCurrentFrame: a.useCallback(() => {
							var e, r;
							return null != (r = null == (e = t.current) ? void 0 : e.getCurrentFrame()) ? r : null
						}, []),
						Component: c
					}
				}
		},
		934248: function(e, t, r) {
			r.d(t, {
				D: () => o
			});
			var n = r(255367),
				a = r(73800),
				l = r(709014);
			let i = {
					earn: {
						name: "earn",
						start: 0,
						duration: 180
					},
					spend: {
						name: "spend",
						start: 240,
						duration: 180
					}
				},
				o = e => {
					let t = a.useRef(null),
						o = a.useRef(e);
					o.current = e;
					let u = a.useMemo(() => () => {
							null != t.current && t.current.play(e)
						}, [e]),
						c = a.useCallback(e => {
							var a, u;
							return (0, n.jsx)(l.L, (a = function(e) {
								for (var t = 1; t < arguments.length; t++) {
									var r = null != arguments[t] ? arguments[t] : {},
										n = Object.keys(r);
									"function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
										return Object.getOwnPropertyDescriptor(r, e).enumerable
									}))), n.forEach(function(t) {
										var n;
										n = r[t], t in e ? Object.defineProperty(e, t, {
											value: n,
											enumerable: !0,
											configurable: !0,
											writable: !0
										}) : e[t] = n
									})
								}
								return e
							}({}, e), u = u = {
								src: () => r.e("75535").then(r.t.bind(r, 405115, 19)),
								ref: t,
								initialAnimation: o.current,
								markers: i
							}, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(u)) : (function(e, t) {
								var r = Object.keys(e);
								if (Object.getOwnPropertySymbols) {
									var n = Object.getOwnPropertySymbols(e);
									r.push.apply(r, n)
								}
								return r
							})(Object(u)).forEach(function(e) {
								Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(u, e))
							}), a))
						}, []);
					return {
						events: {},
						play: u,
						getDuration: a.useCallback(() => {
							var e;
							return null == (e = t.current) ? void 0 : e.getDuration()
						}, []),
						getCurrentFrame: a.useCallback(() => {
							var e, r;
							return null != (r = null == (e = t.current) ? void 0 : e.getCurrentFrame()) ? r : null
						}, []),
						Component: c
					}
				}
		},
		603077: function(e, t, r) {
			r.d(t, {
				Z: () => n
			});
			let n = (0, r(818083).B)({
				kind: "user",
				id: "2025-03_quests_premium_rewards_holdout",
				label: "Quest Premium Rewards Holdout",
				defaultConfig: {
					enabled: !1
				},
				treatments: [{
					id: 1,
					label: "Enable Quest Premium Rewards",
					config: {
						enabled: !0
					}
				}]
			})
		},
		751648: function(e, t, r) {
			r.d(t, {
				ZO: () => s,
				df: () => d,
				hF: () => b,
				j2: () => f,
				qD: () => h
			}), r(415506);
			var n = r(544891),
				a = r(570140),
				l = r(881052),
				i = r(710845),
				o = r(960048),
				u = r(981631);
			let c = new i.Z("VirtualCurrencyActionCreators");
			async function s() {
				a.Z.wait(() => {
					a.Z.dispatch({
						type: "VIRTUAL_CURRENCY_BALANCE_FETCH"
					})
				});
				try {
					let e = await n.tn.get({
							url: u.ANM.VIRTUAL_CURRENCY_USER_BALANCE,
							rejectWithError: !1
						}),
						t = e.body.balance;
					return a.Z.dispatch({
						type: "VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS",
						balance: t
					}), e.body
				} catch (t) {
					let e = t instanceof l.HF ? t : new l.HF(t);
					a.Z.dispatch({
						type: "VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL",
						error: e
					})
				}
			}
			async function d(e) {
				let {
					skuId: t,
					loadId: r,
					onRedeemStart: i,
					onRedeemSucceed: d,
					onRedeemFail: b,
					shouldRefetchBalance: f = !0
				} = e;
				a.Z.wait(() => {
					a.Z.dispatch({
						type: "VIRTUAL_CURRENCY_REDEEM_START",
						skuId: t
					})
				}), null == i || i();
				try {
					let e = (await n.tn.post({
						url: u.ANM.VIRTUAL_CURRENCY_SKU_REDEEM(t),
						body: {
							checkout_session_id: r
						},
						rejectWithError: !1
					})).body;
					if (null == e || !Array.isArray(e)) {
						let t = "Could not read entitlements from Virtual Currency redemption response. Response: ",
							r = Error(t, e);
						throw c.error(t, e), o.Z.captureException(r, {
							tags: {
								app_context: "virtual_currency"
							}
						}), r
					}
					return a.Z.dispatch({
						type: "VIRTUAL_CURRENCY_REDEEM_SUCCESS",
						skuId: t,
						entitlements: e
					}), f && s(), null == d || d(e), e
				} catch (r) {
					let e = r instanceof l.HF ? r : new l.HF(r);
					a.Z.dispatch({
						type: "VIRTUAL_CURRENCY_REDEEM_FAIL",
						skuId: t,
						error: e
					}), f && s(), null == b || b(e)
				}
			}

			function b(e) {
				let {
					earnedOrbsQuantity: t,
					dedupeKey: r
				} = e;
				return a.Z.dispatch({
					type: "VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_OPEN",
					earnedOrbsQuantity: t,
					dedupeKey: r
				})
			}

			function f() {
				return a.Z.dispatch({
					type: "VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_CLOSE"
				})
			}

			function h(e) {
				return a.Z.dispatch({
					type: "VIRTUAL_CURRENCY_SET_BALANCE_PILL_OVERLAY",
					balancePillOverlay: e
				})
			}
		},
		907584: function(e, t, r) {
			r.d(t, {
				Z: () => n
			});
			let n = (0, r(818083).B)({
				kind: "user",
				id: "2025-01_virtual_currency_rollout",
				label: "Virtual Currency Rollout",
				defaultConfig: {
					enabled: !1
				},
				treatments: [{
					id: 1,
					label: "Enable Virtual Currency features",
					config: {
						enabled: !0
					}
				}]
			})
		},
		43747: function(e, t, r) {
			r.d(t, {
				A: () => n.A,
				f: () => a.f
			});
			var n = r(790542),
				a = r(128077)
		},
		23547: function(e, t, r) {
			r.d(t, {
				Mm: () => h,
				jj: () => b,
				wH: () => d
			});
			var n = r(255367),
				a = r(73800),
				l = r(442837),
				i = r(481060),
				o = r(751648),
				u = r(479766);

			function c(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {},
						n = Object.keys(r);
					"function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
						return Object.getOwnPropertyDescriptor(r, e).enumerable
					}))), n.forEach(function(t) {
						var n;
						n = r[t], t in e ? Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : e[t] = n
					})
				}
				return e
			}
			let s = "balance-widget-menu-coachmark-modal",
				d = () => (0, i.nfh)(s),
				b = () => (0, i.Mr3)(s),
				f = {
					modalKey: s,
					onCloseCallback: o.j2,
					onCloseRequest: async () => {
						await (0, o.j2)()
					}
				};

			function h(e) {
				let t = (0, l.cj)([u.Z], () => u.Z.earnedOrbsCoachmark),
					{
						shouldOpen: o
					} = t;
				return (0, a.useEffect)(() => {
					let t = d();
					if (o && !t) {
						var a;
						(a = c({}, e)).isCoachmarkEnabled && (0, i.ZDy)(async () => {
							let {
								WrappedBalanceWidgetEarnedOrbsCoachmarkModal: e
							} = await r.e("82081").then(r.bind(r, 720463));
							return t => (0, n.jsx)(e, c({}, a, t))
						}, f)
					} else !o && t && b()
				}, [o, e]), c({}, t)
			}
		},
		790542: function(e, t, r) {
			r.d(t, {
				A: () => o
			});
			var n = r(73800),
				a = r(442837),
				l = r(751648),
				i = r(479766);

			function o() {
				let {
					balance: e,
					isFetching: t,
					error: r
				} = (0, a.cj)([i.Z], () => ({
					balance: i.Z.balance,
					isFetching: i.Z.isFetchingBalance,
					error: i.Z.fetchBalanceError
				}));
				return (0, n.useEffect)(() => {
					null !== e || null !== r || t || (0, l.ZO)()
				}, [e, r, t]), {
					balance: e,
					isFetching: t,
					error: r
				}
			}
		},
		511050: function(e, t, r) {
			r.d(t, {
				Z: () => O,
				l: () => h
			});
			var n = r(73800),
				a = r(442837),
				l = r(710845),
				i = r(569984),
				o = r(918701),
				u = r(751648),
				c = r(23547),
				s = r(822857),
				d = r(981631),
				b = r(46140);
			let f = new l.Z("VirtualCurrency"),
				h = e => {
					let {
						location: t
					} = e, {
						enabled: r
					} = (0, s.WX)({
						location: t
					}), l = (0, a.e7)([i.Z], () => {
						if (!r) return null;
						let e = i.Z.getQuest(b.V6);
						return null == e ? null : (0, o.LM)(e.config)
					}, [r]), h = (0, n.useCallback)(e => {
						let {
							forceOpen: t,
							delayMS: r = 500
						} = e;
						if (null == l && !t) return void f.warn("Could not open Intro to Orbs Claimed Coachmark. Reward orb quantity not found or quest does not exist with ID ".concat(b.V6));
						if (!(0, c.wH)()) {
							let e = () => (0, u.hF)({
								earnedOrbsQuantity: null != l ? l : 200,
								dedupeKey: t ? void 0 : b.V6
							});
							if (void 0 === r || 0 === r) return void e();
							setTimeout(() => {
								e()
							}, r)
						}
					}, [l]), O = (0, n.useCallback)(() => {
						(0, c.wH)() && (0, c.jj)()
					}, []);
					return r ? {
						rewardOrbQuantity: l,
						openIntroToOrbsClaimedCoachmark: h,
						closeIntroToOrbsClaimedCoachmark: O
					} : {
						rewardOrbQuantity: void 0,
						openIntroToOrbsClaimedCoachmark: d.dG4,
						closeIntroToOrbsClaimedCoachmark: d.dG4
					}
				},
				O = h
		},
		128077: function(e, t, r) {
			r.d(t, {
				f: () => i
			}), r(388685);
			var n = r(73800),
				a = r(751648),
				l = r(388032);

			function i() {
				let [e, t] = (0, n.useState)(""), [r, i] = (0, n.useState)([]), [o, u] = (0, n.useState)(null), [c, s] = (0, n.useState)(!1);
				return (0, n.useEffect)(() => {
					if (null != o) return void t(l.intl.format(l.t["7gHWra"], {
						amount: "1 orb",
						errorMessage: o.message
					}));
					if (null != r && r.length > 0) {
						let e = r.map(e => {
							var t;
							return null == (t = e.sku) ? void 0 : t.name
						});
						t(l.intl.format(l.t.JxNFam, {
							amountDescription: "1 orb",
							redeemedItemDescription: "".concat(1 === e.length ? "SKU" : "SKUs", ": ").concat(e.join(", "), ". Entitlement ").concat(1 === r.length ? "ID" : "IDs", ": ").concat(r.map(e => e.id).join(", "))
						}));
						return
					}
					t("")
				}, [r, o]), {
					entitlements: r,
					error: o,
					isSubmitting: c,
					responseMessage: e,
					redeemVirtualCurrency: function(e, t, r) {
						return (0, a.df)({
							skuId: e,
							loadId: t,
							onRedeemStart: () => {
								s(!0), u(null)
							},
							onRedeemSucceed: e => {
								i(e), s(!1), null == r || r(e)
							},
							onRedeemFail: e => {
								u(e), s(!1)
							}
						})
					}
				}
			}
		},
		479766: function(e, t, r) {
			r.d(t, {
				Z: () => u
			}), r(539854);
			var n, a = r(442837),
				l = r(570140);

			function i(e, t, r) {
				return t in e ? Object.defineProperty(e, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = r, e
			}
			class o extends(n = a.ZP.Store) {
				get earnedOrbsCoachmark() {
					return {
						shouldOpen: this._earnedOrbsCoachmarkOpen,
						earnedOrbsQuantity: this._earnedOrbsCoachmarkQuantity
					}
				}
				get redeemError() {
					return this._redeemVirtualCurrencyError
				}
				get isRedeeming() {
					return this._isRedeemingVirtualCurrency
				}
				get redeemingSkuId() {
					return this._redeemingSkuId
				}
				get entitlements() {
					return this._entitlements
				}
				get balance() {
					return this._balance
				}
				get fetchBalanceError() {
					return this._fetchBalanceError
				}
				get isFetchingBalance() {
					return this._isFetchingBalance
				}
				get onboardingModalOpenedPrior() {
					return this._onboardingModalOpenedPrior
				}
				get balancePillOverlay() {
					return this._balancePillOverlay
				}
				setBalancePillOverlay(e) {
					this._balancePillOverlay = e
				}
				getCurrentBalance() {
					return this.balance
				}
				handleBalanceStateReset() {
					this._balance = null, this._fetchBalanceError = null, this._isFetchingBalance = !1
				}
				handleBalanceFetch(e) {
					let {} = e;
					this._isFetchingBalance = !0, this._fetchBalanceError = null
				}
				handleBalanceFetchSuccess(e) {
					let {
						balance: t
					} = e;
					this._isFetchingBalance = !1, this._balance = t
				}
				handleBalanceFetchFail(e) {
					let {
						error: t
					} = e;
					this._isFetchingBalance = !1, this._fetchBalanceError = t
				}
				handleBalanceUpdate(e) {
					let {
						balance: t
					} = e;
					this._balance = t
				}
				handleRedeemVirtualCurrencyStart(e) {
					let {
						skuId: t
					} = e;
					this._entitlements = null, this._redeemingSkuId = t, this._redeemVirtualCurrencyError = null, this._isRedeemingVirtualCurrency = !0
				}
				handleRedeemVirtualCurrencySuccess(e) {
					let {
						entitlements: t
					} = e;
					this._entitlements = t, this._redeemingSkuId = null, this._isRedeemingVirtualCurrency = !1
				}
				handleRedeemVirtualCurrencyFail(e) {
					let {
						error: t
					} = e;
					this._entitlements = null, this._redeemVirtualCurrencyError = t, this._redeemingSkuId = null, this._isRedeemingVirtualCurrency = !1
				}
				handleOnboardingModalOpen(e) {
					let {} = e;
					this._onboardingModalOpenedPrior = !0
				}
				handleOnboardingModalReset(e) {
					let {} = e;
					this._onboardingModalOpenedPrior = !1, this._earnedOrbsCoachmarkOpen = !1, this._earnedOrbsCoachmarkDedupeKeys = [], this._earnedOrbsCoachmarkQuantity = 0
				}
				handleEarnedOrbsCoachmarkOpen(e) {
					let {
						earnedOrbsQuantity: t,
						dedupeKey: r
					} = e;
					void 0 !== r && this._earnedOrbsCoachmarkDedupeKeys.includes(r) || (this._earnedOrbsCoachmarkOpen = !0, this._earnedOrbsCoachmarkQuantity = t, void 0 !== r && this._earnedOrbsCoachmarkDedupeKeys.push(r))
				}
				handleEarnedOrbsCoachmarkClose(e) {
					let {} = e;
					this._earnedOrbsCoachmarkOpen = !1, this._earnedOrbsCoachmarkQuantity = 0
				}
				constructor() {
					super(l.Z, {
						VIRTUAL_CURRENCY_REDEEM_START: e => this.handleRedeemVirtualCurrencyStart(e),
						VIRTUAL_CURRENCY_REDEEM_SUCCESS: e => this.handleRedeemVirtualCurrencySuccess(e),
						VIRTUAL_CURRENCY_REDEEM_FAIL: e => this.handleRedeemVirtualCurrencyFail(e),
						VIRTUAL_CURRENCY_BALANCE_FETCH: e => this.handleBalanceFetch(e),
						VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS: e => this.handleBalanceFetchSuccess(e),
						VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL: e => this.handleBalanceFetchFail(e),
						VIRTUAL_CURRENCY_BALANCE_UPDATE: e => this.handleBalanceUpdate(e),
						VIRTUAL_CURRENCY_ONBOARDING_MODAL_OPEN: e => this.handleOnboardingModalOpen(e),
						VIRTUAL_CURRENCY_ONBOARDING_MODAL_RESET: e => this.handleOnboardingModalReset(e),
						VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_OPEN: e => this.handleEarnedOrbsCoachmarkOpen(e),
						VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_CLOSE: e => this.handleEarnedOrbsCoachmarkClose(e),
						LOGIN_SUCCESS: () => this.handleBalanceStateReset(),
						VIRTUAL_CURRENCY_SET_BALANCE_PILL_OVERLAY: e => {
							this.setBalancePillOverlay(e.balancePillOverlay)
						}
					}), i(this, "_entitlements", null), i(this, "_redeemingSkuId", null), i(this, "_isRedeemingVirtualCurrency", !1), i(this, "_redeemVirtualCurrencyError", null), i(this, "_balance", null), i(this, "_fetchBalanceError", null), i(this, "_isFetchingBalance", !1), i(this, "_onboardingModalOpenedPrior", !1), i(this, "_earnedOrbsCoachmarkOpen", !1), i(this, "_earnedOrbsCoachmarkDedupeKeys", []), i(this, "_earnedOrbsCoachmarkQuantity", 0), i(this, "_balancePillOverlay", !1)
				}
			}
			i(o, "displayName", "VirtualCurrencyStore");
			let u = new o
		},
		583478: function(e, t, r) {
			r.d(t, {
				Z: () => _
			}), r(388685);
			var n = r(255367),
				a = r(73800),
				l = r(120356),
				i = r.n(l),
				o = r(108542),
				u = r(481060),
				c = r(110924),
				s = r(710845),
				d = r(168232),
				b = r(976845),
				f = r(48541),
				h = r(718486);
			let O = new s.Z("BalanceCounter"),
				y = (0, d.dU)(void 0) === f.C.PRODUCTION,
				p = e => null === e ? 0 : "".concat(e.toFixed(0)).length,
				m = (e, t) => {
					let r = e > 0,
						n = t * b.eg[r ? "EARN" : "SPEND"];
					return {
						duration: n,
						delay: r ? t - n : 0
					}
				},
				C = (e, t, r) => null === r ? Math.max(e, t) : Math.max(t, r),
				g = e => {
					var t, r;
					let {
						value: l,
						onSetDigitCount: i,
						onValueChange: c,
						onValueReached: s,
						targetTotalCounterTime: d = 3e3
					} = e, [b, f] = (0, a.useState)(0), h = (0, a.useRef)(null), C = (0, a.useRef)(null);
					(0, a.useEffect)(() => {
						if (null === l) return;
						if (null === h.current) {
							h.current = l;
							return
						}
						let e = null !== h.current ? l - h.current : l;
						0 !== e && null !== h.current && c(e), C.current = {
							lastChangedAt: Date.now(),
							totalDelta: Math.abs(e)
						}
					}, [l, c]);
					let g = null != l ? l : 0,
						_ = null != (t = h.current) ? t : g,
						{
							duration: E,
							delay: R
						} = m(g - _, d),
						{
							number: j
						} = (0, u.q_F)({
							from: {
								number: null != (r = h.current) ? r : g
							},
							number: g,
							config: {
								mass: 1,
								tension: 20,
								friction: 10,
								duration: E
							},
							delay: R,
							onStart: () => {
								i(p(_))
							},
							onRest: () => {
								if (f(b + 1), s(), !y && null !== C.current && null !== h.current) {
									let e = Date.now();
									O.log("Balance Counter finished updating: ", {
										time: e - C.current.lastChangedAt,
										delta: g - h.current
									})
								}
								i(p(g)), h.current = g
							}
						}),
						v = p(Math.max(null != l ? l : 0, j.get()));
					return (0, n.jsx)(o.animated.div, {
						style: {
							width: "calc(".concat(v, "ch)")
						},
						children: j.to(e => "".concat(e.toFixed(0)))
					})
				},
				_ = e => {
					var t, {
							value: r,
							className: l
						} = e,
						o = function(e, t) {
							if (null == e) return {};
							var r, n, a = function(e, t) {
								if (null == e) return {};
								var r, n, a = {},
									l = Object.keys(e);
								for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
								return a
							}(e, t);
							if (Object.getOwnPropertySymbols) {
								var l = Object.getOwnPropertySymbols(e);
								for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
							}
							return a
						}(e, ["value", "className"]);
					let s = null === r,
						[d, b] = (0, a.useState)(null),
						f = (0, a.useMemo)(() => p(r), [r]),
						O = null != (t = (0, c.Z)(f)) ? t : 0,
						y = (0, a.useMemo)(() => C(O, f, d), [O, f, d]);
					return (0, n.jsx)(u.Text, {
						variant: "text-md/semibold",
						className: i()(h.balanceCounterText, s ? void 0 : h.balanceCounterMargin, l),
						style: {
							width: "".concat(s ? 0 : y, "ch"),
							opacity: s ? "0" : 1
						},
						children: s ? null : (0, n.jsx)(g, function(e) {
							for (var t = 1; t < arguments.length; t++) {
								var r = null != arguments[t] ? arguments[t] : {},
									n = Object.keys(r);
								"function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
									return Object.getOwnPropertyDescriptor(r, e).enumerable
								}))), n.forEach(function(t) {
									var n;
									n = r[t], t in e ? Object.defineProperty(e, t, {
										value: n,
										enumerable: !0,
										configurable: !0,
										writable: !0
									}) : e[t] = n
								})
							}
							return e
						}({
							onSetDigitCount: e => {
								e !== d && b(e)
							},
							value: r
						}, o))
					})
				}
		},
		970815: function(e, t, r) {
			r.d(t, {
				A4: () => h,
				b6: () => u.b
			}), r(388685);
			var n = r(255367),
				a = r(73800),
				l = r(120356),
				i = r.n(l),
				o = r(481060),
				u = r(317257),
				c = r(583478),
				s = r(976845),
				d = r(738134);
			let b = () => (0, n.jsx)("img", {
					className: d.notificationBadge,
					src: r(808824),
					alt: ""
				}),
				f = (e, t) => e === u.b.SELECTED ? d.selected : t ? d.highlighted : d.default,
				h = (0, a.forwardRef)(function(e, t) {
					let {
						id: r,
						balance: l,
						balanceWidgetMode: h = u.b.DEFAULT,
						showNotificationBadge: O,
						onClick: y,
						onMouseDown: p,
						disabled: m,
						isInModalOverlay: C,
						className: g
					} = e, [_, E] = (0, a.useState)(!1), R = (0, a.useMemo)(() => f(h, _), [h, _]), [j, v] = (0, a.useState)(!1), [S, P] = (0, a.useState)(!1), [A, w] = (0, a.useState)(.9 * s.D2), L = null === l;
					(0, a.useEffect)(() => {
						L && !j && (v(!0), setTimeout(() => {
							P(!0)
						}, 500))
					}, [L, v, j]), (0, a.useEffect)(() => {
						S && !L && v(!1)
					}, [L, S]);
					let k = L || j,
						D = j ? null : l,
						[N, U] = (0, a.useState)(null),
						I = (0, a.useRef)(null),
						T = (0, a.useCallback)(() => {
							I.current = null, U(null)
						}, []),
						V = (0, a.useCallback)(e => {
							let t = N === I.current;
							e > 0 && ("earn" !== N || !t) && U("earn")
						}, [U, N]);
					return (0, n.jsx)(o.P3F, {
						onClick: k ? void 0 : y,
						className: i()(d.clickable, {
							[d.disabled]: m
						}),
						id: null != r ? r : "balance-widget-pill",
						children: (0, n.jsxs)("span", {
							onMouseDown: p,
							onMouseEnter: m ? void 0 : () => E(!0),
							onMouseLeave: m ? void 0 : () => E(!1),
							ref: t,
							className: i()(d.container, R, g, {
								[d.containerLoading]: k,
								[d.inModalOverlay]: C,
								[d.disabled]: m
							}),
							children: [(0, n.jsx)("div", {
								className: i()(d.orbsLottieContainer, k ? d.orbIconloading : void 0),
								children: (0, n.jsx)(s.ZP, function(e) {
									for (var t = 1; t < arguments.length; t++) {
										var r = null != arguments[t] ? arguments[t] : {},
											n = Object.keys(r);
										"function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
											return Object.getOwnPropertyDescriptor(r, e).enumerable
										}))), n.forEach(function(t) {
											var n;
											n = r[t], t in e ? Object.defineProperty(e, t, {
												value: n,
												enumerable: !0,
												configurable: !0,
												writable: !0
											}) : e[t] = n
										})
									}
									return e
								}({}, {
									currentAnimationType: N,
									animationTypeRef: I,
									onSetAnimationDurationMS: w
								}))
							}), (0, n.jsx)(c.Z, {
								value: D,
								onValueChange: V,
								onValueReached: T,
								targetTotalCounterTime: A,
								className: k ? d.counterLoading : void 0
							}), O && (0, n.jsx)(b, {})]
						})
					})
				})
		},
		82856: function(e, t, r) {
			r.d(t, {
				o: () => h,
				y: () => O
			});
			var n = r(255367),
				a = r(73800),
				l = r(442837),
				i = r(481060),
				o = r(493773),
				u = r(819640),
				c = r(751648),
				s = r(479766),
				d = r(970815),
				b = r(981631);

			function f(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {},
						n = Object.keys(r);
					"function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
						return Object.getOwnPropertyDescriptor(r, e).enumerable
					}))), n.forEach(function(t) {
						var n;
						n = r[t], t in e ? Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : e[t] = n
					})
				}
				return e
			}

			function h() {
				let e = (0, l.e7)([s.Z], () => s.Z.balancePillOverlay);
				return (0, o.ZP)(() => {
					setTimeout(() => {
						e || (0, c.qD)(!0)
					}, 300)
				}), (0, a.useEffect)(() => () => {
					!(0, i.$sL)() && e && (0, c.qD)(!1)
				}, [e]), null
			}

			function O(e) {
				var t, r, {
						pillRef: o,
						anchorPillType: c
					} = e,
					h = function(e, t) {
						if (null == e) return {};
						var r, n, a = function(e, t) {
							if (null == e) return {};
							var r, n, a = {},
								l = Object.keys(e);
							for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
							return a
						}(e, t);
						if (Object.getOwnPropertySymbols) {
							var l = Object.getOwnPropertySymbols(e);
							for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
						}
						return a
					}(e, ["pillRef", "anchorPillType"]);
				let {
					balancePillOverlay: O
				} = (0, l.cj)([s.Z], () => ({
					balancePillOverlay: s.Z.balancePillOverlay
				})), y = (0, n.jsx)(d.A4, f({
					ref: o
				}, h)), p = (0, n.jsx)(d.A4, (t = f({}, h), r = r = {
					isInModalOverlay: !0,
					disabled: !0
				}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
					var r = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var n = Object.getOwnPropertySymbols(e);
						r.push.apply(r, n)
					}
					return r
				})(Object(r)).forEach(function(e) {
					Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
				}), t)), {
					isAnyLayerOpen: m,
					isLastLayerShopFullScreen: C
				} = (0, l.cj)([u.Z], () => {
					let e = u.Z.getLayers();
					return {
						isLastLayerShopFullScreen: e.length > 0 && e[e.length - 1] === b.S9g.COLLECTIBLES_SHOP,
						isAnyLayerOpen: u.Z.hasLayers()
					}
				}), g = a.useMemo(() => !!O && (!m || C && "SHOP_FULLSCREEN" === c), [O, m, C, c]), _ = null != o.current ? o.current.offsetHeight : 36;
				return (0, n.jsx)(i.yRy, {
					fixed: !0,
					autoInvert: !1,
					renderPopout: () => p,
					position: "bottom",
					align: "right",
					shouldShow: g,
					spacing: -_,
					animation: i.yRy.Animation.NONE,
					targetElementRef: o,
					positionKey: "".concat(h.balance, "-").concat(O),
					children: () => y
				})
			}
		},
		976845: function(e, t, r) {
			r.d(t, {
				D2: () => h,
				ZP: () => C,
				eg: () => O
			});
			var n = r(255367),
				a = r(73800),
				l = r(60488),
				i = r(934248),
				o = r(780384),
				u = r(410030),
				c = r(738134);

			function s(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {},
						n = Object.keys(r);
					"function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
						return Object.getOwnPropertyDescriptor(r, e).enumerable
					}))), n.forEach(function(t) {
						var n;
						n = r[t], t in e ? Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : e[t] = n
					})
				}
				return e
			}

			function d(e, t) {
				return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
					var r = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var n = Object.getOwnPropertySymbols(e);
						r.push.apply(r, n)
					}
					return r
				})(Object(t)).forEach(function(r) {
					Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
				}), e
			}

			function b(e, t) {
				if (null == e) return {};
				var r, n, a = function(e, t) {
					if (null == e) return {};
					var r, n, a = {},
						l = Object.keys(e);
					for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
					return a
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var l = Object.getOwnPropertySymbols(e);
					for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
				}
				return a
			}
			let f = {
					width: 60,
					height: 60
				},
				h = 3e3,
				O = {
					EARN: .25,
					SPEND: .3
				},
				y = e => {
					let {
						currentAnimationType: t,
						animationTypeRef: r,
						onSetAnimationDurationMS: n,
						play: l,
						getDuration: i
					} = e, o = i(), u = null != o ? 1e3 * o : h;
					(0, a.useEffect)(() => {
						null !== t && t !== r.current && (r.current = t, l())
					}, [t, l, r]), (0, a.useEffect)(() => {
						n(u)
					}, [n, u])
				},
				p = e => {
					var {
						currentAnimationType: t
					} = e, r = b(e, ["currentAnimationType"]);
					let a = (0, i.D)(null != t ? t : "earn"),
						{
							Component: l
						} = a;
					return y(s({
						currentAnimationType: t
					}, r, b(a, ["Component"]))), (0, n.jsx)(l, d(s({}, f), {
						size: "custom",
						className: c.orbsLottie,
						useLottieDefaultColors: !0
					}))
				},
				m = e => {
					var {
						currentAnimationType: t
					} = e, r = b(e, ["currentAnimationType"]);
					let a = (0, l.v)(null != t ? t : "earn"),
						{
							Component: i
						} = a;
					return y(s({
						currentAnimationType: t
					}, r, b(a, ["Component"]))), (0, n.jsx)(i, d(s({}, f), {
						size: "custom",
						className: c.orbsLottie,
						useLottieDefaultColors: !0
					}))
				},
				C = e => {
					let t = (0, u.ZP)();
					return (0, o.ap)(t) ? (0, n.jsx)(m, s({}, e)) : (0, n.jsx)(p, s({}, e))
				}
		}
	}
]);
//# sourceMappingURL=b4f9350ad31d8c8c.js.map