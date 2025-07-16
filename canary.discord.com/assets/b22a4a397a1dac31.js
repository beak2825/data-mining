"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["88934"], {
		882008: function(e) {
			e.exports = "/assets/025eea446d3b4403.svg"
		},
		516450: function(e) {
			e.exports = "/assets/3aa7e375b23dc56f.svg"
		},
		33122: function(e, t, n) {
			n.d(t, {
				Z: () => R,
				r: () => O
			}), n(388685);
			var r, a = n(255367),
				i = n(73800),
				l = n(120356),
				s = n.n(l),
				o = n(748780),
				c = n(481060),
				d = n(112724),
				u = n(446411),
				p = n(468846),
				m = n(679056),
				h = n(44488),
				g = n(519160),
				f = n(124347),
				_ = n(283756),
				b = n(524444),
				x = n(585483),
				v = n(981631),
				C = n(361183);

			function j(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function y(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						r = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), r.forEach(function(t) {
						j(e, t, n[t])
					})
				}
				return e
			}

			function I() {
				var e, t;
				let n = (e = ["grayscale(", ")"], t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
					raw: {
						value: Object.freeze(t)
					}
				})));
				return I = function() {
					return n
				}, n
			}
			let O = {
					SMALL: {
						width: 640,
						height: 360,
						margin: 15
					},
					MEDIUM: {
						width: 880,
						height: 495,
						margin: 20
					}
				},
				S = {
					width: 1920,
					height: 1080
				},
				P = {
					width: 1280,
					height: 720
				},
				E = e => {
					var t, n;
					return (0, b.lV)((t = y({}, e), n = n = {
						className: C.videoWrapper,
						mediaPlayerClassName: C.mediaPlayer
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
				N = e => (0, a.jsx)(f.ZP, y({}, e)),
				T = e => {
					let t, n, r, {
						item: i,
						size: l,
						onPlay: s,
						onEnded: o,
						onClick: d,
						playable: m,
						volume: h,
						isMuted: g,
						onVolumeChange: f,
						onMute: _
					} = e;
					if (i.type === v.s9s.YOUTUBE_VIDEO) t = y({
						url: (0, v.n8r)(i.youtubeVideoId)
					}, S), n = y({
						url: "".concat((0, v.ivE)(i.youtubeVideoId), "?").concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1")
					}, P), r = p.pn.YOUTUBE;
					else {
						let e = null != i.width ? i.width : 0,
							r = null != i.height ? i.height : 0;
						t = {
							url: i.thumbnailSrc,
							width: e,
							height: r
						}, n = {
							url: i.src,
							proxyURL: i.src,
							width: e,
							height: r
						}
					}
					let x = (0, a.jsx)(u.BC, {
						href: null,
						thumbnail: t,
						video: n,
						provider: r,
						allowFullScreen: !0,
						maxHeight: l.height,
						maxWidth: l.width,
						onPlay: s,
						onEnded: o,
						playable: m,
						className: C.video,
						volume: h,
						onVolumeChange: f,
						autoMute: g,
						onMute: _,
						autoPlay: m,
						renderVideoComponent: E,
						renderImageComponent: N,
						renderLinkComponent: b.iT
					});
					return m ? x : (0, a.jsx)(c.P3F, {
						className: C.itemImageWrapper,
						onClick: d,
						children: x
					})
				},
				A = () => (0, a.jsx)("div", {
					className: C.paginationVideoOverlay,
					children: (0, a.jsx)(_.Z, {
						inactive: !0,
						className: C.paginationVideoPlayPill,
						renderLinkComponent: b.iT
					})
				});
			class L extends(r = i.PureComponent) {
				componentDidMount() {
					x.S.subscribe(v.CkL.CAROUSEL_PREV, this.manualPrevious), x.S.subscribe(v.CkL.CAROUSEL_NEXT, this.manualNext)
				}
				componentWillUnmount() {
					x.S.unsubscribe(v.CkL.CAROUSEL_PREV, this.manualPrevious), x.S.unsubscribe(v.CkL.CAROUSEL_NEXT, this.manualNext)
				}
				getStyle(e, t) {
					let n = t.interpolate({
						inputRange: [0, 1],
						outputRange: [1, 0],
						extrapolate: o.Z.Extrapolate.CLAMP
					});
					return {
						opacity: t.interpolate({
							inputRange: [0, 1],
							outputRange: [.3, 1],
							extrapolate: o.Z.Extrapolate.CLAMP
						}),
						filter: o.Z.template(I(), n)
					}
				}
				handleCurrentItemClick(e, t) {
					let {
						onCurrentItemClick: n
					} = this.props;
					null != n && n(e, t), this.setState({
						hasInteracted: !0
					})
				}
				handleEdgeItemMouseEnter(e) {
					let {
						currentIndex: t
					} = this.state;
					e < t ? this.setState({
						hoveringPreviousItem: !0
					}) : e > t && this.setState({
						hoveringNextItem: !0
					})
				}
				renderCarousel() {
					let {
						items: e
					} = this.props, {
						currentIndex: t,
						animate: n,
						hoveringPreviousItem: r,
						hoveringNextItem: i
					} = this.state, l = (0, a.jsx)(g.ZP, {
						items: e,
						itemSize: this.getItemSize(),
						renderItem: this.renderItem,
						currentIndex: t,
						animate: n,
						edgeItems: 2
					});
					return e.length <= 1 ? l : (0, a.jsxs)("div", {
						className: C.carouselButtonsContainer,
						children: [l, (0, a.jsx)(h.am, {
							onClick: this.manualPrevious,
							className: s()(C.arrow, {
								[C.arrowHovered]: r
							})
						}), (0, a.jsx)(h.Pz, {
							onClick: this.manualNext,
							className: s()(C.arrow, {
								[C.arrowHovered]: i
							})
						})]
					})
				}
				getPaginationSrc(e) {
					return e.type === v.s9s.YOUTUBE_VIDEO ? (0, v.n8r)(e.youtubeVideoId) : e.type === v.s9s.IMG ? e.src : e.type === v.s9s.VIDEO ? e.thumbnailSrc : null
				}
				render() {
					let {
						items: e,
						className: t,
						autoplayInterval: n,
						paused: r
					} = this.props, {
						currentIndex: i,
						playingVideo: l,
						hasInteracted: s
					} = this.state;
					return (0, a.jsxs)(m.Z, {
						pauseOnHover: !0,
						onInterval: this.autoNext,
						interval: n,
						className: t,
						disable: l || s || r,
						children: [this.renderCarousel(), (0, a.jsx)("div", {
							className: C.pagination,
							children: (0, a.jsx)(h.ZP, {
								renderItem: this.renderPaginationItem,
								scrollToPadding: 85,
								items: e,
								selectedIndex: i,
								onSetItem: e => this.setItem(e, !0),
								paginationContainerClass: C.scroller,
								align: e.length < 6 ? h.ZP.Align.LEFT : h.ZP.Align.CENTER
							})
						})]
					})
				}
				constructor(...e) {
					super(...e), j(this, "state", {
						currentIndex: 0,
						animate: !0,
						playingVideo: !1,
						hasInteracted: !1,
						hoveringPreviousItem: !1,
						hoveringNextItem: !1,
						volume: 1,
						isMuted: !0
					}), j(this, "getItemSize", () => {
						let {
							width: e
						} = this.props, t = O.MEDIUM;
						return null != e && e < t.width && (t = O.SMALL), t
					}), j(this, "setItem", (e, t) => {
						let {
							props: {
								items: n,
								onIntentionalChange: r
							},
							state: {
								currentIndex: a
							}
						} = this, i = (0, g.gN)(a, n.length), l = (0, g.gN)(e, n.length), s = 1 === Math.abs(e - i) || e === n.length - 1 && 0 === i || 0 === e && i === n.length - 1;
						this.setState({
							playingVideo: !1,
							currentIndex: l,
							animate: s,
							hasInteracted: t
						}), t && null != r && r(n[l], i, l)
					}), j(this, "autoNext", () => {
						this.setItem(this.state.currentIndex + 1, !1)
					}), j(this, "manualNext", () => {
						this.setItem(this.state.currentIndex + 1, !0)
					}), j(this, "manualPrevious", () => {
						this.setItem(this.state.currentIndex - 1, !0)
					}), j(this, "handlePlay", e => this.setState({
						playingVideo: !0,
						hasInteracted: !e
					})), j(this, "handleEnded", () => {
						this.state.hasInteracted || this.autoNext()
					}), j(this, "handleVolumeChange", e => {
						this.setState({
							volume: e,
							hasInteracted: !0
						})
					}), j(this, "handleMute", e => {
						this.setState({
							isMuted: e,
							hasInteracted: !0
						})
					}), j(this, "handleVideoClick", e => {
						this.setItem(e, !0)
					}), j(this, "handleEdgeItemMouseLeave", () => {
						this.setState({
							hoveringPreviousItem: !1,
							hoveringNextItem: !1
						})
					}), j(this, "renderCarouselImage", (e, t, n) => n ? (0, a.jsx)(c.P3F, {
						onClick: () => this.handleCurrentItemClick(e, t),
						className: C.itemImageWrapper,
						children: (0, a.jsx)("img", {
							src: e.src,
							alt: "",
							className: C.currentImage
						})
					}) : (0, a.jsx)(c.P3F, {
						onClick: () => this.setItem(t, !0),
						className: C.itemImageWrapper,
						children: (0, a.jsx)("img", {
							alt: "",
							className: C.itemImage,
							src: e.src,
							draggable: !1
						})
					})), j(this, "renderItem", (e, t, n) => {
						let {
							currentIndex: r,
							volume: i,
							isMuted: l
						} = this.state, c = t === (0, g.gN)(r, this.props.items.length);
						return (0, a.jsx)(o.Z.div, {
							className: s()(C.item, {
								[C.currentItem]: c
							}),
							style: null != n ? this.getStyle(t, n) : null,
							onMouseEnter: c ? null : () => this.handleEdgeItemMouseEnter(t),
							onMouseLeave: c ? null : this.handleEdgeItemMouseLeave,
							children: e.type === v.s9s.VIDEO || e.type === v.s9s.YOUTUBE_VIDEO ? (0, a.jsx)(T, {
								item: e,
								size: this.getItemSize(),
								onPlay: this.handlePlay,
								onEnded: this.handleEnded,
								playable: c,
								onClick: () => this.handleVideoClick(t),
								volume: i,
								onVolumeChange: this.handleVolumeChange,
								isMuted: l,
								onMute: this.handleMute
							}) : this.renderCarouselImage(e, t, c)
						})
					}), j(this, "renderPaginationItem", (e, t) => {
						let {
							currentIndex: n
						} = this.state, r = n === t;
						return (0, a.jsxs)("div", {
							className: s()(C.paginationItem, r ? C.selectedStorePaginationItem : C.unselectedStorePaginationItem),
							children: [(0, a.jsx)("img", {
								alt: null == e.alt ? t : e.alt,
								className: C.storePaginationImg,
								src: this.getPaginationSrc(e),
								draggable: !1
							}), e.type === v.s9s.YOUTUBE_VIDEO || e.type === v.s9s.VIDEO ? (0, a.jsx)(A, {}) : null, r ? (0, a.jsx)("div", {
								className: C.overlappingBorder
							}) : null]
						}, "page-".concat(t))
					})
				}
			}
			j(L, "defaultProps", {
				autoplayInterval: 8e3,
				paused: !1
			});
			let R = (0, d.Z)(L)
		},
		761705: function(e, t, n) {
			n.d(t, {
				Z: () => y
			}), n(388685), n(539854);
			var r, a = n(255367),
				i = n(73800),
				l = n(120356),
				s = n.n(l),
				o = n(299608),
				c = n.n(o),
				d = n(748780),
				u = n(215569),
				p = n(376641),
				m = n(714338),
				h = n(134432),
				g = n(44488),
				f = n(585483),
				_ = n(981631),
				b = n(389249);

			function x(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function v(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						r = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), r.forEach(function(t) {
						x(e, t, n[t])
					})
				}
				return e
			}
			let C = {
				friction: 10,
				tension: 100
			};
			class j extends i.Component {
				componentWillEnter(e) {
					let {
						directionHistory: t
					} = this.props, {
						translate: n,
						opacity: r
					} = this.state;
					n.setValue(t[t.length - 1]), r.setValue(0), e(), d.Z.parallel([d.Z.timing(r, {
						toValue: 1,
						easing: d.Z.Easing.out(d.Z.Easing.linear),
						duration: 200
					}), d.Z.spring(n, v({
						toValue: 0
					}, C))]).start()
				}
				componentWillLeave(e) {
					let {
						directionHistory: t
					} = this.props, {
						opacity: n,
						translate: r
					} = this.state;
					d.Z.parallel([d.Z.timing(n, {
						toValue: 0,
						easing: d.Z.Easing.in(d.Z.Easing.linear),
						duration: 200
					}), d.Z.spring(r, v({
						toValue: -1 * t[t.length - 1]
					}, C))]).start(e)
				}
				getStyle() {
					let {
						translate: e,
						opacity: t
					} = this.state;
					return d.Z.accelerate({
						opacity: t,
						transform: [{
							translateX: e.interpolate({
								inputRange: [0, 1],
								outputRange: ["0px", "300px"]
							})
						}]
					})
				}
				render() {
					let {
						item: e
					} = this.props, {
						className: t
					} = this.props;
					return (0, a.jsx)(d.Z.img, {
						src: e.src,
						alt: "",
						className: s()(b.slide, t),
						style: this.getStyle()
					})
				}
				constructor(...e) {
					super(...e), x(this, "state", {
						translate: new d.Z.Value(0),
						opacity: new d.Z.Value(1)
					})
				}
			}
			class y extends(r = i.Component) {
				componentDidMount() {
					this.preloadNextImages(), m.Z.disable(), m.Z.enableTemp(p.P), f.S.subscribe(_.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), f.S.subscribe(_.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled)
				}
				componentWillUnmount() {
					m.Z.disableTemp(), f.S.unsubscribe(_.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), f.S.unsubscribe(_.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled)
				}
				preloadNextImages() {
					var e, t;
					let {
						currentIndex: n
					} = this.state, {
						items: r
					} = this.props, a = ((n + 1) % (e = r.length) + e) % e, i = ((n - 1) % (t = r.length) + t) % t;
					this.preloadImage(r[a]), this.preloadImage(r[i])
				}
				preloadImage(e) {
					(0, h.po)(e.src)
				}
				componentDidUpdate(e, t) {
					let {
						currentIndex: n
					} = this.state;
					n !== t.currentIndex && this.preloadNextImages()
				}
				navigateTo(e) {
					var t, n, r;
					let {
						directionHistory: a,
						currentIndex: i
					} = this.state;
					a.push(e - i), e = (e % (r = this.props.items.length) + r) % r, this.setState({
						currentIndex: e,
						directionHistory: a
					}), null == (t = (n = this.props).onIndexChange) || t.call(n, e)
				}
				render() {
					var e;
					let {
						className: t
					} = this.props, {
						currentIndex: n,
						directionHistory: r
					} = this.state, {
						modalCarouselItemClassName: i
					} = this.props, l = this.props.items[n], o = this.props.items;
					return (0, a.jsxs)(u.W, {
						component: "div",
						className: s()(b.wrapper, t),
						children: [o.length > 1 ? (0, a.jsx)(g.am, {
							className: b.navPrev,
							onClick: this.gotoPrev
						}) : null, null != (e = l.component) ? e : (0, a.jsx)(j, {
							item: l,
							directionHistory: r,
							className: i
						}, l.src), o.length > 1 ? (0, a.jsx)(g.Pz, {
							className: b.navNext,
							onClick: this.gotoNext
						}) : null]
					})
				}
				constructor(e) {
					super(e), x(this, "gotoNext", () => {
						let {
							currentIndex: e
						} = this.state;
						this.navigateTo(e + 1)
					}), x(this, "gotoPrev", () => {
						let {
							currentIndex: e
						} = this.state;
						this.navigateTo(e - 1)
					}), x(this, "gotoNextThrottled", c()(this.gotoNext, 300)), x(this, "gotoPrevThrottled", c()(this.gotoPrev, 300)), this.state = {
						currentIndex: e.startWith,
						directionHistory: []
					}
				}
			}
			x(y, "defaultProps", {
				startWith: 0
			})
		},
		15470: function(e, t, n) {
			n.d(t, {
				Z: () => y,
				i: () => x
			}), n(35282), n(388685), n(953529);
			var r = n(255367),
				a = n(73800),
				i = n(120356),
				l = n.n(i),
				s = n(159635),
				o = n.n(s),
				c = n(755721),
				d = n(770146),
				u = n(241209),
				p = n(73346),
				m = n(388032),
				h = n(455660);

			function g(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function f(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						r = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), r.forEach(function(t) {
						g(e, t, n[t])
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
			let b = /^!\[([^\]]*)\]\(asset:\/\/(\d+)\)/,
				x = _(f({}, u.Z.rules), {
					heading: _(f({}, u.Z.rules.heading), {
						react(e, t, n) {
							let a = "h".concat(Math.min(Math.max(2, e.level + 1), 4));
							return (0, r.jsx)(d.Z, {
								tag: a,
								children: t(e.content, n)
							}, n.key)
						}
					}),
					assetImage: {
						order: 5,
						match(e, t) {
							let n = e.match(b);
							if (null != n) {
								let e = n[2],
									r = t.assets.find(t => t.id === e);
								return null != r && [...n, r, t.applicationId]
							}
							return !1
						},
						parse: e => ({
							asset: e[3],
							alt: e[1],
							applicationId: e[4]
						}),
						react: (e, t, n) => (0, r.jsx)("div", {
							className: h.assetWrapper,
							children: (0, r.jsx)("img", {
								alt: e.alt,
								src: (0, p._W)(e.applicationId, e.asset, 800),
								className: h.asset
							})
						}, n.key)
					}
				}),
				v = o().parserFor(x),
				C = o().reactFor(o().ruleOutput(x, "react"));
			class j extends a.PureComponent {
				componentDidMount() {
					if (null != this._container) {
						let {
							height: e
						} = this._container.getBoundingClientRect();
						this.setState({
							collapsable: e > 400
						})
					}
				}
				render() {
					let {
						applicationId: e,
						description: t,
						blurb: n,
						className: a,
						assets: i
					} = this.props, {
						collapsed: s,
						collapsable: o
					} = this.state;
					return (0, r.jsxs)("div", {
						className: a,
						children: [(0, r.jsx)("div", {
							className: l()({
								[h.collapsed]: o && s
							}),
							children: (0, r.jsxs)("div", {
								ref: this.setContentContainerRef,
								children: [(0, r.jsx)("div", {
									className: h.blurb,
									children: n
								}), (0, r.jsx)(u.Z, {
									className: h.description,
									parser: v,
									output: C,
									state: {
										assets: i,
										applicationId: e
									},
									children: t
								})]
							})
						}), o ? (0, r.jsx)(c.zx, {
							className: h.toggleCollapseButton,
							onClick: this.handleToggleCollapse,
							color: c.zx.Colors.PRIMARY,
							children: s ? m.intl.string(m.t.DxcOXF) : m.intl.string(m.t.rD6EaG)
						}) : null]
					})
				}
				constructor(...e) {
					super(...e), g(this, "state", {
						collapsed: !0,
						collapsable: !0
					}), g(this, "_container", void 0), g(this, "handleToggleCollapse", () => {
						this.setState({
							collapsed: !this.state.collapsed
						})
					}), g(this, "setContentContainerRef", e => {
						this._container = e
					})
				}
			}
			let y = j
		},
		445986: function(e, t, n) {
			n.d(t, {
				Q: () => f,
				Z: () => x
			}), n(35282), n(539854), n(388685);
			var r = n(255367),
				a = n(73800),
				i = n(481060),
				l = n(33122),
				s = n(761705),
				o = n(9807),
				c = n(843445),
				d = n(981631),
				u = n(388032);

			function p(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function m(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						r = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), r.forEach(function(t) {
						p(e, t, n[t])
					})
				}
				return e
			}

			function h(e, t) {
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

			function g(e, t) {
				if (null == e) return {};
				var n, r, a = function(e, t) {
					if (null == e) return {};
					var n, r, a = {},
						i = Object.keys(e);
					for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
					return a
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
				}
				return a
			}

			function f(e) {
				return "".concat(e.split("?")[0], "?size=").concat(2048)
			}
			let _ = e => {
				var {
					index: t,
					items: n
				} = e, a = g(e, ["index", "items"]);
				let i = n[t],
					l = 0,
					o = [];
				for (let e of n)
					if (e.type === d.s9s.IMG) {
						let {
							width: t,
							height: n,
							src: r
						} = e;
						e === i && (l = o.length), o.push({
							src: f(r),
							width: t,
							height: n
						})
					} return (0, r.jsx)(s.Z, h(m({}, a), {
					items: o,
					startWith: l
				}))
			};
			class b extends a.Component {
				render() {
					let e = this.props,
						{
							pageSize: t
						} = e,
						n = g(e, ["pageSize"]),
						a = t === c.b.SMALL ? o.Z : l.Z;
					return (0, r.jsx)(a, h(m({}, n), {
						onCurrentItemClick: this.handleCurrentItemClick
					}))
				}
				constructor(...e) {
					super(...e), p(this, "handleCurrentItemClick", (e, t) => {
						e.type !== d.s9s.IMG || (0, i.$sL)() || (0, i.h7j)(e => (0, r.jsx)(i.Y0X, h(m({
							size: i.CgR.DYNAMIC,
							"aria-label": u.intl.string(u.t.X4IxWF)
						}, e), {
							parentComponent: "ApplicationStoreListingCarousel",
							children: (0, r.jsx)(_, h(m({}, e), {
								index: t,
								items: this.props.items
							}))
						})))
					})
				}
			}
			let x = b
		},
		843445: function(e, t, n) {
			n.d(t, {
				b: () => a,
				x: () => r
			});
			let r = 1e3,
				a = Object.freeze({
					SMALL: "small",
					LARGE: "large"
				})
		},
		9807: function(e, t, n) {
			n.d(t, {
				Z: () => T
			}), n(388685), n(415506);
			var r, a = n(255367),
				i = n(73800),
				l = n(120356),
				s = n.n(l),
				o = n(481060),
				c = n(33122),
				d = n(446411),
				u = n(468846),
				p = n(453499),
				m = n(124347),
				h = n(80966),
				g = n(524444),
				f = n(843445),
				_ = n(981631),
				b = n(388032),
				x = n(365664);

			function v(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function C(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {},
						r = Object.keys(n);
					"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
						return Object.getOwnPropertyDescriptor(n, e).enumerable
					}))), r.forEach(function(t) {
						v(e, t, n[t])
					})
				}
				return e
			}

			function j(e, t) {
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

			function y(e, t) {
				if (null == e) return {};
				var n, r, a = function(e, t) {
					if (null == e) return {};
					var n, r, a = {},
						i = Object.keys(e);
					for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
					return a
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
				}
				return a
			}
			let I = e => {
					var {
						className: t
					} = e, n = y(e, ["className"]);
					return (0, a.jsx)(h.Z, j(C({}, n), {
						className: s()(x.sizedToParent, t),
						mediaPlayerClassName: x.sizedToParent,
						renderLinkComponent: g.iT
					}))
				},
				O = e => {
					var {
						containerClassName: t,
						className: n
					} = e, r = y(e, ["containerClassName", "className"]);
					return (0, a.jsx)(m.ZP, j(C({}, r), {
						className: s()(n, t)
					}))
				},
				S = {
					width: 1280,
					height: 720
				},
				P = {
					width: 640,
					height: 360
				},
				E = e => {
					let t, n, r, {
						item: i,
						onPlay: l,
						volume: s,
						onVolumeChange: o,
						onMute: p,
						isMuted: m,
						autoPlay: h
					} = e;
					if (i.type === _.s9s.YOUTUBE_VIDEO) t = C({
						url: (0, _.n8r)(i.youtubeVideoId)
					}, S), n = C({
						url: "".concat((0, _.ivE)(i.youtubeVideoId), "?").concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1")
					}, P), r = u.pn.YOUTUBE;
					else {
						let e = null != i.width ? i.width : 0,
							r = null != i.height ? i.height : 0;
						t = {
							url: i.thumbnailSrc,
							width: e,
							height: r
						}, n = {
							url: i.src,
							proxyURL: i.src,
							width: e,
							height: r
						}
					}
					return (0, a.jsx)("div", {
						className: x.embedContainer,
						children: (0, a.jsx)(d.BC, {
							className: x.sizedToParent,
							iframeWrapperClassName: x.sizedToParent,
							href: null,
							thumbnail: t,
							video: n,
							provider: r,
							maxHeight: c.r.SMALL.height,
							maxWidth: f.b.SMALL,
							onPlay: l,
							playable: !0,
							volume: s,
							onVolumeChange: o,
							autoMute: m,
							onMute: p,
							autoPlay: h,
							renderImageComponent: O,
							renderVideoComponent: I,
							renderLinkComponent: g.iT
						})
					})
				};
			class N extends(r = i.PureComponent) {
				componentDidMount() {
					let {
						items: e
					} = this.props;
					e.length > 0 && e[0].type === _.s9s.IMG && this.setState({
						imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e[0].src, Date.now())
					})
				}
				handleCurrentItemClick(e, t) {
					let {
						onCurrentItemClick: n
					} = this.props;
					null != n && n(e, t), this.setState({
						hasInteracted: !0
					})
				}
				render() {
					let {
						items: e,
						autoplayInterval: t,
						className: n,
						paused: r,
						themedPagination: i
					} = this.props, {
						hasInteracted: l
					} = this.state;
					return (0, a.jsx)(p.Z, {
						items: e.slice(0, 12),
						delay: t,
						initialPaused: r || l,
						renderItem: this.renderItem,
						className: s()(x.smallCarousel, n),
						themedPagination: i,
						onIntentionalChange: this.handleIntentionalChange,
						onChangeItem: this.handleChangeItem
					})
				}
				constructor(...e) {
					super(...e), v(this, "state", {
						hasInteracted: !1,
						isVideoPlaying: !1,
						isMuted: !0,
						volume: 1,
						status: new Map,
						imageLoadingStartTime: new Map
					}), v(this, "handlePlay", e => {
						this.setState({
							isVideoPlaying: !0,
							hasInteracted: !e
						})
					}), v(this, "handleVolumeChange", e => {
						this.setState({
							volume: e,
							hasInteracted: !0
						})
					}), v(this, "handleMute", e => {
						this.setState({
							isMuted: e,
							hasInteracted: !0
						})
					}), v(this, "handleChangeItem", e => {
						this.setState({
							isVideoPlaying: !1
						}), e.type === _.s9s.IMG && this.setState({
							imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e.src, Date.now())
						})
					}), v(this, "handleIntentionalChange", (e, t, n, r) => {
						this.setState({
							hasInteracted: !0
						});
						let {
							onIntentionalChange: a
						} = this.props;
						null != a && a(e, t, n, r)
					}), v(this, "handleOnErrorImg", e => {
						this.setState({
							status: new Map(this.state.status).set(e.target.src, "errored")
						})
					}), v(this, "handleOnLoadImg", e => {
						let {
							onImageLoad: t
						} = this.props;
						this.setState({
							status: new Map(this.state.status).set(e.target.src, "loaded")
						});
						let n = this.state.imageLoadingStartTime.get(e.target.src),
							r = null != n ? Date.now() - n : void 0;
						null == t || t({
							src: e.target.src,
							loadTimeMs: r
						})
					}), v(this, "renderItem", (e, t) => {
						let n, {
								isMuted: r,
								volume: i
							} = this.state,
							{
								videoAutoPlay: l
							} = this.props;
						switch (e.type) {
							case _.s9s.YOUTUBE_VIDEO:
							case _.s9s.VIDEO:
								n = (0, a.jsx)(E, {
									item: e,
									onPlay: this.handlePlay,
									isMuted: r,
									volume: i,
									onVolumeChange: this.handleVolumeChange,
									onMute: this.handleMute,
									autoPlay: l
								});
								break;
							case _.s9s.IMG:
								if ("errored" === this.state.status.get(e.src)) {
									let e = (0, a.jsx)(o.X6q, {
										variant: "heading-xl/semibold",
										children: b.intl.string(b.t.UvDfMz)
									});
									return (0, a.jsx)("div", {
										className: x.errorContainer,
										children: void 0 !== this.props.errorComponent ? this.props.errorComponent : e
									})
								} {
									var c;
									let t = null != (c = e.alt) ? c : b.intl.string(b.t.X4IxWF);
									n = (0, a.jsxs)(a.Fragment, {
										children: [(0, a.jsx)(o.$jN, {
											className: s()(x.spinner, {
												[x.hidden]: void 0 !== this.state.status.get(e.src)
											}),
											type: o.$jN.Type.SPINNING_CIRCLE
										}), (0, a.jsx)("img", {
											onError: this.handleOnErrorImg,
											onLoad: this.handleOnLoadImg,
											className: s()(x.smallCarouselImage, {
												[x.hidden]: "loaded" !== this.state.status.get(e.src)
											}),
											src: e.src,
											alt: t
										})]
									})
								}
								break;
							default:
								throw Error("Unexpected MediaType")
						}
						return (0, a.jsx)(o.P3F, {
							className: x.smallCarouselItem,
							onClick: () => this.handleCurrentItemClick(e, t),
							children: n
						})
					})
				}
			}
			v(N, "defaultProps", {
				paused: !1,
				videoAutoPlay: !0
			});
			let T = N
		},
		817718: function(e, t, n) {
			n.d(t, {
				U3: () => p,
				XM: () => d,
				hd: () => c,
				lI: () => o,
				py: () => u
			});
			var r = n(481060),
				a = n(819640),
				i = n(585483),
				l = n(981631);
			let s = () => a.Z.hasLayers() || (0, r.$sL)(),
				o = {
					binds: ["right"],
					comboKeysBindGlobal: !0,
					action() {
						if (!s()) return i.S.dispatch(l.CkL.CAROUSEL_NEXT), !1
					}
				},
				c = {
					binds: ["left"],
					comboKeysBindGlobal: !0,
					action() {
						if (!s()) return i.S.dispatch(l.CkL.CAROUSEL_PREV), !1
					}
				},
				d = {
					binds: ["right", "down", "space"],
					comboKeysBindGlobal: !0,
					action: () => (i.S.dispatch(l.CkL.MODAL_CAROUSEL_NEXT), !1)
				},
				u = {
					binds: ["left", "up"],
					comboKeysBindGlobal: !0,
					action: () => (i.S.dispatch(l.CkL.MODAL_CAROUSEL_PREV), !1)
				},
				p = {
					binds: ["esc"],
					comboKeysBindGlobal: !0,
					action() {
						if (i.S.hasSubscribers(l.CkL.MODAL_CLOSE)) return i.S.dispatch(l.CkL.MODAL_CLOSE), !1
					}
				}
		},
		376641: function(e, t, n) {
			n.d(t, {
				P: () => i,
				v: () => l
			});
			var r = n(817718),
				a = n(981631);
			let i = {
					[a.EkH.MODAL_CAROUSEL_NEXT]: r.XM,
					[a.EkH.MODAL_CAROUSEL_PREV]: r.py,
					[a.EkH.CLOSE_MODAL]: r.U3
				},
				l = {
					[a.EkH.CLOSE_MODAL]: r.U3
				}
		},
		860719: function(e, t, n) {
			n.d(t, {
				w: () => a
			}), n(997841);
			var r = n(85025);

			function a(e) {
				let {
					flags: t
				} = e, n = (0, r.O)(t), a = null != n && ((null == n ? void 0 : n.messageContent) || (null == n ? void 0 : n.messageContentLimited)), i = null != n && ((null == n ? void 0 : n.guildPresences) || (null == n ? void 0 : n.guildPresencesLimited)), l = null != n && ((null == n ? void 0 : n.guildMembers) || (null == n ? void 0 : n.guildMembersLimited));
				return {
					hasMessageContent: a,
					hasGuildPresences: i,
					hasGuildMembers: l,
					hasIntents: a || i || l
				}
			}
		},
		85025: function(e, t, n) {
			n.d(t, {
				O: () => i
			});
			var r = n(630388),
				a = n(981631);

			function i(e) {
				if (null != e) return {
					guildPresences: (0, r.yE)(e, a.udG.GATEWAY_PRESENCE),
					guildMembers: (0, r.yE)(e, a.udG.GATEWAY_GUILD_MEMBERS),
					messageContent: (0, r.yE)(e, a.udG.GATEWAY_MESSAGE_CONTENT),
					guildPresencesLimited: (0, r.yE)(e, a.udG.GATEWAY_PRESENCE_LIMITED),
					guildMembersLimited: (0, r.yE)(e, a.udG.GATEWAY_GUILD_MEMBERS_LIMITED),
					messageContentLimited: (0, r.yE)(e, a.udG.GATEWAY_MESSAGE_CONTENT_LIMITED)
				}
			}
		},
		648113: function(e, t, n) {
			n.d(t, {
				C: () => o
			});
			var r = n(120356),
				a = n.n(r),
				i = n(442837),
				l = n(514361),
				s = n(750567);

			function o(e) {
				let t = (0, i.e7)([l.Z], () => null != l.Z.gradientPreset);
				return a()(s.gradient, e, {
					[s.clientThemes]: t
				})
			}
		},
		114851: function(e, t, n) {
			n.d(t, {
				M: () => i
			});
			var r = n(73800),
				a = n(660384);

			function i() {
				let e = r.useRef(new a.Z),
					t = r.useCallback(t => {
						e.current.handleScroll(t)
					}, []);
				return {
					resetScrollPosition: r.useCallback(() => {
						e.current.scrollPosition.set(0)
					}, []),
					scrollPosition: e.current.scrollPosition,
					onScroll: t
				}
			}
		},
		88693: function(e, t, n) {
			n.d(t, {
				U: () => o
			});
			var r = n(73800),
				a = n(49898),
				i = n(794916);
			let l = 20 + a.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX - a.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX,
				s = 20 + a.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX + a.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX;

			function o(e) {
				let {
					isSearchBarVisible: t,
					isSearchBarEmpty: n,
					searchBarState: o,
					setSearchBarState: c
				} = e, d = r.useCallback(e => {
					if (!t) return;
					let r = Math.round(e);
					switch (o) {
						case a.GlobalDiscoverySearchBarState.DEFAULT:
							r < 20 && c(n ? a.GlobalDiscoverySearchBarState.COLLAPSED : a.GlobalDiscoverySearchBarState.FLOATING);
							break;
						case a.GlobalDiscoverySearchBarState.COLLAPSED:
							r > l && c(a.GlobalDiscoverySearchBarState.DEFAULT);
							break;
						case a.GlobalDiscoverySearchBarState.FLOATING:
							r > s && c(a.GlobalDiscoverySearchBarState.DEFAULT)
					}
				}, [n, t, o, c]), u = r.useCallback(() => {
					c(a.GlobalDiscoverySearchBarState.FLOATING)
				}, [c]), p = r.useCallback(() => {
					o === a.GlobalDiscoverySearchBarState.FLOATING && n && c(a.GlobalDiscoverySearchBarState.COLLAPSED)
				}, [n, o, c]);
				return {
					onTabsAvailableWidthChange: d,
					tabsClassName: o === a.GlobalDiscoverySearchBarState.FLOATING ? i.floatingSearchTabsMask : void 0,
					onCollapsedSearchBarClick: u,
					onSearchBarBlur: p
				}
			}
		},
		322665: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			var r = n(255367),
				a = n(648113),
				i = n(750567);

			function l() {
				let e = (0, a.C)();
				return (0, r.jsx)("div", {
					className: i.gradientBackground,
					children: (0, r.jsx)("div", {
						className: e
					})
				})
			}
		},
		17845: function(e, t, n) {
			n.d(t, {
				Z: () => m
			}), n(953529);
			var r = n(255367),
				a = n(73800),
				i = n(120356),
				l = n.n(i),
				s = n(780384),
				o = n(481060),
				c = n(410030),
				d = n(688465),
				u = n(750567);

			function p(e) {
				let {
					title: t,
					betaTag: n
				} = e;
				return (0, r.jsxs)(o.X6q, {
					className: l()(u.title, u.uppercase),
					variant: "display-lg",
					color: "header-primary",
					children: [t, n && (0, r.jsx)(d.Z, {
						className: u.betaTag
					})]
				})
			}

			function m(e) {
				let {
					title: t,
					description: n,
					button: i,
					className: d,
					children: m,
					betaTag: h = !1
				} = e, g = (0, c.ZP)(), f = (0, s.wj)(g), _ = a.useMemo(() => Array.isArray(t) ? t.map((e, t) => (0, r.jsx)(p, {
					title: e,
					betaTag: h
				}, t)) : (0, r.jsx)(p, {
					title: t,
					betaTag: h
				}), [t, h]);
				return (0, r.jsxs)("div", {
					className: l()(u.container, d),
					children: [(0, r.jsx)("div", {
						className: u.content,
						children: (0, r.jsxs)("div", {
							className: u.textContainer,
							children: [_, null != n && (0, r.jsx)(o.Text, {
								className: u.description,
								variant: "text-md/medium",
								color: f ? "text-muted" : "header-primary",
								children: n
							}), null != i && (0, r.jsx)("div", {
								className: u.buttonContainer,
								children: i
							})]
						})
					}), m]
				})
			}
		},
		374939: function(e, t, n) {
			n.d(t, {
				Z: () => i
			});
			var r = n(255367);
			n(73800);
			var a = n(767786);

			function i(e) {
				let {
					children: t
				} = e;
				return (0, r.jsx)("section", {
					className: a.contentSection,
					children: (0, r.jsx)("div", {
						className: a.content,
						children: t
					})
				})
			}
		},
		233374: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var r = n(255367);
			n(73800);
			var a = n(120356),
				i = n.n(a),
				l = n(481060),
				s = n(237561);
			let o = function(e) {
				let {
					tabs: t,
					onTabSelect: n,
					selectedTab: a,
					className: o
				} = e;
				return (0, r.jsx)(l.njP, {
					type: "top-pill",
					selectedItem: a,
					onItemSelect: n,
					className: o,
					children: t.map((e, t) => {
						let {
							id: n,
							label: a,
							count: o
						} = e;
						return (0, r.jsx)(l.njP.Item, {
							id: n,
							className: i()(s.tabItem, {
								[s.firstChildSpacingFix]: 0 === t
							}),
							"aria-label": a,
							children: null != o && o > 0 ? "".concat(a, " (").concat(o, ")") : a
						}, n)
					})
				})
			}
		},
		611928: function(e, t, n) {
			n.d(t, {
				Cm: () => m,
				ZP: () => g,
				_6: () => h,
				aV: () => p,
				z6: () => u
			});
			var r, a = n(255367),
				i = n(73800),
				l = n(120356),
				s = n.n(l),
				o = n(108542),
				c = n(481060),
				d = n(794916);

			function u(e) {
				let {
					scrollPosition: t
				} = e;
				return (0, a.jsx)(o.animated.div, {
					className: d.backdrop,
					style: {
						opacity: null == t ? void 0 : t.to([0, 100], [0, 1])
					}
				})
			}

			function p(e) {
				let {
					icon: t
				} = e;
				return (0, a.jsx)(t, {
					className: d.icon,
					color: c.TVs.colors.HEADER_PRIMARY,
					size: "md"
				})
			}

			function m(e) {
				let {
					onClick: t,
					icon: n
				} = e;
				return (0, a.jsx)(c.P3F, {
					className: d.iconButton,
					onClick: t,
					children: (0, a.jsx)(n, {
						color: "currentColor",
						size: "sm"
					})
				})
			}
			var h = ((r = {}).OVERLAY = "overlay", r.RELATIVE = "relative", r);

			function g(e) {
				let {
					className: t,
					variant: n,
					children: r
				} = e, l = i.useMemo(() => "overlay" === n ? d.overlay : d.relative, [n]);
				return (0, a.jsx)("div", {
					className: s()(d.headerBar, l, t),
					children: r
				})
			}
		},
		763433: function(e, t, n) {
			n.d(t, {
				a: () => _,
				r: () => f
			});
			var r, a = n(255367),
				i = n(73800),
				l = n(120356),
				s = n.n(l),
				o = n(442837),
				c = n(481060),
				d = n(410030),
				u = n(984370),
				p = n(822857),
				m = n(594174),
				h = n(744695),
				g = n(296026),
				f = ((r = {}).DEFAULT = "DEFAULT", r.SEARCH = "SEARCH", r);

			function _(e) {
				let {
					selectedTabId: t,
					handleTransition: n,
					tabs: r,
					state: l = "DEFAULT",
					onAvailableWidthChange: f,
					icon: _,
					children: b
				} = e, x = (0, d.ZP)(), v = (0, o.e7)([m.default], () => m.default.getCurrentUser()), C = (null == v ? void 0 : v.isStaff()) || (null == v ? void 0 : v.isStaffPersonal()), {
					enabled: j
				} = (0, p.WX)({
					location: "global_discovery_header_bar"
				});
				return (0, a.jsx)(c.f6W, {
					theme: x,
					children: e => (0, a.jsxs)(u.Z, {
						className: s()(e, g.headerBar),
						innerClassname: j ? g.headerBarInner : void 0,
						toolbar: C ? (0, a.jsx)(i.Fragment, {}) : null,
						children: ["DEFAULT" === l && (0, a.jsxs)(a.Fragment, {
							children: [(0, a.jsx)(_, {
								color: "currentColor",
								size: "md"
							}), (0, a.jsx)(h.Z, {
								tabs: r,
								selectedTab: t,
								onTabSelect: n,
								onAvailableWidthChange: f
							})]
						}), (0, a.jsx)("div", {
							className: s()(g.headerBarContent, {
								[g.headerBarSearchContent]: "SEARCH" === l
							}),
							children: b
						})]
					})
				})
			}
		},
		660384: function(e, t, n) {
			n.d(t, {
				Z: () => a
			});
			var r = n(108542);
			class a {
				handleScroll(e) {
					this.top.set(e.currentTarget.scrollTop)
				}
				get scrollPosition() {
					return this.top
				}
				constructor() {
					var e;
					e = new r.SpringValue(0), "top" in this ? Object.defineProperty(this, "top", {
						value: e,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : this.top = e
				}
			}
		},
		922122: function(e, t, n) {
			n.d(t, {
				Z: () => h
			}), n(388685);
			var r = n(255367),
				a = n(73800),
				i = n(120356),
				l = n.n(i),
				s = n(21260),
				o = n(481060),
				c = n(393903),
				d = n(79707),
				u = n(388032),
				p = n(602791);

			function m(e) {
				let {
					onTabSelect: t,
					tabs: n,
					selectedTab: i
				} = e, s = a.useMemo(() => null != n.find(e => {
					let {
						id: t
					} = e;
					return t === i
				}), [i, n]), [c, m] = a.useState(!1), h = function(e) {
					let {
						selected: t,
						isHovered: n
					} = e;
					return n ? "text-primary" : t ? "text-brand" : "text-default"
				}({
					selected: s,
					isHovered: c
				}), g = function(e) {
					let {
						selected: t,
						isHovered: n
					} = e;
					return n ? o.TVs.colors.TEXT_PRIMARY : t ? o.TVs.colors.TEXT_BRAND : o.TVs.colors.INTERACTIVE_NORMAL
				}({
					selected: s,
					isHovered: c
				}), f = a.useCallback(() => m(!0), []), _ = a.useCallback(() => m(!1), []), b = a.useRef(null);
				return (0, r.jsx)(o.yRy, {
					targetElementRef: b,
					renderPopout: e => {
						let {
							closePopout: a
						} = e;
						return (0, r.jsx)(d.Z, {
							selectedTab: i,
							onClose: a,
							tabs: n,
							onTabSelect: t
						})
					},
					position: "bottom",
					align: "left",
					children: (e, t) => {
						var n, a;
						let {
							isShown: i
						} = t;
						return (0, r.jsx)(o.njP.Item, (n = function(e) {
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
						}({}, e), a = a = {
							id: "more",
							look: "brand",
							selectedItem: s ? "more" : void 0,
							className: l()(p.tab, {
								[p.selected]: !1
							}),
							clickableRef: e => {
								null != e && null != e.ref && (b.current = e.ref)
							},
							"aria-label": u.intl.string(u.t.UKOtz8),
							children: (0, r.jsxs)("div", {
								className: p.more,
								onMouseEnter: f,
								onMouseLeave: _,
								children: [(0, r.jsx)(o.Text, {
									variant: "text-sm/semibold",
									color: h,
									children: u.intl.string(u.t.UKOtz8)
								}), i ? (0, r.jsx)(o.u04, {
									size: "xs",
									color: g
								}) : (0, r.jsx)(o.CJ0, {
									size: "xs",
									color: g
								})]
							})
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var r = Object.getOwnPropertySymbols(e);
								n.push.apply(n, r)
							}
							return n
						})(Object(a)).forEach(function(e) {
							Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
						}), n))
					}
				})
			}

			function h(e) {
				let {
					className: t,
					selectedTab: n,
					tabs: i,
					onTabSelect: d,
					onAvailableWidthChange: u
				} = e, [h, g] = a.useState(0), f = a.useRef(h), {
					lastVisibleIndex: _,
					onItemLayout: b,
					overflowItemsRef: x,
					itemWidthsRef: v
				} = (0, s.zP)({
					items: i,
					itemGapPx: 20,
					maxLines: 1,
					containerWidth: h
				}), C = a.useMemo(() => i.slice(0, _ + 1), [_, i]), j = a.useMemo(() => i.slice(_ + 1), [_, i]), y = a.useRef(null), I = a.useCallback(e => {
					let t = e.contentRect.width;
					if (null == t || f.current === t) return;
					g(t), f.current = t;
					let n = v.current.reduce((e, t, n) => e + t + 20 * (0 !== n));
					null == u || u(t - n)
				}, [v, u]);
				(0, c.s)(y, I);
				let O = 0 !== h;
				return (0, r.jsxs)("div", {
					className: l()(p.container, t),
					ref: y,
					children: [(0, r.jsxs)("div", {
						className: p.measurements,
						children: [i.map((e, t) => (0, r.jsx)(s.AJ, {
							index: t,
							onItemLayout: b,
							children: (0, r.jsx)(o.njP.Item, {
								id: e.id,
								"aria-label": e.label,
								className: p.tab,
								children: (0, r.jsx)(o.Text, {
									variant: "text-md/medium",
									children: e.label
								})
							})
						}, e.id)), (0, r.jsx)("div", {
							ref: x,
							children: (0, r.jsx)(m, {
								tabs: j,
								onTabSelect: d,
								selectedTab: n
							})
						})]
					}), O && (0, r.jsxs)(o.njP, {
						type: "top",
						look: "brand",
						selectedItem: n,
						onItemSelect: d,
						className: p.tabs,
						children: [C.map(e => (0, r.jsx)(o.njP.Item, {
							id: e.id,
							look: "brand",
							"aria-label": e.label,
							className: p.tab,
							children: e.label
						}, e.id)), 0 !== j.length ? (0, r.jsx)(m, {
							tabs: j,
							onTabSelect: d,
							selectedTab: n
						}) : null]
					})]
				})
			}
		},
		79707: function(e, t, n) {
			n.d(t, {
				Z: () => l
			});
			var r = n(255367);
			n(73800);
			var a = n(481060),
				i = n(388032);

			function l(e) {
				let {
					tabs: t,
					selectedTab: n,
					onTabSelect: l,
					onClose: s
				} = e;
				return (0, r.jsx)(a.v2r, {
					navId: "global-discovery-tabs-overflow-menu",
					"aria-label": i.intl.string(i.t.riPnr6),
					hideScroller: !0,
					onClose: s,
					onSelect: s,
					children: (0, r.jsx)(a.kSQ, {
						children: t.map(e => {
							let {
								id: t,
								label: i
							} = e;
							return (0, r.jsx)(a.sNh, {
								id: t,
								label: i,
								icon: t === n ? a.owK : void 0,
								action: () => l(t)
							}, t)
						})
					}, "overflow-tabs")
				})
			}
		},
		744695: function(e, t, n) {
			n.d(t, {
				Z: () => x
			}), n(388685);
			var r = n(255367),
				a = n(73800),
				i = n(120356),
				l = n.n(i),
				s = n(21260),
				o = n(481060),
				c = n(393903),
				d = n(984370),
				u = n(79707),
				p = n(49898),
				m = n(388032),
				h = n(199462);

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

			function _(e) {
				var {
					id: t,
					label: n,
					selected: a,
					handleTransition: i
				} = e, s = function(e, t) {
					if (null == e) return {};
					var n, r, a = function(e, t) {
						if (null == e) return {};
						var n, r, a = {},
							i = Object.keys(e);
						for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
						return a
					}(e, t);
					if (Object.getOwnPropertySymbols) {
						var i = Object.getOwnPropertySymbols(e);
						for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
					}
					return a
				}(e, ["id", "label", "selected", "handleTransition"]);
				return (0, r.jsx)(d.Z.Title, f(g({}, s), {
					onClick: () => i(t),
					wrapperClassName: h.tabWrapper,
					className: l()(h.tab, {
						[h.selected]: a
					}),
					children: n
				}))
			}

			function b(e) {
				let {
					onTabSelect: t,
					tabs: n,
					selectedTab: i,
					selected: s
				} = e, c = a.useRef(null);
				return (0, r.jsx)(o.yRy, {
					targetElementRef: c,
					renderPopout: e => {
						let {
							closePopout: a
						} = e;
						return (0, r.jsx)(u.Z, {
							selectedTab: i,
							onClose: a,
							tabs: n,
							onTabSelect: t
						})
					},
					position: "bottom",
					align: "left",
					children: (e, t) => {
						let {
							isShown: n
						} = t;
						return (0, r.jsxs)(d.Z.Title, f(g({}, e), {
							ref: c,
							wrapperClassName: h.tabWrapper,
							className: l()(h.tab, h.more, {
								[h.selected]: s
							}),
							id: p.GlobalDiscoverySharedTabId.MORE,
							"aria-label": m.intl.string(m.t.UKOtz8),
							children: [m.intl.string(m.t.UKOtz8), n ? (0, r.jsx)(o.u04, {
								size: "xs"
							}) : (0, r.jsx)(o.CJ0, {
								size: "xs"
							})]
						}))
					}
				})
			}

			function x(e) {
				let {
					className: t,
					selectedTab: n,
					tabs: i,
					onTabSelect: o,
					onAvailableWidthChange: d
				} = e, [u, p] = a.useState(0), m = a.useRef(u), {
					lastVisibleIndex: g,
					onItemLayout: f,
					overflowItemsRef: x,
					itemWidthsRef: v
				} = (0, s.zP)({
					items: i,
					itemGapPx: 24,
					maxLines: 1,
					containerWidth: u
				}), C = a.useMemo(() => i.slice(0, g + 1), [g, i]), j = a.useMemo(() => i.slice(g + 1), [g, i]), y = a.useRef(null), I = a.useCallback(e => {
					let t = e.contentRect.width;
					if (null == t || m.current === t) return;
					p(t), m.current = t;
					let n = v.current.reduce((e, t, n) => e + t + 24 * (0 !== n));
					null == d || d(t - n)
				}, [v, d]);
				(0, c.s)(y, I);
				let O = 0 !== u,
					S = j.some(e => e.id === n);
				return (0, r.jsxs)("div", {
					className: l()(h.container, t),
					ref: y,
					children: [(0, r.jsxs)("div", {
						className: h.measurements,
						children: [i.map((e, t) => (0, r.jsx)(s.AJ, {
							index: t,
							onItemLayout: f,
							children: (0, r.jsx)(_, {
								id: e.id,
								label: e.label,
								selected: n === e.id,
								handleTransition: o
							}, e.id)
						}, e.id)), (0, r.jsx)("div", {
							ref: x,
							children: (0, r.jsx)(b, {
								tabs: j,
								onTabSelect: o,
								selectedTab: n,
								selected: S
							})
						})]
					}), O && (0, r.jsxs)("div", {
						className: h.tabs,
						children: [C.map(e => (0, r.jsx)(_, {
							id: e.id,
							label: e.label,
							selected: n === e.id,
							handleTransition: o
						}, e.id)), 0 !== j.length ? (0, r.jsx)(b, {
							tabs: j,
							onTabSelect: o,
							selectedTab: n,
							selected: S
						}) : null]
					})]
				})
			}
		},
		283293: function(e, t, n) {
			n.d(t, {
				Z: () => s
			});
			var r = n(255367),
				a = n(73800),
				i = n(481060),
				l = n(686519);
			let s = a.forwardRef(function(e, t) {
				let {
					onScroll: n,
					children: a
				} = e;
				return (0, r.jsx)(i.Den, {
					onScroll: n,
					className: l.scroller,
					ref: t,
					children: a
				})
			})
		},
		680180: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var r = n(255367),
				a = n(73800),
				i = n(120356),
				l = n.n(i),
				s = n(481060),
				o = n(49898),
				c = n(109188);

			function d(e) {
				let {
					state: t,
					query: n,
					placeholder: i,
					onTextChange: d,
					onCollapsedClick: u,
					onClear: p,
					onBlur: m,
					onSubmit: h
				} = e, g = a.useRef(null), f = a.useCallback(e => {
					"Enter" === e.key && h()
				}, [h]), _ = a.useCallback(() => {
					u(), setTimeout(() => {
						var e;
						return null == (e = g.current) ? void 0 : e.focus()
					})
				}, [u]);
				return t === o.GlobalDiscoverySearchBarState.COLLAPSED ? (0, r.jsx)(s.P3F, {
					className: c.searchIcon,
					onClick: _,
					children: (0, r.jsx)(s._Ve, {
						size: "md",
						color: s.TVs.colors.INTERACTIVE_NORMAL
					})
				}) : (0, r.jsx)(s.E1j, {
					ref: g,
					className: l()(c.searchBar, {
						[c.searchFloating]: t === o.GlobalDiscoverySearchBarState.FLOATING
					}),
					size: s.E1j.Sizes.MEDIUM,
					query: n,
					placeholder: i,
					onChange: d,
					onClear: p,
					onKeyDown: f,
					onBlur: m
				})
			}
		},
		89182: function(e, t, n) {
			n.d(t, {
				PA: () => h,
				ZP: () => g,
				iG: () => m
			});
			var r, a = n(255367),
				i = n(73800),
				l = n(120356),
				s = n.n(l),
				o = n(481060),
				c = n(706454),
				d = n(290646);

			function u(e, t) {
				if (null == e) return {};
				var n, r, a = function(e, t) {
					if (null == e) return {};
					var n, r, a = {},
						i = Object.keys(e);
					for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
					return a
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
				}
				return a
			}

			function p(e) {
				var {
					items: t,
					onClose: n,
					onSelect: r,
					selected: i
				} = e, l = u(e, ["items", "onClose", "onSelect", "selected"]);
				return (0, a.jsx)(o.v2r, {
					className: d.menu,
					navId: "global-discovery-search-filter-options",
					"aria-label": l["aria-label"],
					hideScroller: !0,
					onClose: n,
					onSelect: n,
					children: (0, a.jsx)(o.kSQ, {
						children: t.map(e => {
							let {
								id: t,
								label: n
							} = e;
							return (0, a.jsx)(o.sNh, {
								id: t,
								label: n,
								icon: t === i ? o.owK : void 0,
								action: () => r(t)
							}, t)
						})
					}, "overflow-tabs")
				})
			}

			function m(e) {
				let {
					count: t,
					name: n
				} = e, r = t.toLocaleString(c.default.locale);
				return (0, a.jsxs)("div", {
					className: d.categoryLabel,
					children: [(0, a.jsx)(o.Text, {
						variant: "text-sm/medium",
						color: "header-primary",
						children: n
					}), (0, a.jsx)(o.Text, {
						variant: "text-sm/normal",
						color: "text-muted",
						children: r
					})]
				})
			}
			var h = ((r = {}).FILLED = "FILLED", r.TRANSPARENT = "TRANSPARENT", r);

			function g(e) {
				var {
					items: t,
					title: n,
					onSelect: r,
					selected: l,
					variant: c = "TRANSPARENT"
				} = e, m = u(e, ["items", "title", "onSelect", "selected", "variant"]);
				let h = i.useRef(null),
					g = i.useMemo(() => (function(e) {
						switch (e) {
							case "FILLED":
								return d.filterBackground;
							case "TRANSPARENT":
								return
						}
					})(c), [c]);
				return (0, a.jsx)(o.yRy, {
					targetElementRef: h,
					renderPopout: e => {
						let {
							closePopout: n
						} = e;
						return (0, a.jsx)(p, {
							selected: l,
							onClose: n,
							items: t,
							onSelect: r,
							"aria-label": m["aria-label"]
						})
					},
					position: "bottom",
					align: "left",
					children: (e, t) => {
						var r, i;
						let {
							isShown: l
						} = t;
						return (0, a.jsxs)("div", (r = function(e) {
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
							ref: h,
							className: s()(d.filter, g),
							children: [(0, a.jsx)(o.Text, {
								variant: "text-sm/medium",
								color: "interactive-normal",
								children: n
							}), l ? (0, a.jsx)(o.u04, {
								size: "xs",
								color: o.TVs.colors.INTERACTIVE_NORMAL
							}) : (0, a.jsx)(o.CJ0, {
								size: "xs",
								color: o.TVs.colors.INTERACTIVE_NORMAL
							})]
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var r = Object.getOwnPropertySymbols(e);
								n.push.apply(n, r)
							}
							return n
						})(Object(i)).forEach(function(e) {
							Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
						}), r))
					}
				})
			}
		},
		66637: function(e, t, n) {
			n.d(t, {
				Z: () => c
			});
			var r = n(255367),
				a = n(73800),
				i = n(120356),
				l = n.n(i),
				s = n(481060),
				o = n(66418);
			let c = a.memo(a.forwardRef(function(e, t) {
				let {
					onClick: n,
					onContextMenu: a,
					className: i,
					disabled: c,
					children: d,
					"aria-label": u
				} = e;
				return (0, r.jsx)(s.kL8, {
					ref: t,
					className: l()(o.card, i, {
						[o.clickable]: null != n,
						[o.disabled]: c
					}),
					onContextMenu: a,
					onClick: c ? void 0 : n,
					"aria-label": u,
					children: d
				})
			}))
		},
		31569: function(e, t, n) {
			n.d(t, {
				Z: () => i
			});
			var r = n(972959);
			let a = Object.freeze({
					query: "",
					searchBarState: n(49898).GlobalDiscoverySearchBarState.DEFAULT
				}),
				i = (0, r.H)(() => a)
		},
		493646: function(e, t, n) {
			n.d(t, {
				K: () => l,
				v: () => i
			});
			var r = n(979007),
				a = n(388032);

			function i(e) {
				switch (e.id) {
					case 4:
						return a.intl.string(a.t["3m9EgY"]);
					case 6:
						return a.intl.string(a.t.VJRr3d);
					case 8:
						return a.intl.string(a.t.Uv7mFR);
					case 9:
						return a.intl.string(a.t.TEK9Aw);
					case 10:
						return a.intl.string(a.t.lfBt2d)
				}
				return ""
			}

			function l() {
				return {
					id: r.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID,
					name: a.intl.string(a.t.ijDDw8)
				}
			}
		},
		319443: function(e, t, n) {
			n.r(t), n.d(t, {
				default: () => U
			}), n(388685), n(781311);
			var r = n(255367),
				a = n(73800),
				i = n(120356),
				l = n.n(i),
				s = n(392711),
				o = n(442837),
				c = n(481060),
				d = n(456100),
				u = n(114851),
				p = n(88693),
				m = n(611928),
				h = (n(763433), n(922122)),
				g = n(680180),
				f = n(726115),
				_ = n(703656),
				b = n(314897),
				x = n(594174),
				v = n(626135),
				C = n(471518),
				j = n(31569),
				y = n(370210),
				I = n(678694),
				O = n(216780),
				S = n(881294),
				P = n(975907),
				E = n(119014),
				N = n(258971),
				T = n(133743),
				A = n(726941),
				L = n(666697),
				R = n(548514),
				Z = n(370648),
				w = n(569527),
				D = n(979007),
				k = n(981631),
				M = n(388032),
				G = n(691133);

			function z(e) {
				let {
					applicationId: t,
					hideDetailHeaderButtons: n,
					onClickBack: i
				} = e, s = (0, o.e7)([y.Z], () => y.Z.getApplication(t)), [d, u] = a.useState(n), p = a.useCallback(() => {
					u(n)
				}, [n]);
				return (0, r.jsxs)("div", {
					className: G.detailHeaderContainer,
					children: [(0, r.jsx)("div", {
						className: G.detailHeaderSection,
						children: (0, r.jsx)(m.Cm, {
							icon: c.j9r,
							onClick: i
						})
					}), (0, r.jsx)(c.X6q, {
						variant: "heading-lg/semibold",
						color: "header-primary",
						className: G.detailHeader,
						lineClamp: 1,
						children: null == s ? void 0 : s.name
					}), (0, r.jsx)("div", {
						className: l()(G.detailHeaderSection, G.detailHeaderButtonsContainer, {
							[G.visible]: !n,
							[G.hide]: n && !d,
							[G.hidden]: n && d
						}),
						onTransitionEnd: p,
						children: null != s ? (0, r.jsx)(R.Z, {
							application: s,
							size: "sm"
						}) : null
					})]
				})
			}

			function B() {
				let e = a.useCallback(() => {
						(0, S.qF)()
					}, []),
					t = a.useCallback(() => {
						(0, S.rf)()
					}, []);
				return (0, r.jsxs)(c.qXd, {
					color: c.DM8.BRAND,
					className: G.nagbar,
					children: [(0, r.jsx)(c.gw7, {
						size: "custom",
						color: "white",
						className: G.logo
					}), (0, r.jsx)(c.Text, {
						tag: "span",
						color: "always-white",
						variant: "text-md/normal",
						children: M.intl.string(M.t.Ol3MIi)
					}), (0, r.jsxs)("div", {
						className: G.nagbarActionContainer,
						children: [(0, r.jsx)(c.NoS, {
							onClick: e,
							noticeType: k.kVF.LOGIN,
							children: M.intl.string(M.t["825cFx"])
						}), (0, r.jsx)(c.NoS, {
							onClick: t,
							noticeType: k.kVF.REGISTER,
							minor: !0,
							children: M.intl.string(M.t.HAkXzs)
						})]
					})]
				})
			}
			let U = function() {
				var e;
				let t = (0, o.e7)([b.default], () => !b.default.isAuthenticated()),
					{
						onScroll: n,
						scrollPosition: i,
						resetScrollPosition: y
					} = (0, u.M)(),
					R = (0, N.Xh)(),
					U = (0, S.nu)(),
					F = (null == R ? void 0 : R.type) === N.m_.CATEGORY ? R.categoryId : void 0,
					{
						applicationId: V,
						section: H
					} = (null == R ? void 0 : R.type) === N.m_.APPLICATION ? R : {},
					{
						query: Y,
						categoryId: W
					} = (null == R ? void 0 : R.type) === N.m_.SEARCH ? R : {},
					X = (0, o.e7)([I.Z], () => I.Z.getCategories()),
					K = a.useMemo(() => [(0, O.KQ)(), ...X], [X]),
					q = a.useMemo(() => K.find(e => e.id === Number(W)), [K, W]),
					{
						tabs: Q,
						selectedTab: J,
						onSelectTab: $
					} = (0, E.i)(null == F ? void 0 : F.toString()),
					[ee, et] = a.useState(!0),
					en = N.z8.useField("trackedOpenedFromExternalEntrypoint"),
					er = N.z8.useField("sessionId"),
					ea = (0, o.e7)([x.default], () => x.default.getCurrentUser());
				a.useEffect(() => {
					if (!en && null == er) {
						let e = (0, f.PM)();
						v.default.track(k.rMx.APP_DIRECTORY_OPENED, {
							source: N.xF.EXTERNAL,
							session_id: e,
							user_id: null == ea ? void 0 : ea.id
						}), N.z8.setState({
							trackedOpenedFromExternalEntrypoint: !0,
							sessionId: e,
							entrypoint: {
								name: N.xF.EXTERNAL
							},
							guildId: null
						})
					}
				}, [er, en, null == ea ? void 0 : ea.id]), a.useEffect(() => {
					C.CP()
				}, []), a.useEffect(() => {
					U && C.g5()
				}, [U]), a.useEffect(() => N.aQ.setState({
					lastItem: R
				}), [R]);
				let {
					enabled: ei
				} = d.c.useExperiment({
					location: "GlobalDiscoveryAppsRoot"
				}, {
					autoTrackExposure: !0
				}), el = null != V, es = (null == R ? void 0 : R.type) === N.m_.SEARCH, {
					searchQuery: eo,
					onSearchTextChange: ec,
					onClearSearch: ed,
					onSearchSubmit: eu
				} = (0, P.M)({
					initialQuery: null != Y ? Y : ""
				}), ep = j.Z.useField("searchBarState"), {
					onTabsAvailableWidthChange: em,
					onCollapsedSearchBarClick: eh,
					onSearchBarBlur: eg
				} = (0, p.U)({
					isSearchBarVisible: !0,
					isSearchBarEmpty: "" === eo.trim(),
					searchBarState: ep,
					setSearchBarState: e => j.Z.setState({
						searchBarState: e
					})
				}), ef = a.useCallback(e => {
					$(e), es && ed(), y()
				}, [es, ed, $, y]), e_ = a.useCallback(e => (0, T.ph)({
					applicationId: e
				}), []), eb = el || es, ex = a.useCallback(() => {
					null != (0, N.Uc)() ? (0, _.op)() : (0, T.Yp)()
				}, []), ev = (0, s.debounce)(e => {
					let {
						scrollTop: t,
						offsetHeight: n,
						scrollHeight: r,
						location: a
					} = e;
					t > 0 && (0, S.zZ)(k.rMx.APP_DIRECTORY_PAGE_SCROLLED, {
						scroll_visible_percentile: (t + n) / r,
						current_page: a
					})
				}, 200), eC = a.useCallback((e, t) => {
					n(e), ev({
						scrollTop: e.currentTarget.scrollTop,
						offsetHeight: e.currentTarget.offsetHeight,
						scrollHeight: e.currentTarget.scrollHeight,
						location: t
					})
				}, [ev, n]), ej = ei ? c.iWm : c.jje;
				return (0, r.jsxs)("div", {
					className: l()(G.outerContainer, {
						[G.loggedOutContainer]: t
					}),
					children: [t ? (0, r.jsx)(B, {}) : null, (0, r.jsxs)("div", {
						className: G.innerContainer,
						children: [(0, r.jsxs)(m.ZP, {
							variant: eb ? m._6.RELATIVE : m._6.OVERLAY,
							children: [!eb && (0, r.jsx)(m.z6, {
								scrollPosition: i
							}), el ? (0, r.jsx)(z, {
								applicationId: V,
								hideDetailHeaderButtons: ee,
								onClickBack: ex
							}) : (0, r.jsxs)(r.Fragment, {
								children: [es ? (0, r.jsx)(m.Cm, {
									icon: c.j9r,
									onClick: ex
								}) : (0, r.jsx)(m.aV, {
									icon: ej
								}), es ? (0, r.jsx)(c.X6q, {
									variant: "heading-lg/semibold",
									color: "header-primary",
									className: G.searchHeader,
									children: null != Y && "" !== Y ? M.intl.formatToPlainString(M.t.zHdzqa, {
										query: Y
									}) : M.intl.formatToPlainString(M.t.Qhj5Bg, {
										categoryName: null != (e = null == q ? void 0 : q.name) ? e : M.intl.string(M.t.E407b2)
									})
								}) : (0, r.jsx)(h.Z, {
									tabs: Q,
									selectedTab: J,
									onTabSelect: ef,
									onAvailableWidthChange: em
								}), (0, r.jsx)(g.Z, {
									query: eo,
									placeholder: M.intl.string(M.t["5h0QOD"]),
									onTextChange: ec,
									onClear: ed,
									onSubmit: eu,
									onCollapsedClick: eh,
									state: ep,
									onBlur: eg
								})]
							})]
						}), el ? (0, r.jsx)(L.Z, {
							onScroll: e => eC(e, N.m_.APPLICATION),
							onSelectApplication: e_,
							applicationId: V,
							initialTab: H,
							onButtonsVisibilityChange: et
						}) : es ? (0, r.jsx)(w.Z, {
							onSelectApplication: e_,
							onScroll: e => eC(e, N.m_.SEARCH)
						}) : J === D.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID.toString() ? (0, r.jsx)(Z.Z, {
							onScroll: e => eC(e, N.m_.HOME),
							onSelectApplication: e_
						}) : (0, r.jsx)(A.Z, {
							tabId: Number(J),
							onScroll: e => eC(e, N.m_.CATEGORY),
							onSelectApplication: e_
						})]
					})]
				})
			}
		},
		881294: function(e, t, n) {
			n.d(t, {
				nu: () => p,
				qF: () => h,
				rf: () => m,
				zZ: () => u
			}), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685), n(35282);
			var r = n(860911),
				a = n(442837),
				i = n(703656),
				l = n(314897),
				s = n(594174),
				o = n(626135),
				c = n(258971),
				d = n(981631);

			function u(e, t) {
				var n, r, a;
				let i = c.z8.getField("sessionId"),
					l = c.z8.getField("guildId"),
					d = null == (n = c.z8.getField("entrypoint")) ? void 0 : n.name,
					u = s.default.getCurrentUser(),
					p = (r = function(e) {
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
					}({}, t), a = a = {
						guild_id: l,
						directory_session_id: i,
						source: d,
						user_id: null == u ? void 0 : u.id
					}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
						var n = Object.keys(e);
						if (Object.getOwnPropertySymbols) {
							var r = Object.getOwnPropertySymbols(e);
							n.push.apply(n, r)
						}
						return n
					})(Object(a)).forEach(function(e) {
						Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
					}), r);
				return o.default.track(e, p)
			}

			function p() {
				return (0, a.e7)([l.default], () => l.default.isAuthenticated())
			}

			function m() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = new URL(location.href);
				for (let n in e) {
					let r = e[n];
					t.searchParams.set(n, r)
				}
				let n = t.pathname + t.search,
					a = (0, r.Ui)(n, !1);
				(0, i.uL)(a)
			}

			function h() {
				let e = new URL(location.href),
					t = "?redirect_to=".concat(encodeURIComponent(e.pathname + e.search));
				(0, i.uL)(d.Z5c.REGISTER + t)
			}
		},
		194594: function(e, t, n) {
			n.d(t, {
				Z: () => j,
				x: () => x
			}), n(539854);
			var r, a = n(255367),
				i = n(73800),
				l = n(120356),
				s = n.n(l),
				o = n(442837),
				c = n(477690),
				d = n(481060),
				u = n(686546),
				p = n(706454),
				m = n(768581),
				h = n(624138),
				g = n(388032),
				f = n(581330);

			function _(e) {
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

			function b(e, t) {
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
			var x = ((r = {})[r.SMALL = (0, h.Mg)(c.Z.GUILD_COUNT_SMALL_ICON_SIZE)] = "SMALL", r[r.LARGE = (0, h.Mg)(c.Z.GUILD_COUNT_LARGE_ICON_SIZE)] = "LARGE", r);
			let v = {
					[x.SMALL]: f.moreGuildsSmall,
					[x.LARGE]: f.moreGuildsLarge
				},
				C = {
					[x.SMALL]: f.iconSmall,
					[x.LARGE]: f.iconLarge
				};

			function j(e) {
				var t, n, r;
				let {
					application: l,
					mutualGuilds: c,
					mutualGuildShownMax: h = 4,
					className: j,
					textVariant: y = "text-sm/normal",
					compact: I,
					guildIconSize: O = x.LARGE,
					guildsClassName: S,
					children: P
				} = e, E = (0, o.e7)([p.default], () => p.default.locale), N = new Intl.ListFormat(E), T = null != (n = null == (t = l.directory_entry) ? void 0 : t.guild_count) ? n : 0, A = null != (r = null == c ? void 0 : c.length) ? r : 0, L = Math.max(0, T - A), {
					shownMutualGuilds: R,
					hiddenMutualGuilds: Z
				} = i.useMemo(() => {
					let e = [],
						t = [];
					return null == c || c.forEach(n => {
						e.length < h && null != n.icon ? e.push(n) : t.push(n)
					}), e.length === h && t.length > 0 && (t.push(e[h - 1]), e = e.slice(0, h - 1)), {
						shownMutualGuilds: e,
						hiddenMutualGuilds: t
					}
				}, [c, h]), w = Z.length, D = function(e, t, n, r, a) {
					if (0 === t && 0 === e) return null;
					if (t > 0 && 0 === n) return g.intl.formatToPlainString(g.t.pnzE1t, {
						mutualGuildCount: t
					});
					let i = t > 0 ? g.t.YR8PSE : g.t.GQjq6e,
						l = new Intl.NumberFormat(r, {
							notation: a ? "compact" : "standard",
							compactDisplay: "short"
						});
					return g.intl.formatToPlainString(i, {
						guildCount: l.format(e),
						mutualGuildCount: t,
						nonMutualGuildCount: l.format(n)
					})
				}(T, A, L, E, I);
				return 0 === R.length && null == D ? null : (0, a.jsxs)(a.Fragment, {
					children: [P, (0, a.jsxs)("div", {
						className: s()(j, f.wrapper),
						children: [(0, a.jsx)("div", {
							className: s()(f.icons, S),
							children: R.length > 0 ? (0, a.jsxs)(a.Fragment, {
								children: [R.map((e, t) => {
									let n = t === R.length - 1 && 0 === w,
										r = m.ZP.getGuildIconURL({
											id: e.id,
											icon: e.icon,
											size: O,
											canAnimate: !1
										}),
										l = (0, a.jsx)(d.ua7, {
											text: e.name,
											position: "top",
											children: e => (0, a.jsx)("img", b(_({}, e), {
												className: s()(f.icon, C[O]),
												src: r,
												alt: ""
											}))
										});
									return n ? (0, a.jsx)(i.Fragment, {
										children: l
									}, e.id) : (0, a.jsx)(u.ZP, {
										className: f.iconMask,
										height: O,
										width: O,
										mask: u.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
										children: l
									}, e.id)
								}), w > 0 ? (0, a.jsx)(d.ua7, {
									text: g.intl.formatToPlainString(g.t.m6oRrK, {
										appNames: N.format(Z.map(e => e.name))
									}),
									position: "top",
									children: e => (0, a.jsxs)("div", b(_({}, e), {
										className: s()(f.moreGuilds, v[O]),
										children: ["+", w]
									}))
								}) : null]
							}) : (0, a.jsx)(d.QTo, {
								size: "custom",
								color: "currentColor",
								width: O,
								height: O,
								className: f.defaultIcon
							})
						}), null != D ? (0, a.jsx)(d.Text, {
							variant: y,
							color: "header-secondary",
							children: D
						}) : null]
					})]
				})
			}
		},
		523311: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var r = n(255367);
			n(73800);
			var a = n(120356),
				i = n.n(a),
				l = n(481060),
				s = n(833829);

			function o(e) {
				let {
					loading: t,
					children: n
				} = e;
				return (0, r.jsxs)("div", {
					className: s.container,
					children: [t ? (0, r.jsx)("div", {
						className: s.spinnerContainer,
						children: (0, r.jsx)(l.$jN, {
							className: s.spinner,
							type: l.$jN.Type.SPINNING_CIRCLE
						})
					}) : null, (0, r.jsx)("div", {
						className: i()({
							[s.loading]: t
						}),
						children: n
					})]
				})
			}
		},
		956965: function(e, t, n) {
			n.d(t, {
				Z: () => j
			}), n(388685);
			var r = n(255367),
				a = n(73800),
				i = n(120356),
				l = n.n(i),
				s = n(442837),
				o = n(607070),
				c = n(361213),
				d = n(778569),
				u = n(783097),
				p = n(70097),
				m = n(768581),
				h = n(829409),
				g = n(619980);
			let f = 16 / 9,
				_ = 325 / 72;

			function b(e) {
				let {
					application: t,
					isHovered: n,
					botBannerUrl: i,
					botBannerUrlAnimated: s,
					iconURL: o
				} = e, m = (0, d.Z)({
					applicationId: t.id,
					size: 600,
					names: ["embedded_cover"]
				}), h = a.useMemo(() => {
					let e = (0, u.yJ)(t);
					return null != e && null != e.activity_preview_video_asset_id ? (0, c.Z)(t.id, e.activity_preview_video_asset_id) : null
				}, [t]), {
					imageUrl: f,
					imageUrlAnimated: _
				} = a.useMemo(() => "fetched" === m.state && null != m.url ? {
					imageUrl: m.url
				} : {
					imageUrl: i,
					imageUrlAnimated: s
				}, [m.state, m.url, i, s]), b = null != f, j = null != h;
				return "loading" === m.state ? null : j ? (0, r.jsxs)(r.Fragment, {
					children: [b ? (0, r.jsx)(x, {
						isHovered: n,
						url: f,
						animatedUrl: void 0
					}) : (0, r.jsx)(p.Z, {
						src: h,
						className: l()(g.bannerImage, g.bannerContent),
						muted: !0
					}), (0, r.jsx)(v, {
						isHovered: n,
						url: h,
						isVideo: !0
					})]
				}) : b ? (0, r.jsx)(x, {
					isHovered: n,
					url: f,
					animatedUrl: _
				}) : (0, r.jsx)(C, {
					iconURL: o
				})
			}

			function x(e) {
				let {
					isHovered: t,
					url: n,
					animatedUrl: i
				} = e, [s, o] = a.useState(!1);
				return (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)("img", {
						src: n,
						alt: "",
						className: l()(g.bannerImage, g.bannerContent, {
							[g.loaded]: s
						}),
						onLoad: () => o(!0)
					}), null != i ? (0, r.jsx)(v, {
						isHovered: t,
						url: i,
						isVideo: !1
					}) : null]
				})
			}

			function v(e) {
				let {
					isHovered: t,
					url: n,
					isVideo: i
				} = e, [s, o] = a.useState(!1), [c, d] = a.useState(t);
				return (a.useEffect(() => {
					t && d(!0)
				}, [t]), c) ? (0, r.jsx)("div", {
					className: l()(g.bannerAnimatedContainer, {
						[g.videoFadeOut]: !t,
						[g.videoFadeIn]: t && s
					}),
					onAnimationEnd: () => t ? null : d(!1),
					children: i ? (0, r.jsx)(p.Z, {
						src: n,
						loop: !0,
						autoPlay: !0,
						muted: !0,
						className: g.bannerContent,
						onLoadedData: () => o(!0)
					}) : (0, r.jsx)("img", {
						src: n,
						alt: "",
						className: g.bannerContent,
						onLoad: () => o(!0)
					})
				}) : null
			}

			function C(e) {
				let {
					iconURL: t
				} = e, {
					backgroundGradient: n,
					hasFetchedColors: a
				} = (0, h.u)(t);
				return (0, r.jsx)("div", {
					className: l()(g.bannerContent, g.bannerGradient, {
						[g.loaded]: a
					}),
					style: {
						backgroundImage: n
					}
				})
			}
			let j = function(e) {
				let {
					application: t,
					bannerType: n,
					iconURL: i
				} = e, l = (0, s.e7)([o.Z], () => o.Z.useReducedMotion), [c, d] = a.useState(!1), p = a.useCallback(() => {
					d(!0)
				}, []), h = a.useCallback(() => d(!1), []), v = (0, u.ye)(t), j = t.bot, {
					botBannerUrl: y,
					botBannerUrlAnimated: I
				} = a.useMemo(() => (null == j ? void 0 : j.id) == null || (null == j ? void 0 : j.banner) == null ? {} : {
					botBannerUrl: (0, m.aN)({
						id: j.id,
						banner: j.banner,
						canAnimate: !1,
						size: 600
					}),
					botBannerUrlAnimated: l ? void 0 : (0, m.aN)({
						id: j.id,
						banner: j.banner,
						canAnimate: !0,
						size: 600
					})
				}, [null == j ? void 0 : j.id, null == j ? void 0 : j.banner, l]);
				return (0, r.jsx)("div", {
					className: g.bannerContainer,
					style: {
						aspectRatio: "card" === n ? f : _
					},
					onMouseEnter: p,
					onFocus: p,
					onMouseLeave: h,
					onBlur: h,
					children: "card" === n && v ? (0, r.jsx)(b, {
						application: t,
						isHovered: c,
						botBannerUrl: null == y ? void 0 : y,
						botBannerUrlAnimated: null == I ? void 0 : I
					}) : null != y ? (0, r.jsx)(x, {
						isHovered: c,
						url: y,
						animatedUrl: I
					}) : (0, r.jsx)(C, {
						iconURL: i
					})
				})
			}
		},
		797908: function(e, t, n) {
			n.d(t, {
				Z: () => m
			}), n(388685), n(953529);
			var r = n(255367),
				a = n(73800),
				i = n(622535),
				l = n(481060),
				s = n(783097),
				o = n(66637),
				c = n(768581),
				d = n(956965),
				u = n(388032),
				p = n(275459);
			let m = function(e) {
				var t, n, m;
				let {
					application: h,
					onSelectApplication: g,
					showCategory: f = !1
				} = e, _ = a.useRef(null), b = null == (t = h.categories) ? void 0 : t[0], [x, v] = a.useState(!1), C = a.useCallback(e => {
					e && v(!0)
				}, []), j = (0, s.lf)(h), y = a.useCallback(() => {
					g(h.id)
				}, [g, h.id]), I = a.useMemo(() => x ? c.ZP.getApplicationIconURL({
					id: h.id,
					icon: h.icon,
					size: 48
				}) : void 0, [x, h]), O = f && null != b;
				return (0, r.jsx)(i.$, {
					innerRef: _,
					onChange: C,
					active: !x,
					children: (0, r.jsx)("div", {
						ref: _,
						className: p.container,
						children: (0, r.jsxs)(o.Z, {
							className: p.card,
							onClick: y,
							onContextMenu: () => {},
							"aria-label": u.intl.string(u.t.np1Wrq),
							children: [(0, r.jsxs)("div", {
								className: p.header,
								children: [(0, r.jsx)("div", {
									style: {
										width: "100%",
										display: "block",
										aspectRatio: 16 / 9
									},
									children: x ? (0, r.jsx)(d.Z, {
										application: h,
										bannerType: "card",
										iconURL: I
									}) : null
								}), (0, r.jsx)("div", {
									className: p.avatarContainer,
									style: {
										height: 28
									},
									children: x ? (0, r.jsx)("img", {
										src: I,
										alt: "",
										className: p.avatar,
										height: 48,
										width: 48,
										style: {
											borderWidth: 4,
											marginLeft: 12
										}
									}) : null
								})]
							}), (0, r.jsxs)("div", {
								className: p.appDetails,
								children: [(0, r.jsx)("div", {
									className: p.titleContainer,
									children: (0, r.jsx)("div", {
										className: p.title,
										children: (0, r.jsx)(l.X6q, {
											variant: "heading-md/semibold",
											color: "header-primary",
											className: p.appName,
											children: h.name
										})
									})
								}), O || j ? (0, r.jsxs)("div", {
									className: p.infoContainer,
									children: [O ? (0, r.jsx)(l.Text, {
										className: p.appCategory,
										variant: "text-xs/medium",
										color: "text-default",
										children: b.name
									}) : null, O && j ? (0, r.jsx)(l.Text, {
										variant: "text-xs/medium",
										color: "text-secondary",
										children: "•"
									}) : null, j ? (0, r.jsx)(l.Text, {
										variant: "text-xs/medium",
										color: "text-secondary",
										children: u.intl.string(u.t["/eVltr"])
									}) : null]
								}) : null, (0, r.jsx)(l.Text, {
									className: p.description,
									variant: "text-sm/medium",
									color: "header-secondary",
									lineClamp: O || j ? 2 : 3,
									children: null != (m = null == (n = h.directory_entry) ? void 0 : n.short_description) ? m : h.description
								})]
							})]
						})
					})
				})
			}
		},
		292191: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var r = n(255367);
			n(73800);
			var a = n(120356),
				i = n.n(a),
				l = n(481060),
				s = n(388032),
				o = n(166596),
				c = n(516450);

			function d(e) {
				let {
					heading: t = s.intl.string(s.t.NGw8v7),
					body: n = s.intl.string(s.t["1XZRY2"]),
					className: a
				} = e;
				return (0, r.jsxs)("div", {
					className: i()(o.container, a),
					children: [(0, r.jsx)("div", {
						className: o.imageContainer,
						children: (0, r.jsx)("img", {
							className: o.image,
							src: c,
							alt: s.intl.string(s.t["/UJaIy"])
						})
					}), (0, r.jsx)(l.X6q, {
						variant: "heading-xl/semibold",
						className: o.header,
						children: t
					}), (0, r.jsx)(l.Text, {
						variant: "text-md/normal",
						color: "header-secondary",
						children: n
					})]
				})
			}
		},
		975907: function(e, t, n) {
			n.d(t, {
				M: () => d
			});
			var r = n(73800),
				a = n(31569),
				i = n(493646),
				l = n(881294),
				s = n(258971),
				o = n(133743),
				c = n(981631);

			function d(e) {
				let {
					initialQuery: t = ""
				} = e, n = a.Z.useField("query");
				r.useEffect(() => a.Z.setState({
					query: t
				}), [t]);
				let d = r.useCallback(e => {
						a.Z.setState({
							query: e
						})
					}, []),
					u = r.useCallback(() => {
						a.Z.setState({
							query: ""
						})
					}, []),
					p = r.useCallback(() => {
						let e = (0, i.K)();
						(0, l.zZ)(c.rMx.APP_DIRECTORY_SEARCH_STARTED, {
							search_term: n,
							category: e.name,
							current_page: s.m_.HOME,
							category_id: e.id
						}), (0, o.pR)({
							query: n
						})
					}, [n]);
				return {
					searchQuery: n,
					onSearchTextChange: d,
					onClearSearch: u,
					onSearchSubmit: p
				}
			}
		},
		119014: function(e, t, n) {
			n.d(t, {
				i: () => u
			}), n(388685);
			var r = n(73800),
				a = n(442837),
				i = n(493646),
				l = n(678694),
				s = n(881294),
				o = n(258971),
				c = n(133743),
				d = n(981631);

			function u(e) {
				let t = (0, a.e7)([l.Z], () => l.Z.getCategories()),
					n = (0, i.K)(),
					u = r.useMemo(() => [{
						id: n.id.toString(),
						label: n.name
					}, ...t.map(e => ({
						id: e.id.toString(),
						label: e.name
					}))], [t, n]),
					p = (0, o.Xh)(),
					m = r.useCallback(e => {
						let t = u.find(t => t.id === e);
						null != t && ((0, s.zZ)(d.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
							category: t.label,
							category_id: Number(t.id),
							current_page: null == p ? void 0 : p.type
						}), (0, c.O4)({
							categoryId: e
						}))
					}, [null == p ? void 0 : p.type, u]),
					h = null != e && u.some(t => t.id === e) ? e : u[0].id;
				return {
					tabs: u,
					selectedTab: h,
					onSelectTab: m
				}
			}
		},
		829409: function(e, t, n) {
			n.d(t, {
				u: () => a
			}), n(388685);
			var r = n(220082);

			function a(e) {
				let [t, n, a] = (0, r.Cf)(e, "transparent"), i = (0, r.Dq)(e);
				return {
					backgroundGradient: "linear-gradient(45deg, ".concat(t, ", ").concat(null != a ? a : n, ")"),
					hasFetchedColors: i
				}
			}
		},
		133743: function(e, t, n) {
			n.d(t, {
				Gp: () => u,
				O4: () => o,
				Yp: () => s,
				pR: () => d,
				ph: () => c
			}), n(65234), n(111804), n(490233), n(97749), n(388685);
			var r = n(703656),
				a = n(216780),
				i = n(258971),
				l = n(981631);
			let s = () => {
					let e = {
						previousView: (0, i.Xh)()
					};
					(0, r.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS, {
						state: e
					})
				},
				o = e => {
					let {
						categoryId: t
					} = e, n = {
						previousView: (0, i.Xh)()
					};
					(0, r.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(t), {
						state: n
					})
				},
				c = e => {
					let {
						applicationId: t
					} = e, n = {
						previousView: (0, i.Xh)()
					};
					(0, r.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t), {
						state: n
					})
				},
				d = function() {
					let {
						query: e,
						categoryId: t,
						page: n
					} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, s = {
						previousView: (0, i.Xh)()
					}, o = new URLSearchParams;
					null != e && "" !== e && o.set("q", e), null != t && t !== a.MU && o.set("category_id", t.toString()), null != n && n > 1 && o.set("page", n.toString()), (0, r.uL)(l.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, {
						state: s,
						search: o.toString()
					})
				},
				u = e => {
					let {
						location: {
							state: t
						}
					} = (0, r.s1)();
					(0, r.dL)(e, t)
				}
		},
		359993: function(e, t, n) {
			n.d(t, {
				Z: () => o
			}), n(539854), n(388685);
			var r = n(73800),
				a = n(442837),
				i = n(38618),
				l = n(430824),
				s = n(204298);

			function o(e) {
				let {
					application: t,
					showMutualGuilds: n = !0
				} = e, o = (0, a.e7)([s.Z], () => s.Z.getGuildIdsForApplication(null == t ? void 0 : t.id), [t]), c = (0, a.e7)([i.Z], () => i.Z.isConnected());
				return r.useMemo(() => {
					let e = [];
					if (!c || !n || null == o || null == t) return e;
					for (let t of o) {
						let n = l.Z.getGuild(t);
						null != n && e.push(n)
					}
					return e
				}, [c, o, t, n])
			}
		},
		726941: function(e, t, n) {
			n.d(t, {
				Z: () => g
			});
			var r = n(255367),
				a = n(73800),
				i = n(442837),
				l = n(322665),
				s = n(17845),
				o = n(374939),
				c = n(283293),
				d = n(493646),
				u = n(678694),
				p = n(292191),
				m = n(683544),
				h = n(34871);
			let g = function(e) {
				var t;
				let {
					tabId: n,
					onSelectApplication: g,
					onScroll: f
				} = e, _ = a.useRef(null), b = a.useCallback(() => {
					var e;
					null == (e = _.current) || e.scrollTo({
						to: 0
					})
				}, []), x = (0, i.e7)([u.Z], () => u.Z.getCategories()), v = a.useMemo(() => x.find(e => e.id === n), [x, n]), C = a.useMemo(() => null != v ? (0, d.v)(v) : "", [v]);
				return (0, r.jsxs)(c.Z, {
					onScroll: f,
					ref: _,
					children: [(0, r.jsx)(s.Z, {
						title: null != (t = null == v ? void 0 : v.name) ? t : "",
						description: C,
						children: (0, r.jsx)(l.Z, {})
					}), (0, r.jsx)(o.Z, {
						children: null == v ? (0, r.jsx)("div", {
							className: h.errorContainer,
							children: (0, r.jsx)(p.Z, {
								className: h.error
							})
						}) : (0, r.jsx)(m.Z, {
							categoryId: v.id,
							onSelectApplication: g,
							resetScroll: b
						})
					})]
				})
			}
		},
		683544: function(e, t, n) {
			n.d(t, {
				Z: () => C
			}), n(388685), n(35282);
			var r = n(255367),
				a = n(73800),
				i = n(209173),
				l = n(399606),
				s = n(481060),
				o = n(699682),
				c = n(471518),
				d = n(425986),
				u = n(177653),
				p = n(881294),
				m = n(523311),
				h = n(797908),
				g = n(292191),
				f = n(258971),
				_ = n(979007),
				b = n(981631),
				x = n(175457);
			let v = {
					results: [],
					totalPages: 0,
					loadId: ""
				},
				C = function(e) {
					var t;
					let {
						categoryId: n,
						onSelectApplication: C,
						resetScroll: j
					} = e, [y, I] = a.useState(1), O = a.useCallback(e => {
						I(e)
					}, []);
					a.useEffect(() => {
						I(1)
					}, [n]);
					let S = a.useMemo(() => ({
							query: _.EMPTY_QUERY,
							page: y,
							pageSize: _.PAGE_SIZE,
							categoryId: n
						}), [y, n]),
						P = (0, l.e7)([u.Z], () => u.Z.getFetchState({
							query: _.EMPTY_QUERY,
							page: y,
							pageSize: _.PAGE_SIZE,
							categoryId: n
						})),
						E = (0, l.cj)([u.Z], () => {
							var e;
							return null != (e = u.Z.getSearchResults(S)) ? e : v
						}),
						N = null != (t = (0, o.Z)(E)) ? t : v,
						{
							results: T,
							totalPages: A,
							loadId: L
						} = a.useMemo(() => P === d.M.FETCHING ? N : E, [P, N, E]),
						R = a.useMemo(() => null == T ? void 0 : T.filter(e => e.type === i.s.APPLICATION), [T]),
						Z = a.useCallback(e => {
							let {
								page: t,
								activeCategoryId: n,
								onSuccessCallback: r,
								guildId: a,
								fetchCounts: i
							} = e;
							i && c.yC({
								query: _.EMPTY_QUERY,
								guildId: a
							}), c.yC({
								query: _.EMPTY_QUERY,
								guildId: a,
								options: {
									page: t,
									pageSize: _.PAGE_SIZE,
									categoryId: n
								},
								onSuccessCallback: r
							})
						}, []);
					a.useEffect(() => {
						j(), Z({
							page: y,
							activeCategoryId: n,
							onSuccessCallback: () => {}
						})
					}, [n, j, Z, y]);
					let w = a.useCallback((e, t) => {
						(0, p.zZ)(b.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
							current_page: f.m_.SEARCH,
							application_id: e,
							load_id: L,
							position: t
						}), C(e)
					}, [L, C]);
					return P === d.M.ERROR ? (0, r.jsx)("div", {
						className: x.errorContainer,
						children: (0, r.jsx)(g.Z, {
							className: x.error
						})
					}) : (0, r.jsxs)(m.Z, {
						loading: P === d.M.FETCHING,
						children: [(0, r.jsx)("div", {
							className: x.content,
							children: null == R ? void 0 : R.map((e, t) => {
								if (e.type === i.s.APPLICATION) {
									let n = e.data;
									return (0, r.jsx)(h.Z, {
										application: n,
										onSelectApplication: e => w(e, t)
									}, n.id)
								}
								return null
							})
						}), (0, r.jsx)(s.DsT, {
							className: x.paginationInput,
							totalCount: Math.min(A * _.PAGE_SIZE, _.MAX_PAGES * _.PAGE_SIZE),
							pageSize: _.PAGE_SIZE,
							disablePaginationGap: !0,
							hideMaxPage: !0,
							currentPage: y,
							onPageChange: O
						})]
					})
				}
		},
		666697: function(e, t, n) {
			n.d(t, {
				Z: () => P
			}), n(65234), n(111804), n(490233), n(97749), n(388685), n(35282);
			var r = n(255367),
				a = n(73800),
				i = n(442837),
				l = n(283836),
				s = n(374939),
				o = n(233374),
				c = n(283293),
				d = n(471518),
				u = n(370210),
				p = n(255333),
				m = n(881294),
				h = n(523311),
				g = n(292191),
				f = n(258971),
				_ = n(133743),
				b = n(680474),
				x = n(571737),
				v = n(796150),
				C = n(946542),
				j = n(213746),
				y = n(979007),
				I = n(981631),
				O = n(388032),
				S = n(714002);
			let P = function(e) {
				let {
					applicationId: t,
					onSelectApplication: n,
					onScroll: P,
					initialTab: E,
					onButtonsVisibilityChange: N
				} = e, T = a.useRef(null), A = (0, i.e7)([u.Z], () => u.Z.getApplication(t)), L = (0, i.e7)([u.Z], () => u.Z.getApplicationFetchState(t));
				a.useEffect(() => {
					if (null != t && null == A) {
						let e = "true" === new URLSearchParams(location.search).get("preview") || void 0;
						d.i6(t, {
							noCache: e
						})
					}
				}, [t, A]), a.useEffect(() => {
					d.T4({
						applicationId: t
					})
				}, [t]), a.useEffect(() => () => N(!0), [N]);
				let R = null == A ? void 0 : A.storefront_available,
					[Z, w] = a.useState(null != E ? E : y.GlobalDiscoveryAppsSections.ABOUT),
					D = a.useCallback(e => {
						var t;
						null == (t = T.current) || t.scrollTo({
							to: 0
						}), w(y.GlobalDiscoveryAppsSections.ABOUT), n(e)
					}, [n]);
				a.useEffect(() => {
					(null == A ? void 0 : A.storefront_available) && null != t && (0, l.Z)(t)
				}, [null == A ? void 0 : A.storefront_available, t]);
				let k = (0, f.Uc)(),
					M = (0, i.e7)([p.Z], () => p.Z.getFetchState({
						applicationId: null == A ? void 0 : A.id
					})),
					G = (0, i.e7)([p.Z], () => p.Z.getSimilarApplications({
						applicationId: null == A ? void 0 : A.id
					})),
					z = a.useMemo(() => null == G ? void 0 : G.applications.slice(0, 3), [G]),
					B = {
						displayedSimilarApplications: z,
						previousView: k
					},
					U = a.useRef(B);
				a.useEffect(() => {
					U.current = B
				}), a.useEffect(() => {
					let {
						displayedSimilarApplications: e,
						previousView: t
					} = U.current;
					(null == A ? void 0 : A.id) != null && M !== p.M.FETCHING && (0, m.zZ)(I.rMx.APP_DIRECTORY_PAGE_VIEWED, {
						current_page: f.m_.APPLICATION,
						previous_page: null == t ? void 0 : t.type,
						application_id: A.id,
						referrer: document.referrer,
						suggested_application_ids: null == e ? void 0 : e.map(e => e.id)
					})
				}, [null == A ? void 0 : A.id, M]);
				let F = a.useMemo(() => [{
						id: y.GlobalDiscoveryAppsSections.ABOUT,
						label: O.intl.string(O.t.DkyHMD)
					}, {
						id: y.GlobalDiscoveryAppsSections.STORE,
						label: O.intl.string(O.t.jgEXGB)
					}], []),
					V = a.useMemo(() => {
						if (null == A) return null;
						switch (Z) {
							case y.GlobalDiscoveryAppsSections.ABOUT:
								return (0, r.jsx)(b.Z, {
									application: A
								});
							case y.GlobalDiscoveryAppsSections.STORE:
								return (0, r.jsx)(j.Z, {
									application: A
								})
						}
					}, [Z, A]),
					H = a.useCallback(e => {
						(0, m.zZ)(I.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
							application_id: t,
							tab_name: e
						}), w(e), e === y.GlobalDiscoveryAppsSections.ABOUT ? (0, _.Gp)(I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t)) : (0, _.Gp)(I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, e))
					}, [t]),
					Y = Z === y.GlobalDiscoveryAppsSections.ABOUT;
				return (0, r.jsx)(c.Z, {
					onScroll: P,
					ref: T,
					children: (0, r.jsx)(s.Z, {
						children: null == A ? null == L || L === u.M.FETCHING ? (0, r.jsx)("div", {
							className: S.centerContainer,
							children: (0, r.jsx)(h.Z, {
								loading: !0
							})
						}) : (0, r.jsx)("div", {
							className: S.centerContainer,
							children: (0, r.jsx)(g.Z, {
								className: S.error
							})
						}) : (0, r.jsxs)("div", {
							className: S.detailContainer,
							children: [(0, r.jsx)(x.Z, {
								application: A,
								onButtonsVisibilityChange: N
							}), (0, r.jsxs)("div", {
								className: S.contentContainer,
								children: [(0, r.jsxs)("div", {
									className: S.contentTabsContainer,
									children: [R && (0, r.jsx)("div", {
										className: S.contentTabs,
										children: (0, r.jsx)(o.Z, {
											tabs: F,
											onTabSelect: H,
											selectedTab: Z
										})
									}), V, (0, r.jsx)(C.Z, {
										applicationId: t,
										fetchState: M,
										similarApplications: z,
										onSelectApplication: D,
										similarLoadId: null == G ? void 0 : G.loadId
									})]
								}), Y && (0, r.jsx)(v.Z, {
									className: S.sidebar,
									application: A,
									view: "side"
								})]
							})]
						})
					})
				})
			}
		},
		680474: function(e, t, n) {
			n.d(t, {
				Z: () => f
			});
			var r = n(255367),
				a = n(73800),
				i = n(793030),
				l = n(823379),
				s = n(216780),
				o = n(560893),
				c = n(405411),
				d = n(215453),
				u = n(796150),
				p = n(24746),
				m = n(669401),
				h = n(388032),
				g = n(348666);

			function f(e) {
				let {
					application: t
				} = e, n = a.useMemo(() => {
					var e, n, r;
					return null != (r = (null != (n = null == (e = t.directory_entry) ? void 0 : e.carousel_items) ? n : []).map(s.RF).filter(l.lm)) ? r : []
				}, [t]);
				return (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsxs)("div", {
						className: g.aboutContainer,
						children: [(0, r.jsx)(o.Z, {
							application: t,
							carouselItems: n
						}), (0, r.jsx)(p.Z, {
							application: t
						}), (0, r.jsx)(c.Z, {
							application: t
						}), (0, r.jsx)(m.Z, {
							application: t
						}), (0, r.jsx)(d.Z, {
							application: t
						})]
					}), (0, r.jsxs)("div", {
						className: g.informationContainer,
						children: [(0, r.jsx)("div", {
							className: g.divider
						}), (0, r.jsx)(i.X6, {
							variant: "heading-lg/semibold",
							color: "header-primary",
							children: h.intl.string(h.t["mD+J/v"])
						}), (0, r.jsx)(u.Z, {
							application: t,
							view: "embedded"
						})]
					})]
				})
			}
		},
		548514: function(e, t, n) {
			n.d(t, {
				Z: () => M
			}), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(35282);
			var r = n(255367),
				a = n(73800),
				i = n(120356),
				l = n.n(i),
				s = n(873546),
				o = n(442837),
				c = n(755721),
				d = n(481060),
				u = n(782568),
				p = n(317381),
				m = n(197386),
				h = n(906732),
				g = n(279332),
				f = n(915346),
				_ = n(783097),
				b = n(433534),
				x = n(299206),
				v = n(276022),
				C = n(703656),
				j = n(706454),
				y = n(594174),
				I = n(626135),
				O = n(572004),
				S = n(135431),
				P = n(881294),
				E = n(258971),
				N = n(98449),
				T = n(981631),
				A = n(388032),
				L = n(284944);
			let R = "start_application_install",
				Z = "launch_activity";

			function w(e) {
				let {
					renderDropdown: t,
					size: n
				} = e, i = a.useRef(null);
				return (0, r.jsx)(d.yRy, {
					targetElementRef: i,
					renderPopout: e => {
						let {
							closePopout: n
						} = e;
						return t(n)
					},
					position: "left",
					align: "top",
					animation: d.yRy.Animation.NONE,
					children: e => {
						var t, a;
						return (0, r.jsx)(c.zx, (t = function(e) {
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
							buttonRef: i,
							look: c.zx.Looks.FILLED,
							size: c.zx.Sizes.ICON,
							color: c.zx.Colors.PRIMARY,
							className: l()(L.iconButton, {
								[L.small]: "sm" === n
							}),
							innerClassName: L.innerIconButton,
							"aria-label": A.intl.string(A.t.UKOtz8)
						}, e), a = a = {
							children: (0, r.jsx)(d.xhG, {
								size: "xs",
								color: "currentColor"
							})
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
							var n = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var r = Object.getOwnPropertySymbols(e);
								n.push.apply(n, r)
							}
							return n
						})(Object(a)).forEach(function(e) {
							Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
						}), t))
					}
				})
			}

			function D(e) {
				let {
					application: t,
					variant: n,
					size: i,
					color: o
				} = e, {
					onClickInstallApplication: u,
					canInstall: p
				} = function(e) {
					let t = (0, P.nu)(),
						n = a.useCallback(() => {
							var t;
							let n = null != (t = E.z8.getField("guildId")) ? t : void 0;
							(0, S.L)({
								applicationId: e.id,
								customInstallUrl: e.custom_install_url,
								installParams: e.install_params,
								integrationTypesConfig: e.integration_types_config,
								guildId: n,
								source: "product_page"
							})
						}, [e]);
					return a.useEffect(() => {
						let e = new URL(location.href);
						if (t && "true" === e.searchParams.get(R)) {
							e.searchParams.delete(R);
							let t = e.pathname + e.search;
							(0, C.dL)(t), n()
						}
					}, [t, n]), {
						onClickInstallApplication: a.useCallback(() => {
							if ((0, P.zZ)(T.rMx.APP_DIRECTORY_INSTALL_CLICKED, {
									application_id: e.id
								}), (s.tq || s.Em) && null == e.custom_install_url) {
								let t = (0, S.E)({
									applicationId: e.id,
									customInstallUrl: e.custom_install_url,
									installParams: e.install_params,
									integrationTypesConfig: e.integration_types_config
								});
								if (null != t) return void window.open(t, "_blank")
							}
							if (t) n();
							else {
								let t = E.z8.getField("guildId");
								I.default.track(T.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
									application_id: e.id,
									guild_id: t,
									auth_type: null != e.custom_install_url ? "custom_url" : "in_app",
									source: "product_page",
									device_platform: s.tq ? "mobile_web" : "desktop_web"
								}), (0, P.rf)({
									[R]: "true"
								})
							}
						}, [e, n, t]),
						canInstall: a.useMemo(() => (0, b.Eb)({
							customInstallUrl: e.custom_install_url,
							installParams: e.install_params,
							integrationTypesConfig: e.integration_types_config
						}), [e])
					}
				}(t);
				return "icon" === n ? (0, r.jsx)(c.zx, {
					look: c.zx.Looks.FILLED,
					size: c.zx.Sizes.ICON,
					color: o,
					className: l()(L.iconButton, {
						[L.small]: "sm" === i
					}),
					onClick: u,
					"aria-label": A.intl.string(A.t.NgXl3N),
					innerClassName: L.innerIconButton,
					disabled: !p,
					children: (0, r.jsx)(d.svS, {
						size: "xs",
						color: "currentColor"
					})
				}) : (0, r.jsx)(c.zx, {
					size: "sm" === i ? c.zx.Sizes.SMALL : c.zx.Sizes.MEDIUM,
					color: o,
					onClick: u,
					disabled: !p,
					children: "small" === n ? A.intl.string(A.t.qRZ35u) : A.intl.string(A.t.NgXl3N)
				})
			}

			function k(e) {
				let {
					variant: t,
					size: n,
					onClick: a,
					isSubmitting: i
				} = e;
				return "icon" === t ? (0, r.jsx)(c.zx, {
					look: c.zx.Looks.FILLED,
					size: c.zx.Sizes.ICON,
					color: c.zx.Colors.BRAND,
					className: l()(L.iconButton, {
						[L.small]: "sm" === n
					}),
					innerClassName: L.innerIconButton,
					onClick: a,
					submitting: i,
					"aria-label": A.intl.string(A.t.QO7rOz),
					children: (0, r.jsx)(d.o1U, {
						size: "xs",
						color: "currentColor"
					})
				}) : (0, r.jsx)(d.zxk, {
					variant: "primary",
					text: A.intl.string(A.t.QO7rOz),
					onClick: a,
					loading: i
				})
			}
			let M = a.forwardRef(function(e, t) {
				let {
					application: n,
					size: i
				} = e, s = g.J.useExperiment({
					location: "UserSettingsAuthedApps"
				}, {
					autoTrackExposure: !0
				}).enabled, b = e => "".concat(location.protocol, "//").concat(location.host).concat(T.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(e)), {
					analyticsLocations: I
				} = (0, h.ZP)(), S = a.useCallback(() => {
					(0, P.zZ)(T.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, {
						application_id: n.id
					}), (0, O.JG)(b(n.id), () => (0, d.showToast)((0, d.createToast)(A.intl.string(A.t["L/PwZW"]), d.ToastType.SUCCESS)))
				}, [n.id]), E = (0, o.e7)([j.default], () => j.default.locale), R = a.useCallback(() => {
					(0, u.Z)((0, N.G)({
						id: n.id,
						name: n.name,
						locale: E
					}))
				}, [E, n]), M = (0, x.Z)({
					id: n.id,
					label: A.intl.string(A.t["FfCL+/"]),
					onSuccess: () => (0, d.showToast)((0, d.createToast)(A.intl.string(A.t.eNjAam), d.ToastType.SUCCESS))
				}), G = (0, v.Z)({
					application: n,
					onItemClick: () => {
						(0, P.zZ)(T.rMx.APP_DIRECTORY_APPLICATION_LINK_COPIED, {
							application_id: n.id
						})
					}
				}), z = a.useCallback((e, t) => (0, r.jsxs)(d.v2r, {
					navId: "application-directory-profile",
					"aria-label": A.intl.string(A.t["/7I4/P"]),
					onClose: t,
					onSelect: void 0,
					children: [s && (0, r.jsx)(d.kSQ, {
						children: G
					}), e ? (0, r.jsx)(d.kSQ, {
						children: (0, r.jsx)(d.sNh, {
							id: "copy",
							label: A.intl.string(A.t.z4sP5O),
							action: S,
							icon: d.xPt
						})
					}) : null, (0, r.jsx)(d.kSQ, {
						children: (0, r.jsx)(d.sNh, {
							id: "report",
							label: A.intl.string(A.t.NgA5vr),
							color: "danger",
							action: R
						})
					}), null != M ? (0, r.jsx)(d.kSQ, {
						children: M
					}) : null]
				}), [M, R, S, s, G]), {
					onClickLaunchActivity: B,
					isSubmitting: U
				} = function(e, t) {
					var n;
					let r = e.id,
						i = null == e || null == (n = e.bot) ? void 0 : n.id,
						l = null != i && (0, _.BQ)(e) && (0, _.ye)(e),
						[s, c] = a.useState(!1),
						d = (0, P.nu)(),
						u = (0, o.e7)([y.default], () => y.default.getCurrentUser()),
						h = (0, o.e7)([p.ZP], () => p.ZP.getCurrentEmbeddedActivity()),
						g = a.useCallback(async (t, n, r) => {
							if (null != h && h.applicationId === e.id) {
								let e = h.location;
								(0, m.Z)("guild_id" in e ? e.guild_id : null, e);
								return
							}
							c(!0);
							try {
								await (0, f.W)({
									appId: n,
									botId: t,
									analyticsLocations: r
								})
							} catch (e) {}
							c(!1)
						}, [h, e.id]);
					a.useEffect(() => {
						let e = new URL(location.href),
							n = "true" === e.searchParams.get(Z);
						if (d && l && n && null != i && null != u) {
							e.searchParams.delete(Z);
							let n = e.pathname + e.search;
							(0, C.dL)(n), g(i, r, t)
						}
					}, [d, l, i, r, t, u, g]);
					let b = a.useCallback(async () => {
						if (null != i) {
							if ((0, P.zZ)(T.rMx.APP_DIRECTORY_LAUNCH_CLICKED, {
									application_id: r
								}), !d) return void(0, P.rf)({
								[Z]: "true"
							});
							await g(i, r, t)
						}
					}, [i, r, t, d, g]);
					return {
						onClickLaunchActivity: l ? b : void 0,
						isSubmitting: s
					}
				}(n, I), F = null != B, V = F ? c.zx.Colors.PRIMARY : c.zx.Colors.BRAND;
				return (0, r.jsxs)("div", {
					ref: t,
					children: [(0, r.jsxs)("div", {
						className: l()(L.actionContainer, L.wide),
						children: [F && (0, r.jsx)(k, {
							variant: "normal",
							size: i,
							onClick: B,
							isSubmitting: U
						}), (0, r.jsx)(D, {
							application: n,
							variant: "normal",
							size: i,
							color: V
						}), O.wS ? (0, r.jsx)(c.zx, {
							look: c.zx.Looks.FILLED,
							size: c.zx.Sizes.ICON,
							color: c.zx.Colors.PRIMARY,
							className: l()(L.iconButton, {
								[L.small]: "sm" === i
							}),
							innerClassName: L.innerIconButton,
							"aria-label": A.intl.string(A.t.z4sP5O),
							onClick: S,
							children: (0, r.jsx)(d.xPt, {
								size: "xs",
								color: "currentColor"
							})
						}) : null, (0, r.jsx)(w, {
							renderDropdown: e => z(!1, e),
							size: i
						})]
					}), (0, r.jsxs)("div", {
						className: l()(L.actionContainer, L.small),
						children: [F && (0, r.jsx)(k, {
							variant: "normal",
							size: i,
							onClick: B,
							isSubmitting: U
						}), (0, r.jsx)(D, {
							application: n,
							variant: "small",
							size: i,
							color: V
						}), (0, r.jsx)(w, {
							renderDropdown: e => z(O.wS, e),
							size: i
						})]
					}), (0, r.jsxs)("div", {
						className: l()(L.actionContainer, L.tiny),
						children: [F && (0, r.jsx)(k, {
							variant: "icon",
							size: i,
							onClick: B,
							isSubmitting: U
						}), (0, r.jsx)(D, {
							application: n,
							variant: "icon",
							size: i,
							color: V
						}), (0, r.jsx)(w, {
							renderDropdown: e => z(O.wS, e),
							size: i
						})]
					})]
				})
			})
		},
		560893: function(e, t, n) {
			n.d(t, {
				Z: () => g
			});
			var r = n(255367),
				a = n(73800),
				i = n(793030),
				l = n(442837),
				s = n(445986),
				o = n(9807),
				c = n(312097),
				d = n(451478),
				u = n(981631),
				p = n(388032),
				m = n(260516),
				h = n(516450);

			function g(e) {
				let {
					application: t,
					carouselItems: n
				} = e, g = (0, l.e7)([d.Z], () => d.Z.isFocused()), f = (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)("img", {
						className: m.errorImage,
						src: h,
						"aria-hidden": !0,
						alt: ""
					}), (0, r.jsx)(i.X6, {
						variant: "heading-xl/semibold",
						children: p.intl.string(p.t.UvDfMz)
					})]
				});
				n.forEach((e, r) => {
					e.alt = p.intl.formatToPlainString(p.t.sSEhHR, {
						index: r + 1,
						totalImages: n.length,
						name: t.name
					})
				});
				let _ = a.useCallback((e, t) => {
					if (e.type === u.s9s.IMG) {
						let t = n.filter(e => e.type === u.s9s.IMG),
							r = t.findIndex(t => t === e);
						if (r < 0) return;
						let a = t.map(e => ({
							url: (0, s.Q)(e.src),
							original: e.src,
							width: e.width,
							height: e.height,
							type: "IMAGE"
						}));
						(0, c.K)({
							items: a,
							startingIndex: r,
							shouldHideMediaOptions: !0,
							location: "GlobalDiscoveryAppsDetailCarousel"
						})
					}
				}, [n]);
				return 0 === n.length ? null : (0, r.jsx)(o.Z, {
					className: m.carousel,
					themedPagination: !0,
					items: n,
					autoplayInterval: 8e3,
					paused: !g,
					videoAutoPlay: !0,
					onCurrentItemClick: _,
					errorComponent: f
				})
			}
		},
		424472: function(e, t, n) {
			n.d(t, {
				Z: () => p
			});
			var r = n(255367),
				a = n(73800),
				i = n(481060),
				l = n(881294),
				s = n(258971),
				o = n(133743),
				c = n(981631),
				d = n(388032),
				u = n(462057);

			function p(e) {
				let {
					application: t,
					className: n
				} = e, p = a.useCallback(e => {
					(0, l.zZ)(c.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
						category: e.name,
						category_id: e.id,
						current_page: s.m_.APPLICATION
					}), (0, o.pR)({
						categoryId: e.id
					})
				}, []);
				return null == t.categories || 0 === t.categories.length ? null : (0, r.jsxs)("div", {
					className: n,
					children: [(0, r.jsx)(i.X6q, {
						variant: "heading-sm/semibold",
						color: "header-primary",
						children: d.intl.string(d.t.s7ialZ)
					}), (0, r.jsx)("div", {
						className: u.categories,
						children: t.categories.map(e => (0, r.jsx)(i.P3F, {
							className: u.category,
							onClick: () => p(e),
							children: (0, r.jsx)(i.Text, {
								variant: "text-sm/semibold",
								color: "redesign-button-tertiary-text",
								children: e.name
							})
						}, e.id))
					})]
				})
			}
		},
		405411: function(e, t, n) {
			n.d(t, {
				Z: () => d
			});
			var r = n(255367),
				a = n(73800),
				i = n(481060),
				l = n(581364),
				s = n(761652),
				o = n(388032),
				c = n(744939);

			function d(e) {
				let {
					application: t
				} = e, n = a.useMemo(() => {
					var e;
					let n = null == (e = t.directory_entry) ? void 0 : e.popular_application_commands;
					return null != n ? n.map(e => (0, l.Z8)({
						rootCommand: e,
						command: e,
						applicationId: e.application_id
					})) : []
				}, [t]);
				return 0 === n.length ? null : (0, r.jsxs)("div", {
					className: c.sectionContainer,
					children: [(0, r.jsx)(i.X6q, {
						variant: "heading-lg/semibold",
						color: "header-primary",
						children: o.intl.string(o.t.swIgTE)
					}), (0, r.jsx)("div", {
						className: c.contentContainer,
						children: n.map(e => (0, r.jsxs)("div", {
							className: c.commandContainer,
							children: [(0, r.jsxs)(i.Text, {
								className: c.commandName,
								variant: "code",
								color: "header-primary",
								children: [s.GI, e.displayName]
							}), (0, r.jsx)(i.Text, {
								variant: "text-md/normal",
								color: "text-default",
								children: e.displayDescription
							})]
						}, e.id))
					})]
				})
			}
		},
		215453: function(e, t, n) {
			n.d(t, {
				Z: () => m
			}), n(997841);
			var r = n(255367),
				a = n(73800),
				i = n(481060),
				l = n(860719),
				s = n(63063),
				o = n(49012),
				c = n(981631),
				d = n(388032),
				u = n(924902);
			let p = s.Z.getArticleURL(c.BhN.BOT_DATA_ACCESS);

			function m(e) {
				let {
					application: t
				} = e, {
					hasMessageContent: n,
					hasGuildPresences: s,
					hasGuildMembers: c,
					hasIntents: m
				} = (0, l.w)({
					flags: null == t ? void 0 : t.flags
				}), g = a.useCallback(() => {
					null != t.privacy_policy_url && (0, o.q)({
						href: t.privacy_policy_url
					})
				}, [t.privacy_policy_url]);
				return (0, r.jsxs)("div", {
					className: u.sectionContainer,
					children: [(0, r.jsx)(i.X6q, {
						variant: "heading-lg/semibold",
						color: "header-primary",
						children: d.intl.string(d.t.QzDgMj)
					}), (0, r.jsxs)("div", {
						className: u.contentContainer,
						children: [m && (0, r.jsxs)("ul", {
							className: u.intentsList,
							children: [(0, r.jsx)(i.X6q, {
								variant: "heading-md/semibold",
								color: "header-secondary",
								children: d.intl.string(d.t.U6KH5e)
							}), n && (0, r.jsx)(h, {
								icon: i.kBi,
								heading: d.intl.string(d.t.gJpBOz),
								body: d.intl.string(d.t["L+QVbm"])
							}), s && (0, r.jsx)(h, {
								icon: i.z65,
								heading: d.intl.string(d.t.jo0oj4),
								body: d.intl.string(d.t.Dm0jq6)
							}), c && (0, r.jsx)(h, {
								icon: i.BFJ,
								heading: d.intl.string(d.t.QZql7O),
								body: d.intl.string(d.t["ez/N/f"])
							})]
						}), (0, r.jsx)(i.Text, {
							variant: "text-md/normal",
							color: "header-secondary",
							children: d.intl.format(d.t.b6nqk5, {
								helpCenterUrl: p
							})
						}), null != t.privacy_policy_url && (0, r.jsx)(i.Text, {
							variant: "text-md/normal",
							color: "header-secondary",
							className: u.privacyPolicy,
							children: d.intl.format(d.t.agYVY2, {
								onClick: g
							})
						})]
					})]
				})
			}

			function h(e) {
				let {
					icon: t,
					heading: n,
					body: a
				} = e;
				return (0, r.jsxs)("li", {
					className: u.intentContainer,
					children: [(0, r.jsx)(t, {
						color: "currentColor",
						size: "md"
					}), (0, r.jsxs)("div", {
						className: u.intentTextContainer,
						children: [(0, r.jsx)(i.X6q, {
							variant: "heading-md/semibold",
							color: "header-secondary",
							children: n
						}), (0, r.jsx)(i.Text, {
							variant: "text-md/normal",
							color: "header-secondary",
							children: a
						})]
					})]
				})
			}
		},
		571737: function(e, t, n) {
			n.d(t, {
				Z: () => m
			}), n(539854);
			var r = n(255367),
				a = n(73800),
				i = n(622535),
				l = n(481060),
				s = n(783097),
				o = n(768581),
				c = n(956965),
				d = n(548514),
				u = n(388032),
				p = n(393023);
			let m = function(e) {
				let {
					application: t,
					onButtonsVisibilityChange: n
				} = e, m = a.useRef(null), h = a.useMemo(() => o.ZP.getApplicationIconURL({
					id: t.id,
					icon: t.icon,
					size: 96
				}), [t]), g = a.useMemo(() => {
					let e = [];
					return (0, s.vJ)(t) && e.push(u.intl.string(u.t.LO4f0N)), (0, s.Cb)(t) && (0 !== e.length && e.push("•"), e.push(u.intl.string(u.t["8z5B2d"]))), (0, s.Hu)(t) && (0 !== e.length && e.push("•"), e.push(u.intl.string(u.t["5khEk5"]))), e
				}, [t]);
				return (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)(c.Z, {
						application: t,
						bannerType: "detail",
						iconURL: h
					}), (0, r.jsx)("div", {
						className: p.avatarContainer,
						style: {
							height: 52
						},
						children: (0, r.jsx)("img", {
							src: h,
							alt: "",
							className: p.avatar,
							height: 96,
							width: 96,
							style: {
								borderWidth: 4,
								marginLeft: 28
							}
						})
					}), (0, r.jsxs)("div", {
						className: p.infoContainer,
						children: [(0, r.jsxs)("div", {
							className: p.metadataContainer,
							children: [(0, r.jsx)(l.X6q, {
								variant: "heading-xxl/bold",
								color: "header-primary",
								lineClamp: 1,
								children: t.name
							}), (0, r.jsx)("div", {
								className: p.disclosuresContainer,
								children: g.map((e, t) => (0, r.jsx)(l.Text, {
									className: p.disclosuresText,
									variant: "text-xs/normal",
									color: "text-muted",
									children: e
								}, t))
							})]
						}), (0, r.jsx)(i.$, {
							innerRef: m,
							onChange: n,
							active: !0,
							children: (0, r.jsx)(d.Z, {
								ref: m,
								application: t,
								size: "md"
							})
						})]
					})]
				})
			}
		},
		796150: function(e, t, n) {
			n.d(t, {
				Z: () => g
			});
			var r = n(255367);
			n(73800);
			var a = n(120356),
				i = n.n(a),
				l = n(793030),
				s = n(194594),
				o = n(359993),
				c = n(424472),
				d = n(682807),
				u = n(691703),
				p = n(953989),
				m = n(388032),
				h = n(553094);

			function g(e) {
				let {
					className: t,
					view: n,
					application: a
				} = e, g = "embedded" === n, f = (0, o.Z)({
					application: a
				});
				return (0, r.jsxs)("div", {
					className: i()(t, {
						[h.sideContainer]: !g,
						[h.gridContainer]: g
					}),
					children: [(0, r.jsxs)("div", {
						className: i()(h.sectionContainer, {
							[h.reducedGap]: g
						}),
						children: [(0, r.jsx)("div", {
							className: h.infoSection,
							children: (0, r.jsx)(s.Z, {
								application: a,
								mutualGuilds: f,
								mutualGuildShownMax: 3,
								className: h.guildCountContainer,
								guildIconSize: s.x.SMALL,
								guildsClassName: h.guildsIconContainer,
								compact: !0,
								children: (0, r.jsx)(l.X6, {
									variant: "heading-sm/semibold",
									color: "header-primary",
									children: m.intl.string(m.t["3NxHCw"])
								})
							})
						}), (0, r.jsx)(c.Z, {
							application: a,
							className: h.infoSection
						}), (0, r.jsx)(p.Z, {
							application: a,
							className: h.infoSection
						})]
					}), (0, r.jsxs)("div", {
						className: i()(h.sectionContainer, {
							[h.reducedGap]: g
						}),
						children: [(0, r.jsx)(d.Z, {
							application: a,
							className: h.infoSection,
							innerClassName: g ? h.linkGrid : void 0
						}), (0, r.jsx)(u.Z, {
							application: a,
							className: h.infoSection
						})]
					})]
				})
			}
		},
		682807: function(e, t, n) {
			n.d(t, {
				Z: () => h
			});
			var r = n(255367);
			n(73800);
			var a = n(120356),
				i = n.n(a),
				l = n(780384),
				s = n(481060),
				o = n(794295),
				c = n(410030),
				d = n(726542),
				u = n(881294),
				p = n(388032),
				m = n(845958);

			function h(e) {
				var t, n;
				let {
					application: a,
					className: l,
					innerClassName: o
				} = e, c = null != (n = null == (t = a.directory_entry) ? void 0 : t.external_urls) ? n : [];
				return null != a.terms_of_service_url || null != a.privacy_policy_url || c.length > 0 ? (0, r.jsxs)("div", {
					className: i()(m.container, l),
					children: [(0, r.jsx)(s.X6q, {
						variant: "heading-sm/semibold",
						color: "header-primary",
						children: p.intl.string(p.t.l6DP2t)
					}), (0, r.jsxs)("div", {
						className: i()(m.list, o),
						children: [c.map((e, t) => (0, r.jsx)(g, {
							url: e.url,
							children: e.name
						}, t)), null != a.terms_of_service_url ? (0, r.jsx)(f, {
							icon: s.aAW,
							url: a.terms_of_service_url,
							children: p.intl.string(p.t.s7STcX)
						}) : null, null != a.privacy_policy_url ? (0, r.jsx)(f, {
							icon: s.mBM,
							url: a.privacy_policy_url,
							children: p.intl.string(p.t.kH3JR0)
						}) : null]
					})]
				}) : null
			}

			function g(e) {
				var t, n;
				let {
					url: a,
					children: i
				} = e, o = (0, c.ZP)(), u = d.Z.getByUrl(a), p = (0, l.wj)(o) ? null == u || null == (t = u.icon) ? void 0 : t.darkSVG : null == u || null == (n = u.icon) ? void 0 : n.lightSVG;
				return (0, r.jsx)(f, {
					icon: void 0 === p ? s.xPt : void 0,
					imageSrc: p,
					url: a,
					children: i
				})
			}

			function f(e) {
				let {
					icon: t,
					imageSrc: n,
					iconColor: a,
					url: l,
					children: c
				} = e, d = (0, u.nu)(), p = null;
				null != t ? p = (0, r.jsx)(t, {
					className: m.listIcon,
					color: null != a ? a : "currentColor",
					width: 20,
					height: 20,
					size: "custom"
				}) : null != n && (p = (0, r.jsx)("img", {
					className: m.listImage,
					src: n,
					alt: ""
				}));
				let h = (0, r.jsxs)(r.Fragment, {
					children: [p, (0, r.jsx)(s.Text, {
						className: m.listText,
						variant: "text-sm/medium",
						selectable: !0,
						children: c
					})]
				});
				return (0, r.jsx)(o.Z, {
					href: l,
					className: i()(m.listItem, m.linkItem),
					trusted: !d,
					useDefaultUnderlineStyles: !1,
					children: h
				})
			}
		},
		24746: function(e, t, n) {
			n.d(t, {
				Z: () => b
			}), n(953529), n(388685);
			var r = n(255367),
				a = n(73800),
				i = n(120356),
				l = n.n(i),
				s = n(159635),
				o = n.n(s),
				c = n(481060),
				d = n(241209),
				u = n(547563),
				p = n(388032),
				m = n(582735);
			let h = o().parserFor(u.Z),
				g = o().reactFor(o().ruleOutput(u.Z, "react"));

			function f(e) {
				let {
					description: t,
					supportsMarkdown: n
				} = e, [i, s] = a.useState(!1), o = a.useRef(null);
				a.useEffect(() => {
					if (null == o.current) return;
					let e = new ResizeObserver(() => {
						var e, t, n, r;
						s((null != (n = null == (e = o.current) ? void 0 : e.scrollHeight) ? n : 0) - (null != (r = null == (t = o.current) ? void 0 : t.clientHeight) ? r : 0) > 1)
					});
					return e.observe(o.current), () => e.disconnect()
				}, []);
				let [u, p] = a.useState(!1), f = a.useCallback(() => {
					p(e => !e)
				}, []);
				return (0, r.jsxs)(r.Fragment, {
					children: [(0, r.jsx)("div", {
						ref: o,
						className: l()({
							[m.descriptionClamp]: !u,
							[m.descriptionClampSafari]: !u && "Safari" === platform.name
						}),
						children: n ? (0, r.jsx)(d.Z, {
							className: m.detailedDescription,
							parser: h,
							output: g,
							state: {
								allowLinks: !0
							},
							children: t
						}) : (0, r.jsx)(c.Text, {
							variant: "text-md/normal",
							color: "text-default",
							children: t
						})
					}), i || u ? (0, r.jsx)(_, {
						isShowingMore: u,
						onToggle: f
					}) : null]
				})
			}

			function _(e) {
				let {
					onToggle: t,
					isShowingMore: n
				} = e, i = a.useMemo(() => (0, r.jsxs)("div", {
					className: m.showMoreContent,
					children: [(0, r.jsx)(c.Text, {
						variant: "text-md/semibold",
						color: "interactive-normal",
						children: n ? p.intl.string(p.t["vtfc4+"]) : p.intl.string(p.t.ZDRyur)
					}), n ? (0, r.jsx)(c.u04, {
						size: "md",
						color: "currentColor",
						className: m.showMoreButtonIcon
					}) : (0, r.jsx)(c.CJ0, {
						size: "md",
						color: "currentColor",
						className: m.showMoreButtonIcon
					})]
				}), [n]);
				return (0, r.jsxs)(c.P3F, {
					className: m.showMoreButton,
					onClick: t,
					children: [(0, r.jsx)("div", {
						className: m.divider
					}), i, (0, r.jsx)("div", {
						className: m.divider
					})]
				})
			}
			let b = function(e) {
				var t, n;
				let {
					application: i
				} = e, l = null == (t = i.directory_entry) ? void 0 : t.detailed_description, s = null == (n = i.directory_entry) ? void 0 : n.short_description, o = a.useMemo(() => null != l && l.length > 0 ? (0, r.jsx)(f, {
					description: l,
					supportsMarkdown: !0
				}) : null != s && s.length > 0 ? (0, r.jsx)(f, {
					description: s,
					supportsMarkdown: !1
				}) : null, [l, s]);
				return null == o ? null : (0, r.jsxs)("div", {
					className: m.overviewContainer,
					children: [(0, r.jsx)(c.X6q, {
						variant: "heading-lg/semibold",
						color: "header-primary",
						children: p.intl.string(p.t.txraKS)
					}), o]
				})
			}
		},
		669401: function(e, t, n) {
			n.d(t, {
				Z: () => u
			});
			var r = n(255367),
				a = n(73800),
				i = n(149765),
				l = n(481060),
				s = n(995648),
				o = n(422559),
				c = n(388032),
				d = n(859708);
			let u = function(e) {
				var t;
				let {
					application: n
				} = e, u = a.useMemo(() => {
					var e;
					let t = null == n || null == (e = n.install_params) ? void 0 : e.permissions;
					if (null != t) return o.VY.filter(e => i.e$(i.vB(t), e))
				}, [null == n || null == (t = n.install_params) ? void 0 : t.permissions]);
				return null != u && u.length > 0 ? (0, r.jsxs)("div", {
					className: d.sectionContainer,
					children: [(0, r.jsx)(l.X6q, {
						variant: "heading-lg/semibold",
						color: "header-primary",
						children: c.intl.string(c.t.runNFx)
					}), (0, r.jsx)(s.Z, {
						className: d.contentContainer,
						grantedPermissions: u,
						grantedPermissionsHeader: c.intl.string(c.t.SLgiND)
					})]
				}) : null
			}
		},
		946542: function(e, t, n) {
			n.d(t, {
				Z: () => b
			}), n(953529), n(388685);
			var r = n(255367),
				a = n(73800),
				i = n(481060),
				l = n(434650),
				s = n(768581),
				o = n(255333),
				c = n(881294),
				d = n(194594),
				u = n(523311),
				p = n(359993),
				m = n(981631),
				h = n(388032),
				g = n(886141);

			function f(e) {
				let {
					applicationId: t,
					similarApplications: n,
					onSelectApplication: i,
					similarLoadId: s
				} = e, o = function(e) {
					let {
						applicationId: t,
						similarAppIds: n
					} = e, [r, i] = a.useState(), s = (0, l.O)(e => {
						e && i(t)
					});
					return a.useEffect(() => {
						r === t && (0, c.zZ)(m.rMx.APP_DIRECTORY_RECOMMENDATIONS_VIEWED, {
							application_id: t,
							suggested_application_ids: n
						})
					}, [r, t, n]), s
				}({
					applicationId: t,
					similarAppIds: a.useMemo(() => n.map(e => e.id), [n])
				});
				return (0, r.jsx)("div", {
					className: g.contentContainer,
					ref: o,
					children: n.map((e, n) => (0, r.jsx)(_, {
						applicationId: t,
						similarApplication: e,
						onSelectApplication: i,
						similarLoadId: s,
						position: n
					}, e.id))
				})
			}

			function _(e) {
				var t, n, l;
				let {
					applicationId: o,
					similarApplication: u,
					onSelectApplication: h,
					position: f,
					similarLoadId: _
				} = e, b = (0, p.Z)({
					application: u
				}), x = null == (t = u.categories) ? void 0 : t[0], v = a.useMemo(() => s.ZP.getApplicationIconURL({
					id: u.id,
					icon: u.icon,
					size: 48
				}), [u]), C = a.useCallback(() => {
					(0, c.zZ)(m.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
						current_page: "product",
						application_id: o,
						suggested_application_id: u.id,
						position: f,
						load_id: _,
						shown_mutual_guilds_count: b.length
					}), h(u.id)
				}, [h, u.id, o, b.length, _, f]);
				return (0, r.jsxs)(i.P3F, {
					onClick: C,
					className: g.appContainer,
					children: [(0, r.jsxs)("div", {
						className: g.appHeader,
						children: [(0, r.jsx)("img", {
							src: v,
							alt: "",
							className: g.avatar,
							height: 48,
							width: 48
						}), (0, r.jsxs)("div", {
							className: g.titleContainer,
							children: [(0, r.jsx)("div", {
								style: {
									flex: 1,
									minWidth: 0,
									overflow: "hidden"
								},
								children: (0, r.jsx)(i.X6q, {
									variant: "heading-md/semibold",
									color: "header-primary",
									className: g.appName,
									children: u.name
								})
							}), null != x ? (0, r.jsx)(i.Text, {
								className: g.appCategory,
								variant: "text-xs/medium",
								color: "text-muted",
								children: x.name
							}) : null]
						})]
					}), (0, r.jsx)(i.Text, {
						className: g.appDescription,
						variant: "text-sm/medium",
						color: "header-secondary",
						lineClamp: 2,
						children: null != (l = null == (n = u.directory_entry) ? void 0 : n.short_description) ? l : u.description
					}), (0, r.jsx)(d.Z, {
						application: u,
						textVariant: "text-xs/medium",
						mutualGuilds: b,
						mutualGuildShownMax: 3,
						guildIconSize: d.x.SMALL,
						compact: !0
					})]
				})
			}
			let b = function(e) {
				let {
					applicationId: t,
					fetchState: n,
					similarApplications: a,
					onSelectApplication: l,
					similarLoadId: s
				} = e;
				return n !== o.M.FETCHING && (null == a || 0 === a.length) ? null : (0, r.jsxs)("div", {
					className: g.sectionContainer,
					children: [(0, r.jsx)("div", {
						className: g.divider
					}), (0, r.jsx)(i.X6q, {
						variant: "heading-sm/semibold",
						color: "header-primary",
						className: g.sectionHeader,
						children: h.intl.string(h.t.E8wCnp)
					}), (0, r.jsx)(u.Z, {
						loading: n === o.M.FETCHING,
						children: null != a ? (0, r.jsx)(f, {
							applicationId: t,
							similarApplications: a,
							onSelectApplication: l,
							similarLoadId: s
						}) : null
					})]
				})
			}
		},
		213746: function(e, t, n) {
			n.d(t, {
				Z: () => j
			}), n(35282), n(997841);
			var r = n(255367),
				a = n(73800),
				i = n(793030),
				l = n(442837),
				s = n(481060),
				o = n(794295),
				c = n(765717),
				d = n(283836),
				u = n(507608),
				p = n(955335),
				m = n(171246),
				h = n(55563),
				g = n(881294),
				f = n(133743),
				_ = n(979007),
				b = n(981631),
				x = n(388032),
				v = n(789362);

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

			function j(e) {
				let {
					application: t
				} = e;
				return (0, r.jsxs)("div", {
					className: v.storeContainer,
					children: [(0, r.jsx)(y, {
						application: t
					}), (0, r.jsx)(O, {
						application: t
					})]
				})
			}

			function y(e) {
				let {
					application: t
				} = e, {
					subscriptions: n,
					otps: a
				} = (0, d.q)(t.id);
				return (0, r.jsxs)("div", {
					className: v.storeContainer,
					children: [n.length > 0 && (0, r.jsxs)("div", {
						className: v.productSection,
						children: [(0, r.jsx)(p.r, {
							subscriptions: n,
							color: "header-primary"
						}), (0, r.jsx)("div", {
							className: v.products,
							children: n.map(e => {
								let n = (0, m.KW)(e.skuFlags) ? "user" : "guild";
								return (0, r.jsx)(u.zz, {
									appId: t.id,
									listing: e,
									subscriptionType: n,
									onDetails: () => (0, f.Gp)(b.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId))
								}, e.id)
							})
						})]
					}), a.length > 0 && (0, r.jsxs)("div", {
						className: v.productSection,
						children: [(0, r.jsx)(i.X6, {
							variant: "heading-lg/semibold",
							color: "header-primary",
							children: x.intl.string(x.t.yUGTs7)
						}), (0, r.jsx)("div", {
							className: v.products,
							children: a.map(e => (0, r.jsx)(u.hd, {
								skuId: e.skuId,
								appId: t.id,
								onDetails: () => (0, f.Gp)(b.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(t.id, e.skuId))
							}, e.id))
						})]
					}), (0, r.jsx)(c.Z, {
						path: b.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId"),
						exact: !0,
						render: e => (0, r.jsx)(I, C({}, e))
					})]
				})
			}

			function I(e) {
				let {
					match: {
						params: {
							applicationId: t,
							skuId: i
						}
					}
				} = e, o = (0, l.e7)([h.Z], () => h.Z.get(i), [i]), c = (0, l.e7)([h.Z], () => null != i ? h.Z.getParentSKU(i) : void 0, [i]), d = a.useId(), u = a.useCallback(() => (0, f.Gp)(b.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, _.GlobalDiscoveryAppsSections.STORE)), [t]);
				return a.useLayoutEffect(() => {
					var e;
					switch (null == o ? void 0 : o.type) {
						case b.epS.CONSUMABLE:
						case b.epS.DURABLE:
							return void(0, s.ZDy)(async () => {
								let {
									ItemDetailsModal: e
								} = await Promise.resolve().then(n.bind(n, 147496));
								return n => (0, r.jsx)(e, C({
									appId: t,
									skuId: i
								}, n))
							}, {
								modalKey: d,
								onCloseCallback: () => {
									S() || (0, f.Gp)(b.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, _.GlobalDiscoveryAppsSections.STORE))
								}
							});
						case b.epS.SUBSCRIPTION:
							if ((null == c ? void 0 : c.flags) == null) return;
							return e = (0, m.KW)(c.flags) ? "user" : "guild", void(0, s.ZDy)(async () => {
								let {
									SubscriptionDetailsModal: a
								} = await Promise.resolve().then(n.bind(n, 519896));
								return n => (0, r.jsx)(a, C({
									appId: t,
									subscriptionType: e,
									skuId: i,
									guildId: void 0
								}, n))
							}, {
								modalKey: d,
								onCloseCallback: () => {
									S() || (0, f.Gp)(b.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, _.GlobalDiscoveryAppsSections.STORE))
								}
							})
					}
				}, [t, d, u, null == c ? void 0 : c.flags, null == o ? void 0 : o.flags, null == o ? void 0 : o.type, i]), a.useLayoutEffect(() => () => {
					(0, s.Mr3)(d)
				}, [d]), null
			}

			function O(e) {
				let {
					application: t
				} = e, n = (0, g.nu)(), a = t.terms_of_service_url, l = t.privacy_policy_url;
				if (null == a && null == l) return null;
				let s = (e, t) => (0, r.jsx)(o.Z, {
					href: t,
					trusted: !n,
					children: e
				});
				return (0, r.jsx)("div", {
					className: v.legalContainer,
					children: (0, r.jsx)(i.xv, {
						color: "header-primary",
						variant: "text-sm/normal",
						children: null != a && null != l ? x.intl.format(x.t.nylPOT, {
							termsHook: e => s(e, a),
							privacyHook: e => s(e, l)
						}) : null != a ? x.intl.format(x.t["0cPyDw"], {
							termsHook: e => s(e, a)
						}) : null != l ? x.intl.format(x.t.loYGCw, {
							privacyHook: e => s(e, l)
						}) : null
					})
				})
			}

			function S() {
				return window.location.pathname.startsWith("/login")
			}
		},
		691703: function(e, t, n) {
			n.d(t, {
				Z: () => g
			}), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685), n(35282);
			var r = n(255367),
				a = n(73800),
				i = n(442837),
				l = n(481060),
				s = n(703656),
				o = n(314897),
				c = n(900849),
				d = n(881294),
				u = n(949507),
				p = n(981631),
				m = n(388032);
			let h = "redirect_to_support_server";

			function g(e) {
				let {
					application: t,
					className: n
				} = e, {
					onGoToSupportServer: g
				} = function(e) {
					let t = (0, d.nu)(),
						n = (0, i.e7)([o.default], () => o.default.getSessionId()),
						r = a.useCallback(async () => {
							try {
								var t;
								let n = null == e || null == (t = e.guild) ? void 0 : t.id;
								if (null != n) {
									(0, d.zZ)(p.rMx.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
										application_id: e.id,
										support_guild_id: n
									});
									let t = {
										page: p.ZY5.APPLICATION_DIRECTORY
									};
									await (0, c.Ub)(n, t)
								}
							} catch (e) {}
						}, [e]);
					return a.useEffect(() => {
						let a = new URL(location.href);
						if (null != e && t && null != n && "true" === a.searchParams.get(h)) {
							a.searchParams.delete(h);
							let e = a.pathname + a.search;
							(0, s.dL)(e), r()
						}
					}, [t, r, n, e]), {
						onGoToSupportServer: a.useCallback(() => {
							var n;
							null != (null == e || null == (n = e.guild) ? void 0 : n.id) && (t ? r() : (0, d.rf)({
								[h]: "true"
							}))
						}, [e, r, t])
					}
				}(t);
				return null != t.guild && t.guild.features.includes(p.oNc.DISCOVERABLE) ? (0, r.jsxs)("div", {
					className: n,
					children: [(0, r.jsx)(l.X6q, {
						variant: "heading-sm/semibold",
						color: "header-primary",
						children: m.intl.string(m.t.KJEO29)
					}), (0, r.jsx)(u.Z, {
						guild: t.guild,
						onClick: g
					})]
				}) : null
			}
		},
		953989: function(e, t, n) {
			n.d(t, {
				Z: () => m
			}), n(388685), n(642613);
			var r = n(255367),
				a = n(73800),
				i = n(120356),
				l = n.n(i),
				s = n(442837),
				o = n(481060),
				c = n(706454),
				d = n(388032),
				u = n(335025);
			let p = (0, d.getAvailableLocales)();

			function m(e) {
				let {
					application: t,
					className: n
				} = e, i = (0, s.e7)([c.default], () => c.default.locale), {
					supportedLanguages: m,
					usersLanguageIsFirst: h
				} = a.useMemo(() => {
					var e;
					if ((null == (e = t.directory_entry) ? void 0 : e.supported_locales) != null) {
						let e = new Set(t.directory_entry.supported_locales),
							n = e.has(i),
							r = p.filter(t => e.has(t.value));
						return n && r.sort((e, t) => e.value === i ? -1 : +(t.value === i)), {
							supportedLanguages: r.map(e => d.intl.string(e.localizedName)),
							usersLanguageIsFirst: n
						}
					}
					return {
						supportedLanguages: [],
						usersLanguageIsFirst: !1
					}
				}, [t.directory_entry, i]);
				return (0, r.jsxs)("div", {
					className: n,
					children: [(0, r.jsx)(o.X6q, {
						variant: "heading-sm/semibold",
						color: "header-primary",
						children: d.intl.string(d.t.Fbjlu7)
					}), (0, r.jsx)("ul", {
						className: u.outerContainer,
						children: m.map((e, t) => (0, r.jsx)("li", {
							className: l()(u.innerContainer, u.languageItem),
							children: (0, r.jsx)(o.Text, {
								variant: 0 === t && h ? "text-sm/bold" : "text-sm/normal",
								children: e
							})
						}, e))
					}), " "]
				})
			}
		},
		98449: function(e, t, n) {
			n.d(t, {
				G: () => a
			}), n(65234), n(111804), n(490233), n(97749), n(388685);
			var r = n(981631);
			let a = e => {
				let {
					id: t,
					name: n,
					locale: a
				} = e, i = "https://".concat(r.xr4, "/hc/").concat(a.toLowerCase(), "/requests/new"), l = new URLSearchParams;
				return l.append("tf_12275088515223", "field_value_dc_category_report_an_app_bot"), l.append("tf_12276208289431", "field_value_dc_reported_action_app_directory"), l.append("tf_12094971213335", t), l.append("ticket_form_id", "12275528604823"), l.append("tf_subject", "App Directory Report ".concat(n, " ").concat(t)), "".concat(i, "?").concat(l.toString())
			}
		},
		949507: function(e, t, n) {
			n.d(t, {
				Z: () => x
			}), n(953529);
			var r = n(255367);
			n(73800);
			var a = n(120356),
				i = n.n(a),
				l = n(481060),
				s = n(410030),
				o = n(686546),
				c = n(565138),
				d = n(372769),
				u = n(134432),
				p = n(768581),
				m = n(411198),
				h = n(981631),
				g = n(388032),
				f = n(754726),
				_ = n(129512),
				b = n(330065);

			function x(e) {
				let {
					guild: t,
					className: n,
					onClick: a
				} = e, x = (0, s.ZP)(), v = (0, m.Jh)({
					name: t.name,
					icon: t.icon
				}), C = p.ZP.getGuildDiscoverySplashURL({
					id: t.id,
					splash: t.discovery_splash,
					size: 192 * (0, u.x_)()
				}), j = null != C ? C : function(e) {
					switch (e) {
						case h.BRd.DARK:
							return _;
						case h.BRd.LIGHT:
							return b
					}
				}(x), y = p.ZP.getGuildIconURL({
					id: t.id,
					icon: t.icon,
					size: 50
				});
				return (0, r.jsxs)(l.P3F, {
					className: i()(f.card, n),
					onClick: a,
					"aria-label": g.intl.string(g.t.RB4L29),
					children: [(0, r.jsxs)("div", {
						className: f.cardHeader,
						children: [(0, r.jsx)("img", {
							src: j,
							alt: "",
							className: f.splashImage
						}), (0, r.jsx)("div", {
							className: f.guildIcon,
							children: (0, r.jsx)(o.ZP, {
								mask: o.ZP.Masks.AVATAR_DEFAULT,
								width: 58,
								height: 58,
								children: (0, r.jsx)("div", {
									className: f.iconMask,
									children: (0, r.jsx)(c.Z, {
										className: f.__invalid_icon,
										iconSrc: y,
										guild: v,
										size: c.Z.Sizes.LARGE
									})
								})
							})
						})]
					}), (0, r.jsxs)("div", {
						className: f.cardDetails,
						children: [(0, r.jsxs)("div", {
							className: f.guildNameWrapper,
							children: [(0, r.jsx)(d.Z, {
								className: f.guildBadge,
								guild: t,
								tooltipColor: l.ua7.Colors.PRIMARY
							}), (0, r.jsx)(l.X6q, {
								variant: "heading-md/semibold",
								className: f.guildName,
								children: t.name
							})]
						}), (0, r.jsx)(l.Text, {
							className: f.guildDescription,
							variant: "text-sm/normal",
							color: "header-secondary",
							lineClamp: 2,
							children: t.description
						}), (0, r.jsx)("div", {
							className: f.memberInfo,
							children: (0, r.jsxs)("div", {
								className: f.memberCountWrapper,
								children: [(0, r.jsx)(l.tBG, {
									color: "currentColor",
									className: f.memberCountIcon,
									size: "xs"
								}), (0, r.jsx)(l.Text, {
									variant: "text-xs/normal",
									color: "header-secondary",
									children: g.intl.format(g.t.zRl6XV, {
										count: t.approximate_member_count
									})
								})]
							})
						})]
					})]
				})
			}
		},
		547563: function(e, t, n) {
			n.d(t, {
				Z: () => _
			}), n(35282);
			var r, a, i = n(255367);
			n(73800);
			var l = n(159635),
				s = n.n(l),
				o = n(481060),
				c = n(447543),
				d = n(15470),
				u = n(960904),
				p = n(830121),
				m = n(746878),
				h = n(241209);

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
			let f = /^discord.gg\/[a-zA-Z0-9-]+/,
				_ = (r = g({}, h.Z.rules), a = a = {
					heading: g({}, d.i.heading),
					image: g({}, s().defaultRules.image),
					inviteLink: {
						order: h.Z.rules.link.order + 1,
						match: (e, t) => t.inline ? f.exec(e) : null,
						parse: (e, t, n) => {
							let r = (0, p.zO)(e[0]);
							return null == r || r.type !== u.g.INVITE ? {
								type: "text",
								content: e[0]
							} : {
								type: "inviteLink",
								content: [{
									type: "text",
									content: e[0]
								}],
								onClick: () => {
									var e;
									c.ZP.acceptInviteAndTransitionToInviteChannel({
										inviteKey: r.code,
										context: {
											location: "Application Directory"
										}
									}), null == (e = n.closeModal) || e.call(n)
								}
							}
						},
						react: (e, t, n) => (0, i.jsx)(o.eee, {
							onClick: t => {
								t.preventDefault(), e.onClick()
							},
							children: (0, m.S)(e, t, n)
						}, n.key)
					}
				}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						n.push.apply(n, r)
					}
					return n
				})(Object(a)).forEach(function(e) {
					Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
				}), r)
		},
		370648: function(e, t, n) {
			n.d(t, {
				Z: () => p
			});
			var r = n(255367);
			n(73800);
			var a = n(105862),
				i = n(322665),
				l = n(17845),
				s = n(374939),
				o = n(283293),
				c = n(499692),
				d = n(388032),
				u = n(403296);
			let p = function(e) {
				let {
					onScroll: t,
					onSelectApplication: n
				} = e;
				return (0, r.jsxs)(o.Z, {
					onScroll: t,
					children: [(0, r.jsx)(l.Z, {
						title: d.intl.format(d.t["kEcZ9/"], {}),
						description: d.intl.string(d.t.XxFts7),
						children: (0, r.jsx)(i.Z, {})
					}), (0, r.jsx)(s.Z, {
						children: (0, r.jsxs)("div", {
							className: u.contentContainer,
							children: [(0, r.jsx)(c.Z, {
								onSelectApplication: n
							}), (0, r.jsx)(a.Z, {
								showImage: !1,
								padding: !0
							})]
						})
					})]
				})
			}
		},
		499692: function(e, t, n) {
			n.d(t, {
				Z: () => O
			}), n(388685);
			var r = n(255367),
				a = n(73800),
				i = n(120356),
				l = n.n(i),
				s = n(535655),
				o = n(973693),
				c = n(912370),
				d = n(873199),
				u = n(442837),
				p = n(481060),
				m = n(434650),
				h = n(857192),
				g = n(471518),
				f = n(425986),
				_ = n(881294),
				b = n(523311),
				x = n(797908),
				v = n(292191),
				C = n(981631),
				j = n(537833);
			let y = o.Y.APPLICATION_DIRECTORY;

			function I(e) {
				let {
					collection: t,
					index: n,
					onSelectApplication: i
				} = e, s = function(e) {
					let {
						collectionId: t,
						index: n
					} = e, [r, i] = a.useState(!1), l = (0, m.O)(e => {
						e && i(!0)
					});
					return a.useEffect(() => {
						r && (0, _.zZ)(C.rMx.APP_DIRECTORY_COLLECTION_VIEWED, {
							collection_id: t,
							collection_position: n
						})
					}, [r, t, n]), l
				}({
					collectionId: t.id,
					index: n
				}), o = a.useCallback((e, r) => {
					(0, _.zZ)(C.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
						collection_id: t.id,
						item_position: r,
						collection_position: n,
						application_id: e
					}), i(e)
				}, [t.id, n, i]);
				return (0, r.jsxs)("div", {
					ref: s,
					children: [(0, r.jsx)(p.X6q, {
						className: l()(j.sectionTitle, {
							[j.titleExtraPadding]: 0 === n
						}),
						variant: "heading-lg/semibold",
						color: "header-primary",
						children: t.title
					}), (0, r.jsx)("div", {
						className: j.content,
						children: t.application_directory_collection_items.map((e, t) => e.type !== c.C.APPLICATION || null == e.application ? null : (0, r.jsx)(x.Z, {
							application: e.application,
							onSelectApplication: () => o(e.application.id, t),
							showCategory: !0
						}, e.id))
					})]
				})
			}
			let O = function(e) {
				let {
					onSelectApplication: t
				} = e, n = (0, u.e7)([h.default], () => h.default.onlyShowPreviewAppCollections) ? s.E.PREVIEW : s.E.ACTIVE, i = (0, u.e7)([f.Z], () => f.Z.getFetchState({
					surface: y,
					activeState: n
				})), l = (0, u.e7)([f.Z], () => f.Z.getCollections({
					surface: y,
					activeState: n
				}));
				a.useEffect(() => {
					g.XK({
						surface: y,
						activeState: n
					})
				}, [n]);
				let o = a.useMemo(() => null == l ? void 0 : l.filter(e => e.type !== d.o.GALLERY), [l]);
				return i === f.M.ERROR ? (0, r.jsx)("div", {
					className: j.errorContainer,
					children: (0, r.jsx)(v.Z, {
						className: j.error
					})
				}) : (0, r.jsx)(b.Z, {
					loading: i === f.M.FETCHING,
					children: null == o ? void 0 : o.map((e, n) => (0, r.jsx)(I, {
						collection: e,
						index: n,
						onSelectApplication: t
					}, n))
				})
			}
		},
		120549: function(e, t, n) {
			n.d(t, {
				V: () => _,
				Z: () => f
			}), n(388685);
			var r = n(255367),
				a = n(73800),
				i = n(120356),
				l = n.n(i),
				s = n(442837),
				o = n(481060),
				c = n(89182),
				d = n(706454),
				u = n(678694),
				p = n(216780),
				m = n(388032),
				h = n(129826);

			function g(e) {
				let {
					category: t,
					count: n,
					onSelectCategory: i,
					selected: s
				} = e, c = a.useCallback(() => {
					i(t.id)
				}, [t.id, i]), u = n.toLocaleString(d.default.locale);
				return (0, r.jsxs)(o.P3F, {
					onClick: c,
					className: l()(h.category, {
						[h.selected]: s
					}),
					children: [(0, r.jsx)(o.Text, {
						className: h.name,
						variant: "text-sm/medium",
						color: "header-primary",
						children: t.name
					}), (0, r.jsx)(o.Text, {
						className: h.count,
						variant: "text-sm/normal",
						color: "text-muted",
						children: u
					})]
				})
			}

			function f(e) {
				let {
					countsByCategory: t,
					onSelectCategory: n,
					selectedCategoryId: i
				} = e, l = (0, s.e7)([u.Z], () => u.Z.getCategories()), o = a.useMemo(() => [(0, p.KQ)(), ...l.filter(e => {
					var n;
					return (null != (n = t[e.id]) ? n : 0) !== 0
				})], [l, t]);
				return 0 === o.length ? null : (0, r.jsx)("div", {
					className: h.categories,
					children: o.map(e => {
						var a;
						let l = e.id,
							s = null != (a = t[l]) ? a : 0;
						return (0, r.jsx)(g, {
							category: e,
							count: s,
							selected: l === i,
							onSelectCategory: () => n(e)
						}, l)
					})
				})
			}

			function _(e) {
				var t;
				let {
					countsByCategory: n,
					onSelectCategory: i,
					selectedCategoryId: l
				} = e, d = (0, s.e7)([u.Z], () => u.Z.getCategories()), g = a.useMemo(() => [(0, p.KQ)(), ...d.filter(e => {
					var t;
					return (null != (t = n[e.id]) ? t : 0) !== 0
				})], [d, n]), f = a.useMemo(() => g.map(e => ({
					id: "".concat(e.id),
					label: (0, r.jsx)(c.iG, {
						count: n[e.id],
						name: e.name
					})
				})), [g, n]), _ = a.useCallback(e => {
					let t = g.find(t => t.id === Number(e));
					null != t && i(t)
				}, [i, g]), b = a.useMemo(() => g.find(e => e.id === l), [l, g]);
				return 0 === f.length ? null : (0, r.jsxs)("div", {
					className: h.container,
					children: [(0, r.jsx)(o.Text, {
						variant: "text-sm/medium",
						color: "text-secondary",
						children: m.intl.string(m.t.f09BQE)
					}), (0, r.jsx)(c.ZP, {
						items: f,
						title: null != (t = null == b ? void 0 : b.name) ? t : "",
						onSelect: _,
						selected: "".concat(l),
						"aria-label": m.intl.string(m.t.WHdCwc),
						variant: c.PA.FILLED
					})]
				})
			}
		},
		188607: function(e, t, n) {
			n.d(t, {
				Z: () => p
			});
			var r = n(255367),
				a = n(73800),
				i = n(442837),
				l = n(481060),
				s = n(678694),
				o = n(216780),
				c = n(388032),
				d = n(675017),
				u = n(882008);
			let p = function(e) {
				let {
					selectedCategoryId: t,
					searchAllCategories: n
				} = e, p = (0, i.e7)([s.Z], () => s.Z.getCategories()), m = a.useMemo(() => {
					var e;
					return null == (e = p.find(e => e.id === t)) ? void 0 : e.name
				}, [p, t]), h = t === o.MU || null == m ? c.intl.string(c.t["FVJt+/"]) : c.intl.formatToPlainString(c.t.FjCaND, {
					categoryName: m
				}), g = t === o.MU ? c.intl.string(c.t.GXiMtb) : c.intl.format(c.t.JaLoFB, {
					onClick: n
				});
				return (0, r.jsxs)("div", {
					className: d.container,
					children: [(0, r.jsx)("img", {
						alt: "",
						src: u,
						className: d.image
					}), (0, r.jsx)(l.X6q, {
						variant: "heading-xl/semibold",
						className: d.header,
						children: h
					}), (0, r.jsx)(l.Text, {
						variant: "text-md/normal",
						color: "header-secondary",
						children: g
					})]
				})
			}
		},
		569527: function(e, t, n) {
			n.d(t, {
				Z: () => T
			}), n(65234), n(111804), n(490233), n(97749), n(388685), n(35282);
			var r = n(255367),
				a = n(73800),
				i = n(114858),
				l = n(209173),
				s = n(288385),
				o = n(442837),
				c = n(481060),
				d = n(110924),
				u = n(374939),
				p = n(283293),
				m = n(314897),
				h = n(471518),
				g = n(493646),
				f = n(370210),
				_ = n(678694),
				b = n(177653),
				x = n(216780),
				v = n(881294),
				C = n(523311),
				j = n(797908),
				y = n(258971),
				I = n(133743),
				O = n(120549),
				S = n(188607),
				P = n(979007),
				E = n(981631),
				N = n(709929);

			function T(e) {
				var t;
				let {
					onSelectApplication: n,
					onScroll: T
				} = e, A = (0, o.e7)([m.default], () => m.default.isAuthenticated()), L = a.useRef(null), R = (0, i.TH)(), Z = a.useRef(null), {
					query: w,
					page: D,
					categoryId: k
				} = a.useMemo(() => {
					var e, t;
					let n = new URLSearchParams(R.search),
						r = n.get("page"),
						a = null != r ? Number(r) : 1;
					return {
						query: null != (e = n.get("q")) ? e : "",
						page: a,
						categoryId: null != (t = Number(n.get("category_id"))) ? t : P.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID
					}
				}, [R.search]), M = (0, o.e7)([_.Z], () => _.Z.getCategories()), G = a.useMemo(() => null == M ? void 0 : M.find(e => e.id === k), [M, k]), z = a.useCallback(e => {
					(0, v.zZ)(E.rMx.APP_DIRECTORY_SEARCHED, {
						search_term: w,
						num_results: e,
						current_page: y.m_.SEARCH,
						result_page: D,
						category: null == G ? void 0 : G.name,
						category_id: null == G ? void 0 : G.id
					})
				}, [w, D, null == G ? void 0 : G.name, null == G ? void 0 : G.id]);
				a.useEffect(() => {
					var e;
					null == (e = L.current) || e.scrollTo({
						to: 0
					}), w !== Z.current && (Z.current = w, h.yC({
						query: w,
						options: {
							source: s.F.APP_DIRECTORY
						}
					})), h.yC({
						query: w,
						options: {
							categoryId: k,
							page: D,
							pageSize: P.PAGE_SIZE,
							source: s.F.APP_DIRECTORY
						},
						onSuccessCallback: z
					})
				}, [k, D, w, z]);
				let {
					fetchState: B,
					searchResults: U
				} = (0, o.cj)([b.Z], () => ({
					fetchState: b.Z.getFetchState({
						query: w,
						categoryId: k,
						page: D,
						pageSize: P.PAGE_SIZE,
						source: s.F.APP_DIRECTORY
					}),
					searchResults: b.Z.getSearchResults({
						query: w,
						categoryId: k,
						page: D,
						pageSize: P.PAGE_SIZE,
						source: s.F.APP_DIRECTORY
					})
				})), F = (0, o.cj)([b.Z], () => {
					let e = b.Z.getSearchResults({
						query: w,
						source: s.F.APP_DIRECTORY
					});
					return null != e ? function(e) {
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
						[x.MU]: e.totalCount
					}, e.countsByCategory) : {}
				}), V = (0, d.Z)(U), H = a.useMemo(() => B === f.M.FETCHING ? V : U, [B, V, U]), Y = a.useCallback(e => {
					(0, I.pR)({
						query: w,
						categoryId: k,
						page: e
					})
				}, [k, w]), W = a.useCallback(e => {
					(0, v.zZ)(E.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
						category: e.name,
						category_id: e.id,
						current_page: y.m_.SEARCH
					}), (0, I.pR)({
						query: w,
						categoryId: e.id
					})
				}, [w]), X = a.useCallback((e, t) => {
					(0, v.zZ)(E.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
						current_page: y.m_.SEARCH,
						application_id: e,
						load_id: null == H ? void 0 : H.loadId,
						search_term: w,
						position: t
					}), n(e)
				}, [null == H ? void 0 : H.loadId, n, w]), K = (0, g.K)();
				return (0, r.jsxs)("div", {
					className: N.container,
					children: [(0, r.jsx)(p.Z, {
						ref: L,
						onScroll: T,
						children: (0, r.jsxs)("div", {
							className: N.innerContainer,
							children: [A ? null : (0, r.jsx)("div", {
								className: N.centeringBuffer
							}), (0, r.jsx)(u.Z, {
								children: (0, r.jsxs)("div", {
									className: N.contentContainer,
									children: [(0, r.jsx)("div", {
										className: N.topFilterContainer,
										children: (0, r.jsx)(O.V, {
											countsByCategory: F,
											selectedCategoryId: k,
											onSelectCategory: W
										})
									}), (0, r.jsx)(C.Z, {
										loading: B === f.M.FETCHING,
										children: B === f.M.FETCHED && (null == H || (null == H ? void 0 : H.results.length) === 0) ? (0, r.jsx)(S.Z, {
											selectedCategoryId: null != k ? k : K.id,
											searchAllCategories: () => W(K)
										}) : (0, r.jsx)("div", {
											className: N.content,
											children: null == H ? void 0 : H.results.map((e, t) => {
												if (e.type === l.s.APPLICATION) {
													let n = e.data;
													return (0, r.jsx)(j.Z, {
														application: n,
														onSelectApplication: e => X(e, t),
														showCategory: !0
													}, n.id)
												}
												return null
											})
										})
									}), (0, r.jsx)(c.DsT, {
										className: N.paginationInput,
										totalCount: Math.min((null != (t = null == H ? void 0 : H.totalPages) ? t : 0) * P.PAGE_SIZE, P.MAX_PAGES * P.PAGE_SIZE),
										pageSize: P.PAGE_SIZE,
										disablePaginationGap: !0,
										hideMaxPage: !0,
										currentPage: D,
										onPageChange: Y
									})]
								})
							})]
						})
					}), (0, r.jsx)("div", {
						className: N.sideFilterContainer,
						children: (0, r.jsx)("div", {
							className: N.sideFilterContent,
							children: (0, r.jsx)(O.Z, {
								countsByCategory: F,
								selectedCategoryId: k,
								onSelectCategory: W
							})
						})
					})]
				})
			}
		},
		44488: function(e, t, n) {
			n.d(t, {
				Pz: () => f,
				ZP: () => _,
				am: () => g
			}), n(388685);
			var r, a = n(255367),
				i = n(73800),
				l = n(120356),
				s = n.n(l),
				o = n(755721),
				c = n(481060),
				d = n(768762),
				u = n(265072);

			function p(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			let m = {
				CENTER: u.alignCenter,
				LEFT: u.alignLeft
			};
			class h extends(r = i.PureComponent) {
				componentDidUpdate(e) {
					let {
						selectedIndex: t
					} = this.props;
					e.selectedIndex !== t && this.handleSelectedIndexChange(t)
				}
				render() {
					let {
						renderItem: e,
						items: t,
						vertical: n,
						paginationContainerClass: r,
						align: l
					} = this.props, o = n ? u.verticalPaginationItemContainer : u.horizontalPaginationItemContainer;
					return (0, a.jsx)(c.yWw, {
						orientation: n ? "vertical" : "horizontal",
						className: s()(o, r, l),
						ref: this.handleSetScrollerRef,
						children: t.map((t, n) => i.cloneElement(e(t, n), {
							onClick: () => this.handlePageClick(n),
							key: n,
							ref: e => {
								this._paginationItemRefs[n] = e
							}
						}))
					})
				}
				constructor(...e) {
					super(...e), p(this, "_scrollerRef", null), p(this, "_paginationItemRefs", []), p(this, "handleSetScrollerRef", e => {
						this._scrollerRef = e
					}), p(this, "handleSelectedIndexChange", e => {
						let t = this._scrollerRef;
						if (null == t) return;
						let n = this._paginationItemRefs[e];
						null != n && t.scrollIntoViewNode({
							node: n,
							animate: !0,
							padding: this.props.scrollToPadding
						})
					}), p(this, "handlePageClick", e => {
						let {
							onSetItem: t
						} = this.props;
						t(e)
					})
				}
			}
			p(h, "Align", m), p(h, "defaultProps", {
				scrollToPadding: {
					top: 0,
					left: 0,
					bottom: 0,
					right: 0
				},
				align: m.CENTER
			});
			class g extends i.PureComponent {
				render() {
					let {
						className: e
					} = this.props;
					return (0, a.jsx)(o.zx, {
						look: o.zx.Looks.BLANK,
						size: o.zx.Sizes.NONE,
						className: s()(u.prevButtonContainer, e),
						onClick: this.handlePrevClick,
						children: (0, a.jsx)(d.Z, {
							className: u.arrow,
							direction: d.Z.Directions.LEFT
						})
					})
				}
				constructor(...e) {
					super(...e), p(this, "handlePrevClick", e => {
						e.stopPropagation(), e.preventDefault();
						let {
							onClick: t
						} = this.props;
						null == t || t(e)
					})
				}
			}
			class f extends i.PureComponent {
				render() {
					let {
						className: e
					} = this.props;
					return (0, a.jsx)(o.zx, {
						look: o.zx.Looks.BLANK,
						size: o.zx.Sizes.NONE,
						className: s()(u.nextButtonContainer, e),
						onClick: this.handleNextClick,
						children: (0, a.jsx)(d.Z, {
							className: u.arrow,
							direction: d.Z.Directions.RIGHT
						})
					})
				}
				constructor(...e) {
					super(...e), p(this, "handleNextClick", e => {
						e.stopPropagation(), e.preventDefault();
						let {
							onClick: t
						} = this.props;
						null == t || t(e)
					})
				}
			}
			let _ = h
		},
		453499: function(e, t, n) {
			n.d(t, {
				Z: () => O
			}), n(388685);
			var r, a, i = n(255367),
				l = n(73800),
				s = n(120356),
				o = n.n(s),
				c = n(392711),
				d = n.n(c),
				u = n(846519),
				p = n(755721),
				m = n(570140),
				h = n(578361),
				g = n(768762),
				f = n(259580),
				_ = n(585483),
				b = n(981631),
				x = n(388032),
				v = n(523955);

			function C(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			let j = {
				JUMP: "jump",
				NEXT: "next",
				PREVIOUS: "previous"
			};
			class y extends(r = l.PureComponent) {
				componentDidMount() {
					_.S.subscribe(b.CkL.CAROUSEL_PREV, this.handlePrevious), _.S.subscribe(b.CkL.CAROUSEL_NEXT, this.handleNext)
				}
				componentWillUnmount() {
					_.S.unsubscribe(b.CkL.CAROUSEL_PREV, this.handlePrevious), _.S.unsubscribe(b.CkL.CAROUSEL_NEXT, this.handleNext)
				}
				render() {
					let {
						current: e,
						count: t,
						includeHitboxPadding: n,
						arrowClassName: r,
						paginationDotClassName: a,
						paginationDotSelectedClassName: l,
						paginationArrowIconType: s = "arrow"
					} = this.props, c = o()(v.arrowHitbox, {
						[v.arrowHitboxPadding]: n
					}, r);
					return (0, i.jsxs)("div", {
						className: o()(v.controls, this.props.className),
						children: [(0, i.jsx)(p.zx, {
							look: p.zx.Looks.BLANK,
							className: c,
							onClick: this.handlePrevious,
							"aria-label": x.intl.string(x.t.vgfxaG),
							children: "caret" === s ? (0, i.jsx)(f.Z, {
								className: v.arrow,
								direction: f.Z.Directions.LEFT
							}) : (0, i.jsx)(g.Z, {
								className: v.arrow,
								direction: g.Z.Directions.LEFT
							})
						}), (0, i.jsx)("div", {
							className: v.dots,
							children: d().times(t, t => (0, i.jsx)(p.zx, {
								look: p.zx.Looks.BLANK,
								size: p.zx.Sizes.NONE,
								onClick: () => this.handleDotClick(t),
								className: t === e ? o()(v.dotSelected, l) : o()(v.dotNormal, a),
								"aria-label": x.intl.formatToPlainString(x.t["2SXOrK"], {
									pageNumber: t + 1
								})
							}, "dot-".concat(t)))
						}), (0, i.jsx)(p.zx, {
							look: p.zx.Looks.BLANK,
							className: c,
							onClick: this.handleNext,
							"aria-label": x.intl.string(x.t.XiOHRU),
							children: "caret" === s ? (0, i.jsx)(f.Z, {
								className: v.arrow,
								direction: f.Z.Directions.RIGHT
							}) : (0, i.jsx)(g.Z, {
								className: v.arrow,
								direction: g.Z.Directions.RIGHT
							})
						})]
					})
				}
				constructor(...e) {
					super(...e), C(this, "handleDotClick", e => {
						let {
							onSetItem: t,
							onIntentionalChange: n,
							current: r
						} = this.props;
						null == n || n(r, e, j.JUMP), t(e)
					}), C(this, "handleNext", () => {
						let {
							onIntentionalChange: e,
							current: t,
							onChangePage: n
						} = this.props, r = n(1);
						null == e || e(t, r, j.NEXT)
					}), C(this, "handlePrevious", () => {
						let {
							onIntentionalChange: e,
							current: t,
							onChangePage: n
						} = this.props, r = n(-1);
						null == e || e(t, r, j.PREVIOUS)
					})
				}
			}
			C(y, "defaultProps", {
				includeHitboxPadding: !0
			});
			class I extends(a = l.PureComponent) {
				componentDidMount() {
					m.Z.subscribe("WINDOW_FOCUS", this.handleWindowFocusChange), this.props.initialPaused || this.state.paused || this.startTimer()
				}
				componentWillUnmount() {
					this.stopTimer(), m.Z.unsubscribe("WINDOW_FOCUS", this.handleWindowFocusChange)
				}
				componentDidUpdate(e, t) {
					let n = (e, t) => !e.initialPaused && !t.paused,
						r = n(this.props, this.state),
						a = n(e, t);
					r && !a ? this.startTimer() : !r && a && this.stopTimer();
					let {
						items: i
					} = this.props, {
						visibleIndex: l
					} = this.state;
					null == i[l] && this.changeItem(i, 1)
				}
				startTimer() {
					null != this.props.delay && this.timer.start(this.props.delay, this.nextItem)
				}
				stopTimer() {
					null != this.props.delay && this.timer.stop()
				}
				changeItem(e, t) {
					let n = this.state.visibleIndex + t;
					n < 0 ? n = e.length - 1 : n > e.length - 1 && (n = 0);
					let {
						onChangeItem: r
					} = this.props;
					null == r || r(e[n], this.state.visibleIndex, n);
					let a = t > 0 ? h.n.LEFT : h.n.RIGHT;
					return this.setState({
						visibleIndex: n,
						direction: a
					}), n
				}
				render() {
					let {
						items: e,
						renderItem: t,
						className: n,
						slideAnimatorClassName: r,
						slideAnimatorSpringSettings: a,
						slideAnimatorFadeInOut: l,
						paginationClassName: s,
						paginationArrowClassName: c,
						paginationArrowIconType: d,
						paginationDotClassName: u,
						paginationDotSelectedClassName: p,
						themedPagination: m,
						includeHitboxPadding: g,
						style: f,
						aspectRatio: _,
						children: b
					} = this.props, {
						visibleIndex: x
					} = this.state;
					return (0, i.jsxs)("div", {
						className: v.root,
						children: [(0, i.jsxs)("div", {
							className: o()(v.carouselContainer, n),
							style: f,
							onMouseEnter: this.handleMouseEnter,
							onMouseLeave: this.handleMouseLeave,
							children: [(0, i.jsx)("div", {
								style: {
									aspectRatio: _
								},
								children: (0, i.jsx)(h.Z, {
									className: o()(v.carousel, r),
									step: x,
									direction: this.getCurrentDirection(),
									springSettings: a,
									fadeInOut: l,
									children: t(e[x], x)
								})
							}), e.length > 1 && (0, i.jsx)(y, {
								className: o()(s, m ? v.themedPagination : v.pagination),
								arrowClassName: c,
								includeHitboxPadding: g,
								current: x,
								count: e.length,
								onChangePage: t => this.changeItem(e, t),
								onSetItem: this.handleSetItem,
								onIntentionalChange: this.handleIntentionalChange,
								paginationArrowIconType: d,
								paginationDotClassName: u,
								paginationDotSelectedClassName: p
							})]
						}), null != b && b({
							step: x,
							direction: this.getCurrentDirection()
						})]
					})
				}
				constructor(e) {
					super(e), C(this, "timer", new u.Xp), C(this, "handleWindowFocusChange", e => {
						let {
							focused: t
						} = e;
						this.setState({
							paused: !t
						})
					}), C(this, "getCurrentDirection", () => this.state.direction), C(this, "nextItem", () => {
						let {
							items: e
						} = this.props;
						this.changeItem(e, 1)
					}), C(this, "previousItem", () => {
						let {
							items: e
						} = this.props;
						this.changeItem(e, -1)
					}), C(this, "handleSetItem", e => {
						let {
							visibleIndex: t
						} = this.state, {
							items: n
						} = this.props;
						this.changeItem(n, e - t)
					}), C(this, "handleMouseEnter", () => {
						this.setState({
							paused: !0
						})
					}), C(this, "handleMouseLeave", () => {
						this.setState({
							paused: !1
						})
					}), C(this, "handleIntentionalChange", (e, t, n) => {
						let {
							items: r,
							onIntentionalChange: a
						} = this.props;
						return null == a ? void 0 : a(r[t], e, t, n)
					}), this.state = {
						visibleIndex: !0 === e.randomize ? d().random(0, e.items.length - 1) : 0,
						direction: h.n.LEFT,
						paused: !1
					}
				}
			}
			C(I, "defaultProps", {
				aspectRatio: 16 / 9
			});
			let O = I
		},
		432161: function(e, t, n) {
			e.exports = {
				list: "list__83c7c",
				container: "container__83c7c",
				header: "header__83c7c",
				permission: "permission__83c7c",
				check: "check__83c7c",
				cross: "cross__83c7c"
			}
		},
		361183: function(e, t, n) {
			e.exports = {
				item: "item_cf6769",
				currentItem: "currentItem_cf6769",
				itemImage: "itemImage_cf6769",
				currentImage: "currentImage_cf6769 itemImage_cf6769",
				itemImageWrapper: "itemImageWrapper_cf6769",
				paginationItem: "paginationItem_cf6769",
				storePaginationImg: "storePaginationImg_cf6769",
				selectedStorePaginationItem: "selectedStorePaginationItem_cf6769",
				unselectedStorePaginationItem: "unselectedStorePaginationItem_cf6769",
				overlappingBorder: "overlappingBorder_cf6769",
				paginationVideoOverlay: "paginationVideoOverlay_cf6769",
				paginationVideoPlayPill: "paginationVideoPlayPill_cf6769",
				pagination: "pagination_cf6769",
				carouselButtonsContainer: "carouselButtonsContainer_cf6769",
				arrow: "arrow_cf6769",
				arrowHovered: "arrowHovered_cf6769",
				scroller: "scroller_cf6769",
				video: "video_cf6769",
				mediaPlayer: "mediaPlayer_cf6769",
				videoWrapper: "videoWrapper_cf6769"
			}
		},
		389249: function(e, t, n) {
			e.exports = {
				wrapper: "wrapper__21d85",
				slide: "slide__21d85",
				nav: "nav__21d85",
				navPrev: "navPrev__21d85 nav__21d85",
				navNext: "navNext__21d85 nav__21d85"
			}
		},
		455660: function(e, t, n) {
			e.exports = {
				collapsed: "collapsed_d77896",
				blurb: "blurb_d77896",
				description: "description_d77896",
				toggleCollapseButton: "toggleCollapseButton_d77896",
				assetWrapper: "assetWrapper_d77896",
				asset: "asset_d77896"
			}
		},
		365664: function(e, t, n) {
			e.exports = {
				smallCarousel: "smallCarousel__03498",
				smallCarouselItem: "smallCarouselItem__03498",
				smallCarouselImage: "smallCarouselImage__03498",
				embedContainer: "embedContainer__03498",
				hidden: "hidden__03498",
				spinner: "spinner__03498",
				errorContainer: "errorContainer__03498",
				sizedToParent: "sizedToParent__03498"
			}
		},
		695025: function(e, t, n) {
			e.exports = {
				wrapper: "wrapper__29f4e",
				productsContainer: "productsContainer__29f4e",
				productSection: "productSection__29f4e",
				subscriptionCardSubtext: "subscriptionCardSubtext__29f4e"
			}
		},
		729463: function(e, t, n) {
			e.exports = {
				heading: "heading__66230"
			}
		},
		750567: function(e, t, n) {
			e.exports = {
				container: "container_e9ef78",
				content: "content_e9ef78",
				textContainer: "textContainer_e9ef78",
				buttonContainer: "buttonContainer_e9ef78",
				title: "title_e9ef78",
				uppercase: "uppercase_e9ef78",
				description: "description_e9ef78",
				betaTag: "betaTag_e9ef78",
				gradient: "gradient_e9ef78",
				clientThemes: "clientThemes_e9ef78",
				gradientBackground: "gradientBackground_e9ef78"
			}
		},
		767786: function(e, t, n) {
			e.exports = {
				contentSection: "contentSection_b6bcee",
				content: "content_b6bcee"
			}
		},
		237561: function(e, t, n) {
			e.exports = {
				firstChildSpacingFix: "firstChildSpacingFix_c9a59b",
				tabItem: "tabItem_c9a59b"
			}
		},
		794916: function(e, t, n) {
			e.exports = {
				headerBar: "headerBar__8a7fc",
				overlay: "overlay__8a7fc",
				relative: "relative__8a7fc",
				backdrop: "backdrop__8a7fc",
				icon: "icon__8a7fc",
				iconButton: "iconButton__8a7fc",
				floatingSearchTabsMask: "floatingSearchTabsMask__8a7fc"
			}
		},
		296026: function(e, t, n) {
			e.exports = {
				headerBar: "headerBar__1a9ce",
				headerBarInner: "headerBarInner__1a9ce",
				headerBarContent: "headerBarContent__1a9ce",
				headerBarSearchContent: "headerBarSearchContent__1a9ce"
			}
		},
		602791: function(e, t, n) {
			e.exports = {
				container: "container__65d41",
				measurements: "measurements__65d41",
				tabs: "tabs__65d41",
				tab: "tab__65d41",
				more: "more__65d41",
				selected: "selected__65d41"
			}
		},
		199462: function(e, t, n) {
			e.exports = {
				container: "container__26669",
				measurements: "measurements__26669",
				tabs: "tabs__26669",
				tabWrapper: "tabWrapper__26669",
				tab: "tab__26669",
				more: "more__26669",
				selected: "selected__26669"
			}
		},
		686519: function(e, t, n) {
			e.exports = {
				scroller: "scroller__23746"
			}
		},
		109188: function(e, t, n) {
			e.exports = {
				search: "search__1ac1c",
				searchBar: "searchBar__1ac1c search__1ac1c",
				searchIcon: "searchIcon__1ac1c search__1ac1c",
				searchFloating: "searchFloating__1ac1c"
			}
		},
		290646: function(e, t, n) {
			e.exports = {
				filter: "filter__72086",
				filterBackground: "filterBackground__72086",
				menu: "menu__72086",
				categoryLabel: "categoryLabel__72086"
			}
		},
		66418: function(e, t, n) {
			e.exports = {
				card: "card__84e3e",
				clickable: "clickable__84e3e",
				disabled: "disabled__84e3e",
				placeholderPulse: "placeholderPulse__84e3e",
				cardPlaceholder: "cardPlaceholder__84e3e card__84e3e",
				transitionItem: "transitionItem__84e3e"
			}
		},
		691133: function(e, t, n) {
			e.exports = {
				outerContainer: "outerContainer_e1147e",
				loggedOutContainer: "loggedOutContainer_e1147e",
				innerContainer: "innerContainer_e1147e",
				detailHeaderContainer: "detailHeaderContainer_e1147e",
				detailHeaderSection: "detailHeaderSection_e1147e",
				detailHeaderButtonsContainer: "detailHeaderButtonsContainer_e1147e",
				hidden: "hidden_e1147e",
				hide: "hide_e1147e",
				visible: "visible_e1147e",
				detailHeader: "detailHeader_e1147e",
				searchHeader: "searchHeader_e1147e",
				nagbar: "nagbar_e1147e",
				nagbarActionContainer: "nagbarActionContainer_e1147e",
				logo: "logo_e1147e"
			}
		},
		581330: function(e, t, n) {
			e.exports = {
				wrapper: "wrapper_bb856d",
				icons: "icons_bb856d",
				iconMask: "iconMask_bb856d",
				icon: "icon_bb856d",
				iconSmall: "iconSmall_bb856d",
				iconLarge: "iconLarge_bb856d",
				moreGuilds: "moreGuilds_bb856d",
				moreGuildsSmall: "moreGuildsSmall_bb856d",
				moreGuildsLarge: "moreGuildsLarge_bb856d",
				defaultIcon: "defaultIcon_bb856d"
			}
		},
		833829: function(e, t, n) {
			e.exports = {
				container: "container__00b64",
				spinnerContainer: "spinnerContainer__00b64",
				spinner: "spinner__00b64",
				loading: "loading__00b64"
			}
		},
		619980: function(e, t, n) {
			e.exports = {
				bannerContainer: "bannerContainer_b76d57",
				bannerContent: "bannerContent_b76d57",
				bannerGradient: "bannerGradient_b76d57",
				loaded: "loaded_b76d57",
				fadeIn: "fadeIn_b76d57",
				bannerImage: "bannerImage_b76d57",
				bannerAnimatedContainer: "bannerAnimatedContainer_b76d57",
				videoFadeIn: "videoFadeIn_b76d57",
				videoFadeOut: "videoFadeOut_b76d57",
				fadeOut: "fadeOut_b76d57"
			}
		},
		275459: function(e, t, n) {
			e.exports = {
				container: "container_f215b9",
				card: "card_f215b9",
				avatar: "avatar_f215b9",
				avatarContainer: "avatarContainer_f215b9",
				header: "header_f215b9",
				appDetails: "appDetails_f215b9",
				titleContainer: "titleContainer_f215b9",
				title: "title_f215b9",
				infoContainer: "infoContainer_f215b9",
				appName: "appName_f215b9",
				appCategory: "appCategory_f215b9",
				description: "description_f215b9"
			}
		},
		166596: function(e, t, n) {
			e.exports = {
				container: "container__2abba",
				imageContainer: "imageContainer__2abba",
				image: "image__2abba",
				wiggling: "wiggling__2abba",
				header: "header__2abba"
			}
		},
		34871: function(e, t, n) {
			e.exports = {
				errorContainer: "errorContainer__7b60c",
				error: "error__7b60c"
			}
		},
		175457: function(e, t, n) {
			e.exports = {
				content: "content__87ce6",
				errorContainer: "errorContainer__87ce6",
				error: "error__87ce6",
				paginationInput: "paginationInput__87ce6"
			}
		},
		714002: function(e, t, n) {
			e.exports = {
				detailContainer: "detailContainer__871ff",
				contentContainer: "contentContainer__871ff",
				contentTabsContainer: "contentTabsContainer__871ff",
				contentTabs: "contentTabs__871ff",
				centerContainer: "centerContainer__871ff",
				error: "error__871ff",
				sidebar: "sidebar__871ff"
			}
		},
		348666: function(e, t, n) {
			e.exports = {
				aboutContainer: "aboutContainer__17a6d",
				divider: "divider__17a6d",
				informationContainer: "informationContainer__17a6d"
			}
		},
		284944: function(e, t, n) {
			e.exports = {
				actionContainer: "actionContainer_adfd31",
				iconButton: "iconButton_adfd31",
				small: "small_adfd31",
				wide: "wide_adfd31",
				innerIconButton: "innerIconButton_adfd31",
				tiny: "tiny_adfd31"
			}
		},
		260516: function(e, t, n) {
			e.exports = {
				errorImage: "errorImage_d389c2",
				carousel: "carousel_d389c2"
			}
		},
		462057: function(e, t, n) {
			e.exports = {
				categories: "categories_ed45d7",
				category: "category_ed45d7"
			}
		},
		744939: function(e, t, n) {
			e.exports = {
				sectionContainer: "sectionContainer_c6b177",
				contentContainer: "contentContainer_c6b177",
				commandContainer: "commandContainer_c6b177",
				commandName: "commandName_c6b177"
			}
		},
		924902: function(e, t, n) {
			e.exports = {
				sectionContainer: "sectionContainer__8f46b",
				contentContainer: "contentContainer__8f46b",
				privacyPolicy: "privacyPolicy__8f46b",
				intentsList: "intentsList__8f46b",
				intentContainer: "intentContainer__8f46b",
				intentTextContainer: "intentTextContainer__8f46b"
			}
		},
		393023: function(e, t, n) {
			e.exports = {
				avatarContainer: "avatarContainer_efaad4",
				avatar: "avatar_efaad4",
				infoContainer: "infoContainer_efaad4",
				metadataContainer: "metadataContainer_efaad4",
				disclosuresContainer: "disclosuresContainer_efaad4",
				disclosuresText: "disclosuresText_efaad4"
			}
		},
		553094: function(e, t, n) {
			e.exports = {
				sideContainer: "sideContainer_de3a16",
				gridContainer: "gridContainer_de3a16",
				guildCountContainer: "guildCountContainer_de3a16",
				guildsIconContainer: "guildsIconContainer_de3a16",
				sectionContainer: "sectionContainer_de3a16",
				reducedGap: "reducedGap_de3a16",
				infoSection: "infoSection_de3a16",
				linkGrid: "linkGrid_de3a16"
			}
		},
		845958: function(e, t, n) {
			e.exports = {
				container: "container__8a003",
				list: "list__8a003",
				listItem: "listItem__8a003",
				linkItem: "linkItem__8a003",
				listIcon: "listIcon__8a003",
				listText: "listText__8a003",
				listImage: "listImage__8a003"
			}
		},
		582735: function(e, t, n) {
			e.exports = {
				overviewContainer: "overviewContainer_c4b47c",
				descriptionClamp: "descriptionClamp_c4b47c",
				descriptionClampSafari: "descriptionClampSafari_c4b47c",
				detailedDescription: "detailedDescription_c4b47c",
				showMoreButton: "showMoreButton_c4b47c",
				showMoreContent: "showMoreContent_c4b47c",
				showMoreButtonIcon: "showMoreButtonIcon_c4b47c",
				divider: "divider_c4b47c"
			}
		},
		859708: function(e, t, n) {
			e.exports = {
				sectionContainer: "sectionContainer_f8758b",
				contentContainer: "contentContainer_f8758b"
			}
		},
		886141: function(e, t, n) {
			e.exports = {
				sectionContainer: "sectionContainer__5a4b6",
				divider: "divider__5a4b6",
				sectionHeader: "sectionHeader__5a4b6",
				contentContainer: "contentContainer__5a4b6",
				appContainer: "appContainer__5a4b6",
				appHeader: "appHeader__5a4b6",
				avatar: "avatar__5a4b6",
				titleContainer: "titleContainer__5a4b6",
				appName: "appName__5a4b6",
				appCategory: "appCategory__5a4b6",
				appDescription: "appDescription__5a4b6"
			}
		},
		789362: function(e, t, n) {
			e.exports = {
				storeContainer: "storeContainer_c79ea3",
				productSection: "productSection_c79ea3",
				products: "products_c79ea3",
				legalContainer: "legalContainer_c79ea3"
			}
		},
		335025: function(e, t, n) {
			e.exports = {
				outerContainer: "outerContainer__5a77b",
				innerContainer: "innerContainer__5a77b",
				languageItem: "languageItem__5a77b"
			}
		},
		754726: function(e, t, n) {
			e.exports = {
				card: "card_c59071",
				cardHeader: "cardHeader_c59071",
				splashImage: "splashImage_c59071",
				guildIcon: "guildIcon_c59071",
				iconMask: "iconMask_c59071",
				cardDetails: "cardDetails_c59071",
				guildNameWrapper: "guildNameWrapper_c59071",
				guildBadge: "guildBadge_c59071",
				guildName: "guildName_c59071",
				guildDescription: "guildDescription_c59071",
				memberInfo: "memberInfo_c59071",
				memberCountWrapper: "memberCountWrapper_c59071",
				memberCountIcon: "memberCountIcon_c59071"
			}
		},
		403296: function(e, t, n) {
			e.exports = {
				contentContainer: "contentContainer__77062"
			}
		},
		537833: function(e, t, n) {
			e.exports = {
				sectionTitle: "sectionTitle_d2a5f7",
				titleExtraPadding: "titleExtraPadding_d2a5f7",
				content: "content_d2a5f7",
				errorContainer: "errorContainer_d2a5f7",
				error: "error_d2a5f7"
			}
		},
		129826: function(e, t, n) {
			e.exports = {
				categories: "categories__97499",
				category: "category__97499",
				name: "name__97499",
				count: "count__97499",
				selected: "selected__97499",
				container: "container__97499"
			}
		},
		675017: function(e, t, n) {
			e.exports = {
				container: "container__5682d",
				image: "image__5682d",
				header: "header__5682d"
			}
		},
		709929: function(e, t, n) {
			e.exports = {
				container: "container__1eae0",
				innerContainer: "innerContainer__1eae0",
				centeringBuffer: "centeringBuffer__1eae0",
				contentContainer: "contentContainer__1eae0",
				content: "content__1eae0",
				paginationInput: "paginationInput__1eae0",
				topFilterContainer: "topFilterContainer__1eae0",
				sideFilterContainer: "sideFilterContainer__1eae0",
				sideFilterContent: "sideFilterContent__1eae0"
			}
		},
		265072: function(e, t, n) {
			e.exports = {
				alignCenter: "alignCenter__31873",
				alignLeft: "alignLeft__31873",
				horizontalPaginationItemContainer: "horizontalPaginationItemContainer__31873",
				verticalPaginationItemContainer: "verticalPaginationItemContainer__31873 alignLeft__31873",
				arrow: "arrow__31873",
				arrowContainer: "arrowContainer__31873",
				prevButtonContainer: "prevButtonContainer__31873 arrowContainer__31873",
				nextButtonContainer: "nextButtonContainer__31873 arrowContainer__31873"
			}
		},
		523955: function(e, t, n) {
			e.exports = {
				root: "root__00dfb",
				carouselContainer: "carouselContainer__00dfb",
				carousel: "carousel__00dfb",
				pagination: "pagination__00dfb",
				themedPagination: "themedPagination__00dfb pagination__00dfb",
				controls: "controls__00dfb",
				arrowHitbox: "arrowHitbox__00dfb",
				arrow: "arrow__00dfb",
				arrowHitboxPadding: "arrowHitboxPadding__00dfb",
				dots: "dots__00dfb",
				dot: "dot__00dfb",
				dotNormal: "dotNormal__00dfb dot__00dfb",
				dotSelected: "dotSelected__00dfb dot__00dfb"
			}
		},
		210523: function(e, t, n) {
			e.exports = {
				wrapper: "wrapper__14403",
				image: "image__14403",
				content: "content__14403",
				icon: "icon__14403",
				background: "background__14403"
			}
		},
		559554: function(e, t, n) {
			e.exports = {
				wrapper: "wrapper__3564f",
				cardHeaderImg: "cardHeaderImg__3564f",
				details: "details__3564f",
				description: "description__3564f",
				footer: "footer__3564f"
			}
		}
	}
]);
//# sourceMappingURL=b22a4a397a1dac31.js.map