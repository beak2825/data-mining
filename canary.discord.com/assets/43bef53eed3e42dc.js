"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["15114"], {
		605984: function(e, t, n) {
			n.d(t, {
				k: () => d
			});
			var r = n(385956),
				i = n(15701),
				l = n(359119),
				o = n(897769),
				a = n(403485),
				u = n(88101);

			function d(e) {
				let t = (0, i.G)(e),
					n = (0, r.v)(e),
					d = (0, o.S)(e, l.pj.LIKELY_ATO),
					c = (0, a.h)(e).length > 0,
					s = null != (0, u.P)(e);
				if (!t && !n && !c && !s) return d
			}
		},
		394059: function(e, t, n) {
			n.d(t, {
				K: () => i
			});
			var r, i = ((r = {})[r.STREAM = 0] = "STREAM", r[r.VIDEO = 1] = "VIDEO", r)
		},
		27584: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var r = n(442837),
				i = n(846027),
				l = n(314897),
				o = n(131951),
				a = n(981631),
				u = n(65154);

			function d(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.Yn.DEFAULT,
					n = (0, r.e7)([l.default], () => l.default.getId()),
					d = (0, r.e7)([o.Z], () => o.Z.supports(u.AN.DISABLE_VIDEO)),
					c = (0, r.e7)([o.Z], () => o.Z.isLocalVideoDisabled(n, t), [n, t]);
				return [(null == e || e === n) && d, c, e => {
					let r = e ? a.ZUi.DISABLED : a.ZUi.MANUAL_ENABLED;
					i.Z.setDisableLocalVideo(n, r, t)
				}]
			}
		},
		295510: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r = n(255367);
			n(73800);
			var i = n(153867),
				l = n(468026),
				o = n(394059),
				a = n(388032);

			function u(e) {
				var {
					type: t,
					onConfirm: n
				} = e, u = function(e, t) {
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
				}(e, ["type", "onConfirm"]);
				let d = t === o.K.STREAM ? a.intl.string(a.t["/lFMWl"]) : a.intl.string(a.t.xzxhZW),
					c = t === o.K.STREAM ? a.intl.string(a.t.xaOX7e) : a.intl.string(a.t.oU1p9P);
				return (0, r.jsx)(l.default, function(e) {
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
					confirmText: a.intl.string(a.t["cY+Ooa"]),
					secondaryConfirmText: a.intl.string(a.t["JdIQ/f"]),
					title: d,
					cancelText: a.intl.string(a.t["ETE/oK"]),
					onConfirm: n,
					onConfirmSecondary: () => {
						i.ZP.updatedUnsyncedSettings({
							disableHideSelfStreamAndVideoConfirmationAlert: !0
						})
					},
					body: c
				}, u))
			}
		},
		441061: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(481060),
				o = n(475179),
				a = n(358221),
				u = n(388032);

			function d(e) {
				let t = (0, i.e7)([a.Z], () => a.Z.getVoiceParticipantsHidden(e));
				return (0, r.jsx)(l.S89, {
					id: "no-video-hide",
					label: u.intl.string(u.t.BL8ss7),
					checked: !t,
					action: () => o.Z.toggleVoiceParticipantsHidden(e, !t)
				})
			}
		},
		167675: function(e, t, n) {
			n.d(t, {
				Z: () => f
			}), n(388685);
			var r = n(255367);
			n(73800);
			var i = n(442837),
				l = n(481060),
				o = n(740492),
				a = n(27584),
				u = n(295510),
				d = n(394059),
				c = n(65154),
				s = n(388032);

			function f(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Yn.DEFAULT,
					[n, f, p] = (0, a.Z)(e, t),
					v = (0, i.e7)([o.ZP], () => o.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
				return n ? (0, r.jsx)(l.S89, {
					id: "self-video-hide",
					label: s.intl.string(s.t.MH8ESU),
					checked: !f,
					action: () => {
						if (v || f) return p(!f);
						(0, l.h7j)(e => {
							var t, n;
							return (0, r.jsx)(u.Z, (t = function(e) {
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
							}({}, e), n = n = {
								type: d.K.VIDEO,
								onConfirm: () => p(!f)
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
						})
					}
				}) : null
			}
		},
		593214: function(e, t, n) {
			n.d(t, {
				Mt: () => g,
				li: () => f,
				s4: () => p,
				up: () => O,
				zv: () => v
			}), n(388685), n(539854);
			var r = n(73800),
				i = n(106351),
				l = n(442837);
			n(592125);
			var o = n(984933),
				a = n(914010);
			n(709054);
			var u = n(853856),
				d = n(362658),
				c = n(434065),
				s = n(981631);

			function f(e) {
				let {
					favoritesEnabled: t,
					hasStaffPrivileges: n
				} = (0, d.z)("useCanFavoriteChannel"), r = (0, l.e7)([u.Z], () => u.Z.isFavorite(e.id)), i = e.isDM() || e.isThread();
				return t && !__OVERLAY__ && !r && (!i || n)
			}

			function p(e) {
				return (0, l.e7)([u.Z], () => u.Z.getFavorite(e))
			}

			function v() {
				return (0, l.e7)([o.ZP], () => o.ZP.getChannels(s.I_8))[i.d.GUILD_CATEGORY].map(e => ({
					id: "null" === e.channel.id ? null : e.channel.id,
					name: e.channel.name
				}))
			}

			function g() {
				return (0, l.e7)([a.Z], () => a.Z.getGuildId()) === s.I_8
			}

			function O() {
				let {
					isFavoritesPerk: e
				} = (0, d.z)("useFavoriteAdded"), t = (0, c.r)(), n = r.useCallback(() => {
					e && t.notifyFavoriteAdded()
				}, [t, e]), i = r.useCallback(() => {
					e && t.clearFavoriteAdded()
				}, [t, e]);
				return {
					favoriteAdded: t.favoriteAdded,
					notifyFavoriteAdded: n,
					clearFavoriteAdded: i
				}
			}
		},
		434065: function(e, t, n) {
			n.d(t, {
				r: () => l
			});
			var r = n(97519),
				i = n(731965);
			let l = (0, r.U)(e => ({
				favoriteAdded: !1,
				notifyFavoriteAdded: () => (0, i.j)(() => e({
					favoriteAdded: !0
				})),
				clearFavoriteAdded: () => (0, i.j)(() => e({
					favoriteAdded: !1
				}))
			}))
		},
		385956: function(e, t, n) {
			n.d(t, {
				T: () => a,
				v: () => o
			});
			var r = n(442837),
				i = n(355298),
				l = n(333984);

			function o(e) {
				return (0, r.e7)([i.Z], () => i.Z.isMessageRequest(e), [e])
			}

			function a(e) {
				return (0, r.e7)([i.Z, l.Z], () => null != e && (i.Z.isMessageRequest(e) || l.Z.isSpam(e)))
			}
		},
		15701: function(e, t, n) {
			n.d(t, {
				G: () => l
			});
			var r = n(442837),
				i = n(333984);

			function l(e) {
				return (0, r.e7)([i.Z], () => i.Z.isSpam(e), [e])
			}
		},
		441894: function(e, t, n) {
			n.d(t, {
				J: () => a
			}), n(388685);
			var r = n(442837),
				i = n(592125),
				l = n(19780),
				o = n(760373);

			function a(e) {
				let {
					channelId: t
				} = e;
				return (0, r.e7)([l.Z, i.Z], () => (function(e) {
					var t;
					let [n, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.Z, i.Z];
					if (null == e || n.getChannelId() !== e) return !1;
					let a = r.getChannel(e);
					if (null == a || a.isGuildStageVoice()) return !1;
					let u = null == (t = n.getSecureFramesState()) ? void 0 : t.version;
					return null != u && u !== o.Eg
				})(t, [l.Z, i.Z]), [t])
			}
		},
		897769: function(e, t, n) {
			n.d(t, {
				S: () => l
			});
			var r = n(442837),
				i = n(359119);

			function l(e, t) {
				return (0, r.e7)([i.ZP], () => i.ZP.getChannelSafetyWarnings(e), [e]).filter(e => e.type === t).find(e => null == e.dismiss_timestamp && ((null == e ? void 0 : e.expiry) == null || Date.parse(e.expiry) > Date.now()))
			}
		},
		13279: function(e, t, n) {
			n.d(t, {
				z: () => u
			});
			var r = n(359119),
				i = n(897769),
				l = n(237292),
				o = n(403485),
				a = n(604849);

			function u(e, t) {
				let n = (0, l.y0)({
						location: t
					}),
					u = (0, a.c)(),
					d = (0, o.h)(e),
					c = (0, i.S)(e, r.pj.INAPPROPRIATE_CONVERSATION_TIER_2);
				if (n && u && 0 !== d.length && !d.some(e => e.type === r.pj.INAPPROPRIATE_CONVERSATION_TIER_1 || e.type === r.pj.INAPPROPRIATE_CONVERSATION_TIER_2 && null != e.dismiss_timestamp)) return c
			}
		},
		403485: function(e, t, n) {
			n.d(t, {
				h: () => l
			});
			var r = n(442837),
				i = n(359119);

			function l(e) {
				return (0, r.e7)([i.ZP], () => i.ZP.getChannelSafetyWarnings(e), [e]).filter(e => e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_1 || e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_2)
			}
		},
		88101: function(e, t, n) {
			n.d(t, {
				P: () => s
			});
			var r = n(442837),
				i = n(385956),
				l = n(15701),
				o = n(594174),
				a = n(359119),
				u = n(897769),
				d = n(981312),
				c = n(403485);

			function s(e) {
				let t = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
					n = (0, l.G)(e),
					s = (0, i.v)(e),
					f = (0, u.S)(e, a.pj.STRANGER_DANGER),
					p = (0, d.U)(),
					v = (null == t ? void 0 : t.isStaff()) !== !0,
					g = (0, c.h)(e).length > 0;
				if (!(!p && v) && !n && !s && !g) return f
			}
		},
		570870: function(e, t, n) {
			n.d(t, {
				Z: () => y
			});
			var r = n(255367),
				i = n(73800),
				l = n(512722),
				o = n.n(l),
				a = n(442837),
				u = n(481060),
				d = n(10718),
				c = n(667204),
				s = n(826298),
				f = n(276022),
				p = n(978983),
				v = n(430824),
				g = n(594174),
				O = n(981631),
				h = n(689079),
				m = n(388032),
				b = n(547607);
			let y = e => {
				let t, {
						commandType: n,
						commandTargetId: l,
						channel: y,
						guildId: Z,
						onHeightUpdate: P,
						context: A
					} = e,
					E = (0, a.e7)([v.Z], () => v.Z.getGuild(null != Z ? Z : y.guild_id)),
					j = (0, a.e7)([g.default], () => g.default.getUser(l)),
					S = (0, f.Z)({
						user: j,
						guildId: null == E ? void 0 : E.id,
						context: A
					}),
					I = i.useMemo(() => ({
						channel: y,
						type: "channel"
					}), [y]),
					{
						commands: T,
						sectionDescriptors: R,
						loading: _
					} = d.wi({
						context: I,
						filters: {
							commandTypes: [n]
						},
						options: {
							limit: h.lr
						},
						allowFetch: !0
					}),
					{
						sections: C
					} = i.useMemo(() => {
						let e = {};
						return R.forEach(t => {
							e[t.id] = t
						}), {
							sections: e
						}
					}, [R]),
					N = i.useRef(_);
				i.useEffect(() => {
					_ !== N.current && (N.current = _, null == P || P())
				}, [_, P]);
				let x = i.useCallback(e => {
					o()(null != y, "menu item should not show if channel is null");
					let t = C[e.applicationId],
						n = null != t ? (0, s.ky)(t) : void 0;
					return (0, r.jsx)(u.sNh, {
						id: e.id,
						label: e.displayName,
						iconLeft: () => null != n ? (0, r.jsx)(n, {
							channel: y,
							section: t,
							width: 18,
							height: 18,
							selectable: !1
						}) : null,
						action: () => {
							(0, c.Z)({
								command: e,
								optionValues: {},
								context: {
									channel: y,
									guild: E
								},
								commandTargetId: l
							})
						}
					}, e.id)
				}, [y, E, l, C]);
				if (_ ? t = (0, r.jsx)(u.sNh, {
						id: "menu-commands-placeholder",
						render: () => (0, r.jsx)(p.Z, {}),
						disabled: !0
					}, "menu-commands-placeholder") : (t = 0 === T.length ? (0, r.jsx)(u.sNh, {
						id: "menu-commands-empty",
						label: m.intl.string(m.t.YSNlV1),
						disabled: !0
					}, "menu-commands-empty") : T.map(x), null != S && S.length > 0 && (t = (0, r.jsxs)(r.Fragment, {
						children: [t, (0, r.jsx)(u.Clw, {}, "separator"), S]
					}))), !O.TPd.TEXTUAL.has(y.type))
					if (null == S) return null;
					else t = S;
				return (0, r.jsx)(u.sNh, {
					id: "apps",
					label: m.intl.string(m.t.PHjkRE),
					listClassName: b.list,
					children: t
				})
			}
		}
	}
]);
//# sourceMappingURL=43bef53eed3e42dc.js.map