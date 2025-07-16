"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["58227"], {
		721012: function(e, t, n) {
			n.d(t, {
				i: () => d
			}), n(388685);
			var l = n(255367),
				i = n(73800);
			n(120356);
			var r = n(108542),
				s = n(481060),
				a = n(388032),
				o = n(73697);

			function c(e) {
				let {
					testimonial: t,
					className: n
				} = e, {
					message: i,
					profilePic: r,
					adminTitle: c,
					emphasisColor: d = "interactive-normal"
				} = t;
				return (0, l.jsxs)("div", {
					className: n,
					children: [(0, l.jsx)(s.Text, {
						variant: "text-sm/medium",
						color: "header-secondary",
						children: a.intl.format(i, {
							testimonialHook: (e, t) => (0, l.jsx)(s.Text, {
								tag: "span",
								variant: "text-sm/bold",
								color: d,
								children: e
							}, t)
						})
					}), (0, l.jsxs)("div", {
						className: o.userContainer,
						children: [(0, l.jsx)(s.qEK, {
							src: r,
							size: s.EFr.SIZE_16,
							"aria-hidden": !0
						}), (0, l.jsx)(s.Text, {
							variant: "text-sm/medium",
							color: "header-secondary",
							children: c
						})]
					})]
				})
			}

			function d(e) {
				let {
					testimonials: t
				} = e, [
					[n, r], c
				] = i.useState([0, "right"]), d = i.useCallback(() => {
					c(e => {
						let [n] = e;
						return 0 === n ? [t.length - 1, "left"] : [n - 1, "left"]
					})
				}, [c, t.length]), m = i.useCallback(() => {
					c(e => {
						let [n] = e;
						return [(n + 1) % t.length, "right"]
					})
				}, [c, t.length]), h = t[n], I = i.useCallback((e, t, n, i) => (0, l.jsx)(u, {
					item: t,
					state: n,
					cleanup: i,
					direction: r
				}, e), [r]);
				return (0, l.jsxs)("div", {
					className: o.testimonialHeroContainer,
					children: [(0, l.jsx)("div", {
						className: o.animatedContainer,
						children: (0, l.jsx)(s.W3x, {
							items: [h],
							renderItem: I,
							getItemKey: e => e.adminTitle
						})
					}), (0, l.jsx)(s.Text, {
						variant: "text-lg/bold",
						className: o.heroQuotes,
						children: "“"
					}), (0, l.jsxs)("div", {
						className: o.testimonialsControls,
						children: [(0, l.jsx)(s.hU, {
							size: "sm",
							variant: "secondary",
							icon: s.whL,
							onClick: d,
							"aria-label": a.intl.string(a.t["13/7kZ"])
						}), (0, l.jsx)(s.hU, {
							size: "sm",
							variant: "secondary",
							icon: s.ZSh,
							onClick: m,
							"aria-label": a.intl.string(a.t.PDTjLC)
						})]
					})]
				})
			}

			function u(e) {
				let {
					item: t,
					state: n,
					cleanup: i,
					direction: a
				} = e, [d] = (0, s.q_F)(() => {
					switch (n) {
						case s.pJH.ENTERED:
							return {
								from: {
									transform: "right" === a ? "translateX(150%)" : "translate(-150%)"
								}, to: {
									transform: "translateX(0%)"
								}
							};
						case s.pJH.YEETED:
							return {
								from: {
									transform: "translateX(0%)"
								}, to: {
									transform: "right" === a ? "translateX(-150%)" : "translate(150%)"
								}, onRest: i
							};
						default:
							return {}
					}
				}, "respect-motion-settings", [n]);
				return (0, l.jsx)(r.animated.div, {
					style: d,
					children: (0, l.jsx)(c, {
						className: o.testimonial,
						testimonial: t
					})
				})
			}
		},
		869764: function(e, t, n) {
			n.d(t, {
				Z: () => D,
				k: () => v
			}), n(997841);
			var l = n(255367),
				i = n(73800),
				r = n(120356),
				s = n.n(r),
				a = n(442837),
				o = n(481060),
				c = n(933557),
				d = n(471445),
				u = n(592125),
				m = n(271383),
				h = n(430824),
				I = n(496675),
				g = n(186523),
				N = n(768581),
				f = n(630388),
				S = n(526120),
				p = n(563534),
				E = n(846121),
				T = n(216701),
				O = n(981631),
				x = n(372897),
				_ = n(388032),
				j = n(411114);

			function v(e) {
				var {
					title: t,
					emojiId: n,
					emojiName: i,
					icon: r,
					completed: a,
					Icon: c,
					onClick: d
				} = e, u = function(e, t) {
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
				}(e, ["title", "emojiId", "emojiName", "icon", "completed", "Icon", "onClick"]);
				let m = "channel" === u.variant ? u.channelId : null,
					h = "static" === u.variant ? u.subtitle : u.channelName,
					I = null != m ? N.ZP.getNewMemberActionIconURL({
						channelId: m,
						icon: r
					}) : null;
				return (0, l.jsxs)(o.Zbd, {
					className: s()(j.action, {
						[j.clickableAction]: null != d
					}),
					onClick: d,
					children: [null != I ? (0, l.jsx)("img", {
						src: I,
						className: j.icon,
						width: 32,
						height: 32,
						alt: "",
						"aria-hidden": !0
					}) : (0, l.jsx)(T.Z, {
						emojiId: n,
						emojiName: i,
						size: T.R.LARGE,
						defaultComponent: (0, l.jsx)("div", {
							className: j.channelIconContainer,
							children: (0, l.jsx)(c, {
								className: j.channelIcon,
								color: "currentColor"
							})
						})
					}), (0, l.jsxs)("div", {
						className: j.actionInfo,
						children: [(0, l.jsx)(o.Text, {
							variant: "text-md/semibold",
							color: "header-primary",
							children: t
						}), null != h ? (0, l.jsx)(o.Text, {
							variant: "text-xs/normal",
							color: "text-muted",
							children: h
						}) : null]
					}), a ? (0, l.jsx)(o.owK, {
						size: "md",
						color: "currentColor",
						secondaryColor: "#fff",
						className: j.checkCircleCompleted
					}) : (0, l.jsx)(g.Z, {
						className: j.checkCircle,
						width: 24,
						height: 24
					})]
				})
			}

			function b(e) {
				var t;
				let {
					action: n,
					completed: r
				} = e, {
					channelId: s,
					title: m,
					emoji: h,
					icon: g
				} = n, {
					id: N,
					name: f
				} = null != h ? h : {}, p = (0, a.e7)([u.Z], () => u.Z.getChannel(s)), E = (0, c.ZP)(p, !0), T = (0, a.e7)([I.Z], () => I.Z.can(O.Plq.VIEW_CHANNEL, p)), x = i.useMemo(() => {
					if (null != p) return () => (0, S.gp)(p.guild_id, p.id)
				}, [p]);
				if (null == p || !T) return null;
				let _ = null != (t = (0, d.KS)(p)) ? t : o.VL1;
				return (0, l.jsx)(v, {
					variant: "channel",
					channelId: s,
					title: m,
					channelName: E,
					emojiId: N,
					emojiName: f,
					icon: g,
					completed: r,
					Icon: _,
					onClick: x
				})
			}

			function D(e) {
				let {
					guildId: t
				} = e, n = (0, a.e7)([p.Z], () => p.Z.getNewMemberActions(t), [t]), r = (0, a.e7)([E.Z], () => E.Z.getCompletedActions(t)), c = (0, a.e7)([m.ZP], () => m.ZP.getSelfMember(t)), d = (0, a.e7)([h.Z], () => h.Z.getGuild(t));
				i.useEffect(() => {
					var e;
					null == r && (null == c ? void 0 : c.flags) != null && (0, f.yE)(null != (e = c.flags) ? e : 0, x.q.STARTED_HOME_ACTIONS) && (0, S.Fg)(t)
				}, [r, t, null == c ? void 0 : c.flags]);
				let u = i.useCallback(() => {
					null != d && null != d.rulesChannelId && (0, S.gp)(d.id, d.rulesChannelId)
				}, [d]);
				return null == c || null == n || 0 === n.length ? null : (0, l.jsxs)("div", {
					className: j.container,
					children: [(0, l.jsx)(o.X6q, {
						variant: "heading-lg/bold",
						color: "header-primary",
						children: _.intl.string(_.t.LhlgY2)
					}), n.map(e => (0, l.jsx)(b, {
						action: e,
						completed: (null == r ? void 0 : r[e.channelId]) === !0,
						guildId: t
					}, e.channelId)), (null == d ? void 0 : d.rulesChannelId) != null && (0, l.jsxs)(o.Zbd, {
						className: s()(j.action, j.clickableAction),
						onClick: u,
						children: [(0, l.jsx)("div", {
							className: j.rulesIconContainer,
							children: (0, l.jsx)(o.snC, {
								size: "xs",
								color: "currentColor",
								className: j.rulesIcon
							})
						}), (0, l.jsx)("div", {
							className: j.actionInfo,
							children: (0, l.jsx)(o.Text, {
								variant: "text-md/semibold",
								color: "header-primary",
								children: _.intl.string(_.t["K/i3iY"])
							})
						})]
					})]
				})
			}
		},
		150512: function(e, t, n) {
			n.d(t, {
				Z: () => S
			}), n(35282);
			var l = n(255367),
				i = n(73800),
				r = n(120356),
				s = n.n(r),
				a = n(399606),
				o = n(481060),
				c = n(749210),
				d = n(607070),
				u = n(903518),
				m = n(484459),
				h = n(430824),
				I = n(594174),
				g = n(5192),
				N = n(51144),
				f = n(82778);

			function S(e) {
				let {
					guildId: t,
					welcomeMessage: n,
					className: r
				} = e, S = (0, a.e7)([h.Z], () => h.Z.getGuild(t)), p = (0, a.e7)([d.Z], () => d.Z.useReducedMotion), E = (0, a.e7)([I.default], () => I.default.getUser(null == n ? void 0 : n.authorIds[0])), T = i.useMemo(() => null != S && null != E && (0, u.Y)(S, E) ? E : null, [S, E]), O = (0, a.e7)([I.default], () => I.default.getCurrentUser()), x = i.useMemo(() => {
					var e;
					return null != (e = null == n ? void 0 : n.authorIds) ? e : []
				}, [n]);
				i.useEffect(() => {
					c.Z.requestMembersById(t, x)
				}, [t, x]), i.useEffect(() => {
					null != T && (0, m.Z)(T.id, T.getAvatarURL(t, 48), {
						guildId: t
					})
				}, [T, t]);
				let _ = g.ZP.useName(t, null, T),
					j = (0, N._T)(O);
				if (null == T || null == O || null == n) return null;
				let v = null != S && S.ownerId === T.id;
				return (0, l.jsxs)(o.Zbd, {
					className: s()(f.welcomeMessageContainer, r),
					children: [(0, l.jsx)("div", {
						className: f.avatarBackground
					}), p ? (0, l.jsx)(o.qEK, {
						src: T.getAvatarURL(t, 48),
						size: o.EFr.SIZE_48,
						className: f.avatar,
						"aria-label": T.username
					}) : (0, l.jsx)(o.Xo$, {
						src: T.getAvatarURL(t, 48),
						size: o.EFr.SIZE_48,
						className: f.avatar,
						"aria-label": T.username
					}), (0, l.jsx)("div", {
						className: f.avatarBorder
					}), (0, l.jsxs)("div", {
						className: f.welcomeMessageContent,
						children: [(0, l.jsxs)("div", {
							className: f.adminUsernameContainer,
							children: [(0, l.jsx)(o.Text, {
								variant: "text-sm/semibold",
								color: "header-primary",
								children: _
							}), v ? (0, l.jsx)(o.CEn, {
								size: "xxs",
								color: "currentColor",
								className: f.ownerIcon
							}) : null]
						}), (0, l.jsx)(o.Text, {
							variant: "text-md/medium",
							children: function(e, t) {
								let n = e.split(/\[@username\]/g);
								return (0, l.jsx)("span", {
									children: n.map((e, r) => (0, l.jsxs)(i.Fragment, {
										children: [e, r < n.length - 1 ? (0, l.jsx)(o.Text, {
											tag: "span",
											variant: "text-md/semibold",
											children: "@".concat(t)
										}) : null]
									}, "username-".concat(r)))
								})
							}(null == n ? void 0 : n.message, null != j ? j : O.username)
						})]
					})]
				})
			}
		},
		889369: function(e, t, n) {
			n.d(t, {
				Z: () => S
			}), n(388685), n(642613);
			var l, i, r, s = n(392711),
				a = n.n(s),
				o = n(442837),
				c = n(570140),
				d = n(45966),
				u = n(999382),
				m = n(981631);
			let h = !1,
				I = null,
				g = new Set;

			function N() {
				h = !1, I = null, null != (I = u.Z.getGuildId()) && u.Z.getSection() === m.pNK.ONBOARDING && (g = new Set(d.Z.getDefaultChannelIds(I)))
			}
			class f extends(l = o.ZP.Store) {
				initialize() {
					this.waitFor(u.Z, d.Z)
				}
				hasChanges() {
					if (null == I) return !1;
					let e = d.Z.getDefaultChannelIds(I).sort(),
						t = Array.from(g).sort();
					return !a().isEqual(e, t)
				}
				get guildId() {
					return I
				}
				get submitting() {
					return h
				}
				get editedDefaultChannelIds() {
					return g
				}
			}
			r = "GuildSettingsDefaultChannelsStore", (i = "displayName") in f ? Object.defineProperty(f, i, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : f[i] = r;
			let S = new f(c.Z, {
				GUILD_SETTINGS_INIT: N,
				GUILD_SETTINGS_SET_SECTION: N,
				GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: N,
				GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: N,
				GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: N,
				GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED: function() {
					h = !1
				},
				GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE: function(e) {
					let {
						channelId: t
					} = e;
					(g = new Set(g)).has(t) ? g.delete(t) : g.add(t)
				},
				GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT: function() {
					h = !0
				}
			})
		},
		983135: function(e, t, n) {
			n.d(t, {
				$K: () => x,
				IG: () => v,
				Nb: () => _,
				Ts: () => j,
				Wy: () => b,
				di: () => D
			}), n(388685);
			var l = n(570140),
				i = n(668781),
				r = n(479531),
				s = n(983736),
				a = n(45966),
				o = n(819553),
				c = n(637853),
				d = n(17181),
				u = n(962086),
				m = n(225675),
				h = n(592125),
				I = n(430824),
				g = n(823379),
				N = n(434404),
				f = n(889369),
				S = n(570961),
				p = n(84658),
				E = n(176505),
				T = n(290511),
				O = n(388032);

			function x(e) {
				l.Z.dispatch({
					type: "GUILD_SETTINGS_ONBOARDING_STEP",
					step: e
				})
			}

			function _(e) {
				null != e && l.Z.dispatch({
					type: "GUILD_SETTINGS_ONBOARDING_EDUCATION_UPSELL_DISMISSED",
					upsellType: e
				})
			}
			async function j(e, t) {
				let n = a.Z.getEnabled(e),
					s = Array.from(f.Z.editedDefaultChannelIds).filter(e => null != h.Z.getChannel(e)),
					[o, d] = (0, c.d9)(e, [...s]);
				if (n && t === T.Un.ONBOARDING_DEFAULT && (d.length < T.md || o.length < T.X)) return void i.Z.show({
					title: O.intl.string(O.t.iLdiqa),
					body: O.intl.string(O.t.JOT74e)
				});
				try {
					await (0, S.n_)(e, {
						mode: t
					})
				} catch (n) {
					var u;
					let {
						fieldName: e,
						error: t
					} = null != (u = new r.Z(n).getAnyErrorMessageAndField()) ? u : {};
					i.Z.show({
						title: O.intl.string(O.t.iLdiqa),
						body: [e, t].filter(g.lm).join(": ")
					})
				}
				l.Z.dispatch({
					type: "GUILD_SETTINGS_ONBOARDING_SET_MODE",
					guildId: e,
					mode: t
				})
			}

			function v(e, t) {
				let n = p.xh.findIndex(e => e === t); - 1 !== n && n !== p.xh.length - 1 && x(p.xh[n + 1])
			}

			function b(e, t) {
				let n = p.xh.findIndex(e => e === t); - 1 !== n && 0 !== n && x(p.xh[n - 1])
			}
			async function D(e) {
				let t = I.Z.getGuild(e);
				null != t && (N.Z.close(), (0, u.iD)(t.id, {
					type: m.z.NEW_MEMBER,
					roles: {},
					optInChannels: new Set,
					optInEnabled: !1,
					onboardingResponses: new Set,
					onboardingEnabled: !0,
					memberOptions: {
						isPending: (0, s.Dc)(t),
						flags: 0
					}
				}), o.ZP.resetOnboardingStatus(t.id), (0, d.EI)(t.id), await (0, d.default)({
					guildId: t.id,
					isPreview: !0,
					returnChannelId: E.oC.GUILD_HOME
				}))
			}
		},
		570961: function(e, t, n) {
			n.d(t, {
				$y: () => O,
				Kk: () => S,
				NB: () => f,
				en: () => j,
				fi: () => p,
				n_: () => x,
				rS: () => T,
				tS: () => E
			}), n(415506), n(388685);
			var l = n(544891),
				i = n(570140),
				r = n(668781),
				s = n(881052),
				a = n(339085),
				o = n(592125),
				c = n(485386),
				d = n(823379),
				u = n(208665),
				m = n(981631),
				h = n(290511),
				I = n(388032);

			function g(e) {
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

			function N(e, t) {
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

			function f() {
				i.Z.dispatch({
					type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET"
				})
			}

			function S(e, t, n) {
				E(e, u.Z.editedOnboardingPrompts.map(e => e.id === t ? g({}, e, n) : e))
			}

			function p(e, t) {
				E(e, u.Z.editedOnboardingPrompts.filter(e => e.id !== t))
			}

			function E(e, t) {
				let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
				if (i.Z.dispatch({
						type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT",
						prompts: t
					}), n) {
					let n = t.map(n => _(e, t, n));
					i.Z.dispatch({
						type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS",
						errors: n
					})
				}
			}
			async function T(e, t) {
				if (!u.Z.hasChanges()) return;
				let n = u.Z.editedOnboardingPrompts;
				null != t && t.ignoreDefaultPrompt && 1 === n.length && (0, h.RF)(n[0]) && (n = []);
				let l = n.map(t => {
						let n = t.options.map(t => {
							let n = null == t.roleIds ? t.roleIds : t.roleIds.filter(t => null != c.Z.getRole(e.id, t)),
								l = null == t.channelIds ? t.channelIds : t.channelIds.filter(e => null != o.Z.getChannel(e));
							return N(g({}, t), {
								roleIds: n,
								channelIds: l,
								emoji: function(e) {
									var t;
									if (null != e && ((null == (t = e.emoji) ? void 0 : t.id) == null || null != a.ZP.getCustomEmojiById(e.emoji.id))) return e.emoji
								}(t)
							})
						});
						return N(g({}, t), {
							options: n,
							type: n.length >= h.fY ? h.FN.DROPDOWN : h.FN.MULTIPLE_CHOICE
						})
					}),
					m = l.filter(e => e.inOnboarding),
					f = l.filter(e => !0 !== e.inOnboarding),
					S = l.map(t => _(e, l, t));
				if (S.filter(d.lm).length > 0) throw i.Z.dispatch({
					type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED",
					errors: S
				}), Error("failed to locally validate prompts");
				if (m.length > h.b3) throw r.Z.show({
					title: I.intl.string(I.t.iLdiqa),
					body: I.intl.formatToPlainString(I.t["cTb/rq"], {
						numQuestions: h.b3
					})
				}), i.Z.dispatch({
					type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED",
					errors: S
				}), Error("too many prompts in onboarding");
				let p = [...m, ...f];
				i.Z.dispatch({
					type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT"
				});
				try {
					await x(e.id, {
						prompts: p.map(h.dr)
					}), i.Z.dispatch({
						type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS",
						guildId: e.id,
						updates: {
							prompts: p
						}
					})
				} catch (n) {
					var E;
					let {
						fieldName: e,
						error: t
					} = null != (E = new s.Hx(n).getAnyErrorMessageAndField()) ? E : {};
					throw r.Z.show({
						title: I.intl.string(I.t.iLdiqa),
						body: [e, t].filter(d.lm).join(": ")
					}), i.Z.dispatch({
						type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED"
					}), Error("failed to save prompts")
				}
			}
			async function O(e, t) {
				i.Z.dispatch({
					type: "GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE",
					guildId: e,
					updates: {
						enabled: t
					}
				});
				try {
					await x(e, {
						enabled: t
					})
				} catch (l) {
					var n;
					let {
						fieldName: e,
						error: t
					} = null != (n = new s.Hx(l).getAnyErrorMessageAndField()) ? n : {};
					r.Z.show({
						title: I.intl.string(I.t.iLdiqa),
						body: [e, t].filter(d.lm).join(": ")
					})
				}
			}
			async function x(e, t) {
				await l.tn.put({
					url: m.ANM.GUILD_ONBOARDING(e),
					body: t,
					rejectWithError: !1
				})
			}

			function _(e, t, n) {
				let l = {
						optionErrors: []
					},
					i = !1;
				return n.title.length <= 0 && (l.title = I.intl.string(I.t.h8Hg1d), i = !0), n.options.length <= 0 && (l.options = I.intl.string(I.t["64tF+f"]), i = !0), n.inOnboarding && t.filter(e => e.inOnboarding).length > h.b3 && (l.config = I.intl.formatToPlainString(I.t["cTb/rq"], {
					numQuestions: h.b3
				}), i = !0), l.optionErrors = n.options.map(l => j(e, t, n, l)), (i = i || l.optionErrors.some(e => null != e)) ? l : null
			}

			function j(e, t, n, l) {
				var i, r, s;
				if (n.singleSelect) {
					let e = new Set(null != (i = l.roleIds) ? i : []);
					for (let l of t)
						if (l.id !== n.id) {
							for (let t of l.options)
								if (null != t.roleIds && t.roleIds.some(t => e.has(t))) return I.intl.string(I.t.rKxyvb)
						}
				}
				let a = (null != (r = l.roleIds) ? r : []).filter(t => null != c.Z.getRole(e.id, t)),
					d = (null != (s = l.channelIds) ? s : []).filter(e => null != o.Z.getChannel(e));
				return 0 === a.length && 0 === d.length ? I.intl.string(I.t.F6SUWF) : null
			}
		},
		208665: function(e, t, n) {
			n.d(t, {
				Z: () => T
			});
			var l, i, r, s = n(392711),
				a = n.n(s),
				o = n(442837),
				c = n(570140),
				d = n(45966),
				u = n(999382),
				m = n(981631),
				h = n(290511);
			let I = !1,
				g = null,
				N = [],
				f = !1,
				S = [];

			function p() {
				I = !1, g = null, S = [], f = !1, null != (g = u.Z.getGuildId()) && u.Z.getSection() === m.pNK.ONBOARDING && (N = d.Z.getOnboardingPrompts(g), f = d.Z.isAdvancedMode(g))
			}
			class E extends(r = o.ZP.Store) {
				initialize() {
					this.waitFor(u.Z, d.Z)
				}
				hasChanges() {
					return null != g && !a().isEqual(d.Z.getOnboardingPrompts(g), N)
				}
				get guildId() {
					return g
				}
				get submitting() {
					return I
				}
				get errors() {
					return S
				}
				get editedOnboardingPrompts() {
					return N
				}
				get advancedMode() {
					return f
				}
			}
			i = "GuildSettingsOnboardingPromptsStore", (l = "displayName") in E ? Object.defineProperty(E, l, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : E[l] = i;
			let T = new E(c.Z, {
				GUILD_SETTINGS_INIT: p,
				GUILD_SETTINGS_SET_SECTION: p,
				GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: p,
				GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET: p,
				GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: p,
				GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: p,
				GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED: function(e) {
					var t;
					S = null != (t = e.errors) ? t : [], I = !1
				},
				GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT: function(e) {
					let {
						prompts: t
					} = e;
					N = t
				},
				GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT: function() {
					I = !0, S = []
				},
				GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS: function(e) {
					var t;
					S = null != (t = e.errors) ? t : []
				},
				GUILD_SETTINGS_ONBOARDING_SET_MODE: function(e) {
					let {
						mode: t
					} = e;
					f = t === h.Un.ONBOARDING_ADVANCED
				}
			})
		},
		84658: function(e, t, n) {
			n.d(t, {
				PG: () => r,
				W$: () => a,
				lg: () => c,
				ug: () => o,
				xh: () => s
			});
			var l, i, r = ((l = {})[l.LANDING = 0] = "LANDING", l[l.SAFETY_CHECK = 1] = "SAFETY_CHECK", l[l.DEFAULT_CHANNELS = 2] = "DEFAULT_CHANNELS", l[l.WELCOME_CARD = 3] = "WELCOME_CARD", l[l.CUSTOMIZATION_QUESTIONS = 4] = "CUSTOMIZATION_QUESTIONS", l[l.REVIEW = 5] = "REVIEW", l[l.HOME_SETTINGS = 6] = "HOME_SETTINGS", l);
			let s = [0, 1, 2, 4, 6, 5];
			var a = ((i = {})[i.TOGGLE_ENABLED = 0] = "TOGGLE_ENABLED", i[i.TOGGLE_DISABLED = 1] = "TOGGLE_DISABLED", i[i.PREVIEW = 2] = "PREVIEW", i[i.EDIT_DEFAULT_CHANNELS = 3] = "EDIT_DEFAULT_CHANNELS", i[i.EDIT_CUSTOMIZATION_QUESTIONS = 4] = "EDIT_CUSTOMIZATION_QUESTIONS", i[i.EDIT_HOME_SETTINGS = 5] = "EDIT_HOME_SETTINGS", i);
			let o = s.filter(e => 0 !== e);

			function c(e) {
				switch (e) {
					case 1:
						return "Safety Check";
					case 2:
						return "Default Channels";
					case 4:
						return "Customization Questions";
					case 6:
						return "Home Settings";
					default:
						return null
				}
			}
		},
		903518: function(e, t, n) {
			n.d(t, {
				Y: () => s
			});
			var l = n(601964),
				i = n(700785),
				r = n(981631);

			function s(e, t) {
				return !!((0, l.eM)(e, t) || i.BT({
					permission: r.Plq.ADMINISTRATOR,
					context: e,
					user: t
				})) || i.BT({
					permission: r.Plq.MANAGE_GUILD,
					context: e,
					user: t
				}) && i.BT({
					permission: r.Plq.MANAGE_ROLES,
					context: e,
					user: t
				})
			}
		},
		707076: function(e, t, n) {
			n.d(t, {
				Z: () => v,
				j: () => _
			});
			var l = n(255367);
			n(73800);
			var i = n(120356),
				r = n.n(i),
				s = n(442837),
				a = n(481060),
				o = n(367907),
				c = n(548473),
				d = n(721012),
				u = n(869764),
				m = n(150512),
				h = n(430824),
				I = n(594174),
				g = n(626135),
				N = n(999382),
				f = n(983135),
				S = n(84658),
				p = n(981631),
				E = n(388032),
				T = n(568614);
			let O = () => [{
					emoji: "\uD83E\uDDD9",
					emojiDescription: E.intl.string(E.t.Jh9uiY),
					title: E.intl.string(E.t.ATF45u),
					selected: !0
				}, {
					emoji: "\uD83C\uDFA4",
					emojiDescription: E.intl.string(E.t["nGt+MT"]),
					title: E.intl.string(E.t["30uo7O"]),
					selected: !1
				}, {
					emoji: "\uD83D\uDC40",
					emojiDescription: E.intl.string(E.t.hOMH5u),
					title: E.intl.string(E.t["5Z5sgo"]),
					selected: !1
				}],
				x = () => [{
					channelIcon: () => (0, l.jsx)(a.MqZ, {
						size: "xs",
						color: "currentColor",
						className: T.channelIcon
					}),
					channel: E.intl.string(E.t.MXJozM),
					selected: !0
				}, {
					channelIcon: () => (0, l.jsx)(a.VL1, {
						size: "md",
						color: "currentColor",
						className: T.channelIcon
					}),
					channel: E.intl.string(E.t.Pkj0f3),
					selected: !0
				}, {
					channelIcon: () => (0, l.jsx)(a.VL1, {
						size: "md",
						color: "currentColor",
						className: T.channelIcon
					}),
					channel: E.intl.string(E.t["imVD+v"]),
					selected: !1
				}, {
					channelIcon: () => (0, l.jsx)(a.Mmi, {
						size: "md",
						color: "currentColor",
						className: T.channelIcon
					}),
					channel: E.intl.string(E.t["Pj/Wpq"]),
					selected: !0
				}];

			function _(e) {
				let {
					isTooltip: t = !1
				} = e, n = O();
				t && n.pop();
				let i = t ? (0, l.jsx)(a.Text, {
						variant: "text-sm/semibold",
						color: "header-primary",
						children: E.intl.string(E.t.nTI2mZ)
					}) : (0, l.jsx)(a.X6q, {
						variant: "heading-md/semibold",
						children: E.intl.string(E.t.g1OQtr)
					}),
					s = t ? (0, l.jsx)(a.Text, {
						variant: "text-xxs/normal",
						children: E.intl.format(E.t.hGwDPT, {})
					}) : (0, l.jsx)(a.Text, {
						variant: "text-xs/normal",
						children: E.intl.format(E.t["8XLD3t"], {})
					});
				return (0, l.jsxs)("div", {
					className: r()(T.upsellPreview, T.spacingLarge, {
						[T.tooltip]: t
					}),
					children: [i, (0, l.jsx)("div", {
						className: T.spacingSmall,
						children: n.map((e, t) => {
							let {
								emoji: n,
								emojiDescription: i,
								title: s,
								selected: o
							} = e;
							return (0, l.jsxs)("div", {
								className: r()(T.previewListItem, {
									[T.selected]: o
								}),
								children: [(0, l.jsx)("span", {
									role: "img",
									"aria-label": i,
									children: n
								}), (0, l.jsx)(a.Text, {
									variant: "text-sm/medium",
									color: "header-primary",
									children: s
								}), o && (0, l.jsx)("div", {
									className: T.checkboxCircle,
									children: (0, l.jsx)(a.dz2, {
										size: "md",
										color: "currentColor",
										className: T.checkmark
									})
								})]
							}, t)
						})
					}), s]
				})
			}

			function j() {
				let e = [{
					message: E.t.FUUXXl,
					profilePic: "https://cdn.discordapp.com/avatars/302407541994946561/bb3fd59e6c2ea0a86a2bdabf5dff7856.webp?size=80",
					adminTitle: E.intl.string(E.t.RZVpur)
				}, {
					message: E.t.JAXvDQ,
					profilePic: "https://cdn.discordapp.com/avatars/433499434098229249/b6d433308debef625537e33df04023e5.webp?size=80",
					adminTitle: E.intl.string(E.t.xyrlg4)
				}, {
					message: E.t.Wj9Djo,
					profilePic: "https://cdn.discordapp.com/avatars/555460020494663691/599bfcdb0b0700b415f4c695890f272c.webp?size=80",
					adminTitle: E.intl.string(E.t["o/LQMj"])
				}, {
					message: E.t.ALsMNT,
					profilePic: "https://cdn.discordapp.com/guilds/936317138904440892/users/125526751064489984/avatars/f35679626acac9943e102533fc170d41.webp?size=80",
					adminTitle: E.intl.string(E.t["uvM+xc"])
				}];
				return (0, l.jsx)(d.i, {
					testimonials: e
				})
			}

			function v() {
				let e = (0, s.e7)([N.Z], () => N.Z.getGuildId()),
					t = (0, s.e7)([h.Z], () => h.Z.getGuild(e)),
					n = (0, s.e7)([I.default], () => I.default.getCurrentUser());
				return null == e || null == t || null == n ? null : (0, l.jsxs)("div", {
					className: T.upsellContainer,
					children: [(0, l.jsxs)("div", {
						className: T.upsellHeader,
						children: [(0, l.jsxs)("div", {
							className: T.islands,
							children: [(0, l.jsx)(c.xm, {}), (0, l.jsx)(c._I, {
								guild: t,
								mainIslandClassName: T.mainIsland,
								balloonDogClassName: T.balloonDog
							}), (0, l.jsx)(c.B0, {})]
						}), (0, l.jsxs)("div", {
							className: T.upsellHeaderText,
							children: [(0, l.jsx)(a.X6q, {
								variant: "heading-xl/semibold",
								children: E.intl.string(E.t.GnKOAw)
							}), (0, l.jsx)(a.Text, {
								variant: "text-md/normal",
								children: E.intl.string(E.t.SJRFJi)
							})]
						}), (0, l.jsx)("div", {
							className: T.upsellButtons,
							children: (0, l.jsx)(a.zxk, {
								variant: "primary",
								text: E.intl.string(E.t.RzWDqa),
								onClick: function() {
									if (null != e) {
										var t, n;
										g.default.track(p.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, (t = function(e) {
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
										}({}, (0, o.hH)(e)), n = n = {
											step: S.PG[S.PG.LANDING],
											back: !1,
											skip: !1
										}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
											var n = Object.keys(e);
											if (Object.getOwnPropertySymbols) {
												var l = Object.getOwnPropertySymbols(e);
												n.push.apply(n, l)
											}
											return n
										})(Object(n)).forEach(function(e) {
											Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
										}), t)), (0, f.IG)(e, S.PG.LANDING)
									}
								},
								disabled: !1
							})
						})]
					}), (0, l.jsx)(a.$i$, {}), (0, l.jsx)(j, {}), (0, l.jsx)(a.$i$, {}), (0, l.jsxs)("div", {
						className: T.valuesContainer,
						children: [(0, l.jsxs)("div", {
							className: T.valueContainer,
							children: [(0, l.jsx)(_, {}), (0, l.jsxs)("div", {
								className: T.valueText,
								children: [(0, l.jsx)(a.X6q, {
									variant: "heading-md/semibold",
									children: E.intl.string(E.t.Z7kqKS)
								}), (0, l.jsx)(a.Text, {
									variant: "text-sm/normal",
									children: E.intl.string(E.t.di3UCw)
								})]
							})]
						}), (0, l.jsxs)("div", {
							className: T.valueContainer,
							children: [(0, l.jsxs)("div", {
								className: T.valueText,
								children: [(0, l.jsx)(a.X6q, {
									variant: "heading-md/semibold",
									children: E.intl.string(E.t.O4jYEh)
								}), (0, l.jsx)(a.Text, {
									variant: "text-sm/normal",
									children: E.intl.string(E.t["l/l/Gx"])
								})]
							}), (0, l.jsxs)("div", {
								className: r()(T.upsellPreview, T.spacingLarge),
								children: [(0, l.jsx)(m.Z, {
									guildId: e,
									welcomeMessage: {
										authorIds: [n.id],
										message: E.intl.string(E.t.hIWAfn)
									}
								}), (0, l.jsx)(u.k, {
									title: E.intl.string(E.t["47zu7O"]),
									subtitle: E.intl.string(E.t.amoSNz),
									completed: !0,
									Icon: a.VL1,
									variant: "static"
								}), (0, l.jsx)(u.k, {
									title: E.intl.string(E.t.EZfTKC),
									subtitle: E.intl.string(E.t["/sYelZ"]),
									completed: !0,
									Icon: a.VL1,
									variant: "static"
								})]
							})]
						}), (0, l.jsxs)("div", {
							className: T.valueContainer,
							children: [(0, l.jsx)("div", {
								className: r()(T.upsellPreview, T.spacingLarge),
								children: x().map((e, t) => {
									let {
										channelIcon: n,
										channel: i,
										selected: s
									} = e;
									return (0, l.jsxs)("div", {
										className: r()(T.previewListItem, T.spaceBetween, {
											[T.selected]: s
										}),
										children: [(0, l.jsxs)("div", {
											className: T.channel,
											children: [n(), (0, l.jsx)(a.Text, {
												variant: "text-md/medium",
												color: "header-primary",
												children: i
											})]
										}), (0, l.jsx)("div", {
											className: r()(T.checkbox, {
												[T.selected]: s
											}),
											children: s && (0, l.jsx)(a.dz2, {
												size: "md",
												color: "currentColor",
												className: T.checkmark
											})
										})]
									}, t)
								})
							}), (0, l.jsxs)("div", {
								className: T.valueText,
								children: [(0, l.jsx)(a.X6q, {
									variant: "heading-md/semibold",
									children: E.intl.string(E.t["3T9aHB"])
								}), (0, l.jsx)(a.Text, {
									variant: "text-sm/normal",
									children: E.intl.string(E.t.dA7Cam)
								})]
							})]
						})]
					})]
				})
			}
		}
	}
]);
//# sourceMappingURL=733b5ad3e6a58774.js.map