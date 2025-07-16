"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["38626"], {
		784370: function(e) {
			e.exports = "/assets/ac8ab79ce1412299.gif"
		},
		64395: function(e) {
			e.exports = "/assets/dc0be2895b8884fd.svg"
		},
		785388: function(e, t, n) {
			n.d(t, {
				default: () => et
			}), n(388685), n(539854), n(642613), n(358797), n(415506);
			var i = n(255367),
				r = n(73800),
				l = n(120356),
				o = n.n(l),
				a = n(392711),
				s = n.n(a),
				c = n(866442),
				u = n(442837),
				d = n(780384),
				h = n(481060),
				p = n(596454),
				m = n(129861),
				f = n(700582),
				g = n(607070),
				b = n(600164),
				j = n(633302),
				O = n(712057),
				y = n(660189),
				v = n(372900),
				T = n(566006),
				x = n(620652),
				S = n(815605),
				E = n(222677),
				R = n(995774),
				I = n(665906),
				N = n(210887),
				P = n(314897),
				C = n(592125),
				w = n(271383),
				Z = n(542578),
				A = n(375954),
				M = n(496675),
				_ = n(699516),
				L = n(594174),
				k = n(768581),
				D = n(176354),
				U = n(5192),
				V = n(709054),
				B = n(91047),
				G = n(981631),
				H = n(388032),
				W = n(111932),
				F = n(20493);

			function z(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function K(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						i = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), i.forEach(function(t) {
						z(e, t, n[t])
					})
				}
				return e
			}

			function J(e, t) {
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

			function X(e) {
				return null == e.id ? j.ZP.convertSurrogateToName(e.name) : ":".concat(e.name, ":")
			}
			let Y = e => {
					let {
						emoji: t,
						channelId: n,
						messageId: l
					} = e, [a, s] = r.useState(!0), [c, u] = r.useState([]), d = r.useMemo(() => {
						if (null == c || c.length < 1) return;
						let e = (0, S.Zn)(t, c[0], n, {
							emojiSize: x.M.LARGE,
							messageId: l
						});
						return (0, i.jsx)(x.Z, {
							className: W.__invalid_effect,
							effect: e,
							emojiSize: x.M.LARGE,
							onComplete: () => s(!1)
						})
					}, [c, t, n, l]);
					return r.useEffect(() => {
						let e = !1;
						return s(!0), !async function() {
							let n = await (0, D.B6)(t);
							Array.isArray(n) && n.length > 0 && !e && u(n)
						}(), () => {
							e = !0
						}
					}, [t]), (0, i.jsxs)("div", {
						className: W.burstEmojiSection,
						children: [d, (0, i.jsx)(p.Z, {
							className: o()(W.burstEmoji, {
								[W.hideEmoji]: a
							}),
							emojiId: t.id,
							emojiName: t.name,
							animated: t.animated,
							size: "reaction"
						}), (0, i.jsx)(h.Text, {
							variant: "text-md/medium",
							children: X(t)
						})]
					})
				},
				q = r.memo(function(e) {
					let {
						emoji: t,
						count: n,
						isSelected: l,
						setSelected: a,
						reactionType: s,
						colors: u
					} = e, d = r.useMemo(() => X(t), [t]), p = r.useMemo(() => (function(e, t, n, r) {
						let l = null == e.id ? D.ZP.getURL(e.name) : k.ZP.getEmojiURL({
							id: e.id,
							animated: e.animated,
							size: 24
						});
						return null != l && "" !== l ? (0, i.jsx)("img", {
							className: n,
							src: l,
							alt: e.name
						}) : (0, i.jsx)("span", {
							className: r,
							children: e.name
						})
					})(t, 0, W.emoji, o()(W.emoji, W.emojiText)), [t]), m = s === T.O.BURST, f = m ? H.t.VmiNjY : H.t.cNfs19, g = H.intl.formatToPlainString(f, {
						name: d,
						n: n
					}), b = r.useMemo(() => {
						let e = {};
						if (m) {
							var t, n, i, r;
							let {
								backgroundColor: o = "",
								opacity: a = 1
							} = null != u ? u : {};
							l ? (e.background = null != (t = (0, c.wK)(o, a)) ? t : "", e.border = "1px solid ".concat(null != (n = (0, c.wK)(o, 1.1 * a)) ? n : "")) : (e.background = null != (i = (0, c.wK)(o, .025)) ? i : "", e.border = "1px solid ".concat(null != (r = (0, c.wK)(o, .05)) ? r : ""))
						}
						return e
					}, [m, u, l]), j = r.useMemo(() => {
						let e = {};
						if (m) {
							let {
								accentColor: t = ""
							} = null != u ? u : {};
							e.color = t
						}
						return e
					}, [m, u]), O = r.useCallback(() => {
						a({
							emoji: t,
							reactionType: s
						})
					}, [t, s, a]);
					return (0, i.jsx)(h.ua7, {
						position: "left",
						text: d,
						children: e => {
							let {
								onMouseEnter: t,
								onMouseLeave: r
							} = e;
							return (0, i.jsxs)(h.P3F, {
								className: o()({
									[W.reactionDefault]: !l,
									[W.reactionSelected]: l
								}),
								"aria-label": g,
								onClick: O,
								onMouseEnter: t,
								onMouseLeave: r,
								style: b,
								children: [p, (0, i.jsx)(h.Text, {
									variant: "text-sm/bold",
									style: j,
									children: n
								})]
							})
						}
					})
				});

			function $(e) {
				let {
					emoji: t,
					user: n,
					message: r,
					channel: l,
					guildId: o,
					reactionType: a,
					onRemoveReactor: s,
					disableManage: c = !1
				} = e, d = (0, u.e7)([P.default], () => P.default.getId()), p = (0, u.e7)([L.default], () => L.default.getUser(n.id), [n]), g = (0, I.$R)(l), j = (0, u.e7)([M.Z], () => M.Z.can(G.Plq.MANAGE_MESSAGES, l) && g) || d === n.id, O = (0, u.e7)([w.ZP, C.Z, _.Z], () => U.ZP.getName(o, l.id, n));
				return (0, i.jsxs)(b.Z, {
					className: W.reactorDefault,
					onContextMenu: e => (0, B.Pv)(e, n, l),
					align: b.Z.Align.CENTER,
					children: [(0, i.jsx)(b.Z.Child, {
						wrap: !0,
						grow: 0,
						shrink: 0,
						className: F.marginReset,
						children: (0, i.jsx)(f.Z, {
							user: null != p ? p : n,
							size: h.EFr.SIZE_24
						})
					}), (0, i.jsx)(b.Z.Child, {
						children: (0, i.jsxs)(h.Text, {
							tag: "strong",
							variant: "text-md/normal",
							className: W.name,
							children: [null != O && "" !== O && (0, i.jsx)("span", {
								className: n.isPomelo() ? "" : W.nickname,
								children: O
							}), (0, i.jsx)(m.Z, {
								user: n,
								className: null != O && "" !== O ? W.tagFaded : null,
								usernameClass: W.username,
								discriminatorClass: W.discriminator,
								forceUsername: !0
							})]
						})
					}), !c && j && (0, i.jsx)(h.P3F, {
						onClick: function() {
							E.WO({
								channelId: l.id,
								messageId: r.id,
								emoji: t,
								location: E.TW.MESSAGE,
								userId: n.id,
								options: {
									burst: a === T.O.BURST
								}
							}), null == s || s()
						},
						children: (0, i.jsx)(h.Dio, {
							size: "xs",
							color: "currentColor",
							className: W.remove
						})
					})]
				})
			}
			class Q extends r.PureComponent {
				componentDidMount() {
					this.loadMore()
				}
				componentDidUpdate(e) {
					s().isEqual(this.props.reaction, e.reaction) && this.props.reactionType === e.reactionType || this.setState({
						lastId: null,
						loadingMore: !1
					}, () => this.loadMore())
				}
				loadMore() {
					let {
						message: e,
						reaction: t,
						reactionType: n
					} = this.props, {
						lastId: i
					} = this.state;
					this.setState({
						loadingMore: !0
					}), E.U0({
						channelId: e.getChannelId(),
						messageId: e.id,
						emoji: t.emoji,
						limit: G.pTL,
						after: i,
						type: n
					}).then(e => {
						var t;
						return this.setState({
							loadingMore: !1,
							lastId: null == (t = e[e.length - 1]) ? void 0 : t.id
						})
					})
				}
				renderSection() {
					return null
				}
				render() {
					let {
						hasMore: e,
						reactors: t,
						reaction: n,
						message: r,
						reactionType: l
					} = this.props, o = [];
					return 0 === t.length && this.state.loadingMore ? o.push(length) : (o.push(t.length), e && o.push(1)), (0, i.jsxs)("div", {
						className: W.reactorsContainer,
						children: [l === T.O.BURST && (0, i.jsx)(Y, {
							emoji: n.emoji,
							channelId: r.getChannelId(),
							messageId: r.id
						}), (0, i.jsx)(h.aVo, {
							className: W.reactors,
							fade: !0,
							ref: this.scrollerRef,
							sections: o,
							sectionHeight: 0,
							rowHeight: this.getRowHeight,
							renderRow: this.renderRow,
							renderSection: this.renderSection,
							onScroll: e ? this.handleScroll : void 0
						})]
					})
				}
				constructor(...e) {
					super(...e), z(this, "scrollerRef", r.createRef()), z(this, "state", {
						lastId: null,
						loadingMore: !1
					}), z(this, "handleScroll", () => {
						let {
							current: e
						} = this.scrollerRef;
						if (null == e) return;
						let t = e.getScrollerState();
						t.scrollTop + t.offsetHeight >= t.scrollHeight - 44 && this.props.hasMore && !this.state.loadingMore && this.loadMore()
					}), z(this, "getRowHeight", (e, t) => {
						let {
							reactors: n
						} = this.props;
						if (1 === e) return 44 * (0 === t);
						if (0 === e) {
							if (0 === t && 0 === n.length) return 440;
							if (null != this.props.reactors[t]) return 44
						}
						return 0
					}), z(this, "renderRow", e => {
						let {
							section: t,
							row: n
						} = e, {
							message: r,
							guildId: l,
							channel: o,
							reaction: a,
							reactors: s,
							reactionType: c,
							disableManage: u
						} = this.props, d = s[n];
						return 1 === t ? 0 === n ? (0, i.jsx)(h.$jN, {
							className: W.spinnerMore
						}, "hasMore") : null : 0 === s.length && this.state.loadingMore ? (0, i.jsx)(h.$jN, {
							className: W.spinner
						}, "loadingMore") : null != d && (0, i.jsx)($, {
							message: r,
							emoji: a.emoji,
							guildId: l,
							channel: o,
							user: d,
							reaction: a,
							reactionType: c,
							disableManage: u
						}, d.id)
					})
				}
			}
			let ee = u.ZP.connectStores([Z.Z], e => {
				let {
					message: t,
					reaction: n,
					reactionType: i
				} = e, r = Z.Z.getReactions(t.getChannelId(), t.id, n.emoji, G.pTL, i);
				if (null == r) return {
					reactors: [],
					hasMore: !1
				};
				let l = Array.from(r.values()),
					o = (i === T.O.BURST ? n.burst_count : n.count) > l.length;
				return {
					reactors: l,
					hasMore: o
				}
			})(Q);

			function et(e) {
				let {
					message: t,
					selectedReaction: n,
					disableManage: l = !1,
					disableTabs: o = !1,
					onClose: a,
					transitionState: s,
					"aria-label": c = H.intl.string(H.t.gHp0Cw)
				} = e, p = (0, u.e7)([C.Z], () => C.Z.getChannel(t.getChannelId())), m = null == p ? void 0 : p.getGuildId(), f = (0, u.e7)([A.Z, y.Z], () => {
					var e, n;
					let i = null != (n = A.Z.getMessage(t.getChannelId(), t.id)) ? n : null == (e = y.Z.getMessage(V.default.castMessageIdAsChannelId(t.id))) ? void 0 : e.firstMessage;
					return null != i ? i.reactions : []
				}, [t]), b = r.useMemo(() => {
					let e = [];
					return f.forEach(t => {
						t.burst_count > 0 && e.push(J(K({}, t), {
							count: 0
						})), t.count > 0 && e.push(J(K({}, t), {
							burst_count: 0
						}))
					}), e.sort((e, t) => {
						let n = e.burst_count > 0 ? e.burst_count : e.count;
						return (t.burst_count > 0 ? t.burst_count : t.count) - n
					}), e
				}, [f]), j = b[0], [x, S] = function(e, t, n) {
					let [i, l] = r.useState(null != e ? e : t);
					return r.useEffect(() => {
						null != i && null == n.find(e => {
							let t = null != e.me_vote ? T.O.VOTE : e.burst_count > 0 ? T.O.BURST : T.O.NORMAL,
								n = (0, R.ir)(e.emoji, i.emoji),
								r = t === i.reactionType;
							return n && r
						}) && l(t)
					}, [i, l, n, t]), [i, l]
				}(n, null != j ? {
					emoji: j.emoji,
					reactionType: j.burst_count > 0 ? T.O.BURST : T.O.NORMAL
				} : null, b), E = r.useMemo(() => {
					var e;
					return null == x ? null : null != (e = f.find(e => (0, R.ir)(e.emoji, x.emoji))) ? e : null
				}, [f, x]), I = (0, u.e7)([g.Z], () => g.Z.saturation), P = (0, u.e7)([N.Z], () => (0, d.wj)(N.Z.theme));
				if (r.useEffect(() => {
						(0 === f.length || null == x && null == E) && setImmediate(a)
					}, [a, f.length, E, x]), null == x || null == E) return (0, i.jsx)(h.$jN, {});
				if (null == p) throw Error("MessageReactions.render: Message does not have a channelId");
				return (0, i.jsx)(v.Z.Provider, {
					value: null != m ? m : void 0,
					children: (0, i.jsxs)(h.Y0X, {
						"aria-label": c,
						transitionState: s,
						size: h.CgR.DYNAMIC,
						className: W.container,
						parentComponent: "MessageReactions",
						children: [o ? null : (0, i.jsx)(h.Ttm, {
							className: W.scroller,
							fade: !0,
							children: b.map(e => {
								var t;
								let n = e.burst_count > 0;
								return (0, i.jsx)(q, {
									isSelected: en(x, e, n ? T.O.BURST : T.O.NORMAL),
									setSelected: S,
									reactionType: n ? T.O.BURST : T.O.NORMAL,
									emoji: e.emoji,
									count: n ? e.burst_count : e.count,
									colors: null != e.burst_colors ? (0, O.Z)(e.burst_colors, I, P) : void 0
								}, "".concat(n ? "burst-" : "normal-").concat(null != (t = e.emoji.id) ? t : "", ":").concat(e.emoji.name))
							})
						}), (0, i.jsx)(ee, {
							message: t,
							reaction: E,
							guildId: m,
							channel: p,
							reactionType: x.reactionType,
							disableManage: l
						})]
					})
				})
			}
			let en = (e, t, n) => s().isEqual(e.emoji, t.emoji) && e.reactionType === n
		},
		446489: function(e, t, n) {
			n.d(t, {
				Z: () => b,
				y: () => g
			});
			var i, r, l = n(255367),
				o = n(73800),
				a = n(392711),
				s = n.n(a),
				c = n(748780),
				u = n(451478);

			function d(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function h(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						i = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), i.forEach(function(t) {
						d(e, t, n[t])
					})
				}
				return e
			}

			function p(e, t) {
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
			var m = ((i = m || {})[i.ABOVE = 0] = "ABOVE", i[i.VISIBLE = 1] = "VISIBLE", i[i.BELOW = 2] = "BELOW", i);

			function f(e, t) {
				return {
					toValue: e,
					duration: null != t ? t : 300,
					easing: c.Z.Easing.inOut(c.Z.Easing.back())
				}
			}

			function g(e, t, n) {
				if (null != t) {
					let i = Math.ceil(Math.log10(e + 1));
					return null != n && n > 0 ? Math.min(i, n) * t : i * t
				}
			}
			class b extends(r = o.PureComponent) {
				static getDerivedStateFromProps(e, t) {
					let {
						prevValue: n,
						currValue: i,
						nextValue: r
					} = t;
					return null == n && i !== e.value ? {
						prevValue: u.Z.isFocused() ? i : null,
						currValue: e.value
					} : null != r && r !== e.value ? {
						nextValue: e.value
					} : null
				}
				componentDidUpdate(e, t) {
					let {
						prevValue: n,
						currValue: i
					} = this.state;
					n !== t.prevValue && null != n && this.animateBetween(n, i)
				}
				animateBetween(e, t) {
					let n, {
						forcePosition: i,
						animationSpeed: r
					} = this.props;
					this.prevAnimate.setValue(1), null != i ? 0 === i ? (this.currAnimate.setValue(0), n = 2) : 2 === i && (this.currAnimate.setValue(2), n = 0) : e > t ? (this.currAnimate.setValue(0), n = 2) : (this.currAnimate.setValue(2), n = 0), c.Z.parallel([c.Z.timing(this.prevAnimate, f(n, r)), c.Z.timing(this.currAnimate, f(1, r))]).start(this.animateNext)
				}
				getAnimatedStyle(e) {
					let {
						animationColor: t
					} = this.props;
					return h({
						transform: [{
							translateY: e.interpolate({
								inputRange: [0, 1, 2],
								outputRange: ["-100%", "0%", "100%"]
							})
						}],
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0
					}, null != t && {
						color: t
					})
				}
				getMinWidth(e) {
					let {
						digitWidth: t,
						padStartLength: n
					} = this.props;
					return g(e, t, n)
				}
				padValue(e) {
					let {
						padStartLength: t
					} = this.props;
					return null != t ? String(e).padStart(t, "0") : e
				}
				render() {
					let {
						prevValue: e,
						currValue: t
					} = this.state, {
						color: n,
						formatString: i
					} = this.props, r = s().omit(this.props, ["value", "digitWidth", "padStartLength", "forcePosition"]);
					if (null == e) return (0, l.jsx)("div", p(h({}, r), {
						style: {
							color: n,
							minWidth: this.getMinWidth(t)
						},
						children: null != i ? i(this.padValue(t)) : this.padValue(t)
					}));
					let o = Math.max(e, t);
					return (0, l.jsxs)("div", p(h({}, r), {
						style: {
							color: n,
							position: "relative",
							overflow: "hidden"
						},
						children: [(0, l.jsx)("div", {
							style: {
								visibility: "hidden",
								minWidth: this.getMinWidth(o)
							},
							children: this.padValue(o)
						}), (0, l.jsx)(c.Z.div, {
							style: h({
								color: n
							}, this.getAnimatedStyle(this.prevAnimate)),
							children: null != i ? i(this.padValue(e)) : this.padValue(e)
						}), (0, l.jsx)(c.Z.div, {
							style: h({
								color: n
							}, this.getAnimatedStyle(this.currAnimate)),
							children: null != i ? i(this.padValue(t)) : this.padValue(t)
						})]
					}))
				}
				constructor(e) {
					super(e), d(this, "prevAnimate", void 0), d(this, "currAnimate", void 0), d(this, "animateNext", () => {
						let {
							currValue: e,
							nextValue: t
						} = this.state;
						null != t ? this.setState({
							prevValue: u.Z.isFocused() ? e : null,
							currValue: t,
							nextValue: null
						}) : this.setState({
							prevValue: null
						})
					}), this.state = {
						prevValue: null,
						currValue: e.value,
						nextValue: null
					}, this.prevAnimate = new c.Z.Value(0), this.currAnimate = new c.Z.Value(1)
				}
			}
			d(b, "Positions", m)
		},
		98474: function(e, t, n) {
			n.d(t, {
				Z: () => y
			}), n(388685);
			var i = n(255367),
				r = n(73800),
				l = n(505266),
				o = n(108542),
				a = n(748780),
				s = n(481060),
				c = n(596454),
				u = n(745510),
				d = n(314910),
				h = n(912893),
				p = n(768581),
				m = n(176354),
				f = n(675654),
				g = n(403122);

			function b(e) {
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
			}

			function j(e, t) {
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
			let O = [];

			function y(e) {
				let {
					messageId: t,
					emoji: n,
					startPosition: y,
					targetPosition: v
				} = e, [T, x] = r.useState(0), [S, E] = r.useState(0), [R, I] = r.useState(null), {
					confettiCanvas: N
				} = r.useContext(u.h), P = (0, l.uR)(N, R), C = r.useMemo(() => [{
					src: null == n.id ? m.ZP.getURL(n.name) : p.ZP.getEmojiURL({
						id: n.id,
						animated: !1,
						size: 22
					}),
					colorize: !1
				}], [n.name, n.id]), w = v.x - v.width / 2 * .5, Z = v.y - v.height / 2 * .5, A = (0, s.q_F)({
					from: {
						y: y.y
					},
					to: {
						y: Z
					},
					config: {
						duration: 450,
						easing: a.Z.Easing.in(a.Z.Easing.exp)
					},
					onChange: e => {
						let {
							y: t
						} = e;
						E(t)
					}
				}), M = (0, s.q_F)({
					from: {
						x: y.x,
						scale: 1,
						opacity: 1
					},
					to: {
						x: w,
						scale: .5,
						opacity: .4
					},
					config: {
						duration: 450,
						easing: a.Z.Easing.in(a.Z.Easing.ease)
					},
					onRest: () => {
						(0, h.G)(t, n.name, n.id)
					},
					onChange: e => {
						let {
							x: t
						} = e;
						x(t)
					}
				});
				return r.useEffect(() => {
					T > 0 && S > 0 && P.createConfetti(j(b({}, f.We), {
						position: {
							type: "static",
							value: {
								x: T,
								y: S
							}
						}
					}))
				}, [P, T, S]), (0, i.jsxs)(i.Fragment, {
					children: [(0, i.jsx)(l.Ji, {
						ref: I,
						sprites: C,
						colors: O,
						spriteWidth: f.Ko,
						spriteHeight: f.Ko
					}), (0, i.jsx)(d.ZP, {
						children: (0, i.jsx)(o.animated.div, {
							style: b({}, A),
							className: g.emojiContainer,
							children: (0, i.jsx)(o.animated.div, {
								style: j(b({}, M), {
									opacity: M.opacity
								}),
								children: (0, i.jsx)(c.Z, {
									className: g.emoji,
									emojiId: n.id,
									emojiName: n.name,
									animated: n.animated,
									size: "jumbo"
								})
							})
						})
					})]
				})
			}
		},
		56314: function(e, t, n) {
			n.d(t, {
				v: () => s
			});
			var i = n(442837),
				r = n(780384),
				l = n(607070),
				o = n(210887),
				a = n(712057);
			let s = e => {
				let t = (0, i.e7)([l.Z], () => l.Z.saturation),
					n = (0, i.e7)([o.Z], () => (0, r.wj)(o.Z.theme));
				return (0, a.Z)(e, t, n)
			}
		},
		33154: function(e, t, n) {
			n.d(t, {
				Z: () => b,
				s: () => g
			}), n(388685);
			var i, r = n(255367),
				l = n(73800),
				o = n(442837),
				a = n(755721),
				s = n(481060),
				c = n(749210),
				u = n(313201),
				d = n(823379),
				h = n(41776),
				p = n(981631),
				m = n(388032),
				f = n(695256),
				g = ((i = {})[i.CHAT = 0] = "CHAT", i[i.REACTIONS = 1] = "REACTIONS", i);
			let b = e => {
				let {
					type: t,
					guild: i,
					closePopout: g,
					ctaRef: b
				} = e, j = (0, u.Dt)(), [O, y] = l.useState(!1), v = (0, o.e7)([h.Z], () => h.Z.isLurking(i.id), [i.id]);
				l.useEffect(() => {
					O && !v && g()
				}, [O, v, g]);
				let T = null,
					x = m.intl.string(m.t.d7b1p6);
				switch (t) {
					case 0:
						T = m.intl.string(m.t.Xiwf1d);
						break;
					case 1:
						T = m.intl.string(m.t.GXvlU1);
						break;
					default:
						return (0, d.vE)(t)
				}
				if (null == T) return null;
				let S = async () => {
					y(!0);
					try {
						await c.Z.joinGuild(i.id, {
							source: p.vtS.CHAT_INPUT_BLOCKER
						}), g()
					} catch (e) {
						y(!1)
					}
				};
				return (0, r.jsxs)(s.VqE, {
					className: f.container,
					"aria-labelledby": j,
					children: [(0, r.jsx)("img", {
						alt: "",
						className: f.image,
						src: n(64395)
					}), (0, r.jsxs)("div", {
						className: f.content,
						children: [(0, r.jsx)(s.X6q, {
							variant: "heading-md/semibold",
							id: j,
							children: T
						}), (0, r.jsx)(s.Text, {
							color: "header-secondary",
							variant: "text-sm/normal",
							children: x
						}), (0, r.jsxs)("div", {
							className: f.buttonContainer,
							children: [(0, r.jsx)(s.zxk, {
								variant: "primary",
								text: m.intl.string(m.t["9VLmlZ"]),
								buttonRef: b,
								onClick: S,
								loading: O
							}), (0, r.jsx)(a.zx, {
								onClick: g,
								look: a.zx.Looks.BLANK,
								className: f.cancel,
								children: m.intl.string(m.t["2m+Sqq"])
							})]
						})]
					})]
				})
			}
		},
		960020: function(e, t, n) {
			n.d(t, {
				I: () => c,
				Z: () => g
			}), n(388685), n(467055);
			var i, r, l, o, a = n(442837),
				s = n(570140),
				c = ((r = {}).HOVER = "HOVER", r.EXTERNAL = "EXTERNAL", r.RANDOM = "RANDOM", r);
			let u = {},
				d = {},
				h = {},
				p = (e, t) => {
					let n = null != t.id ? t.id : t.name;
					return "".concat(e, ":").concat(n)
				},
				m = (e, t) => {
					var n;
					let i;
					switch (e) {
						case "HOVER":
							i = "HOVER";
							break;
						case "RANDOM":
							i = "RANDOM";
							break;
						default:
							i = "EXTERNAL"
					}
					let r = Object.fromEntries(Object.entries(null != (n = d[t]) ? n : {}).filter(e => {
						let [, t] = e;
						return t === i
					}));
					if (Object.keys(r).length >= 5 && "EXTERNAL" === e) {
						for (let e in r)
							if (null == h[t] || null == h[t][e]) {
								delete d[t][e], delete r[e];
								break
							}
					}
					return Object.keys(r).length
				};
			class f extends(i = a.ZP.Store) {
				getReactionPickerAnimation(e, t, n) {
					return u["".concat(e, ":").concat(t, ":").concat(null != n ? n : "")]
				}
				getEffectForEmojiId(e, t, n) {
					var i;
					let r = p(t, n);
					return null == (i = d[e]) ? void 0 : i[r]
				}
			}
			o = "BurstReactionEffectsStore", (l = "displayName") in f ? Object.defineProperty(f, l, {
				value: o,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : f[l] = o;
			let g = new f(s.Z, {
				BURST_REACTION_EFFECT_CLEAR: e => {
					var t;
					let {
						channelId: n,
						messageId: i,
						emoji: r
					} = e, l = p(i, r);
					null == (t = d[n]) || delete t[l]
				},
				BURST_REACTION_EFFECT_PLAY: e => {
					var t, n, i;
					let {
						channelId: r,
						messageId: l,
						emoji: o,
						key: a
					} = e, s = p(l, o);
					if (m(a, r) >= 5) return;
					let c = null != (t = d[r]) ? t : {},
						u = (null != (n = h[r]) ? n : {})[s],
						f = c[s];
					("HOVER" !== a || null == f) && ("HOVER" === f && "EXTERNAL" === a && null != u && ("function" == typeof u.destroy && u.destroy(), null == (i = h[r]) || delete i[s], f = void 0), null == f && (null != d[r] ? d[r][s] = a : d[r] = {
						[s]: a
					}))
				},
				BURST_REACTION_ANIMATION_ADD: e => {
					let {
						channelId: t,
						messageId: n,
						emoji: i,
						animation: r
					} = e, l = p(n, i);
					null == h[t] && (h[t] = {}), h[t][l] = r
				},
				BURST_REACTION_PICKER_ANIMATION_ADD: e => {
					let {
						messageId: t,
						emojiName: n,
						emojiId: i,
						startPosition: r
					} = e;
					u["".concat(t, ":").concat(n, ":").concat(null != i ? i : "")] = r
				},
				BURST_REACTION_PICKER_ANIMATION_CLEAR: e => {
					let {
						messageId: t,
						emojiName: n,
						emojiId: i
					} = e;
					delete u["".concat(t, ":").concat(n, ":").concat(null != i ? i : "")]
				}
			})
		},
		347904: function(e, t, n) {
			n.d(t, {
				s4: () => l,
				vJ: () => o
			}), n(704826), n(35282);
			var i = n(392711),
				r = n(302221);
			let l = (e, t) => {
					let n = (0, r.WY)([t.r, t.g, t.b], 2);
					return e = (e = e.replace(/(\[1,0,0,)/g, "[".concat(n[0][0] / 255, ",").concat(n[0][1] / 255, ",").concat(n[0][2] / 255, ","))).replace(/\[0,0,1,/g, "[".concat(n[1][0] / 255, ",").concat(n[1][1] / 255, ",").concat(n[1][2] / 255, ","))
				},
				o = (0, i.memoize)(e => {
					let t = 0;
					for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n);
					return Math.abs(t)
				})
		},
		831244: function(e, t, n) {
			n.d(t, {
				T: () => l
			});
			var i = n(347904);
			let r = [{
					load: () => n.e("59642").then(n.t.bind(n, 759983, 19))
				}, {
					load: () => n.e("54931").then(n.t.bind(n, 488583, 19))
				}, {
					load: () => n.e("22523").then(n.t.bind(n, 420183, 19))
				}, {
					load: () => n.e("35247").then(n.t.bind(n, 782543, 19))
				}, {
					load: () => n.e("69923").then(n.t.bind(n, 267858, 19))
				}, {
					load: () => n.e("96246").then(n.t.bind(n, 108035, 19))
				}, {
					load: () => n.e("30997").then(n.t.bind(n, 299665, 19))
				}, {
					load: () => n.e("50987").then(n.t.bind(n, 545755, 19))
				}, {
					load: () => n.e("14192").then(n.t.bind(n, 412825, 19))
				}, {
					load: () => n.e("78073").then(n.t.bind(n, 82134, 19))
				}, {
					load: () => n.e("54021").then(n.t.bind(n, 913837, 19))
				}, {
					load: () => n.e("7573").then(n.t.bind(n, 403249, 19))
				}, {
					load: () => n.e("219").then(n.t.bind(n, 725432, 19))
				}, {
					load: () => n.e("70528").then(n.t.bind(n, 181976, 19))
				}, {
					load: () => n.e("74294").then(n.t.bind(n, 654947, 19))
				}, {
					load: () => n.e("91199").then(n.t.bind(n, 945518, 19))
				}, {
					load: () => n.e("66071").then(n.t.bind(n, 634794, 19))
				}, {
					load: () => n.e("73921").then(n.t.bind(n, 558619, 19))
				}],
				l = async function(e, t, n) {
					arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					let l = r[(0, i.vJ)("".concat(e).concat(t).concat(n)) % r.length];
					return await l.load()
				}
		},
		432376: function(e, t, n) {
			n.d(t, {
				Z: () => i
			});

			function i(e) {
				let {
					channel: t,
					canChat: n,
					renderReactions: i,
					canAddNewReactions: r,
					isLurking: l,
					isGuest: o,
					communicationDisabled: a,
					isActiveChannelOrUnarchivableThread: s,
					isAutomodQuarantined: c
				} = e, u = t.isPrivate(), d = t.isSystemDM(), h = (n || u) && s;
				return {
					disableReactionReads: !i,
					disableReactionCreates: l || o || !h || !((!0 === r || u) && !d && s),
					disableReactionUpdates: l || o || !h || !0 === a || !0 === c
				}
			}
		},
		89729: function(e, t, n) {
			n.d(t, {
				g: () => p
			}), n(388685);
			var i = n(392711),
				r = n.n(i),
				l = n(995774),
				o = n(592125),
				a = n(542578),
				s = n(699516),
				c = n(5192),
				u = n(566006),
				d = n(388032);
			let h = {
				standard: {
					reactionTooltip1NInteractive: d.t.dgtYDA,
					reactionTooltip1N: d.t.mXild3,
					reactionTooltip1: d.t.Oro30N,
					reactionTooltip2NInteractive: d.t["0GBwVV"],
					reactionTooltip2N: d.t.UWGs2t,
					reactionTooltip2: d.t["p+0jvr"],
					reactionTooltip3NInteractive: d.t["dK6/7e"],
					reactionTooltip3N: d.t.UnXdX1,
					reactionTooltip3: d.t.bbPMcX,
					reactionTooltipNInteractive: d.t.Thj7LS,
					reactionTooltipN: d.t.CRrc7e
				},
				burst: {
					reactionTooltip1NInteractive: d.t.G98B0d,
					reactionTooltip1N: d.t["u/03eH"],
					reactionTooltip1: d.t["z4q3+/"],
					reactionTooltip2NInteractive: d.t.wkcffn,
					reactionTooltip2N: d.t.T4EYUl,
					reactionTooltip2: d.t.R2HykZ,
					reactionTooltip3NInteractive: d.t.OhtGx8,
					reactionTooltip3N: d.t.M8bwl5,
					reactionTooltip3: d.t.sNl6XV,
					reactionTooltipNInteractive: d.t.nsITOj,
					reactionTooltipN: d.t.dkieHx
				}
			};

			function p(e, t) {
				var n, i;
				let p = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.O.NORMAL,
					m = arguments.length > 3 ? arguments[3] : void 0,
					f = a.Z.getReactions(e.getChannelId(), e.id, t, 3, p),
					g = o.Z.getChannel(e.getChannelId()),
					b = null == g || g.isPrivate() ? null : g.getGuildId(),
					j = e.getReaction(t),
					O = p === u.O.BURST,
					y = r()(Array.from(null != (n = null == f ? void 0 : f.values()) ? n : [])).reject(e => s.Z.isBlockedOrIgnored(e.id)).take(3).map(e => c.ZP.getName(b, null == g ? void 0 : g.id, e)).value();
				if (0 === y.length) return "";
				let v = O ? h.burst : h.standard,
					T = Math.max(0, (null != (i = O ? null == j ? void 0 : j.burst_count : null == j ? void 0 : j.count) ? i : 0) - y.length),
					x = (0, l.Lh)(t);
				if (1 === y.length)
					if (!(T > 0)) return d.intl.formatToPlainString(v.reactionTooltip1, {
						a: y[0],
						emojiName: x
					});
					else if (null != m) return d.intl.format(v.reactionTooltip1NInteractive, {
					a: y[0],
					n: T,
					emojiName: x,
					onClick: m
				});
				else return d.intl.formatToPlainString(v.reactionTooltip1N, {
					a: y[0],
					n: T,
					emojiName: x
				});
				if (2 === y.length)
					if (!(T > 0)) return d.intl.formatToPlainString(v.reactionTooltip2, {
						a: y[0],
						b: y[1],
						emojiName: x
					});
					else if (null != m) return d.intl.format(v.reactionTooltip2NInteractive, {
					a: y[0],
					b: y[1],
					n: T,
					emojiName: x,
					onClick: m
				});
				else return d.intl.formatToPlainString(v.reactionTooltip2N, {
					a: y[0],
					b: y[1],
					n: T,
					emojiName: x
				});
				return 3 !== y.length ? null != m ? d.intl.format(v.reactionTooltipNInteractive, {
					n: T,
					emojiName: x,
					onClick: m
				}) : d.intl.formatToPlainString(v.reactionTooltipN, {
					n: T,
					emojiName: x
				}) : T > 0 ? null != m ? d.intl.format(v.reactionTooltip3NInteractive, {
					a: y[0],
					b: y[1],
					c: y[2],
					n: T,
					emojiName: x,
					onClick: m
				}) : d.intl.formatToPlainString(v.reactionTooltip3N, {
					a: y[0],
					b: y[1],
					c: y[2],
					n: T,
					emojiName: x
				}) : d.intl.formatToPlainString(v.reactionTooltip3, {
					a: y[0],
					b: y[1],
					c: y[2],
					emojiName: x
				})
			}
		},
		287151: function(e, t, n) {
			n.d(t, {
				aO: () => es,
				le: () => eh,
				op: () => ec,
				y4: () => eu
			}), n(388685), n(781311);
			var i, r = n(255367),
				l = n(73800),
				o = n(120356),
				a = n.n(o),
				s = n(512722),
				c = n.n(s),
				u = n(772848),
				d = n(748780),
				h = n(866442),
				p = n(442837),
				m = n(846519),
				f = n(481060),
				g = n(596454),
				b = n(785388),
				j = n(607070),
				O = n(446489),
				y = n(367907),
				v = n(436774),
				T = n(98474),
				x = n(339085),
				S = n(906411),
				E = n(56314),
				R = n(231053),
				I = n(944386),
				N = n(305325),
				P = n(33154),
				C = n(692147),
				w = n(767714),
				Z = n(659215),
				A = n(222677),
				M = n(995774),
				_ = n(695346),
				L = n(592125),
				k = n(430824),
				D = n(542578),
				U = n(914010),
				V = n(594174),
				B = n(451478),
				G = n(626135),
				H = n(74538),
				W = n(960020),
				F = n(566006),
				z = n(886132),
				K = n(183023),
				J = n(524444),
				X = n(89729),
				Y = n(620652),
				q = n(640753),
				$ = n(981631),
				Q = n(474936),
				ee = n(388032),
				et = n(239594),
				en = n(92254),
				ei = n(588429),
				er = n(215084);

			function el(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function eo(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						i = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), i.forEach(function(t) {
						el(e, t, n[t])
					})
				}
				return e
			}

			function ea(e, t) {
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
			let es = 12;

			function ec(e, t, n) {
				(0, f.h7j)(e => (0, r.jsx)(b.default, ea(eo({}, e), {
					message: t,
					selectedReaction: n
				})))
			}

			function eu(e, t, n) {
				return n === F.O.BURST && t || n === F.O.NORMAL && e
			}
			class ed extends(i = l.PureComponent) {
				componentWillAppear(e) {
					this.animateIn(e)
				}
				componentWillEnter(e) {
					this.animateIn(e)
				}
				componentWillUnmount() {
					this.hideTooltip()
				}
				animateIn(e) {
					let {
						autoUnfurlReactionTooltip: t
					} = this.props;
					B.Z.isFocused() ? (this.scale.setValue(0), this.opacity.setValue(0), d.Z.parallel([d.Z.timing(this.scale, {
						toValue: 1,
						duration: t ? 200 : 300,
						easing: d.Z.Easing.inOut(d.Z.Easing.back())
					}), d.Z.timing(this.opacity, {
						toValue: 1,
						duration: t ? 200 : 300
					})]).start(e)) : (this.scale.setValue(1), this.opacity.setValue(1), e())
				}
				render() {
					let e, t, {
							count: n,
							burst_count: i,
							colors: l,
							isBurstReaction: o,
							hideCount: s,
							emoji: c,
							readOnly: u,
							isLurking: p,
							isGuest: m,
							isPendingMember: b,
							className: j,
							useChatFontScaling: y,
							message: v,
							hideEmoji: x,
							animationStartPosition: S,
							emojiSize: E
						} = this.props,
						{
							shouldShowTooltip: R,
							tooltipTextAria: I,
							reactionRef: N,
							tooltipPositionKey: P
						} = this.state,
						w = y ? ei : en,
						Z = {
							transform: [{
								scale: this.scale
							}],
							opacity: this.opacity
						},
						A = o ? i : n;
					if (o && null != l) {
						var _;
						let {
							accentColor: n,
							backgroundColor: i,
							opacity: r
						} = l, o = null != (_ = (0, h.wK)(null != i ? i : "", r)) ? _ : "";
						this.isMe() && (Z.borderColor = i), Z.background = o, e = n, t = n
					}
					let L = null == N ? void 0 : N.getBoundingClientRect(),
						k = null != S && null != L,
						D = null == S;
					return (0, r.jsx)(f.yRy, {
						targetElementRef: {
							current: N
						},
						shouldShow: R,
						"aria-label": null != I && I,
						renderPopout: this.renderTooltip,
						nudgeAlignIntoViewport: !0,
						position: "top",
						align: "center",
						positionKey: P,
						children: () => (0, r.jsx)("div", {
							onMouseEnter: this.handleEnter,
							onMouseLeave: this.handleLeave,
							ref: this.handleSetReactionRef,
							children: (0, r.jsx)(d.Z.div, {
								className: a()(w.reaction, j, {
									[w.reactionMe]: this.isMe(),
									[w.reactionReadOnly]: u && !p && !b && !m,
									[w.shakeReaction]: x && null == S
								}),
								style: Z,
								children: (0, r.jsx)(f.yRy, {
									targetElementRef: this.upsellPopoutTargetRef,
									renderPopout: this.renderLurkerModeUpsellPopout,
									position: "top",
									children: n => (0, r.jsxs)(f.P3F, ea(eo({}, n), {
										innerRef: this.upsellPopoutTargetRef,
										className: w.reactionInner,
										onClick: this.handleClick,
										"aria-disabled": u,
										"aria-label": (0, M.iD)(this.isMe(), A, c, o),
										"aria-pressed": this.isMe(),
										children: [(0, r.jsx)("div", {
											className: a()({
												[w.burstGlow]: o
											}),
											style: {
												boxShadow: "0 0 16px ".concat(t)
											}
										}), (0, r.jsxs)("div", {
											children: [o ? (0, r.jsxs)(r.Fragment, {
												children: [k && (0, r.jsx)(T.Z, {
													messageId: v.id,
													emoji: c,
													startPosition: S,
													targetPosition: L
												}), D && (0, r.jsx)(q.Z, {
													count: i,
													emoji: c,
													channelId: v.getChannelId(),
													messageId: v.id,
													useChatFontScaling: y,
													color: t,
													emojiSize: Y.M.NORMAL
												})]
											}) : null, (0, r.jsx)(g.Z, {
												className: a()({
													[w.hideEmoji]: x
												}),
												emojiId: c.id,
												emojiName: c.name,
												size: E,
												animated: c.animated
											})]
										}), s ? null : (0, r.jsx)(O.Z, {
											className: w.reactionCount,
											value: A,
											color: e,
											digitWidth: es
										}), (0, r.jsx)(C.Z, {
											count: A,
											reactionRef: N
										})]
									}))
								})
							})
						})
					})
				}
				constructor(...e) {
					super(...e), el(this, "isReactionEventActive", !1), el(this, "isKeyboardNavigation", !1), el(this, "scale", new d.Z.Value(1)), el(this, "opacity", new d.Z.Value(1)), el(this, "timeout", new m.V7), el(this, "hideTimeout", new m.V7), el(this, "ctaRef", l.createRef()), el(this, "type", F.O.NORMAL), el(this, "colors", {
						backgroundColor: void 0,
						borderColor: void 0,
						textColor: void 0
					}), el(this, "state", {
						shouldShowTooltip: !1,
						tooltipText: null,
						tooltipTextAria: null,
						reactionRef: null,
						tooltipPositionKey: void 0
					}), el(this, "hasShownTooltip", !1), el(this, "nonce", (0, u.Z)()), el(this, "upsellPopoutTargetRef", l.createRef()), el(this, "userCanBurstReact", () => this.props.userHasPremium), el(this, "handleClick", e => {
						e.stopPropagation();
						let {
							message: t,
							emoji: n,
							readOnly: i,
							isBurstReaction: r,
							isPendingMember: l,
							isLurking: o,
							isGuest: a,
							isForumToolbar: s
						} = this.props, c = L.Z.getChannel(t.getChannelId());
						if (o || a) {
							var u, d;
							null == (d = this.ctaRef) || null == (u = d.current) || u.focus();
							return
						}
						let h = t.getChannelId(),
							p = s ? A.TW.FORUM_TOOLBAR : A.TW.MESSAGE_INLINE_BUTTON;
						if (r && !this.userCanBurstReact()) return void(0, Z.m)({
							analytics: {
								type: Q.cd.BURST_REACTION_UPSELL,
								page: (null == c ? void 0 : c.getGuildId()) != null ? $.ZY5.GUILD_CHANNEL : $.ZY5.DM_CHANNEL,
								section: null != c ? (0, M.s4)(c) : void 0,
								object: $.qAy.EMOJI_REACTION_UPSELL
							}
						});
						l ? this.handleShowVerificationGate() : i || (this.isMe() ? (0, A.WO)({
							channelId: h,
							messageId: t.id,
							emoji: n,
							location: p,
							options: {
								burst: r
							}
						}) : (0, A.rU)(h, t.id, n, p, {
							burst: r
						}))
					}), el(this, "handleEnter", e => {
						let {
							emoji: t,
							message: n,
							type: i,
							reduceMotion: r,
							animateEmoji: l,
							autoUnfurlReactionTooltip: o
						} = this.props, a = i === F.O.BURST;
						a && !this.isReactionEventActive && !r && l && (0, A.T6)({
							channelId: n.getChannelId(),
							messageId: n.id,
							emoji: t,
							key: W.I.HOVER
						}), this.isReactionEventActive = !0, this.isKeyboardNavigation = "focus" === e.type, this.timeout.start(a ? 750 : o ? 200 : 500, this.showTooltip, !1)
					}), el(this, "handleEnterTooltip", () => {
						this.isReactionEventActive = !0, this.handleShowTooltip()
					}), el(this, "handleShowTooltip", () => {
						this.hideTimeout.stop(), this.isReactionEventActive && (this.updateTooltipText(), D.Z.addChangeListener(this.updateTooltipText))
					}), el(this, "showTooltip", () => {
						this.props.readOnly || (this.handleShowTooltip(), this.isReactionEventActive && this.trackReactionTooltipViewed(), this.hasShownTooltip = !0)
					}), el(this, "handleLeave", () => {
						this.isReactionEventActive = !1, this.isKeyboardNavigation = !1, this.timeout.stop(), D.Z.removeChangeListener(this.updateTooltipText), this.hideTimeout.start(200, this.hideTooltip, !1)
					}), el(this, "hideTooltip", () => {
						this.setState({
							shouldShowTooltip: !1
						}), this.hasShownTooltip && G.default.track($.rMx.CLOSE_POPOUT, {
							nonce: this.nonce
						})
					}), el(this, "isMe", () => {
						let {
							me: e,
							me_burst: t,
							type: n
						} = this.props;
						return eu(e, t, n)
					}), el(this, "updateTooltipText", () => {
						let {
							message: e,
							emoji: t,
							type: n
						} = this.props, i = (0, X.g)(e, t, n), r = this.isKeyboardNavigation ? i : (0, X.g)(e, t, n, $.dG4);
						c()("string" == typeof i, "tooltipTextAria is not a string"), this.setState({
							tooltipText: r,
							tooltipTextAria: i,
							shouldShowTooltip: null != r && "" !== r
						})
					}), el(this, "renderLurkerModeUpsellPopout", e => {
						let {
							closePopout: t
						} = e, {
							message: n,
							isLurking: i
						} = this.props, l = L.Z.getChannel(n.getChannelId()), o = k.Z.getGuild(null == l ? void 0 : l.getGuildId());
						return i && null != o ? (0, r.jsx)(P.Z, {
							ctaRef: this.ctaRef,
							type: P.s.REACTIONS,
							guild: o,
							closePopout: t
						}) : (0, r.jsx)(r.Fragment, {})
					}), el(this, "renderEmojiDetails", () => {
						let e = this.props.emoji;
						return null != e.id && (0, r.jsx)(em, {
							emojiId: e.id,
							refreshPositionKey: this.refreshTooltipPositionKey,
							onClose: this.handleLeave,
							nonce: this.nonce
						})
					}), el(this, "renderTooltip", () => {
						let {
							emoji: e,
							message: t,
							type: n,
							me_burst: i,
							isBurstReaction: l = !1
						} = this.props, {
							tooltipText: o,
							tooltipTextAria: s
						} = this.state, c = n => {
							let i = L.Z.getChannel(t.getChannelId());
							null != i && (this.handleLeave(), ec(i, t, {
								emoji: e,
								reactionType: l ? F.O.BURST : F.O.NORMAL
							}))
						}, u = "string" == typeof o ? "" === o.trim() : null == o, d = () => u || null == o || null == s ? null : (0, r.jsx)(f.Text, {
							variant: "text-sm/normal",
							className: er.reactionTooltipText,
							"aria-label": s,
							children: o
						});
						return n === F.O.BURST ? (0, r.jsxs)("div", {
							className: er.reactionTooltip,
							onMouseEnter: this.handleEnterTooltip,
							onMouseLeave: this.handleLeave,
							children: [(0, r.jsx)(f.P3F, {
								className: er.burstReactionTooltipInner,
								onClick: c,
								children: (0, r.jsxs)("div", {
									className: er.burstReactionTooltipMessage,
									children: [(0, r.jsx)(g.Z, {
										className: er.reactionTooltipEmoji,
										emojiId: e.id,
										emojiName: e.name,
										animated: e.animated,
										size: this.props.emojiSizeTooltip
									}), d()]
								})
							}), (() => {
								let e = V.default.getCurrentUser();
								return i ? (0, r.jsxs)("div", {
									className: a()(er.burstReactionTooltipPrompt, er.burstReactionTooltipSpacer),
									children: [(0, H.I5)(e) && (0, r.jsx)(f.SrA, {
										size: "md",
										className: er.burstReactionTooltipNitroIcon,
										color: v.JX.PREMIUM_TIER_2
									}), (0, r.jsx)(f.Text, {
										variant: "text-sm/normal",
										className: er.reactionTooltipText,
										"aria-label": "super reaction tooltip cta",
										children: ee.intl.string(ee.t.ZbNJXl)
									})]
								}) : this.userCanBurstReact() ? (0, r.jsxs)("div", {
									className: a()(er.burstReactionTooltipPrompt, er.burstReactionTooltipSpacer, er.burstReactionTooltipPromptClickable),
									children: [(0, r.jsx)(f.SrA, {
										size: "md",
										className: er.burstReactionTooltipNitroIcon,
										color: v.JX.PREMIUM_TIER_2
									}), (0, r.jsx)(f.P3F, {
										onClick: this.handleClick,
										children: (0, r.jsx)(f.Text, {
											variant: "text-sm/normal",
											className: er.reactionTooltipText,
											"aria-label": "super reaction tooltip cta",
											children: ee.intl.string(ee.t.kVfuVl)
										})
									})]
								}) : this.userCanBurstReact() || this.isKeyboardNavigation ? null : (0, r.jsx)("div", {
									className: a()(er.burstReactionTooltipPrompt, er.burstReactionTooltipSpacer),
									children: (0, r.jsxs)("div", {
										children: [(0, r.jsx)(f.Text, {
											variant: "text-sm/normal",
											"aria-label": "super reaction tooltip upsell",
											children: ee.intl.string(ee.t.W1bMkp)
										}), (0, r.jsx)(w.Z, {
											subscriptionTier: Q.Si.TIER_2,
											textOptions: {
												textOverride: ee.intl.string(ee.t.mr4K7O)
											},
											className: er.burstReactionTooltipUpsellCta,
											onClick: e => e.stopPropagation()
										})]
									})
								})
							})(), this.renderEmojiDetails()]
						}) : (0, r.jsxs)("div", {
							className: er.reactionTooltip,
							onMouseEnter: this.handleEnterTooltip,
							onMouseLeave: this.handleLeave,
							children: [(0, r.jsx)(f.P3F, {
								onClick: c,
								children: (0, r.jsxs)("div", {
									className: er.reactionTooltipInner,
									children: [(0, r.jsx)(g.Z, {
										className: er.reactionTooltipEmoji,
										emojiId: e.id,
										emojiName: e.name,
										animated: e.animated,
										size: this.props.emojiSizeTooltip
									}), d()]
								})
							}), this.renderEmojiDetails()]
						})
					}), el(this, "refreshTooltipPositionKey", () => {
						this.setState({
							tooltipPositionKey: String(Date.now())
						})
					}), el(this, "handleShowVerificationGate", () => {
						let {
							message: e,
							isPendingMember: t
						} = this.props;
						if (!t) return null;
						let n = L.Z.getChannel(e.getChannelId()),
							i = k.Z.getGuild(null == n ? void 0 : n.getGuildId());
						null != i && (0, N.hk)(i.id)
					}), el(this, "handleSetReactionRef", e => {
						this.setState({
							reactionRef: e
						})
					}), el(this, "trackReactionTooltipViewed", () => {
						let {
							emoji: e,
							message: t,
							type: n
						} = this.props, i = V.default.getCurrentUser(), r = L.Z.getChannel(t.getChannelId()), l = n === F.O.BURST, o = (0, H.I5)(i), a = l ? Q.cd.EMOJI_IN_BURST_REACTION_HOVER : Q.cd.EMOJI_IN_REACTION_HOVER;
						!l || this.userCanBurstReact() || o || (a = Q.cd.EMOJI_IN_BURST_REACTION_HOVER_UPSELL), y.ZP.trackWithMetadata($.rMx.EXPRESSION_TOOLTIP_VIEWED, {
							type: a,
							expression_id: e.id,
							expression_name: e.name,
							is_animated: e.animated,
							is_custom: null != e.id,
							nonce: this.nonce
						}), !l || null == r || o || this.userCanBurstReact() || G.default.track($.rMx.PREMIUM_UPSELL_VIEWED, {
							type: Q.cd.BURST_REACTION_UPSELL,
							location: {
								page: (null == r ? void 0 : r.getGuildId()) != null ? $.ZY5.GUILD_CHANNEL : $.ZY5.DM_CHANNEL,
								section: (0, M.s4)(r),
								object: $.qAy.EMOJI_REACTION_TOOLTIP_UPSELL
							}
						})
					})
				}
			}
			el(ed, "defaultProps", {
				emojiSizeTooltip: "jumbo"
			});
			let eh = l.memo(e => {
					let {
						type: t,
						burst_colors: n,
						message: i,
						emoji: l
					} = e, o = t === F.O.BURST, a = (0, E.v)(o && null != n ? n : []), s = (0, p.e7)([W.Z], () => void 0 !== W.Z.getEffectForEmojiId(i.getChannelId(), i.id, l)), c = (0, p.e7)([j.Z], () => j.Z.useReducedMotion), u = _.Yk.useSetting(), d = V.default.getCurrentUser(), h = (0, H.I5)(d), m = (0, p.e7)([W.Z], () => W.Z.getReactionPickerAnimation(i.id, l.name, l.id)), f = o && (s || null != m);
					return (0, r.jsx)(ed, ea(eo({}, e), {
						colors: a,
						isBurstReaction: o,
						hideEmoji: f,
						userHasPremium: h,
						reduceMotion: c,
						animateEmoji: u,
						animationStartPosition: m
					}))
				}),
				ep = e => {
					var t, n, i;
					let {
						emojiId: l,
						expressionSourceGuild: o,
						hasJoinedExpressionSourceGuild: a,
						onClose: s,
						popoutData: c,
						currentGuildId: u,
						nonce: d
					} = e;
					(0, I.u)({
						emojiId: l,
						currentGuildId: u,
						popoutData: c,
						emojiSourceGuildId: null == o ? void 0 : o.id,
						nonce: d
					});
					let h = null != (n = null == o ? void 0 : o.isDiscoverable()) && n,
						p = null != o && h,
						m = (null != (i = null == o || null == (t = o.emojis) ? void 0 : t.length) ? i : 0) > 1;
					return p ? null == o ? null : (0, r.jsxs)(r.Fragment, {
						children: [(0, r.jsx)("div", {
							className: et.reactionEmojiDetailsUnfurlGuildDetails,
							children: (0, r.jsx)(K.Oe, {
								expressionSourceGuild: o,
								hasJoinedExpressionSourceGuild: a,
								isDisplayingJoinGuildButtonInPopout: c.type === z.$.JOIN_GUILD
							})
						}), m && (0, r.jsx)(K.n_, {
							emojiId: l,
							expressionSourceGuild: o,
							hasJoinedEmojiSourceGuild: a,
							onClose: s,
							popoutData: c,
							isDisplayingButtonInTopSection: !1
						})]
					}) : (0, r.jsx)(f.Text, {
						variant: "text-sm/normal",
						"aria-label": c.type,
						children: c.emojiDescription
					})
				},
				em = e => {
					var t;
					let {
						emojiId: n,
						refreshPositionKey: i,
						onClose: o,
						nonce: s
					} = e, {
						joinedEmojiSourceGuild: c
					} = (0, p.cj)([x.ZP, k.Z], () => {
						let e = x.ZP.getCustomEmojiById(n);
						return {
							joinedEmojiSourceGuild: (null == e ? void 0 : e.type) === S.B.GUILD ? k.Z.getGuild(null == e ? void 0 : e.guildId) : void 0
						}
					}), [u, d] = l.useState(void 0), [h, m] = l.useState(void 0), [g, b] = l.useState(null), [j, O] = l.useState(!1), [y, v] = l.useState(!1), [T, E] = l.useState(!1), I = null != c, N = null != (t = null == u ? void 0 : u.isDiscoverable()) && t, P = U.Z.getGuildId(), C = null != P && (P === (null == u ? void 0 : u.id) || P === (null == c ? void 0 : c.id)), w = V.default.getCurrentUser(), Z = (0, z.a)({
						sourceType: g,
						expressionSourceApplication: null != h ? h : null,
						isPremium: H.ZP.isPremium(w),
						hasJoinedEmojiSourceGuild: I,
						isDiscoverable: N,
						emojiComesFromCurrentGuild: C,
						isUnusableRoleSubscriptionEmoji: !1,
						userIsRoleSubscriber: !1,
						isRoleSubscriptionEmoji: !1,
						shouldHideRoleSubscriptionCTA: !1
					});
					if (l.useEffect(() => {
							j && !T && (async () => {
								i(), v(!0);
								let e = null != n ? await (0, R.Fi)(n) : null;
								if (null != e) switch (b(e.type), e.type) {
									case R.w6.APPLICATION:
										m(e.application);
										break;
									case R.w6.GUILD:
										d(e.guild)
								} else d(null);
								v(!1), E(!0), i()
							})()
						}, [n, j, T, i]), I) return null;
					let A = () => {
							O(!j)
						},
						M = j && (void 0 !== u || void 0 !== h);
					return (0, r.jsxs)("div", {
						children: [M ? (0, r.jsxs)(r.Fragment, {
							children: [(0, r.jsx)("div", {
								className: et.reactionEmojiDetailsDivider
							}), null != Z.emojiDescription && Z.type !== z.$.UNAVAILABLE && (0, r.jsx)(f.Text, {
								variant: "text-sm/normal",
								"aria-label": Z.type,
								children: Z.emojiDescription
							})]
						}) : (() => {
							let e = ee.intl.string(ee.t["Igv+LS"]);
							return (0, r.jsxs)(f.P3F, {
								onClick: A,
								className: et.reactionEmojiDetailsClickable,
								children: [(0, r.jsx)(f.Text, {
									variant: "text-sm/normal",
									color: "none",
									"aria-label": e,
									children: e
								}), (0, r.jsx)(f.CJ0, {
									size: "xs",
									color: "currentColor",
									className: a()(et.reactionEmojiDetailsArrow, {
										[et.reactionEmojiDetailsArrowCollapsed]: !j
									})
								})]
							})
						})(), y ? (0, r.jsx)(J.SE, {
							className: et.emojiDetailsLoader
						}) : M && (0, r.jsx)(ep, {
							emojiId: n,
							expressionSourceGuild: u,
							hasJoinedExpressionSourceGuild: I,
							onClose: o,
							popoutData: Z,
							currentGuildId: P,
							nonce: s
						})]
					})
				}
		},
		620652: function(e, t, n) {
			n.d(t, {
				M: () => g,
				Z: () => j
			});
			var i, r = n(255367),
				l = n(73800),
				o = n(120356),
				a = n.n(o),
				s = n(500923),
				c = n.n(s),
				u = n(570140),
				d = n(960020),
				h = n(831244),
				p = n(815605),
				m = n(981631),
				f = n(872333),
				g = ((i = {})[i.NORMAL = 20] = "NORMAL", i[i.LARGE = 32] = "LARGE", i);
			let b = async e => {
				var t;
				let {
					effect: n
				} = e, i = await (0, h.T)(n.channelId, null != (t = n.messageId) ? t : m.lds, n.emoji.name), r = await (0, p.aB)("".concat(n.channelId, ":").concat(n.messageId, ":").concat(n.emoji.name), n.url, i, n.color);
				return r.assets[0].p = n.url, r
			};

			function j(e) {
				let {
					className: t,
					effect: n,
					onComplete: i,
					emojiSize: o = 20
				} = e, s = l.useRef(null), h = o * p.Vz, m = (h + o) / 2;
				return l.useEffect(() => {
					let e;
					if (null != n) return !async function() {
						if (null != s.current) {
							let t = await b({
								effect: n
							});
							(e = c().loadAnimation({
								container: s.current,
								renderer: "svg",
								loop: !1,
								autoplay: !0,
								animationData: t
							})).addEventListener("complete", () => {
								null == i || i(), e.destroy()
							}), null != n.channelId && null != n.messageId && null != n.emoji && n.key === d.I.HOVER && u.Z.dispatch({
								type: "BURST_REACTION_ANIMATION_ADD",
								channelId: n.channelId,
								messageId: n.messageId,
								emoji: n.emoji,
								animation: e
							})
						}
					}(), () => {
						null != e && e.destroy()
					}
				}, [i, n, o]), (0, r.jsx)("div", {
					className: f.effectsWrapper,
					children: (0, r.jsx)("div", {
						className: a()(f.effect, t),
						style: {
							transform: "translateY(".concat(m, "px)"),
							height: h,
							width: h
						},
						ref: s
					})
				})
			}
		},
		640753: function(e, t, n) {
			n.d(t, {
				Z: () => g
			}), n(388685);
			var i = n(255367),
				r = n(73800),
				l = n(442837),
				o = n(570140),
				a = n(607070),
				s = n(222677),
				c = n(695346),
				u = n(960020),
				d = n(347904),
				h = n(620652),
				p = n(815605),
				m = n(981341),
				f = n(994648);
			let g = r.memo(function(e) {
				let {
					channelId: t,
					messageId: n,
					emoji: g,
					useChatFontScaling: b,
					color: j,
					count: O,
					emojiSize: y
				} = e, v = (0, l.e7)([u.Z], () => u.Z.getEffectForEmojiId(t, n, g)), T = r.useMemo(() => (0, p.Zn)(g, j, t, {
					key: v,
					messageId: n
				}), [j, v, g, t, n]), [x, S] = r.useState(!1), E = (0, l.e7)([a.Z], () => a.Z.useReducedMotion), R = c.Yk.useSetting(), I = r.useCallback(() => {
					o.Z.dispatch({
						type: "BURST_REACTION_EFFECT_CLEAR",
						channelId: t,
						messageId: n,
						emoji: g
					})
				}, [g, t, n]);
				return (r.useEffect(() => {
					let e = () => {
						if (x) return;
						let e = (0, d.vJ)("".concat(Date.now()).concat(t).concat(n).concat(g.name)) % 10;
						(e += O > 4 ? 4 : O - 1) > 7 && (S(!0), (0, s.T6)({
							channelId: t,
							messageId: n,
							emoji: g,
							key: u.I.RANDOM
						}))
					};
					if (x || E && !R || !R) return;
					e();
					let i = setInterval(e, 5e3);
					return () => {
						clearInterval(i)
					}
				}, [R, t, O, g, g.name, x, n, E]), null == v) ? null : (0, i.jsx)(h.Z, {
					className: (b ? f : m).effect,
					effect: T,
					onComplete: I,
					emojiSize: y
				})
			})
		},
		815605: function(e, t, n) {
			n.d(t, {
				Vz: () => c,
				Zn: () => d,
				aB: () => u
			}), n(49124), n(704826), n(35282);
			var i = n(392711),
				r = n(772848),
				l = n(134432),
				o = n(963838),
				a = n(302221),
				s = n(347904);
			let c = 7.5,
				u = (0, i.memoize)((e, t, n, i) => new Promise(e => {
					let r = new Image;
					r.src = t, r.crossOrigin = "Anonymous", r.onload = () => {
						let t = 32 * (0, l.x_)(),
							o = JSON.stringify(n);
						if (null != i && (o = (0, s.s4)(o, (0, a.oo)(i))), r.width === t && r.height === t || 0 === r.width && 0 === r.height) e(JSON.parse(o));
						else {
							let t = 128 / r.width * r.height;
							e(JSON.parse(o = (o = o.replace(/"w":128,"h":128/, '"w":128,"h":'.concat(t))).replace(/"a":{"a":0,"k":\[64,64/, '"a":{"a":0,"k":[64,'.concat(t / 2))))
						}
					}
				}));

			function d(e, t, n, i) {
				let {
					emojiSize: l,
					key: a,
					messageId: s
				} = null != i ? i : {}, c = (0, o._r)(e, null != l ? 2 * l : void 0);
				return {
					channelId: n,
					messageId: s,
					emoji: e,
					animationId: (0, r.Z)(),
					url: c,
					key: a,
					color: t
				}
			}
		},
		942951: function(e, t, n) {
			n.d(t, {
				l: () => m
			});
			var i = n(255367),
				r = n(73800),
				l = n(481060),
				o = n(100527),
				a = n(906732),
				s = n(7284),
				c = n(402235),
				u = n(670188),
				d = n(592125),
				h = n(91047);

			function p(e) {
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
			}

			function m(e) {
				let {
					user: t,
					channelId: n,
					guildId: m,
					messageId: f,
					stopPropagation: g = !1,
					ariaLabel: b
				} = e, j = r.useRef(null), {
					analyticsLocations: O
				} = (0, a.ZP)(o.Z.USERNAME), y = (0, c.ZP)(m, null == t ? void 0 : t.id), v = (0, s.j)({
					displayNameStyles: null == t ? void 0 : t.displayNameStyles
				}), T = r.useCallback(e => {
					let i = d.Z.getChannel(n);
					null != i && null != t && (0, h.Pv)(e, t, i)
				}, [t, n]);
				return r.useCallback(e => (r, o) => {
					let s = null == e ? void 0 : e.colorStrings,
						c = y && null != s && null != s.primaryColor && null != s.secondaryColor,
						d = t => {
							var n, o;
							return (0, i.jsx)(l.rz2, (n = p({}, null != t ? t : {}), o = o = {
								ref: j,
								onContextMenu: T,
								name: (0, l.qgQ)(r),
								color: null == e ? void 0 : e.colorString,
								roleName: null == e ? void 0 : e.colorRoleName,
								roleColors: c ? s : null,
								"aria-label": b,
								className: v
							}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
								var n = Object.keys(e);
								if (Object.getOwnPropertySymbols) {
									var i = Object.getOwnPropertySymbols(e);
									n.push.apply(n, i)
								}
								return n
							})(Object(o)).forEach(function(e) {
								Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
							}), n))
						},
						h = e => t => {
							g && null != t && t.stopPropagation(), e(t)
						};
					return (0, i.jsx)(a.Gt, {
						value: O,
						children: null != t ? (0, i.jsx)(u.Z, {
							targetElementRef: j,
							user: t,
							guildId: m,
							channelId: n,
							messageId: f,
							roleId: null == e ? void 0 : e.colorRoleId,
							clickTrap: !0,
							children: e => {
								var {
									onClick: t
								} = e, n = function(e, t) {
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
								}(e, ["onClick"]);
								return d(p({
									onClick: h(t)
								}, n))
							}
						}) : d(void 0)
					}, o)
				}, [O, t, n, m, f, T, g, b, y, v])
			}
		},
		692147: function(e, t, n) {
			n.d(t, {
				Z: () => p
			});
			var i = n(255367),
				r = n(73800),
				l = n(392711),
				o = n(399606),
				a = n(351780),
				s = n(576125),
				c = n(465858),
				u = n(112843),
				d = n(524484);

			function h(e) {
				let {
					reactionRef: t,
					count: n
				} = e, i = r.useRef(n), s = (0, o.e7)([a.Z], () => a.Z.getState()), d = (0, u.Z)(), h = (0, c.Z)(t);
				return r.useEffect(() => {
					if (n > i.current && null != h) {
						let e = (0, l.clamp)(n, s.confettiCount / 2, 2 * s.confettiCount);
						d.fire(h.x, h.y, {
							count: e
						})
					}
					i.current = n
				}, [n, h, d, s.confettiCount]), null
			}

			function p(e) {
				return (0, i.jsx)(s.Z, {
					confettiLocation: d.Hn.REACTION,
					children: (0, i.jsx)(h, function(e) {
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
					}({}, e))
				})
			}
		},
		659215: function(e, t, n) {
			n.d(t, {
				default: () => f,
				m: () => g
			});
			var i = n(255367);
			n(73800);
			var r = n(481060),
				l = n(230711),
				o = n(104494),
				a = n(639119),
				s = n(790527),
				c = n(474936),
				u = n(981631),
				d = n(388032),
				h = n(628755),
				p = n(784370);

			function m(e) {
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
			}

			function f(e) {
				var t, n, {
						onClose: r,
						analyticsSource: f
					} = e,
					g = function(e, t) {
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
					}(e, ["onClose", "analyticsSource"]);
				let b = d.intl.format(d.t["JmbS+f"], {
						onClick: () => {
							l.Z.open(u.oAB.PREMIUM), r()
						}
					}),
					j = (0, a.N)(),
					O = (0, o.Ng)(),
					y = null != j || null != O;
				return (0, i.jsx)(s.Z, m({
					artURL: p,
					artContainerClassName: h.artContainer,
					modalClassName: h.modalContainer,
					bodyClassName: h.bodyContainer,
					type: c.cd.BURST_REACTION_UPSELL,
					title: d.intl.string(d.t.N4SCJy),
					body: b,
					glowUp: b,
					analyticsSource: f,
					analyticsLocation: {
						page: u.ZY5.PREMIUM_UPSELL_BURST_REACTIONS,
						object: u.qAy.BUTTON_CTA
					},
					onClose: r,
					subscribeButtonText: y ? void 0 : d.intl.string(d.t["8x0jKS"]),
					subscriptionTier: null != (n = null == j || null == (t = j.subscription_trial) ? void 0 : t.sku_id) ? n : c.Si.TIER_2,
					backButtonText: d.intl.string(d.t.f3Pet7)
				}, g))
			}

			function g(e) {
				let {
					analytics: t
				} = e;
				(0, r.ZDy)(async () => {
					let {
						default: e
					} = await Promise.resolve().then(n.bind(n, 659215));
					return n => (0, i.jsx)(e, m({
						analyticsSource: t
					}, n))
				})
			}
		},
		91047: function(e, t, n) {
			n.d(t, {
				Pv: () => a,
				_j: () => s,
				nm: () => c,
				xS: () => u
			}), n(415506);
			var i = n(255367);
			n(73800);
			var r = n(239091);

			function l(e) {
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
			}

			function o(e, t) {
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

			function a(e, t, a) {
				a.isGroupDM() ? (0, r.jW)(e, async () => {
					let {
						default: e
					} = await Promise.all([n.e("14006"), n.e("79695"), n.e("80417"), n.e("98783"), n.e("17373")]).then(n.bind(n, 354589));
					return n => (0, i.jsx)(e, o(l({}, n), {
						user: t,
						channel: a
					}))
				}) : a.isDM() ? (0, r.jW)(e, async () => {
					let {
						default: e
					} = await Promise.all([n.e("14006"), n.e("79695"), n.e("25292"), n.e("80417"), n.e("90508"), n.e("7839"), n.e("70205"), n.e("98783"), n.e("53912"), n.e("15114"), n.e("56826"), n.e("47934")]).then(n.bind(n, 131404));
					return n => (0, i.jsx)(e, o(l({}, n), {
						user: t,
						channel: a,
						showMute: !1,
						targetIsUser: !0
					}))
				}) : null != a.guild_id ? (0, r.jW)(e, async () => {
					let {
						default: e
					} = await Promise.all([n.e("14006"), n.e("79695"), n.e("80417"), n.e("98783"), n.e("97589"), n.e("7717"), n.e("72374")]).then(n.bind(n, 757387));
					return n => (0, i.jsx)(e, o(l({}, n), {
						user: t,
						channel: a,
						guildId: a.guild_id
					}))
				}) : (0, r.jW)(e, async () => {
					let {
						default: e
					} = await Promise.all([n.e("79695"), n.e("69220"), n.e("70686")]).then(n.bind(n, 881351));
					return n => (0, i.jsx)(e, o(l({}, n), {
						user: t
					}))
				})
			}

			function s(e, t) {
				var {
					user: a,
					channel: s,
					moderationAlertId: c,
					guildId: u
				} = t, d = function(e, t) {
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
				}(t, ["user", "channel", "moderationAlertId", "guildId"]);
				if ((null == s ? void 0 : s.isGroupDM()) || (null == s ? void 0 : s.isDM())) throw Error("Cannot moderate user in DM or group DM");
				let h = null != u ? u : null == s ? void 0 : s.getGuildId();
				null != h && (0, r.jW)(e, async () => {
					let {
						default: e
					} = await n.e("16120").then(n.bind(n, 833737));
					return t => (0, i.jsx)(e, l(o(l({}, t), {
						user: a,
						channelId: null == s ? void 0 : s.id,
						guildId: h,
						moderationAlertId: c
					}), d))
				})
			}

			function c(e, t) {
				let {
					user: a,
					guildId: s,
					analyticsLocations: c,
					onCloseContextMenu: u,
					isViewOnly: d
				} = t;
				(0, r.jW)(e, async () => {
					let {
						default: e
					} = await n.e("45130").then(n.bind(n, 246389));
					return t => (0, i.jsx)(e, o(l({}, t), {
						user: a,
						guildId: s,
						analyticsLocations: c,
						onCloseContextMenu: u,
						isViewOnly: d
					}))
				})
			}

			function u(e, t, a) {
				null != a && (0, r.jW)(e, async () => {
					let {
						default: e
					} = await Promise.all([n.e("21443"), n.e("19877")]).then(n.bind(n, 158195));
					return t => (0, i.jsx)(e, o(l({}, t), {
						guildId: a
					}))
				})
			}
		}
	}
]);
//# sourceMappingURL=3c945840f4a7f79e.js.map