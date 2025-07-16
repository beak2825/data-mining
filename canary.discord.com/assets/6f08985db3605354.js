"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["70205"], {
		95045: function(t) {
			t.exports = "/assets/dbf950ebc5dc2bc5.png"
		},
		864060: function(t, e, n) {
			n.d(e, {
				FI: () => G,
				LL: () => L,
				N_: () => w,
				Xi: () => H,
				eF: () => M
			}), n(997841), n(953529), n(415506);
			var i = n(317381),
				l = n(933557),
				a = n(710845),
				r = n(978003),
				o = n(41776),
				u = n(355298),
				s = n(957730),
				d = n(850908),
				c = n(572804),
				f = n(901461),
				g = n(569471),
				E = n(723170),
				_ = n(695346),
				p = n(131704),
				T = n(433355),
				S = n(592125),
				N = n(430824),
				I = n(19780),
				h = n(699516),
				C = n(944486),
				Z = n(914010),
				A = n(885110),
				v = n(9156),
				m = n(594174),
				y = n(630388),
				P = n(5192),
				O = n(352736),
				D = n(51144);
			n(734934);
			var U = n(842619),
				R = n(981631),
				b = n(124368),
				k = n(388032);

			function L(t, e, n) {
				let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
				if (e.hasFlag(R.xW$.SPAMMER) || n.isManaged()) return !1;
				let l = n.getGuildId();
				return !(null != l && o.Z.isLurking(l) || !i.ignoreSameUser && e.id === t.id || h.Z.isBlockedOrIgnored(e.id) || !i.ignoreStatus && A.Z.getStatus() === R.Skl.DND || _.QZ.getSetting() || !i.ignoreNoMessagesSetting && v.ZP.allowNoMessages(n))
			}

			function M(t, e) {
				var n, l;
				let a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
					r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
				if (null != t.flags && (0, y.yE)(t.flags, R.iLy.SUPPRESS_NOTIFICATIONS)) return !1;
				let o = S.Z.getChannel(e);
				t.type === R.uaV.THREAD_STARTER_MESSAGE && (o = S.Z.getChannel(null == o ? void 0 : o.parent_id));
				let s = m.default.getCurrentUser(),
					d = m.default.getUser(null == (n = t.author) ? void 0 : n.id);
				if (null == o || null == s || null == d || o.type === R.d4z.GROUP_DM && t.type === R.uaV.RECIPIENT_REMOVE || U.Z.areSlayerNotificationsSuppressed() && ((l = o).type === R.d4z.DM || null != l.linkedLobby) || !L(s, d, o, {
						ignoreStatus: r,
						ignoreSameUser: R.V$x.SELF_MENTIONABLE_SYSTEM.has(t.type)
					}) || u.Z.isMessageRequest(e)) return !1;
				if (!a) {
					let t = C.Z.getChannelId(Z.Z.getGuildId());
					if (t === o.id || T.ZP.getCurrentSidebarChannelId(t) === o.id) return !1
				}
				if (h.Z.isBlockedOrIgnoredForMessage(t) || void 0 !== t.activity_instance && null != t.interaction && t.interaction.user.id === s.id) return !1;
				if (null != t.application_id) {
					let n = i.ZP.getCurrentEmbeddedActivity();
					if ((null == n ? void 0 : n.applicationId) === t.application_id && n.location.channel_id === e) return !1
				}
				if (t.type === R.uaV.CHAT_WALLPAPER_SET || t.type === R.uaV.CHAT_WALLPAPER_REMOVED) return !1;
				if (p.Ec.has(o.type)) {
					if (g.Z.isMuted(o.id)) return !1;
					let e = (0, E.J)(o);
					return e !== b.iN.NO_MESSAGES && (e === b.iN.ALL_MESSAGES || (0, c.Hl)({
						rawMessage: t,
						userId: s.id,
						suppressEveryone: !1,
						suppressRoles: !1
					}))
				} {
					let e = !p.tx.has(o.type) || I.Z.getChannelId() === o.id;
					if (v.ZP.allowAllMessages(o) && e) return !0;
					let n = v.ZP.isSuppressEveryoneEnabled(o.getGuildId()),
						i = v.ZP.isSuppressRolesEnabled(o.getGuildId());
					return (0, c.Hl)({
						rawMessage: t,
						userId: s.id,
						suppressEveryone: n,
						suppressRoles: i
					})
				}
			}

			function w(t, e) {
				var n;
				if (C.Z.getChannelId(Z.Z.getGuildId()) !== e) return !1;
				let i = S.Z.getChannel(e);
				t.type === R.uaV.THREAD_STARTER_MESSAGE && (i = S.Z.getChannel(null == i ? void 0 : i.parent_id));
				let l = m.default.getCurrentUser(),
					a = m.default.getUser(null == (n = t.author) ? void 0 : n.id);
				return !(null == i || null == l || null == a || i.isManaged() || a.hasFlag(R.xW$.SPAMMER) || h.Z.isBlockedOrIgnoredForMessage(t) || a.id === l.id || A.Z.getStatus() === R.Skl.DND || _.QZ.getSetting() || v.ZP.allowNoMessages(i)) && t.type !== R.uaV.CHAT_WALLPAPER_SET && t.type !== R.uaV.CHAT_WALLPAPER_REMOVED
			}

			function G(t, e) {
				let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
					i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
					l = m.default.getCurrentUser(),
					a = m.default.getUser(t.ownerId);
				return !(null == e || null == l || null == a || !L(l, a, e, {
					ignoreStatus: i,
					ignoreNoMessagesSetting: !0
				}) || v.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id)) && (!!n || C.Z.getChannelId(Z.Z.getGuildId()) !== e.id) && v.ZP.getNewForumThreadsCreated(e)
			}
			let V = (t, e, n) => "".concat(t, " (").concat((0, l.F6)(e, m.default, h.Z, !0)).concat(null != n ? ", ".concat((0, l.F6)(n, m.default, h.Z)) : "", ")");

			function F(t, e, n, i) {
				switch (t.type) {
					case R.d4z.GUILD_ANNOUNCEMENT:
					case R.d4z.GUILD_TEXT:
						return e;
					case R.d4z.GROUP_DM:
						return n;
					case R.d4z.DM:
					default:
						return i
				}
			}

			function H(t, e, n) {
				let i, o = P.ZP.getName(t.getGuildId(), t.id, n),
					u = o;
				switch (t.type) {
					case R.d4z.GUILD_ANNOUNCEMENT:
					case R.d4z.GUILD_TEXT:
					case R.d4z.GUILD_VOICE:
					case R.d4z.ANNOUNCEMENT_THREAD:
					case R.d4z.PUBLIC_THREAD:
					case R.d4z.PRIVATE_THREAD:
						let c = S.Z.getChannel(t.parent_id);
						e.type === R.uaV.THREAD_STARTER_MESSAGE && null != c ? u = V(u, c, S.Z.getChannel(c.parent_id)) : (0, f.Z)(e) ? null != N.Z.getGuild(t.getGuildId()) && (u = V(u, t, c)) : u = V(u, t, c);
						break;
					case R.d4z.GROUP_DM:
						t.isManaged() && n.bot && u === (0, l.F6)(t, m.default, h.Z) || (u = "".concat(u, " (").concat((0, l.F6)(t, m.default, h.Z, !0), ")"))
				}
				let g = e.content;
				if ((0, f.Z)(e) && null == (g = O.Z.stringify(e, t))) throw new a.Z("NotificationTextUtils").warn("SystemMessageUtils.stringify(...) could not convert", {
					message: e
				}), Error("failed to stringify system message");
				let E = "sticker_items" in e ? e.sticker_items : "stickerItems" in e ? e.stickerItems : e.stickers;
				if ("message_reference" in e ? (0, r.s)(e) : (0, r.Z)(e)) i = k.intl.string(k.t["9ddYKi"]);
				else if (null != e.activity && null != e.application) i = e.activity.type === R.mFx.JOIN ? k.intl.formatToPlainString(F(t, k.t.E8CgCg, k.t.c6KHWF, k.t.Fy7rJC), {
					user: o,
					game: e.application.name
				}) : e.activity.type === R.mFx.JOIN_REQUEST ? k.intl.formatToPlainString(F(t, k.t["/TD0lZ"], k.t["/TD0lZ"], k.t["/TD0lZ"]), {
					user: o,
					game: e.application.name
				}) : "";
				else if (null != e.activity && e.activity.type === R.mFx.LISTEN) {
					let e = F(t, k.t.SaDdmJ, k.t.qsODho, k.t.WeiMTU);
					i = k.intl.formatToPlainString(e, {
						user: o
					})
				} else if (null != E && E.length > 0) i = k.intl.formatToPlainString(k.t.zY4v1N, {
					stickerName: E[0].name
				});
				else if (e.type === R.uaV.PREMIUM_REFERRAL) i = k.intl.formatToPlainString(k.t.lieTqa, {
					username: D.ZP.getName(n)
				});
				else if (null != e.poll) i = k.intl.formatToPlainString(k.t.ImizdH, {
					question: e.poll.question.text
				});
				else if (e.type === R.uaV.POLL_RESULT) {
					var _, p, T;
					let t = null == (T = e.embeds) || null == (p = T[0]) || null == (_ = p.fields) ? void 0 : _.find(t => ("name" in t ? t.name : t.rawName) === "poll_question_text"),
						n = null != t ? "value" in t ? t.value : t.rawValue : "";
					i = k.intl.formatToPlainString(k.t["9WrecH"], {
						question: n
					})
				} else i = 0 !== g.length && t.type === R.d4z.DM && !n.bot && g.startsWith("> -# *") ? (i = s.ZP.unparse(g, t.id, !0)).substring(0, 1) + i.substring(4) : s.ZP.unparse(g, t.id, !0);
				return 0 === i.length && (i = function(t) {
					var e;
					if (void 0 !== t.embeds && t.embeds.length > 0) {
						let e = t.embeds[0],
							n = "description" in e ? e.description : e.rawDescription,
							i = "title" in e ? e.title : e.rawTitle;
						if (null != n) return null != i ? "".concat(i, " ").concat(n) : n;
						if (null != i) return i;
						if (null != e.fields && e.fields.length > 0) {
							let t = e.fields[0],
								n = "name" in t ? t.name : t.rawName,
								i = "value" in t ? t.value : t.rawValue;
							return "".concat(n, " ").concat(i)
						}
					}
					if ((0, y.yE)(null != (e = t.flags) ? e : 0, R.iLy.IS_VOICE_MESSAGE)) return k.intl.string(k.t.slFYgo);
					if (void 0 !== t.attachments && t.attachments.length > 0) {
						let e = (0, d.Z)(t.attachments[0]);
						return k.intl.formatToPlainString(k.t["51OkwM"], {
							filename: e
						})
					}
					return ""
				}(e)), {
					icon: n.getAvatarURL(t.guild_id, 128),
					title: u,
					body: i
				}
			}
		},
		842619: function(t, e, n) {
			n.d(e, {
				Z: () => g
			});
			var i, l, a, r = n(442837),
				o = n(570140),
				u = n(818083),
				s = n(314897);
			let d = {},
				c = (0, u.B)({
					kind: "user",
					id: "2025-03_slayer_notif_supression_killswitch",
					label: "Disable suppressing notifications with slayer game active",
					defaultConfig: {
						enabled: !1
					},
					treatments: [{
						id: 1,
						label: "Disable suppressing",
						config: {
							enabled: !0
						}
					}]
				});
			class f extends(a = r.ZP.Store) {
				areSlayerNotificationsSuppressed() {
					if (c.getCurrentConfig({
							location: "Store"
						}, {
							autoTrackExposure: !1
						}).enabled) return !1;
					for (let t in d)
						if (d[t] === s.default.getId()) return !0;
					return !1
				}
			}
			l = "RpcNotificationSettingsStore", (i = "displayName") in f ? Object.defineProperty(f, i, {
				value: l,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : f[i] = l;
			let g = new f(o.Z, {
				RPC_APP_DISCONNECTED: function(t) {
					delete d[t.socketId]
				},
				SET_RPC_NOTIFICATION_SETTINGS: function(t) {
					delete d[t.socketId], t.suppressNotifications && (d[t.socketId] = t.targetUserId)
				}
			})
		},
		687272: function(t, e, n) {
			n.d(e, {
				QU: () => r,
				_x: () => o
			});
			var i = n(818083),
				l = n(432919);
			let a = (0, i.B)({
					kind: "user",
					id: "2025-06_desktop_notifications_view_tracking",
					label: "Track when a desktop notification is viewed",
					defaultConfig: {
						enabled: !1
					},
					treatments: [{
						id: 1,
						label: "Track Notification View",
						config: {
							enabled: !0
						}
					}]
				}),
				r = t => {
					let {
						enabled: e
					} = a.getCurrentConfig({
						location: t
					}, {
						autoTrackExposure: !0
					});
					return e
				},
				o = (t, e) => {
					if (null == e) return !1;
					let n = (0, l.h)(e),
						i = r(t);
					return n && i
				}
		},
		432919: function(t, e, n) {
			n.d(e, {
				h: () => a
			});
			var i = n(108131),
				l = n.n(i);

			function a(t) {
				let e = l().v3(String(t));
				return e < 0 && (e += 0x100000000), e % 0x7fffffff < 21474836.47
			}
		},
		11352: function(t, e, n) {
			n.d(e, {
				Y: () => i
			});
			let i = (0, n(818083).B)({
				kind: "user",
				id: "2024-04_custom_notification_sound_web",
				label: "Custom Notification Sound for Desktop",
				defaultConfig: {
					enabled: !1,
					nestedEntry: !1
				},
				treatments: [{
					id: 1,
					label: "Enable custom notification sounds",
					config: {
						enabled: !0,
						nestedEntry: !1
					}
				}, {
					id: 2,
					label: "Enable custom notification sounds + nested entry point",
					config: {
						enabled: !0,
						nestedEntry: !0
					}
				}]
			})
		},
		671105: function(t, e, n) {
			n.d(e, {
				OR: () => r,
				_c: () => u,
				bb: () => s,
				iD: () => o
			});
			var i = n(442837),
				l = n(581883),
				a = n(871465);

			function r(t) {
				return d(t, void 0, (0, i.e7)([l.Z], () => {
					var t;
					return null == (t = l.Z.settings.guilds) ? void 0 : t.guilds
				}))
			}

			function o(t) {
				var e, n;
				return d(t, void 0, null != (n = null == (e = l.Z.settings.guilds) ? void 0 : e.guilds) ? n : {})
			}

			function u(t, e) {
				let n = (0, i.e7)([l.Z], () => {
					var t;
					return null == (t = l.Z.settings.guilds) ? void 0 : t.guilds
				});
				return null != e ? d(t, e, n) : void 0
			}

			function s(t, e) {
				var n, i;
				let a = null != (i = null == (n = l.Z.settings.guilds) ? void 0 : n.guilds) ? i : {};
				return null != e ? d(t, e, a) : void 0
			}

			function d(t, e, n) {
				var i, l, r;
				if (null == n) return;
				let o = null != e ? null == (i = n[t]) ? void 0 : i.channels[e] : n[t],
					u = null == o ? void 0 : o.customNotificationSoundConfig;
				return null != u && null != (r = null == u || null == (l = u.notificationSoundPackId) ? void 0 : l.value) ? Object.values(a.YC).find(t => t === r) : void 0
			}
		},
		974180: function(t, e, n) {
			n.d(e, {
				Ay: () => tE,
				yk: () => t_
			}), n(388685), n(539854);
			var i, l = n(392711),
				a = n(149765),
				r = n(442837),
				o = n(524437),
				u = n(433517),
				s = n(570140),
				d = n(493683),
				c = n(475179),
				f = n(749210),
				g = n(292556),
				E = n(287734),
				_ = n(232567),
				p = n(579806),
				T = n(761781),
				S = n(728345),
				N = n(812206),
				I = n(802098),
				h = n(933557),
				C = n(456269),
				Z = n(890022),
				A = n(688907),
				v = n(15274),
				m = n(754688),
				y = n(336197),
				P = n(355298),
				O = n(786761),
				D = n(601992),
				U = n(864060),
				R = n(687272),
				b = n(691294),
				k = n(11352),
				L = n(671105),
				M = n(106371),
				w = n(703656),
				G = n(359110),
				V = n(922482),
				F = n(427679),
				H = n(488131),
				W = n(695346),
				x = n(601964),
				Y = n(592125),
				q = n(430824),
				z = n(375954),
				B = n(292959),
				X = n(496675),
				j = n(306680),
				J = n(699516),
				Q = n(944486),
				K = n(885110),
				$ = n(246946),
				tt = n(594174),
				te = n(979651),
				tn = n(626135),
				ti = n(70956),
				tl = n(5192),
				ta = n(358085),
				tr = n(74538),
				to = n(51144),
				tu = n(654769),
				ts = n(981631),
				td = n(765305),
				tc = n(388032);

			function tf(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}

			function tg(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {},
						i = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
						return Object.getOwnPropertyDescriptor(n, t).enumerable
					}))), i.forEach(function(e) {
						tf(t, e, n[e])
					})
				}
				return t
			}
			let tE = "message1",
				t_ = .4,
				tp = (null === p.Z || void 0 === p.Z ? void 0 : p.Z.features.supports("notifications")) ? 20 : 1,
				tT = "discord_dismissed_notification_shown",
				tS = document.hasFocus(),
				tN = null,
				tI = new Set,
				th = {},
				tC = {},
				tZ = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
				tA = new class {
					track(t, e, n) {
						let i = this._channels[t];
						for (null == i && (i = [], this._channels[t] = i), i.push({
								notification: e,
								trackingProps: n
							}); i.length > tp;) {
							var l;
							let t = i.shift();
							(null == t || null == (l = t.notification) ? void 0 : l.close) != null && (t.notification.close(), tn.default.track(ts.rMx.NOTIFICATION_ACTION, tg({
								action: "REMOVE"
							}, t.trackingProps)))
						}
					}
					clearChannel(t) {
						let e = this._channels[t];
						null != e && (delete this._channels[t], e.forEach(t => {
							let {
								notification: e,
								trackingProps: n
							} = t;
							e.close(), tn.default.track(ts.rMx.NOTIFICATION_ACTION, tg({
								action: "ACK"
							}, n))
						}))
					}
					constructor() {
						tf(this, "_channels", {})
					}
				};

			function tv(t, e) {
				let {
					gameActivityNotificationType: n,
					excludeSteamGames: i
				} = e, l = t;
				i && (l = t.filter(t => {
					var e;
					return null == (e = t.metadata) || !e.distributor || t.metadata.distributor !== ts.GQo.STEAM
				}));
				let a = l.filter(t => t.type === ts.IIU.PLAYING && null != t.application_id).map(t => t.application_id);
				return n === o.Tv.ONLY_GAMES_PLAYED && (a = a.filter(t => T.Z.currentUserApplicationIds.has(t))), a
			}
			async function tm(t) {
				let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
					n = (0, A.MH)(),
					i = (0, A.j4)(),
					a = (0, Z.dm)(t);
				if (e) {
					let t = new Set;
					a.forEach(e => {
						let {
							activities: l,
							user: a
						} = e;
						if (0 === l.length || J.Z.isIgnored(a.id)) return;
						let r = tv(l, {
							gameActivityNotificationType: n,
							excludeSteamGames: i
						});
						0 !== r.length && (t = new Set([...t, ...r]))
					}), await S.ZP.fetchApplications([...t], !1)
				}
				a.forEach(t => {
					let {
						activities: a,
						user: r,
						guildId: o
					} = t;
					! function(t, e, n, i) {
						let a = ty(e);
						if (0 === t.length && 0 === a.length) return;
						let r = (0, l.difference)(t, a).filter(t => {
							var n;
							return null != t && (null == (n = th[e]) ? void 0 : n[t]) == null
						});
						(0, l.difference)(a, t).filter(t => {
							var n;
							return null != t && (null == (n = th[e]) ? void 0 : n[t]) === i
						}).forEach(t => {
							delete th[e][t]
						}), r.forEach(t => {
							var l, a;
							if (null == th[e] ? th[e] = {
									[t]: i
								} : null == th[e][t] && (th[e][t] = i), !n || tO()) return;
							let r = null != (a = null == (l = tC[e]) ? void 0 : l[t]) ? a : 0;
							if (Date.now() - r < ti.Z.Millis.HOUR) return;
							let o = N.Z.getApplication(t);
							null != o && (null == tC[e] && (tC[e] = {}), tC[e][t] = Date.now(), tP(o, e))
						}), 0 === ty(e).length && delete th[e]
					}(tv(a, {
						gameActivityNotificationType: n,
						excludeSteamGames: i
					}), r.id, e, null != o ? o : 0)
				})
			}

			function ty(t) {
				var e;
				return Object.keys(null != (e = th[t]) ? e : {})
			}
			async function tP(t, e) {
				var n;
				let i = await (0, _.PR)(e),
					l = await (0, b.m)(i.getAvatarURL(null, 64), null != (n = t.getIconURL(64)) ? n : null);
				tu.Z.showNotification(l, tc.intl.formatToPlainString(tc.t.kO0pfX, {
					name: tl.ZP.getName(null, null, i),
					activity: t.name
				}), "", {
					notif_type: "game_notif"
				}, {
					onClick: t => {
						d.Z.openPrivateChannel({
							recipientIds: e
						})
					},
					isUserAvatar: !1,
					actions: [{
						content: tc.intl.string(tc.t["E+yYpq"]),
						args: "open_message_action"
					}]
				})
			}

			function tO() {
				return !!(B.Z.getDesktopType() === ts.qrD.NEVER || K.Z.getStatus() === ts.Skl.DND || W.QZ.getSetting())
			}

			function tD(t) {
				return null != te.Z.getVoiceStateForChannel(t)
			}
			class tU extends(i = r.ZP.Store) {
				initialize() {
					this.waitFor(tt.default, Y.Z, B.Z, q.Z, F.Z, J.Z, X.Z, te.Z, P.Z)
				}
			}
			tf(tU, "displayName", "NotificationStore"), new tU(s.Z, __OVERLAY__ ? {} : {
				NOTIFICATIONS_SET_PERMISSION_STATE: function(t) {
					let {
						enabled: e
					} = t;
					if (e === ts.$Ab.ENABLED && !ta.isPlatformEmbedded) {
						let t = !(0, R.QU)("NotificationStore.handleSetHavePermission");
						tu.Z.showNotification(n(910653), tc.intl.string(tc.t.VSgOVl), tc.intl.string(tc.t["1UJvqa"]), {
							notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE"
						}, {
							omitViewTracking: t,
							sound: tE,
							volume: t_,
							tag: "hello",
							onClick: () => {
								window.focus()
							},
							isUserAvatar: !1
						})
					}
				},
				NOTIFICATION_CREATE: function(t) {
					let {
						icon: e,
						title: n,
						body: i,
						trackingProps: l,
						options: a
					} = t;
					return !tO() && (tu.Z.showNotification(e, n, i, l, a), !1)
				},
				WINDOW_FOCUS: function(t) {
					if (tS = t.focused) {
						let t = Q.Z.getChannelId();
						null != t && tA.clearChannel(t)
					}
				},
				MESSAGE_CREATE: function(t) {
					var e, i, l, a, r;
					let {
						channelId: o,
						message: u,
						optimistic: d
					} = t;
					if (d) return !1;
					let f = Y.Z.getChannel(o),
						E = tt.default.getUser(null == (e = u.author) ? void 0 : e.id),
						_ = tt.default.getCurrentUser();
					if (null == f || null == E || null == _) return !1;
					let p = (0, U.eF)(u, o, !tS),
						T = B.Z.getNotifyMessagesInSelectedChannel() && (0, U.N_)(u, o);
					if (!p && !T || u.type === ts.uaV.CHANGELOG && (null == u.changelog_id || I.Z.latestChangelogId() !== u.changelog_id)) return !1;
					let S = !B.Z.isSoundDisabled(tE),
						N = tr.ZP.canUseCustomNotificationSounds(_),
						h = k.Y.getCurrentConfig({
							location: "NotificationStore"
						}).enabled,
						C = N && h && S ? null != (a = (0, L.bb)(null != (l = f.guild_id) ? l : ts.aIL, o)) ? a : (0, L.iD)(f.guild_id) : void 0;
					if (T && (S && tu.Z.playNotificationSound("message3", .4, C), !tS) || !p) return !1;
					let Z = n(808506).default,
						A = n(624864).Z,
						{
							OverlayNotificationDisabledSetting: v
						} = n(486016);
					if (null != Z.getFocusedPID() && !A.isNotificationDisabled(v.TEXT_CHAT) && !$.Z.disableNotifications) return !1;
					let {
						icon: m,
						title: y,
						body: P
					} = (0, U.Xi)(f, u, E), b = !(0, R._x)("NotificationStore.handleMessage", null == _ ? void 0 : _.id);
					if (s.Z.dispatch({
							type: "RPC_NOTIFICATION_CREATE",
							channelId: f.id,
							message: u,
							icon: m,
							title: y,
							body: P
						}), (0, D.R)(u, f.guild_id), B.Z.getDesktopType() === ts.qrD.NEVER) return S && tu.Z.playNotificationSound(tE, t_, C), !1;
					let M = null != (r = z.Z.getMessage(o, u.id)) ? r : (0, O.e5)(u);
					tu.Z.showNotification(m, y, P, {
						notif_type: "MESSAGE_CREATE",
						notif_user_id: null == (i = u.author) ? void 0 : i.id,
						message_id: u.id,
						message_type: u.type,
						channel_id: f.id,
						channel_type: f.type,
						guild_id: f.guild_id,
						badge: (0, j.Ex)(M, _)
					}, {
						omitViewTracking: b,
						tag: u.id,
						sound: S ? tE : void 0,
						soundpack: C,
						volume: t_,
						onClick() {
							(0, G.Kh)(f.id), (f.type === ts.d4z.GUILD_VOICE || f.type === ts.d4z.GUILD_STAGE_VOICE) && c.Z.updateChatOpen(f.id, !0), g.default.clickedNotification()
						},
						isUserAvatar: !0,
						messageRecord: M
					}).then(t => {
						null != t && tA.track(f.id, t.notification, t.trackingProps)
					})
				},
				CHANNEL_SELECT: function(t) {
					let {
						channelId: e
					} = t;
					return null != e && tA.clearChannel(e), !1
				},
				MESSAGE_ACK: function(t) {
					let {
						channelId: e
					} = t;
					return tA.clearChannel(e), !1
				},
				ACTIVITY_START: function(t) {
					let {
						userId: e,
						activity: n
					} = t;
					if (tO() || n.type !== ts.IIU.PLAYING) return !1;
					{
						let t = tt.default.getUser(e);
						if (null == t) return !1;
						let i = to.ZP.getName(t),
							l = n.name,
							a = t.getAvatarURL(void 0, 128),
							r = tc.intl.string(tc.t.XoTWsL),
							o = tc.intl.formatToPlainString(tc.t.o4Aipq, {
								username: i,
								gameName: l
							});
						return tu.Z.showNotification(a, r, o, {
							notif_type: "ACTIVITY_START",
							activity_type: ts.IIU.PLAYING,
							notif_user_id: e,
							activity_name: l
						}, {
							sound: "message2",
							playSoundIfDisabled: !1,
							volume: .4,
							onClick() {
								d.Z.openPrivateChannel({
									recipientIds: e
								})
							},
							isUserAvatar: !0
						}), !1
					}
				},
				VOICE_STATE_UPDATES: function(t) {
					let {
						voiceStates: e
					} = t;
					if (tO()) return;
					let n = tt.default.getCurrentUser();
					if (null == n) return;
					let i = e.find(t => t.userId === n.id);
					if (null == i) return;
					let {
						channelId: l,
						guildId: a,
						suppress: r,
						requestToSpeakTimestamp: o
					} = i;
					if (null == l || null == a || !(!r && null != o)) return;
					let u = q.Z.getGuild(a),
						s = Y.Z.getChannel(l),
						d = F.Z.getStageInstanceByChannel(l);
					null != u && null != s && null != d && tu.Z.showNotification((0, x.EB)(u, 128), s.name, tc.intl.formatToPlainString(tc.t.sqnsSE, {
						channelName: (0, h.F6)(s, tt.default, J.Z),
						channelTopic: null == d ? void 0 : d.topic
					}), {
						notif_type: "Stage Speak Invite"
					}, {
						isUserAvatar: !1
					})
				},
				STAGE_INSTANCE_UPDATE: function(t) {
					let {
						instance: e
					} = t;
					if (tO() || !e.send_start_notification || tD(e.channel_id)) return !1;
					let n = tt.default.getCurrentUser(),
						i = q.Z.getGuild(e.guild_id),
						l = Y.Z.getChannel(e.channel_id),
						r = tt.default.getUser(e.host_id);
					if (null == n || null == l || null == i || null == r || !(0, U.LL)(n, r, l) || !X.Z.can(a.$e(ts.Plq.CONNECT, ts.Plq.VIEW_CHANNEL), l) || tI.has(e.id)) return !1;
					tI.add(e.id), tu.Z.showNotification((0, x.EB)(i, 128), tc.intl.formatToPlainString(tc.t.bZ4OkZ, {
						guildName: i.name
					}), tc.intl.formatToPlainString(tc.t.qTelnJ, {
						username: tl.ZP.getName(i.id, l.id, r),
						topic: e.topic
					}), {
						notif_type: "STAGE_INSTANCE_CREATE",
						guild_id: i.id,
						channel_id: l.id
					}, {
						onClick() {
							(0, V.Cq)(l)
						},
						isUserAvatar: !1
					})
				},
				STAGE_INSTANCE_DELETE: function(t) {
					let {
						instance: e
					} = t;
					tI.delete(e.id)
				},
				GUILD_SCHEDULED_EVENT_UPDATE: function(t) {
					let {
						guildScheduledEvent: e
					} = t;
					if (tO() || null == e.notification_type) return !1;
					e.notification_type === td.sy.EVENT_START && (e.entity_type === td.WX.STAGE_INSTANCE || e.entity_type === td.WX.VOICE ? function(t) {
						if (tO()) return;
						let e = t.channel_id;
						if (null == e || tD(e)) return;
						let n = tt.default.getCurrentUser(),
							i = q.Z.getGuild(t.guild_id),
							l = Y.Z.getChannel(t.channel_id),
							r = tt.default.getUser(t.host_id);
						if (null != n && null != l && null != i && null != r && X.Z.can(a.$e(ts.Plq.CONNECT, ts.Plq.VIEW_CHANNEL), l)) tu.Z.showNotification((0, x.EB)(i, 128), tc.intl.formatToPlainString(tc.t.bOu6Wl, {
							guildName: i.name
						}), tc.intl.formatToPlainString(tc.t.GV9L8v, {
							topic: t.name,
							username: tl.ZP.getName(i.id, l.id, r)
						}), {
							notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
							guild_id: i.id,
							channel_id: l.id
						}, {
							onClick() {
								t.entity_type === td.WX.STAGE_INSTANCE && (0, V.Cq)(l), t.entity_type === td.WX.VOICE && E.default.selectVoiceChannel(l.id)
							},
							isUserAvatar: !1
						})
					}(e) : e.entity_type === td.WX.EXTERNAL && function(t) {
						if (tO()) return;
						let e = tt.default.getCurrentUser(),
							n = q.Z.getGuild(t.guild_id);
						if (null != e && null != n) tu.Z.showNotification((0, x.EB)(n, 128), tc.intl.formatToPlainString(tc.t.bOu6Wl, {
							guildName: n.name
						}), tc.intl.formatToPlainString(tc.t.mYyaRE, {
							topic: t.name
						}), {
							notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
							guild_id: n.id
						}, {
							onClick() {
								f.Z.transitionToGuildSync(t.guild_id), (0, v.bO)({
									eventId: t.id
								})
							},
							isUserAvatar: !1
						})
					}(e))
				},
				THREAD_CREATE: function(t) {
					var e;
					let {
						channel: n,
						isNewlyCreated: i
					} = t;
					if (tO()) return !1;
					let l = Y.Z.getChannel(n.parent_id);
					if (null == l || !ts.TPd.GUILD_THREADS_ONLY.has(l.type) || !i || !(0, U.FI)(n, l, !tS)) return !1;
					let {
						author: a,
						user: r
					} = (0, C.MC)(n);
					if (null == r) return !1;
					let o = q.Z.getGuild(l.guild_id);
					if (null == o) return !1;
					let u = tc.intl.formatToPlainString(tc.t["2IGVl5"], {
							channelName: l.name,
							guildName: o.name
						}),
						s = tc.intl.formatToPlainString(tc.t.jPhTvb, {
							channelName: n.name,
							userUsername: null != (e = null == a ? void 0 : a.nick) ? e : null == r ? void 0 : r.username
						}),
						d = r.getAvatarURL(void 0, 128);
					tu.Z.showNotification(d, u, s, {
						notif_type: "THREAD_CREATE",
						notif_user_id: r.id
					}, {
						onClick() {
							(0, H.ok)(n)
						},
						isUserAvatar: !0
					})
				},
				GENERIC_PUSH_NOTIFICATION_SENT: function(t) {
					let e, {
						icon: n,
						title: i,
						body: l,
						route: a,
						trackingType: r,
						tag: o
					} = t;
					if (tO() || null == i || null == l || null == r) return !1;
					let u = "reactions_push_notification" === r;
					if (u) {
						var s;
						let {
							enableInAppNotifications: t
						} = M.Z.getCurrentConfig({
							location: "desktopNotification"
						}, {
							autoTrackExposure: !0
						});
						if (!t) return !1;
						let n = null != (s = (0, m.Qj)(a)) ? s : {
							channelId: null,
							guildId: null
						};
						if (null == (e = n.channelId) || null == n.guildId || Q.Z.getCurrentlySelectedChannelId() === e && tS) return !1
					}
					tu.Z.showNotification(n, i, l, {
						notif_type: r
					}, {
						onClick() {
							null != a && ((0, y.Z)(a), g.default.clickedNotification())
						},
						tag: o,
						isUserAvatar: u
					}).then(t => {
						null != t && null != e && tA.track(e, t.notification, t.trackingProps)
					})
				},
				WINDOW_HIDDEN: function() {
					let t = (0, ta.isWindows)(),
						e = (0, ta.isLinux)();
					if (!(!u.K.get(tT, !1) && ta.isPlatformEmbedded && (t || e))) return !1;
					let i = !1;
					return null != tN && (i = tZ.includes(tN)), !!i && (tu.Z.showNotification(n(95045), tc.intl.string(tc.t.VSgOVl), tc.intl.string(tc.t["+J/F6+"]), {
						notif_type: "WINDOW_HIDDEN"
					}, {
						overrideStreamerMode: !0,
						onClick: () => {
							(0, w.uL)(ts.Z5c.SETTINGS(t ? "windows" : "linux"))
						},
						onShown: () => {
							u.K.set(tT, !0)
						},
						isUserAvatar: !1
					}), !1)
				},
				LOGOUT: function() {
					return u.K.remove(tT), !1
				},
				CONNECTION_OPEN: function(t) {
					let {
						countryCode: e,
						guilds: n,
						presences: i
					} = t;
					tN = e, tI.clear(), n.forEach(t => t.stage_instances.forEach(t => tI.add(t.id))), (0, Z.uw)("NotificationStore") && (0, A.MH)() !== o.Tv.ACTIVITY_NOTIFICATIONS_DISABLED && tm(i, !1)
				},
				MESSAGE_REMINDER_DUE: function(t) {
					let {
						savedMessage: e
					} = t;
					if (tO()) return !1;
					let n = e.message;
					if (null == n || null == n.author) return !1;
					let i = Y.Z.getChannel(e.saveData.channelId);
					if (null == i) return !1;
					let {
						icon: l,
						body: a
					} = (0, U.Xi)(i, n, n.author);
					tu.Z.showNotification(l, tc.intl.string(tc.t.IjZJBw), a, {
						notif_type: "MESSAGE_REMINDER_DUE"
					}, {
						onClick() {
							(0, y.Z)(ts.Z5c.CHANNEL(null == i ? void 0 : i.getGuildId(), i.id, n.id))
						},
						isUserAvatar: !0
					})
				},
				PRESENCE_UPDATES: function(t) {
					let {
						updates: e
					} = t;
					(0, Z.uw)("handlePresenceUpdates") && (0, A.MH)() !== o.Tv.ACTIVITY_NOTIFICATIONS_DISABLED && tm(e)
				}
			})
		}
	}
]);
//# sourceMappingURL=6f08985db3605354.js.map