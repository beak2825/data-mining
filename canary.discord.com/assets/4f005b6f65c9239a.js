"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["69866"], {
		761781: function(e, t, n) {
			n.d(t, {
				Z: () => f
			}), n(388685);
			var r, l, i, o = n(442837),
				s = n(570140),
				a = n(890022);
			let c = new Set;

			function u(e) {
				let {
					userActivities: t
				} = e;
				(0, a.uw)("RecentUserActivityStore") && null != t && (c = new Set(t.map(e => e.application_id)))
			}
			class d extends(r = o.ZP.Store) {
				get currentUserApplicationIds() {
					return c
				}
			}
			i = "RecentUserActivityStore", (l = "displayName") in d ? Object.defineProperty(d, l, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : d[l] = i;
			let f = new d(s.Z, {
				CONNECTION_OPEN_SUPPLEMENTAL: u,
				CONNECTION_OPEN_STATE_UPDATE: u
			})
		},
		890022: function(e, t, n) {
			n.d(t, {
				_x: () => c,
				dm: () => s,
				uw: () => a
			});
			var r = n(818083),
				l = n(752048),
				i = n(699516);
			let o = (0, r.B)({
				kind: "user",
				id: "2025-04_game_activity_notification",
				label: "Game Activity Notifications",
				defaultConfig: {
					fromUserType: 2
				},
				treatments: [{
					id: 1,
					label: "Show Notifications from Friends Only",
					config: {
						fromUserType: 0
					}
				}, {
					id: 2,
					label: "Show Notifications from Friends and High Affinity Users",
					config: {
						fromUserType: 1
					}
				}]
			});

			function s(e) {
				switch (o.getCurrentConfig({
						location: "filterPresences"
					}).fromUserType) {
					case 2:
						return [];
					case 0:
						return e.filter(e => {
							let {
								user: t
							} = e;
							return i.Z.isFriend(t.id)
						});
					case 1:
						return e.filter(e => {
							let {
								user: t
							} = e;
							return i.Z.isFriend(t.id) || l.Z.isHighlyAffinedVCUser(t.id)
						});
					default:
						return e
				}
			}

			function a(e) {
				return 2 !== o.getCurrentConfig({
					location: e
				}).fromUserType
			}

			function c(e) {
				return 2 !== o.useExperiment({
					location: e
				}).fromUserType
			}
		},
		688907: function(e, t, n) {
			n.d(t, {
				BH: () => s,
				MH: () => a,
				j4: () => d,
				nC: () => u
			});
			var r = n(442837),
				l = n(524437),
				i = n(761781),
				o = n(695346);

			function s() {
				return c(o.YT.useSetting(), (0, r.e7)([i.Z], () => i.Z.currentUserApplicationIds.size > 0))
			}

			function a() {
				return c(o.YT.getSetting(), i.Z.currentUserApplicationIds.size > 0)
			}

			function c(e, t) {
				return e === l.Tv.ACTIVITY_NOTIFICATIONS_UNSET ? t ? l.Tv.ONLY_GAMES_PLAYED : l.Tv.ACTIVITY_NOTIFICATIONS_ENABLED : e !== l.Tv.ONLY_GAMES_PLAYED || t ? e : l.Tv.ACTIVITY_NOTIFICATIONS_ENABLED
			}

			function u() {
				return o.Qq.useSetting()
			}

			function d() {
				return o.Qq.getSetting()
			}
		},
		537413: function(e, t, n) {
			n.d(t, {
				Z: () => i
			}), n(388685);
			var r = n(451467),
				l = n(37113);

			function i(e, t, n) {
				for (let i of l.no[e])
					if ((0, r.Z)(e, i.resolution, i.fps, t, n)) return [i.resolution, i.fps];
				return null
			}
		},
		143135: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			var r = n(855403);

			function l(e, t, n) {
				return null == t ? e : n.find(e => (0, r.Z)(t.id, e.windowHandle))
			}
		},
		562224: function(e, t, n) {
			n.d(t, {
				Z: () => x
			}), n(388685);
			var r = n(268146),
				l = n(872810),
				i = n(594190),
				o = n(751571),
				s = n(695346),
				a = n(361291),
				c = n(592125),
				u = n(430824),
				d = n(131951),
				f = n(944486),
				h = n(594174),
				p = n(358085),
				g = n(451467),
				O = n(537413),
				N = n(143135),
				y = n(37113),
				b = n(761274);
			async function x(e, t) {
				var n, x, E, m, v, C, I, T, j, S;
				let P = h.default.getCurrentUser(),
					_ = f.Z.getVoiceChannelId(),
					A = c.Z.getChannel(_),
					R = null == A ? void 0 : A.getGuildId(),
					w = null == (n = u.Z.getGuild(R)) ? void 0 : n.premiumTier;
				if (null == P || null == A || null == _) return [!1, "no user or channel"];
				let Z = null;
				if (null == (Z = "number" == typeof e ? i.ZP.getGameForPID(e) : e)) return [!1, "no source"];
				if (!d.Z.getUseSystemScreensharePicker() && !await o.Z.hasPermission(b.Eu.SCREEN_RECORDING, {
						showAuthorizationError: !1
					})) return [!1, "no permission"];
				let {
					preset: D,
					resolution: k,
					fps: M,
					soundshareEnabled: U
				} = a.Z.getState(), L = null != (E = null == t ? void 0 : t.preset) ? E : D, [B, G] = null != (m = (0, O.Z)(L, P, w)) ? m : [], V = null != (v = null != B ? B : null == t ? void 0 : t.resolution) ? v : k, F = null != (C = null != G ? G : null == t ? void 0 : t.fps) ? C : M, W = null != (I = null == t ? void 0 : t.previewDisabled) ? I : s.I0.getSetting(), K = null != (T = null == t ? void 0 : t.soundshareEnabled) ? T : U;
				return (0, g.Z)(L, V, F, P, w, A) || (L = y.tI.PRESET_VIDEO, V = y.LY.RESOLUTION_720, F = y.ws.FPS_30), (0, l.Rc)({
					preset: L,
					resolution: V,
					frameRate: F,
					soundshareEnabled: K
				}), (0, l.WH)(R, _, (j = function(e) {
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
				}({}, function(e) {
					if (e.hasOwnProperty("pid")) return {
						pid: e.pid
					};
					let t = (0, N.Z)(void 0, e, i.ZP.getRunningGames()),
						n = !(0, p.isWindows)() || null == t || (null == e ? void 0 : e.id.startsWith(r.vA.CAMERA)) || null == t ? null : t.pid;
					return null != n ? {
						pid: n
					} : {
						sourceId: e.id,
						sourceName: e.name,
						sourceIcon: e.icon
					}
				}(Z)), S = S = {
					audioSourceId: (null == (x = Z.id) ? void 0 : x.startsWith(r.vA.CAMERA)) ? null == t ? void 0 : t.audioSourceId : void 0,
					sound: K,
					previewDisabled: W,
					goLiveModalDurationMs: null == t ? void 0 : t.goLiveModalDurationMs
				}, Object.getOwnPropertyDescriptors ? Object.defineProperties(j, Object.getOwnPropertyDescriptors(S)) : (function(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						n.push.apply(n, r)
					}
					return n
				})(Object(S)).forEach(function(e) {
					Object.defineProperty(j, e, Object.getOwnPropertyDescriptor(S, e))
				}), j)), [!0, void 0]
			}
		},
		106371: function(e, t, n) {
			n.d(t, {
				Z: () => r
			});
			let r = (0, n(818083).B)({
				kind: "user",
				id: "2024-08_reaction_push_notifications_user",
				label: "In App Notifications for Reactions",
				defaultConfig: {
					enableInAppNotifications: !1,
					enableNotificationsForAllReactions: !1
				},
				treatments: [{
					id: 1,
					label: "Enable In App Notifications for Reactions (First Reaction)",
					config: {
						enableInAppNotifications: !0,
						enableNotificationsForAllReactions: !1
					}
				}, {
					id: 2,
					label: "Enable In App Notifications for Reactions (All Reactions)",
					config: {
						enableInAppNotifications: !0,
						enableNotificationsForAllReactions: !0
					}
				}, {
					id: 3,
					label: "Enable In App Notifications for Reactions (All Reactions)",
					config: {
						enableInAppNotifications: !0,
						enableNotificationsForAllReactions: !0
					}
				}]
			})
		},
		301107: function(e, t, n) {
			n.d(t, {
				W: () => o
			}), n(413496), n(433524), n(35282), n(415506);
			var r = n(73800),
				l = n(250683),
				i = n(974167);

			function o(e) {
				let {
					fingerprintBase64: t,
					chunkSize: n,
					desiredLength: o
				} = e, s = r.useMemo(() => {
					if (null == t || "" === t) return null;
					let e = l.toByteArray(t),
						r = (0, i.Dq)(e, o, n);
					if (null == r) return null;
					let s = RegExp(".{1,".concat(n, "}"), "g"),
						a = r.match(s);
					return null == a ? null : Array.from(a)
				}, [n, t, o]);
				if (null != t && "" !== t && null == s) throw Error("[useReadableSecureFramesCode] Failed to parse base 64 code.");
				return s
			}
		},
		160038: function(e, t, n) {
			n.d(t, {
				Z: () => m
			}), n(388685), n(49124);
			var r = n(255367),
				l = n(73800),
				i = n(120356),
				o = n.n(i),
				s = n(46973),
				a = n(481060),
				c = n(304680),
				u = n(706619),
				d = n(695346),
				f = n(131951),
				h = n(626135),
				p = n(572004),
				g = n(63063),
				O = n(476221),
				N = n(981631),
				y = n(65154),
				b = n(388032),
				x = n(684680);
			let E = () => {
					f.Z.getMediaEngine().once(s.aB.ConnectionStats, e => {
						let t = JSON.stringify(Object.values(y.Yn).map(t => {
							let n = e.filter(e => {
								let {
									connection: n
								} = e;
								return n.context === t
							}).map((e, n) => {
								let r = e.stats;
								return r.context = t, r.index = n, r
							});
							for (let e of n) {
								var r;
								(null == e || null == (r = e.transport) ? void 0 : r.localAddress) != null && (e.transport.localAddress = "(redacted)")
							}
							return n
						}).filter(e => e.length > 0), null, 2);
						(0, p.JG)(t, () => (0, a.showToast)((0, a.createToast)(b.intl.string(b.t["t5VZ8/"]), a.ToastType.SUCCESS)))
					})
				},
				m = function(e) {
					(0, l.useEffect)(() => {
						h.default.track(N.rMx.OPEN_POPOUT, {
							type: "RTC Connection"
						})
					}, []);
					let t = (0, l.useCallback)(() => {
							let {
								closePopout: t
							} = e;
							null != t && t(), c.bA()
						}, [e]),
						n = (0, l.useCallback)(() => {
							let {
								hostname: t,
								averagePing: n,
								lastPing: i,
								outboundLossRate: s
							} = e, a = d.Sb.getSetting();
							return (0, r.jsxs)(l.Fragment, {
								children: [a && (0, r.jsxs)("div", {
									children: [(0, r.jsx)("div", {
										className: x.graphContainer,
										children: (0, r.jsx)(u.Z, {
											dataPoints: e.pings,
											width: 258,
											height: 80
										})
									}), (0, r.jsx)("div", {
										className: x.popoutText,
										children: (0, r.jsx)("strong", {
											children: O.Z.getShortHostname(t)
										})
									})]
								}), (0, r.jsx)("div", {
									className: x.popoutText,
									children: b.intl.format(b.t["X58/lJ"], {
										averagePing: n.toFixed(0)
									})
								}), null != i ? (0, r.jsx)("div", {
									className: x.popoutText,
									children: b.intl.format(b.t["6iv2TE"], {
										lastPing: i.toFixed(0)
									})
								}) : null, null != s ? (0, r.jsx)("div", {
									className: x.popoutText,
									children: b.intl.format(b.t.VIBJMz, {
										outboundLossRate: s.toFixed(1)
									})
								}) : null, (0, r.jsxs)("div", {
									className: o()(x.popoutText, x.popoutTextDetails),
									children: [null == s ? b.intl.formatToPlainString(b.t.vggaMj, {
										badPing: 250
									}) : null, null != s ? b.intl.formatToPlainString(b.t["3pFz1N"], {
										badPing: 250,
										badLossRate: 10
									}) : null]
								})]
							})
						}, [e]),
						{
							connectionState: i,
							connectionTypeText: s
						} = e,
						p = d.Sb.getSetting(),
						m = {
							[N.hes.AWAITING_ENDPOINT]: b.intl.format(b.t.Eu2vUV, {
								url: N.yXt.STATUS
							}),
							[N.hes.CONNECTING]: b.intl.string(b.t["y+E8aG"]),
							[N.hes.AUTHENTICATING]: b.intl.string(b.t["5lGIZG"]),
							[N.hes.DISCONNECTED]: b.intl.string(b.t.fOX25O),
							[N.hes.RTC_CONNECTING]: b.intl.string(b.t.b5Ubd3),
							[N.hes.ICE_CHECKING]: b.intl.format(b.t.SyoYUV, {
								url: g.Z.getArticleURL(N.BhN.VOICE_CONNECTION_ERRORS)
							}),
							[N.hes.DTLS_CONNECTING]: b.intl.format(b.t.SyoYUV, {
								url: g.Z.getArticleURL(N.BhN.VOICE_CONNECTION_ERRORS)
							}),
							[N.hes.RTC_CONNECTED]: n,
							[N.hes.NO_ROUTE]: b.intl.format(b.t["2tgQnp"], {
								url: g.Z.getArticleURL(N.BhN.VOICE_CONNECTION_ERRORS)
							}),
							[N.hes.RTC_DISCONNECTED]: b.intl.string(b.t.fOX25O)
						} [i];
					return (0, r.jsxs)(r.Fragment, {
						children: ["function" == typeof m ? m() : (0, r.jsx)("p", {
							className: o()(x.popoutText, x.popoutTextDetails),
							children: m
						}), (0, r.jsx)("hr", {
							className: x.separator
						}), (0, r.jsxs)("div", {
							className: x.popoutBottom,
							children: [(0, r.jsxs)("span", {
								className: o()(x.secured, x.textWithIcon),
								children: [(0, r.jsx)(a.mBM, {
									size: "xxs",
									color: a.TVs.colors.TEXT_FEEDBACK_POSITIVE.css,
									className: x.__invalid_icon
								}), s]
							}), p && f.Z.supports(y.AN.DIAGNOSTICS) && !__OVERLAY__ && (0, r.jsxs)(r.Fragment, {
								children: [(0, r.jsxs)(a.eee, {
									className: o()(x.debugButton, x.textWithIcon),
									onClick: t,
									children: [b.intl.string(b.t.KBoWg4), (0, r.jsx)(a.rgF, {
										size: "xxs",
										color: "currentColor",
										className: x.__invalid_icon
									})]
								}), (0, r.jsxs)(a.eee, {
									className: o()(x.copyStatsButton, x.textWithIcon),
									onClick: E,
									title: "Copy to clipboard",
									children: [b.intl.string(b.t["XEb+Sk"]), (0, r.jsx)(a.TIy, {
										size: "xxs",
										color: "currentColor",
										className: x.__invalid_icon
									})]
								})]
							}), !p && !__OVERLAY__ && (0, r.jsx)(a.eee, {
								className: x.debugButton,
								href: g.Z.getArticleURL(N.BhN.VOICE_VIDEO_TROUBLESHOOTING),
								children: b.intl.string(b.t.hvVgAQ)
							})]
						})]
					})
				}
		},
		873596: function(e, t, n) {
			n.d(t, {
				Z: () => I
			}), n(388685);
			var r = n(255367),
				l = n(73800),
				i = n(442837),
				o = n(481060),
				s = n(313201),
				a = n(19780),
				c = n(979651),
				u = n(362446),
				d = n(571826),
				f = n(277642),
				h = n(441894),
				p = n(160038),
				g = n(586646),
				O = n(760373),
				N = n(388032),
				y = n(935179);

			function b(e) {
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

			function x(e, t) {
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

			function E(e) {
				let {
					lobbyId: t,
					connectionTypeText: n,
					closePopout: l
				} = e, o = (0, i.cj)([u.Z], () => ({
					connectionState: u.Z.getConnectionState(t),
					hostname: u.Z.getHostname(t),
					averagePing: u.Z.getAveragePing(t),
					lastPing: u.Z.getLastPing(t),
					pings: u.Z.getPings(),
					outboundLossRate: u.Z.getOutboundLossRate(t)
				}));
				return (0, r.jsx)(p.Z, x(b({}, o), {
					closePopout: l,
					connectionTypeText: n
				}))
			}

			function m(e) {
				let {
					closePopout: t,
					connectionTypeText: n
				} = e, l = (0, i.cj)([a.Z], () => ({
					connectionState: a.Z.getState(),
					hostname: a.Z.getHostname(),
					averagePing: a.Z.getAveragePing(),
					lastPing: a.Z.getLastPing(),
					outboundLossRate: a.Z.getOutboundLossRate(),
					pings: a.Z.getPings()
				}));
				return (0, r.jsx)(p.Z, x(b({}, l), {
					closePopout: t,
					connectionTypeText: n
				}))
			}

			function v(e) {
				let {
					channelId: t,
					isOverlay: n,
					lobbyId: l,
					closePopout: i
				} = e, o = (0, h.J)({
					channelId: t
				}) ? N.intl.string(N.t["3BogKS"]) : N.intl.string(N.t.ETIVvr);
				return n ? (0, r.jsx)(E, {
					lobbyId: l,
					closePopout: i,
					connectionTypeText: o
				}) : (0, r.jsx)(m, {
					closePopout: i,
					connectionTypeText: o
				})
			}

			function C(e) {
				let t = (0, i.e7)([c.Z], () => c.Z.hasVideo(e.channelId)),
					[n, a] = l.useState(O.tu.RTC_DEBUG_PANEL),
					u = (0, s.Dt)(),
					h = l.useMemo(() => {
						switch (n) {
							case O.tu.RTC_DEBUG_PANEL:
								return (0, r.jsx)(v, b({}, e));
							case O.tu.RTC_SECURE_FRAMES:
								return (0, r.jsx)(g.Z, {
									channelId: e.channelId
								})
						}
					}, [e, n]);
				l.useEffect(() => {
					(0, d.sN)({
						channelId: e.channelId,
						selectedTab: n
					})
				}, [e.channelId, n]);
				let p = (0, f.r)();
				return l.useEffect(() => {
					p && a(O.tu.RTC_DEBUG_PANEL)
				}, [p]), (0, r.jsxs)("div", {
					className: y.container,
					children: [(0, r.jsx)(o.X6q, {
						className: y.title,
						variant: "heading-lg/bold",
						color: "header-primary",
						children: t ? N.intl.string(N.t.IlHdW1) : N.intl.string(N.t.WsOisr)
					}), (0, r.jsxs)(o.njP, {
						className: y.tabs,
						selectedItem: n,
						type: "top",
						look: "brand",
						onItemSelect: a,
						children: [(0, r.jsx)(o.njP.Item, {
							id: O.tu.RTC_DEBUG_PANEL,
							className: y.tabBarItem,
							children: N.intl.string(N.t.MBY1Pj)
						}), p ? null : (0, r.jsx)(o.njP.Item, {
							id: O.tu.RTC_SECURE_FRAMES,
							className: y.tabBarItem,
							children: N.intl.string(N.t.zC6o3t)
						})]
					}), (0, r.jsx)(o.njP.Panel, {
						id: n,
						"aria-labelledby": u,
						children: h
					})]
				})
			}

			function I(e) {
				return (0, h.J)({
					channelId: e.channelId
				}) ? (0, r.jsx)(C, b({}, e)) : (0, r.jsx)("div", {
					className: y.debugPanelStandalone,
					children: (0, r.jsx)("section", {
						className: y.debugPanelSection,
						children: (0, r.jsx)(v, b({}, e))
					})
				})
			}
		},
		917405: function(e, t, n) {
			n.d(t, {
				Z: () => x
			});
			var r = n(255367),
				l = n(73800),
				i = n(120356),
				o = n.n(i),
				s = n(481060),
				a = n(100527),
				c = n(522651),
				u = n(476221),
				d = n(873596),
				f = n(423516),
				h = n(981631),
				p = n(683560);

			function g(e) {
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
			let O = {
					[h.QKv.CONNECTED]: p.rtcConnectionStatusConnected,
					[h.QKv.CONNECTING]: p.rtcConnectionStatusConnecting,
					[h.QKv.ERROR]: p.rtcConnectionStatusError
				},
				N = {
					[h.IE4.FINE]: p.rtcConnectionQualityFine,
					[h.IE4.AVERAGE]: p.rtcConnectionQualityAverage,
					[h.IE4.BAD]: p.rtcConnectionQualityBad,
					[h.IE4.UNKNOWN]: null
				},
				y = {
					[h.IE4.FINE]: s.B_b,
					[h.IE4.AVERAGE]: s.hLg,
					[h.IE4.BAD]: s.mbS,
					[h.IE4.UNKNOWN]: s._3e
				};

			function b(e) {
				var {
					quality: t,
					largePing: n
				} = e, l = function(e, t) {
					if (null == e) return {};
					var n, r, l = function(e, t) {
						if (null == e) return {};
						var n, r, l = {},
							i = Object.keys(e);
						for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
						return l
					}(e, t);
					if (Object.getOwnPropertySymbols) {
						var i = Object.getOwnPropertySymbols(e);
						for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
					}
					return l
				}(e, ["quality", "largePing"]);
				let i = y[t];
				return (0, r.jsx)(i, g({
					className: o()(p.ping, {
						[p.largePing]: n
					})
				}, l))
			}

			function x(e) {
				let {
					quality: t,
					lastPing: n,
					state: i,
					className: y,
					children: x,
					channelId: E,
					childrenAsSubtitle: m,
					connectionStatusTextVariant: v,
					hasVideo: C
				} = e, I = l.useRef(null), T = i === h.hes.RTC_CONNECTED, j = l.useCallback(e => {
					var t, n;
					return (0, r.jsx)(d.Z, (t = g({}, e), n = n = {
						channelId: E
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
				}, [E]), {
					connectionStatus: S,
					connectionStatusText: P
				} = u.Z.getStatus(i, C);
				return (0, r.jsxs)("div", {
					className: p.rtcConnectionStatusWrapper,
					children: [(0, r.jsxs)("div", {
						className: o()(p.rtcConnectionStatus, N[t], y),
						children: [T && (0, r.jsx)(s.ua7, {
							text: t !== h.IE4.UNKNOWN && null != n ? "".concat(n.toFixed(0), " ms") : null,
							children: e => (0, r.jsx)(b, g({
								quality: t,
								largePing: m
							}, e))
						}), (0, r.jsxs)("div", {
							className: p.labelWrapper,
							children: [(0, r.jsx)(s.yRy, {
								targetElementRef: I,
								renderPopout: j,
								position: "top",
								children: e => {
									let {
										onClick: t
									} = e;
									return (0, r.jsx)(s.P3F, {
										innerRef: I,
										onClick: e => {
											(0, c.v)(a.Z.RTC_PANEL, c.d.CONNECTION_STATUS), t(e)
										},
										children: (0, r.jsx)(f.Z, {
											text: P,
											textVariant: v,
											hasVideo: C,
											className: O[S],
											hasConnectedChannel: null != E
										})
									})
								}
							}), m ? x : null]
						})]
					}), m ? null : x]
				})
			}
		},
		423516: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r = n(255367);
			n(73800);
			var l = n(120356),
				i = n.n(l),
				o = n(481060),
				s = n(570928),
				a = n(388032),
				c = n(593210);
			let u = function(e) {
				let {
					className: t,
					hasVideo: n,
					text: l,
					hasConnectedChannel: u,
					textVariant: d = "text-md/medium"
				} = e, f = n ? a.intl.string(a.t.IlHdW1) : a.intl.string(a.t.WsOisr);
				return (0, r.jsx)(s.Z, {
					className: i()(t, c.hoverableStatus),
					hoverText: u ? (0, r.jsx)(o.Text, {
						variant: d,
						color: "currentColor",
						children: f
					}) : null,
					children: (0, r.jsx)(o.Text, {
						variant: d,
						color: "currentColor",
						children: l
					})
				})
			}
		},
		586646: function(e, t, n) {
			n.d(t, {
				Z: () => O
			});
			var r = n(255367),
				l = n(73800),
				i = n(442837),
				o = n(481060),
				s = n(19780),
				a = n(571826),
				c = n(630759),
				u = n(301107),
				d = n(785792),
				f = n(190054),
				h = n(760373),
				p = n(388032),
				g = n(764229);

			function O(e) {
				let {
					channelId: t
				} = e, n = (0, i.e7)([s.Z], () => {
					var e;
					return null == (e = s.Z.getSecureFramesState()) ? void 0 : e.epochAuthenticator
				}), O = (0, u.W)({
					fingerprintBase64: n,
					chunkSize: h.y6,
					desiredLength: h.YP
				}), N = l.useCallback(() => {
					(0, a.PM)({
						channelId: t
					})
				}, [t]);
				return (0, r.jsxs)("div", {
					className: g.container,
					children: [(0, r.jsxs)("div", {
						className: g.tag,
						children: [(0, r.jsx)(o.mBM, {
							size: "xxs",
							color: o.TVs.colors.TEXT_FEEDBACK_POSITIVE
						}), (0, r.jsx)(o.Text, {
							variant: "text-xs/medium",
							color: "text-feedback-positive",
							children: p.intl.string(p.t["3BogKS"])
						})]
					}), (0, r.jsx)(o.Text, {
						variant: "text-xs/normal",
						color: "text-secondary",
						children: p.intl.string(p.t.B9JNsr)
					}), (0, r.jsxs)("div", {
						className: g.header,
						children: [(0, r.jsx)(o.X6q, {
							variant: "text-sm/bold",
							color: "header-primary",
							children: p.intl.string(p.t.cTQI5u)
						}), null != O && (0, r.jsx)(f.H, {
							chunks: O,
							color: o.TVs.colors.INTERACTIVE_NORMAL.css,
							onCopy: N
						})]
					}), (0, r.jsx)(d.b, {
						className: g.code,
						chunks: O,
						columns: h.WK
					}), (0, r.jsx)(o.Text, {
						variant: "text-xs/normal",
						color: "text-secondary",
						children: p.intl.format(p.t.wKxADQ, {
							helpArticle: (0, c.uV)()
						})
					})]
				})
			}
		},
		785792: function(e, t, n) {
			n.d(t, {
				b: () => c
			});
			var r = n(255367),
				l = n(73800),
				i = n(120356),
				o = n.n(i),
				s = n(481060),
				a = n(135169);

			function c(e) {
				let {
					chunks: t,
					columns: n,
					className: i
				} = e, c = l.useMemo(() => ({
					"--secure-frames-columns": n
				}), [n]);
				return null == t ? (0, r.jsx)("div", {
					className: a.loading,
					children: (0, r.jsx)(s.$jN, {})
				}) : (0, r.jsx)("div", {
					style: c,
					className: o()(a.code, i),
					children: t.map((e, t) => (0, r.jsx)("div", {
						className: o()(a.chunk, {
							[a.divider]: t > n - 1
						}),
						children: (0, r.jsx)(s.Text, {
							className: a.codeText,
							variant: "code",
							color: "text-default",
							children: e
						})
					}, "".concat(e, "-").concat(t)))
				})
			}
		},
		190054: function(e, t, n) {
			n.d(t, {
				H: () => d
			}), n(388685);
			var r = n(255367),
				l = n(73800),
				i = n(120356),
				o = n.n(i),
				s = n(481060),
				a = n(572004),
				c = n(388032),
				u = n(798665);

			function d(e) {
				var {
					chunks: t,
					className: n,
					onCopy: i
				} = e, d = function(e, t) {
					if (null == e) return {};
					var n, r, l = function(e, t) {
						if (null == e) return {};
						var n, r, l = {},
							i = Object.keys(e);
						for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
						return l
					}(e, t);
					if (Object.getOwnPropertySymbols) {
						var i = Object.getOwnPropertySymbols(e);
						for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
					}
					return l
				}(e, ["chunks", "className", "onCopy"]);
				let f = l.useMemo(() => null == t ? void 0 : t.join(" "), [t]),
					[h, p] = l.useState(!1),
					g = l.useCallback(() => {
						(0, a.JG)(f, () => {
							p(!0), null == i || i()
						})
					}, [i, f]),
					O = h ? s.owK : s.TIy;
				return (0, r.jsx)(s.P3F, {
					className: o()(u.container, n),
					onClick: g,
					children: (0, r.jsx)(s.ua7, {
						text: h ? c.intl.string(c.t["t5VZ8/"]) : c.intl.string(c.t.OpuAlJ),
						children: e => {
							var t, n;
							return (0, r.jsx)(O, (t = function(e) {
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
							}({}, d, e), n = n = {
								size: "xxs",
								color: h ? s.TVs.colors.TEXT_FEEDBACK_POSITIVE : s.TVs.colors.INTERACTIVE_NORMAL
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
					})
				})
			}
		},
		706619: function(e, t, n) {
			n.d(t, {
				Z: () => a
			}), n(388685);
			var r = n(255367),
				l = n(73800),
				i = n(311308),
				o = n(692547),
				s = n(481060);

			function a(e) {
				let t = (0, l.useRef)(null),
					[n, a] = (0, l.useState)(null),
					[c] = (0, l.useState)(() => new i.TimelineDataSeries),
					u = (0, s.dQu)(o.Z.colors.BACKGROUND_BASE_LOW).hsl(),
					d = (0, s.dQu)(o.Z.colors.TEXT_DEFAULT).hsl(),
					f = (0, s.dQu)(o.Z.colors.BACKGROUND_ACCENT).hsl(),
					h = (0, s.dQu)(o.Z.unsafe_rawColors.BRAND_500).hsl();
				(0, l.useEffect)(() => {
					var e;
					let n = t.current;
					if (null == n) return;
					let r = new i.TimelineGraphView(n, null != (e = window.devicePixelRatio) ? e : 1);
					r.backgroundColor = u, r.textColor = d, r.gridColor = f, r.timeOptions = {
						timeStyle: "short"
					}, r.fontFamily = "gg sans", r.fontSize = 11, c.setColor(h), r.addDataSeries(c), r.updateEndDate(), a(r)
				}, [t, u, h, f, d, c]), c.setPoints(e.dataPoints), null == n || n.updateEndDate();
				let p = {
					width: e.width,
					height: e.height
				};
				return (0, r.jsx)("canvas", {
					style: p,
					width: e.width,
					height: e.height,
					ref: t
				}, "canvas")
			}
		},
		352527: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var r, l, i, o = n(442837),
				s = n(570140);
			let a = !1,
				c = !1;
			class u extends(i = o.ZP.Store) {
				get keepOpen() {
					return c
				}
				get enabled() {
					return a
				}
			}
			l = "SoundboardOverlayStore", (r = "displayName") in u ? Object.defineProperty(u, r, {
				value: l,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : u[r] = l;
			let d = new u(s.Z, {
				SOUNDBOARD_SET_OVERLAY_ENABLED: function(e) {
					if (a = e.enabled, e.enabled) {
						var t;
						c = null != (t = e.keepOpen) && t
					}
				}
			})
		},
		964398: function(e, t, n) {
			n.d(t, {
				Z: () => O
			}), n(388685), n(415506);
			var r = n(255367),
				l = n(73800),
				i = n(392711),
				o = n.n(i),
				s = n(481060),
				a = n(65205),
				c = n(388032),
				u = n(670161);

			function d(e) {
				let {
					className: t
				} = e;
				return (0, r.jsxs)("svg", {
					className: t,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 48 48",
					children: [(0, r.jsx)("g", {
						filter: "url(#a)",
						children: (0, r.jsx)("path", {
							d: "M30.4 8 24 14.4 17.6 8 16 9.6l6.4 6.4-6.4 6.4 1.6 1.6 6.4-6.4 6.4 6.4 1.6-1.6-6.4-6.4L32 9.6 30.4 8Z",
							fill: "currentColor"
						})
					}), (0, r.jsx)("defs", {
						children: (0, r.jsxs)("filter", {
							id: "a",
							x: "0",
							y: "0",
							width: "48",
							height: "48",
							filterUnits: "userSpaceOnUse",
							colorInterpolationFilters: "sRGB",
							children: [(0, r.jsx)("feFlood", {
								floodOpacity: "0",
								result: "BackgroundImageFix"
							}), (0, r.jsx)("feColorMatrix", {
								in: "SourceAlpha",
								values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
								result: "hardAlpha"
							}), (0, r.jsx)("feOffset", {
								dy: "8"
							}), (0, r.jsx)("feGaussianBlur", {
								stdDeviation: "8"
							}), (0, r.jsx)("feColorMatrix", {
								values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
							}), (0, r.jsx)("feBlend", {
								in2: "BackgroundImageFix",
								result: "effect1_dropShadow_605_72103"
							}), (0, r.jsx)("feBlend", {
								in: "SourceGraphic",
								in2: "effect1_dropShadow_605_72103",
								result: "shape"
							})]
						})
					})]
				})
			}
			let f = [{
					x: .5,
					y: .05
				}, {
					x: .95,
					y: .2
				}, {
					x: 1,
					y: .5
				}, {
					x: .95,
					y: .8
				}, {
					x: .5,
					y: .95
				}, {
					x: .05,
					y: .8
				}, {
					x: 0,
					y: .5
				}, {
					x: .05,
					y: .2
				}],
				h = f.length;

			function p(e, t, n) {
				let r = e * t;
				return e > .5 ? r - n : e < .5 ? r : r - n / 2
			}
			let g = (e, t) => {
					let n = Math.abs(t.x),
						r = 180 / Math.PI * Math.atan2(Math.abs(t.y), n),
						l = e / 2 - 28.8;
					return {
						x: Math.max(l * Math.cos(2 * Math.PI * r / 360), 0),
						y: Math.max(l * Math.sin(2 * Math.PI * r / 360), 0)
					}
				},
				O = l.memo(function(e) {
					let {
						wheelWidth: t,
						wheelHeight: n,
						itemWidth: O,
						itemHeight: N,
						showDeadZoneIndicator: y,
						activeItem: b,
						onItemSelect: x,
						onItemAction: E,
						interactive: m = !0,
						onClose: v,
						children: C
					} = e, I = l.useRef(null), T = l.useRef([]), j = l.useRef(!1), S = l.useRef(null), [P, _] = l.useState(0), [A, R] = l.useState({
						x: 0,
						y: 0
					}), w = Math.abs(A.x) + Math.abs(A.y) > 0, Z = l.useMemo(() => o().chunk(C, h), [C]), D = l.useCallback((e, t) => {
						null == T.current[P] ? T.current[P] = [] : T.current[P][t] = e
					}, [P]), k = l.useCallback((e, t) => {
						S.current = t, x(h * e + t)
					}, [x]), M = l.useCallback(() => {
						S.current = null, x(null)
					}, [x]), U = l.useCallback(e => {
						M(), j.current = e
					}, [M]), L = l.useCallback((e, t, n) => {
						if (j.current) return void R({
							x: 0,
							y: 0
						});
						let r = {
								x: e.x - t.x,
								y: e.y - t.y
							},
							l = r.x < 0,
							i = r.y < 0,
							o = g(n, r);
						R({
							x: (l ? Math.max(r.x, -o.x) : Math.min(r.x, o.x)) / 2,
							y: (i ? Math.max(r.y, -o.y) : Math.min(r.y, o.y)) / 2
						})
					}, []), B = l.useCallback(e => {
						null != S.current && (e.preventDefault(), e.stopPropagation(), null == E || E(h * P + S.current))
					}, [E, P]), G = l.useMemo(() => (0, i.throttle)(e => {
						if (null == I.current) return;
						let r = I.current.getBoundingClientRect(),
							l = {
								x: r.left + r.width / 2,
								y: r.top + r.height / 2
							},
							i = {
								x: e.clientX,
								y: e.clientY
							};
						if (L(i, l, Math.max(t, n)), j.current) {
							null != b && M();
							return
						}
						let o = (0, a.ld)(l, i, Math.max(t, n));
						for (let e = 0; e < T.current[P].length; e++) {
							let t = T.current[P][e];
							if (null == t) continue;
							let n = t.getBoundingClientRect();
							if ((0, a.Vr)(l, o, n)) return void k(P, e)
						}
						M()
					}, 16), [b, L, M, k, P, n, t]), V = l.useCallback(e => {
						if (!m) return;
						let t = P + (e.deltaY > 0 ? 1 : -1);
						t >= 0 && t < Z.length && (null != S.current && (Z[t].length > S.current ? k(t, S.current) : M()), _(t))
					}, [m, P, Z, k, M]), F = l.useMemo(() => Z[P].map((e, l) => {
						let i = f[l];
						if (null == i) throw Error("Too many items supplied ".concat(C.length, " expected max of ").concat(f.length));
						let o = p(i.x, t, O),
							s = p(i.y, n, N);
						return (0, r.jsx)("div", {
							ref: e => D(e, l),
							className: u.chatWheelItem,
							style: {
								left: o,
								top: s,
								width: O,
								height: N
							},
							children: e
						}, l)
					}), [Z, P, t, O, n, N, C.length, D]);
					return (0, r.jsx)(s.P3F, {
						className: u.chatWheelMouseInput,
						onMouseMove: G,
						onWheel: V,
						onClick: B,
						children: (0, r.jsxs)("div", {
							ref: I,
							className: u.chatWheel,
							style: {
								width: t,
								height: n
							},
							children: [(0, r.jsxs)("svg", {
								className: u.chatWheelBackground,
								viewBox: "0 0 288 288",
								xmlns: "http://www.w3.org/2000/svg",
								children: [(0, r.jsxs)("filter", {
									id: "soundboard-wheel-background-shadow",
									x: "0",
									y: "0",
									width: "288",
									height: "288",
									filterUnits: "userSpaceOnUse",
									colorInterpolationFilters: "sRGB",
									children: [(0, r.jsx)("feFlood", {
										floodOpacity: "0",
										result: "BackgroundImageFix"
									}), (0, r.jsx)("feColorMatrix", {
										in: "SourceAlpha",
										values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
										result: "hardAlpha"
									}), (0, r.jsx)("feOffset", {
										dy: "8"
									}), (0, r.jsx)("feGaussianBlur", {
										stdDeviation: "8"
									}), (0, r.jsx)("feColorMatrix", {
										values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
									}), (0, r.jsx)("feBlend", {
										in2: "BackgroundImageFix",
										result: "effect1_dropShadow_489_60382"
									}), (0, r.jsx)("feBlend", {
										in: "SourceGraphic",
										in2: "effect1_dropShadow_489_60382",
										result: "shape"
									})]
								}), (0, r.jsxs)("g", {
									filter: "url(#soundboard-wheel-background-shadow)",
									children: [(0, r.jsx)("circle", {
										className: u.chatWheelBackground,
										cx: "144",
										cy: "144",
										r: "103.68",
										strokeWidth: "40.32"
									}), y && (0, r.jsx)("circle", {
										className: u.chatWheelDeadZone,
										onMouseEnter: () => U(!0),
										onMouseLeave: () => U(!1),
										cx: 144,
										cy: 144,
										r: 28.8
									}), w && (0, r.jsx)("circle", {
										className: u.chatWheelCenter,
										cx: 144 + A.x,
										cy: 144 + A.y,
										r: 28.8
									})]
								}), y && (0, r.jsx)("circle", {
									className: u.chatWheelDeadZone,
									onMouseEnter: () => U(!0),
									onMouseLeave: () => U(!1),
									cx: 144,
									cy: 144,
									r: 28.8,
									stroke: "none"
								})]
							}), (0, r.jsxs)("div", {
								className: u.innerContent,
								children: [y && (0, r.jsx)(s.P3F, {
									className: u.chatWheelDeadZoneIcon,
									onClick: v,
									children: (0, r.jsx)(d, {
										className: u.chatWheelDeadZoneIcon
									})
								}), m && Z.length > 1 ? (0, r.jsx)("div", {
									className: u.paginationHint,
									children: c.intl.string(c.t["Xy+S09"])
								}) : null]
							}), F]
						})
					})
				})
		},
		183584: function(e, t, n) {
			n.d(t, {
				IN: () => a,
				oZ: () => c
			}), n(255367), n(73800);
			var r = n(570140),
				l = n(610394);
			n(238246), n(788983), n(592125), n(19780);
			var i = n(237997);
			n(998502), n(487029);
			var o = n(710111);
			n(981631), n(388032);
			let s = {
				width: o.FW.width,
				height: o.FW.height,
				resizable: !1,
				movable: !1,
				alwaysOnTop: !0,
				frame: !1,
				transparent: !0,
				hasShadow: !1,
				skipTaskbar: !0,
				menubar: !0,
				backgroundColor: "#00000000",
				titleBarStyle: null
			};

			function a(e, t) {
				let n = l.ZP.isOverlayV3EnabledForPID(t),
					o = i.default.disableClickableRegions;
				n || o || r.Z.dispatch({
					type: "OVERLAY_SET_INPUT_LOCKED",
					locked: !1,
					pid: t
				}), r.Z.dispatch({
					type: "SOUNDBOARD_SET_OVERLAY_ENABLED",
					pid: t,
					enabled: !0,
					keepOpen: e
				})
			}

			function c(e) {
				r.Z.dispatch({
					type: "SOUNDBOARD_SET_OVERLAY_ENABLED",
					pid: e,
					enabled: !1
				});
				let t = l.ZP.isOverlayV3EnabledForPID(e),
					n = i.default.disableClickableRegions;
				i.default.isLocked(e) || t || n || r.Z.dispatch({
					type: "OVERLAY_SET_INPUT_LOCKED",
					locked: !0,
					pid: e
				})
			}
			o.FW.padding, s.width, s.height
		},
		487029: function(e, t, n) {
			n.d(t, {
				Z: () => m
			}), n(388685), n(642613), n(539854);
			var r = n(255367),
				l = n(73800),
				i = n(990547),
				o = n(442837),
				s = n(100527),
				a = n(906732),
				c = n(213609),
				u = n(675478),
				d = n(19780),
				f = n(709054),
				h = n(208049),
				p = n(763296),
				g = n(242291),
				O = n(174470),
				N = n(549771),
				y = n(964398),
				b = n(294206),
				x = n(710111),
				E = n(840558);

			function m(e) {
				let {
					guildId: t,
					channel: n,
					width: m,
					height: v,
					keepOpen: C,
					interactive: I = !0,
					analyticsSource: T,
					onClose: j
				} = e, S = function(e) {
					let [t, n] = (0, o.Wu)([p.Z], () => [p.Z.getSounds(), p.Z.getFavorites()]);
					return l.useMemo(() => {
						let r = [],
							l = [...e, x.X8],
							i = (e, l) => {
								var i, o;
								for (let s of null != (o = null == (i = t.get(e)) ? void 0 : i.sort((e, t) => f.default.compare(e.soundId, t.soundId))) ? o : []) {
									let e = n.has(s.soundId);
									(e && l || !e && !l) && s.available && r.push(s)
								}
							};
						return l.forEach(e => i(e, !0)), l.forEach(e => i(e, !1)), r
					}, [t, n, e])
				}((0, N.h)(n, !0)), P = (0, O.j)(), _ = l.useRef(null), [A, R] = l.useState(void 0), w = (0, o.e7)([d.Z], () => d.Z.getMediaSessionId()), {
					analyticsLocations: Z
				} = (0, a.ZP)(s.Z.SOUNDBOARD_WHEEL), D = l.useCallback(e => {
					(0, g.GN)(e, n.id, Z), j()
				}, [Z, n.id, j]);
				l.useEffect(() => {
					h.w(), u.DZ.loadIfNecessary()
				}, []), l.useEffect(() => {
					0 === S.length && 0 === P.length && j()
				}, [S.length, P, j]), l.useEffect(() => () => {
					let e = _.current;
					C || null == e || D(e)
				}, [C, D]), (0, c.Z)({
					type: i.ImpressionTypes.POPOUT,
					name: i.ImpressionNames.SOUNDBOARD_POPOUT,
					properties: {
						source: T,
						guild_id: t,
						media_session_id: w
					}
				}, {
					disableTrack: !I
				});
				let k = l.useCallback(e => {
						_.current = e, R(null == e ? void 0 : e.soundId)
					}, []),
					M = l.useCallback(e => {
						if (null == e) return void k(null);
						let t = S[e];
						null != t && k(t)
					}, [k, S]),
					U = l.useCallback(e => {
						if (null == e) return;
						let t = S[e];
						null != t && D(t)
					}, [S, D]),
					L = l.useMemo(() => S.map(e => (0, r.jsx)(b.ZP, {
						interactive: I,
						className: E.soundButton,
						sound: e,
						focused: A === e.soundId,
						channel: n
					}, e.soundId)), [A, n, I, S]);
				return 0 === S.length ? null : (0, r.jsx)(a.Gt, {
					value: Z,
					children: (0, r.jsx)(y.Z, {
						wheelWidth: m,
						wheelHeight: v,
						itemWidth: 96,
						itemHeight: 52,
						showDeadZoneIndicator: !C,
						activeItem: A,
						onItemSelect: M,
						onItemAction: U,
						onClose: j,
						interactive: I,
						children: L
					})
				})
			}
		},
		606206: function(e, t, n) {
			let r;
			n.d(t, {
				Z: () => P
			}), n(388685), n(539854), n(781311), n(35282);
			var l, i = n(442837),
				o = n(570140),
				s = n(278323),
				a = n(212819),
				c = n(933557),
				u = n(592125),
				d = n(430824),
				f = n(293273),
				h = n(158776),
				p = n(699516),
				g = n(594174),
				O = n(55589),
				N = n(981631);

			function y(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			let b = [a.h8.TEXT_CHANNEL, a.h8.GROUP_DM, a.h8.USER],
				x = null,
				E = null,
				m = [],
				v = [];

			function C(e) {
				m = [...m, e], v = v.map(e => {
					var t, n;
					return t = function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = null != arguments[t] ? arguments[t] : {},
								r = Object.keys(n);
							"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
								return Object.getOwnPropertyDescriptor(n, e).enumerable
							}))), r.forEach(function(t) {
								y(e, t, n[t])
							})
						}
						return e
					}({}, e), n = n = {
						sent: m.includes(e.data.record.id)
					}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
						var n = Object.keys(e);
						if (Object.getOwnPropertySymbols) {
							var r = Object.getOwnPropertySymbols(e);
							n.push.apply(n, r)
						}
						return n
					})(Object(n)).forEach(function(e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
					}), t
				}), S.emitChange()
			}

			function I() {
				x = null, null != r && (r.destroy(), r = null), null != E && E()
			}

			function T() {
				let e = null != x && null != x.application_id ? f.Z.getApplicationActivity(x.application_id) : null;
				if (null != x && (null == e || null == e.party || null == e.party.id)) return I()
			}
			class j extends(l = i.ZP.Store) {
				initialize() {
					this.waitFor(f.Z)
				}
				getActivity() {
					return x
				}
				getQuery() {
					var e;
					return null != (e = null == r ? void 0 : r.query) ? e : ""
				}
				getResults() {
					return v
				}
			}
			y(j, "displayName", "ActivityInviteModalStore");
			let S = new j(o.Z, {
					ACTIVITY_INVITE_MODAL_OPEN: function(e) {
						x = e.activity, E = e.resolve, m = [], null == r && (r = new a.ZP((e, t) => {
							v = ("" === t.trim() ? function() {
								let e = [];
								return O.Z.getPrivateChannelIds().forEach(t => {
									let n = u.Z.getChannel(t);
									if (null != n)
										if (n.type === N.d4z.DM) {
											let t = n.getRecipientId(),
												r = null != t ? g.default.getUser(t) : null;
											null != r && e.push({
												type: a.h8.USER,
												record: r,
												score: 0
											})
										} else n.isMultiUserDM() && e.push({
											type: a.h8.GROUP_DM,
											record: n,
											score: 0
										})
								}), e
							}() : e).map(e => {
								switch (e.type) {
									case a.h8.USER: {
										let {
											record: t
										} = e;
										return {
											type: a.h8.USER,
											sent: m.includes(t.id),
											status: h.Z.getStatus(t.id),
											data: e
										}
									}
									case a.h8.TEXT_CHANNEL: {
										var t;
										let {
											record: n
										} = e, r = u.Z.getChannel(n.parent_id), l = d.Z.getGuild(n.guild_id);
										return {
											type: a.h8.TEXT_CHANNEL,
											sent: m.includes(n.id),
											categoryName: null != r ? (0, c.F6)(r, g.default, p.Z) : "",
											guildName: null != (t = null == l ? void 0 : l.name) ? t : "",
											data: e
										}
									}
									case a.h8.GROUP_DM: {
										let {
											record: t
										} = e;
										return {
											type: a.h8.GROUP_DM,
											sent: m.includes(t.id),
											data: e
										}
									}
									default:
										return null
								}
							}).filter(e => null != e), S.emitChange()
						}, b, 100)), r.search("")
					},
					ACTIVITY_INVITE_MODAL_QUERY: function(e) {
						let {
							query: t
						} = e;
						null != r && r.search(t)
					},
					ACTIVITY_INVITE_MODAL_SEND: function(e) {
						if (null == x) return;
						let t = e.channelId,
							n = e.userId;
						null != t ? s.Z.sendActivityInvite({
							channelId: t,
							type: N.mFx.JOIN,
							activity: x,
							location: "Channel Text Area - Invite to Join Modal"
						}).then(() => C(t)) : null != n && s.Z.sendActivityInviteUser({
							userId: n,
							type: N.mFx.JOIN,
							activity: x,
							location: "Channel Text Area - Invite to Join Modal"
						}).then(() => C(n))
					},
					ACTIVITY_INVITE_MODAL_CLOSE: I,
					OVERLAY_SET_INPUT_LOCKED: function(e) {
						let {
							locked: t
						} = e;
						return !!t && null != x && (I(), !0)
					},
					LOCAL_ACTIVITY_UPDATE: T,
					RPC_APP_DISCONNECTED: T
				}),
				P = 12633 == n.j ? S : null
		},
		362446: function(e, t, n) {
			n.d(t, {
				Z: () => h
			});
			var r, l, i, o = n(442837),
				s = n(570140),
				a = n(981631);
			let c = {};

			function u(e) {
				let t = c[e = null != e ? e : "null"];
				return null == t && (t = c[e] = {
					state: a.hes.DISCONNECTED,
					quality: a.IE4.UNKNOWN,
					pings: [],
					hostname: null,
					lossRate: null
				}), t
			}

			function d(e, t, n) {
				let r = c[e = null != e ? e : "null"];
				return null != r ? t(r) : n
			}
			class f extends(i = o.ZP.Store) {
				getConnectionState(e) {
					return d(e, e => {
						let {
							state: t
						} = e;
						return t
					}, a.hes.DISCONNECTED)
				}
				getQuality(e) {
					return d(e, e => {
						let {
							quality: t
						} = e;
						return t
					}, a.IE4.UNKNOWN)
				}
				getHostname(e) {
					return d(e, e => {
						let {
							hostname: t
						} = e;
						return t
					}, null)
				}
				getPings(e) {
					return d(e, e => {
						let {
							pings: t
						} = e;
						return t
					}, [])
				}
				getAveragePing(e) {
					let t = this.getPings(e);
					return 0 === t.length ? 0 : t.reduce((e, t) => e + t.value, 0) / t.length
				}
				getLastPing(e) {
					var t;
					let n = this.getPings(e);
					return 0 === n.length ? 0 : null == (t = n[n.length - 1]) ? void 0 : t.value
				}
				getOutboundLossRate(e) {
					return d(e, e => {
						let {
							lossRate: t
						} = e;
						return t
					}, null)
				}
			}
			l = "OverlayRTCConnectionStore", (r = "displayName") in f ? Object.defineProperty(f, r, {
				value: l,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : f[r] = l;
			let h = new f(s.Z, {
				OVERLAY_INITIALIZE: function(e) {
					c = e.rtcConnectionStates
				},
				RTC_CONNECTION_STATE: function(e) {
					if (null != e.streamKey) return !1;
					let t = u(e.lobbyId);
					t.state = e.state, t.hostname = e.hostname
				},
				RTC_CONNECTION_PING: function(e) {
					let t = u(e.lobbyId);
					t.pings = e.pings, t.quality = e.quality
				},
				RTC_CONNECTION_LOSS_RATE: function(e) {
					u(e.lobbyId).lossRate = e.lossRate
				}
			})
		},
		65205: function(e, t, n) {
			function r(e, t, n) {
				return (n.y - e.y) * (t.x - e.x) > (t.y - e.y) * (n.x - e.x)
			}

			function l(e, t, n, l) {
				return r(e, n, l) !== r(t, n, l) && r(e, t, n) !== r(e, t, l)
			}

			function i(e, t, n) {
				let r = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
				return {
					x: t.x + (t.x - e.x) / r * n,
					y: t.y + (t.y - e.y) / r * n
				}
			}

			function o(e, t, n) {
				let r = {
						x: n.x,
						y: n.y
					},
					i = {
						x: n.x + n.width,
						y: n.y
					},
					o = {
						x: n.x,
						y: n.y + n.height
					},
					s = {
						x: n.x + n.width,
						y: n.y + n.height
					};
				return l(e, t, r, i) || l(e, t, i, s) || l(e, t, s, o) || l(e, t, o, r)
			}
			n.d(t, {
				Vr: () => o,
				ld: () => i
			})
		},
		476221: function(e, t, n) {
			n.d(t, {
				Z: () => i
			}), n(35282);
			var r = n(981631),
				l = n(388032);
			let i = {
				getStatus: function(e) {
					let t, n, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					switch (e) {
						case r.hes.CONNECTING:
							t = r.QKv.CONNECTING, n = l.intl.string(l.t.MzW9sL);
							break;
						case r.hes.AUTHENTICATING:
							t = r.QKv.CONNECTING, n = l.intl.string(l.t.GxXwEx);
							break;
						case r.hes.AWAITING_ENDPOINT:
							t = r.QKv.CONNECTING, n = l.intl.string(l.t.xEbu0d);
							break;
						case r.hes.RTC_CONNECTED:
							t = r.QKv.CONNECTED, n = i ? l.intl.string(l.t.HtVOdX) : l.intl.string(l.t["daXg4+"]);
							break;
						case r.hes.RTC_CONNECTING:
							t = r.QKv.CONNECTING, n = l.intl.string(l.t.Gp51dn);
							break;
						case r.hes.ICE_CHECKING:
							t = r.QKv.CONNECTING, n = l.intl.string(l.t.rdCyAw);
							break;
						case r.hes.DTLS_CONNECTING:
							t = r.QKv.CONNECTING, n = l.intl.string(l.t.UvB3gY);
							break;
						case r.hes.NO_ROUTE:
							t = r.QKv.ERROR, n = l.intl.string(l.t.mGhOIi);
							break;
						case r.hes.RTC_DISCONNECTED:
							t = r.QKv.ERROR, n = l.intl.string(l.t.M7LDmJ);
							break;
						case r.hes.DISCONNECTED:
						default:
							t = r.QKv.ERROR, n = l.intl.string(l.t.NLKQb2)
					}
					return {
						connectionStatus: t,
						connectionStatusText: n
					}
				},
				getShortHostname: function(e) {
					return null == e ? "" : e.split(".")[0]
				}
			}
		}
	}
]);
//# sourceMappingURL=4f005b6f65c9239a.js.map