"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["1268"], {
		138182: function(e, t, r) {
			r.d(t, {
				a: () => a
			});
			var n = r(818083),
				i = r(772209);
			let l = (0, n.B)({
					kind: "user",
					id: "2025-02_voice_activity_status_mobile",
					label: "Voice Activity Status (Mobile)",
					defaultConfig: {
						voiceActivityStatusEnabled: !1
					},
					treatments: [{
						id: 1,
						label: "Voice Activity Status Enabled",
						config: {
							voiceActivityStatusEnabled: !0
						}
					}]
				}),
				a = e => {
					let {
						location: t,
						autoTrackExposure: r = !0
					} = e, n = (0, i.q)({
						location: t,
						autoTrackExposure: r
					});
					return l.useExperiment({
						location: t
					}, {
						autoTrackExposure: r,
						disable: n
					})
				}
		},
		246016: function(e, t, r) {
			r.d(t, {
				Y: () => c
			});
			var n = r(73800),
				i = r(442837),
				l = r(699516),
				a = r(594174),
				s = r(320582);
			let o = [];

			function c(e) {
				let {
					userId: t
				} = e, r = (0, i.e7)([l.Z, a.default], () => {
					var e;
					return l.Z.isFriend(t) || (null == (e = a.default.getUser(t)) ? void 0 : e.isProvisional)
				}), c = (0, s.ML)(t);
				return n.useMemo(() => r ? o : c.map(e => {
					let {
						applicationId: t
					} = e;
					return t
				}), [c, r])
			}
		},
		138201: function(e, t, r) {
			r.d(t, {
				ZP: () => d,
				rT: () => u
			}), r(953529);
			var n = r(255367);
			r(73800);
			var i = r(120356),
				l = r.n(i),
				a = r(755721),
				s = r(481060),
				o = r(754363);

			function c(e) {
				let {
					title: t
				} = e;
				return (0, n.jsx)(s.Text, {
					variant: "text-sm/semibold",
					color: "header-secondary",
					children: t
				})
			}

			function u(e) {
				let {
					children: t,
					title: r,
					description: i,
					accessibilityRole: l = "none",
					accessibilityLabel: a
				} = e;
				return (0, n.jsxs)("div", {
					className: o.tableRowGroup,
					children: [null != r && (0, n.jsx)(c, {
						title: r
					}), null != i && (0, n.jsx)(s.Text, {
						variant: "text-sm/normal",
						color: "text-secondary",
						children: i
					}), (0, n.jsx)("div", {
						className: o.content,
						role: l,
						"aria-label": a,
						children: t
					})]
				})
			}

			function d(e) {
				let {
					icon: t,
					title: r,
					titleVariant: i = "text-md/semibold",
					description: c,
					descriptionVariant: u = "text-xs/medium",
					iconClassName: d,
					color: m,
					buttonText: b,
					buttonColor: p = a.zx.Colors.PRIMARY,
					buttonSize: f = a.zx.Sizes.SMALL,
					buttonLook: j = a.zx.Looks.FILLED,
					buttonDisabled: x,
					buttonIcon: v,
					buttonIconColor: O,
					buttonLoading: h,
					onButtonPress: y,
					listType: g = "icon",
					index: P
				} = e, w = null != b ? (0, n.jsx)(a.zx, {
					className: o.button,
					size: f,
					color: p,
					look: j,
					disabled: x,
					"aria-label": b,
					onClick: y,
					submitting: h,
					children: (0, n.jsxs)("div", {
						className: o.buttonContainer,
						children: [b, null != v && (0, n.jsx)(v, {
							color: null != O ? O : "currentColor",
							className: o.buttonIcon
						})]
					})
				}) : void 0;
				return (0, n.jsxs)("div", {
					className: o.row,
					children: ["numbered" === g && null != P ? (0, n.jsx)(s.X6q, {
						variant: "heading-md/semibold",
						color: "text-brand",
						className: o.number,
						children: P + 1
					}) : null != t && (0, n.jsx)("div", {
						className: o.iconContainer,
						children: (0, n.jsx)(t, {
							color: null != m ? m : "currentColor",
							className: l()(o.icon, d)
						})
					}), (0, n.jsxs)("div", {
						className: o.textContainer,
						children: [(0, n.jsx)(s.Text, {
							variant: i,
							color: "header-primary",
							children: r
						}), null != c && (0, n.jsx)(s.Text, {
							variant: u,
							color: "text-secondary",
							children: c
						})]
					}), null != w && w]
				})
			}
		},
		857302: function(e, t, r) {
			r.d(t, {
				Z: () => l
			});
			var n = r(232567),
				i = r(621853);

			function l(e, t) {
				if (i.Z.isFetchingFriends(e)) return;
				let r = i.Z.getMutualFriendsCount(e);
				if (0 === r) return;
				let l = i.Z.getMutualFriends(e);
				if (null == r || null == l || l.length !== r) return (0, n.Sr)(e, t)
			}
		},
		78806: function(e, t, r) {
			r.d(t, {
				Z: () => o
			});
			var n = r(255367);
			r(73800);
			var i = r(481060),
				l = r(835473),
				a = r(833062),
				s = r(388032);

			function o(e) {
				let {
					applicationIds: t
				} = e, r = (0, l.Z)(t).filter(e => null != e);
				if (0 === r.length) return null;
				let o = null;
				if (1 === r.length) o = s.intl.format(s.t.wQ6ur6, {
					applicationName: () => (0, n.jsx)(a.Z, {
						application: r[0]
					}, r[0].id)
				});
				else if (2 === r.length) o = s.intl.format(s.t.C98CSE, {
					applicationName: () => (0, n.jsx)(a.Z, {
						application: r[0]
					}, r[0].id),
					applicationName2: () => (0, n.jsx)(a.Z, {
						application: r[1]
					}, r[1].id)
				});
				else {
					let e = r[r.length - 1],
						t = r.slice(0, -1);
					o = s.intl.format(s.t.UxpwAg, {
						applications: () => t.map(e => (0, n.jsx)(a.Z, {
							application: e,
							useComma: !0
						}, e.id)),
						applicationNameLast: () => (0, n.jsx)(a.Z, {
							application: e
						}, e.id)
					})
				}
				return (0, n.jsx)(i.Text, {
					variant: "text-sm/normal",
					children: o
				})
			}
		},
		900927: function(e, t, r) {
			r.d(t, {
				Z: () => j
			});
			var n = r(255367);
			r(73800);
			var i = r(399606),
				l = r(481060),
				a = r(275759),
				s = r(565138),
				o = r(706454),
				c = r(271383),
				u = r(430824),
				d = r(709054),
				m = r(388032),
				b = r(209643);

			function p(e) {
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

			function f(e, t) {
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

			function j(e) {
				let {
					userId: t,
					guildId: r,
					textClassName: j,
					tooltipDelay: x
				} = e, v = (0, i.e7)([o.default], () => o.default.locale), O = (0, i.e7)([u.Z], () => null != r ? u.Z.getGuild(r) : null), h = (0, i.e7)([c.ZP], () => null != r ? c.ZP.getMember(r, t) : null), y = (0, a.FI)(d.default.extractTimestamp(t), v), g = (0, a.FI)(null == h ? void 0 : h.joinedAt, v);
				return null == O || null == h ? (0, n.jsx)(l.Text, {
					variant: "text-sm/normal",
					className: j,
					children: y
				}) : (0, n.jsxs)("div", {
					className: b.memberSinceWrapper,
					children: [(0, n.jsxs)("div", {
						className: b.memberSince,
						children: [(0, n.jsx)(l.ua7, {
							text: m.intl.string(m.t.uvGmCw),
							delay: x,
							children: e => (0, n.jsx)(l.gw7, f(p({
								size: "custom",
								width: 28,
								height: 28,
								color: "currentColor"
							}, e), {
								className: b.discordIcon
							}))
						}), (0, n.jsx)(l.Text, {
							variant: "text-sm/normal",
							className: j,
							children: y
						})]
					}), (0, n.jsx)("div", {
						className: b.divider
					}), (0, n.jsxs)("div", {
						className: b.memberSince,
						children: [(0, n.jsx)(l.ua7, {
							text: O.name,
							delay: x,
							children: e => (0, n.jsx)(s.Z, f(p({}, e), {
								guild: O,
								size: s.Z.Sizes.SMOL,
								className: b.guildIcon
							}))
						}), (0, n.jsx)(l.Text, {
							variant: "text-sm/normal",
							className: j,
							children: g
						})]
					})]
				})
			}
		},
		252417: function(e, t, r) {
			r.d(t, {
				Z: () => y
			});
			var n = r(255367),
				i = r(73800),
				l = r(442837),
				a = r(481060),
				s = r(239091),
				o = r(129861),
				c = r(138182),
				u = r(956221),
				d = r(747017),
				m = r(140701),
				b = r(545957),
				p = r(158776),
				f = r(652853),
				j = r(228168),
				x = r(981631),
				v = r(968823);
			let O = a.EFr.SIZE_40,
				h = (0, a.pxk)(O);

			function y(e) {
				let {
					user: t,
					status: y,
					guildId: g,
					channelId: P,
					onSelect: w
				} = e, {
					theme: N,
					themeType: Z
				} = (0, f.z)(), S = i.useMemo(() => t.isNonUserBot() || (0, m.W)(t, P), [t, P]), {
					activities: C,
					isMobileOnline: k
				} = (0, l.cj)([p.Z], () => ({
					activities: p.Z.getActivities(t.id),
					isMobileOnline: p.Z.isMobileOnline(t.id)
				})), E = (0, b.Z)(t.id), {
					voiceActivityStatusEnabled: M
				} = (0, c.a)({
					location: "UserProfileMutualFriendRow"
				}), {
					voiceChannel: I
				} = (0, u.Z)({
					userId: M ? t.id : void 0,
					guildId: g
				});
				return (0, n.jsxs)(a.P3F, {
					focusProps: Z === j.lY.MODAL_V2 ? {
						offset: {
							top: 4,
							right: 4,
							left: 4
						}
					} : {
						offset: {
							right: 8
						}
					},
					className: v.row,
					onClick: w,
					onContextMenu: e => {
						(0, s.jW)(e, async () => {
							let {
								default: e
							} = await Promise.all([r.e("79695"), r.e("69220"), r.e("70686")]).then(r.bind(r, 881351));
							return r => {
								var i, l;
								return (0, n.jsx)(e, (i = function(e) {
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
								}({}, r), l = l = {
									user: t
								}, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
									var r = Object.keys(e);
									if (Object.getOwnPropertySymbols) {
										var n = Object.getOwnPropertySymbols(e);
										r.push.apply(r, n)
									}
									return r
								})(Object(l)).forEach(function(e) {
									Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
								}), i))
							}
						})
					},
					children: [(0, n.jsx)(a.qEK, {
						src: t.getAvatarURL(g, h),
						"aria-label": t.username,
						size: O,
						status: S ? x.Skl.UNKNOWN : y,
						statusBackdropColor: S ? void 0 : (0, a.QFD)(N),
						isMobile: k,
						className: v.avatar
					}), (0, n.jsxs)("div", {
						className: v.details,
						children: [(0, n.jsx)(o.Z, {
							user: t,
							className: v.tag,
							discriminatorClass: v.discriminator
						}), (0, n.jsx)(d.Z, {
							user: t,
							activities: C,
							applicationStream: E,
							voiceChannel: I
						})]
					})]
				})
			}
		},
		821179: function(e, t, r) {
			r.d(t, {
				Z: () => j
			});
			var n = r(255367);
			r(73800);
			var i = r(780384),
				l = r(481060),
				a = r(239091),
				s = r(44315),
				o = r(111028),
				c = r(565138),
				u = r(5192),
				d = r(652853),
				m = r(228168),
				b = r(981631),
				p = r(69647);
			let f = (0, l.pxk)(l.EFr.SIZE_16);

			function j(e) {
				let {
					user: t,
					guild: j,
					nick: x,
					onSelect: v
				} = e, {
					theme: O,
					themeType: h
				} = (0, d.z)(), y = t.hasAvatarForGuild(j.id);
				return (0, n.jsxs)(l.P3F, {
					focusProps: h === m.lY.MODAL_V2 ? {
						offset: {
							top: 4,
							right: 4,
							left: 4
						}
					} : {
						offset: {
							right: 8
						}
					},
					className: p.row,
					onClick: v,
					onContextMenu: e => {
						(0, a.jW)(e, async () => {
							let {
								default: e
							} = await Promise.all([r.e("49645"), r.e("44947"), r.e("25292"), r.e("22878"), r.e("31978"), r.e("74891"), r.e("85372"), r.e("6380"), r.e("90508"), r.e("8739"), r.e("7839"), r.e("28467"), r.e("86282"), r.e("38626"), r.e("30243"), r.e("37447"), r.e("53937"), r.e("44421"), r.e("23491"), r.e("62059"), r.e("94136"), r.e("40694"), r.e("36006"), r.e("70205"), r.e("71418"), r.e("55616"), r.e("7654"), r.e("44156"), r.e("41343"), r.e("49049"), r.e("7104"), r.e("6850"), r.e("58227"), r.e("27063"), r.e("54408"), r.e("20087"), r.e("46189"), r.e("93375"), r.e("64679"), r.e("91398"), r.e("80393"), r.e("56534"), r.e("87154"), r.e("33213"), r.e("61840")]).then(r.bind(r, 545135));
							return t => {
								var r, i;
								return (0, n.jsx)(e, (r = function(e) {
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
								}({}, t), i = i = {
									guild: j
								}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
									var r = Object.keys(e);
									if (Object.getOwnPropertySymbols) {
										var n = Object.getOwnPropertySymbols(e);
										r.push.apply(r, n)
									}
									return r
								})(Object(i)).forEach(function(e) {
									Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
								}), r))
							}
						})
					},
					children: [(0, n.jsx)(c.Z, {
						tabIndex: -1,
						guild: j,
						showBadge: !0,
						className: null != j.icon ? p.icon : p.noIcon,
						badgeStrokeColor: (0, s.Lq)((0, i.wj)(O) ? b.Ilk.PRIMARY_600 : b.Ilk.WHITE_500),
						badgeTooltipColor: l.FGA.PRIMARY,
						badgeTooltipDelay: m.vB,
						size: c.Z.Sizes.MEDIUM,
						active: !0
					}), (0, n.jsxs)("div", {
						className: p.details,
						children: [(0, n.jsx)("div", {
							className: p.name,
							children: j.name
						}), y && (0, n.jsxs)("div", {
							className: p.nick,
							children: [(0, n.jsx)(l.qEK, {
								src: t.getAvatarURL(j.id, f),
								size: l.EFr.SIZE_16,
								className: p.avatar,
								"aria-hidden": !0
							}), (0, n.jsx)(l.Text, {
								variant: "text-xs/medium",
								children: (0, n.jsx)(o.Z, {
									delay: m.vB,
									children: null != x ? x : u.ZP.getName(j.id, void 0, t)
								})
							})]
						}), !y && null != x && (0, n.jsx)(l.Text, {
							variant: "text-xs/medium",
							children: (0, n.jsx)(o.Z, {
								delay: m.vB,
								children: x
							})
						})]
					})]
				})
			}
		}
	}
]);
//# sourceMappingURL=eb1de827abed1cfc.js.map