"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["88712"], {
		400354: function(e, t, n) {
			n.d(t, {
				l: () => a
			});
			var r = n(255367),
				i = n(73800),
				l = n(709014);
			let o = {
					deafen: {
						name: "deafen",
						start: 0,
						duration: 70
					},
					undeafen: {
						name: "undeafen",
						start: 110,
						duration: 70
					},
					hover_undeafened: {
						name: "hover_undeafened",
						start: 200,
						duration: 70
					},
					hover_deafened: {
						name: "hover_deafened",
						start: 300,
						duration: 70
					}
				},
				a = e => {
					let t = i.useRef(null),
						a = i.useRef(e);
					a.current = e;
					let s = i.useMemo(() => () => {
							null != t.current && t.current.play(e)
						}, [e]),
						c = i.useCallback(() => {
							if (null == t.current) return;
							let n = "deafen" === e ? "hover_undeafened" : "hover_deafened";
							t.current.play(n)
						}, [e]),
						u = i.useCallback(() => {
							if (null == t.current) return;
							let n = "deafen" === e ? "hover_undeafened" : "hover_deafened";
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
								src: () => n.e("68449").then(n.t.bind(n, 406785, 19)),
								ref: t,
								initialAnimation: a.current,
								markers: o
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
		570928: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var r, i = n(255367),
				l = n(73800),
				o = n(120356),
				a = n.n(o),
				s = n(222465);

			function c(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			class u extends(r = l.PureComponent) {
				render() {
					var e, t;
					let n = this.props,
						{
							tag: r,
							children: l,
							hoverText: o,
							className: u,
							forceHover: d
						} = n,
						f = function(e, t) {
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
						}(n, ["tag", "children", "hoverText", "className", "forceHover"]);
					return (0, i.jsxs)("div", (e = function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = null != arguments[t] ? arguments[t] : {},
								r = Object.keys(n);
							"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
								return Object.getOwnPropertyDescriptor(n, e).enumerable
							}))), r.forEach(function(t) {
								c(e, t, n[t])
							})
						}
						return e
					}({}, f), t = t = {
						className: a()(u, s.hoverRoll, {
							[s.disabled]: null == o,
							[s.forceHover]: d
						}),
						children: [(0, i.jsx)(r, {
							className: s.hovered,
							children: o
						}), (0, i.jsx)(r, {
							className: s.default,
							children: l
						})]
					}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
						var n = Object.keys(e);
						if (Object.getOwnPropertySymbols) {
							var r = Object.getOwnPropertySymbols(e);
							n.push.apply(n, r)
						}
						return n
					})(Object(t)).forEach(function(n) {
						Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
					}), e))
				}
			}
			c(u, "defaultProps", {
				tag: "div",
				forceHover: !1
			});
			let d = u
		},
		571250: function(e, t, n) {
			n.d(t, {
				Z: () => i
			});
			var r = n(388032);

			function i(e, t, n) {
				return n ? r.intl.string(r.t["2Ne/Y2"]) : t ? r.intl.string(r.t.QZ7WSU) : e ? r.intl.string(r.t["2US87+"]) : r.intl.string(r.t.wjcRFR)
			}
		},
		55311: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var r = n(846027),
				i = n(240872),
				l = n(388032);

			function o(e, t) {
				if (e) return void i.Z.show({
					title: l.intl.string(l.t.QZ7WSU),
					body: l.intl.string(l.t.Tl9JpK)
				});
				r.Z.toggleSelfDeaf({
					location: t
				})
			}
		},
		552282: function(e, t, n) {
			n.d(t, {
				Z: () => r
			});

			function r(e) {
				var t;
				return null != e ? {
					id: e.id,
					name: null != (t = e.name) ? t : ""
				} : null
			}
		},
		809357: function(e, t, n) {
			n.d(t, {
				Z: () => a,
				o: () => s
			});
			var r = n(442837),
				i = n(522474),
				l = n(658785),
				o = n(981631);

			function a(e) {
				let {
					location: t,
					options: n
				} = e, r = s(), {
					showKeybindIndicators: i
				} = l.Z.useExperiment({
					location: t
				}, n);
				return i && r
			}

			function s() {
				return !(0, r.e7)([i.Z], () => i.Z.getWindowVisible(o.KJ3.ACTIVITY_POPOUT))
			}
		},
		804570: function(e, t, n) {
			n.d(t, {
				E: () => c
			});
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				o = n.n(l),
				a = n(481060),
				s = n(632374);
			let c = i.memo(function(e) {
				let {
					emptyText: t,
					icon: n,
					absolute: i = !1
				} = e;
				return (0, r.jsx)("div", {
					className: o()(s.emptyWidgetContainer, i && s.absolute),
					children: (0, r.jsx)(a.ua7, {
						text: t,
						children: e => {
							var t, i;
							return (0, r.jsx)("div", (t = function(e) {
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
								children: (0, r.jsx)(n, {
									size: "md",
									color: a.TVs.colors.WHITE,
									className: s.emptyWidgetIcon
								})
							}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
								var n = Object.keys(e);
								if (Object.getOwnPropertySymbols) {
									var r = Object.getOwnPropertySymbols(e);
									n.push.apply(n, r)
								}
								return n
							})(Object(i)).forEach(function(e) {
								Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
							}), t))
						}
					})
				})
			})
		},
		532658: function(e, t, n) {
			n.d(t, {
				ZP: () => Q,
				e5: () => T,
				px: () => M
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				o = n.n(l),
				a = n(108542),
				s = n(442837),
				c = n(481060),
				u = n(239091),
				d = n(765250),
				f = n(13245),
				p = n(872810),
				g = n(393238),
				m = n(586902),
				O = n(493773),
				b = n(607070),
				v = n(415635),
				h = n(701362),
				y = n(172751),
				j = n(670188),
				P = n(597998),
				x = n(199902),
				S = n(314897),
				w = n(355863),
				I = n(131951),
				E = n(979651),
				Z = n(136015),
				C = n(51144),
				V = n(444295),
				k = n(981631),
				N = n(388032),
				D = n(62802);

			function A(e) {
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

			function _(e, t) {
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

			function M(e) {
				switch (e) {
					case k.ipw.LARGE:
						return c.EFr.SIZE_32;
					case k.ipw.SMALL:
						return c.EFr.SIZE_24;
					default:
						return c.EFr.SIZE_32
				}
			}

			function T(e) {
				return c.ny6[e].size
			}
			let R = () => n.e("43841").then(n.t.bind(n, 737848, 19)).then(e => {
					let {
						default: t
					} = e;
					return t
				}),
				L = {
					entering: {
						config: {
							mass: .2,
							tension: 180,
							friction: 14
						}
					},
					exiting: {
						config: {
							mass: 1,
							tension: 80,
							friction: 10,
							clamp: !0
						}
					}
				},
				G = {
					entering: {
						config: {
							mass: .5,
							tension: 240,
							friction: 10
						}
					},
					exiting: {
						config: {
							mass: 1.5,
							tension: 300,
							friction: 30,
							clamp: !0
						},
						delay: 300
					}
				};

			function W(e, t) {
				let [n, r] = i.useState(null != e && e > Date.now() - 1e4), [l, o] = i.useState(!1), [a, s] = i.useState(!0);
				return (0, O.ZP)(() => {
					n && !t && (s(!1), setTimeout(() => {
						o(!0)
					}, 16))
				}), (0, O.ZP)(() => {
					let e = setTimeout(() => {
						r(!1), setTimeout(() => {
							o(!1)
						}, 16)
					}, 2600);
					return () => clearTimeout(e)
				}), i.useMemo(() => ({
					showConnectedAnimation: l,
					recentlyConnected: n,
					hideConnectedAnimation: a,
					setHideConnectedAnimation: s
				}), [l, n, a, s])
			}
			let F = i.memo(function(e) {
					let {
						nick: t,
						connectedOn: n,
						isSettingsPreview: l,
						voiceBackgroundWidth: u,
						rightAlign: d = !1
					} = e, {
						showConnectedAnimation: f,
						recentlyConnected: p,
						hideConnectedAnimation: m,
						setHideConnectedAnimation: O
					} = W(n, l), {
						ref: v,
						width: h
					} = (0, g.ZP)(), y = (0, s.e7)([b.Z], () => b.Z.useReducedMotion), j = p ? "entering" : "exiting", {
						width: P
					} = (0, a.useSpring)(_(A({}, L[j]), {
						width: f ? h : u
					})), {
						opacity: x
					} = (0, a.useSpring)(_(A({}, G[j]), {
						opacity: +!!f,
						onRest: () => {
							f || O(!0)
						}
					})), S = i.useMemo(() => m || y ? "none" : "block", [m, y]);
					return (0, r.jsx)(a.animated.div, {
						className: o()(D.connectedAnimationContainer, {
							[D.right]: d
						}),
						style: {
							width: P,
							opacity: x,
							display: S
						},
						children: (0, r.jsxs)("div", {
							ref: v,
							className: o()(D.connectedAnimationInnerContainer, {
								[D.exiting]: "exiting" === j,
								[D.left]: !d,
								[D.right]: d
							}),
							children: [d && (0, r.jsx)(c.Fmz, {
								importData: R,
								shouldAnimate: !y,
								className: D.animation
							}), (0, r.jsx)("div", {
								children: (0, r.jsx)(c.Text, {
									variant: "text-xs/medium",
									color: "text-default",
									children: N.intl.format(N.t.uFcRen, {
										nick: t
									})
								})
							}), !d && (0, r.jsx)(c.Fmz, {
								importData: R,
								shouldAnimate: !y,
								className: D.animation
							}), (0, r.jsx)("div", {
								className: D.emptySpace
							})]
						})
					})
				}),
				U = i.memo(function(e) {
					let {
						avatarSize: t,
						userId: n,
						channelId: i,
						guildId: l
					} = e, o = 2 * t, a = -(t / 2);
					return (0, r.jsx)("div", {
						className: D.effect,
						style: {
							top: a,
							left: a,
							width: o,
							height: o
						},
						children: (0, r.jsx)(v.Z, {
							userId: n,
							channelId: i,
							guildId: l,
							containerDimensions: {
								width: o,
								height: o
							}
						})
					})
				}),
				z = i.memo(c.qEK),
				Y = i.memo(function(e) {
					let {
						channel: t,
						flipped: n = !1,
						locked: l = !1,
						user: a,
						nick: u,
						displayNameMode: d,
						displayUserMode: f,
						size: O = k.ipw.LARGE,
						onClick: b,
						onContextMenu: v,
						context: j,
						guildId: w,
						isSettingsPreview: C = !1,
						voiceState: N,
						showStreamPreview: A,
						onShowStreamPreview: _,
						onWatchStream: R,
						connectedOn: L,
						ref: G
					} = e, Y = (0, s.e7)([S.default], () => S.default.getId() === a.id, [a.id]), {
						ref: Q,
						width: B
					} = (0, g.ZP)(), {
						showConnectedAnimation: K
					} = W(L, C), q = null == N ? void 0 : N.sessionId, H = t.id, $ = a.id, [J] = (0, s.e7)([E.Z], () => {
						var e;
						return [null != (e = E.Z.getVoiceStateForChannel(H, $)) ? e : E.Z.getVoiceStateForSession($, q), E.Z.getVoiceStateVersion()]
					}, [H, $, q], Z.Q), X = C ? N : null != J ? J : N, [ee, et, en] = (0, s.Wu)([I.Z], () => Y ? [!I.Z.isSupported() || I.Z.isSelfMute() || I.Z.isSelfMutedTemporarily(), I.Z.isSelfDeaf(), !1] : [!I.Z.isSupported() || I.Z.isLocalMute(a.id), !1, I.Z.isLocalVideoDisabled(a.id)], [Y, a.id]), er = (0, s.e7)([x.Z], () => {
						let e = x.Z.getCurrentUserActiveStream();
						return null != e && e.ownerId !== a.id && x.Z.getViewerIds(e).filter(e => e === a.id).length > 0
					}, [a.id]), ei = C && (null == N ? void 0 : N.discoverable), el = (0, m.Z)({
						userId: a.id,
						context: j
					}) || ei, eo = (0, s.e7)([x.Z], () => x.Z.getStreamForUser(a.id, w)), ea = null != eo, es = i.useCallback(() => {
						(A || null != ea) && _(null)
					}, [_, A, ea]), ec = i.useCallback(() => (0, r.jsx)(h.Z, {
						user: a,
						channel: t,
						onWatch: () => {
							null != eo && ((0, p.rn)(eo, {
								forceMultiple: !0,
								noFocus: !0
							}), es(), R(null != eo ? eo : null))
						},
						onAction: () => R,
						previewIsOpen: A,
						location: k.Sbl.UNLOCKED_OVERLAY,
						hideTip: !0
					}), [a, t, eo, A, es, R]), eu = i.useCallback(e => {
						l || null == v || v(e, a)
					}, [l, v, a]), ed = i.useCallback(() => {
						l || null != ea && _(a.id)
					}, [l, _, ea, a]), ef = l || C, ep = i.useMemo(() => M(O), [O]), eg = i.useMemo(() => T(ep), [ep]), em = i.useMemo(() => a.getAvatarURL(w, eg), [a, w, eg]);
					return f === k.OYC.ONLY_WHILE_SPEAKING && ef && !el || null == X ? null : n ? (0, r.jsxs)(c.P3F, {
						innerRef: G,
						className: o()(D.voiceUser, {
							[D.speaking]: el,
							[D.interactive]: !l,
							[D.flipped]: n,
							[D.justConnected]: K
						}),
						onClick: l ? void 0 : e => null == b ? void 0 : b(e, a),
						onContextMenu: eu,
						onMouseEnter: ed,
						onMouseLeave: es,
						children: [ef && (d === k.wC$.NEVER || !el && d === k.wC$.ONLY_WHILE_SPEAKING) ? null : (0, r.jsx)(c.yRy, {
							targetElementRef: Q,
							position: "left",
							renderPopout: ec,
							shouldShow: A,
							onRequestClose: es,
							spacing: 0,
							children: () => (0, r.jsxs)("div", {
								className: D.username,
								ref: Q,
								children: [(0, r.jsx)(P.nm, {
									guildId: w,
									user: a,
									video: X.selfVideo,
									isStreaming: ea,
									className: D.voiceIcons,
									iconClassName: D.voiceIcon,
									isWatching: er,
									localMute: ee && !Y,
									localVideoDisabled: en,
									mute: X.isVoiceMuted(),
									deaf: X.isVoiceDeafened() || et && !Y,
									serverMute: X.mute || X.suppress,
									serverDeaf: X.deaf,
									disabled: !1
								}), !C && (0, r.jsx)(y.ZP, {
									primaryGuild: a.primaryGuild,
									userId: a.id,
									contextGuildId: w,
									className: D.clanTag,
									disableGuildProfile: !0,
									onShowProfile: () => {
										(0, V.Ws)(k.Odu.VOICE_V3, {
											type: V.Qu.VOICE,
											value: V.bk.PROFILE_OPENED,
											userId: a.id
										})
									}
								}), (0, r.jsx)(c.Text, {
									variant: "text-xs/medium",
									color: "text-default",
									children: u
								})]
							})
						}), !Y && (0, r.jsx)(F, {
							nick: u,
							connectedOn: L,
							isSettingsPreview: C,
							voiceBackgroundWidth: B,
							rightAlign: !0
						}), (0, r.jsx)(z, {
							className: D.avatar,
							size: ep,
							src: em,
							"aria-hidden": !0
						}), (0, r.jsx)(U, {
							avatarSize: eg,
							userId: a.id,
							channelId: t.id,
							guildId: t.getGuildId()
						})]
					}) : (0, r.jsxs)(c.P3F, {
						innerRef: G,
						className: o()(D.voiceUser, {
							[D.speaking]: el,
							[D.interactive]: !l,
							[D.flipped]: n,
							[D.justConnected]: K
						}),
						onClick: l ? void 0 : e => null == b ? void 0 : b(e, a),
						onContextMenu: eu,
						onMouseEnter: ed,
						onMouseLeave: es,
						children: [(0, r.jsx)(z, {
							className: D.avatar,
							size: ep,
							src: em,
							"aria-hidden": !0
						}), !Y && (0, r.jsx)(F, {
							nick: u,
							connectedOn: L,
							isSettingsPreview: C,
							voiceBackgroundWidth: B
						}), ef && (d === k.wC$.NEVER || !el && d === k.wC$.ONLY_WHILE_SPEAKING) ? null : (0, r.jsx)(c.yRy, {
							targetElementRef: Q,
							position: "right",
							renderPopout: ec,
							shouldShow: A,
							onRequestClose: es,
							spacing: 0,
							children: () => (0, r.jsxs)("div", {
								className: o()(D.username, {
									[D.streaming]: ea
								}),
								ref: Q,
								children: [(0, r.jsx)(c.Text, {
									variant: "text-xs/medium",
									color: "text-default",
									children: u
								}), !C && (0, r.jsx)(y.ZP, {
									primaryGuild: a.primaryGuild,
									userId: a.id,
									contextGuildId: w,
									className: D.clanTag,
									disableGuildProfile: !0,
									onShowProfile: () => {
										(0, V.Ws)(k.Odu.VOICE_V3, {
											type: V.Qu.VOICE,
											value: V.bk.PROFILE_OPENED,
											userId: a.id
										})
									}
								}), (0, r.jsx)(P.nm, {
									guildId: w,
									user: a,
									video: X.selfVideo,
									isStreaming: ea,
									className: D.voiceIcons,
									iconClassName: D.voiceIcon,
									isWatching: er,
									localMute: ee && !Y,
									localVideoDisabled: en,
									mute: X.isVoiceMuted(),
									deaf: X.isVoiceDeafened() || et && !Y,
									serverMute: X.mute || X.suppress,
									serverDeaf: X.deaf,
									disabled: !1
								})]
							})
						})]
					})
				}),
				Q = i.memo(function(e) {
					let {
						widgetId: t,
						channel: l,
						sortedVoiceState: o,
						displayNameMode: a,
						displayUserMode: s,
						locked: c,
						flipped: p,
						size: g,
						isPreviewingInGame: m,
						isSettingsPreview: O,
						context: b
					} = e, v = i.useRef(null), {
						user: h,
						member: y,
						voiceState: P,
						connectedOn: x
					} = o, [S, I] = i.useState(null), [E, Z] = i.useState(null);
					i.useEffect(() => {
						c && Z(null)
					}, [c]), i.useEffect(() => {
						null != S && (0, V.Ws)(k.Odu.VOICE_V3, {
							type: V.Qu.GO_LIVE,
							value: V.bk.STREAM_PREVIEWED
						})
					}, [S]);
					let N = e => {
							I(e)
						},
						D = (e, t) => {
							O || (0, u.jW)(e, async () => {
								let {
									default: e
								} = await Promise.all([n.e("79695"), n.e("6524")]).then(n.bind(n, 27900));
								return (0, V.Ws)(k.Odu.VOICE_V3, {
									type: V.Qu.VOICE,
									value: V.bk.SETTINGS_OPENED,
									userId: t.id
								}), n => (0, r.jsx)(e, _(A({}, n), {
									user: t,
									channelId: null == l ? void 0 : l.id,
									guildId: null == l ? void 0 : l.guild_id,
									mediaEngineContext: b,
									onShowProfile: () => Z(t.id),
									appContext: k.IlC.OVERLAY,
									onWatchStream: () => {
										(0, V.Ws)(k.Odu.VOICE_V3, {
											type: V.Qu.GO_LIVE,
											value: V.bk.ENABLED,
											userId: t.id
										})
									}
								}))
							})
						},
						M = i.useCallback(e => {
							var n, r;
							let i = null == (n = w.Z.getWidget(t)) ? void 0 : n.layoutId,
								o = null != i ? null == (r = w.Z.getWidgetsForLayout(i)) ? void 0 : r.find(e => e.type === k.Odu.GO_LIVE) : null;
							null == o || o.pinned || ((0, d.xh)(o.id), f.Z.track(k.rMx.OVERLAY_PIN_TOGGLED, {
								pinned: !0,
								guild_id: null == l ? void 0 : l.guild_id,
								channel_id: null == l ? void 0 : l.id,
								channel_type: null == l ? void 0 : l.type,
								widget_type: k.Odu.GO_LIVE
							})), null != e && null != o && (0, V.Ws)(k.Odu.VOICE_V3, {
								type: V.Qu.GO_LIVE,
								value: V.bk.ENABLED,
								userId: e.ownerId
							})
						}, [l, t]);
					if (null == h || null == l || null == P) return null;
					let T = c || m;
					return (0, r.jsx)(j.Z, {
						targetElementRef: v,
						user: h,
						guildId: l.guild_id,
						channelId: l.id,
						appContext: k.IlC.OVERLAY,
						shouldShow: E === h.id,
						onRequestClose: () => Z(null),
						spacing: 24,
						children: () => {
							var e;
							return (0, r.jsx)(Y, {
								ref: v,
								guildId: null == l ? void 0 : l.guild_id,
								user: h,
								connectedOn: x,
								nick: null != (e = null == y ? void 0 : y.nick) ? e : C.ZP.getName(h),
								flipped: p,
								voiceState: P,
								displayNameMode: a,
								displayUserMode: s,
								size: g,
								locked: T,
								onContextMenu: D,
								onClick: D,
								context: b,
								channel: l,
								showStreamPreview: h.id === S,
								onShowStreamPreview: N,
								onWatchStream: M,
								isSettingsPreview: O
							})
						}
					}, h.id)
				})
		},
		243487: function(e, t, n) {
			n.d(t, {
				ZP: () => Y,
				kI: () => z
			}), n(388685), n(539854);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				o = n.n(l),
				a = n(442837),
				s = n(481060),
				c = n(586902),
				u = n(835473),
				d = n(289823),
				f = n(933557),
				p = n(552282),
				g = n(763296),
				m = n(565799),
				O = n(501655),
				b = n(470956),
				v = n(199902),
				h = n(314897),
				y = n(592125),
				j = n(944486),
				P = n(606304),
				x = n(594174),
				S = n(979651),
				w = n(938475),
				I = n(237997),
				E = n(823379),
				Z = n(136015),
				C = n(426563),
				V = n(145597),
				k = n(444295),
				N = n(804570),
				D = n(388627),
				A = n(532658),
				_ = n(501787),
				M = n(981631),
				T = n(65154),
				R = n(388032),
				L = n(62802);

			function G(e) {
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

			function W(e, t) {
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
			let F = e => {
				let t = (null != e ? e : 0) % C.Z.DEFAULT_AVATARS.length;
				return C.Z.DEFAULT_AVATARS[t]
			};

			function U(e) {
				var t, n;
				let {
					hiddenVoiceStates: i,
					voiceStateMap: l,
					size: c,
					locked: u,
					flipped: f
				} = e, p = (0, A.e5)(c), g = (0, a.Wu)([x.default, y.Z], () => i.map(e => {
					var t;
					let n = x.default.getUser(e);
					if (null == n) return;
					let r = y.Z.getChannel(null == (t = l.get(e)) ? void 0 : t.voiceState.channelId);
					return n.getAvatarURL(null == r ? void 0 : r.getGuildId(), p, !1)
				}).filter(E.lm), [i, l, p]), m = null != (t = g[0]) ? t : F(0), O = null != (n = g[1]) ? n : F(1);
				return (0, r.jsxs)("div", {
					className: o()(L.hiddenVoiceStates, u && L.locked, f && L.flipped),
					children: [(0, r.jsx)("div", {
						className: L.hiddenVoiceStatesAvatar,
						children: (0, r.jsx)(d.Z, {
							size: c,
							backSrc: m,
							frontSrc: O,
							isTyping: !1
						})
					}), (0, r.jsx)("div", {
						className: L.hiddenVoiceStatesText,
						children: (0, r.jsxs)(s.Text, {
							variant: "text-xs/medium",
							children: ["+", i.length, " others in voice"]
						})
					})]
				})
			}
			let z = i.memo(function(e) {
				let {
					id: t,
					context: n = T.Yn.DEFAULT,
					channel: l,
					overlayVoiceStates: o,
					displayNameMode: c,
					displayUserMode: u,
					locked: d,
					pinned: f,
					guildId: p,
					showEmpty: g = !0,
					isPreviewingInGame: m,
					isSettingsPreview: O = !1,
					anchorLeft: b,
					avatarSizeMode: h,
					maxDisplayedVoiceStates: y = _.At
				} = e, j = (0, k.ee)(() => (function(e) {
					let [t, n] = e;
					return new Set(n)
				})(o), [o]), [P, x] = o, S = x.length > 0 && null != n && null != l && (!d || f), w = (0, a.Wu)([v.Z], () => Array.from(j).map(e => v.Z.getStreamForUser(e, p)).filter(E.lm).map(e => e.ownerId), [p, j]);
				i.useEffect(() => {
					S && (0, k.zi)(M.Odu.VOICE_V3, {
						locked: I.default.isInstanceLocked(),
						shownUserIds: Array.from(j),
						liveUserIds: w,
						contentInventoryIds: []
					})
				}, [j, w, S]);
				let Z = y !== _.Og ? x.slice(0, y) : x,
					C = y !== _.Og ? x.slice(y) : [],
					V = P.get(C[0]),
					D = u === M.OYC.ALWAYS && y !== _.Og;
				return S ? (0, r.jsxs)("div", {
					className: L.voiceUserContainer,
					children: [Z.map(e => {
						let i = P.get(e);
						return null == i ? null : (0, r.jsx)(A.ZP, {
							sortedVoiceState: i,
							channel: l,
							widgetId: t,
							flipped: !b,
							isPreviewingInGame: m,
							isSettingsPreview: O,
							context: n,
							size: h,
							displayNameMode: c,
							displayUserMode: u,
							locked: d
						}, e)
					}), D && 1 === C.length && null != V && (0, r.jsx)(A.ZP, {
						sortedVoiceState: V,
						channel: l,
						widgetId: t,
						flipped: !b,
						isPreviewingInGame: m,
						isSettingsPreview: O,
						context: n,
						size: h,
						displayNameMode: c,
						displayUserMode: u,
						locked: d
					}, C[0]), D && C.length > 1 && (0, r.jsx)(U, {
						hiddenVoiceStates: C,
						voiceStateMap: P,
						size: (0, A.px)(h),
						locked: d,
						flipped: !b
					})]
				}) : d || !g ? null : (0, r.jsx)(N.E, {
					emptyText: R.intl.string(R.t.hEh0l5),
					icon: s.gj8
				})
			});

			function Y(e) {
				var t;
				let {
					isSettingsPreview: n
				} = e, l = (0, a.e7)([j.Z, y.Z], () => y.Z.getChannel(j.Z.getVoiceChannelId())), o = (0, f.ZP)(l), s = function(e, t) {
					let n = (0, a.e7)([j.Z, y.Z], () => y.Z.getChannel(j.Z.getVoiceChannelId())),
						[r] = (0, a.e7)([w.ZP, m.Z, j.Z, y.Z], () => {
							let e = y.Z.getChannel(j.Z.getVoiceChannelId());
							return null == e ? [
								[], -1
							] : e.isGuildStageVoice() ? [m.Z.getMutableParticipants(e.id, O.pV.SPEAKER), m.Z.getParticipantsVersion(e.id)] : [w.ZP.getVoiceStatesForChannel(e), w.ZP.getVoiceStateVersion(e.getGuildId())]
						}, [], Z.Q),
						l = (0, b.Es)(null == n ? void 0 : n.id, r),
						o = i.useMemo(() => new Map(l.map(e => [e.user.id, e])), [l]),
						s = (0, a.e7)([h.default], () => h.default.getId());
					return [o, (0, a.Wu)([S.Z, j.Z, P.Z, g.Z], () => {
						let n = Array.from(l.map(e => {
							let {
								user: t
							} = e;
							return t.id
						}));
						if (t === _.Og || n.length <= t) return n;
						let r = new Map;
						for (let t of n) {
							let n = (0, c.O)({
									userId: t,
									checkSoundSharing: !0,
									checkSoundboardSounds: !1,
									checkIsMuted: !0,
									context: e
								}, [S.Z, j.Z, P.Z, g.Z]),
								i = t === s;
							(n || i) && r.set(t, {
								isSpeaking: n,
								isCurrentUser: i
							})
						}
						let i = [],
							o = [],
							a = [];
						for (let e = 0; e < n.length; e++) {
							let l = n[e],
								s = r.get(l);
							e < t ? i.push(l) : s && (s.isSpeaking || s.isCurrentUser) ? a.push(l) : o.push(l)
						}
						if (a.length > 0) {
							let e = i.slice(0, t - a.length),
								n = i.slice(t - a.length);
							return [...e, ...a, ...n, ...o]
						}
						return n
					}, [l, e, s, t])]
				}(T.Yn.DEFAULT, e.maxDisplayedVoiceStates), d = (0, a.e7)([v.Z], () => v.Z.getStreamerActiveStreamMetadata()), x = (0, D.II)(), E = (0, u.q)(null == x ? void 0 : x.id), C = (0, a.cj)([v.Z, I.default], () => {
					let e = v.Z.getCurrentUserActiveStream();
					return {
						displayUserMode: I.default.getDisplayUserMode(),
						displayNameMode: I.default.getDisplayNameMode(),
						avatarSizeMode: I.default.getAvatarSizeMode(),
						streamApplication: (null == d ? void 0 : d.pid) === (0, V.getPID)() ? (0, p.Z)(x) : null,
						stream: e
					}
				});
				return (0, r.jsx)(z, W(G(W(G({}, C), {
					application: E
				}), e), {
					overlayVoiceStates: s,
					channel: l,
					guildId: null == l ? void 0 : l.guild_id,
					title: null != o ? o : "",
					streamMetadata: d,
					streamApplication: null != (t = C.streamApplication) ? t : {
						id: null,
						name: null == d ? void 0 : d.sourceName
					},
					isSettingsPreview: n
				}))
			}
		},
		430561: function(e, t, n) {
			n.d(t, {
				GY: () => m,
				PI: () => p,
				RT: () => O,
				ls: () => g
			});
			var r = n(255367);
			n(73800);
			var i = n(120356),
				l = n.n(i),
				o = n(692547),
				a = n(481060),
				s = n(765250),
				c = n(388032),
				u = n(663388);

			function d(e) {
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

			function f(e, t) {
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

			function p(e) {
				let {
					children: t
				} = e;
				return (0, r.jsx)("div", {
					className: u.titleWrapper,
					children: (0, r.jsx)(a.Text, {
						variant: "text-xs/semibold",
						color: "header-primary",
						children: t
					})
				})
			}

			function g(e) {
				let {
					onClick: t
				} = e, n = c.intl.string(c.t["3D5yo6"]);
				return (0, r.jsx)(a.ua7, {
					text: n,
					"aria-label": n,
					children: e => (0, r.jsx)(a.P3F, f(d({}, e), {
						className: u.button,
						onClick: t,
						children: (0, r.jsx)(a.ewm, {
							size: "xxs",
							color: o.Z.colors.INTERACTIVE_ACTIVE
						})
					}))
				})
			}

			function m(e) {
				let {
					widgetId: t,
					showAllStreams: n
				} = e, i = n ? c.intl.string(c.t.q2B3rq) : c.intl.string(c.t.JKGi6u), p = () => {
					(0, s.zG)(t, {
						showAllStreams: !n
					})
				};
				return (0, r.jsx)(a.ua7, {
					text: i,
					"aria-label": i,
					children: e => (0, r.jsx)(a.P3F, f(d({}, e), {
						className: l()(u.button, n && u.active),
						onClick: p,
						children: (0, r.jsx)(a.pzj, {
							size: "xxs",
							color: n ? o.Z.colors.BG_BRAND : o.Z.colors.INTERACTIVE_ACTIVE
						})
					}))
				})
			}

			function O(e) {
				let {
					id: t,
					pinned: n
				} = e, i = n ? c.intl.string(c.t.cSu80t) : c.intl.string(c.t.cM8Vnp);
				return (0, r.jsx)(a.ua7, {
					text: i,
					"aria-label": i,
					children: e => (0, r.jsx)(a.P3F, f(d({}, e), {
						className: l()(u.button, n && u.active),
						onClick: () => (0, s.xh)(t),
						children: (0, r.jsx)(a.k5M, {
							size: "xxs",
							color: n ? o.Z.colors.BG_BRAND : o.Z.colors.INTERACTIVE_ACTIVE
						})
					}))
				})
			}
		}
	}
]);
//# sourceMappingURL=6ad6d91333fcdb84.js.map