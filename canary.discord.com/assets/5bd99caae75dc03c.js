"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["3589"], {
		691891: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var i = n(255367);
			n(73800);
			var r = n(120356),
				l = n.n(r),
				o = n(755721),
				s = n(481060),
				c = n(702107);
			let a = e => {
				let {
					className: t,
					onDismiss: n,
					"aria-label": r
				} = e;
				return (0, i.jsx)(o.zx, {
					look: o.zx.Looks.BLANK,
					size: o.zx.Sizes.NONE,
					onClick: n,
					className: l()(c.dismissButton, t),
					"aria-label": r,
					children: (0, i.jsx)(s.Dio, {
						size: "xs",
						color: "currentColor",
						colorClass: c.dismissIcon
					})
				})
			};
			a.displayName = "DismissButton";
			let u = a
		},
		22205: function(e, t, n) {
			n.d(t, {
				Z: () => R
			}), n(388685);
			var i = n(255367),
				r = n(73800),
				l = n(392711),
				o = n.n(l),
				s = n(108542),
				c = n(818405),
				a = n(587158),
				u = n(286379),
				d = n(442837),
				h = n(481060),
				p = n(224706),
				m = n(13245),
				b = n(615287),
				f = n(493773),
				v = n(797614),
				g = n(703656),
				y = n(594174),
				O = n(254761),
				x = n(70956),
				C = n(145597),
				j = n(41534),
				w = n(333031),
				P = n(610394),
				k = n(380736),
				Z = n(987650),
				E = n(981631),
				S = n(388032),
				z = n(138134);

			function N(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			let D = o().throttle(() => {
					v.Z.increment({
						name: u.V.APP_CRASHED,
						tags: ["reason:".concat(c.v.UNHANDLED_JS_ERROR), "level:".concat(a.c.FATAL)]
					}, !0)
				}, 100, {
					trailing: !1
				}),
				T = 10 * x.Z.Millis.SECOND;

			function M(e) {
				var t, n;
				let {
					error: l,
					onLock: o,
					onReload: c,
					onDisable: a,
					onCrashDisabled: u
				} = e, p = r.useMemo(() => new s.SpringValue(1), []), b = r.useRef(null), [v, g] = r.useState(!1), [x, C] = r.useState(!1), j = (0, d.e7)([y.default], () => y.default.getCurrentUser());
				(0, f.ZP)(() => (b.current = setTimeout(w, T), m.Z.track(E.rMx.NOTIFICATION_VIEWED, {
					notif_type: Z.n0.OverlayCrashed
				}), () => {
					null != b.current && clearTimeout(b.current)
				}));
				let w = r.useCallback(() => {
						p.set(0), null != b.current && clearTimeout(b.current), b.current = null, null == o || o(), null == u || u()
					}, [p, o, u]),
					N = r.useCallback(e => {
						x || (C(!0), null == o || o(), m.Z.track(E.rMx.NOTIFICATION_CLICKED, {
							notif_type: Z.n0.OverlayCrashed,
							action_type: "reload"
						}, !0), e.stopPropagation(), setTimeout(() => null == c ? void 0 : c(), 200))
					}, [o, c, x]),
					D = r.useCallback(e => {
						e.stopPropagation(), e.shiftKey ? (g(!0), null != b.current && clearTimeout(b.current)) : g(!1)
					}, [g]),
					M = r.useCallback(e => {
						e.stopPropagation(), null == o || o(), null == a || a()
					}, [a, o]),
					L = (0, d.e7)([P.ZP], () => P.ZP.getFocusedRunningGame()),
					R = v ? (0, i.jsxs)("div", {
						children: [(0, i.jsx)(h.Text, {
							variant: "text-md/semibold",
							color: "text-primary",
							children: S.intl.string(S.t.mn4eXF)
						}), (0, i.jsxs)("div", {
							className: z.stackTraceCode,
							children: [(0, i.jsx)(h.Text, {
								variant: "text-sm/normal",
								color: "text-secondary",
								children: l.message
							}), (0, i.jsx)(h.Text, {
								variant: "text-xxs/normal",
								color: "text-secondary",
								children: (0, i.jsx)("code", {
									className: z.code,
									children: (0, i.jsx)("pre", {
										children: l.stack
									})
								})
							})]
						})]
					}) : null,
					I = v ? null : S.intl.string(S.t.oEJEFh),
					W = null != (t = null == j ? void 0 : j.isStaff()) && t || null != (n = null == j ? void 0 : j.isStaffPersonal()) && n;
				return (0, i.jsx)(k.Y, {
					title: S.intl.string(S.t.U38qZm),
					body: R,
					hint: W ? I : void 0,
					confirmText: S.intl.string(S.t.a3HlgI),
					cancelText: null != L ? S.intl.string(S.t.qIYnPj) : void 0,
					icon: (0, i.jsx)(O.Z, {
						width: 40,
						height: 40,
						className: z.notificationIcon
					}),
					onNotificationClick: D,
					onConfirmClick: N,
					onCancelClick: null != L ? M : void 0,
					onDismissClick: o,
					expand: !0,
					locked: !0,
					notificationId: "overlay-crashed",
					index: 0,
					status: E._1z.ACTIVE,
					containerRef: null,
					contentOpacity: p,
					className: z.errorNotificationContainer,
					wrapperClassName: z.errorNotificationWrapper
				})
			}
			class L extends r.PureComponent {
				componentDidCatch(e, t) {
					let n = (0, g.s1)().location;
					this.setState({
						error: e,
						info: t
					});
					let i = (0, C.getPID)();
					m.Z.setOverlayCrashed(i, e), m.Z.setInputLocked(!0, i);
					let r = (0, j.V)(e, b.gl.OutOfProcess, {
						extra: {
							info: t,
							location: n
						}
					});
					m.Z.track(E.rMx.APP_CRASHED, {
						path: n.pathname,
						extra: t,
						error_message: e.message,
						error_stack: e.stack,
						sentry_issue_id: r,
						error_level: "fatal"
					}), D(), this.pid = i
				}
				render() {
					let {
						children: e,
						className: t
					} = this.props, {
						error: n,
						showError: r
					} = this.state;
					return null != n ? r ? (0, i.jsx)(w.Z, {
						className: z.errorClickNotification,
						children: (0, i.jsx)(M, {
							error: n,
							onLock: () => {
								var e;
								let t = null != (e = this.pid) ? e : (0, C.getPID)();
								m.Z.setInputLocked(!0, t), this.setState({
									showError: !1
								})
							},
							onDisable: () => {
								let e = P.ZP.getFocusedRunningGame();
								null != e && p.Z.toggleOverlay(e, !1, !1)
							},
							onCrashDisabled: () => {
								var e;
								let t = null != (e = this.pid) ? e : (0, C.getPID)();
								m.Z.updateOverlayState(t, b.mM.OVERLAY_CRASHED_DISABLED), this.setState({
									showError: !1
								})
							},
							onReload: () => {
								m.Z.setReloadOverlay((0, C.getPID)()), this.setState({
									showError: !1
								})
							}
						})
					}) : null : (0, i.jsx)("div", {
						className: t,
						children: e
					})
				}
				constructor(...e) {
					super(...e), N(this, "state", {
						error: null,
						showError: !0,
						info: null
					}), N(this, "pid", null)
				}
			}
			let R = L
		},
		333031: function(e, t, n) {
			n.d(t, {
				Z: () => w
			}), n(388685);
			var i = n(255367),
				r = n(73800),
				l = n(120356),
				o = n.n(l),
				s = n(954955),
				c = n.n(s),
				a = n(772848),
				u = n(442837),
				d = n(902704),
				h = n(13245),
				p = n(928518),
				m = n(237997),
				b = n(358085),
				f = n(306381),
				v = n(610394),
				g = n(561064),
				y = n(501787),
				O = n(520870);

			function x(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function C(e, t) {
				return {
					name: e,
					left: Math.ceil(t.left),
					top: Math.ceil(t.top),
					right: Math.ceil(t.right),
					bottom: Math.ceil(t.bottom)
				}
			}
			let j = r.createContext(new class {
				observe(e) {
					var t;
					if (null == this.resizeObserver && (this.resizeObserver = new this.window.ResizeObserver(this.handleResize)), null == this.mutationObserver) {
						this.mutationObserver = new MutationObserver(this.handleMutations);
						let e = p.Z.getWindow(y.$J);
						null != e && this.mutationObserver.observe(null == e ? void 0 : e.document.body, {
							subtree: !0,
							attributes: !0
						})
					}
					let n = this.zones.get(e);
					null != n && this.resizeObserver.unobserve(n.element);
					let i = e.getBoundingClientRect();
					this.zones.set(e, {
						element: e,
						zone: C(null != (t = null == n ? void 0 : n.zone.name) ? t : (0, a.Z)(), i)
					}), this.elements.add(e), this.resizeObserver.observe(e), this.updateZones()
				}
				unobserve(e) {
					var t;
					null != this.zones.get(e) && (null == (t = this.resizeObserver) || t.unobserve(e), this.zones.delete(e), this.elements.delete(e), this.updateZones())
				}
				updateZones() {
					if (!b.isPlatformEmbedded) return;
					let e = p.Z.getWindow(y.$J);
					null != e && h.Z.setClickZones(Array.from(this.zones.values()).map(t => {
						let {
							zone: n
						} = t;
						return {
							name: n.name,
							left: n.left / e.innerWidth,
							top: n.top / e.innerHeight,
							right: n.right / e.innerWidth,
							bottom: n.bottom / e.innerHeight
						}
					}))
				}
				cleanUp() {
					var e, t;
					this.globalUpdate.cancel(), this.zones.clear(), this.elements.clear(), null == (e = this.resizeObserver) || e.disconnect(), null == (t = this.mutationObserver) || t.disconnect(), this.updateZones()
				}
				constructor(e) {
					x(this, "resizeObserver", void 0), x(this, "mutationObserver", void 0), x(this, "zones", new Map), x(this, "elements", new Set), x(this, "window", void 0), x(this, "handleResize", () => {
						this.globalUpdate()
					}), x(this, "handleMutations", () => {
						this.globalUpdate()
					}), x(this, "globalUpdate", c()(() => {
						let e = !1;
						for (let [t, n] of this.zones) {
							let i = t.getBoundingClientRect(),
								r = C(n.zone.name, i);
							(0, d.Z)(r, n.zone) || (e = !0, n = {
								element: n.element,
								zone: r
							}, this.zones.set(t, n))
						}
						e && this.updateZones()
					}, 250, {
						trailing: !0,
						maxWait: 1e3
					})), this.window = e
				}
			}((0, g.i)()));

			function w(e) {
				let {
					observe: t = !0,
					className: n,
					style: l,
					children: s
				} = e, c = r.useContext(j), a = (0, u.e7)([v.ZP], () => v.ZP.hasRenderDebugMode(f.G.ClickZones)), d = (0, u.e7)([m.default], () => m.default.disableClickableRegions), [{
					refHandler: h,
					setObserve: p
				}] = r.useState(() => {
					let e = null;
					return {
						setObserve(t) {
							null != e && (t ? c.observe(e) : c.unobserve(e))
						},
						refHandler(t) {
							null != e && c.unobserve(e), e = t
						}
					}
				});
				return r.useLayoutEffect(() => {
					d ? p(!1) : p(t)
				}, [t, p, d]), (0, i.jsx)("div", {
					ref: h,
					style: l,
					className: o()(n, O.clickable, a && O.debugMode),
					"data-click-zone": !0,
					children: s
				})
			}
		},
		380736: function(e, t, n) {
			n.d(t, {
				Y: () => x,
				Z: () => w
			}), n(388685);
			var i = n(255367),
				r = n(73800),
				l = n(120356),
				o = n.n(l),
				s = n(108542),
				c = n(442837),
				a = n(755721),
				u = n(481060),
				d = n(13245),
				h = n(145597),
				p = n(691891),
				m = n(333031),
				b = n(610394),
				f = n(693091),
				v = n(981631),
				g = n(388032),
				y = n(560226);

			function O(e) {
				e.currentTarget.scrollTo(0, 0)
			}
			let x = r.memo(function(e) {
				let {
					maxBodyLines: t,
					expand: n = !1,
					onNotificationShow: l,
					onDismissClick: d,
					onConfirmClick: m,
					onCancelClick: f,
					onNotificationClick: x,
					hint: C,
					cancelText: j,
					confirmText: w,
					icon: P,
					body: k,
					title: Z,
					renderFooter: E,
					contentOpacity: S,
					status: z,
					containerRef: N,
					className: D,
					wrapperClassName: T
				} = e, [M, L] = r.useState(!1), R = n || M || z === v._1z.FOCUSED, I = (0, c.e7)([b.ZP], () => b.ZP.isInputLocked((0, h.getPID)()));
				r.useEffect(() => {
					null == l || l()
				}, [l]);
				let W = r.useCallback(e => {
						e.stopPropagation(), null == d || d(e)
					}, [d]),
					_ = r.useCallback(e => {
						e.stopPropagation(), null == m || m(e)
					}, [m]),
					A = r.useCallback(e => {
						e.stopPropagation(), null == f || f(e)
					}, [f]),
					U = r.useCallback(() => {
						L(!0)
					}, []),
					F = r.useCallback(() => {
						L(!1)
					}, []);
				return (0, i.jsxs)(i.Fragment, {
					children: [(0, i.jsx)("div", {
						className: o()(y.overflowWrapper, T),
						onScroll: O,
						children: (0, i.jsx)(u.P3F, {
							innerRef: N,
							ignoreKeyPress: !0,
							onMouseOver: U,
							onMouseLeave: F,
							onClick: x,
							className: o()(y.container, {
								[y.clickable]: null != x
							}, D),
							children: function() {
								let e = null == E ? void 0 : E(R, I);
								return (0, i.jsxs)(i.Fragment, {
									children: [(0, i.jsxs)(s.animated.div, {
										className: y.iconAndDetails,
										style: {
											opacity: S
										},
										children: [null == P ? null : "string" == typeof P ? (0, i.jsx)(u.qEK, {
											src: P,
											size: u.EFr.SIZE_40,
											className: y.avatar,
											"aria-hidden": !0
										}) : (0, i.jsx)("div", {
											className: y.avatar,
											children: P
										}), (0, i.jsxs)("div", {
											className: y.details,
											children: [(0, i.jsx)(u.Text, {
												color: "interactive-normal",
												variant: "text-sm/semibold",
												lineClamp: 2,
												children: Z
											}), null != k ? (0, i.jsx)(u.Text, {
												color: "interactive-normal",
												variant: "text-sm/normal",
												lineClamp: null != t ? t * (R ? 2 : 1) : void 0,
												children: k
											}) : null, function() {
												let e = "function" == typeof C ? C(R, I) : C;
												return null != C ? (0, i.jsx)(u.Text, {
													className: y.hint,
													color: "text-muted",
													variant: "text-xxs/medium",
													children: e
												}) : null
											}(), null == m && null == f ? null : (0, i.jsxs)("div", {
												className: y.buttonContainer,
												children: [null != m ? (0, i.jsx)(a.zx, {
													className: y.button,
													size: a.zx.Sizes.SMALL,
													color: a.zx.Colors.GREEN,
													onClick: _,
													children: null != w ? w : g.intl.string(g.t.BddRzc)
												}) : null, null != f ? (0, i.jsx)(a.zx, {
													className: y.button,
													size: a.zx.Sizes.SMALL,
													look: a.zx.Looks.OUTLINED,
													color: a.zx.Colors.PRIMARY,
													onClick: A,
													children: null != j ? j : g.intl.string(g.t["ETE/oK"])
												}) : null]
											})]
										})]
									}), null != e && (0, i.jsx)(u.P3F, {
										className: y.footer,
										ignoreKeyPress: !0,
										onClick: e => e.stopPropagation(),
										children: e
									})]
								})
							}()
						})
					}), (0, i.jsx)(p.Z, {
						className: y.dismissButton,
						onDismiss: W,
						"aria-label": g.intl.string(g.t.LnEgqa)
					})]
				})
			});

			function C(e) {
				let {
					springs: {
						opacity: t,
						scale: n,
						transform: r,
						height: l
					},
					index: c,
					children: a,
					locked: u,
					animationWrapperClassName: d
				} = e;
				return (0, i.jsx)(s.animated.div, {
					className: o()(y.animationWrapper, d),
					style: {
						pointerEvents: u && 0 !== c ? "none" : "auto",
						zIndex: Math.max(5 - c, 0),
						opacity: t,
						transform: r.to(e => "translate3d(0, ".concat(e, "px, 0)")),
						scale: n.to([0, 1], [.7, 1]),
						height: l,
						maxWidth: 0 === c ? void 0 : "100%"
					},
					children: a
				})
			}

			function j(e) {
				let {
					observe: t,
					children: n
				} = e;
				return t ? (0, i.jsx)(m.Z, {
					className: y.clickZone,
					children: n
				}) : n
			}

			function w(e) {
				var t, n;
				let {
					notification: l,
					index: o,
					locked: s,
					pinned: c,
					transitionState: a,
					cleanUp: u
				} = e, {
					id: h,
					props: {
						onNotificationShow: p,
						onDismissClick: m,
						onNotificationClick: b,
						onConfirmClick: v,
						onCancelClick: g,
						renderFooter: y,
						animationWrapperClassName: O
					}
				} = l, w = r.useCallback(() => {
					p(h)
				}, [p, h]), P = r.useCallback(e => {
					d.Z.updateNotificationStatus(h), null == m || m(e, h)
				}, [h, m]), k = r.useCallback(e => {
					null == b || b(e, h)
				}, [b, h]), Z = r.useCallback(e => {
					null == v || v(e, h)
				}, [v, h]), E = r.useCallback(e => {
					null == g || g(e, h)
				}, [g, h]), S = r.useCallback((e, t) => null == y ? void 0 : y(e, h, t), [y, h]), {
					props: {
						onNotificationShow: z,
						onDismissClick: N,
						renderFooter: D,
						onNotificationClick: T,
						onConfirmClick: M,
						onCancelClick: L,
						disableClickableRegions: R = !1
					},
					status: I
				} = l, W = function(e, t) {
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
				}(l.props, ["onNotificationShow", "onDismissClick", "renderFooter", "onNotificationClick", "onConfirmClick", "onCancelClick", "disableClickableRegions"]), _ = !c && s, A = 0 === o && !R && !_, {
					ref: U,
					springs: F
				} = (0, f.X4)(l.id, a, u);
				return (0, i.jsx)(C, {
					transitionState: a,
					springs: F,
					index: o,
					locked: s,
					animationWrapperClassName: O,
					children: (0, i.jsx)(j, {
						observe: A,
						children: (0, i.jsx)(x, (t = function(e) {
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
						}({}, W), n = n = {
							title: "function" == typeof W.title ? W.title(P) : W.title,
							containerRef: U,
							notificationId: l.id,
							onNotificationShow: 0 === o ? w : void 0,
							onDismissClick: P,
							onNotificationClick: null != b ? k : void 0,
							onConfirmClick: null != v ? Z : void 0,
							onCancelClick: null != g ? E : void 0,
							renderFooter: S,
							expand: !1,
							index: o,
							locked: s,
							status: I,
							contentOpacity: F.contentOpacity
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var i = Object.getOwnPropertySymbols(e);
								n.push.apply(n, i)
							}
							return n
						})(Object(n)).forEach(function(e) {
							Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
						}), t))
					})
				})
			}
		},
		693091: function(e, t, n) {
			n.d(t, {
				AS: () => o,
				S4: () => s,
				X4: () => u
			}), n(388685);
			var i = n(73800),
				r = n(481060);

			function l(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			class o {
				updateState(e, t) {
					this.items = e;
					let n = this.locked !== t;
					this.locked = t, this.computeLayout(n)
				}
				initialize(e) {
					if (null == this.resizeObserver) {
						for (let [, {
								element: n
							}] of(this.resizeObserver = new e.ResizeObserver(this.handleResize), this.listeners)) {
							var t;
							null == (t = this.resizeObserver) || t.observe(n)
						}
						this.queueCompute()
					}
				}
				cleanUp() {
					var e;
					null == (e = this.resizeObserver) || e.disconnect(), this.resizeObserver = void 0, this.listeners.clear()
				}
				queueCompute() {
					this.queuedCompute || (this.queuedCompute = !0, Promise.resolve().then(() => this.computeLayout()))
				}
				computeLayout() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					this.queuedCompute = !1;
					let t = 0,
						n = 0;
					for (let i of this.items) {
						let r = this.listeners.get(i.notification.id);
						if (null == r) continue;
						let {
							offsetHeight: l
						} = r.element;
						(r.top !== t || r.height !== l || r.index !== n) && (e = !0), r.top = t, r.height = l, r.index = n, 0 === t && (this.matchHeight !== l && (e = !0), this.matchHeight = l), t += l + 8, n++
					}
					e && this.broadcastLayoutUpdates()
				}
				broadcastLayoutUpdates() {
					for (let e of this.items) {
						let t = this.listeners.get(e.notification.id);
						null != t && t.callback({
							locked: this.locked,
							matchHeight: this.matchHeight,
							height: t.height,
							top: t.top,
							index: t.index
						})
					}
				}
				subscribe(e, t, n) {
					var i;
					this.listeners.set(e, {
						notificationId: e,
						callback: n,
						element: t,
						height: 0,
						top: 0,
						index: 0
					}), null == (i = this.resizeObserver) || i.observe(t), this.queueCompute()
				}
				unsubscribe(e) {
					var t;
					let n = this.listeners.get(e);
					null != n && (null == (t = this.resizeObserver) || t.unobserve(n.element), this.listeners.delete(e), this.queueCompute())
				}
				getLayoutSpecs(e) {
					return this.listeners.get(e)
				}
				constructor(e) {
					l(this, "resizeObserver", void 0), l(this, "listeners", new Map), l(this, "queuedCompute", !1), l(this, "items", []), l(this, "matchHeight", 0), l(this, "locked", !0), l(this, "handleResize", e => {
						this.computeLayout()
					}), this.locked = e
				}
			}
			let s = i.createContext(new o(!0));

			function c(e, t, n) {
				return t && 0 !== e ? 20 * Math.max(e / 5, 0) : n
			}
			let a = {
				mass: .8,
				friction: 25,
				tension: 320
			};

			function u(e, t, n) {
				let [l, o] = (0, r.q_F)(() => ({
					from: {
						opacity: 0,
						scale: 1,
						transform: 0,
						height: 0,
						contentOpacity: 1
					}
				}), void 0, []), u = i.useRef(o), d = i.useContext(s), h = i.useMemo(() => {
					let t = !1;
					return n => {
						null == n ? d.unsubscribe(e) : d.subscribe(e, n, e => {
							let {
								locked: n,
								matchHeight: i,
								height: r,
								top: l,
								index: o
							} = e, {
								current: s
							} = u, d = {
								opacity: n && o > 4 ? 0 : n ? Math.min(1 - o / 4, 1) : 1,
								scale: n ? Math.min(1 - o / 4, 1) : 1,
								transform: c(o, n, l),
								contentOpacity: n && o > 0 ? 0 : 1,
								height: n ? i : r
							};
							s({
								from: t ? void 0 : {
									opacity: 0,
									scale: 1.1,
									transform: -((n ? i : r) * 1),
									contentOpacity: 1,
									height: n ? i : r
								},
								to: d,
								config: a
							}), t = !0
						})
					}
				}, [e, d]);
				return i.useLayoutEffect(() => {
					if (t === r.pJH.YEETED) {
						let t = d.getLayoutSpecs(e);
						if (null == t) return void n();
						u.current({
							to: {
								scale: .8,
								opacity: 0,
								transform: c(t.index, d.locked, t.top) + (d.locked ? 0 : t.height / 2)
							},
							config: a
						}), setTimeout(n, 300)
					}
				}, [t, n, e, d]), {
					ref: h,
					springs: l
				}
			}
		},
		561064: function(e, t, n) {
			n.d(t, {
				Z: () => u,
				i: () => a
			});
			var i = n(442837),
				r = n(850405),
				l = n(426419),
				o = n(928518),
				s = n(501787),
				c = n(981631);

			function a() {
				var e, t;
				let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.Z,
					i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, r.e)();
				return null != (t = null != (e = n.getWindow(s.$J)) ? e : i ? n.getWindow(c.KJ3.ACTIVITY_POPOUT) : void 0) ? t : window
			}

			function u() {
				let e = (0, l.P)();
				return (0, i.e7)([o.Z], () => a(o.Z, e))
			}
		},
		238246: function(e, t, n) {
			n.d(t, {
				Z: () => V
			}), n(388685);
			var i, r = n(255367),
				l = n(73800),
				o = n(120356),
				s = n.n(o),
				c = n(670481),
				a = n(512722),
				u = n.n(a),
				d = n(688642),
				h = n(731965),
				p = n(442837),
				m = n(481060),
				b = n(490173),
				f = n(175724),
				v = n(280492),
				g = n(40851),
				y = n(607070),
				O = n(899663),
				x = n(317381),
				C = n(100527),
				j = n(906732),
				w = n(168551),
				P = n(260035),
				k = n(628123),
				Z = n(686546),
				E = n(950796);
			n(151851);
			var S = n(587061),
				z = n(280049),
				N = n(314910),
				D = n(22205),
				T = n(746106),
				M = n(892071),
				L = n(358085),
				R = n(62883),
				I = n(998502),
				W = n(473159),
				_ = n(928518),
				A = n(981631),
				U = n(501787),
				F = n(728294);

			function K(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function q(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						i = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), i.forEach(function(t) {
						K(e, t, n[t])
					})
				}
				return e
			}

			function B(e, t) {
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
			class H extends(i = l.Component) {
				componentDidMount() {
					let {
						guestWindow: e
					} = this.props, t = e.document;
					null == t.querySelector("title") && null != t.head && t.head.appendChild(t.createElement("title")), this.updateTitle(), this.updateClientTheme(), (0, W.O)(e), e.addEventListener("blur", this.handleBlur), L.isPlatformEmbedded ? t.addEventListener("contextmenu", R.contextMenuCallbackNative, !1) : t.addEventListener("contextmenu", R.contextMenuCallbackWeb, !1), e.addEventListener("beforeunload", this.beforeUnload), this.registerPopoutGlobalKeybinds()
				}
				componentDidUpdate(e) {
					let {
						title: t,
						clientThemesCSS: n
					} = this.props;
					e.title !== t && this.updateTitle(), e.clientThemesCSS !== n && this.updateClientTheme()
				}
				componentWillUnmount() {
					let {
						guestWindow: e
					} = this.props, t = e.document;
					this.unregisterPopoutGlobalKeybinds(), e.removeEventListener("blur", this.handleBlur), L.isPlatformEmbedded ? t.removeEventListener("contextmenu", R.contextMenuCallbackNative) : t.removeEventListener("contextmenu", R.contextMenuCallbackWeb), (0, h.j)(() => m.s9z.setState(e => B(q({}, e), {
						[m.u1M]: []
					}))), e.removeEventListener("beforeunload", this.beforeUnload)
				}
				updateTitle() {
					let {
						title: e,
						guestWindow: t
					} = this.props, n = t.document.querySelector("title");
					null != n && (n.innerText = e)
				}
				updateClientTheme() {
					let {
						clientThemesCSS: e,
						guestWindow: t
					} = this.props, n = t.document, i = n.head;
					u()(null != i, "Window document ".concat("head", " was null"));
					let r = i.querySelector("style[".concat(w.PQ, "]"));
					if (null != r) {
						r.textContent = e;
						return
					}
					let l = n.createElement("style");
					l.setAttribute(w.PQ, "true"), l.textContent = e, i.appendChild(l)
				}
				registerPopoutGlobalKeybinds() {
					let {
						guestWindow: e
					} = this.props, t = e.document;
					for (let e of (this._combokeys = (0, z.r)(t.documentElement), [v.iN, v.oV, f.f]))
						if (e.comboKeysBindGlobal)
							for (let t of e.binds) this._combokeys.bindGlobal(t, (t, n) => ("function" == typeof e.action && e.action(t, n), !1))
				}
				unregisterPopoutGlobalKeybinds() {
					null != this._combokeys && this._combokeys.reset()
				}
				render() {
					let {
						focused: e,
						forcedColors: t,
						children: n,
						windowKey: i,
						isFullScreen: l,
						withTitleBar: o,
						guestWindow: a,
						clientThemesClassName: u,
						contentClassName: h,
						hideModals: p = !1
					} = this.props;
					(0, L.getPlatform)();
					let f = i === U.$J ? D.Z : k.Z;
					return (0, r.jsx)(d.VK, {
						children: (0, r.jsx)(T.w, {
							windowKey: i,
							children: (0, r.jsx)(O.Z, {
								children: (0, r.jsxs)(m.JcV, {
									containerRef: this.rootRef,
									children: [(0, r.jsx)(G, {
										guestWindow: a,
										className: u,
										children: (0, r.jsxs)(f, {
											children: [(0, r.jsx)(Z.Co, {}), (0, r.jsx)(g.Wu, {
												appContext: A.IlC.POPOUT,
												renderWindow: a,
												children: (0, r.jsx)(P.m, {
													children: (0, r.jsxs)(N.yP, {
														children: [(0, r.jsxs)("div", {
															className: F.popout,
															children: [o && !l && (0, r.jsx)(E.T, {
																windowKey: i,
																short: !0
															}), null, (0, r.jsx)("div", {
																className: s()(F.content, h),
																children: n
															})]
														}), !p && (0, r.jsx)(m.nKe, {}), (0, r.jsx)(b.Z, {}), (0, r.jsx)(N.Un, {})]
													})
												})
											})]
										})
									}), (0, r.jsx)(c.OU, {})]
								})
							})
						}, t)
					})
				}
				constructor(...e) {
					super(...e), K(this, "rootRef", l.createRef()), K(this, "_cleanupWindowActionCreators", void 0), K(this, "_combokeys", null), K(this, "beforeUnload", e => {
						let {
							onBeforeUnload: t
						} = this.props, n = () => {
							_.Z.unmountWindow(this.props.windowKey), L.isPlatformEmbedded && I.ZP.close(this.props.windowKey)
						};
						null != t ? t({
							e,
							unmountWindow: n
						}) : n()
					}), K(this, "handleBlur", () => {
						var e, t;
						null == (e = (t = this.props).onBlur) || e.call(t)
					})
				}
			}
			K(H, "defaultProps", {
				withTitleBar: !0
			});
			let G = l.forwardRef(function(e, t) {
					let {
						guestWindow: n,
						className: i,
						children: o
					} = e, {
						lang: c,
						style: a,
						className: d
					} = (0, M.vP)();
					return l.useEffect(() => {
						let e = n.document.documentElement;
						u()(null != e, "Window document element was null"), e.setAttribute("style", a)
					}, [n, a]), l.useEffect(() => {
						let e = n.document.documentElement;
						u()(null != e, "Window document element was null"), e.setAttribute("lang", c)
					}, [n, c]), (0, r.jsx)("div", {
						"data-popout-root": !0,
						ref: t,
						className: s()(d, i),
						children: o
					})
				}),
				V = l.forwardRef(function(e, t) {
					let {
						guestWindow: n,
						focused: i,
						isFullScreen: l
					} = (0, p.cj)([_.Z], () => ({
						guestWindow: _.Z.getWindow(e.windowKey),
						focused: _.Z.getWindowFocused(e.windowKey),
						isFullScreen: _.Z.isWindowFullScreen(e.windowKey)
					}));
					u()(null != n, "Missing guestWindow reference");
					let {
						forcedColors: o,
						connectedEmbeddedActivity: s
					} = (0, p.cj)([y.Z, x.ZP], () => ({
						forcedColors: y.Z.useForcedColors ? "yes" : "no",
						connectedEmbeddedActivity: x.ZP.getCurrentEmbeddedActivity()
					}));
					(0, S.Z)(n, !1);
					let {
						analyticsLocations: c
					} = (0, j.ZP)(C.Z.POPOUT_WINDOW), {
						clientThemesClassName: a,
						clientThemesCSS: d
					} = (0, w.ZP)();
					return null == n ? null : (0, r.jsx)(m.Sle, {
						children: (0, r.jsx)(j.Gt, {
							value: c,
							children: (0, r.jsx)(H, B(q({
								ref: t
							}, e), {
								guestWindow: n,
								focused: i,
								isFullScreen: l,
								forcedColors: o,
								connectedEmbeddedActivity: s,
								clientThemesClassName: a,
								clientThemesCSS: d
							}))
						})
					})
				})
		},
		254761: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			var i = n(255367);
			n(73800);
			var r = n(325767);

			function l(e) {
				var t, n, {
						width: l = 16,
						height: o = 16,
						color: s = "currentColor",
						foreground: c
					} = e,
					a = function(e, t) {
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
					}(e, ["width", "height", "color", "foreground"]);
				return (0, i.jsx)("svg", (t = function(e) {
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
				}({}, (0, r.Z)(a)), n = n = {
					width: l,
					height: o,
					viewBox: "0 0 430 430",
					children: (0, i.jsx)("path", {
						className: c,
						color: s,
						d: "M187.9,308.1c17.9-13.5,43-13.7,61.1-0.3c1.9,1.3,2.4,4,1.1,5.8s-3.7,2.3-5.6,0.9l-0.3-0.3 c-15.1-11.3-36.3-11.2-51.3,0.1c-0.8,0.5-1.6,0.8-2.4,0.8c-1.2,0-2.4-0.5-3.2-1.6C185.8,312,186.2,309.3,187.9,308.1 M124.4,236 c11.7,0,21.3,9.4,21.3,21.1s-9.4,21.1-21.1,21.1c-11.7,0-21.1-9.4-21.1-21.1C103.1,245.6,112.7,236,124.4,236 M315,236 c11.7,0,21.3,9.4,21.3,21.3c0,11.7-9.4,21.1-21.1,21.1s-21.1-9.4-21.1-21.1C294,245.6,303.5,236,315,236 M347.8,307.2 c2-0.3,4-0.7,6-1.2c2.3-0.5,4.4,0.7,5,2.9c0.7,2.1-0.7,4.4-2.8,5c-2.3,0.7-4.6,1.1-7,1.3c-0.1,0-0.3,0-0.5,0c-2,0-3.7-1.5-4-3.6 C344.1,309.7,345.7,307.6,347.8,307.2 M128.1,87.2l-0.3,0.1c-14.3,5.8-23.6,19.5-23.6,35.1c0,8.5,2.9,16.6,8.5,23.5 c0,0,0,0.1,0.1,0.1l0,0c0.1,0.1,11.3,15.3,31.4,16.9c2.3,0.1,3.9,2.1,3.7,4.4c-0.1,2.1-2,3.7-4,3.7c-0.1,0-0.3,0-0.3,0 c-18.9-1.5-30.8-12.8-35.3-17.8l-4.6,1.7c-0.1,0.1-0.3,0.1-0.5,0.3c-25.6,9.6-42.2,32.1-42.2,57.5c0,10.6,3.1,21.1,8.6,30.4 c0.7,1.1,0.8,2.3,0.4,3.3c-0.3,1.2-1.2,2-2.3,2.5C36.2,263.1,16,293.6,16,327c0,47.6,39.9,86.2,88.9,86.2c32.4,0,68-6.2,106.1-18.5 c3.1-1.3,39.5-16.7,91.1-14.5c2.3,0.1,4,2,3.9,4.3c-0.1,2.3-1.9,4.1-4.3,3.9c-35.6-1.6-64,5.7-78.1,10.4 c26.2,9.6,63.8,14.5,111.7,14.5c43.3,0,78.6-35.2,78.6-78.6c0-20.3-8-39.7-22.1-54.3c-3.2,7.6-10.2,20.2-23.2,28.2 c-0.7,0.4-1.3,0.7-2.1,0.7c-1.3,0-2.7-0.7-3.5-1.9c-1.2-1.9-0.5-4.4,1.3-5.6c16.2-10,21.8-28.7,22.1-29.6 c4.1-17.7,2.4-35.6-4.9-53.3c-4.1-10-10.1-19-17.8-26.8c-1.5-1.6-13.5-11.3-13.5-11.3c-3.6,6.9-12.8,19-33.6,23.6 c-0.3,0-0.5,0.1-0.8,0.1c-1.9,0-3.6-1.3-4-3.2c-0.5-2.3,0.9-4.4,3.1-4.8c23.9-5.2,29.2-21.7,29.6-22.7c3.5-13,2.3-26.4-3.5-39.6 c-8.2-18.9-25.9-32.7-47.4-37.2c-3.5,5.2-12.8,16.1-31.6,20.3c-0.3,0.1-0.7,0.1-0.9,0.1c-1.9,0-3.6-1.3-4-3.2 c-0.5-2.3,0.8-4.4,3.1-4.9c20.2-4.6,27.2-17.7,27.8-18.7c2.8-6.4,2.8-13.7,0.3-21.4c-4.6-14.1-15.9-16.9-31.6-20.9 c-16.9-4.1-37.6-9.3-55.7-31.5c-15.7,10.9-30.8,33.3-29,50.7c1.1,9.8,7.4,16.9,19,20.9c2.1,0.8,3.2,3.1,2.5,5.2 c-0.8,2.1-3.1,3.2-5.2,2.5c-11.8-4.1-18.1-10.5-21.4-17C167,79.1,141.9,80.6,128.1,87.2z"
					})
				}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var i = Object.getOwnPropertySymbols(e);
						n.push.apply(n, i)
					}
					return n
				})(Object(n)).forEach(function(e) {
					Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
				}), t))
			}
		}
	}
]);
//# sourceMappingURL=5bd99caae75dc03c.js.map