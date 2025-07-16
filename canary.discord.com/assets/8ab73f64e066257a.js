"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["27278"], {
		781780: function(e, n, t) {
			t.d(n, {
				Z: () => c
			});
			var r = t(255367),
				o = t(963614),
				i = t(208156),
				l = t(701488),
				a = t(839841);

			function c(e) {
				var n, t, c;
				let {
					channelId: u,
					guildId: s,
					embeddedActivity: d,
					application: p
				} = e, f = {
					instance_id: null != (c = null != (t = d.compositeInstanceId) ? t : d.launchId) ? c : "",
					location_id: null == (n = d.location) ? void 0 : n.id,
					launch_id: d.launchId,
					referrer_id: d.referrerId,
					custom_id: d.customId
				};
				return null != s && "" !== s && (f.guild_id = s), null != u && "" !== u && (f.channel_id = u), (0, r.jsx)(i.J, {
					allowPopups: (0, o.h)(p),
					referrerPolicy: l.um.has(d.applicationId) ? "no-referrer" : "origin",
					url: d.url,
					queryParams: f,
					className: a.iframe,
					shouldRefocus: !1
				})
			}
		},
		325749: function(e, n, t) {
			t.d(n, {
				Z: () => V
			}), t(388685);
			var r = t(255367),
				o = t(73800),
				i = t(120356),
				l = t.n(i),
				a = t(442837),
				c = t(755721),
				u = t(481060),
				s = t(13245),
				d = t(367907),
				p = t(753972),
				f = t(812206),
				m = t(111028),
				v = t(610394),
				b = t(522474),
				h = t(788983),
				O = t(695346),
				j = t(390322),
				P = t(961048),
				x = t(871499),
				g = t(268353),
				y = t(786915),
				I = t(800965),
				Z = t(107169),
				C = t(592125),
				_ = t(271383),
				w = t(594174),
				S = t(358085),
				T = t(51144),
				N = t(998502),
				A = t(228488),
				k = t(145597),
				E = t(317381),
				R = t(426419),
				U = t(513202),
				B = t(884338),
				D = t(617552),
				L = t(473179),
				Y = t(932174),
				z = t(225639),
				W = t(981631),
				K = t(388032),
				M = t(951927);
			let J = B.u8.SIZE_24;

			function V(e) {
				let {
					applicationId: n,
					channelId: t
				} = e, i = (0, a.e7)([f.Z], () => f.Z.getApplication(n)), V = (0, a.e7)([E.ZP], () => E.ZP.getSelfEmbeddedActivities().get(n)), G = (0, a.e7)([C.Z], () => C.Z.getChannel(t)), H = O.Sb.useSetting(), F = (0, a.Wu)([_.ZP], () => {
					var e;
					return null == G || null == V ? [] : Array.from(null != (e = V.userIds) ? e : []).map(e => _.ZP.getMember(G.guild_id, e))
				}, [V, G]), q = o.useMemo(() => {
					let e = new Map;
					return F.forEach(n => {
						null != n && void 0 !== n && e.set(n.userId, n)
					}), e
				}, [F]), X = o.useCallback((e, n) => {
					var t;
					if (null == e || e === B.ag) return null;
					let o = q.get(e.id),
						i = null != (t = null == o ? void 0 : o.nick) ? t : T.ZP.getName(e);
					return (0, r.jsx)(u.DY3, {
						text: i,
						position: "bottom",
						children: (0, r.jsx)("img", {
							src: e.getAvatarURL(null == n ? void 0 : n.guild_id, J),
							alt: i,
							className: M.avatar
						}, e.id)
					}, e.id)
				}, [q]), $ = null == V ? void 0 : V.userIds, Q = (0, a.Wu)([w.default], () => Array.from(null != $ ? $ : []).map(e => w.default.getUser(e)).filter(e => null != e), [$]), ee = o.useCallback(() => {
					let e = (0, k.getPID)();
					s.Z.setInputLocked(!v.ZP.isInputLocked(e), e)
				}, []), en = (0, R.P)(), {
					canStayOnTop: et,
					popoutWindowAlwaysOnTop: er,
					handleStayOnTop: eo
				} = function() {
					let e = (0, a.e7)([b.Z], () => b.Z.getIsAlwaysOnTop(W.KJ3.ACTIVITY_POPOUT)),
						n = o.useCallback(e => {
							h.hY(W.KJ3.ACTIVITY_POPOUT, e)
						}, []);
					return {
						canStayOnTop: S.isPlatformEmbedded && N.ZP.supportsFeature(W.eRX.POPOUT_WINDOWS),
						popoutWindowAlwaysOnTop: e,
						handleStayOnTop: n
					}
				}(), ei = (0, z.y)({
					location: "Activity Popout Window Header"
				}), {
					rootNode: el,
					popoutWindow: ea,
					toggleFullScreen: ec
				} = function() {
					let {
						popoutWindow: e,
						currentDocument: n,
						rootNode: t
					} = (0, Y.Z)(), [r, i] = o.useState(!1), l = o.useCallback(() => {
						null != t && r && (i(!1), (0, A.Pr)(t, n))
					}, [t, n, r]), a = o.useCallback(() => {
						null != t && (r ? l() : (i(!0), (0, A.Dj)(t)))
					}, [t, r, l]), c = o.useCallback(() => {
						null != t && !(0, A.rB)(t, n) && r && a()
					}, [t, n, r, a]);
					return o.useEffect(() => (null == n || n.addEventListener(A.NO, c), () => {
						null == n || n.removeEventListener(A.NO, c)
					}), [n, c]), {
						rootNode: t,
						popoutWindow: e,
						toggleFullScreen: a
					}
				}(), eu = o.useRef(null);
				if (null == i || null == V) return null;
				let es = (0, r.jsx)(p.Z, {
					application: i,
					size: 24,
					className: M.appIcon
				});
				return H && (es = (0, r.jsx)(u.DY3, {
					text: V.compositeInstanceId,
					position: "bottom",
					children: es
				})), (0, r.jsx)(u.f6W, {
					theme: W.BRd.DARK,
					children: e => (0, r.jsxs)("div", {
						className: l()(M.container, e),
						children: [(0, r.jsxs)("div", {
							className: l()(M.headerSection, M.headerSectionLeft),
							children: [es, (0, r.jsx)(u.Text, {
								variant: "text-md/normal",
								color: "header-primary",
								className: M.applicationName,
								children: (0, r.jsx)(m.Z, {
									children: i.name
								})
							}), (0, r.jsx)("div", {
								className: M.dotSpacer,
								children: (0, r.jsx)(u.Text, {
									variant: "text-md/normal",
									color: "text-muted",
									children: "."
								})
							}), (0, r.jsx)(B.ZP, {
								renderIcon: !1,
								users: Q,
								size: J,
								max: 6,
								renderUser: e => X(e, G)
							})]
						}), (0, r.jsxs)("div", {
							className: l()(M.headerSection, M.headerSectionRight),
							children: [(0, r.jsx)("div", {
								className: M.fade
							}), (0, r.jsxs)("div", {
								className: M.actionButtonsContainer,
								children: [(0, r.jsx)(y.Z, {
									appContext: W.IlC.POPOUT,
									applicationId: n,
									channel: G,
									shouldPrioritizeGroupPlusIcon: !0,
									iconClassName: M.inviteButtonIcon,
									size: c.zx.Sizes.TINY,
									look: c.zx.Looks.FILLED,
									buttonText: K.intl.string(K.t["6F9ivr"]),
									color: c.zx.Colors.TRANSPARENT
								}), en ? (0, r.jsx)(x.Z, {
									onClick: ee,
									iconComponent: u.epB,
									label: K.intl.string(K.t.mseZsL)
								}) : null, et ? (0, r.jsx)(Z.Z, {
									popoutWindowAlwaysOnTop: er,
									onToggleStayOnTop: eo
								}) : null, ei ? (0, r.jsx)(I.Z, {
									popoutOpen: !0,
									onOpenPopout: () => {},
									onClosePopout: () => {
										(0, d.yw)(W.rMx.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED), (0, D.Z)({
											onConfirm: () => {
												U.Z.popInActivity()
											}
										})
									}
								}) : null, (0, r.jsx)(g.Z, {
									node: el,
									guestWindow: ea,
									onClick: ec
								}), (0, r.jsx)(u.yRy, {
									targetElementRef: eu,
									position: "bottom",
									renderPopout: e => {
										let {
											closePopout: n
										} = e;
										return (0, r.jsx)(j.Z, {
											children: (0, r.jsx)(L.Z, {
												application: i,
												channelId: t,
												onClose: n
											})
										})
									},
									children: (e, n) => {
										var t, r;
										let {
											isShown: i
										} = n;
										return (0, o.createElement)(P.Z, (t = function(e) {
											for (var n = 1; n < arguments.length; n++) {
												var t = null != arguments[n] ? arguments[n] : {},
													r = Object.keys(t);
												"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
													return Object.getOwnPropertyDescriptor(t, e).enumerable
												}))), r.forEach(function(n) {
													var r;
													r = t[n], n in e ? Object.defineProperty(e, n, {
														value: r,
														enumerable: !0,
														configurable: !0,
														writable: !0
													}) : e[n] = r
												})
											}
											return e
										}({}, e), r = r = {
											buttonRef: eu,
											key: "more-options",
											isActive: i
										}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, n) {
											var t = Object.keys(e);
											if (Object.getOwnPropertySymbols) {
												var r = Object.getOwnPropertySymbols(e);
												t.push.apply(t, r)
											}
											return t
										})(Object(r)).forEach(function(e) {
											Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
										}), t))
									}
								}, "more-options-popout")]
							})]
						})]
					})
				})
			}
		},
		473179: function(e, n, t) {
			t.d(n, {
				Z: () => c
			});
			var r = t(255367),
				o = t(481060),
				i = t(870745),
				l = t(981631),
				a = t(388032);

			function c(e) {
				let {
					onClose: n,
					onSelect: t,
					application: c,
					channelId: u
				} = e, s = (0, i.Z)(c, u, l.IlC.POPOUT);
				return (0, r.jsx)(o.v2r, {
					navId: "activity-popout-overflow-popout",
					onClose: n,
					onSelect: t,
					"aria-label": a.intl.string(a.t.SS9Y6O),
					children: s
				})
			}
		},
		701011: function(e, n, t) {
			t.d(n, {
				Z: () => O
			});
			var r = t(255367),
				o = t(73800),
				i = t(442837),
				l = t(481060),
				a = t(110924),
				c = t(812206),
				u = t(554370),
				s = t(788983),
				d = t(317381),
				p = t(426419),
				f = t(16609),
				m = t(781780),
				v = t(325749),
				b = t(981631),
				h = t(578809);

			function O() {
				let {
					embeddedActivity: e,
					channelId: n,
					guildId: t
				} = (0, i.cj)([d.ZP], () => {
					let e = d.ZP.getCurrentEmbeddedActivity(),
						n = (0, f.p)(null == e ? void 0 : e.location),
						t = (0, f.j)(null == e ? void 0 : e.location);
					return {
						embeddedActivity: e,
						channelId: n,
						guildId: t
					}
				}), O = o.useRef(null), j = (0, a.Z)(e);
				o.useEffect(() => {
					null != e ? clearTimeout(O.current) : null != j && null == e && (O.current = window.setTimeout(() => {
						(0, s.xv)(b.KJ3.ACTIVITY_POPOUT)
					}, 5e3))
				}, [e, j]);
				let P = (0, i.e7)([c.Z], () => {
						let n = null == e ? void 0 : e.applicationId;
						return null == n ? void 0 : c.Z.getApplication(n)
					}),
					x = (0, p.P)();
				return (0, r.jsx)("div", {
					className: h.container,
					children: null == e || null == P ? (0, r.jsx)(l.$jN, {
						className: h.iframe
					}) : (0, r.jsx)("div", {
						className: h.loadedContentContainer,
						children: (0, r.jsxs)("div", {
							className: h.iframeAndHeaderContainer,
							children: [(0, r.jsx)("div", {
								className: h.headerContainer,
								children: (0, r.jsx)(v.Z, {
									applicationId: P.id,
									channelId: n
								})
							}), (0, r.jsx)("div", {
								className: h.iframeContainer,
								children: (0, r.jsx)(m.Z, {
									channelId: n,
									guildId: t,
									embeddedActivity: e,
									application: P
								})
							}), x ? (0, r.jsx)(u.Z, {
								isEmbeddedActivity: !0
							}) : null]
						})
					})
				})
			}
		},
		748623: function(e, n, t) {
			t.r(n), t.d(n, {
				default: () => f
			});
			var r = t(255367);
			t(73800);
			var o = t(442837),
				i = t(522474),
				l = t(238246),
				a = t(358085),
				c = t(228488),
				u = t(952561),
				s = t(701011),
				d = t(932174),
				p = t(388032);

			function f(e) {
				var n;
				let {
					windowKey: t
				} = e, f = (0, u.Z)(), {
					currentDocument: m,
					rootNode: v
				} = (0, d.Z)(), b = (0, o.e7)([i.Z], () => (0, c.rB)(v, m), [v, m]);
				return (0, r.jsx)(l.Z, {
					withTitleBar: a.isPlatformEmbedded && !b,
					windowKey: t,
					title: null != (n = null == f ? void 0 : f.name) ? n : p.intl.string(p.t.IC5Anp),
					children: (0, r.jsx)(s.Z, {})
				})
			}
		},
		932174: function(e, n, t) {
			t.d(n, {
				Z: () => a
			});
			var r = t(73800),
				o = t(442837),
				i = t(522474),
				l = t(981631);

			function a() {
				let e = (0, o.e7)([i.Z], () => i.Z.getWindow(l.KJ3.ACTIVITY_POPOUT)),
					n = r.useMemo(() => null == e ? void 0 : e.window.document, [e]),
					t = r.useMemo(() => null == n ? void 0 : n.getElementById("app-mount"), [n]);
				return {
					popoutWindow: e,
					currentDocument: n,
					rootNode: t
				}
			}
		},
		870745: function(e, n, t) {
			t.d(n, {
				Z: () => u
			});
			var r = t(255367),
				o = t(442837),
				i = t(481060),
				l = t(726521),
				a = t(592125),
				c = t(388032);

			function u(e, n, t) {
				let u = (0, o.e7)([a.Z], () => a.Z.getChannel(n)),
					s = null == u ? void 0 : u.getGuildId();
				return (0, r.jsx)(i.sNh, {
					id: "report-app",
					color: "danger",
					label: c.intl.string(c.t.NgA5vr),
					action: () => (0, l.uu)({
						application: e,
						entrypoint: "activity_ui_popout",
						contextualGuildId: null != s ? s : void 0,
						contextualChannelId: null == u ? void 0 : u.id,
						appContext: t
					}),
					icon: i.U65
				})
			}
		},
		961048: function(e, n, t) {
			t.d(n, {
				Z: () => u
			});
			var r = t(255367);
			t(73800);
			var o = t(481060),
				i = t(906732),
				l = t(522651),
				a = t(871499),
				c = t(388032);

			function u(e) {
				var {
					onClick: n
				} = e, t = function(e, n) {
					if (null == e) return {};
					var t, r, o = function(e, n) {
						if (null == e) return {};
						var t, r, o = {},
							i = Object.keys(e);
						for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
						return o
					}(e, n);
					if (Object.getOwnPropertySymbols) {
						var i = Object.getOwnPropertySymbols(e);
						for (r = 0; r < i.length; r++) t = i[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
					}
					return o
				}(e, ["onClick"]);
				let {
					parentAnalyticsLocation: u
				} = (0, i.ZP)();
				return (0, r.jsx)(a.Z, function(e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = null != arguments[n] ? arguments[n] : {},
							r = Object.keys(t);
						"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable
						}))), r.forEach(function(n) {
							var r;
							r = t[n], n in e ? Object.defineProperty(e, n, {
								value: r,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : e[n] = r
						})
					}
					return e
				}({
					label: c.intl.string(c.t.UKOtz8),
					iconComponent: o.xhG,
					tooltipPosition: "bottom",
					onClick: e => {
						(0, l.v)(u, l.d.MORE), n(e)
					}
				}, t))
			}
		},
		839841: function(e, n, t) {
			e.exports = {
				iframe: "iframe__8c55d"
			}
		},
		951927: function(e, n, t) {
			e.exports = {
				container: "container_c8f358",
				headerSection: "headerSection_c8f358",
				headerSectionLeft: "headerSectionLeft_c8f358",
				headerSectionRight: "headerSectionRight_c8f358",
				appIcon: "appIcon_c8f358",
				avatar: "avatar_c8f358",
				dotSpacer: "dotSpacer_c8f358",
				actionButtonsContainer: "actionButtonsContainer_c8f358",
				applicationName: "applicationName_c8f358",
				fade: "fade_c8f358",
				inviteButtonIcon: "inviteButtonIcon_c8f358"
			}
		},
		578809: function(e, n, t) {
			e.exports = {
				container: "container__0b406",
				loadedContentContainer: "loadedContentContainer__0b406",
				iframeAndHeaderContainer: "iframeAndHeaderContainer__0b406",
				headerContainer: "headerContainer__0b406",
				iframeContainer: "iframeContainer__0b406",
				iframe: "iframe__0b406"
			}
		}
	}
]);
//# sourceMappingURL=8ab73f64e066257a.js.map