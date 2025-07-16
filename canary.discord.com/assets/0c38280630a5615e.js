(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["31978"], {
		595173: function(e, t, n) {
			var r = {
				"./2017-11-16.mp4": "221825",
				"./channel-following.png": "247815",
				"./discovery.jpg": "778608",
				"./g250k-cl.mp4": "909851",
				"./hypesquad-hack-week/header.png": "819091",
				"./hypesquad-hack-week/paladins-loot.png": "742305",
				"./ko-new-year.jpg": "265921",
				"./polish-week.png": "560437",
				"./special-template/desktop-cta.png": "846033",
				"./special-template/update-badge.svg": "623904",
				"./stickers-launch/2020_PMM_STICKERS_Mrkt_BlogHdr_2500x1000.png": "928400",
				"./stickers-launch/2020_PMM_STICKERS_Mrkt_DesktopHero_Left_180x220.png": "148821",
				"./stickers-launch/2020_PMM_STICKERS_Mrkt_DesktopHero_Right_180x220.png": "982563",
				"./stickers-launch/2020_PMM_STICKERS_Mrkt_Desktop_Changelog_658X220.png": "331628",
				"./stickers-launch/2020_PMM_STICKERS_Mrkt_Desktop_FooterCTA_238x220.png": "765198",
				"./stickers-launch/2020_PMM_STICKERS_Mrkt_MobileHero_375x190.png": "199469",
				"./stickers-launch/2020_PMM_STICKERS_Mrkt_Mobile_FooterCTA_343x78.png": "199612",
				"./store.jpg": "926213"
			};

			function l(e) {
				return n(o(e))
			}

			function o(e) {
				if (!n.o(r, e)) {
					var t = Error("Cannot find module '" + e + "'");
					throw t.code = "MODULE_NOT_FOUND", t
				}
				return r[e]
			}
			l.keys = function() {
				return Object.keys(r)
			}, l.resolve = o, e.exports = l, l.id = 595173
		},
		221825: function(e, t, n) {
			"use strict";
			e.exports = n.p + "c97a8478da59fb26.mp4"
		},
		247815: function(e) {
			"use strict";
			e.exports = "/assets/ed5b58fd90a77573.png"
		},
		778608: function(e) {
			"use strict";
			e.exports = "/assets/1e90ddaa9ccd4923.jpg"
		},
		909851: function(e, t, n) {
			"use strict";
			e.exports = n.p + "6e3b46f8b9349a74.mp4"
		},
		819091: function(e) {
			"use strict";
			e.exports = "/assets/ad49e94b01a02051.png"
		},
		742305: function(e) {
			"use strict";
			e.exports = "/assets/b94683c0a60d1508.png"
		},
		265921: function(e) {
			"use strict";
			e.exports = "/assets/74219c6bc2199cf6.jpg"
		},
		560437: function(e) {
			"use strict";
			e.exports = "/assets/129d73611c9a5d04.png"
		},
		846033: function(e) {
			"use strict";
			e.exports = "/assets/ccc399a0cd550337.png"
		},
		623904: function(e) {
			"use strict";
			e.exports = "/assets/e850bf18b84d0bf0.svg"
		},
		928400: function(e) {
			"use strict";
			e.exports = "/assets/d5fb86a5aec78374.png"
		},
		148821: function(e) {
			"use strict";
			e.exports = "/assets/528b5981a4bd7721.png"
		},
		982563: function(e) {
			"use strict";
			e.exports = "/assets/8d6786d96ec940d3.png"
		},
		331628: function(e) {
			"use strict";
			e.exports = "/assets/4c2d295dce1c5801.png"
		},
		765198: function(e) {
			"use strict";
			e.exports = "/assets/da616205dfe4ecf2.png"
		},
		199469: function(e) {
			"use strict";
			e.exports = "/assets/853c79de65740191.png"
		},
		199612: function(e) {
			"use strict";
			e.exports = "/assets/918865c8d6dbea7d.png"
		},
		926213: function(e) {
			"use strict";
			e.exports = "/assets/a0b7aa606b955b8c.jpg"
		},
		121282: function(e) {
			"use strict";
			e.exports = "/assets/53a3273a8e84f521.svg"
		},
		943702: function(e) {
			"use strict";
			e.exports = "/assets/132ece5c9994a31e.png"
		},
		144144: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => l
			});
			var r = n(570140);
			let l = {
				startTyping(e) {
					r.Z.dispatch({
						type: "TYPING_START_LOCAL",
						channelId: e
					})
				},
				stopTyping(e) {
					r.Z.dispatch({
						type: "TYPING_STOP_LOCAL",
						channelId: e
					})
				}
			}
		},
		107484: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => u
			}), n(388685);
			var r, l, o, i = n(442837),
				a = n(570140);
			let s = new Map;
			class c extends(r = i.ZP.Store) {
				getGuildRoleConnectionEligibility(e) {
					return null != e ? s.get(e) : void 0
				}
			}
			o = "GuildRoleConnectionEligibilityStore", (l = "displayName") in c ? Object.defineProperty(c, l, {
				value: o,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : c[l] = o;
			let u = new c(a.Z, {
				GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: e => {
					let {
						roleId: t,
						roleConnectionEligibility: n
					} = e;
					s.set(t, n)
				}
			})
		},
		977392: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => s
			});
			var r = n(399606),
				l = n(592125),
				o = n(271383),
				i = n(485386),
				a = n(275759);

			function s(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
					s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
					c = (0, r.e7)([o.ZP], () => null != e ? o.ZP.getMember(e.id, t) : null, [e, t]),
					u = (0, r.e7)([l.Z], () => l.Z.getChannel(n), [n]),
					d = (0, r.e7)([l.Z], () => l.Z.getChannel(null == u ? void 0 : u.parent_id), [u]),
					p = (0, r.e7)([i.Z], () => null != e ? i.Z.getRoles(e.id) : void 0);
				return null == e || null == p || null == c ? null : (0, a.Ur)({
					guild: e,
					guildRoles: p,
					guildMember: c,
					channel: null != u && u.isThread() && null != d ? d : u,
					onlyChannelConnectionRoles: s
				})
			}
		},
		366030: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => U
			}), n(953529), n(472816), n(794429), n(388685);
			var r = n(255367),
				l = n(73800),
				o = n(512722),
				i = n.n(o),
				a = n(392711),
				s = n.n(a),
				c = n(442837),
				u = n(692547),
				d = n(780384),
				p = n(755721),
				m = n(481060),
				g = n(749210),
				f = n(99690),
				b = n(410030),
				h = n(726542),
				O = n(367907),
				y = n(906732),
				v = n(385499),
				j = n(892001),
				P = n(598077),
				x = n(271383),
				w = n(626135),
				C = n(275759),
				S = n(107484),
				E = n(977392),
				N = n(134433),
				Z = n(753194),
				R = n(458034),
				T = n(856651),
				I = n(981631),
				_ = n(228168),
				k = n(388032),
				M = n(933466);

			function D(e) {
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

			function A(e) {
				let t, {
					connectionType: n,
					connectionMetadataField: l,
					operator: o,
					value: i,
					description: a
				} = e;
				if (null != a) switch (o) {
					case T.iO.LESS_THAN:
						t = k.intl.format(k.t["2p7dAw"], {
							description: a,
							count: Math.max(0, Number(i) - 1)
						});
						break;
					case T.iO.GREATER_THAN:
						t = k.intl.format(k.t["2p7dAw"], {
							description: a,
							count: Math.max(0, Number(i) + 1)
						});
						break;
					default:
						t = a
				} else t = (0, C.n_)({
					connectionType: n,
					connectionMetadataField: l,
					operator: o,
					value: i
				});
				return null == t ? null : (0, r.jsxs)("div", {
					className: M.popoutCheck,
					children: [(0, r.jsx)(m.dz2, {
						size: "md",
						color: "currentColor",
						className: M.popoutCheckIcon
					}), (0, r.jsx)(m.Text, {
						variant: "text-xs/medium",
						color: "header-primary",
						children: t
					})]
				})
			}

			function L(e) {
				let {
					eligibilityStates: t
				} = e, n = (0, b.ZP)(), l = (0, m.dQu)(u.Z.unsafe_rawColors.GREEN_330).hex(), o = s().groupBy(t, e => "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : ""));
				return (0, r.jsx)(r.Fragment, {
					children: Object.keys(o).map(e => {
						var t, a;
						let s, c = o[e],
							u = c.filter(e => null != e.operator),
							p = c.find(e => null != e.application),
							g = h.Z.get(e),
							b = null == p ? void 0 : p.application,
							O = (null == b ? void 0 : b.bot) != null ? new P.Z(b.bot) : null;
						return C.SJ.includes(null != (t = null == b ? void 0 : b.id) ? t : "") ? s = (0, r.jsx)(Z.Z, {
							className: M.botTag,
							color: l,
							size: 16
						}) : null != O && (s = (0, r.jsx)(v.Z, {
							className: M.botTag,
							verified: O.isVerifiedBot()
						})), (0, r.jsxs)("div", {
							className: M.popoutChecksGroup,
							children: [(0, r.jsxs)("div", {
								className: M.popoutCheckGroupName,
								children: [null != g ? (0, r.jsx)("img", {
									src: (0, d.wj)(n) ? g.icon.darkSVG : g.icon.lightSVG,
									alt: "",
									className: M.popoutCheckGroupPlatformIcon
								}) : null, null != O ? (0, r.jsx)(f.Z, {
									user: O,
									size: m.EFr.SIZE_20,
									className: M.popoutCheckGroupPlatformIcon
								}) : null, (0, r.jsx)(m.Text, {
									variant: "text-sm/medium",
									color: "interactive-active",
									children: null != (a = null == g ? void 0 : g.name) ? a : null == b ? void 0 : b.name
								}), s]
							}), u.map(e => {
								let {
									connection_type: t,
									connection_metadata_field: n,
									operator: l,
									value: o,
									description: a
								} = e;
								return i()(null != n, "connectionMetadataField is null"), i()(null != l, "operator is null"), i()(null != o, "value is null"), (0, r.jsx)(A, {
									connectionType: t,
									connectionMetadataField: n,
									operator: l,
									value: o,
									description: a
								}, "".concat(t, ":").concat(n, ":").concat(l, ":").concat(o))
							})]
						}, e)
					})
				})
			}

			function G(e) {
				let t, {
					onGetRolesClicked: n,
					onOpenProfile: o,
					eligibilityStates: i,
					userId: a,
					roleId: s,
					channelId: u,
					guildId: d
				} = e;
				l.useEffect(() => {
					w.default.track(I.rMx.PASSPORT_ROLE_POPOUT_VIEWED, D({
						other_user_id: a,
						role_id: s
					}, (0, O.JS)(u), (0, O.hH)(d)))
				}, [a, s, u, d]);
				let g = (0, c.e7)([x.ZP], () => {
					var e, t;
					return null != (t = null == (e = x.ZP.getSelfMember(d)) ? void 0 : e.roles.includes(s)) && t
				}, [d, s]);
				return t = 1 === i.length && 1 === i[0].length ? k.intl.string(k.t.jDym4O) : 1 === i.length ? k.intl.format(k.t["0eBj39"], {}) : k.intl.format(k.t.D7uftL, {}), (0, r.jsxs)("div", {
					className: M.popout,
					children: [(0, r.jsx)("div", {
						className: M.popoutHeaderContainer,
						children: (0, r.jsx)(m.Text, {
							variant: "text-xs/normal",
							color: "text-default",
							className: M.popoutHeaderText,
							children: t
						})
					}), (0, r.jsx)("div", {
						className: M.popoutChecks,
						children: (0, r.jsx)(L, {
							eligibilityStates: i.flat()
						})
					}), (0, r.jsxs)("div", {
						className: M.buttonContainer,
						children: [g ? null : (0, r.jsx)(p.zx, {
							className: M.getRolesButton,
							onClick: n,
							children: k.intl.string(k.t.T1t1WV)
						}), (0, r.jsx)(p.zx, {
							className: M.viewConnectionsButton,
							color: p.zx.Colors.PRIMARY,
							onClick: o,
							children: k.intl.string(k.t.hgKDnJ)
						})]
					})]
				})
			}

			function U(e) {
				let {
					userId: t,
					messageId: n,
					guild: o,
					channel: a
				} = e, {
					analyticsLocations: s
				} = (0, y.ZP)(), u = (0, E.Z)(o, t, a.id, !0), d = (0, c.e7)([S.Z], () => S.Z.getGuildRoleConnectionEligibility(null == u ? void 0 : u.id)), [p, f] = l.useState(null == d), b = l.useRef(null);
				if (null == u) return null;
				async function h() {
					i()(null != u, "visibleConnectionsRole is null"), p && null == d && (await g.Z.fetchGuildRoleConnectionsEligibility(o.id, u.id), f(!1))
				}
				return (0, r.jsx)(m.KeG, {
					targetElementRef: b,
					onRequestOpen: h,
					renderPopout: function() {
						return Promise.resolve(e => {
							let {
								closePopout: l
							} = e;
							return null == d ? (0, r.jsx)(r.Fragment, {}) : (i()(null != u, "visibleConnectionsRole is null"), (0, r.jsx)(G, {
								eligibilityStates: d,
								userId: t,
								roleId: u.id,
								channelId: a.id,
								guildId: o.id,
								onGetRolesClicked: () => {
									(0, R.Am)(o.id)
								},
								onOpenProfile: () => {
									(0, j.openUserProfileModal)({
										userId: t,
										messageId: n,
										guildId: o.id,
										channelId: a.id,
										roleId: u.id,
										subsection: _.Tb.CONNECTIONS,
										sourceAnalyticsLocations: s
									}), l()
								}
							}))
						})
					},
					align: "top",
					nudgeAlignIntoViewport: !0,
					children: e => (0, r.jsx)(m.ua7, {
						text: k.intl.string(k.t.Wpsnam),
						children: t => {
							var n, l;
							return (0, r.jsxs)("div", (n = D({
								ref: b,
								className: M.badge
							}, t, e), l = l = {
								children: [(0, r.jsx)(N.Z, {
									className: M.badgeVerifiedIcon,
									size: 16,
									color: u.colorString
								}), (0, r.jsx)(m.Text, {
									variant: "text-xs/bold",
									color: "header-primary",
									className: M.roleName,
									children: u.name
								})]
							}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
								var n = Object.keys(e);
								if (Object.getOwnPropertySymbols) {
									var r = Object.getOwnPropertySymbols(e);
									n.push.apply(n, r)
								}
								return n
							})(Object(l)).forEach(function(e) {
								Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
							}), n))
						}
					})
				})
			}
		},
		458034: function(e, t, n) {
			"use strict";
			n.d(t, {
				Am: () => u,
				ZP: () => d,
				s$: () => c
			});
			var r = n(255367);
			n(73800);
			var l = n(442837),
				o = n(481060),
				i = n(485386),
				a = n(275759),
				s = n(388032);
			let c = "guild-connection-roles";

			function u(e) {
				(0, o.ZDy)(async () => {
					let {
						default: t
					} = await n.e("40897").then(n.bind(n, 507294));
					return n => {
						var l, o;
						return (0, r.jsx)(t, (l = function(e) {
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
						}({}, n), o = o = {
							guildId: e
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var r = Object.getOwnPropertySymbols(e);
								n.push.apply(n, r)
							}
							return n
						})(Object(o)).forEach(function(e) {
							Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e))
						}), l))
					}
				}, {
					modalKey: c,
					contextKey: o.z1l,
					onCloseRequest: () => {
						(0, o.Mr3)(c, o.z1l)
					}
				})
			}

			function d(e) {
				return (0, l.e7)([i.Z], () => (0, a.kQ)(e, i.Z.getRoles(e.id)), [e]) ? (0, r.jsx)(o.sNh, {
					id: "guild-connection-roles",
					label: s.intl.string(s.t.ghtnsr),
					icon: o.xPt,
					action: () => u(e.id)
				}) : null
			}
		},
		71619: function(e, t, n) {
			"use strict";
			n.d(t, {
				AB: () => a,
				ZP: () => u,
				s5: () => d
			});
			var r = n(442837),
				l = n(271383),
				o = n(594174),
				i = n(69882);

			function a(e) {
				let t = (0, r.e7)([o.default], () => o.default.getCurrentUser());
				return u(null == t ? void 0 : t.id, e)
			}

			function s(e, t, n) {
				return null != t && null != e ? n.getMember(t, e) : null
			}

			function c(e) {
				var t;
				return [null != (t = null == e ? void 0 : e.communicationDisabledUntil) ? t : null, (0, i.b)(e)]
			}

			function u(e, t) {
				return c((0, r.e7)([l.ZP], () => s(e, t, l.ZP), [t, e]))
			}

			function d(e, t) {
				return c(s(e, t, l.ZP))
			}
		},
		946273: function(e, t, n) {
			"use strict";
			n.d(t, {
				BK: () => m,
				CX: () => h,
				lD: () => b,
				mm: () => f,
				nX: () => g,
				vV: () => p
			}), n(997841), n(388685);
			var r = n(442837),
				l = n(271383),
				o = n(430824),
				i = n(496675),
				a = n(594174),
				s = n(630388),
				c = n(709054),
				u = n(372897),
				d = n(981631);
			let p = (e, t) => {
				var n;
				let i = (0, r.e7)([l.ZP], () => {
						var n, r;
						return (0, s.yE)(null != (r = null == (n = l.ZP.getMember(e, t)) ? void 0 : n.flags) ? r : 0, u.q.DID_REJOIN)
					}),
					d = (0, r.e7)([o.Z], () => {
						let t = o.Z.getGuild(e);
						return null != t && function(e) {
							let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
								n = c.default.extractTimestamp(e.id);
							return Date.now() - n < 864e5 * t
						}(t)
					}),
					p = (0, r.e7)([a.default], () => {
						var e;
						return null == (e = a.default.getUser(t)) ? void 0 : e.bot
					});
				return n = {
					maxDaysOld: 7
				}, (0, r.e7)([], () => (function(e, t, n) {
					let {
						maxDaysOld: r,
						minDaysOld: i = 0
					} = t, a = o.Z.getGuild(e), s = null == a ? void 0 : a.joinedAt;
					if (null != n) {
						let t = l.ZP.getMember(e, n);
						s = (null == t ? void 0 : t.joinedAt) == null ? null : new Date(t.joinedAt)
					}
					if (null == s) return !1;
					let c = Date.now() - s.getTime();
					return (null == r || c <= 864e5 * r) && c >= 864e5 * i
				})(e, n, t), [n, e, t]) && !d && !p && !i
			};

			function m(e, t) {
				let [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.Z, l.ZP];
				return null != t && g(e, t, [n]) && null != r.getMember(t.id, e.id)
			}

			function g(e, t) {
				let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.Z];
				return null != t && n.canManageUser(d.Plq.KICK_MEMBERS, e, t) && !e.isNonUserBot()
			}

			function f(e, t) {
				let [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.Z, l.ZP];
				return null != t && b(e, t, [n]) && null != r.getMember(t.id, e.id)
			}

			function b(e, t) {
				let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.Z];
				return null != t && n.canManageUser(d.Plq.BAN_MEMBERS, e, t) && !e.isNonUserBot() && !e.bot
			}

			function h(e, t) {
				let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.Z];
				return null != e && null != t && n.canManageUser(d.Plq.MANAGE_MESSAGES, e, t) && !e.isNonUserBot()
			}
		},
		340797: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => u
			});
			var r = n(255367),
				l = n(73800),
				o = n(481060),
				i = n(946273),
				a = n(441110),
				s = n(388032),
				c = n(374701);

			function u(e) {
				let {
					guild: t,
					message: n
				} = e, u = l.useRef(null);
				return (0, i.vV)(t.id, n.author.id) ? (0, r.jsx)(o.yRy, {
					targetElementRef: u,
					animation: o.yRy.Animation.TRANSLATE,
					align: "center",
					autoInvert: !0,
					nudgeAlignIntoViewport: !0,
					position: "right",
					renderPopout: e => {
						let {
							closePopout: l
						} = e;
						return (0, r.jsx)(a.Z, {
							guild: t,
							message: n,
							onClose: l
						})
					},
					children: e => {
						let {
							onClick: t
						} = e;
						return (0, r.jsx)(o.P3F, {
							onClick: t,
							tag: "span",
							innerRef: u,
							children: (0, r.jsx)(o.ua7, {
								text: s.intl.string(s.t["v/OYd3"]),
								children: e => {
									var t, n;
									return (0, r.jsx)("div", (t = function(e) {
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
										className: c.newMemberBadge
									}, e), n = n = {
										children: (0, r.jsx)(o.hg2, {
											size: "custom",
											color: "currentColor",
											width: 20,
											height: 20
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
							})
						})
					}
				}) : null
			}
		},
		441110: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => f
			});
			var r = n(255367);
			n(73800);
			var l = n(481060),
				o = n(493773),
				i = n(367907),
				a = n(524444),
				s = n(297047),
				c = n(592125),
				u = n(944486),
				d = n(626135),
				p = n(981631),
				m = n(388032),
				g = n(400822);
			let f = function(e) {
				let {
					guild: t,
					message: n,
					onClose: f
				} = e, b = c.Z.getChannel(u.Z.getChannelId(t.id));
				return ((0, o.ZP)(() => {
					d.default.track(p.rMx.OPEN_POPOUT, {
						type: "New Member Badge Popout",
						guild_id: t.id,
						channel_id: null == b ? void 0 : b.id
					})
				}), null == b) ? null : (0, r.jsx)(a.W_, {
					className: g.messagePopoutContent,
					children: (0, r.jsxs)("div", {
						className: g.popoutContainer,
						children: [(0, r.jsxs)("div", {
							className: g.mainContent,
							children: [(0, r.jsx)("div", {
								className: g.iconContainer,
								children: (0, r.jsx)(l.hg2, {
									size: "custom",
									color: "currentColor",
									width: 40,
									height: 40
								})
							}), (0, r.jsxs)("div", {
								children: [(0, r.jsx)(l.X6q, {
									variant: "heading-md/semibold",
									className: g.header,
									children: m.intl.string(m.t["v/OYd3"])
								}), (0, r.jsx)(l.Text, {
									variant: "text-sm/normal",
									children: m.intl.string(m.t.Z85MlJ)
								})]
							})]
						}), (0, r.jsx)("div", {
							"data-button-hoisted-classname-wrapper": !0,
							className: g.ctaButton,
							children: (0, r.jsx)(l.zxk, {
								variant: "primary",
								size: "sm",
								text: m.intl.format(m.t["+xsVS0"], {
									username: n.author.username
								}),
								fullWidth: !0,
								onClick: () => {
									i.ZP.trackWithMetadata(p.rMx.NEW_MEMBER_MENTION_CTA_CLICKED, {
										target_user_id: n.author.id
									}), f(), (0, s.q)(n.author, b.id)
								}
							})
						})]
					})
				})
			}
		},
		712950: function(e, t, n) {
			"use strict";
			n.d(t, {
				g: () => i,
				p: () => a
			});
			var r = n(399606),
				l = n(581883),
				o = n(592204);
			let i = () => {
					var e, t, n;
					let o = (0, r.cj)([l.Z], () => {
						var e, t;
						return null != (t = null == (e = l.Z.settings.textAndImages) ? void 0 : e.keywordFilterSettings) ? t : {}
					});
					return {
						profanity: null == (e = o.profanity) ? void 0 : e.value,
						sexualContent: null == (t = o.sexualContent) ? void 0 : t.value,
						slurs: null == (n = o.slurs) ? void 0 : n.value
					}
				},
				a = () => {
					var e;
					let {
						profanity: t,
						sexualContent: n,
						slurs: r
					} = i();
					return !!(0, o.Xo)({
						location: "use-should-filter-keywords"
					}) && null != (e = t || n || r) && e
				}
		},
		905405: function(e, t, n) {
			"use strict";
			n.d(t, {
				p: () => o
			});
			var r = n(592204),
				l = n(712950);
			let o = () => {
				var e;
				let {
					profanity: t,
					sexualContent: n,
					slurs: o
				} = (0, l.g)();
				return !!(0, r.Xo)({
					location: "use-should-filter-keywords"
				}) && null != (e = t || n || o) && e
			}
		},
		913834: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => p
			}), n(388685);
			var r = n(255367),
				l = n(73800),
				o = n(481060),
				i = n(100527),
				a = n(873128),
				s = n(704041),
				c = n(986398),
				u = n(463031),
				d = n(791644);

			function p(e) {
				let {
					guild: t,
					message: n
				} = e, p = l.useRef(null), [m, g] = l.useState(!1), f = l.useRef(!1), b = (0, a.Z)({
					guildId: t.id,
					leaderboardId: u.z,
					intervalOffset: 0
				}), h = l.useMemo(() => {
					var e;
					if ((null == b || null == (e = b.guild_settings) ? void 0 : e.show_winner_crown) !== !0) return !1;
					let t = b.users[0];
					return n.author.id === (null == t ? void 0 : t.user_id)
				}, [b, n]);
				return null != b && h ? (0, r.jsx)("div", {
					className: d.badge,
					onMouseEnter: () => {
						f.current = !0, g(!0)
					},
					onMouseLeave: () => {
						f.current = !1, setTimeout(() => {
							f.current || g(!1)
						}, 100)
					},
					children: (0, r.jsx)(o.yRy, {
						targetElementRef: p,
						animation: o.yRy.Animation.TRANSLATE,
						align: "center",
						autoInvert: !0,
						nudgeAlignIntoViewport: !0,
						position: "top",
						shouldShow: m,
						renderPopout: () => (0, r.jsx)(s.Z, {
							guildId: t.id,
							previewMode: !0,
							source: i.Z.MEMBER_LIST,
							leaderboardId: b.leaderboard_id
						}),
						children: () => (0, r.jsx)(c.Z, {
							leaderboard: b,
							className: d.image,
							ref: p
						})
					})
				}) : null
			}
		},
		750030: function(e, t, n) {
			"use strict";
			n.d(t, {
				k: () => l
			}), n(622822);
			var r = n(592125);

			function l(e) {
				var t, n;
				return null != (n = null == (t = r.Z.getChannel(e.channel_id)) ? void 0 : t.guild_id) ? n : void 0
			}
			n(731290), n(594174)
		},
		276554: function(e, t, n) {
			"use strict";
			n.d(t, {
				R: () => l
			});
			let r = (0, n(818083).B)({
				kind: "user",
				id: "2023-10_social_proofing_message_nitro_badge",
				label: "Social Proofing Message Nitro Badge",
				defaultConfig: {
					enabled: !1,
					hideNitroBadgeWhenRoleBadgePresent: !1
				},
				treatments: [{
					id: 1,
					label: "Prefer BOTH nitro badge AND role icon(s)",
					config: {
						enabled: !0,
						hideNitroBadgeWhenRoleBadgePresent: !1
					}
				}, {
					id: 2,
					label: "Prefer role icon(s) over nitro badge if both are present",
					config: {
						enabled: !0,
						hideNitroBadgeWhenRoleBadgePresent: !0
					}
				}]
			});

			function l(e, t) {
				let n = r.getCurrentConfig({
					location: t
				}, {
					autoTrackExposure: !0
				});
				return n.enabled && (!n.hideNitroBadgeWhenRoleBadgePresent || n.hideNitroBadgeWhenRoleBadgePresent && !e)
			}
		},
		492593: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => b
			}), n(388685);
			var r = n(255367),
				l = n(73800),
				o = n(120356),
				i = n.n(o),
				a = n(442837),
				s = n(573385),
				c = n(481060),
				u = n(606318),
				d = n(402235),
				p = n(485386),
				m = n(848697);

			function g(e) {
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

			function f(e, t) {
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
			let b = function(e) {
				var {
					className: t,
					compact: n = !1,
					contentOnly: o = !1,
					zalgo: b = !0,
					preview: h = !1,
					disableInteraction: O = !1,
					childrenRepliedMessage: y,
					childrenExecutedCommand: v,
					childrenHeader: j,
					childrenSystemMessage: P,
					childrenButtons: x,
					childrenMessageContent: w,
					childrenAccessories: C,
					messageRef: S,
					focusProps: E = {
						offset: {
							left: 4,
							right: 4
						}
					},
					hasThread: N,
					isSystemMessage: Z,
					hasReply: R,
					author: T,
					onMouseEnter: I,
					onMouseLeave: _
				} = e, k = function(e, t) {
					if (null == e) return {};
					var n, r, l = function(e, t) {
						if (null == e) return {};
						var n, r, l = {},
							o = Object.keys(e);
						for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
						return l
					}(e, t);
					if (Object.getOwnPropertySymbols) {
						var o = Object.getOwnPropertySymbols(e);
						for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
					}
					return l
				}(e, ["className", "compact", "contentOnly", "zalgo", "preview", "disableInteraction", "childrenRepliedMessage", "childrenExecutedCommand", "childrenHeader", "childrenSystemMessage", "childrenButtons", "childrenMessageContent", "childrenAccessories", "messageRef", "focusProps", "hasThread", "isSystemMessage", "hasReply", "author", "onMouseEnter", "onMouseLeave"]);
				let M = (0, a.e7)([p.Z], () => (null == T ? void 0 : T.guildId) == null || (null == T ? void 0 : T.colorRoleId) == null ? null : p.Z.getRole(T.guildId, T.colorRoleId)),
					D = (0, d.yH)(null == T ? void 0 : T.guildId, M) && (0, u.S2)(T),
					[A, L] = l.useState(!1),
					G = l.useCallback(e => {
						L(!0), null == I || I(e)
					}, [I]),
					U = l.useCallback(e => {
						L(!1), null == _ || _(e)
					}, [_]),
					B = (0, r.jsx)(s.d.Provider, {
						value: {
							animate: A,
							setAnimate: L
						},
						children: (0, r.jsx)(c.tEY, f(g({}, E), {
							children: (0, r.jsxs)("div", f(g({
								className: i()(t, {
									[m.gradient]: D,
									[m.wrapper]: !0,
									[m.contentOnly]: o,
									[m.compact]: n,
									[m.preview]: h,
									[m.cozy]: !n,
									[m.zalgo]: b,
									[m.hasThread]: N,
									[m.isSystemMessage]: Z,
									[m.hasReply]: R
								}),
								ref: S
							}, k), {
								role: "article",
								onMouseEnter: G,
								onMouseLeave: U,
								children: [y, v, (0, r.jsxs)("div", {
									className: m.contents,
									children: [P, j, null == P && w]
								}), C, null != x ? (0, r.jsx)("div", {
									className: m.buttonContainer,
									children: x
								}) : null]
							}))
						}))
					});
				return O ? (0, r.jsx)(c.Rny, {
					children: B
				}) : B
			}
		},
		739754: function(e, t, n) {
			"use strict";
			n.d(t, {
				ZP: () => y,
				c4: () => h,
				st: () => O
			});
			var r = n(255367),
				l = n(73800),
				o = n(120356),
				i = n.n(o),
				a = n(710251),
				s = n(442837),
				c = n(481060),
				u = n(292419),
				d = n(282397),
				p = n(188597),
				m = n(981631),
				g = n(388032),
				f = n(964732);

			function b(e) {
				return {
					text: e,
					icon: (0, r.jsx)(c.bbz, {
						className: f.icon,
						dotRadius: 3.5,
						themed: !0
					})
				}
			}

			function h(e) {
				return {
					text: null != e ? e : g.intl.string(g.t.VCsUJi),
					color: "text-danger",
					icon: (0, r.jsx)(c.P4T, {
						size: "xs",
						color: "currentColor",
						className: i()(f.icon, f.errorIcon)
					})
				}
			}

			function O(e) {
				let {
					className: t,
					icon: n,
					text: l,
					color: o
				} = e;
				return (0, r.jsxs)("div", {
					className: i()(f.wrapper, t),
					children: [n, (0, r.jsx)(c.Text, {
						variant: "text-md/normal",
						color: o,
						scaleFontToUserSetting: !0,
						children: l
					})]
				})
			}
			let y = l.memo(function(e) {
				let {
					message: t,
					className: n,
					component: o
				} = e, i = (0, a.Z)(), c = (0, s.e7)([d.ZP], () => d.ZP.getInteraction(t), [t]);
				l.useEffect(() => {
					let e = null;
					if (t.hasFlag(m.iLy.LOADING) && null != c) {
						let n = (0, p.ow)(t.id) - Date.now();
						n > 0 && (e = setTimeout(() => i(), 1e3 + n))
					}
					return () => {
						clearTimeout(e)
					}
				}, [i, c, t]);
				let f = null;
				if (null == o) f = function(e, t) {
					switch ((0, p.t$)(t, e)) {
						case p.rQ.SENDING:
							return b(g.intl.string(g.t.RiLfBQ));
						case p.rQ.CREATED:
							return b(g.intl.formatToPlainString(g.t["7ePV4u"], {
								applicationName: t.author.username
							}));
						case p.rQ.TIMED_OUT:
							return h(g.intl.string(g.t.h8hzPT));
						case p.rQ.FAILED:
							return h(t.interactionError)
					}
				}(c, t);
				else {
					let e = (0, u.SD)(c, t, o);
					null != e && (f = h(e))
				}
				if (null == f) return null;
				let {
					text: y,
					icon: v,
					color: j
				} = f;
				return (0, r.jsx)(O, {
					icon: v,
					text: y,
					className: n,
					color: j
				})
			})
		},
		453687: function(e, t, n) {
			"use strict";
			n.d(t, {
				Dv: () => c,
				Gq: () => a,
				Gx: () => m,
				XX: () => s,
				bX: () => d,
				bY: () => u,
				iG: () => p,
				ut: () => i
			}), n(781311);
			var r = n(446108),
				l = n(901461),
				o = n(981631);

			function i(e) {
				return "message-content-".concat(e.id)
			}

			function a(e) {
				return "message-reply-context-".concat(e.id)
			}

			function s(e, t) {
				let n = null != t ? t : e.id;
				return "message-username-".concat(n)
			}

			function c(e) {
				return "message-timestamp-".concat(e.id)
			}

			function u(e) {
				return "message-reactions-".concat(e.id)
			}

			function d(e) {
				return "message-accessories-".concat(e.id)
			}

			function p(e, t, n) {
				let u = e.type === o.uaV.REPLY && null != e.messageReference,
					p = e.embeds.length > 0,
					m = e.attachments.length > 0,
					g = e.stickerItems.length > 0,
					f = e.codedLinks.length > 0,
					b = e.components.length > 0,
					h = e.hasFlag(o.iLy.HAS_THREAD),
					O = p || m || g || f || h || b || e.type === o.uaV.THREAD_CREATED,
					y = p && e.content === e.embeds[0].url && e.embeds[0].type === o.hBH.GIFV,
					v = e.type !== o.uaV.DEFAULT || !y && "" !== e.content,
					j = (0, l.Z)(e),
					P = !j && (null == n ? void 0 : n.hasTimestamp) !== !1,
					x = s(e, t),
					w = a(e),
					C = j ? "" : "".concat(u ? w : x, " ").concat(r.Z0);
				if (v) {
					let t = i(e);
					C += " ".concat(t)
				}
				if (O) {
					let t = d(e);
					C += " ".concat(t)
				}
				if (P) {
					let t = c(e);
					C += " ".concat(r.fy, " ").concat(t)
				}
				return C.trim()
			}

			function m(e) {
				if (0 === e.reactions.length) return;
				let t = u(e);
				return "".concat(r.Mb, " ").concat(t)
			}
		},
		930282: function(e, t, n) {
			"use strict";
			n.d(t, {
				HR: () => h,
				L5: () => b,
				ZP: () => O
			});
			var r = n(255367),
				l = n(73800),
				o = n(120356),
				i = n.n(o),
				a = n(653603),
				s = n.n(a),
				c = n(902704),
				u = n(453687),
				d = n(328966),
				p = n(981631),
				m = n(388032),
				g = n(848697),
				f = n(73433);

			function b(e, t) {
				return e.type === p.uaV.VOICE_HANGOUT_INVITE ? "" : e.hasFlag(p.iLy.SOURCE_MESSAGE_DELETED) ? m.intl.string(m.t.JOtgS0) : t
			}

			function h(e, t) {
				var n, r;
				let {
					message: l
				} = t, {
					message: o
				} = e;
				return (0, c.Z)(e, t, ["message"]) && l.content === o.content && l.state === o.state && (null == (n = l.editedTimestamp) ? void 0 : n.toString()) === (null == (r = o.editedTimestamp) ? void 0 : r.toString())
			}
			let O = l.memo(function(e) {
				var t;
				let {
					className: n,
					message: o,
					children: a,
					content: c,
					onUpdate: m,
					contentRef: h,
					compact: O
				} = e, y = o.state === p.yb.SEND_FAILED, v = o.state === p.yb.SENDING, j = o.isCommandType(), P = null == (t = o.editedTimestamp) ? void 0 : t.toString(), x = l.useRef(!1);
				return l.useLayoutEffect(() => {
					x.current ? null != m && m() : x.current = !0
				}, [m, o.content, c, P, a]), (0, r.jsxs)("div", {
					id: (0, u.ut)(o),
					ref: h,
					className: i()(n, f.markup, {
						[g.messageContent]: !0,
						[g.isSending]: v && !j,
						[g.markupRtl]: "rtl" === s()(o.content),
						[g.isFailed]: y,
						[g.isUnsupported]: o.isUnsupported
					}),
					children: [null != a ? a : b(o, c), (0, r.jsx)(d.Z, {
						message: o,
						compact: O,
						location: d.H.WITH_CONTENT
					})]
				})
			}, h)
		},
		464891: function(e, t, n) {
			"use strict";
			n.d(t, {
				CF: () => Y,
				ZP: () => et,
				nD: () => Q
			}), n(539854), n(388685), n(997841);
			var r = n(255367),
				l = n(73800),
				o = n(120356),
				i = n.n(o),
				a = n(873546),
				s = n(442837),
				c = n(481060),
				u = n(100527),
				d = n(906732),
				p = n(835473),
				m = n(366030),
				g = n(91218),
				f = n(71619),
				b = n(340797),
				h = n(913834),
				O = n(397589),
				y = n(98278),
				v = n(869765),
				j = n(243317),
				P = n(621853),
				x = n(518950),
				w = n(484459),
				C = n(670188),
				S = n(740492),
				E = n(430824),
				N = n(496675),
				Z = n(594174),
				R = n(768581),
				T = n(585483),
				I = n(630388),
				_ = n(74538),
				k = n(276554),
				M = n(739566),
				D = n(421399),
				A = n(453687),
				L = n(318713),
				G = n(304176),
				U = n(47930),
				B = n(935910),
				F = n(981631),
				H = n(388032),
				z = n(848697),
				V = n(121282);

			function K(e) {
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

			function W(e, t) {
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

			function q(e) {
				let {
					avatarSrc: t,
					avatarDecorationSrc: n,
					compact: l,
					onClick: o,
					onContextMenu: a,
					onMouseDown: s,
					onMouseEnter: c,
					onMouseLeave: u,
					onKeyDown: d,
					showCommunicationDisabledStyles: p = !1,
					className: m,
					avatarImgRef: g
				} = e;
				return (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)("img", {
						ref: g,
						onClick: o,
						onContextMenu: a,
						onKeyDown: d,
						onMouseDown: s,
						onMouseEnter: c,
						onMouseLeave: u,
						src: t,
						"aria-hidden": !0,
						className: i()(m, z.avatar, {
							[z.compact]: l,
							[z.clickable]: null != o,
							[z.communicationDisabledOpacity]: p
						}),
						alt: " "
					}), null == n || l ? null : (0, r.jsx)("img", {
						className: z.avatarDecoration,
						src: n,
						alt: " ",
						"aria-hidden": !0
					})]
				})
			}
			let X = l.memo(function(e) {
				let {
					message: t,
					author: n,
					channel: o,
					guildId: i,
					compact: a = !1,
					roleIconProps: u,
					showUsernamePopout: d,
					renderPopout: p,
					onClickUsername: f,
					onContextMenu: O,
					displayCompactAvatars: y = !1,
					onPopoutRequestClose: v,
					preview: j,
					subscribeToGroupId: P
				} = e, x = (0, M.ZP)(t, n), w = l.useMemo(() => (0, U.x)({
					message: t,
					channel: o,
					user: null == t ? void 0 : t.author,
					compact: a,
					isRepliedMessage: !1
				}), [t, o, a]), C = l.useRef(null), S = (0, s.e7)([E.Z], () => E.Z.getGuild(i)), N = l.useMemo(() => $(a, y, u, S), [a, y, u, S]), R = l.useMemo(() => null == u ? null : 1 === N && null != S ? (0, r.jsx)(c.yRy, {
					targetElementRef: C,
					animation: c.yRy.Animation.TRANSLATE,
					align: "center",
					autoInvert: !0,
					nudgeAlignIntoViewport: !0,
					position: "right",
					renderPopout: () => (0, r.jsx)(G.Z, {
						roleIcon: u,
						guild: S
					}),
					clickTrap: !0,
					children: e => {
						let {
							onClick: t
						} = e;
						return (0, r.jsx)(g.Z, W(K({
							ref: C
						}, u), {
							className: z.roleIcon,
							onClick: t
						}))
					}
				}, "role-icon-children") : 2 === N ? (0, r.jsx)(g.Z, W(K({}, u), {
					className: z.roleIcon
				}), "role-icon-children") : null, [N, u, S]), T = (0, s.e7)([Z.default], () => Z.default.getCurrentUser()), I = l.useMemo(() => {
					let e = [],
						n = _.ZP.isPremium(t.author),
						l = _.ZP.isPremium(T),
						i = null == o ? void 0 : o.isPrivate();
					return (0, k.R)(null != u, "Message Username") && n && !a && !i && e.push((0, r.jsx)(ee, {
						currentUserIsPremium: l,
						author: t.author
					}, "nitro-author")), null != R && e.push(R), null != S && (e.push((0, r.jsx)(b.Z, {
						guild: S,
						message: t
					}, "new-member")), e.push((0, r.jsx)(h.Z, {
						guild: S,
						message: t
					}, "leaderboard-champion"))), null != o && null != S && e.push((0, r.jsx)(m.Z, {
						guild: S,
						channel: o,
						userId: t.author.id,
						messageId: t.id
					}, "connections")), e
				}, [t, o, u, a, R, S, T]);
				return null == x ? null : (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)(D.Z, {
						message: t,
						channel: o,
						author: x,
						compact: a,
						roleIcon: u,
						showPopout: d,
						renderPopout: p,
						onClick: f,
						onContextMenu: O,
						onPopoutRequestClose: v,
						decorations: {
							[D.a.SYSTEM_TAG]: w,
							[D.a.BADGES]: I
						},
						renderRemixTag: !0,
						previewGuildId: i,
						preview: j,
						subscribeToGroupId: P
					}), a && (0, r.jsxs)(r.Fragment, {
						children: [(0, r.jsx)("i", {
							className: z.separator,
							children: ":"
						}), " "]
					})]
				})
			});

			function Y(e, t, n) {
				let {
					message: l,
					channel: o,
					author: i,
					compact: a = !1,
					onContextMenu: s,
					showUsernamePopout: c,
					roleIcon: u,
					onClickUsername: d,
					onPopoutRequestClose: p
				} = e;
				return (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)(D.Z, {
						message: l,
						channel: o,
						author: i,
						compact: a,
						roleIcon: u,
						showPopout: c,
						renderPopout: t,
						onClick: d,
						onContextMenu: s,
						onPopoutRequestClose: p,
						decorations: n,
						preview: !0,
						renderRemixTag: !0
					}), a && (0, r.jsxs)(r.Fragment, {
						children: [(0, r.jsx)("i", {
							className: z.separator,
							children: ":"
						}), " "]
					})]
				})
			}

			function Q(e) {
				let {
					message: t,
					avatar: n,
					username: l,
					usernameSpanId: o,
					usernameClassName: a,
					compact: s,
					showTimestamp: u,
					showTimestampOnHover: d,
					ariaLabelledBy: m,
					ariaDescribedBy: g,
					className: f,
					messageClassname: b,
					badges: h
				} = e, O = (0, I.yE)(t.flags, F.iLy.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null, y = (0, p.q)(O);
				return (0, r.jsxs)(r.Fragment, {
					children: [!s && n, (0, r.jsxs)(c.H, {
						className: i()(z.header, f),
						"aria-describedby": g,
						"aria-labelledby": m,
						children: [u && s && (0, r.jsx)(L.Z, {
							id: (0, A.Dv)(t),
							compact: !0,
							timestamp: t.timestamp,
							isVisibleOnlyOnHover: d,
							className: b,
							isInline: !1,
							application: y
						}), s && n, (0, r.jsx)("span", {
							id: o,
							className: a,
							children: l
						}), u && !s && (0, r.jsx)(L.Z, {
							id: (0, A.Dv)(t),
							timestamp: t.timestamp,
							className: b,
							application: y
						}), null != h && h.length > 0 ? (0, r.jsx)("div", {
							className: z.badgesContainer,
							children: h
						}) : null]
					})]
				})
			}
			let J = e => {
				e || (0, y.z)()
			};

			function $(e, t, n, r) {
				return (!e || t) && null != n && null != r ? 1 : (!e || t) && null != n ? 2 : 0
			}
			let ee = l.memo(function(e) {
					let {
						currentUserIsPremium: t,
						author: n
					} = e, l = (0, s.e7)([P.Z], () => {
						var e;
						return null == (e = P.Z.getUserProfile(n.id)) ? void 0 : e.premiumSince
					});
					return (0, r.jsx)(c.ua7, {
						tooltipClassName: z.nitroAuthorBadgeTootip,
						shouldShow: null != l,
						text: H.intl.formatToPlainString(H.t["8zbGNT"], {
							date: l
						}),
						onTooltipShow: () => (0, w.Z)(n.id),
						children: e => (0, r.jsx)(c.P3F, {
							className: z.nitroAuthorBadgeContainer,
							onClick: () => J(t),
							"aria-label": H.intl.formatToPlainString(H.t["8zbGNT"], {
								date: l
							}),
							children: (0, r.jsx)("img", K({
								alt: "",
								className: z.nitroBadgeSvg,
								src: V
							}, e))
						})
					})
				}),
				et = l.memo(function(e) {
					let {
						message: t,
						repliedMessage: n,
						compact: o = !1,
						renderPopout: p,
						showTimestampOnHover: m,
						roleIcon: g,
						subscribeToGroupId: b,
						hideTimestamp: h,
						className: y,
						channel: P,
						preview: w
					} = e, Z = l.useMemo(() => null != p ? e => p(e, t) : void 0, [p, t]), [, _] = (0, f.ZP)(t.author.id, e.guildId), k = (0, s.e7)([N.Z, E.Z], () => {
						let n = E.Z.getGuild(e.guildId);
						return null != t.author && null != n && N.Z.canManageUser(F.Plq.MODERATE_MEMBERS, t.author, n)
					}, [t.author, e.guildId]), M = _ && k, D = function(e) {
						var t, n;
						let {
							props: o,
							guildId: i,
							handleRenderPopout: c,
							showCommunicationDisabledStyles: p = !1,
							className: m
						} = e, {
							message: g,
							author: f,
							compact: b = !1,
							subscribeToGroupId: h,
							animate: O = !0,
							onContextMenu: y,
							onClickAvatar: v,
							onPopoutRequestClose: j,
							showAvatarPopout: P
						} = o, w = l.useRef(null), [E, N] = l.useState(!1), {
							analyticsLocations: Z
						} = (0, d.ZP)(u.Z.AVATAR), I = (0, s.e7)([S.ZP], () => {
							var e;
							return null != (e = o.displayCompactAvatars) ? e : S.ZP.displayCompactAvatars
						}), _ = (0, B.Z)(g), k = b ? 32 : 80, {
							avatarSrc: M,
							avatarDecorationSrc: D,
							eventHandlers: A
						} = (0, x.Z)({
							userId: g.author.id,
							guildId: i,
							size: k,
							animateOnHover: null != h ? !E : !O,
							showPending: !0
						}), L = g.isInteractionPlaceholder(), G = l.useMemo(() => {
							var e, t;
							return L && null == g.author.avatar && (null == (e = g.application) ? void 0 : e.icon) != null ? null != (t = R.ZP.getApplicationIconURL({
								id: g.application.id,
								icon: g.application.icon,
								size: k,
								fallbackAvatar: !1
							})) ? t : M : null != g.webhookId && null != g.author.avatar ? R.ZP.getUserAvatarURL({
								avatar: g.author.avatar,
								id: g.author.id,
								discriminator: g.author.discriminator,
								bot: !0
							}, !1, k) : M
						}, [L, g.author.avatar, g.author.id, g.author.discriminator, null == (t = g.application) ? void 0 : t.icon, null == (n = g.application) ? void 0 : n.id, g.webhookId, M, k]);
						if (l.useEffect(() => {
								if (null != h) return T.S.subscribeKeyed(F.LPv.ANIMATE_CHAT_AVATAR, "".concat(h, ":").concat(g.author.id), N), () => void T.S.unsubscribeKeyed(F.LPv.ANIMATE_CHAT_AVATAR, "".concat(h, ":").concat(g.author.id), N)
							}, [g.author.id, h]), !b || I) return null != c && null != P ? (0, r.jsx)(d.Gt, {
							value: Z,
							children: (0, r.jsx)(C.Z, {
								targetElementRef: w,
								user: g.author,
								guildId: i,
								channelId: g.channel_id,
								messageId: g.id,
								shouldShow: P,
								shouldPreload: _,
								renderPopout: c,
								position: a.tq ? "window_center" : "right",
								avatarUrl: null != f.guildMemberAvatar && null != i ? R.ZP.getGuildMemberAvatarURLSimple({
									guildId: i,
									userId: g.author.id,
									avatar: f.guildMemberAvatar,
									size: 80
								}) : g.author.getAvatarURL(void 0, 80, !1),
								onRequestClose: j,
								clickTrap: P,
								children: e => q(W(K({}, A), {
									avatarSrc: G,
									avatarDecorationSrc: D,
									compact: b,
									onClick: v,
									onContextMenu: y,
									onMouseDown: e.onMouseDown,
									onKeyDown: e.onKeyDown,
									showCommunicationDisabledStyles: p,
									className: m,
									avatarImgRef: w
								}))
							})
						}) : (0, r.jsx)(d.Gt, {
							value: Z,
							children: q(W(K({}, A), {
								avatarSrc: G,
								avatarDecorationSrc: D,
								compact: b,
								onClick: v,
								onContextMenu: y,
								onMouseDown: void 0,
								onKeyDown: void 0,
								showCommunicationDisabledStyles: p,
								className: m
							}))
						})
					}({
						props: e,
						guildId: e.guildId,
						handleRenderPopout: Z,
						showCommunicationDisabledStyles: M
					}), L = (0, s.e7)([S.ZP], () => {
						var t;
						return null != (t = e.displayCompactAvatars) ? t : S.ZP.displayCompactAvatars
					}), G = l.useMemo(() => (0, U.b)({
						message: t,
						channel: P,
						user: null == t ? void 0 : t.author,
						compact: o,
						isRepliedMessage: !1
					}), [t, P, o]), V = (0, s.e7)([E.Z], () => $(o, L, g, E.Z.getGuild(e.guildId)), [o, L, g, e.guildId]), Y = l.useMemo(() => {
						let e = [];
						return (0, I.yE)(t.flags, F.iLy.SUPPRESS_NOTIFICATIONS) && e.push((0, r.jsx)(j.Z, {}, "suppress-notifications")), t.hasPotions() && e.push((0, r.jsx)(O.Z, {
							message: t
						})), e
					}, [t]), J = (0, A.XX)(t, b), ee = (0, A.Dv)(t), et = h ? "".concat(J) : "".concat(J, " ").concat(ee), en = (null == n ? void 0 : n.state) === v.Y.LOADED ? (0, A.Gq)(t) : void 0;
					return (0, r.jsx)(Q, {
						message: t,
						avatar: D,
						username: (0, r.jsxs)(r.Fragment, {
							children: [M && (0, r.jsx)(c.ua7, {
								text: H.intl.string(H.t.AeYyLy),
								children: e => (0, r.jsxs)(r.Fragment, {
									children: [(0, r.jsx)(c.YlB, W(K({
										size: "xxs",
										color: "currentColor"
									}, e), {
										className: o ? z.compactCommunicationDisabled : z.communicationDisabled
									})), (0, r.jsx)(c.nn4, {
										children: H.intl.string(H.t.AmHag4)
									})]
								})
							}), (0, r.jsx)(X, W(K({}, e), {
								message: t,
								channel: P,
								compact: o,
								roleIconProps: g,
								renderPopout: Z,
								preview: w,
								subscribeToGroupId: b
							}))]
						}),
						usernameSpanId: (0, A.XX)(t, b),
						usernameClassName: i()(z.headerText, {
							[z.hasRoleIcon]: 0 !== V,
							[z.hasBadges]: null != G || Y.length > 0
						}),
						compact: o,
						showTimestamp: !0 !== h,
						showTimestampOnHover: m,
						ariaLabelledBy: et,
						ariaDescribedBy: en,
						className: y,
						badges: Y
					})
				})
		},
		318713: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => f
			});
			var r = n(255367),
				l = n(73800),
				o = n(120356),
				i = n.n(o),
				a = n(481060),
				s = n(55935),
				c = n(543388),
				u = n(223021),
				d = n(388032),
				p = n(848697);
			let m = l.memo(function(e) {
					let {
						children: t,
						className: n,
						compact: o = !1,
						timestamp: m,
						timestampFormat: f,
						isVisibleOnlyOnHover: b = !1,
						cozyAlt: h = !1,
						isInline: O = !0,
						id: y,
						isEdited: v = !1,
						application: j,
						tooltipPosition: P
					} = e, x = l.useMemo(() => new Date(m), [m]), w = l.useMemo(() => (0, s.Hg)(x), [x]), C = l.useMemo(() => null != f ? (0, s.vc)(x, f) : o ? (0, s.vc)(x, "LT") : (0, s.Y4)(x, !0), [x, f, o]), S = l.useMemo(() => o ? (0, u.Z)(C) : null, [o, C]), E = l.useMemo(() => v ? d.intl.formatToPlainString(d.t.CDzOFR, {
						timeFormatted: w
					}) : w, [v, w]);
					return (0, r.jsx)("span", {
						className: i()(n, S, {
							[p.timestamp]: !0,
							[p.timestampVisibleOnHover]: b,
							[p.timestampInline]: O,
							[p.alt]: h
						}),
						children: null == j ? (0, r.jsx)(a.ua7, {
							text: () => (0, s.vc)(x, "LLLL"),
							"aria-label": E,
							tooltipClassName: p.timestampTooltip,
							position: P,
							delay: 750,
							children: e => (0, r.jsx)(g, {
								tooltipProps: e,
								timeFormatted: C,
								timestamp: x,
								id: y,
								compact: o,
								children: t
							})
						}) : (0, r.jsx)(c.Z, {
							application: j,
							timestamp: x,
							compact: o,
							children: (0, r.jsx)(g, {
								timeFormatted: C,
								timestamp: x,
								id: y,
								compact: o,
								children: t
							})
						})
					})
				}),
				g = l.memo(function(e) {
					var t, n;
					let {
						tooltipProps: l,
						timeFormatted: o,
						children: i,
						compact: a,
						timestamp: s,
						id: c
					} = e;
					return (0, r.jsx)("time", (t = function(e) {
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
					}({}, l), n = n = {
						id: c,
						dateTime: s.toISOString(),
						children: null != i ? i : (0, r.jsxs)(r.Fragment, {
							children: [(0, r.jsx)("i", {
								className: p.separator,
								"aria-hidden": !0,
								children: a ? "[" : " — "
							}), o, a && (0, r.jsxs)("i", {
								className: p.separator,
								"aria-hidden": !0,
								children: ["]", " "]
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
				}),
				f = m
		},
		543388: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => p
			});
			var r = n(255367);
			n(73800);
			var l = n(913527),
				o = n.n(l),
				i = n(481060),
				a = n(925329),
				s = n(388032),
				c = n(965935);

			function u(e) {
				let {
					application: t,
					timestamp: n
				} = e;
				return (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)(a.Z, {
						size: a.Z.Sizes.LARGE,
						game: t
					}), (0, r.jsxs)("div", {
						className: c.textContainer,
						children: [(0, r.jsx)(i.Text, {
							className: c.timestamp,
							variant: "text-xs/medium",
							color: "text-muted",
							children: o()(n).format("LLLL")
						}), (0, r.jsx)(i.Text, {
							variant: "text-md/normal",
							color: "interactive-active",
							children: s.intl.format(s.t.J3s8JC, {
								applicationName: t.name
							})
						})]
					})]
				})
			}

			function d(e) {
				let {
					application: t,
					timestamp: n,
					children: l
				} = e;
				return (0, r.jsx)(i.ua7, {
					hideOnClick: !0,
					position: "top",
					"aria-label": s.intl.string(s.t["5nMcv7"]),
					tooltipClassName: c.gameMessageTooltip,
					tooltipContentClassName: c.gameMessageTooltipContent,
					text: (0, r.jsx)(u, {
						application: t,
						timestamp: n
					}),
					children: e => {
						var t, n;
						return (0, r.jsx)(i.P3F, (t = function(e) {
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
							tag: "span"
						}, e), n = n = {
							children: l
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
				})
			}

			function p(e) {
				let {
					application: t,
					timestamp: n,
					compact: l,
					children: o
				} = e;
				return (0, r.jsxs)(d, {
					application: t,
					timestamp: n,
					children: [l ? null : (0, r.jsx)(i.iWm, {
						className: c.gameIcon,
						size: "custom",
						width: 14,
						height: 14
					}), o]
				})
			}
		},
		328966: function(e, t, n) {
			"use strict";
			n.d(t, {
				H: () => s,
				Z: () => c
			});
			var r, l = n(255367);
			n(73800);
			var o = n(318713),
				i = n(388032),
				a = n(848697),
				s = ((r = {})[r.WITH_CONTENT = 0] = "WITH_CONTENT", r[r.AFTER_ACCESSORIES = 1] = "AFTER_ACCESSORIES", r);

			function c(e) {
				let {
					message: t,
					compact: n,
					location: r
				} = e;
				return t.isEdited() && null != t.editedTimestamp ? r !== (n || null != t.content && 0 !== t.content.length ? 0 : 1) ? null : (0, l.jsxs)(l.Fragment, {
					children: [" ", (0, l.jsx)(o.Z, {
						timestamp: t.editedTimestamp,
						isEdited: !0,
						isInline: !1,
						children: (0, l.jsxs)("span", {
							className: a.edited,
							children: ["(", i.intl.string(i.t.C8sXIC), ")"]
						})
					})]
				}) : null
			}
		},
		304176: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => C
			});
			var r = n(255367);
			n(73800);
			var l = n(442837),
				o = n(481060),
				i = n(493773),
				a = n(367907),
				s = n(111028),
				c = n(91218),
				u = n(829883),
				d = n(623624),
				p = n(973542),
				m = n(703656),
				g = n(592125),
				f = n(485386),
				b = n(944486),
				h = n(626135),
				O = n(524444),
				y = n(981631),
				v = n(176505),
				j = n(388032),
				P = n(854422);

			function x(e) {
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

			function w(e, t) {
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
			let C = e => {
				let {
					roleIcon: t,
					guild: n
				} = e, {
					name: C
				} = t;
				(0, i.ZP)(() => {
					h.default.track(y.rMx.OPEN_POPOUT, x({
						type: "Role Icon Popout",
						guild_id: n.id
					}, (0, a.v_)(g.Z.getChannel(b.Z.getChannelId(n.id)))))
				});
				let S = (0, l.e7)([f.Z], () => null != t.roleId ? f.Z.getRole(n.id, t.roleId) : void 0),
					E = (0, p.Z)(S),
					N = E ? j.intl.formatToPlainString(j.t.t0928f, {
						name: C
					}) : j.intl.formatToPlainString(j.t.UDDkGx, {
						name: C
					}),
					Z = w(x({}, t), {
						src: null == t.src ? t.src : (0, u.o)(t.src, 40),
						size: 40
					}),
					R = E ? () => {
						(0, m.uL)(y.Z5c.CHANNEL(n.id, v.oC.ROLE_SUBSCRIPTIONS))
					} : () => {
						(0, d.f)({
							guildId: n.id,
							location: {
								section: y.jXE.ROLE_ICON_POPOUT
							}
						})
					};
				return (0, r.jsx)(o.VqE, {
					children: (0, r.jsx)(O.W_, {
						children: (0, r.jsxs)("div", {
							className: P.popoutContainer,
							children: [(0, r.jsxs)("div", {
								className: P.mainContent,
								children: [(0, r.jsx)("div", {
									className: P.roleIconContainer,
									children: (0, r.jsx)(c.Z, w(x({}, Z), {
										enableTooltip: !1,
										className: P.__invalid_roleIcon,
										enableHeight: !1
									}))
								}), (0, r.jsxs)("div", {
									className: P.truncatingText,
									children: [(0, r.jsx)(o.X6q, {
										variant: "heading-md/semibold",
										className: P.roleName,
										children: (0, r.jsx)(s.Z, {
											children: C
										})
									}), (0, r.jsx)(o.Text, {
										variant: "text-sm/normal",
										children: N
									})]
								})]
							}), (0, r.jsx)(o.zxk, {
								size: "sm",
								variant: "secondary",
								text: j.intl.string(j.t["H930+P"]),
								onClick: R,
								icon: o.$Eu,
								fullWidth: !0,
								autoFocus: !0
							})]
						})
					})
				})
			}
		},
		223021: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => i
			}), n(35282);
			var r = n(848697);
			let l = {
					LATIN12: r.latin12CompactTimeStamp,
					LATIN24: r.latin24CompactTimeStamp,
					ASIAN: r.asianCompactTimeStamp
				},
				o = /(AM|PM)$/;

			function i(e) {
				return null != e.match(o) ? l.LATIN24 : e.length <= 5 ? l.LATIN12 : l.ASIAN
			}
		},
		488968: function(e, t, n) {
			"use strict";
			n.d(t, {
				d: () => o,
				v: () => l
			});
			var r = n(73800);
			let l = r.createContext(null);

			function o() {
				return r.useContext(l)
			}
		},
		25015: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => h
			}), n(388685);
			var r = n(255367),
				l = n(73800),
				o = n(627050),
				i = n(905405),
				a = n(626135),
				s = n(750030),
				c = n(937889),
				u = n(761910),
				d = n(488968),
				p = n(479398),
				m = n(981631),
				g = n(388032),
				f = n(875231);
			let b = l.lazy(() => Promise.all([n.e("87597"), n.e("85831")]).then(n.bind(n, 120314)));

			function h(e, t) {
				let {
					hideSimpleEmbedContent: h,
					formatInline: O = !1,
					noStyleAndInteraction: y = !1,
					isInteracting: v = !1,
					allowHeading: j = !1,
					allowList: P = !1,
					allowLinks: x = !1,
					allowDevLinks: w = !1,
					previewLinkTarget: C = !1,
					viewingChannelId: S
				} = t, E = (0, i.p)(), N = o.d.useExperiment({
					location: "useMessageRenderedContent"
				}).enabled, Z = (0, p.o)({
					location: "useMessageRenderedContent"
				}), [R, T] = l.useState(!1), I = l.useCallback(e => {
					e && T(!0)
				}, []);
				return l.useEffect(() => {
					T(!1)
				}, [e.content]), l.useMemo(() => {
					if (null != e.customRenderedContent) return e.customRenderedContent;
					if (e.isUnsupported) return {
						content: g.intl.string(g.t.sWi5ER),
						hasSpoilerEmbeds: !1
					};
					if (e.isCommandType() && 0 === e.content.length || e.hasFlag(m.iLy.LOADING)) return (0, u.Z)(e);
					if (e.type === m.uaV.CHANGELOG) {
						let {
							renderChangelogMessageMarkup: t
						} = n(55406);
						return t(e, f, {
							track: (e, t) => {
								a.default.track(e, t)
							}
						})
					}
					return Z.enabled ? {
						content: (0, r.jsx)(l.Suspense, {
							children: (0, r.jsx)(d.v.Provider, {
								value: {
									messageId: e.id,
									channelId: e.channel_id,
									viewingChannelId: S,
									guildId: (0, s.k)(e),
									setHasSpoilerEmbeds: I
								},
								children: (0, r.jsx)(b, {
									content: e.content
								})
							})
						}),
						hasSpoilerEmbeds: R
					} : (0, c.ZP)(e, {
						hideSimpleEmbedContent: h,
						formatInline: O,
						noStyleAndInteraction: y,
						isInteracting: v,
						allowHeading: j,
						allowList: P,
						allowLinks: x,
						allowDevLinks: w,
						previewLinkTarget: C,
						shouldFilterKeywords: E,
						viewingChannelId: S,
						allowGameMentions: N
					})
				}, [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, h, O, y, v, j, P, x, C, E, w, S, Z.enabled, N, R])
			}
		},
		479398: function(e, t, n) {
			"use strict";
			n.d(t, {
				o: () => l
			});
			let r = (0, n(818083).B)({
				id: "2025-04_native_markdown",
				kind: "user",
				label: "Native Markdown",
				defaultConfig: {
					enabled: !1
				},
				treatments: [{
					id: 0,
					label: "Disabled",
					config: {
						enabled: !1
					}
				}, {
					id: 1,
					label: "Enabled",
					config: {
						enabled: !0
					}
				}]
			});

			function l(e) {
				let {
					location: t
				} = e;
				return r.useExperiment({
					location: t
				})
			}
		},
		761910: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => o
			});
			var r = n(255367);
			n(73800);
			var l = n(739754);

			function o(e) {
				return {
					content: (0, r.jsx)(l.ZP, {
						message: e
					}),
					hasSpoilerEmbeds: !1
				}
			}
		},
		397589: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => y
			});
			var r = n(255367),
				l = n(73800),
				o = n(481060),
				i = n(782568),
				a = n(592125),
				s = n(594174),
				c = n(63063),
				u = n(5192),
				d = n(992970),
				p = n(111810),
				m = n(287941),
				g = n(477931),
				f = n(235894),
				b = n(981631),
				h = n(388032),
				O = n(277586);
			let y = e => {
				var t;
				let {
					message: n
				} = e, y = l.useRef(null), v = (0, p.p7)("Message Header") && n.hasPotions(), j = a.Z.getChannel(n.getChannelId()), P = null == (t = n.potions) ? void 0 : t[0], x = l.useMemo(() => {
					var e;
					if (null == P) return null;
					let t = s.default.getUser(P.used_by);
					return null != (e = (0, u.y)(null == j ? void 0 : j.getGuildId(), null == j ? void 0 : j.id, t)) ? e : null == t ? void 0 : t.globalName
				}, [P, j]), w = l.useCallback(() => {
					if (null != y.current && (0, f.Uw)(n)) {
						let {
							x: e,
							y: t,
							width: r,
							height: l
						} = y.current.getBoundingClientRect();
						(0, m.Z)(n, {
							x: e,
							y: t,
							w: r,
							h: l
						}, !0, d.LL.UserTriggered)
					}
				}, [n]), C = l.useCallback(() => {
					(0, i.Z)(c.Z.getArticleURL(b.BhN.CONFETTI_POTION))
				}, []);
				return v && null != x && (null == P ? void 0 : P.type) === g.B.CONFETTI ? (0, r.jsx)(o.P3F, {
					onFocus: w,
					onClick: C,
					"aria-label": h.intl.string(h.t.Mp5k6O),
					children: (0, r.jsx)(o.ua7, {
						text: h.intl.formatToPlainString(h.t["FE++aG"], {
							user: x
						}),
						children: e => {
							var t, n;
							return (0, r.jsxs)("div", (t = function(e) {
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
								ref: y,
								className: O.potionBadge
							}, e), n = n = {
								children: [(0, r.jsx)(o.l22, {
									size: "custom",
									color: "currentColor",
									width: 12,
									height: 12
								}), (0, r.jsx)(o.Text, {
									variant: "text-xs/bold",
									color: "currentColor",
									children: h.intl.string(h.t["8Rrro6"])
								})]
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
					})
				}) : null
			}
		},
		243317: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => a
			});
			var r = n(255367);
			n(73800);
			var l = n(481060),
				o = n(388032),
				i = n(156189);

			function a() {
				return (0, r.jsx)(l.ua7, {
					text: o.intl.string(o.t["RO/KYm"]),
					children: e => {
						var t, n;
						return (0, r.jsx)("div", (t = function(e) {
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
							className: i.badge
						}, e), n = n = {
							children: (0, r.jsx)(l.LQn, {
								color: "currentColor",
								size: "custom",
								width: "1rem",
								height: "1rem"
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
				})
			}
		},
		297047: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: () => f,
				q: () => g
			}), n(388685);
			var r = n(255367);
			n(73800);
			var l = n(442837),
				o = n(481060),
				i = n(144144),
				a = n(592125),
				s = n(496675),
				c = n(944486),
				u = n(585483),
				d = n(51144),
				p = n(981631),
				m = n(388032);

			function g(e, t) {
				let {
					id: n
				} = e, r = "@".concat(d.ZP.getUserTag(e, {
					decoration: "never"
				}));
				u.S.dispatchToLastSubscribed(p.CkL.INSERT_TEXT, {
					plainText: r,
					rawText: "<@".concat(n, ">")
				}), null != t && i.Z.startTyping(t)
			}

			function f(e, t, n) {
				let [i, u] = (0, l.Wu)([c.Z, a.Z, s.Z], () => {
					let e = c.Z.getChannelId(t),
						n = a.Z.getChannel(e);
					return [e, null != n && (n.isMultiUserDM() || s.Z.can(p.Plq.SEND_MESSAGES, n))]
				}, [t]), d = n === p.IlC.POPOUT;
				return !u || d ? null : (0, r.jsx)(o.sNh, {
					id: "mention",
					label: m.intl.string(m.t.P8tvKC),
					action: function() {
						g(e, i)
					}
				})
			}
		},
		55406: function(e, t, n) {
			"use strict";
			let r;
			n.r(t), n.d(t, {
				default: () => S,
				renderChangelogMessageMarkup: () => E
			}), n(35282), n(704826);
			var l = n(159635),
				o = n.n(l),
				i = n(800927),
				a = n(945884),
				s = n(594199),
				c = n(454585);

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

			function d(e, t) {
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
			let p = o().defaultRules.lheading,
				m = o().defaultRules.heading,
				g = o().defaultRules.link,
				f = o().defaultRules.image,
				b = o().defaultRules.list,
				h = o().defaultRules.blockQuote,
				O = o().defaultRules.paragraph,
				y = /\{(.+?)}/,
				v = /^\$(\w+?)\$/;
			r = n(235375);
			let j = e => {
					let {
						transformUpperCase: t = !1
					} = e;
					return (e, n, r) => {
						let l = y.exec(e[1]),
							i = e[1].replace(y, "");
						return t && (i = i.toUpperCase()), {
							className: null != l ? l[1] : null,
							level: "=" === e[2] ? 1 : 2,
							content: o().parseInline(n, i, r)
						}
					}
				},
				P = e => d(u({}, r.baseRules), {
					image: u({}, f, "function" == typeof r.customRules.image ? r.customRules.image(e) : r.customRules.image),
					link: u({}, g, "function" == typeof r.customRules.link ? r.customRules.link(e) : r.customRules.link),
					list: u({}, b, "function" == typeof r.customRules.list ? r.customRules.list(e) : r.customRules.list),
					interpolation: {
						order: s.ZP.order,
						match: e => v.exec(e),
						parse(e, t, n) {
							let r = n.interpolations[e[1]];
							return null == r ? {
								type: "text",
								content: e[0]
							} : {
								type: "interpolation",
								renderer: r
							}
						},
						react: e => e.renderer()
					},
					lheading: u(d(u({}, p), {
						parse: j({
							transformUpperCase: !0
						})
					}), "function" == typeof r.customRules.lheading ? r.customRules.lheading(e) : r.customRules.lheading),
					heading: u({}, m, "function" == typeof r.customRules.heading ? r.customRules.heading(e) : r.customRules.heading),
					blockQuote: u({}, h, "function" == typeof r.customRules.blockQuote ? r.customRules.blockQuote(e) : r.customRules.blockQuote),
					paragraph: u({}, O, "function" == typeof r.customRules.paragraph ? r.customRules.paragraph(e) : r.customRules.paragraph)
				}),
				x = e => ({
					lheading: u(d(u({}, p), {
						parse: j({
							transformUpperCase: !1
						})
					}), "function" == typeof r.customRules.lheading ? r.customRules.lheading(e) : r.customRules.lheading)
				}),
				w = e => d(u({}, P(e)), {
					newline: u({}, o().defaultRules.newline),
					text: s.ZP,
					list: i.Z,
					subtext: a.Z
				});

			function C(e) {
				return u({}, P(e))
			}
			let S = {
				getDefaultRules: C,
				getSpecialRules: e => u({}, P(e), x(e)),
				getMessageRules: e => u({}, w(e))
			};

			function E(e, t, n) {
				return {
					hasSpoilerEmbeds: !1,
					content: c.Z.reactParserFor(C(t))(e.content, !1, null != n ? {
						changeLog: n
					} : {})
				}
			}
		},
		235375: function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, {
				baseRules: () => j,
				customRules: () => P
			}), n(35282), n(388685);
			var r = n(255367),
				l = n(73800),
				o = n(120356),
				i = n.n(o),
				a = n(159635),
				s = n.n(a),
				c = n(481060),
				u = n(37234),
				d = n(230711),
				p = n(454585),
				m = n(703656),
				g = n(626135),
				f = n(981631),
				b = n(596401);

			function h(e) {
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
			let O = s().defaultRules.link,
				y = {
					section: f.jXE.SETTINGS_CHANGELOG
				},
				v = e => {
					let {
						level: t,
						children: n,
						className: r = null,
						styleSheet: o = {}
					} = e, a = (0, c.xSt)(), s = parseInt(t, 10), u = isNaN(s) ? 1 : s;
					return l.createElement("h".concat(a + u - 1), {
						className: i()(...null == r ? [] : r.split(" ").map(e => o[e]))
					}, n)
				},
				j = null != p.Z ? p.Z.defaultRules : null,
				P = {
					link: {
						parse(e, t, n) {
							var r, l;
							let o, i = e[2],
								a = i.startsWith("https://discordapp.com/nitro") || i.startsWith("https://discord.com/nitro"),
								s = i.startsWith("https://discordapp.com/hypesquad") || i.startsWith("https://discord.com/hypesquad"),
								p = i.startsWith("/shop/fullscreen?source=1") || i.startsWith("/activities");
							return o = a || s ? e => {
								g.default.track(f.rMx.PREMIUM_PROMOTION_OPENED, {
									location: y
								}), a ? d.Z.open(f.oAB.PREMIUM) : s && d.Z.open(f.oAB.HYPESQUAD_ONLINE), n.changeLog.track(f.rMx.CHANGE_LOG_CTA_CLICKED, {
									cta_type: "nitro"
								}), (0, c.Mr3)(b.Xd), e.preventDefault()
							} : p ? e => {
								(0, m.uL)(i), n.changeLog.track(f.rMx.CHANGE_LOG_CTA_CLICKED, h({}, g.default.getCampaignParams(i))), (0, u.Ou)(), (0, c.Mr3)(b.Xd), e.preventDefault()
							} : () => {
								n && "function" == typeof n.onLinkClick && n.onLinkClick(i), n.changeLog.track(f.rMx.CHANGE_LOG_CTA_CLICKED, h({
									target: i,
									cta_type: "inline_link"
								}, g.default.getCampaignParams(i)))
							}, r = h({}, O.parse(e, t, n)), l = l = {
								callToAction: o
							}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
								var n = Object.keys(e);
								if (Object.getOwnPropertySymbols) {
									var r = Object.getOwnPropertySymbols(e);
									n.push.apply(n, r)
								}
								return n
							})(Object(l)).forEach(function(e) {
								Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
							}), r
						},
						react: (e, t, n) => (0, r.jsx)(c.eee, {
							href: s().sanitizeUrl(e.target),
							title: e.title,
							onClick: e.callToAction,
							target: "_blank",
							className: e.callToAction ? "cta" : void 0,
							children: t(e.content, n)
						}, n.key)
					},
					lheading: e => ({
						react: (t, n, l) => (0, r.jsx)(v, {
							level: t.level,
							className: t.className,
							styleSheet: e,
							children: n(t.content, l)
						}, l.key)
					}),
					heading: {
						react: (e, t, n) => (0, r.jsx)(v, {
							level: e.level,
							children: t(e.content, n)
						}, n.key)
					},
					image: {
						react(e, t, l) {
							let o = n(595173)("./".concat(e.target));
							return (0, r.jsx)("img", {
								alt: e.alt,
								src: o
							}, l.key)
						}
					},
					blockQuote: {
						react: null == j ? void 0 : j.blockQuote.react
					},
					paragraph: {
						react: (e, t, n) => (0, r.jsx)("p", {
							children: t(e.content, n)
						}, n.key)
					}
				}
		}
	}
]);
//# sourceMappingURL=0c38280630a5615e.js.map