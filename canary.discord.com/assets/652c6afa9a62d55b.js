"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["85372"], {
		162609: function(e, t, n) {
			n.d(t, {
				P: () => r
			});
			let r = (0, n(818083).B)({
				kind: "user",
				id: "2024-07_contextual_image_recs_user",
				label: "Contextual Image Recommendations",
				defaultConfig: {
					imageRecsEnabled: !1
				},
				treatments: [{
					id: 1,
					label: "Enable the Contextual Image Recommendations with options",
					config: {
						imageRecsEnabled: !0
					}
				}]
			})
		},
		262777: function(e, t, n) {
			n.d(t, {
				v: () => m
			});
			var r = n(73800),
				i = n(442837),
				l = n(581883),
				o = n(592125),
				a = n(699516),
				s = n(594174),
				u = n(294509),
				c = n(629710),
				d = n(721360);

			function m(e) {
				let {
					channelId: t,
					authorId: n
				} = null == e ? {} : (0, c.px)(e);
				return function(e, t) {
					let n = (0, c.AT)(),
						m = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
						h = (0, i.e7)([o.Z, a.Z], () => (0, c.hi)(e, t, [o.Z, a.Z])),
						p = (0, i.e7)([l.Z], () => n.reduce((e, t) => {
							var n, r;
							return n = function(e) {
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
							}({}, e), r = r = {
								[t.harmType]: t.getProtoUserSettings(l.Z.settings)
							}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
								var n = Object.keys(e);
								if (Object.getOwnPropertySymbols) {
									var r = Object.getOwnPropertySymbols(e);
									n.push.apply(n, r)
								}
								return n
							})(Object(r)).forEach(function(e) {
								Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
							}), n
						}, {}), [n], d.l),
						f = r.useMemo(() => null == h || t === (null == m ? void 0 : m.id) || null == m ? [] : n.map(e => {
							let t = p[e.harmType],
								n = null == h ? null : e.getUserSettingsWithDefaults(t)[h];
							return (0, c.aQ)(n) ? e.harmType : null
						}).filter(e => null != e), [h, n, p, t, m]);
					return 0 === f.length ? u.qn.NONE : (0, c.Hz)(f)
				}(t, n)
			}
		},
		976853: function(e, t, n) {
			n.d(t, {
				Z: () => o
			});
			var r = n(399606),
				i = n(592125),
				l = n(176505);

			function o(e) {
				let t = (0, r.e7)([i.Z], () => {
					let t = i.Z.getChannel(e);
					return (null == t ? void 0 : t.parent_id) != null && t.isForumPost() ? i.Z.getChannel(null == t ? void 0 : t.parent_id) : null
				});
				return (null == t ? void 0 : t.hasFlag(l.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0
			}
		},
		169525: function(e, t, n) {
			n.d(t, {
				As: () => g,
				BP: () => y,
				MC: () => x,
				dn: () => f,
				hL: () => I,
				lK: () => O
			}), n(997841);
			var r = n(399606),
				i = n(991621),
				l = n(936141),
				o = n(629710),
				a = n(368844),
				s = n(695346),
				u = n(375954),
				c = n(496675),
				d = n(630388),
				m = n(255269),
				h = n(981631),
				p = n(388032);
			let f = (e, t) => {
					let {
						spoiler: n,
						flags: r = 0
					} = e, a = (0, o.LD)({
						type: i.l.Attachment,
						media: e
					}, t), s = (0, o.UJ)({
						type: i.l.Attachment,
						media: e
					}, t);
					return a.length > 0 ? a[0] : s ? l.wk.POTENTIAL_EXPLICIT_CONTENT : n || (0, d.yE)(r, h.J0y.IS_SPOILER) ? l.wk.SPOILER : null
				},
				y = (e, t, n, r, a) => {
					let s = u.Z.getMessage(t, n);
					if (null == s) return null;
					let c = (0, o.LD)({
							type: i.l.Embed,
							media: e
						}, a),
						d = !s.author.bot && (0, o.UJ)({
							type: i.l.Embed,
							media: e
						}, a);
					return c.length > 0 ? c[0] : d ? l.wk.POTENTIAL_EXPLICIT_CONTENT : r ? l.wk.SPOILER : null
				},
				O = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
						r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
						a = (0, o.LD)({
							type: i.l.GenericMedia,
							media: e
						}, t),
						s = !r && (0, o.UJ)({
							type: i.l.GenericMedia,
							media: e
						}, t);
					return a.includes(l.wk.EXPLICIT_CONTENT) ? l.wk.EXPLICIT_CONTENT : a.includes(l.wk.GORE_CONTENT) ? l.wk.GORE_CONTENT : s ? l.wk.POTENTIAL_EXPLICIT_CONTENT : n ? l.wk.SPOILER : null
				};

			function g(e, t, n) {
				if (null == e) return [!1, void 0];
				let r = function(e) {
					switch (e.type) {
						case a.Ah.EMBED:
							return {
								type: i.l.Embed, media: e
							};
						case a.Ah.ATTACHMENT:
							return {
								type: i.l.Attachment, media: e
							};
						case a.Ah.COMPONENT:
							return {
								type: i.l.GenericMedia, media: e.srcUnfurledMediaItem
							};
						default:
							return null
					}
				}(e);
				if (null == r) return [!1, void 0];
				let s = (0, o.LD)(r, n),
					u = (0, o.UJ)(r, n);
				return s.length > 0 ? [!0, s[0]] : u ? [!0, l.wk.POTENTIAL_EXPLICIT_CONTENT] : e.spoiler ? [t, l.wk.SPOILER] : [!1, void 0]
			}

			function I(e) {
				let {
					channel: t,
					media: n
				} = e, l = (0, r.e7)([c.Z], () => null != t && c.Z.can(h.Plq.MANAGE_MESSAGES, t)), a = s.cC.useSetting(), u = (0, o.kh)(i.n.GUILD);
				return g(n, !(0, m.Z)(a, l), u)
			}
			let x = e => {
				switch (e) {
					case l.wk.EXPLICIT_CONTENT:
					case l.wk.GORE_CONTENT:
						return p.intl.string(p.t.SEgHFh);
					case l.wk.SPOILER:
						return p.intl.string(p.t.XpfDHx);
					default:
						return
				}
			}
		},
		499376: function(e, t, n) {
			n.d(t, {
				Ld: () => u,
				R_: () => s,
				aw: () => c,
				pU: () => d
			}), n(997841), n(35282);
			var r = n(630388),
				i = n(406432),
				l = n(828061),
				o = n(981631);
			let a = /\.(mp3|m4a|ogg|opus|wav|flac)$/i,
				s = e => "IMAGE" === e || "VIDEO" === e || "CLIP" === e || "VISUAL_PLACEHOLDER" === e,
				u = e => "IMAGE" === e || "VIDEO" === e || "VISUAL_PLACEHOLDER" === e;

			function c(e, t) {
				let {
					filename: n,
					width: s,
					height: u
				} = e;
				if (t && null != s && s > 0 && null != u && u > 0)
					if ((0, i.CO)(n)) return "IMAGE";
					else {
						var c;
						if (!(0, i.NU)(n) || null == e.proxy_url) return "INVALID";
						return (0, r.yE)(null != (c = e.flags) ? c : 0, o.J0y.IS_CLIP) ? "CLIP" : "VIDEO"
					} return null != t && a.test(n) && null != e.url ? "AUDIO" : null != e.url && (0, l.O)(n) ? "PLAINTEXT_PREVIEW" : "OTHER"
			}

			function d(e) {
				let {
					contentType: t,
					width: n,
					height: r
				} = e;
				if (null != n && n > 0 && null != r && r > 0) {
					if ((0, i.tw)(t)) return "IMAGE";
					else if ((0, i.X2)(t)) return "VIDEO"
				}
				return "VISUAL_PLACEHOLDER"
			}
		},
		255269: function(e, t, n) {
			n.d(t, {
				Z: () => a,
				_: () => s
			});
			var r = n(399606),
				i = n(695346),
				l = n(496675),
				o = n(981631);

			function a(e, t) {
				switch (e) {
					case o.A2N.ALWAYS:
						return !0;
					case o.A2N.IF_MODERATOR:
						return t;
					case o.A2N.ON_CLICK:
					default:
						return !1
				}
			}

			function s(e) {
				let t = (0, r.e7)([l.Z], () => l.Z.can(o.Plq.MANAGE_MESSAGES, e));
				return !a(i.cC.useSetting(), t)
			}
		},
		884182: function(e, t, n) {
			n.d(t, {
				Z: () => T
			}), n(388685);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				o = n.n(l),
				a = n(512722),
				s = n.n(a),
				u = n(392711),
				c = n.n(u),
				d = n(947849),
				m = n(499376),
				h = n(546432),
				p = n(217702),
				f = n(400003);

			function y(e) {
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

			function O(e, t) {
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
			let g = Math.round((p.Jj - 4) / 2);

			function I(e) {
				let {
					visualMediaItems: t,
					maxWidth: n,
					footer: i
				} = e;
				null != i && s()(1 === t.length, "footer only gets applied to single items");
				let l = t.length;
				if (1 === l) return (0, r.jsx)(x, {
					itemsForLayout: t,
					isSingleImage: !0,
					footer: i,
					maxWidth: n
				});
				if (2 === l) return (0, r.jsx)(j, {
					itemsForLayout: t,
					maxWidth: n
				});
				if (3 === l) return (0, r.jsx)(E, {
					itemsForLayout: t,
					maxWidth: n
				});
				if (4 === l) return (0, r.jsx)(b, {
					itemsForLayout: t,
					maxWidth: n
				});
				let o = l % 3;
				return (0, r.jsxs)(r.Fragment, {
					children: [1 === o && (0, r.jsx)(x, {
						itemsForLayout: t.slice(0, o),
						maxWidth: n
					}), 2 === o && (0, r.jsx)(j, {
						itemsForLayout: t.slice(0, o),
						maxWidth: n
					}), 0 === o ? (0, r.jsx)(w, {
						itemsForLayout: t,
						maxWidth: n
					}) : (0, r.jsx)(w, {
						itemsForLayout: t.slice(o),
						maxWidth: n
					})]
				})
			}

			function x(e) {
				let {
					itemsForLayout: t,
					maxWidth: n,
					isSingleImage: i,
					footer: l
				} = e, a = t[0];
				return (0, r.jsx)("div", {
					className: o()(f.oneByOneGrid, {
						[f.oneByOneGridSingle]: i,
						[f.oneByOneGridMosaic]: !i,
						[f.hasFooter]: null != l
					}),
					children: (0, r.jsx)(P, {
						props: a,
						useFullWidth: !i,
						isSingleItem: !0,
						maxWidth: n,
						footer: l
					})
				})
			}

			function j(e) {
				let {
					itemsForLayout: t,
					maxWidth: n
				} = e, i = Math.round((n - 4) / 2);
				return (0, r.jsx)("div", {
					className: f.oneByTwoGrid,
					children: t.map(e => (0, r.jsx)("div", {
						className: f.oneByTwoGridItem,
						children: (0, r.jsx)(P, {
							props: e,
							maxWidth: i,
							maxHeight: i
						})
					}, e.item.uniqueId))
				})
			}

			function E(e) {
				let {
					itemsForLayout: t,
					maxWidth: n
				} = e, i = Math.round(2 * (n - 4) / 3), l = i / 2;
				return (0, r.jsxs)("div", {
					className: o()(f.oneByTwoGrid, f.oneByTwoLayoutThreeGrid),
					children: [(0, r.jsx)("div", {
						className: f.oneByTwoSoloItem,
						children: (0, r.jsx)(P, {
							props: t[0],
							maxWidth: i
						})
					}), (0, r.jsx)("div", {
						className: f.oneByTwoDuoItem,
						children: (0, r.jsx)("div", {
							className: f.twoByOneGrid,
							children: t.splice(1).map(e => (0, r.jsx)("div", {
								className: f.twoByOneGridItem,
								children: (0, r.jsx)(P, {
									props: e,
									maxWidth: l,
									maxHeight: g
								})
							}, e.item.uniqueId))
						})
					})]
				})
			}

			function b(e) {
				let {
					itemsForLayout: t,
					maxWidth: n
				} = e, i = Math.round((n - 4) / 2);
				return (0, r.jsx)("div", {
					className: f.twoByTwoGrid,
					children: t.map(e => (0, r.jsx)(P, {
						props: e,
						maxWidth: i,
						maxHeight: g,
						displayGridItem: !0
					}, e.item.uniqueId))
				})
			}

			function w(e) {
				let {
					itemsForLayout: t,
					maxWidth: n
				} = e, i = Math.round((n - 8) / 3);
				return (0, r.jsx)("div", {
					className: f.threeByThreeGrid,
					children: t.map(e => (0, r.jsx)(P, {
						props: e,
						maxWidth: i,
						maxHeight: i,
						displayGridItem: !0
					}, e.item.uniqueId))
				})
			}
			let C = e => ({
					className: o()(e, f.itemContentContainer),
					imgContainerClassName: f.lazyImgContainer,
					imgClassName: f.lazyImg
				}),
				v = e => ({
					className: o()(e, f.lazyImg)
				});

			function P(e) {
				let {
					props: t,
					maxWidth: n = p.mT,
					maxHeight: i = p.Jj,
					useFullWidth: l = !0,
					isSingleItem: o = !1,
					footer: a,
					displayGridItem: s
				} = e, u = t.item.type, c = O(y({}, t, "IMAGE" === u && C(t.className), "VIDEO" === u && v(t.className)), {
					displayGridItem: s,
					mediaLayoutType: p.hV.MOSAIC,
					maxWidth: n,
					maxHeight: i,
					useFullWidth: l,
					isSingleMosaicItem: o
				});
				return (0, r.jsx)(d.h.Provider, {
					value: t.gifFavoriteButton,
					children: (0, r.jsx)(h.ZP, O(y({}, c), {
						footer: a
					}))
				})
			}
			let T = function(e) {
				var t;
				let {
					items: n,
					isInAppComponentsV2: l = !1
				} = e, {
					groupableVisualMediaItems: a,
					nonGroupableVisualMediaItems: s,
					nonVisualMediaItems: u
				} = (t = n, i.useMemo(() => {
					let [e, n] = c().partition(t, e => (0, m.R_)(e.item.type)), [r, i] = c().partition(e, e => (0, m.Ld)(e.item.type));
					return {
						groupableVisualMediaItems: r,
						nonGroupableVisualMediaItems: i,
						nonVisualMediaItems: n
					}
				}, [t])), d = l ? p.Y9 : p.mT;
				return (0, r.jsxs)(r.Fragment, {
					children: [a.length > 0 && (0, r.jsx)("div", {
						className: o()(f.visualMediaItemContainer, {
							[f.isInAppComponentsV2]: l
						}),
						children: (0, r.jsx)(I, {
							visualMediaItems: a,
							maxWidth: d
						})
					}), s.length > 0 && s.map(e => {
						let t = e.renderMosaicItemFooter({
							item: e.item,
							message: e.message
						});
						return (0, r.jsx)("div", {
							className: o()(f.visualMediaItemContainer, {
								[f.isInAppComponentsV2]: l
							}),
							children: (0, r.jsx)(I, {
								visualMediaItems: [e],
								footer: t,
								maxWidth: d
							})
						}, e.item.uniqueId)
					}), u.length > 0 && (0, r.jsx)("div", {
						className: f.nonVisualMediaItemContainer,
						children: u.map(e => (0, r.jsx)("div", {
							className: f.nonVisualMediaItem,
							children: (0, r.jsx)(P, {
								props: e
							})
						}, e.item.uniqueId))
					})]
				})
			}
		},
		546432: function(e, t, n) {
			n.d(t, {
				OB: () => S,
				ZP: () => k,
				mz: () => _
			}), n(997841), n(388685), n(539854), n(35282), n(415506);
			var r = n(255367),
				i = n(73800),
				l = n(120356),
				o = n.n(l),
				a = n(228458),
				s = n(481060),
				u = n(393238),
				c = n(399654),
				d = n(162609),
				m = n(370298),
				h = n(95398),
				p = n(167080),
				f = n(247206),
				y = n(936141),
				O = n(262777),
				g = n(947849),
				I = n(124347),
				x = n(976853),
				j = n(592125),
				E = n(626135),
				b = n(630388),
				w = n(956664),
				C = n(499376),
				v = n(217702),
				P = n(981631),
				T = n(388032),
				N = n(308315),
				M = n(166011);

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

			function L(e, t) {
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

			function S(e, t) {
				var n;
				return {
					uniqueId: e.id,
					originalItem: e,
					type: (0, C.aw)(e, t),
					downloadUrl: e.url,
					height: e.height,
					width: e.width,
					spoiler: e.spoiler,
					contentType: e.content_type,
					srcIsAnimated: (0, b.yE)(null != (n = e.flags) ? n : 0, P.J0y.IS_ANIMATED)
				}
			}
			let _ = e => {
				let {
					mimeType: t,
					downloadURL: n,
					onRemoveItem: l,
					showDownload: a,
					showImageAppPicker: c,
					isVisualMediaType: d,
					channelId: h
				} = e, f = i.useRef(null), [y, O] = i.useState(0);
				(0, u.PM)(f, e => {
					let {
						width: t
					} = e;
					null != t && O(Math.floor((t - 8) / 32))
				});
				let g = [],
					[I, x] = i.useState(!1),
					j = i.useCallback(() => x(e => !e), []);
				c && g.push((0, r.jsx)(m.Z, {
					toggleShowMenu: j,
					showMenu: I,
					channelId: h,
					className: o()(M.hoverButton, {
						[M.selected]: I
					}),
					imageUrl: n,
					mimeType: t
				}, "app")), null != l && g.push((0, r.jsx)(s.ua7, {
					text: T.intl.string(T.t["/XT3io"]),
					children: e => (0, r.jsx)(s.P3F, L(A({}, e), {
						className: o()(M.hoverButton, N.removeMosaicItemHoverButton),
						focusProps: {
							offset: 2
						},
						onClick: l,
						"aria-label": T.intl.string(T.t["0+xZHx"]),
						children: (0, r.jsx)(s.XHJ, {
							size: "custom",
							color: "currentColor",
							width: 20,
							height: 20
						})
					}))
				}, "remove")), a && g.push((0, r.jsx)(s.ua7, {
					text: T.intl.string(T.t["1WjMbG"]),
					children: e => (0, r.jsx)(p.Z, L(A({}, e), {
						target: "_blank",
						rel: "noreferrer noopener",
						className: M.hoverButton,
						iconClassName: N.downloadHoverButtonIcon,
						focusProps: {
							offset: 2
						},
						href: n,
						mimeType: t
					}))
				}, "download"));
				let E = Math.max(0, g.length - y);
				return (0, r.jsxs)(r.Fragment, {
					children: [y > 0 && g.length > 0 && (0, r.jsx)("div", {
						className: o()(M.hoverButtonGroup, {
							[M.nonMediaMosaicItem]: !d,
							[M.forceShowHover]: I
						}),
						children: g.slice(E)
					}), (0, r.jsx)("div", {
						ref: f,
						className: M.sizer
					})]
				})
			};

			function D(e) {
				let {
					message: t,
					item: n,
					autoPlayGif: l,
					canRemoveItem: u,
					onRemoveItem: m,
					onClick: h,
					handlePreloadImage: p,
					onContextMenu: f,
					onPlay: y,
					renderImageComponent: O,
					renderVideoComponent: b,
					renderAudioComponent: C,
					renderPlaintextFilePreview: M,
					renderGenericFileComponent: A,
					renderVisualPlaceholderComponent: L,
					className: S,
					imgContainerClassName: D,
					imgClassName: k,
					focusable: G,
					hiddenSpoilers: W,
					mediaLayoutType: F,
					maxWidth: R,
					maxHeight: H,
					hasFooter: V,
					useFullWidth: Z,
					isVisualMediaType: B,
					onVideoControlsShow: U,
					onVideoControlsHide: X,
					isSearchResult: J
				} = e, {
					width: q,
					height: z,
					spoiler: Y,
					type: K,
					contentType: Q
				} = n, [$, ee] = i.useState(!1), [et, en] = i.useState(!1), er = t.getChannelId(), ei = j.Z.getChannel(er), el = (0, x.Z)(er), eo = d.P.useExperiment({
					location: "MediaMosaicItem"
				}, {
					autoTrackExposure: !0
				}).imageRecsEnabled, ea = i.useMemo(() => null != Q && -1 !== Q.indexOf("/") ? Q.split("/") : ["unknown", "unknown"], [Q]), es = "IMAGE" === K && !I.uo.test(n.downloadUrl) && !((I.YG.test(n.downloadUrl) || I.FH.test(n.downloadUrl)) && !0 === n.srcIsAnimated), eu = !1;
				if (B) {
					(null == q || null == z) && (eu = !0);
					let e = (0, w.Dc)({
						width: null != q ? q : 0,
						height: null != z ? z : 0,
						maxWidth: null != R ? R : v.mT,
						maxHeight: null != H ? H : v.Jj
					});
					!Z && (e * (null != q ? q : 0) < v.OF || e * (null != z ? z : 0) < v.OF) && (eu = !0)
				}
				let ec = i.useCallback(() => {
						m(n)
					}, [n, m]),
					ed = i.useCallback(e => {
						if (es && !eu && !0 !== J)
							if (e && !et) {
								if (en(!0), eo) {
									var t;
									(0, c.a)({
										channelId: null != (t = null == ei ? void 0 : ei.id) ? t : "",
										location: a.I.CONTEXTUAL_IMAGE,
										withCommands: !0
									})
								}
								E.default.track(P.rMx.IMAGE_HOVERED, {
									guild_id: null == ei ? void 0 : ei.guild_id,
									channel_id: null == ei ? void 0 : ei.id,
									image_recommendations_shown: eo
								})
							} else !e && et && en(!1)
					}, [et, ei, eo, es, eu, J]),
					em = i.useCallback(() => {
						if (F === v.hV.MOSAIC) {
							let e = !el && ["VIDEO", "CLIP", "AUDIO"].includes(K) || "OTHER" === K;
							return eu ? null : !$ && (0, r.jsx)(_, {
								mimeType: ea,
								downloadURL: n.downloadUrl,
								showDownload: e,
								showImageAppPicker: es && eo && !0 !== J,
								onRemoveItem: u ? ec : void 0,
								isVisualMediaType: B,
								channelId: er
							})
						}
						return u && (0, r.jsx)(s.P3F, {
							className: Y ? N.spoilerRemoveMosaicItemButton : N.removeMosaicItemButton,
							focusProps: {
								offset: {
									bottom: 4
								}
							},
							onClick: () => m(n),
							"aria-label": T.intl.string(T.t["0+xZHx"]),
							children: (0, r.jsx)(s.Dio, {
								size: "xs",
								color: "currentColor"
							})
						})
					}, [F, u, Y, el, K, eu, $, ea, n, es, eo, J, ec, B, er, m]);
				switch (K) {
					case "IMAGE":
						return (0, r.jsx)(g.h.Consumer, {
							children: e => (0, r.jsx)(O, {
								item: n,
								message: t,
								width: q,
								height: z,
								autoPlay: l && !W,
								onClick: h,
								onContextMenu: f,
								shouldHideMediaOptions: el,
								renderAccessory: e,
								renderAdjacentContent: em,
								containerClassName: S,
								className: D,
								imageClassName: k,
								shouldLink: G,
								hiddenSpoilers: W,
								responsive: !0,
								mediaLayoutType: F,
								maxWidth: R,
								maxHeight: H,
								useFullWidth: Z,
								handlePreloadImage: p,
								onMouseEnter: () => ed(!0),
								onMouseLeave: () => ed(!1)
							})
						});
					case "VIDEO":
					case "CLIP":
						return (0, r.jsx)(b, {
							item: n,
							message: t,
							width: q,
							height: z,
							onClick: h,
							onContextMenu: f,
							renderAdjacentContent: em,
							naturalWidth: q,
							naturalHeight: z,
							className: o()(S, {
								[N.hasFooter]: V
							}),
							playable: G,
							responsive: !0,
							mediaLayoutType: F,
							maxWidth: R,
							maxHeight: H,
							useFullWidth: Z,
							mimeType: ea,
							onControlsShow: U,
							onControlsHide: X,
							downloadable: !el,
							mediaPlayerClassName: V ? N.hasFooter : void 0
						});
					case "VISUAL_PLACEHOLDER":
						if (null == L) return null;
						return (0, r.jsx)(L, {
							item: n,
							message: t,
							className: D,
							imageClassName: k,
							maxWidth: R,
							maxHeight: H,
							mediaLayoutType: F,
							useFullWidth: Z
						});
					case "AUDIO":
						return (0, r.jsx)(C, {
							item: n,
							message: t,
							className: S,
							playable: G,
							mimeType: ea,
							renderAdjacentContent: em,
							onVolumeShow: () => ee(!0),
							onVolumeHide: () => ee(!1),
							onPlay: y
						});
					case "PLAINTEXT_PREVIEW":
						return (0, r.jsx)(M, {
							item: n,
							message: t,
							className: S,
							onClick: h,
							onContextMenu: f,
							renderAdjacentContent: em
						});
					case "OTHER":
						return (0, r.jsx)(A, {
							item: n,
							message: t,
							className: S,
							onClick: h,
							onContextMenu: f,
							renderAdjacentContent: em
						});
					case "INVALID":
						return null
				}
			}
			let k = function(e) {
				var {
					className: t,
					item: n,
					message: l,
					getObscureReason: a,
					useFullWidth: s,
					mediaLayoutType: u,
					isSingleMosaicItem: c,
					footer: d,
					displayGridItem: m
				} = e, p = function(e, t) {
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
				}(e, ["className", "item", "message", "getObscureReason", "useFullWidth", "mediaLayoutType", "isSingleMosaicItem", "footer", "displayGridItem"]);
				let {
					width: g,
					height: I,
					type: x
				} = n, j = a(n, (0, O.v)(l)), [E, b] = i.useState(null != j), P = u === v.hV.MOSAIC, T = !P && (null != g && g < 200 || null != I && I < 50), M = "IMAGE" === x || "VIDEO" === x, S = (0, C.R_)(x), _ = c && null != j && (0, f.yf)(g, I), [k, G] = i.useState(!1), W = () => {
					G(!0)
				}, F = () => {
					G(!1)
				}, R = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					return (0, r.jsx)(D, L(A({}, p), {
						item: n,
						message: l,
						getObscureReason: a,
						hiddenSpoilers: e,
						className: o()(t, N.mosaicItemContent, {
							[N.obscured]: E && !T,
							[N.hiddenSpoiler]: E && j === y.wk.SPOILER,
							[N.hiddenExplicit]: E && null != j && y.Xh.has(j),
							[N.hiddenMosaicItem]: E && e,
							[N.inline]: E && T
						}),
						focusable: !e,
						mediaLayoutType: u,
						hasFooter: null != d,
						useFullWidth: !!_ || s,
						isVisualMediaType: S,
						onVideoControlsShow: W,
						onVideoControlsHide: F
					}))
				};
				return (0, r.jsxs)("div", {
					style: m ? {
						minWidth: 0,
						width: "".concat(p.maxWidth, "px")
					} : void 0,
					className: o()(N.mosaicItem, {
						[N.mosaicItemNoJustify]: M,
						[N.mosaicItemFullWidth]: s,
						[N.mosaicItemMediaMosaic]: P,
						[N.hideOverflow]: P && S,
						[N.mosaicItemWithFooter]: null != d
					}),
					children: [null != j ? (0, r.jsx)(h.ZP, {
						type: h.ZP.Types.ATTACHMENT,
						inline: T,
						reason: j,
						isSingleMosaicItem: c,
						obscured: E,
						containerStyles: function(e, t, n) {
							if (!t) return;
							let r = e.width;
							if (void 0 !== e.width && void 0 !== e.height) {
								let {
									width: t
								} = (0, w.Tj)({
									width: e.width,
									height: e.height,
									maxWidth: 400,
									maxHeight: 300
								});
								r = t
							}
							return L(A({}, n !== v.hV.MOSAIC && {
								maxWidth: null != r ? r : "400px"
							}), {
								width: "100%",
								height: "100%",
								justifySelf: "auto"
							})
						}(n, M, u),
						obscurityControlClassName: o()({
							[N.obscureVideoSpacing]: "VIDEO" === x && c && !E && k
						}),
						onToggleObscurity: () => b(e => !e),
						children: e => R(e)
					}) : R(), d]
				})
			}
		}
	}
]);
//# sourceMappingURL=652c6afa9a62d55b.js.map