"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["29709"], {
		388380: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			var i = n(544891),
				r = n(570140),
				l = n(981631);
			let s = {
				async fetch() {
					try {
						let e = await i.tn.get({
							url: l.ANM.FRIEND_SUGGESTIONS,
							rejectWithError: !0
						});
						r.Z.dispatch({
							type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS",
							suggestions: e.body
						})
					} catch (e) {
						r.Z.dispatch({
							type: "LOAD_FRIEND_SUGGESTIONS_FAILURE"
						})
					}
				},
				ignore(e) {
					i.tn.del({
						url: l.ANM.FRIEND_SUGGESTION(e),
						rejectWithError: !0
					})
				}
			}
		},
		5254: function(e, t, n) {
			n.d(t, {
				Z: () => E
			}), n(388685);
			var i, r = n(392711),
				l = n.n(r),
				s = n(442837),
				a = n(570140),
				o = n(598077),
				c = n(594174),
				u = n(388380),
				d = n(72937);

			function p(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			let f = {},
				g = 0,
				N = !1,
				O = !1;

			function h(e) {
				var t;
				let n = null != e.contact_names && e.contact_names.length >= 2 ? e.contact_names.slice(0, 2) : [];
				return {
					key: e.suggested_user.id,
					name: null == (t = l().first(e.reasons)) ? void 0 : t.name,
					user: new o.Z(e.suggested_user),
					mutualFriendsCount: e.mutual_friends_count,
					contactNames: n
				}
			}
			class m extends(i = s.ZP.Store) {
				initialize() {
					this.waitFor(c.default)
				}
				getSuggestionCount() {
					return g
				}
				getSuggestions() {
					return Object.entries(f).map(e => {
						let [t, n] = e;
						return n
					})
				}
				getSuggestion(e) {
					return f[e]
				}
			}
			p(m, "displayName", "FriendSuggestionStore");
			let E = new m(a.Z, {
				CONNECTION_OPEN: function(e) {
					f = {}, (g = e.friendSuggestionCount) > 0 ? (O = !0, !N && O && (N = !0, O = !1, u.Z.fetch())) : (0, d.Z)()
				},
				FRIEND_SUGGESTION_CREATE: function(e) {
					var t, n;
					let i = h(e.suggestion);
					if (null != f[i.key]) return !1;
					g++, t = function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = null != arguments[t] ? arguments[t] : {},
								i = Object.keys(n);
							"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
								return Object.getOwnPropertyDescriptor(n, e).enumerable
							}))), i.forEach(function(t) {
								p(e, t, n[t])
							})
						}
						return e
					}({}, f), n = n = {
						[i.key]: i
					}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
						var n = Object.keys(e);
						if (Object.getOwnPropertySymbols) {
							var i = Object.getOwnPropertySymbols(e);
							n.push.apply(n, i)
						}
						return n
					})(Object(n)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					}), f = t
				},
				FRIEND_SUGGESTION_DELETE: function(e) {
					g = Math.max(0, --g), delete f[e.suggestedUserId]
				},
				LOAD_FRIEND_SUGGESTIONS_SUCCESS: function(e) {
					var t;
					N = !1, t = e.suggestions, f = l().chain(t).map(e => h(e)).keyBy(e => e.key).value(), g = l().keys(f).length
				},
				LOAD_FRIEND_SUGGESTIONS_FAILURE: function() {
					N = !1, f = {}
				}
			})
		},
		72937: function(e, t, n) {
			function i() {
				arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
			}
			n.d(t, {
				Z: () => i
			}), n(570140), n(594174)
		},
		167762: function(e, t, n) {
			n.d(t, {
				Or: () => en,
				r1: () => et,
				sG: () => B
			}), n(388685), n(539854), n(642613);
			var i, r = n(255367),
				l = n(73800),
				s = n(392711),
				a = n(91192),
				o = n(442837),
				c = n(481060),
				u = n(278323),
				d = n(493683),
				p = n(239091),
				f = n(194359),
				g = n(434650),
				N = n(549879),
				O = n(724757),
				h = n(620662),
				m = n(420660),
				E = n(326255),
				S = n(956221),
				y = n(771173),
				I = n(297781),
				b = n(82295),
				_ = n(554300),
				v = n(558602),
				j = n(567409),
				C = n(373662),
				P = n(850020),
				T = n(886118),
				Z = n(301801),
				A = n(752048),
				w = n(518950),
				G = n(670188),
				k = n(199902),
				R = n(158776),
				U = n(699516),
				D = n(885110),
				x = n(594174),
				F = n(979651),
				M = n(823379),
				L = n(151459),
				q = n(981631),
				V = n(388032),
				Q = n(288779);

			function z(e) {
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
			}

			function W(e, t) {
				return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var i = Object.getOwnPropertySymbols(e);
						n.push.apply(n, i)
					}
					return n
				})(Object(t)).forEach(function(n) {
					Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
				}), e
			}

			function Y(e, t) {
				if (null == e) return {};
				var n, i, r = function(e, t) {
					if (null == e) return {};
					var n, i, r = {},
						l = Object.keys(e);
					for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
					return r
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var l = Object.getOwnPropertySymbols(e);
					for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
				}
				return r
			}
			let H = c.EFr.SIZE_32,
				J = {
					FRIEND_REQUESTS: 0,
					SAME_ACTIVITY: 1,
					ACTIVITIES: 2,
					SUGGESTIONS: 3,
					ONLINE: 4,
					OFFLINE: 5
				},
				K = [I.OV, I.wO, I.f, I.v1, I.pQ];
			var B = ((i = {}).USER_CONTEXT_MENU = "user_context_menu", i.OPEN_DIRECT_MESSAGE = "open_direct_message", i.SEND_FRIEND_REQUEST = "send_friend_request", i.SEND_ACTIVITY_INVITE = "send_activity_invite", i.ASK_TO_JOIN = "ask_to_join", i.DECLINE_FRIEND_REQUEST = "decline_friend_request", i.ACCEPT_FRIEND_REQUEST = "accept_friend_request", i.CANCEL_FRIEND_REQUEST = "cancel_friend_request", i.OPEN_FRIEND_MODAL = "open_friend_modal", i.OPEN_SETTINGS_MODAL = "open_settings_modal", i.SEARCH_FRIENDS = "search_friends", i);
			let X = l.memo(e => {
				let {
					user: t,
					activities: i = [],
					gameProfileEntry: s,
					index: O,
					closeParentPopout: b,
					isSuggestion: j,
					relationshipType: T,
					appContext: Z,
					nickname: A,
					onAction: U,
					onFriendVisible: x
				} = e, F = t.id, {
					avatarDecorationSrc: M,
					avatarSrc: L,
					eventHandlers: Y
				} = (0, w.Z)({
					userId: F,
					size: H,
					animateOnHover: !0,
					guildId: null
				}), J = (0, a.JA)("".concat(O)), [B, X] = l.useState(!1), [$, ee] = l.useState({}), et = i.filter(e => e.type === q.IIU.PLAYING && (0, h.Z)(e, q.xjy.JOIN)), en = (0, o.Wu)([D.Z], () => D.Z.getActivities().filter(e => e.type === q.IIU.PLAYING && (0, h.Z)(e, q.xjy.JOIN))), {
					voiceChannel: ei
				} = (0, S.Z)({
					userId: t.id
				}), er = (0, P.K)({
					user: t
				}), {
					status: el,
					applicationStream: es,
					isMobile: ea,
					newStatus: eo
				} = (0, o.cj)([R.Z, k.Z], () => {
					let e = R.Z.getStatus(t.id),
						n = k.Z.getAnyStreamForUser(t.id),
						r = R.Z.isMobileOnline(t.id),
						l = (0, m.Z)(i) ? q.Skl.STREAMING : e;
					return {
						status: e,
						applicationStream: n,
						isMobile: r,
						newStatus: l
					}
				}, [t.id, i]), ec = en.length > 0, eu = l.useCallback(e => {
					null == x || x(F, e, ec)
				}, [x, F, ec]), ed = (0, g.O)(eu), ep = l.useCallback(() => {
					X(!0)
				}, []), ef = l.useCallback(() => {
					X(!1)
				}, []), eg = l.useCallback(() => {
					if (null != s) {
						let e = s.traits,
							t = W(z({}, s), {
								traits: e.slice(0, 3)
							});
						return (0, r.jsx)(I.Gk, {
							location: I.Gt.FRIENDS_POPOUT,
							className: Q.badgesContainer,
							children: K.map((e, n) => (0, r.jsx)(e, {
								entry: t
							}, n))
						})
					}
					if (!(0, E.Z)({
							activities: i,
							status: el,
							applicationStream: es,
							voiceChannel: ei
						})) return null;
					let e = !(0, v.Z)({
						activity: null == i ? void 0 : i.find(e => {
							let {
								type: t
							} = e;
							return t === q.IIU.CUSTOM_STATUS
						}),
						user: t
					});
					return (0, r.jsx)(y.Z, {
						location: "FriendsPopout",
						user: t,
						activities: i,
						applicationStream: es,
						voiceChannel: ei,
						animateEmoji: !1,
						hideEmoji: e,
						hasQuest: !1
					})
				}, [t, i, el, es, ei, s]), eN = l.useCallback(e => {
					null == U || U("user_context_menu", t.id), (0, p.jW)(e, async () => {
						let {
							default: e
						} = await Promise.all([n.e("79695"), n.e("69220"), n.e("70686")]).then(n.bind(n, 881351));
						return n => (0, r.jsx)(e, W(z({}, n), {
							user: t,
							appContext: Z
						}))
					})
				}, [t, Z, U]), eO = l.useCallback(e => {
					e.preventDefault(), e.stopPropagation(), null == U || U("open_direct_message", t.id), (0, N.i)(Z, !0), d.Z.openPrivateChannel({
						recipientIds: t.id
					}), null != b && b()
				}, [t.id, b, Z, U]), eh = l.useCallback(e => {
					e.preventDefault(), e.stopPropagation(), null == U || U("send_friend_request", t.id), f.Z.addRelationship({
						userId: t.id,
						context: {
							location: "friends-popout"
						}
					})
				}, [t.id, U]), em = l.useCallback(async (e, n) => {
					if (e.preventDefault(), e.stopPropagation(), null != n.application_id && "" !== n.application_id && !$[n.application_id]) try {
						ee(e => W(z({}, e), {
							[n.application_id]: !0
						})), await u.Z.sendActivityInviteUser({
							type: q.mFx.JOIN,
							userId: t.id,
							activity: n,
							location: q.Sbl.FRIENDS_POPOUT
						}), null == U || U("send_activity_invite", t.id), ee(e => W(z({}, e), {
							[n.application_id]: !1
						}))
					} finally {
						ee(e => W(z({}, e), {
							[n.application_id]: !1
						}))
					}
				}, [U, $, t.id]), eE = l.useCallback(async (e, n) => {
					if (e.preventDefault(), e.stopPropagation(), null != n.application_id && "" !== n.application_id && !$[n.application_id]) try {
						ee(e => W(z({}, e), {
							[n.application_id]: !0
						})), await u.Z.sendActivityInviteUser({
							type: q.mFx.JOIN_REQUEST,
							userId: t.id,
							activity: n,
							location: q.Sbl.FRIENDS_POPOUT
						}), null == U || U("ask_to_join", t.id), ee(e => W(z({}, e), {
							[n.application_id]: !1
						}))
					} finally {
						ee(e => W(z({}, e), {
							[n.application_id]: !1
						}))
					}
				}, [U, $, t.id]), eS = () => T === q.OGo.PENDING_INCOMING ? (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)(C.sF, {
						label: V.intl.string(V.t.MMlhsr),
						icon: c.dz2,
						onClick: e => {
							e.preventDefault(), e.stopPropagation(), f.Z.addRelationship({
								userId: t.id,
								context: {
									location: "friends-popout"
								}
							}), null == U || U("accept_friend_request", t.id)
						}
					}), (0, r.jsx)(C.sF, {
						label: V.intl.string(V.t.ytCpKi),
						icon: c.Dio,
						onClick: e => {
							e.preventDefault(), e.stopPropagation(), f.Z.removeRelationship(t.id, {
								location: "friends-popout"
							}), null == U || U("decline_friend_request", t.id)
						}
					})]
				}) : T === q.OGo.PENDING_OUTGOING ? (0, r.jsx)(C.sF, {
					label: V.intl.string(V.t["bTfA//"]),
					icon: c.iHX,
					onClick: e => {
						e.preventDefault(), e.stopPropagation(), f.Z.cancelFriendRequest(t.id, {
							location: "friends-popout"
						}), null == U || U("cancel_friend_request", t.id)
					}
				}) : j ? (0, r.jsx)(C.sF, {
					label: V.intl.string(V.t.w5uwoK),
					icon: c.oLu,
					onClick: eh
				}) : null, ey = () => (0, r.jsxs)(r.Fragment, {
					children: [et.map(e => (0, r.jsx)(C.sF, {
						label: $[e.application_id] ? V.intl.string(V.t["8BEiNj"]) : V.intl.string(V.t.OKsSCQ),
						icon: $[e.application_id] ? c.dz2 : c.V9,
						onClick: t => eE(t, e)
					}, e.application_id)), en.map(e => {
						var n;
						return (0, r.jsx)(C.sF, {
							label: $[e.application_id] ? V.intl.string(V.t["8BEiNj"]) : V.intl.formatToPlainString(V.t["KHLo+P"], {
								channel: null != (n = t.globalName) ? n : t.username,
								game: e.name
							}),
							icon: $[e.application_id] ? c.dz2 : c.ejJ,
							onClick: t => em(t, e)
						}, e.application_id)
					})]
				});
				return (0, r.jsx)(G.Z, {
					targetElementRef: ed,
					user: t,
					position: "left",
					spacing: 16,
					children: (e, n) => {
						var i;
						let {
							isShown: l
						} = n;
						return (0, r.jsxs)("div", {
							className: Q.row,
							ref: ed,
							children: [(0, r.jsx)(_.Z, z({
								innerClassName: Q.rowInner,
								onContextMenu: eN,
								onMouseEnter: ep,
								onMouseLeave: ef,
								avatar: (0, r.jsx)(c.qEK, W(z({}, Y), {
									size: H,
									src: L,
									isMobile: ea,
									isTyping: !1,
									status: eo,
									className: Q.avatar,
									"aria-label": t.username,
									statusTooltip: !0,
									avatarDecoration: M
								})),
								name: (0, r.jsx)("span", {
									className: Q.username,
									children: null != (i = null != A ? A : t.globalName) ? i : t.username
								}),
								subText: eg(),
								selected: l,
								nameplate: er,
								hovered: B
							}, e, J)), (0, r.jsxs)(C.ZP, {
								className: Q.hoverBar,
								children: [eS(), ey(), T !== q.OGo.PENDING_INCOMING && T !== q.OGo.PENDING_OUTGOING && (0, r.jsx)(C.sF, {
									label: V.intl.string(V.t["g33r/P"]),
									icon: c.kBi,
									onClick: eO
								}), (0, r.jsx)(C.sF, {
									label: V.intl.string(V.t.UKOtz8),
									icon: c.xhG,
									onClick: eN
								})]
							})]
						})
					}
				})
			});
			X.displayName = "FriendRow";
			let $ = {
				searchType: T.S.FUZZY,
				searchStringGenerator: function(e) {
					let {
						user: t,
						activities: n,
						nickname: i
					} = e;
					return [t.username, t.globalName, i, ...n.map(e => e.name)].filter(M.lm)
				},
				sortType: T.E.JARO_WINKLER,
				throttleMs: 100
			};

			function ee(e, t) {
				let [n, i] = l.useState(t), r = l.useCallback(() => i(t), [t]);
				return (0, Z.BO)(e, t, i, $), [n, r]
			}
			let et = l.memo(function(e) {
				let {
					containerClassName: t,
					listClassName: i,
					closePopout: u,
					renderHeader: d,
					onAction: f,
					onFriendVisible: g,
					autoFocus: N = !1,
					appContext: h = q.IlC.APP
				} = e, [m, E] = l.useState([J.SUGGESTIONS, J.FRIEND_REQUESTS]), S = l.useRef(null), y = (0, O.Z)("friends-popout", S), I = function() {
					let e = (0, o.Wu)([U.Z, x.default, R.Z], () => {
							let e = [];
							for (let [t, n] of U.Z.getMutableRelationships().entries()) {
								if (n !== q.OGo.PENDING_INCOMING && n !== q.OGo.PENDING_OUTGOING) continue;
								let i = x.default.getUser(t);
								if (null != i) {
									let r = U.Z.getSince(t),
										l = null != r ? new Date(r).getTime() : 0;
									e.push({
										user: i,
										activities: R.Z.getActivities(t),
										timestamp: l,
										nickname: U.Z.getNickname(t),
										relationshipType: n
									})
								}
							}
							return e.sort((e, t) => t.timestamp - e.timestamp), e
						}),
						t = (0, o.Wu)([A.Z, x.default, R.Z, U.Z, F.Z], () => {
							let e = A.Z.getUserAffinitiesMap(),
								t = [];
							for (let [n, i] of e.entries()) {
								let e = U.Z.getRelationshipType(n);
								if (U.Z.isFriend(n) || i.communicationProbability <= .1634 || e === q.OGo.PENDING_INCOMING || e === q.OGo.PENDING_OUTGOING) continue;
								let r = x.default.getUser(n);
								if (null != r) {
									let e = R.Z.getActivities(n),
										l = F.Z.getVoiceStateForUser(n),
										s = (null == l ? void 0 : l.channelId) != null;
									t.push({
										user: r,
										activities: e,
										affinity: i.communicationProbability,
										hasActivity: e.length > 0 || s,
										nickname: U.Z.getNickname(n)
									})
								}
							}
							return t.sort((e, t) => {
								let n = 1e3 * !!e.hasActivity + e.affinity;
								return 1e3 * !!t.hasActivity + t.affinity - n
							})
						}, []),
						n = function() {
							let e = (0, o.e7)([D.Z], () => D.Z.getPrimaryActivity()),
								t = null == e ? void 0 : e.application_id,
								n = (0, j.N)(t);
							return (0, o.cj)([U.Z, x.default, R.Z, F.Z], () => {
								let i = (null == e ? void 0 : e.name) != null && null != t,
									r = {
										activities: [],
										sameActivity: [],
										online: [],
										offline: []
									},
									l = new Map;
								for (let e of (i && null != t && null != n && n.length > 0 && n.forEach(e => {
										let t = e.author_id;
										if (!U.Z.isFriend(t)) return;
										let n = x.default.getUser(t);
										null != n && l.set(t, {
											user: n,
											activities: [],
											gameProfileEntry: e,
											nickname: U.Z.getNickname(t)
										})
									}), U.Z.getFriendIDs())) {
									let n = x.default.getUser(e);
									if (null == n) continue;
									let s = R.Z.getStatus(e),
										a = R.Z.getActivities(e),
										o = U.Z.getNickname(e),
										c = F.Z.getVoiceStateForUser(e),
										u = (null == c ? void 0 : c.channelId) != null,
										d = a.filter(e => e.type === q.IIU.PLAYING || e.type === q.IIU.LISTENING || e.type === q.IIU.WATCHING || e.type === q.IIU.STREAMING),
										p = d.filter(e => e.application_id === t),
										f = i && p.length > 0,
										g = {
											user: n,
											activities: f ? p : d,
											nickname: o
										};
									f ? (r.sameActivity.push(g), l.delete(e)) : d.length > 0 ? r.activities.push(g) : u ? r.activities.push(W(z({}, g), {
										activities: a
									})) : s === q.Skl.ONLINE || s === q.Skl.IDLE || s === q.Skl.DND ? r.online.push(g) : r.offline.push(g)
								}
								let s = (e, t) => {
									var n, i;
									let r = (null != (n = e.user.globalName) ? n : e.user.username).toLowerCase(),
										l = (null != (i = t.user.globalName) ? i : t.user.username).toLowerCase();
									return r.localeCompare(l)
								};
								if (r.sameActivity.sort(s), l.size > 0) {
									let e = Array.from(l.values()).sort(s);
									r.sameActivity.push(...e)
								}
								return r.activities.sort(s), r.online.sort(s), r.offline.sort(s), r
							}, [n, e, t])
						}(),
						i = (0, o.e7)([D.Z], () => D.Z.getPrimaryActivity());
					return l.useMemo(() => {
						var r;
						return {
							friendRequests: e,
							suggestions: t,
							activities: n.activities,
							sameActivity: n.sameActivity,
							online: n.online,
							offline: n.offline,
							currentActivityName: null != (r = null == i ? void 0 : i.name) ? r : ""
						}
					}, [e, t, n, i])
				}(), _ = function(e) {
					let [t, n] = l.useState(""), [i, r] = ee(t, e.friendRequests), [s, a] = ee(t, e.suggestions), [o, c] = ee(t, e.sameActivity), [u, d] = ee(t, e.activities), [p, f] = ee(t, e.online), [g, N] = ee(t, e.offline), O = l.useCallback(() => {
						n(""), r(), a(), c(), d(), f(), N()
					}, [r, a, c, d, f, N]);
					return {
						friendRequests: i,
						suggestions: s,
						sameActivity: o,
						activities: u,
						online: p,
						offline: g,
						currentActivityName: e.currentActivityName,
						searchQuery: t,
						setSearchQuery: n,
						clearSearch: O
					}
				}(I), {
					searchQuery: v,
					setSearchQuery: C,
					clearSearch: P
				} = _, T = Y(_, ["searchQuery", "setSearchQuery", "clearSearch"]), Z = l.useCallback(e => {
					E(t => t.includes(e) ? t.filter(t => t !== e) : [...t, e])
				}, []), w = l.useCallback((0, s.debounce)(() => {
					null == f || f("search_friends")
				}, 1e3, {
					leading: !0,
					trailing: !1
				}), [f]), G = l.useCallback(e => {
					var t;
					C(e), w(), null == (t = S.current) || t.scrollToTop()
				}, [C, w]), k = l.useCallback(() => {
					var e;
					P(), w(), null == (e = S.current) || e.scrollToTop()
				}, [P, w]), M = l.useCallback(e => {
					(0, p.jW)(e, async () => {
						let {
							default: e
						} = await n.e("23087").then(n.bind(n, 29131));
						return t => (0, r.jsx)(e, W(z({}, t), {
							onClose: u
						}))
					}), null == f || f("open_settings_modal")
				}, [u, f]), H = l.useCallback(() => {
					(0, c.ZDy)(async () => {
						let {
							default: e
						} = await n.e("49078").then(n.bind(n, 539725));
						return t => (0, r.jsx)(e, z({}, t))
					}), null == f || f("open_friend_modal")
				}, [f]), K = l.useCallback(e => {
					let {
						section: t
					} = e, n = "", i = 0;
					switch (t) {
						case J.FRIEND_REQUESTS:
							n = V.intl.string(V.t.fyA119), i = T.friendRequests.length;
							break;
						case J.SAME_ACTIVITY:
							n = I.currentActivityName, i = T.sameActivity.length;
							break;
						case J.SUGGESTIONS:
							n = V.intl.string(V.t.qm9dSk), i = T.suggestions.length;
							break;
						case J.ACTIVITIES:
							n = V.intl.string(V.t.TxqPQU), i = T.activities.length;
							break;
						case J.ONLINE:
							n = V.intl.string(V.t.WbGtnJ), i = T.online.length;
							break;
						case J.OFFLINE:
							n = V.intl.string(V.t.Vv0abG), i = T.offline.length
					}
					let l = (t === J.SUGGESTIONS || t === J.FRIEND_REQUESTS) && i > 3,
						s = m.includes(t);
					return (0, r.jsxs)(b.Z, {
						className: Q.section,
						children: [(0, r.jsx)(c.nn4, {
							children: V.intl.format(V.t.UaqbkZ, {
								title: n,
								count: i
							})
						}), (0, r.jsxs)(c.P3F, {
							onClick: () => l && Z(t),
							"aria-hidden": !0,
							className: l ? Q.sectionCollapsible : void 0,
							children: [n, " — ", i, l ? s ? (0, r.jsx)(c.Fbu, {
								size: "md",
								color: "currentColor",
								className: Q.chevronIcon
							}) : (0, r.jsx)(c.CJ0, {
								size: "md",
								color: "currentColor",
								className: Q.chevronIcon
							}) : null]
						})]
					})
				}, [I.currentActivityName, T.friendRequests.length, T.sameActivity.length, T.suggestions.length, T.activities.length, T.online.length, T.offline.length, m, Z]), B = l.useCallback(e => {
					let t;
					return null == (t = e.section === J.FRIEND_REQUESTS ? T.friendRequests[e.row] : e.section === J.SAME_ACTIVITY ? T.sameActivity[e.row] : e.section === J.SUGGESTIONS ? T.suggestions[e.row] : e.section === J.ACTIVITIES ? T.activities[e.row] : e.section === J.ONLINE ? T.online[e.row] : T.offline[e.row]) || null == t.user ? null : (0, r.jsx)(X, W(z({}, t), {
						index: e.row,
						closeParentPopout: u,
						isSuggestion: e.section === J.SUGGESTIONS,
						appContext: h,
						onAction: f,
						onFriendVisible: g
					}), "".concat(e.section, ":").concat(t.user.id))
				}, [T, u, h, f, g]), {
					showSuggestions: $
				} = (0, L.Z)(), et = l.useMemo(() => {
					let e = $ ? m.includes(J.SUGGESTIONS) ? Math.min(3, T.suggestions.length) : T.suggestions.length : 0;
					return [m.includes(J.FRIEND_REQUESTS) ? Math.min(3, T.friendRequests.length) : T.friendRequests.length, T.sameActivity.length, T.activities.length, e, T.online.length, T.offline.length]
				}, [T, m, $]), en = Object.values(T).every(e => 0 === e.length);
				return (0, r.jsxs)("div", {
					className: t,
					children: [null != d ? (0, r.jsx)("div", {
						className: Q.header,
						children: d()
					}) : (0, r.jsxs)("div", {
						className: Q.header,
						children: [(0, r.jsx)(c.X6q, {
							variant: "heading-lg/semibold",
							children: V.intl.string(V.t.TdEu5e)
						}), (0, r.jsxs)("div", {
							className: Q.controlButtons,
							children: [(0, r.jsx)(c.M0o, {
								tooltip: V.intl.string(V.t.w5uwoK),
								color: c.YX$.TERTIARY,
								icon: (0, r.jsx)(c.oLu, {
									size: "xs",
									color: "currentColor"
								}),
								className: Q.controlButton,
								onClick: H
							}), (0, r.jsx)(c.M0o, {
								tooltip: V.intl.string(V.t["3D5yo6"]),
								color: c.YX$.TERTIARY,
								icon: (0, r.jsx)(c.xhG, {
									size: "xs",
									color: "currentColor"
								}),
								className: Q.controlButton,
								onClick: M
							})]
						})]
					}), (0, r.jsx)("div", {
						className: Q.searchContainer,
						children: (0, r.jsx)(c.E1j, {
							query: v,
							onChange: G,
							onClear: k,
							placeholder: V.intl.string(V.t["5h0QOD"]),
							size: c.E1j.Sizes.MEDIUM,
							autoFocus: N
						})
					}), en ? (0, r.jsx)("div", {
						className: Q.emptyStateContainer,
						children: (0, r.jsx)(c.Text, {
							variant: "text-md/normal",
							color: "text-muted",
							children: V.intl.string(V.t["7sW4h4"])
						})
					}) : (0, r.jsx)(a.bG, {
						navigator: y,
						children: (0, r.jsx)(a.SJ, {
							children: e => {
								var {
									ref: t,
									role: n
								} = e, l = Y(e, ["ref", "role"]);
								return (0, r.jsx)(c.Wdt, {
									children: e => (0, r.jsx)(c.aVo, z({
										innerRole: n,
										innerAriaLabel: V.intl.string(V.t.TdEu5e),
										ref: e => {
											var n;
											S.current = e, t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null
										},
										className: i,
										sectionHeight: 40,
										rowHeight: 42,
										sidebarHeight: 0,
										renderSection: K,
										renderRow: B,
										sections: et,
										paddingTop: 4,
										paddingBottom: 4
									}, l, e))
								})
							}
						})
					})]
				})
			});

			function en(e) {
				let {
					onOpen: t,
					onClose: n,
					children: i,
					popoutPosition: s,
					popoutAlign: a
				} = e, [o, u] = l.useState(!1), d = l.useRef(null), p = l.useCallback(() => {
					u(!1), null == n || n()
				}, [n]), f = l.useCallback(() => {
					u(e => {
						let i = !e;
						return i ? null == t || t() : null == n || n(), i
					})
				}, [n, t]), g = l.useCallback(() => (0, r.jsx)(et, {
					containerClassName: Q.container,
					listClassName: Q.list,
					closePopout: p,
					autoFocus: !0
				}), [p]);
				return (0, r.jsx)(c.yRy, {
					targetElementRef: d,
					animation: c.yRy.Animation.NONE,
					position: s,
					align: a,
					autoInvert: !1,
					shouldShow: o,
					onRequestClose: p,
					renderPopout: g,
					ignoreModalClicks: !0,
					clickTrap: !0,
					children: (e, t) => {
						let {
							isShown: n
						} = t;
						return i(f, n, e, d)
					}
				})
			}
		},
		151459: function(e, t, n) {
			n.d(t, {
				Z: () => i
			});
			let i = (0, n(97519).U)(e => ({
				showSuggestions: !0,
				showActivityTicker: !0,
				setShowSuggestions: t => e({
					showSuggestions: t
				}),
				setShowActivityTicker: t => e({
					showActivityTicker: t
				})
			}))
		},
		225559: function(e, t, n) {
			n.d(t, {
				L: () => r,
				v: () => l
			});
			var i = n(570140);

			function r() {
				i.Z.dispatch({
					type: "NOW_PLAYING_MOUNTED"
				})
			}

			function l() {
				i.Z.dispatch({
					type: "NOW_PLAYING_UNMOUNTED"
				})
			}
		},
		46145: function(e, t, n) {
			n.d(t, {
				Z: () => f
			}), n(388685), n(290780);
			var i, r = n(442837),
				l = n(570140),
				s = n(592125),
				a = n(271383),
				o = n(430824);

			function c(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			let u = [],
				d = new Set;
			class p extends(i = r.ZP.PersistedStore) {
				initialize(e) {
					var t;
					this.waitFor(a.ZP, o.Z, s.Z), d = new Set([...u = null != (t = null == e ? void 0 : e.channelHistory) ? t : []])
				}
				getState() {
					return {
						channelHistory: u
					}
				}
				getChannelHistory() {
					return u
				}
			}
			c(p, "displayName", "RecentVoiceChannelStore"), c(p, "persistKey", "RecentVoiceChannelStore");
			let f = new p(l.Z, {
				POST_CONNECTION_OPEN: function() {
					d = new Set([...u])
				},
				VOICE_CHANNEL_SELECT: function(e) {
					var t, n;
					let {
						channelId: i
					} = e;
					return null != i && !!(null != (n = null == (t = s.Z.getChannel(i)) ? void 0 : t.isVocal()) && n) && (d.has(i) ? ((u = u.filter(e => e !== i)).unshift(i), d = new Set([...u])) : (u.unshift(i), d.add(i)), u.length > 10 && (u.length = 10, d = new Set([...u])), !0)
				}
			})
		},
		649974: function(e, t, n) {
			n.d(t, {
				Z: () => I
			});
			var i, r = n(442837),
				l = n(570140),
				s = n(656063),
				a = n(752048),
				o = n(158776),
				c = n(594174),
				u = n(981631);

			function d(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function p(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						i = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), i.forEach(function(t) {
						d(e, t, n[t])
					})
				}
				return e
			}

			function f(e, t) {
				return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var i = Object.getOwnPropertySymbols(e);
						n.push.apply(n, i)
					}
					return n
				})(Object(t)).forEach(function(n) {
					Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
				}), e
			}
			let g = !1,
				N = {},
				O = {};

			function h(e) {
				let t = !1;
				return e.forEach(e => {
					t = !1 !== E(e) || t
				}), t
			}

			function m(e) {
				let t = O[e];
				if (null == t) return !1;
				let n = t.gameId;
				return null != N[n] && (N = p({}, N), delete N[n][e], 0 === Object.values(N[n]).length && delete N[n]), O = p({}, O), delete O[e], !0
			}

			function E(e) {
				let {
					user: t,
					activities: n
				} = e;
				if (null == t) return !1;
				let i = n.filter(e => e.type !== u.IIU.CUSTOM_STATUS);
				if (0 === i.length) return m(t.id);
				let r = !1;
				return i.forEach(e => {
					(function(e, t) {
						var n, i;
						let r = (0, s.Z)(e);
						if (null == r) return m(t.id);
						let l = O[t.id];
						null != l && l.gameId !== r && m(t.id);
						let a = null != (i = null == (n = e.timestamps) ? void 0 : n.start) ? i : Date.now(),
							o = {
								userId: t.id,
								activity: e,
								startedPlaying: a
							};
						return N = f(p({}, N), {
							[r]: f(p({}, N[r]), {
								[o.userId]: o
							})
						}), O = f(p({}, O), {
							[o.userId]: {
								gameId: r,
								startedPlaying: o.startedPlaying
							}
						}), !0
					})(e, t) && (r = !0)
				}), r
			}

			function S() {
				let e, t = !1;
				return a.Z.shouldFetch() || g || (N = {}, O = {}, e = !1, o.Z.getUserIds().forEach(t => {
					let n = c.default.getUser(t);
					null != n && (e = E({
						user: n,
						activities: o.Z.getActivities(t)
					}) || e)
				}), t = e), g = !a.Z.shouldFetch(), t
			}
			class y extends(i = r.ZP.Store) {
				initialize() {
					this.waitFor(a.Z), this.syncWith([a.Z], S)
				}
				get games() {
					return N
				}
				get usersPlaying() {
					return O
				}
				get gameIds() {
					return Object.keys(N)
				}
				getNowPlaying(e) {
					return N[e]
				}
				getUserGame(e) {
					return O[e]
				}
			}
			d(y, "displayName", "NowPlayingStore");
			let I = new y(l.Z, {
				CONNECTION_OPEN: function() {
					N = {}, O = {}
				},
				CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
					let {
						guilds: t,
						presences: n
					} = e, i = !1;
					return t.forEach(e => {
						h(e.presences) && (i = !0)
					}), h(n) && (i = !0), i
				},
				LOGOUT: function() {
					N = {}, O = {}
				},
				PRESENCE_UPDATES: function(e) {
					let {
						updates: t
					} = e;
					return t.map(e => E(e)).some(e => e)
				},
				PRESENCES_REPLACE: function(e) {
					let {
						presences: t
					} = e;
					return h(t)
				}
			})
		}
	}
]);
//# sourceMappingURL=51bac197822994ec.js.map