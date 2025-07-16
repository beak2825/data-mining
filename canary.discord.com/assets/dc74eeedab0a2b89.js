"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["13474"], {
		597846: function(e, t, r) {
			r.d(t, {
				z: () => c
			});
			var n = r(255367),
				a = r(73800),
				i = r(658312),
				l = r(503082);
			let u = {
					minInterval: 1e3 / 60
				},
				c = e => {
					let {
						drawCallback: t,
						size: r,
						fps: c = 60,
						useOffscreen: s = !0,
						playing: o = !0,
						useClockOptions: d = {}
					} = e, f = a.useMemo(() => Object.assign({
						minInterval: 1e3 / c
					}, u, d), [c, d]), m = a.useRef(null), h = a.useRef(null);
					a.useEffect(() => {
						null != h.current && r.w > 0 && r.h > 0 && h.current.setSize(r)
					}, [r]), a.useEffect(() => {
						if (null != m.current) {
							let e = new l.Z(m.current);
							h.current = e, s && e.setupOffscreenCanvas()
						}
					}, [m, s, r]);
					let {
						ticking: p,
						stop: y,
						reset: w
					} = (0, i.Z)(e => {
						if (null != h.current) {
							let {
								width: r,
								height: n
							} = h.current.canvas;
							h.current.clearRect({
								x: 0,
								y: 0,
								w: r,
								h: n
							}), t(h.current, e / 1e3)
						}
					}, f);
					return a.useEffect(() => {
						o && !p.current && w(), o || y()
					}, [o, w, y, p]), (0, n.jsx)("div", {
						children: (0, n.jsx)("canvas", {
							ref: m
						})
					})
				}
		},
		258340: function(e, t, r) {
			r.d(t, {
				Z: () => h
			}), r(388685), r(410992), r(227481), r(730884), r(20464), r(341884), r(364341), r(629680), r(505025), r(918970), r(121784), r(644351), r(146733), r(82823), r(642613);
			var n = r(73800),
				a = r(392711),
				i = r(633302),
				l = r(960048),
				u = r(709054),
				c = r(693824);
			let s = e => Math.round(4 * e) / 4,
				o = e => {
					let [t, r] = n.useState({
						y: .9 * e.h,
						x: .3 * e.w
					}), [a, i] = n.useState(1400), [l, u] = n.useState(.94), [c, s] = n.useState(110), [o, d] = n.useState(30), [f, m] = n.useState(900), [h, p] = n.useState(60);
					n.useEffect(() => {
						r({
							y: .9 * e.h,
							x: .3 * e.w
						})
					}, [e.h, e.w]);
					let y = n.useCallback(() => {
						let e, t;
						return 60 === h ? p(() => 45) : (d(t => null != (e = Math.max(3, Math.floor(.75 * t))) ? e : t), m(e => null != (t = Math.max(6, Math.floor(.8 * e))) ? t : e), null != e && e < 16.875 && p(() => 28)), !0
					}, [h, 30]);
					return {
						SPEED: t,
						GRAVITY: a,
						DRAG: l,
						Y_POS: c,
						PARTICLES_PER_EMISSION: o,
						MAX_PARTICLES: f,
						tickRate: 1e3 / h,
						improvePerformance: y
					}
				},
				d = () => {
					let e = Math.random();
					return e < .15 ? (0, a.random)(.8, 1) : e < .8 ? (0, a.random)(1, 1.3) : (0, a.random)(1.3, 1.75)
				},
				f = (e, t) => e.position.y > t.h || e.position.x < -128 || e.position.x > t.w,
				m = e => {
					let t = e.particles.current,
						r = e.particleStates.current;
					e.sortedParticles.current.sort((e, n) => {
						let a = r[e],
							i = r[n];
						return a !== i ? a - i : 1 === a ? t[e].scale - t[n].scale : 0
					})
				},
				h = e => {
					let {
						SPEED: t,
						GRAVITY: r,
						DRAG: h,
						Y_POS: p,
						PARTICLES_PER_EMISSION: y,
						MAX_PARTICLES: w,
						tickRate: v,
						improvePerformance: x
					} = o(e), E = {
						particles: n.useRef(Array(w)),
						particleStates: n.useRef(new Uint8Array(w)),
						sortedParticles: n.useRef(new Uint16Array(Array.from({
							length: w
						}, (e, t) => t))),
						freeParticles: n.useRef(w),
						activeParticles: n.useRef(0)
					}, S = n.useRef(!1);
					return {
						update: t => {
							if (0 === E.activeParticles.current) return;
							let n = E.particleStates.current,
								a = E.particles.current;
							for (let i = 0; i < w; i++) {
								if (0 === n[i]) continue;
								let l = a[i];
								l.position.x -= l.velocity.x * t, l.position.y -= l.velocity.y * t, l.velocity.x *= h ** t, l.velocity.y *= h ** t, l.rotation += l.angularVelocity * t, l.velocity.y -= r * t, f(l, e) && (E.particleStates.current[i] = 0, E.activeParticles.current -= 1, E.freeParticles.current += 1)
							}
							0 === E.activeParticles.current && (S.current = !1)
						},
						draw: t => {
							if (t.clearRect({
									x: 0,
									y: 0,
									w: e.w,
									h: e.h
								}), 0 === E.activeParticles.current) return;
							let r = E.particleStates.current,
								n = E.particles.current,
								a = E.sortedParticles.current;
							for (let e = 0; e < w; e++) {
								var u;
								let o = a[e];
								if (0 === r[o]) continue;
								let d = n[o];
								if (null == d) continue;
								let {
									x: f,
									y: m
								} = d.position, {
									scale: h
								} = d;
								if (h >= 1.3 && t.setFilter({
										blur: s((d.scale - 1) * 3)
									}), h >= 1.3 && (h = h ** 2), null == (u = t.assetMap) ? void 0 : u.has(d.key)) {
									let e = {
											w: 32 * h,
											h: 32 * h
										},
										r = {
											x: f + e.w / 2,
											y: m + e.h / 2
										};
									t.rotateAroundOriginAndDraw(r, d.rotation, () => t.drawImage(d.key, {
										x: 0,
										y: 0
									}, e, {
										fillMode: c.JU.Contain
									}))
								} else {
									let e = i.ZP.contentHasUnicodeOrEmoji(d.key),
										r = 24 * d.scale,
										n = {
											x: f + r / 2,
											y: m + r / 2
										};
									null != e ? (t.setFont({
										size: r
									}), t.rotateAroundOriginAndDraw(n, d.rotation, () => t.drawText(d.key, {
										x: 0,
										y: 0
									}))) : (t.setFont({
										size: r
									}), t.rotateAroundOriginAndDraw(n, d.rotation, () => t.drawText("\uD83C\uDF89", {
										x: 0,
										y: 0
									})), l.Z.captureMessage("Simple Confetti couldn't trigger explosion for ".concat(d.key, ".  It doesn't have an image and seemingly isn't a valid unicode emoji.")))
								}
								t.setFilter({
									blur: 0
								})
							}
						},
						emit: (r, n) => {
							if (u.default.isProbablyAValidSnowflake(r), E.freeParticles.current < y / 2) return;
							let i = 0 === n.x && 0 === n.y && 0 === n.w && 0 === n.h,
								l = {
									min: e.h / 8,
									max: e.h / 3
								},
								c = n.y < .66 * e.h ? Math.max(.2, n.y / (.66 * e.h)) : 1,
								s = 1 + (1 - c);
							for (let u = 0; u < y; u++) {
								let u, o;
								u = i ? {
									x: (0, a.random)(-t.x, t.x, !0),
									y: t.y + (0, a.random)(-l.min, l.max, !0)
								} : {
									x: (0, a.random)(-t.x * s, t.x * s, !0),
									y: t.y * c + (0, a.random)(-l.min, l.max, !0)
								};
								let f = (0, a.random)(0, 30),
									h = Math.atan2(-t.y - (0, a.random)(-l.min, l.max, !0), (0, a.random)(-t.x, t.x, !0)) * (0, a.random)(-50, 50);
								if (i) o = {
									x: e.w / 2 + (0, a.random)(-50, 50),
									y: e.h - p + (0, a.random)(-50, 50)
								};
								else {
									let e = n.h / 4,
										t = n.h / 4;
									o = {
										x: n.x + n.w / 2 + (0, a.random)(-t, t),
										y: n.y + n.h / 2 + (0, a.random)(-e, e)
									}
								}
								for (let e = 0; e < w; e += 1)
									if (0 === E.particleStates.current[e]) {
										E.particles.current[e] = {
											key: r,
											position: o,
											velocity: u,
											scale: d(),
											rotation: f,
											angularVelocity: h
										}, E.particleStates.current[e] = 1, E.freeParticles.current -= 1, E.activeParticles.current += 1;
										break
									} m(E)
							}
							S.current = !0
						},
						tickRate: v,
						improvePerformance: x,
						shouldTick: S
					}
				}
		},
		420541: function(e, t, r) {
			r.r(t), r.d(t, {
				default: () => f
			});
			var n = r(255367),
				a = r(73800),
				i = r(597846),
				l = r(885006),
				u = r(111810),
				c = r(317568),
				s = r(516604),
				o = r(992472);
			let d = () => {
					let e = (0, l.Z)(),
						t = a.useMemo(() => ({
							w: e.width,
							h: e.height
						}), [e]),
						r = (0, s.Z)(t);
					return (0, c.Z)(), (0, n.jsx)("div", {
						className: o.canvasWrapper,
						id: "simple-confetti-canvas",
						children: (0, n.jsx)(i.z, {
							playing: r.playing,
							size: t,
							useClockOptions: {
								minInterval: r.tickRate,
								droppedFramesCallbackThreshold: 10,
								droppedFramesResetTime: 2e3,
								droppedFramesCallback: r.improvePerformance
							},
							drawCallback: (e, t) => {
								r.update(t), r.draw(e)
							}
						})
					})
				},
				f = () => (0, u.kf)("ConfettiCanvasComponent") ? (0, n.jsx)(d, {}) : null
		},
		317568: function(e, t, r) {
			r.d(t, {
				Z: () => u
			});
			var n = r(73800),
				a = r(442837),
				i = r(570140),
				l = r(451478);
			let u = () => {
				let e = (0, a.e7)([l.Z], () => l.Z.isFocused());
				n.useEffect(() => {
					e || i.Z.dispatch({
						type: "POTIONS_SET_CONFETTI_MODE",
						enabled: !1
					})
				}, [e])
			}
		},
		516604: function(e, t, r) {
			r.d(t, {
				Z: () => o
			}), r(388685);
			var n = r(73800),
				a = r(570140),
				i = r(4646),
				l = r(258340),
				u = r(768581),
				c = r(176354),
				s = r(823961);
			let o = e => {
				let {
					update: t,
					draw: r,
					emit: o,
					tickRate: d,
					improvePerformance: f,
					shouldTick: m
				} = (0, l.Z)(e), h = n.useMemo(() => new i.ZP, []), p = n.useCallback(e => {
					e.assetMap = h, r(e)
				}, [h, r]), [y, w] = n.useState(!1), v = n.useRef(null), x = n.useRef(null), E = n.useRef(s.Z.lastConfetti);
				return n.useEffect(() => {
					async function e(e) {
						var t;
						let {
							emoji: r,
							boundingRect: n
						} = e, i = null != (t = r.id) ? t : r.name, l = null == r.id ? c.ZP.getURL(r.name) : u.ZP.getEmojiURL({
							id: r.id,
							animated: !1,
							size: 64,
							forcePNG: !0
						});
						await h.loadRemoteImage(i, l), o(i, n), w(!0), null != x.current && clearTimeout(x.current), x.current = setTimeout(() => {
							var e;
							let t = null == (e = s.Z.lastConfetti) ? void 0 : e.triggerTime;
							(null == t || Date.now() - t > 2500) && a.Z.dispatch({
								type: "POTIONS_SET_CONFETTI_MODE",
								enabled: !1
							})
						}, 2500)
					}
					let t = E.current;
					return null != t && (E.current = void 0, e(t)), a.Z.subscribe("POTIONS_TRIGGER_MESSAGE_CONFETTI", e), () => a.Z.unsubscribe("POTIONS_TRIGGER_MESSAGE_CONFETTI", e)
				}, [h, o]), n.useEffect(() => () => {
					null != x.current && (a.Z.dispatch({
						type: "POTIONS_SET_CONFETTI_MODE",
						enabled: !1
					}), clearTimeout(x.current))
				}, []), n.useEffect(() => {
					let e = () => {
						m.current ? v.current = setTimeout(e, 1e3) : (w(!1), v.current = null)
					};
					return v.current = setTimeout(e, 1e3), () => {
						null != v.current && (a.Z.dispatch({
							type: "POTIONS_SET_CONFETTI_MODE",
							enabled: !1
						}), clearTimeout(v.current))
					}
				}, [y, m]), {
					update: t,
					draw: p,
					tickRate: d,
					improvePerformance: f,
					playing: y
				}
			}
		},
		885006: function(e, t, r) {
			r.d(t, {
				Z: () => a
			}), r(388685);
			var n = r(73800);

			function a() {
				arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
				let [e, t] = n.useState(function() {
					var e, t;
					return arguments.length > 0 && void 0 !== arguments[0] && arguments[0], {
						width: null != (e = window.innerWidth) ? e : 1080,
						height: null != (t = window.innerHeight) ? t : 1080
					}
				}());
				return n.useLayoutEffect(() => {
					function e() {
						t({
							width: window.innerWidth,
							height: window.innerHeight
						})
					}
					return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
				}, []), e
			}
		},
		992472: function(e, t, r) {
			e.exports = {
				canvasWrapper: "canvasWrapper_f7aebd"
			}
		},
		82823: function(e, t, r) {
			r(492189)("Uint16", function(e) {
				return function(t, r, n) {
					return e(this, t, r, n)
				}
			})
		}
	}
]);
//# sourceMappingURL=dc74eeedab0a2b89.js.map