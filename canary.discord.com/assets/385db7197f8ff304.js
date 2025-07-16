"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["83976"], {
		24124: function(e, t, n) {
			n.d(t, {
				GG: () => a,
				R2: () => o,
				h7: () => l,
				rh: () => i
			});
			var r = n(570140);

			function l(e, t, n) {
				return new Promise(l => {
					setTimeout(() => {
						r.Z.dispatch({
							type: "ACTIVITY_INVITE_MODAL_OPEN",
							activity: e,
							isPrivate: t,
							context: n,
							resolve: l
						})
					}, 0)
				})
			}

			function i(e) {
				r.Z.dispatch({
					type: "ACTIVITY_INVITE_MODAL_QUERY",
					query: e
				})
			}

			function a(e) {
				r.Z.dispatch({
					type: "ACTIVITY_INVITE_MODAL_SEND",
					channelId: e
				})
			}

			function o(e) {
				r.Z.dispatch({
					type: "ACTIVITY_INVITE_MODAL_SEND",
					userId: e
				})
			}
		},
		582019: function(e, t, n) {
			n.d(t, {
				j: () => o
			});
			var r = n(255367),
				l = n(73800),
				i = n(709014);
			let a = {
					all: {
						name: "all",
						start: 0,
						duration: 66
					}
				},
				o = () => {
					let e = l.useRef(null),
						t = l.useCallback(() => {
							null != e.current && e.current.play("all")
						}, []),
						o = l.useCallback(() => {
							null != e.current && e.current.play("all")
						}, []),
						u = l.useCallback(() => {
							null != e.current && e.current.stopIfPlaying("all")
						}, []),
						s = l.useCallback(t => {
							var l, o;
							return (0, r.jsx)(i.L, (l = function(e) {
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
							}({}, t), o = o = {
								src: () => n.e("66944").then(n.t.bind(n, 166174, 19)),
								ref: e,
								markers: a
							}, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
								var n = Object.keys(e);
								if (Object.getOwnPropertySymbols) {
									var r = Object.getOwnPropertySymbols(e);
									n.push.apply(n, r)
								}
								return n
							})(Object(o)).forEach(function(e) {
								Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e))
							}), l))
						}, []);
					return {
						events: {
							onClick: t,
							onMouseEnter: o,
							onMouseLeave: u
						},
						play: t,
						getDuration: l.useCallback(() => {
							var t;
							return null == (t = e.current) ? void 0 : t.getDuration()
						}, []),
						getCurrentFrame: l.useCallback(() => {
							var t, n;
							return null != (n = null == (t = e.current) ? void 0 : t.getCurrentFrame()) ? n : null
						}, []),
						Component: s
					}
				}
		},
		638730: function(e, t, n) {
			n.d(t, {
				T: () => a,
				h: () => o
			}), n(388685);
			var r = n(73800),
				l = n(392711);
			let i = e => e,
				a = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
						l = arguments.length > 3 ? arguments[3] : void 0,
						a = o(i, t, n, l),
						u = r.useRef(e);
					return r.useEffect(() => {
						u.current = a(e)
					}, [e, a]), 0 === t ? e : u.current
				},
				o = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
						i = arguments.length > 3 ? arguments[3] : void 0,
						a = r.useRef((0, l.throttle)(e, t, i));
					return r.useEffect(() => (a.current = (0, l.throttle)(e, t, i), () => {
						var e;
						null == (e = a.current) || e.cancel()
					}), [e, t, i, ...n]), a.current
				}
		},
		563218: function(e, t, n) {
			n.d(t, {
				Z: () => h
			});
			var r = n(255367),
				l = n(73800),
				i = n(442837),
				a = n(570140),
				o = n(519938),
				u = n(928518),
				s = n(585483),
				c = n(317381),
				d = n(16609),
				f = n(917107),
				p = n(716600),
				m = n(918559),
				g = n(981631);
			let E = (e, t) => {
				a.Z.wait(() => {
					(0, o.Cz)(e, t)
				})
			};

			function h(e) {
				let t, {
						embedId: n,
						className: a,
						style: o
					} = e,
					h = (0, i.e7)([u.Z], () => u.Z.getWindow(g.KJ3.CHANNEL_CALL_POPOUT)),
					v = (0, p.Z)(),
					S = (0, i.e7)([c.ZP], () => c.ZP.getActivityPanelMode());
				if (null == v || (0, f.Z)((0, d.p)(v.location)) || S !== m.Ez.PANEL) {
					var b;
					t = null != (b = null == h ? void 0 : h.window) ? b : window
				} else t = window;
				let O = l.useRef(null),
					y = l.useMemo(() => {
						let e = null;
						return () => {
							null == e && (e = t.requestAnimationFrame(() => {
								var t, r;
								E(n, null != (r = null == (t = O.current) ? void 0 : t.getBoundingClientRect()) ? r : null), e = null
							}))
						}
					}, [n, t]);
				return l.useEffect(() => (t.addEventListener("resize", y), s.S.subscribe(g.CkL.REMEASURE_TARGET, y), () => {
					t.removeEventListener("resize", y), s.S.unsubscribe(g.CkL.REMEASURE_TARGET, y)
				}), [y, t]), l.useLayoutEffect(() => {
					let e = O.current;
					if (null == e) return;
					let t = e.ownerDocument.defaultView;
					if (null == t) return;
					y();
					let r = new t.ResizeObserver(y);
					return r.observe(e), () => {
						r.disconnect(), E(n, null)
					}
				}, [n, y]), (0, r.jsx)("div", {
					ref: O,
					style: o,
					className: a
				})
			}
		},
		655687: function(e, t, n) {
			n.d(t, {
				Z: () => a
			});
			var r = n(933557),
				l = n(981631),
				i = n(388032);

			function a(e) {
				let {
					channel: t,
					isReadonly: n = !1,
					isCreatingThread: a = !1
				} = e, o = (0, r.ZP)(t, !0), u = (0, r.ZP)(t, !1);
				return null == t || null == o ? {
					placeholder: i.intl.string(i.t.MKDeyM),
					accessibilityLabel: i.intl.string(i.t.MKDeyM)
				} : a ? {
					placeholder: i.intl.string(i.t.YzpScX),
					accessibilityLabel: i.intl.string(i.t.YzpScX)
				} : n ? {
					placeholder: i.intl.string(i.t.RRvRp6),
					accessibilityLabel: i.intl.string(i.t.RRvRp6)
				} : t.isForumPost() ? {
					placeholder: i.intl.formatToPlainString(i.t.Y6qWLS, {
						channel: o
					}),
					accessibilityLabel: i.intl.formatToPlainString(i.t.KffKoa, {
						channel: u
					})
				} : l.TPd.THREADS.has(t.type) ? {
					placeholder: i.intl.formatToPlainString(i.t["8lzR/f"], {
						channel: o
					}),
					accessibilityLabel: i.intl.formatToPlainString(i.t.UZIMWV, {
						channel: u
					})
				} : t.type === l.d4z.DM ? {
					placeholder: i.intl.formatToPlainString(i.t["4c+CAw"], {
						channel: o
					}),
					accessibilityLabel: i.intl.formatToPlainString(i.t.fqOxbW, {
						channel: u
					})
				} : {
					placeholder: i.intl.formatToPlainString(i.t["8lzR/f"], {
						channel: o
					}),
					accessibilityLabel: i.intl.formatToPlainString(i.t.ih7ZSE, {
						channel: u
					})
				}
			}
		},
		175470: function(e, t, n) {
			n.d(t, {
				n: () => r
			});
			let r = (0, n(97519).U)(e => ({
				clipsButtonRef: null,
				setClipsButtonRef: t => e({
					clipsButtonRef: t
				})
			}))
		},
		475674: function(e, t, n) {
			n.d(t, {
				Z: () => o
			}), n(388685), n(642613);
			var r = n(442837),
				l = n(458725),
				i = n(915525);
			let a = {
				[l.u.STREAM_SOUNDSHARE_FAILED]: 0,
				[l.u.STREAM_SEND_HIGH_PACKET_LOSS]: 1,
				[l.u.STREAM_VIEW_HIGH_PACKET_LOSS]: 1,
				[l.u.STREAM_SEND_LOW_FPS]: 2,
				[l.u.STREAM_VIEW_LOW_FPS]: 2,
				[l.u.STREAM_BAD_NETWORK_QUALITY]: 3
			};

			function o(e) {
				let t = e.id;
				return (0, r.e7)([i.Z], () => {
					let e = Array.from(i.Z.getActiveErrors().values()).filter(e => "streamKey" in e && e.streamKey === t && null != a[e.type]).sort((e, t) => {
						var n, r;
						return (null != (n = a[e.type]) ? n : 0) - (null != (r = a[t.type]) ? r : 0)
					})[0];
					return null == e ? void 0 : e.type
				}, [t])
			}
		},
		517525: function(e, t, n) {
			n.d(t, {
				Z: () => L
			}), n(388685);
			var r = n(255367),
				l = n(73800),
				i = n(120356),
				a = n.n(i),
				o = n(108542),
				u = n(468194),
				s = n(442837),
				c = n(692547),
				d = n(477690),
				f = n(481060),
				p = n(2052),
				m = n(906732),
				g = n(194082),
				E = n(484459),
				h = n(594174),
				v = n(626135),
				S = n(74538),
				b = n(557457),
				O = n(475674),
				y = n(981631),
				Z = n(474936),
				j = n(388032),
				_ = n(374336);

			function I(e) {
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

			function w(e, t) {
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
			let P = (0, u.Mg)(d.Z.LIVE_INDICATOR_BORDER_RADIUS),
				A = {
					opacity: 0,
					transform: "translate3d(100%, 0, 0)"
				},
				x = {
					opacity: 1,
					transform: "translate3d(0%, 0, 0)"
				},
				R = {
					opacity: 0
				},
				N = {
					opacity: 1
				},
				C = {
					borderRadius: "".concat(P, "px ").concat(P, "px ").concat(P, "px ").concat(P, "px")
				},
				T = {
					borderRadius: "0px ".concat(P, "px ").concat(P, "px 0px")
				},
				D = {
					mass: 1,
					tension: 500,
					friction: 18,
					clamp: !0
				},
				M = e => {
					let t, i, {
							participant: o,
							isUpsellEnabled: u,
							shape: d,
							size: E,
							didTrackUpsellViewed: P,
							setDidTrackUpsellViewed: A,
							className: x,
							premiumIndicator: R,
							quality: N
						} = e,
						{
							analyticsLocations: C
						} = (0, m.ZP)(),
						T = null != (0, O.Z)(o);
					try {
						t = (0, b.nG)(N)
					} catch (e) {
						t = !1
					}
					try {
						i = (0, b.tR)(N)
					} catch (e) {
						i = !1
					}
					let D = t || i,
						{
							location: M
						} = (0, p.O)(),
						L = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
						k = u && !S.ZP.isPremium(L, Z.p9.TIER_1) && !S.ZP.canStreamQuality(S.ZP.StreamQuality.MID, L),
						U = l.useCallback(() => {
							k && D && (0, f.ZDy)(async () => {
								let {
									default: e
								} = await n.e("28479").then(n.bind(n, 78865));
								return t => (0, r.jsx)(e, w(I({}, t), {
									analyticsSource: M
								}))
							})
						}, [k, D, M]);
					if (l.useEffect(() => {
							!P && D && (v.default.track(y.rMx.PREMIUM_UPSELL_VIEWED, {
								type: Z.cd.STREAM_QUALITY_INDICATOR,
								has_premium_stream_fps: t,
								has_premium_stream_resolution: i,
								location_stack: C
							}), A(!0))
						}, [t, i, D, P, A, C]), null == N) return null;
					let F = (0, r.jsx)(f.ua7, {
						text: T ? j.intl.string(j.t.q8TiVl) : D ? j.intl.string(j.t.IHgpEh) : j.intl.string(j.t.vLb0VV),
						position: "bottom",
						color: f.ua7.Colors.GREY,
						children: e => (0, r.jsxs)(f.P3F, w(I({}, e), {
							onClick: U,
							className: a()(_.qualityIndicator, E, g.eE[d], T ? _.qualityIndicatorLowQuality : _.qualityIndicatorFullQuality, {
								[_.clickable]: k && D
							}),
							children: [D ? (0, r.jsx)(f.SrA, {
								size: "md",
								color: "currentColor",
								className: _.premiumStreamIcon
							}) : null, (0, r.jsx)("span", {
								className: _.qualityResolution,
								children: (0, b.ml)(N.maxResolution)
							}), (0, r.jsx)("span", {
								children: (0, b.bp)(N.maxFrameRate)
							})]
						}))
					});
					return (0, r.jsx)(f.IGR, {
						text: F,
						className: a()(x, _.qualityIndicatorBadge, {
							[_.qualityIndicatorBadgePremium]: D && R
						}),
						color: c.Z.unsafe_rawColors.PRIMARY_500.css,
						shape: g.eE[d]
					})
				},
				L = e => {
					let {
						participant: t,
						showQuality: n,
						isUpsellEnabled: i = !0,
						size: u,
						className: s,
						premiumIndicator: c
					} = e, [d, p] = l.useState(!1), m = (0, b.W3)(t), {
						reducedMotion: h
					} = l.useContext(f.Sfi), v = n && null != m;
					l.useEffect(() => {
						(0, E.Z)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), {
							dispatchWait: !0
						})
					}, [t]);
					let S = (0, f.Yzy)(v, {
							enter: {
								from: h.enabled ? R : A,
								to: h.enabled ? N : x
							},
							leave: h.enabled ? R : A,
							config: D
						}, "animate-always"),
						O = (0, f.q_F)({
							to: v ? T : C,
							config: D
						}, "animate-always");
					return (e => {
						let {
							className: n,
							popoutProps: l
						} = e;
						return (0, r.jsxs)("div", w(I({
							className: a()(_.streamQualityIndicator, n)
						}, l), {
							children: [S((e, n) => n ? (0, r.jsx)(o.animated.div, {
								style: e,
								children: (0, r.jsx)(M, {
									className: _.liveQualityIndicator,
									participant: t,
									size: u,
									shape: f.Dv2.ROUND_LEFT,
									isUpsellEnabled: i,
									didTrackUpsellViewed: d,
									setDidTrackUpsellViewed: p,
									premiumIndicator: c,
									quality: m
								})
							}) : null), (0, r.jsx)(o.animated.div, {
								style: O,
								className: _.liveIndicator,
								children: (0, r.jsx)(g.ZP, {
									look: g.jZ.RED,
									size: u,
									shape: v ? f.Dv2.ROUND_RIGHT : f.Dv2.ROUND
								})
							})]
						}))
					})({
						className: s
					})
				}
		},
		6572: function(e, t, n) {
			n.d(t, {
				Z: () => d
			}), n(388685);
			var r = n(255367);
			n(73800);
			var l = n(120356),
				i = n.n(l),
				a = n(442837),
				o = n(963838),
				u = n(37091),
				s = n(388032),
				c = n(690296);

			function d(e) {
				let t, {
						channelId: n,
						userId: l
					} = e,
					[d, f] = (0, a.Wu)([u.Z], () => [u.Z.getWaitingHighFive(n, l), u.Z.getCompletedHighFive(n, l)]);
				if (null != f) t = (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)("img", {
						alt: s.intl.string(s.t.W6HwU1),
						src: (0, o._r)({
							name: f[0],
							id: null,
							animated: !1
						}),
						className: i()(c.completeLeft, c.highFive)
					}), (0, r.jsx)("img", {
						alt: s.intl.string(s.t.W6HwU1),
						src: (0, o._r)({
							name: f[1],
							id: null,
							animated: !1
						}),
						className: i()(c.completeRight, c.highFive)
					})]
				});
				else {
					if (null == d) return null;
					t = (0, r.jsx)("img", {
						alt: s.intl.string(s.t.W6HwU1),
						src: (0, o._r)({
							name: d,
							id: null,
							animated: !1
						}),
						className: i()(c.waiting, c.highFive)
					})
				}
				return (0, r.jsx)("div", {
					className: c.root,
					children: t
				})
			}
		},
		352978: function(e, t, n) {
			n.d(t, {
				L: () => p,
				Z: () => m
			}), n(388685);
			var r, l = n(255367),
				i = n(73800),
				a = n(120356),
				o = n.n(a),
				u = n(481060),
				s = n(885524),
				c = n(38755),
				d = n(153066),
				f = n(106209),
				p = ((r = {}).CONTAIN = "contain", r.COVER = "cover", r);
			let m = i.memo(function(e) {
				let {
					streamId: t,
					onResize: n,
					wrapperClassName: r,
					videoComponent: a,
					className: p,
					fit: m = "contain",
					mirror: g = !1,
					paused: E = !1,
					streamPreviewURL: h,
					videoSpinnerContext: v,
					userId: S,
					streamKey: b
				} = e, [O, y] = i.useState(!0);
				(0, c.Z)({
					location: "VideoStream",
					videoSpinnerContext: v,
					userId: S,
					streamId: t,
					loading: O,
					paused: E
				});
				let {
					onReady: Z
				} = (0, s.Z)({
					streamId: t,
					userId: S,
					loading: O,
					videoSpinnerContext: v,
					streamKey: b,
					paused: E
				}), j = i.useCallback(() => {
					y(!1), Z()
				}, [Z]);
				return (0, l.jsxs)("div", {
					className: o()(f.wrapper, r),
					children: [null != t && (0, l.jsx)(a, {
						className: o()(f.video, (0, d.l)(f, "video", m), {
							[f.mirror]: g
						}, p),
						streamId: t,
						onResize: n,
						onReady: j,
						paused: E
					}), E ? null : (0, l.jsx)("div", {
						className: o()(f.previewWrapper, {
							[f.loading]: O
						}),
						children: O && (0, l.jsxs)(i.Fragment, {
							children: [null != h ? (0, l.jsx)("img", {
								src: h,
								alt: "",
								className: f.previewImage
							}) : (0, l.jsx)("div", {
								className: f.emptyPreviewWrapper,
								children: (0, l.jsx)("div", {
									className: f.emptyPreview
								})
							}), (0, l.jsx)(u.$jN, {
								className: f.spinner
							})]
						})
					})]
				})
			})
		},
		936847: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(255367),
				l = n(73800),
				i = n(576125),
				a = n(465858),
				o = n(112843),
				u = n(524484);

			function s(e) {
				let {
					callTileRef: t,
					isFiring: n
				} = e, r = (0, o.Z)(), i = (0, a.Z)(t);
				return l.useEffect(() => {
					n && null != i && null != t && r.fire(i.x + t.clientWidth / 2, i.y + t.clientHeight / 2, {
						countMultiplier: 4
					})
				}, [t, r, n, i]), null
			}

			function c(e) {
				return (0, r.jsx)(i.Z, {
					confettiLocation: u.Hn.CALL_TILE,
					children: (0, r.jsx)(s, function(e) {
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
					}({}, e))
				})
			}
		},
		512384: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r = n(255367);
			n(73800);
			var l = n(399606),
				i = n(481060),
				a = n(351780),
				o = n(170248);

			function u(e) {
				let {
					isShaking: t,
					shakeLocation: n,
					children: u,
					className: s
				} = e, c = (0, o.Z)(n);
				return (0, l.e7)([a.Z], () => a.Z.isEnabled({
					shakeLocation: n
				})) ? (0, r.jsx)(i.UkV, {
					isShaking: t,
					intensity: c,
					className: s,
					children: u
				}) : u
			}
		},
		170248: function(e, t, n) {
			n.d(t, {
				Z: () => a
			});
			var r = n(442837),
				l = n(451478),
				i = n(351780);

			function a(e) {
				let t = (0, r.e7)([l.Z], () => l.Z.isFocused());
				return (0, r.e7)([i.Z], () => i.Z.isEnabled({
					shakeLocation: e
				}) && t ? i.Z.shakeIntensity : 0)
			}
		},
		33316: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r = n(255367),
				l = n(73800),
				i = n(70097),
				a = n(576645),
				o = n(190362);

			function u(e) {
				let {
					baseTileRef: t,
					cleanup: n
				} = e, u = (0, a.bK)(), s = (0, l.useRef)(u);
				return null == t || 0 === t.offsetHeight || s.current ? null : (0, r.jsx)("div", {
					style: {
						width: 1.22 * t.offsetWidth,
						height: 1.22 * t.offsetHeight
					},
					className: o.demoEffectOverlay,
					children: (0, r.jsx)(i.Z, {
						autoPlay: !0,
						className: o.demoEffectImg,
						onEnded: n,
						children: (0, r.jsx)("source", {
							src: "https://cdn.discordapp.com/assets/content/165a5256895e59f96fdfae485b1a4fdc3810995ac694302ca4692aefa97d49dc.webm",
							type: "video/webm"
						})
					})
				})
			}
		},
		98369: function(e, t, n) {
			n.d(t, {
				Z: () => I
			}), n(388685), n(410992), n(227481), n(730884), n(20464), n(341884), n(364341), n(629680), n(505025), n(918970), n(121784), n(644351), n(146733);
			var r, l, i, a = n(442837),
				o = n(46973),
				u = n(570140),
				s = n(569545),
				c = n(314897),
				d = n(19780),
				f = n(959457),
				p = n(630759),
				m = n(729303),
				g = n(651941),
				E = n(981631);
			let h = new Map,
				v = new Map,
				S = !1,
				b = null;

			function O() {
				return f.Z.getAllActiveStreamKeys().reduce((e, t) => {
					let {
						ownerId: n
					} = (0, s.my)(t), r = !0 === h.get(n), l = v.get(t) !== r;
					return v.set(t, r), !!l || e
				}, !1)
			}

			function y() {
				var e;
				let t = null != (e = d.Z.getUserIds()) ? e : new Set,
					n = c.default.getId(),
					r = !0;
				for (let e of t)
					if (n !== e && !0 !== h.get(e)) {
						r = !1;
						break
					} let l = r !== S;
				return S = r, l
			}

			function Z(e) {
				let {
					userId: t
				} = e;
				if (c.default.getId() === t) return !1;
				let n = function(e) {
						let t = d.Z.getSecureFramesRosterMapEntry(e);
						if (null == t) return !1;
						let n = new Uint8Array(t),
							r = g.Z.isKeyVerified(e, n) || m.Z.isKeyVerified(e, n),
							l = (0, p.UB)(e, [d.Z, f.Z]),
							i = r && !l,
							a = i !== h.get(e);
						return h.set(e, i), a
					}(t),
					r = O(),
					l = y();
				return n || r || l
			}

			function j() {
				h.clear(), v.clear(), S = !1
			}
			class _ extends(r = a.ZP.Store) {
				initialize() {
					this.waitFor(m.Z, g.Z, d.Z, f.Z)
				}
				isCallVerified() {
					return S
				}
				isStreamVerified(e) {
					return v.get(e)
				}
				isUserVerified(e) {
					return h.get(e)
				}
			}
			i = "SecureFramesVerifiedStore", (l = "displayName") in _ ? Object.defineProperty(_, l, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : _[l] = i;
			let I = new _(u.Z, {
				CONNECTION_OPEN: j,
				VOICE_CHANNEL_SELECT: function(e) {
					let {
						channelId: t
					} = e;
					if (t === b) return !1;
					b = t, j()
				},
				RTC_CONNECTION_STATE: function(e) {
					let {
						streamKey: t,
						state: n,
						context: r
					} = e;
					if (n !== E.hes.DISCONNECTED) return !1;
					switch (r) {
						case o.Yn.STREAM:
							if (null == t) return !1;
							return v.delete(t), y();
						case o.Yn.DEFAULT:
							j()
					}
				},
				RTC_CONNECTION_ROSTER_MAP_UPDATE: function(e) {
					let {
						userIds: t
					} = e, n = c.default.getId(), r = t.reduce((e, t) => n === t ? e : !!Z({
						userId: t
					}) || e, !1), l = O(), i = y();
					return r || l || i
				},
				SECURE_FRAMES_TRANSIENT_KEY_CREATE: Z,
				SECURE_FRAMES_TRANSIENT_KEY_DELETE: Z,
				SECURE_FRAMES_VERIFIED_KEY_CREATE: Z,
				SECURE_FRAMES_VERIFIED_KEY_DELETE: Z,
				SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: Z
			})
		},
		729303: function(e, t, n) {
			n.d(t, {
				Z: () => c
			}), n(388685), n(410992), n(227481), n(730884), n(20464), n(341884), n(364341), n(629680), n(505025), n(918970), n(121784), n(644351), n(146733);
			var r, l, i, a = n(442837),
				o = n(570140);
			let u = new Map;
			class s extends(r = a.ZP.Store) {
				getUsers() {
					return u
				}
				isKeyVerified(e, t) {
					let n = u.get(e);
					if (null == t || null == n || n.length !== t.length) return !1;
					for (let e = 0; e < t.length; e++)
						if (t[e] !== n[e]) return !1;
					return !0
				}
			}
			i = "TransientKeyStore", (l = "displayName") in s ? Object.defineProperty(s, l, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : s[l] = i;
			let c = new s(o.Z, {
				CONNECTION_OPEN: function() {
					u.clear()
				},
				SECURE_FRAMES_TRANSIENT_KEY_CREATE: function(e) {
					let {
						userId: t,
						key: n
					} = e, r = new Uint8Array(n);
					u.set(t, r)
				},
				SECURE_FRAMES_TRANSIENT_KEY_DELETE: function(e) {
					let {
						userId: t
					} = e;
					return u.delete(t)
				}
			})
		},
		210975: function(e, t, n) {
			n.d(t, {
				m$: () => f,
				wV: () => c,
				zU: () => d
			});
			var r = n(442837),
				l = n(569545),
				i = n(314897),
				a = n(19780),
				o = n(98369),
				u = n(277642),
				s = n(441894);

			function c(e) {
				let {
					userId: t,
					channelId: n
				} = e, l = (0, s.J)({
					channelId: n
				});
				return (0, r.e7)([o.Z, i.default, a.Z], () => null != t && l && a.Z.isUserConnected(t) && i.default.getId() !== t && o.Z.isUserVerified(t), [l, t])
			}

			function d(e) {
				let {
					streamKey: t,
					channelId: n
				} = e, a = (0, s.J)({
					channelId: n
				}), c = (0, u.t)(t);
				return (0, r.e7)([o.Z, i.default], () => {
					if (!a || c || null == t) return !1;
					let e = i.default.getId(),
						{
							ownerId: n
						} = (0, l.my)(t);
					return n !== e && o.Z.isStreamVerified(t)
				}, [c, a, t])
			}

			function f(e) {
				let {
					channelId: t
				} = e, n = (0, s.J)({
					channelId: t
				}), l = (0, u.r)();
				return (0, r.e7)([o.Z], () => !!n && !l && o.Z.isCallVerified(), [l, n])
			}
		},
		125268: function(e, t, n) {
			n.d(t, {
				AX: () => s,
				BR: () => d,
				Bo: () => E,
				Df: () => f,
				LT: () => h,
				ZZ: () => p,
				cV: () => c,
				fW: () => g,
				gr: () => m,
				oW: () => u
			});
			var r = n(261470),
				l = n(544891),
				i = n(570140),
				a = n(984063),
				o = n(981631);

			function u(e, t, n, r, l) {
				i.Z.dispatch({
					type: "SHARED_CANVAS_DRAW_LINE_POINT",
					channelId: e,
					userId: n,
					lineId: t,
					streamerId: r,
					point: l
				})
			}

			function s(e, t, n, r) {
				return l.tn.post({
					url: o.ANM.SHARED_CANVAS_LINES(e, n),
					body: {
						line_id: t,
						points: r
					},
					rejectWithError: !1
				})
			}

			function c(e, t, n, r) {
				i.Z.dispatch({
					type: "SHARED_CANVAS_UPDATE_LINE_POINTS",
					userId: t,
					lineId: e,
					newPoints: r,
					streamerId: n
				})
			}

			function d(e, t, n) {
				return l.tn.post({
					url: o.ANM.SHARED_CANVAS_EMOJI_HOSES(e, t),
					body: {
						emoji_hose: n
					},
					rejectWithError: !1
				})
			}

			function f(e, t, n) {
				l.tn.del({
					url: o.ANM.SHARED_CANVAS_EMOJI_HOSE(e, t, n),
					backoff: new r.Z,
					rejectWithError: !0
				})
			}

			function p(e, t) {
				t.state = a.f.STOP, i.Z.dispatch({
					type: "SHARED_CANVAS_UPDATE_EMOJI_HOSE",
					emojiHose: t,
					userId: t.userId,
					streamerId: e
				})
			}

			function m(e, t, n) {
				i.Z.dispatch({
					type: "SHARED_CANVAS_UPDATE_EMOJI_HOSE",
					emojiHose: e,
					userId: t,
					streamerId: n
				})
			}

			function g(e, t) {
				i.Z.dispatch({
					type: "SHARED_CANVAS_CLEAR_DRAWABLES",
					drawables: e,
					streamerId: t
				})
			}

			function E(e) {
				i.Z.dispatch({
					type: "SHARED_CANVAS_SET_DRAW_MODE",
					drawMode: e
				})
			}

			function h() {
				i.Z.dispatch({
					type: "TOGGLE_OVERLAY_CANVAS"
				})
			}
		},
		813900: function(e, t, n) {
			n.d(t, {
				FO: () => o,
				Fq: () => a,
				Ks: () => r,
				q2: () => i,
				qh: () => l
			});
			let r = 80,
				l = 48,
				i = 3,
				a = 500,
				o = 5e3
		},
		822183: function(e, t, n) {
			n.d(t, {
				Z: () => r
			});
			let r = (0, n(818083).B)({
				kind: "guild",
				id: "2023-01_shared_canvas",
				label: "Shared Canvas",
				defaultConfig: {
					isSharedCanvasEnabled: !1
				},
				treatments: [{
					id: 1,
					label: "Enable Shared Canvas",
					config: {
						isSharedCanvasEnabled: !0
					}
				}]
			})
		},
		673125: function(e, t, n) {
			n.d(t, {
				Z: () => O
			}), n(539854), n(388685);
			var r, l = n(442837),
				i = n(570140),
				a = n(633302),
				o = n(594174),
				u = n(176354),
				s = n(984063),
				c = n(88315),
				d = n(813900);

			function f(e, t, n) {
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
						r = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), r.forEach(function(t) {
						f(e, t, n[t])
					})
				}
				return e
			}
			let m = {},
				g = {},
				E = {},
				h = !0,
				v = null;

			function S(e) {
				if (null == g[e]) {
					let t = o.default.getUser(e);
					if (null == t) return;
					let n = t.getAvatarURL(null, d.Ks),
						r = new Image;
					r.src = n, g[e] = r
				}
			}
			class b extends(r = l.ZP.Store) {
				get visibleOverlayCanvas() {
					return h
				}
				getDrawables(e) {
					return null != m[e] ? m[e] : []
				}
				getAvatarImage(e) {
					return g[e]
				}
				getEmojiImage(e) {
					return E[e]
				}
				getDrawMode() {
					return v
				}
			}
			f(b, "displayName", "SharedCanvasStore");
			let O = new b(i.Z, {
				SHARED_CANVAS_UPDATE_LINE_POINTS: function(e) {
					let {
						lineId: t,
						newPoints: n,
						userId: r,
						streamerId: l
					} = e, i = m[l];
					if (null == i) m[l] = [{
						type: s.W.LINE,
						id: t,
						userId: r,
						points: n
					}];
					else {
						let e = i.find(e => e.id === t);
						null == e ? i.push({
							type: s.W.LINE,
							id: t,
							userId: r,
							points: n
						}) : (0, c.P7)(e) && e.points.push(...n)
					}
					S(r)
				},
				SHARED_CANVAS_UPDATE_EMOJI_HOSE: function(e) {
					var t, n, r, l, i;
					let {
						emojiHose: o,
						streamerId: c,
						userId: f
					} = e, g = (l = p({}, o), i = i = {
						type: s.W.EMOJI_HOSE
					}, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
						var n = Object.keys(e);
						if (Object.getOwnPropertySymbols) {
							var r = Object.getOwnPropertySymbols(e);
							n.push.apply(n, r)
						}
						return n
					})(Object(i)).forEach(function(e) {
						Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
					}), l);
					if (null == m[c]) m[c] = [g];
					else {
						let e = m[c].findIndex(e => e.id === o.id);
						e >= 0 ? m[c][e] = p({}, m[c][e], g) : m[c].push(g)
					}
					let h = null != (n = null != (t = o.emojiId) ? t : o.emojiName) ? n : "";
					if (null == E[h]) {
						let e = null != o.emojiName ? a.ZP.convertNameToSurrogate(o.emojiName) : null;
						E[h] = new Image, E[h].src = (0, u.qc)({
							id: o.emojiId,
							name: null != (r = null != e ? e : o.emojiName) ? r : "",
							animated: !1
						}, d.qh)
					}
					S(f)
				},
				SHARED_CANVAS_CLEAR_DRAWABLES: function(e) {
					let {
						drawables: t,
						streamerId: n
					} = e;
					if (null != m[n]) {
						let e = new Set;
						t.forEach(t => e.add(t.id)), m[n] = m[n].filter(t => !e.has(t.id))
					}
				},
				SHARED_CANVAS_SET_DRAW_MODE: function(e) {
					let {
						drawMode: t
					} = e;
					v = t
				},
				TOGGLE_OVERLAY_CANVAS: function(e) {
					let {} = e;
					h = !h
				}
			})
		},
		984063: function(e, t, n) {
			n.d(t, {
				W: () => i,
				f: () => a
			});
			var r, l, i = ((r = {}).LINE = "line", r.EMOJI_HOSE = "emoji_hose", r),
				a = ((l = {}).START = "START", l.STOP = "STOP", l)
		},
		88315: function(e, t, n) {
			n.d(t, {
				P7: () => m,
				RR: () => p,
				UN: () => c,
				bg: () => g,
				hn: () => d,
				np: () => f
			});
			var r = n(979590),
				l = n.n(r),
				i = n(866442),
				a = n(220082),
				o = n(594174),
				u = n(984063),
				s = n(813900);

			function c(e) {
				let t = e.current,
					n = null == t ? void 0 : t.getContext("2d");
				null != t && null != n && n.clearRect(0, 0, t.width, t.height)
			}

			function d(e, t) {
				let {
					width: n,
					height: r,
					left: l,
					top: i
				} = e.getBoundingClientRect();
				return {
					x: (t.clientX - l) / n,
					y: (t.clientY - i) / r
				}
			}

			function f(e, t) {
				return Math.round(e * t * window.devicePixelRatio)
			}

			function p(e, t, n) {
				return {
					x: f(e.x, t),
					y: f(e.y, n),
					deltaTime: e.deltaTime
				}
			}

			function m(e) {
				return e.type === u.W.LINE
			}

			function g(e, t, n, r) {
				var u;
				let c = o.default.getUser(e),
					d = null == c ? void 0 : c.getAvatarURL(null, s.Ks),
					f = null != d ? null == (u = a.SR.getState().palette[d]) ? void 0 : u[0] : null,
					p = null != f ? "#".concat(l()({
						r: f[0],
						g: f[1],
						b: f[2]
					}).toHex()) : r,
					m = (0, i.Bd)((0, i._i)(p)) > .5 ? n : t;
				return {
					fillColor: p,
					outlineColor: m
				}
			}
		},
		199766: function(e, t, n) {
			n.d(t, {
				I: () => l,
				T: () => i
			});
			var r = n(673125);

			function l(e, t, n, r, l) {
				e.save(), e.beginPath(), e.fillStyle = r, e.arc(t, n, Math.round(20 * window.devicePixelRatio) / 2 + l, 0, 2 * Math.PI), e.fill(), e.restore()
			}

			function i(e, t, n, l) {
				e.save();
				let i = r.Z.getAvatarImage(l);
				if (null == i) return;
				let a = 20 * window.devicePixelRatio;
				e.beginPath(), e.arc(t, n, a / 2, 0, 2 * Math.PI), e.clip(), e.drawImage(i, t - a / 2, n - a / 2, a, a), e.restore()
			}
		},
		262433: function(e, t, n) {
			n.d(t, {
				U: () => g,
				Z: () => h
			}), n(539854);
			var r = n(392711),
				l = n.n(r),
				i = n(772848),
				a = n(97519),
				o = n(731965),
				u = n(125268),
				s = n(673125),
				c = n(984063),
				d = n(88315),
				f = n(199766),
				p = n(813900);
			let m = {
					X_OFFSET: 2 * p.qh,
					Y_OFFSET: 25,
					X_SPEED: .5,
					Y_SPEED_MIN: -1,
					Y_SPEED_MAX: -5,
					OPACITY: 1,
					OPACITY_SPEED_MIN: .01,
					OPACITY_SPEED_MAX: .05,
					SIZE_MIN: p.qh / 2,
					SIZE_MAX: p.qh
				},
				g = (0, a.U)(() => ({
					particles: {},
					lastSpawned: {}
				}));

			function E(e, t) {
				var n;
				l()(null != (n = g.getState().particles[e.id]) ? n : {}).forEach(t)
			}

			function h(e) {
				var t, n, r;
				let {
					emojiHose: a,
					context: h,
					canvasWidth: v,
					canvasHeight: S,
					fallbackColor: b,
					outlineColorDark: O,
					outlineColorLight: y,
					streamerId: Z,
					deadDrawables: j
				} = e;
				h.save();
				let _ = s.Z.getEmojiImage(null != (n = null != (t = a.emojiId) ? t : a.emojiName) ? n : ""),
					I = (0, d.np)(a.x, v),
					w = (0, d.np)(a.y, S),
					{
						outlineColor: P
					} = (0, d.bg)(a.userId, O, y, b);
				E(a, e => {
						e.x += e.xSpeed * window.devicePixelRatio, e.y += e.ySpeed * window.devicePixelRatio, e.opacity -= e.opacitySpeed, e.opacity <= 0 && (0, o.j)(() => {
							g.setState(t => (delete t.particles[a.id][e.id], 0 === Object.keys(t.particles[a.id]).length && delete t.particles[a.id], t))
						})
					}),
					function(e, t, n) {
						var r;
						let a = null != (r = g.getState().lastSpawned[e.id]) ? r : 0,
							u = Date.now();
						!(a + 100 > u) && e.state !== c.f.STOP && (.8 >= Math.random() || a + 300 < u) && (0, o.j)(() => {
							g.setState(r => {
								var a;
								let o = null != (a = r.particles[e.id]) ? a : {},
									u = l().random(1, 2);
								for (let e = 0; e < u; e++) {
									let e = {
										id: (0, i.Z)(),
										x: t + l().random(-m.X_OFFSET, m.X_OFFSET),
										y: n + l().random(-m.Y_OFFSET, m.Y_OFFSET),
										xSpeed: l().random(-m.X_SPEED, m.X_SPEED),
										ySpeed: l().random(m.Y_SPEED_MIN, m.Y_SPEED_MAX),
										opacity: m.OPACITY,
										opacitySpeed: l().random(m.OPACITY_SPEED_MIN, m.OPACITY_SPEED_MAX),
										size: l().random(m.SIZE_MIN, m.SIZE_MAX)
									};
									o[e.id] = e
								}
								return r.particles[e.id] = o, r.lastSpawned[e.id] = Date.now(), r
							})
						})
					}(a, I, w), (0, f.I)(h, I, w, P, p.q2), (0, f.T)(h, I, w, a.userId), E(a, e => (function(e, t, n) {
						if (null == t) return;
						let r = n.size * window.devicePixelRatio,
							l = n.x - r / 2 * window.devicePixelRatio,
							i = n.y - 1.2 * r * window.devicePixelRatio;
						e.globalAlpha = n.opacity, e.drawImage(t, r / 2 + l, r / 2 + i, r, r)
					})(h, _, e)), a.lastUpdatedAt + p.FO < Date.now() && (0, u.ZZ)(Z, a), a.state !== c.f.STOP || Object.keys(null != (r = g.getState().particles[a.id]) ? r : {}).length > 0 || j.push(a), h.restore()
			}
		},
		400321: function(e, t, n) {
			n.d(t, {
				Z: () => a
			}), n(539854);
			var r = n(88315),
				l = n(199766),
				i = n(813900);

			function a(e) {
				let {
					line: t,
					context: n,
					canvasWidth: a,
					canvasHeight: o,
					fallbackColor: u,
					outlineColorDark: s,
					outlineColorLight: c,
					linesDrawnAt: d,
					deadDrawables: f
				} = e;
				null == d.current[t.id] && (d.current[t.id] = Date.now()), n.lineCap = "round", n.lineJoin = "round";
				let p = t.points.map(e => (0, r.RR)(e, a, o)),
					m = d.current[t.id],
					g = e => m + e.deltaTime,
					E = e => g(e) + 1500 >= Date.now(),
					h = e => g(e) <= Date.now() && E(e),
					v = p.find(h);
				if (null == v) {
					E(t.points[t.points.length - 1]) || f.push(t);
					return
				}
				let S = (e, t) => {
						let r = null;
						n.lineWidth = t * window.devicePixelRatio, n.strokeStyle = e, n.beginPath(), n.moveTo(v.x, v.y);
						for (let e = 1; e < p.length; e++) {
							let t = p[e];
							h(t) && (n.lineTo(t.x, t.y), r = t)
						}
						return n.stroke(), r
					},
					{
						fillColor: b,
						outlineColor: O
					} = (0, r.bg)(t.userId, s, c, u),
					y = S(O, 6 + i.q2),
					Z = null != y && h(y);
				Z && (0, l.I)(n, y.x, y.y, O, i.q2), S(b, 6), Z && (0, l.T)(n, y.x, y.y, t.userId)
			}
		},
		179295: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(73800),
				l = n(442837),
				i = n(569545),
				a = n(959457),
				o = n(626135),
				u = n(981631),
				s = n(474936);

			function c(e, t) {
				let {
					handleMouseDown: n,
					handleMouseMove: c,
					handleMouseUp: d,
					handleMouseEnter: f
				} = e, p = r.useRef(null), m = (0, l.e7)([a.Z], () => a.Z.getRTCConnection((0, i.V9)(t))), g = r.useCallback((e, t, r) => {
					p.current = Date.now(), n(e, t, r)
				}, [n]);
				return {
					handleMouseUp: r.useCallback((e, t, n) => {
						if (d(e, t, n), null != p.current) {
							var r;
							null != m && (r = Date.now() - p.current, o.default.track(u.rMx.PREMIUM_FEATURE_USAGE, {
								feature_name: "".concat(s.QP.SHARED_CANVAS, "_").concat(e.type),
								feature_tier: s.h1.FREE,
								media_session_id: m.getMediaSessionId(),
								parent_media_session_id: m.parentMediaSessionId,
								guild_id: m.guildId,
								duration: r
							})), p.current = null
						}
					}, [d, m]),
					handleMouseDown: g,
					handleMouseMove: c,
					handleMouseEnter: f
				}
			}
		},
		370663: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var r = n(73800),
				l = n(772848),
				i = n(125268);
			let a = () => {};

			function o(e, t, n) {
				let o = r.useRef((0, l.Z)()),
					u = r.useRef(Date.now()),
					s = r.useCallback((r, l) => {
						let a = {
							x: r,
							y: l,
							deltaTime: Date.now() - u.current
						};
						(0, i.oW)(t, o.current, e, n, a), (0, i.cV)(o.current, e, n, [a])
					}, [t, n, e]),
					c = r.useCallback((e, t, n) => {
						o.current = (0, l.Z)(), u.current = Date.now(), s(t, n)
					}, [s]),
					d = r.useCallback((e, t, n) => s(t, n), [s]),
					f = r.useCallback((e, t, n) => c(e, t, n), [c]);
				return r.useMemo(() => ({
					handleMouseDown: c,
					handleMouseMove: d,
					handleMouseUp: a,
					handleMouseEnter: f
				}), [c, f, d])
			}
		},
		743597: function(e, t, n) {
			n.d(t, {
				Z: () => m
			});
			var r = n(73800),
				l = n(392711),
				i = n.n(l),
				a = n(772848),
				o = n(846519),
				u = n(125268),
				s = n(984063),
				c = n(813900);

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
			let p = i().debounce(u.BR, c.Fq, {
				maxWait: c.Fq
			});

			function m(e, t, n) {
				let l = r.useRef((0, a.Z)()),
					i = r.useRef(new o.Xp),
					m = r.useCallback(r => {
						r.lastUpdatedAt = Date.now(), (0, u.gr)(r, e, n), (0, u.BR)(t, n, r)
					}, [t, n, e]),
					g = r.useCallback((r, o, p) => {
						l.current = (0, a.Z)();
						let g = f(d({}, r), {
							id: l.current,
							x: o,
							y: p,
							userId: e,
							state: s.f.START,
							lastUpdatedAt: Date.now()
						});
						(0, u.BR)(t, n, g), (0, u.gr)(g, e, n), i.current.start(c.FO, () => m(g))
					}, [e, t, n, m]),
					E = r.useCallback((r, a, o) => {
						let g = f(d({}, r), {
							id: l.current,
							x: a,
							y: o,
							userId: e,
							state: s.f.START,
							lastUpdatedAt: Date.now()
						});
						p(t, n, g), (0, u.gr)(g, e, n), i.current.start(c.FO, () => m(g))
					}, [e, t, n, m]),
					h = r.useCallback((r, a, o) => {
						p.cancel(), (0, u.Df)(t, n, l.current), (0, u.gr)(f(d({}, r), {
							id: l.current,
							x: a,
							y: o,
							userId: e,
							state: s.f.STOP,
							lastUpdatedAt: Date.now()
						}), e, n), i.current.stop()
					}, [t, n, e]),
					v = r.useCallback((e, t, n) => E(e, t, n), [E]);
				return r.useMemo(() => ({
					handleMouseDown: g,
					handleMouseMove: E,
					handleMouseUp: h,
					handleMouseEnter: v
				}), [g, v, E, h])
			}
		},
		364125: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var r = n(73800),
				l = n(399606),
				i = n(673125),
				a = n(984063),
				o = n(88315),
				u = n(179295),
				s = n(370663),
				c = n(743597);

			function d(e) {
				let {
					user: t,
					channelId: n,
					streamerId: d,
					stream: f,
					focused: p,
					canvas: m
				} = e, g = r.useRef(!1), E = (0, l.e7)([i.Z], () => i.Z.getDrawMode()), h = (0, u.Z)((0, s.Z)(t.id, n, d), f), v = (0, u.Z)((0, c.Z)(t.id, n, d), f), S = r.useCallback((e, t, n) => {
					if (null == m) return;
					let {
						x: r,
						y: l
					} = (0, o.hn)(m, n);
					switch (t.type) {
						case a.W.LINE:
							return h[e](t, r, l);
						case a.W.EMOJI_HOSE:
							return v[e](t, r, l)
					}
				}, [m, h, v]), b = r.useCallback(e => {
					p && null != E && (e.stopPropagation(), g.current = !0, S("handleMouseDown", E, e))
				}, [S, E, p]), O = r.useCallback(e => {
					p && null != E && (e.stopPropagation(), g.current && S("handleMouseMove", E, e))
				}, [S, E, p]), y = r.useCallback(e => {
					p && null != E && (e.stopPropagation(), g.current = !1, S("handleMouseUp", E, e))
				}, [S, E, p]), Z = r.useCallback(e => {
					g.current && null != E && S("handleMouseEnter", E, e)
				}, [S, E]);
				return r.useEffect(() => {
					let e = e => {
						null != E && (g.current = !1, S("handleMouseUp", E, e))
					};
					return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e)
				}, [S, E]), {
					handleClick: r.useCallback(e => {
						p && null != E && e.stopPropagation()
					}, [E, p]),
					handleMouseDown: b,
					handleMouseEnter: Z,
					handleMouseMove: O,
					handleMouseUp: y
				}
			}
		},
		590076: function(e, t, n) {
			n.d(t, {
				Z: () => g
			});
			var r = n(255367),
				l = n(73800),
				i = n(512722),
				a = n.n(i),
				o = n(399606),
				u = n(618158),
				s = n(594174),
				c = n(822183),
				d = n(364125),
				f = n(90753),
				p = n(613050);

			function m(e) {
				let {
					focused: t,
					channelId: n,
					streamerId: i,
					stream: c
				} = e, m = l.useRef(null), g = (0, o.e7)([s.default], () => s.default.getCurrentUser());
				a()(null != g, "user cannot be null"), (0, f.Z)(m, g, i, n);
				let {
					handleClick: E,
					handleMouseDown: h,
					handleMouseEnter: v,
					handleMouseMove: S,
					handleMouseUp: b
				} = (0, d.Z)({
					user: g,
					channelId: n,
					streamerId: i,
					stream: c,
					focused: t,
					canvas: m.current
				});
				return (0, r.jsx)(u.Z, {
					children: (0, r.jsx)("canvas", {
						ref: m,
						onClick: E,
						onMouseDown: h,
						onMouseEnter: v,
						onMouseMove: S,
						onMouseUp: b,
						className: p.sharedCanvas
					})
				})
			}

			function g(e) {
				let {
					isSharedCanvasEnabled: t
				} = c.Z.useExperiment({
					guildId: e.guildId,
					location: "d0de1c_1"
				}, {
					autoTrackExposure: !0
				});
				return !t || e.hasScreenMessage ? null : (0, r.jsx)(m, function(e) {
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
				}({}, e))
			}
		},
		90753: function(e, t, n) {
			n.d(t, {
				Z: () => h
			}), n(539854);
			var r = n(73800),
				l = n(846519),
				i = n(692547),
				a = n(481060),
				o = n(220082),
				u = n(979651),
				s = n(125268),
				c = n(673125),
				d = n(984063),
				f = n(88315),
				p = n(262433),
				m = n(400321),
				g = n(813900);
			let E = 1e3 / 60;

			function h(e, t, n, h) {
				let v = (0, a.dQu)(i.Z.unsafe_rawColors.BRAND_500).hex(),
					S = (0, a.dQu)(i.Z.unsafe_rawColors.BLACK_500).hex(),
					b = (0, a.dQu)(i.Z.unsafe_rawColors.WHITE_500).hex(),
					O = r.useRef({}),
					y = r.useRef(new l.Xp),
					Z = r.useCallback(t => {
						let n = c.Z.getDrawables(t);
						(0, f.UN)(e),
						function(e) {
							let {
								canvasRef: t,
								drawables: n,
								fallbackColor: r,
								linesDrawnAt: l,
								streamerId: i,
								channelId: a,
								outlineColorDark: o,
								outlineColorLight: c
							} = e;
							if (0 === n.length) return;
							let f = t.current;
							if (null == f) return;
							let g = f.getContext("2d");
							if (null == g) return;
							let {
								width: E,
								height: h
							} = f.getBoundingClientRect(), v = [];
							n.forEach(e => {
								if (null == u.Z.getVoiceStateForChannel(a, e.userId)) return void v.push(e);
								! function(e) {
									let {
										drawable: t,
										context: n,
										canvasWidth: r,
										canvasHeight: l,
										fallbackColor: i,
										outlineColorDark: a,
										outlineColorLight: o,
										linesDrawnAt: u,
										streamerId: s,
										deadDrawables: c
									} = e;
									switch (t.type) {
										case d.W.LINE:
											return (0, m.Z)({
												line: t,
												context: n,
												canvasWidth: r,
												canvasHeight: l,
												fallbackColor: i,
												outlineColorDark: a,
												outlineColorLight: o,
												linesDrawnAt: u,
												deadDrawables: c
											});
										case d.W.EMOJI_HOSE:
											return (0, p.Z)({
												emojiHose: t,
												context: n,
												canvasWidth: r,
												canvasHeight: l,
												fallbackColor: i,
												outlineColorDark: a,
												outlineColorLight: o,
												streamerId: s,
												deadDrawables: c
											})
									}
								}({
									drawable: e,
									context: g,
									canvasWidth: E,
									canvasHeight: h,
									fallbackColor: r,
									outlineColorDark: o,
									outlineColorLight: c,
									linesDrawnAt: l,
									deadDrawables: v,
									streamerId: i
								})
							}), v.length > 0 && (0, s.fW)(v, i)
						}({
							canvasRef: e,
							drawables: n,
							fallbackColor: v,
							linesDrawnAt: O,
							streamerId: t,
							outlineColorDark: S,
							outlineColorLight: b,
							channelId: h
						})
					}, [e, h, v, S, b]);
				r.useEffect(() => {
					let t = new ResizeObserver(() => {
						let t = e.current;
						if (null == t) return;
						let {
							width: r,
							height: l
						} = t.getBoundingClientRect();
						t.width = r * window.devicePixelRatio, t.height = l * window.devicePixelRatio, Z(n)
					});
					return null != e.current && t.observe(e.current), () => t.disconnect()
				}, [e, Z, n]);
				let j = r.useCallback(() => {
					let t = c.Z.getDrawables(n),
						r = p.U.getState().particles,
						l = t.length > 0 || Object.keys(r).length > 0;
					l && null == y.current._ref && (null == y.current._ref ? (Z(n), y.current.start(E, () => Z(n))) : l || null == y.current._ref || (y.current.stop(), (0, f.UN)(e)))
				}, [e, Z, n]);
				r.useEffect(() => {
					let e = y.current;
					return c.Z.addChangeListener(j), j(), (0, o.vM)(t.getAvatarURL(null, g.Ks)), () => {
						c.Z.removeChangeListener(j), e.stop()
					}
				})
			}
		},
		584729: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var r = n(271383),
				l = n(5192),
				i = n(354459),
				a = n(388032);

			function o(e, t, n) {
				var o, u;
				if (t.type === i.fO.ACTIVITY) return null != (u = null == n ? void 0 : n.name) ? u : null;
				let s = r.ZP.isGuestOrLurker(e.guild_id, null == (o = t.user) ? void 0 : o.id);
				return l.ZP.getName(e.getGuildId(), e.id, t.user) + (s ? " ".concat(a.intl.string(a.t["pFO/Pj"])) : "")
			}
		},
		44136: function(e, t, n) {
			n.d(t, {
				ZP: () => l
			}), n(442837), n(314897), n(131951);
			var r = n(354459);

			function l(e) {
				var t, n;
				return e.type !== r.fO.ACTIVITY && ((0, r._5)(e) ? null != e.streamId : null != (n = null == (t = e.voiceState) ? void 0 : t.selfVideo) && n)
			}
		},
		334374: function(e, t, n) {
			n.d(t, {
				Z: () => u
			}), n(388685), n(35282), n(784620), n(973216);
			var r = n(255367),
				l = n(73800),
				i = n(414910),
				a = n(226961),
				o = n(422636);

			function u(e) {
				let {
					currentUserId: t,
					participant: n
				} = e, u = (0, i.Z)(n.type), [s, c] = l.useState(), [d, f] = l.useState(), [p, m] = l.useState(), g = n.id.split(":").at(-1), E = t === g, h = l.useCallback((e, t, n) => {
					var r, l, i;
					let o = n ? a.ZP.getOutboundStats(t) : a.ZP.getInboundStats(e, t);
					c(null != (r = null == o ? void 0 : o.codec) ? r : "unknown"), f(void 0 === (l = null == o ? void 0 : o.resolution) || 0 === l.width && 0 === l.height ? "unknown" : l.width + " x " + l.height), m((null == o ? void 0 : o.bitrateEstimate) !== void 0 ? (i = o.bitrateEstimate, "".concat((i / 1e3).toFixed(2), " Kbps")) : "unknown")
				}, []);
				return l.useEffect(() => {
					let e = () => h(g, u, E);
					e();
					let t = setInterval(e, 1e3);
					return () => clearInterval(t)
				}, [E, g, u, h]), (0, r.jsxs)("div", {
					className: o.streamInfoContainer,
					children: [(0, r.jsx)("div", {
						children: (0, r.jsx)("strong", {
							children: "Stream Info"
						})
					}), (0, r.jsxs)("div", {
						className: o.infoRow,
						children: [(0, r.jsx)("span", {
							children: "Video Codec: "
						}), (0, r.jsx)("strong", {
							children: s
						})]
					}), (0, r.jsxs)("div", {
						className: o.infoRow,
						children: [(0, r.jsx)("span", {
							children: "Resolution: "
						}), (0, r.jsx)("strong", {
							children: d
						})]
					}), E && (0, r.jsxs)("div", {
						className: o.infoRow,
						children: [(0, r.jsx)("span", {
							children: "Bitrate Estimate: "
						}), (0, r.jsx)("strong", {
							children: p
						})]
					})]
				})
			}
		},
		849171: function(e, t, n) {
			n.d(t, {
				OV: () => M,
				ZP: () => k
			}), n(388685);
			var r = n(255367),
				l = n(73800),
				i = n(120356),
				a = n.n(i),
				o = n(442837),
				u = n(755721),
				s = n(481060),
				c = n(2052),
				d = n(317381),
				f = n(638880),
				p = n(413458),
				m = n(16609),
				g = n(527805),
				E = n(716600),
				h = n(778569),
				v = n(563218),
				S = n(318891),
				b = n(884338),
				O = n(719296),
				y = n(958185),
				Z = n(100527),
				j = n(906732),
				_ = n(890280),
				I = n(835473),
				w = n(522474),
				P = n(314897),
				A = n(819640),
				x = n(594174),
				R = n(823379),
				N = n(5192),
				C = n(388032),
				T = n(754438);
			let D = ["embedded_background"];

			function M(e) {
				let {
					avatarSize: t,
					guildId: n,
					channelId: l,
					users: i
				} = e, a = null != t ? t : s.EFr.SIZE_32, o = (0, s.pxk)(a);
				return (0, r.jsx)(b.ZP, {
					size: o,
					guildId: n,
					users: i,
					max: 4,
					renderUser: e => {
						if (null == e || e === b.ag) return null;
						let t = N.ZP.getName(n, l, e);
						return (0, r.jsx)(s.DY3, {
							text: t,
							color: s.FGA.GREY,
							children: (0, r.jsx)("img", {
								src: e.getAvatarURL(n, o),
								alt: t,
								className: T.avatar
							}, e.id)
						}, e.id)
					}
				})
			}

			function L(e) {
				var t, n;
				let {
					participants: i,
					application: m,
					channel: E,
					width: h
				} = e, v = h > 400 ? 2 : +(h > 300), [S] = h > 400 ? [s.EFr.SIZE_56, 56] : h > 300 ? [s.EFr.SIZE_32, 32] : [s.EFr.SIZE_24, 24], b = (0, o.Wu)([x.default, P.default], () => Array.from(i).map(e => (0, p.J)(e, P.default) ? null : x.default.getUser(e.userId)).filter(R.lm)), O = (0, o.e7)([d.ZP], () => {
					var e;
					return null != (e = d.ZP.getEmbeddedActivitiesForChannel(E.id).find(e => e.applicationId === m.id)) ? e : d.ZP.getEmbeddedActivitiesForStartingChannel(E.id).find(e => e.applicationId === m.id)
				}), {
					analyticsLocations: y
				} = (0, j.ZP)(), Z = (0, c.O)(), I = N.ZP.getName(E.getGuildId(), E.id, null == b ? void 0 : b[0]), w = (0, g.s5)({
					userId: null == (t = x.default.getCurrentUser()) ? void 0 : t.id,
					channelId: E.id,
					application: m
				}) === g.Fw.CAN_JOIN, A = null != (n = E.getGuildId()) ? n : void 0, D = l.useId(), L = m.id, k = l.useMemo(() => ({
					channel: E,
					type: "channel"
				}), [E]), {
					submitting: U
				} = (0, _.Z)({
					applicationId: L,
					context: k,
					launchingComponentId: D
				});
				return (0, r.jsxs)("div", {
					className: T.splash,
					children: [(0, r.jsx)(M, {
						avatarSize: S,
						guildId: A,
						channelId: E.id,
						users: b
					}), (0, r.jsx)(s.Text, {
						className: a()(T.subheader, {
							[T.small]: 0 === v,
							[T.medium]: 1 === v
						}),
						variant: "text-sm/normal",
						children: b.length > 1 ? C.intl.formatToPlainString(C.t.cpe6CA, {
							username: I,
							count: b.length - 1
						}) : C.intl.formatToPlainString(C.t["7Uuia2"], {
							username: I
						})
					}), (0, r.jsx)(s.Text, {
						className: a()(T.header, {
							[T.small]: 0 === v,
							[T.medium]: 1 === v
						}),
						variant: "text-sm/normal",
						children: m.name
					}), (0, r.jsx)("div", {
						className: T.buttons,
						children: w ? (0, r.jsx)(u.zx, {
							onClick: function(e) {
								e.stopPropagation(), null != O && (0, f.Z)({
									applicationId: O.applicationId,
									activityChannelId: E.id,
									locationObject: Z.location,
									analyticsLocations: y,
									componentId: D
								})
							},
							submitting: U,
							size: function(e) {
								switch (e) {
									case 2:
										return u.zx.Sizes.LARGE;
									case 1:
										return u.zx.Sizes.MEDIUM;
									case 0:
										return u.zx.Sizes.SMALL
								}
							}(v),
							className: T.button,
							look: u.iL.FILLED,
							color: u.zx.Colors.WHITE,
							children: C.intl.string(C.t["4i2vj4"])
						}) : null
					})]
				})
			}

			function k(e) {
				let {
					participant: t,
					width: n,
					selected: i,
					interactible: a,
					channel: u
				} = e, {
					analyticsLocations: s
				} = (0, j.ZP)(Z.Z.ACTIVITY_TILE), {
					applicationId: c
				} = t, d = (0, E.Z)(), f = null != d && (0, m.p)(d.location) === u.id && d.applicationId === c, [p] = (0, I.Z)([c]), {
					url: g
				} = (0, h.Z)({
					applicationId: c,
					names: D,
					size: 1024
				}), b = !i && f, _ = !f, P = !f && !i, x = (0, o.e7)([A.Z, w.Z], () => (0, y.Z)({
					LayerStore: A.Z,
					PopoutWindowStore: w.Z
				}));
				return l.useEffect(() => {
					if (b && null != d && !x) {
						let e = (0, O.Z)(d.location.id, d.applicationId);
						(0, S.jy)(e)
					}
				}, [b, d, x]), (0, r.jsx)(j.Gt, {
					value: s,
					children: (0, r.jsxs)("div", {
						className: T.container,
						children: [b && null != d && (0, r.jsx)(v.Z, {
							className: T.iframe,
							embedId: (0, O.Z)(d.location.id, c)
						}), _ && null != p && null != g && "" !== g ? (0, r.jsx)("img", {
							className: T.splashImage,
							alt: p.name,
							src: g
						}) : null, P && null != p && (0, r.jsx)(L, {
							width: n,
							channel: u,
							participants: t.participants,
							application: p
						}), a || _ ? null : (0, r.jsx)("div", {
							className: T.clickShield
						})]
					})
				})
			}
		},
		796638: function(e, t, n) {
			n.d(t, {
				ZB: () => h,
				ZP: () => v,
				cF: () => p
			}), n(388685), n(539854);
			var r = n(255367),
				l = n(73800),
				i = n(392711),
				a = n(933546),
				o = n(314897),
				u = n(70956),
				s = n(823379),
				c = n(27457),
				d = n(354459),
				f = n(921500);
			let p = 112,
				m = 16 / 9 * 112 + 8,
				g = 10 * u.Z.Millis.SECOND;

			function E(e) {
				var t;
				let n = o.default.getId();
				return e.type === d.fO.USER && e.user.id === n && (null == (t = e.voiceState) ? void 0 : t.selfVideo)
			}

			function h(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
						tileWidth: m,
						tileMinWidth: 124,
						tileMargin: 8,
						limit: 12,
						cropSelfVideo: !1
					},
					{
						tileWidth: r,
						tileMinWidth: o,
						tileMargin: u,
						limit: c,
						cropSelfVideo: f,
						version: p
					} = n,
					[h, v] = l.useState(Date.now());
				l.useEffect(() => {
					let e = setTimeout(() => {
						v(Date.now())
					}, g);
					return () => {
						clearTimeout(e)
					}
				}, [t]);
				let S = l.useRef({}),
					{
						visibleParticipants: b,
						participantTileWidth: O
					} = l.useMemo(() => {
						let n = Date.now(),
							l = (0, i.sortBy)(t, e => (function(e) {
								let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
								switch (e.type) {
									case d.fO.ACTIVITY:
										return "\x01".concat(e.sortKey);
									case d.fO.HIDDEN_STREAM:
									case d.fO.STREAM:
										return "\x02".concat((0, a.Z)(e.userNick, e.user));
									case d.fO.USER:
										var n;
										let r = "\x06";
										return e.speaking ? r = "\x03" : t - e.lastSpoke < g ? r = "\x04" : (null == (n = e.voiceState) ? void 0 : n.selfVideo) && (r = "\x05"), "".concat(r).concat(function(e) {
											let t = String(864e13).length;
											return String(864e13 - e).padStart(t, "0")
										}(e.lastSpoke)).concat((0, a.Z)(e.userNick, e.user))
								}
							})(e, n)),
							[p, m] = (0, i.partition)(l, d.Io),
							h = p.findIndex(E),
							v = null; - 1 !== h && (v = p[h], p.splice(h, 1));
						let b = null == v || f ? e : e - r - u,
							O = Math.max(0, Math.min(Math.floor((b - u) / (o + u)), c, t.length)),
							y = Math.min((b - u) / O - u, r),
							Z = Math.max(0, O - m.length),
							j = m.slice(0, O),
							_ = p.slice(0, Z),
							I = Array(Z);
						if (Z > 0) {
							let e = [];
							for (let t of _) {
								let n = S.current[t.id];
								null != n && n < Z ? I[n] = t : e.push(t)
							}
							for (let t = 0; t < I.length; t++) {
								if (null != I[t]) continue;
								let n = e.shift();
								if (null == n) break;
								I[t] = n
							}
						}
						let w = I.filter(s.lm);
						S.current = (0, i.keyBy)((0, i.range)(w.length), e => w[e].id);
						let P = [...j, ...w];
						return null != v && (f && P.length >= O ? P[Math.max(0, P.length - 1)] = v : P.push(v)), {
							visibleParticipants: P,
							participantTileWidth: y
						}
					}, [e, t, h, p, f, c, u, o, r]);
				return {
					visibleParticipants: b,
					participantTileWidth: O
				}
			}

			function v(e) {
				let {
					participants: t,
					participantTileWidth: n,
					selectedParticipantId: l,
					onDoubleClick: i,
					onContextMenu: a,
					onClick: o,
					channel: u,
					inCall: s,
					popoutWindow: d,
					paused: p = !1
				} = e, g = null != d;
				return (0, r.jsx)("div", {
					className: f.root,
					children: t.map(e => {
						if (null == e) return null;
						let t = E(e);
						return (0, r.jsx)("div", {
							className: f.tileSizer,
							style: t ? {
								flexShrink: 0
							} : void 0,
							children: (0, r.jsx)(c.ZP, {
								participant: e,
								selected: l === e.id,
								channel: u,
								className: f.tile,
								fit: c.BP.COVER,
								onClick: o,
								onDoubleClick: i,
								onContextMenu: a,
								width: t ? m : n,
								inCall: s,
								paused: p,
								inPopout: g
							})
						}, e.id)
					})
				})
			}
		},
		442168: function(e, t, n) {
			n.d(t, {
				Z: () => b
			});
			var r = n(255367),
				l = n(73800),
				i = n(108542),
				a = n(442837),
				o = n(780384),
				u = n(481060),
				s = n(435064),
				c = n(39604),
				d = n(175470),
				f = n(569545),
				p = n(314910),
				m = n(83773);

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
			let E = {
					visibility: "hidden"
				},
				h = {
					precision: 1e-4,
					duration: 300
				},
				v = {
					tension: 150,
					friction: 20,
					precision: 1e-4,
					bounce: 0
				},
				S = {
					duration: 1e3
				};

			function b(e) {
				let {
					stream: t,
					inPopout: n
				} = e, {
					reducedMotion: b
				} = l.useContext(o.Sf), O = (0, l.useRef)(null), y = d.n.getState().clipsButtonRef, Z = (0, f.V9)(t), j = (0, a.e7)([s.Z], () => s.Z.getActiveAnimation()), _ = (0, a.Wu)([s.Z], () => s.Z.getStreamClipAnimations(Z)), I = (0, l.useRef)(void 0);
				l.useEffect(() => () => {
					(0, c.Gh)(Z)
				}, [Z]);
				let w = () => {
						var e;
						let t = null == (e = O.current) ? void 0 : e.getBoundingClientRect();
						return null == t || n ? E : {
							width: t.width,
							height: t.height,
							top: t.top,
							left: t.left
						}
					},
					P = e => {
						let t = null == y ? void 0 : y.getBoundingClientRect();
						if (I.current = t, e.timestamp !== j || null == t || n) return E;
						let {
							top: r,
							left: l
						} = t;
						return {
							top: r + 36,
							left: l - 216,
							height: 151,
							width: 268
						}
					},
					A = (0, l.useRef)(null),
					x = (0, u.Yzy)(_, {
						keys: e => e.timestamp,
						ref: A,
						from: {
							opacity: .2
						},
						enter: {
							opacity: 0
						},
						config: h
					}, "animate-always"),
					R = (0, l.useRef)(null),
					N = (0, u.Yzy)(_, {
						ref: R,
						keys: e => e.timestamp,
						from: e => g({
							position: "fixed",
							visibility: "hidden",
							opacity: 1
						}, b.enabled ? P(e) : w()),
						enter: e => [g({
							opacity: 1,
							visibility: "visible"
						}, P(e))],
						leave: g({
							opacity: 0
						}, !b.enabled && g({
							height: 0,
							width: 0
						}, (() => {
							if (null != I.current) return {
								top: I.current.top + 12,
								left: I.current.left + 12
							}
						})())),
						config: b.enabled ? S : v,
						onRest: (e, t) => {
							null != t.item && null != _.find(e => e.timestamp === t.item.timestamp) && (0, c.Gh)(Z, t.item.timestamp)
						}
					}, "animate-always");
				return (0, i.useChain)([A, R], [0, .1], 3e3), (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)("div", {
						className: m.hidden,
						ref: O
					}), x((e, t) => null != t && (0, r.jsx)(i.animated.div, {
						className: m.whiteFlash,
						style: e
					})), (0, r.jsx)(p.ZP, {
						children: (0, r.jsx)("div", {
							className: m.hidden,
							children: N((e, t, n, l) => (null == t ? void 0 : t.thumbnail) != null && (0, r.jsx)(i.animated.img, {
								src: t.thumbnail,
								className: m.movingImage,
								style: e
							}))
						})
					})]
				})
			}
		},
		979425: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(255367);
			n(73800);
			var l = n(120356),
				i = n.n(l),
				a = n(481060),
				o = n(871118),
				u = n(388032),
				s = n(519417);

			function c(e) {
				let {
					stream: t,
					isSmall: n,
					selected: l,
					isSelfStream: c
				} = e;
				return (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)(o.Z, {
						className: i()(s.absoluteFill, s.streamPreviewOpacity),
						stream: t,
						noText: !0
					}), !l && (0, r.jsxs)("div", {
						className: i()(s.content, s.streamUnavailable, {
							[s.small]: n
						}),
						children: [(0, r.jsx)(a.Text, {
							className: s.streamUnavailableText,
							color: "always-white",
							variant: n ? "text-sm/semibold" : "text-md/semibold",
							children: c ? u.intl.string(u.t.UeEwj4) : u.intl.string(u.t["1i3tSU"])
						}), (0, r.jsx)(a.DY3, {
							text: c ? u.intl.string(u.t["ro/HNz"]) : u.intl.string(u.t.UPf6ZG),
							className: s.darkCircle,
							children: (0, r.jsx)("div", {
								children: (0, r.jsx)(a.o8v, {
									size: "md",
									color: "currentColor",
									className: s.stopStreamIcon,
									colorClass: s.stopStreamForeground
								})
							})
						})]
					})]
				})
			}
		},
		833519: function(e, t, n) {
			n.d(t, {
				Z: () => z,
				_: () => Y
			}), n(388685);
			var r = n(255367),
				l = n(73800),
				i = n(120356),
				a = n.n(i),
				o = n(442837),
				u = n(481060),
				s = n(475179),
				c = n(872810),
				d = n(493773),
				f = n(763520),
				p = n(194082),
				m = n(710845),
				g = n(965048),
				E = n(590293),
				h = n(863908),
				v = n(871118),
				S = n(517525),
				b = n(352978),
				O = n(576645),
				y = n(590076),
				Z = n(507675),
				j = n(199902),
				_ = n(314897),
				I = n(592125),
				w = n(131951),
				P = n(451478),
				A = n(685203),
				x = n(112560),
				R = n(442168),
				N = n(822296),
				C = n(916771),
				T = n(792517),
				D = (n(351483), n(979425)),
				M = n(651183),
				L = n(623825),
				k = n(981631),
				U = n(354459),
				F = n(65154),
				V = n(388032),
				W = n(519417);
			let H = new m.Z("StreamTile");

			function Y(e) {
				let {
					participant: t,
					selected: n,
					focused: i,
					idle: a,
					width: u,
					premiumIndicator: s
				} = e, c = (0, o.e7)([j.Z], () => j.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)), d = (0, L.K)(u), [f, m] = l.useState(!1), g = (0, o.e7)([I.Z], () => I.Z.getChannel(null == c ? void 0 : c.channelId));
				return (0, O.J)(g, () => {
					let e = setTimeout(() => {
							m(!0)
						}, 5e3),
						t = setTimeout(() => {
							m(!1)
						}, 15e3);
					return () => {
						m(!1), clearTimeout(e), clearTimeout(t)
					}
				}), (0, r.jsxs)(r.Fragment, {
					children: [n || i ? null : (0, r.jsx)(M.Z, {
						participant: t
					}), i || null == c || c.state === k.jm8.ENDED || c.state === k.jm8.FAILED ? null : (0, r.jsx)(S.Z, {
						size: p.ZP.Sizes.SMALL,
						className: W.liveIndicator,
						participant: t,
						showQuality: !d && !a || f,
						isUpsellEnabled: !1,
						premiumIndicator: s
					})]
				})
			}

			function z(e) {
				let {
					participant: t,
					selected: n,
					onVideoResize: i,
					fit: p,
					inPopout: m,
					inOverlayPopout: S = !1,
					width: O,
					focused: M,
					wrapperClassName: L,
					paused: Y = !1
				} = e, z = w.Z.getVideoComponent(), G = (0, o.e7)([_.default], () => _.default.getId()), K = (0, E.Z)(), {
					stream: B,
					user: q,
					streamId: J
				} = t, X = (0, o.e7)([I.Z], () => I.Z.getChannel(B.channelId)), Q = (0, o.e7)([j.Z], () => j.Z.getActiveStreamForUser(q.id, B.guildId), [q.id, B.guildId]), $ = (0, o.e7)([j.Z], () => j.Z.getAllActiveStreams().length > 0), ee = (0, o.e7)([P.Z], () => P.Z.isFocused()), et = (null == Q ? void 0 : Q.ownerId) === G, en = et && !ee && !m, er = null != Q ? (0, h.Z)(Q, q, q.id === G, en) : null, el = O < 195;
				(0, d.ZP)(() => {
					!$ && (null == X ? void 0 : X.isGuildStageVoice()) && !et && ((0, c.rn)(B), s.Z.updateStageStreamSize(B.channelId, !1))
				});
				let ei = (0, g.Z)(F.Yn.STREAM, t.user.id);
				if (l.useEffect(() => {
						H.info("Stream Tile State - activeStream: ".concat(null != Q, " | selected: ").concat(n, " | Video: ").concat(null != z, " | MediaEngine: ").concat(w.Z.supports(F.AN.VIDEO)))
					}, [z, Q, n]), K) return (0, r.jsx)(D.Z, {
					stream: t.stream,
					isSmall: el,
					selected: n,
					isSelfStream: q.id === G
				});
				if ((null == Q ? void 0 : Q.state) === k.jm8.ENDED) return (0, r.jsx)(N.Z, {
					selected: n,
					stream: Q,
					width: O
				});
				if (null != ei || (null == Q ? void 0 : Q.state) === k.jm8.FAILED) return (0, r.jsx)(C.Z, {
					avError: ei,
					selected: n,
					stream: t.stream,
					width: O
				});
				if (t.type === U.fO.HIDDEN_STREAM) return (0, r.jsx)(T.Z, {
					selected: n,
					participant: t,
					width: O
				});
				if (!(null != Q && !n && null != z && w.Z.supports(F.AN.VIDEO))) return (0, r.jsxs)("div", {
					className: a()(W.content, W.streamPreview, {
						[W.small]: el
					}),
					children: [(0, r.jsx)(v.Z, {
						noImage: !0,
						noText: !0,
						className: a()(W.absoluteFill, {
							[W.streamPreviewOpacity]: null == Q
						}),
						stream: t.stream
					}), n ? null : (0, r.jsxs)(r.Fragment, {
						children: [(0, r.jsx)(A.a, {
							isSmall: el,
							children: (0, r.jsx)(u.Text, {
								variant: el ? "text-sm/semibold" : "text-md/semibold",
								color: "none",
								children: O < 175 ? V.intl.string(V.t["I6JG4+"]) : V.intl.string(V.t["7Xq/nZ"])
							})
						}), $ ? (0, r.jsx)(A.a, {
							className: W.addCTA,
							tooltip: V.intl.string(V.t.wCrzur),
							onClick: e => {
								e.stopPropagation(), (0, c.rn)(B, {
									forceMultiple: !0
								})
							},
							isSmall: el,
							children: (0, r.jsx)(u.OgY, {
								size: "xs",
								color: "currentColor",
								className: W.addStreamIcon
							})
						}) : null]
					})]
				});
				else return (0, r.jsxs)(r.Fragment, {
					children: [null != X ? (0, r.jsx)(y.Z, {
						focused: M,
						channelId: X.id,
						guildId: X.guild_id,
						streamerId: q.id,
						hasScreenMessage: null != er,
						stream: B
					}) : null, (0, r.jsx)(b.Z, {
						onResize: i,
						wrapperClassName: a()(W.videoWrapper, L),
						className: W.content,
						streamId: J,
						videoComponent: z,
						fit: p,
						paused: Y || (null == Q ? void 0 : Q.state) === k.jm8.PAUSED || en,
						videoSpinnerContext: et ? f.m.SELF_STREAM : f.m.REMOTE_STREAM,
						userId: q.id,
						streamKey: t.id
					}, J), null != er ? (0, r.jsx)(Z.Z, function(e) {
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
						size: (0, x.L)(O)
					}, er)) : null, (0, r.jsx)(R.Z, {
						stream: B,
						inPopout: m
					})]
				})
			}
		},
		651183: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			var r = n(255367);
			n(73800);
			var l = n(458725),
				i = n(386146),
				a = n(475674),
				o = n(42326),
				u = n(388032);

			function s(e) {
				let {
					participant: t,
					className: n
				} = e, s = (0, a.Z)(t), {
					avErrorUIEnabled: c
				} = (0, i.JN)({
					location: "StreamWarning"
				});
				if (null == s) return null;
				let d = function(e) {
					switch (e) {
						case l.u.STREAM_SEND_LOW_FPS:
						case l.u.STREAM_SEND_HIGH_PACKET_LOSS:
							return u.intl.string(u.t["1f1LHh"]);
						case l.u.STREAM_BAD_NETWORK_QUALITY:
							return u.intl.string(u.t.Ic588P);
						case l.u.STREAM_SOUNDSHARE_FAILED:
							return u.intl.string(u.t["9lcycn"]);
						case l.u.STREAM_VIEW_HIGH_PACKET_LOSS:
						case l.u.STREAM_VIEW_LOW_FPS:
							return u.intl.string(u.t.BcOif3);
						default:
							return
					}
				}(s);
				return null != d ? (0, r.jsx)(o.Z, {
					className: n,
					errorMessage: d,
					avError: c ? s : null
				}) : null
			}
		},
		462061: function(e, t, n) {
			n.d(t, {
				T: () => T,
				Z: () => D
			});
			var r = n(255367),
				l = n(73800),
				i = n(120356),
				a = n.n(i),
				o = n(442837),
				u = n(481060),
				s = n(475179),
				c = n(763520),
				d = n(358221),
				f = n(414910),
				p = n(502053),
				m = n(965048),
				g = n(266910),
				E = n(352978),
				h = n(928518),
				v = n(518950),
				S = n(470956),
				b = n(314897),
				O = n(271383),
				y = n(131951),
				Z = n(451478),
				j = n(5192),
				_ = n(44136),
				I = (n(351483), n(249212)),
				w = n(853476),
				P = n(981631),
				A = n(65154),
				x = n(388032),
				R = n(519417);
			let N = u.EFr.SIZE_80,
				C = u.EFr.SIZE_40;

			function T(e) {
				let {
					channelId: t,
					participant: n
				} = e;
				return (0, S.Eu)(t, n.id) ? (0, r.jsx)(u.ua7, {
					text: x.intl.string(x.t.HFwRpq),
					position: "bottom",
					color: u.FGA.GREY,
					children: e => {
						var t, n;
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
						}({}, e), n = n = {
							className: R.interactive,
							children: (0, r.jsx)(u.P4T, {
								color: u.TVs.colors.STATUS_WARNING_BACKGROUND
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
				}) : (0, r.jsx)(w.Z, {
					userId: n.user.id
				})
			}

			function D(e) {
				let {
					participant: t,
					channel: n,
					inCall: i,
					width: u,
					selected: S,
					fit: w,
					onVideoResize: T,
					blocked: D,
					ignored: M,
					noVideoRender: L = !1,
					pulseSpeakingIndicator: k = !1,
					inOverlayPopout: U = !1,
					paused: F = !1
				} = e, V = y.Z.getVideoComponent(), W = (0, o.e7)([b.default], () => b.default.getId()), {
					user: H,
					streamId: Y,
					speaking: z
				} = t, G = H.id === W, K = (0, _.ZP)(t), B = (0, o.e7)([Z.Z], () => Z.Z.isFocused()), q = (0, o.e7)([h.Z], () => h.Z.getWindowFocused(P.KJ3.CHANNEL_CALL_POPOUT)), J = (0, o.e7)([y.Z], () => null != H.id && y.Z.isLocalVideoDisabled(H.id, (0, f.Z)(t.type)), [H.id, t.type]), X = (0, o.e7)([O.ZP], () => O.ZP.isGuestOrLurker(n.guild_id, H.id)), Q = j.ZP.getName(n.getGuildId(), n.id, H) + (X ? " ".concat(x.intl.string(x.t["pFO/Pj"])) : ""), $ = z && (q || B), ee = u < 124 ? C : N, {
					avatarSrc: et,
					avatarDecorationSrc: en
				} = (0, v.Z)({
					userId: H.id,
					guildId: n.guild_id,
					size: ee,
					animateOnHover: !$
				}), er = (0, o.e7)([d.Z], () => d.Z.getSelectedParticipant(n.id)), el = (0, m.Z)(A.Yn.DEFAULT, t.user.id), ei = (0, p.Z)(t.user.id), ea = {
					channel: n,
					selectedParticipant: er,
					user: H
				}, eo = l.useRef(ea);
				return (l.useEffect(() => {
					eo.current = ea
				}), l.useEffect(() => {
					let {
						channel: e,
						selectedParticipant: t,
						user: n
					} = eo.current;
					e.isGuildStageVoice() && !K && (null == t ? void 0 : t.id) === n.id && s.Z.selectParticipant(e.id, null)
				}, [K]), i && !J && !L && K && !S && null != V && y.Z.supports(A.AN.VIDEO)) ? null != el && null == ei ? (0, r.jsx)(I.Z, {
					avError: el,
					userId: t.id,
					width: u,
					selected: S
				}) : (0, r.jsx)(E.Z, {
					onResize: T,
					wrapperClassName: R.videoWrapper,
					className: R.content,
					mirror: G,
					streamId: Y,
					videoComponent: V,
					fit: w,
					videoSpinnerContext: H.id === W ? c.m.SELF_VIDEO : c.m.REMOTE_VIDEO,
					paused: F,
					userId: H.id
				}, Y) : (0, r.jsx)("div", {
					className: a()(R.content, {
						[R.blockedAvatar]: D || M
					}),
					children: (0, r.jsx)(g.Z, {
						"aria-label": Q,
						src: et,
						avatarDecoration: en,
						backgroundSrc: H.getAvatarURL(n.guild_id, 80),
						size: ee,
						pulseSpeakingIndicator: k,
						speaking: z,
						userId: H.id
					})
				})
			}
		},
		853476: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			var r = n(255367);
			n(73800);
			var l = n(458725),
				i = n(386146),
				a = n(502053),
				o = n(42326),
				u = n(388032);

			function s(e) {
				let {
					userId: t,
					className: n
				} = e, s = (0, a.Z)(t), {
					avErrorUIEnabled: c
				} = (0, i.JN)({
					location: "VideoWarning"
				});
				if (null == s) return null;
				let d = s === l.u.CAMERA_SEND_LOW_FPS ? u.intl.string(u.t["1NyoVl"]) : void 0;
				return null != d ? (0, r.jsx)(o.Z, {
					className: n,
					errorMessage: d,
					avError: c ? s : null
				}) : null
			}
		},
		623825: function(e, t, n) {
			function r(e) {
				return e <= 220
			}

			function l(e) {
				return e <= 124
			}
			n.d(t, {
				K: () => r,
				N: () => l
			})
		},
		839662: function(e, t, n) {
			n.d(t, {
				Z: () => i
			});
			var r = n(44136),
				l = n(354459);

			function i(e, t) {
				var n, i;
				let a = null,
					o = null,
					u = null,
					s = !1,
					c = !1;
				switch (e.type) {
					case l.fO.ACTIVITY:
						break;
					case l.fO.USER:
						a = e.streamId, u = e.voiceState, s = e.speaking, c = e.ringing;
						break;
					case l.fO.STREAM:
						a = e.streamId, o = e.stream
				}
				return {
					streamId: a,
					stream: o,
					speaking: s,
					ringing: c,
					muted: null != (n = null == u ? void 0 : u.isVoiceMuted()) && n,
					deafen: null != (i = null == u ? void 0 : u.isVoiceDeafened()) && i,
					mirror: e.type === l.fO.USER && e.user.id === t,
					hasVideo: (0, r.ZP)(e)
				}
			}
		},
		42326: function(e, t, n) {
			n.d(t, {
				Z: () => E
			}), n(388685);
			var r = n(255367),
				l = n(73800),
				i = n(120356),
				a = n.n(i),
				o = n(846519),
				u = n(481060),
				s = n(458725),
				c = n(906467),
				d = n(63063),
				f = n(618158),
				p = n(981631),
				m = n(388032),
				g = n(975985);

			function E(e) {
				let {
					errorMessage: t,
					className: n,
					avError: i
				} = e, E = "", {
					text: h,
					node: v
				} = function(e) {
					var t;
					if (null == e) return {
						text: null,
						node: null
					};
					let n = null == (t = (0, s.hp)(e)) ? void 0 : t.errorCode,
						l = m.intl.formatToPlainString(m.t["ejOT9/"], {
							errorCode: n
						}),
						i = m.intl.format(m.t.If5Q0t, {
							errorCode: n,
							helpDeskURL: d.Z.getArticleURL(p.BhN.AV_ERROR_CODES)
						}),
						a = c.Z.isDeveloper;
					return {
						text: a ? "".concat(l, " (").concat(e, ")") : l,
						node: a ? (0, r.jsxs)(r.Fragment, {
							children: [i, " (", e, ")"]
						}) : i
					}
				}(i);
				null != t && null != h ? E = "".concat(t, " ").concat(h) : null != t && (E = t);
				let [S] = l.useState(new o.V7), [b, O] = l.useState(!1);

				function y() {
					S.start(250, () => {
						O(!1)
					})
				}

				function Z() {
					S.stop(), O(!0)
				}
				return (0, r.jsx)(u.ua7, {
					forceOpen: b,
					disableTooltipPointerEvents: !1,
					text: (0, r.jsx)(f.Z, {
						children: (0, r.jsxs)("div", {
							onMouseEnter: Z,
							onMouseLeave: y,
							children: [t, null != v && (0, r.jsx)(u.Text, {
								variant: "text-sm/semibold",
								color: "text-muted",
								className: g.errorCodeMessage,
								children: v
							})]
						})
					}),
					position: "bottom",
					color: u.FGA.GREY,
					"aria-label": E,
					children: e => {
						var t, l;
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
						}({}, e), l = l = {
							onMouseEnter: Z,
							onMouseLeave: y,
							className: a()(n, g.root),
							children: (0, r.jsx)(f.Z, {
								children: (0, r.jsx)(u.P4T, {
									onMouseEnter: Z,
									onMouseLeave: y,
									size: "custom",
									width: 20,
									height: 20,
									color: "currentColor",
									"aria-label": E,
									className: g.warningIcon
								})
							})
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var r = Object.getOwnPropertySymbols(e);
								n.push.apply(n, r)
							}
							return n
						})(Object(l)).forEach(function(e) {
							Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
						}), t))
					}
				})
			}
		},
		274459: function(e, t, n) {
			n.d(t, {
				Z: () => h
			}), n(388685);
			var r = n(255367),
				l = n(73800),
				i = n(108542),
				a = n(442837),
				o = n(481060),
				u = n(596454),
				s = n(607070),
				c = n(70956),
				d = n(456631),
				f = n(209767);
			let p = 6 * c.Z.Millis.SECOND,
				m = 2 * c.Z.Millis.SECOND,
				g = 2 * c.Z.Millis.SECOND,
				E = e => "scale(".concat(1 - -(e / 120), ") rotate(").concat(e, "deg)");

			function h(e) {
				let {
					userId: t,
					voiceChannelEffect: n,
					onComplete: c
				} = e, {
					emoji: h,
					sentAt: v
				} = n, S = (0, a.e7)([s.Z], () => s.Z.useReducedMotion), [b, O] = l.useState(!0), y = !S, Z = (0, o.Yzy)(b, {
					from: {
						rotate: -120
					},
					enter: {
						rotate: 0
					},
					leave: {
						rotate: -120
					},
					config: i.config.default,
					onRest: (e, t) => {
						let {
							phase: n
						} = t;
						"leave" === n && c()
					}
				});
				return (l.useEffect(() => {
					let e;
					return Date.now() - v >= g ? (0, d.H)(t) : e = setTimeout(() => {
						O(!1), y && (0, d.H)(t)
					}, y ? m : p), () => {
						null != e && clearTimeout(e)
					}
				}, [v, t, y]), y) ? null : Z((e, t) => {
					var n;
					let {
						rotate: l
					} = e;
					return t && (0, r.jsx)(i.animated.div, {
						className: f.voiceChannelEffectEmojiContainer,
						style: {
							transform: l.to(E)
						},
						children: (0, r.jsx)(u.Z, {
							className: f.voiceChannelEffectEmoji,
							emojiId: h.id,
							emojiName: h.name,
							animated: null != (n = h.animated) && n
						})
					})
				})
			}
		},
		540650: function(e, t, n) {
			n.d(t, {
				R: () => o
			});
			var r = n(255367),
				l = n(659580),
				i = n(875527),
				a = n(306609);

			function o(e) {
				let {
					onClose: t,
					onInteraction: n,
					location: o,
					overlayLimitedInteraction: u = !1
				} = e;
				return (0, i.Hu)({
					location: o,
					autoTrackExposure: !0
				}) ? (0, r.jsx)(a.l, {
					wide: !0,
					showOutputDevices: !0,
					onSettingsButtonClick: t,
					showSearchBar: !u
				}) : (0, r.jsx)(l.default, {
					onClose: t,
					renderInputDevices: !0,
					renderOutputDevices: !0,
					renderInputModes: !0,
					renderInputVolume: !0,
					renderOutputVolume: !0,
					renderDeafen: !0,
					minimal: !0,
					onInteraction: n
				})
			}
		}
	}
]);
//# sourceMappingURL=385db7197f8ff304.js.map