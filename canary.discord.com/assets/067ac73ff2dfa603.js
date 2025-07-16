"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["23491"], {
		969728: function(e) {
			e.exports = "/assets/a5041f91a8a7f1d5.svg"
		},
		619915: function(e, t, n) {
			n.d(t, {
				QN: () => p,
				ZP: () => s,
				gb: () => f,
				uF: () => v
			}), n(388685), n(539854);
			var i = n(73800),
				r = n(442837),
				l = n(835473),
				o = n(158776),
				a = n(594174),
				u = n(823379),
				c = n(317381),
				d = n(16609);

			function s(e, t) {
				return f((0, r.Wu)([c.ZP], () => null != e && null != e.id && "" !== e.id ? c.ZP.getEmbeddedActivitiesForChannel(e.id) : c.i6), t)
			}

			function p(e) {
				let t = f((0, r.e7)([c.ZP], () => null != e ? c.ZP.getEmbeddedActivitiesForGuild(e) : c.i6));
				return i.useMemo(() => {
					let e = new Map;
					return t.forEach(t => {
						var n;
						let i = (0, d.p)(t.embeddedActivity.location);
						if (null == i) return;
						let r = null != (n = e.get(i)) ? n : [];
						r.push(t), e.set(i, r)
					}), e
				}, [t])
			}

			function f(e, t) {
				let n = e.map(e => e.applicationId),
					o = (0, l.Z)(n),
					c = new Set([]);
				for (let t of e)
					for (let e of t.userIds) c.add(e);
				let d = (0, r.Wu)([a.default], () => {
					let e = [];
					for (let t of c) e.push(a.default.getUser(t));
					return e
				}, [c]);
				return i.useMemo(() => {
					let n = new Map;
					return d.forEach(e => {
						null != e && n.set(e.id, e)
					}), e.map((e, i) => {
						let r = o[i],
							l = [];
						if (null != l)
							for (let i of e.userIds) {
								let e = n.get(i);
								if (null != e && null != t) {
									let n = t(e);
									null != n && l.push(n)
								}
							}
						return null == r ? null : {
							embeddedActivity: e,
							application: r,
							userParticipantAvatarUrls: l
						}
					}).filter(u.lm)
				}, [e, o, d, t])
			}

			function v(e) {
				return (0, r.e7)([o.Z], () => {
					let t = new Map;
					return e.forEach(e => {
						var n, i, r;
						let l = o.Z.findActivity(null == e ? void 0 : e.embeddedActivity.userIds.values().next().value, t => {
							var n;
							return t.application_id === (null == e || null == (n = e.application) ? void 0 : n.id)
						});
						t.set(null == e || null == (n = e.application) ? void 0 : n.id, (i = function(e) {
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
						}({}, e), r = r = {
							presenceActivity: l
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
					}), t
				}, [e], r.pF)
			}
		},
		542094: function(e, t, n) {
			n.d(t, {
				JS: () => P,
				Qv: () => I,
				ZP: () => w,
				fD: () => A,
				w1: () => S
			}), n(997841), n(704826), n(35282);
			var i, r = n(493683),
				l = n(911969),
				o = n(906732),
				a = n(835473),
				u = n(510839),
				c = n(813370),
				d = n(630388),
				s = n(358085),
				p = n(317381),
				f = n(638880),
				v = n(122613),
				b = n(619915),
				y = n(16609),
				m = n(761122),
				E = n(361213),
				g = n(716600),
				Z = n(952561),
				O = n(778569),
				h = n(701488),
				_ = n(981631),
				P = ((i = {})[i.START = 0] = "START", i[i.JOIN = 1] = "JOIN", i[i.LEAVE = 2] = "LEAVE", i);

			function w(e) {
				let {
					activityItem: t,
					context: n,
					locationObject: i,
					onActivityItemSelected: r,
					embeddedActivitiesManager: o,
					assetNames: a = ["embedded_cover"],
					backgroundResolution: u = 250,
					launchingComponentId: c,
					commandOrigin: d,
					source: p
				} = e, {
					application: f,
					activity: v
				} = t, y = v.client_platform_config[(0, m.Z)((0, s.getOS)())], g = Date.now(), Z = null != y.label_until && g < Date.parse(y.label_until) && null != y.label_from && g > Date.parse(y.label_from), h = (0, O.Z)({
					applicationId: f.id,
					size: u,
					names: a
				}), _ = null != v.activity_preview_video_asset_id ? (0, E.Z)(f.id, v.activity_preview_video_asset_id) : null, P = (0, b.ZP)("channel" === n.type ? n.channel : void 0).find(e => {
					let {
						embeddedActivity: t
					} = e;
					return f.id === t.applicationId
				}), w = I({
					context: n,
					applicationId: f.id
				}), j = S({
					application: t.application,
					context: n,
					locationObject: i,
					embeddedActivitiesManager: o,
					onActivityItemSelectedProp: r,
					launchingComponentId: c,
					commandOrigin: d,
					source: p
				}), C = A(f, t.activity);
				return {
					imageBackground: h,
					videoUrl: _,
					joinableEmbeddedApp: P,
					activityAction: w,
					onActivityItemSelected: j,
					labelType: Z ? y.label_type : l.ww.NONE,
					staffReleasePhase: C
				}
			}

			function A(e, t) {
				var n;
				let i = null != (n = e.flags) ? n : 0;
				if (!((0, d.yE)(i, _.udG.EMBEDDED_RELEASED) || (0, d.yE)(i, _.udG.EMBEDDED_FIRST_PARTY))) return;
				let r = t.client_platform_config[(0, m.Z)((0, s.getOS)())].release_phase;
				return h.eB.includes(r) ? r.replace("_", " ").replace(/(^\w|\s\w)/g, e => e.toUpperCase()) : void 0
			}

			function I(e) {
				let {
					context: t,
					applicationId: n,
					fetchesApplication: i = !0
				} = e, r = 0, l = "channel" === t.type ? t.channel : void 0, o = (0, g.Z)(), u = (0, Z.Z)({
					fetchesApplication: i
				}), c = (0, a.q)(n, i), d = (0, b.ZP)(l).find(e => {
					let {
						embeddedActivity: t
					} = e;
					return null != c && c.id === t.applicationId
				});
				if (null == c) return r;
				let s = (0, y.p)(null == o ? void 0 : o.location);
				return null != l && s === l.id && (null == u ? void 0 : u.id) === c.id ? r = 2 : null != d && (r = 1), r
			}

			function S(e) {
				var t;
				let {
					application: n,
					botUserIdForAppDM: i,
					context: l,
					locationObject: a,
					embeddedActivitiesManager: d,
					onActivityItemSelectedProp: s,
					launchingComponentId: b,
					commandOrigin: y,
					sectionName: m,
					source: E,
					fetchesApplication: Z = !0,
					customId: O,
					referrerId: h,
					onConfirmActivityLaunchChecksAlertOpen: _
				} = e, P = null != (t = null == n ? void 0 : n.id) ? t : "", w = I({
					context: l,
					applicationId: P,
					fetchesApplication: Z
				}), {
					analyticsLocations: A
				} = (0, o.ZP)(), S = (0, g.Z)();
				if (null == n) return () => {
					null == s || s({
						applicationId: ""
					})
				};
				switch (w) {
					case 0:
						return async () => {
							if ((0, c.g)(n)) {
								try {
									(0, u.s2)({
										applicationId: P
									}), null == s || s({
										applicationId: P
									})
								} catch (e) {}
								return
							}
							let e = "channel" === l.type ? l.channel.id : void 0;
							if (null != i) try {
								e = await r.Z.openPrivateChannel({
									recipientIds: i,
									navigateToChannel: !0
								})
							} catch (e) {
								return
							}
							await (0, v.Z)({
								targetApplicationId: P,
								locationObject: a,
								channelId: e,
								analyticsLocations: A,
								componentId: b,
								commandOrigin: y,
								sectionName: m,
								source: E,
								customId: O,
								referrerId: h,
								onConfirmActivityLaunchChecksAlertOpen: _
							}).then(e => e && (null == s ? void 0 : s({
								applicationId: P
							})))
						};
					case 1:
						return async () => {
							p.ZP.isLaunchingActivity() || await (0, f.Z)({
								applicationId: P,
								activityChannelId: "channel" === l.type ? l.channel.id : void 0,
								locationObject: a,
								analyticsLocations: A,
								componentId: b,
								sectionName: m,
								source: E,
								customId: O,
								referrerId: h
							}).then(e => e && (null == s ? void 0 : s({
								applicationId: P
							})))
						};
					case 2:
						return () => {
							p.ZP.isLaunchingActivity() || (null != S && d.leaveActivity({
								location: S.location,
								applicationId: P
							}), null == s || s({
								applicationId: P
							}))
						}
				}
			}
		},
		716600: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			var i = n(442837),
				r = n(317381);

			function l() {
				return (0, i.e7)([r.ZP], () => r.ZP.getCurrentEmbeddedActivity())
			}
		},
		952561: function(e, t, n) {
			n.d(t, {
				Z: () => l
			}), n(388685);
			var i = n(835473),
				r = n(716600);

			function l() {
				let {
					fetchesApplication: e = !0
				} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = (0, r.Z)(), [n] = (0, i.Z)(null == t ? [] : [t.applicationId], e);
				return null != n ? n : void 0
			}
		},
		346683: function(e, t, n) {
			n.d(t, {
				Q: () => l
			}), n(388685);
			var i = n(73800),
				r = n(542094);

			function l(e) {
				let [t, n] = i.useState(e);
				return i.useLayoutEffect(() => {
					if (e === r.JS.LEAVE) {
						let t = setTimeout(() => n(e), 100);
						return () => clearTimeout(t)
					}
					n(e)
				}, [e]), t
			}
		},
		915346: function(e, t, n) {
			n.d(t, {
				W: () => l
			});
			var i = n(493683),
				r = n(122613);
			async function l(e) {
				let {
					appId: t,
					botId: n,
					analyticsLocations: l,
					customId: o,
					referrerId: a,
					commandOrigin: u
				} = e, c = await i.Z.openPrivateChannel({
					recipientIds: n
				});
				return await (0, r.Z)({
					targetApplicationId: t,
					channelId: c,
					analyticsLocations: l,
					customId: o,
					referrerId: a,
					commandOrigin: u
				})
			}
		},
		176412: function(e, t, n) {
			n.d(t, {
				Bm: () => T,
				P7: () => C,
				X: () => D,
				ae: () => j
			});
			var i, r, l = n(73800),
				o = n(392711),
				a = n.n(o),
				u = n(442837),
				c = n(25209),
				d = n(755721),
				s = n(2052),
				p = n(542094),
				f = n(513202),
				v = n(367907),
				b = n(213459),
				y = n(895924),
				m = n(691424),
				E = n(428595),
				g = n(364458),
				Z = n(585483),
				O = n(499254),
				h = n(541099),
				_ = n(827498),
				P = n(346683),
				w = n(981631),
				A = n(388032);
			let I = (i = function(e) {
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
				}({}, E.Z.RULES.commandMention), r = r = {
					parse: (e, t, n) => ({
						content: E.Z.RULES.commandMention.parse(e, t, n).content
					})
				}, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var i = Object.getOwnPropertySymbols(e);
						n.push.apply(n, i)
					}
					return n
				})(Object(r)).forEach(function(e) {
					Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(r, e))
				}), i),
				S = a().pick((0, g.Z)([E.Z.RULES, {
					commandMention: I
				}, (0, m.Z)({
					enableBuildOverrides: !1,
					enableEmojiClick: !1
				})]), ["commandMention", "customEmoji", "em", "emoji", "emoticon", "highlight", "inlineCode", "looseEm", "s", "strong", "text", "timestamp", "u", "spoiler"]),
				j = c.w4(S);

			function C(e) {
				let {
					context: t,
					application: n,
					location: i,
					sectionName: r,
					commandName: o,
					autoDismissOnClick: a = !0,
					launchingComponentId: c,
					submitting: m = !1,
					fetchesApplication: E = !0,
					onConfirmActivityLaunchChecksAlertOpen: g
				} = e, Z = (0, s.O)(), I = (0, p.Qv)({
					context: t,
					applicationId: n.id,
					fetchesApplication: E
				}), S = (0, P.Q)(I), j = (0, u.e7)([h.Z], () => h.Z.entrypoint()), C = l.useMemo(() => {
					var e, i, r;
					if ("channel" !== t.type) return null != (r = null == (e = n.bot) ? void 0 : e.id) ? r : null == (i = (0, b.If)(t, n.id).descriptor) ? void 0 : i.botId
				}, [t, n.id, n.bot]), T = (0, p.w1)({
					application: n,
					botUserIdForAppDM: C,
					embeddedActivitiesManager: f.Z,
					context: t,
					locationObject: Z.location,
					onActivityItemSelectedProp: e => {
						let {
							applicationId: t
						} = e;
						a && O.yT(_.ti.ACTIVITY), (0, v.yw)(w.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
							location: i,
							application_id: t,
							section_name: r,
							action: S,
							source: j
						})
					},
					launchingComponentId: c,
					commandOrigin: y.bB.APPLICATION_LAUNCHER,
					sectionName: r,
					source: j,
					fetchesApplication: E,
					onConfirmActivityLaunchChecksAlertOpen: g
				}), D = d.Tt.BRAND, M = null != o ? o : A.intl.string(A.t.zKX8Nj);
				return S === p.JS.JOIN ? (D = d.Tt.GREEN, M = A.intl.string(A.t.d9PsMj)) : S !== p.JS.LEAVE || m || (D = d.Tt.RED, M = A.intl.string(A.t["Hi1/aW"])), {
					onActivityItemSelected: T,
					activityAction: S,
					buttonColor: D,
					buttonText: M
				}
			}

			function T(e, t) {
				let n = h.Z.entrypoint(),
					i = l.useMemo(() => (0, o.debounce)((e, t) => {
						(0, v.yw)(w.rMx.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
							type: e,
							source: t
						})
					}, 400, {
						leading: !1,
						trailing: !0
					}), []);
				l.useEffect(() => {
					null != e && i(e, n)
				}, [e, t, n, i])
			}

			function D(e) {
				Z.S.dispatchToLastSubscribed(w.CkL.OPEN_APP_LAUNCHER, {
					applicationId: e
				})
			}
		},
		327220: function(e, t, n) {
			n.d(t, {
				Z: () => a
			}), n(388685);
			var i = n(73800),
				r = n(442837),
				l = n(592125),
				o = n(9156);

			function a(e) {
				let t = (0, r.e7)([l.Z], () => l.Z.getPrivateChannelsVersion()),
					n = (0, r.e7)([l.Z], () => l.Z.getMutableDMsByUserIds(), [t]),
					a = (0, r.e7)([o.ZP], () => o.ZP.getMutedChannels(null)),
					u = i.useMemo(() => {
						let e = new Set;
						for (let t in n) {
							let i = n[t];
							null != i && a.has(i) && e.add(t)
						}
						return e
					}, [n, a]);
				return i.useMemo(() => null == e ? void 0 : e.filter(e => {
					for (let t of e.participants)
						if (u.has(t)) return !1;
					return !0
				}), [e, u])
			}
		},
		959580: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var i = n(442837),
				r = n(719247);
			let l = [];

			function o(e) {
				return (0, i.Wu)([r.Z], () => null == e ? l : e.filter(r.Z.canRenderContent), [e])
			}
		},
		371177: function(e, t, n) {
			n.d(t, {
				Z: () => c
			}), n(388685);
			var i = n(73800),
				r = n(442837),
				l = n(902704),
				o = n(158776),
				a = n(561308),
				u = n(231338);

			function c(e) {
				let t = i.useRef(new Set),
					n = i.useMemo(() => {
						let n = new Set(null == e ? void 0 : e.map(e => e.author_id));
						return (0, l.E)([...t.current], [...n]) || (t.current = n), t.current
					}, [e]),
					c = (0, r.Wu)([o.Z], () => Array.from(n).filter(e => {
						let t = o.Z.getStatus(e);
						return null !== t && [u.Sk.OFFLINE, u.Sk.INVISIBLE].includes(t)
					}));
				return i.useMemo(() => {
					let t = new Set(c);
					return null == e ? void 0 : e.filter(e => !(0, a.kr)(e) || !t.has(e.author_id))
				}, [e, c])
			}
		},
		897674: function(e, t, n) {
			n.d(t, {
				Z: () => d,
				g: () => c
			}), n(388685);
			var i = n(73800),
				r = n(442837),
				l = n(146282),
				o = n(327220),
				a = n(959580),
				u = n(371177);

			function c(e, t) {
				let {
					types: n
				} = e;
				return null == n || !!n.has(t.content_type)
			}

			function d(e) {
				let {
					id: t,
					unrankedEntries: n = !1
				} = e, {
					feed: d,
					filters: s
				} = (0, r.cj)([l.Z], () => ({
					feed: l.Z.getFeed(t),
					filters: l.Z.getFilters()
				})), p = i.useMemo(() => {
					let e = n ? null == d ? void 0 : d.unranked_game_entries.map(e => e.content) : null == d ? void 0 : d.entries.map(e => e.content);
					return null != s ? null == e ? void 0 : e.filter(e => c(s, e)) : e
				}, [d, s, n]);
				return p = (0, o.Z)(p), p = (0, a.Z)(p), p = (0, u.Z)(p)
			}
		},
		28881: function(e, t, n) {
			n.d(t, {
				QK: () => r
			});
			let i = (0, n(818083).B)({
					kind: "user",
					id: "2025-06_contextless_frames",
					label: "Contextless Frames",
					defaultConfig: {
						enabled: !1
					},
					treatments: [{
						id: 1,
						label: "Enable Contextless Frames",
						config: {
							enabled: !0
						}
					}]
				}),
				r = function(e) {
					let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
					return i.getCurrentConfig({
						location: e
					}, {
						autoTrackExposure: t
					})
				}
		},
		813370: function(e, t, n) {
			n.d(t, {
				g: () => a
			}), n(997841);
			var i = n(783097),
				r = n(630388),
				l = n(28881),
				o = n(981631);

			function a(e) {
				var t;
				if (!(0, i.BQ)(e)) return !1;
				let n = null != (t = e.flags) ? t : 0,
					a = (0, r.yE)(n, o.udG.EMBEDDED),
					u = (0, r.yE)(n, o.udG.CONTEXTLESS_ACTIVITY);
				return !!a && !!u && (0, l.QK)("canLaunchFrame").enabled
			}
		},
		567409: function(e, t, n) {
			n.d(t, {
				N: () => p
			}), n(388685);
			var i = n(73800),
				r = n(392711),
				l = n.n(r),
				o = n(876215),
				a = n(897674),
				u = n(709054),
				c = n(206583);
			let d = new Set([o.s.PLAYED_GAME, o.s.LAUNCHED_ACTIVITY]),
				s = e => d.has(e.content_type);

			function p(e) {
				let t = (0, a.Z)({
						id: c.YN.GLOBAL_FEED
					}),
					n = (0, a.Z)({
						id: c.YN.GLOBAL_FEED,
						unrankedEntries: !0
					});
				return i.useMemo(() => l()(n).unionBy(t, e => e.id).filter(s).filter(t => t.extra.application_id === e).orderBy(e => u.default.extractTimestamp(e.id), "desc").uniqWith((e, t) => e.author_id === t.author_id && e.extra.application_id === t.extra.application_id).value(), [n, e, t])
			}
		}
	}
]);
//# sourceMappingURL=067ac73ff2dfa603.js.map