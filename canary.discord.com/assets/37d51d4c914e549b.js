"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["94363"], {
		816782: function(e, t, n) {
			n.d(t, {
				Z: () => i
			});
			var r = n(570140);
			let i = {
				toggleMembersSection() {
					r.Z.dispatch({
						type: "CHANNEL_TOGGLE_MEMBERS_SECTION"
					})
				},
				toggleUserProfileSidebarSection() {
					r.Z.dispatch({
						type: "USER_PROFILE_SIDEBAR_TOGGLE_SECTION"
					})
				},
				toggleSummariesSection() {
					r.Z.dispatch({
						type: "CHANNEL_TOGGLE_SUMMARIES_SECTION"
					})
				}
			}
		},
		622545: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			var r = n(388032);
			let i = ["a", "b", "c", "d"],
				l = e => e;

			function a(e, t) {
				let n = {},
					r = Math.min(e.length, i.length);
				for (let l = 0; l < r; ++l) n[i[l]] = (n, r) => t(e[l], r);
				return n
			}
			class s {
				asString() {
					return this.transformed(l)
				}
				isEmpty() {
					return 0 === this.items.length
				}
				transformed(e) {
					switch (this.items.length) {
						case 0:
							return "";
						case 1:
							return e(this.items[0], "");
						case 2:
							return r.intl.format(r.t.GENERIC_FORMATTED_LIST_TWO, a(this.items, e));
						case 3:
							return r.intl.format(r.t.GENERIC_FORMATTED_LIST_THREE, a(this.items, e));
						default:
							return r.intl.format(r.t.GENERIC_FORMATTED_LIST_FOUR, a(this.items, e))
					}
				}
				constructor(e) {
					var t, n;
					n = void 0, (t = "items") in this ? Object.defineProperty(this, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : this[t] = n, this.items = e
				}
			}
		},
		445392: function(e, t, n) {
			var r, i = n(442837),
				l = n(570140);

			function a(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			let s = 10 * n(70956).Z.Millis.MINUTE,
				o = {
					lastUsedCommandId: null,
					lastUsedTimeMs: null
				};
			class c extends(r = i.ZP.PersistedStore) {
				initialize(e) {
					null != e && (o.lastUsedCommandId = e.lastUsedCommandId, o.lastUsedTimeMs = e.lastUsedTimeMs)
				}
				getState() {
					return o
				}
				getLastUsedCommandId() {
					let e = Date.now();
					return null == o.lastUsedTimeMs || null == o.lastUsedCommandId ? null : (e > o.lastUsedTimeMs + s && (o.lastUsedCommandId = null, o.lastUsedTimeMs = null), o.lastUsedCommandId)
				}
			}
			a(c, "displayName", "AppLauncherLastUsedCommandStore"), a(c, "persistKey", "AppLauncherLastUsedCommandStore"), new c(l.Z, {
				APPLICATION_COMMAND_USED: function(e) {
					let {
						command: t
					} = e;
					o.lastUsedCommandId = t.id, o.lastUsedTimeMs = Date.now()
				}
			})
		},
		87005: function(e, t, n) {
			n.d(t, {
				f: () => C
			}), n(388685), n(539854);
			var r = n(73800),
				i = n(243814),
				l = n(442837),
				a = n(384275),
				s = n(911969),
				o = n(10718),
				c = n(812236),
				d = n(148958),
				u = n(881998);
			n(445392);
			var m = n(783097),
				p = n(701488),
				f = n(689079);
			let h = {
					commandTypes: [s.yU.CHAT, s.yU.PRIMARY_ENTRY_POINT]
				},
				g = {
					placeholderCount: 0,
					limit: f.tn,
					includeFrecency: !0
				};

			function C(e) {
				let {
					context: t,
					onlyActivityApps: n,
					allowCommandFetch: s,
					includeAuthorizedAppsAndFetch: C
				} = e, {
					sectionDescriptors: _,
					loading: b
				} = o.wi({
					context: t,
					filters: h,
					options: g,
					allowFetch: s
				});
				return {
					loading: b,
					frecentApps: function(e) {
						let {
							sectionDescriptors: t,
							context: n,
							onlyActivityApps: s,
							includeAuthorizedAppsAndFetch: o
						} = e, h = (0, l.e7)([u.Z], () => u.Z.getFetchState());
						r.useEffect(() => {
							o && h === u.M.NOT_FETCHED && a.Z.fetch()
						}, [o, h]);
						let g = (0, l.Wu)([u.Z], () => {
								var e, t;
								return o && null != (t = null == (e = u.Z.getApps()) ? void 0 : e.filter(e => e.scopes.includes(i.x.APPLICATIONS_COMMANDS))) ? t : []
							}),
							C = t.filter(e => e.id !== f.bi.FRECENCY && e.id !== f.bi.BUILT_IN),
							_ = "contextless" === n.type,
							b = r.useMemo(() => {
								let e = [];
								return _ && e.push(p.jT), e
							}, [_]),
							v = (0, d.h)(C, g);
						return r.useMemo(() => s ? v.filter(e => null != e.application && (0, m.ye)(e.application) && null != (0, c.Xu)(n, e.id)).filter(e => !b.includes(e.id)) : v.filter(e => !b.includes(e.id)), [s, v, n, b])
					}({
						sectionDescriptors: _,
						context: t,
						onlyActivityApps: n,
						includeAuthorizedAppsAndFetch: C
					})
				}
			}
		},
		148958: function(e, t, n) {
			n.d(t, {
				h: () => d
			}), n(388685), n(539854), n(642613);
			var r = n(73800),
				i = n(442837),
				l = n(581364),
				a = n(675478),
				s = n(709054),
				o = n(822245),
				c = n(526761);

			function d(e, t) {
				r.useEffect(() => {
					a.DZ.loadIfUncached(c.yP.FRECENCY_AND_FAVORITES_SETTINGS)
				}, []);
				let n = (0, i.e7)([o.Z], () => o.Z.getApplicationFrecencyWithoutLoadingLatest()),
					d = r.useMemo(() => null == t || 0 === t.length ? e : e.map(e => {
						var n, r, i;
						return r = function(e) {
							for (var t = 1; t < arguments.length; t++) {
								var n = null != arguments[t] ? arguments[t] : {},
									r = Object.keys(n);
								"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
									return Object.getOwnPropertyDescriptor(n, e).enumerable
								}))), r.forEach(function(t) {
									var r;
									r = n[t], t in e ? Object.defineProperty(e, t, {
										value: r,
										enumerable: !0,
										configurable: !0,
										writable: !0
									}) : e[t] = r
								})
							}
							return e
						}({}, e), i = i = {
							isUserApp: null != (n = null == t ? void 0 : t.some(t => t.application.id === e.id)) && n
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var r = Object.getOwnPropertySymbols(e);
								n.push.apply(n, r)
							}
							return n
						})(Object(i)).forEach(function(e) {
							Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
						}), r
					}), [e, t]),
					u = r.useMemo(() => null == t ? void 0 : t.filter(t => !e.some(e => e.id === t.application.id)), [e, t]),
					m = r.useMemo(() => {
						var e;
						null == u || u.forEach(e => {
							let t = s.default.extractTimestamp(e.id);
							null == n.getEntry(e.application.id) && n.track(e.application.id, t)
						}), n.compute();
						let t = null != (e = null == u ? void 0 : u.map(e => (0, l.X0)(e.application, !0))) ? e : [],
							r = [...d];
						return r.push(...t), r.sort((e, t) => {
							var r, i;
							let l = (null != (r = n.getScore(t.id)) ? r : 0) - (null != (i = n.getScore(e.id)) ? i : 0);
							return 0 !== l ? l : e.name.localeCompare(t.name)
						}), r
					}, [d, n, u]);
				return r.useMemo(() => {
					var e, r;
					let i, l;
					null == t || t.forEach(e => {
						let t = s.default.extractTimestamp(e.id);
						(null == l || t > l) && (i = e, l = t)
					}), d.forEach(e => {
						var t, r;
						let a = Math.max(...null != (r = null == (t = n.getEntry(e.id)) ? void 0 : t.recentUses) ? r : []);
						(null == l || a > l) && (i = e, l = a)
					});
					let a = null != (r = null == i || null == (e = i.application) ? void 0 : e.id) ? r : "";
					return [...m.filter(e => e.id === a), ...m.filter(e => e.id !== a)]
				}, [m, d, n, t])
			}
		},
		17894: function(e, t, n) {
			n.d(t, {
				Z: () => g
			});
			var r = n(525654),
				i = n.n(r),
				l = n(39612),
				a = n(271579),
				s = n(756647),
				o = n(232567),
				c = n(703656),
				d = n(314897),
				u = n(896797),
				m = n(626135),
				p = n(954824),
				f = n(981631);
			async function h(e) {
				var t, n;
				let r = null == (t = i().os) ? void 0 : t.family;
				if ("Android" === r || "iOS" === r) {
					let t = null != (n = d.default.getFingerprint()) ? n : d.default.getId(),
						r = (0, a.WS)();
					if (null == t && d.default.isAuthenticated()) try {
						await (0, o.k)(), t = d.default.getId()
					} catch (e) {}
					return (0, a.ZP)((0, l.Gk)(), {
						utmSource: e,
						fingerprint: t,
						attemptId: r
					})
				}
				return "discord://"
			}
			async function g(e) {
				let t = await h(e),
					n = (0, a.zS)(t);
				null != n && m.default.track(f.rMx.DEEP_LINK_CLICKED, {
					fingerprint: (0, s.K)(n.fingerprint),
					attempt_id: n.attemptId,
					source: n.utmSource
				}), p.Z.launch(t, e => {
					e || (0, c.dL)(u.Z.fallbackRoute)
				})
			}
		},
		313550: function(e, t, n) {
			n.d(t, {
				Z: () => o
			}), n(388685), n(539854);
			var r = n(73800),
				i = n(622545),
				l = n(817460),
				a = n(570533),
				s = n(388032);

			function o(e) {
				let {
					includeFlairAsBenefit: t,
					listing: n,
					guildId: o
				} = e, c = 0, d = 0;
				for (let e of n.role_benefits.benefits)(0, l.rC)(e) ? c += 1 : (0, l.lL)(e) && (d += 1);
				let u = n.role_id,
					m = (0, a.Z)(o).filter(e => e.roles.includes(u)).length;
				return r.useMemo(() => {
					let e = [];
					return !0 === t && e.push(s.intl.string(s.t.EhdV29)), 0 !== c && e.push(s.intl.formatToPlainString(s.t["p/l+BA"], {
						channelCount: c
					})), 0 !== d && e.push(s.intl.formatToPlainString(s.t.eXP5vr, {
						benefitCount: d
					})), 0 !== m && e.push(s.intl.formatToPlainString(s.t.YjmQwc, {
						emojiCount: m
					})), new i.Z(e)
				}, [c, d, m, t])
			}
		},
		934826: function(e, t, n) {
			n.d(t, {
				Z: () => u
			}), n(388685);
			var r = n(73800),
				i = n(442837),
				l = n(821849),
				a = n(509545),
				s = n(78839),
				o = n(289393),
				c = n(697227),
				d = n(981631);

			function u(e) {
				let t = (0, i.e7)([s.Z], () => s.Z.getSubscriptions()),
					n = r.useMemo(() => {
						if (null == t) return {};
						let e = {};
						for (let n of Object.values(t)) n.type === d.NYc.GUILD && (e[(0, c.W)(n)] = n);
						return e
					}, [t]),
					{
						activeSubscription: u,
						activeSubscriptionListing: m
					} = (0, i.cj)([o.Z], () => {
						var t;
						let r, i = null,
							l = null != e ? o.Z.getSubscriptionGroupListing(e) : null;
						for (let e of null != (t = null == l ? void 0 : l.subscription_listings_ids) ? t : []) {
							let t = o.Z.getSubscriptionListing(e),
								l = null == t ? void 0 : t.subscription_plans[0].id;
							if (null == l) continue;
							let a = n[l];
							if (null != a) {
								i = a, r = t;
								break
							}
						}
						return {
							activeSubscription: i,
							activeSubscriptionListing: r
						}
					}),
					p = null == m ? void 0 : m.subscription_plans[0],
					f = null == p ? void 0 : p.id,
					h = null == p ? void 0 : p.sku_id,
					g = (0, i.e7)([a.Z], () => null != f ? a.Z.get(f) : null),
					C = null == m ? void 0 : m.soft_deleted;
				return r.useEffect(() => {
					null != g || null == h || a.Z.isFetchingForSKU(h) || (0, l.GZ)(h, void 0, void 0, C)
				}, [g, h, C]), {
					activeSubscription: u,
					activeSubscriptionListing: m,
					activeSubscriptionPlanFromStore: g
				}
			}
		},
		896083: function(e, t, n) {
			n.d(t, {
				F: () => l
			}), n(388685);
			var r = n(73800),
				i = n(295141);
			let l = () => {
				let [e, t] = r.useState(!1), [n, l] = r.useState(null);
				return {
					loading: e,
					error: n,
					getTrialPurchaseEligibility: r.useCallback(async (e, n, r) => {
						t(!0), l(null);
						try {
							return await (0, i.LB)(e, n, r)
						} catch (e) {
							l(e)
						} finally {
							t(!1)
						}
					}, [])
				}
			}
		},
		768318: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			var r = n(73800),
				i = n(584825);

			function l(e, t) {
				let n = (0, i.oC)(t);
				return r.useMemo(() => {
					var e;
					return null != n && (null == n.max_num_active_trial_users || n.max_num_active_trial_users > (null != (e = n.num_active_trial_users) ? e : 0))
				}, [n])
			}
		},
		367719: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(468194),
				i = n(477690),
				l = n(131388),
				a = n(293810);
			let s = (0, r.Mg)(i.Z.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE),
				o = (0, r.Mg)(i.Z.GUILD_ROLE_SUBSCRIPTION_CARD_BASIC_INFO_TIER_IMAGE_SIZE_MOBILE);

			function c() {
				return (0, l.Z)(a.iP) ? o : s
			}
		},
		845970: function(e, t, n) {
			n.d(t, {
				Z: () => u
			}), n(953529);
			var r = n(255367);
			n(73800);
			var i = n(120356),
				l = n.n(i),
				a = n(481060),
				s = n(528027),
				o = n(686807),
				c = n(113318),
				d = n(277937);

			function u(e) {
				let {
					benefit: t,
					guildId: n
				} = e, i = (0, c.Z)(n, t.ref_id), u = (0, r.jsx)(s.Z, {
					guildId: n,
					emojiId: t.emoji_id,
					emojiName: t.emoji_name
				}), m = null != i ? (0, r.jsx)(a.P3F, {
					className: d.__invalid_channelLink,
					onClick: i.navigateToChannel,
					"aria-label": i.ariaLabel,
					role: "link",
					children: (0, r.jsx)(a.Text, {
						variant: "text-md/medium",
						color: "header-primary",
						className: l()(d.name, d.linkedName),
						children: (0, o.Z)(t)
					})
				}) : (0, r.jsx)(a.Text, {
					variant: "text-md/medium",
					color: "header-primary",
					className: d.name,
					children: (0, o.Z)(t)
				});
				return (0, r.jsxs)("div", {
					className: d.container,
					children: [(0, r.jsxs)("div", {
						className: d.infoContainer,
						children: [m, (0, r.jsx)(a.Text, {
							color: "interactive-normal",
							variant: "text-sm/normal",
							children: t.description
						})]
					}), (0, r.jsx)("div", {
						className: d.emojiContainer,
						children: u
					})]
				})
			}
		},
		305342: function(e, t, n) {
			n.d(t, {
				Z: () => F,
				c: () => D
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				s = n(442837),
				o = n(755721),
				c = n(481060),
				d = n(131388),
				u = n(313201),
				m = n(160404),
				p = n(351402),
				f = n(768581),
				h = n(817460),
				g = n(584825),
				C = n(290348),
				_ = n(934826),
				b = n(768318),
				v = n(570533),
				j = n(971792),
				y = n(629262),
				E = n(761966),
				x = n(893729),
				O = n(845970),
				N = n(882101),
				P = n(11705),
				I = n(81273),
				T = n(293810),
				S = n(981631),
				Z = n(388032),
				L = n(492077);

			function A(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						r = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), r.forEach(function(t) {
						var r;
						r = n[t], t in e ? Object.defineProperty(e, t, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : e[t] = r
					})
				}
				return e
			}

			function M(e, t) {
				return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						n.push.apply(n, r)
					}
					return n
				})(Object(t)).forEach(function(n) {
					Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
				}), e
			}
			let w = e => {
					let {
						benefits: t,
						header: n,
						guildId: l
					} = e, [a, s] = i.useState(!1), o = a ? t : t.slice(0, 5), d = t.length > 5, m = t.length - 5, p = Z.intl.formatToPlainString(Z.t["XSdy7+"], {
						numTruncated: m
					}), f = (0, u.Dt)();
					return 0 === t.length ? null : (0, r.jsxs)("div", {
						className: L.benefitsSection,
						children: [(0, r.jsx)(c.X6q, {
							variant: "text-xs/bold",
							color: "header-secondary",
							className: L.sectionHeader,
							id: f,
							children: n
						}), (0, r.jsx)(c.LZC, {
							size: 12
						}), (0, r.jsx)("ul", {
							className: L.benefitsList,
							"aria-labelledby": f,
							children: o.map((e, t) => (0, r.jsx)("li", {
								children: (0, r.jsx)(O.Z, {
									guildId: l,
									benefit: e
								}, (0, h.ab)(e))
							}, t))
						}), d && (0, r.jsx)(k, {
							isViewAll: a,
							onToggle: () => s(e => !e),
							showMoreText: p
						})]
					})
				},
				R = e => {
					let {
						guildId: t,
						listingId: n
					} = e, i = (0, v.Z)(t), [l] = C.XZ(n, t), a = i.filter(e => l.has(e.id));
					return 0 === a.length ? null : (0, r.jsxs)("div", {
						className: L.benefitsSection,
						children: [(0, r.jsx)(c.X6q, {
							variant: "text-xs/bold",
							color: "header-secondary",
							className: L.sectionHeader,
							children: Z.intl.format(Z.t.NAnXEh, {
								count: a.length
							})
						}), (0, r.jsx)(c.LZC, {
							size: 12
						}), (0, r.jsx)("div", {
							className: L.emojiList,
							children: a.map((e, t) => {
								var n;
								return (0, r.jsx)(c.ua7, {
									text: e.name,
									"aria-label": !1,
									children: t => (0, r.jsx)("img", M(A({}, t), {
										className: L.emojiListEmoji,
										src: f.ZP.getEmojiURL({
											id: e.id,
											animated: e.animated,
											size: 24
										}),
										width: 24,
										height: 24,
										alt: e.name
									}))
								}, null != (n = e.id) ? n : t)
							})
						})]
					})
				},
				D = e => {
					let {
						listingId: t,
						guildId: n,
						className: i
					} = e, l = (0, j.Z)(n, t), [s] = C.UE(t), o = (0, y.Z)(s), [d] = C.R7(t), u = C.qs(t, n), [m] = C.XZ(t, n);
					return null == l && 0 === o.length && 0 === d.length && 0 === m.size ? null : (0, r.jsxs)("div", {
						className: a()(L.subscriptionPerks, i),
						children: [null != l && (0, r.jsxs)(c.y5t, {
							component: (0, r.jsx)(c.X6q, {
								variant: "text-xs/bold",
								color: "header-secondary",
								className: L.sectionHeader,
								children: Z.intl.string(Z.t.FJZmY2)
							}),
							children: [(0, r.jsx)(c.LZC, {
								size: 8
							}), (0, r.jsx)(x.Z, {
								role: u,
								guildId: n,
								className: L.roleMessagePreview
							})]
						}), (0, r.jsx)(w, {
							header: Z.intl.string(Z.t.LtfhAg),
							benefits: o,
							guildId: n
						}), (0, r.jsx)(w, {
							header: Z.intl.string(Z.t["8oxWpK"]),
							benefits: d,
							guildId: n
						}), (0, r.jsx)(R, {
							guildId: n,
							listingId: t
						})]
					})
				},
				k = e => {
					let t, {
						onToggle: n,
						isViewAll: i,
						showMoreText: l
					} = e;
					return t = i ? (0, r.jsxs)(r.Fragment, {
						children: [Z.intl.string(Z.t["r/xxPT"]), (0, r.jsx)(c.u04, {
							size: "md",
							color: "currentColor",
							className: L.toggleTruncationButtonIcon
						})]
					}) : (0, r.jsxs)(r.Fragment, {
						children: [l, (0, r.jsx)(c.CJ0, {
							size: "md",
							color: "currentColor",
							className: L.toggleTruncationButtonIcon
						})]
					}), (0, r.jsx)(o.zx, {
						look: o.zx.Looks.BLANK,
						size: o.zx.Sizes.NONE,
						className: L.toggleTruncationButton,
						innerClassName: L.toggleTruncationButtonInner,
						onClick: n,
						children: t
					})
				},
				F = e => {
					var t;
					let {
						listingId: n,
						guildId: l,
						groupListingId: u,
						analyticsLocation: f
					} = e, v = (0, g.jO)(n), {
						openModal: j,
						canOpenModal: y,
						cannotOpenReason: x,
						isCheckingTrialEligibility: O
					} = (0, I.Z)(v, l, u, f), w = (0, s.e7)([p.Z], () => p.Z.isSyncing), {
						activeSubscription: R,
						activeSubscriptionListing: F
					} = (0, _.Z)(u), U = (null == F ? void 0 : F.id) === n, z = (null == R ? void 0 : R.status) === S.O0b.CANCELED, [B, H] = i.useState(!1), [G, W] = i.useState(!1), Y = i.useCallback(e => {
						let t = !1;
						null != e && (t = e.scrollHeight - e.clientHeight > 1), W(t)
					}, []), [V] = C._T(n), [X] = C.PK(n), [K] = C.TT(n), [q] = C.F2(n), Q = (0, b.Z)(l, n), J = null != K && null == R && Q, $ = (0, d.Z)(T.iP), [ee, et] = i.useState(!1), en = ee || !$, er = (0, s.e7)([m.Z], () => m.Z.isViewingServerShop(l)), ei = (null == v ? void 0 : v.published) === !0, el = (null == v ? void 0 : v.soft_deleted) === !0, ea = Z.intl.string(Z.t.KzmEAw);
					return (ei || er) && !el ? (0, r.jsxs)("article", {
						className: L.container,
						"aria-label": V,
						children: [J && (0, r.jsxs)("div", {
							className: a()(L.tierTrialIndicator, L.tierTopIndicator),
							children: [Z.intl.format(Z.t.L2ouio, {
								trialPeriodDuration: (0, h.iG)({
									interval: K.interval,
									interval_count: K.interval_count
								})
							}), (0, r.jsx)(c.ua7, {
								clickableOnMobile: !0,
								text: Z.intl.formatToPlainString(Z.t.FYyR4u, {
									activeTrialUserLimit: null != q ? q : 0
								}),
								children: e => (0, r.jsx)(c.d3s, A({
									size: "xs",
									color: "currentColor",
									className: L.tierTrialIndicatorIcon
								}, e))
							})]
						}), (0, r.jsxs)("div", {
							className: J ? void 0 : L.cardContainerWithoutTopIndicator,
							children: [(0, r.jsxs)("div", {
								className: L.tierInfoContainer,
								children: [$ ? (0, r.jsx)(P.e, {
									listingId: n,
									isListingPublished: ei,
									expanded: en,
									onToggleExpanded: () => et(e => !e)
								}) : (0, r.jsx)(N.xv, {
									listingId: n,
									isListingPublished: ei
								}), en && (0, r.jsxs)(r.Fragment, {
									children: [$ && (0, r.jsx)("div", {
										className: L.divider
									}), U ? (0, r.jsx)(o.zx, {
										fullWidth: !0,
										look: o.zx.Looks.OUTLINED,
										color: o.zx.Colors.PRIMARY,
										disabled: !0,
										children: z ? Z.intl.string(Z.t.iKHmu7) : Z.intl.string(Z.t.XvAuMj)
									}) : (0, r.jsx)(c.ua7, {
										text: y ? null : x,
										"aria-label": null != (t = y && x) && t,
										children: e => (0, r.jsx)(E.Z, M(A({}, e), {
											fullWidth: !0,
											disabled: !y || w,
											submitting: O,
											onClick: j,
											onlyShineOnHover: !0,
											children: Z.intl.string(Z.t.fM5Zsb)
										}))
									}), (0, r.jsx)(c.LZC, {
										size: 16
									}), (0, r.jsx)(c.Text, {
										variant: "text-sm/normal",
										color: "text-default",
										className: a()((!G || !B) && L.tierDescriptionTruncate),
										children: (0, r.jsx)("div", {
											ref: Y,
											children: X
										})
									}), G && (0, r.jsx)(k, {
										isViewAll: B,
										onToggle: () => H(e => !e),
										showMoreText: ea
									})]
								})]
							}), en && (0, r.jsx)(c.y5t, {
								children: (0, r.jsx)(D, {
									listingId: n,
									guildId: l
								})
							})]
						})]
					}) : null
				}
		},
		882101: function(e, t, n) {
			n.d(t, {
				BM: () => p,
				Ey: () => m,
				xv: () => f
			}), n(388685);
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(765400),
				a = n(937615),
				s = n(817460),
				o = n(290348),
				c = n(367719),
				d = n(388032),
				u = n(450154);
			let m = e => {
				let {
					listingName: t
				} = e;
				return (0, r.jsx)(i.X6q, {
					variant: "text-md/normal",
					color: "interactive-active",
					className: u.tierName,
					children: t
				})
			};

			function p(e) {
				let {
					image: t
				} = e;
				return null == t ? null : (0, r.jsx)("img", {
					src: t,
					alt: "",
					className: u.tierImage
				})
			}
			let f = e => {
				let {
					listingId: t,
					isListingPublished: n
				} = e, f = (0, c.Z)(), [h] = o._T(t), [g] = o.d9(t, f), [C] = o.H9(t);
				return (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)(m, {
						listingName: h
					}), (0, r.jsx)(p, {
						image: g
					}), !n && (0, r.jsx)("div", {
						className: u.draftBadgeContainer,
						children: (0, r.jsx)(l.v, {})
					}), (0, r.jsx)(i.Text, {
						variant: "heading-xl/semibold",
						className: u.tierPrice,
						tag: "div",
						children: (0, a.T4)(C.price, C.currency)
					}), (0, r.jsx)(i.Text, {
						variant: "text-xs/normal",
						color: "interactive-normal",
						className: u.tierPeriod,
						children: d.intl.format(d.t.isLGyc, {
							period: (0, s.JE)({
								interval: C.interval,
								interval_count: C.interval_count
							})
						})
					})]
				})
			}
		},
		11705: function(e, t, n) {
			n.d(t, {
				e: () => p
			}), n(388685);
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(765400),
				a = n(937615),
				s = n(817460),
				o = n(290348),
				c = n(367719),
				d = n(882101),
				u = n(388032),
				m = n(193850);
			let p = e => {
				let {
					listingId: t,
					isListingPublished: n,
					expanded: p,
					onToggleExpanded: f
				} = e, h = (0, c.Z)(), [g] = o._T(t), [C] = o.d9(t, h), [_] = o.H9(t);
				return (0, r.jsxs)("div", {
					className: m.container,
					children: [(0, r.jsx)(d.BM, {
						image: C
					}), (0, r.jsxs)("div", {
						className: m.tierTextInfoContainer,
						children: [(0, r.jsx)(d.Ey, {
							listingName: g
						}), (0, r.jsxs)("div", {
							className: m.tierPriceContainer,
							children: [!n && (0, r.jsx)(l.v, {}), (0, r.jsxs)(i.Text, {
								variant: "text-xs/normal",
								className: m.tierPrice,
								children: [(0, a.T4)(_.price, _.currency), " ", u.intl.format(u.t.isLGyc, {
									period: (0, s.JE)({
										interval: _.interval,
										interval_count: _.interval_count
									})
								})]
							})]
						})]
					}), (0, r.jsx)(i.P3F, {
						onClick: f,
						children: p ? (0, r.jsx)(i.u04, {
							size: "md",
							color: "currentColor",
							className: m.toggleButton
						}) : (0, r.jsx)(i.CJ0, {
							size: "md",
							color: "currentColor",
							className: m.toggleButton
						})
					})]
				})
			}
		},
		939872: function(e, t, n) {
			n.d(t, {
				m: () => m
			});
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(755721),
				a = n(481060),
				s = n(17894),
				o = n(430824),
				c = n(313550),
				d = n(388032),
				u = n(107782);
			let m = e => {
				let {
					onClose: t,
					listing: n,
					guildId: m
				} = e, p = (0, i.e7)([o.Z], () => o.Z.getGuild(m), [m]), f = (0, c.Z)({
					listing: n,
					guildId: m
				});
				return (0, r.jsxs)("div", {
					className: u.confirmationContainer,
					children: [(0, r.jsx)(a.X6q, {
						className: u.confirmationHeader,
						variant: "heading-lg/extrabold",
						children: d.intl.format(d.t.I5dYFh, {
							serverName: null == p ? void 0 : p.name,
							tierName: n.name
						})
					}), !f.isEmpty() && (0, r.jsx)(a.Text, {
						className: u.confirmationSubtitle,
						variant: "text-sm/normal",
						color: "header-secondary",
						children: d.intl.format(d.t.TnhFHh, {
							benefits: f.asString()
						})
					}), (0, r.jsx)(l.zx, {
						className: u.openDiscordButton,
						onClick: () => (0, s.Z)("role_sub_mweb_success_modal"),
						children: d.intl.string(d.t.WWvswM)
					}), (0, r.jsx)(l.zx, {
						className: u.doneButton,
						look: l.zx.Looks.BLANK,
						onClick: () => t(!0),
						children: d.intl.string(d.t.y84Dho)
					})]
				})
			}
		},
		265985: function(e, t, n) {
			n.d(t, {
				h: () => j,
				x: () => y
			});
			var r = n(255367);
			n(73800);
			var i = n(120356),
				l = n.n(i),
				a = n(442837),
				s = n(481060),
				o = n(596454),
				c = n(131388),
				d = n(409813),
				u = n(430824),
				m = n(73346),
				p = n(817460),
				f = n(584825),
				h = n(570533),
				g = n(629262),
				C = n(575460),
				_ = n(293810),
				b = n(388032),
				v = n(506222);
			let j = e => {
					let {
						onClose: t,
						listing: n,
						step: i,
						guildId: a
					} = e, o = (0, f.YB)(a), u = (0, c.Z)(_.Xy), p = (() => {
						var e;
						if (u) return null;
						let t = (null == o || null == (e = o.cover_image_asset) ? void 0 : e.application_id) != null ? (0, m._W)(o.cover_image_asset.application_id, o.cover_image_asset, 440) : void 0;
						return null == t && i !== d.h8.CONFIRM ? null : null == t ? (0, r.jsx)("div", {
							className: v.headerImageEmpty
						}) : (0, r.jsx)("img", {
							src: t,
							alt: "",
							className: v.headerImage
						})
					})();
					return (0, r.jsxs)("div", {
						className: l()(v.headerContainer, {
							[v.headerEmpty]: u || null == p
						}),
						children: [p, (() => {
							if (i !== d.h8.CONFIRM) return null;
							let e = null == n.image_asset ? void 0 : (0, m._W)(n.application_id, n.image_asset, 80);
							return (0, r.jsx)("div", {
								className: v.tierImageContainer,
								children: (0, r.jsx)("img", {
									src: e,
									alt: "",
									className: v.tierImage
								})
							})
						})(), (0, r.jsx)(s.P3F, {
							className: v.closeContainer,
							onClick: () => t(!1),
							"aria-label": b.intl.string(b.t.cpT0Cg),
							children: (0, r.jsx)(s.Dio, {
								size: "md",
								color: "currentColor",
								className: v.closeIcon
							})
						})]
					})
				},
				y = e => {
					let {
						onClose: t,
						listing: n,
						guildId: i
					} = e, l = (0, a.e7)([u.Z], () => u.Z.getGuild(i), [i]), c = (0, h.Z)(i).filter(e => e.roles.includes(n.role_id)), d = n.role_benefits.benefits.filter(p.rC).slice(0, null === c.length ? 4 : 3), m = (0, g.Z)(d).slice(0, null === c.length ? 4 : 3);
					return (0, r.jsxs)("div", {
						className: v.confirmationContainer,
						children: [(0, r.jsx)(s.X6q, {
							className: v.confirmationHeader,
							variant: "heading-xl/semibold",
							color: "header-secondary",
							children: b.intl.format(b.t["1HIsTk"], {
								serverName: null == l ? void 0 : l.name
							})
						}), (0, r.jsx)(s.Text, {
							className: v.confirmationSubtitle,
							variant: "text-md/normal",
							color: "header-secondary",
							children: b.intl.format(b.t.oi3gio, {
								tier: n.name
							})
						}), m.length > 0 && (0, r.jsxs)(r.Fragment, {
							children: [(0, r.jsx)(s.Text, {
								variant: "text-xs/normal",
								color: "header-secondary",
								className: v.confirmationSectionLabel,
								children: b.intl.string(b.t.w0CQ09)
							}), (0, r.jsx)("div", {
								className: v.confirmationBenefits,
								children: m.map(e => (0, r.jsx)(C.Z, {
									benefit: e,
									guildId: i,
									onClick: () => t(!0)
								}, (0, p.ab)(e)))
							})]
						}), (() => {
							var e;
							if (0 === c.length) return null;
							let t = c[0];
							return (0, r.jsxs)(r.Fragment, {
								children: [(0, r.jsx)(s.Text, {
									variant: "text-xs/medium",
									color: "header-secondary",
									className: v.confirmationSectionLabel,
									children: b.intl.string(b.t["6Y1FLi"])
								}), (0, r.jsxs)("div", {
									className: v.emojiBenefitsRow,
									children: [(0, r.jsx)(o.Z, {
										emojiId: t.id,
										emojiName: t.name,
										animated: null != (e = t.animated) && e,
										className: v.emojiImage
									}), (0, r.jsxs)("div", {
										children: [(0, r.jsx)(s.Text, {
											variant: "text-md/medium",
											color: "header-primary",
											className: v.emojiName,
											children: b.intl.string(b.t.PrKk4u)
										}), (0, r.jsx)(s.Text, {
											color: "interactive-normal",
											variant: "text-sm/normal",
											children: b.intl.format(b.t["2ICUkJ"], {
												count: c.length
											})
										})]
									})]
								})]
							})
						})(), (0, r.jsx)("div", {
							"data-button-hoisted-classname-wrapper": !0,
							className: v.confirmationButton,
							children: (0, r.jsx)(s.zxk, {
								variant: "primary",
								text: b.intl.string(b.t["Ph+ecH"]),
								onClick: () => t(!0)
							})
						})]
					})
				}
		},
		575460: function(e, t, n) {
			n.d(t, {
				Z: () => d
			}), n(953529);
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(259580),
				a = n(528027),
				s = n(686807),
				o = n(113318),
				c = n(604528);

			function d(e) {
				let {
					benefit: t,
					guildId: n,
					onClick: d
				} = e, u = (0, o.Z)(n, t.ref_id), m = (0, r.jsx)(a.Z, {
					guildId: n,
					emojiId: t.emoji_id,
					emojiName: t.emoji_name
				});
				return (0, r.jsxs)(i.P3F, {
					className: c.container,
					onClick: () => {
						null == u || u.navigateToChannel(), d()
					},
					"aria-label": null == u ? void 0 : u.ariaLabel,
					role: "link",
					children: [(0, r.jsx)("div", {
						className: c.emojiContainer,
						children: m
					}), (0, r.jsxs)("div", {
						className: c.infoContainer,
						children: [(0, r.jsx)(i.Text, {
							variant: "text-md/medium",
							color: "header-primary",
							className: c.name,
							children: (0, s.Z)(t)
						}), (0, r.jsx)(i.Text, {
							color: "interactive-normal",
							variant: "text-sm/normal",
							children: t.description
						})]
					}), (0, r.jsx)(l.Z, {
						direction: l.Z.Directions.RIGHT,
						className: c.caret
					})]
				})
			}
		},
		81273: function(e, t, n) {
			n.d(t, {
				Z: () => L
			});
			var r = n(255367),
				i = n(73800),
				l = n(512722),
				a = n.n(l),
				s = n(913527),
				o = n.n(s),
				c = n(442837),
				d = n(570140),
				u = n(821849),
				m = n(131388),
				p = n(906732),
				f = n(305325),
				h = n(246364),
				g = n(937111),
				C = n(281956),
				_ = n(41776),
				b = n(738737),
				v = n(509545),
				j = n(63063),
				y = n(817460),
				E = n(584825),
				x = n(697227),
				O = n(934826),
				N = n(896083),
				P = n(939872),
				I = n(265985),
				T = n(293810),
				S = n(981631),
				Z = n(388032);
			let L = (e, t, n, l) => {
				let s, L = (0, c.e7)([_.Z], () => _.Z.isLurking(t)),
					A = (0, C.J)(t),
					M = (0, c.e7)([g.Z], () => null != t ? g.Z.getRequest(t) : null),
					w = (null == M ? void 0 : M.applicationStatus) === h.wB.SUBMITTED,
					R = null == e ? void 0 : e.subscription_plans[0],
					D = null == R ? void 0 : R.id,
					k = (null == e ? void 0 : e.published) === !0,
					F = null == R ? void 0 : R.sku_id,
					U = (0, c.e7)([v.Z], () => null != D ? v.Z.get(D) : null),
					{
						activeSubscription: z,
						activeSubscriptionPlanFromStore: B
					} = (0, O.Z)(n),
					H = null == z || null != B,
					G = (0, E._k)(n, {
						includeSoftDeleted: !0
					}).map(e => e.subscription_plans[0].id),
					W = (0, x.V)(z),
					Y = null != W,
					V = !!(null == z ? void 0 : z.hasActiveTrial),
					{
						loading: X,
						getTrialPurchaseEligibility: K
					} = (0, N.F)(),
					q = (0, E.oC)(null == e ? void 0 : e.id),
					{
						analyticsLocations: Q
					} = (0, p.ZP)(),
					J = (null == z ? void 0 : z.paymentGateway) === S.gg$.APPLE_PARTNER,
					$ = !L && null != U && H && !w && !Y && !V && !J;
				w || L && !A ? s = Z.intl.string(Z.t.pQK5ho) : W === D ? s = Z.intl.formatToPlainString(Z.t.UlBRTk, {
					changeDate: null != z ? o()(z.currentPeriodEnd).format("MMM DD, YYYY") : ""
				}) : Y ? s = Z.intl.string(Z.t.ePFYOT) : V ? s = Z.intl.string(Z.t["0lPoT0"]) : J && (s = Z.intl.string(Z.t.cEMaCg));
				let ee = (0, m.Z)(T.iP);
				i.useEffect(() => {
					k && null != F && d.Z.wait(() => {
						(0, u.GZ)(F)
					})
				}, [k, F]);
				let et = i.useCallback(async () => {
						let n, i;
						if (a()(null != e, "No subscription listing"), a()(null != R, "No subscription plan"), a()(k, "Cannot purchase this unpublished plan"), (null == q ? void 0 : q.active_trial) != null) {
							let r = await K(t, e.id, q.active_trial.id);
							if ((null == r ? void 0 : r.is_eligible) === !0) {
								var s;
								n = null == q || null == (s = q.active_trial) ? void 0 : s.id
							} else i = Z.intl.string(Z.t.vuvsKy)
						}(0, b.Z)({
							activeSubscription: z,
							analyticsSubscriptionType: S.NYc.GUILD,
							trialId: n,
							trialFooterMessageOverride: (null == q ? void 0 : q.active_trial) != null ? Z.intl.format(Z.t.zyGyNj, {
								buttonText: Z.intl.string(Z.t.BEeXiY),
								interval: (0, y.iG)(R),
								days: 1,
								contactLink: S.EYA.CONTACT,
								cancelSubscriptionArticle: j.Z.getArticleURL(S.BhN.ROLE_SUBSCRIPTION_CANCEL),
								helpdeskArticle: j.Z.getArticleURL(S.BhN.ROLE_SUBSCRIPTION_TRIAL),
								paidServiceTermsArticle: j.Z.getArticleURL(S.BhN.PAID_TERMS),
								tierName: R.name
							}) : void 0,
							analyticsLocations: Q,
							analyticsLocation: l,
							renderHeader: (n, i, l) => (0, r.jsx)(I.h, {
								onClose: i,
								listing: e,
								step: l,
								guildId: t
							}),
							initialPlanId: R.id,
							skuId: R.sku_id,
							planGroup: G,
							renderPurchaseConfirmation: (n, i) => ee ? (0, r.jsx)(P.m, {
								listing: e,
								onClose: i,
								guildId: t
							}) : (0, r.jsx)(I.x, {
								listing: e,
								onClose: i,
								guildId: t
							}),
							reviewWarningMessage: i
						})
					}, [k, e, R, z, G, t, Q, l, K, q, ee]),
					en = i.useCallback(() => {
						(0, f.hk)(t)
					}, [t]);
				return {
					openModal: A ? en : et,
					canOpenModal: $,
					cannotOpenReason: s,
					isCheckingTrialEligibility: X
				}
			}
		},
		113318: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r = n(442837),
				i = n(201895),
				l = n(557135),
				a = n(703656),
				s = n(592125),
				o = n(979651),
				c = n(66999),
				d = n(981631);

			function u(e, t) {
				let n = (0, r.e7)([s.Z], () => s.Z.getChannel(t)),
					{
						needSubscriptionToAccess: u
					} = (0, c.Z)(null == n ? void 0 : n.id);
				if (null == n || u) return null;
				let m = n.isGuildVocal();
				return {
					navigateToChannel: () => {
						m ? l.Z.handleVoiceConnect({
							channel: n,
							connected: o.Z.isInChannel(n.id),
							needSubscriptionToAccess: !1,
							routeDirectlyToChannel: !0
						}) : (0, a.uL)(d.Z5c.CHANNEL(e, n.id))
					},
					ariaLabel: (0, i.ZP)({
						channel: n
					})
				}
			}
		},
		823162: function(e, t, n) {
			n.d(t, {
				Xy: () => d,
				e4: () => o,
				gN: () => u,
				hi: () => p,
				qR: () => c,
				r_: () => m
			});
			var r = n(544891),
				i = n(570140),
				l = n(893776),
				a = n(290323),
				s = n(981631);
			async function o(e) {
				await r.tn.put({
					url: s.ANM.CHANNEL_RECIPIENT_ME(e),
					body: {
						consent_status: a.h.ACCEPTED
					},
					rejectWithError: !1
				}), i.Z.dispatch({
					type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
					channelId: e
				})
			}

			function c(e) {
				return r.tn.put({
					url: s.ANM.CHANNEL_RECIPIENT_ME(e),
					body: {
						consent_status: a.h.UNSPECIFIED
					},
					rejectWithError: !1
				})
			}

			function d(e) {
				return r.tn.put({
					url: s.ANM.CHANNEL_RECIPIENT_ME(e),
					body: {
						consent_status: a.h.PENDING
					},
					rejectWithError: !1
				})
			}

			function u(e) {
				return r.tn.del({
					url: s.ANM.CHANNEL_RECIPIENT_ME(e),
					rejectWithError: !1
				})
			}

			function m(e) {
				return r.tn.put({
					url: s.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
					body: {
						channel_ids: e
					},
					rejectWithError: !1
				})
			}

			function p() {
				l.Z.getLocationMetadata()
			}
		},
		610697: function(e, t, n) {
			n.d(t, {
				Z: () => c
			}), n(388685);
			var r = n(73800),
				i = n(442837),
				l = n(594174),
				a = n(823162),
				s = n(355298);
			let o = new Set(["GB"]);

			function c() {
				let e = (0, i.e7)([s.Z], () => s.Z.getUserCountryCode()),
					t = !1 === (0, i.e7)([l.default], () => {
						var e;
						return null == (e = l.default.getCurrentUser()) ? void 0 : e.nsfwAllowed
					});
				return r.useEffect(() => {
					null == e && (0, a.hi)()
				}, [e]), null != e && !!o.has(e.alpha2) && !!t
			}
		},
		738737: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(987209),
				a = n(107998),
				s = n(981631);

			function o(e) {
				let {
					initialPlanId: t,
					activeSubscription: o,
					trialId: c,
					trialFooterMessageOverride: d,
					onClose: u,
					analyticsObject: m,
					analyticsLocation: p,
					analyticsLocations: f,
					analyticsSubscriptionType: h,
					renderHeader: g,
					renderPurchaseConfirmation: C,
					planGroup: _,
					reviewWarningMessage: b,
					skuId: v
				} = e;
				(0, i.ZDy)(async () => {
					let {
						PaymentContextProvider: e
					} = await Promise.resolve().then(n.bind(n, 563132)), {
						PaymentModal: i
					} = await Promise.resolve().then(n.bind(n, 791785)), {
						STEPS: s
					} = await Promise.all([n.e("17938"), n.e("84992"), n.e("54433"), n.e("47253")]).then(n.bind(n, 7305));
					return n => {
						var j, y, {
								onClose: E
							} = n,
							x = function(e, t) {
								if (null == e) return {};
								var n, r, i = function(e, t) {
									if (null == e) return {};
									var n, r, i = {},
										l = Object.keys(e);
									for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
									return i
								}(e, t);
								if (Object.getOwnPropertySymbols) {
									var l = Object.getOwnPropertySymbols(e);
									for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
								}
								return i
							}(n, ["onClose"]);
						return (0, r.jsx)(e, {
							activeSubscription: o,
							stepConfigs: s,
							skuIDs: [v],
							children: (0, r.jsx)(a.c1, {
								children: (0, r.jsx)(l.KB, {
									children: (0, r.jsx)(i, (j = function(e) {
										for (var t = 1; t < arguments.length; t++) {
											var n = null != arguments[t] ? arguments[t] : {},
												r = Object.keys(n);
											"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
												return Object.getOwnPropertyDescriptor(n, e).enumerable
											}))), r.forEach(function(t) {
												var r;
												r = n[t], t in e ? Object.defineProperty(e, t, {
													value: r,
													enumerable: !0,
													configurable: !0,
													writable: !0
												}) : e[t] = r
											})
										}
										return e
									}({}, x), y = y = {
										initialPlanId: t,
										onClose: e => {
											E(), null == u || u(e)
										},
										analyticsLocations: f,
										analyticsObject: m,
										analyticsLocation: p,
										analyticsSubscriptionType: h,
										skuId: v,
										renderHeader: g,
										renderPurchaseConfirmation: C,
										planGroup: _,
										trialId: c,
										trialFooterMessageOverride: d,
										reviewWarningMessage: b
									}, Object.getOwnPropertyDescriptors ? Object.defineProperties(j, Object.getOwnPropertyDescriptors(y)) : (function(e, t) {
										var n = Object.keys(e);
										if (Object.getOwnPropertySymbols) {
											var r = Object.getOwnPropertySymbols(e);
											n.push.apply(n, r)
										}
										return n
									})(Object(y)).forEach(function(e) {
										Object.defineProperty(j, e, Object.getOwnPropertyDescriptor(y, e))
									}), j))
								})
							})
						})
					}
				}, {
					onCloseCallback: () => {
						null == u || u(!1)
					},
					onCloseRequest: s.dG4
				})
			}
		},
		144114: function(e, t, n) {
			n.d(t, {
				L: () => u,
				Z: () => m
			});
			var r, i = n(990547),
				l = n(544891),
				a = n(570140),
				s = n(314897),
				o = n(573261),
				c = n(815660),
				d = n(981631),
				u = ((r = {}).USER_ACTION_REQUIRED = "user_action_required", r.USER_SETTINGS_UPDATE = "user_settings_update", r.GUILD_PHONE_REQUIRED = "guild_phone_required", r.MFA_PHONE_UPDATE = "mfa_phone_update", r.CONTACT_SYNC = "contact_sync", r);
			let m = {
				setCountryCode(e) {
					a.Z.dispatch({
						type: "PHONE_SET_COUNTRY_CODE",
						countryCode: e
					})
				},
				removePhone: (e, t) => l.tn.del({
					url: d.ANM.PHONE,
					body: {
						password: e,
						change_phone_reason: t
					},
					oldFormErrors: !0,
					rejectWithError: !1
				}),
				resendCode(e) {
					let t = {},
						n = s.default.getFingerprint();
					return null != n && "" !== n && (t["X-Fingerprint"] = n), l.tn.post({
						url: d.ANM.RESEND_PHONE,
						headers: t,
						body: {
							phone: e
						},
						rejectWithError: !1
					})
				},
				beginAddPhone: (e, t) => l.tn.post({
					url: d.ANM.PHONE,
					body: {
						phone: e,
						change_phone_reason: t
					},
					rejectWithError: !1
				}),
				addPhone: (e, t, n) => l.tn.post({
					url: d.ANM.PHONE,
					body: {
						phone_token: e,
						password: t,
						change_phone_reason: n
					},
					oldFormErrors: !0,
					rejectWithError: !1
				}),
				addPhoneWithoutPassword: e => l.tn.post({
					url: d.ANM.PHONE_VERIFY_NO_PASSWORD,
					body: {
						code: e
					},
					rejectWithError: !1
				}),
				beginReverifyPhone: (e, t) => l.tn.post({
					url: d.ANM.PHONE_REVERIFY,
					body: {
						phone: e,
						change_phone_reason: t
					},
					rejectWithError: !1
				}),
				reverifyPhone: (e, t, n) => l.tn.post({
					url: d.ANM.PHONE_REVERIFY,
					body: {
						phone_token: e,
						password: t,
						change_phone_reason: n
					},
					oldFormErrors: !0,
					rejectWithError: !1
				}),
				validatePhoneForSupport: e => l.tn.post({
					url: d.ANM.VERIFY_PHONE_FOR_TICKET,
					body: {
						token: e
					},
					oldFormErrors: !0,
					rejectWithError: !1
				}),
				async verifyPhone(e, t) {
					let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
						r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
						l = {},
						u = s.default.getFingerprint();
					null != u && "" !== u && (l["X-Fingerprint"] = u), r && (l.authorization = "");
					let m = await o.Z.post({
						url: d.ANM.VERIFY_PHONE,
						headers: l,
						body: {
							phone: e,
							code: t
						},
						oldFormErrors: !0,
						trackedActionData: {
							event: i.NetworkActionNames.USER_VERIFY_PHONE
						},
						rejectWithError: !1
					});
					return n && a.Z.dispatch({
						type: "MODAL_POP",
						key: c.M
					}), m.body
				}
			}
		},
		815660: function(e, t, n) {
			n.d(t, {
				M: () => r,
				z: () => i
			});
			let r = "PHONE_VERIFICATION_MODAL_KEY",
				i = 6
		},
		134612: function(e, t, n) {
			n.d(t, {
				$l: () => s,
				C2: () => u,
				DL: () => o,
				EI: () => l,
				Nn: () => m,
				X_: () => c,
				cH: () => d,
				n4: () => a,
				zr: () => i
			});
			var r = n(388032);
			let i = "SAFETY_WARNING_BANNER_WEB",
				l = "https://www.crisistextline.org/",
				a = "https://nofiltr.org/resources-hub/",
				s = "https://discord.findahelpline.com/",
				o = "InappropriateConversationModal-web",
				c = "PRIVATE_DM_SAFETY_TOOLS_MODAL",
				d = "SafetyToolsActionSheet-web",
				u = () => [r.intl.string(r.t["26fDv7"]), r.intl.string(r.t.togDfn), r.intl.string(r.t.O4LjcX)],
				m = () => [r.intl.string(r.t.bCWw8v), r.intl.string(r.t.mzSuc3), r.intl.string(r.t.ZkmC7u)]
		},
		667172: function(e, t, n) {
			n.d(t, {
				v4: () => i
			});
			let r = (0, n(818083).B)({
				kind: "user",
				id: "2025-01_inappropriate_conversations_new_defaults",
				label: "Inappropriate Conversation Warning Default On",
				defaultConfig: {
					enabled: !1
				},
				treatments: [{
					id: 1,
					label: "Inappropriate Conversation Warnings On",
					config: {
						enabled: !0
					}
				}]
			});

			function i(e) {
				let {
					location: t
				} = e, {
					enabled: n
				} = r.useExperiment({
					location: t
				}, {
					autoTrackExposure: !1
				});
				return n
			}
		},
		604849: function(e, t, n) {
			n.d(t, {
				c: () => o
			});
			var r = n(442837),
				i = n(581883),
				l = n(594174),
				a = n(981312),
				s = n(667172);
			let o = () => {
				let e = l.default.getCurrentUser(),
					t = (0, r.e7)([i.Z], () => {
						var e, t, n;
						return null == (n = null == (t = i.Z.settings.privacy) || null == (e = t.inappropriateConversationWarnings) ? void 0 : e.value) || n
					}),
					n = (0, a.U)(),
					o = (0, s.v4)({
						location: "useSafetyAlertsSettingOrDefault"
					});
				return !!n && !!o || (n || (null == e ? void 0 : e.isStaff()) === !0) && t
			}
		},
		792165: function(e, t, n) {
			n.d(t, {
				o: () => b
			});
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(993365),
				a = n(755721),
				s = n(481060),
				o = n(230711),
				c = n(767714),
				d = n(504983),
				u = n(594174),
				m = n(74538),
				p = n(981631),
				f = n(921944),
				h = n(474936),
				g = n(526761),
				C = n(388032),
				_ = n(435803);

			function b(e) {
				var t;
				let {
					onClose: n,
					markAsDismissed: b
				} = e, v = (0, i.e7)([u.default], () => u.default.getCurrentUser()), j = (t = null == v ? void 0 : v.premiumType) === h.p9.TIER_2 ? C.intl.string(C.t.jqO5Qk) : null == t ? C.intl.string(C.t.f2qjw8) : C.intl.string(C.t.SblICQ), y = m.ZP.canUseCustomCallSounds(v);
				return (0, r.jsxs)(d.Z, {
					isShown: !0,
					type: d.Y.PREMIUM,
					className: _.upsellOuter,
					backgroundClassName: _.upsellInner,
					children: [null != b ? (0, r.jsx)(s.P3F, {
						className: _.close,
						onClick: () => null == b ? void 0 : b(f.L.DISMISS),
						"aria-label": C.intl.string(C.t.cpT0Cg),
						children: (0, r.jsx)(s.Dio, {
							size: "xs",
							color: "currentColor",
							className: _.closeIcon
						})
					}) : null, (0, r.jsxs)("div", {
						className: _.upsellTitle,
						children: [(0, r.jsx)(s.SrA, {
							size: "sm",
							color: "currentColor",
							className: _.nitroWheel
						}), (0, r.jsx)(s.X6q, {
							variant: "heading-sm/bold",
							children: C.intl.string(C.t.dTbAx8)
						})]
					}), (0, r.jsx)(l.x, {
						variant: "text-sm/normal",
						children: j
					}), y ? (0, r.jsx)(s.zxk, {
						onClick: function() {
							o.Z.open(p.oAB.VOICE, g.GA), null == n || n(), null == b || b(f.L.PRIMARY)
						},
						text: C.intl.string(C.t.RzWDqa),
						fullWidth: !0
					}) : (0, r.jsx)(c.Z, {
						textOptions: {
							textOverride: C.intl.string(C.t.pj0XBA)
						},
						subscriptionTier: h.Si.TIER_2,
						premiumModalAnalyticsLocation: {
							section: p.jXE.SOUNDBOARD_SOUND_PICKER,
							object: p.qAy.BUTTON_CTA
						},
						color: a.zx.Colors.GREEN,
						onSubscribeModalClose: () => null == b ? void 0 : b(f.L.PRIMARY)
					})]
				})
			}
		},
		878857: function(e, t, n) {
			n.d(t, {
				Q: () => l,
				Z: () => i
			});
			let r = (0, n(818083).B)({
					kind: "user",
					id: "2022-07_system_dm_safety_onboarding",
					label: "System DM Safety Onboarding",
					defaultConfig: {
						systemDMRedesignEnabled: !1
					},
					treatments: [{
						id: 1,
						label: "Enabled, v1 copy",
						config: {
							systemDMRedesignEnabled: !0
						}
					}, {
						id: 2,
						label: "Enabled, v2 copy",
						config: {
							systemDMRedesignEnabled: !0
						}
					}]
				}),
				i = r;

			function l() {
				return r.getCurrentConfig({
					location: "0a5674_1"
				}, {
					autoTrackExposure: !1
				}).systemDMRedesignEnabled
			}
		},
		108427: function(e, t, n) {
			n.d(t, {
				e: () => d
			}), n(388685), n(35282);
			var r = n(772848),
				i = n(579806),
				l = n(626135),
				a = n(998502),
				s = n(981631);

			function o(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			let c = new class {
				trackEvent(e) {
					let t = Date.now();
					requestIdleCallback(() => {
						var n, r;
						l.default.track(s.rMx.APP_UI_VIEWED, (n = function(e) {
							for (var t = 1; t < arguments.length; t++) {
								var n = null != arguments[t] ? arguments[t] : {},
									r = Object.keys(n);
								"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
									return Object.getOwnPropertyDescriptor(n, e).enumerable
								}))), r.forEach(function(t) {
									o(e, t, n[t])
								})
							}
							return e
						}({}, function() {
							var e, t, n;
							let r = "--campaign-id=";
							for (let l of null != (n = null === i.Z || void 0 === i.Z || null == (t = i.Z.processUtils) || null == (e = t.getMainArgvSync) ? void 0 : e.call(t)) ? n : [])
								if (l.startsWith(r)) return {
									referrer: l.substr(r.length)
								};
							return {}
						}(), function() {
							let e = !1,
								t = {
									total_compressed_byte_size: 0,
									total_uncompressed_byte_size: 0,
									total_transfer_byte_size: 0,
									js_compressed_byte_size: 0,
									js_uncompressed_byte_size: 0,
									js_transfer_byte_size: 0,
									css_compressed_byte_size: 0,
									css_uncompressed_byte_size: 0,
									css_transfer_byte_size: 0
								};
							return null != window.performance && null != window.performance.getEntries && window.performance.getEntries().forEach(n => {
								let r = null != n.encodedBodySize ? n.encodedBodySize : n.decodedBodySize,
									i = null != n.decodedBodySize ? n.decodedBodySize : n.encodedBodySize,
									l = n.transferSize;
								null != i && null != r && (e = !0, t.total_compressed_byte_size += r, t.total_uncompressed_byte_size += i, null != l && (t.total_uncompressed_byte_size += l), "resource" === n.entryType && ("script" === n.initiatorType && null != n.name && null != n.name.match(/\.js/) && (t.js_compressed_byte_size += r, t.js_uncompressed_byte_size += i, null != l && (t.js_uncompressed_byte_size += l)), "link" === n.initiatorType && null != n.name && null != n.name.match(/\.css/) && (t.css_compressed_byte_size += r, t.css_uncompressed_byte_size += i, null != l && (t.css_uncompressed_byte_size += l))))
							}), e ? t : {}
						}()), r = r = {
							load_id: this.loadId,
							screen_name: e,
							duration_ms_since_app_opened: t - window.GLOBAL_ENV.HTML_TIMESTAMP,
							app_hardware_acceleration_enabled: a.ZP.getEnableHardwareAcceleration()
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var r = Object.getOwnPropertySymbols(e);
								n.push.apply(n, r)
							}
							return n
						})(Object(r)).forEach(function(e) {
							Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
						}), n))
					})
				}
				trackAppUIViewed(e) {
					if (!this.appUIViewed) {
						this.trackEvent(e);
						try {
							a.ZP.appViewed()
						} catch (e) {}
						this.appUIViewed = !0
					}
				}
				constructor() {
					o(this, "loadId", (0, r.Z)()), o(this, "appUIViewed", !1)
				}
			};

			function d(e) {
				c.trackAppUIViewed(e)
			}
		},
		196051: function(e, t, n) {
			n.d(t, {
				Bo: () => a,
				Ct: () => o,
				LA: () => l,
				NB: () => s,
				cP: () => i
			});
			var r = n(570140);

			function i(e, t, n, i, l) {
				r.Z.dispatch({
					type: "SPEAK_TEXT",
					text: e,
					interrupt: t,
					maxLength: n,
					onStart: i,
					onEnd: l
				})
			}

			function l(e, t) {
				r.Z.dispatch({
					type: "SPEAK_MESSAGE",
					channel: e,
					message: t
				})
			}

			function a(e, t) {
				r.Z.dispatch({
					type: "SPEAKING_MESSAGE",
					channelId: e,
					messageId: t
				})
			}

			function s() {
				r.Z.dispatch({
					type: "STOP_SPEAKING"
				})
			}

			function o(e) {
				r.Z.dispatch({
					type: "SET_TTS_SPEECH_RATE",
					speechRate: e
				})
			}
		},
		889901: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			var r = n(255367);
			n(73800);
			var i = n(325767);

			function l(e) {
				var t, n, {
						width: l = 20,
						height: a = 20,
						className: s
					} = e,
					o = function(e, t) {
						if (null == e) return {};
						var n, r, i = function(e, t) {
							if (null == e) return {};
							var n, r, i = {},
								l = Object.keys(e);
							for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
							return i
						}(e, t);
						if (Object.getOwnPropertySymbols) {
							var l = Object.getOwnPropertySymbols(e);
							for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
						}
						return i
					}(e, ["width", "height", "className"]);
				return (0, r.jsx)("svg", (t = function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {},
							r = Object.keys(n);
						"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
							return Object.getOwnPropertyDescriptor(n, e).enumerable
						}))), r.forEach(function(t) {
							var r;
							r = n[t], t in e ? Object.defineProperty(e, t, {
								value: r,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : e[t] = r
						})
					}
					return e
				}({
					width: l,
					height: a,
					className: s
				}, (0, i.Z)(o)), n = n = {
					viewBox: "0 0 20 20",
					children: (0, r.jsxs)("g", {
						clipPath: "url(#clip0_198_5469)",
						children: [(0, r.jsx)("path", {
							"aria-hidden": !0,
							d: "M19.15 17C19.41 17.11 19.6 17 19.51 16.73L18.89 15.15L18.28 13.56C18.23 13.4421 18.1442 13.3429 18.0348 13.2765C17.9253 13.2101 17.7977 13.1798 17.67 13.19L13.67 14.28C13.4 14.36 13.56 14.79 13.92 14.93L19.15 17Z",
							fill: "#FF73FA"
						}), (0, r.jsx)("path", {
							"aria-hidden": !0,
							d: "M9.80009 14L7.08009 8.67001L0.440092 18C0.351927 18.1221 0.299095 18.2662 0.287392 18.4163C0.275688 18.5665 0.305566 18.7169 0.373746 18.8512C0.441926 18.9855 0.545775 19.0985 0.673902 19.1776C0.802029 19.2568 0.949484 19.2991 1.10009 19.3H12.5201L9.80009 14Z",
							fill: "#8086FF"
						}), (0, r.jsx)("path", {
							"aria-hidden": !0,
							d: "M12.27 19C11.57 19 9.92997 17.31 8.52997 14.57C7.86795 13.3426 7.37674 12.0304 7.06997 10.67C6.83997 9.54999 6.99997 8.99999 7.19997 8.89999H7.32997C8.03997 8.89999 9.66997 10.59 11.07 13.32C12.68 16.46 12.93 18.76 12.4 19.03C12.3549 19.0306 12.3103 19.0203 12.27 19Z",
							fill: "#05124A"
						}), (0, r.jsx)("path", {
							"aria-hidden": !0,
							d: "M7.33009 9.14999C7.86009 9.14999 9.42009 10.67 10.8301 13.43C12.4501 16.57 12.5201 18.55 12.2701 18.77C11.7401 18.77 10.1801 17.25 8.77009 14.49C7.15009 11.35 7.08009 9.35999 7.32009 9.14999H7.33009ZM7.32009 8.60999C7.233 8.60831 7.14693 8.62897 7.07009 8.66999C6.23009 9.08999 6.78009 11.81 8.28009 14.74C9.65009 17.4 11.3401 19.31 12.2801 19.31C12.3672 19.3117 12.4532 19.291 12.5301 19.25C13.3701 18.82 12.8301 16.11 11.3201 13.18C9.96009 10.52 8.26009 8.60999 7.32009 8.60999Z",
							fill: "#373BE1"
						}), (0, r.jsx)("path", {
							"aria-hidden": !0,
							d: "M3.53991 17.22C3.16017 16.4754 2.85534 15.6949 2.62991 14.89L1.40991 16.6C1.5797 17.0776 1.77669 17.545 1.99991 18C2.21943 18.4301 2.46316 18.8475 2.72991 19.25H4.84991C4.34607 18.6191 3.90718 17.939 3.53991 17.22Z",
							fill: "#373BE1"
						}), (0, r.jsx)("path", {
							"aria-hidden": !0,
							d: "M6.83003 19.25H9.23003C8.09101 18.2623 7.1538 17.0636 6.47003 15.72C5.75671 14.3452 5.32173 12.8432 5.19003 11.3L3.78003 13.3C4.05054 14.4137 4.46044 15.4889 5.00003 16.5C5.49463 17.4884 6.10927 18.4121 6.83003 19.25Z",
							fill: "#373BE1"
						}), (0, r.jsx)("path", {
							"aria-hidden": !0,
							d: "M12.2699 18.77C11.7199 18.7 10.2699 17.3 8.7899 14.49C7.2499 11.49 7.1199 9.57 7.3199 9.19L6.9999 8.69C6.2199 9.19 6.7699 11.86 8.2499 14.74C9.5699 17.31 11.2499 19.19 12.1399 19.3C12.2557 19.3201 12.3748 19.3026 12.4799 19.25L12.2699 18.77Z",
							fill: "#373BE1"
						}), (0, r.jsx)("path", {
							"aria-hidden": !0,
							d: "M15.5901 9.23L14.6201 8C14.5734 7.94051 14.5118 7.89439 14.4416 7.8663C14.3713 7.8382 14.2949 7.82913 14.2201 7.84L10.8601 8.28C10.786 8.29082 10.7158 8.32037 10.6563 8.36587C10.5968 8.41137 10.5499 8.47131 10.5201 8.54L9.22008 11.68C9.18969 11.7486 9.1792 11.8243 9.18981 11.8986C9.20042 11.9729 9.2317 12.0427 9.28008 12.1L10.2801 13.37C10.3268 13.4295 10.3884 13.4756 10.4586 13.5037C10.5288 13.5318 10.6052 13.5409 10.6801 13.53L14.0001 13.05C14.0742 13.0392 14.1443 13.0096 14.2038 12.9641C14.2633 12.9186 14.3102 12.8587 14.3401 12.79L15.6401 9.65C15.6718 9.58232 15.684 9.50709 15.6751 9.43285C15.6663 9.35862 15.6368 9.28834 15.5901 9.23Z",
							fill: "#FFD836"
						}), (0, r.jsx)("path", {
							"aria-hidden": !0,
							d: "M12.6801 10.21L11.4101 9.74001C11.3617 9.72337 11.3182 9.69501 11.2834 9.65748C11.2487 9.61994 11.2238 9.57439 11.2109 9.52489C11.198 9.47539 11.1976 9.42347 11.2097 9.37376C11.2217 9.32405 11.2459 9.27811 11.2801 9.24001L14.7201 5.24001C14.7617 5.1903 14.8178 5.15488 14.8806 5.13873C14.9434 5.12259 15.0096 5.12653 15.0701 5.15001L16.3401 5.61001C16.3871 5.62978 16.4288 5.66018 16.4621 5.69881C16.4954 5.73745 16.5193 5.78327 16.5319 5.83268C16.5445 5.8821 16.5454 5.93376 16.5347 5.98361C16.524 6.03346 16.5019 6.08015 16.4701 6.12001L13.0301 10.12C12.9884 10.1697 12.9323 10.2051 12.8695 10.2213C12.8067 10.2374 12.7405 10.2335 12.6801 10.21Z",
							fill: "#AEC7FF"
						}), (0, r.jsx)("path", {
							"aria-hidden": !0,
							d: "M11.61 17.25L11.35 16.33C11.3396 16.2949 11.3383 16.2577 11.346 16.2219C11.3537 16.1861 11.3702 16.1527 11.394 16.1249C11.4179 16.0971 11.4483 16.0757 11.4825 16.0626C11.5167 16.0495 11.5536 16.0452 11.59 16.05L15.31 16.37C15.3545 16.373 15.397 16.3901 15.4311 16.4189C15.4653 16.4477 15.4894 16.4866 15.5 16.53L15.76 17.45C15.7697 17.4856 15.7707 17.523 15.763 17.5591C15.7552 17.5952 15.7388 17.6289 15.7153 17.6574C15.6918 17.6858 15.6617 17.7082 15.6277 17.7225C15.5937 17.7369 15.5568 17.7429 15.52 17.74L11.8 17.42C11.7546 17.4149 11.7119 17.3958 11.6778 17.3653C11.6438 17.3349 11.6201 17.2946 11.61 17.25Z",
							fill: "#AEC7FF"
						}), (0, r.jsx)("path", {
							"aria-hidden": !0,
							d: "M10.51 4.87L9.51004 4.8C9.47171 4.79882 9.43428 4.78808 9.40117 4.76875C9.36805 4.74942 9.34029 4.72212 9.32041 4.68932C9.30054 4.65653 9.28918 4.61928 9.28737 4.58098C9.28555 4.54268 9.29335 4.50453 9.31004 4.47L10.93 0.900003C10.9491 0.856352 10.9819 0.820078 11.0234 0.796634C11.0648 0.773191 11.1128 0.763846 11.16 0.770003L12.16 0.840003C12.1984 0.841182 12.2358 0.851926 12.2689 0.871256C12.302 0.890587 12.3298 0.917891 12.3497 0.950685C12.3695 0.98348 12.3809 1.02072 12.3827 1.05903C12.3845 1.09733 12.3767 1.13548 12.36 1.17L10.74 4.73C10.7213 4.77455 10.689 4.81205 10.6477 4.83718C10.6064 4.86231 10.5582 4.87379 10.51 4.87Z",
							fill: "#FF73FA"
						}), (0, r.jsx)("path", {
							"aria-hidden": !0,
							d: "M9.11995 3.16L9.38995 3.89C9.40593 3.92181 9.43011 3.94877 9.46 3.96811C9.48988 3.98744 9.52439 3.99846 9.55995 4H10.3699C10.5599 4 10.6099 4.26 10.4499 4.41L9.76995 5.07C9.71086 5.13269 9.67549 5.21403 9.66995 5.3V6.13C9.66965 6.17649 9.6589 6.22232 9.63849 6.2641C9.61808 6.30587 9.58854 6.34252 9.55204 6.37133C9.51555 6.40013 9.47305 6.42037 9.42768 6.43052C9.38231 6.44068 9.33524 6.4405 9.28995 6.43L8.59995 6.1C8.56441 6.08159 8.52497 6.07198 8.48495 6.07198C8.44492 6.07198 8.40549 6.08159 8.36995 6.1L7.57995 6.57C7.38995 6.69 7.20995 6.57 7.26995 6.35L7.51995 5.49C7.53745 5.45777 7.54662 5.42168 7.54662 5.385C7.54662 5.34833 7.53745 5.31223 7.51995 5.28L6.99995 4.81C6.86995 4.68 6.99995 4.42 7.18995 4.37L7.99995 4.17C8.04629 4.1582 8.08971 4.13702 8.12755 4.10779C8.16539 4.07855 8.19684 4.04187 8.21995 4L8.68995 3.2C8.79995 3 9.05995 3 9.11995 3.16Z",
							fill: "#A5F7DE"
						})]
					})
				}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						n.push.apply(n, r)
					}
					return n
				})(Object(n)).forEach(function(e) {
					Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
				}), t))
			}
		}
	}
]);
//# sourceMappingURL=37d51d4c914e549b.js.map