"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["49049"], {
		971130: function(t, e, n) {
			let I;
			n.d(e, {
				Sz: () => R,
				Vg: () => v,
				ZP: () => C,
				an: () => U,
				bm: () => f,
				rh: () => y
			}), n(539854), n(388685);
			var i, r = n(317381),
				l = n(592125),
				O = n(271383),
				u = n(306680),
				_ = n(699516),
				T = n(594174),
				a = n(55589),
				s = n(483360),
				N = n(981631),
				S = n(245335),
				E = n(388032);

			function o(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {},
						I = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (I = I.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
						return Object.getOwnPropertyDescriptor(n, t).enumerable
					}))), I.forEach(function(e) {
						var I;
						I = n[e], e in t ? Object.defineProperty(t, e, {
							value: I,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = I
					})
				}
				return t
			}

			function P(t, e) {
				return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
					var n = Object.keys(t);
					if (Object.getOwnPropertySymbols) {
						var I = Object.getOwnPropertySymbols(t);
						n.push.apply(n, I)
					}
					return n
				})(Object(e)).forEach(function(n) {
					Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
				}), t
			}
			I = n(603617);
			var f = ((i = {}).GROUP_DM = "GROUP_DM", i.DM = "DM", i.FRIEND = "FRIEND", i.CHANNEL = "CHANNEL", i);
			let g = (t, e) => null != t && O.ZP.isMember(t, e),
				m = t => {
					let {
						omitUserIds: e,
						suggestedUserIds: n,
						maxRowsWithoutQuery: I,
						omitGuildId: i,
						shownUserIds: r,
						rows: l,
						counts: O
					} = t;
					if (null != n)
						for (let t of n) {
							if (null != I && I > 0 && l.length >= I) break;
							if (e.has(t) || r.has(t)) continue;
							let n = T.default.getUser(t);
							!(null == n || g(i, n.id)) && (r.add(n.id), l.push({
								type: "FRIEND",
								item: n,
								isSuggested: !0
							}), O.numFriends++)
						}
				},
				d = t => {
					let {
						suggestedChannelIds: e,
						maxRowsWithoutQuery: n,
						rows: I,
						counts: i
					} = t;
					if (null != e)
						for (let t of e) {
							if (null != n && n > 0 && I.length >= n) break;
							let e = l.Z.getChannel(t);
							null != e && (I.push({
								type: "CHANNEL",
								item: e,
								isSuggested: !0
							}), i.numChannels++)
						}
				},
				c = t => {
					let {
						omitUserIds: e,
						maxRowsWithoutQuery: n,
						omitGuildId: I,
						shownUserIds: i,
						rows: r,
						counts: O,
						includeGroupDms: _,
						limit: s
					} = t, S = 0;
					for (let t of a.Z.getPrivateChannelIds()) {
						if (null != n && n > 0 && r.length >= n || null != s && S >= s) break;
						let a = l.Z.getChannel(t);
						if (null == a || !a.isPrivate()) continue;
						if (_ && a.type === N.d4z.GROUP_DM) {
							r.push({
								type: "GROUP_DM",
								item: a,
								isSuggested: !1
							}), O.numGroupDms++, S++;
							continue
						}
						if (null == u.ZP.lastMessageId(a.id)) continue;
						let E = a.getRecipientId();
						if (null != E && !e.has(E) && !i.has(E)) {
							let t = T.default.getUser(E);
							if (null == t || t.bot || g(I, t.id)) continue;
							i.add(t.id), r.push({
								type: "DM",
								item: t,
								isSuggested: !1
							}), O.numDms++, S++
						}
					}
				},
				p = t => {
					let {
						omitUserIds: e,
						maxRowsWithoutQuery: n,
						omitGuildId: I,
						shownUserIds: i,
						rows: r,
						counts: l
					} = t;
					for (let t of _.Z.getFriendIDs()) {
						if (null != n && n > 0 && r.length >= n) break;
						if (e.has(t) || i.has(t)) continue;
						let O = T.default.getUser(t);
						!(null == O || g(I, O.id)) && (r.push({
							type: "FRIEND",
							item: O,
							isSuggested: !1
						}), l.numFriends++)
					}
				},
				D = t => {
					let {
						query: e,
						rows: n,
						counts: I,
						inviteTargetType: i
					} = t;
					i === S.Iq.EMBEDDED_APPLICATION && s.ZP.queryChannels({
						query: e,
						limit: 3,
						guildId: void 0
					}).forEach(t => {
						let {
							record: e,
							score: i
						} = t;
						n.push({
							type: "CHANNEL",
							item: e,
							isSuggested: !1,
							score: i
						}), I.numChannels++
					})
				},
				V = t => {
					let {
						query: e,
						omitUserIds: n,
						shownUserIds: I,
						rows: i,
						counts: r
					} = t;
					s.ZP.queryDMUsers({
						query: e,
						limit: 50
					}).forEach(t => {
						let {
							record: e,
							score: O
						} = t;
						if (n.has(e.id)) return;
						let _ = l.Z.getDMFromUserId(e.id);
						null != _ && null != u.ZP.lastMessageId(_) && (I.add(e.id), i.push({
							type: "DM",
							item: e,
							isSuggested: !1,
							score: O
						}), r.numDms++)
					})
				},
				M = t => {
					let {
						query: e,
						rows: n,
						counts: I
					} = t;
					s.ZP.queryGroupDMs({
						query: e,
						limit: 50,
						fuzzy: !1
					}).forEach(t => {
						let {
							record: e,
							score: i
						} = t;
						n.push({
							type: "GROUP_DM",
							item: e,
							isSuggested: !1,
							score: i
						}), I.numGroupDms++
					})
				},
				h = t => {
					let {
						query: e,
						rows: n,
						counts: I,
						omitUserIds: i,
						shownUserIds: r
					} = t;
					s.ZP.queryFriends({
						query: e,
						limit: 500,
						_fuzzy: !1
					}).forEach(t => {
						let {
							record: e,
							score: l
						} = t;
						!(i.has(e.id) || r.has(e.id)) && (r.add(e.id), n.push({
							type: "FRIEND",
							item: e,
							isSuggested: !1,
							score: l
						}), I.numFriends++)
					})
				};

			function U(t) {
				let {
					query: e,
					inviteTargetType: n,
					omitUserIds: I,
					suggestedUserIds: i,
					suggestedChannelIds: r,
					maxRowsWithoutQuery: l,
					omitGuildId: O
				} = t, u = new Set, _ = [], T = {
					numFriends: 0,
					numDms: 0,
					numGroupDms: 0,
					numGuildMembers: 0,
					numChannels: 0
				};
				if ("" === e) {
					let t = {
						omitUserIds: I,
						maxRowsWithoutQuery: l,
						omitGuildId: O,
						shownUserIds: u,
						rows: _,
						counts: T
					};
					n === S.Iq.EMBEDDED_APPLICATION && (c(P(o({}, t), {
						includeGroupDms: !1,
						limit: 1
					})), d(P(o({}, t), {
						suggestedChannelIds: r
					}))), m(P(o({}, t), {
						suggestedUserIds: i
					})), c(P(o({}, t), {
						includeGroupDms: !0
					})), p(t)
				} else {
					let t = {
						query: e,
						rows: _,
						counts: T
					};
					n === S.Iq.EMBEDDED_APPLICATION && D(P(o({}, t), {
						inviteTargetType: n
					})), V(P(o({}, t), {
						omitUserIds: I,
						shownUserIds: u
					})), M(t), h(P(o({}, t), {
						omitUserIds: I,
						shownUserIds: u
					}))
				}
				return {
					rows: _,
					counts: T
				}
			}

			function y(t, e) {
				for (let n of a.Z.getPrivateChannelIds()) {
					let I = l.Z.getChannel(n);
					if (null == I || !I.isDM() || null == u.ZP.lastMessageId(I.id)) continue;
					let i = I.getRecipientId();
					if (null != i && !t.has(i)) {
						let t = T.default.getUser(i);
						if (null == t || t.bot || g(e, t.id)) continue;
						return t
					}
				}
				return null
			}

			function R(t) {
				let {
					channel: e,
					inviteTargetType: n,
					applicationId: I
				} = t;
				if (n === S.Iq.EMBEDDED_APPLICATION && null != e) {
					for (let t of r.ZP.getEmbeddedActivitiesForChannel(e.id))
						if (t.applicationId === I) return new Set(t.userIds)
				}
				return new Set
			}
			let b = {
					MINUTES: "minutes",
					HOURS: "hours",
					DAYS: "days",
					NEVER: "never"
				},
				A = {
					[I.INVITE_OPTIONS_30_MINUTES.value]: {
						value: 30,
						type: b.MINUTES
					},
					[I.INVITE_OPTIONS_1_HOUR.value]: {
						value: 1,
						type: b.HOURS
					},
					[I.INVITE_OPTIONS_6_HOURS.value]: {
						value: 6,
						type: b.HOURS
					},
					[I.INVITE_OPTIONS_12_HOURS.value]: {
						value: 12,
						type: b.HOURS
					},
					[I.INVITE_OPTIONS_1_DAY.value]: {
						value: 1,
						type: b.DAYS
					},
					[I.INVITE_OPTIONS_7_DAYS.value]: {
						value: 7,
						type: b.DAYS
					},
					[I.INVITE_OPTIONS_FOREVER.value]: {
						value: 0,
						type: b.NEVER
					}
				};

			function v(t, e) {
				let n = parseInt(e, 10),
					I = 0 === n,
					i = A[t].value;
				switch (A[t].type) {
					case b.MINUTES:
						if (I) return E.intl.string(E.t["/WbTXF"]);
						return E.intl.formatToPlainString(E.t.eDRWJC, {
							numUses: n
						});
					case b.HOURS:
						if (I) return E.intl.formatToPlainString(E.t.ZVdJMz, {
							numHours: i
						});
						return E.intl.formatToPlainString(E.t.NgZgAA, {
							numHours: i,
							numUses: n
						});
					case b.DAYS:
						if (I) return E.intl.formatToPlainString(E.t.T96qsr, {
							numDays: i
						});
						return E.intl.formatToPlainString(E.t.TfuB9P, {
							numDays: i,
							numUses: n
						});
					case b.NEVER:
						if (I) return E.intl.string(E.t.QrHBnJ);
						return E.intl.formatToPlainString(E.t.yJnTxM, {
							numUses: n
						});
					default:
						return ""
				}
			}
			let C = {
				getMaxAgeOptions: I.MAX_AGE_OPTIONS,
				getMaxUsesOptions: I.MAX_USES_OPTIONS,
				INVITE_OPTIONS_FOREVER: I.INVITE_OPTIONS_FOREVER,
				INVITE_OPTIONS_1_DAY: I.INVITE_OPTIONS_1_DAY,
				INVITE_OPTIONS_7_DAYS: I.INVITE_OPTIONS_7_DAYS,
				INVITE_OPTIONS_12_HOURS: I.INVITE_OPTIONS_12_HOURS,
				INVITE_OPTIONS_6_HOURS: I.INVITE_OPTIONS_6_HOURS,
				INVITE_OPTIONS_8_HOURS: I.INVITE_OPTIONS_8_HOURS,
				INVITE_OPTIONS_1_HOUR: I.INVITE_OPTIONS_1_HOUR,
				INVITE_OPTIONS_30_MINUTES: I.INVITE_OPTIONS_30_MINUTES,
				INVITE_OPTIONS_UNLIMITED: I.INVITE_OPTIONS_UNLIMITED,
				INVITE_OPTIONS_ONCE: I.INVITE_OPTIONS_ONCE,
				INVITE_OPTIONS_5_TIMES: I.INVITE_OPTIONS_5_TIMES,
				INVITE_OPTIONS_10_TIMES: I.INVITE_OPTIONS_10_TIMES,
				INVITE_OPTIONS_25_TIMES: I.INVITE_OPTIONS_25_TIMES,
				INVITE_OPTIONS_50_TIMES: I.INVITE_OPTIONS_50_TIMES,
				INVITE_OPTIONS_100_TIMES: I.INVITE_OPTIONS_100_TIMES
			}
		},
		603617: function(t, e, n) {
			n.r(e), n.d(e, {
				INVITE_OPTIONS_100_TIMES: () => a,
				INVITE_OPTIONS_10_TIMES: () => u,
				INVITE_OPTIONS_12_HOURS: () => P,
				INVITE_OPTIONS_1_DAY: () => f,
				INVITE_OPTIONS_1_HOUR: () => S,
				INVITE_OPTIONS_25_TIMES: () => _,
				INVITE_OPTIONS_30_MINUTES: () => N,
				INVITE_OPTIONS_50_TIMES: () => T,
				INVITE_OPTIONS_5_TIMES: () => O,
				INVITE_OPTIONS_6_HOURS: () => E,
				INVITE_OPTIONS_7_DAYS: () => g,
				INVITE_OPTIONS_8_HOURS: () => o,
				INVITE_OPTIONS_FOREVER: () => m,
				INVITE_OPTIONS_ONCE: () => l,
				INVITE_OPTIONS_UNLIMITED: () => r,
				MAX_AGE_OPTIONS: () => d,
				MAX_USES_OPTIONS: () => s
			});
			var I = n(388032);

			function i(t, e) {
				return {
					value: t,
					get label() {
						return e()
					}
				}
			}
			let r = i(0, () => I.intl.formatToPlainString(I.t["r/IcuL"], {
					maxUses: 0
				})),
				l = i(1, () => I.intl.formatToPlainString(I.t["r/IcuL"], {
					maxUses: 1
				})),
				O = i(5, () => I.intl.formatToPlainString(I.t["r/IcuL"], {
					maxUses: 5
				})),
				u = i(10, () => I.intl.formatToPlainString(I.t["r/IcuL"], {
					maxUses: 10
				})),
				_ = i(25, () => I.intl.formatToPlainString(I.t["r/IcuL"], {
					maxUses: 25
				})),
				T = i(50, () => I.intl.formatToPlainString(I.t["r/IcuL"], {
					maxUses: 50
				})),
				a = i(100, () => I.intl.formatToPlainString(I.t["r/IcuL"], {
					maxUses: 100
				})),
				s = [r, l, O, u, _, T, a],
				N = i(1800, () => I.intl.formatToPlainString(I.t.iXLF9f, {
					minutes: 30
				})),
				S = i(3600, () => I.intl.formatToPlainString(I.t.xCjYxM, {
					hours: 1
				})),
				E = i(21600, () => I.intl.formatToPlainString(I.t.xCjYxM, {
					hours: 6
				})),
				o = i(28800, () => I.intl.formatToPlainString(I.t.xCjYxM, {
					hours: 8
				})),
				P = i(43200, () => I.intl.formatToPlainString(I.t.xCjYxM, {
					hours: 12
				})),
				f = i(86400, () => I.intl.formatToPlainString(I.t.k2UNz8, {
					days: 1
				})),
				g = i(604800, () => I.intl.formatToPlainString(I.t.k2UNz8, {
					days: 7
				})),
				m = i(0, () => I.intl.string(I.t.PqEzn5)),
				d = [N, S, E, P, f, g, m]
		}
	}
]);
//# sourceMappingURL=defa3847ece5b043.js.map