"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["30419"], {
		623714: function(e) {
			e.exports = "/assets/52c92d8492ebe041.svg"
		},
		267988: function(e) {
			e.exports = "/assets/52c92d8492ebe041.svg"
		},
		396767: function(e) {
			e.exports = "/assets/c278e895ac47b4af.svg"
		},
		987656: function(e) {
			e.exports = "/assets/2d416896e0bbb412.svg"
		},
		395199: function(e, t, n) {
			n.d(t, {
				Z: () => N
			}), n(539854), n(388685);
			var l, r = n(255367),
				s = n(73800),
				i = n(120356),
				a = n.n(i),
				o = n(442837),
				c = n(215569),
				d = n(481060),
				u = n(600164),
				m = n(777789),
				x = n(78839),
				h = n(709054),
				p = n(388032),
				g = n(304586);

			function f(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			class j extends s.PureComponent {
				render() {
					let {
						onClose: e
					} = this.props;
					return (0, r.jsxs)(d.xBx, {
						separator: !1,
						justify: u.Z.Justify.BETWEEN,
						children: [(0, r.jsx)(d.X6q, {
							variant: "heading-md/semibold",
							children: this.props.text
						}), null != e ? (0, r.jsx)(d.olH, {
							onClick: e
						}) : null]
					})
				}
			}

			function C(e) {
				let {
					imageClass: t,
					children: n,
					error: l,
					onDismissError: s
				} = e;
				return (0, r.jsxs)("div", {
					className: g.content,
					children: [(0, r.jsx)("div", {
						className: a()(g.image, t)
					}), n, (0, r.jsx)(c.W, {
						children: null != l ? (0, r.jsx)(d.oXn, {
							className: g.error,
							children: (0, r.jsx)(d.kzN, {
								onDismiss: s,
								children: l.message
							})
						}) : null
					})]
				})
			}
			let v = e => {
				let {
					canceledCount: t
				} = e, n = (0, o.e7)([x.Z], () => x.Z.getPremiumTypeSubscription());
				return null == n ? null : (0, r.jsxs)("div", {
					className: g.pendingCancellation,
					children: [(0, r.jsx)(d.P4T, {
						size: "custom",
						width: 20,
						height: 20,
						color: "currentColor",
						className: g.pendingCancellationIcon
					}), (0, r.jsx)(d.Text, {
						variant: "text-md/normal",
						className: g.pendingCancellationMessage,
						children: p.intl.format(p.t.SFpsCA, {
							date: n.currentPeriodEnd,
							canceledCount: t
						})
					})]
				})
			};

			function b(e) {
				let {
					imageClass: t,
					blurb: n,
					guild: l,
					warning: s,
					error: i,
					onDismissError: a,
					slotCount: o = 1,
					canceledCount: c = 0
				} = e;
				return (0, r.jsxs)(C, {
					imageClass: t,
					error: i,
					onDismissError: a,
					children: [(0, r.jsx)(d.Text, {
						variant: "text-md/normal",
						children: n
					}), (0, r.jsx)(m.Z, {
						className: g.guildCard,
						guild: l,
						subscriptionChange: o
					}), (0, r.jsx)(d.Text, {
						variant: "text-md/normal",
						children: s
					}), c > 0 ? (0, r.jsx)(v, {
						canceledCount: c
					}) : null]
				})
			}
			class y extends s.PureComponent {
				render() {
					let {
						confirmation: e,
						confirmationLabel: t,
						isModifyingSubscription: n,
						onConfirm: l,
						onCancel: s
					} = this.props;
					return (0, r.jsx)(d.mzw, {
						children: (0, r.jsxs)(d.hE2, {
							direction: "horizontal-reverse",
							children: [(0, r.jsx)(d.zxk, {
								variant: "primary",
								text: e,
								onClick: l,
								loading: n,
								"aria-label": t
							}), (0, r.jsx)(d.zxk, {
								variant: "secondary",
								text: p.intl.string(p.t["ETE/oK"]),
								onClick: s,
								disabled: n
							})]
						})
					})
				}
			}
			class S extends(l = s.PureComponent) {
				render() {
					let {
						guild: e,
						header: t,
						blurb: n,
						warning: l,
						confirmation: i,
						confirmationLabel: a,
						imageClass: o,
						error: c,
						isModifyingSubscription: u,
						onConfirm: m,
						onCancel: x,
						onDismissError: h,
						canceledCount: p
					} = this.props;
					return (0, r.jsxs)(s.Fragment, {
						children: [(0, r.jsx)(j, {
							text: t
						}), (0, r.jsx)(d.hzk, {
							children: (0, r.jsx)(b, {
								guild: e,
								blurb: n,
								warning: l,
								imageClass: o,
								error: c,
								onDismissError: h,
								canceledCount: p
							})
						}), (0, r.jsx)(y, {
							confirmation: i,
							confirmationLabel: a,
							isModifyingSubscription: u,
							onConfirm: m,
							onCancel: x
						})]
					})
				}
			}
			f(S, "Header", j), f(S, "ApplyBody", b), f(S, "TransferBody", function(e) {
				var t, n;
				let {
					imageClass: l,
					blurb: i,
					fromGuilds: a,
					toGuild: o,
					error: c,
					onDismissError: u,
					slotCount: x = 1,
					canceledCount: f = 0
				} = e, j = s.useRef(a), b = null == (t = j.current) ? void 0 : t.length, y = null == (n = j.current) ? void 0 : n.reduce((e, t) => (e.hasOwnProperty(t.id) || (e[t.id] = []), e[t.id].push(t), e), {});
				return (0, r.jsxs)(C, {
					imageClass: l,
					error: c,
					onDismissError: u,
					children: [(0, r.jsx)(d.Text, {
						variant: "text-md/normal",
						children: i
					}), (0, r.jsx)(d.Text, {
						variant: "text-xs/bold",
						className: g.transferGuildCardHeader,
						children: p.intl.format(p.t["5zQYEx"], {
							guildCount: b
						})
					}), null != y ? h.default.keys(y).map(e => (0, r.jsx)(m.Z, {
						className: g.transferFromGuildCard,
						guild: y[e][0],
						subscriptionChange: -1 * y[e].length
					}, e)) : null, (0, r.jsx)(d.Text, {
						variant: "text-xs/normal",
						className: g.transferGuildCardHeader,
						children: p.intl.format(p.t.ct6oxM, {
							slotCount: x
						})
					}), (0, r.jsx)("div", {
						className: g.activeTransferGuildCardBorder,
						children: (0, r.jsx)(m.Z, {
							className: g.transferToGuildCard,
							guild: o,
							subscriptionChange: null != a ? a.length : 1
						})
					}), f > 0 ? (0, r.jsx)(v, {
						canceledCount: f
					}) : null]
				})
			}), f(S, "Footer", y);
			let N = S
		},
		760558: function(e, t, n) {
			n.d(t, {
				default: () => b
			}), n(388685);
			var l = n(255367),
				r = n(73800),
				s = n(512722),
				i = n.n(s),
				a = n(442837),
				o = n(481060),
				c = n(179360),
				d = n(899667),
				u = n(430824),
				m = n(314884),
				x = n(626135),
				h = n(267642),
				p = n(395199),
				g = n(719228),
				f = n(4434),
				j = n(981631),
				C = n(388032),
				v = n(671593);
			let b = e => {
				var t, n;
				let {
					guildBoostSlots: s,
					selectedGuild: b,
					locationSection: y,
					transitionState: S,
					onClose: N
				} = e, E = (0, h.vx)(m.Z.boostSlots);
				i()(null != s || null != b, "Must either provide slots or an initial selected guild"), i()(!(null == s ? void 0 : s.some(e => e.isOnCooldown())), "If slots are provided, they must not be on cooldown");
				let O = [null == s ? "UNUSED_QUANTITY_SELECT" : null, null == b ? "GUILD_SELECT" : null, "CONFIRM", "SUCCESS"].filter(e => null != e),
					[P, T] = (0, a.Wu)([d.Z], () => [d.Z.isModifyingAppliedBoost, d.Z.applyBoostError]),
					[Z, w] = r.useState(""),
					[L, G] = r.useState(O[0]),
					[I, M] = r.useState(!1),
					[D, k] = r.useState(b),
					[U, B] = r.useState(null != s ? s : E.slice(0, 1)),
					z = r.useMemo(() => null == U ? [] : U.map(e => {
						let {
							premiumGuildSubscription: t
						} = e;
						return u.Z.getGuild(null == t ? void 0 : t.guildId)
					}).filter(e => null != e), [U]),
					F = r.useMemo(() => {
						var e;
						return (null == U || null == (e = U[0]) ? void 0 : e.premiumGuildSubscription) != null
					}, [U]),
					R = () => {
						N("SUCCESS" === L), x.default.track(j.rMx.MODAL_DISMISSED, {
							type: j.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
							location_section: y
						})
					},
					_ = {
						UNUSED_QUANTITY_SELECT: {
							body: () => (i()(null != s || 0 !== E.length, "Cannot provide no slots if there are no other available slots"), (0, l.jsxs)("div", {
								className: v.quantitySelectorBody,
								children: [(0, l.jsx)(o.X6q, {
									variant: "heading-md/semibold",
									className: v.quantitySelectorHeader,
									children: C.intl.string(C.t["9FFrra"])
								}), (0, l.jsx)(o.Text, {
									variant: "text-md/normal",
									className: v.quantitySelectorDescription,
									children: C.intl.string(C.t.x5qw5e)
								}), (0, l.jsxs)("div", {
									className: v.quantitySelectorWrapper,
									children: [(0, l.jsx)(o.FiK, {
										value: U.length,
										onChange: e => B(E.slice(0, e)),
										minValue: 1,
										maxValue: E.length
									}), (0, l.jsx)(o.Text, {
										className: v.quantitySelectorLabel,
										variant: "text-md/normal",
										children: C.intl.string(C.t.Vl8TCw)
									})]
								})]
							})),
							footer: () => (0, l.jsx)(o.mzw, {
								children: (0, l.jsxs)(o.hE2, {
									direction: "horizontal-reverse",
									children: [(0, l.jsx)(o.zxk, {
										variant: "primary",
										text: C.intl.string(C.t["/uwYdX"]),
										onClick: () => G("CONFIRM")
									}), (0, l.jsx)(o.zxk, {
										variant: "secondary",
										text: C.intl.string(C.t["1BPTsL"]),
										onClick: R
									})]
								})
							})
						},
						GUILD_SELECT: {
							header: () => (0, l.jsx)(g.g, {
								isTransfer: F,
								query: Z,
								setQuery: w
							}),
							bodyClass: v.selectContent,
							body: () => (0, l.jsx)(g.e, {
								onClose: R,
								onSelectGuild: e => {
									k(e), G("CONFIRM")
								},
								isTransfer: F,
								selectedSlotGuilds: z,
								query: Z
							})
						},
						CONFIRM: {
							body() {
								if (null == D) return null;
								let e = U.filter(e => (0, h.tl)(e)).length,
									t = U.length,
									n = z.length;
								return F ? (0, l.jsx)(p.Z.TransferBody, {
									fromGuilds: z,
									toGuild: D,
									blurb: C.intl.formatToPlainString(C.t.SSA2lp, {
										slotCount: t,
										guildCount: n
									}),
									imageClass: v.transferConfirmImage,
									error: I ? T : null,
									onDismissError: () => M(!1),
									slotCount: t,
									canceledCount: e
								}) : (0, l.jsx)(p.Z.ApplyBody, {
									guild: D,
									blurb: C.intl.string(C.t.yTlZV1),
									warning: C.intl.formatToPlainString(C.t.KPnDlp, {
										days: j.o3l,
										slotCount: t
									}),
									imageClass: v.confirmImage,
									error: I ? T : null,
									onDismissError: () => M(!1),
									slotCount: t,
									canceledCount: e
								})
							},
							footer() {
								let e = U.length,
									t = "CONFIRM" === O[0] ? R : () => G(O[O.indexOf(L) - 1]),
									n = async () => {
										if (null != D && (null == U ? void 0 : U.length) !== 0) {
											i()(!U.some(e => e.isOnCooldown()), "Cannot use a premium guild subscription slot while on cooldown");
											try {
												await Promise.all(U.map(e => {
													let {
														premiumGuildSubscription: t
													} = e;
													return null != t ? (0, c.dG)(t.guildId, t.id) : Promise.resolve()
												})), await (0, c.W3)(D.id, U.map(e => {
													let {
														id: t
													} = e;
													return t
												})), G("SUCCESS")
											} catch (e) {
												M(!0)
											}
										}
									};
								return (0, l.jsx)(p.Z.Footer, {
									confirmation: F ? C.intl.formatToPlainString(C.t.Oh6mxc, {
										slotCount: e
									}) : C.intl.formatToPlainString(C.t["ZU5x5+"], {
										slotCount: e
									}),
									confirmationLabel: F ? C.intl.formatToPlainString(C.t.fnZRmZ, {
										slotCount: e
									}) : C.intl.formatToPlainString(C.t.d0vwWV, {
										slotCount: e
									}),
									onConfirm: n,
									onCancel: t,
									isModifyingSubscription: P
								})
							}
						},
						SUCCESS: {
							body: () => (0, l.jsx)(f.R7, {
								guild: D,
								isTransfer: F,
								guildBoostQuantity: U.length,
								onClose: R,
								didPurchaseOnFractionalPremium: !1
							})
						}
					};
				r.useEffect(() => {
					x.default.track(j.rMx.OPEN_MODAL, {
						type: j.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
						location_section: y
					})
				}, [y]);
				let A = _[L];
				return (0, l.jsxs)(o.Y0X, {
					transitionState: S,
					className: v.modal,
					size: o.CgR.SMALL,
					parentComponent: "ApplyGuildBoostModal",
					children: [null == (t = A.header) ? void 0 : t.call(A), (0, l.jsx)(o.hzk, {
						className: A.bodyClass,
						children: (0, l.jsx)(o.qBt, {
							step: L,
							steps: O,
							children: A.body()
						})
					}), null == (n = A.footer) ? void 0 : n.call(A), (0, l.jsx)(o.olH, {
						className: v.modalCloseButton,
						onClick: R
					})]
				})
			}
		},
		719228: function(e, t, n) {
			n.d(t, {
				default: () => v,
				e: () => C,
				g: () => j
			}), n(539854), n(388685);
			var l = n(255367),
				r = n(73800),
				s = n(658722),
				i = n.n(s),
				a = n(442837),
				o = n(481060),
				c = n(37234),
				d = n(565138),
				u = n(703656),
				m = n(430824),
				x = n(771845),
				h = n(267642),
				p = n(981631),
				g = n(388032),
				f = n(544197);

			function j(e) {
				let {
					isTransfer: t = !1,
					setQuery: n,
					query: r
				} = e;
				return (0, l.jsxs)(o.xBx, {
					className: f.selectHeaderContainer,
					children: [(0, l.jsx)(o.X6q, {
						className: f.selectHeader,
						variant: "heading-md/semibold",
						children: t ? g.intl.string(g.t.IB13DQ) : g.intl.string(g.t.cQYceX)
					}), (0, l.jsx)(o.E1j, {
						size: o.E1j.Sizes.MEDIUM,
						placeholder: g.intl.string(g.t.vf3ZTU),
						"aria-label": g.intl.string(g.t.vf3ZTU),
						className: f.selectSearch,
						query: r,
						onChange: n,
						onClear: () => n("")
					})]
				})
			}

			function C(e) {
				let {
					isTransfer: t = !1,
					selectedSlotGuilds: n,
					onClose: r,
					onSelectGuild: s,
					query: j
				} = e, C = (0, a.e7)([x.ZP], () => x.ZP.getFlattenedGuildIds()), v = (0, a.Wu)([m.Z], () => C.reduce((e, t) => {
					let l = m.Z.getGuild(t);
					return null == l || null != n && n.some(e => e.id === t) || (j.length <= 0 || i()(j.toLowerCase(), null == l ? void 0 : l.name.toLowerCase())) && e.push(l), e
				}, []));

				function b() {
					r(), (0, c.xf)(), (0, u.uL)(p.Z5c.GUILD_DISCOVERY)
				}
				return (0, l.jsxs)(l.Fragment, {
					children: [0 === v.length && (0, l.jsx)("div", {
						className: f.emptyStateWrapper,
						children: (0, l.jsx)(o.Text, {
							variant: "text-md/normal",
							children: 0 === C.length ? g.intl.format(g.t["E3tB6+"], {
								publicGuildDirectoryHook: (e, t) => (0, l.jsx)(o.P3F, {
									onClick: b,
									tag: "a",
									children: e
								}, t)
							}) : g.intl.string(g.t.w3GLl5)
						})
					}), v.map(e => (0, l.jsxs)(o.P3F, {
						className: f.selectGuild,
						onClick: () => {
							s(e)
						},
						children: [(0, l.jsx)(d.Z, {
							className: f.selectGuildIcon,
							guild: e,
							size: d.Z.Sizes.SMALL
						}), (0, l.jsxs)("div", {
							className: f.selectGuildCopy,
							children: [(0, l.jsx)(o.Text, {
								className: f.selectGuildName,
								variant: "text-md/normal",
								children: e.name
							}), (0, l.jsx)(o.Text, {
								className: f.selectGuildLevel,
								color: "text-muted",
								variant: "text-xs/normal",
								children: (0, h.nW)(e.premiumTier)
							})]
						}), (0, l.jsx)(o.Text, {
							className: f.selectGuildPseudoCta,
							color: "always-white",
							variant: "text-sm/medium",
							children: t ? g.intl.string(g.t.dUgaFx) : g.intl.string(g.t.Uj0md3)
						})]
					}, e.id))]
				})
			}

			function v(e) {
				let {
					onClose: t,
					onSelectGuild: n,
					transitionState: s
				} = e, [i, a] = r.useState("");
				return (0, l.jsxs)(o.Y0X, {
					transitionState: s,
					className: f.modal,
					size: o.CgR.SMALL,
					parentComponent: "GuildSelectModal",
					children: [(0, l.jsx)(j, {
						query: i,
						setQuery: a
					}), (0, l.jsx)(o.hzk, {
						className: f.modalContent,
						children: (0, l.jsx)(C, {
							onClose: t,
							onSelectGuild: n,
							query: i
						})
					}), (0, l.jsx)(o.olH, {
						className: f.modalCloseButton,
						onClick: t
					})]
				})
			}
		},
		777789: function(e, t, n) {
			n.d(t, {
				Z: () => C
			});
			var l = n(255367),
				r = n(73800),
				s = n(120356),
				i = n.n(s),
				a = n(442837),
				o = n(565138),
				c = n(297700),
				d = n(471885),
				u = n(424625),
				m = n(267642),
				x = n(713081),
				h = n(905128),
				p = n(151494),
				g = n(632149);
			class f extends r.PureComponent {
				render() {
					let {
						tier: e
					} = this.props;
					return (0, l.jsxs)("div", {
						className: g.tierPill,
						children: [(0, l.jsx)(c.Z, {
							className: g.tierPillStar,
							children: (0, l.jsx)(d.Z, {
								tier: e,
								color: "currentColor",
								className: g.tierPillGem
							})
						}), (0, m.nW)(e)]
					})
				}
			}
			let j = e => {
				let {
					subscriptionChange: t,
					guild: n
				} = e, r = (0, p.Z)(n.id);
				if (0 === t) return null;
				let s = (0, m.Jh)(n.id),
					i = (0, m.ee)(r + t),
					a = i - s;
				return 0 === a ? null : (0, l.jsxs)(l.Fragment, {
					children: [(0, l.jsx)(u.Z, {
						className: a > 0 ? g.levelUpIcon : g.levelDownIcon
					}), (0, l.jsx)(f, {
						tier: i
					})]
				})
			};

			function C(e) {
				let {
					guild: t,
					className: n,
					subscriptionChange: s
				} = e, c = (0, a.e7)([h.Z], () => null != h.Z.getStateForGuild(t.id));
				return r.useEffect(() => {
					c || (0, x.Fm)(t.id)
				}, [c, t.id]), (0, l.jsxs)("div", {
					className: i()(g.subscription, n),
					children: [(0, l.jsx)(o.Z, {
						guild: t,
						size: o.Z.Sizes.LARGE
					}), (0, l.jsxs)("div", {
						className: g.subscriptionInfo,
						children: [(0, l.jsx)("div", {
							className: g.guildName,
							children: t.name
						}), (0, l.jsxs)("div", {
							className: g.tierInfo,
							children: [(0, l.jsx)(f, {
								tier: t.premiumTier
							}), (0, l.jsx)(j, {
								guild: t,
								subscriptionChange: null != s ? s : 0
							})]
						})]
					})]
				})
			}
		},
		424625: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			var l = n(255367);
			n(73800);
			var r = n(325767);

			function s(e) {
				var t, n, {
						width: s = 24,
						height: i = 24,
						color: a = "currentColor"
					} = e,
					o = function(e, t) {
						if (null == e) return {};
						var n, l, r = function(e, t) {
							if (null == e) return {};
							var n, l, r = {},
								s = Object.keys(e);
							for (l = 0; l < s.length; l++) n = s[l], t.indexOf(n) >= 0 || (r[n] = e[n]);
							return r
						}(e, t);
						if (Object.getOwnPropertySymbols) {
							var s = Object.getOwnPropertySymbols(e);
							for (l = 0; l < s.length; l++) n = s[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
						}
						return r
					}(e, ["width", "height", "color"]);
				return (0, l.jsxs)("svg", (t = function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {},
							l = Object.keys(n);
						"function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
							return Object.getOwnPropertyDescriptor(n, e).enumerable
						}))), l.forEach(function(t) {
							var l;
							l = n[t], t in e ? Object.defineProperty(e, t, {
								value: l,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : e[t] = l
						})
					}
					return e
				}({}, (0, r.Z)(o)), n = n = {
					width: s,
					height: i,
					viewBox: "0 0 16 16",
					children: [(0, l.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M8.45329 8.53891L3.26217 13.7844C2.95995 14.0719 2.49772 14.0719 2.21328 13.7844C1.92883 13.497 1.92883 13.0299 2.21328 12.7245L6.88884 7.99999L2.21328 3.27543C1.92883 2.988 1.92883 2.50297 2.21328 2.21555C2.49772 1.92812 2.95995 1.92812 3.26217 2.21555L8.45329 7.47903C8.73774 7.76645 8.73774 8.23352 8.45329 8.53891Z",
						fill: a
					}), (0, l.jsx)("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M14.4533 8.53891L9.26217 13.7844C8.95995 14.0719 8.49772 14.0719 8.21328 13.7844C7.92883 13.497 7.92883 13.0299 8.21328 12.7245L12.8888 7.99999L8.21328 3.27543C7.92883 2.988 7.92883 2.50297 8.21328 2.21555C8.49772 1.92812 8.95995 1.92812 9.26217 2.21555L14.4533 7.47903C14.7377 7.76645 14.7377 8.23352 14.4533 8.53891Z",
						fill: a
					})]
				}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var l = Object.getOwnPropertySymbols(e);
						n.push.apply(n, l)
					}
					return n
				})(Object(n)).forEach(function(e) {
					Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
				}), t))
			}
		}
	}
]);
//# sourceMappingURL=26b81fdfd34da380.js.map