"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["86350"], {
		132399: function(e) {
			e.exports = "/assets/aa013155f3c2ecb0.svg"
		},
		208578: function(e) {
			e.exports = "/assets/892bf2036797f905.svg"
		},
		325484: function(e) {
			e.exports = "/assets/f86a4d3ee1fc9ef0.svg"
		},
		717881: function(e, t, n) {
			n.d(t, {
				P: () => O,
				Z: () => j
			});
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(755721),
				a = n(620662),
				o = n(387903),
				s = n(850827),
				c = n(812206),
				u = n(952164),
				d = n(199902),
				f = n(592125),
				p = n(430824),
				m = n(979651),
				g = n(153066),
				_ = n(981631),
				b = n(66569);

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

			function v(e, t) {
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

			function y(e) {
				let {
					type: t,
					source: n,
					activity: i,
					applicationStream: a,
					user: o,
					guildId: c,
					channelId: u,
					onAction: d,
					actionColor: f
				} = e;
				return (0, r.jsx)(s.Z, {
					className: (0, g.l)(b, "actions", t),
					type: t,
					source: n,
					activity: i,
					applicationStream: a,
					user: o,
					guildId: c,
					look: l.zx.Looks.FILLED,
					color: null != f ? f : l.zx.Colors.PRIMARY,
					channelId: u,
					onAction: d
				})
			}
			let O = o.Z.Types,
				j = function(e) {
					var {
						activity: t,
						user: n,
						useStoreStream: l = !0,
						showActions: s = !0,
						hideHeader: g = !1,
						showChannelDetails: b = !1
					} = e, O = function(e, t) {
						if (null == e) return {};
						var n, r, i = function(e, t) {
							if (null == e) return {};
							var n, r, i = {},
								l = Object.keys(e);
							for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
							return i
						}(e, t);
						if (Object.getOwnPropertySymbols) {
							var l = Object.getOwnPropertySymbols(e);
							for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
						}
						return i
					}(e, ["activity", "user", "useStoreStream", "showActions", "hideHeader", "showChannelDetails"]);
					let j = (0, i.e7)([m.Z, f.Z], () => {
							var e;
							return f.Z.getChannel(null == (e = m.Z.getVoiceStateForUser(n.id)) ? void 0 : e.channelId)
						}),
						S = (0, i.e7)([d.Z], () => l ? d.Z.getAnyStreamForUser(n.id) : null),
						x = (0, i.e7)([p.Z, m.Z, f.Z], () => {
							var e, r;
							return (0, a.Z)(t, _.xjy.EMBEDDED) ? p.Z.getGuild(null == (e = f.Z.getChannel(null == (r = m.Z.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id)) ? void 0 : r.channelId)) ? void 0 : e.getGuildId()) : null
						}),
						I = (0, i.e7)([p.Z], () => null != S ? p.Z.getGuild(S.guildId) : null),
						C = (0, i.e7)([c.Z], () => {
							if (null != t)
								if (null != t.application_id) return c.Z.getApplication(t.application_id);
								else return c.Z.getApplicationByName(t.name);
							return null
						});
					return (null == t ? void 0 : t.type) === _.IIU.HANG_STATUS ? null : (0, r.jsx)(o.Z, v(h({}, O), {
						activity: t,
						user: n,
						application: C,
						hideHeader: g,
						activityGuild: null != x ? x : I,
						showChannelDetails: b,
						channel: b ? j : void 0,
						renderActions: s ? () => (0, r.jsx)(y, v(h({}, O), {
							applicationStream: S,
							activity: t,
							user: n
						})) : null,
						onOpenSpotifyTrack: u.aG,
						onOpenSpotifyArtist: u.d$,
						onOpenSpotifyAlbum: u.Z5
					}))
				}
		},
		144830: function(e, t, n) {
			n.d(t, {
				Z: () => _
			}), n(415506), n(388685);
			var r, i, l = n(255367),
				a = n(73800),
				o = n(379649),
				s = n(846519),
				c = n(388032);

			function u(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function d(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						r = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), r.forEach(function(t) {
						u(e, t, n[t])
					})
				}
				return e
			}
			var f = ((r = f || {}).ACTIVITY_FEED = "ACTIVITY_FEED", r.ACTIVITY_FEED_NEW = "ACTIVITY_FEED_NEW", r.USER_ACTIVITY = "USER_ACTIVITY", r.GAME_LIBRARY_TIME_PLAYED = "GAME_LIBRARY_TIME_PLAYED", r.GAME_LIBRARY_LAST_PLAYED = "GAME_LIBRARY_LAST_PLAYED", r),
				p = ((i = p || {}).START = "START", i.END = "END", i.TIME = "TIME", i);
			let m = e => (t, n) => null == n ? "" : c.intl.format(e(), d({
					time: t
				}, n)),
				g = {
					ACTIVITY_FEED: {
						START: {
							[o.J6.SECONDS]: () => c.intl.string(c.t.ahzZr6),
							[o.J6.MINUTES]: e => c.intl.formatToPlainString(c.t["03mIHR"], {
								time: e
							}),
							[o.J6.HOURS]: e => c.intl.formatToPlainString(c.t.eNoooa, {
								time: e
							}),
							[o.J6.DAYS]: e => c.intl.formatToPlainString(c.t["2rUo/v"], {
								time: e
							})
						},
						END: {
							[o.J6.SECONDS]: () => c.intl.string(c.t.EluAd3),
							[o.J6.MINUTES]: e => c.intl.formatToPlainString(c.t.BZxG8f, {
								time: e
							}),
							[o.J6.HOURS]: e => c.intl.formatToPlainString(c.t.cRMUp6, {
								time: e
							}),
							[o.J6.DAYS]: e => c.intl.formatToPlainString(c.t["yP1T8/"], {
								time: e
							}),
							[o.J6.WEEKS]: e => c.intl.formatToPlainString(c.t.AWkdqa, {
								time: e
							}),
							[o.J6.MONTHS]: e => c.intl.formatToPlainString(c.t.upamAw, {
								time: e
							}),
							[o.J6.YEARS]: e => c.intl.formatToPlainString(c.t.vfMC2t, {
								time: e
							})
						}
					},
					ACTIVITY_FEED_NEW: {
						START: {
							[o.J6.SECONDS]: m(() => c.t.Bf3PRU),
							[o.J6.MINUTES]: m(() => c.t["A9P+dX"]),
							[o.J6.HOURS]: m(() => c.t.KwVzfn),
							[o.J6.DAYS]: m(() => c.t.hbUpBA)
						},
						END: {
							[o.J6.SECONDS]: e => c.intl.formatToPlainString(c.t.C3MTOD, {
								seconds: e
							}),
							[o.J6.MINUTES]: e => c.intl.formatToPlainString(c.t["GqQ/Y2"], {
								minutes: e
							}),
							[o.J6.HOURS]: e => c.intl.formatToPlainString(c.t.c5zfWV, {
								hours: e
							}),
							[o.J6.DAYS]: e => c.intl.formatToPlainString(c.t.amjnaG, {
								days: e
							})
						}
					},
					USER_ACTIVITY: {
						START: {
							[o.J6.SECONDS]: () => c.intl.string(c.t.ahzZr6),
							[o.J6.MINUTES]: function(e, t) {
								let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
								return n ? c.intl.formatToPlainString(c.t["03mIHR"], {
									time: e
								}) : c.intl.formatToPlainString(c.t["vQml+P"], {
									time: e
								})
							},
							[o.J6.HOURS]: function(e, t) {
								let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
								return n ? c.intl.formatToPlainString(c.t.eNoooa, {
									time: e
								}) : c.intl.formatToPlainString(c.t["4Wq+6+"], {
									time: e
								})
							},
							[o.J6.DAYS]: function(e, t) {
								let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
								return n ? c.intl.formatToPlainString(c.t["2rUo/v"], {
									time: e
								}) : c.intl.formatToPlainString(c.t["jN3/fX"], {
									time: e
								})
							}
						}
					},
					GAME_LIBRARY_TIME_PLAYED: {
						TIME: {
							[o.J6.NONE]: () => c.intl.string(c.t.LqDiCg),
							[o.J6.SECONDS]: e => c.intl.formatToPlainString(c.t.xDIDBA, {
								time: e
							}),
							[o.J6.MINUTES]: e => c.intl.formatToPlainString(c.t.KGqJcX, {
								time: e
							}),
							[o.J6.HOURS]: e => c.intl.formatToPlainString(c.t.OLchUF, {
								time: e
							})
						}
					},
					GAME_LIBRARY_LAST_PLAYED: {
						END: {
							[o.J6.NONE]: () => c.intl.string(c.t.EoWLrq),
							[o.J6.SECONDS]: () => c.intl.string(c.t.QTHa8f),
							[o.J6.MINUTES]: e => c.intl.formatToPlainString(c.t.SVEfcX, {
								time: e
							}),
							[o.J6.HOURS]: e => c.intl.formatToPlainString(c.t["0Gbusb"], {
								time: e
							}),
							[o.J6.DAYS]: e => c.intl.formatToPlainString(c.t.hnPZZ2, {
								time: e
							}),
							[o.J6.WEEKS]: e => c.intl.formatToPlainString(c.t.L3fTpK, {
								time: e
							}),
							[o.J6.MONTHS]: e => c.intl.formatToPlainString(c.t.xAFWQU, {
								time: e
							}),
							[o.J6.YEARS]: e => c.intl.formatToPlainString(c.t["9Yr3NT"], {
								time: e
							})
						}
					}
				};

			function _(e) {
				var t, n;
				return n = class extends(t = a.PureComponent) {
					componentDidMount() {
						this.timer.start(1e4, this.update)
					}
					componentDidUpdate(e) {
						let {
							start: t,
							end: n,
							time: r
						} = this.props;
						(e.start !== t || e.end !== n || e.time !== r) && this.update()
					}
					componentWillUnmount() {
						this.timer.stop()
					}
					getDiff() {
						let {
							start: e,
							end: t,
							time: n
						} = this.props;
						if (null != n) return n / 1e3 / 60;
						let r = Date.now(),
							i = 0;
						return null != e ? i = r - e : null != t && (i = r - t), Math.abs(i) / 1e3 / 60
					}
					getTimeUnit(e, t, n) {
						let r = (0, o.jU)(e, e => (function(e, t, n) {
							let r = g[n];
							if (null != r) {
								let n = r[t];
								if (null != n) return null != n[e]
							}
							return !1
						})(e, n, t));
						if (null == r) throw Error("Could not get the time unit in PlayTime with time: ".concat(e, " for type: ").concat(n, " in location: ").concat(t));
						return r
					}
					getType() {
						let {
							start: e,
							end: t,
							time: n
						} = this.props;
						return null != e ? "START" : null != t ? "END" : null != n ? "TIME" : null
					}
					render() {
						var t, n;
						let r = this.props,
							{
								location: i,
								messageProps: a,
								isApplicationStreaming: s
							} = r,
							c = function(e, t) {
								if (null == e) return {};
								var n, r, i = function(e, t) {
									if (null == e) return {};
									var n, r, i = {},
										l = Object.keys(e);
									for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
									return i
								}(e, t);
								if (Object.getOwnPropertySymbols) {
									var l = Object.getOwnPropertySymbols(e);
									for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
								}
								return i
							}(r, ["location", "messageProps", "isApplicationStreaming"]),
							{
								time: u
							} = this.state,
							f = this.getType();
						if (null == f) return null;
						let p = this.getTimeUnit(u, i, f),
							m = g[i][f];
						if (null == m) return null;
						let _ = m[p],
							b = Math.floor((0, o.A3)(u, p));
						return (0, l.jsx)(e, (t = d({}, c), n = n = {
							children: null == _ ? void 0 : _(b, a, s)
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
					constructor(...e) {
						super(...e), u(this, "timer", new s.Xp), u(this, "state", {
							time: this.getDiff()
						}), u(this, "update", () => {
							this.setState({
								time: this.getDiff()
							})
						})
					}
				}, u(n, "Locations", f), u(n, "Types", p), n
			}
		},
		438139: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var r = n(255367),
				i = n(73800),
				l = n(846519),
				a = n(388032);

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
						r = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), r.forEach(function(t) {
						o(e, t, n[t])
					})
				}
				return e
			}

			function c(e, t) {
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

			function u(e) {
				return "".concat(e).length < 13 ? 1e3 * e : e
			}

			function d(e) {
				return class extends i.PureComponent {
					componentDidMount() {
						this._interval.start(1e3, () => this.setState(this.getUpdatedTime()))
					}
					componentWillUnmount() {
						this._interval.stop()
					}
					componentDidUpdate(e) {
						(e.timestamps.end !== this.props.timestamps.end || e.timestamps.start !== this.props.timestamps.start) && this.setState(this.getUpdatedTime())
					}
					getUpdatedTime() {
						let {
							timestamps: e
						} = this.props, t = Date.now() / 1e3;
						return null != e.end ? this.getDiff(t, u(e.end) / 1e3) : null != e.start ? this.getDiff(u(e.start) / 1e3, t) : {
							hours: 0,
							minutes: 0,
							seconds: 0
						}
					}
					renderTime(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
						return t && e <= 0 ? -1 : e < 10 ? "0".concat(e) : e
					}
					getDiff(e, t) {
						let n = Math.max(t - e, 0),
							r = Math.floor(n) % 60,
							i = Math.floor(n / 60) % 60;
						return {
							hours: Math.floor(n / 3600) % 24,
							minutes: i,
							seconds: r
						}
					}
					render() {
						let t = this.props,
							{
								timestamps: n
							} = t,
							i = function(e, t) {
								if (null == e) return {};
								var n, r, i = function(e, t) {
									if (null == e) return {};
									var n, r, i = {},
										l = Object.keys(e);
									for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
									return i
								}(e, t);
								if (Object.getOwnPropertySymbols) {
									var l = Object.getOwnPropertySymbols(e);
									for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
								}
								return i
							}(t, ["timestamps"]),
							{
								hours: l,
								minutes: o,
								seconds: u
							} = this.state,
							d = {
								hours: this.renderTime(l, !0),
								minutes: this.renderTime(o),
								seconds: this.renderTime(u)
							};
						return null != n.end ? (0, r.jsx)(e, c(s({}, i), {
							message: a.intl.formatToPlainString(a.t["I/J7vL"], d)
						})) : null != n.start ? (0, r.jsx)(e, c(s({}, i), {
							message: a.intl.formatToPlainString(a.t.M9Fexc, d)
						})) : null
					}
					constructor(e) {
						super(e), o(this, "_interval", void 0), this._interval = new l.Xp, this.state = s({}, this.getUpdatedTime())
					}
				}
			}
		},
		652844: function(e, t, n) {
			n.d(t, {
				O: () => o
			});
			var r = n(255367),
				i = n(73800),
				l = n(709014);
			let a = {
					mute: {
						name: "mute",
						start: 0,
						duration: 70
					},
					unmute: {
						name: "unmute",
						start: 100,
						duration: 70
					},
					hover_unmuted: {
						name: "hover_unmuted",
						start: 180,
						duration: 40
					},
					hover_muted: {
						name: "hover_muted",
						start: 240,
						duration: 40
					}
				},
				o = e => {
					let t = i.useRef(null),
						o = i.useRef(e);
					o.current = e;
					let s = i.useMemo(() => () => {
							null != t.current && t.current.play(e)
						}, [e]),
						c = i.useCallback(() => {
							if (null == t.current) return;
							let n = "mute" === e ? "hover_unmuted" : "hover_muted";
							t.current.play(n)
						}, [e]),
						u = i.useCallback(() => {
							if (null == t.current) return;
							let n = "mute" === e ? "hover_unmuted" : "hover_muted";
							t.current.stopIfPlaying(n)
						}, [e]),
						d = i.useCallback(e => {
							var i, s;
							return (0, r.jsx)(l.L, (i = function(e) {
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
							}({}, e), s = s = {
								src: () => n.e("410").then(n.t.bind(n, 992285, 19)),
								ref: t,
								initialAnimation: o.current,
								markers: a
							}, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
								var n = Object.keys(e);
								if (Object.getOwnPropertySymbols) {
									var r = Object.getOwnPropertySymbols(e);
									n.push.apply(n, r)
								}
								return n
							})(Object(s)).forEach(function(e) {
								Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
							}), i))
						}, []);
					return {
						events: {
							onClick: s,
							onMouseEnter: c,
							onMouseLeave: u
						},
						play: s,
						getDuration: i.useCallback(() => {
							var e;
							return null == (e = t.current) ? void 0 : e.getDuration()
						}, []),
						getCurrentFrame: i.useCallback(() => {
							var e, n;
							return null != (n = null == (e = t.current) ? void 0 : e.getCurrentFrame()) ? n : null
						}, []),
						Component: d
					}
				}
		},
		747906: function(e, t, n) {
			n.d(t, {
				P: () => o
			});
			var r = n(255367),
				i = n(73800),
				l = n(709014);
			let a = {
					mute: {
						name: "mute",
						start: 0,
						duration: 70
					},
					unmute: {
						name: "unmute",
						start: 100,
						duration: 70
					},
					hover_unmuted: {
						name: "hover_unmuted",
						start: 180,
						duration: 40
					},
					hover_muted: {
						name: "hover_muted",
						start: 240,
						duration: 40
					},
					sparkle_off_muted: {
						name: "sparkle_off_muted",
						start: 299,
						duration: 40
					},
					sparkle_on: {
						name: "sparkle_on",
						start: 370,
						duration: 40
					},
					sparkle_off: {
						name: "sparkle_off",
						start: 450,
						duration: 40
					}
				},
				o = e => {
					let t = i.useRef(null),
						o = i.useRef(e);
					o.current = e;
					let s = i.useMemo(() => () => {
							null != t.current && t.current.play(e)
						}, [e]),
						c = i.useCallback(() => {
							if (null == t.current) return;
							let n = "mute" === e ? "hover_unmuted" : "hover_muted";
							t.current.play(n)
						}, [e]),
						u = i.useCallback(() => {
							if (null == t.current) return;
							let n = "mute" === e ? "hover_unmuted" : "hover_muted";
							t.current.stopIfPlaying(n)
						}, [e]),
						d = i.useCallback(e => {
							var i, s;
							return (0, r.jsx)(l.L, (i = function(e) {
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
							}({}, e), s = s = {
								src: () => n.e("30261").then(n.t.bind(n, 414787, 19)),
								ref: t,
								initialAnimation: o.current,
								markers: a
							}, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
								var n = Object.keys(e);
								if (Object.getOwnPropertySymbols) {
									var r = Object.getOwnPropertySymbols(e);
									n.push.apply(n, r)
								}
								return n
							})(Object(s)).forEach(function(e) {
								Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
							}), i))
						}, []);
					return {
						events: {
							onClick: s,
							onMouseEnter: c,
							onMouseLeave: u
						},
						play: s,
						getDuration: i.useCallback(() => {
							var e;
							return null == (e = t.current) ? void 0 : e.getDuration()
						}, []),
						getCurrentFrame: i.useCallback(() => {
							var e, n;
							return null != (n = null == (e = t.current) ? void 0 : e.getCurrentFrame()) ? n : null
						}, []),
						Component: d
					}
				}
		},
		175724: function(e, t, n) {
			n.d(t, {
				f: () => C
			});
			var r = n(475179),
				i = n(904245),
				l = n(45114),
				a = n(40851),
				o = n(358221),
				s = n(623292),
				c = n(807092),
				u = n(6025),
				d = n(897473),
				f = n(913663),
				p = n(268350),
				m = n(433355),
				g = n(592125),
				_ = n(703558),
				b = n(323873),
				h = n(375954),
				v = n(306680),
				y = n(944486),
				O = n(914010),
				j = n(574254),
				S = n(451478),
				x = n(585483),
				I = n(981631);
			let C = {
				binds: ["esc", "shift+pagedown"],
				comboKeysBindGlobal: !0,
				action(e) {
					if (S.Z.isElementFullScreen()) return !1;
					if (x.S.hasSubscribers(I.CkL.CALL_DECLINE)) return x.S.dispatch(I.CkL.CALL_DECLINE), !1;
					if (j.Z.close()) return !1;
					if (x.S.hasSubscribers(I.CkL.MEDIA_MODAL_CLOSE)) return x.S.dispatch(I.CkL.MEDIA_MODAL_CLOSE), !1;
					let t = (0, a.AN)(e);
					if (null == t ? void 0 : t.hasSubscribers(I.CkL.POPOUT_CLOSE)) return t.dispatch(I.CkL.POPOUT_CLOSE), !1;
					if (x.S.hasSubscribers(I.CkL.CLOSE_GIF_PICKER)) return x.S.dispatch(I.CkL.CLOSE_GIF_PICKER), !1;
					if (x.S.hasSubscribers(I.CkL.MODAL_CLOSE)) return x.S.dispatch(I.CkL.MODAL_CLOSE), !1;
					if (x.S.hasSubscribers(I.CkL.SEARCH_RESULTS_CLOSE)) return x.S.dispatch(I.CkL.SEARCH_RESULTS_CLOSE), !1;
					if (null == t ? void 0 : t.hasSubscribers(I.CkL.POPOUT_CLOSE_AFTER_MODALS)) return t.dispatch(I.CkL.POPOUT_CLOSE_AFTER_MODALS), !1;
					let n = O.Z.getGuildId(),
						i = y.Z.getChannelId(n),
						l = g.Z.getChannel(i),
						s = m.ZP.getSection(i, null == l ? void 0 : l.isDM()) === I.ULH.SIDEBAR_CHAT ? m.ZP.getSidebarState(i) : null,
						c = (null == s ? void 0 : s.type) === d.tI.VIEW_THREAD || (null == s ? void 0 : s.type) === d.tI.VIEW_CHANNEL ? s.channelId : null;
					if (!1 === P(i) || !1 === P(c)) return !1;
					if (null != i && (null == s ? void 0 : s.type) === d.tI.CREATE_THREAD) return u.Z.closeChannelSidebar(i), !1;
					let f = E(i),
						p = E(c);
					return null == i || f || p || null == s ? null != i && !f && o.Z.getChatOpen(i) ? r.Z.updateChatOpen(i, !1) : x.S.dispatch(I.CkL.SCROLLTO_PRESENT) : u.Z.closeChannelSidebar(i), !1
				}
			};

			function P(e) {
				if (null != e) {
					if (b.Z.isEditingAny(e)) return i.Z.endEditMessage(e), !1;
					if (null != c.Z.getPendingReply(e)) return (0, s.A6)(e), !1;
					if (null != f.Z.getStickerPreview(e, _.d.ChannelMessage)) return (0, p.qB)(e, _.d.ChannelMessage), !1
				}
			}

			function E(e) {
				if (null == e) return !1;
				let t = !1;
				return h.Z.getMessages(e).hasMoreAfter && (i.Z.jumpToPresent(e, I.AQB), t = !0), v.ZP.hasUnread(e) && ((0, l.In)(e, {
					object: I.qAy.MARK_CHANNEL_AS_READ_KEYBIND,
					objectType: I.Qqv.ACK_MANUAL
				}), t = !0), (0, l.iV)(e), t
			}
		},
		280492: function(e, t, n) {
			n.d(t, {
				iN: () => i,
				oV: () => l
			});
			var r = n(846027);
			let i = {
					binds: ["mod+shift+m"],
					comboKeysBindGlobal: !0,
					action: () => (r.Z.toggleSelfMute({
						usedKeybind: !0,
						location: "Default Keybind"
					}), !1)
				},
				l = {
					binds: ["mod+shift+d"],
					comboKeysBindGlobal: !0,
					action: () => (r.Z.toggleSelfDeaf({
						usedKeybind: !0,
						location: "Default Keybind"
					}), !1)
				}
		},
		740265: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var r = n(726542),
				i = n(603113),
				l = n(981631),
				a = n(388032);

			function o(e) {
				var t;
				let n = null != (t = (0, i.Z)(e)) ? t : "";
				switch (n) {
					case l.M7m.PS4:
					case l.M7m.PS5:
						return a.intl.formatToPlainString(a.t.A17aMz, {
							platform: n.toUpperCase()
						});
					case l.M7m.XBOX:
					case l.M7m.SAMSUNG:
						return a.intl.formatToPlainString(a.t.A17aMz, {
							platform: r.Z.get(n).name
						});
					default:
						return a.intl.string(a.t["2TbM/P"])
				}
			}
		},
		39628: function(e, t, n) {
			n.d(t, {
				Z: () => _
			}), n(388685);
			var r, i = n(255367),
				l = n(73800),
				a = n(120356),
				o = n.n(a),
				s = n(846519),
				c = n(600164),
				u = n(903276);

			function d(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function f(e) {
				let {
					percentage: t,
					isSingleLine: n
				} = e;
				return (0, i.jsx)("div", {
					className: o()({
						[u.bar]: n,
						[u.barInMultiLine]: !n
					}),
					children: (0, i.jsx)("div", {
						className: u.barInner,
						style: {
							width: "".concat(100 * Math.max(Math.min(t, 1), 0), "%")
						}
					})
				})
			}

			function p(e) {
				return String(e).padStart(2, "0")
			}

			function m(e) {
				let {
					time: t,
					padLargestUnit: n
				} = e, r = Math.floor(t) % 60, i = Math.floor(t / 60) % 60, l = Math.floor(t / 3600);
				return 0 === l ? n ? "".concat(p(i), ":").concat(p(r)) : "".concat(i, ":").concat(p(r)) : n ? "".concat(p(l), ":").concat(p(i), ":").concat(p(r)) : "".concat(l, ":").concat(p(i), ":").concat(p(r))
			}
			class g extends(r = l.PureComponent) {
				componentDidMount() {
					this.timer.start(500, () => {
						this.setState({
							now: Date.now()
						})
					})
				}
				componentWillUnmount() {
					this.timer.stop()
				}
				render() {
					let {
						start: e,
						end: t,
						className: n,
						themed: r,
						singleLine: l = !1
					} = this.props, {
						now: a
					} = this.state, s = (t - e) / 1e3, d = Math.max(Math.min((a - e) / 1e3, s), 0);
					return l ? (0, i.jsxs)("div", {
						className: o()(n, {
							[u.themed]: r
						}, u.singleLineContainer),
						children: [(0, i.jsx)("div", {
							className: u.textLeftInSingleLine,
							children: m({
								time: d,
								padLargestUnit: !0
							})
						}), (0, i.jsx)("div", {
							className: u.barInSingleLine,
							children: (0, i.jsx)(f, {
								percentage: d / s,
								isSingleLine: !0
							})
						}), (0, i.jsx)("div", {
							className: u.textRight,
							children: m({
								time: s,
								padLargestUnit: !0
							})
						})]
					}) : (0, i.jsxs)("div", {
						className: o()(n, {
							[u.themed]: r
						}),
						children: [(0, i.jsx)(f, {
							percentage: d / s,
							isSingleLine: !1
						}), (0, i.jsxs)(c.Z, {
							children: [(0, i.jsx)(c.Z.Child, {
								grow: 1,
								className: u.textLeft,
								children: m({
									time: d,
									padLargestUnit: !1
								})
							}), (0, i.jsx)(c.Z.Child, {
								grow: 0,
								className: u.textRight,
								children: m({
									time: s,
									padLargestUnit: !1
								})
							})]
						})]
					})
				}
				constructor(...e) {
					super(...e), d(this, "timer", new s.Xp), d(this, "state", {
						now: Date.now()
					})
				}
			}
			d(g, "defaultProps", {
				themed: !1
			});
			let _ = g
		},
		387903: function(e, t, n) {
			n.d(t, {
				Y: () => Y,
				Z: () => X
			}), n(997841), n(388685);
			var r, i, l = n(255367),
				a = n(73800),
				o = n(120356),
				s = n.n(o),
				c = n(512722),
				u = n.n(c),
				d = n(780384),
				f = n(481060),
				p = n(438139),
				m = n(410030),
				g = n(726542),
				_ = n(600164),
				b = n(686546),
				h = n(111028),
				v = n(925329),
				y = n(810568),
				O = n(168524),
				j = n(565138),
				S = n(707409),
				x = n(424678),
				I = n(750154),
				C = n(81063),
				P = n(768581),
				E = n(630388),
				w = n(153066),
				T = n(740265),
				N = n(122810),
				Z = n(833664),
				A = n(503438),
				D = n(802856),
				L = n(420660),
				k = n(39628),
				M = n(701488),
				R = n(981631),
				F = n(388032),
				U = n(636424);

			function V(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function B(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						r = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), r.forEach(function(t) {
						V(e, t, n[t])
					})
				}
				return e
			}
			var Y = ((i = {}).ACTIVITY_FEED = "ActivityFeed", i.STREAM_PREVIEW = "StreamPreview", i.VOICE_CHANNEL = "VoiceChannel", i);
			let W = {
					StreamPreview: [108, 60],
					VoiceChannel: [108, 60],
					ActivityFeed: [900, 500]
				},
				z = (0, p.Z)(class extends a.PureComponent {
					render() {
						return (0, l.jsx)("div", {
							className: U.timestamp,
							children: this.props.message
						})
					}
				});

			function G(e) {
				let {
					activity: t
				} = e, n = (0, m.ZP)(), r = function(e) {
					let {
						activity: t
					} = e, n = null;
					return (0, A.Z)(t) && (n = R.ABu.SPOTIFY), null != t.platform && [R.M7m.PS4, R.M7m.PS5].includes(t.platform) && (n = R.ABu.PLAYSTATION), n
				}({
					activity: t
				});
				if (null == r) return null;
				let i = g.Z.get(r);
				return (0, l.jsx)("img", {
					alt: "",
					src: (0, d.ap)(n) ? i.icon.lightSVG : i.icon.darkSVG,
					className: U.platformIcon
				})
			}
			class H extends(r = a.PureComponent) {
				get activity() {
					let {
						activity: e,
						activityGuild: t
					} = this.props;
					return null != t && (null == e ? void 0 : e.type) !== R.IIU.PLAYING && (null == e ? void 0 : e.type) !== R.IIU.WATCHING && (null == e ? void 0 : e.type) !== R.IIU.LISTENING && (null == e ? void 0 : e.type) !== R.IIU.HANG_STATUS ? {
						type: R.IIU.PLAYING,
						name: F.intl.string(F.t.eXan7O)
					} : e
				}
				getTypeClass(e, t) {
					return (0, w.l)(U, e, this.props.type, t)
				}
				isStreamerOnTypeActivityFeed() {
					return (0, L.Z)(this.activity) && "ActivityFeed" === this.props.type
				}
				renderHeader(e) {
					let t, {
							hideHeader: n,
							activityGuild: r,
							showChannelDetails: i,
							renderHeaderAccessory: a
						} = this.props,
						o = this.activity;
					if (n || null == o) return null;
					let {
						name: c
					} = o;
					switch (o.type) {
						case R.IIU.STREAMING:
							t = F.intl.formatToPlainString(F.t.Dzgz4u, {
								platform: [R.ABu.TWITCH, R.ABu.YOUTUBE].includes(c.toLowerCase()) ? c : g.Z.get(R.ABu.TWITCH).name
							});
							break;
						case R.IIU.LISTENING:
							t = F.intl.formatToPlainString(F.t["5sYPnp"], {
								name: c
							});
							break;
						case R.IIU.WATCHING:
							t = F.intl.formatToPlainString(F.t.Ge29Z2, {
								name: c
							});
							break;
						case R.IIU.PLAYING:
							t = (0, T.Z)(o);
							break;
						case R.IIU.COMPETING:
							t = F.intl.formatToPlainString(F.t.SQCo6O, {
								name: c
							})
					}
					if (null != r) {
						var u;
						t = (0, E.yE)(null != (u = null == o ? void 0 : o.flags) ? u : 0, R.xjy.EMBEDDED) ? o.type === R.IIU.WATCHING ? F.intl.formatToPlainString(F.t["M/L8oq"], {
							guildName: r.name
						}) : F.intl.formatToPlainString(F.t["4chKQk"], {
							guildName: r.name
						}) : F.intl.formatToPlainString(F.t.sddlGB, {
							server: r.name
						})
					}
					return (0, l.jsxs)("div", {
						className: U.headerContainer,
						children: [(0, l.jsx)(f.X6q, {
							className: s()((0, w.l)(U, "headerText", e ? "EmptyBody" : "Normal")),
							variant: i ? "text-xs/semibold" : "eyebrow",
							children: (0, l.jsx)(h.Z, {
								children: t
							})
						}), null == a ? void 0 : a()]
					})
				}
				renderXboxImage() {
					return (0, l.jsx)("div", {
						className: U.assets,
						children: (0, l.jsx)("img", {
							alt: "",
							src: g.Z.get(R.ABu.XBOX).icon.customPNG,
							className: s()(this.getTypeClass("assetsLargeImage", "Xbox"))
						})
					})
				}
				renderImage(e) {
					var t, n, r;
					let i, o, {
							type: c
						} = this.props,
						{
							assets: u,
							application_id: d
						} = e;
					if (null == u || null == u.large_image && null == u.small_image) return null;
					(0, L.Z)(e) && (i = W[c]);
					let p = (0, A.Z)(e),
						m = null != u.large_image ? (0, l.jsx)("img", {
							alt: null != (t = u.large_text) ? t : "",
							src: (0, C.xF)(d, u.large_image, null != i ? i : [M.Si.LARGE, M.Si.LARGE]),
							className: s()(this.getTypeClass("assetsLargeImage", this.isStreamerOnTypeActivityFeed() ? R.ABu.TWITCH : ""), {
								[null != (n = this.getTypeClass("assetsLargeMask")) ? n : ""]: null != u.small_image,
								[U.assetsLargeImageSpotify]: p
							})
						}) : null;
					if (p) m = (0, l.jsx)(f.eee, {
						onClick: this.handleOpenSpotifyAlbum,
						children: m
					});
					else if ((0, I.dS)(e)) {
						let t = (0, I.rq)(e);
						if (null == t) return null;
						m = (0, l.jsx)(b.ZP, {
							mask: b.ZP.Masks.SQUIRCLE,
							width: M.Si.SMALL,
							height: M.Si.SMALL,
							children: (0, l.jsx)("img", {
								src: null != (r = P.ZP.getGuildIconURL({
									id: t.guildId,
									icon: u.small_image,
									size: M.Si.SMALL
								})) ? r : void 0,
								className: U.assetsLargeImageVoiceChannel,
								alt: ""
							})
						})
					}
					return (this.isStreamerOnTypeActivityFeed() && null != e.url && "" !== e.url && (m = (0, l.jsxs)("div", {
						className: U.twitchImageContainer,
						children: [(0, l.jsxs)("div", {
							className: U.twitchImageOverlay,
							children: [(0, l.jsx)(f.H, {
								className: U.streamName,
								children: e.name
							}), (0, l.jsx)("div", {
								className: U.streamGame,
								children: F.intl.format(F.t.gmCZRU, {
									game: e.details
								})
							})]
						}), (0, l.jsx)(f.eee, {
							className: U.twitchBackgroundImage,
							href: e.url,
							children: m
						})]
					})), (0, I.dS)(e) || null == u.small_image || (o = (0, l.jsx)(f.ua7, {
						text: "" !== u.small_text ? u.small_text : null,
						position: "top",
						children: e => {
							var t;
							return (0, l.jsx)("img", B({
								alt: null != (t = u.small_text) ? t : "",
								src: (0, C.xF)(d, u.small_image, [M.Si.SMALL, M.Si.SMALL]),
								className: this.getTypeClass("assetsSmallImage", null == m ? "WithoutLargeImage" : void 0)
							}, e))
						}
					})), null == m) ? (0, l.jsx)("div", {
						className: U.assets,
						children: o
					}) : (0, l.jsxs)("div", {
						className: U.assets,
						children: [(0, l.jsx)(f.ua7, {
							text: null != u.large_text ? u.large_text : null,
							position: "top",
							children: e => {
								let {
									onMouseEnter: t,
									onMouseLeave: n
								} = e;
								return null != m ? a.cloneElement(m, {
									onMouseEnter: t,
									onMouseLeave: n
								}) : null
							}
						}), o]
					})
				}
				renderGameImage(e) {
					let {
						user: t,
						type: n,
						application: r,
						activityGuild: i
					} = this.props;
					return null != e.assets || (0, N.Z)(e) || e.type !== R.IIU.PLAYING || "ActivityFeed" === n || t.bot ? null : null == r && null != i ? (0, l.jsx)("div", {
						className: s()(U.gameIcon, U.screenshareIcon)
					}) : (0, l.jsx)(v.Z, {
						className: U.gameIcon,
						game: r
					})
				}
				renderName(e) {
					let {
						user: t,
						application: n,
						hideName: r
					} = this.props;
					if (r) return null;
					let {
						details: i,
						type: a
					} = e;
					if (a === R.IIU.CUSTOM_STATUS) return null;
					let o = (0, Z.Z)(e),
						c = e.name,
						u = c;
					return (o && null != n ? u = (0, l.jsx)("span", {
						className: U.activityName,
						children: u
					}) : !o && (c = i, u = i, (0, A.Z)(e) && null != e.sync_id && null != i ? u = (0, l.jsx)(f.eee, {
						className: U.bodyLink,
						onClick: this.handleOpenSpotifyTrack,
						children: i
					}) : (0, I.dS)(e) && (u = e.name)), null == u) ? null : (0, l.jsx)(f.Text, {
						title: c,
						variant: "text-sm/semibold",
						className: s()((0, w.l)(U, "name", t.bot ? "wrap" : "normal")),
						children: u
					})
				}
				renderDetails(e) {
					let t, {
							details: n,
							state: r
						} = e,
						i = n,
						a = n;
					if (e.type === R.IIU.CUSTOM_STATUS) i = r;
					else if (!(0, Z.Z)(e)) {
						if (i = r, a = r, (0, A.Z)(e) && null != r) i = F.intl.format(F.t.uU9le3, {
							artists: a,
							artistsHook: (t, n) => (0, l.jsx)(x.Z, {
								artists: r,
								linkClassName: U.bodyLink,
								canOpen: null != e.sync_id,
								onOpenSpotifyArtist: this.handleOpenSpotifyArtist
							}, n)
						});
						else if ((0, I.dS)(e)) {
							var o;
							i = null == (o = e.assets) ? void 0 : o.small_text
						}
					}
					return null == i || "" === i ? null : ((0, L.Z)(e) && (i = F.intl.formatToPlainString(F.t.gmCZRU, {
						game: i
					})), null != t) ? (0, l.jsx)(f.P3F, {
						onClick: t,
						title: null != a ? a : void 0,
						className: U.clickableDetails,
						children: i
					}) : (0, l.jsx)("div", {
						title: null != a ? a : void 0,
						className: (0, L.Z)(e) || (0, A.Z)(e) ? U.detailsWrap : U.details,
						children: i
					})
				}
				renderChannelDetails(e) {
					let {
						activityGuild: t,
						showChannelDetails: n,
						channel: r
					} = this.props;
					return n && null != t ? null == r ? (0, l.jsx)("div", {
						className: (0, L.Z)(e) || (0, A.Z)(e) ? U.detailsWrap : U.details,
						children: F.intl.format(F.t["hq/Qzc"], {
							guildName: t.name
						})
					}) : (0, l.jsxs)("div", {
						className: s()((0, L.Z)(e) || (0, A.Z)(e) ? U.detailsWrap : U.details, U.guildDetails),
						children: [(0, l.jsx)(j.Z, {
							guild: t,
							size: j.Z.Sizes.SMOL,
							className: U.guildIcon
						}), (0, l.jsx)(f.Fbu, {
							size: "xxs",
							color: "currentColor"
						}), (0, l.jsxs)("div", {
							className: U.voiceChannelInfo,
							children: [(0, l.jsx)(f.gj8, {
								size: "xxs",
								color: "currentColor"
							}), (0, l.jsx)(f.Text, {
								variant: "text-xs/normal",
								children: null == r ? void 0 : r.name
							})]
						})]
					}) : null
				}
				renderTimePlayed(e) {
					let {
						activityGuild: t
					} = this.props;
					if (!(0, Z.Z)(e) || (0, A.Z)(e)) return null;
					let {
						timestamps: n
					} = e;
					return null == n ? null : (0, N.Z)(e) ? (0, l.jsx)(z, {
						timestamps: n
					}) : (0, l.jsx)(S.ZP, {
						start: n.start,
						location: S.ZP.Locations.USER_ACTIVITY,
						className: U.playTime,
						isApplicationStreaming: null != t
					})
				}
				renderTimeBar(e) {
					if (!(0, A.Z)(e)) return null;
					let {
						timestamps: t
					} = e;
					if (null == t) return null;
					let {
						start: n,
						end: r
					} = t;
					return null == n || null == r ? null : (0, l.jsx)(k.Z, {
						start: n,
						end: r,
						className: this.getTypeClass("timeBar"),
						themed: "VoiceChannel" === this.props.type
					})
				}
				renderState(e, t) {
					var n, r;
					let i, {
							state: a,
							party: o,
							assets: s
						} = e,
						c = a,
						u = a;
					return (!(0, Z.Z)(e) && (c = null == s ? void 0 : s.large_text, u = null == s ? void 0 : s.large_text, (0, A.Z)(e) && null != c && (c = F.intl.format(F.t.vOLBEx, {
						album: u,
						albumHook: (t, n) => null != e.sync_id && null != u ? (0, l.jsx)(f.eee, {
							className: U.bodyLink,
							onClick: this.handleOpenSpotifyAlbum,
							children: u
						}, n) : u
					}))), null != c && "" !== c && e.type !== R.IIU.CUSTOM_STATUS || (0, I.dS)(e)) ? ((null == o ? void 0 : o.size) == null && [M.Zc].includes(null != (n = e.application_id) ? n : "") ? i = F.intl.formatToPlainString(F.t["u//9Bw"], {
						count: "0",
						max: null != (r = null == t ? void 0 : t.getMaxParticipants()) ? r : 0
					}) : (0, I.dS)(e) && (null == o ? void 0 : o.size) != null ? i = F.intl.formatToPlainString(F.t["JC/3x8"], {
						numSpeakers: o.size[0],
						numListeners: o.size[1] - o.size[0]
					}) : (null == o ? void 0 : o.size) != null && o.size.length >= 2 && (i = 0 === o.size[1] ? F.intl.formatToPlainString(F.t.IM4J4e, {
						count: o.size[0]
					}) : F.intl.formatToPlainString(F.t["u//9Bw"], {
						count: o.size[0],
						max: o.size[1]
					})), (0, l.jsxs)("div", {
						className: U.state,
						children: [(0, l.jsx)("span", {
							title: u,
							children: c
						}), null != i ? (0, l.jsxs)("span", {
							children: [" ", i]
						}) : null]
					})) : null
				}
				render() {
					let e, {
							type: t,
							renderActions: n,
							className: r,
							application: i,
							onClose: a,
							onOpenGameProfileModal: o
						} = this.props,
						c = this.activity;
					if (null == c || c.type === R.IIU.CUSTOM_STATUS) return null;
					let u = "ActivityFeed" === t,
						d = "StreamPreview" === t,
						p = !1;
					(0, D.Z)(c) ? (e = this.renderXboxImage(), p = !0) : null == (e = this.renderImage(c)) && (p = null != (e = this.renderGameImage(c)));
					let m = this.renderName(c),
						g = this.renderDetails(c),
						b = this.renderState(c, i),
						h = this.renderTimePlayed(c),
						v = this.renderChannelDetails(c),
						y = null != n ? n() : null,
						O = this.renderTimeBar(c),
						j = ![e, m, g, b, h, O, y].some(e => null != e);
					return (0, l.jsxs)("div", {
						className: s()(this.getTypeClass("activity"), r),
						children: [this.renderHeader(j), (0, l.jsx)("div", {
							className: s()(p ? U.bodyAlignCenter : U.bodyNormal),
							children: (0, l.jsxs)("div", {
								className: U.activityDetails,
								children: [e, this.isStreamerOnTypeActivityFeed() ? null : (0, l.jsxs)(_.Z.Child, {
									className: s()((0, w.l)(U, "content", p ? "GameImage" : null != e ? "Images" : "NoImages", t)),
									children: [(0, l.jsxs)(f.P3F, {
										className: s()(null != o && U.openGameProfile),
										onClick: null != o ? e => {
											o(e), null == a || a()
										} : void 0,
										children: [m, g, b, h]
									}), v, d ? null : O, u ? y : null]
								})]
							})
						}), d ? y : null, (0, l.jsx)(G, {
							activity: c
						})]
					})
				}
				constructor(...e) {
					super(...e), V(this, "handleOpenSpotifyTrack", () => {
						let {
							activity: e,
							onOpenSpotifyTrack: t
						} = this.props;
						u()(null != e, "Spotify activity was null"), null == t || t(e)
					}), V(this, "handleOpenSpotifyArtist", e => {
						let {
							activity: t,
							onOpenSpotifyArtist: n,
							user: r
						} = this.props;
						u()(null != t, "Spotify activity was null"), null == n || n(t, r.id, e)
					}), V(this, "handleOpenSpotifyAlbum", () => {
						let {
							activity: e,
							onOpenSpotifyAlbum: t,
							user: n
						} = this.props;
						u()(null != e, "Spotify activity was null"), null == t || t(e, n.id)
					})
				}
			}
			V(H, "Types", Y);
			let J = e => {
				var t, n, r, i, a;
				let o = (0, O.Z)({
					location: "UserActivity",
					applicationId: null != (r = null == (t = e.application) ? void 0 : t.id) ? r : null == (n = e.activity) ? void 0 : n.application_id,
					source: y.m1.UserProfile,
					sourceUserId: e.user.id,
					trackEntryPointImpression: !0
				});
				return (0, l.jsx)(H, (i = B({}, e), a = a = {
					onOpenGameProfileModal: o
				}, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						n.push.apply(n, r)
					}
					return n
				})(Object(a)).forEach(function(e) {
					Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
				}), i))
			};
			J.Types = Y;
			let X = J
		},
		850827: function(e, t, n) {
			n.d(t, {
				Z: () => M
			});
			var r = n(255367);
			n(73800);
			var i = n(120356),
				l = n.n(i),
				a = n(512722),
				o = n.n(a),
				s = n(442837),
				c = n(755721),
				u = n(730749),
				d = n(726542),
				f = n(40851),
				p = n(600164),
				m = n(750154),
				g = n(892001),
				_ = n(594174),
				b = n(374129),
				h = n(639351),
				v = n(503438),
				y = n(802856),
				O = n(387903),
				j = n(606925),
				S = n(719216),
				x = n(429589),
				I = n(636245),
				C = n(697761),
				P = n(611459),
				E = n(544671),
				w = n(757182),
				T = n(910424),
				N = n(981631),
				Z = n(477839),
				A = n(388032),
				D = n(603571),
				L = n(126485);
			let k = e => {
					let {
						user: t,
						color: n,
						look: i,
						activity: l,
						onAction: a
					} = e, o = (0, f.Aq)();
					return (0, r.jsx)(S.Z, {
						user: t,
						color: n,
						look: i,
						activity: l,
						onAction: () => {
							o.dispatch(N.CkL.POPOUT_CLOSE), (0, g.closeUserProfileModal)(), null == a || a()
						}
					}, "custom-activity-button")
				},
				M = (0, u.Z)(e => {
					let {
						activity: t,
						embeddedActivity: n,
						user: i,
						applicationStream: a,
						className: u,
						guildId: f,
						channelId: g,
						source: M,
						color: R = c.zx.Colors.WHITE,
						look: F = c.zx.Looks.OUTLINED,
						type: U,
						onAction: V
					} = e, B = (0, s.e7)([_.default], () => {
						let e = _.default.getCurrentUser();
						return o()(null != e, "UserActivityActions: currentUser cannot be undefined"), e
					}), Y = U === O.Y.STREAM_PREVIEW || null != a, W = (0, v.Z)(t), z = W || Y ? p.Z.Direction.HORIZONTAL : p.Z.Direction.VERTICAL;
					if ((null == t ? void 0 : t.application_id) === Z.bO) {
						var G, H;
						return G = function(e) {
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
						}({}, t), H = H = {
							buttons: [A.intl.string(D.default["Fv/2Oz"])],
							metadata: {
								button_urls: [Z.U8]
							}
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(G, Object.getOwnPropertyDescriptors(H)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var r = Object.getOwnPropertySymbols(e);
								n.push.apply(n, r)
							}
							return n
						})(Object(H)).forEach(function(e) {
							Object.defineProperty(G, e, Object.getOwnPropertyDescriptor(H, e))
						}), t = G, (0, r.jsx)(k, {
							user: i,
							color: R,
							look: F,
							activity: t,
							onAction: V
						})
					}
					let J = z === p.Z.Direction.VERTICAL;
					return (0, r.jsx)(p.Z, {
						grow: 0,
						align: p.Z.Align.STRETCH,
						direction: z,
						wrap: J ? p.Z.Wrap.WRAP : p.Z.Wrap.NO_WRAP,
						className: l()(u, L.buttonsWrapper, J ? L.vertical : L.horizontal),
						children: (() => {
							if ((0, y.Z)(t)) return (0, r.jsx)(j.Z, {
								platform: d.Z.get(N.ABu.XBOX),
								look: F,
								color: R,
								onAction: V,
								Icon: h.Z
							}, "ConnectPlatformActivityButton");
							if ((null == t ? void 0 : t.platform) === N.M7m.PS4 || (null == t ? void 0 : t.platform) === N.M7m.PS5) return (0, r.jsx)(j.Z, {
								look: F,
								color: R,
								platform: d.Z.get(N.ABu.PLAYSTATION),
								onAction: V,
								Icon: b.Z
							}, "ConnectPlatformActivityButton");
							if (W) {
								let e = (0, r.jsx)(E.Z, {
										activity: t,
										user: i,
										guildId: f,
										channelId: g,
										source: M,
										look: F,
										color: R,
										onAction: V
									}, "spotify-activity-sync-button"),
									n = (0, r.jsx)(P.Z, {
										activity: t,
										user: i,
										source: M,
										look: F,
										color: R,
										onAction: V
									}, "spotify-activity-play-button");
								return (0, r.jsxs)(r.Fragment, {
									children: [n, e]
								})
							}
							if ((0, m.dS)(t)) {
								let e = (0, m.rq)(t);
								return null == e ? null : (0, r.jsx)(I.Z, {
									guildId: e.guildId,
									channelId: e.channelId,
									color: R,
									look: F,
									onAction: V
								}, e.channelId)
							}
							return Y ? (0, r.jsx)(T.Z, {
								isCurrentUser: B.id === i.id,
								color: R,
								look: F,
								applicationStream: a,
								onAction: V
							}, "watch-button") : (0, r.jsxs)(r.Fragment, {
								children: [(0, r.jsx)(w.Z, {
									activity: t,
									color: R,
									look: F,
									onAction: V
								}, "watch-button"), (0, r.jsx)(x.Z, {
									activity: t,
									embeddedActivity: n,
									user: i,
									color: R,
									look: F,
									onAction: V
								}, "join-activity-button"), (0, r.jsx)(C.Z, {
									activity: t,
									user: i,
									color: R,
									look: F,
									onAction: V
								}, "notify-button"), (0, r.jsx)(S.Z, {
									user: i,
									color: R,
									look: F,
									activity: t,
									onAction: V
								}, "custom-activity-button")]
							})
						})()
					})
				})
		},
		606925: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(231757),
				a = n(553795),
				o = n(915863),
				s = n(388032),
				c = n(289356);

			function u(e) {
				let {
					platform: t,
					color: n,
					look: u,
					onAction: d,
					Icon: f
				} = e;
				if ((0, i.e7)([a.Z], () => a.Z.getAccounts().some(e => e.type === t.type))) return null;
				let p = null != f ? (0, r.jsx)(f, {
					className: c.platformIcon
				}) : (0, r.jsx)("img", {
					alt: "",
					className: c.platformIcon,
					src: t.icon.whiteSVG
				});
				return (0, r.jsx)(o.Z, {
					onClick: () => {
						null == d || d(), (0, l.Z)({
							platformType: t.type,
							location: "Activity Action"
						})
					},
					color: n,
					look: u,
					fullWidth: !0,
					children: (0, r.jsxs)("div", {
						className: c.flex,
						children: [p, s.intl.format(s.t.XWSHTU, {
							platform: t.name
						})]
					})
				}, "connect-platform-activity")
			}
		},
		719216: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			var r = n(255367);
			n(73800);
			var i = n(763472),
				l = n(49012),
				a = n(591759),
				o = n(915863);

			function s(e) {
				let {
					activity: t,
					color: n,
					user: s,
					look: c,
					onAction: u
				} = e;
				if ((null == t ? void 0 : t.buttons) == null || t.buttons.length < 1) return null;
				async function d(e, t, n) {
					try {
						let r = await (0, i.sd)(e, t);
						if (r.button_urls.length <= n) return;
						let o = r.button_urls[n];
						if ("string" != typeof o) return;
						let s = a.Z.safeParseWithQuery(o);
						if (null == s || null == s.protocol || null == s.hostname) return;
						(0, l.q)({
							href: a.Z.format(s),
							trusted: !1
						})
					} catch (e) {}
				}
				return (0, r.jsx)(r.Fragment, {
					children: t.buttons.map((e, i) => (0, r.jsx)(o.Z, {
						color: n,
						look: c,
						onClick: () => {
							null == u || u(), d(t, s.id, i)
						},
						children: e
					}, "customButton-".concat(i)))
				})
			}
		},
		636245: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(922482),
				a = n(979651),
				o = n(915863),
				s = n(388032),
				c = n(558803);
			let u = e => {
				let {
					guildId: t,
					channelId: n,
					color: u,
					look: d,
					onAction: f
				} = e, p = (0, i.e7)([a.Z], () => a.Z.isInChannel(n), [n]);
				return (0, r.jsx)(o.Z, {
					className: c.button,
					color: u,
					look: d,
					disabled: p,
					onClick: () => {
						null == f || f(), l.AC(t, n)
					},
					fullWidth: !0,
					children: s.intl.string(s.t.ZYO5OD)
				}, "stage")
			}
		},
		697761: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(255367);
			n(73800);
			var i = n(710845),
				l = n(620662),
				a = n(915863),
				o = n(981631),
				s = n(388032);

			function c(e) {
				let {
					activity: t,
					user: n,
					look: c,
					color: u,
					onAction: d
				} = e;
				return (0, l.Z)(t, o.xjy.INSTANCE) ? (0, r.jsx)(a.Z, {
					look: c,
					color: u,
					onClick: () => {
						null == d || d(), new i.Z("UserActivityActions").log("notify", n.id, t)
					},
					fullWidth: !0,
					children: s.intl.string(s.t.vwl1PD)
				}, "notify") : null
			}
		},
		611459: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(255367);
			n(73800);
			var i = n(246841),
				l = n(620662),
				a = n(503438),
				o = n(981631),
				s = n(145131);

			function c(e) {
				let {
					activity: t,
					user: n,
					source: c,
					look: u,
					color: d,
					onAction: f
				} = e;
				return null != t && (0, l.Z)(t, o.xjy.PLAY) && (0, a.Z)(t) ? (0, r.jsx)(i.Z, {
					className: s.button,
					size: s.buttonSize,
					look: u,
					color: d,
					fullWidth: !0,
					activity: t,
					user: n,
					source: c,
					onAction: f
				}, "play") : null
			}
		},
		544671: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(255367);
			n(73800);
			var i = n(557711),
				l = n(620662),
				a = n(503438),
				o = n(981631),
				s = n(145131);

			function c(e) {
				let {
					activity: t,
					user: n,
					guildId: c,
					channelId: u,
					source: d,
					look: f,
					color: p,
					onAction: m
				} = e;
				return null != t && (0, l.Z)(t, o.xjy.SYNC) && (0, a.Z)(t) ? (0, r.jsx)(i.Z, {
					className: s.button,
					size: s.buttonSize,
					look: f,
					color: p,
					user: n,
					activity: t,
					guildId: null != c ? c : void 0,
					channelId: u,
					source: d,
					onAction: m
				}, "sync") : null
			}
		},
		910424: function(e, t, n) {
			n.d(t, {
				Z: () => y
			}), n(388685);
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(481060),
				a = n(572691),
				o = n(287734),
				s = n(872810),
				c = n(40851),
				u = n(102172),
				d = n(199902),
				f = n(592125),
				p = n(585483),
				m = n(915863),
				g = n(981631),
				_ = n(388032),
				b = n(128746);

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

			function v(e, t) {
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

			function y(e) {
				let {
					isCurrentUser: t,
					color: n,
					look: y,
					applicationStream: O,
					onAction: j
				} = e, {
					activeStream: S,
					watchingOtherStream: x
				} = (0, i.cj)([d.Z], () => ({
					activeStream: d.Z.getActiveStreamForApplicationStream(O),
					watchingOtherStream: null != O && d.Z.getAllActiveStreamsForChannel(O.channelId).filter(e => {
						let {
							ownerId: t
						} = e;
						return t !== O.ownerId
					}).length > 0
				})), I = (0, i.e7)([f.Z], () => f.Z.getChannel(null == O ? void 0 : O.channelId)), [C, P] = (0, u.wq)(I), E = (0, c.Aq)(), w = null != S && null != O && S.state !== g.jm8.ENDED && S.ownerId === O.ownerId, T = e => {
					null != O && (null == j || j(), o.default.selectVoiceChannel(O.channelId), w || (0, s.iV)(O, {
						forceMultiple: e
					}), E.dispatch(g.CkL.POPOUT_CLOSE), p.S.dispatch(g.CkL.MODAL_CLOSE), a.Z.popAll())
				};
				if (null == O) return null;
				let N = (0, u.P9)(P);
				t ? N = _.intl.string(_.t.XvBdeX) : w && (N = _.intl.string(_.t.JH1SJy));
				let Z = {
					color: n,
					look: y
				};
				return (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsxs)(m.Z, v(h({
						disabled: t || w || !C,
						onClick: () => T(!1)
					}, Z), {
						fullWidth: !0,
						children: [(0, r.jsx)(l.hGI, {
							size: "md",
							color: "currentColor",
							className: b.streamIcon
						}), N]
					}), "play"), x && !w ? (0, r.jsx)(l.ua7, {
						text: _.intl.string(_.t.wCrzur),
						children: e => (0, r.jsx)(m.Z, v(h(v(h({}, e), {
							onClick: () => {
								var t;
								null == (t = e.onClick) || t.call(e), T(!0)
							}
						}), Z), {
							className: b.iconButton,
							size: b.iconButtonSize,
							children: (0, r.jsx)(l.OgY, {
								size: "xs",
								color: "currentColor",
								className: b.iconSize
							})
						}))
					}) : null]
				})
			}
		},
		628581: function(e, t, n) {
			n.d(t, {
				Z: () => i
			});
			var r = n(388032);

			function i(e, t, n, i) {
				return i ? r.intl.string(r.t["2Ne/Y2"]) : n ? r.intl.string(r.t.FJSZVF) : t ? r.intl.string(r.t["+JQCa2"]) : e ? r.intl.string(r.t.YqAjX1) : r.intl.string(r.t["w4m94+"])
			}
		},
		659580: function(e, t, n) {
			n.d(t, {
				default: () => I
			});
			var r = n(255367);
			n(73800);
			var i = n(990547),
				l = n(442837),
				a = n(46973),
				o = n(481060),
				s = n(846027),
				c = n(410575),
				u = n(906732),
				d = n(213609),
				f = n(821564),
				p = n(453925),
				m = n(967003),
				g = n(632304),
				_ = n(131951),
				b = n(358085),
				h = n(947150),
				v = n(488021),
				y = n(822556),
				O = n(981631),
				j = n(345655),
				S = n(388032),
				x = n(292538);

			function I(e) {
				let {
					onClose: t,
					renderOutputDevices: n = !1,
					renderInputDevices: I = !1,
					renderInputProfiles: C = !1,
					renderInputModes: P = !1,
					renderInputVolume: E = !1,
					renderOutputVolume: w = !1,
					renderDeafen: T = !1,
					minimal: N = !1,
					onSelect: Z,
					appContext: A,
					onInteraction: D
				} = e, {
					analyticsLocations: L
				} = (0, u.ZP)();
				(0, d.Z)({
					type: i.ImpressionTypes.MENU,
					name: i.ImpressionNames.AUDIO_DEVICE_MENU,
					properties: {
						location_stack: L
					}
				});
				let k = (0, y.Z)(A),
					M = (0, h.Z)(L, N),
					R = (0, v.Z)(L, N),
					F = (0, l.e7)([_.Z], () => _.Z.getActiveInputProfile()),
					U = (0, m.Z)(L),
					V = (0, f.Z)(L),
					B = (0, p.Z)(L),
					Y = (0, g.Z)(L),
					W = a.Yn.DEFAULT,
					z = _.Z.isSelfDeaf(W),
					G = (0, l.e7)([_.Z], () => _.Z.getMode()),
					H = G === O.pM4.VOICE_ACTIVITY ? O.pM4.PUSH_TO_TALK : O.pM4.VOICE_ACTIVITY;
				return (0, r.jsx)(c.Z, {
					object: O.qAy.CONTEXT_MENU,
					children: (0, r.jsxs)(o.v2r, {
						onSelect: Z,
						onInteraction: D,
						className: x.menu,
						onClose: t,
						navId: "audio-device-context",
						"aria-label": S.intl.string(S.t.ZR1Ss7),
						children: [I ? M : null, n ? R : null, C ? U : null, !N && P && F !== j._.STUDIO ? (0, r.jsx)(o.kSQ, {
							label: S.intl.string(S.t["pS+K2N"]),
							children: V
						}) : null, (0, r.jsxs)(o.kSQ, {
							children: [E ? B : null, w ? Y : null, N ? (0, r.jsx)(o.Clw, {}) : null, N && T ? (0, r.jsx)(o.S89, {
								id: "deafen",
								label: S.intl.string(S.t.wjcRFR),
								action: () => s.Z.toggleSelfDeaf({
									context: W,
									location: "AudioDeviceMenu"
								}),
								checked: z
							}, "self-deafen") : null, N && I && b.isPlatformEmbedded ? (0, r.jsx)(o.S89, {
								checked: G === O.pM4.PUSH_TO_TALK,
								id: "input-mode",
								label: S.intl.string(S.t.Q8gkVF),
								action: () => s.Z.setMode(H, void 0, void 0, {
									analyticsLocations: L
								}),
								disabled: F === j._.STUDIO
							}) : null, k]
						})]
					})
				})
			}
		},
		415635: function(e, t, n) {
			n.d(t, {
				Z: () => _
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(772848),
				a = n(442837),
				o = n(570140),
				s = n(607070),
				c = n(367907),
				u = n(37091),
				d = n(721264),
				f = n(963838),
				p = n(39127),
				m = n(981631),
				g = n(490650);

			function _(e) {
				let {
					channelId: t,
					guildId: n,
					userId: _,
					containerDimensions: b
				} = e, h = (0, a.e7)([s.Z], () => s.Z.useReducedMotion), [v, y] = i.useState([]), O = v.length < 50;
				i.useEffect(() => {
					function e(e) {
						var r;
						let {
							channelId: i,
							userId: a,
							emoji: o,
							animationType: s,
							animationId: p
						} = e;
						if (null != _ && _ !== a || u.Z.getEnabled() && (0, d.Z)(null != (r = null == o ? void 0 : o.name) ? r : "")) return;
						let g = null != o && null != s && null != p;
						if (i === t && !h && O && g) {
							let e = (0, f._r)(o),
								r = null != o.id && !o.animated,
								i = {
									id: (0, l.Z)(),
									animationType: s,
									animationId: p,
									shouldResize: r,
									url: e,
									userId: a
								};
							y(e => [...e, i]), c.ZP.trackWithMetadata(m.rMx.VOICE_CHANNEL_EFFECT_VIEWED, {
								channel_id: t,
								guild_id: n
							})
						}
					}
					return o.Z.subscribe("VOICE_CHANNEL_EFFECT_SEND", e), () => {
						o.Z.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e)
					}
				}, [t, n, _, h, O]);
				let j = i.useCallback(e => {
					y(t => {
						let n = [...t],
							r = n.findIndex(t => t.id === e);
						return n.splice(r, 1), n
					})
				}, []);
				return h ? null : (0, r.jsx)("div", {
					className: g.effectsWrapper,
					style: {
						width: b.width
					},
					children: (0, r.jsx)("div", {
						className: g.effects,
						children: v.map(e => (0, r.jsx)(p.Z, {
							containerDimensions: b,
							effect: e,
							onComplete: j
						}, e.id))
					})
				})
			}
		},
		575175: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(846027),
				a = n(240872),
				o = n(503856),
				s = n(388032);

			function c(e, t, c) {
				return t && (0, o.p)() ? void(0, i.ZDy)(async () => {
					let {
						default: e
					} = await n.e("41281").then(n.bind(n, 669732));
					return t => (0, r.jsx)(e, function(e) {
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
					}({}, t))
				}) : t ? void a.Z.show({
					title: s.intl.string(s.t.FJSZVF),
					body: s.intl.string(s.t.etJjgY)
				}) : e ? void a.Z.show({
					title: s.intl.string(s.t["+JQCa2"]),
					body: s.intl.string(s.t.hsNm7e)
				}) : void l.Z.toggleSelfMute({
					location: c
				})
			}
		},
		947150: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(481060),
				a = n(846027),
				o = n(72897),
				s = n(131951),
				c = n(388032);

			function u(e) {
				var t;
				let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					u = (0, o.zX)({
						location: "useInputAudioDeviceItems"
					}),
					d = (0, i.e7)([s.Z], s.Z.getInputDeviceId),
					f = null == (t = u.find(e => {
						let {
							id: t
						} = e;
						return t === d
					})) ? void 0 : t.name,
					p = u.map(t => {
						let {
							id: n,
							disabled: i,
							name: o
						} = t;
						return (0, r.jsx)(l.k5B, {
							id: "input-".concat(n),
							group: "input-devices",
							disabled: i,
							label: o,
							checked: n === d,
							action: () => a.Z.setInputDevice(n, {
								analyticsLocations: e
							})
						}, "input-".concat(n))
					});
				return n ? (0, r.jsx)(l.sNh, {
					id: "input-devices",
					label: c.intl.string(c.t.ElbIXF),
					subtext: f,
					children: p
				}) : (0, r.jsx)(l.kSQ, {
					label: c.intl.string(c.t.ElbIXF),
					children: p
				})
			}
		},
		488021: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(481060),
				a = n(846027),
				o = n(72897),
				s = n(131951),
				c = n(388032);

			function u(e) {
				var t;
				let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					u = (0, o.rB)({
						location: "useOutputAudioDeviceItems"
					}),
					d = (0, i.e7)([s.Z], s.Z.getOutputDeviceId),
					f = null == (t = u.find(e => {
						let {
							id: t
						} = e;
						return t === d
					})) ? void 0 : t.name,
					p = u.map(t => {
						let {
							id: n,
							disabled: i,
							name: o
						} = t;
						return (0, r.jsx)(l.k5B, {
							group: "output-devices",
							id: "output-".concat(n),
							disabled: i,
							label: o,
							checked: n === d,
							action: () => a.Z.setOutputDevice(n, {
								analyticsLocations: e
							})
						}, "output-".concat(n))
					});
				return n ? (0, r.jsx)(l.sNh, {
					id: "output-devices",
					label: c.intl.string(c.t["6Ww0iI"]),
					subtext: f,
					children: p
				}) : (0, r.jsx)(l.kSQ, {
					label: c.intl.string(c.t["6Ww0iI"]),
					children: p
				})
			}
		},
		822556: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(230711),
				a = n(549879),
				o = n(906732),
				s = n(981631),
				c = n(388032);

			function u(e) {
				let {
					analyticsLocations: t
				} = (0, o.ZP)();
				return (0, r.jsx)(i.sNh, {
					id: "voice-settings",
					label: c.intl.string(c.t.NiTd0d),
					action: () => {
						l.Z.open(s.oAB.VOICE, null, {
							analyticsLocations: t,
							appContext: e
						}), (0, a.i)(e)
					},
					icon: i.ewm
				})
			}
		},
		718805: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var r = n(569545),
				i = n(102172),
				l = n(981631),
				a = n(388032);

			function o(e, t, n, o) {
				return null == t || t.state === l.jm8.ENDED || (0, r.V9)(t) !== (0, r.V9)(e) ? (0, i.P9)(o) : t.ownerId === n ? a.intl.string(a.t.XvBdeX) : a.intl.string(a.t.JH1SJy)
			}
		},
		701362: function(e, t, n) {
			n.d(t, {
				Z: () => w
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(442837),
				s = n(481060),
				c = n(717881),
				u = n(616780),
				d = n(850827),
				f = n(576855),
				p = n(258609),
				m = n(199902),
				g = n(314897),
				_ = n(430824),
				b = n(496675),
				h = n(158776),
				v = n(979651),
				y = n(626135),
				O = n(102172),
				j = n(687516),
				S = n(718805),
				x = n(871118),
				I = n(981631),
				C = n(388032),
				P = n(768780);
			class E extends i.PureComponent {
				componentDidMount() {
					let {
						user: e,
						streamApplication: t
					} = this.props;
					y.default.track(I.rMx.OPEN_POPOUT, {
						type: "Stream Preview",
						other_user_id: e.id,
						application_id: null != t ? t.id : null,
						application_name: null != t ? t.name : null,
						game_id: null != t ? t.id : null,
						is_streaming: !0
					})
				}
				renderPreview(e) {
					let {
						onWatch: t,
						activeStream: n,
						currentUserId: i,
						canWatch: l,
						unavailableReason: a
					} = this.props;
					return (0, r.jsxs)(s.P3F, {
						onClick: t,
						className: P.previewContainer,
						children: [(0, r.jsx)(x.Z, {
							className: P.previewImage,
							stream: e
						}), l ? (0, r.jsx)("div", {
							className: P.previewHover,
							children: (0, r.jsx)(s.Text, {
								variant: "text-sm/normal",
								color: "none",
								className: P.white,
								children: (0, S.Z)(e, n, i, a)
							})
						}) : null]
					})
				}
				render() {
					let {
						activity: e,
						user: t,
						stream: n,
						previewIsOpen: i,
						onAction: l,
						hideTip: o
					} = this.props;
					return null == n ? null : (0, r.jsx)("div", {
						className: a()(P.streamPreviewWrapper, {
							[P.mounted]: i
						}),
						children: (0, r.jsxs)("div", {
							className: P.streamPreview,
							children: [this.renderPreview(n), (0, r.jsxs)("div", {
								className: P.body,
								children: [null != e ? (0, r.jsx)(c.Z, {
									hideHeader: !0,
									type: c.P.STREAM_PREVIEW,
									activity: e,
									user: t,
									guildId: n.guildId,
									channelId: n.channelId,
									analyticsParams: {
										location: {
											page: I.ZY5.GO_LIVE_MODAL,
											section: I.jXE.STREAM_VIEWER_POPOUT
										}
									},
									onAction: l
								}) : (0, r.jsx)(d.Z, {
									type: c.P.STREAM_PREVIEW,
									applicationStream: n,
									user: t,
									guildId: n.guildId,
									channelId: n.channelId,
									className: P.activityActions,
									color: P.watchButton,
									onAction: l
								}), !o && (0, r.jsx)(f.Z, {
									type: f.Z.Types.INLINE,
									className: P.protip,
									children: __OVERLAY__ ? C.intl.string(C.t["YRdw7+"]) : C.intl.string(C.t.CCTgbG)
								})]
							})]
						})
					})
				}
			}

			function w(e) {
				var t, n, {
						user: l,
						channel: a
					} = e,
					s = function(e, t) {
						if (null == e) return {};
						var n, r, i = function(e, t) {
							if (null == e) return {};
							var n, r, i = {},
								l = Object.keys(e);
							for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
							return i
						}(e, t);
						if (Object.getOwnPropertySymbols) {
							var l = Object.getOwnPropertySymbols(e);
							for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
						}
						return i
					}(e, ["user", "channel"]);
				let [c, d] = (0, o.Wu)([v.Z, _.Z, b.Z, p.Z], () => (0, O.p9)(a, v.Z, _.Z, b.Z, p.Z)), f = (0, o.e7)([m.Z], () => m.Z.getStreamForUser(l.id, a.getGuildId())), y = (0, o.e7)([m.Z], () => m.Z.getActiveStreamForApplicationStream(f)), S = (0, o.e7)([g.default], () => g.default.getId()), x = (0, j.Cf)(f), I = (0, o.e7)([h.Z], () => (0, j.Um)(f, h.Z)), C = i.useMemo(() => ({
					[a.guild_id]: [l.id]
				}), [a.guild_id, l.id]);
				return (0, u.$)(C), (0, r.jsx)(E, (t = function(e) {
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
				}({}, s), n = n = {
					canWatch: c,
					unavailableReason: d,
					user: l,
					streamApplication: x,
					stream: f,
					activeStream: y,
					currentUserId: S,
					activity: I
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
		},
		707409: function(e, t, n) {
			n.d(t, {
				CI: () => l.CI,
				J6: () => l.J6,
				ZP: () => a
			});
			var r = n(255367);
			n(73800);
			var i = n(144830),
				l = n(379649);
			let a = (0, i.Z)(function(e) {
				let {
					children: t,
					className: n
				} = e;
				return (0, r.jsx)("span", {
					className: n,
					children: t
				})
			})
		},
		850020: function(e, t, n) {
			n.d(t, {
				K: () => i
			});
			var r = n(73800);

			function i(e) {
				let {
					user: t
				} = e;
				return (0, r.useMemo)(() => {
					if ((null == t ? void 0 : t.nameplate) != null) return t.nameplate
				}, [t])
			}
		},
		457165: function(e, t, n) {
			n.d(t, {
				i: () => a
			});
			var r = n(255367);
			n(73800);
			var i = n(481060),
				l = n(981631);

			function a() {
				(0, i.ZDy)(async () => {
					let {
						default: e
					} = await n.e("10165").then(n.bind(n, 166335));
					return t => (0, r.jsx)(e, function(e) {
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
						analyticsSource: l.Sbl.VOICE_FILTERS,
						analyticsLocation: {
							section: l.jXE.VOICE_FILTERS_UPSELL_MODAL,
							object: l.qAy.BUTTON_CTA
						}
					}, t))
				})
			}
		},
		651941: function(e, t, n) {
			n.d(t, {
				Z: () => d
			}), n(410992), n(227481), n(730884), n(20464), n(341884), n(364341), n(629680), n(505025), n(918970), n(121784), n(644351), n(146733), n(388685);
			var r, i = n(442837),
				l = n(974167),
				a = n(570140),
				o = n(709054);

			function s(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			let c = {};
			class u extends(r = i.ZP.PersistedStore) {
				initialize(e) {
					var t;
					c = null != (t = null == e ? void 0 : e.users) ? t : {}
				}
				getState() {
					return {
						users: c
					}
				}
				getKeyTrustedAt(e, t) {
					var n;
					let r = (0, l.MK)(t);
					return null == (n = c[e]) ? void 0 : n[r]
				}
				isKeyVerified(e, t) {
					return null != this.getKeyTrustedAt(e, t)
				}
				getUserIds() {
					return o.default.keys(c)
				}
				getUserVerifiedKeys(e) {
					return c[e]
				}
			}
			s(u, "displayName", "VerifiedKeyStore"), s(u, "persistKey", "VerifiedKeyStore");
			let d = new u(a.Z, {
				SECURE_FRAMES_VERIFIED_KEY_CREATE: function(e) {
					let {
						userId: t,
						key: n
					} = e, r = function(e) {
						var t;
						let n = null != (t = c[e]) ? t : {};
						return c[e] = n, n
					}(t), i = new Uint8Array(n);
					r[(0, l.MK)(i)] = Date.now()
				},
				SECURE_FRAMES_VERIFIED_KEY_DELETE: function(e) {
					let {
						userId: t,
						serializedKey: n
					} = e, r = c[t];
					if (null == r) return !1;
					let i = delete r[n],
						l = !1;
					return 0 === Object.keys(r).length && (delete c[t], l = !0), i || l
				},
				SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function(e) {
					let {
						userId: t
					} = e;
					return null != c[t] && delete c[t]
				}
			})
		},
		246841: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(255367);
			n(73800);
			var i = n(755721),
				l = n(481060),
				a = n(395361),
				o = n(829820),
				s = n(862863);

			function c(e) {
				let {
					activity: t,
					user: n,
					source: c,
					className: u,
					size: d,
					look: f,
					color: p,
					fullWidth: m,
					onAction: g
				} = e, {
					label: _,
					tooltip: b,
					loading: h,
					disabled: v,
					onClick: y
				} = (0, o.Ih)(t, n, c), O = () => {
					null == g || g(), y()
				};
				return (0, r.jsx)(l.ua7, {
					text: b,
					children: e => {
						let {
							onMouseEnter: t,
							onMouseLeave: n
						} = e;
						return (0, r.jsxs)(i.zx, {
							className: u,
							innerClassName: s.playButtonInner,
							size: d,
							look: f,
							color: p,
							fullWidth: m,
							onClick: O,
							onMouseEnter: t,
							onMouseLeave: n,
							disabled: v,
							submitting: h,
							children: [(0, r.jsx)(a.Z, {
								width: 16,
								height: 16
							}), _]
						})
					}
				})
			}
		},
		557711: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var r = n(255367);
			n(73800);
			var i = n(120356),
				l = n.n(i),
				a = n(755721),
				o = n(481060),
				s = n(5192),
				c = n(829820),
				u = n(862863);

			function d(e) {
				let {
					activity: t,
					user: n,
					channelId: i,
					guildId: d,
					source: f,
					size: p,
					look: m,
					color: g,
					className: _,
					onAction: b
				} = e, {
					tooltip: h,
					loading: v,
					disabled: y,
					onClick: O
				} = (0, c.Fe)(t, n, f, s.ZP.getNickname(d, i, n)), j = () => {
					null == b || b(), O()
				};
				return (0, r.jsx)(o.ua7, {
					text: h,
					children: e => {
						let {
							onMouseEnter: n,
							onMouseLeave: i
						} = e;
						return (0, r.jsx)(a.zx, {
							size: p,
							className: l()(u.syncButton, _),
							innerClassName: u.syncButtonInner,
							look: m,
							color: g,
							onClick: j,
							onMouseEnter: n,
							onMouseLeave: i,
							disabled: y,
							submitting: v,
							"aria-label": null != h ? h : t.name,
							children: (0, r.jsx)(o.iOO, {
								size: "xs",
								color: "currentColor"
							})
						})
					}
				})
			}
		},
		321614: function(e, t, n) {
			n.d(t, {
				R: () => o,
				c: () => s
			});
			var r = n(818083),
				i = n(984134),
				l = n(345655);
			let a = (0, r.B)({
				kind: "user",
				id: "2025-05_input_profiles_experiment_web",
				label: "Audio input profiles (studio mode)",
				defaultConfig: {
					enabledInputProfiles: []
				},
				treatments: [{
					id: 1,
					label: "Show Voice Isolation, Studio, and Custom",
					config: {
						enabledInputProfiles: [l._.VOICE_ISOLATION, l._.STUDIO, l._.CUSTOM]
					}
				}]
			});

			function o(e) {
				let {
					location: t,
					autoTrackExposure: n = !0
				} = e, {
					isInHoldout: r
				} = i.Y.getCurrentConfig({
					location: t
				}, {
					autoTrackExposure: n
				});
				return a.getCurrentConfig({
					location: t
				}, {
					disable: r,
					autoTrackExposure: n
				})
			}

			function s(e) {
				let {
					location: t,
					autoTrackExposure: n = !0
				} = e, {
					isInHoldout: r
				} = i.Y.useExperiment({
					location: t
				}, {
					autoTrackExposure: n
				});
				return a.useExperiment({
					location: t
				}, {
					disable: r,
					autoTrackExposure: n
				})
			}
		},
		453925: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(481060),
				a = n(846027),
				o = n(131951),
				s = n(36703),
				c = n(388032);

			function u(e) {
				let t = (0, i.e7)([o.Z], () => (0, s.P)(o.Z.getInputVolume()));
				return (0, r.jsx)(l.II_, {
					id: "input",
					label: c.intl.string(c.t.OX2Bnp),
					control: (n, i) => {
						var o, u;
						return (0, r.jsx)(l._wy, (o = function(e) {
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
						}({}, n), u = u = {
							ref: i,
							value: t,
							onChange: t => a.Z.setInputVolume((0, s.A)(t), {
								analyticsLocations: e
							}),
							"aria-label": c.intl.string(c.t.OX2Bnp)
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(u)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var r = Object.getOwnPropertySymbols(e);
								n.push.apply(n, r)
							}
							return n
						})(Object(u)).forEach(function(e) {
							Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(u, e))
						}), o))
					}
				})
			}
		},
		821564: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(481060),
				a = n(846027),
				o = n(131951),
				s = n(358085),
				c = n(981631),
				u = n(388032);

			function d(e) {
				let t = !s.isPlatformEmbedded,
					n = (0, i.e7)([o.Z], () => o.Z.getMode()),
					d = (t, i) => (0, r.jsx)(l.k5B, {
						id: t,
						group: "input-modes",
						label: i,
						checked: n === t,
						action: () => a.Z.setMode(t, void 0, void 0, {
							analyticsLocations: e
						})
					}, t);
				return [d(c.pM4.VOICE_ACTIVITY, u.intl.string(u.t.cHCEOD)), d(c.pM4.PUSH_TO_TALK, t ? u.intl.string(u.t["1AINrK"]) : u.intl.string(u.t.Q8gkVF))]
			}
		},
		967003: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(481060),
				a = n(846027),
				o = n(131951),
				s = n(321614),
				c = n(345655),
				u = n(388032);

			function d(e) {
				let {
					enabledInputProfiles: t
				} = (0, s.c)({
					location: "useInputProfileItems"
				}), n = {
					[c._.VOICE_ISOLATION]: u.intl.string(u.t.cjPbpa),
					[c._.STUDIO]: u.intl.string(u.t.VZPR0d),
					[c._.CUSTOM]: u.intl.string(u.t["N/PQjo"])
				}, d = (0, i.e7)([o.Z], () => o.Z.getActiveInputProfile()), f = t.map(t => (0, r.jsx)(l.k5B, {
					id: t,
					group: "input-profiles",
					label: n[t],
					checked: t === (null != d ? d : c._.CUSTOM),
					action: () => a.Z.setActiveInputProfile(t, {
						analyticsLocations: e
					})
				}, t));
				return (0, r.jsx)(l.sNh, {
					id: "input-profiles",
					label: u.intl.string(u.t.LM3U3t),
					subtext: n[null != d ? d : c._.CUSTOM],
					children: f
				})
			}
		},
		632304: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(481060),
				a = n(846027),
				o = n(131951),
				s = n(36703),
				c = n(358085),
				u = n(388032);

			function d(e) {
				let t = (0, i.e7)([o.Z], () => (0, s.P)(o.Z.getOutputVolume()));
				return (0, r.jsx)(l.II_, {
					id: "output",
					label: u.intl.string(u.t.eATD2N),
					control: (n, i) => {
						var o, d;
						return (0, r.jsx)(l._wy, (o = function(e) {
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
						}({}, n), d = d = {
							ref: i,
							value: t,
							maxValue: c.isPlatformEmbedded ? 200 : 100,
							onChange: t => a.Z.setOutputVolume((0, s.A)(t), {
								analyticsLocations: e
							}),
							"aria-label": u.intl.string(u.t.eATD2N)
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(d)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var r = Object.getOwnPropertySymbols(e);
								n.push.apply(n, r)
							}
							return n
						})(Object(d)).forEach(function(e) {
							Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(d, e))
						}), o))
					}
				})
			}
		},
		470956: function(e, t, n) {
			n.d(t, {
				Es: () => b,
				Eu: () => v,
				bt: () => h
			}), n(388685), n(539854);
			var r = n(73800),
				i = n(392711),
				l = n(442837),
				a = n(413523),
				o = n(358221),
				s = n(189786),
				c = n(314897),
				u = n(592125),
				d = n(271383),
				f = n(878884),
				p = n(19780),
				m = n(594174),
				g = n(979651),
				_ = n(823379);

			function b(e, t) {
				let n = (0, l.e7)([f.Z, p.Z], () => e === p.Z.getChannelId() ? f.Z.getDesyncedVoiceStates() : null),
					a = (0, l.Wu)([o.Z], () => null == e ? [] : [...o.Z.getGuildRingingUsers(e)]),
					c = (0, l.Wu)([m.default], () => a.map(e => m.default.getUser(e)).filter(_.lm)),
					g = (0, l.e7)([u.Z], () => u.Z.getBasicChannel(e)),
					b = r.useMemo(() => c.map(e => ({
						voiceState: new s.Z(e.id),
						user: e,
						member: (null == g ? void 0 : g.guild_id) != null ? d.ZP.getMember(null == g ? void 0 : g.guild_id, e.id) : null,
						nick: e.globalName,
						comparator: e.globalName,
						_isPlaceholder: !1
					})), [c, null == g ? void 0 : g.guild_id]);
				return r.useMemo(() => (function(e, t, n) {
					if ((null == e || 0 === e.length) && 0 === n.length) return t;
					let r = [],
						l = new Set;
					for (let e of t) r.push(e), l.add(e.user.id);
					return null == e || e.forEach(e => {
						r.splice((0, i.sortedIndexBy)(r, e, e => {
							let {
								comparator: t
							} = e;
							return t
						}), 0, e)
					}), n.length > 0 && n.forEach(e => {
						l.has(e.user.id) || r.splice((0, i.sortedIndexBy)(r, e, e => {
							let {
								comparator: t
							} = e;
							return t
						}), 0, e)
					}), r
				})(n, t, b), [n, t, b])
			}

			function h(e, t) {
				let n = (0, l.e7)([f.Z, p.Z], () => e === p.Z.getChannelId() ? f.Z.getDesyncedParticipants() : null);
				return r.useMemo(() => (function(e, t) {
					if (null == e || 0 === e.length) return t;
					let n = [...t];
					return e.forEach(e => {
						n.splice((0, i.sortedIndexBy)(n, e, e => (0, a.Yr)(e)), 0, e)
					}), n
				})(n, t), [n, t])
			}

			function v(e, t) {
				let n = (0, l.e7)([c.default], () => c.default.getId() === t),
					i = (0, l.e7)([p.Z], () => p.Z.getChannelId()),
					a = r.useRef(null),
					[o, s] = r.useState(!1),
					[u, d] = r.useState(!1),
					f = (0, l.e7)([p.Z, g.Z], () => null != t && null != e && p.Z.getChannelId() === e && null != g.Z.isInChannel(e, t) && p.Z.isUserConnected(t)),
					m = (0, l.e7)([p.Z, g.Z], () => null != t && null != e && p.Z.getChannelId() === e && null != g.Z.isInChannel(e, t) && !p.Z.isUserConnected(t));
				return r.useEffect(() => {
					f && d(!0)
				}, [f]), r.useEffect(() => {
					i !== e && d(!1)
				}, [e, i]), r.useEffect(() => (m && null == a.current ? a.current = setTimeout(() => {
					a.current = null, s(!0)
				}, 250) : (clearTimeout(a.current), a.current = null, s(!1)), () => {
					clearTimeout(a.current), a.current = null
				}), [m]), !n && u && o
			}
		},
		597998: function(e, t, n) {
			n.d(t, {
				ZP: () => M,
				eJ: () => L,
				nm: () => k
			}), n(539854), n(997841), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(442837),
				s = n(481060),
				c = n(434650),
				u = n(40851),
				d = n(456100),
				f = n(657305),
				p = n(367907),
				m = n(906732),
				g = n(522651),
				_ = n(795318),
				b = n(194082),
				h = n(925329),
				v = n(340044),
				y = n(880395),
				O = n(314897),
				j = n(592125),
				S = n(979651),
				x = n(574254),
				I = n(374129),
				C = n(639351),
				P = n(630388),
				E = n(51144),
				w = n(981631),
				T = n(354459),
				N = n(927923),
				Z = n(388032),
				A = n(850999);

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
			let L = e => {
				let {
					children: t,
					collapsed: n = !1,
					className: i
				} = e;
				return (0, r.jsx)("div", {
					className: a()(i, A.list, n ? A.listCollapse : A.listDefault),
					role: "group",
					children: t
				})
			};

			function k(e) {
				let {
					className: t,
					mute: n,
					localMute: i,
					localVideoDisabled: l,
					serverMute: o,
					deaf: c,
					serverDeaf: u,
					collapsed: p,
					video: m,
					isStreaming: g,
					disabled: _,
					isWatching: h,
					iconClassName: v,
					embeddedApplication: y,
					otherClientSessionType: O,
					voicePlatform: j,
					application: S,
					guildId: x,
					channelId: E,
					user: D,
					disconnected: L
				} = e, {
					enabled: k
				} = d.c.getCurrentConfig({
					location: "VoiceUserIcons"
				}, {
					autoTrackExposure: !0
				});
				if (p || _) return null;
				let M = [],
					U = (0, r.jsx)(F, {
						iconClassName: v,
						mute: n,
						localMute: i,
						serverMute: o,
						deaf: c,
						serverDeaf: u
					});
				m && (l ? M.push((0, r.jsx)(s.DY3, {
					className: A.iconSpacing,
					text: Z.intl.string(Z.t["PXMZ//"]),
					children: (0, r.jsx)(s.Amn, {
						size: "md",
						color: "currentColor",
						className: a()(A.icon, v),
						colorClass: A.strikethrough
					})
				}, "video")) : M.push((0, r.jsx)(s.DY3, {
					className: A.iconSpacing,
					text: Z.intl.string(Z.t.FlNoSU),
					children: (0, r.jsx)(s.Odl, {
						size: "md",
						color: "currentColor",
						className: a()(A.icon, v)
					})
				}, "video"))), L && M.push((0, r.jsx)(s.DY3, {
					className: A.iconSpacing,
					text: Z.intl.string(Z.t.HFwRpq),
					children: (0, r.jsx)(s.P4T, {
						className: a()(A.icon, v),
						color: s.TVs.colors.STATUS_WARNING_BACKGROUND
					})
				}, "disconnected"));
				let V = k ? s.iWm : s.nG3;
				null != y && M.push((0, r.jsx)(s.DY3, {
					text: (0, f.Z)(y.name),
					className: A.iconSpacing,
					children: (0, r.jsx)(V, {
						size: "md",
						color: "currentColor",
						className: a()(A.icon, v)
					})
				}, "activity")), O === N.YE.XBOX || j === T.wR.XBOX ? M.push((0, r.jsx)("div", {
					className: A.iconSpacing,
					children: (0, r.jsx)(C.Z, {
						className: a()(A.icon, v)
					})
				}, "xbox")) : (O === N.YE.PLAYSTATION || j === T.wR.PLAYSTATION) && M.push((0, r.jsx)("div", {
					className: A.iconSpacing,
					children: (0, r.jsx)(I.Z, {
						className: a()(A.icon, v)
					})
				}, "playstation")), h && M.push((0, r.jsx)(s.DY3, {
					className: A.iconSpacing,
					text: Z.intl.string(Z.t.JH1SJy),
					children: (0, r.jsx)(s.tEF, {
						size: "xs",
						color: "currentColor",
						className: a()(A.icon, v)
					})
				}, "watch")), g && M.push((0, r.jsx)("div", {
					className: a()(A.iconSpacing, A.liveIconSpacing),
					children: (0, r.jsx)(b.ZP, {
						size: b.ZP.Sizes.SMALL
					})
				}, "stream"));
				let B = null != S && !(0, P.yE)(S.flags, w.udG.EMBEDDED);
				return 0 !== M.length || null != U || B ? (0, r.jsxs)("div", {
					className: a()(A.icons, t),
					children: [(0, r.jsxs)("div", {
						className: A.iconGroup,
						children: [U, M]
					}), B && (0, r.jsx)("div", {
						className: A.iconGroup,
						children: (0, r.jsx)(R, {
							application: S,
							iconClassName: v,
							guildId: x,
							channelId: E,
							userId: D.id
						}, "".concat(D.id, "-game"))
					})]
				}) : null
			}
			let M = i.forwardRef(function(e, t) {
				var n, {
						avatarContainerClass: l = A.avatarContainer,
						userNameClassName: c = A.usernameFont,
						size: d = w.ipw.SMALL,
						selected: f = !1,
						disabled: p = !1,
						isOverlay: b = !1
					} = e,
					h = function(e, t) {
						if (null == e) return {};
						var n, r, i = function(e, t) {
							if (null == e) return {};
							var n, r, i = {},
								l = Object.keys(e);
							for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
							return i
						}(e, t);
						if (Object.getOwnPropertySymbols) {
							var l = Object.getOwnPropertySymbols(e);
							for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
						}
						return i
					}(e, ["avatarContainerClass", "userNameClassName", "size", "selected", "disabled", "isOverlay"]);
				let {
					onClick: I,
					onKeyDown: C,
					onDoubleClick: P,
					onContextMenu: N,
					onMouseLeave: L,
					onMouseDown: M,
					priority: R,
					speaking: F,
					collapsed: U,
					mute: V,
					serverMute: B,
					guildId: Y,
					nick: W,
					isGuest: z,
					flipped: G,
					className: H,
					overlap: J,
					"aria-label": X,
					ringing: q,
					user: K,
					channelId: Q
				} = h, {
					parentAnalyticsLocation: $
				} = (0, m.ZP)(), ee = (0, u.bp)(), et = null != Q ? j.Z.getChannel(Q) : null, en = (0, o.e7)([O.default, S.Z], () => S.Z.isInChannel(Q, O.default.getId())), [er, ei] = i.useState(!1);
				return i.useEffect(() => {
					let e = !1,
						t = () => {
							e !== x.Z.isOpen() && ((e = x.Z.isOpen()) || ei(!1))
						};
					return x.Z.addChangeListener(t), () => x.Z.removeChangeListener(t)
				}, []), (0, r.jsx)(s.kL8, {
					ref: t,
					className: a()(H, {
						[A.voiceUser]: !0,
						[A.overlap]: J,
						[A.selected]: f,
						[A.clickable]: null != I,
						[A.userSmall]: d === w.ipw.SMALL,
						[A.userLarge]: d === w.ipw.LARGE,
						[A.disabled]: !f && p,
						[A.ringing]: q
					}),
					onClick: e => {
						null == I || I(e, K)
					},
					onDoubleClick: e => {
						null == P || P(e, K)
					},
					onContextMenu: e => {
						null == N || N(e, K)
					},
					onMouseLeave: e => {
						null == L || L(e, K)
					},
					onMouseDown: e => {
						null == M || M(e, K)
					},
					onKeyDown: C,
					"aria-label": null != (n = null != X ? X : W) ? n : K.username,
					focusProps: {
						offset: {
							right: 4
						}
					},
					children: (0, r.jsxs)("div", {
						className: a()(A.content, {
							[A.flipped]: G
						}),
						children: [R && !U ? (0, r.jsx)(s.ua7, {
							text: Z.intl.string(Z.t.BVK71t),
							children: e => (0, r.jsx)("div", D({
								className: a()(A.iconPriortySpeaker, {
									[A.iconPriortySpeakerSpeaking]: !V && !B && F
								})
							}, e))
						}) : null, (0, r.jsx)("div", {
							className: a()(l, A.avatar, {
								[A.avatarLarge]: d === w.ipw.LARGE,
								[A.avatarSmall]: d === w.ipw.SMALL,
								[A.avatarSpeaking]: F
							}),
							style: {
								backgroundImage: "url(".concat(K.getAvatarURL(Y, d === w.ipw.LARGE ? 38 : 24), ")")
							}
						}), function() {
							var e, t;
							let n = (0, r.jsxs)("div", {
									className: a()(c, {
										[A.username]: !0,
										[A.usernameSpeaking]: !V && !B && F
									}),
									children: [null != W ? W : E.ZP.getName(K), z ? (0, r.jsxs)("span", {
										className: A.guestSuffix,
										children: ["\xa0", Z.intl.string(Z.t["pFO/Pj"])]
									}) : ""]
								}),
								i = {
									primaryGuild: K.primaryGuild,
									userId: K.id,
									contextGuildId: Y,
									isOverlay: b,
									disableTooltip: !0,
									className: a()(A.clanTag, b && A.isOverlay),
									profileViewedAnalytics: {
										source: b ? w.jXE.OVERLAY : w.Sbl.VOICE_PANEL
									}
								};
							return !U || b ? (0, r.jsx)(v.Z, (e = D({}, i), t = t = {
								children: n
							}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
								var n = Object.keys(e);
								if (Object.getOwnPropertySymbols) {
									var r = Object.getOwnPropertySymbols(e);
									n.push.apply(n, r)
								}
								return n
							})(Object(t)).forEach(function(n) {
								Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
							}), e)) : null
						}(), (0, r.jsx)(k, D({
							disabled: p
						}, h)), !U && en ? (0, r.jsx)(s.DY3, {
							text: Z.intl.string(Z.t["+1H47u"]),
							className: a()(A.optionsButtonContainer, {
								[A.optionsContainerActive]: er
							}),
							children: (0, r.jsx)(s.P3F, {
								className: a()(A.optionsButton, {
									[A.optionsActive]: er
								}),
								onClick: function(e) {
									null != Y && null != et && ((0, g.v)($, g.d.MORE), ei(!0), (0, y.D)(e, K, et, {
										context: ee
									}, (e, t) => {
										(0, _.o)({
											menuName: e,
											menuItemProps: t,
											entrypoint: T.A5.THREE_DOT,
											location: $,
											targetUserId: K.id
										})
									}))
								},
								children: (0, r.jsx)(s.xhG, {
									size: "md",
									className: A.icon
								})
							})
						}) : null]
					})
				})
			});

			function R(e) {
				let {
					application: t,
					iconClassName: n,
					guildId: l,
					channelId: o,
					userId: u
				} = e, [d, f] = i.useState(!1), m = (0, c.O)(e => f(e));
				return i.useEffect(() => {
					d && p.ZP.trackWithMetadata(w.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
						channel_id: o,
						guild_id: l,
						user_id: u
					})
				}, [t.id, o, l, u, d]), (0, r.jsx)(s.DY3, {
					text: Z.intl.formatToPlainString(Z.t.Sq9xJy, {
						game: t.name
					}),
					"aria-label": Z.intl.formatToPlainString(Z.t.Sq9xJy, {
						game: t.name
					}),
					className: A.iconSpacing,
					children: (0, r.jsx)("div", {
						ref: m,
						children: (0, r.jsx)(h.Z, {
							className: a()(A.icon, n),
							game: t,
							size: h.Z.Sizes.XSMALL,
							onMouseEnter: () => {
								p.ZP.trackWithMetadata(w.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
									channel_id: o,
									guild_id: l,
									game_name: t.name,
									user_id: u
								})
							}
						})
					})
				})
			}

			function F(e) {
				let {
					iconClassName: t,
					mute: n,
					localMute: i,
					serverMute: l,
					deaf: o,
					serverDeaf: c
				} = e, u = [];
				if (n) {
					let e;
					e = l || i ? s.v0G : s.nRN;
					let n = (0, r.jsx)(e, {
						className: a()(A.icon, t, {
							[A.iconServer]: l
						}),
						color: "currentColor"
					});
					u.push((0, r.jsx)(s.DY3, {
						text: i ? Z.intl.string(Z.t.Q8Uzoa) : l ? Z.intl.string(Z.t.uLddbW) : Z.intl.string(Z.t.tjtv3N),
						className: A.iconSpacing,
						children: n
					}, "mute"))
				}
				if (c || o) {
					let e = c ? s.Vm4 : s.wE8,
						n = (0, r.jsx)(e, {
							className: a()(A.icon, t, {
								[A.iconServer]: c
							}),
							color: "currentColor"
						});
					u.push((0, r.jsx)(s.DY3, {
						className: A.iconSpacing,
						text: c ? Z.intl.string(Z.t.btxSdH) : Z.intl.string(Z.t.NjmiOD),
						children: n
					}, "deaf"))
				}
				return 0 === u.length ? null : u
			}
		},
		967021: function(e, t, n) {
			n.d(t, {
				HM: () => i,
				J_: () => l
			});
			let r = (0, n(818083).B)({
				kind: "user",
				id: "2025-05_flamingo_prefetch",
				label: "Flamingo Prefetch (Download Experiments)",
				defaultConfig: {
					isPrefetchEnabled: !1,
					isDownloadIconEnabled: !1
				},
				treatments: [{
					id: 1,
					label: "Prefetch (Download on Popout)",
					config: {
						isPrefetchEnabled: !0,
						isDownloadIconEnabled: !1
					}
				}, {
					id: 2,
					label: "Download Icon",
					config: {
						isPrefetchEnabled: !1,
						isDownloadIconEnabled: !0
					}
				}]
			});

			function i(e) {
				let {
					location: t,
					autoTrackExposure: n
				} = e, {
					isPrefetchEnabled: i
				} = r.useExperiment({
					location: t
				}, {
					autoTrackExposure: n,
					disable: __OVERLAY__
				});
				return i
			}

			function l(e) {
				let {
					location: t,
					autoTrackExposure: n,
					disable: i
				} = e, {
					isDownloadIconEnabled: l
				} = r.useExperiment({
					location: t
				}, {
					autoTrackExposure: n,
					disable: __OVERLAY__ || i
				});
				return l
			}
		},
		56848: function(e, t, n) {
			n.d(t, {
				z: () => l
			});
			var r = n(442837),
				i = n(709706);

			function l(e) {
				return (0, r.e7)([i.Z], () => null != e ? i.Z.getVoiceFilter(e) : null)
			}
		},
		378441: function(e, t, n) {
			n.d(t, {
				o: () => a
			});
			var r = n(442837),
				i = n(131951),
				l = n(420439);

			function a() {
				return (0, r.cj)([i.Z, l.Z], () => ({
					activeVoice: i.Z.getActiveVoiceFilter(),
					mostRecentlyRequestedVoiceId: i.Z.getMostRecentlyRequestedVoiceFilter(),
					lastInitAttemptMayHaveCrashed: l.Z.getLastInitAttemptMayHaveCrashed()
				}))
			}
		},
		799143: function(e, t, n) {
			n.d(t, {
				Y: () => b,
				a: () => h
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(392711),
				a = n.n(l),
				o = n(442837),
				s = n(481060),
				c = n(846027),
				u = n(906732),
				d = n(131951),
				f = n(626135),
				p = n(981631),
				m = n(65154),
				g = n(521361);

			function _(e) {
				let {
					label: t,
					Icon: n
				} = e;
				return (0, r.jsxs)("div", {
					className: g.selectedDevice,
					children: [(0, r.jsx)(n, {
						size: "custom",
						width: 20,
						height: 20,
						color: s.TVs.colors.INTERACTIVE_MUTED
					}), (0, r.jsx)(s.Text, {
						lineClamp: 1,
						variant: "text-md/normal",
						color: "text-secondary",
						children: t
					})]
				})
			}

			function b() {
				let {
					analyticsLocations: e
				} = (0, u.ZP)(), {
					canSetInputDevice: t,
					inputDeviceId: n
				} = (0, o.cj)([d.Z], () => ({
					canSetInputDevice: d.Z.supports(m.AN.AUDIO_INPUT_DEVICE),
					inputDeviceId: d.Z.getInputDeviceId()
				})), l = (0, o.e7)([d.Z], () => d.Z.getInputDevices()), b = i.useCallback(t => {
					var n;
					c.Z.setInputDevice(t, {
						analyticsLocations: e
					}), f.default.track(p.rMx.VOICE_FILTER_MIC_SELECTOR_INPUT_SELECTED, {
						input_mode: t,
						active_voice_filter_id: null != (n = d.Z.getActiveVoiceFilter()) ? n : null
					})
				}, [e]), h = i.useCallback(() => {
					var e;
					f.default.track(p.rMx.VOICE_FILTER_MIC_SELECTOR_OPENED, {
						active_voice_filter_id: null != (e = d.Z.getActiveVoiceFilter()) ? e : null
					})
				}, []);
				return (0, r.jsx)(s.q4e, {
					value: n,
					onOpen: h,
					onChange: b,
					options: a().map(l, e => {
						let {
							id: t,
							name: n
						} = e;
						return {
							value: t,
							label: n
						}
					}),
					isDisabled: !t,
					look: s.qQH.FILLED,
					className: g.selector,
					popoutPosition: "top",
					renderOptionValue: e => {
						let [t] = e;
						return (0, r.jsx)(_, {
							label: t.label,
							Icon: s.S6n
						})
					}
				})
			}

			function h() {
				let {
					analyticsLocations: e
				} = (0, u.ZP)(), {
					canSetOutputDevice: t,
					outputDeviceId: n
				} = (0, o.cj)([d.Z], () => ({
					canSetOutputDevice: d.Z.supports(m.AN.AUDIO_OUTPUT_DEVICE),
					outputDeviceId: d.Z.getOutputDeviceId()
				})), i = (0, o.e7)([d.Z], () => d.Z.getOutputDevices());
				return (0, r.jsx)(s.q4e, {
					value: n,
					onChange: t => c.Z.setOutputDevice(t, {
						analyticsLocations: e
					}),
					options: a().map(i, e => {
						let {
							id: t,
							name: n
						} = e;
						return {
							value: t,
							label: n
						}
					}),
					isDisabled: !t,
					look: s.qQH.FILLED,
					className: g.selector,
					popoutPosition: "top",
					renderOptionValue: e => {
						let [t] = e;
						return (0, r.jsx)(_, {
							label: t.label,
							Icon: s.VWR
						})
					}
				})
			}
		},
		448697: function(e, t, n) {
			n.d(t, {
				R: () => g
			});
			var r = n(255367),
				i = n(73800),
				l = n(392711),
				a = n(108542),
				o = n(442837),
				s = n(755721),
				c = n(481060),
				u = n(709706),
				d = n(378441),
				f = n(358820),
				p = n(388032),
				m = n(690410);

			function g() {
				let {
					hasActiveDownloads: e,
					progress: t
				} = function() {
					let e = (0, o.cj)([u.Z], () => u.Z.getOngoingDownloads()),
						t = i.useRef({});
					i.useEffect(() => {
						0 === Object.entries(e).length && (t.current = {}), Object.assign(t.current, e)
					}, [e]);
					let n = Object.values(t.current),
						r = n.some(e => {
							let {
								downloadedBytes: t
							} = e;
							return (null != t ? t : 0) > 0
						}),
						a = (0, l.sumBy)(n, e => {
							var t;
							return null != (t = null == e ? void 0 : e.downloadedBytes) ? t : 0
						}),
						s = (0, l.sumBy)(n, e => {
							var t;
							return null != (t = null == e ? void 0 : e.totalBytes) ? t : 0
						});
					return {
						hasActiveDownloads: r,
						progress: 0 === s ? 0 : Math.floor(a / s * 100)
					}
				}(), {
					activeVoice: n
				} = (0, d.o)();
				return (0, c.Yzy)(e ? null != n ? "voice-on" : "voice-off" : null, {
					from: {
						opacity: 0,
						translateY: 20
					},
					enter: e => ({
						opacity: 1,
						translateY: "voice-on" === e ? -72 : 0
					}),
					leave: {
						opacity: 0,
						translateY: 80
					}
				}, "respect-motion-settings")((e, n) => null != n ? (0, r.jsx)(a.animated.div, {
					style: e,
					className: m.floaterWrapper,
					children: (0, r.jsxs)("div", {
						className: m.visibleFloater,
						children: [(0, r.jsxs)("div", {
							className: m.progressText,
							children: [(0, r.jsx)(c.Text, {
								variant: "text-sm/semibold",
								color: "text-primary",
								children: p.intl.format(p.t["r+uZYW"], {
									progress: t
								})
							}), (0, r.jsx)(s.zx, {
								look: s.zx.Looks.LINK,
								size: s.zx.Sizes.MIN,
								onClick: f.ge,
								children: (0, r.jsx)(c.Text, {
									variant: "text-sm/normal",
									color: "text-primary",
									children: p.intl.string(p.t["ETE/oK"])
								})
							})]
						}), (0, r.jsx)(c.Exd, {
							percent: t,
							size: c.Exd.Sizes.XSMALL
						})]
					})
				}) : null)
			}
		},
		946196: function(e, t, n) {
			n.d(t, {
				l: () => d
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(108542),
				a = n(442837),
				o = n(481060),
				s = n(709706),
				c = n(388032),
				u = n(791422);

			function d() {
				let e = (0, a.e7)([s.Z], () => s.Z.getError());
				return e ? (0, r.jsx)(f, {
					error: e
				}) : null
			}
			let f = e => {
				let {
					error: t
				} = e, [n, a] = (0, i.useState)(!1), d = (0, o.Yzy)(!n, {
					from: {
						opacity: 0,
						translateY: 20
					},
					enter: {
						opacity: 1,
						translateY: 0
					},
					leave: {
						opacity: 0,
						translateY: 80
					}
				}, "respect-motion-settings"), f = (() => {
					switch (t) {
						case s.r.ERROR_DOWNLOADING_DEPENDENCY:
							return c.intl.string(c.t.D9neaG);
						case s.r.ERROR_ACTIVATING_VOICE_FILTER:
							return c.intl.string(c.t.mNMZZm);
						default:
							return c.intl.string(c.t.F8FvU1)
					}
				})();
				return d(e => n ? null : (0, r.jsx)(l.animated.div, {
					style: e,
					className: u.floaterWrapper,
					children: (0, r.jsxs)("div", {
						className: u.visibleFloater,
						children: [(0, r.jsx)(o.Text, {
							variant: "text-sm/semibold",
							color: "always-white",
							children: f
						}), (0, r.jsx)(o.RyX, {
							onClick: () => a(!0)
						})]
					})
				}))
			}
		},
		365831: function(e, t, n) {
			n.d(t, {
				y: () => I
			}), n(388685), n(953529);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(108542),
				s = n(442837),
				c = n(481060),
				u = n(846027),
				d = n(110924),
				f = n(460181),
				p = n(131951),
				m = n(743498),
				g = n(56848),
				_ = n(378441),
				b = n(388032),
				h = n(270217);

			function v(e) {
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

			function y(e, t) {
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
			let O = e => 1 - Math.pow(1 - e, 4),
				j = {
					mass: 1,
					friction: 64,
					tension: 1e3,
					clamp: !0
				},
				S = {
					mass: 1,
					friction: 64,
					tension: 1e3
				},
				x = {
					mass: 1,
					friction: 35,
					tension: 1e3
				};

			function I(e) {
				var t;
				let {} = e, {
					activeVoice: n
				} = (0, _.o)(), l = (0, d.Z)(n), I = (0, g.z)(n), {
					toggleLoopback: C,
					isLoopbackEnabled: P
				} = function() {
					let {
						activeVoice: e
					} = (0, _.o)(), t = (0, s.e7)([p.Z], () => p.Z.getVoiceFilterPlaybackEnabled()), n = i.useCallback(() => {
						(0, f.GN)(t ? "voice_filter_loopback_off" : "voice_filter_loopback_on"), (0, m._j)(!t)
					}, [t]);
					return i.useEffect(() => (u.Z.setLoopback("voice_filter_preview", null != e && t), () => {
						u.Z.setLoopback("voice_filter_preview", !1)
					}), [t, e]), {
						isLoopbackEnabled: t,
						toggleLoopback: n
					}
				}(), E = P ? c.Iy5 : c.X_q, w = i.useCallback(() => (0, m.v6)(null), []), T = (0, c.dQu)(c.TVs.colors.BACKGROUND_BASE_LOWER).hex(), N = (0, c.dQu)(c.TVs.colors.WHITE).hex(), Z = i.useRef(0), A = n !== l ? Z.current + 1 : Z.current;
				i.useEffect(() => {
					Z.current = A
				}, [A]);
				let D = null != n,
					L = !D,
					k = D && null != l,
					M = null == n && null != l,
					R = (0, c.q_F)({
						opacity: +!!D,
						height: 72 * !!D,
						pointerEvents: D ? "auto" : "none",
						backgroundColor: null != (t = null == I ? void 0 : I.baseColor) ? t : T,
						config: e => "backgroundColor" === e ? {
							easing: O,
							duration: 200
						} : j,
						delay: 100 * !!k
					}, "respect-motion-settings"),
					F = (0, c.Yzy)(null == I ? void 0 : I.id, {
						key: A,
						from: {
							opacity: 0,
							background: null == I ? void 0 : I.splashGradient
						},
						enter: {
							opacity: 1,
							delay: k ? 100 : 50
						},
						leave: {
							opacity: 0,
							delay: k ? 100 : 150
						},
						config: {
							easing: O,
							duration: k ? 250 : 200
						}
					}, "respect-motion-settings"),
					[U] = (0, c.bYB)(2, e => ({
						from: k ? {
							translateY: 0,
							opacity: 1
						} : {
							translateY: 16,
							opacity: 0
						},
						to: null == n ? {
							translateY: 16,
							opacity: 0
						} : k ? null : {
							translateY: 0,
							opacity: 1
						},
						config: e => "opacity" === e ? {
							easing: O,
							duration: 200
						} : S,
						delay: M ? 50 - 50 * e : 200 + 50 * e
					}), "respect-motion-settings", [n]),
					V = (0, c.Yzy)(null == I ? void 0 : I.iconURL, {
						key: A,
						from: {
							opacity: 0,
							scale: 80 / 88,
							translateX: k ? -16 : 0
						},
						enter: {
							opacity: 1,
							scale: 1,
							translateX: 0,
							delay: 50
						},
						leave: {
							opacity: 0,
							scale: D ? 80 / 88 : 1,
							translateX: 24 * !!D,
							delay: 150 * !k
						},
						config: e => "opacity" === e ? {
							easing: O,
							duration: 200
						} : D ? j : x
					}, "respect-motion-settings"),
					B = (0, c.Yzy)(null == I ? void 0 : I.name, {
						key: A,
						from: {
							opacity: 0,
							scale: k ? .9 : 1,
							translateY: 16 * !k
						},
						enter: {
							opacity: 1,
							scale: 1,
							translateX: 0,
							translateY: 0,
							delay: 150,
							config: e => "opacity" === e ? {
								easing: O,
								duration: 200
							} : k ? j : S
						},
						leave: {
							opacity: 0,
							translateX: 24 * (null != n),
							translateY: 16 * (null == n),
							delay: M ? 100 : 50,
							config: e => "opacity" === e ? {
								easing: O,
								duration: 200
							} : k ? j : S
						}
					}, "respect-motion-settings"),
					Y = b.intl.string(P ? b.t.esVyo6 : b.t.UQqFCA);
				return (0, r.jsxs)(o.animated.div, {
					className: h.voiceFilterHero,
					"aria-hidden": L,
					style: R,
					children: [(0, r.jsx)("div", {
						className: a()([h.bgGradient, h.bgGradientHighlight])
					}), F(e => (0, r.jsx)(o.animated.div, {
						className: h.bgGradient,
						style: e
					})), (0, r.jsx)("div", {
						className: h.iconWrapper,
						children: V((e, t) => (0, r.jsx)(o.animated.img, {
							className: h.activeVoiceIcon,
							style: e,
							alt: "",
							src: t
						}, t))
					}), (0, r.jsx)("div", {
						className: h.descriptionWrapper,
						children: B((e, t) => (0, r.jsxs)(o.animated.div, {
							className: h.description,
							style: e,
							children: [(0, r.jsx)(c.Text, {
								variant: "text-xs/normal",
								color: "always-white",
								className: h.offWhiteText,
								children: b.intl.string(b.t.WW5DAA)
							}), (0, r.jsx)(c.Text, {
								variant: "text-md/medium",
								color: "always-white",
								children: null != t ? b.intl.string(t) : ""
							})]
						}))
					}), (0, r.jsxs)("div", {
						className: h.buttonWrapper,
						children: [(0, r.jsx)(c.ua7, {
							"aria-label": Y,
							tooltipClassName: h.tooltip,
							tooltipContentClassName: h.tooltipContent,
							shouldShow: D,
							text: (0, r.jsxs)(r.Fragment, {
								children: [(0, r.jsx)(c.X6q, {
									variant: "heading-sm/normal",
									color: "header-primary",
									className: h.tooltipHeader,
									children: Y
								}), (0, r.jsx)(c.Text, {
									variant: "text-xs/normal",
									color: "header-muted",
									children: b.intl.string(P ? b.t.Sg6cfn : b.t.ZKhtw8)
								})]
							}),
							children: e => (0, r.jsx)(o.animated.div, {
								className: h.buttonWrapper,
								style: U[0],
								children: (0, r.jsx)(c.P3F, y(v({
									className: a()(h.button, {
										[h.loopbackEnabled]: P
									}),
									"aria-hidden": L,
									focusProps: {
										enabled: D
									},
									tabIndex: D ? 0 : -1
								}, e), {
									onClick: () => C(),
									children: (0, r.jsx)(E, {
										size: "custom",
										width: 20,
										height: 20,
										color: N
									})
								}))
							})
						}), (0, r.jsx)(c.ua7, {
							shouldShow: D,
							text: b.intl.string(b.t.UvMx7O),
							children: e => (0, r.jsx)(o.animated.div, {
								className: h.buttonWrapper,
								style: U[1],
								children: (0, r.jsx)(c.P3F, y(v({
									className: h.button,
									"aria-hidden": L,
									focusProps: {
										enabled: D
									},
									tabIndex: D ? 0 : -1
								}, e), {
									onClick: w,
									children: (0, r.jsx)(c.k$p, {
										size: "custom",
										width: 20,
										height: 20,
										color: N
									})
								}))
							})
						})]
					})]
				})
			}
		},
		990525: function(e, t, n) {
			n.d(t, {
				J: () => C
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(442837),
				s = n(692547),
				c = n(481060),
				u = n(457165),
				d = n(469121),
				f = n(626135),
				p = n(998502),
				m = n(743498),
				g = n(778033),
				_ = n(967021),
				b = n(709706),
				h = n(56848),
				v = n(378441),
				y = n(981631),
				O = n(509571),
				j = n(388032),
				S = n(905490);

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

			function I(e, t) {
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
					voiceFilter: t,
					hasNitro: n,
					analyticsContext: l
				} = e, {
					activeVoice: C,
					mostRecentlyRequestedVoiceId: P
				} = (0, v.o)(), E = (0, h.z)(t.id), w = t.id === C, T = !t.available && !t.temporarilyAvailable, N = t.temporarilyAvailable && !n && !w, Z = !w && t.id === P, [A, D] = i.useState(!1);
				i.useEffect(() => {
					let e = Z ? setTimeout(() => D(Z), 200) : void 0;
					return () => {
						clearTimeout(e), D(!1)
					}
				}, [Z]);
				let L = (0, _.J_)({
						location: "voice_filter_item",
						autoTrackExposure: !0,
						disable: !p.ZP.canCheckVoiceFilterFilesExist()
					}),
					k = (0, o.e7)([b.Z], () => b.Z.isVoiceFilterDownloaded(t.id), [t]),
					M = null == E ? void 0 : E.previewSoundURLs,
					[R, F] = i.useState(0),
					{
						isPlaying: U,
						playSound: V,
						stopSound: B,
						preloadSound: Y
					} = (0, d.Z)(null != M ? M[R] : null, {
						soundId: t.id
					}),
					W = S[t.styleKey],
					z = i.useCallback(() => {
						n || !T ? ((0, m.v6)(C === t.id ? null : t.id, l), N && f.default.track(y.rMx.VOICE_FILTER_LIMITED_TIME_VOICE_SELECTED, x({
							voice_filter_id: t.id
						}, (0, g.w)(l)))) : (0, u.i)()
					}, [n, T, C, t.id, l, N]),
					G = i.useCallback(() => {
						f.default.track(y.rMx.VOICE_FILTER_PREVIEW_PLAYED, x({
							voice_filter_id: t.id
						}, (0, g.w)(l))), V({
							volume: .5,
							outputChannel: O.w.VOICE
						}), (.25 > Math.random() || R > 0) && null != M && F(e => (e + 1) % M.length)
					}, [l, V, R, M, t.id]),
					H = null != E ? j.intl.string(E.name) : "";
				return (0, r.jsxs)("div", {
					className: a()(S.filter, W, {
						[S.selected]: w,
						[S.locked]: T && !w
					}),
					children: [(0, r.jsx)(c.ua7, {
						shouldShow: L && !k,
						"aria-label": j.intl.string(j.t.SQ7qMD),
						text: (0, r.jsxs)("div", {
							className: S.downloadRequiredContent,
							children: [(0, r.jsx)(c.Text, {
								variant: "text-sm/medium",
								children: j.intl.string(j.t.SQ7qMD)
							}), (0, r.jsx)(c.Text, {
								variant: "text-xs/normal",
								children: j.intl.string(j.t.TbnPVl)
							})]
						}),
						children: e => (0, r.jsxs)(c.P3F, I(x({
							className: S.selector
						}, e), {
							onClick: () => {
								var t;
								z(), null == e || null == (t = e.onClick) || t.call(e)
							},
							onMouseEnter: () => {
								var t;
								Y(), null == e || null == (t = e.onMouseEnter) || t.call(e)
							},
							children: [(0, r.jsxs)("div", {
								className: S.iconTreatmentsWrapper,
								children: [(0, r.jsxs)("div", {
									className: a()(S.profile, {
										[S.underDevelopment]: t.underDevelopment
									}),
									children: [(0, r.jsx)("img", {
										className: S.thumbnail,
										alt: "",
										src: null == E ? void 0 : E.iconURL,
										draggable: !1
									}), (0, r.jsx)("div", {
										className: S.insetBorder
									})]
								}), w && (0, r.jsx)("div", {
									className: S.iconCircle,
									children: (0, r.jsx)(c.owK, {
										size: "md",
										color: "currentColor",
										colorClass: S.checkmark,
										secondaryColor: s.Z.unsafe_rawColors.WHITE_500.css
									})
								}), T && !w && (0, r.jsx)("div", {
									className: a()([S.iconCircle, S.lockedCircle]),
									children: (0, r.jsx)(c.mBM, {
										size: "custom",
										height: 16,
										width: 16,
										color: "currentColor",
										colorClass: S.lockedIcon
									})
								}), N && (0, r.jsx)("div", {
									className: a()([S.iconCircle, S.iconBorder]),
									children: (0, r.jsx)("div", {
										className: a()([S.clockCircle]),
										children: (0, r.jsx)(c.T39, {
											size: "custom",
											height: 16,
											width: 16,
											color: "currentColor",
											colorClass: S.clockIcon
										})
									})
								}), A && (0, r.jsx)("div", {
									className: S.spinnerWrapper,
									children: (0, r.jsx)(c.$jN, {
										type: c.$jN.Type.CHASING_DOTS,
										animated: !0,
										className: S.spinner
									})
								})]
							}), (0, r.jsxs)("div", {
								className: S.filterName,
								children: [(0, r.jsxs)(c.Text, {
									variant: "text-xs/medium",
									color: t.underDevelopment ? "header-muted" : "header-primary",
									children: [t.underDevelopment ? "\uD83D\uDEA7 " : "", H]
								}), L && !k ? (0, r.jsx)(c._8t, {
									size: "xxs"
								}) : null]
							})]
						}))
					}), null != M && (0, r.jsx)(c.ua7, {
						text: j.intl.string(U ? j.t.ItuPbm : j.t["0gtbEx"]),
						children: e => (0, r.jsx)(c.P3F, I(x({}, e), {
							className: a()([S.hoverButtonCircle, S.previewButton], {
								[S.visible]: U
							}),
							onClick: U ? B : G,
							"aria-label": j.intl.formatToPlainString(j.t.gDzvjY, {
								voiceFilterName: H
							}),
							children: U ? (0, r.jsx)(c.wNq, {
								size: "custom",
								height: 16,
								width: 16,
								color: "white"
							}) : (0, r.jsx)(c.o1U, {
								size: "custom",
								height: 16,
								width: 16,
								color: "white"
							})
						}))
					})]
				})
			}
		},
		639539: function(e, t, n) {
			n.d(t, {
				J: () => h
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(164369),
				s = n(108542),
				c = n(481060),
				u = n(70956),
				d = n(388032),
				f = n(819496);

			function p(e) {
				if (null != e) {
					let t = new Date,
						{
							hours: n,
							minutes: r,
							seconds: i
						} = (0, o.Z)({
							start: t,
							end: e
						});
					return {
						hours: String(n).padStart(2, "0"),
						minutes: String(r).padStart(2, "0"),
						seconds: String(i).padStart(2, "0"),
						countdownString: d.intl.formatToPlainString(d.t.U0Hhr6, {
							duration: new Date(0, 0, 0, n, r, i)
						})
					}
				}
				return {
					hours: "",
					minutes: "",
					seconds: "",
					countdownString: ""
				}
			}
			let m = e => {
					let {
						digit: t
					} = e, n = (0, c.Yzy)(t, {
						from: {
							opacity: 0,
							translateY: "-100%"
						},
						enter: {
							opacity: 1,
							translateY: "0%"
						},
						leave: {
							opacity: 0,
							translateY: "100%"
						},
						config: {
							tension: 210,
							friction: 20,
							duration: 200
						}
					});
					return (0, r.jsx)("div", {
						className: f.animatedDigit,
						children: n((e, t) => {
							var n, i;
							return (0, r.jsx)(s.animated.div, {
								style: (n = function(e) {
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
								}({}, e), i = i = {
									position: "absolute",
									width: "100%",
									textAlign: "center"
								}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
									var n = Object.keys(e);
									if (Object.getOwnPropertySymbols) {
										var r = Object.getOwnPropertySymbols(e);
										n.push.apply(n, r)
									}
									return n
								})(Object(i)).forEach(function(e) {
									Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
								}), n),
								children: (0, r.jsx)(c.Text, {
									variant: "text-sm/bold",
									children: t
								})
							})
						})
					})
				},
				g = () => {
					let [e, t] = i.useState(!1);
					i.useEffect(() => {
						let e;
						return ! function n() {
							let r = Date.now();
							e = setTimeout(() => {
								t(e => !e), n()
							}, Math.max(100, (Math.floor(r / u.Z.Millis.HALF_SECOND) + 1) * u.Z.Millis.HALF_SECOND - r))
						}(), () => {
							clearTimeout(e)
						}
					}, []);
					let n = (0, c.q_F)({
						opacity: e ? .5 : 1,
						config: {
							duration: 100
						}
					});
					return (0, r.jsxs)(s.animated.div, {
						style: n,
						className: f.colonContainer,
						children: [(0, r.jsx)("div", {
							className: f.tinyDot
						}), (0, r.jsx)("div", {
							className: f.tinyDot
						})]
					})
				},
				_ = e => {
					let {
						digits: t
					} = e;
					return (0, r.jsxs)(r.Fragment, {
						children: [(0, r.jsx)("div", {
							className: f.digitContainer,
							children: (0, r.jsx)(m, {
								digit: t[0]
							})
						}), (0, r.jsx)("div", {
							className: f.digitContainer,
							children: (0, r.jsx)(m, {
								digit: t[1]
							})
						})]
					})
				},
				b = e => {
					let {
						countdown: t
					} = e;
					return (0, r.jsxs)("div", {
						className: f.digitsContainer,
						children: [(0, r.jsx)(_, {
							digits: t.hours
						}), (0, r.jsx)(g, {}), (0, r.jsx)(_, {
							digits: t.minutes
						}), (0, r.jsx)(g, {}), (0, r.jsx)(_, {
							digits: t.seconds
						})]
					})
				};

			function h(e) {
				let {
					textVariant: t,
					className: n,
					catalogUpdateTime: l,
					isScrolled: o
				} = e, [s, u] = i.useState(() => p(l));
				return i.useEffect(() => {
					let e = setInterval(() => {
						u(() => p(l))
					}, 1e3);
					return () => clearInterval(e)
				}, [l]), (0, r.jsxs)("div", {
					className: a()(n, f.countdownContainer, {
						[f.isScrolled]: o
					}),
					"aria-label": s.countdownString,
					children: [(0, r.jsxs)("div", {
						className: f.iconContainer,
						children: [(0, r.jsx)("div", {
							className: f.clockIconWrapper,
							children: (0, r.jsx)(c.T39, {
								size: "custom",
								height: 16,
								width: 16,
								color: "currentColor",
								colorClass: f.clockIcon
							})
						}), (0, r.jsx)(c.Text, {
							variant: null != t ? t : "text-sm/medium",
							color: "header-primary",
							children: d.intl.string(d.t.VZsY3t)
						})]
					}), (0, r.jsx)("div", {
						className: f.digitsContainer,
						children: (0, r.jsx)(b, {
							countdown: s
						})
					})]
				})
			}
		},
		627325: function(e, t, n) {
			n.d(t, {
				w: () => j
			});
			var r = n(255367),
				i = n(73800),
				l = n(658722),
				a = n.n(l),
				o = n(468194),
				s = n(442837),
				c = n(692547),
				u = n(481060),
				d = n(218867),
				f = n(594174),
				p = n(111361),
				m = n(778033),
				g = n(709706),
				_ = n(358820),
				b = n(990525),
				h = n(388032),
				v = n(92609);
			let y = [51],
				O = [h.t.OpqAoq];

			function j(e) {
				let {
					columns: t,
					handleScroll: n,
					voiceListRef: i,
					showSectionHeaders: l = !1,
					query: a
				} = e, o = x(), j = (0, s.e7)([f.default], () => (0, p.I5)(f.default.getCurrentUser())), I = C(a, j), P = Math.ceil(I.length / t), {
					isNativeModuleLoaded: E,
					isNativeModuleLoading: w,
					catalogLastFetchTime: T
				} = (0, s.cj)([g.Z], () => ({
					isNativeModuleLoaded: g.Z.isNativeModuleLoaded(),
					isNativeModuleLoading: g.Z.isNativeModuleLoading(),
					catalogLastFetchTime: g.Z.getCatalogLastFetchTime()
				}));
				return a && 0 === I.length ? (0, r.jsxs)("div", {
					className: v.iconMessage,
					children: [(0, r.jsx)(u._Ve, {
						width: 40,
						height: 40,
						size: "custom",
						color: c.Z.colors.INTERACTIVE_MUTED
					}), (0, r.jsx)(u.X6q, {
						variant: "heading-sm/medium",
						color: "header-muted",
						children: h.intl.string(h.t.ZzukHh)
					})]
				}) : o ? (0, r.jsxs)("div", {
					className: v.iconMessage,
					children: [(0, r.jsx)(u.aNP, {
						width: 40,
						height: 40,
						size: "custom",
						color: c.Z.colors.INTERACTIVE_MUTED
					}), (0, r.jsx)(u.X6q, {
						variant: "heading-md/normal",
						color: "header-muted",
						children: h.intl.string(h.t.DpZNJy)
					}), (0, r.jsx)(u.Text, {
						variant: "text-sm/normal",
						color: "header-muted",
						children: h.intl.format(h.t["5afO9f"], {
							onClick: E ? _.wV : _.r5
						})
					})]
				}) : w || null == T ? (0, r.jsx)("div", {
					className: v.loading,
					children: (0, r.jsx)(u.$jN, {
						type: u.$jN.Type.CHASING_DOTS,
						animated: !0
					})
				}) : (0, r.jsx)(d.Z, {
					fade: !0,
					className: v.container,
					renderRow: e => {
						let n = e * t,
							i = I.slice(n, n + t);
						return (0, r.jsx)(S, {
							children: i.map((n, i) => (0, r.jsx)(b.J, {
								voiceFilter: n,
								hasNitro: j,
								analyticsContext: {
									reason: m.W.USER_SELECTION,
									gridRows: P,
									gridColumns: t,
									interactedRow: e,
									interactedColumn: i
								}
							}, null == n ? void 0 : n.id))
						}, e)
					},
					renderSectionHeader: !1 === l ? void 0 : e => (0, r.jsx)(u.Text, {
						variant: "text-sm/medium",
						color: "header-muted",
						className: v.header,
						children: h.intl.string(O[e])
					}),
					sectionHeaderHeight: !1 === l ? void 0 : e => y[e],
					rowCount: P,
					rowHeight: 130,
					onScroll: n,
					ref: i,
					sectionFooterHeight: 40 * !j
				})
			}

			function S(e) {
				let {
					children: t
				} = e, n = i.useRef(null);
				return (0, r.jsx)("div", {
					ref: n,
					className: v.row,
					children: (0, r.jsx)(u.JcV, {
						containerRef: n,
						children: t
					})
				})
			}
			let x = () => (0, s.e7)([g.Z], () => {
					var e;
					return !Object.keys(null != (e = g.Z.getVoiceFilterModels()) ? e : {}).length && (g.Z.getCatalogFetchFailed() || g.Z.hasNativeModuleFailed())
				}),
				I = (e, t) => {
					let n = (0, o._I)(t.toLowerCase());
					return "" === n ? e : e.filter(e => {
						let {
							name: t
						} = e, r = (0, o._I)(h.intl.string(t)).toLowerCase();
						return a()(n, r)
					})
				},
				C = (e, t) => (0, s.Wu)([g.Z], () => {
					let n = g.Z.getVoiceFilters(),
						r = g.Z.getSortedVoiceFilters();
					return I(t ? Object.values(n) : r, e)
				}, [e, t])
		},
		306609: function(e, t, n) {
			n.d(t, {
				l: () => Y
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				a = n.n(l),
				o = n(108542),
				s = n(442837),
				c = n(755721),
				u = n(481060),
				d = n(493773),
				f = n(347469),
				p = n(40851),
				m = n(100527),
				g = n(906732),
				_ = n(659580),
				b = n(795318),
				h = n(53691),
				v = n(457165),
				y = n(594174),
				O = n(626135),
				j = n(111361),
				S = n(74538),
				x = n(743498),
				I = n(967021),
				C = n(709706),
				P = n(378441),
				E = n(799143),
				w = n(358820),
				T = n(448697),
				N = n(946196),
				Z = n(365831),
				A = n(639539),
				D = n(627325),
				L = n(981631),
				k = n(354459),
				M = n(474936),
				R = n(48500),
				F = n(388032),
				U = n(130802);

			function V(e) {
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

			function B(e, t) {
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

			function Y(e) {
				let {
					onSettingsButtonClick: t,
					wide: n,
					showOutputDevices: l = !1,
					showSearchBar: Y = !0
				} = e, [W, z] = i.useState(""), {
					analyticsLocations: G,
					newestAnalyticsLocation: H
				} = (0, g.ZP)(m.Z.VOICE_FILTER_POPOUT), J = i.useRef(null), X = (0, f.Z)({
					minDimension: 400,
					maxDimension: 600,
					resizableDomNodeRef: J,
					onElementResize: (e, t) => {},
					onElementResizeEnd: e => {},
					orientation: f.y.VERTICAL_TOP
				});
				(0, F.useSyncMessages)(R.messagesLoader);
				let q = (0, s.e7)([y.default], () => (0, j.I5)(y.default.getCurrentUser())),
					K = (0, s.e7)([C.Z], () => C.Z.getCatalogUpdateTime()),
					[Q, $] = i.useState(!1),
					[ee, et] = i.useState(!1),
					{
						activeVoice: en
					} = (0, P.o)(),
					er = (0, I.HM)({
						location: G[0],
						autoTrackExposure: !0
					}),
					ei = (0, u.q_F)({
						transform: Q ? "translateY(-8px) scale(".concat(.96, ")") : "translateY(0px) scale(1)",
						config: {
							duration: 150,
							mass: 1,
							stiffness: 711.1,
							damping: 40
						}
					}),
					el = (0, u.q_F)({
						y: 50 * !Q,
						config: {
							duration: 150,
							mass: 1,
							stiffness: 711.1,
							damping: 40
						}
					}),
					ea = (0, u.q_F)({
						to: {
							bottom: "" !== W ? "translateY(75px)" : "translateY(50px)",
							opacity: +("" === W)
						},
						config: {
							tension: 280,
							friction: 24,
							duration: 200
						}
					}),
					eo = i.useRef(null);
				(0, d.ZP)(() => {
					(0, w.r5)(), er && (0, x.jG)(), O.default.track(L.rMx.VOICE_FILTER_PICKER_OPENED, {
						active_voice_filter_id: null != en ? en : null
					})
				});
				let es = i.useCallback(() => z(""), [z]),
					ec = i.useRef(null),
					eu = (0, p.bp)() !== L.IlC.OVERLAY;
				return (0, r.jsx)(g.Gt, {
					value: G,
					children: (0, r.jsxs)("div", {
						ref: J,
						className: a()(U.voiceFiltersPopout, {
							[U.wide]: n,
							[U.notResizable]: !eu
						}),
						style: {
							height: 500
						},
						children: [eu && (0, r.jsx)("div", {
							className: U.resizeHandle,
							onMouseDown: X,
							children: (0, r.jsx)("div", {
								className: U.resizePill
							})
						}), Y && (0, r.jsx)(u.E1j, {
							size: u.E1j.Sizes.MEDIUM,
							placeholder: F.intl.string(F.t.hHCZJS),
							className: U.voiceFiltersHeader,
							autoFocus: !0,
							onChange: z,
							query: W,
							onClear: es
						}), (0, r.jsx)(D.w, {
							query: W,
							columns: n ? 5 : 4,
							handleScroll: e => {
								let t = eo.current;
								if (null == t || ($(e > 0), ee)) return;
								let {
									height: n,
									totalHeight: r
								} = t.getListDimensions();
								e < r - n || (et(!0), O.default.track(L.rMx.VOICE_FILTER_PICKER_SCROLLED))
							},
							voiceListRef: eo
						}), !q && (0, r.jsxs)(o.animated.div, {
							style: B(V({}, ea), {
								display: ea.opacity.to(e => 0 === e ? "none" : "block")
							}),
							className: U.upsellCountdownContainer,
							children: [null != K && (0, r.jsx)(o.animated.div, {
								style: ei,
								children: (0, r.jsx)(A.J, {
									catalogUpdateTime: K,
									isScrolled: Q
								})
							}), (0, r.jsx)("div", {
								className: U.upsellContainer,
								children: (0, r.jsx)(o.animated.div, {
									style: {
										y: el.y,
										opacity: el.y.to(e => +(50 !== e))
									},
									children: (0, r.jsx)(h.p, {
										showUpsell: !0,
										text: F.intl.format(F.t["XMDm8/"], {
											nitroTierName: (0, S.Px)(M.p9.TIER_2),
											onClick: () => (0, v.i)()
										}),
										button: F.intl.string(F.t.cRCCJy),
										buttonAnalyticsObject: {
											section: L.jXE.VOICE_FILTERS_FLOATING_UPSELL
										},
										showShadow: !1,
										position: "inline",
										className: U.upsell,
										buttonSize: "sm",
										useLockIcon: !0,
										buttonStyles: U.subscribeButton
									})
								})
							})]
						}), (0, r.jsx)(N.l, {}), (0, r.jsx)(T.R, {}), (0, r.jsx)(Z.y, {}), (0, r.jsxs)("div", {
							className: a()(U.voiceFiltersFooter, {
								[U.hasActiveVoice]: null != en
							}),
							children: [(0, r.jsx)(E.Y, {}), l && (0, r.jsx)(E.a, {}), (0, r.jsx)(u.yRy, {
								targetElementRef: ec,
								position: "top",
								align: "right",
								renderPopout: () => (0, r.jsx)(_.default, {
									renderInputModes: !0,
									renderInputVolume: !0,
									renderInputDevices: !0,
									renderOutputDevices: l,
									renderOutputVolume: l,
									onClose: t,
									onInteraction: (0, b.u)("AudioDeviceMenu", H, {
										entrypoint: k.A5.THREE_DOT
									}),
									minimal: !0
								}),
								children: e => (0, r.jsx)(c.zx, B(V({}, e), {
									buttonRef: ec,
									size: c.zx.Sizes.MIN,
									look: c.zx.Looks.BLANK,
									grow: !1,
									className: U.voiceFiltersFooterButton,
									innerClassName: U.voiceFiltersFooterButtonInner,
									onClick: t => {
										var n;
										O.default.track(L.rMx.VOICE_FILTER_VOICE_SETTINGS_CLICKED, {
											active_voice_filter_id: null != en ? en : null
										}), null == (n = e.onClick) || n.call(e, t)
									},
									children: (0, r.jsx)(u.Huf, {
										size: "custom",
										width: 20,
										height: 20
									})
								}))
							})]
						})]
					})
				})
			}
		},
		8404: function(e, t, n) {
			n.d(t, {
				b: () => u
			});
			var r = n(73800),
				i = n(652844),
				l = n(747906),
				a = n(481060),
				o = n(40851),
				s = n(378441),
				c = n(981631);

			function u(e) {
				let t = (0, o.bp)(),
					{
						activeVoice: n
					} = (0, s.o)(),
					u = null != n,
					d = e ? "unmute" : "mute",
					f = (0, l.P)(d),
					p = (0, i.O)(d),
					m = u ? f : p,
					g = t === c.IlC.POPOUT ? u ? e ? a.TYr : a.x8H : e ? a.nRN : a.S6n : m.Component;
				return r.useMemo(() => {
					var e, t;
					return e = function(e) {
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
					}({}, m), t = t = {
						Component: g
					}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
						var n = Object.keys(e);
						if (Object.getOwnPropertySymbols) {
							var r = Object.getOwnPropertySymbols(e);
							n.push.apply(n, r)
						}
						return n
					})(Object(t)).forEach(function(n) {
						Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
					}), e
				}, [m, g])
			}
		},
		878884: function(e, t, n) {
			n.d(t, {
				Z: () => E
			}), n(388685);
			var r, i, l, a = n(442837),
				o = n(46973),
				s = n(570140),
				c = n(642047),
				u = n(541638),
				d = n(189786),
				f = n(5192),
				p = n(592125),
				m = n(19780),
				g = n(594174),
				_ = n(979651),
				b = n(938475),
				h = n(981631),
				v = n(354459);
			let y = new c.Z,
				O = new c.Z,
				j = new Set;

			function S(e, t, n) {
				let r = new d.Z({
						userId: e.id,
						channelId: n
					}),
					i = (0, b.PH)(r, null != t ? t : h.ME, e.id);
				y.set(e.id, i);
				let l = {
					type: v.fO.USER,
					user: e,
					id: e.id,
					streamId: null,
					voiceState: r,
					voicePlatform: null,
					speaking: !1,
					lastSpoke: 0,
					soundsharing: !1,
					ringing: !1,
					userNick: f.ZP.getName(t, n, e),
					userAvatarDecoration: (0, u.o)(e, t),
					localVideoDisabled: !1
				};
				O.set(e.id, l)
			}

			function x(e) {
				let t = y.delete(e),
					n = O.delete(e),
					r = j.delete(e);
				return t || n || r
			}

			function I() {
				var e;
				let t = m.Z.getChannelId();
				if (null == t) return !1;
				let n = null == (e = p.Z.getChannel(t)) ? void 0 : e.getGuildId(),
					r = !1;
				return j.forEach(e => {
					if (null != _.Z.getVoiceStateForChannel(t, e)) return void j.delete(e);
					let i = g.default.getUser(e);
					null != i && (r = !0, j.delete(e), S(i, n, t))
				}), r
			}

			function C() {
				y.clear(), O.clear(), j.clear()
			}
			class P extends(r = a.ZP.Store) {
				initialize() {
					this.waitFor(_.Z, g.default, p.Z, m.Z), this.syncWith([g.default], I)
				}
				get desyncedVoiceStatesCount() {
					return y.size()
				}
				getDesyncedUserIds() {
					return y.keys()
				}
				getDesyncedVoiceStates() {
					return y.values()
				}
				getDesyncedParticipants() {
					return O.values()
				}
			}
			l = "RTCConnectionDesyncStore", (i = "displayName") in P ? Object.defineProperty(P, i, {
				value: l,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : P[i] = l;
			let E = new P(s.Z, {
				CONNECTION_OPEN: function() {
					C()
				},
				VOICE_CHANNEL_SELECT: C,
				RTC_CONNECTION_STATE: function(e) {
					let {
						state: t,
						context: n
					} = e;
					if (n !== o.Yn.DEFAULT || t !== h.hes.DISCONNECTED) return !1;
					C()
				},
				VOICE_STATE_UPDATES: function(e) {
					let {
						voiceStates: t
					} = e, n = m.Z.getChannelId();
					return null != n && t.reduce((e, t) => {
						let {
							userId: r,
							channelId: i
						} = t;
						return i === n && !!x(r) || e
					}, !1)
				},
				RTC_CONNECTION_CLIENT_CONNECT: function(e) {
					let {
						userIds: t,
						guildId: n,
						channelId: r,
						context: i
					} = e;
					return i === o.Yn.DEFAULT && t.reduce((e, t) => {
						if (null != _.Z.getVoiceStateForChannel(r, t)) return e;
						let i = g.default.getUser(t);
						return null == i ? (j.add(t), e) : (S(i, n, r), !0)
					}, !1)
				},
				RTC_CONNECTION_CLIENT_DISCONNECT: function(e) {
					let {
						userId: t,
						context: n
					} = e;
					return n === o.Yn.DEFAULT && x(t)
				}
			})
		},
		66569: function(e, t, n) {
			n.r(e.exports = {
				actionsStreamPreview: "actionsStreamPreview__34f7d",
				actionsProfile: "actionsProfile__34f7d",
				actionsProfileV2: "actionsProfileV2__34f7d",
				actionsSimplifiedProfile: "actionsSimplifiedProfile__34f7d",
				actionsActivityFeed: "actionsActivityFeed__34f7d",
				errorImage: "errorImage__34f7d",
				cannotLaunchImage: "cannotLaunchImage__34f7d errorImage__34f7d",
				actionsWrapper: "actionsWrapper__34f7d"
			})
		},
		903276: function(e, t, n) {
			e.exports = {
				text: "text_c8b06d",
				textLeft: "textLeft_c8b06d text_c8b06d",
				textRight: "textRight_c8b06d text_c8b06d",
				bar: "bar_c8b06d",
				barInMultiLine: "barInMultiLine_c8b06d bar_c8b06d",
				barInner: "barInner_c8b06d",
				themed: "themed_c8b06d",
				singleLineContainer: "singleLineContainer_c8b06d",
				barInSingleLine: "barInSingleLine_c8b06d",
				textLeftInSingleLine: "textLeftInSingleLine_c8b06d textLeft_c8b06d text_c8b06d"
			}
		},
		636424: function(e, t, n) {
			n.r(e.exports = {
				ellipsis: "ellipsis__2ef49",
				headerContainer: "headerContainer__2ef49",
				headerText: "headerText__2ef49",
				headerTextNormal: "headerTextNormal__2ef49 headerText__2ef49 ellipsis__2ef49",
				headerTextEmptyBody: "headerTextEmptyBody__2ef49 headerText__2ef49",
				body: "body__2ef49",
				bodyAlignCenter: "bodyAlignCenter__2ef49 body__2ef49",
				bodyNormal: "bodyNormal__2ef49 body__2ef49",
				openGameProfile: "openGameProfile__2ef49",
				assets: "assets__2ef49",
				assetsLargeMaskStreamPreview: "assetsLargeMaskStreamPreview__2ef49",
				assetsLargeMaskVoiceChannel: "assetsLargeMaskVoiceChannel__2ef49",
				assetsLargeMaskActivityFeed: "assetsLargeMaskActivityFeed__2ef49",
				assetsLargeImage: "assetsLargeImage__2ef49",
				assetsLargeImageSpotify: "assetsLargeImageSpotify__2ef49",
				assetsLargeImageStreamPreview: "assetsLargeImageStreamPreview__2ef49 assetsLargeImage__2ef49",
				assetsLargeImageStreamPreviewXbox: "assetsLargeImageStreamPreviewXbox__2ef49 assetsLargeImage__2ef49",
				assetsLargeImageActivityFeed: "assetsLargeImageActivityFeed__2ef49 assetsLargeImage__2ef49",
				assetsLargeImageActivityFeedXbox: "assetsLargeImageActivityFeedXbox__2ef49 assetsLargeImage__2ef49",
				assetsLargeImageVoiceChannel: "assetsLargeImageVoiceChannel__2ef49 assetsLargeImage__2ef49",
				assetsLargeImageActivityFeedTwitch: "assetsLargeImageActivityFeedTwitch__2ef49 assetsLargeImage__2ef49",
				assetsSmallImage: "assetsSmallImage__2ef49",
				assetsSmallImageStreamPreview: "assetsSmallImageStreamPreview__2ef49 assetsSmallImage__2ef49",
				assetsSmallImageVoiceChannel: "assetsSmallImageVoiceChannel__2ef49 assetsSmallImage__2ef49",
				assetsSmallImageActivityFeed: "assetsSmallImageActivityFeed__2ef49 assetsSmallImage__2ef49",
				assetsSmallImageActivityFeedWithoutLargeImage: "assetsSmallImageActivityFeedWithoutLargeImage__2ef49 assetsLargeImage__2ef49",
				assetsSmallImageStreamPreviewWithoutLargeImage: "assetsSmallImageStreamPreviewWithoutLargeImage__2ef49 assetsLargeImage__2ef49",
				assetsSmallImageVoiceChannelWithoutLargeImage: "assetsSmallImageVoiceChannelWithoutLargeImage__2ef49 assetsLargeImage__2ef49",
				gameIcon: "gameIcon__2ef49",
				screenshareIcon: "screenshareIcon__2ef49",
				content: "content__2ef49",
				contentImagesStreamPreview: "contentImagesStreamPreview__2ef49 content__2ef49",
				contentImagesVoiceChannel: "contentImagesVoiceChannel__2ef49 content__2ef49",
				contentImagesActivityFeed: "contentImagesActivityFeed__2ef49 content__2ef49",
				contentNoImagesStreamPreview: "contentNoImagesStreamPreview__2ef49 content__2ef49",
				contentNoImagesVoiceChannel: "contentNoImagesVoiceChannel__2ef49 content__2ef49",
				contentNoImagesActivityFeed: "contentNoImagesActivityFeed__2ef49 content__2ef49",
				contentGameImageStreamPreview: "contentGameImageStreamPreview__2ef49 content__2ef49",
				contentGameImageVoiceChannel: "contentGameImageVoiceChannel__2ef49 content__2ef49",
				textRow: "textRow__2ef49",
				clickableDetails: "clickableDetails__2ef49 ellipsis__2ef49 textRow__2ef49",
				details: "details__2ef49 ellipsis__2ef49 textRow__2ef49",
				playTime: "playTime__2ef49 ellipsis__2ef49 textRow__2ef49",
				state: "state__2ef49 ellipsis__2ef49 textRow__2ef49",
				timestamp: "timestamp__2ef49 ellipsis__2ef49 textRow__2ef49",
				nameNormal: "nameNormal__2ef49 ellipsis__2ef49 textRow__2ef49",
				detailsWrap: "detailsWrap__2ef49 textRow__2ef49",
				guildIcon: "guildIcon__2ef49",
				guildDetails: "guildDetails__2ef49",
				voiceChannelInfo: "voiceChannelInfo__2ef49",
				nameWrap: "nameWrap__2ef49 textRow__2ef49",
				activityActivityFeed: "activityActivityFeed__2ef49",
				name: "name__2ef49",
				timeBarActivityFeed: "timeBarActivityFeed__2ef49",
				timeBarVoiceChannel: "timeBarVoiceChannel__2ef49",
				activityName: "activityName__2ef49",
				bodyLink: "bodyLink__2ef49 activityName__2ef49",
				twitchImageContainer: "twitchImageContainer__2ef49",
				twitchImageOverlay: "twitchImageOverlay__2ef49",
				twitchBackgroundImage: "twitchBackgroundImage__2ef49",
				streamUsername: "streamUsername__2ef49",
				streamName: "streamName__2ef49",
				streamGame: "streamGame__2ef49",
				activityVoiceChannel: "activityVoiceChannel__2ef49",
				platformIcon: "platformIcon__2ef49",
				icon: "icon__2ef49",
				wrap: "wrap__2ef49",
				activityDetails: "activityDetails__2ef49",
				activityStreamPreview: "activityStreamPreview__2ef49"
			})
		},
		126485: function(e, t, n) {
			e.exports = {
				buttonsWrapper: "buttonsWrapper__65bb6",
				horizontal: "horizontal__65bb6",
				vertical: "vertical__65bb6"
			}
		},
		289356: function(e, t, n) {
			e.exports = {
				flex: "flex__08d32",
				platformIcon: "platformIcon__08d32"
			}
		},
		558803: function(e, t, n) {
			e.exports = {
				button: "button__6e0e0"
			}
		},
		128746: function(e, t, n) {
			e.exports = {
				streamIcon: "streamIcon__43481",
				iconButton: "iconButton__43481",
				iconButtonSize: "iconButtonSize__43481",
				iconSize: "iconSize__43481"
			}
		},
		292538: function(e, t, n) {
			e.exports = {
				menu: "menu__43313"
			}
		},
		490650: function(e, t, n) {
			e.exports = {
				effectsWrapper: "effectsWrapper__78936",
				effects: "effects__78936"
			}
		},
		768780: function(e, t, n) {
			e.exports = {
				body: "body__6da2d",
				streamPreviewWrapper: "streamPreviewWrapper__6da2d",
				mounted: "mounted__6da2d",
				streamPreview: "streamPreview__6da2d",
				previewContainer: "previewContainer__6da2d",
				previewHover: "previewHover__6da2d",
				previewImage: "previewImage__6da2d",
				activityActions: "activityActions__6da2d",
				protip: "protip__6da2d",
				white: "white__6da2d",
				watchButton: "watchButton__6da2d"
			}
		},
		862863: function(e, t, n) {
			e.exports = {
				playButtonInner: "playButtonInner__2024e",
				syncButton: "syncButton__2024e",
				syncButtonInner: "syncButtonInner__2024e"
			}
		},
		850999: function(e, t, n) {
			e.exports = {
				"outgoing-call-pulse": "outgoing-call-pulse__07f91",
				list: "list__07f91",
				listDefault: "listDefault__07f91",
				listCollapse: "listCollapse__07f91",
				voiceUser: "voiceUser__07f91",
				clickable: "clickable__07f91",
				content: "content__07f91",
				flipped: "flipped__07f91",
				userLarge: "userLarge__07f91",
				userSmall: "userSmall__07f91",
				avatarContainer: "avatarContainer__07f91",
				overlap: "overlap__07f91",
				avatar: "avatar__07f91",
				avatarSmall: "avatarSmall__07f91",
				avatarLarge: "avatarLarge__07f91",
				avatarSpeaking: "avatarSpeaking__07f91",
				username: "username__07f91",
				usernameFont: "usernameFont__07f91",
				icons: "icons__07f91",
				iconGroup: "iconGroup__07f91",
				icon: "icon__07f91",
				iconSpacing: "iconSpacing__07f91",
				liveIconSpacing: "liveIconSpacing__07f91",
				iconPriortySpeaker: "iconPriortySpeaker__07f91",
				iconServer: "iconServer__07f91",
				strikethrough: "strikethrough__07f91",
				selected: "selected__07f91",
				optionsButton: "optionsButton__07f91",
				optionsActive: "optionsActive__07f91",
				optionsButtonContainer: "optionsButtonContainer__07f91",
				optionsContainerActive: "optionsContainerActive__07f91",
				clanTag: "clanTag__07f91",
				isOverlay: "isOverlay__07f91",
				usernameSpeaking: "usernameSpeaking__07f91",
				iconPriortySpeakerSpeaking: "iconPriortySpeakerSpeaking__07f91",
				disabled: "disabled__07f91",
				ringing: "ringing__07f91",
				guestSuffix: "guestSuffix__07f91"
			}
		},
		521361: function(e, t, n) {
			e.exports = {
				selector: "selector_e1dc93",
				selectedDevice: "selectedDevice_e1dc93"
			}
		},
		690410: function(e, t, n) {
			e.exports = {
				floaterWrapper: "floaterWrapper__1836e",
				visibleFloater: "visibleFloater__1836e",
				progressText: "progressText__1836e"
			}
		},
		791422: function(e, t, n) {
			e.exports = {
				floaterWrapper: "floaterWrapper__729b7",
				visibleFloater: "visibleFloater__729b7"
			}
		},
		270217: function(e, t, n) {
			e.exports = {
				voiceFilterHero: "voiceFilterHero_cb3698",
				bgGradient: "bgGradient_cb3698",
				bgGradientHighlight: "bgGradientHighlight_cb3698",
				iconWrapper: "iconWrapper_cb3698",
				activeVoiceIcon: "activeVoiceIcon_cb3698",
				tooltip: "tooltip_cb3698",
				tooltipContent: "tooltipContent_cb3698",
				tooltipHeader: "tooltipHeader_cb3698",
				buttonWrapper: "buttonWrapper_cb3698",
				descriptionWrapper: "descriptionWrapper_cb3698",
				description: "description_cb3698",
				button: "button_cb3698",
				offWhiteText: "offWhiteText_cb3698",
				loopbackEnabled: "loopbackEnabled_cb3698"
			}
		},
		905490: function(e, t, n) {
			n.r(e.exports = {
				profile: "profile_ed0705",
				underDevelopment: "underDevelopment_ed0705",
				insetBorder: "insetBorder_ed0705",
				thumbnail: "thumbnail_ed0705",
				filterName: "filterName_ed0705",
				downloadRequiredContent: "downloadRequiredContent_ed0705",
				iconCircle: "iconCircle_ed0705",
				lockedCircle: "lockedCircle_ed0705",
				clockCircle: "clockCircle_ed0705",
				iconBorder: "iconBorder_ed0705",
				lockedIcon: "lockedIcon_ed0705",
				clockIcon: "clockIcon_ed0705",
				hoverButtonCircle: "hoverButtonCircle_ed0705",
				previewButton: "previewButton_ed0705",
				filter: "filter_ed0705",
				selector: "selector_ed0705",
				selected: "selected_ed0705",
				locked: "locked_ed0705",
				visible: "visible_ed0705",
				iconTreatmentsWrapper: "iconTreatmentsWrapper_ed0705",
				checkmark: "checkmark_ed0705",
				spinner: "spinner_ed0705",
				spinnerWrapper: "spinnerWrapper_ed0705",
				skye: "skye_ed0705",
				quinn: "quinn_ed0705",
				axel: "axel_ed0705",
				sebastien: "sebastien_ed0705",
				megaphone: "megaphone_ed0705",
				robot: "robot_ed0705",
				tunes: "tunes_ed0705",
				ghost: "ghost_ed0705",
				spacebunny: "spacebunny_ed0705",
				justus: "justus_ed0705",
				harper: "harper_ed0705",
				villain: "villain_ed0705",
				solara: "solara_ed0705",
				cave: "cave_ed0705",
				deepfried: "deepfried_ed0705"
			})
		},
		819496: function(e, t, n) {
			e.exports = {
				countdownContainer: "countdownContainer__8fece",
				iconContainer: "iconContainer__8fece",
				clockIcon: "clockIcon__8fece",
				clockIconWrapper: "clockIconWrapper__8fece",
				digitContainer: "digitContainer__8fece",
				digitsContainer: "digitsContainer__8fece",
				colonContainer: "colonContainer__8fece",
				animatedDigit: "animatedDigit__8fece",
				tinyDot: "tinyDot__8fece",
				isScrolled: "isScrolled__8fece"
			}
		},
		92609: function(e, t, n) {
			e.exports = {
				row: "row__6500b",
				container: "container__6500b",
				header: "header__6500b",
				loading: "loading__6500b",
				iconMessage: "iconMessage__6500b"
			}
		},
		130802: function(e, t, n) {
			e.exports = {
				voiceFiltersPopout: "voiceFiltersPopout_e2f668",
				wide: "wide_e2f668",
				notResizable: "notResizable_e2f668",
				voiceFiltersHeader: "voiceFiltersHeader_e2f668",
				voiceFiltersFooter: "voiceFiltersFooter_e2f668",
				hasActiveVoice: "hasActiveVoice_e2f668",
				voiceFiltersFooterButton: "voiceFiltersFooterButton_e2f668",
				resizeHandle: "resizeHandle_e2f668",
				voiceFiltersFooterButtonInner: "voiceFiltersFooterButtonInner_e2f668",
				resizePill: "resizePill_e2f668",
				upsell: "upsell_e2f668",
				subscribeButton: "subscribeButton_e2f668",
				upsellCountdownContainer: "upsellCountdownContainer_e2f668",
				upsellContainer: "upsellContainer_e2f668"
			}
		}
	}
]);
//# sourceMappingURL=41b1d1771c5cbd66.js.map