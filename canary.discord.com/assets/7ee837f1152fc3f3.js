"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["7654"], {
		622577: function(e) {
			e.exports = "/assets/d6338712dc2e0dee.svg"
		},
		247272: function(e, t, n) {
			n.d(t, {
				C: () => s,
				x: () => r
			}), n(388685);
			var l = n(570140),
				i = n(93127);

			function r(e) {
				let {
					omitUserIds: t,
					guild: n,
					channel: r,
					applicationId: s,
					inviteTargetType: a
				} = e;
				return (0, i._)().then(() => {
					l.Z.dispatch({
						type: "LOAD_INVITE_SUGGESTIONS",
						omitUserIds: null != t ? t : new Set,
						guild: n,
						channel: r,
						applicationId: s,
						inviteTargetType: a
					})
				})
			}

			function s(e) {
				l.Z.dispatch({
					type: "INVITE_SUGGESTIONS_SEARCH",
					query: e
				})
			}
			n(751771)
		},
		630810: function(e, t, n) {
			n.d(t, {
				Z: () => g,
				m: () => c
			});
			var l, i = n(493683),
				r = n(904245),
				s = n(710845),
				a = n(592125),
				o = n(70956),
				u = n(651655);
			let d = +o.Z.Millis.SECOND + 10;
			var c = ((l = {})[l.GROUP_DM = 0] = "GROUP_DM", l[l.USER = 1] = "USER", l[l.CHANNEL = 2] = "CHANNEL", l);
			class h extends u.Z {
				_sendInvite(e, t, n, l, i) {
					r.Z.sendInvite(e.id, t, n, l).then(() => i(null, !0), () => i(null, !1))
				}
				drain(e, t) {
					let {
						location: n,
						suggested: l
					} = e;
					switch (e.type) {
						case 0:
						case 2:
							this._sendInvite(e.channel, e.inviteKey, n, l, t);
							break;
						case 1:
							i.Z.ensurePrivateChannel(e.user.id).then(i => {
								let r = a.Z.getChannel(i);
								null != r && this._sendInvite(r, e.inviteKey, n, l, t)
							}, () => t(null, !1))
					}
				}
				constructor() {
					super(new s.Z("InviteQueue"), d)
				}
			}
			let g = new h
		},
		956829: function(e, t, n) {
			n.d(t, {
				h: () => l
			});
			let l = (0, n(818083).B)({
				kind: "guild",
				id: "2023-04_community_endless_invites",
				label: "Community Endless Invites",
				defaultConfig: {
					defaultInvitesToNeverExpire: !1
				},
				treatments: [{
					id: 1,
					label: "Causes invites to never expire (by default) in the Guild",
					config: {
						defaultInvitesToNeverExpire: !0
					}
				}]
			})
		},
		259473: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var l = n(399606),
				i = n(430824),
				r = n(971130),
				s = n(956829),
				a = n(981631);

			function o(e) {
				let {
					guildId: t
				} = e, n = s.h.useExperiment({
					guildId: null != t ? t : a.lds,
					location: "6798be_2"
				}), o = (0, l.e7)([i.Z], () => i.Z.getGuild(t));
				return null != t && function(e) {
					var t;
					let {
						guild: n,
						experimentConfig: l
					} = e, {
						defaultInvitesToNeverExpire: i
					} = null != l ? l : s.h.getCurrentConfig({
						guildId: null != (t = null == n ? void 0 : n.id) ? t : a.lds,
						location: "6798be_1"
					});
					if ((null == n ? void 0 : n.features.has(a.oNc.HUB)) || (null == n ? void 0 : n.features.has(a.oNc.COMMUNITY)) && i) return r.ZP.INVITE_OPTIONS_FOREVER.value
				}({
					guild: o,
					experimentConfig: n
				})
			}
		},
		648159: function(e, t, n) {
			n.d(t, {
				Z: () => a
			});
			var l = n(73800),
				i = n(252618),
				r = n(358085),
				s = n(388032);

			function a() {
				return l.useEffect(() => {
					r.isPlatformEmbedded || (0, i.EM)({
						messages: [s.intl.string(s.t.KIX3cn), s.intl.string(s.t["UbO+8v"]), s.intl.string(s.t.MbySu7)],
						interval: 600,
						count: 20,
						onlyWhenBlurred: !0
					})
				}, []), null
			}
		},
		227672: function(e, t, n) {
			n.d(t, {
				o: () => l
			});
			let l = (0, n(818083).B)({
				kind: "guild",
				id: "2023-02_guest_voice_invites",
				label: "Guest Voice Invites",
				defaultConfig: {
					enabled: !1
				},
				treatments: [{
					id: 1,
					label: "Allow creation of guest voice invites",
					config: {
						enabled: !0
					}
				}]
			})
		},
		601953: function(e, t, n) {
			function l(e) {
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

			function i(e, t) {
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

			function r(e, t) {
				var n, r, s, a, o, u, d;
				let c = i(l(i(l({
					max_uses: null != (s = e.maxUses) ? s : null,
					max_age: null != (a = e.maxAge) ? a : null,
					temporary: null != (o = e.temporary) ? o : null
				}, (null == (n = e.targetUser) ? void 0 : n.id) == null ? {} : {
					target_user_id: e.targetUser.id
				}), {
					target_type: null != (u = e.targetType) ? u : null
				}), (null == (r = e.targetApplication) ? void 0 : r.id) == null ? {} : {
					target_application_id: e.targetApplication.id
				}), {
					flags: null != (d = e.flags) ? d : null
				});
				for (let e of Object.keys(t))
					if (t[e] !== c[e]) return !1;
				return !0
			}
			n.d(t, {
				m: () => r
			}), n(997841), n(388685)
		},
		277364: function(e, t, n) {
			n.d(t, {
				R: () => s
			});
			var l = n(442837),
				i = n(496675),
				r = n(981631);

			function s(e) {
				let t = (0, l.e7)([i.Z], () => i.Z.can(r.Plq.KICK_MEMBERS, e), [e]),
					n = !!((null == e ? void 0 : e.features.has(r.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && (null == e ? void 0 : e.features.has(r.oNc.MEMBER_VERIFICATION_GATE_ENABLED)));
				return {
					canCreateApplicationBypassInvites: n && t,
					isManualApprovalGuild: n
				}
			}
		},
		560114: function(e, t, n) {
			n.d(t, {
				default: () => eI
			}), n(997841), n(388685);
			var l, i = n(255367),
				r = n(73800),
				s = n(120356),
				a = n.n(s),
				o = n(512722),
				u = n.n(o),
				d = n(392711),
				c = n.n(d),
				h = n(990547),
				g = n(533800),
				m = n(442837),
				p = n(902704),
				v = n(692547),
				I = n(481060),
				x = n(447543),
				f = n(247272),
				j = n(110924),
				N = n(100527),
				_ = n(906732),
				E = n(835473),
				S = n(447003),
				b = n(471445),
				T = n(259473),
				O = n(600164),
				y = n(687516),
				C = n(648159),
				P = n(227672),
				Z = n(427679),
				w = n(601964),
				A = n(199902),
				R = n(439170),
				M = n(592125),
				D = n(984933),
				k = n(341165),
				L = n(751771),
				U = n(496675),
				V = n(158776),
				B = n(944486),
				F = n(594174),
				G = n(938475),
				z = n(626135),
				H = n(630388),
				q = n(971130),
				W = n(264229),
				Y = n(340541),
				X = n(366980),
				K = n(277364),
				J = n(265452),
				Q = n(585385),
				$ = n(603236),
				ee = n(462376),
				et = n(245335),
				en = n(981631),
				el = n(176505),
				ei = n(388032),
				er = n(821022),
				es = n(20493),
				ea = n(264589),
				eo = n(622577);

			function eu(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function ed(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						l = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), l.forEach(function(t) {
						eu(e, t, n[t])
					})
				}
				return e
			}

			function ec(e, t) {
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
			let {
				INVITE_OPTIONS_FOREVER: eh,
				INVITE_OPTIONS_7_DAYS: eg,
				INVITE_OPTIONS_UNLIMITED: em
			} = q.ZP;
			class ep extends(l = r.PureComponent) {
				componentDidMount() {
					let {
						inviteChannel: e,
						code: t,
						guild: n,
						source: l,
						canCreateInvites: i,
						analyticsLocation: r,
						streamUserId: s,
						targetType: a,
						targetUserId: o,
						application: u,
						initialCounts: d,
						rows: c,
						showFriends: h,
						modalState: g,
						setModalState: m
					} = this.props, {
						maxAge: p,
						maxUses: v,
						temporary: I,
						flags: f
					} = g;
					if (i) {
						let n = null == e ? void 0 : e.id;
						if (null == n) return;
						m({
							networkError: void 0
						}), x.ZP.createInvite(n, {
							validate: null != t ? t : null,
							max_age: p,
							max_uses: v,
							target_user_id: o,
							target_type: a,
							target_application_id: null == u ? void 0 : u.id,
							temporary: I,
							flags: f
						}, l).catch(e => m({
							networkError: e
						}))
					}
					if (h && z.default.track(en.rMx.INVITE_SUGGESTION_OPENED, {
							location: l,
							num_suggestions: c.length,
							num_friends: d.numFriends,
							num_dms: d.numDms,
							num_group_dms: d.numGroupDms,
							guild_id: n.id,
							application_id: null == u ? void 0 : u.id
						}), null != s) {
						let e = A.Z.getStreamForUser(s, n.id),
							t = (0, y.L2)(e, V.Z);
						z.default.track(en.rMx.OPEN_MODAL, {
							type: "Send Stream Invite",
							source: l,
							location: r,
							other_user_id: s,
							application_id: null != t ? t.id : null,
							application_name: null != t ? t.name : null,
							game_id: null != t ? t.id : null
						})
					} else(null == u ? void 0 : u.id) != null || z.default.track(en.rMx.OPEN_MODAL, {
						type: "Instant Invite Modal",
						source: l,
						location: r
					})
				}
				componentWillUnmount() {
					let {
						inviteChannel: e,
						modalState: t
					} = this.props;
					(0, H.yE)(t.flags, g.$.IS_GUEST_INVITE) && null != e && x.ZP.clearInviteFromStore(e.id)
				}
				getInviteKey() {
					let {
						code: e,
						vanityURLCode: t,
						guildScheduledEvent: n,
						modalState: l
					} = this.props, {
						showVanityURL: i
					} = l, r = i ? t : null != e ? e : t;
					return null == r ? r : (0, W.tV)({
						baseCode: r,
						guildScheduledEventId: null == n ? void 0 : n.id
					})
				}
				renderChannelWarning() {
					let {
						inviteChannel: e
					} = this.props;
					return (0, S.Z)(e) ? (0, i.jsxs)("div", {
						className: er.warningContainer,
						children: [(0, i.jsx)(I.P4T, {
							size: "custom",
							className: er.warningIcon,
							color: v.Z.unsafe_rawColors.YELLOW_300.css,
							width: 12
						}), (0, i.jsx)(I.Text, {
							variant: "text-xs/normal",
							color: "header-secondary",
							children: ei.intl.string(ei.t.x1SQZW)
						})]
					}) : null
				}
				renderHeader() {
					let e, {
							guild: t,
							showFriends: n,
							guildScheduledEvent: l,
							streamUserId: r,
							application: s,
							welcomeToServer: o,
							inviteChannel: u,
							modalState: d,
							handleDone: c
						} = this.props,
						{
							query: h
						} = d,
						g = null,
						m = null;
					if (e = o ? null : null != r ? ei.intl.string(ei.t["6VQaqa"]) : null != s ? ei.intl.formatToPlainString(ei.t.ZdK3dX, {
							applicationName: s.name
						}) : null != l ? ei.intl.string(ei.t.JKV4FB) : (null == u ? void 0 : u.isGuildStageVoice()) ? ei.intl.string(ei.t.zTrsHx) : ei.intl.format(ei.t.NvVBJS, {
							name: t.name
						}), null != u) {
						let e = (0, b.KS)(u, t);
						null != e && (m = (0, i.jsxs)("div", {
							className: er.headerChannelContainer,
							children: [(0, i.jsx)(e, {
								className: er.channelIcon
							}), (0, i.jsx)(I.Text, {
								color: "interactive-normal",
								variant: "text-md/normal",
								children: u.name
							})]
						}))
					}
					return g = t.features.has(en.oNc.HUB) ? (0, i.jsxs)("div", {
						className: er.hubHeader,
						children: [(0, i.jsx)(I.X6q, {
							className: a()(er.hubInviteTitle, er.headerCloseButtonSpacing),
							id: this._headerId,
							variant: "heading-xl/semibold",
							color: "header-primary",
							children: ei.intl.string(ei.t.WhR38v)
						}), (0, i.jsx)(I.Text, {
							color: "header-secondary",
							variant: "text-md/normal",
							children: ei.intl.string(ei.t.Ed4BMj)
						}), n && (0, i.jsx)(I.E1j, {
							query: h,
							className: er.hubFriendSearch,
							onChange: this.handleQueryChange,
							placeholder: ei.intl.string(ei.t.CmSHY2),
							"aria-label": ei.intl.string(ei.t.CmSHY2),
							autoFocus: !0,
							onClear: this.handleClearSearch
						})]
					}) : n ? (0, i.jsxs)("div", {
						className: er.header,
						children: [(0, i.jsx)("div", {
							className: er.__invalid_headerTopRow,
							children: (0, i.jsx)(I.vwX, {
								id: this._headerId,
								tag: "h2",
								className: a()(es.marginBottom4, er.headerCloseButtonSpacing, er.headerText),
								children: e
							})
						}), m, (0, i.jsx)(I.E1j, {
							query: h,
							className: er.searchBar,
							onChange: this.handleQueryChange,
							placeholder: ei.intl.string(ei.t.CmSHY2),
							autoFocus: !0,
							onClear: this.handleClearSearch
						}), (0, i.jsx)("div", {
							className: es.marginTop8,
							children: this.renderChannelWarning()
						})]
					}) : (0, i.jsxs)(i.Fragment, {
						children: [(0, i.jsx)(I.vwX, {
							id: this._headerId,
							tag: "h2",
							className: a()(es.marginReset, er.headerCloseButtonSpacing, er.headerText),
							children: e
						}), m, this.renderChannelWarning()]
					}), (0, i.jsxs)(I.xBx, {
						separator: n,
						children: [(0, i.jsx)("div", {
							className: er.closeButton,
							children: (0, i.jsx)(I.olH, {
								onClick: c
							})
						}), (0, i.jsxs)("div", {
							className: er.headerContainer,
							children: [o && (0, i.jsxs)(i.Fragment, {
								children: [(0, i.jsx)("img", {
									className: er.welcomeImage,
									src: eo,
									alt: ""
								}), (0, i.jsx)(I.X6q, {
									variant: "heading-lg/semibold",
									className: er.welcomeHeading,
									children: ei.intl.string(ei.t.DpoBNz)
								}), (0, i.jsx)(I.Text, {
									variant: "text-md/normal",
									color: "text-secondary",
									className: er.welcomeSubheading,
									children: ei.intl.string(ei.t["wJ/ouL"])
								})]
							}), null != r ? (0, i.jsx)(C.Z, {}) : null, g]
						})]
					})
				}
				renderFriendsBody() {
					let {
						rows: e
					} = this.props, t = this.getInviteKey();
					return 0 === e.length ? (0, i.jsx)(I.hzk, {
						className: er.inviteRowEmptyState,
						children: (0, i.jsx)(I.OZU, {
							children: ei.intl.string(ei.t.ojoWgY)
						})
					}) : null == t ? (0, i.jsx)(I.hzk, {
						className: er.inviteRowEmptyState,
						children: (0, i.jsx)(I.OZU, {
							children: ei.intl.string(ei.t.hzPwGB)
						})
					}) : (0, i.jsx)(I.YAO, {
						className: er.scroller,
						sections: [e.length],
						renderSection: this.renderSection,
						sectionHeight: 0,
						renderRow: this.renderRow,
						rowHeight: this.getRowHeight,
						paddingBottom: 16
					})
				}
				renderSection() {
					return null
				}
				renderBody() {
					var e;
					let {
						guild: t,
						showFriends: n,
						streamUserId: l,
						application: r
					} = this.props;
					if (n) return this.renderFriendsBody();
					let s = (0, X.Z)(null != (e = this.getInviteKey()) ? e : ""),
						a = F.default.getCurrentUser();
					u()(null != a, "InstantInviteModal: user cannot be undefined");
					let o = (0, w.eM)(t, a) ? ei.intl.string(ei.t.HFbByM) : ei.intl.string(ei.t.ueBhAw);
					return null != l ? o = ei.intl.string(ei.t.CXpS1N) : null != r && (o = ei.intl.string(ei.t.ueCrHB)), (0, i.jsx)(I.hzk, {
						className: er.noScroll,
						children: (0, i.jsxs)(O.Z, {
							direction: O.Z.Direction.VERTICAL,
							className: es.marginBottom20,
							children: [(0, i.jsx)(I.Text, {
								className: er.subText,
								variant: "text-sm/normal",
								children: o
							}), (0, i.jsx)($.I, ec(ed({}, this.props), {
								setInviteFlags: this.handleSetInviteFlags,
								copyValue: s
							}))]
						})
					})
				}
				renderFooter() {
					var e;
					let {
						noInvitesAvailable: t,
						showFriends: n,
						guildScheduledEvent: l,
						streamUserId: r,
						application: s,
						inviteChannel: o,
						modalState: u
					} = this.props, {
						maxAge: d
					} = u, c = null, h = (0, X.Z)(null != (e = this.getInviteKey()) ? e : "");
					if (n) {
						let e = ei.intl.string(ei.t.MLkj7O);
						null != r ? e = ei.intl.string(ei.t["1b9nen"]) : null != s ? e = ei.intl.string(ei.t.iI1gMj) : null != l ? e = ei.intl.string(ei.t.KaWCyM) : (null == o ? void 0 : o.isGuildStageVoice()) && (e = ei.intl.string(ei.t["2frWa2"])), c = (0, i.jsxs)(O.Z, {
							direction: O.Z.Direction.VERTICAL,
							className: er.content,
							children: [(0, i.jsx)(I.vwX, {
								tag: "h5",
								className: es.marginBottom8,
								children: e
							}), (0, i.jsx)($.I, ec(ed({}, this.props), {
								setInviteFlags: this.handleSetInviteFlags,
								copyValue: h
							}))]
						})
					} else t || (c = (0, i.jsxs)(O.Z, {
						justify: O.Z.Justify.BETWEEN,
						className: es.marginTop20,
						children: [(0, i.jsx)(I.XZJ, {
							size: 18,
							type: I.XZJ.Types.INVERTED,
							value: d === eh.value,
							onChange: this.handleToggleMaxAge,
							children: (0, i.jsx)(I.Text, {
								variant: "text-sm/normal",
								children: ei.intl.string(ei.t.QKJru7)
							})
						}), (0, i.jsx)(I.ua7, {
							text: ei.intl.string(ei.t.Yx4IiI),
							children: e => {
								let {
									onMouseEnter: t,
									onMouseLeave: n
								} = e;
								return (0, i.jsx)(I.P3F, {
									onClick: this.openSettings,
									onMouseEnter: t,
									onMouseLeave: n,
									className: ea.cursorPointer,
									children: (0, i.jsx)(I.ewm, {
										size: "sm",
										color: v.Z.unsafe_rawColors.PRIMARY_400.css
									})
								})
							}
						})]
					}));
					return null != c ? (0, i.jsx)(I.mzw, {
						className: a()({
							[er.noPadding]: !n,
							[er.footer]: n
						}),
						children: c
					}) : null
				}
				getModalContent() {
					let {
						modalState: e,
						handleDone: t
					} = this.props, {
						currentPage: n
					} = e;
					switch (n) {
						case et.RV.MAIN:
							return (0, i.jsxs)(i.Fragment, {
								children: [this.renderHeader(), this.renderBody(), this.renderFooter()]
							});
						case et.RV.SETTINGS:
							return (0, i.jsx)(Q.D, ec(ed({}, this.props), {
								onSetInviteFlags: this.handleSetInviteFlags,
								headerId: this._headerId,
								onSelectMaxAge: this.handleSelectMaxAge,
								onSelectMaxUses: this.handleSelectMaxUses,
								onToggleTemporary: this.handleToggleTemporary,
								handleDone: t
							}));
						default:
							return null
					}
				}
				render() {
					let {
						transitionState: e,
						inviteChannel: t,
						guild: n
					} = this.props;
					return (0, i.jsx)("div", {
						className: this.props.showFriends ? er.wrapper : void 0,
						children: (0, i.jsx)(I.Y0X, {
							impression: {
								impressionName: h.ImpressionNames.GUILD_INVITE,
								impressionProperties: {
									invite_channel_id: null == t ? void 0 : t.id,
									invite_guild_id: n.id
								}
							},
							"aria-labelledby": this._headerId,
							transitionState: e,
							className: er.modal,
							parentComponent: "InstantInvite",
							children: this.getModalContent()
						})
					})
				}
				constructor(...e) {
					super(...e), eu(this, "_scroller", null), eu(this, "_headerId", c().uniqueId()), eu(this, "openSettings", () => {
						let {
							changePage: e
						} = this.props;
						e(et.RV.SETTINGS)
					}), eu(this, "handleSelectMaxAge", e => {
						let {
							modalState: t,
							setModalState: n
						} = this.props;
						n({
							maxAge: e,
							savedMaxAge: t.maxAge
						})
					}), eu(this, "handleSelectMaxUses", e => {
						let {
							setModalState: t
						} = this.props;
						t({
							maxUses: e
						})
					}), eu(this, "handleToggleTemporary", e => {
						let {
							setModalState: t
						} = this.props;
						t({
							temporary: e
						})
					}), eu(this, "handleSetInviteFlags", e => {
						let {
							setModalState: t
						} = this.props;
						t({
							flags: e
						})
					}), eu(this, "handleQueryChange", e => {
						var t;
						let {
							setModalState: n
						} = this.props;
						null == (t = this._scroller) || t.scrollTo({
							to: 0
						}), (0, f.C)(e), n({
							query: e
						})
					}), eu(this, "handleClearSearch", () => {
						this.handleQueryChange("")
					}), eu(this, "handleToggleMaxAge", () => {
						let {
							modalState: e,
							setModalState: t
						} = this.props, {
							maxAge: n,
							savedMaxAge: l
						} = e;
						t({
							maxAge: l,
							savedMaxAge: n
						})
					}), eu(this, "getRowHeight", (e, t) => {
						if (e > 0) return 0;
						switch (this.props.rows[t].type) {
							case q.bm.CHANNEL:
							case q.bm.GROUP_DM:
							case q.bm.DM:
							case q.bm.FRIEND:
								return ee.k;
							default:
								return 0
						}
					}), eu(this, "renderRow", e => {
						let {
							section: t,
							row: n
						} = e;
						if (t > 0) return null;
						let {
							analyticsLocation: l
						} = this.props, r = this.getInviteKey(), s = this.props.rows[n], a = "".concat(s.type, "-").concat(s.item.id);
						switch (s.type) {
							case q.bm.GROUP_DM:
							case q.bm.CHANNEL:
								return (0, i.jsx)(ee.d, {
									row: s,
									channel: s.item,
									inviteKey: r,
									location: l
								}, a);
							case q.bm.DM:
							case q.bm.FRIEND:
								return (0, i.jsx)(ee.d, {
									row: s,
									user: s.item,
									inviteKey: r,
									location: l
								}, a);
							default:
								return null
						}
					})
				}
			}
			eu(ep, "defaultProps", {
				analyticsLocation: en.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
				defaultMaxAge: eg.value
			});
			let ev = r.forwardRef(function(e, t) {
				var n, l;
				let {
					channel: s,
					guild: a,
					source: o,
					guildScheduledEvent: u,
					streamUserId: d,
					applicationId: c,
					transitionState: h,
					onClose: v,
					welcomeToServer: I,
					page: b,
					analyticsLocation: O
				} = e, {
					analyticsLocations: y
				} = (0, _.ZP)(N.Z.INSTANT_INVITE_MODAL), C = (0, m.e7)([B.Z, M.Z, D.ZP], () => {
					if (null != s) return s;
					let e = B.Z.getChannelId(),
						t = null == e || (0, el.AB)(e) ? void 0 : M.Z.getChannel(e);
					return (null == t ? void 0 : t.isThread()) && (t = M.Z.getChannel(t.parent_id)), null != t ? t : D.ZP.getDefaultChannel(a.id, !0, en.Plq.CREATE_INSTANT_INVITE)
				}, [s, a.id]), w = null;
				null != d ? w = et.Iq.STREAM : null != c && (w = et.Iq.EMBEDDED_APPLICATION);
				let A = null != s ? s.getGuildId() : null != a ? a.id : null,
					V = (0, m.e7)([k.Z], () => {
						let e = null != C ? C.id : null;
						return null == e ? null : k.Z.getInvite(e, {
							targetType: w,
							targetUserId: d,
							targetApplicationId: c
						})
					}, [C, w, d, c]),
					[F, z, q, W] = (0, m.Wu)([L.Z, G.ZP], () => [L.Z.getInviteSuggestionRows(), L.Z.getTotalSuggestionsCount() >= 1, L.Z.getInitialCounts(), null != s && null != C ? G.ZP.getVoiceStatesForChannel(C) : null], [C, s]),
					Y = (0, m.e7)([R.ZP], () => {
						let e = null != C ? C.id : null;
						return null != A ? R.ZP.getProps(A, e) : void 0
					}, [C, A], p.Z),
					X = (0, m.e7)([U.Z], () => null != C && U.Z.can(en.Plq.CREATE_INSTANT_INVITE, C), [C]),
					J = null === V || !X,
					[Q] = r.useState(() => {
						let e = new Set;
						return null != d && null != W ? W.forEach(t => {
							let {
								user: n
							} = t;
							e.add(n.id)
						}) : null != A && null != Y && w !== et.Iq.EMBEDDED_APPLICATION && Y.rows.forEach(t => {
							t.type === R.so.MEMBER && e.add(t.userId)
						}), e
					}),
					$ = null == s ? void 0 : s.id,
					ee = (0, m.e7)([Z.Z], () => Z.Z.getStageInstanceByChannel($), [$]);
				r.useEffect(() => {
					(0, f.x)({
						omitUserIds: Q,
						guild: a,
						channel: s,
						applicationId: c,
						inviteTargetType: w
					}).catch(en.VqG)
				}, [Q, s, a, c, w]);
				let [ei] = (0, E.Z)(null != c ? [c] : []), er = (0, T.Z)({
					guildId: A
				}), es = null != V ? V.code : void 0, ea = null == V ? void 0 : V.maxAge, eo = null == V ? void 0 : V.maxUses, eu = null == V ? void 0 : V.temporary, ec = a.vanityURLCode, ev = null != ec && ec.length > 0, eI = !X && !(null == C ? void 0 : C.isGuildVocal()) && ev, ex = (null == C ? void 0 : C.type) === en.d4z.GUILD_VOICE, ef = null != (n = null == V ? void 0 : V.flags) ? n : 0, ej = (0, S.Z)(C);
				X || (null == ee ? void 0 : ee.invite_code) == null || (es = ee.invite_code);
				let [eN, e_] = r.useState({
					query: "",
					maxAge: null != (l = null != ea ? ea : er) ? l : eg.value,
					savedMaxAge: ea === eh.value ? null != er ? er : eg.value : eh.value,
					maxUses: null != eo && 0 !== eo ? eo : em.value,
					temporary: null != eu && eu,
					networkError: void 0,
					showVanityURL: eI,
					currentPage: null != b ? b : et.RV.MAIN,
					lastPage: void 0,
					flags: ef
				}), eE = r.useCallback(e => {
					e_(t => ed({}, t, e))
				}, []), eS = r.useCallback(e => {
					eE({
						currentPage: e,
						lastPage: eN.currentPage
					})
				}, [eN.currentPage, eE]), eb = ex && !eI && !J && !ej, {
					enabled: eT
				} = P.o.useExperiment({
					guildId: null == a ? void 0 : a.id,
					location: "acc417_3"
				}, {
					autoTrackExposure: eb
				}), {
					maxAge: eO,
					maxUses: ey,
					temporary: eC,
					savedMaxAge: eP,
					flags: eZ
				} = eN, ew = r.useCallback(() => {
					let {
						currentPage: e,
						lastPage: t
					} = eN;
					e === et.RV.SETTINGS && null != t ? eS(t) : v()
				}, [eS, eN, v]), eA = r.useCallback(() => {
					let e = null == C ? void 0 : C.id;
					0 === ey && 0 === eO && !eC && eI ? eE({
						networkError: void 0,
						showVanityURL: !0
					}) : X && null != e && (eE({
						networkError: void 0,
						showVanityURL: !1
					}), x.ZP.createInvite(e, {
						max_age: eO,
						max_uses: ey,
						target_type: w,
						target_user_id: d,
						target_application_id: null == ei ? void 0 : ei.id,
						temporary: eC,
						flags: eZ
					}, o).catch(e => eE({
						networkError: e,
						showVanityURL: eI
					}))), eO !== eh.value && eP !== eh.value && eE({
						savedMaxAge: eh.value
					})
				}, [eI, X, C, o, null == ei ? void 0 : ei.id, w, d, eO, ey, eC, eE, eP, eZ]), eR = (0, j.Z)(C), eM = (0, j.Z)((0, H.yE)(eZ, g.$.IS_APPLICATION_BYPASS)), eD = null != eR && eR !== C, ek = null != eM && eM !== (0, H.yE)(eZ, g.$.IS_APPLICATION_BYPASS);
				r.useEffect(() => {
					!eI && (eD || ek) && eA()
				}, [eA, eD, ek, eI]);
				let {
					canCreateApplicationBypassInvites: eL,
					isManualApprovalGuild: eU
				} = (0, K.R)(a);
				return (0, i.jsx)(_.Gt, {
					value: y,
					children: (0, i.jsx)(ep, {
						ref: t,
						canCreateInvites: X,
						noInvitesAvailable: J,
						inviteChannel: C,
						guild: a,
						guildScheduledEvent: u,
						streamUserId: d,
						vanityURLCode: ec,
						targetType: w,
						targetUserId: d,
						application: ei,
						rows: F,
						showFriends: z,
						initialCounts: q,
						code: es,
						source: o,
						welcomeToServer: I,
						analyticsLocations: y,
						analyticsLocation: O,
						transitionState: h,
						onClose: v,
						canShowVanityURL: eI,
						isGuestInviteCreationToggleEnabled: eT && eb,
						shouldHideTemporaryInviteToggle: eT && eb || eU,
						modalState: eN,
						setModalState: eE,
						changePage: eS,
						onGenerateNewLink: eA,
						handleDone: ew,
						isApplicationBypassToggleEnabled: eL && !J
					})
				})
			});

			function eI(e) {
				let {
					modal: t
				} = (0, Y._k)({
					location: "instant_invite_modal"
				}), n = t ? J.H : ev;
				return (0, i.jsx)(n, ed({}, e))
			}
		},
		666258: function(e, t, n) {
			n.d(t, {
				f: () => B
			}), n(388685), n(997841);
			var l = n(255367),
				i = n(73800),
				r = n(120356),
				s = n.n(r),
				a = n(512722),
				o = n.n(a),
				u = n(533800),
				d = n(442837),
				c = n(692547),
				h = n(755721),
				g = n(481060),
				m = n(239091),
				p = n(657305),
				v = n(835473),
				I = n(471445),
				x = n(313201),
				f = n(925329),
				j = n(65361),
				N = n(305347),
				_ = n(246946),
				E = n(626135),
				S = n(934415),
				b = n(572004),
				T = n(971130),
				O = n(366980),
				y = n(76234),
				C = n(981631),
				P = n(388032),
				Z = n(942558);

			function w(e) {
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

			function A(e, t) {
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
			let R = e => {
					let {
						inviteIcon: t,
						channelIcon: n,
						heading: i,
						subheading: r
					} = e;
					return (0, l.jsxs)(l.Fragment, {
						children: [null == t ? null : (0, l.jsx)("div", {
							className: Z.inviteIcon,
							children: t
						}), (0, l.jsxs)("div", {
							className: Z.inviteTarget,
							children: [(0, l.jsxs)("div", {
								className: Z.inviteTargetHeading,
								children: [null == n ? null : n, (0, l.jsx)(g.X6q, {
									variant: "heading-md/semibold",
									color: "header-secondary",
									lineClamp: 1,
									children: i
								})]
							}), r]
						})]
					})
				},
				M = e => {
					let {
						guild: t,
						channel: n
					} = e, i = (0, S.a5)({
						type: n.type
					}), r = (0, l.jsx)(g.Text, {
						variant: "text-xs/medium",
						color: "header-muted",
						lineClamp: 1,
						children: [i, t.name].join("\xa0\xa0•\xa0\xa0")
					}), s = (0, I.KS)(n, t), a = (0, l.jsx)(N.Ft, {
						guildId: t.id,
						guildName: t.name,
						guildIcon: t.icon,
						iconSize: 40
					});
					return (0, l.jsx)(R, {
						inviteIcon: a,
						channelIcon: null == s ? null : (0, l.jsx)(s, {
							className: Z.inviteTargetIcon,
							size: "xs"
						}),
						heading: n.name,
						subheading: r
					})
				},
				D = e => {
					let t, {
							guild: n
						} = e,
						{
							guildProfile: r,
							fetchGuildProfile: s
						} = (0, j.u)(n.id);
					i.useEffect(() => {
						s()
					}, [s]), t = null === r ? null : (0, l.jsxs)("div", {
						className: Z.guildPresence,
						children: [(0, l.jsxs)("div", {
							className: Z.onlineCount,
							children: [(0, l.jsx)("div", {
								className: Z.dot
							}), (0, l.jsx)(g.Text, {
								variant: "text-xs/medium",
								color: "header-muted",
								children: P.intl.format(P.t["LC+S+v"], {
									membersOnline: r.onlineCount
								})
							})]
						}), (0, l.jsxs)("div", {
							className: Z.memberCount,
							children: [(0, l.jsx)("div", {
								className: Z.dot
							}), (0, l.jsx)(g.Text, {
								variant: "text-xs/medium",
								color: "header-muted",
								children: P.intl.format(P.t.zRl6XV, {
									count: r.memberCount
								})
							})]
						})]
					});
					let a = (0, l.jsx)(N.Ft, {
						guildId: n.id,
						guildName: n.name,
						guildIcon: n.icon,
						iconSize: 40
					});
					return (0, l.jsx)(R, {
						inviteIcon: a,
						heading: n.name,
						subheading: t
					})
				},
				k = e => {
					let {
						applicationId: t
					} = e, [n] = (0, v.Z)([t]);
					if (null == n) return null;
					let i = (0, p.Z)(n.name),
						r = (0, l.jsx)(g.Text, {
							variant: "text-xs/medium",
							color: "header-muted",
							lineClamp: 1,
							children: (0, l.jsx)(l.Fragment, {
								children: n.tags.join("\xa0\xa0•\xa0\xa0")
							})
						}),
						s = (0, l.jsx)(f.Z, {
							game: n,
							size: f.Z.Sizes.MEDIUM,
							className: Z.inviteIcon
						});
					return (0, l.jsx)(R, {
						inviteIcon: s,
						heading: i,
						subheading: r
					})
				};

			function L(e) {
				let {
					guild: t,
					channel: n,
					applicationId: i
				} = e;
				return null != i ? (0, l.jsx)(k, {
					applicationId: i
				}) : null != n ? (0, l.jsx)(M, {
					guild: t,
					channel: n
				}) : (0, l.jsx)(D, {
					guild: t
				})
			}

			function U(e) {
				let {
					className: t,
					children: n
				} = e;
				return (0, l.jsx)("div", {
					className: s()(t, Z.advancedOptions),
					children: n
				})
			}

			function V(e) {
				let t, n, {
					className: i,
					children: r,
					htmlFor: a,
					onClick: o
				} = e;
				return null != a ? (t = "label", n = {
					htmlFor: a
				}) : null != o ? (t = g.P3F, n = {
					onClick: o
				}) : (t = "div", n = {}), (0, l.jsx)(t, A(w({
					className: Z.advancedOption
				}, n), {
					children: (0, l.jsx)("div", {
						className: s()(i, Z.advancedOptionInner),
						children: r
					})
				}))
			}

			function B(e) {
				let {
					className: t,
					guild: r,
					channel: a,
					applicationId: p,
					getInviteKey: v,
					sendInvite: I,
					canUseVanityURL: f,
					disabled: j,
					hasSelection: N,
					options: S,
					setOptions: R,
					isApplicationBypassAllowed: M,
					isGuestInviteAllowed: D,
					isTemporaryInviteAllowed: k,
					setError: B,
					analyticsLocation: F
				} = e, [G, z] = i.useState(!1), [H, q] = i.useState(!1), W = i.useRef(null), [Y] = (0, d.Wu)([_.Z], () => [_.Z.hideInstantInvites]), X = (0, x.Dt)(), K = (0, x.Dt)(), J = (0, x.Dt)(), Q = i.useMemo(() => f && null != r.vanityURLCode ? (0, O.Z)(r.vanityURLCode, !1) : null, [r, f]), $ = i.useCallback(async () => {
					var e, t;
					if (j) return;
					null !== W.current && clearTimeout(W.current);
					let n = await v();
					o()(null != n, "Invite key could not be determined.");
					let l = (0, O.Z)(n);
					return (0, b.JG)(l, () => {
						z(!0), W.current = setTimeout(() => {
							z(!1), W.current = null
						}, 1e3)
					}, e => {
						B(e)
					}), E.default.track(C.rMx.COPY_INSTANT_INVITE, {
						server: r.id,
						channel: null != (e = null == a ? void 0 : a.id) ? e : null,
						channel_type: null != (t = null == a ? void 0 : a.type) ? t : null,
						location: F,
						code: n,
						application_id: p
					}), () => {
						null !== W.current && clearTimeout(W.current)
					}
				}, [j, v, r, a, F, p, B]), ee = i.useCallback(e => {
					R({
						max_age: e
					})
				}, [R]), et = i.useCallback(e => {
					R({
						max_uses: e
					})
				}, [R]), en = i.useCallback(e => {
					S.flags === e ? R({
						flags: void 0
					}) : R({
						flags: e
					})
				}, [S, R]), el = i.useCallback(e => {
					R({
						temporary: e
					})
				}, [R]), ei = i.useCallback(e => {
					var t;
					let i = null == (t = e.currentTarget) ? void 0 : t.getBoundingClientRect(),
						{
							left: r = 0,
							width: s = 0
						} = null != i ? i : {};
					e.pageX = r + s + 12, (0, m.jW)(e, async () => {
						let {
							default: e
						} = await n.e("84212").then(n.bind(n, 593851));
						return t => (0, l.jsx)(e, A(w({}, t), {
							initialOptions: S,
							onChangeMaxAge: ee,
							onChangeMaxUses: et
						}))
					})
				}, [S, ee, et]), er = function(e) {
					let t = y.H.find(t => {
							let {
								value: n
							} = t;
							return n === e.max_age
						}),
						n = y.p.find(t => {
							let {
								value: n
							} = t;
							return n === e.max_uses
						});
					return null == t || null == n ? null : t.value === T.ZP.INVITE_OPTIONS_FOREVER.value && n.value === T.ZP.INVITE_OPTIONS_UNLIMITED.value ? P.intl.string(P.t["5u4A6e"]) : t.value !== T.ZP.INVITE_OPTIONS_FOREVER.value && n.value !== T.ZP.INVITE_OPTIONS_UNLIMITED.value ? P.intl.formatToPlainString(P.t["Z5Vt5+"], {
						maxAge: t.label,
						maxUses: n.label
					}) : n.value === T.ZP.INVITE_OPTIONS_UNLIMITED.value && t.value !== T.ZP.INVITE_OPTIONS_FOREVER.value ? t.label : n.value !== T.ZP.INVITE_OPTIONS_UNLIMITED.value && t.value === T.ZP.INVITE_OPTIONS_FOREVER.value ? n.label : null
				}(S);
				return (0, l.jsxs)("div", {
					className: s()(t, Z.footer),
					children: [(0, l.jsxs)("div", {
						className: Z.guildRow,
						children: [(0, l.jsx)(L, {
							guild: r,
							channel: a,
							applicationId: p
						}), (0, l.jsx)(g.ua7, {
							position: "top",
							text: P.intl.string(P.t["4QuV7O"]),
							children: e => (0, l.jsx)(g.P3F, A(w({
								className: s()(Z.settingsButton, {
									[Z.settingsOpen]: H
								})
							}, e), {
								onClick: () => {
									var t;
									null == e || null == (t = e.onClick) || t.call(e), q(e => !e)
								},
								children: (0, l.jsx)(g.ewm, {
									size: "refresh_sm",
									color: c.Z.colors.ICON_PRIMARY
								})
							}))
						})]
					}), H && (0, l.jsxs)(U, {
						children: [(0, l.jsxs)(V, {
							onClick: ei,
							children: [(0, l.jsxs)("div", {
								className: Z.advancedOptionContent,
								children: [(0, l.jsx)(g.X6q, {
									variant: "heading-md/medium",
									children: P.intl.string(P.t.YlT5MT)
								}), (0, l.jsx)(g.ua7, {
									position: "top",
									text: P.intl.string(P.t.efLzgY),
									children: e => (0, l.jsx)(g.idN, A(w({}, e), {
										size: "xs",
										color: c.Z.colors.INTERACTIVE_NORMAL
									}))
								})]
							}), (0, l.jsxs)("div", {
								className: Z.advancedOptionContent,
								children: [null != er && (0, l.jsx)(g.Text, {
									variant: "text-sm/medium",
									color: "header-muted",
									children: er
								}), (0, l.jsx)(g.Fbu, {
									size: "xs",
									color: c.Z.colors.INTERACTIVE_NORMAL
								})]
							})]
						}), M && (0, l.jsxs)(V, {
							htmlFor: X,
							children: [(0, l.jsxs)("div", {
								className: Z.advancedOptionContent,
								children: [(0, l.jsx)(g.X6q, {
									variant: "heading-md/medium",
									children: P.intl.string(P.t.EPIOl5)
								}), (0, l.jsx)(g.ua7, {
									position: "top",
									text: P.intl.string(P.t["jvd/LC"]),
									children: e => (0, l.jsx)(g.idN, A(w({}, e), {
										size: "xs",
										color: c.Z.colors.INTERACTIVE_NORMAL
									}))
								})]
							}), (0, l.jsx)(g.rsf, {
								id: X,
								checked: S.flags === u.$.IS_APPLICATION_BYPASS,
								onChange: () => en(u.$.IS_APPLICATION_BYPASS)
							})]
						}), D && (0, l.jsxs)(V, {
							htmlFor: K,
							children: [(0, l.jsxs)("div", {
								className: Z.advancedOptionContent,
								children: [(0, l.jsx)(g.X6q, {
									variant: "heading-md/medium",
									children: P.intl.string(P.t.NKqlpq)
								}), (0, l.jsx)(g.ua7, {
									position: "top",
									text: P.intl.string(P.t.pBOevb),
									children: e => (0, l.jsx)(g.idN, A(w({}, e), {
										size: "xs",
										color: c.Z.colors.INTERACTIVE_NORMAL
									}))
								})]
							}), (0, l.jsx)(g.rsf, {
								id: K,
								checked: S.flags === u.$.IS_GUEST_INVITE,
								onChange: () => en(u.$.IS_GUEST_INVITE)
							})]
						}), k && (0, l.jsxs)(V, {
							htmlFor: J,
							children: [(0, l.jsxs)("div", {
								className: Z.advancedOptionContent,
								children: [(0, l.jsx)(g.X6q, {
									variant: "heading-md/medium",
									children: P.intl.string(P.t.UL177u)
								}), (0, l.jsx)(g.ua7, {
									position: "top",
									text: P.intl.string(P.t.cl1HNT),
									children: e => (0, l.jsx)(g.idN, A(w({}, e), {
										size: "xs",
										color: c.Z.colors.INTERACTIVE_NORMAL
									}))
								})]
							}), (0, l.jsx)(g.rsf, {
								id: J,
								checked: !!S.temporary,
								onChange: e => el(e)
							})]
						})]
					}), (0, l.jsxs)("div", {
						className: Z.buttonRow,
						children: [(0, l.jsx)(g.ua7, {
							position: "top",
							text: Q,
							shouldShow: null !== Q && !Y,
							children: e => (0, l.jsx)(h.zx, A(w({
								className: Z.button,
								innerClassName: Z.buttonInner,
								color: h.zx.Colors.PRIMARY
							}, e), {
								onClick: () => {
									var t;
									null == e || null == (t = e.onClick) || t.call(e), $()
								},
								disabled: j,
								children: G ? (0, l.jsxs)(l.Fragment, {
									children: [(0, l.jsx)(g.dz2, {
										size: "xs",
										color: "currentColor"
									}), (0, l.jsx)("span", {
										children: P.intl.string(P.t["+5kSoa"])
									})]
								}) : (0, l.jsxs)(l.Fragment, {
									children: [(0, l.jsx)(g.xPt, {
										size: "xs",
										color: "currentColor"
									}), (0, l.jsx)("span", {
										children: P.intl.string(P.t.WqhZsr)
									})]
								})
							}))
						}), (0, l.jsxs)(h.zx, {
							className: Z.button,
							innerClassName: Z.buttonInner,
							onClick: () => I(),
							disabled: !N || j,
							children: [(0, l.jsx)("span", {
								children: P.intl.string(P.t.BcAABg)
							}), (0, l.jsx)(g.Uuj, {
								size: "xs",
								color: "currentColor"
							})]
						})]
					})]
				})
			}
		},
		76234: function(e, t, n) {
			n.d(t, {
				H: () => i,
				p: () => r
			});
			var l = n(971130);
			let i = [l.ZP.INVITE_OPTIONS_1_HOUR, l.ZP.INVITE_OPTIONS_8_HOURS, l.ZP.INVITE_OPTIONS_1_DAY, l.ZP.INVITE_OPTIONS_7_DAYS, l.ZP.INVITE_OPTIONS_FOREVER],
				r = [l.ZP.INVITE_OPTIONS_UNLIMITED, l.ZP.INVITE_OPTIONS_ONCE, l.ZP.INVITE_OPTIONS_10_TIMES, l.ZP.INVITE_OPTIONS_50_TIMES, l.ZP.INVITE_OPTIONS_100_TIMES]
		},
		265452: function(e, t, n) {
			n.d(t, {
				H: () => eo
			}), n(388685), n(539854), n(993155);
			var l = n(255367),
				i = n(73800),
				r = n(120356),
				s = n.n(r),
				a = n(512722),
				o = n.n(a),
				u = n(990547),
				d = n(91192),
				c = n(442837),
				h = n(481060),
				g = n(447543),
				m = n(247272),
				p = n(700582),
				v = n(493773),
				I = n(630810),
				x = n(724757),
				f = n(100527),
				j = n(906732),
				N = n(447003),
				_ = n(933557),
				E = n(259473),
				S = n(600164),
				b = n(687516),
				T = n(266076),
				O = n(227672),
				y = n(810123),
				C = n(448486),
				P = n(427679),
				Z = n(199902),
				w = n(984933),
				A = n(271383),
				R = n(430824),
				M = n(341165),
				D = n(751771),
				k = n(496675),
				L = n(158776),
				U = n(699516),
				V = n(626135),
				B = n(971130),
				F = n(51144),
				G = n(264229),
				z = n(601953),
				H = n(277364),
				q = n(666258),
				W = n(530436),
				Y = n(895976),
				X = n(245335),
				K = n(981631),
				J = n(388032),
				Q = n(910420);

			function $(e) {
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
			let {
				INVITE_OPTIONS_7_DAYS: ee,
				INVITE_OPTIONS_UNLIMITED: et
			} = B.ZP, en = {
				max_age: ee.value,
				max_uses: et.value
			};

			function el(e) {
				let {
					icon: t,
					label: n,
					subLabel: i,
					onClick: r,
					isSelected: s,
					disabled: a
				} = e;
				return (0, l.jsxs)(h.P3F, {
					"aria-disabled": a,
					className: Q.recipientRow,
					onClick: r,
					children: [(0, l.jsx)("div", {
						className: Q.recipientAsset,
						children: t
					}), (0, l.jsxs)("div", {
						className: Q.recipientLabels,
						children: [(0, l.jsx)(h.Text, {
							className: Q.recipientLabel,
							variant: "text-md/medium",
							lineClamp: 1,
							children: n
						}), void 0 !== i ? (0, l.jsx)(h.Text, {
							className: Q.recipientSublabel,
							variant: "text-xs/normal",
							color: "text-muted",
							children: i
						}) : null]
					}), (0, l.jsx)(h.XZJ, {
						type: h.XZJ.Types.INVERTED,
						displayOnly: !0,
						size: 24,
						value: s,
						className: Q.checkbox
					})]
				})
			}

			function ei(e) {
				let {
					guild: t,
					user: n,
					onToggle: r,
					isSelected: s,
					disabled: a
				} = e, o = F.ZP.useName(n), u = F.ZP.useUserTag(n, {
					decoration: "never"
				}), [d, g] = (0, c.Wu)([U.Z, L.Z], () => [U.Z.getNickname(n.id), L.Z.getStatus(n.id)], [n]), m = i.useCallback(() => r(n.id), [r, n.id]), v = [u];
				A.ZP.isMember(t.id, n.id) && v.push(J.intl.string(J.t.u1sEf3));
				let I = v.join("\xa0\xa0•\xa0\xa0");
				return (0, l.jsx)(el, {
					icon: (0, l.jsx)(p.Z, {
						"aria-hidden": !0,
						size: h.EFr.SIZE_32,
						user: n,
						status: g
					}),
					label: null != d ? d : o,
					subLabel: I,
					onClick: m,
					isSelected: s,
					disabled: a
				})
			}

			function er(e) {
				var t, n;
				let {
					channel: r,
					onToggle: s,
					isSelected: a,
					disabled: o
				} = e, u = i.useCallback(() => s(r.id), [s, r.id]), d = null != (t = (0, _.ZP)(r)) ? t : "", c = null != (n = (0, C._)(r)) ? n : "";
				return (0, l.jsx)(el, {
					icon: (0, l.jsx)(T.Z, {
						"aria-hidden": !0,
						size: h.EFr.SIZE_32,
						channel: r,
						experimentLocation: "instant_invite_modal"
					}),
					label: d,
					subLabel: c,
					onClick: u,
					isSelected: a,
					disabled: o
				})
			}

			function es(e) {
				var t, n;
				let {
					channel: r,
					onToggle: s,
					isSelected: a,
					disabled: o
				} = e, u = (0, c.e7)([R.Z], () => R.Z.getGuild(null == r ? void 0 : r.guild_id)), d = i.useCallback(() => s(r.id), [s, r.id]), h = null != (t = (0, _.ZP)(r)) ? t : "", g = null != (n = null == u ? void 0 : u.name) ? n : "";
				return (0, l.jsx)(el, {
					icon: (0, l.jsx)(y.Z, {
						size: y.E.SMALL_32,
						guild: u,
						channel: r
					}),
					label: h,
					subLabel: g,
					onClick: d,
					isSelected: a,
					disabled: o
				})
			}

			function ea(e) {
				let {
					guild: t,
					rows: n,
					onToggle: r,
					selection: s,
					scrollerRef: a,
					disabled: o
				} = e, u = i.useMemo(() => [n.length], [n.length]), c = (0, x.Z)("instant_invite_modal", a), g = i.useCallback(e => {
					var i, a, u;
					let d, {
						section: c,
						row: h
					} = e;
					if (c > 0) return;
					let g = n[h];
					switch (g.type) {
						case B.bm.FRIEND:
						case B.bm.DM:
							let m = g.item;
							return d = null != (i = s.includes(m.id)) && i, (0, l.jsx)(ei, {
								guild: t,
								user: m,
								isSelected: d,
								onToggle: r,
								disabled: o
							}, m.id);
						case B.bm.GROUP_DM:
							let p = g.item;
							return d = null != (a = s.includes(p.id)) && a, (0, l.jsx)(er, {
								channel: p,
								isSelected: d,
								onToggle: r,
								disabled: o
							}, p.id);
						case B.bm.CHANNEL:
							let v = g.item;
							return d = null != (u = s.includes(v.id)) && u, (0, l.jsx)(es, {
								channel: v,
								isSelected: d,
								onToggle: r,
								disabled: o
							}, v.id);
						default:
							return null
					}
				}, [t, n, s, r, o]), m = i.useCallback(() => 48, []);
				return 0 === n.length ? (0, l.jsx)(h.OZU, {
					children: J.intl.string(J.t.ojoWgY)
				}) : (0, l.jsx)(d.bG, {
					navigator: c,
					children: (0, l.jsx)(d.SJ, {
						children: e => {
							var t, n, {
									ref: i
								} = e,
								r = function(e, t) {
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
								}(e, ["ref"]);
							return (0, l.jsx)(h.YAO, (t = $({
								className: Q.recipientList,
								style: {
									"--custom-recipient-row-height": "".concat(48, "px")
								},
								scrollerRef: e => {
									null !== e && (a.current = e, i.current = e.getScrollerNode())
								}
							}, r), n = n = {
								sections: u,
								sectionHeight: 0,
								renderRow: g,
								rowHeight: m
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
					})
				})
			}

			function eo(e) {
				let {
					transitionState: t,
					onClose: n,
					guild: r,
					channel: a,
					guildScheduledEvent: d,
					source: p,
					streamUserId: x,
					applicationId: _,
					analyticsLocation: T
				} = e, y = null;
				null != _ ? y = X.Iq.EMBEDDED_APPLICATION : null != x && (y = X.Iq.STREAM);
				let C = (0, E.Z)({
						guildId: r.id
					}),
					[A, R] = i.useState([]),
					[U, F] = i.useState(""),
					{
						current: ee
					} = i.useRef($({}, en, null == C ? {} : {
						max_age: C
					}, null == _ ? {} : {
						target_application_id: _
					}, null == y ? {} : {
						target_type: y
					}, null == x ? {} : {
						target_user_id: x
					})),
					[et, el] = i.useState(ee),
					[ei, er] = i.useState(!1),
					[es, eo] = i.useState(!1),
					[eu, ed] = i.useState(null),
					ec = i.useRef(null),
					eh = i.useRef(null),
					{
						analyticsLocations: eg
					} = (0, j.ZP)(f.Z.INSTANT_INVITE_MODAL),
					em = i.useCallback(e => {
						var t;
						null == (t = eh.current) || t.scrollTo({
							to: 0
						}), F(e), (0, m.C)(e)
					}, [F]),
					ep = i.useCallback(() => {
						em("")
					}, [em]),
					ev = i.useCallback(e => el(t => $({}, t, e)), [el]),
					eI = i.useCallback(() => {
						R([]), el(ee), ep(), eo(!1), ed(null)
					}, [ep, ee]),
					ex = i.useCallback(e => {
						R(t => {
							let n = t.findIndex(t => t === e);
							if (-1 === n) return [e, ...t];
							let l = [...t];
							return l.splice(n, 1), l
						})
					}, []),
					ef = i.useMemo(() => {
						var e;
						return null != a ? a : null != (e = w.ZP.getDefaultChannel(r.id, !0, K.Plq.CREATE_INSTANT_INVITE)) ? e : null
					}, [r.id, a]),
					ej = !(0, c.e7)([k.Z], () => null != ef && k.Z.can(K.Plq.CREATE_INSTANT_INVITE, ef), [ef]) && !(null == ef ? void 0 : ef.isGuildVocal()),
					eN = (0, N.Z)(ef),
					e_ = (null == ef ? void 0 : ef.type) === K.d4z.GUILD_VOICE && !ej && !eN,
					{
						enabled: eE
					} = O.o.useExperiment({
						guildId: r.id,
						location: "instant_invite_modal"
					}, {
						autoTrackExposure: e_
					}),
					{
						canCreateApplicationBypassInvites: eS,
						isManualApprovalGuild: eb
					} = (0, H.R)(r),
					eT = eE && e_,
					{
						rows: eO,
						showFriends: ey,
						initialCounts: eC
					} = (0, Y.B)({
						guild: r,
						inviteChannel: ef,
						inviteTargetType: y,
						applicationId: _
					});
				(0, v.ZP)(() => {
					switch (ey && V.default.track(K.rMx.INVITE_SUGGESTION_OPENED, {
							location: p,
							num_suggestions: eO.length,
							num_friends: eC.numFriends,
							num_dms: eC.numDms,
							num_group_dms: eC.numGroupDms,
							guild_id: r.id,
							application_id: _
						}), y) {
						case X.Iq.EMBEDDED_APPLICATION:
							V.default.track(K.rMx.OPEN_MODAL, {
								type: "Instant Invite Modal",
								source: p,
								location: T,
								application_id: _
							});
							break;
						case X.Iq.STREAM:
							if (null == x) break;
							let e = Z.Z.getStreamForUser(x, r.id),
								t = (0, b.L2)(e, L.Z);
							V.default.track(K.rMx.OPEN_MODAL, {
								type: "Send Stream Invite",
								source: p,
								location: T,
								other_user_id: x,
								application_id: null != t ? t.id : null,
								application_name: null != t ? t.name : null,
								game_id: null != t ? t.id : null
							});
							break;
						default:
							V.default.track(K.rMx.OPEN_MODAL, {
								type: "Instant Invite Modal",
								source: p,
								location: T
							})
					}
				});
				let eP = i.useCallback(() => {
						eI(), n()
					}, [eI, n]),
					eZ = i.useCallback(async () => {
						var e, t, n, l;
						er(!0);
						let i = null,
							s = null != (e = P.Z.getStageInstanceByChannel(null == ef ? void 0 : ef.id)) ? e : null;
						if (ej && null != r.vanityURLCode) i = r.vanityURLCode;
						else if ((null == s ? void 0 : s.invite_code) != null) i = s.invite_code;
						else if (null != ef) {
							let e = null != (t = M.Z.getInvite(ef.id, {
								targetType: et.target_type,
								targetUserId: et.target_user_id,
								targetApplicationId: et.target_application_id
							})) ? t : null;
							null !== e && (0, z.m)(e, et) || (await g.ZP.createInvite(ef.id, et, p), e = null != (n = M.Z.getInvite(ef.id, {
								targetType: et.target_type,
								targetUserId: et.target_user_id,
								targetApplicationId: et.target_application_id
							})) ? n : null), i = null != (l = null == e ? void 0 : e.code) ? l : null
						}
						return null == i ? null : (er(!1), (0, G.tV)({
							baseCode: i,
							guildScheduledEventId: null == d ? void 0 : d.id
						}))
					}, [ef, ej, r, et, p, null == d ? void 0 : d.id]),
					ew = i.useCallback(async () => {
						if (es || ei) return;
						eo(!0), ed(null);
						let e = !1;
						try {
							let t = await eZ();
							o()(null != t, "Invite key could not be determined.");
							let n = eO.filter(e => A.includes(e.item.id)).map(e => {
								var n;
								let l, i = eg[0],
									r = null != (n = D.Z.getSelectedInviteMetadata(e)) ? n : null;
								switch (e.type) {
									case B.bm.FRIEND:
									case B.bm.DM:
										l = {
											type: I.m.USER,
											user: e.item,
											inviteKey: t,
											location: i,
											suggested: r
										};
										break;
									case B.bm.CHANNEL:
										l = {
											type: I.m.CHANNEL,
											channel: e.item,
											inviteKey: t,
											location: i,
											suggested: r
										};
										break;
									case B.bm.GROUP_DM:
										l = {
											type: I.m.GROUP_DM,
											channel: e.item,
											inviteKey: t,
											location: i,
											suggested: r
										};
										break;
									default:
										return Promise.resolve()
								}
								return new Promise((e, t) => {
									I.Z.enqueue(l, n => {
										n ? e() : t()
									})
								})
							});
							if (await Promise.allSettled(n), n.length > 0) {
								let e = A.length > 1 ? J.intl.string(J.t["4pl/xs"]) : J.intl.string(J.t.sVwWdX);
								(0, h.showToast)((0, h.createToast)(e, h.ToastType.INVITE))
							}
							e = !0
						} catch (e) {
							ed(e), eo(!1)
						}
						e && eP()
					}, [es, ei, eo, A, eO, eZ, eg, eP]),
					eA = es || ei;
				return (0, l.jsx)(j.Gt, {
					value: eg,
					children: (0, l.jsxs)(h.Y0X, {
						className: s()(Q.modal, {
							[Q.disabled]: eA
						}),
						transitionState: t,
						impression: {
							impressionName: u.ImpressionNames.GUILD_INVITE,
							impressionProperties: {
								invite_guild_id: r.id,
								invite_channel_id: null == ef ? void 0 : ef.id
							}
						},
						parentComponent: "InstantInviteRefreshModal",
						children: [(0, l.jsxs)(h.xBx, {
							className: Q.header,
							children: [(0, l.jsxs)("div", {
								className: Q.titleLine,
								children: [(0, l.jsx)("div", {
									className: Q.title,
									children: (0, l.jsx)(h.X6q, {
										variant: "heading-lg/semibold",
										children: J.intl.string(J.t.BN75l5)
									})
								}), (0, l.jsx)(h.olH, {
									className: Q.closeButton,
									onClick: eP
								})]
							}), (0, l.jsx)(h.E1j, {
								ref: ec,
								size: h.E1j.Sizes.MEDIUM,
								query: U,
								onChange: em,
								onClear: ep,
								placeholder: J.intl.string(J.t["5h0QOD"]),
								"aria-label": J.intl.string(J.t["5h0QOD"]),
								autoFocus: !0
							})]
						}), (0, l.jsx)(h.hzk, {
							className: s()(Q.body, {
								[Q.empty]: 0 === eO.length
							}),
							children: (0, l.jsx)(ea, {
								guild: r,
								rows: eO,
								onToggle: ex,
								scrollerRef: eh,
								selection: A,
								disabled: eA
							})
						}), (0, l.jsxs)(h.mzw, {
							direction: S.Z.Direction.VERTICAL,
							className: Q.footer,
							children: [(0, l.jsx)(q.f, {
								className: Q.footerContent,
								guild: r,
								channel: null != a ? a : null,
								applicationId: null != _ ? _ : null,
								getInviteKey: eZ,
								sendInvite: ew,
								canUseVanityURL: ej,
								disabled: eA,
								hasSelection: A.length > 0,
								options: et,
								setOptions: ev,
								isGuestInviteAllowed: eT,
								isTemporaryInviteAllowed: !eT && !eb,
								isApplicationBypassAllowed: eS,
								setError: ed,
								analyticsLocation: eg[0]
							}), null !== eu && (0, l.jsx)(W.W, {
								guild: r,
								error: eu,
								onClose: eP
							})]
						})]
					})
				})
			}
		},
		948851: function(e, t, n) {
			n.d(t, {
				Z: () => h
			});
			var l = n(255367);
			n(73800);
			var i = n(533800),
				r = n(481060),
				s = n(630388),
				a = n(971130),
				o = n(388032),
				u = n(842515);
			let d = a.ZP.getMaxAgeOptions,
				c = a.ZP.getMaxUsesOptions;

			function h(e) {
				var t;
				let {
					shouldHideTemporaryInviteToggle: n,
					maxAge: a,
					maxUses: h,
					temporary: g,
					onGenerateNewLink: m,
					onToggleTemporary: p,
					onSelectMaxAge: v,
					onSelectMaxUses: I,
					isGuestInviteCreationToggleEnabled: x,
					inviteFlags: f,
					onSetInviteFlags: j
				} = e, N = d.find(e => e.value === a), _ = c.find(e => e.value === h);
				return (0, l.jsx)("div", {
					className: u.settingsContent,
					children: (0, l.jsxs)("form", {
						onSubmit: m,
						className: u.settingsForm,
						children: [(0, l.jsx)(r.xJW, {
							title: o.intl.string(o.t["60qw29"]),
							children: (0, l.jsx)(r.VcW, {
								options: d,
								value: null != (t = null == N ? void 0 : N.value) ? t : d[0].value,
								onChange: v
							})
						}), (0, l.jsx)(r.xJW, {
							title: o.intl.string(o.t.jDqWHR),
							children: (0, l.jsx)(r.VcW, {
								options: c,
								value: null == _ ? void 0 : _.value,
								onChange: I
							})
						}), !n && (0, l.jsx)(r.xJW, {
							children: (0, l.jsx)(r.j7V, {
								className: u.switch,
								value: g,
								onChange: e => p(e),
								note: o.intl.string(o.t.UN5IRU),
								hideBorder: !0,
								children: (0, l.jsx)(r.Text, {
									variant: "text-sm/normal",
									children: o.intl.string(o.t["wE+9dn"])
								})
							})
						}), x && (0, l.jsx)(r.xJW, {
							children: (0, l.jsx)(r.j7V, {
								className: u.switch,
								value: (0, s.yE)(f, i.$.IS_GUEST_INVITE),
								onChange: e => j((0, s.mB)(f, i.$.IS_GUEST_INVITE, e)),
								note: o.intl.string(o.t["/FeTKy"]),
								hideBorder: !0,
								children: (0, l.jsx)(r.Text, {
									variant: "text-sm/normal",
									children: o.intl.string(o.t.siexRU)
								})
							})
						})]
					})
				})
			}
		},
		868728: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var l = n(255367),
				i = n(73800),
				r = n(780384),
				s = n(755721),
				a = n(481060),
				o = n(388032);

			function u(e) {
				let {
					onConfirm: t,
					onDismiss: n,
					theme: u
				} = e;
				return (0, l.jsxs)(i.Fragment, {
					children: [(0, l.jsx)(a.zxk, {
						variant: "primary",
						text: o.intl.string(o.t.pz1lRE),
						onClick: t
					}), (0, l.jsx)(s.zx, {
						look: s.zx.Looks.LINK,
						color: (0, r.ap)(u) ? s.zx.Colors.PRIMARY : s.zx.Colors.WHITE,
						onClick: n,
						children: o.intl.string(o.t["ETE/oK"])
					})]
				})
			}
		},
		585385: function(e, t, n) {
			n.d(t, {
				D: () => g
			}), n(997841);
			var l = n(255367);
			n(73800);
			var i = n(120356),
				r = n.n(i),
				s = n(481060),
				a = n(410030),
				o = n(948851),
				u = n(868728),
				d = n(388032),
				c = n(821022),
				h = n(20493);
			let g = e => {
				let {
					handleDone: t,
					headerId: n,
					modalState: i,
					shouldHideTemporaryInviteToggle: g,
					onGenerateNewLink: m,
					onToggleTemporary: p,
					onSelectMaxAge: v,
					onSelectMaxUses: I,
					isGuestInviteCreationToggleEnabled: x,
					onSetInviteFlags: f
				} = e, j = (0, a.ZP)(), {
					maxAge: N,
					maxUses: _,
					temporary: E,
					flags: S
				} = i;
				return (0, l.jsxs)(l.Fragment, {
					children: [(0, l.jsxs)(s.xBx, {
						children: [(0, l.jsx)("div", {
							className: c.closeButton,
							children: (0, l.jsx)(s.olH, {
								onClick: t
							})
						}), (0, l.jsx)("div", {
							className: c.headerContainer,
							children: (0, l.jsx)(s.vwX, {
								id: n,
								tag: "h2",
								className: r()(h.marginReset, c.headerCloseButtonSpacing, c.headerText),
								children: d.intl.string(d.t.Atdlys)
							})
						})]
					}), (0, l.jsx)(o.Z, {
						shouldHideTemporaryInviteToggle: g,
						maxAge: N,
						maxUses: _,
						temporary: E,
						onToggleTemporary: p,
						onSelectMaxAge: v,
						onSelectMaxUses: I,
						onGenerateNewLink: m,
						isGuestInviteCreationToggleEnabled: x,
						onSetInviteFlags: f,
						inviteFlags: S
					}), (0, l.jsx)(s.mzw, {
						className: c.settingsFooter,
						children: (0, l.jsx)(u.Z, {
							theme: j,
							onConfirm: () => {
								m(), t()
							},
							onDismiss: t
						})
					})]
				})
			}
		},
		462376: function(e, t, n) {
			n.d(t, {
				d: () => E,
				k: () => _
			}), n(388685);
			var l = n(255367),
				i = n(73800),
				r = n(780384),
				s = n(755721),
				a = n(481060),
				o = n(630810),
				u = n(43267),
				d = n(933557),
				c = n(210887),
				h = n(430824),
				g = n(751771),
				m = n(699516),
				p = n(594174),
				v = n(768581),
				I = n(624138),
				x = n(51144),
				f = n(388032),
				j = n(821022);

			function N(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			let _ = 44;
			class E extends i.Component {
				shouldComponentUpdate(e, t) {
					return this.state.sending !== t.sending || this.state.invited !== t.invited || this.state.hovered !== t.hovered || this.props.user !== e.user || this.props.channel !== e.channel
				}
				renderUserOrChannel() {
					let e, t, n, {
						user: i,
						channel: r
					} = this.props;
					if (null != i) t = i.getAvatarURL(null == r ? void 0 : r.guild_id, 32), n = x.ZP.getName(i);
					else if (null != r && (t = (0, u.x)(r), n = (0, d.F6)(r, p.default, m.Z), null == t && null != r.guild_id)) {
						let n = h.Z.getGuild(r.guild_id);
						null != n && (null != n.icon ? t = v.ZP.getGuildIconURL({
							id: r.guild_id,
							icon: n.icon,
							size: 32
						}) : e = (0, I.Zg)(n.name))
					}
					if (null == t || null == n)
						if (null != e) return (0, l.jsx)(a.Text, {
							variant: "text-md/medium",
							className: j.acronym,
							"aria-hidden": !0,
							children: e
						});
						else return null;
					return (0, l.jsx)(a.qEK, {
						src: t,
						"aria-label": n,
						size: a.EFr.SIZE_32,
						className: j.inviteRowAvatar
					})
				}
				render() {
					let e, {
							user: t,
							channel: n
						} = this.props,
						{
							sending: i,
							invited: a,
							hovered: o
						} = this.state;
					return e = a ? (0, l.jsx)(s.zx, {
						look: s.zx.Looks.LINK,
						size: s.zx.Sizes.SMALL,
						disabled: !0,
						color: (0, r.wj)(c.Z.theme) ? s.zx.Colors.WHITE : s.zx.Colors.BRAND,
						children: f.intl.string(f.t["dVT14+"])
					}) : (0, l.jsx)(s.zx, {
						color: s.zx.Colors.GREEN,
						look: o ? s.zx.Looks.FILLED : s.zx.Looks.OUTLINED,
						className: j.inviteRowButton,
						size: s.zx.Sizes.SMALL,
						submitting: i,
						onClick: this.handleClickInvite,
						children: f.intl.string(f.t.jYnGPD)
					}), (0, l.jsxs)("div", {
						className: j.inviteRow,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave,
						children: [(0, l.jsxs)("div", {
							className: j.inviteRowInfo,
							children: [this.renderUserOrChannel(), (0, l.jsxs)("div", {
								className: j.inviteRowName,
								children: [x.ZP.getName(t), null != n ? (0, d.F6)(n, p.default, m.Z, !0) : null]
							})]
						}), e]
					})
				}
				constructor(...e) {
					super(...e), N(this, "state", {
						sending: !1,
						invited: !1,
						hovered: !1
					}), N(this, "handleMouseEnter", () => {
						this.setState({
							hovered: !0
						})
					}), N(this, "handleMouseLeave", () => {
						this.setState({
							hovered: !1
						})
					}), N(this, "getSuggestedProps", () => {
						var e;
						let {
							row: t
						} = this.props;
						return null != (e = null != t ? g.Z.getSelectedInviteMetadata(t) : null) ? e : null
					}), N(this, "handleClickInvite", () => {
						let {
							user: e,
							channel: t,
							inviteKey: n,
							location: l
						} = this.props;
						null != n && (null != t ? (this.setState({
							sending: !0
						}), o.Z.enqueue({
							type: o.m.GROUP_DM,
							channel: t,
							inviteKey: n,
							location: l,
							suggested: this.getSuggestedProps()
						}, e => {
							this.setState({
								sending: !1,
								invited: e
							})
						})) : null != e && (this.setState({
							sending: !0
						}), o.Z.enqueue({
							type: o.m.USER,
							user: e,
							inviteKey: n,
							location: l,
							suggested: this.getSuggestedProps()
						}, e => {
							this.setState({
								sending: !1,
								invited: e
							})
						})))
					})
				}
			}
		},
		895976: function(e, t, n) {
			n.d(t, {
				B: () => d
			}), n(388685);
			var l = n(73800),
				i = n(442837),
				r = n(247272),
				s = n(751771),
				a = n(938475),
				o = n(245335),
				u = n(981631);

			function d(e) {
				let {
					guild: t,
					inviteChannel: n,
					inviteTargetType: d,
					applicationId: c
				} = e, [h, g, m, p] = (0, i.Wu)([s.Z, a.ZP], () => [s.Z.getInviteSuggestionRows(), s.Z.getTotalSuggestionsCount() >= 1, s.Z.getInitialCounts(), null == n ? null : a.ZP.getVoiceStatesForChannel(n)], [n]), v = l.useMemo(() => {
					let e = new Set;
					return d === o.Iq.STREAM && null != p && p.forEach(t => {
						let {
							user: n
						} = t;
						e.add(n.id)
					}), e
				}, [n]);
				return l.useEffect(() => {
					(0, r.x)({
						omitUserIds: v,
						guild: t,
						channel: n,
						applicationId: c,
						inviteTargetType: d
					}).catch(u.VqG)
				}, [v, t, n, c, d]), {
					rows: h,
					showFriends: g,
					initialCounts: m
				}
			}
		},
		448486: function(e, t, n) {
			n.d(t, {
				_: () => u
			});
			var l = n(73800),
				i = n(442837),
				r = n(594174),
				s = n(823379),
				a = n(51144),
				o = n(388032);

			function u(e) {
				let t = (0, i.Wu)([r.default], () => e.recipients.map(e => r.default.getUser(e)).filter(s.lm).map(e => a.ZP.getName(e)));
				return l.useMemo(() => {
					if ("" === e.name) return null;
					if (0 === t.length) return null;
					if (1 === t.length) return o.intl.formatToPlainString(o.t["J+Wpsr"], {
						first: t[0]
					});
					if (2 === t.length) return o.intl.formatToPlainString(o.t.gwRP0d, {
						first: t[0],
						second: t[1]
					});
					if (3 === t.length) return o.intl.formatToPlainString(o.t.QDB5en, {
						first: t[0],
						second: t[1],
						third: t[2]
					});
					let n = t.length - 3;
					return o.intl.formatToPlainString(o.t.VYfueX, {
						first: t[0],
						second: t[1],
						third: t[2],
						count: n
					})
				}, [e, t])
			}
		},
		751771: function(e, t, n) {
			let l, i, r, s, a, o;
			n.d(t, {
				Z: () => P
			}), n(388685), n(642613);
			var u, d, c, h = n(442837),
				g = n(570140),
				m = n(823385),
				p = n(752048),
				v = n(823379),
				I = n(971130),
				x = n(592125),
				f = n(496675),
				j = n(699516),
				N = n(981631),
				_ = n(245335);
			let E = new Set,
				S = [],
				b = new Map,
				T = {
					numFriends: 0,
					numDms: 0,
					numGroupDms: 0,
					numChannels: 0
				};

			function O(e) {
				let t = new Set,
					n = null == r || o === _.Iq.EMBEDDED_APPLICATION ? void 0 : r.id,
					l = (0, I.rh)(E, n);
				for (let e of (null == l || j.Z.isBlockedOrIgnored(l.id) || t.add(l.id), p.Z.getUserAffinities())) t.add(e.otherUserId);
				let i = new Set;
				return o === _.Iq.EMBEDDED_APPLICATION && m.Z.getChannelHistory().map(e => x.Z.getChannel(e)).filter(v.lm).filter(e => e.type === N.d4z.GUILD_TEXT).filter(e => f.Z.can(N.Plq.SEND_MESSAGES, e)).slice(0, 3).forEach(e => i.add(e.id)), (0, I.an)({
					query: e,
					omitUserIds: E,
					suggestedUserIds: t,
					maxRowsWithoutQuery: 100,
					omitGuildId: n,
					suggestedChannelIds: i,
					inviteTargetType: o
				})
			}

			function y(e) {
				S = e, b = new Map, e.forEach((e, t) => {
					b.set(e, {
						index: t
					})
				})
			}
			class C extends(u = h.ZP.Store) {
				initialize() {
					this.waitFor(j.Z, p.Z)
				}
				getInviteSuggestionRows() {
					return S
				}
				getTotalSuggestionsCount() {
					return l
				}
				getInitialCounts() {
					return T
				}
				getSelectedInviteMetadata(e) {
					let t = b.get(e),
						n = p.Z.getUserAffinities().map(e => e.otherUserId);
					return null != t ? {
						rowNum: t.index,
						isAffinitySuggestion: e.isSuggested,
						numTotal: S.length,
						numAffinityConnections: n.length,
						isFiltered: i
					} : null
				}
			}
			c = "InviteSuggestionsStore", (d = "displayName") in C ? Object.defineProperty(C, d, {
				value: c,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : C[d] = c;
			let P = new C(g.Z, {
				LOAD_INVITE_SUGGESTIONS: function(e) {
					let {
						omitUserIds: t,
						guild: n,
						channel: u,
						applicationId: d,
						inviteTargetType: c
					} = e;
					r = null != u ? n : null, s = u, a = d, o = c, E = new Set([...t, ...j.Z.getBlockedOrIgnoredIDs(), ...(0, I.Sz)({
						channel: s,
						applicationId: a,
						inviteTargetType: c
					})]), i = !1;
					let {
						rows: h,
						counts: g
					} = O("");
					y(h), T = g, l = S.length
				},
				INVITE_SUGGESTIONS_SEARCH: function(e) {
					let {
						query: t
					} = e;
					i = "" !== t;
					let {
						rows: n
					} = O(t);
					n.sort((e, t) => null != e.score && null != t.score ? e.score - t.score : 0), y(n)
				}
			})
		}
	}
]);
//# sourceMappingURL=7ee837f1152fc3f3.js.map