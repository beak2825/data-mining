"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["36841"], {
		109764: function(t, n, e) {
			e.d(n, {
				Z: () => o
			});
			var i = e(255367);
			e(73800);
			var l = e(399606),
				r = e(481060),
				d = e(228392),
				a = e(592125),
				_ = e(934415),
				s = e(572004),
				u = e(981631),
				p = e(388032);

			function o(t, n, e) {
				let o = (0, l.e7)([a.Z], () => null != t ? a.Z.getChannel(t.parent_id) : null);
				return null == t ? null : (0, i.jsx)(r.sNh, {
					id: "channel-copy-link",
					label: p.intl.string(p.t.WqhZsr),
					action: () => {
						t.isForumPost() && (0, d.B)({
							postId: t.id,
							location: {
								section: u.jXE.CONTEXT_MENU
							}
						}), (0, s.JG)((0, _.EO)(t, o, n, e))
					}
				})
			}
		},
		241155: function(t, n, e) {
			e.d(n, {
				Z: () => U
			}), e(388685);
			var i, l, r, d = e(392711),
				a = e.n(d),
				_ = e(442837),
				s = e(570140),
				u = e(924301),
				p = e(411198),
				o = e(75666);
			let I = !1,
				c = {},
				T = {},
				g = {},
				E = t => (g[t.guild_scheduled_event.id] = (0, p.Q0)(t.guild_scheduled_event.guild), T[t.guild_scheduled_event.id] = t.guild_scheduled_event, {
					channelId: t.directory_channel_id,
					scheduledEventId: t.entity_id,
					type: o.C2.GUILD_SCHEDULED_EVENT,
					authorId: t.author_id,
					createdAt: t.created_at
				});
			class m extends(i = _.ZP.Store) {
				isFetching() {
					return I
				}
				getEventDirectoryEntries(t) {
					if (null != t) return c[t]
				}
				getCachedGuildByEventId(t) {
					var n;
					return null != (n = g[t]) ? n : void 0
				}
				getCachedGuildScheduledEventById(t) {
					var n;
					return null != (n = T[t]) ? n : void 0
				}
			}
			r = "EventDirectoryStore", (l = "displayName") in m ? Object.defineProperty(m, l, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : m[l] = r;
			let U = new m(s.Z, {
				EVENT_DIRECTORY_FETCH_START: function() {
					I = !0
				},
				EVENT_DIRECTORY_FETCH_SUCCESS: function(t) {
					let {
						channelId: n,
						entries: e
					} = t;
					I = !1;
					let i = a().sortBy([...e], [function(t) {
							return (0, u.CQ)(t.guild_scheduled_event)
						}]),
						l = a().map(i, E);
					c[n] = l
				},
				EVENT_DIRECTORY_FETCH_FAILURE: function() {
					I = !1
				}
			})
		},
		75666: function(t, n, e) {
			e.d(n, {
				AR: () => c,
				C2: () => p,
				Pp: () => g,
				VX: () => o,
				b7: () => T,
				sE: () => I
			});
			var i, l, r, d, a = e(149765),
				_ = e(700785),
				s = e(981631),
				u = e(388032),
				p = ((i = {})[i.GUILD = 0] = "GUILD", i[i.GUILD_SCHEDULED_EVENT = 1] = "GUILD_SCHEDULED_EVENT", i),
				o = ((l = {}).GUILD_TEMPLATES = "guild-templates", l.CUSTOMIZE_NEW_GUILD = "customize-new-guild", l.CHOOSE_GUILD = "choose-guild", l.CUSTOMIZE_EXISTING_GUILD = "customize-existing-guild", l.CONFIRMATION = "confirmation", l),
				I = ((r = {}).CREATE = "CREATE", r.HUB_SCHOOL_CLUB = "HUB_SCHOOL_CLUB", r.HUB_STUDY = "HUB_STUDY", r.HUB_CLASS = "HUB_CLASS", r.HUB_SOCIAL = "HUB_SOCIAL", r.HUB_MAJOR = "HUB_MAJOR", r.HUB_DORM = "HUB_DORM", r),
				c = ((d = {})[d.ALL = -1] = "ALL", d[d.UNCATEGORIZED = 0] = "UNCATEGORIZED", d[d.SCHOOL_CLUB = 1] = "SCHOOL_CLUB", d[d.CLASS = 2] = "CLASS", d[d.STUDY_SOCIAL = 3] = "STUDY_SOCIAL", d[d.MISC = 5] = "MISC", d);

			function T(t) {
				return "883060064561299456" === t ? [{
					value: 1,
					label: u.intl.string(u.t["Z+MPNz"])
				}, {
					value: 2,
					label: u.intl.string(u.t.dV9uBg)
				}, {
					value: 3,
					label: u.intl.string(u.t.xoHQcn)
				}, {
					value: 5,
					label: u.intl.string(u.t.Ao41rq)
				}] : [{
					value: 1,
					label: u.intl.string(u.t.oNHFUF),
					idealSize: 100
				}, {
					value: 2,
					label: u.intl.string(u.t.V1i8nZ)
				}, {
					value: 3,
					label: u.intl.string(u.t.Z2ygQk),
					idealSize: 50
				}, {
					value: 5,
					label: u.intl.string(u.t["0Bg9LS"])
				}]
			}

			function g() {
				return {
					CREATE: {
						id: "CREATE",
						code: "2TffvPucqHkN",
						label: u.intl.string(u.t["H3+6BA"]),
						channels: [],
						system_channel_id: null
					},
					HUB_SCHOOL_CLUB: {
						id: "HUB_SCHOOL_CLUB",
						code: "UMUbvRpRZhS6",
						label: u.intl.string(u.t["mmFA5+"]),
						channels: [{
							id: "00",
							parent_id: null,
							name: u.intl.string(u.t["VCAA/f"]),
							type: s.d4z.GUILD_CATEGORY
						}, {
							id: "01",
							parent_id: "00",
							name: u.intl.string(u.t.GHQoER),
							type: s.d4z.GUILD_TEXT
						}, {
							id: "02",
							parent_id: "00",
							name: u.intl.string(u.t.nSsoSE),
							type: s.d4z.GUILD_TEXT
						}, {
							id: "03",
							parent_id: "00",
							name: u.intl.string(u.t.yZCzMT),
							type: s.d4z.GUILD_TEXT
						}, {
							id: "10",
							parent_id: null,
							name: u.intl.string(u.t.mobYpK),
							type: s.d4z.GUILD_CATEGORY
						}, {
							id: "11",
							parent_id: "10",
							name: u.intl.string(u.t.pIOigI),
							type: s.d4z.GUILD_TEXT
						}, {
							id: "12",
							parent_id: "10",
							name: u.intl.string(u.t.ao2wxs),
							type: s.d4z.GUILD_TEXT
						}, {
							id: "13",
							parent_id: "10",
							name: u.intl.string(u.t.AIszv7),
							type: s.d4z.GUILD_TEXT
						}, {
							id: "20",
							parent_id: null,
							name: u.intl.string(u.t.vcKDMj),
							type: s.d4z.GUILD_CATEGORY
						}, {
							id: "21",
							parent_id: "20",
							name: u.intl.string(u.t.XS6gcH),
							type: s.d4z.GUILD_VOICE
						}, {
							id: "22",
							parent_id: "20",
							name: u.intl.string(u.t.hi1Ykp),
							type: s.d4z.GUILD_VOICE
						}, {
							id: "22",
							parent_id: "20",
							name: u.intl.string(u.t.vw8oaW),
							type: s.d4z.GUILD_VOICE
						}],
						roles: [{
							id: "00",
							name: "@everyone",
							permissions: _.TP
						}, {
							id: "01",
							name: "officers (example)",
							mentionable: !0,
							hoist: !0,
							permissions: a.$e(_.TP, s.Plq.MANAGE_ROLES, s.Plq.MANAGE_CHANNELS, s.Plq.KICK_MEMBERS, s.Plq.BAN_MEMBERS, s.Plq.MANAGE_NICKNAMES, s.Plq.MANAGE_GUILD_EXPRESSIONS, s.Plq.MANAGE_MESSAGES, s.Plq.SEND_TTS_MESSAGES),
							color: 3066993
						}],
						system_channel_id: "12"
					},
					HUB_STUDY: {
						id: "HUB_STUDY",
						code: "2JBhzzca2vfT",
						label: u.intl.string(u.t.fYwSi4),
						channels: [{
							id: "00",
							parent_id: null,
							name: u.intl.string(u.t["HY+vdH"]),
							type: s.d4z.GUILD_CATEGORY
						}, {
							id: "01",
							parent_id: "00",
							name: u.intl.string(u.t["3eM+Li"]),
							type: s.d4z.GUILD_TEXT
						}, {
							id: "02",
							parent_id: "00",
							name: u.intl.string(u.t.Qi0D7e),
							type: s.d4z.GUILD_TEXT
						}, {
							id: "10",
							parent_id: null,
							name: u.intl.string(u.t.yZIUV1),
							type: s.d4z.GUILD_CATEGORY
						}, {
							id: "11",
							parent_id: "10",
							name: u.intl.string(u.t.pIOigI),
							type: s.d4z.GUILD_TEXT
						}, {
							id: "12",
							parent_id: "10",
							name: u.intl.string(u.t.ao2wxs),
							type: s.d4z.GUILD_TEXT
						}, {
							id: "12",
							parent_id: "10",
							name: u.intl.string(u.t.AIszv7),
							type: s.d4z.GUILD_TEXT
						}, {
							id: "20",
							parent_id: null,
							name: u.intl.string(u.t.vcKDMj),
							type: s.d4z.GUILD_CATEGORY
						}, {
							id: "21",
							parent_id: "20",
							name: u.intl.string(u.t.XS6gcH),
							type: s.d4z.GUILD_VOICE
						}, {
							id: "22",
							parent_id: "20",
							name: u.intl.formatToPlainString(u.t.LuNsNT, {
								number: 1
							}),
							type: s.d4z.GUILD_VOICE
						}, {
							id: "23",
							parent_id: "20",
							name: u.intl.formatToPlainString(u.t.LuNsNT, {
								number: 2
							}),
							type: s.d4z.GUILD_VOICE
						}],
						system_channel_id: "12"
					},
					HUB_CLASS: {
						id: "HUB_CLASS",
						code: "r86WWBwTGspb",
						label: u.intl.string(u.t.e5gFS0),
						channels: [{
							id: "00",
							parent_id: null,
							name: u.intl.string(u.t["HY+vdH"]),
							type: s.d4z.GUILD_CATEGORY
						}, {
							id: "01",
							parent_id: "00",
							name: u.intl.string(u.t["710tNj"]),
							type: s.d4z.GUILD_TEXT
						}, {
							id: "02",
							parent_id: "00",
							name: u.intl.string(u.t.Qi0D7e),
							type: s.d4z.GUILD_TEXT
						}, {
							id: "10",
							parent_id: null,
							name: u.intl.string(u.t.yZIUV1),
							type: s.d4z.GUILD_CATEGORY
						}, {
							id: "11",
							parent_id: "10",
							name: u.intl.string(u.t.pIOigI),
							type: s.d4z.GUILD_TEXT
						}, {
							id: "12",
							parent_id: "10",
							name: u.intl.string(u.t.ao2wxs),
							type: s.d4z.GUILD_TEXT
						}, {
							id: "13",
							parent_id: "10",
							name: u.intl.string(u.t.AIszv7),
							type: s.d4z.GUILD_TEXT
						}, {
							id: "20",
							parent_id: null,
							name: u.intl.string(u.t.vcKDMj),
							type: s.d4z.GUILD_CATEGORY
						}, {
							id: "21",
							parent_id: "20",
							name: u.intl.string(u.t.XS6gcH),
							type: s.d4z.GUILD_VOICE
						}, {
							id: "22",
							parent_id: "20",
							name: u.intl.formatToPlainString(u.t.LuNsNT, {
								number: 1
							}),
							type: s.d4z.GUILD_VOICE
						}, {
							id: "23",
							parent_id: "20",
							name: u.intl.formatToPlainString(u.t.LuNsNT, {
								number: 2
							}),
							type: s.d4z.GUILD_VOICE
						}],
						system_channel_id: "12"
					},
					HUB_SOCIAL: {
						id: "HUB_SOCIAL",
						code: "AvvtXE3mfbCR",
						label: u.intl.string(u.t.oOj7Ii),
						channels: [{
							id: "00",
							parent_id: null,
							name: u.intl.string(u.t.yZIUV1),
							type: s.d4z.GUILD_CATEGORY
						}, {
							id: "01",
							parent_id: "00",
							name: u.intl.string(u.t.pIOigI),
							type: s.d4z.GUILD_TEXT
						}, {
							id: "02",
							parent_id: "00",
							name: u.intl.string(u.t.ao2wxs),
							type: s.d4z.GUILD_TEXT
						}, {
							id: "03",
							parent_id: "00",
							name: u.intl.string(u.t.AIszv7),
							type: s.d4z.GUILD_TEXT
						}, {
							id: "04",
							parent_id: "00",
							name: u.intl.string(u.t.d4F8gI),
							type: s.d4z.GUILD_TEXT
						}, {
							id: "10",
							parent_id: null,
							name: u.intl.string(u.t.vcKDMj),
							type: s.d4z.GUILD_CATEGORY
						}, {
							id: "11",
							parent_id: "10",
							name: u.intl.string(u.t.CLWKNj),
							type: s.d4z.GUILD_VOICE
						}, {
							id: "12",
							parent_id: "10",
							name: u.intl.string(u.t.g3qPRk),
							type: s.d4z.GUILD_VOICE
						}, {
							id: "13",
							parent_id: "10",
							name: u.intl.string(u.t.yQZpe3),
							type: s.d4z.GUILD_VOICE
						}],
						system_channel_id: "02"
					},
					HUB_MAJOR: {
						id: "HUB_MAJOR",
						code: "FhmfDR6Arvsc",
						label: u.intl.string(u.t["9kly4e"]),
						channels: [{
							id: "00",
							parent_id: null,
							name: u.intl.string(u.t["HY+vdH"]),
							type: s.d4z.GUILD_CATEGORY
						}, {
							id: "01",
							parent_id: "00",
							name: u.intl.string(u.t.yZCzMT),
							type: s.d4z.GUILD_TEXT
						}, {
							id: "02",
							parent_id: "00",
							name: u.intl.string(u.t.Qi0D7e),
							type: s.d4z.GUILD_TEXT
						}, {
							id: "10",
							parent_id: null,
							name: u.intl.string(u.t.yZIUV1),
							type: s.d4z.GUILD_CATEGORY
						}, {
							id: "11",
							parent_id: "10",
							name: u.intl.string(u.t.pIOigI),
							type: s.d4z.GUILD_TEXT
						}, {
							id: "12",
							parent_id: "10",
							name: u.intl.string(u.t.ao2wxs),
							type: s.d4z.GUILD_TEXT
						}, {
							id: "13",
							parent_id: "10",
							name: u.intl.string(u.t.AIszv7),
							type: s.d4z.GUILD_TEXT
						}, {
							id: "20",
							parent_id: null,
							name: u.intl.string(u.t.vcKDMj),
							type: s.d4z.GUILD_CATEGORY
						}, {
							id: "21",
							parent_id: "20",
							name: u.intl.string(u.t.XS6gcH),
							type: s.d4z.GUILD_VOICE
						}, {
							id: "22",
							parent_id: "20",
							name: u.intl.formatToPlainString(u.t.LuNsNT, {
								number: 1
							}),
							type: s.d4z.GUILD_VOICE
						}, {
							id: "23",
							parent_id: "20",
							name: u.intl.formatToPlainString(u.t.LuNsNT, {
								number: 2
							}),
							type: s.d4z.GUILD_VOICE
						}],
						system_channel_id: "12"
					},
					HUB_DORM: {
						id: "HUB_DORM",
						code: "fkq8xHfrGE58",
						label: u.intl.string(u.t["ppGw/P"]),
						channels: [{
							id: "00",
							parent_id: null,
							name: u.intl.string(u.t["HY+vdH"]),
							type: s.d4z.GUILD_CATEGORY
						}, {
							id: "01",
							parent_id: "00",
							name: u.intl.string(u.t["b2+FCQ"]),
							type: s.d4z.GUILD_TEXT
						}, {
							id: "10",
							parent_id: null,
							name: u.intl.string(u.t.yZIUV1),
							type: s.d4z.GUILD_CATEGORY
						}, {
							id: "11",
							parent_id: "10",
							name: u.intl.string(u.t.pIOigI),
							type: s.d4z.GUILD_TEXT
						}, {
							id: "12",
							parent_id: "10",
							name: u.intl.string(u.t.ao2wxs),
							type: s.d4z.GUILD_TEXT
						}, {
							id: "13",
							parent_id: "10",
							name: u.intl.string(u.t.AIszv7),
							type: s.d4z.GUILD_TEXT
						}, {
							id: "20",
							parent_id: null,
							name: u.intl.string(u.t.vcKDMj),
							type: s.d4z.GUILD_CATEGORY
						}, {
							id: "21",
							parent_id: "20",
							name: u.intl.string(u.t.XS6gcH),
							type: s.d4z.GUILD_VOICE
						}, {
							id: "22",
							parent_id: "20",
							name: u.intl.string(u.t.g3qPRk),
							type: s.d4z.GUILD_VOICE
						}, {
							id: "23",
							parent_id: "20",
							name: u.intl.string(u.t.CLWKNj),
							type: s.d4z.GUILD_VOICE
						}],
						system_channel_id: "12"
					}
				}
			}
		},
		951206: function(t, n, e) {
			e.d(n, {
				F: () => u
			});
			var i = e(512722),
				l = e.n(i),
				r = e(846027),
				d = e(287734),
				a = e(131951),
				_ = e(254238),
				s = e(893387);

			function u(t, n) {
				var e;
				let i = null != (e = t.sessionId) ? e : "";
				(0, _._)(i), (0, _.s6)();
				let u = null != n ? n : t.channelId;
				l()(null != u, "attempted to transfer to unknown channel"), t.selfMute !== a.Z.isSelfMute() && r.Z.toggleSelfMute(), t.selfDeaf !== a.Z.isSelfDeaf() && r.Z.toggleSelfDeaf(), (0, s.Z)(u, "discord_client", i), d.default.selectVoiceChannel(u, !1)
			}
		},
		446226: function(t, n, e) {
			e.d(n, {
				Z: () => a
			});
			var i = e(442837),
				l = e(314897),
				r = e(979651),
				d = e(258609);

			function a() {
				return (0, i.e7)([l.default, r.Z, d.Z], () => {
					var t;
					let n = l.default.getId(),
						e = d.Z.getRemoteSessionId();
					return null != (t = r.Z.getVoiceStateForSession(n, e)) ? t : void 0
				}, [])
			}
		},
		937393: function(t, n, e) {
			e.d(n, {
				Z: () => a
			});
			var i = e(442837),
				l = e(553795),
				r = e(823379),
				d = e(981631);

			function a() {
				return (0, i.Wu)([l.Z], () => [l.Z.getAccount(null, d.ABu.XBOX), l.Z.getAccount(null, d.ABu.PLAYSTATION), l.Z.getAccount(null, d.ABu.PLAYSTATION_STAGING)].filter(r.lm))
			}
		},
		721351: function(t, n, e) {
			e.d(n, {
				Z: () => a
			});
			var i = e(481060),
				l = e(374129),
				r = e(639351),
				d = e(927923);

			function a(t) {
				return null != t ? (0, i.GSL)(t === d.YE.XBOX ? r.Z : l.Z) : i.U5H
			}
		},
		420529: function(t, n, e) {
			e.d(n, {
				Z: () => m
			});
			var i = e(255367);
			e(73800);
			var l = e(399606),
				r = e(481060),
				d = e(231757),
				a = e(397639),
				_ = e(19780),
				s = e(979651),
				u = e(951206),
				p = e(446226),
				o = e(937393),
				I = e(721351),
				c = e(981631),
				T = e(388032);

			function g(t) {
				for (var n = 1; n < arguments.length; n++) {
					var e = null != arguments[n] ? arguments[n] : {},
						i = Object.keys(e);
					"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(e).filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), i.forEach(function(n) {
						var i;
						i = e[n], n in t ? Object.defineProperty(t, n, {
							value: i,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[n] = i
					})
				}
				return t
			}

			function E(t, n) {
				return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(t, n) {
					var e = Object.keys(t);
					if (Object.getOwnPropertySymbols) {
						var i = Object.getOwnPropertySymbols(t);
						e.push.apply(e, i)
					}
					return e
				})(Object(n)).forEach(function(e) {
					Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
				}), t
			}

			function m(t) {
				let n = (0, l.e7)([_.Z], () => _.Z.getChannelId() === t.id),
					m = (0, p.Z)(),
					U = (null == m ? void 0 : m.channelId) === t.id,
					D = (0, a.V)(t) && !t.isPrivate(),
					L = (0, a.Z)(t),
					O = !(0, l.e7)([s.Z], () => s.Z.isInChannel(t.id)) && L || D,
					y = (0, o.Z)();
				if (!U && 0 === y.length) return null;
				let G = n => {
					if (!n.twoWayLink || n.revoked) return void(0, d.Z)({
						platformType: n.type,
						location: "Console Transfer Item"
					});
					n.type === c.ABu.XBOX ? (0, r.ZDy)(async () => {
						let {
							default: n
						} = await Promise.all([e.e("24913"), e.e("522")]).then(e.bind(e, 200623));
						return e => (0, i.jsx)(n, E(g({}, e), {
							channel: t
						}))
					}) : (n.type === c.ABu.PLAYSTATION || n.type === c.ABu.PLAYSTATION_STAGING) && (0, r.ZDy)(async () => {
						let {
							default: l
						} = await e.e("638").then(e.bind(e, 543974));
						return e => (0, i.jsx)(l, E(g({}, e), {
							platform: n.type,
							channel: t
						}))
					})
				};
				return U ? (0, i.jsx)(r.sNh, {
					label: T.intl.string(T.t.PlwgdX),
					id: "handoff",
					action: () => {
						(0, u.F)(m)
					},
					icon: (0, I.Z)(void 0),
					disabled: O
				}) : y.map(t => {
					var e, l;
					return (0, i.jsx)(r.sNh, {
						id: "transfer-".concat(t.type, "-").concat(t.id),
						label: (e = t.type, l = n, e === c.ABu.XBOX ? l ? T.intl.string(T.t["qVE/VF"]) : T.intl.string(T.t.E8euSk) : e === c.ABu.PLAYSTATION ? l ? T.intl.string(T.t.vzfxmZ) : T.intl.string(T.t.QxEYDg) : e === c.ABu.PLAYSTATION_STAGING ? l ? T.intl.string(T.t.BDiXtb) : T.intl.string(T.t["bhdB9/"]) : void 0),
						action: () => G(t),
						icon: (0, I.Z)(t.type),
						disabled: O
					}, t.id)
				})
			}
		},
		370774: function(t, n, e) {
			if (e.d(n, {
					D: () => D,
					O4: () => O,
					YH: () => E,
					bl: () => m,
					j4: () => L,
					s: () => U
				}), 12633 == e.j) var i = e(995638);
			if (12633 == e.j) var l = e(89616);
			var r = e(114858),
				d = e(442837),
				a = e(230711),
				_ = e(455199),
				s = e(592125),
				u = e(430824);
			e(375954);
			var p = e(306680);
			e(594174);
			var o = e(70956),
				I = e(709054),
				c = e(787879),
				T = e(982183),
				g = e(981631);

			function E(t) {
				let {
					messageId: n,
					channelId: e,
					guildId: i,
					ReadStateStore_: l = p.ZP,
					GuildStore_: r = u.Z
				} = t;
				if (!l.hasUnread(e)) return !1;
				let d = r.getGuild(i);
				if (null == d || null == d.joinedAt) return !1;
				let a = l.ackMessageId(e);
				if (null == a) {
					let t = r.getGuild(i);
					null != t && null != t.joinedAt && (a = I.default.fromTimestamp(t.joinedAt.getTime()))
				}
				return I.default.compare(n, a) > 0
			}

			function m(t) {
				let {
					id: n
				} = t, e = (0, i.default)(new Date, I.default.extractTimestamp(n));
				return 0 === e ? T.KZ.TODAY : 1 === e ? T.KZ.YESTERDAY : T.KZ.OLDER
			}

			function U(t) {
				let n = (0, l.Z)(),
					e = new Date(n.getTime() - o.Z.Millis.DAY);
				return t.OLDER ? "0" : t.YESTERDAY ? I.default.fromTimestamp(e.getTime()) : t.TODAY || t.UNREAD ? I.default.fromTimestamp(n.getTime()) : "0"
			}

			function D() {
				let {
					pathname: t
				} = (0, r.TH)();
				return t.startsWith(g.Z5c.NOTIFICATIONS_INBOX())
			}

			function L(t) {
				a.Z.open(g.oAB.NOTIFICATIONS, void 0, {
					analyticsLocations: t
				})
			}

			function O() {
				let t = (0, d.Wu)([c.Z], () => {
						var t;
						return null != (t = c.Z.getNotifyingChannelIds()) ? t : []
					}),
					n = (0, d.Wu)([p.ZP], () => t.filter(t => p.ZP.hasUnread(t) && !p.ZP.isEstimated(t)), [t]),
					e = (0, d.Wu)([_.ZP], () => {
						var t;
						return null != (t = _.ZP.getSettingsFilteredMentions()) ? t : []
					});
				return {
					unreadRecentMentionsCount: (0, d.e7)([p.ZP, s.Z, u.Z], () => {
						var t, n;
						return null != (n = null == e || null == (t = e.filter(t => {
							let n = s.Z.getChannel(t.channel_id);
							return null != n && E({
								messageId: t.id,
								channelId: t.channel_id,
								guildId: n.guild_id,
								ReadStateStore_: p.ZP,
								GuildStore_: u.Z
							})
						})) ? void 0 : t.length) ? n : 0
					}, [e]),
					unreadChannelIds: n
				}
			}
		},
		397639: function(t, n, e) {
			e.d(n, {
				V: () => s,
				Z: () => u
			});
			var i = e(442837),
				l = e(430824),
				r = e(496675),
				d = e(979651),
				a = e(934415),
				_ = e(231338);

			function s(t) {
				return (0, i.e7)([r.Z], () => null == t || !r.Z.can(_.Pl.CONNECT, t), [t])
			}

			function u(t) {
				return (0, i.e7)([d.Z, l.Z], () => (0, a.rY)(t, d.Z, l.Z))
			}
		}
	}
]);
//# sourceMappingURL=51483b00da56fa96.js.map