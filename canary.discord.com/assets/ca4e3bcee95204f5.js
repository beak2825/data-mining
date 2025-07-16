"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["35755"], {
		983008: function(e) {
			e.exports = "/assets/3809fd18e93ab899.svg"
		},
		478408: function(e) {
			e.exports = "/assets/1ff6f8391190866c.svg"
		},
		723163: function(e, t, n) {
			n.d(t, {
				Z: () => d
			}), n(388685);
			var l = n(73800),
				i = n(392711),
				r = n.n(i),
				a = n(442837),
				o = n(567409),
				s = n(699516),
				c = n(594174),
				u = n(709054);

			function d(e) {
				let t = (0, o.N)(e.id),
					n = (0, a.cj)([c.default, s.Z], () => {
						let e = {};
						for (let n of t.values()) {
							let t = c.default.getUser(n.author_id),
								l = s.Z.isFriend(n.author_id);
							null != t && l && (e[t.id] = n.id)
						}
						return e
					}),
					[i, d] = l.useState([]);
				return l.useEffect(() => {
					let e = r().sortBy(Object.entries(n), e => {
						let [t, n] = e;
						return -u.default.extractTimestamp(n)
					});
					d(r().map(e, e => {
						let [t, n] = e;
						return c.default.getUser(t)
					}).filter(e => null != e))
				}, [n]), {
					friends: i,
					friendsLastPlayed: n
				}
			}
		},
		694312: function(e, t, n) {
			n.d(t, {
				E: () => p
			}), n(388685);
			var l = n(73800),
				i = n(442837),
				r = n(835473),
				a = n(594174),
				o = n(695103),
				s = n(823379),
				c = n(358085),
				u = n(317381),
				d = n(761122);

			function p(e) {
				let t = (0, i.e7)([a.default], a.default.getCurrentUser),
					n = (0, i.Wu)([u.ZP], () => u.ZP.getShelfActivities(e)),
					p = (0, i.e7)([o.Z], () => o.Z.testModeEmbeddedApplicationId),
					m = n.map(e => e.application_id),
					f = null != p ? [p, ...m] : m,
					h = (0, r.Z)(f),
					v = l.useMemo(() => h.filter(s.lm), [h]),
					y = l.useMemo(() => null != p && v.length > 0 && v[0].id === p && null != v[0].embeddedActivityConfig ? [{
						activity: v[0].embeddedActivityConfig,
						application: v[0]
					}] : [], [v, p]),
					x = l.useMemo(() => n.map(e => {
						let t = v.find(t => t.id === e.application_id);
						return null == t ? null : {
							activity: e,
							application: t
						}
					}).filter(s.lm), [n, v]);
				return l.useMemo(() => [...y, ...x].filter(e => {
					var t;
					let {
						activity: n
					} = e;
					return (null != (t = n.supported_platforms) ? t : []).includes((0, d.Z)((0, c.getOS)()))
				}).filter(e => {
					let {
						activity: n
					} = e;
					return !n.requires_age_gate || (null == t ? void 0 : t.nsfwAllowed) === !0 || (null == t ? void 0 : t.nsfwAllowed) == null
				}), [null == t ? void 0 : t.nsfwAllowed, x, y])
			}
		},
		127255: function(e, t, n) {
			n.d(t, {
				Z: () => c
			}), n(388685), n(539854);
			var l = n(73800),
				i = n(442837),
				r = n(115130),
				a = n(694312),
				o = n(405625),
				s = n(664097);

			function c(e) {
				let {
					guildId: t,
					enableFilter: n = !1
				} = e, {
					filter: c
				} = (0, i.cj)([r.Z], () => ({
					filter: r.Z.getFilter()
				})), u = (0, a.E)(t), d = (0, o.Z)(u), p = (0, s.o)();
				return l.useMemo(() => {
					function e(e) {
						return !!(!n || "" === c || e.application.name.toLowerCase().includes(c.toLowerCase()))
					}
					let t = [...p].filter(e),
						l = new Set(t.map(e => e.application.id));
					for (let n of d) !l.has(n.application.id) && e(n) && t.push(n);
					return t
				}, [p, n, c, d])
			}
		},
		405625: function(e, t, n) {
			n.d(t, {
				Z: () => s
			}), n(539854), n(388685), n(642613);
			var l = n(73800),
				i = n(911969),
				r = n(675478),
				a = n(358085),
				o = n(761122);

			function s(e) {
				return r.DZ.loadIfNecessary(), l.useMemo(() => {
					let t = [];
					e.forEach(e => t.push(e.application.id));
					let n = [...t];
					return n.sort((e, n) => t.findIndex(t => t === e) < t.findIndex(e => e === n) ? -1 : 1), c(e, n)
				}, [e])
			}
			let c = (e, t) => {
				let n = [...e],
					l = 0;
				return t.forEach(e => {
					let t = n.findIndex(t => t.application.id === e);
					if (-1 !== t) {
						let e = n[t];
						n.splice(t, 1), n = [...n.slice(0, l), e, ...n.slice(l)], ++l
					}
				}), n.map((e, t) => [e, t]).filter(e => {
					var t, n;
					let [l] = e, r = null == (n = l.application.embeddedActivityConfig) || null == (t = n.client_platform_config[(0, o.Z)((0, a.getOS)())]) ? void 0 : t.label_type;
					return !!r && (r === i.ww.NEW || r === i.ww.UPDATED)
				}).forEach(e => {
					let [t, l] = e, i = null != t.application.embeddedActivityConfig && null != t.application.embeddedActivityConfig.shelf_rank ? t.application.embeddedActivityConfig.shelf_rank - 1 : l;
					if (i < l) {
						let e = n[l];
						n.splice(l, 1), n = [...n.slice(0, i), e, ...n.slice(i)]
					}
				}), n
			}
		},
		664097: function(e, t, n) {
			n.d(t, {
				o: () => o
			}), n(642613);
			var l = n(73800),
				i = n(442837),
				r = n(115130),
				a = n(701488);
			let o = () => {
				let {
					isEnabled: e,
					lastUsedObject: t
				} = (0, i.cj)([r.Z], () => ({
					isEnabled: r.Z.getIsEnabled(),
					lastUsedObject: r.Z.getLastUsedObject()
				}), []), n = (0, i.Wu)([r.Z], () => r.Z.getDeveloperShelfItems(), []);
				return l.useMemo(() => e ? n.map(e => {
					var t, n;
					return {
						application: e,
						activity: (t = function(e) {
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
						}({}, a.wT, e.embeddedActivityConfig), n = n = {
							application_id: e.id
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var l = Object.getOwnPropertySymbols(e);
								n.push.apply(n, l)
							}
							return n
						})(Object(n)).forEach(function(e) {
							Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
						}), t)
					}
				}).sort((e, n) => {
					let l = t[e.application.id],
						i = t[n.application.id];
					return null == l ? 1 : null == i ? -1 : i - l
				}) : [], [n, e, t])
			}
		},
		880308: function(e, t, n) {
			n.d(t, {
				g: () => c
			});
			var l = n(73800),
				i = n(442837),
				r = n(695346),
				a = n(115130),
				o = n(566620),
				s = n(790920);

			function c() {
				let e = (0, s.z)(),
					t = r.Sb.getSetting(),
					n = (0, i.e7)([a.Z], () => a.Z.getFetchState(), []);
				return l.useEffect(() => {
					e && t && n === a.O.INITIALIZED && (0, o.$h)()
				}, [e, n, t]), null
			}
		},
		147865: function(e, t, n) {
			n.d(t, {
				lY: () => i
			});
			var l = n(388032);

			function i(e) {
				return e > 0 ? "1-".concat(e) : l.intl.string(l.t.zMNEiI)
			}
		},
		182906: function(e, t, n) {
			n.d(t, {
				Z: () => o
			}), n(388685);
			var l = n(255367),
				i = n(73800),
				r = n(558522),
				a = n(484112);

			function o(e) {
				let {
					imageBackground: t,
					applicationName: n,
					imageClassName: o,
					imageNotFoundClassName: s
				} = e, [c, u] = i.useState(!1);
				return "not-found" === t.state || c ? (0, l.jsx)("div", {
					className: s,
					children: (0, l.jsx)(r.Z, {
						className: a.brokenImageIcon
					})
				}) : "loading" === t.state ? null : (0, l.jsx)("img", {
					alt: n,
					className: o,
					src: t.url,
					onError: () => u(!0)
				})
			}
		},
		556505: function(e, t, n) {
			n.d(t, {
				Z: () => c
			}), n(388685);
			var l = n(255367),
				i = n(73800),
				r = n(481060),
				a = n(911969),
				o = n(388032),
				s = n(261773);

			function c(e) {
				let {
					labelType: t,
					collapsed: n = !1
				} = e, c = t === a.ww.NEW ? o.intl.string(o.t.y2b7CA) : o.intl.string(o.t["/qdhkp"]), u = t === a.ww.NEW ? s.activityNewBadge : s.activityUpdatedBadge, [d, p] = i.useState(n ? "" : c);
				return (i.useEffect(() => {
					n ? p("") : t === a.ww.NEW ? p(o.intl.string(o.t.y2b7CA)) : t === a.ww.UPDATED && p(o.intl.string(o.t["/qdhkp"]))
				}, [n, t]), t === a.ww.NONE) ? null : (0, l.jsx)(r.IGR, {
					className: u,
					disableColor: !0,
					text: (0, l.jsx)("span", {
						children: d
					})
				})
			}
		},
		427996: function(e, t, n) {
			n.d(t, {
				W: () => p
			});
			var l = n(255367);
			n(73800);
			var i = n(120356),
				r = n.n(i),
				a = n(399606),
				o = n(481060),
				s = n(337682),
				c = n(115130),
				u = n(388032),
				d = n(642804);

			function p(e) {
				let {
					hideSearch: t,
					className: n
				} = e, {
					activityUrlOverride: i,
					useActivityUrlOverride: p,
					filter: m
				} = (0, a.cj)([c.Z], () => ({
					activityUrlOverride: c.Z.getActivityUrlOverride(),
					useActivityUrlOverride: c.Z.getUseActivityUrlOverride(),
					filter: c.Z.getFilter()
				}), []);
				return (0, l.jsxs)("div", {
					className: r()(d.container, n),
					children: [(0, l.jsx)(o.XZJ, {
						type: o.XZJ.Types.INVERTED,
						value: p,
						onClick: s.Y$,
						children: (0, l.jsx)(o.Text, {
							variant: "text-md/semibold",
							children: u.intl.string(u.t["3TSGuL"])
						})
					}), p ? (0, l.jsx)(o.xJW, {
						title: u.intl.string(u.t["9rnmen"]),
						children: (0, l.jsx)(o.oil, {
							disabled: !p,
							value: null != i ? i : void 0,
							onChange: s.jS,
							placeholder: "https://localhost:3000"
						})
					}) : null, !0 === t ? null : (0, l.jsx)("div", {
						children: (0, l.jsx)(o.E1j, {
							className: d.searchBar,
							query: m,
							onChange: s.a8,
							onClear: function() {
								s.a8("")
							}
						})
					})]
				})
			}
		},
		706302: function(e, t, n) {
			n.d(t, {
				Z: () => r
			});
			var l = n(812236),
				i = n(989573);

			function r(e) {
				let {
					context: t,
					application: n,
					botUserId: r
				} = e, a = (0, l.ms)({
					context: t,
					applicationId: n.id,
					botUserId: r
				}), o = (0, i.Z)({
					context: t
				});
				return a && null != r && !o
			}
		},
		219066: function(e, t, n) {
			n.d(t, {
				Z: () => p
			}), n(388685);
			var l = n(73800),
				i = n(392711),
				r = n.n(i),
				a = n(911969),
				o = n(254711),
				s = n(213459),
				c = n(10718),
				u = n(148958),
				d = n(689079);

			function p(e) {
				var t;
				let {
					context: n
				} = e, i = "channel" === n.type ? n.channel : void 0, p = (0, s.LD)(null == i ? void 0 : i.guild_id, !0), {
					commandsByActiveSection: m,
					loading: f
				} = c.wi({
					context: n,
					filters: {
						commandTypes: [a.yU.CHAT, a.yU.PRIMARY_ENTRY_POINT]
					},
					options: {
						placeholderCount: 0,
						limit: d.tn,
						includeFrecency: !0
					},
					allowFetch: !0
				}), h = l.useMemo(() => m.reduce((e, t) => {
					let {
						section: n,
						data: l
					} = t;
					return l.length > 0 && e.add(n.id), e
				}, new Set), [m]), v = l.useMemo(() => {
					var e, t;
					return Object.values(null != (t = null == (e = p.result) ? void 0 : e.sections) ? t : {}).map(e => {
						let {
							descriptor: t
						} = e;
						return t
					}).filter(e => !(e.id in o.Tm) && h.has(e.id))
				}, [null == (t = p.result) ? void 0 : t.sections, h]), y = (0, u.h)(v);
				return {
					appsInThisServer: l.useMemo(() => r().compact(y.map(e => {
						let {
							application: t
						} = e;
						return t
					})).map(e => ({
						application: e
					})), [y]),
					isLoading: p.fetchState.fetching || f
				}
			}
		},
		106066: function(e, t, n) {
			n.d(t, {
				s: () => i
			});
			var l = n(695346);

			function i() {
				return l.Sb.useSetting()
			}
		},
		496158: function(e, t, n) {
			n.d(t, {
				D: () => r
			});
			var l = n(73800),
				i = n(430824);

			function r(e) {
				return l.useMemo(() => "contextless" === e.type ? {
					channel: void 0,
					guild: void 0
				} : {
					channel: e.channel,
					guild: i.Z.getGuild(e.channel.guild_id)
				}, [e])
			}
		},
		676161: function(e, t, n) {
			n.d(t, {
				Z: () => o
			}), n(642613);
			var l = n(73800),
				i = n(700089),
				r = n(654455),
				a = n(496158);

			function o(e) {
				let {
					context: t,
					commands: n,
					limit: o = n.length
				} = e, s = (0, a.D)(t), c = (0, i.R)(s), u = l.useMemo(() => n.reduce((e, t) => (e[t.id] = t, e), {}), [n]);
				return l.useMemo(() => c.map(e => u[e]).filter(e => null != e).sort((e, t) => {
					let n = r.ZP.getScoreWithoutLoadingLatest(s, e);
					return r.ZP.getScoreWithoutLoadingLatest(s, t) - n
				}).slice(0, o), [c, u, s, o])
			}
		},
		160973: function(e, t, n) {
			n.d(t, {
				Z: () => m
			});
			var l = n(442837),
				i = n(595519),
				r = n(374065),
				a = n(761122),
				o = n(542094),
				s = n(973616),
				c = n(496675),
				u = n(358085),
				d = n(231338),
				p = n(388032);

			function m(e) {
				let t, {
						context: n,
						application: m,
						activityAction: f
					} = e,
					h = "channel" === n.type ? n.channel : void 0,
					v = (0, l.e7)([c.Z], () => c.Z.can(d.Pl.USE_EMBEDDED_ACTIVITIES, h)),
					y = (0, r.KF)(null == h ? void 0 : h.id),
					x = !1;
				switch (f) {
					case o.JS.LEAVE:
						x = !1;
						break;
					case o.JS.START:
						null == h ? x = !1 : (null == h ? void 0 : h.isGuildVoice()) ? y !== r.jy.CAN_LAUNCH && (x = !0) : (0, i.WS)(h) || (x = !0);
						break;
					case o.JS.JOIN:
						(null == h ? void 0 : h.isGuildVoice()) ? x = !v: (0, i.WS)(h) || (x = !0)
				}
				if (f !== o.JS.LEAVE) {
					let e = m instanceof s.ZP ? m.embeddedActivityConfig : m.embedded_activity_config,
						n = (0, a.Z)((0, u.getOS)());
					null == e || e.supported_platforms.includes(n) ? (null == h ? void 0 : h.isThread()) && (x = !0, t = p.intl.string(p.t.ddSR3t)) : (x = !1, t = p.intl.string(p.t.z2YTgI))
				}
				return x && null == t && (t = p.intl.string(p.t.f41E1t)), {
					disabled: x,
					reason: t
				}
			}
		},
		660090: function(e, t, n) {
			n.d(t, {
				Z: () => o
			}), n(642613), n(388685);
			var l = n(73800),
				i = n(471518),
				r = n(70956),
				a = n(314734);

			function o(e) {
				let {
					sectionId: t,
					commandsByActiveSection: n
				} = e, [o, s] = l.useState(a.bS.ALPHABETICAL), c = l.useMemo(() => {
					var e, l;
					return null != (l = null == (e = n.find(e => e.section.id === t)) ? void 0 : e.data) ? l : []
				}, [n, t]), {
					popularSortedCommands: u,
					canSort: d
				} = function(e) {
					let {
						alphabeticalSortedCommands: t
					} = e;
					return l.useMemo(() => {
						if (t.length <= 1) return {
							popularSortedCommands: t,
							canSort: !1
						};
						let e = !1,
							n = t.map((t, n) => (e = e || null != t.global_popularity_rank, {
								command: t,
								alphabeticalSortIndex: n
							}));
						return e ? (n.sort((e, t) => {
							let n = e.command.global_popularity_rank,
								l = t.command.global_popularity_rank;
							if (null != n && null != l) {
								if (n !== l) return n - l
							} else if (null != n) return -1;
							else if (null != l) return 1;
							return e.alphabeticalSortIndex - t.alphabeticalSortIndex
						}), {
							popularSortedCommands: n.map(e => {
								let {
									command: t
								} = e;
								return t
							}),
							canSort: !0
						}) : {
							popularSortedCommands: t,
							canSort: !1
						}
					}, [t])
				}({
					alphabeticalSortedCommands: c
				});
				l.useEffect(() => {
					i.i6(t, {
						dontRefetchMs: r.Z.Millis.DAY
					})
				}, [t]), l.useLayoutEffect(() => {
					d && s(a.bS.POPULAR)
				}, [d]);
				let p = c;
				switch (o) {
					case a.bS.POPULAR:
						p = u;
						break;
					case a.bS.ALPHABETICAL:
						p = c
				}
				return {
					sortOrder: o,
					setSortOrder: s,
					commands: p,
					canSort: d
				}
			}
		},
		392370: function(e, t, n) {
			n.d(t, {
				Q2: () => A,
				pe: () => O
			}), n(388685), n(539854), n(35282), n(472816), n(794429);
			var l = n(73800),
				i = n(392711),
				r = n.n(i),
				a = n(373793),
				o = n(288385),
				s = n(442837),
				c = n(911969),
				u = n(127255),
				d = n(654455),
				p = n(213459),
				m = n(807169),
				f = n(104793),
				h = n(822245),
				v = n(471518),
				y = n(177653),
				x = n(631827),
				b = n(827498),
				g = n(783097),
				j = n(689079),
				N = n(761652);

			function C(e, t) {
				let n = h.Z.getScoreWithoutLoadingLatest(e.id);
				return h.Z.getScoreWithoutLoadingLatest(t.id) - n
			}

			function E(e, t) {
				let n = (0, g.$d)(e),
					l = (0, g.$d)(t);
				return (0, p.un)(n, l)
			}

			function P(e, t) {
				return (0, p.un)(e.displayName, t.displayName)
			}

			function O(e) {
				let {
					context: t,
					query: n,
					commandLimit: i,
					applicationLimit: a,
					searchesCommands: o = !0,
					searchesBots: s = !0,
					searchesActivities: h = !0
				} = e;
				n.startsWith("".concat(N.GI)) && (n = n.substring(1));
				let {
					commands: v,
					commandSectionMap: y,
					loading: b
				} = function(e) {
					var t, n;
					let {
						context: i,
						includeBuiltIn: r = !0,
						allowFetch: a = !0
					} = e, o = (0, p.em)(i, !0, a), s = (0, p.PL)(!0, a);
					return l.useMemo(() => {
						var e, t, n, l, a;
						let c = null != (n = null == (e = o.result) ? void 0 : e.sections) ? n : {},
							u = null != (l = null == (t = s.result) ? void 0 : t.sections) ? l : {},
							d = [...Object.keys(c), ...Object.keys(u).filter(e => !(e in c))];
						r && d.push(j.bi.BUILT_IN);
						let m = [],
							f = {};
						for (let e of d) {
							let t = (0, p.If)(i, e),
								n = null != (a = t.sectionCommands) ? a : [];
							m.push(...n), n.forEach(e => {
								null != t.descriptor && (f[e.id] = t.descriptor)
							})
						}
						return {
							commands: m,
							commandSectionMap: f,
							loading: !0 === o.fetchState.fetching || !0 === s.fetchState.fetching
						}
					}, [i, r, o.fetchState.fetching, null == (t = o.result) ? void 0 : t.sections, s.fetchState.fetching, null == (n = s.result) ? void 0 : n.sections])
				}({
					context: t,
					includeBuiltIn: !0
				}), {
					apps: O
				} = function(e) {
					let {
						context: t,
						onlyWithCommands: n,
						includeBuiltIn: i,
						allowFetch: r = !0,
						includeEmbeddedApps: a,
						includeNonEmbeddedApps: o
					} = e, s = "channel" === t.type ? t.channel : void 0, u = (0, m.Hs)(s, [c.yU.CHAT]).hasBaseAccessPermissions, d = (0, p.em)(t, u, r), f = (0, p.PL)(u, r), h = l.useCallback(e => {
						let t = e.descriptor.application;
						return null != t && (!!(a && (0, g.ye)(t)) || null != t && o && !(0, g.ye)(t) && (!n || Object.keys(e.commands).length > 0))
					}, [a, o, n]), v = [], y = new Set;
					if (null != d.result)
						for (let e of Object.values(d.result.sections)) {
							let t = e.descriptor.application;
							null != t && h(e) && (v.push(t), y.add(t.id))
						}
					if (null != f.result)
						for (let e of Object.values(f.result.sections)) {
							let t = e.descriptor.application;
							null != t && !y.has(t.id) && h(e) && v.push(t)
						}
					return o && i && v.push(g.Wx), {
						apps: v,
						loading: (null == d ? void 0 : d.fetchState.fetching) === !0 || (null == f ? void 0 : f.fetchState.fetching) === !0
					}
				}({
					context: t,
					onlyWithCommands: !0,
					includeBuiltIn: !0,
					includeEmbeddedApps: h,
					includeNonEmbeddedApps: s
				}), A = (0, u.Z)({
					guildId: "channel" === t.type ? t.channel.guild_id : null
				}), I = l.useMemo(() => {
					var e, l, r, a, s, u;
					if (!o) return [];
					return (0, x.N)(v, {
						limit: i,
						filterPredicates: [function(e) {
							let t = (0, m.k)("channel" === e.type ? e.channel : void 0, [c.yU.CHAT]),
								n = {};
							return l => {
								let {
									context: i,
									userId: r,
									roleIds: a,
									isImpersonating: o
								} = t;
								if (!(l.applicationId in n)) {
									let {
										descriptor: t,
										isGuildInstalled: s,
										isUserInstalled: c
									} = (0, p.If)(e, l.applicationId), u = (null == i ? void 0 : i.guild_id) != null ? f.ML(null == t ? void 0 : t.permissions, i.guild_id, r, a, o) : null, d = (null == i ? void 0 : i.guild_id) != null ? f.ZJ(null == t ? void 0 : t.permissions, i, i.guild_id) : null;
									n[l.applicationId] = {
										descriptor: t,
										applicationAllowedForUser: u,
										applicationAllowedForChannel: d,
										isGuildInstalled: s,
										isUserInstalled: c
									}
								}
								let {
									descriptor: s,
									applicationAllowedForChannel: c,
									applicationAllowedForUser: u,
									isGuildInstalled: d,
									isUserInstalled: m
								} = n[l.applicationId];
								return f.Ft(l, t, {
									applicationAllowedForUser: u,
									applicationAllowedForChannel: c,
									commandBotId: null == s ? void 0 : s.botId,
									isGuildInstalled: d,
									isUserInstalled: m
								}) === f.mF.ALLOWED
							}
						}(t)],
						bucketPredicates: [(l = e = n, e => {
							let t = e.untranslatedName,
								n = e.displayName;
							return t.startsWith(l) || n.startsWith(l)
						}), function(e) {
							let t = null == e ? void 0 : e.split(" "),
								n = t[0],
								l = t.slice(1).join(" ");
							return e => {
								let t = e.untranslatedName,
									i = e.displayName;
								return !!(t.startsWith(n) && t.split(" ").slice(1).join(" ").startsWith(l) || i.startsWith(n) && i.split(" ").slice(1).join(" ").startsWith(l)) || !1
							}
						}(e), (r = e, e => {
							let t = e.untranslatedName,
								n = e.displayName;
							return t.includes(r) || n.includes(r)
						}), (a = e, e => {
							var t;
							for (let {
									name: n,
									serverLocalizedName: l
								}
								of null != (t = e.options) ? t : [])
								if (n.startsWith(a) || "".concat(e.untranslatedName, " ").concat(n).startsWith(a) || null != e.displayName && "".concat(e.displayName, " ").concat(n).startsWith(a) || null != l && (l.startsWith(a) || "".concat(e.untranslatedName, " ").concat(l).startsWith(a) || null != e.displayName && "".concat(e.displayName, " ").concat(l).startsWith(a))) return !0;
							return !1
						}), (s = e, e => {
							var t;
							for (let {
									name: n,
									serverLocalizedName: l
								}
								of null != (t = e.options) ? t : [])
								if (n.includes(s) || (null == l ? void 0 : l.includes(s))) return !0;
							return !1
						})],
						sortComparers: [(u = {
							channel: "channel" === t.type ? t.channel : void 0
						}, (e, t) => {
							let n = d.ZP.getScoreWithoutLoadingLatest(u, e);
							return d.ZP.getScoreWithoutLoadingLatest(u, t) - n
						}), P]
					})
				}, [o, v, i, t, n]), _ = l.useMemo(() => {
					if (0 === I.length) return [];
					let e = new Map(O.map(e => [e.id, e]));
					return r().compact(I.map(t => {
						var n;
						let l = e.get(t.applicationId);
						if (null == l) return null;
						let i = null != (n = y[t.id]) ? n : null;
						return {
							command: t,
							application: l,
							section: i
						}
					}))
				}, [O, I, y]), S = l.useMemo(() => {
					var e, l, i, r, o;
					let u = [];
					if (h) {
						let e = new Set(O.map(e => {
							let {
								id: t
							} = e;
							return t
						}));
						u.push(...O), u.push(...A.filter(t => {
							let {
								application: {
									id: n
								}
							} = t;
							return !e.has(n)
						}).map(e => {
							let {
								application: t
							} = e;
							return t
						}))
					} else s && (u = O);
					return (0, x.N)(u, {
						limit: a,
						filterPredicates: [function(e) {
							let t = (0, m.k)("channel" === e.type ? e.channel : void 0, [c.yU.CHAT, c.yU.PRIMARY_ENTRY_POINT]);
							return n => {
								let {
									context: l,
									userId: i,
									roleIds: r,
									isImpersonating: a
								} = t, {
									descriptor: o,
									sectionCommands: s,
									isGuildInstalled: c,
									isUserInstalled: u
								} = (0, p.If)(e, n.id), d = (null == l ? void 0 : l.guild_id) != null ? f.ML(null == o ? void 0 : o.permissions, l.guild_id, i, r, a) : null, m = (null == l ? void 0 : l.guild_id) != null ? f.ZJ(null == o ? void 0 : o.permissions, l, l.guild_id) : null;
								return null == s || !(s.length > 0) || s.some(e => f.Ft(e, t, {
									applicationAllowedForUser: d,
									applicationAllowedForChannel: m,
									commandBotId: null == o ? void 0 : o.botId,
									isGuildInstalled: c,
									isUserInstalled: u
								}) === f.mF.ALLOWED)
							}
						}(t)],
						bucketPredicates: [(l = e = n, e => (0, g.$d)(e).toLocaleLowerCase().startsWith(l.toLocaleLowerCase())), (i = e, e => (0, g.$d)(e).toLocaleLowerCase().includes(i.toLocaleLowerCase())), (r = e, e => {
							var t, n;
							let l = null == (t = (0, g.jD)(e)) ? void 0 : t.toLocaleLowerCase();
							return null != (n = null == l ? void 0 : l.startsWith(r.toLocaleLowerCase())) && n
						}), (o = e, e => {
							var t, n;
							let l = null == (t = (0, g.jD)(e)) ? void 0 : t.toLocaleLowerCase();
							return null != (n = null == l ? void 0 : l.includes(o.toLocaleLowerCase())) && n
						})],
						sortComparers: [C, E]
					})
				}, [s, h, a, t, n, O, A]), T = _.length > 0, L = S.length > 0;
				return {
					commandResults: _,
					hasCommandResults: T,
					applicationResults: S,
					hasApplicationResults: L,
					isEmptyState: !T && !L,
					loading: b && o
				}
			}

			function A(e) {
				let {
					context: t,
					query: n,
					fetches: i = !0,
					pageLimit: r = 1 / 0,
					entrypoint: c
				} = e;
				n.startsWith("".concat(N.GI)) && (n = n.substring(1));
				let u = c === b._b.VOICE,
					d = "channel" === t.type ? t.channel.guild_id : void 0,
					[p, m] = l.useState(1),
					f = l.useRef(p);
				f.current = p;
				let {
					fetchState: h,
					totalPages: x
				} = (0, s.cj)([y.Z], () => {
					var e, t;
					return {
						fetchState: y.Z.getFetchState({
							query: n,
							guildId: d,
							page: p,
							integrationType: a.Y.USER_INSTALL,
							minUserInstallCommandCount: 1,
							excludeAppsWithCustomInstallUrl: !0,
							excludeNonEmbeddedApps: u,
							excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
							source: o.F.APP_LAUNCHER
						}),
						totalPages: null != (t = null == (e = y.Z.getSearchResults({
							query: n,
							guildId: d,
							page: p,
							integrationType: a.Y.USER_INSTALL,
							minUserInstallCommandCount: 1,
							excludeAppsWithCustomInstallUrl: !0,
							excludeNonEmbeddedApps: u,
							excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
							source: o.F.APP_LAUNCHER
						})) ? void 0 : e.totalPages) ? t : 0
					}
				}, [n, d, p, u]), g = l.useMemo(() => Array.from({
					length: h === y.M.FETCHED || h === y.M.ERROR ? p : p - 1
				}, (e, t) => {
					var l, i;
					return null != (i = null == (l = y.Z.getSearchResults({
						query: n,
						guildId: d,
						page: t + 1,
						integrationType: a.Y.USER_INSTALL,
						minUserInstallCommandCount: 1,
						excludeAppsWithCustomInstallUrl: !0,
						excludeNonEmbeddedApps: u,
						excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
						source: o.F.APP_LAUNCHER
					})) ? void 0 : l.results) ? i : []
				}), [h, d, n, p, u]), j = l.useCallback(() => {
					let e = g.length;
					h === y.M.FETCHED && e === f.current && e > 0 && e < x && e < r && g[e - 1].length > 0 && (f.current++, m(e => e + 1))
				}, [h, r, g, x]), C = l.useCallback(e => {
					let {
						query: t,
						page: n,
						guildId: l
					} = e;
					v.yC({
						query: t,
						guildId: l,
						options: {
							page: n,
							integrationType: a.Y.USER_INSTALL,
							minUserInstallCommandCount: 1,
							excludeAppsWithCustomInstallUrl: !0,
							excludeNonEmbeddedApps: u,
							excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
							source: o.F.APP_LAUNCHER
						}
					})
				}, [u]);
				return l.useEffect(() => {
					i && C({
						query: n,
						page: p,
						guildId: d
					})
				}, [n, d, C, p, i]), l.useEffect(() => {
					m(1)
				}, [d, n]), {
					fetchState: h,
					applicationResults: g.flat(),
					fetchNextPage: j
				}
			}
		},
		890280: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var l = n(73800),
				i = n(442837),
				r = n(110924),
				a = n(317381),
				o = n(835473),
				s = n(813370);

			function c(e) {
				let {
					applicationId: t,
					context: n,
					launchingComponentId: c,
					onSubmissionComplete: u
				} = e, d = (0, o.q)(t), p = (0, i.e7)([a.ZP], () => a.ZP.getLaunchState(t, "channel" === n.type ? n.channel.id : void 0)), m = !(null != d && (0, s.g)(d)) && null != p && p.isLaunching && p.componentId === c, f = (0, r.Z)(m);
				return l.useEffect(() => {
					!m && f && (null == u || u())
				}, [m, f, u]), {
					submitting: m,
					wasSubmitting: null != f ? f : null
				}
			}
		},
		695676: function(e, t, n) {
			n.d(t, {
				gc: () => r,
				hH: () => o,
				uX: () => a
			});
			var l, i = n(73800),
				r = ((l = {}).HOME = "home", l.LIST = "list", l.APPLICATION = "application", l);
			let a = i.createContext({
				history: [],
				discard: {},
				currentView: void 0,
				pushHistory: () => {},
				goBack: () => {},
				getMostRecentHistoryItemByType: () => void 0,
				isSlideReady: !1,
				setSlideReady: () => {}
			});

			function o() {
				return i.useContext(a)
			}
		},
		421591: function(e, t, n) {
			n.d(t, {
				Z: () => b
			}), n(388685), n(482853);
			var l = n(255367),
				i = n(73800),
				r = n(481060),
				a = n(100527),
				o = n(367907),
				s = n(906732),
				c = n(541099),
				u = n(695676),
				d = n(173790),
				p = n(692656),
				m = n(684256),
				f = n(314734),
				h = n(981631),
				v = n(899429);
			let y = {
					width: f.Gy,
					height: f.lv
				},
				x = {
					height: f.lv
				},
				b = i.memo(i.forwardRef(function(e, t) {
					let {
						context: n,
						entrypoint: r,
						initHistory: u
					} = e, {
						analyticsLocations: d
					} = (0, s.ZP)(a.Z.APP_LAUNCHER);
					return i.useEffect(() => {
						(0, o.yw)(h.rMx.APPLICATION_COMMAND_TOP_OF_FUNNEL, {
							source: r,
							location: "app_launcher"
						})
					}, [r]), i.useEffect(() => {
						let e = Date.now();
						return () => {
							(0, o.yw)(h.rMx.APP_LAUNCHER_CLOSED, {
								reason: c.Z.closeReason(),
								time_spent: Date.now() - e,
								source: r
							})
						}
					}, [r]), (0, l.jsx)("div", {
						className: v.drawerSizingWrapper,
						ref: t,
						style: y,
						children: (0, l.jsx)("div", {
							className: v.contentWrapper,
							children: (0, l.jsx)(s.Gt, {
								value: d,
								children: (0, l.jsx)(g, {
									initHistory: u,
									children: (0, l.jsx)(j, {
										context: n,
										entrypoint: r
									})
								})
							})
						})
					})
				}));

			function g(e) {
				let {
					initHistory: t,
					children: n
				} = e, [r, a] = i.useState(null != t ? t : [{
					type: u.gc.HOME
				}]), [o, s] = i.useState({}), c = r[r.length - 1], [d, p] = i.useState(!1), m = i.useCallback(e => {
					a(t => [...t, e])
				}, []), f = i.useCallback(() => {
					let e = null;
					a(t => t.length <= 1 ? t : (e = t[t.length - 1], t.slice(0, -1))), s(t => {
						var n, l;
						return null == e ? t : (n = function(e) {
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
						}({}, t), l = l = {
							[e.type]: e
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var l = Object.getOwnPropertySymbols(e);
								n.push.apply(n, l)
							}
							return n
						})(Object(l)).forEach(function(e) {
							Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
						}), n)
					})
				}, []), h = i.useCallback(e => {
					var t;
					return null != (t = r.findLast(t => t.type === e)) ? t : o[e]
				}, [r, o]);
				return (0, l.jsx)(u.uX.Provider, {
					value: {
						history: r,
						discard: o,
						currentView: c,
						pushHistory: m,
						goBack: f,
						getMostRecentHistoryItemByType: h,
						isSlideReady: d,
						setSlideReady: p
					},
					children: n
				})
			}

			function j(e) {
				let {
					context: t,
					entrypoint: n
				} = e, [a, o] = i.useState(""), {
					setScroller: s,
					isCloseToBottom: c
				} = function(e) {
					let [t, n] = i.useState(null), [l, r] = i.useState(!1), a = i.useRef(0);
					return i.useEffect(() => {
						null == t || t.scrollTo(0, 0)
					}, [t, e]), i.useEffect(() => {
						if (null != t) return t.scrollTo(0, a.current), t.addEventListener("scroll", e), () => {
							t.removeEventListener("scroll", e, !1)
						};

						function e() {
							null != t && (a.current = t.scrollTop, r(t.scrollHeight - (t.scrollTop + t.clientHeight) < .5 * f.K7))
						}
					}, [t]), {
						setScroller: n,
						isCloseToBottom: l
					}
				}(a), {
					currentView: h,
					getMostRecentHistoryItemByType: y,
					setSlideReady: b
				} = (0, u.hH)();
				i.useEffect(() => {
					b(!1)
				}, [null == h ? void 0 : h.type, b]);
				let g = i.useCallback(() => {
					b(!0)
				}, [b]);
				if (null == h) return null;
				let j = y(u.gc.LIST),
					N = y(u.gc.APPLICATION);
				return (0, l.jsxs)(r.MyZ, {
					activeSlide: h.type,
					width: f.Gy,
					onSlideReady: g,
					children: [(0, l.jsx)(r.Mi4, {
						id: u.gc.HOME,
						children: (0, l.jsx)("div", {
							className: v.slideContent,
							style: x,
							children: (0, l.jsx)(p.Z, {
								isScrollCloseToBottom: c,
								setScroller: s,
								context: t,
								entrypoint: n,
								searchQuery: a,
								setSearchQuery: o
							})
						})
					}), (0, l.jsx)(r.Mi4, {
						id: u.gc.LIST,
						children: (0, l.jsx)("div", {
							className: v.slideContent,
							style: x,
							children: null != j && (0, l.jsx)(m.Z, {
								context: t,
								entrypoint: n,
								title: j.title,
								look: j.look,
								items: j.items,
								sectionName: j.sectionName,
								sectionOverallPosition: j.sectionOverallPosition
							})
						})
					}), (0, l.jsx)(r.Mi4, {
						id: u.gc.APPLICATION,
						children: (0, l.jsx)("div", {
							className: v.slideContent,
							style: x,
							children: null != N && (0, l.jsx)(d.Z, {
								context: t,
								application: N.application,
								sectionName: N.sectionName
							})
						})
					})]
				})
			}
		},
		570949: function(e, t, n) {
			n.d(t, {
				P: () => f,
				Z: () => h
			}), n(388685);
			var l = n(255367),
				i = n(481060),
				r = n(239091),
				a = n(299206),
				o = n(276022),
				s = n(695346),
				c = n(914010),
				u = n(499254),
				d = n(827498),
				p = n(314734),
				m = n(388032);

			function f(e) {
				var t;
				let {
					application: n
				} = e, l = null != (t = c.Z.getGuildId()) ? t : void 0;
				return (0, o.Z)({
					application: n,
					guildId: l,
					onItemClick: () => {
						(0, i.Mr3)(p.e9), (0, u.yT)(d.ti.DISMISSED)
					}
				})
			}

			function h(e) {
				let {
					application: t,
					onSelect: n
				} = e, o = s.Sb.useSetting(), c = (0, a.Z)({
					id: t.id,
					label: m.intl.string(m.t["+NP/b2"])
				}), u = f({
					application: t
				});
				return (0, l.jsxs)(i.v2r, {
					navId: "activity-shelf-item-context",
					onClose: r.Zy,
					"aria-label": m.intl.string(m.t.WkcHT0),
					onSelect: n,
					children: [null != u && (0, l.jsxs)(i.kSQ, {
						children: [...u]
					}, "manage-app-actions"), o && (0, l.jsx)(i.kSQ, {
						children: c
					}, "developer-actions")]
				})
			}
		},
		98880: function(e, t, n) {
			n.d(t, {
				U4: () => q,
				cG: () => ei,
				kA: () => er,
				qR: () => ea
			}), n(953529), n(997841), n(388685), n(415506);
			var l, i = n(255367),
				r = n(73800),
				a = n(120356),
				o = n.n(a),
				s = n(442837),
				c = n(755721),
				u = n(481060),
				d = n(239091),
				p = n(911969),
				m = n(110924),
				f = n(607070),
				h = n(115130),
				v = n(317381),
				y = n(723163),
				x = n(361213),
				b = n(542094),
				g = n(778569),
				j = n(182906),
				N = n(556505),
				C = n(367907),
				E = n(220082),
				P = n(70097),
				O = n(973616),
				A = n(594174),
				I = n(695103),
				_ = n(880448),
				S = n(768581),
				T = n(541099),
				L = n(783097),
				R = n(695676),
				Z = n(176412),
				w = n(226026),
				k = n(570949),
				M = n(753972),
				U = n(981631),
				D = n(217702),
				H = n(388032),
				V = n(860901),
				B = n(413097),
				W = n(969728);

			function F() {
				return (F = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l])
					}
					return e
				}).apply(this, arguments)
			}

			function G(e) {
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
			}

			function z(e, t) {
				return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var l = Object.getOwnPropertySymbols(e);
						n.push.apply(n, l)
					}
					return n
				})(Object(t)).forEach(function(n) {
					Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
				}), e
			}
			var q = ((l = {}).ICON = "icon", l.ROW = "row", l.NO_BANNER = "no_banner", l.MEDIUM_BANNER = "medium_banner", l.LARGE_BANNER = "large_banner", l);

			function Y(e) {
				var t;
				let {
					application: n,
					look: l = "large_banner",
					onClick: r,
					imageStyle: a,
					enableVideoBanner: o = !0,
					children: s,
					sectionName: c,
					resultsPosition: u,
					sectionOverallPosition: d,
					tracksImpression: p = !0,
					disabled: f = !1,
					overrideImageUrl: h,
					showsPromoted: v
				} = e, y = null != (t = (0, m.Z)(f)) ? t : f;
				return (0, i.jsx)(X, {
					application: n,
					onClick: r,
					sectionName: c,
					resultsPosition: u,
					disabled: f,
					tracksImpression: p,
					look: l,
					sectionOverallPosition: d,
					children: "icon" === l ? (0, i.jsx)(Q, {
						application: n,
						imageStyle: a,
						children: s
					}) : (0, i.jsx)(J, {
						application: n,
						look: l,
						imageStyle: a,
						enableVideoBanner: o,
						disableBannerFadeIn: y !== f,
						overrideImageUrl: h,
						showsPromoted: v,
						children: s
					})
				})
			}

			function X(e) {
				let {
					application: t,
					onClick: n,
					children: l,
					sectionName: a,
					resultsPosition: s,
					sectionOverallPosition: c,
					tracksImpression: p,
					disabled: m,
					containerStyle: f,
					look: h
				} = e, v = r.useCallback(e => {
					if ((0, L.BQ)(t)) {
						let n = t instanceof O.ZP ? t : O.ZP.createFromServer(t);
						(0, d.vq)(e, e => (0, i.jsx)(k.Z, G({
							application: n
						}, e)))
					}
				}, [t]), {
					name: y,
					description: x
				} = r.useMemo(() => (0, L.sl)(t, {
					fakeAppIconURL: B
				}), [t]), {
					trackItemImpressionRef: b
				} = (0, w.Z)({
					applicationId: t.id,
					applicationFlags: (0, L.BQ)(t) ? t.flags : void 0,
					sectionName: a,
					sectionPosition: s,
					sectionOverallPosition: c,
					promotionalLabel: (0, L.dF)(t)
				}), g = r.useMemo(() => {
					let e = m ? V.containerDisabled : V.container;
					return o()(e, {
						[V.containerBorderRadius]: "row" !== h,
						[V.rowContainer]: "row" === h,
						[V.iconCard]: "icon" === h
					}, f)
				}, [f, m, h]);
				return m ? (0, i.jsx)("div", {
					ref: p ? b : void 0,
					className: g,
					children: l
				}) : (0, i.jsx)(u.P3F, {
					innerRef: p ? b : void 0,
					className: g,
					onClick: n,
					onContextMenu: v,
					"aria-label": H.intl.formatToPlainString(H.t["zLhr9/"], {
						applicationName: y,
						applicationDescription: x
					}),
					children: (0, i.jsx)(u.Rny, {
						children: l
					})
				})
			}

			function Q(e) {
				let {
					application: t,
					imageStyle: n,
					children: l
				} = e, {
					name: a,
					iconURL: s
				} = r.useMemo(() => (0, L.sl)(t, {
					fakeAppIconURL: B
				}), [t]);
				return (0, i.jsx)(u.ua7, {
					tooltipContentClassName: V.tooltipContent,
					text: a,
					children: e => {
						var t = F({}, function(e) {
							if (null == e) throw TypeError("Cannot destructure " + e);
							return e
						}(e));
						return (0, i.jsxs)("div", z(G({
							className: o()(V.iconContainer, n)
						}, t), {
							children: [(0, i.jsx)(M.Z, {
								src: s,
								className: V.iconCard,
								"aria-hidden": !0,
								rendersPlaceholder: !0
							}), l]
						}))
					}
				})
			}

			function J(e) {
				let {
					application: t,
					look: n,
					imageStyle: l,
					enableVideoBanner: a,
					disableBannerFadeIn: c,
					children: d,
					overrideImageUrl: m,
					showsPromoted: f
				} = e, {
					iconURL: v,
					name: y,
					description: x
				} = r.useMemo(() => (0, L.sl)(t, {
					fakeAppIconURL: B
				}), [t]), b = r.useMemo(() => null == x ? null : (0, Z.ae)(x), [x]), g = (0, E.ZP)(v, ""), [j, C] = r.useState(!1), P = r.useCallback(() => {
					!0 === a && C(!0)
				}, [a]), O = f || (0, L.lf)(t), A = "large_banner" === n || "medium_banner" === n, _ = r.useCallback(() => C(!1), []), S = (0, s.e7)([h.Z, I.Z], () => h.Z.inDevModeForApplication(t.id) || I.Z.inTestModeForApplication(t.id), [t.id]), T = (0, L.WA)(t);
				return (0, i.jsxs)(i.Fragment, {
					children: [A ? (0, i.jsxs)("div", {
						onMouseEnter: P,
						onFocus: P,
						onMouseLeave: _,
						onBlur: _,
						className: o()(V.bannerImageContainer, {
							[V.mediumBanner]: "medium_banner" === n,
							[V.largeBanner]: "large_banner" === n
						}),
						children: [(0, i.jsx)("span", {
							className: l,
							children: (0, i.jsx)(ee, {
								application: t,
								fallbackColor: g,
								showVideo: j,
								disableFadeIn: c,
								overrideImageUrl: m
							})
						}), S || O || T !== p.ww.NONE ? (0, i.jsxs)("div", {
							className: V.bannerUpperRightContainer,
							children: [O && (0, i.jsx)("div", {
								className: V.promotedLabelWrapperBanner,
								children: (0, i.jsx)(u.X6q, {
									variant: "text-xxs/medium",
									color: "header-primary",
									children: H.intl.string(H.t["/eVltr"])
								})
							}), S && (0, i.jsx)(K, {}), T !== p.ww.NONE && (0, i.jsx)(N.Z, {
								labelType: T
							})]
						}) : null, (0, i.jsx)("div", {
							className: V.bannerImageChildContainer,
							children: d
						})]
					}) : null, (0, i.jsxs)("div", {
						className: o()(V.appDetailsContainer, {
							[V.appDetailsRowContainer]: "row" === n
						}),
						children: [(0, i.jsx)(M.Z, {
							src: v,
							className: o()(V.icon, {
								[V.rowIcon]: "row" === n
							}),
							"aria-hidden": !0,
							rendersPlaceholder: !0
						}), (0, i.jsxs)("div", {
							className: V.appDetails,
							children: [(0, i.jsxs)("div", {
								className: V.appDetailsHeaderContainer,
								children: [(0, i.jsx)(u.X6q, {
									variant: "heading-md/semibold",
									color: "header-primary",
									lineClamp: 1,
									children: y
								}), !A && O ? (0, i.jsx)("div", {
									className: V.promotedLabelWrapperNonBanner,
									children: (0, i.jsx)(u.Text, {
										variant: "text-xxs/semibold",
										color: "text-muted",
										children: H.intl.string(H.t["/eVltr"])
									})
								}) : null, (0, i.jsx)($, {
									application: t
								})]
							}), (0, i.jsx)(u.Text, {
								variant: "text-sm/normal",
								color: "text-secondary",
								lineClamp: 1,
								children: b
							})]
						}), "row" === n ? (0, i.jsx)("div", {
							className: V.rowDivider
						}) : null]
					})]
				})
			}

			function K() {
				return (0, i.jsx)(u.ua7, {
					text: H.intl.string(H.t.CfTySU),
					children: e => (0, i.jsx)("div", z(G({
						className: V.devShelfBadge
					}, e), {
						children: (0, i.jsx)(_.Z, {
							className: V.devShelfIcon
						})
					}))
				})
			}

			function $(e) {
				let {
					application: t
				} = e, n = A.default.getCurrentUser();
				if (!(null == n ? void 0 : n.isStaff()) && !(null == n ? void 0 : n.isStaffPersonal())) return null;
				let l = (0, L.yJ)(t);
				if (null == l || !(0, L.BQ)(t)) return null;
				let r = (0, b.fD)(t, l);
				return null == r ? null : (0, i.jsx)(u.ua7, {
					text: r,
					children: e => (0, i.jsx)("img", G({
						className: V.staffBadge,
						alt: r,
						src: W
					}, e))
				})
			}

			function ee(e) {
				let {
					application: t,
					fallbackColor: n,
					showVideo: l,
					disableFadeIn: r,
					overrideImageUrl: a
				} = e;
				if (null != a) return (0, i.jsx)("img", {
					src: a,
					alt: (0, L.BQ)(t) ? t.name : "",
					className: o()(V.bannerImage, {
						[V.disableFadeIn]: r
					})
				});
				if ((0, L.BQ)(t)) {
					if ((0, L.ye)(t)) return (0, i.jsx)(et, {
						application: t,
						showVideo: l,
						disableFadeIn: r
					});
					if (null != t.bot) return (0, i.jsx)(en, {
						bot: t.bot,
						fallbackColor: n,
						disableFadeIn: r
					})
				}
				return (0, i.jsx)(el, {
					fallbackColor: n,
					disableFadeIn: r
				})
			}

			function et(e) {
				let {
					application: t,
					showVideo: n,
					disableFadeIn: l
				} = e, a = (0, g.Z)({
					applicationId: t.id,
					size: 600,
					names: ["embedded_cover"]
				}), s = r.useMemo(() => {
					let e = (0, L.yJ)(t);
					return null != e && null != e.activity_preview_video_asset_id ? (0, x.Z)(t.id, e.activity_preview_video_asset_id) : null
				}, [t]), [c, u] = r.useState(n);
				r.useEffect(() => {
					n && u(!0)
				}, [n]);
				let d = o()(V.bannerImage, {
					[V.disableFadeIn]: l
				});
				return (0, i.jsxs)(i.Fragment, {
					children: [null != s && c ? (0, i.jsx)("div", {
						className: V.activityVideoContainer,
						children: (0, i.jsx)("div", {
							className: o()(V.activityVideo, {
								[V.videoFadeOut]: !n
							}),
							onAnimationEnd: () => n ? null : u(!1),
							children: (0, i.jsx)(P.Z, {
								src: s,
								mediaLayoutType: D.hV.MOSAIC,
								loop: !0,
								autoPlay: !0,
								muted: !0
							})
						})
					}) : null, (0, i.jsx)(j.Z, {
						imageBackground: a,
						applicationName: t.name,
						imageClassName: d,
						imageNotFoundClassName: d
					})]
				})
			}

			function en(e) {
				let {
					bot: t,
					fallbackColor: n,
					disableFadeIn: l
				} = e, r = (0, s.e7)([f.Z], () => f.Z.useReducedMotion), a = (0, S.aN)({
					id: t.id,
					banner: t.banner,
					canAnimate: !r,
					size: 600
				});
				return null == a ? (0, i.jsx)(el, {
					fallbackColor: n,
					disableFadeIn: l
				}) : (0, i.jsx)("img", {
					src: a,
					alt: "",
					className: o()(V.bannerImage, {
						[V.disableFadeIn]: l
					})
				})
			}

			function el(e) {
				let {
					fallbackColor: t,
					disableFadeIn: n
				} = e;
				return (0, i.jsx)("div", {
					className: o()(V.bannerImage, {
						[V.disableFadeIn]: n
					}),
					style: {
						backgroundColor: t
					}
				})
			}

			function ei(e) {
				let {
					application: t,
					sectionName: n,
					resultsPosition: l,
					query: i,
					installOnDemand: a,
					location: o
				} = e, {
					pushHistory: s
				} = (0, R.hH)(), {
					friends: c
				} = (0, y.Z)(t);
				return {
					onClickAppCard: r.useCallback(e => {
						e.stopPropagation(), (0, C.yw)(U.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
							application_id: t.id,
							section_name: n,
							search_results_position: l,
							source: T.Z.entrypoint(),
							promotional_label: (0, L.dF)(t),
							location: o,
							query: i,
							num_friends_who_play: c.length
						}), s({
							type: R.gc.APPLICATION,
							application: t,
							installOnDemand: a,
							sectionName: n
						})
					}, [t, a, o, s, i, l, n, c])
				}
			}

			function er(e) {
				let {
					onClickAppCard: t
				} = ei(e);
				return (0, i.jsx)(Y, z(G({}, e), {
					onClick: t
				}))
			}

			function ea(e) {
				var {
					context: t,
					application: n,
					location: l,
					sectionName: a,
					isOneClickCTA: o,
					fetchesApplication: d = !0
				} = e, p = function(e, t) {
					if (null == e) return {};
					var n, l, i = function(e, t) {
						if (null == e) return {};
						var n, l, i = {},
							r = Object.keys(e);
						for (l = 0; l < r.length; l++) n = r[l], t.indexOf(n) >= 0 || (i[n] = e[n]);
						return i
					}(e, t);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						for (l = 0; l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
					}
					return i
				}(e, ["context", "application", "location", "sectionName", "isOneClickCTA", "fetchesApplication"]);
				if (!(0, L.BQ)(n)) throw Error("PerformActivityActionAppCard was passed the Built-in App, which is not supported.");
				let m = r.useId(),
					[f, h] = (0, s.Wu)([v.ZP], () => [v.ZP.isLaunchingActivity(), v.ZP.getLaunchState(n.id, "channel" === t.type ? t.channel.id : void 0)]),
					y = null != h && h.isLaunching && h.componentId === m,
					{
						onActivityItemSelected: x,
						activityAction: g,
						buttonColor: j,
						buttonText: N
					} = (0, Z.P7)({
						context: t,
						application: n,
						location: l,
						sectionName: a,
						launchingComponentId: m,
						fetchesApplication: d
					});
				return g === b.JS.START || g === b.JS.JOIN ? o ? (0, i.jsx)(Y, z(G({}, p), {
					sectionName: a,
					application: n,
					onClick: x,
					disabled: f,
					enableVideoBanner: !y,
					children: y ? (0, i.jsx)(u.$jN, {
						type: u.$jN.Type.PULSING_ELLIPSIS,
						className: V.spinner
					}) : null
				})) : (0, i.jsx)(er, z(G({}, p), {
					context: t,
					sectionName: a,
					application: n,
					location: l
				})) : (0, i.jsx)(Y, z(G({}, p), {
					sectionName: a,
					application: n,
					onClick: e => {
						e.stopPropagation()
					},
					imageStyle: V.darkenImage,
					enableVideoBanner: !1,
					disabled: !0,
					children: (0, i.jsx)("div", {
						className: V.voiceLauncherAppCardContainer,
						children: (0, i.jsx)(c.zx, {
							className: V.voiceLauncherAppCardButton,
							type: "submit",
							size: c.zx.Sizes.LARGE,
							color: j,
							disabled: f,
							onClick: x,
							"aria-label": H.intl.formatToPlainString(H.t["XjP/R0"], {
								buttonText: N,
								applicationName: n.name
							}),
							submitting: y,
							children: N
						})
					})
				}))
			}
		},
		772606: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var l = n(255367),
				i = n(73800),
				r = n(120356),
				a = n.n(r),
				o = n(481060),
				s = n(695676),
				c = n(388032),
				u = n(672425);

			function d(e) {
				let {
					className: t
				} = e, {
					goBack: n
				} = (0, s.hH)(), r = i.useCallback(() => {
					n()
				}, [n]);
				return (0, l.jsx)(o.P3F, {
					onClick: r,
					className: a()(u.clickable, t),
					"aria-label": c.intl.string(c.t.ybUZqq),
					children: (0, l.jsx)(o.j9r, {
						size: "sm",
						color: o.TVs.colors.INTERACTIVE_ACTIVE
					})
				})
			}
		},
		804307: function(e, t, n) {
			n.d(t, {
				Z: () => p
			});
			var l = n(255367),
				i = n(73800),
				r = n(120356),
				a = n.n(r),
				o = n(442837),
				s = n(481060),
				c = n(607070),
				u = n(98880),
				d = n(85884);

			function p(e) {
				let {
					look: t = u.U4.LARGE_BANNER
				} = e, n = (0, o.e7)([c.Z], () => c.Z.useReducedMotion), {
					styleLarge: r,
					styleSmall: p
				} = i.useMemo(() => ({
					styleLarge: {
						width: "".concat(10 + 50 * Math.random(), "%")
					},
					styleSmall: {
						width: "".concat(30 + 60 * Math.random(), "%")
					}
				}), []);
				return (0, l.jsxs)("div", {
					className: a()(d.container, d.loadingAnimation, {
						[d.noAnimation]: n,
						[d.containerBorderRadius]: t !== u.U4.ROW,
						[d.rowContainer]: t === u.U4.ROW
					}),
					children: [(0, l.jsx)("div", {
						className: a()(d.bannerImage, {
							[d.mediumBanner]: t === u.U4.MEDIUM_BANNER,
							[d.largeBanner]: t === u.U4.LARGE_BANNER
						})
					}), (0, l.jsxs)("div", {
						className: a()(d.appDetailsContainer, {
							[d.appDetailsRowContainer]: t === u.U4.ROW
						}),
						children: [(0, l.jsx)("div", {
							className: a()(d.iconPlaceholder, {
								[d.rowIconPlaceholder]: t === u.U4.ROW
							})
						}), (0, l.jsxs)("div", {
							className: d.textContainer,
							children: [(0, l.jsx)("div", {
								className: d.textPlaceholder,
								style: r,
								children: (0, l.jsx)(s.X6q, {
									className: d.hidden,
									variant: "heading-md/semibold",
									color: "header-primary",
									lineClamp: 1,
									children: "_"
								})
							}), (0, l.jsx)("div", {
								className: d.textPlaceholder,
								style: p,
								children: (0, l.jsx)(s.Text, {
									className: d.hidden,
									variant: "text-sm/normal",
									color: "text-secondary",
									lineClamp: 1,
									children: "_"
								})
							})]
						}), t === u.U4.ROW && (0, l.jsx)("div", {
							className: d.rowDivider
						})]
					})]
				})
			}
		},
		496977: function(e, t, n) {
			n.d(t, {
				Z: () => s
			}), n(539854);
			var l = n(73800),
				i = n(442837),
				r = n(835473),
				a = n(541099),
				o = n(695676);

			function s() {
				let e = (0, i.e7)([a.Z], () => a.Z.initialState(), []),
					t = (0, r.q)(null == e ? void 0 : e.applicationId);
				return l.useMemo(() => {
					if (null == e) return;
					let n = [{
						type: o.gc.HOME
					}];
					return null != e.applicationId && null != t && n.push({
						type: o.gc.APPLICATION,
						application: t
					}), n
				}, [e, t])
			}
		},
		312871: function(e, t, n) {
			n.d(t, {
				Z: () => r
			});
			var l = n(73800),
				i = n(434650);

			function r(e) {
				let {
					onVisible: t,
					threshold: n,
					minTimeVisibleMs: r
				} = e, a = l.useRef(!1), o = l.useRef(null);
				return l.useEffect(() => () => {
					null != o.current && (clearTimeout(o.current), o.current = null)
				}, []), (0, i.O)(e => {
					if (null == o.current || e || !1 !== a.current || (clearTimeout(o.current), o.current = null), !e || !0 === a.current) return;
					let n = () => {
						t(), a.current = !0, o.current = null
					};
					null != r ? o.current = setTimeout(n, r) : n()
				}, n)
			}
		},
		226026: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var l = n(73800),
				i = n(990547),
				r = n(442837),
				a = n(213609),
				o = n(541099),
				s = n(312871);

			function c(e) {
				let {
					applicationId: t,
					applicationFlags: n,
					sectionName: c,
					sectionPosition: u,
					sectionOverallPosition: d,
					promotionalLabel: p,
					numFriendsWhoPlay: m
				} = e, f = (0, r.e7)([o.Z], () => o.Z.entrypoint()), h = l.useCallback(() => {
					(0, a.h)({
						type: i.ImpressionTypes.VIEW,
						name: i.ImpressionNames.APP_LAUNCHER_ITEM,
						properties: {
							application_id: t,
							application_flags: n,
							section_name: c,
							section_position: u,
							section_overall_position: d,
							source: f,
							promotional_label: p,
							num_friends_who_play: m
						}
					})
				}, [m]);
				return {
					trackItemImpressionRef: (0, s.Z)({
						onVisible: h,
						threshold: .5,
						minTimeVisibleMs: 1e3
					})
				}
			}
		},
		532309: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			var l = n(990547),
				i = n(442837),
				r = n(213609),
				a = n(541099),
				o = n(312871);

			function s(e) {
				let {
					applicationId: t,
					commandId: n,
					searchResultsPosition: s,
					query: c
				} = e, u = (0, i.e7)([a.Z], () => a.Z.entrypoint());
				return {
					trackSearchResultsItemImpressionRef: (0, o.Z)({
						onVisible: () => {
							(0, r.h)({
								type: l.ImpressionTypes.VIEW,
								name: l.ImpressionNames.APP_LAUNCHER_SEARCH_RESULTS_ITEM,
								properties: {
									application_id: t,
									command_id: n,
									search_results_position: s,
									query: c,
									source: u
								}
							})
						},
						threshold: 1
					})
				}
			}
		},
		888617: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var l = n(990547),
				i = n(213609),
				r = n(541099),
				a = n(312871);

			function o(e) {
				let {
					sectionName: t,
					numItems: n,
					numVisibleItems: o
				} = e;
				return {
					trackSectionImpressionRef: (0, a.Z)({
						onVisible: () => {
							(0, i.h)({
								type: l.ImpressionTypes.VIEW,
								name: l.ImpressionNames.APP_LAUNCHER_SECTION,
								properties: {
									section_name: t,
									num_items: n,
									num_visible_items: o,
									source: r.Z.entrypoint()
								}
							})
						},
						threshold: 1
					})
				}
			}
		},
		387658: function(e, t, n) {
			n.d(t, {
				Z: () => V
			}), n(388685);
			var l = n(255367),
				i = n(73800),
				r = n(120356),
				a = n.n(r),
				o = n(140835),
				s = n(246521),
				c = n(442837),
				u = n(755721),
				d = n(481060),
				p = n(911969),
				m = n(607070),
				f = n(555573),
				h = n(213459),
				v = n(10718),
				y = n(895924),
				x = n(104919),
				b = n(583027),
				g = n(585483),
				j = n(499254),
				N = n(541099),
				C = n(827498),
				E = n(496158),
				P = n(676161),
				O = n(660090),
				A = n(783097),
				I = n(176412),
				_ = n(870205),
				S = n(981631),
				T = n(689079),
				L = n(388032),
				R = n(85884),
				Z = n(100260);
			let w = "placeholder",
				k = [, , , , , ].fill(w);

			function M(e) {
				var t, n;
				let {
					context: r,
					command: a,
					section: s,
					sectionName: c
				} = e, u = i.useCallback(() => {
					let e = N.Z.entrypoint();
					j.yT(C.ti.COMMAND), (0, b.Mo)({
						command: a,
						location: y.Vh.APP_LAUNCHER_APPLICATION_VIEW,
						sectionName: c
					}), "channel" === r.type && (f.Po({
						channelId: r.channel.id,
						command: a,
						section: s,
						location: y.Vh.APP_LAUNCHER_APPLICATION_VIEW,
						sectionName: c,
						source: e,
						commandOrigin: y.bB.APPLICATION_LAUNCHER
					}), g.S.dispatch(S.CkL.FOCUS_CHANNEL_TEXT_AREA, {
						channelId: r.channel.id
					}))
				}, [r, a, s, c]), p = (null != (n = null == (t = a.options) ? void 0 : t.length) ? n : 0) > 0, m = i.useMemo(() => (0, I.ae)(a.displayDescription, void 0), [a.displayDescription]), h = i.useMemo(() => (0, l.jsxs)("div", {
					className: Z.commandTextContainer,
					children: [(0, l.jsx)(d.Text, {
						variant: "text-sm/semibold",
						color: "header-primary",
						children: a.displayName
					}), (0, l.jsx)(d.Text, {
						variant: "text-xs/medium",
						color: "text-muted",
						lineClamp: 1,
						children: m
					})]
				}), [a.displayName, m]);
				return (0, l.jsxs)(d.P3F, {
					className: Z.command,
					onClick: u,
					children: [(0, l.jsx)(d.Rny, {
						className: Z.commandFocusBlock,
						children: h
					}), p ? (0, l.jsx)(o.F, {}) : (0, l.jsx)(D, {
						context: r,
						command: a,
						sectionName: c
					})]
				})
			}

			function U() {
				let e = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
					{
						styleLarge: t,
						styleSmall: n
					} = i.useMemo(() => ({
						styleLarge: {
							width: "".concat(10 + 20 * Math.random(), "%"),
							height: "auto"
						},
						styleSmall: {
							width: "".concat(30 + 60 * Math.random(), "%"),
							height: "auto"
						}
					}), []),
					r = i.useMemo(() => (0, l.jsxs)("div", {
						className: Z.commandTextContainerPlaceholder,
						children: [(0, l.jsx)("div", {
							className: R.textPlaceholder,
							style: t,
							children: (0, l.jsx)(d.Text, {
								className: R.hidden,
								variant: "text-sm/semibold",
								color: "header-primary",
								lineClamp: 1,
								children: "_"
							})
						}), (0, l.jsx)("div", {
							className: R.textPlaceholder,
							style: n,
							children: (0, l.jsx)(d.Text, {
								className: R.hidden,
								variant: "text-xs/medium",
								color: "text-muted",
								lineClamp: 1,
								children: "_"
							})
						})]
					}), [t, n]);
				return (0, l.jsx)("div", {
					className: a()(Z.command, R.loadingAnimation, {
						[R.noAnimation]: e
					}),
					children: r
				})
			}

			function D(e) {
				let {
					context: t,
					command: n,
					sectionName: r
				} = e;
				(0, h.PL)(!0, !0), (0, h.em)(t, !0, !0);
				let a = (0, E.D)(t),
					[o, c] = i.useState(!1),
					p = i.useCallback(async e => {
						if ("channel" !== t.type) return;
						e.stopPropagation();
						let l = N.Z.lastShownEntrypoint();
						try {
							let {
								isAuthorized: e
							} = await (0, x.L)({
								applicationId: n.applicationId,
								channel: "channel" === t.type ? t.channel : void 0,
								commandIntegrationTypes: n.integration_types,
								appLauncherContext: {
									entrypoint: l,
									location: y.Vh.APP_LAUNCHER_APPLICATION_VIEW,
									sectionName: r
								}
							});
							e && (await (0, A.Y$)({
								command: n,
								optionValues: {},
								context: a,
								sectionName: r,
								commandOrigin: y.bB.APP_LAUNCHER_APPLICATION_VIEW
							}), j.yT(C.ti.COMMAND))
						} finally {
							c(!1)
						}
					}, [n, t, r, a]);
				return (0, l.jsxs)(u.zx, {
					type: "submit",
					onClick: p,
					disabled: o,
					size: u.Ph.ICON,
					color: u.zx.Colors.PRIMARY,
					className: Z.commandSentCTAButton,
					innerClassName: Z.commandSentCTAButtonInner,
					"aria-label": L.intl.formatToPlainString(L.t.UXw6W1, {
						commandName: n.untranslatedName
					}),
					children: [(0, l.jsx)(d.Text, {
						variant: "text-sm/medium",
						color: "currentColor",
						children: L.intl.string(L.t.TXNS7e)
					}), (0, l.jsx)(s.U, {
						size: "xs",
						color: "currentColor"
					})]
				})
			}

			function H(e) {
				let {
					context: t,
					commands: n,
					section: i,
					headerName: r,
					sectionName: a,
					children: o
				} = e;
				return 0 === n.length ? null : (0, l.jsxs)(l.Fragment, {
					children: [(0, l.jsxs)("div", {
						className: Z.commandListHeader,
						children: [(0, l.jsx)(d.X6q, {
							variant: "heading-sm/semibold",
							children: r
						}), o]
					}), (0, l.jsx)("ul", {
						className: Z.commandContainer,
						"aria-label": r,
						children: n.map((e, n) => e === w ? (0, l.jsx)(U, {}, e + n) : (0, l.jsx)(M, {
							context: t,
							command: e,
							section: i,
							sectionName: a
						}, e.id))
					})]
				})
			}

			function V(e) {
				var t;
				let {
					context: n,
					application: r,
					sectionName: a,
					installOnDemand: o,
					setHasCommands: s
				} = e, {
					filterSection: c,
					commandsByActiveSection: u,
					sectionDescriptors: d,
					loading: m
				} = v.wi({
					context: n,
					filters: {
						commandTypes: [p.yU.CHAT]
					},
					options: {
						placeholderCount: 0,
						limit: T.tn,
						includeFrecency: !0,
						allowApplicationState: o,
						installOnDemand: o,
						applicationId: r.id
					},
					allowFetch: !0
				}), f = null != (t = d.find(e => e.id === r.id)) ? t : null, {
					sortOrder: h,
					setSortOrder: y,
					commands: x,
					canSort: b
				} = (0, O.Z)({
					sectionId: r.id,
					commandsByActiveSection: u
				});
				i.useEffect(() => {
					c(r.id)
				}, [r.id, c]);
				let g = (0, P.Z)({
					context: n,
					commands: x,
					limit: 5
				});
				return (i.useEffect(() => {
					s(x.length > 0)
				}, [s, x]), m || 0 !== x.length) ? (0, l.jsxs)("ul", {
					className: Z.contentContainer,
					children: [(0, l.jsx)(H, {
						context: n,
						section: f,
						commands: g,
						headerName: L.intl.string(L.t.acSE0t),
						sectionName: a
					}), (0, l.jsx)(H, {
						context: n,
						section: f,
						commands: m ? k : x,
						headerName: L.intl.string(L.t.DUU9Ly),
						sectionName: a,
						children: b && (0, l.jsx)(_.Z, {
							sortOrder: h,
							onSortOptionClick: y
						})
					})]
				}) : null
			}
		},
		536650: function(e, t, n) {
			n.d(t, {
				Z: () => y
			}), n(388685);
			var l = n(255367),
				i = n(73800),
				r = n(392711),
				a = n(780384),
				o = n(481060),
				s = n(410030),
				c = n(220082),
				u = n(564334),
				d = n(302221),
				p = n(783097),
				m = n(772606),
				f = n(488977),
				h = n(614266);

			function v(e) {
				let [t, n] = i.useState(void 0);
				return i.useEffect(() => {
					null != e.current && n(getComputedStyle(e.current))
				}, [e]), t
			}

			function y(e) {
				let {
					application: t,
					context: n,
					name: y,
					iconURL: x,
					scrollerRef: b,
					sectionName: g
				} = e, j = (0, a.ap)((0, s.ZP)()), N = i.useRef(null), C = i.useRef(null), E = i.useRef(null), P = i.useRef(null), O = (0, o.dQu)(o.TVs.colors.BACKGROUND_BASE_LOW).hex(), A = (0, c.ZP)("number" == typeof x ? "" : x, null != O ? O : ""), I = i.useMemo(() => {
					var e, t;
					let n = (0, r.compact)([u.Z.parseHexString(A), u.Z.parseHexString(j ? "#000000" : "#ffffff")]);
					return null != (t = null == (e = (0, d.k8)({
						colors: n,
						ratio: 5,
						saturationFactor: .6
					})) ? void 0 : e.toHexString()) ? t : A
				}, [A, j]), _ = v(N), S = v(C), T = i.useCallback(() => {
					var e, t, n, l;
					let i = b.current,
						a = N.current,
						o = E.current,
						s = null == P ? void 0 : P.current,
						c = parseInt(null != (e = null == _ ? void 0 : _.height) ? e : ""),
						u = parseInt(null != (t = null == S ? void 0 : S.height) ? t : "");
					if (null != i && null != a && null != o && !isNaN(c) && !isNaN(u)) {
						let e = null != (n = i.scrollTop) ? n : 0,
							t = 0 !== i.scrollHeight ? i.scrollHeight : u + 20,
							d = 0 !== i.clientHeight ? i.clientHeight : u + 20,
							p = u - c,
							m = (0, r.clamp)(t - d, p + 1, u + 20),
							f = p === m ? 1 : (0, r.clamp)((e - p) / (m - p), 0, 1);
						a.style.filter = "brightness(".concat(1 + ((j ? 1.4 : .6) - 1) * f, ")"), a.style.backgroundColor = "color-mix(in oklab,".concat(A, " ").concat((1 - f) * 100, "%, ").concat(I, ")"), o.style.opacity = "".concat(0 + +f), o.style.transform = "translateY(".concat((l = c / 4) + (0 - l) * f, "px)"), null != s && (s.style.opacity = "".concat(1 + -1 * f))
					}
				}, [I, A, null == S ? void 0 : S.height, j, b, null == _ ? void 0 : _.height]);
				return i.useEffect(() => {
					T()
				}, [T, j]), i.useEffect(() => {
					let e = b.current,
						t = () => {
							T()
						};
					return null == e || e.addEventListener("scroll", t), () => {
						null == e || e.removeEventListener("scroll", t)
					}
				}, [b, T]), (0, l.jsxs)(l.Fragment, {
					children: [(0, l.jsxs)("div", {
						className: h.stickyContainer,
						children: [(0, l.jsx)("div", {
							className: h.stickyBannerContainer,
							children: (0, l.jsx)("div", {
								className: h.stickyBanner,
								ref: N
							})
						}), (0, l.jsx)("div", {
							className: h.backButtonContainer,
							children: (0, l.jsx)(m.Z, {
								className: h.headerButton
							})
						}), (0, l.jsx)("div", {
							className: h.nameContainer,
							children: (0, l.jsx)(o.X6q, {
								ref: E,
								className: h.textApplicationName,
								variant: "heading-lg/extrabold",
								children: y
							})
						})]
					}), (0, p.BQ)(t) ? (0, l.jsx)("div", {
						ref: P,
						className: h.moreMenuButtonContainer,
						children: (0, l.jsx)(f.Z, {
							application: t,
							context: n,
							className: h.headerButton,
							sectionName: g
						})
					}) : null, (0, l.jsx)("div", {
						ref: C,
						className: h.bannerBackground,
						style: {
							backgroundColor: A
						}
					})]
				})
			}
		},
		675993: function(e, t, n) {
			n.d(t, {
				Z: () => S
			}), n(388685), n(953529);
			var l = n(255367),
				i = n(73800),
				r = n(120356),
				a = n.n(r),
				o = n(442837),
				s = n(755721),
				c = n(481060),
				u = n(115130),
				d = n(147865),
				p = n(427996),
				m = n(906732),
				f = n(706302),
				h = n(812236),
				v = n(835473),
				y = n(70097),
				x = n(240991),
				b = n(973616),
				g = n(626135),
				j = n(783097),
				N = n(695676),
				C = n(520315),
				E = n(29380),
				P = n(783685),
				O = n(981631),
				A = n(388032),
				I = n(449549),
				_ = n(73433);

			function S(e) {
				let {
					context: t,
					application: n,
					videoUrl: r,
					imageCoverUrl: s,
					sectionName: c,
					hasCommands: d
				} = e, m = i.useMemo(() => {
					var e;
					return null != (e = (0, j.jD)(n)) ? e : ""
				}, [n]), f = (0, o.e7)([u.Z], () => u.Z.inDevModeForApplication(n.id)), {
					isSlideReady: h
				} = (0, N.hH)(), [v, x] = i.useState(!1);
				i.useEffect(() => {
					h && x(!0)
				}, [h]);
				let b = null != r;
				return (0, l.jsxs)("div", {
					className: I.container,
					children: [b ? (0, l.jsxs)("div", {
						className: I.videoContainer,
						children: [v ? (0, l.jsx)(y.Z, {
							className: a()(I.videoCover, I.video),
							loop: !0,
							muted: !0,
							autoPlay: !0,
							src: r,
							poster: s
						}) : null, (0, l.jsx)("img", {
							className: I.videoCover,
							src: s,
							"aria-label": A.intl.string(A.t.X4IxWF)
						})]
					}) : null, (0, l.jsxs)("div", {
						className: b ? I.overviewContainerWithVideo : I.overviewContainerNoVideo,
						children: [(0, l.jsx)(L, {
							application: n
						}), (0, l.jsx)(R, {
							application: n
						}), m.length > 0 ? (0, l.jsx)(k, {
							description: m
						}) : null, f ? (0, l.jsx)("div", {
							className: I.developerShelfControlsContainer,
							children: (0, l.jsx)(p.W, {
								hideSearch: !0,
								className: I.developerShelfControls
							})
						}) : null, (0, l.jsx)(w, {
							context: t,
							application: n,
							sectionName: c,
							isDeveloperOfThisApp: f,
							hasCommands: d
						})]
					}), (0, l.jsx)(T, {
						application: n
					})]
				})
			}

			function T(e) {
				let {
					application: t
				} = e, n = (0, j.Cb)(t), i = (0, j.Hu)(t);
				return n || i ? (0, l.jsxs)("div", {
					className: I.monetizationDisclosureContainerStyle,
					children: [n ? (0, l.jsxs)("div", {
						className: I.monetizationDisclosureStyle,
						children: [(0, l.jsx)(c.EOn, {
							size: "sm",
							color: c.TVs.colors.INTERACTIVE_MUTED
						}), (0, l.jsx)(c.Text, {
							variant: "text-sm/normal",
							color: "text-secondary",
							children: A.intl.string(A.t["8z5B2d"])
						})]
					}) : null, i ? (0, l.jsxs)("div", {
						className: I.monetizationDisclosureStyle,
						children: [(0, l.jsx)(c.uMN, {
							size: "sm",
							color: c.TVs.colors.INTERACTIVE_MUTED
						}), (0, l.jsx)(c.Text, {
							variant: "text-sm/normal",
							color: "text-secondary",
							children: A.intl.string(A.t["5khEk5"])
						})]
					}) : null]
				}) : null
			}

			function L(e) {
				var t;
				let {
					application: n
				} = e, i = (0, j.BQ)(n) ? n.name : null != (t = (0, j.$d)(n)) ? t : "", r = (0, j.vJ)(n);
				return (0, l.jsxs)("div", {
					className: I.titleContainer,
					children: [(0, l.jsx)(c.X6q, {
						variant: "heading-xl/extrabold",
						lineClamp: 1,
						children: i
					}), r ? (0, l.jsx)("div", {
						className: I.partnerLabelContainer,
						children: (0, l.jsx)(c.Text, {
							variant: "text-xs/medium",
							color: "text-default",
							children: A.intl.string(A.t.LO4f0N)
						})
					}) : null]
				})
			}

			function R(e) {
				let {
					application: t
				} = e, n = i.useMemo(() => {
					var e;
					return (0, j.BQ)(t) && null != (e = null == t ? void 0 : t.tags) ? e : []
				}, [t]);
				return (0, j.ye)(t) ? (0, l.jsxs)("div", {
					className: I.tagsContainer,
					children: [(0, l.jsx)(Z, {
						application: t
					}), n.map((e, t) => (0, l.jsx)("div", {
						className: I.tagContainer,
						children: (0, l.jsx)(c.Text, {
							variant: "text-sm/semibold",
							color: "interactive-normal",
							children: e
						})
					}, e + t))]
				}) : null
			}

			function Z(e) {
				var t;
				let {
					application: n
				} = e;
				if (!(0, j.ye)(n)) return null;
				let i = null != (t = (0, j.BQ)(n) ? n instanceof b.ZP ? n.maxParticipants : n.max_participants : 0) ? t : 0;
				return (0, l.jsxs)("div", {
					className: I.tagContainer,
					children: [(0, l.jsx)(c.BFJ, {
						size: "xs",
						color: c.TVs.colors.INTERACTIVE_NORMAL
					}), (0, l.jsx)(c.Text, {
						variant: "text-sm/semibold",
						color: "interactive-normal",
						children: (0, d.lY)(i)
					})]
				})
			}

			function w(e) {
				var t;
				let {
					context: n,
					application: r,
					sectionName: a,
					hasCommands: o,
					isDeveloperOfThisApp: u
				} = e, d = (0, h.Fs)(n, r.id), p = (0, v.q)(r.id), y = null == p || null == (t = p.bot) ? void 0 : t.id, x = (0, f.Z)({
					context: n,
					application: r,
					botUserId: y
				}), {
					analyticsLocations: b
				} = (0, m.ZP)();
				if (i.useEffect(() => {
						if (!(0, j.BQ)(r) || !(0, j.ye)(r)) return;
						let e = setTimeout(() => {
							(null == d || null == y) && g.default.track(O.rMx.APP_LAUNCHER_PEP_BUTTON_NOT_RENDERED, {
								application_id: r.id,
								is_primary_entry_point_command_non_null: null != d,
								is_bot_user_id_non_null: null != y,
								show_try_it_out_button: x
							})
						}, 2e3);
						return () => clearTimeout(e)
					}, [r, d, y, x]), !(0, j.BQ)(r) || !(0, j.ye)(r)) return null;
				let N = s.Ph.MAX;
				return null != d && null != y ? (0, l.jsxs)("div", {
					className: I.entrypointContainer,
					children: [(0, l.jsx)("div", {
						className: I.entryPointContainerFlexChild,
						children: (0, l.jsx)(E.Z, {
							context: n,
							application: r,
							sectionName: a,
							primaryEntryPointCommand: d,
							buttonSize: N
						})
					}), x && null != y ? (0, l.jsx)("div", {
						className: I.entryPointContainerFlexChild,
						children: (0, l.jsx)(P.Z, {
							botUserId: y,
							applicationId: r.id,
							buttonSize: N,
							analyticsLocations: b
						})
					}) : null]
				}) : u && !o && (0, j.ye)(r) ? (0, l.jsx)(c.Wn, {
					className: I.primaryEntryPointWarningMessage,
					messageType: c.QYI.WARNING,
					children: A.intl.format(A.t["s/3hjI"], {})
				}) : null
			}

			function k(e) {
				let {
					description: t
				} = e, [n, r] = i.useState(!0);
				i.useLayoutEffect(() => r(!1), []);
				let a = i.useMemo(() => (0, x.parseBioReact)(t), [t]),
					{
						ref: o,
						lineHeight: s,
						lineCount: u
					} = function() {
						let e = i.useRef(null),
							[t, n] = i.useState(null),
							[l, r] = i.useState(null);
						return i.useLayoutEffect(() => {
							let t = e.current;
							if (null === t || 0 === t.clientHeight) return;
							let l = parseInt(getComputedStyle(t).lineHeight);
							isNaN(l) || (n(l), r(Math.floor(t.clientHeight / l)))
						}, []), {
							ref: e,
							lineHeight: t,
							lineCount: l
						}
					}(),
					d = i.useMemo(() => {
						if (null == s || null == u) return {
							key: 0
						};
						let e = s * u;
						return {
							key: 1,
							minHeightOverride: Math.min(e, +s),
							maxHeightOverride: e
						}
					}, [u, s]),
					{
						ref: p,
						isTransitioning: m,
						onTransitionEnd: f
					} = (0, C.Z)(function(e) {
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
					}({
						isExpanded: n
					}, d)),
					h = n || m;
				return (0, l.jsxs)("div", {
					className: I.descriptionContainer,
					children: [(0, l.jsx)("div", {
						ref: p,
						className: I.overflowHidden,
						onTransitionEnd: f,
						children: (0, l.jsx)(c.Text, {
							ref: o,
							className: _.markup,
							variant: "text-sm/medium",
							lineClamp: h ? void 0 : 1,
							style: {
								maxHeight: h ? void 0 : d.minHeightOverride
							},
							children: a
						})
					}), null != u && u > 1 ? (0, l.jsxs)(c.P3F, {
						className: I.expandableDescriptionClickable,
						onClick: () => r(e => !e),
						children: [(0, l.jsx)(c.Text, {
							variant: "text-sm/semibold",
							color: "text-brand",
							children: h ? A.intl.string(A.t.u4YJ8v) : A.intl.string(A.t["N/tajI"])
						}), h ? (0, l.jsx)(c.u04, {
							size: "sm",
							color: c.TVs.colors.TEXT_BRAND
						}) : (0, l.jsx)(c.CJ0, {
							size: "sm",
							color: c.TVs.colors.TEXT_BRAND
						})]
					}) : null]
				})
			}
		},
		173790: function(e, t, n) {
			n.d(t, {
				Z: () => C
			}), n(388685);
			var l = n(255367),
				i = n(73800),
				r = n(442837),
				a = n(218061),
				o = n(481060),
				s = n(361213),
				c = n(778569),
				u = n(213459),
				d = n(835473),
				p = n(541099),
				m = n(827498),
				f = n(783097),
				h = n(753972),
				v = n(387658),
				y = n(536650),
				x = n(675993),
				b = n(689079),
				g = n(388032),
				j = n(189102),
				N = n(413097);

			function C(e) {
				var t;
				let {
					context: n,
					application: s,
					sectionName: c
				} = e, C = "channel" === n.type ? n.channel : void 0, P = (0, r.e7)([p.Z], () => p.Z.entrypoint()), O = null != (t = (0, d.q)(s.id === b.bi.BUILT_IN ? null : s.id)) ? t : s, A = (0, f.ye)(O) ? E : x.Z, I = i.useRef(null), [_, S] = i.useState(!1), {
					iconURL: T,
					name: L
				} = i.useMemo(() => (0, f.sl)(O, {
					fakeAppIconURL: N,
					size: 84
				}), [O]), R = (0, u.PL)(!0, !0), Z = (0, u.LD)(null == C ? void 0 : C.guild_id, !0), w = i.useMemo(() => (0, u.If)(n, O.id), [R, Z, n, O.id]), k = !w.isGuildInstalled && !w.isUserInstalled;
				return i.useEffect(() => {
					k && u.ZP.queryInstallOnDemandApp(O.id, null == C ? void 0 : C.id)
				}, [O.id, null == C ? void 0 : C.id, k]), (0, l.jsxs)(o.u2D, {
					className: j.container,
					fade: !0,
					ref: I,
					role: "region",
					"aria-label": g.intl.formatToPlainString(g.t["4OP4Ul"], {
						applicationName: L
					}),
					children: [(0, l.jsx)(y.Z, {
						application: O,
						context: n,
						name: L,
						iconURL: T,
						scrollerRef: I,
						sectionName: c
					}), null != T && (0, l.jsx)(h.Z, {
						src: T,
						className: j.appIcon
					}), (0, l.jsx)(a.Z, {
						size: 54
					}), (0, l.jsx)(A, {
						context: n,
						application: O,
						sectionName: c,
						hasCommands: _
					}), P === m._b.TEXT ? (0, l.jsx)(v.Z, {
						context: n,
						application: O,
						sectionName: c,
						installOnDemand: k,
						setHasCommands: S
					}) : null]
				})
			}

			function E(e) {
				let {
					context: t,
					application: n,
					sectionName: i,
					hasCommands: r
				} = e, a = (0, c.Z)({
					applicationId: n.id,
					size: 2048,
					names: ["embedded_cover"]
				}), o = (0, f.yJ)(n), u = null != o && null != o.activity_preview_video_asset_id ? (0, s.Z)(n.id, o.activity_preview_video_asset_id) : null;
				return (0, l.jsx)(x.Z, {
					context: t,
					application: n,
					imageCoverUrl: a.url,
					videoUrl: u,
					sectionName: i,
					hasCommands: r
				})
			}
		},
		488977: function(e, t, n) {
			n.d(t, {
				Z: () => L
			}), n(997841);
			var l = n(255367),
				i = n(73800),
				r = n(120356),
				a = n.n(r),
				o = n(442837),
				s = n(481060),
				c = n(367907),
				u = n(895924),
				d = n(970321),
				p = n(311819),
				m = n(433534),
				f = n(299206),
				h = n(726521),
				v = n(973616),
				y = n(914010),
				x = n(594174),
				b = n(626135),
				g = n(572004),
				j = n(630388),
				N = n(135431),
				C = n(541099),
				E = n(783097),
				P = n(570949),
				O = n(314734),
				A = n(981631),
				I = n(388032),
				_ = n(640724);

			function S(e) {
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
			}

			function T(e, t) {
				return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var l = Object.getOwnPropertySymbols(e);
						n.push.apply(n, l)
					}
					return n
				})(Object(t)).forEach(function(n) {
					Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
				}), e
			}

			function L(e) {
				var t;
				let {
					application: r,
					context: L,
					className: R,
					sectionName: Z
				} = e, w = i.useRef(null), k = (0, o.e7)([C.Z], () => C.Z.entrypoint()), M = (0, E.L1)(r), U = (0, m.Eb)(M), D = (0, d.R)(r.id), H = (0, o.e7)([y.Z], () => {
					var e;
					return null != (e = y.Z.getGuildId()) ? e : void 0
				}, []), V = {
					location: u.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
					application_id: r.id,
					section_name: Z,
					source: C.Z.lastShownEntrypoint()
				}, B = x.default.getCurrentUser(), W = (0, f.Z)({
					id: r.id,
					label: I.intl.string(I.t["+NP/b2"])
				}), F = (0, P.P)({
					application: r
				}), G = (0, j.yE)(null != (t = r.flags) ? t : 0, A.udG.EMBEDDED), z = "channel" === L.type ? L.channel : void 0;
				return (0, l.jsxs)("div", {
					className: _.container,
					children: [(0, l.jsx)(s.P3F, {
						onClick: () => {
							let e = G ? (0, p.H)({
								applicationId: r.id,
								referrerId: null == B ? void 0 : B.id
							}) : (0, p.J)(S({
								id: r.id
							}, M));
							(0, g.JG)(e, () => (0, s.showToast)((0, s.createToast)(I.intl.string(I.t["L/PwZW"]), s.ToastType.SUCCESS))), b.default.track(A.rMx.APP_LAUNCHER_APPLICATION_LINK_COPIED, {
								application_id: r.id,
								source: k
							})
						},
						className: a()(_.clickable, R),
						"aria-label": I.intl.string(I.t.WqhZsr),
						children: (0, l.jsx)(s.xPt, {
							size: "sm",
							color: s.TVs.colors.INTERACTIVE_ACTIVE
						})
					}), (0, l.jsx)(s.yRy, {
						targetElementRef: w,
						renderPopout: e => {
							let {
								closePopout: t
							} = e;
							return (0, l.jsxs)(s.v2r, {
								className: O.NN,
								navId: "app-details-more-menu",
								onClose: t,
								"aria-label": I.intl.string(I.t.AXIHpa),
								onSelect: void 0,
								children: [(0, l.jsxs)(s.kSQ, {
									children: [D && (0, l.jsx)(s.sNh, {
										id: "open-storefront",
										label: I.intl.string(I.t.kRvlKC),
										action: () => {
											(0, s.ZDy)(async () => {
												let {
													default: e
												} = await Promise.all([n.e("74891"), n.e("77803"), n.e("14529")]).then(n.bind(n, 7225));
												return t => (0, l.jsx)(e, {
													transitionState: t.transitionState,
													onClose: t.onClose,
													appId: r.id,
													guildId: H
												})
											})
										}
									}), U ? (0, l.jsx)(s.sNh, {
										id: "add-app",
										label: I.intl.string(I.t.NgXl3N),
										action: () => {
											null == M.customInstallUrl && (0, c.yw)(A.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, V), (0, N.L)(T(S({}, M), {
												oauth2Callback: e => {
													let {
														location: t
													} = e;
													null != t && (0, c.yw)(A.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, V)
												},
												source: "app_launcher_app_details"
											}))
										}
									}) : null, r instanceof v.ZP ? (0, l.jsx)(s.sNh, {
										id: "report-app",
										color: "danger",
										label: I.intl.string(I.t.jhJze3),
										action: () => {
											var e;
											(0, h.uu)({
												application: r,
												entrypoint: "app_launcher",
												contextualGuildId: null != (e = null == z ? void 0 : z.getGuildId()) ? e : void 0,
												contextualChannelId: null == z ? void 0 : z.id
											})
										}
									}) : null, F]
								}), (0, l.jsx)(s.kSQ, {
									children: W
								})]
							})
						},
						align: "right",
						position: "bottom",
						children: e => (0, l.jsx)(s.P3F, T(S({
							innerRef: w
						}, e), {
							onClick: e.onClick,
							className: a()(_.clickable, R),
							"aria-label": I.intl.string(I.t.UKOtz8),
							children: (0, l.jsx)(s.xhG, {
								size: "sm",
								color: s.TVs.colors.INTERACTIVE_ACTIVE
							})
						}))
					})]
				})
			}
		},
		29380: function(e, t, n) {
			n.d(t, {
				Z: () => j
			}), n(388685);
			var l = n(255367),
				i = n(73800),
				r = n(755721),
				a = n(481060),
				o = n(542094),
				s = n(895924),
				c = n(813370),
				u = n(626135),
				d = n(499254),
				p = n(541099),
				m = n(827498),
				f = n(160973),
				h = n(783097),
				v = n(890280),
				y = n(176412),
				x = n(981631),
				b = n(388032),
				g = n(854408);

			function j(e) {
				let {
					context: t,
					application: n,
					sectionName: j,
					primaryEntryPointCommand: N,
					buttonSize: C = r.Ph.MEDIUM
				} = e, E = i.useId(), P = i.useCallback(() => {
					d.yT(m.ti.ACTIVITY)
				}, []), O = i.useCallback(() => {
					p.Z.shouldShowModal() && P()
				}, [P]), {
					submitting: A,
					wasSubmitting: I
				} = (0, v.Z)({
					applicationId: n.id,
					context: t,
					launchingComponentId: E,
					onSubmissionComplete: P
				}), [_, S] = i.useState(!1), T = (0, o.Qv)({
					applicationId: n.id,
					context: t
				}), L = i.useMemo(() => (0, h.XZ)(N.displayName), [N.displayName]), {
					onActivityItemSelected: R,
					buttonColor: Z,
					buttonText: w
				} = (0, y.P7)({
					context: t,
					application: n,
					location: s.Vh.APP_LAUNCHER_APPLICATION_VIEW,
					sectionName: j,
					commandName: L,
					autoDismissOnClick: T === o.JS.LEAVE || (0, c.g)(n),
					launchingComponentId: E,
					submitting: null != I ? I : A,
					onConfirmActivityLaunchChecksAlertOpen: O
				}), {
					disabled: k,
					reason: M
				} = (0, f.Z)({
					context: t,
					application: n,
					activityAction: T
				});
				return (0, l.jsx)(a.ua7, {
					shouldShow: null != M,
					tooltipContentClassName: g.tooltipContent,
					text: M,
					children: e => {
						var t, i, {
								onClick: a
							} = e,
							o = function(e, t) {
								if (null == e) return {};
								var n, l, i = function(e, t) {
									if (null == e) return {};
									var n, l, i = {},
										r = Object.keys(e);
									for (l = 0; l < r.length; l++) n = r[l], t.indexOf(n) >= 0 || (i[n] = e[n]);
									return i
								}(e, t);
								if (Object.getOwnPropertySymbols) {
									var r = Object.getOwnPropertySymbols(e);
									for (l = 0; l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
								}
								return i
							}(e, ["onClick"]);
						return (0, l.jsx)(r.zx, (t = function(e) {
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
						}({}, o), i = i = {
							type: "submit",
							size: C,
							color: Z,
							disabled: k,
							submitting: _,
							onClick: () => {
								S(!0), R(), null == a || a(), u.default.track(x.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
									application_id: n.id,
									button_action: m._y.USE_APP_COMMAND
								})
							},
							"aria-label": b.intl.formatToPlainString(b.t["XjP/R0"], {
								buttonText: w,
								applicationName: n.name
							}),
							children: w
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var l = Object.getOwnPropertySymbols(e);
								n.push.apply(n, l)
							}
							return n
						})(Object(i)).forEach(function(e) {
							Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
						}), t))
					}
				})
			}
		},
		783685: function(e, t, n) {
			n.d(t, {
				Z: () => d
			}), n(388685);
			var l = n(255367),
				i = n(73800),
				r = n(755721),
				a = n(626135),
				o = n(827498),
				s = n(915346),
				c = n(981631),
				u = n(388032);

			function d(e) {
				let {
					botUserId: t,
					applicationId: n,
					buttonSize: d,
					analyticsLocations: p
				} = e, [m, f] = i.useState(!1), h = i.useRef(null), v = i.useCallback(async () => {
					a.default.track(c.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
						application_id: n,
						button_action: o._y.OPEN_APP_DM
					}), f(!0);
					try {
						await (0, s.W)({
							appId: n,
							botId: t,
							analyticsLocations: p
						})
					} catch (e) {}
					clearTimeout(h.current), f(!1)
				}, [t, n, p]);
				return (0, l.jsx)(r.zx, {
					type: "submit",
					size: d,
					color: r.zx.Colors.PRIMARY,
					submitting: m,
					onClick: v,
					"aria-label": u.intl.string(u.t.AUM8hY),
					children: u.intl.string(u.t.AUM8hY)
				})
			}
		},
		870205: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var l = n(255367),
				i = n(73800),
				r = n(755721),
				a = n(481060),
				o = n(984168),
				s = n(314734),
				c = n(388032),
				u = n(556342);

			function d(e) {
				let t, {
						sortOrder: n,
						onSortOptionClick: d
					} = e,
					p = i.useRef(null);
				switch (n) {
					case s.bS.POPULAR:
						t = c.intl.string(c.t.SzxiqK);
						break;
					case s.bS.ALPHABETICAL:
						t = c.intl.string(c.t.m8xstr)
				}
				return (0, l.jsx)(a.yRy, {
					targetElementRef: p,
					renderPopout: e => {
						let {
							closePopout: t
						} = e;
						return (0, l.jsx)(o.Z, {
							sortOrder: n,
							onSortOptionClick: d,
							closePopout: t
						})
					},
					position: "bottom",
					align: "left",
					children: (e, n) => {
						var i, o;
						let {
							isShown: s
						} = n;
						return (0, l.jsxs)(r.zx, (i = function(e) {
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
						}({}, e), o = o = {
							buttonRef: p,
							size: r.zx.Sizes.MIN,
							color: r.zx.Colors.CUSTOM,
							className: u.sortDropdown,
							innerClassName: u.sortDropdownInner,
							"aria-label": c.intl.string(c.t.yeYaHR),
							children: [(0, l.jsx)(a.uVW, {
								size: "xs",
								color: "currentColor",
								className: u.sortIconMargin
							}), (0, l.jsx)(a.Text, {
								variant: "text-sm/medium",
								color: "text-default",
								children: t
							}), s ? (0, l.jsx)(a.u04, {
								size: "custom",
								color: "currentColor",
								width: 20
							}) : (0, l.jsx)(a.CJ0, {
								size: "custom",
								color: "currentColor",
								width: 20
							})]
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var l = Object.getOwnPropertySymbols(e);
								n.push.apply(n, l)
							}
							return n
						})(Object(o)).forEach(function(e) {
							Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
						}), i))
					}
				})
			}
		},
		984168: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var l = n(255367);
			n(73800);
			var i = n(120356),
				r = n.n(i),
				a = n(481060),
				o = n(314734),
				s = n(388032),
				c = n(148520);

			function u(e) {
				let {
					sortOrder: t,
					onSortOptionClick: n,
					closePopout: i
				} = e, u = e => {
					n(e), i()
				};
				return (0, l.jsx)("div", {
					className: r()(o.Jh, c.container),
					children: (0, l.jsx)(a.v2r, {
						navId: "command-list-sort",
						"aria-label": s.intl.string(s.t.Ugo9ub),
						hideScroller: !0,
						onClose: i,
						onSelect: i,
						children: (0, l.jsxs)(a.kSQ, {
							label: s.intl.string(s.t.yeYaHR),
							children: [(0, l.jsx)(a.k5B, {
								id: "sort-by-popular",
								group: "sort-by",
								label: s.intl.string(s.t.SzxiqK),
								action: () => u(o.bS.POPULAR),
								checked: t === o.bS.POPULAR
							}), (0, l.jsx)(a.k5B, {
								id: "sort-by-alphabetical",
								group: "sort-by",
								label: s.intl.string(s.t.m8xstr),
								action: () => u(o.bS.ALPHABETICAL),
								checked: t === o.bS.ALPHABETICAL
							})]
						})
					})
				})
			}
		},
		561160: function(e, t, n) {
			n.d(t, {
				A: () => o
			});
			var l = n(255367);
			n(73800);
			var i = n(481060),
				r = n(176412),
				a = n(146173);

			function o(e) {
				let {
					searchQuery: t,
					textContent: n,
					type: o
				} = e;
				return (0, r.Bm)(o, t), (0, l.jsx)("div", {
					className: a.emptyStateContainer,
					children: (0, l.jsx)(i.Text, {
						variant: "text-md/medium",
						color: "text-muted",
						children: n
					})
				})
			}
		},
		692656: function(e, t, n) {
			n.d(t, {
				Z: () => et
			}), n(388685), n(539854), n(997841);
			var l = n(255367),
				i = n(73800),
				r = n(392711),
				a = n.n(r),
				o = n(535655),
				s = n(754738),
				c = n(727241),
				u = n(973693),
				d = n(912370),
				p = n(873199),
				m = n(442837),
				f = n(481060),
				h = n(911969),
				v = n(115130),
				y = n(566620),
				x = n(127255),
				b = n(880308),
				g = n(427996),
				j = n(367907),
				N = n(10718),
				C = n(895924),
				E = n(835473),
				P = n(568100),
				O = n(471518),
				A = n(425986),
				I = n(216780),
				_ = n(857192),
				S = n(630388),
				T = n(823379),
				L = n(541099),
				R = n(827498),
				Z = n(87005),
				w = n(219066),
				k = n(106066),
				M = n(783097),
				U = n(695676),
				D = n(98880),
				H = n(804307),
				V = n(888617),
				B = n(561160),
				W = n(41558),
				F = n(105862),
				G = n(28147),
				z = n(314734),
				q = n(981631),
				Y = n(689079),
				X = n(388032),
				Q = n(355563);
			let J = [],
				K = [, , , , ].fill(0).map((e, t) => t),
				$ = [{
					cards: [, , , , ].fill(0).map((e, t) => t),
					look: D.U4.MEDIUM_BANNER
				}, {
					cards: [, , , , ].fill(0).map((e, t) => t),
					look: D.U4.ROW
				}, {
					cards: [, , , , ].fill(0).map((e, t) => t),
					look: D.U4.ROW
				}],
				ee = u.Y.APP_LAUNCHER_IN_TEXT;

			function et(e) {
				let {
					context: t,
					entrypoint: n,
					searchQuery: r,
					setSearchQuery: a,
					setScroller: o,
					isScrollCloseToBottom: s
				} = e, c = (0, m.e7)([v.Z], () => v.Z.getIsEnabled(), []), u = n === R._b.TEXT && "channel" === t.type && null != t.channel && !t.channel.isPrivate(), d = (0, M.Yn)(n), p = !(0, M.Yn)(n), h = n === R._b.TEXT, [x, b] = ec(!0), [g, j] = ec(u), [N, C] = ec(d), [E, P] = ec(p), O = x && g && N && E, A = (d || u) && !O, I = p && c;
				i.useEffect(() => {
					var e;
					let n = "channel" === t.type ? null == (e = t.channel) ? void 0 : e.guild_id : void 0;
					(0, y.w1)({
						guildId: n,
						force: !0
					})
				}, [t]), i.useEffect(() => {
					n === R._b.VOICE && y.ux()
				}, [n]);
				let _ = r.length > 0;
				return (0, l.jsxs)("div", {
					className: Q.container,
					children: [I ? (0, l.jsx)(en, {}) : null, (0, l.jsx)(el, {
						searchQuery: r,
						setSearchQuery: a,
						placeholder: h ? X.intl.string(X.t.ziyFv7) : X.intl.string(X.t["pw+r5e"])
					}), (0, l.jsx)(f.Ttm, {
						ref: o,
						className: Q.scrollableContent,
						fade: !0,
						children: _ ? (0, l.jsx)(G.Z, {
							context: t,
							query: r,
							entrypoint: n,
							isScrollCloseToBottom: s
						}) : (0, l.jsxs)("div", {
							children: [(0, l.jsx)(ei, {
								context: t,
								entrypoint: n,
								onEmptyState: b
							}), u && "channel" === t.type && (0, l.jsx)(ea, {
								context: t,
								onEmptyState: j
							}), d && (0, l.jsx)(eo, {
								context: t,
								entrypoint: n,
								onEmptyState: C
							}), p && (0, l.jsx)(er, {
								context: t,
								onEmptyState: P
							}), O && (0, l.jsx)(B.A, {
								type: R.LG.HOME_EMPTY,
								textContent: n === R._b.TEXT ? X.intl.string(X.t.iKZctb) : X.intl.string(X.t.RL7Ncn)
							}), A && (0, l.jsx)(F.Z, {})]
						})
					})]
				})
			}

			function en() {
				return (0, l.jsxs)("div", {
					className: Q.developerShelfControlsContainer,
					children: [(0, l.jsx)(f.Text, {
						className: Q.developerShelfControlsLabel,
						variant: "text-sm/normal",
						children: X.intl.string(X.t.tZ3FNj)
					}), (0, l.jsx)(g.W, {
						hideSearch: !0
					})]
				})
			}

			function el(e) {
				let {
					searchQuery: t,
					setSearchQuery: n,
					placeholder: r
				} = e, o = i.useRef(null), [s, c] = i.useState(!1), u = i.useMemo(() => a().debounce(e => {
					(0, j.yw)(q.rMx.APP_LAUNCHER_SEARCH_QUERY_TYPED, {
						query: e,
						source: L.Z.entrypoint(),
						location: C.Vh.APP_LAUNCHER_HOME
					})
				}, 400, {
					leading: !1,
					trailing: !0
				}), []), d = i.useCallback(() => n(""), [n]), p = i.useCallback(() => {
					c(!0), (0, j.yw)(q.rMx.APP_LAUNCHER_SEARCH_FOCUSED, {
						source: L.Z.entrypoint(),
						location: C.Vh.APP_LAUNCHER_HOME
					})
				}, []), m = i.useCallback(() => {
					c(!1)
				}, []), h = i.useCallback(e => {
					s || p(), n(e), u(e)
				}, [s, n, p, u]);
				return i.useEffect(() => {
					let e = o.current;
					if (null == e) return;
					let t = () => {
						s || p()
					};
					return e.addEventListener("click", t), () => {
						e.removeEventListener("click", t)
					}
				}, [s, p]), (0, l.jsx)("div", {
					className: Q.searchBarContainer,
					children: (0, l.jsx)(f.E1j, {
						ref: e => {
							var t;
							o.current = null != (t = null == e ? void 0 : e.containerRef.current) ? t : null
						},
						placeholder: r,
						query: t,
						onChange: h,
						onClear: d,
						size: f.E1j.Sizes.MEDIUM,
						onFocus: m,
						autoFocus: !0
					})
				})
			}

			function ei(e) {
				let {
					context: t,
					entrypoint: n,
					onEmptyState: r
				} = e, a = n === R._b.VOICE, {
					frecentApps: o,
					loading: s
				} = (0, Z.f)({
					context: t,
					onlyActivityApps: a,
					allowCommandFetch: !0,
					includeAuthorizedAppsAndFetch: !0
				}), c = i.useMemo(() => {
					let e = [];
					for (let t of o) null != t.application && e.push({
						application: t.application
					});
					return e
				}, [o]), u = X.intl.string(X.t["s+UQpa"]), d = u;
				a && (d = X.intl.string(X.t["2pFD8P"]));
				let {
					items: p,
					handleViewMore: m
				} = eu({
					title: d,
					look: n === R._b.VOICE ? D.U4.LARGE_BANNER : D.U4.ROW,
					items: c,
					limit: 8,
					sectionName: R.L3.RECENT_APPS
				});
				i.useEffect(() => {
					s || 0 !== p.length && (0, j.yw)(q.rMx.APP_LAUNCHER_FRECENTS_SEEN, {
						num: p.length,
						section_name: R.L3.RECENT_APPS,
						location: R.G0.HOME,
						source: n
					})
				}, [p.length, n, s]);
				let f = !s && 0 === p.length;
				return (i.useEffect(() => {
					r(f)
				}, [f, r]), ! function(e) {
					let {
						apps: t,
						onlyActivityApps: n
					} = e, l = i.useMemo(() => n ? t.map(e => {
						let {
							application: t
						} = e;
						return t.id
					}) : [], [t, n]);
					(0, E.Z)(l)
				}({
					apps: p,
					onlyActivityApps: a
				}), s || f) ? null : (0, l.jsxs)("div", {
					children: [(0, l.jsx)(W.Z, {
						title: u,
						buttonType: W.Z.buttonTypes.VIEW_MORE,
						onClickViewButton: m
					}), (0, l.jsx)("div", {
						className: Q.sectionContentContainer,
						children: (0, l.jsx)("div", {
							className: Q.frecentList,
							children: p.map((e, n) => {
								let {
									application: i
								} = e;
								return a ? (0, l.jsx)(D.qR, {
									context: t,
									application: i,
									look: D.U4.ICON,
									location: R.G0.HOME,
									sectionName: R.L3.RECENT_APPS,
									resultsPosition: n,
									isOneClickCTA: !0,
									fetchesApplication: !1
								}, i.id) : (0, l.jsx)(D.kA, {
									context: t,
									application: i,
									look: D.U4.ICON,
									location: R.G0.HOME,
									sectionName: R.L3.RECENT_APPS,
									resultsPosition: n
								}, i.id)
							})
						})
					})]
				})
			}

			function er(e) {
				var t;
				let {
					context: n,
					onEmptyState: r
				} = e;
				(0, b.g)();
				let a = (0, x.Z)({
						guildId: "channel" === n.type ? null == (t = n.channel) ? void 0 : t.getGuildId() : void 0
					}),
					o = D.U4.LARGE_BANNER,
					{
						trackSectionImpressionRef: s
					} = (0, V.Z)({
						sectionName: R.L3.ACTIVITIES,
						numItems: a.length,
						numVisibleItems: a.length
					}),
					c = (0, k.s)(),
					u = 0 === a.length;
				return (i.useEffect(() => {
					r(u)
				}, [r, u]), u) ? null : (0, l.jsxs)("div", {
					children: [(0, l.jsx)("div", {
						ref: e => {
							s.current = e
						},
						children: (0, l.jsx)(W.Z, {
							title: X.intl.string(X.t.shUONj)
						})
					}), (0, l.jsx)("div", {
						className: Q.sectionTwoColumnContentContainer,
						children: a.map((e, t) => {
							let {
								application: i
							} = e;
							return (0, l.jsx)(D.qR, {
								context: n,
								application: i,
								look: o,
								location: C.Vh.APP_LAUNCHER_HOME,
								sectionName: R.L3.ACTIVITIES,
								resultsPosition: t,
								sectionOverallPosition: 0,
								isOneClickCTA: !c,
								fetchesApplication: !1
							}, i.id)
						})
					})]
				})
			}

			function ea(e) {
				let {
					context: t,
					onEmptyState: n
				} = e, r = R.L3.APPS_IN_THIS_SERVER, {
					appsInThisServer: a,
					isLoading: o
				} = (0, w.Z)({
					context: t
				}), {
					items: s,
					handleViewMore: c
				} = eu({
					title: X.intl.string(X.t.KfkuGR),
					look: D.U4.ROW,
					items: a,
					limit: 4,
					sectionName: r
				}), {
					trackSectionImpressionRef: u
				} = (0, V.Z)({
					sectionName: r,
					numItems: a.length,
					numVisibleItems: s.length
				}), d = !o && 0 === s.length;
				return (i.useEffect(() => {
					n(d)
				}, [d, n]), d) ? null : (0, l.jsxs)("div", {
					children: [(0, l.jsx)("div", {
						ref: e => {
							u.current = e
						},
						children: (0, l.jsx)(W.Z, {
							title: X.intl.string(X.t.KfkuGR),
							buttonType: W.Z.buttonTypes.VIEW_MORE,
							onClickViewButton: c
						})
					}), (0, l.jsx)("div", {
						className: Q.sectionRowsContentContainer,
						children: o ? K.map(e => (0, l.jsx)(H.Z, {
							look: D.U4.ROW
						}, e)) : s.map((e, n) => {
							let {
								application: i
							} = e;
							return null != i ? (0, l.jsx)(D.kA, {
								context: t,
								application: i,
								look: D.U4.ROW,
								sectionName: r,
								resultsPosition: n,
								location: C.Vh.APP_LAUNCHER_HOME
							}, i.id) : null
						})
					})]
				})
			}

			function eo(e) {
				let {
					context: t,
					entrypoint: n,
					onEmptyState: r
				} = e, {
					fetchState: a,
					recommendationsSections: c,
					isInstallOnDemand: u
				} = function(e) {
					let {
						context: t,
						entrypoint: n
					} = e, l = function() {
						let e = (0, m.e7)([_.default], () => _.default.onlyShowPreviewAppCollections),
							t = P.Z.getCurrentConfig({
								location: "App Launcher Home (Web)"
							}, {
								autoTrackExposure: !1
							}).enabled;
						return e ? o.E.PREVIEW : t ? o.E.NON_STAFF_PREVIEW : o.E.ACTIVE
					}();
					i.useEffect(() => {
						(0, O.XK)({
							surface: ee,
							activeState: l
						})
					}, [l]);
					let {
						sectionDescriptors: r
					} = N.wi({
						context: t,
						filters: {
							commandTypes: [h.yU.CHAT]
						},
						options: {
							placeholderCount: 0,
							limit: Y.tn,
							includeFrecency: !0
						},
						allowFetch: !0
					}), a = i.useCallback(e => null == r.find(t => t.id === e.id), [r]), s = (0, m.e7)([A.Z], () => A.Z.getFetchState({
						surface: ee,
						activeState: l
					})), c = (0, m.e7)([A.Z], () => A.Z.getCollections({
						surface: ee,
						activeState: l
					})), u = n === R._b.VOICE;
					return {
						fetchState: s,
						recommendationsSections: i.useMemo(() => u ? (0, M.pF)(c) : c, [c, u]),
						isInstallOnDemand: a
					}
				}({
					context: t,
					entrypoint: n
				}), p = function(e) {
					var t;
					let {
						context: n,
						recommendationsSections: l
					} = e;
					(0, b.g)();
					let r = (0, x.Z)({
						guildId: "channel" === n.type ? null == (t = n.channel) ? void 0 : t.getGuildId() : void 0
					});
					return i.useMemo(() => {
						if (!l.some(e => (0, S.yE)(e.flags, s.b.APPENDS_REMAINING_ACTIVITIES))) return J;
						let e = new Set;
						return l.forEach(t => {
							t.application_directory_collection_items.forEach(t => {
								t.type === d.C.APPLICATION && e.add(t.application.id)
							})
						}), r.filter(t => !e.has(t.application.id))
					}, [l, r])
				}({
					context: t,
					recommendationsSections: c
				}), f = a === A.M.FETCHING, v = !f && 0 === c.length;
				return (i.useEffect(() => {
					r(v)
				}, [v, r]), v) ? null : f ? $.map((e, t) => {
					let {
						cards: n,
						look: i
					} = e;
					return (0, l.jsxs)("div", {
						children: [(0, l.jsx)(W.Z.Loading, {}), (0, l.jsx)("div", {
							className: i === D.U4.ROW ? Q.sectionRowsContentContainer : Q.sectionTwoColumnContentContainer,
							children: n.map(e => (0, l.jsx)(H.Z, {
								look: i
							}, e))
						})]
					}, t)
				}) : c.map((e, n) => (0, l.jsx)(es, {
					recommendationsSection: e,
					remainingActivities: p,
					isInstallOnDemand: u,
					position: n,
					context: t
				}, e.id))
			}

			function es(e) {
				let t, n, {
						recommendationsSection: r,
						remainingActivities: a,
						isInstallOnDemand: o,
						position: u,
						context: m
					} = e,
					f = r.title;
				switch (r.type) {
					case p.o.BANNER_CARDS:
						t = D.U4.LARGE_BANNER;
						break;
					case p.o.SMALL_BANNER_CARDS:
						t = D.U4.MEDIUM_BANNER;
						break;
					default:
						t = D.U4.ROW
				}
				let h = i.useMemo(() => {
						let e = r.application_directory_collection_items.map(e => {
							if (e.type === d.C.APPLICATION) return {
								collectionItemId: e.id,
								collectionItemImageHash: e.image_hash,
								showsPromoted: (0, S.yE)(e.flags, c.q.PROMOTED),
								application: e.application,
								installOnDemand: o(e.application)
							}
						}).filter(T.lm);
						return (0, S.yE)(r.flags, s.b.APPENDS_REMAINING_ACTIVITIES) && e.push(...a.map(e => {
							let {
								application: t
							} = e;
							return {
								collectionItemId: void 0,
								collectionItemImageHash: void 0,
								showsPromoted: !1,
								application: t,
								installOnDemand: !0
							}
						})), e
					}, [o, r.application_directory_collection_items, r.flags, a]),
					v = r.title;
				switch (r.type) {
					case p.o.BANNER_CARDS:
					case p.o.SMALL_BANNER_CARDS:
						n = 6;
						break;
					case p.o.EXPANDABLE_LIST:
					default:
						n = 4
				}
				let {
					items: y,
					handleViewMore: x
				} = eu({
					title: f,
					look: t,
					items: h,
					limit: n,
					sectionName: v,
					sectionOverallPosition: u
				}), {
					trackSectionImpressionRef: b
				} = (0, V.Z)({
					sectionName: v,
					numItems: h.length,
					numVisibleItems: y.length
				}), g = r.type !== p.o.SMALL_BANNER_CARDS;
				return (0, l.jsxs)("div", {
					children: [(0, l.jsx)("div", {
						ref: e => {
							b.current = e
						},
						children: (0, l.jsx)(W.Z, {
							title: r.title,
							buttonType: W.Z.buttonTypes.VIEW_MORE,
							onClickViewButton: x
						})
					}), (0, l.jsx)("div", {
						className: t === D.U4.ROW ? Q.sectionRowsContentContainer : Q.sectionTwoColumnContentContainer,
						children: y.map((e, n) => {
							let i, {
								collectionItemId: r,
								collectionItemImageHash: a,
								application: o,
								installOnDemand: s,
								showsPromoted: c
							} = e;
							return null != r && null != a && (i = (0, I.$_)({
								itemId: r,
								hash: a,
								containerWidth: z.Gy
							})), (0, l.jsx)(D.kA, {
								context: m,
								application: o,
								look: t,
								sectionName: v,
								resultsPosition: n,
								location: C.Vh.APP_LAUNCHER_HOME,
								installOnDemand: s,
								enableVideoBanner: g,
								sectionOverallPosition: u,
								overrideImageUrl: i,
								showsPromoted: c
							}, "".concat(n, "-").concat(o.id))
						})
					})]
				})
			}

			function ec(e) {
				let [t, n] = i.useState(!e);
				return [t, i.useCallback(function() {
					let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
					n(e)
				}, [])]
			}

			function eu(e) {
				let {
					title: t,
					look: n,
					items: l,
					limit: r,
					sectionName: a,
					sectionOverallPosition: o
				} = e, {
					pushHistory: s
				} = (0, U.hH)();
				return i.useMemo(() => l.length <= r ? {
					items: l,
					handleViewMore: void 0
				} : {
					items: l.slice(0, r),
					handleViewMore: () => {
						(0, j.yw)(q.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
							section_name: a,
							source: L.Z.entrypoint(),
							num: l.length
						}), s({
							type: U.gc.LIST,
							title: t,
							look: n,
							items: l,
							sectionName: a,
							sectionOverallPosition: o
						})
					}
				}, [l, r, a, s, t, n, o])
			}
		},
		41558: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var l, i = n(255367),
				r = n(73800),
				a = n(481060),
				o = n(388032),
				s = n(780775),
				c = ((l = c || {})[l.VIEW_MORE = 0] = "VIEW_MORE", l[l.VIEW_LESS = 1] = "VIEW_LESS", l);

			function u(e) {
				let {
					title: t,
					buttonType: n,
					onClickViewButton: l
				} = e;
				return (0, i.jsxs)("div", {
					className: s.header,
					children: [(0, i.jsx)(a.Text, {
						variant: "text-md/medium",
						color: "header-primary",
						children: t
					}), null != n && null != l && (0, i.jsx)(a.P3F, {
						className: s.viewMore,
						onClick: l,
						"aria-label": o.intl.formatToPlainString(o.t["bj/2kZ"], {
							title: t
						}),
						children: (0, i.jsx)(a.Text, {
							variant: "text-md/medium",
							color: "text-brand",
							children: 0 === n ? o.intl.format(o.t.gVw57u, {}) : o.intl.string(o.t.nPGLFR)
						})
					})]
				})
			}
			u.buttonTypes = c, u.Loading = function() {
				let e = r.useMemo(() => ({
					width: "".concat(10 + 20 * Math.random(), "%")
				}), []);
				return (0, i.jsx)("div", {
					className: s.loadingHeader,
					style: e,
					children: (0, i.jsx)(a.Text, {
						className: s.hidden,
						variant: "text-md/medium",
						color: "header-primary",
						children: "_"
					})
				})
			}
		},
		105862: function(e, t, n) {
			n.d(t, {
				Z: () => y
			});
			var l = n(255367),
				i = n(73800),
				r = n(780384),
				a = n(481060),
				o = n(410030),
				s = n(782568),
				c = n(63063),
				u = n(827498),
				d = n(888617),
				p = n(981631),
				m = n(388032),
				f = n(434666),
				h = n(983008),
				v = n(478408);

			function y(e) {
				let {
					showImage: t = !0,
					padding: n = !1
				} = e, y = (0, o.ZP)(), x = (0, r.ap)(y) ? v : h, b = i.useCallback(() => {
					(0, s.Z)(c.Z.getAppsSupportURL(p.BhN.APPS_LEARN_MORE))
				}, []), {
					trackSectionImpressionRef: g
				} = (0, d.Z)({
					sectionName: u.L3.NEW_TO_APPS,
					numItems: 1,
					numVisibleItems: 1
				});
				return (0, l.jsx)("div", {
					className: n ? f.containerPadding : void 0,
					children: (0, l.jsxs)("div", {
						ref: e => {
							g.current = e
						},
						className: f.container,
						children: [t && (0, l.jsx)("img", {
							className: f.image,
							src: x,
							alt: "",
							"aria-hidden": !0
						}), (0, l.jsxs)("div", {
							className: f.body,
							children: [(0, l.jsx)(a.X6q, {
								variant: "heading-lg/bold",
								color: "header-primary",
								children: m.intl.string(m.t["kw8/ER"])
							}), (0, l.jsx)(a.Text, {
								variant: "text-xs/normal",
								color: "text-default",
								children: m.intl.string(m.t.GZoV1N)
							})]
						}), (0, l.jsx)(a.zxk, {
							variant: "primary",
							text: m.intl.string(m.t.Ye51oa),
							"aria-label": m.intl.formatToPlainString(m.t.xx5Sur, {
								sectionTitle: m.intl.string(m.t["kw8/ER"]),
								sectionBody: m.intl.string(m.t.GZoV1N)
							}),
							onClick: b
						})]
					})
				})
			}
		},
		106771: function(e, t, n) {
			n.d(t, {
				Z: () => h
			}), n(953529);
			var l = n(255367),
				i = n(73800),
				r = n(481060),
				a = n(239091),
				o = n(973616),
				s = n(783097),
				c = n(176412),
				u = n(570949),
				d = n(753972),
				p = n(532309),
				m = n(654715),
				f = n(413097);

			function h(e) {
				var t;
				let {
					command: n,
					application: h,
					onClick: v,
					query: y,
					searchResultsPosition: x
				} = e, b = i.useCallback(e => {
					if ((0, s.BQ)(h)) {
						let t = h instanceof o.ZP ? h : o.ZP.createFromServer(h);
						(0, a.vq)(e, e => (0, l.jsx)(u.Z, function(e) {
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
						}({
							application: t
						}, e)))
					}
				}, [h]), {
					iconURL: g,
					name: j,
					description: N
				} = i.useMemo(() => (0, s.sl)(h, {
					fakeAppIconURL: f
				}), [h]), C = i.useMemo(() => {
					var e;
					let t = null != (e = null == n ? void 0 : n.displayDescription) ? e : N;
					return null == t ? null : (0, c.ae)(t, void 0)
				}, [N, null == n ? void 0 : n.displayDescription]), {
					trackSearchResultsItemImpressionRef: E
				} = (0, p.Z)({
					applicationId: h.id,
					commandId: null == n ? void 0 : n.id,
					query: y,
					searchResultsPosition: x
				});
				return (0, l.jsx)(r.P3F, {
					className: m.clickable,
					innerRef: e => {
						E.current = e
					},
					onClick: v,
					onContextMenu: b,
					children: (0, l.jsxs)(r.Rny, {
						className: m.focusBlock,
						children: [(0, l.jsx)(d.Z, {
							src: g,
							className: m.icon,
							"aria-hidden": !0,
							rendersPlaceholder: !0
						}), (0, l.jsxs)("div", {
							className: m.cmdDetails,
							children: [(0, l.jsx)(r.X6q, {
								variant: "heading-md/semibold",
								color: "header-primary",
								lineClamp: 1,
								children: null != (t = null == n ? void 0 : n.displayName) ? t : j
							}), (0, l.jsx)(r.Text, {
								variant: "text-sm/normal",
								color: "text-secondary",
								lineClamp: 1,
								children: C
							})]
						}), null != n ? (0, l.jsx)(r.Text, {
							className: m.cmdAppName,
							variant: "text-sm/normal",
							color: "text-secondary",
							children: j
						}) : null, (0, l.jsx)("div", {
							className: m.underline
						})]
					})
				})
			}
		},
		79984: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var l = n(255367),
				i = n(73800),
				r = n(120356),
				a = n.n(r),
				o = n(442837),
				s = n(481060),
				c = n(607070),
				u = n(847800);

			function d() {
				let e = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
					{
						styleLarge: t,
						styleSmall: n
					} = i.useMemo(() => ({
						styleLarge: {
							width: "".concat(10 + 50 * Math.random(), "%")
						},
						styleSmall: {
							width: "".concat(30 + 60 * Math.random(), "%")
						}
					}), []);
				return (0, l.jsxs)("div", {
					className: a()(u.container, {
						[u.noAnimation]: e
					}),
					children: [(0, l.jsx)("div", {
						className: u.iconPlaceholder
					}), (0, l.jsxs)("div", {
						className: u.textContainer,
						children: [(0, l.jsx)("div", {
							className: u.textPlaceholder,
							style: t,
							children: (0, l.jsx)(s.X6q, {
								className: u.hidden,
								variant: "heading-md/semibold",
								color: "header-primary",
								lineClamp: 1,
								children: "_"
							})
						}), (0, l.jsx)("div", {
							className: u.textPlaceholder,
							style: n,
							children: (0, l.jsx)(s.Text, {
								className: u.hidden,
								variant: "text-sm/normal",
								color: "text-secondary",
								lineClamp: 1,
								children: "_"
							})
						})]
					}), (0, l.jsx)("div", {
						className: u.underline
					})]
				})
			}
		},
		28147: function(e, t, n) {
			n.d(t, {
				Z: () => w
			}), n(388685);
			var l = n(255367),
				i = n(73800),
				r = n(392711),
				a = n.n(r),
				o = n(209173),
				s = n(110924),
				c = n(367907),
				u = n(555573),
				d = n(895924),
				p = n(583027),
				m = n(177653),
				f = n(585483),
				h = n(499254),
				v = n(541099),
				y = n(827498),
				x = n(392370),
				b = n(98880),
				g = n(804307),
				j = n(520315),
				N = n(532309),
				C = n(561160),
				E = n(41558),
				P = n(106771),
				O = n(79984),
				A = n(314734),
				I = n(981631),
				_ = n(388032),
				S = n(946908);

			function T(e) {
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
			}
			let L = Array(6).fill(0).map((e, t) => t),
				R = [, , , ].fill(0).map((e, t) => t),
				Z = [, , , , ].fill(0).map((e, t) => t);

			function w(e) {
				return (0, l.jsx)(k, T({}, e))
			}

			function k(e) {
				let {
					context: t,
					query: n,
					entrypoint: r,
					isScrollCloseToBottom: s
				} = e, c = r === y._b.TEXT, u = r === y._b.TEXT, {
					loading: d,
					isEmptyState: p,
					commandResults: f,
					hasCommandResults: h,
					applicationResults: v
				} = (0, x.pe)({
					context: t,
					query: n,
					searchesActivities: !0,
					searchesCommands: c,
					searchesBots: u
				}), {
					fetchState: b,
					applicationResults: g,
					fetchNextPage: j
				} = (0, x.Q2)({
					query: n,
					context: t,
					fetches: !0,
					pageLimit: 5,
					entrypoint: r
				});
				i.useEffect(() => {
					s && b === m.M.FETCHED && j()
				}, [j, b, s]);
				let N = null == b || b === m.M.FETCHING,
					E = i.useMemo(() => {
						let e = v.map(e => ({
								application: e,
								installOnDemand: !0
							})),
							t = new Set(v.map(e => {
								let {
									id: t
								} = e;
								return t
							}));
						return [...e, ...a().compact(g.map(e => e.type === o.s.CONNECTION || t.has(e.data.id) ? null : {
							application: e.data,
							installOnDemand: !0
						}))]
					}, [g, v]),
					P = E.length > 0,
					O = p && !P && !N;
				return d ? (0, l.jsx)(V, {}) : O ? (0, l.jsx)(C.A, {
					type: y.LG.SEARCH_EMPTY,
					searchQuery: n,
					textContent: r === y._b.TEXT ? _.intl.string(_.t.LSNOYW) : _.intl.string(_.t.Clu7Qk)
				}) : (0, l.jsxs)("div", {
					children: [h && (0, l.jsx)(M, {
						context: t,
						commandResults: f,
						query: n
					}), (P || N) && (0, l.jsx)(D, {
						context: t,
						applicationResults: E,
						includePlaceholder: N,
						query: n,
						searchesBots: u
					})]
				})
			}

			function M(e) {
				var t, n;
				let {
					context: r,
					commandResults: a,
					query: o
				} = e, m = a.length > 4, x = i.useMemo(() => m ? a.slice(0, 4) : a, [a, m]), [b, g] = i.useState(!1), N = null != (t = (0, s.Z)(b)) ? t : b, C = i.useCallback(() => g(e => !e), []), O = (null != (n = (0, s.Z)(o)) ? n : o)[0] !== o[0], T = b && !O;
				i.useLayoutEffect(() => g(!1), [O]);
				let {
					ref: L,
					isTransitioning: R,
					onTransitionEnd: Z
				} = (0, j.Z)({
					key: o,
					isExpanded: T,
					durationMs: 200,
					maxAnimationHeight: A.K7
				});
				i.useEffect(() => {
					!N && b && (0, c.yw)(I.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
						section_name: y.L3.SEARCH,
						source: v.Z.entrypoint(),
						num: a.length
					})
				}, [a.length, N, b]);
				let w = T || R,
					k = T ? E.Z.buttonTypes.VIEW_LESS : E.Z.buttonTypes.VIEW_MORE,
					M = w ? a : x;
				return (0, l.jsxs)("div", {
					children: [(0, l.jsx)(E.Z, {
						title: _.intl.string(_.t["0hKkS0"]),
						buttonType: k,
						onClickViewButton: m ? C : void 0
					}), (0, l.jsx)("div", {
						className: S.sectionContentContainer,
						ref: L,
						onTransitionEnd: Z,
						children: M.map((e, t) => {
							let {
								command: n,
								application: i,
								section: a
							} = e;
							return (0, l.jsx)(P.Z, {
								command: n,
								application: i,
								query: o,
								searchResultsPosition: t,
								onClick: () => {
									let e = v.Z.entrypoint();
									h.yT(y.ti.DISMISSED), (0, p.Mo)({
										command: n,
										location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
										sectionName: y.L3.SEARCH
									}), "channel" === r.type && (u.Po({
										channelId: r.channel.id,
										command: n,
										section: a,
										location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
										triggerSection: void 0,
										queryLength: o.length,
										sectionName: y.L3.SEARCH,
										query: o,
										searchResultsPosition: t,
										source: e
									}), f.S.dispatch(I.CkL.FOCUS_CHANNEL_TEXT_AREA, {
										channelId: r.channel.id
									}))
								}
							}, n.id)
						})
					})]
				})
			}

			function U(e) {
				var t, n;
				let {
					trackSearchResultsItemImpressionRef: i
				} = (0, N.Z)({
					applicationId: e.application.id,
					query: e.query,
					searchResultsPosition: e.resultsPosition
				});
				return (0, l.jsx)("div", {
					className: S.searchOpenAppDetailAppCard,
					ref: e => {
						i.current = e
					},
					children: (0, l.jsx)(b.kA, (t = T({}, e), n = n = {
						tracksImpression: !1,
						enableVideoBanner: !0
					}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
						var n = Object.keys(e);
						if (Object.getOwnPropertySymbols) {
							var l = Object.getOwnPropertySymbols(e);
							n.push.apply(n, l)
						}
						return n
					})(Object(n)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					}), t))
				})
			}

			function D(e) {
				let {
					context: t,
					applicationResults: n,
					includePlaceholder: i,
					query: r,
					searchesBots: a
				} = e;
				return a ? (0, l.jsxs)("div", {
					children: [(0, l.jsx)(E.Z, {
						title: _.intl.string(_.t.PHjkRE)
					}), (0, l.jsxs)("div", {
						className: S.sectionContentContainer,
						children: [n.map((e, n) => {
							let {
								application: i,
								installOnDemand: a
							} = e;
							return (0, l.jsx)(H, {
								context: t,
								application: i,
								location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
								sectionName: y.L3.SEARCH,
								resultsPosition: n,
								installOnDemand: a,
								query: r
							}, i.id)
						}), i && R.map(e => (0, l.jsx)(O.Z, {}, e))]
					})]
				}) : (0, l.jsxs)("div", {
					children: [(0, l.jsx)(E.Z, {
						title: _.intl.string(_.t.shUONj)
					}), (0, l.jsxs)("div", {
						className: S.sectionActivitiesContentContainer,
						children: [n.map((e, n) => {
							let {
								application: i,
								installOnDemand: a
							} = e;
							return (0, l.jsx)(U, {
								context: t,
								application: i,
								look: b.U4.LARGE_BANNER,
								location: d.Vh.APP_LAUNCHER_HOME_SEARCH,
								sectionName: y.L3.SEARCH,
								resultsPosition: n,
								installOnDemand: a,
								query: r
							}, i.id)
						}), i && Z.map(e => (0, l.jsx)(g.Z, {
							look: b.U4.LARGE_BANNER
						}, e))]
					})]
				})
			}

			function H(e) {
				let {
					onClickAppCard: t
				} = (0, b.cG)(e);
				return (0, l.jsx)(P.Z, {
					application: e.application,
					onClick: t,
					query: e.query,
					searchResultsPosition: e.resultsPosition
				})
			}

			function V() {
				return (0, l.jsxs)("div", {
					children: [(0, l.jsx)(E.Z, {
						title: _.intl.string(_.t["0hKkS0"])
					}), (0, l.jsx)("div", {
						className: S.sectionContentContainer,
						children: L.map(e => (0, l.jsx)(O.Z, {}, e))
					}), (0, l.jsx)(E.Z, {
						title: _.intl.string(_.t.PHjkRE)
					}), (0, l.jsx)("div", {
						className: S.sectionContentContainer,
						children: R.map(e => (0, l.jsx)(O.Z, {}, e))
					})]
				})
			}
		},
		684256: function(e, t, n) {
			n.d(t, {
				Z: () => h
			});
			var l = n(255367),
				i = n(73800),
				r = n(120356),
				a = n.n(r),
				o = n(481060),
				s = n(895924),
				c = n(827498),
				u = n(106066),
				d = n(98880),
				p = n(772606),
				m = n(388032),
				f = n(655420);

			function h(e) {
				let {
					context: t,
					entrypoint: n,
					title: r,
					look: h,
					items: v,
					sectionName: y,
					sectionOverallPosition: x
				} = e, b = (0, u.s)(), g = i.useMemo(() => n === c._b.TEXT ? d.kA : d.qR, [n]);
				return (0, l.jsxs)("section", {
					className: f.container,
					"aria-label": m.intl.formatToPlainString(m.t.iobNIC, {
						sectionTitle: r
					}),
					children: [(0, l.jsxs)("div", {
						className: f.header,
						children: [(0, l.jsx)(p.Z, {
							className: f.backButton
						}), (0, l.jsx)(o.X6q, {
							variant: "heading-md/medium",
							color: "header-primary",
							children: r
						})]
					}), (0, l.jsx)(o.Ttm, {
						children: (0, l.jsx)("div", {
							className: a()({
								[f.appGrid]: h !== d.U4.ROW,
								[f.rows]: h === d.U4.ROW
							}),
							children: v.map((e, n) => {
								let {
									application: i,
									installOnDemand: r,
									showsPromoted: a
								} = e;
								return (0, l.jsx)(g, {
									context: t,
									application: i,
									look: h,
									sectionName: y,
									resultsPosition: n,
									location: s.Vh.APP_LAUNCHER_LIST_VIEW_ALL,
									installOnDemand: r,
									isOneClickCTA: b,
									sectionOverallPosition: x,
									showsPromoted: a
								}, i.id)
							})
						})
					})]
				})
			}
		},
		568100: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			let l = (0, n(818083).B)({
				kind: "user",
				id: "2025-01_allow_nonstaff_to_preview_app_collections",
				label: "Allow Non-Staff to Preview App Collections",
				defaultConfig: {
					enabled: !1
				},
				treatments: [{
					id: 1,
					label: 'In App Launcher in Text, enable seeing only "NON_STAFF_PREVIEW" app collections',
					config: {
						enabled: !0
					}
				}]
			})
		},
		631827: function(e, t, n) {
			function l(e, t) {
				var n, l, i, r, a, o, s;
				let c, u = null != (n = t.limit) ? n : 1 / 0,
					d = (o = e, s = null != (l = t.filterPredicates) ? l : [], o.filter(e => s.every(t => t(e))));
				return (function(e, t, n) {
					let l = [];
					for (let i of e) {
						let e = function(e, t) {
							return e.sort((e, n) => {
								for (let l of t) {
									let t = l(e, n);
									if (0 !== t) return t
								}
								return 0
							})
						}(i, t);
						if (l.push(...e), l.length >= n) break
					}
					return l
				})(null != t.bucketPredicates && t.bucketPredicates.length > 0 ? u >= d.length ? function(e, t) {
					let n = Array(t.length).fill(null).map(() => []);
					for (let l of e)
						for (let e = 0; e < t.length; e++)
							if (t[e](l)) {
								n[e].push(l);
								break
							} return n
				}(d, null != (i = t.bucketPredicates) ? i : []) : function(e, t, n) {
					let l = [],
						i = e;
					for (let e of t) {
						let t = [],
							r = [];
						for (let n of i) e(n) ? r.push(n) : t.push(n);
						if (l.push(r), i = t, l.reduce((e, t) => t.length + e, 0) >= n) break
					}
					return l
				}(d, null != (r = t.bucketPredicates) ? r : [], u) : [d], null != (a = t.sortComparers) ? a : [], u).slice(0, u)
			}
			n.d(t, {
				N: () => l
			}), n(539854), n(388685), n(642613)
		},
		880448: function(e, t, n) {
			n.d(t, {
				Z: () => r
			});
			var l = n(255367);
			n(73800);
			var i = n(325767);

			function r(e) {
				var t, n, {
						width: r = 24,
						height: a = 24,
						color: o = "currentColor",
						foreground: s
					} = e,
					c = function(e, t) {
						if (null == e) return {};
						var n, l, i = function(e, t) {
							if (null == e) return {};
							var n, l, i = {},
								r = Object.keys(e);
							for (l = 0; l < r.length; l++) n = r[l], t.indexOf(n) >= 0 || (i[n] = e[n]);
							return i
						}(e, t);
						if (Object.getOwnPropertySymbols) {
							var r = Object.getOwnPropertySymbols(e);
							for (l = 0; l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
						}
						return i
					}(e, ["width", "height", "color", "foreground"]);
				return (0, l.jsx)("svg", (t = function(e) {
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
				}({}, (0, i.Z)(c)), n = n = {
					width: r,
					height: a,
					viewBox: "0 0 24 24",
					fill: "none",
					children: (0, l.jsx)("path", {
						d: "M7.39344 5.33333L5.33333 7.39344V16.6065L7.39348 18.6667H16.6065L18.6667 16.6065V7.39344L16.6065 5.33333H7.39344ZM11.0485 15.6879H9.20459C9.20459 14.1627 7.96392 12.922 6.43868 12.922V11.078C7.96392 11.078 9.20459 9.83735 9.20459 8.31211H11.0485C11.0485 9.82534 10.3057 11.159 9.17607 12C10.3057 12.8411 11.0485 14.1747 11.0485 15.6879ZM17.5556 12.922C16.0304 12.922 14.7896 14.1627 14.7896 15.6879H12.9457C12.9457 14.1747 13.6885 12.8411 14.8181 12C13.6885 11.159 12.9457 9.82534 12.9457 8.31211H14.7896C14.7896 9.83735 16.0304 11.078 17.5556 11.078V12.922Z",
						fill: o,
						className: s
					})
				}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var l = Object.getOwnPropertySymbols(e);
						n.push.apply(n, l)
					}
					return n
				})(Object(n)).forEach(function(e) {
					Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
				}), t))
			}
		},
		754738: function(e, t, n) {
			n.d(t, {
				b: () => i
			});
			var l, i = ((l = {})[l.APPENDS_REMAINING_ACTIVITIES = 1] = "APPENDS_REMAINING_ACTIVITIES", l[l.DEFAULT = 0] = "DEFAULT", l)
		},
		727241: function(e, t, n) {
			n.d(t, {
				q: () => i
			});
			var l, i = ((l = {})[l.PROMOTED = 1] = "PROMOTED", l[l.SKIPS_APPLICATION_DISCOVERABILITY_VALIDATION = 2] = "SKIPS_APPLICATION_DISCOVERABILITY_VALIDATION", l[l.DEFAULT = 0] = "DEFAULT", l)
		},
		873199: function(e, t, n) {
			n.d(t, {
				o: () => i
			}), n(388685);
			var l, i = ((l = {})[l.LIST = 1] = "LIST", l[l.LIST_WITH_IMAGE = 2] = "LIST_WITH_IMAGE", l[l.GALLERY = 3] = "GALLERY", l[l.EXPANDABLE_LIST = 4] = "EXPANDABLE_LIST", l[l.BANNER_CARDS = 5] = "BANNER_CARDS", l[l.SMALL_BANNER_CARDS = 6] = "SMALL_BANNER_CARDS", l[l.BANNER_IMAGE = 7] = "BANNER_IMAGE", l)
		},
		209173: function(e, t, n) {
			n.d(t, {
				s: () => i
			});
			var l, i = ((l = {})[l.APPLICATION = 1] = "APPLICATION", l[l.ACTIVITY_APPLICATION = 2] = "ACTIVITY_APPLICATION", l[l.CONNECTION = 3] = "CONNECTION", l)
		}
	}
]);
//# sourceMappingURL=ca4e3bcee95204f5.js.map