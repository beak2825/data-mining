"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["42743"], {
		658041: function(e, t, n) {
			n.d(t, {
				M: () => c
			});
			var l = n(913527),
				r = n.n(l),
				u = n(709054),
				i = n(765305);

			function c(e, t, n, l) {
				let c = r()(),
					E = new Date(e.scheduled_start_time).getTime(),
					d = {
						start: E - i.VF,
						end: E
					};
				if (c.isBetween(d.start, d.end)) {
					if (null != t) {
						let e = r()(t),
							n = e.isBetween(d.start, d.end),
							u = e.isBetween(r()(E).subtract(i.zV, "days"), E);
						return n || u && !l ? void 0 : i.X_.EVENT_STARTING_SOON
					}
					return i.X_.EVENT_STARTING_SOON
				}
				let o = u.default.extractTimestamp(e.id),
					s = Math.min((null != n ? n : o) + i.Fc, E);
				if (c.isBetween(o, s) && null == t && !l) return i.X_.NEW_EVENT
			}
		},
		835184: function(e, t, n) {
			n.d(t, {
				Z: () => g
			});
			var l, r = n(442837),
				u = n(570140),
				i = n(314897),
				c = n(924301),
				E = n(658041),
				d = n(765305);

			function o(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function s(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						l = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), l.forEach(function(t) {
						o(e, t, n[t])
					})
				}
				return e
			}
			let a = {},
				f = {};

			function N(e) {
				let t = s({}, a);
				delete t[e], a = t;
				let n = s({}, f);
				delete n[e], f = n
			}
			class _ extends(l = r.ZP.PersistedStore) {
				initialize(e) {
					if (null != e) {
						var t, n;
						a = null != (t = e.upcomingEventDismissals) ? t : {}, f = null != (n = e.upcomingEventSeenTimestamps) ? n : {}
					}
				}
				getGuildEventNoticeDismissalTime(e) {
					return a[e]
				}
				getAllEventDismissals() {
					return a
				}
				getUpcomingNoticeSeenTime(e) {
					return f[e]
				}
				getAllUpcomingNoticeSeenTimes() {
					return f
				}
				getState() {
					return {
						upcomingEventDismissals: a,
						upcomingEventSeenTimestamps: f
					}
				}
			}
			o(_, "displayName", "UpcomingEventNoticesStore"), o(_, "persistKey", "UpcomingEventNotices");
			let g = new _(u.Z, {
				UPCOMING_GUILD_EVENT_NOTICE_HIDE: function(e) {
					let {
						eventId: t
					} = e, n = s({}, a);
					n[t] = Date.now(), a = n
				},
				GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
					let {
						guildScheduledEvent: t
					} = e;
					(t.status === d.p1.CANCELED || t.status === d.p1.COMPLETED) && N(t.id)
				},
				GUILD_SCHEDULED_EVENT_DELETE: function(e) {
					let {
						guildScheduledEvent: t
					} = e;
					N(t.id)
				},
				GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
					let {
						userId: t,
						guildEventId: n
					} = e;
					if (t !== i.default.getId()) return;
					let l = c.ZP.getGuildScheduledEvent(n);
					if (null == l || l.status !== d.p1.SCHEDULED || null != a[n]) return;
					let r = f[n];
					if ((0, E.M)(l, void 0, r, !1) === d.X_.NEW_EVENT) {
						let e = s({}, a);
						e[n] = Date.now(), a = e
					}
				},
				UPCOMING_GUILD_EVENT_NOTICE_SEEN: function(e) {
					let {
						guildEventId: t
					} = e, n = s({}, f);
					n[t] = Date.now(), f = n
				}
			})
		},
		554747: function(e, t, n) {
			n.d(t, {
				Vm: () => b,
				ZP: () => h,
				eF: () => S,
				gM: () => v,
				k5: () => D,
				qY: () => I,
				sz: () => T,
				u1: () => y
			}), n(388685);
			var l = n(73800),
				r = n(442837),
				u = n(241155),
				i = n(592125),
				c = n(984933),
				E = n(430824),
				d = n(496675),
				o = n(70956),
				s = n(823379),
				a = n(924301),
				f = n(658041),
				N = n(835184),
				_ = n(79874),
				g = n(854698),
				Z = n(765305),
				P = n(981631);
			let p = [],
				O = 15 * o.Z.Millis.MINUTE;

			function h(e, t) {
				return (0, r.Wu)([E.Z, u.Z, a.ZP, d.Z, i.Z, c.ZP], () => {
					let n = E.Z.getGuild(e);
					if (null == n) return p;
					if (n.features.has(P.oNc.HUB)) {
						var l, r;
						let e = null == (l = c.ZP.getDefaultChannel(n.id)) ? void 0 : l.id;
						return (null != (r = u.Z.getEventDirectoryEntries(e)) ? r : []).map(e => {
							let t = e.scheduledEventId,
								n = a.ZP.getGuildScheduledEvent(t);
							return null != n ? n : u.Z.getCachedGuildScheduledEventById(t)
						}).filter(s.lm)
					}
					return a.ZP.getGuildScheduledEventsByIndex(null != t ? t : a.bN.GUILD_EVENT_UPCOMING(n.id)).filter(e => {
						let t = e.channel_id;
						if (null == t) return !0;
						let n = i.Z.getChannel(t);
						return d.Z.can(P.Plq.VIEW_CHANNEL, n)
					})
				}, [t, e])
			}

			function I(e) {
				return (0, r.e7)([a.ZP, i.Z, d.Z], () => {
					let t = i.Z.getChannel(e);
					if (!d.Z.can(P.Plq.VIEW_CHANNEL, t) || null == (null == t ? void 0 : t.guild_id)) return null;
					let n = a.ZP.getGuildScheduledEventsByIndex(a.bN.CHANNEL_EVENT_ACTIVE(e));
					return n.length > 0 ? n[0] : null
				}, [e])
			}

			function v(e) {
				let t = (0, r.Wu)([a.ZP], () => a.ZP.getGuildScheduledEventsForGuild(e), [e]);
				return l.useMemo(() => {
					let e = new Map;
					return t.forEach(t => {
						let n = t.channel_id;
						null != n && e.set(n, t)
					}), e
				}, [t])
			}

			function b(e) {
				var t;
				let n = (0, r.Wu)([a.ZP, i.Z, d.Z], () => a.ZP.getGuildScheduledEventsByIndex(a.bN.GUILD_EVENT_UPCOMING(e)).filter(e => {
						if (e.entity_type === Z.WX.NONE || e.status !== Z.p1.SCHEDULED) return !1;
						if (null == e.channel_id) return !0;
						let t = i.Z.getChannel(e.channel_id);
						return d.Z.can(P.Plq.VIEW_CHANNEL, t)
					}), [e]),
					l = (0, r.cj)([N.Z], () => N.Z.getAllEventDismissals()),
					u = (0, r.cj)([N.Z], () => N.Z.getAllUpcomingNoticeSeenTimes()),
					c = (0, r.cj)([a.ZP], () => null == n ? {} : n.reduce((e, t) => {
						var n, l;
						let r = (0, g.DK)(t);
						return n = function(e) {
							for (var t = 1; t < arguments.length; t++) {
								var n = null != arguments[t] ? arguments[t] : {},
									l = Object.keys(n);
								"function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
									return Object.getOwnPropertyDescriptor(n, e).enumerable
								}))), l.forEach(function(t) {
									var l;
									l = n[t], t in e ? Object.defineProperty(e, t, {
										value: l,
										enumerable: !0,
										configurable: !0,
										writable: !0
									}) : e[t] = l
								})
							}
							return e
						}({}, e), l = l = {
							[t.id]: a.ZP.isInterestedInEventRecurrence(t.id, r)
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var l = Object.getOwnPropertySymbols(e);
								n.push.apply(n, l)
							}
							return n
						})(Object(l)).forEach(function(e) {
							Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
						}), n
					}, {}), [n]),
					o = (0, r.e7)([E.Z], () => E.Z.getGuild(e)),
					s = null != o && !o.features.has(P.oNc.COMMUNITY) && o.features.has(P.oNc.INTERNAL_EMPLOYEE_ONLY);
				if (null != n && null != c && s)
					for (let e = 0; e < n.length; e++) {
						let r = n[e],
							i = l[r.id],
							E = u[r.id],
							d = null != (t = c[r.id]) && t,
							o = (0, f.M)(r, i, E, d);
						if (null != o) return {
							upcomingEvent: r,
							noticeType: o
						}
					}
			}

			function D(e) {
				return (0, r.e7)([a.ZP, i.Z, d.Z], () => a.ZP.getGuildScheduledEventsByIndex(a.bN.GUILD_EVENT_ACTIVE(e)).find(e => {
					if (e.entity_type === Z.WX.NONE || !(0, a.xt)(e)) return !1;
					if (null == e.channel_id) return !0;
					let t = i.Z.getChannel(e.channel_id);
					return d.Z.can(P.Plq.VIEW_CHANNEL, t)
				}), [e])
			}

			function y(e) {
				return (0, r.e7)([a.ZP], () => a.ZP.getGuildScheduledEventsByIndex(a.bN.CHANNEL_EVENT_UPCOMING(e)), [e])
			}

			function S(e) {
				return (0, r.e7)([i.Z, a.ZP], () => {
					let t = a.ZP.getGuildScheduledEventsByIndex(a.bN.GUILD_EVENT_ACTIVE(e)).find(e => null != i.Z.getChannel(e.channel_id));
					return i.Z.getChannel(null == t ? void 0 : t.channel_id)
				}, [e])
			}

			function T(e) {
				let [t, n] = l.useState(() => Date.now());
				l.useEffect(() => {
					let e = setInterval(() => {
						n(Date.now())
					}, O);
					return () => clearInterval(e)
				}, []);
				let u = (0, r.e7)([a.ZP], () => null == e ? [] : a.ZP.getGuildScheduledEventsByIndex(a.bN.CHANNEL_EVENT_UPCOMING(e)), [e, t]);
				return l.useMemo(() => u.filter(e => {
					let {
						startTime: t,
						endTime: n
					} = (0, _.Kq)(e), {
						withinStartWindow: l,
						diffMinutes: r
					} = (0, g.ub)(t.toISOString(), null == n ? void 0 : n.toISOString());
					return e.status !== Z.p1.ACTIVE && l && r < 15
				}), [u])
			}
		}
	}
]);
//# sourceMappingURL=0f2dc926db9dc0f3.js.map