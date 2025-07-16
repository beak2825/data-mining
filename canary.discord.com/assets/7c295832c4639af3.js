"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["18824"], {
		467432: function(t, e, s) {
			s.d(e, {
				e: () => i
			});
			var n = s(709054);
			let i = t => 864e5 > Math.abs(n.default.extractTimestamp(t.id) - new Date().getTime())
		},
		802429: function(t, e, s) {
			s.d(e, {
				i: () => a
			});
			var n = s(442837),
				i = s(236289);
			let a = () => (0, n.e7)([i.Z], () => i.Z.getFetchError())
		},
		811085: function(t, e, s) {
			s.d(e, {
				Z: () => j
			}), s(388685), s(953529);
			var n = s(255367),
				i = s(73800),
				a = s(392711),
				r = s(442837),
				l = s(692547),
				c = s(481060),
				o = s(594174),
				d = s(531441),
				u = s(451284),
				m = s(959562),
				h = s(800530),
				x = s(388032),
				g = s(627577);

			function j() {
				let t = (0, u.P)(),
					e = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
					[s, j] = i.useState(36),
					p = i.useRef({
						[d.Sn.ALL_GOOD]: null,
						[d.Sn.LIMITED]: null,
						[d.Sn.VERY_LIMITED]: null,
						[d.Sn.AT_RISK]: null,
						[d.Sn.SUSPENDED]: null
					}),
					f = i.useCallback(() => {
						j(Math.max(Math.max(...Object.values(p.current).map(t => {
							var e;
							return null != (e = null == t ? void 0 : t.getBoundingClientRect().height) ? e : 36
						})), 36))
					}, []);
				i.useEffect(() => {
					f();
					let t = (0, a.debounce)(f, 100);
					window.addEventListener("resize", t)
				}, [f]);
				let v = {
						[d.Sn.ALL_GOOD]: {
							title: x.t.uaKrRk,
							description: x.intl.format(x.t.pEdBDw, {
								termsOfService: h.sQ.TOS_LINK,
								communityGuidelines: h.sQ.COMMUNITY_GUIDELINES
							}),
							status: x.t["/Idfam"],
							Icon: c.owK,
							color: l.Z.colors.STATUS_POSITIVE
						},
						[d.Sn.LIMITED]: {
							title: x.t.epkcmZ,
							description: x.intl.string(x.t["774jub"]),
							status: x.t.umleq6,
							Icon: c.P4T,
							color: l.Z.colors.STATUS_WARNING
						},
						[d.Sn.VERY_LIMITED]: {
							title: x.t.crzE2d,
							description: x.intl.string(x.t["T/Ufh4"]),
							status: x.t.WBtMHR,
							Icon: c.P4T,
							color: l.Z.unsafe_rawColors.ORANGE_345
						},
						[d.Sn.AT_RISK]: {
							title: x.t.XRNVzM,
							description: x.intl.string(x.t["hbH+9f"]),
							status: x.t["7f+4Li"],
							Icon: c.P4T,
							color: l.Z.colors.STATUS_DANGER
						},
						[d.Sn.SUSPENDED]: {
							title: x.t.MExFk5,
							description: x.intl.string(x.t["2liUvr"]),
							status: x.t["0OONGB"],
							Icon: c.k$p,
							color: l.Z.colors.ICON_MUTED
						}
					},
					{
						title: N,
						description: S,
						color: b,
						Icon: T
					} = v[t.state],
					E = Object.keys(v).length;
				return (0, n.jsxs)(c.Zbd, {
					className: g.container,
					outline: !1,
					children: [(0, n.jsx)("div", {
						className: g.profile,
						children: (0, n.jsx)(m.Z, {
							user: e,
							size: c.EFr.SIZE_80
						})
					}), (0, n.jsxs)("div", {
						className: g.status,
						children: [(0, n.jsxs)("div", {
							className: g.title,
							children: [(0, n.jsx)(c.X6q, {
								color: "header-primary",
								variant: "heading-lg/normal",
								children: x.intl.format(N, {
									hook: t => (0, n.jsx)(c.Text, {
										style: {
											color: b.css
										},
										variant: "heading-lg/bold",
										tag: "span",
										children: t
									})
								})
							}), (0, n.jsx)(c.Text, {
								color: "text-default",
								variant: "text-sm/normal",
								children: S
							})]
						}), (0, n.jsxs)("div", {
							className: g.health,
							style: {
								height: s
							},
							children: [(0, n.jsx)("div", {
								className: g.line
							}), Object.entries(v).map((e, s) => {
								let [i, a] = e, r = parseInt(i) === t.state;
								return (0, n.jsxs)("div", {
									className: g.statusOption,
									ref: t => {
										p.current[parseInt(i)] = t
									},
									children: [r ? (0, n.jsx)(T, {
										className: g.marker,
										color: a.color
									}) : (0, n.jsx)("div", {
										className: g.marker,
										style: {
											marginLeft: 0 === s ? -6 : 0,
											marginRight: s === E - 1 ? -6 : 0
										},
										children: (0, n.jsx)("div", {
											className: g.empty
										})
									}), x.intl.format(a.status, {
										hook: t => (0, n.jsx)(c.Text, {
											color: "text-default",
											variant: "text-sm/normal",
											className: g.statusLabel,
											children: t
										})
									})]
								}, s)
							})]
						})]
					})]
				})
			}
		},
		959562: function(t, e, s) {
			s.d(e, {
				Z: () => l
			});
			var n = s(255367);
			s(73800);
			var i = s(481060),
				a = s(632139),
				r = s(660097);

			function l(t) {
				let {
					user: e,
					size: s
				} = t, l = (0, i.UCu)(s), c = null != e ? e.getAvatarURL(null, l.size) : r;
				return (0, n.jsx)("div", {
					className: a.avatarBackground,
					children: (0, n.jsx)("div", {
						className: a.avatar,
						style: {
							width: l.size,
							height: l.size
						},
						children: (0, n.jsx)(i.qEK, {
							src: c,
							"aria-hidden": !0,
							size: s
						})
					})
				})
			}
		},
		518560: function(t, e, s) {
			s.d(e, {
				Z: () => N
			});
			var n = s(255367),
				i = s(73800),
				a = s(286379),
				r = s(481060),
				l = s(493773),
				c = s(797614),
				o = s(626135),
				d = s(103879),
				u = s(451284),
				m = s(802429),
				h = s(846488),
				x = s(181211),
				g = s(811085),
				j = s(967254),
				p = s(981631),
				f = s(388032),
				v = s(618983);

			function N() {
				let t = (0, x.Z)(),
					e = (0, h.e)(),
					s = (0, u.P)(),
					N = (0, m.i)();
				(0, l.ZP)(() => {
					d.yq()
				});
				let S = i.useRef(s);
				return (i.useEffect(() => {
					S.current = s
				}), i.useEffect(() => {
					e && (o.default.track(p.rMx.SAFETY_HUB_VIEWED, {
						account_standing: S.current.state
					}), c.Z.increment({
						name: a.V.SAFETY_HUB_VIEW
					}))
				}, [e]), t) ? (0, n.jsx)("div", {
					children: (0, n.jsx)(r.$jN, {})
				}) : null != N ? (0, n.jsxs)(r.qXd, {
					color: r.DM8.DANGER,
					className: v.nagbar,
					children: [f.intl.string(f.t.TDRvqq), (0, n.jsx)(r.EyT, {
						onClick: () => d.yq(),
						children: f.intl.string(f.t.R1AN4O)
					})]
				}) : (0, n.jsxs)("div", {
					className: v.container,
					children: [(0, n.jsx)(g.Z, {}), (0, n.jsx)(j.N, {})]
				})
			}
		},
		967254: function(t, e, s) {
			s.d(e, {
				N: () => w
			}), s(953529), s(388685);
			var n = s(255367),
				i = s(73800),
				a = s(120356),
				r = s.n(a),
				l = s(442837),
				c = s(481060),
				o = s(259580),
				d = s(499033),
				u = s(626135),
				m = s(709054),
				h = s(531441),
				x = s(236289),
				g = s(788080),
				j = s(467432),
				p = s(451284),
				f = s(613734),
				v = s(800530),
				N = s(981631),
				S = s(388032),
				b = s(202719);

			function T(t) {
				for (var e = 1; e < arguments.length; e++) {
					var s = null != arguments[e] ? arguments[e] : {},
						n = Object.keys(s);
					"function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(s).filter(function(t) {
						return Object.getOwnPropertyDescriptor(s, t).enumerable
					}))), n.forEach(function(e) {
						var n;
						n = s[e], e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n
					})
				}
				return t
			}
			let E = t => {
					let {
						status: e,
						onClick: s,
						opened: i,
						count: a
					} = t;
					return (0, n.jsxs)(c.P3F, {
						className: b.header,
						onClick: s,
						children: [(0, n.jsx)("div", {
							className: b.headerIconWrapper,
							children: (0, n.jsx)(c.aNP, {
								size: "md",
								color: "active" === e ? c.TVs.colors.INTERACTIVE_ACTIVE : c.TVs.colors.INTERACTIVE_MUTED
							})
						}), (0, n.jsxs)("div", {
							className: b.title,
							children: [(0, n.jsx)(c.X6q, {
								variant: "heading-md/semibold",
								color: "text-default",
								children: "active" === e ? S.intl.formatToPlainString(S.t.IeV2oa, {
									count: a.toString()
								}) : S.intl.formatToPlainString(S.t.fZAHBQ, {
									count: a.toString()
								})
							}), (0, n.jsx)(c.X6q, {
								variant: "text-sm/normal",
								color: "text-muted",
								children: "active" === e ? S.intl.string(S.t.XJ2YVV) : S.intl.string(S.t.SzGV0t)
							})]
						}), (0, n.jsx)("div", {
							className: b.caret,
							children: (0, n.jsx)(o.Z, {
								width: 18,
								height: 18,
								direction: i ? o.Z.Directions.UP : o.Z.Directions.DOWN
							})
						})]
					})
				},
				O = () => (0, n.jsxs)("div", {
					className: b.emptyState,
					children: [(0, n.jsxs)("div", {
						className: b.iconContainer,
						children: [(0, n.jsx)("div", {
							className: b.iconBackground,
							children: (0, n.jsx)(c.rm8, {
								size: "md",
								color: "currentColor",
								className: b.icon
							})
						}), (0, n.jsx)(d.Z, {
							className: b.stars
						})]
					}), (0, n.jsx)(c.X6q, {
						variant: "heading-md/bold",
						className: b.emptyStateText,
						children: S.intl.string(S.t.reLFaW)
					}), (0, n.jsx)(c.Text, {
						variant: "text-xs/normal",
						className: b.emptyStateSubtext,
						children: S.intl.string(S.t.ERdH1t)
					})]
				}),
				y = () => (0, n.jsx)("div", {
					className: b.emptyState,
					children: (0, n.jsx)(c.Text, {
						variant: "text-xs/normal",
						className: b.emptyStateSubtext,
						children: S.intl.string(S.t.RV3AXV)
					})
				}),
				I = t => {
					let {
						timestamp: e
					} = t;
					return (0, n.jsx)(c.Text, {
						variant: "text-xs/normal",
						className: b.timestamp,
						children: (0, g.XX)(e)
					})
				},
				_ = () => (0, n.jsx)(c.Text, {
					variant: "text-xs/bold",
					className: b.newBadge,
					children: S.intl.string(S.t.QKMRCw)
				}),
				D = t => {
					let {
						classification: e
					} = t, {
						id: a,
						description: l
					} = e, o = m.default.extractTimestamp(a), d = (0, j.e)(e), u = i.useMemo(() => {
						var t, s, i, a, r;
						let o = {
							description: l,
							descriptionHook: t => (0, n.jsx)(c.Text, {
								tag: "span",
								variant: "heading-lg/bold",
								children: t
							})
						};
						return (0, g.FB)(e) ? (null == e || null == (t = e.guild_metadata) ? void 0 : t.member_type) !== h.wO.OWNER ? S.intl.format(S.t.rmpEPD, {
							guildName: null == e || null == (i = e.guild_metadata) ? void 0 : i.name,
							classification_type: o.description,
							classificationHook: o.descriptionHook
						}) : S.intl.format(S.t.Lb0HVl, (a = T({}, o), r = r = {
							guildName: null == e || null == (s = e.guild_metadata) ? void 0 : s.name
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(r)) : (function(t, e) {
							var s = Object.keys(t);
							if (Object.getOwnPropertySymbols) {
								var n = Object.getOwnPropertySymbols(t);
								s.push.apply(s, n)
							}
							return s
						})(Object(r)).forEach(function(t) {
							Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(r, t))
						}), a)) : S.intl.format(S.t.QY4g5u, o)
					}, [e, l]);
					return (0, n.jsx)(c.P3F, {
						onClick: () => {
							(0, c.ZDy)(async () => {
								let {
									default: t
								} = await Promise.all([s.e("25292"), s.e("22878"), s.e("31978"), s.e("85372"), s.e("25183"), s.e("40694"), s.e("18831"), s.e("26179")]).then(s.bind(s, 41164));
								return e => (0, n.jsx)(t, T({
									classificationId: a,
									source: v.s.StandingTab
								}, e))
							})
						},
						className: r()(b.itemDetail, {
							[b.itemDetailNew]: d
						}),
						children: (0, n.jsxs)("div", {
							className: b.descriptionContainer,
							children: [d ? (0, n.jsx)(_, {}) : (0, n.jsx)(I, {
								timestamp: o
							}), (0, n.jsx)(c.X6q, {
								variant: "heading-lg/normal",
								children: u
							})]
						})
					}, a)
				},
				P = t => {
					let {
						status: e,
						classifications: s
					} = t, [a, r] = i.useState(!1), [o, d] = i.useState(3), m = (0, p.P)(), h = (0, l.e7)([x.Z], () => x.Z.getIsDsaEligible()), g = i.useMemo(() => s.slice(0, o), [s, o]);
					i.useEffect(() => {
						a && u.default.track(N.rMx.SAFETY_HUB_ACTION, {
							action: v.n0.ViewViolationsDropdown,
							account_standing: m.state,
							classification_ids: g.map(t => Number(t.id)),
							source: v.s.StandingTab,
							is_violative_content_shown: !1,
							is_dsa_eligible: h
						})
					}, [a, m.state, g, h]);
					let j = s.length - g.length > 3 ? 3 : s.length - g.length;
					return (0, n.jsxs)("div", {
						className: b.dropdown,
						children: [(0, n.jsx)(E, {
							status: e,
							onClick: () => r(t => !t),
							opened: a,
							count: s.length
						}), a && (0, n.jsxs)("div", {
							className: b.items,
							children: [(0, n.jsx)(c.njP.Separator, {
								style: {
									height: "1px",
									width: "100%"
								}
							}), g.length > 0 && g.map(t => (0, n.jsx)(D, {
								classification: t
							}, t.id)), g.length < s.length && (0, n.jsxs)(n.Fragment, {
								children: [(0, n.jsx)(c.njP.Separator, {
									style: {
										height: "1px",
										width: "100%"
									}
								}), (0, n.jsx)("button", {
									className: b.paginationButton,
									onClick: () => d(t => t + j),
									children: S.intl.format(S.t["9Ml56O"], {
										nextPageSize: j
									})
								})]
							}), 0 === g.length && "active" === e && (0, n.jsx)(O, {}), 0 === g.length && "expired" === e && (0, n.jsx)(y, {})]
						})]
					})
				},
				w = () => {
					let t = (0, f.y9)(),
						e = (0, f.KM)();
					return 0 === t.length && 0 === e.length ? null : (0, n.jsxs)("div", {
						children: [(0, n.jsx)(P, {
							status: "active",
							classifications: t
						}), (0, n.jsx)(P, {
							status: "expired",
							classifications: e
						})]
					})
				}
		}
	}
]);
//# sourceMappingURL=7c295832c4639af3.js.map