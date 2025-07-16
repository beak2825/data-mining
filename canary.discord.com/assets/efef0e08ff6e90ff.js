"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["88622"], {
		197857: function(e) {
			e.exports = "/assets/b909790cf1d80597.svg"
		},
		708901: function(e) {
			e.exports = "/assets/0e98d658f2bfe479.svg"
		},
		647894: function(e) {
			e.exports = "/assets/c41ca1098827f91f.svg"
		},
		17702: function(e) {
			e.exports = "/assets/39556a7eb79145be.svg"
		},
		763610: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r = n(255367),
				s = n(73800),
				o = n(120356),
				a = n.n(o),
				i = n(755721),
				l = n(53281),
				c = n(121746);

			function u(e) {
				let {
					filename: t,
					className: n,
					filters: o,
					buttonText: u,
					placeholder: d,
					onFileSelect: p
				} = e, m = s.useRef(null);
				return (0, r.jsxs)("div", {
					className: a()(n, c.fileUpload),
					children: [(0, r.jsx)("input", {
						className: c.fileUploadInput,
						tabIndex: -1,
						readOnly: !0,
						placeholder: d,
						type: "text",
						value: t
					}), (0, r.jsxs)(i.zx, {
						size: i.zx.Sizes.MIN,
						className: c.fileUploadButton,
						children: [u, (0, r.jsx)(l.Z, {
							ref: m,
							tabIndex: -1,
							onChange: e => {
								var t;
								p(null == (t = e.currentTarget.files) ? void 0 : t[0])
							},
							multiple: !1,
							filters: o
						})]
					})]
				})
			}
		},
		865364: function(e, t, n) {
			n.d(t, {
				O: () => a
			});
			var r = n(818083),
				s = n(977156);
			let o = (0, r.B)({
					id: "2024-03_quest_bar_progress_cta",
					kind: "user",
					label: "Quest Bar Progress CTA",
					defaultConfig: {
						enabled: !1
					},
					treatments: [{
						id: 0,
						label: "Control",
						config: {
							enabled: !1
						}
					}, {
						id: 1,
						label: "Quest Bar Progress CTA enabled",
						config: {
							enabled: !0
						}
					}]
				}),
				a = e => {
					let {
						location: t,
						autoTrackExposure: n = !1
					} = e, r = (0, s.Zy)({
						location: t
					}), {
						enabled: a
					} = o.useExperiment({
						location: t
					}, {
						autoTrackExposure: n
					});
					return r && a
				}
		},
		988303: function(e, t, n) {
			n.d(t, {
				P: () => o,
				u: () => a
			});
			var r, s = n(818083),
				o = ((r = {})[r.V1 = 0] = "V1", r[r.V2 = 1] = "V2", r);
			let a = (0, s.B)({
				id: "2024-05_quest_bar",
				kind: "user",
				label: "Quest Bar",
				defaultConfig: {
					primaryVariant: 0,
					progressVariant: 0
				},
				treatments: [{
					id: 1,
					label: "Quest Bar V2 with V1 Progress",
					config: {
						primaryVariant: 1,
						progressVariant: 0
					}
				}, {
					id: 2,
					label: "Quest Bar V2",
					config: {
						primaryVariant: 1,
						progressVariant: 1
					}
				}]
			})
		},
		974390: function(e, t, n) {
			n.d(t, {
				h: () => i
			});
			var r = n(818083),
				s = n(520278),
				o = n(46140);
			let a = (0, r.B)({
				id: "2025-02_quest_home_static_image",
				kind: "user",
				label: "Quest Home Static Image Experiment",
				defaultConfig: {
					enabled: !1
				},
				treatments: [{
					id: 0,
					label: "Control",
					config: {
						enabled: !1
					}
				}, {
					id: 1,
					label: "Enabled",
					config: {
						enabled: !0
					}
				}]
			});

			function i(e, t) {
				return (0, s.J)(a, o.S7.QUEST_HOME_FORCE_STATIC_IMAGE, e, t)
			}
		},
		520278: function(e, t, n) {
			n.d(t, {
				J: () => r
			});

			function r(e, t, n, r) {
				let {
					enabled: s
				} = e.useExperiment({
					location: r
				}, {
					autoTrackExposure: !1
				});
				return !!n.config.features.includes(t) && (e.trackExposure({
					location: r
				}), s)
			}
		},
		585857: function(e, t, n) {
			n.d(t, {
				Q: () => m
			});
			var r = n(255367);
			n(73800);
			var s = n(481060),
				o = n(230711),
				a = n(617136),
				i = n(497505),
				l = n(981631),
				c = n(388032),
				u = n(382845);

			function d(e) {
				let {
					text: t,
					quest: n,
					sourceQuestContent: c
				} = e, d = (0, a.O5)();
				return (0, r.jsx)(s.P3F, {
					className: u.showConnectionsButton,
					onClick: () => {
						d({
							questId: n.id,
							questContent: i.jn.QUEST_BAR_V2,
							questContentCTA: a.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
							sourceQuestContent: c
						}), o.Z.open(l.oAB.CONNECTIONS)
					},
					children: (0, r.jsx)(s.Text, {
						"aria-label": t,
						color: "none",
						variant: "text-xxs/normal",
						children: t
					})
				})
			}

			function p(e) {
				let {
					xboxAndPlaystationAccounts: t,
					quest: n,
					sourceQuestContent: s
				} = e;
				return t.length > 0 ? (0, r.jsx)(d, {
					text: c.intl.string(c.t["qiS+xs"]),
					quest: n,
					sourceQuestContent: s
				}) : null
			}

			function m(e) {
				return (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)(s.Text, {
						color: "text-muted",
						variant: "text-xs/medium",
						children: c.intl.string(c.t.EJFSvL)
					}), (0, r.jsx)(p, function(e) {
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
					}({}, e))]
				})
			}
		},
		210724: function(e, t, n) {
			n.d(t, {
				P: () => q,
				Z: () => I
			}), n(388685);
			var r = n(255367),
				s = n(73800),
				o = n(120356),
				a = n.n(o),
				i = n(108542),
				l = n(442837),
				c = n(481060),
				u = n(110924),
				d = n(607070),
				p = n(819640),
				m = n(617136),
				f = n(823289),
				g = n(113434),
				x = n(569984),
				h = n(497505),
				b = n(918701),
				j = n(192023),
				_ = n(977156),
				v = n(5881),
				y = n(602667),
				C = n(78826),
				O = n(667105),
				E = n(341907),
				S = n(693900),
				w = n(617889),
				P = n(130653),
				T = n(46140),
				N = n(981631),
				A = n(414444);

			function R(e) {
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

			function B(e, t) {
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

			function k(e) {
				let {
					isExpanded: t,
					questId: n
				} = e;
				return (0, g.qI)({
					mode: t ? T.NH.EXPANDED : T.NH.COLLAPSED,
					questContent: h.jn.QUEST_BAR_V2,
					questId: n,
					sourceQuestContent: h.jn.QUEST_BAR_V2
				}), null
			}

			function q(e) {
				var t, n;
				let {
					quest: o
				} = e, g = (0, v.T)({
					quest: o,
					location: T.dr.QUESTS_BAR
				}), q = (0, _.Zy)({
					location: T.dr.QUESTS_BAR
				}), I = (0, l.e7)([x.Z], () => null != x.Z.questEnrollmentBlockedUntil), {
					isQuestBarVisible: D,
					reason: Q
				} = (0, O.qN)({
					quest: o,
					location: T.dr.QUESTS_BAR
				}), V = (0, l.e7)([d.Z], () => d.Z.useReducedMotion), L = (0, l.e7)([p.Z], () => p.Z.hasLayers()), M = s.useRef(null), W = s.useMemo(() => (0, b.q8)(o), [o]), Z = (null == (t = o.userStatus) ? void 0 : t.enrolledAt) != null, U = (0, u.Z)(Z), H = (null == (n = o.userStatus) ? void 0 : n.completedAt) != null, z = (0, u.Z)(H), {
					hasError: F,
					isLoading: X
				} = (0, C.d7)(), K = s.useContext(P.T) || q && D && !X && !I, Y = s.useRef(K), G = (0, w.B)(o, K && !F), J = s.useRef(-1), $ = s.useRef(!1), [ee, et] = s.useState(!1), [en, er] = s.useState(!1), [es, eo] = s.useState(!0), [ea, ei] = s.useState(!0), [el, ec] = s.useState(G.preEnrollmentExpandedHeight), eu = s.useRef(null), ed = s.useCallback(e => {
					eo(!1), er(e)
				}, []), ep = s.useCallback(() => {
					var e, t;
					ec((null != (t = null == (e = eu.current) ? void 0 : e.offsetHeight) ? t : 84) + 2 * G.paddingVertical)
				}, [G.paddingVertical]), em = s.useCallback(() => {
					ep(), ed(!0)
				}, [ep, ed]), ef = s.useCallback(() => {
					et(!0)
				}, []), eg = s.useCallback(() => {
					et(!1), $.current || H || ed(!1)
				}, [H, ed]), ex = s.useCallback(() => {
					et(!1), H || ed(!1), $.current = !1
				}, [H, ed]), eh = s.useCallback(function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					if (en) return;
					let {
						withDelay: t = !1
					} = e;
					t ? J.current = window.setTimeout(em, 75) : em()
				}, [em, en]), eb = s.useCallback(() => {
					eh()
				}, [eh]), ej = s.useCallback(() => {
					window.clearTimeout(J.current), G.canCollapseOnBlur && !ee && ($.current || ed(!1))
				}, [ee, G, ed]), e_ = s.useCallback(() => {
					var e;
					(0, m.dA)({
						questId: o.id,
						event: N.rMx.QUEST_HOVER,
						properties: B(R({}, (0, m.mH)(h.jn.QUEST_BAR)), {
							impression_id: null == (e = M.current) ? void 0 : e.getId()
						}),
						shouldExtendSession: !0,
						sourceQuestContent: G.trackingCtx.content
					}), $.current = !0, eh({
						withDelay: !0
					})
				}, [eh, o, G.trackingCtx.content]), ev = s.useCallback(() => {
					var e;
					(0, m.dA)({
						questId: o.id,
						event: N.rMx.QUEST_HOVER_OFF,
						properties: B(R({}, (0, m.mH)(h.jn.QUEST_BAR)), {
							impression_id: null == (e = M.current) ? void 0 : e.getId()
						}),
						sourceQuestContent: G.trackingCtx.content
					}), $.current = !1, ej()
				}, [ej, o, G.trackingCtx.content]);
				s.useLayoutEffect(() => {
					H && G.shouldExpandOnQuestComplete && em()
				}, [em, H, G.shouldExpandOnQuestComplete]), s.useLayoutEffect(() => {
					Z && !U && $.current && em()
				}, [em, Z, U]), s.useLayoutEffect(() => {
					H || !Z || U || $.current || ed(!1)
				}, [Z, H, U, ed]), s.useLayoutEffect(() => {
					K !== Y.current && ei(!1), Y.current = K
				}, [K]);
				let ey = Z ? T.XZ : T.R4,
					[{
						expansionSpring: eC
					}, eO] = (0, c.q_F)(() => ({
						from: {
							expansionSpring: 0
						},
						config: ey,
						onRest: () => {
							eo(!0)
						},
						onStart: () => {
							eo(!1)
						}
					}));
				s.useEffect(() => {
					eO({
						expansionSpring: +!!en,
						immediate: V
					})
				}, [en, eO, V]);
				let {
					visibilitySpring: eE
				} = (0, c.q_F)({
					from: {
						visibilitySpring: 0
					},
					to: {
						visibilitySpring: +!!K
					},
					config: {
						tension: 250,
						friction: 10,
						clamp: !0
					},
					onRest: () => {
						ei(!0)
					},
					onStart: () => {
						ei(!1)
					}
				});
				s.useEffect(() => {
					W && (0, E.loadVideoQuestModal)()
				}, [W]), s.useLayoutEffect(() => {
					H && !z && G.canCollapseOnBlur && ep()
				}, [H, em, G.canCollapseOnBlur, ep, z]), s.useEffect(() => {
					var e, t;
					F && (0, m.dA)({
						questId: o.id,
						event: N.rMx.QUEST_CONTENT_RENDERING_FAILURE,
						properties: B(R({}, (0, m.mH)(h.jn.QUEST_BAR)), {
							reason: "asset_loading_error",
							impression_id: null == (e = M.current) ? void 0 : e.getId()
						}),
						sourceQuestContent: G.trackingCtx.content
					}), q || (0, m.dA)({
						questId: o.id,
						event: N.rMx.QUEST_CONTENT_RENDERING_FAILURE,
						properties: B(R({}, (0, m.mH)(h.jn.QUEST_BAR)), {
							reason: "not_eligible_for_quest",
							impression_id: null == (t = M.current) ? void 0 : t.getId()
						}),
						sourceQuestContent: G.trackingCtx.content
					})
				}, [F, q, o.id, G.trackingCtx.content]), s.useEffect(() => {
					if (!K && ea && !X) {
						var e;
						(0, m.dA)({
							questId: o.id,
							event: N.rMx.QUEST_CONTENT_RENDERING_FAILURE,
							properties: B(R({}, (0, m.mH)(h.jn.QUEST_BAR)), {
								reason: Q,
								impression_id: null == (e = M.current) ? void 0 : e.getId()
							}),
							sourceQuestContent: G.trackingCtx.content
						})
					}
				}, [K, ea, X, o.id, Q, G.trackingCtx.content]), s.useEffect(() => {
					K && ea && !X && !F && q && f.Z.stopTracking(o.id)
				}, [K, ea, X, F, q, o.id]);
				let eS = (0, j.h)({
					location: T.dr.QUESTS_BAR,
					questConfig: o.config
				});
				return q && (K || !ea || X) && !F ? (0, r.jsx)(y.A, {
					questOrQuests: o,
					questContent: G.trackingCtx.content,
					overrideVisibility: !L && K,
					sourceQuestContent: G.trackingCtx.content,
					children: (e, t) => {
						let n = G.component;
						return M.current = t.current, (0, r.jsxs)("div", {
							className: A.mask,
							children: [K && (0, r.jsx)(k, {
								questId: o.id,
								isExpanded: en
							}), (0, r.jsx)(i.animated.div, {
								"aria-hidden": !K,
								onMouseLeave: ev,
								onMouseEnter: e_,
								onFocus: eb,
								onBlur: ej,
								className: a()(A.wrapper, {
									[A.wrapperInvisible]: !K,
									[A.wrapperVisible]: K && ea
								}),
								style: {
									color: eS ? void 0 : o.config.colors.secondary,
									height: eE.to({
										range: [0, 1],
										output: [0, !G.canCollapseOnBlur && en ? el : 70]
									})
								},
								children: (0, r.jsx)(i.animated.div, {
									className: a()(A.contentWrapper, {
										[A.contentWrapperExpanded]: en,
										[A.contentWrapperAccepted]: Z,
										[A.contentWrapperBrandColorRemoval]: eS
									}),
									style: {
										backgroundColor: eS ? void 0 : G.preEnrollmentBackgroundColor,
										backgroundImage: Z && !eS ? G.postEnrollmentBackgroundImage : void 0
									},
									children: (0, r.jsx)(S.t, {
										springConfig: ey,
										isExpanded: en,
										children: (0, r.jsx)(n, {
											expandedContentRef: eu,
											expansionSpring: eC,
											isExpanded: en,
											isExpansionAnimationComplete: es,
											onCtxMenuClosed: eg,
											onCtxMenuOpened: ef,
											onCtxMenuSelection: ex,
											quest: o,
											useReducedMotion: V,
											collapsedHeight: 70
										})
									})
								})
							})]
						})
					}
				}) : (F ? g.log("Not rendered due to asset error") : q || g.log("Not rendered due to ineligibility"), null)
			}
			let I = 12633 == n.j ? function() {
				let e = (0, O.DH)();
				return null == e ? null : (0, r.jsx)(C.p, {
					source: T.dr.QUESTS_BAR,
					questId: e.id,
					children: (0, r.jsx)(q, {
						quest: e
					})
				}, e.id)
			} : null
		},
		693900: function(e, t, n) {
			n.d(t, {
				n: () => m,
				t: () => p
			}), n(388685);
			var r = n(255367),
				s = n(73800),
				o = n(108542),
				a = n(442837),
				i = n(481060),
				l = n(393238),
				c = n(110924),
				u = n(607070);
			let d = s.createContext({
				springConfig: {},
				isExpanded: !1
			});

			function p(e) {
				let t = s.useMemo(() => ({
					springConfig: e.springConfig,
					isExpanded: e.isExpanded
				}), [e.springConfig, e.isExpanded]);
				return (0, r.jsx)(d.Provider, {
					value: t,
					children: e.children
				})
			}

			function m(e) {
				var t;
				let {
					children: n
				} = e, {
					springConfig: p,
					isExpanded: m
				} = s.useContext(d), f = (0, a.e7)([u.Z], () => u.Z.useReducedMotion), {
					ref: g,
					height: x = null
				} = (0, l.ZP)(), h = null != (t = (0, c.Z)(x)) ? t : null, [{
					height: b
				}, j] = (0, i.q_F)(() => ({
					from: {
						height: 0
					},
					config: p
				}));
				return s.useLayoutEffect(() => {
					null !== x && j({
						height: x,
						immediate: !m || f || null === h
					})
				}, [x, j, m, f, h]), (0, r.jsx)(o.animated.div, {
					style: {
						height: null === h ? "auto" : b,
						overflow: "hidden"
					},
					children: (0, r.jsx)("div", {
						style: {
							overflow: "hidden"
						},
						ref: g,
						children: n
					})
				})
			}
		},
		617889: function(e, t, n) {
			n.d(t, {
				B: () => c
			});
			var r = n(73800),
				s = n(918701),
				o = n(988303),
				a = n(658590),
				i = n(448018),
				l = n(46140);
			let c = (e, t) => {
				let n = (0, s.zK)(e, l.S7.QUEST_BAR_V2),
					c = (0, a.a)(e),
					{
						primaryVariant: u,
						progressVariant: d
					} = o.u.useExperiment({
						location: l.dr.QUESTS_BAR
					}, {
						autoTrackExposure: t && n
					});
				return r.useMemo(() => c ? (0, i.v)(e, o.P.V2, o.P.V2) : n ? (0, i.v)(e, u, d) : (0, i.v)(e, o.P.V1, o.P.V1), [c, u, d, e, n])
			}
		},
		130653: function(e, t, n) {
			n.d(t, {
				T: () => s,
				Z: () => o
			});
			var r = n(255367);
			let s = n(73800).createContext(!1);

			function o(e) {
				return (0, r.jsx)(s.Provider, {
					value: !0,
					children: e.children
				})
			}
		},
		941348: function(e, t, n) {
			n.d(t, {
				Z: () => p
			});
			var r = n(255367),
				s = n(73800),
				o = n(113434),
				a = n(308069),
				i = n(613087),
				l = n(457153),
				c = n(495722),
				u = n(321025),
				d = n(62753);
			let p = function(e) {
				var t;
				let {
					expandedContentRef: n,
					expansionSpring: p,
					isExpanded: m,
					isExpansionAnimationComplete: f,
					onCtxMenuOpened: g,
					onCtxMenuClosed: x,
					onCtxMenuSelection: h,
					quest: b,
					useReducedMotion: j,
					collapsedHeight: _
				} = e, v = s.useRef(null), y = s.useRef(null), C = (null == (t = b.userStatus) ? void 0 : t.enrolledAt) != null, O = (0, o.Rf)(b);
				return (0, r.jsxs)(i.p, {
					expandedContentRef: n,
					collapsedContentRef: v,
					expansionSpring: p,
					children: [(0, r.jsx)(l.Z, {
						ref: v,
						className: d.content,
						expansionSpring: p,
						isExpanded: m,
						isExpansionAnimationComplete: f,
						quest: b,
						useReducedMotion: j,
						taskDetails: O
					}), (0, r.jsx)(c.Z, {
						expansionSpring: p,
						className: d.content,
						collapsedHeight: _,
						onCtxMenuOpen: g,
						onCtxMenuClose: x,
						onCtxMenuSelect: h,
						overlayRef: y,
						isExpanded: m,
						isExpansionAnimationComplete: f,
						quest: b,
						useReducedMotion: j,
						ref: n,
						taskDetails: O,
						children: (0, r.jsxs)(r.Fragment, {
							children: [(0, r.jsx)(u.Z, {
								expansionSpring: p,
								isExpanded: m
							}), !C && (0, r.jsx)(a.Z, {
								quest: b,
								expansionSpring: p,
								useReducedMotion: j,
								isExpanded: m,
								isExpansionAnimationComplete: f,
								onCtxMenuOpen: g,
								onCtxMenuClose: x,
								onCtxMenuSelect: h
							})]
						})
					}), (0, r.jsx)("div", {
						ref: y,
						className: d.overlay
					})]
				})
			}
		},
		308069: function(e, t, n) {
			n.d(t, {
				Z: () => j
			});
			var r = n(255367),
				s = n(73800),
				o = n(120356),
				a = n.n(o),
				i = n(108542),
				l = n(481060),
				c = n(617136),
				u = n(915750),
				d = n(497505),
				p = n(918701),
				m = n(685613),
				f = n(670638),
				g = n(341907),
				x = n(303385),
				h = n(388032),
				b = n(74783);
			let j = e => {
				let {
					quest: t,
					expansionSpring: n,
					onCtxMenuSelect: o,
					onCtxMenuOpen: j,
					onCtxMenuClose: _,
					useReducedMotion: v,
					isExpanded: y,
					isExpansionAnimationComplete: C
				} = e, O = (0, u.aM)(), E = s.useCallback(() => {
					(0, g.openDisclosureModal)(t, {
						content: d.jn.QUEST_BAR_V2,
						ctaContent: c.jZ.OPEN_DISCLOSURE,
						sourceQuestContent: d.jn.QUEST_BAR_V2
					})
				}, [t]), S = s.useCallback(() => {
					(0, p.nc)(t, {
						content: d.jn.QUEST_BAR_V2,
						ctaContent: c.jZ.OPEN_GAME_LINK,
						impressionId: O,
						sourceQuestContent: d.jn.QUEST_BAR_V2
					})
				}, [O, t]), w = y && C, P = (0, r.jsx)(l.P3F, {
					onClick: S,
					className: a()(b.clickable, {
						[b.logo]: w
					}),
					children: (0, r.jsx)(m.ZP, {
						quest: t,
						logotypeClassName: b.rewardHighlightLogotype,
						withGameTile: !1
					})
				});
				return (0, r.jsxs)(i.animated.div, {
					className: a()(b.wrapper, b.rewardHighlightWrapper, {
						[b.interactable]: w
					}),
					style: {
						transform: (0, i.to)([n.to({
							range: [0, 1],
							output: [8, 0]
						})], e => "translateY(".concat(e, "px"))
					},
					children: [(0, r.jsx)(i.animated.div, {
						className: b.opaqueExpandedBackground,
						style: {
							opacity: n.to({
								range: [0, 1],
								output: [0, 1]
							})
						}
					}), (0, r.jsx)(x.Z, {
						quest: t,
						expansionSpring: n,
						isFullyExpanded: w,
						partnerBranding: P,
						useReducedMotion: v
					}), (0, r.jsxs)(i.animated.div, {
						className: b.promotedBadgeWrapper,
						style: {
							opacity: n.to({
								range: [0, 1],
								output: [0, 1]
							})
						},
						children: [(0, r.jsxs)(l.P3F, {
							className: b.promotedBadge,
							onClick: E,
							children: [(0, r.jsx)(l.Text, {
								color: "always-white",
								variant: "text-xs/normal",
								children: h.intl.string(h.t.o6FLcH)
							}), (0, r.jsx)(l.idN, {
								color: l.TVs.colors.WHITE,
								className: b.promotedBadgeIcon
							})]
						}), (0, r.jsx)(f.r, {
							onOpen: j,
							onClose: _,
							onSelect: o,
							questContent: d.jn.QUEST_BAR_V2,
							quest: t,
							shouldShowDisclosure: !0,
							showShareLink: !0,
							sourceQuestContent: d.jn.QUEST_BAR_V2,
							children: e => {
								var t, n;
								return (0, r.jsx)(l.P3F, (t = function(e) {
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
									className: b.submenuWrapper,
									"aria-label": h.intl.string(h.t.DEoVWV),
									children: (0, r.jsx)(l.xhG, {
										size: "md",
										color: "currentColor",
										className: a()(b.submenuIcon, b.white)
									})
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
						})]
					})]
				})
			}
		},
		613087: function(e, t, n) {
			n.d(t, {
				B$: () => d,
				l7: () => p,
				p: () => m
			}), n(388685), n(539854);
			var r = n(255367),
				s = n(73800),
				o = n(867309),
				a = n(108542),
				i = n(393238),
				l = n(743294);

			function c(e) {
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

			function u(e, t) {
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
			let d = s.createContext({
					registerComponent: () => {},
					unregisterComponent: () => {},
					animatedComponents: {},
					expandedContentRef: s.createRef(),
					collapsedContentRef: s.createRef(),
					recalculateAnimationPositions: () => {},
					animatedComponentProps: [],
					expansionSpring: null,
					mountPoints: new Map
				}),
				p = s.forwardRef(function(e, t) {
					var n;
					let {
						children: l,
						id: c,
						inState: u,
						isTextTransition: p = !1
					} = e, {
						recalculateAnimationPositions: m,
						registerComponent: f,
						unregisterComponent: g,
						expansionSpring: x,
						mountPoints: h
					} = s.useContext(d), b = s.useRef(null), j = s.useRef(null), _ = s.useRef(void 0);
					s.useEffect(() => {
						m()
					}, [m]), s.useLayoutEffect(() => {
						let e = b.current;
						return null != e && f(e, c, u), () => {
							null != e && g(c, u)
						}
					}, [c, u, f, g]);
					let v = s.useCallback(e => {
						let {
							height: t
						} = e;
						_.current !== t && (m(), _.current = t)
					}, [m]);
					(0, i.PM)(b, v);
					let y = null == (n = h.get(c)) ? void 0 : n.current,
						C = null;
					return null == y ? C = null : p && null != x ? C = (0, r.jsxs)(r.Fragment, {
						children: ["collapsed" === u && (0, o.createPortal)((0, r.jsx)(a.animated.div, {
							style: {
								position: "absolute",
								opacity: x.to({
									range: [0, 1],
									output: [1, 0]
								})
							},
							children: l(j)
						}), y), "expanded" === u && (0, o.createPortal)((0, r.jsx)(a.animated.div, {
							style: {
								position: "absolute",
								opacity: x.to({
									range: [0, 1],
									output: [0, 1]
								})
							},
							children: l(j)
						}), y)]
					}) : "collapsed" === u && (C = (0, o.createPortal)(l(j), y)), (0, r.jsxs)("div", {
						style: {
							opacity: +(null == C && "collapsed" === u || null == y)
						},
						ref: t,
						children: [l(b), C]
					})
				}),
				m = e => {
					let {
						children: t,
						expandedContentRef: n,
						collapsedContentRef: o,
						expansionSpring: a
					} = e, [i, p] = s.useState({}), [m, f] = s.useState([]), [g, x] = s.useState(() => new Map), h = s.useCallback((e, t, n) => {
						p(r => {
							var s;
							let o = null != (s = r[t]) ? s : {
								expanded: null,
								collapsed: null
							};
							return u(c({}, r), {
								[t]: u(c({}, o), {
									[n]: e
								})
							})
						}), x(e => {
							let n = new Map(e);
							return n.set(t, s.createRef()), n
						})
					}, []), b = s.useCallback((e, t) => {
						let n = !1;
						p(r => {
							var s;
							let o = null != (s = r[e]) ? s : {
								expanded: null,
								collapsed: null
							};
							return o[t] = null, n = null == o.expanded && null == o.collapsed, u(c({}, r), {
								[e]: o
							})
						}), n && x(t => {
							let n = new Map(t);
							return n.delete(e), n
						})
					}, []), j = s.useCallback(() => {
						let e = [];
						for (let t in i) {
							if (null == i[t] || null == n.current || null == o.current) continue;
							let r = i[t].collapsed,
								s = i[t].expanded;
							if (null == r || null == s) continue;
							let a = s.getBoundingClientRect(),
								c = n.current.getBoundingClientRect(),
								u = r.getBoundingClientRect(),
								d = o.current.getBoundingClientRect(),
								p = a.top - c.top + l.Li,
								m = u.top - d.top,
								f = a.left - c.left + l.Li,
								g = u.left - d.left,
								x = -a.right + c.right + l.Li,
								h = -u.right + d.right;
							e.push({
								id: t,
								collapsedLeft: g,
								expandedLeft: f,
								collapsedRight: h,
								expandedRight: x,
								collapsedTop: m,
								expandedTop: p,
								width: a.width
							})
						}
						f(e)
					}, [i, n, o, f]);
					return (0, r.jsx)(d.Provider, {
						value: {
							registerComponent: h,
							unregisterComponent: b,
							animatedComponents: i,
							expandedContentRef: n,
							collapsedContentRef: o,
							recalculateAnimationPositions: j,
							animatedComponentProps: m,
							expansionSpring: a,
							mountPoints: g
						},
						children: t
					})
				}
		},
		164495: function(e, t, n) {
			n.d(t, {
				i: () => P,
				y: () => N
			});
			var r = n(255367),
				s = n(73800),
				o = n(120356),
				a = n.n(o),
				i = n(755721),
				l = n(481060),
				c = n(100527),
				u = n(335131),
				d = n(617136),
				p = n(915750),
				m = n(113434),
				f = n(497505),
				g = n(918701),
				x = n(373370),
				h = n(667105),
				b = n(341907),
				j = n(46140),
				_ = n(215023),
				v = n(388032),
				y = n(895518);

			function C(e) {
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

			function O(e) {
				let {
					quest: t,
					sourceQuestContent: n,
					taskDetails: s
				} = e;
				return (0, r.jsx)(i.zx, {
					className: y.cta,
					color: i.zx.Colors.BRAND,
					fullWidth: !0,
					onClick: () => {
						(0, b.openVideoQuestModal)({
							quest: t,
							sourceQuestContent: n
						})
					},
					size: i.zx.Sizes.SMALL,
					children: (0, g.F9)(s)
				})
			}
			let E = e => {
					let {
						quest: t,
						sourceQuestContent: n
					} = e, s = (0, p.aM)();
					return (0, r.jsx)(i.zx, {
						className: y.cta,
						size: i.zx.Sizes.SMALL,
						onClick: () => (0, g.nc)(t, {
							content: f.jn.QUEST_BAR_V2,
							ctaContent: d.jZ.OPEN_GAME_LINK,
							impressionId: s,
							sourceQuestContent: n
						}),
						children: (0, g.pO)(t) ? v.intl.string(v.t.hvVgAQ) : v.intl.string(v.t.lwQdjI)
					})
				},
				S = e => {
					var t;
					let {
						quest: n,
						sourceQuestContent: s
					} = e, o = null == (t = (0, p.WD)()) ? void 0 : t.getId();
					return (0, r.jsx)(i.zx, {
						fullWidth: !0,
						className: y.cta,
						onClick: () => (0, g.gI)({
							quest: n
						}, {
							content: f.jn.QUEST_BAR_V2,
							ctaContent: d.jZ.CONNECT_CONSOLE,
							impressionId: o,
							sourceQuestContent: s
						}),
						size: i.zx.Sizes.SMALL,
						children: v.intl.string(v.t.csptqa)
					})
				},
				w = e => {
					let {
						quest: t
					} = e, n = (0, g.Vl)(t), s = t.config.features.includes(j.S7.START_QUEST_CTA), o = (0, x.CR)({
						quest: t
					}), {
						launchInGameActivity: a
					} = (0, m.zB)(t);
					return n && s ? (0, r.jsx)(i.zx, {
						className: y.cta,
						color: i.zx.Colors.BRAND,
						fullWidth: !0,
						onClick: a,
						size: i.zx.Sizes.SMALL,
						children: o
					}) : null
				},
				P = e => {
					var t, n, o, {
							quest: d,
							useReducedMotion: p,
							isExpanded: m,
							className: b,
							ctaLabel: v,
							onClick: O,
							questContent: E = f.jn.QUEST_BAR_V2,
							sourceQuestContent: S
						} = e,
						w = function(e, t) {
							if (null == e) return {};
							var n, r, s = function(e, t) {
								if (null == e) return {};
								var n, r, s = {},
									o = Object.keys(e);
								for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (s[n] = e[n]);
								return s
							}(e, t);
							if (Object.getOwnPropertySymbols) {
								var o = Object.getOwnPropertySymbols(e);
								for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
							}
							return s
						}(e, ["quest", "useReducedMotion", "isExpanded", "className", "ctaLabel", "onClick", "questContent", "sourceQuestContent"]);
					let P = (0, h.hf)({
							quest: d,
							questContent: E,
							sourceQuestContent: S
						}),
						T = (0, x.up)(j.dr.QUESTS_BAR),
						N = s.useCallback(e => {
							var t;
							null == O || O(e), (0, g.xN)(d.config) && (null == (t = d.userStatus) ? void 0 : t.claimedAt) != null ? (0, u.mK)({
								openInLayer: !1,
								tab: _.AW.ORBS,
								analyticsLocations: [],
								analyticsSource: c.Z.QUEST_HOME_PAGE
							}) : P()
						}, [O, d.config, null == (o = d.userStatus) ? void 0 : o.claimedAt, P]);
					return (0, r.jsx)(l.gtL, (t = C({
						fullWidth: !0,
						size: i.zx.Sizes.SMALL,
						onClick: N,
						pauseAnimation: p || !m,
						className: a()(y.cta, b),
						buttonShineClassName: y.shine
					}, w), n = n = {
						children: null != v ? v : T
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
				},
				T = e => {
					var t;
					let {
						quest: n,
						sourceQuestContent: s,
						useReducedMotion: o,
						isExpanded: a,
						awaitingConsoleConnections: i,
						hasMadeProgress: l,
						isProgressing: c,
						activeScreen: u,
						taskDetails: d
					} = e, p = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null, m = (0, g.q8)(n), x = (0, g.Vl)(n);
					if (p) return (0, r.jsx)(P, {
						quest: n,
						sourceQuestContent: s,
						useReducedMotion: o,
						isExpanded: a
					});
					if (m) return (0, r.jsx)(O, {
						quest: n,
						sourceQuestContent: s,
						taskDetails: d
					});
					if (x) return (0, r.jsx)(w, {
						quest: n
					});
					if (u === f.LI.CONSOLE && i) return (0, r.jsx)(S, {
						quest: n,
						sourceQuestContent: s
					});
					if (u !== f.LI.SELECT && !l && !c) return (0, r.jsx)(E, {
						quest: n,
						sourceQuestContent: s
					});
					return null
				};

			function N(e) {
				return (0, r.jsxs)("div", {
					className: y.ctaButtons,
					children: [e.showBackButton && (0, r.jsx)(i.zx, {
						className: y.backButton,
						innerClassName: y.backButtonInner,
						look: "blank",
						grow: !1,
						fullWidth: !1,
						size: "none",
						onClick: e.onBack,
						children: (0, r.jsx)(l.V7D, {
							className: y.backIcon
						})
					}), (0, r.jsx)(T, C({}, e))]
				})
			}
		},
		472144: function(e, t, n) {
			n.d(t, {
				Z: () => p
			});
			var r = n(255367),
				s = n(73800),
				o = n(120356),
				a = n.n(o),
				i = n(108542),
				l = n(481060),
				c = n(569379),
				u = n(642145),
				d = n(704247);
			let p = s.forwardRef((e, t) => {
				let {
					quest: n,
					percentComplete: s,
					size: o = 42,
					strokeWidth: p = 3,
					glowBlur: m = .4,
					percentCompleteText: f,
					percentCompleteTextVariant: g = "text-lg/medium",
					children: x
				} = e, h = (0, c.E)(n, s > 0), b = o / 2, j = o / 2 - p / 2, _ = 2 * Math.PI * j, v = _ - s * _, y = {
					strokeDasharray: "".concat(_, " ").concat(_),
					strokeDashoffset: v
				}, C = {
					strokeDasharray: "".concat(_, " ").concat(_),
					strokeDashoffset: -s * _
				}, O = {
					boxShadow: "0 0 30px 0px ".concat(h.glow)
				}, {
					progressTextAnimation: E
				} = (0, l.q_F)({
					progressTextAnimation: +(null != f && 1 !== s),
					config: u.Y
				});
				return (0, r.jsxs)("div", {
					className: d.outer,
					ref: t,
					children: [(0, r.jsxs)("div", {
						className: d.inner,
						style: O,
						children: [x, (0, r.jsxs)(i.animated.div, {
							style: {
								opacity: E
							},
							className: a()(d.coverContent, d.progressTextWrapper),
							children: [(0, r.jsx)("div", {
								className: a()(d.coverContent, d.progressTextOverlay)
							}), (0, r.jsx)(l.Text, {
								variant: g,
								color: "text-primary",
								className: d.progressText,
								children: f
							})]
						})]
					}), (0, r.jsxs)("svg", {
						className: d.progressBar,
						height: o,
						width: o,
						children: [(0, r.jsxs)("defs", {
							children: [(0, r.jsxs)("filter", {
								id: "glow",
								children: [(0, r.jsx)("feGaussianBlur", {
									result: "coloredBlur",
									stdDeviation: m
								}), (0, r.jsxs)("feMerge", {
									children: [(0, r.jsx)("feMergeNode", {
										in: "coloredBlur"
									}), (0, r.jsx)("feMergeNode", {
										in: "coloredBlur"
									}), (0, r.jsx)("feMergeNode", {
										in: "coloredBlur"
									}), (0, r.jsx)("feMergeNode", {
										in: "SourceGraphic"
									})]
								})]
							}), (0, r.jsxs)("linearGradient", {
								id: "linear",
								x1: "100%",
								y1: "0%",
								x2: "0%",
								y2: "0%",
								children: [(0, r.jsx)("stop", {
									offset: "0%",
									stopColor: h.backgroundTop
								}), (0, r.jsx)("stop", {
									offset: "100%",
									stopColor: h.backgroundBottom
								})]
							})]
						}), (0, r.jsx)("circle", {
							className: d.progress,
							strokeWidth: p,
							fill: "transparent",
							r: j,
							cx: b,
							cy: b,
							stroke: "url(#linear)",
							style: C
						}), (0, r.jsx)("circle", {
							className: d.progress,
							strokeWidth: p,
							fill: "transparent",
							r: j,
							cx: b,
							cy: b,
							stroke: h.foreground,
							style: y
						})]
					})]
				})
			})
		},
		759853: function(e, t, n) {
			n.d(t, {
				Z: () => j
			}), n(388685);
			var r = n(255367),
				s = n(73800),
				o = n(120356),
				a = n.n(o),
				i = n(505266),
				l = n(867309),
				c = n(108542),
				u = n(442837),
				d = n(110924),
				p = n(607070),
				m = n(819640),
				f = n(569379),
				g = n(675654),
				x = n(513940),
				h = n(197857);
			let b = ["#51BC9D"],
				j = e => {
					var t;
					let {
						expansionSpring: n,
						overlayRef: o,
						quest: j,
						progressBarRef: _,
						isExpanded: v
					} = e, {
						completionSpring: y,
						startCompletionAnimation: C
					} = (0, f.G)(), O = (null == (t = j.userStatus) ? void 0 : t.completedAt) != null, E = s.useRef(!1), S = (0, u.e7)([p.Z], () => p.Z.useReducedMotion), w = s.useRef(null), P = (0, u.e7)([m.Z], () => m.Z.hasLayers()), T = (0, d.Z)(P), [N, A] = s.useState(null), [R, B] = s.useState(null), k = s.useRef(new i.qA({
						gravity: 0,
						wind: 0
					})), q = (0, i.uR)(N, R), I = s.useCallback(() => {
						if (S) return;
						let e = _.current,
							t = w.current;
						if (null != t && null != e && q.isReady) {
							var n, r, s, o, a, i;
							let {
								x: l,
								y: c
							} = e.getBoundingClientRect(), {
								x: u,
								y: d
							} = t.getBoundingClientRect();
							q.createMultipleConfetti((n = l - u, r = c - d, s = e.clientHeight, o = e.clientWidth, a = function(e) {
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
							}({}, g.We), i = i = {
								position: {
									type: "static-random",
									minValue: {
										x: n,
										y: r
									},
									maxValue: {
										x: n + s,
										y: r + o
									}
								},
								velocity: {
									type: "static-random",
									minValue: {
										x: -20,
										y: -20
									},
									maxValue: {
										x: 20,
										y: 20
									}
								},
								opacity: {
									type: "linear",
									value: 2,
									addValue: -.1
								},
								dragCoefficient: {
									type: "static",
									value: .166
								},
								size: {
									type: "static-random",
									minValue: 2,
									maxValue: 3
								}
							}, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
								var n = Object.keys(e);
								if (Object.getOwnPropertySymbols) {
									var r = Object.getOwnPropertySymbols(e);
									n.push.apply(n, r)
								}
								return n
							})(Object(i)).forEach(function(e) {
								Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(i, e))
							}), a), 100)
						}
					}, [_, w, q, S]), D = (0, d.Z)(v);
					return (s.useEffect(() => {
						O && v && !D && (C(), I())
					}, [v, O, C, I, D]), s.useEffect(() => {
						O && !P && T && setTimeout(() => {
							C(), I()
						}, 200)
					}, [O, T, P, C, I]), s.useEffect(() => {
						q.isReady && (!E.current && O && (C(), I()), E.current = O)
					}, [O, E, I, C, q]), S) ? null : (0, r.jsxs)("div", {
						className: x.wrapper,
						"aria-hidden": "true",
						ref: w,
						children: [(0, r.jsx)(c.animated.div, {
							className: x.background,
							style: {
								opacity: y
							}
						}), (0, r.jsx)(c.animated.div, {
							className: a()(x.borders, x.bordersTopLeft),
							style: {
								opacity: y
							}
						}), (0, r.jsxs)(c.animated.div, {
							className: x.confettiWrapper,
							style: {
								transform: n.to({
									range: [0, 1],
									output: [-35, 0]
								}).to(e => "translateY(".concat(e, "px)"))
							},
							children: [(0, r.jsx)(i.O_, {
								ref: A,
								className: x.confetti,
								environment: k.current
							}), (0, r.jsx)(i.Ji, {
								ref: B,
								sprites: [h],
								colors: b,
								spriteWidth: g.Ko,
								spriteHeight: g.Ko
							}), null != o.current && (0, l.createPortal)((0, r.jsx)(c.animated.div, {
								className: a()(x.borders, x.bordersBottom),
								style: {
									opacity: y
								}
							}), o.current)]
						})]
					})
				}
		},
		205511: function(e, t, n) {
			n.d(t, {
				Z: () => E
			});
			var r = n(255367),
				s = n(73800),
				o = n(120356),
				a = n.n(o),
				i = n(959078),
				l = n(442837),
				c = n(481060),
				u = n(607070),
				d = n(553795),
				p = n(617136),
				m = n(915750),
				f = n(111382),
				g = n(113434),
				x = n(497505),
				h = n(918701),
				b = n(667105),
				j = n(585857),
				_ = n(795057),
				v = n(388032),
				y = n(22559);

			function C(e) {
				return (0, r.jsx)(c.Text, {
					className: y.microphoneUnitBodyText,
					color: "text-muted",
					variant: "text-xxs/normal",
					children: e.children
				})
			}

			function O(e) {
				let {
					quest: t,
					useReducedMotion: n
				} = e, o = (0, f.n)(), l = (0, b.k3)(t.id, x.jn.QUEST_BAR_V2, x.jn.QUEST_BAR_V2), u = (0, b.g2)({
					useReducedMotion: n
				}), j = (0, p.O5)(), _ = (0, m.aM)(), {
					errorHints: O,
					startingConsoleQuest: E,
					startConsoleQuest: S
				} = (0, g.GI)({
					questId: t.id,
					beforeRequest: () => {
						j({
							questId: t.id,
							questContent: x.jn.QUEST_BAR_V2,
							questContentCTA: p.jZ.DEFIBRILLATOR,
							sourceQuestContent: x.jn.QUEST_BAR_V2
						}), u.startAnimation()
					},
					afterRequest: u.stopAnimation
				}), {
					header: w,
					renderBody: P
				} = s.useMemo(() => {
					let e = O.length > 0,
						n = t.config.messages.gameTitle;
					return {
						header: e ? v.intl.formatToPlainString(v.t["28Ql29"], {
							gameTitle: n
						}) : v.intl.formatToPlainString(v.t.gX0Qc3, {
							gameTitle: n
						}),
						renderBody: e ? () => (0, r.jsx)(r.Fragment, {
							children: O.map((e, n) => {
								if (e.type === i.K.EXPIRED_CREDENTIAL && o) {
									let s = d.Z.getAccount(e.connected_account_id, e.connected_account_type),
										o = (0, h.C9)(e),
										a = (0, h._j)(e);
									return (0, r.jsx)(C, {
										children: v.intl.format(o, {
											account_name: null == s ? void 0 : s.name,
											onClick: () => {
												(0, h.fY)({
													quest: t,
													platformType: a
												}, {
													content: x.jn.QUEST_BAR,
													ctaContent: p.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE,
													impressionId: _,
													sourceQuestContent: x.jn.QUEST_BAR_V2
												})
											}
										})
									}, n)
								}
								return (0, r.jsx)(C, {
									children: e.message
								}, n)
							})
						}) : () => (0, r.jsx)(c.Text, {
							className: y.microphoneUnitBodyText,
							color: "text-muted",
							variant: "text-xxs/normal",
							children: v.intl.format(v.t.GXqvCw, {
								gameTitle: n
							})
						})
					}
				}, [O, t, o, _]);
				return (0, r.jsxs)("div", {
					className: y.microphoneUnit,
					children: [(0, r.jsxs)("div", {
						className: y.microphoneUnitHeader,
						children: [(0, r.jsx)(c.P4T, {
							size: "custom",
							color: "currentColor",
							className: 0 === O.length ? y.warningCircle : y.errorCircle,
							width: 16,
							height: 16
						}), (0, r.jsx)(c.Text, {
							variant: "text-xs/medium",
							children: w
						}), (0, r.jsx)(c.P3F, {
							className: a()(y.microphoneUnitRefreshIconWrapper, {
								[y.disabled]: E
							}),
							onClick: () => S(),
							children: u.render()
						})]
					}), (0, r.jsxs)("div", {
						className: a()({
							[y.opacity_50]: E
						}),
						children: [P(), 0 === O.length ? null : (0, r.jsx)(C, {
							children: l
						})]
					})]
				})
			}
			let E = function(e) {
				let {
					quest: t,
					taskDetails: n
				} = e, o = (0, l.e7)([u.Z], () => u.Z.useReducedMotion), a = (0, g.z6)(), i = s.useMemo(() => (0, h.B3)(t).filter(e => a.xboxAndPlaystationAccounts.find(t => t.type === e)), [a.xboxAndPlaystationAccounts, t]), {
					steps: c,
					hasConnectedAccounts: d,
					isProgressingQuestForLaunchedGame: p,
					isQuestComplete: m
				} = s.useMemo(() => {
					var e;
					let s = i.length > 0,
						o = s && (0, h.Bz)(t),
						l = t.config.messages.gameTitle,
						c = (null == (e = t.userStatus) ? void 0 : e.completedAt) != null;
					return {
						steps: [{
							renderContent: () => {
								var e, n;
								return (0, r.jsx)(j.Q, (e = function(e) {
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
								}({}, a), n = n = {
									quest: t,
									sourceQuestContent: x.jn.QUEST_BAR_V2
								}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
									var n = Object.keys(e);
									if (Object.getOwnPropertySymbols) {
										var r = Object.getOwnPropertySymbols(e);
										n.push.apply(n, r)
									}
									return n
								})(Object(n)).forEach(function(t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
								}), e))
							},
							isComplete: s || o || c
						}, {
							renderContent: () => (0, r.jsx)(_.y3, {
								children: v.intl.formatToPlainString(v.t["+8JB6e"], {
									gameTitle: l
								})
							}),
							isComplete: o || c
						}, {
							renderContent: () => (0, r.jsx)(_.y3, {
								children: v.intl.formatToPlainString(v.t.HhfrYW, {
									numMinutes: n.targetMinutes
								})
							}),
							isComplete: c
						}],
						hasConnectedAccounts: s,
						isProgressingQuestForLaunchedGame: o,
						isQuestComplete: c
					}
				}, [a, i.length, t, n.targetMinutes]);
				return (0, r.jsx)(_.ZP, {
					heading: v.intl.string(v.t.UPWlJi),
					steps: c,
					children: d && !p && !m && (0, r.jsx)(O, {
						useReducedMotion: o,
						quest: t
					})
				})
			}
		},
		743294: function(e, t, n) {
			n.d(t, {
				Li: () => o,
				aY: () => r,
				v6: () => s
			});
			let r = "#00000000",
				s = "#CDD8FF1A",
				o = 12
		},
		457153: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var r = n(255367),
				s = n(73800),
				o = n(120356),
				a = n.n(o),
				i = n(108542),
				l = n(113434),
				c = n(95985),
				u = n(667904);
			let d = s.forwardRef(function(e, t) {
				var n;
				let {
					className: o,
					expansionSpring: d,
					isExpanded: p,
					isExpansionAnimationComplete: m,
					quest: f,
					taskDetails: g
				} = e, x = (0, l.Jf)(f), h = s.useRef(null), b = (null == (n = f.userStatus) ? void 0 : n.enrolledAt) != null, j = null != x ? x.percentComplete : g.percentComplete;
				return (0, r.jsx)(i.animated.div, {
					ref: t,
					"aria-hidden": p && m,
					className: a()(o, u.contentCollapsed, {
						[u.contentCollapsedExpanded]: p,
						[u.contentCollapsedAccepted]: b
					}),
					style: {
						opacity: d.to({
							range: [0, 1],
							output: [1, 0]
						})
					},
					children: (0, r.jsx)("div", {
						className: u.contentCollapsedWrapper,
						children: b ? (0, r.jsx)(c.Z, {
							contentLocation: "collapsed",
							quest: f,
							progressBarRef: h,
							isExpanded: !1,
							percentComplete: j
						}) : null
					})
				})
			})
		},
		495722: function(e, t, n) {
			n.d(t, {
				Z: () => K
			}), n(388685), n(953529), n(314940);
			var r = n(255367),
				s = n(73800),
				o = n(120356),
				a = n.n(o),
				i = n(108542),
				l = n(278074),
				c = n(754700),
				u = n(442837),
				d = n(692547),
				p = n(780384),
				m = n(755721),
				f = n(481060),
				g = n(410030),
				x = n(70097),
				h = n(617136),
				b = n(272008),
				j = n(113434),
				_ = n(569984),
				v = n(497505),
				y = n(918701),
				C = n(184299),
				O = n(192023),
				E = n(373370),
				S = n(475595),
				w = n(720293),
				P = n(644646),
				T = n(78826),
				N = n(670638),
				A = n(341907),
				R = n(693900),
				B = n(164495),
				k = n(759853),
				q = n(205511),
				I = n(694802),
				D = n(95985),
				Q = n(50476),
				V = n(46140),
				L = n(743294),
				M = n(388032),
				W = n(921183);

			function Z(e) {
				var t, n;
				let {
					quest: o,
					onClick: i,
					reducedMotion: l,
					isExpanded: u
				} = e, [p, m] = s.useState(!1), g = s.useRef(null), h = (0, S.fh)(o, S.eC.QUEST_BAR_HERO_VIDEO), b = (0, w.z0)(o, c.X.WATCH_VIDEO, w.n1.VIDEO, w.O.THUMBNAIL), j = (0, C.km)(e => e.getVideoProgressState);
				s.useEffect(() => {
					null != g.current && (u && (!l || p) ? (g.current.currentTime = 0, g.current.play()) : g.current.pause())
				}, [g, p, l, u]);
				let _ = j(o.id),
					v = (null == (t = o.userStatus) ? void 0 : t.completedAt) != null && _ === C.iw.COMPLETED,
					y = !v && (!l || p);
				return (0, r.jsxs)(f.P3F, {
					className: W.videoQuestPreviewCont,
					onClick: i,
					onMouseEnter: () => {
						l && !p && m(!0)
					},
					onMouseLeave: () => {
						l && p && m(!1)
					},
					children: [null != b && (0, r.jsx)("img", {
						alt: "",
						src: b.url,
						className: W.assetBodyVideoPreviewMedia
					}), null != h ? (0, r.jsx)(x.Z, {
						ref: g,
						autoPlay: !1,
						poster: null == b ? void 0 : b.url,
						loop: !0,
						muted: !0,
						playsInline: !0,
						className: a()(W.assetBodyVideoPreviewVideo, {
							[W.assetBodyVideoPreviewVisible]: y
						}),
						controls: !1,
						children: (0, r.jsx)("source", {
							src: h.url,
							type: null != (n = h.mimetype) ? n : void 0
						})
					}) : null, (0, r.jsx)("div", {
						className: W.previewPlayButtonCont,
						children: v ? (0, r.jsx)(f.Oe7, {
							color: d.Z.colors.WHITE,
							className: W.previewPlayButton
						}) : (0, r.jsx)(f.o1U, {
							color: d.Z.colors.WHITE,
							className: W.previewPlayButton
						})
					})]
				})
			}

			function U(e) {
				let {
					quest: t
				} = e;
				return (0, r.jsx)(P.Z, {
					className: a()(W.rewardTile, W.hiddenRewardTile),
					learnMoreStyle: "text",
					quest: t,
					questContent: v.jn.QUEST_BAR_V2,
					location: V.dr.QUESTS_BAR,
					sourceQuestContent: v.jn.QUEST_BAR_V2
				})
			}

			function H(e) {
				return (0, r.jsx)(f.Text, {
					className: W.description,
					variant: "text-xs/normal",
					children: (0, E.DD)({
						quest: e.quest,
						location: V.dr.QUESTS_BAR,
						questContent: v.jn.QUEST_BAR_V2,
						taskDetails: e.taskDetails,
						sourceQuestContent: v.jn.QUEST_BAR_V2
					})
				})
			}

			function z(e) {
				let {
					quest: t,
					taskDetails: n,
					expansionSpring: o,
					isInteractable: l,
					reducedMotion: c,
					containerRef: d,
					isExpanded: x,
					onAcceptQuest: h
				} = e, b = (0, u.e7)([_.Z], () => _.Z.isEnrolling(t.id), [t]), j = s.useMemo(() => (0, S.fh)(t, S.eC.QUEST_BAR_HERO), [t]), v = (0, E.CR)({
					quest: t
				}), y = (0, O.h)({
					location: V.dr.QUESTS_BAR,
					questConfig: t.config
				}), C = s.useMemo(() => (0, S.fh)(t, S.eC.HERO_IMAGE), [t]), w = s.useMemo(() => null == C ? {} : {
					backgroundImage: "url(".concat(C.url, ")")
				}, [C]), P = (0, g.ZP)(), N = (0, p.wj)(P);
				return (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)("div", {
						children: (0, r.jsxs)("div", {
							className: W.questPromoContent,
							ref: d,
							children: [(0, r.jsxs)("div", {
								className: W.details,
								children: [(0, r.jsx)(U, {
									quest: t
								}), (0, r.jsx)(f.X6q, {
									className: W.title,
									color: "header-primary",
									variant: "heading-md/medium",
									children: M.intl.format(M.t.EQa7oq, {
										questName: t.config.messages.questName
									})
								}), (0, r.jsx)(H, {
									quest: t,
									taskDetails: n
								})]
							}), (0, r.jsx)(m.zx, {
								wrapperClassName: W.cta,
								color: m.zx.Colors.BRAND,
								fullWidth: !0,
								onClick: l ? h : void 0,
								size: m.zx.Sizes.SMALL,
								submitting: b,
								children: v
							})]
						})
					}), y && null != C && (0, r.jsx)(i.animated.div, {
						className: W.contentCollapsedBackgroundWrapper,
						style: {
							opacity: o.to([0, 1], [1, 0])
						},
						children: (0, r.jsx)("div", {
							className: W.contentCollapsedBackground,
							style: w
						})
					}), (0, r.jsxs)(i.animated.div, {
						className: W.heroAssetWrapper,
						style: {
							backdropFilter: o.to([0, 1], [5, 0]).to(e => "blur(".concat(e, "px)")),
							filter: o.to([0, 1], [.8, 1]).to(e => "brightness(".concat(e, ")"))
						},
						children: [!y && (0, r.jsxs)(r.Fragment, {
							children: [(0, r.jsx)(i.animated.div, {
								className: W.heroAssetDarken,
								style: {
									opacity: o.to([0, 1], [1, 0])
								}
							}), (0, r.jsx)(i.animated.div, {
								className: W.heroAssetTint,
								style: {
									backgroundColor: t.config.colors.primary,
									opacity: o.to([0, 1], [1, 0])
								}
							})]
						}), j.isAnimated ? (0, r.jsx)(T.Fl, {
							id: "QuestBarV2ContentExpanded_heroAnimated",
							children: e => (0, r.jsx)(F, {
								ref: e,
								asset: j,
								isExpanded: x,
								reducedMotion: c
							})
						}) : (0, r.jsx)(T.Fl, {
							id: "QuestBarV2ContentExpanded_heroStatic",
							children: e => (0, r.jsx)("img", {
								ref: e,
								alt: "",
								className: W.heroAsset,
								src: j.url
							})
						}), (0, r.jsx)("div", {
							className: a()(W.legibilityGradient, {
								[W.legibilityGradientDark]: N
							})
						})]
					})]
				})
			}
			let F = s.forwardRef(function(e, t) {
				var n;
				let {
					asset: o,
					isExpanded: a,
					reducedMotion: i
				} = e, l = s.useRef(null);
				return s.useEffect(() => {
					null != l.current && l.current.pause()
				}, []), s.useEffect(() => {
					null == l.current || i || (a ? (l.current.currentTime = 0, l.current.play()) : l.current.pause())
				}, [i, a]), (0, r.jsx)(x.Z, {
					ref: e => {
						null != e && (l.current = e, null != t && ("function" == typeof t ? t(e) : t.current = e))
					},
					autoPlay: !0,
					loop: !0,
					muted: !0,
					playsInline: !0,
					className: W.heroAsset,
					controls: !1,
					children: (0, r.jsx)("source", {
						src: o.url,
						type: null != (n = o.mimetype) ? n : void 0
					})
				})
			});

			function X(e) {
				var t;
				let {
					quest: n,
					taskDetails: o,
					expansionSpring: c,
					overlayRef: u,
					isExpanded: d,
					reducedMotion: p,
					containerRef: m,
					onCtxMenuOpen: g,
					onCtxMenuClose: x,
					onCtxMenuSelect: h
				} = e, b = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null, _ = o.percentComplete > 0, C = (0, j.z)(n), [O, E, S] = (0, j.me)(n, o), w = s.useRef(null), P = (0, j.B6)(n.config.expiresAt), T = (0, j._s)({
					quest: n
				}), U = (0, y.q8)(n), H = (0, j.Jf)(n), z = s.useCallback(() => {
					(0, A.openVideoQuestModal)({
						quest: n,
						sourceQuestContent: v.jn.QUEST_BAR_V2
					})
				}, [n]), F = null != H ? H.percentComplete : o.percentComplete;
				return (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)(i.animated.div, {
						className: a()(W.postEnrollmentBackground, W.postEnrollmentBackgroundCollapsed),
						style: {
							backgroundImage: "linear-gradient(90deg, ".concat(L.aY, ", ").concat(L.v6, ")"),
							opacity: c.to({
								range: [0, 1],
								output: [1, 0]
							})
						}
					}), (0, r.jsxs)("div", {
						className: W.questAcceptedContent,
						ref: m,
						children: [(0, r.jsxs)("div", {
							className: W.questAcceptedHeader,
							children: [(0, r.jsx)(f.Text, {
								variant: "text-xxs/medium",
								className: a()(W.flex, W.headerText),
								children: M.intl.format(M.t["pX+fmp"], {
									expirationDate: P
								})
							}), (0, r.jsx)(N.r, {
								onOpen: g,
								onClose: x,
								onSelect: h,
								questContent: v.jn.QUEST_BAR_V2,
								quest: n,
								shouldShowDisclosure: !1,
								showShareLink: !0,
								sourceQuestContent: v.jn.QUEST_BAR_V2,
								children: e => {
									var t, n;
									return (0, r.jsx)(f.P3F, (t = function(e) {
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
										className: W.submenuWrapper,
										"aria-label": M.intl.string(M.t.DEoVWV),
										children: (0, r.jsx)(f.xhG, {
											size: "md",
											color: "currentColor",
											className: a()(W.submenuIcon, W.interactiveNormal)
										})
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
							})]
						}), (0, r.jsx)("div", {
							className: W.divider
						}), (0, r.jsx)(k.Z, {
							expansionSpring: c,
							overlayRef: u,
							progressBarRef: w,
							quest: n,
							isExpanded: d
						}), (0, r.jsx)(D.Z, {
							contentLocation: "expanded",
							quest: n,
							progressBarRef: w,
							isExpanded: !0,
							percentComplete: F,
							activeScreen: O
						}), (0, r.jsx)(R.n, {
							children: !b && !(0, y.Gd)(n) && (0, l.EQ)(O).with(v.LI.SELECT, () => (0, r.jsx)(Q.Z, {
								onConsole: () => S(V.cd.CONSOLE),
								onDesktop: () => S(V.cd.DESKTOP)
							})).with(v.LI.DESKTOP, () => (0, r.jsx)(I.Z, {
								quest: n
							})).with(v.LI.CONSOLE, () => (0, r.jsx)(q.Z, {
								quest: n,
								taskDetails: o
							})).exhaustive()
						}), (0, r.jsxs)(R.n, {
							children: [U && (0, r.jsx)(Z, {
								isExpanded: d,
								quest: n,
								onClick: z,
								reducedMotion: p
							}), (0, r.jsx)(B.y, {
								quest: n,
								useReducedMotion: p,
								isExpanded: d,
								awaitingConsoleConnections: T,
								hasMadeProgress: _,
								isProgressing: C,
								activeScreen: O,
								showBackButton: O !== v.LI.SELECT && E.length > 1 && !_ && !C,
								onBack: () => S(null),
								taskDetails: o,
								sourceQuestContent: v.jn.QUEST_BAR_V2
							})]
						})]
					}), (0, r.jsx)("div", {
						className: a()(W.postEnrollmentBackground, W.postEnrollmentBackgroundExpanded),
						style: {
							backgroundImage: "linear-gradient(90deg, ".concat(L.aY, ", ").concat(L.v6, ")")
						}
					})]
				})
			}
			let K = s.forwardRef(function(e, t) {
				var n;
				let {
					children: o,
					className: l,
					collapsedHeight: c,
					isExpanded: u,
					isExpansionAnimationComplete: d,
					expansionSpring: p,
					onCtxMenuOpen: m,
					onCtxMenuClose: f,
					onCtxMenuSelect: g,
					overlayRef: x,
					quest: _,
					useReducedMotion: C,
					taskDetails: O
				} = e, E = (0, y.q8)(_), S = (0, y.Vl)(_), {
					launchInGameActivity: w
				} = (0, j.zB)(_), P = s.useCallback(() => {
					let e = _.config.features.includes(V.S7.START_QUEST_CTA),
						t = e ? h.jZ.START_QUEST : h.jZ.ACCEPT_QUEST;
					(0, b.AH)(_.id, {
						questContent: v.jn.QUEST_BAR_V2,
						questContentCTA: t,
						sourceQuestContent: v.jn.QUEST_BAR_V2
					}), E && (0, A.openVideoQuestModal)({
						quest: _,
						sourceQuestContent: v.jn.QUEST_BAR_V2
					}), S && e && w()
				}, [_, E, S, w]), T = (null == (n = _.userStatus) ? void 0 : n.enrolledAt) != null, N = u && d;
				return (0, r.jsxs)(i.animated.div, {
					"aria-hidden": !N,
					className: a()(l, W.contentExpanded, {
						[W.contentInteractable]: N,
						[W.contentExpandedAccepted]: T
					}),
					style: {
						transform: (0, i.to)([p.to({
							range: [0, 1],
							output: [0, -100]
						}), p.to({
							range: [0, 1],
							output: [0, c]
						})], (e, t) => "translateY(calc(".concat(e, "% + ").concat(t, "px))"))
					},
					children: [o, (0, r.jsx)(i.animated.div, {
						style: {
							opacity: 1
						},
						children: T ? (0, r.jsx)(X, {
							quest: _,
							taskDetails: O,
							expansionSpring: p,
							overlayRef: x,
							isExpanded: u,
							reducedMotion: C,
							onCtxMenuOpen: m,
							onCtxMenuClose: f,
							onCtxMenuSelect: g,
							containerRef: t
						}) : (0, r.jsx)(z, {
							quest: _,
							taskDetails: O,
							expansionSpring: p,
							isInteractable: N,
							reducedMotion: C,
							containerRef: t,
							isExpanded: u,
							onAcceptQuest: P
						})
					})]
				})
			})
		},
		569379: function(e, t, n) {
			n.d(t, {
				E: () => l,
				G: () => i
			}), n(388685);
			var r = n(73800),
				s = n(481060),
				o = n(410030),
				a = n(113434);

			function i() {
				let [{
					spring: e
				}, t] = (0, s.q_F)(() => ({
					spring: 0
				}), "animate-always");
				return {
					completionSpring: e,
					startCompletionAnimation: r.useCallback(() => {
						t({
							spring: 1
						}), t({
							spring: 0,
							delay: 2e3
						})
					}, [t])
				}
			}

			function l(e, t) {
				var n;
				let r = (0, a.z)(e),
					s = null != (n = (0, o.i6)()) ? n : 0,
					i = "var(--green-330)",
					l = ["var(--background-base-lowest)", "var(--interactive-normal)"];
				return {
					backgroundTop: t ? l[s] : ["#828288", "#CBCDD4"][s],
					backgroundBottom: t ? l[s] : ["#535356", "#8B8C95"][s],
					foreground: i,
					glow: t && r ? i : "#C4C1D66E"
				}
			}
		},
		694802: function(e, t, n) {
			n.d(t, {
				Z: () => c
			}), n(784620), n(973216);
			var r = n(255367);
			n(73800);
			var s = n(481060),
				o = n(113434),
				a = n(388032),
				i = n(686166);

			function l(e) {
				let {
					header: t,
					children: n
				} = e;
				return (0, r.jsxs)("div", {
					className: i.card,
					children: [(0, r.jsxs)("div", {
						className: i.header,
						children: [(0, r.jsx)(s.P4T, {
							size: "custom",
							color: "currentColor",
							className: i.icon,
							width: 16,
							height: 16
						}), (0, r.jsx)(s.X6q, {
							color: "text-default",
							variant: "heading-sm/medium",
							children: t
						})]
					}), (0, r.jsx)(s.Text, {
						color: "text-muted",
						variant: "text-xs/normal",
						className: i.warningBody,
						children: n
					})]
				})
			}
			let c = function(e) {
				let {
					quest: t
				} = e, n = (0, o.qb)(t);
				if (0 === n.length) return null;
				let s = n.at(0);
				return s === a.intl.string(a.t.BV6xDg) ? (0, r.jsx)(l, {
					header: a.intl.string(a.t.onh6cn),
					children: a.intl.string(a.t.arVHRE)
				}) : s === a.intl.string(a.t.MFGxFB) ? (0, r.jsx)(l, {
					header: a.intl.string(a.t.JPihZG),
					children: a.intl.string(a.t.MFGxFB)
				}) : null
			}
		},
		95985: function(e, t, n) {
			n.d(t, {
				Z: () => p
			});
			var r = n(255367);
			n(73800);
			var s = n(481060),
				o = n(113434),
				a = n(497505),
				i = n(644646),
				l = n(613087),
				c = n(472144),
				u = n(46140),
				d = n(505939);
			let p = e => {
				let {
					contentLocation: t,
					quest: n,
					progressBarRef: p,
					isExpanded: m,
					percentComplete: f,
					activeScreen: g
				} = e, x = (0, o.eQ)(n), h = (0, o.vf)({
					quest: n,
					isExpanded: m,
					activeScreen: g,
					sourceQuestContent: a.jn.QUEST_BAR_V2
				});
				return (0, r.jsxs)("div", {
					className: d.questProgressWrapper,
					children: [(0, r.jsx)(l.l7, {
						inState: t,
						id: "progress-bar",
						ref: p,
						children: e => (0, r.jsx)(c.Z, {
							ref: e,
							quest: n,
							percentComplete: f,
							size: 42,
							strokeWidth: 3,
							children: (0, r.jsx)(i.Z, {
								className: d.questProgressRewardTile,
								quest: n,
								questContent: a.jn.QUEST_BAR_V2,
								autoplay: !1,
								location: u.dr.QUESTS_BAR,
								sourceQuestContent: a.jn.QUEST_BAR_V2
							})
						})
					}), (0, r.jsxs)("div", {
						className: d.questProgressCopy,
						children: [(0, r.jsx)(l.l7, {
							inState: t,
							id: "progress-title",
							children: e => (0, r.jsx)(s.Text, {
								ref: e,
								className: d.questProgressHint,
								color: "header-primary",
								variant: "text-sm/semibold",
								children: x
							})
						}), (0, r.jsx)(l.l7, {
							inState: t,
							id: "progress-subtitle",
							isTextTransition: !0,
							children: e => (0, r.jsx)(s.Text, {
								ref: e,
								className: d.questProgressHint,
								color: "text-muted",
								variant: "text-xs/normal",
								children: h
							})
						})]
					})]
				})
			}
		},
		303385: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var r = n(255367);
			n(73800);
			var s = n(108542),
				o = n(481060),
				a = n(497505),
				i = n(644646),
				l = n(46140),
				c = n(388032),
				u = n(420444);
			let d = e => {
				let {
					quest: t,
					expansionSpring: n,
					isFullyExpanded: d,
					partnerBranding: p,
					useReducedMotion: m
				} = e;
				return (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)("div", {
						className: u.rewardTileSpacer
					}), (0, r.jsx)(s.animated.div, {
						className: u.rewardTileContainer,
						style: {
							transform: (0, s.to)([n.to({
								range: [0, 1],
								output: [-8, 0]
							}), n.to({
								range: [0, 1],
								output: [0, 92]
							}), n.to({
								range: [1, 0],
								output: [1, .75]
							})], (e, t, n) => "translate(".concat(e, "px, ").concat(t, "px) scale(").concat(n, ")"))
						},
						children: (0, r.jsx)(i.Z, {
							learnMoreStyle: "text",
							quest: t,
							questContent: a.jn.QUEST_BAR_V2,
							location: l.dr.QUESTS_BAR,
							autoplay: d && !m,
							sourceQuestContent: a.jn.QUEST_BAR_V2
						})
					}), (0, r.jsxs)(s.animated.div, {
						className: u.rewardHighlightLogoCTA,
						style: {
							transform: (0, s.to)([n.to({
								range: [0, 1],
								output: [0, -48]
							}), n.to({
								range: [0, 1],
								output: [0, 8]
							})], (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"))
						},
						children: [(0, r.jsx)("div", {
							className: u.partnerBranding,
							children: p
						}), (0, r.jsx)(s.animated.div, {
							className: u.rewardHighlightCTA,
							style: {
								opacity: n.to({
									range: [0, 1],
									output: [.7, 0]
								})
							},
							children: (0, r.jsx)(o.Text, {
								color: "always-white",
								variant: "text-xs/medium",
								children: c.intl.string(c.t["1Wvve3"])
							})
						})]
					})]
				})
			}
		},
		321025: function(e, t, n) {
			n.d(t, {
				Z: () => i
			});
			var r = n(255367),
				s = n(73800),
				o = n(108542),
				a = n(613087);

			function i(e) {
				let {
					expansionSpring: t,
					isExpanded: n
				} = e, {
					animatedComponentProps: i,
					recalculateAnimationPositions: l,
					mountPoints: c
				} = s.useContext(a.B$);
				return s.useEffect(() => {
					l()
				}, [l, n]), (0, r.jsx)("div", {
					style: {
						overflow: "hidden",
						pointerEvents: "none",
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						zIndex: 5
					},
					children: i.map(e => {
						let {
							id: n,
							collapsedLeft: s,
							expandedLeft: a,
							collapsedTop: i,
							expandedTop: l,
							width: u
						} = e, d = c.get(n);
						return (0, r.jsx)(o.animated.div, {
							ref: d,
							style: {
								zIndex: 2,
								position: "absolute",
								top: 0,
								left: 0,
								width: u,
								transform: (0, o.to)([t.to({
									range: [0, 1],
									output: [s, a]
								}), t.to({
									range: [0, 1],
									output: [i, l]
								})], (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"))
							}
						}, n)
					})
				})
			}
		},
		795057: function(e, t, n) {
			n.d(t, {
				ZP: () => u,
				y3: () => c
			});
			var r = n(255367);
			n(73800);
			var s = n(120356),
				o = n.n(s),
				a = n(481060);
			n(918701), n(373370), n(566078), n(388032);
			var i = n(141572);

			function l(e) {
				let {
					children: t,
					isComplete: n,
					hasNextStep: s
				} = e;
				return (0, r.jsxs)("li", {
					className: o()(i.stepWrapper, {
						[i.stepWrapperComplete]: n
					}, {
						[i.stepWrapperWithNextStep]: s
					}),
					children: [(0, r.jsxs)("div", {
						className: i.stepIndicator,
						children: [(0, r.jsx)("div", {
							className: i.stepIconWrapper,
							children: n && (0, r.jsx)(a.sV5, {
								className: i.stepIcon,
								color: a.TVs.colors.WHITE
							})
						}), s && (0, r.jsx)("div", {
							className: i.stepConnector
						})]
					}), (0, r.jsx)("div", {
						className: i.stepContent,
						children: t
					})]
				})
			}

			function c(e) {
				let {
					children: t
				} = e;
				return (0, r.jsx)(a.Text, {
					color: "text-muted",
					variant: "text-xs/medium",
					children: t
				})
			}
			let u = function(e) {
				let {
					children: t,
					heading: n,
					steps: s
				} = e;
				return (0, r.jsxs)("div", {
					className: i.wrapper,
					children: [(0, r.jsx)("div", {
						className: i.headingWrapper,
						children: (0, r.jsx)(a.X6q, {
							className: i.heading,
							color: "header-primary",
							variant: "text-xs/semibold",
							children: n
						})
					}), (0, r.jsx)("div", {
						className: i.stepsWrapper,
						children: (0, r.jsx)("ul", {
							children: s.map((e, t) => (0, r.jsx)(l, {
								isComplete: e.isComplete,
								hasNextStep: t < s.length - 1,
								children: e.renderContent()
							}, t))
						})
					}), t]
				})
			}
		},
		50476: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(255367),
				s = n(755721),
				o = n(481060),
				a = n(388032),
				i = n(374578);

			function l(e) {
				let {
					onClick: t,
					children: n
				} = e;
				return (0, r.jsx)(s.zx, {
					onClick: t,
					className: i.button,
					innerClassName: i.buttonInner,
					look: "blank",
					children: n
				})
			}
			let c = function(e) {
				let {
					onDesktop: t,
					onConsole: n
				} = e;
				return (0, r.jsxs)("div", {
					className: i.buttons,
					children: [(0, r.jsxs)(l, {
						onClick: t,
						children: [a.intl.string(a.t.QXc019), (0, r.jsx)(o.pzj, {
							size: "sm"
						})]
					}), (0, r.jsxs)(l, {
						onClick: n,
						children: [a.intl.string(a.t["8lAfuL"]), (0, r.jsx)(o.iWm, {
							size: "sm"
						})]
					})]
				})
			}
		},
		658590: function(e, t, n) {
			n.d(t, {
				a: () => r
			});
			let r = e => "1193992107035983872" === e.id
		},
		448018: function(e, t, n) {
			n.d(t, {
				v: () => p
			});
			var r = n(497505),
				s = n(988303),
				o = n(941348),
				a = n(658590),
				i = n(647365),
				l = n(743294);
			let c = {
					component: i.Z,
					getCollapsedHeight: () => 40,
					getPreEnrollmentExpandedHeight: () => 240,
					getPostEnrollmentBackgroundImage: e => "linear-gradient(90deg, ".concat(e.config.colors.primary, ", ").concat(e.config.colors.secondary, ")"),
					getPreEnrollmentBackgroundColor: e => void 0,
					canCollapseOnBlur: e => {
						var t;
						return (null == (t = e.userStatus) ? void 0 : t.completedAt) == null
					},
					shouldExpandOnQuestComplete: e => !0,
					getVerticalPadding: () => 8
				},
				u = l.Li,
				d = {
					component: o.Z,
					getCollapsedHeight: e => {
						var t;
						return (null == (t = e.userStatus) ? void 0 : t.enrolledAt) != null ? 66 : 40
					},
					getPreEnrollmentExpandedHeight: () => 270,
					getPostEnrollmentBackgroundImage: () => "linear-gradient(90deg, ".concat(l.aY, ", ").concat(l.v6, ")"),
					getPreEnrollmentBackgroundColor: e => "var(--home-background)",
					canCollapseOnBlur: e => !0,
					shouldExpandOnQuestComplete: e => !1,
					getVerticalPadding: () => u
				},
				p = (e, t, n) => {
					var o;
					let i = (null == (o = e.userStatus) ? void 0 : o.enrolledAt) != null,
						l = !i && t === s.P.V2 || i && n === s.P.V2 || (0, a.a)(e),
						u = l ? d : c;
					return {
						component: u.component,
						collapsedHeight: u.getCollapsedHeight(e),
						preEnrollmentExpandedHeight: u.getPreEnrollmentExpandedHeight(e),
						postEnrollmentBackgroundImage: u.getPostEnrollmentBackgroundImage(e),
						preEnrollmentBackgroundColor: u.getPreEnrollmentBackgroundColor(e),
						canCollapseOnBlur: u.canCollapseOnBlur(e),
						shouldExpandOnQuestComplete: u.shouldExpandOnQuestComplete(e),
						paddingVertical: u.getVerticalPadding(),
						trackingCtx: {
							content: l ? r.jn.QUEST_BAR_V2 : r.jn.QUEST_BAR
						}
					}
				}
		},
		647365: function(e, t, n) {
			n.d(t, {
				Z: () => i
			});
			var r = n(255367);
			n(73800);
			var s = n(453217),
				o = n(578080),
				a = n(665600);
			let i = function(e) {
				let {
					collapsedHeight: t,
					expandedContentRef: n,
					expansionSpring: i,
					isExpanded: l,
					isExpansionAnimationComplete: c,
					onCtxMenuOpened: u,
					onCtxMenuClosed: d,
					onCtxMenuSelection: p,
					quest: m,
					useReducedMotion: f
				} = e;
				return (0, r.jsx)(o.Z, {
					expansionSpring: i,
					className: a.content,
					collapsedHeight: t,
					onCtxMenuOpen: u,
					onCtxMenuClose: d,
					onCtxMenuSelect: p,
					isExpanded: l,
					isExpansionAnimationComplete: c,
					quest: m,
					useReducedMotion: f,
					ref: n,
					children: (0, r.jsx)(s.Z, {
						className: a.content,
						expansionSpring: i,
						isExpanded: l,
						isExpansionAnimationComplete: c,
						quest: m,
						useReducedMotion: f
					})
				})
			}
		},
		788284: function(e, t, n) {
			n.d(t, {
				Z: () => h
			}), n(388685);
			var r = n(255367),
				s = n(73800),
				o = n(120356),
				a = n.n(o),
				i = n(392711),
				l = n.n(i),
				c = n(442837),
				u = n(481060),
				d = n(451478),
				p = n(302221),
				m = n(464121);
			let f = [0, .5, 1],
				g = {
					"layers[1].shapes[1].g.k.k": [0, .522, .278, .776, .5, .522, .278, .776, 1, .522, .278, .776],
					"layers[2].shapes[1].g.k.k": [0, .714, .271, .757, .5, .714, .271, .757, 1, .714, .271, .757]
				};
			async function x(e, t) {
				let r = (await n.e("30166").then(n.t.bind(n, 235630, 19))).default;
				return function(e, t, n) {
					for (let r in t) {
						let t = l().get(e, r);
						if (null == t) continue;
						let s = t.map((e, t) => {
							var r;
							return null != (r = n[t]) ? r : e
						});
						l().set(e, r, s)
					}
				}(r, g, t), r
			}

			function h(e) {
				var t;
				let {
					animationClassName: n,
					className: o,
					quest: i,
					useReducedMotion: l
				} = e, g = (0, c.e7)([d.Z], () => d.Z.isFocused()), h = s.useRef(null), [b, j] = s.useState(!1), _ = s.useMemo(() => {
					if (null == i) return null;
					let e = (0, p.oo)(i.config.colors.primary),
						t = {
							r: e.r / 255,
							g: e.g / 255,
							b: e.b / 255
						},
						n = f.reduce((e, n) => [...e, n, t.r, t.g, t.b], []);
					return x(i.id, n)
				}, [i]), v = (null == (t = i.userStatus) ? void 0 : t.enrolledAt) != null, y = !l && g;
				s.useEffect(() => {
					var e, t, n, r;
					g ? y && (null == (r = h.current) || null == (n = r.animation) || n.play()) : null == (t = h.current) || null == (e = t.animation) || e.goToAndStop(0, !0)
				}, [y, g]);
				let C = s.useCallback(() => {
					j(!0)
				}, []);
				return null == _ || v ? (0, r.jsx)("div", {
					className: m.backgroundFallback,
					style: {
						backgroundImage: "linear-gradient(90deg, ".concat(i.config.colors.primary, ", ").concat(i.config.colors.secondary, ")")
					}
				}) : (0, r.jsx)("div", {
					className: a()(m.lottieAnimationBackgroundWrapper, o),
					children: (0, r.jsx)(u.Fmz, {
						ref: h,
						onComplete: C,
						importData: () => _,
						shouldAnimate: !b && y,
						className: a()(m.lottieAnimation, m.lottieAnimationBackground, n),
						loop: 0,
						rendererSettings: {
							preserveAspectRatio: "none"
						}
					}, i.config.colors.primary)
				})
			}
		},
		453217: function(e, t, n) {
			n.d(t, {
				Z: () => h
			});
			var r = n(255367);
			n(73800);
			var s = n(120356),
				o = n.n(s),
				a = n(108542),
				i = n(481060),
				l = n(113434),
				c = n(497505),
				u = n(685613),
				d = n(340100),
				p = n(644646),
				m = n(788284),
				f = n(46140),
				g = n(388032),
				x = n(192214);
			let h = function(e) {
				var t;
				let {
					className: n,
					expansionSpring: s,
					isExpanded: h,
					isExpansionAnimationComplete: b,
					quest: j,
					useReducedMotion: _
				} = e, v = (null == (t = j.userStatus) ? void 0 : t.enrolledAt) != null, {
					percentComplete: y
				} = (0, l.Rf)(j), C = (0, l.Jf)(j), O = null != C ? C.percentComplete > 0 : y > 0;
				return (0, r.jsxs)(a.animated.div, {
					"aria-hidden": h && b,
					className: o()(n, x.contentCollapsed, {
						[x.contentCollapsedExpanded]: h,
						[x.contentCollapsedAccepted]: v
					}),
					style: {
						opacity: s.to({
							range: [0, 1],
							output: [1, 0]
						})
					},
					children: [(0, r.jsx)(m.Z, {
						quest: j,
						useReducedMotion: _
					}), (0, r.jsx)("div", {
						className: x.contentCollapsedWrapper,
						children: v ? (0, r.jsxs)("div", {
							className: x.questProgressWrapper,
							children: [(0, r.jsx)(p.Z, {
								className: x.questProgressRewardTile,
								quest: j,
								questContent: c.jn.QUEST_BAR,
								autoplay: !1,
								location: f.dr.QUESTS_BAR,
								sourceQuestContent: c.jn.QUEST_BAR
							}), O ? (0, r.jsx)(d.Z, {
								className: x.questProgressBar,
								quest: j
							}) : (0, r.jsx)(i.Text, {
								className: x.questProgressHint,
								color: "always-white",
								variant: "text-sm/semibold",
								children: g.intl.string(g.t["7e5k7O"])
							})]
						}) : (0, r.jsxs)("div", {
							className: x.brandingWrapper,
							children: [(0, r.jsx)(u.ZP, {
								className: x.partnerBranding,
								quest: j
							}), (0, r.jsx)(i.X6q, {
								color: "always-white",
								variant: "heading-sm/medium",
								className: x.questName,
								children: g.intl.format(g.t.EAYZAg, {
									questName: j.config.messages.questName
								})
							})]
						})
					})]
				})
			}
		},
		578080: function(e, t, n) {
			n.d(t, {
				Z: () => M
			}), n(953529);
			var r = n(255367),
				s = n(73800),
				o = n(120356),
				a = n.n(o),
				i = n(108542),
				l = n(442837),
				c = n(950104),
				u = n(780384),
				d = n(755721),
				p = n(481060),
				m = n(70097),
				f = n(703656),
				g = n(358085),
				x = n(617136),
				h = n(915750),
				b = n(272008),
				j = n(113434),
				_ = n(569984),
				v = n(497505),
				y = n(918701),
				C = n(865364),
				O = n(373370),
				E = n(475595),
				S = n(566078),
				w = n(340100),
				P = n(611855),
				T = n(644646),
				N = n(78826),
				A = n(670638),
				R = n(667105),
				B = n(46140),
				k = n(981631),
				q = n(701488),
				I = n(388032),
				D = n(92503);

			function Q(e) {
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

			function V(e, t) {
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

			function L(e) {
				let {
					style: t,
					onClick: n
				} = e;
				return (0, C.O)({
					location: B.dr.QUESTS_BAR,
					autoTrackExposure: !0
				}) ? (0, r.jsx)(d.zx, {
					className: D.cta,
					style: t,
					color: d.zx.Colors.CUSTOM,
					fullWidth: !0,
					onClick: n,
					size: d.zx.Sizes.NONE,
					children: I.intl.string(I.t.lwQdjI)
				}) : null
			}
			let M = s.forwardRef(function(e, t) {
				var n, o;
				let {
					children: C,
					className: M,
					collapsedHeight: W,
					expansionSpring: Z,
					isExpanded: U,
					isExpansionAnimationComplete: H,
					onCtxMenuOpen: z,
					onCtxMenuClose: F,
					onCtxMenuSelect: X,
					quest: K,
					useReducedMotion: Y
				} = e, G = (0, l.e7)([_.Z], () => _.Z.isEnrolling(K.id), [K]), J = (0, h.aM)(), $ = (0, j.B6)(K.config.expiresAt), ee = S.r.build(K.config), et = (0, j.B6)(ee.rewardsExpireAt), en = s.useMemo(() => (0, E.fh)(K, E.eC.HERO), [K]), er = (0, R.tP)(ee.application.id), es = ee.features.has(B.S7.START_QUEST_CTA) ? x.jZ.START_QUEST : x.jZ.ACCEPT_QUEST, eo = ee.features.has(B.S7.START_QUEST_CTA) ? I.intl.string(I.t.E80Bdn) : I.intl.string(I.t.l7E81t), ea = s.useCallback(() => {
					(0, b.AH)(K.id, {
						questContent: v.jn.QUEST_BAR,
						questContentCTA: es,
						sourceQuestContent: v.jn.QUEST_BAR
					}), ee.features.has(B.S7.START_QUEST_CTA) && (0, f.uL)(k.Z5c.ACTIVITY_DETAILS(q.In), void 0)
				}, [K, es, ee.features]), ei = (0, R.hf)({
					quest: K,
					questContent: v.jn.QUEST_BAR,
					sourceQuestContent: v.jn.QUEST_BAR
				}), el = s.useCallback(() => {
					(0, y.nc)(K, {
						content: v.jn.QUEST_BAR,
						ctaContent: x.jZ.OPEN_GAME_LINK,
						impressionId: J,
						sourceQuestContent: v.jn.QUEST_BAR
					})
				}, [J, K]), ec = ee.features.has(B.S7.POST_ENROLLMENT_CTA), eu = (0, j.Rf)(K), ed = (0, j.Jf)(K), ep = null != ed ? ed.progress > 0 : eu.progressSeconds > 0, em = (null == (n = K.userStatus) ? void 0 : n.enrolledAt) != null, ef = (null == (o = K.userStatus) ? void 0 : o.completedAt) != null, eg = s.useMemo(() => (0, y.Xv)(K.config), [K.config]), ex = U && H, eh = (0, O.DD)({
					quest: K,
					taskDetails: eu,
					location: B.dr.QUESTS_BAR,
					questContent: v.jn.QUEST_BAR,
					thirdPartyTaskDetails: null != ed ? ed : void 0,
					sourceQuestContent: v.jn.QUEST_BAR
				}), eb = (0, g.isWeb)(), ej = s.useMemo(() => {
					let e = (0, u.Qg)(K.config.colors.primary, {
						base: "#ffffff",
						contrastRatio: u.S3.Text
					});
					return {
						"--custom-cta-color": e,
						"--custom-cta-color-hover": (0, c.r5)(e, .3),
						"--custom-cta-color-active": (0, c.r5)(e, .35)
					}
				}, [K.config.colors.primary]);
				return (0, r.jsxs)(i.animated.div, {
					className: a()(M, D.contentExpanded, {
						[D.contentInteractable]: ex
					}),
					style: {
						backgroundColor: K.config.colors.secondary,
						transform: ef ? void 0 : (0, i.to)([Z.to({
							range: [0, 1],
							output: [0, -100]
						}), Z.to({
							range: [0, 1],
							output: [0, W]
						})], (e, t) => "translateY(calc(".concat(e, "% + ").concat(t, "px))"))
					},
					children: [C, (0, r.jsx)("div", {
						"aria-hidden": !ex,
						children: em ? (0, r.jsxs)("div", {
							className: D.questAcceptedContent,
							ref: t,
							children: [(0, r.jsxs)("div", {
								className: D.utils,
								children: [(0, r.jsxs)("div", {
									className: D.questAcceptedContentHeading,
									children: [(0, r.jsx)(T.Z, {
										className: D.questProgressRewardTile,
										learnMoreStyle: "icon",
										quest: K,
										questContent: v.jn.QUEST_BAR,
										location: B.dr.QUESTS_BAR,
										sourceQuestContent: v.jn.QUEST_BAR
									}), (0, r.jsxs)("div", {
										children: [(0, r.jsx)(p.X6q, {
											color: "always-white",
											variant: "heading-sm/semibold",
											children: (0, y.AV)({
												quest: K,
												taskDetails: eu,
												thirdPartyTaskDetails: null != ed ? ed : void 0
											})
										}), (0, r.jsx)(p.Text, {
											className: D.questAcceptedContentCopySubheading,
											color: "always-white",
											variant: "text-xxs/normal",
											children: ef ? I.intl.formatToPlainString(I.t.APddvL, {
												expirationDate: et
											}) : I.intl.formatToPlainString(I.t["pX+fmp"], {
												expirationDate: $
											})
										})]
									})]
								}), (0, r.jsx)(A.r, {
									onOpen: z,
									onClose: F,
									onSelect: X,
									questContent: v.jn.QUEST_BAR,
									quest: K,
									shouldShowDisclosure: !1,
									showShareLink: !0,
									sourceQuestContent: v.jn.QUEST_BAR,
									children: e => (0, r.jsx)(p.P3F, V(Q({}, e), {
										className: D.submenuWrapper,
										"aria-label": I.intl.string(I.t.DEoVWV),
										children: (0, r.jsx)(p.xhG, {
											size: "md",
											color: "currentColor",
											className: D.submenuIcon
										})
									}))
								})]
							}), ef ? (0, r.jsx)(d.zx, {
								className: a()(D.cta, D.ctaClaimReward),
								style: eg ? ej : void 0,
								color: d.zx.Colors.CUSTOM,
								fullWidth: !0,
								onClick: ei,
								size: d.zx.Sizes.NONE,
								children: I.intl.string(I.t.cfY4PD)
							}) : (0, r.jsx)(p.Text, {
								className: D.description,
								color: "always-white",
								variant: "text-xs/normal",
								children: eh
							}), (0, r.jsx)(w.Z, {
								quest: K
							}), !eb && !ep && !er && ec && (0, r.jsx)(L, {
								onClick: ex ? el : void 0
							})]
						}) : (0, r.jsxs)("div", {
							children: [(0, r.jsxs)("div", {
								className: D.questPromoContent,
								ref: t,
								children: [(0, r.jsxs)("div", {
									className: D.utils,
									children: [(0, r.jsx)(P.Z, {
										color: "always-white"
									}), (0, r.jsx)(A.r, {
										onOpen: z,
										onClose: F,
										onSelect: X,
										questContent: v.jn.QUEST_BAR,
										quest: K,
										shouldShowDisclosure: !0,
										showShareLink: !0,
										sourceQuestContent: v.jn.QUEST_BAR,
										children: e => (0, r.jsx)(p.P3F, V(Q({}, e), {
											className: D.submenuWrapper,
											"aria-label": I.intl.string(I.t.DEoVWV),
											children: (0, r.jsx)(p.xhG, {
												size: "md",
												color: "currentColor",
												className: D.submenuIcon
											})
										}))
									})]
								}), (0, r.jsxs)("div", {
									className: D.details,
									children: [(0, r.jsx)(T.Z, {
										className: D.rewardTile,
										learnMoreStyle: "text",
										quest: K,
										questContent: v.jn.QUEST_BAR,
										location: B.dr.QUESTS_BAR,
										sourceQuestContent: v.jn.QUEST_BAR
									}), (0, r.jsx)(p.X6q, {
										className: D.title,
										color: "always-white",
										variant: "heading-md/medium",
										children: I.intl.format(I.t.EQa7oq, {
											questName: K.config.messages.questName
										})
									}), (0, r.jsx)(p.Text, {
										className: D.description,
										color: "always-white",
										variant: "text-sm/normal",
										children: eh
									})]
								}), (0, r.jsx)(d.zx, {
									className: D.cta,
									style: "1232852290197655573" !== K.id ? ej : void 0,
									color: d.zx.Colors.CUSTOM,
									fullWidth: !0,
									onClick: ex ? ea : void 0,
									size: d.zx.Sizes.NONE,
									submitting: G,
									children: eo
								})]
							}), (0, r.jsx)("div", {
								className: D.heroAssetWrapper,
								style: {
									color: K.config.colors.secondary
								},
								children: en.isAnimated ? (0, r.jsx)(N.Fl, {
									id: "QuestBarContentExpanded_heroAnimated",
									children: e => {
										var t;
										return (0, r.jsx)(m.Z, {
											ref: e,
											autoPlay: !Y,
											loop: !0,
											muted: !0,
											playsInline: !0,
											className: D.heroAsset,
											controls: !1,
											children: (0, r.jsx)("source", {
												src: en.url,
												type: null != (t = en.mimetype) ? t : void 0
											})
										})
									}
								}) : (0, r.jsx)(N.Fl, {
									id: "QuestBarContentExpanded_heroStatic",
									children: e => (0, r.jsx)("img", {
										ref: e,
										alt: "",
										className: D.heroAsset,
										src: en.url
									})
								})
							})]
						})
					})]
				})
			})
		},
		623249: function(e, t, n) {
			n.d(t, {
				default: () => S,
				y: () => P
			}), n(388685);
			var r = n(255367),
				s = n(73800),
				o = n(120356),
				a = n.n(o),
				i = n(442837),
				l = n(780384),
				c = n(755721),
				u = n(481060),
				d = n(607070),
				p = n(600164),
				m = n(210887),
				f = n(617136),
				g = n(915750),
				x = n(113434),
				h = n(497505),
				b = n(918701),
				j = n(475595),
				_ = n(667105),
				v = n(981631),
				y = n(388032),
				C = n(912621),
				O = n(708901);

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

			function S(e) {
				var t;
				let {
					questId: n,
					errorHints: o,
					transitionState: S,
					onClose: P,
					sourceQuestContent: T
				} = e, N = (0, x.sf)(n);
				null == N && P();
				let [A, R] = (0, s.useState)(o), B = (0, x.KX)(), k = (0, f.O5)(), q = null == (t = (0, g.WD)()) ? void 0 : t.getId(), I = (0, i.e7)([d.Z], () => d.Z.useReducedMotion), D = (0, _.g2)({
					useReducedMotion: I,
					className: C.colorTransition
				}), Q = A.filter(e => ["xbox", "playstation"].includes(e.connected_account_type)), V = (0, b.Bz)(N), L = (0, i.e7)([m.Z], () => m.Z.getState().theme), M = (0, l.wj)(L) ? v.BRd.DARK : v.BRd.LIGHT, {
					startConsoleQuest: W,
					startingConsoleQuest: Z
				} = (0, x.GI)({
					questId: N.id,
					beforeRequest: () => {
						D.startAnimation(), k({
							questId: N.id,
							questContent: h.jn.CONNECTIONS_MODAL,
							questContentCTA: f.jZ.DEFIBRILLATOR,
							sourceQuestContent: T
						})
					},
					afterRequest: e => {
						D.stopAnimation(), R(e)
					}
				});
				return (0, r.jsxs)(u.Y0X, {
					transitionState: S,
					size: u.CgR.DYNAMIC,
					className: C.modalRoot,
					parentComponent: "QuestConsoleConnectionErrorsModal",
					children: [(0, r.jsxs)(u.xBx, {
						direction: p.Z.Direction.VERTICAL,
						separator: !1,
						className: C.modalHeader,
						children: [(0, r.jsxs)("div", {
							className: C.modalTop,
							children: [(0, r.jsx)("div", {
								className: C.iconFrame,
								children: (0, r.jsx)("img", {
									className: C.icon,
									alt: "",
									src: O
								})
							}), (0, r.jsx)(u.olH, {
								className: C.closeBtn,
								onClick: P
							})]
						}), (0, r.jsx)(u.X6q, {
							variant: "heading-xl/bold",
							children: y.intl.string(y.t.W5lmKi)
						}), (0, r.jsx)(u.Text, {
							variant: "text-sm/medium",
							color: "header-secondary",
							className: C.upperBodyText,
							children: B.message
						})]
					}), (0, r.jsxs)(u.hzk, {
						className: C.modalContent,
						children: [(0, r.jsxs)("div", {
							className: C.contentHeader,
							children: [(0, r.jsx)(u.Text, {
								variant: "eyebrow",
								color: "header-secondary",
								children: y.intl.string(y.t["+/hZMz"])
							}), (0, r.jsxs)(u.P3F, {
								className: a()(C.refreshWrapper, {
									[C.disabled]: Z
								}),
								onClick: W,
								children: [D.render(), (0, r.jsx)(u.Text, {
									variant: "text-sm/medium",
									color: "currentColor",
									className: C.colorTransition,
									children: y.intl.string(y.t.wzzjk5)
								})]
							})]
						}), (0, r.jsxs)("div", {
							className: C.accountsWrapper,
							children: [(0, r.jsx)(w, {
								icon: (0, r.jsx)(u.pzj, {
									size: "sm"
								}),
								text: y.intl.string(y.t.br3uIi)
							}), (0, r.jsx)(w, {
								icon: (0, r.jsx)(u.iWm, {
									size: "sm"
								}),
								text: y.intl.string(y.t.XF4wuL),
								errors: V ? void 0 : Q.map(e => e.message),
								gameTile: V ? (0, r.jsx)(u.ua7, {
									"aria-label": N.config.messages.gameTitle,
									text: () => (0, r.jsxs)("div", {
										className: C.tooltip,
										children: [(0, r.jsx)(u.Text, {
											variant: "text-sm/medium",
											children: N.config.messages.gameTitle
										}), (0, r.jsx)(u.Text, {
											variant: "text-xs/normal",
											color: "text-muted",
											children: y.intl.string(y.t.STpNEB)
										})]
									}),
									children: e => {
										var t, n;
										return (0, r.jsx)("img", (t = E({}, e), n = n = {
											className: C.gameTile,
											alt: N.config.messages.gameTitle,
											src: (0, j.fh)(N, j.eC.GAME_TILE, M).url
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
								}) : null
							})]
						})]
					}), (0, r.jsxs)(u.mzw, {
						className: C.footer,
						children: [(0, r.jsx)(c.zx, {
							size: c.Ph.MIN,
							onClick: P,
							className: C.footerCloseButton,
							children: y.intl.string(y.t.cpT0Cg)
						}), (0, r.jsx)(u.zxk, {
							variant: "secondary",
							text: y.intl.string(y.t["qiS+xs"]),
							onClick: () => {
								P(), (0, b.V$)({
									quest: N
								}, {
									content: h.jn.CONNECTIONS_MODAL,
									ctaContent: f.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
									impressionId: q,
									sourceQuestContent: T
								})
							}
						})]
					})]
				})
			}

			function w(e) {
				let {
					icon: t,
					text: n,
					errors: s = [],
					gameTile: o
				} = e, i = s.length > 0, l = i ? u._3e : u.B_b;
				return (0, r.jsxs)("div", {
					className: C.connectionRow,
					children: [(0, r.jsxs)("div", {
						className: a()(C.connectionRowHeader, {
							[C.connectionRowHeaderError]: i
						}),
						children: [(0, r.jsxs)("div", {
							className: C.connectionRowHeaderContent,
							children: [t, (0, r.jsx)(u.Text, {
								variant: "text-sm/medium",
								color: "text-default",
								children: n
							})]
						}), (0, r.jsxs)("div", {
							className: C.connectionRowHeaderContent,
							children: [o, (0, r.jsx)(l, {
								color: "currentColor",
								size: "sm",
								className: a()({
									[C.success]: !i,
									[C.error]: i
								})
							})]
						})]
					}), (0, r.jsx)("div", {
						className: C.errorsContainer,
						children: s.map(e => (0, r.jsxs)("div", {
							className: C.errorRow,
							children: [(0, r.jsx)(u.aNP, {
								size: "sm",
								color: "currentColor",
								className: C.error
							}), (0, r.jsx)(u.Text, {
								variant: "text-xs/medium",
								color: "text-muted",
								children: e
							})]
						}, e))
					})]
				})
			}

			function P(e) {
				(0, u.ZDy)(async () => {
					let {
						default: t
					} = await Promise.resolve().then(n.bind(n, 623249));
					return n => (0, r.jsx)(t, E({}, n, e))
				})
			}
		},
		251360: function(e, t, n) {
			n.d(t, {
				k: () => o
			});
			var r = n(73800),
				s = n(231338);
			let o = r.createContext({
				onAssetLoadComplete: s.dG
			})
		},
		642145: function(e, t, n) {
			n.d(t, {
				Y: () => r
			});
			let r = {
				tension: 250,
				friction: 20
			}
		},
		466962: function(e, t, n) {
			n.d(t, {
				t: () => r
			});
			let r = n(73800).createContext(null)
		},
		19148: function(e, t, n) {
			n.d(t, {
				E: () => i
			});
			var r = n(255367),
				s = n(120356),
				o = n.n(s),
				a = n(701642);

			function i(e) {
				let {
					width: t,
					height: n,
					showPlaceholder: s,
					children: i,
					className: l
				} = e;
				return s ? (0, r.jsx)("div", {
					className: o()(a.placeholderElement, l),
					style: {
						width: t,
						height: n
					}
				}) : i
			}
		},
		415104: function(e, t, n) {
			n.d(t, {
				Z: () => _
			}), n(388685);
			var r = n(255367),
				s = n(73800),
				o = n(120356),
				a = n.n(o),
				i = n(617136),
				l = n(113434),
				c = n(497505),
				u = n(918701),
				d = n(602667),
				p = n(341907),
				m = n(672188),
				f = n(466962),
				g = n(439826),
				x = n(43779),
				h = n(981631),
				b = n(168989);

			function j(e) {
				var t, n;
				let {
					quest: o,
					className: c,
					questContent: d,
					contentPosition: j,
					rowIndex: _,
					impressionRef: v,
					sourceQuestContent: y
				} = e, [C, O] = s.useState(!1), [E, S] = s.useState([]), w = (0, l.qb)(o), P = s.useMemo(() => (0, u.q8)(o), [o]), T = (0, i._F)(), N = s.useCallback(() => {
					O(!0), T({
						questId: o.id,
						event: h.rMx.QUEST_HOVER,
						properties: (0, i.mH)(d),
						sourceQuestContent: y
					}), P && (0, p.loadVideoQuestModal)()
				}, [T, o.id, d, P, y]), A = s.useCallback(() => {
					O(!1), T({
						questId: o.id,
						event: h.rMx.QUEST_HOVER_OFF,
						properties: (0, i.mH)(d),
						sourceQuestContent: y
					})
				}, [T, o.id, d, y]), R = s.useContext(f.t), {
					visibilityElementRef: B,
					almostVisibleInViewport: k
				} = function(e) {
					let [t, n] = s.useState(!1), r = s.useCallback(e => {
						e.isIntersecting && n(!0)
					}, []);
					return {
						visibilityElementRef: (0, m.S)(r, {
							root: null != e ? e : null,
							threshold: 0,
							rootMargin: "900px 0px 900px 0px"
						}, !0),
						almostVisibleInViewport: t
					}
				}(null != (n = null == R || null == (t = R.current) ? void 0 : t.getScrollerNode()) ? n : null);
				return (0, r.jsxs)("div", {
					id: "quest-tile-".concat(o.id),
					ref: e => {
						v.current = e, B.current = e
					},
					className: a()(b.container, c),
					onMouseEnter: N,
					onMouseLeave: A,
					onFocus: N,
					onBlur: A,
					children: [(0, r.jsx)(g.Z, {
						quest: o,
						isHovering: C,
						errorHints: E,
						warningHints: w,
						isVisibleInViewport: k,
						sourceQuestContent: y
					}), (0, r.jsx)(x.Z, {
						quest: o,
						questContent: d,
						isHovering: C,
						contentPosition: j,
						rowIndex: _,
						onReceiveErrorHints: S,
						isVisibleInViewport: k,
						sourceQuestContent: y
					})]
				})
			}

			function _(e) {
				return (0, r.jsx)(d.A, {
					questOrQuests: e.quest,
					questContent: e.questContent,
					questContentPosition: e.contentPosition,
					questContentRowIndex: e.rowIndex,
					trackGuildAndChannelMetadata: e.questContent === c.jn.QUESTS_EMBED,
					sourceQuestContent: e.sourceQuestContent,
					children: t => {
						var n, s;
						return (0, r.jsx)(j, (n = function(e) {
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
							impressionRef: t
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var r = Object.getOwnPropertySymbols(e);
								n.push.apply(n, r)
							}
							return n
						})(Object(s)).forEach(function(e) {
							Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(s, e))
						}), n))
					}
				})
			}
		},
		439826: function(e, t, n) {
			n.d(t, {
				Z: () => D
			}), n(784620), n(973216);
			var r = n(255367),
				s = n(73800),
				o = n(120356),
				a = n.n(o),
				i = n(108542),
				l = n(780384),
				c = n(755721),
				u = n(481060),
				d = n(393238),
				p = n(410030),
				m = n(44315),
				f = n(617136),
				g = n(272008),
				x = n(113434),
				h = n(497505),
				b = n(918701),
				j = n(974390),
				_ = n(475595),
				v = n(18578),
				y = n(623249),
				C = n(685613),
				O = n(670638),
				E = n(341907),
				S = n(251360),
				w = n(19148),
				P = n(46140),
				T = n(642145),
				N = n(981631),
				A = n(388032),
				R = n(508936);

			function B(e) {
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

			function k(e, t) {
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

			function q(e) {
				var t;
				let {
					quest: n,
					errorHints: o,
					warningHints: a,
					isDarkTheme: l,
					sourceQuestContent: p
				} = e, {
					ref: f,
					height: g = 0
				} = (0, d.ZP)([o]), h = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null, b = (0, x.z)(n), {
					type: j,
					hints: _
				} = s.useMemo(() => h || b ? {
					type: 2,
					hints: []
				} : o.length > 0 ? {
					type: 0,
					hints: o.map(e => e.message)
				} : a.length > 0 ? {
					type: 1,
					hints: a
				} : {
					type: 2,
					hints: []
				}, [o, h, b, a]), v = 2 !== j, C = (0, u.q_F)({
					opacity: +!!v,
					height: v ? g : 0,
					config: T.Y
				}), O = 0 === j ? u.P4T : u.d3s, E = (0, m.Lq)(N.Ilk.RED_345), S = 0 === j ? E : l ? u.TVs.colors.TEXT_DEFAULT : u.TVs.colors.WHITE;
				return (0, r.jsx)(i.animated.div, {
					style: C,
					children: (0, r.jsxs)("div", {
						ref: f,
						className: R.hints,
						children: [(0, r.jsxs)("div", {
							className: R.hintsContainer,
							children: [(0, r.jsx)(O, {
								size: "xs",
								color: S
							}), (0, r.jsx)(u.Text, {
								variant: "text-xs/medium",
								color: l ? "text-muted" : "always-white",
								children: _.at(0)
							})]
						}), 0 === j && (0, r.jsx)(c.zx, {
							onClick: () => (0, y.y)({
								questId: n.id,
								errorHints: o,
								sourceQuestContent: p
							}),
							size: c.Ph.MIN,
							look: c.iL.LINK,
							color: c.Tt.CUSTOM,
							style: {
								color: (0, m.Lq)(N.Ilk.BLUE_345)
							},
							children: "See Details"
						})]
					})
				})
			}

			function I(e) {
				let {
					quest: t,
					isHovering: n,
					showAssets: o
				} = e, a = s.useMemo(() => (0, _.fh)(t, _.eC.HERO_IMAGE), [t]), i = s.useMemo(() => (0, _.fh)(t, _.eC.HERO_VIDEO), [t]), l = (0, j.h)(t, P.dr.QUEST_HOME_DESKTOP), {
					onAssetLoadComplete: c
				} = s.useContext(S.k);
				return (0, r.jsx)("div", {
					className: R.heroAssetCont,
					children: o && (0, r.jsx)(v.K, {
						imageAsset: null != a ? {
							asset: a,
							assetId: "QuestTileBanner",
							alt: A.intl.string(A.t.jnijW1),
							className: R.heroAsset
						} : void 0,
						videoAsset: null != i ? {
							asset: i,
							assetId: "QuestTileBanner_heroAnimated",
							className: R.heroAssetVideo
						} : void 0,
						videoActive: !l && n,
						imageDimensions: {
							width: 1320,
							height: 370
						},
						onLoadComplete: c
					})
				})
			}

			function D(e) {
				var t, n, o, i, c;
				let {
					quest: d,
					isHovering: m,
					errorHints: j,
					warningHints: _,
					isVisibleInViewport: v,
					onCtxMenuClose: y,
					onCtxMenuOpen: P,
					onCtxMenuSelect: T,
					sourceQuestContent: D
				} = e, Q = (0, b.PB)(d), V = (0, p.ZP)(), L = ((0, l.wj)(V) ? N.BRd.DARK : N.BRd.LIGHT) === N.BRd.DARK, M = (0, x.tP)(d), W = (null == (t = d.userStatus) ? void 0 : t.claimedAt) != null, Z = (0, x.B6)(d.config.expiresAt, {
					month: "numeric",
					day: "numeric"
				}), U = (null == (n = d.userStatus) ? void 0 : n.enrolledAt) != null, H = (null == (o = d.userStatus) ? void 0 : o.completedAt) != null, {
					onAssetLoadComplete: z
				} = s.useContext(S.k), F = s.useCallback(() => {
					Q && ((0, b.zi)(d) || U || (0, g.AH)(d.id, {
						questContent: h.jn.QUEST_HOME_DESKTOP,
						questContentCTA: f.jZ.ACCEPT_QUEST,
						sourceQuestContent: D
					}), (0, E.openVideoQuestModal)({
						quest: d,
						sourceQuestContent: h.jn.QUEST_HOME_DESKTOP
					}))
				}, [Q, d, U, D]);
				return (0, r.jsxs)("div", {
					className: R.container,
					children: [(0, r.jsx)("div", {
						className: R.heroAssetWrapper,
						children: (0, r.jsx)(I, {
							quest: d,
							isHovering: m,
							showAssets: v
						})
					}), (0, r.jsx)("div", {
						className: a()(R.overlay, {
							[R.darkThemeGradient]: L,
							[R.lightThemeGradient]: !L
						})
					}), (0, r.jsxs)("div", {
						className: R.positionContentOverBackground,
						children: [(0, r.jsxs)("div", {
							className: R.contents,
							children: [(0, r.jsxs)("div", {
								className: R.topRow,
								children: [d.preview && (0, r.jsx)("div", {
									className: R.pill,
									children: (0, r.jsx)(u.Text, {
										variant: "eyebrow",
										color: "always-white",
										className: R.eyebrowText,
										children: A.intl.string(A.t.SKNnqq)
									})
								}), Q && (0, r.jsx)(u.ua7, {
									text: H ? A.intl.string(A.t.YsCuyM) : U ? A.intl.string(A.t["74Kqra"]) : (0, b.zi)(d) ? A.intl.string(A.t["I6JG4+"]) : A.intl.string(A.t.umdNio),
									children: e => (0, r.jsx)(u.P3F, k(B({}, e), {
										className: R.utilButtonWrapper,
										"aria-label": A.intl.string(A.t.RscU7O),
										onClick: F,
										children: (0, r.jsx)(u.o1U, {
											color: "currentColor",
											className: R.utilButtonIcon
										})
									}))
								}), (0, r.jsx)(O.r, {
									onOpen: P,
									onClose: y,
									onSelect: T,
									questContent: h.jn.QUEST_HOME_DESKTOP,
									quest: d,
									hideLearnMore: !0,
									shouldShowDisclosure: !0,
									showShareLink: !0,
									sourceQuestContent: D,
									children: e => (0, r.jsx)(u.P3F, k(B({}, e), {
										className: R.utilButtonWrapper,
										"aria-label": A.intl.string(A.t.DEoVWV),
										children: (0, r.jsx)(u.xhG, {
											size: "md",
											color: "currentColor",
											className: R.utilButtonIcon
										})
									}))
								})]
							}), (0, r.jsx)(w.E, {
								showPlaceholder: !v,
								width: 100,
								height: 30,
								className: R.partnerBranding,
								children: (0, r.jsx)(C.ZP, {
									className: R.partnerBranding,
									logotypeClassName: R.partnerLogotypes,
									quest: d,
									separatorSpacing: C.US.MEDIUM,
									withGameTile: !1,
									onLoadComplete: z
								})
							}), (0, r.jsxs)("div", {
								className: R.bottomRow,
								children: [(0, r.jsx)(u.Text, {
									variant: "text-sm/medium",
									color: L ? "text-muted" : "always-white",
									children: A.intl.format(A.t.buEvBw, {
										brandName: null != (c = null == (i = d.config.cosponsorMetadata) ? void 0 : i.name) ? c : d.config.messages.gamePublisher
									})
								}), M || W ? null : (0, r.jsx)(u.Text, {
									variant: "text-sm/medium",
									color: L ? "text-muted" : "always-white",
									children: A.intl.format(A.t["7D8r4O"], {
										expiryDate: Z
									})
								})]
							})]
						}), (0, r.jsx)(q, {
							quest: d,
							errorHints: j,
							warningHints: _,
							isDarkTheme: L,
							sourceQuestContent: D
						})]
					})]
				})
			}
		},
		69439: function(e, t, n) {
			n.d(t, {
				Z: () => O
			}), n(388685);
			var r = n(255367),
				s = n(73800),
				o = n(120356),
				a = n.n(o),
				i = n(442837),
				l = n(755721),
				c = n(481060),
				u = n(607070),
				d = n(617136),
				p = n(113434),
				m = n(569984),
				f = n(497505),
				g = n(918701),
				x = n(667105),
				h = n(341907),
				b = n(284851),
				j = n(46140),
				_ = n(388032),
				v = n(142468);
			let y = [{
				value: j.cd.DESKTOP,
				get label() {
					return _.intl.string(_.t.QXc019)
				}
			}, {
				value: j.cd.CONSOLE,
				get label() {
					return _.intl.string(_.t["8lAfuL"])
				}
			}];

			function C(e) {
				let t, n, {
					value: s
				} = e;
				switch (s) {
					case j.cd.DESKTOP:
						n = (0, r.jsx)(c.pzj, {}), t = _.intl.string(_.t.QXc019);
						break;
					case j.cd.CONSOLE:
						n = (0, r.jsx)(c.iWm, {}), t = _.intl.string(_.t["8lAfuL"]);
						break;
					default:
						return null
				}
				return (0, r.jsxs)("div", {
					className: v.platformSelectorPrimaryLabel,
					children: [n, t]
				})
			}

			function O(e) {
				var t, n, o, O;
				let {
					quest: E,
					questContent: S,
					onReceiveErrorHints: w,
					contentPosition: P,
					rowIndex: T,
					sourceQuestContent: N
				} = e, A = (0, i.e7)([u.Z], () => u.Z.useReducedMotion), R = (0, x.g2)({
					useReducedMotion: A
				}), B = (0, d.O5)(), k = (0, p._s)({
					quest: E
				}), q = (0, p.z)(E), I = (0, p.B6)(E.config.expiresAt, {
					month: "numeric",
					day: "numeric"
				}), {
					isClaiming: D,
					isEnrolling: Q,
					isQuestEnrollmentBlocked: V
				} = (0, i.cj)([m.Z], () => ({
					isClaiming: m.Z.isClaimingReward(E.id) || m.Z.isFetchingRewardCode(E.id),
					isEnrolling: m.Z.isEnrolling(E.id),
					isQuestEnrollmentBlocked: null != m.Z.questEnrollmentBlockedUntil
				})), L = (null == (t = E.userStatus) ? void 0 : t.enrolledAt) != null, M = (null == (n = E.userStatus) ? void 0 : n.completedAt) != null, W = M && (null == (o = E.userStatus) ? void 0 : o.claimedAt) == null, Z = (0, g.iQ)(E), U = !(0, g.zi)(E), H = (0, p._Q)(E), z = (0, g.Xv)(E.config), F = (0, g.PB)(E), X = (0, g.HJ)(E), K = (0, g.Vl)(E), Y = s.useRef(null), G = (0, p.Rf)(E), [J, $, ee] = (0, p.me)(E, G), et = U && H === p.OH.ACCEPTED, en = et && J === f.LI.SELECT, er = et && !en && $.length > 1, es = s.useCallback(e => {
					ee(e), e === j.cd.DESKTOP && w([])
				}, [ee, w]), {
					text: eo,
					onClick: ea
				} = (0, x.Ks)({
					progressState: H,
					quest: E,
					questContent: S,
					isCollectibleQuest: z,
					questContentPosition: P,
					questContentRowIndex: T,
					inGiftInventory: !0,
					isVideoQuest: F,
					inGameQuest: K,
					sourceQuestContent: N
				}), {
					startingConsoleQuest: ei,
					startConsoleQuest: el
				} = (0, p.GI)({
					questId: E.id,
					beforeRequest: () => {
						R.startAnimation(), B({
							questId: E.id,
							questContent: S,
							questContentCTA: d.jZ.DEFIBRILLATOR,
							questContentPosition: P,
							questContentRowIndex: T,
							sourceQuestContent: N
						})
					},
					afterRequest: e => {
						R.stopAnimation(), w(e)
					}
				}), ec = (null == (O = E.userStatus) ? void 0 : O.claimedAt) != null, eu = null;
				return (Z && W ? eu = (0, r.jsx)(l.zx, {
					color: l.Tt.BRAND,
					submitting: D,
					onClick: null != ea ? ea : void 0,
					className: v.button,
					children: eo
				}) : M ? eu = F ? (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)(l.zx, {
						color: l.Tt.PRIMARY,
						className: v.button,
						style: {
							flex: 1
						},
						onClick: () => {
							(0, h.openVideoQuestModal)({
								quest: E,
								sourceQuestContent: N
							})
						},
						children: (0, r.jsxs)("div", {
							className: v.ctaInner,
							children: [(0, r.jsx)(c.Oe7, {
								className: v.videoQuestPlayIcon
							}), (0, r.jsx)("span", {
								children: _.intl.string(_.t.YsCuyM)
							})]
						})
					}), (0, r.jsx)(l.zx, {
						color: l.Tt.BRAND,
						className: v.button,
						onClick: null != ea ? ea : void 0,
						children: eo
					})]
				}) : (0, r.jsx)(l.zx, {
					color: l.Tt.BRAND,
					className: v.button,
					onClick: null != ea ? ea : void 0,
					children: eo
				}) : U ? U && W ? eu = (0, r.jsx)(l.zx, {
					color: l.Tt.BRAND,
					submitting: D,
					onClick: null != ea ? ea : void 0,
					className: v.button,
					children: eo
				}) : X ? eu = (0, r.jsx)(l.zx, {
					color: l.Tt.PRIMARY,
					disabled: !0,
					className: v.button,
					children: _.intl.string(_.t.BkZhUF)
				}) : U && L && !ec ? eu = en ? (0, r.jsx)(c.PhF, {
					className: v.platformSelectorPrimary,
					isSelected: () => !1,
					options: y,
					placeholder: _.intl.string(_.t.drVw4e),
					renderOptionLabel: C,
					select: es,
					serialize: e => {
						switch (e) {
							case j.cd.DESKTOP:
								return _.intl.string(_.t.QXc019);
							case j.cd.CONSOLE:
								return _.intl.string(_.t["8lAfuL"])
						}
					}
				}) : (0, g.$J)(E) && !q && J !== f.LI.DESKTOP ? k ? (0, r.jsx)(l.zx, {
					color: l.Tt.PRIMARY,
					className: v.button,
					onClick: null != ea ? ea : void 0,
					children: eo
				}) : (0, r.jsx)(l.zx, {
					color: l.Tt.PRIMARY,
					onClick: el,
					disabled: ei,
					className: v.button,
					children: (0, r.jsxs)("div", {
						className: v.ctaInner,
						children: [R.render(), _.intl.string(_.t.nPThNT)]
					})
				}) : F || K && E.config.features.includes(j.S7.START_QUEST_CTA) ? (0, r.jsx)(l.zx, {
					color: l.Tt.BRAND,
					onClick: null != ea ? ea : void 0,
					className: v.button,
					children: eo
				}) : (0, r.jsx)(l.zx, {
					color: l.Tt.PRIMARY,
					disabled: !0,
					className: v.button,
					children: _.intl.string(_.t["9KoPyM"])
				}) : U && !L && (eu = V ? (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)(l.zx, {
						color: l.Tt.PRIMARY,
						className: v.button,
						disabled: !0,
						children: _.intl.string(_.t.V293qq)
					}), (0, r.jsx)(l.zx, {
						color: l.Tt.BRAND,
						className: v.button,
						onClick: () => (0, h.openQuestMinorEnrollmentBlockModal)(E, S, N),
						children: _.intl.string(_.t.vY9GgI)
					})]
				}) : (0, r.jsx)(l.zx, {
					submitting: Q,
					color: l.Tt.BRAND,
					onClick: null != ea ? ea : void 0,
					className: v.button,
					children: eo
				})) : eu = (0, r.jsx)(l.zx, {
					color: l.Tt.PRIMARY,
					disabled: !0,
					className: v.button,
					children: _.intl.format(_.t["14o6QU"], {
						expiryDate: I
					})
				}), null == eu) ? null : (0, r.jsxs)("div", {
					className: v.container,
					children: [eu, er && (0, r.jsx)(b.U, {
						popoutTargetRef: Y,
						onSelect: es,
						quest: E,
						questContent: f.jn.ACTIVITY_PANEL,
						children: e => {
							var t, n;
							return (0, r.jsx)(l.zx, (t = function(e) {
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
								buttonRef: Y,
								className: a()(v.button, v.platformSelectorSecondary),
								color: l.Tt.PRIMARY
							}, e), n = n = {
								children: (0, r.jsxs)("div", {
									className: v.platformSelectorSecondaryContent,
									children: [function(e) {
										switch (e) {
											case f.LI.DESKTOP:
												return (0, r.jsx)(c.pzj, {
													color: "currentColor"
												});
											case f.LI.CONSOLE:
												return (0, r.jsx)(c.iWm, {
													color: "currentColor"
												});
											default:
												return null
										}
									}(J), (0, r.jsx)(c.CJ0, {
										className: v.platformSelectorSecondaryChevron,
										color: "currentColor"
									})]
								})
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
					})]
				})
			}
		},
		43779: function(e, t, n) {
			n.d(t, {
				Z: () => S
			}), n(953529);
			var r = n(255367),
				s = n(73800),
				o = n(120356),
				a = n.n(o),
				i = n(108542),
				l = n(442837),
				c = n(481060),
				u = n(393238),
				d = n(607070),
				p = n(960919),
				m = n(113434),
				f = n(918701),
				g = n(566078),
				x = n(472144),
				h = n(644646),
				b = n(251360),
				j = n(19148),
				_ = n(69439),
				v = n(46140),
				y = n(642145),
				C = n(388032),
				O = n(882067);
			let E = async () => await n.e("67963").then(n.t.bind(n, 145193, 19));

			function S(e) {
				var t, n, o, S, P;
				let {
					quest: T,
					questContent: N,
					isHovering: A,
					contentPosition: R,
					rowIndex: B,
					isVisibleInViewport: k,
					onReceiveErrorHints: q,
					sourceQuestContent: I
				} = e, D = s.useMemo(() => g.r.build(T.config), [T.config]), Q = D.defaultRewardName, V = D.defaultRewardNameWithArticle, L = (null == (t = T.userStatus) ? void 0 : t.enrolledAt) != null, {
					ref: M,
					scrollHeight: W
				} = (0, u.kE)(), Z = 104 !== W, {
					onAssetLoadComplete: U
				} = s.useContext(b.k), {
					expansionSpring: H
				} = (0, c.q_F)({
					expansionSpring: +!!A,
					config: (S = function(e) {
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
					}({}, y.Y), P = P = {
						clamp: !0
					}, Object.getOwnPropertyDescriptors ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(P)) : (function(e, t) {
						var n = Object.keys(e);
						if (Object.getOwnPropertySymbols) {
							var r = Object.getOwnPropertySymbols(e);
							n.push.apply(n, r)
						}
						return n
					})(Object(P)).forEach(function(e) {
						Object.defineProperty(S, e, Object.getOwnPropertyDescriptor(P, e))
					}), S)
				}), z = (null == (n = T.userStatus) ? void 0 : n.completedAt) != null, F = (null == (o = T.userStatus) ? void 0 : o.claimedAt) != null, X = (0, f.xN)(T.config), K = (0, f.LM)(T.config), {
					completedRatio: Y,
					completedRatioDisplay: G
				} = (0, m.I)(T), J = (0, m.Bd)(T, I), $ = s.useMemo(() => F && X ? C.intl.format(C.t["8Op4c3"], {
					balanceHook: () => (0, r.jsxs)(w, {
						questId: T.id,
						children: [(0, r.jsx)(p.Z, {
							shouldUseThemeColor: !0,
							className: O.orbsBalanceIcon
						}), K]
					})
				}) : F ? (0, r.jsx)(w, {
					questId: T.id,
					children: Q
				}) : X ? C.intl.format(C.t.ro1szc, {
					balanceHook: () => (0, r.jsxs)(w, {
						questId: T.id,
						children: [(0, r.jsx)(p.Z, {
							shouldUseThemeColor: !0,
							className: O.orbsBalanceIcon
						}), K]
					})
				}) : C.intl.format(C.t["0IUT4e"], {
					rewardWithArticleHook: () => (0, r.jsx)(w, {
						questId: T.id,
						children: V
					})
				}), [Q, F, V, T.id, K, X]), ee = s.useMemo(() => {
					if (null != J) return (0, r.jsx)(c.Text, {
						variant: "text-sm/medium",
						color: "text-muted",
						className: O.description,
						children: J
					})
				}, [J]), et = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
				return (0, r.jsxs)("div", {
					className: O.container,
					children: [(0, r.jsxs)(i.animated.div, {
						style: {
							maxHeight: H.to([0, 1], [104, (null != W ? W : 0) + 12])
						},
						className: O.rewardDescriptionContainer,
						children: [(0, r.jsx)(j.E, {
							showPlaceholder: !k,
							width: 80,
							height: 80,
							children: (0, r.jsxs)("div", {
								className: O.assetWrapper,
								children: [!F && z && (0, r.jsx)("div", {
									className: O.completionAnimation
								}), L && !F ? (0, r.jsxs)("div", {
									className: O.progressWrapper,
									children: [z && (0, r.jsx)(c.Fmz, {
										importData: E,
										className: O.confetti,
										loop: !1,
										autoplay: !1,
										shouldAnimate: !et
									}), (0, r.jsx)(x.Z, {
										quest: T,
										size: 76,
										percentComplete: Y,
										percentCompleteText: A && !(0, f.zi)(T) ? G : void 0,
										children: (0, r.jsx)("div", {
											className: O.circularRewardTileWrapper,
											children: (0, r.jsx)(h.Z, {
												quest: T,
												questContent: N,
												className: O.circularQuestRewardTileAsset,
												location: v.dr.QUEST_HOME_DESKTOP,
												autoplay: A,
												onLoadComplete: U,
												lazyLoad: !0,
												sourceQuestContent: I
											})
										})
									})]
								}) : (0, r.jsx)(h.Z, {
									quest: T,
									autoplay: A,
									questContent: N,
									className: O.questRewardTileAsset,
									location: v.dr.QUEST_HOME_DESKTOP,
									onLoadComplete: U,
									lazyLoad: !0,
									sourceQuestContent: I
								})]
							})
						}), (0, r.jsxs)("div", {
							ref: M,
							className: a()(O.textContainer, {
								[O.justifyCenter]: !Z
							}),
							children: [(0, r.jsx)(c.X6q, {
								variant: "eyebrow",
								color: "text-brand",
								className: O.questName,
								children: C.intl.format(C.t.EAYZAg, {
									questName: T.config.messages.questName
								})
							}), (0, r.jsx)(c.Text, {
								variant: "text-md/semibold",
								color: "header-primary",
								className: O.header,
								children: $
							}), ee]
						}), Z && (0, r.jsx)(i.animated.div, {
							style: {
								opacity: H.to([0, 1], [1, 0])
							},
							className: O.textOverflowBlur
						})]
					}), (0, r.jsx)(_.Z, {
						quest: T,
						questContent: N,
						contentPosition: R,
						rowIndex: B,
						onReceiveErrorHints: q,
						sourceQuestContent: I
					})]
				})
			}
			let w = s.memo(function(e) {
				let {
					questId: t,
					children: n
				} = e;
				return (0, r.jsx)(c.Text, {
					variant: "text-md/semibold",
					color: "header-primary",
					tag: "span",
					className: O.header,
					children: n
				}, "".concat(t, "_reward"))
			})
		},
		284851: function(e, t, n) {
			n.d(t, {
				U: () => l
			});
			var r = n(255367);
			n(73800);
			var s = n(481060),
				o = n(46140),
				a = n(388032);

			function i(e) {
				let {
					onClose: t,
					onSelect: n,
					quest: i
				} = e;
				return (0, r.jsx)(s.v2r, {
					variant: "fixed",
					onSelect: t,
					navId: "quest-home-platform-select-".concat(i.id),
					"aria-label": a.intl.string(a.t.ogxXGh),
					onClose: t,
					children: (0, r.jsxs)(s.kSQ, {
						children: [(0, r.jsx)(s.sNh, {
							id: "desktop",
							label: a.intl.string(a.t.QXc019),
							action: () => n(o.cd.DESKTOP),
							icon: s.pzj
						}), (0, r.jsx)(s.sNh, {
							id: "console",
							label: a.intl.string(a.t["8lAfuL"]),
							action: () => n(o.cd.CONSOLE),
							icon: s.iWm
						})]
					}, "actions")
				})
			}

			function l(e) {
				let {
					children: t
				} = e, n = function(e, t) {
					if (null == e) return {};
					var n, r, s = function(e, t) {
						if (null == e) return {};
						var n, r, s = {},
							o = Object.keys(e);
						for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (s[n] = e[n]);
						return s
					}(e, t);
					if (Object.getOwnPropertySymbols) {
						var o = Object.getOwnPropertySymbols(e);
						for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
					}
					return s
				}(e, ["children"]);
				return (0, r.jsx)(s.yRy, {
					targetElementRef: e.popoutTargetRef,
					position: "bottom",
					align: "right",
					renderPopout: e => {
						var t, s;
						let {
							closePopout: o
						} = e;
						return (0, r.jsx)(i, (t = function(e) {
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
						}({}, n), s = s = {
							onClose: o
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var r = Object.getOwnPropertySymbols(e);
								n.push.apply(n, r)
							}
							return n
						})(Object(s)).forEach(function(e) {
							Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(s, e))
						}), t))
					},
					children: t
				})
			}
		},
		478977: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r = n(255367),
				s = n(73800),
				o = n(866442),
				a = n(481060),
				i = n(409667);

			function l(e) {
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

			function c(e, t) {
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
			let u = function(e) {
				let {
					colorKey: t,
					value: n,
					onChange: u,
					title: d
				} = e, p = s.useRef(null);
				return (0, r.jsxs)(a.xJW, {
					children: [(0, r.jsx)(a.vwX, {
						tag: a.RB0.H5,
						children: d
					}), (0, r.jsx)(a.yRy, {
						targetElementRef: p,
						renderPopout: e => (0, r.jsx)(a.Z$W, c(l({}, e), {
							value: n,
							onChange: e => u(t, (0, o.Rf)(e))
						})),
						children: e => (0, r.jsx)(a.P3F, c(l({}, e), {
							innerRef: p,
							tag: "span",
							"aria-label": "Select a color",
							className: i.swatchContainer,
							style: {
								backgroundColor: n
							},
							children: (0, r.jsx)(a.ilE, {
								size: "xs",
								color: "currentColor",
								className: i.swatchIcon
							})
						}))
					})]
				})
			}
		},
		456799: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			var r = n(255367);
			n(73800);
			var s = n(120356),
				o = n.n(s),
				a = n(481060),
				i = n(409667);
			let l = function(e) {
				let {
					allowClicks: t = !1,
					children: n,
					withBorder: s = !1
				} = e;
				return (0, r.jsx)(a.Rny, {
					children: (0, r.jsx)(a.Zbd, {
						className: o()(i.componentPreviewWrapper, {
							[i.componentPreviewWrapperBordered]: s
						}),
						outline: s,
						children: (0, r.jsx)("div", {
							className: i.componentPreview,
							onClickCapture: t ? void 0 : function(e) {
								e.stopPropagation()
							},
							children: n
						})
					})
				})
			}
		},
		210851: function(e, t, n) {
			n.d(t, {
				Z: () => l
			}), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
			var r = n(255367),
				s = n(73800),
				o = n(481060),
				a = n(763610),
				i = n(409667);
			let l = function(e) {
				var t, n;
				let {
					assetKey: l,
					filters: c,
					initialValue: u,
					onFileChange: d,
					title: p
				} = e, [m, f] = s.useState(null), g = s.useRef(null);
				return s.useEffect(() => () => {
					null != g.current && URL.revokeObjectURL(g.current)
				}, []), (0, r.jsxs)(o.xJW, {
					children: [(0, r.jsx)(o.vwX, {
						tag: o.RB0.H5,
						children: (0, r.jsxs)("div", {
							className: i.headingWithTooltip,
							children: [p, (0, r.jsx)(o.ua7, {
								text: "Supported asset formats: ".concat(c.join(", ")),
								children: e => (0, r.jsx)(o.d3s, function(e) {
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
									size: "xs"
								}, e))
							})]
						})
					}), (0, r.jsx)(a.Z, {
						filename: null != (n = null != (t = null == m ? void 0 : m.name) ? t : u) ? n : "",
						filters: [{
							name: p,
							extensions: c
						}],
						buttonText: "Browse",
						placeholder: "Select an asset",
						onFileSelect: function(e) {
							if (f(null != e ? e : null), null == e) return;
							let t = URL.createObjectURL(e);
							g.current = t;
							let n = new URL(t);
							n.searchParams.append("mimetype", e.type), n.searchParams.append("name", e.name), d(l, n.toString())
						}
					})]
				})
			}
		},
		602683: function(e, t, n) {
			n.d(t, {
				Z: () => a
			}), n(388685);
			var r = n(255367),
				s = n(73800),
				o = n(481060);
			let a = function(e) {
				let {
					assetKey: t,
					initialValue: n,
					onMessageChange: a,
					title: i
				} = e, [l, c] = s.useState("");
				return s.useEffect(() => {
					c(null != n ? n : "")
				}, [n]), (0, r.jsxs)(o.xJW, {
					children: [(0, r.jsx)(o.vwX, {
						tag: o.RB0.H5,
						children: i
					}), (0, r.jsx)(o.R94, {
						children: (0, r.jsx)(o.oil, {
							value: l,
							onChange: function(e) {
								c(e), a(t, e)
							}
						})
					})]
				})
			}
		},
		916028: function(e, t, n) {
			n.d(t, {
				Z: () => a
			}), n(388685);
			var r = n(255367);
			n(73800);
			var s = n(481060),
				o = n(113434);
			let a = function(e) {
				let {
					onSelect: t,
					quest: n
				} = e, {
					quests: a
				} = (0, o.J2)({
					fetchPolicy: "cache-and-network"
				}), i = [{
					label: "NONE",
					value: null
				}, ...a.map(e => ({
					label: e.config.messages.questName,
					value: e
				}))];
				return (0, r.jsxs)(s.xJW, {
					children: [(0, r.jsx)(s.vwX, {
						tag: s.RB0.H5,
						children: "Prefill with Quest"
					}), (0, r.jsx)(s.R94, {
						children: (0, r.jsx)(s.PhF, {
							"aria-label": "Prefill Quest",
							options: i,
							isSelected: e => (null == e ? void 0 : e.id) === (null == n ? void 0 : n.id),
							select: t,
							serialize: String
						})
					})]
				})
			}
		},
		652380: function(e, t, n) {
			n.d(t, {
				Z: () => H,
				b: () => V
			}), n(388685), n(314940);
			var r = n(255367),
				s = n(73800),
				o = n(512722),
				a = n.n(o),
				i = n(278074),
				l = n(754700),
				c = n(887003),
				u = n(458708),
				d = n(481060),
				p = n(70956),
				m = n(497505),
				f = n(918701),
				g = n(210724),
				x = n(130653),
				h = n(415104),
				b = n(78826),
				j = n(37303),
				_ = n(134483),
				v = n(683650),
				y = n(920916),
				C = n(341907),
				O = n(478977),
				E = n(456799),
				S = n(210851),
				w = n(602683),
				P = n(916028),
				T = n(749912),
				N = n(815183),
				A = n(899457),
				R = n(409667);

			function B(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function k(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						r = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), r.forEach(function(t) {
						B(e, t, n[t])
					})
				}
				return e
			}

			function q(e, t) {
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
			let I = ["png", "gif", "webp"],
				D = [...I, "jpg", "jpeg"],
				Q = Array.from(new Set([...D, "gif", "mp4", "webm"]));

			function V(e) {
				var t, n;
				return {
					code: "PREVIEW-MODE-CODE",
					tier: 0,
					platform: m.y$.CROSS_PLATFORM,
					userId: "123",
					questId: e.id,
					claimedAt: null != (n = null == (t = e.userStatus) ? void 0 : t.claimedAt) ? n : ""
				}
			}

			function L() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					{
						streamProgressSeconds: t = 0,
						completedAt: n = null,
						enrolledAt: r = null,
						claimedAt: s = null
					} = e;
				return {
					userId: "123",
					questId: "1193992107035983872",
					enrolledAt: r,
					completedAt: n,
					claimedAt: s,
					claimedTier: null,
					lastStreamHeartbeatAt: null,
					streamProgressSeconds: t,
					dismissedQuestContent: 0,
					progress: {}
				}
			}
			let M = "1193992107035983872",
				W = {
					id: M,
					preview: !0,
					config: {
						id: M,
						configVersion: 2,
						startsAt: "2024-01-01T00:00:00+00:00",
						expiresAt: "2030-01-01T00:00:00+00:00",
						application: {
							link: "https://discord.com/",
							id: "123",
							name: "Sky Runners"
						},
						messages: {
							questName: "Sky Runners",
							gameTitle: "Sky Runners",
							gamePublisher: "Discord"
						},
						colors: {
							primary: "#B377F3",
							secondary: "#5865F2"
						},
						rewardsConfig: {
							assignmentMethod: 1,
							rewards: [{
								skuId: "",
								asset: "reward.png",
								assetVideo: null,
								type: c.w.REWARD_CODE,
								messages: {
									name: "Orange Buddy Jetpack",
									nameWithArticle: "an Orange Buddy Jetpack",
									redemptionInstructionsByPlatform: {
										0: "This code can be used on any platform!",
										1: "Redeem your code on your Xbox.",
										2: "Redeem your code on your Playstation.",
										3: "Redeem your code on your Switch.",
										4: "Redeem your code on your PC."
									}
								}
							}],
							rewardsExpireAt: "2030-01-01T00:00:00+00:00",
							platforms: [0, 4, 2, 3, 1]
						},
						assets: {
							hero: "hero.png",
							heroVideo: null,
							questBarHero: "quests_bar_hero.webm",
							questBarHeroVideo: null,
							gameTile: "game_tile.png",
							logotype: "game_logotype.png"
						},
						taskConfigV2: {
							joinOperator: u.r.AND,
							tasks: {
								[l.X.PLAY_ON_DESKTOP]: {
									type: l.X.PLAY_ON_DESKTOP,
									target: 300
								}
							}
						},
						features: []
					},
					userStatus: null,
					targetedContent: []
				};

			function Z() {
				var e, t, o, u, B, V, M, Z;
				let [U, H] = s.useState(W), z = s.useCallback(e => {
					H(q(k({}, e), {
						preview: !0
					}))
				}, []), [F, X] = s.useState(A.a.UNENROLLED), [K, Y] = s.useState(!1), [G, J] = s.useState(!1), [$, ee] = s.useState(null), et = (Z = U.config, (0, i.EQ)(Z).with({
					configVersion: 2
				}, e => e.rewardsConfig.rewards).exhaustive());

				function en(e, t) {
					if ("hero" === e || "questBarHero" === e || "gameTile" === e || "logotype" === e || "heroVideo" === e || "questBarHeroVideo" === e) {
						var n, r;
						z(q(k({}, U), {
							config: (n = U.config, r = {
								[e]: t
							}, (0, i.EQ)(n).with({
								configVersion: 2
							}, e => q(k({}, e), {
								assets: k({}, e.assets, r)
							})).exhaustive())
						}))
					}
				}

				function er(e, t) {
					let n = U.config.taskConfigV2.tasks,
						r = n[l.X.WATCH_VIDEO];
					if (null == r) return;
					let s = k({}, r.assets);
					switch (e) {
						case "videoPlayerVideo":
							s.video = {
								url: t
							};
							break;
						case "videoPlayerVideoLowRes":
							s.videoLowRes = {
								url: t
							};
							break;
						case "videoPlayerThumbnail":
							s.video = q(k({}, s.video), {
								thumbnail: t
							});
							break;
						default:
							return
					}
					z(q(k({}, U), {
						config: q(k({}, U.config), {
							taskConfigV2: q(k({}, U.config.taskConfigV2), {
								tasks: q(k({}, n), {
									[l.X.WATCH_VIDEO]: q(k({}, r), {
										assets: s
									})
								})
							})
						})
					}))
				}

				function es(e, t) {
					var n, r, s;
					z(q(k({}, U), {
						config: q(k({}, U.config), {
							videoMetadata: q(k({}, U.config.videoMetadata), {
								messages: null != (s = null == (n = U.config.videoMetadata) ? void 0 : n.messages) ? s : {},
								assets: q(k({}, null == (r = U.config.videoMetadata) ? void 0 : r.assets), {
									[e]: t
								})
							})
						})
					}))
				}

				function eo(e, t) {
					if ("questName" === e || "gameTitle" === e || "gamePublisher" === e) {
						var n, r;
						z(q(k({}, U), {
							config: (n = U.config, r = {
								[e]: t
							}, (0, i.EQ)(n).with({
								configVersion: 2
							}, e => q(k({}, e), {
								messages: k({}, e.messages, r)
							})).exhaustive())
						}))
					}
				}

				function ea(e, t) {
					let n = U.config.taskConfigV2.tasks,
						r = n[l.X.WATCH_VIDEO];
					if (null == r) return;
					let s = q(k({}, r.messages), {
						[e]: t
					});
					z(q(k({}, U), {
						config: q(k({}, U.config), {
							taskConfigV2: q(k({}, U.config.taskConfigV2), {
								tasks: q(k({}, n), {
									[l.X.WATCH_VIDEO]: q(k({}, r), {
										messages: s
									})
								})
							})
						})
					}))
				}

				function ei(e, t, n) {
					if ("name" === e || "nameWithArticle" === e) {
						var r, s;
						z(q(k({}, U), {
							config: (r = U.config, s = {
								[e]: t
							}, (0, i.EQ)(r).with({
								configVersion: 2
							}, e => q(k({}, e), {
								rewardsConfig: q(k({}, e.rewardsConfig), {
									rewards: e.rewardsConfig.rewards.map((e, t) => t === n ? q(k({}, e), {
										messages: k({}, e.messages, s)
									}) : e)
								})
							})).exhaustive())
						}))
					}
				}

				function el(e, t) {
					z(q(k({}, U), {
						config: q(k({}, U.config), {
							colors: q(k({}, U.config.colors), {
								[e]: t
							})
						})
					}))
				}

				function ec() {
					(0, f.Xv)(U.config) ? (0, y.m)(U, m.jn.GIFT_INVENTORY_FOR_YOU, !0) : (0, C.openQuestsRewardCodeModal)({
						questId: U.id,
						questContent: m.jn.GIFT_INVENTORY_FOR_YOU,
						preview: !0,
						previewQuest: U,
						sourceQuestContent: m.jn.INTERNAL_PREVIEW_TOOL
					})
				}
				let eu = s.useMemo(() => {
						for (let [e, t] of Object.entries(U.config.taskConfigV2.tasks))
							if (null != t.target) return t.target;
						return 10 * p.Z.Seconds.MINUTE
					}, [U.config.taskConfigV2.tasks]),
					ed = s.useMemo(() => l.X.WATCH_VIDEO in U.config.taskConfigV2.tasks, [U.config.taskConfigV2.tasks]);
				a()(!1 !== U.preview && null != U.preview, "Preview config must have property preview: true");
				let ep = U.config.taskConfigV2.tasks[l.X.WATCH_VIDEO];
				return (0, r.jsxs)("div", {
					children: [(0, r.jsx)(d.X6q, {
						variant: "heading-lg/bold",
						className: R.heading,
						children: "Quest Preview Tool"
					}), (0, r.jsx)("div", {
						className: R.fields,
						children: (0, r.jsx)(P.Z, {
							onSelect: function(e) {
								ee(e), null != e && (X(function(e) {
									if (null == e.userStatus) return A.a.UNENROLLED;
									if (null != e.userStatus.claimedAt) return A.a.CLAIMED;
									if (null != e.userStatus.completedAt) return A.a.COMPLETED_100;
									let t = (0, f.il)(e),
										n = t.progressSeconds,
										r = t.targetSeconds;
									return n / r >= 1 ? A.a.COMPLETED_100 : n / r >= .75 ? A.a.COMPLETED_75 : n / r >= .5 ? A.a.COMPLETED_50 : n / r >= .25 ? A.a.COMPLETED_25 : A.a.ENROLLED
								}(e)), z(e))
							},
							quest: $
						})
					}), (0, r.jsx)(d.X6q, {
						variant: "heading-md/semibold",
						className: R.subheading,
						children: "Task Config"
					}), (0, r.jsx)("div", {
						className: R.fields,
						children: (0, r.jsx)(T.Z, {
							taskDuration: eu,
							taskConfigV2: U.config.taskConfigV2,
							onSelect: function(e) {
								z(q(k({}, U), {
									config: q(k({}, U.config), {
										taskConfigV2: e
									})
								}))
							}
						})
					}), (0, r.jsx)(d.X6q, {
						variant: "heading-md/semibold",
						className: R.subheading,
						children: "Messages"
					}), (0, r.jsxs)("div", {
						className: R.fields,
						children: [(0, r.jsx)(w.Z, {
							title: "Quest Name",
							assetKey: "questName",
							onMessageChange: eo,
							initialValue: U.config.messages.questName
						}), (0, r.jsx)(w.Z, {
							title: "Game Title",
							assetKey: "gameTitle",
							onMessageChange: eo,
							initialValue: U.config.messages.gameTitle
						}), (0, r.jsx)(w.Z, {
							title: "Game Publisher",
							assetKey: "gamePublisher",
							onMessageChange: eo,
							initialValue: U.config.messages.gamePublisher
						}), ed && (0, r.jsxs)(r.Fragment, {
							children: [(0, r.jsx)(w.Z, {
								title: "Video Title",
								assetKey: "videoTitle",
								onMessageChange: ea,
								initialValue: null == ep ? void 0 : ep.messages.videoTitle
							}), (0, r.jsx)(w.Z, {
								title: "End CTA Title",
								assetKey: "videoEndCtaTitle",
								onMessageChange: ea,
								initialValue: null == ep ? void 0 : ep.messages.videoEndCtaTitle
							}), (0, r.jsx)(w.Z, {
								title: "End CTA Subtitle",
								assetKey: "videoEndCtaSubtitle",
								onMessageChange: ea,
								initialValue: null == ep ? void 0 : ep.messages.videoEndCtaSubtitle
							})]
						})]
					}), (0, r.jsx)(d.X6q, {
						variant: "heading-md/semibold",
						className: R.subheading,
						children: "Assets"
					}), (0, r.jsxs)("div", {
						className: R.fields,
						children: [(0, r.jsx)(S.Z, {
							title: "Hero",
							assetKey: "hero",
							onFileChange: en,
							filters: Q,
							initialValue: U.config.assets.hero
						}), (0, r.jsx)(S.Z, {
							title: "Hero Video (optional)",
							assetKey: "heroVideo",
							onFileChange: en,
							filters: Q,
							initialValue: null != (V = U.config.assets.heroVideo) ? V : void 0
						}), (0, r.jsx)(S.Z, {
							title: "Quest Bar Hero",
							assetKey: "questBarHero",
							onFileChange: en,
							filters: Q,
							initialValue: U.config.assets.questBarHero
						}), (0, r.jsx)(S.Z, {
							title: "Quest Bar Hero Video (optional)",
							assetKey: "questBarHeroVideo",
							onFileChange: en,
							filters: Q,
							initialValue: null != (M = U.config.assets.questBarHeroVideo) ? M : void 0
						}), (0, r.jsx)(S.Z, {
							title: "Game Tile",
							assetKey: "gameTile",
							onFileChange: en,
							filters: [...D, "svg"],
							initialValue: U.config.assets.gameTile
						}), (0, r.jsx)(S.Z, {
							title: "Logotype",
							assetKey: "logotype",
							onFileChange: en,
							filters: [...I, "svg"],
							initialValue: U.config.assets.logotype
						}), ed && (0, r.jsxs)(r.Fragment, {
							children: [(0, r.jsx)(S.Z, {
								title: "Quest Video",
								assetKey: "videoPlayerVideo",
								onFileChange: er,
								filters: Q,
								initialValue: null == ep ? void 0 : ep.assets.video.url
							}), (0, r.jsx)(S.Z, {
								title: "Quest Video (Low Resolution)",
								assetKey: "videoPlayerVideoLowRes",
								onFileChange: er,
								filters: Q,
								initialValue: null == ep || null == (e = ep.assets.videoLowRes) ? void 0 : e.url
							}), (0, r.jsx)(S.Z, {
								title: "Video Player Thumbnail (optional)",
								assetKey: "videoPlayerThumbnail",
								onFileChange: er,
								filters: D,
								initialValue: null == ep ? void 0 : ep.assets.video.thumbnail
							}), (0, r.jsx)(S.Z, {
								title: "Quest Bar Preview Video (optional)",
								assetKey: "questBarPreviewVideo",
								onFileChange: es,
								filters: Q,
								initialValue: null == (t = U.config.videoMetadata) ? void 0 : t.assets.questBarPreviewVideo
							}), (0, r.jsx)(S.Z, {
								title: "Quest Home Video (optional)",
								assetKey: "questHomeVideo",
								onFileChange: es,
								filters: Q,
								initialValue: null == (o = U.config.videoMetadata) ? void 0 : o.assets.questHomeVideo
							})]
						})]
					}), et.map((e, t) => (0, r.jsxs)("div", {
						children: [(0, r.jsxs)(d.X6q, {
							variant: "heading-md/semibold",
							className: R.subheading,
							children: ["Reward #", t + 1]
						}), (0, r.jsxs)("div", {
							className: R.fields,
							children: [(0, r.jsx)(w.Z, {
								title: "Name",
								assetKey: "name",
								onMessageChange: (e, n) => ei(e, n, t),
								initialValue: e.messages.name
							}), (0, r.jsx)(w.Z, {
								title: "Name With Article",
								assetKey: "nameWithArticle",
								onMessageChange: (e, n) => ei(e, n, t),
								initialValue: e.messages.nameWithArticle
							}), e.type !== c.w.VIRTUAL_CURRENCY && (0, r.jsx)(S.Z, {
								title: "Asset",
								assetKey: "asset",
								onFileChange: (e, n) => (function(e, t, n) {
									if ("asset" === e) {
										var r;
										z(q(k({}, U), {
											config: (r = U.config, (0, i.EQ)(r).with({
												configVersion: 2
											}, e => q(k({}, e), {
												rewardsConfig: q(k({}, e.rewardsConfig), {
													rewards: e.rewardsConfig.rewards.map((e, r) => r === n ? q(k({}, e), {
														asset: t,
														skuId: ""
													}) : e)
												})
											})).exhaustive())
										}))
									}
								})(e, n, t),
								filters: Q,
								initialValue: e.asset
							}), (0, r.jsxs)(d.xJW, {
								children: [(0, r.jsx)(d.vwX, {
									children: "Claim Modal"
								}), (0, r.jsx)(d.zxk, {
									variant: "primary",
									text: "Open Reward Modal",
									onClick: ec
								})]
							})]
						})]
					}, t)), (0, r.jsx)(d.X6q, {
						variant: "heading-md/semibold",
						className: R.subheading,
						children: "Colors & Quest States"
					}), (0, r.jsxs)("div", {
						className: R.fields,
						children: [(0, r.jsxs)("div", {
							className: R.fields,
							style: {
								marginBottom: 0
							},
							children: [(0, r.jsx)(O.Z, {
								title: "Primary",
								colorKey: "primary",
								onChange: el,
								value: U.config.colors.primary
							}), (0, r.jsx)(O.Z, {
								title: "Secondary",
								colorKey: "secondary",
								onChange: el,
								value: U.config.colors.secondary
							})]
						}), (0, r.jsx)("div", {
							className: R.fields,
							children: (0, r.jsx)(N.Z, {})
						}), (0, r.jsx)(A.Z, {
							onChange: function(e) {
								switch (X(e), e) {
									case A.a.UNENROLLED:
										z(q(k({}, U), {
											userStatus: null
										}));
										break;
									case A.a.ENROLLED:
										z(q(k({}, U), {
											userStatus: L({
												enrolledAt: new Date().toISOString()
											})
										}));
										break;
									case A.a.COMPLETED_25:
										z(q(k({}, U), {
											userStatus: L({
												enrolledAt: new Date().toISOString(),
												streamProgressSeconds: .25 * eu
											})
										}));
										break;
									case A.a.COMPLETED_50:
										z(q(k({}, U), {
											userStatus: L({
												enrolledAt: new Date().toISOString(),
												streamProgressSeconds: .5 * eu
											})
										}));
										break;
									case A.a.COMPLETED_75:
										z(q(k({}, U), {
											userStatus: L({
												enrolledAt: new Date().toISOString(),
												streamProgressSeconds: .75 * eu
											})
										}));
										break;
									case A.a.COMPLETED_100:
										z(q(k({}, U), {
											userStatus: L({
												completedAt: new Date().toISOString(),
												enrolledAt: new Date().toISOString(),
												streamProgressSeconds: eu
											})
										}));
										break;
									case A.a.CLAIMED:
										z(q(k({}, U), {
											userStatus: L({
												claimedAt: new Date().toISOString(),
												completedAt: new Date().toISOString(),
												enrolledAt: new Date().toISOString(),
												streamProgressSeconds: eu
											})
										}))
								}
							},
							value: F
						})]
					}), (0, r.jsx)(d.X6q, {
						variant: "heading-lg/bold",
						className: R.heading,
						children: "Component Previews"
					}), (0, r.jsxs)("div", {
						className: R.componentPreviews,
						children: [(0, r.jsxs)(E.Z, {
							withBorder: !0,
							children: [(0, r.jsx)(d.vwX, {
								children: "Quest Bar"
							}), (0, r.jsxs)("div", {
								className: R.questBarPreviewWrapper,
								children: [(null == (u = U.userStatus) ? void 0 : u.claimedAt) != null && (0, r.jsx)(d.Text, {
									color: "text-secondary",
									variant: "text-sm/normal",
									children: "The Quest Bar is hidden when the user has claimed the reward."
								}), (0, r.jsx)("div", {
									className: R.questBarPreview,
									children: (0, r.jsx)(b.p, {
										isPreview: !0,
										source: "preview",
										questId: "0",
										children: (0, r.jsx)(x.Z, {
											children: (0, r.jsx)(g.P, {
												quest: U
											})
										})
									})
								})]
							})]
						}), (0, r.jsxs)(E.Z, {
							withBorder: !0,
							children: [(0, r.jsx)(d.vwX, {
								children: "Quest Home Card"
							}), (0, r.jsx)(b.p, {
								isPreview: !0,
								source: "preview",
								questId: "0",
								children: (0, r.jsx)(h.Z, {
									quest: U,
									className: R.questTile,
									questContent: m.jn.QUEST_HOME_DESKTOP,
									contentPosition: 0,
									rowIndex: 0,
									sourceQuestContent: m.jn.INTERNAL_PREVIEW_TOOL
								})
							})]
						}), (0, r.jsxs)(E.Z, {
							withBorder: !0,
							children: [(0, r.jsx)(d.vwX, {
								children: "Channel Call Header"
							}), (null == (B = U.userStatus) ? void 0 : B.claimedAt) != null && (0, r.jsx)(d.Text, {
								color: "text-secondary",
								variant: "text-sm/normal",
								children: "The Quest Channel Call Header is hidden when the user has claimed the reward."
							}), (0, r.jsx)("div", {
								className: R.questBarPreviewWrapper,
								children: (0, r.jsx)(b.p, {
									isPreview: !0,
									source: "preview",
									questId: "0",
									children: (0, r.jsx)("div", {
										className: R.questChannelCallHeaderPreview,
										children: (0, r.jsx)(_.Z, {
											channelId: "123",
											previewQuest: U,
											isParticipatingOverride: K
										})
									})
								})
							})]
						}), (0, r.jsx)("div", {
							className: R.toggleSwitch,
							children: (0, r.jsx)(d.xJW, {
								children: (0, r.jsx)(d.j7V, {
									value: K,
									onChange: function(e) {
										Y(e)
									},
									hideBorder: !0,
									children: "Is Participating:"
								})
							})
						}), (0, r.jsxs)(E.Z, {
							withBorder: !0,
							children: [(0, r.jsx)(d.vwX, {
								children: "Quest Card Embed"
							}), G ? (0, r.jsx)(v.o, {
								questId: U.id
							}) : (0, r.jsx)(j.Z, {
								quest: U,
								location: m.jn.QUESTS_EMBED,
								sourceQuestContent: m.jn.INTERNAL_PREVIEW_TOOL
							}, U.id)]
						}), (0, r.jsx)("div", {
							className: R.toggleSwitch,
							children: (0, r.jsx)(d.xJW, {
								children: (0, r.jsx)(d.j7V, {
									value: G,
									onChange: J,
									hideBorder: !0,
									children: "Invalid Quests Embed:"
								})
							})
						}), ed && (0, r.jsxs)(E.Z, {
							withBorder: !0,
							allowClicks: !0,
							children: [(0, r.jsx)(d.vwX, {
								children: "Video Player"
							}), (0, r.jsx)(d.zxk, {
								variant: "primary",
								text: "Open Video Player Modal",
								onClick: () => {
									(0, d.ZDy)(async () => {
										let {
											default: e
										} = await Promise.all([n.e("66816"), n.e("32249"), n.e("63942")]).then(n.bind(n, 536687));
										return t => {
											var n;
											return (0, r.jsx)(e, q(k({}, t), {
												openStartClockTime: performance.now(),
												videoSessionId: "fake-quest-session-id",
												questId: null != (n = U.id) ? n : "fake-quest-id",
												overrideQuest: U,
												autoplay: !0,
												sourceQuestContent: m.jn.INTERNAL_PREVIEW_TOOL
											}))
										}
									})
								}
							})]
						})]
					})]
				})
			}
			class U extends s.Component {
				componentDidCatch(e) {
					this.setState({
						error: e
					})
				}
				render() {
					let {
						error: e,
						renderKey: t
					} = this.state;
					return null != e ? (0, r.jsxs)("div", {
						className: R.errorBoundary,
						children: [(0, r.jsx)(d.P4T, {
							className: R.errorBoundaryIcon
						}), (0, r.jsx)(d.X6q, {
							variant: "heading-lg/semibold",
							children: "Something broke in the Quest preview tool :("
						}), (0, r.jsx)(d.zxk, {
							variant: "secondary",
							text: "Reset",
							onClick: this.handleResetState
						}), null != e.message && (0, r.jsx)(d.Zbd, {
							className: R.errorMessageWrapper,
							children: (0, r.jsx)("code", {
								className: R.errorMessage,
								children: e.message
							})
						})]
					}) : (0, r.jsx)(Z, {}, t)
				}
				constructor(...e) {
					super(...e), B(this, "state", {
						error: null,
						renderKey: 0
					}), B(this, "handleResetState", () => {
						this.setState(e => ({
							error: null,
							renderKey: e.renderKey + 1
						}))
					})
				}
			}
			let H = U
		},
		749912: function(e, t, n) {
			n.d(t, {
				Z: () => d
			}), n(467055), n(388685);
			var r = n(255367);
			n(73800);
			var s = n(754700),
				o = n(481060),
				a = n(70956),
				i = n(987144);

			function l(e) {
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

			function c(e, t) {
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
			let u = [{
					value: 1,
					label: "Stream Desktop"
				}, {
					value: 0,
					label: "Play Desktop"
				}, {
					value: 3,
					label: "Play Console"
				}, {
					value: 4,
					label: "Play Desktop & Console"
				}, {
					value: 2,
					label: "Watch Video"
				}, {
					value: 5,
					label: "Play Activity"
				}],
				d = function(e) {
					let {
						onSelect: t,
						taskDuration: n = 10,
						taskConfigV2: d
					} = e;
					return (0, r.jsxs)(r.Fragment, {
						children: [(0, r.jsxs)(o.xJW, {
							children: [(0, r.jsx)(o.vwX, {
								tag: o.RB0.H5,
								children: "Task Type(s)"
							}), (0, r.jsx)(o.R94, {
								children: (0, r.jsx)(o.PhF, {
									className: i.taskPresetSelect,
									placeholder: "Select Task Preset",
									options: u,
									renderOptionValue: e => e.map(e => (0, r.jsx)("div", {
										children: e.label
									}, e.value)),
									renderOptionLabel: e => (0, r.jsx)("div", {
										children: e.label
									}),
									isSelected: e => e === function(e) {
										let t = s.X.PLAY_ON_PLAYSTATION in e || s.X.PLAY_ON_XBOX in e,
											n = s.X.PLAY_ON_DESKTOP in e || s.X.PLAY_ON_DESKTOP_V2 in e,
											r = s.X.STREAM_ON_DESKTOP in e,
											o = s.X.WATCH_VIDEO in e,
											a = s.X.PLAY_ACTIVITY in e;
										return t && n ? 4 : t ? 3 : n ? 0 : r ? 1 : o ? 2 : a ? 5 : void 0
									}(d.tasks),
									select: e => {
										t(c(l({}, d), {
											tasks: function(e, t) {
												let n = {};
												switch (e) {
													case 1:
														n[s.X.STREAM_ON_DESKTOP] = {
															type: s.X.STREAM_ON_DESKTOP,
															target: t
														};
														break;
													case 0:
														n[s.X.PLAY_ON_DESKTOP] = {
															type: s.X.PLAY_ON_DESKTOP,
															target: t
														};
														break;
													case 3:
														n[s.X.PLAY_ON_PLAYSTATION] = {
															type: s.X.PLAY_ON_PLAYSTATION,
															target: t,
															externalIds: []
														}, n[s.X.PLAY_ON_XBOX] = {
															type: s.X.PLAY_ON_XBOX,
															target: t,
															externalIds: []
														};
														break;
													case 4:
														n[s.X.PLAY_ON_DESKTOP] = {
															type: s.X.PLAY_ON_DESKTOP,
															target: t
														}, n[s.X.PLAY_ON_PLAYSTATION] = {
															type: s.X.PLAY_ON_PLAYSTATION,
															target: t,
															externalIds: []
														}, n[s.X.PLAY_ON_XBOX] = {
															type: s.X.PLAY_ON_XBOX,
															target: t,
															externalIds: []
														};
														break;
													case 2:
														n[s.X.WATCH_VIDEO] = {
															type: s.X.WATCH_VIDEO,
															target: t,
															assets: {
																video: {
																	url: ""
																}
															},
															messages: {
																videoTitle: ""
															}
														};
														break;
													case 5:
														n[s.X.PLAY_ACTIVITY] = {
															type: s.X.PLAY_ACTIVITY,
															target: t
														}
												}
												return n
											}(e, n)
										}))
									},
									serialize: String
								})
							})]
						}), (0, r.jsxs)(o.xJW, {
							children: [(0, r.jsx)(o.vwX, {
								tag: o.RB0.H5,
								children: "Task Duration"
							}), (0, r.jsx)(o.R94, {
								children: (0, r.jsx)(o.oil, {
									value: String(n / a.Z.Seconds.MINUTE),
									onChange: function(e) {
										let n = Number(e);
										if (isNaN(n)) return;
										n *= a.Z.Seconds.MINUTE;
										let r = Object.fromEntries(Object.entries(d.tasks).map(e => {
											let [t, r] = e;
											return [t, c(l({}, r), {
												target: n
											})]
										}));
										t(c(l({}, d), {
											tasks: r
										}))
									}
								})
							})]
						})]
					})
				}
		},
		815183: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(255367);
			n(73800);
			var s = n(481060),
				o = n(153867),
				a = n(410030),
				i = n(583901),
				l = n(231338);
			let c = function() {
				let e = (0, a.ZP)();
				return (0, r.jsxs)(s.xJW, {
					children: [(0, r.jsx)(s.vwX, {
						tag: s.RB0.H5,
						children: "Theme"
					}), (0, r.jsxs)("div", {
						style: {
							display: "flex",
							justifyContent: "space-between"
						},
						children: [(0, r.jsx)(i.bD, {
							theme: l.BR.LIGHT,
							isSelected: e === l.BR.LIGHT,
							onSelect: () => (0, o.ZI)({
								theme: l.BR.LIGHT
							})
						}), (0, r.jsx)(i.bD, {
							theme: l.BR.DARK,
							isSelected: e === l.BR.DARK,
							onSelect: () => (0, o.ZI)({
								theme: l.BR.DARK
							})
						})]
					})]
				})
			}
		},
		899457: function(e, t, n) {
			n.d(t, {
				Z: () => i,
				a: () => a
			});
			var r, s = n(255367);
			n(73800);
			var o = n(481060),
				a = ((r = {})[r.UNENROLLED = 0] = "UNENROLLED", r[r.ENROLLED = 1] = "ENROLLED", r[r.COMPLETED_25 = 2] = "COMPLETED_25", r[r.COMPLETED_50 = 3] = "COMPLETED_50", r[r.COMPLETED_75 = 4] = "COMPLETED_75", r[r.COMPLETED_100 = 5] = "COMPLETED_100", r[r.CLAIMED = 6] = "CLAIMED", r);
			let i = function(e) {
				let {
					onChange: t,
					value: n
				} = e;
				return (0, s.jsxs)(o.xJW, {
					children: [(0, s.jsx)(o.vwX, {
						tag: o.RB0.H5,
						children: "User State"
					}), (0, s.jsx)(o.R94, {
						children: (0, s.jsx)(o.PhF, {
							"aria-label": "User State",
							options: [{
								label: "Unenrolled",
								value: 0
							}, {
								label: "Enrolled",
								value: 1
							}, {
								label: "25% Complete",
								value: 2
							}, {
								label: "50% Complete",
								value: 3
							}, {
								label: "75% Complete",
								value: 4
							}, {
								label: "100% Complete",
								value: 5
							}, {
								label: "Claimed",
								value: 6
							}],
							isSelected: e => e === n,
							select: t,
							serialize: String
						})
					})]
				})
			}
		},
		672188: function(e, t, n) {
			n.d(t, {
				S: () => i,
				a: () => l
			}), n(388685);
			var r = n(73800),
				s = n(237617),
				o = n(266338);
			let a = {};

			function i(e, t) {
				let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
					i = (0, r.useRef)(null),
					l = (0, s.Z)(null != t ? t : a),
					c = (0, r.useRef)(null),
					u = (0, r.useRef)(e);
				return (0, r.useEffect)(() => {
					u.current = e
				}, [e]), (0, r.useEffect)(() => {
					if (!n) return;
					null == c.current && (c.current = (0, o.c)(l.current));
					let e = i.current,
						t = c.current;
					if (null != e && null != t) return (0, o.YP)(t, e, u.current), () => {
						(0, o.UC)(t, e)
					}
				}, [n, l]), i
			}

			function l() {
				let [e, t] = (0, r.useState)(!1);
				return {
					ref: i((0, r.useCallback)(e => {
						t(e.isIntersecting)
					}, [])),
					inViewport: e
				}
			}
		},
		121746: function(e, t, n) {
			e.exports = {
				fileUploadButton: "fileUploadButton__8b203",
				fileUpload: "fileUpload__8b203 " + n(629838).container,
				fileUploadInput: "fileUploadInput__8b203 " + n(629838).input
			}
		},
		382845: function(e, t, n) {
			e.exports = {
				showConnectionsButton: "showConnectionsButton_b69c3a"
			}
		},
		414444: function(e, t, n) {
			e.exports = {
				wrapper: "wrapper__0d616",
				wrapperInvisible: "wrapperInvisible__0d616",
				wrapperVisible: "wrapperVisible__0d616",
				contentWrapper: "contentWrapper__0d616",
				contentWrapperBrandColorRemoval: "contentWrapperBrandColorRemoval__0d616",
				contentWrapperExpanded: "contentWrapperExpanded__0d616",
				contentWrapperAccepted: "contentWrapperAccepted__0d616",
				mask: "mask__0d616"
			}
		},
		62753: function(e, t, n) {
			e.exports = {
				content: "content__60686",
				overlay: "overlay__60686"
			}
		},
		74783: function(e, t, n) {
			e.exports = {
				wrapper: "wrapper_a86e4f",
				opaqueExpandedBackground: "opaqueExpandedBackground_a86e4f",
				rewardHighlightWrapper: "rewardHighlightWrapper_a86e4f",
				interactable: "interactable_a86e4f",
				submenuWrapper: "submenuWrapper_a86e4f",
				submenuIcon: "submenuIcon_a86e4f",
				white: "white_a86e4f",
				promotedBadgeWrapper: "promotedBadgeWrapper_a86e4f",
				logo: "logo_a86e4f",
				clickable: "clickable_a86e4f",
				promotedBadge: "promotedBadge_a86e4f",
				promotedBadgeIcon: "promotedBadgeIcon_a86e4f",
				rewardHighlightLogotype: "rewardHighlightLogotype_a86e4f"
			}
		},
		895518: function(e, t, n) {
			e.exports = {
				ctaButtons: "ctaButtons_a77fde",
				cta: "cta_a77fde",
				shine: "shine_a77fde",
				backButton: "backButton_a77fde",
				backButtonInner: "backButtonInner_a77fde",
				backIcon: "backIcon_a77fde"
			}
		},
		704247: function(e, t, n) {
			e.exports = {
				outer: "outer_bb1069",
				progressBar: "progressBar_bb1069",
				progress: "progress_bb1069",
				inner: "inner_bb1069",
				coverContent: "coverContent_bb1069",
				progressTextWrapper: "progressTextWrapper_bb1069",
				progressTextOverlay: "progressTextOverlay_bb1069",
				progressText: "progressText_bb1069"
			}
		},
		513940: function(e, t, n) {
			e.exports = {
				wrapper: "wrapper__22c64",
				background: "background__22c64",
				borders: "borders__22c64",
				bordersTopLeft: "bordersTopLeft__22c64",
				bordersBottom: "bordersBottom__22c64",
				confetti: "confetti__22c64",
				confettiWrapper: "confettiWrapper__22c64"
			}
		},
		22559: function(e, t, n) {
			e.exports = {
				microphoneUnit: "microphoneUnit_de2d78",
				microphoneUnitHeader: "microphoneUnitHeader_de2d78",
				warningCircle: "warningCircle_de2d78",
				errorCircle: "errorCircle_de2d78",
				microphoneUnitRefreshIconWrapper: "microphoneUnitRefreshIconWrapper_de2d78",
				disabled: "disabled_de2d78",
				microphoneUnitBodyText: "microphoneUnitBodyText_de2d78",
				opacity_50: "opacity_50_de2d78"
			}
		},
		667904: function(e, t, n) {
			e.exports = {
				contentCollapsed: "contentCollapsed__5f897",
				contentCollapsedWrapper: "contentCollapsedWrapper__5f897",
				contentCollapsedAccepted: "contentCollapsedAccepted__5f897",
				contentCollapsedExpanded: "contentCollapsedExpanded__5f897"
			}
		},
		921183: function(e, t, n) {
			e.exports = {
				contentExpanded: "contentExpanded__636a2",
				contentExpandedAccepted: "contentExpandedAccepted__636a2",
				questPromoContent: "questPromoContent__636a2",
				questAcceptedHeader: "questAcceptedHeader__636a2",
				divider: "divider__636a2",
				details: "details__636a2",
				submenuWrapper: "submenuWrapper__636a2",
				questAcceptedContent: "questAcceptedContent__636a2",
				submenuIcon: "submenuIcon__636a2",
				interactiveNormal: "interactiveNormal__636a2",
				videoQuestPreviewCont: "videoQuestPreviewCont__636a2",
				assetBodyVideoPreviewMedia: "assetBodyVideoPreviewMedia__636a2",
				assetBodyVideoPreviewVideo: "assetBodyVideoPreviewVideo__636a2",
				assetBodyVideoPreviewVisible: "assetBodyVideoPreviewVisible__636a2",
				heroAssetWrapper: "heroAssetWrapper__636a2",
				legibilityGradient: "legibilityGradient__636a2",
				legibilityGradientDark: "legibilityGradientDark__636a2",
				heroAsset: "heroAsset__636a2",
				heroAssetTint: "heroAssetTint__636a2",
				heroAssetDarken: "heroAssetDarken__636a2",
				cta: "cta__636a2",
				contentInteractable: "contentInteractable__636a2",
				headerText: "headerText__636a2",
				title: "title__636a2",
				rewardTile: "rewardTile__636a2",
				hiddenRewardTile: "hiddenRewardTile__636a2",
				description: "description__636a2",
				flex: "flex__636a2",
				postEnrollmentBackground: "postEnrollmentBackground__636a2",
				postEnrollmentBackgroundCollapsed: "postEnrollmentBackgroundCollapsed__636a2",
				postEnrollmentBackgroundExpanded: "postEnrollmentBackgroundExpanded__636a2",
				previewPlayButtonCont: "previewPlayButtonCont__636a2",
				previewPlayButton: "previewPlayButton__636a2",
				contentCollapsedBackgroundWrapper: "contentCollapsedBackgroundWrapper__636a2",
				contentCollapsedBackground: "contentCollapsedBackground__636a2"
			}
		},
		686166: function(e, t, n) {
			e.exports = {
				card: "card__54ab7",
				header: "header__54ab7",
				icon: "icon__54ab7",
				warningBody: "warningBody__54ab7"
			}
		},
		505939: function(e, t, n) {
			e.exports = {
				questProgressWrapper: "questProgressWrapper__1d950",
				questProgressRewardTile: "questProgressRewardTile__1d950",
				questProgressCopy: "questProgressCopy__1d950",
				questProgressHint: "questProgressHint__1d950"
			}
		},
		420444: function(e, t, n) {
			e.exports = {
				rewardTileContainer: "rewardTileContainer__8a22c",
				rewardTileSpacer: "rewardTileSpacer__8a22c",
				rewardHighlightLogoCTA: "rewardHighlightLogoCTA__8a22c",
				partnerBranding: "partnerBranding__8a22c",
				rewardHighlightCTA: "rewardHighlightCTA__8a22c"
			}
		},
		141572: function(e, t, n) {
			e.exports = {
				wrapper: "wrapper__10e9a",
				headingWrapper: "headingWrapper__10e9a",
				stepsWrapper: "stepsWrapper__10e9a",
				heading: "heading__10e9a",
				stepWrapper: "stepWrapper__10e9a",
				stepContent: "stepContent__10e9a",
				stepWrapperWithNextStep: "stepWrapperWithNextStep__10e9a",
				stepIndicator: "stepIndicator__10e9a",
				stepIconWrapper: "stepIconWrapper__10e9a",
				stepWrapperComplete: "stepWrapperComplete__10e9a",
				stepConnector: "stepConnector__10e9a",
				stepIcon: "stepIcon__10e9a"
			}
		},
		374578: function(e, t, n) {
			e.exports = {
				buttons: "buttons__51f70",
				button: "button__51f70",
				buttonInner: "buttonInner__51f70"
			}
		},
		665600: function(e, t, n) {
			e.exports = {
				content: "content__874f8"
			}
		},
		464121: function(e, t, n) {
			e.exports = {
				lottieAnimation: "lottieAnimation__85ad0",
				backgroundFallback: "backgroundFallback__85ad0",
				lottieAnimationBackgroundWrapper: "lottieAnimationBackgroundWrapper__85ad0",
				lottieAnimationBackground: "lottieAnimationBackground__85ad0"
			}
		},
		192214: function(e, t, n) {
			e.exports = {
				contentCollapsed: "contentCollapsed_b628ac",
				contentCollapsedWrapper: "contentCollapsedWrapper_b628ac",
				contentCollapsedAccepted: "contentCollapsedAccepted_b628ac",
				contentCollapsedExpanded: "contentCollapsedExpanded_b628ac",
				brandingWrapper: "brandingWrapper_b628ac",
				partnerBranding: "partnerBranding_b628ac",
				questName: "questName_b628ac",
				questProgressWrapper: "questProgressWrapper_b628ac",
				questProgressRewardTile: "questProgressRewardTile_b628ac",
				questProgressBar: "questProgressBar_b628ac",
				questProgressHint: "questProgressHint_b628ac",
				Shine: "Shine_b628ac"
			}
		},
		92503: function(e, t, n) {
			e.exports = {
				contentExpanded: "contentExpanded_f339f7",
				contentInteractable: "contentInteractable_f339f7",
				questPromoContent: "questPromoContent_f339f7",
				utils: "utils_f339f7",
				questAcceptedContent: "questAcceptedContent_f339f7",
				details: "details_f339f7",
				submenuWrapper: "submenuWrapper_f339f7",
				submenuIcon: "submenuIcon_f339f7",
				heroAssetWrapper: "heroAssetWrapper_f339f7",
				heroAsset: "heroAsset_f339f7",
				cta: "cta_f339f7",
				ctaClaimReward: "ctaClaimReward_f339f7",
				description: "description_f339f7",
				title: "title_f339f7",
				rewardTile: "rewardTile_f339f7",
				questAcceptedContentHeading: "questAcceptedContentHeading_f339f7",
				questProgressRewardTile: "questProgressRewardTile_f339f7",
				questAcceptedContentCopySubheading: "questAcceptedContentCopySubheading_f339f7"
			}
		},
		912621: function(e, t, n) {
			e.exports = {
				modalRoot: "modalRoot__5b400",
				modalHeader: "modalHeader__5b400",
				modalTop: "modalTop__5b400",
				iconFrame: "iconFrame__5b400",
				icon: "icon__5b400",
				closeBtn: "closeBtn__5b400",
				modalContent: "modalContent__5b400",
				contentHeader: "contentHeader__5b400",
				refreshWrapper: "refreshWrapper__5b400",
				disabled: "disabled__5b400",
				upperBodyText: "upperBodyText__5b400",
				footer: "footer__5b400",
				colorTransition: "colorTransition__5b400",
				footerCloseButton: "footerCloseButton__5b400",
				accountsWrapper: "accountsWrapper__5b400",
				connectionRow: "connectionRow__5b400",
				connectionRowHeader: "connectionRowHeader__5b400",
				connectionRowHeaderError: "connectionRowHeaderError__5b400",
				connectionRowHeaderContent: "connectionRowHeaderContent__5b400",
				success: "success__5b400",
				error: "error__5b400",
				gameTile: "gameTile__5b400",
				errorRow: "errorRow__5b400",
				errorsContainer: "errorsContainer__5b400",
				tooltip: "tooltip__5b400"
			}
		},
		701642: function(e, t, n) {
			e.exports = {
				placeholderElement: "placeholderElement__6e847"
			}
		},
		168989: function(e, t, n) {
			e.exports = {
				container: "container_cec934"
			}
		},
		508936: function(e, t, n) {
			e.exports = {
				container: "container_b5b7aa",
				positionContentOverBackground: "positionContentOverBackground_b5b7aa",
				contents: "contents_b5b7aa",
				heroAssetWrapper: "heroAssetWrapper_b5b7aa",
				heroAssetCont: "heroAssetCont_b5b7aa",
				heroAsset: "heroAsset_b5b7aa",
				heroAssetVideo: "heroAssetVideo_b5b7aa",
				overlay: "overlay_b5b7aa",
				darkThemeGradient: "darkThemeGradient_b5b7aa",
				lightThemeGradient: "lightThemeGradient_b5b7aa",
				topRow: "topRow_b5b7aa",
				pill: "pill_b5b7aa",
				eyebrowText: "eyebrowText_b5b7aa",
				utilButtonWrapper: "utilButtonWrapper_b5b7aa",
				utilButtonIcon: "utilButtonIcon_b5b7aa",
				partnerBranding: "partnerBranding_b5b7aa",
				partnerLogotypes: "partnerLogotypes_b5b7aa",
				bottomRow: "bottomRow_b5b7aa",
				hints: "hints_b5b7aa",
				hintsContainer: "hintsContainer_b5b7aa"
			}
		},
		142468: function(e, t, n) {
			e.exports = {
				container: "container__960ef",
				ctaInner: "ctaInner__960ef",
				button: "button__960ef",
				platformSelectorPrimaryLabel: "platformSelectorPrimaryLabel__960ef",
				platformSelectorPrimary: "platformSelectorPrimary__960ef",
				platformSelectorSecondary: "platformSelectorSecondary__960ef",
				platformSelectorSecondaryContent: "platformSelectorSecondaryContent__960ef",
				platformSelectorSecondaryChevron: "platformSelectorSecondaryChevron__960ef",
				videoQuestPlayIcon: "videoQuestPlayIcon__960ef"
			}
		},
		882067: function(e, t, n) {
			e.exports = {
				container: "container__956c6",
				rewardDescriptionContainer: "rewardDescriptionContainer__956c6",
				pulse: "pulse__956c6",
				confetti: "confetti__956c6",
				completionAnimation: "completionAnimation__956c6",
				progressWrapper: "progressWrapper__956c6",
				circularRewardTileWrapper: "circularRewardTileWrapper__956c6",
				circularQuestRewardTileAsset: "circularQuestRewardTileAsset__956c6",
				questRewardTileAsset: "questRewardTileAsset__956c6",
				assetWrapper: "assetWrapper__956c6",
				textContainer: "textContainer__956c6",
				justifyCenter: "justifyCenter__956c6",
				questName: "questName__956c6",
				header: "header__956c6",
				orbsBalanceIcon: "orbsBalanceIcon__956c6",
				description: "description__956c6",
				textOverflowBlur: "textOverflowBlur__956c6"
			}
		},
		409667: function(e, t, n) {
			e.exports = {
				heading: "heading__4169d",
				subheading: "subheading__4169d",
				componentPreviews: "componentPreviews__4169d",
				componentPreviewWrapper: "componentPreviewWrapper__4169d",
				componentPreviewWrapperBordered: "componentPreviewWrapperBordered__4169d",
				componentPreview: "componentPreview__4169d",
				questBarPreviewWrapper: "questBarPreviewWrapper__4169d",
				questBarPreview: "questBarPreview__4169d",
				questChannelCallHeaderPreview: "questChannelCallHeaderPreview__4169d",
				toggleSwitch: "toggleSwitch__4169d",
				fields: "fields__4169d",
				swatchContainer: "swatchContainer__4169d",
				swatchIcon: "swatchIcon__4169d",
				errorBoundary: "errorBoundary__4169d",
				errorBoundaryIcon: "errorBoundaryIcon__4169d",
				headingWithTooltip: "headingWithTooltip__4169d",
				errorMessageWrapper: "errorMessageWrapper__4169d",
				errorMessage: "errorMessage__4169d",
				questTile: "questTile__4169d"
			}
		},
		987144: function(e, t, n) {
			e.exports = {
				taskPresetSelect: "taskPresetSelect_a8dbb2"
			}
		},
		45772: function(e, t, n) {
			e.exports = {
				wrapper: "wrapper_e9b191",
				wrapperAccepted: "wrapperAccepted_e9b191",
				rewardTileWrapper: "rewardTileWrapper_e9b191",
				rewardTile: "rewardTile_e9b191",
				heading: "heading_e9b191",
				promotedTag: "promotedTag_e9b191",
				content: "content_e9b191",
				headingWithSubmenu: "headingWithSubmenu_e9b191",
				questTitle: "questTitle_e9b191",
				gameTile: "gameTile_e9b191",
				ctas: "ctas_e9b191",
				cta: "cta_e9b191",
				submenuWrapper: "submenuWrapper_e9b191",
				submenuIcon: "submenuIcon_e9b191"
			}
		},
		817447: function(e, t, n) {
			e.exports = {
				wrapper: "wrapper_b76891",
				copy: "copy_b76891",
				rewardTile: "rewardTile_b76891"
			}
		},
		865184: function(e, t, n) {
			e.exports = {
				orbIconSVG: "orbIconSVG__85200",
				loading: "loading__85200",
				spin: "spin__85200"
			}
		},
		629838: function(e, t, n) {
			e.exports = {
				container: "container_f89b2c",
				layout: "layout_f89b2c",
				base: "base_f89b2c",
				input: "input_f89b2c base_f89b2c",
				button: "button_f89b2c",
				disabled: "disabled_f89b2c"
			}
		}
	}
]);
//# sourceMappingURL=efef0e08ff6e90ff.js.map