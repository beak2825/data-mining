"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["68294"], {
		323597: function(t, e, n) {
			n.d(e, {
				Z: () => h
			});
			var i = n(255367);
			n(73800);
			var l = n(442837),
				a = n(481060),
				s = n(787014),
				r = n(904245),
				o = n(787263),
				d = n(660189),
				c = n(216572),
				u = n(144140),
				g = n(314897),
				_ = n(496675),
				f = n(709054),
				S = n(981631),
				E = n(388032);

			function h(t) {
				let e = t.isForumPost(),
					n = (0, l.e7)([g.default], () => t.isOwner(g.default.getId()), [t]),
					h = (0, c.HL)(t),
					{
						canManageChannel: N,
						canAccessChannel: b
					} = (0, l.cj)([_.Z], () => ({
						canAccessChannel: _.Z.can(t.accessPermissions, t),
						canManageChannel: _.Z.can(t.isThread() ? S.Plq.MANAGE_THREADS : S.Plq.MANAGE_CHANNELS, t)
					}), [t]),
					L = (0, l.e7)([u.Z], () => {
						var e;
						return null != (e = u.Z.getCount(t.id)) ? e : 0
					}, [t.id]),
					{
						firstMessage: p
					} = (0, l.e7)([d.Z], () => d.Z.getMessage(t.id), [t.id]),
					O = e && (N || n && L < 1),
					v = e && n && !N && L > 0 && null != p;
				return b && !h && (N || O || v) ? (0, i.jsx)(a.sNh, {
					id: "delete-channel",
					label: t.type === S.d4z.GUILD_CATEGORY ? E.intl.string(E.t.ifbXnJ) : t.isForumPost() ? O ? E.intl.string(E.t.nEOg1N) : E.intl.string(E.t.xwMqDw) : t.isThread() ? E.intl.string(E.t.H7vTe3) : E.intl.string(E.t["8D8Rsb"]),
					color: "danger",
					action: () => {
						(0, o.w)(t, function() {
							v ? r.Z.deleteMessage(t.id, f.default.castChannelIdAsMessageId(t.id)) : s.ZP.deleteChannel(t.id)
						})
					}
				}) : null
			}
		},
		776568: function(t, e, n) {
			n.d(e, {
				ZP: () => L,
				k: () => N,
				u9: () => b
			}), n(388685);
			var i = n(255367);
			n(73800);
			var l = n(913527),
				a = n.n(l),
				s = n(442837),
				r = n(481060),
				o = n(211739),
				d = n(87051),
				c = n(496729),
				u = n(777861),
				g = n(9156),
				_ = n(621600),
				f = n(933557),
				S = n(981631),
				E = n(969943),
				h = n(388032);
			let N = () => [{
					value: E.Oe.MINUTES_15,
					label: h.intl.string(h.t["8ot6go"])
				}, {
					value: E.Oe.HOURS_1,
					label: h.intl.string(h.t.UMWBZm)
				}, {
					value: E.Oe.HOURS_3,
					label: h.intl.string(h.t.QmYWtr)
				}, {
					value: E.Oe.HOURS_8,
					label: h.intl.string(h.t.EpAXPD)
				}, {
					value: E.Oe.HOURS_24,
					label: h.intl.string(h.t["755t4u"])
				}, {
					value: E.Oe.ALWAYS,
					label: h.intl.string(h.t.r3LawM)
				}],
				b = t => {
					let e = t > 0 ? a()().add(t, "second").toISOString() : null;
					return {
						muted: !0,
						mute_config: {
							selected_time_window: t,
							end_time: e
						}
					}
				};

			function L(t, e) {
				let [n, l] = (0, s.Wu)([g.ZP], () => [g.ZP.isChannelMuted(t.guild_id, t.id), g.ZP.getChannelMuteConfig(t.guild_id, t.id)]), a = (0, u.U)(l), E = (0, f.ZP)(t, !0);

				function L(e) {
					e && t.type === S.d4z.GUILD_CATEGORY && (0, o.c4)(t.id), d.Z.updateChannelOverrideSettings(t.guild_id, t.id, {
						muted: e
					}, _.UE.muted(e))
				}
				let p = h.intl.string(h.t.tbeRRE),
					O = h.intl.string(h.t.OYefmZ);
				switch (t.type) {
					case S.d4z.GUILD_CATEGORY:
						p = h.intl.string(h.t.pNMCg4), O = h.intl.string(h.t.olaBeH);
						break;
					case S.d4z.GROUP_DM:
						p = h.intl.string(h.t.LO3kaG), O = h.intl.string(h.t["s5/5fn"]);
						break;
					case S.d4z.DM:
						p = h.intl.format(h.t.byjuJi, {
							name: E
						}), O = h.intl.format(h.t["eC+9rq"], {
							name: E
						});
						break;
					default:
						p = h.intl.string(h.t.tbeRRE), O = h.intl.string(h.t.OYefmZ)
				}
				return n ? (0, i.jsx)(r.sNh, {
					id: "unmute-channel",
					label: O,
					subtext: a,
					action: () => L(!1)
				}) : (0, i.jsx)(r.sNh, {
					id: "mute-channel",
					label: p,
					action: () => {
						L(!0), (0, c.sT)({
							channelId: t.id,
							location: "channel_context_menu"
						})
					},
					children: N().map(n => {
						let {
							value: l,
							label: a
						} = n;
						return (0, i.jsx)(r.sNh, {
							id: "".concat(l),
							label: a,
							action: () => (function(n) {
								t.type === S.d4z.GUILD_CATEGORY && (0, o.c4)(t.id);
								let i = b(n);
								d.Z.updateChannelOverrideSettings(t.guild_id, t.id, i, _.ZB.Muted, e)
							})(l)
						}, l)
					})
				})
			}
		},
		218035: function(t, e, n) {
			n.d(e, {
				Z: () => f,
				c: () => _
			});
			var i = n(255367);
			n(73800);
			var l = n(442837),
				a = n(481060),
				s = n(87051),
				r = n(729052),
				o = n(9156),
				d = n(621600),
				c = n(981631),
				u = n(388032);

			function g(t) {
				let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				switch (t.type) {
					case c.d4z.GUILD_VOICE:
						return e ? [{
							setting: c.bL.NULL,
							label: null != t.parent_id ? u.intl.string(u.t.wlrV1d) : u.intl.string(u.t["1Wn2Mz"])
						}, {
							setting: c.bL.ALL_MESSAGES,
							label: u.intl.string(u.t["9sGJkp"])
						}, {
							setting: c.bL.ONLY_MENTIONS,
							label: u.intl.format(u.t.cpcXvb, {})
						}, {
							setting: c.bL.NO_MESSAGES,
							label: u.intl.string(u.t.CtVGyc)
						}] : null;
					case c.d4z.GUILD_STAGE_VOICE:
						return [{
							setting: c.bL.NULL,
							label: null != t.parent_id ? u.intl.string(u.t.wlrV1d) : u.intl.string(u.t["1Wn2Mz"])
						}, {
							setting: c.bL.ONLY_MENTIONS,
							label: u.intl.string(u.t["BENn//"])
						}, {
							setting: c.bL.NO_MESSAGES,
							label: u.intl.string(u.t.CtVGyc)
						}];
					default:
						return [{
							setting: c.bL.NULL,
							label: null != t.parent_id ? u.intl.string(u.t.wlrV1d) : u.intl.string(u.t["1Wn2Mz"])
						}, {
							setting: c.bL.ALL_MESSAGES,
							label: u.intl.string(u.t["n/bTaW"])
						}, {
							setting: c.bL.ONLY_MENTIONS,
							label: u.intl.format(u.t.L2hmY2, {})
						}, {
							setting: c.bL.NO_MESSAGES,
							label: u.intl.string(u.t.CtVGyc)
						}]
				}
			}

			function _(t) {
				let e = t.getGuildId(),
					n = t.id,
					_ = (0, l.e7)([o.ZP], () => {
						let n = c.bL.NULL;
						return null != t.parent_id && (n = o.ZP.getChannelMessageNotifications(e, t.parent_id)), n !== c.bL.NULL ? n : o.ZP.getMessageNotifications(e)
					}, [e, t.parent_id]),
					f = (0, l.e7)([o.ZP], () => o.ZP.getNewForumThreadsCreated(t)),
					S = (0, l.e7)([o.ZP], () => o.ZP.getChannelOverrides(e)[n], [e, n]),
					E = null == S ? c.bL.NULL : S.message_notifications,
					h = (0, r.p2)(t),
					N = g(t, h);
				return null == N ? null : (0, i.jsxs)(i.Fragment, {
					children: [t.isForumLikeChannel() ? (0, i.jsxs)(i.Fragment, {
						children: [(0, i.jsx)(a.S89, {
							id: "new-forum-threads-created",
							label: u.intl.string(u.t.Rkgjpq),
							checked: f,
							action: () => s.Z.setForumThreadsCreated(t, !f)
						}), (0, i.jsx)(a.Clw, {})]
					}) : null, N.map(l => {
						let {
							setting: r,
							label: o
						} = l;
						return (0, i.jsx)(a.k5B, {
							group: "channel-notifications",
							id: "".concat(r),
							label: o,
							subtext: r === c.bL.NULL ? function(t, e) {
								let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
								switch (t) {
									case c.bL.ALL_MESSAGES:
										return e.type === c.d4z.GUILD_VOICE && n ? u.intl.string(u.t["9sGJkp"]) : u.intl.string(u.t["n/bTaW"]);
									case c.bL.ONLY_MENTIONS:
										return u.intl.format(u.t.L2hmY2, {});
									case c.bL.NO_MESSAGES:
										return u.intl.string(u.t.CtVGyc);
									case c.bL.NULL:
									default:
										return
								}
							}(_, t, h) : void 0,
							action: () => {
								null != e && s.Z.updateChannelOverrideSettings(e, n, {
									message_notifications: r
								}, d.UE.notifications(r))
							},
							checked: r === E
						}, r)
					})]
				})
			}

			function f(t) {
				var e, n;
				let s = _(t),
					d = (0, l.e7)([o.ZP], () => o.ZP.resolvedMessageNotifications(t), [t]),
					f = (0, l.e7)([o.ZP], () => o.ZP.getChannelOverrides(t.guild_id)[t.id], [t.guild_id, t.id]),
					S = null == f ? c.bL.NULL : f.message_notifications,
					E = (0, r.p2)(t),
					h = S === c.bL.NULL && t.isGuildStageVoice() ? u.intl.format(u.t.L2hmY2, {}) : null == (n = g(t, E)) || null == (e = n.find(t => {
						let {
							setting: e
						} = t;
						return e === d
					})) ? void 0 : e.label;
				return null != s ? (0, i.jsx)(a.sNh, {
					id: "channel-notifications",
					label: u.intl.string(u.t.h850Sk),
					subtext: h,
					children: s
				}) : null
			}
		},
		775666: function(t, e, n) {
			n.d(e, {
				EQ: () => N,
				T5: () => b,
				ZP: () => h
			}), n(388685), n(997841);
			var i = n(255367),
				l = n(73800),
				a = n(442837),
				s = n(481060),
				r = n(87051),
				o = n(221259),
				d = n(113449),
				c = n(686660),
				u = n(9156),
				g = n(621600),
				_ = n(981631),
				f = n(490897),
				S = n(526761),
				E = n(388032);

			function h(t) {
				let e = N(t);
				return t.type === _.d4z.GUILD_VOICE ? null : (0, i.jsx)(s.sNh, {
					id: "channel_notification_settings",
					label: E.intl.string(E.t.HcoRu7),
					children: e
				})
			}

			function N(t) {
				let e = (0, o.ZA)(t),
					n = (0, o.yN)(t),
					d = e.preset === c.s8.CUSTOM && !n.inherited,
					[g, f] = l.useState(d),
					[S, h] = l.useState(!1),
					N = S ? c.s8.CUSTOM : e.preset,
					L = b(t, () => h(!1)),
					p = (0, a.e7)([u.ZP], () => u.ZP.getNewForumThreadsCreated(t)),
					O = "parent" === n.inheritedFrom ? E.intl.string(E.t.wlrV1d) : E.intl.string(E.t["1Wn2Mz"]);
				return t.type === _.d4z.GUILD_STAGE_VOICE ? (0, i.jsxs)(s.kSQ, {
					children: [(0, i.jsx)(s.k5B, {
						id: "cns_default",
						label: O,
						checked: n.inherited,
						group: "channel_notification_settings",
						subtext: e.notification === _.bL.NO_MESSAGES ? E.intl.string(E.t.CtVGyc) : E.intl.string(E.t["BENn//"]),
						action: () => (0, o.JK)(t.guild_id, t.id)
					}), (0, i.jsx)(s.k5B, {
						id: "cns_only_mention",
						group: "channel_notification_settings",
						checked: !n.inherited && e.notification !== _.bL.NO_MESSAGES,
						label: E.intl.string(E.t["BENn//"]),
						action: () => (0, o.ft)(t.guild_id, t.id, _.bL.ONLY_MENTIONS)
					}), (0, i.jsx)(s.k5B, {
						id: "cns_no_message",
						group: "channel_notification_settings",
						label: E.intl.string(E.t.CtVGyc),
						checked: !n.inherited && e.notification === _.bL.NO_MESSAGES,
						action: () => (0, o.ft)(t.guild_id, t.id, _.bL.NO_MESSAGES)
					})]
				}) : (0, i.jsxs)(i.Fragment, {
					children: [t.isForumLikeChannel() ? (0, i.jsxs)(i.Fragment, {
						children: [(0, i.jsx)(s.S89, {
							id: "new-forum-threads-created",
							label: E.intl.string(E.t.Rkgjpq),
							checked: p,
							action: () => r.Z.setForumThreadsCreated(t, !p)
						}), (0, i.jsx)(s.Clw, {})]
					}) : null, (0, i.jsxs)(s.kSQ, {
						children: [(0, i.jsx)(s.k5B, {
							id: "cns_default",
							label: O,
							group: "channel_notification_settings",
							checked: n.inherited && !S,
							subtext: n.inheritedPreset,
							action: () => ((0, o.JK)(t.guild_id, t.id), h(!1))
						}), (0, i.jsx)(s.k5B, {
							id: "cns_everything",
							group: "channel_notification_settings",
							label: E.intl.string(E.t.hZrr6u),
							checked: !n.inherited && N === c.s8.ALL_MESSAGES,
							action: () => ((0, o._m)(t.guild_id, t.id, c.s8.ALL_MESSAGES), h(!1))
						}), (0, i.jsx)(s.k5B, {
							id: "cns_essentials",
							group: "channel_notification_settings",
							label: E.intl.string(E.t.y59NJi),
							checked: !n.inherited && N === c.s8.MENTIONS,
							action: () => ((0, o._m)(t.guild_id, t.id, c.s8.MENTIONS), h(!1))
						}), (0, i.jsx)(s.k5B, {
							id: "cns_nothing",
							group: "channel_notification_settings",
							label: E.intl.string(E.t["pGn/bG"]),
							checked: !n.inherited && N === c.s8.NOTHING,
							action: () => ((0, o._m)(t.guild_id, t.id, c.s8.NOTHING), h(!1))
						}), (0, i.jsx)(s.k5B, {
							id: "cns_custom",
							group: "channel_notification_settings",
							label: E.intl.string(E.t["32yow8"]),
							checked: S || !n.inherited && N === c.s8.CUSTOM,
							action: () => (f(!0), h(!0))
						})]
					}), (g || d) && L]
				})
			}

			function b(t, e) {
				let {
					notification: n,
					unread: l
				} = (0, o.ZA)(t), a = t => {
					t(), e()
				}, c = e => {
					let n = {
						message_notifications: e
					};
					e === _.bL.ALL_MESSAGES && l !== f.i.ALL_MESSAGES && (n.flags = (0, d.pq)(u.ZP.getChannelIdFlags(t.guild_id, t.id), S.ic.UNREADS_ALL_MESSAGES)), r.Z.updateChannelOverrideSettings(t.guild_id, t.id, n, g.UE.notifications(e))
				};
				return (0, i.jsxs)(s.kSQ, {
					children: [(0, i.jsxs)(s.sNh, {
						id: "unread_setting",
						label: "Unread Badges",
						children: [(0, i.jsx)(s.k5B, {
							id: "unread_setting_all_messages",
							group: "unread_setting",
							checked: l === f.i.ALL_MESSAGES,
							label: E.intl.string(E.t["HVah//"]),
							action: () => a(() => (0, o.IG)(t.guild_id, t.id, f.i.ALL_MESSAGES))
						}), (0, i.jsx)(s.k5B, {
							id: "unread_setting_mention_only",
							group: "unread_setting",
							checked: l === f.i.ONLY_MENTIONS,
							label: E.intl.string(E.t["tu+ZWF"]),
							disabled: l !== f.i.ONLY_MENTIONS && n === _.bL.ALL_MESSAGES,
							subtext: l !== f.i.ONLY_MENTIONS && n === _.bL.ALL_MESSAGES ? E.intl.string(E.t.eP8yWV) : void 0,
							action: () => a(() => (0, o.IG)(t.guild_id, t.id, f.i.ONLY_MENTIONS))
						})]
					}, "unread_setting"), (0, i.jsxs)(s.sNh, {
						id: "push_settings",
						label: E.intl.string(E.t.HcoRu7),
						children: [(0, i.jsx)(s.k5B, {
							group: "notification-preset",
							id: "push_settings_everything",
							label: E.intl.string(E.t["HVah//"]),
							checked: n === _.bL.ALL_MESSAGES,
							subtext: l !== f.i.ALL_MESSAGES && n !== _.bL.ALL_MESSAGES ? E.intl.string(E.t.idXSbG) : void 0,
							action: () => a(() => c(_.bL.ALL_MESSAGES))
						}), (0, i.jsx)(s.k5B, {
							group: "notification-preset",
							id: "push_settings_everything_mention",
							checked: n === _.bL.ONLY_MENTIONS,
							label: E.intl.string(E.t["tu+ZWF"]),
							action: () => a(() => c(_.bL.ONLY_MENTIONS))
						}), (0, i.jsx)(s.k5B, {
							group: "notification-preset",
							id: "push_settings_everything_nothing",
							label: E.intl.string(E.t.X4wWUl),
							checked: n === _.bL.NO_MESSAGES,
							action: () => a(() => c(_.bL.NO_MESSAGES))
						})]
					}, "push_settings")]
				})
			}
		},
		787263: function(t, e, n) {
			n.d(e, {
				w: () => a
			});
			var i = n(255367);
			n(73800);
			var l = n(481060);

			function a(t, e) {
				return (0, l.ZDy)(async () => {
					let {
						default: l
					} = await Promise.all([n.e("42743"), n.e("30557")]).then(n.bind(n, 207540));
					return n => {
						var a, s;
						return (0, i.jsx)(l, (a = function(t) {
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
						}({}, n), s = s = {
							onConfirm: () => {
								n.onClose(), e()
							},
							channel: t
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(s)) : (function(t, e) {
							var n = Object.keys(t);
							if (Object.getOwnPropertySymbols) {
								var i = Object.getOwnPropertySymbols(t);
								n.push.apply(n, i)
							}
							return n
						})(Object(s)).forEach(function(t) {
							Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(s, t))
						}), a))
					}
				})
			}
		},
		117984: function(t, e, n) {
			n.d(e, {
				CM: () => S,
				UT: () => f,
				_Z: () => b,
				kj: () => g,
				oC: () => _,
				s3: () => h,
				uA: () => N,
				xh: () => E
			}), n(388685);
			var i = n(524437),
				l = n(675478),
				a = n(592125),
				s = n(496675),
				r = n(709054),
				o = n(853856),
				d = n(231338);

			function c() {
				let t = o.Z.getFavoriteChannels(),
					e = 1;
				for (let n in t) e = Math.max(e, t[n].order);
				return e + 1
			}

			function u(t) {
				for (let e in t) {
					let n = t[e];
					if (null == n) {
						delete t[e];
						continue
					}
					if (n.type === i.Dd.CATEGORY) continue;
					let l = a.Z.getChannel(e);
					if (null == l || !l.isPrivate() && !s.Z.can(d.Pl.VIEW_CHANNEL, l)) {
						delete t[e];
						continue
					}
				}
			}

			function g(t, e) {
				o.Z.isFavorite(t) || l.hW.updateAsync("favorites", n => {
					n.favoriteChannels[t] = i.aV.create({
						nickname: "",
						type: i.Dd.REFERENCE_ORIGINAL,
						position: c(),
						parentId: null != e ? e : "0"
					}), u(n.favoriteChannels)
				}, l.fy.FREQUENT_USER_ACTION)
			}

			function _(t) {
				let e = o.Z.getFavorite(t);
				null != e && l.hW.updateAsync("favorites", n => {
					if (delete n.favoriteChannels[t], e.type === i.Dd.CATEGORY)
						for (let e in n.favoriteChannels) n.favoriteChannels[e].parentId === t && (n.favoriteChannels[e].parentId = "0");
					u(n.favoriteChannels)
				}, l.fy.INFREQUENT_USER_ACTION)
			}

			function f(t, e) {
				o.Z.isFavorite(t) && l.hW.updateAsync("favorites", n => {
					n.favoriteChannels[t].nickname = null != e ? e : ""
				}, l.fy.INFREQUENT_USER_ACTION)
			}

			function S(t) {
				let e = r.default.fromTimestamp(Date.now());
				l.hW.updateAsync("favorites", n => {
					n.favoriteChannels[e] = i.aV.create({
						nickname: t,
						type: i.Dd.CATEGORY,
						position: c(),
						parentId: "0"
					})
				}, l.fy.FREQUENT_USER_ACTION)
			}

			function E(t) {
				_(t)
			}

			function h(t) {
				l.hW.updateAsync("favorites", e => {
					for (let i of t)
						if (null != i.position && (e.favoriteChannels[i.id].position = i.position), void 0 !== i.parent_id) {
							var n;
							e.favoriteChannels[i.id].parentId = null != (n = i.parent_id) ? n : "0"
						}
				}, l.fy.FREQUENT_USER_ACTION)
			}

			function N(t, e) {
				l.hW.updateAsync("favorites", n => {
					n.favoriteChannels[t].parentId = null != e ? e : "0"
				}, l.fy.FREQUENT_USER_ACTION)
			}

			function b() {
				l.hW.updateAsync("favorites", t => {
					t.muted = !t.muted
				}, l.fy.INFREQUENT_USER_ACTION)
			}
		},
		916069: function(t, e, n) {
			n.d(e, {
				Z: () => s
			});
			var i = n(442837),
				l = n(914010),
				a = n(981631);

			function s() {
				return (0, i.e7)([l.Z], () => l.Z.getGuildId()) === a.I_8
			}
		},
		423589: function(t, e, n) {
			n.d(e, {
				Mn: () => E,
				OD: () => S,
				W9: () => _
			}), n(388685), n(997841);
			var i = n(442837),
				l = n(798140),
				a = n(9156),
				s = n(630388),
				r = n(709054),
				o = n(312400),
				d = n(981631),
				c = n(969943),
				u = n(526761),
				g = n(388032);

			function _() {
				return [{
					label: g.intl.string(g.t["8ot6go"]),
					value: c.Oe.MINUTES_15
				}, {
					label: g.intl.string(g.t.UMWBZm),
					value: c.Oe.HOURS_1
				}, {
					label: g.intl.string(g.t.QmYWtr),
					value: c.Oe.HOURS_3
				}, {
					label: g.intl.string(g.t.EpAXPD),
					value: c.Oe.HOURS_8
				}, {
					label: g.intl.string(g.t["755t4u"]),
					value: c.Oe.HOURS_24
				}, {
					label: g.intl.string(g.t.r3LawM),
					value: c.Oe.ALWAYS
				}]
			}
			let f = {
				ignoreMute: !1,
				ignoreUnreadSetting: !0,
				ignoreNotificationSetting: !1
			};

			function S(t) {
				let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f;
				return r.default.keys(t).filter(n => {
					var i, a;
					let r = t[n].message_notifications !== d.bL.NULL,
						o = s.yE(null != (i = t[n].flags) ? i : 0, u.ic.UNREADS_ALL_MESSAGES) || s.yE(null != (a = t[n].flags) ? a : 0, u.ic.UNREADS_ONLY_MENTIONS);
					return !e.ignoreUnreadSetting && o || !e.ignoreNotificationSetting && r || !e.ignoreMute && (0, l.m$)(t[n])
				})
			}

			function E(t) {
				let e = (0, i.e7)([a.ZP], () => a.ZP.useNewNotifications);
				return o.xT.useExperiment({
					location: t
				}, {
					autoTrackExposure: !1
				}).enabled && e
			}
		},
		729052: function(t, e, n) {
			n.d(e, {
				p2: () => r
			});
			var i = n(818083),
				l = n(981631);
			let a = (0, i.B)({
					kind: "user",
					id: "2023-11_voice_activity_notification_user",
					label: "Voice Activity Notifications for User",
					defaultConfig: {
						enabled: !1
					},
					treatments: [{
						id: 1,
						label: "Voice Activity Notifications are enabled for user",
						config: {
							enabled: !0
						}
					}, {
						id: 2,
						label: "Control for AA test. Voice Activity Notifications are NOT enabled for user.",
						config: {
							enabled: !1
						}
					}]
				}),
				s = (0, i.B)({
					kind: "guild",
					id: "2023-11_voice_activity_notification_guild",
					label: "General Voice Channel Notifications for Guild",
					defaultConfig: {
						voiceChannelActivityNotifsEnabled: !1
					},
					treatments: [{
						id: 2,
						label: "Deadchat notifs disabled, voice channel activity notifs enabled",
						config: {
							voiceChannelActivityNotifsEnabled: !0
						}
					}]
				});

			function r(t) {
				var e;
				let {
					voiceChannelActivityNotifsEnabled: n
				} = s.useExperiment({
					location: "useVoiceActivityNotificationSettingsExperiment",
					guildId: null != (e = null == t ? void 0 : t.getGuildId()) ? e : l.lds
				}, {
					disable: (null == t ? void 0 : t.type) !== l.d4z.GUILD_VOICE,
					autoTrackExposure: !1
				}), {
					enabled: i
				} = a.useExperiment({
					location: "useVoiceActivityNotificationSettingsExperiment"
				}, {
					disable: (null == t ? void 0 : t.type) !== l.d4z.GUILD_VOICE || !n,
					autoTrackExposure: !0
				});
				return (null == t ? void 0 : t.type) === l.d4z.GUILD_VOICE && n && i
			}
		},
		221259: function(t, e, n) {
			n.d(e, {
				IG: () => N,
				JK: () => h,
				ZA: () => f,
				_m: () => E,
				ft: () => b,
				yN: () => S
			}), n(388685);
			var i = n(399606),
				l = n(87051),
				a = n(592125),
				s = n(9156),
				r = n(621600),
				o = n(423589),
				d = n(113449),
				c = n(686660),
				u = n(981631),
				g = n(490897),
				_ = n(526761);

			function f(t) {
				let e = (0, i.e7)([s.ZP], () => s.ZP.resolveUnreadSetting(t)),
					n = (0, i.e7)([s.ZP], () => s.ZP.resolvedMessageNotifications(t));
				return {
					unread: e,
					notification: n,
					preset: (0, c.gs)(e, n)
				}
			}

			function S(t) {
				let e = (0, i.Wu)([s.ZP], () => (0, o.OD)(s.ZP.getChannelOverrides(t.guild_id), {
						ignoreMute: !0,
						ignoreUnreadSetting: !1,
						ignoreNotificationSetting: !1
					})),
					[n, l] = (0, i.Wu)([s.ZP, a.Z], () => {
						let n = a.Z.getChannel(t.parent_id);
						return null != n && e.includes(n.id) ? ["parent", (0, c.p1)((0, c.gs)(s.ZP.resolveUnreadSetting(n), s.ZP.resolvedMessageNotifications(n)))] : ["guild", (0, c.p1)((0, c.gs)(s.ZP.getGuildUnreadSetting(t.guild_id), s.ZP.getMessageNotifications(t.guild_id)))]
					}, [t.guild_id, t.parent_id, e]);
				return {
					inherited: !e.includes(t.id),
					inheritedFrom: n,
					inheritedPreset: l
				}
			}

			function E(t, e, n) {
				let i = s.ZP.getChannelIdFlags(t, e);
				n === c.s8.ALL_MESSAGES ? l.Z.updateChannelOverrideSettings(t, e, {
					message_notifications: u.bL.ALL_MESSAGES,
					flags: (0, d.pq)(i, _.ic.UNREADS_ALL_MESSAGES)
				}, r.ZB.PresetAll) : n === c.s8.MENTIONS ? l.Z.updateChannelOverrideSettings(t, e, {
					message_notifications: u.bL.ONLY_MENTIONS,
					flags: (0, d.pq)(i, _.ic.UNREADS_ONLY_MENTIONS)
				}, r.ZB.PresetMentions) : n === c.s8.NOTHING && l.Z.updateChannelOverrideSettings(t, e, {
					message_notifications: u.bL.NO_MESSAGES,
					flags: (0, d.pq)(i, _.ic.UNREADS_ONLY_MENTIONS)
				}, r.ZB.PresetNothing)
			}

			function h(t, e) {
				l.Z.updateChannelOverrideSettings(t, e, {
					message_notifications: u.bL.NULL,
					flags: (0, d.YF)(s.ZP.getChannelIdFlags(t, e))
				}, r.ZB.PresetDefault)
			}

			function N(t, e, n) {
				let i = s.ZP.getChannelIdFlags(t, e);
				l.Z.updateChannelOverrideSettings(t, e, {
					flags: (0, d.pq)(i, n === g.i.ALL_MESSAGES ? _.ic.UNREADS_ALL_MESSAGES : _.ic.UNREADS_ONLY_MENTIONS)
				}, r.UE.unreads(n))
			}

			function b(t, e, n) {
				l.Z.updateChannelOverrideSettings(t, e, {
					message_notifications: n
				}, r.UE.notifications(n))
			}
		},
		216572: function(t, e, n) {
			n.d(e, {
				Cv: () => S,
				HL: () => _,
				KK: () => E,
				Q_: () => g,
				nw: () => f
			});
			var i = n(73800),
				l = n(442837),
				a = n(904245),
				s = n(232567),
				r = n(430824),
				o = n(375954),
				d = n(982168),
				c = n(893908),
				u = n(953252);

			function g(t) {
				return (0, l.e7)([r.Z], () => {
					if (null == t) return !1;
					let e = r.Z.getGuild(t);
					return null != e && (0, u.Z)(e) && null != (0, c.Z)(e)
				})
			}

			function _(t) {
				return (0, d.P0)(t)
			}

			function f(t) {
				return (0, d.gT)(t)
			}

			function S(t) {
				let {
					messageReference: e
				} = t, n = (0, l.e7)([o.Z], () => null != e ? o.Z.getMessage(e.channel_id, e.message_id) : null);
				(0, i.useEffect)(() => {
					null == n && null != e && a.Z.fetchMessages({
						channelId: e.channel_id,
						jump: {
							messageId: e.message_id
						},
						limit: 10
					})
				}, [n, e])
			}

			function E(t) {
				var e, n;
				let i = null == t || null == (n = t.messageSnapshots[0]) || null == (e = n.moderatorReport) ? void 0 : e.reported_user_id;
				null != i && (0, s.PR)(i)
			}
		}
	}
]);
//# sourceMappingURL=8c8a4b6bce955dd8.js.map