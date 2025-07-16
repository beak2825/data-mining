"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["89298"], {
		692701: function(e, t, n) {
			n.d(t, {
				Z: () => h
			}), n(642613), n(388685);
			var i = n(73800),
				r = n(884439),
				o = n(442837),
				l = n(567409),
				a = n(740589),
				s = n(752048),
				c = n(70956),
				u = n(709054),
				d = n(26033),
				p = n(561308);
			let f = c.Z.Millis.WEEK;

			function h(e, t) {
				let n = (0, l.N)(e),
					r = (0, o.cj)([s.Z], () => s.Z.getUserAffinitiesMap()),
					{
						treatmentType: c
					} = (0, a.ZB)(t);
				return i.useMemo(() => {
					if (null == c || null == n) return [];
					let t = n.filter(t => (0, d.dX)(t) && (0, d.m9)(t) && t.extra.application_id === e && u.default.age(t.id) < f);
					return "recency" === c ? t.sort((e, t) => u.default.compare(t.id, e.id)) : "art" === c ? t.sort((e, t) => g(r, t) - g(r, e)) : t
				}, [n, e, c, r])
			}
			let m = 30 * c.Z.Seconds.MINUTE;

			function g(e, t) {
				let n = t.participants;
				if (0 === n.length) return 0;
				let i = Math.max(...n.map(t => {
						var n;
						let i = e.get(t);
						return (null != (n = null == i ? void 0 : i.communicationProbability) ? n : 0) + 1e-4
					})),
					o = Math.exp(-(u.default.age(t.id) / 1e3 / m * .01)),
					l = t.traits.some(e => e.type !== r.N.DURATION_SECONDS),
					a = (0, p.n2)(t);
				return i * o * (1 + .6 * (l && !a ? 1 : 0))
			}
		},
		99214: function(e, t, n) {
			n.d(t, {
				e3: () => s
			}), n(781311), n(35282), n(5254);
			var i = n(271383),
				r = n(699516),
				o = n(624138),
				l = n(51144);

			function a(e) {
				return (0, o._I)(e.toLocaleLowerCase()).trim()
			}

			function s(e) {
				let t = {},
					n = r.Z.getNickname(e.id);
				null != n && (t[n] = a(n).split(" "));
				let o = l.ZP.getGlobalName(e);
				return null != o && null == t[o] && (t[o] = a(o).split(" ")), t[e.username] = a(e.username).split(" "), i.ZP.getNicknames(e.id).forEach(e => {
					null == t[e] && (t[e] = a(e).split(" "))
				}), {
					names: t,
					nick: n
				}
			}
			n(981631)
		},
		740589: function(e, t, n) {
			n.d(t, {
				ZB: () => r
			});
			let i = (0, n(818083).B)({
				kind: "user",
				id: "2025-06_cached_content_inventory_overlay",
				label: "Sidechannel cached content inventory",
				defaultConfig: {
					treatmentType: null
				},
				treatments: [{
					id: 1,
					label: "Recency",
					config: {
						treatmentType: "recency"
					}
				}, {
					id: 2,
					label: "Affinity x Recency x Traits",
					config: {
						treatmentType: "art"
					}
				}]
			});

			function r(e) {
				return i.useExperiment({
					location: e
				})
			}
		},
		614554: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var i = n(314897),
				r = n(981631);

			function o(e) {
				if (r.TPd.CALLABLE.has(e.type)) {
					var t;
					return (null == (t = e.recipients) ? void 0 : t.length) === 1 ? e.recipients[0] : null
				}
				return i.default.getId()
			}
		},
		681603: function(e, t, n) {
			n.d(t, {
				Z: () => x
			});
			var i = n(73800),
				r = n(149765),
				o = n(442837),
				l = n(367907),
				a = n(731429),
				s = n(188471),
				c = n(318885),
				u = n(592125),
				d = n(984933),
				p = n(271383),
				f = n(430824),
				h = n(496675),
				m = n(944486),
				g = n(914010),
				y = n(594174),
				O = n(237997),
				b = n(145597),
				v = n(981631);

			function E(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						i = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), i.forEach(function(t) {
						var i;
						i = n[t], t in e ? Object.defineProperty(e, t, {
							value: i,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : e[t] = i
					})
				}
				return e
			}
			class _ extends i.Component {
				componentDidUpdate(e) {
					if (this.props.locked) return null;
					let {
						selectedGuild: t,
						selectedChannel: n,
						isMemberPending: i,
						hasPreviewEnabled: r,
						postableChannelCount: o
					} = this.props;
					if (null != t && (t !== e.selectedGuild || i && !e.isMemberPending)) {
						var d, p;
						(0, c.Q)(v.rMx.GUILD_VIEWED, (d = E({}, i ? {
							is_pending: i,
							preview_enabled: r
						} : {}), p = p = {
							postable_channels: o
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(p)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var i = Object.getOwnPropertySymbols(e);
								n.push.apply(n, i)
							}
							return n
						})(Object(p)).forEach(function(e) {
							Object.defineProperty(d, e, Object.getOwnPropertyDescriptor(p, e))
						}), d)), (0, s.a)(v.rMx.GUILD_VIEWED_CLICKSTREAM, {
							guildId: t
						})
					}
					if (null != n && n !== e.selectedChannel) {
						let e = (0, a.K)(u.Z.getChannel(n), !0);
						(0, c.Q)(v.rMx.CHANNEL_OPENED, E({}, e, (0, l.$H)(n))), (0, s.a)(v.rMx.CHANNEL_OPENED_CLICKSTREAM, {
							channelId: n
						})
					}
				}
				render() {
					return null
				}
			}
			let x = o.ZP.connectStores([g.Z, m.Z, f.Z, y.default, O.default, d.ZP, h.Z, p.ZP], () => {
				var e, t, n;
				let i = g.Z.getGuildId(),
					o = m.Z.getChannelId(i),
					l = f.Z.getGuild(i),
					a = y.default.getCurrentUser(),
					s = null != (t = d.ZP.getChannels(null == l ? void 0 : l.id)[d.sH]) ? t : [],
					c = s.length > 0 ? s.filter(e => {
						let {
							channel: t
						} = e;
						return h.Z.can(r.$e(v.Plq.SEND_MESSAGES, v.Plq.VIEW_CHANNEL), t)
					}).length : 0,
					u = null != a && null != i && null != (n = null == (e = p.ZP.getMember(i, a.id)) ? void 0 : e.isPending) && n;
				return {
					selectedGuild: i,
					selectedChannel: o,
					locked: O.default.isLocked((0, b.getPID)()),
					hasPreviewEnabled: null == l ? void 0 : l.features.has(v.oNc.PREVIEW_ENABLED),
					isMemberPending: u,
					postableChannelCount: c
				}
			})(_)
		},
		906037: function(e, t, n) {
			n.d(t, {
				CR: () => l,
				eM: () => o,
				m3: () => a
			});
			var i = n(570140),
				r = n(449224);

			function o(e) {
				return !e.isPreviewingInGame && !e.locked || e.pinned
			}

			function l(e, t, n) {
				(e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || o(e) !== o(t)) && a(t, n(t))
			}

			function a(e, t) {
				var n, l;
				let a = o(e),
					s = r.Z.getGame();
				i.Z.dispatch({
					type: "OVERLAY_WIDGET_CHANGED",
					gameName: null != (n = null == s ? void 0 : s.name) ? n : null,
					gameId: null != (l = null == s ? void 0 : s.id) ? l : null,
					widgetType: e.widget,
					visible: a && t,
					locked: e.locked,
					pinned: e.pinned
				})
			}
		},
		603618: function(e, t, n) {
			n.d(t, {
				ZP: () => ei,
				lE: () => en,
				lX: () => et
			}), n(388685), n(539854), n(997841);
			var i = n(255367),
				r = n(73800),
				o = n(512722),
				l = n.n(o),
				a = n(661869),
				s = n(876215),
				c = n(884439),
				u = n(442837),
				d = n(755721),
				p = n(481060),
				f = n(278323),
				h = n(24124),
				m = n(493683),
				g = n(13245),
				y = n(99690),
				O = n(493773),
				b = n(549879),
				v = n(620662),
				E = n(835473),
				_ = n(194082),
				x = n(297781),
				I = n(656709),
				S = n(692701),
				j = n(225559),
				C = n(703656),
				N = n(93127),
				w = n(752048),
				Z = n(409057),
				P = n(199902),
				T = n(592125),
				k = n(293273),
				D = n(158776),
				A = n(699516),
				R = n(594174),
				L = n(801077),
				M = n(237997),
				z = n(630388),
				U = n(5192),
				V = n(709054),
				W = n(444295),
				G = n(388627),
				F = n(981631),
				B = n(388032),
				H = n(800621);

			function Y(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						i = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), i.forEach(function(t) {
						var i;
						i = n[t], t in e ? Object.defineProperty(e, t, {
							value: i,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : e[t] = i
					})
				}
				return e
			}

			function Q(e, t) {
				return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var i = Object.getOwnPropertySymbols(e);
						n.push.apply(n, i)
					}
					return n
				})(Object(t)).forEach(function(n) {
					Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
				}), e
			}

			function K(e) {
				let {
					entry: t,
					currentUserActivity: n,
					idx: o
				} = e, a = (0, u.e7)([R.default], () => R.default.getUser(t.author_id)), [s, c] = r.useState("unsent"), [h, y] = r.useState(!1);
				r.useEffect(() => {
					if ("sent" === s) {
						let e = setTimeout(() => y(!0), 2e3);
						return () => clearTimeout(e)
					}
				}, [s]);
				let O = null != n && (0, v.Z)(n, F.xjy.JOIN),
					E = async e => {
						if (null != a && "unsent" === s) {
							e.stopPropagation();
							try {
								if (c("sending"), O) await f.Z.sendActivityInviteUser({
									type: F.mFx.JOIN,
									userId: a.id,
									activity: n,
									location: F.Sbl.UNLOCKED_OVERLAY
								});
								else {
									var i;
									let e = await m.Z.getOrEnsurePrivateChannel(a.id),
										n = null != (i = T.Z.getChannel(e)) ? i : null;
									l()(null != n, "Send channel must be defined"), (0, C.uL)(F.Z5c.CHANNEL(n.guild_id, n.id)), (0, b.i)(F.IlC.OVERLAY, !0), !0 === t.extra.fake_inventory_item ? await (0, I.k)({
										channel: n,
										content: B.intl.formatToPlainString(B.t.UVBA9v, {
											gameName: t.extra.game_name
										}),
										whenReady: !0
									}) : await (0, I.p)({
										channel: n,
										content: B.intl.string(B.t.DwAcMz),
										entry: t,
										whenReady: !0
									})
								}
								g.Z.track(F.rMx.OVERLAY_GAME_INVITE_SENT, {
									target_user_id: a.id,
									target_content_entry_id: t.id,
									target_index: o
								}), (0, W.Ws)(F.Odu.ACTIVITY, {
									type: W.Qu.INVITE,
									value: W.bk.INVITE_SENT,
									userId: a.id
								}), c("sent")
							} catch (e) {
								c("unsent")
							}
						}
					}, _ = async () => {
						var e;
						if (null == a) return;
						let t = await m.Z.getOrEnsurePrivateChannel(a.id),
							n = null != (e = T.Z.getChannel(t)) ? e : null;
						l()(null != n, "Send channel must be defined"), (0, C.uL)(F.Z5c.CHANNEL(n.guild_id, n.id)), (0, b.i)(F.IlC.OVERLAY, !0), (0, W.Ws)(F.Odu.ACTIVITY, {
							type: W.Qu.REDIRECT,
							value: W.bk.CHAT,
							userId: a.id
						})
					}, x = O ? B.intl.string(B.t["3fRyS0"]) : B.intl.string(B.t.XHxDIS), S = O ? (0, i.jsx)(p.ejJ, {
						color: "currentColor",
						size: "sm"
					}) : (0, i.jsx)(p.Uuj, {
						color: "currentColor",
						size: "sm"
					});
				return (0, i.jsx)(p.ua7, {
					text: x,
					"aria-label": x,
					children: e => (0, i.jsx)(d.zx, Q(Y({}, e), {
						submitting: "sending" === s,
						onClick: h ? _ : E,
						className: H.inviteButton,
						wrapperClassName: H.inviteButtonWrapper,
						innerClassName: H.inviteButtonInner,
						color: d.Tt.TRANSPARENT,
						look: d.iL.FILLED,
						size: d.Ph.ICON,
						grow: !1,
						children: "sent" === s ? h ? (0, i.jsx)(p.kBi, {
							color: "currentColor",
							size: "sm"
						}) : (0, i.jsx)(p.kSu, {
							color: "currentColor",
							size: "sm"
						}) : S
					}))
				})
			}

			function X(e) {
				var t;
				let {
					entry: n,
					currentUserActivity: o
				} = e, l = (0, u.e7)([R.default], () => R.default.getUser(n.author_id)), a = null != (t = null == o ? void 0 : o.application_id) ? t : n.extra.application_id, s = (0, u.e7)([D.Z], () => null != l ? D.Z.getApplicationActivity(l.id, a) : null, [a, l]), [c, h] = r.useState("unsent");
				if (!(null != s && (0, v.Z)(s, F.xjy.JOIN))) return null;
				let m = async e => {
					if (null != l && "unsent" === c) {
						e.stopPropagation();
						try {
							h("sending"), await f.Z.sendActivityInviteUser({
								type: F.mFx.JOIN_REQUEST,
								userId: l.id,
								activity: s,
								location: F.Sbl.UNLOCKED_OVERLAY
							}), (0, W.Ws)(F.Odu.ACTIVITY, {
								type: W.Qu.INVITE,
								value: W.bk.JOIN_REQUEST_SENT,
								userId: l.id
							}), h("sent")
						} catch (e) {
							h("unsent")
						}
					}
				}, g = B.intl.string(B.t.OKsSCQ);
				return (0, i.jsx)(p.ua7, {
					text: g,
					"aria-label": g,
					children: e => (0, i.jsx)(d.zx, Q(Y({}, e), {
						submitting: "sending" === c,
						onClick: m,
						className: H.inviteButton,
						wrapperClassName: H.inviteButtonWrapper,
						innerClassName: H.inviteButtonInner,
						color: d.Tt.TRANSPARENT,
						look: d.iL.FILLED,
						size: d.Ph.ICON,
						grow: !1,
						children: "sent" === c ? (0, i.jsx)(p.kSu, {
							color: "currentColor",
							size: "sm"
						}) : (0, i.jsx)(p.V9, {
							color: "currentColor",
							size: "sm"
						})
					}))
				})
			}

			function J(e) {
				let {
					entry: t,
					currentUserActivity: n,
					idx: r
				} = e, o = (0, u.e7)([R.default], () => R.default.getUser(t.author_id)), l = (0, u.e7)([P.Z], () => null != o ? P.Z.getAnyStreamForUser(o.id) : null, [o]), {
					isMobileOnline: a,
					status: s
				} = (0, u.cj)([D.Z], () => null == o ? {
					isMobileOnline: void 0,
					status: void 0
				} : {
					isMobileOnline: D.Z.isMobileOnline(o.id),
					status: D.Z.getStatus(o.id)
				}, [o]);
				return null == o ? null : (0, i.jsxs)("div", {
					className: H.row,
					children: [(0, i.jsx)(y.Z, {
						className: H.avatar,
						user: o,
						isMobile: a,
						status: s
					}), (0, i.jsxs)("div", {
						className: H.details,
						children: [(0, i.jsxs)("div", {
							className: H.usernameWrapper,
							children: [(0, i.jsx)(p.Text, {
								className: H.username,
								variant: "text-md/medium",
								color: "header-primary",
								children: U.ZP.getName(void 0, void 0, o)
							}), null != l && (0, i.jsx)(_.ZP, {
								className: H.liveIndicator
							})]
						}), (0, i.jsx)(x.Gk, {
							location: x.Gt.OVERLAY,
							className: H.badgesContainer,
							children: [x.OV, x.wO, x.f, x.v1, x.pQ].map((e, n) => (0, i.jsx)(e, {
								entry: t
							}, "entry-".concat(n)))
						})]
					}), (0, i.jsx)(X, {
						entry: t,
						currentUserActivity: n,
						idx: r
					}), (0, i.jsx)(K, {
						entry: t,
						currentUserActivity: n,
						idx: r
					})]
				})
			}

			function q(e) {
				return new Set(e.map(e => e.author_id))
			}

			function $(e) {
				let {
					entries: t,
					currentUserActivity: n,
					className: o,
					hideHeader: l = !1
				} = e, a = (0, W.ee)(() => q(t), [t]), s = (0, W.ee)(() => new Set(Array.from(q(t)).filter(e => {
					let n = t.find(t => {
						let {
							author_id: n
						} = t;
						return e === n
					});
					return null != n && n.traits.find(e => {
						let {
							type: t
						} = e;
						return t === c.N.IS_LIVE
					})
				})), [t]), u = (0, W.ee)(() => new Set(t.map(e => e.id)), [t]);
				return (r.useEffect(() => {
					(0, W.zi)(F.Odu.ACTIVITY, {
						locked: M.default.isInstanceLocked(),
						shownUserIds: Array.from(a),
						liveUserIds: Array.from(s),
						contentInventoryIds: Array.from(u)
					})
				}, [a, s, u]), 0 === t.length) ? null : (0, i.jsxs)("div", {
					className: o,
					children: [!l && (0, i.jsx)("div", {
						className: H.contentInventoryHeader,
						children: (0, i.jsx)(p.Text, {
							variant: "text-xs/medium",
							color: "header-secondary",
							tag: "div",
							children: B.intl.string(B.t.y9eo7e)
						})
					}), t.map((e, t) => (0, i.jsx)(J, {
						idx: t,
						entry: e,
						currentUserActivity: n
					}, t))]
				})
			}

			function ee(e) {
				let {
					gamingId: t,
					maxUserShowCount: n,
					userAffinityThresholdV2: i = .0029
				} = e, o = (0, S.Z)(t, "useLiveActivityRows");
				(0, O.ZP)(() => {
					(0, N._)()
				});
				let l = (0, u.e7)([k.Z], () => null == t ? null : k.Z.getApplicationActivity(t), [t]),
					d = (0, u.Wu)([L.Z, A.Z, w.Z], () => {
						if (null == t) return [];
						let e = L.Z.nowPlayingCards,
							n = {
								v2: i
							};
						return e.reduce((e, n) => {
							if (n.type !== F.GOo.USER) return e;
							let i = n.party.currentActivities;
							if (0 === i.length) return e;
							for (let n of i) n.game.id === t && null != n.activity && e.push(n);
							return e
						}, []).filter(e => {
							let t = e.activityUser.id,
								i = A.Z.isFriend(t);
							return function(e, t, n) {
								let {
									v2: i
								} = n;
								if (null == e) return t;
								let {
									communicationProbability: r,
									dmProbability: o,
									serverMessageProbability: l,
									vcProbability: a
								} = e;
								switch (!0) {
									case r > i:
									case o > i:
									case l > i:
									case a > i:
										return !0;
									default:
										return t
								}
							}(w.Z.getUserAffinity(t), i, n)
						})
					}, [t, i]);
				return (0, O.ZP)(() => (j.L(), () => j.v())), {
					entries: r.useMemo(() => {
						let e = o.filter(e => !d.some(t => t.activityUser.id === e.author_id)),
							t = [...d.map(e => (function(e) {
								var t, n, i, r, o, l, u;
								let d = null != (o = null == (n = e.activity) || null == (t = n.timestamps) ? void 0 : t.start) ? o : Date.now();
								return {
									id: V.default.fromTimestamp(d),
									author_id: e.activityUser.id,
									extra: {
										type: "played_game_extra",
										game_name: null != (l = null == (i = e.activity) ? void 0 : i.name) ? l : e.game.name,
										application_id: null != (u = null == (r = e.activity) ? void 0 : r.application_id) ? u : e.game.id,
										fake_inventory_item: !0
									},
									content_type: s.s.PLAYED_GAME,
									author_type: a.i.USER,
									participants: e.playingMembers.map(e => e.id),
									traits: [{
										type: c.N.IS_LIVE,
										is_live: !0
									}]
								}
							})(e)), ...e];
						return null != n ? t.slice(0, n) : t
					}, [o, d, n]),
					currentUserActivity: l
				}
			}

			function et(e) {
				let t = ee(e);
				return (0, i.jsx)($, Q(Y({}, t), {
					className: e.className
				}))
			}

			function en(e) {
				let {
					activity: t,
					currentUser: n,
					showInviteButton: r = !0
				} = e, o = null != t && (0, v.Z)(t, F.xjy.JOIN), l = (0, E.q)(null == t ? void 0 : t.application_id), a = null != l && (0, z.yE)(l.flags, F.udG.EMBEDDED);
				return null == t || null == n ? null : (0, i.jsxs)(i.Fragment, {
					children: [(0, i.jsx)(Z.Z, {
						className: H.activityCard,
						activity: t,
						user: n,
						currentUser: n,
						appContext: F.IlC.OVERLAY
					}), o && !a && r ? (0, i.jsx)(d.zx, {
						className: H.inviteFriendsButton,
						onClick: () => {
							(0, h.h7)(t, !1, F.IlC.POPOUT), (0, W.Ws)(F.Odu.ACTIVITY, {
								type: W.Qu.INVITE,
								value: W.bk.PANEL_OPENED
							})
						},
						size: d.Ph.SMALL,
						color: d.Tt.PRIMARY,
						children: B.intl.string(B.t["6Qgren"])
					}) : null]
				})
			}

			function ei(e) {
				let {
					locked: t
				} = e, n = (0, G.II)(), r = null == n ? void 0 : n.id, o = null == n ? void 0 : n.altId, l = (0, S.Z)(r, "ActivityWidget"), a = (0, u.e7)([R.default], () => R.default.getCurrentUser()), s = null != o ? o : r, c = (0, u.e7)([k.Z], () => null == s ? null : k.Z.getApplicationActivity(s), [s]);
				(0, O.ZP)(() => (j.L(), () => j.v()));
				let d = ee({
					gamingId: s,
					userAffinityThresholdV2: .00145,
					maxUserShowCount: 12
				});
				return t || 0 === l.length && null == c ? null : (0, i.jsxs)("div", {
					className: H.container,
					children: [(0, i.jsx)(en, {
						activity: c,
						currentUser: a
					}), (0, i.jsx)($, Q(Y({}, d), {
						className: H.contentInventoryContainer,
						hideHeader: !0
					}))]
				})
			}
		},
		667142: function(e, t, n) {
			n.d(t, {
				Df: () => d,
				S_: () => u,
				V5: () => a,
				VX: () => l,
				ZP: () => p,
				ih: () => s,
				xc: () => c
			});
			var i = n(972959);
			let r = {
					timeToLiveMs: 5e3,
					reappearTimeMs: 1e4
				},
				o = (0, i.H)(() => r),
				l = 1e4,
				a = 2e4,
				s = 500,
				c = 1e3;

			function u(e) {
				o.setState({
					timeToLiveMs: e
				})
			}

			function d(e) {
				o.setState({
					reappearTimeMs: e
				})
			}
			let p = o
		},
		926086: function(e, t, n) {
			n.d(t, {
				Z: () => m
			}), n(388685), n(415506);
			var i = n(255367),
				r = n(73800),
				o = n(120356),
				l = n.n(o),
				a = n(348327),
				s = n.n(a),
				c = n(108542),
				u = n(481060),
				d = n(667142),
				p = n(333031),
				f = n(86654);
			let h = {
				mass: 1,
				tension: 600,
				friction: 60,
				clamp: !0
			};

			function m(e) {
				let {
					locked: t,
					pinned: n
				} = e, [o, a] = r.useState(0), [m, g] = r.useState(0), [y, O] = r.useState(0), b = r.useRef(0), [v, E] = r.useState(0), {
					timeToLiveMs: _,
					reappearTimeMs: x
				} = d.ZP.useState(e => ({
					timeToLiveMs: e.timeToLiveMs,
					reappearTimeMs: e.reappearTimeMs
				}), s()), I = {
					timeToLiveMs: _,
					reappearTimeMs: x
				}, S = r.useRef(I);
				r.useEffect(() => {
					S.current = I
				}), r.useEffect(() => (b.current = setInterval(() => {
					let e = Date.now();
					g(e), O(t => {
						if (0 === t) return e;
						let n = e - t,
							i = S.current.timeToLiveMs,
							r = i + S.current.reappearTimeMs;
						return n > i ? t + r : t
					})
				}, 100), () => {
					clearInterval(b.current)
				}), []);
				let j = () => {
						a(Date.now()), E(e => e + 1)
					},
					C = o > 0 && m - o < 1e3,
					N = (0, u.Yzy)(y > 0 && y < m && m - y < _, {
						from: {
							opacity: 0
						},
						enter: {
							opacity: 1
						},
						leave: {
							opacity: 0
						},
						config: h
					}),
					[w, Z] = r.useState(!1);
				if (r.useEffect(() => {
						v > 10 && Z(!0)
					}, [v]), w) throw Error("ClickZoneDebugWidget crashed, too many clicks");
				return t && !n ? null : (0, i.jsx)(i.Fragment, {
					children: N((e, t) => t && (0, i.jsx)(c.animated.div, {
						style: e,
						className: f.clickZoneDebugContainer,
						children: (0, i.jsx)(p.Z, {
							className: l()(f.clickZone, C && f.clickBackground),
							children: (0, i.jsx)(u.P3F, {
								onClick: j,
								className: f.clickable,
								children: (0, i.jsxs)(u.Text, {
									variant: "text-md/semibold",
									color: "always-white",
									children: ["Click Me (", v, ")"]
								})
							})
						})
					}))
				})
			}
		},
		353038: function(e, t, n) {
			n.d(t, {
				B: () => b,
				Z: () => C
			}), n(388685), n(415506);
			var i, r, o = n(255367),
				l = n(73800),
				a = n(120356),
				s = n.n(a),
				c = n(108542),
				u = n(902704),
				d = n(585483),
				p = n(434529),
				f = n(981631),
				h = n(524468);

			function m(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function g(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						i = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), i.forEach(function(t) {
						m(e, t, n[t])
					})
				}
				return e
			}

			function y(e, t) {
				return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var i = Object.getOwnPropertySymbols(e);
						n.push.apply(n, i)
					}
					return n
				})(Object(t)).forEach(function(n) {
					Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
				}), e
			}
			let O = (e, t, n, i) => Math.pow(e - n, 2) + Math.pow(t - i, 2);
			var b = ((r = {}).MOVE = "MOVE", r.RESIZE_NORTH = "RESIZE_NORTH", r.RESIZE_WEST = "RESIZE_WEST", r.RESIZE_EAST = "RESIZE_EAST", r.RESIZE_SOUTH = "RESIZE_SOUTH", r.RESIZE_NORTH_WEST = "RESIZE_NORTH_WEST", r.RESIZE_NORTH_EAST = "RESIZE_NORTH_EAST", r.RESIZE_SOUTH_WEST = "RESIZE_SOUTH_WEST", r.RESIZE_SOUTH_EAST = "RESIZE_SOUTH_EAST", r);
			let v = new Set(["RESIZE_NORTH", "RESIZE_WEST", "RESIZE_EAST", "RESIZE_SOUTH", "RESIZE_NORTH_WEST", "RESIZE_NORTH_EAST", "RESIZE_SOUTH_WEST", "RESIZE_SOUTH_EAST"]);

			function E(e, t, n) {
				let {
					width: i,
					height: r,
					fixed: o
				} = e;
				return {
					width: "auto" === i ? "auto" : Math.max(t, i),
					height: "auto" === r ? "auto" : Math.max(n, r),
					fixed: o
				}
			}

			function _(e) {
				let {
					top: t,
					left: n,
					bottom: i,
					right: r
				} = e;
				return null == n && null == r && (n = 0), null != n && null != r && (r = void 0), null == t && null == i && (t = 0), null != t && null != i && (i = void 0), {
					top: t,
					left: n,
					bottom: i,
					right: r
				}
			}

			function x(e) {
				return "auto" === e || null == e ? "auto" : "".concat(e, "px")
			}

			function I(e, t) {
				let n = 0,
					i = 0;
				return {
					width: n = "auto" === t.width ? null != e ? e.clientWidth : 0 : t.width,
					height: "auto" === t.height ? null != e ? e.clientHeight : 0 : t.height
				}
			}

			function S(e, t) {
				let {
					top: n,
					left: i,
					bottom: r,
					right: o
				} = t;
				switch (e) {
					case "RESIZE_EAST":
					case "RESIZE_NORTH_EAST":
					case "RESIZE_NORTH":
						return {
							bottom: r, left: i, right: void 0, top: void 0
						};
					case "RESIZE_WEST":
					case "RESIZE_NORTH_WEST":
						return {
							bottom: r, right: o, left: void 0, top: void 0
						};
					case "RESIZE_SOUTH_EAST":
						return {
							top: n, left: i, bottom: void 0, right: void 0
						};
					case "RESIZE_SOUTH":
					case "RESIZE_SOUTH_WEST":
						return {
							top: n, right: o, bottom: void 0, left: void 0
						};
					default:
						throw Error("getOrientedCoords: Invalid orientation: ".concat(e))
				}
			}

			function j(e) {
				let {
					computedSize: t
				} = e;
				return t
			}
			class C extends(i = l.Component) {
				shouldComponentUpdate(e, t) {
					return !(0, u.Z)(t, this.state) || !(0, u.Z)(e, this.props, ["anchor", "size", "minSize", "container"]) || !(0, u.Z)(e.anchor, this.props.anchor) || !(0, u.Z)(e.size, this.props.size) || !(0, u.Z)(e.minSize, this.props.minSize) || !(0, u.Z)(e.container, this.props.container)
				}
				componentDidMount() {
					this.setDOMPositions(_(this.props.anchor)), this.setDOMSize(E(this.props.size, this.props.minSize.width, this.props.minSize.height)), d.S.subscribe(f.CkL.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI)
				}
				componentDidUpdate(e, t) {
					null == t.operation && ((0, u.Z)(this.props.anchor, e.anchor) || this.setDOMPositions(_(this.props.anchor)), (0, u.Z)(this.props.size, e.size) || this.setDOMSize(E(this.props.size, this.props.minSize.width, this.props.minSize.height)))
				}
				componentWillUnmount() {
					this.handleOperationEnd(), d.S.unsubscribe(f.CkL.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI)
				}
				handleResizeMouseDown(e, t) {
					let {
						clientX: n,
						clientY: i
					} = e;
					e.stopPropagation(), this.handleOperationStart(t, n, i)
				}
				handleDragMove(e, t) {
					let {
						ref: {
							current: n
						},
						props: {
							id: i,
							container: {
								maxX: r,
								maxY: o,
								minX: l,
								minY: a
							},
							onDragStart: s,
							onDrag: c,
							snapOrientation: u = !0
						},
						dragState: {
							offsetX: d,
							offsetY: f
						},
						state: {
							operationStarted: h
						}
					} = this;
					if (null == n) return null;
					e = Math.max(Math.min(r, e), l), t = Math.max(Math.min(o, t), a);
					let {
						width: m,
						height: g
					} = I(n, this.size), y = t - f, O = e - d, b = (0, p.ou)((0, p.PY)({
						top: y,
						left: O,
						bottom: void 0,
						right: void 0
					}, r, o, m, g)), v = u ? (0, p.R)(b) : S("RESIZE_SOUTH_EAST", b);
					this.setDOMPositions(v), this.setState({
						operationStarted: !0,
						anchorTopOverride: null != v.top,
						anchorLeftOverride: null != v.left
					}, () => {
						h || null == s || s(), null != c && c(i, "MOVE", this.anchor, this.size)
					})
				}
				handleResizeMove(e, t) {
					let {
						props: {
							id: n,
							minSize: i,
							container: {
								maxX: r,
								maxY: o,
								minX: l,
								minY: a
							},
							onDragStart: s,
							onDrag: c,
							resizeValidation: d = j
						},
						state: {
							operation: f,
							operationStarted: h
						}
					} = this, {
						startX: m,
						startY: O
					} = this.dragState, b = 0, v = 0;
					if (null == f) return;
					switch (e = Math.max(Math.min(r, e), l), t = Math.max(Math.min(o, t), a), f) {
						case "RESIZE_EAST":
						case "RESIZE_SOUTH_EAST":
						case "RESIZE_NORTH_EAST":
							b -= m - e;
							break;
						case "RESIZE_WEST":
						case "RESIZE_SOUTH_WEST":
						case "RESIZE_NORTH_WEST":
							b += m - e
					}
					switch (f) {
						case "RESIZE_SOUTH":
						case "RESIZE_SOUTH_WEST":
						case "RESIZE_SOUTH_EAST":
							v -= O - t;
							break;
						case "RESIZE_NORTH":
						case "RESIZE_NORTH_WEST":
						case "RESIZE_NORTH_EAST":
							v += O - t
					}
					let E = d({
							padding: 8,
							borderWidth: 2,
							operation: f,
							computedSize: {
								width: Math.max(this.dragState.offsetWidth + b, i.width),
								height: Math.max(this.dragState.offsetHeight + v, i.height)
							},
							originSize: {
								width: this.dragState.offsetWidth,
								height: this.dragState.offsetHeight
							},
							containerSpecs: this.props.container,
							orientedPosition: this.dragState.dragOrientedCoords
						}),
						_ = (0, p.BL)((0, p.ou)((0, p.PY)(this.dragState.dragOrientedCoords, r, o, E.width, E.height)), this.dragState.dragOrientedCoords);
					this.setDOMSize(y(g({}, E), {
						fixed: this.size.fixed
					}), !0), (0, u.Z)(_, this.dragState.dragOrientedCoords) || (this.dragState.dragOrientedCoords = _, this.setDOMPositions(this.dragState.dragOrientedCoords)), h || (null != s && s(), this.setState({
						operationStarted: !0
					})), null != c && c(n, f, this.anchor, this.size)
				}
				setDOMPositions(e) {
					let {
						top: t,
						left: n,
						bottom: i,
						right: r
					} = e, {
						current: o
					} = this.ref;
					this.anchor = {
						top: t,
						left: n,
						bottom: i,
						right: r
					}, null != o && (o.style.top = x(t), o.style.bottom = x(i), o.style.left = x(n), o.style.right = x(r))
				}
				setDOMSize(e) {
					let {
						width: t,
						height: n,
						fixed: i
					} = e, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], {
						current: o
					} = this.ref;
					t = "auto" !== this.size.width || r ? t : "auto", n = "auto" !== this.size.height || r ? n : "auto", this.size = {
						width: t,
						height: n,
						fixed: i
					}, null != o && (o.style.width = x(t), o.style.height = x(n))
				}
				renderResizeHandles() {
					let {
						resizeY: e,
						resizeX: t,
						active: n
					} = this.props;
					return (0, o.jsxs)(o.Fragment, {
						children: [e ? (0, o.jsxs)(o.Fragment, {
							children: [(0, o.jsx)("div", {
								className: s()(h.resizeNorth, {
									[h.resizeNSCursor]: n
								}),
								onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH")
							}), (0, o.jsx)("div", {
								className: s()(h.resizeSouth, {
									[h.resizeNSCursor]: n
								}),
								onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH")
							})]
						}) : null, t ? (0, o.jsxs)(o.Fragment, {
							children: [(0, o.jsx)("div", {
								className: s()(h.resizeEast, {
									[h.resizeEWCursor]: n
								}),
								onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_EAST")
							}), (0, o.jsx)("div", {
								className: s()(h.resizeWest, {
									[h.resizeEWCursor]: n
								}),
								onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_WEST")
							})]
						}) : null, t && e ? (0, o.jsxs)(o.Fragment, {
							children: [(0, o.jsx)("div", {
								className: s()(h.resizeNorthWest, {
									[h.resizeNWSECursor]: n
								}),
								onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH_WEST")
							}), (0, o.jsx)("div", {
								className: s()(h.resizeNorthEast, {
									[h.resizeNESWCursor]: n
								}),
								onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH_EAST")
							}), (0, o.jsx)("div", {
								className: s()(h.resizeSouthWest, {
									[h.resizeNESWCursor]: n
								}),
								onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH_WEST")
							}), (0, o.jsx)("div", {
								className: s()(h.resizeSouthEast, {
									[h.resizeNWSECursor]: n
								}),
								onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH_EAST")
							})]
						}) : null]
					})
				}
				renderExtras() {
					let {
						props: {
							renderExtras: e,
							anchor: t
						},
						setLockExtras: n
					} = this, i = null == e ? void 0 : e(n);
					return null != i ? (0, o.jsx)("div", {
						className: s()({
							[h.extras]: !0,
							[h.extrasBottomOriented]: null != t.bottom,
							[h.extrasRightOriented]: null != t.right
						}),
						children: i
					}) : null
				}
				getInlineStyles() {
					let {
						props: {
							hidden: e,
							style: t,
							minSize: n,
							padding: i = 8,
							borderWidth: r = 2,
							borderRadius: o = 12
						},
						state: {
							operation: l
						}
					} = this;
					return g({}, t, {
						minWidth: n.width,
						minHeight: n.height,
						borderWidth: r,
						padding: i,
						borderRadius: o + r + i,
						zIndex: null != l ? 1e3 : void 0,
						visibility: e ? "hidden" : void 0
					})
				}
				renderChildren() {
					let {
						props: {
							children: e,
							hidden: t,
							padding: n = 8,
							borderWidth: i = 2,
							locked: r
						},
						size: o,
						anchor: l,
						setLockExtras: a,
						state: {
							anchorTopOverride: s,
							anchorLeftOverride: c
						}
					} = this;
					return e({
						dragStart: this.handleOperationStart,
						dragOperation: this.state.operation,
						anchorTop: null != s ? s : null != l.top,
						anchorLeft: null != c ? c : null != l.left,
						size: o,
						padding: n,
						borderWidth: i,
						setLockExtras: a,
						locked: r,
						hidden: t,
						showEmpty: this.state.lockExtras
					})
				}
				render() {
					let {
						props: {
							onClick: e,
							id: t,
							locked: n,
							className: i
						},
						state: {
							operationStarted: r,
							lockExtras: l
						}
					} = this;
					return (0, o.jsxs)(c.animated.div, {
						ref: this.ref,
						style: this.getInlineStyles(),
						className: s()({
							[h.wrapper]: !0,
							[h.operation]: r,
							[h.unlocked]: !n,
							[h.lockExtras]: l
						}, i),
						onMouseDown: this.handleMouseDown,
						onClick: null != e ? () => e(t) : void 0,
						children: [this.renderChildren(), this.renderResizeHandles(), this.renderExtras()]
					})
				}
				constructor(e) {
					super(e), m(this, "anchor", void 0), m(this, "size", void 0), m(this, "ref", l.createRef()), m(this, "dragState", {
						startX: 0,
						startY: 0,
						offsetX: 0,
						offsetY: 0,
						offsetWidth: 0,
						offsetHeight: 0,
						dragOrientedCoords: {
							top: 0,
							left: 0
						}
					}), m(this, "state", {
						lockExtras: !0,
						operation: null,
						operationStarted: !1,
						anchorTopOverride: void 0,
						anchorLeftOverride: void 0
					}), m(this, "handleShowUI", e => {
						let {
							show: t
						} = e;
						this.setLockExtras(t)
					}), m(this, "handleMouseDown", e => {
						e.stopPropagation();
						let {
							dragAnywhere: t
						} = this.props, {
							current: n
						} = this.ref;
						null != n && e.button === f.AeJ.PRIMARY && t && this.handleOperationStart("MOVE", e.clientX, e.clientY)
					}), m(this, "handleMouseMove", e => {
						e.preventDefault(), e.stopPropagation();
						let {
							clientX: t,
							clientY: n
						} = e, {
							dragState: {
								startX: i,
								startY: r
							},
							state: {
								operation: o,
								operationStarted: l
							}
						} = this;
						!(null == o || !l && 3 > O(i, r, t, n)) && ("MOVE" === o ? this.handleDragMove(t, n) : v.has(o) && this.handleResizeMove(t, n))
					}), m(this, "handleOperationStart", (e, t, n) => {
						let {
							ref: {
								current: i
							},
							props: {
								targetWindow: r,
								active: o,
								container: {
									maxX: l,
									maxY: a
								}
							}
						} = this;
						if (null == i || !o) return;
						let {
							width: s,
							height: c
						} = I(i, this.size), u = (0, p.PY)(this.anchor, l, a, s, c);
						if ("MOVE" === e) {
							let {
								x: e,
								y: i
							} = function(e) {
								let {
									top: t,
									left: n
								} = e;
								return {
									x: n,
									y: t
								}
							}(u);
							this.dragState = y(g({}, this.dragState), {
								startX: t,
								startY: n,
								offsetX: t - e,
								offsetY: n - i
							})
						} else {
							let i = S(e, u);
							this.setDOMPositions(i), this.dragState = y(g({}, this.dragState), {
								startX: t,
								startY: n,
								offsetWidth: s,
								offsetHeight: c,
								dragOrientedCoords: i
							})
						}
						this.setState({
							operation: e,
							operationStarted: !1
						}, () => {
							r.addEventListener("mousemove", this.handleMouseMove), r.addEventListener("mouseup", this.handleOperationEnd)
						})
					}), m(this, "handleOperationEnd", () => {
						let {
							operation: e,
							operationStarted: t
						} = this.state, {
							targetWindow: n,
							onDragEnd: i
						} = this.props;
						n.removeEventListener("mousemove", this.handleMouseMove), n.removeEventListener("mouseup", this.handleOperationEnd);
						let r = t ? () => {
							let {
								onUpdate: t,
								id: n
							} = this.props;
							t(e, n, this.anchor, this.size, I(this.ref.current, this.size))
						} : void 0;
						if (t) {
							let {
								maxX: e,
								maxY: t
							} = this.props.container, {
								width: n,
								height: r
							} = I(this.ref.current, this.size), o = (0, p.PY)(this.anchor, e, t, n, r), l = (0, p.R)(o);
							this.setDOMPositions(l), this.setDOMSize({
								width: n,
								height: r,
								fixed: this.size.fixed
							}), null != i && i()
						}
						this.setState({
							operation: null,
							operationStarted: !1
						}, r)
					}), m(this, "setLockExtras", e => {
						this.setState({
							lockExtras: e
						})
					}), this.anchor = _(e.anchor), this.size = E(e.size, e.minSize.width, e.minSize.height)
				}
			}
			m(C, "Operations", b)
		},
		878939: function(e, t, n) {
			n.d(t, {
				Z: () => m
			}), n(388685);
			var i = n(255367),
				r = n(73800),
				o = n(442837),
				l = n(638730),
				a = n(167762),
				s = n(293273),
				c = n(594174),
				u = n(444295),
				d = n(603618),
				p = n(388627),
				f = n(981631),
				h = n(852266);

			function m(e) {
				let {
					locked: t
				} = e, n = (0, p.II)(), m = null == n ? void 0 : n.id, g = null == n ? void 0 : n.altId, y = (0, o.e7)([c.default], () => c.default.getCurrentUser()), O = null != g ? g : m, [b, v] = r.useState(new Set), [E, _] = r.useState(new Set), x = r.useCallback((e, t, n) => {
					v(n => {
						if (t) {
							if (n.has(e)) return n;
							n.add(e)
						} else {
							if (!n.has(e)) return n;
							n.delete(e)
						}
						return new Set(n)
					}), _(i => {
						if (n && t) {
							if (i.has(e)) return i;
							i.add(e)
						} else {
							if (!i.has(e)) return i;
							i.delete(e)
						}
						return new Set(i)
					})
				}, []), I = (0, u.ee)(() => b, [b]), S = (0, u.ee)(() => E, [E]), j = (0, l.h)(u.zi, 3e3, []);
				r.useEffect(() => {
					0 === I.size || t || j(f.Odu.FRIENDS, {
						locked: t,
						shownUserIds: Array.from(I),
						liveUserIds: Array.from(S),
						contentInventoryIds: []
					})
				}, [I, S, t, j]);
				let C = (0, o.e7)([s.Z], () => null == O ? null : s.Z.getApplicationActivity(O), [O]),
					N = (0, r.useCallback)((e, t) => {
						let n = function(e) {
							switch (e) {
								case a.sG.OPEN_DIRECT_MESSAGE:
									return {
										type: u.Qu.FRIEND_LIST, value: u.bk.CHAT
									};
								case a.sG.ACCEPT_FRIEND_REQUEST:
									return {
										type: u.Qu.FRIEND_REQUEST, value: u.bk.ACCEPT_REQUEST
									};
								case a.sG.DECLINE_FRIEND_REQUEST:
									return {
										type: u.Qu.FRIEND_REQUEST, value: u.bk.DECLINE_REQUEST
									};
								case a.sG.CANCEL_FRIEND_REQUEST:
									return {
										type: u.Qu.FRIEND_REQUEST, value: u.bk.CANCEL_REQUEST
									};
								case a.sG.SEND_FRIEND_REQUEST:
									return {
										type: u.Qu.FRIEND_REQUEST, value: u.bk.SEND_REQUEST
									};
								case a.sG.SEND_ACTIVITY_INVITE:
									return {
										type: u.Qu.INVITE, value: u.bk.INVITE_SENT
									};
								case a.sG.ASK_TO_JOIN:
									return {
										type: u.Qu.INVITE, value: u.bk.JOIN_REQUEST_SENT
									};
								case a.sG.USER_CONTEXT_MENU:
									return {
										type: u.Qu.FRIEND_LIST, value: u.bk.SETTINGS_OPENED
									};
								case a.sG.OPEN_FRIEND_MODAL:
									return {
										type: u.Qu.FRIEND_LIST, value: u.bk.PROFILE_OPENED
									};
								case a.sG.OPEN_SETTINGS_MODAL:
									return {
										type: u.Qu.FRIEND_LIST, value: u.bk.SETTINGS_OPENED
									};
								case a.sG.SEARCH_FRIENDS:
									return {
										type: u.Qu.FRIEND_LIST, value: u.bk.SEARCH
									};
								default:
									return null
							}
						}(e);
						if (null != n) {
							var i, r;
							(0, u.Ws)(f.Odu.FRIENDS, (i = function(e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = null != arguments[t] ? arguments[t] : {},
										i = Object.keys(n);
									"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
										return Object.getOwnPropertyDescriptor(n, e).enumerable
									}))), i.forEach(function(t) {
										var i;
										i = n[t], t in e ? Object.defineProperty(e, t, {
											value: i,
											enumerable: !0,
											configurable: !0,
											writable: !0
										}) : e[t] = i
									})
								}
								return e
							}({}, n), r = r = {
								userId: t
							}, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
								var n = Object.keys(e);
								if (Object.getOwnPropertySymbols) {
									var i = Object.getOwnPropertySymbols(e);
									n.push.apply(n, i)
								}
								return n
							})(Object(r)).forEach(function(e) {
								Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(r, e))
							}), i))
						}
					}, []),
					w = (0, r.useCallback)(() => {}, []),
					Z = (0, r.useCallback)(() => (0, i.jsx)(d.lE, {
						activity: C,
						currentUser: y,
						showInviteButton: !1
					}), [C, y]);
				return t ? null : (0, i.jsx)(a.r1, {
					containerClassName: h.container,
					listClassName: h.list,
					closePopout: w,
					renderHeader: Z,
					appContext: f.IlC.OVERLAY,
					onAction: N,
					onFriendVisible: x
				})
			}
		},
		350663: function(e, t, n) {
			n.d(t, {
				IV: () => _,
				ZP: () => I,
				bt: () => b,
				fd: () => v
			}), n(388685);
			var i = n(255367),
				r = n(73800),
				o = n(120356),
				l = n.n(o),
				a = n(108542),
				s = n(481060),
				c = n(110924),
				u = n(569545),
				d = n(237997),
				p = n(444295),
				f = n(752802),
				h = n(340101),
				m = n(981631),
				g = n(678270);

			function y(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						i = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), i.forEach(function(t) {
						var i;
						i = n[t], t in e ? Object.defineProperty(e, t, {
							value: i,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : e[t] = i
					})
				}
				return e
			}

			function O(e, t) {
				return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var i = Object.getOwnPropertySymbols(e);
						n.push.apply(n, i)
					}
					return n
				})(Object(t)).forEach(function(n) {
					Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
				}), e
			}
			let b = 256,
				v = 144,
				E = e => {
					let {
						participant: t,
						width: n,
						locked: r,
						widgetId: o,
						pinned: l
					} = e;
					return (0, i.jsx)("div", {
						className: g.tileContainer,
						children: (0, i.jsx)(f.Z, {
							participant: t,
							width: n,
							locked: r,
							widgetId: o,
							pinned: l
						}, t.user.id)
					})
				};

			function _(e, t, n) {
				if (e === h.C5.VERTICAL) {
					let e = Math.max(t, b),
						n = Math.max(9 / 16 * e, v);
					return {
						tileWidth: e,
						tileHeight: n
					}
				}
				let i = Math.max(n, v);
				return {
					tileWidth: Math.max(16 / 9 * i, b),
					tileHeight: i
				}
			}
			let x = {
					mass: 1,
					tension: 250,
					friction: 18,
					clamp: !0
				},
				I = r.memo(function(e) {
					let {
						widgetId: t,
						tileWidth: n,
						tileHeight: o,
						layout: f,
						locked: b,
						activeStreams: v,
						streamParticipants: _,
						participantsVersion: I,
						pinned: S,
						padding: j,
						sizeOffset: C
					} = e, N = _.map(e => ({
						participant: e,
						key: e.user.id,
						width: n,
						height: o,
						locked: b,
						widgetId: t,
						pinned: S
					})), w = (0, c.Z)(n), Z = (0, c.Z)(b), P = f === h.C5.VERTICAL, T = b || Z !== b || w !== n, k = 0, D = 0, A = (0, s.Yzy)(P ? N.map((e, t) => O(y({}, e), {
						y: (k += e.height + (t > 0 ? j : 0)) - e.height,
						x: 0
					})) : N.map((e, t) => O(y({}, e), {
						x: (D += e.width + (t > 0 ? j : 0)) - e.width,
						y: 0
					})), {
						key: e => e.key,
						from: {
							height: 0,
							opacity: 0
						},
						leave: {
							height: 0,
							opacity: 0
						},
						enter: e => {
							let {
								x: t,
								y: n,
								width: i,
								height: r
							} = e;
							return {
								x: t,
								y: n,
								width: i,
								height: r,
								opacity: 1
							}
						},
						update: e => {
							let {
								x: t,
								y: n,
								width: i,
								height: r
							} = e;
							return {
								x: t,
								y: n,
								width: i,
								height: r
							}
						},
						config: x,
						trail: 100 * !T
					}, T ? "animate-never" : "respect-motion-settings"), R = (0, p.ee)(() => new Set(_.map(e => e.user.id)), [_, I]), L = (0, p.ee)(() => new Set(_.filter(e => v.has((0, u.V9)(e.stream))).map(e => e.user.id)), [_, v, I]);
					return r.useEffect(() => {
						0 !== R.size && (0, p.zi)(m.Odu.GO_LIVE, {
							locked: d.default.isInstanceLocked(),
							shownUserIds: Array.from(R),
							liveUserIds: Array.from(L),
							contentInventoryIds: []
						})
					}, [R, L]), (0, i.jsx)("div", {
						className: l()({
							[g.gridContainer]: !0,
							[g.vertical]: P,
							[g.horizontal]: !P
						}),
						style: P ? {
							height: k
						} : {
							width: D
						},
						children: A((e, t, r, l) => (0, i.jsx)(a.animated.div, {
							className: g.gridItem,
							style: Object.assign({}, e, {
								width: n,
								height: o,
								zIndex: N.length - l
							}),
							children: E(t)
						}))
					})
				})
		},
		1226: function(e, t, n) {
			n.d(t, {
				BO: () => u,
				cq: () => p,
				gI: () => f,
				xN: () => h,
				yA: () => d
			});
			var i = n(348327),
				r = n.n(i),
				o = n(972959),
				l = n(569545);

			function a(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						i = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), i.forEach(function(t) {
						var i;
						i = n[t], t in e ? Object.defineProperty(e, t, {
							value: i,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : e[t] = i
					})
				}
				return e
			}

			function s(e, t) {
				return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var i = Object.getOwnPropertySymbols(e);
						n.push.apply(n, i)
					}
					return n
				})(Object(t)).forEach(function(n) {
					Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
				}), e
			}
			let c = (0, o.H)(() => ({
				streams: {}
			}));

			function u(e) {
				var t, n;
				let i = (0, l.V9)(e);
				return null != (n = null == (t = c.useState(e => e.streams, r())[i]) ? void 0 : t.zoom) ? n : 100
			}

			function d(e) {
				return u(e) / 100
			}

			function p(e, t) {
				let n = (0, l.V9)(e);
				c.setState(e => {
					var i;
					return s(a({}, e), {
						streams: s(a({}, e.streams), {
							[n]: {
								zoom: t,
								fitOverride: null == (i = e.streams[n]) ? void 0 : i.fitOverride
							}
						})
					})
				}, !0)
			}

			function f(e, t) {
				let n = (0, l.V9)(e);
				c.setState(e => {
					var i;
					return s(a({}, e), {
						streams: s(a({}, e.streams), {
							[n]: {
								zoom: null == (i = e.streams[n]) ? void 0 : i.zoom,
								fitOverride: t
							}
						})
					})
				})
			}

			function h(e) {
				var t;
				let n = (0, l.V9)(e);
				return null == (t = c.useState(e => e.streams, r())[n]) ? void 0 : t.fitOverride
			}
		},
		752802: function(e, t, n) {
			n.d(t, {
				Z: () => z
			}), n(388685);
			var i = n(255367),
				r = n(73800),
				o = n(120356),
				l = n.n(o),
				a = n(399606),
				s = n(46973),
				c = n(481060),
				u = n(846027),
				d = n(239091),
				p = n(765250),
				f = n(872810),
				h = n(40851),
				m = n(414910),
				g = n(194082),
				y = n(871118),
				O = n(172751),
				b = n(352978),
				v = n(833519),
				E = n(839662),
				_ = n(199902),
				x = n(314897),
				I = n(131951),
				S = n(594174),
				j = n(5192),
				C = n(444295),
				N = n(1226),
				w = n(981631),
				Z = n(388032),
				P = n(652156);

			function T(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						i = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), i.forEach(function(t) {
						var i;
						i = n[t], t in e ? Object.defineProperty(e, t, {
							value: i,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : e[t] = i
					})
				}
				return e
			}

			function k(e, t) {
				return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var i = Object.getOwnPropertySymbols(e);
						n.push.apply(n, i)
					}
					return n
				})(Object(t)).forEach(function(n) {
					Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
				}), e
			}

			function D(e, t) {
				if (null == e) return {};
				var n, i, r = function(e, t) {
					if (null == e) return {};
					var n, i, r = {},
						o = Object.keys(e);
					for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
					return r
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (i = 0; i < o.length; i++) n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
				}
				return r
			}

			function A(e) {
				let {
					participant: t
				} = e, n = t.user.id, o = (0, a.e7)([I.Z], () => {
					let e = (0, m.Z)(t.type);
					return I.Z.isLocalMute(t.user.id, e)
				}, [t]), l = (0, a.e7)([x.default], () => x.default.getId()), {
					hasVideo: d
				} = (0, E.Z)(t, l), p = o && d, f = r.useCallback(() => {
					u.Z.toggleLocalMute(n, s.Yn.STREAM)
				}, [n]);
				return (0, i.jsx)(c.ua7, {
					text: p ? Z.intl.string(Z.t.YqAjX1) : Z.intl.string(Z.t["w4m94+"]),
					children: e => {
						var {
							onClick: n
						} = e, r = D(e, ["onClick"]);
						return (0, i.jsx)(c.P3F, k(T({}, r), {
							className: P.controlAction,
							onClick: e => {
								e.stopPropagation(), (0, C.Ws)(w.Odu.GO_LIVE, {
									type: C.Qu.AUDIO,
									value: p ? C.bk.ENABLED : C.bk.DISABLED,
									userId: t.user.id
								}), null == n || n(), f()
							},
							children: p ? (0, i.jsx)(c.OyP, {
								size: "sm",
								color: "currentColor"
							}) : (0, i.jsx)(c.gj8, {
								size: "sm",
								color: "currentColor"
							})
						}))
					}
				})
			}

			function R(e, t, r) {
				return o => {
					(0, C.Ws)(w.Odu.GO_LIVE, {
						type: C.Qu.GO_LIVE,
						value: C.bk.SETTINGS_OPENED,
						userId: e.user.id
					}), o.stopPropagation(), null == r || r(), (0, d.jW)(o, async () => {
						let {
							default: r
						} = await n.e("5704").then(n.bind(n, 360429));
						return n => (0, i.jsx)(r, k(T({}, n), {
							stream: e.stream,
							exitFullscreen: () => {},
							appContext: t
						}))
					})
				}
			}

			function L(e) {
				let {
					hasActiveStream: t,
					participant: n,
					onEnablePin: r
				} = e, o = (0, h.bp)(), s = n.user, u = (0, a.e7)([S.default], () => {
					var e;
					return null != (e = S.default.getUser(s.id)) ? e : s
				}, [s]), d = t ? Z.intl.string(Z.t.tLxK4u) : Z.intl.string(Z.t.E5RDnJ);
				return (0, i.jsxs)(i.Fragment, {
					children: [(0, i.jsx)("div", {
						className: l()(P.controlBackground, {
							[P.controlsWithActiveStream]: t
						})
					}), !t && (0, i.jsx)("div", {
						className: P.watchActionContainer,
						children: (0, i.jsx)(c.ua7, {
							text: d,
							children: e => (0, i.jsxs)(c.P3F, k(T({}, e), {
								className: P.watchButton,
								onClick: () => {
									var t;
									null == (t = e.onClick) || t.call(e), (0, f.rn)(n.stream, {
										forceMultiple: !0,
										noFocus: !0
									}), r(), (0, C.Ws)(w.Odu.GO_LIVE, {
										type: C.Qu.GO_LIVE,
										value: C.bk.ENABLED,
										userId: n.user.id
									})
								},
								children: [(0, i.jsx)(c.Text, {
									variant: "text-sm/semibold",
									color: "always-white",
									children: Z.intl.string(Z.t["I6JG4+"])
								}), (0, i.jsx)(c.OgY, {
									size: "sm",
									color: "currentColor"
								})]
							}))
						})
					}), (0, i.jsxs)("div", {
						className: P.controls,
						children: [(0, i.jsx)("div", {
							className: P.controlUser,
							children: (0, i.jsxs)("div", {
								className: P.controlUserContainer,
								children: [(0, i.jsx)(c.pzj, {
									size: "xs",
									color: c.TVs.colors.INTERACTIVE_ACTIVE
								}), (0, i.jsx)(c.Text, {
									variant: "text-md/medium",
									color: "always-white",
									className: P.controlUserName,
									children: j.ZP.getName(n.stream.guildId, n.stream.channelId, s)
								}), (0, i.jsx)(O.ZP, {
									primaryGuild: u.primaryGuild,
									userId: u.id,
									containerClassName: P.guildTag,
									inline: !1,
									onShowProfile: () => {
										(0, C.Ws)(w.Odu.GO_LIVE, {
											type: C.Qu.GO_LIVE,
											value: C.bk.GUILD_PROFILE_OPENED,
											userId: n.user.id
										})
									}
								})]
							})
						}), (0, i.jsx)("div", {
							className: P.controlActions,
							children: t && (0, i.jsxs)(i.Fragment, {
								children: [(0, i.jsx)(A, {
									participant: n
								}), (0, i.jsx)(c.ua7, {
									text: Z.intl.string(Z.t["3D5yo6"]),
									children: e => {
										var {
											onClick: t
										} = e, r = D(e, ["onClick"]);
										return (0, i.jsx)(c.P3F, k(T({}, r), {
											className: P.controlAction,
											onClick: R(n, o, t),
											children: (0, i.jsx)(c.xhG, {
												size: "sm",
												color: "currentColor"
											})
										}))
									}
								})]
							})
						})]
					})]
				})
			}
			let M = new Set([w.jm8.ENDED, w.jm8.FAILED, w.jm8.PAUSED]),
				z = r.memo(function(e) {
					let {
						participant: t,
						width: n,
						locked: r,
						widgetId: o,
						pinned: l
					} = e, s = (0, a.e7)([_.Z], () => _.Z.getActiveStreamForUser(t.user.id, t.stream.guildId), [t.user.id, t.stream.guildId]), u = (0, h.bp)(), d = null != s && M.has(s.state), f = null != s, m = (0, N.yA)(t.stream), O = (0, N.xN)(t.stream);
					return !f && r || d ? null : (0, i.jsxs)("div", {
						className: P.tile,
						children: [f && !r && (0, i.jsx)(g.ZP, {
							size: g.ZP.Sizes.SMALL,
							className: P.liveIndicator
						}), f ? (0, i.jsx)("div", {
							className: P.streamTile,
							children: (0, i.jsx)(c.kL8, {
								"aria-label": Z.intl.formatToPlainString(Z.t.gHPz3d, {
									streamerName: t.user.username
								}),
								onClick: () => {},
								onContextMenu: R(t, u),
								className: P.streamTile,
								style: {
									transform: "scale(".concat(m, ")")
								},
								children: (0, i.jsx)(v.Z, {
									participant: t,
									width: n,
									fit: null != O ? O : b.L.CONTAIN,
									inPopout: !0,
									focused: !r,
									selected: !1,
									wrapperClassName: r ? P.streamTileWrapper : void 0,
									inOverlayPopout: !0
								})
							})
						}) : (0, i.jsx)("div", {
							className: P.streamPreview,
							children: (0, i.jsx)(y.Z, {
								noText: !0,
								className: P.absoluteFill,
								stream: t.stream
							})
						}), r ? null : (0, i.jsx)(L, {
							participant: t,
							hasActiveStream: f,
							onEnablePin: () => {
								l || (0, p.xh)(o)
							}
						})]
					})
				})
		},
		761374: function(e, t, n) {
			n.d(t, {
				Z: () => L,
				w: () => A
			}), n(388685), n(642613);
			var i = n(255367),
				r = n(73800),
				o = n(442837),
				l = n(481060),
				a = n(765250),
				s = n(13245),
				c = n(393238),
				u = n(493773),
				d = n(358221),
				p = n(569545),
				f = n(522474),
				h = n(199902),
				m = n(314897),
				g = n(592125),
				y = n(355863),
				O = n(944486),
				b = n(353038),
				v = n(804570),
				E = n(350663),
				_ = n(610394),
				x = n(461393),
				I = n(340101),
				S = n(501787),
				j = n(388032),
				C = n(832985);

			function N(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						i = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), i.forEach(function(t) {
						var i;
						i = n[t], t in e ? Object.defineProperty(e, t, {
							value: i,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : e[t] = i
					})
				}
				return e
			}

			function w(e, t) {
				if (null == e) return {};
				var n, i, r = function(e, t) {
					if (null == e) return {};
					var n, i, r = {},
						o = Object.keys(e);
					for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
					return r
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (i = 0; i < o.length; i++) n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
				}
				return r
			}
			let Z = [],
				P = (e, t) => ({
					fixed: !0,
					width: e,
					height: t
				}),
				T = P(E.bt, E.fd);

			function k(e, t, n, i, r) {
				let {
					padding: o,
					sizeOffset: l
				} = r, a = Math.max(1, i), s = (a - 1) * o, c = t * a + s, u = n * a + s;
				return e === I.C5.HORIZONTAL ? u = n : c = t, P(c + l, u + l)
			}

			function D(e, t, n) {
				return k(e, E.bt, E.fd, t, n)
			}
			let A = e => {
				let {
					operation: t,
					computedSize: n,
					originSize: i,
					borderWidth: r,
					padding: o,
					containerSpecs: l
				} = e, a = 2 * r + 2 * o, s = Math.max(1, i.width - a) / Math.max(1, i.height - a), c = (() => {
					switch (t) {
						case b.B.RESIZE_NORTH:
						case b.B.RESIZE_SOUTH:
							return {
								height: n.height, width: Math.round((n.height - a) * s + a)
							};
						default:
							return {
								width: n.width, height: Math.round((n.width - a) / s + a)
							}
					}
				})();
				return (0, x.S)(c, s, a, {
					maxWidth: .75 * l.maxX,
					maxHeight: .75 * l.maxY
				})
			};

			function R(e) {
				var {
					widgetId: t,
					size: n,
					borderWidth: i,
					padding: r,
					minSize: o,
					containerSpecs: l
				} = e, s = w(e, ["widgetId", "size", "borderWidth", "padding", "minSize", "containerSpecs"]);
				let {
					width: c,
					height: u
				} = A(N({
					operation: b.B.RESIZE_NORTH,
					computedSize: {
						width: n.width,
						height: n.height
					},
					originSize: {
						width: n.width,
						height: n.height
					},
					borderWidth: i,
					padding: r,
					containerSpecs: l
				}, s)), {
					width: d,
					height: p
				} = A(N({
					operation: b.B.RESIZE_NORTH,
					computedSize: {
						width: o.width,
						height: o.height
					},
					originSize: {
						width: o.width,
						height: o.height
					},
					borderWidth: i,
					padding: r,
					containerSpecs: l
				}, s));
				(0, a.nv)({
					widgetId: t,
					size: {
						fixed: n.fixed,
						width: c,
						height: u
					},
					minSize: {
						width: d,
						height: p
					}
				})
			}

			function L(e) {
				var t, n, a, b, x, P;
				let {
					id: A,
					widget: L,
					size: M,
					locked: z,
					padding: U,
					borderWidth: V,
					opacity: W,
					horizontal: G,
					pinned: F,
					anchorTop: B,
					anchorLeft: H,
					showEmpty: Y = !0
				} = e, Q = 2 * U + 2 * V, {
					width: K,
					height: X
				} = {
					width: "number" == typeof M.width ? M.width : E.bt,
					height: "number" == typeof M.height ? M.height : E.fd
				}, J = (0, o.e7)([O.Z], () => O.Z.getVoiceChannelId()), {
					width: q = K - Q,
					height: $ = X - Q,
					ref: ee
				} = (0, c.ZP)(), et = (0, o.e7)([y.Z], () => {
					var e;
					let t = y.Z.getWidget(A);
					return !!(0, I.ZL)(t) && !z && (null == (e = t.meta.showAllStreams) || e)
				}, [A, z]), en = !G, ei = (0, o.e7)([g.Z], () => g.Z.getChannel(J)), er = (0, o.e7)([m.default], () => m.default.getId()), {
					streamParticipants: eo,
					activeStreams: el,
					participantsVersion: ea
				} = (x = B && en || H && G, P = !B && en || !H && G, (0, o.cj)([h.Z, d.Z], () => {
					if (null == J) return {
						streamParticipants: Z,
						participantsVersion: -1,
						activeStreams: new Set
					};
					let e = new Set(h.Z.getAllActiveStreamsForChannel(J).map(e => (0, p.V9)(e))),
						t = t => e.has((0, p.V9)(t.stream)),
						n = d.Z.getStreamParticipants(J).filter(e => e.user.id !== er && (!!et || t(e)));
					return n.sort((e, n) => {
						if (x) {
							if (t(e) && !t(n)) return -1;
							if (!t(e) && t(n)) return 1
						} else if (P) {
							if (t(e) && !t(n)) return 1;
							if (!t(e) && t(n)) return -1
						}
						return e.user.username.localeCompare(n.user.username)
					}), {
						streamParticipants: n,
						activeStreams: e,
						participantsVersion: d.Z.getParticipantsVersion(J)
					}
				}, [J, er, et, x, P])), es = eo.length, ec = null == ei || 0 === el.size && z || 0 === es && !z, eu = G ? I.C5.HORIZONTAL : I.C5.VERTICAL, ed = {
					containerWidth: q,
					containerHeight: $
				}, {
					tileWidth: ep,
					tileHeight: ef
				} = function(e, t, n) {
					let {
						tileWidth: i,
						tileHeight: o
					} = (0, E.IV)(n, t.containerWidth, t.containerHeight), [l, a] = r.useState(i), [s, c] = r.useState(o);
					return r.useEffect(() => {
						e || (a(i), c(o))
					}, [e, i, o]), {
						tileWidth: e ? l : i,
						tileHeight: e ? s : o
					}
				}(z, ed, eu), eh = (0, o.e7)([f.Z], () => f.Z.getWindowState(S.$J)), em = {
					id: A,
					widget: L,
					layout: eu,
					participants: eo.length,
					containerSize: ed,
					tileSize: {
						tileWidth: ep,
						tileHeight: ef
					},
					sizeOffset: Q,
					padding: U,
					borderWidth: V,
					containerSpecs: {
						maxX: null != (t = null == eh ? void 0 : eh.width) ? t : K - Q,
						maxY: null != (n = null == eh ? void 0 : eh.height) ? n : X - Q,
						minX: 0,
						minY: 0
					},
					orientedPosition: {
						top: 0,
						left: 0,
						bottom: null != (a = null == eh ? void 0 : eh.height) ? a : X,
						right: null != (b = null == eh ? void 0 : eh.width) ? b : K
					}
				};
				return (r.useEffect(() => {
					s.Z.setGpuBoostRequested(_.zS.OVERLAY_VIDEO_STREAM_RENDERING, !ec)
				}, [ec]), (0, u.ZP)(() => () => {
					s.Z.setGpuBoostRequested(_.zS.OVERLAY_VIDEO_STREAM_RENDERING, !1)
				}), function(e) {
					let {
						streamParticipants: t,
						layout: n,
						widgetLayoutSpecs: i
					} = e, o = r.useRef(i);
					r.useEffect(() => {
						o.current = i
					});
					let l = t.length;
					r.useLayoutEffect(() => {
						let e = o.current,
							{
								id: t,
								containerSize: n,
								tileSize: i,
								sizeOffset: r,
								layout: a,
								padding: s,
								widget: c
							} = e,
							u = w(e, ["id", "containerSize", "tileSize", "sizeOffset", "layout", "padding", "widget"]);
						if (null == c) return;
						if (0 === l) return void R(N({
							widgetId: t,
							size: T,
							minSize: D(a, 1, {
								padding: s,
								sizeOffset: r
							}),
							padding: s,
							widget: c
						}, u));
						let {
							tileWidth: d,
							tileHeight: p
						} = i;
						R(N({
							widgetId: t,
							size: k(a, d, p, l, {
								padding: s,
								sizeOffset: r
							}),
							minSize: D(a, l, {
								padding: s,
								sizeOffset: r
							}),
							padding: s,
							widget: c
						}, u))
					}, [l]), r.useLayoutEffect(() => {
						if (o.current.participants <= 1) return;
						let e = o.current,
							{
								id: t,
								sizeOffset: i,
								containerSize: r,
								padding: l,
								participants: a,
								widget: s
							} = e,
							c = w(e, ["id", "sizeOffset", "containerSize", "padding", "participants", "widget"]);
						null != s && R(N({
							widgetId: t,
							size: D(n, a, {
								padding: l,
								sizeOffset: i
							}),
							minSize: D(n, a, {
								padding: l,
								sizeOffset: i
							}),
							padding: l,
							widget: s
						}, c))
					}, [n]), (0, u.zq)(() => {
						let e = o.current,
							{
								id: t,
								sizeOffset: i,
								widget: r,
								padding: l
							} = e,
							a = w(e, ["id", "sizeOffset", "widget", "padding"]);
						null != r && R(N({
							widgetId: t,
							size: T,
							minSize: D(n, 0, {
								padding: l,
								sizeOffset: i
							}),
							padding: l,
							widget: r
						}, a))
					})
				}({
					id: A,
					streamParticipants: eo,
					layout: eu,
					widgetLayoutSpecs: em
				}), (ec || !F) && z) ? null : ec && !z ? Y ? z ? null : (0, i.jsx)(v.E, {
					emptyText: j.intl.string(j.t["T6+rX1"]),
					icon: l.hGI,
					absolute: !0
				}) : null : (0, i.jsx)("div", {
					className: C.goLiveGridContainer,
					style: {
						opacity: W
					},
					ref: ee,
					children: (0, i.jsx)(E.ZP, {
						widgetId: A,
						tileWidth: ep,
						tileHeight: ef,
						locked: z,
						layout: eu,
						activeStreams: el,
						streamParticipants: eo,
						participantsVersion: ea,
						pinned: F,
						padding: U,
						sizeOffset: Q
					})
				})
			}
		},
		915614: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var i = n(255367);
			n(73800);
			var r = n(120356),
				o = n.n(r),
				l = n(481060),
				a = n(809357),
				s = n(514835);

			function c(e) {
				let {
					onClick: t,
					keybind: n,
					className: r,
					IconComponent: c
				} = e, u = (0, a.o)();
				return (0, i.jsxs)("div", {
					className: o()(s.buttonContainer, r),
					children: [(0, i.jsx)(l.P3F, {
						className: s.button,
						onClick: t,
						"aria-hidden": !0,
						children: (0, i.jsx)(c, {
							size: "md",
							color: "currentColor",
							"aria-hidden": !0
						})
					}), null != n && u ? (0, i.jsx)(l.Text, {
						className: s.keybind,
						"aria-hidden": !0,
						variant: "text-xxs/bold",
						color: "interactive-normal",
						children: n
					}) : null]
				})
			}
		},
		44359: function(e, t, n) {
			n.d(t, {
				Z: () => a
			});
			var i = n(255367);
			n(73800);
			var r = n(120356),
				o = n.n(r),
				l = n(479221);

			function a(e) {
				let {
					keybind: t,
					className: n
				} = e;
				return (0, i.jsx)(i.Fragment, {
					children: t.map((e, t) => (0, i.jsx)("span", {
						className: o()(l.key, n),
						children: e
					}, t))
				})
			}
		},
		554370: function(e, t, n) {
			n.d(t, {
				Z: () => er
			}), n(539854), n(388685);
			var i = n(255367),
				r = n(73800),
				o = n(120356),
				l = n.n(o),
				a = n(442837),
				s = n(952265),
				c = n(481060),
				u = n(239091),
				d = n(13245),
				p = n(100527),
				f = n(906732),
				h = n(70097),
				m = n(74299),
				g = n(199902),
				y = n(592125),
				O = n(430824),
				b = n(131951),
				v = n(944486),
				E = n(556296),
				_ = n(808506),
				x = n(237997),
				I = n(451478),
				S = n(585483),
				j = n(358085),
				C = n(13140),
				N = n(145597),
				w = n(830917),
				Z = n(486016),
				P = n(32300),
				T = n(681603),
				k = n(915614),
				D = n(268861),
				A = n(690336),
				R = n(333031),
				L = n(371651),
				M = n(624864),
				z = n(610394),
				U = n(388627),
				V = n(319414),
				W = n(561064),
				G = n(987650),
				F = n(757744),
				B = n(981631),
				H = n(960972);
			let Y = !j.isPlatformEmbedded && !1,
				Q = Y ? (0, i.jsx)(h.Z, {
					src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
					className: H.videoDev,
					autoPlay: !0,
					loop: !0,
					muted: !0
				}) : null,
				K = null;

			function X(e) {
				e.preventDefault()
			}

			function J(e) {
				(0, u.jW)(e, async () => {
					let {
						default: e
					} = await n.e("17610").then(n.bind(n, 385620));
					return t => {
						var n, r;
						return (0, i.jsx)(e, (n = function(e) {
							for (var t = 1; t < arguments.length; t++) {
								var n = null != arguments[t] ? arguments[t] : {},
									i = Object.keys(n);
								"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
									return Object.getOwnPropertyDescriptor(n, e).enumerable
								}))), i.forEach(function(t) {
									var i;
									i = n[t], t in e ? Object.defineProperty(e, t, {
										value: i,
										enumerable: !0,
										configurable: !0,
										writable: !0
									}) : e[t] = i
								})
							}
							return e
						}({}, t), r = r = {
							layoutId: F.$S,
							version: F.HN
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var i = Object.getOwnPropertySymbols(e);
								n.push.apply(n, i)
							}
							return n
						})(Object(r)).forEach(function(e) {
							Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
						}), n))
					}
				})
			}
			let q = r.memo(function(e) {
					let {
						keybind: t,
						onClick: n,
						locked: r
					} = e;
					return (0, i.jsx)(c.P3F, {
						className: l()(H.overlayBackground, {
							[H.overlayActive]: !r,
							[H.overlayLocked]: r
						}),
						onMouseDown: e => {
							let {
								currentTarget: t,
								target: i,
								button: r
							} = e;
							r === B.AeJ.PRIMARY && t === i && n()
						},
						onContextMenu: J,
						children: r ? null : (0, i.jsx)(R.Z, {
							className: H.closeContainer,
							children: (0, i.jsx)(k.Z, {
								keybind: t,
								onClick: n,
								IconComponent: c.Uz9
							})
						})
					})
				}),
				$ = r.memo(function(e) {
					let {
						locked: t,
						focused: n
					} = e;
					return t && n ? (0, i.jsx)(R.Z, {
						className: H.closeContainer,
						children: (0, i.jsx)(k.Z, {
							onClick: () => d.Z.setInputLocked(!1, (0, N.getPID)()),
							IconComponent: c.d$P
						})
					}) : null
				});

			function ee() {
				d.Z.setInputLocked(!0, (0, N.getPID)())
			}

			function et() {
				d.Z.setFocusedPID(N.DEV_PID)
			}

			function en() {
				d.Z.setFocusedPID(null)
			}

			function ei(e) {
				let t = z.ZP.isInputLocked((0, N.getPID)());
				"alt" !== e.key.toLowerCase() || t || ("keyup" === e.type.toLowerCase() ? S.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, {
					show: !0
				}) : "keydown" === e.type.toLowerCase() && S.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, {
					show: !1
				}))
			}

			function er(e) {
				let {
					isEmbeddedActivity: t
				} = e, n = (0, W.Z)(), {
					locked: o,
					focused: u,
					incompatibleApp: h,
					hasZeroSizeDimension: j,
					keybind: k
				} = (0, a.cj)([z.ZP, x.default, I.Z, E.ZP], () => {
					let e = I.Z.windowSize((0, w.ZY)(n)),
						t = E.ZP.getOverlayKeybind(),
						i = (0, N.getPID)();
					return {
						locked: z.ZP.isInputLocked(i),
						focused: z.ZP.isFocused(i),
						incompatibleApp: x.default.incompatibleApp,
						hasZeroSizeDimension: 0 === e.height || 0 === e.width,
						keybind: null != t ? (0, C.BB)(t.shortcut, !0) : "???"
					}
				}, [n]), {
					analyticsLocations: R
				} = (0, f.ZP)(p.Z.OVERLAY);
				return ! function(e, t) {
					let n = r.useRef({
						mount: e,
						unmount: t
					});
					r.useEffect(() => {
						n.current = {
							mount: e,
							unmount: t
						}
					}), r.useEffect(() => (n.current.mount(), () => {
						n.current.unmount()
					}), [])
				}(() => {
					d.Z.overlayReady((0, N.getPID)()), n.addEventListener("keydown", ei), n.addEventListener("keyup", ei), Y && (n.document.hasFocus() && d.Z.setFocusedPID(N.DEV_PID), n.addEventListener("focus", et), n.addEventListener("blur", en))
				}, () => {
					n.removeEventListener("keydown", ei), n.removeEventListener("keyup", ei), Y && (n.removeEventListener("focus", et), n.removeEventListener("blur", en))
				}), ! function() {
					let e = r.useRef(!1),
						t = r.useRef(null),
						n = (0, U.pL)(),
						i = v.Z.getVoiceChannelId(),
						o = y.Z.getChannel(i),
						l = null != o ? O.Z.getGuild(o.guild_id) : null,
						a = null != g.Z.getCurrentUserActiveStream(),
						s = null != i,
						c = (0, m.Z)(b.Z) && !a && null != n,
						u = s && null != l && null != i,
						{
							allowActivityWidget: p
						} = (0, P.o4)("overlay");
					r.useEffect(() => {
						var r;
						if (e.current) return;
						e.current = !0;
						let o = null != (r = _.default.getFocusedPID()) ? r : (0, N.getPID)();
						if (L.default.hasChangedRenderMode(o)) return;
						let a = M.Z.isNotificationDisabled(Z.OverlayNotificationDisabledSetting.WELCOME_GENERAL),
							s = M.Z.isNotificationDisabled(Z.OverlayNotificationDisabledSetting.GO_LIVE_NUDGE),
							f = M.Z.isNotificationDisabled(Z.OverlayNotificationDisabledSetting.GAME_ACTIVITY),
							h = [];
						if (a || h.push({
								type: G.nc.WELCOME
							}), !s && (c && u ? h.push({
								type: G.nc.GO_LIVE_VOICE,
								game: n,
								voiceChannelId: i,
								voiceGuild: l
							}) : c && h.push({
								type: G.nc.GO_LIVE_NON_VOICE,
								game: n
							})), p && !f && h.push({
								type: G.nc.CONTENT_INVENTORY,
								entries: []
							}), 0 !== h.length) return null != t.current && clearTimeout(t.current), t.current = setTimeout(() => {
							d.Z.overlayMounted(...h)
						}, 1e3), () => {
							null != t.current && (clearTimeout(t.current), t.current = null)
						}
					}, [s, c, u, n, i, l, p])
				}(), r.useEffect(() => {
					if (S.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, {
							show: !0
						}), o) {
						if ((0, s.Ay)(c.u1M), n.addEventListener("contextmenu", X, !1), null != K) {
							let e = Date.now() - K;
							d.Z.track(B.rMx.OVERLAY_LOCKED, {
								unlocked_duration: e
							}), K = null
						}
						return () => {
							n.removeEventListener("contextmenu", X, !1)
						}
					}
					n.removeEventListener("contextmenu", X, !1), null == K && (K = Date.now(), d.Z.track(B.rMx.OVERLAY_UNLOCKED))
				}, [o, n]), (0, i.jsx)(f.Gt, {
					value: R,
					children: j || h ? null : (0, i.jsx)(c.f6W, {
						theme: B.BRd.MIDNIGHT,
						children: e => (0, i.jsxs)("div", {
							id: "overlay-container",
							className: l()(H.overlay, e),
							children: [!t && Q, (0, i.jsx)(q, {
								locked: o,
								keybind: k,
								onClick: ee
							}), (0, i.jsx)(A.Z, {
								className: l()({
									[H.layoutLocked]: o,
									[H.layoutUnlocked]: !o
								})
							}), (0, i.jsx)(V.Z, {}), !t && Y && (0, i.jsx)($, {
								locked: o,
								focused: u
							}), (0, i.jsx)(T.Z, {}), (0, i.jsx)(D.Z, {
								locked: o
							}), (0, i.jsx)(c.Ixi, {})]
						})
					})
				})
			}
		},
		268861: function(e, t, n) {
			n.d(t, {
				Z: () => d
			}), n(388685);
			var i = n(255367),
				r = n(73800),
				o = n(704215),
				l = n(481060),
				a = n(243778),
				s = n(921944),
				c = n(388032),
				u = n(63791);

			function d(e) {
				let {
					locked: t
				} = e, [n, d] = (0, a.US)(t ? [] : [o.z.OVERLAY_OOP_WELCOME_BACKGROUND_NUX], void 0, !0);
				return (r.useEffect(() => {
					if (!t && n === o.z.OVERLAY_OOP_WELCOME_BACKGROUND_NUX) return () => {
						n === o.z.OVERLAY_OOP_WELCOME_BACKGROUND_NUX && d(s.L.AUTO_DISMISS)
					}
				}, [t, d, n]), t || n !== o.z.OVERLAY_OOP_WELCOME_BACKGROUND_NUX) ? null : (0, i.jsx)("div", {
					className: u.overlayBackgroundNux,
					children: (0, i.jsxs)("div", {
						className: u.mainContainer,
						children: [(0, i.jsxs)("div", {
							className: u.mainTitleContainer,
							children: [(0, i.jsx)(l.X6q, {
								variant: "heading-xl/medium",
								color: "header-primary",
								children: c.intl.string(c.t.jzjJQk)
							}), (0, i.jsx)(l.Text, {
								variant: "text-md/normal",
								color: "text-muted",
								children: c.intl.string(c.t["5dOfxc"])
							})]
						}), (0, i.jsxs)("div", {
							className: u.widgetCalloutContainer,
							children: [(0, i.jsxs)("div", {
								className: u.widgetCallout,
								children: [(0, i.jsx)(l.qjv, {}), (0, i.jsx)(l.Text, {
									variant: "text-md/medium",
									color: "interactive-normal",
									children: c.intl.string(c.t.S6VRyM)
								})]
							}), (0, i.jsxs)("div", {
								className: u.widgetCallout,
								children: [(0, i.jsx)(l.Dkj, {}), (0, i.jsx)(l.Text, {
									variant: "text-md/medium",
									color: "interactive-normal",
									children: c.intl.string(c.t.xq8CKS)
								})]
							}), (0, i.jsxs)("div", {
								className: u.widgetCallout,
								children: [(0, i.jsx)(l.Odl, {}), (0, i.jsx)(l.Text, {
									variant: "text-md/medium",
									color: "interactive-normal",
									children: c.intl.string(c.t.GwpRe3)
								})]
							}), (0, i.jsxs)("div", {
								className: u.widgetCallout,
								children: [(0, i.jsx)(l.KY1, {}), (0, i.jsx)(l.Text, {
									variant: "text-md/medium",
									color: "interactive-normal",
									children: c.intl.string(c.t.VUoC5O)
								})]
							})]
						})]
					})
				})
			}
		},
		690336: function(e, t, n) {
			n.d(t, {
				Z: () => b
			}), n(539854), n(388685);
			var i = n(255367),
				r = n(73800),
				o = n(442837),
				l = n(481060),
				a = n(355863),
				s = n(451478),
				c = n(830917),
				u = n(388627),
				d = n(892127),
				p = n(444982),
				f = n(561064),
				h = n(757744);

			function m(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						i = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), i.forEach(function(t) {
						var i;
						i = n[t], t in e ? Object.defineProperty(e, t, {
							value: i,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : e[t] = i
					})
				}
				return e
			}

			function g(e) {
				return e.widget.id
			}

			function y(e, t, n, r) {
				var o, a;
				return n === l.pJH.YEETED ? null : (0, i.jsx)(d.Z, (o = m({}, t), a = a = {
					transitionState: n,
					cleanUp: r
				}, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var i = Object.getOwnPropertySymbols(e);
						n.push.apply(n, i)
					}
					return n
				})(Object(a)).forEach(function(e) {
					Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e))
				}), o), e)
			}
			let O = [],
				b = r.memo(function(e) {
					let {
						className: t
					} = e, n = (0, f.Z)(), d = (0, o.e7)([s.Z], () => s.Z.windowSize((0, c.ZY)(n))), b = (0, o.e7)([a.Z], () => {
						let e = a.Z.getLayout(h.$S);
						if (null == e) return O;
						let t = [];
						for (let n of e.widgets) {
							let e = a.Z.getWidget(n);
							if (null == e) continue;
							let i = p.Z[e.type];
							null != i && (null == i.predicate || i.predicate()) && t.push(m({
								widget: e
							}, i))
						}
						return t
					}, [], u.HP), v = r.useCallback(e => (0, i.jsx)("div", {
						className: t,
						style: d,
						children: e
					}), [t, d]);
					return (0, i.jsx)(l.W3x, {
						items: b,
						renderItem: y,
						getItemKey: g,
						wrapChildren: v
					})
				})
		},
		461393: function(e, t, n) {
			function i(e, t, n, i) {
				let {
					maxWidth: r,
					maxHeight: o
				} = i, l = e.width, a = e.height;
				if (l > r || a > o) {
					let e = Math.round((r - n) / t + n),
						i = Math.round((o - n) * t + n);
					e <= o ? (l = r, a = e) : (l = i, a = o)
				}
				return {
					width: l = Math.max(n, l),
					height: a = Math.max(n, a)
				}
			}

			function r(e, t) {
				let {
					maxWidth: n,
					maxHeight: i
				} = t;
				return {
					width: Math.max(0, Math.min(e.width, n)),
					height: Math.max(0, Math.min(e.height, i))
				}
			}
			n.d(t, {
				S: () => i,
				h: () => r
			})
		},
		273816: function(e, t, n) {
			n.d(t, {
				Z: () => b
			}), n(388685);
			var i = n(255367),
				r = n(73800),
				o = n(120356),
				l = n.n(o),
				a = n(442837),
				s = n(481060),
				c = n(493773),
				u = n(178821),
				d = n(38618),
				p = n(522474),
				f = n(333031),
				h = n(610394),
				m = n(501787),
				g = n(565655);

			function y(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						i = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), i.forEach(function(t) {
						var i;
						i = n[t], t in e ? Object.defineProperty(e, t, {
							value: i,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : e[t] = i
					})
				}
				return e
			}

			function O(e, t) {
				return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var i = Object.getOwnPropertySymbols(e);
						n.push.apply(n, i)
					}
					return n
				})(Object(t)).forEach(function(n) {
					Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
				}), e
			}

			function b(e) {
				let {
					locked: t,
					pinned: n,
					anchorLeft: o
				} = e, b = (0, a.e7)([d.Z], () => d.Z.getSocket()), v = (0, a.e7)([h.ZP], () => h.ZP.isGPUBoosted());
				(0, u.nU)();
				let E = (0, a.e7)([p.Z], () => p.Z.getWindow(m.$J)),
					[_, x] = (0, u.m8)(b),
					{
						currentFPS: I,
						averageFrameTime: S,
						timeSinceLastDrop: j,
						onResetFrameData: C,
						droppedFramesRef: N,
						renderedFrameCount: w,
						bufferFramecountRef: Z,
						frameCheckerEffect: P
					} = (0, u.d6)(!0, _, !0),
					[T, k, D] = (0, u.ZF)(b),
					[A, R] = (0, u.Y5)(T, P, E),
					L = performance.now() - x.current < u.MC,
					M = k(S, Z.current);
				(0, c.ZP)(() => (A(), () => {
					R()
				}));
				let z = r.useCallback(() => {
						C(), D(), A()
					}, [C, D, A]),
					[U, V] = r.useState(!0),
					[W, G] = r.useState(!0),
					[F, B] = r.useState(!0),
					[H, Y] = r.useState(!0),
					[Q, K] = r.useState(!0);
				return t && !n ? null : (0, i.jsxs)("div", {
					className: l()(g.panelGroup, !o && g.rightAligned),
					children: [(U || !t) && (0, i.jsxs)("div", {
						className: g.measurement,
						children: [!t && (0, i.jsx)("div", {
							className: g.measurementCheckbox,
							children: (0, i.jsx)(s.XZJ, {
								size: 16,
								value: U,
								onChange: (e, t) => V(t)
							})
						}), (0, i.jsxs)(s.Text, {
							variant: "text-md/normal",
							color: "text-secondary",
							className: g.measurementText,
							children: ["FPS:", " ", (0, i.jsx)(s.Text, {
								tag: "span",
								variant: "code",
								color: I < 30 ? "text-danger" : I < 45 ? "text-feedback-warning" : "text-primary",
								children: I.toFixed(2)
							})]
						})]
					}), (W || !t) && (0, i.jsxs)("div", {
						className: g.measurement,
						children: [!t && (0, i.jsx)("div", {
							className: g.measurementCheckbox,
							children: (0, i.jsx)(s.XZJ, {
								size: 16,
								value: W,
								onChange: (e, t) => G(t)
							})
						}), (0, i.jsxs)(s.Text, {
							variant: "text-md/normal",
							color: "text-secondary",
							className: g.measurementText,
							children: ["Frame Times:", " ", (0, i.jsxs)(s.Text, {
								tag: "span",
								variant: "code",
								color: S > 1.1 * u.tO ? "text-feedback-warning" : "text-primary",
								children: [S.toFixed(2), "ms"]
							})]
						})]
					}), (F || !t) && (0, i.jsxs)("div", {
						className: g.measurement,
						children: [!t && (0, i.jsx)("div", {
							className: g.measurementCheckbox,
							children: (0, i.jsx)(s.XZJ, {
								size: 16,
								value: F,
								onChange: (e, t) => B(t)
							})
						}), (0, i.jsxs)(s.Text, {
							variant: "text-md/normal",
							color: "text-secondary",
							className: g.measurementText,
							children: ["Dropped Frames:", " ", (0, i.jsx)(s.Text, {
								tag: "span",
								variant: "code",
								color: j < 2 ? "text-danger" : j < 5 ? "text-feedback-warning" : "text-primary",
								children: N.current
							}), (0, i.jsxs)(s.Text, {
								tag: "span",
								variant: "code",
								color: "text-secondary",
								className: g.secondaryInfoText,
								children: ["(", (N.current / w.current * 100).toFixed(3), "%)"]
							})]
						})]
					}), (H || !t) && (0, i.jsxs)("div", {
						className: g.measurement,
						children: [!t && (0, i.jsx)("div", {
							className: g.measurementCheckbox,
							children: (0, i.jsx)(s.XZJ, {
								size: 16,
								value: H,
								onChange: (e, t) => Y(t)
							})
						}), (0, i.jsxs)(s.Text, {
							variant: "text-md/normal",
							color: "text-secondary",
							className: g.measurementText,
							children: ["Rendered Frames:", " ", (0, i.jsx)(s.Text, {
								tag: "span",
								variant: "code",
								color: "text-primary",
								children: w.current.toFixed(0)
							})]
						})]
					}), (Q || !t) && (0, i.jsxs)("div", {
						className: g.measurement,
						children: [!t && (0, i.jsx)("div", {
							className: g.measurementCheckbox,
							children: (0, i.jsx)(s.XZJ, {
								size: 16,
								value: Q,
								onChange: (e, t) => K(t)
							})
						}), (0, i.jsx)(s.ua7, {
							position: "left",
							text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
							children: e => (0, i.jsx)("div", O(y({}, e), {
								children: (0, i.jsxs)(s.Text, {
									variant: "text-md/normal",
									color: "text-secondary",
									className: g.measurementText,
									children: ["Idle Frame Delta:", " ", (0, i.jsxs)(s.Text, {
										tag: "span",
										variant: "code",
										color: M > 1 ? "text-danger" : "text-primary",
										children: [M.toFixed(2), "ms"]
									})]
								})
							}))
						})]
					}), L && (0, i.jsx)(s.ua7, {
						position: "left",
						text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
						children: e => (0, i.jsx)("span", O(y({}, e), {
							children: (0, i.jsx)(s.Text, {
								tag: "span",
								variant: "code",
								color: "text-danger",
								children: "(Main App Backgrounded)"
							})
						}))
					}), v && (0, i.jsx)(s.Text, {
						tag: "span",
						variant: "code",
						color: "text-feedback-positive",
						children: "(Using GPU Priority - Realtime)"
					}), !t && (0, i.jsx)("div", {
						className: g.bottomPanelButton,
						children: (0, i.jsx)(f.Z, {
							children: (0, i.jsx)(s.zxk, {
								variant: "primary",
								text: "Reset Frame Data",
								onClick: z
							})
						})
					})]
				})
			}
		},
		293224: function(e, t, n) {
			n.d(t, {
				L: () => em,
				N3: () => ec,
				Ox: () => ea,
				SE: () => es,
				aG: () => ed,
				c_: () => ep,
				sm: () => eu
			}), n(388685);
			var i = n(255367),
				r = n(73800),
				o = n(442837),
				l = n(685072),
				a = n(400354),
				s = n(864094),
				c = n(582019),
				u = n(75735),
				d = n(481060),
				p = n(846027),
				f = n(239091),
				h = n(287734),
				m = n(100527),
				g = n(906732),
				y = n(571250),
				O = n(628581),
				b = n(659580),
				v = n(793865),
				E = n(55311),
				_ = n(575175),
				x = n(933557),
				I = n(471445),
				S = n(74299),
				j = n(803647),
				C = n(565138),
				N = n(77880),
				w = n(917405),
				Z = n(763296),
				P = n(603074),
				T = n(879815),
				k = n(189771),
				D = n(294629),
				A = n(67844),
				R = n(544384),
				L = n(890828),
				M = n(560688),
				z = n(871499),
				U = n(540650),
				V = n(8404),
				W = n(199902),
				G = n(314897),
				F = n(430824),
				B = n(131951),
				H = n(19780),
				Y = n(944486),
				Q = n(594174),
				K = n(979651),
				X = n(145597),
				J = n(444295),
				q = n(624864),
				$ = n(388627),
				ee = n(810632),
				et = n(981631),
				en = n(388032),
				ei = n(859714);

			function er(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						i = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), i.forEach(function(t) {
						var i;
						i = n[t], t in e ? Object.defineProperty(e, t, {
							value: i,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : e[t] = i
					})
				}
				return e
			}

			function eo(e) {
				let t = r.useRef(null);
				return r.useEffect(() => {
					if (e) {
						var n;
						null == (n = t.current) || n.call(t), t.current = null
					}
				}, [e]), e => (t.current = e, e)
			}

			function el(e) {
				var {
					ref: t,
					isActive: n,
					disabled: r,
					iconComponent: o,
					iconColor: l,
					tooltip: a,
					defaultColor: s = "primaryDark",
					highlightedColor: c = "primaryDark",
					caretColor: u,
					popoutOpen: d,
					onClick: p,
					popoutDisabled: f,
					onPopoutClick: h,
					onMouseEnter: m,
					onMouseLeave: g,
					onContextMenu: y,
					isTrayButton: O
				} = e, b = function(e, t) {
					if (null == e) return {};
					var n, i, r = function(e, t) {
						if (null == e) return {};
						var n, i, r = {},
							o = Object.keys(e);
						for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
						return r
					}(e, t);
					if (Object.getOwnPropertySymbols) {
						var o = Object.getOwnPropertySymbols(e);
						for (i = 0; i < o.length; i++) n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
					}
					return r
				}(e, ["ref", "isActive", "disabled", "iconComponent", "iconColor", "tooltip", "defaultColor", "highlightedColor", "caretColor", "popoutOpen", "onClick", "popoutDisabled", "onPopoutClick", "onMouseEnter", "onMouseLeave", "onContextMenu", "isTrayButton"]);
				return (0, i.jsx)(z.d, {
					ref: t,
					onClick: null != p ? p : () => {},
					color: n ? c : s,
					className: ei.button,
					disabled: r,
					popoutOpen: d,
					popoutDisabled: f,
					label: a,
					isTrayButton: O,
					onMouseEnter: e => {
						null == m || m(e)
					},
					onMouseLeave: e => {
						null == g || g(e)
					},
					iconComponent: o,
					iconColor: l,
					caretColor: u,
					isActive: n,
					onContextMenu: y,
					onPopoutClick: h,
					"aria-label": b["aria-label"]
				})
			}

			function ea(e) {
				var t;
				let {
					voiceChannel: n,
					locked: l
				} = e, a = r.useRef(null), {
					suppress: s,
					selfMute: c,
					mute: u
				} = (0, D.Z)(n), p = c || u || s, f = (0, O.Z)(c, u, s, !1), {
					Component: h,
					play: g,
					events: y
				} = (0, V.b)(p);
				r.useEffect(() => () => g(), [g, p]);
				let b = eo(l),
					v = e => t => {
						e(t), (0, J.Ws)(et.Odu.QUICK_ACTIONS, {
							type: J.Qu.MICROPHONE,
							value: J.bk.SETTINGS_OPENED
						})
					},
					E = null == (t = (0, $.II)()) ? void 0 : t.id,
					x = (0, o.e7)([q.Z], () => q.Z.isLimitedInteractionOverrideEnabled(E));
				return (0, i.jsx)(d.yRy, {
					targetElementRef: a,
					renderPopout: e => {
						let {
							closePopout: t
						} = e;
						return (0, i.jsx)(U.R, {
							onClose: b(t),
							location: m.Z.OVERLAY,
							overlayLimitedInteraction: x
						})
					},
					align: "center",
					position: "top",
					animation: d.yRy.Animation.FADE,
					children: (e, t) => {
						let {
							onClick: n
						} = e, {
							isShown: r
						} = t;
						return (0, i.jsx)(el, {
							ref: a,
							iconComponent: h,
							isActive: p,
							highlightedColor: "red",
							tooltip: f,
							onClick: () => {
								(0, _.Z)(u, s, et.jXE.OVERLAY), (0, J.Ws)(et.Odu.QUICK_ACTIONS, {
									type: J.Qu.MICROPHONE,
									value: p ? J.bk.ENABLED : J.bk.DISABLED,
									userId: G.default.getId()
								})
							},
							onPopoutClick: v(n),
							onContextMenu: v(n),
							popoutOpen: r,
							onMouseEnter: () => {
								y.onMouseEnter()
							},
							onMouseLeave: () => {
								y.onMouseLeave()
							},
							isTrayButton: !0
						})
					}
				})
			}

			function es(e) {
				let {
					voiceChannel: t,
					locked: n
				} = e, o = r.useRef(null), {
					selfDeaf: l,
					deaf: s
				} = (0, T.Z)(t), c = l || s, {
					Component: u,
					play: p,
					events: {
						onMouseEnter: f,
						onMouseLeave: h
					}
				} = (0, a.l)(c ? "undeafen" : "deafen"), m = s ? d.Vm4 : u;
				r.useEffect(() => () => p(), [c, p]);
				let g = () => {
						(0, E.Z)(s, et.jXE.OVERLAY), (0, J.Ws)(et.Odu.QUICK_ACTIONS, {
							type: J.Qu.AUDIO,
							value: s ? J.bk.ENABLED : J.bk.DISABLED,
							userId: G.default.getId()
						})
					},
					O = e => t => {
						e(t), (0, J.Ws)(et.Odu.QUICK_ACTIONS, {
							type: J.Qu.AUDIO,
							value: J.bk.SETTINGS_OPENED
						})
					},
					v = eo(n);
				return (0, i.jsx)(d.yRy, {
					targetElementRef: o,
					renderPopout: e => {
						let {
							closePopout: t
						} = e;
						return (0, i.jsx)(b.default, {
							onClose: v(t),
							renderOutputDevices: !0,
							renderOutputVolume: !0,
							appContext: et.IlC.OVERLAY
						})
					},
					align: "center",
					position: "top",
					animation: d.yRy.Animation.FADE,
					children: (e, t) => {
						let {
							onClick: n
						} = e, {
							isShown: r
						} = t;
						return (0, i.jsx)(el, {
							ref: o,
							iconComponent: m,
							tooltip: (0, y.Z)(l, s, !1),
							isActive: c,
							highlightedColor: "red",
							onClick: g,
							onContextMenu: O(n),
							onMouseEnter: f,
							onMouseLeave: h,
							onPopoutClick: O(n),
							popoutOpen: r,
							isTrayButton: !0
						})
					}
				})
			}

			function ec(e) {
				var t;
				let {
					voiceChannel: n,
					locked: l
				} = e, a = r.useRef(null), s = (0, o.e7)([B.Z], () => B.Z.isVideoEnabled()), c = (0, o.e7)([B.Z], () => Object.values(B.Z.getVideoDevices())[0]), f = null == (t = null == c ? void 0 : c.disabled) || t, h = !1 === f, m = (0, k.Z)(n), g = e => {
					p.Z.setVideoEnabled(e)
				}, y = () => {
					h ? g(!0) : (0, M.Z)()
				}, O = e => t => {
					e(t), (0, J.Ws)(et.Odu.QUICK_ACTIONS, {
						type: J.Qu.CAMERA,
						value: J.bk.SETTINGS_OPENED
					})
				}, b = () => {
					f ? y() : g(!s), (0, J.Ws)(et.Odu.QUICK_ACTIONS, {
						type: J.Qu.CAMERA,
						value: s ? J.bk.DISABLED : J.bk.ENABLED,
						userId: G.default.getId()
					})
				}, {
					Component: E,
					play: _,
					events: {
						onMouseEnter: x,
						onMouseLeave: I
					}
				} = (0, u.o)(s ? "disable" : "enable"), S = null != n ? (0, A.X)({
					enabled: s,
					cameraUnavailable: f,
					hasPermission: m,
					channel: n
				}) : void 0;
				r.useEffect(() => () => _(), [s, _]);
				let j = eo(l),
					C = null == n || !m;
				return (0, i.jsx)(d.yRy, {
					targetElementRef: a,
					renderPopout: e => {
						let {
							closePopout: t
						} = e;
						return (0, i.jsx)(v.Z, {
							onClose: j(t),
							appContext: et.IlC.OVERLAY
						})
					},
					align: "center",
					position: "top",
					animation: d.yRy.Animation.FADE,
					children: (e, t) => {
						let {
							onClick: n
						} = e, {
							isShown: r
						} = t;
						return (0, i.jsx)(el, {
							ref: a,
							iconComponent: E,
							tooltip: S,
							onClick: b,
							isActive: s,
							highlightedColor: "green",
							onPopoutClick: O(n),
							popoutOpen: r,
							onContextMenu: O(n),
							onMouseEnter: x,
							onMouseLeave: I,
							disabled: C,
							isTrayButton: !0
						})
					}
				})
			}

			function eu(e) {
				let t, {
						voiceChannel: n,
						locked: l
					} = e,
					a = r.useRef(null),
					c = (0, o.e7)([Q.default], () => Q.default.getCurrentUser()),
					u = (0, k.Z)(n),
					p = (0, o.cj)([B.Z], () => (0, S.Z)(B.Z)),
					f = (0, o.e7)([W.Z], () => W.Z.getCurrentUserActiveStream()),
					h = (0, ee.g)((0, X.getPID)()),
					m = () => {
						h(), (0, J.Ws)(et.Odu.QUICK_ACTIONS, {
							type: J.Qu.GO_LIVE,
							value: J.bk.ENABLED,
							userId: G.default.getId()
						})
					},
					g = null != f;
				if (g) t = en.intl.string(en.t.S5anIS);
				else if (null != n) {
					let e = (0, $.pL)();
					t = u ? null != e ? en.intl.format(en.t.AB5gT0, {
						game: e.name
					}) : en.intl.string(en.t.FeUKeH) : en.intl.string(en.t.uQn9Bw)
				}
				let y = () => {
						if (g) return (0, J.Ws)(et.Odu.QUICK_ACTIONS, {
							type: J.Qu.GO_LIVE,
							value: J.bk.DISABLED,
							userId: G.default.getId()
						}), (0, j.Z)(f, !1);
						m()
					},
					O = e => t => {
						e(t), (0, J.Ws)(et.Odu.QUICK_ACTIONS, {
							type: J.Qu.SCREEN_SHARE,
							value: J.bk.SETTINGS_OPENED
						})
					},
					{
						Component: b,
						events: {
							onMouseEnter: v,
							onMouseLeave: E
						},
						play: _
					} = (0, s.P)(g ? "disable" : "enable");
				r.useEffect(() => () => _(), [g, _]);
				let x = eo(l);
				return (0, i.jsx)(d.yRy, {
					targetElementRef: a,
					renderPopout: e => {
						let {
							closePopout: t
						} = e;
						return (0, i.jsx)(R.Z, {
							channel: n,
							currentUser: c,
							activeStreams: g ? [f] : [],
							handleGoLive: m,
							onClose: x(t),
							appContext: et.IlC.OVERLAY,
							disableChangeWindows: !0
						})
					},
					align: "center",
					position: "top",
					animation: d.yRy.Animation.FADE,
					children: (e, n) => {
						let {
							onClick: r
						} = e, {
							isShown: o
						} = n;
						return (0, i.jsx)(el, {
							ref: a,
							iconComponent: b,
							tooltip: t,
							"aria-label": en.intl.string(en.t.FeUKeH),
							isActive: g,
							highlightedColor: "green",
							onClick: y,
							popoutOpen: o,
							popoutDisabled: !g,
							onPopoutClick: O(r),
							onContextMenu: O(r),
							onMouseEnter: v,
							onMouseLeave: E,
							disabled: !p || !u,
							isTrayButton: !0
						})
					}
				})
			}

			function ed(e) {
				var t;
				let {
					voiceChannel: l,
					locked: a
				} = e, s = r.useRef(null), u = null != (t = null == l ? void 0 : l.getGuildId()) ? t : null, {
					mute: p,
					suppress: h
				} = (0, D.Z)(l), m = (0, o.e7)([B.Z], () => B.Z.isDeaf()), y = null == l || p || h || m, {
					analyticsLocations: O
				} = (0, g.ZP)();

				function b(e) {
					null != u && ((0, J.Ws)(et.Odu.QUICK_ACTIONS, {
						type: J.Qu.SOUNDBOARD,
						value: J.bk.SETTINGS_OPENED
					}), (0, f.jW)(e, async () => {
						let {
							default: e
						} = await n.e("56049").then(n.bind(n, 338991));
						return t => (0, i.jsx)(e, er({
							sourceAnalyticsLocations: O,
							guildId: u
						}, t))
					}))
				}
				let {
					Component: v,
					events: {
						onClick: E,
						onMouseEnter: _,
						onMouseLeave: x
					}
				} = (0, c.j)(), I = eo(a), S = (0, o.e7)([Z.Z, G.default], () => Z.Z.isUserPlayingSounds(G.default.getId()), []) ? "green" : void 0;
				return (0, i.jsx)(d.yRy, {
					targetElementRef: s,
					renderPopout: e => {
						let {
							closePopout: t
						} = e;
						return y || null == l ? (0, i.jsx)(i.Fragment, {}) : (0, i.jsx)(P.Z, {
							guildId: u,
							channel: l,
							onClose: I(t),
							analyticsSource: "action bar button"
						})
					},
					align: "center",
					position: "top",
					animation: d.yRy.Animation.FADE,
					children: (e, t) => {
						let {
							onClick: n
						} = e, {
							isShown: r
						} = t;
						return (0, i.jsx)(el, {
							ref: s,
							iconComponent: v,
							tooltip: p ? en.intl.string(en.t["Ox4/zc"]) : h ? en.intl.string(en.t["+YBKYG"]) : m ? en.intl.string(en.t.X1lQlp) : void 0,
							onClick: e => {
								E(), (0, J.Ws)(et.Odu.QUICK_ACTIONS, {
									type: J.Qu.SOUNDBOARD,
									value: J.bk.PANEL_OPENED,
									userId: G.default.getId()
								}), n(e)
							},
							highlightedColor: S,
							defaultColor: S,
							onContextMenu: b,
							onMouseEnter: _,
							onMouseLeave: x,
							isActive: r,
							popoutOpen: r,
							disabled: y,
							isTrayButton: !0
						})
					}
				})
			}

			function ep(e) {
				let {
					voiceChannel: t,
					locked: n
				} = e, a = r.useRef(null), s = (0, o.e7)([Y.Z], () => Y.Z.getVoiceChannelId() === (null == t ? void 0 : t.id)), {
					changeLeaveCallAndActivityIcons: c
				} = (0, N.A)({
					location: "DisconnectActionButton"
				}), u = () => {
					(0, J.Ws)(et.Odu.QUICK_ACTIONS, {
						type: J.Qu.CALL_BUTTON,
						value: J.bk.DISABLED,
						userId: G.default.getId()
					}), s && h.default.disconnect()
				}, p = e => {
					h.default.selectVoiceChannel(e), (0, J.Ws)(et.Odu.QUICK_ACTIONS, {
						type: J.Qu.CALL_BUTTON,
						value: J.bk.ENABLED,
						userId: G.default.getId()
					})
				}, [f, m] = r.useTransition(), g = e => t => {
					m(() => {
						e(t)
					}), (0, J.Ws)(et.Odu.QUICK_ACTIONS, {
						type: J.Qu.CALL_BUTTON,
						value: J.bk.SETTINGS_OPENED
					})
				}, {
					Component: y,
					events: {
						onMouseEnter: O,
						onMouseLeave: b
					}
				} = (0, l.K)(), v = eo(n);
				return (0, i.jsx)(d.yRy, {
					targetElementRef: a,
					renderPopout: e => {
						let {
							closePopout: n
						} = e;
						return (0, i.jsx)(L.Z, {
							currentVoiceChannel: t,
							onClose: v(n),
							onSelect: p
						})
					},
					align: "center",
					position: "top",
					animation: d.yRy.Animation.FADE,
					children: (e, t) => {
						let {
							onClick: n
						} = e, {
							isShown: r
						} = t;
						return (0, i.jsx)(el, {
							ref: a,
							iconComponent: s ? c ? d.PBZ : y : d.Csw,
							tooltip: s ? c ? en.intl.string(en.t["Hi1/aW"]) : en.intl.string(en.t["6vrfgo"]) : en.intl.string(en.t.S0W8Z2),
							onClick: s ? u : g(n),
							defaultColor: s ? "disconnect" : void 0,
							onMouseEnter: O,
							onMouseLeave: b,
							onContextMenu: g(n),
							isActive: r,
							onPopoutClick: s ? g(n) : void 0,
							popoutOpen: r,
							isTrayButton: !0
						})
					}
				})
			}

			function ef(e) {
				let {
					voiceChannel: t
				} = e, n = (0, o.e7)([F.Z], () => F.Z.getGuild(t.getGuildId()), [t]);
				switch (!0) {
					case t.isGroupDM() || t.isDM():
					case t.isDM():
						return null;
					case null != n:
						return (0, i.jsxs)(i.Fragment, {
							children: [(0, i.jsx)("div", {
								className: ei.separatorDot
							}), (0, i.jsxs)("div", {
								className: ei.guildIconContainer,
								children: [(0, i.jsx)(C.Z, {
									guild: n,
									size: C.Z.Sizes.SMOL,
									className: ei.guildIcon
								}), (0, i.jsx)(d.Text, {
									tag: "div",
									variant: "text-sm/medium",
									color: "text-primary",
									className: ei.guildName,
									children: n.name
								})]
							})]
						});
					default:
						return null
				}
			}

			function eh(e) {
				let {
					voiceChannel: t
				} = e, n = (0, I.KS)(t), r = (0, x.ZP)(t);
				return (0, i.jsxs)("div", {
					className: ei.voiceChannelNameContainer,
					children: [null != n && (0, i.jsx)(d.Text, {
						tag: "div",
						color: "text-muted",
						variant: "text-xs/normal",
						className: ei.channelIcon,
						children: (0, i.jsx)(n, {
							size: "sm",
							color: "currentColor"
						})
					}), null != r && (0, i.jsx)(d.Text, {
						variant: "text-sm/medium",
						color: "text-muted",
						className: ei.channelName,
						children: r
					})]
				})
			}

			function em(e) {
				var t, n;
				let {
					voiceChannel: r
				} = e, l = null == r ? void 0 : r.id, a = (0, o.cj)([H.Z], () => ({
					quality: H.Z.getQuality(),
					state: H.Z.getState(),
					lastPing: H.Z.getLastPing()
				})), s = (0, o.e7)([K.Z], () => null != l && K.Z.hasVideo(l), [l]);
				return null != l && null != r && (0, i.jsxs)(i.Fragment, {
					children: [(0, i.jsx)(w.Z, (t = er({}, a), n = n = {
						channelId: l,
						hasVideo: s,
						connectionStatusTextVariant: "text-sm/medium"
					}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
						var n = Object.keys(e);
						if (Object.getOwnPropertySymbols) {
							var i = Object.getOwnPropertySymbols(e);
							n.push.apply(n, i)
						}
						return n
					})(Object(n)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					}), t)), (0, i.jsx)(ef, {
						voiceChannel: r
					}), (0, i.jsx)("div", {
						className: ei.separatorDot
					}), (0, i.jsx)(eh, {
						voiceChannel: r
					})]
				})
			}
		},
		810632: function(e, t, n) {
			n.d(t, {
				g: () => g
			}), n(388685);
			var i = n(255367),
				r = n(73800),
				o = n(442837),
				l = n(481060),
				a = n(74299),
				s = n(562224),
				c = n(592125),
				u = n(131951),
				d = n(944486),
				p = n(594174),
				f = n(145597),
				h = n(981631),
				m = n(388032);

			function g(e, t) {
				let g = (0, o.e7)([d.Z], () => d.Z.getVoiceChannelId()),
					y = (0, o.e7)([c.Z], () => c.Z.getChannel(g), [g]),
					O = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
					b = null == y ? void 0 : y.getGuildId(),
					v = (0, o.e7)([u.Z], () => (0, a.Z)(u.Z));
				return r.useCallback(async () => {
					if (!v || null == g) return;
					let [r] = await (0, s.Z)(e);
					if (!r) {
						if (null == O) return void(0, l.showToast)((0, l.createToast)(m.intl.string(m.t.OKnWyc), l.ToastType.FAILURE));
						(0, l.ZDy)(async () => {
							let {
								default: e
							} = await Promise.all([n.e("46746"), n.e("32087")]).then(n.bind(n, 60594));
							return t => {
								var n, r;
								return (0, i.jsx)(e, (n = function(e) {
									for (var t = 1; t < arguments.length; t++) {
										var n = null != arguments[t] ? arguments[t] : {},
											i = Object.keys(n);
										"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
											return Object.getOwnPropertyDescriptor(n, e).enumerable
										}))), i.forEach(function(t) {
											var i;
											i = n[t], t in e ? Object.defineProperty(e, t, {
												value: i,
												enumerable: !0,
												configurable: !0,
												writable: !0
											}) : e[t] = i
										})
									}
									return e
								}({}, t), r = r = {
									sourcePID: (0, f.getPID)(),
									selectSource: !1,
									guildId: b,
									analyticsLocation: h.Sbl.UNLOCKED_OVERLAY
								}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
									var n = Object.keys(e);
									if (Object.getOwnPropertySymbols) {
										var i = Object.getOwnPropertySymbols(e);
										n.push.apply(n, i)
									}
									return n
								})(Object(r)).forEach(function(e) {
									Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
								}), n))
							}
						}, {
							contextKey: null != t ? (0, l.VnL)(t) : void 0
						})
					}
				}, [v, b, g, t, e, O])
			}
		},
		2923: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var i = n(255367);
			n(73800);
			var r = n(120356),
				o = n.n(r),
				l = n(442837),
				a = n(592125),
				s = n(944486),
				c = n(293224),
				u = n(849388);

			function d(e) {
				let {
					locked: t
				} = e, n = (0, l.e7)([s.Z], () => s.Z.getVoiceChannelId()), r = (0, l.e7)([a.Z], () => a.Z.getChannel(n)), d = null != r;
				return (0, i.jsxs)("div", {
					className: o()({
						[u.panelContainer]: !0,
						[u.locked]: t
					}),
					children: [(0, i.jsxs)("div", {
						className: u.panelRow,
						children: [(0, i.jsxs)("div", {
							className: u.buttonSection,
							children: [(0, i.jsx)(c.Ox, {
								voiceChannel: r,
								locked: t
							}), (0, i.jsx)(c.SE, {
								voiceChannel: r,
								locked: t
							}), (0, i.jsx)(c.N3, {
								voiceChannel: r,
								locked: t
							})]
						}), (0, i.jsxs)("div", {
							className: u.buttonSection,
							children: [(0, i.jsx)(c.sm, {
								voiceChannel: r,
								locked: t
							}), (0, i.jsx)(c.aG, {
								voiceChannel: r,
								locked: t
							})]
						}), (0, i.jsx)("div", {
							className: o()(u.buttonSection, d && u.inCall),
							children: (0, i.jsx)(c.c_, {
								voiceChannel: r,
								locked: t
							})
						})]
					}), d && (0, i.jsx)("div", {
						className: u.panelRow,
						children: (0, i.jsx)(c.L, {
							voiceChannel: r,
							locked: t
						})
					})]
				})
			}
		},
		319414: function(e, t, n) {
			n.d(t, {
				Z: () => h
			}), n(388685);
			var i = n(255367);
			n(73800);
			var r = n(442837),
				o = n(352527),
				l = n(183584),
				a = n(487029),
				s = n(592125),
				c = n(944486),
				u = n(554174),
				d = n(333031),
				p = n(710111),
				f = n(975539);

			function h() {
				let [e, t] = (0, r.Wu)([o.Z], () => [o.Z.enabled, o.Z.keepOpen]), n = (0, r.e7)([c.Z], () => c.Z.getVoiceChannelId()), h = (0, r.e7)([s.Z], () => s.Z.getChannel(n), [n]), m = null == h ? void 0 : h.getGuildId();
				return e && null != h ? (0, i.jsx)(d.Z, {
					className: f.container,
					children: (0, i.jsx)(a.Z, {
						width: p.FW.width,
						height: p.FW.height,
						guildId: m,
						channel: h,
						keepOpen: t,
						onClose: function() {
							let e = (0, u.Z)();
							null != e && (0, l.oZ)(e)
						},
						analyticsSource: "overlay"
					})
				}) : null
			}
		},
		586742: function(e, t, n) {
			n.d(t, {
				R: () => M,
				Z: () => z
			}), n(388685);
			var i = n(255367),
				r = n(73800),
				o = n(120356),
				l = n.n(o),
				a = n(442837),
				s = n(481060),
				c = n(239091),
				u = n(765250),
				d = n(393238),
				p = n(358221),
				f = n(352978),
				h = n(522474),
				m = n(27457),
				g = n(796638),
				y = n(592125),
				O = n(131951),
				b = n(944486),
				v = n(237997),
				E = n(136015),
				_ = n(444295),
				x = n(906037),
				I = n(353038),
				S = n(804570),
				j = n(461393),
				C = n(340101),
				N = n(501787),
				w = n(981631),
				Z = n(65154),
				P = n(388032),
				T = n(884751);

			function k(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						i = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), i.forEach(function(t) {
						var i;
						i = n[t], t in e ? Object.defineProperty(e, t, {
							value: i,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : e[t] = i
					})
				}
				return e
			}

			function D(e, t) {
				return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var i = Object.getOwnPropertySymbols(e);
						n.push.apply(n, i)
					}
					return n
				})(Object(t)).forEach(function(n) {
					Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
				}), e
			}
			let A = r.memo(function(e) {
					var t;
					let {
						participant: n,
						channel: r,
						context: o
					} = e, l = null == (t = n.user) ? void 0 : t.id;
					return (0, a.e7)([O.Z], () => null != n.user && null != o && null != r && O.Z.isLocalVideoDisabled(l, o), [l, n.user, o, r]) ? null : (0, i.jsx)(m.ZP, k({}, e))
				}),
				R = r.memo(function(e) {
					let {
						context: t = Z.Yn.DEFAULT,
						participants: o,
						locked: l,
						channel: a,
						width: s,
						height: u,
						shouldDisplay: d
					} = e, p = r.useCallback((e, r) => {
						let o = e.user;
						(0, _.Ws)(w.Odu.VIDEO, {
							type: _.Qu.CAMERA,
							value: _.bk.SETTINGS_OPENED,
							userId: null == o ? void 0 : o.id
						}), (0, c.jW)(r, async () => {
							let {
								default: e
							} = await Promise.all([n.e("79695"), n.e("6524")]).then(n.bind(n, 27900));
							return n => (0, i.jsx)(e, D(k({}, n), {
								user: o,
								mediaEngineContext: t,
								onWatchStream: () => {
									(0, _.Ws)(w.Odu.VIDEO, {
										type: _.Qu.GO_LIVE,
										value: _.bk.ENABLED,
										userId: null == o ? void 0 : o.id
									})
								}
							}))
						})
					}, [t]), h = (0, _.ee)(() => new Set(o.map(e => {
						var t;
						return null == (t = e.user) ? void 0 : t.id
					})), [o]);
					r.useEffect(() => {
						d && (0, _.zi)(w.Odu.VIDEO, {
							locked: v.default.isInstanceLocked(),
							shownUserIds: Array.from(h),
							liveUserIds: Array.from(h),
							contentInventoryIds: []
						})
					}, [h, d]);
					let m = r.useMemo(() => ({
						width: s,
						height: u
					}), [s, u]);
					return (0, i.jsx)(i.Fragment, {
						children: o.map(e => (0, i.jsx)(A, {
							participant: e,
							width: s,
							className: T.tile,
							containerStyle: m,
							fit: f.L.COVER,
							channel: a,
							inPopout: !0,
							inCall: !0,
							noBorder: !0,
							onContextMenu: l ? void 0 : p,
							forceIdle: l,
							paused: !d,
							inOverlayPopout: !0,
							context: t
						}, e.id))
					})
				}),
				L = r.memo(function(e) {
					let {
						context: t = Z.Yn.DEFAULT,
						participants: n,
						participantsVersion: o,
						locked: a,
						widget: c,
						channel: u,
						width: d,
						height: p,
						showEmpty: f = !0,
						containerRef: h
					} = e, m = "boolean" != typeof c.meta.horizontal || c.meta.horizontal, g = n.length > 0 && null != t && null != u && (!a || c.pinned);
					r.useEffect(() => {
						(0, x.m3)({
							locked: a,
							pinned: c.pinned,
							widget: c.type,
							isPreviewingInGame: !1
						}, g)
					}, [a, c, g]);
					let y = r.useMemo(() => ({
							opacity: c.opacity
						}), [c.opacity]),
						O = r.useMemo(() => l()({
							[T.videoList]: !0,
							[T.vertical]: !m,
							[T.hidden]: !g && a
						}), [m, g, a]);
					return 0 !== n.length || a ? null == u ? null : (0, i.jsx)("div", {
						ref: h,
						className: O,
						style: y,
						children: (0, i.jsx)(R, {
							context: t,
							participants: n,
							locked: a,
							channel: u,
							width: d,
							height: p,
							shouldDisplay: g,
							participantsVersion: o
						})
					}) : f ? (0, i.jsx)("div", {
						ref: h,
						children: (0, i.jsx)(S.E, {
							emptyText: P.intl.string(P.t["aTiM4+"]),
							icon: s.Odl,
							absolute: !0
						})
					}) : null
				}),
				M = e => {
					let {
						widget: t,
						computedSize: n,
						borderWidth: i,
						padding: r,
						containerSpecs: o
					} = e;
					if (!(0, C.js)(t)) return n;
					let l = "boolean" != typeof t.meta.horizontal || t.meta.horizontal,
						a = 2 * i + 2 * r,
						s = l ? {
							width: Math.max(n.width, N.vZ),
							height: Math.min(n.height, 2 * N.mo + a)
						} : {
							height: Math.max(n.height, N.vZ),
							width: Math.min(n.width, 2 * N.mo + a)
						},
						c = {
							maxWidth: .75 * o.maxX,
							maxHeight: .75 * o.maxY
						};
					return (0, j.h)(s, c)
				};

			function z(e) {
				var t, n, o, l;
				let s = (0, a.e7)([b.Z, y.Z], () => y.Z.getChannel(b.Z.getVoiceChannelId())),
					c = 2 * e.padding + 2 * e.borderWidth,
					f = null == s ? void 0 : s.id,
					[m, O] = (0, a.e7)([p.Z], () => null == f ? [
						[], 0
					] : [p.Z.getVideoParticipants(f), p.Z.getParticipantsVersion(f)], [f], E.Q),
					v = "boolean" != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
					{
						width: _ = e.width - c,
						height: x = e.height - c,
						ref: S
					} = (0, d.ZP)(e.locked, e.widget.pinned),
					{
						participantTileWidth: j,
						visibleParticipants: C
					} = (0, g.ZB)(v ? _ : x, m, {
						tileWidth: N.vZ,
						tileMinWidth: N.mo,
						tileMargin: N.F$,
						limit: 8,
						cropSelfVideo: !0,
						version: O
					}),
					w = (0, a.e7)([h.Z], () => h.Z.getWindowState(N.$J)),
					Z = {
						id: e.widget.id,
						containerSize: {
							containerHeight: x,
							containerWidth: _
						},
						sizeOffset: c,
						padding: e.padding,
						borderWidth: e.borderWidth,
						containerSpecs: {
							maxX: null != (t = null == w ? void 0 : w.width) ? t : e.width - c,
							maxY: null != (n = null == w ? void 0 : w.height) ? n : e.height - c,
							minX: 0,
							minY: 0
						},
						widget: e.widget,
						orientedPosition: {
							top: 0,
							left: 0,
							bottom: null != (o = null == w ? void 0 : w.height) ? o : e.height,
							right: null != (l = null == w ? void 0 : w.width) ? l : e.width
						}
					};
				return ! function(e) {
					let {
						horizontal: t,
						widget: n,
						widgetLayoutSpecs: i
					} = e, o = {
						id: n.id,
						size: n.size,
						containerWidth: i.containerSize.containerWidth,
						containerHeight: i.containerSize.containerHeight,
						widget: n,
						widgetLayoutSpecs: i
					}, l = r.useRef(o);
					r.useLayoutEffect(() => void(l.current = o)), r.useLayoutEffect(() => {
						let {
							size: e,
							id: n,
							containerWidth: i,
							containerHeight: r,
							widget: o,
							widgetLayoutSpecs: a
						} = l.current;
						if (!(t && e.height > e.width || !t && e.width > e.height)) return;
						let {
							width: s,
							height: c
						} = M(D(k({}, a), {
							widget: o,
							operation: I.B.RESIZE_NORTH,
							computedSize: {
								width: r,
								height: i
							},
							originSize: {
								width: r,
								height: i
							}
						}));
						(0, u.nv)({
							widgetId: n,
							size: {
								fixed: !0,
								width: s,
								height: c
							}
						})
					}, [t])
				}({
					horizontal: v,
					widget: e.widget,
					widgetLayoutSpecs: Z
				}), (0, i.jsx)(L, D(k({}, e), {
					channel: s,
					participants: C,
					participantsVersion: O,
					width: v ? j : null != _ ? _ : e.width,
					height: v ? null != x ? x : e.height : j,
					containerRef: S
				}))
			}
		},
		892127: function(e, t, n) {
			n.d(t, {
				Z: () => I
			});
			var i = n(255367),
				r = n(73800),
				o = n(120356),
				l = n.n(o),
				a = n(442837),
				s = n(765250),
				c = n(13245),
				u = n(355863),
				d = n(237997),
				p = n(451478),
				f = n(434529),
				h = n(145597),
				m = n(830917),
				g = n(353038),
				y = n(306381),
				O = n(610394),
				b = n(561064),
				v = n(981631),
				E = n(816530);

			function _(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						i = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), i.forEach(function(t) {
						var i;
						i = n[t], t in e ? Object.defineProperty(e, t, {
							value: i,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : e[t] = i
					})
				}
				return e
			}

			function x(e, t) {
				return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var i = Object.getOwnPropertySymbols(e);
						n.push.apply(n, i)
					}
					return n
				})(Object(t)).forEach(function(n) {
					Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
				}), e
			}
			let I = r.memo(function(e) {
				let {
					widget: t,
					renderWidget: n,
					renderTitle: o,
					renderButtons: I,
					resizeValidation: S,
					className: j,
					dragContainerClassName: C
				} = e, N = u.Z.getWidgetConfig(t.type), w = (0, a.e7)([d.default], () => d.default.isLocked((0, h.getPID)())), Z = (0, b.Z)(), P = (0, a.e7)([p.Z], () => p.Z.windowSize((0, m.ZY)(Z))), T = r.useCallback((e, t, n, i, r) => {
					let o = p.Z.windowSize((0, m.ZY)((0, b.i)())),
						l = (0, f.jL)(n, o),
						a = (0, f.Ox)(i, o);
					(0, s.Os)(t), (0, s.nv)({
						widgetId: t,
						anchor: l,
						size: a
					});
					let d = e === g.B.MOVE,
						h = (0, f.PY)(n, o.width, o.height, r.width, r.height);
					c.Z.track(v.rMx.OVERLAY_LAYOUT_UPDATED, {
						was_resized: !d,
						was_dragged: d,
						widget_type: u.Z.getWidgetType(t),
						window_width: o.width,
						window_height: o.height,
						widget_width: r.width,
						widget_height: r.height,
						widget_left: h.left,
						widget_top: h.top
					})
				}, []), k = r.useCallback(e => {
					(0, s.Os)(e)
				}, []), {
					id: D,
					pinned: A,
					zIndex: R,
					size: L,
					anchor: M,
					minSize: z
				} = t, U = r.useMemo(() => (0, f.w_)(L, P), [L, P]), V = (0, f.KR)(M, P), {
					resizeX: W,
					resizeY: G,
					dragAnywhere: F
				} = null != N ? N : {}, B = A || !w, H = r.useMemo(() => ({
					minX: 0,
					minY: 0,
					maxX: P.width,
					maxY: P.height
				}), [P]), Y = r.useCallback(e => n(x(_({}, e), {
					widget: t,
					dragging: null != e.dragOperation,
					className: j
				})), [t, n, j]), Q = r.useCallback(e => null != o || null != I ? (0, i.jsxs)("div", {
					className: E.extrasContainer,
					children: [null == o ? void 0 : o(t), null == I ? void 0 : I(t, e)]
				}) : null, [t, o, I]), K = (0, a.e7)([O.ZP], () => O.ZP.hasRenderDebugMode(y.G.WidgetAreas)), X = r.useMemo(() => {
					if (null != S) return e => S(x(_({}, e), {
						widget: t
					}))
				}, [S, t]);
				return (0, i.jsx)(g.Z, {
					className: l()({
						[E.debug]: K,
						[E.debugUnpinned]: K && !A,
						[E.debugPinned]: K && A
					}, C),
					id: D,
					size: U,
					anchor: V,
					container: H,
					minSize: null != z ? z : {
						width: 0,
						height: 0
					},
					hidden: !B,
					locked: w,
					resizeX: null != W && W,
					resizeY: null != G && G,
					style: {
						zIndex: R
					},
					dragAnywhere: null != F && F,
					active: !w,
					onUpdate: T,
					onClick: k,
					targetWindow: Z,
					renderExtras: Q,
					resizeValidation: X,
					children: Y
				})
			})
		},
		444982: function(e, t, n) {
			n.d(t, {
				Z: () => x
			});
			var i = n(255367),
				r = n(239091),
				o = n(482798),
				l = n(32300),
				a = n(603618),
				s = n(926086),
				c = n(878939),
				u = n(761374),
				d = n(340101),
				p = n(273816),
				f = n(2923),
				h = n(586742),
				m = n(243487),
				g = n(430561),
				y = n(134849),
				O = n(501787),
				b = n(981631),
				v = n(388032);

			function E(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						i = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), i.forEach(function(t) {
						var i;
						i = n[t], t in e ? Object.defineProperty(e, t, {
							value: i,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : e[t] = i
					})
				}
				return e
			}

			function _(e, t) {
				return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var i = Object.getOwnPropertySymbols(e);
						n.push.apply(n, i)
					}
					return n
				})(Object(t)).forEach(function(n) {
					Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
				}), e
			}
			let x = {
				[b.Odu.VIDEO]: {
					renderWidget(e) {
						let {
							widget: t,
							locked: n,
							size: r,
							padding: o,
							borderWidth: l,
							showEmpty: a
						} = e;
						return (0, d.js)(t) ? (0, i.jsx)(h.Z, {
							id: t.id,
							locked: n,
							widget: t,
							height: "auto" === r.height ? 0 : r.height - 2 * o - 2 * l,
							width: "auto" === r.width ? 0 : r.width - 2 * o - 2 * l,
							showEmpty: a,
							padding: o,
							borderWidth: l
						}) : null
					},
					renderTitle: () => (0, i.jsx)(g.PI, {
						children: v.intl.string(v.t.UPvOiY)
					}),
					renderButtons: (e, t) => (0, i.jsxs)(i.Fragment, {
						children: [(0, i.jsx)(g.ls, {
							onClick: o => {
								(0, d.js)(e) && (0, r.jW)(o, async () => {
									let {
										default: r
									} = await n.e("26775").then(n.bind(n, 740579));
									return t(!0), n => (0, i.jsx)(r, _(E({}, n), {
										widget: e,
										onClose: () => t(!1)
									}))
								})
							}
						}), (0, i.jsx)(g.RT, {
							id: e.id,
							pinned: e.pinned
						})]
					}),
					resizeValidation: h.R
				},
				[b.Odu.VOICE_V3]: {
					renderWidget(e) {
						var t;
						let {
							widget: n,
							anchorLeft: r,
							locked: o,
							showEmpty: l
						} = e;
						return (0, d.Aw)(n) ? (0, i.jsx)(m.ZP, {
							anchorLeft: r,
							id: n.id,
							locked: o,
							pinned: n.pinned,
							widget: b.Odu.VOICE_V3,
							maxDisplayedVoiceStates: null != (t = n.meta.voiceStatesMaxShown) ? t : O.At,
							isPreviewingInGame: !1,
							showEmpty: l
						}) : null
					},
					renderTitle: () => (0, i.jsx)(g.PI, {
						children: v.intl.string(v.t.nFv3GR)
					}),
					renderButtons: (e, t) => (0, i.jsxs)(i.Fragment, {
						children: [(0, i.jsx)(g.ls, {
							onClick: e => {
								(0, r.jW)(e, async () => {
									let {
										default: e
									} = await n.e("32382").then(n.bind(n, 955280));
									return t(!0), n => (0, i.jsx)(e, _(E({}, n), {
										onClose: () => t(!1)
									}))
								})
							}
						}), (0, i.jsx)(g.RT, {
							id: e.id,
							pinned: e.pinned
						})]
					})
				},
				[b.Odu.CLICK_ZONE_DEBUG]: {
					renderWidget(e) {
						let {
							widget: t,
							locked: n
						} = e;
						return (0, i.jsx)(s.Z, {
							id: t.id,
							locked: n,
							pinned: t.pinned
						})
					},
					renderTitle: () => (0, i.jsx)(g.PI, {
						children: "Click Zone Tester"
					}),
					renderButtons: (e, t) => (0, i.jsxs)(i.Fragment, {
						children: [(0, i.jsx)(g.ls, {
							onClick: e => {
								(0, r.jW)(e, async () => {
									let {
										default: e
									} = await n.e("38813").then(n.bind(n, 541501));
									return t(!0), n => (0, i.jsx)(e, _(E({}, n), {
										onClose: () => t(!1)
									}))
								})
							}
						}), (0, i.jsx)(g.RT, {
							id: e.id,
							pinned: e.pinned
						})]
					})
				},
				[b.Odu.PERFORMANCE_DEBUG]: {
					renderWidget(e) {
						let {
							widget: t,
							locked: n,
							anchorLeft: r
						} = e;
						return (0, i.jsx)(p.Z, {
							id: t.id,
							anchorLeft: r,
							locked: n,
							pinned: t.pinned
						})
					},
					renderTitle: () => (0, i.jsx)(g.PI, {
						children: "Overlay Performance"
					}),
					renderButtons: e => (0, i.jsx)(g.RT, {
						id: e.id,
						pinned: e.pinned
					})
				},
				[b.Odu.GO_LIVE]: {
					renderWidget(e) {
						var t;
						let {
							widget: n,
							locked: r,
							size: o,
							dragStart: l,
							anchorTop: a,
							anchorLeft: s,
							showEmpty: c,
							padding: p,
							borderWidth: f
						} = e;
						return (0, d.ZL)(n) ? (0, i.jsx)(u.Z, {
							id: n.id,
							locked: r,
							pinned: n.pinned,
							opacity: n.opacity,
							size: o,
							anchorTop: a,
							anchorLeft: s,
							widget: n,
							isPreviewingInGame: !1,
							dragStart: l,
							horizontal: null != (t = n.meta.horizontal) && t,
							padding: p,
							borderWidth: f,
							showEmpty: c
						}) : null
					},
					renderTitle: () => (0, i.jsx)(g.PI, {
						children: v.intl.string(v.t["386XRk"])
					}),
					renderButtons(e, t) {
						var o;
						return (0, d.ZL)(e) ? (0, i.jsxs)(i.Fragment, {
							children: [(0, i.jsx)(g.ls, {
								onClick: o => {
									(0, d.ZL)(e) && (0, r.jW)(o, async () => {
										let {
											default: r
										} = await n.e("34684").then(n.bind(n, 68738));
										return t(!0), n => (0, i.jsx)(r, _(E({}, n), {
											widget: e,
											onClose: () => t(!1)
										}))
									})
								}
							}), (0, i.jsx)(g.GY, {
								widgetId: e.id,
								showAllStreams: null == (o = e.meta.showAllStreams) || o
							}), (0, i.jsx)(g.RT, {
								id: e.id,
								pinned: e.pinned
							})]
						}) : null
					},
					resizeValidation: u.w
				},
				[b.Odu.QUICK_ACTIONS]: {
					renderWidget(e) {
						let {
							locked: t
						} = e;
						return (0, i.jsx)(f.Z, {
							locked: t
						})
					}
				},
				[b.Odu.NOTIFICATIONS]: {
					renderWidget(e) {
						let {
							locked: t,
							showEmpty: n,
							widget: r
						} = e;
						return (0, i.jsx)(y.Z, {
							pinned: r.pinned,
							locked: t,
							showEmpty: n
						})
					},
					renderTitle: () => (0, i.jsx)(g.PI, {
						children: v.intl.string(v.t.gnKWdX)
					}),
					renderButtons: (e, t) => (0, i.jsxs)(i.Fragment, {
						children: [(0, i.jsx)(g.ls, {
							onClick: e => {
								(0, r.jW)(e, async () => {
									let {
										default: e
									} = await n.e("94706").then(n.bind(n, 168133));
									return t(!0), n => (0, i.jsx)(e, _(E({}, n), {
										onClose: () => t(!1)
									}))
								})
							}
						}), (0, i.jsx)(g.RT, {
							id: e.id,
							pinned: e.pinned
						})]
					})
				},
				[b.Odu.ACTIVITY]: {
					renderWidget(e) {
						let {
							locked: t
						} = e;
						return (0, i.jsx)(a.ZP, {
							locked: t
						})
					},
					renderTitle: () => (0, i.jsx)(g.PI, {
						children: v.intl.string(v.t["6gwSFR"])
					}),
					renderButtons: () => null,
					predicate: () => (0, l.Rb)("ActivityPopout").allowActivityWidget && !(0, o.XU)("FriendsPopout").enableOverlayWidget
				},
				[b.Odu.FRIENDS]: {
					renderWidget(e) {
						let {
							locked: t
						} = e;
						return (0, i.jsx)(c.Z, {
							locked: t
						})
					},
					renderTitle: () => (0, i.jsx)(g.PI, {
						children: v.intl.string(v.t.TdEu5e)
					}),
					renderButtons: () => null,
					predicate: () => (0, o.XU)("FriendsPopout").enableOverlayWidget
				}
			}
		},
		516542: function(e, t, n) {
			n.d(t, {
				Z: () => O
			}), n(388685);
			var i = n(255367),
				r = n(73800),
				o = n(904245),
				l = n(13245),
				a = n(45114),
				s = n(493773),
				c = n(655687),
				u = n(541716),
				d = n(752305),
				p = n(893718),
				f = n(957730),
				h = n(849522),
				m = n(145597),
				g = n(981631),
				y = n(842304);

			function O(e) {
				let {
					id: t,
					replyToMessageId: n,
					channel: O,
					onSend: b
				} = e, v = (0, h.Z)(), {
					placeholder: E,
					accessibilityLabel: _
				} = (0, c.Z)({
					channel: O
				}), [x, I] = r.useState(() => (0, d.H2)()), {
					textValue: S,
					richValue: j
				} = x, [C, N] = r.useState(!1), w = r.useCallback(() => N(!0), []), Z = r.useCallback(() => N(!1), []);
				(0, s.ZP)(() => {
					(0, a.In)(O.id, {
						section: g.jXE.OVERLAY,
						object: g.qAy.ACK_INLINE_REPLY,
						objectType: g.Qqv.ACK_SEMI_AUTOMATIC
					}, !0, !0, n)
				});
				let P = r.useCallback((e, t, n) => {
						I({
							textValue: t,
							richValue: n
						})
					}, []),
					T = r.useCallback(e => {
						"Escape" === e.key && l.Z.updateNotificationStatus(t, g._1z.ACTIVE)
					}, [t]),
					k = r.useCallback(() => (S.length > v || (o.Z.sendMessage(O.id, f.ZP.parse(O, S), !1), l.Z.setInputLocked(!0, (0, m.getPID)()), l.Z.updateNotificationStatus(t, g._1z.DISMISSED), null == b || b(S)), Promise.resolve({
						shouldClear: !1,
						shouldRefocus: !0
					})), [S, v, O, t, b]);
				return (0, i.jsx)("div", {
					className: y.container,
					children: (0, i.jsx)(p.Z, {
						innerClassName: y.textArea,
						onChange: P,
						placeholder: E,
						accessibilityLabel: _,
						channel: O,
						textValue: S,
						richValue: j,
						type: u.Ie.OVERLAY_INLINE_REPLY,
						allowNewLines: !1,
						onBlur: Z,
						onFocus: w,
						focused: C,
						onSubmit: k,
						onKeyDown: T,
						autoCompletePosition: "bottom",
						disableThemedBackground: !0
					})
				})
			}
		},
		618373: function(e, t, n) {
			n.d(t, {
				Q: () => u
			});
			var i = n(255367);
			n(73800);
			var r = n(442837),
				o = n(481060),
				l = n(594190),
				a = n(809357),
				s = n(44359),
				c = n(388032);

			function u(e, t, n, r) {
				return (0, i.jsx)(d, {
					keybind: e,
					message: t,
					messageWithoutKeybind: n,
					highlightAdminWarningIfElevated: r
				})
			}

			function d(e) {
				let {
					keybind: t,
					message: n,
					messageWithoutKeybind: u,
					highlightAdminWarningIfElevated: d = !1
				} = e, p = (0, a.o)();
				return (0, r.e7)([l.ZP], () => {
					let e = l.ZP.getVisibleGame();
					return null != e && e.elevated && l.ZP.canShowAdminWarning
				}) ? (0, i.jsx)(o.Text, {
					variant: "text-xxs/semibold",
					color: d ? "text-feedback-warning" : "text-muted",
					children: c.intl.string(c.t.PIeSHB)
				}) : p ? (0, i.jsx)(i.Fragment, {
					children: c.intl.format(n, {
						keybind: t,
						keybindHook: e => (0, i.jsx)(s.Z, {
							keybind: t
						}, t.join("+"))
					})
				}) : u
			}
		},
		134849: function(e, t, n) {
			n.d(t, {
				Z: () => x
			}), n(539854), n(388685);
			var i = n(255367),
				r = n(73800),
				o = n(442837),
				l = n(481060),
				a = n(486016),
				s = n(804570),
				c = n(624864),
				u = n(388627),
				d = n(561064),
				p = n(380736),
				f = n(693091),
				h = n(371467),
				m = n(981631),
				g = n(388032),
				y = n(76932);
			let O = [];

			function b(e) {
				return e.notification.id
			}

			function v(e, t, n, r) {
				let {
					index: o,
					notification: l,
					locked: a,
					pinned: s
				} = t;
				return (0, i.jsx)(p.Z, {
					index: o,
					notification: l,
					locked: a,
					pinned: s,
					transitionState: n,
					cleanUp: r
				}, e)
			}

			function E(e) {
				return (0, i.jsx)("div", {
					className: y.container,
					children: e
				})
			}
			let _ = e => r.useState(() => new f.AS(e))[0],
				x = r.memo(function(e) {
					let {
						locked: t,
						pinned: n,
						showEmpty: p = !0
					} = e, y = (0, o.e7)([h.Z, c.Z], () => {
						if (c.Z.isNotificationDisabled(a.OverlayNotificationDisabledSetting.TEXT_CHAT)) return O;
						let e = [],
							i = 0;
						for (let r of h.Z.getNotifications()) {
							if (i > 4) break;
							(!t || r.status !== m._1z.TIMED_OUT) && (e.push({
								index: i,
								locked: t,
								pinned: n,
								notification: r
							}), i++)
						}
						return e
					}, [t, n], u.E6), x = _(t);
					return (r.useLayoutEffect(() => x.updateState(y, t)), r.useLayoutEffect(() => (x.initialize((0, d.i)()), () => x.cleanUp()), [x]), 0 !== y.length || t) ? (0, i.jsx)(f.S4.Provider, {
						value: x,
						children: (0, i.jsx)(l.W3x, {
							items: y,
							renderItem: v,
							getItemKey: b,
							wrapChildren: E
						})
					}) : p ? t ? null : (0, i.jsx)(s.E, {
						emptyText: g.intl.string(g.t.O1Nbjo),
						icon: l.Dkj,
						absolute: !0
					}) : null
				})
		},
		371467: function(e, t, n) {
			n.d(t, {
				Z: () => ey
			}), n(539854), n(388685), n(642613), n(290780);
			var i, r = n(512722),
				o = n.n(r),
				l = n(772848),
				a = n(442837),
				s = n(570140),
				c = n(13245),
				u = n(435064),
				d = n(786761),
				p = n(864060),
				f = n(695346),
				h = n(163612),
				m = n(314897),
				g = n(592125),
				y = n(375954),
				O = n(292959),
				b = n(649974),
				v = n(158776),
				E = n(699516),
				_ = n(944486),
				x = n(885110),
				I = n(246946),
				S = n(594174),
				j = n(979651),
				C = n(974180),
				N = n(70956),
				w = n(129724),
				Z = n(145597),
				P = n(486016),
				T = n(32300),
				k = n(371651),
				D = n(624864),
				A = n(610394),
				R = n(340101),
				L = n(388627),
				M = n(996050),
				z = n(609626),
				U = n(421824),
				V = n(777036),
				W = n(955978),
				G = n(333727),
				F = n(585708),
				B = n(588909),
				H = n(981631),
				Y = n(388032);

			function Q(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function K(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						i = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), i.forEach(function(t) {
						Q(e, t, n[t])
					})
				}
				return e
			}

			function X(e, t) {
				return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var i = Object.getOwnPropertySymbols(e);
						n.push.apply(n, i)
					}
					return n
				})(Object(t)).forEach(function(n) {
					Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
				}), e
			}
			let J = 5 * N.Z.Millis.SECOND,
				q = 8 * N.Z.Millis.SECOND,
				$ = 30 * N.Z.Millis.SECOND,
				ee = 30 * N.Z.Millis.SECOND,
				et = Object.freeze({
					timestamp: 0,
					priority: R.Tu.NORMAL,
					duration: J,
					expirationExternallyManaged: !1,
					type: R.kL.GENERIC
				}),
				en = [],
				ei = !1,
				er = [],
				eo = {};

			function el(e, t, n) {
				null == eo[e] && (eo[e] = {}), eo[e][t] = n
			}
			let ea = 30 * N.Z.Millis.MINUTE,
				es = 2 * N.Z.Millis.MINUTE;

			function ec() {
				if (ei && null == en.find(e => e.status === H._1z.FOCUSED))
					for (let e of (ei = !1, en = [...en, ...er], er = [], en.length > 40 && (en.length = 40), en)) e.timer.start()
			}

			function eu() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
				en.filter(e => e.type === R.kL.TEXT && e.status === H._1z.TIMED_OUT).sort((e, t) => t.timestamp - e.timestamp).forEach((t, n) => {
					(n >= e || t.timestamp < Date.now() - $) && ed(t.id, H._1z.DISMISSED)
				})
			}

			function ed(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H._1z.DISMISSED;
				if (null == e) return !1;
				let n = en.findIndex(t => t.id === e);
				if (-1 === n) return !1;
				let i = en[n];
				if (i.timer.stop(), en = [...en], t === H._1z.FOCUSED) {
					let [e] = en.splice(n, 1);
					e = X(K({}, e), {
						status: t
					}), en.unshift(e), ei = !0;
					return
				}
				t === H._1z.DISMISSED ? en.splice(n, 1) : en[n] = X(K({}, i), {
					status: t
				}), ec()
			}

			function ep(e) {
				let t = en.find(t => t.type === R.kL.INCOMING_CALL && t.channelId === e);
				return null != t ? t.id : null
			}

			function ef(e, t) {
				let n = K(X(K({}, et), {
						timestamp: Date.now()
					}), t),
					i = (0, l.Z)(),
					r = !1,
					o = K({
						id: i,
						status: H._1z.ACTIVE,
						timer: function(e) {
							let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
								n = arguments.length > 2 ? arguments[2] : void 0,
								i = -1;
							return {
								start() {
									let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
										o = r ? H._1z.TIMED_OUT : H._1z.DISMISSED; - 1 === i && (i = setTimeout(() => c.Z.updateNotificationStatus(e, o), null != n ? n : J))
								},
								stop() {
									clearTimeout(i), i = -1
								}
							}
						}(i, n.expirationExternallyManaged, n.duration),
						props: X(K({}, e), {
							onNotificationShow: () => {
								var t;
								r || (r = !0, null == (t = e.onNotificationShow) || t.call(e, i))
							}
						})
					}, n),
					a = ei ? er : [...en],
					s = a.findIndex(e => e.priority <= n.priority);
				if (-1 === s ? a.push(o) : a.splice(s, 0, o), a.length > 40) {
					let e = a.pop();
					ei || e.timer.stop()
				}
				return ei || (en = a, o.timer.start()), i
			}

			function eh() {
				if (!(0, T.Yo)("OverlayNotificationStore") || D.Z.isNotificationDisabled(P.OverlayNotificationDisabledSetting.NOW_PLAYING)) return !1;
				let e = b.Z.usersPlaying,
					t = new Set,
					n = function() {
						let e = [];
						for (let t in eo) e.push(...Object.keys(eo[t]).map(e => e));
						return e
					}(),
					i = !1;
				for (let [n, r] of Object.entries(e)) i = i || function(e, t) {
					var n, i;
					if (!E.Z.isFriend(e)) return !1;
					let r = t.gameId;
					if (null == r) return !1;
					let o = null == (n = b.Z.getNowPlaying(r)[e]) ? void 0 : n.activity;
					if (null == o || o.type !== H.IIU.PLAYING || ! function(e) {
							var t;
							let n = (null == (t = e.timestamps) ? void 0 : t.start) != null ? e.timestamps.start : e.created_at;
							return null != n && Date.now() - n < es
						}(o)) return !1;
					let l = _.Z.getVoiceChannelId(),
						a = null == (i = j.Z.getDiscoverableVoiceStateForUser(e)) ? void 0 : i.channelId;
					if (null != l && null != a && l === a) return !1;
					let s = (0, L.pL)();
					if (null == s || s.id !== r) return !1;
					if (! function(e, t) {
							var n, i;
							let r = null === (n = null == (i = eo[e]) ? void 0 : i[t]) || void 0 === n ? void 0 : n.lastSentTimestamp;
							return null == r || Date.now() - r > ea
						}(r, e)) return el(r, e, {
						userId: e,
						gameId: r,
						lastSentTimestamp: Date.now()
					}), !1;
					let c = (0, W.Z)(e, r, o);
					return null != c && (el(r, e, {
						userId: e,
						gameId: r,
						lastSentTimestamp: Date.now()
					}), ef(c, {
						type: R.kL.GENERIC,
						priority: R.Tu.NORMAL
					})), !0
				}(n, r), t.add(n);
				let r = new Set;
				for (let e of n) t.has(e) || r.add(e);
				let o = A.ZP.isOverlayV3EnabledForPID((0, Z.getPID)()) || null != A.ZP.getFocusedPID();
				for (let e of r)
					if (! function(e) {
							let t = v.Z.getActivities(e);
							if (0 === t.length) return !1;
							let n = (0, L.pL)();
							return null != n && null != t.find(e => e.application_id === n.id)
						}(e) && !o) {
						for (let t in eo) {
							let n = eo[t][e];
							null != n && (n.lastSentTimestamp = null)
						}
						i = !0
					} return i
			}

			function em(e) {
				let {
					channelId: t,
					ringing: n
				} = e, i = ep(t);
				if (!n.includes(m.default.getId())) return ed(i);
				if (null != i) return !1;
				let r = g.Z.getChannel(t);
				if (null == r || !r.isRingable() || "GUILD_RING_START" === e.type && !h.Z.getCurrentConfig({
						guildId: e.guildId,
						location: "OverlayV3StartRinging"
					}).enabled || x.Z.getStatus() === H.Skl.DND || f.QZ.getSetting()) return !1;
				let o = en.find(e => e.type === R.kL.TEXT && e.channelId === t && e.messageType === H.uaV.CALL);
				null != o && ed(o.id), ef((0, V.Z)(r), {
					priority: R.Tu.HIGH,
					expirationExternallyManaged: !0,
					type: R.kL.INCOMING_CALL,
					channelId: r.id
				})
			}
			class eg extends(i = a.ZP.Store) {
				initialize() {
					this.waitFor(g.Z, S.default, b.Z, D.Z), this.syncWith([b.Z], eh)
				}
				getNotifications() {
					return en
				}
			}
			Q(eg, "displayName", "OverlayNotificationsStore");
			let ey = new eg(s.Z, {
				OVERLAY_UPDATE_NOTIFICATION_STATUS: function(e) {
					let {
						notificationId: t,
						status: n
					} = e;
					ed(t, n)
				},
				OVERLAY_MOUNTED: function(e) {
					var t;
					let {
						nudges: n
					} = e;
					eu(0);
					let i = null != (t = A.ZP.getFocusedPID()) ? t : Z.UNSET_PID;
					if (k.default.hasChangedRenderMode(i)) return;
					let r = (0, B.Z)((0, L.pL)(), n);
					null != r && ef(r, {
						priority: R.Tu.URGENT,
						type: R.kL.NUDGE,
						duration: q
					})
				},
				OVERLAY_SET_INPUT_LOCKED: function(e) {
					let {
						locked: t
					} = e;
					if (t) {
						for (let e of en) e.status === H._1z.FOCUSED && ed(e.id, H._1z.ACTIVE);
						return !0
					}
					for (let e of (eu(), en)) e.type === R.kL.NUDGE ? ed(e.id, H._1z.DISMISSED) : e.status !== H._1z.ACTIVE || e.expirationExternallyManaged || (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
					if (en.length > 0) {
						var n;
						return ed(null == (n = en.filter(e => e.type === R.kL.TEXT).sort((e, t) => t.timestamp - e.timestamp)[0]) ? void 0 : n.id, H._1z.FOCUSED)
					}
				},
				MESSAGE_CREATE: function(e) {
					var t, n, i, r;
					let {
						channelId: l,
						message: a
					} = e, s = g.Z.getChannel(l), c = S.default.getUser(null == (t = a.author) ? void 0 : t.id);
					if (null == s || null == c) return !1;
					if ((null == (n = a.activity) ? void 0 : n.type) === H.mFx.JOIN || (null == (i = a.activity) ? void 0 : i.type) === H.mFx.JOIN_REQUEST) {
						if (!(0, p.eF)(a, l, !0, !0)) return !1;
						let e = function(e, t, n) {
							var i;
							let r, l;
							if (o()(null != t.activity, "received null message activity"), n.id === m.default.getId()) return !1;
							let a = (0, L.pL)(),
								s = null != (i = null == a ? void 0 : a.altId) ? i : null == a ? void 0 : a.id;
							if (null == a || null == s) return !1;
							switch (t.activity.type) {
								case H.mFx.JOIN:
									if (null == (r = v.Z.getApplicationActivity(n.id, s)) || null == r.party || r.party.id !== t.activity.party_id) return !1;
									l = (0, M.Z)(e, t, n, a, r);
									break;
								case H.mFx.JOIN_REQUEST:
									if (null == (r = x.Z.getApplicationActivity(s)) || null == r.party || r.party.id !== t.activity.party_id) return !1;
									l = (0, G.Z)(e, n, a, r)
							}
							return null != l && (ef(l, {
								priority: R.Tu.URGENT,
								expirationExternallyManaged: !0,
								channelId: e.id,
								duration: ee
							}), !0)
						}(s, a, c);
						if (!1 !== e) return e
					}
					if (D.Z.isNotificationDisabled(P.OverlayNotificationDisabledSetting.TEXT_CHAT) || I.Z.disableNotifications || !(0, p.eF)(a, l)) return !1;
					let u = !O.Z.isSoundDisabled(C.Ay),
						f = null != (r = y.Z.getMessage(l, a.id)) ? r : (0, d.e5)(a);
					ef((0, F.Z)(s, f, c, u), {
						type: R.kL.TEXT,
						channelId: s.id,
						expirationExternallyManaged: !0,
						messageType: a.type
					}), eu()
				},
				CHANNEL_SELECT: function(e) {
					let {
						channelId: t
					} = e;
					return null != t && function(e) {
						let t = en.length,
							n = (en = en.filter(t => t.type !== R.kL.TEXT || t.channelId !== e)).length !== t;
						return n && ec(), n
					}(t)
				},
				MESSAGE_ACK: function() {},
				CALL_CREATE: em,
				CALL_UPDATE: em,
				CALL_DELETE: function(e) {
					let {
						channelId: t
					} = e;
					ed(ep(t))
				},
				GUILD_RING_START: em,
				GUILD_RING_STOP: function(e) {
					let {
						channelId: t,
						guildId: n,
						ringing: i
					} = e;
					if (!h.Z.getCurrentConfig({
							guildId: n,
							location: "OverlayV3StopRinging"
						}).enabled) return !1;
					i.includes(m.default.getId()) && ed(ep(t))
				},
				ACTIVITY_USER_ACTION: function(e) {
					let t, {
							actionType: n,
							user: i,
							applicationId: r
						} = e,
						o = (0, L.pL)();
					return null != o && (null == o ? void 0 : o.id) != null && (o.id === r || o.altId === r) && (n === H.mFx.JOIN && (t = (0, z.Z)(i, o)), null != t && void ef(t, {
						priority: R.Tu.URGENT,
						type: R.kL.GENERIC
					}))
				},
				CLIPS_SAVE_CLIP_START: function() {
					ef((0, U.f)(Y.intl.string(Y.t.NBMK9v)))
				},
				CLIPS_SAVE_CLIP: function() {
					ef((0, U.f)(Y.intl.format(Y.t.KLhk6u, {
						duration: (0, w.A)(u.Z.getSettings().clipsLength / 1e3, !0)
					})))
				},
				CLIPS_SAVE_CLIP_ERROR: function() {
					ef((0, U.f)(Y.intl.string(Y.t["1ZbZur"])))
				},
				STREAM_START: function(e) {
					let t = (0, U.y)();
					null != t && ef(t)
				}
			})
		},
		620954: function(e, t, n) {
			n.d(t, {
				P: () => d,
				R: () => u
			}), n(35282);
			var i = n(13245),
				r = n(556296),
				o = n(237997),
				l = n(13140),
				a = n(145597),
				s = n(987650),
				c = n(981631);

			function u(e, t) {
				return {
					trackView() {
						i.Z.track(c.rMx.NOTIFICATION_VIEWED, t), i.Z.notificationEvent(e, s.bv.Viewed)
					},
					trackClick(n) {
						var r, l;
						let u = o.default.isLocked((0, a.getPID)()) ? c.Sbl.LOCKED_OVERLAY : c.Sbl.UNLOCKED_OVERLAY;
						i.Z.track(c.rMx.NOTIFICATION_CLICKED, (r = function(e) {
							for (var t = 1; t < arguments.length; t++) {
								var n = null != arguments[t] ? arguments[t] : {},
									i = Object.keys(n);
								"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
									return Object.getOwnPropertyDescriptor(n, e).enumerable
								}))), i.forEach(function(t) {
									var i;
									i = n[t], t in e ? Object.defineProperty(e, t, {
										value: i,
										enumerable: !0,
										configurable: !0,
										writable: !0
									}) : e[t] = i
								})
							}
							return e
						}({}, t), l = l = {
							location: u,
							action_type: n
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var i = Object.getOwnPropertySymbols(e);
								n.push.apply(n, i)
							}
							return n
						})(Object(l)).forEach(function(e) {
							Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
						}), r)), i.Z.notificationEvent(e, s.bv.Clicked)
					}
				}
			}

			function d() {
				let e = r.ZP.getOverlayKeybind();
				return null != e ? (0, l.BB)(e.shortcut, !0).split(" + ") : ["???"]
			}
		},
		996050: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var i = n(224706),
				r = n(13245),
				o = n(864060),
				l = n(620954),
				a = n(987650),
				s = n(388032);

			function c(e, t, n, c, u) {
				if (null == t.activity || null == c.id) return null;
				let d = t.activity.type,
					p = u.session_id;
				if (null == p) return null;
				let {
					icon: f,
					title: h,
					body: m
				} = (0, o.Xi)(e, t, n), {
					trackView: g,
					trackClick: y
				} = (0, l.R)(a.n0.ActivityInvite, {
					notif_type: a.n0.ActivityInvite,
					notif_user_id: n.id,
					message_id: t.id,
					message_type: t.type,
					guild_id: e.guild_id,
					channel_id: e.id,
					channel_type: e.type,
					activity_type: d,
					activity_name: u.name
				});
				return {
					icon: f,
					title: h,
					body: m,
					onNotificationShow: () => {
						g()
					},
					confirmText: s.intl.string(s.t.VJlc0d),
					onConfirmClick: (o, l) => {
						var a;
						i.Z.join({
							userId: n.id,
							sessionId: p,
							applicationId: null != (a = c.altId) ? a : c.id,
							channelId: e.id,
							messageId: t.id
						}), r.Z.updateNotificationStatus(l), y("join")
					},
					onDismissClick: () => {
						y("dismiss")
					}
				}
			}
		},
		609626: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			var i = n(768581),
				r = n(620954),
				o = n(987650),
				l = n(981631),
				a = n(388032);

			function s(e, t) {
				let n = e.username,
					s = a.intl.format(a.t["Yk+uYG"], {
						username: ""
					}),
					c = (0, i.ov)(e),
					u = a.intl.string(a.t.WRj1Wl),
					{
						trackView: d,
						trackClick: p
					} = (0, r.R)(o.n0.ActivityUserJoin, {
						notif_type: o.n0.ActivityUserJoin,
						notif_user_id: e.id,
						activity_type: l.mFx.JOIN,
						activity_name: t.name
					});
				return {
					icon: c,
					title: n,
					body: s,
					hint: u,
					onNotificationShow: () => {
						d()
					},
					onDismissClick: () => {
						p("dismiss")
					}
				}
			}
		},
		421824: function(e, t, n) {
			n.d(t, {
				f: () => h,
				y: () => f
			}), n(35282);
			var i = n(255367);
			n(73800);
			var r = n(481060),
				o = n(522474),
				l = n(556296),
				a = n(13140),
				s = n(44359),
				c = n(620954),
				u = n(987650),
				d = n(981631),
				p = n(388032);

			function f() {
				if (o.Z.getWindowOpen(d.KJ3.ACTIVITY_POPOUT)) return null;
				let {
					trackView: e,
					trackClick: t
				} = (0, c.R)(u.n0.ClipsReminderNotification, {
					notif_type: u.n0.ClipsReminderNotification
				}), n = l.ZP.getKeybindForAction(d.kg4.SAVE_CLIP);
				if (null == n) return null;
				let f = a.BB(n.shortcut, !0);
				return {
					title: p.intl.format(p.t.S5uhCA, {
						keybind: f,
						keybindHook: (e, t) => (0, i.jsx)(s.Z, {
							keybind: f.split("+")
						}, t)
					}),
					icon: (0, i.jsx)(r.AlX, {
						size: "lg",
						color: "currentColor"
					}),
					onNotificationShow: () => {
						e()
					},
					onDismissClick: () => {
						t("dismiss")
					}
				}
			}

			function h(e) {
				let {
					trackView: t,
					trackClick: n
				} = (0, c.R)(u.n0.ClipsNotification, {
					notif_type: u.n0.ClipsNotification
				});
				return {
					title: e,
					icon: (0, i.jsx)(r.AlX, {
						size: "lg",
						color: "currentColor"
					}),
					onNotificationShow: () => {
						t()
					},
					onDismissClick: () => {
						n("dismiss")
					}
				}
			}
		},
		777036: function(e, t, n) {
			n.d(t, {
				Z: () => m
			});
			var i = n(26151),
				r = n(13245),
				o = n(287734),
				l = n(43267),
				a = n(933557),
				s = n(699516),
				c = n(594174),
				u = n(614554),
				d = n(620954),
				p = n(987650),
				f = n(981631),
				h = n(388032);

			function m(e) {
				let t = (0, a.F6)(e, c.default, s.Z),
					n = h.intl.string(h.t.ssrVzM),
					m = (0, l.x)(e),
					g = (0, u.Z)(e),
					{
						trackView: y,
						trackClick: O
					} = (0, d.R)(p.n0.IncomingCall, {
						notif_type: p.n0.IncomingCall,
						notif_user_id: g,
						guild_id: e.guild_id,
						channel_id: e.id,
						channel_type: e.type
					});
				return {
					icon: m,
					title: t,
					body: n,
					confirmText: h.intl.string(h.t["0D/6R0"]),
					cancelText: h.intl.string(h.t.BVN4pK),
					onNotificationShow: () => {
						y()
					},
					onConfirmClick: (t, n) => {
						if (O("join"), f.TPd.CALLABLE.has(e.type)) i.Z.call(e.id, !1, !1);
						else {
							if (e.type !== f.d4z.GUILD_VOICE) return;
							o.default.selectVoiceChannel(e.id)
						}
						r.Z.updateNotificationStatus(n), r.Z.track(f.rMx.VOICE_CHANNEL_SELECTED, {
							location: "Overlay Notificaiton",
							guild_id: e.guild_id,
							channel_id: e.id,
							video_enabled: !1
						})
					},
					onCancelClick: () => {
						O("decline"), i.Z.stopRinging(e.id)
					},
					onDismissClick: () => {
						O("dismiss")
					}
				}
			}
		},
		955978: function(e, t, n) {
			n.d(t, {
				Z: () => y
			});
			var i = n(255367),
				r = n(481060),
				o = n(700582),
				l = n(812206),
				a = n(594190),
				s = n(925329),
				c = n(592125),
				u = n(944486),
				d = n(594174),
				p = n(5192),
				f = n(620954),
				h = n(987650),
				m = n(388032),
				g = n(484762);

			function y(e, t, n) {
				var y;
				let O = d.default.getUser(e);
				if (null == O) return null;
				let b = u.Z.getCurrentlySelectedChannelId(),
					v = c.Z.getChannel(b),
					E = l.Z.getApplication(t),
					_ = a.ZP.getRunningGames().find(e => e.id === t),
					x = null != (y = null == _ ? void 0 : _.name) ? y : null == E ? void 0 : E.name,
					I = (0, p.oY)(null == v ? void 0 : v.guild_id, null == v ? void 0 : v.id, O),
					S = (0, i.jsxs)("div", {
						className: g.nowPlayingNotification,
						children: [(0, i.jsx)("div", {
							className: g.nowPlayingNotificationIcon,
							children: (0, i.jsx)(o.Z, {
								user: O,
								"aria-hidden": !0,
								size: r.EFr.SIZE_24
							})
						}), (0, i.jsx)("div", {
							className: g.body,
							children: (0, i.jsx)(r.Text, {
								variant: "text-sm/medium",
								color: "interactive-normal",
								className: g.bodyText,
								children: m.intl.format(m.t["q7/rgo"], {
									username: null != I ? I : O.username,
									gameName: x,
									gameIcon: () => null != E || null != _ ? (0, i.jsx)(s.Z, {
										game: E,
										pid: null == _ ? void 0 : _.pid,
										size: s.Z.Sizes.XSMALL,
										className: g.gameIcon
									}) : null
								})
							})
						})]
					}),
					{
						trackView: j,
						trackClick: C
					} = (0, f.R)(h.n0.NowPlayingNotification, {
						notif_type: h.n0.NowPlayingNotification,
						notif_user_id: O.id,
						activity_type: n.type,
						activity_name: null != x ? x : n.name
					});
				return {
					body: S,
					className: g.nowPlayingNotificationContainer,
					wrapperClassName: g.nowPlayingNotificationWrapper,
					animationWrapperClassName: g.nowPlayingNotificationAnimationWrapper,
					maxBodyLines: 1,
					disableClickableRegions: !0,
					onNotificationShow: () => {
						j()
					},
					onDismissClick: () => {
						C("dismiss")
					}
				}
			}
		},
		333727: function(e, t, n) {
			n.d(t, {
				Z: () => p
			});
			var i = n(278323),
				r = n(13245),
				o = n(45114),
				l = n(237997),
				a = n(145597),
				s = n(620954),
				c = n(987650),
				u = n(981631),
				d = n(388032);

			function p(e, t, n, p) {
				let f = t.username,
					h = d.intl.format(d.t.VDODnp, {
						username: "",
						game: n.name
					}),
					m = t.getAvatarURL(e.guild_id, 80),
					{
						trackView: g,
						trackClick: y
					} = (0, s.R)(c.n0.ActivityInvite, {
						notif_type: c.n0.ActivityInvite,
						notif_user_id: t.id,
						activity_type: u.mFx.JOIN_REQUEST,
						activity_name: p.name
					});
				return {
					icon: m,
					title: f,
					body: h,
					confirmText: d.intl.string(d.t["fgP/wc"]),
					cancelText: d.intl.string(d.t.tpXzJy),
					onNotificationShow: () => {
						g()
					},
					onConfirmClick: (t, n) => {
						i.Z.sendActivityInvite({
							channelId: e.id,
							type: u.mFx.JOIN,
							activity: p,
							location: l.default.isLocked((0, a.getPID)()) ? u.Sbl.LOCKED_OVERLAY : u.Sbl.UNLOCKED_OVERLAY
						}), y("join"), r.Z.updateNotificationStatus(n)
					},
					onCancelClick: (t, n) => {
						(0, o.In)(e.id, {
							section: u.jXE.OVERLAY,
							object: u.qAy.ACK_DECLINE_REQUEST_TO_JOIN,
							objectType: u.Qqv.ACK_SEMI_AUTOMATIC
						}, !0, !0), r.Z.updateNotificationStatus(n), y("decline")
					},
					onDismissClick: () => {
						y("dismiss")
					}
				}
			}
		},
		585708: function(e, t, n) {
			n.d(t, {
				Z: () => E
			});
			var i = n(255367);
			n(73800);
			var r = n(13245),
				o = n(45114),
				l = n(937889),
				a = n(864060),
				s = n(703656),
				c = n(460181),
				u = n(974180),
				d = n(358085),
				p = n(998502),
				f = n(145597),
				h = n(610394),
				m = n(516542),
				g = n(618373),
				y = n(620954),
				O = n(987650),
				b = n(981631),
				v = n(388032);

			function E(e, t, n, E) {
				var _;
				let {
					icon: x,
					title: I,
					body: S
				} = (0, a.Xi)(e, t, n), {
					trackView: j,
					trackClick: C
				} = (0, y.R)(O.n0.TextChat, {
					notif_type: O.n0.TextChat,
					notif_user_id: null == (_ = t.author) ? void 0 : _.id,
					message_id: t.id,
					message_type: t.type,
					guild_id: e.guild_id,
					channel_id: e.id,
					channel_type: e.type
				});
				return {
					icon: x,
					title: I,
					body: t.content.length > 0 ? (0, l.ZP)(t, {
						noStyleAndInteraction: !0,
						formatInline: !0,
						hideSimpleEmbedContent: !1
					}).content : S,
					hint: (e, t) => e && !t ? null : (0, g.Q)((0, y.P)(), v.t.ykjOAA, v.intl.string(v.t.jZkzVF)),
					maxBodyLines: 2,
					renderFooter: (n, r, o) => n && !o ? (0, i.jsx)(m.Z, {
						id: r,
						replyToMessageId: t.id,
						channel: e,
						onSend: () => C("send")
					}) : null,
					onNotificationShow: () => {
						E && (0, c.GN)(u.Ay, u.yk), j()
					},
					onNotificationClick: () => {
						let n = (0, f.getPID)();
						(0, o.In)(e.id, {
							section: b.jXE.OVERLAY,
							object: b.qAy.ACK_TEXT_CHAT_NOTIFICATION,
							objectType: b.Qqv.ACK_SEMI_AUTOMATIC
						}, !0, !0, t.id), h.ZP.isInputLocked(n) ? (C("unlock"), r.Z.setInputLocked(!1, n)) : (C("jump"), (0, s.uL)(b.Z5c.CHANNEL(e.guild_id, e.id, t.id)), d.isPlatformEmbedded && p.ZP.focus())
					},
					onDismissClick: () => {
						C("dismiss")
					}
				}
			}
		},
		588909: function(e, t, n) {
			n.d(t, {
				Z: () => N
			}), n(388685);
			var i = n(255367);
			n(73800);
			var r = n(704215),
				o = n(952265),
				l = n(24124),
				a = n(13245),
				s = n(620662),
				c = n(835473),
				u = n(442550),
				d = n(266454),
				p = n(293273),
				f = n(145597),
				h = n(32300),
				m = n(603618),
				g = n(618373),
				y = n(620954),
				O = n(987650),
				b = n(981631),
				v = n(602091),
				E = n(701488),
				_ = n(388032),
				x = n(560226),
				I = n(19782);

			function S(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						i = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), i.forEach(function(t) {
						var i;
						i = n[t], t in e ? Object.defineProperty(e, t, {
							value: i,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : e[t] = i
					})
				}
				return e
			}

			function j(e, t) {
				return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var i = Object.getOwnPropertySymbols(e);
						n.push.apply(n, i)
					}
					return n
				})(Object(t)).forEach(function(n) {
					Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
				}), e
			}

			function C(e) {
				let {
					game: t
				} = e, n = (0, c.q)(t.id);
				return null == n ? null : (0, i.jsx)(u.f, {
					src: n.getIconURL(E.Si.LARGE),
					size: 40
				})
			}

			function N(e, t) {
				let {
					trackView: c,
					trackClick: u
				} = (0, y.R)(O.n0.WelcomeNudge, {
					notif_type: O.n0.WelcomeNudge,
					secondary_notif_types: t.map(e => O.nc[e.type])
				}), E = {};
				for (let r of t) switch (r.type) {
					case O.nc.WELCOME: {
						let t = (null == e ? void 0 : e.altId) != null ? p.Z.getApplicationActivity(e.altId) : (null == e ? void 0 : e.id) != null ? p.Z.getApplicationActivity(e.id) : null;
						null != t && (0, s.Z)(t, b.xjy.JOIN) && (E.cancelText = _.intl.string(_.t["6F9ivr"]), E.onCancelClick = (e, n) => {
							u("unlock"), a.Z.updateNotificationStatus(n), a.Z.setInputLocked(!1, (0, f.getPID)()), (0, l.h7)(t, !1, b.IlC.POPOUT)
						});
						break
					}
					case O.nc.GO_LIVE_VOICE:
					case O.nc.GO_LIVE_NON_VOICE:
						E.confirmText = _.intl.string(_.t.U76Ft7), E.onConfirmClick = (e, t) => {
							u("unlock"), a.Z.updateNotificationStatus(t), a.Z.setInputLocked(!1, (0, f.getPID)()), (0, o.ZD)(async () => {
								let {
									default: e
								} = await Promise.all([n.e("46746"), n.e("32087")]).then(n.bind(n, 60594));
								return t => (0, i.jsx)(e, j(S({}, t), {
									selectSource: !1,
									sourcePID: (0, f.getPID)(),
									guildId: r.type === O.nc.GO_LIVE_VOICE ? r.voiceGuild.id : void 0,
									selectGuild: r.type === O.nc.GO_LIVE_NON_VOICE,
									analyticsLocation: b.Sbl.OVERLAY_NUDGE
								}))
							}, {
								contextKey: v.u1
							})
						};
						break;
					case O.nc.CONTENT_INVENTORY:
						(0, h.Rb)("welcomeNotification").allowActivityWidget && (E.renderFooter = () => (0, i.jsx)(m.lX, {
							gamingId: null == e ? void 0 : e.id,
							maxUserShowCount: 5,
							className: I.container
						}), E.onNotificationShow = () => {
							a.Z.track(b.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
								user_ids: r.entries.map(e => e.author_id),
								entry_ids: r.entries.map(e => e.id)
							})
						})
				}
				let N = (0, d.zu)(r.z.OVERLAY_OOP_WELCOME_NUX),
					w = N ? _.intl.string(_.t.KWDIrq) : _.intl.string(_.t["prl+ra"]),
					Z = N ? void 0 : _.intl.string(_.t.R3CpPT),
					P = null != e ? (0, i.jsx)(C, {
						game: e
					}) : (0, i.jsx)("img", {
						src: n(328756),
						className: x.icon,
						alt: ""
					});
				return j(S({
					icon: P,
					title: w,
					body: Z,
					hint: () => (0, g.Q)((0, y.P)(), _.t["z8/sgI"], _.intl.string(_.t.jZkzVF), !0),
					confirmText: N ? void 0 : _.intl.string(_.t.TxyTbm),
					onConfirmClick: N ? void 0 : () => {
						u("unlock"), a.Z.setInputLocked(!1, (0, f.getPID)()), N || (0, d.Q3)(r.z.OVERLAY_OOP_WELCOME_NUX)
					}
				}, E), {
					onNotificationShow: e => {
						var t;
						c(), N || (0, d.Q3)(r.z.OVERLAY_OOP_WELCOME_NUX), null == (t = E.onNotificationShow) || t.call(E, e)
					},
					onNotificationClick: (e, t) => {
						var n;
						u("unlock"), a.Z.setInputLocked(!1, (0, f.getPID)()), N || (0, d.Q3)(r.z.OVERLAY_OOP_WELCOME_NUX), null == (n = E.onNotificationClick) || n.call(E, e, t)
					},
					onDismissClick: (e, t) => {
						var n;
						u("dismiss"), N || (0, d.Q3)(r.z.OVERLAY_OOP_WELCOME_NUX), null == (n = E.onDismissClick) || n.call(E, e, t)
					}
				})
			}
		},
		890828: function(e, t, n) {
			n.d(t, {
				Z: () => W
			}), n(361932), n(187205), n(388685), n(642613), n(781311), n(539854), n(472816), n(794429);
			var i = n(255367),
				r = n(73800),
				o = n(120356),
				l = n.n(o),
				a = n(442837),
				s = n(481060),
				c = n(933557),
				u = n(471445),
				d = n(686546),
				p = n(318374),
				f = n(305347),
				h = n(473403),
				m = n(99214),
				g = n(46145),
				y = n(886118),
				O = n(301801),
				b = n(752048),
				v = n(592125),
				E = n(984933),
				_ = n(430824),
				x = n(496675),
				I = n(699516),
				S = n(594174),
				j = n(979651),
				C = n(823379),
				N = n(136015),
				w = n(981631),
				Z = n(388032),
				P = n(688095);
			let T = e => [e.userId, ... function(e) {
					let t = S.default.getUser(e.userId);
					if (null == t) return [];
					let n = t.username,
						i = (0, m.e3)(t);
					return Array.from(new Set([n, i.nick, ...Object.values(i.names)].flat().filter(C.lm)))
				}(e)],
				k = {
					searchType: y.S.FUZZY,
					sortType: y.E.JARO_WINKLER,
					searchStringGenerator: e => {
						var t, n;
						let {
							channel: i,
							voiceStates: r
						} = e;
						return [i.name, i.id, i.guild_id, null != (n = null == (t = _.Z.getGuild(i.guild_id)) ? void 0 : t.name) ? n : "", ...r.flatMap(e => T(e))].filter(C.lm)
					},
					throttleMs: 100
				},
				D = {
					searchType: y.S.FUZZY,
					sortType: y.E.JARO_WINKLER,
					searchStringGenerator: T,
					throttleMs: 100
				},
				A = r.memo(function(e) {
					let {
						channel: t,
						query: n
					} = e, [o] = (0, a.e7)([j.Z], () => [j.Z.getVoiceStatesForChannel(t.id), j.Z.getVoiceStateVersion()], [t.id], N.Q), [l, c] = r.useState([]);
					(0, O.BO)(n, Object.values(o), c, D);
					let u = (0, a.Wu)([j.Z, S.default, b.Z, I.Z], () => Object.values(j.Z.getVoiceStatesForChannel(t.id)).map(e => S.default.getUser(e.userId)).filter(C.lm).sort((e, t) => {
							var i, r, o, a;
							if (l.length > 0 && "" !== n.trim()) {
								if (l.some(t => t.userId === e.id)) return -1;
								if (l.some(e => e.userId === t.id)) return 1
							}
							return I.Z.isFriend(e.id) && !I.Z.isFriend(t.id) ? -1 : !I.Z.isFriend(e.id) && I.Z.isFriend(t.id) ? 1 : (null != (o = null == (i = b.Z.getUserAffinity(t.id)) ? void 0 : i.vcProbability) ? o : 0) - (null != (a = null == (r = b.Z.getUserAffinity(e.id)) ? void 0 : r.vcProbability) ? a : 0)
						}), [t.id, l, n]),
						d = t.getGuildId(),
						f = Math.max(l.length, 2);
					return null == d ? null : (0, i.jsx)(p.Z, {
						users: u,
						guildId: d,
						maxUsers: Math.min(f, 4),
						size: s.EFr.SIZE_24,
						overflowCountClassName: P.overflowCount,
						overflowCountVariant: "text-xs/semibold",
						disableUserPopout: !0
					})
				}),
				R = r.memo(function(e) {
					var t;
					let {
						channel: n
					} = e, r = n.getGuildId(), o = (0, a.e7)([_.Z], () => _.Z.getGuild(r), [r]);
					if (null == o) switch (n.type) {
						case w.d4z.DM:
							return (0, i.jsx)(h.je, {
								channel: n,
								size: s.EFr.SIZE_32
							});
						case w.d4z.GROUP_DM:
							return (0, i.jsx)(h.ge, {
								channel: n,
								size: s.EFr.SIZE_32
							});
						default:
							return null
					}
					return (0, i.jsx)(d.ZP, {
						mask: d.QS.CLAN_ICON,
						width: 32,
						height: 32,
						children: (0, i.jsx)("div", {
							className: P.guildIconWrapper,
							children: (0, i.jsx)(f.Ft, {
								guildId: o.id,
								guildName: null != (t = o.name) ? t : Z.intl.string(Z.t.DmIUGB),
								guildIcon: o.icon,
								iconSize: 32
							})
						})
					})
				}),
				L = r.memo(function(e) {
					var t;
					let {
						channelId: n,
						isHighlighted: r,
						currentVoiceChannel: o,
						onClick: d,
						onMouseOver: p,
						onMouseLeave: f,
						query: h
					} = e, m = (0, a.e7)([v.Z], () => v.Z.getChannel(n), [n]), g = null == m ? void 0 : m.getGuildId(), y = (0, a.e7)([_.Z], () => _.Z.getGuild(g), [g]), O = (0, u.KS)(m, y), b = (null == o ? void 0 : o.id) === n, E = b ? "text-feedback-positive" : r ? "interactive-active" : "text-muted", x = b ? s.TVs.colors.TEXT_FEEDBACK_POSITIVE : r ? s.TVs.colors.INTERACTIVE_ACTIVE : s.TVs.colors.ICON_MUTED;
					return null == m ? null : (0, i.jsxs)(s.kL8, {
						className: l()(P.channelItemContainer, r && P.channelItemHighlighted),
						"aria-label": m.name,
						onClick: () => d(n),
						onMouseOver: () => p(n),
						onMouseLeave: () => f(n),
						children: [(0, i.jsx)("div", {
							className: P.channelItemIcon,
							children: (0, i.jsx)(R, {
								channel: m
							})
						}), (0, i.jsxs)("div", {
							className: P.channelItemNameContainer,
							children: [(0, i.jsxs)("div", {
								className: P.channelItemName,
								children: [null != O ? (0, i.jsx)(O, {
									color: x,
									size: "xs",
									className: P.channelIcon
								}) : void 0, (0, i.jsx)(s.Text, {
									variant: b ? "text-sm/semibold" : "text-sm/medium",
									color: E,
									className: P.channelItemNameText,
									children: (0, c.F6)(m, S.default, I.Z)
								})]
							}), (0, i.jsx)(s.Text, {
								variant: b ? "text-xs/semibold" : "text-xs/medium",
								color: E,
								children: null != (t = null == y ? void 0 : y.name) ? t : m.name
							})]
						}), (0, i.jsx)("div", {
							className: P.channelItemAvatars,
							children: (0, i.jsx)(A, {
								channel: m,
								currentVoiceChannel: o,
								query: h
							})
						})]
					})
				}),
				M = r.memo(function(e) {
					let {
						emptyText: t
					} = e;
					return (0, i.jsx)("div", {
						className: P.emptyChannelItem,
						children: (0, i.jsx)(s.Text, {
							variant: "text-md/normal",
							color: "text-primary",
							children: t
						})
					})
				}),
				z = r.memo(function(e) {
					let {
						sectionHeader: t,
						channelIds: n,
						currentVoiceChannel: o,
						onSelect: l,
						hasQuery: a,
						query: c,
						scrollable: u = !0
					} = e, [d, p] = r.useState(null), f = e => {
						p(e)
					}, h = () => {
						p(null)
					}, m = e => () => {
						l(e)
					}, g = u ? s.zJl : "div";
					return (0, i.jsxs)("div", {
						children: [(0, i.jsx)("div", {
							className: P.recentChannelsMenuHeader,
							children: (0, i.jsx)(s.Text, {
								variant: "text-sm/semibold",
								color: "text-muted",
								children: t
							})
						}), (0, i.jsxs)(g, {
							className: P.channelList,
							children: [a && 0 === n.length && (0, i.jsx)(M, {
								emptyText: Z.intl.string(Z.t.nxSS09)
							}), n.map(e => (0, i.jsx)(L, {
								channelId: e,
								isHighlighted: e === d,
								currentVoiceChannel: o,
								onClick: m(e),
								onMouseOver: f,
								onMouseLeave: h,
								query: c
							}, e))]
						})]
					})
				});

			function U(e) {
				let {
					searchQuery: t,
					currentVoiceChannel: n,
					onSelect: r
				} = e, {
					recentVoiceChannelIds: o,
					friendVoiceChannelIds: c
				} = function() {
					let e = function() {
							let e = (0, a.Wu)([S.default, I.Z, b.Z], () => I.Z.getFriendIDs().sort((e, t) => {
								var n, i, r, o;
								return null == e && null == t ? 0 : null == e ? 1 : null == t ? -1 : (null != (r = null == (n = b.Z.getUserAffinity(t)) ? void 0 : n.communicationProbability) ? r : 0) - (null != (o = null == (i = b.Z.getUserAffinity(e)) ? void 0 : i.communicationProbability) ? o : 0)
							}).reduce((e, t) => {
								let n = S.default.getUser(t);
								return null != n && e.push(n), e
							}, []), []);
							return (0, a.Wu)([j.Z, v.Z, x.Z], () => Array.from(e.map(e => j.Z.getDiscoverableVoiceStateForUser(e.id)).reduce((e, t) => {
								let n = null == t ? void 0 : t.channelId;
								if (null == n) return e;
								let i = v.Z.getChannel(n);
								return null != i && x.Z.can(w.Plq.CONNECT, i) && e.add(n), e
							}, new Set)).filter(C.lm), [e])
						}(),
						t = (0, a.Wu)([g.Z, v.Z, x.Z], () => {
							let t = g.Z.getChannelHistory(),
								n = new Set(e);
							return Array.from(new Set(t.reduce((e, t) => {
								let i = v.Z.getChannel(t);
								return null != i && x.Z.can(w.Plq.CONNECT, i) && !n.has(t) && e.push(t), e
							}, [])))
						}, [e]);
					return {
						friendVoiceChannelIds: e,
						recentVoiceChannelIds: t
					}
				}();
				return o.length > 0 || c.length > 0 ? (0, i.jsxs)(s.zJl, {
					className: l()(P.channelList, P.channelListWrapper),
					children: [o.length > 0 && (0, i.jsx)(z, {
						sectionHeader: Z.intl.string(Z.t.lnk2NT),
						channelIds: o.slice(0, 3),
						hasQuery: !1,
						query: t,
						currentVoiceChannel: n,
						onSelect: r,
						scrollable: !1
					}), c.length > 0 && (0, i.jsx)(z, {
						sectionHeader: Z.intl.string(Z.t["0lvb9P"]),
						channelIds: c.slice(0, 8),
						hasQuery: !1,
						query: t,
						currentVoiceChannel: n,
						onSelect: r,
						scrollable: !1
					})]
				}) : (0, i.jsx)(M, {
					emptyText: Z.intl.string(Z.t["3ET7Aw"])
				})
			}

			function V(e) {
				e.stopPropagation()
			}

			function W(e) {
				var t, n;
				let {
					currentVoiceChannel: o,
					onClose: l,
					onSelect: c
				} = e, u = (0, a.Wu)([_.Z, E.ZP, j.Z, I.Z, x.Z], () => _.Z.getGuildsArray().reduce((e, t) => [...e, ...E.ZP.getChannels(t.id)[E.Zb].filter(e => x.Z.can(w.Plq.VIEW_CHANNEL, e.channel) && x.Z.can(w.Plq.CONNECT, e.channel)).map(e => {
					let {
						channel: t
					} = e;
					return t
				})], []).map(e => ({
					channel: e,
					voiceStates: Object.values(j.Z.getVoiceStatesForChannel(e.id)).filter(e => I.Z.isFriend(e.userId))
				})), []), [d, p] = r.useState(""), [f, h] = r.useState([]);
				(0, O.BO)(d, u, h, k);
				let m = r.useCallback(e => {
						"Escape" === e.key && l()
					}, [l]),
					g = r.useCallback(e => {
						c(e), l()
					}, [c, l]);
				r.useEffect(() => (document.addEventListener("keydown", m, !0), () => {
					document.removeEventListener("keydown", m, !0)
				}), [l, m]);
				let y = "" !== d.trim(),
					b = f.length > 20,
					v = {
						count: b ? 20 : f.length
					},
					S = r.useMemo(() => ({
						onMouseDown: V,
						onMouseMove: V,
						onMouseUp: V,
						onMouseEnter: V,
						onMouseLeave: V
					}), []);
				return (0, i.jsxs)("div", (t = function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {},
							i = Object.keys(n);
						"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
							return Object.getOwnPropertyDescriptor(n, e).enumerable
						}))), i.forEach(function(t) {
							var i;
							i = n[t], t in e ? Object.defineProperty(e, t, {
								value: i,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : e[t] = i
						})
					}
					return e
				}({
					className: P.recentChannelsMenu
				}, S), n = n = {
					children: [(0, i.jsx)("div", {
						className: P.searchBarContainer,
						children: (0, i.jsx)(s.E1j, {
							autoFocus: !0,
							query: d,
							size: s.E1j.Sizes.MEDIUM,
							placeholder: Z.intl.string(Z.t.UyA6SU),
							onClear: () => {
								p("")
							},
							onKeyDown: m,
							onChange: e => {
								p(e)
							},
							className: P.searchBar,
							inputProps: {
								"aria-label": Z.intl.string(Z.t.UyA6SU)
							}
						})
					}), y ? (0, i.jsx)(z, {
						sectionHeader: b ? Z.intl.format(Z.t.qdXiQ0, v) : Z.intl.format(Z.t["Aq+8wM"], v),
						channelIds: f.map(e => {
							let {
								channel: t
							} = e;
							return t.id
						}).slice(0, 20),
						hasQuery: y,
						query: d,
						currentVoiceChannel: o,
						onSelect: g
					}) : (0, i.jsx)(U, {
						searchQuery: d,
						currentVoiceChannel: o,
						onSelect: g
					})]
				}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var i = Object.getOwnPropertySymbols(e);
						n.push.apply(n, i)
					}
					return n
				})(Object(n)).forEach(function(e) {
					Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
				}), t))
			}
		},
		129724: function(e, t, n) {
			n.d(t, {
				A: () => l
			});
			var i = n(913527),
				r = n.n(i),
				o = n(388032);

			function l(e) {
				let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
					n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.intl.string(o.t["Yl1D8/"]),
					i = r().duration(e, "seconds");
				return i.days() > 0 ? o.intl.formatToPlainString(t ? o.t.GBLpQ0 : o.t.k2UNz8, {
					days: i.days()
				}) : i.hours() > 0 ? o.intl.formatToPlainString(t ? o.t.rhY1Rk : o.t.xCjYxM, {
					hours: i.hours()
				}) : i.minutes() > 0 ? o.intl.formatToPlainString(t ? o.t["XIGt+f"] : o.t.iXLF9f, {
					minutes: i.minutes()
				}) : e > 0 ? o.intl.formatToPlainString(t ? o.t.pyvjRk : o.t.geSp4O, {
					seconds: i.seconds()
				}) : t ? o.intl.string(o.t["Yl1D8/"]) : n
			}
		},
		917356: function(e, t, n) {
			e.exports = {
				panel: "panel_ef5082",
				panelGroup: "panelGroup_ef5082",
				bottomPanelButton: "bottomPanelButton_ef5082",
				topPanelToggle: "topPanelToggle_ef5082",
				secondaryInfoText: "secondaryInfoText_ef5082"
			}
		},
		616257: function(e, t, n) {
			e.exports = {
				panel: "panel_fe7ab2",
				header: "header_fe7ab2",
				headerBar: "headerBar_fe7ab2",
				headerTitle: "headerTitle_fe7ab2",
				dispatcherHeader: "dispatcherHeader_fe7ab2",
				headerTitleText: "headerTitleText_fe7ab2",
				inspectorWrapper: "inspectorWrapper_fe7ab2",
				tabBarContainer: "tabBarContainer_fe7ab2",
				tabBar: "tabBar_fe7ab2",
				tabMeasurer: "tabMeasurer_fe7ab2",
				tabItem: "tabItem_fe7ab2",
				selected: "selected_fe7ab2",
				menu: "menu_fe7ab2",
				overflowChevron: "overflowChevron_fe7ab2",
				table: "table_fe7ab2",
				tableContainer: "tableContainer_fe7ab2",
				tableHeader: "tableHeader_fe7ab2",
				tableRow: "tableRow_fe7ab2",
				selectedTableRow: "selectedTableRow_fe7ab2",
				properties: "properties_fe7ab2",
				propertyName: "propertyName_fe7ab2",
				propertyValue: "propertyValue_fe7ab2",
				copyPropertyButton: "copyPropertyButton_fe7ab2",
				toolbar: "toolbar_fe7ab2",
				toolbarGroup: "toolbarGroup_fe7ab2",
				toolbarButton: "toolbarButton_fe7ab2"
			}
		},
		800621: function(e, t, n) {
			e.exports = {
				container: "container__2af41",
				activityCard: "activityCard__2af41",
				contentInventoryContainer: "contentInventoryContainer__2af41",
				contentInventoryHeader: "contentInventoryHeader__2af41",
				row: "row__2af41",
				inviteFriendsButton: "inviteFriendsButton__2af41",
				avatar: "avatar__2af41",
				details: "details__2af41",
				usernameWrapper: "usernameWrapper__2af41",
				username: "username__2af41",
				inviteButton: "inviteButton__2af41",
				inviteButtonWrapper: "inviteButtonWrapper__2af41",
				inviteButtonInner: "inviteButtonInner__2af41",
				liveIndicator: "liveIndicator__2af41",
				badgesContainer: "badgesContainer__2af41"
			}
		},
		86654: function(e, t, n) {
			e.exports = {
				clickZone: "clickZone__29c87",
				clickZoneDebugContainer: "clickZoneDebugContainer__29c87",
				clickBackground: "clickBackground__29c87",
				clickable: "clickable__29c87"
			}
		},
		524468: function(e, t, n) {
			e.exports = {
				wrapper: "wrapper__58ece",
				unlocked: "unlocked__58ece",
				lockExtras: "lockExtras__58ece",
				operation: "operation__58ece",
				handle: "handle__58ece",
				resizeNorth: "resizeNorth__58ece handle__58ece",
				resizeSouth: "resizeSouth__58ece handle__58ece",
				resizeNSCursor: "resizeNSCursor__58ece",
				resizeWest: "resizeWest__58ece handle__58ece",
				resizeEast: "resizeEast__58ece handle__58ece",
				resizeEWCursor: "resizeEWCursor__58ece",
				resizeNorthWest: "resizeNorthWest__58ece handle__58ece",
				resizeNorthEast: "resizeNorthEast__58ece handle__58ece",
				resizeSouthWest: "resizeSouthWest__58ece handle__58ece",
				resizeSouthEast: "resizeSouthEast__58ece handle__58ece",
				resizeNWSECursor: "resizeNWSECursor__58ece",
				resizeNESWCursor: "resizeNESWCursor__58ece",
				extras: "extras__58ece",
				extrasBottomOriented: "extrasBottomOriented__58ece",
				extrasRightOriented: "extrasRightOriented__58ece"
			}
		},
		852266: function(e, t, n) {
			e.exports = {
				container: "container__50c27",
				list: "list__50c27"
			}
		},
		678270: function(e, t, n) {
			e.exports = {
				gridContainer: "gridContainer_ad58e7",
				gridItem: "gridItem_ad58e7",
				horizontal: "horizontal_ad58e7",
				vertical: "vertical_ad58e7",
				tileContainer: "tileContainer_ad58e7"
			}
		},
		652156: function(e, t, n) {
			e.exports = {
				streamTile: "streamTile__8151b",
				tile: "tile__8151b",
				streamTileWrapper: "streamTileWrapper__8151b",
				controls: "controls__8151b",
				controlBackground: "controlBackground__8151b",
				controlsWithActiveStream: "controlsWithActiveStream__8151b",
				controlUser: "controlUser__8151b",
				controlUserContainer: "controlUserContainer__8151b",
				controlUserName: "controlUserName__8151b",
				guildTag: "guildTag__8151b",
				controlAction: "controlAction__8151b",
				controlActions: "controlActions__8151b",
				absoluteFill: "absoluteFill__8151b",
				streamPreview: "streamPreview__8151b",
				liveIndicator: "liveIndicator__8151b",
				watchActionContainer: "watchActionContainer__8151b",
				watchButton: "watchButton__8151b"
			}
		},
		832985: function(e, t, n) {
			e.exports = {
				goLiveGridContainer: "goLiveGridContainer__466c6"
			}
		},
		514835: function(e, t, n) {
			e.exports = {
				buttonContainer: "buttonContainer__7e329",
				keybind: "keybind__7e329",
				button: "button__7e329"
			}
		},
		479221: function(e, t, n) {
			e.exports = {
				key: "key__98feb"
			}
		},
		960972: function(e, t, n) {
			e.exports = {
				videoDev: "videoDev_eb35c5",
				overlay: "overlay_eb35c5",
				overlayBackground: "overlayBackground_eb35c5",
				overlayActive: "overlayActive_eb35c5",
				overlayLocked: "overlayLocked_eb35c5",
				closeContainer: "closeContainer_eb35c5",
				layoutLocked: "layoutLocked_eb35c5",
				layoutUnlocked: "layoutUnlocked_eb35c5 layoutLocked_eb35c5"
			}
		},
		63791: function(e, t, n) {
			e.exports = {
				overlayBackgroundNux: "overlayBackgroundNux__3db18",
				overlayInprocessBackgroundNux: "overlayInprocessBackgroundNux__3db18",
				mainContainer: "mainContainer__3db18",
				mainTitleContainer: "mainTitleContainer__3db18",
				widgetCalloutContainer: "widgetCalloutContainer__3db18",
				widgetCallout: "widgetCallout__3db18",
				nuxImage: "nuxImage__3db18",
				mainTitleBody: "mainTitleBody__3db18",
				mainTitle: "mainTitle__3db18"
			}
		},
		565655: function(e, t, n) {
			e.exports = {
				panelGroup: "panelGroup__2f37f",
				rightAligned: "rightAligned__2f37f",
				measurement: "measurement__2f37f",
				measurementText: "measurementText__2f37f",
				measurementCheckbox: "measurementCheckbox__2f37f",
				bottomPanelButton: "bottomPanelButton__2f37f",
				secondaryInfoText: "secondaryInfoText__2f37f"
			}
		},
		859714: function(e, t, n) {
			e.exports = {
				button: "button__46219",
				separatorDot: "separatorDot__46219",
				guildIconContainer: "guildIconContainer__46219",
				guildName: "guildName__46219",
				guildIcon: "guildIcon__46219",
				voiceChannelNameContainer: "voiceChannelNameContainer__46219",
				channelIcon: "channelIcon__46219",
				channelName: "channelName__46219"
			}
		},
		849388: function(e, t, n) {
			e.exports = {
				panelContainer: "panelContainer_a83780",
				locked: "locked_a83780",
				buttonSection: "buttonSection_a83780",
				panelRow: "panelRow_a83780",
				inCall: "inCall_a83780"
			}
		},
		975539: function(e, t, n) {
			e.exports = {
				container: "container_c39fe3"
			}
		},
		884751: function(e, t, n) {
			e.exports = {
				videoList: "videoList__95c18",
				vertical: "vertical__95c18",
				tile: "tile__95c18",
				hidden: "hidden__95c18"
			}
		},
		816530: function(e, t, n) {
			e.exports = {
				extrasContainer: "extrasContainer__19b74",
				debug: "debug__19b74",
				debugUnpinned: "debugUnpinned__19b74",
				debugPinned: "debugPinned__19b74"
			}
		},
		842304: function(e, t, n) {
			e.exports = {
				textArea: "textArea_ab8e5c",
				container: "container_ab8e5c"
			}
		},
		76932: function(e, t, n) {
			e.exports = {
				container: "container_fb1c43"
			}
		},
		484762: function(e, t, n) {
			e.exports = {
				nowPlayingNotification: "nowPlayingNotification__81a05",
				nowPlayingNotificationAnimationWrapper: "nowPlayingNotificationAnimationWrapper__81a05",
				nowPlayingNotificationContainer: "nowPlayingNotificationContainer__81a05",
				nowPlayingNotificationWrapper: "nowPlayingNotificationWrapper__81a05",
				body: "body__81a05",
				nowPlayingNotificationIcon: "nowPlayingNotificationIcon__81a05",
				gameIcon: "gameIcon__81a05",
				bodyText: "bodyText__81a05"
			}
		},
		19782: function(e, t, n) {
			e.exports = {
				container: "container__32c39"
			}
		},
		688095: function(e, t, n) {
			e.exports = {
				recentChannelsMenu: "recentChannelsMenu__711d3",
				recentChannelsMenuHeader: "recentChannelsMenuHeader__711d3",
				guildIconWrapper: "guildIconWrapper__711d3",
				overflowCount: "overflowCount__711d3",
				channelItemContainer: "channelItemContainer__711d3",
				channelItemHighlighted: "channelItemHighlighted__711d3",
				searchBarContainer: "searchBarContainer__711d3",
				searchBar: "searchBar__711d3",
				emptyChannelItem: "emptyChannelItem__711d3",
				channelItemIcon: "channelItemIcon__711d3",
				channelItemNameContainer: "channelItemNameContainer__711d3",
				channelItemName: "channelItemName__711d3",
				channelIcon: "channelIcon__711d3",
				channelItemNameText: "channelItemNameText__711d3",
				channelItemAvatars: "channelItemAvatars__711d3",
				channelList: "channelList__711d3",
				channelListWrapper: "channelListWrapper__711d3"
			}
		}
	}
]);
//# sourceMappingURL=0931afe62e3c39ea.js.map