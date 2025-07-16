"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["64679"], {
		346486: function(t, i, n) {
			n.d(i, {
				Z: () => N
			}), n(388685);
			var E, l = n(255367),
				r = n(73800),
				e = n(392711),
				S = n.n(e),
				s = n(55935),
				o = n(388032);

			function A(t, i, n) {
				return i in t ? Object.defineProperty(t, i, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[i] = n, t
			}
			let P = () => [o.intl.string(o.t["6m/6nJ"]), o.intl.string(o.t.n7dksL), o.intl.string(o.t["1LyF1t"]), o.intl.string(o.t.QJyuxc)];
			class _ extends(E = r.PureComponent) {
				componentDidMount() {
					let {
						intervalDuration: t,
						onInterval: i
					} = this.props;
					this._interval = setInterval(() => {
						this.forceUpdate(), null == i || i()
					}, t)
				}
				componentWillUnmount() {
					null != this._interval && clearInterval(this._interval)
				}
				defaultRender(t) {
					let {
						showDays: i,
						showUnits: n,
						className: E
					} = this.props, r = [t.days, t.hours, t.minutes, t.seconds], e = P();
					if (0 === t.days) r.shift();
					else if (!i) {
						let t = r.shift();
						r[0] += 24 * t
					}
					let s = S()(r).map(t => t < 10 ? "0".concat(t) : t).map((t, i) => [i > 0 && !n ? ":" : " ", (0, l.jsxs)("span", {
						children: [t, n ? e[r.length - i - 1] : null]
					}, i)]).flatten().value();
					return (0, l.jsx)("span", {
						className: E,
						children: s
					})
				}
				render() {
					let {
						deadline: t,
						children: i,
						className: n,
						stopAtOneSec: E
					} = this.props;
					if (t === 1 / 0) return (0, l.jsx)("span", {
						className: n,
						"aria-label": o.intl.string(o.t.PqEzn5),
						children: "∞"
					});
					let r = (0, s.TD)(Date.now(), t, E);
					return null != i ? i(r, this.defaultRender.bind(this, r)) : this.defaultRender(r)
				}
				constructor(...t) {
					super(...t), A(this, "_interval", void 0)
				}
			}
			A(_, "defaultProps", {
				showDays: !0,
				showUnits: !1,
				stopAtOneSec: !1,
				intervalDuration: 1e3
			});
			let N = _
		},
		208884: function(t, i, n) {
			n.d(i, {
				FX: () => a,
				Ny: () => P,
				WV: () => N,
				WW: () => s,
				_u: () => R,
				aW: () => T,
				kv: () => M,
				s4: () => o,
				uu: () => I,
				vq: () => _,
				xU: () => g,
				zO: () => A
			}), n(539854), n(781311);
			var E = n(823379),
				l = n(231338),
				r = n(388032);

			function e(t) {
				let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				return i || (t.permissions = t.permissions.filter(t => {
					let {
						isExperimental: i
					} = t;
					return !i
				})), t
			}

			function S(t, i) {
				return t.map(t => i[t.toString()])
			}

			function s(t) {
				var i, n;
				return {
					[l.Pl.VIEW_CHANNEL.toString()]: {
						title: r.intl.string(r.t.uV83ys),
						description: r.t.ybTHLi,
						flag: l.Pl.VIEW_CHANNEL
					},
					[l.Pl.MANAGE_CHANNELS.toString()]: {
						title: r.intl.string(r.t["9qLtWl"]),
						description: r.t.qfJnur,
						flag: l.Pl.MANAGE_CHANNELS
					},
					[l.Pl.MANAGE_ROLES.toString()]: {
						title: r.intl.string(r.t["C8d+oK"]),
						description: r.t.buo9u7,
						flag: l.Pl.MANAGE_ROLES
					},
					[l.Pl.MANAGE_GUILD_EXPRESSIONS.toString()]: {
						title: r.intl.string(r.t.bbuXIi),
						description: r.t["4vb3//"],
						flag: l.Pl.MANAGE_GUILD_EXPRESSIONS
					},
					[l.Pl.CREATE_GUILD_EXPRESSIONS.toString()]: {
						title: r.intl.string(r.t.HarVuL),
						description: r.t.gkdHvL,
						flag: l.Pl.CREATE_GUILD_EXPRESSIONS
					},
					[l.Pl.VIEW_AUDIT_LOG.toString()]: {
						title: r.intl.string(r.t.fZgLpK),
						description: r.t["0hx75u"],
						flag: l.Pl.VIEW_AUDIT_LOG
					},
					[l.Pl.VIEW_GUILD_ANALYTICS.toString()]: {
						title: r.intl.string(r.t.rQJBEx),
						description: r.t.whVKhY,
						flag: l.Pl.VIEW_GUILD_ANALYTICS
					},
					[l.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: {
						title: r.intl.string(r.t["0lTLTk"]),
						description: r.t.mut6NT,
						flag: l.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS
					},
					[l.Pl.MANAGE_WEBHOOKS.toString()]: {
						title: r.intl.string(r.t["/ADKmJ"]),
						description: r.t.LczYqK,
						flag: l.Pl.MANAGE_WEBHOOKS
					},
					[l.Pl.MANAGE_GUILD.toString()]: {
						title: r.intl.string(r.t.QZRcfH),
						description: r.t["KoQe/P"],
						flag: l.Pl.MANAGE_GUILD
					},
					[l.Pl.CREATE_INSTANT_INVITE.toString()]: {
						title: r.intl.string(r.t.zJrgTE),
						description: r.t.PCFOZW,
						flag: l.Pl.CREATE_INSTANT_INVITE
					},
					[l.Pl.CHANGE_NICKNAME.toString()]: {
						title: r.intl.string(r.t.dilOFx),
						description: r.t["b8B++v"],
						flag: l.Pl.CHANGE_NICKNAME
					},
					[l.Pl.MANAGE_NICKNAMES.toString()]: {
						title: r.intl.string(r.t["t+Ct5+"]),
						description: r.t.hTnlMT,
						flag: l.Pl.MANAGE_NICKNAMES
					},
					[l.Pl.KICK_MEMBERS.toString()]: {
						title: t.showMembershipManualApprovalPermissions ? r.intl.string(r.t["9TxXwc"]) : r.intl.string(r.t.pBNv6u),
						description: t.showMembershipManualApprovalPermissions ? r.t.hGBAn5 : r.t.rwdPaG,
						flag: l.Pl.KICK_MEMBERS
					},
					[l.Pl.BAN_MEMBERS.toString()]: {
						title: r.intl.string(r.t.oTBA7O),
						description: r.t.OqNY09,
						flag: l.Pl.BAN_MEMBERS
					},
					[l.Pl.MODERATE_MEMBERS.toString()]: {
						title: r.intl.string(r.t["+RL6p6"]),
						description: r.t.T6bZsb,
						flag: l.Pl.MODERATE_MEMBERS
					},
					[l.Pl.SEND_MESSAGES.toString()]: {
						title: t.showForumPermissions ? r.intl.string(r.t.S1VOwc) : r.intl.string(r.t.T32rkJ),
						description: t.showForumPermissions ? r.t.prvWKi : r.t.qry4PT,
						flag: l.Pl.SEND_MESSAGES
					},
					[l.Pl.EMBED_LINKS.toString()]: {
						title: r.intl.string(r.t["969dEB"]),
						description: r.t.ChoIi4,
						flag: l.Pl.EMBED_LINKS
					},
					[l.Pl.ATTACH_FILES.toString()]: {
						title: r.intl.string(r.t["3AS4UF"]),
						description: r.t["/87mYG"],
						flag: l.Pl.ATTACH_FILES
					},
					[l.Pl.ADD_REACTIONS.toString()]: {
						title: r.intl.string(r.t.yEoJAg),
						description: r.t.FEYwX1,
						flag: l.Pl.ADD_REACTIONS
					},
					[l.Pl.USE_EXTERNAL_EMOJIS.toString()]: {
						title: r.intl.string(r.t["+bxf3N"]),
						description: r.t.POeVIi,
						flag: l.Pl.USE_EXTERNAL_EMOJIS
					},
					[l.Pl.USE_EXTERNAL_STICKERS.toString()]: {
						title: r.intl.string(r.t.ERNhYW),
						description: r.t.AdXVhI,
						flag: l.Pl.USE_EXTERNAL_STICKERS
					},
					[l.Pl.MENTION_EVERYONE.toString()]: {
						title: r.intl.string(r.t.Y78KGB),
						description: r.t.ryj6Nz,
						flag: l.Pl.MENTION_EVERYONE
					},
					[l.Pl.MANAGE_MESSAGES.toString()]: {
						title: r.intl.string(r.t["6lU9xM"]),
						description: r.t["RXMG//"],
						flag: l.Pl.MANAGE_MESSAGES
					},
					[l.Pl.READ_MESSAGE_HISTORY.toString()]: {
						title: r.intl.string(r.t.l9ufaW),
						description: r.t.rmHPFR,
						flag: l.Pl.READ_MESSAGE_HISTORY
					},
					[l.Pl.SEND_TTS_MESSAGES.toString()]: {
						title: r.intl.string(r.t.mMbwh4),
						description: r.t.D6x8Nj,
						flag: l.Pl.SEND_TTS_MESSAGES
					},
					[l.Pl.USE_APPLICATION_COMMANDS.toString()]: {
						title: r.intl.string(r.t.nkoPOj),
						description: r.t.pJrJ39,
						flag: l.Pl.USE_APPLICATION_COMMANDS
					},
					[l.Pl.USE_EXTERNAL_APPS.toString()]: {
						title: r.intl.string(r.t.TtA5rK),
						description: r.t.mzLoDQ,
						flag: l.Pl.USE_EXTERNAL_APPS
					},
					[l.Pl.SEND_VOICE_MESSAGES.toString()]: {
						title: r.intl.string(r.t.WlWSBQ),
						description: r.t.pDuyi4,
						flag: l.Pl.SEND_VOICE_MESSAGES
					},
					[l.Pl.SEND_POLLS.toString()]: {
						title: r.intl.string(r.t.UMQ7W1),
						description: r.t["Xl6W+P"],
						flag: l.Pl.SEND_POLLS
					},
					[l.Pl.CONNECT.toString()]: {
						title: r.intl.string(r.t.S0W8Z2),
						description: r.t["3GCm/f"],
						flag: l.Pl.CONNECT
					},
					[l.Pl.SPEAK.toString()]: {
						title: r.intl.string(r.t["8w1tIS"]),
						description: r.t.y4MncH,
						flag: l.Pl.SPEAK
					},
					[l.Pl.STREAM.toString()]: {
						title: r.intl.string(r.t.FlNoSU),
						description: r.t["6Z0j9v"],
						flag: l.Pl.STREAM
					},
					[l.Pl.USE_EMBEDDED_ACTIVITIES.toString()]: {
						title: r.intl.string(r.t.rLSGen),
						description: r.t.BEqU5O,
						flag: l.Pl.USE_EMBEDDED_ACTIVITIES
					},
					[l.Pl.USE_SOUNDBOARD.toString()]: {
						title: r.intl.string(r.t.Bco7ND),
						description: null != (i = null == t ? void 0 : t.SOUNDBOARD_DESCRIPTION) ? i : r.t["+8p+fX"],
						flag: l.Pl.USE_SOUNDBOARD
					},
					[l.Pl.USE_EXTERNAL_SOUNDS.toString()]: {
						title: r.intl.string(r.t.pwaVJy),
						description: r.t.qDpPtb,
						flag: l.Pl.USE_EXTERNAL_SOUNDS
					},
					[l.Pl.USE_VAD.toString()]: {
						title: r.intl.string(r.t["08zAV1"]),
						description: r.t["7CHjmZ"],
						flag: l.Pl.USE_VAD
					},
					[l.Pl.PRIORITY_SPEAKER.toString()]: {
						title: r.intl.string(r.t.BVK71t),
						description: null != (n = null == t ? void 0 : t.PRIORITY_SPEAKER_DESCRIPTION) ? n : r.t.OJkrrq,
						flag: l.Pl.PRIORITY_SPEAKER
					},
					[l.Pl.MUTE_MEMBERS.toString()]: {
						title: r.intl.string(r.t["8EI309"]),
						description: r.t.PIhGAw,
						flag: l.Pl.MUTE_MEMBERS
					},
					[l.Pl.DEAFEN_MEMBERS.toString()]: {
						title: r.intl.string(r.t["9L47Fh"]),
						description: r.t["FQr3+v"],
						flag: l.Pl.DEAFEN_MEMBERS
					},
					[l.Pl.MOVE_MEMBERS.toString()]: {
						title: r.intl.string(r.t.YtjJPT),
						description: r.t.SEe0Gh,
						flag: l.Pl.MOVE_MEMBERS
					},
					[l.Pl.REQUEST_TO_SPEAK.toString()]: {
						title: r.intl.string(r.t["5kicT0"]),
						description: r.t["yNE+Q0"],
						flag: l.Pl.REQUEST_TO_SPEAK,
						isExperimental: !0
					},
					[l.Pl.ADMINISTRATOR.toString()]: {
						title: r.intl.string(r.t.PGvZqa),
						description: "string" == typeof r.t.UJxMrK ? r.t.UJxMrK : r.intl.format(r.t.UJxMrK, {}),
						flag: l.Pl.ADMINISTRATOR
					},
					[l.Pl.MANAGE_EVENTS.toString()]: {
						title: r.intl.string(r.t.HIgA5e),
						description: r.t["SL+qgI"],
						flag: l.Pl.MANAGE_EVENTS
					},
					[l.Pl.CREATE_EVENTS.toString()]: {
						title: r.intl.string(r.t.qyjZub),
						description: r.t.bQEFJS,
						flag: l.Pl.CREATE_EVENTS
					},
					[l.Pl.MANAGE_THREADS.toString()]: {
						title: t.showForumPermissions ? r.intl.string(r.t.QKe7Q0) : r.intl.string(r.t.kEqgr6),
						description: t.showForumPermissions ? r.t.QAxIIi : r.t.AKdc4O,
						flag: l.Pl.MANAGE_THREADS
					},
					[l.Pl.CREATE_PUBLIC_THREADS.toString()]: {
						title: r.intl.string(r.t["25rKnZ"]),
						description: r.t.ODCYj4,
						flag: l.Pl.CREATE_PUBLIC_THREADS
					},
					[l.Pl.CREATE_PRIVATE_THREADS.toString()]: {
						title: r.intl.string(r.t.QwbTSU),
						description: r.t["G/cc3t"],
						flag: l.Pl.CREATE_PRIVATE_THREADS
					},
					[l.Pl.SEND_MESSAGES_IN_THREADS.toString()]: {
						title: t.showForumPermissions ? r.intl.string(r.t["5QlVGx"]) : r.intl.string(r.t.fTE74u),
						description: t.showForumPermissions ? r.t.C2ZPEx : r.t["6pyXvr"],
						flag: l.Pl.SEND_MESSAGES_IN_THREADS
					},
					[l.Pl.SET_VOICE_CHANNEL_STATUS.toString()]: {
						title: r.intl.string(r.t.VBwkUV),
						description: r.t.C6BzX1,
						flag: l.Pl.SET_VOICE_CHANNEL_STATUS
					}
				}
			}

			function o(t) {
				let i, n = s(t),
					E = [function(t, i) {
						let n = [l.Pl.VIEW_CHANNEL, l.Pl.MANAGE_CHANNELS, l.Pl.MANAGE_ROLES, l.Pl.CREATE_GUILD_EXPRESSIONS, l.Pl.MANAGE_GUILD_EXPRESSIONS, l.Pl.VIEW_AUDIT_LOG, l.Pl.VIEW_GUILD_ANALYTICS];
						return i.showCreatorMonetizationAnalyticsPermission && n.push(l.Pl.VIEW_CREATOR_MONETIZATION_ANALYTICS), n.push(l.Pl.MANAGE_WEBHOOKS), n.push(l.Pl.MANAGE_GUILD), e({
							title: r.intl.string(r.t["mYck+P"]),
							permissions: S(n, t)
						})
					}(n, t), function(t) {
						let i = [l.Pl.CREATE_INSTANT_INVITE, l.Pl.CHANGE_NICKNAME, l.Pl.MANAGE_NICKNAMES, l.Pl.KICK_MEMBERS, l.Pl.BAN_MEMBERS, l.Pl.MODERATE_MEMBERS];
						return e({
							title: r.intl.string(r.t.Ny49TE),
							permissions: S(i, t)
						})
					}(n), (i = [l.Pl.SEND_MESSAGES, l.Pl.SEND_MESSAGES_IN_THREADS, l.Pl.CREATE_PUBLIC_THREADS, l.Pl.CREATE_PRIVATE_THREADS, l.Pl.EMBED_LINKS, l.Pl.ATTACH_FILES, l.Pl.ADD_REACTIONS, l.Pl.USE_EXTERNAL_EMOJIS, l.Pl.USE_EXTERNAL_STICKERS, l.Pl.USE_EXTERNAL_SOUNDS, l.Pl.MENTION_EVERYONE, l.Pl.MANAGE_MESSAGES, l.Pl.MANAGE_THREADS, l.Pl.READ_MESSAGE_HISTORY, l.Pl.SEND_TTS_MESSAGES, l.Pl.SEND_VOICE_MESSAGES, l.Pl.SEND_POLLS], t.inSoundmojiExperiment || (i = i.filter(t => t !== l.Pl.USE_EXTERNAL_SOUNDS)), e({
						title: r.intl.string(r.t.cKobOz),
						permissions: S(i, n)
					})), function(t, i) {
						let n = [l.Pl.CONNECT, l.Pl.SPEAK, l.Pl.STREAM, l.Pl.USE_SOUNDBOARD, l.Pl.USE_EXTERNAL_SOUNDS, l.Pl.USE_VAD, l.Pl.PRIORITY_SPEAKER, l.Pl.MUTE_MEMBERS, l.Pl.DEAFEN_MEMBERS, l.Pl.MOVE_MEMBERS, l.Pl.SET_VOICE_CHANNEL_STATUS];
						return e({
							title: r.intl.string(r.t["46Ra1d"]),
							permissions: S(n, t)
						})
					}(n, 0), function(t) {
						let i = [l.Pl.USE_APPLICATION_COMMANDS, l.Pl.USE_EMBEDDED_ACTIVITIES, l.Pl.USE_EXTERNAL_APPS];
						return e({
							title: r.intl.string(r.t["rrh/W1"]),
							permissions: S(i, t)
						})
					}(n)];
				return t.showStageChannelPermissions && E.push(e({
					title: r.intl.string(r.t.yniaur),
					permissions: S([l.Pl.REQUEST_TO_SPEAK], n)
				}, t.showExperimental)), E.push(e({
					title: r.intl.string(r.t.b8lplZ),
					permissions: S([l.Pl.CREATE_EVENTS, l.Pl.MANAGE_EVENTS], n)
				}, t.showExperimental)), E.push(e({
					title: r.intl.string(r.t["3uI5CQ"]),
					permissions: S([l.Pl.ADMINISTRATOR], n)
				})), E
			}

			function A(t, i) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
					showManageWebhooks: !0
				};
				return {
					title: i,
					permissions: S((null == n ? void 0 : n.showManageWebhooks) ? [l.Pl.VIEW_CHANNEL, l.Pl.MANAGE_CHANNELS, l.Pl.MANAGE_ROLES, l.Pl.MANAGE_WEBHOOKS] : [l.Pl.VIEW_CHANNEL, l.Pl.MANAGE_CHANNELS, l.Pl.MANAGE_ROLES], t)
				}
			}

			function P(t, i) {
				return {
					title: i,
					permissions: S([l.Pl.CREATE_INSTANT_INVITE], t)
				}
			}

			function _(t, i, n) {
				let E = [l.Pl.SEND_MESSAGES, l.Pl.SEND_MESSAGES_IN_THREADS, l.Pl.CREATE_PUBLIC_THREADS, l.Pl.CREATE_PRIVATE_THREADS, l.Pl.EMBED_LINKS, l.Pl.ATTACH_FILES, l.Pl.ADD_REACTIONS, l.Pl.USE_EXTERNAL_EMOJIS, l.Pl.USE_EXTERNAL_STICKERS, l.Pl.USE_EXTERNAL_SOUNDS, l.Pl.MENTION_EVERYONE, l.Pl.MANAGE_MESSAGES, l.Pl.MANAGE_THREADS, l.Pl.READ_MESSAGE_HISTORY, l.Pl.SEND_TTS_MESSAGES, l.Pl.SEND_VOICE_MESSAGES, l.Pl.SEND_POLLS];
				return n.inSoundmojiExperiment || (E = E.filter(t => t !== l.Pl.USE_EXTERNAL_SOUNDS)), n.showPrivateThreads && n.showCreateThreads || (E = E.filter(t => t !== l.Pl.CREATE_PRIVATE_THREADS)), n.showCreateThreads || (E = E.filter(t => t !== l.Pl.CREATE_PUBLIC_THREADS)), {
					title: i,
					description: n.sectionDescription,
					permissions: S(E, t)
				}
			}

			function N(t, i) {
				return {
					title: i,
					permissions: S([l.Pl.CONNECT, l.Pl.SPEAK, l.Pl.STREAM, l.Pl.USE_SOUNDBOARD, l.Pl.USE_EXTERNAL_SOUNDS, l.Pl.USE_VAD, l.Pl.PRIORITY_SPEAKER, l.Pl.MUTE_MEMBERS, l.Pl.DEAFEN_MEMBERS, l.Pl.MOVE_MEMBERS, l.Pl.SET_VOICE_CHANNEL_STATUS], t)
				}
			}

			function T(t, i, n) {
				let E = [l.Pl.SEND_MESSAGES, l.Pl.EMBED_LINKS, l.Pl.ATTACH_FILES, l.Pl.ADD_REACTIONS, l.Pl.USE_EXTERNAL_EMOJIS, l.Pl.USE_EXTERNAL_STICKERS, l.Pl.USE_EXTERNAL_SOUNDS, l.Pl.MENTION_EVERYONE, l.Pl.MANAGE_MESSAGES, l.Pl.READ_MESSAGE_HISTORY, l.Pl.SEND_TTS_MESSAGES, l.Pl.SEND_VOICE_MESSAGES, l.Pl.SEND_POLLS];
				return n.inSoundmojiExperiment || (E = E.filter(t => t !== l.Pl.USE_EXTERNAL_SOUNDS)), {
					title: i,
					description: n.sectionDescription,
					permissions: S(E, t)
				}
			}

			function g(t, i) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
					showActivities: !0
				};
				return {
					title: i,
					permissions: S([l.Pl.USE_APPLICATION_COMMANDS, n.showActivities ? l.Pl.USE_EMBEDDED_ACTIVITIES : null, l.Pl.USE_EXTERNAL_APPS].filter(E.lm), t)
				}
			}

			function a(t, i, n) {
				return {
					title: i,
					permissions: S(n ? [l.Pl.CONNECT, l.Pl.STREAM, l.Pl.MUTE_MEMBERS, l.Pl.MOVE_MEMBERS] : [l.Pl.CONNECT, l.Pl.MUTE_MEMBERS, l.Pl.MOVE_MEMBERS], t)
				}
			}

			function M(t, i) {
				return {
					title: i,
					permissions: S([l.Pl.REQUEST_TO_SPEAK, l.Pl.MENTION_EVERYONE], t)
				}
			}

			function I(t, i) {
				return {
					title: i,
					permissions: S([l.Pl.CREATE_EVENTS, l.Pl.MANAGE_EVENTS], t)
				}
			}

			function R(t) {
				return null == t ? t : "string" == typeof t ? t.trim() : "function" == typeof t ? r.intl.format(t, {}) : t
			}
		},
		60222: function(t, i, n) {
			n.d(i, {
				A: () => e,
				m: () => S
			}), n(388685);
			var E = n(442837),
				l = n(430824),
				r = n(981631);

			function e(t) {
				var i;
				let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.Z];
				return !!(null == (i = n.getGuild(t)) ? void 0 : i.features.has(r.oNc.COMMUNITY))
			}

			function S(t) {
				return (0, E.e7)([l.Z], () => e(t, [l.Z]), [t])
			}
		},
		233608: function(t, i, n) {
			n.d(i, {
				Z: () => p
			}), n(388685);
			var E = n(230711),
				l = n(200876),
				r = n(456269),
				e = n(228392),
				S = n(676317),
				s = n(434404),
				o = n(208884),
				A = n(722932),
				P = n(368442),
				_ = n(60222),
				N = n(665906),
				T = n(131704),
				g = n(430824),
				a = n(63063),
				M = n(981631),
				I = n(71080),
				R = n(388032);

			function O(t) {
				let i = (0, _.A)(t),
					n = (0, r.Eg)(t),
					e = g.Z.getGuild(t),
					S = null != e && (0, l.l)(e),
					s = (0, A.uH)({
						location: "getPermissionOptions"
					});
				return {
					PRIORITY_SPEAKER_DESCRIPTION: R.intl.format(R.t.j66HgY, {
						keybind: R.intl.string(R.t.DkSwJy),
						onClick: () => {
							E.Z.open(M.oAB.KEYBINDS)
						}
					}),
					SOUNDBOARD_DESCRIPTION: R.intl.format(R.t.fVE8y8, {
						helpCenterArticle: a.Z.getArticleURL(M.BhN.SOUNDBOARD)
					}),
					showStageChannelPermissions: i,
					showExperimental: !0,
					showForumPermissions: n,
					showMembershipManualApprovalPermissions: !0,
					showCreatorMonetizationAnalyticsPermission: S,
					inSoundmojiExperiment: s
				}
			}
			let p = {
				generateChannelPermissionSpec: function(t, i, n, E) {
					var l, _, g, a;
					let p = (0, r.Eg)(t),
						c = (0, I.IG)(i, n, p, E),
						u = O(t),
						D = N.tM.getCurrentConfig({
							guildId: t,
							location: "3ad37d_1"
						}).enabled && T.Um.has(i.type),
						C = (0, P.tu)(t),
						d = (0, S.ze)(t),
						f = i.isMediaChannel(),
						U = (0, A.uH)({
							location: "generateChannelPermissionSpec"
						});
					switch (i.type) {
						case M.d4z.GUILD_CATEGORY:
							return [o.zO(c, R.intl.string(R.t.AkPxc3)), o.Ny(c, R.intl.string(R.t.Ny49TE)), o.vq(c, R.intl.string(R.t.cKobOz), {
								showPrivateThreads: !0,
								showCreateThreads: !0,
								inSoundmojiExperiment: U
							}), o.WV(c, R.intl.string(R.t["46Ra1d"])), o.xU(c, R.intl.string(R.t["rrh/W1"])), ...(l = u.showStageChannelPermissions, _ = () => o.kv(c, R.intl.string(R.t.yniaur)), l ? [_()] : []), o.uu(c, R.intl.string(R.t.b8lplZ))];
						case M.d4z.GUILD_VOICE:
							return [o.zO(c, R.intl.string(R.t.ouHggI), {
								showManageWebhooks: !0
							}), o.Ny(c, R.intl.string(R.t.Ny49TE)), o.WV(c, R.intl.string(R.t["46Ra1d"])), o.aW(c, R.intl.string(R.t.iqlsnJ), {
								sectionDescription: d ? R.intl.format(R.t["4Z9FbW"], {
									setUpAutomod: () => {
										s.Z.open(t, M.pNK.GUILD_AUTOMOD)
									}
								}) : void 0,
								inSoundmojiExperiment: U
							}), o.uu(c, R.intl.string(R.t.b8lplZ)), o.xU(c, R.intl.string(R.t["rrh/W1"]))];
						case M.d4z.GUILD_STAGE_VOICE:
							return [o.zO(c, R.intl.string(R.t.ouHggI), {
								showManageWebhooks: !1
							}), o.Ny(c, R.intl.string(R.t.Ny49TE)), o.FX(c, R.intl.string(R.t["46Ra1d"]), C), o.kv(c, R.intl.string(R.t.yniaur)), o.uu(c, R.intl.string(R.t.b8lplZ)), o.aW(c, R.intl.string(R.t.iqlsnJ), {
								sectionDescription: d ? R.intl.format(R.t["4Z9FbW"], {
									setUpAutomod: () => {
										s.Z.open(t, M.pNK.GUILD_AUTOMOD)
									}
								}) : void 0,
								inSoundmojiExperiment: U
							}), o.xU(c, R.intl.string(R.t["rrh/W1"]), {
								showActivities: !1
							})];
						case M.d4z.GUILD_FORUM:
						case M.d4z.GUILD_MEDIA:
							let L = f ? R.intl.string(R.t.aSjPg4) : R.intl.string(R.t.TS7CnZ),
								h = f ? R.t.YjJTtL : R.t["1MTnqa"];
							return [o.zO(c, R.intl.string(R.t.ouHggI)), o.Ny(c, R.intl.string(R.t.Ny49TE)), o.vq(c, L, {
								showPrivateThreads: !1,
								showCreateThreads: !1,
								sectionDescription: d ? R.intl.format(h, {
									setUpAutomod: () => {
										f || (0, e.MO)(), s.Z.open(t, M.pNK.GUILD_AUTOMOD)
									}
								}) : void 0,
								inSoundmojiExperiment: U
							}), o.xU(c, R.intl.string(R.t["rrh/W1"])), ...(g = () => o.WV(c, R.intl.string(R.t["46Ra1d"])), D ? [g()] : [])];
						default:
							return [o.zO(c, R.intl.string(R.t.ouHggI)), o.Ny(c, R.intl.string(R.t.Ny49TE)), o.vq(c, R.intl.string(R.t.cKobOz), {
								showPrivateThreads: i.type !== M.d4z.GUILD_ANNOUNCEMENT,
								showCreateThreads: !0,
								inSoundmojiExperiment: U
							}), o.xU(c, R.intl.string(R.t["rrh/W1"])), ...(a = () => o.WV(c, R.intl.string(R.t["46Ra1d"])), D ? [a()] : [])]
					}
				},
				generateGuildPermissionSpec: function(t) {
					var i;
					let n = new Set;
					return t.features.has(M.oNc.COMMUNITY) || n.add(M.Plq.VIEW_GUILD_ANALYTICS.toString()), i = o.s4(O(t.id)), 0 === n.size ? i : i.map(t => {
						var i, E;
						return i = function(t) {
							for (var i = 1; i < arguments.length; i++) {
								var n = null != arguments[i] ? arguments[i] : {},
									E = Object.keys(n);
								"function" == typeof Object.getOwnPropertySymbols && (E = E.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
									return Object.getOwnPropertyDescriptor(n, t).enumerable
								}))), E.forEach(function(i) {
									var E;
									E = n[i], i in t ? Object.defineProperty(t, i, {
										value: E,
										enumerable: !0,
										configurable: !0,
										writable: !0
									}) : t[i] = E
								})
							}
							return t
						}({}, t), E = E = {
							permissions: t.permissions.filter(t => !n.has(t.flag.toString()))
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(E)) : (function(t, i) {
							var n = Object.keys(t);
							if (Object.getOwnPropertySymbols) {
								var E = Object.getOwnPropertySymbols(t);
								n.push.apply(n, E)
							}
							return n
						})(Object(E)).forEach(function(t) {
							Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(E, t))
						}), i
					})
				},
				getGuildPermissionSpecMap: function(t) {
					return o.WW(O(t.id))
				}
			}
		}
	}
]);
//# sourceMappingURL=4b69872c8a280044.js.map