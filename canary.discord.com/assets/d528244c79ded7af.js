"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["77803"], {
		507608: function(e, n, t) {
			t.d(n, {
				AF: () => U,
				hd: () => z,
				zz: () => B
			}), t(388685), t(953529), t(781311);
			var r = t(255367),
				i = t(73800),
				l = t(905322),
				s = t(200207),
				o = t(269210),
				u = t(442837),
				a = t(481060),
				c = t(607070),
				d = t(100527),
				p = t(906732),
				m = t(565138),
				b = t(270144),
				v = t(171246),
				g = t(930155),
				j = t(929011),
				f = t(889989),
				h = t(263519),
				x = t(430824),
				y = t(55563),
				O = t(551428),
				P = t(626135),
				I = t(768581),
				k = t(73346),
				S = t(624138),
				w = t(591759),
				N = t(601911),
				Z = t(150414),
				E = t(110742),
				T = t(680005),
				R = t(955335),
				D = t(981631),
				M = t(388032),
				_ = t(695025);

			function A(e) {
				for (var n = 1; n < arguments.length; n++) {
					var t = null != arguments[n] ? arguments[n] : {},
						r = Object.keys(t);
					"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					}))), r.forEach(function(n) {
						var r;
						r = t[n], n in e ? Object.defineProperty(e, n, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : e[n] = r
					})
				}
				return e
			}

			function C(e, n) {
				return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
					var t = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t.push.apply(t, r)
					}
					return t
				})(Object(n)).forEach(function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}), e
			}
			let F = new Intl.DateTimeFormat(M.intl.currentLocale, {
				month: "short",
				day: "numeric"
			});

			function U(e) {
				let {
					app: n,
					guildId: t,
					subscriptions: s,
					otps: o
				} = e, a = i.useMemo(() => (0, N.y)(n, 100), [n]), {
					bot: m
				} = n, b = i.useMemo(() => {
					var e;
					if ((null == m ? void 0 : m.banner) == null) return;
					let n = (0, I.aN)({
						id: m.id,
						banner: m.banner,
						size: 1024,
						canAnimate: !1
					});
					return null != n && null != (e = w.Z.toURLSafe(n)) ? e : void 0
				}, [m]), v = i.useMemo(() => {
					var e;
					if ((null == m ? void 0 : m.banner) == null) return;
					let n = (0, I.aN)({
						id: m.id,
						banner: m.banner,
						size: 1024,
						canAnimate: !0
					});
					return null != n && null != (e = w.Z.toURLSafe(n)) ? e : void 0
				}, [m]), g = (0, u.e7)([c.Z], () => c.Z.useReducedMotion), j = i.useMemo(() => [...s.map(e => e.skuId), ...o.map(e => e.skuId)], [s, o]), {
					analyticsLocations: f
				} = (0, p.ZP)(d.Z.APP_STOREFRONT);
				return i.useEffect(() => {
					0 !== j.length && P.default.track(D.rMx.VIEW_PREMIUM_APP_STOREFRONT, {
						application_id: n.id,
						sku_ids: j,
						location_stack: f
					})
				}, [f, n.id, j]), (0, r.jsxs)("div", {
					className: _.wrapper,
					children: [(0, r.jsx)(l.j, {
						title: n.name,
						iconSrc: a,
						backgroundSrc: b,
						animatedBackgroundSrc: v,
						prefersReducedMotion: g
					}), (0, r.jsx)(L, {
						appId: n.id,
						subscriptions: s,
						otps: o,
						guildId: t
					})]
				})
			}

			function L(e) {
				let {
					appId: n,
					subscriptions: t,
					otps: i,
					guildId: l
				} = e;
				return (0, r.jsxs)("div", {
					className: _.productsContainer,
					children: [t.length > 0 && (0, r.jsxs)("div", {
						children: [(0, r.jsx)(R.r, {
							subscriptions: t
						}), (0, r.jsx)("div", {
							className: _.productSection,
							children: t.map(e => (0, r.jsx)(B, {
								appId: n,
								guildId: l,
								listing: e,
								subscriptionType: (0, v.KW)(e.skuFlags) ? "user" : "guild"
							}, e.id))
						})]
					}), i.length > 0 && (0, r.jsxs)("div", {
						children: [(0, r.jsx)(a.X6q, {
							variant: "heading-lg/semibold",
							children: M.intl.string(M.t.yUGTs7)
						}), (0, r.jsx)("div", {
							className: _.productSection,
							children: i.map(e => (0, r.jsx)(z, {
								skuId: e.skuId,
								appId: n
							}, e.id))
						})]
					})]
				})
			}

			function B(e) {
				var n, l;
				let {
					appId: s,
					guildId: c,
					listing: d,
					subscriptionType: p,
					onDetails: j
				} = e, {
					data: O
				} = (0, g.H)(d.skuId), P = null == O ? void 0 : O[0], I = (0, u.e7)([y.Z], () => y.Z.get(d.skuId), [d.skuId]), k = (0, u.e7)([x.Z], () => x.Z.getGuild(c), [c]), S = (0, u.e7)([y.Z], () => y.Z.getParentSKU(d.skuId), [d.skuId]), w = (0, b.Ev)(S, c), N = null == w ? void 0 : w.subscription, E = (0, b.cr)(S, c), R = null != N && (0, v.Jf)(N, I), U = null != E && (null == w || null == (n = w.subscriptionPlan) ? void 0 : n.id) !== (null == E ? void 0 : E.subscriptionPlan.id), L = !1 === R && (null == E ? void 0 : E.subscriptionPlan.skuId) === d.skuId, B = (null == w ? void 0 : w.subscriptionPlan.skuId) === d.skuId, {
					openModal: z,
					subscriptionPurchaseButtonState: G,
					isGuildSubscribed: q
				} = (0, h.Z)({
					skuId: d.skuId,
					initialSubscribeForGuild: c,
					analyticsLocation: D.Sbl.APP_STOREFRONT
				}), K = i.useMemo(() => {
					var e;
					return null == (e = d.benefits) ? void 0 : e.map(e => ({
						id: e.id,
						title: e.name,
						description: e.description,
						icon: (0, f.n)(s, e.icon)
					}))
				}, [s, d.benefits]), V = i.useMemo(() => null != d.thumbnail ? (0, Z.q)(s, d.thumbnail, 256) : void 0, [s, d.thumbnail]), W = i.useCallback(e => (0, r.jsx)(T.pV, C(A({}, e), {
					appId: s,
					subscriptionType: p,
					skuId: d.skuId,
					subscriptionPlan: P,
					state: G
				})), [s, p, d.skuId, P, G]), X = i.useMemo(() => {
					if (U && (null == N ? void 0 : N.currentPeriodEnd) != null) {
						let e = F.format(null == N ? void 0 : N.currentPeriodEnd);
						if (B) return M.intl.formatToPlainString(M.t.EV2lZ2, {
							date: e
						});
						if (L) return M.intl.formatToPlainString(M.t["2w6+ND"], {
							date: e
						})
					}
					if (q) return (0, r.jsxs)(r.Fragment, {
						children: [null != k && (0, r.jsx)(m.Z, {
							guild: k,
							size: m.Z.Sizes.MINI
						}), M.intl.string(M.t.l8ufqK)]
					})
				}, [null == N ? void 0 : N.currentPeriodEnd, k, U, B, q, L]), H = null != X ? (0, r.jsx)(a.Text, {
					color: "header-secondary",
					variant: "text-sm/normal",
					className: _.subscriptionCardSubtext,
					children: X
				}) : void 0;
				return (0, r.jsx)(o.Uj, {
					title: d.summary,
					subtitle: H,
					maxBenefits: null != H ? o.ZI - 1 : o.ZI,
					description: null != (l = d.description) ? l : void 0,
					imgSrc: V,
					onPurchase: z,
					renderPurchaseButton: W,
					benefitItems: null != K ? K.map(e => (0, r.jsx)(o.Gm, {
						description: e.title,
						icon: e.icon
					}, e.id)) : void 0,
					onDetails: null != j ? j : null != K ? () => {
						(0, a.ZDy)(async () => {
							let {
								SubscriptionDetailsModal: e
							} = await Promise.all([t.e("86282"), t.e("93287")]).then(t.bind(t, 519896));
							return n => (0, r.jsx)(e, A({
								appId: s,
								subscriptionType: p,
								skuId: d.skuId,
								guildId: c
							}, n))
						})
					} : void 0
				})
			}

			function z(e) {
				var n, i, l, o;
				let {
					skuId: c,
					appId: m,
					onDetails: b
				} = e, {
					analyticsLocations: v
				} = (0, p.ZP)(d.Z.APP_STOREFRONT), g = (0, u.e7)([O.Z], () => O.Z.getForSKU(c), [c]), f = (0, u.e7)([y.Z], () => y.Z.get(c), [c]), h = (0, E.M)(c);
				if (null == f) return null;
				let x = null != (i = f.name) ? i : "",
					P = null != (l = null == g || null == (n = g.description) ? void 0 : n.trim()) ? l : void 0,
					I = (null == g ? void 0 : g.headerBackground) != null && null != (o = w.Z.toURLSafe((0, k._W)(m, g.headerBackground, 256))) ? o : void 0,
					N = f.type === D.epS.DURABLE && h,
					Z = f.type === D.epS.DURABLE ? N ? M.intl.string(M.t.bm82mp) : M.intl.string(M.t["6gprwc"]) : void 0,
					{
						price: R
					} = f;
				return null == R ? null : (0, r.jsx)(s.I, {
					title: x,
					description: P,
					headerImage: I,
					availabilityLabel: Z,
					onDetails: null != b ? b : (0, S.Ew)(P) ? void 0 : () => {
						(0, a.ZDy)(async () => {
							let {
								ItemDetailsModal: e
							} = await t.e("69796").then(t.bind(t, 147496));
							return n => (0, r.jsx)(e, A({
								appId: m,
								skuId: c
							}, n))
						})
					},
					PurchaseButton: e => (0, r.jsx)(T.YG, C(A({}, e), {
						appId: m,
						sku: f
					})),
					onPurchase: () => {
						(0, j.r)({
							appId: m,
							skuId: f.id,
							analyticsLocations: v
						})
					}
				})
			}
		},
		955335: function(e, n, t) {
			t.d(n, {
				r: () => p
			});
			var r = t(255367);
			t(73800);
			var i = t(481060),
				l = t(630388),
				s = t(981631),
				o = t(388032),
				u = t(729463);

			function a(e) {
				for (var n = 1; n < arguments.length; n++) {
					var t = null != arguments[n] ? arguments[n] : {},
						r = Object.keys(t);
					"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					}))), r.forEach(function(n) {
						var r;
						r = t[n], n in e ? Object.defineProperty(e, n, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : e[n] = r
					})
				}
				return e
			}

			function c(e, n) {
				return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
					var t = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t.push.apply(t, r)
					}
					return t
				})(Object(n)).forEach(function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}), e
			}
			let d = {
				size: "md",
				color: i.TVs.colors.INTERACTIVE_NORMAL
			};

			function p(e) {
				let {
					subscriptions: n,
					color: t = "text-default"
				} = e, p = n.some(e => (0, l.yE)(e.skuFlags, s.l4R.APPLICATION_GUILD_SUBSCRIPTION));
				return (0, r.jsx)(i.X6q, {
					variant: "heading-lg/semibold",
					color: t,
					className: u.heading,
					children: p ? (0, r.jsxs)(r.Fragment, {
						children: [(0, r.jsx)(i.QTo, c(a({}, d), {
							color: "currentColor"
						})), o.intl.string(o.t.XIhSoq)]
					}) : (0, r.jsxs)(r.Fragment, {
						children: [(0, r.jsx)(i.tBG, c(a({}, d), {
							color: "currentColor"
						})), o.intl.string(o.t.dxfZpq)]
					})
				})
			}
		},
		905322: function(e, n, t) {
			t.d(n, {
				j: () => o
			});
			var r = t(255367),
				i = t(73800),
				l = t(777207),
				s = t(210523);

			function o(e) {
				let {
					title: n,
					subtitle: t,
					iconSrc: o,
					backgroundSrc: u,
					animatedBackgroundSrc: a,
					prefersReducedMotion: c = !0
				} = e, d = i.useMemo(() => {
					let e = null != u ? u : o;
					if (null != e) return {
						"--custom-background-url": "url(".concat(e.toString(), ")")
					}
				}, [u, o]), p = i.useMemo(() => {
					if (null == u) return;
					let e = {
						"--custom-background-static": "url(".concat(u.toString())
					};
					return c || null == a || (e["--custom-background-animated"] = "url(".concat(a.toString(), ")")), e
				}, [a, u, c]);
				return (0, r.jsxs)("div", {
					className: s.wrapper,
					children: [(0, r.jsx)("div", {
						className: s.background,
						style: d
					}), (0, r.jsxs)("div", {
						className: s.content,
						children: [null != o && (0, r.jsx)("div", {
							className: s.icon,
							children: (0, r.jsx)("img", {
								src: o.toString(),
								alt: ""
							})
						}), (0, r.jsxs)("div", {
							children: [(0, r.jsx)(l.x, {
								variant: "heading-xl/bold",
								tag: "div",
								children: n
							}), null != t && (0, r.jsxs)(l.x, {
								variant: "text-sm/normal",
								children: ["“", t, "”"]
							})]
						})]
					}), null != u ? (0, r.jsx)("div", {
						className: s.image,
						style: p
					}) : null]
				})
			}
		},
		200207: function(e, n, t) {
			t.d(n, {
				I: () => d
			}), t(953529);
			var r = t(255367);
			t(73800);
			var i = t(120356),
				l = t.n(i),
				s = t(708816),
				o = t(790472),
				u = t(777207),
				a = t(559554),
				c = t(820468);

			function d(e) {
				let {
					title: n,
					description: t,
					headerImage: i,
					onDetails: d,
					onPurchase: p,
					PurchaseButton: m,
					availabilityLabel: b
				} = e;
				return (0, r.jsx)(s.tE, {
					children: (0, r.jsxs)("div", {
						className: l()(a.wrapper, c.hoverCard),
						tabIndex: 0,
						onClick: () => {
							null != d ? d() : null != p && p()
						},
						onKeyUp: e => {
							"Enter" === e.key && (e.stopPropagation(), e.preventDefault(), null != d ? d() : null != p && p())
						},
						children: [(0, r.jsx)("div", {
							className: a.cardHeaderImg,
							style: null != i ? {
								backgroundImage: null != i ? "url(".concat(i.toString(), ")") : void 0
							} : void 0,
							children: null == i && (0, r.jsx)(o.P, {
								color: "white",
								size: "custom",
								height: 80,
								width: 80
							})
						}), (0, r.jsxs)("div", {
							className: a.details,
							children: [(0, r.jsx)(u.x, {
								color: "header-primary",
								variant: "text-md/semibold",
								children: n
							}), null != t && (0, r.jsx)(u.x, {
								className: a.description,
								color: "text-muted",
								variant: "text-sm/normal",
								children: t
							})]
						}), null != m && (0, r.jsxs)("div", {
							className: a.footer,
							children: [(0, r.jsx)(u.x, {
								color: "interactive-normal",
								variant: "text-sm/normal",
								children: b
							}), (0, r.jsx)(m, {
								onClick: e => {
									e.stopPropagation(), null == p || p()
								}
							})]
						})]
					})
				})
			}
		}
	}
]);
//# sourceMappingURL=d528244c79ded7af.js.map