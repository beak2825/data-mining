"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["95468"], {
		216019: function(e) {
			e.exports = "/assets/050c2ac76232eff6.svg"
		},
		524094: function(e) {
			e.exports = "/assets/fe7f670e6ffe6cf6.svg"
		},
		802670: function(e) {
			e.exports = "/assets/4d5f9c527be0f6cd.svg"
		},
		17754: function(e) {
			e.exports = "/assets/6ab87cfd55c95d33.svg"
		},
		231239: function(e, t, n) {
			n.d(t, {
				Z: () => o
			}), n(35282);
			var r = n(990547),
				l = n(283693),
				i = n(570140),
				a = n(573261),
				s = n(981631);
			let o = {
				signup: (e, t) => a.Z.post({
					url: s.ANM.HUB_WAITLIST_SIGNUP,
					body: {
						email: e,
						school: t
					},
					trackedActionData: {
						event: r.NetworkActionNames.HUB_WAITLIST_SIGNUP,
						properties: e => {
							var t;
							let n = !1,
								r = null == e || null == (t = e.body) ? void 0 : t.email_domain;
							return null != r && (n = -1 !== r.split(".").indexOf("edu")), (0, l.iG)({
								is_edu_email: n
							})
						}
					},
					rejectWithError: !1
				}),
				sendVerificationEmail: async (e, t, n) => (await a.Z.post({
					url: s.ANM.HUB_EMAIL_VERIFY_SEND,
					body: {
						email: e,
						guild_id: n,
						allow_multiple_guilds: t,
						use_verification_code: !0
					},
					trackedActionData: {
						event: r.NetworkActionNames.HUB_EMAIL_VERIFY_SEND,
						properties: e => {
							var t;
							let n = null == e || null == (t = e.body) ? void 0 : t.has_matching_guild;
							return (0, l.iG)({
								has_matching_guild: n
							})
						}
					},
					rejectWithError: !1
				})).body,
				async verify(e) {
					if (null != e) try {
						var t;
						let n = null == (t = (await a.Z.post({
							url: s.ANM.HUB_EMAIL_VERIFY,
							body: {
								token: e
							},
							trackedActionData: {
								event: r.NetworkActionNames.HUB_EMAIL_VERIFY
							},
							rejectWithError: !1
						})).body.guild) ? void 0 : t.id;
						i.Z.dispatch({
							type: "HUB_VERIFY_EMAIL_SUCCESS",
							guildId: n
						})
					} catch (e) {
						i.Z.dispatch({
							type: "HUB_VERIFY_EMAIL_FAILURE",
							errors: e.body
						})
					}
				},
				async verifyCode(e, t, n) {
					if (null != e) try {
						var l;
						let o = await a.Z.post({
								url: s.ANM.HUB_EMAIL_VERIFY_CODE,
								body: {
									code: e,
									guild_id: t,
									email: n
								},
								trackedActionData: {
									event: r.NetworkActionNames.HUB_EMAIL_VERIFY
								},
								rejectWithError: !1
							}),
							c = null == (l = o.body.guild) ? void 0 : l.id;
						return i.Z.dispatch({
							type: "HUB_VERIFY_EMAIL_SUCCESS",
							guildId: c
						}), o.body
					} catch (e) {
						throw i.Z.dispatch({
							type: "HUB_VERIFY_EMAIL_FAILURE",
							errors: e.body
						}), e
					}
				}
			}
		},
		951716: function(e, t, n) {
			n.d(t, {
				Z: () => i
			});
			var r = n(344532),
				l = n(23434);

			function i() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.Z,
					t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Z;
				return null != t.getAction() || Object.keys(e.getState()).length > 0
			}
		},
		645792: function(e, t, n) {
			n.d(t, {
				Z: () => l,
				b: () => i
			});
			let r = (0, n(818083).B)({
					kind: "user",
					id: "2022-08_back_to_school",
					label: "Back to School Event",
					defaultConfig: {
						enabled: !1
					},
					treatments: [{
						id: 1,
						label: "Back to School experience enabled",
						config: {
							enabled: !0
						}
					}]
				}),
				l = r;

			function i() {
				return r.getCurrentConfig({
					location: "68acbb_1"
				}, {
					autoTrackExposure: !1
				}).enabled
			}
		},
		888592: function(e, t, n) {
			n.d(t, {
				fQ: () => i,
				tF: () => l
			});
			var r, l = ((r = {}).STUDENT_PROMPT = "STUDENT_PROMPT", r.VERIFY_EMAIL = "VERIFY_EMAIL", r.VERIFY_PIN = "VERIFY_PIN", r.SELECT_SCHOOL = "SELECT_SCHOOL", r.SELECT_SCHOOL_SEARCH = "SELECT_SCHOOL_SEARCH", r.SUBMIT_SCHOOL = "SUBMIT_SCHOOL", r.EMAIL_CONFIRMATION = "EMAIL_CONFIRMATION", r.EMAIL_WAITLIST = "EMAIL_WAITLIST", r);
			let i = "884924873015689226"
		},
		495784: function(e, t, n) {
			n.d(t, {
				Z: () => g
			});
			var r = n(913527),
				l = n.n(r),
				i = n(704215),
				a = n(951716),
				s = n(266454),
				o = n(605236),
				c = n(972830),
				d = n(430824),
				u = n(594174),
				m = n(374023),
				h = n(709054),
				f = n(645792),
				x = n(981631),
				p = n(921944);
			let g = {
				init(e) {
					let {
						hasModalOpen: t,
						openModal: n
					} = e;
					m.s.isDisallowPopupsSet() || (0, c.h)(() => {
						if ((0, a.Z)()) return;
						let e = u.default.getCurrentUser(),
							r = null != e && 7 > l()().diff(l()(h.default.extractTimestamp(e.id)), "days"),
							c = null != d.Z.getGuildsArray().find(e => e.features.has(x.oNc.HUB)),
							m = !(0, s.zu)(i.z.HUB_BACK_TO_SCHOOL_UPSELL);
						!(r || t() || c || !m) && (0, f.b)() && (f.Z.trackExposure({
							location: "8b792a_1"
						}), n(), (0, o.kk)(i.z.HUB_BACK_TO_SCHOOL_UPSELL))
					})
				},
				hideHubUpsell() {
					(0, s.Q3)(i.z.HUB_BACK_TO_SCHOOL_UPSELL, {
						dismissAction: p.L.AUTO
					})
				}
			}
		},
		994640: function(e, t, n) {
			n.d(t, {
				Z: () => _
			}), n(388685);
			var r = n(255367),
				l = n(73800),
				i = n(120356),
				a = n.n(i),
				s = n(755721),
				o = n(481060),
				c = n(231239),
				d = n(881052),
				u = n(313201),
				m = n(592125),
				h = n(888592),
				f = n(981631),
				x = n(388032),
				p = n(167150);
			let g = (0, u.hQ)(),
				_ = e => {
					let {
						setStep: t,
						setGuildsInfo: n,
						email: i,
						setEmail: u,
						setGuildId: _,
						invite: v,
						onClose: N,
						isNUXFlow: E
					} = e, [S, y] = l.useState(null), [j, I] = l.useState(!1), b = async e => {
						e.preventDefault(), y(null), I(!0);
						try {
							var r, l, a, s, o;
							let e = null != (o = null != (s = null == v || null == (r = v.guild) ? void 0 : r.id) ? s : null == (l = m.Z.getChannel(null == v || null == (a = v.channel) ? void 0 : a.id)) ? void 0 : l.getGuildId()) ? o : void 0;
							e === h.fQ && (e = void 0);
							let d = await c.Z.sendVerificationEmail(i, !0, e),
								u = d.guilds_info;
							d.has_matching_guild ? (_(e), t(h.tF.VERIFY_PIN)) : 0 === u.length ? t(h.tF.SUBMIT_SCHOOL) : 1 === u.length ? (_(u[0].id), await c.Z.sendVerificationEmail(i, !0, u[0].id), t(h.tF.VERIFY_PIN)) : (n(u), t(h.tF.SELECT_SCHOOL))
						} catch (e) {
							y(new d.Hx(e))
						} finally {
							I(!1)
						}
					}, O = x.intl.string(x.t.H1jCHB), C = x.intl.string(x.t.YfeHRE);
					if (E) O = x.intl.string(x.t.LVyxND), C = x.intl.string(x.t.ECd7Rk);
					else if ((null == v ? void 0 : v.guild) != null && v.guild.id !== h.fQ && (null == v ? void 0 : v.approximate_member_count) != null) {
						let {
							name: e
						} = v.guild;
						O = x.intl.formatToPlainString(x.t["4T4+p6"], {
							guildName: e,
							count: v.approximate_member_count
						})
					}
					return (0, r.jsxs)("div", {
						className: p.container,
						children: [(0, r.jsx)("div", {
							className: p.topImage
						}), (0, r.jsx)(o.X6q, {
							className: a()(p.centerText, p.header),
							variant: "heading-xl/semibold",
							children: O
						}), (0, r.jsx)("div", {
							className: p.descriptionWidth,
							children: (0, r.jsx)(o.Text, {
								className: p.centerText,
								variant: "text-sm/normal",
								color: "header-secondary",
								children: C
							})
						}), (0, r.jsxs)("form", {
							className: p.formContent,
							onSubmit: b,
							children: [(0, r.jsxs)(o.xJW, {
								children: [(0, r.jsx)(o.vwX, {
									id: g,
									children: x.intl.string(x.t.kmCxkZ)
								}), (0, r.jsx)(o.oil, {
									placeholder: x.intl.string(x.t.ImAOh4),
									onChange: e => {
										u(e)
									},
									error: null == S ? void 0 : S.getAnyErrorMessage(),
									"aria-labelledby": g
								})]
							}), (0, r.jsx)(o.Text, {
								color: "header-secondary",
								className: p.formDescription,
								variant: "text-sm/normal",
								children: x.intl.string(x.t.Cv7mmJ)
							}), (0, r.jsx)(s.zx, {
								type: "submit",
								size: s.zx.Sizes.LARGE,
								color: s.zx.Colors.BRAND,
								className: p.submitButton,
								submitting: j,
								children: x.intl.string(x.t["8vmKOz"])
							}), (0, r.jsx)(o.Text, {
								className: p.termsPhrase,
								color: "header-secondary",
								variant: "text-xs/normal",
								children: x.intl.format(x.t.RPT0vr, {
									termsURL: f.EYA.TERMS,
									privacyURL: f.EYA.PRIVACY
								})
							}), E && (0, r.jsx)(s.zx, {
								look: s.zx.Looks.LINK,
								onClick: N,
								className: p.cancelButton,
								children: x.intl.string(x.t.hO6qJy)
							})]
						})]
					})
				}
		},
		950012: function(e, t, n) {
			n.d(t, {
				Z: () => u
			}), n(388685);
			var r = n(255367),
				l = n(73800),
				i = n(994640),
				a = n(247007),
				s = n(999464),
				o = n(503406),
				c = n(463115),
				d = n(888592);
			let u = e => {
				let {
					onClose: t,
					invite: n,
					forceGuildScrollHeight: u = !0,
					isNUXFlow: m
				} = e, [h, f] = l.useState([d.tF.VERIFY_EMAIL]), [x, p] = l.useState(""), [g, _] = l.useState(""), [v, N] = l.useState(void 0), [E, S] = l.useState([]), y = e => {
					f(h.concat(e).slice(-4))
				};
				switch (h[h.length - 1]) {
					case d.tF.VERIFY_EMAIL:
						return (0, r.jsx)(i.Z, {
							setGuildsInfo: S,
							setStep: y,
							email: x,
							setEmail: p,
							setGuildId: N,
							invite: n,
							onClose: t,
							isNUXFlow: m
						});
					case d.tF.SELECT_SCHOOL:
						return (0, r.jsx)(a.Z, {
							guildsInfo: E,
							setStep: y,
							email: x,
							setGuildId: N,
							forceGuildScrollHeight: u
						});
					case d.tF.SUBMIT_SCHOOL:
						return (0, r.jsx)(s.Z, {
							onBack: () => {
								h.length > 1 && f(h.slice(0, -1).slice(-4))
							},
							setStep: y,
							email: x,
							school: g,
							setSchool: _
						});
					case d.tF.VERIFY_PIN:
						return (0, r.jsx)(o.Z, {
							email: x,
							onClose: t,
							guildId: v
						});
					case d.tF.EMAIL_WAITLIST:
						return (0, r.jsx)(c.Z, {
							setStep: y,
							school: g
						});
					default:
						return null
				}
			}
		},
		247007: function(e, t, n) {
			n.d(t, {
				Z: () => E
			}), n(388685), n(953529);
			var r = n(255367),
				l = n(73800),
				i = n(120356),
				a = n.n(i),
				s = n(658722),
				o = n.n(s),
				c = n(481060),
				d = n(231239),
				u = n(881052),
				m = n(686546),
				h = n(565138),
				f = n(768581),
				x = n(411198),
				p = n(888592),
				g = n(388032),
				_ = n(593673),
				v = n(216019);

			function N(e) {
				var t, n, l;
				let {
					guildInfo: i,
					onClick: a,
					submitting: s
				} = e, o = null != (t = f.ZP.getGuildIconURL({
					id: i.id,
					icon: i.icon,
					size: 40
				})) ? t : void 0;
				return (0, r.jsxs)(c.P3F, {
					className: _.clickableGuildInfoRow,
					onClick: a,
					children: [(0, r.jsx)(m.ZP, {
						mask: m.ZP.Masks.AVATAR_DEFAULT,
						width: 40,
						height: 40,
						children: (0, r.jsx)(h.Z, {
							className: _.guildIcon,
							iconSrc: o,
							guild: (0, x.yS)((n = function(e) {
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
							}({}, i), l = l = {
								features: []
							}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
								var n = Object.keys(e);
								if (Object.getOwnPropertySymbols) {
									var r = Object.getOwnPropertySymbols(e);
									n.push.apply(n, r)
								}
								return n
							})(Object(l)).forEach(function(e) {
								Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
							}), n)),
							size: h.Z.Sizes.MEDIUM
						})
					}), (0, r.jsx)(c.Text, {
						className: _.guildName,
						variant: "text-md/semibold",
						children: i.name
					}), s ? (0, r.jsx)(c.$jN, {
						type: c.$jN.Type.PULSING_ELLIPSIS
					}) : (0, r.jsx)("img", {
						className: _.__invalid_arrow,
						alt: "",
						src: v
					})]
				})
			}
			let E = e => {
				let {
					setStep: t,
					email: n,
					guildsInfo: i,
					setGuildId: s,
					forceGuildScrollHeight: m
				} = e, [h, f] = l.useState(null), [x, v] = l.useState(void 0), [E, S] = l.useState(null), y = e => async () => {
					f(null), s(e), S(e);
					try {
						await d.Z.sendVerificationEmail(n, !0, e), t(p.tF.VERIFY_PIN)
					} catch (e) {
						f(new u.Hx(e))
					} finally {
						S(null)
					}
				}, j = () => t(p.tF.SUBMIT_SCHOOL), I = i;
				return null != x && "" !== x && (I = i.filter(e => o()(x.toLowerCase(), e.name.toLowerCase()))), (0, r.jsxs)("div", {
					className: _.container,
					children: [(0, r.jsx)(c.X6q, {
						className: a()(_.centerText, _.header),
						variant: "heading-xl/semibold",
						children: g.intl.string(g.t.mOMeiY)
					}), (0, r.jsx)("div", {
						className: _.description,
						children: (0, r.jsx)(c.Text, {
							className: _.centerText,
							variant: "text-sm/normal",
							color: "header-secondary",
							children: g.intl.format(g.t.dZeiTE, {
								onJoinWaitlist: j
							})
						})
					}), (0, r.jsxs)("div", {
						className: a()(_.guildList, {
							[_.forcedHeight]: m
						}),
						children: [(0, r.jsxs)("div", {
							className: _.searchContainer,
							children: [(0, r.jsx)(c.Rj2, {
								placeholder: g.intl.string(g.t["5h0QOD"]),
								className: _.searchBox,
								inputClassName: _.searchBoxInput,
								searchIconClassName: _.searchBoxIcon,
								closeIconClassName: _.searchBoxIcon,
								onChange: e => {
									v(e)
								},
								label: g.intl.string(g.t["5h0QOD"]),
								searchTerm: x,
								onClear: () => {
									v(void 0)
								}
							}), (0, r.jsx)(c.Text, {
								color: "text-danger",
								variant: "text-xs/normal",
								children: null == h ? void 0 : h.getAnyErrorMessage()
							})]
						}), I.length > 0 ? (0, r.jsx)(c.zJl, {
							className: _.scroller,
							children: I.map(e => void 0 === e ? null : (0, r.jsx)(N, {
								guildInfo: e,
								onClick: y(e.id),
								submitting: E === e.id
							}, e.id))
						}) : (0, r.jsx)("div", {
							className: _.noResultsContainer,
							children: (0, r.jsxs)("div", {
								className: _.noResultsContent,
								children: [(0, r.jsx)("div", {
									className: _.noResultsImage
								}), (0, r.jsx)(c.X6q, {
									className: a()(_.centerText, _.header),
									variant: "heading-xl/semibold",
									children: g.intl.string(g.t["1eUrDQ"])
								}), (0, r.jsx)(c.Text, {
									className: _.centerText,
									variant: "text-md/normal",
									children: g.intl.format(g.t.flgDKC, {
										onJoinWaitlist: j
									})
								})]
							})
						})]
					})]
				})
			}
		},
		650233: function(e, t, n) {
			n.d(t, {
				H: () => x,
				default: () => f
			});
			var r = n(255367),
				l = n(73800),
				i = n(990547),
				a = n(481060),
				s = n(390885),
				o = n(495784),
				c = n(950012),
				d = n(161836),
				u = n(630724),
				m = n(388032),
				h = n(778360);

			function f(e) {
				let {
					transitionState: t,
					onClose: n,
					isNUXFlow: f
				} = e;
				return l.useEffect(() => {
					o.Z.hideHubUpsell(), f && s.Z.flowStep(u.MK.ORGANIC, u.EW.HUB_CONNECTION)
				}, [f]), (0, r.jsx)(a.Y0X, {
					className: h.modalRoot,
					transitionState: t,
					"aria-label": m.intl.string(m.t["3khS8P"]),
					impression: {
						impressionName: i.ImpressionNames.HUB_EMAIL_SIGNUP
					},
					parentComponent: "HubEmailConnectionModal",
					children: (0, r.jsx)(a.hzk, {
						style: {
							overflow: "hidden",
							paddingRight: "0px"
						},
						paddingFix: !1,
						className: h.modalContent,
						children: (0, r.jsxs)("div", {
							className: h.container,
							children: [(0, r.jsx)("div", {
								className: h.sidebarContainer,
								children: (0, r.jsx)(d.Z, {})
							}), (0, r.jsxs)("div", {
								className: h.contentContainer,
								children: [(0, r.jsx)(a.olH, {
									onClick: n,
									className: h.closeButton
								}), (0, r.jsx)(c.Z, {
									isNUXFlow: f,
									onClose: n
								})]
							})]
						})
					})
				})
			}
			let x = e => {
				let {
					invite: t
				} = e;
				return (0, r.jsxs)("div", {
					className: h.container,
					children: [(0, r.jsx)("div", {
						className: h.sidebarContainer,
						children: (0, r.jsx)(d.Z, {})
					}), (0, r.jsx)("div", {
						className: h.contentContainer,
						children: (0, r.jsx)(c.Z, {
							invite: t
						})
					})]
				})
			}
		},
		161836: function(e, t, n) {
			n.d(t, {
				Z: () => s
			}), n(953529);
			var r = n(255367);
			n(73800);
			var l = n(481060),
				i = n(388032),
				a = n(248999);
			let s = () => (0, r.jsxs)("div", {
				className: a.container,
				children: [(0, r.jsx)("div", {
					className: a.iconContainer,
					children: (0, r.jsx)("div", {
						className: a.icon
					})
				}), (0, r.jsx)(l.Text, {
					color: "header-primary",
					variant: "text-lg/semibold",
					className: a.header,
					children: i.intl.string(i.t.PAnzbW)
				}), (0, r.jsx)(l.Text, {
					color: "header-secondary",
					variant: "text-sm/normal",
					className: a.description,
					children: i.intl.format(i.t["8Kp48/"], {})
				})]
			})
		},
		999464: function(e, t, n) {
			n.d(t, {
				Z: () => g
			}), n(388685);
			var r = n(255367),
				l = n(73800),
				i = n(120356),
				a = n.n(i),
				s = n(755721),
				o = n(481060),
				c = n(231239),
				d = n(881052),
				u = n(313201),
				m = n(888592),
				h = n(981631),
				f = n(388032),
				x = n(257356);
			let p = (0, u.hQ)(),
				g = e => {
					let {
						email: t,
						setStep: n,
						onBack: i,
						school: u,
						setSchool: g
					} = e, [_, v] = l.useState(null), [N, E] = l.useState(!1), S = async () => {
						v(null), E(!0);
						try {
							await c.Z.signup(t, u), n(m.tF.EMAIL_WAITLIST)
						} catch (e) {
							v(new d.Hx(e))
						} finally {
							E(!1)
						}
					}, y = async e => {
						null != u && "" !== u && e.charCode === h.yXg.ENTER && await S()
					};
					return (0, r.jsxs)("div", {
						className: x.container,
						children: [(0, r.jsx)("div", {
							className: x.__invalid_topImage
						}), (0, r.jsx)(o.X6q, {
							className: a()(x.centerText, x.header),
							variant: "heading-xl/semibold",
							children: f.intl.string(f.t["2FNWBA"])
						}), (0, r.jsx)("div", {
							className: x.descriptionWidth,
							children: (0, r.jsx)(o.Text, {
								className: x.centerText,
								variant: "text-sm/normal",
								color: "header-secondary",
								children: f.intl.string(f.t["/4y6o6"])
							})
						}), (0, r.jsxs)(o.xJW, {
							className: x.formItem,
							children: [(0, r.jsx)(o.vwX, {
								id: p,
								children: f.intl.string(f.t["L+AfJi"])
							}), (0, r.jsx)(o.oil, {
								onKeyPress: y,
								placeholder: f.intl.string(f.t.Y1btJS),
								onChange: e => {
									g(e)
								},
								error: null == _ ? void 0 : _.getAnyErrorMessage(),
								"aria-labelledby": p
							})]
						}), (0, r.jsxs)("div", {
							className: x.footer,
							children: [(0, r.jsx)(s.zx, {
								className: x.backButton,
								onClick: i,
								look: s.zx.Looks.LINK,
								size: s.zx.Sizes.NONE,
								color: s.zx.Colors.PRIMARY,
								children: f.intl.string(f.t["13/7kZ"])
							}), (0, r.jsx)("div", {
								"data-button-hoisted-classname-wrapper": !0,
								className: x.__invalid_submitButton,
								children: (0, r.jsx)(o.zxk, {
									variant: "primary",
									text: f.intl.string(f.t.PDsYAg),
									onClick: S,
									loading: N
								})
							})]
						})]
					})
				}
		},
		503406: function(e, t, n) {
			n.d(t, {
				Z: () => v
			}), n(388685);
			var r = n(255367),
				l = n(73800),
				i = n(120356),
				a = n.n(i),
				s = n(392711),
				o = n.n(s),
				c = n(755721),
				d = n(481060),
				u = n(231239),
				m = n(881052),
				h = n(313201),
				f = n(703656),
				x = n(981631),
				p = n(388032),
				g = n(768680);
			let _ = (0, h.hQ)(),
				v = e => {
					let {
						email: t,
						guildId: n,
						onClose: i
					} = e, [s, h] = l.useState(""), [v, N] = l.useState(null), E = l.useCallback(async () => {
						if (null != n) try {
							let e = await u.Z.verifyCode(s, n, t);
							e.guild && (null == i || i(), (0, f.uL)(x.Z5c.CHANNEL(e.guild.id)))
						} catch (e) {
							N(new m.Hx(e))
						}
					}, [s, t, n, i]), S = o().throttle(() => {
						u.Z.sendVerificationEmail(t, !0, n)
					}, 1e3), y = async e => {
						null != s && "" !== s && e.charCode === x.yXg.ENTER && await E()
					};
					return (0, r.jsxs)("div", {
						className: g.container,
						children: [(0, r.jsx)("div", {
							className: g.topImage
						}), (0, r.jsx)(d.X6q, {
							className: a()(g.centerText, g.header),
							variant: "heading-xl/semibold",
							children: p.intl.string(p.t.SJ3Lxc)
						}), (0, r.jsx)("div", {
							className: g.descriptionWidth,
							children: (0, r.jsx)(d.Text, {
								className: g.centerText,
								variant: "text-sm/normal",
								color: "header-secondary",
								children: p.intl.format(p.t["b+W0oq"], {
									email: t,
									onClick: S
								})
							})
						}), (0, r.jsxs)(d.xJW, {
							className: g.formItem,
							children: [(0, r.jsx)(d.vwX, {
								id: _,
								children: p.intl.string(p.t.rpWT1t)
							}), (0, r.jsx)(d.oil, {
								onKeyPress: y,
								onChange: e => {
									null != e && "" !== e && h(e)
								},
								error: null == v ? void 0 : v.getAnyErrorMessage(),
								"aria-labelledby": _
							})]
						}), (0, r.jsx)(c.zx, {
							fullWidth: !0,
							onClick: E,
							size: c.zx.Sizes.LARGE,
							color: c.zx.Colors.BRAND,
							children: (0, r.jsx)(d.Text, {
								className: g.submitText,
								variant: "text-sm/normal",
								children: p.intl.string(p.t.geKm7u)
							})
						})]
					})
				}
		},
		463115: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var r = n(255367);
			n(73800);
			var l = n(120356),
				i = n.n(l),
				a = n(481060),
				s = n(888592),
				o = n(388032),
				c = n(167150);
			let d = e => {
				let {
					school: t,
					setStep: n
				} = e;
				return (0, r.jsxs)("div", {
					className: c.container,
					children: [(0, r.jsx)("div", {
						className: c.topImage
					}), (0, r.jsx)(a.X6q, {
						className: i()(c.centerText, c.header),
						variant: "heading-xl/semibold",
						children: o.intl.string(o.t.OaloU1)
					}), (0, r.jsx)("div", {
						className: c.descriptionWidth,
						children: (0, r.jsx)(a.Text, {
							className: c.centerText,
							variant: "text-sm/normal",
							color: "header-secondary",
							children: o.intl.format(o.t.Rs7MXF, {
								school: t
							})
						})
					}), (0, r.jsx)("div", {
						"data-button-hoisted-classname-wrapper": !0,
						className: c.__invalid_resendLink,
						children: (0, r.jsx)(a.Avr, {
							variant: "primary",
							size: "sm",
							text: o.intl.string(o.t.Zg63h4),
							onClick: () => {
								n(s.tF.VERIFY_EMAIL)
							}
						})
					})]
				})
			}
		},
		630724: function(e, t, n) {
			n.d(t, {
				EW: () => m,
				FF: () => c,
				MK: () => o,
				X2: () => u,
				mx: () => d
			});
			var r, l, i, a, s, o = ((r = {}).UNKNOWN = "unknown", r.ANY = "any", r.INVITE = "invite", r.ORGANIC = "organic_registration", r.ORGANIC_MARKETING = "organic_marketing", r.ORGANIC_GUILD_TEMPLATES = "organic_guild_template", r.CREATE_GUILD = "create_guild", r),
				c = ((l = {}).AGE_GATE = "age_gate", l.AGE_GATE_UNDERAGE = "age_gate_underage", l),
				d = ((i = {}).CLAIM_ACCOUNT = "claim_account", i.CLAIM_ACCOUNT_SUCCESS = "claim_account_success", i),
				u = ((a = {}).GUILD_TEMPLATES = "guild_templates", a.GUILD_CREATE = "guild_create", a.CREATION_INTENT = "creation_intent", a.CHANNEL_PROMPT = "channel_prompt", a.JOIN_GUILD = "join_guild", a.SUCCESS = "create_success", a),
				m = ((s = {}).NUF_STARTED = "nuf_started", s.AGE_GATE = "age_gate", s.NUF_COMPLETE = "nuf_complete", s.HUB_CONNECTION = "hub_connection", s)
		},
		390885: function(e, t, n) {
			n.d(t, {
				Z: () => y
			});
			var r = n(97519),
				l = n(296574),
				i = n(731965),
				a = n(433517),
				s = n(710845),
				o = n(626135),
				c = n(630724),
				d = n(981631);

			function u(e) {
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

			function m(e, t) {
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

			function h(e, t) {
				if (null == e) return {};
				var n, r, l = function(e, t) {
					if (null == e) return {};
					var n, r, l = {},
						i = Object.keys(e);
					for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
					return l
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
				}
				return l
			}

			function f(e) {
				var t = function(e, t) {
					if ("object" !== x(e) || null === e) return e;
					var n = e[Symbol.toPrimitive];
					if (void 0 !== n) {
						var r = n.call(e, t || "default");
						if ("object" !== x(r)) return r;
						throw TypeError("@@toPrimitive must return a primitive value.")
					}
					return ("string" === t ? String : Number)(e)
				}(e, "string");
				return "symbol" === x(t) ? t : String(t)
			}

			function x(e) {
				return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
			}
			let p = "UserFlowAnalyticsStore_current",
				g = "UserFlowAnalyticsStore";

			function _(e) {
				if (e === c.MK.UNKNOWN) return null;
				let t = a.K.get("".concat(g, "-").concat(e));
				if (null == t) return null;
				let {
					version: n
				} = t, r = h(t, ["version"]);
				return 1 !== n ? null : r
			}
			new s.Z("UserFlowAnalytics");
			let v = (0, r.U)()((0, l.XR)((e, t) => ({
				flows: {},
				currentFlow: null,
				activeFlow: () => {
					var e;
					let n = null != (e = t().currentFlow) ? e : a.K.get(p);
					if (null == n) return null;
					let {
						[n]: r
					} = t().flows, l = null != r ? r : _(n);
					return (null == l ? void 0 : l.currentStep) != null ? n : null
				}
			})));

			function N(e, t) {
				let n = v.getState().flows,
					{
						[e]: r
					} = n,
					l = h(n, [e].map(f)),
					a = null != r ? r : _(e);
				((null == a ? void 0 : a.currentStep) == null || a.currentStep !== t) && (0, i.j)(() => {
					v.setState({
						flows: m(u({}, l), {
							[e]: {
								type: e,
								lastStep: null,
								lastTimestamp: null,
								currentStep: t,
								currentTimestamp: new Date,
								skipped: !1
							}
						}),
						currentFlow: e
					})
				})
			}

			function E(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					r = e;
				if (e === c.MK.ANY) {
					var l;
					r = null != (l = v.getState().activeFlow()) ? l : c.MK.UNKNOWN
				}
				let a = v.getState().flows,
					{
						[r]: s
					} = a,
					o = h(a, [r].map(f)),
					d = null != s ? s : _(r);
				null != d && null != d.currentStep && d.currentStep !== t && (0, i.j)(() => {
					v.setState({
						flows: m(u({}, o), {
							[r]: m(u({}, d), {
								lastStep: d.currentStep,
								lastTimestamp: d.currentTimestamp,
								currentStep: t,
								currentTimestamp: new Date,
								ended: n
							})
						}),
						currentFlow: r
					})
				})
			}

			function S() {
				return null != v.getState().activeFlow()
			}
			v.subscribe(e => null != e.currentFlow ? e.flows[e.currentFlow] : void 0, e => {
				var t;
				if (null != e && (! function(e) {
						if (e.type === c.MK.UNKNOWN) return;
						let t = "".concat(g, "-").concat(e.type);
						e.ended ? (a.K.remove(t), a.K.remove(p)) : (a.K.set("".concat(g, "-").concat(e.type), m(u({}, e), {
							version: 1
						})), a.K.set(p, e.type))
					}(e), o.default.track(d.rMx.NUO_TRANSITION, {
						flow_type: e.type,
						from_step: e.lastStep,
						to_step: e.currentStep,
						seconds_on_from_step: "function" != typeof(null == (t = e.lastTimestamp) ? void 0 : t.getTime) ? 0 : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1e3
					}, {
						flush: !0
					}), e.ended)) {
					let t = u({}, v.getState().flows);
					delete t[e.type], (0, i.j)(() => {
						v.setState({
							flows: t,
							currentFlow: null
						})
					})
				}
			});
			let y = {
				flowStart: N,
				flowStepOrStart: function(e, t) {
					S() ? E(e, t) : N(e, t)
				},
				flowStep: E,
				hasActiveFlow: S
			}
		}
	}
]);
//# sourceMappingURL=907aa35f115c2dcc.js.map