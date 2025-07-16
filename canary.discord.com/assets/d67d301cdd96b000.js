"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["46653"], {
		210913: function(t) {
			t.exports = "/assets/3b11031474fb64a0.svg"
		},
		526705: function(t) {
			t.exports = "/assets/6ad5446be34bb27a.svg"
		},
		980568: function(t, e, i) {
			i.d(e, {
				Z: () => o
			});
			var n = i(570140),
				r = i(626135),
				s = i(981631);
			let o = {
				dismissForApplicationId(t) {
					n.Z.dispatch({
						type: "ACTIVITY_INVITE_EDUCATION_DISMISS",
						key: t,
						value: !0
					}), r.default.track(s.rMx.CLOSE_TUTORIAL, {
						tutorial: "activity-invite-nux-inline",
						application_id: t,
						acknowledged: !0
					})
				}
			}
		},
		738619: function(t, e, i) {
			i.d(e, {
				ZP: () => k,
				d7: () => U,
				iD: () => M
			}), i(539854), i(388685);
			var n = i(255367),
				r = i(73800),
				s = i(120356),
				o = i.n(s),
				l = i(392711),
				a = i.n(l),
				d = i(442837),
				u = i(692547),
				c = i(481060),
				h = i(980568),
				p = i(560768),
				g = i(812206),
				f = i(405701),
				m = i(843693),
				v = i(246642),
				O = i(921227),
				b = i(314897),
				S = i(699516),
				y = i(885110),
				E = i(111583),
				Z = i(594174),
				I = i(451478),
				P = i(626135),
				w = i(823379),
				T = i(5192),
				x = i(981631),
				j = i(388032),
				C = i(486850);

			function _(t, e, i) {
				return e in t ? Object.defineProperty(t, e, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = i, t
			}

			function A(t) {
				for (var e = 1; e < arguments.length; e++) {
					var i = null != arguments[e] ? arguments[e] : {},
						n = Object.keys(i);
					"function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
						return Object.getOwnPropertyDescriptor(i, t).enumerable
					}))), n.forEach(function(e) {
						_(t, e, i[e])
					})
				}
				return t
			}
			let N = [];
			class F extends r.PureComponent {
				componentDidMount() {
					this.timeout = setTimeout(() => {
						this.setState({
							fadeIn: !0
						}), this.timeout = null, this.logShownEventIfNeeded()
					}, 100)
				}
				componentDidUpdate() {
					this.logShownEventIfNeeded()
				}
				logShownEventIfNeeded() {
					let t = this.props.activity.application_id;
					null != t && -1 === N.indexOf(t) && (P.default.track(x.rMx.SHOW_TUTORIAL, {
						tutorial: "activity-invite-nux-inline",
						application_id: t
					}), N.push(t))
				}
				componentWillUnmount() {
					null !== this.timeout && clearTimeout(this.timeout)
				}
				render() {
					let {
						activity: t
					} = this.props;
					return (0, n.jsxs)("div", {
						className: o()(C.activityInviteEducation, {
							[C.activityInviteEducationFadeIn]: this.state.fadeIn
						}),
						children: [(0, n.jsx)("div", {
							className: C.activityInviteEducationArrow
						}), (0, n.jsx)("span", {
							children: j.intl.format(j.t["i/MoCg"], {
								game: t.name,
								dismissOnClick: this.handleDismissInviteEducation
							})
						})]
					})
				}
				constructor(...t) {
					super(...t), _(this, "state", {
						fadeIn: !1
					}), _(this, "timeout", null), _(this, "handleDismissInviteEducation", () => {
						let {
							activity: t
						} = this.props;
						null != t && null != t.application_id && h.Z.dismissForApplicationId(t.application_id)
					})
				}
			}

			function D(t) {
				let {
					activityInviteEducationActivity: e,
					isFocused: i,
					typingUsers: r,
					className: s,
					channel: l,
					isThreadCreation: a,
					renderDots: d,
					poggermodeEnabled: u,
					isComboing: h,
					isInTextChannel: p
				} = t, {
					rateLimitPerUser: g
				} = l;
				if (0 === r.length && !(g > 0) && !h) return null != e ? (0, n.jsx)(F, {
					activity: e,
					isFocused: i
				}) : null;
				let [m, O, b] = r, S = "";
				return 1 === r.length ? S = j.intl.format(j.t.lJ9sZW, {
					a: m
				}) : 2 === r.length ? S = j.intl.format(j.t.rB0CUV, {
					a: m,
					b: O
				}) : 3 === r.length ? S = j.intl.format(j.t.StKTho, {
					a: m,
					b: O,
					c: b
				}) : r.length > 3 && (S = j.intl.string(j.t.uVDhqa)), (0, n.jsxs)("div", {
					className: o()(C.typing, {
						"stop-animation": !i,
						[C.isComboing]: u && h,
						[C.inTextChannel]: p
					}, s),
					children: [(0, n.jsxs)("div", {
						className: C.typingDots,
						children: [r.length > 0 && !1 !== d && (0, n.jsx)(c.bbz, {
							className: C.ellipsis,
							dotRadius: 3.5,
							themed: !0
						}), (0, n.jsx)("span", {
							className: C.text,
							"aria-live": "polite",
							"aria-atomic": !0,
							children: S
						})]
					}), (0, n.jsx)(f.Z, {
						channel: l,
						isThreadCreation: a
					}), u && h && (0, n.jsx)(v.Z, {
						channelId: l.id
					})]
				})
			}

			function M(t) {
				let e = (0, d.e7)([E.Z], () => E.Z.getTypingUsers(t.id)),
					i = (0, d.e7)([Z.default], () => Z.default.getCurrentUser());
				return a()(e).keys().filter(t => t !== (null == i ? void 0 : i.id)).reject(t => S.Z.isBlockedOrIgnored(t)).map(t => Z.default.getUser(t)).filter(w.lm).map(e => T.ZP.getName(t.guild_id, t.id, e)).value()
			}

			function U(t) {
				let e = (0, d.e7)([y.Z], () => y.Z.findActivity(t => null != t.application_id));
				return (0, d.e7)([O.Z, g.Z, S.Z], () => (0, p.Z)(t, e, O.Z, g.Z, S.Z)) ? e : null
			}

			function k(t) {
				var e, i, {
						channel: r,
						isThreadCreation: s = !1
					} = t,
					o = function(t, e) {
						if (null == t) return {};
						var i, n, r = function(t, e) {
							if (null == t) return {};
							var i, n, r = {},
								s = Object.keys(t);
							for (n = 0; n < s.length; n++) i = s[n], e.indexOf(i) >= 0 || (r[i] = t[i]);
							return r
						}(t, e);
						if (Object.getOwnPropertySymbols) {
							var s = Object.getOwnPropertySymbols(t);
							for (n = 0; n < s.length; n++) i = s[n], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (r[i] = t[i])
						}
						return r
					}(t, ["channel", "isThreadCreation"]);
				let l = (0, d.e7)([m.ZP, b.default], () => m.ZP.getUserCombo(b.default.getId(), r.id)),
					a = M(r),
					h = (e = A({}, o), i = i = {
						baseTextColor: (0, c.dQu)(u.Z.colors.INTERACTIVE_NORMAL).hex(),
						activeTextColor: (0, c.dQu)(u.Z.colors.INTERACTIVE_NORMAL).hex(),
						activityInviteEducationActivity: U(r),
						typingUsers: s ? [] : a,
						isFocused: (0, d.e7)([I.Z], () => I.Z.isFocused()),
						guildId: r.guild_id,
						isComboing: null != l,
						channel: r,
						isThreadCreation: s
					}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : (function(t, e) {
						var i = Object.keys(t);
						if (Object.getOwnPropertySymbols) {
							var n = Object.getOwnPropertySymbols(t);
							i.push.apply(i, n)
						}
						return i
					})(Object(i)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
					}), e);
				return (0, n.jsx)(D, A({}, h))
			}
		},
		560768: function(t, e, i) {
			i.d(e, {
				Z: () => o
			}), i(997841);
			var n = i(630388),
				r = i(620662),
				s = i(981631);

			function o(t, e, i, o, l) {
				let a = null == e ? void 0 : e.application_id;
				if (null == t || null == e || !(0, r.Z)(e, s.xjy.JOIN) || null == a) return !1;
				let d = o.getApplication(a);
				return !(null == d || (0, n.yE)(d.flags, s.udG.EMBEDDED) || t.isPrivate() && l.isBlockedOrIgnored(t.getRecipientId())) && i.shouldShowEducation(a)
			}
		},
		11769: function(t, e, i) {
			i.d(e, {
				k: () => s
			});
			var n = i(70956),
				r = i(388032);

			function s(t) {
				if (t >= n.Z.Seconds.HOUR) {
					let e = Math.floor(t / n.Z.Seconds.HOUR),
						i = Math.floor((t - e * n.Z.Seconds.HOUR) / n.Z.Seconds.MINUTE),
						s = t - e * n.Z.Seconds.HOUR - i * n.Z.Seconds.MINUTE;
					return r.intl.formatToPlainString(r.t["3hz51N"], {
						hours: e,
						minutes: i,
						seconds: s
					})
				}
				if (!(t >= 60)) return r.intl.formatToPlainString(r.t.IWntYm, {
					seconds: t
				});
				{
					let e = Math.floor(t / 60);
					return r.intl.formatToPlainString(r.t.sY3wlJ, {
						minutes: e,
						seconds: t - 60 * e
					})
				}
			}
		},
		405701: function(t, e, i) {
			i.d(e, {
				Z: () => b
			}), i(388685);
			var n = i(255367),
				r = i(73800),
				s = i(913527),
				o = i.n(s),
				l = i(442837),
				a = i(481060),
				d = i(11769),
				u = i(338390),
				c = i(496675),
				h = i(300429),
				p = i(585483),
				g = i(70956),
				f = i(981631),
				m = i(388032),
				v = i(873007);

			function O(t) {
				let e, {
						isEnabled: i,
						rateLimitPerUser: s,
						isBypassSlowmode: l,
						slowmodeCooldownGuess: c
					} = t,
					[h, O] = r.useState(!1);
				r.useEffect(() => {
					function t() {
						O(!0), setTimeout(() => {
							O(!1)
						}, 1e3)
					}
					return p.S.subscribe(f.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, t), () => {
						p.S.unsubscribe(f.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, t)
					}
				}, []);
				let b = (0, u.Z)("SlowmodeIndicator");
				if (!i) return null;
				let S = (0, d.k)(s);
				if (!l && c > 0) {
					let t = o().duration(c);
					if (c > g.Z.Millis.HOUR) {
						let i = "".concat(t.minutes()).padStart(2, "0"),
							n = "".concat(t.seconds()).padStart(2, "0");
						e = "".concat(t.hours(), ":").concat(i, ":").concat(n)
					} else {
						let i = "".concat(t.seconds()).padStart(2, "0");
						e = "".concat(t.minutes(), ":").concat(i)
					}
				} else e = l ? b ? m.intl.string(m.t["8+NidX"]) : m.intl.string(m.t.SSzXvb) : m.intl.string(m.t.Icu3bW);
				let y = b ? (0, n.jsxs)(a.Text, {
					className: v.cooldownText,
					variant: "text-xs/medium",
					color: h ? "text-danger" : "text-muted",
					tabularNumbers: !0,
					children: [(0, n.jsx)(a.ANZ, {
						size: "xxs",
						color: "currentColor",
						className: v.slowModeIcon
					}), e]
				}) : (0, n.jsxs)(a.Text, {
					className: v.cooldownText,
					variant: "text-sm/medium",
					color: h ? "text-danger" : "text-muted",
					tabularNumbers: !0,
					children: [e, (0, n.jsx)(a.ANZ, {
						size: "xs",
						color: "currentColor",
						className: v.slowModeIcon
					})]
				});
				return (0, n.jsx)(a.ua7, {
					text: S,
					children: t => {
						var e, i;
						return (0, n.jsx)("div", (e = function(t) {
							for (var e = 1; e < arguments.length; e++) {
								var i = null != arguments[e] ? arguments[e] : {},
									n = Object.keys(i);
								"function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
									return Object.getOwnPropertyDescriptor(i, t).enumerable
								}))), n.forEach(function(e) {
									var n;
									n = i[e], e in t ? Object.defineProperty(t, e, {
										value: n,
										enumerable: !0,
										configurable: !0,
										writable: !0
									}) : t[e] = n
								})
							}
							return t
						}({
							className: v.cooldownWrapper
						}, t), i = i = {
							children: y
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : (function(t, e) {
							var i = Object.keys(t);
							if (Object.getOwnPropertySymbols) {
								var n = Object.getOwnPropertySymbols(t);
								i.push.apply(i, n)
							}
							return i
						})(Object(i)).forEach(function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
						}), e))
					}
				})
			}

			function b(t) {
				let {
					channel: e,
					isThreadCreation: i = !1
				} = t, r = (0, l.e7)([h.Z], () => h.Z.getSlowmodeCooldownGuess(e.id, i ? h.S.CreateThread : h.S.SendMessage)), s = (0, l.e7)([c.Z], () => i ? c.Z.can(f.Plq.MANAGE_THREADS, e) : c.Z.can(f.Plq.MANAGE_CHANNELS, e) || c.Z.can(f.Plq.MANAGE_MESSAGES, e)), {
					rateLimitPerUser: o
				} = e;
				return (0, n.jsx)(O, {
					isEnabled: o > 0,
					rateLimitPerUser: o,
					isBypassSlowmode: s,
					slowmodeCooldownGuess: r
				})
			}
		},
		109434: function(t, e, i) {
			i.d(e, {
				H: () => b,
				v: () => S
			}), i(388685);
			var n = i(512722),
				r = i.n(n),
				s = i(97519),
				o = i(313361),
				l = i(697988),
				a = i(683860),
				d = i(731965),
				u = i(442837),
				c = i(592125),
				h = i(559241);

			function p(t, e, i) {
				return e in t ? Object.defineProperty(t, e, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = i, t
			}

			function g(t) {
				for (var e = 1; e < arguments.length; e++) {
					var i = null != arguments[e] ? arguments[e] : {},
						n = Object.keys(i);
					"function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
						return Object.getOwnPropertyDescriptor(i, t).enumerable
					}))), n.forEach(function(e) {
						p(t, e, i[e])
					})
				}
				return t
			}
			let f = new Set,
				m = {
					layoutType: o.X.LIST,
					sortOrder: a.z.CREATION_DATE,
					tagFilter: f,
					scrollPosition: 0,
					tagSetting: l.z.MATCH_SOME
				};
			class v {
				constructor(t, e) {
					p(this, "set", void 0), p(this, "get", void 0), p(this, "channelStates", void 0), p(this, "setChannelState", void 0), p(this, "getChannelState", void 0), p(this, "toggleTagFilter", void 0), p(this, "setTagFilter", void 0), p(this, "setSortOrder", void 0), p(this, "setLayoutType", void 0), p(this, "setTagSetting", void 0), p(this, "setScrollPosition", void 0), this.set = t, this.get = e, this.channelStates = {}, this.setChannelState = (t, e) => {
						let i = this.get(),
							n = this.getChannelState(t),
							r = g({}, i.channelStates);
						r[t] = g({}, n, e), (0, d.j)(() => this.set({
							channelStates: r
						}))
					}, this.getChannelState = t => {
						if (null == t) return m;
						let {
							channelStates: e
						} = this.get(), i = e[t];
						if (null == i) {
							let e = c.Z.getChannel(t);
							r()(null != e, "[Forum Channel Store] The channel should not be missing."), i = {
								layoutType: e.getDefaultLayout(),
								sortOrder: e.getDefaultSortOrder(),
								tagFilter: f,
								scrollPosition: 0,
								tagSetting: e.getDefaultTagSetting()
							}
						}
						return i
					}, this.toggleTagFilter = (t, e) => {
						let i = new Set(this.getChannelState(t).tagFilter);
						i.has(e) ? i.delete(e) : i.add(e), this.setTagFilter(t, i)
					}, this.setTagFilter = (t, e) => {
						this.setChannelState(t, {
							tagFilter: e
						}), h.Z.setFilterTagIds(e)
					}, this.setSortOrder = (t, e) => {
						this.setChannelState(t, {
							sortOrder: e
						}), h.Z.setSortOrder(e)
					}, this.setLayoutType = (t, e) => {
						this.setChannelState(t, {
							layoutType: e
						}), h.Z.setLayout(e)
					}, this.setTagSetting = (t, e) => {
						this.setChannelState(t, {
							tagSetting: e
						}), h.Z.setTagSetting(e)
					}, this.setScrollPosition = (t, e) => {
						this.setChannelState(t, {
							scrollPosition: e
						})
					}
				}
			}
			let O = (0, s.U)((t, e) => new v(t, e)),
				b = t => {
					let e = O();
					return null == (0, u.e7)([c.Z], () => c.Z.getChannel(t)) ? m : e.getChannelState(t)
				},
				S = () => O
		},
		470623: function(t, e, i) {
			i.d(e, {
				AF: () => S,
				oL: () => O,
				xH: () => b
			}), i(388685), i(781311);
			var n = i(255367),
				r = i(73800),
				s = i(512722),
				o = i.n(s),
				l = i(362383),
				a = i(731965),
				d = i(430742),
				u = i(752305),
				c = i(592125),
				h = i(703558),
				p = i(883429),
				g = i(228392);

			function f(t, e, i) {
				return e in t ? Object.defineProperty(t, e, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = i, t
			}
			class m {
				constructor(t, e, i) {
					var n, r, s;
					f(this, "channelId", void 0), f(this, "_set", void 0), f(this, "get", void 0), f(this, "editorHeight", void 0), f(this, "editorAdditionRowHeight", void 0), f(this, "listViewCardHeights", void 0), f(this, "cardHeightVersion", void 0), f(this, "nameError", void 0), f(this, "messageError", void 0), f(this, "appliedTags", void 0), f(this, "popoutOpen", void 0), f(this, "guidelinesOpen", void 0), f(this, "previewing", void 0), f(this, "onboardingExpanded", void 0), f(this, "submitting", void 0), f(this, "formOpen", void 0), f(this, "name", void 0), f(this, "textAreaState", void 0), f(this, "hasClickedForm", void 0), f(this, "titleFocused", void 0), f(this, "bodyFocused", void 0), f(this, "set", void 0), f(this, "setEditorHeight", void 0), f(this, "setEditorAdditionRowHeight", void 0), f(this, "setCardHeight", void 0), f(this, "setNameError", void 0), f(this, "setMessageError", void 0), f(this, "toggleAppliedTag", void 0), f(this, "setPopoutOpen", void 0), f(this, "setGuidelinesOpen", void 0), f(this, "setPreviewing", void 0), f(this, "setSubmitting", void 0), f(this, "setFormOpen", void 0), f(this, "setOnboardingExpanded", void 0), f(this, "setTitleFocused", void 0), f(this, "setBodyFocused", void 0), f(this, "setName", void 0), f(this, "setTextAreaState", void 0), f(this, "setHasClickedForm", void 0), f(this, "resetFormState", void 0), f(this, "setFormOpenFromUserAction", void 0), this.channelId = t, this._set = e, this.get = i, this.editorHeight = 64, this.editorAdditionRowHeight = 0, this.listViewCardHeights = {}, this.cardHeightVersion = 0, this.nameError = null, this.messageError = null, this.appliedTags = new Set, this.popoutOpen = !1, this.guidelinesOpen = !1, this.previewing = !1, this.onboardingExpanded = !1, this.submitting = !1, this.formOpen = !1, this.name = "", this.textAreaState = (0, u.eK)(""), this.hasClickedForm = !1, this.titleFocused = !1, this.bodyFocused = !1, this.set = t => {
						(0, a.j)(() => this._set(t))
					}, this.setEditorHeight = t => {
						this.set({
							editorHeight: t
						})
					}, this.setEditorAdditionRowHeight = t => {
						this.set({
							editorAdditionRowHeight: t
						})
					}, this.setCardHeight = (t, e) => {
						let {
							listViewCardHeights: i,
							cardHeightVersion: n
						} = this.get();
						i[t] !== e && (i[t] = e, this.set({
							cardHeightVersion: n + 1
						}))
					}, this.setNameError = t => {
						this.set({
							nameError: t
						})
					}, this.setMessageError = t => {
						this.set({
							messageError: t
						})
					}, this.toggleAppliedTag = t => {
						let {
							appliedTags: e
						} = this.get();
						(e = new Set(e)).has(t) ? e.delete(t) : e.add(t), this.set({
							appliedTags: e
						}), d.Z.changeThreadSettings(this.channelId, {
							appliedTags: e
						})
					}, this.setPopoutOpen = t => {
						this.set({
							popoutOpen: t
						})
					}, this.setGuidelinesOpen = t => {
						this.set({
							guidelinesOpen: t
						})
					}, this.setPreviewing = t => {
						this.set({
							previewing: t
						})
					}, this.setSubmitting = t => {
						this.set({
							submitting: t
						})
					}, this.setFormOpen = t => {
						this.set({
							formOpen: t
						}), p.Z.clearForumSearch(this.channelId)
					}, this.setOnboardingExpanded = t => {
						this.set({
							onboardingExpanded: t
						})
					}, this.setTitleFocused = t => {
						this.set({
							titleFocused: t
						})
					}, this.setBodyFocused = t => {
						this.set({
							bodyFocused: t
						})
					}, this.setName = t => {
						this.set({
							name: t
						}), d.Z.changeThreadSettings(this.channelId, {
							name: t
						})
					}, this.setTextAreaState = t => {
						this.set({
							textAreaState: t
						}), d.Z.saveDraft(this.channelId, t.textValue, h.d.FirstThreadMessage)
					}, this.setHasClickedForm = t => {
						this.set({
							hasClickedForm: t
						})
					}, this.resetFormState = () => {
						let t = c.Z.getChannel(this.channelId),
							e = null == t || null == t.template ? "" : t.template.trim();
						this.set({
							name: "",
							textAreaState: (0, u.eK)(e),
							appliedTags: new Set,
							hasClickedForm: !1
						}), p.Z.clearForumSearch(this.channelId)
					}, this.setFormOpenFromUserAction = () => {
						if (this.hasClickedForm) return;
						let t = c.Z.getChannel(this.channelId);
						null != t && (0, g.HR)({
							guildId: t.guild_id,
							channelId: this.channelId
						}), this.set({
							hasClickedForm: !0,
							formOpen: !0
						}), p.Z.clearForumSearch(this.channelId)
					};
					let o = c.Z.getChannel(t);
					if (null == o) return;
					let l = null != (n = h.Z.getThreadSettings(o.id)) ? n : {},
						m = null == o.template ? "" : o.template.trim(),
						v = h.Z.getDraft(o.id, h.d.FirstThreadMessage),
						O = (0, u.eK)(null != v && "" !== v.trim() ? v : m);
					this.name = null != (r = l.name) ? r : "", s = new Set(l.appliedTags), this.appliedTags = void 0 !== s ? s : new Set, this.formOpen = this.name.length > 0 && O.textValue.length > 0, this.textAreaState = O
				}
			}
			let v = r.createContext(null);

			function O(t) {
				let {
					children: e,
					channel: i
				} = t, s = r.useMemo(() => (0, l.F)((t, e) => new m(i.id, t, e)), [i]);
				return (0, n.jsx)(v.Provider, {
					value: s,
					children: e
				})
			}

			function b(t, e) {
				let i = r.useContext(v);
				return o()(null != i, "[useForumPostComposerStore] Context should not be null"), i(t, e)
			}

			function S() {
				let t = r.useContext(v);
				return o()(null != t, "[useForumPostComposerStore] Context should not be null"), t
			}
		},
		443877: function(t, e, i) {
			i.d(e, {
				Z: () => p
			}), i(388685);
			var n = i(442837),
				r = i(715903),
				s = i(71619),
				o = i(41776),
				l = i(665906),
				a = i(271383),
				d = i(607744),
				u = i(496675),
				c = i(432376),
				h = i(981631);

			function p(t) {
				var e, i;
				let p = null == t ? void 0 : t.guild_id,
					g = (0, n.e7)([d.Z], () => null == p || d.Z.canChatInGuild(p), [p]),
					f = (0, n.e7)([o.Z], () => null != p && o.Z.isLurking(p), [p]),
					m = (0, n.e7)([a.ZP], () => null != p && a.ZP.isCurrentUserGuest(p), [p]),
					v = (0, n.e7)([u.Z], () => g && u.Z.can(h.Plq.ADD_REACTIONS, t), [g, t]),
					O = (0, r.ux)(p),
					[, b] = (0, s.AB)(p),
					S = (0, l.$R)(t);
				return null == t ? {
					disableReactionReads: !0,
					disableReactionCreates: !0,
					disableReactionUpdates: !0,
					isLurking: !1,
					isGuest: !1,
					isPendingMember: !1
				} : (e = function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var i = null != arguments[e] ? arguments[e] : {},
							n = Object.keys(i);
						"function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
							return Object.getOwnPropertyDescriptor(i, t).enumerable
						}))), n.forEach(function(e) {
							var n;
							n = i[e], e in t ? Object.defineProperty(t, e, {
								value: n,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : t[e] = n
						})
					}
					return t
				}({}, (0, c.Z)({
					channel: t,
					canChat: g,
					renderReactions: !0,
					canAddNewReactions: v,
					isLurking: f,
					isGuest: m,
					communicationDisabled: b,
					isActiveChannelOrUnarchivableThread: S,
					isAutomodQuarantined: O
				})), i = i = {
					isLurking: f,
					isGuest: m,
					isPendingMember: !1
				}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : (function(t, e) {
					var i = Object.keys(t);
					if (Object.getOwnPropertySymbols) {
						var n = Object.getOwnPropertySymbols(t);
						i.push.apply(i, n)
					}
					return i
				})(Object(i)).forEach(function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
				}), e)
			}
		},
		989830: function(t, e, i) {
			i.d(e, {
				Z: () => a
			});
			var n = i(442837),
				r = i(314897),
				s = i(351780),
				o = i(843693);

			function l(t, e) {
				return t === e || (null == t ? void 0 : t.channelId) === (null == e ? void 0 : e.channelId) && (null == t ? void 0 : t.value) === (null == e ? void 0 : e.value) && (null == t ? void 0 : t.multiplier) === (null == e ? void 0 : e.multiplier)
			}

			function a(t) {
				let e = (0, n.e7)([s.Z], () => !!s.Z.isEnabled() && s.Z.combosEnabled);
				return (0, n.e7)([o.ZP, r.default], () => e ? o.ZP.getUserCombo(r.default.getId(), t) : void 0, [t, e], l)
			}
		},
		246642: function(t, e, i) {
			i.d(e, {
				Z: () => u
			});
			var n = i(255367);
			i(73800);
			var r = i(481060),
				s = i(44315),
				o = i(641033),
				l = i(989830),
				a = i(388032),
				d = i(931251);

			function u(t) {
				let {
					channelId: e
				} = t, i = (0, l.Z)(e);
				if (!(null != i && (i.value > 0 || (null == i ? void 0 : i.multiplier) > 1))) return null;
				let {
					multiplier: u
				} = i, {
					color: c
				} = (0, o.yz)(u);
				return (0, n.jsxs)("div", {
					className: d.container,
					children: [(0, n.jsx)(r.Text, {
						variant: "text-xs/normal",
						children: a.intl.string(a.t.Jr2519)
					}), (0, n.jsx)(r.Exd, {
						foregroundColor: (0, s.Lq)(c),
						className: d.progress,
						size: r.Exd.Sizes.LARGE,
						percent: 100 * (0, o.nc)(i),
						animate: !0
					})]
				})
			}
		},
		921227: function(t, e, i) {
			i.d(e, {
				Z: () => d
			});
			var n, r = i(442837),
				s = i(570140);

			function o(t, e, i) {
				return e in t ? Object.defineProperty(t, e, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = i, t
			}
			let l = {};
			class a extends(n = r.ZP.PersistedStore) {
				initialize(t) {
					Object.assign(l, t)
				}
				getState() {
					return l
				}
				shouldShowEducation(t) {
					return !0 !== l[t]
				}
			}
			o(a, "displayName", "ActivityInviteEducationStore"), o(a, "persistKey", "ActivityInviteEducationExperimentStore");
			let d = new a(s.Z, {
				ACTIVITY_INVITE_EDUCATION_DISMISS: function(t) {
					return l[t.key] = t.value, !0
				}
			})
		},
		127654: function(t, e, i) {
			i.d(e, {
				G: () => Z,
				d: () => I
			}), i(539854), i(388685), i(415506);
			var n = i(475179),
				r = i(904245),
				s = i(166459),
				o = i(531643),
				l = i(141795),
				a = i(476326),
				d = i(367907),
				u = i(358221),
				c = i(58873),
				h = i(117530),
				p = i(594174),
				g = i(626135),
				f = i(403182),
				m = i(74538),
				v = i(979956),
				O = i(981631),
				b = i(959517),
				S = i(474936),
				y = i(388032);

			function E(t) {
				for (var e = 1; e < arguments.length; e++) {
					var i = null != arguments[e] ? arguments[e] : {},
						n = Object.keys(i);
					"function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
						return Object.getOwnPropertyDescriptor(i, t).enumerable
					}))), n.forEach(function(e) {
						var n;
						n = i[e], e in t ? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[e] = n
					})
				}
				return t
			}

			function Z(t, e) {
				let i = p.default.getCurrentUser(),
					n = t.getGuildId(),
					r = f.dg(n),
					s = [],
					l = 0,
					a = 0,
					u = 0,
					c = [];
				for (let t of e) u += 1, l += t.size, s.push(t.size), t.size > a && (a = t.size), null != t.type ? c.push(t.type) : c.push("unknown");
				if (a > r) {
					(0, d.yw)(O.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
						channel_id: t.id,
						guild_id: n,
						user_individual_file_size_limit: r,
						pre_compression_file_sizes: s,
						pre_compression_aggregate_file_size: l,
						num_attachments: u,
						error_type: b.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
						attachment_mimetypes: c
					}), (0, o.openUploadError)({
						title: y.intl.string(y.t["/tGlcn"]),
						help: (0, v.BK)(i, n),
						showPremiumUpsell: !(0, m.M5)(i, S.p9.TIER_2),
						fileSize: a
					});
					return
				}(0, o.openUploadError)({
					title: y.intl.string(y.t["/tGlcn"]),
					help: y.intl.formatToPlainString(y.t.tUOJdH, {
						maxSize: f.Ng(f.OC())
					})
				})
			}

			function I(t, e, i) {
				let {
					filesMetadata: d,
					requireConfirm: p = !0,
					showLargeMessageDialog: f = !1,
					isThumbnail: m = !1
				} = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
				if (t.length < 1) return;
				if (null != d && d.length !== t.length) throw Error("Unexpected mismatch between files and file metadata");
				let b = e.getGuildId();
				if ((0, v.Bf)(t, b)) return void Z(e, t);
				if (h.Z.getUploadCount(e.id, i) + t.length > O.dN1) {
					(0, o.openUploadError)({
						title: y.intl.string(y.t.wOr6hI),
						help: y.intl.formatToPlainString(y.t["qqyp/f"], {
							limit: O.dN1
						})
					}), g.default.track(O.rMx.UPLOAD_FILE_LIMIT_ERROR, {
						existing_count: h.Z.getUploadCount(e.id, i),
						new_count: t.length
					});
					return
				}
				if (e.type !== O.d4z.GUILD_VOICE && e.type !== O.d4z.GUILD_STAGE_VOICE || u.Z.getChatOpen(e.id) || n.Z.updateChatOpen(e.id, !0), p) {
					let n = Array.from(t).map((t, e) => E({
						file: t,
						platform: a.ow.WEB,
						isThumbnail: m
					}, null == d ? void 0 : d[e]));
					s.Z.addFiles({
						files: n,
						channelId: e.id,
						showLargeMessageDialog: f,
						draftType: i
					})
				} else {
					let i = Array.from(t).map((t, i) => {
						let n = null != d ? d[i] : {};
						return new l.nH(E({
							file: t,
							platform: a.ow.WEB,
							isThumbnail: m
						}, n), e.id)
					});
					r.Z.sendMessage(e.id, {
						content: "",
						tts: !1,
						invalidEmojis: [],
						validNonShortcutEmojis: []
					}, void 0, {
						eagerDispatch: !1,
						attachmentsToUpload: i,
						onAttachmentUploadError: (t, i, n) => {
							(0, c.A)({
								file: t,
								guildId: e.getGuildId(),
								analyticsLocations: [],
								code: i,
								reason: n
							})
						}
					})
				}
			}
		},
		979956: function(t, e, i) {
			i.d(e, {
				BK: () => a,
				Bf: () => d,
				KZ: () => u
			}), i(539854);
			var n = i(476326),
				r = i(403182),
				s = i(74538),
				o = i(474936),
				l = i(388032);

			function a(t, e) {
				let i = r.Ng(r.dg(e));
				return s.ZP.isPremium(t, o.p9.TIER_2) ? l.intl.formatToPlainString(l.t.fxEKdX, {
					maxSize: i
				}) : s.ZP.isPremium(t, o.p9.TIER_1) ? l.intl.formatToPlainString(l.t["Nr+Lsb"], {
					maxSize: i
				}) : l.intl.formatToPlainString(l.t.fxEKdX, {
					maxSize: i
				})
			}

			function d(t, e) {
				return r.nA(t, e) || r.vY(t)
			}

			function u(t) {
				return t.reduce((t, e) => (e.item.platform === n.ow.WEB && t.push(e.item.file), t), [])
			}
		}
	}
]);
//# sourceMappingURL=d67d301cdd96b000.js.map