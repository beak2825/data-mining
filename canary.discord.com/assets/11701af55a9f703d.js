"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["93375"], {
		866830: function(e, t, n) {
			n.d(t, {
				U5: () => i,
				qR: () => l
			});
			var r = n(273504);

			function l(e) {
				let t = i();
				return Array.from(e.defaultActionTypes).map(e => t[e])
			}

			function i() {
				return {
					[r.jj.BLOCK_MESSAGE]: {
						type: r.jj.BLOCK_MESSAGE,
						metadata: {
							customMessage: void 0
						}
					},
					[r.jj.FLAG_TO_CHANNEL]: {
						type: r.jj.FLAG_TO_CHANNEL,
						metadata: {
							channelId: void 0
						}
					},
					[r.jj.USER_COMMUNICATION_DISABLED]: {
						type: r.jj.USER_COMMUNICATION_DISABLED,
						metadata: {
							durationSeconds: 60
						}
					},
					[r.jj.QUARANTINE_USER]: {
						type: r.jj.QUARANTINE_USER,
						metadata: {}
					}
				}
			}
		},
		460083: function(e, t, n) {
			n.d(t, {
				d: () => r
			});
			let r = (0, n(818083).B)({
				kind: "guild",
				id: "2022-12_mention_raid_limit",
				label: "Automod Mention Raid Limit",
				defaultConfig: {
					enabled: !1
				},
				treatments: [{
					id: 1,
					label: "Automod Mention Raid Limit",
					config: {
						enabled: !0
					}
				}]
			})
		},
		236413: function(e, t, n) {
			n.d(t, {
				Ar: () => N,
				DO: () => E,
				Fn: () => d,
				Jq: () => O,
				QO: () => A,
				Vb: () => _,
				YN: () => y,
				ZF: () => R,
				ep: () => j,
				km: () => p,
				nC: () => S,
				vo: () => g
			}), n(388685), n(415506);
			var r = n(581364),
				l = n(314897),
				i = n(866830),
				a = n(539573),
				u = n(727072),
				o = n(85960),
				s = n(273504),
				c = n(388032);
			let f = (e, t) => "".concat(e, "-").concat(t, "-new-rule"),
				E = e => (null == e ? void 0 : e.triggerType) === s.fX.KEYWORD,
				g = e => (null == e ? void 0 : e.triggerType) === s.fX.ML_SPAM,
				d = e => (null == e ? void 0 : e.triggerType) === s.fX.DEFAULT_KEYWORD_LIST,
				S = e => (null == e ? void 0 : e.triggerType) === s.fX.MENTION_SPAM,
				O = e => (null == e ? void 0 : e.triggerType) === s.fX.USER_PROFILE;

			function j(e, t) {
				let n = o.I6[t],
					r = (0, o.jp)(t, e),
					a = {
						id: f(e, t),
						name: n.getDefaultRuleName(),
						guildId: e,
						eventType: n.eventType,
						triggerType: t,
						triggerMetadata: r,
						enabled: !0,
						creatorId: l.default.getId(),
						actions: (0, i.qR)(n),
						position: 0,
						exemptChannels: new Set,
						exemptRoles: new Set
					};
				if (_(a)) throw Error(c.intl.string(c.t["A/nX8P"]));
				let s = (0, u.mY)(e, t);
				return s > 0 && (a.name += " ".concat(s + 1)), a
			}

			function p(e, t) {
				if (e.length > t) throw Error(c.intl.formatToPlainString(c.t.mee4qa, {
					limit: t
				}));
				e.forEach(e => {
					if (e.length > s.hu || e.length < s.Vk) throw new a.V6(c.intl.formatToPlainString(c.t.rbRvGR, {
						keyword: e,
						max: s.hu,
						min: s.Vk
					}))
				})
			}

			function A(e) {
				if (E(e)) {
					var t, n;
					let r = null != (t = e.triggerMetadata.keywordFilter) ? t : [],
						l = null != (n = e.triggerMetadata.regexPatterns) ? n : [];
					if (0 === r.length && 0 === l.length) throw Error(c.intl.string(c.t.kz2Av7));
					if (p(r, s.RH), l.length > s.VW) throw Error(c.intl.formatToPlainString(c.t.tDjhFx, {
						limit: s.VW
					}));
					l.forEach(e => {
						if (e.length > s.aj || e.length < s.uE) throw new a.uS(c.intl.formatToPlainString(c.t["WR0m9/"], {
							regex: e,
							max: s.aj,
							min: s.uE
						}))
					})
				}
				if (0 === e.actions.length) throw Error(c.intl.string(c.t["t+gj5e"]))
			}

			function _(e) {
				var t;
				return (0, r.BH)(null != (t = null == e ? void 0 : e.id) ? t : "INVALID_SNOWFLAKE")
			}

			function y(e) {
				switch (e) {
					case s.q4.MESSAGE_SEND:
						return c.intl.string(c.t.NlQW4O);
					case s.q4.GUILD_MEMBER_JOIN_OR_UPDATE:
						return c.intl.string(c.t["Q+68IS"]);
					default:
						return c.intl.string(c.t.SP9BBw)
				}
			}

			function R(e) {
				switch (e) {
					case s.jj.BLOCK_MESSAGE:
						return c.intl.string(c.t.d1ab8v);
					case s.jj.FLAG_TO_CHANNEL:
						return c.intl.string(c.t["Y+Vmvb"]);
					case s.jj.USER_COMMUNICATION_DISABLED:
						return c.intl.string(c.t["6WPxY2"]);
					case s.jj.QUARANTINE_USER:
						return c.intl.string(c.t.NPO8eX);
					default:
						return c.intl.string(c.t.SP9BBw)
				}
			}

			function N(e) {
				switch (e) {
					case s.fX.KEYWORD:
						return c.intl.string(c.t.ffR2cH);
					case s.fX.ML_SPAM:
						return c.intl.string(c.t["puF/Oj"]);
					case s.fX.DEFAULT_KEYWORD_LIST:
						return c.intl.string(c.t.LnGhZm);
					case s.fX.MENTION_SPAM:
						return c.intl.string(c.t.pX7i6u);
					case s.fX.USER_PROFILE:
						return c.intl.string(c.t.q1L2v7);
					default:
						return c.intl.string(c.t.SP9BBw)
				}
			}
		},
		727072: function(e, t, n) {
			n.d(t, {
				I2: () => p,
				RD: () => A,
				mY: () => j,
				pH: () => _
			}), n(539854), n(388685);
			var r = n(73800),
				l = n(94171),
				i = n(362383),
				a = n(731965),
				u = n(881052),
				o = n(36459),
				s = n(866894),
				c = n(273504),
				f = n(981631);

			function E(e) {
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

			function g(e, t) {
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
			let d = {},
				S = e => {
					let t = {
						[c.fX.KEYWORD]: [],
						[c.fX.ML_SPAM]: [],
						[c.fX.DEFAULT_KEYWORD_LIST]: [],
						[c.fX.MENTION_SPAM]: [],
						[c.fX.USER_PROFILE]: [],
						[c.fX.SERVER_POLICY]: []
					};
					return e.forEach(e => {
						var n;
						let {
							triggerType: r
						} = e;
						null == (n = t[r]) || n.push(e)
					}), t
				},
				O = (0, i.F)((e, t) => ({
					rules: {},
					fetching: !1,
					error: null,
					updateRule: n => {
						var r, l;
						let {
							guildId: i,
							id: u,
							triggerType: o
						} = n, {
							rules: c
						} = t(), f = null != (r = c[i]) ? r : {}, d = null != (l = f[o]) ? l : [], S = d.some(e => e.id === u), O = d.filter(e => !(0, s.U)(e.id) || e.triggerType !== o), j = S ? O.map(e => e.id === u ? n : e) : [...O, n];
						(0, a.j)(() => {
							e({
								rules: g(E({}, c), {
									[i]: g(E({}, f), {
										[o]: j
									})
								}),
								error: null
							})
						})
					},
					removeRule: (n, r) => {
						let {
							rules: l
						} = t(), i = l[r], u = Object.keys(i).reduce((e, t) => {
							var r;
							let l = Number(t),
								a = null != (r = i[l]) ? r : [];
							return e[l] = a.filter(e => e.id !== n), e
						}, {});
						(0, a.j)(() => {
							e({
								rules: g(E({}, l), {
									[r]: u
								}),
								error: null
							})
						})
					},
					syncRules: async n => {
						if (function(e) {
								var t;
								let n = Date.now();
								return n - (null != (t = d[e]) ? t : 0) > 2e4
							}(n)) {
							d[n] = Date.now();
							try {
								let r = await (0, o.$Y)(n),
									l = S(r),
									i = t().rules;
								(0, a.j)(() => {
									e({
										rules: g(E({}, i), {
											[n]: l
										}),
										error: null
									})
								})
							} catch (n) {
								let t = new u.Hx(n);
								(0, a.j)(() => {
									e({
										error: t
									})
								})
							}
						}
					}
				})),
				j = (e, t) => {
					var n, r;
					return (null != (r = null == (n = O.getState().rules[e]) ? void 0 : n[t]) ? r : []).length
				};

			function p(e) {
				let [t, n] = r.useState(!1), [i, a] = O(e => [e.syncRules, e.fetching], l.X);
				return [t, r.useCallback(async () => {
					if (!a && null != e) try {
						n(!0), await i(e)
					} finally {
						n(!1)
					}
				}, [e, a, i])]
			}

			function A(e) {
				let [t, n] = p(e);
				return r.useEffect(() => {
					(async () => {
						await n()
					})()
				}, [e, n]), [t, n]
			}

			function _(e) {
				return O(t => {
					var n;
					return {
						rulesByTriggerType: null != (n = t.rules[null != e ? e : f.lds]) ? n : {},
						updateRule: t.updateRule,
						removeRule: t.removeRule
					}
				}, l.X)
			}
		},
		85960: function(e, t, n) {
			n.d(t, {
				I6: () => f,
				V9: () => S,
				Z6: () => j,
				jp: () => p,
				r5: () => d,
				vT: () => c,
				vh: () => E,
				yU: () => O
			}), n(388685), n(997841), n(415506);
			var r, l, i = n(73800),
				a = n(467319),
				u = n(676317),
				o = n(273504),
				s = n(388032),
				c = ((r = {}).NEW = "new", r.RECOMMENDED = "recommended", r.BETA = "beta", r.ALPHA = "alpha", r);
			let f = {
				[o.fX.SPAM_LINK]: {
					getDefaultRuleName: () => s.intl.string(s.t.ffR2cH),
					type: o.fX.SPAM_LINK,
					eventType: o.q4.MESSAGE_SEND,
					perGuildMaxCount: 0,
					availableActionTypes: new Set,
					flags: new Set,
					defaultActionTypes: new Set
				},
				[o.fX.KEYWORD]: {
					getDefaultRuleName: () => s.intl.string(s.t.ffR2cH),
					type: o.fX.KEYWORD,
					eventType: o.q4.MESSAGE_SEND,
					perGuildMaxCount: 6,
					availableActionTypes: new Set([o.jj.BLOCK_MESSAGE, o.jj.FLAG_TO_CHANNEL, o.jj.USER_COMMUNICATION_DISABLED]),
					flags: new Set,
					defaultActionTypes: new Set([o.jj.BLOCK_MESSAGE])
				},
				[o.fX.ML_SPAM]: {
					getDefaultRuleName: () => s.intl.string(s.t["puF/Oj"]),
					type: o.fX.ML_SPAM,
					eventType: o.q4.MESSAGE_SEND,
					perGuildMaxCount: 1,
					availableActionTypes: new Set([o.jj.BLOCK_MESSAGE, o.jj.FLAG_TO_CHANNEL]),
					flags: new Set([]),
					defaultActionTypes: new Set([o.jj.BLOCK_MESSAGE])
				},
				[o.fX.DEFAULT_KEYWORD_LIST]: {
					getDefaultRuleName: () => s.intl.string(s.t.LnGhZm),
					type: o.fX.DEFAULT_KEYWORD_LIST,
					eventType: o.q4.MESSAGE_SEND,
					perGuildMaxCount: 1,
					availableActionTypes: new Set([o.jj.BLOCK_MESSAGE, o.jj.FLAG_TO_CHANNEL]),
					flags: new Set([]),
					defaultActionTypes: new Set([o.jj.BLOCK_MESSAGE])
				},
				[o.fX.MENTION_SPAM]: {
					getDefaultRuleName: () => s.intl.string(s.t.pX7i6u),
					type: o.fX.MENTION_SPAM,
					eventType: o.q4.MESSAGE_SEND,
					perGuildMaxCount: 1,
					availableActionTypes: new Set([o.jj.BLOCK_MESSAGE, o.jj.FLAG_TO_CHANNEL, o.jj.USER_COMMUNICATION_DISABLED]),
					flags: new Set([]),
					defaultActionTypes: new Set([o.jj.BLOCK_MESSAGE])
				},
				[o.fX.USER_PROFILE]: {
					getDefaultRuleName: () => s.intl.string(s.t.q1L2v7),
					type: o.fX.USER_PROFILE,
					eventType: o.q4.GUILD_MEMBER_JOIN_OR_UPDATE,
					perGuildMaxCount: 1,
					availableActionTypes: new Set([o.jj.QUARANTINE_USER, o.jj.FLAG_TO_CHANNEL]),
					flags: new Set([]),
					defaultActionTypes: new Set([o.jj.QUARANTINE_USER])
				},
				[o.fX.SERVER_POLICY]: {
					getDefaultRuleName: () => s.intl.string(s.t.ZQr92N),
					type: o.fX.SERVER_POLICY,
					eventType: o.q4.MESSAGE_SEND,
					perGuildMaxCount: 1,
					availableActionTypes: new Set([o.jj.FLAG_TO_CHANNEL]),
					flags: new Set(["alpha"]),
					defaultActionTypes: new Set
				}
			};
			var E = ((l = {}).MEMBERS = "members", l.CONTENT = "content", l);
			let g = {
					members: [f[o.fX.USER_PROFILE]],
					content: [f[o.fX.SERVER_POLICY], f[o.fX.MENTION_SPAM], f[o.fX.ML_SPAM], f[o.fX.DEFAULT_KEYWORD_LIST], f[o.fX.KEYWORD]]
				},
				d = (e, t) => f[e].flags.has(t);

			function S(e) {
				return Array.from(f[e].availableActionTypes)
			}

			function O(e, t) {
				let {
					id: n,
					eventType: r,
					triggerType: l,
					actions: i
				} = e, a = f[l];
				if (t.filter(e => n !== e.id && e.triggerType === l).length > a.perGuildMaxCount) throw Error("You have exceeded the maximum number of rules of type ".concat(l));
				if (i.some(e => !a.availableActionTypes.has(e.type))) throw Error("You have provided an action that is not available for this trigger type");
				if (r !== a.eventType) throw Error("You have provided an event type that is not available for this trigger type")
			}

			function j(e) {
				let t = (0, u.oA)(e);
				return i.useMemo(() => Object.keys(g).reduce((e, n) => {
					let r = g[n].filter(e => e.type !== o.fX.SERVER_POLICY && (e.type !== o.fX.USER_PROFILE || !!t) && e.perGuildMaxCount > 0).map(e => e.type);
					return e[n] = r, e
				}, {
					members: [],
					content: []
				}), [t])
			}

			function p(e, t) {
				let n = (0, a.H)(t);
				switch (e) {
					case o.fX.DEFAULT_KEYWORD_LIST:
						return {
							allowList: [], presets: []
						};
					case o.fX.USER_PROFILE:
					case o.fX.KEYWORD:
						return {
							keywordFilter: [], regexPatterns: [], allowList: []
						};
					case o.fX.MENTION_SPAM:
						return {
							mentionTotalLimit: o.Ic, mentionRaidProtectionEnabled: n
						};
					case o.fX.ML_SPAM:
					case o.fX.SERVER_POLICY:
					default:
						return
				}
			}
		},
		467319: function(e, t, n) {
			n.d(t, {
				H: () => l,
				a: () => i
			});
			var r = n(460083);

			function l(e) {
				let {
					enabled: t
				} = r.d.getCurrentConfig({
					guildId: e,
					location: "988d4e_3"
				});
				return t
			}

			function i(e) {
				let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
					{
						enabled: n
					} = r.d.useExperiment({
						guildId: e,
						location: "988d4e_4"
					}, {
						autoTrackExposure: t
					});
				return n
			}
		},
		422303: function(e, t, n) {
			n.d(t, {
				Ac: () => a,
				Ze: () => u,
				cb: () => o,
				kU: () => c,
				se: () => s
			}), n(35282), n(704826), n(781311), n(388685), n(642613), n(804061);
			let r = /[\t\n,]/g,
				l = /\s{2,}/g,
				i = /[*"']/g;

			function a(e) {
				return e.split(r).map(e => e.replace(l, " ").trim()).filter(e => e.length > 0)
			}

			function u(e) {
				return Array.from(new Set(e))
			}

			function o(e) {
				return e.sort((e, t) => {
					let n = e.replaceAll(i, ""),
						r = t.replaceAll(i, "");
					return n.localeCompare(r)
				})
			}

			function s(e) {
				return e.join(", ")
			}

			function c(e) {
				return e.includes("\n") || e.includes(",")
			}
		},
		676317: function(e, t, n) {
			n.d(t, {
				Nb: () => s,
				oA: () => f,
				pr: () => c,
				ze: () => o
			});
			var r = n(442837),
				l = n(430824),
				i = n(496675),
				a = n(981631);
			let u = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Z,
					n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Z,
					r = t.getGuild(e);
				return null != r && n.can(a.Plq.MANAGE_GUILD, r)
			};

			function o(e) {
				return null != e && u(e)
			}

			function s(e) {
				return u(e)
			}

			function c(e) {
				return (0, r.e7)([l.Z, i.Z], () => u(e, l.Z, i.Z), [e])
			}

			function f(e) {
				return (0, r.e7)([l.Z], () => {
					let t = l.Z.getGuild(e);
					return (null == t ? void 0 : t.features.has(a.oNc.COMMUNITY)) || !1
				}, [e])
			}
		},
		866894: function(e, t, n) {
			n.d(t, {
				U: () => l
			}), n(388685);
			let r = new Set(["1030554520465440818"]);

			function l(e) {
				return null != e && r.has(e)
			}
		},
		65912: function(e, t, n) {
			n.d(t, {
				V: () => R,
				w: () => y
			});
			var r = n(392711),
				l = n.n(r),
				i = n(94171),
				a = n(362383),
				u = n(731965),
				o = n(881052),
				s = n(823379),
				c = n(539573),
				f = n(236413),
				E = n(85960),
				g = n(36459),
				d = n(422303),
				S = n(866894),
				O = n(981631),
				j = n(388032);

			function p(e) {
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
			let A = Object.freeze({
					editingRule: null,
					hasChanges: !1,
					isLoading: !1,
					errorMessage: null
				}),
				_ = (0, a.F)((e, t) => ({
					editingRule: null,
					hasChanges: !1,
					setEditingRule: n => {
						var r, i;
						let a = t().editingRule,
							o = null != n && null != a && n.id === a.id,
							c = l().cloneDeep(n);
						null != c && (r = p({}, c), i = i = {
							actions: c.actions.filter(s.lm)
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var r = Object.getOwnPropertySymbols(e);
								n.push.apply(n, r)
							}
							return n
						})(Object(i)).forEach(function(e) {
							Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
						}), c = r), (0, u.j)(() => e({
							editingRule: c,
							hasChanges: o,
							errorMessage: null
						}))
					},
					createNewEditingRule: (t, n, r) => {
						let l = p({}, (0, f.ep)(t, n), null != r ? r : {});
						return (0, u.j)(() => e({
							editingRule: l,
							hasChanges: !1
						})), l
					},
					isLoading: !1,
					errorMessage: null,
					cancelEditingRule: () => {
						(0, u.j)(() => e(p({}, A)))
					},
					saveRule: async (t, n) => {
						if (null == t) return (0, u.j)(() => e(p({}, A))), null;
						try {
							var r, l, i;
							(0, f.DO)(t) && (t.triggerMetadata.keywordFilter = (0, d.cb)((0, d.Ze)(null != (r = t.triggerMetadata.keywordFilter) ? r : [])), t.triggerMetadata.allowList = (0, d.cb)((0, d.Ze)(null != (l = t.triggerMetadata.allowList) ? l : []))), (0, f.Fn)(t) && (t.triggerMetadata.allowList = (0, d.cb)((0, d.Ze)(null != (i = t.triggerMetadata.allowList) ? i : []))), (0, E.yU)(t, n), (0, f.QO)(t)
						} catch (t) {
							return t instanceof c.V6 ? (0, u.j)(() => {
								e({
									errorMessage: j.intl.string(j.t["4Dxaur"]),
									isLoading: !1
								})
							}) : t instanceof c.uS ? (0, u.j)(() => {
								e({
									errorMessage: j.intl.string(j.t.hDPEu7),
									isLoading: !1
								})
							}) : (0, u.j)(() => {
								e({
									errorMessage: t.message,
									isLoading: !1
								})
							}), null
						}
						try {
							(0, u.j)(() => {
								e({
									isLoading: !0
								})
							});
							let n = null;
							return n = (0, f.Vb)(t) && !(0, S.U)(t.id) ? await (0, g.Je)(t) : await (0, g.JK)(t), (0, u.j)(() => e(p({}, A))), n
						} catch (n) {
							let t = new o.Hx(n);
							(0, u.j)(() => {
								e({
									isLoading: !1,
									errorMessage: function(e) {
										if (e.code === O.evJ.INVALID_FORM_BODY) {
											var t, n;
											if ((null == (n = e.errors) || null == (t = n.trigger_metadata) ? void 0 : t.regex_patterns) != null) return j.intl.string(j.t.hDPEu7)
										}
										return e.getAnyErrorMessage()
									}(t)
								})
							})
						}
						return null
					},
					saveEditingRule: e => {
						let {
							editingRule: n,
							saveRule: r
						} = t();
						return r(n, e)
					}
				}));

			function y() {
				return _(e => ({
					hasChanges: e.hasChanges,
					editingRule: e.editingRule,
					isLoading: e.isLoading,
					errorMessage: e.errorMessage,
					saveRule: e.saveRule,
					saveEditingRule: e.saveEditingRule,
					cancelEditingRule: e.cancelEditingRule
				}), i.X)
			}

			function R() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = _(e => ({
						hasChanges: e.hasChanges,
						editingRule: e.editingRule,
						setEditingRule: e.setEditingRule,
						createNewEditingRule: e.createNewEditingRule
					}), i.X);
				return null != e && t.setEditingRule(e), t
			}
		},
		556012: function(e, t, n) {
			n.d(t, {
				c: () => j
			});
			var r = n(481060),
				l = n(933557),
				i = n(592125),
				a = n(699516),
				u = n(594174),
				o = n(273504),
				s = n(590433),
				c = n(388032);
			let f = e => e !== o.jj.QUARANTINE_USER,
				E = e => {
					switch (e) {
						case o.jj.BLOCK_MESSAGE:
						case o.jj.FLAG_TO_CHANNEL:
						case o.jj.USER_COMMUNICATION_DISABLED:
						case o.jj.QUARANTINE_USER:
							return !0;
						default:
							return !1
					}
				},
				g = e => {
					switch (e) {
						case o.jj.BLOCK_MESSAGE:
							return c.intl.string(c.t.d1ab8v);
						case o.jj.FLAG_TO_CHANNEL:
							return c.intl.string(c.t["Y+Vmvb"]);
						case o.jj.USER_COMMUNICATION_DISABLED:
							return c.intl.string(c.t.Xz2njI);
						case o.jj.QUARANTINE_USER:
							return c.intl.string(c.t.NPO8eX)
					}
				},
				d = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.fX.KEYWORD;
					switch (e) {
						case o.jj.BLOCK_MESSAGE:
							switch (t) {
								case o.fX.MENTION_SPAM:
									return c.intl.string(c.t["8hdId3"]);
								case o.fX.ML_SPAM:
									return c.intl.string(c.t.tLQYs7);
								default:
									return c.intl.string(c.t.xAAocn)
							}
						case o.jj.FLAG_TO_CHANNEL:
							return c.intl.string(c.t.BHAXfX);
						case o.jj.USER_COMMUNICATION_DISABLED:
							return c.intl.string(c.t["bNK+gI"]);
						case o.jj.QUARANTINE_USER:
							return c.intl.string(c.t["/7nL5e"])
					}
				},
				S = (e, t) => {
					var n, r, f;
					switch (e) {
						case o.jj.QUARANTINE_USER:
						case o.jj.BLOCK_MESSAGE:
							return null;
						case o.jj.FLAG_TO_CHANNEL: {
							let e = null == t || null == (n = t.metadata) ? void 0 : n.channelId;
							if (null == e) return null;
							let r = i.Z.getChannel(e);
							if (null == r) return null;
							let o = (0, l.F6)(r, u.default, a.Z);
							return c.intl.format(c.t.xQXnkJ, {
								channelName: o
							})
						}
						case o.jj.USER_COMMUNICATION_DISABLED: {
							let e = null != (f = null == t || null == (r = t.metadata) ? void 0 : r.durationSeconds) ? f : 0,
								n = (0, s.L9)(e);
							if (null == n) return null;
							return c.intl.format(c.t.AFmbfX, {
								duration: n
							})
						}
					}
				},
				O = e => {
					switch (e) {
						case o.jj.BLOCK_MESSAGE:
							return r.k$p;
						case o.jj.FLAG_TO_CHANNEL:
							return r.VL1;
						case o.jj.USER_COMMUNICATION_DISABLED:
							return r.YlB;
						case o.jj.QUARANTINE_USER:
							return r.ics
					}
				};

			function j(e, t, n) {
				var l, i, a, u;
				return E(e) ? {
					headerText: null != (l = g(e)) ? l : "",
					descriptionText: null != (i = d(e, n)) ? i : "",
					helperText: null != (a = S(e, t)) ? a : null,
					icon: null != (u = O(e)) ? u : r.k$p,
					isEditable: f(e)
				} : null
			}
		},
		572456: function(e, t, n) {
			n.d(t, {
				XN: () => s,
				af: () => c,
				gK: () => o
			});
			var r = n(255367);
			n(73800);
			var l = n(481060);

			function i(e) {
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

			function a(e, t) {
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
				return new Promise(t => {
					(0, l.ZDy)(() => e(() => {
						t(!0)
					}, e => (t(!1), e())))
				})
			}
			let o = e => u(async (t, l) => {
					let {
						default: u
					} = await n.e("44462").then(n.bind(n, 478472));
					return n => (0, r.jsx)(u, a(i({}, n), {
						ruleName: e,
						onConfirm: t,
						onClose: () => l(n.onClose),
						onCancel: () => l(n.onClose)
					}))
				}),
				s = (e, t) => u(async (l, u) => {
					let {
						default: o
					} = await n.e("92575").then(n.bind(n, 601787));
					return n => (0, r.jsx)(o, a(i({}, n), {
						ruleName: e,
						keyword: t,
						onConfirm: l,
						onClose: () => u(n.onClose),
						onCancel: () => u(n.onClose)
					}))
				}),
				c = e => t => u(async (l, u) => {
					let {
						default: o
					} = await n.e("83613").then(n.bind(n, 449675)), s = () => {
						t(), l()
					};
					return t => (0, r.jsx)(o, a(i({
						ruleName: e
					}, t), {
						onConfirm: s,
						onClose: () => u(t.onClose),
						onCancel: () => u(t.onClose)
					}))
				})
		}
	}
]);
//# sourceMappingURL=11701af55a9f703d.js.map